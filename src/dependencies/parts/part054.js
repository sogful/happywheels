(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        70918(e, t, n) {
            "use strict";
        
            n(27337);
            var r = n(97751);
            var i = n(79504);
            var s = String.fromCharCode;
            var a = r("String", "fromCodePoint");
            var o = encodeURIComponent;
            var h = parseInt;
            var l = i("".charAt);
            var d = i([].push);
            var c = i("".replace);
            var u = i("".slice);
            var p = i(/./.exec);
            var m = "�";
            var f = /^[0-9a-f]+$/i;
            var _ = /[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDFFF]/g;
            function v(e, t) {
              var n = u(e, t, t + 2);
              if (p(f, n)) {
                return h(n, 16);
              } else {
                return NaN;
              }
            }
            function y(e) {
              var t = 0;
              for (var n = 128; n > 0 && (e & n) !== 0; n >>= 1) {
                t++;
              }
              return t;
            }
            function g(e) {
              var t = null;
              var n = e.length;
              switch (n) {
                case 1:
                  t = e[0];
                  break;
                case 2:
                  t = (e[0] & 31) << 6 | e[1] & 63;
                  break;
                case 3:
                  t = (e[0] & 15) << 12 | (e[1] & 63) << 6 | e[2] & 63;
                  break;
                case 4:
                  t = (e[0] & 7) << 18 | (e[1] & 63) << 12 | (e[2] & 63) << 6 | e[3] & 63;
              }
              if (t === null || t > 1114111 || t >= 55296 && t <= 57343 || t < (n > 3 ? 65536 : n > 2 ? 2048 : n > 1 ? 128 : 0)) {
                return null;
              } else {
                return t;
              }
            }
            function w(e) {
              if (e.length === 2) {
                return e;
              } else {
                return m;
              }
            }
            e.exports = {
              decode: function (e) {
                for (var t = e.length, n = "", r = 0; r < t;) {
                  var i = l(e, r);
                  if (i === "%") {
                    if (l(e, r + 1) === "%" || r + 3 > t) {
                      n += "%";
                      r++;
                      continue;
                    }
                    var o = v(e, r + 1);
                    if (o != o) {
                      n += i;
                      r++;
                      continue;
                    }
                    r += 2;
                    var h = y(o);
                    if (h === 0) {
                      i = s(o);
                    } else {
                      if (h === 1 || h > 4) {
                        n += m;
                        r++;
                        continue;
                      }
                      var c = [o];
                      for (var u = 1; u < h && !(3 + ++r > t) && l(e, r) === "%";) {
                        var p = v(e, r + 1);
                        if (p != p || p > 191 || p < 128) {
                          break;
                        }
                        if (u === 1) {
                          if (o === 224 && p < 160) {
                            break;
                          }
                          if (o === 237 && p > 159) {
                            break;
                          }
                          if (o === 240 && p < 144) {
                            break;
                          }
                          if (o === 244 && p > 143) {
                            break;
                          }
                        }
                        d(c, p);
                        r += 2;
                        u++;
                      }
                      if (c.length !== h) {
                        n += m;
                        continue;
                      }
                      var f = g(c);
                      if (f === null) {
                        for (var _ = 0; _ < h; _++) {
                          n += m;
                        }
                        r++;
                        continue;
                      }
                      i = a(f);
                    }
                  }
                  n += i;
                  r++;
                }
                return n;
              },
              encode: function (e) {
                try {
                  return o(e);
                } catch (t) {
                  return o(c(e, _, w));
                }
              }
            };
          },
        7040(e, t, n) {
            "use strict";
        
            var r = n(4495);
            e.exports = r && !Symbol.sham && typeof Symbol.iterator == "symbol";
          },
        48686(e, t, n) {
            "use strict";
        
            var r = n(43724);
            var i = n(79039);
            e.exports = r && i(function () {
              return Object.defineProperty(function () {}, "prototype", {
                value: 42,
                writable: false
              }).prototype !== 42;
            });
          },
        22812(e) {
            "use strict";
        
            var t = TypeError;
            e.exports = function (e, n) {
              if (e < n) {
                throw new t("Not enough arguments");
              }
              return e;
            };
          },
        58622(e, t, n) {
            "use strict";
        
            var r = n(44576);
            var i = n(94901);
            var s = r.WeakMap;
            e.exports = i(s) && /native code/.test(String(s));
          },
        70511(e, t, n) {
            "use strict";
        
            var r = n(19167);
            var i = n(39297);
            var s = n(1951);
            var a = n(24913).f;
            e.exports = function (e) {
              var t = r.Symbol ||= {};
              if (!i(t, e)) {
                a(t, e, {
                  value: s.f(e)
                });
              }
            };
          },
        1951(e, t, n) {
            "use strict";
        
            var r = n(78227);
            t.f = r;
          },
        78227(e, t, n) {
            "use strict";
        
            var r = n(44576);
            var i = n(25745);
            var s = n(39297);
            var a = n(33392);
            var o = n(4495);
            var h = n(7040);
            var l = r.Symbol;
            var d = i("wks");
            var c = h ? l.for || l : l && l.withoutSetter || a;
            e.exports = function (e) {
              if (!s(d, e)) {
                d[e] = o && s(l, e) ? l[e] : c("Symbol." + e);
              }
              return d[e];
            };
          },
        47452(e) {
            "use strict";
        
            e.exports = "\t\n\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029﻿";
          },
        28706(e, t, n) {
            "use strict";
        
            var r = n(46518);
            var i = n(79039);
            var s = n(34376);
            var a = n(20034);
            var o = n(48981);
            var h = n(26198);
            var l = n(96837);
            var d = n(97040);
            var c = n(34527);
            var u = n(1469);
            var p = n(70597);
            var m = n(78227);
            var f = n(39519);
            var _ = m("isConcatSpreadable");
            var v = f >= 51 || !i(function () {
              var e = [];
              e[_] = false;
              return e.concat()[0] !== e;
            });
            function y(e) {
              if (!a(e)) {
                return false;
              }
              var t = e[_];
              if (t !== undefined) {
                return !!t;
              } else {
                return s(e);
              }
            }
            r({
              target: "Array",
              proto: true,
              arity: 1,
              forced: !v || !p("concat")
            }, {
              concat: function (e) {
                var t;
                var n;
                var r;
                var i;
                var s;
                var a = o(this);
                var p = u(a, 0);
                var m = 0;
                t = -1;
                r = arguments.length;
                for (; t < r; t++) {
                  if (y(s = t === -1 ? a : arguments[t])) {
                    i = h(s);
                    l(m + i);
                    n = 0;
                    for (; n < i; n++, m++) {
                      if (n in s) {
                        d(p, m, s[n]);
                      }
                    }
                  } else {
                    l(m + 1);
                    d(p, m++, s);
                  }
                }
                c(p, m);
                return p;
              }
            });
          },
        33771(e, t, n) {
            "use strict";
        
            var r = n(46518);
            var i = n(84373);
            var s = n(6469);
            r({
              target: "Array",
              proto: true
            }, {
              fill: i
            });
            s("fill");
          },
        2008(e, t, n) {
            "use strict";
        
            var r = n(46518);
            var i = n(59213).filter;
            r({
              target: "Array",
              proto: true,
              forced: !n(70597)("filter")
            }, {
              filter: function (e) {
                return i(this, e, arguments.length > 1 ? arguments[1] : undefined);
              }
            });
          },
        48980(e, t, n) {
            "use strict";
        
            var r = n(46518);
            var i = n(59213).findIndex;
            var s = n(6469);
            var a = "findIndex";
            var o = true;
            if (a in []) {
              Array(1)[a](function () {
                o = false;
              });
            }
            r({
              target: "Array",
              proto: true,
              forced: o
            }, {
              findIndex: function (e) {
                return i(this, e, arguments.length > 1 ? arguments[1] : undefined);
              }
            });
            s(a);
          },
        23418(e, t, n) {
            "use strict";
        
            var r = n(46518);
            var i = n(97916);
            r({
              target: "Array",
              stat: true,
              forced: !n(84428)(function (e) {
                Array.from(e);
              })
            }, {
              from: i
            });
          },
        74423(e, t, n) {
            "use strict";
        
            var r = n(46518);
            var i = n(19617).m;
            var s = n(79039);
            var a = n(6469);
            var o = s(function () {
              return !Array(1).includes();
            });
            var h = s(function () {
              return [, 1].includes(undefined, 1);
            });
            r({
              target: "Array",
              proto: true,
              forced: o || h
            }, {
              includes: function (e) {
                return i(this, e, arguments.length > 1 ? arguments[1] : undefined);
              }
            });
            a("includes");
          },
        23792(e, t, n) {
            "use strict";
        
            var r = n(25397);
            var i = n(6469);
            var s = n(26269);
            var a = n(91181);
            var o = n(24913).f;
            var h = n(51088);
            var l = n(62529);
            var d = n(96395);
            var c = n(43724);
            var u = "Array Iterator";
            var p = a.set;
            var m = a.getterFor(u);
            e.exports = h(Array, "Array", function (e, t) {
              p(this, {
                type: u,
                target: r(e),
                index: 0,
                kind: t
              });
            }, function () {
              var e = m(this);
              var t = e.target;
              var n = e.index++;
              if (!t || n >= t.length) {
                e.target = null;
                return l(undefined, true);
              }
              switch (e.kind) {
                case "keys":
                  return l(n, false);
                case "values":
                  return l(t[n], false);
              }
              return l([n, t[n]], false);
            }, "values");
            var f = s.Arguments = s.Array;
            i("keys");
            i("values");
            i("entries");
            if (!d && c && f.name !== "values") {
              try {
                o(f, "name", {
                  value: "values"
                });
              } catch (e) {}
            }
          },
        48598(e, t, n) {
            "use strict";
        
            var r = n(46518);
            var i = n(79504);
            var s = n(47055);
            var a = n(25397);
            var o = n(34598);
            var h = i([].join);
            r({
              target: "Array",
              proto: true,
              forced: s !== Object || !o("join", ",")
            }, {
              join: function (e) {
                return h(a(this), e === undefined ? "," : e);
              }
            });
          },
        62062(e, t, n) {
            "use strict";
        
            var r = n(46518);
            var i = n(59213).map;
            r({
              target: "Array",
              proto: true,
              forced: !n(70597)("map")
            }, {
              map: function (e) {
                return i(this, e, arguments.length > 1 ? arguments[1] : undefined);
              }
            });
          },
        34782(e, t, n) {
            "use strict";
        
            var r = n(46518);
            var i = n(34376);
            var s = n(33517);
            var a = n(20034);
            var o = n(35610);
            var h = n(26198);
            var l = n(25397);
            var d = n(97040);
            var c = n(34527);
            var u = n(78227);
            var p = n(70597);
            var m = n(67680);
            var f = p("slice");
            var _ = u("species");
            var v = Array;
            var y = Math.max;
            r({
              target: "Array",
              proto: true,
              forced: !f
            }, {
              slice: function (e, t) {
                var n;
                var r;
                var u;
                var p = l(this);
                var f = h(p);
                var g = o(e, f);
                var w = o(t === undefined ? f : t, f);
                if (i(p) && (n = p.constructor, (s(n) && (n === v || i(n.prototype)) || a(n) && (n = n[_]) === null) && (n = undefined), n === v || n === undefined)) {
                  return m(p, g, w);
                }
                r = new (n === undefined ? v : n)(y(w - g, 0));
                u = 0;
                for (; g < w; g++, u++) {
                  if (g in p) {
                    d(r, u, p[g]);
                  }
                }
                c(r, u);
                return r;
              }
            });
          },
        26910(e, t, n) {
            "use strict";
        
            var r = n(46518);
            var i = n(79504);
            var s = n(79306);
            var a = n(48981);
            var o = n(26198);
            var h = n(84606);
            var l = n(655);
            var d = n(79039);
            var c = n(74488);
            var u = n(34598);
            var p = n(13709);
            var m = n(13763);
            var f = n(39519);
            var _ = n(3607);
            var v = [];
            var y = i(v.sort);
            var g = i(v.push);
            var w = d(function () {
              v.sort(undefined);
            });
            var x = d(function () {
              v.sort(null);
            });
            var b = u("sort");
            var T = !d(function () {
              if (f) {
                return f < 70;
              }
              if (!p || !(p > 3)) {
                if (m) {
                  return true;
                }
                if (_) {
                  return _ < 603;
                }
                var e;
                var t;
                var n;
                var r;
                var i = "";
                for (e = 65; e < 76; e++) {
                  t = String.fromCharCode(e);
                  switch (e) {
                    case 66:
                    case 69:
                    case 70:
                    case 72:
                      n = 3;
                      break;
                    case 68:
                    case 71:
                      n = 4;
                      break;
                    default:
                      n = 2;
                  }
                  for (r = 0; r < 47; r++) {
                    v.push({
                      k: t + r,
                      v: n
                    });
                  }
                }
                v.sort(function (e, t) {
                  return t.v - e.v;
                });
                r = 0;
                for (; r < v.length; r++) {
                  t = v[r].k.charAt(0);
                  if (i.charAt(i.length - 1) !== t) {
                    i += t;
                  }
                }
                return i !== "DGBEFHACIJK";
              }
            });
            r({
              target: "Array",
              proto: true,
              forced: w || !x || !b || !T
            }, {
              sort: function (e) {
                if (e !== undefined) {
                  s(e);
                }
                var t = a(this);
                if (T) {
                  if (e === undefined) {
                    return y(t);
                  } else {
                    return y(t, e);
                  }
                }
                var n;
                var r;
                var i = [];
                var d = o(t);
                for (r = 0; r < d; r++) {
                  if (r in t) {
                    g(i, t[r]);
                  }
                }
                c(i, function (e) {
                  return function (t, n) {
                    if (n === undefined) {
                      return -1;
                    }
                    if (t === undefined) {
                      return 1;
                    }
                    if (e !== undefined) {
                      return +e(t, n) || 0;
                    }
                    var r = l(t);
                    var i = l(n);
                    if (r === i) {
                      return 0;
                    } else if (r > i) {
                      return 1;
                    } else {
                      return -1;
                    }
                  };
                }(e));
                n = o(i);
                r = 0;
                while (r < n) {
                  t[r] = i[r++];
                }
                while (r < d) {
                  h(t, r++);
                }
                return t;
              }
            });
          },
        54554(e, t, n) {
            "use strict";
        
            var r = n(46518);
            var i = n(48981);
            var s = n(35610);
            var a = n(91291);
            var o = n(26198);
            var h = n(34527);
            var l = n(96837);
            var d = n(1469);
            var c = n(97040);
            var u = n(84606);
            var p = n(70597)("splice");
            var m = Math.max;
            var f = Math.min;
            r({
              target: "Array",
              proto: true,
              forced: !p
            }, {
              splice: function (e, t) {
                var n;
                var r;
                var p;
                var _;
                var v;
                var y;
                var g = i(this);
                var w = o(g);
                var x = s(e, w);
                var b = arguments.length;
                if (b === 0) {
                  n = r = 0;
                } else if (b === 1) {
                  n = 0;
                  r = w - x;
                } else {
                  n = b - 2;
                  r = f(m(a(t), 0), w - x);
                }
                l(w + n - r);
                p = d(g, r);
                _ = 0;
                for (; _ < r; _++) {
                  if ((v = x + _) in g) {
                    c(p, _, g[v]);
                  }
                }
                h(p, r);
                if (n < r) {
                  for (_ = x; _ < w - r; _++) {
                    y = _ + n;
                    if ((v = _ + r) in g) {
                      g[y] = g[v];
                    } else {
                      u(g, y);
                    }
                  }
                  for (_ = w; _ > w - r + n; _--) {
                    u(g, _ - 1);
                  }
                } else if (n > r) {
                  for (_ = w - r; _ > x; _--) {
                    y = _ + n - 1;
                    if ((v = _ + r - 1) in g) {
                      g[y] = g[v];
                    } else {
                      u(g, y);
                    }
                  }
                }
                for (_ = 0; _ < n; _++) {
                  g[_ + x] = arguments[_ + 2];
                }
                h(g, w - r + n);
                return p;
              }
            });
          },
        89572(e, t, n) {
            "use strict";
        
            var r = n(39297);
            var i = n(36840);
            var s = n(53640);
            var a = n(78227)("toPrimitive");
            var o = Date.prototype;
            if (!r(o, a)) {
              i(o, a, s);
            }
          },
        62010(e, t, n) {
            "use strict";
        
            var r = n(43724);
            var i = n(10350).EXISTS;
            var s = n(79504);
            var a = n(62106);
            var o = Function.prototype;
            var h = s(o.toString);
            var l = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
            var d = s(l.exec);
            if (r && !i) {
              a(o, "name", {
                configurable: true,
                get: function () {
                  try {
                    return d(l, h(this))[1];
                  } catch (e) {
                    return "";
                  }
                }
              });
            }
          },
        55081(e, t, n) {
            "use strict";
        
            var r = n(46518);
            var i = n(44576);
            r({
              global: true,
              forced: i.globalThis !== i
            }, {
              globalThis: i
            });
          }
    });
})();
