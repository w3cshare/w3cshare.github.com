// import { defineConfig } from 'eslint/config'
import eslintPluginJsonc from 'eslint-plugin-jsonc'

import { FILE_PATTERNS, type RuleConfig } from '../types'

/**
 * JSON语法规则
 * @description 基础JSON语法和格式规则
 */
const jsonSyntaxRules = {
  'jsonc/array-bracket-spacing': ['error', 'never'],
  'jsonc/comma-dangle': ['error', 'never'],
  'jsonc/comma-style': ['error', 'last'],
  'jsonc/indent': ['error', 2],
  'jsonc/no-comments': 'off',
  'jsonc/object-curly-spacing': ['error', 'always'],
  'jsonc/quote-props': ['error', 'always'],
  'jsonc/quotes': ['error', 'double'],
}

/**
 * JSON排序规则 - 数组
 * @description 针对JSON数组的排序规则
 */
const jsonArraySortRules = {
  'jsonc/sort-array-values': [
    'error',
    {
      order: { type: 'asc' },
      pathPattern: '.*',
    },
  ],
}

/**
 * JSON排序规则 - package.json
 * @description 针对package.json文件的排序规则
 */
const packageJsonSortRules = {
  'jsonc/sort-keys': [
    'error',
    {
      order: [
        'name',
        'version',
        'private',
        'packageManager',
        'displayName',
        'description',
        'type',
        'keywords',
        'homepage',
        'bugs',
        'license',
        'author',
        'contributors',
        'funding',
        'files',
        'main',
        'module',
        'types',
        'exports',
        'imports',
        'scripts',
        'peerDependencies',
        'peerDependenciesMeta',
        'dependencies',
        'optionalDependencies',
        'devDependencies',
        'engines',
        'config',
        'overrides',
        'pnpm',
        'husky',
        'lint-staged',
        'eslintConfig',
      ],
      pathPattern: '^$',
    },
    {
      order: { type: 'asc' },
      pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
    },
    {
      order: ['start', 'dev', 'build', 'serve', 'test', 'lint', 'format', 'prepare'],
      pathPattern: '^scripts$',
    },
    {
      order: ['types', 'import', 'require'],
      pathPattern: '^.*$',
    },
    {
      order: { type: 'asc' },
      pathPattern: '.*',
    },
  ],
}

;(eslintPluginJsonc.configs['flat/recommended-with-jsonc'] as any).forEach(item => {
  if (!item.files) {
    item.files = FILE_PATTERNS.JSON
  }
})

export default [
  ...(eslintPluginJsonc.configs['flat/recommended-with-jsonc'] as any[]),
  {
    files: FILE_PATTERNS.JSON,
    name: '@iss.smart/sort-json',
    rules: {
      ...jsonSyntaxRules,
      ...jsonArraySortRules,
      ...packageJsonSortRules,
    },
  } as RuleConfig & { rules: any },
]
