import { globSync } from 'glob'
import fs from 'fs'
import path from 'path'

const subProjectPaths = globSync('{apps,lib-*,micro-*,libs}/*/', {
  // const subProjectPaths = globSync('{apps-java,apps-native,apps-python}/*/', {
  cwd: process.cwd(),
  ignore: ['**/node_modules/**', '**/.git/**', '**/docs/**', 'docs/**'],
  onlyDirectories: true,
})
const stylelint_CJS_TEMPLATE = `
import stylelintConfigSmart from 'stylelint-config-smart'

export default stylelintConfigSmart()

`
subProjectPaths.forEach(projectDir => {
  const stylelintCjsPath = path.join(process.cwd(), projectDir, 'stylelint.config.mjs')
  const stylelintPath = path.join(process.cwd(), projectDir, 'stylelint.config.mjs')
  fs.existsSync(stylelintPath) && fs.unlinkSync(stylelintPath)
  fs.writeFileSync(stylelintCjsPath, stylelint_CJS_TEMPLATE)
})
console.log('🚀 ~ file: stylelint.js:40 ~ subProjectPaths:', subProjectPaths)
