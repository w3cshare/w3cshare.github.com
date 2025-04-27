/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-27 16:48:41
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-27 16:51:43
 * @FilePath: /FullStack/micro-frontend/micro-app-vue/.stylelintrc.js
 * @Description: --
 */

/** @type {import('stylelint').Config} */
module.exports = {
  extends: ['stylelint-config-smarts'],
  rules: {
    // 禁用所有 bem-newbie 相关规则，因为插件版本兼容问题
    'bem-newbie/absolute-has-two-dimensions': null,
    'bem-newbie/animation-explicit-timing-function': null,
    'bem-newbie/class-name-equal-to-file-name': null,
    'bem-newbie/display-deny-inline': null,
    'bem-newbie/duplicated-property-value-in-media': null,
    'bem-newbie/duplicated-property-value-in-modifier': null,
    'bem-newbie/font-face-declaration-in-fonts-file-only': null,
    'bem-newbie/font-face-duplicate-src': null,
    'bem-newbie/font-weight-file-name': null,
    'bem-newbie/import-bem-path': null,
    'bem-newbie/import-fonts': null,
    'bem-newbie/import-normalize': null
  }
}
