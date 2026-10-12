(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        97831(e, t, n) {
            "use strict";
        
            n.d(t, {
              $P: () => ot,
              $Z: () => Ce,
              $f: () => C,
              A4: () => vt,
              A5: () => S,
              A6: () => te,
              Ag: () => a.A,
              BP: () => Ie,
              Bu: () => b,
              Bw: () => Je,
              CF: () => it,
              CI: () => g,
              D8: () => ht,
              ES: () => Rt,
              Eo: () => wt,
              FW: () => f,
              GW: () => P,
              Gj: () => A,
              He: () => tt,
              JH: () => Et,
              LE: () => M,
              LQ: () => St,
              Ln: () => d,
              MT: () => gt,
              Mt: () => Le,
              NW: () => Fe,
              Nc: () => c,
              O1: () => D,
              OE: () => R,
              OO: () => K,
              Pt: () => ee,
              RO: () => et,
              Ru: () => dt,
              SD: () => Ct,
              Uw: () => je,
              V2: () => W,
              WD: () => ve,
              WQ: () => T,
              X1: () => Y,
              XN: () => le,
              XO: () => a.X,
              Y7: () => B,
              _H: () => rt,
              _J: () => Qe,
              aV: () => w,
              ah: () => Ne,
              bD: () => re,
              cc: () => Tt,
              ch: () => Mt,
              dJ: () => Be,
              dZ: () => _,
              di: () => E,
              gP: () => j,
              hk: () => Xe,
              hp: () => G,
              hq: () => bt,
              iH: () => We,
              iQ: () => xt,
              iW: () => Ge,
              jH: () => x,
              k2: () => J,
              kO: () => X,
              kb: () => he,
              kp: () => mt,
              lB: () => lt,
              n1: () => nt,
              nV: () => jt,
              nW: () => F,
              nj: () => ae,
              oA: () => Pt,
              pq: () => ie,
              q5: () => yt,
              s9: () => ze,
              t5: () => y,
              u3: () => At,
              u9: () => Q,
              uC: () => Pe,
              vB: () => ct,
              xv: () => Dt
            });
            var r = n(55323);
            var i = n(11313);
            var s = n(88604);
            var a = n(33523);
            var o = n(11075);
            var h = n(41443);
            var l = n(38499);
            r.W0.PREFER_ENV = s.isMobile.any ? i.Km.WEBGL : i.Km.WEBGL2;
            r.W0.STRICT_TEXTURE_CACHE = false;
            var d = [];
            function c(e, t) {
              if (!e) {
                return null;
              }
              var n = "";
              if (typeof e == "string") {
                var r = /\.(\w{3,4})(?:$|\?|#)/i.exec(e);
                if (r) {
                  n = r[1].toLowerCase();
                }
              }
              for (var i = d.length - 1; i >= 0; --i) {
                var s = d[i];
                if (s.test && s.test(e, n)) {
                  return new s(e, t);
                }
              }
              throw new Error("Unrecognized source type to auto-detect Resource");
            }
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
            function p(e, t) {
              function n() {
                this.constructor = e;
              }
              u(e, t);
              e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
            }
            function m() {
              m = Object.assign || function (e) {
                var t;
                var n = arguments;
                for (var r = 1, i = arguments.length; r < i; r++) {
                  for (var s in t = n[r]) {
                    if (Object.prototype.hasOwnProperty.call(t, s)) {
                      e[s] = t[s];
                    }
                  }
                }
                return e;
              };
              return m.apply(this, arguments);
            }
            var f = function () {
              function e(e = 0, t = 0) {
                this._width = e;
                this._height = t;
                this.destroyed = false;
                this.internal = false;
                this.onResize = new o.b("setRealSize");
                this.onUpdate = new o.b("update");
                this.onError = new o.b("onError");
              }
              e.prototype.bind = function (e) {
                this.onResize.add(e);
                this.onUpdate.add(e);
                this.onError.add(e);
                if (this._width || this._height) {
                  this.onResize.emit(this._width, this._height);
                }
              };
              e.prototype.unbind = function (e) {
                this.onResize.remove(e);
                this.onUpdate.remove(e);
                this.onError.remove(e);
              };
              e.prototype.resize = function (e, t) {
                if (e !== this._width || t !== this._height) {
                  this._width = e;
                  this._height = t;
                  this.onResize.emit(e, t);
                }
              };
              Object.defineProperty(e.prototype, "valid", {
                get: function () {
                  return !!this._width && !!this._height;
                },
                enumerable: false,
                configurable: true
              });
              e.prototype.update = function () {
                if (!this.destroyed) {
                  this.onUpdate.emit();
                }
              };
              e.prototype.load = function () {
                return Promise.resolve(this);
              };
              Object.defineProperty(e.prototype, "width", {
                get: function () {
                  return this._width;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "height", {
                get: function () {
                  return this._height;
                },
                enumerable: false,
                configurable: true
              });
              e.prototype.style = function (e, t, n) {
                return false;
              };
              e.prototype.dispose = function () {};
              e.prototype.destroy = function () {
                if (!this.destroyed) {
                  this.destroyed = true;
                  this.dispose();
                  this.onError.removeAll();
                  this.onError = null;
                  this.onResize.removeAll();
                  this.onResize = null;
                  this.onUpdate.removeAll();
                  this.onUpdate = null;
                }
              };
              e.test = function (e, t) {
                return false;
              };
              return e;
            }();
            var _ = function (e) {
              function t(t, n) {
                var r = this;
                var i = n || {};
                var s = i.width;
                var a = i.height;
                if (!s || !a) {
                  throw new Error("BufferResource width or height invalid");
                }
                (r = e.call(this, s, a) || this).data = t;
                return r;
              }
              p(t, e);
              t.prototype.upload = function (e, t, n) {
                var r = e.gl;
                r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.alphaMode === i.Gk.UNPACK);
                var s = t.realWidth;
                var a = t.realHeight;
                if (n.width === s && n.height === a) {
                  r.texSubImage2D(t.target, 0, 0, 0, s, a, t.format, n.type, this.data);
                } else {
                  n.width = s;
                  n.height = a;
                  r.texImage2D(t.target, 0, n.internalFormat, s, a, 0, t.format, n.type, this.data);
                }
                return true;
              };
              t.prototype.dispose = function () {
                this.data = null;
              };
              t.test = function (e) {
                return e instanceof Float32Array || e instanceof Uint8Array || e instanceof Uint32Array;
              };
              return t;
            }(f);
            var v = {
              scaleMode: i.M6.NEAREST,
              format: i.hR.RGBA,
              alphaMode: i.Gk.NPM
            };
            var y = function (e) {
              function t(t = null, n = null) {
                var a = e.call(this) || this;
                var o = (n = n || {}).alphaMode;
                var h = n.mipmap;
                var l = n.anisotropicLevel;
                var d = n.scaleMode;
                var u = n.width;
                var p = n.height;
                var m = n.wrapMode;
                var _ = n.format;
                var v = n.type;
                var y = n.target;
                var g = n.resolution;
                var w = n.resourceOptions;
                if (!!t && !(t instanceof f)) {
                  (t = c(t, w)).internal = true;
                }
                a.resolution = g || r.W0.RESOLUTION;
                a.width = Math.round((u || 0) * a.resolution) / a.resolution;
                a.height = Math.round((p || 0) * a.resolution) / a.resolution;
                a._mipmap = h !== undefined ? h : r.W0.MIPMAP_TEXTURES;
                a.anisotropicLevel = l !== undefined ? l : r.W0.ANISOTROPIC_LEVEL;
                a._wrapMode = m || r.W0.WRAP_MODE;
                a._scaleMode = d !== undefined ? d : r.W0.SCALE_MODE;
                a.format = _ || i.hR.RGBA;
                a.type = v || i.QE.UNSIGNED_BYTE;
                a.target = y || i.dW.TEXTURE_2D;
                a.alphaMode = o !== undefined ? o : i.Gk.UNPACK;
                a.uid = (0, s.uid)();
                a.touched = 0;
                a.isPowerOfTwo = false;
                a._refreshPOT();
                a._glTextures = {};
                a.dirtyId = 0;
                a.dirtyStyleId = 0;
                a.cacheId = null;
                a.valid = u > 0 && p > 0;
                a.textureCacheIds = [];
                a.destroyed = false;
                a.resource = null;
                a._batchEnabled = 0;
                a._batchLocation = 0;
                a.parentTextureArray = null;
                a.setResource(t);
                return a;
              }
              p(t, e);
              Object.defineProperty(t.prototype, "realWidth", {
                get: function () {
                  return Math.round(this.width * this.resolution);
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "realHeight", {
                get: function () {
                  return Math.round(this.height * this.resolution);
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "mipmap", {
                get: function () {
                  return this._mipmap;
                },
                set: function (e) {
                  if (this._mipmap !== e) {
                    this._mipmap = e;
                    this.dirtyStyleId++;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "scaleMode", {
                get: function () {
                  return this._scaleMode;
                },
                set: function (e) {
                  if (this._scaleMode !== e) {
                    this._scaleMode = e;
                    this.dirtyStyleId++;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "wrapMode", {
                get: function () {
                  return this._wrapMode;
                },
                set: function (e) {
                  if (this._wrapMode !== e) {
                    this._wrapMode = e;
                    this.dirtyStyleId++;
                  }
                },
                enumerable: false,
                configurable: true
              });
              t.prototype.setStyle = function (e, t) {
                var n;
                if (e !== undefined && e !== this.scaleMode) {
                  this.scaleMode = e;
                  n = true;
                }
                if (t !== undefined && t !== this.mipmap) {
                  this.mipmap = t;
                  n = true;
                }
                if (n) {
                  this.dirtyStyleId++;
                }
                return this;
              };
              t.prototype.setSize = function (e, t, n) {
                n = n || this.resolution;
                return this.setRealSize(e * n, t * n, n);
              };
              t.prototype.setRealSize = function (e, t, n) {
                this.resolution = n || this.resolution;
                this.width = Math.round(e) / this.resolution;
                this.height = Math.round(t) / this.resolution;
                this._refreshPOT();
                this.update();
                return this;
              };
              t.prototype._refreshPOT = function () {
                this.isPowerOfTwo = (0, s.isPow2)(this.realWidth) && (0, s.isPow2)(this.realHeight);
              };
              t.prototype.setResolution = function (e) {
                var t = this.resolution;
                if (t !== e) {
                  this.resolution = e;
                  if (this.valid) {
                    this.width = Math.round(this.width * t) / e;
                    this.height = Math.round(this.height * t) / e;
                    this.emit("update", this);
                  }
                  this._refreshPOT();
                }
                return this;
              };
              t.prototype.setResource = function (e) {
                if (this.resource === e) {
                  return this;
                }
                if (this.resource) {
                  throw new Error("Resource can be set only once");
                }
                e.bind(this);
                this.resource = e;
                return this;
              };
              t.prototype.update = function () {
                if (this.valid) {
                  this.dirtyId++;
                  this.dirtyStyleId++;
                  this.emit("update", this);
                } else if (this.width > 0 && this.height > 0) {
                  this.valid = true;
                  this.emit("loaded", this);
                  this.emit("update", this);
                }
              };
              t.prototype.onError = function (e) {
                this.emit("error", this, e);
              };
              t.prototype.destroy = function () {
                if (this.resource) {
                  this.resource.unbind(this);
                  if (this.resource.internal) {
                    this.resource.destroy();
                  }
                  this.resource = null;
                }
                if (this.cacheId) {
                  delete s.BaseTextureCache[this.cacheId];
                  delete s.TextureCache[this.cacheId];
                  this.cacheId = null;
                }
                this.dispose();
                t.removeFromCache(this);
                this.textureCacheIds = null;
                this.destroyed = true;
              };
              t.prototype.dispose = function () {
                this.emit("dispose", this);
              };
              t.prototype.castToBaseTexture = function () {
                return this;
              };
              t.from = function (e, n, i = r.W0.STRICT_TEXTURE_CACHE) {
                var a = typeof e == "string";
                var o = null;
                if (a) {
                  o = e;
                } else {
                  if (!e._pixiId) {
                    var h = n && n.pixiIdPrefix || "pixiid";
                    e._pixiId = h + "_" + (0, s.uid)();
                  }
                  o = e._pixiId;
                }
                var l = s.BaseTextureCache[o];
                if (a && i && !l) {
                  throw new Error("The cacheId \"" + o + "\" does not exist in BaseTextureCache.");
                }
                if (!l) {
                  (l = new t(e, n)).cacheId = o;
                  t.addToCache(l, o);
                }
                return l;
              };
              t.fromBuffer = function (e, n, r, s) {
                e = e || new Float32Array(n * r * 4);
                var a = new _(e, {
                  width: n,
                  height: r
                });
                var o = e instanceof Float32Array ? i.QE.FLOAT : i.QE.UNSIGNED_BYTE;
                return new t(a, Object.assign({}, v, s || {
                  width: n,
                  height: r,
                  type: o
                }));
              };
              t.addToCache = function (e, t) {
                if (t) {
                  if (e.textureCacheIds.indexOf(t) === -1) {
                    e.textureCacheIds.push(t);
                  }
                  s.BaseTextureCache[t];
                  s.BaseTextureCache[t] = e;
                }
              };
              t.removeFromCache = function (e) {
                if (typeof e == "string") {
                  var t = s.BaseTextureCache[e];
                  if (t) {
                    var n = t.textureCacheIds.indexOf(e);
                    if (n > -1) {
                      t.textureCacheIds.splice(n, 1);
                    }
                    delete s.BaseTextureCache[e];
                    return t;
                  }
                } else if (e && e.textureCacheIds) {
                  for (var r = 0; r < e.textureCacheIds.length; ++r) {
                    delete s.BaseTextureCache[e.textureCacheIds[r]];
                  }
                  e.textureCacheIds.length = 0;
                  return e;
                }
                return null;
              };
              t._globalBatch = 0;
              return t;
            }(s.EventEmitter);
            var g = function (e) {
              function t(t, n) {
                var r = this;
                var i = n || {};
                var s = i.width;
                var a = i.height;
                (r = e.call(this, s, a) || this).items = [];
                r.itemDirtyIds = [];
                for (var o = 0; o < t; o++) {
                  var h = new y();
                  r.items.push(h);
                  r.itemDirtyIds.push(-2);
                }
                r.length = t;
                r._load = null;
                r.baseTexture = null;
                return r;
              }
              p(t, e);
              t.prototype.initFromArray = function (e, t) {
                for (var n = 0; n < this.length; n++) {
                  if (e[n]) {
                    if (e[n].castToBaseTexture) {
                      this.addBaseTextureAt(e[n].castToBaseTexture(), n);
                    } else if (e[n] instanceof f) {
                      this.addResourceAt(e[n], n);
                    } else {
                      this.addResourceAt(c(e[n], t), n);
                    }
                  }
                }
              };
              t.prototype.dispose = function () {
                for (var e = 0, t = this.length; e < t; e++) {
                  this.items[e].destroy();
                }
                this.items = null;
                this.itemDirtyIds = null;
                this._load = null;
              };
              t.prototype.addResourceAt = function (e, t) {
                if (!this.items[t]) {
                  throw new Error("Index " + t + " is out of bounds");
                }
                if (e.valid && !this.valid) {
                  this.resize(e.width, e.height);
                }
                this.items[t].setResource(e);
                return this;
              };
              t.prototype.bind = function (t) {
                if (this.baseTexture !== null) {
                  throw new Error("Only one base texture per TextureArray is allowed");
                }
                e.prototype.bind.call(this, t);
                for (var n = 0; n < this.length; n++) {
                  this.items[n].parentTextureArray = t;
                  this.items[n].on("update", t.update, t);
                }
              };
              t.prototype.unbind = function (t) {
                e.prototype.unbind.call(this, t);
                for (var n = 0; n < this.length; n++) {
                  this.items[n].parentTextureArray = null;
                  this.items[n].off("update", t.update, t);
                }
              };
              t.prototype.load = function () {
                var e = this;
                if (this._load) {
                  return this._load;
                }
                var t = this.items.map(function (e) {
                  return e.resource;
                }).filter(function (e) {
                  return e;
                }).map(function (e) {
                  return e.load();
                });
                this._load = Promise.all(t).then(function () {
                  var t = e.items[0];
                  var n = t.realWidth;
                  var r = t.realHeight;
                  e.resize(n, r);
                  return Promise.resolve(e);
                });
                return this._load;
              };
              return t;
            }(f);
            var w = function (e) {
              function t(t, n) {
                var r;
                var i;
                var s = this;
                var a = n || {};
                var o = a.width;
                var h = a.height;
                if (Array.isArray(t)) {
                  r = t;
                  i = t.length;
                } else {
                  i = t;
                }
                s = e.call(this, i, {
                  width: o,
                  height: h
                }) || this;
                if (r) {
                  s.initFromArray(r, n);
                }
                return s;
              }
              p(t, e);
              t.prototype.addBaseTextureAt = function (e, t) {
                if (!e.resource) {
                  throw new Error("ArrayResource does not support RenderTexture");
                }
                this.addResourceAt(e.resource, t);
                return this;
              };
              t.prototype.bind = function (t) {
                e.prototype.bind.call(this, t);
                t.target = i.dW.TEXTURE_2D_ARRAY;
              };
              t.prototype.upload = function (e, t, n) {
                var r = this;
                var i = r.length;
                var s = r.itemDirtyIds;
                var a = r.items;
                var o = e.gl;
                if (n.dirtyId < 0) {
                  o.texImage3D(o.TEXTURE_2D_ARRAY, 0, n.internalFormat, this._width, this._height, i, 0, t.format, n.type, null);
                }
                for (var h = 0; h < i; h++) {
                  var l = a[h];
                  if (s[h] < l.dirtyId) {
                    s[h] = l.dirtyId;
                    if (l.valid) {
                      o.texSubImage3D(o.TEXTURE_2D_ARRAY, 0, 0, 0, h, l.resource.width, l.resource.height, 1, t.format, n.type, l.resource.source);
                    }
                  }
                }
                return true;
              };
              return t;
            }(g);
            var x = function (e) {
              function t(t) {
                var n = this;
                var r = t;
                var i = r.naturalWidth || r.videoWidth || r.width;
                var s = r.naturalHeight || r.videoHeight || r.height;
                (n = e.call(this, i, s) || this).source = t;
                n.noSubImage = false;
                return n;
              }
              p(t, e);
              t.crossOrigin = function (e, t, n) {
                if (n === undefined && t.indexOf("data:") !== 0) {
                  e.crossOrigin = (0, s.determineCrossOrigin)(t);
                } else if (n !== false) {
                  e.crossOrigin = typeof n == "string" ? n : "anonymous";
                }
              };
              t.prototype.upload = function (e, t, n, r) {
                var s = e.gl;
                var a = t.realWidth;
                var o = t.realHeight;
                if ((r = r || this.source) instanceof HTMLImageElement) {
                  if (!r.complete || r.naturalWidth === 0) {
                    return false;
                  }
                } else if (r instanceof HTMLVideoElement && r.readyState <= 1) {
                  return false;
                }
                s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.alphaMode === i.Gk.UNPACK);
                if (this.noSubImage || t.target !== s.TEXTURE_2D || n.width !== a || n.height !== o) {
                  n.width = a;
                  n.height = o;
                  s.texImage2D(t.target, 0, n.internalFormat, t.format, n.type, r);
                } else {
                  s.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, t.format, n.type, r);
                }
                return true;
              };
              t.prototype.update = function () {
                if (!this.destroyed) {
                  var t = this.source;
                  var n = t.naturalWidth || t.videoWidth || t.width;
                  var r = t.naturalHeight || t.videoHeight || t.height;
                  this.resize(n, r);
                  e.prototype.update.call(this);
                }
              };
              t.prototype.dispose = function () {
                this.source = null;
              };
              return t;
            }(f);
            var b = function (e) {
              function t(t) {
                return e.call(this, t) || this;
              }
              p(t, e);
              t.test = function (e) {
                var t = globalThis.OffscreenCanvas;
                return !!t && !!(e instanceof t) || globalThis.HTMLCanvasElement && e instanceof HTMLCanvasElement;
              };
              return t;
            }(x);
            var T = function (e) {
              function t(n, r) {
                var s = this;
                var a = r || {};
                var o = a.width;
                var h = a.height;
                var l = a.autoLoad;
                var d = a.linkBaseTexture;
                if (n && n.length !== t.SIDES) {
                  throw new Error("Invalid length. Got " + n.length + ", expected 6");
                }
                s = e.call(this, 6, {
                  width: o,
                  height: h
                }) || this;
                for (var c = 0; c < t.SIDES; c++) {
                  s.items[c].target = i.dW.TEXTURE_CUBE_MAP_POSITIVE_X + c;
                }
                s.linkBaseTexture = d !== false;
                if (n) {
                  s.initFromArray(n, r);
                }
                if (l !== false) {
                  s.load();
                }
                return s;
              }
              p(t, e);
              t.prototype.bind = function (t) {
                e.prototype.bind.call(this, t);
                t.target = i.dW.TEXTURE_CUBE_MAP;
              };
              t.prototype.addBaseTextureAt = function (e, t, n) {
                if (!this.items[t]) {
                  throw new Error("Index " + t + " is out of bounds");
                }
                if (!this.linkBaseTexture || e.parentTextureArray || Object.keys(e._glTextures).length > 0) {
                  if (!e.resource) {
                    throw new Error("CubeResource does not support copying of renderTexture.");
                  }
                  this.addResourceAt(e.resource, t);
                } else {
                  e.target = i.dW.TEXTURE_CUBE_MAP_POSITIVE_X + t;
                  e.parentTextureArray = this.baseTexture;
                  this.items[t] = e;
                }
                if (e.valid && !this.valid) {
                  this.resize(e.realWidth, e.realHeight);
                }
                this.items[t] = e;
                return this;
              };
              t.prototype.upload = function (e, n, r) {
                var i = this.itemDirtyIds;
                for (var s = 0; s < t.SIDES; s++) {
                  var a = this.items[s];
                  if (i[s] < a.dirtyId || r.dirtyId < n.dirtyId) {
                    if (a.valid && a.resource) {
                      a.resource.upload(e, a, r);
                      i[s] = a.dirtyId;
                    } else if (i[s] < -1) {
                      e.gl.texImage2D(a.target, 0, r.internalFormat, n.realWidth, n.realHeight, 0, n.format, r.type, null);
                      i[s] = -1;
                    }
                  }
                }
                return true;
              };
              t.test = function (e) {
                return Array.isArray(e) && e.length === t.SIDES;
              };
              t.SIDES = 6;
              return t;
            }(g);
            var A = function (e) {
              function t(t, n) {
                var i = this;
                n = n || {};
                if (!(t instanceof HTMLImageElement)) {
                  var s = new Image();
                  x.crossOrigin(s, t, n.crossorigin);
                  s.src = t;
                  t = s;
                }
                i = e.call(this, t) || this;
                if (!t.complete && i._width && i._height) {
                  i._width = 0;
                  i._height = 0;
                }
                i.url = t.src;
                i._process = null;
                i.preserveBitmap = false;
                i.createBitmap = (n.createBitmap !== undefined ? n.createBitmap : r.W0.CREATE_IMAGE_BITMAP) && !!globalThis.createImageBitmap;
                i.alphaMode = typeof n.alphaMode == "number" ? n.alphaMode : null;
                i.bitmap = null;
                i._load = null;
                if (n.autoLoad !== false) {
                  i.load();
                }
                return i;
              }
              p(t, e);
              t.prototype.load = function (e) {
                var t = this;
                if (!this._load) {
                  if (e !== undefined) {
                    this.createBitmap = e;
                  }
                  this._load = new Promise(function (e, n) {
                    var r = t.source;
                    t.url = r.src;
                    function i() {
                      if (!t.destroyed) {
                        r.onload = null;
                        r.onerror = null;
                        t.resize(r.width, r.height);
                        t._load = null;
                        if (t.createBitmap) {
                          e(t.process());
                        } else {
                          e(t);
                        }
                      }
                    }
                    if (r.complete && r.src) {
                      i();
                    } else {
                      r.onload = i;
                      r.onerror = function (e) {
                        n(e);
                        t.onError.emit(e);
                      };
                    }
                  });
                }
                return this._load;
              };
              t.prototype.process = function () {
                var e = this;
                var t = this.source;
                if (this._process !== null) {
                  return this._process;
                }
                if (this.bitmap !== null || !globalThis.createImageBitmap) {
                  return Promise.resolve(this);
                }
                var n = globalThis.createImageBitmap;
                var r = !t.crossOrigin || t.crossOrigin === "anonymous";
                this._process = fetch(t.src, {
                  mode: r ? "cors" : "no-cors"
                }).then(function (e) {
                  return e.blob();
                }).then(function (r) {
                  return n(r, 0, 0, t.width, t.height, {
                    premultiplyAlpha: e.alphaMode === null || e.alphaMode === i.Gk.UNPACK ? "premultiply" : "none"
                  });
                }).then(function (t) {
                  if (e.destroyed) {
                    return Promise.reject();
                  } else {
                    e.bitmap = t;
                    e.update();
                    e._process = null;
                    return Promise.resolve(e);
                  }
                });
                return this._process;
              };
              t.prototype.upload = function (t, n, r) {
                if (typeof this.alphaMode == "number") {
                  n.alphaMode = this.alphaMode;
                }
                if (!this.createBitmap) {
                  return e.prototype.upload.call(this, t, n, r);
                }
                if (!this.bitmap && (this.process(), !this.bitmap)) {
                  return false;
                }
                e.prototype.upload.call(this, t, n, r, this.bitmap);
                if (!this.preserveBitmap) {
                  var i = true;
                  var s = n._glTextures;
                  for (var a in s) {
                    var o = s[a];
                    if (o !== r && o.dirtyId !== n.dirtyId) {
                      i = false;
                      break;
                    }
                  }
                  if (i) {
                    if (this.bitmap.close) {
                      this.bitmap.close();
                    }
                    this.bitmap = null;
                  }
                }
                return true;
              };
              t.prototype.dispose = function () {
                this.source.onload = null;
                this.source.onerror = null;
                e.prototype.dispose.call(this);
                if (this.bitmap) {
                  this.bitmap.close();
                  this.bitmap = null;
                }
                this._process = null;
                this._load = null;
              };
              t.test = function (e) {
                return typeof e == "string" || e instanceof HTMLImageElement;
              };
              return t;
            }(x);
            var C = function (e) {
              function t(t, n) {
                var i = this;
                n = n || {};
                (i = e.call(this, r.W0.ADAPTER.createCanvas()) || this)._width = 0;
                i._height = 0;
                i.svg = t;
                i.scale = n.scale || 1;
                i._overrideWidth = n.width;
                i._overrideHeight = n.height;
                i._resolve = null;
                i._crossorigin = n.crossorigin;
                i._load = null;
                if (n.autoLoad !== false) {
                  i.load();
                }
                return i;
              }
              p(t, e);
              t.prototype.load = function () {
                var e = this;
                this._load ||= new Promise(function (n) {
                  e._resolve = function () {
                    e.resize(e.source.width, e.source.height);
                    n(e);
                  };
                  if (t.SVG_XML.test(e.svg.trim())) {
                    if (!btoa) {
                      throw new Error("Your browser doesn't support base64 conversions.");
                    }
                    e.svg = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(e.svg)));
                  }
                  e._loadSvg();
                });
                return this._load;
              };
              t.prototype._loadSvg = function () {
                var e = this;
                var t = new Image();
                x.crossOrigin(t, this.svg, this._crossorigin);
                t.src = this.svg;
                t.onerror = function (n) {
                  if (e._resolve) {
                    t.onerror = null;
                    e.onError.emit(n);
                  }
                };
                t.onload = function () {
                  if (e._resolve) {
                    var n = t.width;
                    var r = t.height;
                    if (!n || !r) {
                      throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");
                    }
                    var i = n * e.scale;
                    var a = r * e.scale;
                    if (e._overrideWidth || e._overrideHeight) {
                      i = e._overrideWidth || e._overrideHeight / r * n;
                      a = e._overrideHeight || e._overrideWidth / n * r;
                    }
                    i = Math.round(i);
                    a = Math.round(a);
                    var o = e.source;
                    o.width = i;
                    o.height = a;
                    o._pixiId = "canvas_" + (0, s.uid)();
                    o.getContext("2d").drawImage(t, 0, 0, n, r, 0, 0, i, a);
                    e._resolve();
                    e._resolve = null;
                  }
                };
              };
              t.getSize = function (e) {
                var n = t.SVG_SIZE.exec(e);
                var r = {};
                if (n) {
                  r[n[1]] = Math.round(parseFloat(n[3]));
                  r[n[5]] = Math.round(parseFloat(n[7]));
                }
                return r;
              };
              t.prototype.dispose = function () {
                e.prototype.dispose.call(this);
                this._resolve = null;
                this._crossorigin = null;
              };
              t.test = function (e, n) {
                return n === "svg" || typeof e == "string" && e.startsWith("data:image/svg+xml") || typeof e == "string" && t.SVG_XML.test(e);
              };
              t.SVG_XML = /^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m;
              t.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i;
              return t;
            }(x);
            var S = function (e) {
              function t(n, r) {
                var i = this;
                r = r || {};
                if (!(n instanceof HTMLVideoElement)) {
                  var s = document.createElement("video");
                  s.setAttribute("preload", "auto");
                  s.setAttribute("webkit-playsinline", "");
                  s.setAttribute("playsinline", "");
                  if (typeof n == "string") {
                    n = [n];
                  }
                  var a = n[0].src || n[0];
                  x.crossOrigin(s, a, r.crossorigin);
                  for (var o = 0; o < n.length; ++o) {
                    var h = document.createElement("source");
                    var l = n[o];
                    var d = l.src;
                    var c = l.mime;
                    var u = (d = d || n[o]).split("?").shift().toLowerCase();
                    var p = u.slice(u.lastIndexOf(".") + 1);
                    c = c || t.MIME_TYPES[p] || "video/" + p;
                    h.src = d;
                    h.type = c;
                    s.appendChild(h);
                  }
                  n = s;
                }
                (i = e.call(this, n) || this).noSubImage = true;
                i._autoUpdate = true;
                i._isConnectedToTicker = false;
                i._updateFPS = r.updateFPS || 0;
                i._msToNextUpdate = 0;
                i.autoPlay = r.autoPlay !== false;
                i._load = null;
                i._resolve = null;
                i._onCanPlay = i._onCanPlay.bind(i);
                i._onError = i._onError.bind(i);
                if (r.autoLoad !== false) {
                  i.load();
                }
                return i;
              }
              p(t, e);
              t.prototype.update = function (t) {
                if (!this.destroyed) {
                  var n = h.Rv.shared.elapsedMS * this.source.playbackRate;
                  this._msToNextUpdate = Math.floor(this._msToNextUpdate - n);
                  if (!this._updateFPS || this._msToNextUpdate <= 0) {
                    e.prototype.update.call(this);
                    this._msToNextUpdate = this._updateFPS ? Math.floor(1000 / this._updateFPS) : 0;
                  }
                }
              };
              t.prototype.load = function () {
                var e = this;
                if (this._load) {
                  return this._load;
                }
                var t = this.source;
                if ((t.readyState === t.HAVE_ENOUGH_DATA || t.readyState === t.HAVE_FUTURE_DATA) && t.width && t.height) {
                  t.complete = true;
                }
                t.addEventListener("play", this._onPlayStart.bind(this));
                t.addEventListener("pause", this._onPlayStop.bind(this));
                if (this._isSourceReady()) {
                  this._onCanPlay();
                } else {
                  t.addEventListener("canplay", this._onCanPlay);
                  t.addEventListener("canplaythrough", this._onCanPlay);
                  t.addEventListener("error", this._onError, true);
                }
                this._load = new Promise(function (n) {
                  if (e.valid) {
                    n(e);
                  } else {
                    e._resolve = n;
                    t.load();
                  }
                });
                return this._load;
              };
              t.prototype._onError = function (e) {
                this.source.removeEventListener("error", this._onError, true);
                this.onError.emit(e);
              };
              t.prototype._isSourcePlaying = function () {
                var e = this.source;
                return !e.paused && !e.ended && this._isSourceReady();
              };
              t.prototype._isSourceReady = function () {
                return this.source.readyState > 2;
              };
              t.prototype._onPlayStart = function () {
                if (!this.valid) {
                  this._onCanPlay();
                }
                if (this.autoUpdate && !this._isConnectedToTicker) {
                  h.Rv.shared.add(this.update, this);
                  this._isConnectedToTicker = true;
                }
              };
              t.prototype._onPlayStop = function () {
                if (this._isConnectedToTicker) {
                  h.Rv.shared.remove(this.update, this);
                  this._isConnectedToTicker = false;
                }
              };
              t.prototype._onCanPlay = function () {
                var e = this.source;
                e.removeEventListener("canplay", this._onCanPlay);
                e.removeEventListener("canplaythrough", this._onCanPlay);
                var t = this.valid;
                this.resize(e.videoWidth, e.videoHeight);
                if (!t && this._resolve) {
                  this._resolve(this);
                  this._resolve = null;
                }
                if (this._isSourcePlaying()) {
                  this._onPlayStart();
                } else if (this.autoPlay) {
                  e.play();
                }
              };
              t.prototype.dispose = function () {
                if (this._isConnectedToTicker) {
                  h.Rv.shared.remove(this.update, this);
                  this._isConnectedToTicker = false;
                }
                var t = this.source;
                if (t) {
                  t.removeEventListener("error", this._onError, true);
                  t.pause();
                  t.src = "";
                  t.load();
                }
                e.prototype.dispose.call(this);
              };
              Object.defineProperty(t.prototype, "autoUpdate", {
                get: function () {
                  return this._autoUpdate;
                },
                set: function (e) {
                  if (e !== this._autoUpdate) {
                    this._autoUpdate = e;
                    if (!this._autoUpdate && this._isConnectedToTicker) {
                      h.Rv.shared.remove(this.update, this);
                      this._isConnectedToTicker = false;
                    } else if (this._autoUpdate && !this._isConnectedToTicker && this._isSourcePlaying()) {
                      h.Rv.shared.add(this.update, this);
                      this._isConnectedToTicker = true;
                    }
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "updateFPS", {
                get: function () {
                  return this._updateFPS;
                },
                set: function (e) {
                  if (e !== this._updateFPS) {
                    this._updateFPS = e;
                  }
                },
                enumerable: false,
                configurable: true
              });
              t.test = function (e, n) {
                return globalThis.HTMLVideoElement && e instanceof HTMLVideoElement || t.TYPES.indexOf(n) > -1;
              };
              t.TYPES = ["mp4", "m4v", "webm", "ogg", "ogv", "h264", "avi", "mov"];
              t.MIME_TYPES = {
                ogv: "video/ogg",
                mov: "video/quicktime",
                m4v: "video/mp4"
              };
              return t;
            }(x);
            var E = function (e) {
              function t(t) {
                return e.call(this, t) || this;
              }
              p(t, e);
              t.test = function (e) {
                return !!globalThis.createImageBitmap && typeof ImageBitmap != "undefined" && e instanceof ImageBitmap;
              };
              return t;
            }(x);
            d.push(A, E, b, S, C, _, T, w);
            var O = {
              __proto__: null,
              Resource: f,
              BaseImageResource: x,
              INSTALLED: d,
              autoDetectResource: c,
              AbstractMultiResource: g,
              ArrayResource: w,
              BufferResource: _,
              CanvasResource: b,
              CubeResource: T,
              ImageResource: A,
              SVGResource: C,
              VideoResource: S,
              ImageBitmapResource: E
            };
            var k = function (e) {
              function t() {
                return e !== null && e.apply(this, arguments) || this;
              }
              p(t, e);
              t.prototype.upload = function (e, t, n) {
                var r = e.gl;
                r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.alphaMode === i.Gk.UNPACK);
                var s = t.realWidth;
                var a = t.realHeight;
                if (n.width === s && n.height === a) {
                  r.texSubImage2D(t.target, 0, 0, 0, s, a, t.format, n.type, this.data);
                } else {
                  n.width = s;
                  n.height = a;
                  r.texImage2D(t.target, 0, n.internalFormat, s, a, 0, t.format, n.type, this.data);
                }
                return true;
              };
              return t;
            }(_);
            var P = function () {
              function e(e, t) {
                this.width = Math.round(e || 100);
                this.height = Math.round(t || 100);
                this.stencil = false;
                this.depth = false;
                this.dirtyId = 0;
                this.dirtyFormat = 0;
                this.dirtySize = 0;
                this.depthTexture = null;
                this.colorTextures = [];
                this.glFramebuffers = {};
                this.disposeRunner = new o.b("disposeFramebuffer");
                this.multisample = i.he.NONE;
              }
              Object.defineProperty(e.prototype, "colorTexture", {
                get: function () {
                  return this.colorTextures[0];
                },
                enumerable: false,
                configurable: true
              });
              e.prototype.addColorTexture = function (e = 0, t) {
                this.colorTextures[e] = t || new y(null, {
                  scaleMode: i.M6.NEAREST,
                  resolution: 1,
                  mipmap: i.E8.OFF,
                  width: this.width,
                  height: this.height
                });
                this.dirtyId++;
                this.dirtyFormat++;
                return this;
              };
              e.prototype.addDepthTexture = function (e) {
                this.depthTexture = e || new y(new k(null, {
                  width: this.width,
                  height: this.height
                }), {
                  scaleMode: i.M6.NEAREST,
                  resolution: 1,
                  width: this.width,
                  height: this.height,
                  mipmap: i.E8.OFF,
                  format: i.hR.DEPTH_COMPONENT,
                  type: i.QE.UNSIGNED_SHORT
                });
                this.dirtyId++;
                this.dirtyFormat++;
                return this;
              };
              e.prototype.enableDepth = function () {
                this.depth = true;
                this.dirtyId++;
                this.dirtyFormat++;
                return this;
              };
              e.prototype.enableStencil = function () {
                this.stencil = true;
                this.dirtyId++;
                this.dirtyFormat++;
                return this;
              };
              e.prototype.resize = function (e, t) {
                e = Math.round(e);
                t = Math.round(t);
                if (e !== this.width || t !== this.height) {
                  this.width = e;
                  this.height = t;
                  this.dirtyId++;
                  this.dirtySize++;
                  for (var n = 0; n < this.colorTextures.length; n++) {
                    var r = this.colorTextures[n];
                    var i = r.resolution;
                    r.setSize(e / i, t / i);
                  }
                  if (this.depthTexture) {
                    i = this.depthTexture.resolution;
                    this.depthTexture.setSize(e / i, t / i);
                  }
                }
              };
              e.prototype.dispose = function () {
                this.disposeRunner.emit(this, false);
              };
              e.prototype.destroyDepthTexture = function () {
                if (this.depthTexture) {
                  this.depthTexture.destroy();
                  this.depthTexture = null;
                  ++this.dirtyId;
                  ++this.dirtyFormat;
                }
              };
              return e;
            }();
            var M = function (e) {
              function t(t = {}) {
                var n = this;
                if (typeof t == "number") {
                  t = {
                    width: arguments[0],
                    height: arguments[1],
                    scaleMode: arguments[2],
                    resolution: arguments[3]
                  };
                }
                t.width = t.width || 100;
                t.height = t.height || 100;
                t.multisample = t.multisample !== undefined ? t.multisample : i.he.NONE;
                (n = e.call(this, null, t) || this).mipmap = i.E8.OFF;
                n.valid = true;
                n.clearColor = [0, 0, 0, 0];
                n.framebuffer = new P(n.realWidth, n.realHeight).addColorTexture(0, n);
                n.framebuffer.multisample = t.multisample;
                n.maskStack = [];
                n.filterStack = [{}];
                return n;
              }
              p(t, e);
              t.prototype.resize = function (e, t) {
                this.framebuffer.resize(e * this.resolution, t * this.resolution);
                this.setRealSize(this.framebuffer.width, this.framebuffer.height);
              };
              t.prototype.dispose = function () {
                this.framebuffer.dispose();
                e.prototype.dispose.call(this);
              };
              t.prototype.destroy = function () {
                e.prototype.destroy.call(this);
                this.framebuffer.destroyDepthTexture();
                this.framebuffer = null;
              };
              return t;
            }(y);
            var R = function () {
              function e() {
                this.x0 = 0;
                this.y0 = 0;
                this.x1 = 1;
                this.y1 = 0;
                this.x2 = 1;
                this.y2 = 1;
                this.x3 = 0;
                this.y3 = 1;
                this.uvsFloat32 = new Float32Array(8);
              }
              e.prototype.set = function (e, t, n) {
                var r = t.width;
                var i = t.height;
                if (n) {
                  var s = e.width / 2 / r;
                  var a = e.height / 2 / i;
                  var o = e.x / r + s;
                  var h = e.y / i + a;
                  n = l.ER.add(n, l.ER.NW);
                  this.x0 = o + s * l.ER.uX(n);
                  this.y0 = h + a * l.ER.uY(n);
                  n = l.ER.add(n, 2);
                  this.x1 = o + s * l.ER.uX(n);
                  this.y1 = h + a * l.ER.uY(n);
                  n = l.ER.add(n, 2);
                  this.x2 = o + s * l.ER.uX(n);
                  this.y2 = h + a * l.ER.uY(n);
                  n = l.ER.add(n, 2);
                  this.x3 = o + s * l.ER.uX(n);
                  this.y3 = h + a * l.ER.uY(n);
                } else {
                  this.x0 = e.x / r;
                  this.y0 = e.y / i;
                  this.x1 = (e.x + e.width) / r;
                  this.y1 = e.y / i;
                  this.x2 = (e.x + e.width) / r;
                  this.y2 = (e.y + e.height) / i;
                  this.x3 = e.x / r;
                  this.y3 = (e.y + e.height) / i;
                }
                this.uvsFloat32[0] = this.x0;
                this.uvsFloat32[1] = this.y0;
                this.uvsFloat32[2] = this.x1;
                this.uvsFloat32[3] = this.y1;
                this.uvsFloat32[4] = this.x2;
                this.uvsFloat32[5] = this.y2;
                this.uvsFloat32[6] = this.x3;
                this.uvsFloat32[7] = this.y3;
              };
              e.prototype.toString = function () {
                return "[@pixi/core:TextureUvs x0=" + this.x0 + " y0=" + this.y0 + " x1=" + this.x1 + " y1=" + this.y1 + " x2=" + this.x2 + " y2=" + this.y2 + " x3=" + this.x3 + " y3=" + this.y3 + "]";
              };
              return e;
            }();
            var I = new R();
            function L(e) {
              e.destroy = function () {};
              e.on = function () {};
              e.once = function () {};
              e.emit = function () {};
            }
            var j = function (e) {
              function t(n, r, i, s, a, o) {
                var h = e.call(this) || this;
                h.noFrame = false;
                if (!r) {
                  h.noFrame = true;
                  r = new l.M_(0, 0, 1, 1);
                }
                if (n instanceof t) {
                  n = n.baseTexture;
                }
                h.baseTexture = n;
                h._frame = r;
                h.trim = s;
                h.valid = false;
                h._uvs = I;
                h.uvMatrix = null;
                h.orig = i || r;
                h._rotate = Number(a || 0);
                if (a === true) {
                  h._rotate = 2;
                } else if (h._rotate % 2 != 0) {
                  throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");
                }
                h.defaultAnchor = o ? new l.bR(o.x, o.y) : new l.bR(0, 0);
                h._updateID = 0;
                h.textureCacheIds = [];
                if (n.valid) {
                  if (h.noFrame) {
                    if (n.valid) {
                      h.onBaseTextureUpdated(n);
                    }
                  } else {
                    h.frame = r;
                  }
                } else {
                  n.once("loaded", h.onBaseTextureUpdated, h);
                }
                if (h.noFrame) {
                  n.on("update", h.onBaseTextureUpdated, h);
                }
                return h;
              }
              p(t, e);
              t.prototype.update = function () {
                if (this.baseTexture.resource) {
                  this.baseTexture.resource.update();
                }
              };
              t.prototype.onBaseTextureUpdated = function (e) {
                if (this.noFrame) {
                  if (!this.baseTexture.valid) {
                    return;
                  }
                  this._frame.width = e.width;
                  this._frame.height = e.height;
                  this.valid = true;
                  this.updateUvs();
                } else {
                  this.frame = this._frame;
                }
                this.emit("update", this);
              };
              t.prototype.destroy = function (e) {
                if (this.baseTexture) {
                  if (e) {
                    var n = this.baseTexture.resource;
                    if (n && n.url && s.TextureCache[n.url]) {
                      t.removeFromCache(n.url);
                    }
                    this.baseTexture.destroy();
                  }
                  this.baseTexture.off("loaded", this.onBaseTextureUpdated, this);
                  this.baseTexture.off("update", this.onBaseTextureUpdated, this);
                  this.baseTexture = null;
                }
                this._frame = null;
                this._uvs = null;
                this.trim = null;
                this.orig = null;
                this.valid = false;
                t.removeFromCache(this);
                this.textureCacheIds = null;
              };
              t.prototype.clone = function () {
                var e = this._frame.clone();
                var n = this._frame === this.orig ? e : this.orig.clone();
                var r = new t(this.baseTexture, !this.noFrame && e, n, this.trim && this.trim.clone(), this.rotate, this.defaultAnchor);
                if (this.noFrame) {
                  r._frame = e;
                }
                return r;
              };
              t.prototype.updateUvs = function () {
                if (this._uvs === I) {
                  this._uvs = new R();
                }
                this._uvs.set(this._frame, this.baseTexture, this.rotate);
                this._updateID++;
              };
              t.from = function (e, n = {}, i = r.W0.STRICT_TEXTURE_CACHE) {
                var a = typeof e == "string";
                var o = null;
                if (a) {
                  o = e;
                } else if (e instanceof y) {
                  if (!e.cacheId) {
                    var h = n && n.pixiIdPrefix || "pixiid";
                    e.cacheId = h + "-" + (0, s.uid)();
                    y.addToCache(e, e.cacheId);
                  }
                  o = e.cacheId;
                } else {
                  if (!e._pixiId) {
                    h = n && n.pixiIdPrefix || "pixiid";
                    e._pixiId = h + "_" + (0, s.uid)();
                  }
                  o = e._pixiId;
                }
                var l = s.TextureCache[o];
                if (a && i && !l) {
                  throw new Error("The cacheId \"" + o + "\" does not exist in TextureCache.");
                }
                if (l || e instanceof y) {
                  if (!l && e instanceof y) {
                    l = new t(e);
                    t.addToCache(l, o);
                  }
                } else {
                  n.resolution ||= (0, s.getResolutionOfUrl)(e);
                  (l = new t(new y(e, n))).baseTexture.cacheId = o;
                  y.addToCache(l.baseTexture, o);
                  t.addToCache(l, o);
                }
                return l;
              };
              t.fromURL = function (e, n) {
                var r = Object.assign({
                  autoLoad: false
                }, n == null ? undefined : n.resourceOptions);
                var i = t.from(e, Object.assign({
                  resourceOptions: r
                }, n), false);
                var s = i.baseTexture.resource;
                if (i.baseTexture.valid) {
                  return Promise.resolve(i);
                } else {
                  return s.load().then(function () {
                    return Promise.resolve(i);
                  });
                }
              };
              t.fromBuffer = function (e, n, r, i) {
                return new t(y.fromBuffer(e, n, r, i));
              };
              t.fromLoader = function (e, n, i, a) {
                var o = new y(e, Object.assign({
                  scaleMode: r.W0.SCALE_MODE,
                  resolution: (0, s.getResolutionOfUrl)(n)
                }, a));
                var h = o.resource;
                if (h instanceof A) {
                  h.url = n;
                }
                var l = new t(o);
                i ||= n;
                y.addToCache(l.baseTexture, i);
                t.addToCache(l, i);
                if (i !== n) {
                  y.addToCache(l.baseTexture, n);
                  t.addToCache(l, n);
                }
                if (l.baseTexture.valid) {
                  return Promise.resolve(l);
                } else {
                  return new Promise(function (e) {
                    l.baseTexture.once("loaded", function () {
                      return e(l);
                    });
                  });
                }
              };
              t.addToCache = function (e, t) {
                if (t) {
                  if (e.textureCacheIds.indexOf(t) === -1) {
                    e.textureCacheIds.push(t);
                  }
                  s.TextureCache[t];
                  s.TextureCache[t] = e;
                }
              };
              t.removeFromCache = function (e) {
                if (typeof e == "string") {
                  var t = s.TextureCache[e];
                  if (t) {
                    var n = t.textureCacheIds.indexOf(e);
                    if (n > -1) {
                      t.textureCacheIds.splice(n, 1);
                    }
                    delete s.TextureCache[e];
                    return t;
                  }
                } else if (e && e.textureCacheIds) {
                  for (var r = 0; r < e.textureCacheIds.length; ++r) {
                    if (s.TextureCache[e.textureCacheIds[r]] === e) {
                      delete s.TextureCache[e.textureCacheIds[r]];
                    }
                  }
                  e.textureCacheIds.length = 0;
                  return e;
                }
                return null;
              };
              Object.defineProperty(t.prototype, "resolution", {
                get: function () {
                  return this.baseTexture.resolution;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "frame", {
                get: function () {
                  return this._frame;
                },
                set: function (e) {
                  this._frame = e;
                  this.noFrame = false;
                  var t = e.x;
                  var n = e.y;
                  var r = e.width;
                  var i = e.height;
                  var s = t + r > this.baseTexture.width;
                  var a = n + i > this.baseTexture.height;
                  if (s || a) {
                    var o = s && a ? "and" : "or";
                    var h = "X: " + t + " + " + r + " = " + (t + r) + " > " + this.baseTexture.width;
                    var l = "Y: " + n + " + " + i + " = " + (n + i) + " > " + this.baseTexture.height;
                    throw new Error("Texture Error: frame does not fit inside the base Texture dimensions: " + h + " " + o + " " + l);
                  }
                  this.valid = r && i && this.baseTexture.valid;
                  if (!this.trim && !this.rotate) {
                    this.orig = e;
                  }
                  if (this.valid) {
                    this.updateUvs();
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "rotate", {
                get: function () {
                  return this._rotate;
                },
                set: function (e) {
                  this._rotate = e;
                  if (this.valid) {
                    this.updateUvs();
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "width", {
                get: function () {
                  return this.orig.width;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "height", {
                get: function () {
                  return this.orig.height;
                },
                enumerable: false,
                configurable: true
              });
              t.prototype.castToBaseTexture = function () {
                return this.baseTexture;
              };
              Object.defineProperty(t, "EMPTY", {
                get: function () {
                  if (!t._EMPTY) {
                    t._EMPTY = new t(new y());
                    L(t._EMPTY);
                    L(t._EMPTY.baseTexture);
                  }
                  return t._EMPTY;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t, "WHITE", {
                get: function () {
                  if (!t._WHITE) {
                    var e = r.W0.ADAPTER.createCanvas(16, 16);
                    var n = e.getContext("2d");
                    e.width = 16;
                    e.height = 16;
                    n.fillStyle = "white";
                    n.fillRect(0, 0, 16, 16);
                    t._WHITE = new t(y.from(e));
                    L(t._WHITE);
                    L(t._WHITE.baseTexture);
                  }
                  return t._WHITE;
                },
                enumerable: false,
                configurable: true
              });
              return t;
            }(s.EventEmitter);
            var B = function (e) {
              function t(t, n) {
                var r = e.call(this, t, n) || this;
                r.valid = true;
                r.filterFrame = null;
                r.filterPoolKey = null;
                r.updateUvs();
                return r;
              }
              p(t, e);
              Object.defineProperty(t.prototype, "framebuffer", {
                get: function () {
                  return this.baseTexture.framebuffer;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "multisample", {
                get: function () {
                  return this.framebuffer.multisample;
                },
                set: function (e) {
                  this.framebuffer.multisample = e;
                },
                enumerable: false,
                configurable: true
              });
              t.prototype.resize = function (e, t, n = true) {
                var r = this.baseTexture.resolution;
                var i = Math.round(e * r) / r;
                var s = Math.round(t * r) / r;
                this.valid = i > 0 && s > 0;
                this._frame.width = this.orig.width = i;
                this._frame.height = this.orig.height = s;
                if (n) {
                  this.baseTexture.resize(i, s);
                }
                this.updateUvs();
              };
              t.prototype.setResolution = function (e) {
                var t = this.baseTexture;
                if (t.resolution !== e) {
                  t.setResolution(e);
                  this.resize(t.width, t.height, false);
                }
              };
              t.create = function (e) {
                var n = arguments;
                var r = [];
                for (var i = 1; i < arguments.length; i++) {
                  r[i - 1] = n[i];
                }
                if (typeof e == "number") {
                  (0, s.deprecation)("6.0.0", "Arguments (width, height, scaleMode, resolution) have been deprecated.");
                  e = {
                    width: e,
                    height: r[0],
                    scaleMode: r[1],
                    resolution: r[2]
                  };
                }
                return new t(new M(e));
              };
              return t;
            }(j);
            var D = function () {
              function e(e) {
                this.texturePool = {};
                this.textureOptions = e || {};
                this.enableFullScreen = false;
                this._pixelsWidth = 0;
                this._pixelsHeight = 0;
              }
              e.prototype.createTexture = function (e, t, n = i.he.NONE) {
                var r = new M(Object.assign({
                  width: e,
                  height: t,
                  resolution: 1,
                  multisample: n
                }, this.textureOptions));
                return new B(r);
              };
              e.prototype.getOptimalTexture = function (e, t, n, r) {
                var a;
                if (n === undefined) {
                  n = 1;
                }
                if (r === undefined) {
                  r = i.he.NONE;
                }
                e = Math.ceil(e * n - 0.000001);
                t = Math.ceil(t * n - 0.000001);
                if (this.enableFullScreen && e === this._pixelsWidth && t === this._pixelsHeight) {
                  a = r > 1 ? -r : -1;
                } else {
                  a = (((e = (0, s.nextPow2)(e)) & 65535) << 16 | (t = (0, s.nextPow2)(t)) & 65535) >>> 0;
                  if (r > 1) {
                    a += r * 4294967296;
                  }
                }
                this.texturePool[a] ||= [];
                var o = this.texturePool[a].pop();
                o ||= this.createTexture(e, t, r);
                o.filterPoolKey = a;
                o.setResolution(n);
                return o;
              };
              e.prototype.getFilterTexture = function (e, t, n) {
                var r = this.getOptimalTexture(e.width, e.height, t || e.resolution, n || i.he.NONE);
                r.filterFrame = e.filterFrame;
                return r;
              };
              e.prototype.returnTexture = function (e) {
                var t = e.filterPoolKey;
                e.filterFrame = null;
                this.texturePool[t].push(e);
              };
              e.prototype.returnFilterTexture = function (e) {
                this.returnTexture(e);
              };
              e.prototype.clear = function (e) {
                if (e = e !== false) {
                  for (var t in this.texturePool) {
                    var n = this.texturePool[t];
                    if (n) {
                      for (var r = 0; r < n.length; r++) {
                        n[r].destroy(true);
                      }
                    }
                  }
                }
                this.texturePool = {};
              };
              e.prototype.setScreenSize = function (e) {
                if (e.width !== this._pixelsWidth || e.height !== this._pixelsHeight) {
                  this.enableFullScreen = e.width > 0 && e.height > 0;
                  for (var t in this.texturePool) {
                    if (Number(t) < 0) {
                      var n = this.texturePool[t];
                      if (n) {
                        for (var r = 0; r < n.length; r++) {
                          n[r].destroy(true);
                        }
                      }
                      this.texturePool[t] = [];
                    }
                  }
                  this._pixelsWidth = e.width;
                  this._pixelsHeight = e.height;
                }
              };
              e.SCREEN_KEY = -1;
              return e;
            }();
            var F = function () {
              function e(e, t = 0, n = false, r = i.QE.FLOAT, s, a, o) {
                this.buffer = e;
                this.size = t;
                this.normalized = n;
                this.type = r;
                this.stride = s;
                this.start = a;
                this.instance = o;
              }
              e.prototype.destroy = function () {
                this.buffer = null;
              };
              e.from = function (t, n, r, i, s) {
                return new e(t, n, r, i, s);
              };
              return e;
            }();
            var N = 0;
            var G = function () {
              function e(e, t = true, n = false) {
                this.data = e || new Float32Array(1);
                this._glBuffers = {};
                this._updateID = 0;
                this.index = n;
                this.static = t;
                this.id = N++;
                this.disposeRunner = new o.b("disposeBuffer");
              }
              e.prototype.update = function (e) {
                if (e instanceof Array) {
                  e = new Float32Array(e);
                }
                this.data = e || this.data;
                this._updateID++;
              };
              e.prototype.dispose = function () {
                this.disposeRunner.emit(this, false);
              };
              e.prototype.destroy = function () {
                this.dispose();
                this.data = null;
              };
              Object.defineProperty(e.prototype, "index", {
                get: function () {
                  return this.type === i.yw.ELEMENT_ARRAY_BUFFER;
                },
                set: function (e) {
                  this.type = e ? i.yw.ELEMENT_ARRAY_BUFFER : i.yw.ARRAY_BUFFER;
                },
                enumerable: false,
                configurable: true
              });
              e.from = function (t) {
                if (t instanceof Array) {
                  t = new Float32Array(t);
                }
                return new e(t);
              };
              return e;
            }();
            var U = {
              Float32Array,
              Uint32Array,
              Int32Array,
              Uint8Array
            };
            var V = {
              5126: 4,
              5123: 2,
              5121: 1
            };
            var H = 0;
            var z = {
              Float32Array,
              Uint32Array,
              Int32Array,
              Uint8Array,
              Uint16Array
            };
            var W = function () {
              function e(e = [], t = {}) {
                this.buffers = e;
                this.indexBuffer = null;
                this.attributes = t;
                this.glVertexArrayObjects = {};
                this.id = H++;
                this.instanced = false;
                this.instanceCount = 1;
                this.disposeRunner = new o.b("disposeGeometry");
                this.refCount = 0;
              }
              e.prototype.addAttribute = function (e, t, n = 0, r = false, i, s, a, o = false) {
                if (!t) {
                  throw new Error("You must pass a buffer when creating an attribute");
                }
                if (!(t instanceof G)) {
                  if (t instanceof Array) {
                    t = new Float32Array(t);
                  }
                  t = new G(t);
                }
                var h = e.split("|");
                if (h.length > 1) {
                  for (var l = 0; l < h.length; l++) {
                    this.addAttribute(h[l], t, n, r, i);
                  }
                  return this;
                }
                var d = this.buffers.indexOf(t);
                if (d === -1) {
                  this.buffers.push(t);
                  d = this.buffers.length - 1;
                }
                this.attributes[e] = new F(d, n, r, i, s, a, o);
                this.instanced = this.instanced || o;
                return this;
              };
              e.prototype.getAttribute = function (e) {
                return this.attributes[e];
              };
              e.prototype.getBuffer = function (e) {
                return this.buffers[this.getAttribute(e).buffer];
              };
              e.prototype.addIndex = function (e) {
                if (!(e instanceof G)) {
                  if (e instanceof Array) {
                    e = new Uint16Array(e);
                  }
                  e = new G(e);
                }
                e.type = i.yw.ELEMENT_ARRAY_BUFFER;
                this.indexBuffer = e;
                if (this.buffers.indexOf(e) === -1) {
                  this.buffers.push(e);
                }
                return this;
              };
              e.prototype.getIndex = function () {
                return this.indexBuffer;
              };
              e.prototype.interleave = function () {
                if (this.buffers.length === 1 || this.buffers.length === 2 && this.indexBuffer) {
                  return this;
                }
                var e;
                var t = [];
                var n = [];
                var r = new G();
                for (e in this.attributes) {
                  var i = this.attributes[e];
                  var a = this.buffers[i.buffer];
                  t.push(a.data);
                  n.push(i.size * V[i.type] / 4);
                  i.buffer = 0;
                }
                r.data = function (e, t) {
                  var n = 0;
                  var r = 0;
                  var i = {};
                  for (var a = 0; a < e.length; a++) {
                    r += t[a];
                    n += e[a].length;
                  }
                  var o = new ArrayBuffer(n * 4);
                  var h = null;
                  var l = 0;
                  for (a = 0; a < e.length; a++) {
                    var d = t[a];
                    var c = e[a];
                    var u = (0, s.getBufferType)(c);
                    i[u] ||= new U[u](o);
                    h = i[u];
                    for (var p = 0; p < c.length; p++) {
                      h[(p / d | 0) * r + l + p % d] = c[p];
                    }
                    l += d;
                  }
                  return new Float32Array(o);
                }(t, n);
                e = 0;
                for (; e < this.buffers.length; e++) {
                  if (this.buffers[e] !== this.indexBuffer) {
                    this.buffers[e].destroy();
                  }
                }
                this.buffers = [r];
                if (this.indexBuffer) {
                  this.buffers.push(this.indexBuffer);
                }
                return this;
              };
              e.prototype.getSize = function () {
                for (var e in this.attributes) {
                  var t = this.attributes[e];
                  return this.buffers[t.buffer].data.length / (t.stride / 4 || t.size);
                }
                return 0;
              };
              e.prototype.dispose = function () {
                this.disposeRunner.emit(this, false);
              };
              e.prototype.destroy = function () {
                this.dispose();
                this.buffers = null;
                this.indexBuffer = null;
                this.attributes = null;
              };
              e.prototype.clone = function () {
                var t = new e();
                for (var n = 0; n < this.buffers.length; n++) {
                  t.buffers[n] = new G(this.buffers[n].data.slice(0));
                }
                for (var n in this.attributes) {
                  var r = this.attributes[n];
                  t.attributes[n] = new F(r.buffer, r.size, r.normalized, r.type, r.stride, r.start, r.instance);
                }
                if (this.indexBuffer) {
                  t.indexBuffer = t.buffers[this.buffers.indexOf(this.indexBuffer)];
                  t.indexBuffer.type = i.yw.ELEMENT_ARRAY_BUFFER;
                }
                return t;
              };
              e.merge = function (t) {
                var n;
                var r = new e();
                var a = [];
                var o = [];
                var h = [];
                for (var l = 0; l < t.length; l++) {
                  n = t[l];
                  for (var d = 0; d < n.buffers.length; d++) {
                    o[d] = o[d] || 0;
                    o[d] += n.buffers[d].data.length;
                    h[d] = 0;
                  }
                }
                for (l = 0; l < n.buffers.length; l++) {
                  a[l] = new z[(0, s.getBufferType)(n.buffers[l].data)](o[l]);
                  r.buffers[l] = new G(a[l]);
                }
                for (l = 0; l < t.length; l++) {
                  n = t[l];
                  d = 0;
                  for (; d < n.buffers.length; d++) {
                    a[d].set(n.buffers[d].data, h[d]);
                    h[d] += n.buffers[d].data.length;
                  }
                }
                r.attributes = n.attributes;
                if (n.indexBuffer) {
                  r.indexBuffer = r.buffers[n.buffers.indexOf(n.indexBuffer)];
                  r.indexBuffer.type = i.yw.ELEMENT_ARRAY_BUFFER;
                  var c = 0;
                  var u = 0;
                  var p = 0;
                  var m = 0;
                  for (l = 0; l < n.buffers.length; l++) {
                    if (n.buffers[l] !== n.indexBuffer) {
                      m = l;
                      break;
                    }
                  }
                  for (var l in n.attributes) {
                    var f = n.attributes[l];
                    if ((f.buffer | 0) === m) {
                      u += f.size * V[f.type] / 4;
                    }
                  }
                  for (l = 0; l < t.length; l++) {
                    var _ = t[l].indexBuffer.data;
                    for (d = 0; d < _.length; d++) {
                      r.indexBuffer.data[d + p] += c;
                    }
                    c += t[l].buffers[m].data.length / u;
                    p += _.length;
                  }
                }
                return r;
              };
              return e;
            }();
            var X = function (e) {
              function t() {
                var t = e.call(this) || this;
                t.addAttribute("aVertexPosition", new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])).addIndex([0, 1, 3, 2]);
                return t;
              }
              p(t, e);
              return t;
            }(W);
            var Y = function (e) {
              function t() {
                var t = e.call(this) || this;
                t.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]);
                t.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]);
                t.vertexBuffer = new G(t.vertices);
                t.uvBuffer = new G(t.uvs);
                t.addAttribute("aVertexPosition", t.vertexBuffer).addAttribute("aTextureCoord", t.uvBuffer).addIndex([0, 1, 2, 0, 2, 3]);
                return t;
              }
              p(t, e);
              t.prototype.map = function (e, t) {
                var n = 0;
                var r = 0;
                this.uvs[0] = n;
                this.uvs[1] = r;
                this.uvs[2] = n + t.width / e.width;
                this.uvs[3] = r;
                this.uvs[4] = n + t.width / e.width;
                this.uvs[5] = r + t.height / e.height;
                this.uvs[6] = n;
                this.uvs[7] = r + t.height / e.height;
                n = t.x;
                r = t.y;
                this.vertices[0] = n;
                this.vertices[1] = r;
                this.vertices[2] = n + t.width;
                this.vertices[3] = r;
                this.vertices[4] = n + t.width;
                this.vertices[5] = r + t.height;
                this.vertices[6] = n;
                this.vertices[7] = r + t.height;
                this.invalidate();
                return this;
              };
              t.prototype.invalidate = function () {
                this.vertexBuffer._updateID++;
                this.uvBuffer._updateID++;
                return this;
              };
              return t;
            }(W);
            var q = 0;
            var J = function () {
              function e(e, t, n) {
                this.group = true;
                this.syncUniforms = {};
                this.dirtyId = 0;
                this.id = q++;
                this.static = !!t;
                this.ubo = !!n;
                if (e instanceof G) {
                  this.buffer = e;
                  this.buffer.type = i.yw.UNIFORM_BUFFER;
                  this.autoManage = false;
                  this.ubo = true;
                } else {
                  this.uniforms = e;
                  if (this.ubo) {
                    this.buffer = new G(new Float32Array(1));
                    this.buffer.type = i.yw.UNIFORM_BUFFER;
                    this.autoManage = true;
                  }
                }
              }
              e.prototype.update = function () {
                this.dirtyId++;
                if (!this.autoManage && this.buffer) {
                  this.buffer.update();
                }
              };
              e.prototype.add = function (t, n, r) {
                if (this.ubo) {
                  throw new Error("[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them");
                }
                this.uniforms[t] = new e(n, r);
              };
              e.from = function (t, n, r) {
                return new e(t, n, r);
              };
              e.uboFrom = function (t, n) {
                return new e(t, n == null || n, true);
              };
              return e;
            }();
            var K = function () {
              function e() {
                this.renderTexture = null;
                this.target = null;
                this.legacy = false;
                this.resolution = 1;
                this.multisample = i.he.NONE;
                this.sourceFrame = new l.M_();
                this.destinationFrame = new l.M_();
                this.bindingSourceFrame = new l.M_();
                this.bindingDestinationFrame = new l.M_();
                this.filters = [];
                this.transform = null;
              }
              e.prototype.clear = function () {
                this.target = null;
                this.filters = null;
                this.renderTexture = null;
              };
              return e;
            }();
            var Z = [new l.bR(), new l.bR(), new l.bR(), new l.bR()];
            var $ = new l.uq();
            var Q = function () {
              function e(e) {
                this.renderer = e;
                this.defaultFilterStack = [{}];
                this.texturePool = new D();
                this.texturePool.setScreenSize(e.view);
                this.statePool = [];
                this.quad = new X();
                this.quadUv = new Y();
                this.tempRect = new l.M_();
                this.activeState = {};
                this.globalUniforms = new J({
                  outputFrame: new l.M_(),
                  inputSize: new Float32Array(4),
                  inputPixel: new Float32Array(4),
                  inputClamp: new Float32Array(4),
                  resolution: 1,
                  filterArea: new Float32Array(4),
                  filterClamp: new Float32Array(4)
                }, true);
                this.forceClear = false;
                this.useMaxPadding = false;
              }
              e.prototype.push = function (e, t) {
                var n;
                var r;
                var i = this.renderer;
                var s = this.defaultFilterStack;
                var a = this.statePool.pop() || new K();
                var o = this.renderer.renderTexture;
                var h = t[0].resolution;
                var l = t[0].multisample;
                var d = t[0].padding;
                var c = t[0].autoFit;
                var u = (n = t[0].legacy) === null || n === undefined || n;
                for (var p = 1; p < t.length; p++) {
                  var m = t[p];
                  h = Math.min(h, m.resolution);
                  l = Math.min(l, m.multisample);
                  d = this.useMaxPadding ? Math.max(d, m.padding) : d + m.padding;
                  c = c && m.autoFit;
                  u = u || (r = m.legacy) === null || r === undefined || r;
                }
                if (s.length === 1) {
                  this.defaultFilterStack[0].renderTexture = o.current;
                }
                s.push(a);
                a.resolution = h;
                a.multisample = l;
                a.legacy = u;
                a.target = e;
                a.sourceFrame.copyFrom(e.filterArea || e.getBounds(true));
                a.sourceFrame.pad(d);
                var f = this.tempRect.copyFrom(o.sourceFrame);
                if (i.projection.transform) {
                  this.transformAABB($.copyFrom(i.projection.transform).invert(), f);
                }
                if (c) {
                  a.sourceFrame.fit(f);
                  if (a.sourceFrame.width <= 0 || a.sourceFrame.height <= 0) {
                    a.sourceFrame.width = 0;
                    a.sourceFrame.height = 0;
                  }
                } else if (!a.sourceFrame.intersects(f)) {
                  a.sourceFrame.width = 0;
                  a.sourceFrame.height = 0;
                }
                this.roundFrame(a.sourceFrame, o.current ? o.current.resolution : i.resolution, o.sourceFrame, o.destinationFrame, i.projection.transform);
                a.renderTexture = this.getOptimalFilterTexture(a.sourceFrame.width, a.sourceFrame.height, h, l);
                a.filters = t;
                a.destinationFrame.width = a.renderTexture.width;
                a.destinationFrame.height = a.renderTexture.height;
                var _ = this.tempRect;
                _.x = 0;
                _.y = 0;
                _.width = a.sourceFrame.width;
                _.height = a.sourceFrame.height;
                a.renderTexture.filterFrame = a.sourceFrame;
                a.bindingSourceFrame.copyFrom(o.sourceFrame);
                a.bindingDestinationFrame.copyFrom(o.destinationFrame);
                a.transform = i.projection.transform;
                i.projection.transform = null;
                o.bind(a.renderTexture, a.sourceFrame, _);
                i.framebuffer.clear(0, 0, 0, 0);
              };
              e.prototype.pop = function () {
                var e = this.defaultFilterStack;
                var t = e.pop();
                var n = t.filters;
                this.activeState = t;
                var r = this.globalUniforms.uniforms;
                r.outputFrame = t.sourceFrame;
                r.resolution = t.resolution;
                var s = r.inputSize;
                var a = r.inputPixel;
                var o = r.inputClamp;
                s[0] = t.destinationFrame.width;
                s[1] = t.destinationFrame.height;
                s[2] = 1 / s[0];
                s[3] = 1 / s[1];
                a[0] = Math.round(s[0] * t.resolution);
                a[1] = Math.round(s[1] * t.resolution);
                a[2] = 1 / a[0];
                a[3] = 1 / a[1];
                o[0] = a[2] * 0.5;
                o[1] = a[3] * 0.5;
                o[2] = t.sourceFrame.width * s[2] - a[2] * 0.5;
                o[3] = t.sourceFrame.height * s[3] - a[3] * 0.5;
                if (t.legacy) {
                  var h = r.filterArea;
                  h[0] = t.destinationFrame.width;
                  h[1] = t.destinationFrame.height;
                  h[2] = t.sourceFrame.x;
                  h[3] = t.sourceFrame.y;
                  r.filterClamp = r.inputClamp;
                }
                this.globalUniforms.update();
                var l = e[e.length - 1];
                this.renderer.framebuffer.blit();
                if (n.length === 1) {
                  n[0].apply(this, t.renderTexture, l.renderTexture, i.fr.BLEND, t);
                  this.returnFilterTexture(t.renderTexture);
                } else {
                  var d = t.renderTexture;
                  var c = this.getOptimalFilterTexture(d.width, d.height, t.resolution);
                  c.filterFrame = d.filterFrame;
                  var u = 0;
                  for (u = 0; u < n.length - 1; ++u) {
                    if (u === 1 && t.multisample > 1) {
                      (c = this.getOptimalFilterTexture(d.width, d.height, t.resolution)).filterFrame = d.filterFrame;
                    }
                    n[u].apply(this, d, c, i.fr.CLEAR, t);
                    var p = d;
                    d = c;
                    c = p;
                  }
                  n[u].apply(this, d, l.renderTexture, i.fr.BLEND, t);
                  if (u > 1 && t.multisample > 1) {
                    this.returnFilterTexture(t.renderTexture);
                  }
                  this.returnFilterTexture(d);
                  this.returnFilterTexture(c);
                }
                t.clear();
                this.statePool.push(t);
              };
              e.prototype.bindAndClear = function (e, t = i.fr.CLEAR) {
                var n = this.renderer;
                var r = n.renderTexture;
                var s = n.state;
                if (e === this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture) {
                  this.renderer.projection.transform = this.activeState.transform;
                } else {
                  this.renderer.projection.transform = null;
                }
                if (e && e.filterFrame) {
                  var a = this.tempRect;
                  a.x = 0;
                  a.y = 0;
                  a.width = e.filterFrame.width;
                  a.height = e.filterFrame.height;
                  r.bind(e, e.filterFrame, a);
                } else if (e !== this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture) {
                  r.bind(e);
                } else {
                  this.renderer.renderTexture.bind(e, this.activeState.bindingSourceFrame, this.activeState.bindingDestinationFrame);
                }
                var o = s.stateId & 1 || this.forceClear;
                if (t === i.fr.CLEAR || t === i.fr.BLIT && o) {
                  this.renderer.framebuffer.clear(0, 0, 0, 0);
                }
              };
              e.prototype.applyFilter = function (e, t, n, r) {
                var s = this.renderer;
                s.state.set(e.state);
                this.bindAndClear(n, r);
                e.uniforms.uSampler = t;
                e.uniforms.filterGlobals = this.globalUniforms;
                s.shader.bind(e);
                e.legacy = !!e.program.attributeData.aTextureCoord;
                if (e.legacy) {
                  this.quadUv.map(t._frame, t.filterFrame);
                  s.geometry.bind(this.quadUv);
                  s.geometry.draw(i._4.TRIANGLES);
                } else {
                  s.geometry.bind(this.quad);
                  s.geometry.draw(i._4.TRIANGLE_STRIP);
                }
              };
              e.prototype.calculateSpriteMatrix = function (e, t) {
                var n = this.activeState;
                var r = n.sourceFrame;
                var i = n.destinationFrame;
                var s = t._texture.orig;
                var a = e.set(i.width, 0, 0, i.height, r.x, r.y);
                var o = t.worldTransform.copyTo(l.uq.TEMP_MATRIX);
                o.invert();
                a.prepend(o);
                a.scale(1 / s.width, 1 / s.height);
                a.translate(t.anchor.x, t.anchor.y);
                return a;
              };
              e.prototype.destroy = function () {
                this.renderer = null;
                this.texturePool.clear(false);
              };
              e.prototype.getOptimalFilterTexture = function (e, t, n = 1, r = i.he.NONE) {
                return this.texturePool.getOptimalTexture(e, t, n, r);
              };
              e.prototype.getFilterTexture = function (e, t, n) {
                if (typeof e == "number") {
                  var r = e;
                  e = t;
                  t = r;
                }
                e = e || this.activeState.renderTexture;
                var s = this.texturePool.getOptimalTexture(e.width, e.height, t || e.resolution, n || i.he.NONE);
                s.filterFrame = e.filterFrame;
                return s;
              };
              e.prototype.returnFilterTexture = function (e) {
                this.texturePool.returnTexture(e);
              };
              e.prototype.emptyPool = function () {
                this.texturePool.clear(true);
              };
              e.prototype.resize = function () {
                this.texturePool.setScreenSize(this.renderer.view);
              };
              e.prototype.transformAABB = function (e, t) {
                var n = Z[0];
                var r = Z[1];
                var i = Z[2];
                var s = Z[3];
                n.set(t.left, t.top);
                r.set(t.left, t.bottom);
                i.set(t.right, t.top);
                s.set(t.right, t.bottom);
                e.apply(n, n);
                e.apply(r, r);
                e.apply(i, i);
                e.apply(s, s);
                var a = Math.min(n.x, r.x, i.x, s.x);
                var o = Math.min(n.y, r.y, i.y, s.y);
                var h = Math.max(n.x, r.x, i.x, s.x);
                var l = Math.max(n.y, r.y, i.y, s.y);
                t.x = a;
                t.y = o;
                t.width = h - a;
                t.height = l - o;
              };
              e.prototype.roundFrame = function (e, t, n, r, i) {
                if (!(e.width <= 0) && !(e.height <= 0) && !(n.width <= 0) && !(n.height <= 0)) {
                  if (i) {
                    var s = i.a;
                    var a = i.b;
                    var o = i.c;
                    var h = i.d;
                    if ((Math.abs(a) > 0.0001 || Math.abs(o) > 0.0001) && (Math.abs(s) > 0.0001 || Math.abs(h) > 0.0001)) {
                      return;
                    }
                  }
                  (i = i ? $.copyFrom(i) : $.identity()).translate(-n.x, -n.y).scale(r.width / n.width, r.height / n.height).translate(r.x, r.y);
                  this.transformAABB(i, e);
                  e.ceil(t);
                  this.transformAABB(i.invert(), e);
                }
              };
              return e;
            }();
            var ee = function () {
              function e(e) {
                this.renderer = e;
              }
              e.prototype.flush = function () {};
              e.prototype.destroy = function () {
                this.renderer = null;
              };
              e.prototype.start = function () {};
              e.prototype.stop = function () {
                this.flush();
              };
              e.prototype.render = function (e) {};
              return e;
            }();
            var te = function () {
              function e(e) {
                this.renderer = e;
                this.emptyRenderer = new ee(e);
                this.currentRenderer = this.emptyRenderer;
              }
              e.prototype.setObjectRenderer = function (e) {
                if (this.currentRenderer !== e) {
                  this.currentRenderer.stop();
                  this.currentRenderer = e;
                  this.currentRenderer.start();
                }
              };
              e.prototype.flush = function () {
                this.setObjectRenderer(this.emptyRenderer);
              };
              e.prototype.reset = function () {
                this.setObjectRenderer(this.emptyRenderer);
              };
              e.prototype.copyBoundTextures = function (e, t) {
                var n = this.renderer.texture.boundTextures;
                for (var r = t - 1; r >= 0; --r) {
                  e[r] = n[r] || null;
                  if (e[r]) {
                    e[r]._batchLocation = r;
                  }
                }
              };
              e.prototype.boundArray = function (e, t, n, r) {
                var i = e.elements;
                var s = e.ids;
                for (var a = e.count, o = 0, h = 0; h < a; h++) {
                  var l = i[h];
                  var d = l._batchLocation;
                  if (d >= 0 && d < r && t[d] === l) {
                    s[h] = d;
                  } else {
                    while (o < r) {
                      var c = t[o];
                      if (!c || c._batchEnabled !== n || c._batchLocation !== o) {
                        s[h] = o;
                        l._batchLocation = o;
                        t[o] = l;
                        break;
                      }
                      o++;
                    }
                  }
                }
              };
              e.prototype.destroy = function () {
                this.renderer = null;
              };
              return e;
            }();
            var ne = 0;
            var re = function () {
              function e(e) {
                this.renderer = e;
                this.webGLVersion = 1;
                this.extensions = {};
                this.supports = {
                  uint32Indices: false
                };
                this.handleContextLost = this.handleContextLost.bind(this);
                this.handleContextRestored = this.handleContextRestored.bind(this);
                e.view.addEventListener("webglcontextlost", this.handleContextLost, false);
                e.view.addEventListener("webglcontextrestored", this.handleContextRestored, false);
              }
              Object.defineProperty(e.prototype, "isLost", {
                get: function () {
                  return !this.gl || this.gl.isContextLost();
                },
                enumerable: false,
                configurable: true
              });
              e.prototype.contextChange = function (e) {
                this.gl = e;
                this.renderer.gl = e;
                this.renderer.CONTEXT_UID = ne++;
              };
              e.prototype.initFromContext = function (e) {
                this.gl = e;
                this.validateContext(e);
                this.renderer.gl = e;
                this.renderer.CONTEXT_UID = ne++;
                this.renderer.runners.contextChange.emit(e);
              };
              e.prototype.initFromOptions = function (e) {
                var t = this.createContext(this.renderer.view, e);
                this.initFromContext(t);
              };
              e.prototype.createContext = function (e, t) {
                var n;
                if (r.W0.PREFER_ENV >= i.Km.WEBGL2) {
                  n = e.getContext("webgl2", t);
                }
                if (n) {
                  this.webGLVersion = 2;
                } else {
                  this.webGLVersion = 1;
                  if (!(n = e.getContext("webgl", t) || e.getContext("experimental-webgl", t))) {
                    throw new Error("This browser does not support WebGL. Try using the canvas renderer");
                  }
                }
                this.gl = n;
                this.getExtensions();
                return this.gl;
              };
              e.prototype.getExtensions = function () {
                var e = this.gl;
                var t = {
                  loseContext: e.getExtension("WEBGL_lose_context"),
                  anisotropicFiltering: e.getExtension("EXT_texture_filter_anisotropic"),
                  floatTextureLinear: e.getExtension("OES_texture_float_linear"),
                  s3tc: e.getExtension("WEBGL_compressed_texture_s3tc"),
                  s3tc_sRGB: e.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
                  etc: e.getExtension("WEBGL_compressed_texture_etc"),
                  etc1: e.getExtension("WEBGL_compressed_texture_etc1"),
                  pvrtc: e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
                  atc: e.getExtension("WEBGL_compressed_texture_atc"),
                  astc: e.getExtension("WEBGL_compressed_texture_astc")
                };
                if (this.webGLVersion === 1) {
                  Object.assign(this.extensions, t, {
                    drawBuffers: e.getExtension("WEBGL_draw_buffers"),
                    depthTexture: e.getExtension("WEBGL_depth_texture"),
                    vertexArrayObject: e.getExtension("OES_vertex_array_object") || e.getExtension("MOZ_OES_vertex_array_object") || e.getExtension("WEBKIT_OES_vertex_array_object"),
                    uint32ElementIndex: e.getExtension("OES_element_index_uint"),
                    floatTexture: e.getExtension("OES_texture_float"),
                    floatTextureLinear: e.getExtension("OES_texture_float_linear"),
                    textureHalfFloat: e.getExtension("OES_texture_half_float"),
                    textureHalfFloatLinear: e.getExtension("OES_texture_half_float_linear")
                  });
                } else if (this.webGLVersion === 2) {
                  Object.assign(this.extensions, t, {
                    colorBufferFloat: e.getExtension("EXT_color_buffer_float")
                  });
                }
              };
              e.prototype.handleContextLost = function (e) {
                var t = this;
                e.preventDefault();
                setTimeout(function () {
                  if (t.gl.isContextLost() && t.extensions.loseContext) {
                    t.extensions.loseContext.restoreContext();
                  }
                }, 0);
              };
              e.prototype.handleContextRestored = function () {
                this.renderer.runners.contextChange.emit(this.gl);
              };
              e.prototype.destroy = function () {
                var e = this.renderer.view;
                this.renderer = null;
                e.removeEventListener("webglcontextlost", this.handleContextLost);
                e.removeEventListener("webglcontextrestored", this.handleContextRestored);
                this.gl.useProgram(null);
                if (this.extensions.loseContext) {
                  this.extensions.loseContext.loseContext();
                }
              };
              e.prototype.postrender = function () {
                if (this.renderer.renderingToScreen) {
                  this.gl.flush();
                }
              };
              e.prototype.validateContext = function (e) {
                var t = e.getContextAttributes();
                var n = "WebGL2RenderingContext" in globalThis && e instanceof globalThis.WebGL2RenderingContext;
                if (n) {
                  this.webGLVersion = 2;
                }
                if (t) {
                  t.stencil;
                }
                var r = n || !!e.getExtension("OES_element_index_uint");
                this.supports.uint32Indices = r;
              };
              return e;
            }();
            function ie(e) {
              this.framebuffer = e;
              this.stencil = null;
              this.dirtyId = -1;
              this.dirtyFormat = -1;
              this.dirtySize = -1;
              this.multisample = i.he.NONE;
              this.msaaBuffer = null;
              this.blitFramebuffer = null;
              this.mipLevel = 0;
            }
            var se = new l.M_();
            var ae = function () {
              function e(e) {
                this.renderer = e;
                this.managedFramebuffers = [];
                this.unknownFramebuffer = new P(10, 10);
                this.msaaSamples = null;
              }
              e.prototype.contextChange = function () {
                this.disposeAll(true);
                var e = this.gl = this.renderer.gl;
                this.CONTEXT_UID = this.renderer.CONTEXT_UID;
                this.current = this.unknownFramebuffer;
                this.viewport = new l.M_();
                this.hasMRT = true;
                this.writeDepthTexture = true;
                if (this.renderer.context.webGLVersion === 1) {
                  var t = this.renderer.context.extensions.drawBuffers;
                  var n = this.renderer.context.extensions.depthTexture;
                  if (r.W0.PREFER_ENV === i.Km.WEBGL_LEGACY) {
                    t = null;
                    n = null;
                  }
                  if (t) {
                    e.drawBuffers = function (e) {
                      return t.drawBuffersWEBGL(e);
                    };
                  } else {
                    this.hasMRT = false;
                    e.drawBuffers = function () {};
                  }
                  if (!n) {
                    this.writeDepthTexture = false;
                  }
                } else {
                  this.msaaSamples = e.getInternalformatParameter(e.RENDERBUFFER, e.RGBA8, e.SAMPLES);
                }
              };
              e.prototype.bind = function (e, t, n = 0) {
                var r = this.gl;
                if (e) {
                  var i = e.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(e);
                  if (this.current !== e) {
                    this.current = e;
                    r.bindFramebuffer(r.FRAMEBUFFER, i.framebuffer);
                  }
                  if (i.mipLevel !== n) {
                    e.dirtyId++;
                    e.dirtyFormat++;
                    i.mipLevel = n;
                  }
                  if (i.dirtyId !== e.dirtyId) {
                    i.dirtyId = e.dirtyId;
                    if (i.dirtyFormat !== e.dirtyFormat) {
                      i.dirtyFormat = e.dirtyFormat;
                      i.dirtySize = e.dirtySize;
                      this.updateFramebuffer(e, n);
                    } else if (i.dirtySize !== e.dirtySize) {
                      i.dirtySize = e.dirtySize;
                      this.resizeFramebuffer(e);
                    }
                  }
                  for (var s = 0; s < e.colorTextures.length; s++) {
                    var a = e.colorTextures[s];
                    this.renderer.texture.unbind(a.parentTextureArray || a);
                  }
                  if (e.depthTexture) {
                    this.renderer.texture.unbind(e.depthTexture);
                  }
                  if (t) {
                    var o = t.width >> n;
                    var h = t.height >> n;
                    var l = o / t.width;
                    this.setViewport(t.x * l, t.y * l, o, h);
                  } else {
                    o = e.width >> n;
                    h = e.height >> n;
                    this.setViewport(0, 0, o, h);
                  }
                } else {
                  if (this.current) {
                    this.current = null;
                    r.bindFramebuffer(r.FRAMEBUFFER, null);
                  }
                  if (t) {
                    this.setViewport(t.x, t.y, t.width, t.height);
                  } else {
                    this.setViewport(0, 0, this.renderer.width, this.renderer.height);
                  }
                }
              };
              e.prototype.setViewport = function (e, t, n, r) {
                var i = this.viewport;
                e = Math.round(e);
                t = Math.round(t);
                n = Math.round(n);
                r = Math.round(r);
                if (i.width !== n || i.height !== r || i.x !== e || i.y !== t) {
                  i.x = e;
                  i.y = t;
                  i.width = n;
                  i.height = r;
                  this.gl.viewport(e, t, n, r);
                }
              };
              Object.defineProperty(e.prototype, "size", {
                get: function () {
                  if (this.current) {
                    return {
                      x: 0,
                      y: 0,
                      width: this.current.width,
                      height: this.current.height
                    };
                  } else {
                    return {
                      x: 0,
                      y: 0,
                      width: this.renderer.width,
                      height: this.renderer.height
                    };
                  }
                },
                enumerable: false,
                configurable: true
              });
              e.prototype.clear = function (e, t, n, r, s = i.wn.COLOR | i.wn.DEPTH) {
                var a = this.gl;
                a.clearColor(e, t, n, r);
                a.clear(s);
              };
              e.prototype.initFramebuffer = function (e) {
                var t = this.gl;
                var n = new ie(t.createFramebuffer());
                n.multisample = this.detectSamples(e.multisample);
                e.glFramebuffers[this.CONTEXT_UID] = n;
                this.managedFramebuffers.push(e);
                e.disposeRunner.add(this);
                return n;
              };
              e.prototype.resizeFramebuffer = function (e) {
                var t = this.gl;
                var n = e.glFramebuffers[this.CONTEXT_UID];
                if (n.msaaBuffer) {
                  t.bindRenderbuffer(t.RENDERBUFFER, n.msaaBuffer);
                  t.renderbufferStorageMultisample(t.RENDERBUFFER, n.multisample, t.RGBA8, e.width, e.height);
                }
                if (n.stencil) {
                  t.bindRenderbuffer(t.RENDERBUFFER, n.stencil);
                  if (n.msaaBuffer) {
                    t.renderbufferStorageMultisample(t.RENDERBUFFER, n.multisample, t.DEPTH24_STENCIL8, e.width, e.height);
                  } else {
                    t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_STENCIL, e.width, e.height);
                  }
                }
                var r = e.colorTextures;
                var i = r.length;
                if (!t.drawBuffers) {
                  i = Math.min(i, 1);
                }
                for (var s = 0; s < i; s++) {
                  var a = r[s];
                  var o = a.parentTextureArray || a;
                  this.renderer.texture.bind(o, 0);
                }
                if (e.depthTexture && this.writeDepthTexture) {
                  this.renderer.texture.bind(e.depthTexture, 0);
                }
              };
              e.prototype.updateFramebuffer = function (e, t) {
                var n = this.gl;
                var r = e.glFramebuffers[this.CONTEXT_UID];
                var i = e.colorTextures;
                var s = i.length;
                if (!n.drawBuffers) {
                  s = Math.min(s, 1);
                }
                if (r.multisample > 1 && this.canMultisampleFramebuffer(e)) {
                  r.msaaBuffer = r.msaaBuffer || n.createRenderbuffer();
                  n.bindRenderbuffer(n.RENDERBUFFER, r.msaaBuffer);
                  n.renderbufferStorageMultisample(n.RENDERBUFFER, r.multisample, n.RGBA8, e.width, e.height);
                  n.framebufferRenderbuffer(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.RENDERBUFFER, r.msaaBuffer);
                } else if (r.msaaBuffer) {
                  n.deleteRenderbuffer(r.msaaBuffer);
                  r.msaaBuffer = null;
                  if (r.blitFramebuffer) {
                    r.blitFramebuffer.dispose();
                    r.blitFramebuffer = null;
                  }
                }
                var a = [];
                for (var o = 0; o < s; o++) {
                  var h = i[o];
                  var l = h.parentTextureArray || h;
                  this.renderer.texture.bind(l, 0);
                  if (o !== 0 || !r.msaaBuffer) {
                    n.framebufferTexture2D(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0 + o, h.target, l._glTextures[this.CONTEXT_UID].texture, t);
                    a.push(n.COLOR_ATTACHMENT0 + o);
                  }
                }
                if (a.length > 1) {
                  n.drawBuffers(a);
                }
                if (e.depthTexture && this.writeDepthTexture) {
                  var d = e.depthTexture;
                  this.renderer.texture.bind(d, 0);
                  n.framebufferTexture2D(n.FRAMEBUFFER, n.DEPTH_ATTACHMENT, n.TEXTURE_2D, d._glTextures[this.CONTEXT_UID].texture, t);
                }
                if (!e.stencil && !e.depth || e.depthTexture && this.writeDepthTexture) {
                  if (r.stencil) {
                    n.deleteRenderbuffer(r.stencil);
                    r.stencil = null;
                  }
                } else {
                  r.stencil = r.stencil || n.createRenderbuffer();
                  n.bindRenderbuffer(n.RENDERBUFFER, r.stencil);
                  if (r.msaaBuffer) {
                    n.renderbufferStorageMultisample(n.RENDERBUFFER, r.multisample, n.DEPTH24_STENCIL8, e.width, e.height);
                  } else {
                    n.renderbufferStorage(n.RENDERBUFFER, n.DEPTH_STENCIL, e.width, e.height);
                  }
                  n.framebufferRenderbuffer(n.FRAMEBUFFER, n.DEPTH_STENCIL_ATTACHMENT, n.RENDERBUFFER, r.stencil);
                }
              };
              e.prototype.canMultisampleFramebuffer = function (e) {
                return this.renderer.context.webGLVersion !== 1 && e.colorTextures.length <= 1 && !e.depthTexture;
              };
              e.prototype.detectSamples = function (e) {
                var t = this.msaaSamples;
                var n = i.he.NONE;
                if (e <= 1 || t === null) {
                  return n;
                }
                for (var r = 0; r < t.length; r++) {
                  if (t[r] <= e) {
                    n = t[r];
                    break;
                  }
                }
                if (n === 1) {
                  n = i.he.NONE;
                }
                return n;
              };
              e.prototype.blit = function (e, t, n) {
                var r = this;
                var i = r.current;
                var s = r.renderer;
                var a = r.gl;
                var o = r.CONTEXT_UID;
                if (s.context.webGLVersion === 2 && i) {
                  var h = i.glFramebuffers[o];
                  if (h) {
                    if (!e) {
                      if (!h.msaaBuffer) {
                        return;
                      }
                      var l = i.colorTextures[0];
                      if (!l) {
                        return;
                      }
                      if (!h.blitFramebuffer) {
                        h.blitFramebuffer = new P(i.width, i.height);
                        h.blitFramebuffer.addColorTexture(0, l);
                      }
                      if ((e = h.blitFramebuffer).colorTextures[0] !== l) {
                        e.colorTextures[0] = l;
                        e.dirtyId++;
                        e.dirtyFormat++;
                      }
                      if (e.width !== i.width || e.height !== i.height) {
                        e.width = i.width;
                        e.height = i.height;
                        e.dirtyId++;
                        e.dirtySize++;
                      }
                    }
                    if (!t) {
                      (t = se).width = i.width;
                      t.height = i.height;
                    }
                    n ||= t;
                    var d = t.width === n.width && t.height === n.height;
                    this.bind(e);
                    a.bindFramebuffer(a.READ_FRAMEBUFFER, h.framebuffer);
                    a.blitFramebuffer(t.left, t.top, t.right, t.bottom, n.left, n.top, n.right, n.bottom, a.COLOR_BUFFER_BIT, d ? a.NEAREST : a.LINEAR);
                  }
                }
              };
              e.prototype.disposeFramebuffer = function (e, t) {
                var n = e.glFramebuffers[this.CONTEXT_UID];
                var r = this.gl;
                if (n) {
                  delete e.glFramebuffers[this.CONTEXT_UID];
                  var i = this.managedFramebuffers.indexOf(e);
                  if (i >= 0) {
                    this.managedFramebuffers.splice(i, 1);
                  }
                  e.disposeRunner.remove(this);
                  if (!t) {
                    r.deleteFramebuffer(n.framebuffer);
                    if (n.msaaBuffer) {
                      r.deleteRenderbuffer(n.msaaBuffer);
                    }
                    if (n.stencil) {
                      r.deleteRenderbuffer(n.stencil);
                    }
                  }
                  if (n.blitFramebuffer) {
                    n.blitFramebuffer.dispose();
                  }
                }
              };
              e.prototype.disposeAll = function (e) {
                var t = this.managedFramebuffers;
                this.managedFramebuffers = [];
                for (var n = 0; n < t.length; n++) {
                  this.disposeFramebuffer(t[n], e);
                }
              };
              e.prototype.forceStencil = function () {
                var e = this.current;
                if (e) {
                  var t = e.glFramebuffers[this.CONTEXT_UID];
                  if (t && !t.stencil) {
                    e.stencil = true;
                    var n = e.width;
                    var r = e.height;
                    var i = this.gl;
                    var s = i.createRenderbuffer();
                    i.bindRenderbuffer(i.RENDERBUFFER, s);
                    if (t.msaaBuffer) {
                      i.renderbufferStorageMultisample(i.RENDERBUFFER, t.multisample, i.DEPTH24_STENCIL8, n, r);
                    } else {
                      i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, n, r);
                    }
                    t.stencil = s;
                    i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.RENDERBUFFER, s);
                  }
                }
              };
              e.prototype.reset = function () {
                this.current = this.unknownFramebuffer;
                this.viewport = new l.M_();
              };
              e.prototype.destroy = function () {
                this.renderer = null;
              };
              return e;
            }();
            var oe = {
              5126: 4,
              5123: 2,
              5121: 1
            };
            var he = function () {
              function e(e) {
                this.renderer = e;
                this._activeGeometry = null;
                this._activeVao = null;
                this.hasVao = true;
                this.hasInstance = true;
                this.canUseUInt32ElementIndex = false;
                this.managedGeometries = {};
              }
              e.prototype.contextChange = function () {
                this.disposeAll(true);
                var e = this.gl = this.renderer.gl;
                var t = this.renderer.context;
                this.CONTEXT_UID = this.renderer.CONTEXT_UID;
                if (t.webGLVersion !== 2) {
                  var n = this.renderer.context.extensions.vertexArrayObject;
                  if (r.W0.PREFER_ENV === i.Km.WEBGL_LEGACY) {
                    n = null;
                  }
                  if (n) {
                    e.createVertexArray = function () {
                      return n.createVertexArrayOES();
                    };
                    e.bindVertexArray = function (e) {
                      return n.bindVertexArrayOES(e);
                    };
                    e.deleteVertexArray = function (e) {
                      return n.deleteVertexArrayOES(e);
                    };
                  } else {
                    this.hasVao = false;
                    e.createVertexArray = function () {
                      return null;
                    };
                    e.bindVertexArray = function () {
                      return null;
                    };
                    e.deleteVertexArray = function () {
                      return null;
                    };
                  }
                }
                if (t.webGLVersion !== 2) {
                  var s = e.getExtension("ANGLE_instanced_arrays");
                  if (s) {
                    e.vertexAttribDivisor = function (e, t) {
                      return s.vertexAttribDivisorANGLE(e, t);
                    };
                    e.drawElementsInstanced = function (e, t, n, r, i) {
                      return s.drawElementsInstancedANGLE(e, t, n, r, i);
                    };
                    e.drawArraysInstanced = function (e, t, n, r) {
                      return s.drawArraysInstancedANGLE(e, t, n, r);
                    };
                  } else {
                    this.hasInstance = false;
                  }
                }
                this.canUseUInt32ElementIndex = t.webGLVersion === 2 || !!t.extensions.uint32ElementIndex;
              };
              e.prototype.bind = function (e, t) {
                t = t || this.renderer.shader.shader;
                var n = this.gl;
                var r = e.glVertexArrayObjects[this.CONTEXT_UID];
                var i = false;
                if (!r) {
                  this.managedGeometries[e.id] = e;
                  e.disposeRunner.add(this);
                  e.glVertexArrayObjects[this.CONTEXT_UID] = r = {};
                  i = true;
                }
                var s = r[t.program.id] || this.initGeometryVao(e, t, i);
                this._activeGeometry = e;
                if (this._activeVao !== s) {
                  this._activeVao = s;
                  if (this.hasVao) {
                    n.bindVertexArray(s);
                  } else {
                    this.activateVao(e, t.program);
                  }
                }
                this.updateBuffers();
              };
              e.prototype.reset = function () {
                this.unbind();
              };
              e.prototype.updateBuffers = function () {
                for (var e = this._activeGeometry, t = this.renderer.buffer, n = 0; n < e.buffers.length; n++) {
                  var r = e.buffers[n];
                  t.update(r);
                }
              };
              e.prototype.checkCompatibility = function (e, t) {
                var n = e.attributes;
                var r = t.attributeData;
                for (var i in r) {
                  if (!n[i]) {
                    throw new Error("shader and geometry incompatible, geometry missing the \"" + i + "\" attribute");
                  }
                }
              };
              e.prototype.getSignature = function (e, t) {
                var n = e.attributes;
                var r = t.attributeData;
                var i = ["g", e.id];
                for (var s in n) {
                  if (r[s]) {
                    i.push(s, r[s].location);
                  }
                }
                return i.join("-");
              };
              e.prototype.initGeometryVao = function (e, t, n = true) {
                var r = this.gl;
                var i = this.CONTEXT_UID;
                var s = this.renderer.buffer;
                var a = t.program;
                if (!a.glPrograms[i]) {
                  this.renderer.shader.generateProgram(t);
                }
                this.checkCompatibility(e, a);
                var o = this.getSignature(e, a);
                var h = e.glVertexArrayObjects[this.CONTEXT_UID];
                var l = h[o];
                if (l) {
                  h[a.id] = l;
                  return l;
                }
                var d = e.buffers;
                var c = e.attributes;
                var u = {};
                var p = {};
                for (var m in d) {
                  u[m] = 0;
                  p[m] = 0;
                }
                for (var m in c) {
                  if (!c[m].size && a.attributeData[m]) {
                    c[m].size = a.attributeData[m].size;
                  } else {
                    c[m].size;
                  }
                  u[c[m].buffer] += c[m].size * oe[c[m].type];
                }
                for (var m in c) {
                  var f = c[m];
                  var _ = f.size;
                  if (f.stride === undefined) {
                    if (u[f.buffer] === _ * oe[f.type]) {
                      f.stride = 0;
                    } else {
                      f.stride = u[f.buffer];
                    }
                  }
                  if (f.start === undefined) {
                    f.start = p[f.buffer];
                    p[f.buffer] += _ * oe[f.type];
                  }
                }
                l = r.createVertexArray();
                r.bindVertexArray(l);
                for (var v = 0; v < d.length; v++) {
                  var y = d[v];
                  s.bind(y);
                  if (n) {
                    y._glBuffers[i].refCount++;
                  }
                }
                this.activateVao(e, a);
                this._activeVao = l;
                h[a.id] = l;
                h[o] = l;
                return l;
              };
              e.prototype.disposeGeometry = function (e, t) {
                if (this.managedGeometries[e.id]) {
                  delete this.managedGeometries[e.id];
                  var r = e.glVertexArrayObjects[this.CONTEXT_UID];
                  var i = this.gl;
                  var s = e.buffers;
                  var a = this.renderer?.buffer;
                  e.disposeRunner.remove(this);
                  if (r) {
                    if (a) {
                      for (var o = 0; o < s.length; o++) {
                        var h = s[o]._glBuffers[this.CONTEXT_UID];
                        if (h) {
                          h.refCount--;
                          if (h.refCount === 0 && !t) {
                            a.dispose(s[o], t);
                          }
                        }
                      }
                    }
                    if (!t) {
                      for (var l in r) {
                        if (l[0] === "g") {
                          var d = r[l];
                          if (this._activeVao === d) {
                            this.unbind();
                          }
                          i.deleteVertexArray(d);
                        }
                      }
                    }
                    delete e.glVertexArrayObjects[this.CONTEXT_UID];
                  }
                }
              };
              e.prototype.disposeAll = function (e) {
                for (var t = Object.keys(this.managedGeometries), n = 0; n < t.length; n++) {
                  this.disposeGeometry(this.managedGeometries[t[n]], e);
                }
              };
              e.prototype.activateVao = function (e, t) {
                var n = this.gl;
                var r = this.CONTEXT_UID;
                var i = this.renderer.buffer;
                var s = e.buffers;
                var a = e.attributes;
                if (e.indexBuffer) {
                  i.bind(e.indexBuffer);
                }
                var o = null;
                for (var h in a) {
                  var l = a[h];
                  var d = s[l.buffer];
                  var c = d._glBuffers[r];
                  if (t.attributeData[h]) {
                    if (o !== c) {
                      i.bind(d);
                      o = c;
                    }
                    var u = t.attributeData[h].location;
                    n.enableVertexAttribArray(u);
                    n.vertexAttribPointer(u, l.size, l.type || n.FLOAT, l.normalized, l.stride, l.start);
                    if (l.instance) {
                      if (!this.hasInstance) {
                        throw new Error("geometry error, GPU Instancing is not supported on this device");
                      }
                      n.vertexAttribDivisor(u, 1);
                    }
                  }
                }
              };
              e.prototype.draw = function (e, t, n, r) {
                var i = this.gl;
                var s = this._activeGeometry;
                if (s.indexBuffer) {
                  var a = s.indexBuffer.data.BYTES_PER_ELEMENT;
                  var o = a === 2 ? i.UNSIGNED_SHORT : i.UNSIGNED_INT;
                  if (a === 2 || a === 4 && this.canUseUInt32ElementIndex) {
                    if (s.instanced) {
                      i.drawElementsInstanced(e, t || s.indexBuffer.data.length, o, (n || 0) * a, r || 1);
                    } else {
                      i.drawElements(e, t || s.indexBuffer.data.length, o, (n || 0) * a);
                    }
                  }
                } else if (s.instanced) {
                  i.drawArraysInstanced(e, n, t || s.getSize(), r || 1);
                } else {
                  i.drawArrays(e, n, t || s.getSize());
                }
                return this;
              };
              e.prototype.unbind = function () {
                this.gl.bindVertexArray(null);
                this._activeVao = null;
                this._activeGeometry = null;
              };
              e.prototype.destroy = function () {
                this.renderer = null;
              };
              return e;
            }();
            var le = function () {
              function e(e = null) {
                this.type = i.vg.NONE;
                this.autoDetect = true;
                this.maskObject = e || null;
                this.pooled = false;
                this.isMaskData = true;
                this.resolution = null;
                this.multisample = r.W0.FILTER_MULTISAMPLE;
                this.enabled = true;
                this.colorMask = 15;
                this._filters = null;
                this._stencilCounter = 0;
                this._scissorCounter = 0;
                this._scissorRect = null;
                this._scissorRectLocal = null;
                this._colorMask = 15;
                this._target = null;
              }
              Object.defineProperty(e.prototype, "filter", {
                get: function () {
                  if (this._filters) {
                    return this._filters[0];
                  } else {
                    return null;
                  }
                },
                set: function (e) {
                  if (e) {
                    if (this._filters) {
                      this._filters[0] = e;
                    } else {
                      this._filters = [e];
                    }
                  } else {
                    this._filters = null;
                  }
                },
                enumerable: false,
                configurable: true
              });
              e.prototype.reset = function () {
                if (this.pooled) {
                  this.maskObject = null;
                  this.type = i.vg.NONE;
                  this.autoDetect = true;
                }
                this._target = null;
                this._scissorRectLocal = null;
              };
              e.prototype.copyCountersOrReset = function (e) {
                if (e) {
                  this._stencilCounter = e._stencilCounter;
                  this._scissorCounter = e._scissorCounter;
                  this._scissorRect = e._scissorRect;
                } else {
                  this._stencilCounter = 0;
                  this._scissorCounter = 0;
                  this._scissorRect = null;
                }
              };
              return e;
            }();
            function de(e, t, n) {
              var r = e.createShader(t);
              e.shaderSource(r, n);
              e.compileShader(r);
              return r;
            }
            function ce(e, t) {
              var n = e.getShaderSource(t).split("\n").map(function (e, t) {
                return t + ": " + e;
              });
              var r = e.getShaderInfoLog(t).split("\n");
              var i = {};
              var s = r.map(function (e) {
                return parseFloat(e.replace(/^ERROR\: 0\:([\d]+)\:.*$/, "$1"));
              }).filter(function (e) {
                return !!e && !i[e] && !(i[e] = true, 0);
              });
              var a = [""];
              s.forEach(function (e) {
                n[e - 1] = "%c" + n[e - 1] + "%c";
                a.push("background: #FF0000; color:#FFFFFF; font-size: 10px", "font-size: 10px");
              });
              var o = n.join("\n");
              a[0] = o;
            }
            function ue(e) {
              for (var t = new Array(e), n = 0; n < t.length; n++) {
                t[n] = false;
              }
              return t;
            }
            function pe(e, t) {
              switch (e) {
                case "float":
                case "int":
                case "uint":
                case "sampler2D":
                case "sampler2DArray":
                  return 0;
                case "vec2":
                  return new Float32Array(t * 2);
                case "vec3":
                  return new Float32Array(t * 3);
                case "vec4":
                  return new Float32Array(t * 4);
                case "ivec2":
                  return new Int32Array(t * 2);
                case "ivec3":
                  return new Int32Array(t * 3);
                case "ivec4":
                  return new Int32Array(t * 4);
                case "uvec2":
                  return new Uint32Array(t * 2);
                case "uvec3":
                  return new Uint32Array(t * 3);
                case "uvec4":
                  return new Uint32Array(t * 4);
                case "bool":
                  return false;
                case "bvec2":
                  return ue(t * 2);
                case "bvec3":
                  return ue(t * 3);
                case "bvec4":
                  return ue(t * 4);
                case "mat2":
                  return new Float32Array([1, 0, 0, 1]);
                case "mat3":
                  return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
                case "mat4":
                  return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
              }
              return null;
            }
            var me;
            var fe = {};
            var _e = fe;
            function ve() {
              if (_e === fe || _e && _e.isContextLost()) {
                var e = r.W0.ADAPTER.createCanvas();
                var t = undefined;
                if (r.W0.PREFER_ENV >= i.Km.WEBGL2) {
                  t = e.getContext("webgl2", {});
                }
                if (!t) {
                  if (t = e.getContext("webgl", {}) || e.getContext("experimental-webgl", {})) {
                    t.getExtension("WEBGL_draw_buffers");
                  } else {
                    t = null;
                  }
                }
                _e = t;
              }
              return _e;
            }
            function ye(e, t, n) {
              if (e.substring(0, 9) !== "precision") {
                var r = t;
                if (t === i.Pk.HIGH && n !== i.Pk.HIGH) {
                  r = i.Pk.MEDIUM;
                }
                return "precision " + r + " float;\n" + e;
              }
              if (n !== i.Pk.HIGH && e.substring(0, 15) === "precision highp") {
                return e.replace("precision highp", "precision mediump");
              } else {
                return e;
              }
            }
            var ge = {
              float: 1,
              vec2: 2,
              vec3: 3,
              vec4: 4,
              int: 1,
              ivec2: 2,
              ivec3: 3,
              ivec4: 4,
              uint: 1,
              uvec2: 2,
              uvec3: 3,
              uvec4: 4,
              bool: 1,
              bvec2: 2,
              bvec3: 3,
              bvec4: 4,
              mat2: 4,
              mat3: 9,
              mat4: 16,
              sampler2D: 1
            };
            function we(e) {
              return ge[e];
            }
            var xe = null;
            var be = {
              FLOAT: "float",
              FLOAT_VEC2: "vec2",
              FLOAT_VEC3: "vec3",
              FLOAT_VEC4: "vec4",
              INT: "int",
              INT_VEC2: "ivec2",
              INT_VEC3: "ivec3",
              INT_VEC4: "ivec4",
              UNSIGNED_INT: "uint",
              UNSIGNED_INT_VEC2: "uvec2",
              UNSIGNED_INT_VEC3: "uvec3",
              UNSIGNED_INT_VEC4: "uvec4",
              BOOL: "bool",
              BOOL_VEC2: "bvec2",
              BOOL_VEC3: "bvec3",
              BOOL_VEC4: "bvec4",
              FLOAT_MAT2: "mat2",
              FLOAT_MAT3: "mat3",
              FLOAT_MAT4: "mat4",
              SAMPLER_2D: "sampler2D",
              INT_SAMPLER_2D: "sampler2D",
              UNSIGNED_INT_SAMPLER_2D: "sampler2D",
              SAMPLER_CUBE: "samplerCube",
              INT_SAMPLER_CUBE: "samplerCube",
              UNSIGNED_INT_SAMPLER_CUBE: "samplerCube",
              SAMPLER_2D_ARRAY: "sampler2DArray",
              INT_SAMPLER_2D_ARRAY: "sampler2DArray",
              UNSIGNED_INT_SAMPLER_2D_ARRAY: "sampler2DArray"
            };
            function Te(e, t) {
              if (!xe) {
                var n = Object.keys(be);
                xe = {};
                for (var r = 0; r < n.length; ++r) {
                  var i = n[r];
                  xe[e[i]] = be[i];
                }
              }
              return xe[t];
            }
            var Ae;
            var Ce = [{
              test: function (e) {
                return e.type === "float" && e.size === 1 && !e.isArray;
              },
              code: function (e) {
                return "\n            if(uv[\"" + e + "\"] !== ud[\"" + e + "\"].value)\n            {\n                ud[\"" + e + "\"].value = uv[\"" + e + "\"]\n                gl.uniform1f(ud[\"" + e + "\"].location, uv[\"" + e + "\"])\n            }\n            ";
              }
            }, {
              test: function (e, t) {
                return (e.type === "sampler2D" || e.type === "samplerCube" || e.type === "sampler2DArray") && e.size === 1 && !e.isArray && (t == null || t.castToBaseTexture !== undefined);
              },
              code: function (e) {
                return "t = syncData.textureCount++;\n\n            renderer.texture.bind(uv[\"" + e + "\"], t);\n\n            if(ud[\"" + e + "\"].value !== t)\n            {\n                ud[\"" + e + "\"].value = t;\n                gl.uniform1i(ud[\"" + e + "\"].location, t);\n; // eslint-disable-line max-len\n            }";
              }
            }, {
              test: function (e, t) {
                return e.type === "mat3" && e.size === 1 && !e.isArray && t.a !== undefined;
              },
              code: function (e) {
                return "\n            gl.uniformMatrix3fv(ud[\"" + e + "\"].location, false, uv[\"" + e + "\"].toArray(true));\n            ";
              },
              codeUbo: function (e) {
                return "\n                var " + e + "_matrix = uv." + e + ".toArray(true);\n\n                data[offset] = " + e + "_matrix[0];\n                data[offset+1] = " + e + "_matrix[1];\n                data[offset+2] = " + e + "_matrix[2];\n        \n                data[offset + 4] = " + e + "_matrix[3];\n                data[offset + 5] = " + e + "_matrix[4];\n                data[offset + 6] = " + e + "_matrix[5];\n        \n                data[offset + 8] = " + e + "_matrix[6];\n                data[offset + 9] = " + e + "_matrix[7];\n                data[offset + 10] = " + e + "_matrix[8];\n            ";
              }
            }, {
              test: function (e, t) {
                return e.type === "vec2" && e.size === 1 && !e.isArray && t.x !== undefined;
              },
              code: function (e) {
                return "\n                cv = ud[\"" + e + "\"].value;\n                v = uv[\"" + e + "\"];\n\n                if(cv[0] !== v.x || cv[1] !== v.y)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    gl.uniform2f(ud[\"" + e + "\"].location, v.x, v.y);\n                }";
              },
              codeUbo: function (e) {
                return "\n                v = uv." + e + ";\n\n                data[offset] = v.x;\n                data[offset+1] = v.y;\n            ";
              }
            }, {
              test: function (e) {
                return e.type === "vec2" && e.size === 1 && !e.isArray;
              },
              code: function (e) {
                return "\n                cv = ud[\"" + e + "\"].value;\n                v = uv[\"" + e + "\"];\n\n                if(cv[0] !== v[0] || cv[1] !== v[1])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    gl.uniform2f(ud[\"" + e + "\"].location, v[0], v[1]);\n                }\n            ";
              }
            }, {
              test: function (e, t) {
                return e.type === "vec4" && e.size === 1 && !e.isArray && t.width !== undefined;
              },
              code: function (e) {
                return "\n                cv = ud[\"" + e + "\"].value;\n                v = uv[\"" + e + "\"];\n\n                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    cv[2] = v.width;\n                    cv[3] = v.height;\n                    gl.uniform4f(ud[\"" + e + "\"].location, v.x, v.y, v.width, v.height)\n                }";
              },
              codeUbo: function (e) {
                return "\n                    v = uv." + e + ";\n\n                    data[offset] = v.x;\n                    data[offset+1] = v.y;\n                    data[offset+2] = v.width;\n                    data[offset+3] = v.height;\n                ";
              }
            }, {
              test: function (e) {
                return e.type === "vec4" && e.size === 1 && !e.isArray;
              },
              code: function (e) {
                return "\n                cv = ud[\"" + e + "\"].value;\n                v = uv[\"" + e + "\"];\n\n                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    cv[2] = v[2];\n                    cv[3] = v[3];\n\n                    gl.uniform4f(ud[\"" + e + "\"].location, v[0], v[1], v[2], v[3])\n                }";
              }
            }];
            var Se = {
              float: "\n    if (cv !== v)\n    {\n        cu.value = v;\n        gl.uniform1f(location, v);\n    }",
              vec2: "\n    if (cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n\n        gl.uniform2f(location, v[0], v[1])\n    }",
              vec3: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3f(location, v[0], v[1], v[2])\n    }",
              vec4: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n        cv[3] = v[3];\n\n        gl.uniform4f(location, v[0], v[1], v[2], v[3]);\n    }",
              int: "\n    if (cv !== v)\n    {\n        cu.value = v;\n\n        gl.uniform1i(location, v);\n    }",
              ivec2: "\n    if (cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n\n        gl.uniform2i(location, v[0], v[1]);\n    }",
              ivec3: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3i(location, v[0], v[1], v[2]);\n    }",
              ivec4: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n        cv[3] = v[3];\n\n        gl.uniform4i(location, v[0], v[1], v[2], v[3]);\n    }",
              uint: "\n    if (cv !== v)\n    {\n        cu.value = v;\n\n        gl.uniform1ui(location, v);\n    }",
              uvec2: "\n    if (cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n\n        gl.uniform2ui(location, v[0], v[1]);\n    }",
              uvec3: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3ui(location, v[0], v[1], v[2]);\n    }",
              uvec4: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n        cv[3] = v[3];\n\n        gl.uniform4ui(location, v[0], v[1], v[2], v[3]);\n    }",
              bool: "\n    if (cv !== v)\n    {\n        cu.value = v;\n        gl.uniform1i(location, v);\n    }",
              bvec2: "\n    if (cv[0] != v[0] || cv[1] != v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n\n        gl.uniform2i(location, v[0], v[1]);\n    }",
              bvec3: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3i(location, v[0], v[1], v[2]);\n    }",
              bvec4: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n        cv[3] = v[3];\n\n        gl.uniform4i(location, v[0], v[1], v[2], v[3]);\n    }",
              mat2: "gl.uniformMatrix2fv(location, false, v)",
              mat3: "gl.uniformMatrix3fv(location, false, v)",
              mat4: "gl.uniformMatrix4fv(location, false, v)",
              sampler2D: "\n    if (cv !== v)\n    {\n        cu.value = v;\n\n        gl.uniform1i(location, v);\n    }",
              samplerCube: "\n    if (cv !== v)\n    {\n        cu.value = v;\n\n        gl.uniform1i(location, v);\n    }",
              sampler2DArray: "\n    if (cv !== v)\n    {\n        cu.value = v;\n\n        gl.uniform1i(location, v);\n    }"
            };
            var Ee = {
              float: "gl.uniform1fv(location, v)",
              vec2: "gl.uniform2fv(location, v)",
              vec3: "gl.uniform3fv(location, v)",
              vec4: "gl.uniform4fv(location, v)",
              mat4: "gl.uniformMatrix4fv(location, false, v)",
              mat3: "gl.uniformMatrix3fv(location, false, v)",
              mat2: "gl.uniformMatrix2fv(location, false, v)",
              int: "gl.uniform1iv(location, v)",
              ivec2: "gl.uniform2iv(location, v)",
              ivec3: "gl.uniform3iv(location, v)",
              ivec4: "gl.uniform4iv(location, v)",
              uint: "gl.uniform1uiv(location, v)",
              uvec2: "gl.uniform2uiv(location, v)",
              uvec3: "gl.uniform3uiv(location, v)",
              uvec4: "gl.uniform4uiv(location, v)",
              bool: "gl.uniform1iv(location, v)",
              bvec2: "gl.uniform2iv(location, v)",
              bvec3: "gl.uniform3iv(location, v)",
              bvec4: "gl.uniform4iv(location, v)",
              sampler2D: "gl.uniform1iv(location, v)",
              samplerCube: "gl.uniform1iv(location, v)",
              sampler2DArray: "gl.uniform1iv(location, v)"
            };
            var Oe = ["precision mediump float;", "void main(void){", "float test = 0.1;", "%forloop%", "gl_FragColor = vec4(0.0);", "}"].join("\n");
            function ke(e) {
              var t = "";
              for (var n = 0; n < e; ++n) {
                if (n > 0) {
                  t += "\nelse ";
                }
                if (n < e - 1) {
                  t += "if(test == " + n + ".0){}";
                }
              }
              return t;
            }
            function Pe(e, t) {
              if (e === 0) {
                throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
              }
              var n = t.createShader(t.FRAGMENT_SHADER);
              for (;;) {
                var r = Oe.replace(/%forloop%/gi, ke(e));
                t.shaderSource(n, r);
                t.compileShader(n);
                if (t.getShaderParameter(n, t.COMPILE_STATUS)) {
                  break;
                }
                e = e / 2 | 0;
              }
              return e;
            }
            var Me = 0;
            var Re = {};
            var Ie = function () {
              function e(t, n, s = "pixi-shader") {
                this.id = Me++;
                this.vertexSrc = t || e.defaultVertexSrc;
                this.fragmentSrc = n || e.defaultFragmentSrc;
                this.vertexSrc = this.vertexSrc.trim();
                this.fragmentSrc = this.fragmentSrc.trim();
                if (this.vertexSrc.substring(0, 8) !== "#version") {
                  s = s.replace(/\s+/g, "-");
                  if (Re[s]) {
                    Re[s]++;
                    s += "-" + Re[s];
                  } else {
                    Re[s] = 1;
                  }
                  this.vertexSrc = "#define SHADER_NAME " + s + "\n" + this.vertexSrc;
                  this.fragmentSrc = "#define SHADER_NAME " + s + "\n" + this.fragmentSrc;
                  this.vertexSrc = ye(this.vertexSrc, r.W0.PRECISION_VERTEX, i.Pk.HIGH);
                  this.fragmentSrc = ye(this.fragmentSrc, r.W0.PRECISION_FRAGMENT, function () {
                    if (!me) {
                      me = i.Pk.MEDIUM;
                      var e = ve();
                      if (e && e.getShaderPrecisionFormat) {
                        var t = e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT);
                        me = t.precision ? i.Pk.HIGH : i.Pk.MEDIUM;
                      }
                    }
                    return me;
                  }());
                }
                this.glPrograms = {};
                this.syncUniforms = null;
              }
              Object.defineProperty(e, "defaultVertexSrc", {
                get: function () {
                  return "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n}\n";
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e, "defaultFragmentSrc", {
                get: function () {
                  return "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor *= texture2D(uSampler, vTextureCoord);\n}";
                },
                enumerable: false,
                configurable: true
              });
              e.from = function (t, n, r) {
                var i = t + n;
                var a = s.ProgramCache[i];
                if (!a) {
                  s.ProgramCache[i] = a = new e(t, n, r);
                }
                return a;
              };
              return e;
            }();
            var Le = function () {
              function e(e, t) {
                this.uniformBindCount = 0;
                this.program = e;
                this.uniformGroup = t ? t instanceof J ? t : new J(t) : new J({});
                this.disposeRunner = new o.b("disposeShader");
              }
              e.prototype.checkUniformExists = function (e, t) {
                if (t.uniforms[e]) {
                  return true;
                }
                for (var n in t.uniforms) {
                  var r = t.uniforms[n];
                  if (r.group && this.checkUniformExists(e, r)) {
                    return true;
                  }
                }
                return false;
              };
              e.prototype.destroy = function () {
                this.uniformGroup = null;
                this.disposeRunner.emit(this);
                this.disposeRunner.destroy();
              };
              Object.defineProperty(e.prototype, "uniforms", {
                get: function () {
                  return this.uniformGroup.uniforms;
                },
                enumerable: false,
                configurable: true
              });
              e.from = function (t, n, r) {
                return new e(Ie.from(t, n), r);
              };
              return e;
            }();
            var je = function () {
              function e() {
                this.data = 0;
                this.blendMode = i.B9.NORMAL;
                this.polygonOffset = 0;
                this.blend = true;
                this.depthMask = true;
              }
              Object.defineProperty(e.prototype, "blend", {
                get: function () {
                  return !!(this.data & 1);
                },
                set: function (e) {
                  if (!!(this.data & 1) !== e) {
                    this.data ^= 1;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "offsets", {
                get: function () {
                  return !!(this.data & 2);
                },
                set: function (e) {
                  if (!!(this.data & 2) !== e) {
                    this.data ^= 2;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "culling", {
                get: function () {
                  return !!(this.data & 4);
                },
                set: function (e) {
                  if (!!(this.data & 4) !== e) {
                    this.data ^= 4;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "depthTest", {
                get: function () {
                  return !!(this.data & 8);
                },
                set: function (e) {
                  if (!!(this.data & 8) !== e) {
                    this.data ^= 8;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "depthMask", {
                get: function () {
                  return !!(this.data & 32);
                },
                set: function (e) {
                  if (!!(this.data & 32) !== e) {
                    this.data ^= 32;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "clockwiseFrontFace", {
                get: function () {
                  return !!(this.data & 16);
                },
                set: function (e) {
                  if (!!(this.data & 16) !== e) {
                    this.data ^= 16;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "blendMode", {
                get: function () {
                  return this._blendMode;
                },
                set: function (e) {
                  this.blend = e !== i.B9.NONE;
                  this._blendMode = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "polygonOffset", {
                get: function () {
                  return this._polygonOffset;
                },
                set: function (e) {
                  this.offsets = !!e;
                  this._polygonOffset = e;
                },
                enumerable: false,
                configurable: true
              });
              e.prototype.toString = function () {
                return "[@pixi/core:State blendMode=" + this.blendMode + " clockwiseFrontFace=" + this.clockwiseFrontFace + " culling=" + this.culling + " depthMask=" + this.depthMask + " polygonOffset=" + this.polygonOffset + "]";
              };
              e.for2d = function () {
                var t = new e();
                t.depthTest = false;
                t.blend = true;
                return t;
              };
              return e;
            }();
            var Be = function (e) {
              function t(n, i, s) {
                var a = this;
                var o = Ie.from(n || t.defaultVertexSrc, i || t.defaultFragmentSrc);
                (a = e.call(this, o, s) || this).padding = 0;
                a.resolution = r.W0.FILTER_RESOLUTION;
                a.multisample = r.W0.FILTER_MULTISAMPLE;
                a.enabled = true;
                a.autoFit = true;
                a.state = new je();
                return a;
              }
              p(t, e);
              t.prototype.apply = function (e, t, n, r, i) {
                e.applyFilter(this, t, n, r);
              };
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
              Object.defineProperty(t.prototype, "resolution", {
                get: function () {
                  return this._resolution;
                },
                set: function (e) {
                  this._resolution = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t, "defaultVertexSrc", {
                get: function () {
                  return "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n";
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t, "defaultFragmentSrc", {
                get: function () {
                  return "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n}\n";
                },
                enumerable: false,
                configurable: true
              });
              return t;
            }(Le);
            var De = new l.uq();
            var Fe = function () {
              function e(e, t) {
                this._texture = e;
                this.mapCoord = new l.uq();
                this.uClampFrame = new Float32Array(4);
                this.uClampOffset = new Float32Array(2);
                this._textureID = -1;
                this._updateID = 0;
                this.clampOffset = 0;
                this.clampMargin = t === undefined ? 0.5 : t;
                this.isSimple = false;
              }
              Object.defineProperty(e.prototype, "texture", {
                get: function () {
                  return this._texture;
                },
                set: function (e) {
                  this._texture = e;
                  this._textureID = -1;
                },
                enumerable: false,
                configurable: true
              });
              e.prototype.multiplyUvs = function (e, t = e) {
                var n = this.mapCoord;
                for (var r = 0; r < e.length; r += 2) {
                  var i = e[r];
                  var s = e[r + 1];
                  t[r] = i * n.a + s * n.c + n.tx;
                  t[r + 1] = i * n.b + s * n.d + n.ty;
                }
                return t;
              };
              e.prototype.update = function (e) {
                var t = this._texture;
                if (!t || !t.valid) {
                  return false;
                }
                if (!e && this._textureID === t._updateID) {
                  return false;
                }
                this._textureID = t._updateID;
                this._updateID++;
                var n = t._uvs;
                this.mapCoord.set(n.x1 - n.x0, n.y1 - n.y0, n.x3 - n.x0, n.y3 - n.y0, n.x0, n.y0);
                var r = t.orig;
                var i = t.trim;
                if (i) {
                  De.set(r.width / i.width, 0, 0, r.height / i.height, -i.x / i.width, -i.y / i.height);
                  this.mapCoord.append(De);
                }
                var s = t.baseTexture;
                var a = this.uClampFrame;
                var o = this.clampMargin / s.resolution;
                var h = this.clampOffset;
                a[0] = (t._frame.x + o + h) / s.width;
                a[1] = (t._frame.y + o + h) / s.height;
                a[2] = (t._frame.x + t._frame.width - o + h) / s.width;
                a[3] = (t._frame.y + t._frame.height - o + h) / s.height;
                this.uClampOffset[0] = h / s.realWidth;
                this.uClampOffset[1] = h / s.realHeight;
                this.isSimple = t._frame.width === s.width && t._frame.height === s.height && t.rotate === 0;
                return true;
              };
              return e;
            }();
            var Ne = function (e) {
              function t(t, n, r) {
                var i = this;
                var s = null;
                if (typeof t != "string" && n === undefined && r === undefined) {
                  s = t;
                  t = undefined;
                  n = undefined;
                  r = undefined;
                }
                (i = e.call(this, t || "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n", n || "varying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform sampler2D mask;\nuniform float alpha;\nuniform float npmAlpha;\nuniform vec4 maskClamp;\n\nvoid main(void)\n{\n    float clip = step(3.5,\n        step(maskClamp.x, vMaskCoord.x) +\n        step(maskClamp.y, vMaskCoord.y) +\n        step(vMaskCoord.x, maskClamp.z) +\n        step(vMaskCoord.y, maskClamp.w));\n\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);\n\n    original *= (alphaMul * masky.r * alpha * clip);\n\n    gl_FragColor = original;\n}\n", r) || this).maskSprite = s;
                i.maskMatrix = new l.uq();
                return i;
              }
              p(t, e);
              Object.defineProperty(t.prototype, "maskSprite", {
                get: function () {
                  return this._maskSprite;
                },
                set: function (e) {
                  this._maskSprite = e;
                  if (this._maskSprite) {
                    this._maskSprite.renderable = false;
                  }
                },
                enumerable: false,
                configurable: true
              });
              t.prototype.apply = function (e, t, n, r) {
                var i = this._maskSprite;
                var s = i._texture;
                if (s.valid) {
                  s.uvMatrix ||= new Fe(s, 0);
                  s.uvMatrix.update();
                  this.uniforms.npmAlpha = s.baseTexture.alphaMode ? 0 : 1;
                  this.uniforms.mask = s;
                  this.uniforms.otherMatrix = e.calculateSpriteMatrix(this.maskMatrix, i).prepend(s.uvMatrix.mapCoord);
                  this.uniforms.alpha = i.worldAlpha;
                  this.uniforms.maskClamp = s.uvMatrix.uClampFrame;
                  e.applyFilter(this, t, n, r);
                }
              };
              return t;
            }(Be);
            var Ge = function () {
              function e(e) {
                this.renderer = e;
                this.enableScissor = true;
                this.alphaMaskPool = [];
                this.maskDataPool = [];
                this.maskStack = [];
                this.alphaMaskIndex = 0;
              }
              e.prototype.setMaskStack = function (e) {
                this.maskStack = e;
                this.renderer.scissor.setMaskStack(e);
                this.renderer.stencil.setMaskStack(e);
              };
              e.prototype.push = function (e, t) {
                var n = t;
                if (!n.isMaskData) {
                  var r = this.maskDataPool.pop() || new le();
                  r.pooled = true;
                  r.maskObject = t;
                  n = r;
                }
                var s = this.maskStack.length !== 0 ? this.maskStack[this.maskStack.length - 1] : null;
                n.copyCountersOrReset(s);
                n._colorMask = s ? s._colorMask : 15;
                if (n.autoDetect) {
                  this.detect(n);
                }
                n._target = e;
                if (n.type !== i.vg.SPRITE) {
                  this.maskStack.push(n);
                }
                if (n.enabled) {
                  switch (n.type) {
                    case i.vg.SCISSOR:
                      this.renderer.scissor.push(n);
                      break;
                    case i.vg.STENCIL:
                      this.renderer.stencil.push(n);
                      break;
                    case i.vg.SPRITE:
                      n.copyCountersOrReset(null);
                      this.pushSpriteMask(n);
                      break;
                    case i.vg.COLOR:
                      this.pushColorMask(n);
                  }
                }
                if (n.type === i.vg.SPRITE) {
                  this.maskStack.push(n);
                }
              };
              e.prototype.pop = function (e) {
                var t = this.maskStack.pop();
                if (t && t._target === e) {
                  if (t.enabled) {
                    switch (t.type) {
                      case i.vg.SCISSOR:
                        this.renderer.scissor.pop(t);
                        break;
                      case i.vg.STENCIL:
                        this.renderer.stencil.pop(t.maskObject);
                        break;
                      case i.vg.SPRITE:
                        this.popSpriteMask(t);
                        break;
                      case i.vg.COLOR:
                        this.popColorMask(t);
                    }
                  }
                  t.reset();
                  if (t.pooled) {
                    this.maskDataPool.push(t);
                  }
                  if (this.maskStack.length !== 0) {
                    var n = this.maskStack[this.maskStack.length - 1];
                    if (n.type === i.vg.SPRITE && n._filters) {
                      n._filters[0].maskSprite = n.maskObject;
                    }
                  }
                }
              };
              e.prototype.detect = function (e) {
                var t = e.maskObject;
                if (t) {
                  if (t.isSprite) {
                    e.type = i.vg.SPRITE;
                  } else if (this.enableScissor && this.renderer.scissor.testScissor(e)) {
                    e.type = i.vg.SCISSOR;
                  } else {
                    e.type = i.vg.STENCIL;
                  }
                } else {
                  e.type = i.vg.COLOR;
                }
              };
              e.prototype.pushSpriteMask = function (e) {
                var r = e.maskObject;
                var i = e._target;
                var s = e._filters;
                if (!(s ||= this.alphaMaskPool[this.alphaMaskIndex])) {
                  s = this.alphaMaskPool[this.alphaMaskIndex] = [new Ne()];
                }
                var a;
                var o;
                var h = this.renderer;
                var l = h.renderTexture;
                if (l.current) {
                  var d = l.current;
                  a = e.resolution || d.resolution;
                  o = e.multisample ?? d.multisample;
                } else {
                  a = e.resolution || h.resolution;
                  o = e.multisample ?? h.multisample;
                }
                s[0].resolution = a;
                s[0].multisample = o;
                s[0].maskSprite = r;
                var c = i.filterArea;
                i.filterArea = r.getBounds(true);
                h.filter.push(i, s);
                i.filterArea = c;
                if (!e._filters) {
                  this.alphaMaskIndex++;
                }
              };
              e.prototype.popSpriteMask = function (e) {
                this.renderer.filter.pop();
                if (e._filters) {
                  e._filters[0].maskSprite = null;
                } else {
                  this.alphaMaskIndex--;
                  this.alphaMaskPool[this.alphaMaskIndex][0].maskSprite = null;
                }
              };
              e.prototype.pushColorMask = function (e) {
                var t = e._colorMask;
                var n = e._colorMask = t & e.colorMask;
                if (n !== t) {
                  this.renderer.gl.colorMask(!!(n & 1), !!(n & 2), !!(n & 4), !!(n & 8));
                }
              };
              e.prototype.popColorMask = function (e) {
                var t = e._colorMask;
                var n = this.maskStack.length > 0 ? this.maskStack[this.maskStack.length - 1]._colorMask : 15;
                if (n !== t) {
                  this.renderer.gl.colorMask(!!(n & 1), !!(n & 2), !!(n & 4), !!(n & 8));
                }
              };
              e.prototype.destroy = function () {
                this.renderer = null;
              };
              return e;
            }();
            var Ue = function () {
              function e(e) {
                this.renderer = e;
                this.maskStack = [];
                this.glConst = 0;
              }
              e.prototype.getStackLength = function () {
                return this.maskStack.length;
              };
              e.prototype.setMaskStack = function (e) {
                var t = this.renderer.gl;
                var n = this.getStackLength();
                this.maskStack = e;
                var r = this.getStackLength();
                if (r !== n) {
                  if (r === 0) {
                    t.disable(this.glConst);
                  } else {
                    t.enable(this.glConst);
                    this._useCurrent();
                  }
                }
              };
              e.prototype._useCurrent = function () {};
              e.prototype.destroy = function () {
                this.renderer = null;
                this.maskStack = null;
              };
              return e;
            }();
            var Ve = new l.uq();
            var He = [];
            var ze = function (e) {
              function t(t) {
                var n = e.call(this, t) || this;
                n.glConst = r.W0.ADAPTER.getWebGLRenderingContext().SCISSOR_TEST;
                return n;
              }
              p(t, e);
              t.prototype.getStackLength = function () {
                var e = this.maskStack[this.maskStack.length - 1];
                if (e) {
                  return e._scissorCounter;
                } else {
                  return 0;
                }
              };
              t.prototype.calcScissorRect = function (e) {
                if (!e._scissorRectLocal) {
                  var n = e._scissorRect;
                  var r = e.maskObject;
                  var i = this.renderer;
                  var s = i.renderTexture;
                  var a = r.getBounds(true, He.pop() ?? new l.M_());
                  this.roundFrameToPixels(a, s.current ? s.current.resolution : i.resolution, s.sourceFrame, s.destinationFrame, i.projection.transform);
                  if (n) {
                    a.fit(n);
                  }
                  e._scissorRectLocal = a;
                }
              };
              t.isMatrixRotated = function (e) {
                if (!e) {
                  return false;
                }
                var t = e.a;
                var n = e.b;
                var r = e.c;
                var i = e.d;
                return (Math.abs(n) > 0.0001 || Math.abs(r) > 0.0001) && (Math.abs(t) > 0.0001 || Math.abs(i) > 0.0001);
              };
              t.prototype.testScissor = function (e) {
                var n = e.maskObject;
                if (!n.isFastRect || !n.isFastRect()) {
                  return false;
                }
                if (t.isMatrixRotated(n.worldTransform)) {
                  return false;
                }
                if (t.isMatrixRotated(this.renderer.projection.transform)) {
                  return false;
                }
                this.calcScissorRect(e);
                var r = e._scissorRectLocal;
                return r.width > 0 && r.height > 0;
              };
              t.prototype.roundFrameToPixels = function (e, n, r, i, s) {
                if (!t.isMatrixRotated(s)) {
                  (s = s ? Ve.copyFrom(s) : Ve.identity()).translate(-r.x, -r.y).scale(i.width / r.width, i.height / r.height).translate(i.x, i.y);
                  this.renderer.filter.transformAABB(s, e);
                  e.fit(i);
                  e.x = Math.round(e.x * n);
                  e.y = Math.round(e.y * n);
                  e.width = Math.round(e.width * n);
                  e.height = Math.round(e.height * n);
                }
              };
              t.prototype.push = function (e) {
                if (!e._scissorRectLocal) {
                  this.calcScissorRect(e);
                }
                var t = this.renderer.gl;
                if (!e._scissorRect) {
                  t.enable(t.SCISSOR_TEST);
                }
                e._scissorCounter++;
                e._scissorRect = e._scissorRectLocal;
                this._useCurrent();
              };
              t.prototype.pop = function (e) {
                var t = this.renderer.gl;
                if (e) {
                  He.push(e._scissorRectLocal);
                }
                if (this.getStackLength() > 0) {
                  this._useCurrent();
                } else {
                  t.disable(t.SCISSOR_TEST);
                }
              };
              t.prototype._useCurrent = function () {
                var e;
                var t = this.maskStack[this.maskStack.length - 1]._scissorRect;
                e = this.renderer.renderTexture.current ? t.y : this.renderer.height - t.height - t.y;
                this.renderer.gl.scissor(t.x, e, t.width, t.height);
              };
              return t;
            }(Ue);
            var We = function (e) {
              function t(t) {
                var n = e.call(this, t) || this;
                n.glConst = r.W0.ADAPTER.getWebGLRenderingContext().STENCIL_TEST;
                return n;
              }
              p(t, e);
              t.prototype.getStackLength = function () {
                var e = this.maskStack[this.maskStack.length - 1];
                if (e) {
                  return e._stencilCounter;
                } else {
                  return 0;
                }
              };
              t.prototype.push = function (e) {
                var t = e.maskObject;
                var n = this.renderer.gl;
                var r = e._stencilCounter;
                if (r === 0) {
                  this.renderer.framebuffer.forceStencil();
                  n.clearStencil(0);
                  n.clear(n.STENCIL_BUFFER_BIT);
                  n.enable(n.STENCIL_TEST);
                }
                e._stencilCounter++;
                var i = e._colorMask;
                if (i !== 0) {
                  e._colorMask = 0;
                  n.colorMask(false, false, false, false);
                }
                n.stencilFunc(n.EQUAL, r, 4294967295);
                n.stencilOp(n.KEEP, n.KEEP, n.INCR);
                t.renderable = true;
                t.render(this.renderer);
                this.renderer.batch.flush();
                t.renderable = false;
                if (i !== 0) {
                  e._colorMask = i;
                  n.colorMask(!!(i & 1), !!(i & 2), !!(i & 4), !!(i & 8));
                }
                this._useCurrent();
              };
              t.prototype.pop = function (e) {
                var t = this.renderer.gl;
                if (this.getStackLength() === 0) {
                  t.disable(t.STENCIL_TEST);
                } else {
                  var n = this.maskStack.length !== 0 ? this.maskStack[this.maskStack.length - 1] : null;
                  var r = n ? n._colorMask : 15;
                  if (r !== 0) {
                    n._colorMask = 0;
                    t.colorMask(false, false, false, false);
                  }
                  t.stencilOp(t.KEEP, t.KEEP, t.DECR);
                  e.renderable = true;
                  e.render(this.renderer);
                  this.renderer.batch.flush();
                  e.renderable = false;
                  if (r !== 0) {
                    n._colorMask = r;
                    t.colorMask(!!(r & 1), !!(r & 2), !!(r & 4), !!(r & 8));
                  }
                  this._useCurrent();
                }
              };
              t.prototype._useCurrent = function () {
                var e = this.renderer.gl;
                e.stencilFunc(e.EQUAL, this.getStackLength(), 4294967295);
                e.stencilOp(e.KEEP, e.KEEP, e.KEEP);
              };
              return t;
            }(Ue);
            var Xe = function () {
              function e(e) {
                this.renderer = e;
                this.destinationFrame = null;
                this.sourceFrame = null;
                this.defaultFrame = null;
                this.projectionMatrix = new l.uq();
                this.transform = null;
              }
              e.prototype.update = function (e, t, n, r) {
                this.destinationFrame = e || this.destinationFrame || this.defaultFrame;
                this.sourceFrame = t || this.sourceFrame || e;
                this.calculateProjection(this.destinationFrame, this.sourceFrame, n, r);
                if (this.transform) {
                  this.projectionMatrix.append(this.transform);
                }
                var i = this.renderer;
                i.globalUniforms.uniforms.projectionMatrix = this.projectionMatrix;
                i.globalUniforms.update();
                if (i.shader.shader) {
                  i.shader.syncUniformGroup(i.shader.shader.uniforms.globals);
                }
              };
              e.prototype.calculateProjection = function (e, t, n, r) {
                var i = this.projectionMatrix;
                var s = r ? -1 : 1;
                i.identity();
                i.a = 1 / t.width * 2;
                i.d = s * (1 / t.height * 2);
                i.tx = -1 - t.x * i.a;
                i.ty = -s - t.y * i.d;
              };
              e.prototype.setTransform = function (e) {};
              e.prototype.destroy = function () {
                this.renderer = null;
              };
              return e;
            }();
            var Ye = new l.M_();
            var qe = new l.M_();
            var Je = function () {
              function e(e) {
                this.renderer = e;
                this.clearColor = e._backgroundColorRgba;
                this.defaultMaskStack = [];
                this.current = null;
                this.sourceFrame = new l.M_();
                this.destinationFrame = new l.M_();
                this.viewportFrame = new l.M_();
              }
              e.prototype.bind = function (e = null, t, n) {
                var r;
                var i;
                var s;
                var a = this.renderer;
                this.current = e;
                if (e) {
                  s = (r = e.baseTexture).resolution;
                  if (!t) {
                    Ye.width = e.frame.width;
                    Ye.height = e.frame.height;
                    t = Ye;
                  }
                  if (!n) {
                    qe.x = e.frame.x;
                    qe.y = e.frame.y;
                    qe.width = t.width;
                    qe.height = t.height;
                    n = qe;
                  }
                  i = r.framebuffer;
                } else {
                  s = a.resolution;
                  if (!t) {
                    Ye.width = a.screen.width;
                    Ye.height = a.screen.height;
                    t = Ye;
                  }
                  if (!n) {
                    (n = Ye).width = t.width;
                    n.height = t.height;
                  }
                }
                var o = this.viewportFrame;
                o.x = n.x * s;
                o.y = n.y * s;
                o.width = n.width * s;
                o.height = n.height * s;
                if (!e) {
                  o.y = a.view.height - (o.y + o.height);
                }
                o.ceil();
                this.renderer.framebuffer.bind(i, o);
                this.renderer.projection.update(n, t, s, !i);
                if (e) {
                  this.renderer.mask.setMaskStack(r.maskStack);
                } else {
                  this.renderer.mask.setMaskStack(this.defaultMaskStack);
                }
                this.sourceFrame.copyFrom(t);
                this.destinationFrame.copyFrom(n);
              };
              e.prototype.clear = function (e, t) {
                e = this.current ? e || this.current.baseTexture.clearColor : e || this.clearColor;
                var n = this.destinationFrame;
                var r = this.current ? this.current.baseTexture : this.renderer.screen;
                var i = n.width !== r.width || n.height !== r.height;
                if (i) {
                  var s = this.viewportFrame;
                  var a = s.x;
                  var o = s.y;
                  var h = s.width;
                  var l = s.height;
                  a = Math.round(a);
                  o = Math.round(o);
                  h = Math.round(h);
                  l = Math.round(l);
                  this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST);
                  this.renderer.gl.scissor(a, o, h, l);
                }
                this.renderer.framebuffer.clear(e[0], e[1], e[2], e[3], t);
                if (i) {
                  this.renderer.scissor.pop();
                }
              };
              e.prototype.resize = function () {
                this.bind(null);
              };
              e.prototype.reset = function () {
                this.bind(null);
              };
              e.prototype.destroy = function () {
                this.renderer = null;
              };
              return e;
            }();
            function Ke(e, t, n, r, i) {
              n.buffer.update(i);
            }
            var Ze = {
              float: "\n        data[offset] = v;\n    ",
              vec2: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n    ",
              vec3: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n        data[offset+2] = v[2];\n\n    ",
              vec4: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n        data[offset+2] = v[2];\n        data[offset+3] = v[3];\n    ",
              mat2: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n\n        data[offset+4] = v[2];\n        data[offset+5] = v[3];\n    ",
              mat3: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n        data[offset+2] = v[2];\n\n        data[offset + 4] = v[3];\n        data[offset + 5] = v[4];\n        data[offset + 6] = v[5];\n\n        data[offset + 8] = v[6];\n        data[offset + 9] = v[7];\n        data[offset + 10] = v[8];\n    ",
              mat4: "\n        for(var i = 0; i < 16; i++)\n        {\n            data[offset + i] = v[i];\n        }\n    "
            };
            var $e = {
              float: 4,
              vec2: 8,
              vec3: 12,
              vec4: 16,
              int: 4,
              ivec2: 8,
              ivec3: 12,
              ivec4: 16,
              uint: 4,
              uvec2: 8,
              uvec3: 12,
              uvec4: 16,
              bool: 4,
              bvec2: 8,
              bvec3: 12,
              bvec4: 16,
              mat2: 32,
              mat3: 48,
              mat4: 64
            };
            function Qe(e) {
              for (var t = e.map(function (e) {
                  return {
                    data: e,
                    offset: 0,
                    dataLen: 0,
                    dirty: 0
                  };
                }), n = 0, r = 0, i = 0, s = 0; s < t.length; s++) {
                var a = t[s];
                n = $e[a.data.type];
                if (a.data.size > 1) {
                  n = Math.max(n, 16) * a.data.size;
                }
                a.dataLen = n;
                if (r % n !== 0 && r < 16) {
                  var o = r % n % 16;
                  r += o;
                  i += o;
                }
                if (r + n > 16) {
                  i = Math.ceil(i / 16) * 16;
                  a.offset = i;
                  i += n;
                  r = n;
                } else {
                  a.offset = i;
                  r += n;
                  i += n;
                }
              }
              return {
                uboElements: t,
                size: i = Math.ceil(i / 16) * 16
              };
            }
            function et(e, t) {
              var n = [];
              for (var r in e) {
                if (t[r]) {
                  n.push(t[r]);
                }
              }
              n.sort(function (e, t) {
                return e.index - t.index;
              });
              return n;
            }
            function tt(e, t) {
              if (!e.autoManage) {
                return {
                  size: 0,
                  syncFunc: Ke
                };
              }
              var n = Qe(et(e.uniforms, t));
              for (var r = n.uboElements, i = n.size, s = ["\n    var v = null;\n    var v2 = null;\n    var cv = null;\n    var t = 0;\n    var gl = renderer.gl\n    var index = 0;\n    var data = buffer.data;\n    "], a = 0; a < r.length; a++) {
                var o = r[a];
                var h = e.uniforms[o.data.name];
                var l = o.data.name;
                var d = false;
                for (var c = 0; c < Ce.length; c++) {
                  var u = Ce[c];
                  if (u.codeUbo && u.test(o.data, h)) {
                    s.push("offset = " + o.offset / 4 + ";", Ce[c].codeUbo(o.data.name, h));
                    d = true;
                    break;
                  }
                }
                if (!d) {
                  if (o.data.size > 1) {
                    var p = we(o.data.type);
                    var m = Math.max($e[o.data.type] / 16, 1);
                    var f = p / m;
                    var _ = (4 - f % 4) % 4;
                    s.push("\n                cv = ud." + l + ".value;\n                v = uv." + l + ";\n                offset = " + o.offset / 4 + ";\n\n                t = 0;\n\n                for(var i=0; i < " + o.data.size * m + "; i++)\n                {\n                    for(var j = 0; j < " + f + "; j++)\n                    {\n                        data[offset++] = v[t++];\n                    }\n                    offset += " + _ + ";\n                }\n\n                ");
                  } else {
                    var v = Ze[o.data.type];
                    s.push("\n                cv = ud." + l + ".value;\n                v = uv." + l + ";\n                offset = " + o.offset / 4 + ";\n                " + v + ";\n                ");
                  }
                }
              }
              s.push("\n       renderer.buffer.update(buffer);\n    ");
              return {
                size: i,
                syncFunc: new Function("ud", "uv", "renderer", "syncData", "buffer", s.join("\n"))
              };
            }
            function nt() {}
            var rt = function () {
              function e(e, t) {
                this.program = e;
                this.uniformData = t;
                this.uniformGroups = {};
                this.uniformDirtyGroups = {};
                this.uniformBufferBindings = {};
              }
              e.prototype.destroy = function () {
                this.uniformData = null;
                this.uniformGroups = null;
                this.uniformDirtyGroups = null;
                this.uniformBufferBindings = null;
                this.program = null;
              };
              return e;
            }();
            function it(e, t) {
              var n = de(e, e.VERTEX_SHADER, t.vertexSrc);
              var r = de(e, e.FRAGMENT_SHADER, t.fragmentSrc);
              var i = e.createProgram();
              e.attachShader(i, n);
              e.attachShader(i, r);
              e.linkProgram(i);
              if (!e.getProgramParameter(i, e.LINK_STATUS)) {
                (function (e, t, n, r) {
                  if (!e.getProgramParameter(t, e.LINK_STATUS)) {
                    if (!e.getShaderParameter(n, e.COMPILE_STATUS)) {
                      ce(e, n);
                    }
                    if (!e.getShaderParameter(r, e.COMPILE_STATUS)) {
                      ce(e, r);
                    }
                    e.getProgramInfoLog(t);
                  }
                })(e, i, n, r);
              }
              t.attributeData = function (e, t) {
                var n = {};
                for (var r = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), i = 0; i < r; i++) {
                  var s = t.getActiveAttrib(e, i);
                  if (s.name.indexOf("gl_") !== 0) {
                    var a = Te(t, s.type);
                    var o = {
                      type: a,
                      name: s.name,
                      size: we(a),
                      location: t.getAttribLocation(e, s.name)
                    };
                    n[s.name] = o;
                  }
                }
                return n;
              }(i, e);
              t.uniformData = function (e, t) {
                var n = {};
                for (var r = t.getProgramParameter(e, t.ACTIVE_UNIFORMS), i = 0; i < r; i++) {
                  var s = t.getActiveUniform(e, i);
                  var a = s.name.replace(/\[.*?\]$/, "");
                  var o = !!s.name.match(/\[.*?\]$/);
                  var h = Te(t, s.type);
                  n[a] = {
                    name: a,
                    index: i,
                    type: h,
                    size: s.size,
                    isArray: o,
                    value: pe(h, s.size)
                  };
                }
                return n;
              }(i, e);
              if (!/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(t.vertexSrc)) {
                var s = Object.keys(t.attributeData);
                s.sort(function (e, t) {
                  if (e > t) {
                    return 1;
                  } else {
                    return -1;
                  }
                });
                for (var a = 0; a < s.length; a++) {
                  t.attributeData[s[a]].location = a;
                  e.bindAttribLocation(i, a, s[a]);
                }
                e.linkProgram(i);
              }
              e.deleteShader(n);
              e.deleteShader(r);
              var o = {};
              for (var a in t.uniformData) {
                var h = t.uniformData[a];
                o[a] = {
                  location: e.getUniformLocation(i, a),
                  value: pe(h.type, h.size)
                };
              }
              return new rt(i, o);
            }
            var st = 0;
            var at = {
              textureCount: 0,
              uboCount: 0
            };
            var ot = function () {
              function e(e) {
                this.destroyed = false;
                this.renderer = e;
                this.systemCheck();
                this.gl = null;
                this.shader = null;
                this.program = null;
                this.cache = {};
                this._uboCache = {};
                this.id = st++;
              }
              e.prototype.systemCheck = function () {
                if (!function () {
                  if (typeof Ae == "boolean") {
                    return Ae;
                  }
                  try {
                    var e = new Function("param1", "param2", "param3", "return param1[param2] === param3;");
                    Ae = e({
                      a: "b"
                    }, "a", "b") === true;
                  } catch (e) {
                    Ae = false;
                  }
                  return Ae;
                }()) {
                  throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.");
                }
              };
              e.prototype.contextChange = function (e) {
                this.gl = e;
                this.reset();
              };
              e.prototype.bind = function (e, t) {
                e.disposeRunner.add(this);
                e.uniforms.globals = this.renderer.globalUniforms;
                var n = e.program;
                var r = n.glPrograms[this.renderer.CONTEXT_UID] || this.generateProgram(e);
                this.shader = e;
                if (this.program !== n) {
                  this.program = n;
                  this.gl.useProgram(r.program);
                }
                if (!t) {
                  at.textureCount = 0;
                  at.uboCount = 0;
                  this.syncUniformGroup(e.uniformGroup, at);
                }
                return r;
              };
              e.prototype.setUniforms = function (e) {
                var t = this.shader.program;
                var n = t.glPrograms[this.renderer.CONTEXT_UID];
                t.syncUniforms(n.uniformData, e, this.renderer);
              };
              e.prototype.syncUniformGroup = function (e, t) {
                var n = this.getGlProgram();
                if (!e.static || e.dirtyId !== n.uniformDirtyGroups[e.id]) {
                  n.uniformDirtyGroups[e.id] = e.dirtyId;
                  this.syncUniforms(e, n, t);
                }
              };
              e.prototype.syncUniforms = function (e, t, n) {
                (e.syncUniforms[this.shader.program.id] || this.createSyncGroups(e))(t.uniformData, e.uniforms, this.renderer, n);
              };
              e.prototype.createSyncGroups = function (e) {
                var t = this.getSignature(e, this.shader.program.uniformData, "u");
                this.cache[t] ||= function (e, t) {
                  var r = ["\n        var v = null;\n        var cv = null;\n        var cu = null;\n        var t = 0;\n        var gl = renderer.gl;\n    "];
                  for (var i in e.uniforms) {
                    var s = t[i];
                    if (s) {
                      var a = e.uniforms[i];
                      var o = false;
                      for (var h = 0; h < Ce.length; h++) {
                        if (Ce[h].test(s, a)) {
                          r.push(Ce[h].code(i, a));
                          o = true;
                          break;
                        }
                      }
                      if (!o) {
                        var l = (s.size !== 1 || s.isArray ? Ee : Se)[s.type].replace("location", "ud[\"" + i + "\"].location");
                        r.push("\n            cu = ud[\"" + i + "\"];\n            cv = cu.value;\n            v = uv[\"" + i + "\"];\n            " + l + ";");
                      }
                    } else if (e.uniforms[i]?.group) {
                      if (e.uniforms[i].ubo) {
                        r.push("\n                        renderer.shader.syncUniformBufferGroup(uv." + i + ", '" + i + "');\n                    ");
                      } else {
                        r.push("\n                        renderer.shader.syncUniformGroup(uv." + i + ", syncData);\n                    ");
                      }
                    }
                  }
                  return new Function("ud", "uv", "renderer", "syncData", r.join("\n"));
                }(e, this.shader.program.uniformData);
                e.syncUniforms[this.shader.program.id] = this.cache[t];
                return e.syncUniforms[this.shader.program.id];
              };
              e.prototype.syncUniformBufferGroup = function (e, t) {
                var n = this.getGlProgram();
                if (!e.static || e.dirtyId !== 0 || !n.uniformGroups[e.id]) {
                  e.dirtyId = 0;
                  var r = n.uniformGroups[e.id] || this.createSyncBufferGroup(e, n, t);
                  e.buffer.update();
                  r(n.uniformData, e.uniforms, this.renderer, at, e.buffer);
                }
                this.renderer.buffer.bindBufferBase(e.buffer, n.uniformBufferBindings[t]);
              };
              e.prototype.createSyncBufferGroup = function (e, t, n) {
                var r = this.renderer.gl;
                this.renderer.buffer.bind(e.buffer);
                var i = this.gl.getUniformBlockIndex(t.program, n);
                t.uniformBufferBindings[n] = this.shader.uniformBindCount;
                r.uniformBlockBinding(t.program, i, this.shader.uniformBindCount);
                this.shader.uniformBindCount++;
                var s = this.getSignature(e, this.shader.program.uniformData, "ubo");
                var a = this._uboCache[s];
                a ||= this._uboCache[s] = tt(e, this.shader.program.uniformData);
                if (e.autoManage) {
                  var o = new Float32Array(a.size / 4);
                  e.buffer.update(o);
                }
                t.uniformGroups[e.id] = a.syncFunc;
                return t.uniformGroups[e.id];
              };
              e.prototype.getSignature = function (e, t, n) {
                var r = e.uniforms;
                var i = [n + "-"];
                for (var s in r) {
                  i.push(s);
                  if (t[s]) {
                    i.push(t[s].type);
                  }
                }
                return i.join("-");
              };
              e.prototype.getGlProgram = function () {
                if (this.shader) {
                  return this.shader.program.glPrograms[this.renderer.CONTEXT_UID];
                } else {
                  return null;
                }
              };
              e.prototype.generateProgram = function (e) {
                var t = this.gl;
                var n = e.program;
                var r = it(t, n);
                n.glPrograms[this.renderer.CONTEXT_UID] = r;
                return r;
              };
              e.prototype.reset = function () {
                this.program = null;
                this.shader = null;
              };
              e.prototype.disposeShader = function (e) {
                if (this.shader === e) {
                  this.shader = null;
                }
              };
              e.prototype.destroy = function () {
                this.renderer = null;
                this.destroyed = true;
              };
              return e;
            }();
            var ht = function () {
              function e() {
                this.gl = null;
                this.stateId = 0;
                this.polygonOffset = 0;
                this.blendMode = i.B9.NONE;
                this._blendEq = false;
                this.map = [];
                this.map[0] = this.setBlend;
                this.map[1] = this.setOffset;
                this.map[2] = this.setCullFace;
                this.map[3] = this.setDepthTest;
                this.map[4] = this.setFrontFace;
                this.map[5] = this.setDepthMask;
                this.checks = [];
                this.defaultState = new je();
                this.defaultState.blend = true;
              }
              e.prototype.contextChange = function (e) {
                this.gl = e;
                this.blendModes = function (e, t = []) {
                  t[i.B9.NORMAL] = [e.ONE, e.ONE_MINUS_SRC_ALPHA];
                  t[i.B9.ADD] = [e.ONE, e.ONE];
                  t[i.B9.MULTIPLY] = [e.DST_COLOR, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA];
                  t[i.B9.SCREEN] = [e.ONE, e.ONE_MINUS_SRC_COLOR, e.ONE, e.ONE_MINUS_SRC_ALPHA];
                  t[i.B9.OVERLAY] = [e.ONE, e.ONE_MINUS_SRC_ALPHA];
                  t[i.B9.DARKEN] = [e.ONE, e.ONE_MINUS_SRC_ALPHA];
                  t[i.B9.LIGHTEN] = [e.ONE, e.ONE_MINUS_SRC_ALPHA];
                  t[i.B9.COLOR_DODGE] = [e.ONE, e.ONE_MINUS_SRC_ALPHA];
                  t[i.B9.COLOR_BURN] = [e.ONE, e.ONE_MINUS_SRC_ALPHA];
                  t[i.B9.HARD_LIGHT] = [e.ONE, e.ONE_MINUS_SRC_ALPHA];
                  t[i.B9.SOFT_LIGHT] = [e.ONE, e.ONE_MINUS_SRC_ALPHA];
                  t[i.B9.DIFFERENCE] = [e.ONE, e.ONE_MINUS_SRC_ALPHA];
                  t[i.B9.EXCLUSION] = [e.ONE, e.ONE_MINUS_SRC_ALPHA];
                  t[i.B9.HUE] = [e.ONE, e.ONE_MINUS_SRC_ALPHA];
                  t[i.B9.SATURATION] = [e.ONE, e.ONE_MINUS_SRC_ALPHA];
                  t[i.B9.COLOR] = [e.ONE, e.ONE_MINUS_SRC_ALPHA];
                  t[i.B9.LUMINOSITY] = [e.ONE, e.ONE_MINUS_SRC_ALPHA];
                  t[i.B9.NONE] = [0, 0];
                  t[i.B9.NORMAL_NPM] = [e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA];
                  t[i.B9.ADD_NPM] = [e.SRC_ALPHA, e.ONE, e.ONE, e.ONE];
                  t[i.B9.SCREEN_NPM] = [e.SRC_ALPHA, e.ONE_MINUS_SRC_COLOR, e.ONE, e.ONE_MINUS_SRC_ALPHA];
                  t[i.B9.SRC_IN] = [e.DST_ALPHA, e.ZERO];
                  t[i.B9.SRC_OUT] = [e.ONE_MINUS_DST_ALPHA, e.ZERO];
                  t[i.B9.SRC_ATOP] = [e.DST_ALPHA, e.ONE_MINUS_SRC_ALPHA];
                  t[i.B9.DST_OVER] = [e.ONE_MINUS_DST_ALPHA, e.ONE];
                  t[i.B9.DST_IN] = [e.ZERO, e.SRC_ALPHA];
                  t[i.B9.DST_OUT] = [e.ZERO, e.ONE_MINUS_SRC_ALPHA];
                  t[i.B9.DST_ATOP] = [e.ONE_MINUS_DST_ALPHA, e.SRC_ALPHA];
                  t[i.B9.XOR] = [e.ONE_MINUS_DST_ALPHA, e.ONE_MINUS_SRC_ALPHA];
                  t[i.B9.SUBTRACT] = [e.ONE, e.ONE, e.ONE, e.ONE, e.FUNC_REVERSE_SUBTRACT, e.FUNC_ADD];
                  return t;
                }(e);
                this.set(this.defaultState);
                this.reset();
              };
              e.prototype.set = function (e) {
                e = e || this.defaultState;
                if (this.stateId !== e.data) {
                  for (var t = this.stateId ^ e.data, n = 0; t;) {
                    if (t & 1) {
                      this.map[n].call(this, !!(e.data & 1 << n));
                    }
                    t >>= 1;
                    n++;
                  }
                  this.stateId = e.data;
                }
                for (n = 0; n < this.checks.length; n++) {
                  this.checks[n](this, e);
                }
              };
              e.prototype.forceState = function (e) {
                e = e || this.defaultState;
                for (var t = 0; t < this.map.length; t++) {
                  this.map[t].call(this, !!(e.data & 1 << t));
                }
                for (t = 0; t < this.checks.length; t++) {
                  this.checks[t](this, e);
                }
                this.stateId = e.data;
              };
              e.prototype.setBlend = function (t) {
                this.updateCheck(e.checkBlendMode, t);
                this.gl[t ? "enable" : "disable"](this.gl.BLEND);
              };
              e.prototype.setOffset = function (t) {
                this.updateCheck(e.checkPolygonOffset, t);
                this.gl[t ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL);
              };
              e.prototype.setDepthTest = function (e) {
                this.gl[e ? "enable" : "disable"](this.gl.DEPTH_TEST);
              };
              e.prototype.setDepthMask = function (e) {
                this.gl.depthMask(e);
              };
              e.prototype.setCullFace = function (e) {
                this.gl[e ? "enable" : "disable"](this.gl.CULL_FACE);
              };
              e.prototype.setFrontFace = function (e) {
                this.gl.frontFace(this.gl[e ? "CW" : "CCW"]);
              };
              e.prototype.setBlendMode = function (e) {
                if (e !== this.blendMode) {
                  this.blendMode = e;
                  var t = this.blendModes[e];
                  var n = this.gl;
                  if (t.length === 2) {
                    n.blendFunc(t[0], t[1]);
                  } else {
                    n.blendFuncSeparate(t[0], t[1], t[2], t[3]);
                  }
                  if (t.length === 6) {
                    this._blendEq = true;
                    n.blendEquationSeparate(t[4], t[5]);
                  } else if (this._blendEq) {
                    this._blendEq = false;
                    n.blendEquationSeparate(n.FUNC_ADD, n.FUNC_ADD);
                  }
                }
              };
              e.prototype.setPolygonOffset = function (e, t) {
                this.gl.polygonOffset(e, t);
              };
              e.prototype.reset = function () {
                this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, false);
                this.forceState(this.defaultState);
                this._blendEq = true;
                this.blendMode = -1;
                this.setBlendMode(0);
              };
              e.prototype.updateCheck = function (e, t) {
                var n = this.checks.indexOf(e);
                if (t && n === -1) {
                  this.checks.push(e);
                } else if (!t && n !== -1) {
                  this.checks.splice(n, 1);
                }
              };
              e.checkBlendMode = function (e, t) {
                e.setBlendMode(t.blendMode);
              };
              e.checkPolygonOffset = function (e, t) {
                e.setPolygonOffset(1, t.polygonOffset);
              };
              e.prototype.destroy = function () {
                this.gl = null;
              };
              return e;
            }();
            var lt = function () {
              function e(e) {
                this.renderer = e;
                this.count = 0;
                this.checkCount = 0;
                this.maxIdle = r.W0.GC_MAX_IDLE;
                this.checkCountMax = r.W0.GC_MAX_CHECK_COUNT;
                this.mode = r.W0.GC_MODE;
              }
              e.prototype.postrender = function () {
                if (this.renderer.renderingToScreen) {
                  this.count++;
                  if (this.mode !== i.OS.MANUAL) {
                    this.checkCount++;
                    if (this.checkCount > this.checkCountMax) {
                      this.checkCount = 0;
                      this.run();
                    }
                  }
                }
              };
              e.prototype.run = function () {
                var e = this.renderer.texture;
                for (var t = e.managedTextures, n = false, r = 0; r < t.length; r++) {
                  var i = t[r];
                  if (!i.framebuffer && this.count - i.touched > this.maxIdle) {
                    e.destroyTexture(i, true);
                    t[r] = null;
                    n = true;
                  }
                }
                if (n) {
                  var s = 0;
                  for (r = 0; r < t.length; r++) {
                    if (t[r] !== null) {
                      t[s++] = t[r];
                    }
                  }
                  t.length = s;
                }
              };
              e.prototype.unload = function (e) {
                var t = this.renderer.texture;
                var n = e._texture;
                if (n && !n.framebuffer) {
                  t.destroyTexture(n);
                }
                for (var r = e.children.length - 1; r >= 0; r--) {
                  this.unload(e.children[r]);
                }
              };
              e.prototype.destroy = function () {
                this.renderer = null;
              };
              return e;
            }();
            function dt(e) {
              this.texture = e;
              this.width = -1;
              this.height = -1;
              this.dirtyId = -1;
              this.dirtyStyleId = -1;
              this.mipmap = false;
              this.wrapMode = 33071;
              this.type = i.QE.UNSIGNED_BYTE;
              this.internalFormat = i.hR.RGBA;
              this.samplerType = 0;
            }
            var ct = function () {
              function e(e) {
                this.renderer = e;
                this.boundTextures = [];
                this.currentLocation = -1;
                this.managedTextures = [];
                this._unknownBoundTextures = false;
                this.unknownTexture = new y();
                this.hasIntegerTextures = false;
              }
              e.prototype.contextChange = function () {
                var e = this.gl = this.renderer.gl;
                this.CONTEXT_UID = this.renderer.CONTEXT_UID;
                this.webGLVersion = this.renderer.context.webGLVersion;
                this.internalFormats = function (e) {
                  var t;
                  var n;
                  var r;
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
                  if ("WebGL2RenderingContext" in globalThis && e instanceof globalThis.WebGL2RenderingContext) {
                    (t = {})[i.QE.UNSIGNED_BYTE] = ((n = {})[i.hR.RGBA] = e.RGBA8, n[i.hR.RGB] = e.RGB8, n[i.hR.RG] = e.RG8, n[i.hR.RED] = e.R8, n[i.hR.RGBA_INTEGER] = e.RGBA8UI, n[i.hR.RGB_INTEGER] = e.RGB8UI, n[i.hR.RG_INTEGER] = e.RG8UI, n[i.hR.RED_INTEGER] = e.R8UI, n[i.hR.ALPHA] = e.ALPHA, n[i.hR.LUMINANCE] = e.LUMINANCE, n[i.hR.LUMINANCE_ALPHA] = e.LUMINANCE_ALPHA, n);
                    t[i.QE.BYTE] = ((r = {})[i.hR.RGBA] = e.RGBA8_SNORM, r[i.hR.RGB] = e.RGB8_SNORM, r[i.hR.RG] = e.RG8_SNORM, r[i.hR.RED] = e.R8_SNORM, r[i.hR.RGBA_INTEGER] = e.RGBA8I, r[i.hR.RGB_INTEGER] = e.RGB8I, r[i.hR.RG_INTEGER] = e.RG8I, r[i.hR.RED_INTEGER] = e.R8I, r);
                    t[i.QE.UNSIGNED_SHORT] = ((s = {})[i.hR.RGBA_INTEGER] = e.RGBA16UI, s[i.hR.RGB_INTEGER] = e.RGB16UI, s[i.hR.RG_INTEGER] = e.RG16UI, s[i.hR.RED_INTEGER] = e.R16UI, s[i.hR.DEPTH_COMPONENT] = e.DEPTH_COMPONENT16, s);
                    t[i.QE.SHORT] = ((a = {})[i.hR.RGBA_INTEGER] = e.RGBA16I, a[i.hR.RGB_INTEGER] = e.RGB16I, a[i.hR.RG_INTEGER] = e.RG16I, a[i.hR.RED_INTEGER] = e.R16I, a);
                    t[i.QE.UNSIGNED_INT] = ((o = {})[i.hR.RGBA_INTEGER] = e.RGBA32UI, o[i.hR.RGB_INTEGER] = e.RGB32UI, o[i.hR.RG_INTEGER] = e.RG32UI, o[i.hR.RED_INTEGER] = e.R32UI, o[i.hR.DEPTH_COMPONENT] = e.DEPTH_COMPONENT24, o);
                    t[i.QE.INT] = ((h = {})[i.hR.RGBA_INTEGER] = e.RGBA32I, h[i.hR.RGB_INTEGER] = e.RGB32I, h[i.hR.RG_INTEGER] = e.RG32I, h[i.hR.RED_INTEGER] = e.R32I, h);
                    t[i.QE.FLOAT] = ((l = {})[i.hR.RGBA] = e.RGBA32F, l[i.hR.RGB] = e.RGB32F, l[i.hR.RG] = e.RG32F, l[i.hR.RED] = e.R32F, l[i.hR.DEPTH_COMPONENT] = e.DEPTH_COMPONENT32F, l);
                    t[i.QE.HALF_FLOAT] = ((d = {})[i.hR.RGBA] = e.RGBA16F, d[i.hR.RGB] = e.RGB16F, d[i.hR.RG] = e.RG16F, d[i.hR.RED] = e.R16F, d);
                    t[i.QE.UNSIGNED_SHORT_5_6_5] = ((c = {})[i.hR.RGB] = e.RGB565, c);
                    t[i.QE.UNSIGNED_SHORT_4_4_4_4] = ((u = {})[i.hR.RGBA] = e.RGBA4, u);
                    t[i.QE.UNSIGNED_SHORT_5_5_5_1] = ((p = {})[i.hR.RGBA] = e.RGB5_A1, p);
                    t[i.QE.UNSIGNED_INT_2_10_10_10_REV] = ((m = {})[i.hR.RGBA] = e.RGB10_A2, m[i.hR.RGBA_INTEGER] = e.RGB10_A2UI, m);
                    t[i.QE.UNSIGNED_INT_10F_11F_11F_REV] = ((f = {})[i.hR.RGB] = e.R11F_G11F_B10F, f);
                    t[i.QE.UNSIGNED_INT_5_9_9_9_REV] = ((_ = {})[i.hR.RGB] = e.RGB9_E5, _);
                    t[i.QE.UNSIGNED_INT_24_8] = ((v = {})[i.hR.DEPTH_STENCIL] = e.DEPTH24_STENCIL8, v);
                    t[i.QE.FLOAT_32_UNSIGNED_INT_24_8_REV] = ((y = {})[i.hR.DEPTH_STENCIL] = e.DEPTH32F_STENCIL8, y);
                    A = t;
                  } else {
                    (g = {})[i.QE.UNSIGNED_BYTE] = ((w = {})[i.hR.RGBA] = e.RGBA, w[i.hR.RGB] = e.RGB, w[i.hR.ALPHA] = e.ALPHA, w[i.hR.LUMINANCE] = e.LUMINANCE, w[i.hR.LUMINANCE_ALPHA] = e.LUMINANCE_ALPHA, w);
                    g[i.QE.UNSIGNED_SHORT_5_6_5] = ((x = {})[i.hR.RGB] = e.RGB, x);
                    g[i.QE.UNSIGNED_SHORT_4_4_4_4] = ((b = {})[i.hR.RGBA] = e.RGBA, b);
                    g[i.QE.UNSIGNED_SHORT_5_5_5_1] = ((T = {})[i.hR.RGBA] = e.RGBA, T);
                    A = g;
                  }
                  return A;
                }(e);
                var t = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS);
                this.boundTextures.length = t;
                for (var n = 0; n < t; n++) {
                  this.boundTextures[n] = null;
                }
                this.emptyTextures = {};
                var r = new dt(e.createTexture());
                e.bindTexture(e.TEXTURE_2D, r.texture);
                e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, new Uint8Array(4));
                this.emptyTextures[e.TEXTURE_2D] = r;
                this.emptyTextures[e.TEXTURE_CUBE_MAP] = new dt(e.createTexture());
                e.bindTexture(e.TEXTURE_CUBE_MAP, this.emptyTextures[e.TEXTURE_CUBE_MAP].texture);
                n = 0;
                for (; n < 6; n++) {
                  e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + n, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, null);
                }
                e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_MAG_FILTER, e.LINEAR);
                e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_MIN_FILTER, e.LINEAR);
                n = 0;
                for (; n < this.boundTextures.length; n++) {
                  this.bind(null, n);
                }
              };
              e.prototype.bind = function (e, t = 0) {
                var n = this.gl;
                if ((e = e == null ? undefined : e.castToBaseTexture()) && e.valid && !e.parentTextureArray) {
                  e.touched = this.renderer.textureGC.count;
                  var r = e._glTextures[this.CONTEXT_UID] || this.initTexture(e);
                  if (this.boundTextures[t] !== e) {
                    if (this.currentLocation !== t) {
                      this.currentLocation = t;
                      n.activeTexture(n.TEXTURE0 + t);
                    }
                    n.bindTexture(e.target, r.texture);
                  }
                  if (r.dirtyId !== e.dirtyId) {
                    if (this.currentLocation !== t) {
                      this.currentLocation = t;
                      n.activeTexture(n.TEXTURE0 + t);
                    }
                    this.updateTexture(e);
                  } else if (r.dirtyStyleId !== e.dirtyStyleId) {
                    this.updateTextureStyle(e);
                  }
                  this.boundTextures[t] = e;
                } else {
                  if (this.currentLocation !== t) {
                    this.currentLocation = t;
                    n.activeTexture(n.TEXTURE0 + t);
                  }
                  n.bindTexture(n.TEXTURE_2D, this.emptyTextures[n.TEXTURE_2D].texture);
                  this.boundTextures[t] = null;
                }
              };
              e.prototype.reset = function () {
                this._unknownBoundTextures = true;
                this.hasIntegerTextures = false;
                this.currentLocation = -1;
                for (var e = 0; e < this.boundTextures.length; e++) {
                  this.boundTextures[e] = this.unknownTexture;
                }
              };
              e.prototype.unbind = function (e) {
                var t = this.gl;
                var n = this.boundTextures;
                if (this._unknownBoundTextures) {
                  this._unknownBoundTextures = false;
                  for (var r = 0; r < n.length; r++) {
                    if (n[r] === this.unknownTexture) {
                      this.bind(null, r);
                    }
                  }
                }
                for (r = 0; r < n.length; r++) {
                  if (n[r] === e) {
                    if (this.currentLocation !== r) {
                      t.activeTexture(t.TEXTURE0 + r);
                      this.currentLocation = r;
                    }
                    t.bindTexture(e.target, this.emptyTextures[e.target].texture);
                    n[r] = null;
                  }
                }
              };
              e.prototype.ensureSamplerType = function (e) {
                var t = this;
                var n = t.boundTextures;
                var r = t.hasIntegerTextures;
                var s = t.CONTEXT_UID;
                if (r) {
                  for (var a = e - 1; a >= 0; --a) {
                    var o = n[a];
                    if (o && o._glTextures[s].samplerType !== i.XZ.FLOAT) {
                      this.renderer.texture.unbind(o);
                    }
                  }
                }
              };
              e.prototype.initTexture = function (e) {
                var t = new dt(this.gl.createTexture());
                t.dirtyId = -1;
                e._glTextures[this.CONTEXT_UID] = t;
                this.managedTextures.push(e);
                e.on("dispose", this.destroyTexture, this);
                return t;
              };
              e.prototype.initTextureType = function (e, t) {
                t.internalFormat = this.internalFormats[e.type]?.[e.format] ?? e.format;
                if (this.webGLVersion === 2 && e.type === i.QE.HALF_FLOAT) {
                  t.type = this.gl.HALF_FLOAT;
                } else {
                  t.type = e.type;
                }
              };
              e.prototype.updateTexture = function (e) {
                var t = e._glTextures[this.CONTEXT_UID];
                if (t) {
                  var n = this.renderer;
                  this.initTextureType(e, t);
                  if (e.resource && e.resource.upload(n, e, t)) {
                    if (t.samplerType !== i.XZ.FLOAT) {
                      this.hasIntegerTextures = true;
                    }
                  } else {
                    var r = e.realWidth;
                    var s = e.realHeight;
                    var a = n.gl;
                    if (t.width !== r || t.height !== s || t.dirtyId < 0) {
                      t.width = r;
                      t.height = s;
                      a.texImage2D(e.target, 0, t.internalFormat, r, s, 0, e.format, t.type, null);
                    }
                  }
                  if (e.dirtyStyleId !== t.dirtyStyleId) {
                    this.updateTextureStyle(e);
                  }
                  t.dirtyId = e.dirtyId;
                }
              };
              e.prototype.destroyTexture = function (e, t) {
                var n = this.gl;
                if ((e = e.castToBaseTexture())._glTextures[this.CONTEXT_UID] && (this.unbind(e), n.deleteTexture(e._glTextures[this.CONTEXT_UID].texture), e.off("dispose", this.destroyTexture, this), delete e._glTextures[this.CONTEXT_UID], !t)) {
                  var r = this.managedTextures.indexOf(e);
                  if (r !== -1) {
                    (0, s.removeItems)(this.managedTextures, r, 1);
                  }
                }
              };
              e.prototype.updateTextureStyle = function (e) {
                var t = e._glTextures[this.CONTEXT_UID];
                if (t) {
                  if (e.mipmap !== i.E8.POW2 && this.webGLVersion === 2 || e.isPowerOfTwo) {
                    t.mipmap = e.mipmap >= 1;
                  } else {
                    t.mipmap = false;
                  }
                  if (this.webGLVersion === 2 || e.isPowerOfTwo) {
                    t.wrapMode = e.wrapMode;
                  } else {
                    t.wrapMode = i.uR.CLAMP;
                  }
                  if (!e.resource || !e.resource.style(this.renderer, e, t)) {
                    this.setStyle(e, t);
                  }
                  t.dirtyStyleId = e.dirtyStyleId;
                }
              };
              e.prototype.setStyle = function (e, t) {
                var n = this.gl;
                if (t.mipmap && e.mipmap !== i.E8.ON_MANUAL) {
                  n.generateMipmap(e.target);
                }
                n.texParameteri(e.target, n.TEXTURE_WRAP_S, t.wrapMode);
                n.texParameteri(e.target, n.TEXTURE_WRAP_T, t.wrapMode);
                if (t.mipmap) {
                  n.texParameteri(e.target, n.TEXTURE_MIN_FILTER, e.scaleMode === i.M6.LINEAR ? n.LINEAR_MIPMAP_LINEAR : n.NEAREST_MIPMAP_NEAREST);
                  var r = this.renderer.context.extensions.anisotropicFiltering;
                  if (r && e.anisotropicLevel > 0 && e.scaleMode === i.M6.LINEAR) {
                    var s = Math.min(e.anisotropicLevel, n.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT));
                    n.texParameterf(e.target, r.TEXTURE_MAX_ANISOTROPY_EXT, s);
                  }
                } else {
                  n.texParameteri(e.target, n.TEXTURE_MIN_FILTER, e.scaleMode === i.M6.LINEAR ? n.LINEAR : n.NEAREST);
                }
                n.texParameteri(e.target, n.TEXTURE_MAG_FILTER, e.scaleMode === i.M6.LINEAR ? n.LINEAR : n.NEAREST);
              };
              e.prototype.destroy = function () {
                this.renderer = null;
              };
              return e;
            }();
            var ut = {
              __proto__: null,
              FilterSystem: Q,
              BatchSystem: te,
              ContextSystem: re,
              FramebufferSystem: ae,
              GeometrySystem: he,
              MaskSystem: Ge,
              ScissorSystem: ze,
              StencilSystem: We,
              ProjectionSystem: Xe,
              RenderTextureSystem: Je,
              ShaderSystem: ot,
              StateSystem: ht,
              TextureGCSystem: lt,
              TextureSystem: ct
            };
            var pt = new l.uq();
            var mt = function (e) {
              function t(t = i.h3.UNKNOWN, n) {
                var a = e.call(this) || this;
                n = Object.assign({}, r.W0.RENDER_OPTIONS, n);
                a.options = n;
                a.type = t;
                a.screen = new l.M_(0, 0, n.width, n.height);
                a.view = n.view || r.W0.ADAPTER.createCanvas();
                a.resolution = n.resolution || r.W0.RESOLUTION;
                a.useContextAlpha = n.useContextAlpha;
                a.autoDensity = !!n.autoDensity;
                a.preserveDrawingBuffer = n.preserveDrawingBuffer;
                a.clearBeforeRender = n.clearBeforeRender;
                a._backgroundColor = 0;
                a._backgroundColorRgba = [0, 0, 0, 1];
                a._backgroundColorString = "#000000";
                a.backgroundColor = n.backgroundColor || a._backgroundColor;
                a.backgroundAlpha = n.backgroundAlpha;
                if (n.transparent !== undefined) {
                  (0, s.deprecation)("6.0.0", "Option transparent is deprecated, please use backgroundAlpha instead.");
                  a.useContextAlpha = n.transparent;
                  a.backgroundAlpha = n.transparent ? 0 : 1;
                }
                a._lastObjectRendered = null;
                a.plugins = {};
                return a;
              }
              p(t, e);
              t.prototype.initPlugins = function (e) {
                for (var t in e) {
                  this.plugins[t] = new e[t](this);
                }
              };
              Object.defineProperty(t.prototype, "width", {
                get: function () {
                  return this.view.width;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "height", {
                get: function () {
                  return this.view.height;
                },
                enumerable: false,
                configurable: true
              });
              t.prototype.resize = function (e, t) {
                this.view.width = Math.round(e * this.resolution);
                this.view.height = Math.round(t * this.resolution);
                var n = this.view.width / this.resolution;
                var r = this.view.height / this.resolution;
                this.screen.width = n;
                this.screen.height = r;
                if (this.autoDensity) {
                  this.view.style.width = n + "px";
                  this.view.style.height = r + "px";
                }
                this.emit("resize", n, r);
              };
              t.prototype.generateTexture = function (e, t = {}, n, r) {
                if (typeof t == "number") {
                  (0, s.deprecation)("6.1.0", "generateTexture options (scaleMode, resolution, region) are now object options.");
                  t = {
                    scaleMode: t,
                    resolution: n,
                    region: r
                  };
                }
                var i = t.region;
                var a = function (e, t) {
                  var n = {};
                  for (var r in e) {
                    if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
                      n[r] = e[r];
                    }
                  }
                  if (e != null && typeof Object.getOwnPropertySymbols == "function") {
                    var i = 0;
                    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) {
                      if (t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i])) {
                        n[r[i]] = e[r[i]];
                      }
                    }
                  }
                  return n;
                }(t, ["region"]);
                if ((r = i || e.getLocalBounds(null, true)).width === 0) {
                  r.width = 1;
                }
                if (r.height === 0) {
                  r.height = 1;
                }
                var o = B.create(m({
                  width: r.width,
                  height: r.height
                }, a));
                pt.tx = -r.x;
                pt.ty = -r.y;
                this.render(e, {
                  renderTexture: o,
                  clear: false,
                  transform: pt,
                  skipUpdateTransform: !!e.parent
                });
                return o;
              };
              t.prototype.destroy = function (e) {
                for (var t in this.plugins) {
                  this.plugins[t].destroy();
                  this.plugins[t] = null;
                }
                if (e && this.view.parentNode) {
                  this.view.parentNode.removeChild(this.view);
                }
                var n = this;
                n.plugins = null;
                n.type = i.h3.UNKNOWN;
                n.view = null;
                n.screen = null;
                n._tempDisplayObjectParent = null;
                n.options = null;
                this._backgroundColorRgba = null;
                this._backgroundColorString = null;
                this._lastObjectRendered = null;
              };
              Object.defineProperty(t.prototype, "backgroundColor", {
                get: function () {
                  return this._backgroundColor;
                },
                set: function (e) {
                  this._backgroundColor = e;
                  this._backgroundColorString = (0, s.hex2string)(e);
                  (0, s.hex2rgb)(e, this._backgroundColorRgba);
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "backgroundAlpha", {
                get: function () {
                  return this._backgroundColorRgba[3];
                },
                set: function (e) {
                  this._backgroundColorRgba[3] = e;
                },
                enumerable: false,
                configurable: true
              });
              return t;
            }(s.EventEmitter);
            function ft(e) {
              this.buffer = e || null;
              this.updateID = -1;
              this.byteLength = -1;
              this.refCount = 0;
            }
            var _t = function () {
              function e(e) {
                this.renderer = e;
                this.managedBuffers = {};
                this.boundBufferBases = {};
              }
              e.prototype.destroy = function () {
                this.renderer = null;
              };
              e.prototype.contextChange = function () {
                this.disposeAll(true);
                this.gl = this.renderer.gl;
                this.CONTEXT_UID = this.renderer.CONTEXT_UID;
              };
              e.prototype.bind = function (e) {
                var t = this.gl;
                var n = this.CONTEXT_UID;
                var r = e._glBuffers[n] || this.createGLBuffer(e);
                t.bindBuffer(e.type, r.buffer);
              };
              e.prototype.bindBufferBase = function (e, t) {
                var n = this.gl;
                var r = this.CONTEXT_UID;
                if (this.boundBufferBases[t] !== e) {
                  var i = e._glBuffers[r] || this.createGLBuffer(e);
                  this.boundBufferBases[t] = e;
                  n.bindBufferBase(n.UNIFORM_BUFFER, t, i.buffer);
                }
              };
              e.prototype.bindBufferRange = function (e, t, n) {
                var r = this.gl;
                var i = this.CONTEXT_UID;
                n = n || 0;
                var s = e._glBuffers[i] || this.createGLBuffer(e);
                r.bindBufferRange(r.UNIFORM_BUFFER, t || 0, s.buffer, n * 256, 256);
              };
              e.prototype.update = function (e) {
                var t = this.gl;
                var n = this.CONTEXT_UID;
                var r = e._glBuffers[n];
                if (e._updateID !== r.updateID) {
                  r.updateID = e._updateID;
                  t.bindBuffer(e.type, r.buffer);
                  if (r.byteLength >= e.data.byteLength) {
                    t.bufferSubData(e.type, 0, e.data);
                  } else {
                    var i = e.static ? t.STATIC_DRAW : t.DYNAMIC_DRAW;
                    r.byteLength = e.data.byteLength;
                    t.bufferData(e.type, e.data, i);
                  }
                }
              };
              e.prototype.dispose = function (e, t) {
                if (this.managedBuffers[e.id]) {
                  delete this.managedBuffers[e.id];
                  var n = e._glBuffers[this.CONTEXT_UID];
                  var r = this.gl;
                  e.disposeRunner.remove(this);
                  if (n) {
                    if (!t) {
                      r.deleteBuffer(n.buffer);
                    }
                    delete e._glBuffers[this.CONTEXT_UID];
                  }
                }
              };
              e.prototype.disposeAll = function (e) {
                for (var t = Object.keys(this.managedBuffers), n = 0; n < t.length; n++) {
                  this.dispose(this.managedBuffers[t[n]], e);
                }
              };
              e.prototype.createGLBuffer = function (e) {
                var t = this.CONTEXT_UID;
                var n = this.gl;
                e._glBuffers[t] = new ft(n.createBuffer());
                this.managedBuffers[e.id] = e;
                e.disposeRunner.add(this);
                return e._glBuffers[t];
              };
              return e;
            }();
            var vt = function (e) {
              function t(n) {
                var r = e.call(this, i.h3.WEBGL, n) || this;
                n = r.options;
                r.gl = null;
                r.CONTEXT_UID = 0;
                r.runners = {
                  destroy: new o.b("destroy"),
                  contextChange: new o.b("contextChange"),
                  reset: new o.b("reset"),
                  update: new o.b("update"),
                  postrender: new o.b("postrender"),
                  prerender: new o.b("prerender"),
                  resize: new o.b("resize")
                };
                r.runners.contextChange.add(r);
                r.globalUniforms = new J({
                  projectionMatrix: new l.uq()
                }, true);
                r.addSystem(Ge, "mask").addSystem(re, "context").addSystem(ht, "state").addSystem(ot, "shader").addSystem(ct, "texture").addSystem(_t, "buffer").addSystem(he, "geometry").addSystem(ae, "framebuffer").addSystem(ze, "scissor").addSystem(We, "stencil").addSystem(Xe, "projection").addSystem(lt, "textureGC").addSystem(Q, "filter").addSystem(Je, "renderTexture").addSystem(te, "batch");
                r.initPlugins(t.__plugins);
                r.multisample = undefined;
                if (n.context) {
                  r.context.initFromContext(n.context);
                } else {
                  r.context.initFromOptions({
                    alpha: !!r.useContextAlpha,
                    antialias: n.antialias,
                    premultipliedAlpha: r.useContextAlpha && r.useContextAlpha !== "notMultiplied",
                    stencil: true,
                    preserveDrawingBuffer: n.preserveDrawingBuffer,
                    powerPreference: r.options.powerPreference
                  });
                }
                r.renderingToScreen = true;
                (0, s.sayHello)(r.context.webGLVersion === 2 ? "WebGL 2" : "WebGL 1");
                r.resize(r.options.width, r.options.height);
                return r;
              }
              p(t, e);
              t.create = function (e) {
                if ((0, s.isWebGLSupported)()) {
                  return new t(e);
                }
                throw new Error("WebGL unsupported in this browser, use \"pixi.js-legacy\" for fallback canvas2d support.");
              };
              t.prototype.contextChange = function () {
                var e;
                var t = this.gl;
                if (this.context.webGLVersion === 1) {
                  var n = t.getParameter(t.FRAMEBUFFER_BINDING);
                  t.bindFramebuffer(t.FRAMEBUFFER, null);
                  e = t.getParameter(t.SAMPLES);
                  t.bindFramebuffer(t.FRAMEBUFFER, n);
                } else {
                  n = t.getParameter(t.DRAW_FRAMEBUFFER_BINDING);
                  t.bindFramebuffer(t.DRAW_FRAMEBUFFER, null);
                  e = t.getParameter(t.SAMPLES);
                  t.bindFramebuffer(t.DRAW_FRAMEBUFFER, n);
                }
                if (e >= i.he.HIGH) {
                  this.multisample = i.he.HIGH;
                } else if (e >= i.he.MEDIUM) {
                  this.multisample = i.he.MEDIUM;
                } else if (e >= i.he.LOW) {
                  this.multisample = i.he.LOW;
                } else {
                  this.multisample = i.he.NONE;
                }
              };
              t.prototype.addSystem = function (e, t) {
                var n = new e(this);
                if (this[t]) {
                  throw new Error("Whoops! The name \"" + t + "\" is already in use");
                }
                this[t] = n;
                for (var r in this.runners) {
                  this.runners[r].add(n);
                }
                return this;
              };
              t.prototype.render = function (e, t) {
                var n;
                var r;
                var i;
                var a;
                if (t) {
                  if (t instanceof B) {
                    (0, s.deprecation)("6.0.0", "Renderer#render arguments changed, use options instead.");
                    n = t;
                    r = arguments[2];
                    i = arguments[3];
                    a = arguments[4];
                  } else {
                    n = t.renderTexture;
                    r = t.clear;
                    i = t.transform;
                    a = t.skipUpdateTransform;
                  }
                }
                this.renderingToScreen = !n;
                this.runners.prerender.emit();
                this.emit("prerender");
                this.projection.transform = i;
                if (!this.context.isLost) {
                  if (!n) {
                    this._lastObjectRendered = e;
                  }
                  if (!a) {
                    var o = e.enableTempParent();
                    e.updateTransform();
                    e.disableTempParent(o);
                  }
                  this.renderTexture.bind(n);
                  this.batch.currentRenderer.start();
                  if (r !== undefined ? r : this.clearBeforeRender) {
                    this.renderTexture.clear();
                  }
                  e.render(this);
                  this.batch.currentRenderer.flush();
                  if (n) {
                    n.baseTexture.update();
                  }
                  this.runners.postrender.emit();
                  this.projection.transform = null;
                  this.emit("postrender");
                }
              };
              t.prototype.generateTexture = function (t, n = {}, r, i) {
                var s = e.prototype.generateTexture.call(this, t, n, r, i);
                this.framebuffer.blit();
                return s;
              };
              t.prototype.resize = function (t, n) {
                e.prototype.resize.call(this, t, n);
                this.runners.resize.emit(this.screen.height, this.screen.width);
              };
              t.prototype.reset = function () {
                this.runners.reset.emit();
                return this;
              };
              t.prototype.clear = function () {
                this.renderTexture.bind();
                this.renderTexture.clear();
              };
              t.prototype.destroy = function (t) {
                this.runners.destroy.emit();
                for (var n in this.runners) {
                  this.runners[n].destroy();
                }
                e.prototype.destroy.call(this, t);
                this.gl = null;
              };
              Object.defineProperty(t.prototype, "extract", {
                get: function () {
                  (0, s.deprecation)("6.0.0", "Renderer#extract has been deprecated, please use Renderer#plugins.extract instead.");
                  return this.plugins.extract;
                },
                enumerable: false,
                configurable: true
              });
              t.registerPlugin = function (e, t) {
                (0, s.deprecation)("6.5.0", "Renderer.registerPlugin() has been deprecated, please use extensions.add() instead.");
                a.X.add({
                  name: e,
                  type: a.A.RendererPlugin,
                  ref: t
                });
              };
              t.__plugins = {};
              return t;
            }(mt);
            function yt(e) {
              return vt.create(e);
            }
            a.X.handleByMap(a.A.RendererPlugin, vt.__plugins);
            var gt = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}";
            var wt = "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n";
            var xt = function () {
              function e(e) {
                (0, s.deprecation)("6.1.0", "System class is deprecated, implemement ISystem interface instead.");
                this.renderer = e;
              }
              e.prototype.destroy = function () {
                this.renderer = null;
              };
              return e;
            }();
            function bt() {
              this.texArray = null;
              this.blend = 0;
              this.type = i._4.TRIANGLES;
              this.start = 0;
              this.size = 0;
              this.data = null;
            }
            var Tt = function () {
              function e() {
                this.elements = [];
                this.ids = [];
                this.count = 0;
              }
              e.prototype.clear = function () {
                for (var e = 0; e < this.count; e++) {
                  this.elements[e] = null;
                }
                this.count = 0;
              };
              return e;
            }();
            var At = function () {
              function e(e) {
                if (typeof e == "number") {
                  this.rawBinaryData = new ArrayBuffer(e);
                } else if (e instanceof Uint8Array) {
                  this.rawBinaryData = e.buffer;
                } else {
                  this.rawBinaryData = e;
                }
                this.uint32View = new Uint32Array(this.rawBinaryData);
                this.float32View = new Float32Array(this.rawBinaryData);
              }
              Object.defineProperty(e.prototype, "int8View", {
                get: function () {
                  this._int8View ||= new Int8Array(this.rawBinaryData);
                  return this._int8View;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "uint8View", {
                get: function () {
                  this._uint8View ||= new Uint8Array(this.rawBinaryData);
                  return this._uint8View;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "int16View", {
                get: function () {
                  this._int16View ||= new Int16Array(this.rawBinaryData);
                  return this._int16View;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "uint16View", {
                get: function () {
                  this._uint16View ||= new Uint16Array(this.rawBinaryData);
                  return this._uint16View;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "int32View", {
                get: function () {
                  this._int32View ||= new Int32Array(this.rawBinaryData);
                  return this._int32View;
                },
                enumerable: false,
                configurable: true
              });
              e.prototype.view = function (e) {
                return this[e + "View"];
              };
              e.prototype.destroy = function () {
                this.rawBinaryData = null;
                this._int8View = null;
                this._uint8View = null;
                this._int16View = null;
                this._uint16View = null;
                this._int32View = null;
                this.uint32View = null;
                this.float32View = null;
              };
              e.sizeOf = function (e) {
                switch (e) {
                  case "int8":
                  case "uint8":
                    return 1;
                  case "int16":
                  case "uint16":
                    return 2;
                  case "int32":
                  case "uint32":
                  case "float32":
                    return 4;
                  default:
                    throw new Error(e + " isn't a valid view type");
                }
              };
              return e;
            }();
            var Ct = function (e) {
              function t(t) {
                var n = e.call(this, t) || this;
                n.shaderGenerator = null;
                n.geometryClass = null;
                n.vertexSize = null;
                n.state = je.for2d();
                n.size = r.W0.SPRITE_BATCH_SIZE * 4;
                n._vertexCount = 0;
                n._indexCount = 0;
                n._bufferedElements = [];
                n._bufferedTextures = [];
                n._bufferSize = 0;
                n._shader = null;
                n._packedGeometries = [];
                n._packedGeometryPoolSize = 2;
                n._flushId = 0;
                n._aBuffers = {};
                n._iBuffers = {};
                n.MAX_TEXTURES = 1;
                n.renderer.on("prerender", n.onPrerender, n);
                t.runners.contextChange.add(n);
                n._dcIndex = 0;
                n._aIndex = 0;
                n._iIndex = 0;
                n._attributeBuffer = null;
                n._indexBuffer = null;
                n._tempBoundTextures = [];
                return n;
              }
              p(t, e);
              t.prototype.contextChange = function () {
                var e = this.renderer.gl;
                if (r.W0.PREFER_ENV === i.Km.WEBGL_LEGACY) {
                  this.MAX_TEXTURES = 1;
                } else {
                  this.MAX_TEXTURES = Math.min(e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), r.W0.SPRITE_MAX_TEXTURES);
                  this.MAX_TEXTURES = Pe(this.MAX_TEXTURES, e);
                }
                this._shader = this.shaderGenerator.generateShader(this.MAX_TEXTURES);
                for (var t = 0; t < this._packedGeometryPoolSize; t++) {
                  this._packedGeometries[t] = new this.geometryClass();
                }
                this.initFlushBuffers();
              };
              t.prototype.initFlushBuffers = function () {
                for (var e = t._drawCallPool, n = t._textureArrayPool, r = this.size / 4, i = Math.floor(r / this.MAX_TEXTURES) + 1; e.length < r;) {
                  e.push(new bt());
                }
                while (n.length < i) {
                  n.push(new Tt());
                }
                for (var s = 0; s < this.MAX_TEXTURES; s++) {
                  this._tempBoundTextures[s] = null;
                }
              };
              t.prototype.onPrerender = function () {
                this._flushId = 0;
              };
              t.prototype.render = function (e) {
                if (e._texture.valid) {
                  if (this._vertexCount + e.vertexData.length / 2 > this.size) {
                    this.flush();
                  }
                  this._vertexCount += e.vertexData.length / 2;
                  this._indexCount += e.indices.length;
                  this._bufferedTextures[this._bufferSize] = e._texture.baseTexture;
                  this._bufferedElements[this._bufferSize++] = e;
                }
              };
              t.prototype.buildTexturesAndDrawCalls = function () {
                var e = this._bufferedTextures;
                var n = this.MAX_TEXTURES;
                var r = t._textureArrayPool;
                var i = this.renderer.batch;
                var s = this._tempBoundTextures;
                var a = this.renderer.textureGC.count;
                var o = ++y._globalBatch;
                var h = 0;
                var l = r[0];
                var d = 0;
                i.copyBoundTextures(s, n);
                for (var c = 0; c < this._bufferSize; ++c) {
                  var u = e[c];
                  e[c] = null;
                  if (u._batchEnabled !== o) {
                    if (l.count >= n) {
                      i.boundArray(l, s, o, n);
                      this.buildDrawCalls(l, d, c);
                      d = c;
                      l = r[++h];
                      ++o;
                    }
                    u._batchEnabled = o;
                    u.touched = a;
                    l.elements[l.count++] = u;
                  }
                }
                if (l.count > 0) {
                  i.boundArray(l, s, o, n);
                  this.buildDrawCalls(l, d, this._bufferSize);
                  ++h;
                  ++o;
                }
                c = 0;
                for (; c < s.length; c++) {
                  s[c] = null;
                }
                y._globalBatch = o;
              };
              t.prototype.buildDrawCalls = function (e, n, r) {
                var i = this;
                var a = i._bufferedElements;
                var o = i._attributeBuffer;
                var h = i._indexBuffer;
                var l = i.vertexSize;
                var d = t._drawCallPool;
                var c = this._dcIndex;
                var u = this._aIndex;
                var p = this._iIndex;
                var m = d[c];
                m.start = this._iIndex;
                m.texArray = e;
                for (var f = n; f < r; ++f) {
                  var _ = a[f];
                  var v = _._texture.baseTexture;
                  var y = s.premultiplyBlendMode[v.alphaMode ? 1 : 0][_.blendMode];
                  a[f] = null;
                  if (n < f && m.blend !== y) {
                    m.size = p - m.start;
                    n = f;
                    (m = d[++c]).texArray = e;
                    m.start = p;
                  }
                  this.packInterleavedGeometry(_, o, h, u, p);
                  u += _.vertexData.length / 2 * l;
                  p += _.indices.length;
                  m.blend = y;
                }
                if (n < r) {
                  m.size = p - m.start;
                  ++c;
                }
                this._dcIndex = c;
                this._aIndex = u;
                this._iIndex = p;
              };
              t.prototype.bindAndClearTexArray = function (e) {
                var t = this.renderer.texture;
                for (var n = 0; n < e.count; n++) {
                  t.bind(e.elements[n], e.ids[n]);
                  e.elements[n] = null;
                }
                e.count = 0;
              };
              t.prototype.updateGeometry = function () {
                var e = this;
                var t = e._packedGeometries;
                var n = e._attributeBuffer;
                var i = e._indexBuffer;
                if (r.W0.CAN_UPLOAD_SAME_BUFFER) {
                  t[this._flushId]._buffer.update(n.rawBinaryData);
                  t[this._flushId]._indexBuffer.update(i);
                  this.renderer.geometry.updateBuffers();
                } else {
                  if (this._packedGeometryPoolSize <= this._flushId) {
                    this._packedGeometryPoolSize++;
                    t[this._flushId] = new this.geometryClass();
                  }
                  t[this._flushId]._buffer.update(n.rawBinaryData);
                  t[this._flushId]._indexBuffer.update(i);
                  this.renderer.geometry.bind(t[this._flushId]);
                  this.renderer.geometry.updateBuffers();
                  this._flushId++;
                }
              };
              t.prototype.drawBatches = function () {
                for (var e = this._dcIndex, n = this.renderer, r = n.gl, i = n.state, s = t._drawCallPool, a = null, o = 0; o < e; o++) {
                  var h = s[o];
                  var l = h.texArray;
                  var d = h.type;
                  var c = h.size;
                  var u = h.start;
                  var p = h.blend;
                  if (a !== l) {
                    a = l;
                    this.bindAndClearTexArray(l);
                  }
                  this.state.blendMode = p;
                  i.set(this.state);
                  r.drawElements(d, c, r.UNSIGNED_SHORT, u * 2);
                }
              };
              t.prototype.flush = function () {
                if (this._vertexCount !== 0) {
                  this._attributeBuffer = this.getAttributeBuffer(this._vertexCount);
                  this._indexBuffer = this.getIndexBuffer(this._indexCount);
                  this._aIndex = 0;
                  this._iIndex = 0;
                  this._dcIndex = 0;
                  this.buildTexturesAndDrawCalls();
                  this.updateGeometry();
                  this.drawBatches();
                  this._bufferSize = 0;
                  this._vertexCount = 0;
                  this._indexCount = 0;
                }
              };
              t.prototype.start = function () {
                this.renderer.state.set(this.state);
                this.renderer.texture.ensureSamplerType(this.MAX_TEXTURES);
                this.renderer.shader.bind(this._shader);
                if (r.W0.CAN_UPLOAD_SAME_BUFFER) {
                  this.renderer.geometry.bind(this._packedGeometries[this._flushId]);
                }
              };
              t.prototype.stop = function () {
                this.flush();
              };
              t.prototype.destroy = function () {
                for (var t = 0; t < this._packedGeometryPoolSize; t++) {
                  if (this._packedGeometries[t]) {
                    this._packedGeometries[t].destroy();
                  }
                }
                this.renderer.off("prerender", this.onPrerender, this);
                this._aBuffers = null;
                this._iBuffers = null;
                this._packedGeometries = null;
                this._attributeBuffer = null;
                this._indexBuffer = null;
                if (this._shader) {
                  this._shader.destroy();
                  this._shader = null;
                }
                e.prototype.destroy.call(this);
              };
              t.prototype.getAttributeBuffer = function (e) {
                var t = (0, s.nextPow2)(Math.ceil(e / 8));
                var n = (0, s.log2)(t);
                var r = t * 8;
                if (this._aBuffers.length <= n) {
                  this._iBuffers.length = n + 1;
                }
                var i = this._aBuffers[r];
                if (!i) {
                  this._aBuffers[r] = i = new At(r * this.vertexSize * 4);
                }
                return i;
              };
              t.prototype.getIndexBuffer = function (e) {
                var t = (0, s.nextPow2)(Math.ceil(e / 12));
                var n = (0, s.log2)(t);
                var r = t * 12;
                if (this._iBuffers.length <= n) {
                  this._iBuffers.length = n + 1;
                }
                var i = this._iBuffers[n];
                if (!i) {
                  this._iBuffers[n] = i = new Uint16Array(r);
                }
                return i;
              };
              t.prototype.packInterleavedGeometry = function (e, t, n, r, i) {
                var a = t.uint32View;
                var o = t.float32View;
                var h = r / this.vertexSize;
                var l = e.uvs;
                var d = e.indices;
                for (var c = e.vertexData, u = e._texture.baseTexture._batchLocation, p = Math.min(e.worldAlpha, 1), m = p < 1 && e._texture.baseTexture.alphaMode ? (0, s.premultiplyTint)(e._tintRGB, p) : e._tintRGB + (p * 255 << 24), f = 0; f < c.length; f += 2) {
                  o[r++] = c[f];
                  o[r++] = c[f + 1];
                  o[r++] = l[f];
                  o[r++] = l[f + 1];
                  a[r++] = m;
                  o[r++] = u;
                }
                for (f = 0; f < d.length; f++) {
                  n[i++] = h + d[f];
                }
              };
              t._drawCallPool = [];
              t._textureArrayPool = [];
              return t;
            }(ee);
            var St = function () {
              function e(e, t) {
                this.vertexSrc = e;
                this.fragTemplate = t;
                this.programCache = {};
                this.defaultGroupCache = {};
                if (t.indexOf("%count%") < 0) {
                  throw new Error("Fragment template must contain \"%count%\".");
                }
                if (t.indexOf("%forloop%") < 0) {
                  throw new Error("Fragment template must contain \"%forloop%\".");
                }
              }
              e.prototype.generateShader = function (e) {
                if (!this.programCache[e]) {
                  var t = new Int32Array(e);
                  for (var n = 0; n < e; n++) {
                    t[n] = n;
                  }
                  this.defaultGroupCache[e] = J.from({
                    uSamplers: t
                  }, true);
                  var r = this.fragTemplate;
                  r = (r = r.replace(/%count%/gi, "" + e)).replace(/%forloop%/gi, this.generateSampleSrc(e));
                  this.programCache[e] = new Ie(this.vertexSrc, r);
                }
                var i = {
                  tint: new Float32Array([1, 1, 1, 1]),
                  translationMatrix: new l.uq(),
                  default: this.defaultGroupCache[e]
                };
                return new Le(this.programCache[e], i);
              };
              e.prototype.generateSampleSrc = function (e) {
                var t = "";
                t += "\n";
                t += "\n";
                for (var n = 0; n < e; n++) {
                  if (n > 0) {
                    t += "\nelse ";
                  }
                  if (n < e - 1) {
                    t += "if(vTextureId < " + n + ".5)";
                  }
                  t += "\n{";
                  t += "\n\tcolor = texture2D(uSamplers[" + n + "], vTextureCoord);";
                  t += "\n}";
                }
                return (t += "\n") + "\n";
              };
              return e;
            }();
            var Et = function (e) {
              function t(t = false) {
                var n = e.call(this) || this;
                n._buffer = new G(null, t, false);
                n._indexBuffer = new G(null, t, true);
                n.addAttribute("aVertexPosition", n._buffer, 2, false, i.QE.FLOAT).addAttribute("aTextureCoord", n._buffer, 2, false, i.QE.FLOAT).addAttribute("aColor", n._buffer, 4, true, i.QE.UNSIGNED_BYTE).addAttribute("aTextureId", n._buffer, 1, true, i.QE.FLOAT).addIndex(n._indexBuffer);
                return n;
              }
              p(t, e);
              return t;
            }(W);
            var Ot = "precision highp float;\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform vec4 tint;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vTextureId = aTextureId;\n    vColor = aColor * tint;\n}\n";
            var kt = "varying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\nuniform sampler2D uSamplers[%count%];\n\nvoid main(void){\n    vec4 color;\n    %forloop%\n    gl_FragColor = color * vColor;\n}\n";
            var Pt = function () {
              function e() {}
              e.create = function (e) {
                var t = Object.assign({
                  vertex: Ot,
                  fragment: kt,
                  geometryClass: Et,
                  vertexSize: 6
                }, e);
                var n = t.vertex;
                var r = t.fragment;
                var i = t.vertexSize;
                var s = t.geometryClass;
                return function (e) {
                  function t(t) {
                    var a = e.call(this, t) || this;
                    a.shaderGenerator = new St(n, r);
                    a.geometryClass = s;
                    a.vertexSize = i;
                    return a;
                  }
                  p(t, e);
                  return t;
                }(Ct);
              };
              Object.defineProperty(e, "defaultVertexSrc", {
                get: function () {
                  return Ot;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e, "defaultFragmentTemplate", {
                get: function () {
                  return kt;
                },
                enumerable: false,
                configurable: true
              });
              return e;
            }();
            var Mt = Pt.create();
            Object.assign(Mt, {
              extension: {
                name: "batch",
                type: a.A.RendererPlugin
              }
            });
            var Rt = {};
            function It(e) {
              Object.defineProperty(Rt, e, {
                get: function () {
                  (0, s.deprecation)("6.0.0", "PIXI.systems." + e + " has moved to PIXI." + e);
                  return O[e];
                }
              });
            }
            for (var Lt in O) {
              It(Lt);
            }
            var jt = {};
            function Bt(e) {
              Object.defineProperty(jt, e, {
                get: function () {
                  (0, s.deprecation)("6.0.0", "PIXI.resources." + e + " has moved to PIXI." + e);
                  return ut[e];
                }
              });
            }
            for (var Lt in ut) {
              Bt(Lt);
            }
            var Dt = "6.5.10";
          }
    });
})();
