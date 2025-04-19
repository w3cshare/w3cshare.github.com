/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2023-10-22 22:21:12
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-10 10:55:14
 * @FilePath: /FullStack/lint/eslint-plugin-smarts/src/rules/recommended-extends.ts
 * @Description: eslint推荐继承配置 to eslint-plugin-smarts
 */

/**
 * 推荐的ESLint配置扩展
 * 这些扩展将被应用到使用此插件的项目中
 */
export default [
  // 基础配置
  'eslint:recommended',

  // TypeScript支持
  'plugin:@typescript-eslint/recommended',

  // React支持
  'plugin:react/recommended',
  'plugin:react-hooks/recommended',

  // Vue支持
  'plugin:vue/vue3-recommended', // Vue 3.x项目
  // 'plugin:vue/recommended', // Vue 2.x项目

  // 导入/导出规则
  'plugin:import/recommended',
  'plugin:import/typescript',

  // 可访问性
  'plugin:jsx-a11y/recommended',
];
