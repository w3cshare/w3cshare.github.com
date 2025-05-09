'use strict'

const commitlintSmart = require('..')
const assert = require('assert').strict

assert.strictEqual(commitlintSmart(), 'Hello from commitlintSmart')
console.info('commitlintSmart tests passed')
