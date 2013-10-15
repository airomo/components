BEM.DOM.decl('paranja', {
    onSetMod: {
        'visibility': function(modName, modVal) {
            if ( modVal ) {
                $(document.body).removeClass('paranja__blur');
            } else {
                $(document.body).addClass('paranja__blur');
            }
        }
    }
});