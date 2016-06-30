Package.describe({
  name: 'roadshr:alidayu',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
})

Npm.depends({
  'topsdk': '1.0.5'
})

Package.onUse(function (api) {
  api.versionsFrom('1.3.2.4')
  api.use('ecmascript')
  api.mainModule('alidayu.js')
  api.export('AliDaYuAPI')
  api.addFiles('alidayu.js', 'server')
})

Package.onTest(function (api) {
  api.use('ecmascript')
  api.use('tinytest')
  api.use('roadshr:alidayu')
  api.mainModule('alidayu-tests.js')
})
