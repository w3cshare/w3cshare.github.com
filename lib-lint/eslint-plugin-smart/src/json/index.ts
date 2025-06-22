import { Linter } from 'eslint'
import { defineConfig } from 'eslint/config'
import eslintPluginJsonc from 'eslint-plugin-jsonc'

import { FILE_PATTERNS, type RuleConfig } from '../types'
import rules from './rules'

const config = [
  (eslintPluginJsonc.configs['flat/recommended-with-jsonc'] as Linter.Config[]).map(item => {
    if (!item.files) {
      item.files = FILE_PATTERNS.JSON
    }

    return item
  }),
  {
    files: FILE_PATTERNS.JSON,
    name: '@iss.smart/json-sort',
    rules: {
      ...rules,
    } as unknown as RuleConfig['rules'],
  } as unknown,
]

export default defineConfig(config)
