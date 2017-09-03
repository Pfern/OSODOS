/*!
 * regex-flags <https://github.com/jonschlinkert/regex-flags>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var typeOf = require('kind-of');

var flags = {
  global: 'g',
  ignoreCase: 'i',
  multiline: 'm',
  unicode: 'u',
  sticky: 'y'
};

function regexFlags(regex) {
  if (typeOf(regex) !== 'regexp') {
    throw new TypeError('expected a regular expression.');
  }
  var res = '';
  for (var flag in flags) {
    if (flags.hasOwnProperty(flag) && regex[flag]) {
      res += flags[flag];
    }
  }
  return res;
}

/**
 * Expose `regexFlags`
 */

module.exports = regexFlags;
