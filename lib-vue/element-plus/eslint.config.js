import eslintPlugin from 'eslint-plugin-smart'

export default [...eslintPlugin.configs.nodejs, ...eslintPlugin.configs.json]
