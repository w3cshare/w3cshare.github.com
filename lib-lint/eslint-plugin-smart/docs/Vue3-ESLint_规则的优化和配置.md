# Vue3 ESLint 规则优化和配置指南

## 目录

- [简介](#简介)
- [规则集概览](#规则集概览)
- [插件集成](#插件集成)
- [主要特性](#主要特性)
- [规则详解](#规则详解)
- [使用指南](#使用指南)

## 简介

本文档详细说明了针对 Vue3 项目的 ESLint 规则优化和配置。这套配置旨在提供一个全面的、现代化的 Vue3 开发体验，包含了代码质量、性能优化、TypeScript 支持、可访问性等多个方面的规范。

## 规则集概览

### 1. 组合式 API 规则 (vueCompositionRules)

专门针对 Vue3 Composition API 的规则集，包括：

```javascript
{
  // 强制组件使用 setup 语法糖
  'vue/component-api-style': ['error', ['script-setup']],
  
  // 强制组件选项的定义顺序
  'vue/define-macros-order': ['error', {
    order: ['defineProps', 'defineEmits', 'defineSlots']
  }],
  
  // 防止响应式数据丢失
  'vue/no-setup-props-reactivity-loss': 'error',
  'vue/no-ref-object-reactivity-loss': 'error',
  
  // 类型声明规范
  'vue/define-props-declaration': ['error', 'type-based'],
  'vue/define-emits-declaration': ['error', 'type-based']
}
```

### 2. 模板语法规则 (vueTemplateRules)

规范化模板语法的使用：

```javascript
{
  'vue/no-unused-vars': 'error',
  'vue/no-v-html': 'warn',
  'vue/this-in-template': ['error', 'never'],
  'vue/v-bind-style': ['error', 'shorthand'],
  'vue/v-on-style': ['error', 'shorthand'],
  'vue/v-slot-style': ['error', {
    atComponent: 'shorthand',
    default: 'shorthand',
    named: 'shorthand'
  }]
}
```

### 3. 性能优化规则 (vuePerformanceRules)

提升应用性能的规则集：

```javascript
{
  'vue/no-useless-v-bind': 'error',
  'vue/prefer-show-over-if': 'warn',
  'vue/no-useless-template-attributes': 'error',
  'vue/prefer-define-options': 'error',
  'vue/prefer-prop-type-boolean-first': 'error'
}
```

### 4. 可访问性规则 (vueA11yRules)

确保应用的可访问性：

```javascript
{
  'vue-a11y/alt-text': 'error',
  'vue-a11y/anchor-has-content': 'error',
  'vue-a11y/click-events-have-key-events': 'error',
  'vue-a11y/label-has-for': 'error',
  'vue-a11y/no-autofocus': 'error',
  'vue-a11y/no-onchange': 'error'
}
```

## 插件集成

本配置集成了以下插件：

1. `eslint-plugin-vue`: Vue.js 核心 lint 插件
2. `eslint-plugin-vue-scoped-css`: 用于 scoped CSS 的检查
3. `eslint-plugin-vue-pug`: 用于 Pug 模板的检查
4. `eslint-plugin-vue-a11y`: 用于可访问性检查
5. `vue-eslint-parser`: Vue 模板解析器

## 主要特性

### 1. 组合式 API 规范

- 强制使用 `<script setup>` 语法
- 规范化 `defineProps` 和 `defineEmits` 的使用
- 防止响应式数据丢失
- 强制使用类型声明

### 2. 代码质量保证

- TypeScript 强类型支持
- 显式的 props 和 emits 声明
- 防止常见的错误模式
- 统一的代码风格

### 3. 性能优化

- 检测并移除不必要的绑定
- 优化条件渲染（v-show vs v-if）
- 规范化静态资源使用
- 组件渲染性能优化

### 4. 可访问性增强

- 图片 alt 文本检查
- 键盘事件处理要求
- ARIA 属性检查
- 语义化标签使用

### 5. 样式规范

- 强制使用 scoped 样式
- 检测未使用的选择器
- 统一的样式声明方式
- CSS 命名规范

## 规则详解

### TypeScript 相关规则

```javascript
{
  files: ['**/*.vue'],
  languageOptions: {
    parser: vueParser,
    parserOptions: {
      parser: '@typescript-eslint/parser',
      extraFileExtensions: ['.vue'],
      ecmaVersion: 2022,
      sourceType: 'module'
    }
  }
}
```

### Vue3 特定规则

```javascript
{
  'vue/no-deprecated-v-on-native-modifier': 'error',
  'vue/no-deprecated-v-bind-sync': 'error',
  'vue/no-deprecated-filters': 'error',
  'vue/require-explicit-emits': 'error',
  'vue/require-slots-as-functions': 'error',
  'vue/valid-define-props': 'error'
}
```

## 使用指南

### 安装

```bash
pnpm add -D eslint-plugin-vue eslint-plugin-vue-scoped-css eslint-plugin-vue-pug eslint-plugin-vue-a11y vue-eslint-parser
```

### 配置文件

在你的项目中创建 `eslint.config.js`：

```javascript
import vueConfig from '@iss.smart/eslint-typescript-vue3'

export default [
  ...vueConfig,
  // 你的自定义配置
]
```

### 自定义规则

你可以根据项目需求调整规则的严格程度：

```javascript
export default [
  ...vueConfig,
  {
    rules: {
      // 将错误级别降为警告
      'vue/no-unused-vars': 'warn',
      
      // 禁用某些规则
      'vue/no-v-html': 'off',
      
      // 自定义规则配置
      'vue/max-attributes-per-line': ['error', {
        singleline: { max: 3 },
        multiline: { max: 1 }
      }]
    }
  }
]
```

### 常见问题解决

1. **类型检查错误**
   - 确保 `tsconfig.json` 正确配置
   - 检查 `@typescript-eslint/parser` 版本兼容性

2. **规则冲突**
   - 检查是否有重复的规则配置
   - 确保插件版本兼容

3. **性能问题**
   - 考虑使用 `.eslintignore` 排除不需要检查的文件
   - 优化 VSCode ESLint 插件配置

### 最佳实践建议

1. 始终使用 TypeScript 进行开发
2. 保持组件文件结构的一致性
3. 遵循组件命名规范
4. 使用 `<script setup>` 语法
5. 合理使用类型注解
6. 注意代码可访问性
7. 定期更新 ESLint 和相关插件

## 结语

这套 ESLint 配置为 Vue3 项目提供了全面的代码质量保证。通过遵循这些规则，可以：

- 提高代码质量和可维护性
- 增强应用性能
- 改善可访问性
- 统一团队代码风格
- 预防常见错误

建议团队成员仔细阅读本文档，理解各项规则的用意，在实际开发中灵活运用。同时，也可以根据项目特点和团队需求，适当调整规则的严格程度。
