<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# deepEqual

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test for deep equality between two values.



<section class="usage">

## Usage

To use in Observable,

```javascript
deepEqual = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-deep-equal@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var deepEqual = require( 'path/to/vendor/umd/assert-deep-equal/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/assert-deep-equal@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.deepEqual;
})();
</script>
```

#### deepEqual( a, b )

Returns a `boolean` indicating if `a` is deep equal to `b`.

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

```javascript
var bool = deepEqual( [ 1, 2, 3 ], [ 1, 2, 3 ] );
// returns true

bool = deepEqual( [ 1, 2, 3 ], [ 1, 2, '3' ] );
// returns false

bool = deepEqual( { 'a': 2 }, { 'a': [ 2 ] } );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function uses strict equality checks (`===`) and does not perform any type coercion.
-   When given two objects, only enumerable own properties are recursively compared.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error", object-curly-newline: "off", object-curly-spacing: "off" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/assert-deep-equal@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var a = [ true, false, true ];
var b = [ true, false, true ];
var bool = deepEqual( a, b );
// returns true

b.pop();
bool = deepEqual( a, b );
// returns false

a = { 'a': { 'b': { 'c': 'd' } } };
b = { 'a': { 'b': { 'c': 'd' } } };
bool = deepEqual( a, b );
// returns true

b.a.b.c = null;
bool = deepEqual( a, b );
// returns false

a = { 'a': [ { 'b': 0 }, { 'c': 1 } ] };
b = { 'a': [ { 'b': 0 }, { 'c': 1 } ] };
bool = deepEqual( a, b );
// returns true

b = { 'a': [ { 'b': [ 0 ] }, { 'c': '1' } ] };
bool = deepEqual( a, b );
// returns false

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert-is-strict-equal`][@stdlib/assert/is-strict-equal]</span><span class="delimiter">: </span><span class="description">test if two arguments are strictly equal.</span>
-   <span class="package-name">[`@stdlib/assert-is-same-value`][@stdlib/assert/is-same-value]</span><span class="delimiter">: </span><span class="description">test if two arguments are the same value.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-deep-equal.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-deep-equal

[test-image]: https://github.com/stdlib-js/assert-deep-equal/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-deep-equal/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-deep-equal/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-deep-equal?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-deep-equal.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-deep-equal/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-deep-equal/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-deep-equal/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-deep-equal/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-deep-equal/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-deep-equal/main/LICENSE

<!-- <related-links> -->

[@stdlib/assert/is-strict-equal]: https://github.com/stdlib-js/assert-is-strict-equal/tree/umd

[@stdlib/assert/is-same-value]: https://github.com/stdlib-js/assert-is-same-value/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
