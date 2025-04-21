# Less 预处理器支持

stylelint-config-smart 针对 Less 预处理器提供了全面支持，特别适用于 Ant Design 等基于 Less 的项目。

## Less 特有规则

stylelint-config-smart 默认配置中已包含对 Less 语法的支持，例如：

- 允许 Less 变量的使用 (`@variable`)
- 支持 Less 特有的嵌套规则
- 支持 Less 的混合 (mixins) 和函数

## 在 Ant Design 项目中使用

Ant Design 项目通常大量使用 Less 作为样式预处理器。在 Ant Design 项目中使用 stylelint-config-smart 时，可以考虑以下配置：

```js
// .stylelintrc.js
module.exports = {
  extends: ['stylelint-config-smart'],
  rules: {
    // 允许使用 Ant Design 的变量命名方式
    'scss/dollar-variable-pattern': null,
    
    // 如果项目中有大量 CSS-in-JS，可以适当放宽这些规则
    'selector-class-pattern': null,
    
    // 允许更深的嵌套（Ant Design 组件有时需要）
    'max-nesting-depth': 6
  }
};
```

## 添加 Less 特定的配置

如果需要添加更多 Less 特定的规则，可以安装 `stylelint-less` 插件：

```bash
pnpm add -D stylelint-less
```

然后在配置中添加：

```js
module.exports = {
  extends: ['stylelint-config-smart'],
  plugins: ['stylelint-less'],
  rules: {
    // Less 特定规则
    'less/color-no-invalid-hex': true,
    'less/no-duplicate-variables': true
  }
};
```

## 常见的 Less 样式问题及解决方案

### 1. 变量命名不一致

**问题**：团队成员使用不同的变量命名风格

**解决方案**：

```js
// .stylelintrc.js
module.exports = {
  extends: ['stylelint-config-smart'],
  rules: {
    // 推荐的变量命名模式（驼峰式）
    'less/custom-property-pattern': '^[a-z][a-zA-Z0-9]*$'
  }
};
```

### 2. 滥用 Less 嵌套

**问题**：过度使用嵌套导致选择器过于复杂

**解决方案**：

```js
// .stylelintrc.js
module.exports = {
  extends: ['stylelint-config-smart'],
  rules: {
    'max-nesting-depth': 4,
    'selector-max-compound-selectors': 4
  }
};
```

### 3. 混合 (Mixin) 使用不当

**问题**：创建了过多单一用途的混合函数

**最佳实践**：

- 创建可复用的混合
- 使用参数使混合更加灵活
- 避免过于复杂的混合

## 与 Webpack 集成

在使用 Webpack 处理 Less 文件时，可以将 stylelint 集成到构建流程中：

```js
// webpack.config.js
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  // ...其他配置
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true // 对于 Ant Design 必须
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new StylelintPlugin({
      files: ['**/*.less'],
      fix: true
    })
  ]
};
```

## 与 Vite 集成

在 Vite 项目中处理 Less：

```js
// vite.config.js
import { defineConfig } from 'vite';
import stylelint from 'vite-plugin-stylelint';

export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "src/styles/variables.less";`
      }
    }
  },
  plugins: [
    stylelint({
      include: ['src/**/*.less'],
      fix: true
    })
  ]
});
```

## 编辑器支持

配置 VS Code 以获得更好的 Less 支持：

```json
// settings.json
{
  "stylelint.validate": ["css", "scss", "less", "vue"],
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
  },
  "less.lint.validProperties": [],
  "css.validate": false,
  "less.validate": false
}
```

## 最佳实践示例

一个符合 stylelint-config-smart 规范的 Less 文件示例：

```less
// 变量定义
@primaryColor: #1890ff;
@borderRadius: 4px;
@fontSize: 14px;

// 混合定义
.textStyle(@color: @primaryColor, @size: @fontSize) {
  color: @color;
  font-size: @size;
  line-height: 1.5;
}

// 组件样式
.component {
  position: relative;
  z-index: 1;
  
  display: flex;
  flex-direction: column;
  
  width: 100%;
  max-width: 500px;
  
  margin: 16px;
  
  padding: 16px;
  
  border: 1px solid #eee;
  border-radius: @borderRadius;
  
  background-color: #fff;
  
  .textStyle();
  
  &-header {
    margin-bottom: 16px;
    
    font-weight: bold;
    text-align: center;
  }
  
  &-content {
    flex: 1;
  }
}
``` 