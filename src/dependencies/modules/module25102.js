(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        25102(e, t, n) {
            "use strict";
        
            n.d(t, {
              MR: () => s
            });
            var r = n(97831);
            function i(e, t) {
              i = Object.setPrototypeOf || {
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
              return i(e, t);
            }
            var s = function (e) {
              function t(t) {
                var n = e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform float gamma;\nuniform float contrast;\nuniform float saturation;\nuniform float brightness;\nuniform float red;\nuniform float green;\nuniform float blue;\nuniform float alpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (c.a > 0.0) {\n        c.rgb /= c.a;\n\n        vec3 rgb = pow(c.rgb, vec3(1. / gamma));\n        rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb)), rgb, saturation), contrast);\n        rgb.r *= red;\n        rgb.g *= green;\n        rgb.b *= blue;\n        c.rgb = rgb * brightness;\n\n        c.rgb *= c.a;\n    }\n\n    gl_FragColor = c * alpha;\n}\n") || this;
                n.gamma = 1;
                n.saturation = 1;
                n.contrast = 1;
                n.brightness = 1;
                n.red = 1;
                n.green = 1;
                n.blue = 1;
                n.alpha = 1;
                Object.assign(n, t);
                return n;
              }
              (function (e, t) {
                function n() {
                  this.constructor = e;
                }
                i(e, t);
                e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
              })(t, e);
              t.prototype.apply = function (e, t, n, r) {
                this.uniforms.gamma = Math.max(this.gamma, 0.0001);
                this.uniforms.saturation = this.saturation;
                this.uniforms.contrast = this.contrast;
                this.uniforms.brightness = this.brightness;
                this.uniforms.red = this.red;
                this.uniforms.green = this.green;
                this.uniforms.blue = this.blue;
                this.uniforms.alpha = this.alpha;
                e.applyFilter(this, t, n, r);
              };
              return t;
            }(r.dJ);
            var a = n(80432);
            var o = n(55323);
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
            function l(e, t) {
              function n() {
                this.constructor = e;
              }
              h(e, t);
              e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
            }
            var d = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}";
            var c = function (e) {
              function t(t = 0.5) {
                var n = e.call(this, d, "\nuniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform float threshold;\n\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    // A simple & fast algorithm for getting brightness.\n    // It's inaccuracy , but good enought for this feature.\n    float _max = max(max(color.r, color.g), color.b);\n    float _min = min(min(color.r, color.g), color.b);\n    float brightness = (_max + _min) * 0.5;\n\n    if(brightness > threshold) {\n        gl_FragColor = color;\n    } else {\n        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\n    }\n}\n") || this;
                n.threshold = t;
                return n;
              }
              l(t, e);
              Object.defineProperty(t.prototype, "threshold", {
                get: function () {
                  return this.uniforms.threshold;
                },
                set: function (e) {
                  this.uniforms.threshold = e;
                },
                enumerable: false,
                configurable: true
              });
              return t;
            }(r.dJ);
            (function (e) {
              function t(n) {
                var r = e.call(this, d, "uniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D bloomTexture;\nuniform float bloomScale;\nuniform float brightness;\n\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    color.rgb *= brightness;\n    vec4 bloomColor = vec4(texture2D(bloomTexture, vTextureCoord).rgb, 0.0);\n    bloomColor.rgb *= bloomScale;\n    gl_FragColor = color + bloomColor;\n}\n") || this;
                r.bloomScale = 1;
                r.brightness = 1;
                r._resolution = o.W0.FILTER_RESOLUTION;
                if (typeof n == "number") {
                  n = {
                    threshold: n
                  };
                }
                var i = Object.assign(t.defaults, n);
                r.bloomScale = i.bloomScale;
                r.brightness = i.brightness;
                var s = i.kernels;
                var h = i.blur;
                var l = i.quality;
                var u = i.pixelSize;
                var p = i.resolution;
                r._extractFilter = new c(i.threshold);
                r._extractFilter.resolution = p;
                r._blurFilter = s ? new a.Q(s) : new a.Q(h, l);
                r.pixelSize = u;
                r.resolution = p;
                return r;
              }
              l(t, e);
              t.prototype.apply = function (e, t, n, r, i) {
                var s = e.getFilterTexture();
                this._extractFilter.apply(e, t, s, 1, i);
                var a = e.getFilterTexture();
                this._blurFilter.apply(e, s, a, 1);
                this.uniforms.bloomScale = this.bloomScale;
                this.uniforms.brightness = this.brightness;
                this.uniforms.bloomTexture = a;
                e.applyFilter(this, t, n, r);
                e.returnFilterTexture(a);
                e.returnFilterTexture(s);
              };
              Object.defineProperty(t.prototype, "resolution", {
                get: function () {
                  return this._resolution;
                },
                set: function (e) {
                  this._resolution = e;
                  if (this._extractFilter) {
                    this._extractFilter.resolution = e;
                  }
                  if (this._blurFilter) {
                    this._blurFilter.resolution = e;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "threshold", {
                get: function () {
                  return this._extractFilter.threshold;
                },
                set: function (e) {
                  this._extractFilter.threshold = e;
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
                threshold: 0.5,
                bloomScale: 1,
                brightness: 1,
                kernels: null,
                blur: 8,
                quality: 4,
                pixelSize: 1,
                resolution: o.W0.FILTER_RESOLUTION
              };
            })(r.dJ);
            function u(e, t) {
              u = Object.setPrototypeOf || {
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
              return u(e, t);
            }
            (function (e) {
              function t(t = 8) {
                var n = e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\n\nuniform vec4 filterArea;\nuniform float pixelSize;\nuniform sampler2D uSampler;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 pixelate(vec2 coord, vec2 size)\n{\n    return floor( coord / size ) * size;\n}\n\nvec2 getMod(vec2 coord, vec2 size)\n{\n    return mod( coord , size) / size;\n}\n\nfloat character(float n, vec2 p)\n{\n    p = floor(p*vec2(4.0, -4.0) + 2.5);\n\n    if (clamp(p.x, 0.0, 4.0) == p.x)\n    {\n        if (clamp(p.y, 0.0, 4.0) == p.y)\n        {\n            if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;\n        }\n    }\n    return 0.0;\n}\n\nvoid main()\n{\n    vec2 coord = mapCoord(vTextureCoord);\n\n    // get the rounded color..\n    vec2 pixCoord = pixelate(coord, vec2(pixelSize));\n    pixCoord = unmapCoord(pixCoord);\n\n    vec4 color = texture2D(uSampler, pixCoord);\n\n    // determine the character to use\n    float gray = (color.r + color.g + color.b) / 3.0;\n\n    float n =  65536.0;             // .\n    if (gray > 0.2) n = 65600.0;    // :\n    if (gray > 0.3) n = 332772.0;   // *\n    if (gray > 0.4) n = 15255086.0; // o\n    if (gray > 0.5) n = 23385164.0; // &\n    if (gray > 0.6) n = 15252014.0; // 8\n    if (gray > 0.7) n = 13199452.0; // @\n    if (gray > 0.8) n = 11512810.0; // #\n\n    // get the mod..\n    vec2 modd = getMod(coord, vec2(pixelSize));\n\n    gl_FragColor = color * character( n, vec2(-1.0) + modd * 2.0);\n\n}\n") || this;
                n.size = t;
                return n;
              }
              (function (e, t) {
                function n() {
                  this.constructor = e;
                }
                u(e, t);
                e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
              })(t, e);
              Object.defineProperty(t.prototype, "size", {
                get: function () {
                  return this.uniforms.pixelSize;
                },
                set: function (e) {
                  this.uniforms.pixelSize = e;
                },
                enumerable: false,
                configurable: true
              });
            })(r.dJ);
            n(53540);
            var p = n(11313);
            var m = n(97611);
            var f = n(95619);
            var _ = n(38499);
            function v(e, t) {
              v = Object.setPrototypeOf || {
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
              return v(e, t);
            }
            (function (e) {
              function t(t = 2, n = 4, r = o.W0.FILTER_RESOLUTION, i = 5) {
                var s;
                var a;
                var h = e.call(this) || this;
                if (typeof t == "number") {
                  s = t;
                  a = t;
                } else if (t instanceof _.bR) {
                  s = t.x;
                  a = t.y;
                } else if (Array.isArray(t)) {
                  s = t[0];
                  a = t[1];
                }
                h.blurXFilter = new f.H(true, s, n, r, i);
                h.blurYFilter = new f.H(false, a, n, r, i);
                h.blurYFilter.blendMode = p.B9.SCREEN;
                h.defaultFilter = new m.Z();
                return h;
              }
              (function (e, t) {
                function n() {
                  this.constructor = e;
                }
                v(e, t);
                e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
              })(t, e);
              t.prototype.apply = function (e, t, n, r) {
                var i = e.getFilterTexture();
                this.defaultFilter.apply(e, t, n, r);
                this.blurXFilter.apply(e, t, i, 1);
                this.blurYFilter.apply(e, i, n, 0);
                e.returnFilterTexture(i);
              };
              Object.defineProperty(t.prototype, "blur", {
                get: function () {
                  return this.blurXFilter.blur;
                },
                set: function (e) {
                  this.blurXFilter.blur = this.blurYFilter.blur = e;
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
                },
                enumerable: false,
                configurable: true
              });
            })(r.dJ);
            function y(e, t) {
              y = Object.setPrototypeOf || {
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
              return y(e, t);
            }
            (function (e) {
              function t(n) {
                var r = e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "uniform float radius;\nuniform float strength;\nuniform vec2 center;\nuniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2 dimensions;\n\nvoid main()\n{\n    vec2 coord = vTextureCoord * filterArea.xy;\n    coord -= center * dimensions.xy;\n    float distance = length(coord);\n    if (distance < radius) {\n        float percent = distance / radius;\n        if (strength > 0.0) {\n            coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);\n        } else {\n            coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);\n        }\n    }\n    coord += center * dimensions.xy;\n    coord /= filterArea.xy;\n    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);\n    vec4 color = texture2D(uSampler, clampedCoord);\n    if (coord != clampedCoord) {\n        color *= max(0.0, 1.0 - length(coord - clampedCoord));\n    }\n\n    gl_FragColor = color;\n}\n") || this;
                r.uniforms.dimensions = new Float32Array(2);
                Object.assign(r, t.defaults, n);
                return r;
              }
              (function (e, t) {
                function n() {
                  this.constructor = e;
                }
                y(e, t);
                e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
              })(t, e);
              t.prototype.apply = function (e, t, n, r) {
                var i = t.filterFrame;
                var s = i.width;
                var a = i.height;
                this.uniforms.dimensions[0] = s;
                this.uniforms.dimensions[1] = a;
                e.applyFilter(this, t, n, r);
              };
              Object.defineProperty(t.prototype, "radius", {
                get: function () {
                  return this.uniforms.radius;
                },
                set: function (e) {
                  this.uniforms.radius = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "strength", {
                get: function () {
                  return this.uniforms.strength;
                },
                set: function (e) {
                  this.uniforms.strength = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "center", {
                get: function () {
                  return this.uniforms.center;
                },
                set: function (e) {
                  this.uniforms.center = e;
                },
                enumerable: false,
                configurable: true
              });
              t.defaults = {
                center: [0.5, 0.5],
                radius: 100,
                strength: 1
              };
            })(r.dJ);
            function g(e, t) {
              g = Object.setPrototypeOf || {
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
              return g(e, t);
            }
            (function (e) {
              function t(t, n = false, r = 1) {
                var i = e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform sampler2D colorMap;\nuniform float _mix;\nuniform float _size;\nuniform float _sliceSize;\nuniform float _slicePixelSize;\nuniform float _sliceInnerSize;\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord.xy);\n\n    vec4 adjusted;\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n        float innerWidth = _size - 1.0;\n        float zSlice0 = min(floor(color.b * innerWidth), innerWidth);\n        float zSlice1 = min(zSlice0 + 1.0, innerWidth);\n        float xOffset = _slicePixelSize * 0.5 + color.r * _sliceInnerSize;\n        float s0 = xOffset + (zSlice0 * _sliceSize);\n        float s1 = xOffset + (zSlice1 * _sliceSize);\n        float yOffset = _sliceSize * 0.5 + color.g * (1.0 - _sliceSize);\n        vec4 slice0Color = texture2D(colorMap, vec2(s0,yOffset));\n        vec4 slice1Color = texture2D(colorMap, vec2(s1,yOffset));\n        float zOffset = fract(color.b * innerWidth);\n        adjusted = mix(slice0Color, slice1Color, zOffset);\n\n        color.rgb *= color.a;\n    }\n    gl_FragColor = vec4(mix(color, adjusted, _mix).rgb, color.a);\n\n}") || this;
                i.mix = 1;
                i._size = 0;
                i._sliceSize = 0;
                i._slicePixelSize = 0;
                i._sliceInnerSize = 0;
                i._nearest = false;
                i._scaleMode = null;
                i._colorMap = null;
                i._scaleMode = null;
                i.nearest = n;
                i.mix = r;
                i.colorMap = t;
                return i;
              }
              (function (e, t) {
                function n() {
                  this.constructor = e;
                }
                g(e, t);
                e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
              })(t, e);
              t.prototype.apply = function (e, t, n, r) {
                this.uniforms._mix = this.mix;
                e.applyFilter(this, t, n, r);
              };
              Object.defineProperty(t.prototype, "colorSize", {
                get: function () {
                  return this._size;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "colorMap", {
                get: function () {
                  return this._colorMap;
                },
                set: function (e) {
                  if (e) {
                    if (!(e instanceof r.gP)) {
                      e = r.gP.from(e);
                    }
                    if (e?.baseTexture) {
                      e.baseTexture.scaleMode = this._scaleMode;
                      e.baseTexture.mipmap = p.E8.OFF;
                      this._size = e.height;
                      this._sliceSize = 1 / this._size;
                      this._slicePixelSize = this._sliceSize / this._size;
                      this._sliceInnerSize = this._slicePixelSize * (this._size - 1);
                      this.uniforms._size = this._size;
                      this.uniforms._sliceSize = this._sliceSize;
                      this.uniforms._slicePixelSize = this._slicePixelSize;
                      this.uniforms._sliceInnerSize = this._sliceInnerSize;
                      this.uniforms.colorMap = e;
                    }
                    this._colorMap = e;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "nearest", {
                get: function () {
                  return this._nearest;
                },
                set: function (e) {
                  this._nearest = e;
                  this._scaleMode = e ? p.M6.NEAREST : p.M6.LINEAR;
                  var t = this._colorMap;
                  if (t && t.baseTexture) {
                    t.baseTexture._glTextures = {};
                    t.baseTexture.scaleMode = this._scaleMode;
                    t.baseTexture.mipmap = p.E8.OFF;
                    t._updateID++;
                    t.baseTexture.emit("update", t.baseTexture);
                  }
                },
                enumerable: false,
                configurable: true
              });
              t.prototype.updateColorMap = function () {
                var e = this._colorMap;
                if (e && e.baseTexture) {
                  e._updateID++;
                  e.baseTexture.emit("update", e.baseTexture);
                  this.colorMap = e;
                }
              };
              t.prototype.destroy = function (t = false) {
                if (this._colorMap) {
                  this._colorMap.destroy(t);
                }
                e.prototype.destroy.call(this);
              };
            })(r.dJ);
            var w = n(88604);
            function x(e, t) {
              x = Object.setPrototypeOf || {
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
              return x(e, t);
            }
            (function (e) {
              function t(t = 0, n = 1) {
                var r = e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec3 color;\nuniform float alpha;\n\nvoid main(void) {\n    vec4 currentColor = texture2D(uSampler, vTextureCoord);\n    gl_FragColor = vec4(mix(currentColor.rgb, color.rgb, currentColor.a * alpha), currentColor.a);\n}\n") || this;
                r._color = 0;
                r._alpha = 1;
                r.uniforms.color = new Float32Array(3);
                r.color = t;
                r.alpha = n;
                return r;
              }
              (function (e, t) {
                function n() {
                  this.constructor = e;
                }
                x(e, t);
                e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
              })(t, e);
              Object.defineProperty(t.prototype, "color", {
                get: function () {
                  return this._color;
                },
                set: function (e) {
                  var t = this.uniforms.color;
                  if (typeof e == "number") {
                    (0, w.hex2rgb)(e, t);
                    this._color = e;
                  } else {
                    t[0] = e[0];
                    t[1] = e[1];
                    t[2] = e[2];
                    this._color = (0, w.rgb2hex)(t);
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
                  this.uniforms.alpha = e;
                  this._alpha = e;
                },
                enumerable: false,
                configurable: true
              });
            })(r.dJ);
            function b(e, t) {
              b = Object.setPrototypeOf || {
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
              return b(e, t);
            }
            (function (e) {
              function t(t = 16711680, n = 0, r = 0.4) {
                var i = e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec3 originalColor;\nuniform vec3 newColor;\nuniform float epsilon;\nvoid main(void) {\n    vec4 currentColor = texture2D(uSampler, vTextureCoord);\n    vec3 colorDiff = originalColor - (currentColor.rgb / max(currentColor.a, 0.0000000001));\n    float colorDistance = length(colorDiff);\n    float doReplace = step(colorDistance, epsilon);\n    gl_FragColor = vec4(mix(currentColor.rgb, (newColor + colorDiff) * currentColor.a, doReplace), currentColor.a);\n}\n") || this;
                i._originalColor = 16711680;
                i._newColor = 0;
                i.uniforms.originalColor = new Float32Array(3);
                i.uniforms.newColor = new Float32Array(3);
                i.originalColor = t;
                i.newColor = n;
                i.epsilon = r;
                return i;
              }
              (function (e, t) {
                function n() {
                  this.constructor = e;
                }
                b(e, t);
                e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
              })(t, e);
              Object.defineProperty(t.prototype, "originalColor", {
                get: function () {
                  return this._originalColor;
                },
                set: function (e) {
                  var t = this.uniforms.originalColor;
                  if (typeof e == "number") {
                    (0, w.hex2rgb)(e, t);
                    this._originalColor = e;
                  } else {
                    t[0] = e[0];
                    t[1] = e[1];
                    t[2] = e[2];
                    this._originalColor = (0, w.rgb2hex)(t);
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "newColor", {
                get: function () {
                  return this._newColor;
                },
                set: function (e) {
                  var t = this.uniforms.newColor;
                  if (typeof e == "number") {
                    (0, w.hex2rgb)(e, t);
                    this._newColor = e;
                  } else {
                    t[0] = e[0];
                    t[1] = e[1];
                    t[2] = e[2];
                    this._newColor = (0, w.rgb2hex)(t);
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "epsilon", {
                get: function () {
                  return this.uniforms.epsilon;
                },
                set: function (e) {
                  this.uniforms.epsilon = e;
                },
                enumerable: false,
                configurable: true
              });
            })(r.dJ);
            function T(e, t) {
              T = Object.setPrototypeOf || {
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
              return T(e, t);
            }
            (function (e) {
              function t(t, n = 200, r = 200) {
                var i = e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "precision mediump float;\n\nvarying mediump vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec2 texelSize;\nuniform float matrix[9];\n\nvoid main(void)\n{\n   vec4 c11 = texture2D(uSampler, vTextureCoord - texelSize); // top left\n   vec4 c12 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - texelSize.y)); // top center\n   vec4 c13 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y - texelSize.y)); // top right\n\n   vec4 c21 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y)); // mid left\n   vec4 c22 = texture2D(uSampler, vTextureCoord); // mid center\n   vec4 c23 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y)); // mid right\n\n   vec4 c31 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y + texelSize.y)); // bottom left\n   vec4 c32 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + texelSize.y)); // bottom center\n   vec4 c33 = texture2D(uSampler, vTextureCoord + texelSize); // bottom right\n\n   gl_FragColor =\n       c11 * matrix[0] + c12 * matrix[1] + c13 * matrix[2] +\n       c21 * matrix[3] + c22 * matrix[4] + c23 * matrix[5] +\n       c31 * matrix[6] + c32 * matrix[7] + c33 * matrix[8];\n\n   gl_FragColor.a = c22.a;\n}\n") || this;
                i.uniforms.texelSize = new Float32Array(2);
                i.uniforms.matrix = new Float32Array(9);
                if (t !== undefined) {
                  i.matrix = t;
                }
                i.width = n;
                i.height = r;
                return i;
              }
              (function (e, t) {
                function n() {
                  this.constructor = e;
                }
                T(e, t);
                e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
              })(t, e);
              Object.defineProperty(t.prototype, "matrix", {
                get: function () {
                  return this.uniforms.matrix;
                },
                set: function (e) {
                  var t = this;
                  e.forEach(function (e, n) {
                    t.uniforms.matrix[n] = e;
                  });
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "width", {
                get: function () {
                  return 1 / this.uniforms.texelSize[0];
                },
                set: function (e) {
                  this.uniforms.texelSize[0] = 1 / e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "height", {
                get: function () {
                  return 1 / this.uniforms.texelSize[1];
                },
                set: function (e) {
                  this.uniforms.texelSize[1] = 1 / e;
                },
                enumerable: false,
                configurable: true
              });
            })(r.dJ);
            var A;
            function C(e, t) {
              C = Object.setPrototypeOf || {
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
              return C(e, t);
            }
            (function (e, t) {
              function n() {
                this.constructor = e;
              }
              C(e, t);
              e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
            })(function () {
              return A.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);\n\n    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n\n    if (lum < 1.00)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.75)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.50)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.3)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n}\n") || this;
            }, A = r.dJ);
            function S(e, t) {
              S = Object.setPrototypeOf || {
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
              return S(e, t);
            }
            (function (e) {
              function t(n) {
                var r = e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nconst float SQRT_2 = 1.414213;\n\nconst float light = 1.0;\n\nuniform float curvature;\nuniform float lineWidth;\nuniform float lineContrast;\nuniform bool verticalLine;\nuniform float noise;\nuniform float noiseSize;\n\nuniform float vignetting;\nuniform float vignettingAlpha;\nuniform float vignettingBlur;\n\nuniform float seed;\nuniform float time;\n\nfloat rand(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main(void)\n{\n    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;\n    vec2 dir = vec2(vTextureCoord.xy * filterArea.xy / dimensions - vec2(0.5, 0.5));\n    \n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n    vec3 rgb = gl_FragColor.rgb;\n\n    if (noise > 0.0 && noiseSize > 0.0)\n    {\n        pixelCoord.x = floor(pixelCoord.x / noiseSize);\n        pixelCoord.y = floor(pixelCoord.y / noiseSize);\n        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;\n        rgb += _noise * noise;\n    }\n\n    if (lineWidth > 0.0)\n    {\n        float _c = curvature > 0. ? curvature : 1.;\n        float k = curvature > 0. ?(length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;\n        vec2 uv = dir * k;\n\n        float v = (verticalLine ? uv.x * dimensions.x : uv.y * dimensions.y) * min(1.0, 2.0 / lineWidth ) / _c;\n        float j = 1. + cos(v * 1.2 - time) * 0.5 * lineContrast;\n        rgb *= j;\n        float segment = verticalLine ? mod((dir.x + .5) * dimensions.x, 4.) : mod((dir.y + .5) * dimensions.y, 4.);\n        rgb *= 0.99 + ceil(segment) * 0.015;\n    }\n\n    if (vignetting > 0.0)\n    {\n        float outter = SQRT_2 - vignetting * SQRT_2;\n        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);\n        rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);\n    }\n\n    gl_FragColor.rgb = rgb;\n}\n") || this;
                r.time = 0;
                r.seed = 0;
                r.uniforms.dimensions = new Float32Array(2);
                Object.assign(r, t.defaults, n);
                return r;
              }
              (function (e, t) {
                function n() {
                  this.constructor = e;
                }
                S(e, t);
                e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
              })(t, e);
              t.prototype.apply = function (e, t, n, r) {
                var i = t.filterFrame;
                var s = i.width;
                var a = i.height;
                this.uniforms.dimensions[0] = s;
                this.uniforms.dimensions[1] = a;
                this.uniforms.seed = this.seed;
                this.uniforms.time = this.time;
                e.applyFilter(this, t, n, r);
              };
              Object.defineProperty(t.prototype, "curvature", {
                get: function () {
                  return this.uniforms.curvature;
                },
                set: function (e) {
                  this.uniforms.curvature = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "lineWidth", {
                get: function () {
                  return this.uniforms.lineWidth;
                },
                set: function (e) {
                  this.uniforms.lineWidth = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "lineContrast", {
                get: function () {
                  return this.uniforms.lineContrast;
                },
                set: function (e) {
                  this.uniforms.lineContrast = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "verticalLine", {
                get: function () {
                  return this.uniforms.verticalLine;
                },
                set: function (e) {
                  this.uniforms.verticalLine = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "noise", {
                get: function () {
                  return this.uniforms.noise;
                },
                set: function (e) {
                  this.uniforms.noise = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "noiseSize", {
                get: function () {
                  return this.uniforms.noiseSize;
                },
                set: function (e) {
                  this.uniforms.noiseSize = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "vignetting", {
                get: function () {
                  return this.uniforms.vignetting;
                },
                set: function (e) {
                  this.uniforms.vignetting = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "vignettingAlpha", {
                get: function () {
                  return this.uniforms.vignettingAlpha;
                },
                set: function (e) {
                  this.uniforms.vignettingAlpha = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "vignettingBlur", {
                get: function () {
                  return this.uniforms.vignettingBlur;
                },
                set: function (e) {
                  this.uniforms.vignettingBlur = e;
                },
                enumerable: false,
                configurable: true
              });
              t.defaults = {
                curvature: 1,
                lineWidth: 1,
                lineContrast: 0.25,
                verticalLine: false,
                noise: 0,
                noiseSize: 1,
                seed: 0,
                vignetting: 0.3,
                vignettingAlpha: 1,
                vignettingBlur: 0.3,
                time: 0
              };
            })(r.dJ);
            function E(e, t) {
              E = Object.setPrototypeOf || {
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
              return E(e, t);
            }
            (function (e) {
              function t(t = 1, n = 5) {
                var r = e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform vec4 filterArea;\nuniform sampler2D uSampler;\n\nuniform float angle;\nuniform float scale;\n\nfloat pattern()\n{\n   float s = sin(angle), c = cos(angle);\n   vec2 tex = vTextureCoord * filterArea.xy;\n   vec2 point = vec2(\n       c * tex.x - s * tex.y,\n       s * tex.x + c * tex.y\n   ) * scale;\n   return (sin(point.x) * sin(point.y)) * 4.0;\n}\n\nvoid main()\n{\n   vec4 color = texture2D(uSampler, vTextureCoord);\n   float average = (color.r + color.g + color.b) / 3.0;\n   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);\n}\n") || this;
                r.scale = t;
                r.angle = n;
                return r;
              }
              (function (e, t) {
                function n() {
                  this.constructor = e;
                }
                E(e, t);
                e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
              })(t, e);
              Object.defineProperty(t.prototype, "scale", {
                get: function () {
                  return this.uniforms.scale;
                },
                set: function (e) {
                  this.uniforms.scale = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "angle", {
                get: function () {
                  return this.uniforms.angle;
                },
                set: function (e) {
                  this.uniforms.angle = e;
                },
                enumerable: false,
                configurable: true
              });
            })(r.dJ);
            n(74560);
            function O(e, t) {
              O = Object.setPrototypeOf || {
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
              return O(e, t);
            }
            (function (e) {
              function t(t = 5) {
                var n = e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float strength;\nuniform vec4 filterArea;\n\n\nvoid main(void)\n{\n\tvec2 onePixel = vec2(1.0 / filterArea);\n\n\tvec4 color;\n\n\tcolor.rgb = vec3(0.5);\n\n\tcolor -= texture2D(uSampler, vTextureCoord - onePixel) * strength;\n\tcolor += texture2D(uSampler, vTextureCoord + onePixel) * strength;\n\n\tcolor.rgb = vec3((color.r + color.g + color.b) / 3.0);\n\n\tfloat alpha = texture2D(uSampler, vTextureCoord).a;\n\n\tgl_FragColor = vec4(color.rgb * alpha, alpha);\n}\n") || this;
                n.strength = t;
                return n;
              }
              (function (e, t) {
                function n() {
                  this.constructor = e;
                }
                O(e, t);
                e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
              })(t, e);
              Object.defineProperty(t.prototype, "strength", {
                get: function () {
                  return this.uniforms.strength;
                },
                set: function (e) {
                  this.uniforms.strength = e;
                },
                enumerable: false,
                configurable: true
              });
            })(r.dJ);
            function k(e, t) {
              k = Object.setPrototypeOf || {
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
              return k(e, t);
            }
            (function (e) {
              function t(n) {
                var i = e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "// precision highp float;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2 dimensions;\nuniform float aspect;\n\nuniform sampler2D displacementMap;\nuniform float offset;\nuniform float sinDir;\nuniform float cosDir;\nuniform int fillMode;\n\nuniform float seed;\nuniform vec2 red;\nuniform vec2 green;\nuniform vec2 blue;\n\nconst int TRANSPARENT = 0;\nconst int ORIGINAL = 1;\nconst int LOOP = 2;\nconst int CLAMP = 3;\nconst int MIRROR = 4;\n\nvoid main(void)\n{\n    vec2 coord = (vTextureCoord * filterArea.xy) / dimensions;\n\n    if (coord.x > 1.0 || coord.y > 1.0) {\n        return;\n    }\n\n    float cx = coord.x - 0.5;\n    float cy = (coord.y - 0.5) * aspect;\n    float ny = (-sinDir * cx + cosDir * cy) / aspect + 0.5;\n\n    // displacementMap: repeat\n    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);\n\n    // displacementMap: mirror\n    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);\n\n    vec4 dc = texture2D(displacementMap, vec2(0.5, ny));\n\n    float displacement = (dc.r - dc.g) * (offset / filterArea.x);\n\n    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * aspect);\n\n    if (fillMode == CLAMP) {\n        coord = clamp(coord, filterClamp.xy, filterClamp.zw);\n    } else {\n        if( coord.x > filterClamp.z ) {\n            if (fillMode == TRANSPARENT) {\n                discard;\n            } else if (fillMode == LOOP) {\n                coord.x -= filterClamp.z;\n            } else if (fillMode == MIRROR) {\n                coord.x = filterClamp.z * 2.0 - coord.x;\n            }\n        } else if( coord.x < filterClamp.x ) {\n            if (fillMode == TRANSPARENT) {\n                discard;\n            } else if (fillMode == LOOP) {\n                coord.x += filterClamp.z;\n            } else if (fillMode == MIRROR) {\n                coord.x *= -filterClamp.z;\n            }\n        }\n\n        if( coord.y > filterClamp.w ) {\n            if (fillMode == TRANSPARENT) {\n                discard;\n            } else if (fillMode == LOOP) {\n                coord.y -= filterClamp.w;\n            } else if (fillMode == MIRROR) {\n                coord.y = filterClamp.w * 2.0 - coord.y;\n            }\n        } else if( coord.y < filterClamp.y ) {\n            if (fillMode == TRANSPARENT) {\n                discard;\n            } else if (fillMode == LOOP) {\n                coord.y += filterClamp.w;\n            } else if (fillMode == MIRROR) {\n                coord.y *= -filterClamp.w;\n            }\n        }\n    }\n\n    gl_FragColor.r = texture2D(uSampler, coord + red * (1.0 - seed * 0.4) / filterArea.xy).r;\n    gl_FragColor.g = texture2D(uSampler, coord + green * (1.0 - seed * 0.3) / filterArea.xy).g;\n    gl_FragColor.b = texture2D(uSampler, coord + blue * (1.0 - seed * 0.2) / filterArea.xy).b;\n    gl_FragColor.a = texture2D(uSampler, coord).a;\n}\n") || this;
                i.offset = 100;
                i.fillMode = t.TRANSPARENT;
                i.average = false;
                i.seed = 0;
                i.minSize = 8;
                i.sampleSize = 512;
                i._slices = 0;
                i._offsets = new Float32Array(1);
                i._sizes = new Float32Array(1);
                i._direction = -1;
                i.uniforms.dimensions = new Float32Array(2);
                i._canvas = document.createElement("canvas");
                i._canvas.width = 4;
                i._canvas.height = i.sampleSize;
                i.texture = r.gP.from(i._canvas, {
                  scaleMode: p.M6.NEAREST
                });
                Object.assign(i, t.defaults, n);
                return i;
              }
              (function (e, t) {
                function n() {
                  this.constructor = e;
                }
                k(e, t);
                e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
              })(t, e);
              t.prototype.apply = function (e, t, n, r) {
                var i = t.filterFrame;
                var s = i.width;
                var a = i.height;
                this.uniforms.dimensions[0] = s;
                this.uniforms.dimensions[1] = a;
                this.uniforms.aspect = a / s;
                this.uniforms.seed = this.seed;
                this.uniforms.offset = this.offset;
                this.uniforms.fillMode = this.fillMode;
                e.applyFilter(this, t, n, r);
              };
              t.prototype._randomizeSizes = function () {
                var e = this._sizes;
                var t = this._slices - 1;
                var n = this.sampleSize;
                var r = Math.min(this.minSize / n, 0.9 / this._slices);
                if (this.average) {
                  var i = this._slices;
                  var s = 1;
                  for (var a = 0; a < t; a++) {
                    var o = s / (i - a);
                    var h = Math.max(o * (1 - Math.random() * 0.6), r);
                    e[a] = h;
                    s -= h;
                  }
                  e[t] = s;
                } else {
                  s = 1;
                  var l = Math.sqrt(1 / this._slices);
                  for (a = 0; a < t; a++) {
                    h = Math.max(l * s * Math.random(), r);
                    e[a] = h;
                    s -= h;
                  }
                  e[t] = s;
                }
                this.shuffle();
              };
              t.prototype.shuffle = function () {
                var e = this._sizes;
                for (var t = this._slices - 1; t > 0; t--) {
                  var n = Math.random() * t | 0;
                  var r = e[t];
                  e[t] = e[n];
                  e[n] = r;
                }
              };
              t.prototype._randomizeOffsets = function () {
                for (var e = 0; e < this._slices; e++) {
                  this._offsets[e] = Math.random() * (Math.random() < 0.5 ? -1 : 1);
                }
              };
              t.prototype.refresh = function () {
                this._randomizeSizes();
                this._randomizeOffsets();
                this.redraw();
              };
              t.prototype.redraw = function () {
                var e;
                var t = this.sampleSize;
                var n = this.texture;
                var r = this._canvas.getContext("2d");
                r.clearRect(0, 0, 8, t);
                var i = 0;
                for (var s = 0; s < this._slices; s++) {
                  e = Math.floor(this._offsets[s] * 256);
                  var a = this._sizes[s] * t;
                  var o = e > 0 ? e : 0;
                  var h = e < 0 ? -e : 0;
                  r.fillStyle = "rgba(" + o + ", " + h + ", 0, 1)";
                  r.fillRect(0, i | 0, t, a + 1 | 0);
                  i += a;
                }
                n.baseTexture.update();
                this.uniforms.displacementMap = n;
              };
              Object.defineProperty(t.prototype, "sizes", {
                get: function () {
                  return this._sizes;
                },
                set: function (e) {
                  for (var t = Math.min(this._slices, e.length), n = 0; n < t; n++) {
                    this._sizes[n] = e[n];
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "offsets", {
                get: function () {
                  return this._offsets;
                },
                set: function (e) {
                  for (var t = Math.min(this._slices, e.length), n = 0; n < t; n++) {
                    this._offsets[n] = e[n];
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "slices", {
                get: function () {
                  return this._slices;
                },
                set: function (e) {
                  if (this._slices !== e) {
                    this._slices = e;
                    this.uniforms.slices = e;
                    this._sizes = this.uniforms.slicesWidth = new Float32Array(e);
                    this._offsets = this.uniforms.slicesOffset = new Float32Array(e);
                    this.refresh();
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "direction", {
                get: function () {
                  return this._direction;
                },
                set: function (e) {
                  if (this._direction !== e) {
                    this._direction = e;
                    var t = e * _.Td;
                    this.uniforms.sinDir = Math.sin(t);
                    this.uniforms.cosDir = Math.cos(t);
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "red", {
                get: function () {
                  return this.uniforms.red;
                },
                set: function (e) {
                  this.uniforms.red = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "green", {
                get: function () {
                  return this.uniforms.green;
                },
                set: function (e) {
                  this.uniforms.green = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "blue", {
                get: function () {
                  return this.uniforms.blue;
                },
                set: function (e) {
                  this.uniforms.blue = e;
                },
                enumerable: false,
                configurable: true
              });
              t.prototype.destroy = function () {
                var e;
                if ((e = this.texture) !== null && e !== undefined) {
                  e.destroy(true);
                }
                this.texture = this._canvas = this.red = this.green = this.blue = this._sizes = this._offsets = null;
              };
              t.defaults = {
                slices: 5,
                offset: 100,
                direction: 0,
                fillMode: 0,
                average: false,
                seed: 0,
                red: [0, 0],
                green: [0, 0],
                blue: [0, 0],
                minSize: 8,
                sampleSize: 512
              };
              t.TRANSPARENT = 0;
              t.ORIGINAL = 1;
              t.LOOP = 2;
              t.CLAMP = 3;
              t.MIRROR = 4;
            })(r.dJ);
            n(8844);
            function P(e, t) {
              P = Object.setPrototypeOf || {
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
              return P(e, t);
            }
            (function (e) {
              function t(n) {
                var r = e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nuniform vec2 light;\nuniform bool parallel;\nuniform float aspect;\n\nuniform float gain;\nuniform float lacunarity;\nuniform float time;\nuniform float alpha;\n\n${perlin}\n\nvoid main(void) {\n    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;\n\n    float d;\n\n    if (parallel) {\n        float _cos = light.x;\n        float _sin = light.y;\n        d = (_cos * coord.x) + (_sin * coord.y * aspect);\n    } else {\n        float dx = coord.x - light.x / dimensions.x;\n        float dy = (coord.y - light.y / dimensions.y) * aspect;\n        float dis = sqrt(dx * dx + dy * dy) + 0.00001;\n        d = dy / dis;\n    }\n\n    vec3 dir = vec3(d, d, 0.0);\n\n    float noise = turb(dir + vec3(time, 0.0, 62.1 + time) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);\n    noise = mix(noise, 0.0, 0.3);\n    //fade vertically.\n    vec4 mist = vec4(noise, noise, noise, 1.0) * (1.0 - coord.y);\n    mist.a = 1.0;\n    // apply user alpha\n    mist *= alpha;\n\n    gl_FragColor = texture2D(uSampler, vTextureCoord) + mist;\n\n}\n".replace("${perlin}", "vec3 mod289(vec3 x)\n{\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec4 mod289(vec4 x)\n{\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec4 permute(vec4 x)\n{\n    return mod289(((x * 34.0) + 1.0) * x);\n}\nvec4 taylorInvSqrt(vec4 r)\n{\n    return 1.79284291400159 - 0.85373472095314 * r;\n}\nvec3 fade(vec3 t)\n{\n    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);\n}\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n    Pi0 = mod289(Pi0);\n    Pi1 = mod289(Pi1);\n    vec3 Pf0 = fract(P); // Fractional part for interpolation\n    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n    vec4 iy = vec4(Pi0.yy, Pi1.yy);\n    vec4 iz0 = Pi0.zzzz;\n    vec4 iz1 = Pi1.zzzz;\n    vec4 ixy = permute(permute(ix) + iy);\n    vec4 ixy0 = permute(ixy + iz0);\n    vec4 ixy1 = permute(ixy + iz1);\n    vec4 gx0 = ixy0 * (1.0 / 7.0);\n    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n    gx0 = fract(gx0);\n    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n    vec4 sz0 = step(gz0, vec4(0.0));\n    gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n    gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n    vec4 gx1 = ixy1 * (1.0 / 7.0);\n    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n    gx1 = fract(gx1);\n    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n    vec4 sz1 = step(gz1, vec4(0.0));\n    gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n    gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);\n    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);\n    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);\n    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);\n    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);\n    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);\n    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);\n    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);\n    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n    g000 *= norm0.x;\n    g010 *= norm0.y;\n    g100 *= norm0.z;\n    g110 *= norm0.w;\n    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n    g001 *= norm1.x;\n    g011 *= norm1.y;\n    g101 *= norm1.z;\n    g111 *= norm1.w;\n    float n000 = dot(g000, Pf0);\n    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n    float n111 = dot(g111, Pf1);\n    vec3 fade_xyz = fade(Pf0);\n    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n    return 2.2 * n_xyz;\n}\nfloat turb(vec3 P, vec3 rep, float lacunarity, float gain)\n{\n    float sum = 0.0;\n    float sc = 1.0;\n    float totalgain = 1.0;\n    for (float i = 0.0; i < 6.0; i++)\n    {\n        sum += totalgain * pnoise(P * sc, rep);\n        sc *= lacunarity;\n        totalgain *= gain;\n    }\n    return abs(sum);\n}\n")) || this;
                r.parallel = true;
                r.time = 0;
                r._angle = 0;
                r.uniforms.dimensions = new Float32Array(2);
                var i = Object.assign(t.defaults, n);
                r._angleLight = new _.bR();
                r.angle = i.angle;
                r.gain = i.gain;
                r.lacunarity = i.lacunarity;
                r.alpha = i.alpha;
                r.parallel = i.parallel;
                r.center = i.center;
                r.time = i.time;
                return r;
              }
              (function (e, t) {
                function n() {
                  this.constructor = e;
                }
                P(e, t);
                e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
              })(t, e);
              t.prototype.apply = function (e, t, n, r) {
                var i = t.filterFrame;
                var s = i.width;
                var a = i.height;
                this.uniforms.light = this.parallel ? this._angleLight : this.center;
                this.uniforms.parallel = this.parallel;
                this.uniforms.dimensions[0] = s;
                this.uniforms.dimensions[1] = a;
                this.uniforms.aspect = a / s;
                this.uniforms.time = this.time;
                this.uniforms.alpha = this.alpha;
                e.applyFilter(this, t, n, r);
              };
              Object.defineProperty(t.prototype, "angle", {
                get: function () {
                  return this._angle;
                },
                set: function (e) {
                  this._angle = e;
                  var t = e * _.Td;
                  this._angleLight.x = Math.cos(t);
                  this._angleLight.y = Math.sin(t);
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "gain", {
                get: function () {
                  return this.uniforms.gain;
                },
                set: function (e) {
                  this.uniforms.gain = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "lacunarity", {
                get: function () {
                  return this.uniforms.lacunarity;
                },
                set: function (e) {
                  this.uniforms.lacunarity = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "alpha", {
                get: function () {
                  return this.uniforms.alpha;
                },
                set: function (e) {
                  this.uniforms.alpha = e;
                },
                enumerable: false,
                configurable: true
              });
              t.defaults = {
                angle: 30,
                gain: 0.5,
                lacunarity: 2.5,
                time: 0,
                parallel: true,
                center: [0, 0],
                alpha: 1
              };
            })(r.dJ);
            function M(e, t) {
              M = Object.setPrototypeOf || {
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
              return M(e, t);
            }
            (function (e) {
              function t(t = [0, 0], n = 5, r = 0) {
                var i = e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform vec2 uVelocity;\nuniform int uKernelSize;\nuniform float uOffset;\n\nconst int MAX_KERNEL_SIZE = 2048;\n\n// Notice:\n// the perfect way:\n//    int kernelSize = min(uKernelSize, MAX_KERNELSIZE);\n// BUT in real use-case , uKernelSize < MAX_KERNELSIZE almost always.\n// So use uKernelSize directly.\n\nvoid main(void)\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    if (uKernelSize == 0)\n    {\n        gl_FragColor = color;\n        return;\n    }\n\n    vec2 velocity = uVelocity / filterArea.xy;\n    float offset = -uOffset / length(uVelocity) - 0.5;\n    int k = uKernelSize - 1;\n\n    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {\n        if (i == k) {\n            break;\n        }\n        vec2 bias = velocity * (float(i) / float(k) + offset);\n        color += texture2D(uSampler, vTextureCoord + bias);\n    }\n    gl_FragColor = color / float(uKernelSize);\n}\n") || this;
                i.kernelSize = 5;
                i.uniforms.uVelocity = new Float32Array(2);
                i._velocity = new _.oA(i.velocityChanged, i);
                i.setVelocity(t);
                i.kernelSize = n;
                i.offset = r;
                return i;
              }
              (function (e, t) {
                function n() {
                  this.constructor = e;
                }
                M(e, t);
                e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
              })(t, e);
              t.prototype.apply = function (e, t, n, r) {
                var i = this.velocity;
                var s = i.x;
                var a = i.y;
                this.uniforms.uKernelSize = s !== 0 || a !== 0 ? this.kernelSize : 0;
                e.applyFilter(this, t, n, r);
              };
              Object.defineProperty(t.prototype, "velocity", {
                get: function () {
                  return this._velocity;
                },
                set: function (e) {
                  this.setVelocity(e);
                },
                enumerable: false,
                configurable: true
              });
              t.prototype.setVelocity = function (e) {
                if (Array.isArray(e)) {
                  var t = e[0];
                  var n = e[1];
                  this._velocity.set(t, n);
                } else {
                  this._velocity.copyFrom(e);
                }
              };
              t.prototype.velocityChanged = function () {
                this.uniforms.uVelocity[0] = this._velocity.x;
                this.uniforms.uVelocity[1] = this._velocity.y;
                this.padding = 1 + (Math.max(Math.abs(this._velocity.x), Math.abs(this._velocity.y)) | 0);
              };
              Object.defineProperty(t.prototype, "offset", {
                get: function () {
                  return this.uniforms.uOffset;
                },
                set: function (e) {
                  this.uniforms.uOffset = e;
                },
                enumerable: false,
                configurable: true
              });
            })(r.dJ);
            function R(e, t) {
              R = Object.setPrototypeOf || {
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
              return R(e, t);
            }
            (function (e) {
              function t(t, n = 0.05, r = t.length) {
                var i = e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform float epsilon;\n\nconst int MAX_COLORS = %maxColors%;\n\nuniform vec3 originalColors[MAX_COLORS];\nuniform vec3 targetColors[MAX_COLORS];\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n\n    float alpha = gl_FragColor.a;\n    if (alpha < 0.0001)\n    {\n      return;\n    }\n\n    vec3 color = gl_FragColor.rgb / alpha;\n\n    for(int i = 0; i < MAX_COLORS; i++)\n    {\n      vec3 origColor = originalColors[i];\n      if (origColor.r < 0.0)\n      {\n        break;\n      }\n      vec3 colorDiff = origColor - color;\n      if (length(colorDiff) < epsilon)\n      {\n        vec3 targetColor = targetColors[i];\n        gl_FragColor = vec4((targetColor + colorDiff) * alpha, alpha);\n        return;\n      }\n    }\n}\n".replace(/%maxColors%/g, r.toFixed(0))) || this;
                i._replacements = [];
                i._maxColors = 0;
                i.epsilon = n;
                i._maxColors = r;
                i.uniforms.originalColors = new Float32Array(r * 3);
                i.uniforms.targetColors = new Float32Array(r * 3);
                i.replacements = t;
                return i;
              }
              (function (e, t) {
                function n() {
                  this.constructor = e;
                }
                R(e, t);
                e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
              })(t, e);
              Object.defineProperty(t.prototype, "replacements", {
                get: function () {
                  return this._replacements;
                },
                set: function (e) {
                  var t = this.uniforms.originalColors;
                  var n = this.uniforms.targetColors;
                  var r = e.length;
                  if (r > this._maxColors) {
                    throw new Error("Length of replacements (" + r + ") exceeds the maximum colors length (" + this._maxColors + ")");
                  }
                  t[r * 3] = -1;
                  for (var i = 0; i < r; i++) {
                    var s = e[i];
                    var a = s[0];
                    if (typeof a == "number") {
                      a = (0, w.hex2rgb)(a);
                    } else {
                      s[0] = (0, w.rgb2hex)(a);
                    }
                    t[i * 3] = a[0];
                    t[i * 3 + 1] = a[1];
                    t[i * 3 + 2] = a[2];
                    var o = s[1];
                    if (typeof o == "number") {
                      o = (0, w.hex2rgb)(o);
                    } else {
                      s[1] = (0, w.rgb2hex)(o);
                    }
                    n[i * 3] = o[0];
                    n[i * 3 + 1] = o[1];
                    n[i * 3 + 2] = o[2];
                  }
                  this._replacements = e;
                },
                enumerable: false,
                configurable: true
              });
              t.prototype.refresh = function () {
                this.replacements = this._replacements;
              };
              Object.defineProperty(t.prototype, "maxColors", {
                get: function () {
                  return this._maxColors;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "epsilon", {
                get: function () {
                  return this.uniforms.epsilon;
                },
                set: function (e) {
                  this.uniforms.epsilon = e;
                },
                enumerable: false,
                configurable: true
              });
            })(r.dJ);
            function I(e, t) {
              I = Object.setPrototypeOf || {
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
              return I(e, t);
            }
            (function (e) {
              function t(n, r = 0) {
                var i = e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nuniform float sepia;\nuniform float noise;\nuniform float noiseSize;\nuniform float scratch;\nuniform float scratchDensity;\nuniform float scratchWidth;\nuniform float vignetting;\nuniform float vignettingAlpha;\nuniform float vignettingBlur;\nuniform float seed;\n\nconst float SQRT_2 = 1.414213;\nconst vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);\n\nfloat rand(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvec3 Overlay(vec3 src, vec3 dst)\n{\n    // if (dst <= 0.5) then: 2 * src * dst\n    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)\n    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),\n                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),\n                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));\n}\n\n\nvoid main()\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n    vec3 color = gl_FragColor.rgb;\n\n    if (sepia > 0.0)\n    {\n        float gray = (color.x + color.y + color.z) / 3.0;\n        vec3 grayscale = vec3(gray);\n\n        color = Overlay(SEPIA_RGB, grayscale);\n\n        color = grayscale + sepia * (color - grayscale);\n    }\n\n    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;\n\n    if (vignetting > 0.0)\n    {\n        float outter = SQRT_2 - vignetting * SQRT_2;\n        vec2 dir = vec2(vec2(0.5, 0.5) - coord);\n        dir.y *= dimensions.y / dimensions.x;\n        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);\n        color.rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);\n    }\n\n    if (scratchDensity > seed && scratch != 0.0)\n    {\n        float phase = seed * 256.0;\n        float s = mod(floor(phase), 2.0);\n        float dist = 1.0 / scratchDensity;\n        float d = distance(coord, vec2(seed * dist, abs(s - seed * dist)));\n        if (d < seed * 0.6 + 0.4)\n        {\n            highp float period = scratchDensity * 10.0;\n\n            float xx = coord.x * period + phase;\n            float aa = abs(mod(xx, 0.5) * 4.0);\n            float bb = mod(floor(xx / 0.5), 2.0);\n            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);\n\n            float kk = 2.0 * period;\n            float dw = scratchWidth / dimensions.x * (0.75 + seed);\n            float dh = dw * kk;\n\n            float tine = (yy - (2.0 - dh));\n\n            if (tine > 0.0) {\n                float _sign = sign(scratch);\n\n                tine = s * tine / period + scratch + 0.1;\n                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);\n\n                color.rgb *= tine;\n            }\n        }\n    }\n\n    if (noise > 0.0 && noiseSize > 0.0)\n    {\n        vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;\n        pixelCoord.x = floor(pixelCoord.x / noiseSize);\n        pixelCoord.y = floor(pixelCoord.y / noiseSize);\n        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + seed * 512.0, 1024.0 - seed * 512.0);\n        // float _noise = snoise(d) * 0.5;\n        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;\n        color += _noise * noise;\n    }\n\n    gl_FragColor.rgb = color;\n}\n") || this;
                i.seed = 0;
                i.uniforms.dimensions = new Float32Array(2);
                if (typeof n == "number") {
                  i.seed = n;
                  n = undefined;
                } else {
                  i.seed = r;
                }
                Object.assign(i, t.defaults, n);
                return i;
              }
              (function (e, t) {
                function n() {
                  this.constructor = e;
                }
                I(e, t);
                e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
              })(t, e);
              t.prototype.apply = function (e, t, n, r) {
                this.uniforms.dimensions[0] = t.filterFrame?.width;
                this.uniforms.dimensions[1] = t.filterFrame?.height;
                this.uniforms.seed = this.seed;
                e.applyFilter(this, t, n, r);
              };
              Object.defineProperty(t.prototype, "sepia", {
                get: function () {
                  return this.uniforms.sepia;
                },
                set: function (e) {
                  this.uniforms.sepia = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "noise", {
                get: function () {
                  return this.uniforms.noise;
                },
                set: function (e) {
                  this.uniforms.noise = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "noiseSize", {
                get: function () {
                  return this.uniforms.noiseSize;
                },
                set: function (e) {
                  this.uniforms.noiseSize = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "scratch", {
                get: function () {
                  return this.uniforms.scratch;
                },
                set: function (e) {
                  this.uniforms.scratch = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "scratchDensity", {
                get: function () {
                  return this.uniforms.scratchDensity;
                },
                set: function (e) {
                  this.uniforms.scratchDensity = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "scratchWidth", {
                get: function () {
                  return this.uniforms.scratchWidth;
                },
                set: function (e) {
                  this.uniforms.scratchWidth = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "vignetting", {
                get: function () {
                  return this.uniforms.vignetting;
                },
                set: function (e) {
                  this.uniforms.vignetting = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "vignettingAlpha", {
                get: function () {
                  return this.uniforms.vignettingAlpha;
                },
                set: function (e) {
                  this.uniforms.vignettingAlpha = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "vignettingBlur", {
                get: function () {
                  return this.uniforms.vignettingBlur;
                },
                set: function (e) {
                  this.uniforms.vignettingBlur = e;
                },
                enumerable: false,
                configurable: true
              });
              t.defaults = {
                sepia: 0.3,
                noise: 0.3,
                noiseSize: 1,
                scratch: 0.5,
                scratchDensity: 0.3,
                scratchWidth: 1,
                vignetting: 0.3,
                vignettingAlpha: 1,
                vignettingBlur: 0.3
              };
            })(r.dJ);
            function L(e, t) {
              L = Object.setPrototypeOf || {
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
              return L(e, t);
            }
            (function (e) {
              function t(n = 1, r = 0, i = 0.1) {
                var s = e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 thickness;\nuniform vec4 outlineColor;\nuniform vec4 filterClamp;\n\nconst float DOUBLE_PI = 3.14159265358979323846264 * 2.;\n\nvoid main(void) {\n    vec4 ownColor = texture2D(uSampler, vTextureCoord);\n    vec4 curColor;\n    float maxAlpha = 0.;\n    vec2 displaced;\n    for (float angle = 0.; angle <= DOUBLE_PI; angle += ${angleStep}) {\n        displaced.x = vTextureCoord.x + thickness.x * cos(angle);\n        displaced.y = vTextureCoord.y + thickness.y * sin(angle);\n        curColor = texture2D(uSampler, clamp(displaced, filterClamp.xy, filterClamp.zw));\n        maxAlpha = max(maxAlpha, curColor.a);\n    }\n    float resultAlpha = max(maxAlpha, ownColor.a);\n    gl_FragColor = vec4((ownColor.rgb + outlineColor.rgb * (1. - ownColor.a)) * resultAlpha, resultAlpha);\n}\n".replace(/\$\{angleStep\}/, t.getAngleStep(i))) || this;
                s._thickness = 1;
                s.uniforms.thickness = new Float32Array([0, 0]);
                s.uniforms.outlineColor = new Float32Array([0, 0, 0, 1]);
                Object.assign(s, {
                  thickness: n,
                  color: r,
                  quality: i
                });
                return s;
              }
              (function (e, t) {
                function n() {
                  this.constructor = e;
                }
                L(e, t);
                e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
              })(t, e);
              t.getAngleStep = function (e) {
                var n = Math.max(e * t.MAX_SAMPLES, t.MIN_SAMPLES);
                return (Math.PI * 2 / n).toFixed(7);
              };
              t.prototype.apply = function (e, t, n, r) {
                this.uniforms.thickness[0] = this._thickness / t._frame.width;
                this.uniforms.thickness[1] = this._thickness / t._frame.height;
                e.applyFilter(this, t, n, r);
              };
              Object.defineProperty(t.prototype, "color", {
                get: function () {
                  return (0, w.rgb2hex)(this.uniforms.outlineColor);
                },
                set: function (e) {
                  (0, w.hex2rgb)(e, this.uniforms.outlineColor);
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
                  this.padding = e;
                },
                enumerable: false,
                configurable: true
              });
              t.MIN_SAMPLES = 1;
              t.MAX_SAMPLES = 100;
            })(r.dJ);
            function j(e, t) {
              j = Object.setPrototypeOf || {
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
              return j(e, t);
            }
            (function (e) {
              function t(t = 10) {
                var n = e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform vec2 size;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 pixelate(vec2 coord, vec2 size)\n{\n\treturn floor( coord / size ) * size;\n}\n\nvoid main(void)\n{\n    vec2 coord = mapCoord(vTextureCoord);\n\n    coord = pixelate(coord, size);\n\n    coord = unmapCoord(coord);\n\n    gl_FragColor = texture2D(uSampler, coord);\n}\n") || this;
                n.size = t;
                return n;
              }
              (function (e, t) {
                function n() {
                  this.constructor = e;
                }
                j(e, t);
                e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
              })(t, e);
              Object.defineProperty(t.prototype, "size", {
                get: function () {
                  return this.uniforms.size;
                },
                set: function (e) {
                  if (typeof e == "number") {
                    e = [e, e];
                  }
                  this.uniforms.size = e;
                },
                enumerable: false,
                configurable: true
              });
            })(r.dJ);
            function B(e, t) {
              B = Object.setPrototypeOf || {
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
              return B(e, t);
            }
            (function (e) {
              function t(t = 0, n = [0, 0], r = 5, i = -1) {
                var s = e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform float uRadian;\nuniform vec2 uCenter;\nuniform float uRadius;\nuniform int uKernelSize;\n\nconst int MAX_KERNEL_SIZE = 2048;\n\nvoid main(void)\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    if (uKernelSize == 0)\n    {\n        gl_FragColor = color;\n        return;\n    }\n\n    float aspect = filterArea.y / filterArea.x;\n    vec2 center = uCenter.xy / filterArea.xy;\n    float gradient = uRadius / filterArea.x * 0.3;\n    float radius = uRadius / filterArea.x - gradient * 0.5;\n    int k = uKernelSize - 1;\n\n    vec2 coord = vTextureCoord;\n    vec2 dir = vec2(center - coord);\n    float dist = length(vec2(dir.x, dir.y * aspect));\n\n    float radianStep = uRadian;\n    if (radius >= 0.0 && dist > radius) {\n        float delta = dist - radius;\n        float gap = gradient;\n        float scale = 1.0 - abs(delta / gap);\n        if (scale <= 0.0) {\n            gl_FragColor = color;\n            return;\n        }\n        radianStep *= scale;\n    }\n    radianStep /= float(k);\n\n    float s = sin(radianStep);\n    float c = cos(radianStep);\n    mat2 rotationMatrix = mat2(vec2(c, -s), vec2(s, c));\n\n    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {\n        if (i == k) {\n            break;\n        }\n\n        coord -= center;\n        coord.y *= aspect;\n        coord = rotationMatrix * coord;\n        coord.y /= aspect;\n        coord += center;\n\n        vec4 sample = texture2D(uSampler, coord);\n\n        // switch to pre-multiplied alpha to correctly blur transparent images\n        // sample.rgb *= sample.a;\n\n        color += sample;\n    }\n\n    gl_FragColor = color / float(uKernelSize);\n}\n") || this;
                s._angle = 0;
                s.angle = t;
                s.center = n;
                s.kernelSize = r;
                s.radius = i;
                return s;
              }
              (function (e, t) {
                function n() {
                  this.constructor = e;
                }
                B(e, t);
                e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
              })(t, e);
              t.prototype.apply = function (e, t, n, r) {
                this.uniforms.uKernelSize = this._angle !== 0 ? this.kernelSize : 0;
                e.applyFilter(this, t, n, r);
              };
              Object.defineProperty(t.prototype, "angle", {
                get: function () {
                  return this._angle;
                },
                set: function (e) {
                  this._angle = e;
                  this.uniforms.uRadian = e * Math.PI / 180;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "center", {
                get: function () {
                  return this.uniforms.uCenter;
                },
                set: function (e) {
                  this.uniforms.uCenter = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "radius", {
                get: function () {
                  return this.uniforms.uRadius;
                },
                set: function (e) {
                  if (e < 0 || e === Infinity) {
                    e = -1;
                  }
                  this.uniforms.uRadius = e;
                },
                enumerable: false,
                configurable: true
              });
            })(r.dJ);
            function D(e, t) {
              D = Object.setPrototypeOf || {
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
              return D(e, t);
            }
            (function (e) {
              function t(n) {
                var r = e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2 dimensions;\n\nuniform bool mirror;\nuniform float boundary;\nuniform vec2 amplitude;\nuniform vec2 waveLength;\nuniform vec2 alpha;\nuniform float time;\n\nfloat rand(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main(void)\n{\n    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;\n    vec2 coord = pixelCoord / dimensions;\n\n    if (coord.y < boundary) {\n        gl_FragColor = texture2D(uSampler, vTextureCoord);\n        return;\n    }\n\n    float k = (coord.y - boundary) / (1. - boundary + 0.0001);\n    float areaY = boundary * dimensions.y / filterArea.y;\n    float v = areaY + areaY - vTextureCoord.y;\n    float y = mirror ? v : vTextureCoord.y;\n\n    float _amplitude = ((amplitude.y - amplitude.x) * k + amplitude.x ) / filterArea.x;\n    float _waveLength = ((waveLength.y - waveLength.x) * k + waveLength.x) / filterArea.y;\n    float _alpha = (alpha.y - alpha.x) * k + alpha.x;\n\n    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - time) * _amplitude;\n    x = clamp(x, filterClamp.x, filterClamp.z);\n\n    vec4 color = texture2D(uSampler, vec2(x, y));\n\n    gl_FragColor = color * _alpha;\n}\n") || this;
                r.time = 0;
                r.uniforms.amplitude = new Float32Array(2);
                r.uniforms.waveLength = new Float32Array(2);
                r.uniforms.alpha = new Float32Array(2);
                r.uniforms.dimensions = new Float32Array(2);
                Object.assign(r, t.defaults, n);
                return r;
              }
              (function (e, t) {
                function n() {
                  this.constructor = e;
                }
                D(e, t);
                e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
              })(t, e);
              t.prototype.apply = function (e, t, n, r) {
                this.uniforms.dimensions[0] = t.filterFrame?.width;
                this.uniforms.dimensions[1] = t.filterFrame?.height;
                this.uniforms.time = this.time;
                e.applyFilter(this, t, n, r);
              };
              Object.defineProperty(t.prototype, "mirror", {
                get: function () {
                  return this.uniforms.mirror;
                },
                set: function (e) {
                  this.uniforms.mirror = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "boundary", {
                get: function () {
                  return this.uniforms.boundary;
                },
                set: function (e) {
                  this.uniforms.boundary = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "amplitude", {
                get: function () {
                  return this.uniforms.amplitude;
                },
                set: function (e) {
                  this.uniforms.amplitude[0] = e[0];
                  this.uniforms.amplitude[1] = e[1];
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "waveLength", {
                get: function () {
                  return this.uniforms.waveLength;
                },
                set: function (e) {
                  this.uniforms.waveLength[0] = e[0];
                  this.uniforms.waveLength[1] = e[1];
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "alpha", {
                get: function () {
                  return this.uniforms.alpha;
                },
                set: function (e) {
                  this.uniforms.alpha[0] = e[0];
                  this.uniforms.alpha[1] = e[1];
                },
                enumerable: false,
                configurable: true
              });
              t.defaults = {
                mirror: true,
                boundary: 0.5,
                amplitude: [0, 20],
                waveLength: [30, 100],
                alpha: [1, 1],
                time: 0
              };
            })(r.dJ);
            function F(e, t) {
              F = Object.setPrototypeOf || {
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
              return F(e, t);
            }
            (function (e) {
              function t(t = [-10, 0], n = [0, 10], r = [0, 0]) {
                var i = e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 red;\nuniform vec2 green;\nuniform vec2 blue;\n\nvoid main(void)\n{\n   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/filterArea.xy).r;\n   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/filterArea.xy).g;\n   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/filterArea.xy).b;\n   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;\n}\n") || this;
                i.red = t;
                i.green = n;
                i.blue = r;
                return i;
              }
              (function (e, t) {
                function n() {
                  this.constructor = e;
                }
                F(e, t);
                e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
              })(t, e);
              Object.defineProperty(t.prototype, "red", {
                get: function () {
                  return this.uniforms.red;
                },
                set: function (e) {
                  this.uniforms.red = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "green", {
                get: function () {
                  return this.uniforms.green;
                },
                set: function (e) {
                  this.uniforms.green = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "blue", {
                get: function () {
                  return this.uniforms.blue;
                },
                set: function (e) {
                  this.uniforms.blue = e;
                },
                enumerable: false,
                configurable: true
              });
            })(r.dJ);
            function N(e, t) {
              N = Object.setPrototypeOf || {
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
              return N(e, t);
            }
            (function (e) {
              function t(n = [0, 0], r, i = 0) {
                var s = e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\n\nuniform vec2 center;\n\nuniform float amplitude;\nuniform float wavelength;\n// uniform float power;\nuniform float brightness;\nuniform float speed;\nuniform float radius;\n\nuniform float time;\n\nconst float PI = 3.14159;\n\nvoid main()\n{\n    float halfWavelength = wavelength * 0.5 / filterArea.x;\n    float maxRadius = radius / filterArea.x;\n    float currentRadius = time * speed / filterArea.x;\n\n    float fade = 1.0;\n\n    if (maxRadius > 0.0) {\n        if (currentRadius > maxRadius) {\n            gl_FragColor = texture2D(uSampler, vTextureCoord);\n            return;\n        }\n        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);\n    }\n\n    vec2 dir = vec2(vTextureCoord - center / filterArea.xy);\n    dir.y *= filterArea.y / filterArea.x;\n    float dist = length(dir);\n\n    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {\n        gl_FragColor = texture2D(uSampler, vTextureCoord);\n        return;\n    }\n\n    vec2 diffUV = normalize(dir);\n\n    float diff = (dist - currentRadius) / halfWavelength;\n\n    float p = 1.0 - pow(abs(diff), 2.0);\n\n    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );\n    float powDiff = 1.25 * sin(diff * PI) * p * ( amplitude * fade );\n\n    vec2 offset = diffUV * powDiff / filterArea.xy;\n\n    // Do clamp :\n    vec2 coord = vTextureCoord + offset;\n    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);\n    vec4 color = texture2D(uSampler, clampedCoord);\n    if (coord != clampedCoord) {\n        color *= max(0.0, 1.0 - length(coord - clampedCoord));\n    }\n\n    // No clamp :\n    // gl_FragColor = texture2D(uSampler, vTextureCoord + offset);\n\n    color.rgb *= 1.0 + (brightness - 1.0) * p * fade;\n\n    gl_FragColor = color;\n}\n") || this;
                s.center = n;
                Object.assign(s, t.defaults, r);
                s.time = i;
                return s;
              }
              (function (e, t) {
                function n() {
                  this.constructor = e;
                }
                N(e, t);
                e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
              })(t, e);
              t.prototype.apply = function (e, t, n, r) {
                this.uniforms.time = this.time;
                e.applyFilter(this, t, n, r);
              };
              Object.defineProperty(t.prototype, "center", {
                get: function () {
                  return this.uniforms.center;
                },
                set: function (e) {
                  this.uniforms.center = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "amplitude", {
                get: function () {
                  return this.uniforms.amplitude;
                },
                set: function (e) {
                  this.uniforms.amplitude = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "wavelength", {
                get: function () {
                  return this.uniforms.wavelength;
                },
                set: function (e) {
                  this.uniforms.wavelength = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "brightness", {
                get: function () {
                  return this.uniforms.brightness;
                },
                set: function (e) {
                  this.uniforms.brightness = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "speed", {
                get: function () {
                  return this.uniforms.speed;
                },
                set: function (e) {
                  this.uniforms.speed = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "radius", {
                get: function () {
                  return this.uniforms.radius;
                },
                set: function (e) {
                  this.uniforms.radius = e;
                },
                enumerable: false,
                configurable: true
              });
              t.defaults = {
                amplitude: 30,
                wavelength: 160,
                brightness: 1,
                speed: 500,
                radius: -1
              };
            })(r.dJ);
            function G(e, t) {
              G = Object.setPrototypeOf || {
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
              return G(e, t);
            }
            (function (e) {
              function t(t, n = 0, r = 1) {
                var i = e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform sampler2D uLightmap;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\nuniform vec4 ambientColor;\nvoid main() {\n    vec4 diffuseColor = texture2D(uSampler, vTextureCoord);\n    vec2 lightCoord = (vTextureCoord * filterArea.xy) / dimensions;\n    vec4 light = texture2D(uLightmap, lightCoord);\n    vec3 ambient = ambientColor.rgb * ambientColor.a;\n    vec3 intensity = ambient + light.rgb;\n    vec3 finalColor = diffuseColor.rgb * intensity;\n    gl_FragColor = vec4(finalColor, diffuseColor.a);\n}\n") || this;
                i._color = 0;
                i.uniforms.dimensions = new Float32Array(2);
                i.uniforms.ambientColor = new Float32Array([0, 0, 0, r]);
                i.texture = t;
                i.color = n;
                return i;
              }
              (function (e, t) {
                function n() {
                  this.constructor = e;
                }
                G(e, t);
                e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
              })(t, e);
              t.prototype.apply = function (e, t, n, r) {
                this.uniforms.dimensions[0] = t.filterFrame?.width;
                this.uniforms.dimensions[1] = t.filterFrame?.height;
                e.applyFilter(this, t, n, r);
              };
              Object.defineProperty(t.prototype, "texture", {
                get: function () {
                  return this.uniforms.uLightmap;
                },
                set: function (e) {
                  this.uniforms.uLightmap = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "color", {
                get: function () {
                  return this._color;
                },
                set: function (e) {
                  var t = this.uniforms.ambientColor;
                  if (typeof e == "number") {
                    (0, w.hex2rgb)(e, t);
                    this._color = e;
                  } else {
                    t[0] = e[0];
                    t[1] = e[1];
                    t[2] = e[2];
                    t[3] = e[3];
                    this._color = (0, w.rgb2hex)(t);
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "alpha", {
                get: function () {
                  return this.uniforms.ambientColor[3];
                },
                set: function (e) {
                  this.uniforms.ambientColor[3] = e;
                },
                enumerable: false,
                configurable: true
              });
            })(r.dJ);
            function U(e, t) {
              U = Object.setPrototypeOf || {
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
              return U(e, t);
            }
            function V(e, t) {
              function n() {
                this.constructor = e;
              }
              U(e, t);
              e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
            }
            var H = function (e) {
              function t(t = 100, n = 600, r, i) {
                var s = e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float blur;\nuniform float gradientBlur;\nuniform vec2 start;\nuniform vec2 end;\nuniform vec2 delta;\nuniform vec2 texSize;\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n    vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));\n    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize - start, normal)) / gradientBlur) * blur;\n\n    for (float t = -30.0; t <= 30.0; t++)\n    {\n        float percent = (t + offset - 0.5) / 30.0;\n        float weight = 1.0 - abs(percent);\n        vec4 sample = texture2D(uSampler, vTextureCoord + delta / texSize * percent * radius);\n        sample.rgb *= sample.a;\n        color += sample * weight;\n        total += weight;\n    }\n\n    color /= total;\n    color.rgb /= color.a + 0.00001;\n\n    gl_FragColor = color;\n}\n") || this;
                s.uniforms.blur = t;
                s.uniforms.gradientBlur = n;
                s.uniforms.start = r || new _.bR(0, window.innerHeight / 2);
                s.uniforms.end = i || new _.bR(600, window.innerHeight / 2);
                s.uniforms.delta = new _.bR(30, 30);
                s.uniforms.texSize = new _.bR(window.innerWidth, window.innerHeight);
                s.updateDelta();
                return s;
              }
              V(t, e);
              t.prototype.updateDelta = function () {
                this.uniforms.delta.x = 0;
                this.uniforms.delta.y = 0;
              };
              Object.defineProperty(t.prototype, "blur", {
                get: function () {
                  return this.uniforms.blur;
                },
                set: function (e) {
                  this.uniforms.blur = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "gradientBlur", {
                get: function () {
                  return this.uniforms.gradientBlur;
                },
                set: function (e) {
                  this.uniforms.gradientBlur = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "start", {
                get: function () {
                  return this.uniforms.start;
                },
                set: function (e) {
                  this.uniforms.start = e;
                  this.updateDelta();
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "end", {
                get: function () {
                  return this.uniforms.end;
                },
                set: function (e) {
                  this.uniforms.end = e;
                  this.updateDelta();
                },
                enumerable: false,
                configurable: true
              });
              return t;
            }(r.dJ);
            var z = function (e) {
              function t() {
                return e !== null && e.apply(this, arguments) || this;
              }
              V(t, e);
              t.prototype.updateDelta = function () {
                var e = this.uniforms.end.x - this.uniforms.start.x;
                var t = this.uniforms.end.y - this.uniforms.start.y;
                var n = Math.sqrt(e * e + t * t);
                this.uniforms.delta.x = e / n;
                this.uniforms.delta.y = t / n;
              };
              return t;
            }(H);
            var W = function (e) {
              function t() {
                return e !== null && e.apply(this, arguments) || this;
              }
              V(t, e);
              t.prototype.updateDelta = function () {
                var e = this.uniforms.end.x - this.uniforms.start.x;
                var t = this.uniforms.end.y - this.uniforms.start.y;
                var n = Math.sqrt(e * e + t * t);
                this.uniforms.delta.x = -t / n;
                this.uniforms.delta.y = e / n;
              };
              return t;
            }(H);
            (function (e) {
              function t(t = 100, n = 600, r, i) {
                var s = e.call(this) || this;
                s.tiltShiftXFilter = new z(t, n, r, i);
                s.tiltShiftYFilter = new W(t, n, r, i);
                return s;
              }
              V(t, e);
              t.prototype.apply = function (e, t, n, r) {
                var i = e.getFilterTexture();
                this.tiltShiftXFilter.apply(e, t, i, 1);
                this.tiltShiftYFilter.apply(e, i, n, r);
                e.returnFilterTexture(i);
              };
              Object.defineProperty(t.prototype, "blur", {
                get: function () {
                  return this.tiltShiftXFilter.blur;
                },
                set: function (e) {
                  this.tiltShiftXFilter.blur = this.tiltShiftYFilter.blur = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "gradientBlur", {
                get: function () {
                  return this.tiltShiftXFilter.gradientBlur;
                },
                set: function (e) {
                  this.tiltShiftXFilter.gradientBlur = this.tiltShiftYFilter.gradientBlur = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "start", {
                get: function () {
                  return this.tiltShiftXFilter.start;
                },
                set: function (e) {
                  this.tiltShiftXFilter.start = this.tiltShiftYFilter.start = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "end", {
                get: function () {
                  return this.tiltShiftXFilter.end;
                },
                set: function (e) {
                  this.tiltShiftXFilter.end = this.tiltShiftYFilter.end = e;
                },
                enumerable: false,
                configurable: true
              });
            })(r.dJ);
            function X(e, t) {
              X = Object.setPrototypeOf || {
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
              return X(e, t);
            }
            (function (e) {
              function t(n) {
                var r = e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float radius;\nuniform float angle;\nuniform vec2 offset;\nuniform vec4 filterArea;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 twist(vec2 coord)\n{\n    coord -= offset;\n\n    float dist = length(coord);\n\n    if (dist < radius)\n    {\n        float ratioDist = (radius - dist) / radius;\n        float angleMod = ratioDist * ratioDist * angle;\n        float s = sin(angleMod);\n        float c = cos(angleMod);\n        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);\n    }\n\n    coord += offset;\n\n    return coord;\n}\n\nvoid main(void)\n{\n\n    vec2 coord = mapCoord(vTextureCoord);\n\n    coord = twist(coord);\n\n    coord = unmapCoord(coord);\n\n    gl_FragColor = texture2D(uSampler, coord );\n\n}\n") || this;
                Object.assign(r, t.defaults, n);
                return r;
              }
              (function (e, t) {
                function n() {
                  this.constructor = e;
                }
                X(e, t);
                e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
              })(t, e);
              Object.defineProperty(t.prototype, "offset", {
                get: function () {
                  return this.uniforms.offset;
                },
                set: function (e) {
                  this.uniforms.offset = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "radius", {
                get: function () {
                  return this.uniforms.radius;
                },
                set: function (e) {
                  this.uniforms.radius = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "angle", {
                get: function () {
                  return this.uniforms.angle;
                },
                set: function (e) {
                  this.uniforms.angle = e;
                },
                enumerable: false,
                configurable: true
              });
              t.defaults = {
                radius: 200,
                angle: 4,
                padding: 20,
                offset: new _.bR()
              };
            })(r.dJ);
            function Y(e, t) {
              Y = Object.setPrototypeOf || {
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
              return Y(e, t);
            }
            (function (e) {
              function t(n) {
                var r;
                var i = Object.assign(t.defaults, n);
                var s = i.maxKernelSize;
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
                }(i, ["maxKernelSize"]);
                r = e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform vec2 uCenter;\nuniform float uStrength;\nuniform float uInnerRadius;\nuniform float uRadius;\n\nconst float MAX_KERNEL_SIZE = ${maxKernelSize};\n\n// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/\nhighp float rand(vec2 co, float seed) {\n    const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n    highp float dt = dot(co + seed, vec2(a, b)), sn = mod(dt, 3.14159);\n    return fract(sin(sn) * c + seed);\n}\n\nvoid main() {\n\n    float minGradient = uInnerRadius * 0.3;\n    float innerRadius = (uInnerRadius + minGradient * 0.5) / filterArea.x;\n\n    float gradient = uRadius * 0.3;\n    float radius = (uRadius - gradient * 0.5) / filterArea.x;\n\n    float countLimit = MAX_KERNEL_SIZE;\n\n    vec2 dir = vec2(uCenter.xy / filterArea.xy - vTextureCoord);\n    float dist = length(vec2(dir.x, dir.y * filterArea.y / filterArea.x));\n\n    float strength = uStrength;\n\n    float delta = 0.0;\n    float gap;\n    if (dist < innerRadius) {\n        delta = innerRadius - dist;\n        gap = minGradient;\n    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity\n        delta = dist - radius;\n        gap = gradient;\n    }\n\n    if (delta > 0.0) {\n        float normalCount = gap / filterArea.x;\n        delta = (normalCount - delta) / normalCount;\n        countLimit *= delta;\n        strength *= delta;\n        if (countLimit < 1.0)\n        {\n            gl_FragColor = texture2D(uSampler, vTextureCoord);\n            return;\n        }\n    }\n\n    // randomize the lookup values to hide the fixed number of samples\n    float offset = rand(vTextureCoord, 0.0);\n\n    float total = 0.0;\n    vec4 color = vec4(0.0);\n\n    dir *= strength;\n\n    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {\n        float percent = (t + offset) / MAX_KERNEL_SIZE;\n        float weight = 4.0 * (percent - percent * percent);\n        vec2 p = vTextureCoord + dir * percent;\n        vec4 sample = texture2D(uSampler, p);\n\n        // switch to pre-multiplied alpha to correctly blur transparent images\n        // sample.rgb *= sample.a;\n\n        color += sample * weight;\n        total += weight;\n\n        if (t > countLimit){\n            break;\n        }\n    }\n\n    color /= total;\n    // switch back from pre-multiplied alpha\n    // color.rgb /= color.a + 0.00001;\n\n    gl_FragColor = color;\n}\n".replace("${maxKernelSize}", s.toFixed(1))) || this;
                Object.assign(r, a);
                return r;
              }
              (function (e, t) {
                function n() {
                  this.constructor = e;
                }
                Y(e, t);
                e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
              })(t, e);
              Object.defineProperty(t.prototype, "center", {
                get: function () {
                  return this.uniforms.uCenter;
                },
                set: function (e) {
                  this.uniforms.uCenter = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "strength", {
                get: function () {
                  return this.uniforms.uStrength;
                },
                set: function (e) {
                  this.uniforms.uStrength = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "innerRadius", {
                get: function () {
                  return this.uniforms.uInnerRadius;
                },
                set: function (e) {
                  this.uniforms.uInnerRadius = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "radius", {
                get: function () {
                  return this.uniforms.uRadius;
                },
                set: function (e) {
                  if (e < 0 || e === Infinity) {
                    e = -1;
                  }
                  this.uniforms.uRadius = e;
                },
                enumerable: false,
                configurable: true
              });
              t.defaults = {
                strength: 0.1,
                center: [0, 0],
                innerRadius: 0,
                radius: -1,
                maxKernelSize: 32
              };
            })(r.dJ);
          }
    });
})();
