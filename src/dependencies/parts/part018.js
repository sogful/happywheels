(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        15081(e, t, n) {
            "use strict";
        
            n.d(t, {
              B: () => a
            });
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(26099);
            n(2892);
            var r = n(4971);
            function i(e) {
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
            function s(e, t) {
              s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return s(e, t);
            }
            var a = function (e) {
              function t(t, n, i, s) {
                var a;
                if (i === undefined) {
                  i = 0;
                }
                if (s === undefined) {
                  s = 100;
                }
                (a = e.call(this) || this).indentPixels = 13;
                a._bgHeight = 22;
                a._defBgColor = 13421772;
                a._overBgColor = 14540253;
                a._downBgColor = 4032711;
                a._defTextColor = 16777215;
                a._overTextColor = 10066329;
                a._downTextColor = 16777215;
                a.rollOver = function (e = null) {
                  if (!a._selected) {
                    a.drawBg(a._overBgColor);
                    a.textField.textColor = a._overTextColor;
                    a.drawSymbol();
                    if (a._parentItem) {
                      a._parentItem.rollOver();
                    }
                  }
                };
                a.rollOut = function (e = null) {
                  if (!a._selected) {
                    a.drawBg(a._defBgColor);
                    a.textField.textColor = a._defTextColor;
                    a.drawSymbol();
                    if (a._parentItem) {
                      a._parentItem.rollOut();
                    }
                  }
                };
                a._value = n;
                a.createTextField();
                a.textField.text = t;
                a.textField.x = 5 + i * a.indentPixels;
                if (i > 0) {
                  var o = i * 1118481;
                  a._defBgColor -= o;
                  a._overBgColor -= o;
                  a._downBgColor -= o;
                  a._defTextColor -= o;
                  a._overTextColor -= o;
                  a._downTextColor -= o;
                }
                a._bgWidth = s;
                a.bg = new r.kx();
                a.addChildAt(a.bg, 0);
                a.rollOut();
                a.mouseEnabled = true;
                return a;
              }
              var n;
              var a;
              a = e;
              (n = t).prototype = Object.create(a.prototype);
              n.prototype.constructor = n;
              s(n, a);
              var o;
              var h;
              var l = t.prototype;
              l.createTextField = function () {
                var e = new r.lk("HelveticaNeueLT Std", 12, this._defTextColor, null, null, null, null, null, r.MA.LEFT);
                this.textField = new r.A_();
                this.textField.defaultTextFormat = e;
                this.textField.autoSize = r.wL.LEFT;
                this.textField.width = this._bgWidth;
                this.textField.height = 20;
                this.textField.y = 3;
                this.textField.multiline = false;
                this.textField.selectable = false;
                this.textField.antiAliasType = r.BF.ADVANCED;
                this.addChild(this.textField);
              };
              l.drawBg = function (e) {
                this.bg.graphics.clear();
                this.bg.graphics.lineStyle(1, 10066329, 1, false, r.s9.NORMAL, r.Lt.NONE, r.ox.MITER, 3);
                this.bg.graphics.beginFill(e);
                this.bg.graphics.drawRect(0, 0, this._bgWidth, this._bgHeight);
                this.bg.graphics.endFill();
              };
              l.mouseDown = function () {
                this.drawBg(this._downBgColor);
                this.textField.textColor = this._downTextColor;
                this.drawSymbol();
              };
              l.drawSymbol = function () {};
              o = t;
              if (h = [{
                key: "selected",
                get: function () {
                  return this._selected;
                },
                set: function (e) {
                  if (this._selected != e) {
                    this._selected = e;
                    if (this._selected) {
                      this.mouseDown();
                    } else {
                      this.rollOut();
                    }
                    if (this._parentItem) {
                      this._parentItem.selected = this._selected;
                    }
                  }
                }
              }, {
                key: "height",
                get: function () {
                  return this._bgHeight;
                }
              }, {
                key: "value",
                get: function () {
                  return this._value;
                }
              }, {
                key: "text",
                get: function () {
                  return this.textField.text;
                }
              }, {
                key: "textWidth",
                get: function () {
                  return this.textField.textWidth;
                }
              }, {
                key: "bgWidth",
                get: function () {
                  return this.bg.width;
                },
                set: function (e) {
                  this._bgWidth = e;
                  this.rollOut();
                }
              }, {
                key: "parentItem",
                get: function () {
                  return this._parentItem;
                },
                set: function (e) {
                  this._parentItem = e;
                  if (this._selected) {
                    this._parentItem.selected = true;
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
                    Object.defineProperty(e, i(r.key), r);
                  }
                })(o.prototype, h);
              }
              Object.defineProperty(o, "prototype", {
                writable: false
              });
              return o;
            }(r.kx);
          },
        50328(e, t, n) {
            "use strict";
        
            n.d(t, {
              k: () => h
            });
            n(42762);
            n(26910);
            n(27495);
            n(71761);
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(26099);
            n(2892);
            var r = n(4971);
            var i = n(80902);
            var s = n(13362);
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
              function t(t, n, r, i, s, a, o) {
                var h;
                if (s === undefined) {
                  s = false;
                }
                if (a === undefined) {
                  a = 10;
                }
                if (o === undefined) {
                  o = 60;
                }
                (h = e.call(this) || this).allowNaN = false;
                h.keyDownHandlerBind = h.keyDownHandler.bind(h);
                h.buildView();
                h.labelText.text = t + ":";
                h.attribute = n;
                h.currentString = "";
                h.childInputs = [];
                h.inputText.maxChars = r;
                h.inputText.width = o;
                h.spacing = a;
                h.readOnly = s;
                h.editable = i;
                h.init();
                return h;
              }
              var n;
              var i;
              i = e;
              (n = t).prototype = Object.create(i.prototype);
              n.prototype.constructor = n;
              o(n, i);
              var h;
              var l;
              var d = t.prototype;
              d.buildView = function () {
                this.bg = new r.kx();
                this.addChild(this.bg);
                var e = new r.lk("HelveticaNeueLT Std", 11, 16777215, null, null, null, null, null, r.MA.LEFT);
                var t = new r.lk("HelveticaNeueLT Std", 11, 16777215, null, null, null, null, null, r.MA.LEFT);
                this.labelText = new r.A_();
                this.addChild(this.labelText);
                this.labelText.defaultTextFormat = e;
                this.inputText = new r.A_();
                this.addChild(this.inputText);
                this.inputText.defaultTextFormat = t;
                this.inputText.defaultTextFormat.color = 4032711;
              };
              d.init = function () {
                this.labelText.mouseEnabled = false;
                this.inputText.x = this.labelText.x + this.labelText.textWidth + this.spacing;
                this.inputText.wordWrap = this.labelText.wordWrap = false;
                this.inputText.autoSize = this.labelText.autoSize = r.wL.LEFT;
                if (this.readOnly) {
                  var e = this.inputText.defaultTextFormat;
                  e.color = 16777215;
                  this.inputText.defaultTextFormat = e;
                  this.inputText.selectable = false;
                  this.inputText.mouseEnabled = false;
                } else {
                  this.inputText.addEventListener(r.kV.KEY_DOWN, this.keyDownHandlerBind);
                }
              };
              d.keyDownHandler = function (e) {
                var t = this.isRestrictedToNumbers() && this.allowNaN;
                if (e.keyCode === 13) {
                  this.currentString = this.inputText.text;
                  if (this.isRestrictedToNumbers() && this.currentString.trim() === "") {
                    this.currentString = "0";
                  }
                  this.stage.focus = this.stage;
                  this.dispatchEvent(new s.vq(s.vq.VALUE_CHANGE, this, this.currentString, true, t));
                } else if (e.keyCode === 9) {
                  if (this._ambiguous) {
                    return;
                  }
                  this.currentString = this.inputText.text;
                  if (this.isRestrictedToNumbers() && this.currentString.trim() === "") {
                    this.currentString = "0";
                  }
                  this.dispatchEvent(new s.vq(s.vq.VALUE_CHANGE, this, this.currentString, true, t));
                  this.navigateTab(!e.shiftKey);
                }
              };
              d.navigateTab = function (e) {
                var n = this.parent;
                if (n) {
                  var r = [];
                  for (var i = 0; i < n.numChildren; i++) {
                    var s = n.getChildAt(i);
                    if (s instanceof t && s._editable && s.visible) {
                      r.push(s);
                    }
                  }
                  r.sort(function (e, t) {
                    return e.y - t.y || e.x - t.x;
                  });
                  var a = r.indexOf(this);
                  if (a < 0 || r.length <= 1) {
                    this.stage.focus = this.stage;
                  } else {
                    var o = e ? (a + 1) % r.length : (a - 1 + r.length) % r.length;
                    this.inputText._pixiTextInput._onBlurred();
                    this.inputText._pixiTextInput.blur();
                    r[o].inputText._pixiTextInput.focus();
                  }
                }
              };
              d.isRestrictedToNumbers = function () {
                return !!this.restrict.match(/0\-9/);
              };
              d.adjustBg = function () {
                this.bg.width = this.inputText.width;
              };
              d.setToAmbiguous = function () {
                this.inputText.text = "-";
                this._ambiguous = true;
              };
              d.setValue = function (e) {
                this.text = this.formatValue(e);
              };
              d.die = function () {
                e.prototype.die.call(this);
                this.inputText.removeEventListener(r.kV.KEY_DOWN, this.keyDownHandlerBind);
              };
              d.updateInputPosition = function () {
                this.inputText.x = this.labelText.x + this.labelText.textWidth + this.spacing;
              };
              d.destroy = function () {
                this.labelText.destroy();
                this.inputText.destroy();
                this.removeChild(this.labelText);
                this.removeChild(this.inputText);
                e.prototype.destroy.call(this);
              };
              h = t;
              if (l = [{
                key: "text",
                get: function () {
                  return this.inputText.text;
                },
                set: function (e) {
                  if (!this._editable) {
                    this.currentString = e;
                    this.inputText.text = "-";
                    this.updateInputPosition();
                    return;
                  }
                  this.inputText.text = e;
                  this._ambiguous = false;
                  this.updateInputPosition();
                }
              }, {
                key: "restrict",
                get: function () {
                  return this.inputText.restrict;
                },
                set: function (e) {
                  this.inputText.restrict = e;
                }
              }, {
                key: "maxChars",
                set: function (e) {
                  this.inputText.maxChars = e;
                }
              }, {
                key: "editable",
                set: function (e) {
                  this._editable = e;
                  if (e) {
                    this.alpha = 1;
                    this.inputText.text = this.currentString;
                    this.inputText.defaultTextFormat.color = 4032711;
                    this.inputText.type = r.ux.INPUT;
                    this.inputText.tabEnabled = true;
                    this.inputText.mouseEnabled = true;
                  } else {
                    this.alpha = 0.5;
                    this.inputText.text = "-";
                    this.inputText.defaultTextFormat.color = 0;
                    this.inputText.type = r.ux.DYNAMIC;
                    this.inputText.tabEnabled = false;
                    this.inputText.mouseEnabled = false;
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
                    Object.defineProperty(e, a(r.key), r);
                  }
                })(h.prototype, l);
              }
              Object.defineProperty(h, "prototype", {
                writable: false
              });
              return h;
            }(i.C);
          },
        42574(e, t, n) {
            "use strict";
        
            n.d(t, {
              O: () => o
            });
            n(2892);
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(26099);
            var r = n(4971);
            var i = n(1050);
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
              function t(t, n, r, s, a) {
                var o;
                if (s === undefined) {
                  s = true;
                }
                if (a === undefined) {
                  a = false;
                }
                (o = e.call(this, t) || this).allowNaN = false;
                o.inputObject = n;
                o.value = a ? Number(r) : i.l5.parseValue(r);
                o._resetInputs = s;
                return o;
              }
              var n;
              var r;
              var o;
              var h;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              a(n, r);
              t.prototype.clone = function () {
                return new t(this.type, this.inputObject, this.value);
              };
              o = t;
              if (h = [{
                key: "resetInputs",
                get: function () {
                  return this._resetInputs;
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
                })(o.prototype, h);
              }
              Object.defineProperty(o, "prototype", {
                writable: false
              });
              return o;
            }(r.Jh);
            o.VALUE_CHANGE = "valuechange";
            o.ADD_INPUT = "addinput";
            o.REMOVE_INPUT = "removeinput";
          },
        3305(e, t, n) {
            "use strict";
        
            n.d(t, {
              p: () => h
            });
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(26099);
            n(2892);
            var r = n(46682);
            var i = n(4971);
            var s = n(98263);
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
              function t(t, n, r) {
                var i;
                if (t === undefined) {
                  t = true;
                }
                if (n === undefined) {
                  n = null;
                }
                if (r === undefined) {
                  r = false;
                }
                (i = e.call(this) || this).verticalSpace = 17;
                i.horizontalSpace = 4;
                i.border = 2;
                i.mouseDownHandlerBind = i.mouseDownHandler.bind(i);
                i.mouseUpHandlerBind = i.mouseUpHandler.bind(i);
                i.closeWindowBind = i.closeWindow.bind(i);
                i.minWidth = 10;
                i.minHeight = 10;
                i.draggable = true;
                i.buildView();
                if (n) {
                  i.populate(n);
                }
                if (r) {
                  i.createStageCover();
                }
                if (!t) {
                  i.closeButton.visible = false;
                }
                return i;
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
              c.buildView = function () {
                var e = new i.j7((0, s.zI)("EditorUI", "Window"));
                e.convertChildren(e.pixiSprite);
                this.frame = e.frame;
                this.shadow = e.shadow;
                this.closeButton = e.closeButton;
                this.frameContainer = new i.kx();
                this.addChild(this.frameContainer);
                this.frameContainer.scaleX = 0.5;
                this.frameContainer.scaleY = 0.5;
                this.frame = new i.kx(r.kxk.from("window.png"));
                this.frameContainer.addChild(this.frame);
                this.frame.scale9Grid = new i.M_(6, 10, 6, 6);
                this.dropShadowFilter = new i.GD(15, 90, 0, 0.75, 15, 15, 0.25, 3);
                this.frame.filters = [this.dropShadowFilter];
                this.addChild(this.closeButton);
                this.base = new i.kx();
                this.base.graphics.beginFill(13421772);
                this.base.graphics.drawRect(0, 0, 32, 32);
                this.base.graphics.endFill();
                this.addChild(this.base);
              };
              c.addListeners = function () {
                this.frame.addEventListener(i.Cm.MOUSE_DOWN, this.mouseDownHandlerBind);
                this.frame.addEventListener(i.Cm.MOUSE_UP, this.mouseUpHandlerBind);
                this.closeButton.addEventListener(i.Cm.MOUSE_UP, this.closeWindowBind);
              };
              c.removeListeners = function () {
                this.frame.removeEventListener(i.Cm.MOUSE_DOWN, this.mouseDownHandlerBind);
                this.frame.removeEventListener(i.Cm.MOUSE_UP, this.mouseUpHandlerBind);
                this.closeButton.removeEventListener(i.Cm.MOUSE_UP, this.closeWindowBind);
              };
              c.mouseDownHandler = function (e) {
                if (this.draggable) {
                  this.startDrag();
                }
              };
              c.mouseUpHandler = function (e) {
                this.stopDrag();
              };
              c.populate = function (e) {
                this.content = e;
                this.addChild(e);
                e.x = this.horizontalSpace - this.border;
                e.y = this.verticalSpace - this.border;
                this.resize();
                this.addListeners();
              };
              c.resize = function () {
                this.width = Math.max(this.minWidth, this.content.width) + this.horizontalSpace;
                this.height = Math.max(this.minHeight, this.content.height) + this.verticalSpace;
                this.shadow.width = this.width;
                this.shadow.height = this.height;
                this.closeButton.x = this.width - 11;
                this.updateBase();
              };
              c.setDimensions = function (e, t) {
                this.width = Math.max(this.minWidth, e) + this.horizontalSpace;
                this.height = Math.max(this.minHeight, t) + this.verticalSpace;
                this.shadow.width = this.width;
                this.shadow.height = this.height;
                this.closeButton.x = this.width - 11;
                this.updateBase();
              };
              c.closeWindow = function (e = null) {
                if (this.content) {
                  this.removeChild(this.content);
                  this.content = null;
                }
                if (this.parent) {
                  this.parent.removeChild(this);
                }
                this.removeListeners();
                this.dispatchEvent(new i.Jh(t.WINDOW_CLOSED));
              };
              c.createStageCover = function () {
                this.stageCover = new i.kx();
                this.addChildAt(this.stageCover, 0);
                this.stageCover.graphics.beginFill(0, 0.5);
                this.stageCover.graphics.drawRect(-1000, -500, 3000, 1500);
                this.stageCover.graphics.endFill();
                this.stageCover.interactive = true;
              };
              c.center = function () {
                this.x = Math.round((this.stage.stageWidth - this.width) / 2);
                this.y = Math.round((this.stage.stageHeight - this.height) / 2);
              };
              c.updateBase = function () {
                this.base.graphics.width = this.width - 4;
                this.base.graphics.height = this.height - 17;
                this.base.x = 2;
                this.base.y = 15;
              };
              l = t;
              if (d = [{
                key: "width",
                get: function () {
                  return this.frame.pixiWidth * this.frameContainer.scaleX;
                },
                set: function (e) {
                  this.frame.pixiWidth = e / this.frameContainer.scaleX;
                  this.updateBase();
                }
              }, {
                key: "height",
                get: function () {
                  return this.frame.pixiHeight * this.frameContainer.scaleX;
                },
                set: function (e) {
                  this.frame.pixiHeight = e / this.frameContainer.scaleX;
                  this.updateBase();
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
            }(i.kx);
            h.WINDOW_CLOSED = "windowClosed";
          }
    });
})();
