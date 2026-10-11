(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        3717(e, t, n) {
            "use strict";
        
            var r = n(79504);
            var i = 2147483647;
            var s = /[^\0-\u007E]/;
            var a = /[.\u3002\uFF0E\uFF61]/g;
            var o = "Overflow: input needs wider integers to process";
            var h = RangeError;
            var l = r(a.exec);
            var d = Math.floor;
            var c = String.fromCharCode;
            var u = r("".charCodeAt);
            var p = r([].join);
            var m = r([].push);
            var f = r("".replace);
            var _ = r("".split);
            var v = r("".toLowerCase);
            function y(e) {
              return e + 22 + (e < 26) * 75;
            }
            function g(e, t, n) {
              var r = 0;
              e = n ? d(e / 700) : e >> 1;
              e += d(e / t);
              while (e > 455) {
                e = d(e / 35);
                r += 36;
              }
              return d(r + e * 36 / (e + 38));
            }
            function w(e) {
              var t = [];
              e = function (e) {
                for (var t = [], n = 0, r = e.length; n < r;) {
                  var i = u(e, n++);
                  if (i >= 55296 && i <= 56319 && n < r) {
                    var s = u(e, n++);
                    if ((s & 64512) == 56320) {
                      m(t, ((i & 1023) << 10) + (s & 1023) + 65536);
                    } else {
                      m(t, i);
                      n--;
                    }
                  } else {
                    m(t, i);
                  }
                }
                return t;
              }(e);
              var n;
              var r;
              var s = e.length;
              var a = 128;
              var l = 0;
              var f = 72;
              for (n = 0; n < e.length; n++) {
                if ((r = e[n]) < 128) {
                  m(t, c(r));
                }
              }
              var _ = t.length;
              var v = _;
              for (_ && m(t, "-"); v < s;) {
                var w = i;
                for (n = 0; n < e.length; n++) {
                  if ((r = e[n]) >= a && r < w) {
                    w = r;
                  }
                }
                var x = v + 1;
                if (w - a > d((i - l) / x)) {
                  throw new h(o);
                }
                l += (w - a) * x;
                a = w;
                n = 0;
                for (; n < e.length; n++) {
                  if ((r = e[n]) < a && ++l > i) {
                    throw new h(o);
                  }
                  if (r === a) {
                    var b = l;
                    var T = 36;
                    while (true) {
                      var A = T <= f ? 1 : T >= f + 26 ? 26 : T - f;
                      if (b < A) {
                        break;
                      }
                      var C = b - A;
                      var S = 36 - A;
                      m(t, c(y(A + C % S)));
                      b = d(C / S);
                      T += 36;
                    }
                    m(t, c(y(b)));
                    f = g(l, x, v === _);
                    l = 0;
                    v++;
                  }
                }
                l++;
                a++;
              }
              return p(t, "");
            }
            e.exports = function (e) {
              var t;
              var n;
              var r = [];
              var i = _(f(v(e), a, "."), ".");
              for (t = 0; t < i.length; t++) {
                n = i[t];
                m(r, l(s, n) ? "xn--" + w(n) : n);
              }
              return p(r, ".");
            };
          },
        72333(e, t, n) {
            "use strict";
        
            var r = n(91291);
            var i = n(655);
            var s = n(67750);
            var a = RangeError;
            var o = Math.floor;
            e.exports = function (e) {
              var t = i(s(this));
              var n = "";
              var h = r(e);
              if (h < 0 || h === Infinity) {
                throw new a("Wrong number of repetitions");
              }
              for (; h > 0; (h = o(h / 2)) && (t += t)) {
                if (h % 2) {
                  n += t;
                }
              }
              return n;
            };
          },
        60706(e, t, n) {
            "use strict";
        
            var r = n(10350).PROPER;
            var i = n(79039);
            var s = n(47452);
            e.exports = function (e) {
              return i(function () {
                return !!s[e]() || "​᠎"[e]() !== "​᠎" || r && s[e].name !== e;
              });
            };
          },
        43802(e, t, n) {
            "use strict";
        
            var r = n(79504);
            var i = n(67750);
            var s = n(655);
            var a = n(47452);
            var o = r("".replace);
            var h = RegExp("^[" + a + "]+");
            var l = RegExp("(^|[^" + a + "])[" + a + "]+$");
            function d(e) {
              return function (t) {
                var n = s(i(t));
                if (e & 1) {
                  n = o(n, h, "");
                }
                if (e & 2) {
                  n = o(n, l, "$1");
                }
                return n;
              };
            }
            e.exports = {
              ...void d(1),
              ...void d(2),
              Bq: d(3)
            };
          },
        4495(e, t, n) {
            "use strict";
        
            var r = n(39519);
            var i = n(79039);
            var s = n(44576).String;
            e.exports = !!Object.getOwnPropertySymbols && !i(function () {
              var e = Symbol("symbol detection");
              return !s(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && r && r < 41;
            });
          },
        58242(e, t, n) {
            "use strict";
        
            var r = n(69565);
            var i = n(97751);
            var s = n(78227);
            var a = n(36840);
            e.exports = function () {
              var e = i("Symbol");
              var t = e && e.prototype;
              var n = t && t.valueOf;
              var o = s("toPrimitive");
              if (t && !t[o]) {
                a(t, o, function (e) {
                  return r(n, this);
                }, {
                  arity: 1
                });
              }
            };
          },
        91296(e, t, n) {
            "use strict";
        
            var r = n(4495);
            e.exports = r && !!Symbol.for && !!Symbol.keyFor;
          },
        59225(e, t, n) {
            "use strict";
        
            var r;
            var i;
            var s;
            var a;
            var o = n(44576);
            var h = n(18745);
            var l = n(76080);
            var d = n(94901);
            var c = n(39297);
            var u = n(79039);
            var p = n(20397);
            var m = n(67680);
            var f = n(4055);
            var _ = n(22812);
            var v = n(89544);
            var y = n(16193);
            var g = o.setImmediate;
            var w = o.clearImmediate;
            var x = o.process;
            var b = o.Dispatch;
            var T = o.Function;
            var A = o.MessageChannel;
            var C = o.String;
            var S = 0;
            var E = {};
            var O = "onreadystatechange";
            u(function () {
              r = o.location;
            });
            function k(e) {
              if (c(E, e)) {
                var t = E[e];
                delete E[e];
                t();
              }
            }
            function P(e) {
              return function () {
                k(e);
              };
            }
            function M(e) {
              k(e.data);
            }
            function R(e) {
              o.postMessage(C(e), r.protocol + "//" + r.host);
            }
            if (!g || !w) {
              g = function (e) {
                _(arguments.length, 1);
                var t = d(e) ? e : T(e);
                var n = m(arguments, 1);
                E[++S] = function () {
                  h(t, undefined, n);
                };
                i(S);
                return S;
              };
              w = function (e) {
                delete E[e];
              };
              if (y) {
                i = function (e) {
                  x.nextTick(P(e));
                };
              } else if (b && b.now) {
                i = function (e) {
                  b.now(P(e));
                };
              } else if (A && !v) {
                a = (s = new A()).port2;
                s.port1.onmessage = M;
                i = l(a.postMessage, a);
              } else if (o.addEventListener && d(o.postMessage) && !o.importScripts && r && r.protocol !== "file:" && !u(R)) {
                i = R;
                o.addEventListener("message", M, false);
              } else {
                i = O in f("script") ? function (e) {
                  p.appendChild(f("script"))[O] = function () {
                    p.removeChild(this);
                    k(e);
                  };
                } : function (e) {
                  setTimeout(P(e), 0);
                };
              }
            }
            e.exports = {
              h: g
            };
          },
        31240(e, t, n) {
            "use strict";
        
            var r = n(79504);
            e.exports = r(1.1.valueOf);
          },
        35610(e, t, n) {
            "use strict";
        
            var r = n(91291);
            var i = Math.max;
            var s = Math.min;
            e.exports = function (e, t) {
              var n = r(e);
              if (n < 0) {
                return i(n + t, 0);
              } else {
                return s(n, t);
              }
            };
          },
        75854(e, t, n) {
            "use strict";
        
            var r = n(72777);
            var i = TypeError;
            e.exports = function (e) {
              var t = r(e, "number");
              if (typeof t == "number") {
                throw new i("Can't convert number to bigint");
              }
              return BigInt(t);
            };
          },
        57696(e, t, n) {
            "use strict";
        
            var r = n(91291);
            var i = n(18014);
            var s = RangeError;
            e.exports = function (e) {
              if (e === undefined) {
                return 0;
              }
              var t = r(e);
              var n = i(t);
              if (t !== n) {
                throw new s("Wrong length or index");
              }
              return n;
            };
          },
        25397(e, t, n) {
            "use strict";
        
            var r = n(47055);
            var i = n(67750);
            e.exports = function (e) {
              return r(i(e));
            };
          },
        91291(e, t, n) {
            "use strict";
        
            var r = n(80741);
            e.exports = function (e) {
              var t = +e;
              if (t != t || t === 0) {
                return 0;
              } else {
                return r(t);
              }
            };
          },
        18014(e, t, n) {
            "use strict";
        
            var r = n(91291);
            var i = Math.min;
            e.exports = function (e) {
              var t = r(e);
              if (t > 0) {
                return i(t, 9007199254740991);
              } else {
                return 0;
              }
            };
          },
        48981(e, t, n) {
            "use strict";
        
            var r = n(67750);
            var i = Object;
            e.exports = function (e) {
              return i(r(e));
            };
          },
        58229(e, t, n) {
            "use strict";
        
            var r = n(99590);
            var i = RangeError;
            e.exports = function (e, t) {
              var n = r(e);
              if (n % t) {
                throw new i("Wrong offset");
              }
              return n;
            };
          },
        99590(e, t, n) {
            "use strict";
        
            var r = n(91291);
            var i = RangeError;
            e.exports = function (e) {
              var t = r(e);
              if (t < 0) {
                throw new i("The argument can't be less than 0");
              }
              return t;
            };
          },
        72777(e, t, n) {
            "use strict";
        
            var r = n(69565);
            var i = n(20034);
            var s = n(10757);
            var a = n(55966);
            var o = n(84270);
            var h = n(78227);
            var l = TypeError;
            var d = h("toPrimitive");
            e.exports = function (e, t) {
              if (!i(e) || s(e)) {
                return e;
              }
              var n;
              var h = a(e, d);
              if (h) {
                if (t === undefined) {
                  t = "default";
                }
                n = r(h, e, t);
                if (!i(n) || s(n)) {
                  return n;
                }
                throw new l("Can't convert object to primitive value");
              }
              if (t === undefined) {
                t = "number";
              }
              return o(e, t);
            };
          },
        56969(e, t, n) {
            "use strict";
        
            var r = n(72777);
            var i = n(10757);
            e.exports = function (e) {
              var t = r(e, "string");
              if (i(t)) {
                return t;
              } else {
                return t + "";
              }
            };
          },
        92140(e, t, n) {
            "use strict";
        
            var r = {
              [n(78227)("toStringTag")]: "z"
            };
            e.exports = String(r) === "[object z]";
          },
        655(e, t, n) {
            "use strict";
        
            var r = n(36955);
            var i = String;
            e.exports = function (e) {
              if (r(e) === "Symbol") {
                throw new TypeError("Cannot convert a Symbol value to a string");
              }
              return i(e);
            };
          },
        58319(e) {
            "use strict";
        
            var t = Math.floor;
            e.exports = function (e) {
              var n = +e;
              if (n != n || n <= 0) {
                return 0;
              }
              if (n >= 255) {
                return 255;
              }
              var r = t(n);
              if (r + 0.5 < n) {
                return r + 1;
              } else if (n < r + 0.5 || r % 2 == 0) {
                return r;
              } else {
                return r + 1;
              }
            };
          },
        16823(e) {
            "use strict";
        
            var t = String;
            e.exports = function (e) {
              try {
                return t(e);
              } catch (e) {
                return "Object";
              }
            };
          },
        15823(e, t, n) {
            "use strict";
        
            var r = n(46518);
            var i = n(44576);
            var s = n(69565);
            var a = n(43724);
            var o = n(72805);
            var h = n(94644);
            var l = n(66346);
            var d = n(90679);
            var c = n(6980);
            var u = n(66699);
            var p = n(2087);
            var m = n(57696);
            var f = n(58229);
            var _ = n(58319);
            var v = n(56969);
            var y = n(39297);
            var g = n(36955);
            var w = n(20034);
            var x = n(10757);
            var b = n(2360);
            var T = n(1625);
            var A = n(52967);
            var C = n(38480).f;
            var S = n(43251);
            var E = n(59213).forEach;
            var O = n(87633);
            var k = n(62106);
            var P = n(24913);
            var M = n(77347);
            var R = n(35370);
            var I = n(91181);
            var L = n(23167);
            var j = I.get;
            var B = I.set;
            var D = I.enforce;
            var F = P.f;
            var N = M.f;
            var G = i.RangeError;
            var U = l.ArrayBuffer;
            var V = U.prototype;
            var H = l.DataView;
            var z = h.NATIVE_ARRAY_BUFFER_VIEWS;
            var W = h.TYPED_ARRAY_TAG;
            var X = h.TypedArray;
            var Y = h.TypedArrayPrototype;
            var q = h.isTypedArray;
            var J = "BYTES_PER_ELEMENT";
            var K = "Wrong length";
            function Z(e, t) {
              k(e, t, {
                configurable: true,
                get: function () {
                  return j(this)[t];
                }
              });
            }
            function $(e) {
              var t;
              return T(V, e) || (t = g(e)) === "ArrayBuffer" || t === "SharedArrayBuffer";
            }
            function Q(e, t) {
              return q(e) && !x(t) && t in e && p(+t) && t >= 0;
            }
            function ee(e, t) {
              t = v(t);
              if (Q(e, t)) {
                return c(2, e[t]);
              } else {
                return N(e, t);
              }
            }
            function te(e, t, n) {
              t = v(t);
              if (!Q(e, t) || !w(n) || !y(n, "value") || y(n, "get") || y(n, "set") || n.configurable || y(n, "writable") && !n.writable || y(n, "enumerable") && !n.enumerable) {
                return F(e, t, n);
              } else {
                e[t] = n.value;
                return e;
              }
            }
            if (a) {
              if (!z) {
                M.f = ee;
                P.f = te;
                Z(Y, "buffer");
                Z(Y, "byteOffset");
                Z(Y, "byteLength");
                Z(Y, "length");
              }
              r({
                target: "Object",
                stat: true,
                forced: !z
              }, {
                getOwnPropertyDescriptor: ee,
                defineProperty: te
              });
              e.exports = function (e, t, n) {
                var a = e.match(/\d+/)[0] / 8;
                var h = e + (n ? "Clamped" : "") + "Array";
                var l = "get" + e;
                var c = "set" + e;
                var p = i[h];
                var v = p;
                var y = v && v.prototype;
                var g = {};
                function x(e, t) {
                  F(e, t, {
                    get: function () {
                      return function (e, t) {
                        var n = j(e);
                        return n.view[l](t * a + n.byteOffset, true);
                      }(this, t);
                    },
                    set: function (e) {
                      return function (e, t, r) {
                        var i = j(e);
                        i.view[c](t * a + i.byteOffset, n ? _(r) : r, true);
                      }(this, t, e);
                    },
                    enumerable: true
                  });
                }
                if (z) {
                  if (o) {
                    v = t(function (e, t, n, r) {
                      d(e, y);
                      return L(w(t) ? $(t) ? r !== undefined ? new p(t, f(n, a), r) : n !== undefined ? new p(t, f(n, a)) : new p(t) : q(t) ? R(v, t) : s(S, v, t) : new p(m(t)), e, v);
                    });
                    if (A) {
                      A(v, X);
                    }
                    E(C(p), function (e) {
                      if (!(e in v)) {
                        u(v, e, p[e]);
                      }
                    });
                    v.prototype = y;
                  }
                } else {
                  v = t(function (e, t, n, r) {
                    d(e, y);
                    var i;
                    var o;
                    var h;
                    var l = 0;
                    var c = 0;
                    if (w(t)) {
                      if (!$(t)) {
                        if (q(t)) {
                          return R(v, t);
                        } else {
                          return s(S, v, t);
                        }
                      }
                      i = t;
                      c = f(n, a);
                      var u = t.byteLength;
                      if (r === undefined) {
                        if (u % a) {
                          throw new G(K);
                        }
                        if ((o = u - c) < 0) {
                          throw new G(K);
                        }
                      } else if ((o = m(r) * a) + c > u) {
                        throw new G(K);
                      }
                      h = o / a;
                    } else {
                      h = m(t);
                      i = new U(o = h * a);
                    }
                    for (B(e, {
                      buffer: i,
                      byteOffset: c,
                      byteLength: o,
                      length: h,
                      view: new H(i)
                    }); l < h;) {
                      x(e, l++);
                    }
                  });
                  if (A) {
                    A(v, X);
                  }
                  y = v.prototype = b(Y);
                }
                if (y.constructor !== v) {
                  u(y, "constructor", v);
                }
                D(y).TypedArrayConstructor = v;
                if (W) {
                  u(y, W, h);
                }
                var T = v !== p;
                g[h] = v;
                r({
                  global: true,
                  constructor: true,
                  forced: T,
                  sham: !z
                }, g);
                if (!(J in v)) {
                  u(v, J, a);
                }
                if (!(J in y)) {
                  u(y, J, a);
                }
                O(h);
              };
            } else {
              e.exports = function () {};
            }
          },
        72805(e, t, n) {
            "use strict";
        
            var r = n(44576);
            var i = n(79039);
            var s = n(84428);
            var a = n(94644).NATIVE_ARRAY_BUFFER_VIEWS;
            var o = r.ArrayBuffer;
            var h = r.Int8Array;
            e.exports = !a || !i(function () {
              h(1);
            }) || !i(function () {
              new h(-1);
            }) || !s(function (e) {
              new h();
              new h(null);
              new h(1.5);
              new h(e);
            }, true) || i(function () {
              return new h(new o(2), 1, undefined).length !== 1;
            });
          },
        29948(e, t, n) {
            "use strict";
        
            var r = n(35370);
            var i = n(94644).getTypedArrayConstructor;
            e.exports = function (e, t) {
              return r(i(e), t);
            };
          },
        43251(e, t, n) {
            "use strict";
        
            var r = n(76080);
            var i = n(69565);
            var s = n(79306);
            var a = n(35548);
            var o = n(48981);
            var h = n(26198);
            var l = n(18563);
            var d = n(63085);
            var c = n(44209);
            var u = n(18727);
            var p = n(94644).aTypedArrayConstructor;
            var m = n(75854);
            e.exports = function (e) {
              var t = a(this);
              var n = arguments.length;
              var f = n > 1 ? arguments[1] : undefined;
              var _ = f !== undefined;
              if (_) {
                s(f);
              }
              var v;
              var y;
              var g;
              var w;
              var x;
              var b;
              var T;
              var A;
              var C = o(e);
              var S = d(C);
              if (S && !c(S)) {
                A = (T = l(C, S)).next;
                C = [];
                while (!(b = i(A, T)).done) {
                  C.push(b.value);
                }
              }
              if (_ && n > 2) {
                f = r(f, arguments[2]);
              }
              y = h(C);
              g = new (p(t))(y);
              w = u(g);
              v = 0;
              for (; y > v; v++) {
                x = _ ? f(C[v], v) : C[v];
                g[v] = w ? m(x) : +x;
              }
              return g;
            };
          },
        33392(e, t, n) {
            "use strict";
        
            var r = n(79504);
            var i = 0;
            var s = Math.random();
            var a = r(1.1.toString);
            e.exports = function (e) {
              return "Symbol(" + (e === undefined ? "" : e) + ")_" + a(++i + s, 36);
            };
          },
        67416(e, t, n) {
            "use strict";
        
            var r = n(79039);
            var i = n(78227);
            var s = n(43724);
            var a = n(96395);
            var o = i("iterator");
            e.exports = !r(function () {
              var e = new URL("b?a=1&b=2&c=3", "https://a");
              var t = e.searchParams;
              var n = new URLSearchParams("a=1&a=2&b=3");
              var r = "";
              e.pathname = "c%20d";
              t.forEach(function (e, n) {
                t.delete("b");
                r += n + e;
              });
              n.delete("a", 2);
              n.delete("b", undefined);
              return a && (!e.toJSON || !n.has("a", 1) || n.has("a", 2) || !n.has("a", undefined) || n.has("b")) || !t.size && (a || !s) || !t.sort || e.href !== "https://a/c%20d?a=1&c=3" || t.get("c") !== "3" || String(new URLSearchParams("?a=1")) !== "a=1" || !t[o] || new URL("https://a@b").username !== "a" || new URLSearchParams(new URLSearchParams("a=b")).get("a") !== "b" || new URL("https://тест").host !== "xn--e1aybc" || new URL("https://a#б").hash !== "#%D0%B1" || r !== "a1c3" || new URL("https://x", undefined).host !== "x";
            });
          }
    });
})();
