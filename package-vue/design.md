# Vue组件设计规范

本文档定义了Vue组件库的设计规范和开发准则，确保组件库的一致性、可用性和可维护性。

## 设计原则

### 1. 一致性（Consistency）

- 视觉一致：颜色、字体、图标、间距等视觉元素保持一致
- 行为一致：相似的功能应有相似的交互方式
- 命名一致：组件名称、属性、事件等命名风格统一

### 2. 可用性（Usability）

- 组件应直观易用，降低学习成本
- 提供合理的默认值，减少配置项
- 关注无障碍访问，支持键盘操作和屏幕阅读器

### 3. 可扩展性（Extensibility）

- 组件设计支持扩展和定制
- 使用插槽和作用域插槽提供灵活的内容定制
- 提供主题系统支持样式定制

### 4. 高性能（Performance）

- 组件应高效渲染，避免不必要的重绘
- 大数据场景使用虚拟滚动等优化技术
- 按需加载，减小包体积

## Atomic Design原则

我们基于Atomic Design方法论构建组件库，将组件分为以下层级：

### 1. 原子（Atoms）

最基础的UI组件，不可再分的单元：

- 按钮（Button）
- 输入框（Input）
- 图标（Icon）
- 标签（Tag）
- 开关（Switch）

### 2. 分子（Molecules）

由多个原子组合而成的功能单元：

- 表单项（FormItem）
- 下拉选择器（Select）
- 日期选择器（DatePicker）
- 导航项（NavItem）

### 3. 有机体（Organisms）

由多个分子组合而成的复杂组件：

- 表单（Form）
- 表格（Table）
- 导航菜单（Menu）
- 对话框（Dialog）

### 4. 模板（Templates）

页面布局结构，组织有机体的容器：

- 页面布局（Layout）
- 卡片布局（CardLayout）
- 分栏布局（ColumnLayout）

### 5. 页面（Pages）

完整的业务页面，包含实际内容：

- 登录页（LoginPage）
- 仪表盘（Dashboard）
- 商品列表（ProductList）

## 设计令牌系统（Design Tokens）

为确保一致性并支持主题定制，我们使用设计令牌系统管理样式变量：

### 颜色系统

```scss
// 品牌色
$brand-primary: #1890ff;
$brand-success: #52c41a;
$brand-warning: #faad14;
$brand-danger: #f5222d;

// 中性色
$neutral-1: #000000;
$neutral-2: #262626;
$neutral-3: #434343;
$neutral-4: #595959;
$neutral-5: #8c8c8c;
$neutral-6: #bfbfbf;
$neutral-7: #d9d9d9;
$neutral-8: #f0f0f0;
$neutral-9: #f5f5f5;
$neutral-10: #fafafa;
$neutral-11: #ffffff;
```

### 字体系统

```scss
// 字体家族
$font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
$font-family-code: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;

// 字体大小
$font-size-xs: 12px;
$font-size-sm: 14px;
$font-size-md: 16px;
$font-size-lg: 18px;
$font-size-xl: 20px;
$font-size-xxl: 24px;

// 行高
$line-height-tight: 1.25;
$line-height-base: 1.5;
$line-height-loose: 1.75;
```

### 间距系统

```scss
// 间距
$spacing-xxs: 4px;
$spacing-xs: 8px;
$spacing-sm: 12px;
$spacing-md: 16px;
$spacing-lg: 24px;
$spacing-xl: 32px;
$spacing-xxl: 48px;
```

## 组件开发规范

### 命名规范

- 组件名称：使用PascalCase，前缀为FS（FullStack缩写）
- 属性名称：使用camelCase
- 事件名称：使用kebab-case

### 属性设计

- 使用控制反转模式，通过属性传递数据和回调
- 提供默认属性值，减少必填属性
- 属性类型应尽可能精确，利用TypeScript提供类型安全

### 事件设计

- 事件名称应表明动作，如`click`、`change`、`submit`
- 事件处理函数应提供有意义的参数
- 支持`.sync`修饰符（Vue2）或`v-model`（Vue3）的双向绑定

### 插槽设计

- 提供默认插槽用于内容定制
- 使用命名插槽分离不同部分的定制
- 使用作用域插槽传递上下文数据

## 无障碍设计

所有组件应符合WCAG 2.1标准，确保：

- 提供适当的ARIA属性
- 支持键盘导航
- 颜色对比度符合标准
- 提供屏幕阅读器友好的文本替代

## 响应式设计

组件应自适应不同屏幕尺寸：

- 使用相对单位（rem/em）和百分比
- 关键断点适配（xs, sm, md, lg, xl）
- 移动优先的设计方法

## 版本兼容性

### Vue版本适配

所有组件采用通用接口，同时支持Vue2和Vue3：

```js
// 组件适配层
import { createComponent } from '@fullstack/vue-compat'

export default createComponent({
  name: 'FSButton',
  props: {
    // 通用属性定义
  },
  setup(props, context) {
    // Composition API实现（优先）
  },
  render() {
    // 渲染函数（兼容两个版本）
  }
})
```

## 测试规范

所有组件必须通过以下测试：

- 单元测试：测试组件API和行为
- 视觉回归测试：确保样式一致性
- 性能测试：确保渲染性能
- 可访问性测试：符合WCAG标准

## 文档规范

每个组件必须提供以下文档：

- 组件描述
- 属性/事件/插槽API说明
- 使用示例
- 最佳实践

## 设计资源

- [Figma设计系统](https://figma.com/file/example)
- [设计令牌文档](/package-vue/design-tokens)
- [图标库](/package-vue/icons) 