(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        4971(e, t, n) {
            "use strict";
        
            n.d(t, {
              BF: () => Z,
              lU: () => u,
              mb: () => Q.mb,
              ws: () => Q.ws,
              pW: () => a.pW,
              Nx: () => Q.Nx,
              eV: () => f,
              ag: () => a.ag,
              Lt: () => Q.Lt,
              Ix: () => de.Ix,
              yB: () => a.yB,
              Nw: () => Q.Nw,
              GD: () => x,
              NN: () => D.NN,
              Jh: () => D.Jh,
              Qe: () => D.Qe,
              qx: () => A,
              A1: () => Q.A1,
              e: () => Q.e,
              tl: () => Q.tl,
              BR: () => D.BR,
              ox: () => Q.ox,
              kV: () => D.kV,
              s9: () => Q.s9,
              uq: () => de.uq,
              KK: () => B,
              Cm: () => D.Cm,
              j7: () => Q.j7,
              bR: () => de.bR,
              M_: () => de.M_,
              Xt: () => D.Xt,
              T6: () => i,
              kx: () => Q.kx,
              BI: () => Q.BI,
              se: () => Q.se,
              mF: () => xe,
              A_: () => ve,
              wL: () => J,
              ux: () => q,
              lk: () => $,
              MA: () => K,
              MC: () => P,
              M4: () => a.M4,
              iJ: () => D.iJ,
              dL: () => de.dL,
              NU: () => z,
              Uw: () => H,
              vg: () => X,
              QI: () => W,
              Vt: () => Y,
              _9: () => h,
              Wh: () => L,
              is: () => s,
              b0: () => I,
              Hd: () => j
            });
            var r = n.cw(function (e, t) {
              var r = n(46518);
              var i = n(77240);
              r({
                target: "String",
                proto: true,
                forced: n(23061)("italics")
              }, {
                italics: function () {
                  return i(this, "i", "", "");
                }
              });
            });
            n(62010);
            var i = function () {
              function e(e, t) {
                this.name = e;
                var n = this;
                var r = {
                  set: function (e, t, r) {
                    e[t] = r;
                    n.flush();
                    return true;
                  }
                };
                this.data = new Proxy(t, r);
              }
              e.prototype.flush = function () {
                window.localStorage.setItem(this.name, JSON.stringify(this.data));
              };
              e.getLocal = function (t) {
                var n = window.localStorage.getItem(t) || "{}";
                return new e(t, JSON.parse(n));
              };
              return e;
            }();
            function s(e, t = "_blank") {
              window.open(e.url, t);
            }
            var a = n(7395);
            n(26099);
            n(38781);
            var o = n(18990);
            var h = function () {
              function e(t) {
                this._original = o.JX(t, {
                  compact: false
                });
                if (this._original._comment) {
                  delete this._original._comment;
                }
                if (e.autoPatch) {
                  this.patch();
                }
              }
              var t = e.prototype;
              t.patch = function (e) {
                if (!e) {
                  e = JSON.parse(JSON.stringify(this._original));
                  var t = this._original.elements[0].elements;
                  e.elements = t;
                  e.children = t;
                  for (var n in t) {
                    var r = t[n].name;
                    this[r] ||= [];
                    this[r].push(t[n]);
                  }
                }
                if (e.attributes) {
                  for (var i in e.attributes) {
                    var s = e.attributes[i];
                    e["@" + i] = s;
                  }
                  e.child = function (t) {
                    return e[t];
                  };
                  e.attribute = function (t) {
                    return e.attributes[t];
                  };
                }
                if (e.elements) {
                  var a = e.elements[0];
                  if (a && a.type === "cdata") {
                    e.cdata = a.cdata;
                  }
                  e.children = e.elements;
                  for (var o in e.elements) {
                    var h = e.elements[o];
                    if (h.type === "element" && h.name) {
                      e[h.name] ||= [];
                      if (e[h.name].indexOf(h) < 0) {
                        e[h.name].push(h);
                      }
                    }
                    this.patch(h);
                  }
                } else {
                  e.elements = [];
                  e.children = [];
                }
                return e;
              };
              t.toString = function () {
                return o.v9(this._original, {
                  compact: false,
                  spaces: 4
                });
              };
              t.toXMLString = function () {
                return this.toString();
              };
              t.toCompactXMLString = function () {
                return o.v9(this._original, {
                  compact: false,
                  spaces: 0
                });
              };
              t.appendChild = function (t) {
                this._original.elements ||= [];
                this._original.elements[0] ||= {};
                this._original.elements[0].elements ||= [];
                this._original.elements[0].elements.push(t._original.elements[0]);
                if (e.autoPatch) {
                  this.patch();
                }
              };
              return e;
            }();
            h.autoPatch = true;
            var l = function () {
              function e() {}
              e.prototype.getPixiFilter = function () {
                return null;
              };
              return e;
            }();
            var d = n(53540);
            function c(e, t) {
              c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return c(e, t);
            }
            var u = function (e) {
              function t(t, n, r, i, s, a, o, h, l, d, c, u) {
                var p;
                if (t === undefined) {
                  t = 4;
                }
                if (n === undefined) {
                  n = 45;
                }
                if (r === undefined) {
                  r = 16777215;
                }
                if (i === undefined) {
                  i = 1;
                }
                if (s === undefined) {
                  s = 0;
                }
                if (a === undefined) {
                  a = 1;
                }
                if (o === undefined) {
                  o = 4;
                }
                if (h === undefined) {
                  h = 4;
                }
                if (l === undefined) {
                  l = 1;
                }
                if (d === undefined) {
                  d = 1;
                }
                if (c === undefined) {
                  c = "inner";
                }
                if (u === undefined) {
                  u = false;
                }
                (p = e.call(this) || this).angle = n;
                p.blurX = o;
                p.blurY = h;
                p.distance = t;
                p.highlightAlpha = i;
                p.highlightColor = r;
                p.knockout = u;
                p.quality = d;
                p.shadowAlpha = a;
                p.shadowColor = s;
                p.strength = l;
                p.type = c;
                return p;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              c(n, r);
              t.prototype.getPixiFilter = function () {
                return new d.l({
                  rotation: this.angle,
                  thickness: this.distance * 0.5,
                  lightColor: this.highlightColor,
                  lightAlpha: this.highlightAlpha,
                  shadowAlpha: this.shadowAlpha,
                  shadowColor: this.shadowColor
                });
              };
              return t;
            }(l);
            var p = n(95619);
            function m(e, t) {
              m = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return m(e, t);
            }
            var f = function (e) {
              function t(t, n, r) {
                var i;
                if (t === undefined) {
                  t = 4;
                }
                if (n === undefined) {
                  n = 4;
                }
                if (r === undefined) {
                  r = 4;
                }
                (i = e.call(this) || this).blurX = t;
                i.blurY = n;
                i.quality = r;
                return i;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              m(n, r);
              t.prototype.getPixiFilter = function () {
                var e = new p.e(null, this.quality * 2);
                e.blurX = this.blurX;
                e.blurY = this.blurY;
                return e;
              };
              return t;
            }(l);
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(2892);
            var _ = n(46682);
            function v(e) {
              var t = function (e) {
                if (typeof e != "object" || !e) {
                  return e;
                }
                var t = e[Symbol.toPrimitive];
                if (t !== undefined) {
                  var n = t.call(e, "string");
                  if (typeof n != "object") {
                    return n;
                  }
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(e);
              }(e);
              if (typeof t == "symbol") {
                return t;
              } else {
                return t + "";
              }
            }
            function y(e, t) {
              e.prototype = Object.create(t.prototype);
              e.prototype.constructor = e;
              g(e, t);
            }
            function g(e, t) {
              g = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return g(e, t);
            }
            var w = function (e) {
              function t() {
                return e.apply(this, arguments) || this;
              }
              y(t, e);
              n = t;
              if (r = [{
                key: "resolution",
                get: function () {
                  var e = _.W0u.RESOLUTION;
                  return e * Math.ceil(4 / e);
                },
                set: function (e) {}
              }]) {
                (function (e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || false;
                    r.configurable = true;
                    if ("value" in r) {
                      r.writable = true;
                    }
                    Object.defineProperty(e, v(r.key), r);
                  }
                })(n.prototype, r);
              }
              Object.defineProperty(n, "prototype", {
                writable: false
              });
              return n;
              var n;
              var r;
            }(n(74560).G);
            var x = function (e) {
              function t(t, n, r, i, s, a, o, h, l, d, c) {
                var u;
                if (t === undefined) {
                  t = 4;
                }
                if (n === undefined) {
                  n = 45;
                }
                if (r === undefined) {
                  r = 0;
                }
                if (i === undefined) {
                  i = 1;
                }
                if (s === undefined) {
                  s = 4;
                }
                if (a === undefined) {
                  a = 4;
                }
                if (o === undefined) {
                  o = 1;
                }
                if (h === undefined) {
                  h = 1;
                }
                if (l === undefined) {
                  l = false;
                }
                if (d === undefined) {
                  d = false;
                }
                if (c === undefined) {
                  c = false;
                }
                (u = e.call(this) || this).alpha = i;
                u.angle = n;
                u.blurX = s;
                u.blurY = a;
                u.color = r;
                u.distance = t;
                u.hideObject = c;
                u.inner = l;
                u.knockout = d;
                u.quality = h;
                u.strength = o;
                return u;
              }
              y(t, e);
              t.prototype.getPixiFilter = function () {
                return new w({
                  rotation: this.angle,
                  distance: this.distance * 0.5,
                  color: this.color,
                  alpha: this.alpha * 0.25,
                  blur: this.blurX * 0.2,
                  quality: 4
                });
              };
              return t;
            }(l);
            var b = n(8844);
            function T(e, t) {
              T = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return T(e, t);
            }
            var A = function (e) {
              function t(t, n, r, i, s, a, o, h) {
                var l;
                if (t === undefined) {
                  t = 16711680;
                }
                if (n === undefined) {
                  n = 1;
                }
                if (r === undefined) {
                  r = 6;
                }
                if (i === undefined) {
                  i = 6;
                }
                if (s === undefined) {
                  s = 2;
                }
                if (a === undefined) {
                  a = 1;
                }
                if (o === undefined) {
                  o = false;
                }
                if (h === undefined) {
                  h = false;
                }
                (l = e.call(this) || this).alpha = n;
                l.blurX = r;
                l.blurY = i;
                l.color = t;
                l.inner = o;
                l.knockout = h;
                l.quality = a;
                l.strength = s;
                return l;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              T(n, r);
              t.prototype.getPixiFilter = function () {
                return new b.q({
                  color: this.color,
                  distance: this.blurX,
                  quality: this.quality / 10 * 2,
                  outerStrength: this.strength
                });
              };
              return t;
            }(l);
            var C = n(91909);
            function S(e) {
              var t = function (e) {
                if (typeof e != "object" || !e) {
                  return e;
                }
                var t = e[Symbol.toPrimitive];
                if (t !== undefined) {
                  var n = t.call(e, "string");
                  if (typeof n != "object") {
                    return n;
                  }
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(e);
              }(e);
              if (typeof t == "symbol") {
                return t;
              } else {
                return t + "";
              }
            }
            function E(e, t) {
              E = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return E(e, t);
            }
            var O = function (e) {
              function t(t) {
                var n;
                if (t === undefined) {
                  t = 0.5;
                }
                (n = e.call(this, C, "uniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform float threshold;\n\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    // A simple & fast algorithm for getting brightness.\n    // It's inaccuracy , but good enought for this feature.\n    float _max = max(max(color.r, color.g), color.b);\n    float _min = min(min(color.r, color.g), color.b);\n    float brightness = (_max + _min) * 0.5;\n\n    if(brightness < threshold) {\n        color.rgba = vec4(0.0, 0.0, 0.0, 0.0);\n    }\n    else {\n        color.rgba = vec4(0.6, 0.0, 0.0, 0.95);\n    }\n\n    gl_FragColor = color;\n}") || this).threshold = t;
                return n;
              }
              var n;
              var r;
              var i;
              var s;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              E(n, r);
              i = t;
              if (s = [{
                key: "threshold",
                get: function () {
                  return this.uniforms.threshold;
                },
                set: function (e) {
                  this.uniforms.threshold = e;
                }
              }]) {
                (function (e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || false;
                    r.configurable = true;
                    if ("value" in r) {
                      r.writable = true;
                    }
                    Object.defineProperty(e, S(r.key), r);
                  }
                })(i.prototype, s);
              }
              Object.defineProperty(i, "prototype", {
                writable: false
              });
              return i;
            }(_.dJT);
            function k(e, t) {
              k = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return k(e, t);
            }
            var P = function (e) {
              function t(t) {
                var n;
                if (t === undefined) {
                  t = 0.1;
                }
                (n = e.call(this) || this).threshold = t;
                return n;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              k(n, r);
              t.prototype.getPixiFilter = function () {
                return new O(this.threshold);
              };
              return t;
            }(l);
            var M = n(35057);
            var R = n(41616);
            var I = new _.RvI();
            function L(e) {
              if (typeof e == "string" && (e.startsWith("0x") || e.startsWith("#"))) {
                return _.WpD.string2hex(e.replace("0x", "#"));
              } else {
                return parseInt(e);
              }
            }
            function j(e) {
              return L(e);
            }
            I.add(R.e.markDirty);
            I.autoStart = false;
            I.maxFPS = M.w.use60FPS ? 60 : 30;
            n(11392);
            n(27495);
            n(25440);
            var B = function () {
              function e() {}
              e.show = function () {
                document.body.style.cursor = e.savedCursor;
              };
              e.hide = function () {
                if (document.body.style.cursor !== "none") {
                  e.savedCursor = document.body.style.cursor;
                  document.body.style.cursor = "none";
                }
              };
              return e;
            }();
            B.savedCursor = document.body.style.cursor;
            n(28706);
            n(3362);
            n(2259);
            n(23792);
            n(47764);
            n(62953);
            n(78125);
            n(4731);
            n(60479);
            n(40875);
            var D = n(44093);
            function F() {
              var e;
              var t;
              var n = typeof Symbol == "function" ? Symbol : {};
              var r = n.iterator || "@@iterator";
              var i = n.toStringTag || "@@toStringTag";
              function s(n, r, i, s) {
                var h = r && r.prototype instanceof o ? r : o;
                var l = Object.create(h.prototype);
                N(l, "_invoke", function (n, r, i) {
                  var s;
                  var o;
                  var h;
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
                      o = 0;
                      h = e;
                      u.n = n;
                      return a;
                    }
                  };
                  function p(n, r) {
                    o = n;
                    h = r;
                    t = 0;
                    for (; !c && l && !i && t < d.length; t++) {
                      var i;
                      var s = d[t];
                      var p = u.p;
                      var m = s[2];
                      if (n > 3) {
                        if (i = m === r) {
                          h = s[(o = s[4]) ? 5 : (o = 3, 3)];
                          s[4] = s[5] = e;
                        }
                      } else if (s[0] <= p) {
                        if (i = n < 2 && p < s[1]) {
                          o = 0;
                          u.v = r;
                          u.n = s[1];
                        } else if (p < m && (i = n < 3 || s[0] > r || r > m)) {
                          s[4] = n;
                          s[5] = r;
                          u.n = m;
                          o = 0;
                        }
                      }
                    }
                    if (i || n > 1) {
                      return a;
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
                    o = d;
                    h = m;
                    while ((t = o < 2 ? e : h) || !c) {
                      if (!s) {
                        if (o) {
                          if (o < 3) {
                            if (o > 1) {
                              u.n = -1;
                            }
                            p(o, h);
                          } else {
                            u.n = h;
                          }
                        } else {
                          u.v = h;
                        }
                      }
                      try {
                        l = 2;
                        if (s) {
                          if (!o) {
                            i = "next";
                          }
                          if (t = s[i]) {
                            if (!(t = t.call(s, h))) {
                              throw TypeError("iterator result is not an object");
                            }
                            if (!t.done) {
                              return t;
                            }
                            h = t.value;
                            if (o < 2) {
                              o = 0;
                            }
                          } else {
                            if (o === 1 && (t = s.return)) {
                              t.call(s);
                            }
                            if (o < 2) {
                              h = TypeError("The iterator does not provide a '" + i + "' method");
                              o = 1;
                            }
                          }
                          s = e;
                        } else if ((t = (c = u.n < 0) ? h : n.call(r, u)) !== a) {
                          break;
                        }
                      } catch (t) {
                        s = e;
                        o = 1;
                        h = t;
                      } finally {
                        l = 1;
                      }
                    }
                    return {
                      value: t,
                      done: c
                    };
                  };
                }(n, i, s), true);
                return l;
              }
              var a = {};
              function o() {}
              function h() {}
              function l() {}
              t = Object.getPrototypeOf;
              var d = [][r] ? t(t([][r]())) : (N(t = {}, r, function () {
                return this;
              }), t);
              var c = l.prototype = o.prototype = Object.create(d);
              function u(e) {
                if (Object.setPrototypeOf) {
                  Object.setPrototypeOf(e, l);
                } else {
                  e.__proto__ = l;
                  N(e, i, "GeneratorFunction");
                }
                e.prototype = Object.create(c);
                return e;
              }
              h.prototype = l;
              N(c, "constructor", l);
              N(l, "constructor", h);
              h.displayName = "GeneratorFunction";
              N(l, i, "GeneratorFunction");
              N(c);
              N(c, i, "Generator");
              N(c, r, function () {
                return this;
              });
              N(c, "toString", function () {
                return "[object Generator]";
              });
              return (F = function () {
                return {
                  w: s,
                  m: u
                };
              })();
            }
            function N(e, t, n, r) {
              var i = Object.defineProperty;
              try {
                i({}, "", {});
              } catch (e) {
                i = 0;
              }
              N = function (e, t, n, r) {
                function s(t, n) {
                  N(e, t, function (e) {
                    return this._invoke(t, n, e);
                  });
                }
                if (t) {
                  if (i) {
                    i(e, t, {
                      value: n,
                      enumerable: !r,
                      configurable: !r,
                      writable: !r
                    });
                  } else {
                    e[t] = n;
                  }
                } else {
                  s("next", 0);
                  s("throw", 1);
                  s("return", 2);
                }
              };
              N(e, t, n, r);
            }
            function G(e, t, n, r, i, s, a) {
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
            function U(e) {
              return function () {
                var t = this;
                var n = arguments;
                return new Promise(function (r, i) {
                  var s = e.apply(t, n);
                  function a(e) {
                    G(s, r, i, a, o, "next", e);
                  }
                  function o(e) {
                    G(s, r, i, a, o, "throw", e);
                  }
                  a(undefined);
                });
              };
            }
            function V(e, t) {
              V = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return V(e, t);
            }
            var H = function (e) {
              e.BINARY = "BINARY";
              e.VARIABLES = "VARIABLES";
              return e;
            }({});
            var z = function (e) {
              function t() {
                return e.call(this) || this;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              V(n, r);
              var i = t.prototype;
              i.load = function () {
                var e = U(F().m(function e(t) {
                  var n;
                  var r;
                  return F().w(function (e) {
                    while (true) {
                      switch (e.n) {
                        case 0:
                          n = t.generateURL();
                          r = new XMLHttpRequest();
                          if (this.responseType) {
                            r.responseType = this.responseType;
                          }
                          r.addEventListener("progress", this._onprogress.bind(this));
                          r.addEventListener("load", this._onload.bind(this));
                          r.addEventListener("error", this._onerror.bind(this));
                          r.addEventListener("abort", this._onabort.bind(this));
                          r.open(t.method, n);
                          if (t.method === "POST") {
                            r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                          }
                          r.send(t.getFormData());
                        case 1:
                          return e.a(2);
                      }
                    }
                  }, e, this);
                }));
                return function (t) {
                  return e.apply(this, arguments);
                };
              }();
              i._onprogress = function (e) {
                var t = new D.CV(D.CV.PROGRESS);
                t.target = this;
                this.dispatchEvent(t);
              };
              i._onload = function () {
                var e = U(F().m(function e(t) {
                  var n;
                  var r;
                  return F().w(function (e) {
                    while (true) {
                      switch (e.n) {
                        case 0:
                          n = t.target;
                          if (this.dataFormat !== H.BINARY) {
                            e.n = 2;
                            break;
                          }
                          e.n = 1;
                          return new Response(n.response).arrayBuffer();
                        case 1:
                          this.data = e.v;
                          e.n = 3;
                          break;
                        case 2:
                          this.data = n.responseText;
                        case 3:
                          (r = new D.Jh(D.Jh.COMPLETE)).target = this;
                          this.dispatchEvent(r);
                        case 4:
                          return e.a(2);
                      }
                    }
                  }, e, this);
                }));
                return function (t) {
                  return e.apply(this, arguments);
                };
              }();
              i._onerror = function (e) {
                var t = new D.NN(D.BR.IO_ERROR);
                t.target = this;
                this.dispatchEvent(t);
              };
              i._onabort = function (e) {
                var t = new D.NN(D.BR.IO_ERROR);
                t.target = this;
                this.dispatchEvent(t);
              };
              return t;
            }(D.Qe);
            n(34782);
            var W = function (e) {
              e.DELETE = "DELETE";
              e.GET = "GET";
              e.POST = "POST";
              e.HEAD = "HEAD";
              e.OPTIONS = "OPTIONS";
              e.PUT = "PUT";
              return e;
            }({});
            var X = function () {
              function e(e) {
                this.url = e;
              }
              var t = e.prototype;
              t.generateURL = function () {
                if (this.method === "POST") {
                  return this.url;
                }
                var e = "?";
                for (var t in this.data) {
                  e += t + "=" + this.data[t] + "&";
                }
                e = e.slice(0, -1);
                return this.url + e;
              };
              t.getFormData = function () {
                if (this.method === "GET") {
                  return null;
                }
                var e = "";
                for (var t in this.data) {
                  var n = "" + this.data[t];
                  e += encodeURIComponent(t) + "=" + n + "&";
                }
                return e.slice(0, -1);
              };
              return e;
            }();
            function Y() {}
            n(42762);
            r();
            n(5745);
            n(89907);
            n(33771);
            n(71761);
            n(84864);
            n(23418);
            var q = function (e) {
              e.DYNAMIC = "dynamic";
              e.INPUT = "input";
              return e;
            }({});
            var J = function (e) {
              e.CENTER = "center";
              e.LEFT = "left";
              e.NONE = "";
              e.RIGHT = "right";
              return e;
            }({});
            var K = function (e) {
              e.CENTER = "center";
              e.LEFT = "left";
              e.RIGHT = "right";
              e.JUSTIFY = "justify";
              return e;
            }({});
            var Z = function (e) {
              e.NORMAL = "normal";
              e.ADVANCED = "advanced";
              return e;
            }({});
            function $(e, t, n, r, i, s, a, o, h, l, d, c, u) {
              this.align = "left";
              this.blockIndent = 0;
              this.bold = false;
              this.bullet = false;
              this.color = 0;
              this.font = "Times New Roman";
              this.indent = 0;
              this.italic = false;
              this.kerning = false;
              this.leading = 0;
              this.leftMargin = 0;
              this.letterSpacing = 0;
              this.rightMargin = 0;
              this.size = 12;
              this.tabStops = [];
              this.target = "";
              this.underline = false;
              this.url = "";
              if (e != null) {
                this.font = e;
              }
              if (t != null) {
                this.size = t;
              }
              if (n != null) {
                this.color = n;
              }
              if (r != null) {
                this.bold = r;
              }
              if (i != null) {
                this.italic = i;
              }
              if (s != null) {
                this.underline = s;
              }
              if (a != null) {
                this.url = a;
              }
              if (o != null) {
                this.target = o;
              }
              if (h != null) {
                this.align = h;
              }
              if (l != null) {
                this.leftMargin = l;
              }
              if (d != null) {
                this.rightMargin = d;
              }
              if (c != null) {
                this.indent = c;
              }
              if (u != null) {
                this.leading = u;
              }
            }
            var Q = n(84647);
            function ee() {
              var e;
              var t;
              var n = typeof Symbol == "function" ? Symbol : {};
              var r = n.iterator || "@@iterator";
              var i = n.toStringTag || "@@toStringTag";
              function s(n, r, i, s) {
                var h = r && r.prototype instanceof o ? r : o;
                var l = Object.create(h.prototype);
                te(l, "_invoke", function (n, r, i) {
                  var s;
                  var o;
                  var h;
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
                      o = 0;
                      h = e;
                      u.n = n;
                      return a;
                    }
                  };
                  function p(n, r) {
                    o = n;
                    h = r;
                    t = 0;
                    for (; !c && l && !i && t < d.length; t++) {
                      var i;
                      var s = d[t];
                      var p = u.p;
                      var m = s[2];
                      if (n > 3) {
                        if (i = m === r) {
                          h = s[(o = s[4]) ? 5 : (o = 3, 3)];
                          s[4] = s[5] = e;
                        }
                      } else if (s[0] <= p) {
                        if (i = n < 2 && p < s[1]) {
                          o = 0;
                          u.v = r;
                          u.n = s[1];
                        } else if (p < m && (i = n < 3 || s[0] > r || r > m)) {
                          s[4] = n;
                          s[5] = r;
                          u.n = m;
                          o = 0;
                        }
                      }
                    }
                    if (i || n > 1) {
                      return a;
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
                    o = d;
                    h = m;
                    while ((t = o < 2 ? e : h) || !c) {
                      if (!s) {
                        if (o) {
                          if (o < 3) {
                            if (o > 1) {
                              u.n = -1;
                            }
                            p(o, h);
                          } else {
                            u.n = h;
                          }
                        } else {
                          u.v = h;
                        }
                      }
                      try {
                        l = 2;
                        if (s) {
                          if (!o) {
                            i = "next";
                          }
                          if (t = s[i]) {
                            if (!(t = t.call(s, h))) {
                              throw TypeError("iterator result is not an object");
                            }
                            if (!t.done) {
                              return t;
                            }
                            h = t.value;
                            if (o < 2) {
                              o = 0;
                            }
                          } else {
                            if (o === 1 && (t = s.return)) {
                              t.call(s);
                            }
                            if (o < 2) {
                              h = TypeError("The iterator does not provide a '" + i + "' method");
                              o = 1;
                            }
                          }
                          s = e;
                        } else if ((t = (c = u.n < 0) ? h : n.call(r, u)) !== a) {
                          break;
                        }
                      } catch (t) {
                        s = e;
                        o = 1;
                        h = t;
                      } finally {
                        l = 1;
                      }
                    }
                    return {
                      value: t,
                      done: c
                    };
                  };
                }(n, i, s), true);
                return l;
              }
              var a = {};
              function o() {}
              function h() {}
              function l() {}
              t = Object.getPrototypeOf;
              var d = [][r] ? t(t([][r]())) : (te(t = {}, r, function () {
                return this;
              }), t);
              var c = l.prototype = o.prototype = Object.create(d);
              function u(e) {
                if (Object.setPrototypeOf) {
                  Object.setPrototypeOf(e, l);
                } else {
                  e.__proto__ = l;
                  te(e, i, "GeneratorFunction");
                }
                e.prototype = Object.create(c);
                return e;
              }
              h.prototype = l;
              te(c, "constructor", l);
              te(l, "constructor", h);
              h.displayName = "GeneratorFunction";
              te(l, i, "GeneratorFunction");
              te(c);
              te(c, i, "Generator");
              te(c, r, function () {
                return this;
              });
              te(c, "toString", function () {
                return "[object Generator]";
              });
              return (ee = function () {
                return {
                  w: s,
                  m: u
                };
              })();
            }
            function te(e, t, n, r) {
              var i = Object.defineProperty;
              try {
                i({}, "", {});
              } catch (e) {
                i = 0;
              }
              te = function (e, t, n, r) {
                function s(t, n) {
                  te(e, t, function (e) {
                    return this._invoke(t, n, e);
                  });
                }
                if (t) {
                  if (i) {
                    i(e, t, {
                      value: n,
                      enumerable: !r,
                      configurable: !r,
                      writable: !r
                    });
                  } else {
                    e[t] = n;
                  }
                } else {
                  s("next", 0);
                  s("throw", 1);
                  s("return", 2);
                }
              };
              te(e, t, n, r);
            }
            function ne(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                if (t) {
                  r = r.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                  });
                }
                n.push.apply(n, r);
              }
              return n;
            }
            function re(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t] ?? {};
                if (t % 2) {
                  ne(Object(n), true).forEach(function (t) {
                    ie(e, t, n[t]);
                  });
                } else if (Object.getOwnPropertyDescriptors) {
                  Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
                } else {
                  ne(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                  });
                }
              }
              return e;
            }
            function ie(e, t, n) {
              if ((t = function (e) {
                var t = function (e) {
                  if (typeof e != "object" || !e) {
                    return e;
                  }
                  var t = e[Symbol.toPrimitive];
                  if (t !== undefined) {
                    var n = t.call(e, "string");
                    if (typeof n != "object") {
                      return n;
                    }
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                  }
                  return String(e);
                }(e);
                if (typeof t == "symbol") {
                  return t;
                } else {
                  return t + "";
                }
              }(t)) in e) {
                Object.defineProperty(e, t, {
                  value: n,
                  enumerable: true,
                  configurable: true,
                  writable: true
                });
              } else {
                e[t] = n;
              }
              return e;
            }
            function se(e, t, n, r, i, s, a) {
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
            function ae(e, t) {
              ae = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return ae(e, t);
            }
            n(79432);
            n(2008);
            n(83851);
            n(23500);
            n(81278);
            var oe = {
              width: 300,
              height: 600,
              resolution: 2,
              fontSize: 12,
              fontFamily: "Arial"
            };
            var he = function (e) {
              function t() {
                return e.apply(this, arguments) || this;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              ae(n, r);
              t.prototype.renderHtml = function () {
                var e;
                e = ee().m(function e(t, n) {
                  var r;
                  var i;
                  var s;
                  var a;
                  var o;
                  var h;
                  var l;
                  var d = this;
                  return ee().w(function (e) {
                    while (true) {
                      if (e.n === 0) {
                        if (n === undefined) {
                          n = {};
                        }
                        r = re(re({}, oe), n);
                        i = r.resolution;
                        s = Math.floor(r.fontSize * i);
                        a = Math.floor((r.fontSize + 1) * i);
                        o = Math.ceil(r.width * i);
                        h = Math.ceil(r.height * i);
                        t = t.replace(/<br>/g, "<br/>");
                        l = "data:image/svg+xml,\n           <svg xmlns='http://www.w3.org/2000/svg' width='" + o + "' height='" + h + "'>\n             <foreignObject width='100%' height='100%'>\n               <div xmlns='http://www.w3.org/1999/xhtml' style='border:0px;padding:4px;font-size:" + s + "px;font-family:Arial;line-height:" + a + "px'>\n               " + t + "\n               </div>\n             </foreignObject>\n           </svg>";
                        return e.a(2, new Promise(function (e) {
                          var t = new Image();
                          t.style.border = "0px";
                          t.src = l;
                          t.onload = function () {
                            if (d.texture) {
                              d.texture.destroy(true);
                            }
                            d.texture = _.gPd.from(t);
                            d.scale.set(1 / i);
                            e(d);
                          };
                        }));
                      }
                    }
                  }, e);
                });
                function t() {
                  var t = this;
                  var n = arguments;
                  return new Promise(function (r, i) {
                    var s = e.apply(t, n);
                    function a(e) {
                      se(s, r, i, a, o, "next", e);
                    }
                    function o(e) {
                      se(s, r, i, a, o, "throw", e);
                    }
                    a(undefined);
                  });
                }
                return function (e, n) {
                  return t.apply(this, arguments);
                };
              }();
              return t;
            }(_.kxk);
            var le = n(64284);
            var de = n(61214);
            function ce(e, t) {
              if (t == null || t > e.length) {
                t = e.length;
              }
              for (var n = 0, r = Array(t); n < t; n++) {
                r[n] = e[n];
              }
              return r;
            }
            function ue() {
              var e;
              var t;
              var n = typeof Symbol == "function" ? Symbol : {};
              var r = n.iterator || "@@iterator";
              var i = n.toStringTag || "@@toStringTag";
              function s(n, r, i, s) {
                var h = r && r.prototype instanceof o ? r : o;
                var l = Object.create(h.prototype);
                pe(l, "_invoke", function (n, r, i) {
                  var s;
                  var o;
                  var h;
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
                      o = 0;
                      h = e;
                      u.n = n;
                      return a;
                    }
                  };
                  function p(n, r) {
                    o = n;
                    h = r;
                    t = 0;
                    for (; !c && l && !i && t < d.length; t++) {
                      var i;
                      var s = d[t];
                      var p = u.p;
                      var m = s[2];
                      if (n > 3) {
                        if (i = m === r) {
                          h = s[(o = s[4]) ? 5 : (o = 3, 3)];
                          s[4] = s[5] = e;
                        }
                      } else if (s[0] <= p) {
                        if (i = n < 2 && p < s[1]) {
                          o = 0;
                          u.v = r;
                          u.n = s[1];
                        } else if (p < m && (i = n < 3 || s[0] > r || r > m)) {
                          s[4] = n;
                          s[5] = r;
                          u.n = m;
                          o = 0;
                        }
                      }
                    }
                    if (i || n > 1) {
                      return a;
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
                    o = d;
                    h = m;
                    while ((t = o < 2 ? e : h) || !c) {
                      if (!s) {
                        if (o) {
                          if (o < 3) {
                            if (o > 1) {
                              u.n = -1;
                            }
                            p(o, h);
                          } else {
                            u.n = h;
                          }
                        } else {
                          u.v = h;
                        }
                      }
                      try {
                        l = 2;
                        if (s) {
                          if (!o) {
                            i = "next";
                          }
                          if (t = s[i]) {
                            if (!(t = t.call(s, h))) {
                              throw TypeError("iterator result is not an object");
                            }
                            if (!t.done) {
                              return t;
                            }
                            h = t.value;
                            if (o < 2) {
                              o = 0;
                            }
                          } else {
                            if (o === 1 && (t = s.return)) {
                              t.call(s);
                            }
                            if (o < 2) {
                              h = TypeError("The iterator does not provide a '" + i + "' method");
                              o = 1;
                            }
                          }
                          s = e;
                        } else if ((t = (c = u.n < 0) ? h : n.call(r, u)) !== a) {
                          break;
                        }
                      } catch (t) {
                        s = e;
                        o = 1;
                        h = t;
                      } finally {
                        l = 1;
                      }
                    }
                    return {
                      value: t,
                      done: c
                    };
                  };
                }(n, i, s), true);
                return l;
              }
              var a = {};
              function o() {}
              function h() {}
              function l() {}
              t = Object.getPrototypeOf;
              var d = [][r] ? t(t([][r]())) : (pe(t = {}, r, function () {
                return this;
              }), t);
              var c = l.prototype = o.prototype = Object.create(d);
              function u(e) {
                if (Object.setPrototypeOf) {
                  Object.setPrototypeOf(e, l);
                } else {
                  e.__proto__ = l;
                  pe(e, i, "GeneratorFunction");
                }
                e.prototype = Object.create(c);
                return e;
              }
              h.prototype = l;
              pe(c, "constructor", l);
              pe(l, "constructor", h);
              h.displayName = "GeneratorFunction";
              pe(l, i, "GeneratorFunction");
              pe(c);
              pe(c, i, "Generator");
              pe(c, r, function () {
                return this;
              });
              pe(c, "toString", function () {
                return "[object Generator]";
              });
              return (ue = function () {
                return {
                  w: s,
                  m: u
                };
              })();
            }
            function pe(e, t, n, r) {
              var i = Object.defineProperty;
              try {
                i({}, "", {});
              } catch (e) {
                i = 0;
              }
              pe = function (e, t, n, r) {
                function s(t, n) {
                  pe(e, t, function (e) {
                    return this._invoke(t, n, e);
                  });
                }
                if (t) {
                  if (i) {
                    i(e, t, {
                      value: n,
                      enumerable: !r,
                      configurable: !r,
                      writable: !r
                    });
                  } else {
                    e[t] = n;
                  }
                } else {
                  s("next", 0);
                  s("throw", 1);
                  s("return", 2);
                }
              };
              pe(e, t, n, r);
            }
            function me(e, t, n, r, i, s, a) {
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
            function fe(e) {
              var t = function (e) {
                if (typeof e != "object" || !e) {
                  return e;
                }
                var t = e[Symbol.toPrimitive];
                if (t !== undefined) {
                  var n = t.call(e, "string");
                  if (typeof n != "object") {
                    return n;
                  }
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(e);
              }(e);
              if (typeof t == "symbol") {
                return t;
              } else {
                return t + "";
              }
            }
            function _e(e, t) {
              _e = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return _e(e, t);
            }
            var ve = function (e) {
              function t(t) {
                var n;
                if (t === undefined) {
                  t = false;
                }
                (n = e.call(this) || this)._type = "";
                n._multiline = true;
                n._autoSize = J.LEFT;
                n._wordWrap = false;
                n._wordWrapWidth = 100;
                n._width = 100;
                n._selectable = false;
                n._antiAliasType = Z.NORMAL;
                n._maxChars = 0;
                n._restrict = null;
                n._htmlText = "";
                n._enforcedWidth = false;
                n._underline = false;
                n._underlineSprite = null;
                n._customOffset = new de.bR();
                n.description = "";
                n.usePrompt = false;
                n.editing = false;
                n.doubleClickToEdit = false;
                n.editInPlace = false;
                n.allowEdit = true;
                n._inputListenersAttached = false;
                n.onClick = function (e) {
                  e.stopPropagation();
                };
                n.onFocus = function (e) {
                  if (n.stage) {
                    n.stage.suspendKeyboardEvents = true;
                  }
                  n.editing = true;
                  if (n.doubleClickToEdit) {
                    n._pixiTextInput.text = n._pixiText.text;
                    n._pixiTextInput.visible = true;
                    n._pixiText.visible = false;
                  }
                };
                n.onBlur = function (e) {
                  if (n.stage) {
                    n.stage.suspendKeyboardEvents = false;
                  }
                  n.editing = false;
                  if (n._pixiTextInput) {
                    n._pixiTextInput._onBlurred();
                    if (n.doubleClickToEdit) {
                      n._pixiText.text = n._pixiTextInput.text;
                      n._pixiTextInput.visible = false;
                      n._pixiText.visible = true;
                    }
                  }
                };
                n.onKeyDown = function (e) {
                  if (n.editing) {
                    if (n.stage) {
                      n.stage.suspendKeyboardEvents = true;
                    }
                    n.keyboardEvent.extractNativeEventProperties(e);
                    n.dispatchEvent(n.keyboardEvent);
                  }
                  if (e.key === "Enter" && !n._useMultiline && n._pixiTextInput) {
                    n._pixiTextInput._onBlurred();
                    n._pixiTextInput.blur();
                    if (n.stage) {
                      n.stage.suspendKeyboardEvents = false;
                    }
                    n.dispatchEvent(n.event);
                  }
                };
                n.onKeyUp = function (e) {
                  if (n.editing) {
                    n.keyboardEvent.extractNativeEventProperties(e);
                    n.dispatchEvent(n.keyboardEvent);
                  }
                };
                n.onInput = function () {
                  if (n.editing) {
                    n._pixiText.text = n._pixiTextInput.text;
                    n.dispatchEvent(n.event);
                  }
                };
                n.startEditing = function () {
                  if (n.allowEdit && (!n._pixiTextInput || !n._pixiTextInput._focused)) {
                    if (n.editInPlace) {
                      var e = new D.Jh(D.Jh.VIDEO_FRAME);
                      n.dispatchEvent(e);
                    } else {
                      n.onFocus();
                      n.refreshInput();
                      if (n._pixiTextInput) {
                        n._pixiTextInput.text = n._pixiText.text;
                        n._pixiTextInput.forceRefresh();
                      }
                      n._pixiTextInput.focus();
                    }
                  }
                };
                n.stopEditing = function () {
                  if (n._pixiTextInput) {
                    n._pixiTextInput._onBlurred();
                    n._pixiTextInput.blur();
                  }
                };
                n.editPrompt = function () {
                  var e = n.description || "Enter the text";
                  var t = window.prompt(e, n.text) || n.text;
                  if (n.validateText(t)) {
                    n.text = t;
                  } else {
                    var r = t || "EMPTY";
                    window.alert("Invalid text: " + r);
                  }
                };
                n._useMultiline = t;
                n.event = new D.Jh(D.Jh.CHANGE);
                n.keyboardEvent = new D.kV(D.kV.KEY_UP);
                n._defaultTextFormat = new $();
                n.replacePixiText(new _.EYj(""));
                return n;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              _e(n, r);
              var i;
              var s;
              var a = t.prototype;
              a.destroy = function () {
                this.disableInput();
                if (this._pixiText) {
                  if (this._pixiText.parent) {
                    this._pixiText.parent.removeChild(this._pixiText);
                  }
                  if (!this._pixiText._destroyed) {
                    this._pixiText.destroy({
                      children: true,
                      texture: true,
                      baseTexture: true
                    });
                  }
                  this._pixiText = null;
                }
                if (this._pixiSprite && !this._pixiSprite._destroyed) {
                  this._pixiSprite.destroy({
                    children: true,
                    texture: true,
                    baseTexture: true
                  });
                }
                if (this._pixiTextInput) {
                  if (!this._pixiTextInput._destroyed) {
                    this._pixiTextInput.destroy({
                      children: true,
                      baseTexture: true,
                      texture: true
                    });
                  }
                  this._pixiTextInput = null;
                }
                e.prototype.destroy.call(this);
              };
              a.replacePixiText = function (e) {
                if (this._pixiText) {
                  this._pixiSprite.removeChild(this._pixiText);
                  this._pixiText.destroy({
                    children: true,
                    texture: true,
                    baseTexture: true
                  });
                }
                this._pixiText = e;
                this._pixiSprite.addChild(this._pixiText);
                e.texture.baseTexture.on("update", function () {
                  var t = e.texture;
                  var n = t.baseTexture.width;
                  var r = t.baseTexture.height;
                  if (t.orig.width !== n || t.orig.height !== r) {
                    t.orig.width = n;
                    t.orig.height = r;
                    if (t.trim) {
                      t.trim.width = n;
                      t.trim.height = r;
                    }
                    t.updateUvs();
                  }
                });
                this._width = this._pixiText.width;
                this.refresh();
              };
              a.refresh = function () {
                if (!this._pixiText.parent) {
                  this.pixiSprite.addChild(this._pixiText);
                }
                var e = this._defaultTextFormat;
                var t = {
                  align: e.align,
                  fill: e.color,
                  fontFamily: e.font,
                  fontSize: e.size,
                  fontStyle: e.italic ? "italic" : "normal",
                  fontWeight: e.bold ? "bold" : "normal",
                  leading: e.leading,
                  letterSpacing: e.letterSpacing,
                  wordWrap: this._wordWrap,
                  wordWrapWidth: this._wordWrapWidth,
                  breakWords: this._wordWrap
                };
                this._pixiText.style = t;
                switch (this._autoSize) {
                  case "left":
                  default:
                    this._pixiText.anchor.x = 0;
                    break;
                  case "right":
                    this._pixiText.anchor.x = 1;
                    break;
                  case "center":
                    this._pixiText.anchor.x = 0.5;
                }
                if (!this._wordWrap && e.align === "center" && this._enforcedWidth) {
                  this._pixiText.x = this._width / 2 - this._pixiText.width / 2 + this._customOffset.x;
                } else {
                  this._pixiText.x = this._customOffset.x;
                }
                this._pixiText.y += this._customOffset.y;
                if (this._underlineSprite) {
                  this.removeChild(this._underlineSprite);
                }
                if (this._underline) {
                  this._underlineSprite = new Q.kx();
                  var n = e.color || 0;
                  if (typeof n == "string") {
                    n = _.WpD.string2hex(n);
                  }
                  this._underlineSprite.graphics.lineStyle(1, 16777215).moveTo(this._pixiText.x, this._pixiText.y + this._pixiText.height).lineTo(this._pixiText.x + this._pixiText.width, this._pixiText.y + this._pixiText.height);
                  this._underlineSprite.graphics.pixiGraphics.tint = n;
                  this.addChild(this._underlineSprite);
                }
                this.refreshInput();
              };
              a.renderHtml = function () {
                var e;
                e = ue().m(function e(t) {
                  return ue().w(function (e) {
                    while (true) {
                      switch (e.n) {
                        case 0:
                          this.htmlText = t;
                          this._pixiText.visible = false;
                          if (this._pixiText.parent) {
                            this._pixiText.parent.removeChild(this._pixiText);
                          }
                          this._htmlSprite ||= new he();
                          if (this._htmlSprite.parent) {
                            this._htmlSprite.parent.addChild(this._htmlSprite);
                          }
                          e.n = 1;
                          return this._htmlSprite.renderHtml(t, {
                            width: this.textWidth,
                            height: this.pixiText.height,
                            fontSize: this.defaultTextFormat.size,
                            fontFamily: this.defaultTextFormat.font
                          });
                        case 1:
                          this.pixiSprite.addChild(this._htmlSprite);
                        case 2:
                          return e.a(2);
                      }
                    }
                  }, e, this);
                });
                function t() {
                  var t = this;
                  var n = arguments;
                  return new Promise(function (r, i) {
                    var s = e.apply(t, n);
                    function a(e) {
                      me(s, r, i, a, o, "next", e);
                    }
                    function o(e) {
                      me(s, r, i, a, o, "throw", e);
                    }
                    a(undefined);
                  });
                }
                return function (e) {
                  return t.apply(this, arguments);
                };
              }();
              a.setCustomOffset = function (e, t) {
                this._customOffset.x = e;
                this._customOffset.y = t;
                this.refresh();
              };
              a.appendText = function (e) {
                this.text = this.text + String(e);
              };
              a.setSelection = function (e, t) {};
              a.setTextFormat = function (e, t = -1, n = -1) {
                this._defaultTextFormat = e;
                this.refresh();
              };
              t.spriteToTextField = function (e, n) {
                var r = e.parent.getChildIndex(e);
                e.parent.removeChild(e);
                var i = new de.bR(e.pixiSprite.x, e.pixiSprite.y);
                var s = new de.bR(0, 0);
                var a = e.pixiSprite.style;
                var o = a.fontFamily;
                var h = a.fontSize;
                var l = a.fill;
                var d = a.fontWeight;
                var c = a.align;
                var u = a.leading;
                var p = a.wordWrap;
                var m = a.wordWrapWidth;
                var f = new $(o, h, l, d === "bold", false, false, "", "", c, null, null, null, u);
                var _ = new t();
                _.replacePixiText(e.pixiSprite);
                _.defaultTextFormat = f;
                _._customOffset = s;
                _.wordWrap = p;
                _._wordWrapWidth = m;
                _.x = i.x;
                _.y = i.y;
                _._pixiText.y = 0;
                _.autoSize = c;
                n.addChildAt(_, r);
                return _;
              };
              t.pixiToFlash = function (e, n) {
                var r = e.scale.clone();
                var i = e.parent.getChildIndex(e);
                e.parent.removeChild(e);
                var s = new de.bR(e.x, 0);
                var a = e.style;
                var o = a.fontFamily;
                var h = a.fontSize;
                var l = a.fill;
                var d = a.fontWeight;
                var c = a.align;
                var u = a.leading;
                var p = a.wordWrap;
                var m = a.wordWrapWidth;
                var f = new $(o, h, l, d === "bold", false, false, "", "", c, null, null, null, u);
                var _ = new t();
                _.replacePixiText(e);
                _.defaultTextFormat = f;
                _._customOffset = s;
                _.wordWrap = p;
                _.width = m;
                _.scale.x = r.x;
                _.scale.y = r.y;
                n.addChildAt(_, i);
                return _;
              };
              a.enableInput = function () {
                if (!this.hasEventListener(D.Cm.DOUBLE_CLICK)) {
                  if (this.doubleClickToEdit) {
                    this.addEventListener(D.Cm.DOUBLE_CLICK, this.startEditing);
                  }
                  this.mouseEnabled = true;
                  this._pixiText.visible = this.doubleClickToEdit;
                  if (!this.usePrompt) {
                    this._pixiTextInput ||= this._useMultiline ? new le.Sm({
                      input: {
                        multiline: true,
                        wordWrap: this._wordWrap
                      }
                    }) : new le.Sm({});
                    this.pixiSprite.addChild(this._pixiTextInput);
                    if (!this._inputListenersAttached) {
                      this._pixiTextInput.on("focus", this.onFocus);
                      this._pixiTextInput.on("blur", this.onBlur);
                      this._pixiTextInput.on("keydown", this.onKeyDown);
                      this._pixiTextInput.on("keyup", this.onKeyUp);
                      this._pixiTextInput.on("input", this.onInput);
                      this._inputListenersAttached = true;
                    }
                    this._pixiTextInput.visible = !this.doubleClickToEdit;
                    if (this._maxChars) {
                      this._pixiTextInput.maxLength = this._maxChars;
                    }
                  }
                }
              };
              a.disableInput = function () {
                if (this._pixiText) {
                  this._pixiText.visible = true;
                }
                this.removeEventListener(D.Cm.DOUBLE_CLICK, this.startEditing);
                this.mouseEnabled = false;
                if (this._pixiTextInput) {
                  if (this._inputListenersAttached) {
                    this._pixiTextInput.off("focus", this.onFocus);
                    this._pixiTextInput.off("blur", this.onBlur);
                    this._pixiTextInput.off("keydown", this.onKeyDown);
                    this._pixiTextInput.off("keyup", this.onKeyUp);
                    this._pixiTextInput.off("input", this.onInput);
                    this._inputListenersAttached = false;
                  }
                  if (this._pixiTextInput.parent) {
                    this._pixiTextInput.parent.removeChild(this._pixiTextInput);
                  }
                }
              };
              a.refreshInput = function () {
                var e = this._type === q.INPUT;
                if (e) {
                  this.enableInput();
                } else {
                  this.disableInput();
                }
                if (e && !this.usePrompt) {
                  this._pixiTextInput.x = this._pixiText.x;
                  this._pixiTextInput.y = this._pixiText.y;
                  this._pixiTextInput.text = this._pixiText.text;
                  if (this._restrict) {
                    this._pixiTextInput.restrict = this._restrict;
                  }
                  this._pixiTextInput.setInputStyle("fontFamily", this._pixiText.style.fontFamily);
                  this._pixiTextInput.setInputStyle("fontSize", this._pixiText.style.fontSize + "px");
                  this._pixiTextInput.setInputStyle("color", this._pixiText.style.fill);
                  if (this._enforcedWidth) {
                    this._pixiTextInput.setInputStyle("width", this._width + "px");
                  }
                  var t = this._defaultTextFormat;
                  this._pixiTextInput.setInputStyle("align", t.align);
                }
              };
              a.validateText = function (e) {
                if (!e) {
                  return false;
                }
                if (!this._restrict) {
                  return true;
                }
                var t = this.ensureRestrictRegex(this._restrict);
                if (this._restrict) {
                  for (var n, r = function (e) {
                      var t = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
                      if (t) {
                        return (t = t.call(e)).next.bind(t);
                      }
                      if (Array.isArray(e) || (t = function (e, t) {
                        if (e) {
                          if (typeof e == "string") {
                            return ce(e, t);
                          }
                          var n = {}.toString.call(e).slice(8, -1);
                          if (n === "Object" && e.constructor) {
                            n = e.constructor.name;
                          }
                          if (n === "Map" || n === "Set") {
                            return Array.from(e);
                          } else if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
                            return ce(e, t);
                          } else {
                            return undefined;
                          }
                        }
                      }(e))) {
                        if (t) {
                          e = t;
                        }
                        var n = 0;
                        return function () {
                          if (n >= e.length) {
                            return {
                              done: true
                            };
                          } else {
                            return {
                              done: false,
                              value: e[n++]
                            };
                          }
                        };
                      }
                      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }(e); !(n = r()).done;) {
                    if (!n.value.match(t)) {
                      return false;
                    }
                  }
                }
                return true;
              };
              a.ensureRestrictRegex = function (e) {
                if (e instanceof RegExp) {
                  if ((e = e.toString().slice(1, -1)).charAt(0) !== "^") {
                    e = "^" + e;
                  }
                  if (e.charAt(e.length - 1) !== "$") {
                    e += "$";
                  }
                  e = new RegExp(e);
                } else {
                  e = new RegExp("^[" + e + "]*$");
                }
                return e;
              };
              i = t;
              s = [{
                key: "textColor",
                get: function () {
                  return this._pixiText.style.fill;
                },
                set: function (e) {
                  this._pixiText.style.fill = e;
                  if (this._underlineSprite) {
                    this._underlineSprite.graphics.pixiGraphics.tint = e;
                  }
                }
              }, {
                key: "textWidth",
                get: function () {
                  return this._pixiText.width;
                }
              }, {
                key: "defaultTextFormat",
                get: function () {
                  return this._defaultTextFormat;
                },
                set: function (e) {
                  this._defaultTextFormat = e;
                  this.refresh();
                }
              }, {
                key: "text",
                get: function () {
                  if (this.editing && this._pixiTextInput) {
                    return this._pixiTextInput.text;
                  } else {
                    return this._pixiText.text;
                  }
                },
                set: function (e) {
                  var t = String(e);
                  if (t !== this._pixiText.text || this.editing) {
                    if (!this._maxChars || !(e.length > this._maxChars)) {
                      this._pixiText.text = t;
                      this.refresh();
                      this.event.type = D.Jh.CHANGE;
                      this.dispatchEvent(this.event);
                    }
                  }
                }
              }, {
                key: "htmlText",
                get: function () {
                  return this._htmlText;
                },
                set: function (e) {
                  e = String(e);
                  this._htmlText = e.replace(/<br>/g, "\n").replace(/<br\/>/g, "\n");
                  if (e.match(/<b>/g)) {
                    this._htmlText = this._htmlText.replace(/<b>/g, "").replace(/<\/b>/g, "");
                    this.defaultTextFormat.bold = true;
                  }
                  if (e.match(/<u>/g)) {
                    this._htmlText = this._htmlText.replace(/<u>/g, "").replace(/<\/u>/g, "");
                    this.underline = true;
                  } else {
                    this.underline = false;
                  }
                  this.text = this._htmlText;
                }
              }, {
                key: "type",
                get: function () {
                  return this._type;
                },
                set: function (e) {
                  this._type = e;
                  this.refresh();
                }
              }, {
                key: "multiline",
                get: function () {
                  return this._multiline;
                },
                set: function (e) {
                  this._multiline = e;
                  this.refresh();
                }
              }, {
                key: "autoSize",
                get: function () {
                  return this._autoSize;
                },
                set: function (e) {
                  this._autoSize = e;
                  this.refresh();
                }
              }, {
                key: "wordWrap",
                get: function () {
                  return this._wordWrap;
                },
                set: function (e) {
                  this._wordWrap = e;
                  this.refresh();
                }
              }, {
                key: "selectable",
                get: function () {
                  return this._selectable;
                },
                set: function (e) {
                  this._selectable = e;
                  this.refresh();
                }
              }, {
                key: "antiAliasType",
                get: function () {
                  return this._antiAliasType;
                },
                set: function (e) {
                  this._antiAliasType = e;
                  this.refresh();
                }
              }, {
                key: "maxChars",
                get: function () {
                  return this._maxChars;
                },
                set: function (e) {
                  this._maxChars = e;
                  if (this._pixiTextInput) {
                    this._pixiTextInput.maxLength = e;
                  }
                  this.refresh();
                }
              }, {
                key: "restrict",
                get: function () {
                  return this._restrict;
                },
                set: function (e) {
                  this._restrict = e;
                  this.refresh();
                }
              }, {
                key: "width",
                get: function () {
                  if (this._wordWrap) {
                    return this._wordWrapWidth;
                  } else {
                    return this._pixiText.width;
                  }
                },
                set: function (e) {
                  this._enforcedWidth = true;
                  this._wordWrapWidth = e;
                  this._width = e;
                  this.refresh();
                }
              }, {
                key: "height",
                get: function () {
                  return this._pixiText.height;
                },
                set: function (e) {}
              }, {
                key: "underline",
                get: function () {
                  return this._underline;
                },
                set: function (e) {
                  this._underline = e;
                  this.refresh();
                }
              }, {
                key: "length",
                get: function () {
                  return this.text.length;
                }
              }, {
                key: "pixiText",
                get: function () {
                  return this._pixiText;
                }
              }];
              if (s) {
                (function (e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || false;
                    r.configurable = true;
                    if ("value" in r) {
                      r.writable = true;
                    }
                    Object.defineProperty(e, fe(r.key), r);
                  }
                })(i.prototype, s);
              }
              Object.defineProperty(i, "prototype", {
                writable: false
              });
              return i;
            }(Q.kx);
            var ye = n(13362);
            function ge(e) {
              var t = function (e) {
                if (typeof e != "object" || !e) {
                  return e;
                }
                var t = e[Symbol.toPrimitive];
                if (t !== undefined) {
                  var n = t.call(e, "string");
                  if (typeof n != "object") {
                    return n;
                  }
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(e);
              }(e);
              if (typeof t == "symbol") {
                return t;
              } else {
                return t + "";
              }
            }
            function we(e, t) {
              we = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return we(e, t);
            }
            var xe = function (e) {
              function t(t, n) {
                var r;
                if (n === undefined) {
                  n = 200;
                }
                (r = e.call(this) || this).bgWidth = n;
                r.createInput();
                r.input.text = t;
                r.createBg();
                r.createWindow();
                return r;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              we(n, r);
              var i;
              var s;
              var a = t.prototype;
              a.createBg = function () {
                this.bgHeight = 40;
                this.bg = new Q.kx();
                this.bg.graphics.beginFill(13421772);
                this.bg.graphics.drawRect(0, 0, this.bgWidth, this.bgHeight);
                this.bg.graphics.endFill();
                this.addChildAt(this.bg, 0);
                var e = new _.F_S(_.gPd.from("load-level-asset.png"), 20, 20, 20, 10);
                var t = new Q.kx(e);
                t.width = 195;
                t.height = 35;
                t.position.set(2, 3);
                this.addChild(t);
              };
              a.createInput = function () {
                var e = this;
                var t = new le.Sm({
                  input: {
                    multiline: true
                  }
                });
                t.setInputStyle("width", "182px");
                t.setInputStyle("height", "25px");
                t.x = 7;
                t.y = 6;
                t.setInputStyle("fontFamily", "HelveticaNeueLT Std");
                t.setInputStyle("fontSize", "12px");
                t.setInputStyle("color", "#000000");
                t.substituteText = true;
                this.pixiSprite.addChild(t);
                this.input = t;
                var n = new D.Jh(D.Jh.CHANGE);
                var r = new D.Jh(D.Jh.CLOSE);
                this.input.on("input", function () {
                  e.dispatchEvent(n);
                });
                this.input.on("keydown", function () {
                  if (e.stage) {
                    e.stage.suspendKeyboardEvents = true;
                  }
                });
                this.input.on("blur", function () {
                  if (e.stage) {
                    e.stage.suspendKeyboardEvents = false;
                  }
                  e.dispatchEvent(r);
                });
              };
              a.createWindow = function () {
                this._window = new ye.p8(false, this, false);
              };
              a.die = function () {
                this._window.closeWindow();
                this.input.destroy();
              };
              i = t;
              if (s = [{
                key: "window",
                get: function () {
                  return this._window;
                }
              }]) {
                (function (e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || false;
                    r.configurable = true;
                    if ("value" in r) {
                      r.writable = true;
                    }
                    Object.defineProperty(e, ge(r.key), r);
                  }
                })(i.prototype, s);
              }
              Object.defineProperty(i, "prototype", {
                writable: false
              });
              return i;
            }(Q.kx);
          }
    });
})();
