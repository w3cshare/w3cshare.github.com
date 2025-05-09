---
title: 提交消息主题行指南
description: 如何编写清晰、简洁的Git提交消息主题行
outline: deep
---

# 提交主题行指南

主题行(subject)是提交消息的第一行中，冒号后面的部分，用于简要描述本次提交的内容。一个良好的主题行可以帮助团队成员快速理解变更的目的。

## 主题行的位置

在提交消息格式中，主题行位于类型和可选的作用域之后：

```
<type>(<scope>): <subject>
```

## 主题行规范

### 基本规则

1. **简洁明了**：控制在50个字符以内，理想长度为30-50个字符
2. **不以大写字母开头**：除非使用专有名词
3. **不以句号结尾**：主题行不需要结束标点
4. **使用祈使句**：使用命令式语气，如"修复"而非"修复了"或"修复中"
5. **避免无意义内容**：如"小改动"、"一些修改"等

### 中文主题行规范

对于使用中文的项目，主题行应遵循以下额外规范：

1. **简体中文**：统一使用简体中文
2. **动词开头**：以动词开始，表达动作
3. **精简表达**：避免冗余词语，如"进行"、"的"等
4. **避免标点符号**：除非必要，否则不使用标点符号

## 有效的主题行示例

### 英文主题行

```
feat(auth): add Google OAuth integration
fix(ui): resolve button overflow on mobile view
docs: update API documentation
style: format code according to style guide
refactor(api): simplify error handling logic
```

### 中文主题行

```
feat(auth): 添加谷歌OAuth登录功能
fix(ui): 修复移动端按钮溢出问题
docs: 更新API文档
style: 按风格指南格式化代码
refactor(api): 简化错误处理逻辑
```

## 不良主题行示例及修正

| 不良示例                                         | 问题                   | 修正示例                                        |
| ------------------------------------------------ | ---------------------- | ----------------------------------------------- |
| `进行了一些修改`                                 | 过于模糊，没有明确内容 | `修复用户注册表单验证问题`                      |
| `Fix bug.`                                       | 过于简短，不明确       | `fix: correct input validation on payment form` |
| `重构代码。`                                     | 不具体，以句号结尾     | `refactor: 优化用户认证模块`                    |
| `Updated the README file with new instructions.` | 过长，使用过去式       | `docs: update README with new instructions`     |
| `添加了新功能，修复了一些bug`                    | 包含多个变更           | 拆分为多个提交                                  |

## 如何写好主题行

1. **思考核心变更**：问自己"这次提交的主要目的是什么？"
2. **使用具体动词**：选择精确描述操作的动词
3. **包含关键上下文**：提及变更的具体组件或功能
4. **保持简洁**：去除不必要的词语
5. **站在读者角度**：想象团队成员需要什么信息来理解这个提交

## 主题行与提交消息正文

主题行应与提交消息的正文部分分开，中间留一个空行：

```
feat(user): 添加用户头像上传功能

实现了用户头像上传功能，包括:
1. 文件选择和预览
2. 图片裁剪功能
3. 自动压缩优化
4. 上传进度显示
```

## 自动化检查

您可以在`commitlint.config.js`中配置对主题行的检查规则：

```js
module.exports = {
  extends: ['@company/commitlint-smart'],
  rules: {
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'subject-max-length': [2, 'always', 50],
  },
}
```

## 小结

良好的主题行能够：

- 帮助团队成员快速理解变更
- 便于后续查找和跟踪变更
- 有助于自动生成高质量的变更日志
- 促进团队协作和代码审查效率

记住：主题行是提交消息中最重要的部分，因为它通常是人们在查看提交历史时首先（有时是唯一）看到的内容。
