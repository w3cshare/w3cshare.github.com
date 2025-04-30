/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-13 22:15:34
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-13 23:03:30
 * @FilePath: /FullStack/_scripts/structure.js
 * @Description: 生成目录结构文档
 */
const fs = require('fs')
const { globSync } = require('glob')
const path = require('path')

// 从README.md文件中提取标题
function extractTitleFromReadme(filePath) {
  if (!fs.existsSync(filePath)) {
    return ''
  }

  try {
    const content = fs.readFileSync(filePath, 'utf-8')
    // 查找第一个 # 开头的行作为标题
    const titleMatch = content.match(/^# (.+)$/m)
    return titleMatch ? titleMatch[1].trim() : ''
  } catch (e) {
    return ''
  }
}

// 生成目录结构文档
function generateStructureDoc(basePath, outputPath) {
  const directories = globSync(path.join(basePath, '**/'), {
    ignore: ['**/node_modules/**', '**/dist/**', '**/.git/**', '**/coverage/**'],
    absolute: true,
  })

  // 创建目录分组结构
  const groups = {}
  const descriptions = {}

  directories.forEach(dir => {
    // 跳过根目录
    if (dir === basePath) return

    const relativePath = path.relative(basePath, dir)
    const parts = relativePath.split(path.sep)

    if (parts.length > 1) {
      const groupName = parts[0]
      const dirName = parts[1]

      groups[groupName] = groups[groupName] || []
      if (!groups[groupName].includes(dirName)) {
        groups[groupName].push(dirName)
      }

      // 读取 README.md 中的标题
      const readmePath = path.join(dir, 'README.md')
      descriptions[`${groupName}/${dirName}`] = extractTitleFromReadme(readmePath) || ''
    }
  })

  // 生成目录结构文档
  const dirName = path.basename(basePath)
  const readmeContent = `# ${dirName} 项目目录结构

\`\`\`
${dirName}/
${Object.entries(groups)
  .map(([group, items]) => {
    const groupPrefix = '├── '
    const itemPrefix = '│   '
    const treeItems = items
      .map((item, index) => {
        const isLast = index === items.length - 1
        const prefix = isLast ? `${itemPrefix}└── ` : `${itemPrefix}├── `
        const desc = descriptions[`${group}/${item}`]
        return `${prefix}${item}${desc ? ` // ${desc}` : ''}`
      })
      .join('\n')
    return `${groupPrefix}${group}/\n${treeItems}`
  })
  .join('\n')}

\`\`\`
`

  fs.writeFileSync(outputPath, readmeContent)
}

try {
  // 生成根目录的结构文档
  const directories = globSync('./*/*/', {
    ignore: ['node_modules/**', '*/node_modules/**', 'docs/**'],
    absolute: true,
  })

  // 创建目录分组结构
  const groups = {}
  const descriptions = {}
  const parentDirs = new Set() // 用于存储上级目录路径

  directories.forEach(dir => {
    const groupName = path.basename(path.dirname(dir))
    const dirName = path.basename(dir)
    groups[groupName] = groups[groupName] || []
    groups[groupName].push(dirName)

    // 收集上级目录路径
    const parentDir = path.dirname(dir)
    if (!parentDirs.has(parentDir)) {
      parentDirs.add(parentDir)
    }

    // 读取 README.md 中的标题
    const readmePath = path.join(dir, 'README.md')
    descriptions[`${groupName}/${dirName}`] = extractTitleFromReadme(readmePath) || ''
  })

  // 生成分组目录结构文档
  const readmeContent = `# Lerna + Nx + pnpm + Workspace 的单体（mono）项目目录结构

\`\`\`
FullStack/
${Object.entries(groups)
  .map(([group, items]) => {
    const groupPrefix = '├── '
    const itemPrefix = '│   '
    const treeItems = items
      .map((item, index) => {
        const isLast = index === items.length - 1
        const prefix = isLast ? `${itemPrefix}└── ` : `${itemPrefix}├── `
        const desc = descriptions[`${group}/${item}`]
        return `${prefix}${item}${desc ? ` // ${desc}` : ''}`
      })
      .join('\n')
    return `${groupPrefix}${group}/\n${treeItems}`
  })
  .join('\n')}
\`\`\``
  fs.writeFileSync('PROJECT_STRUCTURE.md', readmeContent)

  // 为每个子项目和上级目录生成结构文档
  directories.forEach(dir => {
    if (fs.existsSync(path.join(dir, 'package.json'))) {
      try {
        generateStructureDoc(dir, path.join(dir, 'PROJECT_STRUCTURE.md'))
      } catch (e) {
        console.error(`生成子项目 ${dir} 的目录结构失败：`, e.message)
      }
    }
  })

  // 为上级目录生成结构文档
  parentDirs.forEach(parentDir => {
    try {
      generateStructureDoc(parentDir, path.join(parentDir, 'PROJECT_STRUCTURE.md'))
    } catch (e) {
      console.error(`生成上级目录 ${parentDir} 的目录结构失败：`, e.message)
    }
  })
} catch (error) {
  console.error('目录遍历失败：', error.message)
  process.exitCode = 1
}
