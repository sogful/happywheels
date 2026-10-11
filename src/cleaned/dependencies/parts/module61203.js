(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        61203(e, t, n) {
            "use strict";
        
            n.d(t, {
              FU: () => d,
              Jn: () => y,
              Nx: () => i,
              TV: () => I,
              VM: () => P,
              V_: () => M,
              XD: () => S,
              YR: () => g,
              i1: () => k,
              sw: () => v,
              wM: () => O,
              x6: () => L
            });
            var r;
            var i;
            var s = n(97831);
            var a = n(1235);
            var o = n(88604);
            var h = n(55323);
            var l = n(11313);
            (function (e) {
              e[e.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT";
              e[e.COMPRESSED_RGBA_S3TC_DXT1_EXT = 33777] = "COMPRESSED_RGBA_S3TC_DXT1_EXT";
              e[e.COMPRESSED_RGBA_S3TC_DXT3_EXT = 33778] = "COMPRESSED_RGBA_S3TC_DXT3_EXT";
              e[e.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT";
              e[e.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT";
              e[e.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT";
              e[e.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT";
              e[e.COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916] = "COMPRESSED_SRGB_S3TC_DXT1_EXT";
              e[e.COMPRESSED_R11_EAC = 37488] = "COMPRESSED_R11_EAC";
              e[e.COMPRESSED_SIGNED_R11_EAC = 37489] = "COMPRESSED_SIGNED_R11_EAC";
              e[e.COMPRESSED_RG11_EAC = 37490] = "COMPRESSED_RG11_EAC";
              e[e.COMPRESSED_SIGNED_RG11_EAC = 37491] = "COMPRESSED_SIGNED_RG11_EAC";
              e[e.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2";
              e[e.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC";
              e[e.COMPRESSED_SRGB8_ETC2 = 37493] = "COMPRESSED_SRGB8_ETC2";
              e[e.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497] = "COMPRESSED_SRGB8_ALPHA8_ETC2_EAC";
              e[e.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494] = "COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2";
              e[e.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495] = "COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2";
              e[e.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG";
              e[e.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG";
              e[e.COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 35841] = "COMPRESSED_RGB_PVRTC_2BPPV1_IMG";
              e[e.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 35843] = "COMPRESSED_RGBA_PVRTC_2BPPV1_IMG";
              e[e.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL";
              e[e.COMPRESSED_RGB_ATC_WEBGL = 35986] = "COMPRESSED_RGB_ATC_WEBGL";
              e[e.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL = 35986] = "COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL";
              e[e.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL = 34798] = "COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL";
              e[e.COMPRESSED_RGBA_ASTC_4x4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4x4_KHR";
            })(i ||= {});
            (r = {})[i.COMPRESSED_RGB_S3TC_DXT1_EXT] = 0.5;
            r[i.COMPRESSED_RGBA_S3TC_DXT1_EXT] = 0.5;
            r[i.COMPRESSED_RGBA_S3TC_DXT3_EXT] = 1;
            r[i.COMPRESSED_RGBA_S3TC_DXT5_EXT] = 1;
            r[i.COMPRESSED_SRGB_S3TC_DXT1_EXT] = 0.5;
            r[i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT] = 0.5;
            r[i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT] = 1;
            r[i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT] = 1;
            r[i.COMPRESSED_R11_EAC] = 0.5;
            r[i.COMPRESSED_SIGNED_R11_EAC] = 0.5;
            r[i.COMPRESSED_RG11_EAC] = 1;
            r[i.COMPRESSED_SIGNED_RG11_EAC] = 1;
            r[i.COMPRESSED_RGB8_ETC2] = 0.5;
            r[i.COMPRESSED_RGBA8_ETC2_EAC] = 1;
            r[i.COMPRESSED_SRGB8_ETC2] = 0.5;
            r[i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC] = 1;
            r[i.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2] = 0.5;
            r[i.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2] = 0.5;
            r[i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG] = 0.5;
            r[i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG] = 0.5;
            r[i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG] = 0.25;
            r[i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG] = 0.25;
            r[i.COMPRESSED_RGB_ETC1_WEBGL] = 0.5;
            r[i.COMPRESSED_RGB_ATC_WEBGL] = 0.5;
            r[i.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL] = 1;
            r[i.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL] = 1;
            r[i.COMPRESSED_RGBA_ASTC_4x4_KHR] = 1;
            var d = r;
            function c(e, t) {
              c = Object.setPrototypeOf || {
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
              return c(e, t);
            }
            function u(e, t) {
              function n() {
                this.constructor = e;
              }
              c(e, t);
              e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
            }
            var p;
            var m;
            var f;
            var _;
            var v = function (e) {
              function t(t, n = {
                width: 1,
                height: 1,
                autoLoad: true
              }) {
                var r;
                var i;
                var a = this;
                if (typeof t == "string") {
                  r = t;
                  i = new Uint8Array();
                } else {
                  r = null;
                  i = t;
                }
                (a = e.call(this, i, n) || this).origin = r;
                a.buffer = i ? new s.u3(i) : null;
                if (a.origin && n.autoLoad !== false) {
                  a.load();
                }
                if (i && i.length) {
                  a.loaded = true;
                  a.onBlobLoaded(a.buffer.rawBinaryData);
                }
                return a;
              }
              u(t, e);
              t.prototype.onBlobLoaded = function (e) {};
              t.prototype.load = function () {
                e = this;
                n = function () {
                  var e;
                  return function (e, t) {
                    var n;
                    var r;
                    var i;
                    var s;
                    var a = {
                      label: 0,
                      sent: function () {
                        if (i[0] & 1) {
                          throw i[1];
                        }
                        return i[1];
                      },
                      trys: [],
                      ops: []
                    };
                    s = {
                      next: o(0),
                      throw: o(1),
                      return: o(2)
                    };
                    if (typeof Symbol == "function") {
                      s[Symbol.iterator] = function () {
                        return this;
                      };
                    }
                    return s;
                    function o(s) {
                      return function (o) {
                        return function (s) {
                          if (n) {
                            throw new TypeError("Generator is already executing.");
                          }
                          while (a) {
                            try {
                              n = 1;
                              if (r && (i = s[0] & 2 ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, s[1])).done) {
                                return i;
                              }
                              r = 0;
                              if (i) {
                                s = [s[0] & 2, i.value];
                              }
                              switch (s[0]) {
                                case 0:
                                case 1:
                                  i = s;
                                  break;
                                case 4:
                                  a.label++;
                                  return {
                                    value: s[1],
                                    done: false
                                  };
                                case 5:
                                  a.label++;
                                  r = s[1];
                                  s = [0];
                                  continue;
                                case 7:
                                  s = a.ops.pop();
                                  a.trys.pop();
                                  continue;
                                default:
                                  if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (s[0] === 6 || s[0] === 2)) {
                                    a = 0;
                                    continue;
                                  }
                                  if (s[0] === 3 && (!i || s[1] > i[0] && s[1] < i[3])) {
                                    a.label = s[1];
                                    break;
                                  }
                                  if (s[0] === 6 && a.label < i[1]) {
                                    a.label = i[1];
                                    i = s;
                                    break;
                                  }
                                  if (i && a.label < i[2]) {
                                    a.label = i[2];
                                    a.ops.push(s);
                                    break;
                                  }
                                  if (i[2]) {
                                    a.ops.pop();
                                  }
                                  a.trys.pop();
                                  continue;
                              }
                              s = t.call(e, a);
                            } catch (e) {
                              s = [6, e];
                              r = 0;
                            } finally {
                              n = i = 0;
                            }
                          }
                          if (s[0] & 5) {
                            throw s[1];
                          }
                          return {
                            value: s[0] ? s[1] : undefined,
                            done: true
                          };
                        }([s, o]);
                      };
                    }
                  }(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, fetch(this.origin)];
                      case 1:
                        return [4, t.sent().blob()];
                      case 2:
                        return [4, t.sent().arrayBuffer()];
                      case 3:
                        e = t.sent();
                        this.data = new Uint32Array(e);
                        this.buffer = new s.u3(e);
                        this.loaded = true;
                        this.onBlobLoaded(e);
                        this.update();
                        return [2, this];
                    }
                  });
                };
                return new ((t = Promise) || (t = Promise))(function (r, i) {
                  function s(e) {
                    try {
                      o(n.next(e));
                    } catch (e) {
                      i(e);
                    }
                  }
                  function a(e) {
                    try {
                      o(n.throw(e));
                    } catch (e) {
                      i(e);
                    }
                  }
                  function o(e) {
                    var n;
                    if (e.done) {
                      r(e.value);
                    } else {
                      (n = e.value, n instanceof t ? n : new t(function (e) {
                        e(n);
                      })).then(s, a);
                    }
                  }
                  o((n = n.apply(e, [])).next());
                });
                var e;
                var t;
                var n;
              };
              return t;
            }(s.dZ);
            var y = function (e) {
              function t(n, r) {
                var i = e.call(this, n, r) || this;
                i.format = r.format;
                i.levels = r.levels || 1;
                i._width = r.width;
                i._height = r.height;
                i._extension = t._formatToExtension(i.format);
                if (r.levelBuffers || i.buffer) {
                  i._levelBuffers = r.levelBuffers || t._createLevelBuffers(n instanceof Uint8Array ? n : i.buffer.uint8View, i.format, i.levels, 4, 4, i.width, i.height);
                }
                return i;
              }
              u(t, e);
              t.prototype.upload = function (e, t, n) {
                var r = e.gl;
                if (!e.context.extensions[this._extension]) {
                  throw new Error(this._extension + " textures are not supported on the current machine");
                }
                if (!this._levelBuffers) {
                  return false;
                }
                for (var i = 0, s = this.levels; i < s; i++) {
                  var a = this._levelBuffers[i];
                  var o = a.levelID;
                  var h = a.levelWidth;
                  var l = a.levelHeight;
                  var d = a.levelBuffer;
                  r.compressedTexImage2D(r.TEXTURE_2D, o, this.format, h, l, 0, d);
                }
                return true;
              };
              t.prototype.onBlobLoaded = function () {
                this._levelBuffers = t._createLevelBuffers(this.buffer.uint8View, this.format, this.levels, 4, 4, this.width, this.height);
              };
              t._formatToExtension = function (e) {
                if (e >= 33776 && e <= 33779) {
                  return "s3tc";
                }
                if (e >= 37488 && e <= 37497) {
                  return "etc";
                }
                if (e >= 35840 && e <= 35843) {
                  return "pvrtc";
                }
                if (e >= 36196) {
                  return "etc1";
                }
                if (e >= 35986 && e <= 34798) {
                  return "atc";
                }
                throw new Error("Invalid (compressed) texture format given!");
              };
              t._createLevelBuffers = function (e, t, n, r, i, s, a) {
                var o = new Array(n);
                var h = e.byteOffset;
                var l = s;
                var c = a;
                var u = l + r - 1 & ~(r - 1);
                var p = c + i - 1 & ~(i - 1);
                var m = u * p * d[t];
                for (var f = 0; f < n; f++) {
                  o[f] = {
                    levelID: f,
                    levelWidth: n > 1 ? l : u,
                    levelHeight: n > 1 ? c : p,
                    levelBuffer: new Uint8Array(e.buffer, h, m)
                  };
                  h += m;
                  m = (u = (l = l >> 1 || 1) + r - 1 & ~(r - 1)) * (p = (c = c >> 1 || 1) + i - 1 & ~(i - 1)) * d[t];
                }
                return o;
              };
              return t;
            }(v);
            var g = function () {
              function e() {}
              e.use = function (t, n) {
                var r = t.data;
                if (t.type === a.Sd.TYPE.JSON && r && r.cacheID && r.textures) {
                  var i = r.textures;
                  var s = undefined;
                  var h = undefined;
                  for (var l = 0, d = i.length; l < d; l++) {
                    var c = i[l];
                    var u = c.src;
                    var p = c.format;
                    if (!p) {
                      h = u;
                    }
                    if (e.textureFormats[p]) {
                      s = u;
                      break;
                    }
                  }
                  if (!(s = s || h)) {
                    n(new Error("Cannot load compressed-textures in " + t.url + ", make sure you provide a fallback"));
                    return;
                  }
                  if (s === t.url) {
                    n(new Error("URL of compressed texture cannot be the same as the manifest's URL"));
                    return;
                  }
                  var m = {
                    crossOrigin: t.crossOrigin,
                    metadata: t.metadata.imageMetadata,
                    parentResource: t
                  };
                  var f = o.url.resolve(t.url.replace(this.baseUrl, ""), s);
                  var _ = r.cacheID;
                  this.add(_, f, m, function (e) {
                    if (e.error) {
                      n(e.error);
                    } else {
                      var r = e.texture;
                      var i = r === undefined ? null : r;
                      var s = e.textures;
                      var a = s === undefined ? {} : s;
                      Object.assign(t, {
                        texture: i,
                        textures: a
                      });
                      n();
                    }
                  });
                } else {
                  n();
                }
              };
              Object.defineProperty(e, "textureExtensions", {
                get: function () {
                  if (!e._textureExtensions) {
                    var t = h.W0.ADAPTER.createCanvas().getContext("webgl");
                    if (!t) {
                      return {};
                    }
                    var n = {
                      s3tc: t.getExtension("WEBGL_compressed_texture_s3tc"),
                      s3tc_sRGB: t.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
                      etc: t.getExtension("WEBGL_compressed_texture_etc"),
                      etc1: t.getExtension("WEBGL_compressed_texture_etc1"),
                      pvrtc: t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
                      atc: t.getExtension("WEBGL_compressed_texture_atc"),
                      astc: t.getExtension("WEBGL_compressed_texture_astc")
                    };
                    e._textureExtensions = n;
                  }
                  return e._textureExtensions;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e, "textureFormats", {
                get: function () {
                  if (!e._textureFormats) {
                    var t = e.textureExtensions;
                    e._textureFormats = {};
                    for (var n in t) {
                      var r = t[n];
                      if (r) {
                        Object.assign(e._textureFormats, Object.getPrototypeOf(r));
                      }
                    }
                  }
                  return e._textureFormats;
                },
                enumerable: false,
                configurable: true
              });
              e.extension = s.Ag.Loader;
              return e;
            }();
            function w(e, t, n) {
              var r = {
                textures: {},
                texture: null
              };
              if (t) {
                t.map(function (e) {
                  return new s.gP(new s.t5(e, Object.assign({
                    mipmap: l.E8.OFF,
                    alphaMode: l.Gk.NO_PREMULTIPLIED_ALPHA
                  }, n)));
                }).forEach(function (t, n) {
                  var i = t.baseTexture;
                  var a = e + "-" + (n + 1);
                  s.t5.addToCache(i, a);
                  s.gP.addToCache(t, a);
                  if (n === 0) {
                    s.t5.addToCache(i, e);
                    s.gP.addToCache(t, e);
                    r.texture = t;
                  }
                  r.textures[a] = t;
                });
                return r;
              } else {
                return r;
              }
            }
            (function (e) {
              e[e.DXGI_FORMAT_UNKNOWN = 0] = "DXGI_FORMAT_UNKNOWN";
              e[e.DXGI_FORMAT_R32G32B32A32_TYPELESS = 1] = "DXGI_FORMAT_R32G32B32A32_TYPELESS";
              e[e.DXGI_FORMAT_R32G32B32A32_FLOAT = 2] = "DXGI_FORMAT_R32G32B32A32_FLOAT";
              e[e.DXGI_FORMAT_R32G32B32A32_UINT = 3] = "DXGI_FORMAT_R32G32B32A32_UINT";
              e[e.DXGI_FORMAT_R32G32B32A32_SINT = 4] = "DXGI_FORMAT_R32G32B32A32_SINT";
              e[e.DXGI_FORMAT_R32G32B32_TYPELESS = 5] = "DXGI_FORMAT_R32G32B32_TYPELESS";
              e[e.DXGI_FORMAT_R32G32B32_FLOAT = 6] = "DXGI_FORMAT_R32G32B32_FLOAT";
              e[e.DXGI_FORMAT_R32G32B32_UINT = 7] = "DXGI_FORMAT_R32G32B32_UINT";
              e[e.DXGI_FORMAT_R32G32B32_SINT = 8] = "DXGI_FORMAT_R32G32B32_SINT";
              e[e.DXGI_FORMAT_R16G16B16A16_TYPELESS = 9] = "DXGI_FORMAT_R16G16B16A16_TYPELESS";
              e[e.DXGI_FORMAT_R16G16B16A16_FLOAT = 10] = "DXGI_FORMAT_R16G16B16A16_FLOAT";
              e[e.DXGI_FORMAT_R16G16B16A16_UNORM = 11] = "DXGI_FORMAT_R16G16B16A16_UNORM";
              e[e.DXGI_FORMAT_R16G16B16A16_UINT = 12] = "DXGI_FORMAT_R16G16B16A16_UINT";
              e[e.DXGI_FORMAT_R16G16B16A16_SNORM = 13] = "DXGI_FORMAT_R16G16B16A16_SNORM";
              e[e.DXGI_FORMAT_R16G16B16A16_SINT = 14] = "DXGI_FORMAT_R16G16B16A16_SINT";
              e[e.DXGI_FORMAT_R32G32_TYPELESS = 15] = "DXGI_FORMAT_R32G32_TYPELESS";
              e[e.DXGI_FORMAT_R32G32_FLOAT = 16] = "DXGI_FORMAT_R32G32_FLOAT";
              e[e.DXGI_FORMAT_R32G32_UINT = 17] = "DXGI_FORMAT_R32G32_UINT";
              e[e.DXGI_FORMAT_R32G32_SINT = 18] = "DXGI_FORMAT_R32G32_SINT";
              e[e.DXGI_FORMAT_R32G8X24_TYPELESS = 19] = "DXGI_FORMAT_R32G8X24_TYPELESS";
              e[e.DXGI_FORMAT_D32_FLOAT_S8X24_UINT = 20] = "DXGI_FORMAT_D32_FLOAT_S8X24_UINT";
              e[e.DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS = 21] = "DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS";
              e[e.DXGI_FORMAT_X32_TYPELESS_G8X24_UINT = 22] = "DXGI_FORMAT_X32_TYPELESS_G8X24_UINT";
              e[e.DXGI_FORMAT_R10G10B10A2_TYPELESS = 23] = "DXGI_FORMAT_R10G10B10A2_TYPELESS";
              e[e.DXGI_FORMAT_R10G10B10A2_UNORM = 24] = "DXGI_FORMAT_R10G10B10A2_UNORM";
              e[e.DXGI_FORMAT_R10G10B10A2_UINT = 25] = "DXGI_FORMAT_R10G10B10A2_UINT";
              e[e.DXGI_FORMAT_R11G11B10_FLOAT = 26] = "DXGI_FORMAT_R11G11B10_FLOAT";
              e[e.DXGI_FORMAT_R8G8B8A8_TYPELESS = 27] = "DXGI_FORMAT_R8G8B8A8_TYPELESS";
              e[e.DXGI_FORMAT_R8G8B8A8_UNORM = 28] = "DXGI_FORMAT_R8G8B8A8_UNORM";
              e[e.DXGI_FORMAT_R8G8B8A8_UNORM_SRGB = 29] = "DXGI_FORMAT_R8G8B8A8_UNORM_SRGB";
              e[e.DXGI_FORMAT_R8G8B8A8_UINT = 30] = "DXGI_FORMAT_R8G8B8A8_UINT";
              e[e.DXGI_FORMAT_R8G8B8A8_SNORM = 31] = "DXGI_FORMAT_R8G8B8A8_SNORM";
              e[e.DXGI_FORMAT_R8G8B8A8_SINT = 32] = "DXGI_FORMAT_R8G8B8A8_SINT";
              e[e.DXGI_FORMAT_R16G16_TYPELESS = 33] = "DXGI_FORMAT_R16G16_TYPELESS";
              e[e.DXGI_FORMAT_R16G16_FLOAT = 34] = "DXGI_FORMAT_R16G16_FLOAT";
              e[e.DXGI_FORMAT_R16G16_UNORM = 35] = "DXGI_FORMAT_R16G16_UNORM";
              e[e.DXGI_FORMAT_R16G16_UINT = 36] = "DXGI_FORMAT_R16G16_UINT";
              e[e.DXGI_FORMAT_R16G16_SNORM = 37] = "DXGI_FORMAT_R16G16_SNORM";
              e[e.DXGI_FORMAT_R16G16_SINT = 38] = "DXGI_FORMAT_R16G16_SINT";
              e[e.DXGI_FORMAT_R32_TYPELESS = 39] = "DXGI_FORMAT_R32_TYPELESS";
              e[e.DXGI_FORMAT_D32_FLOAT = 40] = "DXGI_FORMAT_D32_FLOAT";
              e[e.DXGI_FORMAT_R32_FLOAT = 41] = "DXGI_FORMAT_R32_FLOAT";
              e[e.DXGI_FORMAT_R32_UINT = 42] = "DXGI_FORMAT_R32_UINT";
              e[e.DXGI_FORMAT_R32_SINT = 43] = "DXGI_FORMAT_R32_SINT";
              e[e.DXGI_FORMAT_R24G8_TYPELESS = 44] = "DXGI_FORMAT_R24G8_TYPELESS";
              e[e.DXGI_FORMAT_D24_UNORM_S8_UINT = 45] = "DXGI_FORMAT_D24_UNORM_S8_UINT";
              e[e.DXGI_FORMAT_R24_UNORM_X8_TYPELESS = 46] = "DXGI_FORMAT_R24_UNORM_X8_TYPELESS";
              e[e.DXGI_FORMAT_X24_TYPELESS_G8_UINT = 47] = "DXGI_FORMAT_X24_TYPELESS_G8_UINT";
              e[e.DXGI_FORMAT_R8G8_TYPELESS = 48] = "DXGI_FORMAT_R8G8_TYPELESS";
              e[e.DXGI_FORMAT_R8G8_UNORM = 49] = "DXGI_FORMAT_R8G8_UNORM";
              e[e.DXGI_FORMAT_R8G8_UINT = 50] = "DXGI_FORMAT_R8G8_UINT";
              e[e.DXGI_FORMAT_R8G8_SNORM = 51] = "DXGI_FORMAT_R8G8_SNORM";
              e[e.DXGI_FORMAT_R8G8_SINT = 52] = "DXGI_FORMAT_R8G8_SINT";
              e[e.DXGI_FORMAT_R16_TYPELESS = 53] = "DXGI_FORMAT_R16_TYPELESS";
              e[e.DXGI_FORMAT_R16_FLOAT = 54] = "DXGI_FORMAT_R16_FLOAT";
              e[e.DXGI_FORMAT_D16_UNORM = 55] = "DXGI_FORMAT_D16_UNORM";
              e[e.DXGI_FORMAT_R16_UNORM = 56] = "DXGI_FORMAT_R16_UNORM";
              e[e.DXGI_FORMAT_R16_UINT = 57] = "DXGI_FORMAT_R16_UINT";
              e[e.DXGI_FORMAT_R16_SNORM = 58] = "DXGI_FORMAT_R16_SNORM";
              e[e.DXGI_FORMAT_R16_SINT = 59] = "DXGI_FORMAT_R16_SINT";
              e[e.DXGI_FORMAT_R8_TYPELESS = 60] = "DXGI_FORMAT_R8_TYPELESS";
              e[e.DXGI_FORMAT_R8_UNORM = 61] = "DXGI_FORMAT_R8_UNORM";
              e[e.DXGI_FORMAT_R8_UINT = 62] = "DXGI_FORMAT_R8_UINT";
              e[e.DXGI_FORMAT_R8_SNORM = 63] = "DXGI_FORMAT_R8_SNORM";
              e[e.DXGI_FORMAT_R8_SINT = 64] = "DXGI_FORMAT_R8_SINT";
              e[e.DXGI_FORMAT_A8_UNORM = 65] = "DXGI_FORMAT_A8_UNORM";
              e[e.DXGI_FORMAT_R1_UNORM = 66] = "DXGI_FORMAT_R1_UNORM";
              e[e.DXGI_FORMAT_R9G9B9E5_SHAREDEXP = 67] = "DXGI_FORMAT_R9G9B9E5_SHAREDEXP";
              e[e.DXGI_FORMAT_R8G8_B8G8_UNORM = 68] = "DXGI_FORMAT_R8G8_B8G8_UNORM";
              e[e.DXGI_FORMAT_G8R8_G8B8_UNORM = 69] = "DXGI_FORMAT_G8R8_G8B8_UNORM";
              e[e.DXGI_FORMAT_BC1_TYPELESS = 70] = "DXGI_FORMAT_BC1_TYPELESS";
              e[e.DXGI_FORMAT_BC1_UNORM = 71] = "DXGI_FORMAT_BC1_UNORM";
              e[e.DXGI_FORMAT_BC1_UNORM_SRGB = 72] = "DXGI_FORMAT_BC1_UNORM_SRGB";
              e[e.DXGI_FORMAT_BC2_TYPELESS = 73] = "DXGI_FORMAT_BC2_TYPELESS";
              e[e.DXGI_FORMAT_BC2_UNORM = 74] = "DXGI_FORMAT_BC2_UNORM";
              e[e.DXGI_FORMAT_BC2_UNORM_SRGB = 75] = "DXGI_FORMAT_BC2_UNORM_SRGB";
              e[e.DXGI_FORMAT_BC3_TYPELESS = 76] = "DXGI_FORMAT_BC3_TYPELESS";
              e[e.DXGI_FORMAT_BC3_UNORM = 77] = "DXGI_FORMAT_BC3_UNORM";
              e[e.DXGI_FORMAT_BC3_UNORM_SRGB = 78] = "DXGI_FORMAT_BC3_UNORM_SRGB";
              e[e.DXGI_FORMAT_BC4_TYPELESS = 79] = "DXGI_FORMAT_BC4_TYPELESS";
              e[e.DXGI_FORMAT_BC4_UNORM = 80] = "DXGI_FORMAT_BC4_UNORM";
              e[e.DXGI_FORMAT_BC4_SNORM = 81] = "DXGI_FORMAT_BC4_SNORM";
              e[e.DXGI_FORMAT_BC5_TYPELESS = 82] = "DXGI_FORMAT_BC5_TYPELESS";
              e[e.DXGI_FORMAT_BC5_UNORM = 83] = "DXGI_FORMAT_BC5_UNORM";
              e[e.DXGI_FORMAT_BC5_SNORM = 84] = "DXGI_FORMAT_BC5_SNORM";
              e[e.DXGI_FORMAT_B5G6R5_UNORM = 85] = "DXGI_FORMAT_B5G6R5_UNORM";
              e[e.DXGI_FORMAT_B5G5R5A1_UNORM = 86] = "DXGI_FORMAT_B5G5R5A1_UNORM";
              e[e.DXGI_FORMAT_B8G8R8A8_UNORM = 87] = "DXGI_FORMAT_B8G8R8A8_UNORM";
              e[e.DXGI_FORMAT_B8G8R8X8_UNORM = 88] = "DXGI_FORMAT_B8G8R8X8_UNORM";
              e[e.DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM = 89] = "DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM";
              e[e.DXGI_FORMAT_B8G8R8A8_TYPELESS = 90] = "DXGI_FORMAT_B8G8R8A8_TYPELESS";
              e[e.DXGI_FORMAT_B8G8R8A8_UNORM_SRGB = 91] = "DXGI_FORMAT_B8G8R8A8_UNORM_SRGB";
              e[e.DXGI_FORMAT_B8G8R8X8_TYPELESS = 92] = "DXGI_FORMAT_B8G8R8X8_TYPELESS";
              e[e.DXGI_FORMAT_B8G8R8X8_UNORM_SRGB = 93] = "DXGI_FORMAT_B8G8R8X8_UNORM_SRGB";
              e[e.DXGI_FORMAT_BC6H_TYPELESS = 94] = "DXGI_FORMAT_BC6H_TYPELESS";
              e[e.DXGI_FORMAT_BC6H_UF16 = 95] = "DXGI_FORMAT_BC6H_UF16";
              e[e.DXGI_FORMAT_BC6H_SF16 = 96] = "DXGI_FORMAT_BC6H_SF16";
              e[e.DXGI_FORMAT_BC7_TYPELESS = 97] = "DXGI_FORMAT_BC7_TYPELESS";
              e[e.DXGI_FORMAT_BC7_UNORM = 98] = "DXGI_FORMAT_BC7_UNORM";
              e[e.DXGI_FORMAT_BC7_UNORM_SRGB = 99] = "DXGI_FORMAT_BC7_UNORM_SRGB";
              e[e.DXGI_FORMAT_AYUV = 100] = "DXGI_FORMAT_AYUV";
              e[e.DXGI_FORMAT_Y410 = 101] = "DXGI_FORMAT_Y410";
              e[e.DXGI_FORMAT_Y416 = 102] = "DXGI_FORMAT_Y416";
              e[e.DXGI_FORMAT_NV12 = 103] = "DXGI_FORMAT_NV12";
              e[e.DXGI_FORMAT_P010 = 104] = "DXGI_FORMAT_P010";
              e[e.DXGI_FORMAT_P016 = 105] = "DXGI_FORMAT_P016";
              e[e.DXGI_FORMAT_420_OPAQUE = 106] = "DXGI_FORMAT_420_OPAQUE";
              e[e.DXGI_FORMAT_YUY2 = 107] = "DXGI_FORMAT_YUY2";
              e[e.DXGI_FORMAT_Y210 = 108] = "DXGI_FORMAT_Y210";
              e[e.DXGI_FORMAT_Y216 = 109] = "DXGI_FORMAT_Y216";
              e[e.DXGI_FORMAT_NV11 = 110] = "DXGI_FORMAT_NV11";
              e[e.DXGI_FORMAT_AI44 = 111] = "DXGI_FORMAT_AI44";
              e[e.DXGI_FORMAT_IA44 = 112] = "DXGI_FORMAT_IA44";
              e[e.DXGI_FORMAT_P8 = 113] = "DXGI_FORMAT_P8";
              e[e.DXGI_FORMAT_A8P8 = 114] = "DXGI_FORMAT_A8P8";
              e[e.DXGI_FORMAT_B4G4R4A4_UNORM = 115] = "DXGI_FORMAT_B4G4R4A4_UNORM";
              e[e.DXGI_FORMAT_P208 = 116] = "DXGI_FORMAT_P208";
              e[e.DXGI_FORMAT_V208 = 117] = "DXGI_FORMAT_V208";
              e[e.DXGI_FORMAT_V408 = 118] = "DXGI_FORMAT_V408";
              e[e.DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE = 119] = "DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE";
              e[e.DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE = 120] = "DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE";
              e[e.DXGI_FORMAT_FORCE_UINT = 121] = "DXGI_FORMAT_FORCE_UINT";
            })(f ||= {});
            (function (e) {
              e[e.DDS_DIMENSION_TEXTURE1D = 2] = "DDS_DIMENSION_TEXTURE1D";
              e[e.DDS_DIMENSION_TEXTURE2D = 3] = "DDS_DIMENSION_TEXTURE2D";
              e[e.DDS_DIMENSION_TEXTURE3D = 6] = "DDS_DIMENSION_TEXTURE3D";
            })(_ ||= {});
            var x;
            var b;
            var T;
            (p = {})[827611204] = i.COMPRESSED_RGBA_S3TC_DXT1_EXT;
            p[861165636] = i.COMPRESSED_RGBA_S3TC_DXT3_EXT;
            p[894720068] = i.COMPRESSED_RGBA_S3TC_DXT5_EXT;
            var A = p;
            (m = {})[f.DXGI_FORMAT_BC1_TYPELESS] = i.COMPRESSED_RGBA_S3TC_DXT1_EXT;
            m[f.DXGI_FORMAT_BC1_UNORM] = i.COMPRESSED_RGBA_S3TC_DXT1_EXT;
            m[f.DXGI_FORMAT_BC2_TYPELESS] = i.COMPRESSED_RGBA_S3TC_DXT3_EXT;
            m[f.DXGI_FORMAT_BC2_UNORM] = i.COMPRESSED_RGBA_S3TC_DXT3_EXT;
            m[f.DXGI_FORMAT_BC3_TYPELESS] = i.COMPRESSED_RGBA_S3TC_DXT5_EXT;
            m[f.DXGI_FORMAT_BC3_UNORM] = i.COMPRESSED_RGBA_S3TC_DXT5_EXT;
            m[f.DXGI_FORMAT_BC1_UNORM_SRGB] = i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
            m[f.DXGI_FORMAT_BC2_UNORM_SRGB] = i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
            m[f.DXGI_FORMAT_BC3_UNORM_SRGB] = i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
            var C = m;
            function S(e) {
              var t = new Uint32Array(e);
              if (t[0] !== 542327876) {
                throw new Error("Invalid DDS file magic word");
              }
              var n = new Uint32Array(e, 0, 124 / Uint32Array.BYTES_PER_ELEMENT);
              var r = n[3];
              var i = n[4];
              var s = n[7];
              var a = new Uint32Array(e, Uint32Array.BYTES_PER_ELEMENT * 19, 32 / Uint32Array.BYTES_PER_ELEMENT);
              var o = a[1];
              if (o & 4) {
                var h = a[2];
                if (h !== 808540228) {
                  var l = A[h];
                  var c = new Uint8Array(e, 128);
                  return [new y(c, {
                    format: l,
                    width: i,
                    height: r,
                    levels: s
                  })];
                }
                var u = new Uint32Array(t.buffer, 128, 20 / Uint32Array.BYTES_PER_ELEMENT);
                var p = u[0];
                var m = u[1];
                var f = u[2];
                var v = u[3];
                var g = C[p];
                if (g === undefined) {
                  throw new Error("DDSParser cannot parse texture data with DXGI format " + p);
                }
                if (f === 4) {
                  throw new Error("DDSParser does not support cubemap textures");
                }
                if (m === _.DDS_DIMENSION_TEXTURE3D) {
                  throw new Error("DDSParser does not supported 3D texture data");
                }
                var w = new Array();
                if (v === 1) {
                  w.push(new Uint8Array(e, 148));
                } else {
                  var x = d[g];
                  var b = 0;
                  var T = i;
                  var S = r;
                  for (var E = 0; E < s; E++) {
                    b += Math.max(1, T + 3 & -4) * Math.max(1, S + 3 & -4) * x;
                    T >>>= 1;
                    S >>>= 1;
                  }
                  var O = 148;
                  for (E = 0; E < v; E++) {
                    w.push(new Uint8Array(e, O, b));
                    O += b;
                  }
                }
                return w.map(function (e) {
                  return new y(e, {
                    format: g,
                    width: i,
                    height: r,
                    levels: s
                  });
                });
              }
              if (o & 64) {
                throw new Error("DDSParser does not support uncompressed texture data.");
              }
              if (o & 512) {
                throw new Error("DDSParser does not supported YUV uncompressed texture data.");
              }
              if (o & 131072) {
                throw new Error("DDSParser does not support single-channel (lumninance) texture data!");
              }
              if (o & 2) {
                throw new Error("DDSParser does not support single-channel (alpha) texture data!");
              }
              throw new Error("DDSParser failed to load a texture file due to an unknown reason!");
            }
            var E = [171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10];
            (x = {})[l.QE.UNSIGNED_BYTE] = 1;
            x[l.QE.UNSIGNED_SHORT] = 2;
            x[l.QE.INT] = 4;
            x[l.QE.UNSIGNED_INT] = 4;
            x[l.QE.FLOAT] = 4;
            x[l.QE.HALF_FLOAT] = 8;
            var O = x;
            (b = {})[l.hR.RGBA] = 4;
            b[l.hR.RGB] = 3;
            b[l.hR.RG] = 2;
            b[l.hR.RED] = 1;
            b[l.hR.LUMINANCE] = 1;
            b[l.hR.LUMINANCE_ALPHA] = 2;
            b[l.hR.ALPHA] = 1;
            var k = b;
            (T = {})[l.QE.UNSIGNED_SHORT_4_4_4_4] = 2;
            T[l.QE.UNSIGNED_SHORT_5_5_5_1] = 2;
            T[l.QE.UNSIGNED_SHORT_5_6_5] = 2;
            var P = T;
            function M(e, t, n = false) {
              var r = new DataView(t);
              if (!function (e, t) {
                for (var n = 0; n < E.length; n++) {
                  if (t.getUint8(n) !== E[n]) {
                    return false;
                  }
                }
                return true;
              }(0, r)) {
                return null;
              }
              var i = r.getUint32(12, true) === 67305985;
              var a = r.getUint32(16, i);
              var o = r.getUint32(24, i);
              var h = r.getUint32(28, i);
              var c = r.getUint32(36, i);
              var u = r.getUint32(40, i) || 1;
              var p = r.getUint32(44, i) || 1;
              var m = r.getUint32(48, i) || 1;
              var f = r.getUint32(52, i);
              var _ = r.getUint32(56, i);
              var v = r.getUint32(60, i);
              if (u === 0 || p !== 1) {
                throw new Error("Only 2D textures are supported");
              }
              if (f !== 1) {
                throw new Error("CubeTextures are not supported by KTXLoader yet!");
              }
              if (m !== 1) {
                throw new Error("WebGL does not support array textures");
              }
              var g;
              var w = c + 3 & -4;
              var x = u + 3 & -4;
              var b = new Array(m);
              var T = c * u;
              if (a === 0) {
                T = w * x;
              }
              if ((g = a !== 0 ? O[a] ? O[a] * k[o] : P[a] : d[h]) === undefined) {
                throw new Error("Unable to resolve the pixel format stored in the *.ktx file!");
              }
              var A = n ? function (e, t, n) {
                var r = new Map();
                for (var i = 0; i < t;) {
                  var s = e.getUint32(64 + i, n);
                  var a = 64 + i + 4;
                  var o = 3 - (s + 3) % 4;
                  if (s === 0 || s > t - i) {
                    break;
                  }
                  for (var h = 0; h < s && e.getUint8(a + h) !== 0; h++);
                  if (h === -1) {
                    break;
                  }
                  var l = new TextDecoder().decode(new Uint8Array(e.buffer, a, h));
                  var d = new DataView(e.buffer, a + h + 1, s - h - 1);
                  r.set(l, d);
                  i += 4 + s + o;
                }
                return r;
              }(r, v, i) : null;
              var C = T * g;
              var S = c;
              var M = u;
              var I = w;
              var L = x;
              var j = 64 + v;
              for (var B = 0; B < _; B++) {
                var D = r.getUint32(j, i);
                var F = j + 4;
                for (var N = 0; N < m; N++) {
                  var G = b[N];
                  G ||= b[N] = new Array(_);
                  G[B] = {
                    levelID: B,
                    levelWidth: _ > 1 || a !== 0 ? S : I,
                    levelHeight: _ > 1 || a !== 0 ? M : L,
                    levelBuffer: new Uint8Array(t, F, C)
                  };
                  F += C;
                }
                j = (j += D + 4) % 4 != 0 ? j + 4 - j % 4 : j;
                C = (I = (S = S >> 1 || 1) + 4 - 1 & -4) * (L = (M = M >> 1 || 1) + 4 - 1 & -4) * g;
              }
              if (a !== 0) {
                return {
                  uncompressed: b.map(function (e) {
                    var t = e[0].levelBuffer;
                    var n = false;
                    if (a === l.QE.FLOAT) {
                      t = new Float32Array(e[0].levelBuffer.buffer, e[0].levelBuffer.byteOffset, e[0].levelBuffer.byteLength / 4);
                    } else if (a === l.QE.UNSIGNED_INT) {
                      n = true;
                      t = new Uint32Array(e[0].levelBuffer.buffer, e[0].levelBuffer.byteOffset, e[0].levelBuffer.byteLength / 4);
                    } else if (a === l.QE.INT) {
                      n = true;
                      t = new Int32Array(e[0].levelBuffer.buffer, e[0].levelBuffer.byteOffset, e[0].levelBuffer.byteLength / 4);
                    }
                    return {
                      resource: new s.dZ(t, {
                        width: e[0].levelWidth,
                        height: e[0].levelHeight
                      }),
                      type: a,
                      format: n ? R(o) : o
                    };
                  }),
                  kvData: A
                };
              } else {
                return {
                  compressed: b.map(function (e) {
                    return new y(null, {
                      format: h,
                      width: c,
                      height: u,
                      levels: _,
                      levelBuffers: e
                    });
                  }),
                  kvData: A
                };
              }
            }
            function R(e) {
              switch (e) {
                case l.hR.RGBA:
                  return l.hR.RGBA_INTEGER;
                case l.hR.RGB:
                  return l.hR.RGB_INTEGER;
                case l.hR.RG:
                  return l.hR.RG_INTEGER;
                case l.hR.RED:
                  return l.hR.RED_INTEGER;
                default:
                  return e;
              }
            }
            a.Sd.setExtensionXhrType("dds", a.Sd.XHR_RESPONSE_TYPE.BUFFER);
            var I = function () {
              function e() {}
              e.use = function (e, t) {
                if (e.extension === "dds" && e.data) {
                  try {
                    Object.assign(e, w(e.name || e.url, S(e.data), e.metadata));
                  } catch (e) {
                    t(e);
                    return;
                  }
                }
                t();
              };
              e.extension = s.Ag.Loader;
              return e;
            }();
            a.Sd.setExtensionXhrType("ktx", a.Sd.XHR_RESPONSE_TYPE.BUFFER);
            var L = function () {
              function e() {}
              e.use = function (e, t) {
                if (e.extension === "ktx" && e.data) {
                  try {
                    var n = e.name || e.url;
                    var r = M(0, e.data, this.loadKeyValueData);
                    var i = r.compressed;
                    var a = r.uncompressed;
                    var o = r.kvData;
                    if (i) {
                      var h = w(n, i, e.metadata);
                      if (o && h.textures) {
                        for (var d in h.textures) {
                          h.textures[d].baseTexture.ktxKeyValueData = o;
                        }
                      }
                      Object.assign(e, h);
                    } else if (a) {
                      var c = {};
                      a.forEach(function (e, t) {
                        var r = new s.gP(new s.t5(e.resource, {
                          mipmap: l.E8.OFF,
                          alphaMode: l.Gk.NO_PREMULTIPLIED_ALPHA,
                          type: e.type,
                          format: e.format
                        }));
                        var i = n + "-" + (t + 1);
                        if (o) {
                          r.baseTexture.ktxKeyValueData = o;
                        }
                        s.t5.addToCache(r.baseTexture, i);
                        s.gP.addToCache(r, i);
                        if (t === 0) {
                          c[n] = r;
                          s.t5.addToCache(r.baseTexture, n);
                          s.gP.addToCache(r, n);
                        }
                        c[i] = r;
                      });
                      Object.assign(e, {
                        textures: c
                      });
                    }
                  } catch (e) {
                    t(e);
                    return;
                  }
                }
                t();
              };
              e.extension = s.Ag.Loader;
              e.loadKeyValueData = false;
              return e;
            }();
          }
    });
})();
