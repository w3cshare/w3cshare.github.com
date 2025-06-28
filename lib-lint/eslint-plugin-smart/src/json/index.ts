import { Linter } from 'eslint'
import { defineConfig } from 'eslint/config'
import eslintPluginJsonc from 'eslint-plugin-jsonc'

import { FILE_PATTERNS } from '../types'
import rules from './rules'

export default defineConfig(
  (eslintPluginJsonc.configs['flat/recommended-with-jsonc'] as Linter.Config[]).map(item => {
    if (!item.files) {
      item.files = FILE_PATTERNS.JSON
    }

    return item
  }) as Linter.Config & { plugins: Linter.ParserOptions }[],
  {
    files: FILE_PATTERNS.JSON,
    name: '@iss.smart/json-sort',
    rules: {
      ...rules,
    } as unknown as Linter.RulesRecord,
  },
)
