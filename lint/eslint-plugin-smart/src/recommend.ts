/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-22 13:30:00
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-22 16:35:48
 * @FilePath: /FullStack/lint/eslint-plugin-smart/src/recommend.ts
 * @Description: ESLint规则集合，按照不同技术栈分类
 */

import { type ESLintRuleSet } from './types';

/**
 * 环境变量判断
 */
const isProduction = process.env.NODE_ENV === 'production';

/**
 * JavaScript通用规则
 * 适用于所有JavaScript项目的基础规则
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
    'error',
    {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    },
  ], // 结尾逗号规则
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
      afterBlockComment: false,
      afterLineComment: false,
      beforeBlockComment: true,
      beforeLineComment: true,
      allowBlockStart: true,
      allowObjectStart: true,
      allowArrayStart: true,
      allowClassStart: true,
    },
  ], // 注释和上面代码块要有空行
  'no-warning-comments': [
    'warn',
    {
      terms: ['todo', 'fixme'],
      location: 'anywhere',
    },
  ], // 警告TODO和FIXME注释
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

  // 导入排序规则
  'simple-import-sort/imports': [
    'error',
    {
      groups: [
        // react放在首行
        ['^react', '^vue', '^ant-design-vue', '^@?\\w'],

        // 内部导入
        ['^(@|components)(/.*|$)'],

        // 父级导入
        ['^\\.\\.(?!/?$)', '^\\.\\./?$'],

        // 同级导入
        ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],

        // 样式导入
        ['^.+\\.?(css)$'],

        // 带有副作用导入
        ['^\\u0000'],
      ],
    },
  ],
  'simple-import-sort/exports': 'error',

  // 未使用变量和导入
  'no-unused-vars': 'off',

  // 'unused-vars-and-imports/no-unused-imports': 'error',
  // 'unused-vars-and-imports/no-unused-vars': 'error',

  // 引号和分号规则
  quotes: ['error', 'single'],
  semi: ['error', 'never'],
  
  // Prettier相关规则
  'prettier/prettier': [
    'error',
    {
      printWidth: 100,
      tabWidth: 2,
      useTabs: false,
      semi: false,
      singleQuote: true,
      quoteProps: 'as-needed',
      jsxSingleQuote: false,
      trailingComma: 'all',
      bracketSpacing: true,
      bracketSameLine: false,
      arrowParens: 'always',
      endOfLine: 'lf',
    },
  ],
  // 关闭可能与Prettier冲突的规则
  'arrow-body-style': 'off',
  'prefer-arrow-callback': 'off',
};

/**
 * TypeScript专用规则
 * 适用于TypeScript项目的规则
 */
export const typescriptRules: ESLintRuleSet = {
  '@typescript-eslint/no-explicit-any': 'warn', // 禁止使用any类型
  '@typescript-eslint/no-unused-vars': 'off', // 禁止定义未使用的变量（由unused-vars-and-imports插件处理）
  '@typescript-eslint/explicit-module-boundary-types': 'off', // 不要求导出函数和类的公共类方法的显式返回和参数类型
  '@typescript-eslint/no-non-null-assertion': 'warn', // 警告使用非空断言操作符(!)
  '@typescript-eslint/no-empty-function': 'warn', // 警告空函数
  '@typescript-eslint/no-empty-interface': 'warn', // 警告空接口
  '@typescript-eslint/ban-ts-comment': 'warn', // 警告使用@ts-注释
};

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
  'react/no-unknown-property': 'error',
  'react/no-unescaped-entities': 'error',
  'react/no-children-prop': 'error',
  'react/no-array-index-key': 'warn',
  'react/self-closing-comp': [
    'error',
    {
      component: true,
      html: true,
    },
  ],
  'react/void-dom-elements-no-children': 'error',

  // React Hooks规则
  'react-hooks/rules-of-hooks': 'error', // 强制Hook调用顺序规则
  'react-hooks/exhaustive-deps': 'warn', // 检查effect依赖项完整性

  // JSX可访问性规则
  'jsx-a11y/alt-text': 'error',
  'jsx-a11y/anchor-has-content': 'error',
  'jsx-a11y/aria-props': 'error',
  'jsx-a11y/aria-role': 'error',
  'jsx-a11y/aria-unsupported-elements': 'error',
  'jsx-a11y/click-events-have-key-events': 'warn',
  'jsx-a11y/heading-has-content': 'error',
  'jsx-a11y/html-has-lang': 'error',
  'jsx-a11y/img-redundant-alt': 'warn',
  'jsx-a11y/no-access-key': 'warn',

  // React性能优化规则
  'react/jsx-no-bind': [
    'warn',
    {
      allowArrowFunctions: true,
      allowFunctions: false,
      allowBind: false,
    },
  ],
  'react/jsx-fragments': ['error', 'syntax'],
  'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],

  // 现代React项目规则（React 17+）
  'react/react-in-jsx-scope': 'off',
  'react/prop-types': 'warn',
  'react/display-name': 'warn',
  'react/jsx-boolean-value': ['error', 'never'],
  'react/jsx-pascal-case': 'error',
};

/**
 * Vue专用规则
 * 适用于Vue项目的规则
 */
export const vueRules: ESLintRuleSet = {
  // Vue核心规则
  'vue/comment-directive': 'off',
  'vue/jsx-uses-vars': 'error',
  'vue/script-setup-uses-vars': 'error', // 防止<script setup>使用的变量<template>被标记为未使用
  'vue/no-mutating-props': 'error', // 禁止直接修改props属性
  'vue/no-use-v-if-with-v-for': 'error', // 禁止同时使用v-if和v-for
  'vue/require-v-for-key': 'error', // 强制v-for指令使用key属性
  'vue/valid-v-for': 'error', // 验证v-for指令格式正确性
  'vue/require-component-is': 'error', // 强制组件使用is属性时格式正确
  'vue/no-duplicate-attr-inheritance': 'error', // 禁止重复的属性继承
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
  ], // 强制多单词组件命名
  'vue/component-name-in-template-casing': [
    'error',
    'kebab-case',
    {
      registeredComponentsOnly: false, // 对所有组件生效
      ignores: [], // 无例外情况
    },
  ], // 强制模板中使用kebab-case命名

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
  'node/no-unsupported-features/es-syntax': 'off', // 允许使用现代ES语法
  'node/no-missing-import': 'off', // TypeScript会处理导入
  'node/no-unpublished-import': 'off', // 允许导入devDependencies中的包
};

/**
 * 导出所有规则集合
 */
export default {
  // 基础JavaScript规则，适用于所有项目
  base: javascriptRules,

  // TypeScript项目规则（JavaScript规则 + TypeScript规则）
  typescript: {
    ...javascriptRules,
    ...typescriptRules,
  },

  // React项目规则（JavaScript规则 + React规则）
  react: {
    ...javascriptRules,
    ...reactRules,
  },

  // Vue项目规则（JavaScript规则 + Vue规则）
  vue: {
    ...javascriptRules,
    ...vueRules,
  },

  // Node.js项目规则（JavaScript规则 + Node.js规则）
  nodejs: {
    ...javascriptRules,
    ...nodejsRules,
  },

  // 推荐规则集（包含所有规则，适用于全栈项目）
  recommended: {
    ...javascriptRules,
    ...typescriptRules,
    ...reactRules,
    ...vueRules,
    ...nodejsRules,
  },
};
