/* ../../../../../libs/bem-bl/blocks-common/i-jquery/__inherit/i-jquery__inherit.js begin */
/**
 * Inheritance plugin
 *
 * Copyright (c) 2010 Filatov Dmitry (dfilatov@yandex-team.ru)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * @version 1.3.5
 */

(function($) {

var hasIntrospection = (function(){'_';}).toString().indexOf('_') > -1,
    emptyBase = function() {},
    objCreate = Object.create || function(ptp) {
        var inheritance = function() {};
        inheritance.prototype = ptp;
        return new inheritance();
    },
    needCheckProps = true,
    testPropObj = { toString : '' };

for(var i in testPropObj) { // fucking ie hasn't toString, valueOf in for
    testPropObj.hasOwnProperty(i) && (needCheckProps = false);
}

var specProps = needCheckProps? ['toString', 'valueOf'] : null;

function override(base, result, add) {

    var hasSpecProps = false;
    if(needCheckProps) {
        var addList = [];
        $.each(specProps, function() {
            add.hasOwnProperty(this) && (hasSpecProps = true) && addList.push({
                name : this,
                val  : add[this]
            });
        });
        if(hasSpecProps) {
            $.each(add, function(name) {
                addList.push({
                    name : name,
                    val  : this
                });
            });
            add = addList;
        }
    }

    $.each(add, function(name, prop) {
        if(hasSpecProps) {
            name = prop.name;
            prop = prop.val;
        }
        if($.isFunction(prop) &&
           (!hasIntrospection || prop.toString().indexOf('.__base') > -1)) {

            var baseMethod = base[name] || function() {};
            result[name] = function() {
                var baseSaved = this.__base;
                this.__base = baseMethod;
                var result = prop.apply(this, arguments);
                this.__base = baseSaved;
                return result;
            };

        }
        else {
            result[name] = prop;
        }

    });

}

$.inherit = function() {

    var args = arguments,
        hasBase = $.isFunction(args[0]),
        base = hasBase? args[0] : emptyBase,
        props = args[hasBase? 1 : 0] || {},
        staticProps = args[hasBase? 2 : 1],
        result = props.__constructor || (hasBase && base.prototype.__constructor)?
            function() {
                return this.__constructor.apply(this, arguments);
            } : function() {};

    if(!hasBase) {
        result.prototype = props;
        result.prototype.__self = result.prototype.constructor = result;
        return $.extend(result, staticProps);
    }

    $.extend(result, base);

    var basePtp = base.prototype,
        resultPtp = result.prototype = objCreate(basePtp);

    resultPtp.__self = resultPtp.constructor = result;

    override(basePtp, resultPtp, props);
    staticProps && override(base, result, staticProps);

    return result;

};

$.inheritSelf = function(base, props, staticProps) {

    var basePtp = base.prototype;

    override(basePtp, basePtp, props);
    staticProps && override(base, base, staticProps);

    return base;

};

})(jQuery);

/* ../../../../../libs/bem-bl/blocks-common/i-jquery/__inherit/i-jquery__inherit.js end */
;
/* ../../../../../libs/bem-bl/blocks-common/i-jquery/__identify/i-jquery__identify.js begin */
/**
 * Identify plugin
 *
 * @version 1.0.0
 */

(function($) {

var counter = 0,
    expando = '__' + (+new Date),
    get = function() {
        return 'uniq' + ++counter;
    };

/**
 * Makes unique ID
 * @param {Object} [obj] Object that needs to be identified
 * @param {Boolean} [onlyGet=false] Return a unique value only if it had already been assigned before
 * @returns {String} ID
 */
$.identify = function(obj, onlyGet) {

    if(!obj) return get();

    var key = 'uniqueID' in obj? 'uniqueID' : expando; // Use when possible. native uniqueID for elements in IE

    return onlyGet || key in obj?
        obj[key] :
        obj[key] = get();

};

})(jQuery);
/* ../../../../../libs/bem-bl/blocks-common/i-jquery/__identify/i-jquery__identify.js end */
;
/* ../../../../../libs/bem-bl/blocks-common/i-jquery/__is-empty-object/i-jquery__is-empty-object.js begin */
(function($) {

$.isEmptyObject || ($.isEmptyObject = function(obj) {
        for(var i in obj) return false;
        return true;
    });

})(jQuery);

/* ../../../../../libs/bem-bl/blocks-common/i-jquery/__is-empty-object/i-jquery__is-empty-object.js end */
;
/* ../../../../../libs/bem-bl/blocks-common/i-jquery/__debounce/i-jquery__debounce.js begin */
/**
 * Debounce and throttle function's decorator plugin 1.0.6
 *
 * Copyright (c) 2009 Filatov Dmitry (alpha@zforms.ru)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

(function($) {

$.extend({

    debounce : function(fn, timeout, invokeAsap, ctx) {

        if(arguments.length == 3 && typeof invokeAsap != 'boolean') {
            ctx = invokeAsap;
            invokeAsap = false;
        }

        var timer;

        return function() {

            var args = arguments;
            ctx = ctx || this;

            invokeAsap && !timer && fn.apply(ctx, args);

            clearTimeout(timer);

            timer = setTimeout(function() {
                invokeAsap || fn.apply(ctx, args);
                timer = null;
            }, timeout);

        };

    },

    throttle : function(fn, timeout, ctx) {

        var timer, args, needInvoke;

        return function() {

            args = arguments;
            needInvoke = true;
            ctx = ctx || this;

            timer || (function() {
                if(needInvoke) {
                    fn.apply(ctx, args);
                    needInvoke = false;
                    timer = setTimeout(arguments.callee, timeout);
                }
                else {
                    timer = null;
                }
            })();

        };

    }

});

})(jQuery);
/* ../../../../../libs/bem-bl/blocks-common/i-jquery/__debounce/i-jquery__debounce.js end */
;
/* ../../../../../libs/bem-bl/blocks-common/i-jquery/__observable/i-jquery__observable.js begin */
/**
 * Observable plugin
 *
 * Copyright (c) 2010 Filatov Dmitry (alpha@zforms.ru)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * @version 1.0.0
 * @requires $.identify
 * @requires $.inherit
 */

(function($) {

var storageExpando = '__' + (+new Date) + 'storage',
    getFnId = function(fn, ctx) {
        return $.identify(fn) + (ctx? $.identify(ctx) : '');
    },
    Observable = /** @lends $.observable.prototype */{

        /**
         * Builds full event name
         * @protected
         * @param {String} e Event type
         * @returns {String}
         */
        buildEventName : function(e) {

            return e;

        },

        /**
         * Adding event handler
         * @param {String} e Event type
         * @param {Object} [data] Additional data that the handler gets as e.data
         * @param {Function} fn Handler
         * @param {Object} [ctx] Handler context
         * @returns {$.observable}
         */
        on : function(e, data, fn, ctx, _special) {

            if(typeof e == 'string') {
                if($.isFunction(data)) {
                    ctx = fn;
                    fn = data;
                    data = undefined;
                }

                var id = getFnId(fn, ctx),
                    storage = this[storageExpando] || (this[storageExpando] = {}),
                    eList = e.split(' '),
                    i = 0,
                    eStorage;

                while(e = eList[i++]) {
                    e = this.buildEventName(e);
                    eStorage = storage[e] || (storage[e] = { ids : {}, list : {} });

                    if(!(id in eStorage.ids)) {
                        var list = eStorage.list,
                            item = { fn : fn, data : data, ctx : ctx, special : _special };
                        if(list.last) {
                            list.last.next = item;
                            item.prev = list.last;
                        } else {
                            list.first = item;
                        }

                        eStorage.ids[id] = list.last = item;
                    }
                }
            } else {
                var _this = this;
                $.each(e, function(e, fn) {
                    _this.on(e, fn, data, _special);
                });
            }

            return this;

        },

        onFirst : function(e, data, fn, ctx) {

            return this.on(e, data, fn, ctx, { one : true });

        },

        /**
         * Removing event handler(s)
         * @param {String} [e] Event type
         * @param {Function} [fn] Handler
         * @param {Object} [ctx] Handler context
         * @returns {$.observable}
         */
        un : function(e, fn, ctx) {

            if(typeof e == 'string' || typeof e == 'undefined') {
                var storage = this[storageExpando];
                if(storage) {
                    if(e) { // if event type was passed
                        var eList = e.split(' '),
                            i = 0,
                            eStorage;
                        while(e = eList[i++]) {
                            e = this.buildEventName(e);
                            if(eStorage = storage[e]) {
                                if(fn) {  // if specific handler was passed
                                    var id = getFnId(fn, ctx),
                                        ids = eStorage.ids;
                                    if(id in ids) {
                                        var list = eStorage.list,
                                            item = ids[id],
                                            prev = item.prev,
                                            next = item.next;

                                        if(prev) {
                                            prev.next = next;
                                        }
                                        else if(item === list.first) {
                                            list.first = next;
                                        }

                                        if(next) {
                                            next.prev = prev;
                                        }
                                        else if(item === list.last) {
                                            list.last = prev;
                                        }

                                        delete ids[id];
                                    }
                                } else {
                                    delete this[storageExpando][e];
                                }
                            }
                        }
                    } else {
                        delete this[storageExpando];
                    }
                }
            } else {
                var _this = this;
                $.each(e, function(e, fn) {
                    _this.un(e, fn, ctx);
                });
            }

            return this;

        },

        /**
         * Fires event handlers
         * @param {String|$.Event} e Event
         * @param {Object} [data] Additional data
         * @returns {$.observable}
         */
        trigger : function(e, data) {

            var _this = this,
                storage = _this[storageExpando],
                rawType;

            typeof e === 'string'?
                e = $.Event(_this.buildEventName(rawType = e)) :
                e.type = _this.buildEventName(rawType = e.type);

            e.target || (e.target = _this);

            if(storage && (storage = storage[e.type])) {
                var item = storage.list.first,
                    ret;
                while(item) {
                    e.data = item.data;
                    ret = item.fn.call(item.ctx || _this, e, data);
                    if(typeof ret !== 'undefined') {
                        e.result = ret;
                        if(ret === false) {
                            e.preventDefault();
                            e.stopPropagation();
                        }
                    }

                    item.special && item.special.one &&
                        _this.un(rawType, item.fn, item.ctx);
                    item = item.next;
                }
            }

            return this;

        }

    };

$.observable = $.inherit(Observable, Observable);

})(jQuery);
/* ../../../../../libs/bem-bl/blocks-common/i-jquery/__observable/i-jquery__observable.js end */
;
/* ../../../../../libs/bem-bl/blocks-common/i-bem/i-bem.js begin */
/** @requires jquery.inherit */
/** @requires jquery.isEmptyObject */
/** @requires jquery.identify */
/** @requires jquery.observable */

(function($, undefined) {

/**
 * Storage for deferred functions
 * @private
 * @type Array
 */
var afterCurrentEventFns = [],

/**
 * Storage for block declarations (hash by block name)
 * @private
 * @type Object
 */
    blocks = {},

/**
 * Communication channels
 * @static
 * @private
 * @type Object
 */
    channels = {};

/**
 * Builds the name of the handler method for setting a modifier
 * @static
 * @private
 * @param {String} elemName Element name
 * @param {String} modName Modifier name
 * @param {String} modVal Modifier value
 * @returns {String}
 */
function buildModFnName(elemName, modName, modVal) {

    return (elemName? '__elem_' + elemName : '') +
           '__mod' +
           (modName? '_' + modName : '') +
           (modVal? '_' + modVal : '');

}

/**
 * Transforms a hash of modifier handlers to methods
 * @static
 * @private
 * @param {Object} modFns
 * @param {Object} props
 * @param {String} [elemName]
 */
function modFnsToProps(modFns, props, elemName) {

    $.isFunction(modFns)?
        (props[buildModFnName(elemName, '*', '*')] = modFns) :
        $.each(modFns, function(modName, modFn) {
            $.isFunction(modFn)?
                (props[buildModFnName(elemName, modName, '*')] = modFn) :
                $.each(modFn, function(modVal, modFn) {
                    props[buildModFnName(elemName, modName, modVal)] = modFn;
                });
        });

}

function buildCheckMod(modName, modVal) {

    return modVal?
        Array.isArray(modVal)?
            function(block) {
                var i = 0, len = modVal.length;
                while(i < len)
                    if(block.hasMod(modName, modVal[i++]))
                        return true;
                return false;
            } :
            function(block) {
                return block.hasMod(modName, modVal);
            } :
        function(block) {
            return block.hasMod(modName);
        };

}

/** @namespace */
this.BEM = $.inherit($.observable, /** @lends BEM.prototype */ {

    /**
     * @class Base block for creating BEM blocks
     * @constructs
     * @private
     * @param {Object} mods Block modifiers
     * @param {Object} params Block parameters
     * @param {Boolean} [initImmediately=true]
     */
    __constructor : function(mods, params, initImmediately) {

        var _this = this;

        /**
         * Cache of block modifiers
         * @private
         * @type Object
         */
        _this._modCache = mods || {};

        /**
         * Current modifiers in the stack
         * @private
         * @type Object
         */
        _this._processingMods = {};

        /**
         * The block's parameters, taking into account the defaults
         * @protected
         * @type Object
         */
        _this._params = params; // это нужно для правильной сборки параметров у блока из нескольких нод
        _this.params = null;

        initImmediately !== false?
            _this._init() :
            _this.afterCurrentEvent(function() {
                _this._init();
            });

    },

    /**
     * Initializes the block
     * @private
     */
    _init : function() {

        if(!this._initing && !this.hasMod('js', 'inited')) {
            this._initing = true;

            if(!this.params) {
                this.params = $.extend(this.getDefaultParams(), this._params);
                delete this._params;
            }

            this.setMod('js', 'inited');
            delete this._initing;
            this.hasMod('js', 'inited') && this.trigger('init');
        }

        return this;

    },

    /**
     * Changes the context of the function being passed
     * @protected
     * @param {Function} fn
     * @param {Object} [ctx=this] Context
     * @returns {Function} Function with a modified context
     */
    changeThis : function(fn, ctx) {

        return fn.bind(ctx || this);

    },

    /**
     * Executes the function in the context of the block, after the "current event"
     * @protected
     * @param {Function} fn
     * @param {Object} [ctx] Context
     */
    afterCurrentEvent : function(fn, ctx) {

        this.__self.afterCurrentEvent(this.changeThis(fn, ctx));

    },

    /**
     * Executes the block's event handlers and live event handlers
     * @protected
     * @param {String} e Event name
     * @param {Object} [data] Additional information
     * @returns {BEM}
     */
    trigger : function(e, data) {

        this
            .__base(e = this.buildEvent(e), data)
            .__self.trigger(e, data);

        return this;

    },

    buildEvent : function(e) {

        typeof e == 'string' && (e = $.Event(e));
        e.block = this;

        return e;

    },

    /**
     * Checks whether a block or nested element has a modifier
     * @protected
     * @param {Object} [elem] Nested element
     * @param {String} modName Modifier name
     * @param {String} [modVal] Modifier value
     * @returns {Boolean}
     */
    hasMod : function(elem, modName, modVal) {

        var len = arguments.length,
            invert = false;

        if(len == 1) {
            modVal = '';
            modName = elem;
            elem = undefined;
            invert = true;
        }
        else if(len == 2) {
            if(typeof elem == 'string') {
                modVal = modName;
                modName = elem;
                elem = undefined;
            }
            else {
                modVal = '';
                invert = true;
            }
        }

        var res = this.getMod(elem, modName) === modVal;
        return invert? !res : res;

    },

    /**
     * Returns the value of the modifier of the block/nested element
     * @protected
     * @param {Object} [elem] Nested element
     * @param {String} modName Modifier name
     * @returns {String} Modifier value
     */
    getMod : function(elem, modName) {

        var type = typeof elem;
        if(type === 'string' || type === 'undefined') { // elem either omitted or undefined
            modName = elem || modName;
            var modCache = this._modCache;
            return modName in modCache?
                modCache[modName] :
                modCache[modName] = this._extractModVal(modName);
        }

        return this._getElemMod(modName, elem);

    },

    /**
     * Returns the value of the modifier of the nested element
     * @private
     * @param {String} modName Modifier name
     * @param {Object} elem Nested element
     * @param {Object} [elem] Nested element name
     * @returns {String} Modifier value
     */
    _getElemMod : function(modName, elem, elemName) {

        return this._extractModVal(modName, elem, elemName);

    },

    /**
     * Returns values of modifiers of the block/nested element
     * @protected
     * @param {Object} [elem] Nested element
     * @param {String} [modName1, ..., modNameN] Modifier names
     * @returns {Object} Hash of modifier values
     */
    getMods : function(elem) {

        var hasElem = elem && typeof elem != 'string',
            _this = this,
            modNames = [].slice.call(arguments, hasElem? 1 : 0),
            res = _this._extractMods(modNames, hasElem? elem : undefined);

        if(!hasElem) { // caching
            modNames.length?
                modNames.forEach(function(name) {
                    _this._modCache[name] = res[name];
                }):
                _this._modCache = res;
        }

        return res;

    },

    /**
     * Sets the modifier for a block/nested element
     * @protected
     * @param {Object} [elem] Nested element
     * @param {String} modName Modifier name
     * @param {String} modVal Modifier value
     * @returns {BEM}
     */
    setMod : function(elem, modName, modVal) {

        if(typeof modVal == 'undefined') {
            modVal = modName;
            modName = elem;
            elem = undefined;
        }

        var _this = this;

        if(!elem || elem[0]) {

            var modId = (elem && elem[0]? $.identify(elem[0]) : '') + '_' + modName;

            if(this._processingMods[modId]) return _this;

            var elemName,
                curModVal = elem?
                    _this._getElemMod(modName, elem, elemName = _this.__self._extractElemNameFrom(elem)) :
                    _this.getMod(modName);

            if(curModVal === modVal) return _this;

            this._processingMods[modId] = true;

            var needSetMod = true,
                modFnParams = [modName, modVal, curModVal];

            elem && modFnParams.unshift(elem);

            [['*', '*'], [modName, '*'], [modName, modVal]].forEach(function(mod) {
                needSetMod = _this._callModFn(elemName, mod[0], mod[1], modFnParams) !== false && needSetMod;
            });

            !elem && needSetMod && (_this._modCache[modName] = modVal);

            needSetMod && _this._afterSetMod(modName, modVal, curModVal, elem, elemName);

            delete this._processingMods[modId];
        }

        return _this;

    },

    /**
     * Function after successfully changing the modifier of the block/nested element
     * @protected
     * @param {String} modName Modifier name
     * @param {String} modVal Modifier value
     * @param {String} oldModVal Old modifier value
     * @param {Object} [elem] Nested element
     * @param {String} [elemName] Element name
     */
    _afterSetMod : function(modName, modVal, oldModVal, elem, elemName) {},

    /**
     * Sets a modifier for a block/nested element, depending on conditions.
     * If the condition parameter is passed: when true, modVal1 is set; when false, modVal2 is set.
     * If the condition parameter is not passed: modVal1 is set if modVal2 was set, or vice versa.
     * @protected
     * @param {Object} [elem] Nested element
     * @param {String} modName Modifier name
     * @param {String} modVal1 First modifier value
     * @param {String} [modVal2] Second modifier value
     * @param {Boolean} [condition] Condition
     * @returns {BEM}
     */
    toggleMod : function(elem, modName, modVal1, modVal2, condition) {

        if(typeof elem == 'string') { // if this is a block
            condition = modVal2;
            modVal2 = modVal1;
            modVal1 = modName;
            modName = elem;
            elem = undefined;
        }
        if(typeof modVal2 == 'undefined') {
            modVal2 = '';
        } else if(typeof modVal2 == 'boolean') {
            condition = modVal2;
            modVal2 = '';
        }

        var modVal = this.getMod(elem, modName);
        (modVal == modVal1 || modVal == modVal2) &&
            this.setMod(
                elem,
                modName,
                typeof condition === 'boolean'?
                    (condition? modVal1 : modVal2) :
                    this.hasMod(elem, modName, modVal1)? modVal2 : modVal1);

        return this;

    },

    /**
     * Removes a modifier from a block/nested element
     * @protected
     * @param {Object} [elem] Nested element
     * @param {String} modName Modifier name
     * @returns {BEM}
     */
    delMod : function(elem, modName) {

        if(!modName) {
            modName = elem;
            elem = undefined;
        }

        return this.setMod(elem, modName, '');

    },

    /**
     * Executes handlers for setting modifiers
     * @private
     * @param {String} elemName Element name
     * @param {String} modName Modifier name
     * @param {String} modVal Modifier value
     * @param {Array} modFnParams Handler parameters
     */
    _callModFn : function(elemName, modName, modVal, modFnParams) {

        var modFnName = buildModFnName(elemName, modName, modVal);
        return this[modFnName]?
           this[modFnName].apply(this, modFnParams) :
           undefined;

    },

    /**
     * Retrieves the value of the modifier
     * @private
     * @param {String} modName Modifier name
     * @param {Object} [elem] Element
     * @returns {String} Modifier value
     */
    _extractModVal : function(modName, elem) {

        return '';

    },

    /**
     * Retrieves name/value for a list of modifiers
     * @private
     * @param {Array} modNames Names of modifiers
     * @param {Object} [elem] Element
     * @returns {Object} Hash of modifier values by name
     */
    _extractMods : function(modNames, elem) {

        return {};

    },

    /**
     * Returns a named communication channel
     * @param {String} [id='default'] Channel ID
     * @param {Boolean} [drop=false] Destroy the channel
     * @returns {$.observable|undefined} Communication channel
     */
    channel : function(id, drop) {

        return this.__self.channel(id, drop);

    },

    /**
     * Returns a block's default parameters
     * @returns {Object}
     */
    getDefaultParams : function() {

        return {};

    },

    /**
     * Helper for cleaning up block properties
     * @param {Object} [obj=this]
     */
    del : function(obj) {

        var args = [].slice.call(arguments);
        typeof obj == 'string' && args.unshift(this);
        this.__self.del.apply(this.__self, args);
        return this;

	},

    /**
     * Deletes a block
     */
    destruct : function() {}

}, /** @lends BEM */{

    _name : 'i-bem',

    /**
     * Storage for block declarations (hash by block name)
     * @static
     * @protected
     * @type Object
     */
    blocks : blocks,

    /**
     * Declares blocks and creates a block class
     * @static
     * @protected
     * @param {String|Object} decl Block name (simple syntax) or description
     * @param {String} decl.block|decl.name Block name
     * @param {String} [decl.baseBlock] Name of the parent block
     * @param {String} [decl.modName] Modifier name
     * @param {String} [decl.modVal] Modifier value
     * @param {Object} [props] Methods
     * @param {Object} [staticProps] Static methods
     */
    decl : function(decl, props, staticProps) {

        if(typeof decl == 'string')
            decl = { block : decl };
        else if(decl.name) {
            decl.block = decl.name;
        }

        if(decl.baseBlock && !blocks[decl.baseBlock])
            throw('baseBlock "' + decl.baseBlock + '" for "' + decl.block + '" is undefined');

        props || (props = {});

        if(props.onSetMod) {
            modFnsToProps(props.onSetMod, props);
            delete props.onSetMod;
        }

        if(props.onElemSetMod) {
            $.each(props.onElemSetMod, function(elemName, modFns) {
                modFnsToProps(modFns, props, elemName);
            });
            delete props.onElemSetMod;
        }

        var baseBlock = blocks[decl.baseBlock || decl.block] || this;

        if(decl.modName) {
            var checkMod = buildCheckMod(decl.modName, decl.modVal);
            $.each(props, function(name, prop) {
                $.isFunction(prop) &&
                    (props[name] = function() {
                        var method;
                        if(checkMod(this)) {
                            method = prop;
                        } else {
                            var baseMethod = baseBlock.prototype[name];
                            baseMethod && baseMethod !== props[name] &&
                                (method = this.__base);
                        }
                        return method?
                            method.apply(this, arguments) :
                            undefined;
                    });
            });
        }

        if(staticProps && typeof staticProps.live === 'boolean') {
            var live = staticProps.live;
            staticProps.live = function() {
                return live;
            };
        }

        var block;
        decl.block == baseBlock._name?
            // makes a new "live" if the old one was already executed
            (block = $.inheritSelf(baseBlock, props, staticProps))._processLive(true) :
            (block = blocks[decl.block] = $.inherit(baseBlock, props, staticProps))._name = decl.block;

        return block;

    },

    /**
     * Processes a block's live properties
     * @private
     * @param {Boolean} [heedLive=false] Whether to take into account that the block already processed its live properties
     * @returns {Boolean} Whether the block is a live block
     */
    _processLive : function(heedLive) {

        return false;

    },

    /**
     * Factory method for creating an instance of the block named
     * @static
     * @param {String|Object} block Block name or description
     * @param {Object} [params] Block parameters
     * @returns {BEM}
     */
    create : function(block, params) {

        typeof block == 'string' && (block = { block : block });

        return new blocks[block.block](block.mods, params);

    },

    /**
     * Returns the name of the current block
     * @static
     * @protected
     * @returns {String}
     */
    getName : function() {

        return this._name;

    },

    /**
     * Retrieves the name of an element nested in a block
     * @static
     * @private
     * @param {Object} elem Nested element
     * @returns {String|undefined}
     */
    _extractElemNameFrom : function(elem) {},

    /**
     * Adds a function to the queue for executing after the "current event"
     * @static
     * @protected
     * @param {Function} fn
     * @param {Object} ctx
     */
    afterCurrentEvent : function(fn, ctx) {

        afterCurrentEventFns.push({ fn : fn, ctx : ctx }) == 1 &&
            setTimeout(this._runAfterCurrentEventFns, 0);

    },

    /**
     * Executes the queue
     * @private
     */
    _runAfterCurrentEventFns : function() {

        var fnsLen = afterCurrentEventFns.length;
        if(fnsLen) {
            var fnObj,
                fnsCopy = afterCurrentEventFns.splice(0, fnsLen);

            while(fnObj = fnsCopy.shift()) fnObj.fn.call(fnObj.ctx || this);
        }

    },

    /**
     * Changes the context of the function being passed
     * @protected
     * @param {Function} fn
     * @param {Object} ctx Context
     * @returns {Function} Function with a modified context
     */
    changeThis : function(fn, ctx) {

        return fn.bind(ctx || this);

    },

    /**
     * Helper for cleaning out properties
     * @param {Object} [obj=this]
     */
    del : function(obj) {

        var delInThis = typeof obj == 'string',
            i = delInThis? 0 : 1,
            len = arguments.length;
        delInThis && (obj = this);

        while(i < len) delete obj[arguments[i++]];

        return this;

	},

    /**
     * Returns/destroys a named communication channel
     * @param {String} [id='default'] Channel ID
     * @param {Boolean} [drop=false] Destroy the channel
     * @returns {$.observable|undefined} Communication channel
     */
    channel : function(id, drop) {

        if(typeof id == 'boolean') {
            drop = id;
            id = undefined;
        }

        id || (id = 'default');

        if(drop) {
            if(channels[id]) {
                channels[id].un();
                delete channels[id];
            }
            return;
        }

        return channels[id] || (channels[id] = new $.observable());

    }

});

})(jQuery);
/* ../../../../../libs/bem-bl/blocks-common/i-bem/i-bem.js end */
;
/* ../../../../../libs/bem-bl/blocks-common/i-ecma/__object/i-ecma__object.js begin */
(function() {

/**
 * Возвращает массив свойств объекта
 * @param {Object} obj объект
 * @returns {Array}
 */
Object.keys || (Object.keys = function(obj) {
    var res = [];

    for(var i in obj) obj.hasOwnProperty(i) &&
        res.push(i);

    return res;
});

})();
/* ../../../../../libs/bem-bl/blocks-common/i-ecma/__object/i-ecma__object.js end */
;
/* ../../../../../libs/bem-bl/blocks-common/i-ecma/__array/i-ecma__array.js begin */
(function() {

var ptp = Array.prototype,
    toStr = Object.prototype.toString,
    methods = {

        /**
         * Finds the index of an element in an array
         * @param {Object} item
         * @param {Number} [fromIdx] Starting from index (length - 1 - fromIdx, if fromIdx < 0)
         * @returns {Number} Element index or -1, if not found
         */
        indexOf : function(item, fromIdx) {

            fromIdx = +(fromIdx || 0);

            var t = this, len = t.length;

            if(len > 0 && fromIdx < len) {
                fromIdx = fromIdx < 0? Math.ceil(fromIdx) : Math.floor(fromIdx);
                fromIdx < -len && (fromIdx = 0);
                fromIdx < 0 && (fromIdx = fromIdx + len);

                while(fromIdx < len) {
                    if(fromIdx in t && t[fromIdx] === item)
                        return fromIdx;
                    ++fromIdx;
                }
            }

            return -1;

        },

        /**
         * Calls the callback for each element
         * @param {Function} callback Called for each element
         * @param {Object} [ctx=null] Callback context
         */
        forEach : function(callback, ctx) {

            var i = -1, t = this, len = t.length;
            while(++i < len) i in t &&
                (ctx? callback.call(ctx, t[i], i, t) : callback(t[i], i, t));

        },

        /**
         * Creates array B from array A so that B[i] = callback(A[i])
         * @param {Function} callback Called for each element
         * @param {Object} [ctx=null] Callback context
         * @returns {Array}
         */
        map : function(callback, ctx) {

            var i = -1, t = this, len = t.length,
                res = new Array(len);

            while(++i < len) i in t &&
                (res[i] = ctx? callback.call(ctx, t[i], i, t) : callback(t[i], i, t));

            return res;

        },

        /**
         * Creates an array containing only the elements from the source array that the callback returns true for. 
         * @param {Function} callback Called for each element
         * @param {Object} [ctx] Callback context
         * @returns {Array}
         */
        filter : function(callback, ctx) {

            var i = -1, t = this, len = t.length,
                res = [];

            while(++i < len) i in t &&
                (ctx? callback.call(ctx, t[i], i, t) : callback(t[i], i, t)) && res.push(t[i]);

            return res;

        },

        /**
         * Wraps the array using an accumulator
         * @param {Function} callback Called for each element
         * @param {Object} [initialVal] Initial value of the accumulator
         * @returns {Object} Accumulator
         */
        reduce : function(callback, initialVal) {

            var i = -1, t = this, len = t.length,
                res;

            if(arguments.length < 2) {
                while(++i < len) {
                    if(i in t) {
                        res = t[i];
                        break;
                    }
                }
            }
            else {
                res = initialVal;
            }

            while(++i < len) i in t &&
                (res = callback(res, t[i], i, t));

            return res;

        },

        /**
         * Checks whether at least one element in the array meets the condition in the callback
         * @param {Function} callback
         * @param {Object} [ctx=this] Callback context
         * @returns {Boolean}
         */
        some : function(callback, ctx) {

            var i = -1, t = this, len = t.length;

            while(++i < len)
                if(i in t && (ctx ? callback.call(ctx, t[i], i, t) : callback(t[i], i, t)))
                    return true;

            return false;

        },

        /**
         * Checks whether every element in the array meets the condition in the callback
         * @param {Function} callback
         * @param {Object} [ctx=this] Context of the callback call
         * @returns {Boolean}
         */
        every : function(callback, ctx) {

            var i = -1, t = this, len = t.length;

            while(++i < len)
                if(i in t && !(ctx ? callback.call(ctx, t[i], i, t) : callback(t[i], i, t)))
                    return false;

            return true;

        }

    };

for(var name in methods)
    ptp[name] || (ptp[name] = methods[name]);

Array.isArray || (Array.isArray = function(obj) {
    return toStr.call(obj) === '[object Array]';
});

})();
/* ../../../../../libs/bem-bl/blocks-common/i-ecma/__array/i-ecma__array.js end */
;
/* ../../../../../libs/bem-bl/blocks-common/i-ecma/__function/i-ecma__function.js begin */
(function() {

var slice = Array.prototype.slice;

Function.prototype.bind || (Function.prototype.bind = function(ctx) {

    var fn = this,
        args = slice.call(arguments, 1);

    return function () {
        return fn.apply(ctx, args.concat(slice.call(arguments)));
    }

});

})();
/* ../../../../../libs/bem-bl/blocks-common/i-ecma/__function/i-ecma__function.js end */
;
/* ../../../../../libs/bem-bl/blocks-common/i-bem/__internal/i-bem__internal.js begin */
/** @fileOverview Module for internal BEM helpers */
/** @requires BEM */

(function(BEM, $, undefined) {

/**
 * Separator for modifiers and their values
 * @const
 * @type String
 */
var MOD_DELIM = '_',

/**
 * Separator between names of a block and a nested element
 * @const
 * @type String
 */
    ELEM_DELIM = '__',

/**
 * Pattern for acceptable element and modifier names
 * @const
 * @type String
 */
    NAME_PATTERN = '[a-zA-Z0-9-]+';

function buildModPostfix(modName, modVal, buffer) {

    buffer.push(MOD_DELIM, modName, MOD_DELIM, modVal);

}

function buildBlockClass(name, modName, modVal, buffer) {

    buffer.push(name);
    modVal && buildModPostfix(modName, modVal, buffer);

}

function buildElemClass(block, name, modName, modVal, buffer) {

    buildBlockClass(block, undefined, undefined, buffer);
    buffer.push(ELEM_DELIM, name);
    modVal && buildModPostfix(modName, modVal, buffer);

}

BEM.INTERNAL = {

    NAME_PATTERN : NAME_PATTERN,

    MOD_DELIM : MOD_DELIM,
    ELEM_DELIM : ELEM_DELIM,

    buildModPostfix : function(modName, modVal, buffer) {

        var res = buffer || [];
        buildModPostfix(modName, modVal, res);
        return buffer? res : res.join('');

    },

    /**
     * Builds the class of a block or element with a modifier
     * @private
     * @param {String} block Block name
     * @param {String} [elem] Element name
     * @param {String} [modName] Modifier name
     * @param {String} [modVal] Modifier value
     * @param {Array} [buffer] Buffer
     * @returns {String|Array} Class or buffer string (depending on whether the buffer parameter is present)
     */
    buildClass : function(block, elem, modName, modVal, buffer) {

        var typeOf = typeof modName;
        if(typeOf == 'string') {
            if(typeof modVal != 'string' && typeof modVal != 'number') {
                buffer = modVal;
                modVal = modName;
                modName = elem;
                elem = undefined;
            }
        } else if(typeOf != 'undefined') {
            buffer = modName;
            modName = undefined;
        } else if(elem && typeof elem != 'string') {
            buffer = elem;
            elem = undefined;
        }

        if(!(elem || modName || buffer)) { // оптимизация для самого простого случая
            return block;
        }

        var res = buffer || [];

        elem?
            buildElemClass(block, elem, modName, modVal, res) :
            buildBlockClass(block, modName, modVal, res);

        return buffer? res : res.join('');

    },

    /**
     * Builds full classes for a buffer or element with modifiers
     * @private
     * @param {String} block Block name
     * @param {String} [elem] Element name
     * @param {Object} [mods] Modifiers
     * @param {Array} [buffer] Buffer
     * @returns {String|Array} Class or buffer string (depending on whether the buffer parameter is present)
     */
    buildClasses : function(block, elem, mods, buffer) {

        if(elem && typeof elem != 'string') {
            buffer = mods;
            mods = elem;
            elem = undefined;
        }

        var res = buffer || [];

        elem?
            buildElemClass(block, elem, undefined, undefined, res) :
            buildBlockClass(block, undefined, undefined, res);

        mods && $.each(mods, function(modName, modVal) {
            if(modVal) {
                res.push(' ');
                elem?
                    buildElemClass(block, elem, modName, modVal, res) :
                    buildBlockClass(block, modName, modVal, res);
            }
        });

        return buffer? res : res.join('');

        /*var typeOf = typeof elem;
        if(typeOf != 'string' && typeOf != 'undefined') {
            buffer = mods;
            mods = elem;
            elem = undefined;
        }
        if($.isArray(mods)) {
            buffer = mods;
            mods = undefined;
        }

        var res = buffer || [];
        buildClasses(block, elem, mods, res);
        return buffer? res : res.join('');*/

    }

}

})(BEM, jQuery);
/* ../../../../../libs/bem-bl/blocks-common/i-bem/__internal/i-bem__internal.js end */
;
/* ../../../../../libs/bem-bl/blocks-common/i-bem/__dom/i-bem__dom.js begin */
/** @requires BEM */
/** @requires BEM.INTERNAL */

(function(BEM, $, undefined) {

var win = $(window),
    doc = $(document),

/**
 * Storage for DOM elements by unique key
 * @private
 * @type Object
 */
    uniqIdToDomElems = {},

/**
 * Storage for blocks by unique key
 * @static
 * @private
 * @type Object
 */
    uniqIdToBlock = {},

/**
 * Storage for block parameters
 * @private
 * @type Object
 */
    domElemToParams = {},

/**
 * Storage for liveCtx event handlers
 * @private
 * @type Object
 */
    liveEventCtxStorage = {},

/**
 * Storage for liveClass event handlers
 * @private
 * @type Object
 */
    liveClassEventStorage = {},

    blocks = BEM.blocks,

    INTERNAL = BEM.INTERNAL,

    NAME_PATTERN = INTERNAL.NAME_PATTERN,

    MOD_DELIM = INTERNAL.MOD_DELIM,
    ELEM_DELIM = INTERNAL.ELEM_DELIM,

    buildModPostfix = INTERNAL.buildModPostfix,
    buildClass = INTERNAL.buildClass;

/**
 * Initializes blocks on a DOM element
 * @private
 * @param {jQuery} domElem DOM element
 * @param {String} uniqInitId ID of the "initialization wave"
 */
function init(domElem, uniqInitId) {

    var domNode = domElem[0];
    $.each(getParams(domNode), function(blockName, params) {
        processParams(params, domNode, blockName, uniqInitId);
        var block = uniqIdToBlock[params.uniqId];
        if(block) {
            if(block.domElem.index(domNode) < 0) {
                block.domElem = block.domElem.add(domElem);
                $.extend(block._params, params);
            }
        } else {
            initBlock(blockName, domElem, params);
        }
    });

}

/**
 * Initializes a specific block on a DOM element, or returns the existing block if it was already created
 * @private
 * @param {String} blockName Block name
 * @param {jQuery} domElem DOM element
 * @param {Object} [params] Initialization parameters
 * @param {Boolean} [forceLive] Force live initialization
 * @param {Function} [callback] Handler to call after complete initialization
 */
function initBlock(blockName, domElem, params, forceLive, callback) {

    if(typeof params == 'boolean') {
        callback = forceLive;
        forceLive = params;
        params = undefined;
    }

    var domNode = domElem[0];
    params = processParams(params || getParams(domNode)[blockName], domNode, blockName);

    var uniqId = params.uniqId;
    if(uniqIdToBlock[uniqId]) {
        return uniqIdToBlock[uniqId]._init();
    }

    uniqIdToDomElems[uniqId] = uniqIdToDomElems[uniqId]?
        uniqIdToDomElems[uniqId].add(domElem) :
        domElem;

    var parentDomNode = domNode.parentNode;
    if(!parentDomNode || parentDomNode.nodeType === 11) { // jquery doesn't unique disconnected node
        $.unique(uniqIdToDomElems[uniqId]);
    }

    var blockClass = blocks[blockName] || DOM.decl(blockName, {}, { live : true });
    if(!(blockClass._liveInitable = !!blockClass._processLive()) || forceLive || params.live === false) {
        var block = new blockClass(uniqIdToDomElems[uniqId], params, !!forceLive);
        delete uniqIdToDomElems[uniqId];
        callback && callback.apply(block, Array.prototype.slice.call(arguments, 4));
        return block;
    }

}

/**
 * Processes and adds necessary block parameters
 * @private
 * @param {Object} params Initialization parameters
 * @param {HTMLElement} domNode DOM node
 * @param {String} blockName Block name
 * @param {String} [uniqInitId] ID of the "initialization wave"
 */
function processParams(params, domNode, blockName, uniqInitId) {

    (params || (params = {})).uniqId ||
        (params.uniqId = (params.id? blockName + '-id-' + params.id : $.identify()) + (uniqInitId || $.identify()));

    var domUniqId = $.identify(domNode),
        domParams = domElemToParams[domUniqId] || (domElemToParams[domUniqId] = {});

    domParams[blockName] || (domParams[blockName] = params);

    return params;

}

/**
 * Helper for searching for a DOM element using a selector inside the context, including the context itself
 * @private
 * @param {jQuery} ctx Context
 * @param {String} selector CSS selector
 * @param {Boolean} [excludeSelf=false] Exclude context from search
 * @returns {jQuery}
 */
function findDomElem(ctx, selector, excludeSelf) {

    var res = ctx.find(selector);
    return excludeSelf?
       res :
       res.add(ctx.filter(selector));

}

/**
 * Returns parameters of a block's DOM element
 * @private
 * @param {HTMLElement} domNode DOM node
 * @returns {Object}
 */
function getParams(domNode) {

    var uniqId = $.identify(domNode);
    return domElemToParams[uniqId] ||
           (domElemToParams[uniqId] = extractParams(domNode));

}

/**
 * Retrieves block parameters from a DOM element
 * @private
 * @param {HTMLElement} domNode DOM node
 * @returns {Object}
 */
function extractParams(domNode) {

    var fn = domNode.onclick || domNode.ondblclick;
    if(!fn && domNode.tagName.toLowerCase() == 'body') { // LEGO-2027 in FF onclick doesn't work on body
        var elem = $(domNode),
            attr = elem.attr('onclick') || elem.attr('ondblclick');
        attr && (fn = Function(attr));
    }
    return fn? fn() : {};

}

/**
 * Cleans up all the BEM storages associated with a DOM node
 * @private
 * @param {HTMLElement} domNode DOM node
 */
function cleanupDomNode(domNode) {

    delete domElemToParams[$.identify(domNode)];
    domNode.onclick = null;

}

/**
 * Uncople DOM node from the block. If this is the last node, then destroys the block.
 * @private
 * @param {BEM.DOM} block block
 * @param {HTMLElement} domNode DOM node
 */
function removeDomNodeFromBlock(block, domNode) {

    block.domElem.length === 1?
        block.destruct(true) :
        block.domElem = block.domElem.not(domNode);

}

/**
 * Returns a DOM node for calculating the window size in IE
 * @returns {HTMLElement}
 */
function getClientNode() {

    return doc[0][$.support.boxModel? 'documentElement' : 'body'];

}

/**
 * Returns a block on a DOM element and initializes it if necessary
 * @param {String} blockName Block name
 * @param {Object} params Block parameters
 * @returns {BEM}
 */
$.fn.bem = function(blockName, params) {
    return initBlock(blockName, this, params, true);
};

/**
 * @namespace
 * @name BEM.DOM
 */
var DOM = BEM.DOM = BEM.decl('i-bem__dom',/** @lends BEM.DOM.prototype */{
    /**
     * @class Base block for creating BEM blocks that have DOM representation
     * @constructs
     * @private
     * @param {jQuery} domElem DOM element that the block is created on
     * @param {Object} params Block parameters
     * @param {Boolean} [initImmediately=true]
     */
    __constructor : function(domElem, params, initImmediately) {

        var _this = this;

        /**
         * Block's DOM elements
         * @protected
         * @type jQuery
         */
        _this.domElem = domElem;

        /**
         * Cache for names of events on DOM elements
         * @private
         * @type Object
         */
        _this._eventNameCache = {};

        /**
         * Cache for elements
         * @private
         * @type Object
         */
        _this._elemCache = {};

        /**
         * Unique block ID
         * @private
         * @type String
         */
        uniqIdToBlock[_this._uniqId = params.uniqId || $.identify(_this)] = _this;

        /**
         * Flag for whether it's necessary to unbind from the document and window when destroying the block
         * @private
         * @type Boolean
         */
        _this._needSpecialUnbind = false;

        _this.__base(null, params, initImmediately);

    },

    /**
     * Finds blocks inside the current block or its elements (including context)
     * @protected
     * @param {String|jQuery} [elem] Block element
     * @param {String|Object} block Name or description (block,modName,modVal) of the block to find
     * @returns {BEM[]}
     */
    findBlocksInside : function(elem, block) {

        return this._findBlocks('find', elem, block);

    },

    /**
     * Finds the first block inside the current block or its elements (including context)
     * @protected
     * @param {String|jQuery} [elem] Block element
     * @param {String|Object} block Name or description (block,modName,modVal) of the block to find
     * @returns {BEM}
     */
    findBlockInside : function(elem, block) {

        return this._findBlocks('find', elem, block, true);

    },

    /**
     * Finds blocks outside the current block or its elements (including context)
     * @protected
     * @param {String|jQuery} [elem] Block element
     * @param {String|Object} block Name or description (block,modName,modVal) of the block to find
     * @returns {BEM[]}
     */
    findBlocksOutside : function(elem, block) {

        return this._findBlocks('parents', elem, block);

    },

    /**
     * Finds the first block outside the current block or its elements (including context)
     * @protected
     * @param {String|jQuery} [elem] Block element
     * @param {String|Object} block Name or description (block,modName,modVal) of the block to find
     * @returns {BEM}
     */
    findBlockOutside : function(elem, block) {

        return this._findBlocks('closest', elem, block)[0] || null;

    },

    /**
     * Finds blocks on DOM elements of the current block or its elements
     * @protected
     * @param {String|jQuery} [elem] Block element
     * @param {String|Object} block Name or description (block,modName,modVal) of the block to find
     * @returns {BEM[]}
     */
    findBlocksOn : function(elem, block) {

        return this._findBlocks('', elem, block);

    },

    /**
     * Finds the first block on DOM elements of the current block or its elements
     * @protected
     * @param {String|jQuery} [elem] Block element
     * @param {String|Object} block Name or description (block,modName,modVal) of the block to find
     * @returns {BEM}
     */
    findBlockOn : function(elem, block) {

        return this._findBlocks('', elem, block, true);

    },

    _findBlocks : function(select, elem, block, onlyFirst) {

        if(!block) {
            block = elem;
            elem = undefined;
        }

        var ctxElem = elem?
                (typeof elem == 'string'? this.findElem(elem) : elem) :
                this.domElem,
            isSimpleBlock = typeof block == 'string',
            blockName = isSimpleBlock? block : (block.block || block.blockName),
            selector = '.' +
                (isSimpleBlock?
                    buildClass(blockName) :
                    buildClass(blockName, block.modName, block.modVal)) +
                (onlyFirst? ':first' : ''),
            domElems = ctxElem.filter(selector);

        select && (domElems = domElems.add(ctxElem[select](selector)));

        if(onlyFirst) {
            return domElems[0]? initBlock(blockName, domElems.eq(0), true) : null;
        }

        var res = [],
            uniqIds = {};

        $.each(domElems, function(i, domElem) {
            var block = initBlock(blockName, $(domElem), true);
            if(!uniqIds[block._uniqId]) {
                uniqIds[block._uniqId] = true;
                res.push(block);
            }
        });

        return res;

    },

    /**
     * Adds an event handler for any DOM element
     * @protected
     * @param {jQuery} domElem DOM element where the event will be listened for
     * @param {String|Object} event Event name or event object
     * @param {Function} fn Handler function, which will be executed in the block's context
     * @returns {BEM}
     */
    bindToDomElem : function(domElem, event, fn) {

        var _this = this;

        fn?
            domElem.bind(
                _this._buildEventName(event),
                function(e) {
                    (e.data || (e.data = {})).domElem = $(this);
                    return fn.apply(_this, arguments);
                }
            ) :
            $.each(event, function(event, fn) {
                _this.bindToDomElem(domElem, event, fn);
            });

        return _this;

    },

    /**
     * Adds an event handler to the document
     * @protected
     * @param {String} event Event name
     * @param {Function} fn Handler function, which will be executed in the block's context
     * @returns {BEM}
     */
    bindToDoc : function(event, fn) {

        this._needSpecialUnbind = true;
        return this.bindToDomElem(doc, event, fn);

    },

    /**
     * Adds an event handler to the window
     * @protected
     * @param {String} event Event name
     * @param {Function} fn Handler function, which will be executed in the block's context
     * @returns {BEM}
     */
    bindToWin : function(event, fn) {

        var _fn = fn,
            currentHeight,
            currentWidth;

        if (event === 'resize') {

            fn = function() {

                var height = win.height(),
                    width = win.width();

                if (currentHeight !== height || currentWidth !== width) {

                    currentHeight = height;
                    currentWidth = width;

                    _fn.apply(this, arguments);

                }


            }

        }

        this._needSpecialUnbind = true;
        return this.bindToDomElem(win, event, fn);

    },

    /**
     * Adds an event handler to the block's main DOM elements or its nested elements
     * @protected
     * @param {jQuery|String} [elem] Element
     * @param {String} event Event name
     * @param {Function} fn Handler function, which will be executed in the block's context
     * @returns {BEM}
     */
    bindTo : function(elem, event, fn) {

        if(!event || $.isFunction(event)) { // if there is no element
            fn = event;
            event = elem;
            elem = this.domElem;
        } else if(typeof elem == 'string') {
            elem = this.elem(elem);
        }

        return this.bindToDomElem(elem, event, fn);

    },

    /**
     * Removes event handlers from any DOM element
     * @protected
     * @param {jQuery} domElem DOM element where the event was being listened for
     * @param {String} event Event name
     * @returns {BEM}
     */
    unbindFromDomElem : function(domElem, event) {

        domElem.unbind(this._buildEventName(event));
        return this;

    },

    /**
     * Removes event handler from document
     * @protected
     * @param {String} event Event name
     * @returns {BEM}
     */
    unbindFromDoc : function(event) {

        return this.unbindFromDomElem(doc, event);

    },

    /**
     * Removes event handler from window
     * @protected
     * @param {String} event Event name
     * @returns {BEM}
     */
    unbindFromWin : function(event) {

        return this.unbindFromDomElem(win, event);

    },

    /**
     * Removes event handlers from the block's main DOM elements or its nested elements
     * @protected
     * @param {jQuery|String} [elem] Nested element
     * @param {String} event Event name
     * @returns {BEM}
     */
    unbindFrom : function(elem, event) {

        if(!event) {
            event = elem;
            elem = this.domElem;
        } else if(typeof elem == 'string') {
            elem = this.elem(elem);
        }

        return this.unbindFromDomElem(elem, event);

    },

    /**
     * Builds a full name for an event
     * @private
     * @param {String} event Event name
     * @returns {String}
     */
    _buildEventName : function(event) {

        var _this = this;
        return event.indexOf(' ') > 1?
            event.split(' ').map(function(e) {
                return _this._buildOneEventName(e);
            }).join(' ') :
            _this._buildOneEventName(event);

    },

    /**
     * Builds a full name for a single event
     * @private
     * @param {String} event Event name
     * @returns {String}
     */
    _buildOneEventName : function(event) {

        var _this = this,
            eventNameCache = _this._eventNameCache;

        if(event in eventNameCache) return eventNameCache[event];

        var uniq = '.' + _this._uniqId;

        if(event.indexOf('.') < 0) return eventNameCache[event] = event + uniq;

        var lego = '.bem_' + _this.__self._name;

        return eventNameCache[event] = event.split('.').map(function(e, i) {
            return i == 0? e + lego : lego + '_' + e;
        }).join('') + uniq;

    },

    /**
     * Triggers block event handlers and live event handlers
     * @protected
     * @param {String} e Event name
     * @param {Object} [data] Additional information
     * @returns {BEM}
     */
    trigger : function(e, data) {

        this
            .__base(e = this.buildEvent(e), data)
            .domElem && this._ctxTrigger(e, data);

        return this;

    },

    _ctxTrigger : function(e, data) {

        var _this = this,
            storage = liveEventCtxStorage[_this.__self._buildCtxEventName(e.type)],
            ctxIds = {};

        storage && _this.domElem.each(function() {
            var ctx = this,
                counter = storage.counter;
            while(ctx && counter) {
                var ctxId = $.identify(ctx, true);
                if(ctxId) {
                    if(ctxIds[ctxId]) break;
                    var storageCtx = storage.ctxs[ctxId];
                    if(storageCtx) {
                        $.each(storageCtx, function(uniqId, handler) {
                            handler.fn.call(
                                handler.ctx || _this,
                                e,
                                data);
                        });
                        counter--;
                    }
                    ctxIds[ctxId] = true;
                }
                ctx = ctx.parentNode;
            }
        });

    },

    /**
     * Sets a modifier for a block/nested element
     * @protected
     * @param {jQuery} [elem] Nested element
     * @param {String} modName Modifier name
     * @param {String} modVal Modifier value
     * @returns {BEM}
     */
    setMod : function(elem, modName, modVal) {

        if(elem && typeof modVal != 'undefined' && elem.length > 1) {
            var _this = this;
            elem.each(function() {
                var item = $(this);
                item.__bemElemName = elem.__bemElemName;
                _this.setMod(item, modName, modVal);
            });
            return _this;
        }
        return this.__base(elem, modName, modVal);

    },

    /**
     * Retrieves modifier value from the DOM node's CSS class
     * @private
     * @param {String} modName Modifier name
     * @param {jQuery} [elem] Nested element
     * @param {String} [elemName] Name of the nested element
     * @returns {String} Modifier value
     */
    _extractModVal : function(modName, elem, elemName) {

        var domNode = (elem || this.domElem)[0],
            matches;

        domNode &&
            (matches = domNode.className
                .match(this.__self._buildModValRE(modName, elemName || elem)));

        return matches? matches[2] : '';

    },

    /**
     * Retrieves a name/value list of modifiers
     * @private
     * @param {Array} [modNames] Names of modifiers
     * @param {Object} [elem] Element
     * @returns {Object} Hash of modifier values by names
     */
    _extractMods : function(modNames, elem) {

        var res = {},
            extractAll = !modNames.length,
            countMatched = 0;

        ((elem || this.domElem)[0].className
            .match(this.__self._buildModValRE(
                '(' + (extractAll? NAME_PATTERN : modNames.join('|')) + ')',
                elem,
                'g')) || []).forEach(function(className) {
                    var iModVal = (className = className.trim()).lastIndexOf(MOD_DELIM),
                        iModName = className.substr(0, iModVal - 1).lastIndexOf(MOD_DELIM);
                    res[className.substr(iModName + 1, iModVal - iModName - 1)] = className.substr(iModVal + 1);
                    ++countMatched;
                });

        // empty modifier values are not reflected in classes; they must be filled with empty values
        countMatched < modNames.length && modNames.forEach(function(modName) {
            modName in res || (res[modName] = '');
        });

        return res;

    },

    /**
     * Sets a modifier's CSS class for a block's DOM element or nested element
     * @private
     * @param {String} modName Modifier name
     * @param {String} modVal Modifier value
     * @param {String} oldModVal Old modifier value
     * @param {jQuery} [elem] Element
     * @param {String} [elemName] Element name
     */
    _afterSetMod : function(modName, modVal, oldModVal, elem, elemName) {

        var _self = this.__self,
            classPrefix = _self._buildModClassPrefix(modName, elemName),
            classRE = _self._buildModValRE(modName, elemName),
            needDel = modVal === '';

        (elem || this.domElem).each(function() {
            var className = this.className;
            className.indexOf(classPrefix) > -1?
                this.className = className.replace(
                    classRE,
                    (needDel? '' : '$1' + classPrefix + modVal)) :
                needDel || $(this).addClass(classPrefix + modVal);
        });

        elemName && this
            .dropElemCache(elemName, modName, oldModVal)
            .dropElemCache(elemName, modName, modVal);

    },

    /**
     * Finds elements nested in a block
     * @protected
     * @param {String|jQuery} [ctx=this.domElem] Element where search is being performed
     * @param {String} names Nested element name (or names separated by spaces)
     * @param {String} [modName] Modifier name
     * @param {String} [modVal] Modifier value
     * @returns {jQuery} DOM elements
     */
    findElem : function(ctx, names, modName, modVal) {

        if(arguments.length % 2) { // if the number of arguments is one or three
            modVal = modName;
            modName = names;
            names = ctx;
            ctx = this.domElem;
        } else if(typeof ctx == 'string') {
            ctx = this.findElem(ctx);
        }

        var _self = this.__self,
            selector = '.' +
                names.split(' ').map(function(name) {
                    return buildClass(_self._name, name, modName, modVal);
                }).join(',.');
        return findDomElem(ctx, selector);

    },

    /**
     * Finds elements nested in a block
     * @protected
     * @param {String} name Nested element name
     * @param {String} [modName] Modifier name
     * @param {String} [modVal] Modifier value
     * @returns {jQuery} DOM elements
     */
    _elem : function(name, modName, modVal) {

        var key = name + buildModPostfix(modName, modVal),
            res;

        if(!(res = this._elemCache[key])) {
            res = this._elemCache[key] = this.findElem(name, modName, modVal);
            res.__bemElemName = name;
        }

        return res;

    },

    /**
     * Lazy search for elements nested in a block (caches results)
     * @protected
     * @param {String} names Nested element name (or names separated by spaces)
     * @param {String} [modName] Modifier name
     * @param {String} [modVal] Modifier value
     * @returns {jQuery} DOM elements
     */
    elem : function(names, modName, modVal) {

        if(modName && typeof modName != 'string') {
            modName.__bemElemName = names;
            return modName;
        }

        if(names.indexOf(' ') < 0) {
            return this._elem(names, modName, modVal);
        }

        var res = $([]),
            _this = this;
        names.split(' ').forEach(function(name) {
            res = res.add(_this._elem(name, modName, modVal));
        });
        return res;

    },

    /**
     * Clearing the cache for elements
     * @protected
     * @param {String} [names] Nested element name (or names separated by spaces)
     * @param {String} [modName] Modifier name
     * @param {String} [modVal] Modifier value
     * @returns {BEM}
     */
    dropElemCache : function(names, modName, modVal) {

        if(names) {
            var _this = this,
                modPostfix = buildModPostfix(modName, modVal);
            names.indexOf(' ') < 0?
                delete _this._elemCache[names + modPostfix] :
                names.split(' ').forEach(function(name) {
                    delete _this._elemCache[name + modPostfix];
                });
        } else {
            this._elemCache = {};
        }

        return this;

    },

    /**
     * Retrieves parameters of a block element
     * @param {String|jQuery} elem Element
     * @returns {Object} Parameters
     */
    elemParams : function(elem) {

        var elemName;
        if(typeof elem ==  'string') {
            elemName = elem;
            elem = this.elem(elem);
        } else {
            elemName = this.__self._extractElemNameFrom(elem);
        }

        return extractParams(elem[0])[buildClass(this.__self.getName(), elemName)] || {};

    },

    /**
     * Elemify given element
     * @param {jQuery} elem Element
     * @param {String} elemName Name
     * @returns {jQuery}
     */
    elemify : function(elem, elemName) {
        (elem = $(elem)).__bemElemName = elemName;
        return elem;
    },

    /**
     * Checks whether a DOM element is in a block
     * @protected
     * @param {jQuery} domElem DOM element
     * @returns {Boolean}
     */
    containsDomElem : function(domElem) {

        var res = false;

        this.domElem.each(function() {
            return !(res = domElem.parents().andSelf().index(this) > -1);
        });

        return res;

    },

    /**
     * Builds a CSS selector corresponding to a block/element and modifier
     * @param {String} [elem] Element name
     * @param {String} [modName] Modifier name
     * @param {String} [modVal] Modifier value
     * @returns {String}
     */
    buildSelector : function(elem, modName, modVal) {

        return this.__self.buildSelector(elem, modName, modVal);

    },

    /**
     * Deletes a block
     * @param {Boolean} [keepDOM=false] Whether to keep the block's DOM nodes in the document
     */
    destruct : function(keepDOM) {

        var _this = this,
            _self = _this.__self;

        _this._isDestructing = true;

        _this._needSpecialUnbind && _self.doc.add(_self.win).unbind('.' + _this._uniqId);

        _this.dropElemCache().domElem.each(function(i, domNode) {
            var params = getParams(domNode);
            $.each(params, function(blockName, blockParams) {
                var block = uniqIdToBlock[blockParams.uniqId];
                block?
                    block._isDestructing || removeDomNodeFromBlock(block, domNode) :
                    delete uniqIdToDomElems[blockParams.uniqId];
            });
            cleanupDomNode(domNode);
        });

        keepDOM || _this.domElem.remove();

        delete uniqIdToBlock[_this.un()._uniqId];
        delete _this.domElem;
        delete _this._elemCache;

        _this.__base();

    }

}, /** @lends BEM.DOM */{

    /**
     * Scope
     * Will be set on onDomReady to tag `body`
     * @protected
     * @type jQuery
     */
    scope : null,

    /**
     * Document shortcut
     * @protected
     * @type jQuery
     */
    doc : doc,

    /**
     * Window shortcut
     * @protected
     * @type jQuery
     */
    win : win,

    /**
     * Processes a block's live properties
     * @private
     * @param {Boolean} [heedLive=false] Whether to take into account that the block already processed its live properties
     * @returns {Boolean} Whether the block is a live block
     */
    _processLive : function(heedLive) {

        var _this = this,
            res = _this._liveInitable;

        if('live' in _this) {
            var noLive = typeof res == 'undefined';

            if(noLive ^ heedLive) {
                res = _this.live() !== false;
                _this.live = function() {};
            }
        }

        return res;

    },

    /**
     * Initializes blocks on a fragment of the DOM tree
     * @static
     * @protected
     * @param {jQuery} [ctx=document] Root DOM node
     * @returns {jQuery} ctx Initialization context
     */
    init : function(ctx, callback, callbackCtx) {

        if(!ctx || $.isFunction(ctx)) {
            callbackCtx = callback;
            callback = ctx;
            ctx = doc;
        }

        var uniqInitId = $.identify();
        findDomElem(ctx, '.i-bem').each(function() {
            init($(this), uniqInitId);
        });

        callback && this.afterCurrentEvent(
            function() {
                callback.call(callbackCtx || this, ctx);
            });

        // makes initialization completely synchronous
        this._runAfterCurrentEventFns();

        return ctx;

    },

    /**
     * Destroys blocks on a fragment of the DOM tree
     * @static
     * @protected
     * @param {Boolean} [keepDOM=false] Whether to keep DOM nodes in the document
     * @param {jQuery} ctx Root DOM node
     * @param {Boolean} [excludeSelf=false] Exclude the context
     */
    destruct : function(keepDOM, ctx, excludeSelf) {

        if(typeof keepDOM != 'boolean') {
            excludeSelf = ctx;
            ctx = keepDOM;
            keepDOM = undefined;
        }

        findDomElem(ctx, '.i-bem', excludeSelf).each(function(i, domNode) {
            var params = getParams(this);
            $.each(params, function(blockName, blockParams) {
                if(blockParams.uniqId) {
                    var block = uniqIdToBlock[blockParams.uniqId];
                    block?
                        removeDomNodeFromBlock(block, domNode) :
                        delete uniqIdToDomElems[blockParams.uniqId];
                }
            });
            cleanupDomNode(this);
        });
        keepDOM || (excludeSelf? ctx.empty() : ctx.remove());

    },

    /**
     * Replaces a fragment of the DOM tree inside the context, destroying old blocks and intializing new ones
     * @static
     * @protected
     * @param {jQuery} ctx Root DOM node
     * @param {jQuery|String} content New content
     * @param {Function} [callback] Handler to be called after initialization
     * @param {Object} [callbackCtx] Handler's context
     */
    update : function(ctx, content, callback, callbackCtx) {

        this.destruct(ctx, true);
        this.init(ctx.html(content), callback, callbackCtx);

    },

    /**
     * Changes a fragment of the DOM tree including the context and initializes blocks.
     * @param {jQuery} ctx Root DOM node
     * @param {jQuery|String} content Content to be added
     */
    replace : function(ctx, content) {

        this.destruct(true, ctx);
        this.init($(content).replaceAll(ctx));

    },

    /**
     * Adds a fragment of the DOM tree at the end of the context and initializes blocks
     * @param {jQuery} ctx Root DOM node
     * @param {jQuery|String} content Content to be added
     */
    append : function(ctx, content) {

        this.init($(content).appendTo(ctx));

    },

    /**
     * Adds a fragment of the DOM tree at the beginning of the context and initializes blocks
     * @param {jQuery} ctx Root DOM node
     * @param {jQuery|String} content Content to be added
     */
    prepend : function(ctx, content) {

        this.init($(content).prependTo(ctx));

    },

    /**
     * Adds a fragment of the DOM tree before the context and initializes blocks
     * @param {jQuery} ctx Contextual DOM node
     * @param {jQuery|String} content Content to be added
     */
    before : function(ctx, content) {

        this.init($(content).insertBefore(ctx));

    },

    /**
     * Adds a fragment of the DOM tree after the context and initializes blocks
     * @param {jQuery} ctx Contextual DOM node
     * @param {jQuery|String} content Content to be added
     */
    after : function(ctx, content) {

        this.init($(content).insertAfter(ctx));

    },

    /**
     * Builds a full name for a live event
     * @static
     * @private
     * @param {String} e Event name
     * @returns {String}
     */
    _buildCtxEventName : function(e) {

        return this._name + ':' + e;

    },

    _liveClassBind : function(className, e, callback, invokeOnInit) {

        var _this = this;
        if(e.indexOf(' ') > -1) {
            e.split(' ').forEach(function(e) {
                _this._liveClassBind(className, e, callback, invokeOnInit);
            });
        }
        else {
            var storage = liveClassEventStorage[e],
                uniqId = $.identify(callback);

            if(!storage) {
                storage = liveClassEventStorage[e] = {};
                doc.bind(e, _this.changeThis(_this._liveClassTrigger, _this));
            }

            storage = storage[className] || (storage[className] = { uniqIds : {}, fns : [] });

            if(!(uniqId in storage.uniqIds)) {
                storage.fns.push({ uniqId : uniqId, fn : _this._buildLiveEventFn(callback, invokeOnInit) });
                storage.uniqIds[uniqId] = storage.fns.length - 1;
            }
        }

        return this;

    },

    _liveClassUnbind : function(className, e, callback) {

        var storage = liveClassEventStorage[e];
        if(storage) {
            if(callback) {
                if(storage = storage[className]) {
                    var uniqId = $.identify(callback);
                    if(uniqId in storage.uniqIds) {
                        var i = storage.uniqIds[uniqId],
                            len = storage.fns.length - 1;
                        storage.fns.splice(i, 1);
                        while(i < len) storage.uniqIds[storage.fns[i++].uniqId] = i - 1;
                        delete storage.uniqIds[uniqId];
                    }
                }
            } else {
                delete storage[className];
            }
        }

        return this;

    },

    _liveClassTrigger : function(e) {

        var storage = liveClassEventStorage[e.type];
        if(storage) {
            var node = e.target, classNames = [];
            for(var className in storage) storage.hasOwnProperty(className) && classNames.push(className);
            do {
                var nodeClassName = ' ' + node.className + ' ', i = 0;
                while(className = classNames[i++]) {
                    if(nodeClassName.indexOf(' ' + className + ' ') > -1) {
                        var j = 0, fns = storage[className].fns, fn, stopPropagationAndPreventDefault = false;
                        while(fn = fns[j++])
                            if(fn.fn.call($(node), e) === false) stopPropagationAndPreventDefault = true;

                        stopPropagationAndPreventDefault && e.preventDefault();
                        if(stopPropagationAndPreventDefault || e.isPropagationStopped()) return;

                        classNames.splice(--i, 1);
                    }
                }
            } while(classNames.length && (node = node.parentNode));
        }

    },

    _buildLiveEventFn : function(callback, invokeOnInit) {

        var _this = this;
        return function(e) {
            var args = [
                    _this._name,
                    ((e.data || (e.data = {})).domElem = $(this)).closest(_this.buildSelector()),
                    true ],
                block = initBlock.apply(null, invokeOnInit? args.concat([callback, e]) : args);

            if(block && !invokeOnInit && callback)
                return callback.apply(block, arguments);
        };

    },

    /**
     * Helper for live initialization for an event on DOM elements of a block or its elements
     * @static
     * @protected
     * @param {String} [elemName] Element name or names (separated by spaces)
     * @param {String} event Event name
     * @param {Function} [callback] Handler to call after successful initialization
     */
    liveInitOnEvent : function(elemName, event, callback) {

        return this.liveBindTo(elemName, event, callback, true);

    },

    /**
     * Helper for subscribing to live events on DOM elements of a block or its elements
     * @static
     * @protected
     * @param {String|Object} [to] Description (object with modName, modVal, elem) or name of the element or elements (space-separated)
     * @param {String} event Event name
     * @param {Function} [callback] Handler
     */
    liveBindTo : function(to, event, callback, invokeOnInit) {

        if(!event || $.isFunction(event)) {
            callback = event;
            event = to;
            to = undefined;
        }

        if(!to || typeof to == 'string') {
            to = { elem : to };
        }

        to.elemName && (to.elem = to.elemName);

        var _this = this;

        if(to.elem && to.elem.indexOf(' ') > 0) {
            to.elem.split(' ').forEach(function(elem) {
                _this._liveClassBind(
                    buildClass(_this._name, elem, to.modName, to.modVal),
                    event,
                    callback,
                    invokeOnInit);
            });
            return _this;
        }

        return _this._liveClassBind(
            buildClass(_this._name, to.elem, to.modName, to.modVal),
            event,
            callback,
            invokeOnInit);

    },

    /**
     * Helper for unsubscribing from live events on DOM elements of a block or its elements
     * @static
     * @protected
     * @param {String} [elem] Name of the element or elements (space-separated)
     * @param {String} event Event name
     * @param {Function} [callback] Handler
     */
    liveUnbindFrom : function(elem, event, callback) {

        var _this = this;

        if(elem.indexOf(' ') > 1) {
            elem.split(' ').forEach(function(elem) {
                _this._liveClassUnbind(
                    buildClass(_this._name, elem),
                    event,
                    callback);
            });
            return _this;
        }

        return _this._liveClassUnbind(
            buildClass(_this._name, elem),
            event,
            callback);

    },

    /**
     * Helper for live initialization when a different block is initialized
     * @static
     * @private
     * @param {String} event Event name
     * @param {String} blockName Name of the block that should trigger a reaction when initialized
     * @param {Function} callback Handler to be called after successful initialization in the new block's context
     * @param {String} findFnName Name of the method for searching
     */
    _liveInitOnBlockEvent : function(event, blockName, callback, findFnName) {

        var name = this._name;
        blocks[blockName].on(event, function(e) {
            if(!e.block.domElem) return; // if block was destructed at that moment

            var args = arguments,
                blocks = e.block[findFnName](name);

            callback && blocks.forEach(function(block) {
                callback.apply(block, args);
            });
        });
        return this;

    },

    /**
     * Helper for live initialization for a different block's event on the current block's DOM element
     * @static
     * @protected
     * @param {String} event Event name
     * @param {String} blockName Name of the block that should trigger a reaction when initialized
     * @param {Function} callback Handler to be called after successful initialization in the new block's context
     */
    liveInitOnBlockEvent : function(event, blockName, callback) {

        return this._liveInitOnBlockEvent(event, blockName, callback, 'findBlocksOn');

    },

    /**
     * Helper for live initialization for a different block's event inside the current block
     * @static
     * @protected
     * @param {String} event Event name
     * @param {String} blockName Name of the block that should trigger a reaction when initialized
     * @param {Function} [callback] Handler to be called after successful initialization in the new block's context
     */
    liveInitOnBlockInsideEvent : function(event, blockName, callback) {

        return this._liveInitOnBlockEvent(event, blockName, callback, 'findBlocksOutside');

    },

    /**
     * Helper for live initialization when a different block is initialized on a DOM element of the current block
     * @deprecated - use liveInitOnBlockEvent
     * @static
     * @protected
     * @param {String} blockName Name of the block that should trigger a reaction when initialized
     * @param {Function} callback Handler to be called after successful initialization in the new block's context
     */
    liveInitOnBlockInit : function(blockName, callback) {

        return this.liveInitOnBlockEvent('init', blockName, callback);

    },

    /**
     * Helper for live initialization when a different block is initialized inside the current block
     * @deprecated - use liveInitOnBlockInsideEvent
     * @static
     * @protected
     * @param {String} blockName Name of the block that should trigger a reaction when initialized
     * @param {Function} [callback] Handler to be called after successful initialization in the new block's context
     */
    liveInitOnBlockInsideInit : function(blockName, callback) {

        return this.liveInitOnBlockInsideEvent('init', blockName, callback);

    },

    /**
     * Adds a live event handler to a block, based on a specified element where the event will be listened for
     * @static
     * @protected
     * @param {jQuery} [ctx] The element in which the event will be listened for
     * @param {String} e Event name
     * @param {Object} [data] Additional information that the handler gets as e.data
     * @param {Function} fn Handler
     * @param {Object} [fnCtx] Handler's context
     */
    on : function(ctx, e, data, fn, fnCtx) {

        return ctx.jquery?
            this._liveCtxBind(ctx, e, data, fn, fnCtx) :
            this.__base(ctx, e, data, fn);

    },

    /**
     * Removes the live event handler from a block, based on a specified element where the event was being listened for
     * @static
     * @protected
     * @param {jQuery} [ctx] The element in which the event was being listened for
     * @param {String} e Event name
     * @param {Function} [fn] Handler
     * @param {Object} [fnCtx] Handler context
     */
    un : function(ctx, e, fn, fnCtx) {

        return ctx.jquery?
            this._liveCtxUnbind(ctx, e, fn, fnCtx) :
            this.__base(ctx, e, fn);

    },

    /**
     * Adds a live event handler to a block, based on a specified element where the event will be listened for
     * @deprecated Use on
     * @static
     * @protected
     * @param {jQuery} ctx The element in which the event will be listened for
     * @param {String} e Event name
     * @param {Object} [data] Additional information that the handler gets as e.data
     * @param {Function} fn Handler
     * @param {Object} [fnCtx] Handler context
     */
    liveCtxBind : function(ctx, e, data, fn, fnCtx) {

        return this._liveCtxBind(ctx, e, data, fn, fnCtx);

    },

    /**
     * Adds a live event handler to a block, based on a specified element where the event will be listened for
     * @static
     * @private
     * @param {jQuery} ctx The element in which the event will be listened for
     * @param {String} e  Event name
     * @param {Object} [data] Additional information that the handler gets as e.data
     * @param {Function} fn Handler
     * @param {Object} [fnCtx] Handler context
     */
    _liveCtxBind : function(ctx, e, data, fn, fnCtx) {

        var _this = this;

        if(typeof e == 'string') {
            if($.isFunction(data)) {
                fnCtx = fn;
                fn = data;
                data = undefined;
            }

            if(e.indexOf(' ') > -1) {
                e.split(' ').forEach(function(e) {
                    _this._liveCtxBind(ctx, e, data, fn, fnCtx);
                });
            } else {
                var ctxE = _this._buildCtxEventName(e),
                    storage = liveEventCtxStorage[ctxE] ||
                        (liveEventCtxStorage[ctxE] = { counter : 0, ctxs : {} });

                ctx.each(function() {
                    var ctxId = $.identify(this),
                        ctxStorage = storage.ctxs[ctxId];
                    if(!ctxStorage) {
                        ctxStorage = storage.ctxs[ctxId] = {};
                        ++storage.counter;
                    }
                    ctxStorage[$.identify(fn) + (fnCtx? $.identify(fnCtx) : '')] = {
                        fn   : fn,
                        data : data,
                        ctx  : fnCtx
                    };
                });
            }
        } else {
            $.each(e, function(e, fn) {
                _this._liveCtxBind(ctx, e, fn, data);
            });
        }

        return _this;

    },

    /**
     * Removes a live event handler from a block, based on a specified element where the event was being listened for
     * @deprecated Use on
     * @static
     * @protected
     * @param {jQuery} ctx The element in which the event was being listened for
     * @param {String} e Event name
     * @param {Function} [fn] Handler
     * @param {Object} [fnCtx] Handler context
     */
    liveCtxUnbind : function(ctx, e, fn, fnCtx) {

        return this._liveCtxUnbind(ctx, e, fn, fnCtx);

    },

    /**
     * Removes a live event handler from a block, based on a specified element where the event was being listened for
     * @static
     * @private
     * @param {jQuery} ctx The element in which the event was being listened for
     * @param {String} e Event name
     * @param {Function} [fn] Handler
     * @param {Object} [fnCtx] Handler context
     */
    _liveCtxUnbind : function(ctx, e, fn, fnCtx) {

        var _this = this,
            storage = liveEventCtxStorage[e =_this._buildCtxEventName(e)];

        if(storage) {
            ctx.each(function() {
                var ctxId = $.identify(this, true),
                    ctxStorage;
                if(ctxId && (ctxStorage = storage.ctxs[ctxId])) {
                    fn && delete ctxStorage[$.identify(fn) + (fnCtx? $.identify(fnCtx) : '')];
                    if(!fn || $.isEmptyObject(ctxStorage)) {
                        storage.counter--;
                        delete storage.ctxs[ctxId];
                    }
                }
            });
            storage.counter || delete liveEventCtxStorage[e];
        }

        return _this;

    },

    /**
     * Retrieves the name of an element nested in a block
     * @static
     * @private
     * @param {jQuery} elem Nested element
     * @returns {String|undefined}
     */
    _extractElemNameFrom : function(elem) {

        if(elem.__bemElemName) return elem.__bemElemName;

        var matches = elem[0].className.match(this._buildElemNameRE());
        return matches? matches[1] : undefined;

    },

    /**
     * Retrieves block parameters from a DOM element
     * @static
     * @param {HTMLElement} domNode DOM node
     * @returns {Object}
     */
    extractParams : extractParams,

    /**
     * Builds a prefix for the CSS class of a DOM element or nested element of the block, based on modifier name
     * @static
     * @private
     * @param {String} modName Modifier name
     * @param {jQuery|String} [elem] Element
     * @returns {String}
     */
    _buildModClassPrefix : function(modName, elem) {

        return buildClass(this._name) +
               (elem?
                   ELEM_DELIM + (typeof elem === 'string'? elem : this._extractElemNameFrom(elem)) :
                   '') +
               MOD_DELIM + modName + MOD_DELIM;

    },

    /**
     * Builds a regular expression for extracting modifier values from a DOM element or nested element of a block
     * @static
     * @private
     * @param {String} modName Modifier name
     * @param {jQuery|String} [elem] Element
     * @param {String} [quantifiers] Regular expression quantifiers
     * @returns {RegExp}
     */
    _buildModValRE : function(modName, elem, quantifiers) {

        return new RegExp('(\\s|^)' + this._buildModClassPrefix(modName, elem) + '(' + NAME_PATTERN + ')(?=\\s|$)', quantifiers);

    },

    /**
     * Builds a regular expression for extracting names of elements nested in a block
     * @static
     * @private
     * @returns {RegExp}
     */
    _buildElemNameRE : function() {

        return new RegExp(this._name + ELEM_DELIM + '(' + NAME_PATTERN + ')(?:\\s|$)');

    },

    /**
     * Builds a CSS selector corresponding to the block/element and modifier
     * @param {String} [elem] Element name
     * @param {String} [modName] Modifier name
     * @param {String} [modVal] Modifier value
     * @returns {String}
     */
    buildSelector : function(elem, modName, modVal) {

        return '.' + buildClass(this._name, elem, modName, modVal);

    },

    /**
     * Returns a block instance by unique ID
     * @deprecated
     * @param {String} [uniqId]
     * @returns {BEM.DOM}
     */
    getBlockByUniqId : function(uniqId) {

        return uniqIdToBlock[uniqId];

    },

    /**
     * Returns the size of the current window
     * @returns {Object} Object with width and height fields
     */
    getWindowSize : function() {

        return {
            width  : win.width(),
            height : win.height()
        };

    }

});

/**
 * Set default scope after DOM ready
 */
$(function() {
    BEM.DOM.scope = $('body');
});

})(BEM, jQuery);

/* ../../../../../libs/bem-bl/blocks-common/i-bem/__dom/i-bem__dom.js end */
;
/* ../../../../../libs/bem-bl/blocks-common/i-ecma/__string/i-ecma__string.js begin */
(function() {

String.prototype.trim || (String.prototype.trim = function () {

    var str = this.replace(/^\s\s*/, ''),
        ws = /\s/,
        i = str.length;

    while(ws.test(str.charAt(--i)));

    return str.slice(0, i + 1);

});

})();
/* ../../../../../libs/bem-bl/blocks-common/i-ecma/__string/i-ecma__string.js end */
;
/* ../../../../../libs/bem-bl/blocks-common/i-bem/__dom/_init/i-bem__dom_init_auto.js begin */
/* дефолтная инициализация */
$(function() {
    BEM.DOM.init();
});
/* ../../../../../libs/bem-bl/blocks-common/i-bem/__dom/_init/i-bem__dom_init_auto.js end */
;
/* ../../../../../common.blocks/dialog-window/dialog-window.examples/10-dialog-window.blocks/example/example.js begin */
BEM.DOM.decl('example', {
    onSetMod: {
        'js': {
            'inited': function() {

                var _this = this,
                    dialogWindow;


                this.bindTo(this.elem('button'), 'click', function() {
                    if ( !dialogWindow ) {

                        dialogWindow = BEM.blocks['dialog-window'].createNew({
                            block: 'dialog-window',
                            mods: {
                                type: 'info'
                            },
                            mix: [
                                {
                                    block: 'example-form',
                                    js: true
                                }
                            ],
                            title: 'Some form',
                            content: [
                                {
                                    block: 'input',
                                    mix: [
                                        {
                                            block: 'example-form',
                                            elem: 'input'
                                        }
                                    ],
                                    mods: {
                                        color: 'light-grey',
                                        size: 'l'
                                    },
                                    content: [
                                        {
                                            elem: 'hint',
                                            content: 'Write something'
                                        },
                                        {
                                            elem: 'control',
                                            mix: [
                                                {
                                                    block: 'example-form',
                                                    elem: 'form-input'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'message',
                                            elemMods: {
                                                type: 'error'
                                            },
                                            content: 'You need to write something'
                                        }
                                    ]
                                },

                                {
                                    elem: 'controls',
                                    content: [
                                        {
                                            block: 'button',
                                            mods: {
                                                color: 'green',
                                                size: 'm'
                                            },
                                            mix: [
                                                { block: 'dialog-window', elem: 'control', elemMods: { type: 'resolve' } }
                                            ],
                                            content: 'Send'
                                        },

                                        {
                                            block: 'button',
                                            mods: {
                                                color: 'light-grey',
                                                size: 'm'
                                            },
                                            mix: [
                                                { block: 'dialog-window', elem: 'control', elemMods: { type: 'reject' } }
                                            ],
                                            content: 'Cancel'
                                        }
                                    ]
                                }
                            ]
                        });


                        var form = dialogWindow.findBlockOn('example-form'),
                            formSubmit = form.submit;


                        form.submit = function() {
                            dialogWindow.resolve();
                        };


                        dialogWindow
                            .onOpen(function() {
                                dialogWindow.findBlockOn('example-form').elem('form-input').focus();
                            })
                            .onResolve(function() {
                                return formSubmit.apply(form) != false ? BEM.blocks['dialog-window'].open('success', {
                                    block: 'dialog-window',
                                    mods: {
                                        type: 'success'
                                    },
                                    title: 'Success',
                                    content: [
                                        'Successful message',

                                        {
                                            elem: 'controls',
                                            content: [
                                                {
                                                    block: 'button',
                                                    mods: {
                                                        color: 'light-grey',
                                                        size: 'm'
                                                    },
                                                    mix: [
                                                        { block: 'dialog-window', elem: 'control', elemMods: { type: 'close' } }
                                                    ],
                                                    content: 'Ok'
                                                }
                                            ]
                                        }
                                    ]
                                }) : false;
                            });


                        if ( console ) {
                            dialogWindow
                                .onOpen(function() {
                                    console.log('open');
                                })
                                .onResolve(function() {
                                    console.log('resolve');
                                })
                                .onReject(function() {
                                    console.log('reject');
                                })
                                .onClose(function() {
                                    console.log('close');
                                });
                        }
                    }


                    dialogWindow.open();
                });
            }
        }
    }
});
/* ../../../../../common.blocks/dialog-window/dialog-window.examples/10-dialog-window.blocks/example/example.js end */
;
/* ../../../../../common.blocks/dialog-window/dialog-window.js begin */
BEM.DOM.decl('dialog-window', {

    onSetMod: {
        'js': {
            'inited': function() {

                var _this = this;


                this.bindTo(this.elem('control', 'type', 'close'), 'click', function() {
                    _this.close(_this);
                });

                this.bindTo(this.elem('control', 'type', 'resolve'), 'click', function() {
                    _this.resolve(_this);
                });

                this.bindTo(this.elem('control', 'type', 'reject'), 'click', function() {
                    _this.reject(_this);
                });
            }
        },


        'visibility': function(modName, modVal) {
            var paranjaBlock = this.findBlockOn(this.elem('paranja'), 'paranja');


            paranjaBlock && paranjaBlock.setMod(modName, modVal);
        }
    },


    toggle: function() {
        this[this.hasMod('visibility') ? 'open' : 'close'](block);
    },


    open: function() {
        var _this = this,
            isError = false;

        if ( this._onOpenArray ) {
            this._onOpenArray.forEach(function(func) {
                var functionResult = func();

                if ( functionResult === false ) {
                    isError = true;
                }
            });
        }

        if ( !isError ) {
            if ( this.elem('close').length ) {
                this.bindToWin('keyup', function(e) {
                    if ( e.keyCode === 27 ) {
                        _this.close();
                    }
                });
            }

            this.setMod('visibility', '');
        }

        return this;
    },


    close: function() {
        var isError = false;

        if ( this._onCloseArray ) {
            this._onCloseArray.forEach(function(func) {
                var functionResult = func();

                if ( functionResult === false ) {
                    isError = true;
                }
            });
        }

        if ( !isError ) {
            this.unbindFromWin('keyup');

            this.setMod('visibility', 'hidden');
        }

        return this;
    },


    resolve: function() {
        var isError = false;

        if ( this._onResolveArray ) {
            this._onResolveArray.forEach(function(func) {
                var functionResult = func();

                if ( functionResult === false ) {
                    isError = true;
                }
            });
        }

        !isError && this.close(this);

        return this;
    },


    reject: function() {
        var isError = false;

        if ( this._onRejectArray ) {
            this._onRejectArray.forEach(function(func) {
                var functionResult = func();

                if ( functionResult === false ) {
                    isError = true;
                }
            });
        }

        !isError && this.close(this);

        return this;
    },


    onOpen: function(func) {
        if ( $.isFunction(func)) {
            this._onOpenArray = this._onOpenArray || [];
            this._onOpenArray.push(func);
        }

        return this;
    },


    onClose: function(func) {
        if ( $.isFunction(func)) {
            this._onCloseArray = this._onCloseArray || [];
            this._onCloseArray.push(func);
        }

        return this;
    },


    onResolve: function(func) {
        if ( $.isFunction(func)) {
            this._onResolveArray = this._onResolveArray || [];
            this._onResolveArray.push(func);
        }

        return this;
    },


    onReject: function(func) {
        if ( $.isFunction(func)) {
            this._onRejectArray = this._onRejectArray || [];
            this._onRejectArray.push(func);
        }

        return this;
    }

}, {

    _windowsList: {},


    generateId: function(idsList) {
        var id = (Math.random() * Math.pow(10, 10)).toFixed(0);

        if ( !idsList[id] ) {
            return id;
        } else {
            this.generateId(idsList);
        }
    },


    open: function(id, bemJson) {
        if ( typeof id != 'object' ) {
            //if id is id

            if ( !bemJson ) {
                //if in arguments only id

                return this.get(id) && this.get(id).open();

            } else {
                //if in arguments id and bemJson

                return (this.get(id) && this.get(id).open()) || this.createNew(id, bemJson).open();

            }

        } else {
            //if id is bemjson

            if ( !id ) return null;

            return this.createNew(bemJson).open();

        }
    },


    get: function(id) {
        return this._windowsList[id] || null;
    },


    createNew: function(id, bemJson) {
        if ( id ) {
            if ( !bemJson ) {
                bemJson = id;

                id = this.generateId(this._windowsList);
            }

            bemJson.js = bemJson.js || {};

            bemJson.js.id = id;

            var dialogWindow = $(BEMHTML.apply(bemJson)).bem('dialog-window');

            BEM.DOM.append($(document.body), dialogWindow.domElem);

            this._windowsList[id] = dialogWindow;

            return dialogWindow;
        }
    }

});
/* ../../../../../common.blocks/dialog-window/dialog-window.js end */
;
/* ../../../../../libs/bem-bl/blocks-common/i-jquery/__leftclick/i-jquery__leftclick.js begin */
/**
 * leftClick event plugin
 *
 * Copyright (c) 2010 Filatov Dmitry (alpha@zforms.ru)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * @version 1.0.0
 */

(function($) {

var leftClick = $.event.special.leftclick = {

    setup : function() {

        $(this).bind('click', leftClick.handler);

    },

    teardown : function() {

        $(this).unbind('click', leftClick.handler);

    },

    handler : function(e) {

        if(!e.button) {
            e.type = 'leftclick';
            $.event.handle.apply(this, arguments);
            e.type = 'click';
        }

    }

};

})(jQuery);
/* ../../../../../libs/bem-bl/blocks-common/i-jquery/__leftclick/i-jquery__leftclick.js end */
;
/* ../../../../../libs/bem-components/common.blocks/button/button.js begin */
/**
 * @namespace
 * @name Button
 */
BEM.DOM.decl('button', /** @lends Button.prototype */ {

    onSetMod : {

        'js' : function() {

            var disabled = this.isDisabled(),
                domElem = this.domElem;

            (this._href = domElem.attr('href')) && disabled &&
                domElem.removeAttr('href');

        },

        'disabled' : function(modName, modVal) {

            var isDisabled = modVal == 'yes',
                domElem = this.domElem;

            this._href && (isDisabled ?
                domElem.removeAttr('href') :
                domElem.attr('href', this._href));

            this.afterCurrentEvent(function() {
                domElem.attr('disabled', isDisabled);
            });

        },

        'pressed' : function(modName, modVal) {

            if (this.isDisabled()) return false;

            this.trigger(modVal == 'yes' ? 'press' : 'release');

        }

    },

    /**
     * Шорткат для проверки модификатора disabled_yes
     * @returns {Boolean}
     */
    isDisabled : function() {

        return this.hasMod('disabled', 'yes');

    },

    /**
     * Получение/установка урла (для кнопки-ссылки)
     * @param {String} [val] урл
     */
    url : function(val) {

        if(typeof val == 'undefined') {
            return this._href;
        } else {
            this._href = val;
            this.isDisabled() || this.domElem.attr('href', val);
            return this;
        }

    }

});

/* ../../../../../libs/bem-components/common.blocks/button/button.js end */
;
/* ../../../../../libs/bem-components/desktop.blocks/button/button.js begin */
/**
 * @namespace
 * @name Button
 */
BEM.DOM.decl('button', /** @lends Button.prototype */ {

    onSetMod : {

        'js' : function() {

            this.__base.apply(this, arguments);

            this._control = this.elem('control').length && this.elem('control') || this.domElem;
        },

        'focused' : {

            'yes' : function() {

                if(this.isDisabled())
                    return false;

                this
                    .bindToWin('unload', function() {
                        this.delMod('focused');
                    })
                    .bindTo('keydown', this._onKeyDown);

                this._isControlFocused() || this._control.focus();

                this.afterCurrentEvent(function() {
                    this.trigger('focus');
                });

            },

            '' : function() {

                this
                    .unbindFromWin('unload')
                    .unbindFrom('keydown');

                this._isControlFocused() && this._control.blur();

                this.afterCurrentEvent(function() {
                    this.trigger('blur');
                });

            }

        },

        'disabled' : function(modName, modVal) {

            this.__base.apply(this, arguments);

            modVal == 'yes' && this.domElem.keyup();

        },

        'hovered' : function(modName, modVal) {

            if (this.isDisabled()) return false;

            modVal === '' && this.delMod('pressed');

        },

        'pressed' : function(modName, modVal) {

            this.isDisabled() || this.setMod('focused', 'yes');

            return this.__base.apply(this, arguments);

        }

    },

    /**
     * Проверяет в фокусе ли контрол
     * @private
     * @returns {Boolean}
     */
    _isControlFocused : function() {

        try {
            return this.containsDomElem($(this.__self.doc[0].activeElement));
        } catch(e) {
            return false;
        }

    },

    _onKeyDown : function(e) {

        var keyCode = e.keyCode;
        // имитируем state_pressed по нажатию на enter и space
        if((keyCode == 13 || keyCode == 32) && !this._keyDowned) {
            this._keyDowned = true;
            this
                .setMod('pressed', 'yes')
                .bindTo('keyup', function() {
                    this
                        .delMod('pressed')
                        .unbindFrom('keyup');

                    delete this._keyDowned;

                    // делаем переход по ссылке по space
                    if(keyCode == 32 && this.domElem.attr('href')) {
                        document.location = this.domElem.attr('href');
                    }
                });
        }

    },

    _onClick : function(e) {
        this.isDisabled()?
            e.preventDefault() :
            this.afterCurrentEvent(function() {
                this.trigger('click');
            });
    },

    destruct : function () {

        this.delMod('focused');
        this.__base.apply(this, arguments);

    }

}, /** @lends Button */ {

    live : function() {

        var eventsToMods = {
            'mouseover' : { name : 'hovered', val : 'yes' },
            'mouseout' : { name : 'hovered' },
            'mousedown' : { name : 'pressed', val : 'yes' },
            'mouseup' : { name : 'pressed' },
            'focusin' : { name : 'focused', val : 'yes' },
            'focusout' : { name : 'focused' }
        };

        this
            .liveBindTo('leftclick', function(e) {
                this._onClick(e);
            })
            .liveBindTo('mouseover mouseout mouseup focusin focusout', function(e) {
                var mod = eventsToMods[e.type];
                this.setMod(mod.name, mod.val || '');
            })
            .liveBindTo('mousedown', function(e) {
                var mod = eventsToMods[e.type];
                e.which == 1 && this.setMod(mod.name, mod.val || '');
            });
    }

});

/* ../../../../../libs/bem-components/desktop.blocks/button/button.js end */
;
/* ../../../../../common.blocks/dialog-window/dialog-window.examples/10-dialog-window.blocks/example-form/example-form.js begin */
BEM.DOM.decl('example-form', {

    onSetMod: {
        'js': {
            'inited': function() {

                var _this = this,
                    inputBlock = this.findBlockOn(this.elem('input'), 'input');


                inputBlock.bindTo('keyup', function(e) {
                    if ( e.keyCode === 13 ) {
                        _this.submit();

                        return false;
                    } else {
                        inputBlock.setMod(inputBlock.elem('message', 'type', 'error'), 'visibility', '');
                    }
                });


                this.bindTo(this.elem('submit'), 'click', function(e) {
                    _this.submit();
                });

            }
        }
    },


    submit: function() {
        var inputBlock = this.findBlockOn(this.elem('input'), 'input');

        if ( !inputBlock.val() ) {
            inputBlock.setMod(inputBlock.elem('message', 'type', 'error'), 'visibility', 'visible');

            return false;
        }

        inputBlock.val('');
    }

});
/* ../../../../../common.blocks/dialog-window/dialog-window.examples/10-dialog-window.blocks/example-form/example-form.js end */
;
/* ../../../../../libs/bem-components/common.blocks/input/input.js begin */
/**
 * @namespace
 * @name Block
 */
BEM.DOM.decl('input', /** @lends Block.prototype */ {

    onSetMod : {

        'js' : function() {

            this._val = this.elem('control').val();
            this.bindFocus();

        },

        'disabled' : function(modName, modVal) {
            this.elem('control').attr('disabled', modVal === 'yes');
        },

        'focused' : function(modName, modVal) {

            if(this.hasMod('disabled', 'yes'))
                return false;

            var focused = modVal == 'yes';

            focused?
                this._focused || this._focus() :
                this._focused && this._blur();

            this.afterCurrentEvent(function() {
                this.trigger(focused? 'focus' : 'blur');
            });

        }

    },

    bindFocus : function() {

        this.bindTo(this.elem('control'), {
            focus : this._onFocus,
            blur  : this._onBlur
        });

    },

    /**
     * Метод для проверки наличия у блока модификатора disabled
     * @protected
     * @return {Boolean} true - если блок находится в отключенном состоянии,
     * false в остальных случаях
     */
    isDisabled : function() {
        return this.hasMod('disabled', 'yes');
    },

    /**
     * Возвращает/устанавливает текущее значение
     * @param {String} [val] значение
     * @param {Object} [data] дополнительные данные
     * @returns {String|BEM} если передан параметр val, то возвращается сам блок, если не передан -- текущее значение
     */
    val : function(val, data) {

        if(typeof val == 'undefined') return this._val;

        var input = this.elem('control');
        input.val() != val && input.val(val);
        this._val = val;
        this.trigger('change', data);

        return this;

    },

    /**
     * Метод для возврата имени нативного контрола
     * @param  {[type]} name [description]
     * @return {String} имя нативного контрола
     */
    name : function(name) {
        return this.elem('control').attr('name');
    },

    /**
     * Обработчик события выставления фокуса на элемент control блока
     * @return {Object} экземпляр блока input
     */
    _onFocus : function() {

        this._focused = true;
        return this.setMod('focused', 'yes');

    },

    /**
     * Обработчик события сброса фокуса с элемента control блока input
     * @return {Object} экземпляр блока input
     */
    _onBlur : function() {

        this._focused = false;
        return this.delMod('focused');

    },

    /**
     * Выставляем фокус для элемента control
     * @private
     */
    _focus : function() {
        this.elem('control').focus();
    },

    /**
     * Убираем фокус с элемента control
     * @private
     */
    _blur : function() {
        this.elem('control').blur();
    }

}, {

});

/* ../../../../../libs/bem-components/common.blocks/input/input.js end */
;
/* ../../../../../libs/bem-components/desktop.blocks/input/input.js begin */
(function() {

var instances = [],
    sysChannel,
    update = function () {
        var instance, i = 0;
        while(instance = instances[i++]) instance.val(instance.elem('control').val());
    },
    getActiveElement = function (doc) {
        // В iframe в IE9: "Error: Unspecified error."
        try { return doc.activeElement } catch (e) {}
    };

/**
 * @namespace
 * @name Block
 */
BEM.DOM.decl('input', /** @lends Block.prototype */ {

    onSetMod : {

        js : {

            'inited': function() {

                this.__base.apply(this, arguments);

                var _this = this,
                    input = _this.elem('control'),
                    activeElement = getActiveElement(_this.__self.doc[0]),
                    haveToSetAutoFocus =
                        _this.params.autoFocus &&
                            !(activeElement && $(activeElement).is('input, textarea'));

                if (activeElement === input[0] || haveToSetAutoFocus) {
                    _this.setMod('focused', 'yes')._focused = true;
                }

                // факт подписки
                if(!sysChannel) {
                    sysChannel = _this.channel('sys')
                        .on({
                            'tick' : update,
                            'idle' : function() {
                                sysChannel.un('tick', update);
                            },
                            'wakeup' : function() {
                                sysChannel.on('tick', update);
                            }});
                }

            }
        }
    },

    bindFocus : function() {

        // сохраняем индекс в массиве инстансов чтобы потом быстро из него удалять
        this._instanceIndex = instances.push(
            this.bindTo(this.elem('control'), {
                focus : this._onFocus,
                blur  : this._onBlur
            })
        ) - 1;

    },

    /**
     * Возвращает/устанавливает текущее значение
     * @param {String} [val] значение
     * @param {Object} [data] дополнительные данные
     * @returns {String|BEM} если передан параметр val, то возвращается сам блок, если не передан -- текущее значение
     */
    val : function(val, data) {

        if(typeof val == 'undefined') return this._val;

        if(this._val != val) {
            var input = this.elem('control');
            input.val() != val && input.val(val);
            this._val = val;
            this.trigger('change', data);
        }

        return this;

    },

    /**
     * Нормализация установки фокуса для IE
     * @private
     */
    _focus : function() {

        var input = this.elem('control')[0];
        if(input.createTextRange && !input.selectionStart) {
            var range = input.createTextRange();
            range.move('character', input.value.length);
            range.select();
        } else {
            input.focus();
        }
    },

    destruct : function() {

        this.__base.apply(this, arguments);

        this.params.shortcut && this.unbindFromDoc('keydown');
        instances.splice(this._instanceIndex, 1);

        var i = this._instanceIndex,
            instance;

        while(instance = instances[i++]) --instance._instanceIndex;

    }
}, {

});

})();

/* ../../../../../libs/bem-components/desktop.blocks/input/input.js end */
;
/* ../../../../../libs/bem-bl/blocks-common/i-system/i-system.js begin */
(function() {

var timer,
    counter = 0,
    isIdle = false,
    idleInterval = 0,
    channel = BEM.channel('sys'),
    TICK_INTERVAL = 50;

BEM.decl('i-system', {}, {

    start : function() {

        $(document).bind('mousemove keydown', function() {
            idleInterval = 0;
            if(isIdle) {
                isIdle = false;
                channel.trigger('wakeup');
            }
        });

        this._tick();

    },

    _tick : function() {

        var _this = this;

        channel.trigger('tick', { counter : counter++ });

        if(!isIdle && (idleInterval += TICK_INTERVAL) > 3000) {
            isIdle = true;
            channel.trigger('idle');
        }

        timer = setTimeout(function() {
            _this._tick();
        }, TICK_INTERVAL);

    }

}).start();

})();
/* ../../../../../libs/bem-bl/blocks-common/i-system/i-system.js end */
;
/* ../../../../../libs/bem-components/common.blocks/input/__clear/input__clear.js begin */
/**
 * @namespace
 * @name Block
 */
BEM.DOM.decl('input', /** @lends Block.prototype */ {

    onSetMod : {

        'js' : function() {
            this.__base.apply(this, arguments);

            this
                .on('change', this._updateClear)
                ._updateClear(); // на случай автокомплита
        }
    },

    /**
     * Обработчик клика по элементу box
     * Переводит фокус на контрол при клике на место очищаего крестика, когда его не видно
     * @private
     */
    _onBoxClear: function() {
        this.hasMod('clear', 'visibility', 'visible') || this.setMod('focused', 'yes');
    },

    /**
     * Обработчик нажатия на кнопку очистки инпута
     * Очищает значение в поле ввода
     * @private
     * @return {Object} экземпляр блока input
     */
    _onClearClick : function() {
        this.trigger('clear');
        this.removeInsets && this.removeInsets();

        return this
            .clearInput({ source: 'clear' })
            .setMod('focused', 'yes');

    },

    clearInput : function(data) {
        this.val('', data);

        return this;
    },

    /**
     * Переключает значение модификатора visibility для элемента clear
     * в зависимости от наличия значения в поле ввода
     * @private
     * @return {Object} экземпляр блока input
     */
    _updateClear : function() {
        return this.toggleMod(this.elem('clear'), 'visibility', 'visible', '', !!this._val);
    }

}, {

    live : function() {
        this.__base.apply(this, arguments);

        this
            .liveBindTo('clear', 'leftclick', function(e) {
                this._onClearClick();
            })
            .liveBindTo('box', 'click', function(e) {
                this._onBoxClear(e);
            });

        return false;
    }
});

/* ../../../../../libs/bem-components/common.blocks/input/__clear/input__clear.js end */
;
/* ../../../../../libs/bem-components/common.blocks/input/__hint/input__hint.js begin */
BEM.DOM.decl('input', {

    onSetMod : {

        'js' : function() {

            this.__base.apply(this, arguments);

            (this._hasHint = !!this.elem('hint')[0]) &&
                this
                    .on('change', this._updateHint)
                    ._updateHint();

        },

        'focused' : function() {

            if(this.__base.apply(this, arguments) === false) {
                return false;
            }

            this._hasHint && this._updateHint();

        }

    },

    /**
     * Show/hide the hint
     * @private
     */
    _updateHint : function() {

        this.toggleMod(this.elem('hint'), 'visibility', 'visible', !(this.val()));

    }

});

/* ../../../../../libs/bem-components/common.blocks/input/__hint/input__hint.js end */
;
/* ../../../../../libs/bem-components/common.blocks/input/__message/input__message.js begin */
BEM.DOM.decl('input', /** @lends Block.prototype */ {

    onElemSetMod : {

        'message' : {

            'visibility' : function(elem, modName, modVal) {

                var _this = this,
                    type = _this.getMod(elem, 'type');

                if(type) {
                    var needSetMod = true;
                    modVal || _this.elem('message', 'type', type).each(function() {
                        this != elem[0] && _this.hasMod($(this), 'visibility', 'visible') && (needSetMod = false);
                    });
                    needSetMod && _this.toggleMod('message-' + type, 'yes', '', modVal === 'visible');
                }

            }

        }

    }

}, {

});
/* ../../../../../libs/bem-components/common.blocks/input/__message/input__message.js end */
;
/* ../../../../../libs/bem-components/common.blocks/input/__message/_type/input__message_type_error.js begin */
BEM.DOM.decl('input', {
    onElemSetMod : {
        message : {
            visibility : function(elem, modName, modVal) {
                this.__base.apply(this, arguments);

                this.hasMod(elem, 'type', 'error') &&
                    this.elem('control').attr('aria-invalid', modVal === 'visible');
            }
        }
    }
});

/* ../../../../../libs/bem-components/common.blocks/input/__message/_type/input__message_type_error.js end */
;
/* ../../../../../libs/bem-components/common.blocks/input/__message/_visibility/input__message_visibility_visible.js begin */
BEM.DOM.decl('input', {
    onSetMod : {
        js : {
            inited : function() {
                this.__base.apply(this, arguments);

                this.elem('message').attr('aria-hidden', true);
                this.elem('message', 'visibility', 'visible').attr('aria-hidden', false);
            }
        }
    },

    onElemSetMod : {
        message : {
            visibility : function(elem, modName, modVal) {
                this.__base.apply(this, arguments);
                elem.attr('aria-hidden', modVal !== 'visible');
            }
        }
    }
});

/* ../../../../../libs/bem-components/common.blocks/input/__message/_visibility/input__message_visibility_visible.js end */
;


/* global BEM, i18n */
(function(global_, bem_, undefined) {

// Check if BEM.I18N was already initialized
if(typeof bem_.I18N === 'function' && bem_.I18N._proto) {
    return bem_.I18N;
}

/**
 * Support tanker-like syntax of keys in `i-bem__i18n`
 * @example
 *  i18n['prj']['keyset']['key'](params)
 */
if(typeof i18n === 'undefined') {
    /* jshint -W020 */
    i18n = {};
    /* jshint +W020 */
}

/* jshint -W020 */
BEM = bem_;
/* jshint +W020 */

var MOD_DELIM = '_',
    ELEM_DELIM = '__',
    DEFAULT_LANG = 'ru',
    cache = {},
    // {String[]} A stack used for restoring context of dynamic keysets
    stack = [],
    debug = false,
    // @see http://whattheheadsaid.com/2011/04/internet-explorer-9s-problematic-console-object
    hasConsole = typeof console !== 'undefined' && typeof console.log === 'function';

function log() {
    if(debug && hasConsole) {
        console.log.apply(console, arguments);
    }
}

function bemName(decl) {
    typeof decl === 'string' && (decl = { block: decl });

    return decl.block +
        (decl.elem ? (ELEM_DELIM + decl.elem) : '') +
        (decl.modName ? MOD_DELIM + decl.modName + MOD_DELIM + decl.modVal : '');
}

function bemParse(name) {
    var bemitem = {};

    name.split(ELEM_DELIM).forEach(function(item, i) {
        var keys = [ i ? 'elem' : 'block', 'mod', 'val' ];

        item.split(MOD_DELIM).forEach(function(part, j) {
            bemitem[keys[j]] = part;
        });
    });

    return bemitem;
}

function _pushStack(name) {
    if(!name) return false;
    return stack.push(name);
}

function _popStack() {
    return stack.length && stack.pop();
}


/**
 * @constructor
 */
function _i18n() {
    this._lang = '';
    this._prj = 'lego'; // FIXME: bem-bl?
    this._keyset = '';
    this._key = '';
}

_i18n.prototype = {

    lang : function(name) {
        this._lang = name;
        return this;
    },

    project : function(name) {
        this._prj = name;
        return this;
    },

    keyset : function(name, saveCtx) {
        saveCtx && _pushStack(this._keyset);

        this._keyset = bemName(name);
        return this;
    },

    key : function(name) {
        this._key = name;
        return this;
    },

    /**
     * FIXME: Move legacy-syntax support into separat method
     * @param {Object|Function} v
     */
    decl : function(v) {
        var bemitem = bemParse(this._keyset),
            // tanker legacy syntax
            prj = bemitem.block === 'i-tanker' ? 'tanker' : this._prj,
            keyset = bemitem.elem || this._keyset,
            key = this._key;

        prj = i18n[prj] || (i18n[prj] = {});
        keyset = prj[keyset] || (prj[keyset] = {});
        keyset[key] = typeof v === 'function' ? v : (function(p) { return (v); });

        // `BEM.I18N` syntax
        var l = cache[this._lang] || (cache[this._lang] = {}),
            k = l[this._keyset] || (l[this._keyset] = {});

        k[key] = v;
    },

    val : function(params, ctx) {
        var value = cache[this._lang] && cache[this._lang][this._keyset],
            debugString = 'keyset: ' + this._keyset + ' key: ' + this._key + ' (lang: ' + this._lang + ')';

        if(!value) {
            log('[I18N_NO_KEYSET] %s', debugString);
            return '';
        }

        value = value[this._key];

        var valtype = typeof value;
        if(valtype === 'undefined') {
            log("[I18N_NO_VALUE] %s", debugString);
            return '';
        }

        if(valtype === 'string') {
            return value;
        }

        ctx || (ctx = this);
        // TODO: try/catch
        return value.call(ctx, params);
    },

    _cache : function() { return cache; }

};

/**
 * @namespace
 * @lends BEM.I18N
 */
bem_.I18N = (function(base) {

    /**
     * Shortcut to get key value
     *
     * @param {String|Object} keyset
     * @param {String} key
     * @param {Object} [params]
     * @returns {String}
     */
    var klass = function(keyset, key, params) {
        return klass.keyset(keyset).key(key, params);
    };

    klass._proto = base;

    /**
     * @param {String} name
     * @returns {BEM.I18N}
     */
    klass.project = function(name) {
        this._proto.project(name);
        return this;
    };

    /**
     * @param {String} name
     * @returns {BEM.I18N}
     */
    klass.keyset = function(name) {
        this._proto.keyset(name, true);
        return this;
    };

    /**
     * @param {String} name Key name
     * @param {Object} params
     * @returns {String}
     */
    klass.key = function(name, params) {
        var proto = this._proto,
            result,
            ksetRestored;

        proto.lang(this._lang).key(name);

        // TODO: kiss
        result = proto.val.call(proto, params, klass);

        // restoring keyset's context
        // NOTE: should not save current ctx, `saveCtx = false`
        ksetRestored = _popStack();
        ksetRestored && proto.keyset(ksetRestored, false);

        return result;
    };

    /**
     * Declaration of translations
     *
     * @param {String|Object} bemitem
     * @param {Object} keysets
     * @param {Object} [params] declaration params
     * @returns {BEM.I18N}
     */
    klass.decl = function(bemitem, keysets, params) {
        var proto = this._proto,
            k;

        params || (params = {});
        params.lang && proto.lang(params.lang);

        proto.keyset(bemitem);

        for(k in keysets) {
            if(keysets.hasOwnProperty(k)) {
                proto.key(k).decl(keysets[k]);
            }
        }

        return this;
    };

    /**
     * Get/set current language
     *
     * @param {String} [lang]
     * @returns {String}
     */
    klass.lang = function(lang) {
        typeof lang !== 'undefined' && (this._lang = lang);
        return this._lang;
    };

    klass.debug = function(flag) {
        debug = !!flag;
    };

    klass.lang(DEFAULT_LANG);

    return klass;

}(new _i18n()));

})(this, typeof BEM === 'undefined' ? {} : BEM);


BEM.I18N.lang('ru');
