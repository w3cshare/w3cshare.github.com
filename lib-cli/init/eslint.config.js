/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-05-07 16:02:11
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-08 15:14:12
 * @FilePath: /FullStack/lib-lint/commitlint-smart/eslint.config.mjs
 * @Description:@smarts-isoftstone/commitlint-smarteslint config
 */
import eslintPlugin from 'eslint-plugin-smart'

export default [...eslintPlugin.configs.nodejs, ...eslintPlugin.configs.json]
