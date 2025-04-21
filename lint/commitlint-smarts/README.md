---
layout: home
hero:
  name: commitlint-smarts
  text: 智能提交信息规范
  tagline: 为公司内部项目提供统一的Git提交信息规范
  actions:
    - theme: brand
      text: 快速开始
      link: /lint/commitlint-smarts/docs/quickstart
    - theme: alt
      text: 规范说明
      link: /lint/commitlint-smarts/docs/types
    - theme: alt
      text: 配置指南
      link: /lint/commitlint-smarts/docs/configuration
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

# &nbsp;

# commitlint-smarts

commitlint-smarts 是一个为公司内部项目设计的 Git 提交信息规范配置，基于 Conventional Commits 规范，并进行了扩展和定制。此配置旨在统一团队的 Git 提交信息格式，提高代码历史的可读性和可追溯性。

::: tip 为什么需要统一的提交规范？
统一的提交规范让团队能够自动化生成更新日志、简化语义化版本控制、提高代码审查效率，并使新成员更容易理解项目历史。
:::

## 特性

- ✅ 基于 Conventional Commits 规范
- ✅ 扩展了更多适合业务场景的提交类型
- ✅ 中文友好的交互式提交体验
- ✅ 可自定义的作用域列表
- ✅ 与 Husky 和 lint-staged 工具集成
- ✅ 适用于各种前端和后端项目

## 详细文档

- [快速开始](/lint/commitlint-smarts/docs/quickstart) - 快速上手使用指南
- [提交类型](/lint/commitlint-smarts/docs/types) - 详细的提交类型说明
- [作用域使用](/lint/commitlint-smarts/docs/scopes) - 如何正确使用作用域
- [提交主题](/lint/commitlint-smarts/docs/subject) - 编写清晰提交主题的指南
- [提交正文](/lint/commitlint-smarts/docs/body) - 如何编写详细的提交正文
- [配置指南](/lint/commitlint-smarts/docs/configuration) - 自定义配置选项

## 安装

::: code-group

```bash [pnpm]
pnpm add -D @commitlint/cli commitlint-smarts husky
```

```bash [npm]
npm install --save-dev @commitlint/cli commitlint-smarts husky
```

```bash [yarn]
yarn add -D @commitlint/cli commitlint-smarts husky
```

:::

## 使用方法

### 配置 commitlint

在项目根目录创建 `commitlint.config.js` 文件：

```js
module.exports = {
  extends: ['commitlint-smarts'],
};
```

### 配置 Husky

::: code-group

```bash [初始化]
# 初始化 Husky
npx husky install
```

```bash [添加钩子]
# 添加 commit-msg 钩子
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit $1'
```

:::

::: tip 单体仓库（Monorepo）配置
在单体仓库中，建议在根目录配置 commitlint，并确保所有子包遵循相同的提交规范。详细配置请参考 [配置指南](/lint/commitlint-smarts/docs/configuration)。
:::

## 提交格式

提交信息应遵循以下格式：

```
<类型>(<可选的作用域>): <描述>

[可选的正文]

[可选的脚注]
```

详细格式规范：

- [提交类型](/lint/commitlint-smarts/docs/types)：指明提交的变更类型
- [作用域](/lint/commitlint-smarts/docs/scopes)：指明变更影响的模块或功能
- [主题描述](/lint/commitlint-smarts/docs/subject)：简明扼要的变更说明
- [提交正文](/lint/commitlint-smarts/docs/body)：提供更详细的变更说明
- [脚注](/lint/commitlint-smarts/docs/configuration)：包含关闭问题、破坏性变更说明等

### 示例

::: details 功能添加示例

```
feat(user): 添加用户登录功能

实现了基于JWT的用户登录认证机制
同时添加了记住密码功能

close #123
```

:::

::: details 问题修复示例

```
fix(database): 修复高并发下连接池耗尽问题

在高并发场景下，数据库连接未能正确释放，导致连接池资源耗尽，系统响应变慢并最终超时。

问题原因：
- 事务提交后连接未正确关闭
- 异常处理路径中缺少连接释放代码
- 连接池配置不合理

解决方法：
1. 添加try-finally确保连接总是被释放
2. 调整连接池大小和超时设置
3. 增加连接泄漏检测和自动回收机制

性能测试显示该修复在高峰期将系统响应时间从2.5s降至0.8s。

修复: #BUG-456
```

:::

::: details 重构示例

```
refactor(components): 重构表单组件以提高复用性

将原有的紧耦合表单组件拆分为更小的可组合组件，使其更容易被复用和测试。

重构内容:
- 抽取表单项为独立组件
- 实现自定义Hook管理表单状态
- 分离表单验证逻辑
- 添加组合模式支持嵌套表单

此次重构不改变现有功能，但大幅降低了代码复杂度（从循环复杂度15降至4）
并减少了代码重复（减少约120行重复代码）。

相关: #TECH-789
```

:::

## 类型说明

| 类型     | 说明                                |
| -------- | ----------------------------------- |
| feat     | 新功能                              |
| fix      | 修复Bug                             |
| docs     | 文档更新                            |
| style    | 代码风格调整（不影响代码功能）      |
| refactor | 代码重构（不包括bug修复或功能新增） |
| perf     | 性能优化                            |
| test     | 测试相关                            |
| build    | 构建系统或外部依赖更改              |
| ci       | CI配置更改                          |
| chore    | 其他改动（不修改src或测试文件）     |
| revert   | 回滚之前的提交                      |
| ui       | UI相关更改                          |
| wip      | 开发中的工作（Work In Progress）    |
| api      | API相关更改                         |
| release  | 版本发布                            |
| deploy   | 部署相关                            |
| config   | 配置调整                            |
| i18n     | 国际化                              |
| lint     | 代码检查调整                        |
| types    | 类型定义文件更改                    |

完整的类型说明和使用场景，请参考 [提交类型指南](/lint/commitlint-smarts/docs/types)。

## 交互式提交

推荐使用 `@commitlint/cz-commitlint` 配合 commitizen 进行交互式提交：

::: code-group

```bash [安装]
# 安装依赖
pnpm add -D @commitlint/cz-commitlint commitizen
```

```bash [配置]
# 添加配置文件
echo '{ "path": "@commitlint/cz-commitlint" }' > .czrc
```

```json [package.json]
{
  "scripts": {
    "commit": "git-cz"
  }
}
```

:::

使用交互式提交：

```bash
pnpm run commit
```

## 自定义配置

如果需要自定义配置，可在项目的 `commitlint.config.js` 文件中覆盖默认规则：

```js
module.exports = {
  extends: ['commitlint-smarts'],
  rules: {
    // 自定义规则
    'scope-enum': [2, 'always', ['auth', 'api', 'ui', 'config']],
  },
};
```

更多配置选项，请参考 [配置指南](/lint/commitlint-smarts/docs/configuration)。

## 禁用检查

在特殊情况下，可以在提交时临时禁用 commitlint 检查：

```bash
git commit -m "紧急修复" --no-verify
```

::: warning 谨慎使用
只有在紧急情况下才应使用此选项，避免养成绕过提交规范的习惯。
:::

## 许可证

ISC
