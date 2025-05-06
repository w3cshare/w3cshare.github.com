/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-05-06 12:06:19
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-06 12:19:30
 * @FilePath: /FullStack/_scripts/check_package_dev.js
 * @Description: 检查package.json中包是否需要放在devDependencies
 */

import fs from 'fs'
import { globSync } from 'glob'
import path from 'path'
import process from 'process'

const subProjectPaths = globSync('{lib-*,libs}/*/', {
  cwd: process.cwd(),
  ignore: ['**/node_modules/**', '**/.git/**', '**/docs/**', 'docs/**'],
  onlyDirectories: true,
})

subProjectPaths.forEach(subProjectPath => {
  const packageJsonPath = path.join(subProjectPath, 'package.json')
  if (!fs.existsSync(packageJsonPath)) {
    return
  }
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))
  const dependencies = packageJson.dependencies
  const devDependencies = packageJson.devDependencies
  const devPkg = ['tsup']
  if (dependencies) {
    Object.keys(dependencies).forEach(pkg => {
      if (devPkg.includes(pkg)) {
        devDependencies[pkg] = dependencies[pkg]
        delete dependencies[pkg]

        fs.writeFileSync(packageJsonPath, `${JSON.stringify(packageJson, null, 2)}\n`, 'utf-8')
      }
    })
  }
})

// console.log('🚀 ~ file: check_package_dev.js:17 ~ subProjectPaths:', subProjectPaths)
