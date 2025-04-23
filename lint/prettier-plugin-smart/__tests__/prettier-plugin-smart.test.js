/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2025-04-23 20:44:00
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2025-04-23 20:47:50
 * @FilePath: /FullStack/lint/prettier-plugin-smart/__tests__/prettier-plugin-smart.test.js
 * @Description: --
 */
'use strict'

const prettierPluginSmart = require('..')
const assert = require('assert').strict

assert.strictEqual(prettierPluginSmart(), 'Hello from prettierPluginSmart')
console.info('prettierPluginSmart tests passed')
