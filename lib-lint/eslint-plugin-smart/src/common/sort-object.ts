/**
 * @file Object sorting configuration
 * @description 对象属性、类型、解构等排序规则配置
 */

import { Linter } from 'eslint'
import { defineConfig } from 'eslint/config'
import sort from 'eslint-plugin-sort'

import { FILE_PATTERNS } from '../types'

const sortObjectConfig: Linter.Config & { plugins: Record<string, unknown> } = {
  files: FILE_PATTERNS.SCRIPT,
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
    'sort/import-members': [
      'error',
      {
        caseSensitive: true,
        natural: true,
      },
    ],

    // 导入语句排序（由 import 插件处理）
    'sort/imports': [
      'error',
      {
        caseSensitive: true,
        groups: [
          { order: 10, type: 'side-effect' },
          { order: 40, regex: '\\.(png|jpg|svg)$' },
          { order: 20, type: 'dependency' },
          { order: 30, type: 'other' },
        ],
        natural: true,
        separator: '\n',
        typeOrder: 'last',
      },
    ],

    // 对象属性排序

    'sort/object-properties': [
      'off',
      {
        caseSensitive: true,
        natural: true,
      },
    ],
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

export default defineConfig(
  {
    files: FILE_PATTERNS.SCRIPT,
    name: '@iss.smart/sort-object-recommended',
    ...sort.configs['flat/recommended'],
  },
  sortObjectConfig,
)
