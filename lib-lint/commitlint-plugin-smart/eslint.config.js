/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-05-07 16:02:11
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-09 15:06:28
 * @FilePath: /FullStack/lib-lint/eslint-plugin-smart/eslint.config.js
 * @Description: eslint配置
 */
import eslintPlugin from './lib/index.js'

export default [...eslintPlugin.configs.nodejs, ...eslintPlugin.configs.json]
