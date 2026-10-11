(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        90744(e, t, n) {
            "use strict";
        
            var r = n(69565);
            var i = n(79504);
            var s = n(89228);
            var a = n(28551);
            var o = n(20034);
            var h = n(67750);
            var l = n(2293);
            var d = n(57829);
            var c = n(18014);
            var u = n(655);
            var p = n(55966);
            var m = n(61034);
            var f = n(56682);
            var _ = n(58429);
            var v = n(79039);
            var y = _.UNSUPPORTED_Y;
            var g = Math.min;
            var w = i([].push);
            var x = i("".slice);
            var b = i("".indexOf);
            var T = !v(function () {
              var e = /(?:)/;
              var t = e.exec;
              e.exec = function () {
                return t.apply(this, arguments);
              };
              var n = "ab".split(e);
              return n.length !== 2 || n[0] !== "a" || n[1] !== "b";
            });
            var A = "abbc".split(/(b)*/)[1] === "c" || "test".split(/(?:)/, -1).length !== 4 || "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || ".".split(/()()/).length > 1 || "".split(/.?/).length;
            s("split", function (e, t, n) {
              var i = "0".split(undefined, 0).length ? function (e, n) {
                if (e === undefined && n === 0) {
                  return [];
                } else {
                  return r(t, this, e, n);
                }
              } : t;
              return [function (t, n) {
                var s = h(this);
                var a = o(t) ? p(t, e) : undefined;
                if (a) {
                  return r(a, t, s, n);
                } else {
                  return r(i, u(s), t, n);
                }
              }, function (e, r) {
                var s = a(this);
                var o = u(e);
                if (!A) {
                  var h = n(i, s, o, r, i !== t);
                  if (h.done) {
                    return h.value;
                  }
                }
                var p = l(s, RegExp);
                var _ = u(m(s));
                var v = !!~b(_, "u") || !!~b(_, "v");
                if (y) {
                  if (!~b(_, "g")) {
                    _ += "g";
                  }
                } else if (!~b(_, "y")) {
                  _ += "y";
                }
                var T = new p(y ? "^(?:" + s.source + ")" : s, _);
                var C = r === undefined ? 4294967295 : r >>> 0;
                if (C === 0) {
                  return [];
                }
                if (o.length === 0) {
                  if (f(T, o) === null) {
                    return [o];
                  } else {
                    return [];
                  }
                }
                var S = 0;
                for (var E = 0, O = []; E < o.length;) {
                  T.lastIndex = y ? 0 : E;
                  var k;
                  var P = f(T, y ? x(o, E) : o);
                  if (P === null || (k = g(c(T.lastIndex + (y ? E : 0)), o.length)) === S) {
                    E = d(o, E, v);
                  } else {
                    w(O, x(o, S, E));
                    if (O.length === C) {
                      return O;
                    }
                    for (var M = 1; M <= P.length - 1; M++) {
                      w(O, P[M]);
                      if (O.length === C) {
                        return O;
                      }
                    }
                    E = S = k;
                  }
                }
                w(O, x(o, S));
                return O;
              }];
            }, A || !T, y);
          },
        11392(e, t, n) {
            "use strict";
        
            var r;
            var i = n(46518);
            var s = n(27476);
            var a = n(77347).f;
            var o = n(18014);
            var h = n(655);
            var l = n(60511);
            var d = n(67750);
            var c = n(41436);
            var u = n(96395);
            var p = s("".slice);
            var m = Math.min;
            var f = c("startsWith");
            i({
              target: "String",
              proto: true,
              forced: (!!u || !!f || !(r = a(String.prototype, "startsWith"), r && !r.writable)) && !f
            }, {
              startsWith: function (e) {
                var t = h(d(this));
                l(e);
                var n = h(e);
                var r = o(m(arguments.length > 1 ? arguments[1] : undefined, t.length));
                return p(t, r, r + n.length) === n;
              }
            });
          },
        42762(e, t, n) {
            "use strict";
        
            var r = n(46518);
            var i = n(43802).Bq;
            r({
              target: "String",
              proto: true,
              forced: n(60706)("trim")
            }, {
              trim: function () {
                return i(this);
              }
            });
          },
        6761(e, t, n) {
            "use strict";
        
            var r = n(46518);
            var i = n(44576);
            var s = n(69565);
            var a = n(79504);
            var o = n(96395);
            var h = n(43724);
            var l = n(4495);
            var d = n(79039);
            var c = n(39297);
            var u = n(1625);
            var p = n(28551);
            var m = n(25397);
            var f = n(56969);
            var _ = n(655);
            var v = n(6980);
            var y = n(2360);
            var g = n(71072);
            var w = n(38480);
            var x = n(10298);
            var b = n(33717);
            var T = n(77347);
            var A = n(24913);
            var C = n(96801);
            var S = n(48773);
            var E = n(36840);
            var O = n(62106);
            var k = n(25745);
            var P = n(66119);
            var M = n(30421);
            var R = n(33392);
            var I = n(78227);
            var L = n(1951);
            var j = n(70511);
            var B = n(58242);
            var D = n(10687);
            var F = n(91181);
            var N = n(59213).forEach;
            var G = P("hidden");
            var U = "Symbol";
            var V = "prototype";
            var H = F.set;
            var z = F.getterFor(U);
            var W = Object[V];
            var X = i.Symbol;
            var Y = X && X[V];
            var q = i.RangeError;
            var J = i.TypeError;
            var K = i.QObject;
            var Z = T.f;
            var $ = A.f;
            var Q = x.f;
            var ee = S.f;
            var te = a([].push);
            var ne = k("symbols");
            var re = k("op-symbols");
            var ie = k("wks");
            var se = !K || !K[V] || !K[V].findChild;
            function ae(e, t, n) {
              var r = Z(W, t);
              if (r) {
                delete W[t];
              }
              $(e, t, n);
              if (r && e !== W) {
                $(W, t, r);
              }
              return e;
            }
            var oe = h && d(function () {
              return y($({}, "a", {
                get: function () {
                  return $(this, "a", {
                    value: 7
                  }).a;
                }
              })).a !== 7;
            }) ? ae : $;
            function he(e, t) {
              var n = ne[e] = y(Y);
              H(n, {
                type: U,
                tag: e,
                description: t
              });
              if (!h) {
                n.description = t;
              }
              return n;
            }
            function le(e, t, n) {
              if (e === W) {
                le(re, t, n);
              }
              p(e);
              var r = f(t);
              p(n);
              if (c(ne, r)) {
                if ("enumerable" in n ? !n.enumerable : !c(e, r) || c(e, G) && e[G][r]) {
                  if (!c(e, G)) {
                    $(e, G, v(1, y(null)));
                  }
                  e[G][r] = true;
                } else {
                  if (c(e, G) && e[G][r]) {
                    e[G][r] = false;
                  }
                  n = y(n, {
                    enumerable: v(0, false)
                  });
                }
                return oe(e, r, n);
              } else {
                return $(e, r, n);
              }
            }
            function de(e, t) {
              p(e);
              var n = m(t);
              var r = g(n).concat(me(n));
              N(r, function (t) {
                if (!h || !!s(ce, n, t)) {
                  le(e, t, n[t]);
                }
              });
              return e;
            }
            function ce(e) {
              var t = f(e);
              var n = s(ee, this, t);
              return (this !== W || !c(ne, t) || !!c(re, t)) && (!n && !!c(this, t) && !!c(ne, t) && (!c(this, G) || !this[G][t]) || n);
            }
            function ue(e, t) {
              var n = m(e);
              var r = f(t);
              if (n !== W || !c(ne, r) || c(re, r)) {
                var i = Z(n, r);
                if (!!i && !!c(ne, r) && (!c(n, G) || !n[G][r])) {
                  i.enumerable = true;
                }
                return i;
              }
            }
            function pe(e) {
              var t = Q(m(e));
              var n = [];
              N(t, function (e) {
                if (!c(ne, e) && !c(M, e)) {
                  te(n, e);
                }
              });
              return n;
            }
            function me(e) {
              var t = e === W;
              var n = Q(t ? re : m(e));
              var r = [];
              N(n, function (e) {
                if (!!c(ne, e) && (!t || !!c(W, e))) {
                  te(r, ne[e]);
                }
              });
              return r;
            }
            if (!l) {
              X = function () {
                if (u(Y, this)) {
                  throw new J("Symbol is not a constructor");
                }
                var e = arguments.length && arguments[0] !== undefined ? _(arguments[0]) : undefined;
                var t = R(e);
                function n(e) {
                  var r = this === undefined ? i : this;
                  if (r === W) {
                    s(n, re, e);
                  }
                  if (c(r, G) && c(r[G], t)) {
                    r[G][t] = false;
                  }
                  var a = v(1, e);
                  try {
                    oe(r, t, a);
                  } catch (e) {
                    if (!(e instanceof q)) {
                      throw e;
                    }
                    ae(r, t, a);
                  }
                }
                if (h && se) {
                  oe(W, t, {
                    configurable: true,
                    set: n
                  });
                }
                return he(t, e);
              };
              E(Y = X[V], "toString", function () {
                return z(this).tag;
              });
              E(X, "withoutSetter", function (e) {
                return he(R(e), e);
              });
              S.f = ce;
              A.f = le;
              C.f = de;
              T.f = ue;
              w.f = x.f = pe;
              b.f = me;
              L.f = function (e) {
                return he(I(e), e);
              };
              if (h) {
                O(Y, "description", {
                  configurable: true,
                  get: function () {
                    return z(this).description;
                  }
                });
                if (!o) {
                  E(W, "propertyIsEnumerable", ce, {
                    unsafe: true
                  });
                }
              }
            }
            r({
              global: true,
              constructor: true,
              wrap: true,
              forced: !l,
              sham: !l
            }, {
              Symbol: X
            });
            N(g(ie), function (e) {
              j(e);
            });
            r({
              target: U,
              stat: true,
              forced: !l
            }, {
              useSetter: function () {
                se = true;
              },
              useSimple: function () {
                se = false;
              }
            });
            r({
              target: "Object",
              stat: true,
              forced: !l,
              sham: !h
            }, {
              create: function (e, t) {
                if (t === undefined) {
                  return y(e);
                } else {
                  return de(y(e), t);
                }
              },
              defineProperty: le,
              defineProperties: de,
              getOwnPropertyDescriptor: ue
            });
            r({
              target: "Object",
              stat: true,
              forced: !l
            }, {
              getOwnPropertyNames: pe
            });
            B();
            D(X, U);
            M[G] = true;
          },
        89463(e, t, n) {
            "use strict";
        
            var r = n(46518);
            var i = n(43724);
            var s = n(44576);
            var a = n(69565);
            var o = n(79504);
            var h = n(39297);
            var l = n(94901);
            var d = n(1625);
            var c = n(655);
            var u = n(62106);
            var p = n(77740);
            var m = s.Symbol;
            var f = m && m.prototype;
            if (i && l(m) && (!("description" in f) || m().description !== undefined)) {
              var _ = {};
              function v() {
                var e = arguments.length < 1 || arguments[0] === undefined ? undefined : c(arguments[0]);
                var t = d(f, this) ? new m(e) : e === undefined ? m() : m(e);
                if (e === "") {
                  _[t] = true;
                }
                return t;
              }
              p(v, m);
              var y = v.for;
              v.for = {
                for: function (e) {
                  var t = c(e);
                  var n = a(y, this, t);
                  if (t === "") {
                    _[n] = true;
                  }
                  return n;
                }
              }.for;
              v.prototype = f;
              f.constructor = v;
              var g = String(m("description detection")) === "Symbol(description detection)";
              var w = o(f.valueOf);
              var x = o(f.toString);
              var b = /^Symbol\((.*)\)[^)]+$/;
              var T = o("".replace);
              var A = o("".slice);
              u(f, "description", {
                configurable: true,
                get: function () {
                  var e = w(this);
                  if (h(_, e)) {
                    return "";
                  }
                  var t = x(e);
                  var n = g ? A(t, 7, -1) : T(t, b, "$1");
                  if (n === "") {
                    return undefined;
                  } else {
                    return n;
                  }
                }
              });
              r({
                global: true,
                constructor: true,
                forced: true
              }, {
                Symbol: v
              });
            }
          },
        81510(e, t, n) {
            "use strict";
        
            var r = n(46518);
            var i = n(97751);
            var s = n(39297);
            var a = n(655);
            var o = n(25745);
            var h = n(91296);
            var l = o("string-to-symbol-registry");
            var d = o("symbol-to-string-registry");
            r({
              target: "Symbol",
              stat: true,
              forced: !h
            }, {
              for: function (e) {
                var t = a(e);
                if (s(l, t)) {
                  return l[t];
                }
                var n = i("Symbol")(t);
                l[t] = n;
                d[n] = t;
                return n;
              }
            });
          },
        2259(e, t, n) {
            "use strict";
        
            n(70511)("iterator");
          },
        52675(e, t, n) {
            "use strict";
        
            n(6761);
            n(81510);
            n(97812);
            n(33110);
            n(49773);
          },
        97812(e, t, n) {
            "use strict";
        
            var r = n(46518);
            var i = n(39297);
            var s = n(10757);
            var a = n(16823);
            var o = n(25745);
            var h = n(91296);
            var l = o("symbol-to-string-registry");
            r({
              target: "Symbol",
              stat: true,
              forced: !h
            }, {
              keyFor: function (e) {
                if (!s(e)) {
                  throw new TypeError(a(e) + " is not a symbol");
                }
                if (i(l, e)) {
                  return l[e];
                }
              }
            });
          },
        45700(e, t, n) {
            "use strict";
        
            var r = n(70511);
            var i = n(58242);
            r("toPrimitive");
            i();
          },
        78125(e, t, n) {
            "use strict";
        
            var r = n(97751);
            var i = n(70511);
            var s = n(10687);
            i("toStringTag");
            s(r("Symbol"), "Symbol");
          },
        81630(e, t, n) {
            "use strict";
        
            var r = n(79504);
            var i = n(94644);
            var s = r(n(57029));
            var a = i.aTypedArray;
            (0, i.exportTypedArrayMethod)("copyWithin", function (e, t) {
              return s(a(this), e, t, arguments.length > 2 ? arguments[2] : undefined);
            });
          },
        72170(e, t, n) {
            "use strict";
        
            var r = n(94644);
            var i = n(59213).every;
            var s = r.aTypedArray;
            (0, r.exportTypedArrayMethod)("every", function (e) {
              return i(s(this), e, arguments.length > 1 ? arguments[1] : undefined);
            });
          },
        75044(e, t, n) {
            "use strict";
        
            var r = n(94644);
            var i = n(84373);
            var s = n(75854);
            var a = n(36955);
            var o = n(69565);
            var h = n(79504);
            var l = n(79039);
            var d = r.aTypedArray;
            var c = r.exportTypedArrayMethod;
            var u = h("".slice);
            c("fill", function (e) {
              var t = arguments.length;
              d(this);
              var n = u(a(this), 0, 3) === "Big" ? s(e) : +e;
              return o(i, this, n, t > 1 ? arguments[1] : undefined, t > 2 ? arguments[2] : undefined);
            }, l(function () {
              var e = 0;
              new Int8Array(2).fill({
                valueOf: function () {
                  return e++;
                }
              });
              return e !== 1;
            }));
          },
        69539(e, t, n) {
            "use strict";
        
            var r = n(94644);
            var i = n(59213).filter;
            var s = n(29948);
            var a = r.aTypedArray;
            (0, r.exportTypedArrayMethod)("filter", function (e) {
              var t = i(a(this), e, arguments.length > 1 ? arguments[1] : undefined);
              return s(this, t);
            });
          },
        89955(e, t, n) {
            "use strict";
        
            var r = n(94644);
            var i = n(59213).findIndex;
            var s = r.aTypedArray;
            (0, r.exportTypedArrayMethod)("findIndex", function (e) {
              return i(s(this), e, arguments.length > 1 ? arguments[1] : undefined);
            });
          },
        31694(e, t, n) {
            "use strict";
        
            var r = n(94644);
            var i = n(59213).find;
            var s = r.aTypedArray;
            (0, r.exportTypedArrayMethod)("find", function (e) {
              return i(s(this), e, arguments.length > 1 ? arguments[1] : undefined);
            });
          },
        34594(e, t, n) {
            "use strict";
        
            n(15823)("Float32", function (e) {
              return function (t, n, r) {
                return e(this, t, n, r);
              };
            });
          },
        33206(e, t, n) {
            "use strict";
        
            var r = n(94644);
            var i = n(59213).forEach;
            var s = r.aTypedArray;
            (0, r.exportTypedArrayMethod)("forEach", function (e) {
              i(s(this), e, arguments.length > 1 ? arguments[1] : undefined);
            });
          },
        44496(e, t, n) {
            "use strict";
        
            var r = n(94644);
            var i = n(19617).m;
            var s = r.aTypedArray;
            (0, r.exportTypedArrayMethod)("includes", function (e) {
              return i(s(this), e, arguments.length > 1 ? arguments[1] : undefined);
            });
          },
        66651(e, t, n) {
            "use strict";
        
            var r = n(94644);
            var i = n(19617).q;
            var s = r.aTypedArray;
            (0, r.exportTypedArrayMethod)("indexOf", function (e) {
              return i(s(this), e, arguments.length > 1 ? arguments[1] : undefined);
            });
          },
        12887(e, t, n) {
            "use strict";
        
            var r = n(44576);
            var i = n(79039);
            var s = n(79504);
            var a = n(94644);
            var o = n(23792);
            var h = n(78227)("iterator");
            var l = r.Uint8Array;
            var d = s(o.values);
            var c = s(o.keys);
            var u = s(o.entries);
            var p = a.aTypedArray;
            var m = a.exportTypedArrayMethod;
            var f = l && l.prototype;
            var _ = !i(function () {
              f[h].call([1]);
            });
            var v = !!f && f.values && f[h] === f.values && f.values.name === "values";
            function y() {
              return d(p(this));
            }
            m("entries", function () {
              return u(p(this));
            }, _);
            m("keys", function () {
              return c(p(this));
            }, _);
            m("values", y, _ || !v, {
              name: "values"
            });
            m(h, y, _ || !v, {
              name: "values"
            });
          },
        19369(e, t, n) {
            "use strict";
        
            var r = n(94644);
            var i = n(79504);
            var s = r.aTypedArray;
            var a = r.exportTypedArrayMethod;
            var o = i([].join);
            a("join", function (e) {
              return o(s(this), e);
            });
          },
        66812(e, t, n) {
            "use strict";
        
            var r = n(94644);
            var i = n(18745);
            var s = n(8379);
            var a = r.aTypedArray;
            (0, r.exportTypedArrayMethod)("lastIndexOf", function (e) {
              var t = arguments.length;
              return i(s, a(this), t > 1 ? [e, arguments[1]] : [e]);
            });
          },
        8995(e, t, n) {
            "use strict";
        
            var r = n(94644);
            var i = n(59213).map;
            var s = n(29948);
            var a = r.aTypedArray;
            (0, r.exportTypedArrayMethod)("map", function (e) {
              var t = i(a(this), e, arguments.length > 1 ? arguments[1] : undefined);
              return s(this, t);
            });
          },
        36072(e, t, n) {
            "use strict";
        
            var r = n(94644);
            var i = n(80926).p;
            var s = r.aTypedArray;
            (0, r.exportTypedArrayMethod)("reduceRight", function (e) {
              var t = arguments.length;
              return i(s(this), e, t, t > 1 ? arguments[1] : undefined);
            });
          },
        31575(e, t, n) {
            "use strict";
        
            var r = n(94644);
            var i = n(80926).k;
            var s = r.aTypedArray;
            (0, r.exportTypedArrayMethod)("reduce", function (e) {
              var t = arguments.length;
              return i(s(this), e, t, t > 1 ? arguments[1] : undefined);
            });
          },
        88747(e, t, n) {
            "use strict";
        
            var r = n(94644);
            var i = r.aTypedArray;
            var s = r.exportTypedArrayMethod;
            var a = Math.floor;
            s("reverse", function () {
              var e;
              var t = this;
              var n = i(t).length;
              for (var r = a(n / 2), s = 0; s < r;) {
                e = t[s];
                t[s++] = t[--n];
                t[n] = e;
              }
              return t;
            });
          },
        28845(e, t, n) {
            "use strict";
        
            var r = n(44576);
            var i = n(69565);
            var s = n(94644);
            var a = n(26198);
            var o = n(58229);
            var h = n(48981);
            var l = n(79039);
            var d = r.RangeError;
            var c = r.Int8Array;
            var u = c && c.prototype;
            var p = u && u.set;
            var m = s.aTypedArray;
            var f = s.exportTypedArrayMethod;
            var _ = !l(function () {
              var e = new Uint8ClampedArray(2);
              i(p, e, {
                length: 1,
                0: 3
              }, 1);
              return e[1] !== 3;
            });
            var v = _ && s.NATIVE_ARRAY_BUFFER_VIEWS && l(function () {
              var e = new c(2);
              e.set(1);
              e.set("2", 1);
              return e[0] !== 0 || e[1] !== 2;
            });
            f("set", function (e) {
              m(this);
              var t = o(arguments.length > 1 ? arguments[1] : undefined, 1);
              var n = h(e);
              if (_) {
                return i(p, this, n, t);
              }
              var r = this.length;
              var s = a(n);
              var l = 0;
              if (s + t > r) {
                throw new d("Wrong length");
              }
              while (l < s) {
                this[t + l] = n[l++];
              }
            }, !_ || v);
          },
        29423(e, t, n) {
            "use strict";
        
            var r = n(94644);
            var i = n(79039);
            var s = n(67680);
            var a = r.aTypedArray;
            var o = r.getTypedArrayConstructor;
            (0, r.exportTypedArrayMethod)("slice", function (e, t) {
              var n = s(a(this), e, t);
              var r = o(this);
              for (var i = 0, h = n.length, l = new r(h); h > i;) {
                l[i] = n[i++];
              }
              return l;
            }, i(function () {
              new Int8Array(1).slice();
            }));
          },
        57301(e, t, n) {
            "use strict";
        
            var r = n(94644);
            var i = n(59213).some;
            var s = r.aTypedArray;
            (0, r.exportTypedArrayMethod)("some", function (e) {
              return i(s(this), e, arguments.length > 1 ? arguments[1] : undefined);
            });
          }
    });
})();
