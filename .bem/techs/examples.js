var PATH = require('path'),
    environ = require('bem-environ');

// path to base tech
exports.baseTechPath = require(environ.getLibPath('bem-pr', 'bem/techs/examples.js'));

// redefine `getBaseLevel` method, we need to use bandles
// levels for examples levels
exports.getBaseLevel = function() {
    return PATH.resolve(__dirname, '../levels/bundles.js');
};
