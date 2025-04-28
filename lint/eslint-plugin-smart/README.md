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
      link: ./docs/快速开始
    - theme: alt
      text: 质量
      link: /lint/stylelint-config-smart/docs/质量
    - theme: alt
      text: 常见问题
      link: ./docs/常见问题
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
  - icon: 📊
    title: JSON 文件自动排序
    details: JSON 文件自动排序功能
  - icon: 🔍
    title: 对象键自动排序
    details: 对象键自动排序功能
  - icon: 📊
    title: 数组元素自动排序
    details: 数组元素自动排序功能
---

# &nbsp;

# eslint-plugin-smart

内测版-公司通用ESLint规则集，适用于React、Vue、NestJS和TypeScript项目。

## 特性

- 🚀 支持 ESLint v9 扁平配置
- 📦 开箱即用的配置预设
- 🎯 针对不同项目类型的专门优化
- 🔄 自动修复和代码格式化
- 🎨 完整的 Prettier 集成
- �� JSON 文件支持（包括自动排序）
- 🔍 对象键自动排序
- 📊 数组元素自动排序

## 安装

```bash
# 使用 npm
npm install --save-dev eslint-plugin-smart

# 使用 pnpm
pnpm add -D eslint-plugin-smart

# 使用 yarn
yarn add -D eslint-plugin-smart
```

## 使用方法

### ESLint v9 (推荐)

在项目根目录创建 `eslint.config.mjs` 文件：

```javascript
import eslintPlugin from 'eslint-plugin-smart'

export default [
  // 基础配置（适用于普通 JavaScript/TypeScript 项目）
  ...eslintPlugin.configs.base,

  // 或者使用特定项目类型的配置：
  ...eslintPlugin.configs.typescript, // TypeScript 项目
  ...eslintPlugin.configs.react, // React 项目
  ...eslintPlugin.configs.vue, // Vue 项目
  ...eslintPlugin.configs.nestjs, // NestJS 项目
  ...eslintPlugin.configs.json, // JSON 文件
]
```

### 配置预设

插件提供以下配置预设：

1. `base` - 基础 JavaScript 配置

   - 包含 ESLint 推荐规则
   - 集成 Prettier
   - 导入/导出排序
   - 未使用变量检查
   - 对象键自动排序
   - 数组元素自动排序

2. `typescript` - TypeScript 项目配置

   - 包含基础配置
   - TypeScript 特定规则
   - 类型检查支持

3. `react` - React 项目配置

   - 包含 TypeScript 配置
   - React 和 JSX 规则
   - React Hooks 规则
   - 可访问性检查

4. `vue` - Vue 项目配置

   - 包含 TypeScript 配置
   - Vue 单文件组件支持
   - Vue 特定规则

5. `nestjs` - NestJS 项目配置

   - 包含 TypeScript 配置
   - 装饰器支持
   - Node.js 环境
   - Jest 测试支持

6. `json` - JSON 文件配置
   - JSON、JSONC、JSON5 支持
   - package.json 字段排序
   - 格式验证

### JSON 文件支持

JSON 配置提供以下功能：

- 支持 JSON、JSONC 和 JSON5 文件格式
- 自动格式化
- package.json 字段排序
- 语法错误检查

使用方法：

```javascript
import eslintPlugin from 'eslint-plugin-smart'

export default [...eslintPlugin.configs.json]
```

package.json 字段排序顺序：

1. name
2. version
3. private
4. packageManager
5. description
6. type
7. keywords
8. homepage
9. bugs
10. license
11. author
12. contributors
13. funding
14. files
15. main
16. module
17. types
18. exports
19. imports
20. scripts
21. peerDependencies
22. peerDependenciesMeta
23. dependencies
24. optionalDependencies
25. devDependencies
26. engines
27. config
28. overrides
29. pnpm
30. husky
31. lint-staged
32. eslintConfig

### 配置示例

1. React + TypeScript 项目：

```javascript
// eslint.config.mjs
import eslintPlugin from 'eslint-plugin-smart'

export default [...eslintPlugin.configs.react, ...eslintPlugin.configs.json]
```

2. Vue + TypeScript 项目：

```javascript
// eslint.config.mjs
import eslintPlugin from 'eslint-plugin-smart'

export default [...eslintPlugin.configs.vue, ...eslintPlugin.configs.json]
```

3. NestJS 项目：

```javascript
// eslint.config.mjs
import eslintPlugin from 'eslint-plugin-smart'

export default [...eslintPlugin.configs.nestjs, ...eslintPlugin.configs.json]
```

## 常见问题

### 1. ESLint 忽略文件配置

从 ESLint v9 开始，`.eslintignore` 文件已不再支持。请在 `eslint.config.mjs` 中使用 `ignores` 配置：

```javascript
export default [
  {
    ignores: ['dist/**', 'lib/**', 'build/**', 'node_modules/**', '.cache/**', '.temp/**', '*.log'],
  },
  ...eslintPlugin.configs.recommended,
]
```

### 2. 自定义规则

如果需要覆盖默认规则，可以在配置数组末尾添加自定义规则：

```javascript
export default [
  ...eslintPlugin.configs.react,
  {
    rules: {
      // 自定义规则
      'react/react-in-jsx-scope': 'off',
    },
  },
]
```

## 许可证

ISC
