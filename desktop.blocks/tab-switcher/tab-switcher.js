/*
* Circled tabs switcher.
* Tab 'onload' value variants(sorted by priority): 1) url hash 2) js params('activeTab': {string}) 3) first tab in array
*/
(function() {
    var activeTabs = {};

    BEM.DOM.decl('tab-switcher', {
        onSetMod: {
            'js': function() {

                var _this = this;
                    tabParams = BEM.blocks['tab-switcher'].getTabsFromUrl() || {},
                    name = this.params.name,
                    activeTab = tabParams[name] && tabParams[name].activeTab || this.params.activeTab,
                    tabs = this.params.tabs,
                    activeTabIndex = (this.params.activeTab && $.inArray(this.params.activeTab, tabs)) || 0;

                if ( tabs.length ) {

                    _this.__self.changeTab(name, tabs[activeTabIndex]);
                    _this.changeTab(tabs[activeTabIndex]);

                    this.bindTo(this.elem('item'), 'click', function(e) {
                        var typeVal = this.getMod(e.data.domElem, 'type');

                        activeTabIndex = typeVal === 'next' ? activeTabIndex + 1 : activeTabIndex - 1;

                        if ( activeTabIndex > tabs.length - 1 ) {
                            activeTabIndex = 0;
                        } else if ( activeTabIndex < 0 ) {
                            activeTabIndex = tabs.length - 1;
                        }

                        _this.__self.changeTab(name, tabs[activeTabIndex]);
                    });

                }

                BEM.channel('airomo').on('changeTab', function(e, data) {
                    var newTabIndex = $.inArray(data.tab, tabs);
                    activeTabIndex = newTabIndex > -1 ? newTabIndex : activeTabIndex;
                    (data.name == name) && _this.changeTab(data.tab);
                });

            }
        },
        changeTab: function(tabName) {
            this.setMod(this.elem('tab', 'visibility', 'visible'), 'visibility', 'hidden');
            this.setMod(this.elem('tab', 'type', tabName), 'visibility', 'visible');
        }
    }, {
        changeTab: function(name, tabName) {
            this.setTabsToUrl([{name: name, active: tabName}]);

            activeTabs[name] = tabName;

            BEM.channel('airomo').trigger('changeTab', { name: name, tab: tabName });
        },

        getTabsFromUrl: function() {
            var iLocation = BEM.blocks['i-location'].get(),
                tabsString = iLocation.getState().params.tabs,
                tabsArrayString = tabsString ? tabsString.split(';') : [],
                tabsParams = [],
                name = '',
                active = '';

            tabsArrayString.forEach(function(params) {
                params = params.split(',');
                params.forEach(function(param) {
                    param = param.split(':');
                    (param[0] == 'name') && (name = param[1]);
                    (param[0] == 'active') && (active = param[1]);
                });
                tabsParams.push({name: name, active: active });
                name = '';
                active = '';
            });
            return tabsParams;
        },

        setTabsToUrl: function(tabs) {
            var iLocation = BEM.blocks['i-location'].get(),
                paramsFromUrl = this.getTabsFromUrl(),
                paramsToUrl = { params: {tabs: ''} },
                isExist = false;

            tabs.forEach(function(tab) {
                isExist = false;
                paramsFromUrl.forEach(function(param, index) {
                    (param.name === tab.name) &&  (paramsFromUrl[index].name = tab.name) && (paramsFromUrl[index].active = tab.active) && (isExist = true);
                });
                !isExist && paramsFromUrl.push({ name: tab.name, active: tab.active });
            });
            var tabsString = '';
            paramsFromUrl.forEach(function(param) {
                 tabsString += 'name:' + param.name + ',active:' + param.active + ';';
            });

            paramsToUrl.params.tabs = tabsString.slice(0, tabsString.length - 1);
            iLocation.change(paramsToUrl);
        },

        getActive: function(name) {
            return activeTabs[name];
        }
    });
}());