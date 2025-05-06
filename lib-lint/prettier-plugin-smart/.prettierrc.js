/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-05-05 13:13:17
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-06 15:29:04
 * @FilePath: /FullStack/lib-lint/prettier-plugin-smart/.prettierrc.js
 * @Description:
 */
import prettierPluginSmart from 'prettier-plugin-smart'

export default {
  plugins: [prettierPluginSmart],
  ...prettierPluginSmart.defaultOptions,
}
