/**
 * @file Import sorting configuration
 * @description 导入语句排序、分组、空行等规则配置
 */

// import { defineConfig } from 'eslint/config'
import pluginImport from 'eslint-plugin-import'

import { FILE_PATTERNS, type RuleConfig } from '../types'

const importSortConfig: RuleConfig = {
  files: FILE_PATTERNS.SCRIPT,
  name: '@iss.smart/sort-import',
  plugins: { import: pluginImport },
  rules: {
    // 导入语句必须在文件顶部
    'import/first': 'error',

    // 导入语句后的空行
    'import/newline-after-import': [
      'error',
      {
        count: 1,
      },
    ],

    // 禁止重复导入
    'import/no-duplicates': 'error',

    // 禁止无关依赖（可根据项目需要开启）
    'import/no-extraneous-dependencies': [
      'warn',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],

    // 禁止未解析的模块
    'import/no-unresolved': [
      'error',
      {
        amd: false,
        caseSensitive: true,
        commonjs: true,
      },
    ],

    // 导入排序规则
    'import/order': [
      'error',
      {
        // 按字母表顺序排序
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },

        // 导入分组顺序
        groups: [
          'builtin', // Node.js 内置模块
          'external', // 外部依赖
          'internal', // 内部模块
          ['parent', 'sibling', 'index'], // 相对路径导入
          'object', // 对象导入
          'type', // 类型导入
        ],

        // 分组之间添加空行
        'newlines-between': 'always',

        // 路径别名配置（如果有使用）
        pathGroups: [
          {
            group: 'internal',
            pattern: '@/**',
            position: 'before',
          },
        ],

        // 未分配的导入发出警告
        warnOnUnassignedImports: true,
      },
    ],
  },
}

export default [importSortConfig]
