/*
 * Vue项目ESLint配置示例
 * 此配置展示了如何在Vue项目中使用eslint-plugin-smarts
 */

module.exports = {
  root: true,

  // 使用推荐配置
  extends: [
    'plugin:smarts/recommended',
    'plugin:vue/vue3-recommended', // Vue 3.x项目
    // 'plugin:vue/recommended', // Vue 2.x项目
    'plugin:prettier/recommended',
  ],

  // 注册插件
  plugins: ['smarts', 'vue'],

  // 环境配置
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },

  // 解析器配置
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },

  // 设置
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },

  // 自定义规则配置（可选）
  rules: {
    // 在这里可以覆盖或添加特定规则
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index'], // 需要忽略的组件名
      },
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 3,
        multiline: 1,
      },
    ],
  },
};
