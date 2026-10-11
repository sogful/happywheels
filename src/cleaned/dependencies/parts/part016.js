(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        53289(e, t, n) {
            "use strict";
        
            n.d(t, {
              E: () => h
            });
            var r = n(4971);
            var i = n(23222);
            var s = n(98576);
            var a = n(35057);
            function o(e, t) {
              o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return o(e, t);
            }
            var h = function (e) {
              function t(n, a) {
                var o;
                (o = e.call(this) || this).increment = 0;
                o.detectBodies = function (e) {
                  if (o._targetRef) {
                    o._targetRef.alpha = 1;
                  }
                  o._targetRef = null;
                  var t;
                  var n = Infinity;
                  var r = new i.RM(o.mouseX, o.mouseY);
                  var s = 0;
                  var a = o._triggers.length;
                  for (var h = o._canvas.shapes.numChildren, l = 0; l < h; l++) {
                    var d = o._canvas.shapes.getChildAt(l);
                    if (d.triggerable && d.hitTestPoint(o.stage.mouseX, o.stage.mouseY, true)) {
                      t = false;
                      var c = [];
                      for (var u = 0; u < a; u++) {
                        var p = o._triggers[u].targets.indexOf(d);
                        c[u] = p;
                        if (p < 0) {
                          t = true;
                        }
                      }
                      if (t && (s = new i.RM(d.x - r.x, d.y - r.y).LengthSquared()) < n) {
                        o._targetRef = d;
                        n = s;
                        o.indexArray = c;
                      }
                    }
                  }
                  h = o._canvas.special.numChildren;
                  for (var m = 0; m < h; m++) {
                    var f = o._canvas.special.getChildAt(m);
                    if (f.triggerable && f.hitTestPoint(o.stage.mouseX, o.stage.mouseY, true)) {
                      t = false;
                      var _ = [];
                      for (var v = 0; v < a; v++) {
                        var y = o._triggers[v].targets.indexOf(f);
                        _[v] = y;
                        if (y < 0) {
                          t = true;
                        }
                      }
                      if (t && (s = new i.RM(f.x - r.x, f.y - r.y).LengthSquared()) < n) {
                        o._targetRef = f;
                        n = s;
                        o.indexArray = _;
                      }
                    }
                  }
                  h = o._canvas.groups.numChildren;
                  for (var g = 0; g < h; g++) {
                    var w = o._canvas.groups.getChildAt(g);
                    if (w.triggerable && w.hitTestPoint(o.stage.mouseX, o.stage.mouseY, true)) {
                      t = false;
                      var x = [];
                      for (var b = 0; b < a; b++) {
                        var T = o._triggers[b].targets.indexOf(w);
                        x[b] = T;
                        if (T < 0) {
                          t = true;
                        }
                      }
                      if (t && (s = new i.RM(w.x - r.x, w.y - r.y).LengthSquared()) < n) {
                        o._targetRef = w;
                        n = s;
                        o.indexArray = x;
                      }
                    }
                  }
                  h = o._canvas.joints.numChildren;
                  for (var A = 0; A < h; A++) {
                    var C = o._canvas.joints.getChildAt(A);
                    if (C.triggerable && C.hitTestPoint(o.stage.mouseX, o.stage.mouseY, true)) {
                      t = false;
                      var S = [];
                      for (var E = 0; E < a; E++) {
                        var O = o._triggers[E].targets.indexOf(C);
                        S[E] = O;
                        if (O < 0) {
                          t = true;
                        }
                      }
                      if (t && (s = new i.RM(C.x - r.x, C.y - r.y).LengthSquared()) < n) {
                        o._targetRef = C;
                        n = s;
                        o.indexArray = S;
                      }
                    }
                  }
                  h = o._canvas.triggers.numChildren;
                  for (var k = 0; k < h; k++) {
                    var P = o._canvas.triggers.getChildAt(k);
                    if (P.triggerable && P.hitTestPoint(o.stage.mouseX, o.stage.mouseY, true)) {
                      t = false;
                      var M = [];
                      for (var R = 0; R < a; R++) {
                        var I = o._triggers[R];
                        if (P != I && !o.checkCircularLink(I, P)) {
                          var L = I.targets.indexOf(P);
                          M[R] = L;
                          if (L < 0) {
                            t = true;
                          }
                        }
                      }
                      if (t && (s = new i.RM(P.x - r.x, P.y - r.y).LengthSquared()) < n) {
                        o._targetRef = P;
                        n = s;
                        o.indexArray = M;
                      }
                    }
                  }
                  o.drawArms();
                };
                o.mouseDownHandler = function (e) {
                  o.removeEventListener(r.Cm.MOUSE_DOWN, o.mouseDownHandler);
                  o.stage.addEventListener(r.Cm.MOUSE_UP, o.mouseUpHandler);
                };
                o.mouseUpHandler = function (e) {
                  if (o._targetRef) {
                    var n;
                    var i;
                    for (var a = 0; a < o._triggers.length; a++) {
                      var h = o._triggers[a];
                      if (o.indexArray[a] < 0) {
                        n = h.addTarget(o._targetRef);
                        if (i) {
                          i.nextAction = n;
                        }
                        i = n;
                      }
                    }
                    o.dispatchEvent(new s.X(s.X.GENERIC, n));
                  } else {
                    o.dispatchEvent(new r.Jh(t.SELECT_COMPLETE));
                  }
                  if (o.stage) {
                    o.stage.removeEventListener(r.Cm.MOUSE_UP, o.mouseUpHandler);
                  }
                };
                o._triggers = n;
                o._canvas = a;
                a.addChild(o);
                o.indexArray = [];
                o.addEventListener(r.Jh.ENTER_FRAME, o.detectBodies);
                o.stage.addEventListener(r.Cm.MOUSE_DOWN, o.mouseDownHandler);
                return o;
              }
              var n;
              var h;
              h = e;
              (n = t).prototype = Object.create(h.prototype);
              n.prototype.constructor = n;
              o(n, h);
              var l = t.prototype;
              l.checkCircularLink = function (e, t) {
                for (var n = e.triggers.length, r = 0; r < n; r++) {
                  var i = e.triggers[r];
                  return i == t || this.checkCircularLink(i, t);
                }
                return false;
              };
              l.drawArms = function () {
                var e = 0.15;
                if (a.w.use60FPS) {
                  e /= 2;
                }
                this.increment += e;
                var t = Math.sin(this.increment) * 0.4;
                var n = 0.6 - t;
                var r = 0.6 + t;
                this.graphics.clear();
                if (this._targetRef) {
                  this._targetRef.alpha = n;
                  this.graphics.lineStyle(3, 16613761, r);
                  for (var i = 0; i < this._triggers.length; i++) {
                    var s = this._triggers[i];
                    if (this.indexArray[i] < 0) {
                      this.graphics.moveTo(s.x, s.y);
                      this.graphics.lineTo(this._targetRef.x, this._targetRef.y);
                    }
                  }
                  this.graphics.beginFill(16613761, r);
                  this.graphics.drawCircle(this._targetRef.x, this._targetRef.y, 3);
                  this.graphics.endFill();
                } else {
                  this.graphics.lineStyle(1, 16613761, r);
                  for (var o = 0; o < this._triggers.length; o++) {
                    var h = this._triggers[o];
                    this.graphics.moveTo(h.x, h.y);
                    this.graphics.lineTo(this.mouseX, this.mouseY);
                  }
                  this.graphics.beginFill(16613761, r);
                  this.graphics.drawCircle(this.mouseX, this.mouseY, 1.5);
                  this.graphics.endFill();
                }
              };
              l.die = function () {
                if (this._targetRef) {
                  this._targetRef.alpha = 1;
                }
                this.graphics.clear();
                this.removeEventListener(r.Jh.ENTER_FRAME, this.detectBodies);
                this.stage.removeEventListener(r.Cm.MOUSE_UP, this.mouseUpHandler);
                this.stage.removeEventListener(r.Cm.MOUSE_DOWN, this.mouseDownHandler);
                this._canvas.removeChild(this);
              };
              return t;
            }(r.kx);
            h.SELECT_COMPLETE = "selectcomplete";
          },
        46972(e, t, n) {
            "use strict";
        
            n.d(t, {
              o: () => l
            });
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(26099);
            n(2892);
            var r = n(4971);
            var i = n(80902);
            var s = n(13362);
            var a = n(98263);
            function o(e) {
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
            function h(e, t) {
              h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return h(e, t);
            }
            var l = function (e) {
              function t(t, n, i, a, o, h) {
                var l;
                if (i === undefined) {
                  i = true;
                }
                if (a === undefined) {
                  a = true;
                }
                if (o === undefined) {
                  o = false;
                }
                if (h === undefined) {
                  h = null;
                }
                (l = e.call(this) || this).mouseDownHandler = function (e) {
                  if (l.selected == 0) {
                    l.selected = true;
                  } else {
                    l.selected = false;
                  }
                  l.dispatchEvent(new s.vq(s.vq.VALUE_CHANGE, l, l._selected));
                };
                l.childValueChange = function (e) {
                  l.dispatchEvent(e.clone());
                };
                l.buildView();
                l.labelText.text = t;
                if (h) {
                  l.labelText.textColor = (0, r.Hd)(h);
                }
                l.attribute = n;
                l.childInputs = [];
                l._editable = true;
                l.selected = i;
                l.editable = a;
                l.oppositeDependent = o;
                l.init();
                return l;
              }
              var n;
              var i;
              i = e;
              (n = t).prototype = Object.create(i.prototype);
              n.prototype.constructor = n;
              h(n, i);
              var l;
              var d;
              var c = t.prototype;
              c.buildView = function () {
                this.mc = (0, a.zI)("EditorUI", "CheckBox");
                this.box = new r.kx(this.mc.box);
                this.addChild(this.box);
                this.check = new r.kx(this.mc.check);
                this.addChild(this.check);
                this.dash = new r.kx(this.mc.dash);
                this.addChild(this.dash);
                var e = new r.lk("HelveticaNeueLT Std", 11, 16777215, null, null, null, null, null, r.MA.LEFT);
                this.labelText = new r.A_();
                this.addChild(this.labelText);
                this.labelText.defaultTextFormat = e;
                this.labelText.x = 25;
                this.labelText.y = 3;
              };
              c.addChildInput = function (e) {
                this.childInputs.push(e);
                if (!this._selected) {
                  e.editable = this.oppositeDependent;
                }
                if (this._selected) {
                  e.editable = !this.oppositeDependent;
                }
                e.addEventListener(s.vq.VALUE_CHANGE, this.childValueChange);
              };
              c.init = function () {
                this.labelText.mouseEnabled = false;
                this.check.mouseEnabled = false;
                this.dash.mouseEnabled = false;
                this.labelText.autoSize = r.wL.LEFT;
                this.labelText.wordWrap = false;
                this.box.addEventListener(r.Cm.MOUSE_DOWN, this.mouseDownHandler);
              };
              c.setToAmbiguous = function () {
                this.dash.visible = true;
                this.check.visible = false;
                this._selected = false;
                this._ambiguous = true;
                for (var e = 0; e < this.childInputs.length; e++) {
                  this.childInputs[e].editable = false;
                }
              };
              c.setValue = function (e) {
                this.selected = e;
              };
              c.die = function () {
                e.prototype.die.call(this);
                this.box.removeEventListener(r.Cm.MOUSE_DOWN, this.mouseDownHandler);
                for (var t = 0; t < this.childInputs.length; t++) {
                  var n = this.childInputs[t];
                  n.removeEventListener(s.vq.VALUE_CHANGE, this.childValueChange);
                  n.die();
                }
                this.childInputs = [];
                if (s.uO.instance._target === this) {
                  s.uO.instance.hide();
                }
              };
              c.destroy = function () {
                this.mc.labelText.destroy({
                  children: true,
                  baseTexture: true,
                  texture: true
                });
                e.prototype.destroy.call(this);
              };
              l = t;
              if (d = [{
                key: "selected",
                get: function () {
                  return this._selected;
                },
                set: function (e) {
                  if (this._editable) {
                    this._selected = e;
                    this._ambiguous = false;
                    this.dash.visible = false;
                    if (this._selected) {
                      this.check.visible = true;
                      for (var t = 0; t < this.childInputs.length; t++) {
                        this.childInputs[t].editable = !this.oppositeDependent;
                      }
                    } else {
                      this.check.visible = false;
                      for (var n = 0; n < this.childInputs.length; n++) {
                        this.childInputs[n].editable = this.oppositeDependent;
                      }
                    }
                  }
                }
              }, {
                key: "editable",
                set: function (e) {
                  this._editable = e;
                  if (e) {
                    this.alpha = 1;
                    this.mouseEnabled = true;
                    this.dash.visible = false;
                    if (this._selected) {
                      this.check.visible = true;
                    }
                  } else {
                    this.alpha = 0.5;
                    this.mouseEnabled = false;
                    this.dash.visible = true;
                    this.check.visible = false;
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
                    Object.defineProperty(e, o(r.key), r);
                  }
                })(l.prototype, d);
              }
              Object.defineProperty(l, "prototype", {
                writable: false
              });
              return l;
            }(i.C);
          },
        8260(e, t, n) {
            "use strict";
        
            n.d(t, {
              C: () => h
            });
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(26099);
            n(2892);
            var r = n(4971);
            var i = n(13362);
            var s = n(46682);
            function a(e) {
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
            function o(e, t) {
              o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return o(e, t);
            }
            var h = function (e) {
              function t(t, n, i, s, a) {
                var o;
                if (s === undefined) {
                  s = 16777215;
                }
                if (a === undefined) {
                  a = false;
                }
                (o = e.call(this) || this)._bgHeight = 28;
                o.offAlpha = 0.7;
                o.rollOverHandlerBind = o.rollOverHandler.bind(o);
                o.rollOutHandlerBind = o.rollOutHandler.bind(o);
                o.useGraphicsAsBg = false;
                o.mouseUpHandler = function (e) {};
                o.mouseChildren = false;
                o.buttonMode = true;
                o.tabEnabled = false;
                o.useGraphicsAsBg = a;
                o._bgColor = n;
                o._bgWidth = i;
                o._txtColor = s;
                o.createTextField();
                o.textField.text = t;
                o.createBg();
                o.selected = false;
                o.addEventListener(r.Cm.ROLL_OVER, o.rollOverHandlerBind, false, 0, true);
                o.addEventListener(r.Cm.ROLL_OUT, o.rollOutHandlerBind, false, 0, true);
                return o;
              }
              var n;
              var h;
              h = e;
              (n = t).prototype = Object.create(h.prototype);
              n.prototype.constructor = n;
              o(n, h);
              var l;
              var d;
              var c = t.prototype;
              c.die = function () {
                this.removeEventListener(r.Cm.ROLL_OVER, this.rollOverHandlerBind, false);
                this.removeEventListener(r.Cm.ROLL_OUT, this.rollOutHandlerBind, false);
                this.destroy();
              };
              c.createTextField = function () {
                var e = new r.lk("HelveticaNeueLT Std Med", 12, this._txtColor, null, null, null, null, null, r.MA.CENTER);
                this.textField = new r.A_();
                this.textField.defaultTextFormat = e;
                this.textField.width = this._bgWidth;
                this.textField.height = 20;
                this.textField.y = 3;
                this.textField.multiline = false;
                this.textField.selectable = false;
                this.textField.antiAliasType = r.BF.ADVANCED;
                this.addChild(this.textField);
              };
              c.createBg = function () {
                if (this.useGraphicsAsBg) {
                  this.bg = new r.kx();
                  this.bg.graphics.beginFill(this._bgColor);
                  this.bg.graphics.drawRoundRect(0, 0, this._bgWidth, this._bgHeight - 4, 4);
                  this.addChildAt(this.bg, 0);
                  return;
                }
                var e = "generic-btn-grey.png";
                switch (this._bgColor) {
                  case 10066329:
                    e = "generic-btn-grey.png";
                    break;
                  case 4032711:
                    e = "generic-btn-blue.png";
                    break;
                  case 16776805:
                    e = "generic-btn-yellow.png";
                    break;
                  case 16613761:
                    e = "generic-btn-red.png";
                    break;
                  case 13421772:
                    e = "generic-btn-light-grey.png";
                    break;
                  case 5162061:
                    e = "generic-btn-green.png";
                }
                var t = new s.F_S(s.gPd.from(e), 15, 10, 15, 20);
                this.bg = new r.kx(t);
                this.bg.width = this._bgWidth + 4;
                this.bg.height = this._bgHeight;
                this.bg.y -= 2;
                this.bg.x -= 2;
                this.addChildAt(this.bg, 0);
              };
              c.rollOverHandler = function (e = null) {
                this.textField.alpha = 1;
                if (this._helpString) {
                  i.uO.instance.show(this._helpString, this, 5);
                }
              };
              c.rollOutHandler = function (e = null) {
                if (!this._selected) {
                  this.textField.alpha = this.offAlpha;
                }
              };
              l = t;
              if (d = [{
                key: "label",
                get: function () {
                  return this.textField.text;
                },
                set: function (e) {
                  this.textField.text = e;
                }
              }, {
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
              }, {
                key: "disabled",
                get: function () {
                  return this._disabled;
                },
                set: function (e) {
                  this._disabled = e;
                  if (e) {
                    this.removeEventListener(r.Cm.ROLL_OVER, this.rollOverHandlerBind);
                    this.removeEventListener(r.Cm.ROLL_OUT, this.rollOutHandlerBind);
                    this.mouseEnabled = false;
                    this.buttonMode = false;
                    this.alpha = 0.5;
                  } else {
                    this.addEventListener(r.Cm.ROLL_OVER, this.rollOverHandlerBind, false, 0, true);
                    this.addEventListener(r.Cm.ROLL_OUT, this.rollOutHandlerBind, false, 0, true);
                    this.mouseEnabled = true;
                    this.buttonMode = true;
                    this.alpha = 1;
                  }
                }
              }, {
                key: "functionString",
                get: function () {
                  return this._functionString;
                },
                set: function (e) {
                  this._functionString = e;
                }
              }, {
                key: "helpString",
                get: function () {
                  return this._helpString;
                },
                set: function (e) {
                  this._helpString = e;
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
                    Object.defineProperty(e, a(r.key), r);
                  }
                })(l.prototype, d);
              }
              Object.defineProperty(l, "prototype", {
                writable: false
              });
              return l;
            }(r.kx);
          },
        80902(e, t, n) {
            "use strict";
        
            n.d(t, {
              C: () => o
            });
            n(9868);
            n(26099);
            n(38781);
            n(27495);
            n(25440);
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(2892);
            var r = n(4971);
            var i = n(13362);
            function s(e) {
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
            function a(e, t) {
              a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return a(e, t);
            }
            var o = function (e) {
              function t() {
                var t;
                (t = e.call(this) || this)._multipleIndex = 0;
                t.decimals = -1;
                t.mouseOverHandler = function (e) {
                  if (t._editable) {
                    i.uO.instance.show(t._helpCaption, t);
                  }
                };
                t.childInputs = [];
                return t;
              }
              var n;
              var o;
              o = e;
              (n = t).prototype = Object.create(o.prototype);
              n.prototype.constructor = n;
              a(n, o);
              var h;
              var l;
              var d = t.prototype;
              d.die = function () {
                this.removeEventListener(r.Cm.ROLL_OVER, this.mouseOverHandler);
                this.destroy();
              };
              d.setToAmbiguous = function () {};
              d.setValue = function (e) {};
              d.formatValue = function (e) {
                var t = this.decimals >= 0 ? e.toFixed(this.decimals) : e.toString();
                if (this.decimals >= 0) {
                  t = t.replace(/\.0+$/, "");
                }
                return t;
              };
              h = t;
              if (l = [{
                key: "editable",
                get: function () {
                  return this._editable;
                },
                set: function (e) {
                  this._editable = e;
                }
              }, {
                key: "ambiguous",
                get: function () {
                  return this._ambiguous;
                }
              }, {
                key: "multipleIndex",
                get: function () {
                  return this._multipleIndex;
                },
                set: function (e) {
                  this._multipleIndex = e;
                }
              }, {
                key: "multipleKey",
                get: function () {
                  return this._multipleKey;
                },
                set: function (e) {
                  this._multipleKey = e;
                }
              }, {
                key: "helpCaption",
                get: function () {
                  return this._helpCaption;
                },
                set: function (e) {
                  this._helpCaption = e;
                  if (this._helpCaption) {
                    this.addEventListener(r.Cm.ROLL_OVER, this.mouseOverHandler);
                  }
                }
              }, {
                key: "defaultValue",
                get: function () {
                  return this._defaultValue;
                },
                set: function (e) {
                  this._defaultValue = e;
                }
              }, {
                key: "expandable",
                get: function () {
                  return this._expandable;
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
                    Object.defineProperty(e, s(r.key), r);
                  }
                })(h.prototype, l);
              }
              Object.defineProperty(h, "prototype", {
                writable: false
              });
              return h;
            }(r.kx);
          }
    });
})();
