/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2023-10-22 22:21:12
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-10 10:50:25
 * @FilePath: /FullStack/lint/eslint-plugin-smarts/src/rules/recommended-rules-haWei.ts
 * @Description: eslint 拓展推荐配置 for haWei javascript 代码规范
 */

export default {
  /*
   * 问题一：lines-around-comment to beforeBlockComment 华为云门禁必开启
   * 问题二：采用一致的空格缩进，华为云门禁必开启
   * 问题三：每行代码应该少于100个字符
   * 华为云门禁使用了 codemars 和 eslint 引擎来检测代码
   * 这里我们只是全用 eslint 来代替 codemars
   */
  /*
   * 基于华为JAVASCRIPT编码规范规则集
   * 建议21 圈复杂度不超过10
   */
  complexity: ['warn', { max: 10 }],

  // 规则4 变量名遵循驼峰风格
  camelcase: ['warn', { properties: 'never' }],

  /*
   * 规则22 每行代码应该少于 120 个字符（ps：不要这样，做完的项目会大范围报警告，另一个原因也与 prettier 不兼容）
   * "max-len": ["warn", { code: 100, tabWidth: 2 }],
   */

  // 规则3.9 使用Object.getPrototypeOf函数而不要使用proto
  'no-proto': 'warn',

  // 规则9 一般单行注释用//, 块注释用/* */, 文档注释用/** */--要求或禁止在注释前有空白
  'spaced-comment': ['error', 'always'],

  // 规则3.10 不要使用函数构造器创建函数
  'no-new-func': 'error',

  // 规则58 要求调用isNaN()检查NaN
  'use-isnan': 'error',
  'no-restricted-properties': [
    'error',

    // 规则5.2 谨慎使用postMessage方法实现跨域通信
    {
      object: 'window',
      property: 'postMessage',
      message: 'Please use $postMessage instead.',
    },

    // 规则5.3 禁止使用web SQL数据库
    {
      object: 'window',
      property: 'openDatabase',
      message: 'Please use $openDatabase instead.',
    },
  ],

  /*
   * 规则62 禁用console（ps：不要这样，console 开发的移除插件已做处理）
   * "no-console": "error",
   */
  // 规则1.2 功能失效时必须彻底删除对应的功能代码
  'no-unreachable': 'warn',

  /*
   * 建议36 建议字符串使用单引号（ps：不要这样，因为会把双引号套单引号的转换成 / 转义符）
   * quotes: ["warn", "single"],
   */

  // 规则11 注释和上面代码块要有空行，和注释之间要有一个空格
  'lines-around-comment': [
    'warn',
    {
      afterBlockComment: false,
      afterLineComment: false,
      beforeBlockComment: true,
      beforeLineComment: true,

      allowBlockStart: true,
      allowObjectStart: true,

      allowArrayStart: true,
      allowClassStart: true,
    },
  ],

  /*
   * 规则12 正式交付给客户的代码不应包含terms[xxx]注释
   */
  'no-warning-comments': [
    'warn',
    {
      terms: ['todo', 'fixme'],
      location: 'anywhere',
    },
  ],

  // 建议66 不要使用 continue 语句
  'no-continue': 'warn',

  // 规则64 禁用debugger
  'no-debugger': 'error',

  // 规则60 禁用不必要的 return await
  'no-return-await': 'error',

  // 原则9 禁止使用隐式的eval()函数
  'no-implied-eval': 'error',

  // 规则42 getter和setter应该成对出现在对象中
  'accessor-pairs': 'error',

  // 建议22 块语句的最大可嵌套深度不要超过4层
  'max-depth': ['warn', 4],

  // 建议23 函数的最大嵌套深度不要超过4层
  'max-nested-callbacks': ['warn', 4],

  // 规则1 构造器函数、类采用首字母大写的驼峰命名法
  'new-cap': [
    'error',
    {
      newIsCap: true,
      capIsNew: false,

      properties: true,
    },
  ],

  /*
   * 规则61 禁止使用with(){}
   * 规则3.4 禁止使用with{}语句
   */
  'no-with': 'error',

  // 规则66 禁止多余的 return 语句
  'no-useless-return': 'warn',

  // 规则3.3 禁止封装基本类型
  'no-new-wrappers': 'error',

  // 规则3.1 声明变量时要防止暴露到全局作用域
  'no-implicit-globals': 'warn',

  // 原则8 禁止使用eval()函数
  'no-eval': 'error',

  // 建议20 方法长度不超过50行
  'max-lines-per-function': ['warn', 100],

  /*
   * 规则43 禁止在对象实例上直接使用Object.prototype的内部属性
   * 规则3.8 禁止直接使用Object.prototypes的内置属性
   */

  'no-prototype-builtins': 'error',

  // 规则59 禁止在finally语句块中出现控制流语句
  'no-unsafe-finally': 'error',

  /*
   * 建议12 不要使用连续空行
   * 'no-multiple-empty-lines': ['warn', { max: 1 }],
   */
  'no-multiple-empty-lines': [
    'error',
    {
      max: 1,

      /*
       * maxEOF: 1,
       * maxBOF: 1,
       */
    },
  ],

  // 建议49 不要在复杂的条件表达式前加个否定操作符
  'no-negated-condition': 'warn',

  // 规则9 一般单行注释用//, 块注释用/* */, 文档注释用/** */--强制对多行注释使用特定风格
  'multiline-comment-style': ['warn', 'starred-block'],

  /*
   * 规则15 采用一致的空格缩进
   */
  // indent: ['warn', 2],

  // 规则36 使用模板字符串（` ` ）实现字符串拼接
  'prefer-template': 'warn',

  // 规则63 禁用alert
  'no-alert': 'error',

  // 建议65 要求使用Error对象作为Promise拒绝的原因
  'prefer-promise-reject-errors': 'error',

  // 建议54 禁止正则表达式字面量中出现多个空格
  'no-regex-spaces': 'warn',

  /*
   * 基于华为云 HTML 规范
   * <script>...</script> elements should not be nested
   * 'vue/no-nested-ternary': 'error',
   */

  /*
   * "fieldset"标签应该包含一个"legend"标签
   * 'vue/require-valid-default-prop': 'error',
   */

  /*
   * 应该使用<strong>和<em>标签，而不是用<b>和<i>标签
   * 'vue/no-use-v-if-with-v-for': 'error',
   */

  /*
   * 不应使用服务器端的图像映射("ismap" 属性)
   * 'vue/valid-v-for': 'error',
   */

  /*
   * 在<html>标签前应该有一个<!DOCTYPE>声明
   * 'vue/require-v-for-key': 'error',
   */

  /*
   * 标题应该保存在所有的页面上
   * 'vue/require-component-is': 'error',
   */

  /*
   * "<li>"和"<dt>"项目标签应该放在"<ul>"、"<ol>"或者"<dl>"容器标签中
   * 'vue/no-duplicate-attr-inheritance': 'error',
   */

  /*
   * 不应使用HTML5中被弃用的元素
   * 'vue/no-deprecated-scope-attribute': 'error',
   */

  /*
   * 图片标签和按钮应该有一个 "alt" 属性
   * 'vue/html-self-closing': [
   *   'error',
   *   {
   *     html: {
   *       component: 'always',
   *       normal: 'never',
   *       void: 'always',
   *     },
   *   },
   * ],
   */

  /*
   * "<frames>"  应该有一个 "title" 属性
   * 'vue/require-default-prop': 'error',
   */

  /*
   * 应该使用<object>和<embed>标签嵌入Flash动画
   * 'vue/require-prop-types': 'error',
   */
};
