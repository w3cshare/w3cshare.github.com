'use strict';

const commitSmarts = require('..');
const assert = require('assert').strict;

assert.strictEqual(commitSmarts(), 'Hello from commitSmarts');
console.info('commitSmarts tests passed');
