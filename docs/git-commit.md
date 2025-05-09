# Git Commit 规范详解

## 介绍

本项目采用增强版的 Git Commit 规范，基于 `commitlint` 和 `cz-git` 实现。这套规范不仅使提交记录更加规范，还便于自动化生成更新日志、版本控制等。

## 配置详情

我们在项目根目录下提供了 `.commitlintrc.js` 配置文件，包含以下主要部分：

1. 提交类型（type）定义
2. 作用域（scope）定义
3. 校验规则（rules）配置
4. 交互式提交体验（prompt）配置

## 提交类型列表

我们定义了以下提交类型：

### 标准类型

| 类型 | 表情符号 | 说明 | 描述 |
| --- | --- | --- | --- |
| feat | ✨ | 新功能 | 新增功能 \| A new feature |
| fix | 🐛 | 修复缺陷 | 修复Bug \| A bug fix |
| docs | 📚 | 文档更新 | 文档更新 \| Documentation only changes |
| style | 💎 | 代码格式 | 代码风格调整（不影响代码功能）\| Changes that do not affect the meaning of the code |
| refactor | 📦 | 代码重构 | 代码重构（不包括 bug 修复或功能新增）\| A code change that neither fixes a bug nor adds a feature |
| perf | 🚀 | 性能优化 | 性能提升 \| A code change that improves performance |
| test | 🚨 | 测试相关 | 测试相关 \| Adding missing tests or correcting existing tests |
| build | 🛠 | 构建相关 | 构建系统或外部依赖更改 \| Changes that affect the build system or external dependencies |
| ci | ⚙️ | 持续集成 | CI配置更改 \| Changes to our CI configuration files and scripts |
| chore | ♻️ | 其他修改 | 其他改动（不修改src或测试文件）\| Other changes that do not modify src or test files |
| revert | 🗑 | 回退代码 | 回滚之前的提交 \| Revert to a commit |

### 扩展类型

| 类型 | 表情符号 | 说明 | 描述 |
| --- | --- | --- | --- |
| ui | 🎨 | UI相关更改 | 用户界面相关更改 |
| wip | 🚧 | 开发中的工作 | 开发中的工作（Work In Progress） |
| api | 🔌 | API相关更改 | API接口相关变更 |
| release | - | 版本发布 | 版本发布相关 |
| deploy | - | 部署相关 | 部署流程或环境相关 |
| config | - | 配置调整 | 配置文件调整 |
| i18n | 🌐 | 国际化相关 | 国际化与本地化相关更改 |
| lint | - | 代码检查调整 | 代码检查规则调整 |
| types | - | 类型定义文件更改 | TypeScript类型定义文件更改 |

## 作用域列表

作用域用于说明提交影响的范围，我们预定义了以下作用域：

- components：组件
- utils：工具
- styles：样式
- deps：依赖
- config：配置
- core：核心功能
- ci：持续集成
- scripts：脚本
- docs：文档
- release：发布
- other：其他

此外，配置中也允许使用自定义作用域。

## 提交信息格式

标准的提交信息格式如下：

```
<类型>[可选 作用域]: <描述>

[可选 正文]

[可选 脚注]
```

例如：

```
feat(components): 添加Button组件

实现了一个可复用的Button组件，支持多种样式和大小。

BREAKING CHANGE: 替换了原有的ButtonBase组件
Closes #123
```

## 交互式提交

使用以下命令可以启动交互式提交：

```bash
npx cz
# 或
pnpm exec cz
```

按照提示回答问题，系统会自动生成符合规范的提交信息。

## 特殊功能

1. **别名**：提供了快捷别名，如 `fd` 对应 `docs: fix typos`

2. **Issue前缀**：支持GitEE工作流
   - `link`: 链接 ISSUES 进行中
   - `closed`: 标记 ISSUES 已完成

3. **破坏性变更**：可以在提交中明确标注破坏性变更

## 提交信息的好处

- **自动化更新日志**：规范的提交信息可以自动生成更新日志
- **版本控制**：便于语义化版本控制
- **代码审查**：提高代码审查效率
- **项目历史**：提供清晰的项目历史记录

## 最佳实践

1. **保持简洁**：提交描述应该简洁明了
2. **聚焦单一变更**：每次提交应该专注于单一变更
3. **使用现在时态**：使用"add"而不是"added"
4. **不使用句号结尾**：描述不要以句号结尾
5. **详细说明重大变更**：对于破坏性变更，详细说明原因和迁移方法
6. **相关链接**：需要时添加相关的Issue或PR链接

## 常见错误

- 提交信息过于模糊，如"修复bug"
- 混合多个不相关的变更
- 忽略提交类型和作用域
- 提交过大的变更

## 校验规则

项目使用 `commitlint` 工具校验提交信息，不符合规范的提交将被拒绝。主要校验规则包括：

- type必须在预定义列表中
- type必须小写
- type不能为空
- scope必须在预定义列表中（可自定义）
- scope必须小写
- subject不能为空
- subject不能以.结尾
- header长度不超过100个字符

## 更多资源

- [Conventional Commits](https://www.conventionalcommits.org/)
- [cz-git 文档](https://cz-git.qbb.sh/zh/)
- [commitlint 文档](https://commitlint.js.org/) 