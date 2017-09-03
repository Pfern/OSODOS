/*!
 * to-flag <https://github.com/jonschlinkert/to-flag>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var dashify = require('dashify');
var isPrimitive = require('is-primitive');
var collapse = require('collapse-object');

module.exports = function toFlag(key, val, opts) {
  if (!key || typeof key !== 'string') {
    throw new TypeError('expected a string.');
  }

  if (Array.isArray(val)) {
    val = val.filter(isPrimitive).join(',');
  } else if (typeof val === 'object') {
    val = collapse(val);
  }

  if (!isPrimitive(val)) {
    throw new TypeError('second argument should be an array, object or primitive.');
  }

  if (val === true) {
    val = null;
  }

  if (val === false && (!opts || opts && opts.invert !== false)) {
    key = 'no-' + key;
  }

  key = '--' + (key.length === 1 ? key : dashify(key));
  return key + (val ? ('=' + val) : '');
};
