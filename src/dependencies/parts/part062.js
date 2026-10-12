(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        80432(e, t, n) {
            "use strict";
        
            n.d(t, {
              Q: () => a
            });
            var r = n(97831);
            var i = n(38499);
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
              function t(t = 4, n = 3, r = false) {
                var s = e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", r ? "\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 uOffset;\nuniform vec4 filterClamp;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample top right pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample bottom right pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample bottom left pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Average\n    color *= 0.25;\n\n    gl_FragColor = color;\n}\n" : "\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 uOffset;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample top right pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample bottom right pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Sample bottom left pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Average\n    color *= 0.25;\n\n    gl_FragColor = color;\n}") || this;
                s._kernels = [];
                s._blur = 4;
                s._quality = 3;
                s.uniforms.uOffset = new Float32Array(2);
                s._pixelSize = new i.bR();
                s.pixelSize = 1;
                s._clamp = r;
                if (Array.isArray(t)) {
                  s.kernels = t;
                } else {
                  s._blur = t;
                  s.quality = n;
                }
                return s;
              }
              (function (e, t) {
                function n() {
                  this.constructor = e;
                }
                s(e, t);
                e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
              })(t, e);
              t.prototype.apply = function (e, t, n, r) {
                var i;
                var s = this._pixelSize.x / t._frame.width;
                var a = this._pixelSize.y / t._frame.height;
                if (this._quality === 1 || this._blur === 0) {
                  i = this._kernels[0] + 0.5;
                  this.uniforms.uOffset[0] = i * s;
                  this.uniforms.uOffset[1] = i * a;
                  e.applyFilter(this, t, n, r);
                } else {
                  var o = e.getFilterTexture();
                  var h = t;
                  var l = o;
                  var d = undefined;
                  for (var c = this._quality - 1, u = 0; u < c; u++) {
                    i = this._kernels[u] + 0.5;
                    this.uniforms.uOffset[0] = i * s;
                    this.uniforms.uOffset[1] = i * a;
                    e.applyFilter(this, h, l, 1);
                    d = h;
                    h = l;
                    l = d;
                  }
                  i = this._kernels[c] + 0.5;
                  this.uniforms.uOffset[0] = i * s;
                  this.uniforms.uOffset[1] = i * a;
                  e.applyFilter(this, h, n, r);
                  e.returnFilterTexture(o);
                }
              };
              t.prototype._updatePadding = function () {
                this.padding = Math.ceil(this._kernels.reduce(function (e, t) {
                  return e + t + 0.5;
                }, 0));
              };
              t.prototype._generateKernels = function () {
                var e = this._blur;
                var t = this._quality;
                var n = [e];
                if (e > 0) {
                  var r = e;
                  var i = e / t;
                  for (var s = 1; s < t; s++) {
                    r -= i;
                    n.push(r);
                  }
                }
                this._kernels = n;
                this._updatePadding();
              };
              Object.defineProperty(t.prototype, "kernels", {
                get: function () {
                  return this._kernels;
                },
                set: function (e) {
                  if (Array.isArray(e) && e.length > 0) {
                    this._kernels = e;
                    this._quality = e.length;
                    this._blur = Math.max.apply(Math, e);
                  } else {
                    this._kernels = [0];
                    this._quality = 1;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "clamp", {
                get: function () {
                  return this._clamp;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "pixelSize", {
                get: function () {
                  return this._pixelSize;
                },
                set: function (e) {
                  if (typeof e == "number") {
                    this._pixelSize.x = e;
                    this._pixelSize.y = e;
                  } else if (Array.isArray(e)) {
                    this._pixelSize.x = e[0];
                    this._pixelSize.y = e[1];
                  } else if (e instanceof i.bR) {
                    this._pixelSize.x = e.x;
                    this._pixelSize.y = e.y;
                  } else {
                    this._pixelSize.x = 1;
                    this._pixelSize.y = 1;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "quality", {
                get: function () {
                  return this._quality;
                },
                set: function (e) {
                  this._quality = Math.max(1, Math.round(e));
                  this._generateKernels();
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "blur", {
                get: function () {
                  return this._blur;
                },
                set: function (e) {
                  this._blur = e;
                  this._generateKernels();
                },
                enumerable: false,
                configurable: true
              });
              return t;
            }(r.dJ);
          }
    });
})();
