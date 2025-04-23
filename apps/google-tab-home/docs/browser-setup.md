<!--
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-13 02:10:16
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-13 03:30:00
 * @FilePath: /FullStack/app/google-tab-home/docs/browser-setup.md
 * @Description: 谷歌浏览器设置默认标签页
-->

# 如何设置为浏览器默认标签页

本文档介绍如何将Google标签页设置为浏览器的默认新标签页。

## 先决条件

1. 已构建项目：`pnpm run build`或`pnpm run build-extension`
2. 将构建结果部署到服务器或本地服务

## 各浏览器设置方法

### Chrome浏览器

1. 通过Chrome网上应用商店安装（推荐）：

   - 将本项目打包为Chrome扩展
   - 确保已正确设置manifest.json文件
   - 上传至Chrome开发者控制台并发布
   - 访问 https://chrome.google.com/webstore/devconsole/ 并登录

   ```json
   // manifest.json 文件示例
   {
     "name": "自定义标签页",
     "version": "1.0.0",
     "description": "一个美观实用的自定义标签页",
     "manifest_version": 3,
     "chrome_url_overrides": {
       "newtab": "index.html"
     },
     "permissions": ["storage"]
   }
   ```

2. 本地开发安装方法：
   - 运行`pnpm run build-extension`以生成带图标的构建
   - 打开Chrome浏览器
   - 访问 `chrome://extensions/`
   - 开启右上角的"开发者模式"
   - 点击"加载已解压的扩展程序"
   - 选择本项目构建后的lib目录
   - 确认安装

### Edge浏览器

1. 与Chrome类似，可以通过Edge扩展商店安装
2. 本地开发安装方法同Chrome：
   - 访问 `edge://extensions/`
   - 开启开发者模式
   - 加载已解压的扩展

### Firefox浏览器

1. 创建Firefox扩展：

   - 创建`manifest.json`文件：

   ```json
   {
     "manifest_version": 2,
     "name": "自定义标签页",
     "version": "1.0.0",
     "description": "一个美观实用的自定义标签页",
     "chrome_url_overrides": {
       "newtab": "index.html"
     },
     "permissions": ["storage"]
   }
   ```

2. 临时安装方法：
   - 打开Firefox浏览器
   - 访问 `about:debugging#/runtime/this-firefox`
   - 点击"临时载入附加组件"
   - 选择项目中的manifest.json文件
   - 确认安装

## 关于图标

本项目提供了几种方式生成扩展所需的图标：

1. 使用预设的SVG图标：

   - 位于`src/extension/simple-icons/`目录
   - 这些是简单的SVG格式图标

2. 自动生成图标：

   - 运行`pnpm run create-icons`命令
   - 这将生成简单的图标文件到`src/extension/icons/`目录

3. 自定义图标：
   - 将您自己的图标文件(16px、48px和128px尺寸)放入`src/extension/icons/`目录
   - 确保文件名为`icon16.png`、`icon48.png`和`icon128.png`

构建时会自动复制这些图标文件到输出目录。

## 部署为静态网站

如果不想安装扩展，还可以:

1. 构建项目: `pnpm run build`
2. 将构建结果部署到静态网站托管服务（如GitHub Pages、Netlify等）
3. 使用以下任一方式设为首页:
   - 将网站地址设为浏览器的首页
   - 安装"New Tab Redirect"等扩展，将新标签页重定向到该网站

## 本地使用

1. 克隆项目并安装依赖:

   ```bash
   git clone [项目地址]
   cd google-tab-home
   pnpm install
   ```

2. 构建项目:

   ```bash
   pnpm run build-extension
   ```

3. 使用简易HTTP服务器部署:

   ```bash
   npx serve -s lib
   ```

4. 安装"New Tab Redirect"或类似扩展，将新标签页重定向到`http://localhost:5000`
