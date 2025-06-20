// import { defineConfig } from 'eslint/config'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import pluginReact from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'

import { FILE_PATTERNS } from '../types'
import {
  jsxA11yRules,
  reactCoreRules,
  reactHooksRules,
  reactModernRules,
  reactPerformanceRules,
  reactStyleRules,
} from './rules/index'

export default [
  {
    files: FILE_PATTERNS.REACT,
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    // ...pluginReact.configs.flat.recommended,
    name: '@iss.smart/react-recommended',
    plugins: {
      react: pluginReact,
    },
    rules: {
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      ...reactCoreRules,
      ...reactStyleRules,
      ...reactHooksRules,
      ...reactPerformanceRules,
      ...reactModernRules,
      ...jsxA11yRules,
    },
  },
  {
    files: FILE_PATTERNS.REACT,
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    name: '@iss.smart/react-jsxA11y-recommended',
    plugins: {
      'jsx-a11y': jsxA11y,
    },
    rules: {
      'jsx-a11y/alt-text': 'error',
    },
  },
  {
    files: FILE_PATTERNS.REACT,
    name: '@iss.smart/react-reactHooks-recommended',
    plugins: { 'react-hooks': reactHooks },
    rules: {
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error',
    },
  },
]
