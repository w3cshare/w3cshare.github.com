/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-03-28 17:39:53
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-13 01:40:40
 * @FilePath: /FullStack/eslint.config.mjs
 * @Description: --
 */
// @ts-check
import eslint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import smartsPlugin from 'eslint-plugin-smarts';

// tsup src/index.js --format=cjs,esm --dts
export default tseslint.config(
  {
    ignores: [
      'clean.js',
      '**/dify/**',
      '**/.eslintrc.js',
      '**/eslint.config.mjs',
      '**/dist/**',
      '**/lib/**',
      '**/test/**',
      '**/__tests__/**',
      '**/node_modules/**',
      '**/coverage/**',
      '**/.eslintcache/**',
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
        ...globals.browser,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        projectService: true,
        // @ts-ignore
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      'prettier/prettier': 'error',
    },
  },
  smartsPlugin.configs.recommended,
);
