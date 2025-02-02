import {TagProps} from "antd"
import type {YakitSizeType} from "../YakitInputNumber/YakitInputNumberType"

/**
 * @description YakitTagProps 的属性
 * @augments TagProps 继承antd的TagProps默认属性
 * @param {middle|large|small} size 默认middle
 * @param {"danger" | "info" | "success" | "warning" | "purple" | "blue" | "cyan" | "bluePurple"} color 颜色
 * @param {boolean} disable
 * @param {boolean} enableCopy 是否可复制
 * @param {(e:MouseEvent) => void} onAfterCopy 复制文字后得事件 enableCopy为true有效
 * @param {string} copyText 复制文字
 * @param {string} iconColor 复制Icon文字
 */

export interface YakitTagProps extends Omit<TagProps, "color"> {
    size?: YakitSizeType
    color?: "danger" | "info" | "success" | "warning" | "purple" | "blue" | "cyan" | "bluePurple"
    disable?: boolean
    enableCopy?: boolean
    onAfterCopy?: (e: MouseEvent) => void
    copyText?:string
    iconColor?: string
}
/**
 * @description: 复制文字
 * @param {(e:MouseEvent) => void} onAfterCopy 复制文字后得事件
 * @param {string} copyText 复制文字
 * @param {string} iconColor 复制Icon文字
 */
export interface CopyComponentsProps {
    onAfterCopy?: (e: MouseEvent) => void
    copyText:string
    iconColor?: string
}
