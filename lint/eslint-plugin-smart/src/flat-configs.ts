/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-22 16:40:09
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-23 17:42:15
 * @FilePath: /FullStack/lint/eslint-plugin-smart/src/flat-configs.ts
 * @Description: ESLint v9 扁平配置
 */

import { type ESLintRuleSet, type FlatConfig } from './types'

/**
 * 创建ESLint v9扁平配置
 *
 * @param plugins 加载的ESLint插件
 * @param rules 规则集合
 * @returns ESLint v9扁平配置对象集合
 */
export function createFlatConfigs(
  plugins: Record<string, unknown>,
  rules: {
    baseRules: ESLintRuleSet
    typescriptRules: ESLintRuleSet
    reactRules: ESLintRuleSet
    vueRules: ESLintRuleSet
    nestjsRules: ESLintRuleSet
  },
): Record<string, FlatConfig[]> {
  const { baseRules, typescriptRules, reactRules, vueRules, nestjsRules } = rules

  const {
    import: importPlugin,
    simpleImportSort: simpleImportSortPlugin,
    unusedImports: unusedImportsPlugin,
    typescriptEslint: typescriptEslintPlugin,
    typescriptEslintParser,
    react: reactPlugin,
    reactHooks: reactHooksPlugin,
    jsxA11y: jsxA11yPlugin,
    vue: vuePlugin,
    vueEslintParser,
    node: nodePlugin,
    prettier: prettierPlugin,
    eslintConfigPrettier,
    prettierCore,
  } = plugins

  /**
   * ESLint v9 扁平配置 - 基础配置
   */
  const baseFlatConfig: FlatConfig = {
    files: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx', 'src/**/*.{js,ts,jsx,tsx}'],
    ignores: ['**/node_modules/**', '**/dist/**', '.eslintrc.js'],
    plugins: {
      import: importPlugin,
      'simple-import-sort': simpleImportSortPlugin,
      'unused-imports': unusedImportsPlugin,
      prettier: prettierPlugin,
    },
    rules: baseRules,
  }

  /**
   * ESLint v9 扁平配置 - TypeScript配置
   */
  const typescriptFlatConfig: FlatConfig = {
    files: ['**/*.ts', '**/*.tsx', 'src/**/*.{ts,tsx}'],
    ignores: ['**/node_modules/**', '**/dist/**', '.eslintrc.js'],
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        experimentalDecorators: true,
        emitDecoratorMetadata: true,
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
    },
    rules: {
      ...baseRules,
      ...typescriptRules,
    },
  }

  /**
   * ESLint v9 扁平配置 - React配置
   */
  const reactFlatConfig: FlatConfig = {
    files: ['**/*.jsx', '**/*.tsx'],
    ignores: ['.eslintrc.js'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
    },
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...baseRules,
      ...typescriptRules,
      ...reactRules,
    },
  }

  /**
   * ESLint v9 扁平配置 - Vue配置
   */
  const vueFlatConfig: FlatConfig = {
    files: ['**/*.vue'],
    ignores: ['.eslintrc.js'],
    plugins: {
      vue: vuePlugin,
      import: importPlugin,
      'simple-import-sort': simpleImportSortPlugin,
      'unused-imports': unusedImportsPlugin,
      prettier: prettierPlugin,
    },
    languageOptions: {
      parser: vueEslintParser,
      parserOptions: {
        parser: typescriptEslintParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      ...baseRules,
      ...typescriptRules,
      ...vueRules,
    },
  }

  /**
   * ESLint v9 扁平配置 - NestJS配置
   */
  const nestjsFlatConfig: FlatConfig = {
    files: ['**/*.ts', 'src/**/*.ts'],
    ignores: ['**/node_modules/**', '**/dist/**', '.eslintrc.js'],
    plugins: {
      node: nodePlugin,
      import: importPlugin,
      prettier: prettierPlugin,
      'simple-import-sort': simpleImportSortPlugin,
      'unused-imports': unusedImportsPlugin,
    },
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        experimentalDecorators: true,
        emitDecoratorMetadata: true,
        project: './tsconfig.json',
      },
      globals: {
        node: true,
        jest: true,
      },
    },
    rules: {
      ...baseRules,
      ...typescriptRules,
      ...nestjsRules,
    },
  }

  /**
   * Prettier专用配置（放在最后应用，确保覆盖其他规则）
   */
  const prettierFlatConfig: FlatConfig = {
    files: ['**/*.{js,ts,jsx,tsx,vue}'],
    ignores: ['.eslintrc.js'],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  }

  // 返回所有配置
  return {
    base: [baseFlatConfig, prettierFlatConfig],
    typescript: [baseFlatConfig, typescriptFlatConfig, prettierFlatConfig],
    react: [baseFlatConfig, typescriptFlatConfig, reactFlatConfig, prettierFlatConfig],
    vue: [baseFlatConfig, typescriptFlatConfig, vueFlatConfig, prettierFlatConfig],
    nestjs: [prettierFlatConfig, baseFlatConfig, typescriptFlatConfig, nestjsFlatConfig],
    recommended: [baseFlatConfig, typescriptFlatConfig, prettierFlatConfig],
  }
}
