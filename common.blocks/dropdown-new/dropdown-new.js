BEM.DOM.decl('dropdown-new', {

    onSetMod: {
        'js': {
            'inited': function() {

                var _this = this;


                //toggle __content visibility when elem 'switcher' was clicked
                this.bindTo(this.elem('switcher'), 'click', function(e) {
                    _this.toggleMod(_this.elem('content-wrapper'), 'visibility', 'hidden', '');
                });

                //hide dropdown-new when elem 'item' was clicked
                this.bindTo(_this.elem('item'), 'click', function(e) {
                    _this.setMod(_this.elem('content-wrapper'), 'visibility', 'hidden');
                });

                //prevent click bubling on dropdown-new content
                this.bindTo(this.elem('content-wrapper'), 'click', function(e) {
                    e.preventDefault();
                    return false;
                });

                //hide dropdown if clicking out of content
                this.bindToDoc('click', function(e) {
                    !isClicked && _this.setMod('visibility', 'hidden');

                    isClicked = false;
                });

            }
        }
    }

});