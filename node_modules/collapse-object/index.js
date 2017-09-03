/*!
 * collapse-object <https://github.com/jonschlinkert/collapse-object>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var typeOf = require('kind-of');
var regexFlags = require('regex-flags');

function collapse(obj, sep, res, parent) {
  if (typeOf(obj) !== 'object') {
    throw new TypeError('expected an object.');
  }

  sep = sep || ':';
  res = res || [];

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      var val = obj[key];
      if (parent) {
        key = parent + '.' + key;
      }
      if (Array.isArray(val)) {
        val = val.map(stringify);
      }
      if (typeOf(val) === 'object') {
        collapse(val, sep, res, key);
      } else {
        var ele = key + sep + stringify(val);
        res.push(ele);
      }
    }
  }
  return res.join('|');
}

function stringify(val) {
  if (typeof val === 'string') {
    return val;
  }
  if (val === true) {
    return 'true';
  }
  if (val === false) {
    return 'false';
  }
  if (Array.isArray(val)) {
    // if array length is '1', add an empty
    // element so that expand-object can
    // re-expand the single value to an array
    var arr = val.map(stringify);
    if (arr.length === 1) {
      arr.push('');
    }
    return arr;
  }
  if (typeOf(val) === 'object') {
    return collapse(val);
  }
  if (typeOf(val) === 'regexp') {
    return '/' + val.source + '/' + regexFlags(val);
  }
  if (typeof val === 'function') {
    var name = '[function';
    name += (val.name ? (' ' + val.name) : '') + ']';
    return name;
  }
  return val.toString();
}

/**
 * Expose `collapse`
 */

module.exports = collapse;
