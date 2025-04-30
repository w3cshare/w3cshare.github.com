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
      link: ./docs/质量
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
    title: TypeScript 接口自动排序
    details: TypeScript 接口和枚举类型的键自动排序，保持代码一致性
  - icon: 🔄
    title: 导入语句自动排序
    details: 自动对导入语句进行分组和排序，提高代码可读性
---

## &nbsp;

# eslint-plugin-smart

内测版-公司通用ESLint规则集，适用于React、Vue、NestJS和TypeScript项目。

## 集成的插件

该插件集成了以下常用的 ESLint 插件：

- `eslint-plugin-import`: 提供 import/export 语法的检查
- `eslint-plugin-simple-import-sort`: 提供 import 语句的排序功能
- `eslint-plugin-unused-imports`: 检测并删除未使用的导入
- `@typescript-eslint/eslint-plugin`: TypeScript 的 ESLint 插件
- `@typescript-eslint/parser`: TypeScript 的 ESLint 解析器
- `eslint-plugin-typescript-sort-keys`: TypeScript 接口和类型的键排序
- `eslint-plugin-react`: React 相关的 lint 规则
- `eslint-plugin-react-hooks`: React Hooks 的 lint 规则
- `eslint-plugin-jsx-a11y`: JSX 可访问性检查
- `eslint-plugin-vue`: Vue.js 的 ESLint 插件
- `vue-eslint-parser`: Vue.js 的 ESLint 解析器
- `eslint-plugin-n`: Node.js 相关的 lint 规则
- `eslint-plugin-prettier`: 将 Prettier 作为 ESLint 规则运行
- `eslint-config-prettier`: 关闭所有与 Prettier 冲突的 ESLint 规则
- `eslint-plugin-jsonc`: JSON 文件的 lint 规则
- `eslint-plugin-sort-keys-fix`: 对象键的自动排序和修复

## 特性

- 🚀 支持 ESLint v9 扁平配置
- 📦 开箱即用的配置预设
- 🎯 针对不同项目类型的专门优化
- 🔄 自动修复和代码格式化
- 🎨 完整的 Prettier 集成
- 📄 JSON 文件支持（包括自动排序）
- 🔤 TypeScript 接口和枚举类型自动排序
- 📥 导入语句自动排序

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

2. `typescript` - TypeScript 项目配置

   - 包含基础配置
   - TypeScript 特定规则
   - 类型检查支持
   - **TypeScript 接口和枚举类型键自动排序**

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
   - **TypeScript 接口键自动排序（对 DTO 等尤为有用）**

6. `json` - JSON 文件配置
   - JSON、JSONC、JSON5 支持
   - package.json 字段排序
   - 格式验证

### TypeScript 接口和枚举类型排序

TypeScript 配置包含了接口和枚举类型的自动排序功能，可以保持代码的一致性和可读性：

```typescript
// 自动排序前
interface User {
  name: string
  id: number
  age: number
  createdAt: Date
}

// 自动排序后
interface User {
  age: number
  createdAt: Date
  id: number
  name: string
}

// 枚举类型也会自动排序
enum Color {
  Red = '#FF0000',
  Green = '#00FF00',
  Blue = '#0000FF',
}
```

此功能在以下配置中默认启用：

- `typescript`
- `react`
- `vue`
- `nestjs`

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
      // 关闭 TypeScript 接口自动排序
      'typescript-sort-keys/interface': 'off',
    },
  },
]
```

## 许可证

ISC

# ESLint Plugin Smart

一个智能的 ESLint 插件，集成了多个常用的 ESLint 插件和配置。

## 支持的插件

- `eslint-plugin-import`: 提供 import/export 语法的检查
- `eslint-plugin-simple-import-sort`: 提供 import 语句的排序功能
- `eslint-plugin-unused-imports`: 检测并删除未使用的导入
- `@typescript-eslint/eslint-plugin`: TypeScript 的 ESLint 插件
- `@typescript-eslint/parser`: TypeScript 的 ESLint 解析器
- `eslint-plugin-typescript-sort-keys`: TypeScript 接口和类型的键排序
- `eslint-plugin-react`: React 相关的 lint 规则
- `eslint-plugin-react-hooks`: React Hooks 的 lint 规则
- `eslint-plugin-jsx-a11y`: JSX 可访问性检查
- `eslint-plugin-vue`: Vue.js 的 ESLint 插件
- `vue-eslint-parser`: Vue.js 的 ESLint 解析器
- `eslint-plugin-n`: Node.js 相关的 lint 规则
- `eslint-plugin-prettier`: 将 Prettier 作为 ESLint 规则运行
- `eslint-config-prettier`: 关闭所有与 Prettier 冲突的 ESLint 规则
- `eslint-plugin-jsonc`: JSON 文件的 lint 规则
- `eslint-plugin-sort-keys-fix`: 对象键的自动排序和修复

## 安装

```bash
pnpm add -D @fullstack/eslint-plugin-smart
```

## 使用

在你的 ESLint 配置文件中：

```js
module.exports = {
  plugins: ['@fullstack/smart'],
  extends: ['plugin:@fullstack/smart/recommended'],
}
```

## 配置

该插件提供了以下预设配置：

- `plugin:@fullstack/smart/recommended`: 推荐配置，包含所有最佳实践规则
- `plugin:@fullstack/smart/typescript`: TypeScript 项目的配置
- `plugin:@fullstack/smart/react`: React 项目的配置
- `plugin:@fullstack/smart/vue`: Vue.js 项目的配置
- `plugin:@fullstack/smart/node`: Node.js 项目的配置

## 许可证

MIT
