/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-21 11:49:31
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-21 11:55:25
 * @FilePath: /FullStack/lint/eslint-plugin-smart/examples/eslint.config.js
 * @Description: eslint配置示例文件
 */
/**
 * ESLint配置示例文件
 * 这个文件展示了如何在不同类型的项目中使用eslint-plugin-smart
 */

// 导入eslint-plugin-smart
const smartPlugin = require('eslint-plugin-smart');

// 基础配置示例 (适用于所有项目)
export const baseConfig = {
  extends: ['plugin:smart/base'],
};

// TypeScript项目配置示例
export const typescriptConfig = {
  extends: ['plugin:smart/typescript'],
};

// React项目配置示例
export const reactConfig = {
  extends: ['plugin:smart/react'],
};

// Vue项目配置示例
export const vueConfig = {
  extends: ['plugin:smart/vue'],
};

// NestJS项目配置示例
export const nestjsConfig = {
  extends: ['plugin:smart/nestjs'],
};

// 自定义配置示例 (混合多个规则集)
export const customConfig = {
  extends: ['plugin:smart/typescript'],
  rules: {
    // 覆盖默认规则
    'no-console': 'error', // 完全禁止console
    'max-len': ['warn', { code: 100 }], // 修改行长度限制

    // 添加自定义规则
    'react/jsx-sort-props': 'error', // 要求JSX属性按字母顺序排序
  },
};

// 默认导出推荐配置
export default {
  extends: ['plugin:smart/recommended'],
};
