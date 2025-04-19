/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2023-10-22 22:21:12
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-10 10:49:50
 * @FilePath: /FullStack/lint/eslint-plugin-smarts/src/rules/recommended-rules-expand.ts
 * @Description: eslint 拓展推荐配置
 */

const isProduction = process.env.NODE_ENV === 'production';

export default {
  /*
   * 禁止使用console
   */
  'no-console': isProduction ? 'warn' : 'off',

  /*
   * 禁止使用debugger
   */
  'no-debugger': isProduction ? 'error' : 'off',

  /*
   * 禁止使用alert confirm prompt
   */
  'no-alert': isProduction ? 'error' : 'off',

  // 要求使用 let 或 const 而不是 var
  'no-var': 'error',

  // 禁止空余的多行
  'no-unexpected-multiline': 'error',

  /*
   * 禁止不必要的转义字符
   * 'no-useless-escape': 'off',
   */

  /*
   * 禁止使用数组构造器
   * 'no-array-constructor': 'off',
   */

  /*
   * 禁止使用call和apply函数
   * 'no-caller': 'off',
   */

  /*
   * 禁止catch子句参数与外部作用域变量同名
   * 'no-catch-shadow': 'off',
   */

  /*
   * 允许catch语句在未绑定异常的处理程序时抛出异常，但不允许覆盖处理程序或抛出新的异常。
   * 'no-catch-shadow': 0,
   */

  /*
   * 禁止在类的方法中使用本地的类名称作为标识符
   * 'no-class-assign': 'off',
   */

  // 结尾加,
  'comma-dangle': [
    'error',
    {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    },
  ],

  // 函数
  'space-before-function-paren': [
    'error',
    {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    },
  ],

  /*
   * @8 版本中，要求组件名称以驼峰格式/中横杠命名
   */
  'vue/multi-word-component-names': [
    'error',
    {
      ignores: ['index'], // 需要忽略的组件名
    },
  ],

  // 禁止使用嵌套的三目运算符
  'no-nested-ternary': 2,

  // 使用一致的返回，如果有返回值应该每个 return 都提供返回值
  'consistent-return': 2,

  // 禁止在条件语句中出现赋值操作符
  'no-cond-assign': 2,

  // 封闭的复杂表达式使用括号括起来明确了开发者的意图，使代码更具可读性
  'no-mixed-operators': [
    'error',
    {
      groups: [
        ['+', '-', '*', '/', '%', '**'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof'],
      ],
      allowSamePrecedence: true,
    },
  ],

  // 不要在定义前使用
  'no-use-before-define': [
    'error',
    {
      functions: false,
      classes: true,
      variables: true,
      allowNamedExports: false,
    },
  ],

  // 不使用 yield
  'require-yield': 'error',

  /*
   * 使用 === 替代 ==
   * eqeqeq: [2, 'allow-null'],
   */
  eqeqeq: ['error', 'always'],

  // 声明后没有被重新赋值的变量必须使用const
  'prefer-const': 'error',

  // 禁止修改const声明的变量
  'no-const-assign': 'error',
};
