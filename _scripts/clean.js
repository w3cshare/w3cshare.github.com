/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-03-28 23:11:36
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-10 21:53:28
 * @FilePath: /FullStack/clean.js
 * @Description: 删除子项目下的 node_modules 文件夹
 */
import fs from 'fs/promises'
import path from 'path'

/**
 * 递归查找特定名称的文件夹
 * @param {string} dir - 起始目录
 * @param {string} targetFolderName - 要查找的文件夹名称
 * @returns {Promise<string[]>} - 找到的文件夹路径数组
 */
async function findFolders(dir, targetFolderName) {
  let results = []

  try {
    const entries = await fs.readdir(dir, { withFileTypes: true })

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)

      if (entry.isDirectory()) {
        if (entry.name === targetFolderName) {
          results.push(fullPath)
        }

        // 递归查找子目录
        const subResults = await findFolders(fullPath, targetFolderName)
        results = results.concat(subResults)
      }
    }
  } catch (err) {
    // disable-next-line no-console
    console.error(`Error reading directory ${dir}:`, err)
  }

  return results
}

async function handleRemoveFolder(targetFolderName) {
  const startDir = './' // 起始目录
  try {
    const folders = await findFolders(startDir, targetFolderName)

    // disable-next-line no-console
    console.log('Found folders:', folders)

    // 执行删除操作
    for (const folder of folders) {
      await fs.rm(folder, { recursive: true })

    // disable-next-line no-console
      console.log(`Deleted folder: ${folder}`)
    }
  } catch (err) {
    // disable-next-line no-console
    console.error('Error finding folders:', err)
  }
}

;['node_modules'].forEach(async targetFolderName => {
  await handleRemoveFolder(targetFolderName)
})
