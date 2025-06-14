import { globSync } from 'glob'
import fs from 'fs'
import path from 'path'

const subProjectPaths = globSync('{apps,lib-*,micro-*,libs}/*/', {
  // const subProjectPaths = globSync('{apps-java,apps-native,apps-python}/*/', {
  cwd: process.cwd(),
  ignore: ['**/node_modules/**', '**/.git/**', '**/docs/**', 'docs/**'],
  onlyDirectories: true,
})
const eslint_CJS_TEMPLATE = `
import eslintPluginSmart from 'eslint-plugin-smart'

export default eslintPluginSmart()
`
subProjectPaths.forEach(projectDir => {
  const eslintCjsPath = path.join(process.cwd(), projectDir, 'eslint.config.js')
  const eslintPath = path.join(process.cwd(), projectDir, 'eslint.config.js')
  fs.existsSync(eslintPath) && fs.unlinkSync(eslintPath)
  fs.writeFileSync(eslintCjsPath, eslint_CJS_TEMPLATE)
})
console.log('🚀 ~ file: eslint.js:40 ~ subProjectPaths:', subProjectPaths)
