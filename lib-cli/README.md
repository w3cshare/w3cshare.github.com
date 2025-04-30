---
layout: home
title: 工程化CLI与脚手架系统
description: 基于Node.js的企业级工程化工具集，提供代码生成、类型转换、项目初始化等全流程支持
head:
  - - meta
    - name: keywords
      content: CLI,工程化,脚手架,Swagger,Protobuf,Git工作流,模板引擎,代码生成器
  - - meta
    - name: author
      content: FullStack团队
  - - meta
    - name: copyright
      content: FullStack Monorepo项目
hero:
  name: 企业级工程化工具链
  text: 一站式研发效能提升解决方案
  tagline: 覆盖从项目创建、API集成到构建部署的全流程工具集
  image:
    src: /images/cli-hero.png
    alt: 工程化工具链
  actions:
    - theme: brand
      text: 工具总览
      link: ./docs/overview
    - theme: alt
      text: 快速上手
      link: ./docs/getting-started
    - theme: alt
      text: 插件开发
      link: ./docs/plugin-development
features:
  - icon: 🏗️
    title: 智能代码生成器
    details: 基于AST的代码生成引擎，支持从Swagger、GraphQL Schema、数据库模型生成TypeScript代码
  - icon: 🔄
    title: 高级Git工作流
    details: 集成Conventional Commits、分支管理、自动化发布流程的Git工作流解决方案
  - icon: 📦
    title: TypeScript和类型转换相关工具
    details: Swagger to TypeScript或者Protobuf到TypeScript的转换等工具
  - icon: 🚀
    title: Git相关工具
    details: 代码提交、代码合并、代码回滚等Git相关工具操作
  - icon: 🔋
    title: Git Commit Lint相关工具
    details: 代码提交规范、代码提交信息格式化等工具
  - icon: 🔨
    title: Project Template Init初始化相关工具
    details: 初始化相关业务工程模板
  - icon: 🔨
    title: NPX Init工具
    details: NPX Init相关在线工具创建
---

# 脚手架系统

CLI工具是一个基于Node.js的现代化CLI工具集合，提供了丰富的功能和开发工具，包括类型转换、Git操作、提交规范、项目初始化等功能。

## 核心特性

- **类型转换**：支持Swagger、Protobuf到TypeScript的转换
- **Git工具**：提供Git操作相关的便捷工具
- **提交规范**：支持Git提交规范检查和格式化
- **项目模板**：提供多种项目初始化模板
- **NPX工具**：支持NPX在线工具创建
- **开发体验**：提供完整的开发工具链

## 快速开始

1. 安装依赖

```bash
cd cli
pnpm install
```

2. 使用CLI工具

```bash
pnpm cli:help
```

## 项目结构

```mermaid
graph TD
    A[CLI工具] --> B[类型转换]
    A --> C[Git工具]
    A --> D[提交规范]
    A --> E[项目模板]
    A --> F[NPX工具]

    B --> B1[Swagger转换]
    B --> B2[Protobuf转换]

    C --> C1[提交工具]
    C --> C2[合并工具]
    C --> C3[回滚工具]

    D --> D1[Commit Lint]
    D --> D2[Commit Format]

    E --> E1[前端模板]
    E --> E2[后端模板]
    E --> E3[全栈模板]

    F --> F1[在线工具]
    F --> F2[本地工具]
```

## 文档导航

- [快速开始](/cli/docs/getting-started)
- [命令文档](/cli/docs/commands)
- [工具使用](/cli/docs/tools)
- [模板说明](/cli/docs/templates)
