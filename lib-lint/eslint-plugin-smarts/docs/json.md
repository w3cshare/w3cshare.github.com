# JSON 文件支持

`eslint-plugin-smarts` 提供了完整的 JSON 文件支持，包括格式化、验证和自动排序功能。

## 功能特性

- 支持 JSON、JSONC 和 JSON5 文件格式
- 自动格式化 JSON 文件
- package.json 字段自动排序
- 语法错误检查
- 注释规范检查

## 配置使用

### 基本配置

在 `eslint.config.mjs` 中添加 JSON 配置：

```javascript
import eslintPlugin from 'eslint-plugin-smarts'

export default [
  ...eslintPlugin.configs.json
]
```

### 完整配置示例

```javascript
import eslintPlugin from 'eslint-plugin-smarts'

export default [
  {
    ignores: [
      'dist/**',
      'node_modules/**'
    ]
  },
  ...eslintPlugin.configs.json,
  {
    // 自定义规则
    rules: {
      'jsonc/no-comments': 'error',
      'jsonc/sort-keys': [
        'error',
        {
          pathPattern: '^$',
          order: [
            'name',
            'version',
            // ... 其他字段
          ]
        }
      ]
    }
  }
]
```

## 规则说明

### 1. jsonc/no-comments

禁止在 JSON 文件中使用注释。

- 默认值: `'error'`
- 选项:
  - `allowLineComments`: 是否允许行注释（默认：false）

### 2. jsonc/sort-keys

强制 package.json 中的字段按照指定顺序排序。

默认排序顺序：

1. name
2. version
3. private
4. packageManager
5. description
6. type
7. keywords
8. homepage
9. bugs
10. license
11. author
12. contributors
13. funding
14. files
15. main
16. module
17. types
18. exports
19. imports
20. scripts
21. peerDependencies
22. peerDependenciesMeta
23. dependencies
24. optionalDependencies
25. devDependencies
26. engines
27. config
28. overrides
29. pnpm
30. husky
31. lint-staged
32. eslintConfig

## 常见问题

### 1. 如何处理特定的 JSON 文件？

如果需要对特定的 JSON 文件应用不同的规则，可以使用文件匹配模式：

```javascript
export default [
  {
    files: ['package.json'],
    rules: {
      'jsonc/sort-keys': ['error', {
        // package.json 特定的排序规则
      }]
    }
  },
  {
    files: ['tsconfig.json'],
    rules: {
      // tsconfig.json 特定的规则
    }
  }
]
```

### 2. 如何禁用特定文件的 JSON 验证？

使用 `ignores` 配置来排除特定文件：

```javascript
export default [
  {
    ignores: [
      'specific-file.json',
      'specific-directory/**/*.json'
    ]
  },
  ...eslintPlugin.configs.json
]
```

### 3. 如何自定义字段排序顺序？

可以通过覆盖 `jsonc/sort-keys` 规则来自定义排序顺序：

```javascript
export default [
  ...eslintPlugin.configs.json,
  {
    rules: {
      'jsonc/sort-keys': ['error', {
        pathPattern: '^$',
        order: [
          // 自定义排序顺序
          'name',
          'version',
          // ... 其他字段
        ]
      }]
    }
  }
]
```

## 最佳实践

1. 总是在项目中启用 JSON 配置，以确保 JSON 文件的一致性
2. 使用默认的字段排序顺序，除非有特殊需求
3. 对于大型项目，考虑为不同类型的 JSON 文件配置不同的规则
4. 定期运行 lint 命令以保持 JSON 文件的整洁 