(function() {
    /**
     * Set height of __content-wrapper
     *
     * @param {BEM} block BEM block object
     */
    var updateContentHeight = function(block) {
        block.elem('content-wrapper').css({
            height: block.elem('content').outerHeight(true) + 'px'
        });
    };

    BEM.DOM.decl({block: 'dropdown', modName: 'align', modVal: 'center'}, {
        onSetMod: {
            'js': {
                'inited': function() {
                    this.__base.apply(this, arguments);

                    //we need to set height of __content-wrapper only for vertical shift ('top: -50%' not work in css)
                    if ( this.getMod('direction') === 'left' || this.getMod('direction') === 'right' ) {
                        updateContentHeight(this);
                    }
                }
            }
        },

        onElemSetMod: {
            'content-wrapper': {
                'visibility': {
                    '': function() {
                        this.__base.apply(this, arguments);

                        //we need to set height of __content-wrapper only for vertical shift ('top: -50%' not work in css)
                        if ( this.getMod('direction') === 'left' || this.getMod('direction') === 'right' ) {
                            updateContentHeight(this);
                        }
                    }
                }
            }
        }
    });
}());