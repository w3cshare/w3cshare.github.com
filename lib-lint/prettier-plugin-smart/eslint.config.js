/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-05-06 17:09:57
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-06 23:30:05
 * @FilePath: /FullStack/lib-lint/prettier-plugin-smart/eslint.config.js
 * @Description: eslint配置
 */
import eslintPlugin from 'eslint-plugin-smart'

export default [...eslintPlugin.configs.nestjs, ...eslintPlugin.configs.json]
