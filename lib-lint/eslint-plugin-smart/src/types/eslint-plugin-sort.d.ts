declare module 'eslint-plugin-sort' {
  import type { ESLint, Linter } from 'eslint'

  const plugin: ESLint.Plugin & {
    configs: {
      'flat/recommended': {
        rules: Record<string, Linter.RuleEntry>
      }
    }
  }

  export default plugin
}
