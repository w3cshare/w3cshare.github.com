---
layout: home
title: 企业级代码规范与质量体系
description: 集成ESLint、Prettier、Stylelint、Commitlint的前端工程化规范解决方案
head:
  - - meta
    - name: keywords
      content: ESLint,Prettier,Stylelint,Commitlint,代码规范,代码质量,静态分析,CI/CD集成
  - - meta
    - name: author
      content: FullStack团队
  - - meta
    - name: copyright
      content: FullStack Monorepo项目
hero:
  name: 工程化代码质量体系
  text: 统一的企业级代码规范与质量控制方案
  tagline: 覆盖前后端全栈的代码风格检查、质量管控与提交规范
  image:
    src: /images/lint-hero.png
    alt: 代码规范
  actions:
    - theme: brand
      text: 快速开始
      link: /lint/docs/getting-started
    - theme: alt
      text: 规范总览
      link: /lint/docs/overview
    - theme: alt
      text: 最佳实践
      link: /lint/docs/best-practices
    - theme: alt
      text: 常见问题
      link: /lint/docs/troubleshooting
features:
  - icon: ✨
    title: ESLint与TypeScript增强
    details: 针对JavaScript、TypeScript、Vue、React等不同技术栈的专业化规则集，支持静态类型检查与语法校验
  - icon: 🎨
    title: Prettier代码风格统一
    details: 通过一致的代码格式化规则，确保团队代码风格统一，减少代码审查中的格式讨论
  - icon: 🎭
    title: Stylelint样式规范
    details: 针对CSS、Sass、Less等样式语言的规范体系，确保样式代码质量与一致性
  - icon: 📊
    title: 工程化自动化集成
    details: 与Husky、lint-staged、CI/CD管道无缝集成，确保规范在整个开发流程中的执行
---

# 代码规范、质量检测、代码风格、提交规范等统一管理

代码规范是一个基于ESLint、Prettier、Stylelint等工具的现代化代码规范解决方案，提供了完整的代码质量检测、代码风格统一和提交规范管理。

## 核心特性

- **代码质量**：基于ESLint的代码质量检查
- **代码风格**：基于Prettier的代码格式化
- **样式规范**：基于Stylelint的样式规范
- **提交规范**：基于Commitlint的提交规范
- **工具集成**：提供Vite、Webpack等构建工具的插件
- **配置共享**：支持团队间共享配置

## 快速开始

1. 安装依赖

```bash
cd lint
pnpm install
```

2. 配置规范

```bash
pnpm lint:init
```

## 项目结构

```mermaid
graph TD
    A[代码规范] --> B[ESLint]
    A --> C[Prettier]
    A --> D[Stylelint]
    A --> E[Commitlint]
    A --> F[工具插件]

    B --> B1[基础规则]
    B --> B2[React规则]
    B --> B3[Vue规则]
    B --> B4[TypeScript规则]

    C --> C1[基础配置]
    C --> C2[自定义配置]

    D --> D1[CSS规则]
    D --> D2[SCSS规则]
    D --> D3[Less规则]

    E --> E1[基础规则]
    E --> E2[自定义规则]
    E --> E3[提交消息正文]
    E --> E4[提交消息主题]
    E --> E5[作用域规范]

    F --> F1[Vite插件]
    F --> F2[Webpack插件]
```

## 文档导航

- [规范总览](/lint/docs/overview)
- [快速开始](/lint/docs/getting-started)
- [最佳实践](/lint/docs/best-practices)
- [常见问题与故障排除](/lint/docs/troubleshooting)

### 子项目文档

- [ESLint 插件](/lint/eslint-plugin-smart/README.md)
  - [快速开始](/lint/eslint-plugin-smart/docs/快速开始)
  - [规则说明](/lint/eslint-plugin-smart/docs/规则说明)
  - [配置指南](/lint/eslint-plugin-smart/docs/配置指南)
  - [常见问题](/lint/eslint-plugin-smart/docs/常见问题)
- [Prettier 插件](/lint/prettier-plugin-smarts/README.md)
  - [开始使用](/lint/prettier-plugin-smarts/docs/开始使用)
  - [TypeScript支持](/lint/prettier-plugin-smarts/docs/TypeScript支持)
  - [JSON自动排序](/lint/prettier-plugin-smarts/docs/JSON自动排序)
- [Stylelint 配置](/lint/stylelint-config-smarts/README.md)
  - [开始使用](/lint/stylelint-config-smarts/docs/开始使用)
  - [Less支持](/lint/stylelint-config-smarts/docs/Less支持)
  - [Vue框架支持](/lint/stylelint-config-smarts/docs/Vue框架支持)
- [Commitlint 规范](/lint/commitlint-smarts/README.md)
  - [快速开始](/lint/commitlint-smarts/docs/quickstart)
  - [提交类型指南](/lint/commitlint-smarts/docs/types)
  - [提交消息正文指南](/lint/commitlint-smarts/docs/body)
  - [作用域规范](/lint/commitlint-smarts/docs/scopes)
  - [主题行规范](/lint/commitlint-smarts/docs/subject)
