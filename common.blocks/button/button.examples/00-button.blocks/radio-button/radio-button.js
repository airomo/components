BEM.DOM.decl('radio-button', {
    onSetMod: {
        'js': {
            'inited': function() {
                this.__base.apply(this, arguments);

                var _this = this,
                    updateStorageValue = function(name, value) {
                        _this.__self.storage[name] = value;
                    };

                this.on('change', function(e, data) {
                    updateStorageValue(_this.getMod('type'), _this.val());
                });

                updateStorageValue(_this.getMod('type'), _this.val());
            }
        }
    }
}, {
    storage: {}
});

BEM.DOM.decl({block: 'radio-button', modName: 'type', modVal: 'button-icon-type'}, {
    onSetMod: {
        'js': {
            'inited': function() {
                this.__base.apply(this, arguments);

                var _this = this,
                    buf = {},
                    storage = BEM.blocks['radio-button'].storage,
                    changeState = function() {
                        (function(key) {
                            if ( buf[key] !== storage[key] ) {
                                _this.setMod('disabled', storage[key].indexOf('icon') > -1 ? '' : 'yes');

                                buf[key] = storage[key];
                            }
                        }('button-content'));
                    };

                BEM.blocks['radio-button'].on('change', function(e, data) {
                    changeState();
                });

                changeState();
            }
        }
    }
});