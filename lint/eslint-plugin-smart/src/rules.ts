/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-21 12:35:32
 * @LastEditors: wangwei wwdqq7@qq.com
 * @FilePath: /FullStack/lint/eslint-plugin-smart/src/rules.ts
 * @Description: 规则集定义
 */

/**
 * 基础ESLint规则
 */
export const baseRules = {
  'no-console': ['warn', { allow: ['warn', 'error'] }],
  'no-debugger': 'warn',
  'no-var': 'error',
  'prefer-const': 'error',
  'no-unused-vars': 'off', // 由unused-imports插件处理
  'unused-imports/no-unused-imports': 'error',
  'unused-imports/no-unused-vars': [
    'warn',
    { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
  ],
  'simple-import-sort/imports': 'error',
  'simple-import-sort/exports': 'error',
  'import/first': 'error',
  'import/newline-after-import': 'error',
  'import/no-duplicates': 'error',
};

/**
 * TypeScript特定规则
 */
export const typescriptRules = {
  '@typescript-eslint/no-explicit-any': 'warn',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/no-unused-vars': 'off', // 由unused-imports插件处理
  '@typescript-eslint/no-empty-function': 'warn',
  '@typescript-eslint/no-empty-interface': 'warn',
  '@typescript-eslint/ban-ts-comment': 'warn',
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'interface',
      format: ['PascalCase'],
      prefix: ['I'],
    },
    {
      selector: 'typeAlias',
      format: ['PascalCase'],
      prefix: ['T'],
    },
    {
      selector: 'enum',
      format: ['PascalCase'],
      prefix: ['E'],
    },
  ],
};

/**
 * React特定规则
 */
export const reactRules = {
  'react/prop-types': 'off',
  'react/display-name': 'off',
  'react/jsx-uses-react': 'off',
  'react/react-in-jsx-scope': 'off',
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'warn',
  'jsx-a11y/alt-text': 'warn',
  'jsx-a11y/aria-role': 'warn',
};

/**
 * Vue特定规则
 */
export const vueRules = {
  'vue/multi-word-component-names': 'off',
  'vue/no-unused-components': 'warn',
  'vue/no-unused-vars': 'warn',
  'vue/require-default-prop': 'error',
  'vue/require-prop-types': 'error',
  'vue/attribute-hyphenation': ['error', 'always'],
  'vue/component-definition-name-casing': ['error', 'PascalCase'],
};

/**
 * NestJS特定规则
 */
export const nestjsRules = {
  '@typescript-eslint/explicit-function-return-type': 'warn',
  '@typescript-eslint/explicit-member-accessibility': 'warn',
  '@typescript-eslint/explicit-module-boundary-types': 'warn',
}; 