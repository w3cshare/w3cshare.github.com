---
layout: home
title: Stylelint 企业级配置
description: 为企业级项目提供全面的 CSS 样式规范配置方案
outline: deep
hero:
  name: stylelint-config-smart
  text: 智能样式规范配置
  tagline: 统一 CSS、SCSS、Less 等样式代码规范
  actions:
    - theme: brand
      text: 快速开始
      link: ./docs/开始使用
    - theme: alt
      text: 质量
      link: ./docs/质量
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

## &nbsp;

# stylelint-config-smart

企业级 Stylelint 配置方案，提供现代化、全面的 CSS 样式规范。

## 特性

- ✨ **现代化规范** - 采用最新的 CSS 语法和最佳实践
- 🧩 **完整的插件集成** - 包含 BEM、排序、SCSS 等多种插件
- 🔄 **灵活的配置** - 针对不同文件类型（Vue、SCSS、Less）提供专门的规则集
- 📊 **严格的属性排序** - 采用符合直觉的逻辑和分组排序属性
- 🔍 **智能的规则选择** - 平衡严格性和实用性

## 安装

```bash
# 使用 pnpm (推荐)
pnpm add -D stylelint stylelint-config-smart

# 或使用 npm
npm install --save-dev stylelint stylelint-config-smart

# 或使用 yarn
yarn add -D stylelint stylelint-config-smart
```

## 基本用法

在项目根目录创建 `.stylelintrc.js` 文件（非 ESM 项目）：

```js
module.exports = {
  extends: ['stylelint-config-smart'],
  rules: {
    // 自定义覆盖规则（如需要）
  },
}
```

对于 ESM 项目（package.json 中有 `"type": "module"`），创建 `.stylelintrc.cjs`：

```js
module.exports = {
  extends: ['stylelint-config-smart'],
  rules: {
    // 自定义覆盖规则（如需要）
  },
}
```

## 规则亮点

### 现代语法支持

- 启用现代 CSS 函数表示法（`rgb(0 0 0 / 50%)` 而非 `rgba(0, 0, 0, 0.5)`）
- 使用传统媒体查询语法以获得更好的兼容性（`min-width` 而非 `width >=`）
- HSL 色值使用明确的角度单位（`180deg` 而非 `180`）

### 智能排序

属性按照以下逻辑分组排序：

1. 定位 (position, z-index...)
2. 盒模型 - 布局 (display, flex, grid...)
3. 盒模型 - 尺寸 (width, height...)
4. 盒模型 - 外边距 (margin...)
5. 盒模型 - 内边距 (padding...)
6. 盒模型 - 边框 (border...)
7. 视觉效果 (background, opacity...)
8. 文本与字体 (font, color...)
9. 动画与过渡 (transition, animation...)
10. 其他 (cursor, user-select...)

### BEM 规范支持

集成 stylelint-bem-newbie 插件，提供 BEM 编码规范检查：

- 绝对定位元素需要至少指定两个方向
- 动画必须指定时间函数
- 避免内联显示模式
- 防止媒体查询中的冗余属性值

### 框架支持

针对不同框架和预处理器提供专门配置：

- Vue 单文件组件
- SCSS 预处理器
- Less 预处理器

## 配置覆盖

如需调整规则，可在项目配置中覆盖：

```js
module.exports = {
  extends: ['stylelint-config-smart'],
  rules: {
    // 禁用颜色名称检查
    'color-named': null,

    // 自定义选择器模式
    'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$',

    // 调整最大嵌套深度
    'max-nesting-depth': 3,
  },
}
```

## 版本说明

stylelint-config-smart 要求 stylelint v15 或更高版本，并集成了以下插件：

- stylelint-order - 属性排序
- stylelint-scss - SCSS 语法支持
- stylelint-bem-newbie - BEM 规范检查

## 许可证

ISC

## 详细文档

- [开始使用](/lint/stylelint-config-smart/docs/开始使用) - 快速上手指南
- [Less支持](/lint/stylelint-config-smart/docs/Less支持) - Less 预处理器的配置使用
- [Vue框架支持](/lint/stylelint-config-smart/docs/Vue框架支持) - Vue 单文件组件样式规范
