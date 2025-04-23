/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2023-10-22 22:21:14
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-10 10:45:25
 * @FilePath: /FullStack/lint/eslint-plugin-smarts/src/rules/recommended-rules-gpt.ts
 * @Description: eslint推荐规则 for gpt
 */
export default {
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: true,
    },
  ],

  /*
   * npm install eslint-plugin-max-file-length --save-dev
   * 'max-file-length': [2000, 'absolute'],
   */

  /*
   * npm install eslint-plugin-max-len --save-dev
   * 'max-len': [2000, 'absolute'],
   */
}
