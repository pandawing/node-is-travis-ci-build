# is-travis-ci-build

[![NPM version][npm-image]][npm-url] [![Travis-CI Status][travis-image]][travis-url] [![Appveyor Status][appveyor-image]][appveyor-url] [![Daviddm Status][daviddm-image]][daviddm-url]

> Check if your code is running on [Travis-CI build](http://docs.travis-ci.com/user/environment-variables/#Default-Environment-Variables)

[is-travis-ci-build-for-tag](https://github.com/pandawing/node-is-travis-ci-build-for-tag) is related, _only for a tag_.

This is based on [is-travis](https://github.com/sindresorhus/is-travis).


## Install

```
$ npm install --save is-travis-ci-build
```


## Usage

```js
var isTravisCiBuild = require('is-travis-ci-build');

// on your local computer
console.log(isTravisCiBuild());
//=> false

// on Travis-CI build
console.log(isTravisCiBuild());
//=> true
```


## CLI

```
$ npm install --global is-travis-ci-build
```
```
$ is-travis-ci-build --help
  Check if your code is running on Travis-CI build.

  Usage
    $ is-travis-ci-build

  Examples
    // on your local computer
    $ is-travis-ci-build
    This is not Travis-CI build. //=> exit code: 1

    // on Travis-CI build
    $ is-travis-ci-build
    (no output) //=> exit code: 0
```


## API

### isTravisCiBuild()


## Changelog

[changelog.md](./changelog.md).


## License

MIT © [sanemat](http://sane.jp)

### [is-travis](https://github.com/sindresorhus/is-travis)

MIT © [Sindre Sorhus](http://sindresorhus.com)


[travis-url]: https://travis-ci.org/pandawing/node-is-travis-ci-build
[travis-image]: https://img.shields.io/travis/pandawing/node-is-travis-ci-build/master.svg?style=flat-square&label=travis
[appveyor-url]: https://ci.appveyor.com/project/sanemat/node-is-travis-ci-build/branch/master
[appveyor-image]: https://img.shields.io/appveyor/ci/sanemat/node-is-travis-ci-build/master.svg?style=flat-square&label=appveyor
[npm-url]: https://npmjs.org/package/is-travis-ci-build
[npm-image]: https://img.shields.io/npm/v/is-travis-ci-build.svg?style=flat-square
[daviddm-url]: https://david-dm.org/pandawing/node-is-travis-ci-build
[daviddm-image]: https://img.shields.io/david/pandawing/node-is-travis-ci-build.svg?style=flat-square
