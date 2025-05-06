/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-05-06 22:14:30
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-06 22:35:05
 * @FilePath: /FullStack/_scripts/replace-gitignore.js
 * @Description: replace gitignore
 */
import fs from 'fs'
import { globSync } from 'glob'
import path from 'path'
import process from 'process'

// const { execFile } = require('child_process')

const subProjectPaths = globSync('{apps,apps-*,lib-*,micro-*,libs}/*/', {
  // const subProjectPaths = globSync('{apps,apps-*,lib-*,micro-*,libs}/', {
  cwd: process.cwd(),
  ignore: ['**/node_modules/**', '**/.git/**', '**/docs/**', 'docs/**'],
  onlyDirectories: true,
})

// console.log('🚀 ~ file: replace-gitignore.js:18 ~ subProjectPaths:', subProjectPaths)
subProjectPaths.forEach(subProjectPaths => {
  const gitignorePath = path.join(subProjectPaths, '.gitignore')
  let gitignoreContent = ''
  if (fs.existsSync(gitignorePath)) {
    gitignoreContent = fs.readFileSync(gitignorePath, 'utf8')
  }
  if (!gitignoreContent.includes('.DS_Store')) {
    gitignoreContent += '\n# 系统文件\n.DS_Store\n'
  }
  fs.writeFileSync(gitignorePath, gitignoreContent, 'utf8')

  // console.log('🚀 ~ file: replace-gitignore.js:26 ~ gitignoreContent:', gitignoreContent)
})

// console.log('🚀 ~ file: replace-gitignore.js:16 ~ subProjectPaths:', subProjectPaths)

// const gitignorePath = path.join(process.cwd(), '.gitignore')
