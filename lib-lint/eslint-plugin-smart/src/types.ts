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
  parser?: {
    parse(text: string, options?: unknown): unknown
  }
  rules?: Record<string, unknown>
}

/**
 * ESLint规则集类型
 */
export type ESLintRuleSet = Record<string, unknown>

/**
 * ESLint v9扁平配置类型
 */
export interface FlatConfig {
  files?: string[]
  ignores?: string[]
  languageOptions?: {
    globals?: Record<string, boolean>
    parser?: unknown
    parserOptions?: Record<string, unknown>
  }
  linterOptions?: {
    noInlineConfig?: boolean
    reportUnusedDisableDirectives?: boolean
  }
  parser?: string | unknown
  plugins?: Record<string, unknown>
  processor?: unknown
  rules?: Record<string, unknown>
  settings?: Record<string, unknown>
}

/**
 * ESLint插件导出类型
 */
export interface ESLintPluginExport {
  configs: {
    base: FlatConfig[]
    json: FlatConfig[]
    nestjs: FlatConfig[]
    react: FlatConfig[]
    recommended: FlatConfig[]
    typescript: FlatConfig[]
    vue: FlatConfig[]
  }
  plugins: Record<string, ESLintPlugin>
  rules: Record<string, ESLintRuleSet>
}

/**
 * ESLint插件加载结果类型
 */
export interface LoadedPlugins {
  eslintConfigPrettier: ESLintPlugin
  import: ESLintPlugin
  jsonc: ESLintPlugin
  jsxA11y: ESLintPlugin
  node: ESLintPlugin
  prettier: ESLintPlugin
  react: ESLintPlugin
  reactHooks: ESLintPlugin
  simpleImportSort: ESLintPlugin
  sortKeysFix: ESLintPlugin
  typescriptEslint: ESLintPlugin
  typescriptEslintParser: ESLintPlugin
  typescriptSortKeys: ESLintPlugin
  unusedImports: ESLintPlugin
  vue: ESLintPlugin
  vueEslintParser: ESLintPlugin
}
