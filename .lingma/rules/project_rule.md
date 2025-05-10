**添加规则文件可帮助模型精准理解你的编码偏好，如框架、代码风格等**
**规则文件只对当前工程生效，单文件限制10000字符。如果无需将该文件提交到远程 Git 仓库，请将其添加到 .gitignore**

## commit 规则

### 1. 提交信息格式

```
<type>(<scope>): <subject>
```

### 2. 提交信息说明

- type: 提交类型，包括 feat、fix、docs、style、refactor、perf、test、chore、revert、build
- scope: 提交范围，包括文件名、函数名、类名等
- subject: 提交信息，简要说明提交内容

### 3. 提交信息示例

```
feat: 添加新功能
fix: 修复 bug
docs: 更新文档
style: 修改代码风格
refactor: 重构代码
perf: 优化性能
test: 添加或修改测试
chore: 更新依赖、构建工具等
revert: 回滚到上一个版本
build: 构建项目
```
