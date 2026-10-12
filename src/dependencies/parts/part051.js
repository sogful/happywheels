(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        92796(e, t, n) {
            "use strict";
        
            var r = n(79039);
            var i = n(94901);
            var s = /#|\.prototype\./;
            function a(e, t) {
              var n = h[o(e)];
              return n === d || n !== l && (i(t) ? r(t) : !!t);
            }
            var o = a.normalize = function (e) {
              return String(e).replace(s, ".").toLowerCase();
            };
            var h = a.data = {};
            var l = a.NATIVE = "N";
            var d = a.POLYFILL = "P";
            e.exports = a;
          },
        2087(e, t, n) {
            "use strict";
        
            var r = n(20034);
            var i = Math.floor;
            e.exports = Number.isInteger || function (e) {
              return !r(e) && isFinite(e) && i(e) === e;
            };
          },
        64117(e) {
            "use strict";
        
            e.exports = function (e) {
              return e == null;
            };
          },
        20034(e, t, n) {
            "use strict";
        
            var r = n(94901);
            e.exports = function (e) {
              if (typeof e == "object") {
                return e !== null;
              } else {
                return r(e);
              }
            };
          },
        13925(e, t, n) {
            "use strict";
        
            var r = n(20034);
            e.exports = function (e) {
              return r(e) || e === null;
            };
          },
        96395(e) {
            "use strict";
        
            e.exports = false;
          },
        65810(e, t, n) {
            "use strict";
        
            var r = n(20034);
            var i = n(91181).get;
            e.exports = function (e) {
              if (!r(e)) {
                return false;
              }
              var t = i(e);
              return !!t && t.type === "RawJSON";
            };
          },
        60788(e, t, n) {
            "use strict";
        
            var r = n(20034);
            var i = n(22195);
            var s = n(78227)("match");
            e.exports = function (e) {
              var t;
              return r(e) && ((t = e[s]) !== undefined ? !!t : i(e) === "RegExp");
            };
          },
        10757(e, t, n) {
            "use strict";
        
            var r = n(97751);
            var i = n(94901);
            var s = n(1625);
            var a = n(7040);
            var o = Object;
            e.exports = a ? function (e) {
              return typeof e == "symbol";
            } : function (e) {
              var t = r("Symbol");
              return i(t) && s(t.prototype, o(e));
            };
          },
        72652(e, t, n) {
            "use strict";
        
            var r = n(76080);
            var i = n(69565);
            var s = n(28551);
            var a = n(16823);
            var o = n(44209);
            var h = n(26198);
            var l = n(1625);
            var d = n(18563);
            var c = n(63085);
            var u = n(9539);
            var p = TypeError;
            function m(e, t) {
              this.stopped = e;
              this.result = t;
            }
            var f = m.prototype;
            e.exports = function (e, t, n) {
              var _;
              var v;
              var y;
              var g;
              var w;
              var x;
              var b;
              var T = n && n.that;
              var A = !!n && !!n.AS_ENTRIES;
              var C = !!n && !!n.IS_RECORD;
              var S = !!n && !!n.IS_ITERATOR;
              var E = !!n && !!n.INTERRUPTED;
              var O = r(t, T);
              function k(e) {
                var t = _;
                _ = undefined;
                if (t) {
                  u(t, "normal");
                }
                return new m(true, e);
              }
              function P(e) {
                if (A) {
                  s(e);
                  if (E) {
                    return O(e[0], e[1], k);
                  } else {
                    return O(e[0], e[1]);
                  }
                } else if (E) {
                  return O(e, k);
                } else {
                  return O(e);
                }
              }
              if (C) {
                _ = e.iterator;
              } else if (S) {
                _ = e;
              } else {
                if (!(v = c(e))) {
                  throw new p(a(e) + " is not iterable");
                }
                if (o(v)) {
                  y = 0;
                  g = h(e);
                  for (; g > y; y++) {
                    if ((w = P(e[y])) && l(f, w)) {
                      return w;
                    }
                  }
                  return new m(false);
                }
                _ = d(e, v);
              }
              for (x = C ? e.next : _.next; !(b = i(x, _)).done;) {
                var M = b.value;
                try {
                  w = P(M);
                } catch (e) {
                  if (!_) {
                    throw e;
                  }
                  u(_, "throw", e);
                }
                if (typeof w == "object" && w && l(f, w)) {
                  return w;
                }
              }
              return new m(false);
            };
          },
        9539(e, t, n) {
            "use strict";
        
            var r = n(69565);
            var i = n(28551);
            var s = n(55966);
            e.exports = function (e, t, n) {
              var a;
              var o;
              i(e);
              try {
                if (!(a = s(e, "return"))) {
                  if (t === "throw") {
                    throw n;
                  }
                  return n;
                }
                a = r(a, e);
              } catch (e) {
                o = true;
                a = e;
              }
              if (t === "throw") {
                throw n;
              }
              if (o) {
                throw a;
              }
              i(a);
              return n;
            };
          },
        33994(e, t, n) {
            "use strict";
        
            var r = n(57657).IteratorPrototype;
            var i = n(2360);
            var s = n(6980);
            var a = n(10687);
            var o = n(26269);
            function h() {
              return this;
            }
            e.exports = function (e, t, n, l) {
              var d = t + " Iterator";
              e.prototype = i(r, {
                next: s(+!l, n)
              });
              a(e, d, false, true);
              o[d] = h;
              return e;
            };
          },
        51088(e, t, n) {
            "use strict";
        
            var r = n(46518);
            var i = n(69565);
            var s = n(96395);
            var a = n(10350);
            var o = n(94901);
            var h = n(33994);
            var l = n(42787);
            var d = n(52967);
            var c = n(10687);
            var u = n(66699);
            var p = n(36840);
            var m = n(78227);
            var f = n(26269);
            var _ = n(57657);
            var v = a.PROPER;
            var y = a.CONFIGURABLE;
            var g = _.IteratorPrototype;
            var w = _.BUGGY_SAFARI_ITERATORS;
            var x = m("iterator");
            var b = "keys";
            var T = "values";
            var A = "entries";
            function C() {
              return this;
            }
            e.exports = function (e, t, n, a, m, _, S) {
              h(n, t, a);
              var E;
              var O;
              var k;
              function P(e) {
                if (e === m && j) {
                  return j;
                }
                if (!w && e && e in I) {
                  return I[e];
                }
                switch (e) {
                  case b:
                  case T:
                  case A:
                    return function () {
                      return new n(this, e);
                    };
                }
                return function () {
                  return new n(this);
                };
              }
              var M = t + " Iterator";
              var R = false;
              var I = e.prototype;
              var L = I[x] || I["@@iterator"] || m && I[m];
              var j = !w && L || P(m);
              var B = t === "Array" && I.entries || L;
              if (B && (E = l(B.call(new e()))) !== Object.prototype && E.next) {
                if (!s && l(E) !== g) {
                  if (d) {
                    d(E, g);
                  } else if (!o(E[x])) {
                    p(E, x, C);
                  }
                }
                c(E, M, true, true);
                if (s) {
                  f[M] = C;
                }
              }
              if (v && m === T && L && L.name !== T) {
                if (!s && y) {
                  u(I, "name", T);
                } else {
                  R = true;
                  j = function () {
                    return i(L, this);
                  };
                }
              }
              if (m) {
                O = {
                  values: P(T),
                  keys: _ ? j : P(b),
                  entries: P(A)
                };
                if (S) {
                  for (k in O) {
                    if (w || R || !(k in I)) {
                      p(I, k, O[k]);
                    }
                  }
                } else {
                  r({
                    target: t,
                    proto: true,
                    forced: w || R
                  }, O);
                }
              }
              if ((!s || !!S) && I[x] !== j) {
                p(I, x, j, {
                  name: m
                });
              }
              f[t] = j;
              return O;
            };
          },
        57657(e, t, n) {
            "use strict";
        
            var r;
            var i;
            var s;
            var a = n(79039);
            var o = n(94901);
            var h = n(20034);
            var l = n(2360);
            var d = n(42787);
            var c = n(36840);
            var u = n(78227);
            var p = n(96395);
            var m = u("iterator");
            var f = false;
            if ([].keys) {
              if ("next" in (s = [].keys())) {
                if ((i = d(d(s))) !== Object.prototype) {
                  r = i;
                }
              } else {
                f = true;
              }
            }
            if (!h(r) || a(function () {
              var e = {};
              return r[m].call(e) !== e;
            })) {
              r = {};
            } else if (p) {
              r = l(r);
            }
            if (!o(r[m])) {
              c(r, m, function () {
                return this;
              });
            }
            e.exports = {
              IteratorPrototype: r,
              BUGGY_SAFARI_ITERATORS: f
            };
          },
        26269(e) {
            "use strict";
        
            e.exports = Object.create ? Object.create(null) : {};
          },
        26198(e, t, n) {
            "use strict";
        
            var r = n(18014);
            e.exports = function (e) {
              return r(e.length);
            };
          },
        50283(e, t, n) {
            "use strict";
        
            var r = n(79504);
            var i = n(79039);
            var s = n(94901);
            var a = n(39297);
            var o = n(43724);
            var h = n(10350).CONFIGURABLE;
            var l = n(33706);
            var d = n(91181);
            var c = d.enforce;
            var u = d.get;
            var p = String;
            var m = Object.defineProperty;
            var f = r("".slice);
            var _ = r("".replace);
            var v = r([].join);
            var y = o && !i(function () {
              return m(function () {}, "length", {
                value: 8
              }).length !== 8;
            });
            var g = String(String).split("String");
            var w = e.exports = function (e, t, n) {
              if (f(p(t), 0, 7) === "Symbol(") {
                t = "[" + _(p(t), /^Symbol\(([^)]*)\).*$/, "$1") + "]";
              }
              if (n && n.getter) {
                t = "get " + t;
              }
              if (n && n.setter) {
                t = "set " + t;
              }
              if (!a(e, "name") || h && e.name !== t) {
                if (o) {
                  m(e, "name", {
                    value: t,
                    configurable: true
                  });
                } else {
                  e.name = t;
                }
              }
              if (y && n && a(n, "arity") && e.length !== n.arity) {
                m(e, "length", {
                  value: n.arity
                });
              }
              try {
                if (n && a(n, "constructor") && n.constructor) {
                  if (o) {
                    m(e, "prototype", {
                      writable: false
                    });
                  }
                } else {
                  e.prototype &&= undefined;
                }
              } catch (e) {}
              var r = c(e);
              if (!a(r, "source")) {
                r.source = v(g, typeof t == "string" ? t : "");
              }
              return e;
            };
            Function.prototype.toString = w(function () {
              return s(this) && u(this).source || l(this);
            }, "toString");
          },
        33164(e, t, n) {
            "use strict";
        
            var r = n(77782);
            var i = n(53602);
            var s = Math.abs;
            e.exports = function (e, t, n, a) {
              var o = +e;
              var h = s(o);
              var l = r(o);
              if (h < a) {
                return l * i(h / a / t) * a * t;
              }
              var d = (1 + t / 2.220446049250313e-16) * h;
              var c = d - (d - h);
              if (c > n || c != c) {
                return l * Infinity;
              } else {
                return l * c;
              }
            };
          },
        15617(e, t, n) {
            "use strict";
        
            var r = n(33164);
            e.exports = Math.fround || function (e) {
              return r(e, 1.1920928955078125e-7, 3.4028234663852886e+38, 1.1754943508222875e-38);
            };
          },
        53602(e) {
            "use strict";
        
            var t = 4503599627370496;
            e.exports = function (e) {
              return e + t - t;
            };
          },
        77782(e) {
            "use strict";
        
            e.exports = Math.sign || function (e) {
              var t = +e;
              if (t === 0 || t != t) {
                return t;
              } else if (t < 0) {
                return -1;
              } else {
                return 1;
              }
            };
          },
        80741(e) {
            "use strict";
        
            var t = Math.ceil;
            var n = Math.floor;
            e.exports = Math.trunc || function (e) {
              var r = +e;
              return (r > 0 ? n : t)(r);
            };
          },
        91955(e, t, n) {
            "use strict";
        
            var r;
            var i;
            var s;
            var a;
            var o;
            var h = n(44576);
            var l = n(93389);
            var d = n(76080);
            var c = n(59225).h;
            var u = n(18265);
            var p = n(89544);
            var m = n(44265);
            var f = n(7860);
            var _ = n(16193);
            var v = h.MutationObserver || h.WebKitMutationObserver;
            var y = h.document;
            var g = h.process;
            var w = h.Promise;
            var x = l("queueMicrotask");
            if (!x) {
              var b = new u();
              function T() {
                var e;
                var t;
                for (_ && (e = g.domain) && e.exit(); t = b.get();) {
                  try {
                    t();
                  } catch (e) {
                    if (b.head) {
                      r();
                    }
                    throw e;
                  }
                }
                if (e) {
                  e.enter();
                }
              }
              if (p || _ || f || !v || !y) {
                if (!m && w && w.resolve) {
                  (a = w.resolve(undefined)).constructor = w;
                  o = d(a.then, a);
                  r = function () {
                    o(T);
                  };
                } else if (_) {
                  r = function () {
                    g.nextTick(T);
                  };
                } else {
                  c = d(c, h);
                  r = function () {
                    c(T);
                  };
                }
              } else {
                i = true;
                s = y.createTextNode("");
                new v(T).observe(s, {
                  characterData: true
                });
                r = function () {
                  s.data = i = !i;
                };
              }
              x = function (e) {
                if (!b.head) {
                  r();
                }
                b.add(e);
              };
            }
            e.exports = x;
          },
        27819(e, t, n) {
            "use strict";
        
            var r = n(79039);
            e.exports = !r(function () {
              var e = "9007199254740993";
              var t = JSON.rawJSON(e);
              return !JSON.isRawJSON(t) || JSON.stringify(t) !== e;
            });
          },
        36043(e, t, n) {
            "use strict";
        
            var r = n(79306);
            var i = TypeError;
            function s(e) {
              var t;
              var n;
              this.promise = new e(function (e, r) {
                if (t !== undefined || n !== undefined) {
                  throw new i("Bad Promise constructor");
                }
                t = e;
                n = r;
              });
              this.resolve = r(t);
              this.reject = r(n);
            }
            e.exports.f = function (e) {
              return new s(e);
            };
          },
        60511(e, t, n) {
            "use strict";
        
            var r = n(60788);
            var i = TypeError;
            e.exports = function (e) {
              if (r(e)) {
                throw new i("The method doesn't accept regular expressions");
              }
              return e;
            };
          },
        44213(e, t, n) {
            "use strict";
        
            var r = n(43724);
            var i = n(79504);
            var s = n(69565);
            var a = n(79039);
            var o = n(71072);
            var h = n(33717);
            var l = n(48773);
            var d = n(48981);
            var c = n(47055);
            var u = Object.assign;
            var p = Object.defineProperty;
            var m = i([].concat);
            e.exports = !u || a(function () {
              if (r && u({
                b: 1
              }, u(p({}, "a", {
                enumerable: true,
                get: function () {
                  p(this, "b", {
                    value: 3,
                    enumerable: false
                  });
                }
              }), {
                b: 2
              })).b !== 1) {
                return true;
              }
              var e = {};
              var t = {};
              var n = Symbol("assign detection");
              var i = "abcdefghijklmnopqrst";
              e[n] = 7;
              i.split("").forEach(function (e) {
                t[e] = e;
              });
              return u({}, e)[n] !== 7 || o(u({}, t)).join("") !== i;
            }) ? function (e, t) {
              var n = d(e);
              for (var i = arguments.length, a = 1, u = h.f, p = l.f; i > a;) {
                var f;
                var _ = c(arguments[a++]);
                var v = u ? m(o(_), u(_)) : o(_);
                for (var y = v.length, g = 0; y > g;) {
                  f = v[g++];
                  if (!r || !!s(p, _, f)) {
                    n[f] = _[f];
                  }
                }
              }
              return n;
            } : u;
          },
        2360(e, t, n) {
            "use strict";
        
            var r;
            var i = n(28551);
            var s = n(96801);
            var a = n(88727);
            var o = n(30421);
            var h = n(20397);
            var l = n(4055);
            var d = n(66119);
            var c = "prototype";
            var u = "script";
            var p = d("IE_PROTO");
            function m() {}
            function f(e) {
              return "<" + u + ">" + e + "</" + u + ">";
            }
            function _(e) {
              e.write(f(""));
              e.close();
              var t = e.parentWindow.Object;
              e = null;
              return t;
            }
            function v() {
              try {
                r = new ActiveXObject("htmlfile");
              } catch (e) {}
              var e;
              var t;
              var n;
              v = typeof document != "undefined" ? document.domain && r ? _(r) : (t = l("iframe"), n = "java" + u + ":", t.style.display = "none", h.appendChild(t), t.src = String(n), (e = t.contentWindow.document).open(), e.write(f("document.F=Object")), e.close(), e.F) : _(r);
              for (var i = a.length; i--;) {
                delete v[c][a[i]];
              }
              return v();
            }
            o[p] = true;
            e.exports = Object.create || function (e, t) {
              var n;
              if (e !== null) {
                m[c] = i(e);
                n = new m();
                m[c] = null;
                n[p] = e;
              } else {
                n = v();
              }
              if (t === undefined) {
                return n;
              } else {
                return s.f(n, t);
              }
            };
          },
        96801(e, t, n) {
            "use strict";
        
            var r = n(43724);
            var i = n(48686);
            var s = n(24913);
            var a = n(28551);
            var o = n(25397);
            var h = n(71072);
            t.f = r && !i ? Object.defineProperties : function (e, t) {
              a(e);
              var n;
              var r = o(t);
              var i = h(t);
              for (var l = i.length, d = 0; l > d;) {
                s.f(e, n = i[d++], r[n]);
              }
              return e;
            };
          },
        24913(e, t, n) {
            "use strict";
        
            var r = n(43724);
            var i = n(35917);
            var s = n(48686);
            var a = n(28551);
            var o = n(56969);
            var h = TypeError;
            var l = Object.defineProperty;
            var d = Object.getOwnPropertyDescriptor;
            var c = "enumerable";
            var u = "configurable";
            var p = "writable";
            t.f = r ? s ? function (e, t, n) {
              a(e);
              t = o(t);
              a(n);
              if (typeof e == "function" && t === "prototype" && "value" in n && p in n && !n[p]) {
                var r = d(e, t);
                if (r && r[p]) {
                  e[t] = n.value;
                  n = {
                    configurable: u in n ? n[u] : r[u],
                    enumerable: c in n ? n[c] : r[c],
                    writable: false
                  };
                }
              }
              return l(e, t, n);
            } : l : function (e, t, n) {
              a(e);
              t = o(t);
              a(n);
              if (i) {
                try {
                  return l(e, t, n);
                } catch (e) {}
              }
              if ("get" in n || "set" in n) {
                throw new h("Accessors not supported");
              }
              if ("value" in n) {
                e[t] = n.value;
              }
              return e;
            };
          },
        77347(e, t, n) {
            "use strict";
        
            var r = n(43724);
            var i = n(69565);
            var s = n(48773);
            var a = n(6980);
            var o = n(25397);
            var h = n(56969);
            var l = n(39297);
            var d = n(35917);
            var c = Object.getOwnPropertyDescriptor;
            t.f = r ? c : function (e, t) {
              e = o(e);
              t = h(t);
              if (d) {
                try {
                  return c(e, t);
                } catch (e) {}
              }
              if (l(e, t)) {
                return a(!i(s.f, e, t), e[t]);
              }
            };
          },
        10298(e, t, n) {
            "use strict";
        
            var r = n(22195);
            var i = n(25397);
            var s = n(38480).f;
            var a = n(67680);
            var o = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
            e.exports.f = function (e) {
              if (o && r(e) === "Window") {
                return function (e) {
                  try {
                    return s(e);
                  } catch (e) {
                    return a(o);
                  }
                }(e);
              } else {
                return s(i(e));
              }
            };
          },
        38480(e, t, n) {
            "use strict";
        
            var r = n(61828);
            var i = n(88727).concat("length", "prototype");
            t.f = Object.getOwnPropertyNames || function (e) {
              return r(e, i);
            };
          }
    });
})();
