/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-21 11:31:09
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-23 17:38:35
 * @FilePath: /FullStack/lint/eslint-plugin-smart/src/eslint-plugin-smart.ts
 * @Description: ESLint插件公共配置，适用于React、Vue、NestJS和TypeScript项目
 */

// 导入类型和优化后的规则集
import {
  javascriptRules as javascriptRules2,
  nodejsRules as nodejsRules2,
  reactRules as reactRules2,
  typescriptRules as typescriptRules2,
  vueRules as vueRules2,
} from './recommend'
import { type ESLintRuleSet } from './types'
import { createFlatConfigs } from './flat-configs'
import { createLegacyConfigs } from './legacy-configs'
import { isESLintV9, loadPlugins } from './utils'

/**
 * ESLint插件类型
 */
type ESLintPlugin = unknown

/**
 * ESLint配置类型
 */
interface ESLintConfig {
  parser?: string
  plugins?: string[]
  extends?: string[]
  rules?: ESLintRuleSet
  settings?: Record<string, unknown>
  [key: string]: unknown
}

/**
 * ESLint v9 扁平配置类型
 */
interface ESLintFlatConfig {
  files: string[]
  plugins?: Record<string, ESLintPlugin>
  languageOptions?: {
    parser?: unknown
    parserOptions?: Record<string, unknown>
  }
  rules?: ESLintRuleSet
  settings?: Record<string, unknown>
  [key: string]: unknown
}

/**
 * 插件导出的类型接口
 */
interface ESLintPluginExport {
  rules: {
    base: ESLintRuleSet
    typescript: ESLintRuleSet
    react: ESLintRuleSet
    vue: ESLintRuleSet
    nestjs: ESLintRuleSet
  }
  configs?: Record<string, unknown>
  plugins?: Record<string, unknown>
}

/**
 * 基础规则集，适用于所有项目
 *
 * 包含错误防范、代码风格和导入规则等通用规则
 */
const baseRules = {
  ...javascriptRules2,

  // 数组/对象排序
  // 'annotation/sort': 'error',
  // 'annotation/sort-keys': 'error',
  // 'annotation/format-date': 'error',
  // 'annotation/unique': 'error',

  'no-unused-vars': 'off',
  // 移除无用的代码规则
  'unused-imports/no-unused-imports': 'error', // 禁止未使用的导入
  'unused-imports/no-unused-vars': [
    'error',
    {
      vars: 'all', // 检查所有变量
      varsIgnorePattern: '^_', // 忽略以_开头的变量
      args: 'after-used', // 仅检查使用后的参数
      argsIgnorePattern: '^_', // 忽略以_开头的参数
      caughtErrorsIgnorePattern: '^_', // 忽略以_开头的捕获错误
      // ignoreRestSiblings: false, // 忽略剩余的兄弟节点
      // destructuredArrayIgnorePattern: '^_', // 忽略以_开头的解构数组
    },
  ],

  // 导入/导出排序
  'import/order': 'off', // 使用simple-import-sort代替
  'simple-import-sort/imports': 'error', // 要求import语句排序
  'simple-import-sort/exports': 'error', // 要求export语句排序
  // 'simple-import-sort/imports': [
  //   'error',
  //   {
  //     groups: [
  //       // 框架库放在首行
  //       ['^react', '^vue', '^ant-design-vue', '^@?\\w'],

  //       // 内部导入
  //       ['^(@|components)(/.*|$)'],

  //       // 父级导入
  //       ['^\\.\\.(?!/?$)', '^\\.\\./?$'],

  //       // 同级导入
  //       ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],

  //       // 样式导入
  //       ['^.+\\.?(css)$'],

  //       // 带有副作用导入
  //       ['^\\u0000'],
  //     ],
  //   },
  // ],
}

/**
 * TypeScript特定规则
 *
 * 包含TypeScript项目的类型检查和代码质量规则
 */
const typescriptRules = {
  ...typescriptRules2,
  '@typescript-eslint/no-unused-vars': 'off', // 关闭TS的未使用变量检查，使用unused-imports代替
  // 移除无用的代码规则
  'unused-imports/no-unused-imports': 'error', // 禁止未使用的导入
  'unused-imports/no-unused-vars': [
    'error',
    {
      vars: 'all', // 检查所有变量
      varsIgnorePattern: '^_', // 忽略以_开头的变量
      args: 'after-used', // 仅检查使用后的参数
      argsIgnorePattern: '^_', // 忽略以_开头的参数
      caughtErrorsIgnorePattern: '^_', // 忽略以_开头的捕获错误
      // ignoreRestSiblings: false, // 忽略剩余的兄弟节点
      // destructuredArrayIgnorePattern: '^_', // 忽略以_开头的解构数组
    },
  ],
}

/**
 * React特定规则
 *
 * 包含React项目的JSX语法、Hooks使用和可访问性规则
 */
const reactRules = {
  ...reactRules2,
}

/**
 * Vue特定规则
 *
 * 包含Vue项目的组件定义、模板语法和代码风格规则
 */
const vueRules = {
  ...vueRules2,
}

/**
 * NestJS特定规则
 *
 * 包含NestJS后端项目的Node.js相关规则，主要是放宽一些限制
 */
const nestjsRules = {
  ...nodejsRules2,

  '@typescript-eslint/no-empty-function': 'off',
  // nest官网推荐
  '@typescript-eslint/interface-name-prefix': 'off',
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
  // 可以根据项目需要添加更多NestJS特定规则
}

/**
 * 创建ESLint配置导出对象
 *
 * @returns ESLint插件导出对象
 */
const createExportObject = (): ESLintPluginExport => {
  // 加载插件
  const plugins = loadPlugins()

  // 规则集合
  const rules = {
    baseRules,
    typescriptRules,
    reactRules,
    vueRules,
    nestjsRules,
  }

  // 创建基本导出对象
  const exportObj: ESLintPluginExport = {
    // 规则集
    rules: {
      base: baseRules,
      typescript: typescriptRules,
      react: reactRules,
      vue: vueRules,
      nestjs: nestjsRules,
    },

    // 内置插件导出
    plugins: {
      import: plugins.import,
      'simple-import-sort': plugins.simpleImportSort,
      'unused-imports': plugins.unusedImports,
    },
  }

  // 根据ESLint版本导出不同格式的配置
  if (isESLintV9()) {
    // ESLint v9+ 使用扁平配置
    exportObj.configs = createFlatConfigs(plugins, rules)
  } else {
    // ESLint v8 及以下使用传统配置
    exportObj.configs = createLegacyConfigs(rules)
  }

  return exportObj
}

// 创建导出对象
const exportObj = createExportObject()

// 根据环境选择合适的导出方式
if (typeof module !== 'undefined' && module.exports) {
  // CommonJS环境
  module.exports = exportObj
} else {
  // ESM环境
  // export default已经在文件末尾
}

// ESM导出
export default exportObj
