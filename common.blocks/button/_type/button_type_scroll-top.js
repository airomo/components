BEM.DOM.decl({block: 'button', modName: 'type', modVal: 'scroll-top'}, {
    onSetMod: {
        'js': {
            'inited': function() {
                this.__base.apply(this, arguments);

                this.bindTo('click', function(e) {
                    $('html, body').stop().animate({ scrollTop: 0 }, 500);
                });
            }
        }
    }
});