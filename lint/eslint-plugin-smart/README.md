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
  - icon: 💅
    title: Prettier 集成
    details: 内置 Prettier 支持，确保代码风格一致性和格式化规范
---

# &nbsp;

# eslint-plugin-smart

## 项目介绍

`eslint-plugin-smart` 是一个智能化的 ESLint 插件，提供了适用于 React、Vue、NestJS 和 TypeScript 项目的公共配置。该插件同时支持 ESLint v9 的扁平配置和 ESLint v8 及以下版本的传统配置格式，能够自动检测 ESLint 版本并应用相应的配置风格。

## 主要特性

- 支持 ESLint v9 扁平配置和 ESLint v8 传统配置
- 自动检测 ESLint 版本并应用相应配置
- 提供针对 TypeScript、React、Vue 和 NestJS 项目的优化规则
- 代码风格、错误防范、导入排序等通用规则集成
- 内置 Prettier 集成，确保代码格式一致性
- 模块化设计，代码组织清晰

## 项目结构

该项目采用了模块化的设计，主要文件包括：

- `eslint-plugin-smart.ts` - 插件入口文件，负责版本检测和配置选择
- `flat-configs.ts` - ESLint v9 扁平配置定义
- `legacy-configs.ts` - ESLint v8 及以下传统配置定义
- `utils.ts` - 工具函数，包含版本检测和插件加载功能
- `recommend.ts` - 预设的推荐规则集
- `types.ts` - 类型定义

## 安装使用

### 安装

```bash
# 使用 npm
npm install eslint-plugin-smart --save-dev

# 使用 pnpm
pnpm add eslint-plugin-smart -D

# 使用 yarn
yarn add eslint-plugin-smart -D
```

### 配置示例

#### ESLint v9 (扁平配置)

```js
// eslint.config.js
import smartPlugin from 'eslint-plugin-smart';

export default [
  ...smartPlugin.configs.typescript,
  // 自定义规则...
];
```

#### ESLint v8 及以下 (传统配置)

```js
// .eslintrc.js
module.exports = {
  extends: [
    'plugin:smart/typescript',
  ],
  // 自定义规则...
};
```

## 可用配置

插件提供了以下几种预设配置：

- `base` - 基础配置，适用于所有项目
- `typescript` - TypeScript 项目配置
- `react` - React 项目配置
- `vue` - Vue 项目配置
- `nestjs` - NestJS 项目配置
- `recommended` - 推荐配置（默认使用 TypeScript 配置）

## Prettier 集成

该插件内置了 Prettier 支持，可以确保代码格式的一致性：

- 自动加载 `eslint-plugin-prettier` 和 `eslint-config-prettier` 插件
- 配置 Prettier 规则，与 ESLint 规则无冲突
- 提供合理的默认格式化选项
- 在所有配置预设中都启用 Prettier 支持

### 默认 Prettier 配置

```js
{
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  endOfLine: 'lf',
}
```

## 最佳实践

1. 对于新项目，建议使用 ESLint v9 扁平配置，性能更好
2. 针对不同框架选择对应的配置预设
3. 利用内置的 Prettier 集成确保代码格式一致性
4. 可以根据项目需求扩展自定义规则

## 贡献指南

欢迎提交 Pull Request 或 Issue。贡献前请先阅读本项目的贡献指南。

## 许可证

MIT
