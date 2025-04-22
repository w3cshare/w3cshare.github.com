---
layout: doc
title: 常见问题与故障排除
description: 代码规范工具链的常见问题与解决方案
outline: deep
---

# 常见问题与故障排除

本文档汇总了在使用代码规范工具过程中可能遇到的常见问题及其解决方案。

## ESLint 相关问题

### 依赖包引用错误

**问题**: 运行 ESLint 时出现包引用错误，例如：

```bash
Error: Cannot find package '.../eslint-config-smart/package.json' imported from ...
```

**解决方案**: 

这通常是由于依赖包引用路径错误导致的。在我们的单体仓库中，我们提供的是 `eslint-plugin-smart` 而不是 `eslint-config-smart`。请参考 [ESLint 插件的常见问题](/lint/eslint-plugin-smart/docs/常见问题) 获取详细解决方法。

### 配置兼容性问题

**问题**: 配置文件中使用了不兼容的语法或配置方式。

**解决方案**:

确认你的 ESLint 版本，并使用对应的配置方式：

- ESLint v9+: 使用扁平配置系统，配置文件为 `eslint.config.mjs` 或 `eslint.config.js`
- ESLint v8 及以下: 使用传统配置系统，配置文件为 `.eslintrc.js` 或 `.eslintrc.json`

详细配置参考 [ESLint 插件的配置指南](/lint/eslint-plugin-smart/docs/配置指南)。

### 规则冲突问题

**问题**: 启用多个规则集时可能导致规则冲突。

**解决方案**:

1. 明确规则优先级，后加载的规则会覆盖先加载的规则
2. 显式禁用冲突的规则，例如：

```js
{
  rules: {
    'conflicting-rule': 'off'
  }
}
```

## Prettier 相关问题

### 与 ESLint 格式化冲突

**问题**: ESLint 和 Prettier 的格式化规则发生冲突。

**解决方案**:

使用 `eslint-plugin-prettier` 和 `eslint-config-prettier` 组合，让 Prettier 接管格式化职责：

```bash
pnpm add -D eslint-plugin-prettier eslint-config-prettier
```

然后在 ESLint 配置中：

```js
// ESLint v9+
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

export default [
  eslintPluginPrettier,
  // 其他配置...
];

// ESLint v8-
{
  "extends": [
    "prettier"
  ],
  "plugins": [
    "prettier"
  ],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

## 构建工具集成问题

### Vite 构建问题

**问题**: 在 Vite 项目中集成 ESLint/Prettier 时遇到问题。

**解决方案**:

使用 `vite-plugin-smarts` 插件，它已经预配置好相关集成：

```js
// vite.config.js
import { defineConfig } from 'vite';
import { vitePluginSmarts } from 'vite-plugin-smarts';

export default defineConfig({
  plugins: [
    vitePluginSmarts({
      // 配置选项
    })
  ]
});
```

### Webpack 构建问题

**问题**: 在 Webpack 项目中集成 ESLint/Prettier 时遇到问题。

**解决方案**:

使用 `eslint-webpack-plugin` 和我们预设的配置：

```js
// webpack.config.js
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  // ... 其他配置
  plugins: [
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      fix: true,
      overrideConfigFile: require.resolve('eslint-plugin-smart/configs/webpack.js')
    })
  ]
};
```

## pnpm 工作空间相关问题

### 工作空间包引用问题

**问题**: 无法引用工作空间中的本地包。

**解决方案**:

1. 确保正确配置了 `pnpm-workspace.yaml`:

```yaml
packages:
  - 'lint/*'
  - 'other-packages/*'
```

2. 使用正确的引用语法:

```json
{
  "dependencies": {
    "eslint-plugin-smart": "workspace:^"
  }
}
```

3. 运行 `pnpm install` 重新安装依赖

## 提交规范相关问题

### Git Hooks 不生效

**问题**: 配置的 Git Hooks 没有在提交时触发检查。

**解决方案**:

1. 确保 Husky 正确安装和初始化:

```bash
pnpm add -D husky
pnpm exec husky init
```

2. 确认 Husky 配置:

```bash
# .husky/pre-commit
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

pnpm lint-staged
```

3. 检查 lint-staged 配置:

```js
// .lintstagedrc.js
module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{css,scss,less}': ['stylelint --fix', 'prettier --write'],
  '*.{json,md}': ['prettier --write']
};
```

## 其他问题

如果你遇到上述未列出的问题，可以通过以下渠道获取帮助：

1. 查阅子项目文档中的常见问题部分
2. 查看专项工具的官方文档
3. 在团队内部讨论群中咨询
4. 提交 Issue 到项目仓库

---

本文档将持续更新，如果你解决了某个常见问题，欢迎提交 PR 以帮助其他开发者。 