/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-10 11:05:00
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-10 14:10:24
 * @FilePath: /FullStack/lint/eslint-plugin-smarts/src/rules/recommended-rules-vue.ts
 * @Description: Vue项目专用ESLint规则集
 */

/**
 * Vue项目专用ESLint规则集
 * 包含Vue 2.x和Vue 3.x的最佳实践规则
 */
export default {
  // Vue核心规则
  'vue/comment-directive': 'off',
  'vue/jsx-uses-vars': 'error',
  'vue/script-setup-uses-vars': 'error',
  'vue/no-mutating-props': 'error', // 禁止直接修改props属性
  'vue/no-use-v-if-with-v-for': 'error', // 禁止同时使用v-if和v-for
  'vue/require-v-for-key': 'error', // 强制v-for指令使用key属性
  'vue/valid-v-for': 'error', // 验证v-for指令格式正确性
  'vue/require-component-is': 'error', // 强制组件使用is属性时格式正确
  'vue/no-duplicate-attr-inheritance': 'error', // 禁止重复的属性继承

  // Vue组件命名规则
  'vue/multi-word-component-names': [
    'error',
    {
      ignores: ['index'] // 允许index作为单单词组件名
    }
  ], // 强制多单词组件命名
  'vue/component-name-in-template-casing': [
    'error',
    'kebab-case',
    {
      registeredComponentsOnly: false, // 对所有组件生效
      ignores: [] // 无例外情况
    }
  ], // 强制模板中使用kebab-case命名
  'vue/no-deprecated-scope-attribute': 'error',
  'vue/require-default-prop': 'error',
  'vue/require-prop-types': 'error',
  'vue/no-reserved-component-names': 'error',
  'vue/no-unused-components': 'error',
  'vue/no-unused-vars': 'error',
  'vue/no-template-shadow': 'error',

  // Vue组件命名规则
  'vue/multi-word-component-names': [
    'error',
    {
      ignores: ['index'], // 需要忽略的组件名
    },
  ],
  'vue/component-name-in-template-casing': [
    'error',
    'kebab-case',
    {
      registeredComponentsOnly: false,
      ignores: [],
    },
  ],

  // Vue模板规则
  'vue/html-self-closing': [
    'error',
    {
      html: {
        void: 'always',
        normal: 'never',
        component: 'always',
      },
      svg: 'always',
      math: 'always',
    },
  ],
  'vue/max-attributes-per-line': [
    'error',
    {
      singleline: {
        max: 3,
      },
      multiline: {
        max: 1,
      },
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

  // Vue属性顺序
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
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT',
      ],
      alphabetical: false,
    },
  ],
};
