/**
 * @file ESLint Flat Config preset for TypeScript and Vue3 projects
 * @author ww <wwdqq7@qq.com>
 * @version 1.0.0
 * @description A comprehensive ESLint configuration preset for TypeScript and Vue3 projects with React support
 * @license MIT
 */

import type { Linter } from 'eslint'
import { defineConfig } from 'eslint/config'

import base from './base'
import jsdoc from './base/jsdoc'
import sortObject from './common/sort-object'
import unusedImports from './common/unused-imports'
import sortJson from './json'
import nestJs from './nest'
import react from './react'
import stylelint from './style/stylelint'
import typescript from './typescript'
import vue from './vue'

/**
 * Configuration metadata
 */
export const meta = {
  description:
    '为TypeScript和Vue3项目预设的全面ESLint配置，支持React、vue3 + typescript, nestjs等特性支持。',
  name: 'eslint-plugin-smart',
  supported: {
    eslint: '>=9.0.0',
    node: '>=16.0.0',
    typescript: '>=4.0.0',
  },
  version: '1.0.0',
} as const

// Default configuration combining all features
const config = defineConfig(

  // Language-specific rules
  react, // React rules
  vue, // Vue3 + TypeScript rules
  typescript, // TypeScript rules

  // Base ESLint rules
  base,
  jsdoc,

  // Code style optimization rules
  sortJson, // JSON file sorting
  sortObject, // Object property sorting
  unusedImports, // Remove unused imports

  // Style rules
  stylelint,
) as unknown as Linter.Config[]

export default (_payload: {
  css?: boolean
  markdown?: boolean
  nestJs?: boolean
  orderArray?: boolean
  orderJson?: boolean
  orderObject?: boolean
  prettier?: boolean
  react?: boolean
  stylistic?: boolean
  typescript?: boolean
  unusedImports?: boolean
  unusedVars?: boolean
  vue?: boolean
  vue3?: boolean
}) => {
  const { NODE_ENV } = process.env

  const isProd = NODE_ENV === 'production'

  const developmentRules = {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-console': 'warn',
    'no-var': 'warn',
    'no-alert': 'warn',
    'no-debugger': 'warn',
    'multiline-comment-style': 'off',
  }

  config.forEach((item) => {
    if (item.rules) {
      Object.keys(developmentRules).forEach((key) => {
        if (!isProd && item.rules[key]) {
          item.rules[key] = developmentRules[key]
        }
      })
    }
  })
  return config
}

// Specialized presets for different project types
export const baseModule = defineConfig(base)
export const jsonModule = defineConfig(sortJson)
export const typescriptModule = defineConfig(base, typescript)
export const vueModule = defineConfig(base, typescript, vue)
export const reactModule = defineConfig(base, typescript, react)
export const nestJsModule = defineConfig(base, typescript, nestJs)

// Type exports for better TypeScript support
export type { Linter }

/**
 * Plugin configuration type
 */
export interface PluginConfig {
  configs: {
    recommended: Linter.Config[]
    strict: Linter.Config[]
  }
  rules: Record<string, Linter.RuleEntry>
}
