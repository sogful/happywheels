(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        80455(e, t, n) {
            "use strict";
        
            n.d(t, {
              dg: () => _,
              N3: () => g,
              jp: () => b,
              FF: () => pe,
              Sm: () => T.Sm,
              $T: () => S,
              c0: () => k,
              b9: () => M,
              FK: () => L,
              M0: () => me,
              L3: () => ce,
              oe: () => le
            });
            var r = () => n(46518);
            var i = () => n(67750);
            var s = () => n(655);
            var a = () => n(15823);
            var o = n.cw(function (e, t) {
              var i = r();
              var s = n(68183).L;
              i({
                target: "String",
                proto: true
              }, {
                codePointAt: function (e) {
                  return s(this, e);
                }
              });
            });
            var h = n.cw(function (e, t) {
              var a = r();
              var o = n(79504);
              var h = n(60511);
              var l = i();
              var d = s();
              var c = n(41436);
              var u = o("".indexOf);
              a({
                target: "String",
                proto: true,
                forced: !c("includes")
              }, {
                includes: function (e) {
                  return !!~u(d(l(this)), d(h(e)), arguments.length > 1 ? arguments[1] : undefined);
                }
              });
            });
            var l = n.cw(function (e, t) {
              var r = n(69565);
              var a = n(89228);
              var o = n(28551);
              var h = n(20034);
              var l = i();
              var d = n(3470);
              var c = s();
              var u = n(55966);
              var p = n(56682);
              a("search", function (e, t, n) {
                return [function (t) {
                  var n = l(this);
                  var i = h(t) ? u(t, e) : undefined;
                  if (i) {
                    return r(i, t, n);
                  }
                  var s = c(n);
                  return new RegExp(t)[e](s);
                }, function (e) {
                  var r = o(this);
                  var i = c(e);
                  var s = n(t, r, i);
                  if (s.done) {
                    return s.value;
                  }
                  var a = r.lastIndex;
                  if (!d(a, 0)) {
                    r.lastIndex = 0;
                  }
                  var h = p(r, i);
                  if (!d(r.lastIndex, a)) {
                    r.lastIndex = a;
                  }
                  if (h === null) {
                    return -1;
                  } else {
                    return h.index;
                  }
                }];
              });
            });
            var d = n.cw(function (e, t) {
              a()("Int8", function (e) {
                return function (t, n, r) {
                  return e(this, t, n, r);
                };
              });
            });
            var c = n.cw(function (e, t) {
              var r = n(94644);
              var i = n(72805);
              var s = r.aTypedArrayConstructor;
              (0, r.exportTypedArrayStaticMethod)("of", function () {
                for (var e = 0, t = arguments.length, n = new (s(this))(t); t > e;) {
                  n[e] = arguments[e++];
                }
                return n;
              }, i);
            });
            var u = n.cw(function (e, t) {
              a()("Uint32", function (e) {
                return function (t, n, r) {
                  return e(this, t, n, r);
                };
              });
            });
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(26099);
            n(2892);
            var p = n(4971);
            function m(e) {
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
            function f(e, t) {
              f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return f(e, t);
            }
            var _ = function (e) {
              function t(t, n) {
                var r;
                if (n === undefined) {
                  n = null;
                }
                (r = e.call(this, t) || this)._extra = n;
                return r;
              }
              var n;
              var r;
              var i;
              var s;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              f(n, r);
              t.prototype.clone = function () {
                return new t(this.type, this._extra);
              };
              i = t;
              if (s = [{
                key: "extra",
                get: function () {
                  return this._extra;
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
                    Object.defineProperty(e, m(r.key), r);
                  }
                })(i.prototype, s);
              }
              Object.defineProperty(i, "prototype", {
                writable: false
              });
              return i;
            }(p.Jh);
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
              y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return y(e, t);
            }
            _.USER = "user";
            _.USER_FAVORITES = "user favorites";
            _.FLAG = "flag";
            _.ADD_TO_FAVORITES = "add to favorites";
            _.REMOVE_FROM_FAVORITES = "remove from favorites";
            _.DOWNLOAD = "download";
            _.DELETE_DOWNLOAD = "delete download";
            var g = function (e) {
              function t(t, n) {
                var r;
                (r = e.call(this, t) || this)._value = n;
                return r;
              }
              var n;
              var r;
              var i;
              var s;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              y(n, r);
              t.prototype.clone = function () {
                return new t(this.type, this._value);
              };
              i = t;
              if (s = [{
                key: "value",
                get: function () {
                  return this._value;
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
                    Object.defineProperty(e, v(r.key), r);
                  }
                })(i.prototype, s);
              }
              Object.defineProperty(i, "prototype", {
                writable: false
              });
              return i;
            }(p.Jh);
            function w(e) {
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
            function x(e, t) {
              x = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return x(e, t);
            }
            g.ART = "art";
            g.SHAPE = "shape";
            var b = function (e) {
              function t(t, n, r, i, s, a) {
                var o;
                (o = e.call(this, t) || this)._shape = n;
                o._impulse = r;
                o._normal = i;
                o._otherShape = s;
                o._position = a;
                return o;
              }
              var n;
              var r;
              var i;
              var s;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              x(n, r);
              i = t;
              if (s = [{
                key: "impulse",
                get: function () {
                  return this._impulse;
                }
              }, {
                key: "normal",
                get: function () {
                  return this._normal;
                }
              }, {
                key: "shape",
                get: function () {
                  return this._shape;
                }
              }, {
                key: "otherShape",
                get: function () {
                  return this._otherShape;
                }
              }, {
                key: "position",
                get: function () {
                  return this._position;
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
                    Object.defineProperty(e, w(r.key), r);
                  }
                })(i.prototype, s);
              }
              Object.defineProperty(i, "prototype", {
                writable: false
              });
              return i;
            }(p.Jh);
            b.ADD = "add";
            b.REMOVE = "remove";
            b.PERSIST = "persist";
            b.RESULT = "result";
            var T = n(64284);
            function A(e) {
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
            function C(e, t) {
              C = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return C(e, t);
            }
            var S = function (e) {
              function t(t, n, r, i) {
                var s;
                if (n === undefined) {
                  n = null;
                }
                if (r === undefined) {
                  r = null;
                }
                if (i === undefined) {
                  i = null;
                }
                (s = e.call(this, t) || this)._levelDataObject = n;
                s._replayDataObject = r;
                s._extra = i;
                return s;
              }
              var n;
              var r;
              var i;
              var s;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              C(n, r);
              t.prototype.clone = function () {
                return new t(this.type, this._levelDataObject, this._replayDataObject, this._extra);
              };
              i = t;
              if (s = [{
                key: "levelDataObject",
                get: function () {
                  return this._levelDataObject;
                }
              }, {
                key: "replayDataObject",
                get: function () {
                  return this._replayDataObject;
                }
              }, {
                key: "extra",
                get: function () {
                  return this._extra;
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
                    Object.defineProperty(e, A(r.key), r);
                  }
                })(i.prototype, s);
              }
              Object.defineProperty(i, "prototype", {
                writable: false
              });
              return i;
            }(p.Jh);
            function E(e) {
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
            function O(e, t) {
              O = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return O(e, t);
            }
            S.MAIN_MENU = "mainmenu";
            S.EDITOR = "editor";
            S.SESSION = "session";
            S.REPLAY_BROWSER = "replaybrowser";
            S.LEVEL_BROWSER = "levelbrowser";
            S.PREVIOUS_MENU = "previousmenu";
            S.CUSTOMIZE_CONTROLS = "customizecontrols";
            S.GAMEPAD_CONTROLS = "gamepadcontrols";
            S.OPTIONS = "options";
            S.FRIENDLY_OPTIONS = "friendlyoptions";
            var k = function (e) {
              function t(t, n) {
                var r;
                (r = e.call(this, t) || this)._keyString = n;
                return r;
              }
              var n;
              var r;
              var i;
              var s;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              O(n, r);
              t.prototype.clone = function () {
                return new t(this.type, this.keyString);
              };
              i = t;
              if (s = [{
                key: "keyString",
                get: function () {
                  return this._keyString;
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
                    Object.defineProperty(e, E(r.key), r);
                  }
                })(i.prototype, s);
              }
              Object.defineProperty(i, "prototype", {
                writable: false
              });
              return i;
            }(p.Jh);
            function P(e, t) {
              P = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return P(e, t);
            }
            k.ADD_ENTRY = "addentry";
            var M = function (e) {
              function t(t) {
                return e.call(this, t) || this;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              P(n, r);
              return t;
            }(p.Jh);
            M.PAUSE = "pause";
            M.COMPLETED = "completed";
            M.REPLAY_COMPLETED = "replaycompleted";
            n(89907);
            n(23792);
            u();
            n(81630);
            n(72170);
            n(75044);
            n(69539);
            n(31694);
            n(89955);
            n(33206);
            n(44496);
            n(66651);
            n(12887);
            n(19369);
            n(66812);
            n(8995);
            n(31575);
            n(36072);
            n(88747);
            n(28845);
            n(29423);
            n(57301);
            n(373);
            n(86614);
            n(41405);
            n(33684);
            n(34782);
            n(62010);
            n(23418);
            n(47764);
            n(2259);
            n(62953);
            var R = n(46682);
            function I(e, t) {
              if (t == null || t > e.length) {
                t = e.length;
              }
              for (var n = 0, r = Array(t); n < t; n++) {
                r[n] = e[n];
              }
              return r;
            }
            function L(e) {
              if (e && (e && e instanceof R.kxk && (e.containsPoint = j), e.children)) {
                for (var t, n = function (e) {
                    var t = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
                    if (t) {
                      return (t = t.call(e)).next.bind(t);
                    }
                    if (Array.isArray(e) || (t = function (e, t) {
                      if (e) {
                        if (typeof e == "string") {
                          return I(e, t);
                        }
                        var n = {}.toString.call(e).slice(8, -1);
                        if (n === "Object" && e.constructor) {
                          n = e.constructor.name;
                        }
                        if (n === "Map" || n === "Set") {
                          return Array.from(e);
                        } else if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
                          return I(e, t);
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
                  }(e.children); !(t = n()).done;) {
                  L(t.value);
                }
              }
            }
            function j(e) {
              var t = {
                x: 0,
                y: 0
              };
              this.worldTransform.applyInverse(e, t);
              var n = this._texture.orig.width;
              var r = this._texture.orig.height;
              var i = -n * this.anchor.x;
              var s = 0;
              var a = false;
              if (t.x >= i && t.x < i + n) {
                s = -r * this.anchor.y;
                if (t.y >= s && t.y < s + r) {
                  a = true;
                }
              }
              if (!a) {
                return false;
              }
              var o = this.texture;
              var h = this.texture.baseTexture;
              var l = h.resolution;
              if (!h.hitmap && !function (e, t = 0) {
                if (!e.resource) {
                  return false;
                }
                var n = e.resource.source;
                var r = null;
                if (!n) {
                  return false;
                }
                var i = null;
                if (n.getContext) {
                  i = (r = n).getContext("2d");
                } else {
                  if (!(n instanceof Image) && (typeof ImageBitmap == "undefined" || !(n instanceof ImageBitmap))) {
                    return false;
                  }
                  (r = document.createElement("canvas")).width = n.width;
                  r.height = n.height;
                  (i = r.getContext("2d")).drawImage(n, 0, 0);
                }
                for (var s = r.width, a = r.height, o = i.getImageData(0, 0, s, a), h = e.hitmap = new Uint32Array(Math.ceil(s * a / 32)), l = 0; l < s * a; l++) {
                  var d = l % 32;
                  var c = l / 32 | 0;
                  if (o.data[l * 4 + 3] >= t) {
                    h[c] = h[c] | 1 << d;
                  }
                }
                return true;
              }(h, 127)) {
                return true;
              }
              var d = h.hitmap;
              var c = Math.round((t.x - i + o.frame.x) * l) + Math.round((t.y - s + o.frame.y) * l) * h.realWidth;
              var u = c % 32;
              return !!(d[c / 32 | 0] & 1 << u);
            }
            R.kxk.prototype.containsPoint;
            c();
            n(21489);
            n(34594);
            n(54554);
            var B = function (e) {
              e[e.ODD = 0] = "ODD";
              e[e.NONZERO = 1] = "NONZERO";
              e[e.POSITIVE = 2] = "POSITIVE";
              e[e.NEGATIVE = 3] = "NEGATIVE";
              e[e.ABS_GEQ_TWO = 4] = "ABS_GEQ_TWO";
              return e;
            }({});
            var D = function (e) {
              e[e.POLYGONS = 0] = "POLYGONS";
              e[e.CONNECTED_POLYGONS = 1] = "CONNECTED_POLYGONS";
              e[e.BOUNDARY_CONTOURS = 2] = "BOUNDARY_CONTOURS";
              return e;
            }({});
            function F(e, t) {
              if (!e) {
                throw t || "Assertion Failed (tess2)!";
              }
            }
            var N = function () {
              function e() {}
              e.vertEq = function (e, t) {
                return e.s === t.s && e.t === t.t;
              };
              e.vertLeq = function (e, t) {
                return e.s < t.s || e.s === t.s && e.t <= t.t;
              };
              e.transLeq = function (e, t) {
                return e.t < t.t || e.t === t.t && e.s <= t.s;
              };
              e.edgeGoesLeft = function (t) {
                return e.vertLeq(t.Dst, t.Org);
              };
              e.edgeGoesRight = function (t) {
                return e.vertLeq(t.Org, t.Dst);
              };
              e.vertL1dist = function (e, t) {
                return Math.abs(e.s - t.s) + Math.abs(e.t - t.t);
              };
              e.edgeEval = function (t, n, r) {
                F(e.vertLeq(t, n) && e.vertLeq(n, r));
                var i = n.s - t.s;
                var s = r.s - n.s;
                if (i + s > 0) {
                  if (i < s) {
                    return n.t - t.t + (t.t - r.t) * (i / (i + s));
                  } else {
                    return n.t - r.t + (r.t - t.t) * (s / (i + s));
                  }
                } else {
                  return 0;
                }
              };
              e.edgeSign = function (t, n, r) {
                F(e.vertLeq(t, n) && e.vertLeq(n, r));
                var i = n.s - t.s;
                var s = r.s - n.s;
                if (i + s > 0) {
                  return (n.t - r.t) * i + (n.t - t.t) * s;
                } else {
                  return 0;
                }
              };
              e.transEval = function (t, n, r) {
                F(e.transLeq(t, n) && e.transLeq(n, r));
                var i = n.t - t.t;
                var s = r.t - n.t;
                if (i + s > 0) {
                  if (i < s) {
                    return n.s - t.s + (t.s - r.s) * (i / (i + s));
                  } else {
                    return n.s - r.s + (r.s - t.s) * (s / (i + s));
                  }
                } else {
                  return 0;
                }
              };
              e.transSign = function (t, n, r) {
                F(e.transLeq(t, n) && e.transLeq(n, r));
                var i = n.t - t.t;
                var s = r.t - n.t;
                if (i + s > 0) {
                  return (n.s - r.s) * i + (n.s - t.s) * s;
                } else {
                  return 0;
                }
              };
              e.vertCCW = function (e, t, n) {
                return e.s * (t.t - n.t) + t.s * (n.t - e.t) + n.s * (e.t - t.t) >= 0;
              };
              e.interpolate = function (e, t, n, r) {
                if ((e = e < 0 ? 0 : e) <= (n = n < 0 ? 0 : n)) {
                  if (n === 0) {
                    return (t + r) / 2;
                  } else {
                    return t + e / (e + n) * (r - t);
                  }
                } else {
                  return r + n / (e + n) * (t - r);
                }
              };
              e.intersect = function (t, n, r, i, s) {
                var a;
                var o;
                var h;
                if (!e.vertLeq(t, n)) {
                  h = t;
                  t = n;
                  n = h;
                }
                if (!e.vertLeq(r, i)) {
                  h = r;
                  r = i;
                  i = h;
                }
                if (!e.vertLeq(t, r)) {
                  h = t;
                  t = r;
                  r = h;
                  h = n;
                  n = i;
                  i = h;
                }
                if (e.vertLeq(r, n)) {
                  if (e.vertLeq(n, i)) {
                    if ((a = e.edgeEval(t, r, n)) + (o = e.edgeEval(r, n, i)) < 0) {
                      a = -a;
                      o = -o;
                    }
                    s.s = e.interpolate(a, r.s, o, n.s);
                  } else {
                    if ((a = e.edgeSign(t, r, n)) + (o = -e.edgeSign(t, i, n)) < 0) {
                      a = -a;
                      o = -o;
                    }
                    s.s = e.interpolate(a, r.s, o, i.s);
                  }
                } else {
                  s.s = (r.s + n.s) / 2;
                }
                if (!e.transLeq(t, n)) {
                  h = t;
                  t = n;
                  n = h;
                }
                if (!e.transLeq(r, i)) {
                  h = r;
                  r = i;
                  i = h;
                }
                if (!e.transLeq(t, r)) {
                  h = t;
                  t = r;
                  r = h;
                  h = n;
                  n = i;
                  i = h;
                }
                if (e.transLeq(r, n)) {
                  if (e.transLeq(n, i)) {
                    if ((a = e.transEval(t, r, n)) + (o = e.transEval(r, n, i)) < 0) {
                      a = -a;
                      o = -o;
                    }
                    s.t = e.interpolate(a, r.t, o, n.t);
                  } else {
                    if ((a = e.transSign(t, r, n)) + (o = -e.transSign(t, i, n)) < 0) {
                      a = -a;
                      o = -o;
                    }
                    s.t = e.interpolate(a, r.t, o, i.t);
                  }
                } else {
                  s.t = (r.t + n.t) / 2;
                }
              };
              return e;
            }();
            function G() {
              this.next = null;
              this.prev = null;
              this.anEdge = null;
              this.trail = null;
              this.n = 0;
              this.marked = false;
              this.inside = false;
            }
            function U(e) {
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
            var V = function () {
              e = function (e) {
                this.next = null;
                this.Org = null;
                this.Sym = null;
                this.Onext = null;
                this.Lnext = null;
                this.Lface = null;
                this.activeRegion = null;
                this.winding = 0;
                this.side = e;
              };
              if (t = [{
                key: "Rface",
                get: function () {
                  return this.Sym.Lface;
                },
                set: function (e) {
                  this.Sym.Lface = e;
                }
              }, {
                key: "Dst",
                get: function () {
                  return this.Sym.Org;
                },
                set: function (e) {
                  this.Sym.Org = e;
                }
              }, {
                key: "Oprev",
                get: function () {
                  return this.Sym.Lnext;
                },
                set: function (e) {
                  this.Sym.Lnext = e;
                }
              }, {
                key: "Lprev",
                get: function () {
                  return this.Onext.Sym;
                },
                set: function (e) {
                  this.Onext.Sym = e;
                }
              }, {
                key: "Dprev",
                get: function () {
                  return this.Lnext.Sym;
                },
                set: function (e) {
                  this.Lnext.Sym = e;
                }
              }, {
                key: "Rprev",
                get: function () {
                  return this.Sym.Onext;
                },
                set: function (e) {
                  this.Sym.Onext = e;
                }
              }, {
                key: "Dnext",
                get: function () {
                  return this.Sym.Onext.Sym;
                },
                set: function (e) {
                  this.Sym.Onext.Sym = e;
                }
              }, {
                key: "Rnext",
                get: function () {
                  return this.Sym.Lnext.Sym;
                },
                set: function (e) {
                  this.Sym.Lnext.Sym = e;
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
                    Object.defineProperty(e, U(r.key), r);
                  }
                })(e.prototype, t);
              }
              Object.defineProperty(e, "prototype", {
                writable: false
              });
              return e;
              var e;
              var t;
            }();
            function H() {
              this.next = null;
              this.prev = null;
              this.anEdge = null;
              this.coords = [0, 0, 0];
              this.s = 0;
              this.t = 0;
              this.pqHandle = 0;
              this.n = 0;
              this.idx = 0;
            }
            var z = function () {
              function e() {
                var e = new H();
                var t = new G();
                var n = new V(0);
                var r = new V(1);
                e.next = e.prev = e;
                e.anEdge = null;
                t.next = t.prev = t;
                n.next = n;
                n.Sym = r;
                r.next = r;
                r.Sym = n;
                this.vHead = e;
                this.fHead = t;
                this.eHead = n;
                this.eHeadSym = r;
              }
              var t = e.prototype;
              t.makeEdge_ = function (e) {
                var t = new V(0);
                var n = new V(1);
                if (e.Sym.side < e.side) {
                  e = e.Sym;
                }
                var r = e.Sym.next;
                n.next = r;
                r.Sym.next = t;
                t.next = e;
                e.Sym.next = n;
                t.Sym = n;
                t.Onext = t;
                t.Lnext = n;
                t.Org = null;
                t.Lface = null;
                t.winding = 0;
                t.activeRegion = null;
                n.Sym = t;
                n.Onext = n;
                n.Lnext = t;
                n.Org = null;
                n.Lface = null;
                n.winding = 0;
                n.activeRegion = null;
                return t;
              };
              t.splice_ = function (e, t) {
                var n = e.Onext;
                var r = t.Onext;
                n.Sym.Lnext = t;
                r.Sym.Lnext = e;
                e.Onext = r;
                t.Onext = n;
              };
              t.makeVertex_ = function (e, t, n) {
                var r = e;
                F(r, "Vertex can't be null!");
                var i = n.prev;
                r.prev = i;
                i.next = r;
                r.next = n;
                n.prev = r;
                r.anEdge = t;
                var s = t;
                do {
                  s.Org = r;
                  s = s.Onext;
                } while (s !== t);
              };
              t.makeFace_ = function (e, t, n) {
                var r = e;
                F(r, "Face can't be null");
                var i = n.prev;
                r.prev = i;
                i.next = r;
                r.next = n;
                n.prev = r;
                r.anEdge = t;
                r.trail = null;
                r.marked = false;
                r.inside = n.inside;
                var s = t;
                do {
                  s.Lface = r;
                  s = s.Lnext;
                } while (s !== t);
              };
              t.killEdge_ = function (e) {
                if (e.Sym.side < e.side) {
                  e = e.Sym;
                }
                var t = e.next;
                var n = e.Sym.next;
                t.Sym.next = n;
                n.Sym.next = t;
              };
              t.killVertex_ = function (e, t) {
                var n = e.anEdge;
                var r = n;
                do {
                  r.Org = t;
                  r = r.Onext;
                } while (r !== n);
                var i = e.prev;
                var s = e.next;
                s.prev = i;
                i.next = s;
              };
              t.killFace_ = function (e, t) {
                var n = e.anEdge;
                var r = n;
                do {
                  r.Lface = t;
                  r = r.Lnext;
                } while (r !== n);
                var i = e.prev;
                var s = e.next;
                s.prev = i;
                i.next = s;
              };
              t.makeEdge = function () {
                var e = new H();
                var t = new H();
                var n = new G();
                var r = this.makeEdge_(this.eHead);
                this.makeVertex_(e, r, this.vHead);
                this.makeVertex_(t, r.Sym, this.vHead);
                this.makeFace_(n, r, this.fHead);
                return r;
              };
              t.splice = function (e, t) {
                var n = false;
                var r = false;
                if (e !== t) {
                  if (t.Org !== e.Org) {
                    r = true;
                    this.killVertex_(t.Org, e.Org);
                  }
                  if (t.Lface !== e.Lface) {
                    n = true;
                    this.killFace_(t.Lface, e.Lface);
                  }
                  this.splice_(t, e);
                  if (!r) {
                    var i = new H();
                    this.makeVertex_(i, t, e.Org);
                    e.Org.anEdge = e;
                  }
                  if (!n) {
                    var s = new G();
                    this.makeFace_(s, t, e.Lface);
                    e.Lface.anEdge = e;
                  }
                }
              };
              t.delete = function (e) {
                var t = e.Sym;
                var n = false;
                if (e.Lface !== e.Rface) {
                  n = true;
                  this.killFace_(e.Lface, e.Rface);
                }
                if (e.Onext === e) {
                  this.killVertex_(e.Org, null);
                } else {
                  e.Rface.anEdge = e.Oprev;
                  e.Org.anEdge = e.Onext;
                  this.splice_(e, e.Oprev);
                  if (!n) {
                    var r = new G();
                    this.makeFace_(r, e, e.Lface);
                  }
                }
                if (t.Onext === t) {
                  this.killVertex_(t.Org, null);
                  this.killFace_(t.Lface, null);
                } else {
                  e.Lface.anEdge = t.Oprev;
                  t.Org.anEdge = t.Onext;
                  this.splice_(t, t.Oprev);
                }
                this.killEdge_(e);
              };
              t.addEdgeVertex = function (e) {
                var t = this.makeEdge_(e);
                var n = t.Sym;
                this.splice_(t, e.Lnext);
                t.Org = e.Dst;
                var r = new H();
                this.makeVertex_(r, n, t.Org);
                t.Lface = n.Lface = e.Lface;
                return t;
              };
              t.splitEdge = function (e) {
                var t = this.addEdgeVertex(e).Sym;
                this.splice_(e.Sym, e.Sym.Oprev);
                this.splice_(e.Sym, t);
                e.Dst = t.Org;
                t.Dst.anEdge = t.Sym;
                t.Rface = e.Rface;
                t.winding = e.winding;
                t.Sym.winding = e.Sym.winding;
                return t;
              };
              t.connect = function (e, t) {
                var n = false;
                var r = this.makeEdge_(e);
                var i = r.Sym;
                if (t.Lface !== e.Lface) {
                  n = true;
                  this.killFace_(t.Lface, e.Lface);
                }
                this.splice_(r, e.Lnext);
                this.splice_(i, t);
                r.Org = e.Dst;
                i.Org = t.Org;
                r.Lface = i.Lface = e.Lface;
                e.Lface.anEdge = i;
                if (!n) {
                  var s = new G();
                  this.makeFace_(s, r, e.Lface);
                }
                return r;
              };
              t.zapFace = function (e) {
                var t;
                var n;
                var r;
                var i = e.anEdge;
                n = i.Lnext;
                do {
                  n = (t = n).Lnext;
                  t.Lface = null;
                  if (t.Rface === null) {
                    if (t.Onext === t) {
                      this.killVertex_(t.Org, null);
                    } else {
                      t.Org.anEdge = t.Onext;
                      this.splice_(t, t.Oprev);
                    }
                    if ((r = t.Sym).Onext === r) {
                      this.killVertex_(r.Org, null);
                    } else {
                      r.Org.anEdge = r.Onext;
                      this.splice_(r, r.Oprev);
                    }
                    this.killEdge_(t);
                  }
                } while (t != i);
                var s = e.prev;
                var a = e.next;
                a.prev = s;
                s.next = a;
              };
              t.countFaceVerts_ = function (e) {
                var t = e.anEdge;
                var n = 0;
                do {
                  n++;
                  t = t.Lnext;
                } while (t !== e.anEdge);
                return n;
              };
              t.mergeConvexFaces = function (e) {
                var t;
                var n;
                var r;
                var i;
                var s;
                for (t = this.fHead.next; t !== this.fHead; t = t.next) {
                  if (t.inside) {
                    for (s = (n = t.anEdge).Org; r = n.Lnext, (i = n.Sym) && i.Lface && i.Lface.inside && this.countFaceVerts_(t) + this.countFaceVerts_(i.Lface) - 2 <= e && N.vertCCW(n.Lprev.Org, n.Org, i.Lnext.Lnext.Org) && N.vertCCW(i.Lprev.Org, i.Org, n.Lnext.Lnext.Org) && (r = i.Lnext, this.delete(i), n = null, i = null), !n || n.Lnext.Org !== s;) {
                      n = r;
                    }
                  }
                }
                return true;
              };
              t.check = function () {
                var e;
                var t;
                var n;
                var r;
                var i;
                var s;
                var a = this.fHead;
                var o = this.vHead;
                var h = this.eHead;
                t = a;
                t = a;
                for (; (e = t.next) !== a; t = e) {
                  F(e.prev === t);
                  i = e.anEdge;
                  do {
                    F(i.Sym !== i);
                    F(i.Sym.Sym === i);
                    F(i.Lnext.Onext.Sym === i);
                    F(i.Onext.Sym.Lnext === i);
                    F(i.Lface === e);
                    i = i.Lnext;
                  } while (i !== e.anEdge);
                }
                F(e.prev === t && e.anEdge === null);
                r = o;
                r = o;
                for (; (n = r.next) !== o; r = n) {
                  F(n.prev === r);
                  i = n.anEdge;
                  do {
                    F(i.Sym !== i);
                    F(i.Sym.Sym === i);
                    F(i.Lnext.Onext.Sym === i);
                    F(i.Onext.Sym.Lnext === i);
                    F(i.Org === n);
                    i = i.Onext;
                  } while (i !== n.anEdge);
                }
                F(n.prev === r && n.anEdge === null);
                s = h;
                s = h;
                for (; (i = s.next) !== h; s = i) {
                  F(i.Sym.next === s.Sym);
                  F(i.Sym !== i);
                  F(i.Sym.Sym === i);
                  F(i.Org !== null);
                  F(i.Dst !== null);
                  F(i.Lnext.Onext.Sym === i);
                  F(i.Onext.Sym.Lnext === i);
                }
                F(i.Sym.next === s.Sym && i.Sym === this.eHeadSym && i.Sym.Sym === i && i.Org === null && i.Dst === null && i.Lface === null && i.Rface === null);
              };
              return e;
            }();
            n(27495);
            l();
            function W() {
              this.handle = null;
            }
            function X() {
              this.key = null;
              this.node = 0;
            }
            var Y = function () {
              function e(e, t) {
                this.max = 0;
                this.nodes = [];
                this.handles = [];
                this.initialized = false;
                this.freeList = 0;
                this.size = 0;
                this.leq = t;
                this.max = e;
                this.nodes = [];
                this.handles = [];
                for (var n = 0; n < e + 1; n++) {
                  this.nodes[n] = new W();
                  this.handles[n] = new X();
                }
                this.initialized = false;
                this.nodes[1].handle = 1;
                this.handles[1].key = null;
              }
              var t = e.prototype;
              t.floatDown_ = function (e) {
                var t;
                var n;
                var r = this.nodes;
                var i = this.handles;
                var s = r[e].handle;
                while (true) {
                  if ((n = e << 1) < this.size && this.leq(i[r[n + 1].handle].key, i[r[n].handle].key)) {
                    ++n;
                  }
                  F(n <= this.max);
                  t = r[n].handle;
                  if (n > this.size || this.leq(i[s].key, i[t].key)) {
                    r[e].handle = s;
                    i[s].node = e;
                    break;
                  }
                  r[e].handle = t;
                  i[t].node = e;
                  e = n;
                }
              };
              t.floatUp_ = function (e) {
                var t;
                var n;
                var r = this.nodes;
                var i = this.handles;
                var s = r[e].handle;
                while (true) {
                  t = r[n = e >> 1].handle;
                  if (n === 0 || this.leq(i[t].key, i[s].key)) {
                    r[e].handle = s;
                    i[s].node = e;
                    break;
                  }
                  r[e].handle = t;
                  i[t].node = e;
                  e = n;
                }
              };
              t.init = function () {
                for (var e = this.size; e >= 1; --e) {
                  this.floatDown_(e);
                }
                this.initialized = true;
              };
              t.min = function () {
                return this.handles[this.nodes[1].handle].key;
              };
              t.insert = function (e) {
                var t;
                var n = ++this.size;
                if (n * 2 > this.max) {
                  var r;
                  var i;
                  this.max *= 2;
                  i = this.nodes.length;
                  this.nodes.length = this.max + 1;
                  r = i;
                  for (; r < this.nodes.length; r++) {
                    this.nodes[r] = new W();
                  }
                  i = this.handles.length;
                  this.handles.length = this.max + 1;
                  r = i;
                  for (; r < this.handles.length; r++) {
                    this.handles[r] = new X();
                  }
                }
                if (this.freeList === 0) {
                  t = n;
                } else {
                  t = this.freeList;
                  this.freeList = this.handles[t].node;
                }
                this.nodes[n].handle = t;
                this.handles[t].node = n;
                this.handles[t].key = e;
                if (this.initialized) {
                  this.floatUp_(n);
                }
                return t;
              };
              t.extractMin = function () {
                var e = this.nodes;
                var t = this.handles;
                var n = e[1].handle;
                var r = t[n].key;
                if (this.size > 0) {
                  e[1].handle = e[this.size].handle;
                  t[e[1].handle].node = 1;
                  t[n].key = null;
                  t[n].node = this.freeList;
                  this.freeList = n;
                  --this.size;
                  if (this.size > 0) {
                    this.floatDown_(1);
                  }
                }
                return r;
              };
              t.delete = function (e) {
                var t = this.nodes;
                var n = this.handles;
                F(e >= 1 && e <= this.max && n[e].key !== null);
                var r = n[e].node;
                t[r].handle = t[this.size].handle;
                n[t[r].handle].node = r;
                --this.size;
                if (r <= this.size) {
                  if (r <= 1 || this.leq(n[t[r >> 1].handle].key, n[t[r].handle].key)) {
                    this.floatDown_(r);
                  } else {
                    this.floatUp_(r);
                  }
                }
                n[e].key = null;
                n[e].node = this.freeList;
                this.freeList = e;
              };
              return e;
            }();
            function q() {
              this.eUp = null;
              this.nodeUp = null;
              this.windingNumber = 0;
              this.inside = false;
              this.sentinel = false;
              this.dirty = false;
              this.fixUpperEdge = false;
            }
            function J() {
              this.key = null;
              this.next = null;
              this.prev = null;
            }
            var K = function () {
              function e(e, t) {
                this.head = new J();
                this.frame = e;
                this.leq = t;
                this.head.next = this.head;
                this.head.prev = this.head;
              }
              var t = e.prototype;
              t.min = function () {
                return this.head.next;
              };
              t.max = function () {
                return this.head.prev;
              };
              t.insert = function (e) {
                return this.insertBefore(this.head, e);
              };
              t.search = function (e) {
                var t = this.head;
                do {
                  t = t.next;
                } while (t.key !== null && !this.leq(this.frame, e, t.key));
                return t;
              };
              t.insertBefore = function (e, t) {
                do {
                  e = e.prev;
                } while (e.key !== null && !this.leq(this.frame, e.key, t));
                var n = new J();
                n.key = t;
                n.next = e.next;
                e.next.prev = n;
                n.prev = e;
                e.next = n;
                return n;
              };
              t.delete = function (e) {
                e.next.prev = e.prev;
                e.prev.next = e.next;
              };
              return e;
            }();
            var Z = function () {
              function e() {}
              e.regionBelow = function (e) {
                return e.nodeUp.prev.key;
              };
              e.regionAbove = function (e) {
                return e.nodeUp.next.key;
              };
              e.debugEvent = function (e) {};
              e.addWinding = function (e, t) {
                e.winding += t.winding;
                e.Sym.winding += t.Sym.winding;
              };
              e.edgeLeq = function (e, t, n) {
                var r = e.event;
                var i = t.eUp;
                var s = n.eUp;
                if (i.Dst === r) {
                  if (s.Dst === r) {
                    if (N.vertLeq(i.Org, s.Org)) {
                      return N.edgeSign(s.Dst, i.Org, s.Org) <= 0;
                    } else {
                      return N.edgeSign(i.Dst, s.Org, i.Org) >= 0;
                    }
                  } else {
                    return N.edgeSign(s.Dst, r, s.Org) <= 0;
                  }
                } else if (s.Dst === r) {
                  return N.edgeSign(i.Dst, r, i.Org) >= 0;
                } else {
                  return N.edgeEval(i.Dst, r, i.Org) >= N.edgeEval(s.Dst, r, s.Org);
                }
              };
              e.deleteRegion = function (e, t) {
                if (t.fixUpperEdge) {
                  F(t.eUp.winding === 0);
                }
                t.eUp.activeRegion = null;
                e.dict.delete(t.nodeUp);
              };
              e.fixUpperEdge = function (e, t, n) {
                F(t.fixUpperEdge);
                e.mesh.delete(t.eUp);
                t.fixUpperEdge = false;
                t.eUp = n;
                n.activeRegion = t;
              };
              e.topLeftRegion = function (t, n) {
                var r;
                var i = n.eUp.Org;
                do {
                  n = e.regionAbove(n);
                } while (n.eUp.Org === i);
                if (n.fixUpperEdge) {
                  if ((r = t.mesh.connect(e.regionBelow(n).eUp.Sym, n.eUp.Lnext)) === null) {
                    return null;
                  }
                  e.fixUpperEdge(t, n, r);
                  n = e.regionAbove(n);
                }
                return n;
              };
              e.topRightRegion = function (t) {
                var n = t.eUp.Dst;
                do {
                  t = e.regionAbove(t);
                } while (t.eUp.Dst === n);
                return t;
              };
              e.addRegionBelow = function (e, t, n) {
                var r = new q();
                r.eUp = n;
                r.nodeUp = e.dict.insertBefore(t.nodeUp, r);
                r.fixUpperEdge = false;
                r.sentinel = false;
                r.dirty = false;
                n.activeRegion = r;
                return r;
              };
              e.isWindingInside = function (e, t) {
                switch (e.windingRule) {
                  case B.ODD:
                    return !!(t & 1);
                  case B.NONZERO:
                    return t !== 0;
                  case B.POSITIVE:
                    return t > 0;
                  case B.NEGATIVE:
                    return t < 0;
                  case B.ABS_GEQ_TWO:
                    return t >= 2 || t <= -2;
                }
                throw new Error("Invalid winding rulle");
              };
              e.computeWinding = function (t, n) {
                n.windingNumber = e.regionAbove(n).windingNumber + n.eUp.winding;
                n.inside = e.isWindingInside(t, n.windingNumber);
              };
              e.finishRegion = function (t, n) {
                var r = n.eUp;
                var i = r.Lface;
                i.inside = n.inside;
                i.anEdge = r;
                e.deleteRegion(t, n);
              };
              e.finishLeftRegions = function (t, n, r) {
                for (var i, s = null, a = n, o = n.eUp; a !== r;) {
                  a.fixUpperEdge = false;
                  if ((i = (s = e.regionBelow(a)).eUp).Org != o.Org) {
                    if (!s.fixUpperEdge) {
                      e.finishRegion(t, a);
                      break;
                    }
                    i = t.mesh.connect(o.Lprev, i.Sym);
                    e.fixUpperEdge(t, s, i);
                  }
                  if (o.Onext !== i) {
                    t.mesh.splice(i.Oprev, i);
                    t.mesh.splice(o, i);
                  }
                  e.finishRegion(t, a);
                  o = s.eUp;
                  a = s;
                }
                return o;
              };
              e.addRightEdges = function (t, n, r, i, s, a) {
                var o;
                var h;
                var l;
                var d;
                var c = true;
                l = r;
                do {
                  F(N.vertLeq(l.Org, l.Dst));
                  e.addRegionBelow(t, n, l.Sym);
                  l = l.Onext;
                } while (l !== i);
                if (s === null) {
                  s = e.regionBelow(n).eUp.Rprev;
                }
                h = n;
                d = s;
                while ((l = (o = e.regionBelow(h)).eUp.Sym).Org === d.Org) {
                  if (l.Onext !== d) {
                    t.mesh.splice(l.Oprev, l);
                    t.mesh.splice(d.Oprev, l);
                  }
                  o.windingNumber = h.windingNumber - l.winding;
                  o.inside = e.isWindingInside(t, o.windingNumber);
                  h.dirty = true;
                  if (!c && e.checkForRightSplice(t, h)) {
                    e.addWinding(l, d);
                    e.deleteRegion(t, h);
                    t.mesh.delete(d);
                  }
                  c = false;
                  h = o;
                  d = l;
                }
                h.dirty = true;
                F(h.windingNumber - l.winding === o.windingNumber);
                if (a) {
                  e.walkDirtyRegions(t, h);
                }
              };
              e.spliceMergeVertices = function (e, t, n) {
                e.mesh.splice(t, n);
              };
              e.vertexWeights = function (e, t, n) {
                var r = N.vertL1dist(t, e);
                var i = N.vertL1dist(n, e);
                var s = i * 0.5 / (r + i);
                var a = r * 0.5 / (r + i);
                e.coords[0] += s * t.coords[0] + a * n.coords[0];
                e.coords[1] += s * t.coords[1] + a * n.coords[1];
                e.coords[2] += s * t.coords[2] + a * n.coords[2];
              };
              e.getIntersectData = function (t, n, r, i, s, a) {
                n.coords[0] = n.coords[1] = n.coords[2] = 0;
                n.idx = -1;
                e.vertexWeights(n, r, i);
                e.vertexWeights(n, s, a);
              };
              e.checkForRightSplice = function (t, n) {
                var r = e.regionBelow(n);
                var i = n.eUp;
                var s = r.eUp;
                if (N.vertLeq(i.Org, s.Org)) {
                  if (N.edgeSign(s.Dst, i.Org, s.Org) > 0) {
                    return false;
                  }
                  if (N.vertEq(i.Org, s.Org)) {
                    if (i.Org !== s.Org) {
                      t.pq.delete(i.Org.pqHandle);
                      e.spliceMergeVertices(t, s.Oprev, i);
                    }
                  } else {
                    t.mesh.splitEdge(s.Sym);
                    t.mesh.splice(i, s.Oprev);
                    n.dirty = r.dirty = true;
                  }
                } else {
                  if (N.edgeSign(i.Dst, s.Org, i.Org) < 0) {
                    return false;
                  }
                  e.regionAbove(n).dirty = n.dirty = true;
                  t.mesh.splitEdge(i.Sym);
                  t.mesh.splice(s.Oprev, i);
                }
                return true;
              };
              e.checkForLeftSplice = function (t, n) {
                var r;
                var i = e.regionBelow(n);
                var s = n.eUp;
                var a = i.eUp;
                F(!N.vertEq(s.Dst, a.Dst));
                if (N.vertLeq(s.Dst, a.Dst)) {
                  if (N.edgeSign(s.Dst, a.Dst, s.Org) < 0) {
                    return false;
                  }
                  e.regionAbove(n).dirty = n.dirty = true;
                  r = t.mesh.splitEdge(s);
                  t.mesh.splice(a.Sym, r);
                  r.Lface.inside = n.inside;
                } else {
                  if (N.edgeSign(a.Dst, s.Dst, a.Org) > 0) {
                    return false;
                  }
                  n.dirty = i.dirty = true;
                  r = t.mesh.splitEdge(a);
                  t.mesh.splice(s.Lnext, a.Sym);
                  r.Rface.inside = n.inside;
                }
                return true;
              };
              e.checkForIntersect = function (t, n) {
                var r;
                var i = e.regionBelow(n);
                var s = n.eUp;
                var a = i.eUp;
                var o = s.Org;
                var h = a.Org;
                var l = s.Dst;
                var d = a.Dst;
                var c = new H();
                F(!N.vertEq(d, l));
                F(N.edgeSign(l, t.event, o) <= 0);
                F(N.edgeSign(d, t.event, h) >= 0);
                F(o !== t.event && h !== t.event);
                F(!n.fixUpperEdge && !i.fixUpperEdge);
                if (o === h) {
                  return false;
                }
                if (Math.min(o.t, l.t) > Math.max(h.t, d.t)) {
                  return false;
                }
                if (N.vertLeq(o, h)) {
                  if (N.edgeSign(d, o, h) > 0) {
                    return false;
                  }
                } else if (N.edgeSign(l, h, o) < 0) {
                  return false;
                }
                e.debugEvent(t);
                N.intersect(l, o, d, h, c);
                F(Math.min(o.t, l.t) <= c.t);
                F(c.t <= Math.max(h.t, d.t));
                F(Math.min(d.s, l.s) <= c.s);
                F(c.s <= Math.max(h.s, o.s));
                if (N.vertLeq(c, t.event)) {
                  c.s = t.event.s;
                  c.t = t.event.t;
                }
                var u = N.vertLeq(o, h) ? o : h;
                if (N.vertLeq(u, c)) {
                  c.s = u.s;
                  c.t = u.t;
                }
                if (N.vertEq(c, o) || N.vertEq(c, h)) {
                  e.checkForRightSplice(t, n);
                  return false;
                } else if (!N.vertEq(l, t.event) && N.edgeSign(l, t.event, c) >= 0 || !N.vertEq(d, t.event) && N.edgeSign(d, t.event, c) <= 0) {
                  if (d === t.event) {
                    t.mesh.splitEdge(s.Sym);
                    t.mesh.splice(a.Sym, s);
                    n = e.topLeftRegion(t, n);
                    s = e.regionBelow(n).eUp;
                    e.finishLeftRegions(t, e.regionBelow(n), i);
                    e.addRightEdges(t, n, s.Oprev, s, s, true);
                    return true;
                  } else if (l === t.event) {
                    t.mesh.splitEdge(a.Sym);
                    t.mesh.splice(s.Lnext, a.Oprev);
                    i = n;
                    n = e.topRightRegion(n);
                    r = e.regionBelow(n).eUp.Rprev;
                    i.eUp = a.Oprev;
                    a = e.finishLeftRegions(t, i, null);
                    e.addRightEdges(t, n, a.Onext, s.Rprev, r, true);
                    return true;
                  } else {
                    if (N.edgeSign(l, t.event, c) >= 0) {
                      e.regionAbove(n).dirty = n.dirty = true;
                      t.mesh.splitEdge(s.Sym);
                      s.Org.s = t.event.s;
                      s.Org.t = t.event.t;
                    }
                    if (N.edgeSign(d, t.event, c) <= 0) {
                      n.dirty = i.dirty = true;
                      t.mesh.splitEdge(a.Sym);
                      a.Org.s = t.event.s;
                      a.Org.t = t.event.t;
                    }
                    return false;
                  }
                } else {
                  t.mesh.splitEdge(s.Sym);
                  t.mesh.splitEdge(a.Sym);
                  t.mesh.splice(a.Oprev, s);
                  s.Org.s = c.s;
                  s.Org.t = c.t;
                  s.Org.pqHandle = t.pq.insert(s.Org);
                  e.getIntersectData(t, s.Org, o, l, h, d);
                  e.regionAbove(n).dirty = n.dirty = i.dirty = true;
                  return false;
                }
              };
              e.walkDirtyRegions = function (t, n) {
                var r;
                var i;
                var s = e.regionBelow(n);
                while (true) {
                  while (s.dirty) {
                    n = s;
                    s = e.regionBelow(s);
                  }
                  if (!n.dirty && (s = n, (n = e.regionAbove(n)) === null || !n.dirty)) {
                    return;
                  }
                  n.dirty = false;
                  r = n.eUp;
                  i = s.eUp;
                  if (r.Dst !== i.Dst && e.checkForLeftSplice(t, n)) {
                    if (s.fixUpperEdge) {
                      e.deleteRegion(t, s);
                      t.mesh.delete(i);
                      i = (s = e.regionBelow(n)).eUp;
                    } else if (n.fixUpperEdge) {
                      e.deleteRegion(t, n);
                      t.mesh.delete(r);
                      r = (n = e.regionAbove(s)).eUp;
                    }
                  }
                  if (r.Org !== i.Org) {
                    if (r.Dst === i.Dst || n.fixUpperEdge || s.fixUpperEdge || r.Dst !== t.event && i.Dst !== t.event) {
                      e.checkForRightSplice(t, n);
                    } else if (e.checkForIntersect(t, n)) {
                      return;
                    }
                  }
                  if (r.Org === i.Org && r.Dst === i.Dst) {
                    e.addWinding(i, r);
                    e.deleteRegion(t, n);
                    t.mesh.delete(r);
                    n = e.regionAbove(s);
                  }
                }
              };
              e.connectRightVertex = function (t, n, r) {
                var i;
                var s = r.Onext;
                var a = e.regionBelow(n);
                var o = n.eUp;
                var h = a.eUp;
                var l = false;
                if (o.Dst !== h.Dst) {
                  e.checkForIntersect(t, n);
                }
                if (N.vertEq(o.Org, t.event)) {
                  t.mesh.splice(s.Oprev, o);
                  n = e.topLeftRegion(t, n);
                  s = e.regionBelow(n).eUp;
                  e.finishLeftRegions(t, e.regionBelow(n), a);
                  l = true;
                }
                if (N.vertEq(h.Org, t.event)) {
                  t.mesh.splice(r, h.Oprev);
                  r = e.finishLeftRegions(t, a, null);
                  l = true;
                }
                if (l) {
                  e.addRightEdges(t, n, r.Onext, s, s, true);
                } else {
                  i = N.vertLeq(h.Org, o.Org) ? h.Oprev : o;
                  i = t.mesh.connect(r.Lprev, i);
                  e.addRightEdges(t, n, i, i.Onext, i.Onext, false);
                  i.Sym.activeRegion.fixUpperEdge = true;
                  e.walkDirtyRegions(t, n);
                }
              };
              e.connectLeftDegenerate = function (t, n, r) {
                var i;
                var s;
                var a;
                var o = n.eUp;
                if (N.vertEq(o.Org, r)) {
                  F(false);
                  e.spliceMergeVertices(t, o, r.anEdge);
                  return;
                }
                if (!N.vertEq(o.Dst, r)) {
                  t.mesh.splitEdge(o.Sym);
                  if (n.fixUpperEdge) {
                    t.mesh.delete(o.Onext);
                    n.fixUpperEdge = false;
                  }
                  t.mesh.splice(r.anEdge, o);
                  e.sweepEvent(t, r);
                  return;
                }
                F(false);
                n = e.topRightRegion(n);
                var h = e.regionBelow(n);
                i = a = (s = h.eUp.Sym).Onext;
                if (h.fixUpperEdge) {
                  F(i !== s);
                  e.deleteRegion(t, h);
                  t.mesh.delete(s);
                  s = i.Oprev;
                }
                t.mesh.splice(r.anEdge, s);
                if (!N.edgeGoesLeft(i)) {
                  i = null;
                }
                e.addRightEdges(t, n, s.Onext, a, i, true);
              };
              e.connectLeftVertex = function (t, n) {
                var r;
                var i = new q();
                i.eUp = n.anEdge.Sym;
                var s = t.dict.search(i).key;
                var a = e.regionBelow(s);
                if (a) {
                  var o = s.eUp;
                  var h = a.eUp;
                  if (N.edgeSign(o.Dst, n, o.Org) !== 0) {
                    var l = N.vertLeq(h.Dst, o.Dst) ? s : a;
                    if (s.inside || l.fixUpperEdge) {
                      r = l === s ? t.mesh.connect(n.anEdge.Sym, o.Lnext) : t.mesh.connect(h.Dnext, n.anEdge).Sym;
                      if (l.fixUpperEdge) {
                        e.fixUpperEdge(t, l, r);
                      } else {
                        e.computeWinding(t, e.addRegionBelow(t, s, r));
                      }
                      e.sweepEvent(t, n);
                    } else {
                      e.addRightEdges(t, s, n.anEdge, n.anEdge, null, true);
                    }
                  } else {
                    e.connectLeftDegenerate(t, s, n);
                  }
                }
              };
              e.sweepEvent = function (t, n) {
                t.event = n;
                e.debugEvent(t);
                for (var r = n.anEdge; r.activeRegion === null;) {
                  if ((r = r.Onext) === n.anEdge) {
                    e.connectLeftVertex(t, n);
                    return;
                  }
                }
                var i = e.topLeftRegion(t, r.activeRegion);
                F(i !== null);
                var s = e.regionBelow(i);
                var a = s.eUp;
                var o = e.finishLeftRegions(t, s, null);
                if (o.Onext === a) {
                  e.connectRightVertex(t, i, o);
                } else {
                  e.addRightEdges(t, i, o.Onext, a, a, true);
                }
              };
              e.addSentinel = function (e, t, n, r) {
                var i = new q();
                var s = e.mesh.makeEdge();
                s.Org.s = n;
                s.Org.t = r;
                s.Dst.s = t;
                s.Dst.t = r;
                e.event = s.Dst;
                i.eUp = s;
                i.windingNumber = 0;
                i.inside = false;
                i.fixUpperEdge = false;
                i.sentinel = true;
                i.dirty = false;
                i.nodeUp = e.dict.insert(i);
              };
              e.initEdgeDict = function (t) {
                t.dict = new K(t, e.edgeLeq);
                var n = t.bmax[0] - t.bmin[0];
                var r = t.bmax[1] - t.bmin[1];
                var i = t.bmin[0] - n;
                var s = t.bmax[0] + n;
                var a = t.bmin[1] - r;
                var o = t.bmax[1] + r;
                e.addSentinel(t, i, s, a);
                e.addSentinel(t, i, s, o);
              };
              e.doneEdgeDict = function (t) {
                for (var n, r = 0; (n = t.dict.min().key) !== null;) {
                  if (!n.sentinel) {
                    F(n.fixUpperEdge);
                    F(++r === 1);
                  }
                  F(n.windingNumber === 0);
                  e.deleteRegion(t, n);
                }
              };
              e.removeDegenerateEdges = function (t) {
                var n;
                var r;
                var i;
                var s = t.mesh.eHead;
                for (n = s.next; n !== s; n = r) {
                  r = n.next;
                  i = n.Lnext;
                  if (N.vertEq(n.Org, n.Dst) && n.Lnext.Lnext !== n) {
                    e.spliceMergeVertices(t, i, n);
                    t.mesh.delete(n);
                    i = (n = i).Lnext;
                  }
                  if (i.Lnext === n) {
                    if (i !== n) {
                      if (i === r || i === r.Sym) {
                        r = r.next;
                      }
                      t.mesh.delete(i);
                    }
                    if (n === r || n === r.Sym) {
                      r = r.next;
                    }
                    t.mesh.delete(n);
                  }
                }
              };
              e.initPriorityQ = function (e) {
                var t;
                var n;
                var r = 0;
                for (t = (n = e.mesh.vHead).next; t !== n; t = t.next) {
                  r++;
                }
                r += 8;
                var i = e.pq = new Y(r, N.vertLeq);
                for (t = (n = e.mesh.vHead).next; t !== n; t = t.next) {
                  t.pqHandle = i.insert(t);
                }
                return t === n && (i.init(), true);
              };
              e.donePriorityQ = function (e) {
                e.pq = null;
              };
              e.removeDegenerateFaces = function (t, n) {
                var r;
                var i;
                var s;
                for (r = n.fHead.next; r !== n.fHead; r = i) {
                  i = r.next;
                  F((s = r.anEdge).Lnext !== s);
                  if (s.Lnext.Lnext === s) {
                    e.addWinding(s.Onext, s);
                    t.mesh.delete(s);
                  }
                }
                return true;
              };
              e.computeInterior = function (t, n) {
                var r;
                var i;
                if (n === undefined) {
                  n = true;
                }
                e.removeDegenerateEdges(t);
                if (!e.initPriorityQ(t)) {
                  return false;
                }
                for (e.initEdgeDict(t); (r = t.pq.extractMin()) !== null;) {
                  while ((i = t.pq.min()) !== null && N.vertEq(i, r)) {
                    i = t.pq.extractMin();
                    e.spliceMergeVertices(t, r.anEdge, i.anEdge);
                  }
                  e.sweepEvent(t, r);
                }
                t.event = t.dict.min().key.eUp.Org;
                e.debugEvent(t);
                e.doneEdgeDict(t);
                e.donePriorityQ(t);
                return !!e.removeDegenerateFaces(t, t.mesh) && (n && t.mesh.check(), true);
              };
              return e;
            }();
            var $ = function () {
              function e() {
                this.mesh = new z();
                this.normal = [0, 0, 0];
                this.sUnit = [0, 0, 0];
                this.tUnit = [0, 0, 0];
                this.bmin = [0, 0];
                this.bmax = [0, 0];
                this.windingRule = B.ODD;
                this.dict = null;
                this.pq = null;
                this.event = null;
                this.vertexIndexCounter = 0;
                this.vertices = [];
                this.vertexIndices = [];
                this.vertexCount = 0;
                this.elements = [];
                this.elementCount = 0;
              }
              var t = e.prototype;
              t.dot_ = function (e, t) {
                return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
              };
              t.normalize_ = function (e) {
                var t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2];
                if (!t) {
                  throw "Zero-size vector!";
                }
                t = Math.sqrt(t);
                e[0] /= t;
                e[1] /= t;
                e[2] /= t;
              };
              t.longAxis_ = function (e) {
                var t = 0;
                if (Math.abs(e[1]) > Math.abs(e[0])) {
                  t = 1;
                }
                if (Math.abs(e[2]) > Math.abs(e[t])) {
                  t = 2;
                }
                return t;
              };
              t.computeNormal_ = function (e) {
                var t;
                var n;
                var r;
                var i;
                var s = [0, 0, 0];
                var a = [0, 0, 0];
                var o = [0, 0, 0];
                var h = [0, 0, 0];
                var l = [0, 0, 0];
                var d = [null, null, null];
                var c = [null, null, null];
                var u = this.mesh.vHead;
                t = u.next;
                for (var p = 0; p < 3; ++p) {
                  n = t.coords[p];
                  a[p] = n;
                  c[p] = t;
                  s[p] = n;
                  d[p] = t;
                }
                for (t = u.next; t !== u; t = t.next) {
                  for (var m = 0; m < 3; ++m) {
                    if ((n = t.coords[m]) < a[m]) {
                      a[m] = n;
                      c[m] = t;
                    }
                    if (n > s[m]) {
                      s[m] = n;
                      d[m] = t;
                    }
                  }
                }
                var f = 0;
                if (s[1] - a[1] > s[0] - a[0]) {
                  f = 1;
                }
                if (s[2] - a[2] > s[f] - a[f]) {
                  f = 2;
                }
                if (a[f] >= s[f]) {
                  e[0] = 0;
                  e[1] = 0;
                  e[2] = 1;
                  return;
                }
                i = 0;
                var _ = c[f];
                var v = d[f];
                o[0] = _.coords[0] - v.coords[0];
                o[1] = _.coords[1] - v.coords[1];
                o[2] = _.coords[2] - v.coords[2];
                t = u.next;
                for (; t !== u; t = t.next) {
                  h[0] = t.coords[0] - v.coords[0];
                  h[1] = t.coords[1] - v.coords[1];
                  h[2] = t.coords[2] - v.coords[2];
                  l[0] = o[1] * h[2] - o[2] * h[1];
                  l[1] = o[2] * h[0] - o[0] * h[2];
                  l[2] = o[0] * h[1] - o[1] * h[0];
                  if ((r = l[0] * l[0] + l[1] * l[1] + l[2] * l[2]) > i) {
                    i = r;
                    e[0] = l[0];
                    e[1] = l[1];
                    e[2] = l[2];
                  }
                }
                if (i <= 0) {
                  e[0] = e[1] = e[2] = 0;
                  e[this.longAxis_(o)] = 1;
                }
              };
              t.checkOrientation_ = function () {
                var e;
                var t;
                for (var n = this.mesh.fHead, r = this.mesh.vHead, i = 0, s = n.next; s !== n; s = s.next) {
                  if (!((t = s.anEdge).winding <= 0)) {
                    do {
                      i += (t.Org.s - t.Dst.s) * (t.Org.t + t.Dst.t);
                      t = t.Lnext;
                    } while (t !== s.anEdge);
                  }
                }
                if (i < 0) {
                  for (e = r.next; e !== r; e = e.next) {
                    e.t = -e.t;
                  }
                  this.tUnit[0] = -this.tUnit[0];
                  this.tUnit[1] = -this.tUnit[1];
                  this.tUnit[2] = -this.tUnit[2];
                }
              };
              t.projectPolygon_ = function () {
                var e = this.mesh.vHead;
                var t = [0, 0, 0];
                var n = false;
                t[0] = this.normal[0];
                t[1] = this.normal[1];
                t[2] = this.normal[2];
                if (!t[0] && !t[1] && !t[2]) {
                  this.computeNormal_(t);
                  n = true;
                }
                var r = this.sUnit;
                var i = this.tUnit;
                var s = this.longAxis_(t);
                r[s] = 0;
                r[(s + 1) % 3] = 1;
                r[(s + 2) % 3] = 0;
                i[s] = 0;
                i[(s + 1) % 3] = 0;
                i[(s + 2) % 3] = t[s] > 0 ? 1 : -1;
                for (var a = e.next; a !== e; a = a.next) {
                  a.s = this.dot_(a.coords, r);
                  a.t = this.dot_(a.coords, i);
                }
                if (n) {
                  this.checkOrientation_();
                }
                var o = true;
                for (var h = e.next; h !== e; h = h.next) {
                  if (o) {
                    this.bmin[0] = this.bmax[0] = h.s;
                    this.bmin[1] = this.bmax[1] = h.t;
                    o = false;
                  } else {
                    if (h.s < this.bmin[0]) {
                      this.bmin[0] = h.s;
                    }
                    if (h.s > this.bmax[0]) {
                      this.bmax[0] = h.s;
                    }
                    if (h.t < this.bmin[1]) {
                      this.bmin[1] = h.t;
                    }
                    if (h.t > this.bmax[1]) {
                      this.bmax[1] = h.t;
                    }
                  }
                }
              };
              t.addWinding_ = function (e, t) {
                e.winding += t.winding;
                e.Sym.winding += t.Sym.winding;
              };
              t.tessellateMonoRegion_ = function (e, t) {
                var n;
                var r;
                if ((n = t.anEdge).Lnext === n || n.Lnext.Lnext === n) {
                  throw "Mono region invalid";
                }
                for (; N.vertLeq(n.Dst, n.Org); n = n.Lprev);
                for (; N.vertLeq(n.Org, n.Dst); n = n.Lnext);
                for (r = n.Lprev; n.Lnext !== r;) {
                  if (N.vertLeq(n.Dst, r.Org)) {
                    while (r.Lnext !== n && (N.edgeGoesLeft(r.Lnext) || N.edgeSign(r.Org, r.Dst, r.Lnext.Dst) <= 0)) {
                      r = e.connect(r.Lnext, r).Sym;
                    }
                    r = r.Lprev;
                  } else {
                    while (r.Lnext !== n && (N.edgeGoesRight(n.Lprev) || N.edgeSign(n.Dst, n.Org, n.Lprev.Org) >= 0)) {
                      n = e.connect(n, n.Lprev).Sym;
                    }
                    n = n.Lnext;
                  }
                }
                if (r.Lnext === n) {
                  throw "Mono region invalid";
                }
                while (r.Lnext.Lnext !== n) {
                  r = e.connect(r.Lnext, r).Sym;
                }
                return true;
              };
              t.tessellateInterior_ = function (e) {
                for (var t, n = e.fHead.next; n !== e.fHead; n = t) {
                  t = n.next;
                  if (n.inside && !this.tessellateMonoRegion_(e, n)) {
                    return false;
                  }
                }
                return true;
              };
              t.discardExterior_ = function (e) {
                for (var t, n = e.fHead.next; n !== e.fHead; n = t) {
                  t = n.next;
                  if (!n.inside) {
                    e.zapFace(n);
                  }
                }
              };
              t.setWindingNumber_ = function (e, t, n) {
                for (var r, i = e.eHead.next; i !== e.eHead; i = r) {
                  r = i.next;
                  if (i.Rface.inside !== i.Lface.inside) {
                    i.winding = i.Lface.inside ? t : -t;
                  } else if (n) {
                    e.delete(i);
                  } else {
                    i.winding = 0;
                  }
                }
              };
              t.getNeighbourFace_ = function (e) {
                if (e.Rface && e.Rface.inside) {
                  return e.Rface.n;
                } else {
                  return -1;
                }
              };
              t.outputPolymesh_ = function (e, t, n, r) {
                var i;
                var s;
                var a = 0;
                var o = 0;
                if (n > 3) {
                  e.mergeConvexFaces(n);
                }
                for (var h = e.vHead.next; h !== e.vHead; h = h.next) {
                  h.n = -1;
                }
                for (var l = e.fHead.next; l !== e.fHead; l = l.next) {
                  l.n = -1;
                  if (l.inside) {
                    i = l.anEdge;
                    s = 0;
                    do {
                      var d = i.Org;
                      if (d.n === -1) {
                        d.n = o;
                        o++;
                      }
                      s++;
                      i = i.Lnext;
                    } while (i !== l.anEdge);
                    if (s > n) {
                      throw "Face vertex greater that support polygon";
                    }
                    l.n = a;
                    ++a;
                  }
                }
                this.elementCount = a;
                if (t === D.CONNECTED_POLYGONS) {
                  a *= 2;
                }
                this.elements = [];
                this.elements.length = a * n;
                this.vertexCount = o;
                this.vertices = [];
                this.vertices.length = o * r;
                this.vertexIndices = [];
                this.vertexIndices.length = o;
                for (var c = e.vHead.next; c !== e.vHead; c = c.next) {
                  if (c.n !== -1) {
                    var u = c.n * r;
                    this.vertices[u + 0] = c.coords[0];
                    this.vertices[u + 1] = c.coords[1];
                    if (r > 2) {
                      this.vertices[u + 2] = c.coords[2];
                    }
                    this.vertexIndices[c.n] = c.idx;
                  }
                }
                var p = 0;
                for (var m = e.fHead.next; m !== e.fHead; m = m.next) {
                  if (m.inside) {
                    i = m.anEdge;
                    s = 0;
                    do {
                      var f = i.Org;
                      this.elements[p++] = f.n;
                      s++;
                      i = i.Lnext;
                    } while (i !== m.anEdge);
                    for (var _ = s; _ < n; ++_) {
                      this.elements[p++] = -1;
                    }
                    if (t === D.CONNECTED_POLYGONS) {
                      i = m.anEdge;
                      do {
                        this.elements[p++] = this.getNeighbourFace_(i);
                        i = i.Lnext;
                      } while (i !== m.anEdge);
                      for (var v = s; v < n; ++v) {
                        this.elements[p++] = -1;
                      }
                    }
                  }
                }
              };
              t.outputContours_ = function (e, t) {
                var n;
                var r;
                var i = 0;
                var s = 0;
                this.vertexCount = 0;
                this.elementCount = 0;
                for (var a = e.fHead.next; a !== e.fHead; a = a.next) {
                  if (a.inside) {
                    r = n = a.anEdge;
                    do {
                      this.vertexCount++;
                      n = n.Lnext;
                    } while (n !== r);
                    this.elementCount++;
                  }
                }
                this.elements = [];
                this.elements.length = this.elementCount * 2;
                this.vertices = [];
                this.vertices.length = this.vertexCount * t;
                this.vertexIndices = [];
                this.vertexIndices.length = this.vertexCount;
                var o = 0;
                var h = 0;
                var l = 0;
                i = 0;
                for (var d = e.fHead.next; d !== e.fHead; d = d.next) {
                  if (d.inside) {
                    s = 0;
                    r = n = d.anEdge;
                    do {
                      this.vertices[o++] = n.Org.coords[0];
                      this.vertices[o++] = n.Org.coords[1];
                      if (t > 2) {
                        this.vertices[o++] = n.Org.coords[2];
                      }
                      this.vertexIndices[h++] = n.Org.idx;
                      s++;
                      n = n.Lnext;
                    } while (n !== r);
                    this.elements[l++] = i;
                    this.elements[l++] = s;
                    i += s;
                  }
                }
              };
              t.addContour = function (e, t) {
                if (this.mesh === null) {
                  this.mesh = new z();
                }
                if (e < 2) {
                  e = 2;
                }
                if (e > 3) {
                  e = 3;
                }
                var n = null;
                for (var r = 0; r < t.length; r += e) {
                  if (n === null) {
                    n = this.mesh.makeEdge();
                    this.mesh.splice(n, n.Sym);
                  } else {
                    this.mesh.splitEdge(n);
                    n = n.Lnext;
                  }
                  n.Org.coords[0] = t[r + 0];
                  n.Org.coords[1] = t[r + 1];
                  n.Org.coords[2] = e > 2 ? t[r + 2] : 0;
                  n.Org.idx = this.vertexIndexCounter++;
                  n.winding = 1;
                  n.Sym.winding = -1;
                }
              };
              t.tesselate = function (e = B.ODD, t = D.POLYGONS, n, r, i, s = true) {
                this.vertices = [];
                this.elements = [];
                this.vertexIndices = [];
                this.vertexIndexCounter = 0;
                if (i) {
                  this.normal[0] = i[0];
                  this.normal[1] = i[1];
                  this.normal[2] = i[2];
                }
                this.windingRule = e;
                if (r < 2) {
                  r = 2;
                }
                if (r > 3) {
                  r = 3;
                }
                if (!this.mesh) {
                  return false;
                }
                this.projectPolygon_();
                Z.computeInterior(this, s);
                var a = this.mesh;
                if (t === D.BOUNDARY_CONTOURS) {
                  this.setWindingNumber_(a, 1, true);
                } else {
                  this.tessellateInterior_(a);
                }
                if (s) {
                  a.check();
                }
                if (t === D.BOUNDARY_CONTOURS) {
                  this.outputContours_(a, r);
                } else {
                  this.outputPolymesh_(a, t, n, r);
                }
                return true;
              };
              return e;
            }();
            function Q() {
              var e;
              var t;
              var n = typeof Symbol == "function" ? Symbol : {};
              var r = n.iterator || "@@iterator";
              var i = n.toStringTag || "@@toStringTag";
              function s(n, r, i, s) {
                var h = r && r.prototype instanceof o ? r : o;
                var l = Object.create(h.prototype);
                ee(l, "_invoke", function (n, r, i) {
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
              var d = [][r] ? t(t([][r]())) : (ee(t = {}, r, function () {
                return this;
              }), t);
              var c = l.prototype = o.prototype = Object.create(d);
              function u(e) {
                if (Object.setPrototypeOf) {
                  Object.setPrototypeOf(e, l);
                } else {
                  e.__proto__ = l;
                  ee(e, i, "GeneratorFunction");
                }
                e.prototype = Object.create(c);
                return e;
              }
              h.prototype = l;
              ee(c, "constructor", l);
              ee(l, "constructor", h);
              h.displayName = "GeneratorFunction";
              ee(l, i, "GeneratorFunction");
              ee(c);
              ee(c, i, "Generator");
              ee(c, r, function () {
                return this;
              });
              ee(c, "toString", function () {
                return "[object Generator]";
              });
              return (Q = function () {
                return {
                  w: s,
                  m: u
                };
              })();
            }
            function ee(e, t, n, r) {
              var i = Object.defineProperty;
              try {
                i({}, "", {});
              } catch (e) {
                i = 0;
              }
              ee = function (e, t, n, r) {
                function s(t, n) {
                  ee(e, t, function (e) {
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
              ee(e, t, n, r);
            }
            function te(e, t) {
              e.prototype = Object.create(t.prototype);
              e.prototype.constructor = e;
              ne(e, t);
            }
            function ne(e, t) {
              ne = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return ne(e, t);
            }
            function re(e, t, n, r, i, s, a) {
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
            function ie(e) {
              return function () {
                var t = this;
                var n = arguments;
                return new Promise(function (r, i) {
                  var s = e.apply(t, n);
                  function a(e) {
                    re(s, r, i, a, o, "next", e);
                  }
                  function o(e) {
                    re(s, r, i, a, o, "throw", e);
                  }
                  a(undefined);
                });
              };
            }
            function se() {
              se = ie(Q().m(function e(t) {
                var n;
                var r;
                var i;
                var s;
                var a;
                var o;
                var h;
                var l;
                var d;
                var c;
                var u;
                var p;
                var m;
                var f;
                var _;
                var v;
                var y;
                var g;
                var w;
                var x;
                var b;
                var T;
                var A;
                var C;
                var S;
                var E;
                var O;
                var k;
                var P;
                var M;
                var R;
                var I;
                var L;
                var j;
                var B;
                var D;
                var F;
                var N;
                var G;
                var U;
                var V;
                var H;
                var z;
                var W;
                var X;
                var Y;
                var q;
                var J;
                var K;
                var Z;
                var $;
                var ee;
                var ne;
                return Q().w(function (e) {
                  while (true) {
                    switch (e.n) {
                      case 0:
                        ee = function (e, t, n, r, i, s) {
                          var a = z();
                          try {
                            F(e)(t, n, r, i, s);
                          } catch (e) {
                            V(a);
                            if (!(e instanceof v)) {
                              throw e;
                            }
                            U(1, 0);
                          }
                        };
                        $ = function (e, t, n, r) {
                          var i = z();
                          try {
                            F(e)(t, n, r);
                          } catch (e) {
                            V(i);
                            if (!(e instanceof v)) {
                              throw e;
                            }
                            U(1, 0);
                          }
                        };
                        Z = function (e, t, n) {
                          var r = z();
                          try {
                            return F(e)(t, n);
                          } catch (e) {
                            V(r);
                            if (!(e instanceof v)) {
                              throw e;
                            }
                            U(1, 0);
                          }
                        };
                        K = function (e, t) {
                          var n = z();
                          try {
                            return F(e)(t);
                          } catch (e) {
                            V(n);
                            if (!(e instanceof v)) {
                              throw e;
                            }
                            U(1, 0);
                          }
                        };
                        J = function (e, t) {
                          var n = z();
                          try {
                            F(e)(t);
                          } catch (e) {
                            V(n);
                            if (!(e instanceof v)) {
                              throw e;
                            }
                            U(1, 0);
                          }
                        };
                        q = function (e, t, n) {
                          var r = z();
                          try {
                            F(e)(t, n);
                          } catch (e) {
                            V(r);
                            if (!(e instanceof v)) {
                              throw e;
                            }
                            U(1, 0);
                          }
                        };
                        P = function () {
                          return (P = ie(Q().m(function e(t) {
                            return Q().w(function (e) {
                              while (true) {
                                if (e.n === 0) {
                                  return e.a(2, E(t));
                                }
                              }
                            }, e);
                          }))).apply(this, arguments);
                        };
                        k = function (e) {
                          return P.apply(this, arguments);
                        };
                        O = function () {
                          return (O = ie(Q().m(function e(t) {
                            var n;
                            var r;
                            var i;
                            return Q().w(function (e) {
                              while (true) {
                                switch (e.p = e.n) {
                                  case 0:
                                    n = A;
                                    e.p = 1;
                                    e.n = 2;
                                    return C(n);
                                  case 2:
                                    r = e.v;
                                    e.n = 3;
                                    return WebAssembly.instantiate(r, t);
                                  case 3:
                                    return e.a(2, e.v);
                                  case 4:
                                    e.p = 4;
                                    i = e.v;
                                    f("failed to asynchronously prepare wasm: " + i);
                                    T(i);
                                  case 5:
                                    return e.a(2);
                                }
                              }
                            }, e, null, [[1, 4]]);
                          }))).apply(this, arguments);
                        };
                        E = function (e) {
                          return O.apply(this, arguments);
                        };
                        S = function () {
                          return (S = ie(Q().m(function e(t) {
                            return Q().w(function (e) {
                              while (true) {
                                if (e.n === 0) {
                                  return e.a(2, t);
                                }
                              }
                            }, e);
                          }))).apply(this, arguments);
                        };
                        C = function (e) {
                          return S.apply(this, arguments);
                        };
                        T = function (e) {
                          var t;
                          if ((t = n.onAbort) !== null && t !== undefined) {
                            t.call(n, e);
                          }
                          f(e = "Aborted(" + e + ")");
                          _ = true;
                          throw new WebAssembly.RuntimeError(e + ". Build with -sASSERTIONS for more info.");
                        };
                        b = function () {
                          var e = n.postRun;
                          if (e) {
                            if (typeof e == "function") {
                              e = [e];
                            }
                            R.push.apply(R, e);
                          }
                          e = R;
                          while (e.length > 0) {
                            e.shift()(n);
                          }
                        };
                        x = function () {
                          var e = n.preRun;
                          if (e) {
                            if (typeof e == "function") {
                              e = [e];
                            }
                            I.push.apply(I, e);
                          }
                          e = I;
                          while (e.length > 0) {
                            e.shift()(n);
                          }
                        };
                        w = function () {
                          var e;
                          var t;
                          if ((e = M) === null || e === undefined || (t = e.buffer) === null || t === undefined || !t.resizable) {
                            var r = W.buffer;
                            n.HEAP8 = M = new Int8Array(r);
                            B = new Uint8Array(r);
                          }
                        };
                        g = function (e) {
                          var t;
                          for (var n = 0, r = e.length, i = new Uint8Array(r); n < r; ++n) {
                            t = e.charCodeAt(n);
                            i[n] = ~t >> 8 & t;
                          }
                          return i;
                        };
                        p = function (e, t, n) {
                          if (!t || t < 0) {
                            throw Error("Size has to be greater 0");
                          }
                          if (!e) {
                            throw Error("Invalid pointer");
                          }
                          (t = new (n = n || Uint8Array)(r.HEAP8.buffer, e, t)).A = e;
                          t.C = function () {
                            r._free(e);
                          };
                          return t;
                        };
                        if (t === undefined) {
                          t = {};
                        }
                        (m = (r = n = t).Tess = function () {
                          if (!i) {
                            var e = r.cwrap;
                            i = e("tessNewTess", "number", ["number"]);
                            s = e("tessDeleteTess", null, ["number"]);
                            a = e("tessAddContour", "number", ["number", "number", "number", "number", "number"]);
                            o = e("tessTesselate", "number", "number number number number number number".split(" "));
                            h = e("tessGetVertexCount", "number", ["number"]);
                            l = e("tessGetVertices", "number", ["number"]);
                            d = e("tessGetElementCount", "number", ["number"]);
                            c = e("tessGetElements", "number", ["number"]);
                            u = e("tessGetVertexIndices", "number", ["number"]);
                          }
                          this.A = i(0);
                          this.B = [];
                          if (!this.A) {
                            throw Error("Unknown error, tesselator not initialized yet");
                          }
                        }).prototype.dispose = function () {
                          if (this.A) {
                            s(this.A);
                            this.B.forEach(function (e) {
                              if (e.C) {
                                e.C();
                              }
                            });
                            this.B = [];
                            this.A = 0;
                          }
                        };
                        m.prototype.addContours = function (e, t) {
                          if (!this.A) {
                            throw Error("Tesselator not initialized yet");
                          }
                          t = t || 2;
                          var n = this.B = [];
                          if (typeof e[0] == "number") {
                            e = [e];
                          }
                          for (var i = 0; i < e.length; i++) {
                            var s = e[i];
                            var o = s.length;
                            var h = Float32Array;
                            var l = r._malloc(o * h.BYTES_PER_ELEMENT);
                            if (!l) {
                              throw Error("Can't allocate a " + o);
                            }
                            (o = p(l, o, h)).set(s, 0);
                            n.push(o);
                            a(this.A, t, o.A, t * Float32Array.BYTES_PER_ELEMENT, s.length / t);
                          }
                        };
                        m.prototype.tesselate = function (e) {
                          if (this.B.length === 0) {
                            throw Error("No contours defined");
                          }
                          e = Object.assign({
                            K: 0,
                            F: 0,
                            H: 3,
                            J: 2,
                            G: false
                          }, e || {});
                          if (!o(this.A, e.windingRule | 0 || 0, e.elementType | 0 || 0, e.polySize | 0 || 3, e.vertexSize | 0 || 2, 0)) {
                            return null;
                          }
                          var t = h(this.A);
                          var n = d(this.A);
                          var r = {
                            D: n,
                            I: t
                          };
                          if (t && n) {
                            r.vertices = p(l(this.A), t * e.vertexSize, Float32Array);
                            r.elements = p(c(this.A), n * e.polySize, Uint32Array);
                            if (e.fillVertexIndices) {
                              r.vertexIndices = p(u(this.A), t, Uint32Array);
                            }
                            return r;
                          } else {
                            return null;
                          }
                        };
                        try {
                          new URL(".", "file:///tess2.es.js");
                        } catch (e) {}
                        f = function () {}.bind();
                        _ = false;
                        y = function (e) {
                          function t() {
                            return e.apply(this, arguments) || this;
                          }
                          te(t, e);
                          return t;
                        }(v = function () {});
                        R = [];
                        I = [];
                        L = globalThis.TextDecoder && new TextDecoder();
                        j = function (e = 0) {
                          for (var t = B, n = e, r = n + NaN; t[n] && !(n >= r);) {
                            ++n;
                          }
                          if (n - e > 16 && t.buffer && L) {
                            return L.decode(t.subarray(e, n));
                          }
                          for (r = ""; e < n;) {
                            var i = t[e++];
                            if (i & 128) {
                              var s = t[e++] & 63;
                              if ((i & 224) == 192) {
                                r += String.fromCharCode((i & 31) << 6 | s);
                              } else {
                                var a = t[e++] & 63;
                                if ((i = (i & 240) == 224 ? (i & 15) << 12 | s << 6 | a : (i & 7) << 18 | s << 12 | a << 6 | t[e++] & 63) < 65536) {
                                  r += String.fromCharCode(i);
                                } else {
                                  i -= 65536;
                                  r += String.fromCharCode(i >> 10 | 55296, i & 1023 | 56320);
                                }
                              }
                            } else {
                              r += String.fromCharCode(i);
                            }
                          }
                          return r;
                        };
                        D = [];
                        F = function (e) {
                          var t = D[e];
                          if (!t) {
                            D[e] = t = X.get(e);
                          }
                          return t;
                        };
                        N = function (e, t, r, i) {
                          var s = {
                            string: function (e) {
                              var t = 0;
                              if (e != null && e !== 0) {
                                for (var n = t = 0; n < e.length; ++n) {
                                  var r = e.charCodeAt(n);
                                  if (r <= 127) {
                                    t++;
                                  } else if (r <= 2047) {
                                    t += 2;
                                  } else if (r >= 55296 && r <= 57343) {
                                    t += 4;
                                    ++n;
                                  } else {
                                    t += 3;
                                  }
                                }
                                var i = t + 1;
                                n = t = H(i);
                                r = B;
                                if (i > 0) {
                                  i = n + i - 1;
                                  for (var s = 0; s < e.length; ++s) {
                                    var a = e.codePointAt(s);
                                    if (a <= 127) {
                                      if (n >= i) {
                                        break;
                                      }
                                      r[n++] = a;
                                    } else if (a <= 2047) {
                                      if (n + 1 >= i) {
                                        break;
                                      }
                                      r[n++] = a >> 6 | 192;
                                      r[n++] = a & 63 | 128;
                                    } else if (a <= 65535) {
                                      if (n + 2 >= i) {
                                        break;
                                      }
                                      r[n++] = a >> 12 | 224;
                                      r[n++] = a >> 6 & 63 | 128;
                                      r[n++] = a & 63 | 128;
                                    } else {
                                      if (n + 3 >= i) {
                                        break;
                                      }
                                      r[n++] = a >> 18 | 240;
                                      r[n++] = a >> 12 & 63 | 128;
                                      r[n++] = a >> 6 & 63 | 128;
                                      r[n++] = a & 63 | 128;
                                      s++;
                                    }
                                  }
                                  r[n] = 0;
                                }
                              }
                              return t;
                            },
                            array: function (e) {
                              var t = H(e.length);
                              M.set(e, t);
                              return t;
                            }
                          };
                          e = n["_" + e];
                          var a;
                          var o = [];
                          var h = 0;
                          if (i) {
                            for (var l = 0; l < i.length; l++) {
                              var d = s[r[l]];
                              if (d) {
                                if (h === 0) {
                                  h = z();
                                }
                                o[l] = d(i[l]);
                              } else {
                                o[l] = i[l];
                              }
                            }
                          }
                          a = r = e.apply(undefined, o);
                          if (h !== 0) {
                            V(h);
                          }
                          if (t === "string") {
                            if (a) {
                              return j(a);
                            } else {
                              return "";
                            }
                          } else if (t === "boolean") {
                            return !!a;
                          } else {
                            return a;
                          }
                        };
                        if (n.printErr) {
                          f = n.printErr;
                        }
                        if (G = n.preInit) {
                          for (typeof G == "function" && (n.preInit = G = [G]); G.length > 0;) {
                            G.shift()();
                          }
                        }
                        n.cwrap = function (e, t, r, i) {
                          var s = !r || r.every(function (e) {
                            return e === "number" || e === "boolean";
                          });
                          if (t !== "string" && s && !i) {
                            return n["_" + e];
                          } else {
                            return function () {
                              for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++) {
                                i[s] = arguments[s];
                              }
                              return N(e, t, r, i);
                            };
                          }
                        };
                        Y = {
                          a: function (e, t, n, r) {
                            return T("Assertion failed: " + (e ? j(e) : "") + ", at: " + [t ? t ? j(t) : "" : "unknown filename", n, r ? r ? j(r) : "" : "unknown function"]);
                          },
                          e: function () {
                            throw new y();
                          },
                          f: function (e) {
                            var t = B.length;
                            if ((e >>>= 0) > 2147483648) {
                              return false;
                            }
                            for (var n = 1; n <= 4; n *= 2) {
                              var r = t * (1 + 0.2 / n);
                              r = Math.min(r, e + 100663296);
                              e: {
                                r = (Math.min(2147483648, Math.ceil(Math.max(e, r) / 65536) * 65536) - W.buffer.byteLength + 65535) / 65536 | 0;
                                try {
                                  W.grow(r);
                                  w();
                                  var i = 1;
                                  break e;
                                } catch (e) {}
                                i = undefined;
                              }
                              if (i) {
                                return true;
                              }
                            }
                            return false;
                          },
                          i: K,
                          d: Z,
                          c: J,
                          b: q,
                          h: $,
                          g: ee
                        };
                        e.n = 1;
                        return ie(Q().m(function e() {
                          var t;
                          var r;
                          var i;
                          var s;
                          var a;
                          return Q().w(function (e) {
                            while (true) {
                              switch (e.n) {
                                case 0:
                                  r = function (e) {
                                    e = ne = e.exports;
                                    n._malloc = e.l;
                                    n._free = e.m;
                                    n._tessNewTess = e.n;
                                    n._tessDeleteTess = e.o;
                                    n._tessAddContour = e.p;
                                    n._tessTesselate = e.q;
                                    n._tessGetVertexCount = e.r;
                                    n._tessGetVertices = e.s;
                                    n._tessGetVertexIndices = e.t;
                                    n._tessGetElementCount = e.u;
                                    n._tessGetElements = e.v;
                                    U = e.w;
                                    V = e.x;
                                    H = e.y;
                                    z = e.z;
                                    W = e.j;
                                    X = e.k;
                                    w();
                                    return ne;
                                  };
                                  i = {
                                    a: Y
                                  };
                                  if (!(s = n.instantiateWasm)) {
                                    e.n = 1;
                                    break;
                                  }
                                  return e.a(2, new Promise(function (e) {
                                    s(i, function (t) {
                                      return e(r(t));
                                    });
                                  }));
                                case 1:
                                  if ((t = A) === null || t === undefined) {
                                    A = g("\0asm\0\0\0a`\0````\0`\0`\0`\0`}`\0`\0\0``}}}\0`\0`7\taa\0ab\0ac\0\0ad\0ae\0\naf\0ag\0ah\0ai\076\b\0\0\0\0\b\0\0\f\0\r\0\t\t\0p\rAÐA\0Ej\0k\0l\0m\0n 8o 7p 4q 3r 1s 0t\0/u\0.v\0-w\0,x\0+y\0*z\0)\t\0A2=\">'\f<56(;:9\f\nÕ6é@  F\r\0 (\" (\"G@ (\b\"!@  6 (\b\" G\r\0 (\0\" (\"6  6\0  \0(\"( 6\0  6\0 (\" (\"\bG@ (\b\"!@  \b6 (\f\" G\r\0 (\0\" (\"6  6\0  \0(\"( 6\0  6\0 (\b! (\b\"( 6\f ( 6\f  6\b  6\b  F@ \0(\"E@A\0  (\"(\"6  6\0  6\0  6  6\b !@  6 (\b\" G\r\0 ( 6\b  \bG\r\0 \0(\"\0E@A\0 \0 (\"(\"6   6\0 \0 6\0   6 \0A\0:\0 \0A 6\f \0 6\b \0 -\0:\0 !@   6 (\f\" G\r\0 ( 6\bA}@ \0*\" *\"]E@  \\\r \0* *_E\r  *\"]E@  \\\r * *_E\r  \"  \"C\0\0\0\0^} *\" *    \0*C\0\0\0\0A¬A´AÒ\0A÷\0\0£@ \0(\0\"@ (\0\"\r \0(\"(\f \0(\f \0(\blAj (\0\0\"E@A\0  \0(6\0 \0 6 \0(\b\" \0(\flAj! \0(\0!@ !   k\"j\" 6\0 AG\r\0 \0 6\0 (\0! \0 6\0 Ô (\" (\"(\"G@ (\b\"!@  6 (\f\" G\r\0 (\0\" (\"6  6\0  \0(\"( 6\0  6\0@  (\b\"F@ (\"(\b\"!@ A 6 (\b\" G\r\0 (\0\" (\"6  6\0  \0(\"( 6\0  6\0\f (\"( (\f\"6\b ( 6\b (\b! ( 6\f ( 6\f  6\b  6\b  G\r\0 \0(\"E@A\0  (\"(\"6  6\0  6\0  6 A\0:\0 A 6\f  6\b  -\0:\0 !@  6 (\f\" G\r\0@  (\b\"F@ (\"(\b\"!@ A 6 (\b\" G\r\0 (\0\" (\"6  6\0  \0(\"( 6\0  6\0 (\"(\b\"!@ A 6 (\f\" G\r\0 (\0\" (\"6  6\0  \0(\"( 6\0  6\0\f ( ((\f\"6\b ( 6\b (\b! ( 6\f ( 6\f  6\b  6\b \0(! (\"\0  \0 I\"\0(\0\"( \0((\0\"6\0 ( 6\0 \0 ( 6\0   6\0Aò !@ \0(\"E\r\0  (\"   I\"(\"(\0\"6  ( 6\0  6\0  A j\"6\0 B 7  6\f  6 B 7 B 70  6( B 78  6\b  6,  6$ (\f\"(\b!  6, ( 6\f  6\b  6\b  ((6 \0(\"E\r\0  (\"\0(\"6  6\0   6\0 \0 6  6\b !\0@ \0 6 \0(\b\"\0 G\r\0  (\" 6   64 ! \"\0E@A\0 \0(! (\"\0((\f\"(\b! \0(\b\"( 6\f (  6\f \0 6\b  6\b (\b! \0(\b\"( 6\f (  6\f \0 6\b  6\b \0 (6 (\"( 6\b  \0(6  (6  \0(6 &\0AÄ(\0E@AÈA  AM6\0AÄ  6\0\n@ \0(\"E\r\0  (\"   K\"(\"(\0\"6  ( 6\0  6\0  A j\"6\0 B 7  6\f  6 B 7 B 70  6( B 78  6\b  6,  6$ (\"\t! ! !\b \t (\"G@ (\b\"!@  \t6 (\f\" G\r\0 (\0\" (\"6  6\0  \0(\"( 6\0  6\0 (\b\"\b(! (! (\f\"\n(\b!  \n6\f ( 6\f  6\b \n \b6\b (\b! ((\"\b( 6\f ( 6\f  6(  \b6\b  ((6 (!  64  60  6 ( 6\b  \tF@ \0(\"\0E\r \0 (\"(\"6   6\0 \0 6\0   6 \0A\0:\0 \0A 6\f \0 6\b \0 -\0:\0 !@   6 (\f\" G\r\0 !\f \fT~@AÌ(\0\"­ \0­B|Bøÿÿÿ|\"BÿÿÿÿX@ §\"\0?\0AtM\r \0\rAÐA06\0AAÌ  6\0 }@@@@@@ (\"*\"\n (\"(\"\b*\"]E@ \n \\\r * \b*_E\r \0(L\"E\r  6\0  \0(@ ( \"\b6 \bE\r B 7 A 6  6 (\b\" G\r\0@ ((\b(\0\"(\0(\"( E@ (\b! (G@ !\b !\f  (\bG@ \0(\0 ((\f \tE\r \0(\0 ((\f \tE\r  (\b\" (\"k\"\b6\b @@@@@ \0(<\0\n \bAkA}I\f \bAv\f \bA\0J\f  G\f \bAq6\f A6 ((\b(\0\"\b(\0(\"( (G@ !\f Aj!@ \b!  \"(\bG@ \0(\0 ((\f \tE\r \0(\0 ((\f \tE\r  (\b\"\b (\"k\"\t6\b @@@@@ \0(<\0  \bG\f \tA\0J\f \tAv\f \tAkA}I\f \tAq6\f A6 \0 @  ( (j6 (\" ( ((j6 (\0! (@ (\r A 6 \0(@!\b (\0\"\t(\" \t(\b\"6\b  6 \t \b(\"( 6\0  \t6\0  \0(L\"( 6\0  6\0 \0(\0 \fE\r Aj! \"((\b(\0\"\b(\0(\"( \"(F\r\0 A6 \b(\b (\b (kG\r @ \0 #AA¡AÝAÕ\t\0\0AêA¡AAÝ\0\0AÂ\nA¡AAÕ\t\0\0AéA¡AðAö\r\0\0 \0AjA\0ñ (\0!@@@  G@@ A 6 (\"(\b(\0\"(\0\"( (G@ (E@ (\f! (\" 6\b  :\0 A 6 \0(@! (\" (\b\"6\b  6  (\"( 6\0  6\0  \0(L\"\0( 6\0 \0 6\0  \0(\0 (\b( (\"E\r (E\r \0(\0 (\0\fE\r  6\0 A 6  6  (\bG@ \0(\0 ((\f \tE\r \0(\0  \tE\r (\f! (\0\"(\" 6\b  :\0 (@ (\r A 6 \0(@! (\"(\" (\b\"6\b  6  (\"( 6\0  6\0  \0(L\"( 6\0  6\0 (\0! \" G\r\0 A×\rA¡AAé\r\0\0AêA¡AAÝ\0\0 \0AjA\0F \0(! \0(\"@@ (\0 (\f  (\b\0\0\"\r\0 \0B 7\0 (\f \0 (\b\0\0¾ \0(\fA \0(\0\0\" 6   6  6\f A  AM\"6\b B 7\0 \0(\f  lAj \0(\0\0\"@  (6\0  6 (\b\" (\flAj!\0 (\0!@  \0 k\"\0j\" 6\0 ! \0AG\r\0  6\0  \0(\f  \0(\b\0\0A\0Á'#\0Ak\"\n$\0@@@@@@@@@@ \0AôM@AÔ(\0\"A \0AjAøq \0AI\"Av\"\0v\"Aq@@ AsAq \0j\"At\"Aüj\"\0 (\"(\b\"F@AÔ A~ wq6\0\f   6\f \0 6\b A\bj!\0  Ar6  j\" (Ar6\f AÜ(\0\"\bM\r @@A \0t\"A\0 kr  \0tqh\"At\"Aüj\" (\"\0(\b\"F@AÔ A~ wq\"6\0\f  6\f  6\b \0 Ar6 \0 j\"  k\"Ar6 \0 j 6\0 \b@ \bAxqAüj!Aè(\0! A \bAvt\"qE@AÔ  r6\0 \f (\b!  6\b  6\f  6\f  6\b \0A\bj!\0Aè 6\0AÜ 6\0\fAØ(\0\"E\r hAt(\"(Axq k! !@@ (\"\0E@ (\"\0E\r \0(Axq k\"   I\"! \0  ! \0!\f (!\t  (\f\"\0G@ (\b\"  6\f \0 6\b\f\n (\" Aj (\"E\r Aj!@ ! \"\0Aj! \0(\"\r\0 \0Aj! \0(\"\r\0 A 6\0\f\tA! \0A¿K\r\0 \0Aj\"Axq!AØ(\0\"E\r\0A!\bA\0 k! \0AôÿÿM@ A& A\bvg\"\0kvAq \0AtkA>j!\b@@@ \bAt(\"E@A\0!\0\fA\0!\0 A \bAvkA\0 \bAGt!@@ (Axq k\" O\r\0 ! \"\r\0A\0! !\0\f \0 (\"   AvAqj(\"F \0 !\0 At! \r\0 \0 rE@A\0!A \bt\"\0A\0 \0kr q\"\0E\r \0hAt(!\0 \0E\r@ \0(Axq k\" I!   ! \0  ! \0(\"  \0(\"\0\r\0 E\r\0 AÜ(\0 kO\r\0 (!\b  (\f\"\0G@ (\b\"  6\f \0 6\b\f\b (\" Aj (\"E\r Aj!@ ! \"\0Aj! \0(\"\r\0 \0Aj! \0(\"\r\0 A 6\0\f AÜ(\0\"M@Aè(\0!\0@  k\"AO@ \0 j\" Ar6 \0 j 6\0 \0 Ar6\f \0 Ar6 \0 j\" (Ar6A\0!A\0!AÜ 6\0Aè 6\0 \0A\bj!\0\f\t Aà(\0\"I@Aà  k\"6\0AìAì(\0\"\0 j\"6\0  Ar6 \0 Ar6 \0A\bj!\0\f\tA\0!\0 A/j\"A¬(\0@A´(\0\fA¸B7\0A°B\xA07\0A¬ \nA\fjApqAØªÕªs6\0AÀA 6\0AA 6\0A \"j\"A\0 k\"q\" M\r\bA(\0\"@A(\0\"\b j\"\t \bM\r\t  \tI\r\t@A-\0\0AqE@@@@@Aì(\0\"@A!\0@ \0(\0\"\b M@  \b \0(jI\r \0(\b\"\0\r\0A\0\"AF\r !A°(\0\"\0Ak\" q@  k  jA\0 \0kqj!  M\rA(\0\"\0@A(\0\" j\" M\r \0 I\r \"\0 G\r\f  k q\"\" \0(\0 \0(jF\r !\0 \0AF\r A0j M@ \0!\fA´(\0\"  kjA\0 kq\"AF\r  j! \0!\f AG\rAA(\0Ar6\0 !A\0!\0 AF\r \0AF\r \0 M\r \0 k\" A(jM\rAA(\0 j\" 6\0A(\0 \0I@A  6\0@Aì(\0\"@A!\0@  \0(\0\" \0(\"jF\r \0(\b\"\0\r\0\fAä(\0\"\0A\0 \0 ME@Aä 6\0A\0!\0A 6\0A 6\0AôA6\0AøA¬( 6\0A\xA0A 6\0@ \0At\" Aüj\"6  6 \0Aj\"\0A G\r\0Aà A(k\"\0Ax kAq\"k\"6\0Aì  j\"6\0  Ar6 \0 jA(6AðA¼( 6\0\f  M\r  K\r \0(\fA\bq\r \0  j6Aì Ax kAq\"\0j\"6\0AàAà(\0 j\" \0k\" 6\0  \0Ar6  jA(6AðA¼( 6\0\fA\0!\0\fA\0!\0\fAä(\0 K@Aä 6\0  j!A!\0@@  \0(\0\"G@ \0(\b\"\0\r\f \0-\0\fA\bqE\rA!\0@@ \0(\0\" M@   \0(j\"I\r \0(\b!\0\fAà A(k\"\0Ax kAq\"k\"6\0Aì  j\"6\0  Ar6 \0 jA(6AðA¼( 6\0  A' kAqjA/k\"\0 \0 AjI\"A6 A) 7 A) 7\bA A\bj6\0A 6\0A 6\0A\xA0A 6\0 Aj!\0@ \0A6 \0A\bj \0Aj!\0 I\r\0  F\r\0  (A~q6   k\"Ar6  6\0 AÿM@ AøqAüj!\0AÔ(\0\"A Avt\"qE@AÔ  r6\0 \0\f \0(\b! \0 6\b  6\fA\f!A\b\fA!\0 AÿÿÿM@ A& A\bvg\"\0kvAq \0AtrA>s!\0   6 B 7 \0AtAj!@@AØ(\0\"A \0t\"qE@AØ  r6\0  6\0\f A \0AvkA\0 \0AGt!\0 (\0!@ \"(Axq F\r \0Av! \0At!\0  Aqj\"(\"\r\0  6  6A\b! \"!\0A\f\f (\b\"\0 6\f  6\b   6\bA\0!\0A!A\f j 6\0  j  6\0Aà(\0\"\0 M\r\0Aà \0 k\"6\0AìAì(\0\"\0 j\"6\0  Ar6 \0 Ar6 \0A\bj!\0\fAÐA06\0A\0!\0\f \0 6\0 \0 \0( j6 Ax kAqj\"\b Ar6 Ax kAqj\"  \bj\"k!@Aì(\0 F@Aì 6\0AàAà(\0 j\" 6\0  \0Ar6\fAè(\0 F@Aè 6\0AÜAÜ(\0 j\" 6\0  \0Ar6 \0 j  6\0\f (\"\0AqAF@ \0Axq!\t (\f!@ \0AÿM@ (\b\" F@AÔAÔ(\0A~ \0Avwq6\0\f  6\f  6\b\f (!@  G@ (\b\"\0 6\f   6\b\f@ (\"\0 Aj (\"\0E\r Aj!@ ! \0\"Aj! \0(\"\0\r\0 Aj! (\"\0\r\0 A 6\0\fA\0! E\r\0@ (\"\0At\"( F@ Aj 6\0 \rAØAØ(\0A~ \0wq6\0\f@  (F@  6\f  6 E\r  6 (\"\0@   6 \0 6 (\"\0E\r\0   6 \0 6  \tj!  \tj\"(!\0  \0A~q6  Ar6  j 6\0 AÿM@ AøqAüj!\0AÔ(\0\"A Avt\"qE@AÔ  r6\0 \0\f \0(\b! \0 6\b  6\f   6\f  6\b\fA! AÿÿÿM@ A& A\bvg\"\0kvAq \0AtrA>s!  6 B 7 AtAj!\0@@AØ(\0\"A t\"qE@AØ  r6\0 \0 6\0\f A AvkA\0 AGt! \0(\0!@ \"\0(Axq F\r Av! At! \0 Aqj\"(\"\r\0  6   6  6\f  6\b\f \0(\b\" 6\f \0 6\b A 6   6\f  6\b \bA\bj!\0\f@ \bE\r\0@ (\"At\"( F@ Aj  6\0 \0\rAØ A~ wq\"6\0\f@  \b(F@ \b  6\f \b  6 \0E\r \0 \b6 (\"@ \0 6   6 (\"E\r\0 \0 6   6@ AM@   j\"\0Ar6 \0 j\"\0 \0(Ar6\f  Ar6  j\" Ar6  j 6\0 AÿM@ AøqAüj!\0AÔ(\0\"A Avt\"qE@AÔ  r6\0 \0\f \0(\b! \0 6\b  6\f   6\f  6\b\fA!\0 AÿÿÿM@ A& A\bvg\"\0kvAq \0AtrA>s!\0   6 B 7 \0AtAj!@@ A \0t\"qE@AØ  r6\0  6\0  6\f A \0AvkA\0 \0AGt!\0 (\0!@ \"(Axq F\r \0Av! \0At!\0  Aqj\"(\"\r\0  6  6  6\f  6\b\f (\b\"\0 6\f  6\b A 6  6\f   6\b A\bj!\0\f@ \tE\r\0@ (\"At\"( F@ Aj  6\0 \0\rAØ A~ wq6\0\f@  \t(F@ \t  6\f \t  6 \0E\r \0 \t6 (\"@ \0 6   6 (\"E\r\0 \0 6   6@ AM@   j\"\0Ar6 \0 j\"\0 \0(Ar6\f  Ar6  j\" Ar6  j 6\0 \b@ \bAxqAüj!\0Aè(\0!A \bAvt\" qE@AÔ  r6\0 \0\f \0(\b! \0 6\b  6\f   6\f  6\bAè 6\0AÜ 6\0 A\bj!\0 \nAj$\0 \0å\t\t}#\0A k\"\t$\0 \0 6H (\b\"!@@@@@ (\"\r (\b\" G\r\0 \t (6 \tAj! \0(@\"!@ (\"(\0\"@ (\f   (\0E\r (\0\"((\b(\0\"E\r (\0! (\0\"((  (\nC\0\0\0\0[@ *\" (\0\"(\"*[@ * *[\r@@  (\"(\"*[@ * *[\r \0(\0 \rE\r (@ \0(\0 (\b\fE\r A 6 \0(\0 (\b \t\r\fAêA¡AA\r\0\0 \0 \f  (\"(\"*\" ((\"*\"\f]\r\0  \f[@  * *_\r !@ (\fE@ (E\r \0(\0!@  F@  (\b( (\f\"\r\f  (\b( (\b\"E\r (! (@ \0(\0 (\0\f@  6\0 A 6  6 \0 \f\f \0(L\"E\r  6\0  \0(@ ( \"6 E\r B 7 A 6  6 \0(<!  (\0( ((\0(\bj\"6\b @@@@@@ \0 A\0G\f A\0J\f Av\f AkA}I\fAéA¡AðAö\r\0\0 Aq6\f \0 \f \0  (\b\"\0 \0A\0A\f \0 \"E\r ((\b(\0\"(\0\" \0 A\0\"(\b\"F@ (\0\"(( ((\b(\0\"(\0\"((G@ \0 $A!\n@ \0(H\"*\" (\"\b*\\\r\0 \b* *\\\r\0 \0(\0 ((\f \tE\r \0 \"E\r ((\b(\0\"(\0! \0   \0(H\"*!A\0!\n@@@  (\"\b*\"\f\\\r\0 \b* *\\\r\0 \0(\0  ((\f\tE\r \0 A\0!\f \n\r \0  (\b  A\f@ \f (\"*\"]E@  \f\\\r \b* *_E\r ((\f! \0(\0 (\b( \"E\r \0   (\b\" A\0 ((A6 \0 #\f \0    A \tA j$\0AêA¡AA\r\0\0 \0AjA\0°\n} \0(\" \0(\0\" Atj(\0\"\tAtj! \0(\f!\n \0(\b!\b@@@ At\"\0 \bN\r\0   \0Ar\"Atj(\0Atj(\0\"*\"\f   \0Atj(\0Atj(\0\"*\"\r]E@ \f \r\\\r * *_E\r !\0 \0 \nL@ \0 \bJ\r (\0\"*\"\f   \0Atj(\0\"Atj\"(\0\"*\"\r]\r \f \r[@ * *_\r  Atj 6\0  6 \0!\fA\bAAA¶\0\0  Atj \t6\0  6ú \0(! \0(! \0(!@@@ E\r\0 E\r\0 \r @  \0(\"( 6\0  6\0 @  \0(\"( 6\0  6\0 E\r  \0(\"\0( 6\0 \0 6\0A\0 \0(\"E@A\0  \0(H\" \0AÄ\0j\"  I\"(\"(\0\"6  ( 6\0  6\0  A j\"6\0 B 7  6\f  6 B 7 B 70  6( B 78  6\b  6,  6$  \0(\"6  6\0  6\b !@  6 (\b\" G\r\0  6  6\0   6\0 \0 6  6\b !@  6 (\b\" G\r\0  \0(0\"6  6\0  \0A,j6\0 \0 60 A\0:\0 A 6\f  6\b  \0-\0A:\0 !@  6 (\f\" G\r\0 ß\b@ \0E\r\0 \0A\bk\" \0Ak(\0\"Axq\"\0j!@ Aq\r\0 AqE\r  (\0\"k\"Aä(\0I\r \0 j!\0@@@Aè(\0 G@ (\f! AÿM@  (\b\"G\rAÔAÔ(\0A~ Avwq6\0\f (!  G@ (\b\" 6\f  6\b\f (\" Aj (\"E\r Aj!@ ! \"Aj! (\"\r\0 Aj! (\"\r\0 A 6\0\f (\"AqAG\rAÜ  6\0  A~q6  \0Ar6   6\0  6\f  6\b\fA\0! E\r\0@ (\"At\"( F@ Aj 6\0 \rAØAØ(\0A~ wq6\0\f@  (F@  6\f  6 E\r  6 (\"@  6  6 (\"E\r\0  6  6  O\r\0 (\"AqE\r\0@@@@ AqE@Aì(\0 F@Aì 6\0AàAà(\0 \0j\" 6\0  \0Ar6 Aè(\0G\rAÜA 6\0AèA 6\0Aè(\0\" F@Aè 6\0AÜAÜ(\0 \0j\" 6\0  \0Ar6 \0 j  6\0 Axq \0j!\0 (\f! AÿM@ (\b\" F@AÔAÔ(\0A~ Avwq6\0\f  6\f  6\b\f (!\b  G@ (\b\" 6\f  6\b\f (\" Aj (\"E\r Aj!@ ! \"Aj! (\"\r\0 Aj! (\"\r\0 A 6\0\f  A~q6  \0Ar6 \0 j  6\0\fA\0! \bE\r\0@ (\"At\"( F@ Aj 6\0 \rAØAØ(\0A~ wq6\0\f@  \b(F@ \b 6\f \b 6 E\r  \b6 (\"@  6  6 (\"E\r\0  6  6  \0Ar6 \0 j  6\0  G\r\0AÜ  6\0 \0AÿM@ \0AøqAüj!AÔ(\0\"A \0Avt\"\0qE@AÔ \0 r6\0 \f (\b!\0  6\b \0 6\f  6\f   6\bA! \0AÿÿÿM@ \0A& \0A\bvg\"kvAq AtrA>s!  6 B 7 AtAj!@AØ(\0\"A t\"qE@AØ  r6\0  6\0A!A\b\f \0A AvkA\0 AGt! (\0!@ \"(Axq \0F\r Av! At!  Aqj\"(\"\r\0  6A! !A\b!\0 \"\f (\b\" 6\f  6\bA!\0A\b!A\0!  j 6\0  6\f \0 j 6\0AôAô(\0Ak\"\0A \06\0`@ (\b\"(\0\"@ \0(\f   \0(\0E\r \0(\"\0@ \0 6\0 \0 (\"6   6\b \0 6\b   6 \0è}@@@ (\0\"(\"*\" ((\b(\0\"(\0\"(\"*\"]E@  \\\r * *_E\r ((  \nC\0\0\0\0^@A\0@ (\"* (\"*[@ * *[\r \0(\0 (\rE\r \0(\0  ((\f\tE\r A6 A6A  F\r \0(D!@ ( \"A\0N@ (\0!@@ \"A\0L\r\0  (\fJ\r\0 (\"\t Atj\"\n(\0E\r\0 (\0\"\b \n(\"Atj \b (\b\"Atj(\0\"6\0 \t Atj\"\f 6  Ak6\b@  N\r\0@@ AH\r\0 \t \b Av\"Atj(\0Atj(\0\"*\" \f(\0\"\r*\"]\r\0  \\\r * \r*_E\r  \f@@  \t \b \"Atj(\0\"Atj\"(\0\"*\"^@ !\f@  \\\r\0 * \r*_E\r\0 !\f \b Atj 6\0  6 \"Av\"\r \b Atj 6\0 \f 6 \nA 6\0 \n (6  6\fAàAAA\r\0\0\f@ As\" (N\r\0 ( Atj\"(\0E\r\0 A 6\0@ (\f\"A\0L\r\0 (\b!@  AtjAk(\0(\0\r  Ak\"6\f AJ !\r\0\fAÀAAüAü\f\0\0 \0(\0 ((\f \t\r\f ((  \nC\0\0\0\0]@A\0 A6 (((\0A6 \0(\0 (\rE\r \0(\0 ((\f \tE\rA \0AjA\0® (\0(!@ (((\0\"(\0\"( F\r\0 (E@ A\0!@@ \0(\0 ((\b(\0(\0( (\f\"E\r\0 (E\r \0(\0 (\0\fE\r\0  6\0 A 6  6 (((\0! A×\rA¡AAé\r\0\0¶\n}@ \0(\f\"E@ \0(\0\"\0(\" \0(\0\"(\"Atj\"(\0! \0(\b\"A\0L\r   Atj(\0\"6  AtjA6 A 6\0  \0(6 \0 Ak6\b \0 6 AF\r \0A  \0(\b\"\b AtjAk(\0(\0!@ \0(\0\"(\b\"E\r\0 (\"\t (\0\"(\"\nAtj\"(\0\"*\" *\"\f]E@  \f\\\r * *_E\r A\0L@    Atj(\0\" 6 \t \0AtjA6 A 6\0  (6  Ak6\b  \n6 AF@  A A  A\0JAk!@ AL\r\0@@ Ak! \b AtjA\bk(\0(\0\r\0 AH !E\r\f ! \0 6\f  @ (\0\"@ \0(\f ( \0(\b\0\0 \0(\f (\0 \0(\b\0\0 \0(\f  \0(\b\0\0 (\b\"@ \0(\f  \0(\b\0\0 (\"@ \0(\f  \0(\b\0\0 \0(\f  \0(\b\0\0A¦AAÇAØ\0\0<} * \0*\" *\" \0*  *\" *  C\0\0\0\0`³}@ \0*\" *\"]E@  \\\r \0* *_E\r  *\"]E@  \\\r * *_E\r  \"  \"\"C\0\0\0\0^} \0   ^\"*\"  \0 *     * C\0\0\0\0A¬A´A:A«\f\0\0 \0 j!@@ \0(\"Aq\r\0 AqE\r \0(\0\" j!@@@ \0 k\"\0Aè(\0G@ \0(\f! AÿM@  \0(\b\"G\rAÔAÔ(\0A~ Avwq6\0\f \0(! \0 G@ \0(\b\" 6\f  6\b\f \0(\" \0Aj \0(\"E\r \0Aj!@ ! \"Aj! (\"\r\0 Aj! (\"\r\0 A 6\0\f (\"AqAG\rAÜ 6\0  A~q6 \0 Ar6  6\0  6\f  6\b\fA\0! E\r\0@ \0(\"At\"( \0F@ Aj 6\0 \rAØAØ(\0A~ wq6\0\f@ \0 (F@  6\f  6 E\r  6 \0(\"@  6  6 \0(\"E\r\0  6  6@@@@ (\"AqE@Aì(\0 F@Aì  6\0AàAà(\0 j\"6\0 \0 Ar6 \0Aè(\0G\rAÜA 6\0AèA 6\0Aè(\0\"\b F@Aè  6\0AÜAÜ(\0 j\"6\0 \0 Ar6 \0 j 6\0 Axq j! (\f! AÿM@ (\b\" F@AÔAÔ(\0A~ Avwq6\0\f  6\f  6\b\f (!  G@ (\b\" 6\f  6\b\f (\" Aj (\"E\r Aj!@ ! \"Aj! (\"\r\0 Aj! (\"\r\0 A 6\0\f  A~q6 \0 Ar6 \0 j 6\0\fA\0! E\r\0@ (\"At\"( F@ Aj 6\0 \rAØAØ(\0A~ wq6\0\f@  (F@  6\f  6 E\r  6 (\"@  6  6 (\"E\r\0  6  6 \0 Ar6 \0 j 6\0 \0 \bG\r\0AÜ 6\0 AÿM@ AøqAüj!AÔ(\0\"A Avt\"qE@AÔ  r6\0 \f (\b!   6\b   6\f \0 6\f \0 6\bA! AÿÿÿM@ A& A\bvg\"kvAq AtrA>s! \0 6 \0B 7 AtAj!@@AØ(\0\"A t\"qE@AØ  r6\0   6\0 \0 6\f A AvkA\0 AGt! (\0!@ \"(Axq F\r Av! At!  Aqj\"(\"\r\0   6 \0 6 \0  6\f \0  6\b (\b\"  6\f   6\b \0A 6 \0 6\f \0 6\bè\f\f} \0(\0!#\0AÐ\0k\" \0*\b\"8\f  \0*\f\"8  \0*\"8 (\0!@ C\0\0\0\0\\ C\0\0\0\0\\r C\0\0\0\0\\r\"\f\r\0  )\f70  (68  )\f7@  (6H  6  6$  6  6(  6   6,@  F@ *8! *H! *0! *@! *4! *D!\f *H! *8! *D! *4! *@! *0\"! \"\n\"\"\t\"\b\"\"!@ *\"\r  \r ^\"!  \n !\n \r  \r ]\"!   ! *\"\r  \r ^\"!  \t !\t \r  \r ]\"!  \b !\b *\f\"\r  \r ^\"!   ! \r  \r ]\"! \r  !   ! (\0\" G\r\0  6  80  8@  6$  84  \b6  8D  \t6(  88  6   8H  \n6,A    ^\"        ^At\" A0jj*\0 A@k j*\0`@ Aü6 B 7\fC\0\0\0\0!C\0\0?!C\0\0\0\0!\f Aj j(\0\"* A$j j(\0\"*\"! * *\"! *\f *\f\"!  G@C\0\0\0\0! !@   * \"  *\f \"\"   * \"\r  \"     \r\" \"\r]@ ! ! \r! ! (\0\" G\r\0  8  8  8\f C\0\0\0\0_E\r A 6 B 7\f A\fjA  ^\"    ^AtjAü6\0 *! *\f! *! \0Aj\"A  ^\"    ^\"At\"\bjA 6\0  Aj\"A\0 AGAt\"jAü6\0  AjApAt\"jA 6\0 \0A j\" \bjA 6\0  jC\0\0\0C\0\0\0\0 A\fj \bj*\0C\0\0\0\0^\"8\0  jC\0\0?C\0\0¿ 8\0  F\"\nE@ !@  *\" \0* *\f\" \0* *\"\r \0*8   \0*(  \0*  \r \0*$8 (\0\" G\r\0@ \f\r\0 (,\"\t A,j\"\bF\r\0C\0\0\0\0!\r@ \t(\b\"! (A\0J@@ (\"* ((\"* * * \r!\r (\f\" G\r\0 \t(\0\"\t \bG\r\0 \rC\0\0\0\0]E\r\0 \nE@ !@  *8 (\0\" G\r\0 \0 \0* 8  \0 \0*$8$ \0 \0*(8(@ \n\r\0 \0 *\"8, \0 84 \0 *\"80 \0 88 (\0\" F\r\0 ! !@} *\" ]E@ \f \0 8, ! *\"\r ^@ \0 \r84 \r!} *\" ]E@ \f \0 80 ! *\"\r ^@ \0 \r88 \r! (\0\" G\r\0\b} ((\b(\0!@@@ (@@ \"((\b(\0\"(\r\0@@@@@ (@ !\f (((\0\"E\r ! (E\r A 6@ (\0\"((\" (\0\"((F@ !\f@@@@ *\"\t ((\b(\0\"\b(\0\"((\"*\"\n[@ *\"\t *\"\n[\r \t \n_E\r\f \t \n]\r   (\nC\0\0\0\0^@ !\f \bA6 A6@ \0(\0 \r\"@ \0(\0 (\f (\tE\r (!\f\f\t\f\bAôA¡AA\0\0   (\nC\0\0\0\0]@ !\f A6 (((\0A6 \0(\0 \r\"E\r \0(\0 ( \t\r\0\f ( (\f:\0 (@ (\0\"(\r\b A 6 \0(@! (\"(\" (\b\"\b6\b \b 6  (\"( 6\0  6\0  \0(L\"( 6\0  6\0 \0(\0 \fE\r ((\b(\0\"(\0! !\f (E@ !\f (\0\"(\r A 6 \0(@! (\"(\" (\b\"\b6\b \b 6  (\"( 6\0  6\0  \0(L\"( 6\0  6\0 \0(\0 \fE\r (((\0\"(\0! ( (F\r ((\" ((\"F\r (\r (\r  \0(H\"G  Gq\r \0 $E\r \0  ( (G\r (\"( (\"(G\r  ( (j6  ( (j6 (\0! (@ (\r A 6 \0(@! (\"(\" (\b\"6\b  6  (\"( 6\0  6\0  \0(L\"( 6\0  6\0 \0(\0 \fE\r (((\0!\f \0AjA\0AêA¡AAÝ\0\0Ö }#\0A0k\"$\0 (\0\"(! ((\b(\0\"(\0\"(!@@@@@@@@@@@ ((\"* ((\"*[@ * *[\r  \0(H \nC\0\0\0\0_E\r  \0(H \nC\0\0\0\0`E\r  \0(H\"\rF\r \r F\r (\r (\r@  F\r\0 *\" *\"  ` *\" *\"  _^\r\0@@ *\" *\"]E@  `E\r  \\\r   \nC\0\0\0\0^E\r\f   \nC\0\0\0\0]\r ! !\r@@ \"*\" \"*\"]\r\0  [@ * *_\r !\f ! !@@ *\" \r*\"]\r\0  [@ * \r*_\r !\f ! \r! !\r@@ *\" ]\r\0  [@ * \r*_\r ! !\f ! ! \r! ! !\r@@@@@@ }@  *\"]\"\r\0  [@ * *_\r  C\0\0\0?\f@  *\"]\"E@  \\\"\r * *_E\r \r*\" ]E@  \\\r \r* *_E\r E@  \\\r * *_E\r  \"\b  \"\"C\0\0\0\0^@ \r   \b]\"*\"  \r *  \b   * !\t E@  \\\r * *_E\r E@  \\\r * *_E\rC\0\0\0\0! \b  \"\"C\0\0\0\0^@    \b^\"*\"   * \b    * !C\0\0\0\0 \t \t \t C\0\0\0\0]\"\" C\0\0\0\0]\"C\0\0\0\0   \" C\0\0\0\0]\"_@  C\0\0\0? C\0\0\0\0[\r \b    \f      \f \r*\"\n ]E@  \n\\\r \r* *_E\r E@  \\\r * *_E\rC\0\0\0\0!  \"  \n\"C\0\0\0\0^@ *\" *    \r*!  \n^E@  \n\\\r \r* *_E\r  ^E@ \r * *_E\r  \"\b  \n\"C\0\0\0\0^@ *\" *  \b  \r*!\tC\0\0\0\0    \t]\"\" C\0\0\0\0]\"C\0\0\0\0 \t \t \" C\0\0\0\0]\"_@  C\0\0\0? C\0\0\0\0[\r      \f      8@@ \r*\" *\"]\r\0  [@ \r* *_\r \r!\f ! \r!@@ *\" *\"]\r\0  [@ * *_\r !\r\f ! !\r !@@ *\" ]\r\0  [@ * *_\r ! !\f ! \r! ! !\r !@  \r*\"]\"\r\0  [@ * \r*_\r\f@  *\"]\"E@  \\\"\r \r* *_E\r *\" ]E@  \\\r * *_E\r E@  \\\r * \r*_E\rC\0\0\0\0!\t  \"\b  \"\"C\0\0\0\0^@  \r  \b]\"*\" \r  *  \b   * !\t E@  \\\r * \r*_E\r E@  \\\r \r* *_E\rC\0\0\0\0! \b  \"\"C\0\0\0\0^@    \b^\"*\"   * \b    \r* !C\0\0\0\0 \t \t \t C\0\0\0\0]\"\r\" C\0\0\0\0]\"C\0\0\0\0   \r\" C\0\0\0\0]\"_@ C\0\0\0\0[\r  \b    8 \f       8 \f *\"\n ]E@  \n\\\r * *_E\r E@  \\\r * \r*_E\rC\0\0\0\0!  \"  \n\"C\0\0\0\0^@ *\" \r*    *!@  \n^E@  \n\\\r * *_E\r  ^E@ \r * \r*_E\rC\0\0\0\0!\t  \"\b  \n\"C\0\0\0\0^@ *\" \r*  \b  *!\tC\0\0\0\0    \t]\"\r\" C\0\0\0\0]\"C\0\0\0\0 \t \t \r\" C\0\0\0\0]\"_@ C\0\0\0\0[@   C\0\0\0?8 \f\b       8 \f       8 \f\fA¬A´A:A«\f\0\0   C\0\0\0?8 \fA¬A´AÒ\0A÷\0\0AÏA´Añ\0A\f\0\0AÏA´AAê\0\0 * \" *\"\f *\"  \f``E\r  *\" *\"  __E\r *\" *\"\t *\"\n \t \n_`E\r\b  *\" *\"\b \b __E\r\t@@ \0(H\"*\" ^@ *!\f  \\\r  *\"_E\r  8   8 ! ! !\r \b\" ]E@  \r  \f`E  \\r\"!\r   !@@  ]@ \r*!\f  \\\r \r*\" _E\r  8   8 ! !@  \b[  \f[qE@  \\\r  *\\\r \0 \f@@@ *\" \n[@  *[\r   Aj\nC\0\0\0\0`\r *!\t \0(H\"*!  \t[@ * *[\r   Aj\nC\0\0\0\0_E\r \0(H\"\r F@ \0(\0 (\rE\r\r \0(\0 ( \tE\r\r \0 \"\rE\r\r \r((\b(\0\"(\0! \0  A! \0 \r ((\f  A\f \r F@ \0(\0 (\rE\r\r \0(\0 (\f ((\f\tE\r\r (\0((! !\r@ \r(((\0\"\r(\0(( F\r\0 \r((\b(\0(\0((\b!  ((\f6\0A! \0 \r \0 A\0(\b ((\b A\f@  \r Aj\nC\0\0\0\0`E@ \0(H!\r\f A6 (((\0A6 \0(\0 (\rE\r\r (\" \0(H\"\r*8  \r*8  \r Aj\nC\0\0\0\0_E\r A6 A6 \0(\0 (\rE\r\f (\" \0(H\"\0*8  \0*8\f \0(\0 (\rE\r \0(\0 (\rE\r \0(\0 ((\f \tE\r (\" *8  * 8 \0Aè\0j\"\r \0(D &! (\" 6  Aÿÿÿÿ\0F\r\n A 6 A6( B 7\f  * *\"\n\"  C\0\0\0\0] * *\"\b\"  C\0\0\0\0]\"C\0\0\0? * \n\"  C\0\0\0\0] * \b\"  C\0\0\0\0]\" \"\" *\f *\f C\0\0\0? \"C\0\0\0\0\"8\f   * * C\0\0\0\0\"8   *  *C\0\0\0\0\"8   * \n\"  C\0\0\0\0] * \b\"  C\0\0\0\0]\"C\0\0\0? * \n\"  C\0\0\0\0] * \b\"  C\0\0\0\0]\" \"\"\b *\f *\f C\0\0\0? \"8\f   \b * * 8   \b *  *8 A6 A6 (((\0A6 A0j$\0 A÷A¡AÁA\t\0\0AA¡AÂA\t\0\0A§A¡AÃA\t\0\0AÕ\bA¡AÄA\t\0\0A¨\rA¡AÅA\t\0\0A¨\tA¡AØA\t\0\0A­A¡AÙA\t\0\0A\nA¡AÚA\t\0\0AÒA¡AÛA\t\0\0 \r \0(D \0A 6D \0AjA\0 \0(L\"@@ \0(\0\"E\r\0 (\" 8  8 ((\" 8  8 \0 6H A 6 B 7\b  6\0 B7  \0(@\"  \"6 E\r\0 \0AjA\0ù\b} (@ ! (\0\" (\bAj\"6\b@@ (\f\"\b AtN\r\0Aÿÿÿÿ\0! \0(\"E\r  \bAt6\f (!  \0(\f (\0\" \bAtAr \0\"6\0 E@  6\0Aÿÿÿÿ\0\f  \0(\f ( (\fAtA\bj \0(\0\" 6 \0\r\0  6\f (!\t ! (\"\0@  \t \0Atj(6 \0! (\0\"\n Atj 6\0 \t Atj\"\b 6\0 \b 6 (@@ Au\"E@ !\0\f *!@  \t \n \"\0Atj(\0\"Atj\"(\0\"*\"\f^@ !\0\f@  \f\\\r\0 * *_E\r\0 !\0\f \n Atj 6\0  6 \0\"Au\"\r\0 \n \0Atj 6\0 \b  6 Aÿÿÿÿ\0G\r\0AAAðAÈ\b\0\0   (\f\"Aj\"6\f@@  (\"H\r\0Aÿÿÿÿ\0 \0(\"E\r  At6  \0(\f (\" At \0\" 6 \0\r\0  6Aÿÿÿÿ\0 Aÿÿÿÿ\0F\r ( Atj 6\0 AsAïAAÀA¿\b\0\0@@@@@@@@@@@@@@@@@@@@@ \0(,\" \0A,j\"F@ !\f !@  \"(G\r (\b\"!@ (\" F\r ( G\r (\f\"(\b( G\r (\b((\f G\r ( G\r\b \" G\r\0 (\0\" G\r\0@@@ ( G\r\0 (\b\r\0 \0(\0\" \0G\r \0!\fA¢AÆA©AÆ\f\0\0 \0!@ \"( G\r\b (\b\"(! !@  F\r\n ( G\r (\f(\b( G\r\f (\b\"(\"(\f G\r\r ( G\r \" G\r\0 \"(\0\" \0G\r\0 ( G\r\f (\b\r\f \0AÄ\0j\"!@@ (! (\0\"(\"(\0!  F\r  G\r  F\r ( G\r (E\r (E\r (\f(\b( G\r (\b((\f F\r\0AAÆAÂAÆ\f\0\0  G\r  \0Aä\0jG\r ( G\r (\r (\r (\r (\rA¢\bAÆAAÆ\f\0\0AìAÆA¡AÆ\f\0\0AÍAÆA¢AÆ\f\0\0A³AÆA£AÆ\f\0\0AAÆA¤AÆ\f\0\0AØ\fAÆA¥AÆ\f\0\0A\bAÆA­AÆ\f\0\0AìAÆA°AÆ\f\0\0AÍAÆA±AÆ\f\0\0A³AÆA²AÆ\f\0\0AAÆA³AÆ\f\0\0A³\bAÆA´AÆ\f\0\0AüAÆA¸AÆ\f\0\0A\fAÆA¼AÆ\f\0\0AìAÆA½AÆ\f\0\0AÍAÆA¾AÆ\f\0\0A±AÆA¿AÆ\f\0\0AAÆAÀAÆ\f\0\0A³AÆAÁAÆ\f\0\0AÈAÆAÈAÆ\f\0\0)\0 ( ( ( \0(\f  \0(\b\0\0\0#\0\0#\0 \0kApq\"\0$\0 \0\0 \0$\0\0AÄ(\0E@AÈ 6\0AÄ  6\0\0 \0(`\0 \0(d\0 \0(X\0 \0(T\0 \0(\\/} \0*\" *\"]@A  \\@A\0 \0* *_ò\r#\0Ak\"\t$\0@@ \0(T\"@ \0(t! \0(pAÄA 6\0  AÄ(\0!AÄA 6\0A!\b@ E\r\0AÈ(\0\"E\r\0 (\0 \tA\fjF (A\0\"\bE\r $#! \bAF\r \0A 6T \0(`\"@ \0(t! \0(pAÄA 6\0  AÄ(\0!AÄA 6\0A!\b@ E\r\0AÈ(\0\"E\r\0 (\0 \tA\fjF (A\0\"\bE\r $#! \bAF\r \0A 6` \0(X\"@ \0(t! \0(pAÄA 6\0  AÄ(\0!AÄA 6\0A!\b@ E\r\0AÈ(\0\"E\r\0 (\0 \tA\fjF (A\0\"\bE\r $#! \bAF\r \0A 6XA\0! \0A 6P @ \0 * 8\b \0 *8\f \0 *\b8 \0 6< \0Aj\"\"A6  \tA\fj6\0AA  AL\" AN!\f@@A\0! \r \0(\0E\rAÄA 6\0 \0\"AÄ(\0!AÄA 6\0A!@ E\r\0AÈ(\0\"E\r\0 (\0 \tA\fjF (A\0\"E\r $#! AF\r\0AÄA 6\0A \0\bAÄ(\0!AÄA 6\0A!@ E\r\0AÈ(\0\"E\r\0 (\0 \tA\fjF (A\0\"E\r $#! AF\r\0E@AÄA 6\0A AAÄ(\0!AÄA 6\0@ E\r\0AÈ(\0\"E\r\0 (\0 \tA\fjF (A\0E\r $#!\f \0(\0!@@@@@ AF@ (D\" AÄ\0j\"F@AÄA 6\0A AÄ(\0!AÄA 6\0A!@ E\r\0AÈ(\0\"E\r\0 (\0 \tA\fjF (A\0\"E\r\n $#! AF\r\f@ (\0@ (-\0\" ((-\0G@ AA 6\fAÄA 6\0A  AÄ(\0!AÄA 6\0A!\b@ E\r\0AÈ(\0\"E\r\0 (\0 \tA\fjF (A\0\"\bE\r $#! \bAF\r\bE\r\" G\r\0\f (,\" A,j\"F@AÄA 6\0A AÄ(\0!AÄA 6\0A!@ E\r\0AÈ(\0\"E\r\0 (\0 \tA\fjF (A\0\"E\r\t $#! AF\r\f@ (\0 -\0@AÄA 6\0A\b  AÄ(\0!AÄA 6\0A!\b@ E\r\0AÈ(\0\"E\r\0 (\0 \tA\fjF (A\0\"\bE\r\n $#! \bAF\rE\r\" G\r\0AÄA 6\0A AÄ(\0!AÄA 6\0A!@ E\r\0AÈ(\0\"E\r\0 (\0 \tA\fjF (A\0\"E\r $#! AF\r AG\rAÄA 6\0A\t \0  \f\fAÄA 6\0A AAÄ(\0!AÄA 6\0@ E\r\0AÈ(\0\"E\r\0 (\0 \tA\fjF (A\0E\r $#!\fAÄA 6\0A\n \0    \fAÄ(\0!AÄA 6\0A!@ E\r\0AÈ(\0\"E\r\0 (\0 \tA\fjF (A\0\"E\r $#! AF\r\0AÄA 6\0A \0Aè\0j AÄ(\0!AÄA 6\0A!@ E\r\0AÈ(\0\"E\r\0 (\0 \tA\fjF (A\0\"E\r $#! AF\r\0 \0A 6\0 \0(E! \tAj$\0   \0×}@@ \0(\0E@ \0Aè\0j\"\b(\fA \b(\0\0\"@A!@ \b(\"AN@A ! A I\r \b 6 !A!@ \b(\"\tAN@A ! \tA I\r \b 6A!@ \b(\"\tAN@A ! \tA I\r \b 6  \bAã\tAÀ\0 6  \bAî\tA, \b(6  \bA\nA \b(6  A,j\"60 A 6\b B 7L  Aä\0j\"6H  AÄ\0j\"\b6D A\0;@ B 74  6, B 7T B 7\\ B 7l  \b6h  6d B 7t B 7|  6  6\0 \0 6\0 E\r A\0L\rA\0! AN@A\0!@ \0(\0!@ @  \rE\r (\f!\f \"E\r \0(\0  (\tE\r (\" * 8\f  *8  *\b8 \0 \0(P\"Aj6P  6( A6 (A6  j! Aj\" G\r\0\fA\0!@ \0(\0!@ E@ \"E\r \0(\0  (\t\r\f  \rE\r (\f! (\" * 8\f *!\n A 6  \n8 \0 \0(P\"Aj6P  6( A6 (A6  j! Aj\" G\r\0\f \0A6£ \0A 6d \0A 6\\ (,\" A,j\"\bG@A\0!@ -\0@ (\b\"!@ Aj! (\f\" G\r\0 \0 6\\ \0 Aj\"6d (\0\" \bG\r\0 At! \0 \0(t  \0(h\0\"6`@@ E\r\0 \0 \0(t  \0(\\lAt \0(h\0\"6T E\r\0 \0 \0(t \0(\\At \0(h\0\"6X E\r\0 \b(\0\" \bF\r \0(T! \0(`! AN@@ -\0@A\0!\0 (\b\"\t!@  (\"*\f8\0  *8  *8\b  ((6\0 \0Aj!\0 Aj! A\fj! (\f\" \tG\r\0   6  6\0 \0 j! A\bj! (\0\" \bG\r\0\f@ -\0@A\0!\0 (\b\"\t!@  (\"*\f8\0  *8  ((6\0 \0Aj!\0 Aj! A\bj! (\f\" \tG\r\0   6  6\0 \0 j! A\bj! (\0\" \bG\r\0\f \0A6ñ\t\r@@@ AN@ (,\" A,j\"G@@@ -\0E\r\0 (\b\"(!@ \"(\f\"!@@ (\"\tE\r\0 \t(\"\fE\r\0 \f-\0E\r\0A\0! (\b\"!\r@ \"\nAj! \r(\f\"\r G\r\0A\0! \f(\b\"!\r@ \"\fAj! \r(\f\"\r G\r\0 ! \n \fj J\r\0 (\b(( ( \t(\f(\f( (\f!E\r\0 \t(\b(( \t( (\f(\r (\f! ( G\r\f \t(\f!  \t\f\r\0A\0\f (\0\" G\r\0AE\r  (\0\"G@@ A6$ (\0\" G\r\0@ (,\" A,j\"\tG@@ A6 -\0@A\0! (\b\"\f!@ !\n (\"($AF@  \b6$ \bAj!\b \nAj! (\f\" \fG\r\0  \nL\r  6 Aj! (\0\" \tG\r\0 \0 6d \0 \0(t At\"\n  AFtl \0(h\0\"6` E\r \0 \b6\\ \0 \0(t  \blAt \0(h\0\"\b6T \bE\r \0 \0(t \0(\\At \0(h\0\"\b6X \bE\r@ (\0\" F\r\0 AN@@ ($\"AG@ \0(T  lAtj\" *\f8\0  *8  *8\b \b Atj ((6\0 (\0\" G\r\0\f@ ($\"AG@ \0(T  lAtj\" *\f8\0  *8 \b Atj ((6\0 (\0\" G\r\0 \t(\0\" \tF\r \nAk! \0(`!\b AG\r@@ -\0E\r\0A\0!\0 \n! (\b\"! \b!@  (($6\0 \"\fAk! \0\"Aj!\0 Aj! (\f\" G\r\0 \0 N\"\rE@  Atk\"\0@ Aÿ \0ü\0 \b \nj!  \fj!\0 !@ \0!\bA!\0@ ((\"E\r\0 -\0E\r\0 (!\0   6\0 \bAj!\0 Aj! (\f\" G\r\0 \r@ !\b\f  Atk\"\0E\r\0 Aÿ \0ü\0 (\0\" \tG\r\0\fAæ\fAøAòA·\f\0\0 \0A6\f@@ -\0E\r\0A\0!\0 (\b\"! \b!@  (($6\0 \0\"Aj!\0 Aj! (\f\" G\r\0 \0 N@ !\b\f  Atk\"\0@ Aÿ \0ü\0 \b \nj!\b (\0\" \tG\r\0Ø#\0A0k\"$\0  \0)7(  \0)7   \0)x7  \0)p7  \0)h7\b \0(L \0(\0\"@ A\bj ( \0A 6\0 \0(T\"@ (  (\0\0 \0A 6T \0(X\"@ (  (\0\0 \0A 6X \0(`\"@ (  (\0\0 \0A 6` ( \0 (\0\0 A0j$\0÷~ \0A¤ \0\"(\0\"\0E@ A¤(\0\" 6\0 (E@ A¨( 6 (\bE@ A¬( 6\b (\fA¬ \0\0\"@  ) 7  )7  )\"7x  )\b7p  ) 7h §E@ A6x (|E@ A6| (E@ A6 (E@ A6 (\"\0E@ A6A!\0 Aè\0j B 7, A 6 B 7\b B 74 A 6<A!@ \0AN@A ! \0A I\r  6 !\0AÍ\tA \0!\0 B 7P B 7\0   6L B 7X B 7` \0 â\n E@ \f A@O@AÐA06\0A\0\fA AjAxq AI!A\0!\0 A\bk\"(\"\bAxq!@ \bAqE@ AI\r Aj M@ !\0  kA´(\0AtM\rA\0\f  j!@  O@  k\"\0AI\r   \bAqrAr6  j\" \0Ar6  (Ar6  \0!\fAì(\0 F@Aà(\0 j\" M\r   \bAqrAr6  j\"\0  k\"Ar6Aà 6\0Aì  6\0\fAè(\0 F@AÜ(\0 j\" I\r@  k\"\0AO@   \bAqrAr6  j\" \0Ar6  j\"  6\0  (A~q6\f  \bAq rAr6  j\"\0 \0(Ar6A\0!\0Aè 6\0AÜ  6\0\f (\"Aq\r Axq j\"\n I\r \n k! (\f!@ AÿM@ (\b\"\0 F@AÔAÔ(\0A~ Avwq6\0\f \0 6\f   6\b\f (!\t@  G@ (\b\"\0 6\f   6\b\f@ (\"\0 Aj (\"\0E\r Aj!@ !\f \0\"Aj! \0(\"\0\r\0 Aj! (\"\0\r\0 \fA 6\0\fA\0! \tE\r\0@ (\"\0At\"( F@ Aj 6\0 \rAØAØ(\0A~ \0wq6\0\f@  \t(F@ \t 6\f \t 6 E\r  \t6 (\"\0@   6 \0 6 (\"\0E\r\0   6 \0 6 AM@  \bAq \nrAr6  \nj\"\0 \0(Ar6\f   \bAqrAr6  j\"\0 Ar6  \nj\" (Ar6 \0 ! !\0 \0\"\0@ \0A\bj\fA\0 \"E\r\0 !\0@A|Ax \"Ak(\0\"Aq Axqj\"   K\"AO@ @ \0  ü\n\0\0\f \0 j!@ \0 sAqE@@ \0AqE\r\0 E\r\0@ \0 -\0\0:\0\0 Aj! \0Aj\"\0AqE\r \0 I\r\0 A|q!@ AÀ\0I\r\0 \0 A@j\"\fK\r\0@ \0 ( 6\0 \0 (6 \0 (\b6\b \0 (\f6\f \0 (6 \0 (6 \0 (6 \0 (6 \0 ( 6  \0 ($6$ \0 ((6( \0 (,6, \0 (060 \0 (464 \0 (868 \0 (<6< A@k! \0A@k\"\0 \fM\r\0 \0 O\r@ \0 ( 6\0 Aj! \0Aj\"\0 I\r\0\f AI\r\0 AI\r\0 Ak!@ \0 -\0\0:\0\0 \0 -\0:\0 \0 -\0:\0 \0 -\0:\0 Aj! \0Aj\"\0 M\r\0 \0 I@@ \0 -\0\0:\0\0 Aj! \0Aj\"\0 G\r\0  \0 ­}@@ (\b\"(\f\" F\r\0 (\f F\r\0@@ ((\"*\" (\"*\"\b]E@  \b\\\r * *_E\r (\b(!\f@@  \b^E@  \b\\\r * *_E\r (\f\"(\"*!\b ((\"*!\f (\b(\" (\fG@@@@ ((\"*\" (\"*\"\b]E@  \b\\\r * *_E\r@ (\f\" F\r\0 A\fj!@@ ((\"*\" (\"*\"\b]\r\0  \b[@ * *_\r ( (( \nC\0\0\0\0_E\r (\0! \0  \"E@A\0 (\"A\fj! (\f\" G\r\0 (\b(!\f@ (\f F\r\0@@ (\b(\"(\"*\" ((\"*\"\b]\r\0  \b[@ * *_\r (( ( \nC\0\0\0\0`E\r (\b(! \0  \"E@A\0 (\" (\fG\r\0 (\f! (\f G\r\0 (\f\" F\r  (\fG@@ \0  \"E@A\0 (\"(\f\"(\f G\r\0AAü\nAøAÀAÀ\0\0A¦AøAäAÀ\0\0Ô} (\0\"((! (\0\"((\" \0(H\"\0F@ \0 F@@ (\"\0*\" (\"*\"]E@  \\\r \0* *_E\r  \0 \nC\0\0\0\0_   \0\nC\0\0\0\0`  \0 (\nC\0\0\0\0_ (! \0 F@  \0 \nC\0\0\0\0`  \0   (( \0 ( `Þ}@ \0(\0\"(D\" AÄ\0j\"G@@ (\f! (\0!@@ (\"* ((\"*\\\r\0 * *\\\r\0 (\f F\r\0@ \0(\0  \t@ \0(\0 \fE\r (\f!\f\f\f ! !@  (\fG@ !\f  G@@  G@  (G\r (\0! \0(\0 \fE\r@  F\r\0  (F\r\0 \f (\0! \0(\0 \fE\r  G\r\0 \0(\0!A\0! !@ \"Aj! (\0\" G\r\0 \0A\b \0(\" A\bL j!A\0 \0Aè\0j\"\"(\fA (\0\0\"E\r\0@@ (\fA (\0\0\"@  6\f A 6\b  (\f Aj\"At (\0\0\"6\0 @  (\f At (\0\0\"6 \r (\f (\0 (\b\0\0 (\f  (\b\0\0 A 6\0\f A6 B 7 (\0A6 A 6\b  6\0  (\f At (\0\0\"6 E@ (\f (\0\"( (\b\0\0 (\f (\0 (\b\0\0 (\f  (\b\0\0\f A6 A 6  6 A 6\f \f (\f  (\b\0\0A\0\"\t6D \tE@A\0 \0(\0\"!@@@  (\0\"G@   \t &\"6  Aÿÿÿÿ\0G\r\f#\0Ak\"\f$\0 \t (\f \t(\fAtAj (\0\0\"6\b@@ E@A\0!\f  \t(\f\"At\"jAk! A\0J@ \t(! !@  6\0 Aj! Aj\" M\r\0 \f 6 \f 6\0 \fA\br!\rAÃáÃÁ! \f!\n@ \rAk(\0\" \n(\0\"A(jK@@  A¾ÞlAj\"  kAuAjpAtj\"(\0!  ( 6\0  6\0 Aj! Ak!@ ! \"Aj!@ (\"(\0\"\b*\" (\0\"*\"]\r\0@ !@  \\\r\0 \b* *_E\r\0\f Aj! \"(\"(\0\"\b*\" ]E\r\0@  Ak\"(\0\"\r(\0\"\b*\"]\r\0@@  \\\r\0 * \b*_E\r\0\f  \"Ak\"(\0\"\r(\0\"\b*\"]E\r\0  \r6\0  6\0  I\r\0 (\0!\b  6\0  \b6\0@  k  kH@ ! ! !\f ! ! ! \n 6 \n 6\0 \nA\bj!\n  A(jK\r\0 \n!\r  Aj\"O@@ (\0!@ \"\" M\r\0@ (\0\"*\" Ak\"(\0\"\n(\0\"\b*\"]@ !\f@  \\\r\0 * \b*_E\r\0 !\f  \n6\0  \"I\r\0  6\0 Aj\" M\r\0 \rA\bk\"\n \fO\r\0A! \tA6 \t 6 \t(\0\"(\b\"A\0J@@   AK Ak!\r\0 \t(\f\"At! A6 AH\r\0 \t(\b\" jAk! (\0(\0\"\b*!@ ((\0\"*\" ]E@  \\\r * \b*_E\r ! !\b Aj\" I\r\0 \fAj$\0 \fAAAA\t\0\0\r  \0(D \0A 6DA\0 (\fA (\0\0\"@ A6   6\f A 6\0  6\b  6A!@ (\"AN@A ! A I\r  6 !  A\tA\f 6 \0 6@ E\r\0 \0 \0*,\" \0*4\" \"\"  \" \0*0\" \0*8\" \"% \0    % \0(D\"@@@ \0(D\"(\f\"E@ (\0\"( (\0(Atj(\0\f (\b AtjAk(\0(\0!@@ (\0\"(\bE\r\0 ( (\0(Atj(\0\"*\" *\"]\r  \\\r\0 * *_\r ! \"E\r\0 * *\\\r\0 * *\\\r\0 \0(D! \0(\0 (\b (\b\t\r\f \0  \0(D\"\r\0 \0 \0(@\"((\0\"(\0(6HA\0!@@@@@@@ (@ !\f (E\rA! \r (\b\r (\0! (@ (\r A 6 (\"(\" (\b\"6\b  6  (\"( 6\0  6\0  \0(L\"( 6\0  6\0 ! \0(@\"((\0\"\r\0 ( (\f  (\b\0\0  \0(D \0(\0\"(,\" A,j\"G@ (\b\"(\f\" F\r (\0!@ (\f G\r\0 (\b\" ( (j6 (\" ( ((j6 \0(\0 \f\r\0A\0  G\r\0 \0(\0 'AA×\rA¡Aù\bA\t\0\0AA¡Aú\bA\t\0\0AÒA¡Aü\bA\t\0\0AêA¡AAÝ\0\0AÞA¡Aç\tAü\t\0\0 \0AjA\0¾\0A\b­child <= pq->max\0v->prev == vPrev\0f->prev == fPrev\0e->Org == v\0pqInsert\0pqHeapInsert\0orgUp != tess->event && orgLo != tess->event\0pqInit\0DoneEdgeDict\0CheckForIntersect\0MIN( orgUp->t, dstUp->t ) <= isect.t\0Regions\0AddRightEdges\0Mesh Edges\0Mesh Vertices\0RemoveDegenerateFaces\0Mesh Faces\0MIN( dstLo->s, dstUp->s ) <= isect.s\0regPrev->windingNumber - e->winding == reg->windingNumber\0up->Lnext != up && up->Lnext->Lnext != up\0lo->Lnext != up\0FloatDown\0tessMeshTessellateMonoRegion\0DeleteRegion\0testransSign\0tesedgeSign\0e->Sym->next == ePrev->Sym\0testransEval\0tesedgeEval\0OutputPolymesh\0tessMeshCheckMesh\0e->Lface == f\0faceVerts <= polySize\0pqDelete\0pqHeapDelete\0ConnectLeftDegenerate\0! regUp->fixUpperEdge && ! regLo->fixUpperEdge\0reg->fixUpperEdge\0FixUpperEdge\0IsWindingInside\0CheckForLeftSplice\0e->Onext->Sym->Lnext == e\0e->Lnext->Onext->Sym == e\0e->Sym->Sym == e\0e->Lnext != e\0e->Sym != e\0/tess2/src/tess.c\0/tess2/src/priorityq.c\0/tess2/src/sweep.c\0/tess2/src/geom.c\0/tess2/src/mesh.c\0pqDeletePriorityQ\0TOLERANCE_NONZERO\0v->prev == vPrev && v->anEdge == NULL\0f->prev == fPrev && f->anEdge == NULL\0e->Sym->next == ePrev->Sym && e->Sym == &mesh->eHeadSym && e->Sym->Sym == e && e->Org == NULL && e->Dst == NULL && e->Lface == NULL && e->Rface == NULL\0hCurr >= 1 && hCurr <= pq->max && h[hCurr].key != NULL\0e->Dst != NULL\0pq != NULL\0e->Org != NULL\0curr < pq->max && pq->keys[curr] != NULL\0FALSE\0curr != INV_HANDLE\0free != INV_HANDLE\0++fixedEdges == 1\0EdgeSign( dstLo, tess->event, orgLo ) >= 0\0reg->windingNumber == 0\0reg->eUp->winding == 0\0EdgeSign( dstUp, tess->event, orgUp ) <= 0\0VertLeq( u, v ) && VertLeq( v, w )\0TransLeq( u, v ) && TransLeq( v, w )\0! VertEq( eUp->Dst, eLo->Dst )\0VertLeq( e->Org, e->Dst )\0isect.t <= MAX( orgLo->t, dstLo->t )\0isect.s <= MAX( orgLo->s, orgUp->s )\0! VertEq( dstLo, dstUp )\0LEQ( **(i+1), **i )\0\f\0\0\0\r\0\0\0\0AÌP\r");
                                  }
                                  a = function (e) {
                                    return r(e.instance);
                                  };
                                  e.n = 2;
                                  return k(i);
                                case 2:
                                  return e.a(2, a(e.v));
                              }
                            }
                          }, e);
                        }))();
                      case 1:
                        ne = e.v;
                        e.n = 2;
                        return ie(Q().m(function e() {
                          var t;
                          var r;
                          return Q().w(function (e) {
                            while (true) {
                              switch (e.n) {
                                case 0:
                                  x();
                                  if (!(r = n.setStatus)) {
                                    e.n = 2;
                                    break;
                                  }
                                  r("Running...");
                                  e.n = 1;
                                  return new Promise(function (e) {
                                    return setTimeout(e, 1);
                                  });
                                case 1:
                                  setTimeout(r, 1, "");
                                case 2:
                                  if (!_) {
                                    if ((t = n.onRuntimeInitialized) !== null && t !== undefined) {
                                      t.call(n);
                                    }
                                    b();
                                  }
                                case 3:
                                  return e.a(2);
                              }
                            }
                          }, e);
                        }))();
                      case 2:
                        return e.a(2, n);
                    }
                  }
                }, e);
              }));
              return se.apply(this, arguments);
            }
            B.ODD;
            B.NONZERO;
            B.POSITIVE;
            B.NEGATIVE;
            B.ABS_GEQ_TWO;
            D.POLYGONS;
            D.CONNECTED_POLYGONS;
            D.BOUNDARY_CONTOURS;
            n(3362);
            n(90744);
            n(23500);
            n(69085);
            n(3296);
            n(48408);
            d();
            n(62480);
            o();
            n(78125);
            n(4731);
            n(60479);
            n(40875);
            var ae;
            var oe = function () {
              try {
                if (typeof WebAssembly == "object" && typeof WebAssembly.instantiate == "function") {
                  var e = new WebAssembly.Module(Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0));
                  if (e instanceof WebAssembly.Module) {
                    return new WebAssembly.Instance(e) instanceof WebAssembly.Instance;
                  }
                }
              } catch (e) {}
              return false;
            }();
            if (oe) {
              (function () {
                return se.apply(this, arguments);
              })().then(function (e) {
                ae = e.Tess;
              });
            }
            var he = oe ? function (e) {
              var t = new ae();
              t.addContours(e);
              var n = t.tesselate({
                windingRule: 0,
                elementType: 0,
                polySize: 3,
                vertexSize: 2
              });
              var r = {
                vertices: new Float32Array(n.vertices),
                elements: new Uint32Array(n.elements)
              };
              t.dispose();
              return r;
            } : function (e) {
              return function (e) {
                var t = e.windingRule;
                var n = t === undefined ? B.ODD : t;
                var r = e.elementType;
                var i = r === undefined ? D.POLYGONS : r;
                var s = e.polySize;
                var a = s === undefined ? 3 : s;
                var o = e.vertexSize;
                var h = o === undefined ? 2 : o;
                var l = e.normal;
                var d = l === undefined ? [0, 0, 1] : l;
                var c = e.contours;
                var u = c === undefined ? [] : c;
                var p = e.strict;
                var m = p === undefined || p;
                var f = e.debug;
                var _ = f !== undefined && f;
                if (!u && m) {
                  throw new Error("Contours can't be empty");
                }
                if (u) {
                  var v = new $();
                  for (var y = 0; y < u.length; y++) {
                    v.addContour(h || 2, u[y]);
                  }
                  v.tesselate(n, i, a, h, d, m);
                  return {
                    vertices: v.vertices,
                    vertexIndices: v.vertexIndices,
                    vertexCount: v.vertexCount,
                    elements: v.elements,
                    elementCount: v.elementCount,
                    mesh: _ ? v.mesh : undefined
                  };
                }
              }({
                contours: e,
                windingRule: 0,
                elementType: 0,
                polySize: 3,
                vertexSize: 2
              });
            };
            function le(e, t) {
              var n = e.points;
              if (n.length >= 6) {
                var r;
                for (var i = e.holes, s = [n], a = 0; a < i.length; a++) {
                  if (i[a].points.length >= 6) {
                    s.push(i[a].points);
                  }
                }
                for (var o = 0; o < s.length; o++) {
                  for (var h = s[o], l = 0; l < h.length; l++) {
                    if (isNaN(h[l])) {
                      h[l] = 0;
                    }
                  }
                }
                try {
                  r = he(s);
                } catch (e) {
                  return;
                }
                if (!r.elements.length) {
                  return;
                }
                var d = r.vertices;
                var c = t.points;
                var u = t.indices;
                var p = c.length / 2;
                for (var m = 0; m < r.elements.length; m++) {
                  u.push(r.elements[m] + p);
                }
                for (var f = 0; f < d.length; f++) {
                  c.push(d[f]);
                }
              }
            }
            var de = new R.czZ();
            function ce() {
              Object.defineProperty(R.mk9.prototype, "bounds", {
                get: function () {
                  if (this.boundsDirty !== this.dirty) {
                    this.boundsDirty = this.dirty;
                    (function (e) {
                      var t = e._bounds;
                      var n = de;
                      var r = R.uqu.IDENTITY;
                      t.clear();
                      n.clear();
                      for (var i = 0; i < e.graphicsData.length; i++) {
                        var s = e.graphicsData[i];
                        var a = s.shape;
                        var o = s.type;
                        var h = s.lineStyle;
                        var l = s.matrix || R.uqu.IDENTITY;
                        var d = 0;
                        if (h && h.visible) {
                          var c = h.alignment;
                          d = h.width;
                          if (o === R.HYg.POLY) {
                            d *= 0.5 + Math.abs(0.5 - c);
                          } else {
                            d *= Math.max(0, c);
                          }
                        }
                        if (r !== l) {
                          if (!n.isEmpty()) {
                            t.addBoundsMatrix(n, r);
                            n.clear();
                          }
                          r = l;
                        }
                        if (o === R.HYg.RECT || o === R.HYg.RREC) {
                          var u = a;
                          n.addFramePad(u.x, u.y, u.x + u.width, u.y + u.height, d, d);
                        } else if (o === R.HYg.CIRC) {
                          var p = a;
                          n.addFramePad(p.x, p.y, p.x, p.y, p.radius + d, p.radius + d);
                        } else if (o === R.HYg.ELIP) {
                          var m = a;
                          n.addFramePad(m.x, m.y, m.x, m.y, m.width + d, m.height + d);
                        } else {
                          var f = a;
                          t.addVerticesMatrix(r, f.points, 0, f.points.length, d, d);
                        }
                      }
                      if (!n.isEmpty()) {
                        t.addBoundsMatrix(n, r);
                      }
                      t.pad(e.boundsPadding, e.boundsPadding);
                    })(this);
                  }
                  return this._bounds;
                },
                enumerable: false,
                configurable: true
              });
            }
            n(74423);
            h();
            var ue = n(64251);
            var pe = function (e) {
              e.Unknown = "unknown";
              e.Enabled = "enabled";
              e.Disabled = "disabled";
              return e;
            }({});
            function me() {
              try {
                var e = document.createElement("canvas").getContext("webgl");
                if (!e) {
                  return {
                    accelerationStatus: pe.Disabled
                  };
                }
                var t = e.getExtension("WEBGL_debug_renderer_info");
                if (!t) {
                  return {
                    accelerationStatus: pe.Unknown
                  };
                }
                var n = e.getParameter(t.UNMASKED_RENDERER_WEBGL);
                var r = n.toLowerCase();
                return {
                  accelerationStatus: ["software", "swiftshader", "llvmpipe"].some(function (e) {
                    return r.includes(e);
                  }) ? pe.Disabled : pe.Enabled,
                  renderer: n
                };
              } catch (e) {
                ue.Cp(e);
                return {
                  accelerationStatus: pe.Unknown
                };
              }
            }
          }
    });
})();
