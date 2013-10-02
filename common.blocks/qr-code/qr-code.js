BEM.DOM.decl('qr-code', {
    onSetMod: {
        'js': {
            'inited': function() {
                var isSvgCompatible = !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;

                !isSvgCompatible &&  this.domElem.attr('src', this.domElem.attr('src').replace('svg', 'png'));
            }
        }
    }
});