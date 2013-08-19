BEM.DOM.decl('example-table', {
    onSetMod: {
        'js': {
            'inited': function() {
                var _this = this,
                    buf = {},
                    storage = BEM.blocks['radio-button'].storage,
                    buttons = this.findBlocksInside('button'),
                    changeState = function(buttons) {
                        (function(key) {
                            if ( buf[key] !== storage[key] ) {
                                for ( var i = buttons.length - 1; i >= 0; i -= 1 ) {
                                    buttons[i].setMod(buttons[i].elem('icon'), 'visibility', storage[key].indexOf('icon') > -1 ? '' : 'hidden');
                                    buttons[i].setMod('only-icon', storage[key] === 'icon' ? 'yes' : '');
                                    buttons[i].setMod(buttons[i].elem('text-content'), 'visibility', storage[key].indexOf('text') > -1 ? '' : 'hidden');
                                    buttons[i].setMod(buttons[i].elem('counter'), 'visibility', storage[key].indexOf('counter') > -1 ? '' : 'hidden');
                                }

                                buf[key] = storage[key];
                            }
                        }('button-content'));

                        (function(key) {
                            if ( buf[key] !== storage[key] ) {
                                for ( var i = buttons.length - 1; i >= 0; i -= 1 ) {
                                    buttons[i].setMod(buttons[i].elem('icon'), 'type', storage[key]);
                                }

                                buf[key] = storage[key];
                            }
                        }('button-icon-type'));
                    };

                BEM.blocks['radio-button'].on('change', function(e, data) {
                    changeState(buttons);
                });

                changeState(buttons);
            }
        }
    }
});