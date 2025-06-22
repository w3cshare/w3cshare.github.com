/**
 * @file Base ESLint configuration
 */
import css from '@eslint/css'
import js from '@eslint/js'
import json from '@eslint/json'
import markdown from '@eslint/markdown'
import { defineConfig } from 'eslint/config'
import globals from 'globals'

import { FILE_PATTERNS, IGNORE_PATTERNS, type LanguageConfig, RuleConfig } from '../types'
import jsRules from './rules/js'

// 基础 JavaScript/TypeScript 配置
const jsConfig: LanguageConfig & RuleConfig = {
  // extends: ['js/recommended'],
  files: FILE_PATTERNS.SCRIPT,
  name: '@iss.smart/js-recommended',
  plugins: { js },
  rules: {
    ...js.configs.recommended.rules,
    ...jsRules,
  } as unknown as RuleConfig['rules'],
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
const markdownConfig: LanguageConfig & RuleConfig = {
  // extends: ['markdown/recommended'],
  files: FILE_PATTERNS.MARKDOWN,
  language: 'markdown/commonmark',
  name: '@iss.smart/markdown-recommended',
  plugins: { markdown },
  rules: {
    'markdown/fenced-code-language': 'off',
    'markdown/no-missing-label-refs': 'off',
    'markdown/no-multiple-h1': 'off',
  },
}

// CSS 配置
const cssConfig: LanguageConfig & RuleConfig = {
  // extends: ['css/recommended'],
  files: FILE_PATTERNS.STYLE,
  language: 'css/css',
  name: '@iss.smart/css-recommended',
  plugins: { css },
  rules: {
    ...css.configs.recommended.rules,
  },
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

const configs = defineConfig(
  jsConfig,
  markdown.configs.recommended,
  markdownConfig,
  cssConfig,
  jsonConfigs,
  {
    ignores: IGNORE_PATTERNS,
  },
  globalsConfig,
)

export default configs
