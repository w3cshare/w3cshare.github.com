/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-12 23:15:37
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-13 22:19:00
 * @FilePath: /FullStack/_scripts/readme.js
 * @Description: 生成子项目的readme.md
 */
const fs = require('fs');
const { globSync } = require('glob');
const path = require('path');

try {
  const directories = globSync('./*/*/', {
    ignore: ['node_modules/**', '*/node_modules/**', 'docs/**'],
    absolute: true,
  });

  directories.forEach(dir => {
    // 判断文件是否存在
    const readmePath = path.join(dir, 'README.md');
    const isFileExist = fs.existsSync(readmePath);
    if (!isFileExist) {
      fs.writeFileSync(readmePath, `# ${path.basename(dir)}`, 'utf-8');
    }
  });
} catch (error) {
  console.error('目录遍历失败：', error.message);
  process.exitCode = 1;
}
