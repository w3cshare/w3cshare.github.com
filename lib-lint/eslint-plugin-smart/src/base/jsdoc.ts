import jsdoc from 'eslint-plugin-jsdoc'

import { FILE_PATTERNS } from '../types'

const config = [
  // configuration included in plugin
  {
    ...jsdoc.configs['flat/recommended'],
    files: FILE_PATTERNS.SCRIPT,
  },

  // other configuration objects...
  {
    files: FILE_PATTERNS.SCRIPT,
    plugins: {
      jsdoc,
    },
    rules: {
      'jsdoc/require-description': 'warn',
    },
  },
]

export default config
