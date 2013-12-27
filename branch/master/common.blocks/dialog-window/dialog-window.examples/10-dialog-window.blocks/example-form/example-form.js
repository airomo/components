BEM.DOM.decl('example-form', {

    onSetMod: {
        'js': {
            'inited': function() {

                var _this = this,
                    inputBlock = this.findBlockOn(this.elem('input'), 'input');


                inputBlock.bindTo('keyup', function(e) {
                    if ( e.keyCode === 13 ) {
                        _this.submit();

                        return false;
                    } else {
                        inputBlock.setMod(inputBlock.elem('message', 'type', 'error'), 'visibility', '');
                    }
                });


                this.bindTo(this.elem('submit'), 'click', function(e) {
                    _this.submit();
                });

            }
        }
    },


    submit: function() {
        var inputBlock = this.findBlockOn(this.elem('input'), 'input');

        if ( !inputBlock.val() ) {
            inputBlock.setMod(inputBlock.elem('message', 'type', 'error'), 'visibility', 'visible');

            return false;
        }

        inputBlock.val('');
    }

});