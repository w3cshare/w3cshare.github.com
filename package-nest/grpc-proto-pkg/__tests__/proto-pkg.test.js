'use strict';

const protoPkg = require('..');
const assert = require('assert').strict;

assert.strictEqual(protoPkg(), 'Hello from protoPkg');
console.info('protoPkg tests passed');
