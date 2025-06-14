/**
 * Vue3 组合式 API 规则
 * @description Vue3 Composition API 相关规则
 */
export const vueCompositionRules = {
  // 强制组件必须使用 setup 语法糖
  'vue/component-api-style': ['error', ['script-setup']],

  // 强制组件选项的定义顺序
  'vue/define-macros-order': [
    'error',
    {
      order: ['defineProps', 'defineEmits', 'defineSlots'],
    },
  ],

  // 禁止在 setup 中使用 this
  'vue/no-setup-props-reactivity-loss': 'error',

  // 强制 ref 解构的一致性
  'vue/no-ref-object-reactivity-loss': 'error',

  // 强制响应式变量命名规范
  'vue/define-props-declaration': ['error', 'type-based'],

  // 强制 defineEmits 声明类型
  'vue/define-emits-declaration': ['error', 'type-based'],
}

/**
 * Vue模板语法规则
 * @description Vue模板相关规则
 */
export const vueTemplateRules = {
  // 禁止在模板中使用未定义的变量
  'vue/no-unused-vars': 'error',

  // 避免使用v-html指令以防止XSS攻击
  'vue/no-v-html': 'warn',

  // 禁止在模板中使用this
  'vue/this-in-template': ['error', 'never'],

  // 强制模板中的属性顺序
  'vue/attributes-order': [
    'error',
    {
      order: [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        ['UNIQUE', 'SLOT'],
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'EVENTS',
        'CONTENT',
      ],
    },
  ],

  // 强制使用 v-bind 的简写语法
  'vue/v-bind-style': ['error', 'shorthand'],

  // 强制使用 v-on 的简写语法
  'vue/v-on-style': ['error', 'shorthand'],

  // 强制使用 v-slot 的简写语法
  'vue/v-slot-style': [
    'error',
    {
      atComponent: 'shorthand',
      default: 'shorthand',
      named: 'shorthand',
    },
  ],
}

/**
 * Vue组件命名规则
 * @description Vue组件的命名规范
 */
export const vueNamingRules = {
  // 强制组件名在模板中使用kebab-case命名
  'vue/component-name-in-template-casing': [
    'error',
    'kebab-case',
    {
      ignores: [],
      registeredComponentsOnly: false,
    },
  ],

  // 强制组件名使用多单词命名（避免与HTML元素冲突）
  'vue/multi-word-component-names': [
    'error',
    {
      ignores: ['index'],
    },
  ],

  // 强制 props 命名规范
  'vue/prop-name-casing': ['error', 'camelCase'],
}

/**
 * Vue模板格式规则
 * @description 控制Vue模板的格式和排版
 */
export const vueTemplateStyleRules = {
  // 强制多行元素的闭合标签换行
  'vue/html-closing-bracket-newline': [
    'error',
    {
      multiline: 'always',
      singleline: 'never',
    },
  ],

  // 强制HTML缩进为2个空格
  'vue/html-indent': ['error', 2],

  // 强制自闭合标签的格式
  'vue/html-self-closing': [
    'error',
    {
      html: {
        component: 'always',
        normal: 'never',
        void: 'always',
      },
      math: 'always',
      svg: 'always',
    },
  ],

  // 限制每行属性的最大数量
  'vue/max-attributes-per-line': [
    'error',
    {
      multiline: {
        max: 1,
      },
      singleline: {
        max: 3,
      },
    },
  ],

  // 强制标签闭合括号的位置
  'vue/html-closing-bracket-spacing': [
    'error',
    {
      endTag: 'never',
      selfClosingTag: 'always',
      startTag: 'never',
    },
  ],
}

/**
 * Vue3 性能优化规则
 * @description Vue3 性能相关的最佳实践
 */
export const vuePerformanceRules = {
  // 禁止不必要的 v-bind
  'vue/no-useless-v-bind': 'error',

  /*
   * 强制使用 v-show 而不是 v-if，当频繁切换时
   * 'vue/prefer-show-over-if': 'warn',
   */

  // 禁止不必要的模板字符串
  'vue/no-useless-template-attributes': 'error',

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

export default {
  ...vueTemplateRules,
  ...vueTemplateStyleRules,
  ...vueNamingRules,

  // ...vueA11yRules,
  ...vueCompositionRules,

  /*
   * ...vuePugRules,
   * ...vueScopedCssRules,
   */
  ...vuePerformanceRules,
}
