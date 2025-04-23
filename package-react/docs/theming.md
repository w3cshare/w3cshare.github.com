---
title: React 组件主题定制
description: 如何定制和扩展 React 组件库的主题
outline: deep
---

# React 组件主题定制

本文档介绍如何定制和扩展 React 组件库的主题，以满足您的品牌需求和设计规范。

## 主题系统概述

我们的组件库基于一个灵活的主题系统，允许您:

1. 修改颜色、字体、圆角等变量
2. 创建多个主题并动态切换
3. 扩展默认主题添加自定义变量
4. 针对特定组件进行样式覆盖

## 基础主题定制

### 使用 ConfigProvider

最简单的方式是使用 `ConfigProvider` 组件:

```tsx
import { ConfigProvider } from '@fullstack/ant-design-lib'

const theme = {
  token: {
    colorPrimary: '#00b96b',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    colorInfo: '#1890ff',
    borderRadius: 4,
    fontSize: 14,
  },
}

export default () => <ConfigProvider theme={theme}>{/* 您的应用组件 */}</ConfigProvider>
```

### 支持的主题变量

以下是可定制的主题变量列表：

#### 色彩变量

```tsx
{
  // 品牌色
  colorPrimary: '#1890ff',

  // 功能色
  colorSuccess: '#52c41a',
  colorWarning: '#faad14',
  colorError: '#ff4d4f',
  colorInfo: '#1890ff',

  // 中性色
  colorText: 'rgba(0, 0, 0, 0.85)',
  colorTextSecondary: 'rgba(0, 0, 0, 0.65)',
  colorTextDisabled: 'rgba(0, 0, 0, 0.45)',
  colorBorder: '#d9d9d9',
  colorBgContainer: '#ffffff',
  colorBgLayout: '#f0f2f5',
  colorBgSpotlight: 'rgba(0, 0, 0, 0.85)',

  // 交互状态色
  colorPrimaryHover: '#40a9ff',
  colorPrimaryActive: '#096dd9',
}
```

#### 字体与大小变量

```tsx
{
  // 字体
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji'`,

  // 字号
  fontSize: 14,
  fontSizeSM: 12,
  fontSizeLG: 16,
  fontSizeXL: 20,
  fontSizeXXL: 24,

  // 行高
  lineHeight: 1.5,
  lineHeightLG: 2,
  lineHeightSM: 1.2,
}
```

#### 边框与圆角变量

```tsx
{
  // 边框
  borderWidth: 1,
  borderStyle: 'solid',

  // 圆角
  borderRadius: 2,
  borderRadiusSM: 2,
  borderRadiusLG: 8,
  borderRadiusXL: 16,
}
```

#### 间距变量

```tsx
{
  marginXS: 4,
  marginSM: 8,
  margin: 16,
  marginMD: 16,
  marginLG: 24,
  marginXL: 32,
  marginXXL: 48,

  paddingXS: 4,
  paddingSM: 8,
  padding: 16,
  paddingMD: 16,
  paddingLG: 24,
  paddingXL: 32,
  paddingXXL: 48,
}
```

## 动态主题切换

您可以实现动态主题切换，如明暗模式切换：

```tsx
import React, { useState } from 'react'
import { ConfigProvider, Button } from '@fullstack/ant-design-lib'

const lightTheme = {
  token: {
    colorBgContainer: '#ffffff',
    colorText: 'rgba(0, 0, 0, 0.85)',
  },
}

const darkTheme = {
  token: {
    colorBgContainer: '#1f1f1f',
    colorText: 'rgba(255, 255, 255, 0.85)',
  },
}

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const currentTheme = isDarkMode ? darkTheme : lightTheme

  return (
    <ConfigProvider theme={currentTheme}>
      <div style={{ padding: 24 }}>
        <Button onClick={() => setIsDarkMode(!isDarkMode)}>
          切换到{isDarkMode ? '亮色' : '暗色'}模式
        </Button>
        <div style={{ marginTop: 16 }}>{/* 您的应用内容 */}</div>
      </div>
    </ConfigProvider>
  )
}
```

## 组件级别定制

除了全局主题外，您还可以单独定制特定组件的样式：

```tsx
const buttonTheme = {
  components: {
    Button: {
      colorPrimary: '#00b96b',
      algorithm: true, // 启用算法生成其他按钮相关的衍生颜色
    },
  },
}

;<ConfigProvider theme={buttonTheme}>
  <Button type="primary">自定义按钮</Button>
</ConfigProvider>
```

## CSS 变量模式

启用 CSS 变量模式可以实现运行时动态切换主题，而无需重新加载页面：

```tsx
import { ConfigProvider } from '@fullstack/ant-design-lib'

;<ConfigProvider
  theme={{
    token: {
      colorPrimary: '#00b96b',
    },
    hashed: false, // 关闭哈希值后缀
    cssVar: true, // 启用 CSS 变量模式
  }}
>
  {/* 您的应用组件 */}
</ConfigProvider>
```

## 自定义主题算法

高级用户可以定制主题算法，创建基于特定基础色的一整套主题：

```tsx
import { theme } from '@fullstack/ant-design-lib'
const { compactAlgorithm, darkAlgorithm } = theme

;<ConfigProvider
  theme={{
    token: {
      colorPrimary: '#00b96b',
    },
    algorithm: [compactAlgorithm, darkAlgorithm], // 组合使用紧凑和暗色算法
  }}
>
  {/* 您的应用组件 */}
</ConfigProvider>
```

## 最佳实践

1. **创建主题配置文件**：将主题配置抽离到单独的文件中便于管理
2. **使用语义化变量**：在应用中使用语义化的变量名而非硬编码值
3. **开发主题切换器**：为用户提供主题自定义选项
4. **考虑无障碍性**：确保主题颜色有足够的对比度
5. **测试多种主题**：在开发过程中测试不同主题下的组件表现
