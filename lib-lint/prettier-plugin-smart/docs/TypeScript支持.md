---
title: Prettier 插件 TypeScript 支持
description: prettier-plugin-smarts 对 TypeScript 的增强支持
outline: deep
---

# TypeScript 增强支持

prettier-plugin-smarts 为 TypeScript 项目提供了特别优化的格式化功能，确保代码符合最佳实践和团队规范。

## TypeScript 特有功能

### Import 语句智能排序

针对 TypeScript 项目，插件提供了更智能的导入语句组织功能：

- **类型导入分组**：将类型导入（type imports）与值导入分开排序
- **路径别名支持**：针对 TypeScript 的路径别名（如 `@/` 或 `~`）进行优化排序
- **导入类型优先级**：根据导入类型（内置模块、第三方库、内部模块、相对路径）进行分组

### 类型声明格式化

优化 TypeScript 类型声明的格式：

- **接口声明**：使成员属性对齐，提高可读性
- **类型别名**：优化联合类型和交叉类型的格式
- **泛型参数**：确保复杂泛型参数的清晰展示

### 装饰器支持

针对 TypeScript 装饰器的特殊格式化规则，常用于 NestJS 等框架：

- **保持装饰器紧凑**：避免装饰器与目标之间出现空行
- **多装饰器对齐**：当一个元素有多个装饰器时保持对齐

## 配置选项

### importTypeOrder

控制 TypeScript 项目中不同类型导入的排序规则。

```js
// .prettierrc.js
module.exports = {
  importOrder: '^react,^@/,^[./]',
  // 新增：TypeScript类型导入特殊排序
  importTypeOrder: 'builtin,external,internal,parent,sibling,index',
}
```

### tsxBracketSameLine

控制 TSX 文件中多行元素的右括号是否与最后一行内容在同一行。

```js
// .prettierrc.js
module.exports = {
  // 默认值为 false，右括号单独成行
  tsxBracketSameLine: false,

  // 设置为 true，右括号与最后一行在同一行
  // tsxBracketSameLine: true,
}
```

### tsxSingleQuote

控制 TSX 文件中是否使用单引号。

```js
// .prettierrc.js
module.exports = {
  // 默认与 singleQuote 选项保持一致
  // 显式设置以覆盖全局配置
  tsxSingleQuote: true,
}
```

## TypeScript 项目配置示例

### 基本 TypeScript 项目

```js
// .prettierrc.js
module.exports = {
  // 基础配置
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'es5',

  // TypeScript 特定配置
  importOrder: '^@/types/,^@/interfaces/,^@/,^[./]',
}
```

### React TypeScript 项目

```js
// .prettierrc.js
module.exports = {
  // 基础配置
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'es5',

  // React + TypeScript 特定配置
  importOrder: '^react,^@/types/,^@/components/,^@/hooks/,^@/,^[./]',
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
}
```

### NestJS 项目

```js
// .prettierrc.js
module.exports = {
  // 基础配置
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'all',

  // NestJS 特定配置
  importOrder: '^@nestjs/,^@/interfaces/,^@/dto/,^@/services/,^@/,^[./]',
}
```

## TypeScript 类型声明格式化示例

### 接口声明

格式化前：

```typescript
interface User {
  id: number
  name: string
  email: string
  isActive: boolean
  createdAt: Date
  role: 'admin' | 'user' | 'guest'
}
```

格式化后：

```typescript
interface User {
  id: number
  name: string
  email: string
  isActive: boolean
  createdAt: Date
  role: 'admin' | 'user' | 'guest'
}
```

### 复杂类型别名

格式化前：

```typescript
type ResponseData<T> = {
  data: T
  status: 'success' | 'error'
  message?: string
  timestamp: number
  pagination?: { page: number; pageSize: number; total: number }
}
```

格式化后：

```typescript
type ResponseData<T> = {
  data: T
  status: 'success' | 'error'
  message?: string
  timestamp: number
  pagination?: {
    page: number
    pageSize: number
    total: number
  }
}
```

### 装饰器格式化

格式化前：

```typescript
@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
  @Get()
  @UseGuards(RolesGuard)
  @Roles('admin')
  findAll(): Promise<User[]> {
    return this.usersService.findAll()
  }
}
```

格式化后（保持紧凑对齐）：

```typescript
@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
  @Get()
  @UseGuards(RolesGuard)
  @Roles('admin')
  findAll(): Promise<User[]> {
    return this.usersService.findAll()
  }
}
```

## 与 TypeScript ESLint 集成

在 TypeScript 项目中同时使用 ESLint 和 Prettier 时的最佳配置：

```js
// .eslintrc.js
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
    // 禁用可能与 Prettier 冲突的规则
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/quotes': 'off',
    // 强制类型导入使用 import type
    '@typescript-eslint/consistent-type-imports': 'error',
  },
}
```

## 常见问题

### 1. 类型导入未分组

**问题**：类型导入与值导入混在一起，没有分开排序

**解决方案**：确保项目中使用了 `import type` 语法，并配置相应的 ESLint 规则

```js
// .eslintrc.js
{
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error'
  }
}
```

### 2. 项目特定的路径别名未正确排序

**问题**：使用了非标准的路径别名，导致导入排序不正确

**解决方案**：自定义 importOrder 规则以匹配项目的路径别名

```js
// .prettierrc.js
module.exports = {
  importOrder: '^react,^~core/,^~shared/,^@/,^[./]',
}
```

### 3. 泛型嵌套格式化问题

**问题**：复杂的嵌套泛型类型被压缩成难以阅读的一行

**解决方案**：调整 printWidth 设置

```js
// .prettierrc.js
module.exports = {
  printWidth: 80, // 降低此值以便复杂类型能够自动换行
}
```
