/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-05-05 19:04:36
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-05 20:24:03
 * @FilePath: /FullStack/_scripts/set-scripts.js
 * @Description:
 */
import { globSync } from 'glob'
import fs from 'fs'
import path from 'path'

// const { execFile } = require('child_process')

const subProjectPaths = globSync('{apps,lib-*,micro-*,libs}/*/', {
  cwd: process.cwd(),
  ignore: ['**/node_modules/**', '**/.git/**', '**/docs/**', 'docs/**'],
  onlyDirectories: true,
})

// const lintJs = 'npm pkg set scripts.lint:js="eslint --fix \"**/*.{js,jsx,ts,tsx}\""'
// const lintJson = 'npm pkg set scripts.lint:json="eslint --fix \"**/*.json\""'
// const lintStyle = 'npm pkg set scripts.lint:style="stylelint --fix \"**/*.{css,scss,less}\""'
// const lintFormat =
//   'npm pkg set scripts.format="prettier --write \"**/*.{js,jsx,ts,tsx,css,scss,less,json,md}\""'

subProjectPaths.forEach(subProjectPath => {
  const absolutePath = path.join(process.cwd(), subProjectPath)
  const packageJsonPath = path.join(absolutePath, 'package.json')
  if (!fs.existsSync(packageJsonPath)) {
    return
  }
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))
  const scripts = packageJson.scripts || {}
  delete scripts['lint:js']
  delete scripts['lint:json']
  delete scripts['lint:style']
  const newScripts = {
    ...scripts,
    // test: 'jest',
    // 'test:watch': 'jest --watch',
    lint: 'eslint .',
    'lint:fix': 'eslint . --fix',
    format: 'prettier --write .',
    style: 'stylelint "**/*.{css,scss,less}"',
    'style:fix': 'stylelint --fix "**/*.{css,scss,less}"',
  }
  packageJson.scripts = newScripts
  fs.writeFileSync(packageJsonPath, `${JSON.stringify(packageJson, null, 2)}\n`)
})

// console.log('🚀 ~ file: set-scripts.js:14 ~ subProjectPaths:', subProjectPaths)
