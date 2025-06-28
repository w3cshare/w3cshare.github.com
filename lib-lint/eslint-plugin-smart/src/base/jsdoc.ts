import { Linter } from 'eslint'
import { defineConfig } from 'eslint/config'
import jsdoc from 'eslint-plugin-jsdoc'

import { FILE_PATTERNS } from '../types'

const config = defineConfig(

  // configuration included in plugin
  {
    ...jsdoc.configs['flat/recommended'],
    files: FILE_PATTERNS.SCRIPT,
  } as Linter.Config & { plugins?: Record<string, unknown> },

  {
    files: FILE_PATTERNS.SCRIPT,
    plugins: {
      jsdoc,
    } as Linter.ParserOptions['plugins'],
    rules: {
      'jsdoc/require-description': 'warn',
    },
  },
)

export default config
