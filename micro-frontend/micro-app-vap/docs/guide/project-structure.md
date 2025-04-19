# 项目结构

本文档详细介绍了 Micro App VAP 项目的目录结构和各个部分的功能。

## 目录结构

```bash
micro-app-vap/
├── config/              # 项目配置文件
│   ├── vite/           # Vite 相关配置
│   └── theme/          # 主题配置
├── mock/               # 模拟数据
├── public/             # 静态资源
├── src/                # 源代码
│   ├── assets/         # 资源文件
│   ├── components/     # 公共组件
│   ├── layouts/        # 布局组件
│   ├── pages/          # 页面组件
│   ├── router/         # 路由配置
│   ├── stores/         # Pinia 状态管理
│   ├── styles/         # 全局样式
│   ├── utils/          # 工具函数
│   └── App.vue         # 根组件
├── tests/              # 测试文件
├── types/              # TypeScript 类型定义
├── .env.*              # 环境变量配置
├── tsconfig.json       # TypeScript 配置
├── vite.config.ts      # Vite 配置
└── package.json        # 项目依赖
```

## 目录说明

### config/
配置文件目录，包含项目的各种配置信息：
- `vite/`: Vite 构建工具的配置文件
- `theme/`: 项目主题相关的配置

### mock/
模拟数据目录，用于开发环境下模拟接口返回数据。

### public/
静态资源目录，存放不需要经过构建工具处理的文件。

### src/
源代码目录，包含项目的主要代码：

#### assets/
存放项目资源文件，如图片、字体等。

#### components/
公共组件目录，存放可复用的 Vue 组件。

#### layouts/
布局组件目录，定义页面的整体布局结构。

#### pages/
页面组件目录，按功能模块组织的页面级组件。

#### router/
路由配置目录，定义应用的路由规则。

#### stores/
Pinia 状态管理目录，包含全局状态管理相关代码。

#### styles/
全局样式目录，包含全局 CSS 样式定义。

#### utils/
工具函数目录，存放通用的工具函数和方法。

### tests/
测试文件目录，包含单元测试和集成测试代码。

### types/
TypeScript 类型定义目录，存放全局类型声明文件。

## 配置文件

### .env.*
环境变量配置文件：
- `.env.development`: 开发环境配置
- `.env.production`: 生产环境配置

### tsconfig.json
TypeScript 配置文件，定义编译选项和项目设置。

### vite.config.ts
Vite 构建工具的配置文件，定义构建和开发服务器配置。

### package.json
项目依赖配置文件，定义项目的依赖包和脚本命令。 