/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-05-07 16:02:11
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-12 16:25:30
 * @FilePath: /FullStack/lib-lint/commitlint-config-smart/.prettierrc.js
 * @Description: @smarts-isoftstone/commitlint-smarteslint config prettierrc
 */
import prettierPluginSmart from 'prettier-plugin-smart'

export default {
  plugins: [prettierPluginSmart],
  ...prettierPluginSmart.defaultOptions,
}
