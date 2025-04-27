# TypeScript 支持

`eslint-plugin-smart` 提供了完整的 TypeScript 支持，包括类型检查、最佳实践和代码风格规范。

## 功能特性

- TypeScript 语法支持
- 类型检查集成
- 装饰器支持
- 导入/导出排序
- 未使用代码检测
- Prettier 集成

## 配置使用

### 基本配置

在 `eslint.config.mjs` 中添加 TypeScript 配置：

```javascript
import eslintPlugin from 'eslint-plugin-smart'

export default [
  ...eslintPlugin.configs.typescript
]
```

### 完整配置示例

```javascript
import eslintPlugin from 'eslint-plugin-smart'

export default [
  {
    ignores: [
      'dist/**',
      'node_modules/**'
    ]
  },
  ...eslintPlugin.configs.typescript,
  {
    // 自定义规则
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn'
    }
  }
]
```

## 主要规则说明

### 1. 类型检查规则

- `@typescript-eslint/no-explicit-any`: 禁止使用 `any` 类型
- `@typescript-eslint/explicit-function-return-type`: 要求函数声明返回类型
- `@typescript-eslint/no-unused-vars`: 禁止未使用的变量
- `@typescript-eslint/no-non-null-assertion`: 禁止使用非空断言

### 2. 代码风格规则

- `@typescript-eslint/consistent-type-definitions`: 统一类型定义风格
- `@typescript-eslint/member-delimiter-style`: 成员分隔符风格
- `@typescript-eslint/type-annotation-spacing`: 类型注解空格

### 3. 导入规则

- `unused-imports/no-unused-imports`: 禁止未使用的导入
- `simple-import-sort/imports`: 导入语句排序
- `simple-import-sort/exports`: 导出语句排序

## 项目配置

### 1. tsconfig.json 配置

确保项目根目录有正确的 `tsconfig.json` 配置：

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "node",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

### 2. 装饰器支持

如果项目使用装饰器（如 NestJS），需要在 `tsconfig.json` 中启用：

```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

## 常见问题

### 1. 如何处理特定的 TypeScript 文件？

使用文件匹配模式应用不同的规则：

```javascript
export default [
  ...eslintPlugin.configs.typescript,
  {
    files: ['src/models/**/*.ts'],
    rules: {
      // 模型文件特定的规则
      '@typescript-eslint/explicit-member-accessibility': ['error']
    }
  }
]
```

### 2. 如何禁用特定文件的类型检查？

使用 `ignores` 配置或在文件中使用注释：

```javascript
// 在配置中
export default [
  {
    ignores: ['src/legacy/**/*.ts']
  },
  ...eslintPlugin.configs.typescript
]

// 或在文件中
// @ts-nocheck
```

### 3. 如何处理类型导入？

默认配置已经包含了类型导入的优化规则：

```typescript
// 推荐的导入方式
import type { SomeType } from './types'
import { someFunction } from './utils'
```

## 最佳实践

1. 启用严格模式（strict: true）以获得最佳的类型检查
2. 使用显式的类型注解，提高代码可读性
3. 避免使用 `any` 类型，优先使用 `unknown`
4. 利用类型推断，减少不必要的类型注解
5. 定期运行类型检查和 lint 命令

## 与其他配置的集成

### 与 React 一起使用

```javascript
export default [
  ...eslintPlugin.configs.typescript,
  ...eslintPlugin.configs.react
]
```

### 与 Vue 一起使用

```javascript
export default [
  ...eslintPlugin.configs.typescript,
  ...eslintPlugin.configs.vue
]
```

### 与 NestJS 一起使用

```javascript
export default [
  ...eslintPlugin.configs.typescript,
  ...eslintPlugin.configs.nestjs
]
``` 