/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-03-28 17:39:53
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-10 20:03:00
 * @FilePath: /FullStack/eslint.config.mjs
 * @Description: --
 */

import eslintPlugin from 'eslint-plugin-smart'

// tsup src/index.js --format=cjs,esm --dts
export default [...eslintPlugin.configs.nodejs, ...eslintPlugin.configs.json]
