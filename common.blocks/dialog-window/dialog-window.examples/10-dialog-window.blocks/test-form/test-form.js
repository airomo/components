BEM.DOM.decl('test-form', {
    onSetMod: {
        'js': {
            'inited': function() {

                var _this = this,
                    dialogWindow = _this.findBlockOn('dialog-window'),
                    inputBlock = _this.findBlockOn(_this.elem('input'), 'input'),
                    onSubmit = function(e) {
                        if ( !inputBlock.val() ) {
                            inputBlock.setMod(inputBlock.elem('message', 'type', 'error'), 'visibility', 'visible');

                            return false;
                        }

                        inputBlock.val('');
                    };


                dialogWindow.onResolve(onSubmit);
                dialogWindow.onResolve(function() {
                    console && console.log('resolve');
                });

                dialogWindow.onReject(function() {
                    inputBlock.setMod(inputBlock.elem('message', 'type', 'error'), 'visibility', '');

                    console && console.log('reject');
                });

                dialogWindow.onClose(function() {
                    inputBlock.setMod(inputBlock.elem('message', 'type', 'error'), 'visibility', '');

                    console && console.log('close');
                });


                inputBlock.bindTo('keyup', function(e) {
                    if ( e.keyCode === 13 ) {
                        onSubmit(e);

                        return false;
                    } else {
                        inputBlock.setMod(inputBlock.elem('message', 'type', 'error'), 'visibility', '');
                    }
                });

            }
        }
    }
});