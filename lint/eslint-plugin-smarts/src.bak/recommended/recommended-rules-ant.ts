/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2023-10-22 22:21:14
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-10 10:44:52
 * @FilePath: /FullStack/lint/eslint-plugin-smarts/src/rules/recommended-rules-ant.ts
 * @Description: eslint推荐规则 for ant-design react
 */
export default {
  // eslint built-in rules
  // 不需要返回就用 forEach
  'array-callback-return': 2,

  // eqeq 可能导致潜在的类型转换问题
  eqeqeq: 2,
  'for-direction': 2,

  // 不加 hasOwnProperty 判断会多出原型链的内容
  'guard-for-in': 2,
  'no-async-promise-executor': 2,
  'no-case-declarations': 2,
  'no-debugger': 2,
  'no-delete-var': 2,
  'no-dupe-else-if': 2,
  'no-duplicate-case': 2,

  // eval（）可能导致潜在的安全问题
  'no-eval': 2,
  'no-ex-assign': 2,
  'no-global-assign': 2,
  'no-invalid-regexp': 2,

  // 没必要改 native 变量
  'no-native-reassign': 2,

  // 修改对象时，会影响原对象；但是有些场景就是有目的
  'no-param-reassign': 2,

  // return 值无意义，可能会理解为 resolve
  'no-promise-executor-return': 2,
  'no-self-assign': 2,
  'no-self-compare': 2,
  'no-shadow-restricted-names': 2,
  'no-sparse-arrays': 2,
  'no-unsafe-finally': 2,
  'no-unused-labels': 2,
  'no-useless-catch': 2,
  'no-useless-escape': 2,
  'no-var': 2,
  'no-with': 2,
  'require-yield': 2,
  'use-isnan': 2,
};
