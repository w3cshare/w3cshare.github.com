---
layout: home
hero:
  name: prettier-plugin-smarts
  text: 智能代码格式增强插件
  tagline: 为公司内部项目提供统一的代码风格规范
  actions:
    - theme: brand
      text: 快速开始
      link: ./docs/开始使用.md
    - theme: brand
      text: JSON自动排序
      link: ./docs/JSON自动排序.md
    - theme: alt
      text: TypeScript支持
      link: ./docs/TypeScript支持.md
features:
  - icon: 🚀
    title: 高效易用
    details: 无缝集成到现有项目中，开箱即用，无需复杂配置
  - icon: 🔧
    title: JSON智能排序
    details: 自动对package.json、eslintrc等配置文件进行智能排序，提高可读性
  - icon: 🤖
    title: Import语句组织
    details: 自动分组和排序import语句，保持代码结构一致性
  - icon: ⛓️
    title: 多框架支持
    details: 完美适配React、Vue、NestJS等多种前端框架和技术栈
  - icon: 🛠️
    title: 定制化配置
    details: 提供灵活的配置选项，满足不同项目的个性化需求
  - icon: 📦
    title: Monorepo友好
    details: 为大型Monorepo项目提供统一的代码格式化解决方案
---

# &nbsp;

# prettier-plugin-smarts

prettier-plugin-smarts 是一个为公司内部前端项目设计的 Prettier 插件，提供了智能的代码格式化功能，特别是针对 JSON 文件的排序和 import 语句的组织。此插件适用于 React、Vue、NestJS 和 TypeScript 项目。

## 特性

- ✅ JSON 文件键排序
- ✅ package.json 文件智能排序
- ✅ ESLint 配置文件排序
- ✅ import 语句排序和分组
- ✅ Vue 单文件组件缩进控制
- ✅ 适用于各种前端框架和技术栈

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
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  bracketSpacing: true,
  arrowParens: 'avoid',

  // prettier-plugin-smarts 特有配置
  sortJsonKeys: true, // 启用 JSON 键排序
  importOrder: '^react,^@/,^[./]', // 设置 import 排序规则
  vueIndentScriptAndStyle: true, // Vue 文件缩进控制
};
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
};
```

### importOrder

控制 import 语句的排序规则。使用逗号分隔不同组，使用 `^` 表示正则匹配开头。

```js
// .prettierrc.js
module.exports = {
  importOrder: '^react,^@/,^[./]',
};
```

示例效果：

```js
// 排序前
import './styles.css';
import React from 'react';
import { Component } from '@/components';

// 排序后
import React from 'react';
import { Component } from '@/components';
import './styles.css';
```

### vueIndentScriptAndStyle

控制 Vue 单文件组件中 `<script>` 和 `<style>` 标签内容的缩进。

```js
// .prettierrc.js
module.exports = {
  vueIndentScriptAndStyle: true, // 默认值为 true
};
```

## 与框架配合使用

### React 项目

React 项目可以使用以下配置：

```js
// .prettierrc.js
module.exports = {
  importOrder: '^react,^@/components/,^@/hooks/,^@/utils/,^@/services/,^[./]',
  // 其他配置
};
```

### Vue 项目

Vue 项目可以使用以下配置：

```js
// .prettierrc.js
module.exports = {
  vueIndentScriptAndStyle: true,
  importOrder: '^vue,^@/components/,^@/composables/,^@/utils/,^@/api/,^[./]',
  // 其他配置
};
```

### NestJS 项目

NestJS 项目可以使用以下配置：

```js
// .prettierrc.js
module.exports = {
  importOrder: '^@nestjs/,^@/modules/,^@/services/,^@/entities/,^@/dto/,^[./]',
  // 其他配置
};
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
};
```

### 2. 自定义排序规则

对于特定项目的自定义 JSON 字段排序，可以创建自定义配置：

```js
// .prettierrc.js
module.exports = {
  sortJsonKeys: true,
  // 其他配置
};
```

## 许可证

ISC
