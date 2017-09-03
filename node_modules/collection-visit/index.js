/*!
 * collection-visit <https://github.com/jonschlinkert/collection-visit>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var mapVisit = require('map-visit');
var visit = require('object-visit');

function collectionVisit(collection, method, val) {
  var result;
  if (typeof val === 'string' && (method in collection)) {
    result = collection[method](val);
  } else if (Array.isArray(val)) {
    result = mapVisit(collection, method, val);
  } else {
    result = visit(collection, method, val);
  }

  if (typeof result !== 'undefined') {
    return result;
  }
  return collection;
}

/**
 * Expose `collectionVisit`
 */

module.exports = collectionVisit;
