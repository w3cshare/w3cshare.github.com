---
title: 快速开始
description: 快速上手使用commitlint-smarts进行Git提交信息规范化
outline: deep
---

# 快速入门

本指南将帮助您快速上手使用 commitlint-smart 进行 Git 提交信息规范化。

## 安装

根据您使用的包管理器选择相应的安装命令：

```bash
# 使用 pnpm
pnpm add -D @company/commitlint-smart

# 使用 npm
npm install --save-dev @company/commitlint-smart

# 使用 yarn
yarn add --dev @company/commitlint-smart
```

## 基础配置

### 步骤1：创建 commitlint 配置文件

在项目根目录创建 `commitlint.config.js` 文件：

```js
module.exports = {
  extends: ['@company/commitlint-smart'],
}
```

### 步骤2：安装 husky

```bash
# 使用 pnpm
pnpm add -D husky

# 使用 npm
npm install --save-dev husky

# 使用 yarn
yarn add --dev husky
```

### 步骤3：配置 husky

初始化 husky:

```bash
npx husky init
```

创建 commit-msg 钩子：

```bash
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit $1'
```

## 开始使用

完成上述配置后，当您提交代码时，commitlint-smarts 将自动检查您的提交信息是否符合规范。

一个标准的提交信息格式如下：

```
<type>(<scope>): <subject>

<body>

<footer>
```

例如：

```
feat(auth): 添加用户登录功能

实现了基于JWT的用户身份验证系统

Closes #123
```

## 下一步

- 查看[完整配置](./configuration.md)了解更多自定义选项
- 了解[提交类型](./types.md)的详细说明
- 配置[交互式提交](./interactive.md)提升开发体验
