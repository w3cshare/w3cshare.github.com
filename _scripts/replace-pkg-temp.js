/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-05-09 14:08:40
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-09 14:28:59
 * @FilePath: /FullStack/_scripts/replace-pkg-temp.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import fs from 'fs'
import { globSync } from 'glob'
import path from 'path'

const subProjectPaths = globSync('{apps,apps-*,micro-*,lib-*,libs,packages,package-*}/*/', {
  cwd: process.cwd(),
  ignore: ['**/node_modules/**', '**/.git/**', '**/docs/**', 'docs/**'],
  onlyDirectories: true,
})

subProjectPaths.forEach(subProjectPath => {
  const pkgPath = path.join(process.cwd(), subProjectPath, 'package.json')

  if (!fs.existsSync(pkgPath)) {
    return
  }

  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))

  pkg.repository = {
    directory: subProjectPath,
    type: 'git',
    url: 'https://github.com/w3cshare/w3cshare.github.io.git',
  }

  if (!pkg.displayName) {
    // pkg.displayName = subProjectPath.split('/').pop()
    pkg.displayName = pkg.name
  }

  fs.writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`)
})

// console.log('🚀 ~ file: .commitlintrc.mjs:12 ~ subProjectPaths:', subProjectPaths)
