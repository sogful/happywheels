(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        50869(e, t, n) {
            "use strict";
        
            n.d(t, {
              oV: () => a.o,
              AN: () => p,
              ZE: () => E,
              fG: () => P,
              nX: () => I,
              Ch: () => L.C,
              iU: () => B,
              yw: () => g,
              oi: () => N,
              Cw: () => V,
              tR: () => H.t,
              Bx: () => z.B,
              Em: () => X,
              Tu: () => K,
              ks: () => G.k,
              ON: () => Z.O,
              p8: () => $.p
            });
            var r = () => n(46518);
            var i = n.cw(function (e, t) {
              var n = r();
              var i = Math.hypot;
              var s = Math.abs;
              var a = Math.sqrt;
              n({
                target: "Math",
                stat: true,
                arity: 2,
                forced: !!i && i(Infinity, NaN) !== Infinity
              }, {
                hypot: function (e, t) {
                  for (var n, r, i = 0, o = 0, h = arguments.length, l = 0; o < h;) {
                    if (l < (n = s(arguments[o++]))) {
                      i = i * (r = l / n) * r + 1;
                      l = n;
                    } else {
                      i += n > 0 ? (r = n / l) * r : n;
                    }
                  }
                  if (l === Infinity) {
                    return Infinity;
                  } else {
                    return l * a(i);
                  }
                }
              });
            });
            var s = n.cw(function (e, t) {
              var i = r();
              var s = n(77240);
              i({
                target: "String",
                proto: true,
                forced: n(23061)("small")
              }, {
                small: function () {
                  return s(this, "small", "", "");
                }
              });
            });
            var a = n(46972);
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(26099);
            n(2892);
            var o = n(4971);
            var h = n(13362);
            var l = n(80902);
            var d = n(98263);
            function c(e) {
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
            function u(e, t) {
              u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return u(e, t);
            }
            var p = function (e) {
              function t(t, n, r, i) {
                var s;
                if (i === undefined) {
                  i = false;
                }
                (s = e.call(this) || this).mouseUpHandler = function (e) {
                  if (!s.colorSelector) {
                    s.colorSelector = new h.ZE(s._color, s._minusColor);
                    s.stage.addChild(s.colorSelector);
                    var t = s.localToGlobal(new o.bR(s.colorBorder.x - 5, s.colorBorder.y - 5));
                    s.colorSelector.x = t.x;
                    s.colorSelector.y = t.y;
                    s.colorSelector.addEventListener(h.ZE.COLOR_SELECTED, s.colorSelected);
                    s.colorSelector.addEventListener(h.ZE.ROLL_OUT, s.colorSelectorRollOut);
                  }
                };
                s.colorSelected = function (e) {
                  s.color = s.colorSelector.currentColor;
                  s.dispatchEvent(new h.vq(h.vq.VALUE_CHANGE, s, s.color, false));
                };
                s.colorSelectorRollOut = function (e) {
                  s.color = s.colorSelector.currentColor;
                  s.closeColorSelector();
                  s.dispatchEvent(new h.vq(h.vq.VALUE_CHANGE, s, s.color));
                };
                s.closeColorSelector = function (e = null) {
                  if (s.colorSelector) {
                    s.colorSelector.die();
                    s.colorSelector.removeEventListener(h.ZE.COLOR_SELECTED, s.colorSelected);
                    s.colorSelector.removeEventListener(h.ZE.ROLL_OUT, s.colorSelectorRollOut);
                    s.stage.removeChild(s.colorSelector);
                    s.colorSelector = null;
                  }
                };
                s.buildView();
                s.createLabel(t);
                s.attribute = n;
                s.childInputs = [];
                s.editable = r;
                s._minusColor = i;
                s._color = 0;
                s.init();
                return s;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              u(n, r);
              var i;
              var s;
              var a = t.prototype;
              a.buildView = function () {
                var e = (0, d.zI)("EditorUI", "ColorInput");
                this.colorBorder = new o.kx(e.colorBorder);
                this.addChild(this.colorBorder);
                this.noColorSprite = new o.kx(e.noColorSprite);
                this.addChild(this.noColorSprite);
              };
              a.init = function () {
                this.colorSprite = new o.kx();
                this.addChild(this.colorSprite);
                this.colorSprite.x = this.colorBorder.x + 2;
                this.colorSprite.y = this.colorBorder.y + 2;
                this.colorSprite.mouseEnabled = this.noColorSprite.mouseEnabled = false;
                this.drawColorSprite();
                this.colorBorder.addEventListener(o.Cm.MOUSE_UP, this.mouseUpHandler);
              };
              a.createLabel = function (e) {
                var t = new o.lk("HelveticaNeueLT Std", 11, 16777215, null, null, null, null, null, o.MA.LEFT);
                this.labelText = new o.A_();
                this.labelText.defaultTextFormat = t;
                this.labelText.autoSize = o.wL.LEFT;
                this.labelText.width = 10;
                this.labelText.height = 17;
                this.labelText.x = 0;
                this.labelText.y = this.colorBorder.height * 0.5 - 8.5;
                this.labelText.multiline = false;
                this.labelText.selectable = false;
                this.labelText.antiAliasType = o.BF.ADVANCED;
                this.labelText.text = e + ":";
                this.addChild(this.labelText);
              };
              a.drawColorSprite = function () {
                if (this._color < 0) {
                  this.noColorSprite.visible = true;
                  this.colorSprite.visible = false;
                } else {
                  this.noColorSprite.visible = false;
                  this.colorSprite.visible = true;
                  this.colorSprite.graphics.clear();
                  this.colorSprite.graphics.beginFill(this._color);
                  this.colorSprite.graphics.drawRect(0, 0, this.colorBorder.width - 4, this.colorBorder.height - 4);
                  this.colorSprite.graphics.endFill();
                }
              };
              a.setValue = function (e) {
                this.color = e;
              };
              a.die = function () {
                e.prototype.die.call(this);
                this.closeColorSelector();
                this.colorBorder.removeEventListener(o.Cm.MOUSE_UP, this.mouseUpHandler);
              };
              i = t;
              if (s = [{
                key: "color",
                get: function () {
                  return this._color;
                },
                set: function (e) {
                  if (this.editable) {
                    this._ambiguous = false;
                    this._color = e;
                    this.drawColorSprite();
                  }
                }
              }, {
                key: "height",
                get: function () {
                  return 25;
                }
              }]) {
                (function (e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || false;
                    r.configurable = true;
                    if ("value" in r) {
                      r.writable = true;
                    }
                    Object.defineProperty(e, c(r.key), r);
                  }
                })(i.prototype, s);
              }
              Object.defineProperty(i, "prototype", {
                writable: false
              });
              return i;
            }(l.C);
            n(89907);
            n(38781);
            n(54554);
            var m = n(46682);
            var f = n(35057);
            s();
            i();
            var _ = n(87833);
            function v(e) {
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
            function y(e, t) {
              y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return y(e, t);
            }
            var g = function (e) {
              function t(t) {
                var n;
                if (t === undefined) {
                  t = {};
                }
                (n = e.call(this) || this).offAlpha = 0.8;
                n.ownedTexture = null;
                n.rollOverHandler = function (e = null) {
                  n.textSprite.alpha = 1;
                };
                n.rollOutHandler = function (e = null) {
                  if (!n._selected) {
                    n.textSprite.alpha = n.offAlpha;
                  }
                };
                n.mouseUpHandler = function (e) {
                  _.m.instance.playSoundItem("MenuSelect");
                };
                if (t.mcName) {
                  var r = new o.j7((0, d.zI)(t.fileName, t.mcName));
                  r.convertChildren();
                  n.addChild(r);
                  n.bg = r.bg;
                  n.textSprite = r.textSprite;
                } else if (t.label) {
                  var i = t.small === true;
                  n.bg = new o.kx(new m.kxk(m.gPd.from(i ? "game-ui-key-asset-1.png" : "button-asset-2.png")));
                  n.bg.scaleX = n.bg.scaleY = 0.5;
                  n.bg.x = i ? -7 : -14;
                  n.bg.y = i ? -4 : -6;
                  n.addChild(n.bg);
                  n.textSprite = n.buildLabel(t.label, t.arrow === true, i ? 41 : 84.25, i ? 14.6 : 15);
                  n.addChild(n.textSprite);
                  n._pixiSprite.hitArea = i ? new m.M_G(0, -0.5, 80, 30) : new m.M_G(0, 0.5, 167, 30);
                } else {
                  n.bg = new o.kx();
                  n.addChild(n.bg);
                  n.bg.graphics.beginFill(t.color || 16711680, 0.75);
                  n.bg.graphics.drawRect(0, 0, 28, 28);
                  n.textSprite = new o.A_();
                  n.addChild(n.textSprite);
                }
                n.buttonMode = true;
                n.tabEnabled = false;
                n.selected = false;
                n.addEventListener(o.Cm.ROLL_OVER, n.rollOverHandler, false, 0, true);
                n.addEventListener(o.Cm.ROLL_OUT, n.rollOutHandler, false, 0, true);
                n.addEventListener(o.Cm.MOUSE_UP, n.mouseUpHandler, false, 0, true);
                return n;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              y(n, r);
              var i;
              var s;
              var a = t.prototype;
              a.buildLabel = function (e, t, n, r) {
                var i = new o.kx();
                var s = 0.87;
                var a = new o.A_();
                a.defaultTextFormat = new o.lk("Clarendon LT Std", 58, 16777215);
                a.selectable = false;
                a.text = e;
                var h = a.pixiText.style;
                h.padding = 6;
                h.dropShadow = true;
                h.dropShadowColor = 11842740;
                h.dropShadowBlur = 0;
                h.dropShadowDistance = Math.hypot(4, 3 / s);
                h.dropShadowAngle = Math.atan2(-3 / s, -4);
                a.pixiText.resolution = 1;
                a.pixiText.updateText(true);
                var l = a.pixiText.canvas;
                var d = document.createElement("canvas");
                d.width = l.width;
                d.height = Math.round(l.height * s);
                d.getContext("2d").drawImage(l, 0, 0, d.width, d.height);
                var c = m.gPd.from(d);
                c.baseTexture.mipmap = m.E8U.ON;
                this.ownedTexture = c;
                var u = (l.width - h.padding * 2 - h.dropShadowDistance) * 0.25;
                var p = t ? 7 : 0;
                var f = t ? 7 : 0;
                var _ = new o.kx(new m.kxk(c));
                _.scaleX = _.scaleY = 0.25;
                _.x = n - (u + f + p) / 2 - h.padding * 0.25;
                _.y = r - 7.45 - h.padding * s * 0.25;
                i.addChild(_);
                a.destroy();
                if (t) {
                  var v = new o.kx();
                  var y = v.graphics;
                  y.beginFill(11842740);
                  y.moveTo(-1, -0.75);
                  y.lineTo(p - 1, 5.5);
                  y.lineTo(-1, 11.75);
                  y.endFill();
                  y.beginFill(16777215);
                  y.moveTo(0, 0);
                  y.lineTo(p, 6.25);
                  y.lineTo(0, 12.5);
                  y.endFill();
                  v.x = n + (u + f + p) / 2 - p;
                  v.y = r - 6;
                  i.addChild(v);
                }
                return i;
              };
              a.destroy = function () {
                if (this.ownedTexture) {
                  this.ownedTexture.destroy(true);
                  this.ownedTexture = null;
                }
                e.prototype.destroy.call(this);
              };
              i = t;
              if (s = [{
                key: "selected",
                get: function () {
                  return this._selected;
                },
                set: function (e) {
                  this._selected = e;
                  if (this._selected) {
                    this.rollOverHandler();
                  } else {
                    this.rollOutHandler();
                  }
                }
              }]) {
                (function (e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || false;
                    r.configurable = true;
                    if ("value" in r) {
                      r.writable = true;
                    }
                    Object.defineProperty(e, v(r.key), r);
                  }
                })(i.prototype, s);
              }
              Object.defineProperty(i, "prototype", {
                writable: false
              });
              return i;
            }(o.kx);
            function w(e) {
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
            function x(e, t) {
              e.prototype = Object.create(t.prototype);
              e.prototype.constructor = e;
              b(e, t);
            }
            function b(e, t) {
              b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return b(e, t);
            }
            var T = function () {
              function e(e) {
                this.renderer = e;
              }
              var t = e.prototype;
              t.updateColorCanvas = function () {
                var e = this.renderer.context.gl;
                var t = e.drawingBufferWidth;
                var n = e.drawingBufferHeight;
                var r = this.canvas || document.createElement("canvas");
                r.width = t;
                r.height = n;
                var i = r.getContext("2d", {
                  alpha: false
                });
                i.clearRect(0, 0, t, n);
                i.drawImage(e.canvas, 0, 0, t, n);
                this.canvas = r;
                this.ctx = i;
              };
              t.getColorAtPos = function (e = 0, t = 0) {
                if (!this.canvas) {
                  this.updateColorCanvas();
                }
                var n = this.renderer.context.gl;
                var r = e / 900 * n.drawingBufferWidth;
                var i = t / 500 * n.drawingBufferHeight;
                var s = this.ctx.getImageData(r, i, 1, 1).data;
                var a = s[0] / 255;
                var o = s[1] / 255;
                var h = s[2] / 255;
                return m.WpD.rgb2hex([a, o, h]);
              };
              t.getColorAtMousePos = function () {
                var e = this.getMousePos();
                return this.getColorAtPos(e.x, e.y);
              };
              t.getMousePos = function () {
                var e = this.renderer.plugins.interaction.mouse.global;
                return {
                  x: e.x | 0,
                  y: e.y | 0
                };
              };
              return e;
            }();
            var A = function (e) {
              function t() {
                var t;
                (t = e.call(this) || this).graphics.lineStyle(1, 0);
                t.graphics.drawCircle(0, 0, 5);
                t.graphics.lineStyle(1, 16777215);
                t.graphics.drawCircle(0, 0, 4);
                return t;
              }
              x(t, e);
              return t;
            }(o.kx);
            var C = function (e) {
              function t() {
                return e.call(this, {
                  fileName: "EditorUI",
                  mcName: "DropperButton"
                }) || this;
              }
              x(t, e);
              return t;
            }(g);
            var S = function (e) {
              function t() {
                var t;
                (t = e.call(this, {
                  color: 255
                }) || this).bg.graphics.clear();
                t.bg.graphics.lineStyle(2, 16777215);
                t.bg.graphics.moveTo(-3, -2);
                t.bg.graphics.lineTo(3, -2);
                t.bg.graphics.moveTo(0, -2);
                t.bg.graphics.lineTo(0, 17);
                t.bg.graphics.moveTo(-3, 17);
                t.bg.graphics.lineTo(3, 17);
                return t;
              }
              x(t, e);
              return t;
            }(g);
            var E = function (e) {
              function t(n, r) {
                var i;
                (i = e.call(this) || this).bgWidth = 307;
                i.bgHeight = 185;
                i._currentHue = 16711680;
                i.huePosition = 0;
                i.spectrumWidth = 128;
                i.sliderHeight = 15;
                i.swatchColumnLength = 16;
                i.swatchSize = 10;
                i.swatchSpacer = 0;
                i.swatchBeginIndex = 25;
                i.maxSwatches = Math.floor(120 / i.swatchSize) * i.swatchColumnLength;
                i.tracking = false;
                i.spectrumTracking = false;
                i.addedToStageHandler = function (e) {
                  i.removeEventListener(o.Jh.ADDED_TO_STAGE, i.addedToStageHandler);
                  i.init();
                };
                i._updateColorText = function (e) {
                  i.colorText._pixiTextInput.text = e.toUpperCase();
                };
                i.mouseOverHandler = function (e) {
                  if (!i.tracking) {
                    if (i.spectrumTracking) {
                      if (e.target != i.blocker) {
                        e.target;
                        h.fG;
                      }
                    } else if (e.target instanceof h.fG) {
                      i.moveSwatchOutline(e);
                    } else if (e.target == i.addSwatchButton) {
                      h.uO.instance.show("save color", i.addSwatchButton);
                    } else if (e.target == i.remSwatchButton) {
                      h.uO.instance.show("remove saved color", i.remSwatchButton);
                    }
                  }
                };
                i.mouseMoveHandler = function (e) {
                  if (i.spectrumTracking) {
                    if (!(e.target instanceof h.fG)) {
                      e.target;
                      i.blocker;
                    }
                  }
                };
                i.moveSwatchOutline = function (e) {
                  var t = e.target;
                  i.currentColor = t.color;
                  i.swatchOutline.visible = true;
                  i.swatchOutline.x = t.x;
                  i.swatchOutline.y = t.y;
                };
                i.mouseDownHandler = function (e) {
                  switch (e.target) {
                    case i.spectrumSprite:
                      o.KK.hide();
                      i.colorText.mouseEnabled = false;
                      i.spectrumTracking = true;
                      i.stage.addEventListener(o.Cm.MOUSE_UP, i.mouseUpHandler);
                      i.stage.addEventListener(o.Cm.MOUSE_MOVE, i.spectrumMouseTrack);
                      i.spectrumMouseTrack(e);
                      break;
                    case i.hueSliderSprite:
                      i.tracking = true;
                      i.stage.addEventListener(o.Cm.MOUSE_UP, i.mouseUpHandler);
                      i.stage.addEventListener(o.Cm.MOUSE_MOVE, i.mouseTrack);
                      i.mouseTrack(e);
                  }
                };
                i.mouseRollOutHander = function (e) {
                  if (!i.colorText.editing) {
                    i.dispatchEvent(new o.Jh(t.ROLL_OUT));
                  }
                };
                i.mouseOutHandler = function (e) {
                  if (e.target instanceof h.fG) {
                    if (!i.spectrumTracking) {
                      i.currentColor = i.selectedColor;
                    }
                  } else if (e.target == i.spectrumSprite) {
                    o.KK.show();
                  }
                };
                i.mouseUpHandler = function (e) {
                  i.colorText.mouseEnabled = true;
                  if (i.tracking) {
                    i.tracking = false;
                    i.stage.removeEventListener(o.Cm.MOUSE_UP, i.mouseUpHandler);
                    i.stage.removeEventListener(o.Cm.MOUSE_MOVE, i.mouseTrack);
                    return;
                  }
                  if (i.spectrumTracking) {
                    i.spectrumTracking = false;
                    i.stage.removeEventListener(o.Cm.MOUSE_MOVE, i.spectrumMouseTrack);
                    i.stage.removeEventListener(o.Cm.MOUSE_UP, i.mouseUpHandler);
                    if (e.target instanceof h.fG) {
                      var n = e.target;
                      i.currentColor = n.color;
                      i.selectedColor = i.currentColor;
                    } else {
                      i._selectedColor = i.currentColor;
                      i.prevRing.x = i.ring.x;
                      i.prevRing.y = i.ring.y;
                      i.commitColor();
                    }
                    o.KK.show();
                  } else if (e.target == i.spectrumSprite) {
                    i.setColorForSpectrumPosition();
                    i.commitColor();
                  } else if (e.target == i.addSwatchButton) {
                    i.addSwatchToSwatches(i.currentColor);
                    i.addSwatchButton.disabled = true;
                  } else if (e.target == i.remSwatchButton) {
                    i.removeSwatchFromSwatches(i.currentColor);
                    i.addSwatchButton.disabled = false;
                    i.remSwatchButton.disabled = true;
                  } else if (e.target instanceof h.fG) {
                    var r = e.target;
                    i.currentColor = r.color;
                    i.selectedColor = i.currentColor;
                  } else if (e.target == i.colorSprite) {
                    i.dispatchEvent(new o.Jh(t.ROLL_OUT));
                  } else if (e.target == i.noColorBtn) {
                    i._currentColor = -1;
                    i.dispatchEvent(new o.Jh(t.ROLL_OUT));
                  } else if (e.target == i.dropperButton) {
                    i.hueSliderSprite.removeEventListener(o.Cm.MOUSE_DOWN, i.mouseDownHandler);
                    i.spectrumSprite.removeEventListener(o.Cm.MOUSE_DOWN, i.mouseDownHandler);
                    i.removeEventListener(o.Cm.ROLL_OUT, i.mouseRollOutHander);
                    i.removeEventListener(o.Cm.MOUSE_OVER, i.mouseOverHandler);
                    i.removeEventListener(o.Cm.MOUSE_DOWN, i.mouseDownHandler);
                    i.removeEventListener(o.Cm.MOUSE_UP, i.mouseUpHandler);
                    i.removeEventListener(o.Cm.MOUSE_MOVE, i.mouseMoveHandler);
                    i.removeEventListener(o.Cm.MOUSE_OUT, i.mouseOutHandler);
                    i.stage.removeEventListener(o.Cm.MOUSE_UP, i.mouseUpHandler);
                    i.stage.removeEventListener(o.Cm.MOUSE_MOVE, i.mouseTrack);
                    i.stage.removeEventListener(o.Cm.MOUSE_MOVE, i.spectrumMouseTrack);
                    i.colorText.removeEventListener(o.kV.KEY_UP, i.keyUpHandler);
                    i.colorText._pixiTextInput.off("input", i._updateColorText);
                    f.w.currentlyColorDropperOpen = true;
                    i.dropperCursor = new h.nX();
                    i.stage.addChild(i.dropperCursor);
                    o.KK.hide();
                    i.blocker = new o.kx();
                    i.stage.addChild(i.blocker);
                    i.blocker.graphics.beginFill(0);
                    i.blocker.graphics.drawRect(0, 0, i.stage.stageWidth, i.stage.stageHeight);
                    i.blocker.alpha = 0;
                    i.addEventListener(o.Jh.ENTER_FRAME, i.setDropper);
                    i.blocker.addEventListener(o.Cm.MOUSE_UP, i.blockerUpHandler);
                  }
                };
                i.setDropper = function (e) {
                  if (i.stage.mouseX !== i.lastMouseX || i.stage.mouseY !== i.lastMouseY || h.KE.currentZoom !== i.lastZoomLevel) {
                    i.dropperCursor.x = i.stage.mouseX + 1;
                    i.dropperCursor.y = i.stage.mouseY - 1;
                    i.dropperCursor.color = i.stageRenderBuffer.getColorAtMousePos();
                    i.lastMouseX = i.stage.mouseX;
                    i.lastMouseY = i.stage.mouseY;
                    i.lastZoomLevel = h.KE.currentZoom;
                  }
                };
                i.blockerUpHandler = function (e) {
                  i.removeEventListener(o.Jh.ENTER_FRAME, i.setDropper);
                  i.blocker.removeEventListener(o.Cm.MOUSE_UP, i.blockerUpHandler);
                  i.currentColor = i.dropperCursor.color;
                  i.commitColor();
                  i.dispatchEvent(new o.Jh(t.ROLL_OUT));
                  f.w.currentlyColorDropperOpen = false;
                };
                i.mouseTrack = function (e) {
                  var t = i.hueSliderSprite.mouseX;
                  var n = Math.max(0, Math.min(t / i.spectrumWidth, 1));
                  i.moveTab(n);
                  var r = Math.round(n * 360);
                  i.huePosition = r;
                  i.currentHue = i.intForHueValue(r);
                  i.setColorForSpectrumPosition(new o.bR(i.ring.x, i.ring.y));
                };
                i.spectrumMouseTrack = function (e) {
                  i.setColorForSpectrumPosition();
                };
                i.stageKeyUpHandler = function (e) {
                  if (e.keyCode == 27) {
                    i.currentColor = i._startColor;
                    i.commitColor();
                    f.w.currentlyColorDropperOpen = false;
                    i.dispatchEvent(new o.Jh(t.ROLL_OUT));
                  }
                };
                i.keyUpHandler = function (e) {
                  i._currentColor = (0, o.Hd)("0x" + i.colorText.text);
                  i.drawColorSprite();
                  if (e.keyCode == 13) {
                    i.commitColor();
                    i.showColorInUI();
                  }
                };
                i._startColor = i._currentColor = n;
                i._minusColor = r;
                i.addEventListener(o.Jh.ADDED_TO_STAGE, i.addedToStageHandler);
                return i;
              }
              x(t, e);
              var n;
              var r;
              var i = t.prototype;
              i.init = function () {
                this.stage = o.BI.main;
                this.stageRenderBuffer = new T(this.stage.renderer);
                this.drawBg();
                this.ring = new A();
                this.prevRing = new A();
                this.colorSprite = new o.kx();
                this.addChild(this.colorSprite);
                this.colorSprite.x = 7;
                this.colorSprite.y = 7;
                this.drawColorSprite();
                this.createTextField();
                if (this._minusColor) {
                  this.createNoColorBtn();
                }
                this.refreshSpectrum();
                this.addHueSlider();
                this.spectrumSprite.x = 7;
                this.spectrumSprite.y = 28;
                if (this.hueSliderSprite) {
                  this.hueSliderSprite.x = 7;
                  this.hueSliderSprite.y = this.spectrumSprite.y + this.spectrumSprite.height + 6;
                }
                this.addSwatches();
                this.spectrumSprite.addChild(this.ring);
                this.spectrumSprite.addChild(this.prevRing);
                this.prevRing.alpha = 0.5;
                this.prevRing.visible = false;
                var e = new o.kx();
                e.graphics.beginFill(16711680, 0.5);
                e.graphics.drawRect(0, 0, this.spectrumWidth, this.spectrumWidth);
                e.x = this.spectrumSprite.x;
                e.y = this.spectrumSprite.y;
                this.addSwatchButton = new h.Ch("+", 16777215, 23, 0, true);
                this.remSwatchButton = new h.Ch("-", 16777215, 23, 0, true);
                this.addChild(this.addSwatchButton);
                this.addChild(this.remSwatchButton);
                this.checkIfColorIsSwatch();
                this.dropperButton = new C();
                this.addChild(this.dropperButton);
                this.remSwatchButton.x = this.swatchStartX + this.swatchColumnLength * (this.swatchSize + this.swatchSpacer) - this.remSwatchButton.width;
                this.remSwatchButton.y = this.addSwatchButton.y = this.dropperButton.y = this.bg.height - this.remSwatchButton.height - 7;
                this.addSwatchButton.x = this.remSwatchButton.x - 28;
                this.dropperButton.x = this.swatchStartX;
                this.dropperButton.y = this.remSwatchButton.y + 2;
                this.showColorInUI();
                this.prevRing.x = this.ring.x;
                this.prevRing.y = this.ring.y;
                this.prevRing.visible = true;
                this.currentColor = this._currentColor;
                this.selectedColor = this._currentColor;
                this.addEventListener(o.Cm.MOUSE_OVER, this.mouseOverHandler);
                this.addEventListener(o.Cm.MOUSE_UP, this.mouseUpHandler);
                this.addEventListener(o.Cm.MOUSE_MOVE, this.mouseMoveHandler);
                this.addEventListener(o.Cm.MOUSE_OUT, this.mouseOutHandler);
                this.addEventListener(o.Cm.ROLL_OUT, this.mouseRollOutHander);
                this.colorText.addEventListener(o.kV.KEY_UP, this.keyUpHandler);
                this.colorText._pixiTextInput.on("input", this._updateColorText);
                this.stage.addEventListener(o.kV.KEY_UP, this.stageKeyUpHandler);
                this.spectrumSprite.addEventListener(o.Cm.MOUSE_DOWN, this.mouseDownHandler);
                this.hueSliderSprite.addEventListener(o.Cm.MOUSE_DOWN, this.mouseDownHandler);
              };
              i.drawBg = function () {
                if (!this.bg) {
                  this.bg = new o.kx();
                  this.addChild(this.bg);
                }
                this.bg.graphics.beginFill(10066329);
                this.bg.graphics.drawRect(0, 0, this.bgWidth, this.bgHeight);
                this.bg.graphics.endFill();
                this.bg.graphics.beginFill(13421772);
                this.bg.graphics.drawRect(2, 2, this.bgWidth - 4, this.bgHeight - 4);
                this.bg.graphics.endFill();
              };
              i.createTextField = function () {
                var e = new o.lk("HelveticaNeueLT Std", 11, 4032711, null, null, null, null, null, o.MA.LEFT);
                this.colorText = new o.A_();
                this.colorText.defaultTextFormat = e;
                this.colorText.maxChars = 6;
                this.colorText.type = o.ux.INPUT;
                this.colorText.width = 70;
                this.colorText.height = 20;
                this.colorText.x = this.colorSprite.x + this.colorSprite.width + 5;
                this.colorText.y = this.colorSprite.y;
                this.colorText.multiline = false;
                this.colorText.selectable = true;
                this.colorText.antiAliasType = o.BF.ADVANCED;
                this.colorText.restrict = "1234567890ABCDEFabcdef";
                this.addChild(this.colorText);
              };
              i.createNoColorBtn = function () {
                this.noColorBtn = new o.kx();
                this.noColorBtn.buttonMode = true;
                this.noColorBtn.tabEnabled = false;
                this.addChild(this.noColorBtn);
                this.noColorBtn.x = this.bgWidth - 23;
                this.noColorBtn.y = 7;
                this.noColorBtn.graphics.beginFill(16777215);
                this.noColorBtn.graphics.drawRect(0, 0, 16, 16);
                this.noColorBtn.graphics.endFill();
                this.noColorBtn.graphics.beginFill(16711680);
                this.noColorBtn.graphics.moveTo(13.5, 0);
                this.noColorBtn.graphics.lineTo(16, 0);
                this.noColorBtn.graphics.lineTo(16, 2.5);
                this.noColorBtn.graphics.lineTo(2.5, 16);
                this.noColorBtn.graphics.lineTo(0, 16);
                this.noColorBtn.graphics.lineTo(0, 13.5);
                this.noColorBtn.graphics.lineTo(13.5, 0);
                this.noColorBtn.graphics.endFill();
                this.noColorBtn.addEventListener(o.Cm.MOUSE_UP, this.mouseUpHandler);
              };
              i.drawColorSprite = function () {
                this.colorSprite.graphics.clear();
                this.colorSprite.graphics.beginFill(this._currentColor);
                this.colorSprite.graphics.drawRect(0, 0, 36, 16);
                this.colorSprite.graphics.endFill();
              };
              i.refreshSpectrum = function () {
                if (!this.spectrumSprite) {
                  this.spectrumSprite = new o.kx();
                  this.spectrumBitmap = new o.mb();
                  this.spectrumBitmap.pixiSprite.anchor.set(0);
                  this.spectrumSprite.addChild(this.spectrumBitmap);
                  this.spectrumSprite.mouseChildren = false;
                  this.addChild(this.spectrumSprite);
                  this.spectrumSprite.graphics.beginFill(16777215);
                  this.spectrumSprite.graphics.drawRect(0, 0, this.spectrumWidth, this.spectrumWidth);
                  this.spectrumData = new o.ws(this.spectrumWidth, this.spectrumWidth, false, 0, true);
                  this.spectrumBitmap.bitmapData = this.spectrumData;
                }
                var e;
                var t;
                var n;
                var r;
                var i = this.spectrumData;
                for (var s = 0; s < this.spectrumWidth; s++) {
                  e = s / this.spectrumWidth;
                  n = this.interpolateColor(16777215, this._currentHue, e);
                  for (var a = 0; a < this.spectrumWidth; a++) {
                    t = a / this.spectrumWidth;
                    r = this.interpolateColor(n, 0, t);
                    i.setPixel(s, a, r);
                  }
                }
                i.pixiRegularTexture.baseTexture.update();
                this.spectrumBitmap.bitmapData = i;
              };
              i.addHueSlider = function () {
                var e = this.createSpectrum(this.spectrumWidth);
                this.hueSliderSprite = new o.kx();
                this.hueSliderSprite.mouseChildren = false;
                this.addChild(this.hueSliderSprite);
                var t = new o.ws(this.spectrumWidth, this.sliderHeight, false, 0, true);
                for (var n = 0; n < e.length; n++) {
                  for (var r = 0; r < this.sliderHeight; r++) {
                    t.setPixel(n, r, e[n]);
                  }
                }
                this.hueSliderBitmap = new o.mb(t);
                this.hueSliderBitmap.pixiSprite.anchor.set(0);
                this.hueSliderSprite.addChild(this.hueSliderBitmap);
                this.hueSliderTab = new S();
                this.hueSliderSprite.addChild(this.hueSliderTab);
              };
              i.addSwatches = function () {
                this.swatchStartX = this.spectrumSprite.x + this.spectrumSprite.width + 5;
                this.swatchStartY = this.spectrumSprite.y;
                if (f.w.sharedObject.data.colorSwatches) {
                  t.swatches = f.w.sharedObject.data.colorSwatches;
                } else {
                  t.swatches = [];
                  for (var e = 0; e <= 16777215;) {
                    t.swatches.push(e);
                    e += 1118481;
                  }
                  t.swatches.push(16711680);
                  t.swatches.push(16776960);
                  t.swatches.push(65280);
                  t.swatches.push(65535);
                  t.swatches.push(255);
                  t.swatches.push(16711935);
                  t.swatches.push(4032711);
                  t.swatches.push(16777062);
                  t.swatches.push(16613761);
                  f.w.sharedObject.data.colorSwatches = t.swatches;
                }
                var n = new o.lk("HelveticaNeueLT Std", 11, 16777215, null, null, null, null, null, o.MA.LEFT);
                var r = new o.A_();
                r.defaultTextFormat = n;
                r.width = 70;
                r.height = 20;
                r.x = this.colorSprite.x + this.colorSprite.width + 5;
                r.y = this.colorSprite.y;
                r.multiline = false;
                r.selectable = false;
                r.antiAliasType = o.BF.ADVANCED;
                r.text = "Saved Colors";
                r.x = this.spectrumSprite.x + this.spectrumWidth + 5;
                r.y = this.colorText.y;
                this.addChild(r);
                this.refreshSwatches();
                this.swatchOutline = new o.kx();
                this.swatchOutline.graphics.lineStyle(1, 16777215);
                this.swatchOutline.graphics.drawRect(0, 0, this.swatchSize, this.swatchSize);
                this.swatchOutline.visible = false;
                this.swatchOutline.mouseEnabled = false;
                this.addChild(this.swatchOutline);
              };
              i.refreshSwatches = function () {
                if (this.colorSquares) {
                  for (var e = 0; e < this.colorSquares.length; e++) {
                    var n = this.colorSquares[e];
                    this.removeChild(n);
                  }
                }
                var r;
                this.colorSquares = [];
                h.fG.squareWidth = this.swatchSize;
                var i = this.swatchStartX;
                var s = this.swatchStartY;
                for (var a = 0; a < t.swatches.length; a++) {
                  (r = new h.fG(t.swatches[a])).x = i + a % this.swatchColumnLength * (this.swatchSize + this.swatchSpacer);
                  r.y = s + Math.floor(a / this.swatchColumnLength) * (this.swatchSize + this.swatchSpacer);
                  r.addEventListener(o.Cm.ROLL_OVER, this.mouseOverHandler);
                  r.addEventListener(o.Cm.ROLL_OUT, this.mouseOutHandler);
                  this.colorSquares.push(r);
                  this.addChild(r);
                }
                if (this.swatchOutline) {
                  this.removeChild(this.swatchOutline);
                  this.addChild(this.swatchOutline);
                }
                f.w.sharedObject.data.colorSwatches = t.swatches;
              };
              i.checkIfColorIsSwatch = function () {
                var e = t.swatches.indexOf(this.currentColor);
                if (e > -1) {
                  this.addSwatchButton.disabled = true;
                  if (e >= this.swatchBeginIndex && this.currentColor != -1) {
                    this.remSwatchButton.disabled = false;
                  } else {
                    this.remSwatchButton.disabled = true;
                  }
                  var n = this.swatchStartX + e % this.swatchColumnLength * (this.swatchSize + this.swatchSpacer);
                  var r = this.swatchStartY + Math.floor(e / this.swatchColumnLength) * (this.swatchSize + this.swatchSpacer);
                  this.swatchOutline.visible = true;
                  this.swatchOutline.x = n;
                  this.swatchOutline.y = r;
                } else {
                  this.swatchOutline.visible = false;
                  this.addSwatchButton.disabled = false;
                  this.remSwatchButton.disabled = true;
                }
              };
              i.showColorInUI = function () {
                if (this._currentColor < 0) {
                  this.ring.x = this.prevRing.x = 0;
                  this.ring.y = this.prevRing.y = this.spectrumWidth;
                  return;
                }
                var e = this.getColorObject();
                var t = e.red / 255;
                var n = e.green / 255;
                var r = e.blue / 255;
                var i = Math.max(t, n, r);
                var s = i;
                var a = e.red == e.green && e.green == e.blue;
                var o = 0;
                var h = 0;
                if (!a) {
                  var l;
                  var d;
                  var c;
                  var u;
                  if (i < 1) {
                    l = 1 / i;
                    d = e.red * l;
                    c = e.green * l;
                    u = e.blue * l;
                  } else {
                    d = e.red;
                    c = e.green;
                    u = e.blue;
                  }
                  var p = Math.min(d, c, u);
                  o = (255 - p) / 255;
                  if (p > 0) {
                    d = (d - p) * (l = 255 / (255 - p));
                    c = (c - p) * l;
                    u = (u - p) * l;
                  }
                  h = Math.atan2(Math.sqrt(3) * (c - u), d * 2 - c - u);
                  if (isNaN(h)) {
                    h = 0;
                  }
                  if (h < 0) {
                    h += Math.PI * 2;
                  }
                }
                this.ring.x = Math.round(this.spectrumWidth * o);
                this.ring.y = Math.round(this.spectrumWidth * (1 - s));
                this.prevRing.x = this.ring.x;
                this.prevRing.y = this.ring.y;
                if (!a) {
                  var m = h * 180 / Math.PI;
                  this.currentHue = this.intForHueValue(m);
                  var f = h / (Math.PI * 2) * this.spectrumWidth;
                  if (this.hueSliderTab) {
                    this.hueSliderTab.x = f;
                  }
                  var _ = f / this.spectrumWidth;
                  var v = Math.round(_ * 360);
                  this.huePosition = v;
                }
              };
              i.getColorObject = function () {
                var e = {};
                for (var t = this.currentColor.toString(16); t.length < 6;) {
                  t = "0" + t;
                }
                e.red = (0, o.Hd)("0x" + t.substring(0, 2));
                e.green = (0, o.Hd)("0x" + t.substr(2, 2));
                e.blue = (0, o.Hd)("0x" + t.substr(4, 2));
                return e;
              };
              i.commitColor = function (e = null) {
                o.KK.show();
                this.dispatchEvent(new o.Jh(t.COLOR_SELECTED));
              };
              i.setColorForSpectrumPosition = function (e = null) {
                if (!e) {
                  this.ring.x = Math.max(0, Math.min(this.spectrumSprite.mouseX, this.spectrumWidth));
                  this.ring.y = Math.max(0, Math.min(this.spectrumSprite.mouseY, this.spectrumWidth));
                }
                var t = this.ring.x / this.spectrumWidth;
                var n = 1 - this.ring.y / this.spectrumWidth;
                var r = this.HSVtoRGB(this.huePosition, t, n);
                var i = r[0] *= 255;
                var s = r[1] *= 255;
                var a = r[2] *= 255;
                this.currentColor = i << 16 | s << 8 | a;
              };
              i.addSwatchToSwatches = function (e) {
                if (t.swatches.length == this.maxSwatches) {
                  t.swatches.splice(this.swatchBeginIndex, 1);
                  t.swatches.push(e);
                } else {
                  t.swatches.push(e);
                }
                this.refreshSwatches();
              };
              i.removeSwatchFromSwatches = function (e) {
                var n = t.swatches.indexOf(e);
                if (n > -1) {
                  this.swatchOutline.visible = false;
                  t.swatches.splice(n, 1);
                  this.refreshSwatches();
                }
              };
              i.moveTab = function (e) {
                if (this.hueSliderTab) {
                  this.hueSliderTab.x = Math.floor(e * this.spectrumWidth);
                }
              };
              i.die = function () {
                o.KK.show();
                if (this.dropperCursor) {
                  this.removeEventListener(o.Jh.ENTER_FRAME, this.setDropper);
                  this.stage.removeChild(this.dropperCursor);
                  this.dropperCursor.destroy();
                  this.dropperCursor = null;
                  f.w.currentlyColorDropperOpen = false;
                }
                if (this.blocker) {
                  this.blocker.removeEventListener(o.Cm.MOUSE_UP, this.blockerUpHandler);
                  this.stage.removeChild(this.blocker);
                  this.blocker.destroy();
                  this.blocker = null;
                }
                this.hueSliderSprite.removeEventListener(o.Cm.MOUSE_DOWN, this.mouseDownHandler);
                this.spectrumSprite.removeEventListener(o.Cm.MOUSE_DOWN, this.mouseDownHandler);
                this.removeEventListener(o.Cm.ROLL_OUT, this.mouseRollOutHander);
                this.removeEventListener(o.Cm.MOUSE_OVER, this.mouseOverHandler);
                this.removeEventListener(o.Cm.MOUSE_DOWN, this.mouseDownHandler);
                this.removeEventListener(o.Cm.MOUSE_UP, this.mouseUpHandler);
                this.removeEventListener(o.Cm.MOUSE_MOVE, this.mouseMoveHandler);
                this.removeEventListener(o.Cm.MOUSE_OUT, this.mouseOutHandler);
                this.stage.removeEventListener(o.Cm.MOUSE_UP, this.mouseUpHandler);
                this.stage.removeEventListener(o.Cm.MOUSE_MOVE, this.mouseTrack);
                this.stage.removeEventListener(o.Cm.MOUSE_MOVE, this.spectrumMouseTrack);
                this.stage.removeEventListener(o.kV.KEY_UP, this.stageKeyUpHandler);
                this.colorText.removeEventListener(o.kV.KEY_UP, this.keyUpHandler);
                this.colorText._pixiTextInput.off("input", this._updateColorText);
                this.stage.focus = this.stage;
                if (this.parent) {
                  this.parent.removeChild(this);
                }
                this.destroy();
              };
              i.HSVtoRGB = function (e, t, n) {
                var r;
                var i;
                var s;
                e %= 360;
                if (t == 0) {
                  return [r = i = s = n, i, s];
                }
                e /= 60;
                var a = Math.floor(e);
                var o = e - a;
                var h = n * (1 - t);
                var l = n * (1 - t * o);
                var d = n * (1 - t * (1 - o));
                switch (a) {
                  case 0:
                    r = n;
                    i = d;
                    s = h;
                    break;
                  case 1:
                    r = l;
                    i = n;
                    s = h;
                    break;
                  case 2:
                    r = h;
                    i = n;
                    s = d;
                    break;
                  case 3:
                    r = h;
                    i = l;
                    s = n;
                    break;
                  case 4:
                    r = d;
                    i = h;
                    s = n;
                    break;
                  default:
                    r = n;
                    i = h;
                    s = l;
                }
                return [r, i, s];
              };
              i.interpolateColor = function (e, t, n) {
                var r = 1 - n;
                return (e >> 24 & 255) * r + (t >> 24 & 255) * n << 24 | (e >> 16 & 255) * r + (t >> 16 & 255) * n << 16 | (e >> 8 & 255) * r + (t >> 8 & 255) * n << 8 | (e & 255) * r + (t & 255) * n;
              };
              i.intForHueValue = function (e, t = 360) {
                var n;
                var r = 0;
                var i = 0;
                var s = 0;
                if ((n = Math.floor(e % t)) <= Number(t) / 6) {
                  r = 255;
                  i = this.I(e, t);
                  s = 0;
                }
                if (n >= Number(t) / 6 && n <= t * 2 / 6) {
                  r = 255 - this.I(e, t);
                  i = 255;
                  s = 0;
                }
                if (n >= t * 2 / 6 && n <= t * 3 / 6) {
                  r = 0;
                  i = 255;
                  s = this.I(e, t);
                }
                if (n >= t * 3 / 6 && n <= t * 4 / 6) {
                  r = 0;
                  i = 255 - this.I(e, t);
                  s = 255;
                }
                if (n >= t * 4 / 6 && n <= t * 5 / 6) {
                  r = this.I(e, t);
                  i = 0;
                  s = 255;
                }
                if (n >= t * 5 / 6) {
                  r = 255;
                  i = 0;
                  s = 255 - this.I(e, t);
                }
                return r << 16 | i << 8 | s;
              };
              i.createSpectrum = function (e = 100) {
                var t = [];
                for (var n = 0; n < e; n++) {
                  t.push(this.intForHueValue(n, e));
                }
                return t;
              };
              i.I = function (e, t) {
                return e % t / (Number(t) / 6) * 255 % 255;
              };
              n = t;
              if (r = [{
                key: "currentHue",
                set: function (e) {
                  this._currentHue = e;
                  this.refreshSpectrum();
                }
              }, {
                key: "selectedColor",
                get: function () {
                  return this._selectedColor;
                },
                set: function (e) {
                  this._selectedColor = e;
                  this.showColorInUI();
                  this.commitColor();
                }
              }, {
                key: "currentColor",
                get: function () {
                  return this._currentColor;
                },
                set: function (e) {
                  this._currentColor = e;
                  this.drawColorSprite();
                  if (this._currentColor < 0) {
                    this.colorText.text = "";
                  } else {
                    for (var t = this._currentColor.toString(16).toUpperCase(); t.length < 6;) {
                      t = "0" + t;
                    }
                    this.colorText.text = t;
                  }
                  this.checkIfColorIsSwatch();
                }
              }]) {
                (function (e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || false;
                    r.configurable = true;
                    if ("value" in r) {
                      r.writable = true;
                    }
                    Object.defineProperty(e, w(r.key), r);
                  }
                })(n.prototype, r);
              }
              Object.defineProperty(n, "prototype", {
                writable: false
              });
              return n;
            }(o.kx);
            function O(e) {
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
            function k(e, t) {
              k = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return k(e, t);
            }
            E.COLOR_SELECTED = "colorselected";
            E.ROLL_OUT = "rollout";
            var P = function (e) {
              function t(t) {
                var n;
                (n = e.call(this) || this).color = t;
                n.buttonMode = true;
                n.tabEnabled = false;
                return n;
              }
              var n;
              var r;
              var i;
              var s;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              k(n, r);
              t.prototype.drawSquare = function () {
                this.graphics.clear();
                this.graphics.beginFill(this._color);
                this.graphics.drawRect(0, 0, t.squareWidth, t.squareWidth);
                this.graphics.endFill();
              };
              i = t;
              if (s = [{
                key: "color",
                get: function () {
                  return this._color;
                },
                set: function (e) {
                  this._color = e;
                  this.drawSquare();
                }
              }]) {
                (function (e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || false;
                    r.configurable = true;
                    if ("value" in r) {
                      r.writable = true;
                    }
                    Object.defineProperty(e, O(r.key), r);
                  }
                })(i.prototype, s);
              }
              Object.defineProperty(i, "prototype", {
                writable: false
              });
              return i;
            }(o.kx);
            function M(e) {
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
            function R(e, t) {
              R = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return R(e, t);
            }
            P.squareWidth = 6;
            var I = function (e) {
              function t() {
                var t;
                (t = e.call(this) || this)._color = 16777215;
                t.changer = new o.j7((0, d.zI)("EditorUI", "DropperCursor"));
                t.addChild(t.changer);
                t.box = new o.kx();
                t.addChild(t.box);
                t.box.rotation = 45;
                t.box.x = 9;
                t.box.y = -11;
                return t;
              }
              var n;
              var r;
              var i;
              var s;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              R(n, r);
              i = t;
              if (s = [{
                key: "color",
                get: function () {
                  return this._color;
                },
                set: function (e) {
                  this._color = e;
                  var t = new o.Ix();
                  t.color = e;
                  this.changer.transform.colorTransform = t;
                  this.box.graphics.clear();
                  this.box.graphics.beginFill(e);
                  this.box.graphics.drawRect(0, 0, 2, 12);
                }
              }]) {
                (function (e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || false;
                    r.configurable = true;
                    if ("value" in r) {
                      r.writable = true;
                    }
                    Object.defineProperty(e, M(r.key), r);
                  }
                })(i.prototype, s);
              }
              Object.defineProperty(i, "prototype", {
                writable: false
              });
              return i;
            }(o.kx);
            var L = n(8260);
            function j(e, t) {
              j = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return j(e, t);
            }
            var B = function (e) {
              function t(t, n, r, i = false) {
                return e.call(this, t, n, r, i) || this;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              j(n, r);
              t.prototype.createLabel = function (e) {
                var t = new o.lk("HelveticaNeueLT Std Med", 12, 16777215, null, null, null, null, null, o.MA.LEFT);
                this.labelText = new o.A_();
                this.labelText.defaultTextFormat = t;
                this.labelText.autoSize = o.wL.LEFT;
                this.labelText.width = 10;
                this.labelText.height = 17;
                this.labelText.x = 0;
                this.labelText.y = 0;
                this.labelText.multiline = false;
                this.labelText.selectable = false;
                this.labelText.antiAliasType = o.BF.ADVANCED;
                this.labelText.text = e + ":";
                this.addChild(this.labelText);
                this.colorBorder.x = 108;
                this.noColorSprite.x = 117.5;
              };
              return t;
            }(p);
            function D(e) {
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
            function F(e, t) {
              F = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return F(e, t);
            }
            var N = function (e) {
              function t(t) {
                var n;
                (n = e.call(this) || this).defColor = 13421772;
                n.selColor = 4032711;
                n.createTextField();
                if (t !== null) {
                  n.textField.htmlText = "" + String(t);
                }
                n.bg = new o.kx();
                n.addChildAt(n.bg, 0);
                n.buttonMode = true;
                n.mouseChildren = true;
                n.selected = false;
                return n;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              F(n, r);
              var i;
              var s;
              var a = t.prototype;
              a.createTextField = function () {
                var e = new o.lk("HelveticaNeueLT Std Med", 12, 16777215, null, null, null, null, null, o.MA.LEFT);
                this.textField = new o.A_();
                this.textField.defaultTextFormat = e;
                this.textField.width = 195;
                this.textField.height = 18;
                this.textField.x = 5;
                this.textField.y = 2;
                this.textField.multiline = false;
                this.textField.wordWrap = false;
                this.textField.selectable = false;
                this.textField.antiAliasType = o.BF.ADVANCED;
                this.addChild(this.textField);
              };
              a.drawBg = function (e) {
                this.bg.graphics.clear();
                this.bg.graphics.beginFill(e);
                this.bg.graphics.drawRect(0, 0, 200, 20);
                this.bg.graphics.endFill();
                this.bg.graphics.lineStyle(0, 10066329, 1);
                this.bg.graphics.moveTo(0, 0);
                this.bg.graphics.lineTo(200, 0);
                this.bg.graphics.moveTo(0, 20);
                this.bg.graphics.lineTo(200, 20);
              };
              i = t;
              if (s = [{
                key: "selected",
                get: function () {
                  return this._selected;
                },
                set: function (e) {
                  this._selected = e;
                  if (this._selected) {
                    this.drawBg(this.selColor);
                  } else {
                    this.drawBg(this.defColor);
                  }
                }
              }]) {
                (function (e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || false;
                    r.configurable = true;
                    if ("value" in r) {
                      r.writable = true;
                    }
                    Object.defineProperty(e, D(r.key), r);
                  }
                })(i.prototype, s);
              }
              Object.defineProperty(i, "prototype", {
                writable: false
              });
              return i;
            }(o.kx);
            n(27495);
            n(90744);
            var G = n(50328);
            function U(e, t) {
              U = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return U(e, t);
            }
            var V = function (e) {
              function t(t, n, r, i, s, a, l, d, c) {
                var u;
                if (d === undefined) {
                  d = "EditorUI";
                }
                if (c === undefined) {
                  c = "SliderInput";
                }
                (u = e.call(this, t, n, r, i) || this).onTrack = null;
                u.keyDownHandlerBind = u.keyDownHandler.bind(u);
                u.mouseDownHandler = function (e) {
                  u.stage.addEventListener(o.Cm.MOUSE_UP, u.mouseUpHandler);
                  u.stage.addEventListener(o.Cm.MOUSE_MOVE, u.mouseTrack);
                  u.mouseTrack(new o.Cm(o.Cm.MOUSE_DOWN));
                };
                u.mouseUpHandler = function (e) {
                  u.stage.removeEventListener(o.Cm.MOUSE_UP, u.mouseUpHandler);
                  u.stage.removeEventListener(o.Cm.MOUSE_MOVE, u.mouseTrack);
                  u.currentString = u.inputText.text;
                  u.dispatchEvent(new h.vq(h.vq.VALUE_CHANGE, u, u.currentString));
                };
                u.mouseTrack = function (e) {
                  var t = Math.round((u.mouseX - u.sliderLine.x) / u.step);
                  t = (t = t < 0 ? 0 : t) > u.divisions ? u.divisions : t;
                  var n = Math.round(t * u.step);
                  u.sliderTab.x = n + u.sliderLine.x;
                  u.sliderLine.width = n;
                  var r = u.min + t * u.valueStep;
                  var i = r.toString().split(".");
                  if (i[1]) {
                    var s = i[1];
                    if (s.length > 2) {
                      var a = s.substr(0, 2) + "." + s.substr(2, 1);
                      var o = Math.round(Number(a));
                      r = Number(i[0] + "." + o);
                    }
                  }
                  u.text = r.toString();
                  if (u.onTrack) {
                    u.onTrack(r);
                  }
                };
                u.buildSliderInputView(d, c);
                u.min = s;
                u.max = a;
                u.valueRange = a - s;
                u.divisions = l;
                u.step = 100 / l;
                u.valueStep = u.valueRange / l;
                u.prepare();
                return u;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              U(n, r);
              var i = t.prototype;
              i.buildSliderInputView = function (e, t) {
                this.mc = (0, d.zI)(e, t);
                this.sliderLine = new o.kx(this.mc.sliderLine);
                this.addChild(this.sliderLine);
                this.sliderBG = new o.kx(this.mc.sliderBG);
                this.addChild(this.sliderBG);
                this.sliderTab = new o.kx(this.mc.sliderTab);
                this.addChild(this.sliderTab);
                this.inputText.x = 50;
              };
              i.prepare = function () {
                this.sliderLine.mouseEnabled = false;
                if (this.sliderBG) {
                  this.sliderBG.addEventListener(o.Cm.MOUSE_DOWN, this.mouseDownHandler);
                }
                this.sliderTab.addEventListener(o.Cm.MOUSE_DOWN, this.mouseDownHandler);
              };
              i.keyDownHandler = function (e) {
                if (e.keyCode == 13) {
                  var t = Number(this.inputText.text);
                  if (isNaN(t)) {
                    t = this.min;
                  }
                  if (t < this.min) {
                    t = this.min;
                  }
                  if (t > this.max) {
                    t = this.max;
                  }
                  this.currentString = String(t);
                  this.stage.focus = this.stage;
                  this.dispatchEvent(new h.vq(h.vq.VALUE_CHANGE, this, this.currentString));
                } else if (e.keyCode == 9 && !this._ambiguous) {
                  var n = Number(this.inputText.text);
                  if (isNaN(n)) {
                    n = this.min;
                  }
                  if (n < this.min) {
                    n = this.min;
                  }
                  if (n > this.max) {
                    n = this.max;
                  }
                  this.currentString = String(n);
                  this.dispatchEvent(new h.vq(h.vq.VALUE_CHANGE, this, this.currentString));
                  this.navigateTab(!e.shiftKey);
                }
              };
              i.setValue = function (e) {
                if (e !== 0 && !Number(e)) {
                  e = this.defaultValue || 0;
                }
                this.text = this.formatValue(e);
                var t = (e - this.min) / this.valueRange;
                var n = Math.round(t * 100);
                this.sliderTab.x = n + this.sliderLine.x;
                this.sliderLine.width = n;
              };
              i.die = function () {
                e.prototype.die.call(this);
                if (this.stage) {
                  this.stage.removeEventListener(o.Cm.MOUSE_UP, this.mouseUpHandler);
                  this.stage.removeEventListener(o.Cm.MOUSE_MOVE, this.mouseTrack);
                }
                this.sliderTab.removeEventListener(o.Cm.MOUSE_DOWN, this.mouseDownHandler);
                if (this.sliderBG) {
                  this.sliderBG.removeEventListener(o.Cm.MOUSE_DOWN, this.mouseDownHandler);
                }
              };
              i.onRemoved = function (t) {
                this.stage.removeEventListener(o.Cm.MOUSE_UP, this.mouseUpHandler);
                this.stage.removeEventListener(o.Cm.MOUSE_MOVE, this.mouseTrack);
                e.prototype.onRemoved.call(this, t);
              };
              return t;
            }(G.k);
            var H = n(14865);
            var z = n(15081);
            function W(e, t) {
              W = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return W(e, t);
            }
            var X = function (e) {
              function t(t, n, r) {
                var i;
                if (r === undefined) {
                  r = 10;
                }
                (i = e.call(this, t, n, r) || this).mouseUpHandler = function (e) {
                  i.stage.removeEventListener(o.Cm.MOUSE_UP, i.mouseUpHandler);
                  i.stage.removeEventListener(o.Cm.MOUSE_MOVE, i.updateContent);
                  i.stopScrollDrag();
                };
                return i;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              W(n, r);
              var i = t.prototype;
              i.createParts = function () {
                this.bg = new o.kx();
                this.addChild(this.bg);
                this.bg.graphics.beginFill(6710886);
                this.bg.graphics.drawRect(0, 0, 12, 100);
                this.bg.graphics.endFill();
                this.bg.scale9Grid = new o.M_(2, 5, 8, 90);
                this.scrollTab = new o.kx();
                this.addChild(this.scrollTab);
                this.scrollTab.graphics.lineStyle(0, 10066329, 1, true, o.s9.NONE, o.Lt.NONE, o.ox.MITER, 3);
                this.scrollTab.graphics.beginFill(13421772);
                this.scrollTab.graphics.drawRect(0, 0, 12, 100);
                this.scrollTab.graphics.endFill();
                this.scrollTab.scale9Grid = new o.M_(2, 5, 8, 90);
              };
              i.updateScrollTab = function () {
                this.adjustContentLimits();
                var e = this.maskSprite.graphics.height / this.content.height;
                if (e > 1) {
                  e = 1;
                }
                this.scrollTab.height = e * this.bg.height;
                this.scrollTab.y = this.content.y * -this.bg.height / this.content.height;
              };
              return t;
            }(n(5711).X);
            n(62010);
            var Y = n(12151);
            function q(e) {
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
            function J(e, t) {
              J = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return J(e, t);
            }
            var K = function (e) {
              function t() {
                var n;
                (n = e.call(this) || this).listHeight = 220;
                n.totalHeight = 224;
                n.totalWidth = 154;
                n.itemWidth = 150;
                n.mouseUpHandler = function (e) {
                  if (e instanceof h.tR) {
                    var r = e;
                    r.expanded = !r.expanded;
                    n.organizeList();
                    n.scroller.updateScrollTab();
                  } else if (e instanceof h.Bx) {
                    if (n._selectedItem) {
                      if (n._selectedItem == e) {
                        return;
                      }
                      n._selectedItem.selected = false;
                    }
                    n._selectedItem = e;
                    n._selectedItem.selected = true;
                    n.dispatchEvent(new o.Jh(t.SPECIAL_CHOSEN));
                  }
                };
                n.mouseOverHandler = function (e) {
                  if (e) {
                    var t = e;
                    if (n.lastRolledItem) {
                      n.lastRolledItem.rollOut();
                    }
                    n.lastRolledItem = t;
                    n.lastRolledItem.rollOver();
                  }
                };
                n.init();
                return n;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              J(n, r);
              var i;
              var s;
              var a = t.prototype;
              a.init = function () {
                this.createList();
              };
              a.createList = function () {
                this.holder = new o.kx();
                this.holder.y = 2;
                this.holder.x = 2;
                this.addChild(this.holder);
                this.listMask = new o.kx();
                this.listMask.graphics.beginFill(0);
                this.listMask.graphics.drawRect(0, 0, this.itemWidth, this.listHeight);
                this.listMask.graphics.endFill();
                this.holder.addChild(this.listMask);
                this.list = new o.kx();
                this.holder.addChildAt(this.list, 0);
                this.list.mask = this.listMask;
                for (var e = 0; e < t.specialList.length; e++) {
                  var n = t.specialList[e];
                  var r = this.createItem(n, 0);
                  if (r) {
                    this.list.addChild(r);
                  }
                }
                this.organizeList();
                this.scroller = new h.Em(this.list, this.listMask, 22);
                this.holder.addChild(this.scroller);
                this.scroller.x = this.itemWidth - 12;
              };
              a.createItem = function (e, t) {
                var n = this;
                if (e instanceof Array) {
                  var r = e;
                  var i = new h.tR(r[0], t, this.itemWidth);
                  i.bg.pixiSprite.interactive = true;
                  i.bg.pixiSprite.on("pointerover", function () {
                    return n.mouseOverHandler(i);
                  });
                  i.bg.pixiSprite.on("pointertap", function () {
                    return n.mouseUpHandler(i);
                  });
                  for (var s = 1; s < r.length; s++) {
                    var a = r[s];
                    var o = this.createItem(a, t + 1);
                    if (o) {
                      i.addChildItem(o);
                    }
                  }
                  return i;
                }
                var l = e;
                var d = (0, Y.k)(l, null);
                if (!d) {
                  return null;
                }
                var c = new d();
                var u = new h.Bx(c.name, l, t, this.itemWidth);
                u.bg.pixiSprite.interactive = true;
                u.bg.pixiSprite.on("pointerover", function () {
                  return n.mouseOverHandler(u);
                });
                u.bg.pixiSprite.on("pointertap", function () {
                  return n.mouseUpHandler(u);
                });
                if (!this._selectedItem) {
                  this._selectedItem = u;
                  this._selectedItem.selected = true;
                }
                return u;
              };
              a.organizeList = function () {
                var e = 0;
                for (var t = 0; t < this.list.numChildren; t++) {
                  var n = this.list.getChildAt(t);
                  n.y = e;
                  e += n.height;
                  if (n instanceof h.tR) {
                    n.organizeChildren();
                  }
                }
              };
              a.die = function () {
                this.scroller.die();
              };
              i = t;
              if (s = [{
                key: "selectedClassName",
                get: function () {
                  return this._selectedItem.value;
                }
              }, {
                key: "height",
                get: function () {
                  return this.totalHeight;
                }
              }, {
                key: "width",
                get: function () {
                  return this.totalWidth;
                }
              }]) {
                (function (e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || false;
                    r.configurable = true;
                    if ("value" in r) {
                      r.writable = true;
                    }
                    Object.defineProperty(e, q(r.key), r);
                  }
                })(i.prototype, s);
              }
              Object.defineProperty(i, "prototype", {
                writable: false
              });
              return i;
            }(o.kx);
            K.SPECIAL_CHOSEN = "specialchosen";
            K.specialList = [["building blocks", "IBeamRef", "LogRef", "RailRef"], ["hazards", "ArrowGunRef", "HarpoonGunRef", "HomingMineRef", "MineRef", "SpikesRef", "WreckingBallRef"], ["movement", "CannonRef", "BoostRef", "FanRef", "JetRef", "SpringBoxRef", "PaddleRef"], ["characters", "NPCharacterRef"], ["buildings", "Building1Ref", "Building2Ref"], ["miscellaneous", "BladeWeaponRef", "FoodItemRef", "ChainRef", "GlassRef", "MeteorRef", "TableRef", "ChairRef", "BottleRef", "TVRef", "BoomboxRef", "SoccerBallRef", "VanRef", "SignPostRef", "TrashCanRef", "ToiletRef"], "TokenRef", "FinishLineRef"];
            var Z = n(42574);
            var $ = n(3305);
          }
    });
})();
