'use strict';

const stylelintConfigSmarts = require('..');
const assert = require('assert').strict;

assert.strictEqual(stylelintConfigSmarts(), 'Hello from stylelintConfigSmarts');
console.info('stylelintConfigSmarts tests passed');
