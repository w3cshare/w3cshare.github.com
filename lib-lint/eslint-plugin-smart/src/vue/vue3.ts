// import { defineConfig } from 'eslint/config'
import vuePlugin from 'eslint-plugin-vue'
import vueA11yPlugin from 'eslint-plugin-vue-a11y'
import vuePugPlugin from 'eslint-plugin-vue-pug'
import vueScopedCssPlugin from 'eslint-plugin-vue-scoped-css'
import vueParser from 'vue-eslint-parser'

import { FILE_PATTERNS } from '../types'
import {
  vueA11yRules,
  vueCompositionRules,
  vuePerformanceRules,
  vuePugRules,
  vueScopedCssRules,
} from './rules/vue3'

/**
 * Vue3 ESLint 配置
 * @description 包含 Vue3 的所有规则和插件配置
 */
export default [
  {
    files: FILE_PATTERNS.VUE,
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2022,
        extraFileExtensions: ['.vue'],
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
      },
    },
    name: '@iss.smart/vue3-recommended',
    plugins: {
      vue: vuePlugin,
      'vue-a11y': vueA11yPlugin,
      'vue-pug': vuePugPlugin,
      'vue-scoped-css': vueScopedCssPlugin,
    },
    rules: {
      ...vueCompositionRules,
      ...vuePerformanceRules,
      ...vueScopedCssRules,
      ...vueA11yRules,
      ...vuePugRules,
    },
  },
]
