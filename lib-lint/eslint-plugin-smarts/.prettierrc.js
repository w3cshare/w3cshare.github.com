/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-05-07 16:02:11
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-07 17:14:02
 * @FilePath: /FullStack/lib-lint/eslint-plugin-smarts/.prettierrc.js
 * @Description: prettier 配置
 */

import prettierPluginSmart from 'prettier-plugin-smart'

export default {
  plugins: [prettierPluginSmart],
  ...prettierPluginSmart.defaultOptions,
}
