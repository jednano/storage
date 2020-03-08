# @jedmao/storage

[![GitHub Actions](https://github.com/jedmao/storage/workflows/Node%20CI/badge.svg?event=push)](https://github.com/jedmao/storage/actions)
[![NPM version](http://img.shields.io/npm/v/@jedmao/storage.svg?style=flat)](https://www.npmjs.org/package/@jedmao/storage)
[![npm license](http://img.shields.io/npm/l/@jedmao/storage.svg?style=flat-square)](https://www.npmjs.org/package/@jedmao/storage)
[![codecov](https://codecov.io/gh/jedmao/storage/branch/master/graph/badge.svg)](https://codecov.io/gh/jedmao/storage)
[![BundlePhobia Minified](https://badgen.net/bundlephobia/min/@jedmao/storage?label=min)](https://bundlephobia.com/result?p=@jedmao/storage)
[![BundlePhobia Minified + gzip](https://badgen.net/bundlephobia/minzip/@jedmao/storage?label=min%2Bgzip)](https://bundlephobia.com/result?p=@jedmao/storage)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Unicorn Approved](https://img.shields.io/badge/unicorn-approved-ff69b4.svg)](https://twitter.com/sindresorhus/status/457989012528316416?ref_src=twsrc%5Etfw&ref_url=https%3A%2F%2Fwww.quora.com%2FWhat-does-the-unicorn-approved-shield-mean-in-GitHub)

[![npm](https://nodei.co/npm/@jedmao/storage.svg?downloads=true)](https://nodei.co/npm/@jedmao/storage/)

A `Storage` class that implements the [Storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage) interface of the [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API).

This class comes out-of-the-box with [TypeScript][] type annotations and [TSDoc](https://github.com/Microsoft/tsdoc#tsdoc) comments.

## Installation

```
$ npm install [--save[-dev]] @jedmao/storage
```

## Usage

```ts
import { Storage } from '@jedmao/storage'

const data = { bar: 42 }
const storage = new Storage()

storage.setItem('foo', data)
storage.getItem('foo') // "[object Object]"
storage.setItem('foo', JSON.stringify(data))
storage.getItem('foo') // "{"bar":42}"

storage.setItem('baz', 42)
storage.getItem('baz') // '42'
storage.key(1) // 'baz'
storage.length // 2

storage.removeItem('foo')
storage.length // 1

storage.clear()
storage.length // 0
```

[typescript]: http://www.typescriptlang.org/
