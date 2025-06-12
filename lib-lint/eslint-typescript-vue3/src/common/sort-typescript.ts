/**
 * @file Object sorting configuration
 */

// import { defineConfig } from 'eslint/config'
import typescriptSortKeysPlugin from 'eslint-plugin-typescript-sort-keys'

export default [
  {
    files: ['**/*.ts', 'src/**/*.{ts}'],
    name: '@iss.smart/sort-typescript',
    plugins: {
      'typescript-sort-keys': typescriptSortKeysPlugin,
    },
    rules: {
      'typescript-sort-keys/interface': 'error',
      'typescript-sort-keys/string-enum': 'error',
    },
  },
]
