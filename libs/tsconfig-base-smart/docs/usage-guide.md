# TypeScript 配置基础插件使用指南

## 概述

`tsconfig-base-smart` 是一个为 MonoRepo 项目设计的 TypeScript 配置基础插件，它提供了统一的 TypeScript 配置，使子项目能够轻松继承这些基础配置，保持整个项目的一致性。

## 安装

在项目中安装插件：

```bash
# 使用 pnpm
pnpm add tsconfig-base-smart -D

# 或使用 npm
npm install tsconfig-base-smart --save-dev

# 或使用 yarn
yarn add tsconfig-base-smart -D
```

## 使用方法

### 方法一：直接继承配置（推荐）

在子项目的 `tsconfig.json` 文件中，通过 `extends` 字段继承基础配置：

```json
{
  "extends": "tsconfig-base-smart/tsconfig.base.json",
  "compilerOptions": {
    // 在此处覆盖或添加特定选项
    "outDir": "./dist"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts"]
}
```

### 方法二：使用 API 创建配置

如果需要以编程方式创建配置，可以使用提供的 API：

```typescript
// 引入包
import { createTsConfig, getBaseTsConfigPath } from 'tsconfig-base-smart'
import * as fs from 'fs'

// 获取基础配置路径
const baseTsConfigPath = getBaseTsConfigPath()
console.log('基础配置路径:', baseTsConfigPath)

// 创建自定义配置
const customConfig = createTsConfig({
  compilerOptions: {
    outDir: './dist',
    // 其他自定义选项
    target: 'ES2022',
  },
  include: ['src/**/*'],
})

// 将配置写入文件
fs.writeFileSync('./tsconfig.json', JSON.stringify(customConfig, null, 2))
```

## 基础配置详解

`tsconfig.base.json` 包含以下主要设置：

```json
{
  "compilerOptions": {
    "target": "ES2021", // 编译目标 ECMAScript 版本
    "module": "commonjs", // 模块系统
    "moduleResolution": "node", // 模块解析策略
    "declaration": true, // 生成 .d.ts 文件
    "sourceMap": true, // 生成源映射文件
    "baseUrl": ".", // 基础目录，用于解析非相对模块名称
    "paths": {
      // 路径映射，简化导入
      "@/*": ["src/*"]
    }
    // ... 其他配置
  },
  "exclude": [
    // 排除的文件和目录
    "node_modules",
    "dist"
    // ... 其他排除项
  ]
}
```

## 在 MonoRepo 中的最佳实践

1. **统一配置**：所有子项目应继承相同的基础配置，确保代码风格和编译选项的一致性

2. **局部定制**：子项目可以根据需要覆盖特定选项，但应尽量保持与基础配置的兼容性

3. **路径别名**：利用 `paths` 配置简化导入路径，提高代码可读性

4. **项目引用**：对于复杂的依赖关系，可以使用 TypeScript 的项目引用功能：

```json
{
  "extends": "tsconfig-base-smart/tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./dist"
  },
  "references": [{ "path": "../common-lib" }]
}
```

## 常见问题

### Q: 如何确认配置已正确继承？

可以运行 `tsc --showConfig` 命令查看合并后的完整配置。

### Q: 如何处理路径别名？

基础配置已设置 `@/*` 指向 `src/*`，子项目可以根据需要在自己的配置中添加或修改路径别名。

### Q: 是否支持 ESM 模块？

默认配置使用 CommonJS 模块系统。如需使用 ESM，可在子项目中覆盖：

```json
{
  "extends": "tsconfig-base-smart/tsconfig.base.json",
  "compilerOptions": {
    "module": "ESNext",
    "moduleResolution": "NodeNext"
  }
}
```

## 更多资源

- [TypeScript 官方文档](https://www.typescriptlang.org/docs/)
- [tsconfig 配置参考](https://www.typescriptlang.org/tsconfig)
- [项目示例](../examples/example-usage.ts)
