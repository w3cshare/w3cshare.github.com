<!--
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-21 11:50:42
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-22 09:45:12
 * @FilePath: /FullStack/lint/eslint-plugin-smart/CHANGELOG.md
 * @Description: 更新日志
-->

# 更新日志

所有版本更新都将记录在此文件中。

## [1.1.0] - 2025-04-22

### 新增

- 内置常用 ESLint 插件，无需单独安装
- 简化项目依赖管理，减少安装步骤
- 更新文档，添加内置插件使用说明
- 改进 ESLint v9 支持，优化扁平配置结构

### 内置插件

- `eslint-plugin-import` - 导入/导出语法检查
- `eslint-plugin-simple-import-sort` - 导入排序
- `eslint-plugin-unused-imports` - 自动移除未使用的导入
- `@typescript-eslint/eslint-plugin` 和 `@typescript-eslint/parser` - TypeScript支持
- `eslint-plugin-react` 和 `eslint-plugin-react-hooks` - React支持
- `eslint-plugin-jsx-a11y` - React可访问性支持
- `eslint-plugin-vue` 和 `vue-eslint-parser` - Vue支持
- `eslint-plugin-node` - Node.js和NestJS支持

### 文档更新

- 更新 README.md，添加内置插件说明
- 更新《配置指南》，添加内置插件使用示例
- 更新《常见问题》，解答内置插件相关问题

## [1.0.0] - 2025-04-21

### 新增

- 初始版本发布
- 添加基础规则集，适用于所有项目
- 添加TypeScript特定规则集
- 添加React特定规则集
- 添加Vue特定规则集
- 添加NestJS特定规则集
- 提供多种预设配置，方便不同类型项目使用
- 添加示例配置文件
- 添加详细使用文档

### 规则集特性

- **基础规则**：代码风格、错误防范、导入排序等通用规则
- **TypeScript规则**：类型检查、接口定义等TypeScript特定规则
- **React规则**：组件编写、Hooks使用、JSX格式化、可访问性等React特定规则
- **Vue规则**：组件命名、模板格式化、属性排序等Vue特定规则
- **NestJS规则**：后端服务开发相关规则
