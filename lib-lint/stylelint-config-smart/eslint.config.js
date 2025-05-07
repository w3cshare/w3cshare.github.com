/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-05-07 16:02:11
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-07 16:54:59
 * @FilePath: /FullStack/lib-lint/stylelint-config-smart/eslint.config.mjs
 * @Description: eslint配置
 */
import eslintPlugin from 'eslint-plugin-smart'

export default [...eslintPlugin.configs.typescript, ...eslintPlugin.configs.json]
