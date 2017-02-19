# delocalize-dependencies

> Convert local dependencies to semver dependencies.

<!--@shields('npm', 'travis')-->
[![npm version](https://img.shields.io/npm/v/delocalize-dependencies.svg)](https://www.npmjs.com/package/delocalize-dependencies) [![Build Status](https://img.shields.io/travis/zkochan/delocalize-dependencies/master.svg)](https://travis-ci.org/zkochan/delocalize-dependencies)
<!--/@-->

## Installation

```sh
npm i -S delocalize-dependencies
```

## CLI Usage

In the folder with the `package.json` file, run:

```
delocalize-dependencies
```

### API Usage

```js
const delocalizeDeps = require('delocalize-dependencies')

delocalizeDeps({pkg, pkgDir})
```

## License

[MIT](./LICENSE) © Zoltan Kochan
