---
layout: home
title: Prettier 企业级插件
description: 为企业级项目提供增强的 Prettier 代码风格统一方案
outline: deep
hero:
  name: prettier-plugin-smarts
  text: 智能代码格式化插件
  tagline: 一致的代码风格，提升团队协作效率
  actions:
    - theme: brand
      text: 快速开始
      link: ./docs/快速开始
    - theme: alt
      text: 配置指南
      link: ./docs/配置指南
features:
  - icon: 🎨
    title: 统一风格
    details: 确保团队代码风格一致性，减少无意义的代码审查讨论
  - icon: 🔄
    title: 自动集成
    details: 与编辑器、Git 钩子无缝集成，确保提交代码前自动格式化
  - icon: 📐
    title: 团队标准
    details: 提供企业级代码风格标准，适配不同项目类型
---

## &nbsp;

# prettier-plugin-smart

## 安装

```bash
# pnpm
pnpm add -D prettier prettier-plugin-smart

# npm
npm install --save-dev prettier prettier-plugin-smart

# yarn
yarn add -D prettier prettier-plugin-smart
```

## 使用方法

在项目根目录创建 `.prettierrc.js` 文件，并添加以下内容：

```js
import prettierPluginSmart from 'prettier-plugin-smart'

export default {
  plugins: [prettierPluginSmart],
  ...prettierPluginSmart.defaultOptions,
}
```

## 通用配置

本插件提供了一套适用于所有子项目的通用 Prettier 配置，确保代码风格一致性。这些配置已经过实践验证，适合大多数前端项目使用。

### 内置的通用配置

```js
{
  // 不使用分号
  semi: false,

  // 使用单引号
  singleQuote: true,

  // 所有可能的地方都添加尾随逗号
  trailingComma: 'all',

  // 每行最大宽度
  printWidth: 100,

  // 缩进宽度为2个空格
  tabWidth: 2,

  // 不使用制表符缩进
  useTabs: false,

  // 在对象字面量的括号之间添加空格
  bracketSpacing: true,

  // 箭头函数参数周围不添加括号
  arrowParens: 'avoid',

  // 使用 LF 作为行尾序列
  endOfLine: 'lf',
}
```

### 在子项目中复用通用配置

您可以在各个子项目中直接引用这些配置，确保整个项目组的代码风格一致：

```js
// 子项目的 .prettierrc.js
const { defaultConfig } = require('prettier-plugin-smart')

module.exports = {
  ...defaultConfig,
  // 在这里添加或覆盖特定于项目的配置
  // 例如：
  // semi: true, // 如果希望在特定项目中使用分号
  // importOrder: '^react,^@/components/,^@/hooks/,^@/utils/,^@/,^[./]',
}
```
