/**
 * XXX: UNDER DEVELOPMENT
 *
 * Library repo
 *
 * Structure
 *
 *   { id : { lib-description }, ... }
 *
 * Description
 * - install library into `LIB_ROOT/id` (.bem/environ.js)
 * - libs credentioals (type, url, ...) may be redefined
 *   in env config, .bem/configs/current
 */

module.exports = {

    'bem-bl' : {
        type     : 'git',
        url      : 'git://github.com/bem/bem-bl.git',
        branch   : '0.3'
    },
    'bem-json' : {
        type     : 'git',
        url      : 'git://github.com/delfrrr/bem-json.git'
    },
    'bem-pr' : {
        type     : 'git',
        url      : 'git://github.com/bem/bem-pr.git',
        treeish  : 'dev'
    },
    'bem-gen-doc' : {
        type      : 'git',
        url       : 'git://github.com/tadatuta/bem-gen-doc.git',
        branch    : 'eng'
    },
    'bem-components' : {
        type     : 'git',
        url      : 'git://github.com/bem/bem-components.git',
        branch   : 'v1'
    }

};
