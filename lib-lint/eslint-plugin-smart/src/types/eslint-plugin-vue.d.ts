declare module 'eslint-plugin-vue' {
  import type { ESLint, Linter } from 'eslint'

  const plugin: ESLint.Plugin & {
    configs: {
      base: {
        rules: Record<string, Linter.Rule>
      }
    }
    essential: {
      rules: Record<string, Linter.Rule>
    }
    processors: {
      '.vue': ESLint.Processor
    }
  }

  export default plugin
}
