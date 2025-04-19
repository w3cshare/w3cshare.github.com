# 快速开始

本指南将帮助你快速设置和运行 FullStack Monorepo 项目。

## 环境要求

在开始之前，请确保你的开发环境满足以下要求：

- **Node.js** >= 18.0.0
- **PNPM** >= 8.0.0
- **Git**
- **Docker** (可选，用于容器化部署)

## 安装

### 1. 克隆项目仓库

```bash
git clone https://github.com/w3cshare/FullStack.git
cd FullStack
```

### 2. 配置环境变量

项目根目录下有以下环境变量文件：

- `.env`: 基础环境变量
- `.env.local`: 本地开发环境变量（不会提交到git）
- `.env.build`: 构建时使用的环境变量

根据需要修改这些文件。

### 3. 安装依赖

```bash
pnpm install
```

## 开发

### 启动所有服务

使用项目提供的脚本启动所有服务：

```bash
./start-services.sh
```

### 启动特定服务

也可以使用 PNPM 的 filter 功能只启动特定的应用或服务：

```bash
# 启动 Vue 应用
pnpm dev --filter=@smarts-isoftstone/vue-app

# 启动 React 应用
pnpm dev --filter=@smarts-isoftstone/react-app

# 启动 NestJS 服务
pnpm dev --filter=@smarts-isoftstone/nestjs-service
```

### 停止所有服务

停止所有正在运行的服务：

```bash
./stop-services.sh
```

## 构建

### 构建所有项目

```bash
pnpm build
```

### 构建特定项目

```bash
# 构建 Vue 应用
pnpm build --filter=@smarts-isoftstone/vue-app

# 构建 React 应用
pnpm build --filter=@smarts-isoftstone/react-app

# 构建 NestJS 服务
pnpm build --filter=@smarts-isoftstone/nestjs-service
```

### 清理构建产物

```bash
node clean.js
```

## 项目结构

FullStack Monorepo 的目录结构如下：

```
FullStack/
├── app/                    # 主应用目录
├── packages/               # 共享包目录
├── micro-frontend/         # 微前端应用
├── micro-service/          # 微服务应用
├── package-react/          # React 相关包
├── package-vue/            # Vue 相关包
├── package-nestjs/         # NestJS 相关包
├── docs/                   # 文档
├── docker-compose/         # Docker 配置
├── lint/                   # 代码规范配置
├── pnpm-workspace.yaml     # PNPM 工作区配置
├── nx.json                 # NX 配置
├── lerna.json              # Lerna 配置
├── package.json            # 项目配置
├── start-services.sh       # 启动服务脚本
└── stop-services.sh        # 停止服务脚本
```

更详细的目录结构，请参考[目录结构说明](/docs/directory-structure)。

## 开发流程

### 1. 创建分支

从主分支创建新的功能分支：

```bash
git checkout -b feature/your-feature
```

### 2. 开发

按照[开发规范](/docs/development-standards)进行开发。

### 3. 提交代码

使用 Conventional Commits 规范提交代码：

```bash
git add .
git commit -m "feat: add your feature"
```

### 4. 推送分支

```bash
git push origin feature/your-feature
```

### 5. 创建合并请求

在代码托管平台上创建合并请求（Pull Request 或 Merge Request）。

## 常用命令

### 创建新包

```bash
# 创建新的 NestJS 包
lerna create @smarts-isoftstone/[package-name] micro-service -y

# 创建新的 React 包
lerna create @smarts-isoftstone/[package-name] package-react -y

# 创建新的 Vue 包
lerna create @smarts-isoftstone/[package-name] package-vue -y
```

### 添加依赖

```bash
# 为特定包添加依赖
pnpm add [package] --filter @smarts-isoftstone/[package-name]

# 为多个包添加依赖
pnpm add [package] --filter @smarts-isoftstone/[package-name-1] --filter @smarts-isoftstone/[package-name-2]

# 添加开发依赖
pnpm add [package] -D --filter @smarts-isoftstone/[package-name]
```

### 运行脚本

```bash
# 运行特定包的脚本
pnpm --filter @smarts-isoftstone/[package-name] [script]

# 例如，运行测试
pnpm --filter @smarts-isoftstone/[package-name] test
```

## 常见问题

### 依赖安装失败

尝试清除缓存并重新安装：

```bash
pnpm store prune
pnpm install
```

### 构建失败

检查是否有编译错误：

```bash
pnpm build --verbose
```

### 启动服务失败

检查端口占用：

```bash
# Mac/Linux
lsof -i :[port]

# Windows
netstat -ano | findstr :[port]
```

## 下一步

- [架构设计](/docs/architecture) - 了解项目架构
- [目录结构](/docs/directory-structure) - 查看详细的目录结构说明
- [开发规范](/docs/development-standards) - 学习开发规范
- [部署方案](/docs/deployment) - 了解部署流程
