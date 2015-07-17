'use strict';

var assert = require('power-assert');
var isTravisCiBuild = require('./');

it('should not travis-ci build', function () {
  delete process.env.TRAVIS;
  delete process.env.CI;
  assert.equal(isTravisCiBuild(), false);
});

it('does not set travis-ci build', function () {
  process.env.TRAVIS = '';
  process.env.CI = '';
  assert.equal(isTravisCiBuild(), false);
});

it('string false is false', function () {
  process.env.TRAVIS = 'false';
  process.env.CI = 'False';
  assert.equal(isTravisCiBuild(), false);
});

it('should travis-ci build', function () {
  process.env.TRAVIS = 1;
  process.env.CI = 1;
  assert.equal(isTravisCiBuild(), true);
});
