const fs = require('fs');
const { globSync } = require('glob');
const path = require('path');

try {
  const directories = globSync('./*/*/', {
    ignore: ['node_modules/**', 'utils/**', 'docs/**'],
    absolute: true,
  });

  directories.forEach(dir => {
    // 判断文件是否存在
    const gitignorePath = path.join(dir, '.gitignore');
    const isFileExist = fs.existsSync(gitignorePath);
    if (!isFileExist) {
      console.log('🚀 ~ file: gitignore.js:20 ~ dir:', dir);
      fs.writeFileSync(gitignorePath, `dist\n\rnode_modules`, 'utf-8');
    }
  });
} catch (error) {
  console.error('目录遍历失败：', error.message);
  process.exitCode = 1;
}
