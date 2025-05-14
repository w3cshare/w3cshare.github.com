/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-14 13:46:22
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-13 13:50:58
 * @FilePath: /FullStack/.vitepress/config.ts
 * @Description:
 */
import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { generateSidebar } from './utils/sidebar1'
import { resolve } from 'path'

// 获取项目根目录
const rootDir = resolve(__dirname, '..')

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    title: '全栈开发文档',
    description: '基于 Monorepo 的全栈开发项目文档',
    lang: 'zh-CN',
    locales: {
      '/': {
        lang: 'zh-CN',
        label: '简体中文',
        title: '全栈开发文档',
        description: '基于 Monorepo 的全栈开发项目文档',
      },
      '/en/': {
        lang: 'en-US',
        label: 'English',
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
      siteTitle: '阿伟的开发文档',

      // 导航栏配置
      nav: [
        { text: '首页', link: '/' },
        {
          text: '项目汇总',
          items: [
            { text: '首页', link: '/apps/README.md' },
            {
              text: 'Google Tab首页',
              link: '/apps/google-tab-home/README.md',
            },
            { text: 'VSCode低代码平台', link: '/apps/vscode-lowcode/README.md' },
            { text: 'AI Agent', link: '/apps-native/README.md' },
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
              text: 'Swagger文档组件',
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
              text: 'gRPC Proto包',
              link: '/lib-nest/grpc-proto-pkg/README.md',
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
                // {
                //   text: 'Python',
                //   items: [
                //   ],
                // },
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
              text: 'ESLint插件',
            },
            {
              link: '/lib-lint/stylelint-config-smart/README.md',
              text: 'Stylelint插件',
            },
            {
              link: '/lib-lint/prettier-plugin-smart/README.md',
              text: 'Prettier推荐配置',
            },
            {
              link: '/lib-lint/commitlint-plugin-smart/README.md',
              text: 'Commitlint插件',
            },
            {
              link: '/lib-lint/tsconfig-base-smart/README.md',
              text: 'Typescript推荐配置',
            },
          ],
        },
      ],

      // 侧边栏配置
      sidebar: generateSidebar(rootDir),

      // 搜索配置
      search: {
        provider: 'local',
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
        copyright: `Copyright © ${new Date().getFullYear()}`,
      },
    },
  }),
)
