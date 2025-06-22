import vueI18n from '@intlify/eslint-plugin-vue-i18n'
import { Linter } from 'eslint'
import { defineConfig } from 'eslint/config'

import { FILE_PATTERNS } from '../types'

export default defineConfig(

  /*
   * add more generic rulesets here, such as:
   * js.configs.recommended, // '@eslint/js'
   * ...vue.configs['flat/recommended'], // 'eslint-plugin-vue'
   */

  (vueI18n.configs.recommended as (Linter.Config & { plugins: Record<string, unknown> })[]).map(
    rule => {
      if (!rule.files) rule.files = FILE_PATTERNS.VUE
      return rule
    },
  ),
  {
    files: FILE_PATTERNS.VUE,
    rules: {
      // Optional.
      '@intlify/vue-i18n/no-dynamic-keys': 'error',
      '@intlify/vue-i18n/no-unused-keys': [
        'error',
        {
          extensions: ['.js', '.vue'],
        },
      ],
    },
    settings: {
      'vue-i18n': {
        /*
         * localeDir: './path/to/locales/*.{json,json5,yaml,yml}', // extension is glob formatting!
         * or
         * localeDir: {
         *   pattern: './path/to/locales/*.{json,json5,yaml,yml}', // extension is glob formatting!
         *   localeKey: 'file' // or 'path' or 'key'
         * }
         * or
         * localeDir: [
         *   {
         *     // 'file' case
         *     pattern: './path/to/locales1/*.{json,json5,yaml,yml}',
         *     localeKey: 'file'
         *   },
         *   {
         *     // 'path' case
         *     pattern: './path/to/locales2/*.{json,json5,yaml,yml}',
         *     localePattern: /^.*\/(?<locale>[A-Za-z0-9-_]+)\/.*\.(json5?|ya?ml)$/,
         *     localeKey: 'path'
         *   },
         *   {
         *     // 'key' case
         *     pattern: './path/to/locales3/*.{json,json5,yaml,yml}',
         *     localeKey: 'key'
         *   },
         * ]
         */

        /*
         * Specify the version of `vue-i18n` you are using.
         * If not specified, the message will be parsed twice.
         */
        messageSyntaxVersion: '^11.0.0',
      },
    },
  },
)
