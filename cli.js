#!/usr/bin/env node
/*eslint no-console:0*/
'use strict';
var meow = require('meow');
var isTravisCiBuild = require('./');

var cli = meow({
  help: [
    'Usage',
    '  $ is-travis-ci-build [input]',
    '',
    'Examples',
    '  $ is-travis-ci-build',
    '  unicorns & rainbows',
    '',
    '  $ is-travis-ci-build ponies',
    '  ponies & rainbows',
    '',
    'Options',
    '  --foo  Lorem ipsum. Default: false'
  ]
});

console.log(isTravisCiBuild(cli.input[0] || 'unicorns'));
