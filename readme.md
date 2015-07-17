# is-travis-ci-build

[![NPM version][npm-image]][npm-url] [![Travis-CI Status][travis-image]][travis-url] [![Appveyor Status][appveyor-image]][appveyor-url] [![Daviddm Status][daviddm-image]][daviddm-url]

> My spectacular module


## Install

```
$ npm install --save is-travis-ci-build
```


## Usage

```js
var isTravisCiBuild = require('is-travis-ci-build');

isTravisCiBuild('unicorns');
//=> unicorns & rainbows
```


## CLI

```
$ npm install --global is-travis-ci-build
```
```
$ is-travis-ci-build --help

  Usage
    is-travis-ci-build [input]

  Example
    is-travis-ci-build
    unicorns & rainbows

    is-travis-ci-build ponies
    ponies & rainbows

  Options
    --foo  Lorem ipsum. Default: false
```


## API

### isTravisCiBuild(input, [options])

#### input

*Required*  
Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.

## Changelog

[changelog.md](./changelog.md).

## License

MIT © [sanemat](http://sane.jp)

[travis-url]: https://travis-ci.org/sanemat/is-travis-ci-build
[travis-image]: https://img.shields.io/travis/sanemat/is-travis-ci-build/master.svg?style=flat-square&label=travis
[appveyor-url]: https://ci.appveyor.com/project/sanemat/is-travis-ci-build/branch/master
[appveyor-image]: https://img.shields.io/appveyor/ci/sanemat/is-travis-ci-build/master.svg?style=flat-square&label=appveyor
[npm-url]: https://npmjs.org/package/is-travis-ci-build
[npm-image]: https://img.shields.io/npm/v/is-travis-ci-build.svg?style=flat-square
[daviddm-url]: https://david-dm.org/sanemat/is-travis-ci-build
[daviddm-image]: https://img.shields.io/david/sanemat/is-travis-ci-build.svg?style=flat-square
