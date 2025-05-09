'use strict';

const commitlintPluginSmart = require('..');
const assert = require('assert').strict;

assert.strictEqual(commitlintPluginSmart(), 'Hello from commitlintPluginSmart');
console.info('commitlintPluginSmart tests passed');
