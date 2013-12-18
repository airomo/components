BEM.DOM.decl({ block: 'tab-switcher', modName: 'type', modVal: 'radio' }, {
    onElemSetMod: {
        'item': {
            'active': function(elem, modName, modVal) {
                this.__base.apply(this, arguments);

                var radioButton = this.findBlockOn('radio-button'),
                    radio = radioButton && radioButton.elem('radio').eq(this.elem('item').index(elem.get(0)));

                radio && radioButton.setMod(radio, 'pressed', modVal ? 'yes' : '');
            },

            'disabled': function(elem, modName, modVal) {
                this.__base.apply(this, arguments);

                var radioButton = this.findBlockOn('radio-button'),
                    radio = radioButton && radioButton.elem('radio').eq(this.elem('item').index(elem.get(0)));

                radio && radioButton.setMod(radio, 'disabled', modVal ? 'yes' : '');
            }
        }
    }
});