---
layout: home
title: Commitlint 企业级插件
description: 为企业级项目提供全面的 Commitlint 规则与配置
outline: deep
hero:
  name: commitlint-plugin-smart
  text: 智能 Commitlint 解决方案
  tagline: 为现代 Web 开发提供统一的代码提交标准
  actions:
    - theme: brand
      text: 快速开始
      link: ./docs/快速开始
    - theme: alt
      text: 配置指南
      link: ./docs/配置指南
features:
  - icon: 🚀
    title: 开箱即用
    details: 预设合理的配置，安装后即可使用，无需复杂设置
  - icon: 🔧
    title: 灵活配置
    details: 支持自定义提交类型、作用域和验证规则，满足不同团队需求
  - icon: 🤖
    title: 交互式提交
    details: 基于 cz-git 提供友好的交互式提交体验，引导开发者填写规范的提交信息
  - icon: 🌐
    title: 多语言支持
    details: 内置中英文双语提示，支持国际化团队协作
  - icon: 📦
    title: MonoRepo 支持
    details: 针对单体仓库项目优化，自动识别子项目作为可选作用域
  - icon: 🛠️
    title: 工具集成
    details: 与 Husky、lint-staged 等工具无缝集成，确保提交前自动检查
---

# commitlint-plugin-smart

## 介绍

`commitlint-plugin-smart` 是一个基于 [cz-git](https://cz-git.qbb.sh/zh/) 的二次封装插件，为企业级项目提供统一的 Git 提交信息规范。它预设了丰富的提交类型和作用域，支持 Emoji，并针对 MonoRepo 项目进行了特别优化。

## 特性

- **丰富的提交类型**：预设 20+ 种提交类型，覆盖各种开发场景
- **Emoji 支持**：每种提交类型都配有对应的 Emoji，使提交信息更加直观
- **MonoRepo 支持**：自动识别子项目作为可选作用域，适合大型单体仓库项目
- **中英文双语**：所有提示信息支持中英文，适合国际化团队
- **交互式体验**：引导式提交流程，降低使用门槛
- **高度可定制**：支持自定义提交类型、作用域和验证规则

## 安装

```bash
# 使用 npm
npm install --save-dev commitlint-plugin-smart @commitlint/cli

# 使用 yarn
yarn add -D commitlint-plugin-smart @commitlint/cli

# 使用 pnpm
pnpm add -D commitlint-plugin-smart @commitlint/cli
```

## 基础配置

### 配置 commitlint

在项目根目录创建 `.commitlintrc.js` 或 `.commitlintrc.mjs` 文件：

```js
// .commitlintrc.js
import commitlintPluginSmart from 'commitlint-plugin-smart'

export default commitlintPluginSmart.defineConfig()
```

### 配置 package.json

```json
{
  "scripts": {
    "commit": "git-cz"
  },
  "config": {
    "commitizen": {
      "path": "node_modules/commitlint-plugin-smart/lib/cz-git"
    }
  }
}
```

### 配置 Husky

确保提交前验证 commit 信息：

```bash
# 安装 husky
npm install --save-dev husky

# 初始化 husky
npx husky install

# 添加 commit-msg 钩子
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit $1'
```

## MonoRepo 项目配置

对于 MonoRepo 项目，插件可以自动识别子项目作为可选作用域：

```js
// .commitlintrc.js
import commitlintPluginSmart from 'commitlint-plugin-smart'

export default commitlintPluginSmart.defineConfig({
  isMongo: true, // 启用 MonoRepo 支持
})
```

## 提交类型

插件预设了以下提交类型：

| 类型     | 描述                     | Emoji |
| -------- | ------------------------ | ----- |
| feat     | 新功能                   | ✨    |
| fix      | 修复Bug                  | 🐛    |
| docs     | 文档更新                 | 📝    |
| style    | 格式调整                 | 💄    |
| refactor | 代码重构                 | 🎨    |
| perf     | 性能优化                 | 👌    |
| test     | 测试相关                 | ✅    |
| build    | 构建相关                 | 📦️   |
| ci       | CI配置更改               | 🎡    |
| revert   | 回退代码                 | ⏪    |
| chore    | 其他改动                 | ♻️    |
| api      | API相关更改              | 🔌    |
| config   | 修改配置文件             | 🔧    |
| deploy   | 部署相关                 | 🚀    |
| file     | 添加新文件               | 📦    |
| git      | 添加或修改.gitignore文件 | 🙈    |
| i18n     | 国际化相关               | 🌐    |
| init     | 项目初始化               | 🎉    |
| lint     | 代码检查调整             | 🔍    |
| patch    | 添加补丁更新             | 🚑    |
| release  | 版本发布                 | 🚀    |
| types    | 类型定义文件更改         | 📦    |
| ui       | UI相关更改               | 🎨    |
| wip      | 开发中的工作             | 🚧    |

## 自定义配置

你可以通过 `defineConfig` 方法自定义配置：

```js
// .commitlintrc.js
import commitlintPluginSmart from 'commitlint-plugin-smart'

export default commitlintPluginSmart.defineConfig({
  isMongo: true, // 启用 MonoRepo 支持
  prompt: {
    // 自定义提示信息
    scopes: ['custom-scope-1', 'custom-scope-2'], // 自定义作用域
    useEmoji: false, // 禁用 Emoji
  },
  rules: {
    // 自定义规则
    'header-max-length': [2, 'always', 120], // 修改标题最大长度
  },
})
```

## 使用示例

安装配置完成后，可以通过以下方式使用：

```bash
# 使用脚本命令
npm run commit

# 或直接使用 npx
npx git-cz
```

然后按照交互式提示完成提交信息的填写。

## 许可证

ISC
