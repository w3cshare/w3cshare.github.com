# ESLint规则说明文档

## 基础规则

### 代码组织规则
- `annotation/sort`: "error" ✅ 强制数组/对象排序
- `annotation/sort-keys`: "error" ✅ 强制对象键名排序
- `annotation/format-date`: "error" ✅ 强制日期格式统一
- `annotation/unique`: "error" ✅ 强制数组元素唯一

### 导入/导出规则
- `simple-import-sort/imports`: "error" ✅ 强制导入语句排序
- `simple-import-sort/exports`: "error" ✅ 强制导出语句排序

### 未使用代码规则
- `@typescript-eslint/no-unused-vars`: "off" ❌ 关闭TS未使用变量检查(使用unused-imports代替)
- `no-unused-vars`: "off" ❌ 关闭ESLint未使用变量检查(使用unused-imports代替)
- `unused-imports/no-unused-imports`: "error" ✅ 自动删除未使用的导入
- `unused-imports/no-unused-vars`: "warn" ⚠️ 警告未使用的变量

## React专用规则

### React核心规则
- `react/jsx-uses-react`: "error" ✅ 防止React未使用
- `react/jsx-uses-vars`: "error" ✅ 防止JSX变量未使用
- `react/jsx-no-undef`: "error" ✅ 防止未定义JSX标签

### React Hooks规则
- `react-hooks/rules-of-hooks`: "error" ✅ 强制Hook规则
- `react-hooks/exhaustive-deps": "warn" ⚠️ 检查Hook依赖项

## Vue专用规则

### Vue核心规则
- `vue/no-mutating-props`: "error" ✅ 禁止修改props
- `vue/require-v-for-key": "error" ✅ 强制v-for使用key
- `vue/no-use-v-if-with-v-for": "error" ✅ 禁止v-if和v-for同时使用

### Vue组件命名规则
- `vue/multi-word-component-names": "error" ✅ 强制多单词组件名
- `vue/component-name-in-template-casing": "error" ✅ 强制组件名kebab-case

## 代码质量规则

- `no-var`: "error" ✅ 使用let/const替代var
- `no-debugger`: "error" ✅ 禁止使用debugger
- `no-alert`: "error" ✅ 禁止使用alert/confirm/prompt
- `complexity": ["warn", { "max": 10 }] ⚠️ 限制圈复杂度<=10
