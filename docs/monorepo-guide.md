# Monorepo 开发指南

> 基于 Lerna + Nx + pnpm + Workspace 的单体（mono）项目开发指南

## 什么是 Monorepo？

Monorepo（单一代码库）是一种项目架构模式，它将多个相关项目的代码存储在同一个代码库中，而不是分散在多个独立的代码库中。在我们的项目中，我们采用了基于 Lerna、Nx、pnpm Workspace 的 Monorepo 架构。

## 为什么选择 Monorepo？

在我们的全栈开发项目中，Monorepo架构带来以下优势：

1. **代码共享**：跨项目轻松共享组件、工具和配置
2. **简化依赖管理**：统一管理所有项目的依赖，避免版本冲突
3. **原子提交**：在一个提交中同时更新多个相关项目，保持一致性
4. **统一工作流**：所有项目使用相同的构建、测试和部署流程
5. **集中式CI/CD**：简化持续集成和部署流程
6. **更好的协作**：开发人员可以更容易地理解和贡献到相关项目

## 技术栈组合

我们的Monorepo架构使用以下工具组合：

- **Lerna**：多包存储库管理工具，用于版本控制和发布
- **Nx**：提供智能构建系统和缓存功能，加速构建流程
- **pnpm**：高效的包管理器，节省磁盘空间和安装时间
- **Workspace**：启用项目间依赖引用，支持本地包开发

## 目录结构

```
FullStack/
├── apps/                 # 应用项目目录
│   ├── google-tab-home/  # Google Tab首页项目
│   └── vscode-lowcode/   # VSCode低代码平台
├── apps-python/          # Python应用目录
│   ├── ocr-vlm/          # 印章识别服务
│   └── pdf-compressed/   # PDF压缩工具
├── apps-native/          # 原生应用目录
├── lib-vue/              # Vue组件库目录
├── lib-react/            # React组件库目录
├── lib-nest/             # Nest.js包目录
├── lib-cli/              # CLI工具目录
├── lib-lint/             # 代码规范工具目录
├── micro-frontend/       # 微前端项目目录
├── micro-service/        # 微服务项目目录
├── packages/             # 公共包目录
├── docs/                 # 文档目录
├── pnpm-workspace.yaml   # pnpm工作空间配置
├── lerna.json            # Lerna配置文件
└── nx.json               # Nx配置文件
```

## 关键配置文件

### pnpm-workspace.yaml

```yaml
packages:
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
linkWorkspacePackages: true
```

### lerna.json

```json
{
  "version": "independent",
  "npmClient": "pnpm",
  "useWorkspaces": true
}
```

### nx.json (部分)

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
        "cacheableOperations": ["build", "test", "lint"]
      }
    }
  }
}
```

## 常用命令

### 项目初始化

```bash
# 安装所有依赖
pnpm install

# 清理所有node_modules
pnpm -r exec -- rm -rf node_modules

# 递归安装所有依赖
pnpm install -r
```

### 创建新包

```bash
# 创建React组件库
pnpm run cli create lib-react/my-component-lib

# 创建微服务
pnpm run cli create micro-service/my-service

# 创建应用
pnpm run cli create apps/my-app
```

### 依赖管理

```bash
# 为所有包添加开发依赖
pnpm add -D typescript -w

# 为特定包添加依赖
pnpm add react --filter @scope/lib-react-component

# 包之间相互引用
pnpm add @scope/lib-utils --filter @scope/my-app
```

### 构建与测试

```bash
# 构建所有包
nx run-many --target=build --all

# 构建特定包
nx build my-app

# 运行测试
nx test my-app

# 使用缓存加速构建
nx affected --target=build
```

### 版本发布

```bash
# 版本更新
lerna version

# 发布到npm
lerna publish
```

## 最佳实践

1. **合理拆分包**：按功能和用途划分包，保持每个包的职责单一
2. **依赖声明**：明确声明包之间的依赖关系，避免隐式依赖
3. **版本管理**：遵循语义化版本规范，合理管理版本更新
4. **共享配置**：将通用配置提取到共享包中，减少重复配置
5. **工具链统一**：使用统一的构建、测试和格式化工具
6. **文档维护**：及时更新各包的README文档，方便其他开发者使用

## 常见问题与解决方案

### 包之间循环依赖

- **症状**：构建失败，报告循环依赖错误
- **解决方案**：重新设计包的结构，将共享代码提取到独立的包中

### 版本冲突

- **症状**：运行时错误，多个版本的同一依赖被加载
- **解决方案**：使用pnpm的`peerDependencies`声明共享依赖

### 构建性能问题

- **症状**：构建时间过长
- **解决方案**：利用Nx的缓存功能，只重新构建受影响的包

## 参考资源

- [Lerna 官方文档](https://lerna.js.org/)
- [Nx 官方文档](https://nx.dev/)
- [pnpm 工作空间指南](https://pnpm.io/workspaces)

## 注意事项

在使用Monorepo架构时，需要注意以下几点：

1. **避免包过度拆分**：过多的小包会增加管理复杂度
2. **保持依赖树清晰**：明确定义包之间的依赖关系
3. **版本策略一致**：选择统一的版本管理策略（独立版本或锁定版本）
4. **CI/CD适配**：确保CI/CD流程适配Monorepo结构 