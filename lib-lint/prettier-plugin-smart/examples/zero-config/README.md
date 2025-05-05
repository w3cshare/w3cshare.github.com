# 零配置使用示例

这个示例展示了如何以零配置的方式使用 prettier-plugin-smart 插件。

## 使用步骤

1. 安装依赖
   ```bash
   npm install --save-dev prettier prettier-plugin-smart
   # 或者
   pnpm add -D prettier prettier-plugin-smart
   ```

2. 在 package.json 中添加 format 脚本
   ```json
   {
     "scripts": {
       "format": "prettier --write \"src/**/*.{ts,js}\" --plugin=prettier-plugin-smart"
     }
   }
   ```

3. 运行格式化命令
   ```bash
   npm run format
   # 或者
   pnpm format
   ```

## 无需配置文件

注意这个示例中没有任何 `.prettierrc` 或 `.prettierrc.js` 配置文件，插件会自动应用所有默认规则，包括：

- 不使用分号 (`semi: false`)
- 使用单引号 (`singleQuote: true`)
- 使用尾随逗号 (`trailingComma: 'all'`)
- 其他格式化规则

## 测试效果

可以查看 `src/test.ts` 文件，运行 `npm run format` 后，代码将被自动格式化为符合规则的格式。 