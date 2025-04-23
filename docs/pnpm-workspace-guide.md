# PNPM 工作区依赖安装指南

## 常见问题与解决方案

### 作用域包名安装问题

在使用 pnpm 工作区安装带有 `@` 作用域的包时，可能会遇到 shell 解析问题，导致依赖安装失败。这是因为 `@` 符号在某些 shell 环境中有特殊含义。

#### 解决方案

1. **使用引号包裹过滤器参数**：

```bash
pnpm add <package> --filter="@smarts-isoftstone/tcp-main"
```

2. **使用相对路径过滤器**：

```bash
pnpm add <package> --filter=./micro-service/tcp-main
```

3. **使用转义字符**：

```bash
pnpm add <package> --filter=\@smarts-isoftstone/tcp-main
```

### 工作区依赖安装失败

如果遇到工作区依赖安装失败的情况，可以尝试以下步骤：

1. **清除 pnpm 缓存**：

```bash
pnpm store prune
```

2. **确保 pnpm-workspace.yaml 配置正确**：

```yaml
packages:
  - 'micro-frontend/*'
  - 'micro-service/*'
  # 其他工作区目录
linkWorkspacePackages: true # 确保此选项已启用
```

3. **重新安装依赖**：

```bash
pnpm install
```

## 正确的依赖安装命令格式

### 为单个工作区包安装依赖

```bash
pnpm add <package> --filter="<workspace-package>"
```

示例：

```bash
pnpm add express --filter="@smarts-isoftstone/tcp-main"
```

### 为多个工作区包安装相同的依赖

```bash
pnpm add <package> --filter="<workspace-package-1>" --filter="<workspace-package-2>"
```

示例：

```bash
pnpm add @nestjs/microservices --filter="@smarts-isoftstone/tcp-main" --filter="@smarts-isoftstone/tcp-client"
```

### 安装工作区内的本地包作为依赖

```bash
pnpm add <workspace-package> --filter="<target-package>"
```

示例：

```bash
pnpm add "@smarts-isoftstone/nestjs-logger" --filter="@smarts-isoftstone/tcp-main"
```

### 安装开发依赖

```bash
pnpm add <package> -D --filter="<workspace-package>"
```

## 注意事项

1. 确保 `nx.json` 中的 `packageManager` 设置为 `pnpm`
2. 确保 `pnpm-workspace.yaml` 中的 `linkWorkspacePackages` 设置为 `true`
3. 使用双引号包裹带有 `@` 符号的包名，避免 shell 解析问题
4. 如果依赖安装仍然失败，尝试使用相对路径过滤器代替包名

## 常用命令参考

```bash
# 安装所有依赖
pnpm install

# 清除缓存
pnpm store prune

# 为特定工作区包安装依赖
pnpm add <package> --filter="<workspace-package>"

# 移除特定工作区包的依赖
pnpm remove <package> --filter="<workspace-package>"

# 运行特定工作区包的脚本
pnpm run <script> --filter="<workspace-package>"
```

## NX 构建优化指南

### NX 基本概念

NX 是一个智能、快速和可扩展的构建系统，具有以下特点：

1. **增量构建**：只重新构建发生更改的部分
2. **分布式缓存**：跨团队共享构建缓存
3. **智能任务编排**：自动并行执行任务
4. **项目依赖图**：可视化项目依赖关系

### 配置说明

1. **nx.json 基础配置**：

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
        "cacheableOperations": ["build", "test", "lint", "package", "prepare"],
        "parallel": 3,
        "useDaemonProcess": true
      }
    }
  },
  "targetDefaults": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["{projectRoot}/dist"]
    }
  }
}
```

2. **项目特定配置**：

```json
{
  "name": "micro-app-react",
  "projectType": "application",
  "targets": {
    "build": {
      "executor": "@nrwl/web:webpack",
      "outputs": ["{options.outputPath}"],
      "defaultConfiguration": "production",
      "options": {
        "outputPath": "dist/micro-app-react"
      }
    }
  }
}
```

### 常用命令

```bash
# 构建受影响的项目
nx affected:build

# 并行构建所有项目
nx run-many --target=build --all --parallel=3

# 使用缓存构建
nx build micro-app-react --skip-nx-cache=false

# 生成依赖图
nx graph
```

### 性能优化建议

1. **启用分布式缓存**：

```bash
nx connect-to-nx-cloud
```

2. **优化缓存配置**：

```json
{
  "tasksRunnerOptions": {
    "default": {
      "options": {
        "cacheDirectory": ".nx-cache",
        "parallel": true,
        "useDaemonProcess": true,
        "cacheableOperations": ["build", "test"]
      }
    }
  }
}
```

## Lerna 包管理指南

### 基本配置

1. **lerna.json 配置**：

```json
{
  "version": "independent",
  "npmClient": "pnpm",
  "useWorkspaces": true,
  "command": {
    "publish": {
      "conventionalCommits": true,
      "message": "chore(release): publish",
      "registry": "https://registry.npmjs.org"
    },
    "version": {
      "conventionalCommits": true,
      "message": "chore(release): version packages"
    }
  }
}
```

### 版本管理命令

```bash
# 创建新版本
lerna version

# 发布包
lerna publish

# 查看包差异
lerna diff

# 列出本地包
lerna list
```

### 工作流最佳实践

1. **版本管理流程**：

   - 使用 `independent` 模式管理版本
   - 遵循语义化版本规范
   - 使用 conventional commits 规范

2. **发布流程**：

   - 确保所有更改已提交
   - 运行测试和构建
   - 使用 `lerna version` 更新版本
   - 使用 `lerna publish` 发布包

3. **CI/CD 集成**：
   ```yaml
   build:
     steps:
       - uses: actions/checkout@v2
       - uses: actions/setup-node@v2
       - run: |
           pnpm install
           nx affected:build
           lerna version --yes
           lerna publish from-git --yes
   ```

## 项目优化建议

1. **构建优化**：

   - 使用 NX 的增量构建
   - 启用并行构建
   - 配置合适的缓存策略

2. **依赖管理**：

   - 使用 pnpm 管理依赖
   - 使用 Lerna 管理版本和发布
   - 定期更新和清理依赖

3. **工作流程优化**：
   - 集成 husky 进行提交检查
   - 使用 commitlint 规范提交信息
   - 配置 CI/CD 自动化流程
