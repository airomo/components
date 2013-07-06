var PATH = require('path'),

    environ = exports,

    /**
     * @const
     * @private
     */
    __root = getGlobalRoot(),

    /**
     * Consts which depend on `ENV_ROOT`
     *
     * NOTE: list of consts which could be redefined on
     * project level.
     *
     * @private
     * @type Array
     */
    __extendables = ['LIB_DIR', 'LIB_ROOT'],

    /** @type Function */
    join = PATH.join,
    /** @type Function */
    relative = PATH.relative,
    /** @type Function */
    resolve = PATH.resolve.bind(null, __dirname),
    /** @type Function */
    envresolve = PATH.resolve.bind(null, __root),

    /**
     * Path to env root
     *
     * NOTE: env is a project we build
     *
     * @type String
     * @exports ENV_ROOT
     */
    ENV_ROOT = exports.ENV_ROOT = envresolve('../'),

    /**
     * Path to the project root
     * @type String
     * @exports PRJ_ROOT
     */
    PRJ_ROOT = exports.PRJ_ROOT = resolve('../'),

    /**
     * Library folder's name
     * @type String
     * @exports LIB_DIR
     */
    LIB_DIR = exports.LIB_DIR = 'libs',

    /**
     * Path to the libraries folder root
     *
     * NOTE: path starts from `ENV_ROOT`
     * as we can't define deps in libraries.
     *
     * @type String
     * @exports LIB_ROOT
     */
    LIB_ROOT = exports.LIB_ROOT = join(ENV_ROOT, LIB_DIR),

    /**
     * Folder with .bem-configs
     * @type String
     * @exports CONF_DIR
     */
    CONF_DIR = exports.CONF_DIR = 'configs',

    /**
     * Path to .bem-configs' folder
     * @type String
     * @exports CONF_ROOT
     */
    CONF_ROOT = exports.CONF_ROOT = resolve(CONF_DIR),

    /**
     * Current configuration
     * @exports getConf
     * @returns {Object}
     */
    getConf = exports.getConf = function() {
        return require(join(environ.CONF_ROOT, 'current'));
    },

    /**
     * Absolute path to `lib` library
     * @exports getLibPath
     * @param {String} lib id
     * @param {String} [...path]
     * @returns {String}
     */
    getLibPath = exports.getLibPath = function() {
        var args = [].slice.call(arguments, 0);
        return join.apply(null, [environ.LIB_ROOT].concat(args));
    },

    /**
     * Path to `lib` library from project root
     * @exports getLibRelPath
     * @param {String} lib id
     * @param {String} [...path]
     * @returns {String}
     */
    getLibRelPath = exports.getLibRelPath = function() {
        return relative(environ.PRJ_ROOT, getLibPath.apply(null, arguments));
    };


if(__root !== __dirname) {
    try {
        // Redefine consts `__extendables` with `ENV_ROOT`
        var rootEnviron = require(join(__root, 'environ'));

        __extendables.reduce(function(exports, name) {
            var v = rootEnviron[name];
            typeof v === 'undefined' || (exports[name] = v);
            return exports;
        }, module.exports);

        // Set new value for `__root_level_dir`
        process.env.__root_level_dir = __root;
    } catch(e) {
        // do something useful
    }
}

function getGlobalRoot() {
    var root = process.env.__root_level_dir;
    return root || (root = __dirname);
}