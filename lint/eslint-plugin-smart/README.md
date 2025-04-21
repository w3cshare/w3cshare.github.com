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
      text: 规则说明
      link: /lint/eslint-plugin-smart/docs/规则说明
    - theme: alt
      text: 配置指南
      link: /lint/eslint-plugin-smart/docs/配置指南
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
    details: 预设合理的规则集，安装后即可使用，节省配置时间
---

# &nbsp;

# eslint-plugin-smart

> 公司通用ESLint规则集，适用于React、Vue、NestJS和TypeScript项目

这个ESLint插件提供了一套全面的代码规范配置，适用于公司内部各类项目，旨在提高代码质量、可维护性和开发效率。它集成了多种常用的ESLint插件和规则，让你可以快速应用最佳实践到你的项目中。

## 安装

```bash
# npm
npm install --save-dev eslint eslint-plugin-smart

# yarn
yarn add --dev eslint eslint-plugin-smart

# pnpm
pnpm add --save-dev eslint eslint-plugin-smart
```

## 使用方法

### 基础配置（适用于所有项目）

```js
// ESLint v9+ (扁平配置系统)
// eslint.config.js
import smartRecommended from 'eslint-plugin-smart/configs/recommended.js';

export default [
  smartRecommended,
  {
    // 这里可以添加自定义规则
  }
];

// ESLint v8 及以下
// .eslintrc.js
module.exports = {
  extends: ['plugin:smart/recommended'],
};
```

### TypeScript项目

```js
// ESLint v9+ (扁平配置系统)
// eslint.config.js
import smartTypeScript from 'eslint-plugin-smart/configs/typescript.js';

export default [
  smartTypeScript,
  {
    // 这里可以添加自定义规则
  }
];

// ESLint v8 及以下
// .eslintrc.js
module.exports = {
  extends: ['plugin:smart/typescript'],
};
```

### React项目

```js
// ESLint v9+ (扁平配置系统)
// eslint.config.js
import smartReact from 'eslint-plugin-smart/configs/react.js';

export default [
  smartReact,
  {
    // 这里可以添加自定义规则
  }
];

// ESLint v8 及以下
// .eslintrc.js
module.exports = {
  extends: ['plugin:smart/react'],
};
```

### Vue项目

```js
// ESLint v9+ (扁平配置系统)
// eslint.config.js
import smartVue from 'eslint-plugin-smart/configs/vue.js';

export default [
  smartVue,
  {
    // 这里可以添加自定义规则
  }
];

// ESLint v8 及以下
// .eslintrc.js
module.exports = {
  extends: ['plugin:smart/vue'],
};
```

### NestJS项目

```js
// ESLint v9+ (扁平配置系统)
// eslint.config.js
import smartNestjs from 'eslint-plugin-smart/configs/nestjs.js';

export default [
  smartNestjs,
  {
    // 这里可以添加自定义规则
  }
];

// ESLint v8 及以下
// .eslintrc.js
module.exports = {
  extends: ['plugin:smart/nestjs'],
};
```

## 自定义配置

你可以根据项目需求自定义规则：

```js
// ESLint v9+ (扁平配置系统)
// eslint.config.js
import smartReact from 'eslint-plugin-smart/configs/react.js';

export default [
  smartReact,
  {
    rules: {
      // 覆盖或添加规则
      'no-console': 'error', // 禁止使用console
      'max-len': ['warn', { code: 100 }], // 修改行长度限制
    }
  }
];

// ESLint v8 及以下
// .eslintrc.js
module.exports = {
  extends: ['plugin:smart/react'],
  rules: {
    'no-console': 'error',
    'max-len': ['warn', { code: 100 }],
  },
};
```

## ESLint v9 兼容性说明

ESLint v9 使用新的扁平配置系统，不再支持 `extends` 字段。如果你遇到类似以下错误：

```
A config object is using the "extends" key, which is not supported in flat config system.
```

请确保使用本文档中 ESLint v9+ 的配置示例，或查看[配置指南](./docs/配置指南.md)了解更多详情。

## 包含的规则集

- **基础规则**：代码风格、错误防范、导入排序等通用规则
- **TypeScript规则**：类型检查、接口定义等TypeScript特定规则
- **React规则**：组件编写、Hooks使用、JSX格式化、可访问性等React特定规则
- **Vue规则**：组件命名、模板格式化、属性排序等Vue特定规则
- **NestJS规则**：后端服务开发相关规则

## 许可证

ISC

## 详细文档

- [快速开始](/lint/eslint-plugin-smart/docs/快速开始) - 在项目中快速配置使用 ESLint
- [规则说明](/lint/eslint-plugin-smart/docs/规则说明) - 详细的规则说明与示例
- [配置指南](/lint/eslint-plugin-smart/docs/配置指南) - 如何定制和扩展配置
- [使用示例](/lint/eslint-plugin-smart/USAGE.md) - 常见场景的使用示例
