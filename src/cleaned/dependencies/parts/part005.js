(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        87186(e, t, n) {
            "use strict";
        
            function r() {
              var e;
              var t;
              var n = typeof Symbol == "function" ? Symbol : {};
              var s = n.iterator || "@@iterator";
              var a = n.toStringTag || "@@toStringTag";
              function o(n, r, s, a) {
                var o = r && r.prototype instanceof l ? r : l;
                var d = Object.create(o.prototype);
                i(d, "_invoke", function (n, r, i) {
                  var s;
                  var a;
                  var o;
                  var l = 0;
                  var d = i || [];
                  var c = false;
                  var u = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: p,
                    f: p.bind(e, 4),
                    d: function (t, n) {
                      s = t;
                      a = 0;
                      o = e;
                      u.n = n;
                      return h;
                    }
                  };
                  function p(n, r) {
                    a = n;
                    o = r;
                    t = 0;
                    for (; !c && l && !i && t < d.length; t++) {
                      var i;
                      var s = d[t];
                      var p = u.p;
                      var m = s[2];
                      if (n > 3) {
                        if (i = m === r) {
                          o = s[(a = s[4]) ? 5 : (a = 3, 3)];
                          s[4] = s[5] = e;
                        }
                      } else if (s[0] <= p) {
                        if (i = n < 2 && p < s[1]) {
                          a = 0;
                          u.v = r;
                          u.n = s[1];
                        } else if (p < m && (i = n < 3 || s[0] > r || r > m)) {
                          s[4] = n;
                          s[5] = r;
                          u.n = m;
                          a = 0;
                        }
                      }
                    }
                    if (i || n > 1) {
                      return h;
                    }
                    c = true;
                    throw r;
                  }
                  return function (i, d, m) {
                    if (l > 1) {
                      throw TypeError("Generator is already running");
                    }
                    if (c && d === 1) {
                      p(d, m);
                    }
                    a = d;
                    o = m;
                    while ((t = a < 2 ? e : o) || !c) {
                      if (!s) {
                        if (a) {
                          if (a < 3) {
                            if (a > 1) {
                              u.n = -1;
                            }
                            p(a, o);
                          } else {
                            u.n = o;
                          }
                        } else {
                          u.v = o;
                        }
                      }
                      try {
                        l = 2;
                        if (s) {
                          if (!a) {
                            i = "next";
                          }
                          if (t = s[i]) {
                            if (!(t = t.call(s, o))) {
                              throw TypeError("iterator result is not an object");
                            }
                            if (!t.done) {
                              return t;
                            }
                            o = t.value;
                            if (a < 2) {
                              a = 0;
                            }
                          } else {
                            if (a === 1 && (t = s.return)) {
                              t.call(s);
                            }
                            if (a < 2) {
                              o = TypeError("The iterator does not provide a '" + i + "' method");
                              a = 1;
                            }
                          }
                          s = e;
                        } else if ((t = (c = u.n < 0) ? o : n.call(r, u)) !== h) {
                          break;
                        }
                      } catch (t) {
                        s = e;
                        a = 1;
                        o = t;
                      } finally {
                        l = 1;
                      }
                    }
                    return {
                      value: t,
                      done: c
                    };
                  };
                }(n, s, a), true);
                return d;
              }
              var h = {};
              function l() {}
              function d() {}
              function c() {}
              t = Object.getPrototypeOf;
              var u = [][s] ? t(t([][s]())) : (i(t = {}, s, function () {
                return this;
              }), t);
              var p = c.prototype = l.prototype = Object.create(u);
              function m(e) {
                if (Object.setPrototypeOf) {
                  Object.setPrototypeOf(e, c);
                } else {
                  e.__proto__ = c;
                  i(e, a, "GeneratorFunction");
                }
                e.prototype = Object.create(p);
                return e;
              }
              d.prototype = c;
              i(p, "constructor", c);
              i(c, "constructor", d);
              d.displayName = "GeneratorFunction";
              i(c, a, "GeneratorFunction");
              i(p);
              i(p, a, "Generator");
              i(p, s, function () {
                return this;
              });
              i(p, "toString", function () {
                return "[object Generator]";
              });
              return (r = function () {
                return {
                  w: o,
                  m
                };
              })();
            }
            function i(e, t, n, r) {
              var s = Object.defineProperty;
              try {
                s({}, "", {});
              } catch (e) {
                s = 0;
              }
              i = function (e, t, n, r) {
                function a(t, n) {
                  i(e, t, function (e) {
                    return this._invoke(t, n, e);
                  });
                }
                if (t) {
                  if (s) {
                    s(e, t, {
                      value: n,
                      enumerable: !r,
                      configurable: !r,
                      writable: !r
                    });
                  } else {
                    e[t] = n;
                  }
                } else {
                  a("next", 0);
                  a("throw", 1);
                  a("return", 2);
                }
              };
              i(e, t, n, r);
            }
            function s(e, t, n, r, i, s, a) {
              try {
                var o = e[s](a);
                var h = o.value;
              } catch (e) {
                n(e);
                return;
              }
              if (o.done) {
                t(h);
              } else {
                Promise.resolve(h).then(r, i);
              }
            }
            n.d(t, {
              A: () => h
            });
            n(48598);
            n(26099);
            n(3362);
            n(52675);
            n(89463);
            n(2259);
            n(23792);
            n(47764);
            n(62953);
            n(78125);
            n(4731);
            n(60479);
            n(40875);
            var a = o("");
            function o(e) {
              var t = document.createElement("span");
              t.innerHTML = Array(100).join("wi");
              t.style.cssText = ["position: absolute", "width: auto", "font-size: 128px", "left: -99999px"].join(" !important;");
              t.style.fontFamily = e;
              document.body.appendChild(t);
              var n = t.clientWidth;
              document.body.removeChild(t);
              return n;
            }
            function h(e, t) {
              return l.apply(this, arguments);
            }
            function l() {
              var e;
              e = r().m(function e(t, n) {
                var i;
                var s;
                return r().w(function (e) {
                  while (true) {
                    if (e.n === 0) {
                      (i = document.createElement("link")).rel = "stylesheet";
                      i.type = "text/css";
                      i.href = t;
                      i.media = "all";
                      document.head.appendChild(i);
                      (s = document.createElement("div")).className = "fontcache";
                      s.style.position = "fixed";
                      s.style.marginLeft = "-100px";
                      s.style.fontFamily = n;
                      s.textContent = ".";
                      document.body.appendChild(s);
                      return e.a(2, new Promise(function (e) {
                        var t = null;
                        var r = false;
                        function s() {
                          if (o(n) !== a && !r) {
                            if (t) {
                              window.clearInterval(t);
                            }
                            r = true;
                            e();
                          }
                        }
                        i.onload = function () {
                          t = window.setInterval(s, 10);
                        };
                      }));
                    }
                  }
                }, e);
              });
              l = function () {
                var t = this;
                var n = arguments;
                return new Promise(function (r, i) {
                  var a = e.apply(t, n);
                  function o(e) {
                    s(a, r, i, o, h, "next", e);
                  }
                  function h(e) {
                    s(a, r, i, o, h, "throw", e);
                  }
                  o(undefined);
                });
              };
              return l.apply(this, arguments);
            }
          }
    });
})();
