BEM.DOM.decl('dialog-window', {

    onSetMod: {
        'js': {
            'inited': function() {

                var _this = this;


                this.bindTo(this.elem('control', 'type', 'close'), 'click', function() {
                    _this.close(_this);
                });

                this.bindTo(this.elem('control', 'type', 'resolve'), 'click', function() {
                    _this.resolve(_this);
                });

                this.bindTo(this.elem('control', 'type', 'reject'), 'click', function() {
                    _this.reject(_this);
                });
            }
        },


        'visibility': function(modName, modVal) {
            var paranjaBlock = this.findBlockOn(this.elem('paranja'), 'paranja');
            console.log(paranjaBlock);

            paranjaBlock && paranjaBlock.setMod(modName, modVal);
        }
    },


    toggle: function() {
        this[this.hasMod('visibility') ? 'open' : 'close'](block);
    },


    open: function() {
        var _this = this,
            isError = false;

        if ( this._onOpenArray ) {
            this._onOpenArray.forEach(function(func) {
                var functionResult = func();

                if ( functionResult === false ) {
                    isError = true;
                }
            });
        }

        if ( !isError ) {
            if ( this.elem('close').length ) {
                this.bindToWin('keyup', function(e) {
                    if ( e.keyCode === 27 ) {
                        _this.close();
                    }
                });
            }

            this.setMod('visibility', '');
        }

        return this;
    },


    close: function() {
        var isError = false;

        if ( this._onCloseArray ) {
            this._onCloseArray.forEach(function(func) {
                var functionResult = func();

                if ( functionResult === false ) {
                    isError = true;
                }
            });
        }

        if ( !isError ) {
            this.unbindFromWin('keyup');

            this.setMod('visibility', 'hidden');
        }

        return this;
    },


    resolve: function() {
        var isError = false;

        if ( this._onResolveArray ) {
            this._onResolveArray.forEach(function(func) {
                var functionResult = func();

                if ( functionResult === false ) {
                    isError = true;
                }
            });
        }

        !isError && this.close(this);

        return this;
    },


    reject: function() {
        var isError = false;

        if ( this._onRejectArray ) {
            this._onRejectArray.forEach(function(func) {
                var functionResult = func();

                if ( functionResult === false ) {
                    isError = true;
                }
            });
        }

        !isError && this.close(this);

        return this;
    },


    onOpen: function(func) {
        if ( $.isFunction(func)) {
            this._onOpenArray = this._onOpenArray || [];
            this._onOpenArray.push(func);
        }

        return this;
    },


    onClose: function(func) {
        if ( $.isFunction(func)) {
            this._onCloseArray = this._onCloseArray || [];
            this._onCloseArray.push(func);
        }

        return this;
    },


    onResolve: function(func) {
        if ( $.isFunction(func)) {
            this._onResolveArray = this._onResolveArray || [];
            this._onResolveArray.push(func);
        }

        return this;
    },


    onReject: function(func) {
        if ( $.isFunction(func)) {
            this._onRejectArray = this._onRejectArray || [];
            this._onRejectArray.push(func);
        }

        return this;
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


    open: function(id, bemJson) {
        if ( typeof id != 'object' ) {
            //if id is id

            if ( !bemJson ) {
                //if in arguments only id

                return this.get(id) && this.get(id).open();

            } else {
                //if in arguments id and bemJson

                return (this.get(id) && this.get(id).open()) || this.create(id, bemJson).open();

            }

        } else {
            //if id is bemjson

            if ( !id ) return null;

            return this.create(bemJson).open();

        }
    },


    get: function(id) {
        return this._windowsList[id] || null;
    },


    create: function(id, bemJson) {
        if ( id ) {
            if ( !bemJson ) {
                bemJson = id;

                id = this.generateId(this._windowsList);
            }

            bemJson.js = bemJson.js || {};

            bemJson.js.id = id;

            var dialogWindow = $(BEMHTML.apply(bemJson)).bem('dialog-window');

            BEM.DOM.append($(document.body), dialogWindow.domElem);

            this._windowsList[id] = dialogWindow;

            return dialogWindow;
        }
    }

});