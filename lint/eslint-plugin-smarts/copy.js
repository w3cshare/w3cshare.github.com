/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-22 17:35:50
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-23 18:01:08
 * @FilePath: /FullStack/lint/eslint-plugin-smarts/copy.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-22
 * @Description: 文件复制脚本，用于将上级目录中的文件和文件夹复制到当前项目中
 */

const fs = require("fs");
const path = require("path");

/**
 * 确保目标目录存在，如果不存在则创建
 * @param {string} targetDir - 目标目录路径
 */
function ensureDirectoryExistence(targetDir) {
  if (!fs.existsSync(targetDir)) {
    // 递归创建目录
    fs.mkdirSync(targetDir, { recursive: true });
    console.log(`创建目录: ${targetDir}`);
  }
}

/**
 * 递归复制文件夹及其内容
 * @param {string} source - 源目录路径
 * @param {string} target - 目标目录路径
 */
function copyFolderRecursive(source, target) {
  // 确保目标目录存在
  ensureDirectoryExistence(target);

  // 读取源目录中的所有文件和文件夹
  const items = fs.readdirSync(source);

  // 遍历所有项目
  for (const item of items) {
    const sourcePath = path.join(source, item);
    const targetPath = path.join(target, item);

    // 获取文件/目录状态
    const stat = fs.statSync(sourcePath);

    if (stat.isDirectory()) {
      // 如果是目录，递归复制
      copyFolderRecursive(sourcePath, targetPath);
    } else {
      // 如果是文件，直接复制
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`复制文件: ${sourcePath} -> ${targetPath}`);
    }
  }
}

// 主函数
function main() {
  // 定义源路径和目标路径
  const sourceDocsPath = path.resolve(__dirname, "../eslint-plugin-smart/docs");
  const targetDocsPath = path.resolve(__dirname, "./docs");

  const sourceSrcPath = path.resolve(__dirname, "../eslint-plugin-smart/src");
  const targetSrcPath = path.resolve(__dirname, "./src");

  // 定义README.md的源路径和目标路径
  const sourceReadmePath = path.resolve(
    __dirname,
    "../eslint-plugin-smart/README.md",
  );
  const targetReadmePath = path.resolve(__dirname, "./README.md");

  // 检查源路径是否存在
  if (!fs.existsSync(sourceDocsPath)) {
    console.error(`错误: 源目录不存在 - ${sourceDocsPath}`);
    return;
  }

  if (!fs.existsSync(sourceSrcPath)) {
    console.error(`错误: 源目录不存在 - ${sourceSrcPath}`);
    return;
  }

  if (!fs.existsSync(sourceReadmePath)) {
    console.error(`错误: 源README.md文件不存在 - ${sourceReadmePath}`);
    return;
  }

  console.log("开始复制文件...");

  // 复制docs目录到docs/main
  copyFolderRecursive(sourceDocsPath, targetDocsPath);

  // 复制src目录到src1
  copyFolderRecursive(sourceSrcPath, targetSrcPath);

  // 复制README.md文件到当前目录，覆盖已存在的文件
  fs.copyFileSync(sourceReadmePath, targetReadmePath);
  console.log(`复制文件: ${sourceReadmePath} -> ${targetReadmePath}`);

  console.log("文件复制完成!");
}

// 执行主函数
main();
