(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        24184(e, t, n) {
            "use strict";
        
            n.d(t, {
              q: () => x
            });
            n(62010);
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(26099);
            n(2892);
            n(34782);
            n(23418);
            n(47764);
            n(2259);
            n(23792);
            n(62953);
            var r = n(46682);
            var i = n(4971);
            var s = n(28242);
            var a = n(44093);
            var o = n(91909);
            var h = n(84647);
            function l(e) {
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
            function d(e, t) {
              d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return d(e, t);
            }
            var c = function (e) {
              function t() {
                var n;
                (n = e.call(this, o, "uniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nvoid main() {\n    float a = texture2D(uSampler, vTextureCoord).a;\n    gl_FragColor = vec4(a, a, a, a);\n}\n") || this).blendMode = t.getBlendModeId();
                return n;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              d(n, r);
              t.getBlendModeId = function () {
                if (t._blendModeId === -1) {
                  var e = h.BI.main.renderer.gl;
                  var n = h.BI.main.renderer.state.blendModes;
                  t._blendModeId = n.push([e.ONE_MINUS_DST_COLOR, e.ONE_MINUS_SRC_ALPHA, e.ZERO, e.ONE]) - 1;
                }
                return t._blendModeId;
              };
              return function (e, t, n) {
                if (n) {
                  (function (e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var r = t[n];
                      r.enumerable = r.enumerable || false;
                      r.configurable = true;
                      if ("value" in r) {
                        r.writable = true;
                      }
                      Object.defineProperty(e, l(r.key), r);
                    }
                  })(e, n);
                }
                Object.defineProperty(e, "prototype", {
                  writable: false
                });
                return e;
              }(t, 0, [{
                key: "instance",
                get: function () {
                  t._instance ||= new t();
                  return t._instance;
                }
              }]);
            }(r.dJT);
            function u(e) {
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
            function p(e, t) {
              p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return p(e, t);
            }
            c._instance = null;
            c._blendModeId = -1;
            n(34594);
            n(81630);
            n(72170);
            n(75044);
            n(69539);
            n(31694);
            n(89955);
            n(33206);
            n(44496);
            n(66651);
            n(12887);
            n(19369);
            n(66812);
            n(8995);
            n(31575);
            n(36072);
            n(88747);
            n(28845);
            n(29423);
            n(57301);
            n(373);
            n(86614);
            n(41405);
            n(33684);
            var m = function (e) {
              function t() {
                var t;
                (t = e.call(this, undefined, "uniform sampler2D uSampler;\nuniform sampler2D uBackground;\nuniform bool uFlipY;\nuniform vec2 uBgScale;\nvarying vec2 vTextureCoord;\n\nvoid main() {\n    float alpha = texture2D(uSampler, vTextureCoord).a;\n    if (alpha < 0.004) { gl_FragColor = vec4(0.0); return; }\n\n    // vTextureCoord maps to input texture UV space.\n    // Rescale to 0..1 for the background texture.\n    vec2 bgCoord = vTextureCoord * uBgScale;\n    if (uFlipY) bgCoord.y = 1.0 - bgCoord.y;\n\n    vec3 bgColor = texture2D(uBackground, bgCoord).rgb;\n\n    float luminance = dot(bgColor, vec3(0.299, 0.587, 0.114));\n    float value = luminance >= 0.5 ? 0.0 : 1.0;\n\n    gl_FragColor = vec4(value * alpha, value * alpha, value * alpha, alpha);\n}\n") || this)._bgTexture = null;
                t._bgWidth = 0;
                t._bgHeight = 0;
                t._pbo = null;
                t._pboSize = 0;
                t.blendMode = r.B9A.NORMAL;
                t.uniforms.uBackground = null;
                t.uniforms.uFlipY = false;
                t.uniforms.uBgScale = new Float32Array([1, 1]);
                return t;
              }
              var n;
              var i;
              i = e;
              (n = t).prototype = Object.create(i.prototype);
              n.prototype.constructor = n;
              p(n, i);
              t.prototype.apply = function (e, t, n, i, s) {
                var a = h.BI.main.renderer;
                var o = a.gl;
                var l = s.sourceFrame;
                var d = a.resolution;
                var c = Math.round(l.x * d);
                var u = Math.round(l.y * d);
                var p = Math.round(l.width * d);
                var m = Math.round(l.height * d);
                var f = c;
                var _ = u;
                if (!n) {
                  _ = o.drawingBufferHeight - u - m;
                }
                if (n) {
                  var v = n.baseTexture.framebuffer.glFramebuffers[a.CONTEXT_UID];
                  o.bindFramebuffer(o.FRAMEBUFFER, v.framebuffer);
                } else {
                  o.bindFramebuffer(o.FRAMEBUFFER, null);
                }
                o.activeTexture(o.TEXTURE0);
                o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL, false);
                o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
                if (this._bgTexture) {
                  o.bindTexture(o.TEXTURE_2D, this._bgTexture);
                  if (p !== this._bgWidth || m !== this._bgHeight) {
                    o.texImage2D(o.TEXTURE_2D, 0, o.RGBA, p, m, 0, o.RGBA, o.UNSIGNED_BYTE, null);
                    this._bgWidth = p;
                    this._bgHeight = m;
                  }
                } else {
                  this._bgTexture = o.createTexture();
                  o.bindTexture(o.TEXTURE_2D, this._bgTexture);
                  o.texParameteri(o.TEXTURE_2D, o.TEXTURE_MIN_FILTER, o.LINEAR);
                  o.texParameteri(o.TEXTURE_2D, o.TEXTURE_MAG_FILTER, o.LINEAR);
                  o.texParameteri(o.TEXTURE_2D, o.TEXTURE_WRAP_S, o.CLAMP_TO_EDGE);
                  o.texParameteri(o.TEXTURE_2D, o.TEXTURE_WRAP_T, o.CLAMP_TO_EDGE);
                  o.texImage2D(o.TEXTURE_2D, 0, o.RGBA, p, m, 0, o.RGBA, o.UNSIGNED_BYTE, null);
                  this._bgWidth = p;
                  this._bgHeight = m;
                }
                var y = p * m * 4;
                this._pbo ||= o.createBuffer();
                o.bindBuffer(o.PIXEL_PACK_BUFFER, this._pbo);
                if (y > this._pboSize) {
                  o.bufferData(o.PIXEL_PACK_BUFFER, y, o.STREAM_COPY);
                  this._pboSize = y;
                }
                o.readPixels(f, _, p, m, o.RGBA, o.UNSIGNED_BYTE, 0);
                o.bindBuffer(o.PIXEL_PACK_BUFFER, null);
                o.bindBuffer(o.PIXEL_UNPACK_BUFFER, this._pbo);
                o.texSubImage2D(o.TEXTURE_2D, 0, 0, 0, p, m, o.RGBA, o.UNSIGNED_BYTE, 0);
                o.bindBuffer(o.PIXEL_UNPACK_BUFFER, null);
                this.uniforms.uFlipY = !n;
                var g = s.destinationFrame;
                this.uniforms.uBgScale[0] = g.width / l.width;
                this.uniforms.uBgScale[1] = g.height / l.height;
                a.texture.boundTextures[0] = null;
                e.bindAndClear(n, i);
                this.uniforms.uSampler = t;
                this.uniforms.filterGlobals = e.globalUniforms;
                a.state.set(this.state);
                a.shader.bind(this);
                var w = this.program.glPrograms[a.CONTEXT_UID].uniformData.uBackground.value;
                o.activeTexture(o.TEXTURE0 + w);
                o.bindTexture(o.TEXTURE_2D, this._bgTexture);
                a.geometry.bind(e.quad);
                a.geometry.draw(r._46.TRIANGLE_STRIP);
                o.bindTexture(o.TEXTURE_2D, null);
                a.texture.boundTextures[w] = null;
                if (w !== 0) {
                  o.activeTexture(o.TEXTURE0);
                }
              };
              return function (e, t, n) {
                if (n) {
                  (function (e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var r = t[n];
                      r.enumerable = r.enumerable || false;
                      r.configurable = true;
                      if ("value" in r) {
                        r.writable = true;
                      }
                      Object.defineProperty(e, u(r.key), r);
                    }
                  })(e, n);
                }
                Object.defineProperty(e, "prototype", {
                  writable: false
                });
                return e;
              }(t, 0, [{
                key: "instance",
                get: function () {
                  t._instance ||= new t();
                  return t._instance;
                }
              }]);
            }(r.dJT);
            function f(e, t = false) {
              var n = t ? e.pixiSprite.getLocalBounds() : e.pixiSprite.getBounds();
              var s = i.M_.fromPixi(n);
              var a = [s.left, s.top, s.right, s.top, s.right, s.bottom, s.left, s.bottom];
              if (t) {
                var o = new r.bRX();
                for (var h = 0; h < a.length; h += 2) {
                  o.x = a[h];
                  o.y = a[h + 1];
                  e.pixiSprite.worldTransform.apply(o, o);
                  a[h] = o.x;
                  a[h + 1] = o.y;
                }
              }
              return a;
            }
            m._instance = null;
            var _ = n(7395);
            function v(e, t) {
              var n = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
              if (n) {
                return (n = n.call(e)).next.bind(n);
              }
              if (Array.isArray(e) || (n = function (e, t) {
                if (e) {
                  if (typeof e == "string") {
                    return y(e, t);
                  }
                  var n = {}.toString.call(e).slice(8, -1);
                  if (n === "Object" && e.constructor) {
                    n = e.constructor.name;
                  }
                  if (n === "Map" || n === "Set") {
                    return Array.from(e);
                  } else if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
                    return y(e, t);
                  } else {
                    return undefined;
                  }
                }
              }(e)) || t && e && typeof e.length == "number") {
                if (n) {
                  e = n;
                }
                var r = 0;
                return function () {
                  if (r >= e.length) {
                    return {
                      done: true
                    };
                  } else {
                    return {
                      done: false,
                      value: e[r++]
                    };
                  }
                };
              }
              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function y(e, t) {
              if (t == null || t > e.length) {
                t = e.length;
              }
              for (var n = 0, r = Array(t); n < t; n++) {
                r[n] = e[n];
              }
              return r;
            }
            function g(e) {
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
            function w(e, t) {
              w = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return w(e, t);
            }
            var x = function (e) {
              function t(t) {
                var n;
                (n = e.call(this) || this).name = "";
                n.parent = null;
                n.root = null;
                n.stage = null;
                n.stageMouseX = 0;
                n.stageMouseY = 0;
                n.dirty = false;
                n._blendMode = i.Nx.NORMAL;
                n._scale9Grid = null;
                n._tint = -1;
                n._invertFilter = null;
                n._blendModeAlpha = 1;
                n._alpha = 1;
                n.userData = {};
                n.onEnterFrameBind = n.onEnterFrame.bind(n);
                n.onEnterFrameEvent = new s.J(s.J.ENTER_FRAME);
                n._enterFrameTickerAdded = false;
                n.eventAddedToStage = new s.J(s.J.ADDED_TO_STAGE);
                n.eventAdded = new s.J(s.J.ADDED);
                n.eventRemovedFromStage = new s.J(s.J.REMOVED_FROM_STAGE);
                n.eventRemoved = new s.J(s.J.REMOVED);
                n.transform = new i.dL();
                n.replacePixiSprite(t || new r.kxk(null));
                return n;
              }
              var n;
              var a;
              a = e;
              (n = t).prototype = Object.create(a.prototype);
              n.prototype.constructor = n;
              w(n, a);
              var o;
              var h;
              var l = t.prototype;
              l.destroy = function () {
                this.mask = null;
                this.userData = null;
                this.transform = null;
                this.cullRect = null;
                i.b0.remove(this.onEnterFrameBind, this);
                i.b0.remove(this.onEnterFrameBind);
                i.b0.remove(this.onEnterFrame, this);
                this._enterFrameTickerAdded = false;
                _.yB.destroyRecursive(this.pixiSprite);
                this.pixiSprite = null;
                e.prototype.destroy.call(this);
              };
              l.replacePixiSprite = function (e) {
                if (e) {
                  if (this.pixiSprite) {
                    this.willReplacePixiSprite();
                  }
                  delete e._flashSprite;
                  if (this.parent) {
                    this.parent.pixiSprite.removeChild(this._pixiSprite);
                    this.parent.pixiSprite.addChild(e);
                  }
                  this._pixiSprite = e;
                  this._pixiSprite._flashSprite = this;
                  this.transformTarget = this._pixiSprite;
                  this._pixiSprite.transform.updateLocalTransform();
                  this.transform.matrix.pixiMatrix = this._pixiSprite.transform.localTransform;
                  this.transform.matrix.relatedTransform = this._pixiSprite.transform;
                  this.didReplacePixiSprite();
                }
              };
              l.willReplacePixiSprite = function () {};
              l.didReplacePixiSprite = function () {};
              l.updateAlphaBlendMode = function (e) {
                this._blendModeAlpha = e;
                this._pixiSprite.alpha = this._alpha * this._blendModeAlpha;
              };
              l.updateBlendMode = function (e, t) {
                if (e instanceof r.kxk) {
                  e.blendMode = t;
                }
                if (e.children) {
                  for (var n, i = v(e.children); !(n = i()).done;) {
                    var s = n.value;
                    this.updateBlendMode(s, t);
                  }
                }
              };
              l.refreshFilters = function () {
                var e = [];
                if (this._filters) {
                  for (var t, n = v(this._filters); !(t = n()).done;) {
                    var r = t.value.getPixiFilter();
                    if (r) {
                      e.push(r);
                    }
                  }
                }
                if (this._invertFilter) {
                  e.push(this._invertFilter);
                }
                this.pixiSprite.filters = e.length ? e : null;
              };
              l.getBounds = function (e) {
                if (e === this) {
                  return this.getPixiBounds(e);
                } else {
                  return this.getRelativeBounds(e);
                }
              };
              l.getCanvasBounds = function (e) {
                this.cachedRect.x = 100;
                this.cachedRect.y = 50;
                this.cachedRect.width = 20000;
                this.cachedRect.height = 10000;
                return this.cachedRect;
              };
              l.getRect = function (e) {
                return this.getBounds(e);
              };
              l.globalToLocal = function (e) {
                var n = this._pixiSprite.toLocal(e.pixiPoint, undefined, t.cachedPixiPoint);
                this.cachedPoint.copyFromPixi(n);
                return this.cachedPoint;
              };
              l.localToGlobal = function (e) {
                var n = this._pixiSprite.toGlobal(e.pixiPoint, t.cachedPixiPoint);
                var r = (this.stage || i.BI.main).pixiSprite.toLocal(n, undefined, t.cachedPixiPoint);
                this.cachedPoint.copyFromPixi(r);
                return this.cachedPoint;
              };
              l.localToGlobalUnpatched = function (e) {
                var n = this._pixiSprite.toGlobal(e.pixiPoint, t.cachedPixiPoint);
                this.cachedPoint.copyFromPixi(n);
                return this.cachedPoint;
              };
              l.getLocalBounds = function () {
                var e = this._pixiSprite.getBounds(false);
                var n = t.cachedPixiPoint;
                n.set(e.x, e.y);
                var i = this._pixiSprite.parent.toLocal(n);
                var s = i.x;
                var a = i.y;
                var o = new r.dLy();
                this._pixiSprite.parent.transform.worldTransform.decompose(o);
                var h = e.width / (o.scale.x || 1);
                var l = e.height / (o.scale.y || 1);
                this.cachedRect.x = s;
                this.cachedRect.y = a;
                this.cachedRect.width = h;
                this.cachedRect.height = l;
                return this.cachedRect;
              };
              l.getCullBounds = function (e = false) {
                if (this.dirty || e) {
                  this.dirty = false;
                  this.tempCullRect ||= this._pixiSprite.getLocalBounds(this.tempCullRect);
                  var t;
                  var n;
                  var r;
                  var i;
                  var s = this.tempCullRect;
                  var a = this._pixiSprite;
                  var o = a.position;
                  var h = a.scale;
                  var l = a.rotation;
                  var d = Math.abs(s.width * h._x) / 2;
                  var c = Math.abs(s.height * h._y) / 2;
                  var u = (s.x + s.width / 2) * h._x;
                  var p = (s.y + s.height / 2) * h._y;
                  if (l !== 0) {
                    var m = Math.cos(l);
                    var f = Math.sin(l);
                    t = o._x + u * m - p * f;
                    n = o._y + u * f + p * m;
                    var _ = Math.abs(m);
                    var v = Math.abs(f);
                    r = d * _ + c * v;
                    i = d * v + c * _;
                  } else {
                    t = o._x + u;
                    n = o._y + p;
                    r = d;
                    i = c;
                  }
                  this.cullRect.x = t - r;
                  this.cullRect.y = n - i;
                  this.cullRect.width = r * 2;
                  this.cullRect.height = i * 2;
                }
                return this.cullRect;
              };
              l.getRelativeBounds = function (e) {
                e ||= this.parent || this;
                var n = this._pixiSprite.getBounds(false, t.cachedPixiRect);
                this.globalPos ||= new r.bRX();
                this.globalPos.set(n.x, n.y);
                var i = e._pixiSprite.toLocal(this.globalPos);
                var s = i.x;
                var a = i.y;
                e._pixiSprite.transform.worldTransform.decompose(t.cachedTrans);
                var o = n.width / (t.cachedTrans.scale.x || 1);
                var h = n.height / (t.cachedTrans.scale.y || 1);
                this.cachedRect.x = s;
                this.cachedRect.y = a;
                this.cachedRect.width = o;
                this.cachedRect.height = h;
                return this.cachedRect;
              };
              l.getPixiBounds = function (e) {
                var n = e ? this._pixiSprite.getLocalBounds(t.cachedPixiRect) : this._pixiSprite.getBounds();
                this.cachedRect.copyFrom(n);
                return this.cachedRect;
              };
              l.getIsolatedBounds = function () {
                var e = this.tempContainer || new r.mcf();
                this.tempContainer = e;
                var t = this.pixiSprite.x;
                var n = this.pixiSprite.y;
                var i = this.pixiSprite.parent;
                var s = i.children.indexOf(this.pixiSprite);
                e.addChild(this.pixiSprite);
                this.pixiSprite.x = 0;
                this.pixiSprite.y = 0;
                var a = e.getLocalBounds();
                a.x += t;
                a.y += n;
                i.addChildAt(this.pixiSprite, s);
                this.pixiSprite.x = t;
                this.pixiSprite.y = n;
                this.cachedRect.copyFrom(a);
                return this.cachedRect;
              };
              l.getDisplayUnderMouse = function (e) {
                var t = this.getPixiSpriteUnderMouse();
                return this.findFlashDisplay(t, e);
              };
              l.findFlashDisplay = function (e, n = [t]) {
                if (!e) {
                  return null;
                }
                if (e._flashSprite) {
                  for (var r, i = v(n); !(r = i()).done;) {
                    var s = r.value;
                    if (e._flashSprite instanceof s) {
                      return e._flashSprite;
                    }
                  }
                }
                return this.findFlashDisplay(e.parent, n);
              };
              l.getPixiSpriteUnderMouse = function (e) {
                e ||= this.pixiSprite;
                if (!e) {
                  return null;
                }
                for (var t = e.children.length; t--;) {
                  var n = e.children[t];
                  var r = this.getPixiSpriteUnderMouse(n);
                  if (r) {
                    return r;
                  }
                }
                var s = e.interactive;
                var a = e.interactiveChildren;
                e.interactive = true;
                var o = i.BI.main.renderer.plugins.interaction.mouse.global;
                var h = i.BI.main.renderer.plugins.interaction.hitTest(o, e);
                e.interactive = s;
                e.interactiveChildren = a;
                if (h) {
                  return e;
                } else {
                  return null;
                }
              };
              l.isUnderMouse = function () {
                var e = this.pixiSprite.interactive;
                var t = this.pixiSprite.interactiveChildren;
                this.pixiSprite.interactive = true;
                this.pixiSprite.interactiveChildren = true;
                var n = i.BI.main.renderer.plugins.interaction.mouse.global;
                var r = i.BI.main.renderer.plugins.interaction.hitTest(n, this.pixiSprite);
                this.pixiSprite.interactive = e;
                this.pixiSprite.interactiveChildren = t;
                return !!r;
              };
              l.debugLocalBounds = function () {
                this.debugBounds ||= new r.A1g();
                this.debugBounds.clear();
                var e = this.getBounds(this);
                this.debugBounds.beginFill(16711680, 0.5);
                this.debugBounds.drawRect(e.x, e.y, e.width, e.height);
                this._pixiSprite.addChild(this.debugBounds);
              };
              l._transformPointLocal = function (e) {
                this.pixiSprite.transform.updateLocalTransform();
                var t = this.pixiSprite.transform.localTransform;
                var n = new i.bR();
                n.x = e.x * t.a + e.y * t.c + t.tx;
                n.y = e.x * t.b + e.y * t.d + t.ty;
                return n;
              };
              l._transformPointLocalParent = function (e) {
                var t = this.pixiSprite.parent ? this.pixiSprite.parent : i.BI.main.pixiSprite;
                t.transform.updateLocalTransform();
                var n = t.transform.localTransform;
                var r = new i.bR();
                r.x = e.x * n.a + e.y * n.c + n.tx;
                r.y = e.x * n.b + e.y * n.d + n.ty;
                return r;
              };
              l._transformPointWorld = function (e) {
                var t = this.parent ? this.parent.pixiSprite : i.BI.main.pixiSprite;
                this.pixiSprite.transform.updateTransform(t.transform);
                var n = this.pixiSprite.transform.worldTransform.apply(e.pixiPoint);
                return i.bR.fromPixi(n);
              };
              l.hitTestObjectAABB = function (e) {
                var t = i.M_.fromPixi(this._pixiSprite.getBounds());
                var n = i.M_.fromPixi(e._pixiSprite.getBounds());
                return t.intersects(n);
              };
              l.hitTestObject = function (e) {
                return function (e, t) {
                  var n;
                  var r;
                  var i;
                  var s;
                  var a;
                  for (var o = [e, t], h = 0; h < o.length; h++) {
                    for (var l = o[h], d = 0; d < l.length; d += 2) {
                      var c = (d + 2) % l.length;
                      var u = {
                        x: l[c + 1] - l[d + 1],
                        y: l[d] - l[c]
                      };
                      n = r = null;
                      for (var p = 0; p < e.length; p += 2) {
                        i = u.x * e[p] + u.y * e[p + 1];
                        if (n === null || i < n) {
                          n = i;
                        }
                        if (r === null || i > r) {
                          r = i;
                        }
                      }
                      s = a = null;
                      for (var m = 0; m < t.length; m += 2) {
                        i = u.x * t[m] + u.y * t[m + 1];
                        if (s === null || i < s) {
                          s = i;
                        }
                        if (a === null || i > a) {
                          a = i;
                        }
                      }
                      if (r < s || a < n) {
                        return false;
                      }
                    }
                  }
                  return true;
                }(f(e, true), f(this, true));
              };
              l.hitTestPoint = function (e = 0, n = 0, r = false) {
                var s = this.stage || i.BI.main;
                t.cachedPixiPoint.set(e, n);
                var a = this._pixiSprite.toLocal(t.cachedPixiPoint, s._pixiSprite, t.cachedPixiPoint);
                return this._pixiSprite.getLocalBounds(t.cachedPixiRect).contains(a.x, a.y);
              };
              l.hitTestMouse = function () {
                var e = this.stage.renderer.plugins.interaction.mouse.global;
                var t = this._pixiSprite.interactive;
                this._pixiSprite.interactive = true;
                var n = this.stage.renderer.plugins.interaction.hitTest(e, this._pixiSprite);
                this._pixiSprite.interactive = t;
                return !!n;
              };
              l.hitTestGlobalPoint = function (e) {
                var t = e instanceof i.bR ? e.pixiPoint : e;
                return !!this.containsPointRecursive(this._pixiSprite, t);
              };
              l.containsPointRecursive = function (e, t, n = 0, r = 2) {
                if (!e.visible) {
                  return false;
                }
                if (e.containsPoint && e.containsPoint(t)) {
                  return true;
                }
                if (e.children && n < r) {
                  for (var i = e.children.length; i--;) {
                    if (this.containsPointRecursive(e.children[i], t, n + 1)) {
                      return true;
                    }
                  }
                }
                return false;
              };
              l.hitTestGlobalAABBRect = function (e) {
                var t = new i.bR();
                for (var n = 0; n < e.height; n += 2) {
                  for (var r = 0; r < e.width; r += 2) {
                    t.x = e.x + r;
                    t.y = e.y + n;
                    if (this.hitTestGlobalPoint(t)) {
                      return true;
                    }
                  }
                }
                return false;
              };
              l.onListenerAdded = function (e) {
                if (e === s.J.ENTER_FRAME && !this._enterFrameTickerAdded) {
                  i.b0.add(this.onEnterFrame, this);
                  this._enterFrameTickerAdded = true;
                }
              };
              l.onListenerRemoved = function (e) {
                if (e === s.J.ENTER_FRAME && this._enterFrameTickerAdded && !this.hasEventListener(e)) {
                  i.b0.remove(this.onEnterFrame, this);
                  this._enterFrameTickerAdded = false;
                }
              };
              l.onEnterFrame = function () {
                this.onEnterFrameEvent.delta = i.b0.deltaTime;
                this.dispatchEvent(this.onEnterFrameEvent);
              };
              l.onAdded = function (e) {
                this.stage = e.stage;
                this.root = e.root;
                this.dispatchEvent(this.eventAdded);
                this.dispatchEvent(this.eventAddedToStage);
              };
              l.onRemoved = function (e) {
                this.stage = null;
                this.root = null;
                this.dispatchEvent(this.eventRemoved);
                this.dispatchEvent(this.eventRemovedFromStage);
              };
              l.updateScale9 = function () {
                var e = this._scale9Grid;
                if (e && !this.isScale9) {
                  var t = this.findTexture();
                  var n = new r.F_S(t, e.x, e.y, e.width, e.height);
                  this.replacePixiSprite(n);
                } else if (e && this.isScale9) {
                  var i = this.pixiSprite;
                  i.leftWidth = e.x;
                  i.topHeight = e.y;
                  i.rightWidth = e.width;
                  i.bottomHeight = e.height;
                } else if (!e && this.isScale9) {
                  var s = this.pixiSprite.texture || null;
                  var a = new r.kxk(s);
                  this.replacePixiSprite(a);
                }
              };
              l.findTexture = function (e) {
                e ||= this.pixiSprite;
                if (e.texture) {
                  return e.texture;
                }
                if (!e.children) {
                  return null;
                }
                for (var t, n = v(e.children); !(t = n()).done;) {
                  var r = t.value;
                  var i = this.findTexture(r);
                  if (i) {
                    return i;
                  }
                }
                return null;
              };
              l.updateTint = function (e, t) {
                e.tint = t >= 0 ? t : 16777215;
                for (var n, r = v(e.children); !(n = r()).done;) {
                  var i = n.value;
                  this.updateTint(i, t);
                }
              };
              l.forceDirty = function () {
                this.dirty = true;
              };
              l.invalidateLocalBounds = function () {
                this.tempCullRect = null;
                this.dirty = true;
              };
              o = t;
              h = [{
                key: "pixiSprite",
                get: function () {
                  return this._pixiSprite;
                },
                set: function (e) {
                  this.replacePixiSprite(e);
                }
              }, {
                key: "cachedRect",
                get: function () {
                  if (this._cachedRect === undefined) {
                    this._cachedRect = new i.M_();
                  }
                  return this._cachedRect;
                },
                set: function (e) {
                  this._cachedRect = e;
                }
              }, {
                key: "cachedPoint",
                get: function () {
                  if (this._cachedPoint === undefined) {
                    this._cachedPoint = new i.bR();
                  }
                  return this._cachedPoint;
                },
                set: function (e) {
                  this._cachedPoint = e;
                }
              }, {
                key: "cullRect",
                get: function () {
                  if (this._cullRect === undefined) {
                    this._cullRect = new r.M_G();
                  }
                  return this._cullRect;
                },
                set: function (e) {
                  this._cullRect = e;
                }
              }, {
                key: "x",
                get: function () {
                  return this.transformTarget.position.x;
                },
                set: function (e) {
                  if (this.transformTarget.position.x !== e) {
                    this.transformTarget.position.x = e;
                    this.dirty = true;
                  }
                }
              }, {
                key: "y",
                get: function () {
                  return this.transformTarget.position.y;
                },
                set: function (e) {
                  if (this.transformTarget.position.y !== e) {
                    this.transformTarget.position.y = e;
                    this.dirty = true;
                  }
                }
              }, {
                key: "position",
                get: function () {
                  return this.transformTarget.position;
                },
                set: function (e) {
                  this.transformTarget.position.x = e.x;
                  this.transformTarget.position.y = e.y;
                  this.dirty = true;
                }
              }, {
                key: "scaleX",
                get: function () {
                  return this.transformTarget.scale.x;
                },
                set: function (e) {
                  this.transformTarget.scale.x = e;
                }
              }, {
                key: "scaleY",
                get: function () {
                  return this.transformTarget.scale.y;
                },
                set: function (e) {
                  this.transformTarget.scale.y = e;
                }
              }, {
                key: "scale",
                get: function () {
                  return this.transformTarget.scale;
                },
                set: function (e) {
                  this.transformTarget.scale.x = e.x;
                  this.transformTarget.scale.y = e.y;
                }
              }, {
                key: "rotation",
                get: function () {
                  return this.transformTarget.rotation * r.bOd;
                },
                set: function (e) {
                  var t = e * r.Tde;
                  if (this.transformTarget.rotation !== t) {
                    this.transformTarget.rotation = t;
                    this.dirty = true;
                  }
                }
              }, {
                key: "alpha",
                get: function () {
                  return this._alpha;
                },
                set: function (e) {
                  this._alpha = e;
                  this._pixiSprite.alpha = e * this._blendModeAlpha;
                }
              }, {
                key: "visible",
                get: function () {
                  return this._pixiSprite.visible;
                },
                set: function (e) {
                  this._pixiSprite.visible = e;
                }
              }, {
                key: "blendMode",
                get: function () {
                  return this._blendMode;
                },
                set: function (e) {
                  this._blendMode = e;
                  var t = i.BI.main.renderer.context.webGLVersion >= 2;
                  if (e === i.Nx.INVERT || e === i.Nx.LUMINVERT && t) {
                    this._invertFilter = e === i.Nx.INVERT ? c.instance : m.instance;
                    this.updateAlphaBlendMode(1);
                    this.refreshFilters();
                  } else {
                    if (this._invertFilter) {
                      this._invertFilter = null;
                      this.refreshFilters();
                    }
                    if (i.Nx.isSupportedByPixi(e)) {
                      this.updateAlphaBlendMode(1);
                      this.updateBlendMode(this.pixiSprite, i.Nx.flashToPixi(e));
                    } else {
                      this.updateAlphaBlendMode(0.75);
                    }
                  }
                }
              }, {
                key: "pixiWidth",
                get: function () {
                  return this.pixiSprite.width;
                },
                set: function (e) {
                  this.pixiSprite.width = e;
                }
              }, {
                key: "pixiHeight",
                get: function () {
                  return this.pixiSprite.height;
                },
                set: function (e) {
                  this.pixiSprite.height = e;
                }
              }, {
                key: "width",
                get: function () {
                  return this.getRelativeBounds().width;
                },
                set: function (e) {
                  this.pixiSprite.scale.x = 1;
                  var t = this.getRelativeBounds();
                  this.pixiSprite.scale.x = e / t.width;
                }
              }, {
                key: "height",
                get: function () {
                  return this.getRelativeBounds().height;
                },
                set: function (e) {
                  this.pixiSprite.scale.y = 1;
                  var t = this.getRelativeBounds();
                  this.pixiSprite.scale.y = e / t.height;
                }
              }, {
                key: "mask",
                get: function () {
                  if (this.pixiSprite.mask && this.pixiSprite.mask._flashSprite) {
                    return this.pixiSprite.mask._flashSprite;
                  } else {
                    return null;
                  }
                },
                set: function (e) {
                  var t = e;
                  if (t != null && t.graphics && t != null && t.graphics.drawn) {
                    this.pixiSprite.mask = t.graphics.pixiGraphics;
                  } else {
                    this.pixiSprite.mask = e ? e.pixiSprite : null;
                  }
                }
              }, {
                key: "filters",
                get: function () {
                  return this._filters;
                },
                set: function (e) {
                  this._filters = e;
                  this.refreshFilters();
                }
              }, {
                key: "mouseX",
                get: function () {
                  var e = i.BI.main.renderer.plugins.interaction.mouse.global;
                  var n = this.pixiSprite.toLocal(e, undefined, t.cachedPixiPoint);
                  return Math.round(n.x);
                }
              }, {
                key: "mouseY",
                get: function () {
                  var e = i.BI.main.renderer.plugins.interaction.mouse.global;
                  var n = this.pixiSprite.toLocal(e, undefined, t.cachedPixiPoint);
                  return Math.round(n.y);
                }
              }, {
                key: "scale9Grid",
                get: function () {
                  return this._scale9Grid;
                },
                set: function (e) {
                  this._scale9Grid = e;
                  this.updateScale9();
                }
              }, {
                key: "isScale9",
                get: function () {
                  return this.pixiSprite instanceof r.F_S;
                }
              }, {
                key: "tint",
                get: function () {
                  return this._tint;
                },
                set: function (e) {
                  this._tint = e;
                  this.updateTint(this.pixiSprite, this._tint);
                }
              }];
              if (h) {
                (function (e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || false;
                    r.configurable = true;
                    if ("value" in r) {
                      r.writable = true;
                    }
                    Object.defineProperty(e, g(r.key), r);
                  }
                })(o.prototype, h);
              }
              Object.defineProperty(o, "prototype", {
                writable: false
              });
              return o;
            }(a.Qe);
            x.cachedPixiPoint = new r.bRX();
            x.cachedPixiRect = new r.M_G();
            x.cachedTrans = new r.dLy();
          }
    });
})();
