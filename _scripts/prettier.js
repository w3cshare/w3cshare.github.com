/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-05-05 13:04:43
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-05 13:08:09
 * @FilePath: /FullStack/_scripts/prettier.js
 * @Description:
 */
const fs = require("fs");
const { globSync } = require("glob");
const path = require("path");

const prettierrc_cjs_template = `
module.exports = {
  plugins: [require('prettier-plugin-smart')],
  ...require('prettier-plugin-smart').defaultOptions,
}
`;
