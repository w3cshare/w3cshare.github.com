---
layout: home
hero:
  name: 全栈开发文档
  text: 基于 Monorepo 的全栈开发项目
  tagline: 一个现代化的全栈开发解决方案
  actions:
    - theme: brand
      text: 快速开始
      link: ./docs/getting-started
    - theme: alt
      text: 查看文档
      link: ./docs/architecture
features:
  - icon: 🚀
    title: 微前端架构
    details: 支持 Web Components、SPA 和 MPA，使用 Ant Design Vue、Ant Design React、Pure 等组件库
  - icon: 🔧
    title: 微服务架构
    details: 基于 NestJS、gRPC 和 Consul，使用 TypeORM/Sequelize 作为 ORM，RBAC + CASL
  - icon: 🤖
    title: AI 技术集成
    details: 基于 LangChain + NestJS + Milvus + 构建的 AI Agent
  - icon: ⛓️
    title: 区块链支持
    details: 基于 WEB3.0，集成以太坊相关功能
  - icon: 🛠️
    title: 现代化工具链
    details: 使用 Verdaccio、Gitlab、Jenkins、pnpm、Vite、Webpack、Docker Compose 等工具
  - icon: 📦
    title: 类型安全
    details: 全栈开发均使用 TypeScript，确保类型安全
---

### &nbsp;

# 全栈开发文档

> 基于 Lerna + Nx + pnpm + Workspace 的 Monorepo 全栈开发项目

## 项目概述

这是一个基于 Monorepo 架构的全栈开发项目，集成了前端、后端、移动端、AI、区块链等多种技术栈。本项目采用 Lerna + Nx + pnpm Workspace 的组合方案，实现了高效的包管理、构建流程和版本控制。

## 技术栈

- **前端框架**：Vue, React, Angular, Pure JS
- **后端框架**：NestJS, gRPC, Passport, TypeORM
- **移动端**：UniAppX, React Native, Flutter, Kotlin, Swift
- **AI**：LangChain, LlamaIndex, TensorFlow, PyTorch
- **区块链**：Web3.js, ethers.js
- **微前端**：基于Micro App/Single-SPA/Module Federation的微前端架构
- **微服务**：基于gRPC的微服务架构
- **DevOps**：Docker, GitHub Actions, CI/CD

## 目录结构

```
FullStack/
├── apps/                 # 应用项目目录
├── apps-python/          # Python应用目录
├── apps-native/          # 原生应用目录
├── lib-vue/              # Vue组件库目录
├── lib-react/            # React组件库目录
├── lib-nest/             # Nest.js包目录
├── lib-cli/              # CLI工具目录
├── lib-lint/             # 代码规范工具目录
├── libs/                 # 通用模块目录
├── micro-frontend/       # 微前端项目目录
├── micro-service/        # 微服务项目目录
├── packages/             # 公共包目录
└── docs/                 # 文档目录
```

## 快速开始

### 环境准备

- Node.js >= 16
- pnpm >= 7.0.0
- Git

### 克隆项目

```bash
git clone https://github.com/w3cshare/w3cshare.github.io.git FullStack
cd FullStack
```

### 安装依赖

```bash
# 安装全局pnpm（如果尚未安装）
npm install -g pnpm

# 安装项目依赖
pnpm install
```

### 开发命令

```bash
# 启动开发服务
pnpm dev

# 构建项目
pnpm build

# 运行测试
pnpm test

# 检查代码规范
pnpm lint
pnpm lint:json
pnpm format
pnpm stylelint
```

## 文档导航

- [快速开始](/docs/getting-started)
- [架构设计](/docs/architecture)
- [目录结构](/docs/directory-structure)
- [开发规范](/docs/development-standards)
- [部署方案](/docs/deployment)
- [PNPM 指南](/docs/pnpm-workspace-guide)
- [Monorepo指南](/docs/monorepo-guide)
- [Lerna+Nx指南](/docs/lerna-nx-guide)

## 项目板块

### 应用项目

- [Google Tab 首页](/apps/google-tab-home/)
- [VSCode 低代码平台](/apps/vscode-lowcode/)
- [融合门户Web](/apps/ismart-swbn-converged-web/)

### 组件库

- [Vue 组件库](/lib-vue/)
- [React 组件库](/lib-react/)
- [ArtTs 业务组件库](/packages/artts-ui-lib/)
- [UniApp-X 业务组件库](/packages/uniapp-x-lib/)

### 微应用

- [微前端项目](/micro-frontend/)
- [微服务项目](/micro-service/)

### 工具与规范

- [CLI工具](/lib-cli/)
- [代码规范](/lib-lint/)
- [API库](/lib-nest/)

### Python应用

- [印章识别](/apps-python/ocr-vlm/)
- [PDF压缩](/apps-python/pdf-compressed/)
- [Markdown转PDF](/apps-python/md-pdf/)

## 贡献指南

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交你的变更 (`git commit -m 'feat: add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启一个 Pull Request

## 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE.md](LICENSE.md) 文件

## 联系方式

- **作者**：阿伟
- **邮箱**：wwdqq7@qq.com
- **GitHub**：[https://github.com/w3cshare](https://github.com/w3cshare)
