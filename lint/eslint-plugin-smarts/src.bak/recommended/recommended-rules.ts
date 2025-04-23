/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2023-10-22 22:21:12
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-10 10:52:12
 * @FilePath: /FullStack/lint/eslint-plugin-smarts/src/rules/recommended-rules.ts
 * @Description: eslint 代码规范 for eslint-plugin-smarts
 */

import recommendedRulesAnt from './recommended-rules-ant'
import recommendedRulesExpand from './recommended-rules-expand'
import recommendedRulesHaWei from './recommended-rules-haWei'

export default {
  // 数组/对象排序 annotation
  'sort-annotation/sort-keys': 'error',

  'sort-annotation/sort': 'error',

  // sort for imports
  'simple-import-sort/imports': [
    'error',
    {
      groups: [
        // react放在首行
        ['^react', '^vue', '^ant-design-vue', '^@?\\w'],

        // 内部导入
        ['^(@|components)(/.*|$)'],

        // 父级导入. 把 `..` 放在最后.
        ['^\\.\\.(?!/?$)', '^\\.\\./?$'],

        // 同级导入. 把同一个文件夹.放在最后
        ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],

        // 样式导入.
        ['^.+\\.?(css)$'],

        // 带有副作用导入，比如import 'a.css'这种.
        ['^\\u0000'],
      ],
    },
  ],
  'simple-import-sort/exports': 'error',

  // unused vars and imports
  'no-unused-vars': 'off',
  'unused-vars-and-imports/no-unused-imports': 'error',
  'unused-vars-and-imports/no-unused-vars': 'error',

  /**
   * @description: vue2生命周期顺序
   * [vue](https://eslint.vuejs.org/rules/)
   * https://www.freesion.com/article/35501016814/
   */
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

  // 组件使用中横杠
  'vue/component-name-in-template-casing': [
    'error',
    'kebab-case',
    {
      registeredComponentsOnly: false,
      ignores: [],
    },
  ],

  // 防止 <script setup> 使用的变量 <template> 被标记为未使用
  'vue/script-setup-uses-vars': 'error',

  // 不允许组件 prop 的改变
  'vue/no-mutating-props': 'off',

  // vue attributes order
  'vue/attributes-order': [
    'error',
    {
      order: [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        'UNIQUE',
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT',
      ],
    },
  ],

  // TODO
  'vue/comment-directive': 'off',

  /*
   * typeScript (https://typescript-eslint.io/rules)
   * "@typescript-eslint/no-unused-vars": "error", // 禁止定义未使用的变量
   * "@typescript-eslint/prefer-ts-expect-error": "error", // 禁止使用 @ts-ignore
   */
  '@typescript-eslint/no-explicit-any': 'warn', // 禁止使用 any 类型
  /*
   * "@typescript-eslint/no-non-null-assertion": "off",
   * "@typescript-eslint/no-namespace": "off", // 禁止使用自定义 TypeScript 模块和命名空间。
   * "@typescript-eslint/semi": "off", // 禁止使用分号
   */
  '@typescript-eslint/no-unused-vars': 'off', // 禁止定义未使用的变量

  /*
   * TODO
   * https://www.51cto.com/article/706099.html
   * 代码检查的问题
   */
  'require-await': 'error',

  /*
   * https://qa.1r1g.com/sf/ask/3091924391/
   * indent: ['error', 2, { SwitchCase: 1 }],
   */

  // 'linebreak-style': ['error', 'unix'],
  quotes: ['error', 'single'],
  semi: ['error', 'never'],

  // 1、
  // vue 路由 path 不建议驼峰
  // 2、
  // axios 在页面中不允许直接使用
  // 3、
  // template 中未定义变量要报错提示
  // const uploadSize = uplodConfig.name + `（${(uplodConfig.size / 1024).toFixed(2)}KB）`
  // // 四舍五入有三种写法
  // // 向上四舍五入
  // let value = Math.round(value*100)/100
  // // 向下四舍五入
  // let value = Math.floor(value*100)/100
  // // 引入第三方库
  // mathjs,  decimal.js
  // 引入太深的问题
  // ../../../components/dialogTemplate.vue'

  /*
   * 特殊组件放最上面，比如：
   * import 'ant-design-vue/es/message/style/css'
   */

  ...recommendedRulesExpand,
  ...recommendedRulesHaWei,
  ...recommendedRulesAnt,
}
