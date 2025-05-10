<!-- **添加规则文件可帮助模型精准理解你的编码偏好，如框架、代码风格等** -->

<!-- **规则文件只对当前工程生效，单文件限制10000字符。如果无需将该文件提交到远程 Git 仓库，请将其添加到 .gitignore** -->

## Git Commit 规范

### 1. 提交信息格式

```
<type>(<scope>): <emoji> <subject>

[body]

[footer]
```

### 2. 提交信息说明

#### 2.1 类型（type）

##### 标准类型

| 类型     | 表情符号 | 说明     | 描述                                                                                              |
| -------- | -------- | -------- | ------------------------------------------------------------------------------------------------- |
| feat     | ✨       | 新功能   | 新增功能 \| A new feature                                                                         |
| fix      | 🐛       | 修复缺陷 | 修复Bug \| A bug fix                                                                              |
| docs     | 📚       | 文档更新 | 文档更新 \| Documentation only changes                                                            |
| style    | 💎       | 代码格式 | 代码风格调整（不影响代码功能）\| Changes that do not affect the meaning of the code               |
| refactor | 📦       | 代码重构 | 代码重构（不包括 bug 修复或功能新增）\| A code change that neither fixes a bug nor adds a feature |
| perf     | 🚀       | 性能优化 | 性能提升 \| A code change that improves performance                                               |
| test     | 🚨       | 测试相关 | 测试相关 \| Adding missing tests or correcting existing tests                                     |
| build    | 🛠       | 构建相关 | 构建系统或外部依赖更改 \| Changes that affect the build system or external dependencies           |
| ci       | ⚙️       | 持续集成 | CI配置更改 \| Changes to our CI configuration files and scripts                                   |
| chore    | ♻️       | 其他修改 | 其他改动（不修改src或测试文件）\| Other changes that do not modify src or test files              |
| revert   | ⏪️      | 回退代码 | 回滚之前的提交 \| Revert to a commit                                                              |

##### 扩展类型

| 类型    | 表情符号 | 说明             | 描述                             |
| ------- | -------- | ---------------- | -------------------------------- |
| ui      | 🎨       | UI相关更改       | 用户界面相关更改                 |
| wip     | 🚧       | 开发中的工作     | 开发中的工作（Work In Progress） |
| api     | 🔌       | API相关更改      | API接口相关变更                  |
| release | 🎉       | 版本发布         | 版本发布相关                     |
| deploy  | 🚀       | 部署相关         | 部署流程或环境相关               |
| config  | ⚙️       | 配置调整         | 配置文件调整                     |
| i18n    | 🌐       | 国际化相关       | 国际化与本地化相关更改           |
| lint    | 🎯       | 代码检查调整     | 代码检查规则调整                 |
| types   | 📝       | 类型定义文件更改 | TypeScript类型定义文件更改       |

#### 2.2 作用域（scope）

作用域用于说明提交影响的范围，根据项目进行配置。

> 例如：vscode-lowcode/components | vscode-lowcode/modules | vscode-lowcode

常见的有：

- components
- modules
- utils
- styles
- deps
- config
- core
- ci
- scripts
- docs
- release
- other

具体项目范围包括：

- vscode-lowcode
- ismart-swbn-converged-web
- google-tab-home
- tcp-main
- tcp-client
- nest-template
- langchain
- grpc-user
- grpc-python
- grpc-main
- grpc-java
- grpc-go
- grpc-gateway
- grpc-client
- vue-template
- react-template
- micro-app-x
- micro-app-web3
- micro-app-vue
- micro-app-vap
- micro-app-react
- micro-app-pure
- micro-app-angular
- micro-app-ai
- uniapp-lib
- pure-ui-lib
- element-ui-lib
- ant-design-lib
- taro-ui-lib
- ant-design-x-lib
- ant-design-web3-lib
- ant-design-lib
- umijs-server
- nestjs-swagger
- nestjs-static
- nestjs-logger
- nestjs-config
- koa-upload
- koa-static
- grpc-proto-pkg
- fastify-static
- egg-static
- mcp-server-office
- tsconfig-base-smart
- stylelint-config-smarts
- stylelint-config-smart
- prettier-plugin-smarts
- prettier-plugin-smart
- eslint-plugin-smarts
- eslint-plugin-smart
- commitlint-plugin-smart
- commitlint-config-smart
- swagger-to-typescript
- init
- cli-utils
- cli-npx
- cli-git
- cli-env-check
- cli-commit
- spider
- pdf-compressed
- ocr-vlm
- md-pdf
- ismart-swbn-ios
- iOSSwiftUILibs
- iOSSwiftAggregationLibs
- FlutterUILibs
- FlutterAggregationLibs
- AwesomeProject
- AndroidKotlinUILibs
- AndroidKotlinAggregationLibs
- vitepress-plugin-smart
- vite-plugin-swagger
- vite-plugin-smarts
- rollup-plugin-smarts
- uniapp-x-lib
- artts-ui-lib

#### 2.3 主题（subject）

- 简短描述本次提交的主要内容
- 使用动词开头，使用第一人称现在时
- 第一个字母小写
- 结尾不加句号

#### 2.4 正文（body）

- 对本次提交的详细描述
- 可以分点说明
- 使用第一人称现在时

#### 2.5 页脚（footer）

- BREAKING CHANGE: 破坏性变更说明
- Closes/Fixes #issue编号: 关联或修复的issue

### 3. 提交示例

#### 3.1 功能开发

```
feat(user): ✨ 添加用户登录功能

- 实现用户名密码登录
- 添加登录验证码
- 集成第三方登录

BREAKING CHANGE:
- 移除了旧版登录接口
- 用户表结构变更

Closes #123
```

#### 3.2 Bug修复

```
fix(ismart-swbn-ios/modules): 🐛 修复购物车商品数量无法更新

- 修复数量输入框绑定问题
- 优化数量变更的性能

Fixes #456
```

#### 3.3 文档更新

```
docs(grpc-user/docs): 📚 更新API文档

- 添加新接口文档
- 更新返回值说明
- 补充错误码说明
```

#### 3.4 性能优化

```
perf(eslint-plugin-smart/components): 🚀 优化列表渲染性能

- 实现虚拟滚动
- 优化数据缓存
- 减少不必要的重渲染

Closes #789
```
