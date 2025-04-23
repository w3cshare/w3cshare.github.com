/*
 * React项目ESLint配置示例
 * 此配置展示了如何在React项目中使用eslint-plugin-smarts
 */

module.exports = {
  root: true,

  // 使用推荐配置
  extends: [
    'plugin:smarts/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],

  // 注册插件
  plugins: ['smarts', 'react', 'react-hooks', 'jsx-a11y'],

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
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },

  // React版本设置
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },

  // 自定义规则配置（可选）
  rules: {
    // 在这里可以覆盖或添加特定规则
    'react/react-in-jsx-scope': 'off', // 使用React 17+时可以关闭
    'react/prop-types': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
