const fs = require("fs");
const { globSync } = require("glob");
const path = require("path");

// 需要删除的文件列表
const filesToDelete = [
  ".prettierrc",
  ".gitignore",
  "eslint.config.mjs",
  "tsconfig.json",
  "package.json",
];

// 查找所有子项目下的docs文件夹
const docsDirectories = globSync("**/docs", {
  ignore: ["node_modules/**", ".git/**", ".vitepress/**"],
});

console.log(`找到 ${docsDirectories.length} 个docs文件夹`);

// 遍历每个docs文件夹
docsDirectories.forEach((docsDir) => {
  console.log(`检查文件夹: ${docsDir}`);

  // 检查每个需要删除的文件
  filesToDelete.forEach((fileName) => {
    const filePath = path.join(docsDir, fileName);

    // 检查文件是否存在
    if (fs.existsSync(filePath)) {
      try {
        // 删除文件
        fs.unlinkSync(filePath);
        console.log(`已删除: ${filePath}`);
      } catch (err) {
        console.error(`删除 ${filePath} 时出错:`, err);
      }
    }
  });
});

console.log("清理完成！");
