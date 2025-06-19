// import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'

import { FILE_PATTERNS } from '../types'
import { tsBaseRules } from './rules'

const func = () => {
  ;[tseslint.configs.recommended, tseslint.configs.strict, tseslint.configs.stylistic].forEach(
    item => {
      item.forEach(element => {
        if (!element.files) element.files = [...FILE_PATTERNS.TYPESCRIPT, ...FILE_PATTERNS.REACT]
      })
    },
  )
}
func()

// doc: https://typescript-eslint.io/users/configs/
export default tseslint.config(
  tseslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  {
    files: FILE_PATTERNS.SCRIPT,
    name: '@iss.smart/typescript-recommended',
    rules: {
      ...tsBaseRules,
    },
  },
)
