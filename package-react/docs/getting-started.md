---
title: React 组件库快速开始
description: 如何快速上手使用 React 组件库
outline: deep
---

# React 组件库快速入门

本文档将指导您如何在项目中快速集成和使用我们的 React 组件库。

## 安装

使用您喜欢的包管理器安装组件库：

```bash
# 使用 pnpm (推荐)
pnpm add @fullstack/ant-design-lib

# 使用 npm
npm install @fullstack/ant-design-lib

# 使用 yarn
yarn add @fullstack/ant-design-lib
```

## 基本使用

```tsx
import React from 'react'
import { Button, Card } from '@fullstack/ant-design-lib'

const App = () => {
  return (
    <div>
      <Card title="示例卡片">
        <p>这是一个基本组件示例</p>
        <Button type="primary">点击我</Button>
      </Card>
    </div>
  )
}

export default App
```

## 主题配置

我们的组件库支持自定义主题：

```tsx
import { ThemeProvider } from '@fullstack/ant-design-lib'

const theme = {
  primaryColor: '#1890ff',
  borderRadius: '4px',
  // 更多主题配置
}

const App = () => {
  return <ThemeProvider theme={theme}>{/* 您的应用内容 */}</ThemeProvider>
}
```

## 高级用法

请参考我们的组件文档获取更多高级用法和API详情。

## 下一步

- 查看[组件总览](./components)了解所有可用组件
- 学习[主题定制](./theming)以满足您的品牌需求
- 了解我们的[设计规范](./design)以保持一致性
