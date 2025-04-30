# 目录结构

## 项目根目录

```
FullStack/
├── packages/               # 原生组件for鸿蒙纯血OS和uniXOS
│   ├── uniapp-x-lib/       # uniapp-x-lib
│   └── artts-ui-lib/       # artts-ui-lib
├── micro-service/          # 企业级微服务架构平台
│   ├── tcp-main/           # development
│   ├── tcp-client/         # development
│   ├── nest-template/      # NestJS 团队项目模板
│   ├── langchain/
│   ├── grpc-user/          # 微服务-用户服务
│   ├── grpc-python/        # micro-grpc-python
│   ├── grpc-main/          # development
│   ├── grpc-java/          # micro-grpc-java
│   ├── grpc-go/            # micro-grpc-go
│   ├── grpc-gateway/       # 运行ESLint检查
│   ├── grpc-client/        # development
│   └── docs/               # docs
├── micro-frontend/         # 微前端架构模板
│   ├── vue-template/       # vue工程模板 for `@smarts-isoftstone/vue-template`
│   ├── react-template/     # react工程模板 for `@smarts-isoftstone/react-template`
│   ├── micro-app-x/        # micro-app-x for React + TypeScript + Vite
│   ├── micro-app-web3/     # micro-app-web3 for React + TypeScript + Vite
│   ├── micro-app-vue/      # micro-app-vue
│   ├── micro-app-vap/      # Micro App VAP
│   ├── micro-app-react/    # micro-app-react for Ant Design Pro
│   ├── micro-app-pure/     # micro-app-pure
│   ├── micro-app-angular/  # MicroAppAngular
│   ├── micro-app-ai/       # micro-app-ai for React + TypeScript + Vite
│   └── docs/               # 微前端 docs
├── libs/                   # 共享库和通用组件
│   └── docs/               # docs
├── lib-vue/                # Vue 组件生态体系
│   ├── uniapp-lib/         # uniapp-lib
│   ├── pure-ui-lib/        # pure-ui-lib
│   ├── element-ui-lib/     # element-ui-lib
│   ├── docs/               # docs
│   └── ant-design-lib/     # ant-design-lib
├── lib-react/              # React生态组件库
│   ├── taro-ui-lib/        # taro-ui-lib
│   ├── docs/               # docs
│   ├── ant-design-x-lib/   # ant-design-x-lib
│   ├── ant-design-web3-lib/# ant-design-web3-lib
│   └── ant-design-lib/     # ant-design-lib
├── lib-nest/               # Service 公用扩展支持
│   ├── umijs-server/       # UmiJS Server
│   ├── nestjs-swagger/     # `@smarts-isoftstone/nestjs-swagger`
│   ├── nestjs-static/      # `@smarts-isoftstone/nestjs-static`
│   ├── nestjs-logger/      # `@smarts-isoftstone/nestjs-logger`
│   ├── nestjs-config/      # `@smarts-isoftstone/nestjs-config`
│   ├── koa-upload/         # koa-upload
│   ├── koa-static/         # koa-static
│   ├── grpc-proto-pkg/     # `@smarts-isoftstone/grpc-proto-pkg`
│   ├── fastify-static/     # fastify-static
│   ├── egg-static/         # egg-static
│   └── docs/               # docs
├── lib-mcp/                # MCP Server for nestjs or python
│   └── mcp-server-office/  # mcp-server-office
├── lib-lint/               # 代码规范、质量检测、代码风格、提交规范等统一管理
│   ├── vite-plugin-swagger/# vite-plugin-smarts
│   ├── vite-plugin-smarts/ # vite-plugin-smarts
│   ├── stylelint-config-smarts/ # stylelint-config-smart
│   ├── stylelint-config-smart/ # stylelint-config-smart
│   ├── rollup-plugin-smarts/ # rollup-plugin-smarts
│   ├── prettier-plugin-smarts/ # prettier-plugin-smarts
│   ├── prettier-plugin-smart/ # prettier-plugin-smarts
│   ├── eslint-plugin-smarts/ # eslint-plugin-smarts
│   ├── eslint-plugin-smart/ # eslint-plugin-smart
│   ├── docs/               # lint docs
│   ├── commitlint-smarts/  # 提交规范工具 for commitlint-smarts
│   ├── commitlint-smart/   # 提交规范工具 for commitlint-smart
│   ├── commit-smarts/      # 提交规范工具 for `commit-smarts`
│   └── commit-smart/       # 提交规范工具 for `commit-smart`
├── lib-cli/                # 脚手架系统
│   ├── swagger-to-typescript/ # swagger-to-typescript
│   ├── init/               # 初始化项目脚本
│   ├── docs/               # 脚手架文档
│   ├── cli-utils/          # 脚手架工具库
│   ├── cli-npx/            # 脚手架远程调用库
│   ├── cli-git/            # git自动化脚手架
│   ├── cli-env-check/      # node开发环境检查脚手架
│   └── cli-commit/         # 提交规范脚手架
├── apps-python/            # Python项目&工具汇总
│   ├── spider/             # py-spider
│   ├── pdf-compressed/     # PDF压缩工具
│   ├── ocr-vlm/            # PaddleXOCR 印章识别与文档信息抽取
│   └── md-pdf/             # Markdown转PDF
├── apps-native/            # 原生IOS&Android项目
│   ├── ismart-swbn-ios/    # UTag-IOS 项目文档
│   ├── iOSSwiftUILibs/     # iOSSwift组件库
│   ├── iOSSwiftAggregationLibs/ # iOSSwift工具库
│   ├── FlutterUILibs/      # flutter组件库
│   ├── FlutterAggregationLibs/ # Flutter工具库
│   ├── AwesomeProject/     # ReactNative 项目模板
│   ├── AndroidKotlinUILibs/ # 安卓Kotlin组件库
│   └── AndroidKotlinAggregationLibs/ # 安卓Kotlin聚合工具库
├── apps/                   # 全栈项目汇总
│   ├── vscode-lowcode/     # VSCode低代码拖拽插件
│   ├── ismart-swbn-converged-web/ # 日本海外商城项目
│   ├── google-tab-home/    # Google标签页首页扩展
│   └── docs/               # 全栈项目汇总文档
├── _public/                # 静态资源目录
│   └── 可视化辅助编程/     # 可视化辅助编程
├── docs/                   # 文档
└── package.json            # 项目配置
```

## 目录结构说明

### packages/ - 原生组件

这里包含了为鸿蒙纯血OS和uniXOS开发的原生组件：

- `uniapp-x-lib/`: uniapp-x组件库
- `artts-ui-lib/`: ArkTS UI组件库

### micro-service/ - 企业级微服务架构平台

包含各种微服务相关模块：

- `nest-template/`: NestJS 团队项目模板
- `grpc-user/`: 用户微服务
- `grpc-python/`, `grpc-java/`, `grpc-go/`: 多语言gRPC实现
- `grpc-gateway/`: gRPC网关

### micro-frontend/ - 微前端架构模板

包含各种微前端应用模板：

- `vue-template/`, `react-template/`: 工程模板
- `micro-app-x/`, `micro-app-web3/`, `micro-app-vue/`: 不同技术栈的微应用
- `micro-app-react/`: 基于Ant Design Pro的React微应用
- `micro-app-angular/`: Angular微应用
- `micro-app-ai/`: AI相关微应用

### lib-vue/ & lib-react/ - 组件库生态

- `lib-vue/`: Vue组件生态体系，包含Element UI、纯CSS组件库等
- `lib-react/`: React组件生态体系，包含Ant Design系列、Taro UI等

### lib-nest/ - 服务扩展支持

包含NestJS、Koa、Fastify等后端框架的扩展模块：

- `nestjs-swagger/`, `nestjs-static/`, `nestjs-logger/`: NestJS扩展
- `koa-upload/`, `koa-static/`: Koa扩展
- `fastify-static/`, `egg-static/`: 其他框架扩展

### lib-lint/ - 代码规范工具

包含各种代码规范、质量检测工具：

- 各类ESLint、Stylelint配置
- 代码风格(Prettier)插件
- 提交规范(Commitlint)工具

### lib-cli/ - 脚手架系统

包含项目初始化、自动化工具等：

- `swagger-to-typescript/`: API类型生成工具
- `cli-git/`: Git自动化脚手架
- `cli-env-check/`: 开发环境检查工具

### apps-python/ & apps-native/ - 专用项目

- `apps-python/`: Python项目和工具集合
- `apps-native/`: 原生iOS和Android应用及组件库

### apps/ - 全栈项目

包含各类完整项目：

- `vscode-lowcode/`: VSCode低代码拖拽插件
- `ismart-swbn-converged-web/`: 海外商城项目
- `google-tab-home/`: 浏览器扩展

## 配置文件

### package.json

```json
{
  "name": "FullStack",
  "version": "1.0.0",
  "private": true,
  "workspaces": [
    "apps/*",
    "apps-python/*",
    "apps-native/*",
    "packages/*",
    "lib-vue/*",
    "lib-react/*",
    "lib-nest/*",
    "lib-mcp/*",
    "lib-lint/*",
    "lib-cli/*",
    "micro-frontend/*",
    "micro-service/*"
  ],
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
  - 'apps/*'
  - 'apps-python/*'
  - 'apps-native/*'
  - 'packages/*'
  - 'lib-vue/*'
  - 'lib-react/*'
  - 'lib-nest/*'
  - 'lib-mcp/*'
  - 'lib-lint/*'
  - 'lib-cli/*'
  - 'micro-frontend/*'
  - 'micro-service/*'
```

## 目录命名规范

1. **顶级目录**

   - 使用小写字母，以功能区分
   - 多个单词用连字符分隔
   - 例如：`lib-vue`, `micro-frontend`

2. **子项目目录**

   - 使用小写字母
   - 多个单词用连字符分隔
   - 例如：`nestjs-swagger`, `ant-design-lib`

3. **源代码目录**

   - 使用小写字母
   - 多个单词用连字符分隔
   - 例如：`src`, `components`

4. **配置文件**
   - 使用小写字母
   - 例如：`package.json`, `tsconfig.json`
   - 配置类以点开头，例如：`.eslintrc`, `.prettierrc`

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
