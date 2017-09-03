# expand-object [![NPM version](https://badge.fury.io/js/expand-object.svg)](http://badge.fury.io/js/expand-object)

> Expand a string into a JavaScript object using a simple notation. Use the CLI or as a node.js lib.

Also see [collapse-object][], for doing the reverse of this library.

**Examples**

```js
expand('a')
//=> {a: ''}

expand('a.b')
//=> {a: {b: ''}}

expand('a|b')
//=> {a: '', b: ''}

expand('a|b', {toBoolean: true})
//=> {a: true, b: true}

expand('a:b')
//=> {a: 'b'}

expand('a,b')
//=> ['a', 'b']
```

### Type casting

Introduced in v0.2.2, some values are cast to their JavaScript type.

**Booleans**

If the value is `"true"` or `"false"` it will be coerced to a boolean value.

```js
expand('a:true')
//=> {a: true}
expand('a:false')
//=> {a: false}
```

**Numbers**

If the value is an integer it will be coerced to a number.

```js
expand('a:1')
//=> {a: 1}
expand('a:123')
//=> {a: 123}
```

**Regex**

If the value is a simple regular expression it will be coerced to a `new RegExp()`.

```js
expand('a:/foo/')
//=> {a: /foo/}
expand('a.b.c:/^bar/gmi')
//=> {a: {b: {c: /^bar/gmi}}}
```

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i expand-object --save
```

## CLI

Usage with cli:

```sh
❯ expand-object --help

  Usage: expand-object [options] <string>

  Expand a string into a JavaScript object using a simple notation.

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
    -r, --raw      Output as raw javascript object - not stringified

  Examples:

    $ expand-object "a:b"
    $ expand-object --raw "a:b"
    $ echo "a:b" | expand-object
```

## node.js

To use as a node.js library:

```js
var expand = require('expand-object');
```

### children

> Expand dots into **child objects**:

```js
expand('a')
//=> {a: ''}
expand('a.b')
//=> {a: {b: ''}}
expand('a.b.c')
//=> {a: {b: {c: ''}}}
expand('a.b.c.d')
//=> {a: {b: {c: {d: ''}}}}
```

### siblings

expand-object supports two kinds of siblings, **general** and **adjacent**. It's much easier to understand the difference in the last example.

#### general siblings

> Use pipes (`|`) to expand **general siblings**:

```js
expand('a|b')
//=> {a: '', b: ''}
expand('a|b|c')
//=> {a: '', b: '', c: ''}
expand('a|b|c|d')
//=> {a: '', b: '', c: '', d: ''}
expand('a:b|c:d')
//=> {a: 'b', c: 'd'}
```

#### adjacent siblings

> Use plus (`+`) to expand **adjacent siblings**:

Adjacent siblings are objects that immediately follow one another.

```js
expand('a:b+c:d')
//=> {a: 'b', c: 'd'}
expand('a.b:c+d:e')
//=> {a: {b: 'c', d: 'e'}}
```

#### difference between sibling types

In the example below:

* **general**: `d` is a sibling to `a`
* **adjacent**: `d` is a sibling to `b`

```js
// general siblings
expand('a.b:c|d:e')
//=> { a: { b: 'c' }, d: 'e' }

// adjacent siblings
expand('a.b:c+d:e')
//=> { a: { b: 'c', d: 'e' } }
```

### key-value pairs

> Expand colons into **key-value pairs**:

```js
expand('a:b')
//=> {a: 'b'}
expand('a.b:c')
//=> {a: {b: 'c'}}
expand('a.b.c:d')
//=> {a: {b: {c: 'd'}}}
```

### arrays

> Expand comma separated values into **arrays**:

```js
expand('a,b')
//=> ['a', 'b']
expand('a,b,c')
//=> ['a', 'b', 'c']
expand('a:b,c,d|e:f,g,h')
//=> {a: ['b', 'c', 'd'], e: ['f', 'g', 'h']}
```

## Usage examples

Expand siblings with comma separated values into arrays:

```js
expand('a:b,c,d|e:f,g,h')
//=> {a: ['b', 'c', 'd'], e: ['f', 'g', 'h']}
```

Expand children with comma separated values into arrays:

```js
expand('a.b.c:d,e,f|g.h:i,j,k')
//=> {a: { b: {c: ['d', 'e', 'f']}}, g: {h: ['i', 'j', 'k']}}
```

Expand sibling objects into key-value pairs:

```js
expand('a:b|c:d')
//=> {a: 'b', c: 'd'}
expand('a:b|c:d|e:f')
//=> {a: 'b', c: 'd', e: 'f'}
expand('a:b|c:d|e:f|g:h')
//=> {a: 'b', c: 'd', e: 'f', g: 'h'}
```

Expand child objects into key-value pairs:

```js
expand('a.b:c')
//=> {a: {b: 'c'}}
expand('a.b.c:d')
//=> {a: {b: {c: 'd'}}}
expand('a.b.c.d:e')
//=> {a: {b: {c: {d: 'e'}}}}
```

Expand sibling and child objects into key-value pairs:

```js
expand('a:b|c:d')
//=> {a: 'b', c: 'd'}
expand('a.b.c|d.e:f')
//=> {a: {b: {c: ''}}, d: {e: 'f'}}
expand('a.b:c|d.e:f')
//=> {a: {b: 'c'}, d: {e: 'f'}}
expand('a.b.c:d|e.f.g:h')
//=> {a: {b: {c: 'd'}}, e: {f: {g: 'h'}}}
```

## Related projects

* [get-value](https://github.com/jonschlinkert/get-value): Use property paths (`  a.b.c`) to get a nested value from an object.
* [has-value](https://github.com/jonschlinkert/has-value): Returns true if a value exists, false if empty. Works with deeply nested values using… [more](https://github.com/jonschlinkert/has-value)
* [stringify-keys](https://github.com/doowb/stringify-keys): Build an array of key paths from an object.
* [set-value](https://github.com/jonschlinkert/set-value): Create nested values and any intermediaries using dot notation (`'a.b.c'`) paths.

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/expand-object/issues/new)

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2015 Jon Schlinkert
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on August 07, 2015._

[collapse-object]: https://github.com/jonschlinkert/collapse-object