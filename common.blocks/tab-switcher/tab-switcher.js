/*
* Circled tabs switcher.
* Tab's start value variants(sorted by priority): 1) url query 2) _active mod in bemjson 3) first tab
*/
BEM.DOM.decl('tab-switcher', {
    onSetMod: {
        'js': function() {

            var _this = this,
                name = this.params.name,
                items = this.child('item'),
                tabs = this.child('tab'),
                activeTabIndex;

            if ( tabs.length ) {
                activeTabIndex = (this.__self.getParams()['tabs'] && this.__self.getParams()['tabs'][name]) || (this.elem('tab', 'active', 'yes').length && tabs.index(this.elem('tab', 'active', 'yes').get(0)) || 0);
                activeTabIndex = activeTabIndex > -1 ? activeTabIndex : 0;

                _this.changeTab(name, activeTabIndex);

                BEM.blocks['tab-switcher'].on('change', function(e, data) {
                    if ( name == data.name ) {
                        if ( data.tab == 'next' || data.tab == 'prev' ) {
                            activeTabIndex = data.tab === 'next' ? activeTabIndex + 1 : activeTabIndex - 1;

                            if ( activeTabIndex > tabs.length - 1 ) {
                                activeTabIndex = 0;
                            } else if ( activeTabIndex < 0 ) {
                                activeTabIndex = tabs.length - 1;
                            }
                        } else {
                            activeTabIndex = data.tab;
                        }

                        _this.changeTab(name, activeTabIndex);
                    }
                });
            }

            this.bindTo(items, 'click', function(e) {
                BEM.blocks['tab-switcher'].trigger('change', {
                    name: name,
                    tab: this.getMod(e.data.domElem, 'type') || items.index(e.target)
                });
            });

        }
    },

    changeTab: function(switcher, tab) {
        this.delMod(this.child('tab', 'active', 'yes'), 'active');
        this.setMod(this.child('tab').eq(tab), 'active', 'yes');

        this.__self.changeTab(switcher, tab);
    },

    child: (function() {
        var _cache;

        return function(elemName, modName, modVal) {
            var _this = this,
                collection = $();

            this.elem(elemName, modName, modVal).each(function() {
                if ( $(this).closest(_this.buildSelector())[0] == _this.domElem.get(0) ) {
                    collection = collection.add(this);
                }
            });

            return collection;
        };
    }()),

    dropChildCache: function() {
    }

}, {

    getParams: function() {
        var paramsList = {};

        window.location.search
            .substr(1)
            .split('&')
            .map(function(value) {
                return value.split('=');
            })
            .forEach(function(item) {
                if ( item != '' ) {
                    paramsList[decodeURIComponent(item.shift())] = JSON.parse(decodeURIComponent(item));
                }
            });

        return paramsList;
    },

    setParam: function(name, value) {
        var paramsList = this.getParams() || {};

        paramsList[name] = value;

        BEM.blocks['i-location'].get().change({params: paramsList});
    },

    changeTab: function(switcherName, tabName) {
        var paramsList = this.getParams() || {};

        paramsList['tabs'] = paramsList['tabs'] || {};
        paramsList['tabs'][switcherName] = tabName;

        this.setParam('tabs', JSON.stringify(paramsList['tabs']));
    }
});