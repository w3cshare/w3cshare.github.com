---
title: Vue 组件总览
description: Vue 组件库组件分类与用法说明
outline: deep
---

# Vue组件指南

本文档提供Vue组件库的组件分类和详细使用说明。

## 组件体系概览

Vue组件库基于Atomic Design设计原则，将组件分为以下几个层次：

- **原子组件**：基础UI元素，如按钮、输入框、图标
- **分子组件**：由多个原子组件组成的功能单元
- **有机体组件**：完整的功能模块
- **模板组件**：页面布局模板
- **页面组件**：完整的业务页面

## Element UI扩展组件

### 数据表格组件

#### FSTable 高级表格

增强的Element UI表格组件，支持虚拟滚动、树形数据、行列合并等高级特性。

```vue
<template>
  <fs-table
    :data="tableData"
    :columns="columns"
    :pagination="pagination"
    @page-change="handlePageChange"
    @selection-change="handleSelectionChange"
  />
</template>

<script>
export default {
  data() {
    return {
      tableData: [...],
      columns: [
        { prop: 'name', label: '姓名' },
        { prop: 'age', label: '年龄' },
        { prop: 'address', label: '地址' }
      ],
      pagination: {
        currentPage: 1,
        pageSize: 10,
        total: 100
      }
    }
  },
  methods: {
    handlePageChange(page) {
      // 处理分页变化
    },
    handleSelectionChange(selection) {
      // 处理选择变化
    }
  }
}
</script>
```

#### FSForm 高级表单

集成了表单验证、动态表单项、条件显示等特性的高级表单组件。

```vue
<template>
  <fs-form
    :model="form"
    :schema="schema"
    :rules="rules"
    label-width="100px"
    @submit="handleSubmit"
  />
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        age: 0,
        address: ''
      },
      schema: [
        { type: 'input', field: 'name', label: '姓名' },
        { type: 'number', field: 'age', label: '年龄' },
        { type: 'textarea', field: 'address', label: '地址' }
      ],
      rules: {
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }]
      }
    }
  },
  methods: {
    handleSubmit(formData) {
      // 提交表单
    }
  }
}
</script>
```

## Ant Design Vue扩展组件

### 数据可视化组件

#### FSChart 图表组件

基于Echarts封装的图表组件，提供常用图表类型和主题。

```vue
<template>
  <fs-chart :option="chartOption" :height="300" />
</template>

<script>
export default {
  data() {
    return {
      chartOption: {
        title: { text: '销售数据分析' },
        xAxis: { data: ['一月', '二月', '三月', '四月', '五月', '六月'] },
        yAxis: {},
        series: [{
          name: '销售额',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      }
    }
  }
}
</script>
```

## UniApp跨端组件

### 移动端导航组件

#### FSTabBar 底部导航

适配各平台的底部标签导航组件。

```vue
<template>
  <fs-tab-bar
    :tabs="tabs"
    :active-index="activeIndex"
    @change="handleTabChange"
  />
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { icon: 'home', text: '首页', pagePath: '/pages/index/index' },
        { icon: 'user', text: '我的', pagePath: '/pages/user/index' }
      ],
      activeIndex: 0
    }
  },
  methods: {
    handleTabChange(index) {
      this.activeIndex = index
      // 处理页面跳转
    }
  }
}
</script>
```

## SEO友好型组件

### FSArticle 文章组件

针对SEO优化的文章内容展示组件，支持结构化数据和富文本渲染。

```vue
<template>
  <fs-article
    :title="article.title"
    :author="article.author"
    :publish-time="article.publishTime"
    :content="article.content"
    :tags="article.tags"
  />
</template>

<script>
export default {
  data() {
    return {
      article: {
        title: '如何优化前端性能',
        author: '张三',
        publishTime: '2023-05-15',
        content: '文章内容...',
        tags: ['前端', '性能优化', 'Vue']
      }
    }
  }
}
</script>
```

## 组件规格说明

每个组件均符合以下规格：

1. **提供Typescript类型定义**
2. **支持Vue2和Vue3**
3. **支持SSR**
4. **提供单元测试**
5. **文档和示例**

## 组件API文档

如需了解每个组件的详细API，请查阅对应子包的文档：

- [Element UI组件API](/package-vue/element-ui-lib/api)
- [Ant Design Vue组件API](/package-vue/ant-design-lib/api)
- [UniApp组件API](/package-vue/uniapp-lib/api)
- [SEO组件API](/package-vue/pure-ui-lib/api) 