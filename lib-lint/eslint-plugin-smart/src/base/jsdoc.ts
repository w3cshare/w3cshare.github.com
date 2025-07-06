import { Linter } from 'eslint'
import { defineConfig } from 'eslint/config'
import jsdoc from 'eslint-plugin-jsdoc'

import { FILE_PATTERNS } from '../types'

const config = defineConfig(
  {
    ...jsdoc.configs['flat/recommended'],
    files: FILE_PATTERNS.SCRIPT,
  } as Linter.Config & { plugins?: Record<string, unknown> },

  {
    files: FILE_PATTERNS.SCRIPT,
    plugins: {
      jsdoc,
    },
    rules: {
      'jsdoc/require-description': 'warn',
    },
  } as Linter.Config & { plugins?: Record<string, unknown> },
)

export default config
