/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-05-05 14:12:00
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-05 14:50:00
 * @FilePath: /FullStack/_scripts/replace-prettierrc.js
 * @Description: 遍历所有子项目，删除 .prettierrc 文件并创建 .prettierrc.cjs 文件
 */
const fs = require('fs');
const path = require('path');
const { globSync } = require('glob');

// 模板内容，从 prettier.js 获取
const prettierrc_cjs_template = `
module.exports = {
  plugins: [require('prettier-plugin-smart')],
  ...require('prettier-plugin-smart').defaultOptions,
}
`;

// 统计信息
let deletedCount = 0;
let createdCount = 0;
let skippedCount = 0;

// 递归找到子项目目录（包含 package.json 的目录）
function findProjectDirectories() {
  // 查找所有 package.json 文件的位置
  const packageJsonPaths = globSync('**/package.json', {
    cwd: process.cwd(),
    ignore: ['**/node_modules/**', '**/.git/**', '**/docs/**', 'docs/**'],
  });

  // 获取包含 package.json 的目录路径
  const projectDirs = packageJsonPaths.map(filePath => path.dirname(filePath));
  
  // 去重
  return [...new Set(projectDirs)];
}

// 获取子项目目录
const projectDirs = findProjectDirectories();

console.log(`找到 ${projectDirs.length} 个子项目目录`);

// 遍历每个子项目
projectDirs.forEach(projectDir => {
  // 检查路径是否包含 docs 目录
  if (projectDir.includes('docs')) {
    console.log(`跳过 docs 相关目录: ${projectDir}`);
    skippedCount++;
    return;
  }
  
  const prettierrcPath = path.join(process.cwd(), projectDir, '.prettierrc');
  const prettierrcCjsPath = path.join(process.cwd(), projectDir, '.prettierrc.cjs');
  
  try {
    // 检查是否存在 .prettierrc 文件
    if (fs.existsSync(prettierrcPath) && fs.statSync(prettierrcPath).isFile()) {
      // 删除 .prettierrc 文件
      fs.unlinkSync(prettierrcPath);
      deletedCount++;
      console.log(`已删除: ${prettierrcPath}`);
      
      // 创建 .prettierrc.cjs 文件
      fs.writeFileSync(prettierrcCjsPath, prettierrc_cjs_template);
      createdCount++;
      console.log(`已创建: ${prettierrcCjsPath}`);
    } else if (!fs.existsSync(prettierrcCjsPath)) {
      // 如果两个文件都不存在，创建 .prettierrc.cjs
      fs.writeFileSync(prettierrcCjsPath, prettierrc_cjs_template);
      createdCount++;
      console.log(`已创建: ${prettierrcCjsPath}`);
    } else {
      // 如果已经存在 .prettierrc.cjs，则跳过
      skippedCount++;
      console.log(`已跳过: ${projectDir} (已存在 .prettierrc.cjs)`);
    }
  } catch (error) {
    console.error(`处理 ${projectDir} 时出错:`, error.message);
  }
});

console.log('\n====== 执行完成 ======');
console.log(`删除的 .prettierrc 文件数量: ${deletedCount}`);
console.log(`创建的 .prettierrc.cjs 文件数量: ${createdCount}`);
console.log(`跳过的目录数量: ${skippedCount}`); 