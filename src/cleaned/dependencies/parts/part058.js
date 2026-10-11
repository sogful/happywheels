(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        373(e, t, n) {
            "use strict";
        
            var r = n(44576);
            var i = n(27476);
            var s = n(79039);
            var a = n(79306);
            var o = n(74488);
            var h = n(94644);
            var l = n(13709);
            var d = n(13763);
            var c = n(39519);
            var u = n(3607);
            var p = h.aTypedArray;
            var m = h.exportTypedArrayMethod;
            var f = r.Uint16Array;
            var _ = f && i(f.prototype.sort);
            var v = !!_ && (!s(function () {
              _(new f(2), null);
            }) || !s(function () {
              _(new f(2), {});
            }));
            var y = !!_ && !s(function () {
              if (c) {
                return c < 74;
              }
              if (l) {
                return l < 67;
              }
              if (d) {
                return true;
              }
              if (u) {
                return u < 602;
              }
              var e;
              var t;
              var n = new f(516);
              var r = Array(516);
              for (e = 0; e < 516; e++) {
                t = e % 4;
                n[e] = 515 - e;
                r[e] = e - t * 2 + 3;
              }
              _(n, function (e, t) {
                return (e / 4 | 0) - (t / 4 | 0);
              });
              e = 0;
              for (; e < 516; e++) {
                if (n[e] !== r[e]) {
                  return true;
                }
              }
            });
            m("sort", function (e) {
              if (e !== undefined) {
                a(e);
              }
              if (y) {
                return _(this, e);
              } else {
                return o(p(this), function (e) {
                  return function (t, n) {
                    if (e !== undefined) {
                      return +e(t, n) || 0;
                    } else if (n != n) {
                      if (t != t) {
                        return 0;
                      } else {
                        return -1;
                      }
                    } else if (t != t) {
                      return 1;
                    } else if (t === 0 && n === 0) {
                      if (1 / t > 0) {
                        if (1 / n > 0) {
                          return 0;
                        } else {
                          return 1;
                        }
                      } else if (1 / n > 0) {
                        return -1;
                      } else {
                        return 0;
                      }
                    } else if (t > n) {
                      return 1;
                    } else if (t < n) {
                      return -1;
                    } else {
                      return 0;
                    }
                  };
                }(e));
              }
            }, !y || v);
          },
        86614(e, t, n) {
            "use strict";
        
            var r = n(94644);
            var i = n(18014);
            var s = n(35610);
            var a = r.aTypedArray;
            var o = r.getTypedArrayConstructor;
            (0, r.exportTypedArrayMethod)("subarray", function (e, t) {
              var n = a(this);
              var r = n.length;
              var h = s(e, r);
              return new (o(n))(n.buffer, n.byteOffset + h * n.BYTES_PER_ELEMENT, i((t === undefined ? r : s(t, r)) - h));
            });
          },
        41405(e, t, n) {
            "use strict";
        
            var r = n(44576);
            var i = n(18745);
            var s = n(94644);
            var a = n(79039);
            var o = n(67680);
            var h = r.Int8Array;
            var l = s.aTypedArray;
            var d = s.exportTypedArrayMethod;
            var c = [].toLocaleString;
            var u = !!h && a(function () {
              c.call(new h(1));
            });
            d("toLocaleString", function () {
              return i(c, u ? o(l(this)) : l(this), o(arguments));
            }, a(function () {
              return [1, 2].toLocaleString() !== new h([1, 2]).toLocaleString();
            }) || !a(function () {
              h.prototype.toLocaleString.call([1, 2]);
            }));
          },
        33684(e, t, n) {
            "use strict";
        
            var r = n(94644).exportTypedArrayMethod;
            var i = n(79039);
            var s = n(44576);
            var a = n(79504);
            var o = s.Uint8Array;
            var h = o && o.prototype || {};
            var l = [].toString;
            var d = a([].join);
            if (i(function () {
              l.call({});
            })) {
              l = function () {
                return d(this);
              };
            }
            var c = h.toString !== l;
            r("toString", l, c);
          },
        21489(e, t, n) {
            "use strict";
        
            n(15823)("Uint8", function (e) {
              return function (t, n, r) {
                return e(this, t, n, r);
              };
            });
          },
        65746(e, t, n) {
            "use strict";
        
            var r;
            var i = n(92744);
            var s = n(44576);
            var a = n(79504);
            var o = n(56279);
            var h = n(3451);
            var l = n(16468);
            var d = n(91625);
            var c = n(20034);
            var u = n(91181).enforce;
            var p = n(79039);
            var m = n(58622);
            var f = Object;
            var _ = Array.isArray;
            var v = f.isExtensible;
            var y = f.isFrozen;
            var g = f.isSealed;
            var w = f.freeze;
            var x = f.seal;
            var b = !s.ActiveXObject && "ActiveXObject" in s;
            function T(e) {
              return function () {
                return e(this, arguments.length ? arguments[0] : undefined);
              };
            }
            var A = l("WeakMap", T, d);
            var C = A.prototype;
            var S = a(C.set);
            if (m) {
              if (b) {
                r = d.getConstructor(T, "WeakMap", true);
                h.enable();
                var E = a(C.delete);
                var O = a(C.has);
                var k = a(C.get);
                o(C, {
                  delete: function (e) {
                    if (c(e) && !v(e)) {
                      var t = u(this);
                      t.frozen ||= new r();
                      return E(this, e) || t.frozen.delete(e);
                    }
                    return E(this, e);
                  },
                  has: function (e) {
                    if (c(e) && !v(e)) {
                      var t = u(this);
                      t.frozen ||= new r();
                      return O(this, e) || t.frozen.has(e);
                    }
                    return O(this, e);
                  },
                  get: function (e) {
                    if (c(e) && !v(e)) {
                      var t = u(this);
                      t.frozen ||= new r();
                      if (O(this, e)) {
                        return k(this, e);
                      } else {
                        return t.frozen.get(e);
                      }
                    }
                    return k(this, e);
                  },
                  set: function (e, t) {
                    if (c(e) && !v(e)) {
                      var n = u(this);
                      n.frozen ||= new r();
                      if (O(this, e)) {
                        S(this, e, t);
                      } else {
                        n.frozen.set(e, t);
                      }
                    } else {
                      S(this, e, t);
                    }
                    return this;
                  }
                });
              } else if (i && p(function () {
                var e = w([]);
                S(new A(), e, 1);
                return !y(e);
              })) {
                o(C, {
                  set: function (e, t) {
                    var n;
                    if (_(e)) {
                      if (y(e)) {
                        n = w;
                      } else if (g(e)) {
                        n = x;
                      }
                    }
                    S(this, e, t);
                    if (n) {
                      n(e);
                    }
                    return this;
                  }
                });
              }
            }
          },
        73772(e, t, n) {
            "use strict";
        
            n(65746);
          },
        62480(e, t, n) {
            "use strict";
        
            n(55081);
          },
        23500(e, t, n) {
            "use strict";
        
            var r = n(44576);
            var i = n(67400);
            var s = n(79296);
            var a = n(90235);
            var o = n(66699);
            function h(e) {
              if (e && e.forEach !== a) {
                try {
                  o(e, "forEach", a);
                } catch (t) {
                  e.forEach = a;
                }
              }
            }
            for (var l in i) {
              if (i[l]) {
                h(r[l] && r[l].prototype);
              }
            }
            h(s);
          },
        62953(e, t, n) {
            "use strict";
        
            var r = n(44576);
            var i = n(67400);
            var s = n(79296);
            var a = n(23792);
            var o = n(66699);
            var h = n(10687);
            var l = n(78227)("iterator");
            var d = a.values;
            function c(e, t) {
              if (e) {
                if (e[l] !== d) {
                  try {
                    o(e, l, d);
                  } catch (t) {
                    e[l] = d;
                  }
                }
                h(e, t, true);
                if (i[t]) {
                  for (var n in a) {
                    if (e[n] !== a[n]) {
                      try {
                        o(e, n, a[n]);
                      } catch (t) {
                        e[n] = a[n];
                      }
                    }
                  }
                }
              }
            }
            for (var u in i) {
              c(r[u] && r[u].prototype, u);
            }
            c(s, "DOMTokenList");
          },
        98406(e, t, n) {
            "use strict";
        
            n(23792);
            var r = n(46518);
            var i = n(44576);
            var s = n(93389);
            var a = n(69565);
            var o = n(79504);
            var h = n(43724);
            var l = n(67416);
            var d = n(70918);
            var c = n(36840);
            var u = n(62106);
            var p = n(56279);
            var m = n(10687);
            var f = n(33994);
            var _ = n(91181);
            var v = n(90679);
            var y = n(94901);
            var g = n(39297);
            var w = n(76080);
            var x = n(36955);
            var b = n(28551);
            var T = n(20034);
            var A = n(655);
            var C = n(2360);
            var S = n(6980);
            var E = n(18563);
            var O = n(63085);
            var k = n(62529);
            var P = n(22812);
            var M = n(78227);
            var R = n(74488);
            var I = M("iterator");
            var L = "URLSearchParams";
            var j = L + "Iterator";
            var B = _.set;
            var D = _.getterFor(L);
            var F = _.getterFor(j);
            var N = d.decode;
            var G = d.encode;
            var U = s("fetch");
            var V = s("Request");
            var H = s("Headers");
            var z = V && V.prototype;
            var W = H && H.prototype;
            var X = i.TypeError;
            var Y = o("".charAt);
            var q = o([].join);
            var J = o([].push);
            var K = o("".replace);
            var Z = o([].shift);
            var $ = o([].splice);
            var Q = o("".split);
            var ee = o("".slice);
            var te = /\+/g;
            function ne(e) {
              return N(K(e, te, " "));
            }
            var re = /[!'()~]|%20/g;
            var ie = {
              "!": "%21",
              "'": "%27",
              "(": "%28",
              ")": "%29",
              "~": "%7E",
              "%20": "+"
            };
            function se(e) {
              return ie[e];
            }
            function ae(e) {
              return K(G(e), re, se);
            }
            var oe = f(function (e, t) {
              B(this, {
                type: j,
                target: D(e).entries,
                index: 0,
                kind: t
              });
            }, L, function () {
              var e = F(this);
              var t = e.target;
              var n = e.index++;
              if (!t || n >= t.length) {
                e.target = null;
                return k(undefined, true);
              }
              var r = t[n];
              switch (e.kind) {
                case "keys":
                  return k(r.key, false);
                case "values":
                  return k(r.value, false);
              }
              return k([r.key, r.value], false);
            }, true);
            function he(e) {
              this.entries = [];
              this.url = null;
              if (e !== undefined) {
                if (T(e)) {
                  this.parseObject(e);
                } else {
                  this.parseQuery(typeof e == "string" ? Y(e, 0) === "?" ? ee(e, 1) : e : A(e));
                }
              }
            }
            he.prototype = {
              type: L,
              bindURL: function (e) {
                this.url = e;
                this.update();
              },
              parseObject: function (e) {
                var t;
                var n;
                var r;
                var i;
                var s;
                var o;
                var h;
                var l = this.entries;
                var d = O(e);
                if (d) {
                  for (n = (t = E(e, d)).next; !(r = a(n, t)).done;) {
                    s = (i = E(b(r.value))).next;
                    if ((o = a(s, i)).done || (h = a(s, i)).done || !a(s, i).done) {
                      throw new X("Expected sequence with length 2");
                    }
                    J(l, {
                      key: A(o.value),
                      value: A(h.value)
                    });
                  }
                } else {
                  for (var c in e) {
                    if (g(e, c)) {
                      J(l, {
                        key: c,
                        value: A(e[c])
                      });
                    }
                  }
                }
              },
              parseQuery: function (e) {
                if (e) {
                  var t;
                  for (var n, r = this.entries, i = Q(e, "&"), s = 0; s < i.length;) {
                    if ((t = i[s++]).length) {
                      n = Q(t, "=");
                      J(r, {
                        key: ne(Z(n)),
                        value: ne(q(n, "="))
                      });
                    }
                  }
                }
              },
              serialize: function () {
                var e;
                for (var t = this.entries, n = [], r = 0; r < t.length;) {
                  e = t[r++];
                  J(n, ae(e.key) + "=" + ae(e.value));
                }
                return q(n, "&");
              },
              update: function () {
                this.entries.length = 0;
                this.parseQuery(this.url.query);
              },
              updateURL: function () {
                if (this.url) {
                  this.url.update();
                }
              }
            };
            function le() {
              v(this, de);
              var e = B(this, new he(arguments.length > 0 ? arguments[0] : undefined));
              if (!h) {
                this.size = e.entries.length;
              }
            }
            var de = le.prototype;
            p(de, {
              append: function (e, t) {
                var n = D(this);
                P(arguments.length, 2);
                J(n.entries, {
                  key: A(e),
                  value: A(t)
                });
                if (!h) {
                  this.size++;
                }
                n.updateURL();
              },
              delete: function (e) {
                var t = D(this);
                var n = P(arguments.length, 1);
                for (var r = t.entries, i = A(e), s = n < 2 ? undefined : arguments[1], a = s === undefined ? s : A(s), o = 0; o < r.length;) {
                  var l = r[o];
                  if (l.key !== i || a !== undefined && l.value !== a) {
                    o++;
                  } else {
                    $(r, o, 1);
                  }
                }
                if (!h) {
                  this.size = r.length;
                }
                t.updateURL();
              },
              get: function (e) {
                var t = D(this).entries;
                P(arguments.length, 1);
                var n = A(e);
                for (var r = 0; r < t.length; r++) {
                  if (t[r].key === n) {
                    return t[r].value;
                  }
                }
                return null;
              },
              getAll: function (e) {
                var t = D(this).entries;
                P(arguments.length, 1);
                var n = A(e);
                var r = [];
                for (var i = 0; i < t.length; i++) {
                  if (t[i].key === n) {
                    J(r, t[i].value);
                  }
                }
                return r;
              },
              has: function (e) {
                for (var t = D(this).entries, n = P(arguments.length, 1), r = A(e), i = n < 2 ? undefined : arguments[1], s = i === undefined ? i : A(i), a = 0; a < t.length;) {
                  var o = t[a++];
                  if (o.key === r && (s === undefined || o.value === s)) {
                    return true;
                  }
                }
                return false;
              },
              set: function (e, t) {
                var n = D(this);
                P(arguments.length, 2);
                var r;
                for (var i = n.entries, s = false, a = A(e), o = A(t), l = 0; l < i.length; l++) {
                  if ((r = i[l]).key === a) {
                    if (s) {
                      $(i, l--, 1);
                    } else {
                      s = true;
                      r.value = o;
                    }
                  }
                }
                if (!s) {
                  J(i, {
                    key: a,
                    value: o
                  });
                }
                if (!h) {
                  this.size = i.length;
                }
                n.updateURL();
              },
              sort: function () {
                var e = D(this);
                R(e.entries, function (e, t) {
                  if (e.key > t.key) {
                    return 1;
                  } else {
                    return -1;
                  }
                });
                e.updateURL();
              },
              forEach: function (e) {
                var t;
                for (var n = D(this).entries, r = w(e, arguments.length > 1 ? arguments[1] : undefined), i = 0; i < n.length;) {
                  r((t = n[i++]).value, t.key, this);
                }
              },
              keys: function () {
                return new oe(this, "keys");
              },
              values: function () {
                return new oe(this, "values");
              },
              entries: function () {
                return new oe(this, "entries");
              }
            }, {
              enumerable: true
            });
            c(de, I, de.entries, {
              name: "entries"
            });
            c(de, "toString", function () {
              return D(this).serialize();
            }, {
              enumerable: true
            });
            if (h) {
              u(de, "size", {
                get: function () {
                  return D(this).entries.length;
                },
                configurable: true,
                enumerable: true
              });
            }
            m(le, L);
            r({
              global: true,
              constructor: true,
              forced: !l
            }, {
              URLSearchParams: le
            });
            if (!l && y(H)) {
              var ce = o(W.has);
              var ue = o(W.set);
              function pe(e) {
                if (T(e)) {
                  var t;
                  var n = e.body;
                  if (x(n) === L) {
                    t = e.headers ? new H(e.headers) : new H();
                    if (!ce(t, "content-type")) {
                      ue(t, "content-type", "application/x-www-form-urlencoded;charset=UTF-8");
                    }
                    return C(e, {
                      body: S(0, A(n)),
                      headers: S(0, t)
                    });
                  }
                }
                return e;
              }
              if (y(U)) {
                r({
                  global: true,
                  enumerable: true,
                  dontCallGetSet: true,
                  forced: true
                }, {
                  fetch: function (e) {
                    return U(e, arguments.length > 1 ? pe(arguments[1]) : {});
                  }
                });
              }
              if (y(V)) {
                function me(e) {
                  v(this, z);
                  return new V(e, arguments.length > 1 ? pe(arguments[1]) : {});
                }
                z.constructor = me;
                me.prototype = z;
                r({
                  global: true,
                  constructor: true,
                  dontCallGetSet: true,
                  forced: true
                }, {
                  Request: me
                });
              }
            }
            e.exports = {
              URLSearchParams: le,
              getState: D
            };
          },
        48408(e, t, n) {
            "use strict";
        
            n(98406);
          }
    });
})();
