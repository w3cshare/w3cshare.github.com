/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-22 13:30:00
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-28 13:00:52
 * @FilePath: /FullStack/lint/eslint-plugin-smart/src/recommend.ts
 * @Description: ESLint规则集合，按照不同技术栈分类
 */

import { type ESLintRuleSet } from './types'

/**
 * 环境变量判断
 */
/**
 * 判断当前环境是否为生产环境
 * @description 用于根据环境变量动态调整部分规则的严格程度
 */
const isProduction = process.env.NODE_ENV === 'production'

/**
 * JavaScript 通用规则集合
 * @description 适用于所有 JavaScript 项目的基础 ESLint 规则，涵盖代码质量、风格、导入排序等，部分规则根据生产环境动态调整。
 */
export const javascriptRules: ESLintRuleSet = {
  // 代码质量规则
  'no-var': 'error', // 要求使用let或const而不是var
  'no-console': isProduction ? 'warn' : 'off', // 生产环境禁止使用console
  'no-debugger': isProduction ? 'error' : 'off', // 生产环境禁止使用debugger
  'no-alert': isProduction ? 'error' : 'off', // 生产环境禁止使用alert
  'no-unexpected-multiline': 'error', // 禁止空余的多行
  'no-nested-ternary': 'error', // 禁止使用嵌套的三目运算符
  'consistent-return': 'error', // 使用一致的返回
  'no-cond-assign': 'error', // 禁止在条件语句中出现赋值操作符
  'no-use-before-define': [
    'error',
    {
      functions: false,
      classes: true,
      variables: true,
      allowNamedExports: false,
    },
  ], // 不要在定义前使用
  'require-yield': 'error', // 要求generator函数中有yield语句
  eqeqeq: ['error', 'always'], // 使用===替代==
  'prefer-const': 'error', // 声明后没有被重新赋值的变量必须使用const
  'no-const-assign': 'error', // 禁止修改const声明的变量

  // 代码风格规则
  'comma-dangle': [
    // 结尾逗号规则
    'warn',
    'always-multiline',

    /*
     * {
     *   arrays: 'always-multiline',
     *   objects: 'always-multiline',
     *   imports: 'always-multiline',
     *   exports: 'always-multiline',
     *   functions: 'never',
     * },
     */
  ],
  'space-before-function-paren': [
    'error',
    {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    },
  ], // 函数括号前的空格规则
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
  ], // 混合运算符需要括号

  // 从ant-design规则集引入的规则
  'array-callback-return': 'error', // 数组方法回调需要返回值
  'for-direction': 'error', // 防止for循环的方向错误
  'guard-for-in': 'error', // for-in循环需要hasOwnProperty检查
  'no-async-promise-executor': 'error', // 禁止使用异步函数作为Promise executor
  'no-case-declarations': 'error', // 禁止在case子句中使用词法声明
  'no-dupe-else-if': 'error', // 禁止在else if中重复条件
  'no-duplicate-case': 'error', // 禁止重复的case标签
  'no-eval': 'error', // 禁止使用eval()
  'no-ex-assign': 'error', // 禁止对catch子句中的异常重新赋值
  'no-global-assign': 'error', // 禁止对原生对象或只读的全局对象进行赋值
  'no-invalid-regexp': 'error', // 禁止在RegExp构造函数中使用无效的正则表达式
  'no-native-reassign': 'error', // 禁止重新分配本机对象
  'no-param-reassign': 'error', // 禁止对函数参数再赋值
  'no-promise-executor-return': 'error', // 禁止从Promise执行器返回值
  'no-self-assign': 'error', // 禁止自我赋值
  'no-self-compare': 'error', // 禁止自身比较
  'no-shadow-restricted-names': 'error', // 禁止使用关键字作为变量名
  'no-sparse-arrays': 'error', // 禁止使用稀疏数组
  'no-unsafe-finally': 'error', // 禁止在finally语句块中出现控制流语句
  'no-unused-labels': 'error', // 禁止未使用的标签
  'no-useless-catch': 'error', // 禁止不必要的catch子句
  'no-useless-escape': 'error', // 禁止不必要的转义
  'no-with': 'error', // 禁止使用with语句
  'use-isnan': 'error', // 要求使用isNaN()检查NaN

  // 从华为规则集引入的规则
  complexity: ['warn', { max: 10 }], // 圈复杂度不超过10
  camelcase: ['warn', { properties: 'never' }], // 变量名遵循驼峰风格
  'no-proto': 'warn', // 使用Object.getPrototypeOf函数而不要使用__proto__
  'spaced-comment': ['error', 'always'], // 注释前有空白
  'no-new-func': 'error', // 不要使用函数构造器创建函数
  'lines-around-comment': [
    'warn',
    {
      /*
       * afterBlockComment: false,
       * afterLineComment: false,
       * beforeBlockComment: true,
       * beforeLineComment: true,
       * allowBlockStart: true,
       * allowObjectStart: true,
       * allowArrayStart: true,
       * allowClassStart: true,
       */

      beforeBlockComment: true, // 块注释前需要空行
      afterBlockComment: false, // 块注释后不需要空行
      beforeLineComment: true, // 行注释前需要空行
      afterLineComment: false, // 行注释后不需要空行
      allowBlockStart: true, // 允许在块开始处的注释不需要前置空行
      allowBlockEnd: false, // 不允许在块结束处的注释不需要前置空行
      allowObjectStart: true, // 允许在对象开始处的注释不需要前置空行
      allowObjectEnd: false, // 不允许在对象结束处的注释不需要前置空行
      allowArrayStart: true, // 允许在数组开始处的注释不需要前置空行
      allowArrayEnd: false, // 不允许在数组结束处的注释不需要前置空行
      allowClassStart: true, // 允许在类开始处的注释不需要前置空行
      allowClassEnd: false, // 不允许在类结束处的注释不需要前置空行
      ignorePattern: '\\s*@\\w+', // 忽略带有 @xxx 注解的注释
    },
  ], // 注释和上面代码块要有空行
  'no-warning-comments': [
    'warn',
    {
      terms: ['todo', 'fixme'],
      location: 'anywhere',
    },
  ],
  'no-continue': 'warn', // 不要使用continue语句
  'no-return-await': 'error', // 禁用不必要的return await
  'no-implied-eval': 'error', // 禁止使用隐式的eval()函数
  'accessor-pairs': 'error', // getter和setter应该成对出现在对象中
  'max-depth': ['warn', 4], // 块语句的最大可嵌套深度不要超过4层
  'max-nested-callbacks': ['warn', 4], // 函数的最大嵌套深度不要超过4层
  'new-cap': [
    'error',
    {
      newIsCap: true,
      capIsNew: false,
      properties: true,
    },
  ], // 构造器函数、类采用首字母大写的驼峰命名法
  'no-useless-return': 'warn', // 禁止多余的return语句
  'no-new-wrappers': 'error', // 禁止封装基本类型
  'no-implicit-globals': 'warn', // 声明变量时要防止暴露到全局作用域
  'no-prototype-builtins': 'error', // 禁止在对象实例上直接使用Object.prototype的内部属性
  'no-multiple-empty-lines': [
    'error',
    {
      max: 1,
    },
  ], // 不要使用连续空行
  'no-negated-condition': 'warn', // 不要在复杂的条件表达式前加个否定操作符
  'multiline-comment-style': ['warn', 'starred-block'], // 多行注释使用特定风格
  'prefer-template': 'warn', // 使用模板字符串实现字符串拼接

  /*
   * 代码风格规则
   * 引号和分号规则
   */
  quotes: ['error', 'single', { avoidEscape: true }], // 要求使用单引号
  semi: ['error', 'never'], // 禁止使用分号，保持代码风格一致性
  'max-len': ['warn', { code: 100, ignoreComments: true, ignoreStrings: true }], // 限制行长度为120字符
  'arrow-parens': ['error', 'always'], // 箭头函数参数始终使用括号
  'object-curly-spacing': ['error', 'always'], // 对象字面量括号内要求有空格
  'array-bracket-spacing': ['error', 'never'], // 数组括号内不要求有空格

  // Prettier相关规则
  'prettier/prettier': [
    'error',
    {
      // 每行打印的最大宽度为100个字符，超出的部分会自动换行
      printWidth: 100,

      // 每个缩进层级的空格数为2
      tabWidth: 2,

      // 禁用制表符（使用空格代替）
      useTabs: false,

      // 在语句末尾添加分号
      semi: false,

      // 使用单引号而不是双引号
      singleQuote: true,

      // 只有在必要时才对对象属性加引号
      quoteProps: 'as-needed',

      // JSX中使用双引号而不是单引号
      jsxSingleQuote: false,

      // 在对象、数组和函数参数中添加尾随逗号，确保代码格式化后更易于 diff
      trailingComma: 'all',

      // 在对象和数组的括号之间添加空格
      bracketSpacing: true,

      // 不允许将多行对象的结束括号放在最后一行的末尾
      bracketSameLine: false,

      // 箭头函数的参数使用圆括号的规则，仅在必要时使用
      arrowParens: 'avoid',

      // 换行符使用LF（Unix风格）
      endOfLine: 'lf',
    },
  ],

  // 关闭可能与Prettier冲突的规则
  'arrow-body-style': 'off',
  'prefer-arrow-callback': 'off', // 禁用对回调函数使用箭头函数的强制要求

  // ==================三方插件规则 START==================

  /*
   * 数组/对象排序
   * 'annotation/sort': 'error',
   * 'annotation/sort-keys': 'error',
   * 'annotation/format-date': 'error',
   * 'annotation/unique': 'error',
   */

  'no-unused-vars': 'off',

  // 移除无用的代码规则
  'unused-imports/no-unused-imports': 'error', // 禁止未使用的导入
  'unused-imports/no-unused-vars': [
    'error',
    {
      vars: 'all', // 检查所有变量
      varsIgnorePattern: '^_', // 忽略以_开头的变量
      args: 'after-used', // 仅检查使用后的参数
      argsIgnorePattern: '^_', // 忽略以_开头的参数
      caughtErrorsIgnorePattern: '^_', // 忽略以_开头的捕获错误
      /*
       * ignoreRestSiblings: false, // 忽略剩余的兄弟节点
       * destructuredArrayIgnorePattern: '^_', // 忽略以_开头的解构数组
       */
    },
  ],

  // 导入/导出排序
  'import/order': 'off', // 使用simple-import-sort代替
  'simple-import-sort/imports': 'error', // 要求import语句排序
  'simple-import-sort/exports': 'error', // 要求export语句排序
  /*
   * 'simple-import-sort/imports': [
   *   'error',
   *   {
   *     groups: [
   *       // 框架库放在首行
   *       ['^react', '^vue', '^ant-design-vue', '^@?\\w'],
   */

  /*
   *       // 内部导入
   *       ['^(@|components)(/.*|$)'],
   */

  /*
   *       // 父级导入
   *       ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
   */

  //       // 同级导入
  //       ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],

  /*
   *       // 样式导入
   *       ['^.+\\.?(css)$'],
   */

  /*
   *       // 带有副作用导入
   *       ['^\\u0000'],
   *     ],
   *   },
   * ],
   */
  /*
   * 对象排序
  */
  'sort-keys-fix/sort-keys-fix': 'error',
  // 'sort-keys-fix/sort-keys-fix': ['error', 'asc', { caseSensitive: false }], // 按升序排序，忽略大小写

  // ==================三方插件规则 END==================
}

/**
 * TypeScript专用规则
 * 适用于TypeScript项目的规则
 */
export const typescriptRules: ESLintRuleSet = {
  '@typescript-eslint/no-explicit-any': 'warn', // 禁止使用any类型
  '@typescript-eslint/no-unused-vars': 'off', // 禁止定义未使用的变量（由unused-vars-and-imports插件处理）
  '@typescript-eslint/explicit-module-boundary-types': 'off', // 不要求导出函数和类的公共类方法的显式返回和参数类型
  '@typescript-eslint/no-non-null-assertion': 'warn', // 警告使用非空断言操作符(!)
  '@typescript-eslint/no-empty-function': 'off', // 警告空函数
  '@typescript-eslint/no-empty-interface': 'warn', // 警告空接口
  '@typescript-eslint/ban-ts-comment': 'warn', // 警告使用@ts-注释

  // ==================三方插件规则 START==================
  /*
   * TypeScript Sort Keys 规则
   * TypeScript 键排序规则
   */
  // 启用接口属性排序
  'typescript-sort-keys/interface': 'error',

  // 启用类型字面量排序
  'typescript-sort-keys/string-enum': 'error',

  // ==================三方插件规则 END==================
}

/**
 * React专用规则
 * 适用于React项目的规则
 */
export const reactRules: ESLintRuleSet = {
  // React核心规则
  'react/jsx-uses-react': 'error', // 防止React未使用
  'react/jsx-uses-vars': 'error', // 防止JSX变量未使用
  'react/jsx-no-undef': 'error', // 防止未定义JSX标签
  'react/jsx-key': 'error', // 列表项缺少key警告
  'react/jsx-no-duplicate-props': 'error', // 禁止重复的JSX属性
  'react/jsx-no-target-blank': 'error', // 安全警告：禁止不安全的target="_blank"
  'react/no-direct-mutation-state': 'error', // 禁止直接修改state
  'react/no-deprecated': 'warn', // 使用废弃API警告
  /*
   * 禁止使用未知的DOM属性
   * 防止拼写错误或使用非标准属性导致潜在问题
   */
  'react/no-unknown-property': 'error',

  /*
   * 禁止在JSX文本中使用未转义的HTML实体
   * 防止XSS攻击和渲染问题
   */
  'react/no-unescaped-entities': 'error',

  /*
   * 禁止使用children作为prop传递
   * 应直接使用JSX子元素而非prop传递
   */
  'react/no-children-prop': 'error',

  /*
   * 警告使用数组索引作为key
   * 可能导致列表渲染性能问题和状态错误
   */
  'react/no-array-index-key': 'warn',

  /*
   * 强制自闭合组件和HTML元素
   * 保持代码一致性并减少不必要的嵌套
   */
  'react/self-closing-comp': [
    'error',
    {
      component: true, // 要求React组件自闭合
      html: true, // 要求HTML元素自闭合
    },
  ],

  /*
   * 禁止void DOM元素包含子元素
   * 如<br>、<img>等元素不应有子元素
   */
  'react/void-dom-elements-no-children': 'error',

  // React Hooks规则
  'react-hooks/rules-of-hooks': 'error', // 强制Hook调用顺序规则
  'react-hooks/exhaustive-deps': 'warn', // 检查effect依赖项完整性

  // JSX可访问性规则
  'jsx-a11y/alt-text': 'error', // 要求img标签有alt属性
  'jsx-a11y/anchor-has-content': 'error', // 确保锚点标签<a>包含可访问的内容，避免空链接影响屏幕阅读器用户
  'jsx-a11y/aria-props': 'error', // 验证所有aria-*属性都是有效的ARIA属性
  'jsx-a11y/aria-role': 'error', // 验证role属性的值是有效的ARIA角色
  'jsx-a11y/aria-unsupported-elements': 'error', // 禁止在不支持ARIA的元素上使用ARIA属性
  'jsx-a11y/click-events-have-key-events': 'warn', // 为点击事件添加键盘事件处理，确保键盘用户可操作
  'jsx-a11y/heading-has-content': 'error', // 确保标题标签(h1-h6)包含内容，避免空标题影响屏幕阅读器用户
  'jsx-a11y/html-has-lang': 'error', // 要求<html>标签有lang属性，声明页面语言
  'jsx-a11y/img-redundant-alt': 'warn', // 避免图片alt属性包含冗余文本(如图片/图像等)
  'jsx-a11y/no-access-key': 'warn', // 避免使用accesskey属性，防止与屏幕阅读器快捷键冲突
  'jsx-a11y/anchor-is-valid': 'warn', // 要求a标签有有效的href

  // React性能优化规则
  'react/jsx-no-bind': [
    'warn',
    {
      allowArrowFunctions: true,
      allowFunctions: false,
      allowBind: false,
    },
  ],

  /*
   * 强制使用React Fragment语法（<>...</>）而不是React.Fragment
   * 原因：1. 更简洁的语法 2. 减少不必要的React导入 3. 提高代码可读性
   */
  'react/jsx-fragments': ['error', 'syntax'],

  /*
   * 禁止在JSX属性或子元素中不必要地使用大括号
   * 原因：1. 保持代码一致性 2. 减少不必要的语法噪音 3. 提高可读性
   */
  'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
  'react/jsx-closing-bracket-location': ['error', 'line-aligned'], // JSX标签的闭合括号位置
  'react/jsx-no-useless-fragment': 'error', // 禁止不必要的Fragment

  // 现代React项目规则（React 17+）
  'react/react-in-jsx-scope': 'off',
  'react/prop-types': 'warn', // 强制组件props类型检查，帮助捕获类型错误，建议设为warn级别以便开发时提醒
  'react/display-name': 'warn', // 要求组件有displayName属性，便于调试和错误追踪
  'react/jsx-boolean-value': ['error', 'never'], // 禁止布尔属性显式赋值true，保持简洁性
  'react/jsx-pascal-case': 'error', // 强制组件名使用PascalCase命名规范
}

/**
 * Vue专用规则
 * 适用于Vue项目的规则
 */
export const vueRules: ESLintRuleSet = {
  // Vue核心规则
  'vue/comment-directive': 'off', // 禁用Vue模板中的注释指令，避免与ESLint冲突
  'vue/jsx-uses-vars': 'error', // 防止Vue JSX中未使用的变量引起错误
  'vue/script-setup-uses-vars': 'error', // 防止<script setup>使用的变量<template>被标记为未使用
  'vue/no-mutating-props': 'error', // 禁止直接修改props属性
  'vue/no-use-v-if-with-v-for': 'error', // 禁止同时使用v-if和v-for
  'vue/require-v-for-key': 'error', // 强制v-for指令使用key属性
  'vue/valid-v-for': 'error', // 验证v-for指令格式正确性
  'vue/require-component-is': 'error', // 强制组件使用is属性时格式正确
  'vue/no-duplicate-attr-inheritance': 'error', // 禁止重复的属性继承
  'vue/no-deprecated-scope-attribute': 'error',
  'vue/require-default-prop': 'error', // 要求props有默认值
  'vue/require-prop-types': 'error', // 强制Vue组件props类型定义，提高代码可维护性
  'vue/no-reserved-component-names': 'error', // 禁止使用Vue保留名称作为组件名，避免冲突
  'vue/no-unused-components': 'error', // 禁止注册但未使用的组件
  // 模板语法规则 START
  'vue/no-unused-vars': 'error', // 禁止模板中未使用的变量
  'vue/no-v-html': 'warn', // 警告使用v-html（可能导致XSS攻击）
  'vue/this-in-template': ['error', 'never'], // 禁止在模板中使用this
  // 模板语法规则 END
  'vue/no-template-shadow': 'error',

  // Vue组件命名规则
  'vue/multi-word-component-names': [
    'error',
    {
      ignores: ['index'], // 需要忽略的组件名
    },
  ], // 强制多单词组件命名
  'vue/component-name-in-template-casing': [
    'error',

    // 强制模板中使用kebab-case命名
    'kebab-case',
    {
      registeredComponentsOnly: false, // 对所有组件生效
      ignores: [], // 无例外情况
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
    // 单行最多3个属性，多行每行1个属性
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
  'vue/html-closing-bracket-newline': ['error', { singleline: 'never', multiline: 'always' }], // 多行元素的闭合括号需要换行
  'vue/html-indent': ['error', 2], // HTML缩进使用2个空格

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
}

/**
 * Node.js专用规则
 * 适用于Node.js项目的规则
 */
export const nodejsRules: ESLintRuleSet = {
  // Node.js环境特定规则
  'no-process-exit': 'error', // 禁止使用process.exit()
  'no-sync': 'warn', // 警告使用同步方法
  'handle-callback-err': 'error', // 要求回调函数中有错误处理
  'no-new-require': 'error', // 禁止使用new require
  'no-path-concat': 'error', // 禁止使用__dirname或__filename做路径拼接
  'node/no-unsupported-features/es-syntax': 'off', // 允许使用现代ES语法（NestJS使用TypeScript编译）
  'node/no-missing-import': 'off', // TypeScript会处理导入，不需要Node.js的导入检查
  'node/no-unpublished-import': 'off', // 允许导入devDependencies中的包（用于测试等）
}

export const nestjsRules: ESLintRuleSet = {
  ...nodejsRules,

  // nest官网推荐
  '@typescript-eslint/interface-name-prefix': 'off',
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
}

export const jsonRules: ESLintRuleSet = {
  // JSON语法规则
  'jsonc/array-bracket-spacing': ['error', 'never'],
  'jsonc/comma-dangle': ['error', 'never'],
  'jsonc/comma-style': ['error', 'last'],
  'jsonc/indent': ['error', 2],
  'jsonc/no-comments': 'off', // 允许在JSON中使用注释（适用于JSONC）
  'jsonc/object-curly-spacing': ['error', 'always'],
  'jsonc/quote-props': ['error', 'always'], // 总是给属性名加引号
  'jsonc/quotes': ['error', 'double'], // JSON中使用双引号

  // JSON排序规则
  'jsonc/sort-array-values': [
    'error',
    {
      pathPattern: '.*', // 应用于数组的所有路径
      order: { type: 'asc' }, // 按字母升序排序
    },
  ],

  // 特殊文件的排序优先级设置
  'jsonc/sort-keys': [
    'error',

    // 第一个配置对象：处理package.json的根级属性
    {
      pathPattern: '^$', // 适用于根级别属性
      order: [
        'name',
        'version',
        'private',
        'packageManager',
        'displayName',
        'description',
        'type',
        'keywords',
        'homepage',
        'bugs',
        'license',
        'author',
        'contributors',
        'funding',
        'files',
        'main',
        'module',
        'types',
        'exports',
        'imports',
        'scripts',
        'peerDependencies',
        'peerDependenciesMeta',
        'dependencies',
        'optionalDependencies',
        'devDependencies',
        'engines',
        'config',
        'overrides',
        'pnpm',
        'husky',
        'lint-staged',
        'eslintConfig',
      ],
    },

    // 第二个配置对象：处理依赖项对象
    {
      pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
      order: { type: 'asc' }, // 依赖项按字母排序
    },

    // 第三个配置对象：处理scripts对象
    {
      pathPattern: '^scripts$',
      order: ['start', 'dev', 'build', 'serve', 'test', 'lint', 'format', 'prepare'],
    },

    // 第四个配置对象：处理其他所有对象
    {
      pathPattern: '.*', // 适用于其他所有路径
      order: { type: 'asc' }, // 按字母升序排序
    },
  ],
}

/**
 * 导出所有规则集合
 * @description 按照不同技术栈组合规则，便于在不同类型项目中快速集成对应的 ESLint 规则集。
 * - base: 仅包含 JavaScript 通用规则
 * - typescript/react/vue/nodejs: 在 base 基础上叠加各自专用规则
 * - recommended: 全栈项目推荐，包含所有规则
 */
export default {
  base: {
    ...javascriptRules,
  },
  typescript: {
    ...javascriptRules,
    ...typescriptRules,
  },
  react: {
    ...javascriptRules,
    ...reactRules,
  },
  vue: {
    ...javascriptRules,
    ...vueRules,
  },
  nodejs: {
    ...javascriptRules,
    ...nodejsRules,
  },
  nestjs: {
    ...javascriptRules,
    ...nestjsRules,
  },
  recommended: {
    ...javascriptRules,
    ...typescriptRules,
    ...reactRules,
    ...vueRules,
    ...nodejsRules,
  },
  jsonRules,
}
