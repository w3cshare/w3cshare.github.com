/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-22 16:40:09
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-06 10:29:05
 * @FilePath: /FullStack/lint/eslint-plugin-smart/src/flat-configs.ts
 * @Description: ESLint v9 扁平配置
 *
 * 该文件提供了ESLint v9的扁平配置生成函数，支持以下特性：
 * 1. 基于文件类型的规则应用（JS、TS、React、Vue、NestJS）
 * 2. 集成Prettier格式化规则
 * 3. 优化的规则组合，避免规则冲突
 * 4. 提供多种预设配置组合
 */
import eslint from '@eslint/js'

import {
  javascriptRules,
  jsonRules,
  nodejsRules,
  reactRules,
  typescriptRules,
  vueRules,
} from './recommend'
import {
  type ESLintPluginExport,
  type ESLintRuleSet,
  type FlatConfig,
  type LoadedPlugins,
} from './types'
import { isObject } from './utils'

/**
 * 创建ESLint v9扁平配置
 *
 * @param plugins 加载的ESLint插件
 * @returns ESLint v9扁平配置对象集合
 */
export function createFlatConfigs(plugins: LoadedPlugins): ESLintPluginExport['configs'] {
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
    sortKeysFix: sortKeysFixPlugin,
  } = plugins

  /*
   * 注意：我们使用对象展开语法直接合并规则，避免类型错误
   * 例如: { ...rule1, ...rule2 } 而不是使用函数
   */

  /*
   * 获取eslint:recommended的规则集
   * 注意：在ESLint v9中，我们需要直接引入这些规则，而不是通过extends字段
   */
  const eslintRecommendedRules = eslint.configs.recommended.rules

  /*
   * 获取prettier推荐的规则集
   * 这些规则会关闭所有与prettier冲突的ESLint规则
   */
  const prettierRules: ESLintRuleSet =
    isObject(eslintConfigPrettier) && isObject(eslintConfigPrettier.rules)
      ? (eslintConfigPrettier.rules as ESLintRuleSet)
      : {}

  const ignores = [
    '.eslintrc.js',
    '**/node_modules/**',
    '**/dist/**',
    '**/lib/**',
    '**/test/**',
    '**/dify/**',
    '**/cache/**',
    '**/__tests__/**',
    '**/coverage/**',
    '**/.**/**',
    '**/.eslintcache',
    '**/.eslintrc.js',
    '**/eslint.config.mjs',

    // '**/**.spec.ts',
    // '**/**.spec.js',
  ]

  /**
   * ESLint v9 扁平配置 - 基础配置
   *
   * 包含基础的JavaScript规则和eslint:recommended规则
   */
  const baseFlatConfig: FlatConfig = {
    files: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx', 'src/**/*.{js,ts,jsx,tsx}'],
    ignores,
    plugins: {
      import: importPlugin,
      prettier: prettierPlugin,
      'simple-import-sort': simpleImportSortPlugin,
      'sort-keys-fix': sortKeysFixPlugin,
      'unused-imports': unusedImportsPlugin,
    },
    rules: {
      ...eslintRecommendedRules,
      ...prettierRules,
      ...javascriptRules,
    },
  }

  /**
   * ESLint v9 扁平配置 - TypeScript配置
   *
   * 包含TypeScript特定的规则和类型检查
   */
  const typescriptFlatConfig: FlatConfig = {
    files: ['**/*.ts', '**/*.tsx', 'src/**/*.{ts,tsx}'],
    ignores,
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
        project: './tsconfig.json',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      'typescript-sort-keys': typescriptSortKeysPlugin,
    },
    rules: {
      ...typescriptRules,
    },
  }

  /**
   * ESLint v9 扁平配置 - React配置
   *
   * 包含React和JSX特定的规则，以及可访问性检查
   */
  const reactFlatConfig: FlatConfig = {
    files: ['**/*.jsx', '**/*.tsx'],
    ignores,
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      'jsx-a11y': jsxA11yPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      ...reactRules,
    },
    settings: {
      react: {
        version: 'detect', // 自动检测React版本
      },
    },
  }

  /**
   * ESLint v9 扁平配置 - JSON配置
   *
   * 包含JSON文件的格式化和排序规则
   */
  const jsonFlatConfig: FlatConfig = {
    files: ['**/*.json', '**/*.jsonc', '**/*.json5', '**/package.json'],
    ignores,
    languageOptions: {
      parser: jsoncPlugin?.parser,
      parserOptions: {
        jsonSyntax: 'JSON',
      },
    },
    plugins: {
      jsonc: jsoncPlugin,
    },
    rules: {
      ...jsonRules,
    },
  }

  /**
   * ESLint v9 扁平配置 - Vue配置
   *
   * 包含Vue单文件组件和模板特定的规则
   */
  const vueFlatConfig: FlatConfig = {
    files: ['**/*.vue'],
    ignores,
    languageOptions: {
      parser: vueEslintParser,
      parserOptions: {
        // 在Vue文件中使用TypeScript解析器
        ecmaVersion: 'latest',
        parser: typescriptEslintParser,
        sourceType: 'module',
      },
    },
    plugins: {
      import: importPlugin,
      prettier: prettierPlugin,
      'simple-import-sort': simpleImportSortPlugin,
      'unused-imports': unusedImportsPlugin,
      vue: vuePlugin,
    },
    rules: {
      ...vueRules,
    },
  }

  /**
   * ESLint v9 扁平配置 - NestJS配置
   *
   * 包含NestJS后端项目特定的规则，适用于Node.js环境
   */
  const nestjsFlatConfig: FlatConfig = {
    files: ['**/*.ts', 'src/**/*.ts'],
    ignores,
    languageOptions: {
      globals: {
        node: true, // 添加Node.js全局变量
      },
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaVersion: 'latest',

        // 支持装饰器语法，NestJS大量使用
        emitDecoratorMetadata: true,

        experimentalDecorators: true,

        // 支持装饰器元数据，用于依赖注入
        project: './tsconfig.json',
        sourceType: 'module',
      },
    },
    plugins: {
      import: importPlugin,
      node: nodePlugin,
      prettier: prettierPlugin,
      'simple-import-sort': simpleImportSortPlugin,
      'unused-imports': unusedImportsPlugin,
    },
    rules: {
      ...nodejsRules,
    },
  }

  /**
   * Prettier专用配置（放在最后应用，确保覆盖其他规则）
   *
   * 由于ESLint v9 扁平配置不支持使用 extends 字段，
   * 我们直接将prettier的规则集成到配置对象中
   */
  const prettierFlatConfig: FlatConfig = {
    files: ['**/*.{js,ts,jsx,tsx,vue}'],
    ignores,
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...prettierRules,
      ...javascriptRules,

      ...(javascriptRules && typeof javascriptRules['prettier/prettier'] === 'object'
        ? { 'prettier/prettier': javascriptRules['prettier/prettier'] }
        : {}),
    },
  }

  // 为测试环境Jest添加环境配置
  const jestFlatConfig: FlatConfig = {
    // 为测试文件添加Jest环境配置
    files: ['**/*.spec.ts', '**/*.e2e-spec.ts', '**/*.test.ts'],
    languageOptions: {
      globals: {
        afterAll: true,
        afterEach: true,
        beforeAll: true,
        beforeEach: true,
        describe: true,
        expect: true,
        it: true,
        jest: true,
      },
    },
  }

  /**
   * 返回所有配置组合
   *
   * 每个配置组合都是一个FlatConfig数组，按照从左到右的顺序应用
   * 后面的配置会覆盖前面的配置中的相同规则
   */
  return {
    base: [baseFlatConfig],
    json: [jsonFlatConfig],
    nestjs: [baseFlatConfig, jestFlatConfig, typescriptFlatConfig, nestjsFlatConfig],
    react: [baseFlatConfig, typescriptFlatConfig, reactFlatConfig],
    recommended: [baseFlatConfig, typescriptFlatConfig, prettierFlatConfig],
    typescript: [baseFlatConfig, typescriptFlatConfig],
    vue: [baseFlatConfig, typescriptFlatConfig, vueFlatConfig],
  }
}
