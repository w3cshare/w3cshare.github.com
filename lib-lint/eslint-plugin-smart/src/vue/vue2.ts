// import { defineConfig } from 'eslint/config'
import { Linter } from 'eslint'
import pluginVue from 'eslint-plugin-vue'

import { FILE_PATTERNS } from '../types'
import rules from './rules'

const func = () => {
  ;(pluginVue.configs['flat/essential'] as Linter.Config[]).forEach(rule => {
    if (!rule.files) rule.files = ['**/*.vue', '*.vue']
  })
}
func()

export default [
  pluginVue.configs['flat/essential'],

  {
    files: FILE_PATTERNS.VUE,
    name: '@iss.smart/vue-js-recommended',
    rules: {
      ...rules,
    },
  },
]
