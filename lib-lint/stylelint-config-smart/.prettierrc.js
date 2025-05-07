/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-05-07 16:02:11
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-07 17:35:13
 * @FilePath: /FullStack/lib-lint/stylelint-config-smart/.prettierrc.js
 * @Description: prettier配置
 */
import prettierPluginSmart from 'prettier-plugin-smart'

export default {
  plugins: [prettierPluginSmart],
  ...prettierPluginSmart.defaultOptions,
}
