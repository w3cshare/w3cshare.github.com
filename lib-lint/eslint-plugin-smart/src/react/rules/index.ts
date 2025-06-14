/**
 * React核心规则
 * @description React项目的基础规则
 */
export const reactCoreRules = {
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
export const reactStyleRules = {
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
export const reactHooksRules = {
  'react-hooks/exhaustive-deps': 'warn',
  'react-hooks/rules-of-hooks': 'error',
}

/**
 * React性能优化规则
 * @description 针对React性能优化的规则
 */
export const reactPerformanceRules = {
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
export const reactModernRules = {
  'react/display-name': 'warn',
  'react/prop-types': 'warn',
  'react/react-in-jsx-scope': 'off',
}

/**
 * JSX可访问性规则
 * @description A11y相关规则，提高React应用的可访问性
 */
export const jsxA11yRules = {
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
