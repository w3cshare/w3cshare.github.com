/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2023-10-22 22:21:14
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-10 10:54:36
 * @FilePath: /FullStack/lint/eslint-plugin-smarts/src/rules/recommended-plugins.ts
 * @Description: eslint plugins推荐配置 to eslint-plugin-smarts
 */

/**
 * 推荐的ESLint插件
 * 这些插件将被自动注册到使用此插件的项目中
 */
export default {
  // TypeScript支持
  '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),

  // React相关插件
  react: require('eslint-plugin-react'),
  'react-hooks': require('eslint-plugin-react-hooks'),
  'jsx-a11y': require('eslint-plugin-jsx-a11y'),

  // Vue相关插件
  vue: require('eslint-plugin-vue'),

  // 导入/导出相关插件
  import: require('eslint-plugin-import'),

  // 格式化相关插件
  prettier: require('eslint-plugin-prettier'),
}
