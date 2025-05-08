/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-05-06 23:08:41
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-08 14:30:07
 * @FilePath: /FullStack/libs/tsconfig-base-smart/eslint.config.mjs
 * @Description: eslint配置
 */
import eslintPlugin from 'eslint-plugin-smart'

export default [...eslintPlugin.configs.nodejs, ...eslintPlugin.configs.json]
