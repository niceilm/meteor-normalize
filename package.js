Package.describe({
  name: 'flynn:normalize',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'normalize values for limit or date',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/niceilm/meteor-normalize',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('check');
  api.use('momentjs:moment@2.11.0');
  api.addFiles('normalize.js');
  api.addFiles('normalize-server.js', 'server');
  api.export('Normalize');
});

Package.onTest(function(api) {
  api.use('sanjo:jasmine@0.20.2');
  api.use('velocity:helpers@0.5.0');
  api.use('flynn:normalize');
  api.addFiles('normalize-tests.js', 'server');
});
