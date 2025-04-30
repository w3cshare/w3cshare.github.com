---
layout: home
title: 后端框架扩展体系
description: 企业级后端框架扩展集合，包含NestJS、Koa、Express、Fastify等框架的中间件、模块与插件体系
head:
  - - meta
    - name: keywords
      content: NestJS,Express,Koa,Fastify,中间件,拦截器,守卫,插件,ORM扩展,微服务组件
  - - meta
    - name: author
      content: FullStack团队
  - - meta
    - name: copyright
      content: FullStack Monorepo项目
hero:
  name: 企业级后端框架生态
  text: 构建高性能、可扩展的Node.js后端服务
  tagline: NestJS、Express、Koa、Fastify等框架的增强组件
  image:
    src: /images/backend-hero.png
    alt: 后端框架扩展
  actions:
    - theme: brand
      text: 组件概览
      link: /package-nest/docs/overview
    - theme: alt
      text: 项目结构
      link: /package-nest/docs/overview
features:
  - icon: 🏗️
    title: NestJS企业级扩展
    details: 包含拦截器、守卫、管道、装饰器等全方位NestJS扩展，提供AOP面向切面编程能力
  - icon: 💾
    title: ORM层增强组件
    details: 针对TypeORM、Sequelize、Prisma等ORM的增强组件，提供数据访问层抽象与性能优化
  - icon: 🔄
    title: 中间件与过滤器
    details: 丰富的Express、Koa中间件生态，包含日志、认证、限流、缓存等关键功能组件
  - icon: 🛠️
    title: 微服务组件库
    details: 适配gRPC、TCP、Redis、MQTT等多种传输层的微服务通信组件，简化分布式系统构建
---

# &nbsp;

# Service 公用扩展支持

后端服务框架拓展是一个基于NestJS、Koa、Express等后端框架的插件、中间件和模块集合，提供了丰富的功能拓展和开发工具。

## 核心特性

- **插件丰富**：提供丰富的后端框架插件
- **中间件支持**：提供各种实用中间件
- **模块化设计**：支持模块化开发和复用
- **多框架支持**：支持NestJS、Koa、Express等多种框架
- **TypeScript**：完整的TypeScript支持
- **可扩展性**：支持自定义扩展和定制

## 快速开始

1. 安装依赖

```bash
cd package-nest
pnpm install
```

2. 启动开发服务器

```bash
pnpm dev
```

## 项目结构

```mermaid
graph TD
    A[后端框架拓展] --> B[NestJS]
    A --> C[Koa]
    A --> D[Express]
    A --> E[Fastify]
    A --> F[EggJS]

    B --> B1[插件]
    B --> B2[中间件]
    B --> B3[模块]

    C --> C1[中间件]
    C --> C2[插件]

    D --> D1[中间件]
    D --> D2[路由]

    E --> E1[插件]
    E --> E2[钩子]

    F --> F1[插件]
    F --> F2[中间件]
```

## 文档导航

- [组件概览](/package-nest/overview)
