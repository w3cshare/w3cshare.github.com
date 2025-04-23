/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-03-28 17:39:53
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-23 15:45:34
 * @FilePath: /FullStack/eslint.config.mjs
 * @Description: --
 */
// @ts-check
import globals from "globals";
import eslintPlugin from "eslint-plugin-smart";

// const obj = {
//   ...globals.node,
//   ...globals.jest,
//   ...globals.browser,
// };
// console.log("🚀 ~ file: eslint.config.mjs:15 ~ obj:", obj);

// tsup src/index.js --format=cjs,esm --dts
export default [
  ...eslintPlugin.configs.nestjs,
  {
    // ignores: [
    //   "_docker-compose/**",
    //   "_public/**",
    //   "_scripts/**",
    //   "_templates/**",
    //   ".cursor/**",
    //   ".github/**",
    //   ".gitee/**",
    //   ".nx/**",
    //   ".vitepress/**",
    //   ".vscode/**",
    //   "docs/**",
    //   "**/dify/**",
    //   "**/.eslintrc.js",
    //   "**/eslint.config.mjs",
    //   "**/dist/**",
    //   "**/lib/**",
    //   "**/test/**",
    //   "**/__tests__/**",
    //   "**/node_modules/**",
    //   "**/coverage/**",
    //   "**/.eslintcache/**",
    //   // 拓展
    //   "app",
    //   "apps/ismart-swbn-converged-web/**",
    // ],
    // languageOptions: {
    //   globals: {
    //     ...globals.node,
    //     ...globals.jest,
    //     ...globals.browser,
    //   },
    //   ecmaVersion: "latest",
    //   sourceType: "module",
    //   parserOptions: {
    //     projectService: true,
    //     // @ts-ignore
    //     tsconfigRootDir: import.meta.dirname,
    //   },
    // },
  },
];
