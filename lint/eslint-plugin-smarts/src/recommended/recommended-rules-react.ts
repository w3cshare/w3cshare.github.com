/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-10 11:00:00
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-10 11:00:00
 * @FilePath: /FullStack/lint/eslint-plugin-smarts/src/rules/recommended-rules-react.ts
 * @Description: React项目专用ESLint规则集
 */

/**
 * React项目专用ESLint规则集
 * 包含React和React Hooks的最佳实践规则
 */
export default {
  // React核心规则
  'react/jsx-uses-react': 'error', // 防止React未使用
  'react/jsx-uses-vars': 'error', // 防止JSX变量未使用
  'react/jsx-no-undef': 'error', // 防止未定义JSX标签
  'react/jsx-key': 'error', // 列表项缺少key警告
  'react/jsx-no-duplicate-props': 'error', // 禁止重复的JSX属性
  'react/jsx-no-target-blank': 'error', // 安全警告：禁止不安全的target="_blank"
  'react/no-direct-mutation-state': 'error', // 禁止直接修改state
  'react/no-deprecated': 'warn', // 使用废弃API警告

  // React Hooks规则
  'react-hooks/rules-of-hooks': 'error', // 强制Hook调用顺序规则
  'react-hooks/exhaustive-deps': 'warn', // 检查effect依赖项完整性
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
