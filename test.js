'use strict';
var assert = require('power-assert');
var isTravisCiBuild = require('./');

it('should ', function () {
  assert.strictEqual(isTravisCiBuild('unicorns'), 'unicorns & rainbows');
});
it('should not ', function () {
  assert.strictEqual(isTravisCiBuild('unicorns'), 'unicorns & wrong');
});
