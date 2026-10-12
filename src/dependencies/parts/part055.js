(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        33110(e, t, n) {
            "use strict";
        
            var r = n(46518);
            var i = n(97751);
            var s = n(69565);
            var a = n(79504);
            var o = n(79039);
            var h = n(34376);
            var l = n(94901);
            var d = n(20034);
            var c = n(2360);
            var u = n(65810);
            var p = n(10757);
            var m = n(22195);
            var f = n(31240);
            var _ = n(19617).m;
            var v = n(39297);
            var y = n(655);
            var g = n(616);
            var w = n(33392);
            var x = n(4495);
            var b = n(27819);
            var T = String;
            var A = TypeError;
            var C = i("JSON", "stringify");
            var S = i("BigInt");
            var E = a("".valueOf);
            var O = a(true.valueOf);
            var k = S && a(S.prototype.valueOf);
            var P = a(/./.exec);
            var M = a("".charAt);
            var R = a("".charCodeAt);
            var I = a("".replace);
            var L = a("".slice);
            var j = a([].push);
            var B = a([].pop);
            var D = a(1.1.toString);
            var F = /[\uD800-\uDFFF]/g;
            var N = /^[\uD800-\uDBFF]$/;
            var G = /^[\uDC00-\uDFFF]$/;
            var U = /^\d+$/;
            var V = w();
            var H = w();
            var z = w();
            var W = V.length;
            var X = H.length;
            var Y = !x || o(function () {
              var e = i("Symbol")("stringify detection");
              return C([e]) !== "[null]" || C({
                a: e
              }) !== "{}" || C(Object(e)) !== "{}";
            });
            var q = o(function () {
              return C("\uDF06\uD834") !== "\"\\udf06\\ud834\"" || C("\uDEAD") !== "\"\\udead\"";
            });
            var J = b ? i("JSON", "isRawJSON") : u;
            var K = Y ? function (e, t, n) {
              return C(e, function (e, n) {
                var r = s(t, this, e, n);
                if (!p(r)) {
                  return r;
                }
              }, n);
            } : C;
            function Z(e, t, n) {
              var r = M(n, t - 1);
              var i = M(n, t + 1);
              if (P(N, e) && !P(G, i) || P(G, e) && !P(N, r)) {
                return "\\u" + D(R(e, 0), 16);
              } else {
                return e;
              }
            }
            function $(e, t) {
              try {
                e(t);
                return true;
              } catch (e) {
                return false;
              }
            }
            function Q(e, t) {
              return {
                toJSON: function () {
                  var n = e[t];
                  if (d(n) || typeof n == "bigint") {
                    var r = n.toJSON;
                    if (l(r)) {
                      n = s(r, n, t);
                    }
                  }
                  return n;
                }
              };
            }
            if (C) {
              r({
                target: "JSON",
                stat: true,
                arity: 3,
                forced: Y || q || !b
              }, {
                stringify: function (e, t, n) {
                  var r;
                  var i = l(t) ? t : undefined;
                  var a = i ? undefined : function (e) {
                    if (h(e)) {
                      for (var t = e.length, n = [], r = c(null), i = 0; i < t; i++) {
                        var s;
                        var a = e[i];
                        if (typeof a == "string") {
                          s = a;
                        } else {
                          if (typeof a != "number" && m(a) !== "Number" && m(a) !== "String") {
                            continue;
                          }
                          s = y(a);
                        }
                        if (!v(r, s)) {
                          r[s] = true;
                          j(n, s);
                        }
                      }
                      return n;
                    }
                  }(t);
                  var o = a && function (e) {
                    for (var t = 0, n = e.length; t < n; t++) {
                      if (P(U, e[t])) {
                        return H;
                      }
                    }
                    return "";
                  }(a);
                  var u = [];
                  var p = [];
                  var w = [];
                  var x = false;
                  var C = true;
                  var S = K(e, function (e, t) {
                    e = T(e);
                    if (a) {
                      if (e === z) {
                        B(p);
                        r = B(w);
                        return;
                      }
                      if (C) {
                        C = false;
                      } else if (this !== r && !h(this) && !_(a, e)) {
                        return;
                      }
                    } else if (i) {
                      t = s(i, this, e, t);
                    }
                    if (J(t)) {
                      if (b) {
                        return t;
                      } else {
                        x = true;
                        return V + (j(u, t.rawJSON) - 1);
                      }
                    }
                    if (a && function (e) {
                      if (!d(e) || l(e) || h(e)) {
                        return false;
                      }
                      try {
                        return !function (e) {
                          var t = m(e);
                          return t === "Number" && $(f, e) || t === "String" && $(E, e) || t === "Boolean" && $(O, e) || !!k && t === "BigInt" && $(k, e);
                        }(e);
                      } catch (e) {
                        return true;
                      }
                    }(t)) {
                      if (_(p, t)) {
                        throw new A("Converting circular structure to JSON");
                      }
                      var n = function (e, t, n) {
                        var r = c(null);
                        for (var i = 0, s = t.length; i < s; i++) {
                          var a = t[i];
                          r[n + a] = Q(e, a);
                        }
                        r[z] = null;
                        return r;
                      }(t, a, o);
                      j(p, t);
                      j(w, r);
                      r = n;
                      if (o) {
                        x = true;
                      }
                      return n;
                    }
                    return t;
                  }, n);
                  if (typeof S != "string") {
                    return S;
                  }
                  if (q) {
                    S = I(S, F, Z);
                  }
                  if (!x) {
                    return S;
                  }
                  var R = "";
                  for (var D = S.length, N = 0; N < D; N++) {
                    var G = M(S, N);
                    if (G === "\"") {
                      var Y = g(S, ++N).end - 1;
                      var ee = L(S, N, Y);
                      if (L(ee, 0, W) === V) {
                        R += u[L(ee, W)];
                      } else if (L(ee, 0, X) === H) {
                        R += "\"" + L(ee, X) + "\"";
                      } else {
                        R += "\"" + ee + "\"";
                      }
                      N = Y;
                    } else {
                      R += G;
                    }
                  }
                  return R;
                }
              });
            }
          },
        4731(e, t, n) {
            "use strict";
        
            var r = n(44576);
            n(10687)(r.JSON, "JSON", true);
          },
        48523(e, t, n) {
            "use strict";
        
            n(16468)("Map", function (e) {
              return function () {
                return e(this, arguments.length ? arguments[0] : undefined);
              };
            }, n(86938));
          },
        36033(e, t, n) {
            "use strict";
        
            n(48523);
          },
        60479(e, t, n) {
            "use strict";
        
            n(10687)(Math, "Math", true);
          },
        2892(e, t, n) {
            "use strict";
        
            var r = n(46518);
            var i = n(96395);
            var s = n(43724);
            var a = n(44576);
            var o = n(19167);
            var h = n(79504);
            var l = n(92796);
            var d = n(39297);
            var c = n(23167);
            var u = n(1625);
            var p = n(10757);
            var m = n(72777);
            var f = n(79039);
            var _ = n(38480).f;
            var v = n(77347).f;
            var y = n(24913).f;
            var g = n(31240);
            var w = n(43802).Bq;
            var x = "Number";
            var b = a[x];
            var T = o[x];
            var A = b.prototype;
            var C = a.TypeError;
            var S = h("".slice);
            var E = h("".charCodeAt);
            var O = l(x, !b(" 0o1") || !b("0b1") || b("+0x1"));
            function k(e) {
              var t;
              var n = arguments.length < 1 ? 0 : b(function (e) {
                var t = m(e, "number");
                if (typeof t == "bigint") {
                  return t;
                } else {
                  return function (e) {
                    var t;
                    var n;
                    var r;
                    var i;
                    var s;
                    var a;
                    var o;
                    var h;
                    var l = m(e, "number");
                    if (p(l)) {
                      throw new C("Cannot convert a Symbol value to a number");
                    }
                    if (typeof l == "string" && l.length > 2) {
                      l = w(l);
                      if ((t = E(l, 0)) === 43 || t === 45) {
                        if ((n = E(l, 2)) === 88 || n === 120) {
                          return NaN;
                        }
                      } else if (t === 48) {
                        switch (E(l, 1)) {
                          case 66:
                          case 98:
                            r = 2;
                            i = 49;
                            break;
                          case 79:
                          case 111:
                            r = 8;
                            i = 55;
                            break;
                          default:
                            return +l;
                        }
                        a = (s = S(l, 2)).length;
                        o = 0;
                        for (; o < a; o++) {
                          if ((h = E(s, o)) < 48 || h > i) {
                            return NaN;
                          }
                        }
                        return parseInt(s, r);
                      }
                    }
                    return +l;
                  }(t);
                }
              }(e));
              if (u(A, t = this) && f(function () {
                g(t);
              })) {
                return c(Object(n), this, k);
              } else {
                return n;
              }
            }
            k.prototype = A;
            if (O && !i) {
              A.constructor = k;
            }
            r({
              global: true,
              constructor: true,
              wrap: true,
              forced: O
            }, {
              Number: k
            });
            function P(e, t) {
              var n;
              for (var r = s ? _(t) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), i = 0; r.length > i; i++) {
                if (d(t, n = r[i]) && !d(e, n)) {
                  y(e, n, v(t, n));
                }
              }
            }
            if (i && T) {
              P(o[x], T);
            }
            if (O || i) {
              P(o[x], b);
            }
          },
        9868(e, t, n) {
            "use strict";
        
            var r = n(46518);
            var i = n(79504);
            var s = n(91291);
            var a = n(31240);
            var o = n(72333);
            var h = n(79039);
            var l = RangeError;
            var d = String;
            var c = Math.floor;
            var u = i(o);
            var p = i("".slice);
            var m = i(1.1.toFixed);
            function f(e, t, n) {
              if (t === 0) {
                return n;
              } else if (t % 2 == 1) {
                return f(e, t - 1, n * e);
              } else {
                return f(e * e, t / 2, n);
              }
            }
            function _(e, t, n) {
              for (var r = -1, i = n; ++r < 6;) {
                i += t * e[r];
                e[r] = i % 10000000;
                i = c(i / 10000000);
              }
            }
            function v(e, t) {
              for (var n = 6, r = 0; --n >= 0;) {
                r += e[n];
                e[n] = c(r / t);
                r = r % t * 10000000;
              }
            }
            function y(e) {
              for (var t = 6, n = ""; --t >= 0;) {
                if (n !== "" || t === 0 || e[t] !== 0) {
                  var r = d(e[t]);
                  n = n === "" ? r : n + u("0", 7 - r.length) + r;
                }
              }
              return n;
            }
            r({
              target: "Number",
              proto: true,
              forced: h(function () {
                return m(0.00008, 3) !== "0.000" || m(0.9, 0) !== "1" || m(1.255, 2) !== "1.25" || m(1000000000000000100, 0) !== "1000000000000000128";
              }) || !h(function () {
                m({});
              })
            }, {
              toFixed: function (e) {
                var t;
                var n;
                var r;
                var i;
                var o = a(this);
                var h = s(e);
                var c = [0, 0, 0, 0, 0, 0];
                var m = "";
                var g = "0";
                if (h < 0 || h > 20) {
                  throw new l("Incorrect fraction digits");
                }
                if (o != o) {
                  return "NaN";
                }
                if (o <= -1e+21 || o >= 1e+21) {
                  return d(o);
                }
                if (o < 0) {
                  m = "-";
                  o = -o;
                }
                if (o > 1e-21) {
                  n = (t = function (e) {
                    var t = 0;
                    for (var n = e; n >= 4096;) {
                      t += 12;
                      n /= 4096;
                    }
                    while (n >= 2) {
                      t += 1;
                      n /= 2;
                    }
                    return t;
                  }(o * f(2, 69, 1)) - 69) < 0 ? o * f(2, -t, 1) : o / f(2, t, 1);
                  n *= 4503599627370496;
                  if ((t = 52 - t) > 0) {
                    _(c, 0, n);
                    r = h;
                    while (r >= 7) {
                      _(c, 10000000, 0);
                      r -= 7;
                    }
                    _(c, f(10, r, 1), 0);
                    r = t - 1;
                    while (r >= 23) {
                      v(c, 8388608);
                      r -= 23;
                    }
                    v(c, 1 << r);
                    _(c, 1, 1);
                    v(c, 2);
                    g = y(c);
                  } else {
                    _(c, 0, n);
                    _(c, 1 << -t, 0);
                    g = y(c) + u("0", h);
                  }
                }
                if (h > 0) {
                  return m + ((i = g.length) <= h ? "0." + u("0", h - i) + g : p(g, 0, i - h) + "." + p(g, i - h));
                } else {
                  return m + g;
                }
              }
            });
          },
        69085(e, t, n) {
            "use strict";
        
            var r = n(46518);
            var i = n(44213);
            r({
              target: "Object",
              stat: true,
              arity: 2,
              forced: Object.assign !== i
            }, {
              assign: i
            });
          },
        83851(e, t, n) {
            "use strict";
        
            var r = n(46518);
            var i = n(79039);
            var s = n(25397);
            var a = n(77347).f;
            var o = n(43724);
            r({
              target: "Object",
              stat: true,
              forced: !o || i(function () {
                a(1);
              }),
              sham: !o
            }, {
              getOwnPropertyDescriptor: function (e, t) {
                return a(s(e), t);
              }
            });
          },
        81278(e, t, n) {
            "use strict";
        
            var r = n(46518);
            var i = n(43724);
            var s = n(35031);
            var a = n(25397);
            var o = n(77347);
            var h = n(97040);
            r({
              target: "Object",
              stat: true,
              sham: !i
            }, {
              getOwnPropertyDescriptors: function (e) {
                var t;
                var n;
                var r = a(e);
                var i = o.f;
                for (var l = s(r), d = {}, c = 0; l.length > c;) {
                  if ((n = i(r, t = l[c++])) !== undefined) {
                    h(d, t, n);
                  }
                }
                return d;
              }
            });
          },
        49773(e, t, n) {
            "use strict";
        
            var r = n(46518);
            var i = n(4495);
            var s = n(79039);
            var a = n(33717);
            var o = n(48981);
            r({
              target: "Object",
              stat: true,
              forced: !i || s(function () {
                a.f(1);
              })
            }, {
              getOwnPropertySymbols: function (e) {
                var t = a.f;
                if (t) {
                  return t(o(e));
                } else {
                  return [];
                }
              }
            });
          },
        40875(e, t, n) {
            "use strict";
        
            var r = n(46518);
            var i = n(79039);
            var s = n(48981);
            var a = n(42787);
            var o = n(12211);
            r({
              target: "Object",
              stat: true,
              forced: i(function () {
                a(1);
              }),
              sham: !o
            }, {
              getPrototypeOf: function (e) {
                return a(s(e));
              }
            });
          },
        79432(e, t, n) {
            "use strict";
        
            var r = n(46518);
            var i = n(48981);
            var s = n(71072);
            r({
              target: "Object",
              stat: true,
              forced: n(79039)(function () {
                s(1);
              })
            }, {
              keys: function (e) {
                return s(i(e));
              }
            });
          },
        26099(e, t, n) {
            "use strict";
        
            var r = n(92140);
            var i = n(36840);
            var s = n(53179);
            if (!r) {
              i(Object.prototype, "toString", s, {
                unsafe: true
              });
            }
          },
        16034(e, t, n) {
            "use strict";
        
            var r = n(46518);
            var i = n(32357).z;
            r({
              target: "Object",
              stat: true
            }, {
              values: function (e) {
                return i(e);
              }
            });
          },
        16499(e, t, n) {
            "use strict";
        
            var r = n(46518);
            var i = n(69565);
            var s = n(79306);
            var a = n(36043);
            var o = n(1103);
            var h = n(72652);
            r({
              target: "Promise",
              stat: true,
              forced: n(90537)
            }, {
              all: function (e) {
                var t = this;
                var n = a.f(t);
                var r = n.resolve;
                var l = n.reject;
                var d = o(function () {
                  var n = s(t.resolve);
                  var a = [];
                  var o = 0;
                  var d = 1;
                  h(e, function (e) {
                    var s = o++;
                    var h = false;
                    d++;
                    i(n, t, e).then(function (e) {
                      if (!h) {
                        h = true;
                        a[s] = e;
                        if (! --d) {
                          r(a);
                        }
                      }
                    }, l);
                  });
                  if (! --d) {
                    r(a);
                  }
                });
                if (d.error) {
                  l(d.value);
                }
                return n.promise;
              }
            });
          },
        82003(e, t, n) {
            "use strict";
        
            var r = n(46518);
            var i = n(96395);
            var s = n(10916).CONSTRUCTOR;
            var a = n(80550);
            var o = n(97751);
            var h = n(94901);
            var l = n(36840);
            var d = a && a.prototype;
            r({
              target: "Promise",
              proto: true,
              forced: s,
              real: true
            }, {
              catch: function (e) {
                return this.then(undefined, e);
              }
            });
            if (!i && h(a)) {
              var c = o("Promise").prototype.catch;
              if (d.catch !== c) {
                l(d, "catch", c, {
                  unsafe: true
                });
              }
            }
          }
    });
})();
