(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        33717(e, t) {
            "use strict";
        
            t.f = Object.getOwnPropertySymbols;
          },
        42787(e, t, n) {
            "use strict";
        
            var r = n(39297);
            var i = n(94901);
            var s = n(48981);
            var a = n(66119);
            var o = n(12211);
            var h = a("IE_PROTO");
            var l = Object;
            var d = l.prototype;
            e.exports = o ? l.getPrototypeOf : function (e) {
              var t = s(e);
              if (r(t, h)) {
                return t[h];
              }
              var n = t.constructor;
              if (i(n) && t instanceof n) {
                return n.prototype;
              } else if (t instanceof l) {
                return d;
              } else {
                return null;
              }
            };
          },
        34124(e, t, n) {
            "use strict";
        
            var r = n(79039);
            var i = n(20034);
            var s = n(22195);
            var a = n(15652);
            var o = Object.isExtensible;
            var h = r(function () {
              o(1);
            });
            e.exports = h || a ? function (e) {
              return !!i(e) && (!a || s(e) !== "ArrayBuffer") && (!o || o(e));
            } : o;
          },
        1625(e, t, n) {
            "use strict";
        
            var r = n(79504);
            e.exports = r({}.isPrototypeOf);
          },
        61828(e, t, n) {
            "use strict";
        
            var r = n(79504);
            var i = n(39297);
            var s = n(25397);
            var a = n(19617).q;
            var o = n(30421);
            var h = r([].push);
            e.exports = function (e, t) {
              var n;
              var r = s(e);
              var l = 0;
              var d = [];
              for (n in r) {
                if (!i(o, n) && i(r, n)) {
                  h(d, n);
                }
              }
              while (t.length > l) {
                if (i(r, n = t[l++])) {
                  if (!~a(d, n)) {
                    h(d, n);
                  }
                }
              }
              return d;
            };
          },
        71072(e, t, n) {
            "use strict";
        
            var r = n(61828);
            var i = n(88727);
            e.exports = Object.keys || function (e) {
              return r(e, i);
            };
          },
        48773(e, t) {
            "use strict";
        
            var n = {}.propertyIsEnumerable;
            var r = Object.getOwnPropertyDescriptor;
            var i = r && !n.call({
              1: 2
            }, 1);
            t.f = i ? function (e) {
              var t = r(this, e);
              return !!t && t.enumerable;
            } : n;
          },
        52967(e, t, n) {
            "use strict";
        
            var r = n(46706);
            var i = n(20034);
            var s = n(67750);
            var a = n(73506);
            e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
              var e;
              var t = false;
              var n = {};
              try {
                (e = r(Object.prototype, "__proto__", "set"))(n, []);
                t = n instanceof Array;
              } catch (e) {}
              return function (n, r) {
                s(n);
                a(r);
                if (i(n)) {
                  if (t) {
                    e(n, r);
                  } else {
                    n.__proto__ = r;
                  }
                  return n;
                } else {
                  return n;
                }
              };
            }() : undefined);
          },
        32357(e, t, n) {
            "use strict";
        
            var r = n(43724);
            var i = n(79039);
            var s = n(79504);
            var a = n(42787);
            var o = n(71072);
            var h = n(25397);
            var l = s(n(48773).f);
            var d = s([].push);
            var c = r && i(function () {
              var e = Object.create(null);
              e[2] = 2;
              return !l(e, 2);
            });
            function u(e) {
              return function (t) {
                var n;
                var i = h(t);
                var s = o(i);
                var u = c && a(i) === null;
                for (var p = s.length, m = 0, f = []; p > m;) {
                  n = s[m++];
                  if (!r || !!(u ? n in i : l(i, n))) {
                    d(f, e ? [n, i[n]] : i[n]);
                  }
                }
                return f;
              };
            }
            e.exports = {
              ...void u(true),
              z: u(false)
            };
          },
        53179(e, t, n) {
            "use strict";
        
            var r = n(92140);
            var i = n(36955);
            e.exports = r ? {}.toString : function () {
              return "[object " + i(this) + "]";
            };
          },
        84270(e, t, n) {
            "use strict";
        
            var r = n(69565);
            var i = n(94901);
            var s = n(20034);
            var a = TypeError;
            e.exports = function (e, t) {
              var n;
              var o;
              if (t === "string" && i(n = e.toString) && !s(o = r(n, e))) {
                return o;
              }
              if (i(n = e.valueOf) && !s(o = r(n, e))) {
                return o;
              }
              if (t !== "string" && i(n = e.toString) && !s(o = r(n, e))) {
                return o;
              }
              throw new a("Can't convert object to primitive value");
            };
          },
        35031(e, t, n) {
            "use strict";
        
            var r = n(97751);
            var i = n(79504);
            var s = n(38480);
            var a = n(33717);
            var o = n(28551);
            var h = i([].concat);
            e.exports = r("Reflect", "ownKeys") || function (e) {
              var t = s.f(o(e));
              var n = a.f;
              if (n) {
                return h(t, n(e));
              } else {
                return t;
              }
            };
          },
        616(e, t, n) {
            "use strict";
        
            var r = n(79504);
            var i = n(39297);
            var s = SyntaxError;
            var a = parseInt;
            var o = String.fromCharCode;
            var h = r("".charAt);
            var l = r("".slice);
            var d = r(/./.exec);
            var c = {
              "\\\"": "\"",
              "\\\\": "\\",
              "\\/": "/",
              "\\b": "\b",
              "\\f": "\f",
              "\\n": "\n",
              "\\r": "\r",
              "\\t": "\t"
            };
            var u = /^[\da-f]{4}$/i;
            var p = /^[\u0000-\u001F]$/;
            e.exports = function (e, t) {
              var n = true;
              var r = "";
              for (; t < e.length;) {
                var m = h(e, t);
                if (m === "\\") {
                  var f = l(e, t, t + 2);
                  if (i(c, f)) {
                    r += c[f];
                    t += 2;
                  } else {
                    if (f !== "\\u") {
                      throw new s("Unknown escape sequence: \"" + f + "\"");
                    }
                    var _ = l(e, t += 2, t + 4);
                    if (!d(u, _)) {
                      throw new s("Bad Unicode escape at: " + t);
                    }
                    r += o(a(_, 16));
                    t += 4;
                  }
                } else {
                  if (m === "\"") {
                    n = false;
                    t++;
                    break;
                  }
                  if (d(p, m)) {
                    throw new s("Bad control character in string literal at: " + t);
                  }
                  r += m;
                  t++;
                }
              }
              if (n) {
                throw new s("Unterminated string at: " + t);
              }
              return {
                value: r,
                end: t
              };
            };
          },
        19167(e, t, n) {
            "use strict";
        
            var r = n(44576);
            e.exports = r;
          },
        1103(e) {
            "use strict";
        
            e.exports = function (e) {
              try {
                return {
                  error: false,
                  value: e()
                };
              } catch (e) {
                return {
                  error: true,
                  value: e
                };
              }
            };
          },
        10916(e, t, n) {
            "use strict";
        
            var r = n(44576);
            var i = n(80550);
            var s = n(94901);
            var a = n(92796);
            var o = n(33706);
            var h = n(78227);
            var l = n(84215);
            var d = n(96395);
            var c = n(39519);
            var u = i && i.prototype;
            var p = h("species");
            var m = false;
            var f = s(r.PromiseRejectionEvent);
            var _ = a("Promise", function () {
              var e = o(i);
              var t = e !== String(i);
              if (!t && c === 66) {
                return true;
              }
              if (d && (!u.catch || !u.finally)) {
                return true;
              }
              if (!c || c < 51 || !/native code/.test(e)) {
                var n = new i(function (e) {
                  e(1);
                });
                function r(e) {
                  e(function () {}, function () {});
                }
                (n.constructor = {})[p] = r;
                if (!(m = n.then(function () {}) instanceof r)) {
                  return true;
                }
              }
              return !t && (l === "BROWSER" || l === "DENO") && !f;
            });
            e.exports = {
              CONSTRUCTOR: _,
              REJECTION_EVENT: f,
              SUBCLASSING: m
            };
          },
        80550(e, t, n) {
            "use strict";
        
            var r = n(44576);
            e.exports = r.Promise;
          },
        93438(e, t, n) {
            "use strict";
        
            var r = n(28551);
            var i = n(20034);
            var s = n(36043);
            e.exports = function (e, t) {
              r(e);
              if (i(t) && t.constructor === e) {
                return t;
              }
              var n = s.f(e);
              (0, n.resolve)(t);
              return n.promise;
            };
          },
        90537(e, t, n) {
            "use strict";
        
            var r = n(80550);
            var i = n(84428);
            var s = n(10916).CONSTRUCTOR;
            e.exports = s || !i(function (e) {
              r.all(e).then(undefined, function () {});
            });
          },
        11056(e, t, n) {
            "use strict";
        
            var r = n(24913).f;
            e.exports = function (e, t, n) {
              if (!(n in e)) {
                r(e, n, {
                  configurable: true,
                  get: function () {
                    return t[n];
                  },
                  set: function (e) {
                    t[n] = e;
                  }
                });
              }
            };
          },
        18265(e) {
            "use strict";
        
            function t() {
              this.head = null;
              this.tail = null;
            }
            t.prototype = {
              add: function (e) {
                var t = {
                  item: e,
                  next: null
                };
                var n = this.tail;
                if (n) {
                  n.next = t;
                } else {
                  this.head = t;
                }
                this.tail = t;
              },
              get: function () {
                var e = this.head;
                if (e) {
                  if ((this.head = e.next) === null) {
                    this.tail = null;
                  }
                  return e.item;
                }
              }
            };
            e.exports = t;
          },
        56682(e, t, n) {
            "use strict";
        
            var r = n(69565);
            var i = n(28551);
            var s = n(94901);
            var a = n(22195);
            var o = n(57323);
            var h = TypeError;
            e.exports = function (e, t) {
              var n = e.exec;
              if (s(n)) {
                var l = r(n, e, t);
                if (l !== null) {
                  i(l);
                }
                return l;
              }
              if (a(e) === "RegExp") {
                return r(o, e, t);
              }
              throw new h("RegExp#exec called on incompatible receiver");
            };
          },
        57323(e, t, n) {
            "use strict";
        
            var r;
            var i;
            var s = n(69565);
            var a = n(79504);
            var o = n(655);
            var h = n(67979);
            var l = n(58429);
            var d = n(25745);
            var c = n(2360);
            var u = n(91181).get;
            var p = n(83635);
            var m = n(18814);
            var f = d("native-string-replace", String.prototype.replace);
            var _ = RegExp.prototype.exec;
            var v = _;
            var y = a("".charAt);
            var g = a("".indexOf);
            var w = a("".replace);
            var x = a("".slice);
            i = /b*/g;
            s(_, r = /a/, "a");
            s(_, i, "a");
            var b = r.lastIndex !== 0 || i.lastIndex !== 0;
            var T = l.BROKEN_CARET;
            var A = /()??/.exec("")[1] !== undefined;
            function C(e, t) {
              var n = e.groups = c(null);
              for (var r = 0; r < t.length; r++) {
                var i = t[r];
                n[i[0]] = e[i[1]];
              }
            }
            if (b || A || T || p || m) {
              v = function (e) {
                var t;
                var n;
                var r;
                var i = this;
                var a = u(i);
                var l = o(e);
                var d = a.raw;
                if (d) {
                  d.lastIndex = i.lastIndex;
                  t = s(v, d, l);
                  i.lastIndex = d.lastIndex;
                  if (t && a.groups) {
                    C(t, a.groups);
                  }
                  return t;
                }
                var c = a.groups;
                var p = T && i.sticky;
                var m = s(h, i);
                var S = i.source;
                var E = 0;
                var O = l;
                if (p) {
                  m = w(m, "y", "");
                  if (g(m, "g") === -1) {
                    m += "g";
                  }
                  O = x(l, i.lastIndex);
                  var k = i.lastIndex > 0 && y(l, i.lastIndex - 1);
                  if (i.lastIndex > 0 && (!i.multiline || i.multiline && k !== "\n" && k !== "\r" && k !== "\u2028" && k !== "\u2029")) {
                    S = "(?: (?:" + S + "))";
                    O = " " + O;
                    E++;
                  }
                  n = new RegExp("^(?:" + S + ")", m);
                }
                if (A) {
                  n = new RegExp("^" + S + "$(?!\\s)", m);
                }
                if (b) {
                  r = i.lastIndex;
                }
                var P = s(_, p ? n : i, O);
                if (p) {
                  if (P) {
                    P.input = l;
                    P[0] = x(P[0], E);
                    P.index = i.lastIndex;
                    i.lastIndex += P[0].length;
                  } else {
                    i.lastIndex = 0;
                  }
                } else if (b && P) {
                  i.lastIndex = i.global ? P.index + P[0].length : r;
                }
                if (A && P && P.length > 1) {
                  s(f, P[0], n, function () {
                    for (var e = 1; e < arguments.length - 2; e++) {
                      if (arguments[e] === undefined) {
                        P[e] = undefined;
                      }
                    }
                  });
                }
                if (P && c) {
                  C(P, c);
                }
                return P;
              };
            }
            e.exports = v;
          },
        65213(e, t, n) {
            "use strict";
        
            var r = n(44576);
            var i = n(79039);
            var s = r.RegExp;
            var a = !i(function () {
              var e = true;
              try {
                s(".", "d");
              } catch (t) {
                e = false;
              }
              var t = {};
              var n = "";
              var r = e ? "dgimsy" : "gimsy";
              function i(e, r) {
                Object.defineProperty(t, e, {
                  get: function () {
                    n += r;
                    return true;
                  }
                });
              }
              var a = {
                dotAll: "s",
                global: "g",
                ignoreCase: "i",
                multiline: "m",
                sticky: "y"
              };
              if (e) {
                a.hasIndices = "d";
              }
              for (var o in a) {
                i(o, a[o]);
              }
              return Object.getOwnPropertyDescriptor(s.prototype, "flags").get.call(t) !== r || n !== r;
            });
            e.exports = {
              correct: a
            };
          },
        67979(e, t, n) {
            "use strict";
        
            var r = n(28551);
            e.exports = function () {
              var e = r(this);
              var t = "";
              if (e.hasIndices) {
                t += "d";
              }
              if (e.global) {
                t += "g";
              }
              if (e.ignoreCase) {
                t += "i";
              }
              if (e.multiline) {
                t += "m";
              }
              if (e.dotAll) {
                t += "s";
              }
              if (e.unicode) {
                t += "u";
              }
              if (e.unicodeSets) {
                t += "v";
              }
              if (e.sticky) {
                t += "y";
              }
              return t;
            };
          },
        61034(e, t, n) {
            "use strict";
        
            var r = n(69565);
            var i = n(39297);
            var s = n(1625);
            var a = n(65213);
            var o = n(67979);
            var h = RegExp.prototype;
            e.exports = a.correct ? function (e) {
              return e.flags;
            } : function (e) {
              if (a.correct || !s(h, e) || i(e, "flags")) {
                return e.flags;
              } else {
                return r(o, e);
              }
            };
          },
        58429(e, t, n) {
            "use strict";
        
            var r = n(79039);
            var i = n(44576).RegExp;
            var s = r(function () {
              var e = i("a", "y");
              e.lastIndex = 2;
              return e.exec("abcd") !== null;
            });
            var a = s || r(function () {
              return !i("a", "y").sticky;
            });
            var o = s || r(function () {
              var e = i("^r", "gy");
              e.lastIndex = 2;
              return e.exec("str") !== null;
            });
            e.exports = {
              BROKEN_CARET: o,
              MISSED_STICKY: a,
              UNSUPPORTED_Y: s
            };
          },
        83635(e, t, n) {
            "use strict";
        
            var r = n(79039);
            var i = n(44576).RegExp;
            e.exports = r(function () {
              var e = i(".", "s");
              return !e.dotAll || !e.test("\n") || e.flags !== "s";
            });
          },
        18814(e, t, n) {
            "use strict";
        
            var r = n(79039);
            var i = n(44576).RegExp;
            e.exports = r(function () {
              var e = i("(?<a>b)", "g");
              return e.exec("b").groups.a !== "b" || "b".replace(e, "$<a>c") !== "bc";
            });
          },
        67750(e, t, n) {
            "use strict";
        
            var r = n(64117);
            var i = TypeError;
            e.exports = function (e) {
              if (r(e)) {
                throw new i("Can't call method on " + e);
              }
              return e;
            };
          },
        93389(e, t, n) {
            "use strict";
        
            var r = n(44576);
            var i = n(43724);
            var s = Object.getOwnPropertyDescriptor;
            e.exports = function (e) {
              if (!i) {
                return r[e];
              }
              var t = s(r, e);
              return t && t.value;
            };
          },
        3470(e) {
            "use strict";
        
            e.exports = Object.is || function (e, t) {
              if (e === t) {
                return e !== 0 || 1 / e == 1 / t;
              } else {
                return e != e && t != t;
              }
            };
          },
        87633(e, t, n) {
            "use strict";
        
            var r = n(97751);
            var i = n(62106);
            var s = n(78227);
            var a = n(43724);
            var o = s("species");
            e.exports = function (e) {
              var t = r(e);
              if (a && t && !t[o]) {
                i(t, o, {
                  configurable: true,
                  get: function () {
                    return this;
                  }
                });
              }
            };
          },
        10687(e, t, n) {
            "use strict";
        
            var r = n(24913).f;
            var i = n(39297);
            var s = n(78227)("toStringTag");
            e.exports = function (e, t, n) {
              if (e && !n) {
                e = e.prototype;
              }
              if (e && !i(e, s)) {
                r(e, s, {
                  configurable: true,
                  value: t
                });
              }
            };
          },
        66119(e, t, n) {
            "use strict";
        
            var r = n(25745);
            var i = n(33392);
            var s = r("keys");
            e.exports = function (e) {
              return s[e] ||= i(e);
            };
          },
        77629(e, t, n) {
            "use strict";
        
            var r = n(96395);
            var i = n(44576);
            var s = n(39433);
            var a = "__core-js_shared__";
            var o = e.exports = i[a] || s(a, {});
            (o.versions ||= []).push({
              version: "3.50.0",
              mode: r ? "pure" : "global",
              copyright: "© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.",
              license: "https://github.com/zloirock/core-js/blob/v3.50.0/LICENSE",
              source: "https://github.com/zloirock/core-js"
            });
          },
        25745(e, t, n) {
            "use strict";
        
            var r = n(77629);
            var i = Object.create || Object;
            e.exports = function (e, t) {
              return r[e] ||= t || i(null);
            };
          },
        2293(e, t, n) {
            "use strict";
        
            var r = n(28551);
            var i = n(35548);
            var s = n(64117);
            var a = n(78227)("species");
            e.exports = function (e, t) {
              var n;
              var o = r(e).constructor;
              if (o === undefined || s(n = r(o)[a])) {
                return t;
              } else {
                return i(n);
              }
            };
          },
        23061(e, t, n) {
            "use strict";
        
            var r = n(79039);
            e.exports = function (e) {
              return r(function () {
                var t = ""[e]("\"");
                return t !== t.toLowerCase() || t.split("\"").length > 3;
              });
            };
          },
        68183(e, t, n) {
            "use strict";
        
            var r = n(79504);
            var i = n(91291);
            var s = n(655);
            var a = n(67750);
            var o = r("".charAt);
            var h = r("".charCodeAt);
            var l = r("".slice);
            function d(e) {
              return function (t, n) {
                var r;
                var d;
                var c = s(a(t));
                var u = i(n);
                var p = c.length;
                if (u < 0 || u >= p) {
                  if (e) {
                    return "";
                  } else {
                    return undefined;
                  }
                } else if ((r = h(c, u)) < 55296 || r > 56319 || u + 1 === p || (d = h(c, u + 1)) < 56320 || d > 57343) {
                  if (e) {
                    return o(c, u);
                  } else {
                    return r;
                  }
                } else if (e) {
                  return l(c, u, u + 2);
                } else {
                  return d - 56320 + (r - 55296 << 10) + 65536;
                }
              };
            }
            e.exports = {
              L: d(false),
              o: d(true)
            };
          },
        83063(e, t, n) {
            "use strict";
        
            var r = n(82839);
            e.exports = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(r);
          }
    });
})();
