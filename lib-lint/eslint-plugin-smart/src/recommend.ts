/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-22 13:30:00
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-07 10:31:25
 * @FilePath: /FullStack/lint/eslint-plugin-smart/src/recommend.ts
 * @Description: ESLint规则集合，按照不同技术栈分类
 */

/* global process */

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
 * JavaScript 通用规则集合分组
 * 按功能分为多个小对象，防止代码格式化后打乱注释和分组
 */

/**
 * JavaScript 代码质量规则
 * @description 保证代码质量的基础规则集合
 */
const jsCodeQualityRules: ESLintRuleSet = {
  'consistent-return': 'error',
  eqeqeq: ['error', 'always'],
  'no-alert': isProduction ? 'error' : 'off',
  'no-cond-assign': 'error',
  'no-console': isProduction ? 'warn' : 'off',
  'no-const-assign': 'error',
  'no-debugger': isProduction ? 'error' : 'off',
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
const jsStyleRules: ESLintRuleSet = {
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
const antDesignRules: ESLintRuleSet = {
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
const huaweiRules: ESLintRuleSet = {
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
const prettierRules: ESLintRuleSet = {
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
 * 三方插件规则 - 代码清理
 * @description 处理未使用的导入和变量
 */
const unusedCodeRules: ESLintRuleSet = {
  'no-unused-vars': 'off',

  // 移除无用的代码规则
  'unused-imports/no-unused-imports': 'error',
  'unused-imports/no-unused-vars': [
    'error',
    {
      args: 'after-used',
      argsIgnorePattern: '^_',
      caughtErrorsIgnorePattern: '^_',
      vars: 'all',
      varsIgnorePattern: '^_',
    },
  ],
}

/**
 * 三方插件规则 - 导入排序
 * @description 处理导入语句和导出语句的排序
 */
const importSortRules: ESLintRuleSet = {
  'import/order': 'off',
  'simple-import-sort/exports': 'error',
  'simple-import-sort/imports': 'error',
}

/**
 * 三方插件规则 - 对象排序
 * @description 处理对象属性的排序
 */
const objectSortRules: ESLintRuleSet = {
  'sort-keys-fix/sort-keys-fix': ['error', 'asc', { caseSensitive: false }],
}

/**
 * JavaScript 通用规则集合合并
 * @description 将所有JavaScript规则集合合并为一个导出对象
 */
export const javascriptRules: ESLintRuleSet = {
  ...jsCodeQualityRules,
  ...jsStyleRules,
  ...antDesignRules,
  ...huaweiRules,
  ...prettierRules,
  ...unusedCodeRules,
  ...importSortRules,
  ...objectSortRules,
}

/**
 * TypeScript核心规则
 * @description TypeScript项目的基础规则
 */
const tsBaseRules: ESLintRuleSet = {
  '@typescript-eslint/ban-ts-comment': 'warn',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/no-empty-function': 'off',
  '@typescript-eslint/no-empty-interface': 'warn',
  '@typescript-eslint/no-explicit-any': 'warn',
  '@typescript-eslint/no-non-null-assertion': 'warn',
  '@typescript-eslint/no-unused-vars': 'off',
}

/**
 * TypeScript排序规则
 * @description 用于排序TypeScript相关结构的规则
 */
const tsSortRules: ESLintRuleSet = {
  // 启用接口属性排序
  'typescript-sort-keys/interface': 'error',

  // 启用类型字面量排序
  'typescript-sort-keys/string-enum': 'error',
}

/**
 * TypeScript专用规则集合
 * @description 适用于TypeScript项目的规则
 */
export const typescriptRules: ESLintRuleSet = {
  ...tsBaseRules,
  ...tsSortRules,
}

/**
 * React核心规则
 * @description React项目的基础规则
 */
const reactCoreRules: ESLintRuleSet = {
  'react/jsx-key': 'error',
  'react/jsx-no-duplicate-props': 'error',
  'react/jsx-no-target-blank': 'error',
  'react/jsx-no-undef': 'error',
  'react/jsx-uses-react': 'error',
  'react/jsx-uses-vars': 'error',
  'react/no-array-index-key': 'warn',
  'react/no-children-prop': 'error',
  'react/no-deprecated': 'warn',
  'react/no-direct-mutation-state': 'error',
  'react/no-unescaped-entities': 'error',
  'react/no-unknown-property': 'error',
  'react/void-dom-elements-no-children': 'error',
}

/**
 * React组件样式规则
 * @description React组件的风格和格式规则
 */
const reactStyleRules: ESLintRuleSet = {
  'react/jsx-boolean-value': ['error', 'never'],
  'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
  'react/jsx-curly-brace-presence': ['error', { children: 'never', props: 'never' }],
  'react/jsx-fragments': ['error', 'syntax'],
  'react/jsx-no-useless-fragment': 'error',
  'react/jsx-pascal-case': 'error',
  'react/self-closing-comp': [
    'error',
    {
      component: true,
      html: true,
    },
  ],
}

/**
 * React Hooks规则
 * @description React Hooks相关规则
 */
const reactHooksRules: ESLintRuleSet = {
  'react-hooks/exhaustive-deps': 'warn',
  'react-hooks/rules-of-hooks': 'error',
}

/**
 * React性能优化规则
 * @description 针对React性能优化的规则
 */
const reactPerformanceRules: ESLintRuleSet = {
  'react/jsx-no-bind': [
    'warn',
    {
      allowArrowFunctions: true,
      allowBind: false,
      allowFunctions: false,
    },
  ],
}

/**
 * React现代项目规则
 * @description 针对React 17+项目的规则
 */
const reactModernRules: ESLintRuleSet = {
  'react/display-name': 'warn',
  'react/prop-types': 'warn',
  'react/react-in-jsx-scope': 'off',
}

/**
 * JSX可访问性规则
 * @description A11y相关规则，提高React应用的可访问性
 */
const jsxA11yRules: ESLintRuleSet = {
  'jsx-a11y/alt-text': 'error',
  'jsx-a11y/anchor-has-content': 'error',
  'jsx-a11y/anchor-is-valid': 'warn',
  'jsx-a11y/aria-props': 'error',
  'jsx-a11y/aria-role': 'error',
  'jsx-a11y/aria-unsupported-elements': 'error',
  'jsx-a11y/click-events-have-key-events': 'warn',
  'jsx-a11y/heading-has-content': 'error',
  'jsx-a11y/html-has-lang': 'error',
  'jsx-a11y/img-redundant-alt': 'warn',
  'jsx-a11y/no-access-key': 'warn',
}

/**
 * React专用规则集合
 * @description 适用于React项目的规则
 */
export const reactRules: ESLintRuleSet = {
  ...reactCoreRules,
  ...reactStyleRules,
  ...reactHooksRules,
  ...reactPerformanceRules,
  ...reactModernRules,
  ...jsxA11yRules,
}

/**
 * Vue模板语法规则
 * @description Vue模板相关规则
 */
const vueTemplateRules: ESLintRuleSet = {
  'vue/no-unused-vars': 'error',
  'vue/no-v-html': 'warn',
  'vue/this-in-template': ['error', 'never'],
}

/**
 * Vue组件命名规则
 * @description Vue组件的命名规范
 */
const vueNamingRules: ESLintRuleSet = {
  'vue/component-name-in-template-casing': [
    'error',
    'kebab-case',
    {
      ignores: [],
      registeredComponentsOnly: false,
    },
  ],
  'vue/multi-word-component-names': [
    'error',
    {
      ignores: ['index'],
    },
  ],
}

/**
 * Vue模板格式规则
 * @description 控制Vue模板的格式和排版
 */
const vueTemplateStyleRules: ESLintRuleSet = {
  'vue/html-closing-bracket-newline': ['error', { multiline: 'always', singleline: 'never' }],
  'vue/html-indent': ['error', 2],
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
}

/**
 * Vue组件顺序规则
 * @description 控制Vue组件选项和属性的顺序
 */
const vueOrderRules: ESLintRuleSet = {
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
const vueCoreRules: ESLintRuleSet = {
  'vue/comment-directive': 'off',
  'vue/jsx-uses-vars': 'error',
  'vue/no-deprecated-scope-attribute': 'error',
  'vue/no-duplicate-attr-inheritance': 'error',
  'vue/no-mutating-props': 'error',
  'vue/no-reserved-component-names': 'error',
  'vue/no-template-shadow': 'error',
  'vue/no-unused-components': 'error',
  'vue/no-use-v-if-with-v-for': 'error',
  'vue/require-component-is': 'error',
  'vue/require-default-prop': 'error',
  'vue/require-prop-types': 'error',
  'vue/require-v-for-key': 'error',
  'vue/script-setup-uses-vars': 'error',
  'vue/valid-v-for': 'error',
}

/**
 * Vue专用规则集合
 * @description 适用于Vue项目的规则
 */
export const vueRules: ESLintRuleSet = {
  ...vueCoreRules,
  ...vueTemplateRules,
  ...vueNamingRules,
  ...vueTemplateStyleRules,
  ...vueOrderRules,
}

/**
 * Node.js环境规则
 * @description Node.js项目的基础规则
 */
const nodeEnvironmentRules: ESLintRuleSet = {
  'handle-callback-err': 'error',
  'no-new-require': 'error',
  'no-path-concat': 'error',
  'no-process-exit': 'error',
  'no-sync': 'off',
}

/**
 * Node.js模块系统规则
 * @description 控制Node.js模块导入和语法特性
 */
const nodeModuleRules: ESLintRuleSet = {
  'node/no-missing-import': 'off',
  'node/no-unpublished-import': 'off',
  'node/no-unsupported-features/es-syntax': 'off',
}

/**
 * Node.js专用规则集合
 * @description 适用于Node.js项目的规则
 */
export const nodejsRules: ESLintRuleSet = {
  ...nodeEnvironmentRules,
  ...nodeModuleRules,
}

/**
 * NestJS框架规则
 * @description NestJS官方推荐的规则设置
 */
const nestFrameworkRules: ESLintRuleSet = {
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/interface-name-prefix': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
}

/**
 * NestJS专用规则集合
 * @description 适用于NestJS项目的规则，继承Node.js规则
 */
export const nestjsRules: ESLintRuleSet = {
  ...nodejsRules,
  ...nestFrameworkRules,
}

/**
 * JSON语法规则
 * @description 基础JSON语法和格式规则
 */
const jsonSyntaxRules: ESLintRuleSet = {
  'jsonc/array-bracket-spacing': ['error', 'never'],
  'jsonc/comma-dangle': ['error', 'never'],
  'jsonc/comma-style': ['error', 'last'],
  'jsonc/indent': ['error', 2],
  'jsonc/no-comments': 'off',
  'jsonc/object-curly-spacing': ['error', 'always'],
  'jsonc/quote-props': ['error', 'always'],
  'jsonc/quotes': ['error', 'double'],
}

/**
 * JSON排序规则 - 数组
 * @description 针对JSON数组的排序规则
 */
const jsonArraySortRules: ESLintRuleSet = {
  'jsonc/sort-array-values': [
    'error',
    {
      order: { type: 'asc' },
      pathPattern: '.*',
    },
  ],
}

/**
 * JSON排序规则 - package.json
 * @description 针对package.json文件的排序规则
 */
const packageJsonSortRules: ESLintRuleSet = {
  'jsonc/sort-keys': [
    'error',
    {
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
      pathPattern: '^$',
    },
    {
      order: { type: 'asc' },
      pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
    },
    {
      order: ['start', 'dev', 'build', 'serve', 'test', 'lint', 'format', 'prepare'],
      pathPattern: '^scripts$',
    },
    {
      order: ['types', 'import', 'require'],
      pathPattern: '^.*$',
    },
    {
      order: { type: 'asc' },
      pathPattern: '.*',
    },
  ],
}

/**
 * JSON规则集合
 * @description 适用于JSON文件的规则
 */
export const jsonRules: ESLintRuleSet = {
  ...jsonSyntaxRules,
  ...jsonArraySortRules,
  ...packageJsonSortRules,
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
  jsonRules,
  nestjs: {
    ...javascriptRules,
    ...nestjsRules,
  },
  nodejs: {
    ...javascriptRules,
    ...nodejsRules,
  },
  react: {
    ...javascriptRules,
    ...reactRules,
  },
  recommended: {
    ...javascriptRules,
    ...typescriptRules,
    ...reactRules,
    ...vueRules,
    ...nodejsRules,
  },
  typescript: {
    ...javascriptRules,
    ...typescriptRules,
  },
  vue: {
    ...javascriptRules,
    ...vueRules,
  },
}
