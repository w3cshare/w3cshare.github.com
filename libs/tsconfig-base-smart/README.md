<!--
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-05-05 00:53:10
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-05 02:01:58
 * @FilePath: /FullStack/libs/tsconfig-base/README.md
 * @Description: tsconfig-base-smart
-->

# `tsconfig-base-smart`

> TypeScript配置基础插件，为MonoRepo项目提供统一的TypeScript配置，使子项目能够轻松继承基础配置。

## 功能特点

- 提供统一的TypeScript基础配置
- 支持子项目通过extends继承配置
- 提供API用于获取和创建配置

## 安装

```bash
pnpm add tsconfig-base-smart -D
```

## 使用方法

### 方法一：直接在tsconfig.json中继承

在子项目的`tsconfig.json`文件中，通过extends字段继承基础配置：

```json
{
  "extends": "tsconfig-base-smart",
  "compilerOptions": {
    // 在此处覆盖或添加特定选项
    "outDir": "lib" // 必须设置！否则可能导致编译输出到错误位置
  },
  "include": ["src/**/*"]
}
```

> **⚠️ 重要提示**：必须在子项目中设置`"outDir"`选项！如果不设置，TypeScript会使用默认路径，可能导致编译输出到错误的位置。

### 方法二：使用API创建配置

```typescript
// 引入包
const tsconfigBase = require('tsconfig-base-smart')

// 获取基础配置路径
const baseTsConfigPath = tsconfigBase.getBaseTsConfigPath()
console.log('基础配置路径:', baseTsConfigPath)

// 创建自定义配置
const customConfig = tsconfigBase.createTsConfig({
  compilerOptions: {
    outDir: 'lib', // 必须设置！
    // 其他自定义选项
  },
})

// 将配置写入文件
const fs = require('fs')
fs.writeFileSync('./tsconfig.json', JSON.stringify(customConfig, null, 2))
```

## 配置说明

基础配置包含以下主要设置：

- target: ES2021
- module: commonjs
- moduleResolution: node
- 启用装饰器和元数据反射
- 启用源映射
- 配置路径别名
- 排除不需要编译的文件和目录

详细配置请查看包内的`tsconfig.base.json`文件。

## 故障排除

### 1. 编译输出到错误位置

**问题**: 如果子项目不设置`outDir`，编译结果可能会输出到错误的位置。

**解决方案**: 确保在每个子项目的tsconfig.json中明确设置`outDir`：

```json
{
  "extends": "tsconfig-base-smart",
  "compilerOptions": {
    "outDir": "lib" // 或其他期望的输出目录
  }
}
```

### 2. 依赖安装问题

**问题**: 在Monorepo项目中，如果依赖未正确链接，配置可能不生效。

**解决方案**: 执行以下命令确认依赖已正确安装和链接：

```bash
# 在项目根目录执行
pnpm install
# 检查包是否正确链接
pnpm list --filter <your-project> tsconfig-base-smart
```

### 3. 构建问题

如果在使用前未构建此包，TypeScript配置可能不生效。确保执行：

```bash
# 进入tsconfig-base-smart目录
cd libs/tsconfig-base-smart
# 构建包
pnpm run build
```

## 贡献指南

欢迎提交问题和改进建议。如需贡献代码，请遵循以下步骤：

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建Pull Request
