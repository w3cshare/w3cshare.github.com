/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-05-05 20:13:48
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-05 20:39:48
 * @FilePath: /FullStack/_scripts/replace-package.js
 * @Description:
 */

const fs = require('fs')
const { globSync } = require('glob')
const path = require('path')
/**
 * 对象合并方法
 * 后面对象的字段会覆盖前面对象的字段
 * 同时保留模板对象中的扩展字段
 *
 * @param {Object} template - 作为基础的模板对象
 * @param {...Object} sources - 需要合并的源对象
 * @returns {Object} - 合并后的新对象
 */
function mergeObjects(template, ...sources) {
  // 深拷贝模板对象
  const result = JSON.parse(JSON.stringify(template))

  // 遍历所有源对象
  sources.forEach(source => {
    if (source && typeof source === 'object') {
      // 遍历源对象的每个属性
      Object.keys(source).forEach(key => {
        // 如果属性存在于模板中，并且两者都是对象，进行递归合并
        if (
          key in result &&
          typeof result[key] === 'object' &&
          result[key] !== null &&
          typeof source[key] === 'object' &&
          source[key] !== null &&
          !Array.isArray(result[key]) &&
          !Array.isArray(source[key])
        ) {
          result[key] = mergeObjects(result[key], source[key])
        } else {
          // 否则直接覆盖
          result[key] = source[key]
        }
      })
    }
  })

  return result
}

/**
 * 替换包配置的方法
 *
 * @param {Object} packageConfig - 原始包配置
 * @param {Object} replacement - 替换的配置
 * @returns {Object} - 替换后的包配置
 */
function replacePackageConfig(packageConfig, replacement) {
  return mergeObjects(packageConfig, replacement)
}

const subProjectPaths = globSync('{apps,lib-*,micro-*,libs}/*/', {
  cwd: process.cwd(),
  ignore: ['**/node_modules/**', '**/.git/**', '**/docs/**', 'docs/**'],
  onlyDirectories: true,
})
const packageConfigPath = path.join(__dirname, './', '_package.json')
const packageConfig = JSON.parse(fs.readFileSync(packageConfigPath, 'utf-8'))
subProjectPaths.forEach(subProjectPath => {
  const packagePath = path.join(subProjectPath, 'package.json')
  if (!fs.existsSync(packagePath)) {
    return
  }

  const replacement = JSON.parse(fs.readFileSync(packagePath, 'utf-8'))
  packageConfig.repository.directory = subProjectPath
  const updatedPackageConfig = replacePackageConfig(packageConfig, replacement)

  fs.writeFileSync(packagePath, `${JSON.stringify(updatedPackageConfig, null, 2)}\n`, 'utf-8')
})

module.exports = {
  mergeObjects,
  replacePackageConfig,
}
