(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        72479(e, t, n) {
            "use strict";
        
            n.d(t, {
              EY: () => g,
              T: () => r,
              Z1: () => v,
              xJ: () => u
            });
            var r;
            var i = n(28027);
            var s = n(97831);
            var a = n(55323);
            var o = n(38499);
            var h = n(88604);
            function l(e, t) {
              l = Object.setPrototypeOf || {
                __proto__: []
              } instanceof Array && function (e, t) {
                e.__proto__ = t;
              } || function (e, t) {
                for (var n in t) {
                  if (t.hasOwnProperty(n)) {
                    e[n] = t[n];
                  }
                }
              };
              return l(e, t);
            }
            (function (e) {
              e[e.LINEAR_VERTICAL = 0] = "LINEAR_VERTICAL";
              e[e.LINEAR_HORIZONTAL = 1] = "LINEAR_HORIZONTAL";
            })(r ||= {});
            var d = {
              align: "left",
              breakWords: false,
              dropShadow: false,
              dropShadowAlpha: 1,
              dropShadowAngle: Math.PI / 6,
              dropShadowBlur: 0,
              dropShadowColor: "black",
              dropShadowDistance: 5,
              fill: "black",
              fillGradientType: r.LINEAR_VERTICAL,
              fillGradientStops: [],
              fontFamily: "Arial",
              fontSize: 26,
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: "normal",
              letterSpacing: 0,
              lineHeight: 0,
              lineJoin: "miter",
              miterLimit: 10,
              padding: 0,
              stroke: "black",
              strokeThickness: 0,
              textBaseline: "alphabetic",
              trim: false,
              whiteSpace: "pre",
              wordWrap: false,
              wordWrapWidth: 100,
              leading: 0
            };
            var c = ["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui"];
            var u = function () {
              function e(e) {
                this.styleID = 0;
                this.reset();
                f(this, e, e);
              }
              e.prototype.clone = function () {
                var t = {};
                f(t, this, d);
                return new e(t);
              };
              e.prototype.reset = function () {
                f(this, d, d);
              };
              Object.defineProperty(e.prototype, "align", {
                get: function () {
                  return this._align;
                },
                set: function (e) {
                  if (this._align !== e) {
                    this._align = e;
                    this.styleID++;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "breakWords", {
                get: function () {
                  return this._breakWords;
                },
                set: function (e) {
                  if (this._breakWords !== e) {
                    this._breakWords = e;
                    this.styleID++;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "dropShadow", {
                get: function () {
                  return this._dropShadow;
                },
                set: function (e) {
                  if (this._dropShadow !== e) {
                    this._dropShadow = e;
                    this.styleID++;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "dropShadowAlpha", {
                get: function () {
                  return this._dropShadowAlpha;
                },
                set: function (e) {
                  if (this._dropShadowAlpha !== e) {
                    this._dropShadowAlpha = e;
                    this.styleID++;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "dropShadowAngle", {
                get: function () {
                  return this._dropShadowAngle;
                },
                set: function (e) {
                  if (this._dropShadowAngle !== e) {
                    this._dropShadowAngle = e;
                    this.styleID++;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "dropShadowBlur", {
                get: function () {
                  return this._dropShadowBlur;
                },
                set: function (e) {
                  if (this._dropShadowBlur !== e) {
                    this._dropShadowBlur = e;
                    this.styleID++;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "dropShadowColor", {
                get: function () {
                  return this._dropShadowColor;
                },
                set: function (e) {
                  var t = m(e);
                  if (this._dropShadowColor !== t) {
                    this._dropShadowColor = t;
                    this.styleID++;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "dropShadowDistance", {
                get: function () {
                  return this._dropShadowDistance;
                },
                set: function (e) {
                  if (this._dropShadowDistance !== e) {
                    this._dropShadowDistance = e;
                    this.styleID++;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "fill", {
                get: function () {
                  return this._fill;
                },
                set: function (e) {
                  var t = m(e);
                  if (this._fill !== t) {
                    this._fill = t;
                    this.styleID++;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "fillGradientType", {
                get: function () {
                  return this._fillGradientType;
                },
                set: function (e) {
                  if (this._fillGradientType !== e) {
                    this._fillGradientType = e;
                    this.styleID++;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "fillGradientStops", {
                get: function () {
                  return this._fillGradientStops;
                },
                set: function (e) {
                  if (!function (e, t) {
                    if (!Array.isArray(e) || !Array.isArray(t)) {
                      return false;
                    }
                    if (e.length !== t.length) {
                      return false;
                    }
                    for (var n = 0; n < e.length; ++n) {
                      if (e[n] !== t[n]) {
                        return false;
                      }
                    }
                    return true;
                  }(this._fillGradientStops, e)) {
                    this._fillGradientStops = e;
                    this.styleID++;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "fontFamily", {
                get: function () {
                  return this._fontFamily;
                },
                set: function (e) {
                  if (this.fontFamily !== e) {
                    this._fontFamily = e;
                    this.styleID++;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "fontSize", {
                get: function () {
                  return this._fontSize;
                },
                set: function (e) {
                  if (this._fontSize !== e) {
                    this._fontSize = e;
                    this.styleID++;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "fontStyle", {
                get: function () {
                  return this._fontStyle;
                },
                set: function (e) {
                  if (this._fontStyle !== e) {
                    this._fontStyle = e;
                    this.styleID++;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "fontVariant", {
                get: function () {
                  return this._fontVariant;
                },
                set: function (e) {
                  if (this._fontVariant !== e) {
                    this._fontVariant = e;
                    this.styleID++;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "fontWeight", {
                get: function () {
                  return this._fontWeight;
                },
                set: function (e) {
                  if (this._fontWeight !== e) {
                    this._fontWeight = e;
                    this.styleID++;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "letterSpacing", {
                get: function () {
                  return this._letterSpacing;
                },
                set: function (e) {
                  if (this._letterSpacing !== e) {
                    this._letterSpacing = e;
                    this.styleID++;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "lineHeight", {
                get: function () {
                  return this._lineHeight;
                },
                set: function (e) {
                  if (this._lineHeight !== e) {
                    this._lineHeight = e;
                    this.styleID++;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "leading", {
                get: function () {
                  return this._leading;
                },
                set: function (e) {
                  if (this._leading !== e) {
                    this._leading = e;
                    this.styleID++;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "lineJoin", {
                get: function () {
                  return this._lineJoin;
                },
                set: function (e) {
                  if (this._lineJoin !== e) {
                    this._lineJoin = e;
                    this.styleID++;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "miterLimit", {
                get: function () {
                  return this._miterLimit;
                },
                set: function (e) {
                  if (this._miterLimit !== e) {
                    this._miterLimit = e;
                    this.styleID++;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "padding", {
                get: function () {
                  return this._padding;
                },
                set: function (e) {
                  if (this._padding !== e) {
                    this._padding = e;
                    this.styleID++;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "stroke", {
                get: function () {
                  return this._stroke;
                },
                set: function (e) {
                  var t = m(e);
                  if (this._stroke !== t) {
                    this._stroke = t;
                    this.styleID++;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "strokeThickness", {
                get: function () {
                  return this._strokeThickness;
                },
                set: function (e) {
                  if (this._strokeThickness !== e) {
                    this._strokeThickness = e;
                    this.styleID++;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "textBaseline", {
                get: function () {
                  return this._textBaseline;
                },
                set: function (e) {
                  if (this._textBaseline !== e) {
                    this._textBaseline = e;
                    this.styleID++;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "trim", {
                get: function () {
                  return this._trim;
                },
                set: function (e) {
                  if (this._trim !== e) {
                    this._trim = e;
                    this.styleID++;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "whiteSpace", {
                get: function () {
                  return this._whiteSpace;
                },
                set: function (e) {
                  if (this._whiteSpace !== e) {
                    this._whiteSpace = e;
                    this.styleID++;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "wordWrap", {
                get: function () {
                  return this._wordWrap;
                },
                set: function (e) {
                  if (this._wordWrap !== e) {
                    this._wordWrap = e;
                    this.styleID++;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "wordWrapWidth", {
                get: function () {
                  return this._wordWrapWidth;
                },
                set: function (e) {
                  if (this._wordWrapWidth !== e) {
                    this._wordWrapWidth = e;
                    this.styleID++;
                  }
                },
                enumerable: false,
                configurable: true
              });
              e.prototype.toFontString = function () {
                var e = typeof this.fontSize == "number" ? this.fontSize + "px" : this.fontSize;
                var t = this.fontFamily;
                if (!Array.isArray(this.fontFamily)) {
                  t = this.fontFamily.split(",");
                }
                for (var n = t.length - 1; n >= 0; n--) {
                  var r = t[n].trim();
                  if (!/([\"\'])[^\'\"]+\1/.test(r) && c.indexOf(r) < 0) {
                    r = "\"" + r + "\"";
                  }
                  t[n] = r;
                }
                return this.fontStyle + " " + this.fontVariant + " " + this.fontWeight + " " + e + " " + t.join(",");
              };
              return e;
            }();
            function p(e) {
              if (typeof e == "number") {
                return (0, h.hex2string)(e);
              } else {
                if (typeof e == "string" && e.indexOf("0x") === 0) {
                  e = e.replace("0x", "#");
                }
                return e;
              }
            }
            function m(e) {
              if (Array.isArray(e)) {
                for (var t = 0; t < e.length; ++t) {
                  e[t] = p(e[t]);
                }
                return e;
              }
              return p(e);
            }
            function f(e, t, n) {
              for (var r in n) {
                if (Array.isArray(t[r])) {
                  e[r] = t[r].slice();
                } else {
                  e[r] = t[r];
                }
              }
            }
            var _ = {
              willReadFrequently: true
            };
            var v = function () {
              function e(e, t, n, r, i, s, a, o, h) {
                this.text = e;
                this.style = t;
                this.width = n;
                this.height = r;
                this.lines = i;
                this.lineWidths = s;
                this.lineHeight = a;
                this.maxLineWidth = o;
                this.fontProperties = h;
              }
              e.measureText = function (t, n, r, i = e._canvas) {
                r = r == null ? n.wordWrap : r;
                var s = n.toFontString();
                var a = e.measureFont(s);
                if (a.fontSize === 0) {
                  a.fontSize = n.fontSize;
                  a.ascent = n.fontSize;
                }
                var o = i.getContext("2d", _);
                o.font = s;
                for (var h = (r ? e.wordWrap(t, n, i) : t).split(/(?:\r\n|\r|\n)/), l = new Array(h.length), d = 0, c = 0; c < h.length; c++) {
                  var u = o.measureText(h[c]).width + (h[c].length - 1) * n.letterSpacing;
                  l[c] = u;
                  d = Math.max(d, u);
                }
                var p = d + n.strokeThickness;
                if (n.dropShadow) {
                  p += n.dropShadowDistance;
                }
                var m = n.lineHeight || a.fontSize + n.strokeThickness;
                var f = Math.max(m, a.fontSize + n.strokeThickness) + (h.length - 1) * (m + n.leading);
                if (n.dropShadow) {
                  f += n.dropShadowDistance;
                }
                return new e(t, n, p, f, h, l, m + n.leading, d, a);
              };
              e.wordWrap = function (t, n, r = e._canvas) {
                var i = r.getContext("2d", _);
                var s = 0;
                var a = "";
                var o = "";
                var h = Object.create(null);
                var l = n.letterSpacing;
                var d = n.whiteSpace;
                var c = e.collapseSpaces(d);
                var u = e.collapseNewlines(d);
                var p = !c;
                var m = n.wordWrapWidth + l;
                for (var f = e.tokenize(t), v = 0; v < f.length; v++) {
                  var y = f[v];
                  if (e.isNewline(y)) {
                    if (!u) {
                      o += e.addLine(a);
                      p = !c;
                      a = "";
                      s = 0;
                      continue;
                    }
                    y = " ";
                  }
                  if (c) {
                    var g = e.isBreakingSpace(y);
                    var w = e.isBreakingSpace(a[a.length - 1]);
                    if (g && w) {
                      continue;
                    }
                  }
                  var x = e.getFromCache(y, l, h, i);
                  if (x > m) {
                    if (a !== "") {
                      o += e.addLine(a);
                      a = "";
                      s = 0;
                    }
                    if (e.canBreakWords(y, n.breakWords)) {
                      for (var b = e.wordWrapSplit(y), T = 0; T < b.length; T++) {
                        var A = b[T];
                        for (var C = 1; b[T + C];) {
                          var S = b[T + C];
                          var E = A[A.length - 1];
                          if (e.canBreakChars(E, S, y, T, n.breakWords)) {
                            break;
                          }
                          A += S;
                          C++;
                        }
                        T += A.length - 1;
                        var O = e.getFromCache(A, l, h, i);
                        if (O + s > m) {
                          o += e.addLine(a);
                          p = false;
                          a = "";
                          s = 0;
                        }
                        a += A;
                        s += O;
                      }
                    } else {
                      if (a.length > 0) {
                        o += e.addLine(a);
                        a = "";
                        s = 0;
                      }
                      var k = v === f.length - 1;
                      o += e.addLine(y, !k);
                      p = false;
                      a = "";
                      s = 0;
                    }
                  } else {
                    if (x + s > m) {
                      p = false;
                      o += e.addLine(a);
                      a = "";
                      s = 0;
                    }
                    if (a.length > 0 || !e.isBreakingSpace(y) || p) {
                      a += y;
                      s += x;
                    }
                  }
                }
                return o + e.addLine(a, false);
              };
              e.addLine = function (t, n = true) {
                t = e.trimRight(t);
                if (n) {
                  return t + "\n";
                } else {
                  return t;
                }
              };
              e.getFromCache = function (e, t, n, r) {
                var i = n[e];
                if (typeof i != "number") {
                  var s = e.length * t;
                  i = r.measureText(e).width + s;
                  n[e] = i;
                }
                return i;
              };
              e.collapseSpaces = function (e) {
                return e === "normal" || e === "pre-line";
              };
              e.collapseNewlines = function (e) {
                return e === "normal";
              };
              e.trimRight = function (t) {
                if (typeof t != "string") {
                  return "";
                }
                for (var n = t.length - 1; n >= 0; n--) {
                  var r = t[n];
                  if (!e.isBreakingSpace(r)) {
                    break;
                  }
                  t = t.slice(0, -1);
                }
                return t;
              };
              e.isNewline = function (t) {
                return typeof t == "string" && e._newlines.indexOf(t.charCodeAt(0)) >= 0;
              };
              e.isBreakingSpace = function (t, n) {
                return typeof t == "string" && e._breakingSpaces.indexOf(t.charCodeAt(0)) >= 0;
              };
              e.tokenize = function (t) {
                var n = [];
                var r = "";
                if (typeof t != "string") {
                  return n;
                }
                for (var i = 0; i < t.length; i++) {
                  var s = t[i];
                  var a = t[i + 1];
                  if (e.isBreakingSpace(s, a) || e.isNewline(s)) {
                    if (r !== "") {
                      n.push(r);
                      r = "";
                    }
                    n.push(s);
                  } else {
                    r += s;
                  }
                }
                if (r !== "") {
                  n.push(r);
                }
                return n;
              };
              e.canBreakWords = function (e, t) {
                return t;
              };
              e.canBreakChars = function (e, t, n, r, i) {
                return true;
              };
              e.wordWrapSplit = function (e) {
                return e.split("");
              };
              e.measureFont = function (t) {
                if (e._fonts[t]) {
                  return e._fonts[t];
                }
                var n = {
                  ascent: 0,
                  descent: 0,
                  fontSize: 0
                };
                var r = e._canvas;
                var i = e._context;
                i.font = t;
                var s = e.METRICS_STRING + e.BASELINE_SYMBOL;
                var a = Math.ceil(i.measureText(s).width);
                var o = Math.ceil(i.measureText(e.BASELINE_SYMBOL).width);
                var h = Math.ceil(e.HEIGHT_MULTIPLIER * o);
                o = o * e.BASELINE_MULTIPLIER | 0;
                r.width = a;
                r.height = h;
                i.fillStyle = "#f00";
                i.fillRect(0, 0, a, h);
                i.font = t;
                i.textBaseline = "alphabetic";
                i.fillStyle = "#000";
                i.fillText(s, 0, o);
                var l = i.getImageData(0, 0, a, h).data;
                var d = l.length;
                var c = a * 4;
                var u = 0;
                var p = 0;
                var m = false;
                for (u = 0; u < o; ++u) {
                  for (var f = 0; f < c; f += 4) {
                    if (l[p + f] !== 255) {
                      m = true;
                      break;
                    }
                  }
                  if (m) {
                    break;
                  }
                  p += c;
                }
                n.ascent = o - u;
                p = d - c;
                m = false;
                u = h;
                for (; u > o; --u) {
                  for (f = 0; f < c; f += 4) {
                    if (l[p + f] !== 255) {
                      m = true;
                      break;
                    }
                  }
                  if (m) {
                    break;
                  }
                  p -= c;
                }
                n.descent = u - o;
                n.fontSize = n.ascent + n.descent;
                e._fonts[t] = n;
                return n;
              };
              e.clearMetrics = function (t = "") {
                if (t) {
                  delete e._fonts[t];
                } else {
                  e._fonts = {};
                }
              };
              Object.defineProperty(e, "_canvas", {
                get: function () {
                  if (!e.__canvas) {
                    var t = undefined;
                    try {
                      var n = new OffscreenCanvas(0, 0);
                      var r = n.getContext("2d", _);
                      if (r && r.measureText) {
                        e.__canvas = n;
                        return n;
                      }
                      t = a.W0.ADAPTER.createCanvas();
                    } catch (e) {
                      t = a.W0.ADAPTER.createCanvas();
                    }
                    t.width = t.height = 10;
                    e.__canvas = t;
                  }
                  return e.__canvas;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e, "_context", {
                get: function () {
                  e.__context ||= e._canvas.getContext("2d", _);
                  return e.__context;
                },
                enumerable: false,
                configurable: true
              });
              return e;
            }();
            v._fonts = {};
            v.METRICS_STRING = "|ÉqÅ";
            v.BASELINE_SYMBOL = "M";
            v.BASELINE_MULTIPLIER = 1.4;
            v.HEIGHT_MULTIPLIER = 2;
            v._newlines = [10, 13];
            v._breakingSpaces = [9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287, 12288];
            var y = {
              texture: true,
              children: false,
              baseTexture: true
            };
            var g = function (e) {
              function t(t, n, r) {
                var i = this;
                var h = false;
                if (!r) {
                  r = a.W0.ADAPTER.createCanvas();
                  h = true;
                }
                r.width = 3;
                r.height = 3;
                var l = s.gP.from(r);
                l.orig = new o.M_();
                l.trim = new o.M_();
                (i = e.call(this, l) || this)._ownCanvas = h;
                i.canvas = r;
                i.context = r.getContext("2d", {
                  willReadFrequently: true
                });
                i._resolution = a.W0.RESOLUTION;
                i._autoResolution = true;
                i._text = null;
                i._style = null;
                i._styleListener = null;
                i._font = "";
                i.text = t;
                i.style = n;
                i.localStyleID = -1;
                return i;
              }
              (function (e, t) {
                function n() {
                  this.constructor = e;
                }
                l(e, t);
                e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
              })(t, e);
              t.prototype.updateText = function (e) {
                var n = this._style;
                if (this.localStyleID !== n.styleID) {
                  this.dirty = true;
                  this.localStyleID = n.styleID;
                }
                if (this.dirty || !e) {
                  this._font = this._style.toFontString();
                  var r;
                  var i;
                  var s = this.context;
                  var a = v.measureText(this._text || " ", this._style, this._style.wordWrap, this.canvas);
                  var o = a.width;
                  var l = a.height;
                  var d = a.lines;
                  var c = a.lineHeight;
                  var u = a.lineWidths;
                  var p = a.maxLineWidth;
                  var m = a.fontProperties;
                  this.canvas.width = Math.ceil(Math.ceil(Math.max(1, o) + n.padding * 2) * this._resolution);
                  this.canvas.height = Math.ceil(Math.ceil(Math.max(1, l) + n.padding * 2) * this._resolution);
                  s.scale(this._resolution, this._resolution);
                  s.clearRect(0, 0, this.canvas.width, this.canvas.height);
                  s.font = this._font;
                  s.lineWidth = n.strokeThickness;
                  s.textBaseline = n.textBaseline;
                  s.lineJoin = n.lineJoin;
                  s.miterLimit = n.miterLimit;
                  for (var f = n.dropShadow ? 2 : 1, _ = 0; _ < f; ++_) {
                    var y = n.dropShadow && _ === 0;
                    var g = y ? Math.ceil(Math.max(1, l) + n.padding * 2) : 0;
                    var w = g * this._resolution;
                    if (y) {
                      s.fillStyle = "black";
                      s.strokeStyle = "black";
                      var x = n.dropShadowColor;
                      var b = (0, h.hex2rgb)(typeof x == "number" ? x : (0, h.string2hex)(x));
                      var T = n.dropShadowBlur * this._resolution;
                      var A = n.dropShadowDistance * this._resolution;
                      s.shadowColor = "rgba(" + b[0] * 255 + "," + b[1] * 255 + "," + b[2] * 255 + "," + n.dropShadowAlpha + ")";
                      s.shadowBlur = T;
                      s.shadowOffsetX = Math.cos(n.dropShadowAngle) * A;
                      s.shadowOffsetY = Math.sin(n.dropShadowAngle) * A + w;
                    } else {
                      s.fillStyle = this._generateFillStyle(n, d, a);
                      s.strokeStyle = n.stroke;
                      s.shadowColor = "black";
                      s.shadowBlur = 0;
                      s.shadowOffsetX = 0;
                      s.shadowOffsetY = 0;
                    }
                    var C = (c - m.fontSize) / 2;
                    if (!t.nextLineHeightBehavior || c - m.fontSize < 0) {
                      C = 0;
                    }
                    for (var S = 0; S < d.length; S++) {
                      r = n.strokeThickness / 2;
                      i = n.strokeThickness / 2 + S * c + m.ascent + C;
                      if (n.align === "right") {
                        r += p - u[S];
                      } else if (n.align === "center") {
                        r += (p - u[S]) / 2;
                      }
                      if (n.stroke && n.strokeThickness) {
                        this.drawLetterSpacing(d[S], r + n.padding, i + n.padding - g, true);
                      }
                      if (n.fill) {
                        this.drawLetterSpacing(d[S], r + n.padding, i + n.padding - g);
                      }
                    }
                  }
                  this.updateTexture();
                }
              };
              t.prototype.drawLetterSpacing = function (e, n, r, i = false) {
                var s = this._style.letterSpacing;
                var a = t.experimentalLetterSpacing && ("letterSpacing" in CanvasRenderingContext2D.prototype || "textLetterSpacing" in CanvasRenderingContext2D.prototype);
                if (s === 0 || a) {
                  if (a) {
                    this.context.letterSpacing = s;
                    this.context.textLetterSpacing = s;
                  }
                  if (i) {
                    this.context.strokeText(e, n, r);
                  } else {
                    this.context.fillText(e, n, r);
                  }
                  return;
                }
                var o = n;
                for (var h = Array.from ? Array.from(e) : e.split(""), l = this.context.measureText(e).width, d = 0, c = 0; c < h.length; ++c) {
                  var u = h[c];
                  if (i) {
                    this.context.strokeText(u, o, r);
                  } else {
                    this.context.fillText(u, o, r);
                  }
                  var p = "";
                  for (var m = c + 1; m < h.length; ++m) {
                    p += h[m];
                  }
                  o += l - (d = this.context.measureText(p).width) + s;
                  l = d;
                }
              };
              t.prototype.updateTexture = function () {
                var e = this.canvas;
                if (this._style.trim) {
                  var t = (0, h.trimCanvas)(e);
                  if (t.data) {
                    e.width = t.width;
                    e.height = t.height;
                    this.context.putImageData(t.data, 0, 0);
                  }
                }
                var n = this._texture;
                var r = this._style;
                var i = r.trim ? 0 : r.padding;
                var s = n.baseTexture;
                n.trim.width = n._frame.width = e.width / this._resolution;
                n.trim.height = n._frame.height = e.height / this._resolution;
                n.trim.x = -i;
                n.trim.y = -i;
                n.orig.width = n._frame.width - i * 2;
                n.orig.height = n._frame.height - i * 2;
                this._onTextureUpdate();
                s.setRealSize(e.width, e.height, this._resolution);
                n.updateUvs();
                this.dirty = false;
              };
              t.prototype._render = function (t) {
                if (this._autoResolution && this._resolution !== t.resolution) {
                  this._resolution = t.resolution;
                  this.dirty = true;
                }
                this.updateText(true);
                e.prototype._render.call(this, t);
              };
              t.prototype.updateTransform = function () {
                this.updateText(true);
                e.prototype.updateTransform.call(this);
              };
              t.prototype.getBounds = function (t, n) {
                this.updateText(true);
                if (this._textureID === -1) {
                  t = false;
                }
                return e.prototype.getBounds.call(this, t, n);
              };
              t.prototype.getLocalBounds = function (t) {
                this.updateText(true);
                return e.prototype.getLocalBounds.call(this, t);
              };
              t.prototype._calculateBounds = function () {
                this.calculateVertices();
                this._bounds.addQuad(this.vertexData);
              };
              t.prototype._generateFillStyle = function (e, t, n) {
                var i;
                var s = e.fill;
                if (!Array.isArray(s)) {
                  return s;
                }
                if (s.length === 1) {
                  return s[0];
                }
                var a = e.dropShadow ? e.dropShadowDistance : 0;
                var o = e.padding || 0;
                var h = this.canvas.width / this._resolution - a - o * 2;
                var l = this.canvas.height / this._resolution - a - o * 2;
                var d = s.slice();
                var c = e.fillGradientStops.slice();
                if (!c.length) {
                  for (var u = d.length + 1, p = 1; p < u; ++p) {
                    c.push(p / u);
                  }
                }
                d.unshift(s[0]);
                c.unshift(0);
                d.push(s[s.length - 1]);
                c.push(1);
                if (e.fillGradientType === r.LINEAR_VERTICAL) {
                  i = this.context.createLinearGradient(h / 2, o, h / 2, l + o);
                  var m = n.fontProperties.fontSize + e.strokeThickness;
                  for (p = 0; p < t.length; p++) {
                    var f = n.lineHeight * (p - 1) + m;
                    var _ = n.lineHeight * p;
                    var v = _;
                    if (p > 0 && f > _) {
                      v = (_ + f) / 2;
                    }
                    var y = _ + m;
                    var g = n.lineHeight * (p + 1);
                    var w = y;
                    if (p + 1 < t.length && g < y) {
                      w = (y + g) / 2;
                    }
                    var x = (w - v) / l;
                    for (var b = 0; b < d.length; b++) {
                      var T;
                      T = typeof c[b] == "number" ? c[b] : b / d.length;
                      var A = Math.min(1, Math.max(0, v / l + T * x));
                      A = Number(A.toFixed(5));
                      i.addColorStop(A, d[b]);
                    }
                  }
                } else {
                  i = this.context.createLinearGradient(o, l / 2, h + o, l / 2);
                  var C = d.length + 1;
                  var S = 1;
                  for (p = 0; p < d.length; p++) {
                    var E;
                    E = typeof c[p] == "number" ? c[p] : S / C;
                    i.addColorStop(E, d[p]);
                    S++;
                  }
                }
                return i;
              };
              t.prototype.destroy = function (t) {
                if (typeof t == "boolean") {
                  t = {
                    children: t
                  };
                }
                t = Object.assign({}, y, t);
                e.prototype.destroy.call(this, t);
                if (this._ownCanvas) {
                  this.canvas.height = this.canvas.width = 0;
                }
                this.context = null;
                this.canvas = null;
                this._style = null;
              };
              Object.defineProperty(t.prototype, "width", {
                get: function () {
                  this.updateText(true);
                  return Math.abs(this.scale.x) * this._texture.orig.width;
                },
                set: function (e) {
                  this.updateText(true);
                  var t = (0, h.sign)(this.scale.x) || 1;
                  this.scale.x = t * e / this._texture.orig.width;
                  this._width = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "height", {
                get: function () {
                  this.updateText(true);
                  return Math.abs(this.scale.y) * this._texture.orig.height;
                },
                set: function (e) {
                  this.updateText(true);
                  var t = (0, h.sign)(this.scale.y) || 1;
                  this.scale.y = t * e / this._texture.orig.height;
                  this._height = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "style", {
                get: function () {
                  return this._style;
                },
                set: function (e) {
                  e = e || {};
                  this._style = e instanceof u ? e : new u(e);
                  this.localStyleID = -1;
                  this.dirty = true;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "text", {
                get: function () {
                  return this._text;
                },
                set: function (e) {
                  e = String(e == null ? "" : e);
                  if (this._text !== e) {
                    this._text = e;
                    this.dirty = true;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "resolution", {
                get: function () {
                  return this._resolution;
                },
                set: function (e) {
                  this._autoResolution = false;
                  if (this._resolution !== e) {
                    this._resolution = e;
                    this.dirty = true;
                  }
                },
                enumerable: false,
                configurable: true
              });
              t.nextLineHeightBehavior = false;
              t.experimentalLetterSpacing = false;
              return t;
            }(i.k);
          }
    });
})();
