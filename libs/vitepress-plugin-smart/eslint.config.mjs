/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-03-28 17:39:53
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-04 21:59:41
 * @FilePath: /FullStack/eslint.config.mjs
 * @Description: --
 */
// @ts-check
import globals from 'globals'
import eslintPlugin from 'eslint-plugin-smart'

// tsup src/index.js --format=cjs,esm --dts
export default [...eslintPlugin.configs.nestjs, ...eslintPlugin.configs.json]
