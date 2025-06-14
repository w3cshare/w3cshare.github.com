declare module 'eslint-plugin-vue' {
  import type { ESLint } from 'eslint'

  const plugin: ESLint.Plugin & {
    configs: {
      base: {
        rules: Record<string, any>
      }
    }
    essential: {
      rules: Record<string, any>
    }
    processors: {
      '.vue': ESLint.Processor
    }
  }

  export default plugin
}
