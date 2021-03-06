var environ = require('bem-environ');

exports.baseLevelPath = require.resolve('bem/lib/levels/simple');

exports.getTechs = function() {

    return require('bem').util.extend(this.__base() || {}, {
        'blocks'  : 'bem/lib/techs/blocks',
        'bundles' : 'bem/lib/techs/bundles',
        'sets'    : environ.getLibPath('bem-pr', 'bem/techs/sets.js')
    });

};
