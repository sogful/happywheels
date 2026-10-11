(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        83169(e, t, n) {
            "use strict";
        
            n.d(t, {
              AW: () => y,
              Bx: () => b,
              Kk: () => _,
              T7: () => S,
              Tt: () => f,
              lk: () => m,
              oD: () => E,
              xb: () => p
            });
            var r = n(38499);
            var i = n(55323);
            var s = n(49907);
            var a = n(88604);
            var o = n(97831);
            var h = n(72479);
            var l = n(11313);
            var d = n(9171);
            var c = n(1235);
            function u(e, t) {
              u = Object.setPrototypeOf || {
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
              return u(e, t);
            }
            function p() {
              this.info = [];
              this.common = [];
              this.page = [];
              this.char = [];
              this.kerning = [];
              this.distanceField = [];
            }
            var m = function () {
              function e() {}
              e.test = function (e) {
                return typeof e == "string" && e.indexOf("info face=") === 0;
              };
              e.parse = function (e) {
                var t = e.match(/^[a-z]+\s+.+$/gm);
                var n = {
                  info: [],
                  common: [],
                  page: [],
                  char: [],
                  chars: [],
                  kerning: [],
                  kernings: [],
                  distanceField: []
                };
                for (var r in t) {
                  var i = t[r].match(/^[a-z]+/gm)[0];
                  var s = t[r].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm);
                  var a = {};
                  for (var o in s) {
                    var h = s[o].split("=");
                    var l = h[0];
                    var d = h[1].replace(/"/gm, "");
                    var c = parseFloat(d);
                    var u = isNaN(c) ? d : c;
                    a[l] = u;
                  }
                  n[i].push(a);
                }
                var m = new p();
                n.info.forEach(function (e) {
                  return m.info.push({
                    face: e.face,
                    size: parseInt(e.size, 10)
                  });
                });
                n.common.forEach(function (e) {
                  return m.common.push({
                    lineHeight: parseInt(e.lineHeight, 10)
                  });
                });
                n.page.forEach(function (e) {
                  return m.page.push({
                    id: parseInt(e.id, 10),
                    file: e.file
                  });
                });
                n.char.forEach(function (e) {
                  return m.char.push({
                    id: parseInt(e.id, 10),
                    page: parseInt(e.page, 10),
                    x: parseInt(e.x, 10),
                    y: parseInt(e.y, 10),
                    width: parseInt(e.width, 10),
                    height: parseInt(e.height, 10),
                    xoffset: parseInt(e.xoffset, 10),
                    yoffset: parseInt(e.yoffset, 10),
                    xadvance: parseInt(e.xadvance, 10)
                  });
                });
                n.kerning.forEach(function (e) {
                  return m.kerning.push({
                    first: parseInt(e.first, 10),
                    second: parseInt(e.second, 10),
                    amount: parseInt(e.amount, 10)
                  });
                });
                n.distanceField.forEach(function (e) {
                  return m.distanceField.push({
                    distanceRange: parseInt(e.distanceRange, 10),
                    fieldType: e.fieldType
                  });
                });
                return m;
              };
              return e;
            }();
            var f = function () {
              function e() {}
              e.test = function (e) {
                return e instanceof XMLDocument && e.getElementsByTagName("page").length && e.getElementsByTagName("info")[0].getAttribute("face") !== null;
              };
              e.parse = function (e) {
                var t = new p();
                for (var n = e.getElementsByTagName("info"), r = e.getElementsByTagName("common"), i = e.getElementsByTagName("page"), s = e.getElementsByTagName("char"), a = e.getElementsByTagName("kerning"), o = e.getElementsByTagName("distanceField"), h = 0; h < n.length; h++) {
                  t.info.push({
                    face: n[h].getAttribute("face"),
                    size: parseInt(n[h].getAttribute("size"), 10)
                  });
                }
                for (h = 0; h < r.length; h++) {
                  t.common.push({
                    lineHeight: parseInt(r[h].getAttribute("lineHeight"), 10)
                  });
                }
                for (h = 0; h < i.length; h++) {
                  t.page.push({
                    id: parseInt(i[h].getAttribute("id"), 10) || 0,
                    file: i[h].getAttribute("file")
                  });
                }
                for (h = 0; h < s.length; h++) {
                  var l = s[h];
                  t.char.push({
                    id: parseInt(l.getAttribute("id"), 10),
                    page: parseInt(l.getAttribute("page"), 10) || 0,
                    x: parseInt(l.getAttribute("x"), 10),
                    y: parseInt(l.getAttribute("y"), 10),
                    width: parseInt(l.getAttribute("width"), 10),
                    height: parseInt(l.getAttribute("height"), 10),
                    xoffset: parseInt(l.getAttribute("xoffset"), 10),
                    yoffset: parseInt(l.getAttribute("yoffset"), 10),
                    xadvance: parseInt(l.getAttribute("xadvance"), 10)
                  });
                }
                for (h = 0; h < a.length; h++) {
                  t.kerning.push({
                    first: parseInt(a[h].getAttribute("first"), 10),
                    second: parseInt(a[h].getAttribute("second"), 10),
                    amount: parseInt(a[h].getAttribute("amount"), 10)
                  });
                }
                for (h = 0; h < o.length; h++) {
                  t.distanceField.push({
                    fieldType: o[h].getAttribute("fieldType"),
                    distanceRange: parseInt(o[h].getAttribute("distanceRange"), 10)
                  });
                }
                return t;
              };
              return e;
            }();
            var _ = function () {
              function e() {}
              e.test = function (e) {
                if (typeof e == "string" && e.indexOf("<font>") > -1) {
                  var t = new globalThis.DOMParser().parseFromString(e, "text/xml");
                  return f.test(t);
                }
                return false;
              };
              e.parse = function (e) {
                var t = new globalThis.DOMParser().parseFromString(e, "text/xml");
                return f.parse(t);
              };
              return e;
            }();
            var v = [m, f, _];
            function y(e) {
              for (var t = 0; t < v.length; t++) {
                if (v[t].test(e)) {
                  return v[t];
                }
              }
              return null;
            }
            function g(e, t, n, r, i, s, o) {
              var l = n.text;
              var d = n.fontProperties;
              t.translate(r, i);
              t.scale(s, s);
              var c = o.strokeThickness / 2;
              var u = -o.strokeThickness / 2;
              t.font = o.toFontString();
              t.lineWidth = o.strokeThickness;
              t.textBaseline = o.textBaseline;
              t.lineJoin = o.lineJoin;
              t.miterLimit = o.miterLimit;
              t.fillStyle = function (e, t, n, r, i, s) {
                var a;
                var o = n.fill;
                if (!Array.isArray(o)) {
                  return o;
                }
                if (o.length === 1) {
                  return o[0];
                }
                var l = n.dropShadow ? n.dropShadowDistance : 0;
                var d = n.padding || 0;
                var c = e.width / r - l - d * 2;
                var u = e.height / r - l - d * 2;
                var p = o.slice();
                var m = n.fillGradientStops.slice();
                if (!m.length) {
                  for (var f = p.length + 1, _ = 1; _ < f; ++_) {
                    m.push(_ / f);
                  }
                }
                p.unshift(o[0]);
                m.unshift(0);
                p.push(o[o.length - 1]);
                m.push(1);
                if (n.fillGradientType === h.T.LINEAR_VERTICAL) {
                  a = t.createLinearGradient(c / 2, d, c / 2, u + d);
                  var v = 0;
                  var y = (s.fontProperties.fontSize + n.strokeThickness) / u;
                  for (_ = 0; _ < i.length; _++) {
                    var g = s.lineHeight * _;
                    for (var w = 0; w < p.length; w++) {
                      var x = g / u + (typeof m[w] == "number" ? m[w] : w / p.length) * y;
                      var b = Math.max(v, x);
                      b = Math.min(b, 1);
                      a.addColorStop(b, p[w]);
                      v = b;
                    }
                  }
                } else {
                  a = t.createLinearGradient(d, u / 2, c + d, u / 2);
                  var T = p.length + 1;
                  var A = 1;
                  for (_ = 0; _ < p.length; _++) {
                    var C;
                    C = typeof m[_] == "number" ? m[_] : A / T;
                    a.addColorStop(C, p[_]);
                    A++;
                  }
                }
                return a;
              }(e, t, o, s, [l], n);
              t.strokeStyle = o.stroke;
              if (o.dropShadow) {
                var p = o.dropShadowColor;
                var m = (0, a.hex2rgb)(typeof p == "number" ? p : (0, a.string2hex)(p));
                var f = o.dropShadowBlur * s;
                var _ = o.dropShadowDistance * s;
                t.shadowColor = "rgba(" + m[0] * 255 + "," + m[1] * 255 + "," + m[2] * 255 + "," + o.dropShadowAlpha + ")";
                t.shadowBlur = f;
                t.shadowOffsetX = Math.cos(o.dropShadowAngle) * _;
                t.shadowOffsetY = Math.sin(o.dropShadowAngle) * _;
              } else {
                t.shadowColor = "black";
                t.shadowBlur = 0;
                t.shadowOffsetX = 0;
                t.shadowOffsetY = 0;
              }
              if (o.stroke && o.strokeThickness) {
                t.strokeText(l, c, u + n.lineHeight - d.descent);
              }
              if (o.fill) {
                t.fillText(l, c, u + n.lineHeight - d.descent);
              }
              t.setTransform(1, 0, 0, 1, 0, 0);
              t.fillStyle = "rgba(0, 0, 0, 0)";
            }
            function w(e) {
              if (Array.from) {
                return Array.from(e);
              } else {
                return e.split("");
              }
            }
            function x(e) {
              if (e.codePointAt) {
                return e.codePointAt(0);
              } else {
                return e.charCodeAt(0);
              }
            }
            var b = function () {
              function e(e, t, n) {
                var i;
                var h = e.info[0];
                var d = e.common[0];
                var c = e.page[0];
                var u = e.distanceField[0];
                var p = (0, a.getResolutionOfUrl)(c.file);
                var m = {};
                this._ownsTextures = n;
                this.font = h.face;
                this.size = h.size;
                this.lineHeight = d.lineHeight / p;
                this.chars = {};
                this.pageTextures = m;
                for (var f = 0; f < e.page.length; f++) {
                  var _ = e.page[f];
                  var v = _.id;
                  var y = _.file;
                  m[v] = t instanceof Array ? t[f] : t[y];
                  if ((u == null ? undefined : u.fieldType) && u.fieldType !== "none") {
                    m[v].baseTexture.alphaMode = l.Gk.NO_PREMULTIPLIED_ALPHA;
                    m[v].baseTexture.mipmap = l.E8.OFF;
                  }
                }
                for (f = 0; f < e.char.length; f++) {
                  var g = e.char[f];
                  v = g.id;
                  var w = g.page;
                  var x = e.char[f];
                  var b = x.x;
                  var T = x.y;
                  var A = x.width;
                  var C = x.height;
                  var S = x.xoffset;
                  var E = x.yoffset;
                  var O = x.xadvance;
                  b /= p;
                  T /= p;
                  A /= p;
                  C /= p;
                  S /= p;
                  E /= p;
                  O /= p;
                  var k = new r.M_(b + m[w].frame.x / p, T + m[w].frame.y / p, A, C);
                  this.chars[v] = {
                    xOffset: S,
                    yOffset: E,
                    xAdvance: O,
                    kerning: {},
                    texture: new o.gP(m[w].baseTexture, k),
                    page: w
                  };
                }
                for (f = 0; f < e.kerning.length; f++) {
                  var P = e.kerning[f];
                  var M = P.first;
                  var R = P.second;
                  var I = P.amount;
                  M /= p;
                  R /= p;
                  I /= p;
                  if (this.chars[R]) {
                    this.chars[R].kerning[M] = I;
                  }
                }
                this.distanceFieldRange = u == null ? undefined : u.distanceRange;
                this.distanceFieldType = ((i = u == null ? undefined : u.fieldType) === null || i === undefined ? undefined : i.toLowerCase()) ?? "none";
              }
              e.prototype.destroy = function () {
                for (var e in this.chars) {
                  this.chars[e].texture.destroy();
                  this.chars[e].texture = null;
                }
                for (var e in this.pageTextures) {
                  if (this._ownsTextures) {
                    this.pageTextures[e].destroy(true);
                  }
                  this.pageTextures[e] = null;
                }
                this.chars = null;
                this.pageTextures = null;
              };
              e.install = function (t, n, r) {
                var i;
                if (t instanceof p) {
                  i = t;
                } else {
                  var s = y(t);
                  if (!s) {
                    throw new Error("Unrecognized data format for font.");
                  }
                  i = s.parse(t);
                }
                if (n instanceof o.gP) {
                  n = [n];
                }
                var a = new e(i, n, r);
                e.available[a.font] = a;
                return a;
              };
              e.uninstall = function (t) {
                var n = e.available[t];
                if (!n) {
                  throw new Error("No font found named '" + t + "'");
                }
                n.destroy();
                delete e.available[t];
              };
              e.from = function (t, n, r) {
                if (!t) {
                  throw new Error("[BitmapFont] Property `name` is required.");
                }
                var s = Object.assign({}, e.defaultOptions, r);
                var a = s.chars;
                var l = s.padding;
                var d = s.resolution;
                var c = s.textureWidth;
                var u = s.textureHeight;
                var m = function (e) {
                  if (typeof e == "string") {
                    e = [e];
                  }
                  var t = [];
                  for (var n = 0, r = e.length; n < r; n++) {
                    var i = e[n];
                    if (Array.isArray(i)) {
                      if (i.length !== 2) {
                        throw new Error("[BitmapFont]: Invalid character range length, expecting 2 got " + i.length + ".");
                      }
                      var s = i[0].charCodeAt(0);
                      var a = i[1].charCodeAt(0);
                      if (a < s) {
                        throw new Error("[BitmapFont]: Invalid character range.");
                      }
                      for (var o = s, h = a; o <= h; o++) {
                        t.push(String.fromCharCode(o));
                      }
                    } else {
                      t.push.apply(t, w(i));
                    }
                  }
                  if (t.length === 0) {
                    throw new Error("[BitmapFont]: Empty set when resolving characters.");
                  }
                  return t;
                }(a);
                var f = n instanceof h.xJ ? n : new h.xJ(n);
                var _ = c;
                var v = new p();
                v.info[0] = {
                  face: f.fontFamily,
                  size: f.fontSize
                };
                v.common[0] = {
                  lineHeight: f.fontSize
                };
                var y;
                var b;
                var T;
                var A = 0;
                var C = 0;
                var S = 0;
                var E = [];
                for (var O = 0; O < m.length; O++) {
                  if (!y) {
                    (y = i.W0.ADAPTER.createCanvas()).width = c;
                    y.height = u;
                    b = y.getContext("2d");
                    T = new o.t5(y, {
                      resolution: d
                    });
                    E.push(new o.gP(T));
                    v.page.push({
                      id: E.length - 1,
                      file: ""
                    });
                  }
                  var k = m[O];
                  var P = h.Z1.measureText(k, f, false, y);
                  var M = P.width;
                  var R = Math.ceil(P.height);
                  var I = Math.ceil((f.fontStyle === "italic" ? 2 : 1) * M);
                  if (C >= u - R * d) {
                    if (C === 0) {
                      throw new Error("[BitmapFont] textureHeight " + u + "px is too small (fontFamily: '" + f.fontFamily + "', fontSize: " + f.fontSize + "px, char: '" + k + "')");
                    }
                    --O;
                    y = null;
                    b = null;
                    T = null;
                    C = 0;
                    A = 0;
                    S = 0;
                  } else {
                    S = Math.max(R + P.fontProperties.descent, S);
                    if (I * d + A >= _) {
                      if (A === 0) {
                        throw new Error("[BitmapFont] textureWidth " + c + "px is too small (fontFamily: '" + f.fontFamily + "', fontSize: " + f.fontSize + "px, char: '" + k + "')");
                      }
                      --O;
                      C += S * d;
                      C = Math.ceil(C);
                      A = 0;
                      S = 0;
                    } else {
                      g(y, b, P, A, C, d, f);
                      var L = x(P.text);
                      v.char.push({
                        id: L,
                        page: E.length - 1,
                        x: A / d,
                        y: C / d,
                        width: I,
                        height: R,
                        xoffset: 0,
                        yoffset: 0,
                        xadvance: Math.ceil(M - (f.dropShadow ? f.dropShadowDistance : 0) - (f.stroke ? f.strokeThickness : 0))
                      });
                      A += (I + l * 2) * d;
                      A = Math.ceil(A);
                    }
                  }
                }
                if (!(r == null ? undefined : r.skipKerning)) {
                  O = 0;
                  for (var j = m.length; O < j; O++) {
                    var B = m[O];
                    for (var D = 0; D < j; D++) {
                      var F = m[D];
                      var N = b.measureText(B).width;
                      var G = b.measureText(F).width;
                      var U = b.measureText(B + F).width - (N + G);
                      if (U) {
                        v.kerning.push({
                          first: x(B),
                          second: x(F),
                          amount: U
                        });
                      }
                    }
                  }
                }
                var V = new e(v, E, true);
                if (e.available[t] !== undefined) {
                  e.uninstall(t);
                }
                e.available[t] = V;
                return V;
              };
              e.ALPHA = [["a", "z"], ["A", "Z"], " "];
              e.NUMERIC = [["0", "9"]];
              e.ALPHANUMERIC = [["a", "z"], ["A", "Z"], ["0", "9"], " "];
              e.ASCII = [[" ", "~"]];
              e.defaultOptions = {
                resolution: 1,
                textureWidth: 512,
                textureHeight: 512,
                padding: 4,
                chars: e.ALPHANUMERIC
              };
              e.available = {};
              return e;
            }();
            var T = [];
            var A = [];
            var C = [];
            var S = function (e) {
              function t(n, s = {}) {
                var a = e.call(this) || this;
                a._tint = 16777215;
                var o = Object.assign({}, t.styleDefaults, s);
                var h = o.align;
                var l = o.tint;
                var d = o.maxWidth;
                var c = o.letterSpacing;
                var u = o.fontName;
                var p = o.fontSize;
                if (!b.available[u]) {
                  throw new Error("Missing BitmapFont \"" + u + "\"");
                }
                a._activePagesMeshData = [];
                a._textWidth = 0;
                a._textHeight = 0;
                a._align = h;
                a._tint = l;
                a._font = undefined;
                a._fontName = u;
                a._fontSize = p;
                a.text = n;
                a._maxWidth = d;
                a._maxLineHeight = 0;
                a._letterSpacing = c;
                a._anchor = new r.oA(function () {
                  a.dirty = true;
                }, a, 0, 0);
                a._roundPixels = i.W0.ROUND_PIXELS;
                a.dirty = true;
                a._resolution = i.W0.RESOLUTION;
                a._autoResolution = true;
                a._textureCache = {};
                return a;
              }
              (function (e, t) {
                function n() {
                  this.constructor = e;
                }
                u(e, t);
                e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
              })(t, e);
              t.prototype.updateText = function () {
                var t = b.available[this._fontName];
                var n = this.fontSize;
                var i = n / t.size;
                var h = new r.bR();
                var d = [];
                var c = [];
                var u = [];
                for (var p = w(this._text.replace(/(?:\r\n|\r)/g, "\n") || " "), m = this._maxWidth * t.size / n, f = t.distanceFieldType === "none" ? T : A, _ = null, v = 0, y = 0, g = 0, S = -1, E = 0, O = 0, k = 0, P = 0, M = 0; M < p.length; M++) {
                  var R = x($ = p[M]);
                  if (/(?:\s)/.test($)) {
                    S = M;
                    E = v;
                    P++;
                  }
                  if ($ !== "\r" && $ !== "\n") {
                    var I = t.chars[R];
                    if (I) {
                      if (_ && I.kerning[_]) {
                        h.x += I.kerning[_];
                      }
                      var L = C.pop() || {
                        texture: o.gP.EMPTY,
                        line: 0,
                        charCode: 0,
                        prevSpaces: 0,
                        position: new r.bR()
                      };
                      L.texture = I.texture;
                      L.line = g;
                      L.charCode = R;
                      L.position.x = h.x + I.xOffset + this._letterSpacing / 2;
                      L.position.y = h.y + I.yOffset;
                      L.prevSpaces = P;
                      d.push(L);
                      v = L.position.x + Math.max(I.xAdvance - I.xOffset, I.texture.orig.width);
                      h.x += I.xAdvance + this._letterSpacing;
                      k = Math.max(k, I.yOffset + I.texture.height);
                      _ = R;
                      if (S !== -1 && m > 0 && h.x > m) {
                        ++O;
                        (0, a.removeItems)(d, 1 + S - O, 1 + M - S);
                        M = S;
                        S = -1;
                        c.push(E);
                        u.push(d.length > 0 ? d[d.length - 1].prevSpaces : 0);
                        y = Math.max(y, E);
                        g++;
                        h.x = 0;
                        h.y += t.lineHeight;
                        _ = null;
                        P = 0;
                      }
                    }
                  } else {
                    c.push(v);
                    u.push(-1);
                    y = Math.max(y, v);
                    ++g;
                    ++O;
                    h.x = 0;
                    h.y += t.lineHeight;
                    _ = null;
                    P = 0;
                  }
                }
                var j = p[p.length - 1];
                if (j !== "\r" && j !== "\n") {
                  if (/(?:\s)/.test(j)) {
                    v = E;
                  }
                  c.push(v);
                  y = Math.max(y, v);
                  u.push(-1);
                }
                var B = [];
                for (M = 0; M <= g; M++) {
                  var D = 0;
                  if (this._align === "right") {
                    D = y - c[M];
                  } else if (this._align === "center") {
                    D = (y - c[M]) / 2;
                  } else if (this._align === "justify") {
                    D = u[M] < 0 ? 0 : (y - c[M]) / u[M];
                  }
                  B.push(D);
                }
                var F = d.length;
                var N = {};
                var G = [];
                var U = this._activePagesMeshData;
                f.push.apply(f, U);
                M = 0;
                for (; M < F; M++) {
                  var V = (ee = d[M].texture).baseTexture.uid;
                  if (!N[V]) {
                    if (!(oe = f.pop())) {
                      var H = new s.u();
                      var z = undefined;
                      var W = undefined;
                      if (t.distanceFieldType === "none") {
                        z = new s.PX(o.gP.EMPTY);
                        W = l.B9.NORMAL;
                      } else {
                        z = new s.PX(o.gP.EMPTY, {
                          program: o.BP.from("// Mesh material default fragment\r\nattribute vec2 aVertexPosition;\r\nattribute vec2 aTextureCoord;\r\n\r\nuniform mat3 projectionMatrix;\r\nuniform mat3 translationMatrix;\r\nuniform mat3 uTextureMatrix;\r\n\r\nvarying vec2 vTextureCoord;\r\n\r\nvoid main(void)\r\n{\r\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\r\n\r\n    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\r\n}\r\n", "// Pixi texture info\r\nvarying vec2 vTextureCoord;\r\nuniform sampler2D uSampler;\r\n\r\n// Tint\r\nuniform vec4 uColor;\r\n\r\n// on 2D applications fwidth is screenScale / glyphAtlasScale * distanceFieldRange\r\nuniform float uFWidth;\r\n\r\nvoid main(void) {\r\n\r\n  // To stack MSDF and SDF we need a non-pre-multiplied-alpha texture.\r\n  vec4 texColor = texture2D(uSampler, vTextureCoord);\r\n\r\n  // MSDF\r\n  float median = texColor.r + texColor.g + texColor.b -\r\n                  min(texColor.r, min(texColor.g, texColor.b)) -\r\n                  max(texColor.r, max(texColor.g, texColor.b));\r\n  // SDF\r\n  median = min(median, texColor.a);\r\n\r\n  float screenPxDistance = uFWidth * (median - 0.5);\r\n  float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);\r\n  if (median < 0.01) {\r\n    alpha = 0.0;\r\n  } else if (median > 0.99) {\r\n    alpha = 1.0;\r\n  }\r\n\r\n  // NPM Textures, NPM outputs\r\n  gl_FragColor = vec4(uColor.rgb, uColor.a * alpha);\r\n\r\n}\r\n"),
                          uniforms: {
                            uFWidth: 0
                          }
                        });
                        W = l.B9.NORMAL_NPM;
                      }
                      var X = new s.e(H, z);
                      X.blendMode = W;
                      oe = {
                        index: 0,
                        indexCount: 0,
                        vertexCount: 0,
                        uvsCount: 0,
                        total: 0,
                        mesh: X,
                        vertices: null,
                        uvs: null,
                        indices: null
                      };
                    }
                    oe.index = 0;
                    oe.indexCount = 0;
                    oe.vertexCount = 0;
                    oe.uvsCount = 0;
                    oe.total = 0;
                    var Y = this._textureCache;
                    Y[V] = Y[V] || new o.gP(ee.baseTexture);
                    oe.mesh.texture = Y[V];
                    oe.mesh.tint = this._tint;
                    G.push(oe);
                    N[V] = oe;
                  }
                  N[V].total++;
                }
                for (M = 0; M < U.length; M++) {
                  if (G.indexOf(U[M]) === -1) {
                    this.removeChild(U[M].mesh);
                  }
                }
                for (M = 0; M < G.length; M++) {
                  if (G[M].mesh.parent !== this) {
                    this.addChild(G[M].mesh);
                  }
                }
                this._activePagesMeshData = G;
                for (var M in N) {
                  var q = (oe = N[M]).total;
                  if (!(oe.indices?.length > q * 6) || oe.vertices.length < s.e.BATCHABLE_SIZE * 2) {
                    oe.vertices = new Float32Array(q * 8);
                    oe.uvs = new Float32Array(q * 8);
                    oe.indices = new Uint16Array(q * 6);
                  } else {
                    var J = oe.total;
                    for (var K = oe.vertices, Z = J * 4 * 2; Z < K.length; Z++) {
                      K[Z] = 0;
                    }
                  }
                  oe.mesh.size = q * 6;
                }
                for (M = 0; M < F; M++) {
                  var $;
                  var Q = ($ = d[M]).position.x + B[$.line] * (this._align === "justify" ? $.prevSpaces : 1);
                  if (this._roundPixels) {
                    Q = Math.round(Q);
                  }
                  var ee;
                  var te = Q * i;
                  var ne = $.position.y * i;
                  var re = N[(ee = $.texture).baseTexture.uid];
                  var ie = ee.frame;
                  var se = ee._uvs;
                  var ae = re.index++;
                  re.indices[ae * 6 + 0] = 0 + ae * 4;
                  re.indices[ae * 6 + 1] = 1 + ae * 4;
                  re.indices[ae * 6 + 2] = 2 + ae * 4;
                  re.indices[ae * 6 + 3] = 0 + ae * 4;
                  re.indices[ae * 6 + 4] = 2 + ae * 4;
                  re.indices[ae * 6 + 5] = 3 + ae * 4;
                  re.vertices[ae * 8 + 0] = te;
                  re.vertices[ae * 8 + 1] = ne;
                  re.vertices[ae * 8 + 2] = te + ie.width * i;
                  re.vertices[ae * 8 + 3] = ne;
                  re.vertices[ae * 8 + 4] = te + ie.width * i;
                  re.vertices[ae * 8 + 5] = ne + ie.height * i;
                  re.vertices[ae * 8 + 6] = te;
                  re.vertices[ae * 8 + 7] = ne + ie.height * i;
                  re.uvs[ae * 8 + 0] = se.x0;
                  re.uvs[ae * 8 + 1] = se.y0;
                  re.uvs[ae * 8 + 2] = se.x1;
                  re.uvs[ae * 8 + 3] = se.y1;
                  re.uvs[ae * 8 + 4] = se.x2;
                  re.uvs[ae * 8 + 5] = se.y2;
                  re.uvs[ae * 8 + 6] = se.x3;
                  re.uvs[ae * 8 + 7] = se.y3;
                }
                this._textWidth = y * i;
                this._textHeight = (h.y + t.lineHeight) * i;
                for (var M in N) {
                  var oe = N[M];
                  if (this.anchor.x !== 0 || this.anchor.y !== 0) {
                    var he = 0;
                    var le = this._textWidth * this.anchor.x;
                    var de = this._textHeight * this.anchor.y;
                    for (var ce = 0; ce < oe.total; ce++) {
                      oe.vertices[he++] -= le;
                      oe.vertices[he++] -= de;
                      oe.vertices[he++] -= le;
                      oe.vertices[he++] -= de;
                      oe.vertices[he++] -= le;
                      oe.vertices[he++] -= de;
                      oe.vertices[he++] -= le;
                      oe.vertices[he++] -= de;
                    }
                  }
                  this._maxLineHeight = k * i;
                  var ue = oe.mesh.geometry.getBuffer("aVertexPosition");
                  var pe = oe.mesh.geometry.getBuffer("aTextureCoord");
                  var me = oe.mesh.geometry.getIndex();
                  ue.data = oe.vertices;
                  pe.data = oe.uvs;
                  me.data = oe.indices;
                  ue.update();
                  pe.update();
                  me.update();
                }
                for (M = 0; M < d.length; M++) {
                  C.push(d[M]);
                }
                this._font = t;
                this.dirty = false;
              };
              t.prototype.updateTransform = function () {
                this.validate();
                this.containerUpdateTransform();
              };
              t.prototype._render = function (t) {
                if (this._autoResolution && this._resolution !== t.resolution) {
                  this._resolution = t.resolution;
                  this.dirty = true;
                }
                var n = b.available[this._fontName];
                var r = n.distanceFieldRange;
                var i = n.distanceFieldType;
                var s = n.size;
                if (i !== "none") {
                  var a = this.worldTransform;
                  var o = a.a;
                  var h = a.b;
                  var l = a.c;
                  var d = a.d;
                  var c = Math.sqrt(o * o + h * h);
                  var u = Math.sqrt(l * l + d * d);
                  var p = (Math.abs(c) + Math.abs(u)) / 2;
                  var m = this.fontSize / s;
                  for (var f = 0, _ = this._activePagesMeshData; f < _.length; f++) {
                    _[f].mesh.shader.uniforms.uFWidth = p * r * m * this._resolution;
                  }
                }
                e.prototype._render.call(this, t);
              };
              t.prototype.getLocalBounds = function () {
                this.validate();
                return e.prototype.getLocalBounds.call(this);
              };
              t.prototype.validate = function () {
                var e = b.available[this._fontName];
                if (!e) {
                  throw new Error("Missing BitmapFont \"" + this._fontName + "\"");
                }
                if (this._font !== e) {
                  this.dirty = true;
                }
                if (this.dirty) {
                  this.updateText();
                }
              };
              Object.defineProperty(t.prototype, "tint", {
                get: function () {
                  return this._tint;
                },
                set: function (e) {
                  if (this._tint !== e) {
                    this._tint = e;
                    for (var t = 0; t < this._activePagesMeshData.length; t++) {
                      this._activePagesMeshData[t].mesh.tint = e;
                    }
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "align", {
                get: function () {
                  return this._align;
                },
                set: function (e) {
                  if (this._align !== e) {
                    this._align = e;
                    this.dirty = true;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "fontName", {
                get: function () {
                  return this._fontName;
                },
                set: function (e) {
                  if (!b.available[e]) {
                    throw new Error("Missing BitmapFont \"" + e + "\"");
                  }
                  if (this._fontName !== e) {
                    this._fontName = e;
                    this.dirty = true;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "fontSize", {
                get: function () {
                  return this._fontSize ?? b.available[this._fontName].size;
                },
                set: function (e) {
                  if (this._fontSize !== e) {
                    this._fontSize = e;
                    this.dirty = true;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "anchor", {
                get: function () {
                  return this._anchor;
                },
                set: function (e) {
                  if (typeof e == "number") {
                    this._anchor.set(e);
                  } else {
                    this._anchor.copyFrom(e);
                  }
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
              Object.defineProperty(t.prototype, "maxWidth", {
                get: function () {
                  return this._maxWidth;
                },
                set: function (e) {
                  if (this._maxWidth !== e) {
                    this._maxWidth = e;
                    this.dirty = true;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "maxLineHeight", {
                get: function () {
                  this.validate();
                  return this._maxLineHeight;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "textWidth", {
                get: function () {
                  this.validate();
                  return this._textWidth;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "letterSpacing", {
                get: function () {
                  return this._letterSpacing;
                },
                set: function (e) {
                  if (this._letterSpacing !== e) {
                    this._letterSpacing = e;
                    this.dirty = true;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "roundPixels", {
                get: function () {
                  return this._roundPixels;
                },
                set: function (e) {
                  if (e !== this._roundPixels) {
                    this._roundPixels = e;
                    this.dirty = true;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "textHeight", {
                get: function () {
                  this.validate();
                  return this._textHeight;
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
              t.prototype.destroy = function (t) {
                var n = this._textureCache;
                var r = b.available[this._fontName].distanceFieldType === "none" ? T : A;
                r.push.apply(r, this._activePagesMeshData);
                for (var i = 0, s = this._activePagesMeshData; i < s.length; i++) {
                  var a = s[i];
                  this.removeChild(a.mesh);
                }
                this._activePagesMeshData = [];
                r.filter(function (e) {
                  return n[e.mesh.texture.baseTexture.uid];
                }).forEach(function (e) {
                  e.mesh.texture = o.gP.EMPTY;
                });
                for (var h in n) {
                  n[h].destroy();
                  delete n[h];
                }
                this._font = null;
                this._textureCache = null;
                e.prototype.destroy.call(this, t);
              };
              t.styleDefaults = {
                align: "left",
                tint: 16777215,
                maxWidth: 0,
                letterSpacing: 0
              };
              return t;
            }(d.mc);
            var E = function () {
              function e() {}
              e.add = function () {
                c.Sd.setExtensionXhrType("fnt", c.Sd.XHR_RESPONSE_TYPE.TEXT);
              };
              e.use = function (t, n) {
                var r = y(t.data);
                if (r) {
                  var i = e.getBaseUrl(this, t);
                  for (var s = r.parse(t.data), a = {}, o = function (e) {
                      a[e.metadata.pageFile] = e.texture;
                      if (Object.keys(a).length === s.page.length) {
                        t.bitmapFont = b.install(s, a, true);
                        n();
                      }
                    }, h = 0; h < s.page.length; ++h) {
                    var l = s.page[h].file;
                    var d = i + l;
                    var u = false;
                    for (var p in this.resources) {
                      var m = this.resources[p];
                      if (m.url === d) {
                        m.metadata.pageFile = l;
                        if (m.texture) {
                          o(m);
                        } else {
                          m.onAfterMiddleware.add(o);
                        }
                        u = true;
                        break;
                      }
                    }
                    if (!u) {
                      var f = {
                        crossOrigin: t.crossOrigin,
                        loadType: c.Sd.LOAD_TYPE.IMAGE,
                        metadata: Object.assign({
                          pageFile: l
                        }, t.metadata.imageMetadata),
                        parentResource: t
                      };
                      this.add(d, f, o);
                    }
                  }
                } else {
                  n();
                }
              };
              e.getBaseUrl = function (t, n) {
                var r = n.isDataUrl ? "" : e.dirname(n.url);
                if (n.isDataUrl) {
                  if (r === ".") {
                    r = "";
                  }
                  if (t.baseUrl && r && t.baseUrl.charAt(t.baseUrl.length - 1) === "/") {
                    r += "/";
                  }
                }
                if ((r = r.replace(t.baseUrl, "")) && r.charAt(r.length - 1) !== "/") {
                  r += "/";
                }
                return r;
              };
              e.dirname = function (e) {
                var t = e.replace(/\\/g, "/").replace(/\/$/, "").replace(/\/[^\/]*$/, "");
                if (t === e) {
                  return ".";
                } else if (t === "") {
                  return "/";
                } else {
                  return t;
                }
              };
              e.extension = o.Ag.Loader;
              return e;
            }();
          }
    });
})();
