---
layout: home
title: 微前端架构解决方案
description: 企业级微前端架构体系，支持多框架共存、独立部署的前端应用解耦方案，包含MicroApp、qiankun等实现
head:
  - - meta
    - name: keywords
      content: 微前端,MicroApp,qiankun,Web Components,应用隔离,独立部署,路由分发
  - - meta
    - name: author
      content: FullStack团队
  - - meta
    - name: copyright
      content: FullStack Monorepo项目
hero:
  name: 企业级微前端架构
  text: 支持Vue、React、Angular多框架技术栈融合
  tagline: 解决大型前端应用的技术栈隔离与独立部署问题
  image:
    src: /images/micro-frontend-hero.png
    alt: 微前端架构
  actions:
    - theme: brand
      text: 架构概览
      link: /micro-frontend/architecture
    - theme: alt
      text: 快速开始
      link: /micro-frontend/getting-started
    - theme: alt
      text: 最佳实践
      link: /micro-frontend/best-practices
features:
  - icon: 🧩
    title: 多框架无缝集成
    details: 支持Vue、React、Angular等多种框架共存，实现技术栈自由迁移与渐进式重构
  - icon: 🔄
    title: 独立开发与部署
    details: 微应用完全解耦，支持独立CI/CD流程，提高团队并行开发效率
  - icon: 🛡️
    title: JavaScript沙箱隔离
    details: 采用代理(Proxy)与快照(Snapshot)双重隔离机制，确保应用间资源互不干扰
  - icon: 🧪
    title: 交互式研发工作台
    details: 集成可视化辅助编程(VAP)与AI辅助开发工具，提升微前端应用的开发效率
---

# &nbsp;

# 微前端架构模板

微前端（Micro-Frontends）是一种前端架构模式，将前端应用解耦为多个自治的微应用，每个微应用可独立开发、测试和部署。本目录集成了多种微前端实现方案和前端框架模板，包括基于Web Components的MicroApp、React、Vue、Angular等，并提供了工程化研发工作台支持。

## 核心特性

- **技术栈无关性**：支持Vue、React、Angular等多种框架共存，实现技术栈自由选择
- **独立部署与CI/CD**：每个微应用可独立构建与发布，支持灰度发布与A/B测试
- **沙箱隔离**：通过JavaScript沙箱和样式隔离确保微应用间不相互影响
- **预加载与懒加载**：支持应用按需/预加载策略，优化首屏体验
- **状态管理隔离**：微应用间状态管理独立，支持跨应用通信机制
- **研发工作台**：集成VAP（Visual Assisted Programming）可视化辅助编程工具链

## 快速开始

1. 安装依赖

```bash
cd micro-frontend
pnpm install
```

2. 启动开发服务器

```bash
pnpm dev
```

## 架构设计

```mermaid
graph TD
    A[微前端架构] --> B[基座应用]
    A --> C[微应用]
    A --> D[研发工具链]

    B --> B1[Vue基座]
    B --> B2[React基座]
    B --> B3[路由管理]
    B --> B4[应用注册中心]

    C --> C1[Vue微应用]
    C --> C2[React微应用]
    C --> C3[Angular微应用]
    C --> C4[Web Components]

    D --> D1[VAP工作台]
    D --> D2[AI辅助开发]
    D --> D3[Web3集成]

    B3 --> B31[路由分发]
    B3 --> B32[路由守卫]

    B4 --> B41[应用注册]
    B4 --> B42[应用管理]
```

## 文档导航

- [快速开始](/micro-frontend/getting-started)
- [架构设计](/micro-frontend/architecture)
