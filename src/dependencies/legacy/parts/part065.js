(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        28027(e, t, n) {
            "use strict";
        
            n.d(t, {
              k: () => u
            });
            var r = n(11313);
            var i = n(97831);
            var s = n(9171);
            var a = n(38499);
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
            var d = new a.bR();
            var c = new Uint16Array([0, 1, 2, 0, 2, 3]);
            var u = function (e) {
              function t(t) {
                var n = e.call(this) || this;
                n._anchor = new a.oA(n._onAnchorUpdate, n, t ? t.defaultAnchor.x : 0, t ? t.defaultAnchor.y : 0);
                n._texture = null;
                n._width = 0;
                n._height = 0;
                n._tint = null;
                n._tintRGB = null;
                n.tint = 16777215;
                n.blendMode = r.B9.NORMAL;
                n._cachedTint = 16777215;
                n.uvs = null;
                n.texture = t || i.gP.EMPTY;
                n.vertexData = new Float32Array(8);
                n.vertexTrimmedData = null;
                n._transformID = -1;
                n._textureID = -1;
                n._transformTrimmedID = -1;
                n._textureTrimmedID = -1;
                n.indices = c;
                n.pluginName = "batch";
                n.isSprite = true;
                n._roundPixels = o.W0.ROUND_PIXELS;
                return n;
              }
              (function (e, t) {
                function n() {
                  this.constructor = e;
                }
                l(e, t);
                e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
              })(t, e);
              t.prototype._onTextureUpdate = function () {
                this._textureID = -1;
                this._textureTrimmedID = -1;
                this._cachedTint = 16777215;
                if (this._width) {
                  this.scale.x = (0, h.sign)(this.scale.x) * this._width / this._texture.orig.width;
                }
                if (this._height) {
                  this.scale.y = (0, h.sign)(this.scale.y) * this._height / this._texture.orig.height;
                }
              };
              t.prototype._onAnchorUpdate = function () {
                this._transformID = -1;
                this._transformTrimmedID = -1;
              };
              t.prototype.calculateVertices = function () {
                var e = this._texture;
                if (this._transformID !== this.transform._worldID || this._textureID !== e._updateID) {
                  if (this._textureID !== e._updateID) {
                    this.uvs = this._texture._uvs.uvsFloat32;
                  }
                  this._transformID = this.transform._worldID;
                  this._textureID = e._updateID;
                  var t = this.transform.worldTransform;
                  var n = t.a;
                  var r = t.b;
                  var i = t.c;
                  var s = t.d;
                  var a = t.tx;
                  var h = t.ty;
                  var l = this.vertexData;
                  var d = e.trim;
                  var c = e.orig;
                  var u = this._anchor;
                  var p = 0;
                  var m = 0;
                  var f = 0;
                  var _ = 0;
                  if (d) {
                    p = (m = d.x - u._x * c.width) + d.width;
                    f = (_ = d.y - u._y * c.height) + d.height;
                  } else {
                    p = (m = -u._x * c.width) + c.width;
                    f = (_ = -u._y * c.height) + c.height;
                  }
                  l[0] = n * m + i * _ + a;
                  l[1] = s * _ + r * m + h;
                  l[2] = n * p + i * _ + a;
                  l[3] = s * _ + r * p + h;
                  l[4] = n * p + i * f + a;
                  l[5] = s * f + r * p + h;
                  l[6] = n * m + i * f + a;
                  l[7] = s * f + r * m + h;
                  if (this._roundPixels) {
                    var v = o.W0.RESOLUTION;
                    for (var y = 0; y < l.length; ++y) {
                      l[y] = Math.round((l[y] * v | 0) / v);
                    }
                  }
                }
              };
              t.prototype.calculateTrimmedVertices = function () {
                if (this.vertexTrimmedData) {
                  if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID) {
                    return;
                  }
                } else {
                  this.vertexTrimmedData = new Float32Array(8);
                }
                this._transformTrimmedID = this.transform._worldID;
                this._textureTrimmedID = this._texture._updateID;
                var e = this._texture;
                var t = this.vertexTrimmedData;
                var n = e.orig;
                var r = this._anchor;
                var i = this.transform.worldTransform;
                var s = i.a;
                var a = i.b;
                var o = i.c;
                var h = i.d;
                var l = i.tx;
                var d = i.ty;
                var c = -r._x * n.width;
                var u = c + n.width;
                var p = -r._y * n.height;
                var m = p + n.height;
                t[0] = s * c + o * p + l;
                t[1] = h * p + a * c + d;
                t[2] = s * u + o * p + l;
                t[3] = h * p + a * u + d;
                t[4] = s * u + o * m + l;
                t[5] = h * m + a * u + d;
                t[6] = s * c + o * m + l;
                t[7] = h * m + a * c + d;
              };
              t.prototype._render = function (e) {
                this.calculateVertices();
                e.batch.setObjectRenderer(e.plugins[this.pluginName]);
                e.plugins[this.pluginName].render(this);
              };
              t.prototype._calculateBounds = function () {
                var e = this._texture.trim;
                var t = this._texture.orig;
                if (!e || e.width === t.width && e.height === t.height) {
                  this.calculateVertices();
                  this._bounds.addQuad(this.vertexData);
                } else {
                  this.calculateTrimmedVertices();
                  this._bounds.addQuad(this.vertexTrimmedData);
                }
              };
              t.prototype.getLocalBounds = function (t) {
                if (this.children.length === 0) {
                  this._localBounds ||= new s.cz();
                  this._localBounds.minX = this._texture.orig.width * -this._anchor._x;
                  this._localBounds.minY = this._texture.orig.height * -this._anchor._y;
                  this._localBounds.maxX = this._texture.orig.width * (1 - this._anchor._x);
                  this._localBounds.maxY = this._texture.orig.height * (1 - this._anchor._y);
                  if (!t) {
                    this._localBoundsRect ||= new a.M_();
                    t = this._localBoundsRect;
                  }
                  return this._localBounds.getRectangle(t);
                } else {
                  return e.prototype.getLocalBounds.call(this, t);
                }
              };
              t.prototype.containsPoint = function (e) {
                this.worldTransform.applyInverse(e, d);
                var t = this._texture.orig.width;
                var n = this._texture.orig.height;
                var r = -t * this.anchor.x;
                var i = 0;
                return d.x >= r && d.x < r + t && (i = -n * this.anchor.y, d.y >= i && d.y < i + n);
              };
              t.prototype.destroy = function (t) {
                e.prototype.destroy.call(this, t);
                this._texture.off("update", this._onTextureUpdate, this);
                this._anchor = null;
                if (typeof t == "boolean" ? t : t && t.texture) {
                  var n = typeof t == "boolean" ? t : t && t.baseTexture;
                  this._texture.destroy(!!n);
                }
                this._texture = null;
              };
              t.from = function (e, n) {
                return new t(e instanceof i.gP ? e : i.gP.from(e, n));
              };
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
              Object.defineProperty(t.prototype, "width", {
                get: function () {
                  return Math.abs(this.scale.x) * this._texture.orig.width;
                },
                set: function (e) {
                  var t = (0, h.sign)(this.scale.x) || 1;
                  this.scale.x = t * e / this._texture.orig.width;
                  this._width = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "height", {
                get: function () {
                  return Math.abs(this.scale.y) * this._texture.orig.height;
                },
                set: function (e) {
                  var t = (0, h.sign)(this.scale.y) || 1;
                  this.scale.y = t * e / this._texture.orig.height;
                  this._height = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "anchor", {
                get: function () {
                  return this._anchor;
                },
                set: function (e) {
                  this._anchor.copyFrom(e);
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "tint", {
                get: function () {
                  return this._tint;
                },
                set: function (e) {
                  this._tint = e;
                  this._tintRGB = (e >> 16) + (e & 65280) + ((e & 255) << 16);
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "texture", {
                get: function () {
                  return this._texture;
                },
                set: function (e) {
                  if (this._texture !== e) {
                    if (this._texture) {
                      this._texture.off("update", this._onTextureUpdate, this);
                    }
                    this._texture = e || i.gP.EMPTY;
                    this._cachedTint = 16777215;
                    this._textureID = -1;
                    this._textureTrimmedID = -1;
                    if (e) {
                      if (e.baseTexture.valid) {
                        this._onTextureUpdate();
                      } else {
                        e.once("update", this._onTextureUpdate, this);
                      }
                    }
                  }
                },
                enumerable: false,
                configurable: true
              });
              return t;
            }(s.mc);
          },
        59043(e, t, n) {
            "use strict";
        
            n.d(t, {
              A: () => h,
              z: () => o
            });
            var r = n(38499);
            var i = n(97831);
            var s = n(88604);
            var a = n(1235);
            var o = function () {
              function e(e, t, n = null) {
                this.linkedSheets = [];
                this._texture = e instanceof i.gP ? e : null;
                this.baseTexture = e instanceof i.t5 ? e : this._texture.baseTexture;
                this.textures = {};
                this.animations = {};
                this.data = t;
                var r = this.baseTexture.resource;
                this.resolution = this._updateResolution(n || (r ? r.url : null));
                this._frames = this.data.frames;
                this._frameKeys = Object.keys(this._frames);
                this._batchIndex = 0;
                this._callback = null;
              }
              e.prototype._updateResolution = function (e = null) {
                var t = this.data.meta.scale;
                var n = (0, s.getResolutionOfUrl)(e, null);
                if (n === null) {
                  n = t !== undefined ? parseFloat(t) : 1;
                }
                if (n !== 1) {
                  this.baseTexture.setResolution(n);
                }
                return n;
              };
              e.prototype.parse = function (t) {
                var n = this;
                if (t) {
                  (0, s.deprecation)("6.5.0", "Spritesheet.parse callback is deprecated, use the return Promise instead.");
                }
                return new Promise(function (r) {
                  n._callback = function (e) {
                    if (t != null) {
                      t(e);
                    }
                    r(e);
                  };
                  n._batchIndex = 0;
                  if (n._frameKeys.length <= e.BATCH_SIZE) {
                    n._processFrames(0);
                    n._processAnimations();
                    n._parseComplete();
                  } else {
                    n._nextBatch();
                  }
                });
              };
              e.prototype._processFrames = function (t) {
                for (var n = t, s = e.BATCH_SIZE; n - t < s && n < this._frameKeys.length;) {
                  var a = this._frameKeys[n];
                  var o = this._frames[a];
                  var h = o.frame;
                  if (h) {
                    var l;
                    var d = null;
                    var c = o.trimmed !== false && o.sourceSize ? o.sourceSize : o.frame;
                    var u = new r.M_(0, 0, Math.floor(c.w) / this.resolution, Math.floor(c.h) / this.resolution);
                    l = o.rotated ? new r.M_(Math.floor(h.x) / this.resolution, Math.floor(h.y) / this.resolution, Math.floor(h.h) / this.resolution, Math.floor(h.w) / this.resolution) : new r.M_(Math.floor(h.x) / this.resolution, Math.floor(h.y) / this.resolution, Math.floor(h.w) / this.resolution, Math.floor(h.h) / this.resolution);
                    if (o.trimmed !== false && o.spriteSourceSize) {
                      d = new r.M_(Math.floor(o.spriteSourceSize.x) / this.resolution, Math.floor(o.spriteSourceSize.y) / this.resolution, Math.floor(h.w) / this.resolution, Math.floor(h.h) / this.resolution);
                    }
                    this.textures[a] = new i.gP(this.baseTexture, l, u, d, o.rotated ? 2 : 0, o.anchor);
                    i.gP.addToCache(this.textures[a], a);
                  }
                  n++;
                }
              };
              e.prototype._processAnimations = function () {
                var e = this.data.animations || {};
                for (var t in e) {
                  this.animations[t] = [];
                  for (var n = 0; n < e[t].length; n++) {
                    var r = e[t][n];
                    this.animations[t].push(this.textures[r]);
                  }
                }
              };
              e.prototype._parseComplete = function () {
                var e = this._callback;
                this._callback = null;
                this._batchIndex = 0;
                e.call(this, this.textures);
              };
              e.prototype._nextBatch = function () {
                var t = this;
                this._processFrames(this._batchIndex * e.BATCH_SIZE);
                this._batchIndex++;
                setTimeout(function () {
                  if (t._batchIndex * e.BATCH_SIZE < t._frameKeys.length) {
                    t._nextBatch();
                  } else {
                    t._processAnimations();
                    t._parseComplete();
                  }
                }, 0);
              };
              e.prototype.destroy = function (e) {
                var t;
                if (e === undefined) {
                  e = false;
                }
                for (var n in this.textures) {
                  this.textures[n].destroy();
                }
                this._frames = null;
                this._frameKeys = null;
                this.data = null;
                this.textures = null;
                if (e) {
                  if ((t = this._texture) !== null && t !== undefined) {
                    t.destroy();
                  }
                  this.baseTexture.destroy();
                }
                this._texture = null;
                this.baseTexture = null;
                this.linkedSheets = [];
              };
              e.BATCH_SIZE = 1000;
              return e;
            }();
            var h = function () {
              function e() {}
              e.use = function (t, n) {
                var h = this;
                var l = t.name + "_image";
                if (t.data && t.type === a.Sd.TYPE.JSON && t.data.frames && !h.resources[l]) {
                  var d = t.data?.meta?.related_multi_packs;
                  if (Array.isArray(d)) {
                    var c = function (e) {
                      if (typeof e != "string") {
                        return "continue";
                      }
                      var n = e.replace(".json", "");
                      var r = s.url.resolve(t.url.replace(h.baseUrl, ""), e);
                      if (h.resources[n] || Object.values(h.resources).some(function (e) {
                        return s.url.format(s.url.parse(e.url)) === r;
                      })) {
                        return "continue";
                      }
                      var i = {
                        crossOrigin: t.crossOrigin,
                        loadType: a.Sd.LOAD_TYPE.XHR,
                        xhrType: a.Sd.XHR_RESPONSE_TYPE.JSON,
                        parentResource: t,
                        metadata: t.metadata
                      };
                      h.add(n, r, i);
                    };
                    for (var u = 0, p = d; u < p.length; u++) {
                      c(p[u]);
                    }
                  }
                  var m = {
                    crossOrigin: t.crossOrigin,
                    metadata: t.metadata.imageMetadata,
                    parentResource: t
                  };
                  var f = e.getResourcePath(t, h.baseUrl);
                  h.add(l, f, m, function (e) {
                    if (e.error) {
                      n(e.error);
                    } else {
                      var r = new o(e.texture, t.data, t.url);
                      r.parse().then(function () {
                        t.spritesheet = r;
                        t.textures = r.textures;
                        n();
                      });
                    }
                  });
                } else {
                  n();
                }
              };
              e.getResourcePath = function (e, t) {
                if (e.isDataUrl) {
                  return e.data.meta.image;
                } else {
                  return s.url.resolve(e.url.replace(t, ""), e.data.meta.image);
                }
              };
              e.extension = i.Ag.Loader;
              return e;
            }();
          }
    });
})();
