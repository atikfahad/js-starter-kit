// Register to babel before our tests run

require('babel-register')();

// Disable Webpack feature that Mocha doesn't understand.
require.extensions['.css'] = function () { };
