'use strict';
var boolifyString = require('boolify-string');
module.exports = function () {
  return process.env.hasOwnProperty('TRAVIS') &&
    boolifyString(process.env.TRAVIS) &&
    process.env.hasOwnProperty('CI') &&
    boolifyString(process.env.CI);
};
