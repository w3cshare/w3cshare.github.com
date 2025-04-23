'use strict'

const nestjsStatic = require('..')
const assert = require('assert').strict

assert.strictEqual(nestjsStatic(), 'Hello from nestjsStatic')
console.info('nestjsStatic tests passed')
