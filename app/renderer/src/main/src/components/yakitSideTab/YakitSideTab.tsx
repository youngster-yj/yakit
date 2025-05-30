import React from "react"
import {YakitSideTabProps} from "./YakitSideTabType"
import classNames from "classnames"
import {useControllableValue, useMemoizedFn} from "ahooks"
import styles from "./YakitSideTab.module.scss"

export const YakitSideTab: React.FC<YakitSideTabProps> = React.memo((props) => {
    const {yakitTabs, cacheKey, activeKey, onActiveKey} = props
    const [show, setShow] = useControllableValue<boolean>(props, {
        defaultValue: true,
        valuePropName: "show",
        trigger: "setShow"
    })
    const onChange = useMemoizedFn((item) => {
        if (item.value === activeKey) {
            setShow((v) => !v)
        }
        onActiveKey(item.value)
    })
    return (
        <div className={styles["yakit-side-tab"]}>
            {yakitTabs.map((item) => (
                <div
                    key={item.value}
                    className={classNames(styles["yakit-side-tab-item"], {
                        [styles["yakit-side-tab-item-active"]]: item.value === activeKey,
                        [styles["yakit-side-tab-item-show"]]: item.value === activeKey && !show
                    })}
                    onClick={() => onChange(item)}
                >
                    <span className={styles["item-text"]}>{item.label}</span>
                    {item.icon}
                </div>
            ))}
        </div>
    )
})
