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