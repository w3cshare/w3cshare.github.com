---
layout: home
title: 业务应用
description: Monorepo下的业务应用集合，涵盖Web、移动端、桌面端、浏览器插件等多平台应用程序
head:
  - - meta
    - name: keywords
      content: 业务应用,Web应用,移动端,小程序,浏览器插件,VS Code插件,企业级应用,SaaS应用
  - - meta
    - name: author
      content: FullStack团队
  - - meta
    - name: copyright
      content: FullStack Monorepo项目
hero:
  name: 项目汇总
  text: 企业级项目产品级实现
  tagline: 从Web到移动端、从插件到桌面应用的全方位交付
  image:
    src: /images/app-platform.png
    alt: 应用开发平台
  actions:
    - theme: brand
      text: 应用概览
      link: ./docs/overview
features:
  - icon: 🖥️
    title: 中后台项目
    details: 基于React和Vue的管理系统、数据中台、业务中台等企业级SaaS应用完整实现
  - icon: 📱
    title: 移动端项目
    details: 覆盖原生App、小程序、H5等全渠道的移动端应用，支持线上线下全场景业务
  - icon: 🧩
    title: 浏览器与IDE插件
    details: 为Chrome、Firefox、VS Code等平台提供的生产力增强型插件，提升开发和使用体验
  - icon: 🔌
    title: 低代码开发引擎
    details: 集成可视化页面设计器、表单构建器、工作流引擎和业务规则引擎，实现复杂业务逻辑的低代码配置
  - icon: 🛡️
    title: 企业级权限安全
    details: 基于RBAC/ABAC的细粒度权限控制，支持OAuth2/OIDC/SAML联合认证与SSO单点登录，满足企业合规要求
  - icon: 🔄
    title: 全生命周期DevOps
    details: 内置CI/CD流水线集成、自动化测试框架与环境管理，实现从开发到部署的端到端自动化
---

# 全栈项目汇总

> 加速数字化业务交付的全栈技术平台

本平台提供完整的企业级应用开发解决方案，集成前端、后端、DevOps等全链路技术能力，为业务系统开发提供标准化、模块化和自动化的工程实践支持，大幅提升研发效能和产品质量。

## 核心能力

- **项目丰富**：提供丰富的业务项目案例
- **移动端支持**：支持iOS、Android、小程序等移动端开发
- **插件应用**：支持浏览器插件、编辑器插件等开发
- **完整业务**：包含前后端完整业务实现
- **TypeScript**：完整的TypeScript支持
- **上线项目**：包含实际上线的业务项目

## 快速开始

1. 安装依赖

```bash
# 安装开发工具链
pnpm app:install

# 创建新项目（交互式选择技术栈与模板）
pnpm app:create my-enterprise-app

# 进入项目目录并启动开发服务
cd my-enterprise-app
pnpm dev
```

### 前端应用配置示例

```typescript
// 应用配置示例 (app.config.ts)
export default {
  // 应用基础配置
  app: {
    name: '企业级应用示例',
    logo: '/assets/logo.svg',
    theme: {
      primaryColor: '#1677ff',
      layout: 'side', // 'side' | 'top' | 'mix'
      contentWidth: 'fixed', // 'fluid' | 'fixed'
    },
  },

  // 多租户配置
  tenancy: {
    mode: 'multi', // 'multi' | 'single'
    isolationStrategy: 'schema', // 'database' | 'schema' | 'table'
    tenantIdField: 'tenant_id',
    defaultTenant: 'master',
  },

  // 权限配置
  auth: {
    type: 'oauth2',
    endpoint: '/api/auth',
    clientId: 'web-client',
    scope: 'openid profile email',
    autoRefreshToken: true,
    permission: {
      mode: 'rbac', // 'rbac' | 'abac' | 'hybrid'
      defaultRoute: '/dashboard',
    },
  },

  // API配置
  api: {
    baseUrl: '/api',
    timeout: 10000,
    retryTimes: 3,
    mockEnabled: process.env.NODE_ENV === 'development',
    errorHandler: {
      default: true,
      custom: error => {
        // 自定义错误处理逻辑
      },
    },
  },

  // 模块配置
  modules: [
    { name: 'dashboard', enabled: true },
    { name: 'user-management', enabled: true },
    { name: 'workflow', enabled: true },
    { name: 'report', enabled: true },
  ],
}
```

## 平台架构图

```mermaid
graph TD
    A[业务项目] --> B[前端项目]
    A --> C[后端项目]
    A --> D[移动端项目]
    A --> E[插件应用]

    B --> B1[门户网站]
    B --> B2[后台管理]
    B --> B3[商城前端]

    C --> C1[API服务]
    C --> C2[商城后端]
    C --> C3[用户中心]

    D --> D1[iOS应用]
    D --> D2[Android应用]
    D --> D3[小程序]
    D --> D4[Flutter应用]

    E --> E1[Google插件]
    E --> E2[VS Code插件]
```

## 核心模块

- **多租户管理**：租户创建、配置、资源分配与隔离策略管理
- **用户身份与权限**：用户管理、角色授权、数据权限、API权限控制
- **低代码开发**：可视化设计器、表单引擎、模板引擎、工作流引擎
- **数据管理**：主数据管理、数据集成、数据建模、数据治理
- **业务流程**：BPM流程设计、任务管理、流程监控、审批中心
- **报表分析**：即席查询、数据可视化、仪表盘、数据导出
- **系统管理**：菜单配置、参数设置、操作日志、系统监控
