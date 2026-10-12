(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        94644(e, t, n) {
            "use strict";
        
            var r;
            var i;
            var s;
            var a = n(77811);
            var o = n(43724);
            var h = n(44576);
            var l = n(94901);
            var d = n(20034);
            var c = n(39297);
            var u = n(36955);
            var p = n(16823);
            var m = n(66699);
            var f = n(36840);
            var _ = n(62106);
            var v = n(1625);
            var y = n(42787);
            var g = n(52967);
            var w = n(78227);
            var x = n(33392);
            var b = n(91181);
            var T = b.enforce;
            var A = b.get;
            var C = h.Int8Array;
            var S = C && C.prototype;
            var E = h.Uint8ClampedArray;
            var O = E && E.prototype;
            var k = C && y(C);
            var P = S && y(S);
            var M = Object.prototype;
            var R = h.TypeError;
            var I = w("toStringTag");
            var L = x("TYPED_ARRAY_TAG");
            var j = "TypedArrayConstructor";
            var B = a && !!g && u(h.opera) !== "Opera";
            var D = false;
            var F = {
              Int8Array: 1,
              Uint8Array: 1,
              Uint8ClampedArray: 1,
              Int16Array: 2,
              Uint16Array: 2,
              Int32Array: 4,
              Uint32Array: 4,
              Float32Array: 4,
              Float64Array: 8
            };
            var N = {
              BigInt64Array: 8,
              BigUint64Array: 8
            };
            function G(e) {
              var t = y(e);
              if (d(t)) {
                var n = A(t);
                if (n && c(n, j)) {
                  return n[j];
                } else {
                  return G(t);
                }
              }
            }
            function U(e) {
              if (!d(e)) {
                return false;
              }
              var t = u(e);
              return c(F, t) || c(N, t);
            }
            for (r in F) {
              if (s = (i = h[r]) && i.prototype) {
                T(s)[j] = i;
              } else {
                B = false;
              }
            }
            for (r in N) {
              if (s = (i = h[r]) && i.prototype) {
                T(s)[j] = i;
              }
            }
            if ((!B || !l(k) || k === Function.prototype) && (k = function () {
              throw new R("Incorrect invocation");
            }, B)) {
              for (r in F) {
                if (h[r]) {
                  g(h[r], k);
                }
              }
            }
            if ((!B || !P || P === M) && (P = k.prototype, B)) {
              for (r in F) {
                if (h[r]) {
                  g(h[r].prototype, P);
                }
              }
            }
            if (B && y(O) !== P) {
              g(O, P);
            }
            if (o && !c(P, I)) {
              D = true;
              _(P, I, {
                configurable: true,
                get: function () {
                  if (d(this)) {
                    return this[L];
                  } else {
                    return undefined;
                  }
                }
              });
              for (r in F) {
                if (h[r]) {
                  m(h[r].prototype, L, r);
                }
              }
            }
            e.exports = {
              NATIVE_ARRAY_BUFFER_VIEWS: B,
              TYPED_ARRAY_TAG: D && L,
              aTypedArray: function (e) {
                if (U(e)) {
                  return e;
                }
                throw new R("Target is not a typed array");
              },
              aTypedArrayConstructor: function (e) {
                if (l(e) && (!g || v(k, e))) {
                  return e;
                }
                throw new R(p(e) + " is not a typed array constructor");
              },
              exportTypedArrayMethod: function (e, t, n, r) {
                if (o) {
                  if (n) {
                    for (var i in F) {
                      var s = h[i];
                      if (s && c(s.prototype, e)) {
                        try {
                          delete s.prototype[e];
                        } catch (n) {
                          try {
                            s.prototype[e] = t;
                          } catch (e) {}
                        }
                      }
                    }
                  }
                  if (!P[e] || !!n) {
                    f(P, e, n ? t : B && S[e] || t, r);
                  }
                }
              },
              exportTypedArrayStaticMethod: function (e, t, n) {
                var r;
                var i;
                if (o) {
                  if (g) {
                    if (n) {
                      for (r in F) {
                        if ((i = h[r]) && c(i, e)) {
                          try {
                            delete i[e];
                          } catch (e) {}
                        }
                      }
                    }
                    if (k[e] && !n) {
                      return;
                    }
                    try {
                      return f(k, e, n ? t : B && k[e] || t);
                    } catch (e) {}
                  }
                  for (r in F) {
                    if (!!(i = h[r]) && (!i[e] || !!n)) {
                      f(i, e, t);
                    }
                  }
                }
              },
              getTypedArrayConstructor: G,
              isView: function (e) {
                if (!d(e)) {
                  return false;
                }
                var t = u(e);
                return t === "DataView" || c(F, t) || c(N, t);
              },
              isTypedArray: U,
              TypedArray: k,
              TypedArrayPrototype: P
            };
          },
        66346(e, t, n) {
            "use strict";
        
            var r = n(44576);
            var i = n(79504);
            var s = n(43724);
            var a = n(77811);
            var o = n(10350);
            var h = n(66699);
            var l = n(62106);
            var d = n(56279);
            var c = n(79039);
            var u = n(90679);
            var p = n(91291);
            var m = n(57696);
            var f = n(15617);
            var _ = n(88490);
            var v = n(42787);
            var y = n(52967);
            var g = n(84373);
            var w = n(67680);
            var x = n(23167);
            var b = n(77740);
            var T = n(10687);
            var A = n(91181);
            var C = o.PROPER;
            var S = o.CONFIGURABLE;
            var E = "ArrayBuffer";
            var O = "DataView";
            var k = "prototype";
            var P = "Wrong index";
            var M = A.getterFor(E);
            var R = A.getterFor(O);
            var I = A.set;
            var L = r[E];
            var j = L;
            var B = j && j[k];
            var D = r[O];
            var F = D && D[k];
            var N = Object.prototype;
            var G = r.Array;
            var U = r.RangeError;
            var V = i(g);
            var H = i([].reverse);
            var z = _.pack;
            var W = _.unpack;
            function X(e) {
              return [e & 255];
            }
            function Y(e) {
              return [e & 255, e >> 8 & 255];
            }
            function q(e) {
              return [e & 255, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255];
            }
            function J(e) {
              return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0];
            }
            function K(e) {
              return z(f(e), 23, 4);
            }
            function Z(e) {
              return z(e, 52, 8);
            }
            function $(e, t, n) {
              l(e[k], t, {
                configurable: true,
                get: function () {
                  return n(this)[t];
                }
              });
            }
            function Q(e, t, n, r) {
              var i = R(e);
              var s = m(n);
              var a = !!r;
              if (s + t > i.byteLength) {
                throw new U(P);
              }
              var o = i.bytes;
              var h = s + i.byteOffset;
              var l = w(o, h, h + t);
              if (a) {
                return l;
              } else {
                return H(l);
              }
            }
            function ee(e, t, n, r, i, s) {
              var a = R(e);
              var o = m(n);
              var h = r(+i);
              var l = !!s;
              if (o + t > a.byteLength) {
                throw new U(P);
              }
              var d = a.bytes;
              var c = o + a.byteOffset;
              for (var u = 0; u < t; u++) {
                d[c + u] = h[l ? u : t - u - 1];
              }
            }
            if (a) {
              var te = C && L.name !== E;
              if (c(function () {
                L(1);
              }) && c(function () {
                new L(-1);
              }) && !c(function () {
                new L();
                new L(1.5);
                new L(NaN);
                return L.length !== 1 || te && !S;
              })) {
                if (te && S) {
                  h(L, "name", E);
                }
              } else {
                (j = function (e) {
                  u(this, B);
                  return x(new L(m(e)), this, j);
                })[k] = B;
                B.constructor = j;
                b(j, L);
              }
              if (y && v(F) !== N) {
                y(F, N);
              }
              var ne = new D(new j(2));
              var re = i(F.setInt8);
              ne.setInt8(0, 2147483648);
              ne.setInt8(1, 2147483649);
              if (!!ne.getInt8(0) || !ne.getInt8(1)) {
                d(F, {
                  setInt8: function (e, t) {
                    re(this, e, t << 24 >> 24);
                  },
                  setUint8: function (e, t) {
                    re(this, e, t << 24 >> 24);
                  }
                }, {
                  unsafe: true
                });
              }
            } else {
              B = (j = function (e) {
                u(this, B);
                var t = m(e);
                I(this, {
                  type: E,
                  bytes: V(G(t), 0),
                  byteLength: t
                });
                if (!s) {
                  this.byteLength = t;
                  this.detached = false;
                }
              })[k];
              F = (D = function (e, t, n) {
                u(this, F);
                u(e, B);
                var r = M(e);
                var i = r.byteLength;
                var a = p(t);
                if (a < 0 || a > i) {
                  throw new U("Wrong offset");
                }
                if (a + (n = n === undefined ? i - a : m(n)) > i) {
                  throw new U("Wrong length");
                }
                I(this, {
                  type: O,
                  buffer: e,
                  byteLength: n,
                  byteOffset: a,
                  bytes: r.bytes
                });
                if (!s) {
                  this.buffer = e;
                  this.byteLength = n;
                  this.byteOffset = a;
                }
              })[k];
              if (s) {
                $(j, "byteLength", M);
                $(D, "buffer", R);
                $(D, "byteLength", R);
                $(D, "byteOffset", R);
              }
              d(F, {
                getInt8: function (e) {
                  return Q(this, 1, e)[0] << 24 >> 24;
                },
                getUint8: function (e) {
                  return Q(this, 1, e)[0];
                },
                getInt16: function (e) {
                  var t = Q(this, 2, e, arguments.length > 1 && arguments[1]);
                  return (t[1] << 8 | t[0]) << 16 >> 16;
                },
                getUint16: function (e) {
                  var t = Q(this, 2, e, arguments.length > 1 && arguments[1]);
                  return t[1] << 8 | t[0];
                },
                getInt32: function (e) {
                  return J(Q(this, 4, e, arguments.length > 1 && arguments[1]));
                },
                getUint32: function (e) {
                  return J(Q(this, 4, e, arguments.length > 1 && arguments[1])) >>> 0;
                },
                getFloat32: function (e) {
                  return W(Q(this, 4, e, arguments.length > 1 && arguments[1]), 23);
                },
                getFloat64: function (e) {
                  return W(Q(this, 8, e, arguments.length > 1 && arguments[1]), 52);
                },
                setInt8: function (e, t) {
                  ee(this, 1, e, X, t);
                },
                setUint8: function (e, t) {
                  ee(this, 1, e, X, t);
                },
                setInt16: function (e, t) {
                  ee(this, 2, e, Y, t, arguments.length > 2 && arguments[2]);
                },
                setUint16: function (e, t) {
                  ee(this, 2, e, Y, t, arguments.length > 2 && arguments[2]);
                },
                setInt32: function (e, t) {
                  ee(this, 4, e, q, t, arguments.length > 2 && arguments[2]);
                },
                setUint32: function (e, t) {
                  ee(this, 4, e, q, t, arguments.length > 2 && arguments[2]);
                },
                setFloat32: function (e, t) {
                  ee(this, 4, e, K, t, arguments.length > 2 && arguments[2]);
                },
                setFloat64: function (e, t) {
                  ee(this, 8, e, Z, t, arguments.length > 2 && arguments[2]);
                }
              });
            }
            T(j, E);
            T(D, O);
            e.exports = {
              ArrayBuffer: j,
              DataView: D
            };
          },
        57029(e, t, n) {
            "use strict";
        
            var r = n(48981);
            var i = n(35610);
            var s = n(26198);
            var a = n(84606);
            var o = Math.min;
            e.exports = [].copyWithin || function (e, t) {
              var n = r(this);
              var h = s(n);
              var l = i(e, h);
              var d = i(t, h);
              var c = arguments.length > 2 ? arguments[2] : undefined;
              var u = o((c === undefined ? h : i(c, h)) - d, h - l);
              var p = 1;
              for (d < l && l < d + u && (p = -1, d += u - 1, l += u - 1); u-- > 0;) {
                if (d in n) {
                  n[l] = n[d];
                } else {
                  a(n, l);
                }
                l += p;
                d += p;
              }
              return n;
            };
          },
        84373(e, t, n) {
            "use strict";
        
            var r = n(48981);
            var i = n(35610);
            var s = n(26198);
            e.exports = [].fill || function (e) {
              var t = r(this);
              var n = s(t);
              var a = arguments.length;
              for (var o = i(a > 1 ? arguments[1] : undefined, n), h = a > 2 ? arguments[2] : undefined, l = h === undefined ? n : i(h, n); l > o;) {
                t[o++] = e;
              }
              return t;
            };
          },
        90235(e, t, n) {
            "use strict";
        
            var r = n(59213).forEach;
            var i = n(34598)("forEach");
            e.exports = i ? [].forEach : function (e) {
              return r(this, e, arguments.length > 1 ? arguments[1] : undefined);
            };
          },
        35370(e, t, n) {
            "use strict";
        
            var r = n(26198);
            e.exports = function (e, t, n) {
              for (var i = 0, s = arguments.length > 2 ? n : r(t), a = new e(s); s > i;) {
                a[i] = t[i++];
              }
              return a;
            };
          },
        97916(e, t, n) {
            "use strict";
        
            var r = n(76080);
            var i = n(69565);
            var s = n(48981);
            var a = n(96319);
            var o = n(44209);
            var h = n(33517);
            var l = n(26198);
            var d = n(97040);
            var c = n(34527);
            var u = n(18563);
            var p = n(63085);
            var m = n(9539);
            var f = n(96837);
            var _ = Array;
            e.exports = function (e) {
              var t = h(this);
              var n = arguments.length;
              var v = n > 1 ? arguments[1] : undefined;
              var y = v !== undefined;
              if (y) {
                v = r(v, n > 2 ? arguments[2] : undefined);
              }
              var g;
              var w;
              var x;
              var b;
              var T;
              var A;
              var C = s(e);
              var S = p(C);
              var E = 0;
              if (!S || this === _ && o(S)) {
                g = l(C);
                w = t ? new this(g) : _(g);
                for (; g > E; E++) {
                  A = y ? v(C[E], E) : C[E];
                  d(w, E, A);
                }
              } else {
                w = t ? new this() : [];
                T = (b = u(C, S)).next;
                for (; !(x = i(T, b)).done; E++) {
                  try {
                    f(E);
                  } catch (e) {
                    m(b, "throw", e);
                  }
                  A = y ? a(b, v, [x.value, E], true) : x.value;
                  try {
                    d(w, E, A);
                  } catch (e) {
                    m(b, "throw", e);
                  }
                }
              }
              c(w, E);
              return w;
            };
          },
        19617(e, t, n) {
            "use strict";
        
            var r = n(25397);
            var i = n(35610);
            var s = n(26198);
            function a(e) {
              return function (t, n, a) {
                var o = r(t);
                var h = s(o);
                if (h === 0) {
                  return !e && -1;
                }
                var l;
                var d = i(a, h);
                if (e && n != n) {
                  while (h > d) {
                    if ((l = o[d++]) != l) {
                      return true;
                    }
                  }
                } else {
                  for (; h > d; d++) {
                    if ((e || d in o) && o[d] === n) {
                      return e || d || 0;
                    }
                  }
                }
                return !e && -1;
              };
            }
            e.exports = {
              m: a(true),
              q: a(false)
            };
          },
        59213(e, t, n) {
            "use strict";
        
            var r = n(76080);
            var i = n(47055);
            var s = n(48981);
            var a = n(26198);
            var o = n(1469);
            var h = n(97040);
            function l(e) {
              var t = e === 1;
              var n = e === 2;
              var l = e === 3;
              var d = e === 4;
              var c = e === 6;
              var u = e === 7;
              var p = e === 5 || c;
              return function (m, f, _) {
                var v;
                var y;
                var g = s(m);
                var w = i(g);
                for (var x = a(w), b = r(f, _), T = 0, A = 0, C = t ? o(m, x) : n || u ? o(m, 0) : undefined; x > T; T++) {
                  if ((p || T in w) && (y = b(v = w[T], T, g), e)) {
                    if (t) {
                      h(C, T, y);
                    } else if (y) {
                      switch (e) {
                        case 3:
                          return true;
                        case 5:
                          return v;
                        case 6:
                          return T;
                        case 2:
                          h(C, A++, v);
                      }
                    } else {
                      switch (e) {
                        case 4:
                          return false;
                        case 7:
                          h(C, A++, v);
                      }
                    }
                  }
                }
                if (c) {
                  return -1;
                } else if (l || d) {
                  return d;
                } else {
                  return C;
                }
              };
            }
            e.exports = {
              forEach: l(0),
              map: l(1),
              filter: l(2),
              some: l(3),
              every: l(4),
              find: l(5),
              findIndex: l(6),
              filterReject: l(7)
            };
          },
        8379(e, t, n) {
            "use strict";
        
            var r = n(18745);
            var i = n(25397);
            var s = n(91291);
            var a = n(26198);
            var o = n(34598);
            var h = Math.min;
            var l = [].lastIndexOf;
            var d = !!l && 1 / [1].lastIndexOf(1, -0) < 0;
            var c = o("lastIndexOf");
            var u = d || !c;
            e.exports = u ? function (e) {
              if (d) {
                return r(l, this, arguments) || 0;
              }
              var t = i(this);
              var n = a(t);
              if (n === 0) {
                return -1;
              }
              var o = n - 1;
              if (arguments.length > 1) {
                o = h(o, s(arguments[1]));
              }
              if (o < 0) {
                o = n + o;
              }
              for (; o >= 0; o--) {
                if (o in t && t[o] === e) {
                  return o || 0;
                }
              }
              return -1;
            } : l;
          },
        70597(e, t, n) {
            "use strict";
        
            var r = n(79039);
            var i = n(78227);
            var s = n(39519);
            var a = i("species");
            e.exports = function (e) {
              return s >= 51 || !r(function () {
                var t = [];
                (t.constructor = {})[a] = function () {
                  return {
                    foo: 1
                  };
                };
                return t[e](Boolean).foo !== 1;
              });
            };
          },
        34598(e, t, n) {
            "use strict";
        
            var r = n(79039);
            e.exports = function (e, t) {
              var n = [][e];
              return !!n && r(function () {
                n.call(null, t || function () {
                  return 1;
                }, 1);
              });
            };
          },
        80926(e, t, n) {
            "use strict";
        
            var r = n(79306);
            var i = n(48981);
            var s = n(47055);
            var a = n(26198);
            var o = TypeError;
            var h = "Reduce of empty array with no initial value";
            function l(e) {
              return function (t, n, l, d) {
                var c = i(t);
                var u = s(c);
                var p = a(c);
                r(n);
                if (p === 0 && l < 2) {
                  throw new o(h);
                }
                var m = e ? p - 1 : 0;
                var f = e ? -1 : 1;
                if (l < 2) {
                  while (true) {
                    if (m in u) {
                      d = u[m];
                      m += f;
                      break;
                    }
                    m += f;
                    if (e ? m < 0 : p <= m) {
                      throw new o(h);
                    }
                  }
                }
                for (; e ? m >= 0 : p > m; m += f) {
                  if (m in u) {
                    d = n(d, u[m], m, c);
                  }
                }
                return d;
              };
            }
            e.exports = {
              k: l(false),
              p: l(true)
            };
          },
        34527(e, t, n) {
            "use strict";
        
            var r = n(43724);
            var i = n(34376);
            var s = TypeError;
            var a = Object.getOwnPropertyDescriptor;
            var o = r && !function () {
              if (this !== undefined) {
                return true;
              }
              try {
                Object.defineProperty([], "length", {
                  writable: false
                }).length = 1;
              } catch (e) {
                return e instanceof TypeError;
              }
            }();
            e.exports = o ? function (e, t) {
              if (i(e) && !a(e, "length").writable) {
                throw new s("Cannot set read only .length");
              }
              return e.length = t;
            } : function (e, t) {
              return e.length = t;
            };
          },
        67680(e, t, n) {
            "use strict";
        
            var r = n(79504);
            e.exports = r([].slice);
          },
        74488(e, t, n) {
            "use strict";
        
            var r = n(67680);
            var i = Math.floor;
            function s(e, t) {
              var n = e.length;
              if (n < 8) {
                var a;
                var o;
                for (var h = 1; h < n;) {
                  o = h;
                  a = e[h];
                  while (o && t(e[o - 1], a) > 0) {
                    e[o] = e[--o];
                  }
                  if (o !== h++) {
                    e[o] = a;
                  }
                }
              } else {
                var l = i(n / 2);
                var d = s(r(e, 0, l), t);
                var c = s(r(e, l), t);
                for (var u = d.length, p = c.length, m = 0, f = 0; m < u || f < p;) {
                  e[m + f] = m < u && f < p ? t(d[m], c[f]) <= 0 ? d[m++] : c[f++] : m < u ? d[m++] : c[f++];
                }
              }
              return e;
            }
            e.exports = s;
          },
        87433(e, t, n) {
            "use strict";
        
            var r = n(34376);
            var i = n(33517);
            var s = n(20034);
            var a = n(78227)("species");
            var o = Array;
            e.exports = function (e) {
              var t;
              if (r(e)) {
                t = e.constructor;
                if (i(t) && (t === o || r(t.prototype)) || s(t) && (t = t[a]) === null) {
                  t = undefined;
                }
              }
              if (t === undefined) {
                return o;
              } else {
                return t;
              }
            };
          },
        1469(e, t, n) {
            "use strict";
        
            var r = n(87433);
            e.exports = function (e, t) {
              return new (r(e))(t === 0 ? 0 : t);
            };
          }
    });
})();
