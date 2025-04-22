# ESLint配置指南

## 概述

本文档提供了项目中使用的ESLint配置指南，包括常见问题解决方案和最佳实践。本项目使用自定义的`eslint-plugin-smart`插件来统一管理各种前后端项目的ESLint规则。

## 项目结构

```
/lint/eslint-plugin-smart/     # 自定义ESLint插件
  ├── src/                     # 源代码
  ├── lib/                     # 构建输出
  └── package.json             # 依赖配置
```

## 关键特性

- 支持多种项目类型（React、Vue、NestJS、纯TypeScript）
- 自动适配ESLint v8和v9
- 统一代码风格和质量规则
- 集成各类常用插件（import、unused-imports等）

## 常见问题解决方案

### ESLint v9兼容性问题

ESLint v9引入了扁平配置系统，与一些旧版插件可能存在兼容性问题。

#### 问题: `@typescript-eslint/ban-types`规则不存在

**症状**：
```
TypeError: Key "rules": Key "@typescript-eslint/ban-types": Could not find "ban-types" in plugin "@typescript-eslint".
```

**解决方案**：
1. 检查`eslint-plugin-smart`插件中的TypeScript规则配置
2. 删除或更新不兼容的规则
3. 重新构建插件

```typescript
// 修改前
const typescriptRules = {
  // ...其他规则
  '@typescript-eslint/ban-types': 'warn',  // 不兼容的规则
  // ...更多规则
};

// 修改后
const typescriptRules = {
  // ...其他规则
  // '@typescript-eslint/ban-types': 'warn',  // 已删除不兼容的规则
  // ...更多规则
};
```

### 项目中的ESLint配置示例

在项目中使用`eslint-plugin-smart`插件的示例（ESLint v9 扁平配置）：

```javascript
// eslint.config.mjs
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPlugin from 'eslint-plugin-smart';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      'import': eslintPlugin.plugins.import,
      'simple-import-sort': eslintPlugin.plugins['simple-import-sort'],
      'unused-imports': eslintPlugin.plugins['unused-imports'],
    },
    rules: {
      ...eslintPlugin.rules.base,
      ...eslintPlugin.rules.typescript,
      
      // 可以在此覆盖特定规则
      'no-console': 'error',
    },
  },
];
```

## 最佳实践

### 1. 使用统一的ESLint配置

在Monorepo项目中使用统一的ESLint配置可以确保代码风格一致性。推荐使用项目提供的`eslint-plugin-smart`插件，它已经针对不同类型的项目预设了合适的规则。

### 2. 合理处理ESLint版本更新

当ESLint发布新版本时，可能会引入破坏性更改。处理方法：

- 更新前先在测试环境验证
- 针对特定问题修改`eslint-plugin-smart`插件配置
- 重新构建插件并验证各子项目的lint功能

### 3. 自定义规则和覆盖

子项目可以在沿用公共规则的同时，根据需要覆盖特定规则：

```javascript
rules: {
  ...eslintPlugin.rules.base,
  ...eslintPlugin.rules.typescript,
  
  // 子项目特定规则覆盖
  'no-console': 'off',  // 允许使用console
  'max-len': ['warn', { code: 150 }],  // 调整最大行长度
}
```

### 4. 常见的规则推荐

以下是一些推荐使用的规则：

- `no-unused-vars`：检测未使用的变量
- `simple-import-sort/imports`：自动排序import语句
- `unused-imports/no-unused-imports`：自动移除未使用的导入
- `quotes`、`semi`等：统一代码风格

## 故障排除

如遇到ESLint配置问题，请按以下步骤排查：

1. 检查ESLint版本：`npx eslint --version`
2. 验证插件版本兼容性：查看package.json中的依赖版本
3. 确认是否有规则冲突：尝试暂时禁用可疑规则
4. 更新并重建`eslint-plugin-smart`插件
5. 清除node_modules缓存并重新安装依赖

## 相关资源

- [ESLint官方文档](https://eslint.org/)
- [TypeScript ESLint](https://typescript-eslint.io/)
- [ESLint Flat Config指南](https://eslint.org/docs/latest/use/configure/configuration-files-new) 