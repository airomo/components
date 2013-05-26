var PATH = require('path'),
    GLOBAL_ROOT_NAME = '__root_level_dir';

// XXX: `__root_level_dir` should be set up just once
// FIXME: try not to use `env`
process.env[GLOBAL_ROOT_NAME] ||
    (process.env[GLOBAL_ROOT_NAME] = PATH.dirname(__dirname));


var environ = require('../environ'),
    registry = require('bem/lib/nodesregistry');

registry.decl('Arch', {

    /**
     * Set list of libraries
     * @param {Array} libs Array of ids for libraries
     * @return {Object}
     */
    useLibraries : function(libs) {

        // list of known libraries
        var repo = environ.getConf().libraries,
            getLibRelPath = environ.getLibRelPath;

        return libs.reduce(function(enabled, lib) {

            if(repo[lib] == null)
                throw new Error('Library ' + lib + ' is not registered!');

            enabled[getLibRelPath(lib)] = repo[lib];
            return enabled;

        }, {});

    },

    /**
     * @returns {Object}
     * @override
     */
    getLibraries : function() {

        var libs = this.libraries;
        return Array.isArray(libs)?
                this.useLibraries(libs) : libs;

    },

    /**
     * @returns {Array}
     * @override
     */
    createBlockLibrariesNodes : function() {

        var libs = this.__base.apply(this, arguments),
            libsNodeName = environ.LIB_DIR;

        if(libsNodeName && libsNodeName !== '.') {
            var node = new (registry.getNodeClass('Node'))(libsNodeName);
            this.arch.setNode(node, null, libs);
        }

        return libs;

    }

});