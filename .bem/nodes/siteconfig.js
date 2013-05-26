var PATH = require('path'),
    registry = require('bem/lib/nodesregistry'),
    environ = require('../environ');

/**
 * Build site pages
 */
registry.decl('MachineBundleNode', {});


/**
 * Build examples
 */
registry.decl('MachineExampleNode', {

    getTechs: function() {

        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'css',
            'ie.css',
            // 'ie6.css',
            // 'ie7.css',
            'ie8.css',
            'ie9.css',
            'js',
            'bemhtml',
            'html'
        ];
    },

    getLevels : function() {

        return ([
                'bem-bl/blocks-common',
                'bem-bl/blocks-desktop',
                'bem-controls/common.blocks',
                'bem-controls/desktop.blocks'
             ])
            .map(PATH.join.bind(null, environ.LIB_ROOT))
            .concat([
                    'common.blocks',
                    'desktop.blocks'
                    // ,
                    // 'touch.blocks',
                    // 'touch-pad.blocks'
                ].map(PATH.resolve.bind(null, this.root)))
            .concat([PATH.resolve(this.root, PATH.dirname(this.getNodePrefix()), 'blocks')]);

    }

});