# `@smarts-isoftstone/vscode-pro`

> VS Code低代码拖拽插件，支持组件可视化拖拽和React代码生成

## 功能特性

- **组件拖拽**：提供丰富的基础组件库，支持可视化拖拽布局和精确定位
- **代码生成**：自动生成符合最佳实践的React TypeScript组件代码
- **属性配置**：支持组件属性的可视化配置和实时预览
- **VS Code集成**：完美集成到VS Code编辑器中，提供一致的开发体验
- **模板系统**：支持自定义组件模板和代码生成规则

## 安装

```bash
npm install @smarts-isoftstone/vscode-pro
```

## 使用方法

1. 在VS Code中打开命令面板 (Ctrl+Shift+P / Cmd+Shift+P)
2. 输入 "VSCode Pro: Open Designer" 启动设计器
3. 从组件库中拖拽组件到画布
4. 配置组件属性和布局
5. 点击生成代码按钮，自动生成React组件代码
6. 在生成的代码中进行自定义修改（如需要）

### 工作流程

1. **设计阶段**

   - 打开设计器界面
   - 从组件面板选择需要的组件
   - 拖拽组件到画布并调整位置
   - 组织组件层次结构和嵌套关系

2. **配置阶段**

   - 选择组件并在属性面板中配置属性
   - 设置组件样式和行为
   - 配置组件间的交互和事件
   - 预览组件效果

3. **生成阶段**

   - 点击生成代码按钮
   - 选择代码生成模板和配置
   - 预览生成的代码
   - 确认并保存到项目文件中

4. **集成阶段**
   - 在项目中引用生成的组件
   - 根据需要进行自定义修改
   - 与其他组件集成

## 开发环境配置

1. 克隆项目并安装依赖：

```bash
git clone https://github.com/smarts-isoftstone/vscode-pro.git
cd vscode-pro
npm install
```

2. 编译项目：

```bash
npm run compile
```

3. 启动开发环境：

```bash
npm run watch
```

4. 安装推荐的VS Code扩展：
   - ESLint
   - Prettier
   - TypeScript Vue Plugin (Volar)
   - VS Code Extension Development Tools

## 插件架构

```
src/
├── components/     # UI组件库
├── extension.ts    # 插件入口文件
├── generators/     # 代码生成器
├── index.ts        # 公共API导出
└── types/          # TypeScript类型定义
```

### 核心模块

- **Extension**: 负责插件的激活、注册命令和管理生命周期
- **Designer**: 设计器界面和交互逻辑
- **ComponentRegistry**: 组件注册和管理
- **CodeGenerator**: 代码生成和模板处理
- **PropertyPanel**: 属性编辑面板

## 插件打包与发布

### 开发环境准备

1. 安装Node.js和npm（推荐使用Node.js 14.x或更高版本）
2. 安装VS Code（推荐使用最新稳定版）
3. 熟悉TypeScript和VS Code扩展API

### 打包流程

1. 安装vsce工具（VS Code Extension Manager）：

```bash
npm install -g @vscode/vsce
```

2. 准备打包配置：

```bash
# 确保package.json中的版本号、发布者等信息正确
npm run lint # 运行代码检查
npm run test # 运行测试确保功能正常
```

3. 更新版本号（可选，但推荐）：

```bash
npm version patch # 增加补丁版本号
# 或
npm version minor # 增加次要版本号
# 或
npm version major # 增加主要版本号
```

4. 打包插件：

```bash
vsce package
```

这将生成一个.vsix文件，格式为`smarts-isoftstone-vscode-pro-[版本号].vsix`。

5. 本地测试安装：
   - 在VS Code中打开命令面板（Ctrl+Shift+P / Cmd+Shift+P）
   - 输入并选择"Extensions: Install from VSIX..."
   - 选择生成的.vsix文件
   - 重启VS Code以激活插件

### 发布流程

1. 创建发布者账号：

   - 访问 [Visual Studio Marketplace发布者管理页面](https://marketplace.visualstudio.com/manage)
   - 使用Microsoft账号登录
   - 创建发布者账号（如果没有）

2. 创建个人访问令牌（PAT）：

   - 访问 [Azure DevOps个人访问令牌页面](https://dev.azure.com/your-organization/_usersSettings/tokens)
   - 创建一个新的PAT，确保选择"Marketplace > Manage"权限
   - 保存生成的令牌（它只会显示一次）

3. 登录vsce：

```bash
vsce login <发布者名称>
# 然后输入之前创建的PAT
```

4. 发布插件：

```bash
vsce publish
# 或指定版本
vsce publish patch|minor|major
```

> 注意：发布前需要有Visual Studio Marketplace的发布者账号和访问令牌。首次发布可能需要额外的验证步骤。

## 调试说明

1. 在VS Code中打开项目
2. 按F5启动调试会话，这将打开一个新的VS Code窗口（扩展开发主机）
3. 在新窗口中测试插件功能
4. 代码修改后，只需要按Ctrl+R (Mac: Cmd+R) 重新加载窗口即可查看更改
5. 使用VS Code的调试控制台查看日志输出
6. 在调试过程中可以设置断点、查看变量和调用堆栈

### 常见调试问题

- **插件未激活**：检查package.json中的activationEvents配置
- **命令未注册**：确认命令ID与package.json中的contributes.commands一致
- **Webview加载失败**：检查资源路径和内容安全策略
- **代码生成错误**：查看模板配置和数据模型

## 插件安装

### 从VSIX文件安装

1. 在VS Code中打开命令面板
2. 输入 "Install from VSIX"
3. 选择生成的.vsix文件

### 从扩展商店安装

1. 打开VS Code扩展面板
2. 搜索 "VSCode Pro"
3. 点击安装

## 开发指南

### 基础使用

```typescript
import { VSCodePro } from '@smarts-isoftstone/vscode-pro';

// 初始化设计器
const designer = new VSCodePro();

// 注册自定义组件
designer.registerComponent({
  name: 'CustomComponent',
  icon: 'component-icon.svg',
  properties: [
    { name: 'text', type: 'string', default: 'Button Text' },
    {
      name: 'variant',
      type: 'enum',
      options: ['primary', 'secondary', 'text'],
      default: 'primary',
    },
    { name: 'disabled', type: 'boolean', default: false },
  ],
  template: '<Button variant="{{variant}}" disabled={{{disabled}}}>{{text}}</Button>',
});

// 监听事件
designer.on('component:added', component => {
  console.log('Component added:', component);
});

// 生成代码
const code = designer.generateCode();
```

### 高级配置

```typescript
// 自定义代码生成模板
designer.setCodeTemplate({
  imports: ["import React from 'react';", "import { Button, Input, Card } from 'antd';"],
  componentTemplate: `
export const {{componentName}} = (props) => {
  {{hooks}}
  
  return (
    <div className="{{className}}">
      {{children}}
    </div>
  );
};
  `,
});

// 注册自定义事件处理器
designer.registerEventHandler('onClick', {
  template: '() => { {{handler}} }',
  defaultHandler: 'console.log("Clicked")',
  properties: [{ name: 'handler', type: 'function', default: '' }],
});
```

### 插件扩展

```typescript
// 扩展设计器功能
class CustomDesigner extends VSCodePro {
  constructor() {
    super();
    this.initCustomFeatures();
  }

  initCustomFeatures() {
    // 添加自定义功能
  }

  exportToFigma() {
    // 实现导出到Figma的功能
  }
}
```

## 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交Pull Request

### 开发规范

- 遵循TypeScript严格模式和ESLint规则
- 所有新功能必须包含单元测试
- 保持代码覆盖率在80%以上
- 遵循语义化版本控制规范
- 提交信息遵循约定式提交规范

### 代码审查标准

- 代码风格一致性
- 功能完整性和正确性
- 性能和资源使用
- 错误处理和边界情况
- 文档和注释完整性

## 最佳实践

### 组件设计

- 保持组件粒度适中，避免过大或过小
- 使用TypeScript接口定义组件属性
- 遵循React组件设计最佳实践
- 考虑组件的可复用性和可扩展性
- 使用语义化命名

### 代码生成

- 生成的代码应易于理解和维护
- 避免生成过于复杂的嵌套结构
- 保持生成代码的一致性和可预测性
- 提供适当的注释和文档
- 考虑性能和渲染优化

## 许可证

MIT License - 详见 LICENSE 文件

## 支持与反馈

如果您在使用过程中遇到问题或有任何建议，请通过以下方式联系我们：

- 提交GitHub Issue
- 发送邮件至：support@smarts-isoftstone.com
- 加入我们的开发者社区
