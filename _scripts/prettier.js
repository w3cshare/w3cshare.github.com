/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-05-05 13:04:43
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-05 17:30:13
 * @FilePath: /FullStack/_scripts/prettier.js
 * @Description:
 */
const fs = require('fs')
const { globSync } = require('glob')
const path = require('path')

const PROJECT_STRUCTURE_PATHS = globSync('**/PROJECT_STRUCTURE.md', {
  cwd: process.cwd(),
  ignore: ['**/node_modules/**', '**/.git/**', '**/docs/**', 'docs/**'],
})

PROJECT_STRUCTURE_PATHS.forEach(filePath => {
  fs.unlinkSync(filePath)
})

console.log(PROJECT_STRUCTURE_PATHS)
