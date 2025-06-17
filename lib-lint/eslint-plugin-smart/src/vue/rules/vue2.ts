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
      ignores: [], // 没有例外情况
      registeredComponentsOnly: false, // 检查所有组件而不仅是注册的
    },
  ],

  // 强制组件名使用多单词命名（避免与HTML元素冲突）
  'vue/multi-word-component-names': [
    'error',
    {
      ignores: ['index'], // 允许index.vue这样的文件名
    },
  ],
}

/**
 * Vue模板格式规则
 * @description 控制Vue模板的格式和排版
 */
export const vueTemplateStyleRules = {
  // 强制多行元素的闭合标签换行
  'vue/html-closing-bracket-newline': ['error', { multiline: 'always', singleline: 'never' }],

  // 强制HTML缩进为2个空格
  'vue/html-indent': ['error', 2],

  // 强制自闭合标签的格式
  'vue/html-self-closing': [
    'error',
    {
      html: {
        component: 'always', // 组件必须自闭合
        normal: 'never', // 普通HTML元素不能自闭合
        void: 'always', // 空元素必须自闭合
      },
      math: 'always', // math元素必须自闭合
      svg: 'always', // svg元素必须自闭合
    },
  ],

  // 限制每行属性的最大数量
  'vue/max-attributes-per-line': [
    'error',
    {
      multiline: {
        max: 1, // 多行元素每行最多1个属性
      },
      singleline: {
        max: 6, // 单行元素最多6个属性
      },
    },
  ],
}

/**
 * Vue组件顺序规则
 * @description 控制Vue组件选项和属性的顺序
 */
export const vueOrderRules = {
  // Vue属性顺序
  'vue/attributes-order': [
    'error',
    {
      alphabetical: false,
      order: [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        ['UNIQUE', 'SLOT'],
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT',
      ],
    },
  ],

  // Vue组件选项顺序
  'vue/order-in-components': [
    'error',
    {
      order: [
        'el',
        'name',
        'key',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        ['provide', 'inject'],
        'ROUTER_GUARDS',
        'layout',
        'middleware',
        'validate',
        'scrollToTop',
        'transition',
        'loading',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'emits',
        'setup',
        'fetch',
        'asyncData',
        'data',
        'head',
        'computed',
        'watch',
        'watchQuery',
        'LIFECYCLE_HOOKS',
        'methods',
        ['template', 'render'],
        'renderError',
      ],
    },
  ],
}

/**
 * Vue核心规则
 * @description Vue项目的基础规则
 */
export const vueCoreRules = {
  /*
   * 禁用vue/comment-directive规则（允许使用特定注释）
   * 'vue/comment-directive': 'off',
   */

  // 防止JSX中未使用的变量
  'vue/jsx-uses-vars': 'error',

  // 禁止使用已废弃的scope属性
  'vue/no-deprecated-scope-attribute': 'error',

  // 禁止重复的属性继承
  'vue/no-duplicate-attr-inheritance': 'error',

  // 禁止直接修改props
  'vue/no-mutating-props': 'error',

  // 禁止使用保留的组件名
  'vue/no-reserved-component-names': 'error',

  // 禁止模板中的变量名与作用域变量冲突
  'vue/no-template-shadow': 'error',

  // 禁止注册但未使用的组件
  'vue/no-unused-components': 'error',

  // 禁止在同一个元素上同时使用v-if和v-for
  'vue/no-use-v-if-with-v-for': 'error',

  // 强制动态组件使用is属性
  'vue/require-component-is': 'error',

  // 强制props有默认值
  'vue/require-default-prop': 'error',

  // 强制props有类型定义
  'vue/require-prop-types': 'error',

  // 强制v-for指令使用key
  'vue/require-v-for-key': 'error',

  /*
   * 防止<script setup>中未使用的变量
   * 'vue/script-setup-uses-vars': 'error',
   * 验证v-for指令的正确性
   */
  'vue/valid-v-for': 'error',
}

export default {
  ...vueNamingRules,
  ...vueTemplateStyleRules,
  ...vueTemplateRules,
  ...vueOrderRules,
  ...vueCoreRules,
}
