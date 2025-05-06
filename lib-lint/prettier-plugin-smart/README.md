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
      link: ./docs/开始使用
    - theme: alt
      text: 通用配置
      link: ./docs/通用配置
    - theme: alt
      text: TypeScript支持
      link: ./docs/TypeScript支持
    - theme: alt
      text: JSON自动排序
      link: ./docs/JSON自动排序
features:
  - icon: 🎨
    title: 统一风格
    details: 确保团队代码风格一致性，减少无意义的代码审查讨论
  - icon: ⚙️
    title: 增强功能
    details: 对 TypeScript、JSON 等提供增强格式化功能，超越标准 Prettier
  - icon: 🔄
    title: 自动集成
    details: 与编辑器、Git 钩子无缝集成，确保提交代码前自动格式化
  - icon: 📐
    title: 团队标准
    details: 提供企业级代码风格标准，适配不同项目类型
---

## &nbsp;

# prettier-plugin-smarts

prettier-plugin-smarts 是一个为公司内部前端项目设计的 Prettier 插件，提供了智能的代码格式化功能，特别是针对 JSON 文件的排序和 import 语句的组织。此插件适用于 React、Vue、NestJS 和 TypeScript 项目。

## 特性

- ✅ JSON 文件键排序
- ✅ package.json 文件智能排序
- ✅ ESLint 配置文件排序
- ✅ import 语句排序和分组
- ✅ Vue 单文件组件缩进控制
- ✅ 适用于各种前端框架和技术栈
- ✅ 内置通用代码风格配置，确保所有子项目风格一致

## 安装

```bash
# pnpm
pnpm add -D prettier prettier-plugin-smarts

# npm
npm install --save-dev prettier prettier-plugin-smarts

# yarn
yarn add -D prettier prettier-plugin-smarts
```

## 使用方法

在项目根目录创建 `.prettierrc.js` 文件，并添加以下内容：

```js
module.exports = {
  // 标准的 Prettier 配置
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  arrowParens: 'avoid',
  endOfLine: 'lf',

  // prettier-plugin-smarts 特有配置
  sortJsonKeys: true, // 启用 JSON 键排序
  importOrder: '^react,^@/,^[./]', // 设置 import 排序规则
  vueIndentScriptAndStyle: true, // Vue 文件缩进控制
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

### 与 VS Code 集成

安装 [Prettier VS Code 插件](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)，并在 `settings.json` 中添加以下配置：

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "prettier.requireConfig": true
}
```

## 配置选项

### sortJsonKeys

控制是否对 JSON 文件的键进行排序。特别是 package.json 会使用专门的排序规则。

```js
// .prettierrc.js
module.exports = {
  sortJsonKeys: true, // 默认值为 true
}
```

### importOrder

控制 import 语句的排序规则。使用逗号分隔不同组，使用 `^` 表示正则匹配开头。

```js
// .prettierrc.js
module.exports = {
  importOrder: '^react,^@/,^[./]',
}
```

示例效果：

```js
// 排序前
import './styles.css'
import React from 'react'
import { Component } from '@/components'

// 排序后
import React from 'react'
import { Component } from '@/components'
import './styles.css'
```

### vueIndentScriptAndStyle

控制 Vue 单文件组件中 `<script>` 和 `<style>` 标签内容的缩进。

```js
// .prettierrc.js
module.exports = {
  vueIndentScriptAndStyle: true, // 默认值为 true
}
```

## 与框架配合使用

### React 项目

React 项目可以使用以下配置：

```js
// .prettierrc.js
module.exports = {
  importOrder: '^react,^@/components/,^@/hooks/,^@/utils/,^@/services/,^[./]',
  // 其他配置
}
```

### Vue 项目

Vue 项目可以使用以下配置：

```js
// .prettierrc.js
module.exports = {
  vueIndentScriptAndStyle: true,
  importOrder: '^vue,^@/components/,^@/composables/,^@/utils/,^@/api/,^[./]',
  // 其他配置
}
```

### NestJS 项目

NestJS 项目可以使用以下配置：

```js
// .prettierrc.js
module.exports = {
  importOrder: '^@nestjs/,^@/modules/,^@/services/,^@/entities/,^@/dto/,^[./]',
  // 其他配置
}
```

## 命令行使用

在 `package.json` 中添加脚本命令：

```json
{
  "scripts": {
    "format": "prettier --write \"**/*.{js,jsx,ts,tsx,json,vue,css,scss,md}\"",
    "format:check": "prettier --check \"**/*.{js,jsx,ts,tsx,json,vue,css,scss,md}\""
  }
}
```

运行格式化：

```bash
pnpm run format
```

检查格式是否正确：

```bash
pnpm run format:check
```

## 提交前检查

结合 husky 和 lint-staged 在提交前自动格式化代码：

```bash
pnpm add -D husky lint-staged
```

在 `package.json` 中配置：

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx,json,vue,css,scss,md}": ["prettier --write", "git add"]
  }
}
```

## 常见问题

### 1. 插件冲突

如果遇到与其他 Prettier 插件的冲突，确保 prettier-plugin-smarts 在插件列表中的顺序是最后的：

```js
// .prettierrc.js
module.exports = {
  plugins: [
    // 其他插件
    'prettier-plugin-smarts', // 放在最后
  ],
}
```

### 2. 警告信息"Ignored unknown option"

在使用 `sortJsonKeys` 和 `importOrder` 选项时，你可能会看到类似以下的警告：

```
[warn] Ignored unknown option { sortJsonKeys: true }.
[warn] Ignored unknown option { importOrder: "^react,^@/,^[./]" }.
```

这些警告是由于 Prettier 核心不识别这些自定义选项所导致的，但插件仍然会正常工作。这些警告不会影响格式化结果，可以安全忽略。

如果你想避免这些警告，可以在 `.prettierrc.js` 文件中使用以下配置方式：

```js
// .prettierrc.js
/** @type {import("prettier").Config} */
const config = {
  // 标准 Prettier 配置
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,

  // 插件配置
  plugins: ['prettier-plugin-smarts'],
  sortJsonKeys: true,
  importOrder: '^react,^@/,^[./]',
}

module.exports = config
```

### 3. 自定义排序规则

对于特定项目的自定义 JSON 字段排序，可以创建自定义配置：

```js
// .prettierrc.js
module.exports = {
  sortJsonKeys: true,
  // 其他配置
}
```

## 更新日志

### v1.0.1 (2024-07-XX)

- 🐛 修复: 解决了 `sortJsonKeys` 和 `importOrder` 选项导致的 "Ignored unknown option" 警告问题
- 📝 文档: 添加了常见问题解决方案，包括如何避免警告信息
- 🌟 改进: 增强了插件在 Mono Repo 环境中的配置指导
- 📚 文档: 新增了详细的调试指南

### v1.0.0 (2024-XX-XX)

- 🚀 发布: 首个正式版本
- ✨ 功能: JSON 文件键排序
- ✨ 功能: package.json 文件智能排序
- ✨ 功能: ESLint 配置文件排序
- ✨ 功能: import 语句排序和分组
- ✨ 功能: Vue 单文件组件缩进控制

## 许可证

ISC

## 详细文档

- [开始使用](/lint/prettier-plugin-smarts/docs/开始使用) - 快速上手指南
- [通用配置](/lint/prettier-plugin-smarts/docs/通用配置) - 了解如何配置通用代码风格
- [TypeScript支持](/lint/prettier-plugin-smarts/docs/TypeScript支持) - 增强的 TypeScript 格式化
- [JSON自动排序](/lint/prettier-plugin-smarts/docs/JSON自动排序) - JSON 文件智能排序

## Prettier Plugin Smart

一个智能的Prettier插件，无需配置，自动应用一致的代码格式化规则。

### 特性

- **零配置**：直接安装后即可在项目中使用，无需额外设置
- **统一格式**：为项目提供一致的代码格式化体验
- **可覆盖**：预设配置可以被本地`.prettierrc`文件覆盖，灵活适应项目需求

### 安装

```bash
# 使用npm
npm install --save-dev prettier-plugin-smart

# 使用pnpm
pnpm add -D prettier-plugin-smart

# 使用yarn
yarn add -D prettier-plugin-smart
```

### 使用方法

无需额外配置，安装后即可在项目中使用。如果需要自定义配置，可以在项目根目录创建`.prettierrc`文件进行覆盖。

#### 在已有项目中使用

1. 安装插件
2. 正常使用Prettier命令格式化代码
3. 享受统一的代码格式化体验

#### 手动引入（对于特殊项目）

在`.prettierrc.js`或`.prettierrc.cjs`文件中：

```js
module.exports = {
  plugins: [require('prettier-plugin-smart')],
  ...require('prettier-plugin-smart').defaultOptions,
  // 在这里添加自定义配置以覆盖默认设置
}
```

### 默认格式化规则

```js
{
  semi: false,          // 不添加分号
  singleQuote: true,    // 使用单引号
  trailingComma: 'all', // 尾随逗号
  printWidth: 100,      // 每行最大宽度
  tabWidth: 2,          // 缩进宽度
  useTabs: false,       // 使用空格缩进
  bracketSpacing: true, // 对象括号间距
  arrowParens: 'avoid', // 箭头函数参数括号
  endOfLine: 'lf',      // 行尾符号
}
```

### Prettier 3.x 兼容说明

从Prettier 3.0开始，插件API有所变化。本插件已针对3.x版本进行了适配，确保在最新版本的Prettier中正常工作。主要变更：

1. 移除了不必要的解析器配置
2. 配置注入顺序调整，确保`semi: false`等配置能够正确生效
3. 简化了插件结构，提高了兼容性

### 故障排除

如果你发现配置未生效，可以：

1. 确认项目中没有其他的`.prettierrc`文件覆盖配置
2. 确保在使用Prettier命令时正确加载了插件
3. 尝试在`.prettierrc.js`文件中显式引入插件配置:
   ```js
   module.exports = {
     plugins: [require('prettier-plugin-smart')],
     ...require('prettier-plugin-smart').defaultOptions,
   }
   ```

### 贡献

欢迎提交PR和Issue，一起改进这个插件！

### 许可证

MIT
