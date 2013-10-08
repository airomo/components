BEM.DOM.decl( { block: 'button' } , {
    onSetMod: {
        'js': {
            'inited': function() {
                var show = this.getMod('show');

                show && this.on('click', function() {
                    BEM.blocks['modal-window'].show(
                        show,
                        show,
                        show,
                        ['cancel', 'close', 'submit']
                    );
                });
            }
        }
    }
});