# Lerna + Nx 开发指南

> 本指南详细介绍如何在 Monorepo 项目中结合使用 Lerna 和 Nx 工具

## Lerna 和 Nx 简介

[Lerna](https://lerna.js.org/) 和 [Nx](https://nx.dev/) 是两个强大的 Monorepo 管理工具，它们各自专注于不同的方面：

- **Lerna**：专注于版本管理和发布流程，简化大型代码库的发版流程
- **Nx**：提供高级构建系统，支持增量构建、依赖图分析和缓存功能

在我们的项目中，我们结合了这两个工具的优势，使用 Lerna 管理版本和发布，使用 Nx 提高构建效率。

## 安装与配置

### 项目初始化

项目已经预先配置好了 Lerna 和 Nx。如果你需要在新项目中设置，可以参考以下步骤：

```bash
# 初始化项目
mkdir my-monorepo && cd my-monorepo
pnpm init

# 安装 Lerna 和 Nx
pnpm add -D lerna nx @nrwl/workspace

# 初始化 Lerna
npx lerna init

# 初始化 Nx
npx nx init
```

### lerna.json 配置

```json
{
  "version": "independent",
  "npmClient": "pnpm",
  "useWorkspaces": true,
  "command": {
    "publish": {
      "conventionalCommits": true,
      "message": "chore(release): publish"
    },
    "version": {
      "conventionalCommits": true,
      "message": "chore(release): version"
    }
  },
  "ignoreChanges": [
    "**/*.md",
    "**/*.test.ts",
    "**/*.e2e.ts",
    "**/fixtures/**",
    "**/test/**"
  ]
}
```

### nx.json 配置

```json
{
  "extends": "nx/presets/npm.json",
  "affected": {
    "defaultBase": "main"
  },
  "tasksRunnerOptions": {
    "default": {
      "runner": "nx/tasks-runners/default",
      "options": {
        "cacheableOperations": ["build", "test", "lint"],
        "accessToken": "YOUR_GITHUB_TOKEN"
      }
    }
  },
  "defaultProject": "my-app",
  "targetDefaults": {
    "build": {
      "dependsOn": ["^build"]
    }
  }
}
```

## Lerna 核心功能

### 1. 版本管理

Lerna 提供了强大的版本管理功能，支持两种版本策略：

- **Fixed/Locked mode (default)**：所有包使用同一版本号
- **Independent mode**：每个包独立管理版本号

在我们的项目中，我们使用独立版本模式，允许每个包根据自身变更独立更新版本。

```bash
# 版本更新 (使用交互式CLI)
lerna version

# 版本更新 (自动决定版本增量)
lerna version --conventional-commits

# 发布到npm
lerna publish
```

### 2. 包依赖管理

Lerna 可以帮助管理包之间的依赖关系：

```bash
# 将本地包B添加为包A的依赖
lerna add @scope/package-b --scope=@scope/package-a

# 为所有包添加外部依赖
lerna add lodash
```

### 3. 执行命令

Lerna 可以并行执行包中的命令：

```bash
# 在所有包中运行测试
lerna run test

# 在特定包中运行命令
lerna run build --scope="@scope/package-a"

# 仅在有变更的包中运行命令
lerna run --since master test
```

## Nx 核心功能

### 1. 增量构建

Nx 的主要优势是能够智能地只构建受影响的包：

```bash
# 构建所有包
nx run-many --target=build --all

# 构建受影响的包
nx affected --target=build

# 构建特定包
nx build my-app
```

### 2. 依赖图可视化

Nx 提供了可视化工具来分析项目依赖关系：

```bash
# 生成依赖图
nx dep-graph

# 将特定包的依赖关系保存为图片
nx dep-graph --file=deps.png --focus=my-app
```

### 3. 智能缓存

Nx 的缓存系统可以大幅提升构建速度：

```bash
# 清除缓存
nx reset

# 使用缓存构建
nx affected --target=build --parallel=3
```

## 如何在我们的项目中使用

### 日常开发流程

1. **开始新功能**：从主分支创建新的特性分支
   ```bash
   git checkout -b feature/my-feature
   ```

2. **开发与测试**：使用 Nx 来构建和测试受影响的包
   ```bash
   # 运行受影响包的测试
   nx affected --target=test
   
   # 构建受影响的包
   nx affected --target=build
   ```

3. **提交更改**：使用约定式提交规范
   ```bash
   git add .
   git commit -m "feat(package-name): add new feature"
   ```

4. **合并更改**：创建PR并合并到主分支

### 发布流程

1. **版本更新**：使用 Lerna 更新受影响包的版本
   ```bash
   lerna version --conventional-commits
   ```

2. **构建包**：使用 Nx 构建所有要发布的包
   ```bash
   nx run-many --target=build --projects=package-a,package-b
   ```

3. **发布包**：使用 Lerna 发布到 npm
   ```bash
   lerna publish from-package
   ```

## 高级技巧

### 1. 自定义构建管道

在 `nx.json` 中定义依赖关系确保正确的构建顺序：

```json
{
  "targetDefaults": {
    "build": {
      "dependsOn": ["^build"]
    }
  }
}
```

### 2. 工作区验证

使用 Nx 来验证工作区的完整性：

```bash
# 验证依赖关系
nx workspace-lint
```

### 3. 并行执行和限制

控制任务的并行执行数量：

```bash
# 最多3个并行任务
nx affected --target=test --parallel=3
```

### 4. 缓存控制

优化缓存使用以提高性能：

```bash
# 使用远程缓存
NX_CACHE_DIRECTORY=node_modules/.cache/nx nx affected --target=build
```

## 常见问题与解决方案

### 构建顺序问题

**问题**：依赖包未按正确顺序构建
**解决方案**：在 `nx.json` 中配置 `dependsOn` 以确保正确的构建顺序

### 版本更新冲突

**问题**：在 Lerna 版本更新时出现冲突
**解决方案**：使用 `--no-push` 选项先更新版本，手动解决冲突后再推送

### 持续集成问题

**问题**：CI 环境中构建速度慢
**解决方案**：利用 Nx 的缓存功能，配置远程缓存，确保 CI 流程充分利用缓存

## 最佳实践

1. **统一命令入口**：在 `package.json` 中添加统一的脚本命令
   ```json
   {
     "scripts": {
       "build": "nx run-many --target=build --all",
       "test": "nx run-many --target=test --all",
       "lint": "nx run-many --target=lint --all",
       "version": "lerna version --conventional-commits",
       "publish": "lerna publish from-package"
     }
   }
   ```

2. **优化依赖管理**：使用 pnpm 的 workspace 功能结合 Lerna
   ```yaml
   # pnpm-workspace.yaml
   packages:
     - 'packages/*'
     - 'apps/*'
   ```

3. **维护依赖图**：定期检查并优化项目依赖关系
   ```bash
   nx dep-graph
   ```

4. **合理拆分任务**：将大型任务拆分为小型可缓存的任务，提高缓存命中率

5. **统一工具配置**：确保所有包使用统一的 TypeScript, ESLint 和 Jest 配置 