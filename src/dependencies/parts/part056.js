(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        10436(e, t, n) {
            "use strict";
        
            var r;
            var i;
            var s;
            var a;
            var o = n(46518);
            var h = n(96395);
            var l = n(16193);
            var d = n(44576);
            var c = n(19167);
            var u = n(69565);
            var p = n(36840);
            var m = n(52967);
            var f = n(10687);
            var _ = n(87633);
            var v = n(79306);
            var y = n(94901);
            var g = n(20034);
            var w = n(90679);
            var x = n(2293);
            var b = n(59225).h;
            var T = n(91955);
            var A = n(90757);
            var C = n(1103);
            var S = n(18265);
            var E = n(91181);
            var O = n(80550);
            var k = n(10916);
            var P = n(36043);
            var M = "Promise";
            var R = k.CONSTRUCTOR;
            var I = k.REJECTION_EVENT;
            var L = k.SUBCLASSING;
            var j = E.getterFor(M);
            var B = E.set;
            var D = O && O.prototype;
            var F = O;
            var N = D;
            var G = d.TypeError;
            var U = d.document;
            var V = d.process;
            var H = P.f;
            var z = H;
            var W = !!U && !!U.createEvent && !!d.dispatchEvent;
            var X = "unhandledrejection";
            function Y(e) {
              var t;
              return !!g(e) && !!y(t = e.then) && t;
            }
            function q(e, t) {
              var n;
              var r;
              var i;
              var s = t.value;
              var a = t.state === 1;
              var o = a ? e.ok : e.fail;
              var h = e.resolve;
              var l = e.reject;
              var d = e.domain;
              try {
                if (o) {
                  if (!a) {
                    if (t.rejection === 2) {
                      Q(t);
                    }
                    t.rejection = 1;
                  }
                  if (o === true) {
                    n = s;
                  } else {
                    if (d) {
                      d.enter();
                    }
                    n = o(s);
                    if (d) {
                      d.exit();
                      i = true;
                    }
                  }
                  if (n === e.promise) {
                    l(new G("Promise-chain cycle"));
                  } else if (r = Y(n)) {
                    u(r, n, h, l);
                  } else {
                    h(n);
                  }
                } else {
                  l(s);
                }
              } catch (e) {
                if (d && !i) {
                  d.exit();
                }
                l(e);
              }
            }
            function J(e, t) {
              if (!e.notified) {
                e.notified = true;
                T(function () {
                  for (var n, r = e.reactions; n = r.get();) {
                    q(n, e);
                  }
                  e.notified = false;
                  if (t && !e.rejection) {
                    Z(e);
                  }
                });
              }
            }
            function K(e, t, n) {
              var r;
              var i;
              if (W) {
                (r = U.createEvent("Event")).promise = t;
                r.reason = n;
                r.initEvent(e, false, true);
                d.dispatchEvent(r);
              } else {
                r = {
                  promise: t,
                  reason: n
                };
              }
              if (!I && (i = d["on" + e])) {
                i(r);
              } else if (e === X) {
                A("Unhandled promise rejection", n);
              }
            }
            function Z(e) {
              u(b, d, function () {
                var t;
                var n = e.facade;
                var r = e.value;
                if ($(e) && (t = C(function () {
                  if (l) {
                    V.emit("unhandledRejection", r, n);
                  } else {
                    K(X, n, r);
                  }
                }), e.rejection = l || $(e) ? 2 : 1, t.error)) {
                  throw t.value;
                }
              });
            }
            function $(e) {
              return e.rejection !== 1 && !e.parent;
            }
            function Q(e) {
              u(b, d, function () {
                var t = e.facade;
                if (l) {
                  V.emit("rejectionHandled", t);
                } else {
                  K("rejectionhandled", t, e.value);
                }
              });
            }
            function ee(e, t, n) {
              return function (r) {
                e(t, r, n);
              };
            }
            function te(e, t, n) {
              if (!e.done) {
                e.done = true;
                if (n) {
                  e = n;
                }
                e.value = t;
                e.state = 2;
                J(e, true);
              }
            }
            function ne(e, t, n) {
              if (!e.done) {
                e.done = true;
                if (n) {
                  e = n;
                }
                try {
                  if (e.facade === t) {
                    throw new G("Promise can't be resolved itself");
                  }
                  var r = Y(t);
                  if (r) {
                    T(function () {
                      var n = {
                        done: false
                      };
                      try {
                        u(r, t, ee(ne, n, e), ee(te, n, e));
                      } catch (t) {
                        te(n, t, e);
                      }
                    });
                  } else {
                    e.value = t;
                    e.state = 1;
                    J(e, false);
                  }
                } catch (t) {
                  te({
                    done: false
                  }, t, e);
                }
              }
            }
            if (R && (N = (F = function (e) {
              w(this, N);
              v(e);
              u(r, this);
              var t = j(this);
              try {
                e(ee(ne, t), ee(te, t));
              } catch (e) {
                te(t, e);
              }
            }).prototype, (r = function (e) {
              B(this, {
                type: M,
                done: false,
                notified: false,
                parent: false,
                reactions: new S(),
                rejection: false,
                state: 0,
                value: null
              });
            }).prototype = p(N, "then", function (e, t) {
              var n = j(this);
              var r = H(x(this, F));
              n.parent = true;
              r.ok = !y(e) || e;
              r.fail = y(t) && t;
              r.domain = l ? V.domain : undefined;
              if (n.state === 0) {
                n.reactions.add(r);
              } else {
                T(function () {
                  q(r, n);
                });
              }
              return r.promise;
            }), i = function () {
              var e = new r();
              var t = j(e);
              this.promise = e;
              this.resolve = ee(ne, t);
              this.reject = ee(te, t);
            }, P.f = H = function (e) {
              if (e === F || e === s) {
                return new i(e);
              } else {
                return z(e);
              }
            }, !h && y(O) && D !== Object.prototype)) {
              a = D.then;
              if (!L) {
                p(D, "then", function (e, t) {
                  var n = this;
                  return new F(function (e, t) {
                    u(a, n, e, t);
                  }).then(e, t);
                }, {
                  unsafe: true
                });
              }
              try {
                delete D.constructor;
              } catch (e) {}
              if (m) {
                m(D, N);
              }
            }
            o({
              global: true,
              constructor: true,
              wrap: true,
              forced: R
            }, {
              Promise: F
            });
            s = c.Promise;
            f(F, M, false, true);
            _(M);
          },
        3362(e, t, n) {
            "use strict";
        
            n(10436);
            n(16499);
            n(82003);
            n(7743);
            n(51481);
            n(40280);
          },
        7743(e, t, n) {
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
              race: function (e) {
                var t = this;
                var n = a.f(t);
                var r = n.reject;
                var l = o(function () {
                  var a = s(t.resolve);
                  h(e, function (e) {
                    i(a, t, e).then(n.resolve, r);
                  });
                });
                if (l.error) {
                  r(l.value);
                }
                return n.promise;
              }
            });
          },
        51481(e, t, n) {
            "use strict";
        
            var r = n(46518);
            var i = n(36043);
            r({
              target: "Promise",
              stat: true,
              forced: n(10916).CONSTRUCTOR
            }, {
              reject: function (e) {
                var t = i.f(this);
                (0, t.reject)(e);
                return t.promise;
              }
            });
          },
        40280(e, t, n) {
            "use strict";
        
            var r = n(46518);
            var i = n(97751);
            var s = n(96395);
            var a = n(80550);
            var o = n(10916).CONSTRUCTOR;
            var h = n(93438);
            var l = i("Promise");
            var d = s && !o;
            r({
              target: "Promise",
              stat: true,
              forced: s || o
            }, {
              resolve: function (e) {
                return h(d && this === l ? a : this, e);
              }
            });
          },
        84864(e, t, n) {
            "use strict";
        
            var r = n(43724);
            var i = n(44576);
            var s = n(79504);
            var a = n(92796);
            var o = n(23167);
            var h = n(66699);
            var l = n(2360);
            var d = n(38480).f;
            var c = n(1625);
            var u = n(60788);
            var p = n(655);
            var m = n(61034);
            var f = n(58429);
            var _ = n(11056);
            var v = n(36840);
            var y = n(79039);
            var g = n(39297);
            var w = n(91181).enforce;
            var x = n(87633);
            var b = n(78227);
            var T = n(83635);
            var A = n(18814);
            var C = b("match");
            var S = i.RegExp;
            var E = S.prototype;
            var O = i.SyntaxError;
            var k = s(E.exec);
            var P = s("".charAt);
            var M = s("".replace);
            var R = s("".indexOf);
            var I = s("".slice);
            var L = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
            var j = /a/g;
            var B = /a/g;
            var D = new S(j) !== j;
            var F = f.MISSED_STICKY;
            var N = f.UNSUPPORTED_Y;
            if (a("RegExp", r && (!D || F || T || A || y(function () {
              B[C] = false;
              return S(j) !== j || S(B) === B || String(S(j, "i")) !== "/a/i";
            })))) {
              var G = function (e, t) {
                var n;
                var r;
                var i;
                var s;
                var a;
                var d;
                var f = c(E, this);
                var _ = u(e);
                var v = t === undefined;
                var y = [];
                var x = e;
                if (!f && _ && v && e.constructor === G) {
                  return e;
                }
                if (_ || c(E, e)) {
                  e = e.source;
                  if (v) {
                    t = m(x);
                  }
                }
                e = e === undefined ? "" : p(e);
                t = t === undefined ? "" : p(t);
                x = e;
                if (T && "dotAll" in j && (r = !!t && R(t, "s") > -1)) {
                  t = M(t, /s/g, "");
                }
                n = t;
                if (F && "sticky" in j && (i = !!t && R(t, "y") > -1) && N) {
                  t = M(t, /y/g, "");
                }
                if (A) {
                  s = function (e) {
                    var t;
                    for (var n = e.length, r = 0, i = "", s = [], a = l(null), o = false, h = false, d = 0, c = ""; r < n; r++) {
                      if ((t = P(e, r)) === "\\") {
                        t += P(e, ++r);
                        if (!h && P(t, 1) === "\\") {
                          i += "\\x5c";
                          continue;
                        }
                      } else if (t === "]") {
                        o = false;
                      } else if (!o) {
                        switch (true) {
                          case t === "[":
                            o = true;
                            break;
                          case t === "(":
                            i += t;
                            if (k(L, I(e, r + 1))) {
                              r += 2;
                              h = true;
                              d++;
                            } else if (P(e, r + 1) !== "?") {
                              d++;
                            }
                            continue;
                          case t === ">" && h:
                            if (c === "" || g(a, c)) {
                              throw new O("Invalid capture group name");
                            }
                            a[c] = true;
                            s[s.length] = [c, d];
                            h = false;
                            c = "";
                            continue;
                        }
                      }
                      if (h) {
                        c += t;
                      } else {
                        i += t;
                      }
                    }
                    for (var u = 0; u < s.length; u++) {
                      for (var p = "\\k<" + s[u][0] + ">", m = "\\" + s[u][1]; R(i, p) > -1;) {
                        i = M(i, p, m);
                      }
                    }
                    return [i, s];
                  }(e);
                  e = s[0];
                  y = s[1];
                }
                a = o(S(e, t), f ? this : E, G);
                if (r || i || y.length) {
                  d = w(a);
                  if (r) {
                    d.dotAll = true;
                    d.raw = G(function (e) {
                      var t;
                      for (var n = e.length, r = 0, i = "", s = false; r < n; r++) {
                        if ((t = P(e, r)) !== "\\") {
                          if (s || t !== ".") {
                            if (t === "[") {
                              s = true;
                            } else if (t === "]") {
                              s = false;
                            }
                            i += t;
                          } else {
                            i += "[\\s\\S]";
                          }
                        } else {
                          i += t + P(e, ++r);
                        }
                      }
                      return i;
                    }(e), n);
                  }
                  if (i) {
                    d.sticky = true;
                  }
                  if (y.length) {
                    d.groups = y;
                  }
                }
                if (e !== x) {
                  try {
                    h(a, "source", x === "" ? "(?:)" : x);
                  } catch (e) {}
                }
                return a;
              };
              for (var U = d(S), V = 0; U.length > V;) {
                _(G, S, U[V++]);
              }
              E.constructor = G;
              G.prototype = E;
              v(i, "RegExp", G, {
                constructor: true
              });
            }
            x("RegExp");
          },
        27495(e, t, n) {
            "use strict";
        
            var r = n(46518);
            var i = n(57323);
            r({
              target: "RegExp",
              proto: true,
              forced: /./.exec !== i
            }, {
              exec: i
            });
          },
        69479(e, t, n) {
            "use strict";
        
            var r = n(43724);
            var i = n(62106);
            var s = n(65213);
            var a = n(67979);
            if (r && !s.correct) {
              i(RegExp.prototype, "flags", {
                configurable: true,
                get: a
              });
              s.correct = true;
            }
          },
        38781(e, t, n) {
            "use strict";
        
            var r = n(10350).PROPER;
            var i = n(36840);
            var s = n(28551);
            var a = n(655);
            var o = n(79039);
            var h = n(61034);
            var l = "toString";
            var d = RegExp.prototype;
            var c = d[l];
            var u = o(function () {
              return c.call({
                source: "a",
                flags: "b"
              }) !== "/a/b";
            });
            var p = r && c.name !== l;
            if (u || p) {
              i(d, l, function () {
                var e = s(this);
                return "/" + a(e.source) + "/" + a(h(e));
              }, {
                unsafe: true
              });
            }
          },
        92405(e, t, n) {
            "use strict";
        
            n(16468)("Set", function (e) {
              return function () {
                return e(this, arguments.length ? arguments[0] : undefined);
              };
            }, n(86938));
          },
        31415(e, t, n) {
            "use strict";
        
            n(92405);
          },
        89907(e, t, n) {
            "use strict";
        
            var r = n(46518);
            var i = n(77240);
            r({
              target: "String",
              proto: true,
              forced: n(23061)("anchor")
            }, {
              anchor: function (e) {
                return i(this, "a", "name", e);
              }
            });
          },
        5745(e, t, n) {
            "use strict";
        
            var r = n(46518);
            var i = n(77240);
            r({
              target: "String",
              proto: true,
              forced: n(23061)("bold")
            }, {
              bold: function () {
                return i(this, "b", "", "");
              }
            });
          },
        94298(e, t, n) {
            "use strict";
        
            var r = n(46518);
            var i = n(77240);
            r({
              target: "String",
              proto: true,
              forced: n(23061)("fixed")
            }, {
              fixed: function () {
                return i(this, "tt", "", "");
              }
            });
          },
        27337(e, t, n) {
            "use strict";
        
            var r = n(46518);
            var i = n(79504);
            var s = n(35610);
            var a = RangeError;
            var o = String.fromCharCode;
            var h = String.fromCodePoint;
            var l = i([].join);
            r({
              target: "String",
              stat: true,
              arity: 1,
              forced: !!h && h.length !== 1
            }, {
              fromCodePoint: function (e) {
                var t;
                var n = [];
                for (var r = arguments.length, i = 0; r > i;) {
                  if (s(t = +arguments[i], 1114111) !== t) {
                    throw new a(t + " is not a valid code point");
                  }
                  n[i++] = t < 65536 ? o(t) : o(55296 + ((t -= 65536) >> 10), t % 1024 + 56320);
                }
                return l(n, "");
              }
            });
          },
        47764(e, t, n) {
            "use strict";
        
            var r = n(68183).o;
            var i = n(655);
            var s = n(91181);
            var a = n(51088);
            var o = n(62529);
            var h = "String Iterator";
            var l = s.set;
            var d = s.getterFor(h);
            a(String, "String", function (e) {
              l(this, {
                type: h,
                string: i(e),
                index: 0
              });
            }, function () {
              var e;
              var t = d(this);
              var n = t.string;
              var i = t.index;
              if (i >= n.length) {
                return o(undefined, true);
              } else {
                e = r(n, i);
                t.index += e.length;
                return o(e, false);
              }
            });
          },
        71761(e, t, n) {
            "use strict";
        
            var r = n(69565);
            var i = n(79504);
            var s = n(89228);
            var a = n(28551);
            var o = n(20034);
            var h = n(18014);
            var l = n(655);
            var d = n(67750);
            var c = n(55966);
            var u = n(57829);
            var p = n(61034);
            var m = n(56682);
            var f = i("".indexOf);
            s("match", function (e, t, n) {
              return [function (t) {
                var n = d(this);
                var i = o(t) ? c(t, e) : undefined;
                if (i) {
                  return r(i, t, n);
                }
                var s = l(n);
                return new RegExp(t)[e](s);
              }, function (e) {
                var r = a(this);
                var i = l(e);
                var s = n(t, r, i);
                if (s.done) {
                  return s.value;
                }
                var o = l(p(r));
                if (!~f(o, "g")) {
                  return m(r, i);
                }
                var d = !!~f(o, "u") || !!~f(o, "v");
                r.lastIndex = 0;
                for (var c, _ = [], v = 0; (c = m(r, i)) !== null;) {
                  var y = l(c[0]);
                  _[v] = y;
                  if (y === "") {
                    r.lastIndex = u(i, h(r.lastIndex), d);
                  }
                  v++;
                }
                if (v === 0) {
                  return null;
                } else {
                  return _;
                }
              }];
            });
          },
        42781(e, t, n) {
            "use strict";
        
            n(46518)({
              target: "String",
              proto: true
            }, {
              repeat: n(72333)
            });
          },
        25440(e, t, n) {
            "use strict";
        
            var r = n(18745);
            var i = n(69565);
            var s = n(79504);
            var a = n(89228);
            var o = n(79039);
            var h = n(28551);
            var l = n(94901);
            var d = n(20034);
            var c = n(91291);
            var u = n(18014);
            var p = n(655);
            var m = n(67750);
            var f = n(57829);
            var _ = n(55966);
            var v = n(2478);
            var y = n(61034);
            var g = n(56682);
            var w = n(78227)("replace");
            var x = Math.max;
            var b = Math.min;
            var T = s([].concat);
            var A = s([].push);
            var C = s("".indexOf);
            var S = s("".slice);
            function E(e) {
              if (e === undefined) {
                return e;
              } else {
                return String(e);
              }
            }
            var O = "a".replace(/./, "$0") === "$0";
            var k = !!/./[w] && /./[w]("a", "$0") === "";
            a("replace", function (e, t, n) {
              var s = k ? "$" : "$0";
              return [function (e, n) {
                var r = m(this);
                var s = d(e) ? _(e, w) : undefined;
                if (s) {
                  return i(s, e, r, n);
                } else {
                  return i(t, p(r), e, n);
                }
              }, function (e, i) {
                var a = h(this);
                var o = p(e);
                var d = l(i);
                if (!d) {
                  i = p(i);
                }
                var m = p(y(a));
                if (typeof i == "string" && !~C(i, s) && !~C(i, "$<") && !~C(m, "y")) {
                  var _ = n(t, a, o, i);
                  if (_.done) {
                    return _.value;
                  }
                }
                var w;
                var O = !!~C(m, "g");
                if (O) {
                  w = !!~C(m, "u") || !!~C(m, "v");
                  a.lastIndex = 0;
                }
                for (var k, P = []; (k = g(a, o)) !== null && (A(P, k), O);) {
                  if (p(k[0]) === "") {
                    a.lastIndex = f(o, u(a.lastIndex), w);
                  }
                }
                var M = "";
                var R = 0;
                for (var I = 0; I < P.length; I++) {
                  var L;
                  var j = p((k = P[I])[0]);
                  var B = x(b(c(k.index), o.length), 0);
                  var D = [];
                  for (var F = 1; F < k.length; F++) {
                    A(D, E(k[F]));
                  }
                  var N = k.groups;
                  if (d) {
                    var G = T([j], D, B, o);
                    if (N !== undefined) {
                      A(G, N);
                    }
                    L = p(r(i, undefined, G));
                  } else {
                    L = v(j, o, B, D, N, i);
                  }
                  if (B >= R) {
                    M += S(o, R, B) + L;
                    R = B + j.length;
                  }
                }
                return M + S(o, R);
              }];
            }, !!o(function () {
              var e = /./;
              e.exec = function () {
                var e = [];
                e.groups = {
                  a: "7"
                };
                return e;
              };
              return "".replace(e, "$<a>") !== "7";
            }) || !O || k);
          }
    });
})();
