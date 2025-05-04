# PNPM Workspace 指南

> 本指南详细介绍如何在 Monorepo 项目中使用 pnpm 工作空间功能

## pnpm 简介

[pnpm](https://pnpm.io/) 是一个快速、节省磁盘空间的包管理器，具有以下特点：

- **高效的依赖安装**：比npm和yarn安装速度更快
- **节省磁盘空间**：使用硬链接和内容寻址存储避免重复安装
- **严格的依赖管理**：默认防止访问未声明的依赖
- **Workspace支持**：内置支持多包存储库（Monorepo）管理

在我们的项目中，pnpm 与 Lerna 和 Nx 结合使用，提供高效的包管理和工作空间功能。

## 配置工作空间

### pnpm-workspace.yaml

pnpm 工作空间通过项目根目录的 `pnpm-workspace.yaml` 文件配置：

```yaml
packages:
  # 所有直接子目录中的包
  - "apps/*"
  - "lib-cli/*"
  - "lib-lint/*"
  - "lib-mcp/*"
  - "lib-nest/*"
  - "lib-react/*"
  - "lib-vue/*"
  - "libs/*"
  - "micro-frontend/*"
  - "micro-service/*"
  - "packages/*"
  - ".temp/*"

# 启用工作空间包链接
linkWorkspacePackages: true
```

这个配置告诉 pnpm 哪些目录包含工作空间的包。glob 模式 `"apps/*"` 表示 `apps` 目录下的所有直接子目录都被视为包。

## 安装依赖

### 全局依赖安装

在项目根目录安装所有包共享的依赖：

```bash
# 安装开发依赖到根工作空间
pnpm add -D typescript eslint -w

# 安装生产依赖到根工作空间
pnpm add lodash -w
```

### 为特定包安装依赖

使用 `--filter` 参数为特定包安装依赖：

```bash
# 为 google-tab-home 包安装 vue 依赖
pnpm add vue --filter @scope/google-tab-home

# 为多个包安装依赖
pnpm add react --filter "@scope/{package-a,package-b}"

# 为所有 React 组件库安装依赖
pnpm add react-dom --filter "./lib-react/*"
```

### 包之间的相互依赖

在 Monorepo 中，包可以相互依赖：

```bash
# 将公共工具包添加为应用的依赖
pnpm add @scope/utils --filter @scope/my-app

# 将组件库添加为微前端应用的依赖
pnpm add @scope/ant-design-lib --filter @scope/micro-app-react
```

pnpm 会自动创建包之间的符号链接，确保依赖是最新的。

## 工作空间脚本

### 在所有包中运行脚本

使用 `-r` 参数在所有包中运行相同的脚本：

```bash
# 在所有包中运行构建脚本
pnpm -r build

# 限制并行度
pnpm -r --parallel=3 build
```

### 在特定包中运行脚本

使用 `--filter` 参数在特定包中运行脚本：

```bash
# 在单个包中运行测试
pnpm --filter @scope/my-package test

# 在多个包中运行脚本
pnpm --filter "@scope/package-{a,b}" lint
```

### 顺序执行

考虑依赖关系顺序执行脚本：

```bash
# 按拓扑顺序构建所有包
pnpm -r --workspace-concurrency=1 build
```

## 高级功能

### 过滤脚本执行

根据不同条件筛选包：

```bash
# 只在已修改的包中运行测试
pnpm -r --filter="[origin/main...HEAD]" test

# 在package-a及其所有依赖项中运行脚本
pnpm --filter @scope/package-a... build

# 在package-a及其依赖包中运行脚本
pnpm --filter ...@scope/package-a test
```

### 工作空间协议

在 `package.json` 中使用工作空间协议引用其他包：

```json
{
  "dependencies": {
    "@scope/utils": "workspace:*",
    "@scope/components": "workspace:^1.0.0"
  }
}
```

- `workspace:*` - 接受任何版本
- `workspace:^1.0.0` - 接受符合语义化版本的任何版本

### 管理 Node.js 版本

使用 `.nvmrc` 文件统一项目的 Node.js 版本：

```
v16.15.0
```

## 常见问题与解决方案

### 1. 幻影依赖问题

**问题**：使用了未显式声明的依赖
**解决方案**：启用严格模式，显式声明所有依赖

```bash
# 在 .npmrc 文件中设置
echo "strict-peer-dependencies=true" >> .npmrc
```

### 2. 依赖提升问题

**问题**：依赖未正确提升，导致多个版本共存
**解决方案**：使用 shamefully-hoist 选项

```bash
# 在 .npmrc 文件中设置
echo "shamefully-hoist=true" >> .npmrc
```

### 3. 包版本不一致

**问题**：工作空间中的包依赖同一库的不同版本
**解决方案**：使用 pnpm 的 overrides 功能强制使用统一版本

```json
{
  "pnpm": {
    "overrides": {
      "react": "^17.0.0",
      "react-dom": "^17.0.0"
    }
  }
}
```

## 与其他工具集成

### 与 Lerna 集成

将 Lerna 配置为使用 pnpm 作为客户端：

```json
// lerna.json
{
  "npmClient": "pnpm",
  "useWorkspaces": true
}
```

### 与 Nx 集成

Nx 可以识别 pnpm 工作空间，无需额外配置即可协同工作。

### 与 TypeScript 集成

使用 TypeScript 项目引用功能增强工作空间：

```json
// tsconfig.json
{
  "references": [
    { "path": "./packages/utils" },
    { "path": "./packages/components" }
  ]
}
```

## 性能优化

### 并行安装

利用 pnpm 的并行安装功能加速安装过程：

```bash
# 设置最大并行度
pnpm install --network-concurrency 10
```

### 使用 .npmrc 优化

创建项目级 `.npmrc` 文件包含以下配置：

```
# 启用链接工作空间包
link-workspace-packages=true

# 设置网络并发数
network-concurrency=10

# 使用严格模式
strict-peer-dependencies=true

# 启用 store 服务器以提高性能
use-store-server=true
```

## 最佳实践

1. **统一版本管理**：在根 `package.json` 中维护依赖版本
2. **避免全局安装**：使用 `pnpm dlx` 代替全局安装命令
3. **利用缓存**：CI/CD 环境中缓存 pnpm store 目录
4. **定期更新**：使用 `pnpm update -r` 定期更新所有依赖
5. **版本锁定**：使用 `pnpm-lock.yaml` 锁定依赖版本
6. **清晰的脚本命名**：使用统一的脚本命名约定
