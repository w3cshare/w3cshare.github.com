/*
 * Node.js项目ESLint配置示例
 * 此配置展示了如何在Node.js项目中使用eslint-plugin-smarts
 */

module.exports = {
  root: true,

  // 使用推荐配置
  extends: [
    'plugin:smarts/recommended',
    'plugin:node/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],

  // 注册插件
  plugins: ['smarts', 'node', '@typescript-eslint'],

  // 环境配置
  env: {
    node: true,
    es6: true,
    jest: true,
  },

  // 解析器配置
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },

  // 设置
  settings: {
    node: {
      tryExtensions: ['.js', '.ts', '.json'],
    },
  },

  // 自定义规则配置（可选）
  rules: {
    // 在这里可以覆盖或添加特定规则
    'node/no-unsupported-features/es-syntax': 'off', // 允许使用ES模块语法
    'node/no-missing-import': 'off', // 与TypeScript一起使用时关闭
    'node/no-unpublished-import': 'off', // 开发依赖也可以导入
    '@typescript-eslint/no-var-requires': 'off', // 允许使用require
  },
};
