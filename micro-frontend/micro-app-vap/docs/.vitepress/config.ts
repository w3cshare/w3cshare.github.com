import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Micro App VAP',
  description: 'Vue3 + Ant Design + Pinia 微前端应用',
  lang: 'zh-CN',
  lastUpdated: true,

  themeConfig: {
    nav: [
      { text: '指南', link: '/docs/' },
      { text: '组件', link: '/components/' },
      { text: 'API', link: '/api/' },
      {
        text: '更多',
        items: [
          { text: '更新日志', link: '/changelog' },
          { text: '贡献指南', link: '/contributing' },
        ],
      },
    ],

    sidebar: {
      '/docs/': [
        {
          text: '介绍',
          items: [
            { text: '什么是 Micro App VAP?', link: '/docs/introduction' },
            { text: '快速开始', link: '/docs/getting-started' },
            { text: '项目结构', link: '/docs/project-structure' },
          ],
        },
        {
          text: '基础',
          items: [
            { text: '路由配置', link: '/docs/routing' },
            { text: '状态管理', link: '/docs/state-management' },
            { text: '样式指南', link: '/docs/styling' },
          ],
        },
        {
          text: '进阶',
          items: [
            { text: '微前端集成', link: '/docs/micro-frontend' },
            { text: '性能优化', link: '/docs/performance' },
            { text: '测试', link: '/docs/testing' },
          ],
        },
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: '按钮', link: '/components/button' },
            { text: '表单', link: '/components/form' },
            { text: '表格', link: '/components/table' },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/w3cshare/micro-app-vap' }],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present',
    },
  },
})
