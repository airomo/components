BEM.DOM.decl('example-table', {
    onSetMod: {
        'js': {
            'inited': function() {
                var _this = this,
                    buf = {},
                    storage = BEM.blocks['radio-button'].storage,
                    icons = this.findBlocksInside('icon'),
                    changeState = function(icons) {
                        (function(key) {
                            if ( buf[key] !== storage[key] ) {
                                for ( var i = icons.length - 1; i >= 0; i -= 1 ) {
                                    icons[i].setMod('color', storage[key]);
                                }

                                buf[key] = storage[key];
                            }
                        }('icon-color'));
                    };

                BEM.blocks['radio-button'].on('change', function(e, data) {
                    changeState(icons);
                });

                changeState(icons);
            }
        }
    }
});