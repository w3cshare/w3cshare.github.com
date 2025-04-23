/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-21 11:49:47
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-21 11:53:14
 * @FilePath: /FullStack/lint/eslint-plugin-smart/examples/eslintrc.js
 * @Description:
 */
/**
 * 传统ESLint配置示例文件 (.eslintrc.js)
 * 这个文件展示了如何在ESLint v8及以下版本中使用eslint-plugin-smart
 */

module.exports = {
  // 基础配置示例 (适用于所有项目)
  extends: ['plugin:smart/base'],

  // 可以根据项目类型选择不同的配置
  // TypeScript项目
  // extends: ['plugin:smart/typescript'],

  // React项目
  // extends: ['plugin:smart/react'],

  // Vue项目
  // extends: ['plugin:smart/vue'],

  // NestJS项目
  // extends: ['plugin:smart/nestjs'],

  // 自定义规则示例
  rules: {
    // 这里可以覆盖或添加规则
    // 'no-console': 'error', // 完全禁止console
    // 'max-len': ['warn', { code: 100 }], // 修改行长度限制
  },

  // 环境配置
  env: {
    browser: true,
    node: true,
    es6: true,
  },

  // 解析器选项
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // 如果使用JSX
    },
  },
}
