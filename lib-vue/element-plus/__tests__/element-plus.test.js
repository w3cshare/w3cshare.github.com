'use strict'

const cliPrepublish = require('../lib/element-plus.cjs').default
const assert = require('assert').strict

assert.strictEqual(cliPrepublish(), 'Hello from cliPrepublish')
console.info('cliPrepublish tests passed')

test('example test', () => {
  expect(1 + 1).toBe(2)
})
