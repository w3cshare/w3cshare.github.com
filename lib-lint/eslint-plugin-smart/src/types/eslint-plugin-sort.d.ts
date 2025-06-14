declare module 'eslint-plugin-sort' {
  import type { ESLint } from 'eslint'

  const plugin: ESLint.Plugin & {
    configs: {
      'flat/recommended': {
        rules: Record<string, any>
      }
    }
  }

  export default plugin
}
