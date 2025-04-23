const fs = require('fs')
const { globSync } = require('glob')
const path = require('path')

try {
  const directories = globSync('./*/*/', {
    ignore: ['node_modules/**', '*/node_modules/**', 'docs/**'],
    absolute: true,
  })

  directories.forEach(dir => {
    // 判断文件是否存在
    const promptPath = path.join(dir, 'PROMPT.md')
    const isFileExist = fs.existsSync(promptPath)
    if (!isFileExist) {
      fs.writeFileSync(promptPath, `# ${path.basename(dir)}`, 'utf-8')
    }
  })
} catch (error) {
  console.error('目录遍历失败：', error.message)
  process.exitCode = 1
}
