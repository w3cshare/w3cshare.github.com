# Vue 框架样式规范

stylelint-config-smarts 为 Vue 单文件组件(.vue)提供了专门的样式规范支持，确保其样式部分符合公司统一的代码规范。

## Vue 特有的规则

针对 Vue 单文件组件，stylelint-config-smarts 自动启用以下特性：

- 支持 `<style>` 标签内的样式校验
- 识别并处理 Vue 特有的 CSS 伪类和伪元素
- 允许 Scoped CSS 特有的语法
- 支持 Vue 3 中的 `v-deep`、`v-global` 等深度选择器

## 基础配置

默认情况下，stylelint-config-smarts 已经包含对 Vue 单文件组件的支持，无需额外配置：

```js
// .stylelintrc.js
module.exports = {
  extends: ['stylelint-config-smarts']
};
```

## 深度选择器的处理

Vue 中的深度选择器有几种不同的写法，stylelint-config-smarts 支持以下所有语法：

```vue
<style scoped>
/* Vue 2 深度选择器 */
.a >>> .b { /* 样式将应用到 .b */ }
.a /deep/ .b { /* 样式将应用到 .b */ }
.a ::v-deep .b { /* 样式将应用到 .b */ }

/* Vue 3 深度选择器 */
.a ::v-deep(.b) { /* 样式将应用到 .b */ }
.a :deep(.b) { /* 样式将应用到 .b */ }
</style>
```

## CSS 预处理器与 Vue

在 Vue 单文件组件中使用 CSS 预处理器也受到支持：

```vue
<template>
  <div class="component">
    <h1 class="title">标题</h1>
    <div class="content">内容</div>
  </div>
</template>

<style lang="scss" scoped>
.component {
  position: relative;
  
  display: flex;
  flex-direction: column;
  
  width: 100%;
  
  margin: 16px 0;
  
  // 使用深度选择器
  :deep(.content) {
    padding: 16px;
    
    background-color: #f5f5f5;
    
    font-size: 14px;
  }
  
  .title {
    margin-bottom: 16px;
    
    color: #333;
    font-weight: bold;
  }
}
</style>
```

## 与 Vite 和 Vue 一起使用

在基于 Vite 的 Vue 项目中，可以这样集成 stylelint-config-smarts：

```js
// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import stylelint from 'vite-plugin-stylelint';

export default defineConfig({
  plugins: [
    vue(),
    stylelint({
      include: ['src/**/*.vue', 'src/**/*.css', 'src/**/*.scss'],
      fix: true
    })
  ]
});
```

## 组件库样式规范

对于开发 Vue 组件库的项目，推荐以下规范：

1. **保持组件样式隔离**：使用 scoped 或 CSS Modules
2. **避免全局样式污染**：谨慎使用全局样式
3. **使用 CSS 变量**：便于主题定制
4. **遵循组件命名空间**：避免样式冲突

示例：

```vue
<template>
  <div :class="['smart-button', `smart-button--${type}`]">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.smart-button {
  position: relative;
  
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  height: var(--button-height, 32px);
  padding: 0 var(--button-padding, 16px);
  
  border: 1px solid transparent;
  border-radius: var(--button-radius, 4px);
  
  background-color: transparent;
  
  font-size: var(--button-font-size, 14px);
  line-height: 1;
  
  cursor: pointer;
  transition: all 0.2s;
  
  &--primary {
    border-color: var(--primary-color, #1890ff);
    
    background-color: var(--primary-color, #1890ff);
    
    color: #fff;
  }
  
  &--default {
    border-color: #d9d9d9;
    
    background-color: #fff;
    
    color: rgba(0, 0, 0, 0.85);
  }
}
</style>
```

## ESLint 与 stylelint 集成

在 Vue 项目中，通常同时使用 ESLint 和 stylelint。推荐以下集成方式：

```js
// .eslintrc.js
module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
    '@vue/prettier'
  ],
  rules: {
    // ESLint 规则
  }
};

// .stylelintrc.js
module.exports = {
  extends: ['stylelint-config-smarts'],
  rules: {
    // stylelint 规则
  }
};

// package.json
{
  "scripts": {
    "lint": "eslint --ext .js,.ts,.vue src && stylelint \"src/**/*.{css,scss,vue}\"",
    "lint:fix": "eslint --ext .js,.ts,.vue src --fix && stylelint \"src/**/*.{css,scss,vue}\" --fix"
  }
}
```

## CSS 模块化最佳实践

在 Vue 项目中使用 CSS Modules：

```vue
<template>
  <div :class="$style.container">
    <h1 :class="$style.title">标题</h1>
  </div>
</template>

<style module>
.container {
  position: relative;
  
  display: flex;
  flex-direction: column;
  
  width: 100%;
  
  padding: 16px;
  
  border-radius: 4px;
  
  background-color: #fff;
}

.title {
  margin-bottom: 16px;
  
  color: #333;
  font-size: 18px;
  font-weight: bold;
}
</style>
```

## 常见问题解答

### 1. 样式检查报错 "未知的伪元素"

**问题**：使用 `:deep()` 等 Vue 特有选择器时，stylelint 报错

**解决方案**：

```js
// .stylelintrc.js
module.exports = {
  extends: ['stylelint-config-smarts'],
  rules: {
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted']
      }
    ]
  }
};
```

### 2. Vue 3 项目中的 CSS 变量命名规则

**最佳实践**：使用 kebab-case 命名 CSS 变量

```css
:root {
  --primary-color: #1890ff;
  --font-size-large: 16px;
  --spacing-unit: 8px;
}
```

### 3. "选择器类型未知" 错误

**问题**：使用 Vue 指令作为选择器时报错

**解决方案**：

```js
// .stylelintrc.js
module.exports = {
  extends: ['stylelint-config-smarts'],
  rules: {
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements']
      }
    ]
  }
};
``` 