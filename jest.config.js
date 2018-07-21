module.exports = {
  // stop tests after first failure
  bail: false,

  // report each test
  verbose: false,

  // enable coverage
  collectCoverage: false,

  // coverage output dir
  coverageDirectory: './coverage/',

  // ignore node modules
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],

  // If the file path matches any of the patterns, coverage information will be skipped.
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],

  // Test file pattern
  testRegex: `(${process.cwd()}.*)\\.test\\.(js|jsx)?$`,
};
