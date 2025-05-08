'use strict'

const commitSmart = require('..')
const assert = require('assert').strict

assert.strictEqual(commitSmart(), 'Hello from commitSmart')
console.info('commitSmart tests passed')
