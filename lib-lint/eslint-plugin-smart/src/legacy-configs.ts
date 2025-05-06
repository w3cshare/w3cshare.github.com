/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-22 16:45:09
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-28 13:10:12
 * @FilePath: /FullStack/lint/eslint-plugin-smart/src/legacy-configs.ts
 * @Description: ESLint传统配置
 */

import { type ESLintPluginExport, type ESLintRuleSet, type LoadedPlugins } from './types'

/**
 * 创建传统ESLint配置
 *
 * @param plugins - 加载的插件
 * @param rules - 规则集
 * @returns ESLint配置对象
 */
export function createLegacyConfigs(
  plugins: LoadedPlugins,
  rules: {
    baseRules: ESLintRuleSet
    jsonRules: ESLintRuleSet
    nestjsRules: ESLintRuleSet
    reactRules: ESLintRuleSet
    typescriptRules: ESLintRuleSet
    vueRules: ESLintRuleSet
  },
): ESLintPluginExport['configs'] {
  // 导入插件
  const _importPlugin = plugins.import
  const _simpleImportSortPlugin = plugins.simpleImportSort
  const _unusedImportsPlugin = plugins.unusedImports
  const _typescriptEslintPlugin = plugins.typescriptEslint
  const _typescriptEslintParser = plugins.typescriptEslintParser
  const _typescriptSortKeysPlugin = plugins.typescriptSortKeys
  const _reactPlugin = plugins.react
  const _reactHooksPlugin = plugins.reactHooks
  const _jsxA11yPlugin = plugins.jsxA11y
  const _vuePlugin = plugins.vue
  const _vueEslintParser = plugins.vueEslintParser
  const _nodePlugin = plugins.node
  const _prettierPlugin = plugins.prettier
  const _eslintConfigPrettier = plugins.eslintConfigPrettier
  const _jsoncPlugin = plugins.jsonc

  const { baseRules, typescriptRules, reactRules, vueRules, nestjsRules, jsonRules } = rules

  return {
    base: [
      {
        files: ['**/*.{js,jsx,mjs,cjs}'],
        plugins: {
          import: _importPlugin,
          'simple-import-sort': _simpleImportSortPlugin,
          'unused-imports': _unusedImportsPlugin,
        },
        rules: baseRules,
      },
    ],
    json: [
      {
        files: ['**/*.json'],
        parser: 'jsonc-eslint-parser',
        plugins: {
          jsonc: _jsoncPlugin,
        },
        rules: jsonRules,
      },
    ],
    nestjs: [
      {
        files: ['**/*.{ts,tsx}'],
        plugins: {
          '@typescript-eslint': _typescriptEslintPlugin,
        },
        rules: nestjsRules,
      },
    ],
    react: [
      {
        files: ['**/*.{jsx,tsx}'],
        plugins: {
          'jsx-a11y': _jsxA11yPlugin,
          react: _reactPlugin,
          'react-hooks': _reactHooksPlugin,
        },
        rules: reactRules,
        settings: {
          react: {
            version: 'detect',
          },
        },
      },
    ],
    recommended: [
      {
        files: ['**/*.{js,jsx,ts,tsx}'],
        plugins: {
          prettier: _prettierPlugin,
        },
        rules: baseRules,
      },
    ],
    typescript: [
      {
        files: ['**/*.{ts,tsx}'],
        parser: '@typescript-eslint/parser',
        plugins: {
          '@typescript-eslint': _typescriptEslintPlugin,
          'typescript-sort-keys': _typescriptSortKeysPlugin,
        },
        rules: typescriptRules,
      },
    ],
    vue: [
      {
        files: ['**/*.vue'],
        parser: 'vue-eslint-parser',
        plugins: {
          vue: _vuePlugin,
        },
        rules: vueRules,
      },
    ],
  }
}
