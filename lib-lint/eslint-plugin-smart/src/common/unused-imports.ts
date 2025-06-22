/**
 * @file Unused imports and variables configuration
 */

import { defineConfig } from 'eslint/config'
import pluginUnusedImports from 'eslint-plugin-unused-imports'

import { FILE_PATTERNS, type RuleConfig } from '../types'

// JavaScript/TypeScript 未使用导入规则
const unusedImportsConfig: RuleConfig = {
  files: FILE_PATTERNS.SCRIPT,
  name: '@iss.smart/unused-imports',
  plugins: {
    'unused-imports': pluginUnusedImports,
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-empty-function': [
      'error',
      {
        allow: ['arrowFunctions', 'constructors'],
      },
    ],
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',

    // 禁止未使用的表达式
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-unused-private-class-members': 'error',
    'no-unused-vars': 'off',
    'no-useless-computed-key': 'error',

    'no-useless-constructor': 'error',

    'no-useless-rename': 'error',
    'no-useless-return': 'error',

    // 自动移除未使用的导入
    'unused-imports/no-unused-imports': 'error',

    // 处理未使用的变量和参数
    'unused-imports/no-unused-vars': [
      'error',
      {
        // 参数检查方式：在使用之后的参数会被检查
        args: 'after-used',

        // 忽略以下划线开头的参数
        argsIgnorePattern: '^_',

        // 忽略以下划线开头的 catch 错误参数
        caughtErrorsIgnorePattern: '^_',

        // 忽略以下划线开头的解构数组参数
        destructuredArrayIgnorePattern: '^_',

        // 忽略剩余参数
        ignoreRestSiblings: true,

        // 检查所有变量
        vars: 'all',

        // 忽略以下划线开头的变量
        varsIgnorePattern: '^_',
      },
    ],
  },
}

export default defineConfig(unusedImportsConfig)
