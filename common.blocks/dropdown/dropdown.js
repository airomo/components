BEM.DOM.decl('dropdown', {
    onSetMod: {
        'js': {
            'inited': function() {
                var _this = this,
                    isClicked;

                //toggle block visibility when elem 'switcher' was clicked
                this.bindTo(this.elem('switcher'), 'click', function(e) {
                    isClicked = true;

                    _this.toggleMod('visibility', 'hidden', '');
                });

                //hide dropdown when elem 'item' was clicked
                this.bindTo(_this.elem('item'), 'click', function(e) {
                    _this.setMod('visibility', 'hidden');
                });

                //prevent click bubling on dropdown content
                this.bindTo(this.elem('content'), 'click', function(e) {
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