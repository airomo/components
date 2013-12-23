//TODO: can we toggle on disabled tab from url?

/*
* Circled tabs switcher.
* Tab's start value variants(sorted by priority): 1) url query 2) _active mod in bemjson 3) first tab
*/
(function() {
    var storage = {};


    BEM.DOM.decl('tab-switcher', {
        onSetMod: {
            'js': function() {

                var _this = this,
                    name = this.params.name,
                    items = this.childElem('item'),
                    itemsWithoutNav = $(),
                    tabs = this.childElem('tab') || this.__self.tabs.get(name);


                if ( tabs.length ) {
                    this.__self.tabs.set(name, tabs);
                }

                if ( items.length ) {
                    items.each(function() {
                        var typeModVal = _this.getMod($(this), 'type');

                        if ( typeModVal != 'prev' && typeModVal != 'next' ) {
                            itemsWithoutNav = itemsWithoutNav.add(this);
                        }

                        _this.__self.items.set(name, itemsWithoutNav);
                    });
                }

                storage[name] = (this.__self.getParams()['tabs'] && this.__self.getParams()['tabs'][name]) || (this.elem('tab', 'active', 'yes').length && tabs.index(this.elem('tab', 'active', 'yes').get(0))) || storage[name] || 0;
                storage[name] = storage[name] > -1 ? storage[name] : 0;

                if ( this.__self.items.get(name) && this.hasMod(this.__self.items.get(name).eq(storage[name]), 'disabled') ) {
                    storage[name] = this.chooseSibling(name, 'next');
                }

                BEM.blocks['tab-switcher'].on('change', function(e, data) {
                    if ( name == data.name ) {
                        _this.changeTab(data.name, data.tab);
                    }
                });

                BEM.blocks['tab-switcher'].trigger('change', {
                    name: name,
                    tab: storage[name]
                });

                this.bindTo(items, 'click', function(e) {
                    if ( !_this.getMod(e.data.domElem, 'disabled') ) {
                        var typeVal = _this.getMod(e.data.domElem, 'type');

                        if ( typeVal == 'next' || typeVal == 'prev' ) {
                            _this.chooseSibling(name, typeVal);
                        } else {
                            storage[name] = _this.__self.items.get(name).index(e.currentTarget);
                        }

                        BEM.blocks['tab-switcher'].trigger('change', {
                            name: name,
                            tab: storage[name]
                        });
                    }
                });

            }
        },

        chooseSibling: (function() {
            var callIndex;

            return function(name, typeVal) {
                if ( callIndex != storage[name] && this.__self.items.get(name) && this.__self.tabs.get(name) ) {
                    if ( !callIndex ) {
                        callIndex = storage[name];
                    }

                    storage[name] = typeVal === 'next' ? storage[name] + 1 : storage[name] - 1;

                    if ( storage[name] > this.__self.tabs.get(name).length - 1 ) {
                        storage[name] = 0;
                    } else if ( storage[name] < 0 ) {
                        storage[name] = this.__self.tabs.get(name).length - 1;
                    }

                    if ( this.hasMod(this.__self.items.get(name).eq(storage[name]), 'disabled') ) {
                        storage[name] = this.chooseSibling(name, typeVal);
                    } else {
                        callIndex = undefined;
                    }
                }

                return storage[name];
            };
        }()),

        changeTab: function(name, tab) {
            this.delMod(this.__self.items.get(name), 'active');
            this.__self.items.get(name) && this.setMod(this.__self.items.get(name).eq(tab), 'active', 'yes');

            this.delMod(this.__self.tabs.get(name), 'active');
            this.__self.tabs.get(name) && this.setMod(this.__self.tabs.get(name).eq(tab), 'active', 'yes');

            storage[name] = tab;

            this.__self.changeTab(name, tab);
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
                set: function(name, collection) {
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
}());