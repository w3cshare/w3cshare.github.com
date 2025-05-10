/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-05-07 16:02:11
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-10 20:21:15
 * @FilePath: /FullStack/libs/vitepress-plugin-smart/.prettierrc.js
 * @Description: prettier配置文件
 */
import prettierPluginSmart from 'prettier-plugin-smart'

export default {
  plugins: [prettierPluginSmart],
  ...prettierPluginSmart.defaultOptions,
}
