(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        9655(e, t, n) {
            var r;
            e = n.nmd(e);
            (function () {
              if (t) {
                t.nodeType;
              }
              if (e) {
                e.nodeType;
              }
              var i = typeof n.g == "object" && n.g;
              if (i.global !== i && i.window !== i) {
                i.self;
              }
              var s;
              var a = 2147483647;
              var o = 36;
              var h = /^xn--/;
              var l = /[^\x20-\x7E]/;
              var d = /[\x2E\u3002\uFF0E\uFF61]/g;
              var c = {
                overflow: "Overflow: input needs wider integers to process",
                "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                "invalid-input": "Invalid input"
              };
              var u = Math.floor;
              var p = String.fromCharCode;
              function m(e) {
                throw new RangeError(c[e]);
              }
              function f(e, t) {
                for (var n = e.length, r = []; n--;) {
                  r[n] = t(e[n]);
                }
                return r;
              }
              function _(e, t) {
                var n = e.split("@");
                var r = "";
                if (n.length > 1) {
                  r = n[0] + "@";
                  e = n[1];
                }
                return r + f((e = e.replace(d, ".")).split("."), t).join(".");
              }
              function v(e) {
                for (var t, n, r = [], i = 0, s = e.length; i < s;) {
                  if ((t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < s) {
                    if (((n = e.charCodeAt(i++)) & 64512) == 56320) {
                      r.push(((t & 1023) << 10) + (n & 1023) + 65536);
                    } else {
                      r.push(t);
                      i--;
                    }
                  } else {
                    r.push(t);
                  }
                }
                return r;
              }
              function y(e) {
                return f(e, function (e) {
                  var t = "";
                  if (e > 65535) {
                    t += p((e -= 65536) >>> 10 & 1023 | 55296);
                    e = e & 1023 | 56320;
                  }
                  return t + p(e);
                }).join("");
              }
              function g(e) {
                if (e - 48 < 10) {
                  return e - 22;
                } else if (e - 65 < 26) {
                  return e - 65;
                } else if (e - 97 < 26) {
                  return e - 97;
                } else {
                  return o;
                }
              }
              function w(e, t) {
                return e + 22 + (e < 26) * 75 - ((t != 0) << 5);
              }
              function x(e, t, n) {
                var r = 0;
                e = n ? u(e / 700) : e >> 1;
                e += u(e / t);
                for (; e > 455; r += o) {
                  e = u(e / 35);
                }
                return u(r + e * 36 / (e + 38));
              }
              function b(e) {
                var t;
                var n;
                var r;
                var i;
                var s;
                var h;
                var l;
                var d;
                var c;
                var p;
                var f = [];
                var _ = e.length;
                var v = 0;
                var w = 128;
                var b = 72;
                if ((n = e.lastIndexOf("-")) < 0) {
                  n = 0;
                }
                r = 0;
                for (; r < n; ++r) {
                  if (e.charCodeAt(r) >= 128) {
                    m("not-basic");
                  }
                  f.push(e.charCodeAt(r));
                }
                for (i = n > 0 ? n + 1 : 0; i < _;) {
                  s = v;
                  h = 1;
                  l = o;
                  for (; i >= _ && m("invalid-input"), ((d = g(e.charCodeAt(i++))) >= o || d > u((a - v) / h)) && m("overflow"), v += d * h, !(d < (c = l <= b ? 1 : l >= b + 26 ? 26 : l - b)); l += o) {
                    if (h > u(a / (p = o - c))) {
                      m("overflow");
                    }
                    h *= p;
                  }
                  b = x(v - s, t = f.length + 1, s == 0);
                  if (u(v / t) > a - w) {
                    m("overflow");
                  }
                  w += u(v / t);
                  v %= t;
                  f.splice(v++, 0, w);
                }
                return y(f);
              }
              function T(e) {
                var t;
                var n;
                var r;
                var i;
                var s;
                var h;
                var l;
                var d;
                var c;
                var f;
                var _;
                var y;
                var g;
                var b;
                var T;
                var A = [];
                y = (e = v(e)).length;
                t = 128;
                n = 0;
                s = 72;
                h = 0;
                for (; h < y; ++h) {
                  if ((_ = e[h]) < 128) {
                    A.push(p(_));
                  }
                }
                r = i = A.length;
                if (i) {
                  A.push("-");
                }
                while (r < y) {
                  l = a;
                  h = 0;
                  for (; h < y; ++h) {
                    if ((_ = e[h]) >= t && _ < l) {
                      l = _;
                    }
                  }
                  if (l - t > u((a - n) / (g = r + 1))) {
                    m("overflow");
                  }
                  n += (l - t) * g;
                  t = l;
                  h = 0;
                  for (; h < y; ++h) {
                    if ((_ = e[h]) < t && ++n > a) {
                      m("overflow");
                    }
                    if (_ == t) {
                      d = n;
                      c = o;
                      for (; !(d < (f = c <= s ? 1 : c >= s + 26 ? 26 : c - s)); c += o) {
                        T = d - f;
                        b = o - f;
                        A.push(p(w(f + T % b, 0)));
                        d = u(T / b);
                      }
                      A.push(p(w(d, 0)));
                      s = x(n, g, r == i);
                      n = 0;
                      ++r;
                    }
                  }
                  ++n;
                  ++t;
                }
                return A.join("");
              }
              s = {
                version: "1.4.1",
                ucs2: {
                  decode: v,
                  encode: y
                },
                decode: b,
                encode: T,
                toASCII: function (e) {
                  return _(e, function (e) {
                    if (l.test(e)) {
                      return "xn--" + T(e);
                    } else {
                      return e;
                    }
                  });
                },
                toUnicode: function (e) {
                  return _(e, function (e) {
                    if (h.test(e)) {
                      return b(e.slice(4).toLowerCase());
                    } else {
                      return e;
                    }
                  });
                }
              };
              if ((r = function () {
                return s;
              }.call(t, n, t, e)) !== undefined) {
                e.exports = r;
              }
            })();
          },
        92861(e, t, n) {
            var r = n(48287);
            var i = r.Buffer;
            function s(e, t) {
              for (var n in e) {
                t[n] = e[n];
              }
            }
            function a(e, t, n) {
              return i(e, t, n);
            }
            if (i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow) {
              e.exports = r;
            } else {
              s(r, t);
              t.Buffer = a;
            }
            a.prototype = Object.create(i.prototype);
            s(i, a);
            a.from = function (e, t, n) {
              if (typeof e == "number") {
                throw new TypeError("Argument must not be a number");
              }
              return i(e, t, n);
            };
            a.alloc = function (e, t, n) {
              if (typeof e != "number") {
                throw new TypeError("Argument must be a number");
              }
              var r = i(e);
              if (t !== undefined) {
                if (typeof n == "string") {
                  r.fill(t, n);
                } else {
                  r.fill(t);
                }
              } else {
                r.fill(0);
              }
              return r;
            };
            a.allocUnsafe = function (e) {
              if (typeof e != "number") {
                throw new TypeError("Argument must be a number");
              }
              return i(e);
            };
            a.allocUnsafeSlow = function (e) {
              if (typeof e != "number") {
                throw new TypeError("Argument must be a number");
              }
              return r.SlowBuffer(e);
            };
          },
        99721(e, t, n) {
            "use strict";
        
            var r = n(36556);
            var i = n(14035);
            var s = r("RegExp.prototype.exec");
            var a = n(69675);
            e.exports = function (e) {
              if (!i(e)) {
                throw new a("`regex` must be a RegExp");
              }
              return function (t) {
                return s(e, t) !== null;
              };
            };
          }
    });
})();
