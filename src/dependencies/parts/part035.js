(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        251(e, t) {
            t.read = function (e, t, n, r, i) {
              var s;
              var a;
              var o = i * 8 - r - 1;
              var h = (1 << o) - 1;
              var l = h >> 1;
              var d = -7;
              var c = n ? i - 1 : 0;
              var u = n ? -1 : 1;
              var p = e[t + c];
              c += u;
              s = p & (1 << -d) - 1;
              p >>= -d;
              d += o;
              for (; d > 0; d -= 8) {
                s = s * 256 + e[t + c];
                c += u;
              }
              a = s & (1 << -d) - 1;
              s >>= -d;
              d += r;
              for (; d > 0; d -= 8) {
                a = a * 256 + e[t + c];
                c += u;
              }
              if (s === 0) {
                s = 1 - l;
              } else {
                if (s === h) {
                  if (a) {
                    return NaN;
                  } else {
                    return (p ? -1 : 1) * Infinity;
                  }
                }
                a += Math.pow(2, r);
                s -= l;
              }
              return (p ? -1 : 1) * a * Math.pow(2, s - r);
            };
            t.write = function (e, t, n, r, i, s) {
              var a;
              var o;
              var h;
              var l = s * 8 - i - 1;
              var d = (1 << l) - 1;
              var c = d >> 1;
              var u = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
              var p = r ? 0 : s - 1;
              var m = r ? 1 : -1;
              var f = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
              t = Math.abs(t);
              if (isNaN(t) || t === Infinity) {
                o = isNaN(t) ? 1 : 0;
                a = d;
              } else {
                a = Math.floor(Math.log(t) / Math.LN2);
                if (t * (h = Math.pow(2, -a)) < 1) {
                  a--;
                  h *= 2;
                }
                if ((t += a + c >= 1 ? u / h : u * Math.pow(2, 1 - c)) * h >= 2) {
                  a++;
                  h /= 2;
                }
                if (a + c >= d) {
                  o = 0;
                  a = d;
                } else if (a + c >= 1) {
                  o = (t * h - 1) * Math.pow(2, i);
                  a += c;
                } else {
                  o = t * Math.pow(2, c - 1) * Math.pow(2, i);
                  a = 0;
                }
              }
              for (; i >= 8; i -= 8) {
                e[n + p] = o & 255;
                p += m;
                o /= 256;
              }
              a = a << i | o;
              l += i;
              for (; l > 0; l -= 8) {
                e[n + p] = a & 255;
                p += m;
                a /= 256;
              }
              e[n + p - m] |= f * 128;
            };
          },
        56698(e) {
            if (typeof Object.create == "function") {
              e.exports = function (e, t) {
                if (t) {
                  e.super_ = t;
                  e.prototype = Object.create(t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: false,
                      writable: true,
                      configurable: true
                    }
                  });
                }
              };
            } else {
              e.exports = function (e, t) {
                if (t) {
                  e.super_ = t;
                  function n() {}
                  n.prototype = t.prototype;
                  e.prototype = new n();
                  e.prototype.constructor = e;
                }
              };
            }
          },
        47244(e, t, n) {
            "use strict";
        
            var r = n(49092)();
            var i = n(36556)("Object.prototype.toString");
            function s(e) {
              return (!r || !e || typeof e != "object" || !(Symbol.toStringTag in e)) && i(e) === "[object Arguments]";
            }
            function a(e) {
              return !!s(e) || e !== null && typeof e == "object" && "length" in e && typeof e.length == "number" && e.length >= 0 && i(e) !== "[object Array]" && "callee" in e && i(e.callee) === "[object Function]";
            }
            var o = function () {
              return s(arguments);
            }();
            s.isLegacyArguments = a;
            e.exports = o ? s : a;
          },
        69600(e) {
            "use strict";
        
            var t;
            var n;
            var r = Function.prototype.toString;
            var i = typeof Reflect == "object" && Reflect !== null && Reflect.apply;
            if (typeof i == "function" && typeof Object.defineProperty == "function") {
              try {
                t = Object.defineProperty({}, "length", {
                  get: function () {
                    throw n;
                  }
                });
                n = {};
                i(function () {
                  throw 42;
                }, null, t);
              } catch (e) {
                if (e !== n) {
                  i = null;
                }
              }
            } else {
              i = null;
            }
            var s = /^\s*class\b/;
            function a(e) {
              try {
                var t = r.call(e);
                return s.test(t);
              } catch (e) {
                return false;
              }
            }
            function o(e) {
              try {
                return !a(e) && (r.call(e), true);
              } catch (e) {
                return false;
              }
            }
            var h = Object.prototype.toString;
            var l = typeof Symbol == "function" && !!Symbol.toStringTag;
            var d = !(0 in [,]);
            function c() {
              return false;
            }
            if (typeof document == "object") {
              var u = document.all;
              if (h.call(u) === h.call(document.all)) {
                c = function (e) {
                  if ((d || !e) && (e === undefined || typeof e == "object")) {
                    try {
                      var t = h.call(e);
                      return (t === "[object HTMLAllCollection]" || t === "[object HTML document.all class]" || t === "[object HTMLCollection]" || t === "[object Object]") && e("") == null;
                    } catch (e) {}
                  }
                  return false;
                };
              }
            }
            e.exports = i ? function (e) {
              if (c(e)) {
                return true;
              }
              if (!e) {
                return false;
              }
              if (typeof e != "function" && typeof e != "object") {
                return false;
              }
              try {
                i(e, null, t);
              } catch (e) {
                if (e !== n) {
                  return false;
                }
              }
              return !a(e) && o(e);
            } : function (e) {
              if (c(e)) {
                return true;
              }
              if (!e) {
                return false;
              }
              if (typeof e != "function" && typeof e != "object") {
                return false;
              }
              if (l) {
                return o(e);
              }
              if (a(e)) {
                return false;
              }
              var t = h.call(e);
              return (t === "[object Function]" || t === "[object GeneratorFunction]" || !!/^\[object HTML/.test(t)) && o(e);
            };
          },
        48184(e, t, n) {
            "use strict";
        
            var r = n(36556);
            var i = n(99721)(/^\s*(?:function)?\*/);
            var s = n(49092)();
            var a = n(93628);
            var o = r("Object.prototype.toString");
            var h = r("Function.prototype.toString");
            var l = n(1687).c;
            e.exports = function (e) {
              if (typeof e != "function") {
                return false;
              }
              if (i(h(e))) {
                return true;
              }
              if (!s) {
                return o(e) === "[object GeneratorFunction]";
              }
              if (!a) {
                return false;
              }
              var t = l();
              return t && a(e) === t.prototype;
            };
          },
        13003(e) {
            "use strict";
        
            e.exports = function (e) {
              return e != e;
            };
          },
        24133(e, t, n) {
            "use strict";
        
            var r = n(10487);
            var i = n(38452);
            var s = n(13003);
            var a = n(76642);
            var o = n(92464);
            var h = r(a(), Number);
            i(h, {
              getPolyfill: a,
              implementation: s,
              shim: o
            });
            e.exports = h;
          },
        76642(e, t, n) {
            "use strict";
        
            var r = n(13003);
            e.exports = function () {
              if (Number.isNaN && Number.isNaN(NaN) && !Number.isNaN("a")) {
                return Number.isNaN;
              } else {
                return r;
              }
            };
          },
        92464(e, t, n) {
            "use strict";
        
            var r = n(38452);
            var i = n(76642);
            e.exports = function () {
              var e = i();
              r(Number, {
                isNaN: e
              }, {
                isNaN: function () {
                  return Number.isNaN !== e;
                }
              });
              return e;
            };
          },
        14035(e, t, n) {
            "use strict";
        
            var r;
            var i = n(36556);
            var s = n(49092)();
            var a = n(9957);
            var o = n(75795);
            if (s) {
              var h = i("RegExp.prototype.exec");
              var l = {};
              function d() {
                throw l;
              }
              var c = {
                toString: d,
                valueOf: d
              };
              if (typeof Symbol.toPrimitive == "symbol") {
                c[Symbol.toPrimitive] = d;
              }
              r = function (e) {
                if (!e || typeof e != "object") {
                  return false;
                }
                var t = o(e, "lastIndex");
                if (!t || !a(t, "value")) {
                  return false;
                }
                try {
                  h(e, c);
                } catch (e) {
                  return e === l;
                }
              };
            } else {
              var u = i("Object.prototype.toString");
              r = function (e) {
                return !!e && (typeof e == "object" || typeof e == "function") && u(e) === "[object RegExp]";
              };
            }
            e.exports = r;
          },
        35680(e, t, n) {
            "use strict";
        
            var r = n(25767);
            e.exports = function (e) {
              return !!r(e);
            };
          },
        71514(e) {
            "use strict";
        
            e.exports = Math.abs;
          },
        58968(e) {
            "use strict";
        
            e.exports = Math.floor;
          },
        94459(e) {
            "use strict";
        
            e.exports = Number.isNaN || function (e) {
              return e != e;
            };
          },
        6188(e) {
            "use strict";
        
            e.exports = Math.max;
          },
        68002(e) {
            "use strict";
        
            e.exports = Math.min;
          },
        75880(e) {
            "use strict";
        
            e.exports = Math.pow;
          },
        70414(e) {
            "use strict";
        
            e.exports = Math.round;
          },
        73093(e, t, n) {
            "use strict";
        
            var r = n(94459);
            e.exports = function (e) {
              if (r(e) || e === 0) {
                return e;
              } else if (e < 0) {
                return -1;
              } else {
                return 1;
              }
            };
          }
    });
})();
