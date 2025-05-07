/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-05-07 16:02:11
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-07 17:06:40
 * @FilePath: /FullStack/lib-lint/prettier-plugin-smarts/eslint.config.js
 * @Description: eslint配置
 */
import eslintPlugin from 'eslint-plugin-smart'

export default [...eslintPlugin.configs.typescript, ...eslintPlugin.configs.json]
