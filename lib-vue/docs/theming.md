<!--
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-16 12:52:07
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-16 12:58:44
 * @FilePath: /FullStack/package-vue/theming.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

---

title: Vue 组件主题定制
description: 如何定制和扩展 Vue 组件库的主题
outline: deep

---

# Vue 组件主题定制

本文档详细介绍如何定制我们的 Vue 组件库主题，以满足您的品牌和设计需求。

## 主题系统概述

我们的 Vue 组件库提供了灵活的主题系统，允许您：

1. 修改基础色彩、字体、圆角等设计变量
2. 创建和切换多个主题（如明暗主题）
3. 定制特定组件的样式
4. 扩展默认主题添加自定义变量

## 使用方法

### 基础主题配置

最简单的方式是使用`ThemeProvider`组件进行全局配置：

```vue
<template>
  <fs-theme-provider :theme="theme">
    <!-- 应用内容 -->
  </fs-theme-provider>
</template>

<script>
import { defineComponent } from 'vue'
import { ThemeProvider } from '@fullstack/vue-components'

export default defineComponent({
  components: {
    FsThemeProvider: ThemeProvider,
  },
  setup() {
    const theme = {
      // 主题配置
      colors: {
        primary: '#1890ff',
        success: '#52c41a',
        warning: '#faad14',
        error: '#f5222d',
      },
      borderRadius: '4px',
      fontSize: '14px',
    }

    return { theme }
  },
})
</script>
```

### CSS 变量方式

我们的主题系统基于 CSS 变量实现，您也可以直接覆盖 CSS 变量：

```css
:root {
  --fs-primary-color: #1890ff;
  --fs-success-color: #52c41a;
  --fs-warning-color: #faad14;
  --fs-error-color: #f5222d;
  --fs-border-radius: 4px;
  --fs-font-size: 14px;
}
```

## 支持的主题变量

### 颜色系统

```js
{
  colors: {
    // 品牌色
    primary: '#1890ff',
    primaryLight: '#40a9ff',
    primaryLighter: '#91caff',
    primaryDark: '#096dd9',

    // 功能色
    success: '#52c41a',
    warning: '#faad14',
    error: '#f5222d',
    info: '#1890ff',

    // 中性色
    text: 'rgba(0, 0, 0, 0.85)',
    textSecondary: 'rgba(0, 0, 0, 0.65)',
    textDisabled: 'rgba(0, 0, 0, 0.45)',
    border: '#d9d9d9',
    background: '#ffffff',
    backgroundLight: '#f5f5f5',
    backgroundDark: '#f0f0f0',
  }
}
```

### 字体系统

```js
{
  // 字体
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`,
  fontFamilyCode: `'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace`,

  // 字号
  fontSize: '14px',
  fontSizeSmall: '12px',
  fontSizeLarge: '16px',
  fontSizeXLarge: '20px',

  // 行高
  lineHeight: 1.5,
  lineHeightTight: 1.25,
  lineHeightLoose: 1.75,
}
```

### 间距与边框

```js
{
  // 边框
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#d9d9d9',
  borderRadius: '4px',
  borderRadiusSmall: '2px',
  borderRadiusLarge: '8px',

  // 阴影
  shadowLight: '0 2px 8px rgba(0, 0, 0, 0.15)',
  shadowMedium: '0 4px 12px rgba(0, 0, 0, 0.15)',
  shadowDark: '0 8px 16px rgba(0, 0, 0, 0.15)',

  // 间距
  spacingXXSmall: '4px',
  spacingXSmall: '8px',
  spacingSmall: '12px',
  spacingMedium: '16px',
  spacingLarge: '24px',
  spacingXLarge: '32px',
  spacingXXLarge: '48px',
}
```

## 创建暗色主题

以下是创建暗色主题的示例：

```js
const darkTheme = {
  colors: {
    // 品牌色（保持不变或微调）
    primary: '#1890ff',
    primaryLight: '#40a9ff',
    primaryLighter: '#91caff',
    primaryDark: '#096dd9',

    // 背景与文本色反转
    text: 'rgba(255, 255, 255, 0.85)',
    textSecondary: 'rgba(255, 255, 255, 0.65)',
    textDisabled: 'rgba(255, 255, 255, 0.45)',
    border: '#434343',
    background: '#141414',
    backgroundLight: '#1f1f1f',
    backgroundDark: '#000000',
  },

  // 其他变量保持不变
}
```

## 动态切换主题

您可以实现主题切换功能：

```vue
<template>
  <fs-theme-provider :theme="currentTheme">
    <div class="app-container">
      <fs-button @click="toggleTheme"> 切换至{{ isDarkMode ? '亮色' : '暗色' }}主题 </fs-button>

      <!-- 应用内容 -->
    </div>
  </fs-theme-provider>
</template>

<script>
import { defineComponent, ref, computed } from 'vue'
import { ThemeProvider, Button } from '@fullstack/vue-components'
import { lightTheme, darkTheme } from '@/themes'

export default defineComponent({
  components: {
    FsThemeProvider: ThemeProvider,
    FsButton: Button,
  },
  setup() {
    const isDarkMode = ref(false)

    const currentTheme = computed(() => (isDarkMode.value ? darkTheme : lightTheme))

    const toggleTheme = () => {
      isDarkMode.value = !isDarkMode.value
    }

    return { currentTheme, isDarkMode, toggleTheme }
  },
})
</script>
```

## 组件级别定制

您可以为特定组件创建样式变体：

```js
// 定制按钮组件
const theme = {
  components: {
    Button: {
      borderRadius: '20px', // 圆角按钮
      paddingHorizontal: '20px',
      paddingVertical: '10px',
    },
  },
}
```

## 最佳实践

1. **保持颜色一致性**：使用一致的颜色系统，避免使用硬编码的颜色值
2. **创建主题文件**：将主题配置抽离到单独的文件中便于管理
3. **考虑暗色主题**：设计时同时考虑亮色和暗色主题的效果
4. **测试边界情况**：测试各种主题配置下组件的表现
5. **关注无障碍性**：确保自定义主题下的颜色对比度符合WCAG标准
