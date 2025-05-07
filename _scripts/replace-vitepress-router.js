/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-05-07 16:31:05
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-07 16:32:55
 * @FilePath: /FullStack/_scripts/replace-vitepress-router.js
 * @Description: 自动替换vitepress中的router
 */
import { globSync } from 'glob'
import process from 'process'

const subProjectPaths = globSync('{apps,apps-*,lib-*,micro-*,libs}/*/', {
  // const subProjectPaths = globSync('{apps,apps-*,lib-*,micro-*,libs}/', {
  cwd: process.cwd(),
  ignore: ['**/node_modules/**', '**/.git/**', '**/docs/**', 'docs/**'],
  onlyDirectories: true,
})
console.log('🚀 ~ file: replace-vitepress-router.js:7 ~ subProjectPaths:', subProjectPaths)
