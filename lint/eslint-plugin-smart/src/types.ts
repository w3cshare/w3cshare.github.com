/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-21 12:40:09
 * @LastEditors: wangwei wwdqq7@qq.com
 * @FilePath: /FullStack/lint/eslint-plugin-smart/src/types.ts
 * @Description: 类型定义
 */

/**
 * ESLint插件类型
 */
export interface ESLintPlugin {
  configs?: Record<string, unknown>
  rules?: Record<string, unknown>
  parser?: {
    parse(text: string, options?: unknown): unknown
  }
}

/**
 * ESLint规则集类型
 */
export type ESLintRuleSet = Record<string, unknown>

/**
 * ESLint插件导出类型
 */
export interface ESLintPluginExport {
  rules: Record<string, ESLintRuleSet>
  plugins: Record<string, ESLintPlugin>
  configs?: Record<string, unknown>
}

/**
 * ESLint v9扁平配置类型
 */
export interface FlatConfig {
  files?: string[]
  ignores?: string[]
  languageOptions?: {
    parser?: unknown
    parserOptions?: Record<string, unknown>
    globals?: Record<string, boolean>
  }
  linterOptions?: {
    noInlineConfig?: boolean
    reportUnusedDisableDirectives?: boolean
  }
  plugins?: Record<string, unknown>
  processor?: unknown
  rules?: Record<string, unknown>
  settings?: Record<string, unknown>
}

/**
 * ESLint插件加载结果类型
 */
export interface LoadedPlugins {
  import: ESLintPlugin
  simpleImportSort: ESLintPlugin
  unusedImports: ESLintPlugin
  typescriptEslint: ESLintPlugin
  typescriptEslintParser: ESLintPlugin
  react: ESLintPlugin
  reactHooks: ESLintPlugin
  jsxA11y: ESLintPlugin
  vue: ESLintPlugin
  vueEslintParser: ESLintPlugin
  node: ESLintPlugin
  prettier: ESLintPlugin
  eslintConfigPrettier: ESLintPlugin
  jsonc: ESLintPlugin
}
