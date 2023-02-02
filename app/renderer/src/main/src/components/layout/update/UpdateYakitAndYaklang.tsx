import React, {useEffect, useMemo, useRef, useState} from "react"
import {useGetState, useMemoizedFn} from "ahooks"
import {YaklangInstallHintSvgIcon} from "../icons"
import {Progress} from "antd"
import {DownloadingState} from "@/yakitGVDefine"
import {YakitButton} from "@/components/yakitUI/YakitButton/YakitButton"
import {setLocalValue} from "@/utils/kv"
import {LocalGV} from "@/yakitGV"

import classnames from "classnames"
import styles from "./UpdateYakitAndYaklang.module.scss"
import {failed, success} from "@/utils/notification"

const {ipcRenderer} = window.require("electron")

export interface UpdateYakitAndYaklangProps {
    currentYakit: string
    latestYakit: string
    setLatestYakit: (val: string) => any
    currentYaklang: string
    latestYaklang: string
    setLatestYaklang: (val: string) => any
    isShow: boolean
    onCancel: () => any
}

export const UpdateYakitAndYaklang: React.FC<UpdateYakitAndYaklangProps> = React.memo((props) => {
    const {
        currentYakit,
        latestYakit,
        setLatestYakit,
        currentYaklang,
        latestYaklang,
        setLatestYaklang,
        isShow,
        onCancel
    } = props

    const [yakitProgress, setYakitProgress, getYakitProgress] = useGetState<DownloadingState>()
    const isYakitBreak = useRef<boolean>(false)
    const [yaklangProgress, setYaklangProgress, getYaklangProgress] = useGetState<DownloadingState>()
    const isYaklangBreak = useRef<boolean>(false)

    const [installYakit, setInstallYakit] = useState<boolean>(false)
    const [installedYakit, setInstalledYakit] = useState<boolean>(false)
    const [installYaklang, setInstallYaklang] = useState<boolean>(false)
    const [yaklangLoading, setYaklangLoading] = useState<boolean>(false)

    useEffect(() => {
        ipcRenderer.on("download-yakit-engine-progress", (e: any, state: DownloadingState) => {
            if (isYakitBreak.current) return
            setYakitProgress(state)
        })

        ipcRenderer.on("download-yak-engine-progress", (e: any, state: DownloadingState) => {
            if (isYaklangBreak.current) return
            setYaklangProgress(state)
        })

        return () => {
            ipcRenderer.removeAllListeners("download-yakit-engine-progress")
            ipcRenderer.removeAllListeners("download-yak-engine-progress")
        }
    }, [])

    const isShowYakit = useMemo(() => {
        if (!isShow) return false
        if (!currentYakit || !latestYakit) return false
        if (`v${currentYakit}` !== latestYakit) return true
        else return false
    }, [currentYakit, latestYakit, isShow])
    const isShowYaklang = useMemo(() => {
        if (!isShow) return false
        if (currentYakit !== latestYakit) return true
        else return false
    }, [currentYaklang, latestYaklang, isShow])

    /** 不再提示 */
    const noHint = () => {
        setLocalValue(LocalGV.NoAutobootLatestVersionCheck, true)
        onCancel()
    }

    const yakitLater = useMemoizedFn(() => {
        if (isShowYaklang) setLatestYakit("")
        else onCancel()
    })
    const yaklangLater = () => {
        setLatestYaklang("")
        onCancel()
    }

    const yakitDownload = () => {
        let version = ""
        if (latestYakit.startsWith("v")) version = latestYakit.substr(1)
        setInstallYakit(true)
        ipcRenderer
            .invoke("download-latest-yakit", version)
            .then(() => {
                if (isYakitBreak.current) return
                success("下载完毕")
                if (!yakitProgress?.size) return
                setYakitProgress({
                    time: {
                        elapsed: yakitProgress?.time.elapsed || 0,
                        remaining: 0
                    },
                    speed: 0,
                    percent: 100,
                    // @ts-ignore
                    size: yakitProgress.size
                })
                setInstallYakit(false)
                setInstalledYakit(true)
            })
            .catch((e: any) => {
                if (!isYakitBreak.current) return
                failed(`下载失败: ${e}`)
                setInstallYakit(false)
            })
    }
    const yakitBreak = useMemoizedFn(() => {
        isYakitBreak.current = true
        setInstallYakit(false)
        setYakitProgress(undefined)
        yakitLater()
    })
    const yakitUpdate = useMemoizedFn(() => {
        ipcRenderer.invoke("open-yakit-or-yaklang")
        setTimeout(() => {
            ipcRenderer.invoke("UIOperate", "close")
        }, 100)
    })

    const yaklangDownload = useMemoizedFn(() => {
        ipcRenderer
            .invoke("download-latest-yak", latestYaklang)
            .then(() => {
                if (!isYaklangBreak.current) return

                success("下载完毕")
                if (!getDownloadProgress()?.size) return
                setDownloadProgress({
                    time: {
                        elapsed: downloadProgress?.time.elapsed || 0,
                        remaining: 0
                    },
                    speed: 0,
                    percent: 100,
                    // @ts-ignore
                    size: getDownloadProgress().size
                })
                onUpdate()
            })
            .catch((e: any) => {
                if (!isBreakRef.current) return
                failed(`引擎下载失败: ${e}`)
                setDownloadProgress(undefined)
                setQSShow(false)
            })
    })
    const yaklangBreak = useMemoizedFn(() => {})
    const yaklangUpdate = useMemoizedFn(() => {})

    return (
        <div className={isShow ? styles["update-mask"] : styles["hidden-update-mask"]}>
            <div
                className={classnames(
                    styles["yaklang-update-modal"],
                    isShowYakit ? styles["engine-hint-modal-wrapper"] : styles["modal-hidden-wrapper"]
                )}
            >
                <div className={styles["modal-yaklang-engine-hint"]}>
                    <div className={styles["yaklang-engine-hint-wrapper"]}>
                        <div className={styles["hint-left-wrapper"]}>
                            <div className={styles["hint-icon"]}>
                                <YaklangInstallHintSvgIcon />
                            </div>
                        </div>

                        <div className={styles["hint-right-wrapper"]}>
                            {installedYakit ? (
                                <>
                                    <div className={styles["hint-right-title"]}>Yakit 下载成功</div>
                                    <div className={styles["hint-right-content"]}>
                                        安装需关闭软件，双击安装包即可安装完成，是否立即安装？
                                    </div>

                                    <div className={styles["hint-right-btn"]}>
                                        <div></div>
                                        <div className={styles["btn-group-wrapper"]}>
                                            <YakitButton size='max' type='outline2' onClick={yakitLater}>
                                                取消
                                            </YakitButton>
                                            <YakitButton size='max' onClick={yakitUpdate}>
                                                确定
                                            </YakitButton>
                                        </div>
                                    </div>
                                </>
                            ) : installYakit ? (
                                <div className={styles["hint-right-download"]}>
                                    <div className={styles["hint-right-title"]}>Yakit下载中...</div>
                                    <div className={styles["download-progress"]}>
                                        <Progress
                                            strokeColor='#F28B44'
                                            trailColor='#F0F2F5'
                                            percent={Math.floor((yakitProgress?.percent || 0) * 100)}
                                        />
                                    </div>
                                    <div className={styles["download-info-wrapper"]}>
                                        <div>剩余时间 : {(yakitProgress?.time.remaining || 0).toFixed(2)}s</div>
                                        <div className={styles["divider-wrapper"]}>
                                            <div className={styles["divider-style"]}></div>
                                        </div>
                                        <div>耗时 : {(yakitProgress?.time.elapsed || 0).toFixed(2)}s</div>
                                        <div className={styles["divider-wrapper"]}>
                                            <div className={styles["divider-style"]}></div>
                                        </div>
                                        <div>
                                            下载速度 : {((yakitProgress?.speed || 0) / 1000000).toFixed(2)}
                                            M/s
                                        </div>
                                    </div>
                                    <div className={styles["download-btn"]}>
                                        <YakitButton loading={false} size='max' type='outline2' onClick={yakitBreak}>
                                            取消
                                        </YakitButton>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div className={styles["hint-right-title"]}>检测到 Yakit 版本升级</div>
                                    <div className={styles["hint-right-content"]}>
                                        {`当前版本：v${currentYakit}`}
                                        <br />
                                        {`最新版本：${latestYakit}`}
                                    </div>

                                    <div className={styles["hint-right-btn"]}>
                                        <div>
                                            <YakitButton size='max' type='outline2' onClick={noHint}>
                                                不再提示
                                            </YakitButton>
                                        </div>
                                        <div className={styles["btn-group-wrapper"]}>
                                            <YakitButton size='max' type='outline2' onClick={yakitLater}>
                                                稍后再说
                                            </YakitButton>
                                            <YakitButton size='max' onClick={yakitDownload}>
                                                立即更新
                                            </YakitButton>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={classnames(
                    styles["yaklang-update-modal"],
                    isShowYaklang && !isShowYakit ? styles["engine-hint-modal-wrapper"] : styles["modal-hidden-wrapper"]
                )}
            >
                <div className={styles["modal-yaklang-engine-hint"]}>
                    <div className={styles["yaklang-engine-hint-wrapper"]}>
                        <div className={styles["hint-left-wrapper"]}>
                            <div className={styles["hint-icon"]}>
                                <YaklangInstallHintSvgIcon />
                            </div>
                        </div>

                        <div className={styles["hint-right-wrapper"]}>
                            {installYakit ? (
                                <div className={styles["hint-right-download"]}>
                                    <div className={styles["hint-right-title"]}>引擎下载中...</div>
                                    <div className={styles["download-progress"]}>
                                        <Progress
                                            strokeColor='#F28B44'
                                            trailColor='#F0F2F5'
                                            percent={Math.floor((yaklangProgress?.percent || 0) * 100)}
                                        />
                                    </div>
                                    <div className={styles["download-info-wrapper"]}>
                                        <div>剩余时间 : {(yaklangProgress?.time.remaining || 0).toFixed(2)}s</div>
                                        <div className={styles["divider-wrapper"]}>
                                            <div className={styles["divider-style"]}></div>
                                        </div>
                                        <div>耗时 : {(yaklangProgress?.time.elapsed || 0).toFixed(2)}s</div>
                                        <div className={styles["divider-wrapper"]}>
                                            <div className={styles["divider-style"]}></div>
                                        </div>
                                        <div>
                                            下载速度 : {((yaklangProgress?.speed || 0) / 1000000).toFixed(2)}
                                            M/s
                                        </div>
                                    </div>
                                    <div className={styles["download-btn"]}>
                                        <YakitButton loading={false} size='max' type='outline2' onClick={() => {}}>
                                            取消
                                        </YakitButton>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div className={styles["hint-right-title"]}>检测到引擎版本升级</div>
                                    <div className={styles["hint-right-content"]}>
                                        {`当前版本：${currentYaklang}`}
                                        <br />
                                        {`最新版本：${latestYaklang}`}
                                    </div>

                                    <div className={styles["hint-right-btn"]}>
                                        <div>
                                            <YakitButton size='max' type='outline2' onClick={noHint}>
                                                不再提示
                                            </YakitButton>
                                        </div>
                                        <div className={styles["btn-group-wrapper"]}>
                                            <YakitButton size='max' type='outline2' onClick={() => {}}>
                                                稍后再说
                                            </YakitButton>
                                            <YakitButton size='max' onClick={() => {}}>
                                                立即更新
                                            </YakitButton>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})
