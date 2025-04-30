---
layout: home
title: Vue企业级组件生态系统
description: 基于Vue.js的企业级组件库体系，支持Vue 2.x与Vue 3.x，包含Element UI、Ant Design Vue、UniApp等多端适配方案
head:
  - - meta
    - name: keywords
      content: Vue组件库,Element UI,Ant Design Vue,UniApp,组件设计系统,Composition API,Options API,SSR,VitePress
  - - meta
    - name: author
      content: FullStack团队
  - - meta
    - name: copyright
      content: FullStack Monorepo项目
hero:
  name: Vue企业级组件体系
  text: 支持Vue 2.x与Vue 3.x的现代组件设计系统
  tagline: 整合Element UI、Ant Design Vue、UniApp的跨端组件解决方案
  image:
    src: /images/vue-hero.png
    alt: Vue组件库
  actions:
    - theme: brand
      text: 快速开始
      link: ./getting-started
    - theme: alt
      text: 组件文档
      link: ./components
    - theme: alt
      text: 设计规范
      link: ./design
features:
  - icon: 🧩
    title: Element UI专业扩展
    details: 基于Element UI的高阶组件与业务模式封装，提供企业级数据管理界面解决方案
  - icon: ⚡️
    title: Ant Design Vue增强套件
    details: Ant Design Vue组件库的扩展与优化，提供更丰富的数据可视化与业务组件
  - icon: 📱
    title: UniApp跨端框架
    details: 一套代码，多端统一，支持H5、小程序、App的全场景组件体系
  - icon: 🔍
    title: SEO友好型组件
    details: 针对内容密集型网站的轻量级SEO组件，支持SSR/SSG渲染优化
---

### &nbsp;

# Vue 组件生态体系

本仓库提供基于Vue.js生态的企业级组件库集合，遵循组件设计系统（Design System）规范，支持Vue 2.x与Vue 3.x两套技术栈。涵盖Element UI、Ant Design Vue、UniApp多端适配等多个领域的组件体系，提供丰富的业务组件和原子组件。

## 核心特性

- **双版本兼容性**：基于Composition API与Options API双模态实现，支持Vue 2.x与Vue 3.x
- **TypeScript类型系统**：100%使用TypeScript开发，提供完整的类型定义和IDE智能提示
- **组件设计系统**：遵循Atomic Design原则，从原子组件到复合组件的分层设计
- **多端适配方案**：通过UniApp实现移动端、小程序、H5的统一开发
- **SSR/SSG优化**：针对服务端渲染和静态站点生成的SEO优化组件
- **主题定制系统**：基于CSS变量和Sass/Less的动态主题切换方案

## 组件体系

1. **Element UI体系**

   - 企业管理后台组件库
   - 数据可视化组件
   - 表单复合组件

2. **Ant Design Vue体系**

   - Pro Components组件
   - 业务中台组件
   - 数据大屏组件

3. **UniApp生态**

   - 移动端原子组件
   - 小程序适配组件
   - 跨端表单组件

4. **Pure SEO组件**
   - SSR优化组件
   - 轻量级门户组件
   - 性能优先组件

## 快速开始

1. 安装依赖

```bash
cd package-vue
pnpm install
```

2. 启动组件开发环境

```bash
pnpm dev
```

## 组件架构

```mermaid
graph TD
    A[Vue组件体系] --> B[基础架构层]
    A --> C[业务抽象层]
    A --> D[场景适配层]
    A --> E[跨端适配层]

    B --> B1[原子组件]
    B --> B2[模式组件]
    B --> B3[布局组件]

    C --> C1[Element UI扩展]
    C --> C2[Ant Design Vue扩展]
    C --> C3[通用业务组件]

    D --> D1[管理后台]
    D --> D2[数据大屏]
    D --> D3[业务中台]
    D --> D4[企业门户]

    E --> E1[H5组件]
    E --> E2[小程序组件]
    E --> E3[App组件]

    B1 --> B11[按钮]
    B1 --> B12[输入框]
    B1 --> B13[图标]

    C1 --> C11[高级表单]
    C1 --> C12[高级表格]
    C1 --> C13[高级图表]
```

## 文档导航

- [快速开始](/package-vue/getting-started)
- [组件指南](/package-vue/components)
- [主题定制](/package-vue/theming)
