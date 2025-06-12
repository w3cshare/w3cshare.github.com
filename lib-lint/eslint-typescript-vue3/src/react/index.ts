// import { defineConfig } from 'eslint/config'
import pluginReact from 'eslint-plugin-react'

export default [
  { files: ['**/*.{jsx,tsx}', '*.{jsx,tsx}'], ...pluginReact.configs.flat.recommended },
]
