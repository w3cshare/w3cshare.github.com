---
title: 提交作用域指南
description: 如何正确使用Git提交消息中的作用域（scopes）
outline: deep
---

# 提交作用域指南

作用域(scope)用于说明提交影响的范围，通常是项目中的模块、组件或功能区域的名称。本文档详细介绍了作用域的使用方法和最佳实践。

## 作用域的作用

作用域在提交消息中位于类型之后，括号内：

```
<type>(<scope>): <subject>
```

正确使用作用域可以：

1. 提高提交消息的可读性
2. 便于理解变更影响的范围
3. 在大型项目中更容易跟踪特定模块的变更
4. 有助于自动生成更详细的变更日志

## 作用域命名建议

### 前端项目作用域示例

| 作用域   | 描述           |
| -------- | -------------- |
| `ui`     | UI组件相关变更 |
| `auth`   | 认证相关功能   |
| `router` | 路由相关变更   |
| `store`  | 状态管理相关   |
| `api`    | API交互相关    |
| `i18n`   | 国际化相关     |
| `config` | 配置文件相关   |
| `deps`   | 依赖相关变更   |

### 后端项目作用域示例

| 作用域     | 描述         |
| ---------- | ------------ |
| `api`      | API端点相关  |
| `db`       | 数据库相关   |
| `auth`     | 认证相关     |
| `models`   | 数据模型相关 |
| `security` | 安全相关     |
| `cache`    | 缓存机制相关 |
| `config`   | 配置相关     |
| `jobs`     | 后台任务相关 |

### 基于特性的作用域

在某些项目中，基于特性或功能模块定义作用域可能更合适：

| 作用域          | 描述         |
| --------------- | ------------ |
| `user`          | 用户相关功能 |
| `products`      | 产品管理相关 |
| `orders`        | 订单管理相关 |
| `payments`      | 支付功能相关 |
| `search`        | 搜索功能相关 |
| `notifications` | 通知系统相关 |

## Monorepo项目的作用域

对于单体仓库(Monorepo)项目，可以使用包名或模块名作为作用域：

```
feat(core): 添加新的核心功能
fix(ui-components): 修复按钮组件的样式问题
docs(api-client): 更新API客户端文档
```

## 自定义作用域配置

您可以在`commitlint.config.js`中配置允许的作用域列表：

```js
module.exports = {
  extends: ['@company/commitlint-smarts'],
  rules: {
    'scope-enum': [
      2,
      'always',
      ['ui', 'auth', 'api', 'store', 'router', 'models', 'utils', 'config'],
    ],
  },
}
```

## 动态作用域生成

对于基于Lerna或Nx管理的Monorepo项目，您可以动态生成包名作为有效作用域：

```js
// 动态获取所有包名作为有效的scope
const fs = require('fs')
const path = require('path')

// 获取packages目录下的所有包名
const getPackages = () => {
  const packagesPath = path.resolve(__dirname, 'packages')
  return fs.existsSync(packagesPath)
    ? fs
        .readdirSync(packagesPath)
        .filter(f => fs.statSync(path.join(packagesPath, f)).isDirectory())
    : []
}

module.exports = {
  extends: ['@company/commitlint-smarts'],
  rules: {
    'scope-enum': [2, 'always', [...getPackages(), 'release']],
  },
}
```

## 作用域的最佳实践

1. **保持一致性**：在整个项目中使用一致的作用域命名
2. **选择合适的粒度**：作用域不宜过大或过小
3. **使用简洁明了的名称**：作用域名称应直观且容易理解
4. **使用小写字母**：建议使用小写字母和连字符命名作用域
5. **可选性**：虽然作用域有助于提供更多上下文，但它是可选的。当变更影响多个模块或难以归类时，可以省略作用域

## 示例

```
feat(auth): 添加社交媒体登录选项
fix(ui): 修复移动端导航栏显示问题
docs(api): 更新用户API文档
style(global): 统一代码缩进风格
refactor(store): 重构状态管理逻辑
perf(search): 优化搜索算法性能
test(auth): 添加用户注册测试用例
build(deps): 更新依赖包版本
ci(github): 配置自动化发布流程
chore(release): 1.2.0版本发布准备
```
