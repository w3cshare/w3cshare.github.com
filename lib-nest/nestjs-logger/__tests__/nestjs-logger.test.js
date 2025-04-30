'use strict'

const nestjsLogger = require('..')
const assert = require('assert').strict

assert.strictEqual(nestjsLogger(), 'Hello from nestjsLogger')
console.info('nestjsLogger tests passed')
