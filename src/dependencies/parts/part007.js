(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        82191(e, t, n) {
            "use strict";
        
            function r(e, t) {
              var n = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
              if (n) {
                return (n = n.call(e)).next.bind(n);
              }
              if (Array.isArray(e) || (n = function (e, t) {
                if (e) {
                  if (typeof e == "string") {
                    return i(e, t);
                  }
                  var n = {}.toString.call(e).slice(8, -1);
                  if (n === "Object" && e.constructor) {
                    n = e.constructor.name;
                  }
                  if (n === "Map" || n === "Set") {
                    return Array.from(e);
                  } else if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
                    return i(e, t);
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
            function i(e, t) {
              if (t == null || t > e.length) {
                t = e.length;
              }
              for (var n = 0, r = Array(t); n < t; n++) {
                r[n] = e[n];
              }
              return r;
            }
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
            n.d(t, {
              N: () => o
            });
            n(54554);
            n(62010);
            n(28706);
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
            var o = function (e) {
              function t(t) {
                var n;
                (n = e.call(this, t) || this).children = [];
                return n;
              }
              var n;
              var i;
              i = e;
              (n = t).prototype = Object.create(i.prototype);
              n.prototype.constructor = n;
              a(n, i);
              var o;
              var h;
              var l = t.prototype;
              l.destroy = function () {
                if (this.children) {
                  for (var t, n = r(this.children); !(t = n()).done;) {
                    t.value.destroy();
                  }
                  this.children = [];
                }
                e.prototype.destroy.call(this);
              };
              l.addChild = function (e) {
                if (e.parent) {
                  e.parent.removeChild(e);
                }
                this._pixiSprite.addChild(e._pixiSprite);
                this.children.push(e);
                if (!e.stage && this.stage) {
                  e.dispatchEvent(this.eventAddedToStage);
                }
                e.parent = this;
                e.onAdded(this);
                return e;
              };
              l.addChildAt = function (e, t) {
                if (e.parent) {
                  e.parent.removeChild(e);
                }
                this._pixiSprite.addChildAt(e._pixiSprite, t);
                this.children.splice(t, 0, e);
                if (!e.stage && this.stage) {
                  e.dispatchEvent(this.eventAddedToStage);
                }
                e.parent = this;
                e.onAdded(this);
                e.dispatchEvent(this.eventAdded);
                return e;
              };
              l.contains = function (e) {
                if (e === this) {
                  return true;
                }
                for (var n = 0; n < this.children.length; n++) {
                  var r = this.children[n];
                  if (r === e) {
                    return true;
                  }
                  if (r instanceof t && r.contains(e)) {
                    return true;
                  }
                }
                return false;
              };
              l.getChildAt = function (e) {
                return this.children[e];
              };
              l.getChildByName = function (e) {
                for (var t, n = r(this.children); !(t = n()).done;) {
                  var i = t.value;
                  if (i.name === e) {
                    return i;
                  }
                }
                return null;
              };
              l.getChildIndex = function (e) {
                return this.children.indexOf(e);
              };
              l.getObjectsUnderPoint = function (e) {
                for (var n, i = [], s = r(this.children); !(n = s()).done;) {
                  var a = n.value;
                  if (a.hitTestPoint(e.x, e.y)) {
                    if (a instanceof t) {
                      var o = a.getObjectsUnderPoint(e);
                      if (!o.length) {
                        o.push(a);
                      }
                      i = i.concat(o);
                    } else {
                      i.push(a);
                    }
                  }
                }
                return i;
              };
              l.removeChild = function (e) {
                var t = this.children.indexOf(e);
                if (t < 0) {
                  return null;
                } else {
                  this._pixiSprite.removeChild(e._pixiSprite);
                  this.children.splice(t, 1);
                  e.onRemoved(this);
                  e.parent = null;
                  return e;
                }
              };
              l.removeChildAt = function (e) {
                var t = this.children[e];
                if (t) {
                  this.children.splice(e, 1);
                  this._pixiSprite.removeChild(t._pixiSprite);
                  t.parent = null;
                  return t;
                } else {
                  return null;
                }
              };
              l.forEachChild = function (e) {
                for (var t, n = r(this.children); !(t = n()).done;) {
                  e(t.value);
                }
              };
              l.onAdded = function (t) {
                var n = this;
                e.prototype.onAdded.call(this, t);
                this.forEachChild(function (e) {
                  return e.onAdded(n);
                });
              };
              l.onRemoved = function (t) {
                var n = this;
                e.prototype.onRemoved.call(this, t);
                this.forEachChild(function (e) {
                  return e.onRemoved(n);
                });
              };
              l.setChildIndex = function (e, t) {
                if (!this.contains(e)) {
                  throw new Error("Given object is to a child of this container");
                }
                if (t < 0) {
                  t = 0;
                }
                if (t > this.children.length - 1) {
                  t = this.children.length - 1;
                }
                this.addChildAt(e, t);
              };
              o = t;
              if (h = [{
                key: "mouseChildren",
                get: function () {
                  return this._pixiSprite.interactiveChildren;
                },
                set: function (e) {
                  this._pixiSprite.interactiveChildren = e;
                }
              }, {
                key: "numChildren",
                get: function () {
                  return this.children.length;
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
            }(n(87036).c);
          },
        87036(e, t, n) {
            "use strict";
        
            n.d(t, {
              c: () => l
            });
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(26099);
            n(2892);
            n(34782);
            n(62010);
            n(23418);
            n(47764);
            n(2259);
            n(23792);
            n(62953);
            var r = n(46682);
            var i = n(24184);
            var s = n(4971);
            function a(e, t) {
              if (t == null || t > e.length) {
                t = e.length;
              }
              for (var n = 0, r = Array(t); n < t; n++) {
                r[n] = e[n];
              }
              return r;
            }
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
              function t(t) {
                var n;
                (n = e.call(this, t) || this).doubleClickEnabled = false;
                n.tabEnabled = false;
                n.clickTime = 0;
                n.listeningMouseWheel = false;
                n.pressed = false;
                n.onMouseWheel = function (e) {
                  if (n.isUnderMouse()) {
                    if (n.mouseEvent === undefined) {
                      n._createMouseEvent();
                    }
                    n.mouseEvent.type = s.Cm.MOUSE_WHEEL;
                    n.mouseEvent.deltaY = -e.deltaY;
                    n.mouseEvent.delta = -e.deltaY;
                    n.mouseEvent.shiftKey = !!n.stage && n.stage.keyboardEvent.shiftKey;
                    n.dispatchEvent(n.mouseEvent);
                  }
                };
                n.onClickBind = function (e) {
                  if (e.data.button === 0) {
                    n.processMouseEvent(s.Cm.CLICK, e);
                    var t = new Date().getTime();
                    if (t - n.clickTime < 300) {
                      n.processMouseEvent(s.Cm.DOUBLE_CLICK, e);
                    }
                    n.clickTime = t;
                  }
                };
                n.onDoubleClickBind = function (e) {
                  n.processMouseEvent(s.Cm.DOUBLE_CLICK, e);
                };
                n.onMouseDownBind = function (e) {
                  if (r.WpD.isMobile.any || e.data.button === 0) {
                    e.currentTarget.entered = true;
                    n.pressed = true;
                    n.processMouseEvent(s.Cm.MOUSE_DOWN, e);
                  }
                };
                n.onMouseUpBind = function (e) {
                  if (e.data.button === 0) {
                    n.pressed = false;
                    n.processMouseEvent(s.Cm.MOUSE_UP, e);
                  }
                };
                n.onMouseUpOutsideBind = function (e) {
                  if (e.data.button === 0 && n.pressed) {
                    n.pressed = false;
                    n.processMouseEvent(s.Cm.MOUSE_UP, e);
                  }
                };
                n.onMouseMoveBind = function (e) {
                  if (e.currentTarget.entered) {
                    n.processMouseEvent(s.Cm.MOUSE_MOVE, e);
                  }
                };
                n.onMouseOverBind = function (e) {
                  e.currentTarget.entered = true;
                  n.processMouseEvent(s.Cm.MOUSE_OVER, e);
                  n.processMouseEvent(s.Cm.ROLL_OVER, e);
                };
                n.onMouseOutBind = function (e) {
                  e.currentTarget.entered = false;
                  n.processMouseEvent(s.Cm.MOUSE_OUT, e);
                  n.processMouseEvent(s.Cm.ROLL_OUT, e);
                };
                n.replacePixiSprite(n.pixiSprite);
                return n;
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
              c.destroy = function () {
                if (this.pixiSprite) {
                  this.removePointerListeners();
                }
                e.prototype.destroy.call(this);
              };
              c.willReplacePixiSprite = function () {
                e.prototype.willReplacePixiSprite.call(this);
                this.removePointerListeners();
              };
              c.removePointerListeners = function () {
                this.pixiSprite.off("pointertap", this.onClickBind);
                this.pixiSprite.off("pointerdown", this.onMouseDownBind);
                this.pixiSprite.off("pointerup", this.onMouseUpBind);
                this.pixiSprite.off("pointerupoutside", this.onMouseUpOutsideBind);
                this.pixiSprite.off("pointermove", this.onMouseMoveBind);
                this.pixiSprite.off("pointerover", this.onMouseOverBind);
                this.pixiSprite.off("pointerout", this.onMouseOutBind);
              };
              c.didReplacePixiSprite = function () {
                e.prototype.didReplacePixiSprite.call(this);
                if (this.onClickBind) {
                  this.pixiSprite.on("pointertap", this.onClickBind);
                  this.pixiSprite.on("pointerdown", this.onMouseDownBind);
                  this.pixiSprite.on("pointerup", this.onMouseUpBind);
                  this.pixiSprite.on("pointerupoutside", this.onMouseUpOutsideBind);
                  this.pixiSprite.on("pointermove", this.onMouseMoveBind);
                  this.pixiSprite.on("pointerover", this.onMouseOverBind);
                  this.pixiSprite.on("pointerout", this.onMouseOutBind);
                }
              };
              c.onListenerAdded = function (t) {
                e.prototype.onListenerAdded.call(this, t);
                this.autoUpdateInteractivity();
              };
              c.onListenerRemoved = function (t) {
                e.prototype.onListenerRemoved.call(this, t);
                this.autoUpdateInteractivity();
              };
              c.autoUpdateInteractivity = function () {
                for (var e, t = false, n = function (e) {
                    var t = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
                    if (t) {
                      return (t = t.call(e)).next.bind(t);
                    }
                    if (Array.isArray(e) || (t = function (e, t) {
                      if (e) {
                        if (typeof e == "string") {
                          return a(e, t);
                        }
                        var n = {}.toString.call(e).slice(8, -1);
                        if (n === "Object" && e.constructor) {
                          n = e.constructor.name;
                        }
                        if (n === "Map" || n === "Set") {
                          return Array.from(e);
                        } else if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
                          return a(e, t);
                        } else {
                          return undefined;
                        }
                      }
                    }(e))) {
                      if (t) {
                        e = t;
                      }
                      var n = 0;
                      return function () {
                        if (n >= e.length) {
                          return {
                            done: true
                          };
                        } else {
                          return {
                            done: false,
                            value: e[n++]
                          };
                        }
                      };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                  }(s.Cm.mouseEventTypesList()); !(e = n()).done;) {
                  var r = e.value;
                  if (s.Cm.isMouseEvent(r)) {
                    t = true;
                    break;
                  }
                }
                this._pixiSprite.interactive = t;
                this._pixiSprite.interactiveChildren = t;
                var i = this.hasEventListener(s.Cm.MOUSE_WHEEL);
                if (i && !this.listeningMouseWheel) {
                  this.listeningMouseWheel = true;
                  window.addEventListener("wheel", this.onMouseWheel);
                }
                if (!i) {
                  this.listeningMouseWheel = false;
                  window.removeEventListener("wheel", this.onMouseWheel);
                }
              };
              c._createMouseEvent = function () {
                this.mouseEvent = new s.Cm(s.Cm.CLICK);
              };
              c.processMouseEvent = function (e, t) {
                if (this.mouseEvent === undefined) {
                  this._createMouseEvent();
                }
                var n = t.data.global;
                var r = this.pixiSprite.toLocal(n);
                var i = r.y - this.mouseEvent.localY;
                if (i < 0) {
                  i = -1;
                } else if (i > 0) {
                  i = 1;
                }
                this.mouseEvent.delta = i;
                this.mouseEvent.type = e;
                this.mouseEvent.localX = Math.round(r.x);
                this.mouseEvent.localY = Math.round(r.y);
                this.mouseEvent.stageX = Math.round(n.x);
                this.mouseEvent.stageY = Math.round(n.y);
                this.mouseEvent.shiftKey = !!this.stage && this.stage.keyboardEvent.shiftKey;
                this.mouseEvent.altKey = !!this.stage && this.stage.keyboardEvent.altKey;
                this.stageMouseX = Math.round(n.x);
                this.stageMouseY = Math.round(n.y);
                this.mouseEvent.target = t.target ? t.target._flashSprite : this;
                this.mouseEvent.currentTarget = this;
                this.dispatchEvent(this.mouseEvent);
              };
              l = t;
              if (d = [{
                key: "mouseEnabled",
                get: function () {
                  return this._pixiSprite.interactive;
                },
                set: function (e) {
                  this._pixiSprite.interactive = e;
                  this._pixiSprite.interactiveChildren = e;
                }
              }, {
                key: "interactive",
                get: function () {
                  return this._pixiSprite.interactive;
                },
                set: function (e) {
                  this._pixiSprite.interactive = e;
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
            }(i.q);
          },
        32601(e, t, n) {
            "use strict";
        
            n.d(t, {
              BI: () => c,
              se: () => d
            });
            n(23792);
            n(26099);
            n(31415);
            n(47764);
            n(62953);
            n(42781);
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(2892);
            n(34782);
            n(62010);
            n(23418);
            n(2259);
            var r = n(82191);
            var i = n(4971);
            var s = n(76928);
            var a = n.n(s);
            function o(e, t) {
              if (t == null || t > e.length) {
                t = e.length;
              }
              for (var n = 0, r = Array(t); n < t; n++) {
                r[n] = e[n];
              }
              return r;
            }
            function h(e) {
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
            function l(e, t) {
              l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return l(e, t);
            }
            var d = function (e) {
              e.FULL_SCREEN = "fullScreen";
              e.FULL_SCREEN_INTERACTIVE = "fullScreenInteractive";
              e.NORMAL = "normal";
              return e;
            }({});
            var c = function (e) {
              function t(n, r, s) {
                var o;
                if (r === undefined) {
                  r = 900;
                }
                if (s === undefined) {
                  s = 500;
                }
                (o = e.call(this) || this).align = "topLeft";
                o.allowsFullScreen = true;
                o.allowsFullScreenInteractive = true;
                o.color = 16777215;
                o.contentsScaleFactor = 1;
                o.focus = o;
                o.frameRate = 30;
                o.fullScreenHeight = 0;
                o.fullScreenWidth = 0;
                o.quality = "HIGH";
                o.scaleMode = "noScale";
                o.stageHeight = 0;
                o.stageWidth = 0;
                o._displayState = "normal";
                o.suspendKeyboardEvents = false;
                o.heldKeyCodes = new Set();
                o.onKeyDownBind = function (e) {
                  if (e.target.tagName === "BODY") {
                    switch (e.keyCode) {
                      case 8:
                      case 9:
                      case 32:
                      case 37:
                      case 38:
                      case 39:
                      case 40:
                        e.preventDefault();
                    }
                  }
                  o.processKeyboardEvent(i.kV.KEY_DOWN, e);
                };
                o.onKeyUpBind = function (e) {
                  o.processKeyboardEvent(i.kV.KEY_UP, e);
                };
                o.onBlurBind = function () {
                  return o.releaseHeldKeys();
                };
                t.main = o;
                o.renderer = n;
                o.keyboardEvent = new i.kV(i.kV.KEY_DOWN);
                o.stage = o;
                o.root = o;
                o.stageWidth = r;
                o.stageHeight = s;
                document.addEventListener("keydown", o.onKeyDownBind);
                document.addEventListener("keyup", o.onKeyUpBind);
                window.addEventListener("blur", o.onBlurBind);
                o._fullscreen = a()(document.documentElement);
                o._fullscreen.on("release", function () {
                  o._displayState = d.NORMAL;
                });
                return o;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              l(n, r);
              var s;
              var c;
              var u = t.prototype;
              u.releaseHeldKeys = function () {
                for (var e, t = function (e) {
                    var t = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
                    if (t) {
                      return (t = t.call(e)).next.bind(t);
                    }
                    if (Array.isArray(e) || (t = function (e, t) {
                      if (e) {
                        if (typeof e == "string") {
                          return o(e, t);
                        }
                        var n = {}.toString.call(e).slice(8, -1);
                        if (n === "Object" && e.constructor) {
                          n = e.constructor.name;
                        }
                        if (n === "Map" || n === "Set") {
                          return Array.from(e);
                        } else if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
                          return o(e, t);
                        } else {
                          return undefined;
                        }
                      }
                    }(e))) {
                      if (t) {
                        e = t;
                      }
                      var n = 0;
                      return function () {
                        if (n >= e.length) {
                          return {
                            done: true
                          };
                        } else {
                          return {
                            done: false,
                            value: e[n++]
                          };
                        }
                      };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                  }(this.heldKeyCodes); !(e = t()).done;) {
                  var n = e.value;
                  var r = new i.kV(i.kV.KEY_UP);
                  r.keyCode = n;
                  this.dispatchEvent(r);
                }
                this.heldKeyCodes.clear();
              };
              u.processKeyboardEvent = function (e, t) {
                if (!this.suspendKeyboardEvents || t.key === "Enter") {
                  if (e === i.kV.KEY_DOWN) {
                    this.heldKeyCodes.add(t.keyCode);
                  } else {
                    this.heldKeyCodes.delete(t.keyCode);
                  }
                  this.keyboardEvent.extractNativeEventProperties(t);
                  this.keyboardEvent.type = e;
                  this.dispatchEvent(this.keyboardEvent);
                }
              };
              u.resize = function (e, t) {
                this.stageWidth = e;
                this.stageHeight = t;
              };
              s = t;
              if (c = [{
                key: "displayState",
                get: function () {
                  return this._displayState;
                },
                set: function (e) {
                  if (a().available()) {
                    this._displayState = e;
                    if (this._displayState === d.FULL_SCREEN || this._displayState === d.FULL_SCREEN_INTERACTIVE) {
                      this._fullscreen.request();
                    } else if (a().enabled()) {
                      this._fullscreen.release();
                    }
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
                    Object.defineProperty(e, h(r.key), r);
                  }
                })(s.prototype, c);
              }
              Object.defineProperty(s, "prototype", {
                writable: false
              });
              return s;
            }(r.N);
            a().enabled = function () {
              return !!document.fullscreenElement || !!document.webkitFullscreenElement || !!document.mozFullScreenElement || !!document.msFullscreenElement;
            };
            a().release = function () {
              var e = el.exitFullscreen || el.webkitExitFullscreen || el.mozCancelFullScreen || el.mozExitFullScreen || el.msExitFullscreen;
              if (e) {
                e.apply(el, arguments);
              } else {
                var t = doc.exitFullscreen || doc.webkitExitFullscreen || doc.mozCancelFullScreen || doc.mozExitFullScreen || doc.msExitFullscreen;
                t.apply(doc, arguments);
                if (enabled()) {
                  t.apply(doc, arguments);
                }
              }
            };
          }
    });
})();
