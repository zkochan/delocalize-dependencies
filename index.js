'use strict'
const path = require('path')

module.exports = opts => {
  if (!opts) throw new TypeError('opts is required')
  if (!opts.pkg) throw new TypeError('opts.pkg is required')
  if (!opts.pkgDir) throw new TypeError('opts.pkgDir is required')

  opts.saveExact = !!opts.saveExact
  const semverDepPrefix = opts.saveExact ? '' : '^'

  const newPkg = Object.assign({}, opts.pkg)
  ;['dependencies', 'devDependencies', 'optionalDependencies']
    .forEach(depsType => toRemoteIfExist(newPkg, depsType))
  return newPkg

  function toRemoteIfExist (pkg, depsType) {
    if (pkg[depsType]) {
      pkg[depsType] = depsToRemote(pkg[depsType])
    }
  }

  function depsToRemote (deps) {
    const newDeps = {}
    Object.keys(deps).forEach(depName => {
      if (deps[depName].indexOf('file:') !== 0) {
        newDeps[depName] = deps[depName]
        return
      }
      newDeps[depName] = toSemverDep(depName, deps[depName])
    })
    return newDeps
  }

  function toSemverDep (depName, localDep) {
    const relativePath = localDep.substr(5)
    const depPkgPath = path.join(opts.pkgDir, relativePath, 'package.json')
    const depPkg = require(depPkgPath)
    if (depPkg.name !== depName) {
      throw new Error('')
    }
    return `${semverDepPrefix}${depPkg.version}`
  }
}
