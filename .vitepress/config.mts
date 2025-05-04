/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-14 13:46:22
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-04 23:52:09
 * @FilePath: /FullStack/.vitepress/config.ts
 * @Description: VitePress 配置文件 - 优化版
 */
import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { readdirSync, statSync } from 'fs'
import { join, resolve } from 'path'

// 自动扫描 Monorepo 包目录
const scanMonorepoPackages = basePath => {
  try {
    return readdirSync(basePath)
      .filter(dir => statSync(join(basePath, dir)).isDirectory())
      .filter(dir => !dir.startsWith('_') && !dir.startsWith('.'))
  } catch (e) {
    console.warn(`无法扫描目录 ${basePath}:`, e.message)
    return []
  }
}

// 动态生成包的侧边栏配置
const generatePackageSidebar = (packageName, path) => {
  const defaultItems = [
    { text: '概述', link: `/${path}/${packageName}/README.md` },
    { text: '快速开始', link: `/${path}/${packageName}/docs/getting-started` },
    { text: '项目结构', link: `/${path}/${packageName}/docs/project-structure` },
  ]

  return [
    {
      text: packageName,
      items: defaultItems,
    },
  ]
}

// 扫描特定目录下的所有包
const appPackages = scanMonorepoPackages(resolve(__dirname, '../apps'))
const libReactPackages = scanMonorepoPackages(resolve(__dirname, '../lib-react'))
const libVuePackages = scanMonorepoPackages(resolve(__dirname, '../lib-vue'))
const microServicePackages = scanMonorepoPackages(resolve(__dirname, '../micro-service'))
const microFrontendPackages = scanMonorepoPackages(resolve(__dirname, '../micro-frontend'))

// 自动生成侧边栏配置
const generateSidebars = () => {
  const sidebars = {
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
          { text: 'Monorepo指南', link: '/docs/monorepo-guide' },
        ],
      },
    ],
  }

  // ... 其他侧边栏配置保持不变

  return sidebars
}

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    title: '全栈开发文档',
    description: '基于 Monorepo 的全栈开发项目文档',
    lang: 'zh-CN',
    locales: {
      '/': {
        lang: 'zh-CN',
        title: '全栈开发文档',
        description: '基于 Monorepo 的全栈开发项目文档',
        label: '简体中文',
      },
      '/en/': {
        lang: 'en-US',
        title: 'FullStack Development Docs',
        description: 'Monorepo based fullstack development project documentation',
        label: 'English',
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
      // 简化rewrites规则，避免复杂的路径模式
      'apps/:path/README.md': 'apps/:path/index.md',
      'lib-:type/:path/README.md': 'lib-:type/:path/index.md',
      'micro-:type/:path/README.md': 'micro-:type/:path/index.md',
      'packages/:path/README.md': 'packages/:path/index.md',
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
      siteTitle: '阿伟的开发文档',
      logo: '/_public/logo.png',

      // 导航栏配置
      nav: [
        { text: '首页', link: '/' },
        {
          text: '项目汇总',
          items: [
            { text: '首页', link: '/apps/README.md' },
            {
              text: 'GoogleTab首页',
              link: '/apps/google-tab-home/README.md',
            },
            { text: 'VSCode低代码', link: '/apps/vscode-lowcode/README.md' },
            { text: 'AIAgent', link: '/apps-native/README.md' },
            { text: 'Web3以太坊', link: '/apps-native/README.md' },
            { text: 'iOS端', link: '/apps-native/README.md' },
            {
              text: '商城微前端项目',
              items: [
                {
                  text: '基座',
                  link: '/apps-native/README.md',
                },
                {
                  text: '管理端',
                  link: '/apps-native/README.md',
                },
                {
                  text: '商家端',
                  link: '/apps-native/README.md',
                },
              ],
            },
          ],
        },
        {
          text: '组件库',
          items: [
            {
              text: 'Vue',
              items: [
                { text: '首页', link: '/lib-vue/README.md' },
                {
                  link: '/lib-vue/ant-design-lib/README.md',
                  text: 'Ant Design 业务组件',
                },
                {
                  link: '/lib-vue/element-ui-lib/README.md',
                  text: 'Element UI 业务组件',
                },
                {
                  link: '/lib-vue/pure-ui-lib/README.md',
                  text: 'Pure 业务组件',
                },
                {
                  link: '/lib-vue/uniapp-lib/README.md',
                  text: 'UniApp 跨端组件',
                },
              ],
            },
            {
              text: 'React',
              items: [
                { link: '/lib-react/README.md', text: '首页' },
                {
                  link: '/lib-react/ant-design-lib/README.md',
                  text: 'Ant Design 业务组件',
                },
                {
                  link: '/lib-react/ant-design-web3-lib/README.md',
                  text: 'Web3 业务组件',
                },
                {
                  link: '/lib-react/ant-design-x-lib/README.md',
                  text: 'AI 业务组件',
                },
                {
                  link: '/lib-react/taro-ui-lib/README.md',
                  text: 'taroJs 业务组件',
                },
              ],
            },
            {
              text: 'ArtTs 业务组件',
              link: '/packages/artts-ui-lib/README.md',
            },
            {
              text: 'UniApp-X 业务组件',
              link: '/packages/uniapp-x-lib/README.md',
            },
          ],
        },
        {
          text: 'API 库',
          items: [
            {
              text: '首页',
              link: '/lib-nest/README.md',
            },
            {
              text: 'Swagger',
              link: '/lib-nest/nestjs-swagger/README.md',
            },
          ],
        },
        {
          text: '通用工具',
          items: [
            {
              text: 'JS库',
              items: [
                {
                  text: '首页',
                  link: '/libs/README.md',
                },
              ],
            },
            {
              text: 'Python库',
              items: [
                { text: '印章识别', link: '/apps-python/ocr-vlm/README.md' },
                {
                  link: '/apps-python/pdf-compressed/README.md',
                  text: 'PDF压缩',
                },
                {
                  link: '/apps-python/md-pdf/README.md',
                  text: 'Markdown转PDF',
                },
              ],
            },
          ],
        },
        {
          text: 'MCP服务',
          items: [
            {
              text: '首页',
              link: '/packages/README.md',
            },

            { text: '印章识别', link: '/apps-python/ocr-vlm/README.md' },
            {
              link: '/apps-python/pdf-compressed/README.md',
              text: 'PDF压缩',
            },
            {
              link: '/apps-python/md-pdf/README.md',
              text: 'Markdown转PDF',
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
                {
                  link: '/micro-frontend/micro-app-ai/README.md',
                  text: 'AI模板',
                },
                {
                  link: '/micro-frontend/micro-app-angular/README.md',
                  text: 'Angular 模板',
                },
                {
                  link: '/micro-frontend/micro-app-pure/README.md',
                  text: 'Pure 模板',
                },
                {
                  link: '/micro-frontend/micro-app-react/README.md',
                  text: 'React 模板',
                },
                {
                  link: '/micro-frontend/micro-app-vue/README.md',
                  text: 'Vue 模板',
                },
                {
                  link: '/micro-frontend/micro-app-vap/README.md',
                  text: 'VAP 研发工作台',
                },
                {
                  link: '/micro-frontend/micro-app-web3/README.md',
                  text: '区块链模板',
                },
                {
                  link: '/micro-frontend/micro-app-x/README.md',
                  text: 'AI Agent',
                },
              ],
            },
            {
              text: '微服务',
              items: [
                { text: '首页', link: '/micro-service/README.md' },
                {
                  link: '/micro-service/grpc-main/README.md',
                  text: 'gRPC 模板',
                },
                { link: '/micro-service/tcp-main/README.md', text: 'TCP 模板' },
                {
                  link: '/micro-service/grpc-python/README.md',
                  text: 'gRPC Python 模板',
                },
                {
                  link: '/micro-service/grpc-java/README.md',
                  text: 'gRPC Java 模板',
                },
                {
                  link: '/micro-service/grpc-go/README.md',
                  text: 'gRPC Go 模板',
                },
                {
                  link: '/micro-service/nest-template/README.md',
                  text: 'NestJS 模板',
                },
              ],
            },
          ],
        },
        {
          text: '脚手架',
          items: [
            { link: '/lib-cli/README.md', text: '首页' },
            {
              text: '提交规范',
              link: '/lib-cli/cli-commit/README.md',
            },
            {
              text: '检测环境',
              link: '/lib-cli/cli-env-check/README.md',
            },
            {
              text: 'Git 自动化',
              link: '/lib-cli/cli-git/README.md',
            },
            {
              text: '初始化模板',
              link: '/lib-cli/init/README.md',
            },
            {
              text: 'npx',
              link: '/lib-cli/cli-npx/README.md',
            },
          ],
        },
        {
          text: '规范',
          items: [
            {
              link: '/lib-lint/README.md',
              text: '首页',
            },
            {
              link: '/lib-lint/eslint-plugin-smart/README.md',
              text: 'ESLint',
            },
            {
              link: '/lib-lint/stylelint-config-smart/README.md',
              text: 'Stylelint',
            },
            {
              link: '/lib-lint/prettier-plugin-smart/README.md',
              text: 'Prettier',
            },
            {
              link: '/lib-lint/commitlint-smart/README.md',
              text: 'Commitlint',
            },
          ],
        },
        {
          text: 'Monorepo指南',
          link: '/docs/monorepo-guide',
        },
      ],

      // 侧边栏配置 - 合并动态生成的部分和静态配置
      sidebar: {
        // 主页侧边栏
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
              { text: 'Monorepo指南', link: '/docs/monorepo-guide' },
              { text: 'Lerna+Nx指南', link: '/docs/lerna-nx-guide' },
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
                text: 'gRPC 主服务',
                link: '/micro-service/grpc-main/README.md',
              },
              {
                text: 'gRPC Gateway',
                link: '/micro-service/grpc-gateway/README.md',
              },
              {
                text: 'gRPC 用户服务',
                link: '/micro-service/grpc-user/README.md',
              },
              {
                text: 'gRPC 客户端',
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
              { text: 'gRPC Java', link: '/micro-service/grpc-java/README.md' },
              { text: 'gRPC Go', link: '/micro-service/grpc-go/README.md' },
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
              { text: 'TCP 主服务', link: '/micro-service/tcp-main/README.md' },
              {
                text: 'TCP 客户端',
                link: '/micro-service/tcp-client/README.md',
              },
            ],
          },
          {
            text: '模板与工具',
            items: [
              {
                text: 'NestJS 模板',
                link: '/micro-service/nest-template/README.md',
              },
              {
                text: 'LangChain 集成',
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
                text: 'Vue 模板',
                link: '/micro-frontend/micro-app-vue/README.md',
              },
              {
                text: 'React 模板',
                link: '/micro-frontend/micro-app-react/README.md',
              },
              {
                text: 'Angular 模板',
                link: '/micro-frontend/micro-app-angular/README.md',
              },
              {
                text: 'Pure JS 模板',
                link: '/micro-frontend/micro-app-pure/README.md',
              },
            ],
          },
          {
            text: '特性应用',
            items: [
              {
                text: 'AI 模板',
                link: '/micro-frontend/micro-app-ai/README.md',
              },
              {
                text: 'Web3 区块链模板',
                link: '/micro-frontend/micro-app-web3/README.md',
              },
              {
                text: 'AI Agent 模板',
                link: '/micro-frontend/micro-app-x/README.md',
              },
              {
                text: 'VAP 研发工作台',
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

        // 规范文档 (lib-lint 部分)
        '/lib-lint/': [
          {
            text: '规范总览',
            items: [
              { text: '概述', link: '/lib-lint/README.md' },
              { text: '快速开始', link: '/lib-lint/docs/getting-started' },
              { text: '规范目录', link: '/lib-lint/docs/linting-guide' },
            ],
          },
          {
            text: 'ESLint 规范',
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
          {
            text: 'Prettier 规范',
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
          {
            text: 'Stylelint 规范',
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
          {
            text: 'Commitlint 规范',
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

        // Python 应用文档
        '/apps-python/': [
          {
            text: 'Python 应用',
            items: [
              { text: '概述', link: '/apps-python/README.md' },
              { text: '环境配置', link: '/apps-python/docs/environment' },
            ],
          },
          {
            text: '印章识别',
            items: [
              {
                text: '概述',
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
          },
          {
            text: 'PDF工具',
            items: [
              {
                text: 'PDF压缩',
                link: '/apps-python/pdf-compressed/README.md',
              },
              {
                text: 'Markdown转PDF',
                link: '/apps-python/md-pdf/README.md',
              },
            ],
          },
        ],

        // Monorepo指南
        '/docs/': [
          {
            text: 'Monorepo指南',
            items: [
              { text: '概述', link: '/docs/monorepo-guide' },
              { text: 'Lerna+Nx指南', link: '/docs/lerna-nx-guide' },
              { text: 'PNPM工作空间', link: '/docs/pnpm-workspace-guide' },
            ],
          },
        ],
      },

      // 搜索配置增强
      search: {
        provider: 'local',
        options: {
          locales: {
            zh: {
              translations: {
                button: {
                  buttonText: '搜索文档',
                  buttonAriaLabel: '搜索文档',
                },
                modal: {
                  noResultsText: '无法找到相关结果',
                  resetButtonTitle: '清除查询条件',
                  footer: {
                    selectText: '选择',
                    navigateText: '切换',
                    closeText: '关闭',
                  },
                },
              },
            },
          },
        },
      },

      // 社交链接
      socialLinks: [
        {
          icon: 'github',
          link: 'https://github.com/w3cshare/w3cshare.github.io.git',
        },
      ],

      // 页脚配置
      footer: {
        message: '基于 MIT 许可发布',
        copyright: `Copyright © ${new Date().getFullYear()} 阿伟的开发文档`,
      },

      // 文档更新时间显示格式
      lastUpdatedText: '上次更新',

      // 其他主题配置
      outline: {
        level: 'deep',
        label: '目录',
      },

      docFooter: {
        prev: '上一页',
        next: '下一页',
      },

      darkModeSwitchLabel: '外观',
      sidebarMenuLabel: '菜单',
      returnToTopLabel: '返回顶部',
    },

    // 头部配置
    head: [
      ['link', { rel: 'icon', href: '/_public/logo.png' }],
      ['meta', { name: 'theme-color', content: '#3eaf7c' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
      ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
      ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
      [
        'meta',
        {
          name: 'keywords',
          content: '全栈开发,Monorepo,Lerna,Nx,pnpm,Workspace,微前端,微服务,AI,区块链,TypeScript',
        },
      ],
    ],
  }),
)
