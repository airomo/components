BEM.DOM.decl({block: 'tab-switcher', modName: 'type', modVal: 'content'}, {
    onElemSetMod: {
        'item': {
            'active': {
                'yes': function(elem, modName, modVal) {
                    this.__base.apply(this, arguments);
                },

                '': function(elem, modName, modVal) {
                    this.__base.apply(this, arguments);
                }
            }
        }
    }
});