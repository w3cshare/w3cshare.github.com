# eslint-plugin-smart 使用指南

## 简介

`eslint-plugin-smart` 是一个为公司内部项目设计的ESLint规则集合，旨在统一代码风格，提高代码质量。该插件支持多种项目类型，包括：

- TypeScript项目
- React项目
- Vue项目
- NestJS项目

## 安装步骤

### 1. 安装ESLint和插件

```bash
# 使用npm
npm install --save-dev eslint eslint-plugin-smart

# 使用yarn
yarn add --dev eslint eslint-plugin-smart

# 使用pnpm
pnpm add --save-dev eslint eslint-plugin-smart
```

### 2. 配置ESLint

#### ESLint v9+ (使用eslint.config.js)

创建`eslint.config.js`文件：

```js
export default {
  extends: ['plugin:smart/recommended'], // 使用推荐配置
};
```

#### ESLint v8及以下 (使用.eslintrc.js)

创建`.eslintrc.js`文件：

```js
module.exports = {
  extends: ['plugin:smart/recommended'], // 使用推荐配置
};
```

## 在不同项目中的使用方法

### TypeScript项目

```js
// eslint.config.js
export default {
  extends: ['plugin:smart/typescript'],
};
```

### React项目

```js
// eslint.config.js
export default {
  extends: ['plugin:smart/react'],
};
```

### Vue项目

```js
// eslint.config.js
export default {
  extends: ['plugin:smart/vue'],
};
```

### NestJS项目

```js
// eslint.config.js
export default {
  extends: ['plugin:smart/nestjs'],
};
```

## 与其他工具集成

### 与Prettier集成

本插件已包含与Prettier兼容的规则配置，无需额外设置。

### 与VS Code集成

1. 安装ESLint扩展
2. 在设置中启用ESLint

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact", "vue"]
}
```

## 常见问题

### 规则冲突

如果遇到与其他插件的规则冲突，可以在配置中覆盖特定规则：

```js
export default {
  extends: ['plugin:smart/recommended'],
  rules: {
    // 覆盖冲突的规则
    'conflicting-rule': 'off',
  },
};
```

### 临时禁用规则

在代码中临时禁用特定规则：

```js
// eslint-disable-next-line no-console
console.log('调试信息');
```

## 更新日志

查看[CHANGELOG.md](./CHANGELOG.md)了解版本更新内容。

## 贡献指南

如需贡献代码或报告问题，请参考[CONTRIBUTING.md](./CONTRIBUTING.md)。
