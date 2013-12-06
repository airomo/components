/*
* Circled tabs switcher.
* Tab's start value variants(sorted by priority): 1) url query 2) _active mod in bemjson 3) first tab
*/
BEM.DOM.decl('tab-switcher', {
    onSetMod: {
        'js': function() {

            var _this = this,
                name = this.params.name,
                tabs = this.elem('tab'),
                activeTabIndex;

            if ( tabs.length ) {
                console.log(tabs);

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

            this.bindTo(this.elem('item'), 'click', function(e) {
                BEM.blocks['tab-switcher'].trigger('change', {
                    name: name,
                    tab: this.getMod(e.data.domElem, 'type') || _this.elem('item').index(e.target)
                });
            });

        }
    },

    changeTab: function(switcher, tab) {
        this.delMod(this.elem('tab', 'active', 'yes'), 'active');
        this.setMod(this.elem('tab').eq(tab), 'active', 'yes');

        this.__self.changeTab(switcher, tab);
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