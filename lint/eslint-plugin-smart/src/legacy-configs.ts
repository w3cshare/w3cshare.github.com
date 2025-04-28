/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-22 16:42:09
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-28 03:04:31
 * @FilePath: /FullStack/lint/eslint-plugin-smart/src/legacy-configs.ts
 * @Description: ESLint v8及以下版本的传统配置
 */

import type { ESLintRuleSet, LoadedPlugins } from './types'

/**
 * 创建ESLint v8及以下版本的传统配置
 *
 * @param plugins 加载的ESLint插件
 * @param rules 规则集合
 * @returns ESLint传统配置对象集合
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
): Record<string, unknown> {
  const {
    import: importPlugin,
    simpleImportSort: simpleImportSortPlugin,
    unusedImports: unusedImportsPlugin,
    typescriptEslint: typescriptEslintPlugin,
    typescriptEslintParser,
    typescriptSortKeys: typescriptSortKeysPlugin,
    react: reactPlugin,
    reactHooks: reactHooksPlugin,
    jsxA11y: jsxA11yPlugin,
    vue: vuePlugin,
    vueEslintParser,
    node: nodePlugin,
    prettier: prettierPlugin,
    eslintConfigPrettier,
    jsonc: jsoncPlugin,
  } = plugins

  const { baseRules, typescriptRules, reactRules, vueRules, nestjsRules, jsonRules } = rules

  /**
   * 基础配置，适用于所有项目
   */
  const baseConfig = {
    extends: ['plugin:prettier/recommended'],
    plugins: ['import', 'simple-import-sort', 'unused-imports', 'prettier'],
    rules: baseRules,
  }

  /**
   * TypeScript配置
   */
  const typescriptConfig = {
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:typescript-sort-keys/recommended',
      'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'typescript-sort-keys', 'prettier'],
    rules: {
      ...baseRules,
      ...typescriptRules,
    },
  }

  /**
   * React配置
   */
  const reactConfig = {
    extends: [
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:typescript-sort-keys/recommended',
      'plugin:prettier/recommended',
    ],
    plugins: ['react', 'react-hooks', 'jsx-a11y', 'typescript-sort-keys', 'prettier'],
    rules: {
      ...baseRules,
      ...typescriptRules,
      ...reactRules,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  }

  /**
   * Vue配置
   */
  const vueConfig = {
    extends: ['plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
    plugins: ['vue', 'typescript-sort-keys', 'prettier'],
    rules: {
      ...baseRules,
      ...typescriptRules,
      ...vueRules,
    },
  }

  /**
   * NestJS配置
   */
  const nestjsConfig = {
    extends: [
      'plugin:node/recommended',
      'plugin:typescript-sort-keys/recommended',
      'plugin:prettier/recommended',
    ],
    plugins: ['node', 'typescript-sort-keys', 'prettier'],
    rules: {
      ...baseRules,
      ...typescriptRules,
      ...nestjsRules,
    },
  }

  /**
   * JSON配置
   */
  const jsonConfig = {
    extends: ['plugin:jsonc/recommended-with-jsonc'],
    plugins: ['jsonc'],
    rules: jsonRules,
  }

  // 返回所有配置
  return {
    base: baseConfig,
    json: jsonConfig,
    nestjs: nestjsConfig,
    react: reactConfig,

    // 推荐配置，默认使用typescript配置
    recommended: typescriptConfig,

    typescript: typescriptConfig,

    vue: vueConfig,
  }
}
