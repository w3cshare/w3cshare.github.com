import tseslint from 'typescript-eslint'

import vue2 from './vue2'

export default [
  ...vue2,
  {
    files: ['**/*.vue', '*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
    name: '@iss.smart/vue-ts',
  },
]
