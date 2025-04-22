---
layout: home
title: ESLint 企业级插件
description: 为企业级项目提供全面的 ESLint 规则与配置
outline: deep
hero:
  name: eslint-plugin-smart
  text: 智能 ESLint 解决方案
  tagline: 为现代 Web 开发提供统一的代码质量标准
  actions:
    - theme: brand
      text: 快速开始
      link: /lint/eslint-plugin-smart/docs/快速开始
    - theme: alt
      text: 常见问题
      link: /lint/eslint-plugin-smart/docs/常见问题
features:
  - icon: ⚡
    title: 全技术栈支持
    details: 覆盖 JavaScript、TypeScript、React、Vue 等多种技术栈的规则集
  - icon: 🔍
    title: 智能检测
    details: 提供智能的代码质量检测，避免常见错误和隐患
  - icon: 🛠️
    title: 易于配置
    details: 提供预设配置和灵活的自定义选项，快速适应不同团队的需求
  - icon: 📦
    title: 开箱即用
    details: 预设合理的规则集，安装后即可使用，无需额外安装依赖
---

# &nbsp;

# eslint-plugin-smart

> 公司通用ESLint规则集，适用于React、Vue、NestJS和TypeScript项目

这个ESLint插件提供了一套全面的代码规范配置，适用于公司内部各类项目，旨在提高代码质量、可维护性和开发效率。它集成了多种常用的ESLint插件和规则，让你可以快速应用最佳实践到你的项目中。

## 功能特性

- ✅ **内置常用插件**：无需手动安装 `eslint-plugin-import`、`eslint-plugin-simple-import-sort` 和 `eslint-plugin-unused-imports` 等插件
- ✅ **全面的规则集**：覆盖基础规则、TypeScript、React、Vue和NestJS等多种场景
- ✅ **ESLint v9支持**：完全兼容ESLint v9的扁平配置系统
- ✅ **智能检测**：自动检测环境配置最合适的规则
- ✅ **开箱即用**：预设合理的规则集，安装后即可使用

## 安装

::: code-group

```bash [pnpm]
# 使用 pnpm
pnpm add --save-dev eslint eslint-plugin-smart
```

```bash [npm]
# 使用 npm
npm install --save-dev eslint eslint-plugin-smart
```

```bash [yarn]
# 使用 yarn
yarn add --dev eslint eslint-plugin-smart
```

:::

## 快速开始

请查看[快速开始](/lint/eslint-plugin-smart/docs/快速开始)文档了解详细的使用方法、配置示例和规则说明。

### 基础配置（适用于所有项目）

::: code-group

```js [ESLint v9+]
// eslint.config.mjs
import eslintPlugin from 'eslint-plugin-smart';

export default [
  ...eslintPlugin.configs.recommended,
  {
    // 这里可以添加自定义规则
  },
];
```

```js [ESLint v8 及以下]
// .eslintrc.js
module.exports = {
  extends: ['plugin:smart/recommended'],
};
```

:::

## 支持的项目类型

我们为不同类型的项目提供了专门的预设配置：

| 项目类型   | 配置名称      | 特点                      |
| ---------- | ------------- | ------------------------- |
| JavaScript | `recommended` | 基础 JavaScript 规则集    |
| TypeScript | `typescript`  | TypeScript 支持与类型检查 |
| React      | `react`       | React 与 JSX 相关规则     |
| Vue        | `vue`         | Vue 单文件组件与模板规则  |
| NestJS     | `nestjs`      | NestJS 后端项目相关规则   |

## 与编辑器集成

### VSCode

1. 安装 [ESLint VSCode 插件](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. 在 VSCode 中创建或编辑 `.vscode/settings.json` 文件：

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact", "vue"]
}
```

## 文档

- [快速开始](/lint/eslint-plugin-smart/docs/快速开始) - 快速开始、规则说明和配置指南
- [常见问题](/lint/eslint-plugin-smart/docs/常见问题) - 常见问题解答和疑难解决

## 许可证

MIT
