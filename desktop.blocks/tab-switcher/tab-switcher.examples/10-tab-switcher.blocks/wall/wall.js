BEM.DOM.decl('wall', {
    onSetMod: {
        'js': {
            'inited': function() {
                BEM.channel('airomo').on('changeTab', function(e, data) {
                    //toggle block's 'active' modifier
                    if ( data.name === 'wall' ) {
                        _this.toggleWallActivity(BEM.blocks['tab-switcher'].getActive('wall'));
                    }

                    $('html, body').stop().animate({ scrollTop: 0 }, 0);
                });
            }
        },
        toggleWallActivity: function(type) {
            if ( this.getMod('type') === type ) {
                this.setMod('active', 'yes');
            } else {
                this.delMod('active');
            }
        }
    }
});