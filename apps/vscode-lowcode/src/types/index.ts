// 组件属性类型
export interface ComponentProps {
  [key: string]: string | number | boolean | (() => void)
}

// 组件基本类型定义
export interface Component {
  type: string
  id?: string | number
  props?: ComponentProps
  template?: string
  defaultProps?: ComponentProps
}

// 组件配置类型
export interface ComponentConfig {
  id: string | number
  type: string
  props?: ComponentProps
}

// WebView消息类型
export interface WebViewMessage {
  command: string
  data: any
}
