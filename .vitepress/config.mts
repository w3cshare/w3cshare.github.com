/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-14 13:46:22
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-19 15:59:07
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
    lang: 'zh-CN',
    lastUpdated: true,
    cleanUrls: true,
    ignoreDeadLinks: true,

    // 设置根目录
    base: '/',
    srcDir: '.',
    outDir: './vitepress/dist',

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
            { text: '首页', link: '/app/README.md' },
            { text: 'google tab首页', link: '/app/google-tab-home/README.md' },
            { text: 'vscode低代码', link: '/app/vscode-lowcode/README.md' },
            {
              text: '商城微前端项目',
              items: [
                {
                  text: '基座',
                  link: '/apps/ismart-swbn-converged-web/ismart-qiankun-web/README.md',
                },
                {
                  text: '组件',
                  link: '/apps/ismart-swbn-converged-web/ismart-components-web/README.md',
                },
                {
                  text: '管理端',
                  link: '/apps/ismart-swbn-converged-web/ismart-swbn-admin-web/README.md',
                },
                {
                  text: '商家端',
                  link: '/apps/ismart-swbn-converged-web/ismart-swbn-business-web/README.md',
                },
              ],
            },
          ],
        },
        {
          text: '组件库',
          items: [
            {
              text: 'vue组件',
              items: [
                { text: '首页', link: '/package-vue/README.md' },
                { link: '/package-vue/ant-design-lib/README.md', text: 'ant-design业务组件库' },
                { link: '/package-vue/element-ui-lib/README.md', text: 'element-ui业务组件库' },
                { link: '/package-vue/pure-ui-lib/README.md', text: 'pure业务组件库' },
                { link: '/package-vue/uniapp-lib/README.md', text: 'uniapp业务组件库' },
              ],
            },
            {
              text: 'react组件',
              items: [
                { link: '/package-react/README.md', text: '首页' },
                { link: '/package-react/ant-design-lib/README.md', text: 'ant-design业务组件库' },
                { link: '/package-react/ant-design-web3-lib/README.md', text: 'web3业务组件库' },
                { link: '/package-react/ant-design-x-lib/README.md', text: 'AI业务组件库' },
                { link: '/package-react/taro-ui-lib/README.md', text: 'taroJs业务组件库' },
              ],
            },
          ],
        },
        {
          text: 'API库',
          items: [
            {
              text: '首页',
              link: '/package-nest/README.md',
            },
            {
              text: 'swagger组件',
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
              text: 'artTs业务组件库',
              link: '/packages/artts-ui-lib/README.md',
            },
            {
              text: 'uniapp-X业务组件库',
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
                { link: '/micro-frontend/micro-app-angular/README.md', text: 'angular模板' },
                { link: '/micro-frontend/micro-app-pure/README.md', text: 'pure模板' },
                { link: '/micro-frontend/micro-app-react/README.md', text: 'react模板' },
                { link: '/micro-frontend/micro-app-vue/README.md', text: 'vue模板' },
                { link: '/micro-frontend/micro-app-vap/README.md', text: 'vap研发工作台' },
                { link: '/micro-frontend/micro-app-web3/README.md', text: '区块链模板' },
                { link: '/micro-frontend/micro-app-x/README.md', text: 'AI Agent' },
              ],
            },
            {
              text: '微服务',
              items: [
                { text: '首页', link: '/micro-service/README.md' },
                { link: '/micro-service/grpc-main/README.md', text: 'grpc 模板' },
                { link: '/micro-service/tcp-main/README.md', text: 'tcp 模板' },
                { link: '/micro-service/grpc-python/README.md', text: 'grpc python模板' },
                { link: '/micro-service/grpc-java/README.md', text: 'grpc java模板' },
                { link: '/micro-service/grpc-go/README.md', text: 'grpc go模板' },
                { link: '/micro-service/nestjs-template/README.md', text: 'nestjs模板' },
                { link: '/micro-service/grpc-pdfcompressed/README.md', text: 'PDF压缩' },
              ],
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
              link: '/lint/eslint-plugin-smarts/README.md',
              text: 'eslint',
            },
            {
              link: '/lint/stylelint-config-smarts/README.md',
              text: 'stylelint',
            },
            {
              link: '/lint/prettier-plugin-smarts/README.md',
              text: 'prettier',
            },
            {
              link: '/lint/commitlint-smarts/README.md',
              text: 'commitlint',
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
              text: 'git自动化',
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
      },

      // 搜索配置
      search: {
        provider: 'local',
      },

      // 社交链接
      socialLinks: [{ icon: 'github', link: 'https://github.com/your-repo' }],

      // 页脚配置
      footer: {
        message: '基于 MIT 许可发布',
        copyright: `Copyright © ${new Date().getFullYear()}`,
      },
    },
  }),
);
