'use strict'

const stylelintConfigSmart = require('..')
const assert = require('assert').strict

assert.strictEqual(stylelintConfigSmart(), 'Hello from stylelintConfigSmart')
console.info('stylelintConfigSmart tests passed')
