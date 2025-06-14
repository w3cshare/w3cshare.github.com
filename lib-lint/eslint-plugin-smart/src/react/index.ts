// import { defineConfig } from 'eslint/config'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import pluginReact from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'

import {
  jsxA11yRules,
  reactCoreRules,
  reactHooksRules,
  reactModernRules,
  reactPerformanceRules,
  reactStyleRules,
} from './rules/index'

const FILE_PATTERNS = {
  SCRIPT: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
}

export default [
  {
    // ...pluginReact.configs.flat.recommended,
    name: '@iss.smart/react-recommended',
    files: FILE_PATTERNS.SCRIPT,
    plugins: {
      react: pluginReact,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
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
    name: '@iss.smart/react-jsxA11y-recommended',
    files: FILE_PATTERNS.SCRIPT,
    plugins: {
      'jsx-a11y': jsxA11y,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'jsx-a11y/alt-text': 'error',
    },
  },
  {
    name: '@iss.smart/react-reactHooks-recommended',
    files: FILE_PATTERNS.SCRIPT,
    plugins: { 'react-hooks': reactHooks },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
]
