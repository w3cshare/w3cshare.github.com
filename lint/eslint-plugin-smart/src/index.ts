/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-21 11:31:09
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-21 11:31:31
 * @FilePath: /FullStack/lint/eslint-plugin-smart/src/index.ts
 * @Description: ESLint插件公共配置，适用于React、Vue、NestJS和TypeScript项目
 */

/**
 * 基础规则集，适用于所有项目
 */
const baseRules = {
  // 错误防范规则
  'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
  'no-debugger': 'warn',
  'no-alert': 'warn',
  'no-var': 'error',
  'prefer-const': 'error',
  'no-unused-vars': 'off', // 使用@typescript-eslint/no-unused-vars代替

  // 代码风格规则
  'max-len': ['warn', { code: 120, ignoreComments: true, ignoreStrings: true }],
  quotes: ['error', 'single', { avoidEscape: true }],
  semi: ['error', 'always'],
  'comma-dangle': ['error', 'always-multiline'],
  'arrow-parens': ['error', 'always'],
  'object-curly-spacing': ['error', 'always'],
  'array-bracket-spacing': ['error', 'never'],

  // 导入规则
  'import/order': 'off', // 使用simple-import-sort代替
  'simple-import-sort/imports': 'error',
  'simple-import-sort/exports': 'error',
  'unused-imports/no-unused-imports': 'error',
  'unused-imports/no-unused-vars': [
    'warn',
    { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
  ],
};

/**
 * TypeScript特定规则
 */
const typescriptRules = {
  '@typescript-eslint/no-explicit-any': 'warn',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/no-unused-vars': [
    'warn',
    { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
  ],
  '@typescript-eslint/no-empty-function': 'warn',
  '@typescript-eslint/no-empty-interface': 'warn',
  '@typescript-eslint/ban-ts-comment': 'warn',
  '@typescript-eslint/ban-types': 'warn',
  '@typescript-eslint/no-non-null-assertion': 'warn',
};

/**
 * React特定规则
 */
const reactRules = {
  'react/prop-types': 'off', // 使用TypeScript类型检查代替
  'react/react-in-jsx-scope': 'off', // React 17+不再需要导入React
  'react/display-name': 'off',
  'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
  'react/jsx-boolean-value': ['error', 'never'],
  'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
  'react/jsx-no-useless-fragment': 'error',
  'react/self-closing-comp': 'error',
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'warn',
  'jsx-a11y/alt-text': 'warn',
  'jsx-a11y/anchor-is-valid': 'warn',
};

/**
 * Vue特定规则
 */
const vueRules = {
  'vue/multi-word-component-names': 'warn',
  'vue/no-unused-components': 'warn',
  'vue/no-unused-vars': 'warn',
  'vue/require-default-prop': 'warn',
  'vue/component-name-in-template-casing': ['error', 'PascalCase'],
  'vue/html-closing-bracket-newline': ['error', { singleline: 'never', multiline: 'always' }],
  'vue/html-indent': ['error', 2],
  'vue/max-attributes-per-line': ['error', { singleline: 3, multiline: 1 }],
  'vue/no-v-html': 'warn',
  'vue/this-in-template': ['error', 'never'],
};

/**
 * NestJS特定规则
 */
const nestjsRules = {
  // NestJS项目通常遵循TypeScript规则，这里添加一些特定于后端的规则
  'node/no-unsupported-features/es-syntax': 'off', // 允许使用现代ES语法
  'node/no-missing-import': 'off', // TypeScript会处理导入
  'node/no-unpublished-import': 'off',
};

/**
 * 基础配置，适用于所有项目
 */
const baseConfig = {
  plugins: ['import', 'simple-import-sort', 'unused-imports'],
  rules: baseRules,
};

/**
 * TypeScript配置
 */
const typescriptConfig = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended'],
  rules: {
    ...baseRules,
    ...typescriptRules,
  },
};

/**
 * React配置
 */
const reactConfig = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  rules: {
    ...baseRules,
    ...typescriptRules,
    ...reactRules,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

/**
 * Vue配置
 */
const vueConfig = {
  extends: ['plugin:vue/vue3-recommended'],
  plugins: ['vue'],
  rules: {
    ...baseRules,
    ...typescriptRules,
    ...vueRules,
  },
};

/**
 * NestJS配置
 */
const nestjsConfig = {
  extends: ['plugin:node/recommended'],
  plugins: ['node'],
  rules: {
    ...baseRules,
    ...typescriptRules,
    ...nestjsRules,
  },
};

/**
 * 导出所有配置
 */
module.exports = {
  // 基础配置
  configs: {
    base: baseConfig,
    typescript: typescriptConfig,
    react: reactConfig,
    vue: vueConfig,
    nestjs: nestjsConfig,

    // 推荐配置，默认使用typescript配置
    recommended: typescriptConfig,
  },

  // 导出所有规则集，方便用户自定义配置
  rules: {
    base: baseRules,
    typescript: typescriptRules,
    react: reactRules,
    vue: vueRules,
    nestjs: nestjsRules,
  },
};
