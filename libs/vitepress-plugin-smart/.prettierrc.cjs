/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-05-05 11:46:48
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-05-05 13:06:07
 * @FilePath: /FullStack/libs/vitepress-plugin-smart/.prettierrc.cjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  plugins: [require('prettier-plugin-smart')],
  ...require('prettier-plugin-smart').defaultOptions,
}
