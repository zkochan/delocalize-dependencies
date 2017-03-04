#!/usr/bin/env node
const delocalizeDependencies = require('..')
const readPkg = require('read-pkg')
const writePkg = require('write-pkg')

const cwd = process.cwd()
const pkg = readPkg.sync(cwd, {normalize: false})
const newPkg = delocalizeDependencies({pkg, pkgDir: cwd})
writePkg.sync(cwd, newPkg)
