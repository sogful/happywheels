(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        49907(e, t, n) {
            "use strict";
        
            n.d(t, {
              PX: () => f,
              e: () => m,
              iM: () => c,
              u: () => _
            });
            var r = n(97831);
            var i = n(38499);
            var s = n(11313);
            var a = n(9171);
            var o = n(55323);
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
            function d(e, t) {
              function n() {
                this.constructor = e;
              }
              l(e, t);
              e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
            }
            var c = function () {
              function e(e, t) {
                this.uvBuffer = e;
                this.uvMatrix = t;
                this.data = null;
                this._bufferUpdateId = -1;
                this._textureUpdateId = -1;
                this._updateID = 0;
              }
              e.prototype.update = function (e) {
                if (e || this._bufferUpdateId !== this.uvBuffer._updateID || this._textureUpdateId !== this.uvMatrix._updateID) {
                  this._bufferUpdateId = this.uvBuffer._updateID;
                  this._textureUpdateId = this.uvMatrix._updateID;
                  var t = this.uvBuffer.data;
                  if (!this.data || this.data.length !== t.length) {
                    this.data = new Float32Array(t.length);
                  }
                  this.uvMatrix.multiplyUvs(t, this.data);
                  this._updateID++;
                }
              };
              return e;
            }();
            var u = new i.bR();
            var p = new i.tS();
            var m = function (e) {
              function t(t, n, i, a = s._4.TRIANGLES) {
                var h = e.call(this) || this;
                h.geometry = t;
                h.shader = n;
                h.state = i || r.Uw.for2d();
                h.drawMode = a;
                h.start = 0;
                h.size = 0;
                h.uvs = null;
                h.indices = null;
                h.vertexData = new Float32Array(1);
                h.vertexDirty = -1;
                h._transformID = -1;
                h._roundPixels = o.W0.ROUND_PIXELS;
                h.batchUvs = null;
                return h;
              }
              d(t, e);
              Object.defineProperty(t.prototype, "geometry", {
                get: function () {
                  return this._geometry;
                },
                set: function (e) {
                  if (this._geometry !== e) {
                    if (this._geometry) {
                      this._geometry.refCount--;
                      if (this._geometry.refCount === 0) {
                        this._geometry.dispose();
                      }
                    }
                    this._geometry = e;
                    if (this._geometry) {
                      this._geometry.refCount++;
                    }
                    this.vertexDirty = -1;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "uvBuffer", {
                get: function () {
                  return this.geometry.buffers[1];
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "verticesBuffer", {
                get: function () {
                  return this.geometry.buffers[0];
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "material", {
                get: function () {
                  return this.shader;
                },
                set: function (e) {
                  this.shader = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "blendMode", {
                get: function () {
                  return this.state.blendMode;
                },
                set: function (e) {
                  this.state.blendMode = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "roundPixels", {
                get: function () {
                  return this._roundPixels;
                },
                set: function (e) {
                  if (this._roundPixels !== e) {
                    this._transformID = -1;
                  }
                  this._roundPixels = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "tint", {
                get: function () {
                  if ("tint" in this.shader) {
                    return this.shader.tint;
                  } else {
                    return null;
                  }
                },
                set: function (e) {
                  this.shader.tint = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "texture", {
                get: function () {
                  if ("texture" in this.shader) {
                    return this.shader.texture;
                  } else {
                    return null;
                  }
                },
                set: function (e) {
                  this.shader.texture = e;
                },
                enumerable: false,
                configurable: true
              });
              t.prototype._render = function (e) {
                var n = this.geometry.buffers[0].data;
                if (this.shader.batchable && this.drawMode === s._4.TRIANGLES && n.length < t.BATCHABLE_SIZE * 2) {
                  this._renderToBatch(e);
                } else {
                  this._renderDefault(e);
                }
              };
              t.prototype._renderDefault = function (e) {
                var t = this.shader;
                t.alpha = this.worldAlpha;
                if (t.update) {
                  t.update();
                }
                e.batch.flush();
                t.uniforms.translationMatrix = this.transform.worldTransform.toArray(true);
                e.shader.bind(t);
                e.state.set(this.state);
                e.geometry.bind(this.geometry, t);
                e.geometry.draw(this.drawMode, this.size, this.start, this.geometry.instanceCount);
              };
              t.prototype._renderToBatch = function (e) {
                var t = this.geometry;
                var n = this.shader;
                if (n.uvMatrix) {
                  n.uvMatrix.update();
                  this.calculateUvs();
                }
                this.calculateVertices();
                this.indices = t.indexBuffer.data;
                this._tintRGB = n._tintRGB;
                this._texture = n.texture;
                var r = this.material.pluginName;
                e.batch.setObjectRenderer(e.plugins[r]);
                e.plugins[r].render(this);
              };
              t.prototype.calculateVertices = function () {
                var e = this.geometry.buffers[0];
                var t = e.data;
                var n = e._updateID;
                if (n !== this.vertexDirty || this._transformID !== this.transform._worldID) {
                  this._transformID = this.transform._worldID;
                  if (this.vertexData.length !== t.length) {
                    this.vertexData = new Float32Array(t.length);
                  }
                  var r = this.transform.worldTransform;
                  var i = r.a;
                  var s = r.b;
                  var a = r.c;
                  var h = r.d;
                  var l = r.tx;
                  var d = r.ty;
                  for (var c = this.vertexData, u = 0; u < c.length / 2; u++) {
                    var p = t[u * 2];
                    var m = t[u * 2 + 1];
                    c[u * 2] = i * p + a * m + l;
                    c[u * 2 + 1] = s * p + h * m + d;
                  }
                  if (this._roundPixels) {
                    var f = o.W0.RESOLUTION;
                    for (u = 0; u < c.length; ++u) {
                      c[u] = Math.round((c[u] * f | 0) / f);
                    }
                  }
                  this.vertexDirty = n;
                }
              };
              t.prototype.calculateUvs = function () {
                var e = this.geometry.buffers[1];
                var t = this.shader;
                if (t.uvMatrix.isSimple) {
                  this.uvs = e.data;
                } else {
                  this.batchUvs ||= new c(e, t.uvMatrix);
                  this.batchUvs.update();
                  this.uvs = this.batchUvs.data;
                }
              };
              t.prototype._calculateBounds = function () {
                this.calculateVertices();
                this._bounds.addVertexData(this.vertexData, 0, this.vertexData.length);
              };
              t.prototype.containsPoint = function (e) {
                if (!this.getBounds().contains(e.x, e.y)) {
                  return false;
                }
                this.worldTransform.applyInverse(e, u);
                var t = this.geometry.getBuffer("aVertexPosition").data;
                var n = p.points;
                var r = this.geometry.getIndex().data;
                for (var i = r.length, s = this.drawMode === 4 ? 3 : 1, a = 0; a + 2 < i; a += s) {
                  var o = r[a] * 2;
                  var h = r[a + 1] * 2;
                  var l = r[a + 2] * 2;
                  n[0] = t[o];
                  n[1] = t[o + 1];
                  n[2] = t[h];
                  n[3] = t[h + 1];
                  n[4] = t[l];
                  n[5] = t[l + 1];
                  if (p.contains(u.x, u.y)) {
                    return true;
                  }
                }
                return false;
              };
              t.prototype.destroy = function (t) {
                e.prototype.destroy.call(this, t);
                if (this._cachedTexture) {
                  this._cachedTexture.destroy();
                  this._cachedTexture = null;
                }
                this.geometry = null;
                this.shader = null;
                this.state = null;
                this.uvs = null;
                this.indices = null;
                this.vertexData = null;
              };
              t.BATCHABLE_SIZE = 100;
              return t;
            }(a.mc);
            var f = function (e) {
              function t(t, n) {
                var s = this;
                var a = {
                  uSampler: t,
                  alpha: 1,
                  uTextureMatrix: i.uq.IDENTITY,
                  uColor: new Float32Array([1, 1, 1, 1])
                };
                if ((n = Object.assign({
                  tint: 16777215,
                  alpha: 1,
                  pluginName: "batch"
                }, n)).uniforms) {
                  Object.assign(a, n.uniforms);
                }
                (s = e.call(this, n.program || r.BP.from("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTextureMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\n}\n", "varying vec2 vTextureCoord;\nuniform vec4 uColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;\n}\n"), a) || this)._colorDirty = false;
                s.uvMatrix = new r.NW(t);
                s.batchable = n.program === undefined;
                s.pluginName = n.pluginName;
                s.tint = n.tint;
                s.alpha = n.alpha;
                return s;
              }
              d(t, e);
              Object.defineProperty(t.prototype, "texture", {
                get: function () {
                  return this.uniforms.uSampler;
                },
                set: function (e) {
                  if (this.uniforms.uSampler !== e) {
                    if (!this.uniforms.uSampler.baseTexture.alphaMode != !e.baseTexture.alphaMode) {
                      this._colorDirty = true;
                    }
                    this.uniforms.uSampler = e;
                    this.uvMatrix.texture = e;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "alpha", {
                get: function () {
                  return this._alpha;
                },
                set: function (e) {
                  if (e !== this._alpha) {
                    this._alpha = e;
                    this._colorDirty = true;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "tint", {
                get: function () {
                  return this._tint;
                },
                set: function (e) {
                  if (e !== this._tint) {
                    this._tint = e;
                    this._tintRGB = (e >> 16) + (e & 65280) + ((e & 255) << 16);
                    this._colorDirty = true;
                  }
                },
                enumerable: false,
                configurable: true
              });
              t.prototype.update = function () {
                if (this._colorDirty) {
                  this._colorDirty = false;
                  var e = this.texture.baseTexture;
                  (0, h.premultiplyTintToRgba)(this._tint, this._alpha, this.uniforms.uColor, e.alphaMode);
                }
                if (this.uvMatrix.update()) {
                  this.uniforms.uTextureMatrix = this.uvMatrix.mapCoord;
                }
              };
              return t;
            }(r.Mt);
            var _ = function (e) {
              function t(t, n, i) {
                var a = e.call(this) || this;
                var o = new r.hp(t);
                var h = new r.hp(n, true);
                var l = new r.hp(i, true, true);
                a.addAttribute("aVertexPosition", o, 2, false, s.QE.FLOAT).addAttribute("aTextureCoord", h, 2, false, s.QE.FLOAT).addIndex(l);
                a._updateId = -1;
                return a;
              }
              d(t, e);
              Object.defineProperty(t.prototype, "vertexDirtyId", {
                get: function () {
                  return this.buffers[0]._updateID;
                },
                enumerable: false,
                configurable: true
              });
              return t;
            }(r.V2);
          },
        11075(e, t, n) {
            "use strict";
        
            n.d(t, {
              b: () => r
            });
            var r = function () {
              function e(e) {
                this.items = [];
                this._name = e;
                this._aliasCount = 0;
              }
              e.prototype.emit = function (e, t, n, r, i, s, a, o) {
                if (arguments.length > 8) {
                  throw new Error("max arguments reached");
                }
                var h = this.name;
                var l = this.items;
                this._aliasCount++;
                for (var d = 0, c = l.length; d < c; d++) {
                  l[d][h](e, t, n, r, i, s, a, o);
                }
                if (l === this.items) {
                  this._aliasCount--;
                }
                return this;
              };
              e.prototype.ensureNonAliasedItems = function () {
                if (this._aliasCount > 0 && this.items.length > 1) {
                  this._aliasCount = 0;
                  this.items = this.items.slice(0);
                }
              };
              e.prototype.add = function (e) {
                if (e[this._name]) {
                  this.ensureNonAliasedItems();
                  this.remove(e);
                  this.items.push(e);
                }
                return this;
              };
              e.prototype.remove = function (e) {
                var t = this.items.indexOf(e);
                if (t !== -1) {
                  this.ensureNonAliasedItems();
                  this.items.splice(t, 1);
                }
                return this;
              };
              e.prototype.contains = function (e) {
                return this.items.indexOf(e) !== -1;
              };
              e.prototype.removeAll = function () {
                this.ensureNonAliasedItems();
                this.items.length = 0;
                return this;
              };
              e.prototype.destroy = function () {
                this.removeAll();
                this.items = null;
                this._name = null;
              };
              Object.defineProperty(e.prototype, "empty", {
                get: function () {
                  return this.items.length === 0;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "name", {
                get: function () {
                  return this._name;
                },
                enumerable: false,
                configurable: true
              });
              return e;
            }();
            Object.defineProperties(r.prototype, {
              dispatch: {
                value: r.prototype.emit
              },
              run: {
                value: r.prototype.emit
              }
            });
          },
        55323(e, t, n) {
            "use strict";
        
            n.d(t, {
              Fr: () => T,
              OF: () => a,
              W0: () => A
            });
            var r;
            var i;
            var s = n(11313);
            var a = {
              createCanvas: function (e, t) {
                var n = document.createElement("canvas");
                n.width = e;
                n.height = t;
                return n;
              },
              getWebGLRenderingContext: function () {
                return WebGLRenderingContext;
              },
              getNavigator: function () {
                return navigator;
              },
              getBaseUrl: function () {
                return document.baseURI ?? window.location.href;
              },
              fetch: function (e, t) {
                return fetch(e, t);
              }
            };
            var o = /iPhone/i;
            var h = /iPod/i;
            var l = /iPad/i;
            var d = /\biOS-universal(?:.+)Mac\b/i;
            var c = /\bAndroid(?:.+)Mobile\b/i;
            var u = /Android/i;
            var p = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i;
            var m = /Silk/i;
            var f = /Windows Phone/i;
            var _ = /\bWindows(?:.+)ARM\b/i;
            var v = /BlackBerry/i;
            var y = /BB10/i;
            var g = /Opera Mini/i;
            var w = /\b(CriOS|Chrome)(?:.+)Mobile/i;
            var x = /Mobile(?:.+)Firefox\b/i;
            function b(e) {
              return e !== undefined && e.platform === "MacIntel" && typeof e.maxTouchPoints == "number" && e.maxTouchPoints > 1 && typeof MSStream == "undefined";
            }
            var T = function (e) {
              var t = {
                userAgent: "",
                platform: "",
                maxTouchPoints: 0
              };
              if (e || typeof navigator == "undefined") {
                if (typeof e == "string") {
                  t.userAgent = e;
                } else if (e && e.userAgent) {
                  t = {
                    userAgent: e.userAgent,
                    platform: e.platform,
                    maxTouchPoints: e.maxTouchPoints || 0
                  };
                }
              } else {
                t = {
                  userAgent: navigator.userAgent,
                  platform: navigator.platform,
                  maxTouchPoints: navigator.maxTouchPoints || 0
                };
              }
              var n = t.userAgent;
              var r = n.split("[FBAN");
              if (r[1] !== undefined) {
                n = r[0];
              }
              if ((r = n.split("Twitter"))[1] !== undefined) {
                n = r[0];
              }
              var i = function (e) {
                return function (t) {
                  return t.test(e);
                };
              }(n);
              var s = {
                apple: {
                  phone: i(o) && !i(f),
                  ipod: i(h),
                  tablet: !i(o) && (i(l) || b(t)) && !i(f),
                  universal: i(d),
                  device: (i(o) || i(h) || i(l) || i(d) || b(t)) && !i(f)
                },
                amazon: {
                  phone: i(p),
                  tablet: !i(p) && i(m),
                  device: i(p) || i(m)
                },
                android: {
                  phone: !i(f) && i(p) || !i(f) && i(c),
                  tablet: !i(f) && !i(p) && !i(c) && (i(m) || i(u)),
                  device: !i(f) && (i(p) || i(m) || i(c) || i(u)) || i(/\bokhttp\b/i)
                },
                windows: {
                  phone: i(f),
                  tablet: i(_),
                  device: i(f) || i(_)
                },
                other: {
                  blackberry: i(v),
                  blackberry10: i(y),
                  opera: i(g),
                  firefox: i(x),
                  chrome: i(w),
                  device: i(v) || i(y) || i(g) || i(x) || i(w)
                },
                any: false,
                phone: false,
                tablet: false
              };
              s.any = s.apple.device || s.android.device || s.windows.device || s.other.device;
              s.phone = s.apple.phone || s.android.phone || s.windows.phone;
              s.tablet = s.apple.tablet || s.android.tablet || s.windows.tablet;
              return s;
            }(globalThis.navigator);
            var A = {
              ADAPTER: a,
              MIPMAP_TEXTURES: s.E8.POW2,
              ANISOTROPIC_LEVEL: 0,
              RESOLUTION: 1,
              FILTER_RESOLUTION: 1,
              FILTER_MULTISAMPLE: s.he.NONE,
              SPRITE_MAX_TEXTURES: (i = true, (T.tablet || T.phone) && (T.apple.device && (r = navigator.userAgent.match(/OS (\d+)_(\d+)?/)) && parseInt(r[1], 10) < 11 && (i = false), T.android.device && (r = navigator.userAgent.match(/Android\s([0-9.]*)/)) && parseInt(r[1], 10) < 7 && (i = false)), i ? 32 : 4),
              SPRITE_BATCH_SIZE: 4096,
              RENDER_OPTIONS: {
                view: null,
                width: 800,
                height: 600,
                autoDensity: false,
                backgroundColor: 0,
                backgroundAlpha: 1,
                useContextAlpha: true,
                clearBeforeRender: true,
                antialias: false,
                preserveDrawingBuffer: false
              },
              GC_MODE: s.OS.AUTO,
              GC_MAX_IDLE: 3600,
              GC_MAX_CHECK_COUNT: 600,
              WRAP_MODE: s.uR.CLAMP,
              SCALE_MODE: s.M6.LINEAR,
              PRECISION_VERTEX: s.Pk.HIGH,
              PRECISION_FRAGMENT: T.apple.device ? s.Pk.HIGH : s.Pk.MEDIUM,
              CAN_UPLOAD_SAME_BUFFER: !T.apple.device,
              CREATE_IMAGE_BITMAP: false,
              ROUND_PIXELS: false
            };
          }
    });
})();
