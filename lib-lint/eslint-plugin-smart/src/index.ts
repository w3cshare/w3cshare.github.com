/**
 * @file ESLint Flat Config preset for TypeScript and Vue3 projects
 * @author ww <wwdqq7@qq.com>
 * @version 1.0.0
 * @description A comprehensive ESLint configuration preset for TypeScript and Vue3 projects with React support
 * @license MIT
 */

import type { Linter } from 'eslint'

// Base configurations
import base from './base'

// Base configurations END
/*
 * Code style configurations
 */
import sortObject from './common/sort-object'
import unusedImports from './common/unused-imports'
import sortJson from './json'
import nestJs from './nest'
import react from './react'
import stylelint from './style/stylelint'
import typescript from './typescript'
import vueJs from './vue'
import vueTypescript from './vue/vue-typescript'

/**
 * Configuration metadata
 */
export const meta = {
  description: '为TypeScript和Vue3项目预设的全面ESLint配置，支持React',
  name: 'eslint-plugin-smart',
  supported: {
    eslint: '>=9.0.0',
    node: '>=16.0.0',
    typescript: '>=4.0.0',
  },
  version: '1.0.0',
} as const

// Default configuration combining all features
const config = [
  // Base ESLint rules
  ...base,

  // Code style optimization rules
  ...sortJson, // JSON file sorting
  // ...sortImport, // Import statement sorting
  ...unusedImports, // Remove unused imports
  ...sortObject, // Object property sorting

  // Language-specific rules
  ...typescript, // TypeScript rules
  ...vueTypescript, // Vue3 + TypeScript rules
  ...react, // React rules

  // Style rules
  ...stylelint,
].flat()

export default (_: {
  react?: boolean
  vue?: boolean
  vue3?: boolean
  typescript?: boolean
  nestJs?: boolean
  css?: boolean
  markdown?: boolean
  unusedImports?: boolean
  unusedVars?: boolean
  orderObject?: boolean
  orderArray?: boolean
  prettier?: boolean
  stylistic?: boolean
  orderJson?: boolean
}) => {
  return config as Linter.Config[]
}

// Specialized presets for different project types
export const baseModule = [...base].flat()
export const jsonModule = [...sortJson].flat()
export const typescriptModule = [...base, ...typescript].flat()
export const vueTsModule = [...base, ...typescript, ...vueTypescript].flat()
export const vueJsModule = [...base, ...vueJs].flat()
export const reactJsModule = [...base, ...react].flat()
export const reactTsModule = [...base, ...typescript, ...react].flat()
export const nestJsModule = [...base, ...typescript, ...nestJs].flat()

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
  rules: Record<string, any>
}
