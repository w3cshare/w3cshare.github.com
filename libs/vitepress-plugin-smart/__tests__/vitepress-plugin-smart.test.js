'use strict';

const vitepressPluginSmart = require('..');
const assert = require('assert').strict;

assert.strictEqual(vitepressPluginSmart(), 'Hello from vitepressPluginSmart');
console.info('vitepressPluginSmart tests passed');
