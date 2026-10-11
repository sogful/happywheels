(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        33523(e, t, n) {
            "use strict";
        
            n.d(t, {
              A: () => r,
              X: () => a
            });
            var r;
            function i() {
              i = Object.assign || function (e) {
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
              return i.apply(this, arguments);
            }
            (function (e) {
              e.Application = "application";
              e.RendererPlugin = "renderer-webgl-plugin";
              e.CanvasRendererPlugin = "renderer-canvas-plugin";
              e.Loader = "loader";
              e.LoadParser = "load-parser";
              e.ResolveParser = "resolve-parser";
              e.CacheParser = "cache-parser";
              e.DetectionParser = "detection-parser";
            })(r ||= {});
            function s(e) {
              if (typeof e == "function" || typeof e == "object" && e.extension) {
                if (!e.extension) {
                  throw new Error("Extension class must have an extension object");
                }
                var t = typeof e.extension != "object" ? {
                  type: e.extension
                } : e.extension;
                e = i(i({}, t), {
                  ref: e
                });
              }
              if (typeof e != "object") {
                throw new Error("Invalid extension type");
              }
              if (typeof (e = i({}, e)).type == "string") {
                e.type = [e.type];
              }
              return e;
            }
            var a = {
              _addHandlers: null,
              _removeHandlers: null,
              _queue: {},
              remove: function () {
                var e = arguments;
                var t = this;
                var n = [];
                for (var r = 0; r < arguments.length; r++) {
                  n[r] = e[r];
                }
                n.map(s).forEach(function (e) {
                  e.type.forEach(function (n) {
                    var r;
                    var i;
                    if ((i = (r = t._removeHandlers)[n]) === null || i === undefined) {
                      return undefined;
                    } else {
                      return i.call(r, e);
                    }
                  });
                });
                return this;
              },
              add: function () {
                var e = arguments;
                var t = this;
                var n = [];
                for (var r = 0; r < arguments.length; r++) {
                  n[r] = e[r];
                }
                n.map(s).forEach(function (e) {
                  e.type.forEach(function (n) {
                    var r = t._addHandlers;
                    var i = t._queue;
                    if (r[n]) {
                      r[n](e);
                    } else {
                      i[n] = i[n] || [];
                      i[n].push(e);
                    }
                  });
                });
                return this;
              },
              handle: function (e, t, n) {
                var r = this._addHandlers = this._addHandlers || {};
                var i = this._removeHandlers = this._removeHandlers || {};
                if (r[e] || i[e]) {
                  throw new Error("Extension type " + e + " already has a handler");
                }
                r[e] = t;
                i[e] = n;
                var s = this._queue;
                if (s[e]) {
                  s[e].forEach(function (e) {
                    return t(e);
                  });
                  delete s[e];
                }
                return this;
              },
              handleByMap: function (e, t) {
                return this.handle(e, function (e) {
                  t[e.name] = e.ref;
                }, function (e) {
                  delete t[e.name];
                });
              },
              handleByList: function (e, t) {
                return this.handle(e, function (n) {
                  var i;
                  var s;
                  if (!t.includes(n.ref)) {
                    t.push(n.ref);
                    if (e === r.Loader) {
                      if ((s = (i = n.ref).add) !== null && s !== undefined) {
                        s.call(i);
                      }
                    }
                  }
                }, function (e) {
                  var n = t.indexOf(e.ref);
                  if (n !== -1) {
                    t.splice(n, 1);
                  }
                });
              }
            };
          },
        97611(e, t, n) {
            "use strict";
        
            n.d(t, {
              Z: () => s
            });
            var r = n(97831);
            function i(e, t) {
              i = Object.setPrototypeOf || {
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
              return i(e, t);
            }
            var s = function (e) {
              function t(t = 1) {
                var n = e.call(this, r.MT, "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float uAlpha;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;\n}\n", {
                  uAlpha: 1
                }) || this;
                n.alpha = t;
                return n;
              }
              (function (e, t) {
                function n() {
                  this.constructor = e;
                }
                i(e, t);
                e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
              })(t, e);
              Object.defineProperty(t.prototype, "alpha", {
                get: function () {
                  return this.uniforms.uAlpha;
                },
                set: function (e) {
                  this.uniforms.uAlpha = e;
                },
                enumerable: false,
                configurable: true
              });
              return t;
            }(r.dJ);
          },
        53540(e, t, n) {
            "use strict";
        
            n.d(t, {
              l: () => o
            });
            var r = n(97831);
            var i = n(38499);
            var s = n(88604);
            function a(e, t) {
              a = Object.setPrototypeOf || {
                __proto__: []
              } instanceof Array && function (e, t) {
                e.__proto__ = t;
              } || function (e, t) {
                for (var n in t) {
                  if (Object.prototype.hasOwnProperty.call(t, n)) {
                    e[n] = t[n];
                  }
                }
              };
              return a(e, t);
            }
            var o = function (e) {
              function t(t) {
                var n = e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "precision mediump float;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform float transformX;\nuniform float transformY;\nuniform vec3 lightColor;\nuniform float lightAlpha;\nuniform vec3 shadowColor;\nuniform float shadowAlpha;\n\nvoid main(void) {\n    vec2 transform = vec2(1.0 / filterArea) * vec2(transformX, transformY);\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    float light = texture2D(uSampler, vTextureCoord - transform).a;\n    float shadow = texture2D(uSampler, vTextureCoord + transform).a;\n\n    color.rgb = mix(color.rgb, lightColor, clamp((color.a - light) * lightAlpha, 0.0, 1.0));\n    color.rgb = mix(color.rgb, shadowColor, clamp((color.a - shadow) * shadowAlpha, 0.0, 1.0));\n    gl_FragColor = vec4(color.rgb * color.a, color.a);\n}\n") || this;
                n._thickness = 2;
                n._angle = 0;
                n.uniforms.lightColor = new Float32Array(3);
                n.uniforms.shadowColor = new Float32Array(3);
                Object.assign(n, {
                  rotation: 45,
                  thickness: 2,
                  lightColor: 16777215,
                  lightAlpha: 0.7,
                  shadowColor: 0,
                  shadowAlpha: 0.7
                }, t);
                n.padding = 1;
                return n;
              }
              (function (e, t) {
                function n() {
                  this.constructor = e;
                }
                a(e, t);
                e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
              })(t, e);
              t.prototype._updateTransform = function () {
                this.uniforms.transformX = this._thickness * Math.cos(this._angle);
                this.uniforms.transformY = this._thickness * Math.sin(this._angle);
              };
              Object.defineProperty(t.prototype, "rotation", {
                get: function () {
                  return this._angle / i.Td;
                },
                set: function (e) {
                  this._angle = e * i.Td;
                  this._updateTransform();
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "thickness", {
                get: function () {
                  return this._thickness;
                },
                set: function (e) {
                  this._thickness = e;
                  this._updateTransform();
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "lightColor", {
                get: function () {
                  return (0, s.rgb2hex)(this.uniforms.lightColor);
                },
                set: function (e) {
                  (0, s.hex2rgb)(e, this.uniforms.lightColor);
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "lightAlpha", {
                get: function () {
                  return this.uniforms.lightAlpha;
                },
                set: function (e) {
                  this.uniforms.lightAlpha = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "shadowColor", {
                get: function () {
                  return (0, s.rgb2hex)(this.uniforms.shadowColor);
                },
                set: function (e) {
                  (0, s.hex2rgb)(e, this.uniforms.shadowColor);
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "shadowAlpha", {
                get: function () {
                  return this.uniforms.shadowAlpha;
                },
                set: function (e) {
                  this.uniforms.shadowAlpha = e;
                },
                enumerable: false,
                configurable: true
              });
              return t;
            }(r.dJ);
          },
        95619(e, t, n) {
            "use strict";
        
            n.d(t, {
              H: () => d,
              e: () => c
            });
            var r = n(97831);
            var i = n(55323);
            var s = n(11313);
            function a(e, t) {
              a = Object.setPrototypeOf || {
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
              return a(e, t);
            }
            function o(e, t) {
              function n() {
                this.constructor = e;
              }
              a(e, t);
              e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
            }
            var h = {
              5: [0.153388, 0.221461, 0.250301],
              7: [0.071303, 0.131514, 0.189879, 0.214607],
              9: [0.028532, 0.067234, 0.124009, 0.179044, 0.20236],
              11: [0.0093, 0.028002, 0.065984, 0.121703, 0.175713, 0.198596],
              13: [0.002406, 0.009255, 0.027867, 0.065666, 0.121117, 0.174868, 0.197641],
              15: [0.000489, 0.002403, 0.009246, 0.02784, 0.065602, 0.120999, 0.174697, 0.197448]
            };
            var l = ["varying vec2 vBlurTexCoords[%size%];", "uniform sampler2D uSampler;", "void main(void)", "{", "    gl_FragColor = vec4(0.0);", "    %blur%", "}"].join("\n");
            var d = function (e) {
              function t(t, n = 8, r = 4, s = i.W0.FILTER_RESOLUTION, a = 5) {
                var o = this;
                var d = function (e, t) {
                  var n;
                  var r = Math.ceil(e / 2);
                  var i = "\n    attribute vec2 aVertexPosition;\n\n    uniform mat3 projectionMatrix;\n\n    uniform float strength;\n\n    varying vec2 vBlurTexCoords[%size%];\n\n    uniform vec4 inputSize;\n    uniform vec4 outputFrame;\n\n    vec4 filterVertexPosition( void )\n    {\n        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n    }\n\n    vec2 filterTextureCoord( void )\n    {\n        return aVertexPosition * (outputFrame.zw * inputSize.zw);\n    }\n\n    void main(void)\n    {\n        gl_Position = filterVertexPosition();\n\n        vec2 textureCoord = filterTextureCoord();\n        %blur%\n    }";
                  var s = "";
                  n = t ? "vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);" : "vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";
                  for (var a = 0; a < e; a++) {
                    var o = n.replace("%index%", a.toString());
                    s += o = o.replace("%sampleIndex%", a - (r - 1) + ".0");
                    s += "\n";
                  }
                  return (i = i.replace("%blur%", s)).replace("%size%", e.toString());
                }(a, t);
                var c = function (e) {
                  var t;
                  var n = h[e];
                  var r = n.length;
                  var i = l;
                  var s = "";
                  for (var a = 0; a < e; a++) {
                    var o = "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;".replace("%index%", a.toString());
                    t = a;
                    if (a >= r) {
                      t = e - a - 1;
                    }
                    s += o = o.replace("%value%", n[t].toString());
                    s += "\n";
                  }
                  return (i = i.replace("%blur%", s)).replace("%size%", e.toString());
                }(a);
                (o = e.call(this, d, c) || this).horizontal = t;
                o.resolution = s;
                o._quality = 0;
                o.quality = r;
                o.blur = n;
                return o;
              }
              o(t, e);
              t.prototype.apply = function (e, t, n, r) {
                if (n) {
                  if (this.horizontal) {
                    this.uniforms.strength = 1 / n.width * (n.width / t.width);
                  } else {
                    this.uniforms.strength = 1 / n.height * (n.height / t.height);
                  }
                } else if (this.horizontal) {
                  this.uniforms.strength = 1 / e.renderer.width * (e.renderer.width / t.width);
                } else {
                  this.uniforms.strength = 1 / e.renderer.height * (e.renderer.height / t.height);
                }
                this.uniforms.strength *= this.strength;
                this.uniforms.strength /= this.passes;
                if (this.passes === 1) {
                  e.applyFilter(this, t, n, r);
                } else {
                  var i = e.getFilterTexture();
                  var a = e.renderer;
                  var o = t;
                  var h = i;
                  this.state.blend = false;
                  e.applyFilter(this, o, h, s.fr.CLEAR);
                  for (var l = 1; l < this.passes - 1; l++) {
                    e.bindAndClear(o, s.fr.BLIT);
                    this.uniforms.uSampler = h;
                    var d = h;
                    h = o;
                    o = d;
                    a.shader.bind(this);
                    a.geometry.draw(5);
                  }
                  this.state.blend = true;
                  e.applyFilter(this, h, n, r);
                  e.returnFilterTexture(i);
                }
              };
              Object.defineProperty(t.prototype, "blur", {
                get: function () {
                  return this.strength;
                },
                set: function (e) {
                  this.padding = 1 + Math.abs(e) * 2;
                  this.strength = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "quality", {
                get: function () {
                  return this._quality;
                },
                set: function (e) {
                  this._quality = e;
                  this.passes = e;
                },
                enumerable: false,
                configurable: true
              });
              return t;
            }(r.dJ);
            var c = function (e) {
              function t(t = 8, n = 4, r = i.W0.FILTER_RESOLUTION, s = 5) {
                var a = e.call(this) || this;
                a.blurXFilter = new d(true, t, n, r, s);
                a.blurYFilter = new d(false, t, n, r, s);
                a.resolution = r;
                a.quality = n;
                a.blur = t;
                a.repeatEdgePixels = false;
                return a;
              }
              o(t, e);
              t.prototype.apply = function (e, t, n, r) {
                var i = Math.abs(this.blurXFilter.strength);
                var a = Math.abs(this.blurYFilter.strength);
                if (i && a) {
                  var o = e.getFilterTexture();
                  this.blurXFilter.apply(e, t, o, s.fr.CLEAR);
                  this.blurYFilter.apply(e, o, n, r);
                  e.returnFilterTexture(o);
                } else if (a) {
                  this.blurYFilter.apply(e, t, n, r);
                } else {
                  this.blurXFilter.apply(e, t, n, r);
                }
              };
              t.prototype.updatePadding = function () {
                if (this._repeatEdgePixels) {
                  this.padding = 0;
                } else {
                  this.padding = Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength)) * 2;
                }
              };
              Object.defineProperty(t.prototype, "blur", {
                get: function () {
                  return this.blurXFilter.blur;
                },
                set: function (e) {
                  this.blurXFilter.blur = this.blurYFilter.blur = e;
                  this.updatePadding();
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "quality", {
                get: function () {
                  return this.blurXFilter.quality;
                },
                set: function (e) {
                  this.blurXFilter.quality = this.blurYFilter.quality = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "blurX", {
                get: function () {
                  return this.blurXFilter.blur;
                },
                set: function (e) {
                  this.blurXFilter.blur = e;
                  this.updatePadding();
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "blurY", {
                get: function () {
                  return this.blurYFilter.blur;
                },
                set: function (e) {
                  this.blurYFilter.blur = e;
                  this.updatePadding();
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "blendMode", {
                get: function () {
                  return this.blurYFilter.blendMode;
                },
                set: function (e) {
                  this.blurYFilter.blendMode = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "repeatEdgePixels", {
                get: function () {
                  return this._repeatEdgePixels;
                },
                set: function (e) {
                  this._repeatEdgePixels = e;
                  this.updatePadding();
                },
                enumerable: false,
                configurable: true
              });
              return t;
            }(r.dJ);
          },
        74560(e, t, n) {
            "use strict";
        
            n.d(t, {
              G: () => d
            });
            var r = n(80432);
            var i = n(97831);
            var s = n(55323);
            var a = n(38499);
            var o = n(88604);
            function h(e, t) {
              h = Object.setPrototypeOf || {
                __proto__: []
              } instanceof Array && function (e, t) {
                e.__proto__ = t;
              } || function (e, t) {
                for (var n in t) {
                  if (Object.prototype.hasOwnProperty.call(t, n)) {
                    e[n] = t[n];
                  }
                }
              };
              return h(e, t);
            }
            function l() {
              l = Object.assign || function (e) {
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
              return l.apply(this, arguments);
            }
            var d = function (e) {
              function t(n) {
                var o = e.call(this) || this;
                o.angle = 45;
                o._distance = 5;
                o._resolution = s.W0.FILTER_RESOLUTION;
                var h = n ? l(l({}, t.defaults), n) : t.defaults;
                var d = h.kernels;
                var c = h.blur;
                var u = h.quality;
                var p = h.pixelSize;
                var m = h.resolution;
                o._tintFilter = new i.dJ("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform vec3 color;\n\nuniform vec2 shift;\nuniform vec4 inputSize;\n\nvoid main(void){\n    vec4 sample = texture2D(uSampler, vTextureCoord - shift * inputSize.zw);\n\n    // Premultiply alpha\n    sample.rgb = color.rgb * sample.a;\n\n    // alpha user alpha\n    sample *= alpha;\n\n    gl_FragColor = sample;\n}");
                o._tintFilter.uniforms.color = new Float32Array(4);
                o._tintFilter.uniforms.shift = new a.bR();
                o._tintFilter.resolution = m;
                o._blurFilter = d ? new r.Q(d) : new r.Q(c, u);
                o.pixelSize = p;
                o.resolution = m;
                var f = h.shadowOnly;
                var _ = h.rotation;
                var v = h.distance;
                var y = h.alpha;
                var g = h.color;
                o.shadowOnly = f;
                o.rotation = _;
                o.distance = v;
                o.alpha = y;
                o.color = g;
                o._updatePadding();
                return o;
              }
              (function (e, t) {
                function n() {
                  this.constructor = e;
                }
                h(e, t);
                e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
              })(t, e);
              t.prototype.apply = function (e, t, n, r) {
                var i = e.getFilterTexture();
                this._tintFilter.apply(e, t, i, 1);
                this._blurFilter.apply(e, i, n, r);
                if (this.shadowOnly !== true) {
                  e.applyFilter(this, t, n, 0);
                }
                e.returnFilterTexture(i);
              };
              t.prototype._updatePadding = function () {
                this.padding = this.distance + this.blur * 2;
              };
              t.prototype._updateShift = function () {
                this._tintFilter.uniforms.shift.set(this.distance * Math.cos(this.angle), this.distance * Math.sin(this.angle));
              };
              Object.defineProperty(t.prototype, "resolution", {
                get: function () {
                  return this._resolution;
                },
                set: function (e) {
                  this._resolution = e;
                  if (this._tintFilter) {
                    this._tintFilter.resolution = e;
                  }
                  if (this._blurFilter) {
                    this._blurFilter.resolution = e;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "distance", {
                get: function () {
                  return this._distance;
                },
                set: function (e) {
                  this._distance = e;
                  this._updatePadding();
                  this._updateShift();
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "rotation", {
                get: function () {
                  return this.angle / a.Td;
                },
                set: function (e) {
                  this.angle = e * a.Td;
                  this._updateShift();
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "alpha", {
                get: function () {
                  return this._tintFilter.uniforms.alpha;
                },
                set: function (e) {
                  this._tintFilter.uniforms.alpha = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "color", {
                get: function () {
                  return (0, o.rgb2hex)(this._tintFilter.uniforms.color);
                },
                set: function (e) {
                  (0, o.hex2rgb)(e, this._tintFilter.uniforms.color);
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "kernels", {
                get: function () {
                  return this._blurFilter.kernels;
                },
                set: function (e) {
                  this._blurFilter.kernels = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "blur", {
                get: function () {
                  return this._blurFilter.blur;
                },
                set: function (e) {
                  this._blurFilter.blur = e;
                  this._updatePadding();
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "quality", {
                get: function () {
                  return this._blurFilter.quality;
                },
                set: function (e) {
                  this._blurFilter.quality = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "pixelSize", {
                get: function () {
                  return this._blurFilter.pixelSize;
                },
                set: function (e) {
                  this._blurFilter.pixelSize = e;
                },
                enumerable: false,
                configurable: true
              });
              t.defaults = {
                rotation: 45,
                distance: 5,
                color: 0,
                alpha: 0.5,
                shadowOnly: false,
                kernels: null,
                blur: 2,
                quality: 3,
                pixelSize: 1,
                resolution: s.W0.FILTER_RESOLUTION
              };
              return t;
            }(i.dJ);
          },
        8844(e, t, n) {
            "use strict";
        
            n.d(t, {
              q: () => a
            });
            var r = n(97831);
            var i = n(88604);
            function s(e, t) {
              s = Object.setPrototypeOf || {
                __proto__: []
              } instanceof Array && function (e, t) {
                e.__proto__ = t;
              } || function (e, t) {
                for (var n in t) {
                  if (Object.prototype.hasOwnProperty.call(t, n)) {
                    e[n] = t[n];
                  }
                }
              };
              return s(e, t);
            }
            var a = function (e) {
              function t(n) {
                var r = this;
                var i = Object.assign({}, t.defaults, n);
                var s = i.outerStrength;
                var a = i.innerStrength;
                var o = i.color;
                var h = i.knockout;
                var l = i.quality;
                var d = Math.round(i.distance);
                (r = e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nuniform float outerStrength;\nuniform float innerStrength;\n\nuniform vec4 glowColor;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform bool knockout;\n\nconst float PI = 3.14159265358979323846264;\n\nconst float DIST = __DIST__;\nconst float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.0);\nconst float ANGLE_STEP_NUM = ceil(PI * 2.0 / ANGLE_STEP_SIZE);\n\nconst float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.0) / 2.0;\n\nvoid main(void) {\n    vec2 px = vec2(1.0 / filterArea.x, 1.0 / filterArea.y);\n\n    float totalAlpha = 0.0;\n\n    vec2 direction;\n    vec2 displaced;\n    vec4 curColor;\n\n    for (float angle = 0.0; angle < PI * 2.0; angle += ANGLE_STEP_SIZE) {\n       direction = vec2(cos(angle), sin(angle)) * px;\n\n       for (float curDistance = 0.0; curDistance < DIST; curDistance++) {\n           displaced = clamp(vTextureCoord + direction * \n                   (curDistance + 1.0), filterClamp.xy, filterClamp.zw);\n\n           curColor = texture2D(uSampler, displaced);\n\n           totalAlpha += (DIST - curDistance) * curColor.a;\n       }\n    }\n    \n    curColor = texture2D(uSampler, vTextureCoord);\n\n    float alphaRatio = (totalAlpha / MAX_TOTAL_ALPHA);\n\n    float innerGlowAlpha = (1.0 - alphaRatio) * innerStrength * curColor.a;\n    float innerGlowStrength = min(1.0, innerGlowAlpha);\n    \n    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);\n\n    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a);\n    float outerGlowStrength = min(1.0 - innerColor.a, outerGlowAlpha);\n\n    vec4 outerGlowColor = outerGlowStrength * glowColor.rgba;\n    \n    if (knockout) {\n      float resultAlpha = outerGlowAlpha + innerGlowAlpha;\n      gl_FragColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);\n    }\n    else {\n      gl_FragColor = innerColor + outerGlowColor;\n    }\n}\n".replace(/__ANGLE_STEP_SIZE__/gi, "" + (1 / l / d).toFixed(7)).replace(/__DIST__/gi, d.toFixed(0) + ".0")) || this).uniforms.glowColor = new Float32Array([0, 0, 0, 1]);
                Object.assign(r, {
                  color: o,
                  outerStrength: s,
                  innerStrength: a,
                  padding: d,
                  knockout: h
                });
                return r;
              }
              (function (e, t) {
                function n() {
                  this.constructor = e;
                }
                s(e, t);
                e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
              })(t, e);
              Object.defineProperty(t.prototype, "color", {
                get: function () {
                  return (0, i.rgb2hex)(this.uniforms.glowColor);
                },
                set: function (e) {
                  (0, i.hex2rgb)(e, this.uniforms.glowColor);
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "outerStrength", {
                get: function () {
                  return this.uniforms.outerStrength;
                },
                set: function (e) {
                  this.uniforms.outerStrength = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "innerStrength", {
                get: function () {
                  return this.uniforms.innerStrength;
                },
                set: function (e) {
                  this.uniforms.innerStrength = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "knockout", {
                get: function () {
                  return this.uniforms.knockout;
                },
                set: function (e) {
                  this.uniforms.knockout = e;
                },
                enumerable: false,
                configurable: true
              });
              t.defaults = {
                distance: 10,
                outerStrength: 4,
                innerStrength: 0,
                color: 16777215,
                quality: 0.1,
                knockout: false
              };
              return t;
            }(r.dJ);
          }
    });
})();
