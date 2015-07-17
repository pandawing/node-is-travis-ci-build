#!/usr/bin/env node
/*eslint no-console:0*/
'use strict';
var meow = require('meow');
var isTravisCiBuild = require('./');

var cli = meow({
  help: [
    'Usage',
    '  $ is-travis-ci-build',
    '',
    'Examples',
    '  // on your local computer',
    '  $ is-travis-ci-build',
    '  This is not Travis-CI build. //=> exit code: 1',
    '',
    '  // on Travis-CI build',
    '  $ is-travis-ci-build',
    '  (no output) //=> exit code: 0'
  ]
});

if (!isTravisCiBuild()) {
  console.error('This is not Travis-CI build.');
  process.exit(1);
}
