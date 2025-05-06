import eslintPlugin from 'eslint-plugin-smart'

export default [...eslintPlugin.configs.nestjs, ...eslintPlugin.configs.json]
