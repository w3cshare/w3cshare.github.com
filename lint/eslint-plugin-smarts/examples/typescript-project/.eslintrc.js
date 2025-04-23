/*
 * TypeScript项目ESLint配置示例
 * 此配置展示了如何在TypeScript项目中使用eslint-plugin-smarts
 */

module.exports = {
  root: true,

  // 使用推荐配置
  extends: [
    'plugin:smarts/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],

  // 注册插件
  plugins: ['smarts', '@typescript-eslint', 'import'],

  // 环境配置
  env: {
    browser: true,
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
    'import/resolver': {
      typescript: {},
    },
  },

  // 自定义规则配置（可选）
  rules: {
    // 在这里可以覆盖或添加特定规则
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
  },
}
