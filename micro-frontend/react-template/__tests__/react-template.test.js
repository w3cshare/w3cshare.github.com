'use strict';

const reactTemplate = require('..');
const assert = require('assert').strict;

assert.strictEqual(reactTemplate(), 'Hello from reactTemplate');
console.info('reactTemplate tests passed');
