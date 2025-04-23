/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2023-10-22 22:21:12
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-10 10:54:59
 * @FilePath: /FullStack/lint/eslint-plugin-smarts/src/rules/recommended-parserOptions.ts
 * @Description: eslint parserOptions推荐配置 to eslint-plugin-smarts
 */

/**
 * 推荐的解析器选项
 * 这些选项将被应用到使用此插件的项目中
 */
export default {
  // 使用最新的ECMAScript版本
  ecmaVersion: 'latest',

  // 使用ES模块
  sourceType: 'module',

  // ECMAScript特性
  ecmaFeatures: {
    jsx: true, // 支持JSX
    impliedStrict: true, // 启用全局严格模式
    experimentalObjectRestSpread: true, // 支持对象的扩展运算符
  },
}
