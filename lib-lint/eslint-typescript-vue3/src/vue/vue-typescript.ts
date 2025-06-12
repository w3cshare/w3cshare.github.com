import tseslint from 'typescript-eslint'

import vue from './index'

export default [
  ...vue,
  {
    files: ['**/*.vue', '*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
    name: '@iss.smart/vue-ts',
  },
]
