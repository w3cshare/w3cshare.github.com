/**
 * JavaScript 通用规则集合分组
 * 按功能分为多个小对象，防止代码格式化后打乱注释和分组
 */

/**
 * JavaScript 代码质量规则
 * @description 保证代码质量的基础规则集合
 */
const jsCodeQualityRules = {
  'consistent-return': 'error',
  eqeqeq: ['error', 'always'],
  'no-alert': 'error',
  'no-cond-assign': 'error',
  'no-console': 'warn',
  'no-const-assign': 'error',
  'no-debugger': 'error',
  'no-nested-ternary': 'error',
  'no-unexpected-multiline': 'error',
  'no-use-before-define': [
    'error',
    {
      allowNamedExports: false,
      classes: true,
      functions: false,
      variables: true,
    },
  ],
  'no-var': 'error',
  'prefer-const': 'error',
  'require-yield': 'error',
}

/**
 * JavaScript 代码风格规则
 * @description 保证代码风格一致性的规则集合
 */
const jsStyleRules = {
  'array-bracket-spacing': ['error', 'never'],
  'arrow-parens': ['error', 'as-needed'],
  'comma-dangle': ['warn', 'always-multiline'],
  'max-len': ['warn', { code: 100, ignoreComments: true, ignoreStrings: true }],
  'multiline-comment-style': ['warn', 'starred-block'],
  'no-mixed-operators': [
    'error',
    {
      allowSamePrecedence: true,
      groups: [
        ['+', '-', '*', '/', '%', '**'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof'],
      ],
    },
  ],
  'no-multiple-empty-lines': ['error', { max: 1 }],
  'no-negated-condition': 'warn',
  'object-curly-spacing': ['error', 'always'],
  'prefer-template': 'warn',
  quotes: ['error', 'single', { avoidEscape: true }],
  semi: ['error', 'never'],
  'space-before-function-paren': [
    'error',
    {
      anonymous: 'always',
      asyncArrow: 'always',
      named: 'never',
    },
  ],
}

/**
 * Ant Design 规则集
 * @description 从 Ant Design 规则集引入的有价值规则
 */
const antDesignRules = {
  'array-callback-return': 'error',
  'for-direction': 'error',
  'guard-for-in': 'error',
  'no-async-promise-executor': 'error',
  'no-case-declarations': 'error',
  'no-dupe-else-if': 'error',
  'no-duplicate-case': 'error',
  'no-eval': 'error',
  'no-ex-assign': 'error',
  'no-global-assign': 'error',
  'no-invalid-regexp': 'error',
  'no-native-reassign': 'error',
  'no-param-reassign': 'error',
  'no-promise-executor-return': 'error',
  'no-self-assign': 'error',
  'no-self-compare': 'error',
  'no-shadow-restricted-names': 'error',
  'no-sparse-arrays': 'error',
  'no-unsafe-finally': 'error',
  'no-unused-labels': 'error',
  'no-useless-catch': 'error',
  'no-useless-escape': 'error',
  'no-with': 'error',
  'use-isnan': 'error',
}

/**
 * 华为规则集
 * @description 从华为规则集引入的有价值规则
 */
const huaweiRules = {
  'accessor-pairs': 'error',
  camelcase: ['warn', { properties: 'never' }],
  complexity: ['warn', { max: 10 }],
  'lines-around-comment': [
    'warn',
    {
      afterBlockComment: false,
      afterLineComment: false,
      allowArrayEnd: false,
      allowArrayStart: true,
      allowBlockEnd: false,
      allowBlockStart: true,
      allowClassEnd: false,
      allowClassStart: true,
      allowObjectEnd: false,
      allowObjectStart: true,
      beforeBlockComment: true,
      beforeLineComment: true,
      ignorePattern: '\\s*@\\w+',
    },
  ],
  'max-depth': ['warn', 4],
  'max-nested-callbacks': ['warn', 4],
  'new-cap': [
    'error',
    {
      capIsNew: false,
      newIsCap: true,
      properties: true,
    },
  ],
  'no-continue': 'warn',
  'no-implicit-globals': 'warn',
  'no-implied-eval': 'error',
  'no-new-func': 'error',
  'no-new-wrappers': 'error',
  'no-proto': 'warn',
  'no-prototype-builtins': 'error',
  'no-return-await': 'error',
  'no-useless-return': 'warn',
  'no-warning-comments': [
    'warn',
    {
      location: 'anywhere',
      terms: ['todo', 'fixme'],
    },
  ],
  'spaced-comment': ['error', 'always'],
}

/**
 * Prettier相关规则
 * @description 针对Prettier格式化工具的配置规则
 */
const _prettierRules = {
  // 关闭可能与Prettier冲突的规则
  'arrow-body-style': 'off',

  'prefer-arrow-callback': 'off',
  'prettier/prettier': [
    'error',
    {
      arrowParens: 'avoid',
      bracketSameLine: false,
      bracketSpacing: true,
      endOfLine: 'lf',
      jsxSingleQuote: false,
      printWidth: 100,
      quoteProps: 'as-needed',
      semi: false,
      singleQuote: true,
      tabWidth: 2,
      trailingComma: 'all',
      useTabs: false,
    },
  ],
}

/**
 * JavaScript 通用规则集合合并
 * @description 将所有JavaScript规则集合合并为一个导出对象
 */
export default {
  ...jsCodeQualityRules,
  ...jsStyleRules,
  ...antDesignRules,
  ...huaweiRules,

  // ...prettierRules,
}
