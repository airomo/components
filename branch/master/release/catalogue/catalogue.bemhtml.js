var BEMHTML = function() {
  var cache,
      xjst = (function(exports) {
    function $1(__$ctx) {
        var __t = __$ctx._mode;
        if (__t === "attrs") {
            return $2(__$ctx);
        } else if (__t === "tag") {
            return $52(__$ctx);
        } else if (__t === "default") {
            return $157(__$ctx);
        } else if (__t === "mix") {
            return $279(__$ctx);
        } else if (__t === "content") {
            return $299(__$ctx);
        } else if (__t === "url") {
            if (__$ctx.block === "example") {
                if (!!__$ctx.elem === false) {
                    return $333(__$ctx);
                } else {
                    return $374(__$ctx);
                }
            } else {
                return $374(__$ctx);
            }
        } else if (__t === "js") {
            return $338(__$ctx);
        } else if (__t === "bem") {
            return $346(__$ctx);
        } else if (__t === "doctype") {
            if (__$ctx.block === "page") {
                if (!!__$ctx.elem === false) {
                    return $369(__$ctx);
                } else {
                    return $374(__$ctx);
                }
            } else {
                return $374(__$ctx);
            }
        } else {
            return $374(__$ctx);
        }
    }
    function $2(__$ctx) {
        var __t = __$ctx.block;
        if (__t === "b-link") {
            if (!!__$ctx.elem === false) {
                return $5(__$ctx);
            } else {
                return $374(__$ctx);
            }
        } else if (__t === "b-text") {
            if (!__$ctx.elem === false) {
                if (!__$ctx.ctx.id === false) {
                    return {
                        id: __$ctx.ctx.id
                    };
                    return;
                } else {
                    return $374(__$ctx);
                }
            } else {
                return $374(__$ctx);
            }
        } else if (__t === "example") {
            if (!(__$ctx.elem === "live" || __$ctx.elem === "source") === false) {
                return {
                    src: __$ctx.ctx.url
                };
                return;
            } else {
                if (__$ctx.elem === "title") {
                    return {
                        href: __$ctx.ctx.url,
                        target: "_blank"
                    };
                    return;
                } else {
                    if (!!__$ctx.elem === false) {
                        return {
                            id: __$ctx.ctx.id
                        };
                        return;
                    } else {
                        return $374(__$ctx);
                    }
                }
            }
        } else if (__t === "link") {
            if (!__$ctx.ctx.url === false) {
                if (!!__$ctx.elem === false) {
                    return {
                        href: __$ctx.ctx.url
                    };
                    return;
                } else {
                    return $374(__$ctx);
                }
            } else {
                return $374(__$ctx);
            }
        } else if (__t === "page") {
            var __t = __$ctx.elem;
            if (__t === "js") {
                if (!__$ctx.ctx.url === false) {
                    return {
                        src: __$ctx.ctx.url
                    };
                    return;
                } else {
                    return $374(__$ctx);
                }
            } else if (__t === "css") {
                if (!__$ctx.ctx.url === false) {
                    return {
                        rel: "stylesheet",
                        href: __$ctx.ctx.url
                    };
                    return;
                } else {
                    return $374(__$ctx);
                }
            } else if (__t === "favicon") {
                return {
                    rel: "shortcut icon",
                    href: __$ctx.ctx.url
                };
                return;
            } else {
                return $374(__$ctx);
            }
        } else {
            return $374(__$ctx);
        }
    }
    function $5(__$ctx) {
        var __r106, __r107, __r108, __r109;
        var _$4xctx = __$ctx.ctx, _$4xprops = [ "title", "target" ], _$4xp = typeof _$4xctx.url, _$4xa = {
            href: _$4xp === "undefined" || _$4xp === "string" ? _$4xctx.url : (_$4xp = [], "", __r106 = __$ctx._buf, __$ctx._buf = _$4xp, __r107 = __$ctx._mode, __$ctx._mode = "", __r108 = __$ctx.ctx, __$ctx.ctx = _$4xctx.url, __r109 = $374(__$ctx), __$ctx._buf = __r106, __$ctx._mode = __r107, __$ctx.ctx = __r108, "", __r109, _$4xp.join(""))
        };
        while (_$4xp = _$4xprops.pop()) {
            _$4xctx[_$4xp] && (_$4xa[_$4xp] = _$4xctx[_$4xp]);
        }
        return _$4xa;
        return;
    }
    function $52(__$ctx) {
        var __t = __$ctx.block;
        if (__t === "b-link") {
            if (!!__$ctx.elem === false) {
                return "a";
                return;
            } else {
                return $374(__$ctx);
            }
        } else if (__t === "b-text") {
            if (!!__$ctx.elem === false) {
                return "";
                return;
            } else {
                if (!__$ctx.elem === false) {
                    return __$ctx.ctx.elem;
                    return;
                } else {
                    return $374(__$ctx);
                }
            }
        } else if (__t === "catalogue") {
            if (__$ctx.elem === "item") {
                return "section";
                return;
            } else {
                return $374(__$ctx);
            }
        } else if (__t === "block") {
            var __t = __$ctx.elem;
            if (__t === "elem-name") {
                return "h4";
                return;
            } else if (__t === "mod-val-title") {
                return "td";
                return;
            } else if (__t === "mod-val-name") {
                return "th";
                return;
            } else if (__t === "mod-val-list") {
                return "table";
                return;
            } else if (__t === "mod-name") {
                return "h4";
                return;
            } else if (__t === "level") {
                return "";
                return;
            } else if (__t === "section") {
                return "h3";
                return;
            } else {
                return $374(__$ctx);
            }
        } else if (__t === "example") {
            if (!(__$ctx.elem === "live" || __$ctx.elem === "source") === false) {
                return "iframe";
                return;
            } else {
                if (__$ctx.elem === "title") {
                    return "a";
                    return;
                } else {
                    return $374(__$ctx);
                }
            }
        } else if (__t === "menu") {
            if (__$ctx.elem === "item") {
                return "span";
                return;
            } else {
                return $374(__$ctx);
            }
        } else if (__t === "link") {
            if (!__$ctx.ctx.url === false) {
                if (!!__$ctx.elem === false) {
                    return "a";
                    return;
                } else {
                    return $107(__$ctx);
                }
            } else {
                return $107(__$ctx);
            }
        } else if (__t === "headline") {
            if (!__$ctx.mods.level === false) {
                if (!!__$ctx.elem === false) {
                    return "h" + __$ctx.mods.level;
                    return;
                } else {
                    return $118(__$ctx);
                }
            } else {
                return $118(__$ctx);
            }
        } else if (__t === "page") {
            var __t = __$ctx.elem;
            if (__t === "js") {
                return "script";
                return;
            } else if (__t === "css") {
                if (!__$ctx.ctx.url === false) {
                    return "link";
                    return;
                } else {
                    return "style";
                    return;
                }
            } else if (__t === "assets") {
                return "";
                return;
            } else if (__t === "favicon") {
                return "link";
                return;
            } else if (__t === "head") {
                return "head";
                return;
            } else if (__t === "link") {
                return "link";
                return;
            } else if (__t === "title") {
                return "title";
                return;
            } else if (__t === "meta") {
                return "meta";
                return;
            } else if (__t === "root") {
                return "html";
                return;
            } else {
                if (!!__$ctx.elem === false) {
                    return "body";
                    return;
                } else {
                    return $374(__$ctx);
                }
            }
        } else if (__t === "global") {
            if (!!__$ctx.elem === false) {
                return "";
                return;
            } else {
                return $374(__$ctx);
            }
        } else {
            return $374(__$ctx);
        }
    }
    function $107(__$ctx) {
        if (!!__$ctx.elem === false) {
            return "span";
            return;
        } else {
            return $374(__$ctx);
        }
    }
    function $118(__$ctx) {
        if (!!__$ctx.elem === false) {
            return "h1";
            return;
        } else {
            return $374(__$ctx);
        }
    }
    function $157(__$ctx) {
        var __t = __$ctx.block;
        if (__t === "b-text") {
            if (!(__$ctx["__$anflg25"] !== true) === false) {
                if (!~[ "h1", "h2", "h3", "h4", "h5" ].indexOf(__$ctx.elem) === false) {
                    return $161(__$ctx);
                } else {
                    return $374(__$ctx);
                }
            } else {
                return $374(__$ctx);
            }
        } else if (__t === "block") {
            return $166(__$ctx);
        } else if (__t === "catalogue") {
            return $213(__$ctx);
        } else if (__t === "example") {
            if (!!__$ctx.elem === false) {
                return $234(__$ctx);
            } else {
                return $239(__$ctx);
            }
        } else if (__t === "menu") {
            if (__$ctx.elem === "item") {
                if (!(__$ctx["__$anflg15"] !== true) === false) {
                    if (!__$ctx.ctx.url === false) {
                        {
                            "";
                            var __r55 = __$ctx["__$anflg15"];
                            __$ctx["__$anflg15"] = true;
                            {
                                "";
                                var __r56 = __$ctx.ctx;
                                __$ctx.ctx = {
                                    block: "link",
                                    mix: {
                                        block: "menu",
                                        elem: "item"
                                    },
                                    url: __$ctx.ctx.url,
                                    content: __$ctx.ctx.content
                                };
                                var __r57 = __$ctx._mode;
                                __$ctx._mode = "";
                                $374(__$ctx);
                                __$ctx.ctx = __r56;
                                __$ctx._mode = __r57;
                                "";
                            }
                            __$ctx["__$anflg15"] = __r55;
                            "";
                        }
                        return;
                    } else {
                        return $374(__$ctx);
                    }
                } else {
                    return $374(__$ctx);
                }
            } else {
                return $374(__$ctx);
            }
        } else if (__t === "page") {
            if (!(__$ctx["__$anflg14"] !== true) === false) {
                if (!!__$ctx.elem === false) {
                    return $264(__$ctx);
                } else {
                    return $374(__$ctx);
                }
            } else {
                return $374(__$ctx);
            }
        } else if (__t === "global") {
            return $269(__$ctx);
        } else {
            return $374(__$ctx);
        }
    }
    function $161(__$ctx) {
        var __r101, __r105, __r102, __r103, __r104;
        return "", __r101 = __$ctx["__$anflg25"], __$ctx["__$anflg25"] = true, __r105 = ("", __r102 = __$ctx.ctx, __$ctx.ctx = {
            block: "headline",
            mods: {
                level: __$ctx.elem.charAt(1)
            },
            content: __$ctx.ctx.content
        }, __r103 = __$ctx._mode, __$ctx._mode = "", __r104 = $374(__$ctx), __$ctx.ctx = __r102, __$ctx._mode = __r103, "", __r104), __$ctx["__$anflg25"] = __r101, "", __r105;
        return;
    }
    function $166(__$ctx) {
        if (!(__$ctx["__$anflg24"] !== true) === false) {
            if (!__$ctx._isShowCase === false) {
                if (!!__$ctx.elem === false) {
                    return $170(__$ctx);
                } else {
                    return $175(__$ctx);
                }
            } else {
                return $175(__$ctx);
            }
        } else {
            return $175(__$ctx);
        }
    }
    function $170(__$ctx) {
        var _$4rctx = __$ctx.ctx;
        {
            "";
            var __r98 = __$ctx["__$anflg24"];
            __$ctx["__$anflg24"] = true;
            {
                "";
                var __r99 = __$ctx.ctx;
                __$ctx.ctx = {
                    block: "catalogue",
                    elem: "item",
                    content: [ {
                        elem: "item-name",
                        url: _$4rctx.url,
                        content: _$4rctx.name
                    }, {
                        elelm: "item-title",
                        content: _$4rctx.title
                    } ]
                };
                var __r100 = __$ctx._mode;
                __$ctx._mode = "";
                $374(__$ctx);
                __$ctx.ctx = __r99;
                __$ctx._mode = __r100;
                "";
            }
            __$ctx["__$anflg24"] = __r98;
            "";
        }
        undefined;
        return;
    }
    function $175(__$ctx) {
        var __t = __$ctx.elem;
        if (__t === "mod") {
            if (!(__$ctx["__$anflg21"] !== true) === false) {
                if (!__$ctx._isElem === false) {
                    if (!!__$ctx._firstMod === false) {
                        __$ctx._firstMod = __$ctx.ctx;
                        {
                            "";
                            var __r86 = __$ctx["__$anflg21"];
                            __$ctx["__$anflg21"] = true;
                            {
                                "";
                                var __r87 = __$ctx.ctx;
                                __$ctx.ctx = [ {
                                    block: "headline",
                                    mods: {
                                        level: 5
                                    },
                                    content: "Модификаторы элемента"
                                }, __$ctx.ctx ];
                                var __r88 = __$ctx._mode;
                                __$ctx._mode = "";
                                $374(__$ctx);
                                __$ctx.ctx = __r87;
                                __$ctx._mode = __r88;
                                "";
                            }
                            __$ctx["__$anflg21"] = __r86;
                            "";
                        }
                        undefined;
                        return;
                    } else {
                        return $185(__$ctx);
                    }
                } else {
                    return $185(__$ctx);
                }
            } else {
                return $185(__$ctx);
            }
        } else if (__t === "elem") {
            if (!(__$ctx["__$anflg20"] !== true) === false) {
                var __r81, __r85, __r82, __r83, __r84;
                return "", __r81 = __$ctx["__$anflg20"], __$ctx["__$anflg20"] = true, __r85 = ("", __r82 = __$ctx._isElem, __$ctx._isElem = true, __r83 = __$ctx._firstMod, __$ctx._firstMod = null, __r84 = $166(__$ctx), __$ctx._isElem = __r82, __$ctx._firstMod = __r83, "", __r84), __$ctx["__$anflg20"] = __r81, "", __r85;
                return;
            } else {
                if (!(__$ctx["__$anflg19"] !== true) === false) {
                    if (!!__$ctx._firstElem === false) {
                        __$ctx._firstElem = __$ctx.ctx;
                        {
                            "";
                            var __r78 = __$ctx["__$anflg19"];
                            __$ctx["__$anflg19"] = true;
                            {
                                "";
                                var __r79 = __$ctx.ctx;
                                __$ctx.ctx = [ {
                                    block: "headline",
                                    mods: {
                                        level: 3
                                    },
                                    content: "Элементы"
                                }, __$ctx.ctx ];
                                var __r80 = __$ctx._mode;
                                __$ctx._mode = "";
                                $374(__$ctx);
                                __$ctx.ctx = __r79;
                                __$ctx._mode = __r80;
                                "";
                            }
                            __$ctx["__$anflg19"] = __r78;
                            "";
                        }
                        undefined;
                        return;
                    } else {
                        return $374(__$ctx);
                    }
                } else {
                    return $374(__$ctx);
                }
            }
        } else if (__t === "mod-val") {
            if (!(__$ctx["__$anflg18"] !== true) === false) {
                return $206(__$ctx);
            } else {
                return $374(__$ctx);
            }
        } else if (__t === "note") {
            return null;
            return;
        } else {
            return $374(__$ctx);
        }
    }
    function $185(__$ctx) {
        if (!(__$ctx["__$anflg17"] !== true) === false) {
            if (!!__$ctx._firstMod === false) {
                __$ctx._firstMod = __$ctx.ctx;
                {
                    "";
                    var __r70 = __$ctx["__$anflg17"];
                    __$ctx["__$anflg17"] = true;
                    {
                        "";
                        var __r71 = __$ctx.ctx;
                        __$ctx.ctx = [ {
                            block: "headline",
                            mods: {
                                level: 3
                            },
                            content: "Модификаторы"
                        }, __$ctx.ctx ];
                        var __r72 = __$ctx._mode;
                        __$ctx._mode = "";
                        $374(__$ctx);
                        __$ctx.ctx = __r71;
                        __$ctx._mode = __r72;
                        "";
                    }
                    __$ctx["__$anflg17"] = __r70;
                    "";
                }
                undefined;
                return;
            } else {
                return $374(__$ctx);
            }
        } else {
            return $374(__$ctx);
        }
    }
    function $206(__$ctx) {
        var __r73, __r77, __r74, __r75, __r76;
        return "", __r73 = __$ctx["__$anflg18"], __$ctx["__$anflg18"] = true, __r77 = ("", __r74 = __$ctx.ctx, __$ctx.ctx = {
            tag: "tr",
            content: [ {
                elem: "mod-val-name",
                content: __$ctx.ctx.name
            }, {
                elem: "mod-val-title",
                content: __$ctx.ctx.title
            } ]
        }, __r75 = __$ctx._mode, __$ctx._mode = "", __r76 = $374(__$ctx), __$ctx.ctx = __r74, __$ctx._mode = __r75, "", __r76), __$ctx["__$anflg18"] = __r73, "", __r77;
        return;
    }
    function $213(__$ctx) {
        if (__$ctx.elem === "item-name") {
            if (!(__$ctx["__$anflg23"] !== true) === false) {
                if (!__$ctx.ctx.url === false) {
                    return $217(__$ctx);
                } else {
                    return $222(__$ctx);
                }
            } else {
                return $222(__$ctx);
            }
        } else {
            return $222(__$ctx);
        }
    }
    function $217(__$ctx) {
        var __r93, __r97, __r94, __r95, __r96;
        return "", __r93 = __$ctx["__$anflg23"], __$ctx["__$anflg23"] = true, __r97 = ("", __r94 = __$ctx.ctx, __$ctx.ctx = {
            block: "link",
            mix: {
                block: __$ctx.block,
                elem: __$ctx.elem
            },
            url: __$ctx.environ["site-root"] + __$ctx.ctx.url,
            content: __$ctx.ctx.content
        }, __r95 = __$ctx._mode, __$ctx._mode = "", __r96 = $374(__$ctx), __$ctx.ctx = __r94, __$ctx._mode = __r95, "", __r96), __$ctx["__$anflg23"] = __r93, "", __r97;
        return;
    }
    function $222(__$ctx) {
        if (!(__$ctx["__$anflg22"] !== true) === false) {
            if (!(__$ctx.mods && __$ctx.mods.type === "showcase") === false) {
                if (!!__$ctx.elem === false) {
                    var __r89, __r92, __r90, __r91;
                    return "", __r89 = __$ctx["__$anflg22"], __$ctx["__$anflg22"] = true, __r92 = ("", __r90 = __$ctx._isShowCase, __$ctx._isShowCase = true, __r91 = $213(__$ctx), __$ctx._isShowCase = __r90, "", __r91), __$ctx["__$anflg22"] = __r89, "", __r92;
                    return;
                } else {
                    return $374(__$ctx);
                }
            } else {
                return $374(__$ctx);
            }
        } else {
            return $374(__$ctx);
        }
    }
    function $234(__$ctx) {
        if (!!__$ctx.ctx.url === false) {
            return false;
            return;
        } else {
            return $239(__$ctx);
        }
    }
    function $239(__$ctx) {
        if (!(__$ctx["__$anflg16"] !== true) === false) {
            if (!true === false) {
                if (!!__$ctx.elem === false) {
                    return $243(__$ctx);
                } else {
                    return $374(__$ctx);
                }
            } else {
                return $374(__$ctx);
            }
        } else {
            return $374(__$ctx);
        }
    }
    function $243(__$ctx) {
        var __r61, __r62, __r63, __r64, __r65, __r66;
        var _$3zurl = ("", __r61 = __$ctx._mode, __$ctx._mode = "url", __r62 = __$ctx.ctx, __$ctx.ctx = __$ctx.ctx.url, __r63 = $333(__$ctx), __$ctx._mode = __r61, __$ctx.ctx = __r62, "", __r63), _$3zsrc = ("", __r64 = __$ctx._mode, __$ctx._mode = "url", __r65 = __$ctx.ctx, __$ctx.ctx = __$ctx.ctx.src, __r66 = $333(__$ctx), __$ctx._mode = __r64, __$ctx.ctx = __r65, "", __r66);
        {
            "";
            var __r67 = __$ctx["__$anflg16"];
            __$ctx["__$anflg16"] = true;
            {
                "";
                var __r68 = __$ctx._url;
                __$ctx._url = _$3zurl;
                var __r69 = __$ctx._src;
                __$ctx._src = _$3zsrc;
                $234(__$ctx);
                __$ctx._url = __r68;
                __$ctx._src = __r69;
                "";
            }
            __$ctx["__$anflg16"] = __r67;
            "";
        }
        undefined;
        return;
    }
    function $264(__$ctx) {
        var __r50, __r51;
        var _$2yctx = __$ctx.ctx, _$2ydoctype = ("", __r50 = __$ctx._mode, __$ctx._mode = "doctype", __r51 = $369(__$ctx), __$ctx._mode = __r50, "", __r51), _$2ybuf = [ _$2ydoctype, {
            elem: "root",
            content: [ {
                elem: "head",
                content: [ {
                    elem: "meta",
                    attrs: {
                        charset: "utf-8"
                    }
                }, {
                    elem: "title",
                    content: _$2yctx.title
                }, _$2yctx.meta || "", _$2yctx.hasOwnProperty("favicon") ? {
                    elem: "favicon",
                    url: _$2yctx.favicon
                } : "", {
                    elem: "assets",
                    content: _$2yctx.assets
                } ]
            }, _$2yctx ]
        } ];
        {
            "";
            var __r52 = __$ctx["__$anflg14"];
            __$ctx["__$anflg14"] = true;
            {
                "";
                var __r53 = __$ctx.ctx;
                __$ctx.ctx = _$2ybuf;
                var __r54 = __$ctx._mode;
                __$ctx._mode = "";
                $374(__$ctx);
                __$ctx.ctx = __r53;
                __$ctx._mode = __r54;
                "";
            }
            __$ctx["__$anflg14"] = __r52;
            "";
        }
        undefined;
        return;
    }
    function $269(__$ctx) {
        if (!(__$ctx["__$anflg13"] !== true) === false) {
            if (!!__$ctx.elem === false) {
                var _$2vparams = __$ctx.ctx.environ, _$2venv = __$ctx.environ;
                for (p in _$2vparams) {
                    _$2vparams.hasOwnProperty(p) && (_$2venv[p] = _$2vparams[p]);
                }
                {
                    "";
                    var __r49 = __$ctx["__$anflg13"];
                    __$ctx["__$anflg13"] = true;
                    $269(__$ctx);
                    __$ctx["__$anflg13"] = __r49;
                    "";
                }
                undefined;
                return;
            } else {
                return $374(__$ctx);
            }
        } else {
            return $374(__$ctx);
        }
    }
    function $279(__$ctx) {
        var __t = __$ctx.block;
        if (__t === "block") {
            var __t = __$ctx.elem;
            if (__t === "elem-name" || __t === "mod-name") {
                return {
                    block: "headline",
                    mods: {
                        level: 4
                    }
                };
                return;
            } else if (__t === "description") {
                return {
                    block: "static-text"
                };
                return;
            } else {
                return $374(__$ctx);
            }
        } else if (__t === "headline") {
            if (!!__$ctx.elem === false) {
                if (!!__$ctx.mods.level === false) {
                    return {
                        mods: {
                            level: 1
                        }
                    };
                    return;
                } else {
                    return $374(__$ctx);
                }
            } else {
                return $374(__$ctx);
            }
        } else {
            return $374(__$ctx);
        }
    }
    function $299(__$ctx) {
        var __t = __$ctx.block;
        if (__t === "block") {
            var __t = __$ctx.elem;
            if (__t === "elem") {
                return [ {
                    elem: "elem-name",
                    content: __$ctx.ctx.name
                }, {
                    elem: "elem-title",
                    content: __$ctx.ctx.title
                }, __$ctx.ctx.description, __$ctx.ctx.examples, __$ctx.ctx.content ];
                return;
            } else if (__t === "mod") {
                var _$4bctx = __$ctx.ctx;
                return [ {
                    elem: "mod-name",
                    content: _$4bctx.name
                }, {
                    elem: "mod-title",
                    content: _$4bctx.title
                }, _$4bctx.description, {
                    elem: "mod-val-list",
                    content: _$4bctx.content
                }, _$4bctx.examples ];
                return;
            } else if (__t === "examples") {
                return $305(__$ctx);
            } else if (__t === "level") {
                return [ {
                    elem: "note",
                    content: __$ctx.ctx.name
                }, __$ctx.ctx.content ];
                return;
            } else {
                return $315(__$ctx);
            }
        } else if (__t === "example") {
            if (__$ctx.elem === "source-switch") {
                return {
                    block: "link",
                    mods: {
                        pseudo: "yes"
                    },
                    mix: {
                        block: "cut"
                    },
                    content: "Исходный код"
                };
                return;
            } else {
                if (!!__$ctx.elem === false) {
                    return [ {
                        elem: "title",
                        url: __$ctx._url,
                        content: __$ctx.ctx.title
                    }, {
                        elem: "source-switch"
                    }, {
                        elem: "source",
                        url: __$ctx._src
                    }, {
                        elem: "live",
                        url: __$ctx._url
                    } ];
                    return;
                } else {
                    return $374(__$ctx);
                }
            }
        } else {
            return $374(__$ctx);
        }
    }
    function $305(__$ctx) {
        if (!__$ctx._.isSimple(__$ctx.ctx.content) === false) {
            __$ctx.ctx.content;
            return;
        } else {
            if (!__$ctx._.isArray(__$ctx.ctx.content) === false) {
                var __r58, __r59, __r60;
                var _$3xctx = __$ctx.ctx, _$3xi = 0, _$3xl = _$3xctx.content.length, _$3xr = [];
                while (_$3xi < _$3xl) {
                    _$3xr.push(("", __r58 = __$ctx.ctx, __r59 = __r58.content, __r58.content = _$3xctx.content[_$3xi++], __r60 = $305(__$ctx), __r58.content = __r59, "", __r60));
                }
                return _$3xr;
                return;
            } else {
                return $315(__$ctx);
            }
        }
    }
    function $315(__$ctx) {
        if (!!__$ctx.elem === false) {
            return [ {
                elem: "name",
                content: __$ctx.ctx.name
            }, {
                elem: "title",
                content: __$ctx.ctx.title
            }, __$ctx.ctx.description && {
                elem: "description",
                content: __$ctx.ctx.description
            }, __$ctx.ctx.examples, __$ctx.ctx.content ];
            return;
        } else {
            return $374(__$ctx);
        }
    }
    function $333(__$ctx) {
        return __$ctx.environ["site-root"] + "/examples/examples.sets/" + __$ctx.ctx;
        return;
    }
    function $338(__$ctx) {
        if (__$ctx.block === "example") {
            if (!!__$ctx.elem === false) {
                return true;
                return;
            } else {
                return $374(__$ctx);
            }
        } else {
            return $374(__$ctx);
        }
    }
    function $346(__$ctx) {
        if (__$ctx.block === "page") {
            var __t = __$ctx.elem;
            if (__t === "js" || __t === "css" || __t === "assets" || __t === "head" || __t === "link" || __t === "title" || __t === "meta") {
                return false;
                return;
            } else {
                return $374(__$ctx);
            }
        } else {
            return $374(__$ctx);
        }
    }
    function $369(__$ctx) {
        return __$ctx.ctx.doctype || "<!doctype html>";
        return;
    }
    function $374(__$ctx) {
        if (!__$ctx._start === false) {
            if (!!__$ctx.environ === false) {
                __$ctx.environ = {};
                applyc(__$ctx);
                undefined;
                return;
            } else {
                return $380(__$ctx);
            }
        } else {
            return $380(__$ctx);
        }
    }
    function $380(__$ctx) {
        var __t = __$ctx._mode;
        if (__t === "content") {
            return __$ctx.ctx.content;
            return;
        } else if (__t === "mix" || __t === "bem" || __t === "jsAttr" || __t === "js" || __t === "cls" || __t === "attrs" || __t === "tag") {
            return undefined;
            return;
        } else {
            if (!__$ctx.ctx === false) {
                if (!__$ctx.ctx.link === false) {
                    if (!!__$ctx._.isSimple(__$ctx.ctx) === false) {
                        return $401(__$ctx);
                    } else {
                        return $406(__$ctx);
                    }
                } else {
                    return $406(__$ctx);
                }
            } else {
                return $406(__$ctx);
            }
        }
    }
    function $401(__$ctx) {
        var __r47, __r48;
        function _$2kfollow() {
            if (this.ctx.link === "no-follow") {
                return undefined;
            } else {
                undefined;
            }
            var data = this._links[this.ctx.link];
            return "", __r47 = this.ctx, this.ctx = data, __r48 = $1(__$ctx), this.ctx = __r47, "", __r48;
        }
        if (!cache || !__$ctx._cacheLog) {
            return _$2kfollow.call(__$ctx);
        } else {
            undefined;
        }
        var _$2kcontents = __$ctx._buf.slice(__$ctx._cachePos).join("");
        __$ctx._cachePos = __$ctx._buf.length;
        __$ctx._cacheLog.push(_$2kcontents, {
            log: __$ctx._localLog.slice(),
            link: __$ctx.ctx.link
        });
        var _$2kres = _$2kfollow.call(__$ctx);
        __$ctx._cachePos = __$ctx._buf.length;
        return _$2kres;
        return;
    }
    function $406(__$ctx) {
        if (!cache === false) {
            if (!__$ctx.ctx === false) {
                if (!__$ctx.ctx.cache === false) {
                    return $410(__$ctx);
                } else {
                    return $415(__$ctx);
                }
            } else {
                return $415(__$ctx);
            }
        } else {
            return $415(__$ctx);
        }
    }
    function $410(__$ctx) {
        var _$2jcached;
        function _$2jsetProperty(obj, key, value) {
            if (key.length === 0) {
                return undefined;
            } else {
                undefined;
            }
            if (Array.isArray(value)) {
                var target = obj;
                for (var i = 0; i < value.length - 1; i++) {
                    target = target[value[i]];
                }
                value = target[value[i]];
            } else {
                undefined;
            }
            var host = obj, previous;
            for (var i = 0; i < key.length - 1; i++) {
                host = host[key[i]];
            }
            previous = host[key[i]];
            host[key[i]] = value;
            return previous;
        }
        if (_$2jcached = cache.get(__$ctx.ctx.cache)) {
            var _$2joldLinks = __$ctx._links;
            if (__$ctx.ctx.links) {
                __$ctx._links = __$ctx.ctx.links;
            } else {
                undefined;
            }
            for (var _$2ji = 0; _$2ji < _$2jcached.log.length; _$2ji++) {
                if (typeof _$2jcached.log[_$2ji] === "string") {
                    __$ctx._buf.push(_$2jcached.log[_$2ji]);
                    continue;
                } else {
                    undefined;
                }
                var _$2jlog = _$2jcached.log[_$2ji], _$2jreverseLog;
                _$2jreverseLog = _$2jlog.log.map(function(entry) {
                    return {
                        key: entry[0],
                        value: _$2jsetProperty(this, entry[0], entry[1])
                    };
                }, __$ctx).reverse();
                {
                    "";
                    var __r37 = __$ctx.ctx, __r38 = __r37.cache;
                    __r37.cache = null;
                    var __r39 = __$ctx._cacheLog;
                    __$ctx._cacheLog = null;
                    var __r40 = __$ctx.ctx, __r41 = __r40.link;
                    __r40.link = _$2jlog.link;
                    $1(__$ctx);
                    __r37.cache = __r38;
                    __$ctx._cacheLog = __r39;
                    __r40.link = __r41;
                    "";
                }
                undefined;
                _$2jreverseLog.forEach(function(entry) {
                    _$2jsetProperty(this, entry.key, entry.value);
                }, __$ctx);
            }
            __$ctx._links = _$2joldLinks;
            return _$2jcached.res;
        } else {
            undefined;
        }
        var _$2jcacheLog = [], _$2jres;
        {
            "";
            var __r42 = __$ctx.ctx, __r43 = __r42.cache;
            __r42.cache = null;
            var __r44 = __$ctx._cachePos;
            __$ctx._cachePos = __$ctx._buf.length;
            var __r45 = __$ctx._cacheLog;
            __$ctx._cacheLog = _$2jcacheLog;
            var __r46 = __$ctx._localLog;
            __$ctx._localLog = [];
            {
                _$2jres = $1(__$ctx);
                var _$2jtail = __$ctx._buf.slice(__$ctx._cachePos).join("");
                if (_$2jtail) {
                    _$2jcacheLog.push(_$2jtail);
                } else {
                    undefined;
                }
            }
            __r42.cache = __r43;
            __$ctx._cachePos = __r44;
            __$ctx._cacheLog = __r45;
            __$ctx._localLog = __r46;
            "";
        }
        cache.set(__$ctx.ctx.cache, {
            log: _$2jcacheLog,
            res: _$2jres
        });
        return _$2jres;
        return;
    }
    function $415(__$ctx) {
        var __t = __$ctx._mode;
        if (__t === "default") {
            return $417(__$ctx);
        } else if (__t === "") {
            if (!__$ctx._.isSimple(__$ctx.ctx) === false) {
                __$ctx._listLength--;
                var _$2hctx = __$ctx.ctx;
                (_$2hctx && _$2hctx !== true || _$2hctx === 0) && __$ctx._buf.push(_$2hctx);
                return;
            } else {
                if (!!__$ctx.ctx === false) {
                    __$ctx._listLength--;
                    return;
                } else {
                    if (!__$ctx._.isArray(__$ctx.ctx) === false) {
                        return $426(__$ctx);
                    } else {
                        if (!true === false) {
                            return $429(__$ctx);
                        } else {
                            return $e(__$ctx);
                        }
                    }
                }
            }
        } else {
            return $e(__$ctx);
        }
    }
    function $417(__$ctx) {
        var __r20, __r8, __r12, __r13, __r14, __r15, __r16, __r17, __r18, __r19, __r9, __r21, __r22, __r23, __r26, __r27, __r28, __r29, __r30, __r31;
        var _$2i_this = __$ctx, _$2iBEM_ = _$2i_this.BEM, _$2iv = __$ctx.ctx, _$2ibuf = __$ctx._buf, _$2itag;
        _$2itag = ("", __r8 = __$ctx._mode, __$ctx._mode = "tag", __r9 = $52(__$ctx), __$ctx._mode = __r8, "", __r9);
        typeof _$2itag != "undefined" || (_$2itag = _$2iv.tag);
        typeof _$2itag != "undefined" || (_$2itag = "div");
        if (_$2itag) {
            var _$2ijsParams, _$2ijs;
            if (__$ctx.block && _$2iv.js !== false) {
                _$2ijs = ("", __r12 = __$ctx._mode, __$ctx._mode = "js", __r13 = $338(__$ctx), __$ctx._mode = __r12, "", __r13);
                _$2ijs = _$2ijs ? __$ctx._.extend(_$2iv.js, _$2ijs === true ? {} : _$2ijs) : _$2iv.js === true ? {} : _$2iv.js;
                _$2ijs && ((_$2ijsParams = {})[_$2iBEM_.INTERNAL.buildClass(__$ctx.block, _$2iv.elem)] = _$2ijs);
            } else {
                undefined;
            }
            _$2ibuf.push("<", _$2itag);
            var _$2iisBEM = ("", __r14 = __$ctx._mode, __$ctx._mode = "bem", __r15 = $346(__$ctx), __$ctx._mode = __r14, "", __r15);
            typeof _$2iisBEM != "undefined" || (_$2iisBEM = typeof _$2iv.bem != "undefined" ? _$2iv.bem : _$2iv.block || _$2iv.elem);
            var _$2icls = ("", __r16 = __$ctx._mode, __$ctx._mode = "cls", __r17 = $374(__$ctx), __$ctx._mode = __r16, "", __r17);
            _$2icls || (_$2icls = _$2iv.cls);
            var _$2iaddJSInitClass = _$2iv.block && _$2ijsParams;
            if (_$2iisBEM || _$2icls) {
                _$2ibuf.push(' class="');
                if (_$2iisBEM) {
                    _$2iBEM_.INTERNAL.buildClasses(__$ctx.block, _$2iv.elem, _$2iv.elemMods || _$2iv.mods, _$2ibuf);
                    var _$2imix = ("", __r18 = __$ctx._mode, __$ctx._mode = "mix", __r19 = $279(__$ctx), __$ctx._mode = __r18, "", __r19);
                    _$2iv.mix && (_$2imix = _$2imix ? _$2imix.concat(_$2iv.mix) : _$2iv.mix);
                    if (_$2imix) {
                        var _$2ivisited = {};
                        function _$2ivisitedKey(block, elem) {
                            return (block || "") + "__" + (elem || "");
                        }
                        _$2ivisited[_$2ivisitedKey(__$ctx.block, __$ctx.elem)] = true;
                        if (!__$ctx._.isArray(_$2imix)) {
                            _$2imix = [ _$2imix ];
                        } else {
                            undefined;
                        }
                        for (var _$2ii = 0; _$2ii < _$2imix.length; _$2ii++) {
                            var _$2imixItem = _$2imix[_$2ii];
                            if (!_$2imixItem) {
                                continue;
                            } else {
                                undefined;
                            }
                            var _$2ihasItem = _$2imixItem.block || _$2imixItem.elem, _$2iblock = _$2imixItem.block || _$2imixItem._block || _$2i_this.block, _$2ielem = _$2imixItem.elem || _$2imixItem._elem || _$2i_this.elem;
                            _$2ihasItem && _$2ibuf.push(" ");
                            _$2iBEM_.INTERNAL[_$2ihasItem ? "buildClasses" : "buildModsClasses"](_$2iblock, _$2imixItem.elem || _$2imixItem._elem || (_$2imixItem.block ? undefined : _$2i_this.elem), _$2imixItem.elemMods || _$2imixItem.mods, _$2ibuf);
                            if (_$2imixItem.js) {
                                (_$2ijsParams || (_$2ijsParams = {}))[_$2iBEM_.INTERNAL.buildClass(_$2iblock, _$2imixItem.elem)] = _$2imixItem.js === true ? {} : _$2imixItem.js;
                                _$2iaddJSInitClass || (_$2iaddJSInitClass = _$2iblock && !_$2imixItem.elem);
                            } else {
                                undefined;
                            }
                            if (_$2ihasItem && !_$2ivisited[_$2ivisitedKey(_$2iblock, _$2ielem)]) {
                                _$2ivisited[_$2ivisitedKey(_$2iblock, _$2ielem)] = true;
                                var _$2inestedMix = ("", __r20 = __$ctx.block, __$ctx.block = _$2iblock, __r21 = __$ctx.elem, __$ctx.elem = _$2ielem, __r22 = __$ctx._mode, __$ctx._mode = "mix", __r23 = $279(__$ctx), __$ctx.block = __r20, __$ctx.elem = __r21, __$ctx._mode = __r22, "", __r23);
                                if (_$2inestedMix) {
                                    for (var _$2ij = 0; _$2ij < _$2inestedMix.length; _$2ij++) {
                                        var _$2inestedItem = _$2inestedMix[_$2ij];
                                        if (!_$2inestedItem.block && !_$2inestedItem.elem || !_$2ivisited[_$2ivisitedKey(_$2inestedItem.block, _$2inestedItem.elem)]) {
                                            _$2inestedItem._block = _$2iblock;
                                            _$2inestedItem._elem = _$2ielem;
                                            _$2imix.splice(_$2ii + 1, 0, _$2inestedItem);
                                        } else {
                                            undefined;
                                        }
                                    }
                                } else {
                                    undefined;
                                }
                            } else {
                                undefined;
                            }
                        }
                    } else {
                        undefined;
                    }
                } else {
                    undefined;
                }
                _$2icls && _$2ibuf.push(_$2iisBEM ? " " : "", _$2icls);
                _$2iaddJSInitClass && _$2ibuf.push(" i-bem");
                _$2ibuf.push('"');
            } else {
                undefined;
            }
            if (_$2ijsParams) {
                var _$2ijsAttr = ("", __r26 = __$ctx._mode, __$ctx._mode = "jsAttr", __r27 = $374(__$ctx), __$ctx._mode = __r26, "", __r27);
                _$2ibuf.push(" ", _$2ijsAttr || "onclick", '="return ', __$ctx._.attrEscape(JSON.stringify(_$2ijsParams)), '"');
            } else {
                undefined;
            }
            var _$2iattrs = ("", __r28 = __$ctx._mode, __$ctx._mode = "attrs", __r29 = $2(__$ctx), __$ctx._mode = __r28, "", __r29);
            _$2iattrs = __$ctx._.extend(_$2iattrs, _$2iv.attrs);
            if (_$2iattrs) {
                var _$2iname;
                for (_$2iname in _$2iattrs) {
                    if (_$2iattrs[_$2iname] === undefined) {
                        continue;
                    } else {
                        undefined;
                    }
                    _$2ibuf.push(" ", _$2iname, '="', __$ctx._.attrEscape(_$2iattrs[_$2iname]), '"');
                }
            } else {
                undefined;
            }
        } else {
            undefined;
        }
        if (__$ctx._.isShortTag(_$2itag)) {
            _$2ibuf.push("/>");
        } else {
            _$2itag && _$2ibuf.push(">");
            var _$2icontent = ("", __r30 = __$ctx._mode, __$ctx._mode = "content", __r31 = $299(__$ctx), __$ctx._mode = __r30, "", __r31);
            if (_$2icontent || _$2icontent === 0) {
                var _$2iisBEM = __$ctx.block || __$ctx.elem;
                {
                    "";
                    var __r32 = __$ctx._notNewList;
                    __$ctx._notNewList = false;
                    var __r33 = __$ctx.position;
                    __$ctx.position = _$2iisBEM ? 1 : __$ctx.position;
                    var __r34 = __$ctx._listLength;
                    __$ctx._listLength = _$2iisBEM ? 1 : __$ctx._listLength;
                    var __r35 = __$ctx.ctx;
                    __$ctx.ctx = _$2icontent;
                    var __r36 = __$ctx._mode;
                    __$ctx._mode = "";
                    $374(__$ctx);
                    __$ctx._notNewList = __r32;
                    __$ctx.position = __r33;
                    __$ctx._listLength = __r34;
                    __$ctx.ctx = __r35;
                    __$ctx._mode = __r36;
                    "";
                }
                undefined;
            } else {
                undefined;
            }
            _$2itag && _$2ibuf.push("</", _$2itag, ">");
        }
        return;
    }
    function $426(__$ctx) {
        var _$2fv = __$ctx.ctx, _$2fl = _$2fv.length, _$2fi = 0, _$2fprevPos = __$ctx.position, _$2fprevNotNewList = __$ctx._notNewList;
        if (_$2fprevNotNewList) {
            __$ctx._listLength += _$2fl - 1;
        } else {
            __$ctx.position = 0;
            __$ctx._listLength = _$2fl;
        }
        __$ctx._notNewList = true;
        while (_$2fi < _$2fl) {
            var _$2fnewCtx = _$2fv[_$2fi++];
            {
                "";
                var __r7 = __$ctx.ctx;
                __$ctx.ctx = _$2fnewCtx == null ? "" : _$2fnewCtx;
                $374(__$ctx);
                __$ctx.ctx = __r7;
                "";
            }
            undefined;
        }
        _$2fprevNotNewList || (__$ctx.position = _$2fprevPos);
        return;
    }
    function $429(__$ctx) {
        var _$2evBlock = __$ctx.ctx.block, _$2evElem = __$ctx.ctx.elem, _$2eblock = __$ctx._currBlock || __$ctx.block;
        __$ctx.ctx || (__$ctx.ctx = {});
        {
            "";
            var __r0 = __$ctx._mode;
            __$ctx._mode = "default";
            var __r1 = __$ctx._links;
            __$ctx._links = __$ctx.ctx.links || __$ctx._links;
            var __r2 = __$ctx.block;
            __$ctx.block = _$2evBlock || (_$2evElem ? _$2eblock : undefined);
            var __r3 = __$ctx._currBlock;
            __$ctx._currBlock = _$2evBlock || _$2evElem ? undefined : _$2eblock;
            var __r4 = __$ctx.elem;
            __$ctx.elem = __$ctx.ctx.elem;
            var __r5 = __$ctx.mods;
            __$ctx.mods = (_$2evBlock ? __$ctx.ctx.mods : __$ctx.mods) || {};
            var __r6 = __$ctx.elemMods;
            __$ctx.elemMods = __$ctx.ctx.elemMods || {};
            {
                __$ctx.block || __$ctx.elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
                $157(__$ctx);
                undefined;
            }
            __$ctx._mode = __r0;
            __$ctx._links = __r1;
            __$ctx.block = __r2;
            __$ctx._currBlock = __r3;
            __$ctx.elem = __r4;
            __$ctx.mods = __r5;
            __$ctx.elemMods = __r6;
            "";
        }
        return;
    }
    function $e(__$ctx) {
        throw new Error(this);
        return;
    }
    !function oninit() {
        var BEM_ = {}, toString = Object.prototype.toString, SHORT_TAGS = {
            area: 1,
            base: 1,
            br: 1,
            col: 1,
            command: 1,
            embed: 1,
            hr: 1,
            img: 1,
            input: 1,
            keygen: 1,
            link: 1,
            meta: 1,
            param: 1,
            source: 1,
            wbr: 1
        };
        (function(BEM, undefined) {
            var MOD_DELIM = "_", ELEM_DELIM = "__", NAME_PATTERN = "[a-zA-Z0-9-]+";
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
                NAME_PATTERN: NAME_PATTERN,
                MOD_DELIM: MOD_DELIM,
                ELEM_DELIM: ELEM_DELIM,
                buildModPostfix: function(modName, modVal, buffer) {
                    var res = buffer || [];
                    buildModPostfix(modName, modVal, res);
                    return buffer ? res : res.join("");
                },
                buildClass: function(block, elem, modName, modVal, buffer) {
                    var typeOf = typeof modName;
                    if (typeOf == "string") {
                        if (typeof modVal != "string") {
                            buffer = modVal;
                            modVal = modName;
                            modName = elem;
                            elem = undefined;
                        } else {
                            undefined;
                        }
                    } else {
                        if (typeOf != "undefined") {
                            buffer = modName;
                            modName = undefined;
                        } else {
                            if (elem && typeof elem != "string") {
                                buffer = elem;
                                elem = undefined;
                            } else {
                                undefined;
                            }
                        }
                    }
                    if (!(elem || modName || buffer)) {
                        return block;
                    } else {
                        undefined;
                    }
                    var res = buffer || [];
                    elem ? buildElemClass(block, elem, modName, modVal, res) : buildBlockClass(block, modName, modVal, res);
                    return buffer ? res : res.join("");
                },
                buildModsClasses: function(block, elem, mods, buffer) {
                    var res = buffer || [];
                    if (mods) {
                        var modName;
                        for (modName in mods) {
                            if (!mods.hasOwnProperty(modName)) {
                                continue;
                            } else {
                                undefined;
                            }
                            var modVal = mods[modName];
                            if (modVal == null) {
                                continue;
                            } else {
                                undefined;
                            }
                            modVal = mods[modName] + "";
                            if (!modVal) {
                                continue;
                            } else {
                                undefined;
                            }
                            res.push(" ");
                            if (elem) {
                                buildElemClass(block, elem, modName, modVal, res);
                            } else {
                                buildBlockClass(block, modName, modVal, res);
                            }
                        }
                    } else {
                        undefined;
                    }
                    return buffer ? res : res.join("");
                },
                buildClasses: function(block, elem, mods, buffer) {
                    var res = buffer || [];
                    elem ? buildElemClass(block, elem, undefined, undefined, res) : buildBlockClass(block, undefined, undefined, res);
                    this.buildModsClasses(block, elem, mods, buffer);
                    return buffer ? res : res.join("");
                }
            };
        })(BEM_);
        var buildEscape = function() {
            var ts = {
                '"': "&quot;",
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;"
            }, f = function(t) {
                return ts[t] || t;
            };
            return function(r) {
                r = new RegExp(r, "g");
                return function(s) {
                    return ("" + s).replace(r, f);
                };
            };
        }();
        function BEMContext(context, apply_) {
            this.ctx = typeof context === null ? "" : context;
            this.apply = apply_;
            this._buf = [];
            this._ = this;
            this._start = true;
            this._mode = "";
            this._listLength = 0;
            this._notNewList = false;
            this.position = 0;
            this.block = undefined;
            this.elem = undefined;
            this.mods = undefined;
            this.elemMods = undefined;
        }
        BEMContext.prototype.isArray = function isArray(obj) {
            return toString.call(obj) === "[object Array]";
        };
        BEMContext.prototype.isSimple = function isSimple(obj) {
            var t = typeof obj;
            return t === "string" || t === "number" || t === "boolean";
        };
        BEMContext.prototype.isShortTag = function isShortTag(t) {
            return SHORT_TAGS.hasOwnProperty(t);
        };
        BEMContext.prototype.extend = function extend(o1, o2) {
            if (!o1 || !o2) {
                return o1 || o2;
            } else {
                undefined;
            }
            var res = {}, n;
            for (n in o1) {
                o1.hasOwnProperty(n) && (res[n] = o1[n]);
            }
            for (n in o2) {
                o2.hasOwnProperty(n) && (res[n] = o2[n]);
            }
            return res;
        };
        BEMContext.prototype.identify = function() {
            var cnt = 0, id = BEM_["__id"] = +(new Date), expando = "__" + id, get = function() {
                return "uniq" + id + ++cnt;
            };
            return function(obj, onlyGet) {
                if (!obj) {
                    return get();
                } else {
                    undefined;
                }
                if (onlyGet || obj[expando]) {
                    return obj[expando];
                } else {
                    return obj[expando] = get();
                }
            };
        }();
        BEMContext.prototype.xmlEscape = buildEscape("[&<>]");
        BEMContext.prototype.attrEscape = buildEscape('["&<>]');
        BEMContext.prototype.BEM = BEM_;
        BEMContext.prototype.isFirst = function isFirst() {
            return this.position === 1;
        };
        BEMContext.prototype.isLast = function isLast() {
            return this.position === this._listLength;
        };
        BEMContext.prototype.generateId = function generateId() {
            return this.identify(this.ctx);
        };
        exports.apply = BEMContext.apply = function _apply() {
            var ctx = new BEMContext(this, apply);
            ctx.apply();
            return ctx._buf.join("");
        };
    }();
    return exports;
    exports.apply = apply;
    function apply(ctx) {
        return applyc(ctx || this);
    }
    function applyc(__$ctx) {
        return $1(__$ctx);
    }
    return exports;
})(typeof exports === "undefined" ? {} : exports);;
  return function(options) {
    var context = this;
    if (!options) options = {};
    cache = options.cache;
    return function() {
      if (context === this) context = undefined;
      return xjst.apply.call(
[context]
      );
    }.call(null);
  };
}();
typeof exports === "undefined" || (exports.BEMHTML = BEMHTML);