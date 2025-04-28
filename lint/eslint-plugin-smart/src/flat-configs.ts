/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-22 16:40:09
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-28 10:59:44
 * @FilePath: /FullStack/lint/eslint-plugin-smart/src/flat-configs.ts
 * @Description: ESLint v9 扁平配置
 *
 * 该文件提供了ESLint v9的扁平配置生成函数，支持以下特性：
 * 1. 基于文件类型的规则应用（JS、TS、React、Vue、NestJS）
 * 2. 集成Prettier格式化规则
 * 3. 优化的规则组合，避免规则冲突
 * 4. 提供多种预设配置组合
 */
import js from '@eslint/js'

import {
  javascriptRules,
  jsonRules,
  nodejsRules,
  reactRules,
  typescriptRules,
  vueRules,
} from './recommend'
import { type ESLintRuleSet, type FlatConfig, type LoadedPlugins } from './types'
import { isObject } from './utils'

/**
 * 创建ESLint v9扁平配置
 *
 * @param plugins 加载的ESLint插件
 * @returns ESLint v9扁平配置对象集合
 */
export function createFlatConfigs(plugins: LoadedPlugins): Record<string, FlatConfig[]> {
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
    jsonc: jsoncPlugin,
  } = plugins

  /*
   * 注意：我们使用对象展开语法直接合并规则，避免类型错误
   * 例如: { ...rule1, ...rule2 } 而不是使用函数
   */

  /*
   * 获取eslint:recommended的规则集
   * 注意：在ESLint v9中，我们需要直接引入这些规则，而不是通过extends字段
   */
  const eslintRecommendedRules = js.configs.recommended.rules

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
      'simple-import-sort': simpleImportSortPlugin,
      'unused-imports': unusedImportsPlugin,
      prettier: prettierPlugin,
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
        version: 'detect', // 自动检测React版本
      },
    },
    rules: {
      ...reactRules,
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
    plugins: {
      jsonc: jsoncPlugin,
    },
    languageOptions: {
      parser: jsoncPlugin?.parser,
      parserOptions: {
        jsonSyntax: 'JSON',
      },
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
        parser: typescriptEslintParser, // 在Vue文件中使用TypeScript解析器
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
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
    plugins: {
      node: nodePlugin,
      import: importPlugin,
      'simple-import-sort': simpleImportSortPlugin,
      'unused-imports': unusedImportsPlugin,
      prettier: prettierPlugin,
    },
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        experimentalDecorators: true, // 支持装饰器语法，NestJS大量使用
        emitDecoratorMetadata: true, // 支持装饰器元数据，用于依赖注入
        project: './tsconfig.json',
      },
      globals: {
        node: true, // 添加Node.js全局变量
        jest: true, // 添加Jest测试全局变量
      },
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
        describe: true,
        it: true,
        expect: true,
        beforeEach: true,
        afterEach: true,
        beforeAll: true,
        afterAll: true,
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
    typescript: [baseFlatConfig, typescriptFlatConfig],
    react: [baseFlatConfig, typescriptFlatConfig, reactFlatConfig],
    vue: [baseFlatConfig, typescriptFlatConfig, vueFlatConfig],
    nestjs: [baseFlatConfig, jestFlatConfig, typescriptFlatConfig, nestjsFlatConfig],
    json: [jsonFlatConfig],
    recommended: [baseFlatConfig, typescriptFlatConfig, prettierFlatConfig],
  }
}
