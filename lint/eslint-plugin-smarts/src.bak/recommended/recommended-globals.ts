/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2023-10-22 22:21:14
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-10 10:55:09
 * @FilePath: /FullStack/lint/eslint-plugin-smarts/src/rules/recommended-globals.ts
 * @Description: eslint-plugin-smarts globals配置 to eslint-plugin-smarts
 */
export default {
  uni: 'writable',

  process: 'writeable',

  'window.__POWERED_BY_QIANKUN__': 'writeable',
  'window.__webpack_public_path__': 'writeable',
  'window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__': 'writeable',

  __POWERED_BY_QIANKUN__: 'writeable',
  __webpack_public_path__: 'writeable',
  __INJECTED_PUBLIC_PATH_BY_QIANKUN__: 'writeable',
}
