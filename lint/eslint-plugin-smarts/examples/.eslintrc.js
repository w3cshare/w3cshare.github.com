/*
 * 示例ESLint配置文件
 * 此配置展示了如何在项目中使用eslint-plugin-smarts
 */

module.exports = {
  // 使用推荐配置
  extends: ['plugin:smarts/recommended'],

  // 如果你使用的是React项目，可以添加以下配置
  /*
  extends: [
    'plugin:smarts/recommended',
    'plugin:react/recommended'
  ],
  */

  // 如果你使用的是Vue项目，可以添加以下配置
  /*
  extends: [
    'plugin:smarts/recommended',
    'plugin:vue/recommended'
  ],
  */

  // 注册插件
  plugins: ['smarts'],

  // 环境配置
  env: {
    browser: true,
    node: true,
    es6: true,
  },

  // 解析器选项
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // 如果使用JSX
    },
  },

  // 自定义规则配置（可选）
  rules: {
    // 在这里可以覆盖或添加特定规则
  },
};
