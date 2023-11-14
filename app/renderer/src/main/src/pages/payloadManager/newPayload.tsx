import React, {useEffect, useRef, useState} from "react"
import {Form, Input, Tooltip} from "antd"
import {MenuOutlined} from "@ant-design/icons"
import {useGetState, useMemoizedFn, useThrottleFn} from "ahooks"
import {NetWorkApi} from "@/services/fetch"
import {API} from "@/services/swagger/resposeType"
import styles from "./NewPayload.module.scss"
import {failed, success, warn, info} from "@/utils/notification"
import classNames from "classnames"
import {YakitEmpty} from "@/components/yakitUI/YakitEmpty/YakitEmpty"
import {YakitButton} from "@/components/yakitUI/YakitButton/YakitButton"
import {
    OutlineClouddownloadIcon,
    OutlineDocumentduplicateIcon,
    OutlineExportIcon,
    OutlineFolderaddIcon,
    OutlineImportIcon,
    OutlinePaperclipIcon,
    OutlinePencilaltIcon,
    OutlinePlusIcon,
    OutlineTrashIcon,
    OutlineXIcon
} from "@/assets/icon/outline"
import {OutlineAddPayloadIcon, PropertyIcon} from "./icon"
import {YakitDropdownMenu} from "@/components/yakitUI/YakitDropdownMenu/YakitDropdownMenu"
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd"
import {
    SolidChevrondownIcon,
    SolidChevronrightIcon,
    SolidDatabaseIcon,
    SolidDocumenttextIcon,
    SolidDotsverticalIcon,
    SolidDragsortIcon,
    SolidFolderopenIcon,
    SolidXcircleIcon
} from "@/assets/icon/solid"
import {showYakitModal} from "@/components/yakitUI/YakitModal/YakitModalConfirm"
import {YakitInput} from "@/components/yakitUI/YakitInput/YakitInput"
import Dragger from "antd/lib/upload/Dragger"
const {ipcRenderer} = window.require("electron")

interface CreateDictionariesProps {
    onClose: () => void
}

// 新建字典
export const CreateDictionaries: React.FC<CreateDictionariesProps> = (props) => {
    const {onClose} = props
    // 可上传文件类型
    const FileType = ["image/png", "image/jpeg", "image/png"]
    return (
        <div className={styles["create-dictionaries"]}>
            <div className={styles["header"]}>
                <div className={styles["title"]}>新建字典</div>
                <div className={styles["extra"]} onClick={onClose}>
                    <OutlineXIcon />
                </div>
            </div>
            <div className={styles["explain"]}>
                <div className={styles["explain-bg"]}>
                    <div className={styles["title"]}>可根据需求选择以下存储方式，存储方式不影响使用：</div>
                    <div className={styles["content"]}>
                        <div className={styles["item"]}>
                            <div className={styles["dot"]}>1</div>
                            <div className={styles["text"]}>
                                文件存储：将字典以文件形式保存在本地，不支持命中次数，
                                <span className={styles["hight-text"]}>上传速度更快</span>
                            </div>
                        </div>
                        <div className={styles["item"]}>
                            <div className={styles["dot"]}>2</div>
                            <div className={styles["text"]}>
                                数据库存储：将字典数据读取后保存在数据库中，支持命中次数，
                                <span className={styles["hight-text"]}>搜索更方便</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles["info-box"]}>
                <div className={styles["input-box"]}>
                    <div className={styles["name"]}>
                        字典名<span className={styles["must"]}>*</span>:
                    </div>
                    <div>
                        <YakitInput style={{width: "100%"}} placeholder='请输入...' />
                    </div>
                </div>
                <div className={styles["upload-dragger-box"]}>
                    <Dragger
                        className={styles["upload-dragger"]}
                        accept={FileType.join(",")}
                        // accept=".jpg, .jpeg, .png"
                        multiple={false}
                        maxCount={1}
                        showUploadList={false}
                        beforeUpload={(f) => {
                            if (!FileType.includes(f.type)) {
                                failed(`${f.name}非png、png、jpeg文件，请上传正确格式文件！`)
                                return false
                            }

                            return false
                        }}
                    >
                        <div className={styles["upload-info"]}>
                            <div className={styles["add-file-icon"]}>
                                <PropertyIcon />
                            </div>
                            <div className={styles["content"]}>
                                <div className={styles["title"]}>
                                    可将文件拖入框内，或<span className={styles["hight-light"]}>点击此处导入</span>
                                </div>
                                <div className={styles["sub-title"]}>支持文件夹批量上传</div>
                            </div>
                        </div>
                    </Dragger>
                </div>
                <div className={styles["upload-list"]}>
                    <div className={styles["upload-list-item"]}>
                        <div className={styles["link-icon"]}>
                            <OutlinePaperclipIcon />
                        </div>
                        <div className={styles["text"]}>/sersdsfsd/v1l14n/yakit-projects/sersdsfsd/v1l14n/yakit-projects/projects/project-111.yakitp</div>
                        <div className={styles["close-icon"]}>
                            <SolidXcircleIcon />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles["submit-box"]}>
                <YakitButton disabled={true} type='outline1' icon={<SolidDatabaseIcon />}>
                    数据库存储
                </YakitButton>
                <YakitButton disabled={true} icon={<SolidDocumenttextIcon />}>
                    文件存储
                </YakitButton>
            </div>
        </div>
    )
}

export interface NewPayloadTableProps {}
export const NewPayloadTable: React.FC<NewPayloadTableProps> = (props) => {
    return <div className={styles["new-payload-table"]}></div>
}
export interface NewPayloadListProps {}

// 示例数据，可以根据实际需求进行修改
const initialData = [
    {
        type: "folders",
        name: "文件夹1",
        id: 1,
        isFold: true,
        node: [
            {
                type: "file",
                name: "文件1-1",
                id: 2
            },
            {
                type: "file",
                name: "文件1-2",
                id: 3
            }
        ]
    },
    {
        type: "file",
        name: "文件2-2",
        id: 4
    },
    {
        type: "folders",
        name: "文件夹3",
        isFold: true,
        id: 5,
        node: [
            {
                type: "file",
                name: "文件3-1",
                id: 6
            },
            {
                type: "file",
                name: "文件3-2",
                id: 7
            }
        ]
    }
]

interface DataItem {
    type: string
    name: string
    id: number
    // 文件夹才有 isFold 作用于判断是否展开 默认展开
    isFold?: boolean
    node?: DataItem[]
}

export const NewPayloadList: React.FC<NewPayloadListProps> = (props) => {
    const [destinationDrag, setDestinationDrag] = useState<string>("droppable-payload")

    const [data, setData] = useState<DataItem[]>(initialData)
    const [selectItem, setSelectItem] = useState<number>()
    // 拖放结束时的回调函数
    const onDragEnd = (result) => {
        console.log("result", result)
        const {source, destination, draggableId, type} = result

        if (!destination) {
            return
        }
        console.log("source,destination ", source, destination)
        // 同层内顺序调换
        if (source.droppableId === destination.droppableId) {
            const updatedData = JSON.parse(JSON.stringify(data))

            setData(updatedData)
        }
    }

    /**
     * @description: 计算移动的范围是否在目标范围类destinationDrag
     */
    const onDragUpdate = useThrottleFn(
        (result) => {
            if (!result.destination) {
                setDestinationDrag("")
                return
            }
            if (result.destination.droppableId !== destinationDrag) setDestinationDrag(result.destination.droppableId)
        },
        {wait: 200}
    ).run
    return (
        <div className={styles["new-payload-list"]}>
            <div className={styles["header"]}>
                <div className={styles["title-box"]}>
                    <div className={styles["title"]}>Payload 字典管理</div>
                    <div className={styles["count"]}>8</div>
                </div>
                <div className={styles["extra"]}>
                    <YakitDropdownMenu
                        menu={{
                            data: [
                                {
                                    key: "createDictionaries",
                                    label: (
                                        <div className={styles["extra-menu"]}>
                                            <OutlineAddPayloadIcon />
                                            <div className={styles["menu-name"]}>新建字典</div>
                                        </div>
                                    )
                                },
                                {
                                    key: "createFolder",
                                    label: (
                                        <div className={styles["extra-menu"]}>
                                            <OutlineFolderaddIcon />
                                            <div className={styles["menu-name"]}>新建文件夹</div>
                                        </div>
                                    )
                                }
                            ],
                            onClick: ({key}) => {
                                switch (key) {
                                    case "createDictionaries":
                                        const m = showYakitModal({
                                            title: null,
                                            footer: null,
                                            width: 520,
                                            type: "white",
                                            closable: false,
                                            content: (
                                                <CreateDictionaries
                                                    onClose={() => {
                                                        m.destroy()
                                                    }}
                                                />
                                            )
                                        })
                                        break
                                    case "createFolder":
                                        break
                                    default:
                                        break
                                }
                            }
                        }}
                        dropdown={{
                            trigger: ["click"],
                            placement: "bottomRight"
                        }}
                    >
                        <YakitButton type='secondary2' icon={<OutlinePlusIcon />} />
                    </YakitDropdownMenu>
                </div>
            </div>
            <div className={styles["content"]}>
                <div className={styles["drag-list"]}>
                    <DragDropContext onDragEnd={onDragEnd} onDragUpdate={onDragUpdate}>
                        <Droppable droppableId='droppable-payload' direction='vertical'>
                            {(provided) => (
                                <div ref={provided.innerRef} {...provided.droppableProps}>
                                    {data.map((item, index) => (
                                        <Draggable
                                            key={`draggable-${index}`}
                                            draggableId={`draggable-${index}`}
                                            index={index}
                                        >
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={{
                                                        ...provided.draggableProps.style
                                                    }}
                                                >
                                                    {/* 渲染你的文件夹或文件组件 */}
                                                    {/* 使用 item.type 来区分文件夹和文件 */}
                                                    {item.type === "folders" ? (
                                                        // 渲染文件夹组件
                                                        <FolderComponent
                                                            folder={item}
                                                            selectItem={selectItem}
                                                            setSelectItem={setSelectItem}
                                                            data={data}
                                                            setData={setData}
                                                        />
                                                    ) : (
                                                        // 渲染文件组件
                                                        <FileComponent
                                                            file={item}
                                                            selectItem={selectItem}
                                                            setSelectItem={setSelectItem}
                                                            fileOutside={true}
                                                        />
                                                    )}
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>
            </div>
        </div>
    )
}
interface FolderComponentProps {
    folder: DataItem
    selectItem?: number
    setSelectItem: (id: number) => void
    data: DataItem[]
    setData: (v: DataItem[]) => void
}
export const FolderComponent: React.FC<FolderComponentProps> = (props) => {
    const {folder, selectItem, setSelectItem, data, setData} = props
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    const onIsFold = useMemoizedFn((id: number) => {
        // 文件夹只会存在第一层 不用递归遍历
        const newData = data.map((item) => {
            if (item.id === id) {
                return {...item, isFold: !item.isFold}
            }
            return item
        })
        setData(newData)
    })
    return (
        <>
            <div
                className={classNames(styles["folder"], {
                    [styles["folder-menu"]]: menuOpen
                })}
                onClick={() => onIsFold(folder.id)}
            >
                <div className={styles["folder-header"]}>
                    <div className={styles["is-fold-icon"]}>
                        {folder.isFold ? <SolidChevrondownIcon /> : <SolidChevronrightIcon />}
                    </div>
                    <div className={styles["folder-icon"]}>
                        <SolidFolderopenIcon />
                    </div>
                    <div className={styles["folder-name"]}>{folder.name}</div>
                </div>
                <div
                    className={classNames(styles["extra"], {
                        [styles["extra-dot"]]: menuOpen,
                        [styles["extra-hover"]]: !menuOpen
                    })}
                >
                    <div className={styles["file-count"]}>10</div>
                    <YakitDropdownMenu
                        menu={{
                            data: [
                                {
                                    key: "copyFuzztag",
                                    label: (
                                        <div className={styles["extra-menu"]}>
                                            <OutlineDocumentduplicateIcon />
                                            <div className={styles["menu-name"]}>复制 Fuzztag</div>
                                        </div>
                                    )
                                },
                                {
                                    key: "importPayload",
                                    label: (
                                        <div className={styles["extra-menu"]}>
                                            <OutlineImportIcon />
                                            <div className={styles["menu-name"]}>扩充字典</div>
                                        </div>
                                    )
                                },
                                {
                                    key: "exportTxt",
                                    label: (
                                        <div className={styles["extra-menu"]}>
                                            <OutlineExportIcon />
                                            <div className={styles["menu-name"]}>导出 Txt</div>
                                        </div>
                                    )
                                },
                                {
                                    key: "rename",
                                    label: (
                                        <div className={styles["extra-menu"]}>
                                            <OutlinePencilaltIcon />
                                            <div className={styles["menu-name"]}>重命名</div>
                                        </div>
                                    )
                                },
                                {
                                    key: "delete",
                                    label: (
                                        <div className={styles["extra-menu"]}>
                                            <OutlineTrashIcon />
                                            <div className={styles["menu-name"]}>删除</div>
                                        </div>
                                    )
                                }
                            ],
                            onClick: ({key}) => {
                                switch (key) {
                                    case "copyFuzztag":
                                        break
                                    case "importPayload":
                                        break
                                    default:
                                        break
                                }
                            }
                        }}
                        dropdown={{
                            overlayClassName: styles["payload-list-menu"],
                            trigger: ["click"],
                            placement: "bottomRight",
                            onVisibleChange: (v) => {
                                setMenuOpen(v)
                            }
                        }}
                    >
                        <div
                            className={styles["extra-icon"]}
                            onClick={(e) => {
                                e.stopPropagation()
                            }}
                        >
                            <SolidDotsverticalIcon />
                        </div>
                    </YakitDropdownMenu>
                </div>
            </div>

            {folder.isFold && (
                <Droppable droppableId={`${folder.name}`} direction='vertical'>
                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            {Array.isArray(folder.node) &&
                                folder.node.map((file, index) => (
                                    <Draggable
                                        key={`draggable-${folder.name}-${index}`}
                                        draggableId={`draggable-${folder.name}-${index}`}
                                        index={index}
                                    >
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={{
                                                    ...provided.draggableProps.style
                                                }}
                                            >
                                                {/* 渲染文件组件 */}
                                                <FileComponent
                                                    file={file}
                                                    selectItem={selectItem}
                                                    setSelectItem={setSelectItem}
                                                    fileInside={true}
                                                />
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            )}
        </>
    )
}

interface FileComponentProps {
    file: DataItem
    selectItem?: number
    setSelectItem: (id: number) => void
    fileOutside?: boolean
    fileInside?: boolean
}

export const FileComponent: React.FC<FileComponentProps> = (props) => {
    const {file, selectItem, setSelectItem, fileOutside, fileInside} = props
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    const judgeFileIcon = useMemoizedFn((key) => {
        switch (key) {
            case 1:
                return <SolidDatabaseIcon />
            case 2:
                return <SolidDatabaseIcon />
            default:
                return <SolidDatabaseIcon />
        }
    })
    return (
        <div
            className={classNames(styles["file"], {
                [styles["file-active"]]: file.id === selectItem,
                [styles["file-no-active"]]: file.id !== selectItem,
                [styles["file-menu"]]: menuOpen && file.id !== selectItem,
                [styles["file-outside"]]: fileOutside,
                [styles["file-inside"]]: fileInside
            })}
            onClick={() => {
                setSelectItem(file.id)
            }}
        >
            <div className={styles["file-header"]}>
                <div className={styles["drag-icon"]}>
                    <SolidDragsortIcon />
                </div>
                <div className={classNames(styles["file-icon"], styles["file-icon-database"])}>
                    <SolidDatabaseIcon />
                </div>
                {/* <div className={classNames(styles['file-icon'],styles['file-icon-document'])}>
                    <SolidDocumenttextIcon/>
                </div> */}

                <div className={styles["file-name"]}>{file.name}</div>
            </div>
            <div
                className={classNames(styles["extra"], {
                    [styles["extra-dot"]]: menuOpen,
                    [styles["extra-hover"]]: !menuOpen
                })}
            >
                <div className={styles["file-count"]}>10</div>
                <YakitDropdownMenu
                    menu={{
                        data: [
                            {
                                key: "copyFuzztag",
                                label: (
                                    <div className={styles["extra-menu"]}>
                                        <OutlineDocumentduplicateIcon />
                                        <div className={styles["menu-name"]}>复制 Fuzztag</div>
                                    </div>
                                )
                            },
                            {
                                key: "importPayload",
                                label: (
                                    <div className={styles["extra-menu"]}>
                                        <OutlineImportIcon />
                                        <div className={styles["menu-name"]}>导入 Payload</div>
                                    </div>
                                )
                            },
                            {
                                key: "exportDictionaries",
                                label: (
                                    <div className={styles["extra-menu"]}>
                                        <OutlineExportIcon />
                                        <div className={styles["menu-name"]}>导出字典</div>
                                    </div>
                                )
                            },
                            {
                                key: "rename",
                                label: (
                                    <div className={styles["extra-menu"]}>
                                        <OutlinePencilaltIcon />
                                        <div className={styles["menu-name"]}>重命名</div>
                                    </div>
                                )
                            },
                            {
                                key: "delete",
                                label: (
                                    <div className={styles["extra-menu"]}>
                                        <OutlineTrashIcon />
                                        <div className={styles["menu-name"]}>删除</div>
                                    </div>
                                )
                            }
                        ],
                        onClick: ({key}) => {
                            switch (key) {
                                case "copyFuzztag":
                                    break
                                case "importPayload":
                                    break
                                default:
                                    break
                            }
                        }
                    }}
                    dropdown={{
                        overlayClassName: styles["payload-list-menu"],
                        trigger: ["click"],
                        placement: "bottomRight",
                        onVisibleChange: (v) => {
                            setMenuOpen(v)
                        }
                    }}
                >
                    <div
                        className={styles["extra-icon"]}
                        onClick={(e) => {
                            e.stopPropagation()
                        }}
                    >
                        <SolidDotsverticalIcon />
                    </div>
                </YakitDropdownMenu>
            </div>
        </div>
    )
}

export interface NewPayloadProps {}
export const NewPayload: React.FC<NewPayloadProps> = (props) => {
    return (
        <div className={styles["new-payload"]}>
            <div className={styles["payload-list-box"]}>
                <NewPayloadList />
            </div>
            <div className={styles["no-data"]}>
                <YakitEmpty
                    title='暂无 Payload 字典'
                    description='可一键获取官方内置字典，或新建字典'
                    children={
                        <>
                            <YakitButton style={{marginRight: 8}} type='outline1' icon={<OutlineClouddownloadIcon />}>
                                一键获取
                            </YakitButton>
                            <YakitButton icon={<OutlineAddPayloadIcon />}>新建字典</YakitButton>
                        </>
                    }
                />
            </div>
        </div>
    )
}
