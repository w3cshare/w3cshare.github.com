# prettier-plugin-smart 使用示例

本文档提供了几个在不同项目环境中使用 prettier-plugin-smart 插件的示例。

## 基础用法示例

### 示例1: 直接在.prettierrc中使用配置（推荐）

创建`.prettierrc`文件，包含所有需要的配置：

```json
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "endOfLine": "lf"
}
```

### 示例2: 在JavaScript配置文件中导入

创建`.prettierrc.js`文件：

```js
// .prettierrc.js
module.exports = {
  ...require('prettier-plugin-smart').defaultOptions,
  // 可以在这里覆盖部分配置
  printWidth: 120,
  tabWidth: 4
}
```

## 单体仓库（Monorepo）中的用法

### 子项目配置

1. 在子项目的`package.json`中添加依赖：

```json
{
  "devDependencies": {
    "prettier-plugin-smart": "workspace:^"
  }
}
```

2. 在子项目根目录创建`.prettierrc`文件：

```json
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "endOfLine": "lf"
}
```

3. 在子项目的`package.json`中添加格式化脚本：

```json
{
  "scripts": {
    "format": "prettier --write \"src/**/*.{ts,js}\""
  }
}
```

## 高级配置示例

### 在CI/CD流程中集成

在CI/CD工作流程中添加格式检查：

```yaml
# .github/workflows/lint.yml
name: Lint

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  prettier:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '16'
      - name: Install dependencies
        run: npm ci
      - name: Check code formatting
        run: npx prettier --check "**/*.{js,jsx,ts,tsx,vue,css,scss,less,json,md}"
```

### 在VS Code中集成

1. 安装VS Code的Prettier扩展
2. 在项目中创建`.vscode/settings.json`文件：

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

## 常见问题

### prettier-plugin-smart: true 选项无效

`{ "prettier-plugin-smart": true }` 这种配置方式将被忽略，因为Prettier无法识别此选项。请改用以下方式之一：

1. 直接在`.prettierrc`中包含所有配置项
2. 在JavaScript配置文件中导入`defaultOptions` 