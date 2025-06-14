/**
 * @file Base ESLint configuration
 */

import css from '@eslint/css'
import js from '@eslint/js'
import json from '@eslint/json'
import markdown from '@eslint/markdown'
import globals from 'globals'

import {
  FILE_PATTERNS,
  IGNORE_PATTERNS,
  type LanguageConfig,
  RuleConfig,
} from '../types'
import jsRules from './rules/js'

// 基础 JavaScript/TypeScript 配置
const jsConfig: LanguageConfig & RuleConfig = {
  // extends: ['js/recommended'],
  files: FILE_PATTERNS.SCRIPT,
  name: '@iss.smart/js-recommended',
  plugins: { js },
  rules: jsRules as unknown as RuleConfig['rules'],
}

// JSON 配置
const jsonConfigs: LanguageConfig[] = ['json', 'jsonc', 'json5'].map(ext => ({
  // extends: ['json/recommended'],
  files: [`**/*.${ext}`],
  language: `json/${ext}`,
  name: `@iss.smart/${ext}-recommended`,
  plugins: { json },
}))

// Markdown 配置
const markdownConfig: LanguageConfig = {
  // extends: ['markdown/recommended'],
  files: FILE_PATTERNS.MARKDOWN,
  language: 'markdown/commonmark',
  name: '@iss.smart/markdown-recommended',
  plugins: { markdown },
}

// CSS 配置
const cssConfig: LanguageConfig = {
  // extends: ['css/recommended'],
  files: FILE_PATTERNS.STYLE,
  language: 'css/css',
  name: '@iss.smart/css-recommended',
  plugins: { css },
}

// 运行时环境配置
const globalsConfig: LanguageConfig = {
  files: FILE_PATTERNS.SCRIPT,
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
      ...globals.es2021,
    },
  },
  name: '@iss.smart/globals-recommended',
}

export default [
  jsConfig,
  markdownConfig,
  cssConfig,
  globalsConfig,
  ...jsonConfigs,
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/lib/**',
      '**/test/**',
      '**/__tests__/**',
      '**/cache/**',
      '**/coverage/**',
      '**/.**/**',
      '**/.eslintcache',
      ...IGNORE_PATTERNS,
    ],
  },

  // globalIgnores(IGNORE_PATTERNS),
]
