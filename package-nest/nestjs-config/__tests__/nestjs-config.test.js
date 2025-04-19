'use strict';

const nestjsConfig = require('..');
const assert = require('assert').strict;

assert.strictEqual(nestjsConfig(), 'Hello from nestjsConfig');
console.info('nestjsConfig tests passed');
