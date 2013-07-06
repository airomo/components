var PATH = require('path'),
    join = PATH.join,
    environ = require('../environ'),

    PRJ_ROOT = environ.PRJ_ROOT,
    PRJ_TECHS = join(PRJ_ROOT, '.bem/techs'),
    BEMBL_TECHS = environ.getLibPath('bem-bl', 'blocks-common/i-bem/bem/techs');

exports.getTechs = function() {

    return {
        'bemjson.js'      : join(PRJ_TECHS, 'bemjson.js'),
        'bemdecl.js'      : 'v2/bemdecl.js',
        'deps.js'         : 'v2/deps.js',
        'js'              : 'v2/js-i',
        'css'             : 'v2/css',
        'ie.css'          : 'v2/ie.css',
        'ie6.css'         : 'v2/ie6.css',
        'ie7.css'         : 'v2/ie7.css',
        'ie8.css'         : 'v2/ie8.css',
        'ie9.css'         : 'v2/ie9.css',

        'i18n'            : join(BEMBL_TECHS, 'v2/i18n.js'),
        'i18n.js'         : join(BEMBL_TECHS, 'v2/i18n.js.js'),
        'i18n.js+bemhtml' : join(BEMBL_TECHS, 'v2/i18n.js+bemhtml.js'),
        'i18n.html'       : join(BEMBL_TECHS, 'i18n.html.js'),

        'bemhtml'         : join(BEMBL_TECHS, 'v2/bemhtml.js'),
        'html'            : join(BEMBL_TECHS, 'html.js')
    };

};


// Create bundles in bemjson.js tech
exports.defaultTechs = ['bemjson.js'];

