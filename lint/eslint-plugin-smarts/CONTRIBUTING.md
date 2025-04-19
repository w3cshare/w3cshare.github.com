# 贡献指南

感谢你考虑为eslint-plugin-smarts做出贡献！以下是一些指导方针，可以帮助你更有效地参与项目。

## 开发流程

1. Fork项目仓库
2. 克隆你的fork到本地
3. 创建一个新的分支
4. 安装依赖：`npm install`
5. 进行修改
6. 运行测试：`npm test`
7. 构建项目：`npm run build`
8. 提交你的更改
9. 创建Pull Request

## 开发命令

```bash
# 安装依赖
npm install

# 开发模式（监视文件变化）
npm run dev

# 构建项目
npm run build

# 运行测试
npm test
```

## 代码风格

我们使用ESLint和Prettier来保持代码风格的一致性。请确保你的代码通过了lint检查：

```bash
npm run lint
```

## 添加新规则

如果你想添加新的ESLint规则，请按照以下步骤操作：

1. 在`src/rules`目录下创建新的规则文件
2. 在主入口文件中导入并注册新规则
3. 添加适当的测试用例
4. 在README.md中更新规则文档

## 提交Pull Request

提交PR时，请确保：

1. 描述清楚你的更改解决了什么问题
2. 包含适当的测试
3. 更新了相关文档
4. 遵循项目的代码风格

## 报告问题

报告问题时，请包含：

1. 问题的详细描述
2. 复现步骤
3. 预期行为和实际行为
4. 环境信息（Node.js版本、ESLint版本等）
5. 如果可能，提供最小复现示例

## 许可证

通过贡献代码，你同意你的贡献将根据项目的[ISC许可证](LICENSE)进行许可。
