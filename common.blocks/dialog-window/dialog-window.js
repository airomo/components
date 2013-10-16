BEM.DOM.decl('dialog-window', {

    onSetMod: {
        'js': {
            'inited': function() {

                var _this = this,
                    id = this.params.id || this.__self.generateId(this.__self._windowsList);


                this.__self._windowsList[id] = this;


                this.bindTo(this.elem('close'), 'click', function() {
                    _this.__self.close(_this);
                });

                this.bindTo(this.elem('control', 'type', 'resolve'), 'click', function() {
                    _this.__self.resolve(_this);
                });

                this.bindTo(this.elem('control', 'type', 'reject'), 'click', function() {
                    _this.__self.reject(_this);
                });
            }
        },


        'visibility': function(modName, modVal) {
            var _this = this,
                paranjaBlock = this.findBlockOn(this.elem('paranja'), 'paranja');

            paranjaBlock && paranjaBlock.setMod(modName, modVal);
        }
    },


    toggle: function(block) {
        this.__self.toggle(this);
    },


    open: function() {
        this.__self.open(this);
    },


    close: function() {
        this.__self.close(this);
    },


    resolve: function() {
        this.__self.resolve(this);
    },


    reject: function() {
        this.__self.resolve(this);
    },


    onOpen: function(func) {
        if ( $.isFunction(func)) {
            this._onOpenArray = this._onOpenArray || [];
            this._onOpenArray.push(func);
        }
    },


    onClose: function(func) {
        if ( $.isFunction(func)) {
            this._onCloseArray = this._onCloseArray || [];
            this._onCloseArray.push(func);
        }
    },


    onResolve: function(func) {
        if ( $.isFunction(func)) {
            this._onResolveArray = this._onResolveArray || [];
            this._onResolveArray.push(func);
        }
    },


    onReject: function(func) {
        if ( $.isFunction(func)) {
            this._onRejectArray = this._onRejectArray || [];
            this._onRejectArray.push(func);
        }
    }

}, {

    _windowsList: {},


    generateId: function(idsList) {
        var id = (Math.random() * Math.pow(10, 10)).toFixed(0);

        if ( !idsList[id] ) {
            return id;
        } else {
            generateId(idsList);
        }
    },


    toggle: function(block) {
        this[block.hasMod('visibility') ? 'open' : 'close'](block);
    },


    open: function(block) {
        var isError = false;

        if ( block._onOpenArray ) {
            block._onOpenArray.forEach(function(func) {
                var functionResult = func();

                if ( functionResult === false ) {
                    isError = true;
                }
            });
        }

        if ( !isError ) {
            if ( block.elem('close').length ) {
                block.bindToWin('keyup', function(e) {
                    if ( e.keyCode === 27 ) {
                        block.close();
                    }
                });
            }

            block.setMod('visibility', '');
        }
    },


    close: function(block) {
        var isError = false;

        if ( block._onCloseArray ) {
            block._onCloseArray.forEach(function(func) {
                var functionResult = func();

                if ( functionResult === false ) {
                    isError = true;
                }
            });
        }

        if ( !isError ) {
            block.unbindFromWin('keyup');

            block.setMod('visibility', 'hidden');
        }
    },


    resolve: function(block) {
        var isError = false;

        if ( block._onResolveArray ) {
            block._onResolveArray.forEach(function(func) {
                var functionResult = func();

                if ( functionResult === false ) {
                    isError = true;
                }
            });
        }

        !isError && this.close(block);
    },


    reject: function(block) {
        var isError = false;

        if ( block._onRejectArray ) {
            block._onRejectArray.forEach(function(func) {
                var functionResult = func();

                if ( functionResult === false ) {
                    isError = true;
                }
            });
        }

        !isError && this.close(block);
    }

});