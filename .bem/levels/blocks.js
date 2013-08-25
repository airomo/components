var PATH = require('path'),
    join = PATH.join,
    environ = require('bem-environ'),

    PRJ_ROOT = environ.PRJ_ROOT,
    PRJ_TECHS = join(PRJ_ROOT, '.bem/techs'),
    BEMBL_TECHS = environ.getLibPath('bem-bl', 'blocks-common/i-bem/bem/techs'),
    BEM_GEN_DOC_TECHS = environ.getLibPath('bem-gen-doc', '.bem/techs');


exports.getTechs = function() {

    return {
        'js'            : join(BEMBL_TECHS, 'v2/js.js'),
        'css'           : 'v2/css',
        'ie.css'        : 'v2/ie.css',
        'ie6.css'       : 'v2/ie6.css',
        'ie7.css'       : 'v2/ie7.css',
        'ie8.css'       : 'v2/ie8.css',
        'ie9.css'       : 'v2/ie9.css',

        'bemhtml'       : join(BEMBL_TECHS, 'v2/bemhtml.js'),

        'examples'      : 'bem/lib/tech/v2',
        'title.txt'     : join(PRJ_TECHS, 'i18n.title.txt'),
        'desc.wiki'     : join(PRJ_TECHS, 'i18n.desc.wiki'),
        'desc.md'       : join(BEM_GEN_DOC_TECHS, 'desc.md'),
        'thumb.png'     : 'bem/lib/tech/v2'
    };

};

exports.defaultTechs = ['css', 'js', 'bemhtml'];
