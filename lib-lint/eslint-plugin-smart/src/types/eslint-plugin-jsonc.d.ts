declare module 'eslint-plugin-jsonc' {
  import type { ESLint, Linter } from 'eslint'

  const plugin: ESLint.Plugin & {
    configs: {
      'recommended-with-jsonc': {
        rules: Record<string, Linter.RuleEntry>
      }
    }
    parser: Linter.ParserModule
  }

  export default plugin
}
