(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        28242(e, t, n) {
            "use strict";
        
            n.d(t, {
              J: () => r
            });
            var r = function () {
              function e(e) {
                this.delta = 1;
                this.defaultPrevented = false;
                this.type = e;
                this.currentTarget = null;
                this.target = null;
              }
              var t = e.prototype;
              t.clone = function () {
                return new e(this.type);
              };
              t.isDefaultPrevented = function () {
                return this.defaultPrevented;
              };
              t.preventDefault = function () {
                this.defaultPrevented = true;
              };
              t.stopPropagation = function () {};
              return e;
            }();
            r.ACTIVATE = "activate";
            r.ADDED = "added";
            r.ADDED_TO_STAGE = "addedToStage";
            r.BROWSER_ZOOM_CHANGE = "browserZoomChange";
            r.CANCEL = "cancel";
            r.CHANGE = "change";
            r.ERROR = "error";
            r.CHANNEL_MESSAGE = "channelMessage";
            r.CHANNEL_STATE = "channelState";
            r.CLEAR = "clear";
            r.CLOSE = "close";
            r.CLOSING = "closing";
            r.SELECT = "select";
            r.SELECT_ALL = "selectAll";
            r.TAB_INDEX_CHANGE = "tabIndexChange";
            r.TEXT_INTERACTION_MODE_CHANGE = "textInteractionModeChange";
            r.TEXTURE_READY = "textureReady";
            r.UNLOAD = "unload";
            r.USER_IDLE = "userIdle";
            r.USER_PRESENT = "userPresent";
            r.VIDEO_FRAME = "videoFrame";
            r.WORKER_STATE = "workerState";
            r.SOUND_COMPLETE = "soundComplete";
            r.STANDARD_ERROR_CLOSE = "standardErrorClose";
            r.STANDARD_INPUT_CLOSE = "standardInputClose";
            r.STANDARD_OUTPUT_CLOSE = "standardOutputClose";
            r.SUSPEND = "suspend";
            r.TAB_CHILDREN_CHANGE = "tabChildrenChange";
            r.TAB_ENABLED_CHANGE = "tabEnabledChange";
            r.REMOVED = "removed";
            r.COMPLETE = "complete";
            r.PASTE = "paste";
            r.RENDER = "render";
            r.RESIZE = "resize";
            r.SCROLL = "scroll";
            r.CONNECT = "connect";
            r.CONTEXT3D_CREATE = "context3DCreate";
            r.COPY = "copy";
            r.NETWORK_CHANGE = "networkChange";
            r.ID3 = "id3";
            r.REMOVED_FROM_STAGE = "removedFromStage";
            r.PREPARING = "preparing";
            r.INIT = "init";
            r.OPEN = "open";
            r.LOCATION_CHANGE = "locationChange";
            r.CUT = "cut";
            r.MOUSE_LEAVE = "mouseLeave";
            r.DEACTIVATE = "deactivate";
            r.DISPLAYING = "displaying";
            r.ENTER_FRAME = "enterFrame";
            r.EXIT_FRAME = "exitFrame";
            r.EXITING = "exiting";
            r.FRAME_CONSTRUCTED = "frameConstructed";
            r.FRAME_LABEL = "frameLabel";
            r.HTML_RENDER = "htmlRender";
            r.FULLSCREEN = "fullScreen";
            r.HTML_BOUNDS_CHANGE = "htmlBoundsChange";
            r.HTML_DOM_INITIALIZE = "htmlDOMInitialize";
          },
        46563(e, t, n) {
            "use strict";
        
            function r(e, t) {
              if (t == null || t > e.length) {
                t = e.length;
              }
              for (var n = 0, r = Array(t); n < t; n++) {
                r[n] = e[n];
              }
              return r;
            }
            n.d(t, {
              Q: () => i
            });
            n(54554);
            n(34782);
            n(26099);
            n(62010);
            n(23418);
            n(47764);
            n(52675);
            n(89463);
            n(2259);
            n(23792);
            n(62953);
            var i = function () {
              function e() {
                this.listeners = {};
              }
              var t = e.prototype;
              t.destroy = function () {
                this.listeners = {};
              };
              t.addEventListener = function (e, t, n = false, r = 0, i = false) {
                if (!t) {
                  throw new Error("A valid listener function should be provided");
                }
                var s = {
                  type: e,
                  listener: t,
                  useCapture: n,
                  priority: r,
                  useWeakReference: i
                };
                this.listeners[e] ||= [];
                this.listeners[e].push(s);
                this.onListenerAdded(e);
              };
              t.dispatchEvent = function (e) {
                if (e.isDefaultPrevented()) {
                  return false;
                }
                if (!this.hasEventListener(e.type)) {
                  return false;
                }
                e.target ||= this;
                e.currentTarget = this;
                for (var t, n = function (e) {
                    var t = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
                    if (t) {
                      return (t = t.call(e)).next.bind(t);
                    }
                    if (Array.isArray(e) || (t = function (e, t) {
                      if (e) {
                        if (typeof e == "string") {
                          return r(e, t);
                        }
                        var n = {}.toString.call(e).slice(8, -1);
                        if (n === "Object" && e.constructor) {
                          n = e.constructor.name;
                        }
                        if (n === "Map" || n === "Set") {
                          return Array.from(e);
                        } else if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
                          return r(e, t);
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
                  }(this.listeners[e.type]); !(t = n()).done;) {
                  t.value.listener(e);
                }
                return true;
              };
              t.hasEventListener = function (e) {
                return !!this.listeners[e] && !!this.listeners[e].length;
              };
              t.removeEventListener = function (e, t = null, n = false) {
                if (this.hasEventListener(e)) {
                  if (t === null) {
                    this.listeners[e] = [];
                    this.onListenerRemoved(e);
                    return;
                  }
                  var r = this.listeners[e];
                  for (var i = r.length; i--;) {
                    if (r[i].listener === t) {
                      r.splice(i, 1);
                    }
                  }
                  this.onListenerRemoved(e);
                }
              };
              t.willTrigger = function (e) {
                return this.hasEventListener(e);
              };
              t.onListenerAdded = function (e) {};
              t.onListenerRemoved = function (e) {};
              return e;
            }();
          },
        44093(e, t, n) {
            "use strict";
        
            n.d(t, {
              NN: () => b,
              Jh: () => r.J,
              Qe: () => T.Q,
              BR: () => m,
              kV: () => _,
              Cm: () => y,
              CV: () => a,
              Xt: () => h,
              iJ: () => u
            });
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(26099);
            n(2892);
            var r = n(28242);
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
              function t(t, n, r) {
                var i;
                if (n === undefined) {
                  n = 0;
                }
                if (r === undefined) {
                  r = 0;
                }
                (i = e.call(this, t) || this)._bytesLoaded = n;
                i._bytesTotal = r;
                return i;
              }
              var n;
              var r;
              var a;
              var o;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              s(n, r);
              a = t;
              if (o = [{
                key: "bytesLoaded",
                get: function () {
                  return this._bytesLoaded;
                },
                set: function (e) {
                  this._bytesLoaded = e;
                }
              }, {
                key: "bytesTotal",
                get: function () {
                  return this._bytesTotal;
                },
                set: function (e) {
                  this._bytesTotal = e;
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
                })(a.prototype, o);
              }
              Object.defineProperty(a, "prototype", {
                writable: false
              });
              return a;
            }(r.J);
            function o(e, t) {
              o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return o(e, t);
            }
            a.PROGRESS = "progress";
            a.SOCKET_DATA = "socketData";
            a.STANDARD_ERROR_DATA = "standardErrorData";
            a.STANDARD_INPUT_PROGRESS = "standardInputProgress";
            a.STANDARD_OUTPUT_DATA = "standardOutputData";
            var h = function (e) {
              function t(t, n, r) {
                var i;
                if (n === undefined) {
                  n = "";
                }
                if (r === undefined) {
                  r = 0;
                }
                (i = e.call(this, t) || this).text = n;
                i.id = r;
                return i;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              o(n, r);
              return t;
            }(r.J);
            function l(e, t) {
              l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return l(e, t);
            }
            h.SECURITY_ERROR = "securityError";
            var d = function (e) {
              function t(t, n, r) {
                var i;
                if (n === undefined) {
                  n = "";
                }
                if (r === undefined) {
                  r = "";
                }
                (i = e.call(this, t) || this).afterOrientation = r;
                i.beforeOrientation = n;
                return i;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              l(n, r);
              return t;
            }(r.J);
            function c(e, t) {
              c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return c(e, t);
            }
            d.ORIENTATION_CHANGE = "orientationChange";
            d.ORIENTATION_CHANGING = "orientationChanging";
            var u = function (e) {
              function t() {
                return e.apply(this, arguments) || this;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              c(n, r);
              t.prototype.updateAfterEvent = function () {};
              return t;
            }(r.J);
            function p(e, t) {
              p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return p(e, t);
            }
            u.TIMER = "timer";
            u.TIMER_COMPLETE = "timerComplete";
            var m = function (e) {
              function t(t, n = "", r = 0) {
                return e.call(this, t) || this;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              p(n, r);
              return t;
            }(r.J);
            function f(e, t) {
              f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return f(e, t);
            }
            m.IO_ERROR = "ioError";
            m.STANDARD_ERROR_IO_ERROR = "standardErrorIoError";
            m.STANDARD_INPUT_IO_ERROR = "standardInputIoError";
            m.STANDARD_OUTPUT_IO_ERROR = "standardOutputIoError";
            var _ = function (e) {
              function t(t) {
                return e.call(this, t) || this;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              f(n, r);
              t.prototype.extractNativeEventProperties = function (e) {
                this.type = e.type === "keydown" ? t.KEY_DOWN : t.KEY_UP;
                this.altKey = e.altKey;
                this.charCode = e.key;
                this.commandKey = e.metaKey;
                this.controlKey = e.ctrlKey || e.metaKey;
                this.ctrlKey = e.ctrlKey || e.metaKey;
                this.keyCode = e.keyCode;
                this.keyLocation = e.location;
                this.shiftKey = e.shiftKey;
              };
              return t;
            }(r.J);
            function v(e, t) {
              v = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return v(e, t);
            }
            _.KEY_DOWN = "keyDown";
            _.KEY_UP = "keyUp";
            n(79432);
            var y = function (e) {
              function t(t) {
                var n;
                (n = e.call(this, t) || this).localX = 0;
                n.localY = 0;
                n.stageX = 0;
                n.stageY = 0;
                n.delta = 0;
                n.buttonDown = 0;
                n.shiftKey = false;
                n.altKey = false;
                n.deltaY = 0;
                return n;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              v(n, r);
              t.mouseEventTypesList = function () {
                return Object.keys(t);
              };
              t.isMouseEvent = function (e) {
                return t.mouseEventTypesList().indexOf(e) >= 0;
              };
              return t;
            }(r.J);
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
            function x(e, t) {
              x = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return x(e, t);
            }
            y.CLICK = "click";
            y.CONTEXT_MENU = "contextMenu";
            y.DOUBLE_CLICK = "doubleClick";
            y.MIDDLE_CLICK = "middleClick";
            y.MIDDLE_MOUSE_DOWN = "middleMouseDown";
            y.MIDDLE_MOUSE_UP = "middleMouseUp";
            y.MOUSE_DOWN = "mouseDown";
            y.MOUSE_MOVE = "mouseMove";
            y.MOUSE_OUT = "mouseOut";
            y.MOUSE_OVER = "mouseOver";
            y.MOUSE_UP = "mouseUp";
            y.MOUSE_WHEEL = "mouseWheel";
            y.RELEASE_OUTSIDE = "releaseOutside";
            y.RIGHT_CLICK = "rightClick";
            y.RIGHT_MOUSE_DOWN = "rightMouseDown";
            y.RIGHT_MOUSE_UP = "rightMouseUp";
            y.ROLL_OUT = "rollOut";
            y.ROLL_OVER = "rollOver";
            (function (e) {
              function t(t) {
                var n;
                (n = e.call(this, t) || this)._fullScreen = false;
                return n;
              }
              var n;
              var r;
              var i;
              var s;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              w(n, r);
              i = t;
              if (s = [{
                key: "fullScreen",
                get: function () {
                  return this._fullScreen;
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
                    Object.defineProperty(e, g(r.key), r);
                  }
                })(i.prototype, s);
              }
              Object.defineProperty(i, "prototype", {
                writable: false
              });
              return i;
            })(r.J).FULL_SCREEN = "fullScreen";
            var b = function (e) {
              function t(t, n = "", r = 0) {
                return e.call(this, t) || this;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              x(n, r);
              return t;
            }(r.J);
            b.ERROR = "error";
            var T = n(46563);
          }
    });
})();
