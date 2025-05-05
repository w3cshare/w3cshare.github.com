export function generateSidebar(rootDir) {
  console.log('🚀 ~ file: sidebar1.ts:2 ~ rootDir:', rootDir)
  return {
    '/': [
      {
        text: '指南',
        items: [
          { text: '快速开始', link: '/docs/getting-started' },
          { text: '架构设计', link: '/docs/architecture' },
          { text: '目录结构', link: '/docs/directory-structure' },
          { text: '开发规范', link: '/docs/development-standards' },
          { text: '部署方案', link: '/docs/deployment' },
          { text: 'PNPM 指南', link: '/docs/pnpm-workspace-guide' },
        ],
      },
    ],

    // 微服务文档
    '/micro-service/': [
      {
        text: '微服务',
        items: [
          { text: '概述', link: '/micro-service/README.md' },
          { text: '快速开始', link: '/micro-service/docs/getting-started' },
          { text: '架构设计', link: '/micro-service/docs/architecture' },
          {
            text: '域驱动设计',
            link: '/micro-service/docs/domain-driven-design',
          },
          {
            text: '服务治理',
            link: '/micro-service/docs/service-governance',
          },
          {
            text: '目录结构',
            link: '/micro-service/docs/project-structure',
          },
        ],
      },
      {
        text: 'gRPC 服务',
        items: [
          {
            text: 'gRPC主服务',
            link: '/micro-service/grpc-main/README.md',
          },
          {
            text: 'gRPC网关',
            link: '/micro-service/grpc-gateway/README.md',
          },
          {
            text: 'gRPC用户服务',
            link: '/micro-service/grpc-user/README.md',
          },
          {
            text: 'gRPC客户端',
            link: '/micro-service/grpc-client/README.md',
          },
        ],
      },
      {
        text: '多语言支持',
        items: [
          {
            text: 'gRPC Python',
            link: '/micro-service/grpc-python/README.md',
          },
          {
            text: 'gRPC Java',
            link: '/micro-service/grpc-java/README.md',
          },
          {
            text: 'gRPC Go',
            link: '/micro-service/grpc-go/README.md',
          },
          {
            text: 'Python PDF 压缩',
            link: '/micro-service/py-pdf-compressed/README.md',
          },
          {
            text: 'Python 爬虫',
            link: '/micro-service/py-spider/README.md',
          },
        ],
      },
      {
        text: 'TCP 服务',
        items: [
          {
            text: 'TCP主服务',
            link: '/micro-service/tcp-main/README.md',
          },
          {
            text: 'TCP客户端',
            link: '/micro-service/tcp-client/README.md',
          },
        ],
      },
      {
        text: '模板与工具',
        items: [
          {
            text: 'NestJS模板',
            link: '/micro-service/nest-template/README.md',
          },
          {
            text: 'LangChain集成',
            link: '/micro-service/langchain/README.md',
          },
        ],
      },
    ],

    // 微前端文档
    '/micro-frontend/': [
      {
        text: '微前端',
        items: [
          { text: '概述', link: '/micro-frontend/README.md' },
          {
            text: '快速开始',
            link: '/micro-frontend/docs/getting-started',
          },
          { text: '架构设计', link: '/micro-frontend/docs/architecture' },
          { text: '最佳实践', link: '/micro-frontend/docs/best-practices' },
          {
            text: '目录结构',
            link: '/micro-frontend/docs/project-structure',
          },
        ],
      },
      {
        text: '技术栈模板',
        items: [
          {
            text: 'Vue模板',
            link: '/micro-frontend/micro-app-vue/README.md',
          },
          {
            text: 'React模板',
            link: '/micro-frontend/micro-app-react/README.md',
          },
          {
            text: 'Angular模板',
            link: '/micro-frontend/micro-app-angular/README.md',
          },
          {
            text: 'Pure模板',
            link: '/micro-frontend/micro-app-pure/README.md',
          },
        ],
      },
      {
        text: '特性应用',
        items: [
          {
            text: 'AI模板',
            link: '/micro-frontend/micro-app-ai/README.md',
          },
          {
            text: '区块链模板',
            link: '/micro-frontend/micro-app-web3/README.md',
          },
          {
            text: 'AI Agent',
            link: '/micro-frontend/micro-app-x/README.md',
          },
          {
            text: 'VAP研发工作台',
            link: '/micro-frontend/micro-app-vap/README.md',
          },
        ],
      },
    ],

    // Nest 包文档
    '/lib-nest/': [
      {
        text: 'NestJS 包',
        items: [
          { text: '概述', link: '/lib-nest/README.md' },
          { text: '组件概览', link: '/lib-nest/docs/overview' },
          {
            text: '项目结构',
            link: '/lib-nest/docs/project-structure',
          },
        ],
      },
      {
        text: 'API 组件',
        items: [
          {
            text: 'Swagger 文档组件',
            link: '/lib-nest/nestjs-swagger/README.md',
          },
          {
            text: '配置中心组件',
            link: '/lib-nest/nestjs-config/README.md',
          },
          {
            text: '日志组件',
            link: '/lib-nest/nestjs-logger/README.md',
          },
          {
            text: '静态资源组件',
            link: '/lib-nest/nestjs-static/README.md',
          },
          {
            text: 'gRPC Proto 包',
            link: '/lib-nest/grpc-proto-pkg/README.md',
          },
        ],
      },
      {
        text: '其他框架组件',
        items: [
          {
            text: 'Fastify 静态资源',
            link: '/lib-nest/fastify-static/README.md',
          },
          {
            text: 'Koa 静态资源',
            link: '/lib-nest/koa-static/README.md',
          },
          {
            text: 'Koa 上传组件',
            link: '/lib-nest/koa-upload/README.md',
          },
          {
            text: 'Egg 静态资源',
            link: '/lib-nest/egg-static/README.md',
          },
        ],
      },
    ],

    // React 组件库文档
    '/lib-react/': [
      {
        text: 'React 组件库',
        items: [
          { text: '概述', link: '/lib-react/README.md' },
          { text: '快速开始', link: '/lib-react/docs/getting-started' },
          { text: '组件总览', link: '/lib-react/docs/components' },
          { text: '设计规范', link: '/lib-react/docs/design' },
          { text: '主题定制', link: '/lib-react/docs/theming' },
          {
            text: '项目结构',
            link: '/lib-react/docs/project-structure',
          },
        ],
      },
      {
        text: '组件库',
        items: [
          {
            text: 'Ant Design 业务组件库',
            link: '/lib-react/ant-design-lib/README.md',
          },
          {
            text: 'Ant Design Web3 组件库',
            link: '/lib-react/ant-design-web3-lib/README.md',
          },
          {
            text: 'Ant Design AI 组件库',
            link: '/lib-react/ant-design-x-lib/README.md',
          },
          {
            text: 'Taro UI 组件库',
            link: '/lib-react/taro-ui-lib/README.md',
          },
        ],
      },
    ],

    // Vue 组件库文档
    '/lib-vue/': [
      {
        text: 'Vue 组件库',
        items: [
          { text: '概述', link: '/lib-vue/README.md' },
          { text: '快速开始', link: '/lib-vue/docs/getting-started' },
          { text: '组件总览', link: '/lib-vue/docs/components' },
          { text: '设计规范', link: '/lib-vue/docs/design' },
          { text: '主题定制', link: '/lib-vue/docs/theming' },
          { text: '项目结构', link: '/lib-vue/docs/project-structure' },
        ],
      },
      {
        text: '组件库',
        items: [
          {
            text: 'Ant Design 业务组件库',
            link: '/lib-vue/ant-design-lib/README.md',
          },
          {
            text: 'Element UI 业务组件库',
            link: '/lib-vue/element-ui-lib/README.md',
          },
          {
            text: 'Pure 业务组件库',
            link: '/lib-vue/pure-ui-lib/README.md',
          },
          {
            text: 'UniApp 跨端组件库',
            link: '/lib-vue/uniapp-lib/README.md',
          },
        ],
      },
    ],

    // 公共库文档
    '/packages/': [
      {
        text: '公共库',
        items: [
          { text: '概述', link: '/packages/README.md' },
          { text: 'API 文档', link: '/packages/docs/api' },
          { text: '功能概览', link: '/packages/docs/overview' },
          { text: '项目结构', link: '/packages/docs/project-structure' },
        ],
      },
      {
        text: '组件库',
        items: [
          {
            text: 'ArtTs 业务组件库',
            link: '/packages/artts-ui-lib/README.md',
          },
          {
            text: 'UniApp-X 业务组件库',
            link: '/packages/uniapp-x-lib/README.md',
          },
          {
            text: 'UmiJS 服务器',
            link: '/packages/umijs-server/README.md',
          },
        ],
      },
    ],

    // CLI 工具文档
    '/lib-cli/': [
      {
        text: '脚手架',
        items: [
          { text: '概述', link: '/lib-cli/README.md' },
          { text: '快速开始', link: '/lib-cli/docs/getting-started' },
          { text: '命令列表', link: '/lib-cli/docs/commands' },
          { text: '工具集', link: '/lib-cli/docs/tools' },
          { text: '模板说明', link: '/lib-cli/docs/templates' },
          { text: '插件开发', link: '/lib-cli/docs/plugin-development' },
          { text: '项目结构', link: '/lib-cli/docs/project-structure' },
        ],
      },
      {
        text: '工具',
        items: [
          { text: '提交规范工具', link: '/lib-cli/cli-commit/README.md' },
          { text: '环境检测工具', link: '/lib-cli/cli-env-check/README.md' },
          { text: 'Git 自动化工具', link: '/lib-cli/cli-git/README.md' },
          { text: '模板初始化工具', link: '/lib-cli/init/README.md' },
          { text: 'NPX 工具', link: '/lib-cli/cli-npx/README.md' },
          { text: '通用工具库', link: '/lib-cli/cli-utils/README.md' },
          {
            text: 'Swagger 转 TS 工具',
            link: '/lib-cli/swagger-to-typescript/README.md',
          },
        ],
      },
    ],

    // 应用项目文档
    '/apps/': [
      {
        text: '应用项目',
        items: [{ text: '概述', link: '/apps/README.md' }],
      },
      {
        text: '应用列表',
        items: [
          {
            text: 'Google Tab 首页',
            link: '/apps/google-tab-home/README.md',
          },
          {
            text: 'VSCode 低代码平台',
            link: '/apps/vscode-lowcode/README.md',
          },
          {
            text: '融合门户Web',
            link: '/apps/ismart-swbn-converged-web/README.md',
          },
        ],
      },
    ],

    // 规范文档 (lint 部分 - 已存在，保留)
    '/lib-lint/commitlint-smart/': [
      {
        text: 'Commitlint 指南',
        items: [
          { text: '概述', link: '/lib-lint/commitlint-smart/README.md' },
          {
            text: '快速开始',
            link: '/lib-lint/commitlint-smart/docs/quickstart',
          },
          { text: '提交类型', link: '/lib-lint/commitlint-smart/docs/types' },
          {
            text: '作用域规范',
            link: '/lib-lint/commitlint-smart/docs/scopes',
          },
          {
            text: '主题行规范',
            link: '/lib-lint/commitlint-smart/docs/subject',
          },
          { text: '正文规范', link: '/lib-lint/commitlint-smart/docs/body' },
          {
            text: '配置选项',
            link: '/lib-lint/commitlint-smart/docs/configuration',
          },
        ],
      },
    ],
    '/lib-lint/eslint-plugin-smart/': [
      {
        text: 'ESLint 插件指南',
        items: [
          { text: '概述', link: '/lib-lint/eslint-plugin-smart/README.md' },
          {
            text: '快速开始',
            link: '/lib-lint/eslint-plugin-smart/docs/快速开始',
          },
          { text: '质量', link: '/lib-lint/eslint-plugin-smart/docs/质量' },
          {
            text: '常见问题',
            link: '/lib-lint/eslint-plugin-smart/docs/常见问题',
          },
        ],
      },
    ],
    '/lib-lint/prettier-plugin-smart/': [
      {
        text: 'Prettier 插件指南',
        items: [
          { text: '概述', link: '/lib-lint/prettier-plugin-smart/README.md' },
          {
            text: '开始使用',
            link: '/lib-lint/prettier-plugin-smart/docs/开始使用',
          },
          {
            text: 'TypeScript支持',
            link: '/lib-lint/prettier-plugin-smart/docs/TypeScript支持',
          },
          {
            text: 'JSON自动排序',
            link: '/lib-lint/prettier-plugin-smart/docs/JSON自动排序',
          },
        ],
      },
    ],
    '/lib-lint/stylelint-config-smart/': [
      {
        text: 'Stylelint 配置指南',
        items: [
          { text: '概述', link: '/lib-lint/stylelint-config-smart/README.md' },
          {
            text: '开始使用',
            link: '/lib-lint/stylelint-config-smart/docs/开始使用',
          },
          {
            text: 'Less支持',
            link: '/lib-lint/stylelint-config-smart/docs/Less支持',
          },
          {
            text: 'Vue框架支持',
            link: '/lib-lint/stylelint-config-smart/docs/Vue框架支持',
          },
        ],
      },
    ],
    '/apps-python/ocr-vlm/': [
      {
        text: '印章识别',
        link: '/apps-python/ocr-vlm/README.md',
      },
      {
        link: '/apps-python/ocr-vlm/docs/installation.md',
        text: '环境安装',
      },
      {
        link: '/apps-python/ocr-vlm/docs/models.md',
        text: '模型列表',
      },
      {
        link: '/apps-python/ocr-vlm/docs/architecture.md',
        text: '架构设计',
      },
      {
        link: '/apps-python/ocr-vlm/docs/training.md',
        text: '模型训练',
      },
      {
        link: '/apps-python/ocr-vlm/docs/labeling.md',
        text: '数据标注',
      },
      {
        link: '/apps-python/ocr-vlm/docs/api.md',
        text: 'API接口',
      },
    ],
  }
}
