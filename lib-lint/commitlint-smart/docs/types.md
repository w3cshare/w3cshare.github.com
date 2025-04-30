---
title: 提交类型指南
description: Git提交消息中各种类型的详细说明与使用场景
outline: deep
---

# 提交类型详解

commitlint-smart 规范化了Git提交消息中使用的类型。本文档详细介绍了各种提交类型及其适用场景。

## 标准提交类型

| 类型       | 说明                                              | 示例                                   |
| ---------- | ------------------------------------------------- | -------------------------------------- |
| `feat`     | 新功能                                            | `feat(user): 添加用户注册功能`         |
| `fix`      | 修复bug                                           | `fix(auth): 修复登录验证失败问题`      |
| `docs`     | 文档更新                                          | `docs(api): 更新API文档`               |
| `style`    | 代码风格变更(不影响代码运行的变动)                | `style(button): 调整按钮组件缩进`      |
| `refactor` | 代码重构(既不是新增功能，也不是修改bug的代码变动) | `refactor(core): 重构数据处理逻辑`     |
| `perf`     | 性能优化                                          | `perf(query): 优化数据库查询性能`      |
| `test`     | 测试相关                                          | `test(auth): 添加登录功能单元测试`     |
| `build`    | 构建系统或外部依赖变更                            | `build(deps): 升级webpack至5.0版本`    |
| `ci`       | 持续集成相关变更                                  | `ci(github): 更新GitHub Actions工作流` |
| `chore`    | 其他修改(不修改src或测试文件)                     | `chore(release): 1.0.0版本发布准备`    |
| `revert`   | 撤销之前的提交                                    | `revert: feat(user): 添加用户注册功能` |

## 类型使用指南

### feat - 新功能

当您添加全新的功能或特性时使用。这可能是一个新的API端点、UI组件或业务功能。

```
feat(user): 添加用户头像上传功能
```

### fix - 修复bug

当您修复一个bug或解决一个问题时使用。

```
fix(cart): 修复商品数量为0时仍可添加到购物车的问题
```

### docs - 文档更新

当您只修改文档而不改变代码时使用，包括README、API文档或注释的更新。

```
docs(readme): 更新安装说明
```

### style - 代码风格变更

只有代码格式变化，而不改变代码逻辑时使用。包括空格、格式化、缺失的分号等。

```
style(global): 统一使用单引号
```

### refactor - 代码重构

对现有代码进行重构，不添加功能也不修复bug时使用。

```
refactor(auth): 简化认证流程
```

### perf - 性能优化

提高性能的代码更改。

```
perf(images): 优化图片加载性能
```

### test - 测试相关

添加缺失的测试或修正现有测试。

```
test(api): 添加用户API测试用例
```

### build - 构建系统相关

影响构建系统或外部依赖的更改。

```
build(npm): 更新package.json依赖
```

### ci - 持续集成相关

CI配置文件和脚本的更改。

```
ci(travis): 更新Travis CI配置
```

### chore - 其他修改

不属于以上类型的其他更改。

```
chore(git): 更新.gitignore文件
```

### revert - 撤销提交

撤销之前的一个提交时使用。

```
revert: feat(login): 添加社交媒体登录选项
```

## 自定义类型

您可以通过修改配置文件来扩展或限制可用的提交类型：

```js
module.exports = {
  extends: ["@company/commitlint-smart"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "build",
        "ci",
        "chore",
        "revert",
        // 自定义类型
        "i18n", // 国际化相关
        "security", // 安全相关
      ],
    ],
  },
};
```

## 最佳实践

1. 使用明确具体的类型，避免过度使用`chore`
2. 提交消息应简明扼要地描述变更内容
3. 在功能开发过程中，可以按照逻辑进行小批量、频繁提交
4. 每个提交应专注于一个主题，避免混合不相关的变更
5. 使用作用域(scope)进一步明确变更范围
