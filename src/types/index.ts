import type { RuleItem } from "./ruleItem"
// 路由配置
export interface RouterMenu {
  icon?: string
  index: string
  title: string
  children?: RouterMenu[]
}
// 表格配置
export interface FormOptions {
  type: "input" | "password" | "select" | "option" | "checkbox" | "checkbox-group" | "radio" | "radio-group" | "radio-button" | "checkbox" | "date" | "time" | "slider" | "upload" | "switch" | "rate" | "cascader" | "date-picker" | "form"
  label?: string
  prop?: string
  value?: any
  placeholder?: string
  options?: any[]
  rules?: RuleItem[]
  attrs?: any
}

export interface TableOptions {
  label: string
  prop: string
  // 宽
  width?: string | number
  // 对齐方式
  align?: "left" | "center" | "right"
  // 有没有插槽
  slot?: string
  // 是否有自定义列
  action?: boolean
  // 是否可以编辑单一数据
  editor?: boolean
  // 是否可以编辑一整行
  editorRow?: boolean
}
