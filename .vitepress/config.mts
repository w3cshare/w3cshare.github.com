/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-14 13:46:22
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-21 18:13:37
 * @FilePath: /FullStack/.vitepress/config.ts
 * @Description:
 */
import { defineConfig } from 'vitepress';
import { withMermaid } from 'vitepress-plugin-mermaid';

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    title: '全栈开发文档',
    description: '基于 Monorepo 的全栈开发项目文档',
    keywords: ['全栈开发', 'Monorepo', '微前端', '微服务', 'AI', '区块链', 'TypeScript'],
    lang: 'zh-CN',
    locales: {
      '/': {
        lang: 'zh-CN',
        title: '全栈开发文档',
        description: '基于 Monorepo 的全栈开发项目文档',
      },
      '/en/': {
        lang: 'en-US',
        title: 'FullStack Development Docs',
        description: 'Monorepo based fullstack development project documentation',
      },
    },
    lastUpdated: true,
    cleanUrls: true,
    ignoreDeadLinks: true,

    // 设置根目录
    base: '/',
    srcDir: '.',
    outDir: './.vitepress/dist',

    // 重写规则
    rewrites: {
      'README.md': 'index.md',
    },

    // markdown 配置
    markdown: {
      lineNumbers: true,
      container: {
        tipLabel: '提示',
        warningLabel: '警告',
        dangerLabel: '危险',
        infoLabel: '信息',
        detailsLabel: '详细信息',
      },
      math: true,
      theme: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },

    // 首页配置
    themeConfig: {
      siteTitle: '全栈开发文档',

      // 导航栏配置
      nav: [
        { text: '首页', link: '/' },
        {
          text: '项目汇总',
          items: [
            { text: '首页', link: '/apps/README.md' },
            { text: 'Google Tab 首页', link: '/apps/google-tab-home/README.md' },
            { text: 'VSCode 低代码', link: '/apps/vscode-lowcode/README.md' },
            { text: 'AI Agent', link: '/app/README.md' },
            { text: 'Web3 以太坊', link: '/app/README.md' },
            { text: 'iOS 端', link: '/app/README.md' },
            {
              text: '商城微前端项目',
              items: [
                {
                  text: '基座',
                  link: '/app/README.md',
                },
                {
                  text: '管理端',
                  link: '/app/README.md',
                },
                {
                  text: '商家端',
                  link: '/app/README.md',
                },
              ],
            },
          ],
        },
        {
          text: '组件库',
          items: [
            {
              text: 'Vue 组件',
              items: [
                { text: '首页', link: '/package-vue/README.md' },
                { link: '/package-vue/ant-design-lib/README.md', text: 'Ant Design 业务组件库' },
                { link: '/package-vue/element-ui-lib/README.md', text: 'Element UI 业务组件库' },
                { link: '/package-vue/pure-ui-lib/README.md', text: 'Pure 业务组件库' },
                { link: '/package-vue/uniapp-lib/README.md', text: 'UniApp 跨端组件库' },
              ],
            },
            {
              text: 'React 组件',
              items: [
                { link: '/package-react/README.md', text: '首页' },
                { link: '/package-react/ant-design-lib/README.md', text: 'Ant Design 业务组件库' },
                { link: '/package-react/ant-design-web3-lib/README.md', text: 'Web3 业务组件库' },
                { link: '/package-react/ant-design-x-lib/README.md', text: 'AI 业务组件库' },
                { link: '/package-react/taro-ui-lib/README.md', text: 'taroJs 业务组件库' },
              ],
            },
          ],
        },
        {
          text: 'API 库',
          items: [
            {
              text: '首页',
              link: '/package-nest/README.md',
            },
            {
              text: 'Swagger 组件',
              link: '/package-nest/nestjs-swagger/README.md',
            },
          ],
        },
        {
          text: '公共库',
          items: [
            {
              text: '首页',
              link: '/packages/README.md',
            },
            {
              text: 'ArtTs 业务组件库',
              link: '/packages/artts-ui-lib/README.md',
            },
            {
              text: 'UniApp-X 业务组件库',
              link: '/packages/uniapp-x-lib/README.md',
            },
          ],
        },
        {
          text: '微应用&模板',
          items: [
            {
              text: '微前端',
              items: [
                { text: '首页', link: '/micro-frontend/README.md' },
                { link: '/micro-frontend/micro-app-ai/README.md', text: 'AI模板' },
                { link: '/micro-frontend/micro-app-angular/README.md', text: 'Angular 模板' },
                { link: '/micro-frontend/micro-app-pure/README.md', text: 'Pure 模板' },
                { link: '/micro-frontend/micro-app-react/README.md', text: 'React 模板' },
                { link: '/micro-frontend/micro-app-vue/README.md', text: 'Vue 模板' },
                { link: '/micro-frontend/micro-app-vap/README.md', text: 'VAP 研发工作台' },
                { link: '/micro-frontend/micro-app-web3/README.md', text: '区块链模板' },
                { link: '/micro-frontend/micro-app-x/README.md', text: 'AI Agent' },
              ],
            },
            {
              text: '微服务',
              items: [
                { text: '首页', link: '/micro-service/README.md' },
                { link: '/micro-service/grpc-main/README.md', text: 'gRPC 模板' },
                { link: '/micro-service/tcp-main/README.md', text: 'TCP 模板' },
                { link: '/micro-service/grpc-python/README.md', text: 'gRPC Python 模板' },
                { link: '/micro-service/grpc-java/README.md', text: 'gRPC Java 模板' },
                { link: '/micro-service/grpc-go/README.md', text: 'gRPC Go 模板' },
                { link: '/micro-service/nestjs-template/README.md', text: 'NestJS 模板' },
                // {
                //   text: 'Python',
                //   items: [
                //   ],
                // },
                { link: '/micro-service/grpc-pdfcompressed/README.md', text: 'PDF压缩' },
              ],
            },
          ],
        },
        {
          text: '脚手架',
          items: [
            { link: '/cli/README.md', text: '首页' },
            {
              text: '提交规范',
              link: '/cli/cli-commit/README.md',
            },
            {
              text: '检测环境',
              link: '/cli/cli-env-check/README.md',
            },
            {
              text: 'Git 自动化',
              link: '/cli/cli-git/README.md',
            },
            {
              text: '初始化模板',
              link: '/cli/init/README.md',
            },
            {
              text: 'npx',
              link: '/cli/cli-npx/README.md',
            },
          ],
        },
        {
          text: '规范',
          items: [
            {
              link: '/lint/README.md',
              text: '首页',
            },
            {
              link: '/lint/eslint-plugin-smart/README.md',
              text: 'ESLint',
            },
            {
              link: '/lint/stylelint-config-smarts/README.md',
              text: 'Stylelint',
            },
            {
              link: '/lint/prettier-plugin-smarts/README.md',
              text: 'Prettier',
            },
            {
              link: '/lint/commitlint-smarts/README.md',
              text: 'Commitlint',
            },
          ],
        },
      ],

      // 侧边栏配置
      sidebar: {
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
              { text: '域驱动设计', link: '/micro-service/docs/domain-driven-design' },
              { text: '服务治理', link: '/micro-service/docs/service-governance' },
              { text: '目录结构', link: '/micro-service/docs/project-structure' },
            ],
          },
          {
            text: 'gRPC 服务',
            items: [
              { text: 'gRPC 主服务', link: '/micro-service/grpc-main/README.md' },
              { text: 'gRPC Gateway', link: '/micro-service/grpc-gateway/README.md' },
              { text: 'gRPC 用户服务', link: '/micro-service/grpc-user/README.md' },
              { text: 'gRPC 客户端', link: '/micro-service/grpc-client/README.md' },
            ],
          },
          {
            text: '多语言支持',
            items: [
              { text: 'gRPC Python', link: '/micro-service/grpc-python/README.md' },
              { text: 'gRPC Java', link: '/micro-service/grpc-java/README.md' },
              { text: 'gRPC Go', link: '/micro-service/grpc-go/README.md' },
              { text: 'Python PDF 压缩', link: '/micro-service/py-pdf-compressed/README.md' },
              { text: 'Python 爬虫', link: '/micro-service/py-spider/README.md' },
            ],
          },
          {
            text: 'TCP 服务',
            items: [
              { text: 'TCP 主服务', link: '/micro-service/tcp-main/README.md' },
              { text: 'TCP 客户端', link: '/micro-service/tcp-client/README.md' },
            ],
          },
          {
            text: '模板与工具',
            items: [
              { text: 'NestJS 模板', link: '/micro-service/nest-template/README.md' },
              { text: 'LangChain 集成', link: '/micro-service/langchain/README.md' },
            ],
          },
        ],

        // 微前端文档
        '/micro-frontend/': [
          {
            text: '微前端',
            items: [
              { text: '概述', link: '/micro-frontend/README.md' },
              { text: '快速开始', link: '/micro-frontend/docs/getting-started' },
              { text: '架构设计', link: '/micro-frontend/docs/architecture' },
              { text: '最佳实践', link: '/micro-frontend/docs/best-practices' },
              { text: '目录结构', link: '/micro-frontend/docs/project-structure' },
            ],
          },
          {
            text: '技术栈模板',
            items: [
              { text: 'Vue 模板', link: '/micro-frontend/micro-app-vue/README.md' },
              { text: 'React 模板', link: '/micro-frontend/micro-app-react/README.md' },
              { text: 'Angular 模板', link: '/micro-frontend/micro-app-angular/README.md' },
              { text: 'Pure JS 模板', link: '/micro-frontend/micro-app-pure/README.md' },
            ],
          },
          {
            text: '特性应用',
            items: [
              { text: 'AI 模板', link: '/micro-frontend/micro-app-ai/README.md' },
              { text: 'Web3 区块链模板', link: '/micro-frontend/micro-app-web3/README.md' },
              { text: 'AI Agent 模板', link: '/micro-frontend/micro-app-x/README.md' },
              { text: 'VAP 研发工作台', link: '/micro-frontend/micro-app-vap/README.md' },
            ],
          },
        ],

        // Nest 包文档
        '/package-nest/': [
          {
            text: 'NestJS 包',
            items: [
              { text: '概述', link: '/package-nest/README.md' },
              { text: '组件概览', link: '/package-nest/docs/overview' },
              { text: '项目结构', link: '/package-nest/docs/project-structure' },
            ],
          },
          {
            text: 'API 组件',
            items: [
              { text: 'Swagger 文档组件', link: '/package-nest/nestjs-swagger/README.md' },
              { text: '配置中心组件', link: '/package-nest/nestjs-config/README.md' },
              { text: '日志组件', link: '/package-nest/nestjs-logger/README.md' },
              { text: '静态资源组件', link: '/package-nest/nestjs-static/README.md' },
              { text: 'gRPC Proto 包', link: '/package-nest/grpc-proto-pkg/README.md' },
            ],
          },
          {
            text: '其他框架组件',
            items: [
              { text: 'Fastify 静态资源', link: '/package-nest/fastify-static/README.md' },
              { text: 'Koa 静态资源', link: '/package-nest/koa-static/README.md' },
              { text: 'Koa 上传组件', link: '/package-nest/koa-upload/README.md' },
              { text: 'Egg 静态资源', link: '/package-nest/egg-static/README.md' },
            ],
          },
        ],

        // React 组件库文档
        '/package-react/': [
          {
            text: 'React 组件库',
            items: [
              { text: '概述', link: '/package-react/README.md' },
              { text: '快速开始', link: '/package-react/docs/getting-started' },
              { text: '组件总览', link: '/package-react/docs/components' },
              { text: '设计规范', link: '/package-react/docs/design' },
              { text: '主题定制', link: '/package-react/docs/theming' },
              { text: '项目结构', link: '/package-react/docs/project-structure' },
            ],
          },
          {
            text: '组件库',
            items: [
              { text: 'Ant Design 业务组件库', link: '/package-react/ant-design-lib/README.md' },
              {
                text: 'Ant Design Web3 组件库',
                link: '/package-react/ant-design-web3-lib/README.md',
              },
              { text: 'Ant Design AI 组件库', link: '/package-react/ant-design-x-lib/README.md' },
              { text: 'Taro UI 组件库', link: '/package-react/taro-ui-lib/README.md' },
            ],
          },
        ],

        // Vue 组件库文档
        '/package-vue/': [
          {
            text: 'Vue 组件库',
            items: [
              { text: '概述', link: '/package-vue/README.md' },
              { text: '快速开始', link: '/package-vue/docs/getting-started' },
              { text: '组件总览', link: '/package-vue/docs/components' },
              { text: '设计规范', link: '/package-vue/docs/design' },
              { text: '主题定制', link: '/package-vue/docs/theming' },
              { text: '项目结构', link: '/package-vue/docs/project-structure' },
            ],
          },
          {
            text: '组件库',
            items: [
              { text: 'Ant Design 业务组件库', link: '/package-vue/ant-design-lib/README.md' },
              { text: 'Element UI 业务组件库', link: '/package-vue/element-ui-lib/README.md' },
              { text: 'Pure 业务组件库', link: '/package-vue/pure-ui-lib/README.md' },
              { text: 'UniApp 跨端组件库', link: '/package-vue/uniapp-lib/README.md' },
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
              { text: 'ArtTs 业务组件库', link: '/packages/artts-ui-lib/README.md' },
              { text: 'UniApp-X 业务组件库', link: '/packages/uniapp-x-lib/README.md' },
              { text: 'UmiJS 服务器', link: '/packages/umijs-server/README.md' },
            ],
          },
        ],

        // CLI 工具文档
        '/cli/': [
          {
            text: '脚手架',
            items: [
              { text: '概述', link: '/cli/README.md' },
              { text: '快速开始', link: '/cli/docs/getting-started' },
              { text: '命令列表', link: '/cli/docs/commands' },
              { text: '工具集', link: '/cli/docs/tools' },
              { text: '模板说明', link: '/cli/docs/templates' },
              { text: '插件开发', link: '/cli/docs/plugin-development' },
              { text: '项目结构', link: '/cli/docs/project-structure' },
            ],
          },
          {
            text: '工具',
            items: [
              { text: '提交规范工具', link: '/cli/cli-commit/README.md' },
              { text: '环境检测工具', link: '/cli/cli-env-check/README.md' },
              { text: 'Git 自动化工具', link: '/cli/cli-git/README.md' },
              { text: '模板初始化工具', link: '/cli/init/README.md' },
              { text: 'NPX 工具', link: '/cli/cli-npx/README.md' },
              { text: '通用工具库', link: '/cli/cli-utils/README.md' },
              { text: 'Swagger 转 TS 工具', link: '/cli/swagger-to-typescript/README.md' },
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
              { text: 'Google Tab 首页', link: '/apps/google-tab-home/README.md' },
              { text: 'VSCode 低代码平台', link: '/apps/vscode-lowcode/README.md' },
              { text: '融合门户Web', link: '/apps/ismart-swbn-converged-web/README.md' },
            ],
          },
        ],

        // 规范文档 (lint 部分 - 已存在，保留)
        '/lint/commitlint-smarts/': [
          {
            text: 'Commitlint 指南',
            items: [
              { text: '概述', link: '/lint/commitlint-smarts/README.md' },
              { text: '快速开始', link: '/lint/commitlint-smarts/docs/quickstart' },
              { text: '提交类型', link: '/lint/commitlint-smarts/docs/types' },
              { text: '作用域规范', link: '/lint/commitlint-smarts/docs/scopes' },
              { text: '主题行规范', link: '/lint/commitlint-smarts/docs/subject' },
              { text: '正文规范', link: '/lint/commitlint-smarts/docs/body' },
              { text: '配置选项', link: '/lint/commitlint-smarts/docs/configuration' },
            ],
          },
        ],
        '/lint/eslint-plugin-smart/': [
          {
            text: 'ESLint 插件指南',
            items: [
              { text: '概述', link: '/lint/eslint-plugin-smart/README.md' },
              { text: '快速开始', link: '/lint/eslint-plugin-smart/docs/快速开始' },
              { text: '规则说明', link: '/lint/eslint-plugin-smart/docs/规则说明' },
              { text: '配置指南', link: '/lint/eslint-plugin-smart/docs/配置指南' },
              { text: '使用示例', link: '/lint/eslint-plugin-smart/USAGE.md' },
            ],
          },
        ],
        '/lint/prettier-plugin-smarts/': [
          {
            text: 'Prettier 插件指南',
            items: [
              { text: '概述', link: '/lint/prettier-plugin-smarts/README.md' },
              { text: '开始使用', link: '/lint/prettier-plugin-smarts/docs/开始使用' },
              { text: 'TypeScript支持', link: '/lint/prettier-plugin-smarts/docs/TypeScript支持' },
              { text: 'JSON自动排序', link: '/lint/prettier-plugin-smarts/docs/JSON自动排序' },
            ],
          },
        ],
        '/lint/stylelint-config-smarts/': [
          {
            text: 'Stylelint 配置指南',
            items: [
              { text: '概述', link: '/lint/stylelint-config-smarts/README.md' },
              { text: '开始使用', link: '/lint/stylelint-config-smarts/docs/开始使用' },
              { text: 'Less支持', link: '/lint/stylelint-config-smarts/docs/Less支持' },
              { text: 'Vue框架支持', link: '/lint/stylelint-config-smarts/docs/Vue框架支持' },
            ],
          },
        ],
      },

      // 搜索配置
      search: {
        provider: 'local',
      },

      // 社交链接
      socialLinks: [{ icon: 'github', link: 'https://github.com/w3cshare/w3cshare.github.io.git' }],

      // 页脚配置
      footer: {
        message: '基于 MIT 许可发布',
        copyright: `Copyright © ${new Date().getFullYear()}`,
      },
    },
  }),
);
