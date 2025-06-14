// import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'

// import { tsBaseRules } from './rules/index'

const func = () => {
  ;[tseslint.configs.recommended, tseslint.configs.strict, tseslint.configs.stylistic].forEach(
    item => {
      item.forEach(element => {
        if (!element.files) element.files = ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts']
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
    files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
    name: '@iss.smart/typescript-recommended',
    rules: {
      // ...tsBaseRules,
    },
  },
)
