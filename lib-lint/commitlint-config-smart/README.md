---
layout: home
hero:
  name: commitlint-config-smart
  text: 智能提交信息规范
  tagline: 为公司内部项目提供统一的Git提交信息规范
  actions:
    - theme: brand
      text: 快速开始
      link: ./docs/quickstart
    - theme: alt
      text: 规范说明
      link: ./docs/types
    - theme: alt
      text: 配置指南
      link: ./docs/configuration
features:
  - icon: 🚀
    title: 规范统一
    details: 统一团队的Git提交信息格式，提高代码历史可读性和可追溯性
  - icon: 🔧
    title: 多场景支持
    details: 适配各种业务场景的提交类型，包括常规开发、UI调整、国际化等
  - icon: 🤖
    title: 交互式提交
    details: 提供友好的交互式提交体验，引导开发者填写规范的提交信息
  - icon: ⛓️
    title: 灵活配置
    details: 可根据项目需求自定义作用域和提交类型，满足不同团队的需求
  - icon: 🛠️
    title: 多工具集成
    details: 与Husky、lint-staged等工具无缝集成，确保提交前自动检查
  - icon: 📦
    title: 开箱即用
    details: 预设合理的配置，安装后即可使用，无需复杂设置
---

### &nbsp;

# commitlint-config-smart

一个智能的 commitlint 配置包，基于约定式提交规范（Conventional Commits）。

## 特性

- 支持完整的约定式提交规范
- 自定义扩展的提交类型
- 灵活的作用域配置
- 中文友好的提交信息提示
- 严格的提交格式验证

## 安装

```bash
# npm
npm install -D @commitlint/cli commitlint-config-smart

# yarn
yarn add -D @commitlint/cli commitlint-config-smart

# pnpm
pnpm add -D @commitlint/cli commitlint-config-smart
```

## 配置

1. 在项目根目录创建 `commitlint.config.js` 文件：

```js
module.exports = {
  extends: ['commitlint-config-smart'],
}
```

2. 配置 Git hooks（推荐使用 husky）：

```bash
# 安装 husky
pnpm add -D husky

# 初始化 husky
pnpm husky install

# 添加 commit-msg hook
pnpm husky add .husky/commit-msg 'npx --no -- commitlint --edit $1'
```

## Monorepo 项目中的使用

### 作为工作区包使用

如果在 Lerna + Nx + pnpm Workspace 的 Monorepo 项目中使用本包，需要注意以下几点：

1. 在项目根目录的 `package.json` 中添加依赖：

```json
{
  "devDependencies": {
    "@commitlint/cli": "^19.0.0",
    "commitlint-config-smart": "workspace:^"
  }
}
```

2. 在项目根目录创建 `commitlint.config.js` 文件：

```js
module.exports = {
  extends: ['commitlint-config-smart'],
}
```

> 注意：在 Monorepo 项目中，包名为 `commitlint-smart`，而不是 `commitlint-smart`。这是为了符合 commitlint 的包命名约定。

3. 安装依赖：

```bash
pnpm install
```

4. 添加 Git hooks：

```bash
# 初始化 husky
pnpm husky install

# 添加 commit-msg hook
pnpm husky add .husky/commit-msg 'npx --no -- commitlint --edit $1'
```

## 提交类型

支持以下提交类型：

### 常规类型

- `feat`: 新功能
- `fix`: 修复Bug
- `docs`: 文档更新
- `style`: 代码风格调整（不影响代码功能）
- `refactor`: 代码重构（不包括 bug 修复或功能新增）
- `perf`: 性能优化
- `test`: 测试相关
- `build`: 构建系统或外部依赖更改
- `ci`: CI配置更改
- `chore`: 其他改动（不修改src或测试文件）
- `revert`: 回滚之前的提交

### 扩展类型

- `ui`: UI相关更改
- `wip`: 开发中的工作（Work In Progress）
- `api`: API相关更改
- `release`: 版本发布
- `deploy`: 部署相关
- `config`: 配置调整
- `i18n`: 国际化
- `lint`: 代码检查调整
- `types`: 类型定义文件更改

## 作用域

支持以下预定义作用域：

- `components`: 组件
- `utils`: 工具
- `styles`: 样式
- `deps`: 依赖
- `config`: 配置
- `core`: 核心功能
- `ci`: 持续集成
- `scripts`: 脚本
- `docs`: 文档
- `release`: 发布
- `other`: 其他

也可以使用空作用域。

## 提交格式

```
<type>(<scope>): <subject>

<body>

<footer>
```

示例：

```
feat(components): 添加新的按钮组件

- 支持多种尺寸
- 支持多种主题色
- 添加加载状态

Closes #123
```

## 常见问题与解决方案

### 在Monorepo中提示"Cannot find module"错误

如果在Monorepo中使用时遇到以下错误：

```
Error: Cannot find module "commitlint-config-smart" from "/path/to/your/project"
```

请检查：

1. 确保包名称正确：在Monorepo中应使用`commitlint-smart`而非`commitlint-smart`
2. 确保在项目根目录的package.json中正确引用了workspace包：`"commitlint-config-smart": "workspace:^"`
3. 运行`pnpm install`重新安装依赖

## 规则说明

- `header` 最大长度：100
- `scope` 必须小写
- `subject` 必须小写开头
- 不允许 `subject` 以 `.` 结尾
- `type` 必须小写
- `type` 必须是预定义的类型之一

## 许可证

ISC
