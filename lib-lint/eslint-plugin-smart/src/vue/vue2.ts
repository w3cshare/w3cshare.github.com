// import { defineConfig } from 'eslint/config'
import pluginVue from 'eslint-plugin-vue'

import rules from './rules'

const func = () => {
  ;(pluginVue.configs['flat/essential'] as any).forEach(rule => {
    if (!rule.files) rule.files = ['**/*.vue', '*.vue']
  })
}
func()

export default [
  pluginVue.configs['flat/essential'],

  {
    files: ['**/*.vue', '*.vue'],
    name: '@iss.smart/vue-js-recommended',
    rules: {
      ...rules,
    },
  },
]
