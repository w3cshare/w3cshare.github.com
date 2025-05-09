/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-05-08 20:34:27
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-10 00:05:25
 * @FilePath: /FullStack/lib-lint/commitlint-plugin-smart/eslint.config.js
 * @Description: eslint配置
 */
import eslintPlugin from 'eslint-plugin-smart'

export default [...eslintPlugin.configs.nodejs, ...eslintPlugin.configs.json]
