# 在 Workspace 子项目中使用 tsconfig-base-smart

本文档说明如何在 Lerna + Nx + pnpm + Workspace 的单体（mono）项目中正确使用 `tsconfig-base-smart` 插件。

## 快速使用

### 1. 在子项目中安装依赖

首先确保子项目的 `package.json` 中已添加 `tsconfig-base-smart` 依赖：

```json
{
  "devDependencies": {
    "tsconfig-base-smart": "workspace:^"
  }
}
```

### 2. 创建 tsconfig.json 文件

在子项目根目录创建 `tsconfig.json` 文件:

```json
{
  "extends": "tsconfig-base-smart",
  "compilerOptions": {
    "outDir": "lib" // 必须设置！
  },
  "include": ["src/**/*"]
}
```

> **⚠️ 重要提示**：必须设置 `outDir` 属性，否则编译输出可能会到错误的位置！

### 3. 编译项目

可以使用以下命令编译项目：

```bash
pnpm tsc
# 或
pnpm build
```

## 常见问题

### 1. 编译输出到错误位置

**问题**：编译结果被输出到父项目的目录中。

**解决方案**：确保在 `tsconfig.json` 中设置了 `outDir`：

```json
{
  "compilerOptions": {
    "outDir": "lib" // 或任何你想要的目录
  }
}
```

### 2. 配置不生效

**问题**：继承的配置不生效。

**解决方案**：检查依赖是否正确安装：

```bash
# 检查包是否正确链接
pnpm list --filter <your-project> tsconfig-base-smart
```

### 3. 本地开发和监视变化

推荐在开发时使用以下命令监视文件变化：

```bash
pnpm tsc -w
# 或添加到package.json中
# "scripts": { "dev": "tsc -w" }
```

## 最佳实践

1. **总是设置 outDir**：防止编译结果输出到错误位置
2. **简化引用**：使用 `"extends": "tsconfig-base-smart"` 而不是完整路径
3. **保持配置简洁**：继承基础配置，只覆盖需要更改的选项
4. **与构建工具结合**：可以配合 tsup, rollup 等工具使用

## 示例

完整示例请参考：[tsconfig-base-smart/examples](../examples) 