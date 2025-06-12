declare module 'typescript-eslint' {
  import type { ESLint } from 'eslint'

  const tseslint: {
    config: ESLint.ConfigModule
    configs: {
      recommended: ESLint.ConfigModule
      strict: ESLint.ConfigModule
      stylistic: ESLint.ConfigModule
    }
    parser: ESLint.Parser
  }

  export default tseslint
}
