import { Linter } from 'eslint'
import eslintPluginJsonc from 'eslint-plugin-jsonc'

import { FILE_PATTERNS, type LanguageConfig } from '../types'
import rules from './rules'

const config = [
  ...(eslintPluginJsonc.configs['flat/recommended-with-jsonc'] as Linter.Config[]).map(item => {
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
    },
  } as LanguageConfig,
]

export default config
