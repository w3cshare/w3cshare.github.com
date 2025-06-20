import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import { Linter } from 'eslint'
import pluginVue from 'eslint-plugin-vue'

import { FILE_PATTERNS } from '../types'
import rules from './rules'

export default defineConfigWithVueTs(
  (
    pluginVue.configs['flat/essential'] as (Linter.Config & { plugins: Record<string, unknown> })[]
  ).map(rule => {
    if (!rule.files) rule.files = FILE_PATTERNS.VUE
    return rule
  }),
  vueTsConfigs.recommended,
  {
    files: FILE_PATTERNS.VUE,
    name: '@iss.smart/vue-js-recommended',
    rules: {
      ...rules,
      '@typescript-eslint/no-unused-vars': 'off',
    } as unknown as Linter.RulesRecord,
  },
) as any
