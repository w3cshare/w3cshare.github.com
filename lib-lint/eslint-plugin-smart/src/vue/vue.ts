import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import { Linter } from 'eslint'
import pluginVue from 'eslint-plugin-vue'
import vueA11yPlugin from 'eslint-plugin-vue-a11y'
import vuePugPlugin from 'eslint-plugin-vue-pug'
import vueScopedCssPlugin from 'eslint-plugin-vue-scoped-css'

import { FILE_PATTERNS } from '../types'
import i18n from './i18n'
import rules from './rules'

const _rules = Object.fromEntries(
  Object.entries(rules).map(([key, value]) => {
    // 确保所有规则都支持自动修复
    if (typeof value === 'string') {
      return [key, [value, { fixable: true }]]
    }
    return [key, value]
  }),
)

export default defineConfigWithVueTs(
  (
    pluginVue.configs['flat/essential'] as (Linter.Config & { plugins: Record<string, unknown> })[]
  ).map(rule => {
    if (!rule.files) rule.files = FILE_PATTERNS.VUE
    return rule
  }),
  vueTsConfigs.recommended,
  (
    vueScopedCssPlugin.configs['flat/recommended'] as (Linter.Config & {
      plugins: Record<string, unknown>
    })[]
  ).map(rule => {
    if (!rule.files) rule.files = FILE_PATTERNS.VUE
    return rule
  }),
  {
    files: FILE_PATTERNS.VUE,
    name: '@iss.smart/vue-js-recommended',
    plugins: {
      'vue-a11y': vueA11yPlugin,
      'vue-pug': vuePugPlugin,
      'vue-scoped-css': vueScopedCssPlugin,
    },
    rules: _rules as unknown as Linter.RulesRecord,
  },
  i18n,
) as Linter.Config & { plugins: Record<string, unknown> }[]
