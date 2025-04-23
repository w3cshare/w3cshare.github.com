---
title: Vue 组件库快速开始
description: 如何快速上手使用 Vue 组件库
outline: deep
---

# Vue组件库快速开始

本文档将指导您如何快速开始使用和开发Vue组件库。

## 安装

您可以通过以下方式在您的项目中安装我们的Vue组件库：

### 全量安装

```bash
# 使用pnpm
pnpm add @fullstack/element-ui-lib @fullstack/ant-design-lib @fullstack/uniapp-lib @fullstack/pure-ui-lib

# 使用npm
npm install @fullstack/element-ui-lib @fullstack/ant-design-lib @fullstack/uniapp-lib @fullstack/pure-ui-lib

# 使用yarn
yarn add @fullstack/element-ui-lib @fullstack/ant-design-lib @fullstack/uniapp-lib @fullstack/pure-ui-lib
```

### 按需安装

```bash
# 仅安装Element UI扩展
pnpm add @fullstack/element-ui-lib

# 仅安装Ant Design Vue扩展
pnpm add @fullstack/ant-design-lib

# 仅安装UniApp组件
pnpm add @fullstack/uniapp-lib

# 仅安装SEO友好型组件
pnpm add @fullstack/pure-ui-lib
```

## 使用方法

### 全局引入

在Vue2项目中：

```js
import Vue from 'vue'
import ElementUILib from '@fullstack/element-ui-lib'
import '@fullstack/element-ui-lib/dist/styles/index.css'

Vue.use(ElementUILib)
```

在Vue3项目中：

```js
import { createApp } from 'vue'
import ElementUILib from '@fullstack/element-ui-lib'
import '@fullstack/element-ui-lib/dist/styles/index.css'

const app = createApp(App)
app.use(ElementUILib)
app.mount('#app')
```

### 按需引入

```js
// Vue2项目
import { FSTable, FSForm } from '@fullstack/element-ui-lib'
Vue.component('FSTable', FSTable)
Vue.component('FSForm', FSForm)

// Vue3项目
import { FSTable, FSForm } from '@fullstack/element-ui-lib'
app.component('FSTable', FSTable)
app.component('FSForm', FSForm)
```

## 组件库开发

如果您想要参与组件库开发，请按照以下步骤进行：

1. 克隆仓库

```bash
git clone https://github.com/your-org/fullstack.git
cd fullstack
```

2. 安装依赖

```bash
pnpm install
```

3. 启动组件开发环境

```bash
cd package-vue
pnpm dev
```

4. 打包组件库

```bash
pnpm build
```

## 开发规范

开发Vue组件库时，请遵循以下规范：

1. 使用TypeScript编写所有组件
2. 同时支持Vue2和Vue3（使用适配层）
3. 遵循Atomic Design设计原则
4. 编写单元测试（Jest）和E2E测试（Cypress）
5. 遵循ESLint和Prettier规范

## 项目结构

```
package-vue/
├── ant-design-lib/      # Ant Design Vue扩展
├── element-ui-lib/      # Element UI扩展
├── uniapp-lib/          # UniApp组件
├── pure-ui-lib/         # SEO友好型组件
├── README.md            # 项目说明
└── PROJECT_STRUCTURE.md # 项目结构详细说明
```

## 下一步

- [查看组件文档](/package-vue/components)
- [了解主题定制](/package-vue/theming)
- [阅读设计规范](/package-vue/design)
- [探索最佳实践](/package-vue/development-guide)
