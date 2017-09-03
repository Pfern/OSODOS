'use strict';

var toFlag = require('to-flag');

module.exports = function(obj, keys) {
  if (typeof obj !== 'object') {
    throw new TypeError('to-flags expects an object.');
  }

  keys = keys || Object.keys(obj);
  return keys.map(function (key) {
    return toFlag(key, obj[key]);
  });
};
