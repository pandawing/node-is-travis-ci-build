'use strict';
module.exports = function () {
  return process.env.hasOwnProperty('TRAVIS') &&
    process.env.hasOwnProperty('CI');
};
