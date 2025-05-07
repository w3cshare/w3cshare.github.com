/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-05-07 16:02:11
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-07 17:06:06
 * @FilePath: /FullStack/lib-lint/prettier-plugin-smarts/.prettierrc.js
 * @Description: prettier-plugin-smarts 配置文件
 */
import prettierPluginSmart from 'prettier-plugin-smart'

export default {
  plugins: [prettierPluginSmart],
  ...prettierPluginSmart.defaultOptions,
}
