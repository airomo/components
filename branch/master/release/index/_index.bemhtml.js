var BEMHTML = function() {
  var cache,
      xjst = (function(exports) {
    function $1(__$ctx) {
        var __t = __$ctx._mode;
        if (__t === "default") {
            return $2(__$ctx);
        } else if (__t === "tag") {
            return $116(__$ctx);
        } else if (__t === "mix") {
            return $208(__$ctx);
        } else if (__t === "content") {
            return $228(__$ctx);
        } else if (__t === "attrs") {
            return $259(__$ctx);
        } else if (__t === "url") {
            if (__$ctx.block === "example") {
                if (!!__$ctx.elem === false) {
                    return $299(__$ctx);
                } else {
                    return $340(__$ctx);
                }
            } else {
                return $340(__$ctx);
            }
        } else if (__t === "js") {
            return $304(__$ctx);
        } else if (__t === "bem") {
            return $312(__$ctx);
        } else if (__t === "doctype") {
            if (__$ctx.block === "page") {
                if (!!__$ctx.elem === false) {
                    return $335(__$ctx);
                } else {
                    return $340(__$ctx);
                }
            } else {
                return $340(__$ctx);
            }
        } else {
            return $340(__$ctx);
        }
    }
    function $2(__$ctx) {
        var __t = __$ctx.block;
        if (__t === "block") {
            return $3(__$ctx);
        } else if (__t === "catalogue") {
            return $50(__$ctx);
        } else if (__t === "example") {
            if (!!__$ctx.elem === false) {
                return $71(__$ctx);
            } else {
                return $76(__$ctx);
            }
        } else if (__t === "menu") {
            if (__$ctx.elem === "item") {
                if (!(__$ctx["__$anflg3"] !== true) === false) {
                    if (!__$ctx.ctx.url === false) {
                        {
                            "";
                            var __r55 = __$ctx["__$anflg3"];
                            __$ctx["__$anflg3"] = true;
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
                                $340(__$ctx);
                                __$ctx.ctx = __r56;
                                __$ctx._mode = __r57;
                                "";
                            }
                            __$ctx["__$anflg3"] = __r55;
                            "";
                        }
                        return;
                    } else {
                        return $340(__$ctx);
                    }
                } else {
                    return $340(__$ctx);
                }
            } else {
                return $340(__$ctx);
            }
        } else if (__t === "page") {
            if (!(__$ctx["__$anflg2"] !== true) === false) {
                if (!!__$ctx.elem === false) {
                    return $101(__$ctx);
                } else {
                    return $340(__$ctx);
                }
            } else {
                return $340(__$ctx);
            }
        } else if (__t === "global") {
            return $106(__$ctx);
        } else {
            return $340(__$ctx);
        }
    }
    function $3(__$ctx) {
        if (!(__$ctx["__$anflg12"] !== true) === false) {
            if (!__$ctx._isShowCase === false) {
                if (!!__$ctx.elem === false) {
                    return $7(__$ctx);
                } else {
                    return $12(__$ctx);
                }
            } else {
                return $12(__$ctx);
            }
        } else {
            return $12(__$ctx);
        }
    }
    function $7(__$ctx) {
        var _$2dctx = __$ctx.ctx;
        {
            "";
            var __r98 = __$ctx["__$anflg12"];
            __$ctx["__$anflg12"] = true;
            {
                "";
                var __r99 = __$ctx.ctx;
                __$ctx.ctx = {
                    block: "catalogue",
                    elem: "item",
                    content: [ {
                        elem: "item-name",
                        url: _$2dctx.url,
                        content: _$2dctx.name
                    }, {
                        elelm: "item-title",
                        content: _$2dctx.title
                    } ]
                };
                var __r100 = __$ctx._mode;
                __$ctx._mode = "";
                $340(__$ctx);
                __$ctx.ctx = __r99;
                __$ctx._mode = __r100;
                "";
            }
            __$ctx["__$anflg12"] = __r98;
            "";
        }
        undefined;
        return;
    }
    function $12(__$ctx) {
        var __t = __$ctx.elem;
        if (__t === "mod") {
            if (!(__$ctx["__$anflg9"] !== true) === false) {
                if (!__$ctx._isElem === false) {
                    if (!!__$ctx._firstMod === false) {
                        __$ctx._firstMod = __$ctx.ctx;
                        {
                            "";
                            var __r86 = __$ctx["__$anflg9"];
                            __$ctx["__$anflg9"] = true;
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
                                $340(__$ctx);
                                __$ctx.ctx = __r87;
                                __$ctx._mode = __r88;
                                "";
                            }
                            __$ctx["__$anflg9"] = __r86;
                            "";
                        }
                        undefined;
                        return;
                    } else {
                        return $22(__$ctx);
                    }
                } else {
                    return $22(__$ctx);
                }
            } else {
                return $22(__$ctx);
            }
        } else if (__t === "elem") {
            if (!(__$ctx["__$anflg8"] !== true) === false) {
                var __r81, __r85, __r82, __r83, __r84;
                return "", __r81 = __$ctx["__$anflg8"], __$ctx["__$anflg8"] = true, __r85 = ("", __r82 = __$ctx._isElem, __$ctx._isElem = true, __r83 = __$ctx._firstMod, __$ctx._firstMod = null, __r84 = $3(__$ctx), __$ctx._isElem = __r82, __$ctx._firstMod = __r83, "", __r84), __$ctx["__$anflg8"] = __r81, "", __r85;
                return;
            } else {
                if (!(__$ctx["__$anflg7"] !== true) === false) {
                    if (!!__$ctx._firstElem === false) {
                        __$ctx._firstElem = __$ctx.ctx;
                        {
                            "";
                            var __r78 = __$ctx["__$anflg7"];
                            __$ctx["__$anflg7"] = true;
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
                                $340(__$ctx);
                                __$ctx.ctx = __r79;
                                __$ctx._mode = __r80;
                                "";
                            }
                            __$ctx["__$anflg7"] = __r78;
                            "";
                        }
                        undefined;
                        return;
                    } else {
                        return $340(__$ctx);
                    }
                } else {
                    return $340(__$ctx);
                }
            }
        } else if (__t === "mod-val") {
            if (!(__$ctx["__$anflg6"] !== true) === false) {
                return $43(__$ctx);
            } else {
                return $340(__$ctx);
            }
        } else if (__t === "note") {
            return null;
            return;
        } else {
            return $340(__$ctx);
        }
    }
    function $22(__$ctx) {
        if (!(__$ctx["__$anflg5"] !== true) === false) {
            if (!!__$ctx._firstMod === false) {
                __$ctx._firstMod = __$ctx.ctx;
                {
                    "";
                    var __r70 = __$ctx["__$anflg5"];
                    __$ctx["__$anflg5"] = true;
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
                        $340(__$ctx);
                        __$ctx.ctx = __r71;
                        __$ctx._mode = __r72;
                        "";
                    }
                    __$ctx["__$anflg5"] = __r70;
                    "";
                }
                undefined;
                return;
            } else {
                return $340(__$ctx);
            }
        } else {
            return $340(__$ctx);
        }
    }
    function $43(__$ctx) {
        var __r73, __r77, __r74, __r75, __r76;
        return "", __r73 = __$ctx["__$anflg6"], __$ctx["__$anflg6"] = true, __r77 = ("", __r74 = __$ctx.ctx, __$ctx.ctx = {
            tag: "tr",
            content: [ {
                elem: "mod-val-name",
                content: __$ctx.ctx.name
            }, {
                elem: "mod-val-title",
                content: __$ctx.ctx.title
            } ]
        }, __r75 = __$ctx._mode, __$ctx._mode = "", __r76 = $340(__$ctx), __$ctx.ctx = __r74, __$ctx._mode = __r75, "", __r76), __$ctx["__$anflg6"] = __r73, "", __r77;
        return;
    }
    function $50(__$ctx) {
        if (__$ctx.elem === "item-name") {
            if (!(__$ctx["__$anflg11"] !== true) === false) {
                if (!__$ctx.ctx.url === false) {
                    return $54(__$ctx);
                } else {
                    return $59(__$ctx);
                }
            } else {
                return $59(__$ctx);
            }
        } else {
            return $59(__$ctx);
        }
    }
    function $54(__$ctx) {
        var __r93, __r97, __r94, __r95, __r96;
        return "", __r93 = __$ctx["__$anflg11"], __$ctx["__$anflg11"] = true, __r97 = ("", __r94 = __$ctx.ctx, __$ctx.ctx = {
            block: "link",
            mix: {
                block: __$ctx.block,
                elem: __$ctx.elem
            },
            url: __$ctx.environ["site-root"] + __$ctx.ctx.url,
            content: __$ctx.ctx.content
        }, __r95 = __$ctx._mode, __$ctx._mode = "", __r96 = $340(__$ctx), __$ctx.ctx = __r94, __$ctx._mode = __r95, "", __r96), __$ctx["__$anflg11"] = __r93, "", __r97;
        return;
    }
    function $59(__$ctx) {
        if (!(__$ctx["__$anflg10"] !== true) === false) {
            if (!(__$ctx.mods && __$ctx.mods.type === "showcase") === false) {
                if (!!__$ctx.elem === false) {
                    var __r89, __r92, __r90, __r91;
                    return "", __r89 = __$ctx["__$anflg10"], __$ctx["__$anflg10"] = true, __r92 = ("", __r90 = __$ctx._isShowCase, __$ctx._isShowCase = true, __r91 = $50(__$ctx), __$ctx._isShowCase = __r90, "", __r91), __$ctx["__$anflg10"] = __r89, "", __r92;
                    return;
                } else {
                    return $340(__$ctx);
                }
            } else {
                return $340(__$ctx);
            }
        } else {
            return $340(__$ctx);
        }
    }
    function $71(__$ctx) {
        if (!!__$ctx.ctx.url === false) {
            return false;
            return;
        } else {
            return $76(__$ctx);
        }
    }
    function $76(__$ctx) {
        if (!(__$ctx["__$anflg4"] !== true) === false) {
            if (!true === false) {
                if (!!__$ctx.elem === false) {
                    return $80(__$ctx);
                } else {
                    return $340(__$ctx);
                }
            } else {
                return $340(__$ctx);
            }
        } else {
            return $340(__$ctx);
        }
    }
    function $80(__$ctx) {
        var __r61, __r62, __r63, __r64, __r65, __r66;
        var _$1lurl = ("", __r61 = __$ctx._mode, __$ctx._mode = "url", __r62 = __$ctx.ctx, __$ctx.ctx = __$ctx.ctx.url, __r63 = $299(__$ctx), __$ctx._mode = __r61, __$ctx.ctx = __r62, "", __r63), _$1lsrc = ("", __r64 = __$ctx._mode, __$ctx._mode = "url", __r65 = __$ctx.ctx, __$ctx.ctx = __$ctx.ctx.src, __r66 = $299(__$ctx), __$ctx._mode = __r64, __$ctx.ctx = __r65, "", __r66);
        {
            "";
            var __r67 = __$ctx["__$anflg4"];
            __$ctx["__$anflg4"] = true;
            {
                "";
                var __r68 = __$ctx._url;
                __$ctx._url = _$1lurl;
                var __r69 = __$ctx._src;
                __$ctx._src = _$1lsrc;
                $71(__$ctx);
                __$ctx._url = __r68;
                __$ctx._src = __r69;
                "";
            }
            __$ctx["__$anflg4"] = __r67;
            "";
        }
        undefined;
        return;
    }
    function $101(__$ctx) {
        var __r50, __r51;
        var _$kctx = __$ctx.ctx, _$kdoctype = ("", __r50 = __$ctx._mode, __$ctx._mode = "doctype", __r51 = $335(__$ctx), __$ctx._mode = __r50, "", __r51), _$kbuf = [ _$kdoctype, {
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
                    content: _$kctx.title
                }, _$kctx.meta || "", _$kctx.hasOwnProperty("favicon") ? {
                    elem: "favicon",
                    url: _$kctx.favicon
                } : "", {
                    elem: "assets",
                    content: _$kctx.assets
                } ]
            }, _$kctx ]
        } ];
        {
            "";
            var __r52 = __$ctx["__$anflg2"];
            __$ctx["__$anflg2"] = true;
            {
                "";
                var __r53 = __$ctx.ctx;
                __$ctx.ctx = _$kbuf;
                var __r54 = __$ctx._mode;
                __$ctx._mode = "";
                $340(__$ctx);
                __$ctx.ctx = __r53;
                __$ctx._mode = __r54;
                "";
            }
            __$ctx["__$anflg2"] = __r52;
            "";
        }
        undefined;
        return;
    }
    function $106(__$ctx) {
        if (!(__$ctx["__$anflg1"] !== true) === false) {
            if (!!__$ctx.elem === false) {
                var _$hparams = __$ctx.ctx.environ, _$henv = __$ctx.environ;
                for (p in _$hparams) {
                    _$hparams.hasOwnProperty(p) && (_$henv[p] = _$hparams[p]);
                }
                {
                    "";
                    var __r49 = __$ctx["__$anflg1"];
                    __$ctx["__$anflg1"] = true;
                    $106(__$ctx);
                    __$ctx["__$anflg1"] = __r49;
                    "";
                }
                undefined;
                return;
            } else {
                return $340(__$ctx);
            }
        } else {
            return $340(__$ctx);
        }
    }
    function $116(__$ctx) {
        var __t = __$ctx.block;
        if (__t === "catalogue") {
            if (__$ctx.elem === "item") {
                return "section";
                return;
            } else {
                return $340(__$ctx);
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
                return $340(__$ctx);
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
                    return $340(__$ctx);
                }
            }
        } else if (__t === "menu") {
            if (__$ctx.elem === "item") {
                return "span";
                return;
            } else {
                return $340(__$ctx);
            }
        } else if (__t === "link") {
            if (!__$ctx.ctx.url === false) {
                if (!!__$ctx.elem === false) {
                    return "a";
                    return;
                } else {
                    return $158(__$ctx);
                }
            } else {
                return $158(__$ctx);
            }
        } else if (__t === "headline") {
            if (!__$ctx.mods.level === false) {
                if (!!__$ctx.elem === false) {
                    return "h" + __$ctx.mods.level;
                    return;
                } else {
                    return $169(__$ctx);
                }
            } else {
                return $169(__$ctx);
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
                    return $340(__$ctx);
                }
            }
        } else if (__t === "global") {
            if (!!__$ctx.elem === false) {
                return "";
                return;
            } else {
                return $340(__$ctx);
            }
        } else {
            return $340(__$ctx);
        }
    }
    function $158(__$ctx) {
        if (!!__$ctx.elem === false) {
            return "span";
            return;
        } else {
            return $340(__$ctx);
        }
    }
    function $169(__$ctx) {
        if (!!__$ctx.elem === false) {
            return "h1";
            return;
        } else {
            return $340(__$ctx);
        }
    }
    function $208(__$ctx) {
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
                return $340(__$ctx);
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
                    return $340(__$ctx);
                }
            } else {
                return $340(__$ctx);
            }
        } else {
            return $340(__$ctx);
        }
    }
    function $228(__$ctx) {
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
                var _$1xctx = __$ctx.ctx;
                return [ {
                    elem: "mod-name",
                    content: _$1xctx.name
                }, {
                    elem: "mod-title",
                    content: _$1xctx.title
                }, _$1xctx.description, {
                    elem: "mod-val-list",
                    content: _$1xctx.content
                }, _$1xctx.examples ];
                return;
            } else if (__t === "examples") {
                return $234(__$ctx);
            } else if (__t === "level") {
                return [ {
                    elem: "note",
                    content: __$ctx.ctx.name
                }, __$ctx.ctx.content ];
                return;
            } else {
                return $244(__$ctx);
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
                    return $340(__$ctx);
                }
            }
        } else {
            return $340(__$ctx);
        }
    }
    function $234(__$ctx) {
        if (!__$ctx._.isSimple(__$ctx.ctx.content) === false) {
            __$ctx.ctx.content;
            return;
        } else {
            if (!__$ctx._.isArray(__$ctx.ctx.content) === false) {
                var __r58, __r59, __r60;
                var _$1jctx = __$ctx.ctx, _$1ji = 0, _$1jl = _$1jctx.content.length, _$1jr = [];
                while (_$1ji < _$1jl) {
                    _$1jr.push(("", __r58 = __$ctx.ctx, __r59 = __r58.content, __r58.content = _$1jctx.content[_$1ji++], __r60 = $234(__$ctx), __r58.content = __r59, "", __r60));
                }
                return _$1jr;
                return;
            } else {
                return $244(__$ctx);
            }
        }
    }
    function $244(__$ctx) {
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
            return $340(__$ctx);
        }
    }
    function $259(__$ctx) {
        var __t = __$ctx.block;
        if (__t === "example") {
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
                        return $340(__$ctx);
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
                    return $340(__$ctx);
                }
            } else {
                return $340(__$ctx);
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
                    return $340(__$ctx);
                }
            } else if (__t === "css") {
                if (!__$ctx.ctx.url === false) {
                    return {
                        rel: "stylesheet",
                        href: __$ctx.ctx.url
                    };
                    return;
                } else {
                    return $340(__$ctx);
                }
            } else if (__t === "favicon") {
                return {
                    rel: "shortcut icon",
                    href: __$ctx.ctx.url
                };
                return;
            } else {
                return $340(__$ctx);
            }
        } else {
            return $340(__$ctx);
        }
    }
    function $299(__$ctx) {
        return __$ctx.environ["site-root"] + "/examples/examples.sets/" + __$ctx.ctx;
        return;
    }
    function $304(__$ctx) {
        if (__$ctx.block === "example") {
            if (!!__$ctx.elem === false) {
                return true;
                return;
            } else {
                return $340(__$ctx);
            }
        } else {
            return $340(__$ctx);
        }
    }
    function $312(__$ctx) {
        if (__$ctx.block === "page") {
            var __t = __$ctx.elem;
            if (__t === "js" || __t === "css" || __t === "assets" || __t === "head" || __t === "link" || __t === "title" || __t === "meta") {
                return false;
                return;
            } else {
                return $340(__$ctx);
            }
        } else {
            return $340(__$ctx);
        }
    }
    function $335(__$ctx) {
        return __$ctx.ctx.doctype || "<!doctype html>";
        return;
    }
    function $340(__$ctx) {
        if (!__$ctx._start === false) {
            if (!!__$ctx.environ === false) {
                __$ctx.environ = {};
                applyc(__$ctx);
                undefined;
                return;
            } else {
                return $346(__$ctx);
            }
        } else {
            return $346(__$ctx);
        }
    }
    function $346(__$ctx) {
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
                        return $367(__$ctx);
                    } else {
                        return $372(__$ctx);
                    }
                } else {
                    return $372(__$ctx);
                }
            } else {
                return $372(__$ctx);
            }
        }
    }
    function $367(__$ctx) {
        var __r47, __r48;
        function _$6follow() {
            if (this.ctx.link === "no-follow") {
                return undefined;
            } else {
                undefined;
            }
            var data = this._links[this.ctx.link];
            return "", __r47 = this.ctx, this.ctx = data, __r48 = $1(__$ctx), this.ctx = __r47, "", __r48;
        }
        if (!cache || !__$ctx._cacheLog) {
            return _$6follow.call(__$ctx);
        } else {
            undefined;
        }
        var _$6contents = __$ctx._buf.slice(__$ctx._cachePos).join("");
        __$ctx._cachePos = __$ctx._buf.length;
        __$ctx._cacheLog.push(_$6contents, {
            log: __$ctx._localLog.slice(),
            link: __$ctx.ctx.link
        });
        var _$6res = _$6follow.call(__$ctx);
        __$ctx._cachePos = __$ctx._buf.length;
        return _$6res;
        return;
    }
    function $372(__$ctx) {
        if (!cache === false) {
            if (!__$ctx.ctx === false) {
                if (!__$ctx.ctx.cache === false) {
                    return $376(__$ctx);
                } else {
                    return $381(__$ctx);
                }
            } else {
                return $381(__$ctx);
            }
        } else {
            return $381(__$ctx);
        }
    }
    function $376(__$ctx) {
        var _$5cached;
        function _$5setProperty(obj, key, value) {
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
        if (_$5cached = cache.get(__$ctx.ctx.cache)) {
            var _$5oldLinks = __$ctx._links;
            if (__$ctx.ctx.links) {
                __$ctx._links = __$ctx.ctx.links;
            } else {
                undefined;
            }
            for (var _$5i = 0; _$5i < _$5cached.log.length; _$5i++) {
                if (typeof _$5cached.log[_$5i] === "string") {
                    __$ctx._buf.push(_$5cached.log[_$5i]);
                    continue;
                } else {
                    undefined;
                }
                var _$5log = _$5cached.log[_$5i], _$5reverseLog;
                _$5reverseLog = _$5log.log.map(function(entry) {
                    return {
                        key: entry[0],
                        value: _$5setProperty(this, entry[0], entry[1])
                    };
                }, __$ctx).reverse();
                {
                    "";
                    var __r37 = __$ctx.ctx, __r38 = __r37.cache;
                    __r37.cache = null;
                    var __r39 = __$ctx._cacheLog;
                    __$ctx._cacheLog = null;
                    var __r40 = __$ctx.ctx, __r41 = __r40.link;
                    __r40.link = _$5log.link;
                    $1(__$ctx);
                    __r37.cache = __r38;
                    __$ctx._cacheLog = __r39;
                    __r40.link = __r41;
                    "";
                }
                undefined;
                _$5reverseLog.forEach(function(entry) {
                    _$5setProperty(this, entry.key, entry.value);
                }, __$ctx);
            }
            __$ctx._links = _$5oldLinks;
            return _$5cached.res;
        } else {
            undefined;
        }
        var _$5cacheLog = [], _$5res;
        {
            "";
            var __r42 = __$ctx.ctx, __r43 = __r42.cache;
            __r42.cache = null;
            var __r44 = __$ctx._cachePos;
            __$ctx._cachePos = __$ctx._buf.length;
            var __r45 = __$ctx._cacheLog;
            __$ctx._cacheLog = _$5cacheLog;
            var __r46 = __$ctx._localLog;
            __$ctx._localLog = [];
            {
                _$5res = $1(__$ctx);
                var _$5tail = __$ctx._buf.slice(__$ctx._cachePos).join("");
                if (_$5tail) {
                    _$5cacheLog.push(_$5tail);
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
            log: _$5cacheLog,
            res: _$5res
        });
        return _$5res;
        return;
    }
    function $381(__$ctx) {
        var __t = __$ctx._mode;
        if (__t === "default") {
            return $383(__$ctx);
        } else if (__t === "") {
            if (!__$ctx._.isSimple(__$ctx.ctx) === false) {
                __$ctx._listLength--;
                var _$3ctx = __$ctx.ctx;
                (_$3ctx && _$3ctx !== true || _$3ctx === 0) && __$ctx._buf.push(_$3ctx);
                return;
            } else {
                if (!!__$ctx.ctx === false) {
                    __$ctx._listLength--;
                    return;
                } else {
                    if (!__$ctx._.isArray(__$ctx.ctx) === false) {
                        return $392(__$ctx);
                    } else {
                        if (!true === false) {
                            return $395(__$ctx);
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
    function $383(__$ctx) {
        var __r20, __r8, __r12, __r13, __r14, __r15, __r16, __r17, __r18, __r19, __r9, __r21, __r22, __r23, __r26, __r27, __r28, __r29, __r30, __r31;
        var _$4_this = __$ctx, _$4BEM_ = _$4_this.BEM, _$4v = __$ctx.ctx, _$4buf = __$ctx._buf, _$4tag;
        _$4tag = ("", __r8 = __$ctx._mode, __$ctx._mode = "tag", __r9 = $116(__$ctx), __$ctx._mode = __r8, "", __r9);
        typeof _$4tag != "undefined" || (_$4tag = _$4v.tag);
        typeof _$4tag != "undefined" || (_$4tag = "div");
        if (_$4tag) {
            var _$4jsParams, _$4js;
            if (__$ctx.block && _$4v.js !== false) {
                _$4js = ("", __r12 = __$ctx._mode, __$ctx._mode = "js", __r13 = $304(__$ctx), __$ctx._mode = __r12, "", __r13);
                _$4js = _$4js ? __$ctx._.extend(_$4v.js, _$4js === true ? {} : _$4js) : _$4v.js === true ? {} : _$4v.js;
                _$4js && ((_$4jsParams = {})[_$4BEM_.INTERNAL.buildClass(__$ctx.block, _$4v.elem)] = _$4js);
            } else {
                undefined;
            }
            _$4buf.push("<", _$4tag);
            var _$4isBEM = ("", __r14 = __$ctx._mode, __$ctx._mode = "bem", __r15 = $312(__$ctx), __$ctx._mode = __r14, "", __r15);
            typeof _$4isBEM != "undefined" || (_$4isBEM = typeof _$4v.bem != "undefined" ? _$4v.bem : _$4v.block || _$4v.elem);
            var _$4cls = ("", __r16 = __$ctx._mode, __$ctx._mode = "cls", __r17 = $340(__$ctx), __$ctx._mode = __r16, "", __r17);
            _$4cls || (_$4cls = _$4v.cls);
            var _$4addJSInitClass = _$4v.block && _$4jsParams;
            if (_$4isBEM || _$4cls) {
                _$4buf.push(' class="');
                if (_$4isBEM) {
                    _$4BEM_.INTERNAL.buildClasses(__$ctx.block, _$4v.elem, _$4v.elemMods || _$4v.mods, _$4buf);
                    var _$4mix = ("", __r18 = __$ctx._mode, __$ctx._mode = "mix", __r19 = $208(__$ctx), __$ctx._mode = __r18, "", __r19);
                    _$4v.mix && (_$4mix = _$4mix ? _$4mix.concat(_$4v.mix) : _$4v.mix);
                    if (_$4mix) {
                        var _$4visited = {};
                        function _$4visitedKey(block, elem) {
                            return (block || "") + "__" + (elem || "");
                        }
                        _$4visited[_$4visitedKey(__$ctx.block, __$ctx.elem)] = true;
                        if (!__$ctx._.isArray(_$4mix)) {
                            _$4mix = [ _$4mix ];
                        } else {
                            undefined;
                        }
                        for (var _$4i = 0; _$4i < _$4mix.length; _$4i++) {
                            var _$4mixItem = _$4mix[_$4i];
                            if (!_$4mixItem) {
                                continue;
                            } else {
                                undefined;
                            }
                            var _$4hasItem = _$4mixItem.block || _$4mixItem.elem, _$4block = _$4mixItem.block || _$4mixItem._block || _$4_this.block, _$4elem = _$4mixItem.elem || _$4mixItem._elem || _$4_this.elem;
                            _$4hasItem && _$4buf.push(" ");
                            _$4BEM_.INTERNAL[_$4hasItem ? "buildClasses" : "buildModsClasses"](_$4block, _$4mixItem.elem || _$4mixItem._elem || (_$4mixItem.block ? undefined : _$4_this.elem), _$4mixItem.elemMods || _$4mixItem.mods, _$4buf);
                            if (_$4mixItem.js) {
                                (_$4jsParams || (_$4jsParams = {}))[_$4BEM_.INTERNAL.buildClass(_$4block, _$4mixItem.elem)] = _$4mixItem.js === true ? {} : _$4mixItem.js;
                                _$4addJSInitClass || (_$4addJSInitClass = _$4block && !_$4mixItem.elem);
                            } else {
                                undefined;
                            }
                            if (_$4hasItem && !_$4visited[_$4visitedKey(_$4block, _$4elem)]) {
                                _$4visited[_$4visitedKey(_$4block, _$4elem)] = true;
                                var _$4nestedMix = ("", __r20 = __$ctx.block, __$ctx.block = _$4block, __r21 = __$ctx.elem, __$ctx.elem = _$4elem, __r22 = __$ctx._mode, __$ctx._mode = "mix", __r23 = $208(__$ctx), __$ctx.block = __r20, __$ctx.elem = __r21, __$ctx._mode = __r22, "", __r23);
                                if (_$4nestedMix) {
                                    for (var _$4j = 0; _$4j < _$4nestedMix.length; _$4j++) {
                                        var _$4nestedItem = _$4nestedMix[_$4j];
                                        if (!_$4nestedItem.block && !_$4nestedItem.elem || !_$4visited[_$4visitedKey(_$4nestedItem.block, _$4nestedItem.elem)]) {
                                            _$4nestedItem._block = _$4block;
                                            _$4nestedItem._elem = _$4elem;
                                            _$4mix.splice(_$4i + 1, 0, _$4nestedItem);
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
                _$4cls && _$4buf.push(_$4isBEM ? " " : "", _$4cls);
                _$4addJSInitClass && _$4buf.push(" i-bem");
                _$4buf.push('"');
            } else {
                undefined;
            }
            if (_$4jsParams) {
                var _$4jsAttr = ("", __r26 = __$ctx._mode, __$ctx._mode = "jsAttr", __r27 = $340(__$ctx), __$ctx._mode = __r26, "", __r27);
                _$4buf.push(" ", _$4jsAttr || "onclick", '="return ', __$ctx._.attrEscape(JSON.stringify(_$4jsParams)), '"');
            } else {
                undefined;
            }
            var _$4attrs = ("", __r28 = __$ctx._mode, __$ctx._mode = "attrs", __r29 = $259(__$ctx), __$ctx._mode = __r28, "", __r29);
            _$4attrs = __$ctx._.extend(_$4attrs, _$4v.attrs);
            if (_$4attrs) {
                var _$4name;
                for (_$4name in _$4attrs) {
                    if (_$4attrs[_$4name] === undefined) {
                        continue;
                    } else {
                        undefined;
                    }
                    _$4buf.push(" ", _$4name, '="', __$ctx._.attrEscape(_$4attrs[_$4name]), '"');
                }
            } else {
                undefined;
            }
        } else {
            undefined;
        }
        if (__$ctx._.isShortTag(_$4tag)) {
            _$4buf.push("/>");
        } else {
            _$4tag && _$4buf.push(">");
            var _$4content = ("", __r30 = __$ctx._mode, __$ctx._mode = "content", __r31 = $228(__$ctx), __$ctx._mode = __r30, "", __r31);
            if (_$4content || _$4content === 0) {
                var _$4isBEM = __$ctx.block || __$ctx.elem;
                {
                    "";
                    var __r32 = __$ctx._notNewList;
                    __$ctx._notNewList = false;
                    var __r33 = __$ctx.position;
                    __$ctx.position = _$4isBEM ? 1 : __$ctx.position;
                    var __r34 = __$ctx._listLength;
                    __$ctx._listLength = _$4isBEM ? 1 : __$ctx._listLength;
                    var __r35 = __$ctx.ctx;
                    __$ctx.ctx = _$4content;
                    var __r36 = __$ctx._mode;
                    __$ctx._mode = "";
                    $340(__$ctx);
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
            _$4tag && _$4buf.push("</", _$4tag, ">");
        }
        return;
    }
    function $392(__$ctx) {
        var _$1v = __$ctx.ctx, _$1l = _$1v.length, _$1i = 0, _$1prevPos = __$ctx.position, _$1prevNotNewList = __$ctx._notNewList;
        if (_$1prevNotNewList) {
            __$ctx._listLength += _$1l - 1;
        } else {
            __$ctx.position = 0;
            __$ctx._listLength = _$1l;
        }
        __$ctx._notNewList = true;
        while (_$1i < _$1l) {
            var _$1newCtx = _$1v[_$1i++];
            {
                "";
                var __r7 = __$ctx.ctx;
                __$ctx.ctx = _$1newCtx == null ? "" : _$1newCtx;
                $340(__$ctx);
                __$ctx.ctx = __r7;
                "";
            }
            undefined;
        }
        _$1prevNotNewList || (__$ctx.position = _$1prevPos);
        return;
    }
    function $395(__$ctx) {
        var _$0vBlock = __$ctx.ctx.block, _$0vElem = __$ctx.ctx.elem, _$0block = __$ctx._currBlock || __$ctx.block;
        __$ctx.ctx || (__$ctx.ctx = {});
        {
            "";
            var __r0 = __$ctx._mode;
            __$ctx._mode = "default";
            var __r1 = __$ctx._links;
            __$ctx._links = __$ctx.ctx.links || __$ctx._links;
            var __r2 = __$ctx.block;
            __$ctx.block = _$0vBlock || (_$0vElem ? _$0block : undefined);
            var __r3 = __$ctx._currBlock;
            __$ctx._currBlock = _$0vBlock || _$0vElem ? undefined : _$0block;
            var __r4 = __$ctx.elem;
            __$ctx.elem = __$ctx.ctx.elem;
            var __r5 = __$ctx.mods;
            __$ctx.mods = (_$0vBlock ? __$ctx.ctx.mods : __$ctx.mods) || {};
            var __r6 = __$ctx.elemMods;
            __$ctx.elemMods = __$ctx.ctx.elemMods || {};
            {
                __$ctx.block || __$ctx.elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
                $2(__$ctx);
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