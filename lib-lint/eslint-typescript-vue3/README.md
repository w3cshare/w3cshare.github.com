# @iss.smart/eslint-typescript-vue3

一个全面的 ESLint 配置包，专为 TypeScript 和 Vue3 项目设计。

## 特性

- 🎯 完整的 TypeScript 支持
- ⚡️ Vue3 语法支持
- 🔥 React 支持
- 📦 自动导入排序
- 🧹 未使用导入清理
- 🎨 对象属性排序
- 💪 严格的代码规范检查

## 安装

```bash
# 使用 pnpm
pnpm add -D @iss.smart/eslint-typescript-vue3

# 使用 npm
npm install --save-dev @iss.smart/eslint-typescript-vue3

# 使用 yarn
yarn add -D @iss.smart/eslint-typescript-vue3
```

## 使用方法

1. 在你的项目根目录创建 `eslint.config.js` 文件：

```javascript
import config from '@iss.smart/eslint-typescript-vue3'

export default config
```

2. 在 package.json 中添加 lint 脚本：

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

## 配置选项

本配置包包含以下主要模块：

- 基础 ESLint 规则
- TypeScript 特定规则
- Vue3 规则
- React 规则
- 导入排序规则
- 未使用导入检测
- 对象属性排序

## 自定义配置

如果你需要自定义配置，可以通过扩展默认配置来实现：

```javascript
import baseConfig from '@iss.smart/eslint-typescript-vue3'

export default [
  ...baseConfig,
  {
    rules: {
      // 你的自定义规则
    },
  },
]
```

## 许可证

ISC License
