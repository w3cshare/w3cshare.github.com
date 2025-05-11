/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-05-08 17:49:23
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-11 11:05:50
 * @FilePath: /FullStack/.commitlintrc.mjs
 * @Description:
 */
import { defineConfig } from "commitlint-plugin-smart/cz-git";

console.log(
  defineConfig({
    isMongo: true,
  }),
  123,
);

/** @type {import('cz-git').UserConfig} */
export default defineConfig({
  isMongo: true,
});
