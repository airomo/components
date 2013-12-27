BEM.DOM.decl('dropdown-new', {

    onSetMod: {
        'js': {
            'inited': function() {

                var _this = this,
                    isClicked,
                    dropdown = this.domElem,
                    switcher = this.elem('switcher'),
                    isMouseDown,
                    isDrag,
                    dx,
                    dy;


                dropdown.css({position: 'absolute', overflow: 'hidden'});


                this.bindTo('switcher', 'mousedown', function(e) {
                    isDrag = false;
                    isMouseDown = true;

                    dx = switcher.offset().left - e.pageX;
                    dy = switcher.offset().top - e.pageY;
                });


                this.bindToWin('mouseup', function(e) {
                    isMouseDown = false;
                });


                this.bindToWin('mousemove', function(e) {
                    if ( !isMouseDown ) return false;

                    isDrag = true;

                    dropdown.css({
                        left: e.pageX + dx + 'px',
                        top: e.pageY + dy + 'px'
                    });

                    this.updatePosition();
                });






                //toggle __content visibility when elem 'switcher' was clicked
                this.bindTo(this.elem('switcher'), 'click', function(e) {
                    isClicked = true;

                    if ( isDrag ) return false;

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

                //hide dropdown-new if clicking out of content
                this.bindToDoc('click', function(e) {
                    !isClicked && _this.setMod(_this.elem('content-wrapper'), 'visibility', 'hidden');

                    isClicked = false;
                });


                this.bindToWin('resize', function() {
                    this.updatePosition();
                });

                this.updatePosition();
            }
        }
    },


    onElemSetMod: {
        'content-wrapper': {
            'visibility': function(elem, modName, modVal) {
                if ( !modVal ) {
                    this.updatePosition();
                }

                this.domElem.css({overflow: !modVal ? 'visible' : 'hidden'});
            }
        }
    },


    /**
     * Layout content in best position
     */
    updatePosition: function() {
        var getElemParams = function(elem) {
                var offset = elem.offset();

                return {
                    left: offset.left,
                    top: offset.top,
                    width: elem.outerWidth(true),
                    height: elem.outerHeight(true)
                };
            },

            getWindowParams = function() {
                return {
                    width: $(window).width(),
                    height: $(window).height()
                };
            },

            switcher = getElemParams(this.elem('switcher').eq(0)),
            content = getElemParams(this.elem('content').eq(0)), win = getWindowParams(),

            directionsSize = {
                'top': switcher.top,
                'right': win.width - switcher.left - switcher.width,
                'bottom': win.height - switcher.top - switcher.height,
                'left': switcher.left
            }, size = {
                'top': 'height',
                'bottom': 'height',
                'left': 'width',
                'right': 'width'
            }, crossSize = {
                'top': 'width',
                'bottom': 'width',
                'left': 'height',
                'right': 'height'
            },

            directionsWeightList = {},

            getAlign = function(direction) {
                var position = direction === 'left' || direction === 'right' ? 'top' : 'left', size = direction === 'left' || direction === 'right' ? 'height' : 'width';

                //if space not enough
                if ( content[size] > win[size] || switcher[size] < 52 ) {
                    return 'center';
                } else {
                    if ( switcher[position] + switcher[size] / 2 < content[size] / 2 ) {
                        return 'start';
                    } else if ( win[size] - switcher[position] - switcher[size] < content[size] / 2 ) {
                        return 'end';
                    }

                    return 'center';
                }
            };

        //find direction with enough space
        for ( var key in directionsSize ) {
            if ( directionsSize.hasOwnProperty(key) ) {
                if ( directionsSize[key] >= content[size[key]] + 12 ) {
                    directionsWeightList[key] = directionsSize[key] + switcher[crossSize[key]] - content[crossSize[key]];
                }
            }
        }

        //find direction with max diff between switcher[size] and content[size]
        var direction;

        for ( var key in directionsWeightList ) {
            if ( directionsWeightList.hasOwnProperty(key) ) {
                direction = direction || key;

                direction = directionsWeightList[key] > directionsWeightList[direction] ? key : direction;
            }
        }

        this.setMod('direction', direction);
        this.setMod('align', getAlign(direction));
    }

});