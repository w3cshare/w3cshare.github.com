import { Component } from '../types'

// 组件类型定义
export const ComponentTypes = {
  BUTTON: 'button',
  INPUT: 'input',
  TEXT: 'text',
} as const

// 组件模板
export const ComponentTemplates: Record<string, Component> = {
  [ComponentTypes.BUTTON]: {
    type: ComponentTypes.BUTTON,
    template: '<button>{text}</button>',
    defaultProps: {
      text: 'Button',
      onClick: '() => {}',
    },
  },
  [ComponentTypes.INPUT]: {
    type: ComponentTypes.INPUT,
    template: '<input type="text" placeholder="{placeholder}" />',
    defaultProps: {
      placeholder: 'Enter text...',
      onChange: '(e) => {}',
    },
  },
  [ComponentTypes.TEXT]: {
    type: ComponentTypes.TEXT,
    template: '<div>{content}</div>',
    defaultProps: {
      content: 'Text content',
    },
  },
}

// 生成组件代码
export function generateComponentCode(component: Component): string {
  const componentTemplate = ComponentTemplates[component.type]
  if (!componentTemplate || !componentTemplate.template) {
    throw new Error(`未找到组件类型 ${component.type} 的模板`)
  }

  const template: string = componentTemplate.template
  const props = { ...componentTemplate.defaultProps, ...component.props }

  let code: string = template
  Object.entries(props).forEach(([key, value]) => {
    if (value !== undefined) {
      code = code.replace(`{${key}}`, value.toString())
    }
  })

  return code // code现在被声明为string类型，不可能是undefined
}

// 生成React组件代码
export function generateReactComponent(components: Component[]): string {
  const imports = `import React from 'react';
`

  const componentCode = components.map(generateComponentCode).join('\n  ')

  return `${imports}

export default function GeneratedComponent() {
  return (
    <div className="generated-container">
      ${componentCode}
    </div>
  );
}
`
}
