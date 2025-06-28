import { Linter } from 'eslint'
import { defineConfig } from 'eslint/config'
import pluginVue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'

import { FILE_PATTERNS } from '../types'
import rules from './rules'

export default defineConfig(
  (
    pluginVue.configs['flat/essential'] as (Linter.Config & { plugins: Record<string, unknown> })[]
  ).map((rule) => {
    if (!rule.files) rule.files = FILE_PATTERNS.VUE
    return rule
  }),

  {
    files: FILE_PATTERNS.VUE,
    languageOptions: { parserOptions: { extraFileExtensions: ['.vue'], parser: tseslint.parser } },
    name: '@iss.smart/vue-js-recommended',

    rules: {
      ...rules,
    } as unknown as Linter.RulesRecord,
  },
)
