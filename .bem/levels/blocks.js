var PATH = require('path'),
    join = PATH.join,
    environ = require('bem-environ'),

    PRJ_ROOT = environ.PRJ_ROOT,
    PRJ_TECHS = join(PRJ_ROOT, '.bem/techs'),
    BEMBL_TECHS = environ.getLibPath('bem-bl', 'blocks-common/i-bem/bem/techs'),
    BEM_GEN_DOC_TECHS = environ.getLibPath('bem-gen-doc', '.bem/techs');


exports.getTechs = function() {

    return {
        'js'            : join(BEMBL_TECHS, 'js.js'),
        'css'           : 'css',
        'ie.css'        : 'ie.css',
        'ie6.css'       : 'ie6.css',
        'ie7.css'       : 'ie7.css',
        'ie8.css'       : 'ie8.css',
        'ie9.css'       : 'ie9.css',

        'bemhtml'       : join(BEMBL_TECHS, 'bemhtml.js'),

        'examples'      : '',
        'title.txt'     : join(PRJ_TECHS, 'i18n.title.txt'),
        'desc.wiki'     : join(PRJ_TECHS, 'i18n.desc.wiki'),
        'desc.md'       : join(BEM_GEN_DOC_TECHS, 'desc.md'),
        'thumb.png'     : ''
    };

};

exports.defaultTechs = ['css', 'js', 'bemhtml'];
