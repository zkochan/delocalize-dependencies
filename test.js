'use strict'
const test = require('tape')
const delocalizeDeps = require('./')

test('converting local deps to semver deps', t => {
  const newPkgJson = delocalizeDeps({
    pkgDir: process.cwd(),
    pkg: {
      dependencies: {
        foo: 'file:./pkgs/foo'
      },
      devDependencies: {
        foo: 'file:./pkgs/foo'
      },
      optionalDependencies: {
        foo: 'file:./pkgs/foo'
      }
    }
  })

  t.deepEqual(newPkgJson, {
    dependencies: {
      foo: '^1.2.3'
    },
    devDependencies: {
      foo: '^1.2.3'
    },
    optionalDependencies: {
      foo: '^1.2.3'
    }
  })
  t.end()
})

test('converting local deps to semver deps with exact versions', t => {
  const newPkgJson = delocalizeDeps({
    saveExact: true,
    pkgDir: process.cwd(),
    pkg: {
      dependencies: {
        foo: 'file:./pkgs/foo'
      },
      devDependencies: {
        foo: 'file:./pkgs/foo'
      },
      optionalDependencies: {
        foo: 'file:./pkgs/foo'
      }
    }
  })

  t.deepEqual(newPkgJson, {
    dependencies: {
      foo: '1.2.3'
    },
    devDependencies: {
      foo: '1.2.3'
    },
    optionalDependencies: {
      foo: '1.2.3'
    }
  })
  t.end()
})
