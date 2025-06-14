declare module 'eslint-plugin-jsonc' {
  import type { ESLint } from 'eslint'

  const plugin: ESLint.Plugin & {
    configs: {
      'recommended-with-jsonc': {
        rules: Record<string, any>
      }
    }
    parser: any
  }

  export default plugin
}
