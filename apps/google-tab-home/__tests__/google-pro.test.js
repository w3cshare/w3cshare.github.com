'use strict';

const googlePro = require('..');
const assert = require('assert').strict;

assert.strictEqual(googlePro(), 'Hello from googlePro');
console.info('googlePro tests passed');
