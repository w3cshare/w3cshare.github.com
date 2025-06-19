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

  // {
  //   files: ['**/*.json', '**/*.jsonc', '**/*.json5', '**/package.json'],
  //   languageOptions: {
  //     parser: jsoncParser,
  //     parserOptions: {
  //       jsonSyntax: 'JSON',
  //     },
  //   },
  //   plugins: {
  //     jsonc: eslintPluginJsonc,
  //   },
  //   rules: {
  //     ...rules,
  //   },
  // } as RuleConfig & { rules: any } & { languageOptions: any } & {
  //   plugins: any
  // },
]

export default config
