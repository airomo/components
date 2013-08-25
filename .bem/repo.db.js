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
        url      : 'git://github.com/bem/bem-bl.git'
    },
    'bem-json'   : {
        type     : 'git',
        url      : 'git://github.com/delfrrr/bem-json.git'
    },
    'bem-pr' : {
        type     : 'git',
        url      : 'git://github.com/narqo/bem-pr.git'
    },
    'bem-gen-doc' : {
        type      : 'git',
        url       : 'git://github.com/bem/bem-gen-doc.git'
    },
    'bem-components' : {
        type     : 'git',
        url      : 'git://github.com/bem/bem-components.git'
    }

};
