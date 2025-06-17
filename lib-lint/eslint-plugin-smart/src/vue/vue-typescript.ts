import tseslint from 'typescript-eslint'

import { FILE_PATTERNS } from '../types'
import vue2 from './vue2'

export default [
  ...vue2,
  {
    files: FILE_PATTERNS.VUE,
    languageOptions: { parserOptions: { parser: tseslint.parser } },
    name: '@iss.smart/vue-ts',
  },
]
