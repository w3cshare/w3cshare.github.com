/**
 * @file Object sorting configuration
 * @description 对象属性、类型、解构等排序规则配置
 */

// import { defineConfig } from 'eslint/config'
import sort from 'eslint-plugin-sort'

import { FILE_PATTERNS, type RuleConfig } from '../types'

const sortObjectConfig: RuleConfig = {
  files: FILE_PATTERNS.SCRIPT.filter(pattern => !pattern.includes('*.vue')),
  name: '@iss.smart/sort-object',
  plugins: { sort },
  rules: {
    // 解构属性排序
    'sort/destructuring-properties': [
      'error',
      {
        caseSensitive: true,
        natural: true,
      },
    ],

    // 导出成员排序
    'sort/export-members': [
      'error',
      {
        caseSensitive: true,
        natural: true,
      },
    ],

    // 导出语句排序
    'sort/exports': [
      'error',
      {
        caseSensitive: true,
        natural: true,
      },
    ],

    // 导入成员排序（由 import 插件处理）
    'sort/import-members': 'off',

    // 导入语句排序（由 import 插件处理）
    'sort/imports': 'off',

    // 对象属性排序
    'sort/object-properties': 'off',

    /*
     * 'sort/object-properties': [
     *   'error',
     *   {
     *     caseSensitive: true,
     *     natural: true,
     *   },
     * ],
     * 字符串枚举排序
     */
    'sort/string-enums': [
      'error',
      {
        caseSensitive: true,
        natural: true,
      },
    ],

    // 字符串联合类型排序
    'sort/string-unions': [
      'error',
      {
        caseSensitive: true,
        natural: true,
      },
    ],

    // 类型属性排序
    'sort/type-properties': [
      'error',
      {
        caseSensitive: true,
        natural: true,
      },
    ],
  },
}

export default [
  {
    files: FILE_PATTERNS.SCRIPT,
    name: '@iss.smart/sort-object-recommended',
    ...sort.configs['flat/recommended'],
  },
  sortObjectConfig,
]
