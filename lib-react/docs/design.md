---
title: React 组件设计规范
description: React 组件库的设计原则与规范
outline: deep
---

# React 组件设计规范

为了确保组件库的一致性和可用性，我们制定了以下设计规范。

## 设计原则

### 1. 一致性

所有组件应遵循统一的视觉语言和交互模式，确保用户在使用不同组件时有一致的体验。

### 2. 易用性

组件应该设计得简单直观，降低使用门槛，让开发者能够快速上手。

### 3. 灵活性

提供足够的配置项和扩展接口，让组件能够适应不同的业务场景。

### 4. 性能优先

组件应该高效渲染，避免不必要的重绘和重排，确保良好的用户体验。

### 5. 可访问性

支持键盘导航、屏幕阅读器等辅助功能，让所有用户都能无障碍使用。

## 视觉规范

### 颜色系统

我们定义了以下颜色变量作为设计基础：

```scss
// 主色调
$primary-color: #1890ff;
$primary-color-hover: #40a9ff;
$primary-color-active: #096dd9;

// 功能色
$success-color: #52c41a;
$warning-color: #faad14;
$error-color: #f5222d;
$info-color: #1890ff;

// 中性色
$text-color-primary: rgba(0, 0, 0, 0.85);
$text-color-secondary: rgba(0, 0, 0, 0.65);
$text-color-disabled: rgba(0, 0, 0, 0.45);
$border-color: #d9d9d9;
$background-color: #f5f5f5;
```

### 字体规范

```scss
// 字体家族
$font-family:
  -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans',
  sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';

// 字号
$font-size-xs: 12px;
$font-size-sm: 14px;
$font-size-md: 16px;
$font-size-lg: 20px;
$font-size-xl: 24px;

// 行高
$line-height-base: 1.5;
$line-height-lg: 2;
$line-height-sm: 1.2;
```

### 间距规范

使用 8px 作为基础网格单位，所有间距和尺寸应该是 8 的倍数：

```scss
// 间距
$spacing-xs: 4px;
$spacing-sm: 8px;
$spacing-md: 16px;
$spacing-lg: 24px;
$spacing-xl: 32px;
$spacing-xxl: 48px;
```

### 圆角规范

```scss
// 圆角
$border-radius-xs: 2px;
$border-radius-sm: 4px;
$border-radius-md: 8px;
$border-radius-lg: 16px;
$border-radius-circle: 50%;
```

## 响应式设计

我们定义了以下断点来支持响应式设计：

```scss
// 断点
$screen-xs: 480px;
$screen-sm: 576px;
$screen-md: 768px;
$screen-lg: 992px;
$screen-xl: 1200px;
$screen-xxl: 1600px;
```

组件应该能够自适应不同屏幕尺寸，在移动设备上保持良好的用户体验。

## 交互规范

### 点击反馈

所有可交互元素应提供明确的视觉反馈：

- 悬停状态：轻微的背景色或边框变化
- 点击状态：明显的背景色或边框变化
- 禁用状态：降低透明度，移除交互效果

### 动画效果

动画应该简洁、自然，增强用户体验而不干扰操作：

```scss
// 动画持续时间
$animation-duration-base: 0.2s;
$animation-duration-slow: 0.3s;
$animation-duration-fast: 0.1s;

// 动画曲线
$ease-base-out: cubic-bezier(0.7, 0.3, 0.1, 1);
$ease-base-in: cubic-bezier(0.9, 0, 0.3, 0.7);
$ease-out: cubic-bezier(0.215, 0.61, 0.355, 1);
$ease-in: cubic-bezier(0.55, 0.055, 0.675, 0.19);
$ease-in-out: cubic-bezier(0.645, 0.045, 0.355, 1);
$ease-out-back: cubic-bezier(0.12, 0.4, 0.29, 1.46);
$ease-in-back: cubic-bezier(0.71, -0.46, 0.88, 0.6);
$ease-in-out-back: cubic-bezier(0.71, -0.46, 0.29, 1.46);
$ease-out-circ: cubic-bezier(0.08, 0.82, 0.17, 1);
$ease-in-circ: cubic-bezier(0.6, 0.04, 0.98, 0.34);
$ease-in-out-circ: cubic-bezier(0.78, 0.14, 0.15, 0.86);
```

## 设计资源

- [Figma 设计系统](https://figma.com/file/example)
- [Adobe XD 组件库](https://adobe.xd/example)
- [Sketch 组件库](https://sketch.com/example)

## 组件设计检查清单

- [ ] 组件是否遵循设计规范？
- [ ] 是否提供了必要的配置项？
- [ ] 是否支持响应式设计？
- [ ] 是否考虑了边界情况？
- [ ] 交互是否自然流畅？
- [ ] 是否通过无障碍性测试？
