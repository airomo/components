//TODO: can we toggle on disabled tab from url?

/*
* Circled tabs switcher.
* Tab's start value variants(sorted by priority): 1) url query 2) _active mod in bemjson 3) first tab
*/
BEM.DOM.decl('tab-switcher', {
    onSetMod: {
        'js': function() {

            var _this = this,
                name = this.params.name,
                items = this.childElem('item'),
                tabs = this.childElem('tab') || this.__self.tabs.get(name),
                activeTabIndex = (this.__self.getParams()['tabs'] && this.__self.getParams()['tabs'][name]) || (this.elem('tab', 'active', 'yes').length && tabs.index(this.elem('tab', 'active', 'yes').get(0)) || 0);

            if ( tabs.length ) {
                this.__self.tabs.set(name, tabs);
            }

            if ( items.length ) {
                this.__self.items.set(name, items, this);
            }

            activeTabIndex = activeTabIndex > -1 ? activeTabIndex : 0;

            _this.changeTab(name, activeTabIndex);

            BEM.blocks['tab-switcher'].on('change', function(e, data) {
                if ( name == data.name ) {
                    _this.changeTab(data.name, data.tab);
                }
            });

            this.bindTo(items, 'click', function(e) {
                if ( !_this.getMod(e.data.domElem, 'disabled') ) {
                    var typeVal = _this.getMod(e.data.domElem, 'type'),
                        chooseSibling = (function() {
                            var callIndex;

                            return function(typeVal) {
                                if ( callIndex != activeTabIndex ) {
                                    if ( !callIndex ) {
                                        callIndex = activeTabIndex;
                                    }

                                    activeTabIndex = typeVal === 'next' ? activeTabIndex + 1 : activeTabIndex - 1;

                                    if ( activeTabIndex > _this.__self.tabs.get(name).length - 1 ) {
                                        activeTabIndex = 0;
                                    } else if ( activeTabIndex < 0 ) {
                                        activeTabIndex = _this.__self.tabs.get(name).length - 1;
                                    }

                                    if ( _this.hasMod(_this.__self.items.get(name).eq(activeTabIndex), 'disabled') ) {
                                        activeTabIndex = chooseSibling(typeVal);
                                    } else {
                                        callIndex = undefined;
                                    }
                                }

                                return activeTabIndex;
                            };
                        }());

                    if ( typeVal == 'next' || typeVal == 'prev' ) {
                        chooseSibling(typeVal);
                    } else {
                        activeTabIndex = items.index(e.currentTarget);
                    }

                    BEM.blocks['tab-switcher'].trigger('change', {
                        name: name,
                        tab: activeTabIndex
                    });
                }
            });

        }
    },

    changeTab: function(switcher, tab) {
        this.delMod(this.__self.items.get(switcher), 'active');
        this.setMod(this.__self.items.get(switcher).eq(tab), 'active', 'yes');

        this.delMod(this.__self.tabs.get(switcher), 'active');
        this.__self.tabs.get(switcher) && this.setMod(this.__self.tabs.get(switcher).eq(tab), 'active', 'yes');

        this.__self.changeTab(switcher, tab);
    },

    childElem: (function() {
        var _cache = {};

        return function(elemName, modName, modVal, isForce) {
            var _this = this,
                blockId = this.params.uniqId,
                selector = this.buildSelector(elemName, modName, modVal),
                collection = $();

            isForce = isForce == arguments[arguments.length - 1];
            isForce = typeof isForce != 'boolean' ? false : isForce;
            //not cache elemMods
            isForce = modName || modVal ? true : isForce;

            if ( !isForce && _cache[blockId] && _cache[blockId][selector] ) {
                return _cache[blockId][selector];
            }

            this.elem(elemName, modName, modVal).each(function() {
                if ( $(this).closest(_this.buildSelector())[0] == _this.domElem.get(0) ) {
                    collection = collection.add(this);
                }
            });

            _cache[blockId] = _cache[blockId] || {};
            _cache[blockId][selector] = collection;

            return _cache[blockId][selector];
        };
    }())

}, {

    items: (function() {
        var items = {};

        return {
            get: function(name) {
                return items[name];
            },
            set: function(name, collection, block) {
                items[name] = items[name] || $();
                items[name] = items[name].add(collection);

                return this;
            }
        };
    }()),

    tabs: (function() {
        var tabs = {};

        return {
            get: function(name) {
                return tabs[name];
            },
            set: function(name, tabsCollection) {
                tabs[name] = tabs[name] || $();
                tabs[name] = tabs[name].add(tabsCollection);

                return this;
            }
        };
    }()),

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
                    try {
                        //use 'try', because url can be incorrect

                        paramsList[decodeURIComponent(item.shift())] = JSON.parse(decodeURIComponent(item));
                    } catch (e) {}
                }
            });

        return paramsList;
    },

    setParam: function(name, value) {
        var paramsList = this.getParams() || {};

        paramsList[name] = value;

        BEM.blocks['i-location'].get().change({params: paramsList});
    },

    changeTab: function(switcherName, tabIndex) {
        var paramsList = this.getParams() || {};

        paramsList['tabs'] = paramsList['tabs'] || {};
        paramsList['tabs'][switcherName] = tabIndex;

        this.setParam('tabs', JSON.stringify(paramsList['tabs']));
    }
});