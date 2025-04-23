/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-14 22:39:19
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-23 16:44:39
 * @FilePath: /FullStack/_scripts/gitignore.js
 * @Description: gitignore文件生成脚本
 */
const fs = require('fs')
const { globSync } = require('glob')
const path = require('path')

try {
  const directories = globSync('./*/*/', {
    ignore: ['node_modules/**', 'utils/**', 'docs/**'],
    absolute: true,
  })

  directories.forEach(dir => {
    // 判断文件是否存在
    const gitignorePath = path.join(dir, '.gitignore')
    const isFileExist = fs.existsSync(gitignorePath)
    if (!isFileExist) {
      console.log('🚀 ~ file: gitignore.js:20 ~ dir:', dir)
      fs.writeFileSync(gitignorePath, 'node_modules\ndist\nlib\n\r', 'utf-8')
    }
  })
} catch (error) {
  console.error('目录遍历失败：', error.message)
  process.exitCode = 1
}
