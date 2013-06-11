/*global MAKE:true */

"use strict";

require('./nodes/arch');

//process.env.YENV = 'production';

var BEM = require('bem'),
    LOGGER = BEM.require('./logger'),
    PATH = require('path');

try {
    var setsNodes = require('../bem-pr/bem/nodes/sets'),
        siteNodes = require('../bem-gen-doc/.bem/nodes/site');
} catch (e) {
    if (e.code !== 'MODULE_NOT_FOUND')
        throw e;
    setsNodes = false;
    siteNodes = false;
}

MAKE.decl('Arch', {

    blocksLevelsRegexp: /^.+?\.blocks/,

    bundlesLevelsRegexp: /^.+?\.bundles$/,

    libraries: [
        'bem-json',
        'bem-pr',
        'bem-gen-doc',
        'bem-bl',
        'bem-controls'
    ],

    createCustomNodes: function(common, libs, blocks) {

        if(setsNodes === false || siteNodes === false) {
            LOGGER.warn('"bem-pr" or "bem-gen-doc" is not installed');
            return;
        }

        // Site build
        new siteNodes.SiteNode({
            id : 'site',
            root : this.root,
            arch : this.arch,
            levels : ['common.blocks']
        })
        .alterArch(null, libs);

        // Exmaples build
        return setsNodes.SetsNode
            .create({ root : this.root, arch : this.arch })
            .alterArch(null, libs);

    }

});

process.env.BEM_I18N_LANGS = 'en ru';

MAKE.decl('BundleNode', {

    getTechs: function() {
        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'i18n',
            'bemhtml',
            'i18n.js+bemhtml',
            'css',
            'ie.css',
            // 'ie6.css',
            // 'ie7.css',
            'ie8.css',
            'ie9.css',
            'i18n.html'
        ];
    },

    'create-i18n.js-optimizer-node': function(tech, sourceNode, bundleNode) {
        return this.createBorschikOptimizerNode('js', sourceNode, bundleNode);
    },

    'create-i18n.js+bemhtml-optimizer-node': function(tech, sourceNode, bundleNode) {
        return this['create-js-optimizer-node'].apply(this, arguments);
    },

    'create-i18n.html-node': function(tech, bundleNode, magicNode) {
        return this['create-html-node'].apply(this, arguments);
    }
});


MAKE.decl('SetsNode', {

    getSets: function() {

        return {
            'desktop'     : ['common.blocks', 'desktop.blocks']
            // 'touch-pad'   : ['common.blocks', 'touch-pad.blocks'],
            // 'touch-phone' : ['common.blocks', 'touch-phone.blocks']
        };

    }

});


MAKE.decl('ExampleNode', {

    getTechs : function() {

        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'i18n',
            'bemhtml',
            'i18n.js+bemhtml',
            'css',
            'ie.css',
            // 'ie6.css',
            // 'ie7.css',
            'ie8.css',
            'ie9.css',
            'i18n.html'
        ];

    },

    'desktop-levels' : function() {
        return [
            'bem-bl/blocks-common',
            'bem-bl/blocks-desktop',
            'bem-controls/common.blocks',
            'bem-controls/desktop.blocks',
            'common.blocks',
            'desktop.blocks'
        ];
    },

    'touch-pad-levels' : function() {
        return [
            'bem-bl/blocks-common',
            'bem-bl/blocks-touch',
            'bem-bl/blocks-touch-pad',
            'bem-controls/common.blocks',
            'bem-controls/touch.blocks',
            'bem-controls/touch-pad.blocks',
            'common.blocks',
            'touch.blocks',
            'touch-pad.blocks'
        ];
    },

    'touch-phone-levels' : function() {
        return [
            'bem-bl/blocks-common',
            'bem-bl/blocks-touch',
            'bem-bl/blocks-touch-phone',
            'bem-controls/common.blocks',
            'bem-controls/touch.blocks',
            'bem-controls/touch-phone.blocks',
            'common.blocks',
            'touch.blocks',
            'touch-phone.blocks'
        ];
    },

    /**
    * Examples levels
    */
    getLevels : function() {
        var type = this.getNodePrefix().split('.')[0],
            resolve = PATH.resolve.bind(null, this.root),
            levels = [ ],
            getLevels = this[(type.indexOf('release') === 0? 'desktop' : type) + '-levels'];

        getLevels && (levels = levels.concat(getLevels()));

        levels.push(
            this.getSourceNodePrefix() // Add blocks dir from examples folder
                .split('/')
                .slice(0, -1)
                .concat([ 'blocks' ])
                .join('/'),
            this.rootLevel // Add %examplename%.blocks from exmaples folder
                .getTech('blocks')
                .getPath(this.getSourceNodePrefix()));

        return levels.map(function(level) {
            return resolve(level);
        });
    }

});
