/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-21 16:08:29
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-22 00:43:30
 * @FilePath: /FullStack/micro-service/grpc-gateway/eslint.config.mjs
 * @Description: eslint配置
 */

// eslint.config.mjs
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPlugin from 'eslint-plugin-smart';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: '.',
        sourceType: 'module',
      },
    },
    // 使用插件内置的插件
    plugins: {
      import: eslintPlugin.plugins.import,
      'simple-import-sort': eslintPlugin.plugins['simple-import-sort'],
      'unused-imports': eslintPlugin.plugins['unused-imports'],
    },
    rules: {
      // 使用 eslint-plugin-smart 提供的规则
      ...eslintPlugin.rules.base,
      ...eslintPlugin.rules.typescript,

      // 覆盖特定规则
      'no-console': 'error', // 禁止使用console
    },
  },
];
