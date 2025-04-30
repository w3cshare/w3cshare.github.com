---
title: Commitlint配置指南
description: 如何配置和自定义commitlint-smarts规则
outline: deep
---

# 配置指南

本文档详细介绍了 commitlint-smarts 的配置选项及其用法。

## 基础配置

最简单的配置是在您的项目根目录创建 `commitlint.config.js` 文件，内容如下：

```js
module.exports = {
  extends: ['@company/commitlint-smarts'],
}
```

这将使用 commitlint-smarts 的默认配置。

## 自定义配置

您可以通过覆盖默认配置来自定义规则：

```js
module.exports = {
  extends: ['@company/commitlint-smarts'],
  rules: {
    'header-max-length': [2, 'always', 100], // 将标题最大长度设为100个字符
    'scope-enum': [2, 'always', ['api', 'ui', 'core']], // 自定义scope范围
  },
}
```

## 配置项详解

### rules

规则配置采用 `[级别, 适用条件, 值]` 的格式：

- **级别**:
  - 0 - 禁用规则
  - 1 - 警告
  - 2 - 错误（将阻止提交）
- **适用条件**:
  - always - 始终强制执行
  - never - 始终不允许
- **值**: 根据规则不同而变化

### 常用规则

| 规则名                 | 说明           | 默认值                                                                                         |
| ---------------------- | -------------- | ---------------------------------------------------------------------------------------------- |
| `header-max-length`    | 标题行最大长度 | 72                                                                                             |
| `type-enum`            | 允许的提交类型 | ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'ci', 'chore', 'revert'] |
| `scope-enum`           | 允许的作用域   | 无默认值                                                                                       |
| `subject-case`         | 主题行大小写   | 'lower-case'                                                                                   |
| `body-max-line-length` | 正文最大行长度 | 100                                                                                            |

## 扩展配置

commitlint-smarts 提供了几种预设配置：

- **基础配置**: `@company/commitlint-smarts/base`
- **严格模式**: `@company/commitlint-smarts/strict`
- **团队模式**: `@company/commitlint-smarts/team`

示例：

```js
module.exports = {
  extends: ['@company/commitlint-smarts/strict'],
}
```

## 项目配置示例

### 单体仓库(Monorepo)配置

对于基于 Lerna 或 Nx 管理的单体仓库，可以自动从包名称生成 scope 列表：

```js
const { getPackages } = require('@lerna/project')
const path = require('path')

const lernaPackages = async () => {
  const packages = await getPackages()
  return packages.map(pkg => path.basename(pkg.location))
}

module.exports = {
  extends: ['@company/commitlint-smarts'],
  rules: {
    'scope-enum': async ctx => [2, 'always', await lernaPackages()],
  },
}
```

### 集成JIRA工单号

要求提交信息包含JIRA工单号：

```js
module.exports = {
  extends: ['@company/commitlint-smarts'],
  plugins: ['commitlint-plugin-jira-rules'],
  rules: {
    'jira-task-id-max-length': [2, 'always', 10],
    'jira-task-id-min-length': [2, 'always', 3],
    'jira-task-id-case': [2, 'always', 'upper-case'],
    'jira-task-id-project-key': [2, 'always', ['ABC', 'XYZ']],
  },
}
```

## 配置文件类型

除了 JavaScript 格式的配置文件外，commitlint-smarts 还支持以下格式：

- `.commitlintrc.js`
- `.commitlintrc.json`
- `.commitlintrc.yml`
- `commitlint.config.js` (推荐)

## 更多资源

- [提交类型详解](./types.md)
- [高级用法](./advanced.md)
- [常见问题](./faq.md)
