<!--
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-14 22:39:20
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-27 17:40:33
 * @FilePath: /FullStack/micro-frontend/micro-app-vue/README.md
 * @Description:
-->

# micro-app-vue

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
pnpm build

# Runs the end-to-end tests
pnpm test:e2e
# Runs the tests only on Chromium
pnpm test:e2e --project=chromium
# Runs the tests of a specific file
pnpm test:e2e tests/example.spec.ts
# Runs the tests in debug mode
pnpm test:e2e --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

### 样式检查与修复 (Stylelint)

本项目使用 Stylelint 进行样式代码检查，确保团队样式代码一致性和质量。

```sh
# 执行样式检查并自动修复
pnpm lint:style
```

## Stylelint 配置最佳实践

### 配置文件格式与位置

在使用 ESM 格式的项目中 (`"type": "module"` 在 package.json)，Stylelint 配置文件应遵循以下原则：

1. 使用 `.stylelintrc.cjs` 而非 `.stylelintrc.js`，以确保使用 CommonJS 格式
2. 使用 `module.exports` 而非 `export default` 导出配置

```js
// 正确的配置格式 (.stylelintrc.cjs)
module.exports = {
  extends: ['stylelint-config-smarts'],
  rules: {
    // 自定义规则...
  },
}
```
