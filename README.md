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

# Git Commit 规范配置

本项目使用了增强版的 Git Commit 规范配置，基于 `cz-git` 和 `commitlint` 实现，提供了更完善的提交信息规范和交互式提交体验。

## 主要特性

- 完整的提交类型定义，包含标准类型和扩展类型
- 自定义作用域列表，便于归类不同模块的变更
- 中文友好的交互式提交信息引导
- 严格的提交信息校验规则
- 支持表情符号（可选开启）
- 支持 GitEE 工作流（链接和关闭 Issues）

## 提交类型说明

| 类型 | 说明 | 描述 |
| --- | --- | --- |
| feat | 新功能 | 新增功能 \| A new feature |
| fix | 修复缺陷 | 修复Bug \| A bug fix |
| docs | 文档更新 | 文档更新 \| Documentation only changes |
| style | 代码格式 | 代码风格调整（不影响代码功能）\| Changes that do not affect the meaning of the code |
| refactor | 代码重构 | 代码重构（不包括 bug 修复或功能新增）\| A code change that neither fixes a bug nor adds a feature |
| perf | 性能优化 | 性能提升 \| A code change that improves performance |
| test | 测试相关 | 测试相关 \| Adding missing tests or correcting existing tests |
| build | 构建相关 | 构建系统或外部依赖更改 \| Changes that affect the build system or external dependencies |
| ci | 持续集成 | CI配置更改 \| Changes to our CI configuration files and scripts |
| chore | 其他修改 | 其他改动（不修改src或测试文件）\| Other changes that do not modify src or test files |
| revert | 回退代码 | 回滚之前的提交 \| Revert to a commit |
| ui | UI相关更改 | 用户界面相关更改 |
| wip | 开发中的工作 | 开发中的工作（Work In Progress） |
| api | API相关更改 | API接口相关变更 |
| i18n | 国际化相关 | 国际化与本地化相关更改 |

## 使用方法

1. 安装依赖：

```bash
pnpm add -D @commitlint/cli @commitlint/config-conventional cz-git
```

2. 使用交互式提交：

```bash
npx cz
# 或者
pnpm exec cz
```

3. 提交信息格式：

```
<类型>[可选 作用域]: <描述>

[可选 正文]

[可选 脚注]
```

## 配置文件说明

项目根目录下的 `.commitlintrc.js` 文件包含了完整的配置：

- 定义了提交类型列表
- 设置了作用域范围
- 配置了校验规则
- 自定义了交互式提交体验

## 最佳实践

- 提交描述应该简洁明了，描述"做了什么"而不是"怎么做的"
- 正文应该详细说明变更的原因、影响范围等
- 尽量使用作用域来归类变更
- 对于破坏性变更，必须在正文或脚注中清晰说明

这个规范有助于团队协作、自动化发布、变更日志生成等，请在开发过程中严格遵守。
