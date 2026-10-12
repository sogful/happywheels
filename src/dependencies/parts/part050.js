(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        7860(e, t, n) {
            "use strict";
        
            var r = n(82839);
            e.exports = /web0s(?!.*chrome)/i.test(r);
          },
        82839(e, t, n) {
            "use strict";
        
            var r = n(44576).navigator;
            var i = r && r.userAgent;
            e.exports = i ? String(i) : "";
          },
        39519(e, t, n) {
            "use strict";
        
            var r;
            var i;
            var s = n(44576);
            var a = n(82839);
            var o = s.process;
            var h = s.Deno;
            var l = o && o.versions || h && h.version;
            var d = l && l.v8;
            if (d) {
              i = (r = d.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1]);
            }
            if (!i && a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/))) {
              i = +r[1];
            }
            e.exports = i;
          },
        3607(e, t, n) {
            "use strict";
        
            var r = n(82839).match(/AppleWebKit\/(\d+)\./);
            e.exports = !!r && +r[1];
          },
        84215(e, t, n) {
            "use strict";
        
            var r = n(44576);
            var i = n(82839);
            var s = n(22195);
            function a(e) {
              return i.slice(0, e.length) === e;
            }
            e.exports = a("Bun/") ? "BUN" : a("Cloudflare-Workers") ? "CLOUDFLARE" : a("Deno/") ? "DENO" : a("Node.js/") ? "NODE" : r.Bun && typeof Bun.version == "string" ? "BUN" : r.Deno && typeof Deno.version == "object" ? "DENO" : s(r.process) === "process" ? "NODE" : r.window && r.document ? "BROWSER" : "REST";
          },
        46518(e, t, n) {
            "use strict";
        
            var r = n(44576);
            var i = n(77347).f;
            var s = n(66699);
            var a = n(36840);
            var o = n(39433);
            var h = n(77740);
            var l = n(92796);
            e.exports = function (e, t) {
              var n;
              var d;
              var c;
              var u;
              var p;
              var m = e.target;
              var f = e.global;
              var _ = e.stat;
              if (n = f ? r : _ ? r[m] || o(m, {}) : r[m] && r[m].prototype) {
                for (d in t) {
                  u = t[d];
                  c = e.dontCallGetSet ? (p = i(n, d)) && p.value : n[d];
                  if (!l(f ? d : m + (_ ? "." : "#") + d, e.forced) && c !== undefined) {
                    if (typeof u == typeof c) {
                      continue;
                    }
                    h(u, c);
                  }
                  if (e.sham || c && c.sham) {
                    s(u, "sham", true);
                  }
                  a(n, d, u, e);
                }
              }
            };
          },
        79039(e) {
            "use strict";
        
            e.exports = function (e) {
              try {
                return !!e();
              } catch (e) {
                return true;
              }
            };
          },
        89228(e, t, n) {
            "use strict";
        
            n(27495);
            var r = n(69565);
            var i = n(36840);
            var s = n(57323);
            var a = n(79039);
            var o = n(78227);
            var h = n(66699);
            var l = o("species");
            var d = RegExp.prototype;
            e.exports = function (e, t, n, c) {
              var u = o(e);
              var p = !a(function () {
                var t = {
                  [u]: function () {
                    return 7;
                  }
                };
                return ""[e](t) !== 7;
              });
              var m = p && !a(function () {
                var t = false;
                var n = /a/;
                if (e === "split") {
                  var r = {
                    [l]: function () {
                      return n;
                    }
                  };
                  (n = {
                    constructor: r,
                    flags: ""
                  })[u] = /./[u];
                }
                n.exec = function () {
                  t = true;
                  return null;
                };
                n[u]("");
                return !t;
              });
              if (!p || !m || n) {
                var f = /./[u];
                var _ = t(u, ""[e], function (e, t, n, i, a) {
                  var o = t.exec;
                  if (o === s || o === d.exec) {
                    if (p && !a) {
                      return {
                        done: true,
                        value: r(f, t, n, i)
                      };
                    } else {
                      return {
                        done: true,
                        value: r(e, n, t, i)
                      };
                    }
                  } else {
                    return {
                      done: false
                    };
                  }
                });
                i(String.prototype, e, _[0]);
                i(d, u, _[1]);
              }
              if (c) {
                h(d[u], "sham", true);
              }
            };
          },
        92744(e, t, n) {
            "use strict";
        
            var r = n(79039);
            e.exports = !r(function () {
              return Object.isExtensible(Object.preventExtensions({}));
            });
          },
        18745(e, t, n) {
            "use strict";
        
            var r = n(40616);
            var i = Function.prototype;
            var s = i.apply;
            var a = i.call;
            e.exports = typeof Reflect == "object" && Reflect.apply || (r ? a.bind(s) : function () {
              return a.apply(s, arguments);
            });
          },
        76080(e, t, n) {
            "use strict";
        
            var r = n(27476);
            var i = n(79306);
            var s = n(40616);
            var a = r(r.bind);
            e.exports = function (e, t) {
              i(e);
              if (t === undefined) {
                return e;
              } else if (s) {
                return a(e, t);
              } else {
                return function () {
                  return e.apply(t, arguments);
                };
              }
            };
          },
        40616(e, t, n) {
            "use strict";
        
            var r = n(79039);
            e.exports = !r(function () {
              var e = function () {}.bind();
              return typeof e != "function" || e.hasOwnProperty("prototype");
            });
          },
        30566(e, t, n) {
            "use strict";
        
            var r = n(79504);
            var i = n(79306);
            var s = n(20034);
            var a = n(39297);
            var o = n(67680);
            var h = n(40616);
            var l = Function;
            var d = r([].concat);
            var c = r([].join);
            var u = {};
            e.exports = h ? l.bind : function (e) {
              var t = i(this);
              var n = t.prototype;
              var r = o(arguments, 1);
              function h() {
                var n = d(r, o(arguments));
                if (this instanceof h) {
                  return function (e, t, n) {
                    if (!a(u, t)) {
                      var r = [];
                      for (var i = 0; i < t; i++) {
                        r[i] = "a[" + i + "]";
                      }
                      u[t] = l("C,a", "return new C(" + c(r, ",") + ")");
                    }
                    return u[t](e, n);
                  }(t, n.length, n);
                } else {
                  return t.apply(e, n);
                }
              }
              if (s(n)) {
                h.prototype = n;
              }
              return h;
            };
          },
        69565(e, t, n) {
            "use strict";
        
            var r = n(40616);
            var i = Function.prototype.call;
            e.exports = r ? i.bind(i) : function () {
              return i.apply(i, arguments);
            };
          },
        10350(e, t, n) {
            "use strict";
        
            var r = n(43724);
            var i = n(39297);
            var s = Function.prototype;
            var a = r && Object.getOwnPropertyDescriptor;
            var o = i(s, "name");
            var h = o && function () {}.name === "something";
            var l = o && (!r || r && a(s, "name").configurable);
            e.exports = {
              EXISTS: o,
              PROPER: h,
              CONFIGURABLE: l
            };
          },
        46706(e, t, n) {
            "use strict";
        
            var r = n(79504);
            var i = n(79306);
            e.exports = function (e, t, n) {
              try {
                return r(i(Object.getOwnPropertyDescriptor(e, t)[n]));
              } catch (e) {}
            };
          },
        27476(e, t, n) {
            "use strict";
        
            var r = n(22195);
            var i = n(79504);
            e.exports = function (e) {
              if (r(e) === "Function") {
                return i(e);
              }
            };
          },
        79504(e, t, n) {
            "use strict";
        
            var r = n(40616);
            var i = Function.prototype;
            var s = i.call;
            var a = r && i.bind.bind(s, s);
            e.exports = r ? a : function (e) {
              return function () {
                return s.apply(e, arguments);
              };
            };
          },
        44124(e, t, n) {
            "use strict";
        
            var r = n(44576);
            e.exports = function (e, t) {
              var n = r[e];
              var i = n && n.prototype;
              return i && i[t];
            };
          },
        97751(e, t, n) {
            "use strict";
        
            var r = n(44576);
            var i = n(94901);
            e.exports = function (e, t) {
              if (arguments.length < 2) {
                n = r[e];
                if (i(n)) {
                  return n;
                } else {
                  return undefined;
                }
              } else {
                return r[e] && r[e][t];
              }
              var n;
            };
          },
        18563(e, t, n) {
            "use strict";
        
            var r = n(69565);
            var i = n(94901);
            var s = n(28551);
            var a = n(16823);
            var o = n(63085);
            var h = TypeError;
            e.exports = function (e, t) {
              var n = arguments.length < 2 ? o(e) : t;
              if (i(n)) {
                return s(r(n, e));
              }
              throw new h(a(e) + " is not iterable");
            };
          },
        63085(e, t, n) {
            "use strict";
        
            var r = n(22195);
            var i = n(64117);
            var s = n(55966);
            var a = n(78227)("iterator");
            var o = Array.prototype;
            e.exports = function (e) {
              if (!i(e)) {
                return s(e, a) || s(e, "@@iterator") || (r(e) === "Arguments" ? o[a] : undefined);
              }
            };
          },
        55966(e, t, n) {
            "use strict";
        
            var r = n(79306);
            var i = n(64117);
            e.exports = function (e, t) {
              var n = e[t];
              if (i(n)) {
                return undefined;
              } else {
                return r(n);
              }
            };
          },
        2478(e, t, n) {
            "use strict";
        
            var r = n(79504);
            var i = n(48981);
            var s = Math.floor;
            var a = r("".charAt);
            var o = r("".replace);
            var h = r("".slice);
            var l = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
            var d = /\$([$&'`]|\d{1,2})/g;
            e.exports = function (e, t, n, r, c, u) {
              var p = n + e.length;
              var m = r.length;
              var f = d;
              if (c !== undefined) {
                c = i(c);
                f = l;
              }
              return o(u, f, function (i, o) {
                var l;
                switch (a(o, 0)) {
                  case "$":
                    return "$";
                  case "&":
                    return e;
                  case "`":
                    return h(t, 0, n);
                  case "'":
                    return h(t, p);
                  case "<":
                    l = c[h(o, 1, -1)];
                    break;
                  default:
                    var d = +o;
                    if (d === 0) {
                      return i;
                    }
                    if (d > m) {
                      var u = s(d / 10);
                      if (u === 0) {
                        return i;
                      } else if (u <= m) {
                        if (r[u - 1] === undefined) {
                          return a(o, 1);
                        } else {
                          return r[u - 1] + a(o, 1);
                        }
                      } else {
                        return i;
                      }
                    }
                    l = r[d - 1];
                }
                if (l === undefined) {
                  return "";
                } else {
                  return l;
                }
              });
            };
          },
        44576(e, t, n) {
            "use strict";
        
            function r(e) {
              return e && e.Math === Math && e;
            }
            e.exports = r(typeof globalThis == "object" && globalThis) || r(typeof window == "object" && window) || r(typeof self == "object" && self) || r(typeof n.g == "object" && n.g) || r(typeof this == "object" && this) || function () {
              return this;
            }() || Function("return this")();
          },
        39297(e, t, n) {
            "use strict";
        
            var r = n(79504);
            var i = n(48981);
            var s = r({}.hasOwnProperty);
            e.exports = Object.hasOwn || function (e, t) {
              return s(i(e), t);
            };
          },
        30421(e) {
            "use strict";
        
            e.exports = {};
          },
        90757(e) {
            "use strict";
        
            e.exports = function (e, t) {};
          },
        20397(e, t, n) {
            "use strict";
        
            var r = n(97751);
            e.exports = r("document", "documentElement");
          },
        35917(e, t, n) {
            "use strict";
        
            var r = n(43724);
            var i = n(79039);
            var s = n(4055);
            e.exports = !r && !i(function () {
              return Object.defineProperty(s("div"), "a", {
                get: function () {
                  return 7;
                }
              }).a !== 7;
            });
          },
        88490(e) {
            "use strict";
        
            var t = Array;
            var n = Math.abs;
            var r = Math.pow;
            var i = Math.floor;
            var s = Math.log;
            var a = Math.LN2;
            e.exports = {
              pack: function (e, o, h) {
                var l;
                var d;
                var c;
                var u = t(h);
                var p = h * 8 - o - 1;
                var m = (1 << p) - 1;
                var f = m >> 1;
                var _ = o === 23 ? r(2, -24) - r(2, -77) : 0;
                var v = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
                var y = 0;
                for ((e = n(e)) != e || e === Infinity ? (d = e != e ? 1 : 0, l = m) : (l = i(s(e) / a), e * (c = r(2, -l)) < 1 && (l--, c *= 2), (e += l + f >= 1 ? _ / c : _ * r(2, 1 - f)) * c >= 2 && (l++, c /= 2), l + f >= m ? (d = 0, l = m) : l + f >= 1 ? (d = (e * c - 1) * r(2, o), l += f) : (d = e * r(2, f - 1) * r(2, o), l = 0)); o >= 8;) {
                  u[y++] = d & 255;
                  d /= 256;
                  o -= 8;
                }
                l = l << o | d;
                p += o;
                while (p > 0) {
                  u[y++] = l & 255;
                  l /= 256;
                  p -= 8;
                }
                u[y - 1] |= v * 128;
                return u;
              },
              unpack: function (e, t) {
                var n;
                var i = e.length;
                var s = i * 8 - t - 1;
                var a = (1 << s) - 1;
                var o = a >> 1;
                var h = s - 7;
                var l = i - 1;
                var d = e[l--];
                var c = d & 127;
                for (d >>= 7; h > 0;) {
                  c = c * 256 + e[l--];
                  h -= 8;
                }
                n = c & (1 << -h) - 1;
                c >>= -h;
                h += t;
                while (h > 0) {
                  n = n * 256 + e[l--];
                  h -= 8;
                }
                if (c === 0) {
                  c = 1 - o;
                } else {
                  if (c === a) {
                    if (n) {
                      return NaN;
                    } else if (d) {
                      return -Infinity;
                    } else {
                      return Infinity;
                    }
                  }
                  n += r(2, t);
                  c -= o;
                }
                return (d ? -1 : 1) * n * r(2, c - t);
              }
            };
          },
        47055(e, t, n) {
            "use strict";
        
            var r = n(79504);
            var i = n(79039);
            var s = n(22195);
            var a = Object;
            var o = r("".split);
            e.exports = i(function () {
              return !a("z").propertyIsEnumerable(0);
            }) ? function (e) {
              if (s(e) === "String") {
                return o(e, "");
              } else {
                return a(e);
              }
            } : a;
          },
        23167(e, t, n) {
            "use strict";
        
            var r = n(94901);
            var i = n(20034);
            var s = n(52967);
            e.exports = function (e, t, n) {
              var a;
              var o;
              if (s && r(a = t.constructor) && a !== n && i(o = a.prototype) && o !== n.prototype) {
                s(e, o);
              }
              return e;
            };
          },
        33706(e, t, n) {
            "use strict";
        
            var r = n(79504);
            var i = n(94901);
            var s = n(77629);
            var a = r(Function.toString);
            if (!i(s.inspectSource)) {
              s.inspectSource = function (e) {
                return a(e);
              };
            }
            e.exports = s.inspectSource;
          },
        3451(e, t, n) {
            "use strict";
        
            var r = n(46518);
            var i = n(79504);
            var s = n(30421);
            var a = n(20034);
            var o = n(39297);
            var h = n(24913).f;
            var l = n(38480);
            var d = n(10298);
            var c = n(34124);
            var u = n(33392);
            var p = n(92744);
            var m = false;
            var f = u("meta");
            var _ = 0;
            function v(e) {
              h(e, f, {
                value: {
                  objectID: "O" + _++,
                  weakData: {}
                }
              });
            }
            var y = e.exports = {
              enable: function () {
                y.enable = function () {};
                m = true;
                var e = l.f;
                var t = i([].splice);
                var n = {
                  [f]: 1
                };
                if (e(n).length) {
                  l.f = function (n) {
                    var r = e(n);
                    for (var i = 0, s = r.length; i < s; i++) {
                      if (r[i] === f) {
                        t(r, i, 1);
                        break;
                      }
                    }
                    return r;
                  };
                  r({
                    target: "Object",
                    stat: true,
                    forced: true
                  }, {
                    getOwnPropertyNames: d.f
                  });
                }
              },
              fastKey: function (e, t) {
                if (!a(e)) {
                  if (typeof e == "symbol") {
                    return e;
                  } else {
                    return (typeof e == "string" ? "S" : "P") + e;
                  }
                }
                if (!o(e, f)) {
                  if (!c(e)) {
                    return "F";
                  }
                  if (!t) {
                    return "E";
                  }
                  v(e);
                }
                return e[f].objectID;
              },
              getWeakData: function (e, t) {
                if (!o(e, f)) {
                  if (!c(e)) {
                    return true;
                  }
                  if (!t) {
                    return false;
                  }
                  v(e);
                }
                return e[f].weakData;
              },
              onFreeze: function (e) {
                if (p && m && c(e) && !o(e, f)) {
                  v(e);
                }
                return e;
              }
            };
            s[f] = true;
          },
        91181(e, t, n) {
            "use strict";
        
            var r;
            var i;
            var s;
            var a = n(58622);
            var o = n(44576);
            var h = n(20034);
            var l = n(66699);
            var d = n(39297);
            var c = n(77629);
            var u = n(66119);
            var p = n(30421);
            var m = "Object already initialized";
            var f = o.TypeError;
            var _ = o.WeakMap;
            if (a || c.state) {
              var v = c.state ||= new _();
              v.get = v.get;
              v.has = v.has;
              v.set = v.set;
              r = function (e, t) {
                if (v.has(e)) {
                  throw new f(m);
                }
                t.facade = e;
                v.set(e, t);
                return t;
              };
              i = function (e) {
                return v.get(e) || {};
              };
              s = function (e) {
                return v.has(e);
              };
            } else {
              var y = u("state");
              p[y] = true;
              r = function (e, t) {
                if (d(e, y)) {
                  throw new f(m);
                }
                t.facade = e;
                l(e, y, t);
                return t;
              };
              i = function (e) {
                if (d(e, y)) {
                  return e[y];
                } else {
                  return {};
                }
              };
              s = function (e) {
                return d(e, y);
              };
            }
            e.exports = {
              set: r,
              get: i,
              has: s,
              enforce: function (e) {
                if (s(e)) {
                  return i(e);
                } else {
                  return r(e, {});
                }
              },
              getterFor: function (e) {
                return function (t) {
                  var n;
                  if (!h(t) || (n = i(t)).type !== e) {
                    throw new f("Incompatible receiver, " + e + " required");
                  }
                  return n;
                };
              }
            };
          },
        44209(e, t, n) {
            "use strict";
        
            var r = n(78227);
            var i = n(26269);
            var s = r("iterator");
            var a = Array.prototype;
            e.exports = function (e) {
              return e !== undefined && (i.Array === e || a[s] === e);
            };
          },
        34376(e, t, n) {
            "use strict";
        
            var r = n(22195);
            e.exports = Array.isArray || function (e) {
              return r(e) === "Array";
            };
          },
        18727(e, t, n) {
            "use strict";
        
            var r = n(36955);
            e.exports = function (e) {
              var t = r(e);
              return t === "BigInt64Array" || t === "BigUint64Array";
            };
          },
        94901(e) {
            "use strict";
        
            var t = typeof document == "object" && document.all;
            e.exports = t === undefined && t !== undefined ? function (e) {
              return typeof e == "function" || e === t;
            } : function (e) {
              return typeof e == "function";
            };
          },
        33517(e, t, n) {
            "use strict";
        
            var r = n(79504);
            var i = n(79039);
            var s = n(94901);
            var a = n(36955);
            var o = n(97751);
            var h = n(33706);
            function l() {}
            var d = o("Reflect", "construct");
            var c = /^\s*(?:class|function)\b/;
            var u = r(c.exec);
            var p = !c.test(l);
            function m(e) {
              if (!s(e)) {
                return false;
              }
              try {
                d(l, [], e);
                return true;
              } catch (e) {
                return false;
              }
            }
            function f(e) {
              if (!s(e)) {
                return false;
              }
              switch (a(e)) {
                case "AsyncFunction":
                case "GeneratorFunction":
                case "AsyncGeneratorFunction":
                  return false;
              }
              try {
                return p || !!u(c, h(e));
              } catch (e) {
                return true;
              }
            }
            f.sham = true;
            e.exports = !d || i(function () {
              var e;
              return m(m.call) || !m(Object) || !m(function () {
                e = true;
              }) || e;
            }) ? f : m;
          }
    });
})();
