(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        84647(e, t, n) {
            "use strict";
        
            n.d(t, {
              mb: () => o,
              ws: () => g,
              Nx: () => w,
              Lt: () => A,
              Nw: () => x.N,
              A1: () => O,
              e: () => S,
              tl: () => E,
              ox: () => C,
              s9: () => T,
              j7: () => B,
              kx: () => I,
              BI: () => D.BI,
              se: () => D.se
            });
            n(89907);
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(26099);
            n(2892);
            var r = n(24184);
            var i = n(28242);
            function s(e) {
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
            function a(e, t) {
              a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return a(e, t);
            }
            var o = function (e) {
              function t(t) {
                var n;
                if (t === undefined) {
                  t = null;
                }
                (n = e.call(this) || this).updateTexture = function () {
                  if (n.bitmapData && n.pixiSprite.texture !== n.bitmapData.pixiTexture) {
                    n.pixiSprite.texture = n.bitmapData.pixiTexture;
                  }
                };
                n.bitmapData = t;
                n.pixiSprite.anchor.set(0.5);
                return n;
              }
              var n;
              var r;
              var o;
              var h;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              a(n, r);
              t.prototype.destroy = function () {
                if (this.bitmapData) {
                  this.bitmapData.destroy();
                  this.bitmapData = null;
                }
                e.prototype.destroy.call(this);
              };
              o = t;
              if (h = [{
                key: "bitmapData",
                get: function () {
                  return this._bitmapData;
                },
                set: function (e) {
                  if (this._bitmapData) {
                    this._bitmapData._dispatcher.removeEventListener(i.J.CHANGE, this.updateTexture);
                  }
                  this._bitmapData = e;
                  if (this._bitmapData) {
                    this._bitmapData._dispatcher.addEventListener(i.J.CHANGE, this.updateTexture);
                  }
                  this.updateTexture();
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
                    Object.defineProperty(e, s(r.key), r);
                  }
                })(o.prototype, h);
              }
              Object.defineProperty(o, "prototype", {
                writable: false
              });
              return o;
            }(r.q);
            var h = n(46682);
            var l = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180];
            var d = new Array(512);
            for (var c = 0; c < 256; c++) {
              d[256 + c] = d[c] = l[c];
            }
            function u(e, t, n, r = 0) {
              if (r > 0) {
                e %= r;
                t %= r;
                n %= r;
              }
              var i = Math.floor(e) & 255;
              var s = Math.floor(t) & 255;
              var a = Math.floor(n) & 255;
              var o = e - Math.floor(e);
              var h = t - Math.floor(t);
              var l = n - Math.floor(n);
              var c = f(o);
              var u = f(h);
              var v = f(l);
              var y = d[d[d[i] + s] + a];
              var g = d[d[d[i] + p(s, r)] + a];
              var w = d[d[d[i] + s] + p(a, r)];
              var x = d[d[d[i] + p(s, r)] + p(a, r)];
              var b = d[d[d[p(i, r)] + s] + a];
              var T = d[d[d[p(i, r)] + p(s, r)] + a];
              var A = d[d[d[p(i, r)] + s] + p(a, r)];
              var C = d[d[d[p(i, r)] + p(s, r)] + p(a, r)];
              var S = _(m(y, o, h, l), m(b, o - 1, h, l), c);
              var E = _(m(g, o, h - 1, l), m(T, o - 1, h - 1, l), c);
              var O = _(S, E, u);
              S = _(m(w, o, h, l - 1), m(A, o - 1, h, l - 1), c);
              E = _(m(x, o, h - 1, l - 1), m(C, o - 1, h - 1, l - 1), c);
              var k = _(S, E, u);
              return (_(O, k, v) + 1) / 2;
            }
            function p(e, t) {
              e++;
              if (t > 0) {
                e %= t;
              }
              return e;
            }
            function m(e, t, n, r) {
              var i;
              var s = e & 15;
              var a = s < 8 ? t : n;
              i = s < 4 ? n : s === 12 || s === 14 ? t : r;
              return (s & 1 ? -a : a) + (s & 2 ? -i : i);
            }
            function f(e) {
              return e * e * e * (e * (e * 6 - 15) + 10);
            }
            function _(e, t, n) {
              return e + n * (t - e);
            }
            var v = n(4971);
            function y(e) {
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
            var g = function () {
              function e(e, t, n = true, r = 0, i = false) {
                this.clearBeforeRender = false;
                this.usingCanvas = false;
                this._destroyed = false;
                this._width = e;
                this._height = t;
                this._transparent = n;
                this._fillColor = r;
                this.eventChange = new v.Jh(v.Jh.CHANGE);
                this._dispatcher = new v.Qe();
                this.usingCanvas = i;
                if (i) {
                  this.updateRegularTexture();
                } else {
                  this.updateRenderTexture();
                }
              }
              var t;
              var n;
              var r = e.prototype;
              r.dispose = function () {
                this._destroyed = true;
                if (this.pixiRegularTexture) {
                  this.pixiRegularTexture.baseTexture.destroy();
                  this.pixiRegularTexture.destroy();
                  this.pixiRegularTexture = null;
                }
                if (this.pixiRenderTexture) {
                  this.pixiRenderTexture.baseTexture.destroy();
                  this.pixiRenderTexture.destroy();
                  this.pixiRenderTexture = null;
                }
                this.ctx = null;
                this.drawSource = null;
                this.drawMatrix = null;
                this.drawColorTransform = null;
              };
              r.destroy = function () {
                this.dispose();
              };
              r.clone = function () {
                return new e(this.width, this.height, this.transparent, this.fillColor);
              };
              r.setPixel = function (e, t, n) {
                this.ctx.fillStyle = h.WpD.hex2string(n);
                this.ctx.fillRect(e, t, 1, 1);
                this.usingCanvas = true;
              };
              r.draw = function (e, t = null, n = null, r = null, i = null, s = false) {
                this.drawSource = e;
                this.drawMatrix = t || new v.uq();
                this.drawColorTransform = n;
                this.updateRenderTexture();
              };
              r.updateRenderTexture = function () {
                if (this.pixiRenderTexture) {
                  var e = this.pixiRenderTexture.baseTexture.width;
                  var t = this.pixiRenderTexture.baseTexture.height;
                  var n = Math.ceil(this._width);
                  var r = Math.ceil(this._height);
                  if (n !== e || r !== t) {
                    this.pixiRenderTexture.baseTexture.setRealSize(n, r);
                  }
                } else {
                  var i = new h.LEg({
                    width: Math.ceil(this._width),
                    height: Math.ceil(this._height),
                    scaleMode: 1,
                    resolution: 1,
                    wrapMode: h.uRw.REPEAT
                  });
                  this.pixiRenderTexture = new h.Y7R(i);
                }
                if (this.drawSource) {
                  var s = v.BI.main.renderer;
                  var a = this.drawSource.pixiSprite;
                  var o = this.pixiRenderTexture;
                  var l = a.filters;
                  if (this.drawColorTransform) {
                    var d = new h.uWs.ColorMatrixFilter();
                    d.matrix = this.drawColorTransform.getColorMatrix();
                    a.filters = [d];
                  }
                  var c = a.transform.localTransform.clone();
                  a.transform.setFromMatrix(this.drawMatrix.pixiMatrix);
                  var u = s.clearBeforeRender;
                  s.clearBeforeRender = this.clearBeforeRender;
                  s.render(a, {
                    renderTexture: o,
                    clear: this.clearBeforeRender
                  });
                  s.clearBeforeRender = u;
                  a.transform.localTransform = c;
                  a.transform.updateLocalTransform();
                  a.filters = l;
                }
                this._dispatcher.dispatchEvent(this.eventChange);
              };
              r.updateRegularTexture = function (e = false) {
                if (!this.ctx) {
                  var t = document.createElement("canvas");
                  this.ctx = t.getContext("2d");
                }
                if (this.clearBeforeRender) {
                  this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
                }
                this.ctx.canvas.width = this._width;
                this.ctx.canvas.height = this._height;
                if (!this.transparent) {
                  this.ctx.fillStyle = h.WpD.hex2string(this._fillColor);
                  this.ctx.fillRect(0, 0, this._width, this._height);
                }
                if (this.pixiRegularTexture) {
                  this.pixiRegularTexture.baseTexture.update();
                } else {
                  var n = new h.t5M(this.ctx.canvas, {
                    resolution: 1
                  });
                  this.pixiRegularTexture = new h.gPd(n);
                }
                this._dispatcher.dispatchEvent(this.eventChange);
              };
              r.perlinNoise = function (e, t, n, r, i, s, a = 7, o = false, h = null) {
                e *= 0.2;
                t *= 0.2;
                this.updateRegularTexture();
                this.ctx.canvas.width = e;
                this.ctx.canvas.height = t;
                var l = this.ctx.canvas.width;
                var d = this.ctx.canvas.height;
                var c = this.ctx.createImageData(l, d);
                function p(e, t, r, i, s, a = 4) {
                  var o = function (e, t, n, r, i, s = 0) {
                    var a = 0;
                    var o = 1;
                    var h = 1;
                    var l = 0;
                    for (var d = 0; d < r; d++) {
                      a += u(e * o, t * o, n * o, s) * h;
                      l += h;
                      h *= 0.3;
                      o *= 2;
                    }
                    return a / l;
                  }(r / e * a, i / t * a, s, n, 0, a);
                  var h = Math.min(Math.round(o * 255) + 50, 255);
                  return {
                    r: h,
                    g: h,
                    b: h,
                    a: h
                  };
                }
                for (var m = 0, f = c.data.length; m < f; m += 4) {
                  var _ = p(l, d, m / 4 % l, Math.floor(m / l / 4), 0.8);
                  c.data[m] = _.r;
                  c.data[m + 1] = _.g;
                  c.data[m + 2] = _.b;
                  c.data[m + 3] = _.a;
                }
                this.ctx.scale(0.25, 0.25);
                this.ctx.putImageData(c, 0, 0);
                this.pixiRegularTexture.baseTexture.update();
              };
              r.fillRect = function (e, t) {};
              t = e;
              if (n = [{
                key: "destroyed",
                get: function () {
                  return this._destroyed;
                }
              }, {
                key: "pixiTexture",
                get: function () {
                  if (this.usingCanvas) {
                    return this.pixiRegularTexture;
                  } else {
                    return this.pixiRenderTexture;
                  }
                }
              }, {
                key: "width",
                get: function () {
                  return this._width;
                },
                set: function (e) {
                  this._width = e;
                  this.updateRenderTexture();
                }
              }, {
                key: "height",
                get: function () {
                  return this._height;
                },
                set: function (e) {
                  this._height = e;
                  this.updateRenderTexture();
                }
              }, {
                key: "transparent",
                get: function () {
                  return this._transparent;
                },
                set: function (e) {
                  this._transparent = e;
                  this.updateRenderTexture();
                }
              }, {
                key: "fillColor",
                get: function () {
                  return this._fillColor;
                },
                set: function (e) {
                  this._fillColor = e;
                  this.updateRenderTexture();
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
                    Object.defineProperty(e, y(r.key), r);
                  }
                })(t.prototype, n);
              }
              Object.defineProperty(t, "prototype", {
                writable: false
              });
              return t;
            }();
            var w = function () {
              function e() {}
              e.flashToPixi = function (t) {
                var n = e.flashToPixiMap[t];
                if (n === undefined) {
                  return -1;
                } else {
                  return n;
                }
              };
              e.isSupportedByPixi = function (t) {
                return e.supportedByPixi.indexOf(t) >= 0;
              };
              return e;
            }();
            w.NORMAL = "NORMAL";
            w.LAYER = "LAYER";
            w.MULTIPLY = "MULTIPLY";
            w.SCREEN = "SCREEN";
            w.LIGHTEN = "LIGHTEN";
            w.DARKEN = "DARKEN";
            w.DIFFERENCE = "DIFFERENCE";
            w.ADD = "ADD";
            w.SUBTRACT = "SUBTRACT";
            w.INVERT = "INVERT";
            w.LUMINVERT = "LUMINVERT";
            w.ALPHA = "ALPHA";
            w.ERASE = "ERASE";
            w.OVERLAY = "OVERLAY";
            w.HARDLIGHT = "HARDLIGHT";
            w.SHADER = "SHADER";
            w.flashToPixiMap = {
              NORMAL: h.B9A.NORMAL,
              LAYER: h.B9A.ADD,
              MULTIPLY: h.B9A.MULTIPLY,
              SCREEN: h.B9A.SCREEN,
              LIGHTEN: h.B9A.LIGHTEN,
              DARKEN: h.B9A.DARKEN,
              DIFFERENCE: h.B9A.DIFFERENCE,
              ADD: h.B9A.ADD,
              SUBTRACT: h.B9A.SUBTRACT,
              INVERT: h.B9A.DIFFERENCE,
              LUMINVERT: h.B9A.NORMAL,
              ALPHA: h.B9A.MULTIPLY,
              ERASE: h.B9A.ERASE,
              OVERLAY: h.B9A.OVERLAY,
              HARDLIGHT: h.B9A.HARD_LIGHT,
              SHADER: h.B9A.NORMAL
            };
            w.supportedByPixi = ["NORMAL", "ADD", "OVERLAY"];
            var x = n(82191);
            function b(e) {
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
            var T = function (e) {
              e.HORIZONTAL = "horizontal";
              e.NONE = "none";
              e.NORMAL = "normal";
              e.VERTICAL = "vertical";
              return e;
            }({});
            var A = function (e) {
              e.NONE = "none";
              e.ROUND = "round";
              e.SQUARE = "square";
              return e;
            }({});
            var C = function (e) {
              e.BEVEL = "bevel";
              e.MITER = "miter";
              e.ROUND = "round";
              return e;
            }({});
            var S = function (e) {
              e[e.LINE_TO = 1] = "LINE_TO";
              e[e.MOVE_TO = 2] = "MOVE_TO";
              e[e.CUBIC_CURVE_TO = 6] = "CUBIC_CURVE_TO";
              return e;
            }({});
            var E = function (e) {
              e.EVEN_ODD = "evenOdd";
              e.NON_ZERO = "nonZero";
              return e;
            }({});
            var O = function () {
              function e() {
                this.drawn = false;
                this.pixiGraphics = new h.A1g();
              }
              var t;
              var n;
              var r = e.prototype;
              r.destroy = function () {
                v.yB.destroyRecursive(this.pixiGraphics);
                this.pixiGraphics = null;
              };
              r.beginBitmapFill = function (e, t = null, n = true, r = false) {
                this.pixiGraphics.beginTextureFill({
                  texture: e.pixiTexture,
                  color: 16777215,
                  alpha: 1,
                  matrix: t ? t.pixiMatrix : null
                });
              };
              r.beginFill = function (e, t = 1) {
                this.drawn = true;
                this.pixiGraphics.beginFill(e, t);
              };
              r.clear = function () {
                this.pixiGraphics.clear();
              };
              r.cubicCurveTo = function (e, t, n, r, i, s) {
                this.pixiGraphics.bezierCurveTo(e, t, n, r, i, s);
              };
              r.curveTo = function (e, t, n, r) {
                this.pixiGraphics.bezierCurveTo(e, t, n, r, n, r);
              };
              r.drawCircle = function (e, t, n) {
                this.pixiGraphics.drawCircle(e, t, n);
              };
              r.arc = function (e, t, n, r, i, s = false) {
                this.pixiGraphics.arc(e, t, n, r, i, s);
              };
              r.drawPath = function (e, t, n = E.EVEN_ODD) {
                var r = 0;
                for (var i = 0; i < e.length; i++) {
                  switch (e[i]) {
                    case S.MOVE_TO:
                      this.pixiGraphics.moveTo(t[r++], t[r++]);
                      break;
                    case S.LINE_TO:
                      this.pixiGraphics.lineTo(t[r++], t[r++]);
                      break;
                    case S.CUBIC_CURVE_TO:
                      this.pixiGraphics.bezierCurveTo(t[r++], t[r++], t[r++], t[r++], t[r++], t[r++]);
                      break;
                    default:
                      throw new Error("unknown draw command: " + e[i]);
                  }
                }
              };
              r.drawRect = function (e, t, n, r) {
                this.drawn = true;
                this.pixiGraphics.drawRect(e, t, n, r);
              };
              r.drawRoundRect = function (e, t, n, r, i = 0, s = 0) {
                this.drawn = true;
                this.pixiGraphics.drawRoundedRect(e, t, n, r, i);
              };
              r.endFill = function () {
                this.pixiGraphics.endFill();
              };
              r.lineStyle = function (e = 0, t = 0, n = 1, r = false, i = "normal", s, a, o = 3) {
                this.drawn = true;
                var h = !e;
                if (!e || e < 1) {
                  e = 1;
                }
                if (s) {
                  this.pixiGraphics.lineStyle({
                    width: e,
                    color: t,
                    alpha: n,
                    alignment: 0,
                    native: h,
                    cap: s
                  });
                } else {
                  this.pixiGraphics.lineStyle(e, t, n, 0, h);
                }
                return this;
              };
              r.lineTo = function (e, t) {
                this.pixiGraphics.lineTo(e, t);
              };
              r.moveTo = function (e, t) {
                this.pixiGraphics.moveTo(e, t);
                return this;
              };
              t = e;
              if (n = [{
                key: "width",
                get: function () {
                  return this.pixiGraphics.width;
                },
                set: function (e) {
                  this.pixiGraphics.width = e;
                }
              }, {
                key: "height",
                get: function () {
                  return this.pixiGraphics.height;
                },
                set: function (e) {
                  this.pixiGraphics.height = e;
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
                    Object.defineProperty(e, b(r.key), r);
                  }
                })(t.prototype, n);
              }
              Object.defineProperty(t, "prototype", {
                writable: false
              });
              return t;
            }();
            n(87036);
            n(62010);
            var k = n(96871);
            n(54554);
            var P = n(61214);
            function M(e) {
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
            function R(e, t) {
              R = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return R(e, t);
            }
            var I = function (e) {
              function t(t) {
                var n;
                (n = e.call(this, t) || this)._dragging = false;
                n._dragBounds = null;
                n._dragOffsetX = 0;
                n._dragOffsetY = 0;
                n.ignoreWhenCulling = false;
                n.dragUpdateBind = function (e) {
                  if (n.parent && n._dragging) {
                    var t = n.parent.globalToLocal(new P.bR(e.stageX, e.stageY));
                    n.x = t.x + n._dragOffsetX;
                    n.y = t.y + n._dragOffsetY;
                    if (n._dragBounds) {
                      if (n.x < n._dragBounds.left) {
                        n.x = n._dragBounds.left;
                      } else if (n.x > n._dragBounds.right) {
                        n.x = n._dragBounds.right;
                      }
                      if (n.y < n._dragBounds.top) {
                        n.y = n._dragBounds.top;
                      } else if (n.y > n._dragBounds.bottom) {
                        n.y = n._dragBounds.bottom;
                      }
                    }
                  }
                };
                n._hitArea = n;
                n.graphicsToBeInsertedAtIndex = n._pixiSprite.children.length;
                return n;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              R(n, r);
              var i;
              var s;
              var a = t.prototype;
              a.addChildAt = function (e, t) {
                var n = t;
                if (this._graphics && this._graphics.pixiGraphics.parent === this._pixiSprite) {
                  n++;
                }
                if (e.parent) {
                  e.parent.removeChild(e);
                }
                this._pixiSprite.addChildAt(e._pixiSprite, n);
                this.children.splice(t, 0, e);
                if (!e.stage && this.stage) {
                  e.dispatchEvent(this.eventAddedToStage);
                }
                e.parent = this;
                e.onAdded(this);
                e.dispatchEvent(this.eventAdded);
                return e;
              };
              a.destroy = function () {
                if (this._graphics) {
                  v.yB.destroyRecursive(this._graphics);
                  this._graphics = null;
                }
                this._hitArea = null;
                e.prototype.destroy.call(this);
              };
              a.startDrag = function (e = false, t = null) {
                if (!this._dragging && this.stage && this.parent) {
                  this._dragging = true;
                  this._dragBounds = t;
                  this._dragOffsetX = e ? 0 : this.x - this.parent.mouseX;
                  this._dragOffsetY = e ? 0 : this.y - this.parent.mouseY;
                  this.stage.addEventListener(v.Cm.MOUSE_MOVE, this.dragUpdateBind);
                }
              };
              a.stopDrag = function () {
                if (this._dragging && this.stage) {
                  this._dragging = false;
                  this.stage.removeEventListener(v.Cm.MOUSE_MOVE, this.dragUpdateBind);
                }
              };
              a.didReplacePixiSprite = function () {
                e.prototype.didReplacePixiSprite.call(this);
                if (this._graphics && this._graphics.pixiGraphics.parent) {
                  this._pixiSprite.addChild(this._graphics.pixiGraphics);
                }
              };
              i = t;
              if (s = [{
                key: "graphics",
                get: function () {
                  if (this._graphics === undefined) {
                    this._graphics = new v.A1();
                    this._graphics.pixiGraphics._flashSprite = this;
                    this._pixiSprite.addChildAt(this._graphics.pixiGraphics, this.graphicsToBeInsertedAtIndex);
                  }
                  return this._graphics;
                }
              }, {
                key: "buttonMode",
                get: function () {
                  return this._pixiSprite.buttonMode;
                },
                set: function (e) {
                  this._pixiSprite.buttonMode = e;
                }
              }, {
                key: "hitArea",
                get: function () {
                  return this._hitArea;
                },
                set: function (e) {
                  this._hitArea = e;
                  this._pixiSprite.hitArea = e._pixiSprite.hitArea;
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
                    Object.defineProperty(e, M(r.key), r);
                  }
                })(i.prototype, s);
              }
              Object.defineProperty(i, "prototype", {
                writable: false
              });
              return i;
            }(x.N);
            function L(e) {
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
            function j(e, t) {
              j = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return j(e, t);
            }
            var B = function (e) {
              function t(t) {
                var n;
                (n = e.call(this, t) || this).enabled = true;
                n._isPlaying = false;
                n.childrenToAdd = [];
                return n;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              j(n, r);
              var i;
              var s;
              var a = t.prototype;
              a.destroy = function () {
                v.yB.destroyRecursive(this.pixiMovieClip);
                this.pixiMovieClip = null;
                e.prototype.destroy.call(this);
              };
              t.fromPixiMovieClip = function (e) {
                var n = new t();
                n.setPixiMovieClip(e);
                return n;
              };
              a.convertChildren = function (e = this.pixiSprite) {
                for (var t = e.children.length - 1; t >= 0; t--) {
                  var n = e.children[t];
                  var r = this.pixiToFlash(n, this);
                  this.recursiveConvertChildren(n, r);
                }
                for (var i = 0; i < this.childrenToAdd.length; i++) {
                  var a = this.childrenToAdd[i];
                  this.addChildAt(a, 0);
                  if (a.childrenToAdd?.length > 0) {
                    this.addFlashClipChildren(a);
                  }
                }
                this.childrenToAdd = [];
              };
              a.pixiToFlash = function (e, n) {
                var r;
                if (e instanceof k.j7) {
                  (r = new t(null)).setPixiMovieClip(e);
                } else {
                  r = new t(e);
                }
                n.childrenToAdd.push(r);
                if (e.name) {
                  n[r.name = e.name] = r;
                }
                return r;
              };
              a.recursiveConvertChildren = function (e, t) {
                for (var n = 0; n < e.children.length; n++) {
                  var r = e.children[n];
                  var i = this.pixiToFlash(r, t);
                  this.recursiveConvertChildren(r, i);
                }
              };
              a.addFlashClipChildren = function (e) {
                for (var t = 0; t < e.childrenToAdd.length; t++) {
                  var r = e.childrenToAdd[t];
                  e.addChild(r);
                  if (r.childrenToAdd?.length > 0) {
                    this.addFlashClipChildren(r);
                  }
                }
              };
              a.setPixiMovieClip = function (e, t = false) {
                this.pixiMovieClip = e;
                this.replacePixiSprite(this.pixiMovieClip);
                this.pixiMovieClip.loop = true;
                this.gotoAndStop(1);
                if (t) {
                  this.convertChildren(this.pixiMovieClip);
                }
              };
              a.gotoAndPlay = function (e, t) {
                if (this.pixiMovieClip) {
                  this.pixiMovieClip.gotoAndPlay(e - 1);
                  this._isPlaying = true;
                }
              };
              a.gotoAndStop = function (e, t) {
                if (this.pixiMovieClip) {
                  this.pixiMovieClip.gotoAndStop(e - 1);
                  this._isPlaying = false;
                }
              };
              a.nextFrame = function () {
                var e = this.currentFrame;
                this.gotoAndStop(e + 1);
              };
              a.play = function () {
                if (this.pixiMovieClip) {
                  this._isPlaying = true;
                  this.pixiMovieClip.play();
                }
              };
              a.prevFrame = function () {
                var e = this.currentFrame;
                this.gotoAndStop(e - 1);
              };
              a.stop = function () {
                if (this.pixiMovieClip) {
                  this.pixiMovieClip.stop();
                  this._isPlaying = false;
                }
              };
              i = t;
              if (s = [{
                key: "currentFrame",
                get: function () {
                  if (this.pixiMovieClip) {
                    return this.pixiMovieClip.currentFrame + 1;
                  } else {
                    return 1;
                  }
                },
                set: function (e) {
                  if (this.pixiMovieClip) {
                    this.pixiMovieClip.currentFrame = e - 1;
                  }
                }
              }, {
                key: "totalFrames",
                get: function () {
                  if (this.pixiMovieClip) {
                    return this.pixiMovieClip.totalFrames;
                  } else {
                    return 1;
                  }
                },
                set: function (e) {
                  if (this.pixiMovieClip) {
                    this.pixiMovieClip.totalFrames = e;
                  }
                }
              }, {
                key: "isPlaying",
                get: function () {
                  return this._isPlaying;
                }
              }, {
                key: "loop",
                get: function () {
                  return !!this.pixiMovieClip && this.pixiMovieClip.loop;
                },
                set: function (e) {
                  if (this.pixiMovieClip) {
                    this.pixiMovieClip.loop = e;
                  }
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
                    Object.defineProperty(e, L(r.key), r);
                  }
                })(i.prototype, s);
              }
              Object.defineProperty(i, "prototype", {
                writable: false
              });
              return i;
            }(I);
            var D = n(32601);
          }
    });
})();
