# eslint-plugin-smarts

> 一个集成了Nestjs、React和Vue项目最佳实践的ESLint插件配置集合

这个ESLint插件提供了一套全面的代码规范配置，适用于Nestjs、React和Vue项目，旨在提高代码质量、可维护性和开发效率。它集成了多种常用的ESLint插件和规则，让你可以快速应用最佳实践到你的项目中。

## 特性

- ✅ 支持Nestjs项目
- ✅ 支持React和Vue项目
- ✅ 内置TypeScript支持
- ✅ 自动排序imports和exports
- ✅ 自动移除未使用的imports和变量
- ✅ 集成了华为JavaScript编码规范
- ✅ 包含代码格式化和最佳实践规则
- ✅ 易于集成和配置

## 安装

```bash
npm install eslint-plugin-smarts --save-dev

# 或者使用yarn
yarn add eslint-plugin-smarts --dev

# 或者使用pnpm
pnpm add eslint-plugin-smarts -D
```

## 基本使用

在你的`.eslintrc.js`文件中添加以下配置：

```js
module.exports = {
  extends: ['plugin:smarts/recommended'],
  plugins: ['smarts']
};
```

## React项目配置

对于React项目，推荐使用以下配置：

```js
module.exports = {
  extends: [
    'plugin:smarts/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  plugins: ['smarts', 'react', 'react-hooks'],
  settings: {
    react: {
      version: 'detect'
    }
  }
};
```

## Vue项目配置

对于Vue项目，推荐使用以下配置：

```js
module.exports = {
  extends: [
    'plugin:smarts/recommended',
    'plugin:vue/vue3-recommended' // Vue 3.x项目
    // 'plugin:vue/recommended' // Vue 2.x项目
  ],
  plugins: ['smarts', 'vue'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
};
```

## 规则集说明

本插件集成了以下几类规则：

1. **基础规则**：JavaScript/TypeScript的基本编码规范
2. **React规则**：React组件和Hooks的最佳实践
3. **Vue规则**：Vue组件和模板的最佳实践
4. **导入/导出规则**：自动排序和优化imports/exports
5. **格式化规则**：代码格式化和风格统一

### 主要规则集

- `annotation/sort` - 数组/对象排序
- `annotation/sort-keys` - 对象键排序
- `unused-imports/no-unused-imports` - 移除未使用的导入
- `simple-import-sort/imports` - 导入语句排序
- `simple-import-sort/exports` - 导出语句排序
- `vue/order-in-components` - Vue组件选项顺序
- 以及更多华为JavaScript编码规范...

## 自定义配置

你可以在项目的`.eslintrc.js`文件中覆盖任何规则：

```js
module.exports = {
  extends: ['plugin:smarts/recommended'],
  plugins: ['smarts'],
  rules: {
    // 在这里覆盖任何规则
    'no-console': 'off',
    'vue/max-attributes-per-line': ['error', {
      singleline: 3,
      multiline: 1
    }]
  }
};
```

## 示例

查看[examples](./examples)目录获取更多配置示例。

## 贡献

欢迎贡献！请查看[贡献指南](./CONTRIBUTING.md)了解如何参与项目开发。

## 许可证

[ISC](./LICENSE)
