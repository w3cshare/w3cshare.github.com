---
layout: home
title: Stylelint 企业级配置
description: 为企业级项目提供全面的 CSS 样式规范配置方案
outline: deep
hero:
  name: stylelint-config-smarts
  text: 智能样式规范配置
  tagline: 统一 CSS、SCSS、Less 等样式代码规范
  actions:
    - theme: brand
      text: 开始使用
      link: /lint/stylelint-config-smarts/docs/开始使用
    - theme: alt
      text: Less支持
      link: /lint/stylelint-config-smarts/docs/Less支持
    - theme: alt
      text: Vue框架支持
      link: /lint/stylelint-config-smarts/docs/Vue框架支持
features:
  - icon: 🎭
    title: 样式规范化
    details: 统一团队样式代码风格，减少冗余代码，提高样式质量
  - icon: 🌈
    title: 预处理器支持
    details: 支持 SCSS、Less 等预处理器语法检查与规范
  - icon: 🖼️
    title: 框架友好
    details: 适配 Vue、React 等框架的组件样式规范需求
  - icon: 🔧
    title: 自动修复
    details: 大部分规则支持自动修复，提高开发效率
---

# &nbsp;

# stylelint-config-smarts

stylelint-config-smarts 是一个为公司内部前端项目设计的 Stylelint 共享配置，旨在提供一致且智能的 CSS/SCSS/Less 代码规范。此配置适用于各种前端技术栈，包括 React、Vue 和 TypeScript 项目。

## 特性

- ✅ 支持多种前端框架 (React, Vue)
- ✅ 预配置的 SCSS 支持
- ✅ 智能的属性排序规则
- ✅ 可维护性规则 (嵌套深度限制等)
- ✅ 与 Prettier 兼容
- ✅ 针对 Vue 单文件组件的特殊规则

## 安装

```bash
# pnpm
pnpm add -D stylelint stylelint-config-smarts

# npm
npm install --save-dev stylelint stylelint-config-smarts

# yarn
yarn add -D stylelint stylelint-config-smarts
```

## 使用方法

在项目根目录创建 `.stylelintrc.js` 文件，并添加以下内容：

```js
module.exports = {
  extends: ['stylelint-config-smarts'],
  rules: {
    // 项目特定的覆盖规则（如果需要）
  },
};
```

### React 项目

React 项目不需要额外配置，默认配置已经满足需求。

### Vue 项目

Vue 项目已经预先配置了特定规则，不需要额外配置。Vue 单文件组件的样式部分会自动应用相应的规则。

### 与其他工具集成

#### VSCode 集成

安装 [Stylelint VSCode 插件](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)，并在 `settings.json` 中添加以下配置：

```json
{
  "stylelint.validate": ["css", "scss", "less", "vue"],
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
  }
}
```

#### 与 Prettier 一起使用

此配置与 Prettier 兼容。推荐安装 `prettier` 和 `stylelint-config-prettier`：

```bash
pnpm add -D prettier
```

## 规则说明

### 主要规则集

- **基础规则**：提供基础代码质量规则
- **缩进规则**：统一使用 2 空格缩进
- **颜色规则**：规范颜色表示方法
- **单位规则**：确保一致的单位使用
- **属性顺序规则**：标准化 CSS 属性排序
- **空行规则**：提高代码可读性
- **SCSS 规则**：针对 SCSS 预处理器的特定规则

### 属性排序

属性按以下逻辑分组排序：

1. 定位 (position, z-index 等)
2. 布局 (display, flex, grid 等)
3. 尺寸 (width, height 等)
4. 外边距 (margin)
5. 内边距 (padding)
6. 边框 (border)
7. 背景 (background)
8. 字体与文本 (font, color 等)
9. 其他属性 (opacity, transition 等)

## 自定义配置

可以通过在项目的 `.stylelintrc.js` 文件中扩展本配置并添加自定义规则：

```js
module.exports = {
  extends: ['stylelint-config-smarts'],
  rules: {
    // 覆盖已有规则
    indentation: 4, // 修改缩进为4空格

    // 添加新规则
    'color-named': 'always-where-possible',
  },
};
```

## 禁用规则

在特定文件或代码块中禁用规则：

```css
/* stylelint-disable */
.legacy-class {
  /* 此处不会应用stylelint规则 */
}
/* stylelint-enable */

/* 禁用特定规则 */
/* stylelint-disable color-named */
.brand-color {
  color: red;
}
/* stylelint-enable color-named */
```

## 许可证

ISC

## 详细文档

- [开始使用](/lint/stylelint-config-smarts/docs/开始使用) - 快速上手指南
- [Less支持](/lint/stylelint-config-smarts/docs/Less支持) - Less 预处理器的配置使用
- [Vue框架支持](/lint/stylelint-config-smarts/docs/Vue框架支持) - Vue 单文件组件样式规范
