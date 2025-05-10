**添加规则文件可帮助模型精准理解你的编码偏好，如框架、代码风格等**
**规则文件只对当前工程生效，单文件限制10000字符。如果无需将该文件提交到远程 Git 仓库，请将其添加到 .gitignore**

## commit 规则

### 1. 提交信息格式

```
<type>(<scope>): [emoji]<subject>
<BLANKLINE>[body]
<BLANKLINE>[optional footer(s)]
```

### 2. 提交信息说明

- type: 提交类型，包括 feat、fix、docs、style、refactor、perf、test、build、ci、chore、revert
- emoji: 提交信息表情，可选，包括:
  - ✨ feat 新功能
  - 🐛 fix 修复Bug
  - 📝 docs 文档更新
  - 💄 style 代码风格调整（不影响代码功能）
  - ♻️ refactor 代码重构（不包括 bug 修复或功能新增）
  - ⚡️ perf 性能优化
  - ✅ test 测试相关
  - 📦️ build 构建相关
  - 🎡 ci CI配置更改
  - 🔨 chore 其他修改（不包含以上类型）
  - ⏪️ revert 回滚之前的提交
- scope: 提交范围，包括：
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
    等
- subject: 提交信息，简要说明提交内容
- body: 提交详细说明，可选
- footer: 提交备注，可选

### 3. 提交信息示例

```
// 常规类型
feat:   ✨ 新功能
fix:    🐛 修复Bug
docs:   📝 文档更新
style:  💄 代码风格调整（不影响代码功能）
refactor:  ♻️ 代码重构（不包括 bug 修复或功能新增）
perf:   ⚡️ 性能优化
test:   ✅ 测试相关
build:  📦️ 构建系统或外部依赖更改
ci:     🎡 CI配置更改
chore:  🔨 其他改动（不修改src或测试文件）
revert: ⏪️ 回滚之前的提交

// 自定义扩展类型
ui:     UI相关更改
wip:    开发中的工作（Work In Progress）
api:    API相关更改
release:版本发布
deploy: 部署相关
config: 配置调整
i18n:   国际化
lint:   代码检查调整
types:  类型定义文件更改
```

### 4. 提交示例模板

```
feat(vscode-lowcode): ✅ 测试提交标题

- 添加了测试功能
- 修改了配置项
- 新增日志输出用于调试

BREAKING CHANGE:
- 修改了默认行为，旧版本将无法兼容
- 接口参数已调整，请检查调用方

link #I3244
```
