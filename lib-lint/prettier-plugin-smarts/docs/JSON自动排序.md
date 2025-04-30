---
title: Prettier JSON 自动排序
description: prettier-plugin-smarts 提供的 JSON 文件自动排序功能
outline: deep
---

# JSON 智能排序

prettier-plugin-smarts 提供了高级的 JSON 文件排序功能，帮助团队保持一致的 JSON 文件结构，提高可读性和维护性。

## JSON 排序功能

### 配置文件智能排序

插件能够识别常见的配置文件类型，并应用特定的排序规则：

- **package.json**：遵循 NPM 标准，将重要字段（如 name、version、main）排在前面
- **.eslintrc.json**：将核心配置（如 extends、plugins、rules）按逻辑顺序排列
- **tsconfig.json**：将编译选项和项目设置按最佳实践排序
- **其他配置文件**：根据文件类型应用不同的排序规则

### 通用 JSON 排序

对于常规 JSON 文件，插件提供了以下排序功能：

- **字母顺序排序**：默认按键名字母顺序排序
- **嵌套对象处理**：递归排序所有嵌套对象
- **数组保留顺序**：保持数组元素的原始顺序

## 使用方法

### 基础配置

在 `.prettierrc.js` 文件中启用 JSON 排序功能：

```js
module.exports = {
  // 启用 JSON 排序（默认）
  sortJsonKeys: true,

  // 禁用 JSON 排序
  // sortJsonKeys: false
}
```

### 自定义排序规则

对于特定项目，可以自定义排序规则：

```js
// .prettierrc.js
module.exports = {
  sortJsonKeys: {
    order: ['name', 'version', 'description', '*', 'dependencies', 'devDependencies'],
    indentSize: 2,
  },
}
```

## 排序规则详解

### package.json 排序

package.json 文件的默认排序规则如下：

1. name
2. version
3. description
4. keywords
5. homepage
6. bugs
7. license
8. author
9. files
10. main
11. module
12. exports
13. scripts
14. dependencies
15. devDependencies
16. peerDependencies
17. 其他字段（按字母顺序）

示例：

```json
// 排序前
{
  "version": "1.0.0",
  "scripts": {
    "start": "node index.js",
    "build": "webpack"
  },
  "dependencies": {
    "react": "^17.0.2",
    "lodash": "^4.17.21"
  },
  "name": "my-project",
  "devDependencies": {
    "webpack": "^5.60.0",
    "typescript": "^4.4.4"
  }
}

// 排序后
{
  "name": "my-project",
  "version": "1.0.0",
  "scripts": {
    "build": "webpack",
    "start": "node index.js"
  },
  "dependencies": {
    "lodash": "^4.17.21",
    "react": "^17.0.2"
  },
  "devDependencies": {
    "typescript": "^4.4.4",
    "webpack": "^5.60.0"
  }
}
```

### ESLint 配置排序

.eslintrc.json 文件的默认排序规则：

1. root
2. env
3. extends
4. parser
5. parserOptions
6. plugins
7. settings
8. rules
9. overrides

示例：

```json
// 排序前
{
  "plugins": ["react", "import"],
  "rules": {
    "no-console": "warn"
  },
  "env": {
    "browser": true,
    "node": true
  },
  "extends": ["eslint:recommended"],
  "parserOptions": {
    "ecmaVersion": 2020
  }
}

// 排序后
{
  "env": {
    "browser": true,
    "node": true
  },
  "extends": ["eslint:recommended"],
  "parserOptions": {
    "ecmaVersion": 2020
  },
  "plugins": ["react", "import"],
  "rules": {
    "no-console": "warn"
  }
}
```

### tsconfig.json 排序

tsconfig.json 文件的默认排序规则：

1. extends
2. compilerOptions
3. include
4. exclude
5. files
6. references

在 compilerOptions 内部也会应用特定的排序规则。

## 高级功能

### 深度递归排序

prettier-plugin-smarts 提供了深度递归排序，确保嵌套对象也能正确排序：

```json
// 排序前
{
  "settings": {
    "timeout": 1000,
    "api": {
      "url": "https://api.example.com",
      "version": "v1"
    }
  },
  "name": "config"
}

// 排序后
{
  "name": "config",
  "settings": {
    "api": {
      "url": "https://api.example.com",
      "version": "v1"
    },
    "timeout": 1000
  }
}
```

### 保持注释位置

插件会尽量保持注释与相关代码的位置关系：

```jsonc
// 排序前
{
  "version": "1.0.0",
  // 项目名称
  "name": "my-project"
}

// 排序后
{
  // 项目名称
  "name": "my-project",
  "version": "1.0.0"
}
```

## 与工具链集成

### 与 VS Code 集成

在 VS Code 中使用 Prettier 插件，自动应用 JSON 排序：

```json
// settings.json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  }
}
```

### 与 Git 钩子集成

使用 husky 和 lint-staged 在提交前格式化 JSON 文件：

```json
// package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.json": "prettier --write"
  }
}
```

## 常见问题

### 1. 特定项目需要自定义排序

**问题**：项目有特殊的 JSON 结构，需要自定义排序规则

**解决方案**：创建项目特定的 .prettierrc.js 配置

```js
// .prettierrc.js
module.exports = {
  sortJsonKeys: {
    order: [
      // 自定义顺序
      'customField1',
      'customField2',
      '*', // 其他字段
      'nestedConfigs',
    ],
  },
}
```

### 2. 某些 JSON 文件需要保持原始顺序

**问题**：特定的 JSON 文件需要保持其原始顺序，不应该被排序

**解决方案**：使用 .prettierignore 文件排除特定文件

```
# .prettierignore
config/special-order.json
```

### 3. CI/CD 中的排序问题

**问题**：CI/CD 流水线中出现 JSON 格式不一致的问题

**解决方案**：在流水线中添加 Prettier 检查步骤

```yaml
# CI 配置
- name: Check JSON formatting
  run: npx prettier --check "**/*.json"
```
