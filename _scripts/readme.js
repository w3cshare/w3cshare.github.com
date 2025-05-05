/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-23 20:37:12
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-06 09:30:30
 * @FilePath: /FullStack/_scripts/readme.js
 * @Description: 生成子项目README.md文件，符合VitePress文档规范
 */

const fs = require('fs');
const path = require('path');

// 要处理的目录
const directories = [
  'apps',
  'lib-vue',
  'lib-react',
  'micro-frontend',
  'micro-service',
  'packages',
  'lib-nest',
  'lib-cli',
  'lib-lint'
];

// 递归获取所有子目录
function getSubDirectories(dir) {
  try {
    return fs.readdirSync(dir)
      .filter(file => fs.statSync(path.join(dir, file)).isDirectory())
      .filter(file => !file.startsWith('.') && !file.startsWith('_'));
  } catch (err) {
    console.warn(`无法读取目录 ${dir}:`, err.message);
    return [];
  }
}

// 获取包的显示名称
function getPackageDisplayName(pkgPath) {
  try {
    if (fs.existsSync(pkgPath)) {
      const pkgJson = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
      return pkgJson.displayName || pkgJson.name || path.basename(path.dirname(pkgPath));
    }
  } catch (e) {
    console.warn(`无法读取package.json: ${pkgPath}`, e);
  }
  return path.basename(path.dirname(pkgPath));
}

// 生成README.md内容
function generateReadme(pkgPath, dirName) {
  const displayName = getPackageDisplayName(pkgPath);
  const dirBaseName = path.basename(dirName);
  
  return `---
layout: doc
title: ${displayName}
---

# ${displayName}

## 项目简介

此项目是 \`${dirBaseName}\` 目录下的一个子项目，主要用于...（请在此处添加项目描述）

## 功能特性

- 特性一
- 特性二
- 特性三

## 快速开始

### 安装

\`\`\`bash
pnpm install
\`\`\`

### 开发

\`\`\`bash
pnpm dev
\`\`\`

### 构建

\`\`\`bash
pnpm build
\`\`\`

## 技术栈

- 技术一
- 技术二
- 技术三

## 目录结构

\`\`\`
src/
├── components/    # 组件目录
├── utils/         # 工具函数
├── hooks/         # 自定义钩子
└── types/         # 类型定义
\`\`\`

## API文档

详细的API使用说明请参考[API文档](./docs/api.md)。

## 贡献指南

欢迎提交问题和贡献代码。

## 许可证

MIT
`;
}

// 为指定目录下的所有子项目创建README.md
function createReadmeForDir(baseDir) {
  const fullBaseDir = path.resolve(__dirname, '..', baseDir);
  const subDirs = getSubDirectories(fullBaseDir);
  
  for (const dir of subDirs) {
    const dirPath = path.join(fullBaseDir, dir);
    const pkgPath = path.join(dirPath, 'package.json');
    const readmePath = path.join(dirPath, 'README.md');
    
    // 如果目录存在package.json但没有README.md，创建一个
    if (fs.existsSync(pkgPath) && !fs.existsSync(readmePath)) {
      try {
        fs.writeFileSync(readmePath, generateReadme(pkgPath, dirPath));
        console.log(`已创建README.md: ${readmePath}`);
      } catch (err) {
        console.error(`创建README.md失败 ${readmePath}:`, err);
      }
    }
  }
}

// 主执行函数
function main() {
  console.log('开始生成README.md文件...');
  
  for (const dir of directories) {
    console.log(`处理目录: ${dir}`);
    createReadmeForDir(dir);
  }
  
  console.log('README.md生成完成!');
}

// 执行
main();
