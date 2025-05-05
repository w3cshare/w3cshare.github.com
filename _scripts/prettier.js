/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-05-05 13:04:43
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-05 18:28:40
 * @FilePath: /FullStack/_scripts/prettier.js
 * @Description: 获取项目中的二级目录（子项目目录）路径
 */
const fs = require('fs')
const { globSync } = require('glob')
const path = require('path')

// const PROJECT_STRUCTURE_PATHS = globSync('**/PROJECT_STRUCTURE.md', {
//   cwd: process.cwd(),
//   ignore: ['**/node_modules/**', '**/.git/**', '**/docs/**', 'docs/**'],
// })

// PROJECT_STRUCTURE_PATHS.forEach(filePath => {
//   fs.unlinkSync(filePath)
// })

// console.log(PROJECT_STRUCTURE_PATHS)

/**
 * 获取二级目录（子项目目录）路径
 * 根据项目结构，直接列出主要的子项目目录类型
 */
const subProjectPaths = globSync('{apps,lib-*,micro-*,libs}/*/', {
  // const subProjectPaths = globSync('{apps-java,apps-native,apps-python}/*/', {
  cwd: process.cwd(),
  ignore: ['**/node_modules/**', '**/.git/**', '**/docs/**', 'docs/**'],
  onlyDirectories: true,
})
const PRETTIERRC_CJS_TEMPLATE = `
module.exports = {
  plugins: [require('prettier-plugin-smart')],
  ...require('prettier-plugin-smart').defaultOptions,
}
`
subProjectPaths.forEach(projectDir => {
  const prettierrcCjsPath = path.join(process.cwd(), projectDir, '.prettierrc.cjs')
  const prettierrcPath = path.join(process.cwd(), projectDir, '.prettierrc')
  fs.existsSync(prettierrcPath) && fs.unlinkSync(prettierrcPath)
  fs.writeFileSync(prettierrcCjsPath, PRETTIERRC_CJS_TEMPLATE)
})
console.log('🚀 ~ file: prettier.js:40 ~ subProjectPaths:', subProjectPaths)
