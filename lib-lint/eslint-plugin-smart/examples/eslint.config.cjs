/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-21 11:49:31
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-21 11:55:25
 * @FilePath: /FullStack/lint/eslint-plugin-smart/examples/eslint.config.cjs
 * @Description: eslint配置示例文件 (CommonJS格式)
 */
/**
 * ESLint配置示例文件 (CommonJS格式)
 * 这个文件展示了如何在CommonJS项目中使用eslint-plugin-smart
 * 文件扩展名为.cjs表示这是一个CommonJS模块
 */

// 导入eslint-plugin-smart
const smartPlugin = require('eslint-plugin-smart')

// 基础配置
const baseConfig = {
  extends: ['plugin:smart/base'],
}

// TypeScript项目配置
const typescriptConfig = {
  extends: ['plugin:smart/typescript'],
}

// React项目配置
const reactConfig = {
  extends: ['plugin:smart/react'],
}

// Vue项目配置
const vueConfig = {
  extends: ['plugin:smart/vue'],
}

// NestJS项目配置
const nestjsConfig = {
  extends: ['plugin:smart/nestjs'],
}

// 自定义配置 (混合多个规则集)
const customConfig = {
  extends: ['plugin:smart/typescript'],
  rules: {
    // 覆盖默认规则
    'no-console': 'error', // 完全禁止console
    'max-len': ['warn', { code: 100 }], // 修改行长度限制

    // 添加自定义规则
    'react/jsx-sort-props': 'error', // 要求JSX属性按字母顺序排序
  },
}

// 默认导出推荐配置 (CommonJS导出语法)
module.exports = {
  extends: ['plugin:smart/recommended'],
}

// 也可以导出多个配置 (供其他配置文件引用)
module.exports.baseConfig = baseConfig
module.exports.typescriptConfig = typescriptConfig
module.exports.reactConfig = reactConfig
module.exports.vueConfig = vueConfig
module.exports.nestjsConfig = nestjsConfig
module.exports.customConfig = customConfig 