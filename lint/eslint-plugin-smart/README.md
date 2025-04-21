# eslint-plugin-smart

> 公司通用ESLint规则集，适用于React、Vue、NestJS和TypeScript项目

这个ESLint插件提供了一套全面的代码规范配置，适用于公司内部各类项目，旨在提高代码质量、可维护性和开发效率。它集成了多种常用的ESLint插件和规则，让你可以快速应用最佳实践到你的项目中。

## 安装

```bash
# npm
npm install --save-dev eslint eslint-plugin-smart

# yarn
yarn add --dev eslint eslint-plugin-smart

# pnpm
pnpm add --save-dev eslint eslint-plugin-smart
```

## 使用方法

### 基础配置（适用于所有项目）

```js
// eslint.config.js (ESLint v9+)
export default {
  extends: ['plugin:smart/recommended'],
};

// .eslintrc.js (ESLint v8 及以下)
module.exports = {
  extends: ['plugin:smart/recommended'],
};
```

### TypeScript项目

```js
// eslint.config.js (ESLint v9+)
export default {
  extends: ['plugin:smart/typescript'],
};

// .eslintrc.js (ESLint v8 及以下)
module.exports = {
  extends: ['plugin:smart/typescript'],
};
```

### React项目

```js
// eslint.config.js (ESLint v9+)
export default {
  extends: ['plugin:smart/react'],
};

// .eslintrc.js (ESLint v8 及以下)
module.exports = {
  extends: ['plugin:smart/react'],
};
```

### Vue项目

```js
// eslint.config.js (ESLint v9+)
export default {
  extends: ['plugin:smart/vue'],
};

// .eslintrc.js (ESLint v8 及以下)
module.exports = {
  extends: ['plugin:smart/vue'],
};
```

### NestJS项目

```js
// eslint.config.js (ESLint v9+)
export default {
  extends: ['plugin:smart/nestjs'],
};

// .eslintrc.js (ESLint v8 及以下)
module.exports = {
  extends: ['plugin:smart/nestjs'],
};
```

## 自定义配置

你可以根据项目需求自定义规则：

```js
// eslint.config.js (ESLint v9+)
export default {
  extends: ['plugin:smart/react'], // 使用预设配置
  rules: {
    // 覆盖或添加规则
    'no-console': 'error', // 禁止使用console
    'max-len': ['warn', { code: 100 }], // 修改行长度限制
  },
};

// .eslintrc.js (ESLint v8 及以下)
module.exports = {
  extends: ['plugin:smart/react'],
  rules: {
    'no-console': 'error',
    'max-len': ['warn', { code: 100 }],
  },
};
```

## 包含的规则集

- **基础规则**：代码风格、错误防范、导入排序等通用规则
- **TypeScript规则**：类型检查、接口定义等TypeScript特定规则
- **React规则**：组件编写、Hooks使用、JSX格式化、可访问性等React特定规则
- **Vue规则**：组件命名、模板格式化、属性排序等Vue特定规则
- **NestJS规则**：后端服务开发相关规则

## 许可证

ISC
