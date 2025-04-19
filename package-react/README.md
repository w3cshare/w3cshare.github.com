---
layout: home
title: React生态组件库
description: 企业级React组件系统，基于组件驱动开发(CDD)理念，支持多渲染目标的高性能React UI解决方案
head:
  - - meta
    - name: keywords
      content: React组件库,组件驱动开发,CDD,原子设计,Atomic Design,服务端渲染,SSR,状态管理,性能优化
  - - meta
    - name: author
      content: FullStack团队
  - - meta
    - name: copyright
      content: FullStack Monorepo项目
hero:
  name: React生态组件库
  text: 企业级组件驱动开发解决方案
  tagline: 基于原子设计的高性能、高可定制React UI体系
  image:
    src: /images/react-ecosystem.png
    alt: React生态系统
  actions:
    - theme: brand
      text: 快速开始
      link: /package-react/getting-started
    - theme: alt
      text: 组件文档
      link: /package-react/components/
    - theme: alt
      text: 设计规范
      link: /package-react/design
features:
  - icon: ⚛️
    title: 多渲染目标支持
    details: 支持CSR、SSR、SSG和ISR等多种渲染模式，兼容React 18+的Concurrent Mode和Suspense特性
  - icon: 🧩
    title: 原子设计组件系统
    details: 基于Atomic Design设计原则构建组件层级，从原子、分子、有机体到模板和页面的完整组件体系
  - icon: 🔄
    title: 高级状态管理
    details: 集成React Context、React Query、Zustand等多层次状态管理解决方案，适应不同复杂度的应用场景
  - icon: 📱
    title: 自适应与跨平台
    details: 支持响应式设计、主题定制，以及React Native与Web端组件代码共享，实现一次开发多端部署
---

# React生态组件库

> 基于组件驱动开发(CDD)理念打造的企业级React UI系统，提供从设计规范到实现的完整解决方案

本项目构建了一套全面的React组件生态系统，采用原子设计(Atomic Design)方法论组织组件结构，支持多种渲染模式和框架集成，为企业级应用提供高质量、高性能、高可维护的UI解决方案。

## 核心技术特性

- **组件驱动开发(CDD)**: 基于Storybook实现组件优先开发流程，实现设计、开发、测试和文档的紧密协作
- **自适应渲染策略**: 支持客户端渲染(CSR)、服务端渲染(SSR)、静态生成(SSG)和增量静态再生成(ISR)等多种渲染模式
- **Concurrent Mode支持**: 充分利用React 18的并发特性，如Suspense、useTransition和useDeferredValue，实现流畅的用户体验
- **主题系统与样式解决方案**: 基于CSS-in-JS(Emotion/Styled Components)和CSS变量构建可扩展的主题系统，支持暗黑模式和品牌定制
- **可访问性(A11y)优化**: 符合WCAG AA级标准，通过键盘导航、屏幕阅读器支持和高对比度模式增强应用可访问性
- **跨框架集成**: 支持与Next.js、Remix、Gatsby等React框架的无缝集成，以及部分组件的React Native适配

## 快速开始

### 安装

```bash
# 使用npm
npm install @fullstack/react-ui @fullstack/react-hooks @fullstack/react-utils

# 使用pnpm
pnpm add @fullstack/react-ui @fullstack/react-hooks @fullstack/react-utils
```

### 基本使用

```tsx
import { Button, Card, TextField } from '@fullstack/react-ui';
import { useForm } from '@fullstack/react-hooks';

function LoginForm() {
  const { values, handleChange, handleSubmit } = useForm({
    initialValues: { email: '', password: '' },
    onSubmit: values => console.log(values),
  });

  return (
    <Card elevation="md" padding="lg">
      <form onSubmit={handleSubmit}>
        <TextField
          label="邮箱"
          name="email"
          value={values.email}
          onChange={handleChange}
          required
        />
        <TextField
          label="密码"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          required
        />
        <Button variant="primary" type="submit">
          登录
        </Button>
      </form>
    </Card>
  );
}
```

## 组件架构图

```mermaid
graph TD
    A[React组件生态系统] --> B[基础层]
    A --> C[组件层]
    A --> D[模板层]
    A --> E[工具层]

    B --> B1[设计令牌]
    B --> B2[主题系统]
    B --> B3[布局原语]

    C --> C1[原子组件]
    C --> C2[分子组件]
    C --> C3[有机体组件]
    C --> C4[页面组件]

    C1 --> F1[Button]
    C1 --> F2[Input]
    C1 --> F3[Text]

    C2 --> G1[Form组件]
    C2 --> G2[Navigation组件]
    C2 --> G3[Feedback组件]

    C3 --> H1[DataDisplay]
    C3 --> H2[SearchPanel]
    C3 --> H3[Dashboard]

    D --> D1[管理后台模板]
    D --> D2[电商系统模板]
    D --> D3[数据可视化模板]

    E --> E1[Hooks库]
    E --> E2[状态管理]
    E --> E3[工具函数]
```

## 文档导航

- [快速开始](/package-react/getting-started)
- [组件指南](/package-react/components)
- [主题定制](/package-react/theming)
