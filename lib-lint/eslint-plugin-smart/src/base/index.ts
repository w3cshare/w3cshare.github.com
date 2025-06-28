/**
 * @file Base ESLint configuration
 */
import css from '@eslint/css'
import { tailwindSyntax } from '@eslint/css/syntax'
import js from '@eslint/js'
import json from '@eslint/json'
import markdown from '@eslint/markdown'
import { Linter } from 'eslint'
import { defineConfig } from 'eslint/config'
import globals from 'globals'

import { FILE_PATTERNS, IGNORE_PATTERNS } from '../types'
import jsRules from './rules/js'

// 基础 JavaScript 配置
const jsConfig: Linter.Config & { plugins?: Record<string, unknown> } = {
  files: FILE_PATTERNS.SCRIPT,
  name: '@iss.smart/js-recommended',
  plugins: { js },
  rules: Object.assign({}, js.configs.recommended.rules, {
    ...jsRules,
  }),
}

// JSON 配置
const jsonConfigs: Linter.Config & { plugins?: Record<string, unknown> }[] = [
  'json',
  'jsonc',
  'json5',
].map((ext) => ({
  extends: ['json/recommended'],
  files: [`**/*.${ext}`],
  language: `json/${ext}`,
  name: `@iss.smart/${ext}-recommended`,
  plugins: { json },
  rules: {
    ...json.configs.recommended.rules,
  },
}))

// Markdown 配置
const markdownConfig: Linter.Config & { plugins?: Record<string, unknown> } = {
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
const cssConfig: Linter.Config & { plugins?: Record<string, unknown> } = {
  files: FILE_PATTERNS.STYLE,
  language: 'css/css',
  languageOptions: {
    customSyntax: tailwindSyntax,
  },
  name: '@iss.smart/css-recommended',
  plugins: { css },
  rules: {
    ...css.configs.recommended.rules,
    'css/use-baseline': 'error',
  },
}

// 运行时环境配置
delete globals.browser['AudioWorkletGlobalScope ']
const globalsConfig: Omit<Linter.Config, 'plugins'> = {
  files: FILE_PATTERNS.SCRIPT,
  languageOptions: {
    globals: {
      AudioWorkletGlobalScope: false,
      ...globals.browser,
      ...globals.node,
      ...globals.es2021,
    },
  },
  name: '@iss.smart/globals-recommended',
}

const configs = defineConfig(
  jsConfig,
  markdownConfig,
  cssConfig,
  jsonConfigs,
  {
    ignores: IGNORE_PATTERNS,
  },
  globalsConfig,
)

export default configs
