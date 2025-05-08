/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-05-07 16:02:11
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-08 11:48:34
 * @FilePath: /FullStack/lib-lint/prettier-plugin-smarts/.prettierrc.js
 * @Description: prettier-plugin-smarts 配置文件
 */
import prettierPluginSmart from './lib/index.js'

export default {
  plugins: [prettierPluginSmart],
  ...prettierPluginSmart.defaultOptions,
}
