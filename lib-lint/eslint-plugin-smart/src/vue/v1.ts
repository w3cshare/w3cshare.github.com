/*
 * import { defineConfig } from 'eslint/config'
 * import { defineConfig } from 'eslint/config'
 */
import { Linter } from 'eslint'
import { defineConfig } from 'eslint/config'
import pluginVue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'

import rules from './rules'

export default defineConfig(
  (
    pluginVue.configs['flat/essential'] as (Linter.Config & { plugins: Record<string, unknown> })[]
  ).map((rule) => ({
    ...rule,
    files: ['**/*.vue', '*.vue'],
  })),

  {
    files: ['**/*.vue', '*.vue'],
    name: '@iss.smart/vue-es-recommended',
    rules: {
      ...rules,
    } as unknown as Linter.RulesRecord,
  },

  // {
  //   files: ['**/*.vue', '*.vue'],
  //   plugins: {
  //     vue: pluginVue,
  //   },
  //   languageOptions: {
  //     parser: vueParser,
  //     parserOptions: {
  //       parser: tseslint.parser,
  //       ecmaVersion: 'latest',
  //       sourceType: 'module',
  //       extraFileExtensions: ['.vue'],
  //     },
  //   },
  //   processor: pluginVue.processors['.vue'],
  //   rules: {
  //     ...pluginVue.configs.base.rules,
  //     ...pluginVue.configs.essential.rules,
  //     ...vueTemplateRules
  //   },
  // },
  {
    files: ['**/*.vue', '*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
    name: '@iss.smart/vue-typescript-recommended',
  },
)
