---
layout: home
hero:
  name: eslint-plugin-smart
  text: 智能代码规范插件
  tagline: 为公司内部项目提供统一的代码质量和风格规范
  actions:
    - theme: brand
      text: 快速开始
      link: /docs/快速开始.md
    - theme: brand
      text: 规则说明
      link: /docs/规则说明.md
    - theme: alt
      text: 配置指南
      link: /docs/配置指南.md
features:
  - icon: 🚀
    title: 多框架支持
    details: 完美适配React、Vue、NestJS和TypeScript项目，提供针对性的代码规范
  - icon: 🔧
    title: 预设配置
    details: 提供多种预设配置，无需繁琐设置，一键应用最佳实践
  - icon: 🤖
    title: 智能规则
    details: 智能分析代码上下文，提供更精准的提示和修复建议
  - icon: ⛓️
    title: 可扩展性
    details: 轻松自定义和扩展规则，满足不同项目和团队的特殊需求
  - icon: 🛠️
    title: 开发体验
    details: 与IDE完美集成，提供实时错误提示和自动修复功能
  - icon: 📦
    title: 持续更新
    details: 定期更新规则和最佳实践，保持与最新技术栈和标准的兼容
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
// eslint.config.js (ESLint v9+)
export default {
  extends: ['plugin:smart/recommended'],
};

// .eslintrc.js (ESLint v8 及以下)
module.exports = {
  extends: ['plugin:smart/recommended'],
};
```

### TypeScript项目

```js
// eslint.config.js (ESLint v9+)
export default {
  extends: ['plugin:smart/typescript'],
};

// .eslintrc.js (ESLint v8 及以下)
module.exports = {
  extends: ['plugin:smart/typescript'],
};
```

### React项目

```js
// eslint.config.js (ESLint v9+)
export default {
  extends: ['plugin:smart/react'],
};

// .eslintrc.js (ESLint v8 及以下)
module.exports = {
  extends: ['plugin:smart/react'],
};
```

### Vue项目

```js
// eslint.config.js (ESLint v9+)
export default {
  extends: ['plugin:smart/vue'],
};

// .eslintrc.js (ESLint v8 及以下)
module.exports = {
  extends: ['plugin:smart/vue'],
};
```

### NestJS项目

```js
// eslint.config.js (ESLint v9+)
export default {
  extends: ['plugin:smart/nestjs'],
};

// .eslintrc.js (ESLint v8 及以下)
module.exports = {
  extends: ['plugin:smart/nestjs'],
};
```

## 自定义配置

你可以根据项目需求自定义规则：

```js
// eslint.config.js (ESLint v9+)
export default {
  extends: ['plugin:smart/react'], // 使用预设配置
  rules: {
    // 覆盖或添加规则
    'no-console': 'error', // 禁止使用console
    'max-len': ['warn', { code: 100 }], // 修改行长度限制
  },
};

// .eslintrc.js (ESLint v8 及以下)
module.exports = {
  extends: ['plugin:smart/react'],
  rules: {
    'no-console': 'error',
    'max-len': ['warn', { code: 100 }],
  },
};
```

## 包含的规则集

- **基础规则**：代码风格、错误防范、导入排序等通用规则
- **TypeScript规则**：类型检查、接口定义等TypeScript特定规则
- **React规则**：组件编写、Hooks使用、JSX格式化、可访问性等React特定规则
- **Vue规则**：组件命名、模板格式化、属性排序等Vue特定规则
- **NestJS规则**：后端服务开发相关规则

## 许可证

ISC
