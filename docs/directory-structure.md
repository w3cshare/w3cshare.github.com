# 目录结构

## 项目根目录

```
w3cshare/w3cshare.github.io.git/
├── app/                    # 应用目录（业务项目）
├── packages/               # 共享包
├── packages-nestjs/        # nestjs 库
├── packages-react/         # react 组件/业务组件库
├── packages-vue/           # vue 组件/业务组件库
├── micro-frontend/         # 微前端配置
├── micro-service/          # 微服务配置
├── docs/                   # 文档
├── .vscode/                # VS Code 配置
├── .github/                # GitHub 配置
├── docker-compose/         # Docker 配置
├── lint/                   # eslint、prettier、stylelint 推荐包
└── package.json           # 项目配置
```

## 应用目录 (app/)

```
app/
├── vue-app/               # Vue 应用
│   ├── src/               # 源代码
│   │   ├── assets/        # 静态资源
│   │   ├── components/    # 组件
│   │   ├── views/         # 页面
│   │   ├── router/        # 路由
│   │   ├── store/         # 状态管理
│   │   ├── utils/         # 工具函数
│   │   └── App.vue        # 根组件
│   ├── public/            # 公共资源
│   └── package.json       # 应用配置
│
├── react-app/             # React 应用
│   ├── src/               # 源代码
│   │   ├── assets/        # 静态资源
│   │   ├── components/    # 组件
│   │   ├── pages/         # 页面
│   │   ├── routes/        # 路由
│   │   ├── store/         # 状态管理
│   │   ├── utils/         # 工具函数
│   │   └── App.tsx        # 根组件
│   ├── public/            # 公共资源
│   └── package.json       # 应用配置
│
└── nestjs-service/        # NestJS 服务
    ├── src/               # 源代码
    │   ├── modules/       # 业务模块
    │   ├── common/        # 公共模块
    │   ├── config/        # 配置文件
    │   ├── database/      # 数据库
    │   └── main.ts        # 入口文件
    └── package.json       # 服务配置
```

## 共享包目录 (packages/)

```
packages/
├── ui-components/         # UI 组件库
│   ├── src/               # 源代码
│   │   ├── components/    # 组件
│   │   ├── styles/        # 样式
│   │   └── index.ts       # 入口文件
│   └── package.json       # 包配置
│
├── utils/                 # 工具函数
│   ├── src/               # 源代码
│   │   ├── http/          # HTTP 工具
│   │   ├── storage/       # 存储工具
│   │   └── index.ts       # 入口文件
│   └── package.json       # 包配置
│
└── types/                 # 类型定义
    ├── src/               # 源代码
    │   ├── api/           # API 类型
    │   ├── models/        # 模型类型
    │   └── index.ts       # 入口文件
    └── package.json       # 包配置
```

## 微前端配置 (micro-frontend/)

```
micro-frontend/
├── container/             # 主应用
│   ├── src/               # 源代码
│   │   ├── apps/          # 子应用配置
│   │   └── index.ts       # 入口文件
│   └── package.json       # 应用配置
│
└── modules/               # 子应用
    ├── vue-module/        # Vue 子应用
    └── react-module/      # React 子应用
```

## 微服务配置 (micro-service/)

```
micro-service/
├── gateway/               # API 网关
│   ├── src/               # 源代码
│   │   ├── routes/        # 路由
│   │   └── index.ts       # 入口文件
│   └── package.json       # 服务配置
│
├── user-service/          # 用户服务
│   ├── src/               # 源代码
│   │   ├── controllers/   # 控制器
│   │   ├── services/      # 服务
│   │   └── index.ts       # 入口文件
│   └── package.json       # 服务配置
│
└── order-service/         # 订单服务
    ├── src/               # 源代码
    │   ├── controllers/   # 控制器
    │   ├── services/      # 服务
    │   └── index.ts       # 入口文件
    └── package.json       # 服务配置
```

## 文档目录 (docs/)

```
docs/
├── .vitepress/            # VitePress 配置
│   ├── config.mjs         # 配置文件
│   └── theme/             # 主题配置
│
├── guide/                 # 指南文档
│   ├── getting-started.md # 快速开始
│   ├── architecture.md    # 架构设计
│   └── directory-structure.md # 目录结构
│
├── api/                   # API 文档
│   ├── index.md           # API 概述
│   └── endpoints/         # 接口文档
│
└── index.md               # 首页
```

## 配置文件

### package.json

```json
{
  "name": "w3cshare/w3cshare.github.io.git",
  "version": "1.0.0",
  "private": true,
  "workspaces": ["app/*", "packages/*", "micro-frontend/*", "micro-service/*"],
  "scripts": {
    "dev": "pnpm -r dev",
    "build": "pnpm -r build",
    "test": "pnpm -r test",
    "lint": "pnpm -r lint"
  }
}
```

### pnpm-workspace.yaml

```yaml
packages:
  - 'app/*'
  - 'packages/*'
  - 'micro-frontend/*'
  - 'micro-service/*'
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "node",
    "strict": true,
    "jsx": "preserve",
    "sourceMap": true,
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

## 目录命名规范

1. **应用目录**

   - 使用小写字母
   - 多个单词用连字符分隔
   - 例如：`vue-app`, `react-app`

2. **包目录**

   - 使用小写字母
   - 多个单词用连字符分隔
   - 例如：`ui-components`, `utils`

3. **源代码目录**

   - 使用小写字母
   - 多个单词用连字符分隔
   - 例如：`src`, `components`

4. **配置文件**
   - 使用小写字母
   - 以点开头
   - 例如：`.gitignore`, `.eslintrc`

## 文件命名规范

1. **组件文件**

   - 使用 PascalCase
   - 例如：`UserProfile.vue`, `Button.tsx`

2. **工具文件**

   - 使用 camelCase
   - 例如：`httpClient.ts`, `utils.ts`

3. **样式文件**

   - 使用 kebab-case
   - 例如：`main-style.css`, `theme-variables.scss`

4. **配置文件**
   - 使用小写字母
   - 例如：`package.json`, `tsconfig.json`
