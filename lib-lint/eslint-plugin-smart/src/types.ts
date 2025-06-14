/**
 * @file ESLint configuration type definitions
 */

import type { Linter } from 'eslint'

export type FilePattern = (string | string[])[]

export interface BaseConfig {
  files: FilePattern
  languageOptions?: {
    globals?: Record<string, boolean>
    parser?: any
    parserOptions?: Record<string, any>
    [key: string]: any
  }
  name: string
  plugins?: Record<string, any>
  processor?: string | Linter.Processor
}

export interface LanguageConfig extends BaseConfig {
  extends?: string[]
  language?: string
}

export interface RuleConfig extends BaseConfig {
  rules: Linter.RulesRecord
}

export const SUPPORTED_EXTENSIONS = {
  JSON: ['json', 'jsonc', 'json5'],
  MARKDOWN: ['md', 'markdown'],
  SCRIPT: ['js', 'mjs', 'cjs', 'ts', 'mts', 'cts', 'jsx', 'tsx', 'vue'],
  STYLE: ['css', 'scss', 'less'],
} as const

export const createFilePattern = (extensions: readonly string[]): FilePattern => {
  return [`**/*.{${extensions.join(',')}}`, `*.{${extensions.join(',')}}`]
}

export const FILE_PATTERNS = {
  JSON: createFilePattern(SUPPORTED_EXTENSIONS.JSON),
  MARKDOWN: createFilePattern(SUPPORTED_EXTENSIONS.MARKDOWN),
  SCRIPT: createFilePattern(SUPPORTED_EXTENSIONS.SCRIPT),
  STYLE: createFilePattern(SUPPORTED_EXTENSIONS.STYLE),
}

export const IGNORE_PATTERNS = [
  '**/node_modules/**',
  '**/dist/**',
  '**/dist-ssr/**',
  '**/lib/**',
  '**/coverage/**',
  '**/.git/**',
  '**/.vscode/**',
  '**/.idea/**',
] as string[]
