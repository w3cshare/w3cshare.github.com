'use strict'

const vueTemplate = require('..')
const assert = require('assert').strict

assert.strictEqual(vueTemplate(), 'Hello from vueTemplate')
console.info('vueTemplate tests passed')
