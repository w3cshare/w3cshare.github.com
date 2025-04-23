/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-23 10:37:11
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-23 13:55:35
 * @FilePath: /FullStack/micro-service/grpc-gateway/.prettierrc.js
 * @Description:
 */
/**
 * @type {import("prettier").Config}
 */
const config = {
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  tabWidth: 2,
  semi: true,
  plugins: ['prettier-plugin-smarts'],

  // prettier-plugin-smarts 特有配置
  sortJsonKeys: true,
  importOrder: '^react,^@/,^[./]',
};

module.exports = config;
