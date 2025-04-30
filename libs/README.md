---
layout: home
title: 共享库与通用工具集
description: Monorepo下的跨项目共享库和通用工具函数集合，包含前端插件、工具函数、数据结构实现等
head:
  - - meta
    - name: keywords
      content: 共享库,工具函数,Hooks,数据结构,算法,UmiJS,Vite,Webpack,移动端库
  - - meta
    - name: author
      content: FullStack团队
  - - meta
    - name: copyright
      content: FullStack Monorepo项目
hero:
  name: 企业级共享库体系
  text: 高质量、类型安全的共享组件与工具集
  tagline: 跨项目复用的基础架构组件与业务抽象
  image:
    src: /images/packages-hero.png
    alt: 共享库
  actions:
    - theme: brand
      text: 工具指南
      link: ./docs/overview
    - theme: alt
      text: API文档
      link: ./docs/api
features:
  - icon: 📦
    title: 移动端相关库
    details: UniAppX、Android Kotlin、iOS Swift、Flutter、ArtTs等移动端业务组件库
  - icon: 🚀
    title: 前端插件库
    details: UmiJS插件、Vite插件、Nuxt插件、Next插件等前端工具插件
  - icon: 🔨
    title: 工具库
    details: 通用工具函数、数据结构、算法等公共库
---

### &nbsp;

# 共享库和通用组件

共享库和通用组件是一个基于Monorepo的现代化共享库集合，提供了丰富的功能和开发工具，包括前端插件、后端插件、移动端组件和通用工具库。

## 核心特性

- **库丰富**：提供丰富的共享库和组件
- **跨平台**：支持Web、移动端等多平台
- **插件系统**：提供各种主流框架的插件
- **类型安全**：完整的TypeScript支持
- **按需引入**：支持按需引入和Tree Shaking
- **文档完善**：详细的API文档和使用示例

## 快速开始

1. 安装依赖

```bash
cd packages
pnpm install
```

2. 启动开发服务器

```bash
pnpm dev
```

## 项目结构

```mermaid
graph TD
    A[共享库] --> B[移动端库]
    A --> C[前端插件]
    A --> D[后端插件]
    A --> E[工具库]

    B --> B1[UniAppX库]
    B --> B2[Flutter库]
    B --> B3[Android库]
    B --> B4[iOS库]
    B --> B5[ArtTs库]

    C --> C1[UmiJS插件]
    C --> C2[Vite插件]
    C --> C3[Nuxt插件]
    C --> C4[Next插件]

    D --> D1[Express中间件]
    D --> D2[Koa中间件]
    D --> D3[Fastify插件]

    E --> E1[工具函数]
    E --> E2[数据结构]
    E --> E3[算法库]
```

## 文档导航

- [工具指南](./docs/overview)
- [API参考](./docs/api)
