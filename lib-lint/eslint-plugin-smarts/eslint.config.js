/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-05-07 16:02:11
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-08 11:49:26
 * @FilePath: /FullStack/lib-lint/eslint-plugin-smarts/eslint.config.js
 * @Description: eslint配置
 */
import eslintPlugin from './lib/index.js'

export default [...eslintPlugin.configs.typescript, ...eslintPlugin.configs.json]
