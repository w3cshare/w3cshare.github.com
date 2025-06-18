// import { defineConfig } from 'eslint/config'
import vuePlugin from 'eslint-plugin-vue'
import vueA11yPlugin from 'eslint-plugin-vue-a11y'
import vuePugPlugin from 'eslint-plugin-vue-pug'
import vueScopedCssPlugin from 'eslint-plugin-vue-scoped-css'
import vueParser from 'vue-eslint-parser'

import {
  vueA11yRules,
  vueCompositionRules,
  vuePerformanceRules,
  vuePugRules,
  vueScopedCssRules,
} from './rules/vue3'

const FILE_PATTERNS = {
  VUE: ['**/*.vue'],
  VUE_SCRIPT: ['**/*.{js,ts,jsx,tsx,vue}'],
}

/**
 * Vue3 ESLint 配置
 * @description 包含 Vue3 的所有规则和插件配置
 */
export default [
  {
    files: FILE_PATTERNS.VUE,
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2022,
        extraFileExtensions: ['.vue'],
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
      },
    },
    name: '@iss.smart/vue3-recommended',
    plugins: {
      vue: vuePlugin,
      'vue-a11y': vueA11yPlugin,
      'vue-pug': vuePugPlugin,
      'vue-scoped-css': vueScopedCssPlugin,
    },
    rules: {
      ...vueCompositionRules,
      ...vuePerformanceRules,
      ...vueScopedCssRules,
      ...vueA11yRules,
      ...vuePugRules,

      // Vue3 特定规则
      'vue/no-deprecated-v-on-native-modifier': 'error',
      'vue/no-deprecated-v-bind-sync': 'error',
      'vue/no-deprecated-filters': 'error',
      'vue/no-deprecated-functional-template': 'error',
      'vue/no-deprecated-html-element-is': 'error',
      'vue/no-deprecated-props-default-this': 'error',
      'vue/no-deprecated-router-link-tag-prop': 'error',
      'vue/no-deprecated-slot-attribute': 'error',
      'vue/no-deprecated-slot-scope-attribute': 'error',
      'vue/no-deprecated-v-is': 'error',
      'vue/no-deprecated-vue-config-keycodes': 'error',
      'vue/no-expose-after-await': 'error',
      'vue/no-lifecycle-after-await': 'error',
      'vue/no-watch-after-await': 'error',
      'vue/prefer-import-from-vue': 'error',
      'vue/require-explicit-emits': 'error',
      'vue/require-slots-as-functions': 'error',
      'vue/require-toggle-inside-transition': 'error',
      'vue/valid-define-emits': 'error',
      'vue/valid-define-props': 'error',
      'vue/valid-v-is': 'error',
      'vue/valid-v-memo': 'error',
    },
  },
  {
    files: FILE_PATTERNS.VUE_SCRIPT,
    name: '@iss.smart/vue3-script',
    rules: {
      // Vue3 脚本相关规则
      'vue/block-lang': [
        'error',
        {
          script: {
            lang: ['ts', 'tsx'],
          },
          style: {
            lang: ['scss', 'less'],
          },
          template: {
            lang: ['pug'],
          },
        },
      ],
      'vue/component-options-name-casing': ['error', 'PascalCase'],
      'vue/no-export-in-script-setup': 'error',
      'vue/no-ref-as-operand': 'error',
      'vue/no-setup-props-destructure': 'error',
      'vue/no-undef-properties': 'error',
      'vue/no-unused-refs': 'error',
      'vue/no-useless-v-bind': 'error',
      'vue/prefer-separate-static-class': 'error',
      'vue/require-typed-ref': 'error',
    },
  },
]
