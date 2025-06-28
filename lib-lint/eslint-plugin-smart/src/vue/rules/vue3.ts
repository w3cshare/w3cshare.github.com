/**
 * Vue3 组合式 API 规则
 * @description Vue3 Composition API 相关规则
 */
export const vueCompositionRules = {
  // 强制组件必须使用 setup 语法糖
  'vue/component-api-style': ['error', ['script-setup']],

  // 强制 defineEmits 声明类型
  'vue/define-emits-declaration': ['error', 'type-based'],

  // 强制组件选项的定义顺序
  'vue/define-macros-order': [
    'error',
    {
      order: ['defineProps', 'defineEmits', 'defineSlots'],
    },
  ],

  // 强制响应式变量命名规范
  'vue/define-props-declaration': ['error', 'type-based'],

  // 强制 ref 解构的一致性
  'vue/no-ref-object-reactivity-loss': 'error',

  // 禁止在 setup 中使用 this
  'vue/no-setup-props-reactivity-loss': 'error',
}

/**
 * Vue3 性能优化规则
 * @description Vue3 性能相关的最佳实践
 */
export const vuePerformanceRules = {
  /*
   * 强制使用 v-show 而不是 v-if，当频繁切换时
   * 'vue/prefer-show-over-if': 'warn',
   */

  // 禁止不必要的模板字符串
  'vue/no-useless-template-attributes': 'error',

  // 禁止不必要的 v-bind
  'vue/no-useless-v-bind': 'error',

  // 强制使用 defineOptions 而不是 export default
  'vue/prefer-define-options': 'error',

  // 强制使用 v-bind 的对象语法
  'vue/prefer-prop-type-boolean-first': 'error',
}

/**
 * Vue Scoped CSS 规则
 * @description Vue 样式作用域相关规则
 */
export const vueScopedCssRules = {
  'vue-scoped-css/enforce-style-type': ['error', { allows: ['scoped'] }],
  'vue-scoped-css/no-unused-selector': 'error',
  'vue-scoped-css/require-scoped': 'error',
}

/**
 * Vue 可访问性规则
 * @description Vue 可访问性(A11Y)相关规则
 */
export const vueA11yRules = {
  'vue-a11y/alt-text': 'error',
  'vue-a11y/anchor-has-content': 'error',
  'vue-a11y/click-events-have-key-events': 'error',
  'vue-a11y/label-has-for': 'error',
  'vue-a11y/no-autofocus': 'error',
  'vue-a11y/no-onchange': 'error',
}

/**
 * Vue Pug 模板规则
 * @description Vue Pug 模板语法相关规则
 */
export const vuePugRules = {
  'vue-pug/no-mixing-indent-style': 'error',
  'vue-pug/no-trailing-spaces': 'error',
  'vue-pug/quotes': ['error', 'single'],
}

/**
 * Vue3 脚本相关规则
 * @description Vue3 脚本相关规则
 */
export const vue3ScriptRules = {
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

  // 'vue/no-setup-props-destructure': 'error',
  'vue/no-undef-properties': 'error',
  'vue/no-unused-refs': 'error',
  'vue/no-useless-v-bind': 'error',
  'vue/prefer-separate-static-class': 'error',
  'vue/require-typed-ref': 'error',
}

export const vue3TemplateRules = {
  // 'vue/no-deprecated-filters': 'error',
  'vue/no-deprecated-functional-template': 'error',
  'vue/no-deprecated-html-element-is': 'error',
  'vue/no-deprecated-props-default-this': 'error',
  'vue/no-deprecated-router-link-tag-prop': 'error',
  'vue/no-deprecated-slot-attribute': 'error',
  'vue/no-deprecated-slot-scope-attribute': 'error',
  'vue/no-deprecated-v-bind-sync': 'error',
  'vue/no-deprecated-v-is': 'error',
}

// vue3特定规则
export const vue3Rules = {
  // Vue3 特定规则
  'vue/no-deprecated-v-on-native-modifier': 'error',
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
}

export default {
  ...vueA11yRules,
  ...vueCompositionRules,

  ...vuePugRules,
  ...vueScopedCssRules,
  ...vuePerformanceRules,
  ...vue3ScriptRules,
  ...vue3TemplateRules,
  ...vue3Rules,
}
