/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-05-07 00:06:42
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-07 00:14:09
 * @FilePath: /FullStack/lib-lint/eslint-plugin-smart/.prettierrc.js
 * @Description: 默认配置
 */
import prettierPluginSmart from 'prettier-plugin-smart'

export default {
  plugins: [prettierPluginSmart],
  ...prettierPluginSmart.defaultOptions,
}
