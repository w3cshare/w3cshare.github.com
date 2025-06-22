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
      // ...rules,
      ...Object.fromEntries(
        Object.entries(rules).map(([key, value]) => {
          // 确保所有规则都支持自动修复
          if (typeof value === 'string') {
            return [key, [value, { fixable: true }]]
          }
          return [key, value]
        }),
      ),
    } as unknown as Linter.RulesRecord,
  },
) as Linter.Config & { plugins: Record<string, unknown> }[]
