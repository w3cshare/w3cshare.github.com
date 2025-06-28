import { Linter } from 'eslint'
import { defineConfig } from 'eslint/config'
import globals from 'globals'

import { FILE_PATTERNS } from '../types'
import { nestFrameworkRules } from './rules'

const nestjsFlatConfig = {
  files: FILE_PATTERNS.TYPESCRIPT,
  languageOptions: {
    globals: {
      node: true, // 添加Node.js全局变量
      ...globals.node,
      ...globals.jest,
    },
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
  rules: {
    ...nestFrameworkRules,
  } as unknown as Linter.RulesRecord,
} as unknown

export default defineConfig(nestjsFlatConfig, {
  // 为测试文件添加Jest环境配置
  files: FILE_PATTERNS.JEST,
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
})
