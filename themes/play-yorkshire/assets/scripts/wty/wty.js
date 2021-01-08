function initMap() {}

function closemegamenus() {
    WTY_MegaMenu.static_hide(!0)
}

function mobilemenutriggger() {
    $(".mobilemenutrigger").hasClass("mobilemenutrigger--open") ? ($(".menu--primary").css({
        display: ""
    }), $(".megamenu").removeClass("megamenu--open"), $(".mobilemenutrigger a").html("<em>Menu </em><span></span>")) : ($(".menu--primary").slideDown(), $(".mobilemenutrigger a").html("<em>Close </em><span></span>")), $(".mobilemenutrigger").toggleClass("mobilemenutrigger--open")
}(function() {
    function a(a) {
        function b(b, c, d, e, f, g) {
            for (; f >= 0 && g > f; f += a) {
                var h = e ? e[f] : f;
                d = c(d, b[h], h, b)
            }
            return d
        }
        return function(c, d, e, f) {
            d = t(d, f, 4);
            var g = !A(c) && s.keys(c),
                h = (g || c).length,
                i = a > 0 ? 0 : h - 1;
            return arguments.length < 3 && (e = c[g ? g[i] : i], i += a), b(c, d, e, g, i, h)
        }
    }

    function b(a) {
        return function(b, c, d) {
            c = u(c, d);
            for (var e = z(b), f = a > 0 ? 0 : e - 1; f >= 0 && e > f; f += a)
                if (c(b[f], f, b)) return f;
            return -1
        }
    }

    function c(a, b, c) {
        return function(d, e, f) {
            var g = 0,
                h = z(d);
            if ("number" == typeof f) a > 0 ? g = f >= 0 ? f : Math.max(f + h, g) : h = f >= 0 ? Math.min(f + 1, h) : f + h + 1;
            else if (c && f && h) return f = c(d, e), d[f] === e ? f : -1;
            if (e !== e) return f = b(k.call(d, g, h), s.isNaN), f >= 0 ? f + g : -1;
            for (f = a > 0 ? g : h - 1; f >= 0 && h > f; f += a)
                if (d[f] === e) return f;
            return -1
        }
    }

    function d(a, b) {
        var c = F.length,
            d = a.constructor,
            e = s.isFunction(d) && d.prototype || h,
            f = "constructor";
        for (s.has(a, f) && !s.contains(b, f) && b.push(f); c--;) f = F[c], f in a && a[f] !== e[f] && !s.contains(b, f) && b.push(f)
    }
    var e = this,
        f = e._,
        g = Array.prototype,
        h = Object.prototype,
        i = Function.prototype,
        j = g.push,
        k = g.slice,
        l = h.toString,
        m = h.hasOwnProperty,
        n = Array.isArray,
        o = Object.keys,
        p = i.bind,
        q = Object.create,
        r = function() {},
        s = function(a) {
            return a instanceof s ? a : this instanceof s ? void(this._wrapped = a) : new s(a)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = s), exports._ = s) : e._ = s, s.VERSION = "1.8.3";
    var t = function(a, b, c) {
            if (void 0 === b) return a;
            switch (null == c ? 3 : c) {
                case 1:
                    return function(c) {
                        return a.call(b, c)
                    };
                case 2:
                    return function(c, d) {
                        return a.call(b, c, d)
                    };
                case 3:
                    return function(c, d, e) {
                        return a.call(b, c, d, e)
                    };
                case 4:
                    return function(c, d, e, f) {
                        return a.call(b, c, d, e, f)
                    }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        u = function(a, b, c) {
            return null == a ? s.identity : s.isFunction(a) ? t(a, b, c) : s.isObject(a) ? s.matcher(a) : s.property(a)
        };
    s.iteratee = function(a, b) {
        return u(a, b, 1 / 0)
    };
    var v = function(a, b) {
            return function(c) {
                var d = arguments.length;
                if (2 > d || null == c) return c;
                for (var e = 1; d > e; e++)
                    for (var f = arguments[e], g = a(f), h = g.length, i = 0; h > i; i++) {
                        var j = g[i];
                        b && void 0 !== c[j] || (c[j] = f[j])
                    }
                return c
            }
        },
        w = function(a) {
            if (!s.isObject(a)) return {};
            if (q) return q(a);
            r.prototype = a;
            var b = new r;
            return r.prototype = null, b
        },
        x = function(a) {
            return function(b) {
                return null == b ? void 0 : b[a]
            }
        },
        y = Math.pow(2, 53) - 1,
        z = x("length"),
        A = function(a) {
            var b = z(a);
            return "number" == typeof b && b >= 0 && y >= b
        };
    s.each = s.forEach = function(a, b, c) {
        b = t(b, c);
        var d, e;
        if (A(a))
            for (d = 0, e = a.length; e > d; d++) b(a[d], d, a);
        else {
            var f = s.keys(a);
            for (d = 0, e = f.length; e > d; d++) b(a[f[d]], f[d], a)
        }
        return a
    }, s.map = s.collect = function(a, b, c) {
        b = u(b, c);
        for (var d = !A(a) && s.keys(a), e = (d || a).length, f = Array(e), g = 0; e > g; g++) {
            var h = d ? d[g] : g;
            f[g] = b(a[h], h, a)
        }
        return f
    }, s.reduce = s.foldl = s.inject = a(1), s.reduceRight = s.foldr = a(-1), s.find = s.detect = function(a, b, c) {
        var d;
        return d = A(a) ? s.findIndex(a, b, c) : s.findKey(a, b, c), void 0 !== d && -1 !== d ? a[d] : void 0
    }, s.filter = s.select = function(a, b, c) {
        var d = [];
        return b = u(b, c), s.each(a, function(a, c, e) {
            b(a, c, e) && d.push(a)
        }), d
    }, s.reject = function(a, b, c) {
        return s.filter(a, s.negate(u(b)), c)
    }, s.every = s.all = function(a, b, c) {
        b = u(b, c);
        for (var d = !A(a) && s.keys(a), e = (d || a).length, f = 0; e > f; f++) {
            var g = d ? d[f] : f;
            if (!b(a[g], g, a)) return !1
        }
        return !0
    }, s.some = s.any = function(a, b, c) {
        b = u(b, c);
        for (var d = !A(a) && s.keys(a), e = (d || a).length, f = 0; e > f; f++) {
            var g = d ? d[f] : f;
            if (b(a[g], g, a)) return !0
        }
        return !1
    }, s.contains = s.includes = s.include = function(a, b, c, d) {
        return A(a) || (a = s.values(a)), ("number" != typeof c || d) && (c = 0), s.indexOf(a, b, c) >= 0
    }, s.invoke = function(a, b) {
        var c = k.call(arguments, 2),
            d = s.isFunction(b);
        return s.map(a, function(a) {
            var e = d ? b : a[b];
            return null == e ? e : e.apply(a, c)
        })
    }, s.pluck = function(a, b) {
        return s.map(a, s.property(b))
    }, s.where = function(a, b) {
        return s.filter(a, s.matcher(b))
    }, s.findWhere = function(a, b) {
        return s.find(a, s.matcher(b))
    }, s.max = function(a, b, c) {
        var d, e, f = -1 / 0,
            g = -1 / 0;
        if (null == b && null != a) {
            a = A(a) ? a : s.values(a);
            for (var h = 0, i = a.length; i > h; h++) d = a[h], d > f && (f = d)
        } else b = u(b, c), s.each(a, function(a, c, d) {
            e = b(a, c, d), (e > g || e === -1 / 0 && f === -1 / 0) && (f = a, g = e)
        });
        return f
    }, s.min = function(a, b, c) {
        var d, e, f = 1 / 0,
            g = 1 / 0;
        if (null == b && null != a) {
            a = A(a) ? a : s.values(a);
            for (var h = 0, i = a.length; i > h; h++) d = a[h], f > d && (f = d)
        } else b = u(b, c), s.each(a, function(a, c, d) {
            e = b(a, c, d), (g > e || 1 / 0 === e && 1 / 0 === f) && (f = a, g = e)
        });
        return f
    }, s.shuffle = function(a) {
        for (var b, c = A(a) ? a : s.values(a), d = c.length, e = Array(d), f = 0; d > f; f++) b = s.random(0, f), b !== f && (e[f] = e[b]), e[b] = c[f];
        return e
    }, s.sample = function(a, b, c) {
        return null == b || c ? (A(a) || (a = s.values(a)), a[s.random(a.length - 1)]) : s.shuffle(a).slice(0, Math.max(0, b))
    }, s.sortBy = function(a, b, c) {
        return b = u(b, c), s.pluck(s.map(a, function(a, c, d) {
            return {
                value: a,
                index: c,
                criteria: b(a, c, d)
            }
        }).sort(function(a, b) {
            var c = a.criteria,
                d = b.criteria;
            if (c !== d) {
                if (c > d || void 0 === c) return 1;
                if (d > c || void 0 === d) return -1
            }
            return a.index - b.index
        }), "value")
    };
    var B = function(a) {
        return function(b, c, d) {
            var e = {};
            return c = u(c, d), s.each(b, function(d, f) {
                var g = c(d, f, b);
                a(e, d, g)
            }), e
        }
    };
    s.groupBy = B(function(a, b, c) {
        s.has(a, c) ? a[c].push(b) : a[c] = [b]
    }), s.indexBy = B(function(a, b, c) {
        a[c] = b
    }), s.countBy = B(function(a, b, c) {
        s.has(a, c) ? a[c]++ : a[c] = 1
    }), s.toArray = function(a) {
        return a ? s.isArray(a) ? k.call(a) : A(a) ? s.map(a, s.identity) : s.values(a) : []
    }, s.size = function(a) {
        return null == a ? 0 : A(a) ? a.length : s.keys(a).length
    }, s.partition = function(a, b, c) {
        b = u(b, c);
        var d = [],
            e = [];
        return s.each(a, function(a, c, f) {
            (b(a, c, f) ? d : e).push(a)
        }), [d, e]
    }, s.first = s.head = s.take = function(a, b, c) {
        return null == a ? void 0 : null == b || c ? a[0] : s.initial(a, a.length - b)
    }, s.initial = function(a, b, c) {
        return k.call(a, 0, Math.max(0, a.length - (null == b || c ? 1 : b)))
    }, s.last = function(a, b, c) {
        return null == a ? void 0 : null == b || c ? a[a.length - 1] : s.rest(a, Math.max(0, a.length - b))
    }, s.rest = s.tail = s.drop = function(a, b, c) {
        return k.call(a, null == b || c ? 1 : b)
    }, s.compact = function(a) {
        return s.filter(a, s.identity)
    };
    var C = function(a, b, c, d) {
        for (var e = [], f = 0, g = d || 0, h = z(a); h > g; g++) {
            var i = a[g];
            if (A(i) && (s.isArray(i) || s.isArguments(i))) {
                b || (i = C(i, b, c));
                var j = 0,
                    k = i.length;
                for (e.length += k; k > j;) e[f++] = i[j++]
            } else c || (e[f++] = i)
        }
        return e
    };
    s.flatten = function(a, b) {
        return C(a, b, !1)
    }, s.without = function(a) {
        return s.difference(a, k.call(arguments, 1))
    }, s.uniq = s.unique = function(a, b, c, d) {
        s.isBoolean(b) || (d = c, c = b, b = !1), null != c && (c = u(c, d));
        for (var e = [], f = [], g = 0, h = z(a); h > g; g++) {
            var i = a[g],
                j = c ? c(i, g, a) : i;
            b ? (g && f === j || e.push(i), f = j) : c ? s.contains(f, j) || (f.push(j), e.push(i)) : s.contains(e, i) || e.push(i)
        }
        return e
    }, s.union = function() {
        return s.uniq(C(arguments, !0, !0))
    }, s.intersection = function(a) {
        for (var b = [], c = arguments.length, d = 0, e = z(a); e > d; d++) {
            var f = a[d];
            if (!s.contains(b, f)) {
                for (var g = 1; c > g && s.contains(arguments[g], f); g++);
                g === c && b.push(f)
            }
        }
        return b
    }, s.difference = function(a) {
        var b = C(arguments, !0, !0, 1);
        return s.filter(a, function(a) {
            return !s.contains(b, a)
        })
    }, s.zip = function() {
        return s.unzip(arguments)
    }, s.unzip = function(a) {
        for (var b = a && s.max(a, z).length || 0, c = Array(b), d = 0; b > d; d++) c[d] = s.pluck(a, d);
        return c
    }, s.object = function(a, b) {
        for (var c = {}, d = 0, e = z(a); e > d; d++) b ? c[a[d]] = b[d] : c[a[d][0]] = a[d][1];
        return c
    }, s.findIndex = b(1), s.findLastIndex = b(-1), s.sortedIndex = function(a, b, c, d) {
        c = u(c, d, 1);
        for (var e = c(b), f = 0, g = z(a); g > f;) {
            var h = Math.floor((f + g) / 2);
            c(a[h]) < e ? f = h + 1 : g = h
        }
        return f
    }, s.indexOf = c(1, s.findIndex, s.sortedIndex), s.lastIndexOf = c(-1, s.findLastIndex), s.range = function(a, b, c) {
        null == b && (b = a || 0, a = 0), c = c || 1;
        for (var d = Math.max(Math.ceil((b - a) / c), 0), e = Array(d), f = 0; d > f; f++, a += c) e[f] = a;
        return e
    };
    var D = function(a, b, c, d, e) {
        if (!(d instanceof b)) return a.apply(c, e);
        var f = w(a.prototype),
            g = a.apply(f, e);
        return s.isObject(g) ? g : f
    };
    s.bind = function(a, b) {
        if (p && a.bind === p) return p.apply(a, k.call(arguments, 1));
        if (!s.isFunction(a)) throw new TypeError("Bind must be called on a function");
        var c = k.call(arguments, 2),
            d = function() {
                return D(a, d, b, this, c.concat(k.call(arguments)))
            };
        return d
    }, s.partial = function(a) {
        var b = k.call(arguments, 1),
            c = function() {
                for (var d = 0, e = b.length, f = Array(e), g = 0; e > g; g++) f[g] = b[g] === s ? arguments[d++] : b[g];
                for (; d < arguments.length;) f.push(arguments[d++]);
                return D(a, c, this, this, f)
            };
        return c
    }, s.bindAll = function(a) {
        var b, c, d = arguments.length;
        if (1 >= d) throw new Error("bindAll must be passed function names");
        for (b = 1; d > b; b++) c = arguments[b], a[c] = s.bind(a[c], a);
        return a
    }, s.memoize = function(a, b) {
        var c = function(d) {
            var e = c.cache,
                f = "" + (b ? b.apply(this, arguments) : d);
            return s.has(e, f) || (e[f] = a.apply(this, arguments)), e[f]
        };
        return c.cache = {}, c
    }, s.delay = function(a, b) {
        var c = k.call(arguments, 2);
        return setTimeout(function() {
            return a.apply(null, c)
        }, b)
    }, s.defer = s.partial(s.delay, s, 1), s.throttle = function(a, b, c) {
        var d, e, f, g = null,
            h = 0;
        c || (c = {});
        var i = function() {
            h = c.leading === !1 ? 0 : s.now(), g = null, f = a.apply(d, e), g || (d = e = null)
        };
        return function() {
            var j = s.now();
            h || c.leading !== !1 || (h = j);
            var k = b - (j - h);
            return d = this, e = arguments, 0 >= k || k > b ? (g && (clearTimeout(g), g = null), h = j, f = a.apply(d, e), g || (d = e = null)) : g || c.trailing === !1 || (g = setTimeout(i, k)), f
        }
    }, s.debounce = function(a, b, c) {
        var d, e, f, g, h, i = function() {
            var j = s.now() - g;
            b > j && j >= 0 ? d = setTimeout(i, b - j) : (d = null, c || (h = a.apply(f, e), d || (f = e = null)))
        };
        return function() {
            f = this, e = arguments, g = s.now();
            var j = c && !d;
            return d || (d = setTimeout(i, b)), j && (h = a.apply(f, e), f = e = null), h
        }
    }, s.wrap = function(a, b) {
        return s.partial(b, a)
    }, s.negate = function(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }, s.compose = function() {
        var a = arguments,
            b = a.length - 1;
        return function() {
            for (var c = b, d = a[b].apply(this, arguments); c--;) d = a[c].call(this, d);
            return d
        }
    }, s.after = function(a, b) {
        return function() {
            return --a < 1 ? b.apply(this, arguments) : void 0
        }
    }, s.before = function(a, b) {
        var c;
        return function() {
            return --a > 0 && (c = b.apply(this, arguments)), 1 >= a && (b = null), c
        }
    }, s.once = s.partial(s.before, 2);
    var E = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        F = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    s.keys = function(a) {
        if (!s.isObject(a)) return [];
        if (o) return o(a);
        var b = [];
        for (var c in a) s.has(a, c) && b.push(c);
        return E && d(a, b), b
    }, s.allKeys = function(a) {
        if (!s.isObject(a)) return [];
        var b = [];
        for (var c in a) b.push(c);
        return E && d(a, b), b
    }, s.values = function(a) {
        for (var b = s.keys(a), c = b.length, d = Array(c), e = 0; c > e; e++) d[e] = a[b[e]];
        return d
    }, s.mapObject = function(a, b, c) {
        b = u(b, c);
        for (var d, e = s.keys(a), f = e.length, g = {}, h = 0; f > h; h++) d = e[h], g[d] = b(a[d], d, a);
        return g
    }, s.pairs = function(a) {
        for (var b = s.keys(a), c = b.length, d = Array(c), e = 0; c > e; e++) d[e] = [b[e], a[b[e]]];
        return d
    }, s.invert = function(a) {
        for (var b = {}, c = s.keys(a), d = 0, e = c.length; e > d; d++) b[a[c[d]]] = c[d];
        return b
    }, s.functions = s.methods = function(a) {
        var b = [];
        for (var c in a) s.isFunction(a[c]) && b.push(c);
        return b.sort()
    }, s.extend = v(s.allKeys), s.extendOwn = s.assign = v(s.keys), s.findKey = function(a, b, c) {
        b = u(b, c);
        for (var d, e = s.keys(a), f = 0, g = e.length; g > f; f++)
            if (d = e[f], b(a[d], d, a)) return d
    }, s.pick = function(a, b, c) {
        var d, e, f = {},
            g = a;
        if (null == g) return f;
        s.isFunction(b) ? (e = s.allKeys(g), d = t(b, c)) : (e = C(arguments, !1, !1, 1), d = function(a, b, c) {
            return b in c
        }, g = Object(g));
        for (var h = 0, i = e.length; i > h; h++) {
            var j = e[h],
                k = g[j];
            d(k, j, g) && (f[j] = k)
        }
        return f
    }, s.omit = function(a, b, c) {
        if (s.isFunction(b)) b = s.negate(b);
        else {
            var d = s.map(C(arguments, !1, !1, 1), String);
            b = function(a, b) {
                return !s.contains(d, b)
            }
        }
        return s.pick(a, b, c)
    }, s.defaults = v(s.allKeys, !0), s.create = function(a, b) {
        var c = w(a);
        return b && s.extendOwn(c, b), c
    }, s.clone = function(a) {
        return s.isObject(a) ? s.isArray(a) ? a.slice() : s.extend({}, a) : a
    }, s.tap = function(a, b) {
        return b(a), a
    }, s.isMatch = function(a, b) {
        var c = s.keys(b),
            d = c.length;
        if (null == a) return !d;
        for (var e = Object(a), f = 0; d > f; f++) {
            var g = c[f];
            if (b[g] !== e[g] || !(g in e)) return !1
        }
        return !0
    };
    var G = function(a, b, c, d) {
        if (a === b) return 0 !== a || 1 / a === 1 / b;
        if (null == a || null == b) return a === b;
        a instanceof s && (a = a._wrapped), b instanceof s && (b = b._wrapped);
        var e = l.call(a);
        if (e !== l.call(b)) return !1;
        switch (e) {
            case "[object RegExp]":
            case "[object String]":
                return "" + a == "" + b;
            case "[object Number]":
                return +a !== +a ? +b !== +b : 0 === +a ? 1 / +a === 1 / b : +a === +b;
            case "[object Date]":
            case "[object Boolean]":
                return +a === +b
        }
        var f = "[object Array]" === e;
        if (!f) {
            if ("object" != typeof a || "object" != typeof b) return !1;
            var g = a.constructor,
                h = b.constructor;
            if (g !== h && !(s.isFunction(g) && g instanceof g && s.isFunction(h) && h instanceof h) && "constructor" in a && "constructor" in b) return !1
        }
        c = c || [], d = d || [];
        for (var i = c.length; i--;)
            if (c[i] === a) return d[i] === b;
        if (c.push(a), d.push(b), f) {
            if (i = a.length, i !== b.length) return !1;
            for (; i--;)
                if (!G(a[i], b[i], c, d)) return !1
        } else {
            var j, k = s.keys(a);
            if (i = k.length, s.keys(b).length !== i) return !1;
            for (; i--;)
                if (j = k[i], !s.has(b, j) || !G(a[j], b[j], c, d)) return !1
        }
        return c.pop(), d.pop(), !0
    };
    s.isEqual = function(a, b) {
        return G(a, b)
    }, s.isEmpty = function(a) {
        return null == a ? !0 : A(a) && (s.isArray(a) || s.isString(a) || s.isArguments(a)) ? 0 === a.length : 0 === s.keys(a).length
    }, s.isElement = function(a) {
        return !(!a || 1 !== a.nodeType)
    }, s.isArray = n || function(a) {
        return "[object Array]" === l.call(a)
    }, s.isObject = function(a) {
        var b = typeof a;
        return "function" === b || "object" === b && !!a
    }, s.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(a) {
        s["is" + a] = function(b) {
            return l.call(b) === "[object " + a + "]"
        }
    }), s.isArguments(arguments) || (s.isArguments = function(a) {
        return s.has(a, "callee")
    }), "function" != typeof /./ && "object" != typeof Int8Array && (s.isFunction = function(a) {
        return "function" == typeof a || !1
    }), s.isFinite = function(a) {
        return isFinite(a) && !isNaN(parseFloat(a))
    }, s.isNaN = function(a) {
        return s.isNumber(a) && a !== +a
    }, s.isBoolean = function(a) {
        return a === !0 || a === !1 || "[object Boolean]" === l.call(a)
    }, s.isNull = function(a) {
        return null === a
    }, s.isUndefined = function(a) {
        return void 0 === a
    }, s.has = function(a, b) {
        return null != a && m.call(a, b)
    }, s.noConflict = function() {
        return e._ = f, this
    }, s.identity = function(a) {
        return a
    }, s.constant = function(a) {
        return function() {
            return a
        }
    }, s.noop = function() {}, s.property = x, s.propertyOf = function(a) {
        return null == a ? function() {} : function(b) {
            return a[b]
        }
    }, s.matcher = s.matches = function(a) {
        return a = s.extendOwn({}, a),
            function(b) {
                return s.isMatch(b, a)
            }
    }, s.times = function(a, b, c) {
        var d = Array(Math.max(0, a));
        b = t(b, c, 1);
        for (var e = 0; a > e; e++) d[e] = b(e);
        return d
    }, s.random = function(a, b) {
        return null == b && (b = a, a = 0), a + Math.floor(Math.random() * (b - a + 1))
    }, s.now = Date.now || function() {
        return (new Date).getTime()
    };
    var H = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        },
        I = s.invert(H),
        J = function(a) {
            var b = function(b) {
                    return a[b]
                },
                c = "(?:" + s.keys(a).join("|") + ")",
                d = RegExp(c),
                e = RegExp(c, "g");
            return function(a) {
                return a = null == a ? "" : "" + a, d.test(a) ? a.replace(e, b) : a
            }
        };
    s.escape = J(H), s.unescape = J(I), s.result = function(a, b, c) {
        var d = null == a ? void 0 : a[b];
        return void 0 === d && (d = c), s.isFunction(d) ? d.call(a) : d
    };
    var K = 0;
    s.uniqueId = function(a) {
        var b = ++K + "";
        return a ? a + b : b
    }, s.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var L = /(.)^/,
        M = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        N = /\\|'|\r|\n|\u2028|\u2029/g,
        O = function(a) {
            return "\\" + M[a]
        };
    s.template = function(a, b, c) {
        !b && c && (b = c), b = s.defaults({}, b, s.templateSettings);
        var d = RegExp([(b.escape || L).source, (b.interpolate || L).source, (b.evaluate || L).source].join("|") + "|$", "g"),
            e = 0,
            f = "__p+='";
        a.replace(d, function(b, c, d, g, h) {
            return f += a.slice(e, h).replace(N, O), e = h + b.length, c ? f += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'" : d ? f += "'+\n((__t=(" + d + "))==null?'':__t)+\n'" : g && (f += "';\n" + g + "\n__p+='"), b
        }), f += "';\n", b.variable || (f = "with(obj||{}){\n" + f + "}\n"), f = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + f + "return __p;\n";
        try {
            var g = new Function(b.variable || "obj", "_", f)
        } catch (h) {
            throw h.source = f, h
        }
        var i = function(a) {
                return g.call(this, a, s)
            },
            j = b.variable || "obj";
        return i.source = "function(" + j + "){\n" + f + "}", i
    }, s.chain = function(a) {
        var b = s(a);
        return b._chain = !0, b
    };
    var P = function(a, b) {
        return a._chain ? s(b).chain() : b
    };
    s.mixin = function(a) {
        s.each(s.functions(a), function(b) {
            var c = s[b] = a[b];
            s.prototype[b] = function() {
                var a = [this._wrapped];
                return j.apply(a, arguments), P(this, c.apply(s, a))
            }
        })
    }, s.mixin(s), s.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(a) {
        var b = g[a];
        s.prototype[a] = function() {
            var c = this._wrapped;
            return b.apply(c, arguments), "shift" !== a && "splice" !== a || 0 !== c.length || delete c[0], P(this, c)
        }
    }), s.each(["concat", "join", "slice"], function(a) {
        var b = g[a];
        s.prototype[a] = function() {
            return P(this, b.apply(this._wrapped, arguments))
        }
    }), s.prototype.value = function() {
        return this._wrapped
    }, s.prototype.valueOf = s.prototype.toJSON = s.prototype.value, s.prototype.toString = function() {
        return "" + this._wrapped
    }, "function" == typeof define && define.amd && define("underscore", [], function() {
        return s
    })
}).call(this),
    function(a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
    }(function(a) {
        var b, c, d, e, f, g, h = "Close",
            i = "BeforeClose",
            j = "AfterClose",
            k = "BeforeAppend",
            l = "MarkupParse",
            m = "Open",
            n = "Change",
            o = "mfp",
            p = "." + o,
            q = "mfp-ready",
            r = "mfp-removing",
            s = "mfp-prevent-close",
            t = function() {},
            u = !!window.jQuery,
            v = a(window),
            w = function(a, c) {
                b.ev.on(o + a + p, c)
            },
            x = function(b, c, d, e) {
                var f = document.createElement("div");
                return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
            },
            y = function(c, d) {
                b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
            },
            z = function(c) {
                return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
            },
            A = function() {
                a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
            },
            B = function() {
                var a = document.createElement("p").style,
                    b = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== a.transition) return !0;
                for (; b.length;)
                    if (b.pop() + "Transition" in a) return !0;
                return !1
            };
        t.prototype = {
            constructor: t,
            init: function() {
                var c = navigator.appVersion;
                b.isIE7 = -1 !== c.indexOf("MSIE 7."), b.isIE8 = -1 !== c.indexOf("MSIE 8."), b.isLowIE = b.isIE7 || b.isIE8, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
            },
            open: function(c) {
                var e;
                if (c.isObj === !1) {
                    b.items = c.items.toArray(), b.index = 0;
                    var g, h = c.items;
                    for (e = 0; e < h.length; e++)
                        if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
                            b.index = e;
                            break
                        }
                } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
                if (b.isOpen) return void b.updateItemHTML();
                b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() {
                    b.close()
                }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) {
                    b._checkIfClose(a.target) && b.close()
                }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
                var i = a.magnificPopup.modules;
                for (e = 0; e < i.length; e++) {
                    var j = i[e];
                    j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
                }
                y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a, b, c, d) {
                    c.close_replaceWith = z(d.type)
                }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({
                    overflow: b.st.overflowY,
                    overflowX: "hidden",
                    overflowY: b.st.overflowY
                }) : b.wrap.css({
                    top: v.scrollTop(),
                    position: "absolute"
                }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                    height: d.height(),
                    position: "absolute"
                }), b.st.enableEscapeKey && d.on("keyup" + p, function(a) {
                    27 === a.keyCode && b.close()
                }), v.on("resize" + p, function() {
                    b.updateSize()
                }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
                var k = b.wH = v.height(),
                    n = {};
                if (b.fixedContentPos && b._hasScrollBar(k)) {
                    var o = b._getScrollbarSize();
                    o && (n.marginRight = o)
                }
                b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
                var r = b.st.mainClass;
                return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function() {
                    b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
                }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
            },
            close: function() {
                b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function() {
                    b._close()
                }, b.st.removalDelay)) : b._close())
            },
            _close: function() {
                y(h);
                var c = r + " " + q + " ";
                if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
                    var e = {
                        marginRight: ""
                    };
                    b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
                }
                d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
            },
            updateSize: function(a) {
                if (b.isIOS) {
                    var c = document.documentElement.clientWidth / window.innerWidth,
                        d = window.innerHeight * c;
                    b.wrap.css("height", d), b.wH = d
                } else b.wH = a || v.height();
                b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
            },
            updateItemHTML: function() {
                var c = b.items[b.index];
                b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
                var d = c.type;
                if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
                    var f = b.st[d] ? b.st[d].markup : !1;
                    y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
                }
                e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
                var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
                b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
            },
            appendContent: function(a, c) {
                b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
            },
            parseEl: function(c) {
                var d, e = b.items[c];
                if (e.tagName ? e = {
                        el: a(e)
                    } : (d = e.type, e = {
                        data: e,
                        src: e.src
                    }), e.el) {
                    for (var f = b.types, g = 0; g < f.length; g++)
                        if (e.el.hasClass("mfp-" + f[g])) {
                            d = f[g];
                            break
                        } e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
                }
                return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
            },
            addGroup: function(a, c) {
                var d = function(d) {
                    d.mfpEl = this, b._openClick(d, a, c)
                };
                c || (c = {});
                var e = "click.magnificPopup";
                c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
            },
            _openClick: function(c, d, e) {
                var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
                if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                    var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                    if (g)
                        if (a.isFunction(g)) {
                            if (!g.call(b)) return !0
                        } else if (v.width() < g) return !0;
                    c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
                }
            },
            updateStatus: function(a, d) {
                if (b.preloader) {
                    c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                    var e = {
                        status: a,
                        text: d
                    };
                    y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function(a) {
                        a.stopImmediatePropagation()
                    }), b.container.addClass("mfp-s-" + a), c = a
                }
            },
            _checkIfClose: function(c) {
                if (!a(c).hasClass(s)) {
                    var d = b.st.closeOnContentClick,
                        e = b.st.closeOnBgClick;
                    if (d && e) return !0;
                    if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
                    if (c === b.content[0] || a.contains(b.content[0], c)) {
                        if (d) return !0
                    } else if (e && a.contains(document, c)) return !0;
                    return !1
                }
            },
            _addClassToMFP: function(a) {
                b.bgOverlay.addClass(a), b.wrap.addClass(a)
            },
            _removeClassFromMFP: function(a) {
                this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
            },
            _hasScrollBar: function(a) {
                return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
            },
            _setFocus: function() {
                (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
            },
            _onFocusIn: function(c) {
                return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
            },
            _parseMarkup: function(b, c, d) {
                var e;
                d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function(a, c) {
                    if (void 0 === c || c === !1) return !0;
                    if (e = a.split("_"), e.length > 1) {
                        var d = b.find(p + "-" + e[0]);
                        if (d.length > 0) {
                            var f = e[1];
                            "replaceWith" === f ? d[0] !== c[0] && d.replaceWith(c) : "img" === f ? d.is("img") ? d.attr("src", c) : d.replaceWith('<img src="' + c + '" class="' + d.attr("class") + '" />') : d.attr(e[1], c)
                        }
                    } else b.find(p + "-" + a).html(c)
                })
            },
            _getScrollbarSize: function() {
                if (void 0 === b.scrollbarSize) {
                    var a = document.createElement("div");
                    a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
                }
                return b.scrollbarSize
            }
        }, a.magnificPopup = {
            instance: null,
            proto: t.prototype,
            modules: [],
            open: function(b, c) {
                return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
            },
            close: function() {
                return a.magnificPopup.instance && a.magnificPopup.instance.close()
            },
            registerModule: function(b, c) {
                c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading..."
            }
        }, a.fn.magnificPopup = function(c) {
            A();
            var d = a(this);
            if ("string" == typeof c)
                if ("open" === c) {
                    var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup,
                        g = parseInt(arguments[1], 10) || 0;
                    f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
                        mfpEl: e
                    }, d, f)
                } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
            else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
            return d
        };
        var C, D, E, F = "inline",
            G = function() {
                E && (D.after(E.addClass(C)).detach(), E = null)
            };
        a.magnificPopup.registerModule(F, {
            options: {
                hiddenClass: "hide",
                markup: "",
                tNotFound: "Content not found"
            },
            proto: {
                initInline: function() {
                    b.types.push(F), w(h + "." + F, function() {
                        G()
                    })
                },
                getInline: function(c, d) {
                    if (G(), c.src) {
                        var e = b.st.inline,
                            f = a(c.src);
                        if (f.length) {
                            var g = f[0].parentNode;
                            g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
                        } else b.updateStatus("error", e.tNotFound), f = a("<div>");
                        return c.inlineElement = f, f
                    }
                    return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
                }
            }
        });
        var H, I = "ajax",
            J = function() {
                H && a(document.body).removeClass(H)
            },
            K = function() {
                J(), b.req && b.req.abort()
            };
        a.magnificPopup.registerModule(I, {
            options: {
                settings: null,
                cursor: "mfp-ajax-cur",
                tError: '<a href="%url%">The content</a> could not be loaded.'
            },
            proto: {
                initAjax: function() {
                    b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
                },
                getAjax: function(c) {
                    H && a(document.body).addClass(H), b.updateStatus("loading");
                    var d = a.extend({
                        url: c.src,
                        success: function(d, e, f) {
                            var g = {
                                data: d,
                                xhr: f
                            };
                            y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function() {
                                b.wrap.addClass(q)
                            }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
                        },
                        error: function() {
                            J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                        }
                    }, b.st.ajax.settings);
                    return b.req = a.ajax(d), ""
                }
            }
        });
        var L, M = function(c) {
            if (c.data && void 0 !== c.data.title) return c.data.title;
            var d = b.st.image.titleSrc;
            if (d) {
                if (a.isFunction(d)) return d.call(b, c);
                if (c.el) return c.el.attr(d) || ""
            }
            return ""
        };
        a.magnificPopup.registerModule("image", {
            options: {
                markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.'
            },
            proto: {
                initImage: function() {
                    var c = b.st.image,
                        d = ".image";
                    b.types.push("image"), w(m + d, function() {
                        "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
                    }), w(h + d, function() {
                        c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
                    }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
                },
                resizeImage: function() {
                    var a = b.currItem;
                    if (a && a.img && b.st.image.verticalFit) {
                        var c = 0;
                        b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
                    }
                },
                _onImageHasSize: function(a) {
                    a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
                },
                findImageSize: function(a) {
                    var c = 0,
                        d = a.img[0],
                        e = function(f) {
                            L && clearInterval(L), L = setInterval(function() {
                                return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                            }, f)
                        };
                    e(1)
                },
                getImage: function(c, d) {
                    var e = 0,
                        f = function() {
                            c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
                        },
                        g = function() {
                            c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
                        },
                        h = b.st.image,
                        i = d.find(".mfp-img");
                    if (i.length) {
                        var j = document.createElement("img");
                        j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                    }
                    return b._parseMarkup(d, {
                        title: M(c),
                        img_replaceWith: c.img
                    }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
                }
            }
        });
        var N, O = function() {
            return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
        };
        a.magnificPopup.registerModule("zoom", {
            options: {
                enabled: !1,
                easing: "ease-in-out",
                duration: 300,
                opener: function(a) {
                    return a.is("img") ? a : a.find("img")
                }
            },
            proto: {
                initZoom: function() {
                    var a, c = b.st.zoom,
                        d = ".zoom";
                    if (c.enabled && b.supportsTransition) {
                        var e, f, g = c.duration,
                            j = function(a) {
                                var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                    d = "all " + c.duration / 1e3 + "s " + c.easing,
                                    e = {
                                        position: "fixed",
                                        zIndex: 9999,
                                        left: 0,
                                        top: 0,
                                        "-webkit-backface-visibility": "hidden"
                                    },
                                    f = "transition";
                                return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
                            },
                            k = function() {
                                b.content.css("visibility", "visible")
                            };
                        w("BuildControls" + d, function() {
                            if (b._allowZoom()) {
                                if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
                                f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function() {
                                    f.css(b._getOffset(!0)), e = setTimeout(function() {
                                        k(), setTimeout(function() {
                                            f.remove(), a = f = null, y("ZoomAnimationEnded")
                                        }, 16)
                                    }, g)
                                }, 16)
                            }
                        }), w(i + d, function() {
                            if (b._allowZoom()) {
                                if (clearTimeout(e), b.st.removalDelay = g,
                                    !a) {
                                    if (a = b._getItemToZoom(), !a) return;
                                    f = j(a)
                                }
                                f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function() {
                                    f.css(b._getOffset())
                                }, 16)
                            }
                        }), w(h + d, function() {
                            b._allowZoom() && (k(), f && f.remove(), a = null)
                        })
                    }
                },
                _allowZoom: function() {
                    return "image" === b.currItem.type
                },
                _getItemToZoom: function() {
                    return b.currItem.hasSize ? b.currItem.img : !1
                },
                _getOffset: function(c) {
                    var d;
                    d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                    var e = d.offset(),
                        f = parseInt(d.css("padding-top"), 10),
                        g = parseInt(d.css("padding-bottom"), 10);
                    e.top -= a(window).scrollTop() - f;
                    var h = {
                        width: d.width(),
                        height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
                    };
                    return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
                }
            }
        });
        var P = "iframe",
            Q = "//about:blank",
            R = function(a) {
                if (b.currTemplate[P]) {
                    var c = b.currTemplate[P].find("iframe");
                    c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
                }
            };
        a.magnificPopup.registerModule(P, {
            options: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: "iframe_src",
                patterns: {
                    youtube: {
                        index: "youtube.com",
                        id: "v=",
                        src: "//www.youtube.com/embed/%id%?autoplay=1"
                    },
                    vimeo: {
                        index: "vimeo.com/",
                        id: "/",
                        src: "//player.vimeo.com/video/%id%?autoplay=1"
                    },
                    gmaps: {
                        index: "//maps.google.",
                        src: "%id%&output=embed"
                    }
                }
            },
            proto: {
                initIframe: function() {
                    b.types.push(P), w("BeforeChange", function(a, b, c) {
                        b !== c && (b === P ? R() : c === P && R(!0))
                    }), w(h + "." + P, function() {
                        R()
                    })
                },
                getIframe: function(c, d) {
                    var e = c.src,
                        f = b.st.iframe;
                    a.each(f.patterns, function() {
                        return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
                    });
                    var g = {};
                    return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
                }
            }
        });
        var S = function(a) {
                var c = b.items.length;
                return a > c - 1 ? a - c : 0 > a ? c + a : a
            },
            T = function(a, b, c) {
                return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
            };
        a.magnificPopup.registerModule("gallery", {
            options: {
                enabled: !1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: "%curr% of %total%"
            },
            proto: {
                initGallery: function() {
                    var c = b.st.gallery,
                        e = ".mfp-gallery",
                        g = Boolean(a.fn.mfpFastClick);
                    return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function() {
                        c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function() {
                            return b.items.length > 1 ? (b.next(), !1) : void 0
                        }), d.on("keydown" + e, function(a) {
                            37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                        })
                    }), w("UpdateStatus" + e, function(a, c) {
                        c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
                    }), w(l + e, function(a, d, e, f) {
                        var g = b.items.length;
                        e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
                    }), w("BuildControls" + e, function() {
                        if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                            var d = c.arrowMarkup,
                                e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                                f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s),
                                h = g ? "mfpFastClick" : "click";
                            e[h](function() {
                                b.prev()
                            }), f[h](function() {
                                b.next()
                            }), b.isIE7 && (x("b", e[0], !1, !0), x("a", e[0], !1, !0), x("b", f[0], !1, !0), x("a", f[0], !1, !0)), b.container.append(e.add(f))
                        }
                    }), w(n + e, function() {
                        b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function() {
                            b.preloadNearbyImages(), b._preloadTimeout = null
                        }, 16)
                    }), void w(h + e, function() {
                        d.off(e), b.wrap.off("click" + e), b.arrowLeft && g && b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(), b.arrowRight = b.arrowLeft = null
                    })) : !1
                },
                next: function() {
                    b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
                },
                prev: function() {
                    b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
                },
                goTo: function(a) {
                    b.direction = a >= b.index, b.index = a, b.updateItemHTML()
                },
                preloadNearbyImages: function() {
                    var a, c = b.st.gallery.preload,
                        d = Math.min(c[0], b.items.length),
                        e = Math.min(c[1], b.items.length);
                    for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
                    for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
                },
                _preloadItem: function(c) {
                    if (c = S(c), !b.items[c].preloaded) {
                        var d = b.items[c];
                        d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
                            d.hasSize = !0
                        }).on("error.mfploader", function() {
                            d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
                        }).attr("src", d.src)), d.preloaded = !0
                    }
                }
            }
        });
        var U = "retina";
        a.magnificPopup.registerModule(U, {
                options: {
                    replaceSrc: function(a) {
                        return a.src.replace(/\.\w+$/, function(a) {
                            return "@2x" + a
                        })
                    },
                    ratio: 1
                },
                proto: {
                    initRetina: function() {
                        if (window.devicePixelRatio > 1) {
                            var a = b.st.retina,
                                c = a.ratio;
                            c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function(a, b) {
                                b.img.css({
                                    "max-width": b.img[0].naturalWidth / c,
                                    width: "100%"
                                })
                            }), w("ElementParse." + U, function(b, d) {
                                d.src = a.replaceSrc(d, c)
                            }))
                        }
                    }
                }
            }),
            function() {
                var b = 1e3,
                    c = "ontouchstart" in window,
                    d = function() {
                        v.off("touchmove" + f + " touchend" + f)
                    },
                    e = "mfpFastClick",
                    f = "." + e;
                a.fn.mfpFastClick = function(e) {
                    return a(this).each(function() {
                        var g, h = a(this);
                        if (c) {
                            var i, j, k, l, m, n;
                            h.on("touchstart" + f, function(a) {
                                l = !1, n = 1, m = a.originalEvent ? a.originalEvent.touches[0] : a.touches[0], j = m.clientX, k = m.clientY, v.on("touchmove" + f, function(a) {
                                    m = a.originalEvent ? a.originalEvent.touches : a.touches, n = m.length, m = m[0], (Math.abs(m.clientX - j) > 10 || Math.abs(m.clientY - k) > 10) && (l = !0, d())
                                }).on("touchend" + f, function(a) {
                                    d(), l || n > 1 || (g = !0, a.preventDefault(), clearTimeout(i), i = setTimeout(function() {
                                        g = !1
                                    }, b), e())
                                })
                            })
                        }
                        h.on("click" + f, function() {
                            g || e()
                        })
                    })
                }, a.fn.destroyMfpFastClick = function() {
                    a(this).off("touchstart" + f + " click" + f), c && v.off("touchmove" + f + " touchend" + f)
                }
            }(), A()
    }),
    function(a) {
        a.fn.hoverIntent = function(b, c, d) {
            var e = {
                interval: 100,
                sensitivity: 6,
                timeout: 0
            };
            e = "object" == typeof b ? a.extend(e, b) : a.isFunction(c) ? a.extend(e, {
                over: b,
                out: c,
                selector: d
            }) : a.extend(e, {
                over: b,
                out: b,
                selector: c
            });
            var f, g, h, i, j = function(a) {
                    f = a.pageX, g = a.pageY
                },
                k = function(b, c) {
                    return c.hoverIntent_t = clearTimeout(c.hoverIntent_t), Math.sqrt((h - f) * (h - f) + (i - g) * (i - g)) < e.sensitivity ? (a(c).off("mousemove.hoverIntent", j), c.hoverIntent_s = !0, e.over.apply(c, [b])) : (h = f, i = g, c.hoverIntent_t = setTimeout(function() {
                        k(b, c)
                    }, e.interval), void 0)
                },
                l = function(a, b) {
                    return b.hoverIntent_t = clearTimeout(b.hoverIntent_t), b.hoverIntent_s = !1, e.out.apply(b, [a])
                },
                m = function(b) {
                    var c = a.extend({}, b),
                        d = this;
                    d.hoverIntent_t && (d.hoverIntent_t = clearTimeout(d.hoverIntent_t)), "mouseenter" === b.type ? (h = c.pageX, i = c.pageY, a(d).on("mousemove.hoverIntent", j), d.hoverIntent_s || (d.hoverIntent_t = setTimeout(function() {
                        k(c, d)
                    }, e.interval))) : (a(d).off("mousemove.hoverIntent", j), d.hoverIntent_s && (d.hoverIntent_t = setTimeout(function() {
                        l(c, d)
                    }, e.timeout)))
                };
            return this.on({
                "mouseenter.hoverIntent": m,
                "mouseleave.hoverIntent": m
            }, e.selector)
        }
    }(jQuery), ! function(a, b) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.moment = b()
    }(this, function() {
        "use strict";

        function a() {
            return Ac.apply(null, arguments)
        }

        function b(a) {
            Ac = a
        }

        function c() {
            return {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1
            }
        }

        function d(a) {
            return "[object Array]" === Object.prototype.toString.call(a)
        }

        function e(a) {
            return "[object Date]" === Object.prototype.toString.call(a) || a instanceof Date
        }

        function f(a, b) {
            var c, d = [];
            for (c = 0; c < a.length; ++c) d.push(b(a[c], c));
            return d
        }

        function g(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        }

        function h(a, b) {
            for (var c in b) g(b, c) && (a[c] = b[c]);
            return g(b, "toString") && (a.toString = b.toString), g(b, "valueOf") && (a.valueOf = b.valueOf), a
        }

        function i(a, b, c, d) {
            return ya(a, b, c, d, !0).utc()
        }

        function j(a) {
            return null == a._isValid && (a._isValid = !isNaN(a._d.getTime()) && a._pf.overflow < 0 && !a._pf.empty && !a._pf.invalidMonth && !a._pf.nullInput && !a._pf.invalidFormat && !a._pf.userInvalidated, a._strict && (a._isValid = a._isValid && 0 === a._pf.charsLeftOver && 0 === a._pf.unusedTokens.length && void 0 === a._pf.bigHour)), a._isValid
        }

        function k(a) {
            var b = i(NaN);
            return null != a ? h(b._pf, a) : b._pf.userInvalidated = !0, b
        }

        function l(a, b) {
            var c, d, e;
            if ("undefined" != typeof b._isAMomentObject && (a._isAMomentObject = b._isAMomentObject), "undefined" != typeof b._i && (a._i = b._i), "undefined" != typeof b._f && (a._f = b._f), "undefined" != typeof b._l && (a._l = b._l), "undefined" != typeof b._strict && (a._strict = b._strict), "undefined" != typeof b._tzm && (a._tzm = b._tzm), "undefined" != typeof b._isUTC && (a._isUTC = b._isUTC), "undefined" != typeof b._offset && (a._offset = b._offset), "undefined" != typeof b._pf && (a._pf = b._pf), "undefined" != typeof b._locale && (a._locale = b._locale), Cc.length > 0)
                for (c in Cc) d = Cc[c], e = b[d], "undefined" != typeof e && (a[d] = e);
            return a
        }

        function m(b) {
            l(this, b), this._d = new Date(+b._d), Dc === !1 && (Dc = !0, a.updateOffset(this), Dc = !1)
        }

        function n(a) {
            return a instanceof m || null != a && g(a, "_isAMomentObject")
        }

        function o(a) {
            var b = +a,
                c = 0;
            return 0 !== b && isFinite(b) && (c = b >= 0 ? Math.floor(b) : Math.ceil(b)), c
        }

        function p(a, b, c) {
            var d, e = Math.min(a.length, b.length),
                f = Math.abs(a.length - b.length),
                g = 0;
            for (d = 0; e > d; d++)(c && a[d] !== b[d] || !c && o(a[d]) !== o(b[d])) && g++;
            return g + f
        }

        function q() {}

        function r(a) {
            return a ? a.toLowerCase().replace("_", "-") : a
        }

        function s(a) {
            for (var b, c, d, e, f = 0; f < a.length;) {
                for (e = r(a[f]).split("-"), b = e.length, c = r(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
                    if (d = t(e.slice(0, b).join("-"))) return d;
                    if (c && c.length >= b && p(e, c, !0) >= b - 1) break;
                    b--
                }
                f++
            }
            return null
        }

        function t(a) {
            var b = null;
            if (!Ec[a] && "undefined" != typeof module && module && module.exports) try {
                b = Bc._abbr, require("./locale/" + a), u(b)
            } catch (c) {}
            return Ec[a]
        }

        function u(a, b) {
            var c;
            return a && (c = "undefined" == typeof b ? w(a) : v(a, b), c && (Bc = c)), Bc._abbr
        }

        function v(a, b) {
            return null !== b ? (b.abbr = a, Ec[a] || (Ec[a] = new q), Ec[a].set(b), u(a), Ec[a]) : (delete Ec[a], null)
        }

        function w(a) {
            var b;
            if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return Bc;
            if (!d(a)) {
                if (b = t(a)) return b;
                a = [a]
            }
            return s(a)
        }

        function x(a, b) {
            var c = a.toLowerCase();
            Fc[c] = Fc[c + "s"] = Fc[b] = a
        }

        function y(a) {
            return "string" == typeof a ? Fc[a] || Fc[a.toLowerCase()] : void 0
        }

        function z(a) {
            var b, c, d = {};
            for (c in a) g(a, c) && (b = y(c), b && (d[b] = a[c]));
            return d
        }

        function A(b, c) {
            return function(d) {
                return null != d ? (C(this, b, d), a.updateOffset(this, c), this) : B(this, b)
            }
        }

        function B(a, b) {
            return a._d["get" + (a._isUTC ? "UTC" : "") + b]()
        }

        function C(a, b, c) {
            return a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
        }

        function D(a, b) {
            var c;
            if ("object" == typeof a)
                for (c in a) this.set(c, a[c]);
            else if (a = y(a), "function" == typeof this[a]) return this[a](b);
            return this
        }

        function E(a, b, c) {
            for (var d = "" + Math.abs(a), e = a >= 0; d.length < b;) d = "0" + d;
            return (e ? c ? "+" : "" : "-") + d
        }

        function F(a, b, c, d) {
            var e = d;
            "string" == typeof d && (e = function() {
                return this[d]()
            }), a && (Jc[a] = e), b && (Jc[b[0]] = function() {
                return E(e.apply(this, arguments), b[1], b[2])
            }), c && (Jc[c] = function() {
                return this.localeData().ordinal(e.apply(this, arguments), a)
            })
        }

        function G(a) {
            return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
        }

        function H(a) {
            var b, c, d = a.match(Gc);
            for (b = 0, c = d.length; c > b; b++) d[b] = Jc[d[b]] ? Jc[d[b]] : G(d[b]);
            return function(e) {
                var f = "";
                for (b = 0; c > b; b++) f += d[b] instanceof Function ? d[b].call(e, a) : d[b];
                return f
            }
        }

        function I(a, b) {
            return a.isValid() ? (b = J(b, a.localeData()), Ic[b] || (Ic[b] = H(b)), Ic[b](a)) : a.localeData().invalidDate()
        }

        function J(a, b) {
            function c(a) {
                return b.longDateFormat(a) || a
            }
            var d = 5;
            for (Hc.lastIndex = 0; d >= 0 && Hc.test(a);) a = a.replace(Hc, c), Hc.lastIndex = 0, d -= 1;
            return a
        }

        function K(a, b, c) {
            Yc[a] = "function" == typeof b ? b : function(a) {
                return a && c ? c : b
            }
        }

        function L(a, b) {
            return g(Yc, a) ? Yc[a](b._strict, b._locale) : new RegExp(M(a))
        }

        function M(a) {
            return a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(a, b, c, d, e) {
                return b || c || d || e
            }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }

        function N(a, b) {
            var c, d = b;
            for ("string" == typeof a && (a = [a]), "number" == typeof b && (d = function(a, c) {
                    c[b] = o(a)
                }), c = 0; c < a.length; c++) Zc[a[c]] = d
        }

        function O(a, b) {
            N(a, function(a, c, d, e) {
                d._w = d._w || {}, b(a, d._w, d, e)
            })
        }

        function P(a, b, c) {
            null != b && g(Zc, a) && Zc[a](b, c._a, c, a)
        }

        function Q(a, b) {
            return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
        }

        function R(a) {
            return this._months[a.month()]
        }

        function S(a) {
            return this._monthsShort[a.month()]
        }

        function T(a, b, c) {
            var d, e, f;
            for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; 12 > d; d++) {
                if (e = i([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d;
                if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
                if (!c && this._monthsParse[d].test(a)) return d
            }
        }

        function U(a, b) {
            var c;
            return "string" == typeof b && (b = a.localeData().monthsParse(b), "number" != typeof b) ? a : (c = Math.min(a.date(), Q(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a)
        }

        function V(b) {
            return null != b ? (U(this, b), a.updateOffset(this, !0), this) : B(this, "Month")
        }

        function W() {
            return Q(this.year(), this.month())
        }

        function X(a) {
            var b, c = a._a;
            return c && -2 === a._pf.overflow && (b = c[_c] < 0 || c[_c] > 11 ? _c : c[ad] < 1 || c[ad] > Q(c[$c], c[_c]) ? ad : c[bd] < 0 || c[bd] > 24 || 24 === c[bd] && (0 !== c[cd] || 0 !== c[dd] || 0 !== c[ed]) ? bd : c[cd] < 0 || c[cd] > 59 ? cd : c[dd] < 0 || c[dd] > 59 ? dd : c[ed] < 0 || c[ed] > 999 ? ed : -1, a._pf._overflowDayOfYear && ($c > b || b > ad) && (b = ad), a._pf.overflow = b), a
        }

        function Y(b) {
            a.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + b)
        }

        function Z(a, b) {
            var c = !0;
            return h(function() {
                return c && (Y(a), c = !1), b.apply(this, arguments)
            }, b)
        }

        function $(a, b) {
            hd[a] || (Y(b), hd[a] = !0)
        }

        function _(a) {
            var b, c, d = a._i,
                e = id.exec(d);
            if (e) {
                for (a._pf.iso = !0, b = 0, c = jd.length; c > b; b++)
                    if (jd[b][1].exec(d)) {
                        a._f = jd[b][0] + (e[6] || " ");
                        break
                    } for (b = 0, c = kd.length; c > b; b++)
                    if (kd[b][1].exec(d)) {
                        a._f += kd[b][0];
                        break
                    } d.match(Vc) && (a._f += "Z"), sa(a)
            } else a._isValid = !1
        }

        function aa(b) {
            var c = ld.exec(b._i);
            return null !== c ? void(b._d = new Date(+c[1])) : (_(b), void(b._isValid === !1 && (delete b._isValid, a.createFromInputFallback(b))))
        }

        function ba(a, b, c, d, e, f, g) {
            var h = new Date(a, b, c, d, e, f, g);
            return 1970 > a && h.setFullYear(a), h
        }

        function ca(a) {
            var b = new Date(Date.UTC.apply(null, arguments));
            return 1970 > a && b.setUTCFullYear(a), b
        }

        function da(a) {
            return ea(a) ? 366 : 365
        }

        function ea(a) {
            return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
        }

        function fa() {
            return ea(this.year())
        }

        function ga(a, b, c) {
            var d, e = c - b,
                f = c - a.day();
            return f > e && (f -= 7), e - 7 > f && (f += 7), d = za(a).add(f, "d"), {
                week: Math.ceil(d.dayOfYear() / 7),
                year: d.year()
            }
        }

        function ha(a) {
            return ga(a, this._week.dow, this._week.doy).week
        }

        function ia() {
            return this._week.dow
        }

        function ja() {
            return this._week.doy
        }

        function ka(a) {
            var b = this.localeData().week(this);
            return null == a ? b : this.add(7 * (a - b), "d")
        }

        function la(a) {
            var b = ga(this, 1, 4).week;
            return null == a ? b : this.add(7 * (a - b), "d")
        }

        function ma(a, b, c, d, e) {
            var f, g, h = ca(a, 0, 1).getUTCDay();
            return h = 0 === h ? 7 : h, c = null != c ? c : e, f = e - h + (h > d ? 7 : 0) - (e > h ? 7 : 0), g = 7 * (b - 1) + (c - e) + f + 1, {
                year: g > 0 ? a : a - 1,
                dayOfYear: g > 0 ? g : da(a - 1) + g
            }
        }

        function na(a) {
            var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
            return null == a ? b : this.add(a - b, "d")
        }

        function oa(a, b, c) {
            return null != a ? a : null != b ? b : c
        }

        function pa(a) {
            var b = new Date;
            return a._useUTC ? [b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()] : [b.getFullYear(), b.getMonth(), b.getDate()]
        }

        function qa(a) {
            var b, c, d, e, f = [];
            if (!a._d) {
                for (d = pa(a), a._w && null == a._a[ad] && null == a._a[_c] && ra(a), a._dayOfYear && (e = oa(a._a[$c], d[$c]), a._dayOfYear > da(e) && (a._pf._overflowDayOfYear = !0), c = ca(e, 0, a._dayOfYear), a._a[_c] = c.getUTCMonth(), a._a[ad] = c.getUTCDate()), b = 0; 3 > b && null == a._a[b]; ++b) a._a[b] = f[b] = d[b];
                for (; 7 > b; b++) a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
                24 === a._a[bd] && 0 === a._a[cd] && 0 === a._a[dd] && 0 === a._a[ed] && (a._nextDay = !0, a._a[bd] = 0), a._d = (a._useUTC ? ca : ba).apply(null, f), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[bd] = 24)
            }
        }

        function ra(a) {
            var b, c, d, e, f, g, h;
            b = a._w, null != b.GG || null != b.W || null != b.E ? (f = 1, g = 4, c = oa(b.GG, a._a[$c], ga(za(), 1, 4).year), d = oa(b.W, 1), e = oa(b.E, 1)) : (f = a._locale._week.dow, g = a._locale._week.doy, c = oa(b.gg, a._a[$c], ga(za(), f, g).year), d = oa(b.w, 1), null != b.d ? (e = b.d, f > e && ++d) : e = null != b.e ? b.e + f : f), h = ma(c, d, e, g, f), a._a[$c] = h.year, a._dayOfYear = h.dayOfYear
        }

        function sa(b) {
            if (b._f === a.ISO_8601) return void _(b);
            b._a = [], b._pf.empty = !0;
            var c, d, e, f, g, h = "" + b._i,
                i = h.length,
                j = 0;
            for (e = J(b._f, b._locale).match(Gc) || [], c = 0; c < e.length; c++) f = e[c], d = (h.match(L(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && b._pf.unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), j += d.length), Jc[f] ? (d ? b._pf.empty = !1 : b._pf.unusedTokens.push(f), P(f, d, b)) : b._strict && !d && b._pf.unusedTokens.push(f);
            b._pf.charsLeftOver = i - j, h.length > 0 && b._pf.unusedInput.push(h), b._pf.bigHour === !0 && b._a[bd] <= 12 && (b._pf.bigHour = void 0), b._a[bd] = ta(b._locale, b._a[bd], b._meridiem), qa(b), X(b)
        }

        function ta(a, b, c) {
            var d;
            return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && 12 > b && (b += 12), d || 12 !== b || (b = 0), b) : b
        }

        function ua(a) {
            var b, d, e, f, g;
            if (0 === a._f.length) return a._pf.invalidFormat = !0, void(a._d = new Date(NaN));
            for (f = 0; f < a._f.length; f++) g = 0, b = l({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._pf = c(), b._f = a._f[f], sa(b), j(b) && (g += b._pf.charsLeftOver, g += 10 * b._pf.unusedTokens.length, b._pf.score = g, (null == e || e > g) && (e = g, d = b));
            h(a, d || b)
        }

        function va(a) {
            if (!a._d) {
                var b = z(a._i);
                a._a = [b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], qa(a)
            }
        }

        function wa(a) {
            var b, c = a._i,
                e = a._f;
            return a._locale = a._locale || w(a._l), null === c || void 0 === e && "" === c ? k({
                nullInput: !0
            }) : ("string" == typeof c && (a._i = c = a._locale.preparse(c)), n(c) ? new m(X(c)) : (d(e) ? ua(a) : e ? sa(a) : xa(a), b = new m(X(a)), b._nextDay && (b.add(1, "d"), b._nextDay = void 0), b))
        }

        function xa(b) {
            var c = b._i;
            void 0 === c ? b._d = new Date : e(c) ? b._d = new Date(+c) : "string" == typeof c ? aa(b) : d(c) ? (b._a = f(c.slice(0), function(a) {
                return parseInt(a, 10)
            }), qa(b)) : "object" == typeof c ? va(b) : "number" == typeof c ? b._d = new Date(c) : a.createFromInputFallback(b)
        }

        function ya(a, b, d, e, f) {
            var g = {};
            return "boolean" == typeof d && (e = d, d = void 0), g._isAMomentObject = !0, g._useUTC = g._isUTC = f, g._l = d, g._i = a, g._f = b, g._strict = e, g._pf = c(), wa(g)
        }

        function za(a, b, c, d) {
            return ya(a, b, c, d, !1)
        }

        function Aa(a, b) {
            var c, e;
            if (1 === b.length && d(b[0]) && (b = b[0]), !b.length) return za();
            for (c = b[0], e = 1; e < b.length; ++e) b[e][a](c) && (c = b[e]);
            return c
        }

        function Ba() {
            var a = [].slice.call(arguments, 0);
            return Aa("isBefore", a)
        }

        function Ca() {
            var a = [].slice.call(arguments, 0);
            return Aa("isAfter", a)
        }

        function Da(a) {
            var b = z(a),
                c = b.year || 0,
                d = b.quarter || 0,
                e = b.month || 0,
                f = b.week || 0,
                g = b.day || 0,
                h = b.hour || 0,
                i = b.minute || 0,
                j = b.second || 0,
                k = b.millisecond || 0;
            this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = w(), this._bubble()
        }

        function Ea(a) {
            return a instanceof Da
        }

        function Fa(a, b) {
            F(a, 0, 0, function() {
                var a = this.utcOffset(),
                    c = "+";
                return 0 > a && (a = -a, c = "-"), c + E(~~(a / 60), 2) + b + E(~~a % 60, 2)
            })
        }

        function Ga(a) {
            var b = (a || "").match(Vc) || [],
                c = b[b.length - 1] || [],
                d = (c + "").match(qd) || ["-", 0, 0],
                e = +(60 * d[1]) + o(d[2]);
            return "+" === d[0] ? e : -e
        }

        function Ha(b, c) {
            var d, f;
            return c._isUTC ? (d = c.clone(), f = (n(b) || e(b) ? +b : +za(b)) - +d, d._d.setTime(+d._d + f), a.updateOffset(d, !1), d) : za(b).local()
        }

        function Ia(a) {
            return 15 * -Math.round(a._d.getTimezoneOffset() / 15)
        }

        function Ja(b, c) {
            var d, e = this._offset || 0;
            return null != b ? ("string" == typeof b && (b = Ga(b)), Math.abs(b) < 16 && (b = 60 * b), !this._isUTC && c && (d = Ia(this)), this._offset = b, this._isUTC = !0, null != d && this.add(d, "m"), e !== b && (!c || this._changeInProgress ? Za(this, Ua(b - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? e : Ia(this)
        }

        function Ka(a, b) {
            return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset()
        }

        function La(a) {
            return this.utcOffset(0, a)
        }

        function Ma(a) {
            return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Ia(this), "m")), this
        }

        function Na() {
            return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Ga(this._i)), this
        }

        function Oa(a) {
            return a = a ? za(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0
        }

        function Pa() {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
        }

        function Qa() {
            if (this._a) {
                var a = this._isUTC ? i(this._a) : za(this._a);
                return this.isValid() && p(this._a, a.toArray()) > 0
            }
            return !1
        }

        function Ra() {
            return !this._isUTC
        }

        function Sa() {
            return this._isUTC
        }

        function Ta() {
            return this._isUTC && 0 === this._offset
        }

        function Ua(a, b) {
            var c, d, e, f = a,
                h = null;
            return Ea(a) ? f = {
                ms: a._milliseconds,
                d: a._days,
                M: a._months
            } : "number" == typeof a ? (f = {}, b ? f[b] = a : f.milliseconds = a) : (h = rd.exec(a)) ? (c = "-" === h[1] ? -1 : 1, f = {
                y: 0,
                d: o(h[ad]) * c,
                h: o(h[bd]) * c,
                m: o(h[cd]) * c,
                s: o(h[dd]) * c,
                ms: o(h[ed]) * c
            }) : (h = sd.exec(a)) ? (c = "-" === h[1] ? -1 : 1, f = {
                y: Va(h[2], c),
                M: Va(h[3], c),
                d: Va(h[4], c),
                h: Va(h[5], c),
                m: Va(h[6], c),
                s: Va(h[7], c),
                w: Va(h[8], c)
            }) : null == f ? f = {} : "object" == typeof f && ("from" in f || "to" in f) && (e = Xa(za(f.from), za(f.to)), f = {}, f.ms = e.milliseconds, f.M = e.months), d = new Da(f), Ea(a) && g(a, "_locale") && (d._locale = a._locale), d
        }

        function Va(a, b) {
            var c = a && parseFloat(a.replace(",", "."));
            return (isNaN(c) ? 0 : c) * b
        }

        function Wa(a, b) {
            var c = {
                milliseconds: 0,
                months: 0
            };
            return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c
        }

        function Xa(a, b) {
            var c;
            return b = Ha(b, a), a.isBefore(b) ? c = Wa(a, b) : (c = Wa(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c
        }

        function Ya(a, b) {
            return function(c, d) {
                var e, f;
                return null === d || isNaN(+d) || ($(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period)."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = Ua(c, d), Za(this, e, a), this
            }
        }

        function Za(b, c, d, e) {
            var f = c._milliseconds,
                g = c._days,
                h = c._months;
            e = null == e ? !0 : e, f && b._d.setTime(+b._d + f * d), g && C(b, "Date", B(b, "Date") + g * d), h && U(b, B(b, "Month") + h * d), e && a.updateOffset(b, g || h)
        }

        function $a(a) {
            var b = a || za(),
                c = Ha(b, this).startOf("day"),
                d = this.diff(c, "days", !0),
                e = -6 > d ? "sameElse" : -1 > d ? "lastWeek" : 0 > d ? "lastDay" : 1 > d ? "sameDay" : 2 > d ? "nextDay" : 7 > d ? "nextWeek" : "sameElse";
            return this.format(this.localeData().calendar(e, this, za(b)))
        }

        function _a() {
            return new m(this)
        }

        function ab(a, b) {
            var c;
            return b = y("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = n(a) ? a : za(a), +this > +a) : (c = n(a) ? +a : +za(a), c < +this.clone().startOf(b))
        }

        function bb(a, b) {
            var c;
            return b = y("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = n(a) ? a : za(a), +a > +this) : (c = n(a) ? +a : +za(a), +this.clone().endOf(b) < c)
        }

        function cb(a, b, c) {
            return this.isAfter(a, c) && this.isBefore(b, c)
        }

        function db(a, b) {
            var c;
            return b = y(b || "millisecond"), "millisecond" === b ? (a = n(a) ? a : za(a), +this === +a) : (c = +za(a), +this.clone().startOf(b) <= c && c <= +this.clone().endOf(b))
        }

        function eb(a) {
            return 0 > a ? Math.ceil(a) : Math.floor(a)
        }

        function fb(a, b, c) {
            var d, e, f = Ha(a, this),
                g = 6e4 * (f.utcOffset() - this.utcOffset());
            return b = y(b), "year" === b || "month" === b || "quarter" === b ? (e = gb(this, f), "quarter" === b ? e /= 3 : "year" === b && (e /= 12)) : (d = this - f, e = "second" === b ? d / 1e3 : "minute" === b ? d / 6e4 : "hour" === b ? d / 36e5 : "day" === b ? (d - g) / 864e5 : "week" === b ? (d - g) / 6048e5 : d), c ? e : eb(e)
        }

        function gb(a, b) {
            var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
                f = a.clone().add(e, "months");
            return 0 > b - f ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d)
        }

        function hb() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        }

        function ib() {
            var a = this.clone().utc();
            return 0 < a.year() && a.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : I(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : I(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        }

        function jb(b) {
            var c = I(this, b || a.defaultFormat);
            return this.localeData().postformat(c)
        }

        function kb(a, b) {
            return Ua({
                to: this,
                from: a
            }).locale(this.locale()).humanize(!b)
        }

        function lb(a) {
            return this.from(za(), a)
        }

        function mb(a) {
            var b;
            return void 0 === a ? this._locale._abbr : (b = w(a), null != b && (this._locale = b), this)
        }

        function nb() {
            return this._locale
        }

        function ob(a) {
            switch (a = y(a)) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
        }

        function pb(a) {
            return a = y(a), void 0 === a || "millisecond" === a ? this : this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms")
        }

        function qb() {
            return +this._d - 6e4 * (this._offset || 0)
        }

        function rb() {
            return Math.floor(+this / 1e3)
        }

        function sb() {
            return this._offset ? new Date(+this) : this._d
        }

        function tb() {
            var a = this;
            return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()]
        }

        function ub() {
            return j(this)
        }

        function vb() {
            return h({}, this._pf)
        }

        function wb() {
            return this._pf.overflow
        }

        function xb(a, b) {
            F(0, [a, a.length], 0, b)
        }

        function yb(a, b, c) {
            return ga(za([a, 11, 31 + b - c]), b, c).week
        }

        function zb(a) {
            var b = ga(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
            return null == a ? b : this.add(a - b, "y")
        }

        function Ab(a) {
            var b = ga(this, 1, 4).year;
            return null == a ? b : this.add(a - b, "y")
        }

        function Bb() {
            return yb(this.year(), 1, 4)
        }

        function Cb() {
            var a = this.localeData()._week;
            return yb(this.year(), a.dow, a.doy)
        }

        function Db(a) {
            return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
        }

        function Eb(a, b) {
            if ("string" == typeof a)
                if (isNaN(a)) {
                    if (a = b.weekdaysParse(a), "number" != typeof a) return null
                } else a = parseInt(a, 10);
            return a
        }

        function Fb(a) {
            return this._weekdays[a.day()]
        }

        function Gb(a) {
            return this._weekdaysShort[a.day()]
        }

        function Hb(a) {
            return this._weekdaysMin[a.day()]
        }

        function Ib(a) {
            var b, c, d;
            for (this._weekdaysParse || (this._weekdaysParse = []), b = 0; 7 > b; b++)
                if (this._weekdaysParse[b] || (c = za([2e3, 1]).day(b), d = "^" + this.weekdays(c, "") + "|^" + this.weekdaysShort(c, "") + "|^" + this.weekdaysMin(c, ""), this._weekdaysParse[b] = new RegExp(d.replace(".", ""), "i")), this._weekdaysParse[b].test(a)) return b
        }

        function Jb(a) {
            var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != a ? (a = Eb(a, this.localeData()), this.add(a - b, "d")) : b
        }

        function Kb(a) {
            var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == a ? b : this.add(a - b, "d")
        }

        function Lb(a) {
            return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7)
        }

        function Mb(a, b) {
            F(a, 0, 0, function() {
                return this.localeData().meridiem(this.hours(), this.minutes(), b)
            })
        }

        function Nb(a, b) {
            return b._meridiemParse
        }

        function Ob(a) {
            return "p" === (a + "").toLowerCase().charAt(0)
        }

        function Pb(a, b, c) {
            return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
        }

        function Qb(a) {
            F(0, [a, 3], 0, "millisecond")
        }

        function Rb() {
            return this._isUTC ? "UTC" : ""
        }

        function Sb() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        }

        function Tb(a) {
            return za(1e3 * a)
        }

        function Ub() {
            return za.apply(null, arguments).parseZone()
        }

        function Vb(a, b, c) {
            var d = this._calendar[a];
            return "function" == typeof d ? d.call(b, c) : d
        }

        function Wb(a) {
            var b = this._longDateFormat[a];
            return !b && this._longDateFormat[a.toUpperCase()] && (b = this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(a) {
                return a.slice(1)
            }), this._longDateFormat[a] = b), b
        }

        function Xb() {
            return this._invalidDate
        }

        function Yb(a) {
            return this._ordinal.replace("%d", a)
        }

        function Zb(a) {
            return a
        }

        function $b(a, b, c, d) {
            var e = this._relativeTime[c];
            return "function" == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a)
        }

        function _b(a, b) {
            var c = this._relativeTime[a > 0 ? "future" : "past"];
            return "function" == typeof c ? c(b) : c.replace(/%s/i, b)
        }

        function ac(a) {
            var b, c;
            for (c in a) b = a[c], "function" == typeof b ? this[c] = b : this["_" + c] = b;
            this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
        }

        function bc(a, b, c, d) {
            var e = w(),
                f = i().set(d, b);
            return e[c](f, a)
        }

        function cc(a, b, c, d, e) {
            if ("number" == typeof a && (b = a, a = void 0), a = a || "", null != b) return bc(a, b, c, e);
            var f, g = [];
            for (f = 0; d > f; f++) g[f] = bc(a, f, c, e);
            return g
        }

        function dc(a, b) {
            return cc(a, b, "months", 12, "month")
        }

        function ec(a, b) {
            return cc(a, b, "monthsShort", 12, "month")
        }

        function fc(a, b) {
            return cc(a, b, "weekdays", 7, "day")
        }

        function gc(a, b) {
            return cc(a, b, "weekdaysShort", 7, "day")
        }

        function hc(a, b) {
            return cc(a, b, "weekdaysMin", 7, "day")
        }

        function ic() {
            var a = this._data;
            return this._milliseconds = Od(this._milliseconds), this._days = Od(this._days), this._months = Od(this._months), a.milliseconds = Od(a.milliseconds), a.seconds = Od(a.seconds), a.minutes = Od(a.minutes), a.hours = Od(a.hours), a.months = Od(a.months), a.years = Od(a.years), this
        }

        function jc(a, b, c, d) {
            var e = Ua(b, c);
            return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, a._bubble()
        }

        function kc(a, b) {
            return jc(this, a, b, 1)
        }

        function lc(a, b) {
            return jc(this, a, b, -1)
        }

        function mc() {
            var a, b, c, d = this._milliseconds,
                e = this._days,
                f = this._months,
                g = this._data,
                h = 0;
            return g.milliseconds = d % 1e3, a = eb(d / 1e3), g.seconds = a % 60, b = eb(a / 60), g.minutes = b % 60, c = eb(b / 60), g.hours = c % 24, e += eb(c / 24), h = eb(nc(e)), e -= eb(oc(h)), f += eb(e / 30), e %= 30, h += eb(f / 12), f %= 12, g.days = e, g.months = f, g.years = h, this
        }

        function nc(a) {
            return 400 * a / 146097
        }

        function oc(a) {
            return 146097 * a / 400
        }

        function pc(a) {
            var b, c, d = this._milliseconds;
            if (a = y(a), "month" === a || "year" === a) return b = this._days + d / 864e5, c = this._months + 12 * nc(b), "month" === a ? c : c / 12;
            switch (b = this._days + Math.round(oc(this._months / 12)), a) {
                case "week":
                    return b / 7 + d / 6048e5;
                case "day":
                    return b + d / 864e5;
                case "hour":
                    return 24 * b + d / 36e5;
                case "minute":
                    return 24 * b * 60 + d / 6e4;
                case "second":
                    return 24 * b * 60 * 60 + d / 1e3;
                case "millisecond":
                    return Math.floor(24 * b * 60 * 60 * 1e3) + d;
                default:
                    throw new Error("Unknown unit " + a)
            }
        }

        function qc() {
            return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * o(this._months / 12)
        }

        function rc(a) {
            return function() {
                return this.as(a)
            }
        }

        function sc(a) {
            return a = y(a), this[a + "s"]()
        }

        function tc(a) {
            return function() {
                return this._data[a]
            }
        }

        function uc() {
            return eb(this.days() / 7)
        }

        function vc(a, b, c, d, e) {
            return e.relativeTime(b || 1, !!c, a, d)
        }

        function wc(a, b, c) {
            var d = Ua(a).abs(),
                e = ce(d.as("s")),
                f = ce(d.as("m")),
                g = ce(d.as("h")),
                h = ce(d.as("d")),
                i = ce(d.as("M")),
                j = ce(d.as("y")),
                k = e < de.s && ["s", e] || 1 === f && ["m"] || f < de.m && ["mm", f] || 1 === g && ["h"] || g < de.h && ["hh", g] || 1 === h && ["d"] || h < de.d && ["dd", h] || 1 === i && ["M"] || i < de.M && ["MM", i] || 1 === j && ["y"] || ["yy", j];
            return k[2] = b, k[3] = +a > 0, k[4] = c, vc.apply(null, k)
        }

        function xc(a, b) {
            return void 0 === de[a] ? !1 : void 0 === b ? de[a] : (de[a] = b, !0)
        }

        function yc(a) {
            var b = this.localeData(),
                c = wc(this, !a, b);
            return a && (c = b.pastFuture(+this, c)), b.postformat(c)
        }

        function zc() {
            var a = ee(this.years()),
                b = ee(this.months()),
                c = ee(this.days()),
                d = ee(this.hours()),
                e = ee(this.minutes()),
                f = ee(this.seconds() + this.milliseconds() / 1e3),
                g = this.asSeconds();
            return g ? (0 > g ? "-" : "") + "P" + (a ? a + "Y" : "") + (b ? b + "M" : "") + (c ? c + "D" : "") + (d || e || f ? "T" : "") + (d ? d + "H" : "") + (e ? e + "M" : "") + (f ? f + "S" : "") : "P0D"
        }
        var Ac, Bc, Cc = a.momentProperties = [],
            Dc = !1,
            Ec = {},
            Fc = {},
            Gc = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,
            Hc = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            Ic = {},
            Jc = {},
            Kc = /\d/,
            Lc = /\d\d/,
            Mc = /\d{3}/,
            Nc = /\d{4}/,
            Oc = /[+-]?\d{6}/,
            Pc = /\d\d?/,
            Qc = /\d{1,3}/,
            Rc = /\d{1,4}/,
            Sc = /[+-]?\d{1,6}/,
            Tc = /\d+/,
            Uc = /[+-]?\d+/,
            Vc = /Z|[+-]\d\d:?\d\d/gi,
            Wc = /[+-]?\d+(\.\d{1,3})?/,
            Xc = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
            Yc = {},
            Zc = {},
            $c = 0,
            _c = 1,
            ad = 2,
            bd = 3,
            cd = 4,
            dd = 5,
            ed = 6;
        F("M", ["MM", 2], "Mo", function() {
            return this.month() + 1
        }), F("MMM", 0, 0, function(a) {
            return this.localeData().monthsShort(this, a)
        }), F("MMMM", 0, 0, function(a) {
            return this.localeData().months(this, a)
        }), x("month", "M"), K("M", Pc), K("MM", Pc, Lc), K("MMM", Xc), K("MMMM", Xc), N(["M", "MM"], function(a, b) {
            b[_c] = o(a) - 1
        }), N(["MMM", "MMMM"], function(a, b, c, d) {
            var e = c._locale.monthsParse(a, d, c._strict);
            null != e ? b[_c] = e : c._pf.invalidMonth = a
        });
        var fd = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            gd = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            hd = {};
        a.suppressDeprecationWarnings = !1;
        var id = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            jd = [
                ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
                ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
                ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
                ["GGGG-[W]WW", /\d{4}-W\d{2}/],
                ["YYYY-DDD", /\d{4}-\d{3}/]
            ],
            kd = [
                ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
                ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
                ["HH:mm", /(T| )\d\d:\d\d/],
                ["HH", /(T| )\d\d/]
            ],
            ld = /^\/?Date\((\-?\d+)/i;
        a.createFromInputFallback = Z("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(a) {
            a._d = new Date(a._i + (a._useUTC ? " UTC" : ""))
        }), F(0, ["YY", 2], 0, function() {
            return this.year() % 100
        }), F(0, ["YYYY", 4], 0, "year"), F(0, ["YYYYY", 5], 0, "year"), F(0, ["YYYYYY", 6, !0], 0, "year"), x("year", "y"), K("Y", Uc), K("YY", Pc, Lc), K("YYYY", Rc, Nc), K("YYYYY", Sc, Oc), K("YYYYYY", Sc, Oc), N(["YYYY", "YYYYY", "YYYYYY"], $c), N("YY", function(b, c) {
            c[$c] = a.parseTwoDigitYear(b)
        }), a.parseTwoDigitYear = function(a) {
            return o(a) + (o(a) > 68 ? 1900 : 2e3)
        };
        var md = A("FullYear", !1);
        F("w", ["ww", 2], "wo", "week"), F("W", ["WW", 2], "Wo", "isoWeek"), x("week", "w"), x("isoWeek", "W"), K("w", Pc), K("ww", Pc, Lc), K("W", Pc), K("WW", Pc, Lc), O(["w", "ww", "W", "WW"], function(a, b, c, d) {
            b[d.substr(0, 1)] = o(a)
        });
        var nd = {
            dow: 0,
            doy: 6
        };
        F("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), x("dayOfYear", "DDD"), K("DDD", Qc), K("DDDD", Mc), N(["DDD", "DDDD"], function(a, b, c) {
            c._dayOfYear = o(a)
        }), a.ISO_8601 = function() {};
        var od = Z("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function() {
                var a = za.apply(null, arguments);
                return this > a ? this : a
            }),
            pd = Z("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function() {
                var a = za.apply(null, arguments);
                return a > this ? this : a
            });
        Fa("Z", ":"), Fa("ZZ", ""), K("Z", Vc), K("ZZ", Vc), N(["Z", "ZZ"], function(a, b, c) {
            c._useUTC = !0, c._tzm = Ga(a)
        });
        var qd = /([\+\-]|\d\d)/gi;
        a.updateOffset = function() {};
        var rd = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
            sd = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
        Ua.fn = Da.prototype;
        var td = Ya(1, "add"),
            ud = Ya(-1, "subtract");
        a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
        var vd = Z("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(a) {
            return void 0 === a ? this.localeData() : this.locale(a)
        });
        F(0, ["gg", 2], 0, function() {
            return this.weekYear() % 100
        }), F(0, ["GG", 2], 0, function() {
            return this.isoWeekYear() % 100
        }), xb("gggg", "weekYear"), xb("ggggg", "weekYear"), xb("GGGG", "isoWeekYear"), xb("GGGGG", "isoWeekYear"), x("weekYear", "gg"), x("isoWeekYear", "GG"), K("G", Uc), K("g", Uc), K("GG", Pc, Lc), K("gg", Pc, Lc), K("GGGG", Rc, Nc), K("gggg", Rc, Nc), K("GGGGG", Sc, Oc), K("ggggg", Sc, Oc), O(["gggg", "ggggg", "GGGG", "GGGGG"], function(a, b, c, d) {
            b[d.substr(0, 2)] = o(a)
        }), O(["gg", "GG"], function(b, c, d, e) {
            c[e] = a.parseTwoDigitYear(b)
        }), F("Q", 0, 0, "quarter"), x("quarter", "Q"), K("Q", Kc), N("Q", function(a, b) {
            b[_c] = 3 * (o(a) - 1)
        }), F("D", ["DD", 2], "Do", "date"), x("date", "D"), K("D", Pc), K("DD", Pc, Lc), K("Do", function(a, b) {
            return a ? b._ordinalParse : b._ordinalParseLenient
        }), N(["D", "DD"], ad), N("Do", function(a, b) {
            b[ad] = o(a.match(Pc)[0], 10)
        });
        var wd = A("Date", !0);
        F("d", 0, "do", "day"), F("dd", 0, 0, function(a) {
            return this.localeData().weekdaysMin(this, a)
        }), F("ddd", 0, 0, function(a) {
            return this.localeData().weekdaysShort(this, a)
        }), F("dddd", 0, 0, function(a) {
            return this.localeData().weekdays(this, a)
        }), F("e", 0, 0, "weekday"), F("E", 0, 0, "isoWeekday"), x("day", "d"), x("weekday", "e"), x("isoWeekday", "E"), K("d", Pc), K("e", Pc), K("E", Pc), K("dd", Xc), K("ddd", Xc), K("dddd", Xc), O(["dd", "ddd", "dddd"], function(a, b, c) {
            var d = c._locale.weekdaysParse(a);
            null != d ? b.d = d : c._pf.invalidWeekday = a
        }), O(["d", "e", "E"], function(a, b, c, d) {
            b[d] = o(a)
        });
        var xd = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            yd = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            zd = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
        F("H", ["HH", 2], 0, "hour"), F("h", ["hh", 2], 0, function() {
            return this.hours() % 12 || 12
        }), Mb("a", !0), Mb("A", !1), x("hour", "h"), K("a", Nb), K("A", Nb), K("H", Pc), K("h", Pc), K("HH", Pc, Lc), K("hh", Pc, Lc), N(["H", "HH"], bd), N(["a", "A"], function(a, b, c) {
            c._isPm = c._locale.isPM(a), c._meridiem = a
        }), N(["h", "hh"], function(a, b, c) {
            b[bd] = o(a), c._pf.bigHour = !0
        });
        var Ad = /[ap]\.?m?\.?/i,
            Bd = A("Hours", !0);
        F("m", ["mm", 2], 0, "minute"), x("minute", "m"), K("m", Pc), K("mm", Pc, Lc), N(["m", "mm"], cd);
        var Cd = A("Minutes", !1);
        F("s", ["ss", 2], 0, "second"), x("second", "s"), K("s", Pc), K("ss", Pc, Lc), N(["s", "ss"], dd);
        var Dd = A("Seconds", !1);
        F("S", 0, 0, function() {
            return ~~(this.millisecond() / 100)
        }), F(0, ["SS", 2], 0, function() {
            return ~~(this.millisecond() / 10)
        }), Qb("SSS"), Qb("SSSS"), x("millisecond", "ms"), K("S", Qc, Kc), K("SS", Qc, Lc), K("SSS", Qc, Mc), K("SSSS", Tc), N(["S", "SS", "SSS", "SSSS"], function(a, b) {
            b[ed] = o(1e3 * ("0." + a))
        });
        var Ed = A("Milliseconds", !1);
        F("z", 0, 0, "zoneAbbr"), F("zz", 0, 0, "zoneName");
        var Fd = m.prototype;
        Fd.add = td, Fd.calendar = $a, Fd.clone = _a, Fd.diff = fb, Fd.endOf = pb, Fd.format = jb, Fd.from = kb, Fd.fromNow = lb, Fd.get = D, Fd.invalidAt = wb, Fd.isAfter = ab, Fd.isBefore = bb, Fd.isBetween = cb, Fd.isSame = db, Fd.isValid = ub, Fd.lang = vd, Fd.locale = mb, Fd.localeData = nb, Fd.max = pd, Fd.min = od, Fd.parsingFlags = vb, Fd.set = D, Fd.startOf = ob, Fd.subtract = ud, Fd.toArray = tb, Fd.toDate = sb, Fd.toISOString = ib, Fd.toJSON = ib, Fd.toString = hb, Fd.unix = rb, Fd.valueOf = qb, Fd.year = md, Fd.isLeapYear = fa, Fd.weekYear = zb, Fd.isoWeekYear = Ab, Fd.quarter = Fd.quarters = Db, Fd.month = V, Fd.daysInMonth = W, Fd.week = Fd.weeks = ka, Fd.isoWeek = Fd.isoWeeks = la, Fd.weeksInYear = Cb, Fd.isoWeeksInYear = Bb, Fd.date = wd, Fd.day = Fd.days = Jb, Fd.weekday = Kb, Fd.isoWeekday = Lb, Fd.dayOfYear = na, Fd.hour = Fd.hours = Bd, Fd.minute = Fd.minutes = Cd, Fd.second = Fd.seconds = Dd, Fd.millisecond = Fd.milliseconds = Ed, Fd.utcOffset = Ja, Fd.utc = La, Fd.local = Ma, Fd.parseZone = Na, Fd.hasAlignedHourOffset = Oa, Fd.isDST = Pa, Fd.isDSTShifted = Qa, Fd.isLocal = Ra, Fd.isUtcOffset = Sa, Fd.isUtc = Ta, Fd.isUTC = Ta, Fd.zoneAbbr = Rb, Fd.zoneName = Sb, Fd.dates = Z("dates accessor is deprecated. Use date instead.", wd), Fd.months = Z("months accessor is deprecated. Use month instead", V), Fd.years = Z("years accessor is deprecated. Use year instead", md), Fd.zone = Z("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", Ka);
        var Gd = Fd,
            Hd = {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            Id = {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY LT",
                LLLL: "dddd, MMMM D, YYYY LT"
            },
            Jd = "Invalid date",
            Kd = "%d",
            Ld = /\d{1,2}/,
            Md = {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            Nd = q.prototype;
        Nd._calendar = Hd, Nd.calendar = Vb, Nd._longDateFormat = Id, Nd.longDateFormat = Wb, Nd._invalidDate = Jd, Nd.invalidDate = Xb, Nd._ordinal = Kd, Nd.ordinal = Yb, Nd._ordinalParse = Ld, Nd.preparse = Zb, Nd.postformat = Zb, Nd._relativeTime = Md, Nd.relativeTime = $b, Nd.pastFuture = _b, Nd.set = ac, Nd.months = R, Nd._months = fd, Nd.monthsShort = S, Nd._monthsShort = gd, Nd.monthsParse = T, Nd.week = ha, Nd._week = nd, Nd.firstDayOfYear = ja, Nd.firstDayOfWeek = ia, Nd.weekdays = Fb, Nd._weekdays = xd, Nd.weekdaysMin = Hb, Nd._weekdaysMin = zd, Nd.weekdaysShort = Gb, Nd._weekdaysShort = yd, Nd.weekdaysParse = Ib, Nd.isPM = Ob, Nd._meridiemParse = Ad, Nd.meridiem = Pb, u("en", {
            ordinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(a) {
                var b = a % 10,
                    c = 1 === o(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
                return a + c
            }
        }), a.lang = Z("moment.lang is deprecated. Use moment.locale instead.", u), a.langData = Z("moment.langData is deprecated. Use moment.localeData instead.", w);
        var Od = Math.abs,
            Pd = rc("ms"),
            Qd = rc("s"),
            Rd = rc("m"),
            Sd = rc("h"),
            Td = rc("d"),
            Ud = rc("w"),
            Vd = rc("M"),
            Wd = rc("y"),
            Xd = tc("milliseconds"),
            Yd = tc("seconds"),
            Zd = tc("minutes"),
            $d = tc("hours"),
            _d = tc("days"),
            ae = tc("months"),
            be = tc("years"),
            ce = Math.round,
            de = {
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                M: 11
            },
            ee = Math.abs,
            fe = Da.prototype;
        fe.abs = ic, fe.add = kc, fe.subtract = lc, fe.as = pc, fe.asMilliseconds = Pd, fe.asSeconds = Qd, fe.asMinutes = Rd, fe.asHours = Sd, fe.asDays = Td, fe.asWeeks = Ud, fe.asMonths = Vd, fe.asYears = Wd, fe.valueOf = qc, fe._bubble = mc, fe.get = sc, fe.milliseconds = Xd, fe.seconds = Yd, fe.minutes = Zd, fe.hours = $d, fe.days = _d, fe.weeks = uc, fe.months = ae, fe.years = be, fe.humanize = yc, fe.toISOString = zc, fe.toString = zc, fe.toJSON = zc, fe.locale = mb, fe.localeData = nb, fe.toIsoString = Z("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", zc), fe.lang = vd, F("X", 0, 0, "unix"), F("x", 0, 0, "valueOf"), K("x", Uc), K("X", Wc), N("X", function(a, b, c) {
            c._d = new Date(1e3 * parseFloat(a, 10))
        }), N("x", function(a, b, c) {
            c._d = new Date(o(a))
        }), a.version = "2.10.2", b(za), a.fn = Gd, a.min = Ba, a.max = Ca, a.utc = i, a.unix = Tb, a.months = dc, a.isDate = e, a.locale = u, a.invalid = k, a.duration = Ua, a.isMoment = n, a.weekdays = fc, a.parseZone = Ub, a.localeData = w, a.isDuration = Ea, a.monthsShort = ec, a.weekdaysMin = hc, a.defineLocale = v, a.weekdaysShort = gc, a.normalizeUnits = y, a.relativeTimeThreshold = xc;
        var ge = a;
        return ge
    }),
    function(a) {
        "function" == typeof define && define.amd ? define(["jquery", "moment"], a) : "object" == typeof exports && "undefined" != typeof module ? module.exports = a(require("jquery"), require("moment")) : a(jQuery, moment)
    }(function(a, b) {
        a.dateRangePickerLanguages = {
            "default": {
                selected: "Selected:",
                day: "Day",
                days: "Days",
                apply: "Close",
                "week-1": "mo",
                "week-2": "tu",
                "week-3": "we",
                "week-4": "th",
                "week-5": "fr",
                "week-6": "sa",
                "week-7": "su",
                "week-number": "W",
                "month-name": ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"],
                shortcuts: "Shortcuts",
                "custom-values": "Custom Values",
                past: "Past",
                following: "Following",
                previous: "Previous",
                "prev-week": "Week",
                "prev-month": "Month",
                "prev-year": "Year",
                next: "Next",
                "next-week": "Week",
                "next-month": "Month",
                "next-year": "Year",
                "less-than": "Date range should not be more than %d days",
                "more-than": "Date range should not be less than %d days",
                "default-more": "Please select a date range longer than %d days",
                "default-single": "Please select a date",
                "default-less": "Please select a date range less than %d days",
                "default-range": "Please select a date range between %d and %d days",
                "default-default": "Please select a date range",
                time: "Time",
                hour: "Hour",
                minute: "Minute"
            },
            az: {
                selected: "Seçildi:",
                day: " gün",
                days: " gün",
                apply: "tətbiq",
                "week-1": "1",
                "week-2": "2",
                "week-3": "3",
                "week-4": "4",
                "week-5": "5",
                "week-6": "6",
                "week-7": "7",
                "month-name": ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avqust", "sentyabr", "oktyabr", "noyabr", "dekabr"],
                shortcuts: "Qısayollar",
                past: "Keçmiş",
                following: "Növbəti",
                previous: "&nbsp;&nbsp;&nbsp;",
                "prev-week": "Öncəki həftə",
                "prev-month": "Öncəki ay",
                "prev-year": "Öncəki il",
                next: "&nbsp;&nbsp;&nbsp;",
                "next-week": "Növbəti həftə",
                "next-month": "Növbəti ay",
                "next-year": "Növbəti il",
                "less-than": "Tarix aralığı %d gündən çox olmamalıdır",
                "more-than": "Tarix aralığı %d gündən az olmamalıdır",
                "default-more": "%d gündən çox bir tarix seçin",
                "default-single": "Tarix seçin",
                "default-less": "%d gündən az bir tarix seçin",
                "default-range": "%d və %d gün aralığında tarixlər seçin",
                "default-default": "Tarix aralığı seçin"
            },
            cn: {
                selected: "已选择:",
                day: "天",
                days: "天",
                apply: "确定",
                "week-1": "一",
                "week-2": "二",
                "week-3": "三",
                "week-4": "四",
                "week-5": "五",
                "week-6": "六",
                "week-7": "日",
                "week-number": "周",
                "month-name": ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                shortcuts: "快捷选择",
                past: "过去",
                following: "将来",
                previous: "&nbsp;&nbsp;&nbsp;",
                "prev-week": "上周",
                "prev-month": "上个月",
                "prev-year": "去年",
                next: "&nbsp;&nbsp;&nbsp;",
                "next-week": "下周",
                "next-month": "下个月",
                "next-year": "明年",
                "less-than": "所选日期范围不能大于%d天",
                "more-than": "所选日期范围不能小于%d天",
                "default-more": "请选择大于%d天的日期范围",
                "default-less": "请选择小于%d天的日期范围",
                "default-range": "请选择%d天到%d天的日期范围",
                "default-single": "请选择一个日期",
                "default-default": "请选择一个日期范围",
                time: "时间",
                hour: "小时",
                minute: "分钟"
            },
            cz: {
                selected: "Vybráno:",
                day: "Den",
                days: "Dny",
                apply: "Zavřít",
                "week-1": "po",
                "week-2": "út",
                "week-3": "st",
                "week-4": "čt",
                "week-5": "pá",
                "week-6": "so",
                "week-7": "ne",
                "month-name": ["leden", "únor", "březen", "duben", "květen", "červen", "červenec", "srpen", "září", "říjen", "listopad", "prosinec"],
                shortcuts: "Zkratky",
                past: "po",
                following: "následující",
                previous: "předchozí",
                "prev-week": "týden",
                "prev-month": "měsíc",
                "prev-year": "rok",
                next: "další",
                "next-week": "týden",
                "next-month": "měsíc",
                "next-year": "rok",
                "less-than": "Rozsah data by neměl být větší než %d dnů",
                "more-than": "Rozsah data by neměl být menší než %d dnů",
                "default-more": "Prosím zvolte rozsah data větší než %d dnů",
                "default-single": "Prosím zvolte datum",
                "default-less": "Prosím zvolte rozsah data menší než %d dnů",
                "default-range": "Prosím zvolte rozsah data mezi %d a %d dny",
                "default-default": "Prosím zvolte rozsah data"
            },
            de: {
                selected: "Auswahl:",
                day: "Tag",
                days: "Tage",
                apply: "Schließen",
                "week-1": "mo",
                "week-2": "di",
                "week-3": "mi",
                "week-4": "do",
                "week-5": "fr",
                "week-6": "sa",
                "week-7": "so",
                "month-name": ["januar", "februar", "märz", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "dezember"],
                shortcuts: "Schnellwahl",
                past: "Vorherige",
                following: "Folgende",
                previous: "Vorherige",
                "prev-week": "Woche",
                "prev-month": "Monat",
                "prev-year": "Jahr",
                next: "Nächste",
                "next-week": "Woche",
                "next-month": "Monat",
                "next-year": "Jahr",
                "less-than": "Datumsbereich darf nicht größer sein als %d Tage",
                "more-than": "Datumsbereich darf nicht kleiner sein als %d Tage",
                "default-more": "Bitte mindestens %d Tage auswählen",
                "default-single": "Bitte ein Datum auswählen",
                "default-less": "Bitte weniger als %d Tage auswählen",
                "default-range": "Bitte einen Datumsbereich zwischen %d und %d Tagen auswählen",
                "default-default": "Bitte ein Start- und Enddatum auswählen",
                Time: "Zeit",
                hour: "Stunde",
                minute: "Minute"
            },
            es: {
                selected: "Seleccionado:",
                day: "Dia",
                days: "Dias",
                apply: "Cerrar",
                "week-1": "lu",
                "week-2": "ma",
                "week-3": "mi",
                "week-4": "ju",
                "week-5": "vi",
                "week-6": "sa",
                "week-7": "do",
                "month-name": ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
                shortcuts: "Accesos directos",
                past: "Pasado",
                following: "Siguiente",
                previous: "Anterior",
                "prev-week": "Semana",
                "prev-month": "Mes",
                "prev-year": "Año",
                next: "Siguiente",
                "next-week": "Semana",
                "next-month": "Mes",
                "next-year": "Año",
                "less-than": "El rango no deberia ser mayor de %d dias",
                "more-than": "El rango no deberia ser menor de %d dias",
                "default-more": "Por favor selecciona un rango mayor a %d dias",
                "default-single": "Por favor selecciona un dia",
                "default-less": "Por favor selecciona un rango menor a %d dias",
                "default-range": "Por favor selecciona un rango entre %d y %d dias",
                "default-default": "Por favor selecciona un rango de fechas."
            },
            fr: {
                selected: "Sélection:",
                day: "Jour",
                days: "Jours",
                apply: "Fermer",
                "week-1": "lu",
                "week-2": "ma",
                "week-3": "me",
                "week-4": "je",
                "week-5": "ve",
                "week-6": "sa",
                "week-7": "di",
                "month-name": ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
                shortcuts: "Raccourcis",
                past: "Passé",
                following: "Suivant",
                previous: "Précédent",
                "prev-week": "Semaine",
                "prev-month": "Mois",
                "prev-year": "Année",
                next: "Suivant",
                "next-week": "Semaine",
                "next-month": "Mois",
                "next-year": "Année",
                "less-than": "L'intervalle ne doit pas être supérieure à %d jours",
                "more-than": "L'intervalle ne doit pas être inférieure à %d jours",
                "default-more": "Merci de choisir une intervalle supérieure à %d jours",
                "default-single": "Merci de choisir une date",
                "default-less": "Merci de choisir une intervalle inférieure %d jours",
                "default-range": "Merci de choisir une intervalle comprise entre %d et %d jours",
                "default-default": "Merci de choisir une date"
            },
            hu: {
                selected: "Kiválasztva:",
                day: "Nap",
                days: "Nap",
                apply: "Ok",
                "week-1": "h",
                "week-2": "k",
                "week-3": "sz",
                "week-4": "cs",
                "week-5": "p",
                "week-6": "sz",
                "week-7": "v",
                "month-name": ["január", "február", "március", "április", "május", "június", "július", "augusztus", "szeptember", "október", "november", "december"],
                shortcuts: "Gyorsválasztó",
                past: "Múlt",
                following: "Következő",
                previous: "Előző",
                "prev-week": "Hét",
                "prev-month": "Hónap",
                "prev-year": "Év",
                next: "Következő",
                "next-week": "Hét",
                "next-month": "Hónap",
                "next-year": "Év",
                "less-than": "A kiválasztás nem lehet több %d napnál",
                "more-than": "A kiválasztás nem lehet több %d napnál",
                "default-more": "Válassz ki egy időszakot ami hosszabb mint %d nap",
                "default-single": "Válassz egy napot",
                "default-less": "Válassz ki egy időszakot ami rövidebb mint %d nap",
                "default-range": "Válassz ki egy %d - %d nap hosszú időszakot",
                "default-default": "Válassz ki egy időszakot"
            },
            it: {
                selected: "Selezionati:",
                day: "Giorno",
                days: "Giorni",
                apply: "Chiudi",
                "week-1": "lu",
                "week-2": "ma",
                "week-3": "me",
                "week-4": "gi",
                "week-5": "ve",
                "week-6": "sa",
                "week-7": "do",
                "month-name": ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"],
                shortcuts: "Scorciatoie",
                past: "Scorso",
                following: "Successivo",
                previous: "Precedente",
                "prev-week": "Settimana",
                "prev-month": "Mese",
                "prev-year": "Anno",
                next: "Prossimo",
                "next-week": "Settimana",
                "next-month": "Mese",
                "next-year": "Anno",
                "less-than": "L'intervallo non dev'essere maggiore di %d giorni",
                "more-than": "L'intervallo non dev'essere minore di %d giorni",
                "default-more": "Seleziona un intervallo maggiore di %d giorni",
                "default-single": "Seleziona una data",
                "default-less": "Seleziona un intervallo minore di %d giorni",
                "default-range": "Seleziona un intervallo compreso tra i %d e i %d giorni",
                "default-default": "Seleziona un intervallo di date"
            },
            no: {
                selected: "Valgt:",
                day: "Dag",
                days: "Dager",
                apply: "Lukk",
                "week-1": "ma",
                "week-2": "ti",
                "week-3": "on",
                "week-4": "to",
                "week-5": "fr",
                "week-6": "lø",
                "week-7": "sø",
                "month-name": ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"],
                shortcuts: "Snarveier",
                "custom-values": "Egendefinerte Verdier",
                past: "Over",
                following: "Følger",
                previous: "Forrige",
                "prev-week": "Uke",
                "prev-month": "Måned",
                "prev-year": "År",
                next: "Neste",
                "next-week": "Uke",
                "next-month": "Måned",
                "next-year": "År",
                "less-than": "Datoperioden skal ikkje være lengre enn %d dager",
                "more-than": "Datoperioden skal ikkje være kortere enn %d dager",
                "default-more": "Vennligst velg ein datoperiode lengre enn %d dager",
                "default-single": "Vennligst velg ein dato",
                "default-less": "Vennligst velg ein datoperiode mindre enn %d dager",
                "default-range": "Vennligst velg ein datoperiode mellom %d og %d dager",
                "default-default": "Vennligst velg ein datoperiode",
                time: "Tid",
                hour: "Time",
                minute: "Minutter"
            },
            nl: {
                selected: "Geselecteerd:",
                day: "Dag",
                days: "Dagen",
                apply: "Ok",
                "week-1": "ma",
                "week-2": "di",
                "week-3": "wo",
                "week-4": "do",
                "week-5": "vr",
                "week-6": "za",
                "week-7": "zo",
                "month-name": ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "october", "november", "december"],
                shortcuts: "Snelkoppelingen",
                "custom-values": "Aangepaste waarden",
                past: "Verleden",
                following: "Komend",
                previous: "Vorige",
                "prev-week": "Week",
                "prev-month": "Maand",
                "prev-year": "Jaar",
                next: "Volgende",
                "next-week": "Week",
                "next-month": "Maand",
                "next-year": "Jaar",
                "less-than": "Interval moet langer dan %d dagen zijn",
                "more-than": "Interval mag niet minder dan %d dagen zijn",
                "default-more": "Selecteer een interval langer dan %dagen",
                "default-single": "Selecteer een datum",
                "default-less": "Selecteer een interval minder dan %d dagen",
                "default-range": "Selecteer een interval tussen %d en %d dagen",
                "default-default": "Selecteer een interval",
                time: "Tijd",
                hour: "Uur",
                minute: "Minuut"
            },
            ru: {
                selected: "Выбрано:",
                day: "День",
                days: "Дней",
                apply: "Закрыть",
                "week-1": "пн",
                "week-2": "вт",
                "week-3": "ср",
                "week-4": "чт",
                "week-5": "пт",
                "week-6": "сб",
                "week-7": "вс",
                "month-name": ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"],
                shortcuts: "Быстрый выбор",
                past: "Прошедшие",
                following: "Следующие",
                previous: "&nbsp;&nbsp;&nbsp;",
                "prev-week": "Неделя",
                "prev-month": "Месяц",
                "prev-year": "Год",
                next: "&nbsp;&nbsp;&nbsp;",
                "next-week": "Неделя",
                "next-month": "Месяц",
                "next-year": "Год",
                "less-than": "Диапазон не может быть больше %d дней",
                "more-than": "Диапазон не может быть меньше %d дней",
                "default-more": "Пожалуйста выберите диапазон больше %d дней",
                "default-single": "Пожалуйста выберите дату",
                "default-less": "Пожалуйста выберите диапазон меньше %d дней",
                "default-range": "Пожалуйста выберите диапазон между %d и %d днями",
                "default-default": "Пожалуйста выберите диапазон"
            },
            pl: {
                selected: "Wybrany:",
                day: "Dzień",
                days: "Dni",
                apply: "Zamknij",
                "week-1": "pon",
                "week-2": "wt",
                "week-3": "śr",
                "week-4": "czw",
                "week-5": "pt",
                "week-6": "so",
                "week-7": "nd",
                "month-name": ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"],
                shortcuts: "Skróty",
                "custom-values": "Niestandardowe wartości",
                past: "Przeszłe",
                following: "Następne",
                previous: "Poprzednie",
                "prev-week": "tydzień",
                "prev-month": "miesiąc",
                "prev-year": "rok",
                next: "Następny",
                "next-week": "tydzień",
                "next-month": "miesiąc",
                "next-year": "rok",
                "less-than": "Okres nie powinien być dłuższy niż %d dni",
                "more-than": "Okres nie powinien być krótszy niż  %d ni",
                "default-more": "Wybierz okres dłuższy niż %d dni",
                "default-single": "Wybierz datę",
                "default-less": "Wybierz okres krótszy niż %d dni",
                "default-range": "Wybierz okres trwający od %d do %d dni",
                "default-default": "Wybierz okres",
                time: "Czas",
                hour: "Godzina",
                minute: "Minuta"
            }
        }, a.fn.dateRangePicker = function(c) {
            function d(b, c) {
                return c.contains(b.target) || b.target == c || void 0 != c.childNodes && a.inArray(b.target, c.childNodes) >= 0
            }

            function e() {
                function e(b) {
                    var d = a(b).parents("table").hasClass("month2"),
                        e = d ? c.month2 : c.month1;
                    e = M(e), !c.singleMonth && !c.singleDate && !d && K(e, c.month2) >= 0 || S(e) || (E(e, d ? "month2" : "month1"), I())
                }

                function g(a) {
                    var b = M(c.month1),
                        d = M(c.month2);
                    S(d) || !c.singleDate && K(b, d) >= 0 || (E(b, "month1"), E(d, "month2"), D())
                }

                function h(b) {
                    var d = a(b).parents("table").hasClass("month2"),
                        e = d ? c.month2 : c.month1;
                    e = N(e), d && K(e, c.month1) <= 0 || S(e) || (E(e, d ? "month2" : "month1"), I())
                }

                function i(a) {
                    var b = N(c.month1),
                        d = N(c.month2);
                    S(b) || !c.singleDate && K(d, b) <= 0 || (E(d, "month2"), E(b, "month1"), D())
                }
                var k = this;
                if (a(this).data("date-picker-opened")) return void J();
                a(this).data("date-picker-opened", !0), aa = P().hide(), aa.append('<div class="date-range-length-tip"></div>'), aa.delegate(".day", "mouseleave", function() {
                    aa.find(".date-range-length-tip").hide()
                }), a(c.container).append(aa), c.inline ? aa.addClass("inline-wrapper") : f(), c.alwaysOpen && aa.find(".apply-btn").hide();
                var l = c.defaultTime ? c.defaultTime : new Date;
                if (c.lookBehind ? (c.startDate && K(l, c.startDate) < 0 && (l = M(b(c.startDate).toDate())), c.endDate && K(l, c.endDate) > 0 && (l = b(c.endDate).toDate()), E(N(l), "month1"), E(l, "month2")) : (c.startDate && K(l, c.startDate) < 0 && (l = b(c.startDate).toDate()), c.endDate && K(M(l), c.endDate) > 0 && (l = N(b(c.endDate).toDate())), E(l, "month1"), E(M(l), "month2")), c.singleDate && (c.startDate && K(l, c.startDate) < 0 && (l = b(c.startDate).toDate()), c.endDate && K(l, c.endDate) > 0 && (l = b(c.endDate).toDate()), E(l, "month1")), c.time.enabled)
                    if (c.startDate && c.endDate || c.start && c.end) F(b(c.start || c.startDate).toDate(), "time1"), F(b(c.end || c.endDate).toDate(), "time2");
                    else {
                        var m = c.defaultEndTime ? c.defaultEndTime : l;
                        F(l, "time1"), F(m, "time2")
                    } var o = "";
                o = _(c.singleDate ? "default-single" : c.minDays && c.maxDays ? "default-range" : c.minDays ? "default-more" : c.maxDays ? "default-less" : "default-default"), aa.find(".default-top").html(o.replace(/\%d/, c.minDays).replace(/\%d/, c.maxDays)), c.singleMonth ? aa.addClass("single-month") : aa.addClass("two-months"), setTimeout(function() {
                    j(), da = !0
                }, 0), aa.click(function(a) {
                    a.stopPropagation()
                }), a(document).bind("click.datepicker", function(a) {
                    d(a, k[0]) || aa.is(":visible") && J()
                }), aa.find(".next").click(function() {
                    c.stickyMonths ? g(this) : e(this)
                }), aa.find(".prev").click(function() {
                    c.stickyMonths ? i(this) : h(this)
                }), aa.delegate(".day", "click", function(b) {
                    r(a(this))
                }), aa.delegate(".day", "mouseenter", function(b) {
                    v(a(this))
                }), aa.delegate(".week-number", "click", function(b) {
                    s(a(this))
                }), aa.attr("unselectable", "on").css("user-select", "none").bind("selectstart", function(a) {
                    return a.preventDefault(), !1
                }), aa.find(".apply-btn").click(function() {
                    J();
                    var b = H(new Date(c.start)) + c.separator + H(new Date(c.end));
                    a(k).trigger("datepicker-apply", {
                        value: b,
                        date1: new Date(c.start),
                        date2: new Date(c.end)
                    })
                }), aa.find("[custom]").click(function() {
                    var b = a(this).attr("custom");
                    c.start = !1, c.end = !1, aa.find(".day.checked").removeClass("checked"), c.setValue.call(fa, b), y(), z(!0), D(), c.autoClose && J()
                }), aa.find("[shortcut]").click(function() {
                    var b = a(this).attr("shortcut"),
                        d = new Date,
                        e = !1;
                    if (-1 != b.indexOf("day")) {
                        var f = parseInt(b.split(",", 2)[1], 10);
                        e = new Date((new Date).getTime() + 864e5 * f), d = new Date(d.getTime() + 864e5 * (f > 0 ? 1 : -1))
                    } else if (-1 != b.indexOf("week")) {
                        var g = -1 != b.indexOf("prev,") ? -1 : 1;
                        if (1 == g) var h = "monday" == c.startOfWeek ? 1 : 0;
                        else var h = "monday" == c.startOfWeek ? 0 : 6;
                        for (d = new Date(d.getTime() - 864e5); d.getDay() != h;) d = new Date(d.getTime() + 864e5 * g);
                        e = new Date(d.getTime() + 864e5 * g * 6)
                    } else if (-1 != b.indexOf("month")) {
                        var g = -1 != b.indexOf("prev,") ? -1 : 1;
                        e = 1 == g ? M(d) : N(d), e.setDate(1), d = M(e), d.setDate(1), d = new Date(d.getTime() - 864e5)
                    } else if (-1 != b.indexOf("year")) {
                        var g = -1 != b.indexOf("prev,") ? -1 : 1;
                        e = new Date, e.setFullYear(d.getFullYear() + g), e.setMonth(0), e.setDate(1), d.setFullYear(d.getFullYear() + g), d.setMonth(11), d.setDate(31)
                    } else if ("custom" == b) {
                        var i = a(this).html();
                        if (c.customShortcuts && c.customShortcuts.length > 0)
                            for (var j = 0; j < c.customShortcuts.length; j++) {
                                var k = c.customShortcuts[j];
                                if (k.name == i) {
                                    var l = [];
                                    l = k.dates.call(), l && 2 == l.length && (e = l[0], d = l[1]), l && 1 == l.length && (movetodate = l[0], E(movetodate, "month1"), E(M(movetodate), "month2"), I());
                                    break
                                }
                            }
                    }
                    e && d && (B(e, d), y())
                }), aa.find(".time1 input[type=range]").bind("change mousemove", function(b) {
                    var c = b.target,
                        d = "hour" == c.name ? a(c).val().replace(/^(\d{1})$/, "0$1") : void 0,
                        e = "minute" == c.name ? a(c).val().replace(/^(\d{1})$/, "0$1") : void 0;
                    n("time1", d, e)
                }), aa.find(".time2 input[type=range]").bind("change mousemove", function(b) {
                    var c = b.target,
                        d = "hour" == c.name ? a(c).val().replace(/^(\d{1})$/, "0$1") : void 0,
                        e = "minute" == c.name ? a(c).val().replace(/^(\d{1})$/, "0$1") : void 0;
                    n("time2", d, e)
                })
            }

            function f() {
                if (!c.inline) {
                    var b = a(ea).offset();
                    if ("relative" == a(c.container).css("position")) {
                        var d = a(c.container).offset();
                        aa.css({
                            top: b.top - d.top + a(ea).outerHeight() + 4,
                            left: b.left - d.left
                        })
                    } else b.left < 460 ? aa.css({
                        top: b.top + a(ea).outerHeight() + parseInt(a("body").css("border-top") || 0, 10),
                        left: b.left
                    }) : aa.css({
                        top: b.top + a(ea).outerHeight() + parseInt(a("body").css("border-top") || 0, 10),
                        left: b.left + a(ea).width() - aa.width() - 16
                    })
                }
            }

            function g() {
                return aa
            }

            function h(b) {
                f(), i(), aa.slideDown(b, function() {
                    a(ea).trigger("datepicker-opened", {
                        relatedTarget: aa
                    })
                }), a(ea).trigger("datepicker-open", {
                    relatedTarget: aa
                }), I(), j()
            }

            function i() {
                var a = c.getValue.call(fa),
                    d = a ? a.split(c.separator) : "";
                if (d && (1 == d.length && c.singleDate || d.length >= 2)) {
                    var e = c.format;
                    e.match(/Do/) && (e = e.replace(/Do/, "D"), d[0] = d[0].replace(/(\d+)(th|nd|st)/, "$1"), d.length >= 2 && (d[1] = d[1].replace(/(\d+)(th|nd|st)/, "$1"))), da = !1, d.length >= 2 ? B(b(d[0], e, b.locale(c.language)).toDate(), b(d[1], e, b.locale(c.language)).toDate()) : 1 == d.length && c.singleDate && C(b(d[0], e, b.locale(c.language)).toDate()), da = !0
                }
            }

            function j() {
                var a = aa.find(".gap").css("margin-left");
                a && (a = parseInt(a));
                var b = aa.find(".month1").width(),
                    c = aa.find(".gap").width() + (a ? 2 * a : 0),
                    d = aa.find(".month2").width();
                aa.find(".month-wrapper").width(b + c + d + 10)
            }

            function k(a, c) {
                aa.find("." + a + " input[type=range].hour-range").val(b(c).hours()), aa.find("." + a + " input[type=range].minute-range").val(b(c).minutes()), n(a, b(c).format("HH"), b(c).format("mm"))
            }

            function l(a, d) {
                c[a] = parseInt(b(parseInt(d)).startOf("day").add(b(c[a + "Time"]).format("HH"), "h").add(b(c[a + "Time"]).format("mm"), "m").valueOf())
            }

            function m() {
                k("time1", c.start), k("time2", c.end)
            }

            function n(a, d, e) {
                function f(a, b) {
                    var f = b.format("HH"),
                        g = b.format("mm");
                    c[a] = b.startOf("day").add(d || f, "h").add(e || g, "m").valueOf()
                }
                switch (d && aa.find("." + a + " .hour-val").text(d), e && aa.find("." + a + " .minute-val").text(e), a) {
                    case "time1":
                        c.start && f("start", b(c.start)), f("startTime", b(c.startTime || b().valueOf()));
                        break;
                    case "time2":
                        c.end && f("end", b(c.end)), f("endTime", b(c.endTime || b().valueOf()))
                }
                y(), z(), D()
            }

            function o() {
                c.start = !1, c.end = !1, aa.find(".day.checked").removeClass("checked"), aa.find(".day.last-date-selected").removeClass("last-date-selected"), aa.find(".day.first-date-selected").removeClass("first-date-selected"), c.setValue.call(fa, ""), y(), z(), D()
            }

            function p(a) {
                var d = a;
                return "week-range" === c.batchMode ? d = "monday" === c.startOfWeek ? b(parseInt(a)).startOf("isoweek").valueOf() : b(parseInt(a)).startOf("week").valueOf() : "month-range" === c.batchMode && (d = b(parseInt(a)).startOf("month").valueOf()), d
            }

            function q(a) {
                var d = a;
                return "week-range" === c.batchMode ? d = "monday" === c.startOfWeek ? b(parseInt(a)).endOf("isoweek").valueOf() : b(parseInt(a)).endOf("week").valueOf() : "month" === c.batchMode && (d = b(parseInt(a)).endOf("month").valueOf()), d
            }

            function r(d) {
                if (!d.hasClass("invalid")) {
                    var e = d.attr("time");
                    if (d.addClass("checked"), c.singleDate ? (c.start = e, c.end = !1) : "week" === c.batchMode ? "monday" === c.startOfWeek ? (c.start = b(parseInt(e)).startOf("isoweek").valueOf(), c.end = b(parseInt(e)).endOf("isoweek").valueOf()) : (c.end = b(parseInt(e)).endOf("week").valueOf(), c.start = b(parseInt(e)).startOf("week").valueOf()) : "workweek" === c.batchMode ? (c.start = b(parseInt(e)).day(1).valueOf(), c.end = b(parseInt(e)).day(5).valueOf()) : "weekend" === c.batchMode ? (c.start = b(parseInt(e)).day(6).valueOf(), c.end = b(parseInt(e)).day(7).valueOf()) : "month" === c.batchMode ? (c.start = b(parseInt(e)).startOf("month").valueOf(), c.end = b(parseInt(e)).endOf("month").valueOf()) : c.start && c.end || !c.start && !c.end ? (c.start = p(e), c.end = !1) : c.start && (c.end = q(e), c.time.enabled && l("end", c.end)), c.time.enabled && (c.start && l("start", c.start), c.end && l("end", c.end)), !c.singleDate && c.start && c.end && c.start > c.end) {
                        var f = c.end;
                        c.end = q(c.start), c.start = p(f), c.time.enabled && c.swapTime && m()
                    }
                    c.start = parseInt(c.start), c.end = parseInt(c.end), w(), c.start && !c.end && (a(ea).trigger("datepicker-first-date-selected", {
                        date1: new Date(c.start)
                    }), v(d)), u(e), y(), z(), D(), x()
                }
            }

            function s(a) {
                var d = parseInt(a.attr("data-start-time"), 10);
                if (c.startWeek) {
                    aa.find(".week-number-selected").removeClass("week-number-selected");
                    var e = new Date(d < c.startWeek ? d : c.startWeek),
                        f = new Date(d < c.startWeek ? c.startWeek : d);
                    c.startWeek = !1, c.start = b(e).day("monday" == c.startOfWeek ? 1 : 0).toDate(), c.end = b(f).day("monday" == c.startOfWeek ? 7 : 6).toDate()
                } else {
                    c.startWeek = d, a.addClass("week-number-selected");
                    var e = new Date(d);
                    c.start = b(e).day("monday" == c.startOfWeek ? 1 : 0).toDate(), c.end = b(e).day("monday" == c.startOfWeek ? 7 : 6).toDate()
                }
                u(), y(), z(), D(), x()
            }

            function t(a) {
                if (a = parseInt(a, 10), c.startDate && L(a, c.startDate) < 0) return !1;
                if (c.endDate && L(a, c.endDate) > 0) return !1;
                if (c.start && !c.end && !c.singleDate) {
                    if (c.maxDays > 0 && A(a, c.start) > c.maxDays) return !1;
                    if (c.minDays > 0 && A(a, c.start) < c.minDays) return !1;
                    if (c.selectForward && a < c.start) return !1;
                    if (c.selectBackward && a > c.start) return !1;
                    if (c.beforeShowDay && "function" == typeof c.beforeShowDay) {
                        for (var b = !0, d = a; A(d, c.start) > 1;) {
                            var e = c.beforeShowDay(new Date(d));
                            if (!e[0]) {
                                b = !1;
                                break
                            }
                            d > c.start && (d -= 864e5), d < c.start && (d += 864e5)
                        }
                        if (!b) return !1
                    }
                }
                return !0
            }

            function u() {
                return aa.find(".day.invalid.tmp").removeClass("tmp invalid").addClass("valid"), c.start && !c.end && aa.find(".day.toMonth.valid").each(function() {
                    var b = parseInt(a(this).attr("time"), 10);
                    t(b) ? a(this).addClass("valid tmp").removeClass("invalid") : a(this).addClass("invalid tmp").removeClass("valid")
                }), !0
            }

            function v(b) {
                var d = parseInt(b.attr("time")),
                    e = "";
                if (b.hasClass("has-tooltip") && b.attr("data-tooltip")) e = '<span style="white-space:nowrap">' + b.attr("data-tooltip") + "</span>";
                else if (!b.hasClass("invalid"))
                    if (c.singleDate) aa.find(".day.hovering").removeClass("hovering"), b.addClass("hovering");
                    else if (aa.find(".day").each(function() {
                        var b = parseInt(a(this).attr("time"));
                        c.start, c.end;
                        b == d ? a(this).addClass("hovering") : a(this).removeClass("hovering"), c.start && !c.end && (c.start < b && d >= b || c.start > b && b >= d) ? a(this).addClass("hovering") : a(this).removeClass("hovering")
                    }), c.start && !c.end) {
                    var f = A(d, c.start);
                    c.hoveringTooltip && ("function" == typeof c.hoveringTooltip ? e = c.hoveringTooltip(f, c.start, d) : c.hoveringTooltip === !0 && f > 1 && (e = f + " " + _("days")))
                }
                if (e) {
                    var g = b.offset(),
                        h = aa.offset(),
                        i = g.left - h.left,
                        j = g.top - h.top;
                    i += b.width() / 2;
                    var k = aa.find(".date-range-length-tip"),
                        l = k.css({
                            visibility: "hidden",
                            display: "none"
                        }).html(e).width(),
                        m = k.height();
                    i -= l / 2, j -= m, setTimeout(function() {
                        k.css({
                            left: i,
                            top: j,
                            display: "block",
                            visibility: "visible"
                        })
                    }, 10)
                } else aa.find(".date-range-length-tip").hide()
            }

            function w() {
                aa.find(".day.hovering").removeClass("hovering"), aa.find(".date-range-length-tip").hide()
            }

            function x() {
                c.singleDate === !0 ? da && c.start && c.autoClose && J() : da && c.start && c.end && c.autoClose && J()
            }

            function y() {
                var a = Math.ceil((c.end - c.start) / 864e5) + 1;
                c.singleDate ? c.start && !c.end ? aa.find(".drp_top-bar").removeClass("error").addClass("normal") : aa.find(".drp_top-bar").removeClass("error").removeClass("normal") : c.maxDays && a > c.maxDays ? (c.start = !1, c.end = !1, aa.find(".day").removeClass("checked"), aa.find(".drp_top-bar").removeClass("normal").addClass("error").find(".error-top").html(_("less-than").replace("%d", c.maxDays))) : c.minDays && a < c.minDays ? (c.start = !1, c.end = !1, aa.find(".day").removeClass("checked"), aa.find(".drp_top-bar").removeClass("normal").addClass("error").find(".error-top").html(_("more-than").replace("%d", c.minDays))) : c.start || c.end ? aa.find(".drp_top-bar").removeClass("error").addClass("normal") : aa.find(".drp_top-bar").removeClass("error").removeClass("normal"), c.singleDate && c.start && !c.end || !c.singleDate && c.start && c.end ? aa.find(".apply-btn").removeClass("disabled") : aa.find(".apply-btn").addClass("disabled"), c.batchMode && (c.start && c.startDate && L(c.start, c.startDate) < 0 || c.end && c.endDate && L(c.end, c.endDate) > 0) && (c.start = !1, c.end = !1, aa.find(".day").removeClass("checked"))
            }

            function z(b, d) {
                if (aa.find(".start-day").html("..."), aa.find(".end-day").html("..."), aa.find(".selected-days").hide(), c.start && aa.find(".start-day").html(H(new Date(parseInt(c.start)))), c.end && aa.find(".end-day").html(H(new Date(parseInt(c.end)))), c.start && c.singleDate) {
                    aa.find(".apply-btn").removeClass("disabled");
                    var e = H(new Date(c.start));
                    c.setValue.call(fa, e, H(new Date(c.start)), H(new Date(c.end))), da && !d && a(ea).trigger("datepicker-change", {
                        value: e,
                        date1: new Date(c.start)
                    })
                } else if (c.start && c.end) {
                    aa.find(".selected-days").show().find(".selected-days-num").html(A(c.end, c.start)), aa.find(".apply-btn").removeClass("disabled");
                    var e = H(new Date(c.start)) + c.separator + H(new Date(c.end));
                    c.setValue.call(fa, e, H(new Date(c.start)), H(new Date(c.end))), da && !d && a(ea).trigger("datepicker-change", {
                        value: e,
                        date1: new Date(c.start),
                        date2: new Date(c.end)
                    })
                } else b ? aa.find(".apply-btn").removeClass("disabled") : aa.find(".apply-btn").addClass("disabled")
            }

            function A(a, b) {
                return Math.abs(W(a) - W(b)) + 1
            }

            function B(a, b, d) {
                if (a.getTime() > b.getTime()) {
                    var e = b;
                    b = a, a = e, e = null
                }
                var f = !0;
                return c.startDate && L(a, c.startDate) < 0 && (f = !1), c.endDate && L(b, c.endDate) > 0 && (f = !1), f ? (c.start = a.getTime(), c.end = b.getTime(), c.time.enabled && (k("time1", a), k("time2", b)), (c.stickyMonths || L(a, b) > 0 && 0 == K(a, b)) && (c.lookBehind ? a = N(b) : b = M(a)), c.stickyMonths && K(b, c.endDate) > 0 && (a = N(a), b = N(b)), c.stickyMonths || 0 == K(a, b) && (c.lookBehind ? a = N(b) : b = M(a)), E(a, "month1"), E(b, "month2"), I(), y(), z(!1, d), void x()) : (E(c.startDate, "month1"), E(M(c.startDate), "month2"), void I())
            }

            function C(a) {
                var b = !0;
                return c.startDate && L(a, c.startDate) < 0 && (b = !1), c.endDate && L(a, c.endDate) > 0 && (b = !1), b ? (c.start = a.getTime(), c.time.enabled && k("time1", a), E(a, "month1"), I(), z(), void x()) : void E(c.startDate, "month1")
            }

            function D() {
                (c.start || c.end) && (aa.find(".day").each(function() {
                    var d = parseInt(a(this).attr("time")),
                        e = c.start,
                        f = c.end;
                    c.time.enabled && (d = b(d).startOf("day").valueOf(), e = b(e || b().valueOf()).startOf("day").valueOf(), f = b(f || b().valueOf()).startOf("day").valueOf()), c.start && c.end && f >= d && d >= e || c.start && !c.end && b(e).format("YYYY-MM-DD") == b(d).format("YYYY-MM-DD") ? a(this).addClass("checked") : a(this).removeClass("checked"), c.start && b(e).format("YYYY-MM-DD") == b(d).format("YYYY-MM-DD") ? a(this).addClass("first-date-selected") : a(this).removeClass("first-date-selected"), c.end && b(f).format("YYYY-MM-DD") == b(d).format("YYYY-MM-DD") ? a(this).addClass("last-date-selected") : a(this).removeClass("last-date-selected")
                }), aa.find(".week-number").each(function() {
                    a(this).attr("data-start-time") == c.startWeek && a(this).addClass("week-number-selected")
                }))
            }

            function E(a, d) {
                a = b(a).toDate();
                var e = G(a.getMonth());
                aa.find("." + d + " .month-name").html(e + " " + a.getFullYear()), aa.find("." + d + " tbody").html(Y(a)), c[d] = a, u()
            }

            function F(a, b) {
                aa.find("." + b).append(O()), k(b, a)
            }

            function G(a) {
                return _("month-name")[a]
            }

            function H(a) {
                return b(a).format(c.format)
            }

            function I() {
                D();
                var a = parseInt(b(c.month1).format("YYYYMM")),
                    d = parseInt(b(c.month2).format("YYYYMM")),
                    e = Math.abs(a - d),
                    f = e > 1 && 89 != e;
                f ? aa.addClass("has-gap").removeClass("no-gap").find(".gap").css("visibility", "visible") : aa.removeClass("has-gap").addClass("no-gap").find(".gap").css("visibility", "hidden");
                var g = aa.find("table.month1").height(),
                    h = aa.find("table.month2").height();
                aa.find(".gap").height(Math.max(g, h) + 10)
            }

            function J() {
                c.alwaysOpen || (a(aa).slideUp(c.duration, function() {
                    a(ea).data("date-picker-opened", !1), a(ea).trigger("datepicker-closed", {
                        relatedTarget: aa
                    })
                }), a(ea).trigger("datepicker-close", {
                    relatedTarget: aa
                }))
            }

            function K(a, c) {
                var d = parseInt(b(a).format("YYYYMM")) - parseInt(b(c).format("YYYYMM"));
                return d > 0 ? 1 : 0 == d ? 0 : -1
            }

            function L(a, c) {
                var d = parseInt(b(a).format("YYYYMMDD")) - parseInt(b(c).format("YYYYMMDD"));
                return d > 0 ? 1 : 0 == d ? 0 : -1
            }

            function M(a) {
                return b(a).add(1, "months").toDate()
            }

            function N(a) {
                return b(a).add(-1, "months").toDate()
            }

            function O() {
                return "<div>						<span>" + _("Time") + ': <span class="hour-val">00</span>:<span class="minute-val">00</span></span>					</div>					<div class="hour">						<label>' + _("Hour") + ': <input type="range" class="hour-range" name="hour" min="0" max="23"></label>					</div>					<div class="minute">						<label>' + _("Minute") + ': <input type="range" class="minute-range" name="minute" min="0" max="59"></label>					</div>'
            }

            function P() {
                var b = '<div class="date-picker-wrapper';
                c.extraClass && (b += " " + c.extraClass + " "), c.singleDate && (b += " single-date "), c.showShortcuts || (b += " no-shortcuts "), c.showTopbar || (b += " no-topbar "), c.customTopBar && (b += " custom-topbar "), b += '">', c.showTopbar && (b += '<div class="drp_top-bar">', c.customTopBar ? ("function" == typeof c.customTopBar && (c.customTopBar = c.customTopBar()), b += '<div class="custom-top">' + c.customTopBar + "</div>") : (b += '<div class="normal-top">							<span style="color:#333">' + _("selected") + ' </span> <b class="start-day">...</b>', c.singleDate || (b += ' <span class="separator-day">' + c.separator + '</span> <b class="end-day">...</b> <i class="selected-days">(<span class="selected-days-num">3</span> ' + _("days") + ")</i>"), b += "</div>", b += '<div class="error-top">error</div>						<div class="default-top">default</div>'), b += '<input type="button" class="apply-btn disabled' + Q() + '" value="' + _("apply") + '" />', b += "</div>");
                var d = c.showWeekNumbers ? 6 : 5;
                if (b += '<div class="month-wrapper"><table class="month1" cellspacing="0" border="0" cellpadding="0"><thead><tr class="caption"><th style="width:27px;"><span class="prev">&lt;</span></th><th colspan="' + d + '" class="month-name"></th><th style="width:27px;">' + (c.singleDate || !c.stickyMonths ? '<span class="next">&gt;</span>' : "") + '</th></tr><tr class="week-name">' + R() + "</thead><tbody></tbody></table>", U() && (b += '<div class="gap">' + T() + '</div><table class="month2" cellspacing="0" border="0" cellpadding="0"><thead><tr class="caption"><th style="width:27px;">' + (c.stickyMonths ? "" : '<span class="prev">&lt;</span>') + '</th><th colspan="' + d + '" class="month-name"></th><th style="width:27px;"><span class="next">&gt;</span></th></tr><tr class="week-name">' + R() + "</thead><tbody></tbody></table>"), b += '<div style="clear:both;height:0;font-size:0;"></div><div class="time"><div class="time1"></div>', c.singleDate || (b += '<div class="time2"></div>'), b += '</div><div style="clear:both;height:0;font-size:0;"></div></div>', b += '<div class="footer">', c.showShortcuts) {
                    b += '<div class="shortcuts"><b>' + _("shortcuts") + "</b>";
                    var e = c.shortcuts;
                    if (e) {
                        if (e["prev-days"] && e["prev-days"].length > 0) {
                            b += '&nbsp;<span class="prev-days">' + _("past");
                            for (var f = 0; f < e["prev-days"].length; f++) {
                                var g = e["prev-days"][f];
                                g += _(e["prev-days"][f] > 1 ? "days" : "day"), b += ' <a href="javascript:;" shortcut="day,-' + e["prev-days"][f] + '">' + g + "</a>"
                            }
                            b += "</span>"
                        }
                        if (e["next-days"] && e["next-days"].length > 0) {
                            b += '&nbsp;<span class="next-days">' + _("following");
                            for (var f = 0; f < e["next-days"].length; f++) {
                                var g = e["next-days"][f];
                                g += _(e["next-days"][f] > 1 ? "days" : "day"), b += ' <a href="javascript:;" shortcut="day,' + e["next-days"][f] + '">' + g + "</a>"
                            }
                            b += "</span>"
                        }
                        if (e.prev && e.prev.length > 0) {
                            b += '&nbsp;<span class="prev-buttons">' + _("previous");
                            for (var f = 0; f < e.prev.length; f++) {
                                var g = _("prev-" + e.prev[f]);
                                b += ' <a href="javascript:;" shortcut="prev,' + e.prev[f] + '">' + g + "</a>"
                            }
                            b += "</span>"
                        }
                        if (e.next && e.next.length > 0) {
                            b += '&nbsp;<span class="next-buttons">' + _("next");
                            for (var f = 0; f < e.next.length; f++) {
                                var g = _("next-" + e.next[f]);
                                b += ' <a href="javascript:;" shortcut="next,' + e.next[f] + '">' + g + "</a>"
                            }
                            b += "</span>"
                        }
                    }
                    if (c.customShortcuts)
                        for (var f = 0; f < c.customShortcuts.length; f++) {
                            var h = c.customShortcuts[f];
                            b += '&nbsp;<span class="custom-shortcut"><a href="javascript:;" shortcut="custom">' + h.name + "</a></span>"
                        }
                    b += "</div>"
                }
                if (c.showCustomValues && (b += '<div class="customValues"><b>' + (c.customValueLabel || _("custom-values")) + "</b>", c.customValues))
                    for (var f = 0; f < c.customValues.length; f++) {
                        var i = c.customValues[f];
                        b += '&nbsp;<span class="custom-value"><a href="javascript:;" custom="' + i.value + '">' + i.name + "</a></span>"
                    }
                return b += "</div></div>", a(b)
            }

            function Q() {
                var a = "";
                return c.autoClose === !0 && (a += " hide"), "" !== c.applyBtnClass && (a += " " + c.applyBtnClass), a
            }

            function R() {
                var a = c.showWeekNumbers ? "<th>" + _("week-number") + "</th>" : "";
                return "monday" == c.startOfWeek ? a + "<th>" + _("week-1") + "</th>					<th>" + _("week-2") + "</th>					<th>" + _("week-3") + "</th>					<th>" + _("week-4") + "</th>					<th>" + _("week-5") + "</th>					<th>" + _("week-6") + "</th>					<th>" + _("week-7") + "</th>" : a + "<th>" + _("week-7") + "</th>					<th>" + _("week-1") + "</th>					<th>" + _("week-2") + "</th>					<th>" + _("week-3") + "</th>					<th>" + _("week-4") + "</th>					<th>" + _("week-5") + "</th>					<th>" + _("week-6") + "</th>"
            }

            function S(a) {
                var a = b(a);
                return c.startDate && a.endOf("month").isBefore(c.startDate) ? !0 : c.endDate && a.startOf("month").isAfter(c.endDate) ? !0 : !1
            }

            function T() {
                for (var a = ['<div class="gap-top-mask"></div><div class="gap-bottom-mask"></div><div class="gap-lines">'], b = 0; 20 > b; b++) a.push('<div class="gap-line">					<div class="gap-1"></div>					<div class="gap-2"></div>					<div class="gap-3"></div>				</div>');
                return a.push("</div>"), a.join("")
            }

            function U() {
                return !c.singleDate && !c.singleMonth
            }

            function V(a, b, c) {
                var d = jQuery.extend(!0, {}, a);
                jQuery.each(b, function(a, b) {
                    var e = b(c);
                    for (var f in e) d.hasOwnProperty(f) ? d[f] += e[f] : d[f] = e[f]
                });
                var e = "";
                for (var f in d) d.hasOwnProperty(f) && (e += f + '="' + d[f] + '" ');
                return e
            }

            function W(a) {
                return Math.floor(X(a) / 864e5)
            }

            function X(a) {
                return b.isMoment(a) && (a = a.toDate().getTime()), "object" == typeof a && a.getTime && (a = a.getTime()), "string" != typeof a || a.match(/\d{13}/) || (a = b(a, c.format).toDate().getTime()), a = parseInt(a, 10) - 60 * (new Date).getTimezoneOffset() * 1e3
            }

            function Y(a) {
                var d = [];
                a.setDate(1);
                var e = (new Date(a.getTime() - 864e5), new Date),
                    f = a.getDay();
                if (0 == f && "monday" == c.startOfWeek && (f = 7), f > 0)
                    for (var g = f; g > 0; g--) {
                        var h = new Date(a.getTime() - 864e5 * g),
                            i = t(h.getTime());
                        c.startDate && L(h, c.startDate) < 0 && (i = !1), c.endDate && L(h, c.endDate) > 0 && (i = !1), d.push({
                            date: h,
                            type: "lastMonth",
                            day: h.getDate(),
                            time: h.getTime(),
                            valid: i
                        })
                    }
                for (var j = a.getMonth(), g = 0; 40 > g; g++) {
                    var k = b(a).add(g, "days").toDate(),
                        i = t(k.getTime());
                    c.startDate && L(k, c.startDate) < 0 && (i = !1), c.endDate && L(k, c.endDate) > 0 && (i = !1), d.push({
                        date: k,
                        type: k.getMonth() == j ? "toMonth" : "nextMonth",
                        day: k.getDate(),
                        time: k.getTime(),
                        valid: i
                    })
                }
                for (var l = [], m = 0; 6 > m && "nextMonth" != d[7 * m].type; m++) {
                    l.push("<tr>");
                    for (var h = 0; 7 > h; h++) {
                        var n = "monday" == c.startOfWeek ? h + 1 : h,
                            k = d[7 * m + n],
                            o = b(k.time).format("L") == b(e).format("L");
                        if (k.extraClass = "", k.tooltip = "", k.valid && c.beforeShowDay && "function" == typeof c.beforeShowDay) {
                            var p = c.beforeShowDay(b(k.time).toDate());
                            k.valid = p[0], k.extraClass = p[1] || "", k.tooltip = p[2] || "", "" != k.tooltip && (k.extraClass += " has-tooltip ")
                        }
                        var q = {
                            time: k.time,
                            "data-tooltip": k.tooltip,
                            "class": "day " + k.type + " " + k.extraClass + " " + (k.valid ? "valid" : "invalid") + " " + (o ? "real-today" : "")
                        };
                        0 == h && c.showWeekNumbers && l.push('<td><div class="week-number" data-start-time="' + k.time + '">' + c.getWeekNumber(k.date) + "</div></td>"), l.push("<td " + V({}, c.dayTdAttrs, k) + "><div " + V(q, c.dayDivAttrs, k) + ">" + Z(k.time, k.day) + "</div></td>")
                    }
                    l.push("</tr>")
                }
                return l.join("")
            }

            function Z(a, b) {
                return c.showDateFilter && "function" == typeof c.showDateFilter ? c.showDateFilter(a, b) : b
            }

            function $() {
                if ("auto" == c.language) {
                    var b = navigator.language ? navigator.language : navigator.browserLanguage;
                    if (!b) return a.dateRangePickerLanguages["default"];
                    var b = b.toLowerCase();
                    for (var d in a.dateRangePickerLanguages)
                        if (-1 != b.indexOf(d)) return a.dateRangePickerLanguages[d];
                    return a.dateRangePickerLanguages["default"]
                }
                return c.language && c.language in a.dateRangePickerLanguages ? a.dateRangePickerLanguages[c.language] : a.dateRangePickerLanguages["default"]
            }

            function _(b) {
                var c = b.toLowerCase(),
                    d = b in ca ? ca[b] : c in ca ? ca[c] : null,
                    e = a.dateRangePickerLanguages["default"];
                return null == d && (d = b in e ? e[b] : c in e ? e[c] : ""), d
            }
            c || (c = {}), c = a.extend(!0, {
                autoClose: !1,
                format: "YYYY-MM-DD",
                separator: " to ",
                language: "auto",
                startOfWeek: "sunday",
                getValue: function() {
                    return a(this).val()
                },
                setValue: function(b) {
                    a(this).attr("readonly") || a(this).is(":disabled") || b == a(this).val() || a(this).val(b)
                },
                startDate: !1,
                endDate: !1,
                time: {
                    enabled: !1
                },
                minDays: 0,
                maxDays: 0,
                showShortcuts: !1,
                shortcuts: {},
                customShortcuts: [],
                inline: !1,
                container: "body",
                alwaysOpen: !1,
                singleDate: !1,
                lookBehind: !1,
                batchMode: !1,
                duration: 200,
                stickyMonths: !1,
                dayDivAttrs: [],
                dayTdAttrs: [],
                selectForward: !1,
                selectBackward: !1,
                applyBtnClass: "",
                singleMonth: "auto",
                hoveringTooltip: function(a, b, c) {
                    return a > 1 ? a + " " + _("days") : ""
                },
                showTopbar: !0,
                swapTime: !1,
                showWeekNumbers: !1,
                getWeekNumber: function(a) {
                    return b(a).format("w")
                }
            }, c), c.start = !1, c.end = !1, c.startWeek = !1, c.isTouchDevice = "ontouchstart" in window || navigator.msMaxTouchPoints, c.isTouchDevice && (c.hoveringTooltip = !1), "auto" == c.singleMonth && (c.singleMonth = a(window).width() < 480), c.singleMonth && (c.stickyMonths = !1), c.singleDate && (c.singleMonth = !0), c.showTopbar || (c.autoClose = !0), c.startDate && "string" == typeof c.startDate && (c.startDate = b(c.startDate, c.format).toDate()), c.endDate && "string" == typeof c.endDate && (c.endDate = b(c.endDate, c.format).toDate());
            var aa, ba, ca = $(),
                da = !1,
                ea = this,
                fa = a(ea).get(0);
            return a(this).unbind(".datepicker").bind("click.datepicker", function(a) {
                var b = aa.is(":visible");
                b || h(c.duration)
            }).bind("change.datepicker", function(a) {
                i()
            }).bind("keyup.datepicker", function() {
                try {
                    clearTimeout(ba)
                } catch (a) {}
                ba = setTimeout(function() {
                    i()
                }, 2e3)
            }), e.call(this), c.alwaysOpen && h(0), a(this).data("dateRangePicker", {
                setDateRange: function(a, d, e) {
                    "string" == typeof a && "string" == typeof d && (a = b(a, c.format).toDate(), d = b(d, c.format).toDate()), B(a, d, e)
                },
                clear: o,
                close: J,
                open: h,
                getDatePicker: g,
                destroy: function() {
                    a(ea).unbind(".datepicker"), a(ea).data("dateRangePicker", ""), a(ea).data("date-picker-opened", null), aa.remove(), a(window).unbind("resize.datepicker", f), a(document).unbind("click.datepicker", J)
                }
            }), a(window).bind("resize.datepicker", f), this
        }
    });
var WTY_Filters = function() {};
WTY_Filters.static_ready = function() {
    $("a.filter__item").on("click", function(a) {
        $(this).toggleClass("active"), a.preventDefault()
    });
    var a = function() {
            if (c.find(".filter__fieldset--type").show(), $("#queryType").val()) {
                c.find(".filter__search").show();
                var a = $("#queryType").val();
                c.find('[data-ref="' + a + '"]').show()
            }
        },
        b = function() {
            if (c.find(".filter__fieldset--type").hide(), c.find(".filter__search").hide(), $("#queryType").val()) {
                var a = $("#queryType").val();
                c.find('[data-ref="' + a + '"]').hide()
            }
        },
        c = $(".map_overlay");
    c.find(".filter__fieldset").hide(), c.find(".filter__fieldset--search").show(), c.find(".filter__search").hide(), c.find('[href="#filter"]').on("click", function(d) {
        d.preventDefault(), c.find(".filter__fieldset--type").is(":visible") ? b() : a()
    }), c.find("select").on("change", function() {
        c.find(".filter__fieldset--options").hide();
        var a = $(this).val();
        c.find('[data-ref="' + a + '"]').show(), c.find(".filter__search").show()
    });
    var d;
    c.closest(".map").on("map_init", function() {
        console.log("map_init"), d = $(this).attr("id")
    }), c.find('[href="#search"], .filter__search .button').on("click", function(a) {
        var b = {};
        if ("" !== $("#byName").val() && (b.search_term = $("#byName").val()), $("#queryType").val()) {
            var c = $("#queryType").val();
            b.queryType = c;
            for (var e = [], f = $('[data-ref="' + c + '"]').find(".checkbox"), g = 0; g < f.length; g++) $(f[g]).is(".active") && e.push($(f[g]).attr("data-ref"));
            e.length && (b.checked_filters = e)
        }
        var h = WTY_Map.staticGetById(d);
        h.data = b, h.loadSrc(h.src)
    }), $(".filter__fieldset legend").on("click", function() {
        var a = $(this).next(".filter__fieldset--container");
        a.is(":visible") ? (a.hide(), $(this).find("span").removeClass("fa-chevron-down").addClass("fa-chevron-right")) : (a.show(), $(this).find("span").removeClass("fa-chevron-right").addClass("fa-chevron-down"))
    }), $(".filter__show-all").on("click", function(a) {
        var b = $(this),
            c = $(this).parent().prev();
        c.is(":visible") ? (b.text(b.data("textClosed") || "Show all"), c.slideUp("slow")) : (b.text(b.data("textOpen") || "Show less"), c.slideDown("slow")), a.preventDefault()
    }), $(".button--clear").on("click", function(a) {
        $(this).next().children("input").val(""), a.preventDefault()
    })
}, WTY_Filters.static_resize = function() {
    $(".filter__fieldset legend").each(function() {
        var a = $(this).next(".filter__fieldset--container");
        $(window).width() <= 640 ? (a.hide(), $(this).find("span").removeClass("fa-chevron-down").addClass("fa-chevron-right")) : (a.show(), $(this).find("span").removeClass("fa-chevron-right").addClass("fa-chevron-down"))
    })
};
var WTY_Grid = function() {
    this.element = null, this.items = [], this.matrix = null, this.targetCols = 0, this.defaultCols = 4, this.actualCols = 0, this.spacing = 0, this.rowHeights = [], this.ratio = {
        width: 0,
        height: 0
    }, this.unitWidth = 0, this.unitHeight = 0, this.unitSpacing = 0, this.isGallery = !1, this.galleryIndex = 0, this.currentlyAnimating = -1, this.canPlayVideo = !1
};
WTY_Grid.staticInstances = {}, WTY_Grid.static_ready = function() {
    $(".grid").each(function() {
        var a = new WTY_Grid;
        a.init($(this)), $(window).load($.proxy(function() {
            $(this).find(".block--anim").length && a.animate()
        }, this))
    }), WTY_Grid.static_resizeAll()
}, WTY_Grid.static_resizeAll = function() {
    _.each(WTY_Grid.staticInstances, function(a, b) {
        a.resize()
    })
}, WTY_Grid.prototype.animate = function() {
    $(this.element).find(".block--anim .block__media").each(function() {
        for (var a = $(this).find(".block__image"); a.length;) $(this).append(a.splice(Math.floor(Math.random() * a.length), 1)[0])
    }), $(".block__video video").on("canplay", $.proxy(function() {
        this.canPlayVideo = !0
    }, this)), $(".block__video video").on("ended", $.proxy(this.playRandomBlockWithVideo, this)), $(".block__video video").on("loadedmetadata", function() {
        WTY_Util.objectFit($(this).parent())
    }), this.playRandomBlockWithVideo()
}, WTY_Grid.prototype.playRandomBlockWithVideo = function() {
    var a = $(".block__video video"),
        b = $(a[Math.floor(Math.random() * a.length)]).closest(".grid__item");
    if (b.index(".grid__item") === this.currentlyAnimating) this.playRandomBlockWithVideo();
    else {
        this.currentlyAnimating = parseInt(b.index(".grid__item"));
        var c = b.find(".block__video").first();
        c.hide(), b.find(".block__media").append(c), c.fadeIn("slow"), c.find("video").get(0).play(), this.rotateRandomImage()
    }
}, WTY_Grid.prototype.rotateRandomImage = function() {
    var a = $(".block--anim .block__image"),
        b = $(a[Math.floor(Math.random() * a.length)]).closest(".grid__item");
    if (b.index(".grid__item") === this.currentlyAnimating) this.rotateRandomImage();
    else {
        var c = b.find(".block__image").first();
        c.hide(), b.find(".block__media").append(c), c.delay(1e3).fadeIn("slow", $.proxy(function() {
            this.canPlayVideo || (setTimeout($.proxy(this.rotateRandomImage, this), 2e3), $(".block__video").hide())
        }, this))
    }
}, WTY_Grid.prototype.init = function(a) {
    this.element = a, this.createInstance(a), this.createGridItems(), this.gallerySetUp(), this.determineRatio(), this.determineSpacing(), this.determineCols(), this.draw()
}, WTY_Grid.prototype.draw = function() {
    this.createMatrix(), this.determineTargetCols(), this.determineScale(), this.determineUnitSizes(), this.makeAllVisible(), this.findPositions(), this.plotPositions()
}, WTY_Grid.prototype.createMatrix = function() {
    this.matrix = new WTY_Grid_Matrix, this.matrix.init()
}, WTY_Grid.prototype.createInstance = function(a) {
    var b = $(a).attr("id");
    _.isString(b) || (b = "wty_grid_" + Math.random(), $(a).attr("id", b)), WTY_Grid.staticInstances[b] = this
}, WTY_Grid.prototype.gallerySetUp = function(a) {
    var b = this;
    this.element.find(".grid__controls").hide(), this.element.hasClass("grid--gallery") && (this.element.find('[href="#next"]').on("click", function() {
        console.log("NEXT"), b.galleryNext(1)
    }), this.element.find('[href="#prev"]').on("click", function() {
        console.log("PREVIOUS"), b.galleryNext(-1)
    }))
}, WTY_Grid.prototype.createGridItems = function() {
    var a = this,
        b = [];
    return $(this.element).find(".grid__item").each(function() {
        var c = $(this),
            d = new WTY_Grid_Item;
        d.init(c), d.grid = a, b.push(d)
    }), a.items = b, b
}, WTY_Grid.prototype.resize = function() {
    this.draw()
}, WTY_Grid.prototype.determineTotalCells = function() {
    var a = 0;
    return _.each(this.items, function(b, c) {
        a += b.getNumCells()
    }), a
}, WTY_Grid.prototype.determineCols = function() {
    var a = $(this.element).data("cols");
    return Number(a) ? void(this.targetCols = Number(a)) : void(_.isString(a) && (this.targetCols = _.map(a.split(","), function(a, b) {
        var c = a.split("@"),
            d = Number(c[0]),
            e = c.length >= 2 ? Number(c[1]) : 0;
        return {
            cols: d,
            width: e
        }
    })))
}, WTY_Grid.prototype.determineTargetCols = function() {
    var a = this,
        b = $(window).width();
    this.actualCols = null, _.isNumber(this.targetCols) ? this.actualCols = this.targetCols : _.isArray(this.targetCols) && _.find(this.targetCols, function(c, d) {
        return b >= c.width ? (a.actualCols = c.cols, !0) : !1
    }), this.actualCols || (this.actualCols = this.defaultCols);
    var c = this.element.hasClass("grid--gallery") && 1 === this.actualCols;
    this.setGalleryMode(c)
}, WTY_Grid.prototype.determineRatio = function() {
    var a = this.element.data("itemratio");
    if (_.isString(a)) {
        var b = a.split("x");
        2 === b.length ? this.ratio = {
            width: Number(b[0]),
            height: Number(b[1])
        } : this.ratio = {
            width: 0,
            height: 0
        }
    }
}, WTY_Grid.prototype.determineSpacing = function() {
    this.spacing = Number($(this.element).data("spacing")), _.isNaN(this.spacing) && (this.spacing = 0)
}, WTY_Grid.prototype.determineScale = function() {
    var a = this.actualCols * this.ratio.width,
        b = (this.actualCols - 1) * this.spacing,
        c = a + b,
        d = $(this.element).width();
    this.scale = d / c
}, WTY_Grid.prototype.determineUnitSizes = function() {
    this.unitWidth = Math.round(this.ratio.width * this.scale), this.unitHeight = Math.round(this.ratio.height * this.scale), this.unitSpacing = Math.round(this.spacing * this.scale)
}, WTY_Grid.prototype.findPositions = function() {
    var a = this;
    if (this.isGallery) _.each(this.items, function(a, b) {
        a.pos = {
            x: b,
            y: 0
        }
    });
    else {
        this.matrix.reset(this.actualCols), _.each(this.items, function(b, c) {
            b.pos = null;
            var d = b.getBlock();
            if (b.visible && !_.isNull(d) && d.is(":visible")) {
                var e = a.matrix.getNextAvailablePosition(b);
                _.isObject(e) && (a.matrix.reservePosition(b, e.x, e.y), b.pos = e)
            }
        });
        var b = this.matrix.isRagged();
        if (b) {
            var c = _.find(this.items, function(a, b) {
                return a.element.hasClass("grid__item--disposable") && a.visible ? a : !1
            });
            _.isObject(c) && (c.visible = !1, this.findPositions())
        }
    }
}, WTY_Grid.prototype.makeAllVisible = function() {
    _.each(this.items, function(a) {
        a.visible = !0, a.element.show()
    })
}, WTY_Grid.prototype.plotPositions = function() {
    var a = 0,
        b = this;
    if (this.rowHeights = [], _.each(this.items, function(a, c) {
            if (a.size(), a.visible && _.isObject(a.pos)) {
                var d = a.pos.y,
                    e = a.pos.y + a.getUnitHeight();
                _.isNumber(b.rowHeights[d]) || (b.rowHeights[d] = 0), _.isNumber(b.rowHeights[e]) || (b.rowHeights[e] = 0);
                var f = a.element.height(),
                    g = b.rowHeights[d] + b.spacing * b.scale + f;
                b.rowHeights[e] = Math.max(b.rowHeights[e], g)
            }
        }), _.each(this.items, function(b, c) {
            b.plot() && (a = Math.max(a, b.bottom()))
        }), this.element.find(".grid__inner").height(a), this.element.find(".grid__itemwrapper").height(a), this.isGallery) {
        var c = _.last(this.items);
        this.element.find(".grid__itemwrapper").width(c.x + c.width)
    }
}, WTY_Grid.prototype.setGalleryMode = function(a) {
    a !== this.isGallery && (a ? this.element.find(".grid__controls").show() : this.element.find(".grid__controls").hide(), this.element.find(".grid__itemwrapper").css({
        left: 0
    }), this.galleryIndex = 0, this.updateGalleryButtons(), this.isGallery = a)
}, WTY_Grid.prototype.galleryNext = function(a) {
    var b = this.galleryIndex + a,
        c = 0;
    0 > b || b >= this.items.length || (c = -this.items[b].x, this.element.find(".grid__itemwrapper").css({
        left: c
    }), this.galleryIndex = b, this.updateGalleryButtons())
}, WTY_Grid.prototype.updateGalleryButtons = function() {
    0 === this.galleryIndex ? this.element.find('[href="#prev"]').addClass("button--disabled") : this.element.find('[href="#prev"]').removeClass("button--disabled"), this.galleryIndex === this.items.length - 1 ? this.element.find('[href="#next"]').addClass("button--disabled") : this.element.find('[href="#next"]').removeClass("button--disabled")
}, WTY_Grid_Item = function() {
    this.grid = null, this.element = null, this.visible = !0, this.unitsize = {
        target: {
            width: 1,
            height: 1
        },
        actual: {
            width: 1,
            height: 1
        }
    }, this.index = null, this.position = {}, this.x = 0, this.y = 0, this.width = 300, this.height = 250
}, WTY_Grid_Item.prototype.init = function(a) {
    this.element = a, this.index = a.index(), a.hasClass("grid__item--x2") && (this.unitsize.target.width = 2, this.unitsize.actual.width = 2), a.hasClass("grid__item--y2") && (this.unitsize.target.height = 2, this.unitsize.actual.height = 2)
}, WTY_Grid_Item.prototype.getNumCells = function() {
    return this.unitsize.actual.width * this.unitsize.actual.height
}, WTY_Grid_Item.prototype.getUnitWidth = function() {
    return this.unitsize.actual.width
}, WTY_Grid_Item.prototype.getUnitHeight = function() {
    return this.unitsize.actual.height
}, WTY_Grid_Item.prototype.getBlock = function() {
    var a = this.element.find(".block");
    return a.length ? a : null
}, WTY_Grid_Item.prototype.size = function() {
    this.width = this.getUnitWidth() * this.grid.unitWidth + (this.getUnitWidth() - 1) * this.grid.unitSpacing, this.height = this.getUnitHeight() * this.grid.unitHeight + (this.getUnitHeight() - 1) * this.grid.unitSpacing;
    var a = this.element.find(".block"),
        b = a.find(".block__media");
    if (this.element.width(this.width), this.element.find(".block").width(this.width), b.length)
        if (a.find(".block__text").length) {
            1 === this.grid.actualCols ? a.addClass("block--sidebyside") : a.removeClass("block--sidebyside");
            var c = b.width() * (this.grid.ratio.height / this.grid.ratio.width);
            b.height(Math.round(c))
        } else b.height(this.height);
    else this.element.height(this.height)
}, WTY_Grid_Item.prototype.plot = function() {
    return this.visible && _.isObject(this.pos) ? (this.x = this.pos.x * (this.grid.unitWidth + this.grid.unitSpacing), this.y = Math.round(this.grid.rowHeights[this.pos.y]), this.element.css({
        top: this.y,
        left: this.x,
        position: "absolute"
    }), this.element.show(), !0) : (this.element.hide(), !1)
}, WTY_Grid_Item.prototype.bottom = function() {
    return this.y + this.element.height()
}, WTY_Grid_Matrix = function() {
    this.cols = 0, this.rows = []
}, WTY_Grid_Matrix.prototype.init = function() {}, WTY_Grid_Matrix.prototype.reset = function(a) {
    this.cols = a, this.rows = [];
    for (var b = 0; 20 > b; b++) this.createAnotherRow()
}, WTY_Grid_Matrix.prototype.getNextAvailablePosition = function(a) {
    var b = this,
        c = null;
    return _.find(this.rows, function(d, e) {
        return _.find(d, function(d, f) {
            var g = b.willItemFitHere(a, f, e);
            return g && _.isNull(c) && (c = {
                x: f,
                y: e
            }), _.isObject(c)
        }), _.isObject(c)
    }), _.isObject(c) ? c : null
}, WTY_Grid_Matrix.prototype.createAnotherRow = function() {
    for (var a = [], b = 0; b < this.cols; b++) a.push(null);
    this.rows.push(a)
}, WTY_Grid_Matrix.prototype.willItemFitHere = function(a, b, c) {
    for (var d = 0; d < a.getUnitWidth(); d++)
        for (var e = 0; e < a.getUnitHeight(); e++) {
            if (b + d >= this.rows[c].length) return !1;
            if (c + e >= this.rows.length) return !1;
            if (null !== this.rows[c + e][b + d]) return !1
        }
    return !0
}, WTY_Grid_Matrix.prototype.reservePosition = function(a, b, c) {
    for (var d = 0; d < a.getUnitWidth(); d++)
        for (var e = 0; e < a.getUnitHeight(); e++) try {
            this.rows[c + e][b + d] = a
        } catch (f) {
            console.log("ERROR, trying to set invalid matrix position", b + d, c + e)
        }
}, WTY_Grid_Matrix.prototype.debug = function() {
    var a = "",
        b = this;
    _.each(this.rows, function(c, d) {
        _.each(c, function(c, e) {
            a += null === b.rows[d][e] ? "-" : b.rows[d][e].index + 1
        }), a += "\n"
    }), console.log(a)
}, WTY_Grid_Matrix.prototype.isRagged = function() {
    var a = this,
        b = [];
    return _.each(this.rows, function(c, d) {
        var e = a.isRowFull(d),
            f = a.isRowEmpty(d),
            g = e || f ? !1 : !0;
        g && b.push(d)
    }), b.length ? !0 : !1
}, WTY_Grid_Matrix.prototype.isRowFull = function(a) {
    var b = !0;
    return _.find(this.rows[a], function(a) {
        return _.isNull(a) ? (b = !1, !0) : void 0
    }), b
}, WTY_Grid_Matrix.prototype.isRowEmpty = function(a) {
    var b = !0;
    return _.find(this.rows[a], function(a) {
        return _.isNull(a) ? void 0 : (b = !1, !0)
    }), b
};
var WTY_Header = function() {};
WTY_Header.static_ready = function() {
        $(".logo").show(), $("#todo").focus(function() {
            WTY_Header.suggestionfield()
        }), $(".suggestionfield").on("mouseleave", function() {
            $(".suggestionfield").hide()
        })
    }, WTY_Header.static_resize = function() {
        window.innerWidth > 640 ? ($(".info__map-container").show(), $(".info__map-container + .info__content").show()) : ($(".info__map-container").slideUp(), $(".info__map-container + .info__content").slideUp())
    }, WTY_Header.scrollFix = function() {
        var a, b = $(window).scrollTop(),
            c = $(window).width();
        $("nav").length && (20 >= b && c >= 960 ? ($(".header").removeClass("header--thin"), WTY_Header.positionSuggestionfield(), a = 78) : ($(".header").addClass("header--thin"), $("nav").css({
            paddingTop: 0,
            paddingBottom: 0
        }), WTY_Header.positionSuggestionfield(), a = 48), c >= 800 ? $(".everything").css({
            paddingTop: a
        }) : $(".everything").css({
            paddingTop: 0
        }), $(".mobilemenutrigger").is(":visible") ? $(".megamenus").css({
            top: 48
        }) : $(".megamenus").css({
            top: a
        }))
    }, WTY_Header.positionSuggestionfield = function() {
        if ($(".suggestionfield:visible").length > 0) {
            $(".suggestionfield").width($("#todo").outerWidth());
            var a = $("#todo").offset();
            a.top += $("#todo").outerHeight();
            var b = a.top - $(window).scrollTop();
            $(".suggestionfield").css({
                left: a.left,
                top: b,
                position: "fixed"
            })
        }
    }, WTY_Header.suggestionfield = function() {
        var a = $("#location").val();
        a.length ? $(".suggestionfield").find(".in").html(" in " + a) : $(".suggestionfield").find(".in").html(""), $(".suggestionfield").fadeIn("fast"), WTY_Header.positionSuggestionfield()
    },
    function() {
        $(".suggestionfield").find("a").on("click", function(a) {
            a.preventDefault(), $("#todo").val($(this).find("em").text()), $("#todo").focus(), $(".suggestionfield").hide()
        })
    }();
var WTY_Instagram = function() {};
WTY_Instagram.static_ready = function() {
    var a = $(".block--instagram");
    a.length && $.ajax({
        type: "GET",
        dataType: "jsonp",
        cache: !1,
        url: "https://api.instagram.com/v1/users/8313659/media/recent?client_id=afd15cca7d664a1c964d54bac0488b93",
        success: function(b) {
            a.find("img").each(function(a) {
                $(this).attr("src", b.data[a].images.thumbnail.url)
            })
        }
    })
};
var WTY_Map = function() {
    this.el, this.elMap, this.markers = [], this.bounds, this.id, this.gmap, this.zoom = 0, this.src, this.srcLoaded = !1, this.srcLoading = !1, this.data = {}, this.scrollWheelZoom = !0, this.infoWindow
};
WTY_Map.staticInstances = {}, WTY_Map.staticGetById = function(a) {
    return WTY_Map.staticInstances.hasOwnProperty(a) ? WTY_Map.staticInstances[a] : null
}, WTY_Map.static_ready = function() {
    $('[href="#explore"]').on("click", function(a) {
        a.preventDefault();
        var b = $(this).closest(".grid").height();
        $(".map--reveal").find(".embed-map").height(b), $(".map--reveal").slideToggle(function() {
            WTY_Map.staticGetById($(this).attr("id")).reinit()
        })
    }), $(".info .button--map").on("click", function(a) {
        a.preventDefault(), $(".info__map-container + .info__content").stop(!0, !1).slideUp(), $(".info__map-container").stop(!0, !1).slideToggle(function() {
            WTY_Map.staticGetById($(this).attr("id")).reinit()
        })
    }), $(".info .button--contact").on("click", function(a) {
        a.preventDefault(), $(".info__map-container").stop(!0, !1).slideUp(), $(".info__map-container + .info__content").stop(!0, !1).slideToggle()
    })
}, WTY_Map.static_load = function() {
    $(".map").each(function() {
        var a = new WTY_Map;
        a.init($(this));
        var b = document.createEvent("CustomEvent");
        b.initCustomEvent("map_init", !0, !0, {}), this.dispatchEvent(b)
    })
}, WTY_Map.prototype.init = function(a) {
    this.el = a, this.elMap = this.el.find(".embed-map"), 0 != Number(this.elMap.length) && (!this.elMap.length > 0 && this.el.hasClass("embed-map") && (this.elMap = this.el), this.el.attr("id") ? this.id = this.el.attr("id") : (this.id = "_mapInstance_" + _.size(WTY_Map.staticInstances), this.el.attr("id", this.id)), WTY_Map.staticInstances[this.id] = this, this.elMap.is(":visible") && this.initGmap())
}, WTY_Map.prototype.initGmap = function() {
    var a = this,
        b = 53.85,
        c = -1;
    this.elMap.data("lat") && this.elMap.data("lng") && (b = Number(this.elMap.data("lat")), c = Number(this.elMap.data("lng"))), "undefined" != typeof this.elMap.data("scrollzoom") && (this.scrollWheelZoom = this.elMap.data("scrollzoom")), this.elMap.data("zoom") && (this.zoom = Number(this.elMap.data("zoom"))),
        this.gmap = new google.maps.Map(this.elMap.get(0), {
            center: {
                lat: b,
                lng: c
            },
            styles: [{
                featureType: "poi",
                stylers: [{
                    visibility: "off"
                }]
            }],
            scrollwheel: this.scrollWheelZoom,
            zoom: this.zoom ? this.zoom : 6
        }), this.addBasicMarker(), this.addPlotBlocks(), this.elMap.data("src") && this.loadSrc(this.elMap.data("src")), google.maps.event.addDomListener(window, "resize", function() {
            a.resize()
        }), this.infoWindow || (this.infoWindow = new google.maps.InfoWindow({
            content: ""
        }))
}, WTY_Map.prototype.reinit = function() {
    this.gmap ? this.resize() : this.initGmap()
}, WTY_Map.prototype.addBasicMarker = function() {
    var a = this;
    if (this.elMap.data("show-marker")) {
        var b = new google.maps.Marker({
            icon: basepath + "images/wty/mappin-grey.png",
            position: a.gmap.getCenter(),
            map: a.gmap
        });
        this.elMap.data("marker-title") && b.addListener("click", function() {
            a.infoWindow.setContent('<div class="block__text"><h3>' + a.elMap.data("marker-title") + "</h3></div>"), a.infoWindow.open(a.gmap, b)
        }), this.markers.push(b)
    }
}, WTY_Map.prototype.addPlotBlocks = function() {
    var a = this;
    this.el.hasClass("map--plotblocks") && (this.el.find(".block").each(function() {
        var b = $(this),
            c = Number($(this).data("lat")),
            d = Number($(this).data("lng"));
        if (c && d) {
            var e = new google.maps.Marker({
                icon: basepath + "images/wty/mappin-pink.png",
                position: {
                    lat: c,
                    lng: d
                },
                title: b.find("h1").html(),
                map: a.gmap
            });
            e.addListener("click", function() {
                a.infoWindow.setContent('<div class="block__text"><a href="' + b.find(".block__link").attr("href") + '">' + b.find(".block__text").html() + "</a></div>"), a.infoWindow.open(a.gmap, e)
            }), a.markers.push(e), b.find(".block__link").hover(function(a) {
                e.setZIndex(google.maps.Marker.MAX_ZINDEX + 1), e.setIcon(basepath + "images/wty/mappin-pinkhover.png")
            }, function(a) {
                e.setIcon(basepath + "images/wty/mappin-pink.png")
            })
        }
    }), this.applyClusterer(), this.zoom || this.autoZoom())
}, WTY_Map.prototype.autoZoom = function() {
    var a = this;
    this.bounds = new google.maps.LatLngBounds, _.each(this.markers, function(b) {
        a.bounds.extend(b.getPosition())
    }), this.gmap.fitBounds(this.bounds)
}, WTY_Map.prototype.addDataMarkers = function(a) {
    var b = this;
    _.each(a.markers, function(a) {
        var c = new google.maps.Marker({
            icon: basepath + "images/wty/mappin-pink.png",
            position: {
                lat: a.lat,
                lng: a.lng
            },
            title: a.title,
            map: b.gmap
        });
        c.addListener("click", function() {
            b.infoWindow.setContent('<div class="block__text"><h3>' + a.title + "</h3><p>" + a.description + '</p><a href="' + a.url + '" class="button button--chevronr">More</a></div>'), b.infoWindow.open(b.gmap, c)
        }), b.markers.push(c)
    }), this.applyClusterer(), this.zoom || this.autoZoom()
}, WTY_Map.prototype.applyClusterer = function() {
    new MarkerClusterer(this.gmap, this.markers, {
        maxZoom: 12,
        gridSize: 50,
        styles: [{
            url: basepath + "images/wty/cluster--grey.png",
            height: 40,
            width: 40,
            anchor: [0, 0],
            textColor: "#fff",
            textSize: 14
        }]
    })
}, WTY_Map.prototype.loadSrc = function(a) {
    var b = this;
    if (!this.srcLoading && this.src !== a && a) {
        var c = a + "";
        $.ajax({
            url: c,
            method: "GET",
            data: this.data,
            success: function(c, d, e) {
                b.src = a, b.srcLoading = !0, b.srcLoading = !1, c.markers.length ? b.addDataMarkers(c) : $(".feedback").fadeIn().delay(3e3).fadeOut()
            },
            error: function() {}
        })
    }
}, WTY_Map.prototype.resize = function() {
    var a = this.gmap.getCenter();
    google.maps.event.trigger(this.gmap, "resize"), this.gmap.setCenter(a)
};
var mouseLocation = {
        x: 0,
        y: 0
    },
    WTY_MegaMenu = function() {};
WTY_MegaMenu.static_ready = function() {
    $(document).on("mousemove", function(a) {
        mouseLocation.x = a.pageX, mouseLocation.y = a.pageY;
        var b = $(".megamenu--open");
        if (1 === b.length) {
            var c = b.offset(),
                d = b.outerHeight();
            0 == $(".megamenu--search input:focus").length && 0 == $(".suggestionfield:visible").length && mouseLocation.y > c.top + d && WTY_MegaMenu.static_hide()
        }
    })
}, WTY_MegaMenu.static_show = function(a) {
    var b = $(".megamenu--" + a),
        c = $(".menu--primary").find('[href="#' + a + '"]').parent();
    WTY_MegaMenu.static_hide(), 1 === b.length && (b.addClass("megamenu--open"), c.addClass("menu__item--open"), b.find(".block__image").each(function() {
        WTY_Util.objectFit($(this))
    }), $(window).width() <= 800 ? (b.css({
        left: "100vw"
    }), b.animate({
        left: "0vw"
    }, 200, function() {
        $(this).find("input").first().focus()
    })) : b.find("input").first().focus())
}, WTY_MegaMenu.static_hide = function(a) {
    $(".menu__item--open").removeClass("menu__item--open"), a ? $(".megamenu").animate({
        left: "100vw"
    }, 200, function() {
        $(".megamenu").fadeOut(), $(".megamenu").removeClass("megamenu--open"), $(".megamenu").css({
            left: ""
        })
    }) : $(".megamenu").removeClass("megamenu--open")
};
var WTY_Social = function() {};
WTY_Social.static_ready = function() {
    $(".social-share-links a").click(function(a) {
        var b = $(this).attr("href");
        if (window.innerWidth <= 640) {
            var c = document.createElement("a");
            c.setAttribute("href", b), c.setAttribute("target", "_blank");
            var d = document.createEvent("HTMLEvents");
            d.initEvent("click", !0, !0), c.dispatchEvent(d)
        } else {
            var e = .66 * window.innerWidth,
                f = e * window.innerHeight / window.innerWidth;
            e > 550 && (e = 550), f > 420 && (f = 420), window.open(b, "newwindow", "width=" + e + ", height=" + f + ", top=" + (window.innerHeight - f) / 2 + ", left=" + (window.innerWidth - e) / 2)
        }
        a.preventDefault()
    })
};
var WTY_Util = function() {};
WTY_Util.objectFit = function(a) {
    var b = a.find("img"),
        c = a.find("video");
    if ((0 !== b.length || 0 !== c.length) && !(a.parent().parent().hasClass("block--advert") || a.find(".slimmage").length || a.find(".crop-up").length || a.find(".no-fit").length)) {
        var d = b.length ? b.get(0).naturalWidth : c.get(0).videoWidth,
            e = b.length ? b.get(0).naturalHeight : c.get(0).videoHeight,
            f = a.width(),
            g = a.height(),
            h = f / d,
            i = g / e,
            j = Math.max(h, i),
            k = Math.ceil(d * j) + 1,
            l = Math.ceil(e * j),
            m = (f - k) / 2,
            n = (g - l) / 2;
        c.length && c.css({
            width: k,
            height: l,
            left: m,
            top: n,
            position: "absolute"
        }), b.length && b.css({
            width: k + 2,
            height: l + 2,
            left: m,
            top: n,
            position: "absolute"
        })
    }
}, WTY_Util.objectFitAll = function() {
    $(".block").not(".block--advert").find(".block__image").each(function() {
        WTY_Util.objectFit($(this))
    }), $(".block__video").each(function() {
        WTY_Util.objectFit($(this))
    }), $(".pagehero__image").each(function() {
        WTY_Util.objectFit($(this))
    }), $(".searchresult__media").each(function() {
        WTY_Util.objectFit($(this))
    })
}, WTY_Util.static_ready = function() {
    $(".collapsible__toggle").on("click", function(a) {
        a.preventDefault();
        var b = $(this),
            c = $(this).closest(".collapsible").find(".collapsible__content");
        c.is(":visible") ? (b.find(".fa").removeClass("fa-chevron-down").addClass("fa-chevron-right"), c.hide()) : (b.find(".fa").removeClass("fa-chevron-right").addClass("fa-chevron-down"), c.show())
    })
}, WTY_Util.static_resize = function() {
    $(".collapsible").each(function() {
        var a = $(this).find(".collapsible__toggle"),
            b = $(this).find(".collapsible__content");
        $(window).width() <= 640 ? (a.find(".fa").removeClass("fa-chevron-down").addClass("fa-chevron-right"), b.hide()) : (a.find(".fa").removeClass("fa-chevron-right").addClass("fa-chevron-down"), b.show())
    })
};
var WTY_Viewmode = function() {};
WTY_Viewmode.static_ready = function() {
    $(".viewmodes__tab a").on("click", function(a) {
        a.preventDefault();
        var b = $(this),
            c = b.data("view-mode");
        if ($(".viewmodes__tab").removeClass("active"), b.parent().addClass("active"), $(".viewmodes__item").removeClass("active"), $(".viewmodes__item--" + c).addClass("active"), "map" == c) {
            var d = $(".viewmodes__item--" + c).find(".map"),
                e = WTY_Map.staticGetById(d.attr("id"));
            e.reinit()
        } else WTY_Grid.static_resizeAll()
    })
};
var basepath = '/';
$(document).ready(function() {
    WTY_MegaMenu.static_ready(), WTY_Grid.static_ready(), WTY_Instagram.static_ready(), WTY_Social.static_ready(), WTY_Header.static_ready(), WTY_Util.objectFitAll(), WTY_Header.scrollFix(), WTY_Viewmode.static_ready(), WTY_Map.static_ready(), WTY_Util.static_ready(), $(".menu--primary a").hoverIntent(function(a) {
        var b = $(this).data("ref");
        $(".mobilemenutrigger").is(":visible") || WTY_MegaMenu.static_show(b)
    }), $(".menu--primary").find("a").on("click", function(a) {
        if ($(".mobilemenutrigger").is(":visible")) {
            a.preventDefault();
            var b = $(this).data("ref");
            WTY_MegaMenu.static_show(b)
        }
    }), $(".megamenu").length && $(".mobilequickmenu").find("a").on("click", function(a) {
        a.preventDefault();
        var b = $(this).data("ref");
        WTY_MegaMenu.static_show(b), mobilemenutriggger()
    }), $(".mobilemenutrigger").find("a").on("click", function(a) {
        $(".megamenu--search").removeClass("megamenu--open"), a.preventDefault(), mobilemenutriggger()
    }), $(".menu--secondary .search").find("a").on("click", function(a) {
        a.preventDefault(), WTY_MegaMenu.static_show("search")
    }), $(".megamenu__mobileback").find("a").on("click", function(a) {
        a.preventDefault(), closemegamenus()
    }), $(".block--lightbox").magnificPopup({
        delegate: ".block__link",
        type: "image",
        gallery: {
            enabled: !0
        }
    });
    var a, b;
    $("body").on("touchstart", ".mfp-gallery figure", function(c) {
        a = c.originalEvent.touches[0].clientX, b = c.originalEvent.touches[0].clientY
    }), $("body").on("touchmove", ".mfp-gallery figure", function(c) {
        if (a) {
            var d = c.originalEvent.touches[0].clientX,
                e = c.originalEvent.touches[0].clientY,
                f = b - e;
            Math.abs(f) < 10 && c.preventDefault();
            var g = a - d;
            Math.abs(g) > 50 && (g > 0 ? $(".mfp-arrow-right").trigger("click") : $(".mfp-arrow-left").trigger("click"), a = null, b = null)
        }
    }), $(".description").height() > 150 && ($(".description").css({
        height: "initial"
    }), $(".reveal-description").hide()), $(".reveal-description").on("click", function(a) {
        a.preventDefault(), $(".description").css({
            height: "auto"
        }), $(".reveal-description, .fade").hide()
    }), WTY_Filters.static_ready(), $("a[target=_blank]").on("click", function() {
        if ("undefined" != typeof _gat) try {
            var a = _gat._getTracker("UA-2073763-1");
            a._trackPageview(), a._trackEvent("Outbound Link", this.href)
        } catch (b) {}
    }), $(".datepicker--range").length && $(".datepicker--range").each(function() {
        console.log(this);
        $(this).dateRangePicker({
            defaultTime: moment().startOf("day").toDate(),
            autoClose: !0,
            format: "DD/MM/YYYY"
        })
    }), $(".datepicker--single").length && $(".datepicker--single").each(function() {
        $(this).dateRangePicker({
            defaultTime: moment().startOf("day").toDate(),
            singleDate: !0,
            showShortcuts: !1,
            format: "DD/MM/YYYY"
        })
    }), $(".quick-links").on("click", function(a) {
        a.preventDefault(), $(this).next().stop().slideToggle(), $(this).find("span").is(".fa-chevron-down") ? $(this).find("span").removeClass("fa-chevron-down").addClass("fa-chevron-right") : $(this).find("span").removeClass("fa-chevron-right").addClass("fa-chevron-down")
    })
}), $(window).load(function() {
    window.loaded = !0, WTY_Header.scrollFix(), WTY_Grid.static_resizeAll(), WTY_Util.objectFitAll(), WTY_Map.static_load()
}), $(window).resize(function() {
    WTY_Grid.static_resizeAll(), WTY_Util.objectFitAll(), WTY_Util.static_resize(), WTY_Header.scrollFix(), WTY_Header.static_resize(), WTY_Filters.static_resize()
}), $(window).scroll(function() {
    WTY_Header.scrollFix()
});
//# sourceMappingURL=wty.map