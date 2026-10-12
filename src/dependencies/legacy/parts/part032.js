(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        38452(e, t, n) {
            "use strict";
        
            var r = n(1189);
            var i = typeof Symbol == "function" && typeof Symbol("foo") == "symbol";
            var s = Object.prototype.toString;
            var a = Array.prototype.concat;
            var o = n(30041);
            var h = n(30592)();
            function l(e, t, n, r) {
              if (t in e) {
                if (r === true) {
                  if (e[t] === n) {
                    return;
                  }
                } else if (typeof (i = r) != "function" || s.call(i) !== "[object Function]" || !r()) {
                  return;
                }
              }
              var i;
              if (h) {
                o(e, t, n, true);
              } else {
                o(e, t, n);
              }
            }
            function d(e, t) {
              var n = arguments.length > 2 ? arguments[2] : {};
              var s = r(t);
              if (i) {
                s = a.call(s, Object.getOwnPropertySymbols(t));
              }
              for (var o = 0; o < s.length; o += 1) {
                l(e, s[o], t[s[o]], n[s[o]]);
              }
            }
            d.supportsDescriptors = !!h;
            e.exports = d;
          },
        7176(e, t, n) {
            "use strict";
        
            var r;
            var i = n(73126);
            var s = n(75795);
            try {
              r = [].__proto__ === Array.prototype;
            } catch (e) {
              if (!e || typeof e != "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS") {
                throw e;
              }
            }
            var a = !!r && s && s(Object.prototype, "__proto__");
            var o = Object;
            var h = o.getPrototypeOf;
            e.exports = a && typeof a.get == "function" ? i([a.get]) : typeof h == "function" && function (e) {
              return h(e == null ? e : o(e));
            };
          },
        30655(e) {
            "use strict";
        
            var t = Object.defineProperty || false;
            if (t) {
              try {
                t({}, "a", {
                  value: 1
                });
              } catch (e) {
                t = false;
              }
            }
            e.exports = t;
          },
        41237(e) {
            "use strict";
        
            e.exports = EvalError;
          },
        69383(e) {
            "use strict";
        
            e.exports = Error;
          },
        79290(e) {
            "use strict";
        
            e.exports = RangeError;
          },
        79538(e) {
            "use strict";
        
            e.exports = ReferenceError;
          },
        58068(e) {
            "use strict";
        
            e.exports = SyntaxError;
          },
        69675(e) {
            "use strict";
        
            e.exports = TypeError;
          },
        35345(e) {
            "use strict";
        
            e.exports = URIError;
          },
        79612(e) {
            "use strict";
        
            e.exports = Object;
          },
        37007(e) {
            "use strict";
        
            var t;
            var n = typeof Reflect == "object" ? Reflect : null;
            var r = n && typeof n.apply == "function" ? n.apply : function (e, t, n) {
              return Function.prototype.apply.call(e, t, n);
            };
            t = n && typeof n.ownKeys == "function" ? n.ownKeys : Object.getOwnPropertySymbols ? function (e) {
              return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
            } : function (e) {
              return Object.getOwnPropertyNames(e);
            };
            var i = Number.isNaN || function (e) {
              return e != e;
            };
            function s() {
              s.init.call(this);
            }
            e.exports = s;
            e.exports.once = function (e, t) {
              return new Promise(function (n, r) {
                function i(n) {
                  e.removeListener(t, s);
                  r(n);
                }
                function s() {
                  if (typeof e.removeListener == "function") {
                    e.removeListener("error", i);
                  }
                  n([].slice.call(arguments));
                }
                f(e, t, s, {
                  once: true
                });
                if (t !== "error") {
                  (function (e, t) {
                    if (typeof e.on == "function") {
                      f(e, "error", t, {
                        once: true
                      });
                    }
                  })(e, i);
                }
              });
            };
            s.EventEmitter = s;
            s.prototype._events = undefined;
            s.prototype._eventsCount = 0;
            s.prototype._maxListeners = undefined;
            var a = 10;
            function o(e) {
              if (typeof e != "function") {
                throw new TypeError("The \"listener\" argument must be of type Function. Received type " + typeof e);
              }
            }
            function h(e) {
              if (e._maxListeners === undefined) {
                return s.defaultMaxListeners;
              } else {
                return e._maxListeners;
              }
            }
            function l(e, t, n, r) {
              var i;
              var s;
              var a;
              o(n);
              if ((s = e._events) === undefined) {
                s = e._events = Object.create(null);
                e._eventsCount = 0;
              } else {
                if (s.newListener !== undefined) {
                  e.emit("newListener", t, n.listener ? n.listener : n);
                  s = e._events;
                }
                a = s[t];
              }
              if (a === undefined) {
                a = s[t] = n;
                ++e._eventsCount;
              } else {
                if (typeof a == "function") {
                  a = s[t] = r ? [n, a] : [a, n];
                } else if (r) {
                  a.unshift(n);
                } else {
                  a.push(n);
                }
                if ((i = h(e)) > 0 && a.length > i && !a.warned) {
                  a.warned = true;
                  var l = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                  l.name = "MaxListenersExceededWarning";
                  l.emitter = e;
                  l.type = t;
                  l.count = a.length;
                  if (console) {
                    console.warn;
                  }
                }
              }
              return e;
            }
            function d() {
              if (!this.fired) {
                this.target.removeListener(this.type, this.wrapFn);
                this.fired = true;
                if (arguments.length === 0) {
                  return this.listener.call(this.target);
                } else {
                  return this.listener.apply(this.target, arguments);
                }
              }
            }
            function c(e, t, n) {
              var r = {
                fired: false,
                wrapFn: undefined,
                target: e,
                type: t,
                listener: n
              };
              var i = d.bind(r);
              i.listener = n;
              r.wrapFn = i;
              return i;
            }
            function u(e, t, n) {
              var r = e._events;
              if (r === undefined) {
                return [];
              }
              var i = r[t];
              if (i === undefined) {
                return [];
              } else if (typeof i == "function") {
                if (n) {
                  return [i.listener || i];
                } else {
                  return [i];
                }
              } else if (n) {
                return function (e) {
                  for (var t = new Array(e.length), n = 0; n < t.length; ++n) {
                    t[n] = e[n].listener || e[n];
                  }
                  return t;
                }(i);
              } else {
                return m(i, i.length);
              }
            }
            function p(e) {
              var t = this._events;
              if (t !== undefined) {
                var n = t[e];
                if (typeof n == "function") {
                  return 1;
                }
                if (n !== undefined) {
                  return n.length;
                }
              }
              return 0;
            }
            function m(e, t) {
              var n = new Array(t);
              for (var r = 0; r < t; ++r) {
                n[r] = e[r];
              }
              return n;
            }
            function f(e, t, n, r) {
              if (typeof e.on == "function") {
                if (r.once) {
                  e.once(t, n);
                } else {
                  e.on(t, n);
                }
              } else {
                if (typeof e.addEventListener != "function") {
                  throw new TypeError("The \"emitter\" argument must be of type EventEmitter. Received type " + typeof e);
                }
                e.addEventListener(t, function i(s) {
                  if (r.once) {
                    e.removeEventListener(t, i);
                  }
                  n(s);
                });
              }
            }
            Object.defineProperty(s, "defaultMaxListeners", {
              enumerable: true,
              get: function () {
                return a;
              },
              set: function (e) {
                if (typeof e != "number" || e < 0 || i(e)) {
                  throw new RangeError("The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received " + e + ".");
                }
                a = e;
              }
            });
            s.init = function () {
              if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
                this._events = Object.create(null);
                this._eventsCount = 0;
              }
              this._maxListeners = this._maxListeners || undefined;
            };
            s.prototype.setMaxListeners = function (e) {
              if (typeof e != "number" || e < 0 || i(e)) {
                throw new RangeError("The value of \"n\" is out of range. It must be a non-negative number. Received " + e + ".");
              }
              this._maxListeners = e;
              return this;
            };
            s.prototype.getMaxListeners = function () {
              return h(this);
            };
            s.prototype.emit = function (e) {
              var t = [];
              for (var n = 1; n < arguments.length; n++) {
                t.push(arguments[n]);
              }
              var i = e === "error";
              var s = this._events;
              if (s !== undefined) {
                i = i && s.error === undefined;
              } else if (!i) {
                return false;
              }
              if (i) {
                var a;
                if (t.length > 0) {
                  a = t[0];
                }
                if (a instanceof Error) {
                  throw a;
                }
                var o = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
                o.context = a;
                throw o;
              }
              var h = s[e];
              if (h === undefined) {
                return false;
              }
              if (typeof h == "function") {
                r(h, this, t);
              } else {
                var l = h.length;
                var d = m(h, l);
                for (n = 0; n < l; ++n) {
                  r(d[n], this, t);
                }
              }
              return true;
            };
            s.prototype.addListener = function (e, t) {
              return l(this, e, t, false);
            };
            s.prototype.on = s.prototype.addListener;
            s.prototype.prependListener = function (e, t) {
              return l(this, e, t, true);
            };
            s.prototype.once = function (e, t) {
              o(t);
              this.on(e, c(this, e, t));
              return this;
            };
            s.prototype.prependOnceListener = function (e, t) {
              o(t);
              this.prependListener(e, c(this, e, t));
              return this;
            };
            s.prototype.removeListener = function (e, t) {
              var n;
              var r;
              var i;
              var s;
              var a;
              o(t);
              if ((r = this._events) === undefined) {
                return this;
              }
              if ((n = r[e]) === undefined) {
                return this;
              }
              if (n === t || n.listener === t) {
                if (--this._eventsCount === 0) {
                  this._events = Object.create(null);
                } else {
                  delete r[e];
                  if (r.removeListener) {
                    this.emit("removeListener", e, n.listener || t);
                  }
                }
              } else if (typeof n != "function") {
                i = -1;
                s = n.length - 1;
                for (; s >= 0; s--) {
                  if (n[s] === t || n[s].listener === t) {
                    a = n[s].listener;
                    i = s;
                    break;
                  }
                }
                if (i < 0) {
                  return this;
                }
                if (i === 0) {
                  n.shift();
                } else {
                  (function (e, t) {
                    for (; t + 1 < e.length; t++) {
                      e[t] = e[t + 1];
                    }
                    e.pop();
                  })(n, i);
                }
                if (n.length === 1) {
                  r[e] = n[0];
                }
                if (r.removeListener !== undefined) {
                  this.emit("removeListener", e, a || t);
                }
              }
              return this;
            };
            s.prototype.off = s.prototype.removeListener;
            s.prototype.removeAllListeners = function (e) {
              var t;
              var n;
              var r;
              if ((n = this._events) === undefined) {
                return this;
              }
              if (n.removeListener === undefined) {
                if (arguments.length === 0) {
                  this._events = Object.create(null);
                  this._eventsCount = 0;
                } else if (n[e] !== undefined) {
                  if (--this._eventsCount === 0) {
                    this._events = Object.create(null);
                  } else {
                    delete n[e];
                  }
                }
                return this;
              }
              if (arguments.length === 0) {
                var i;
                var s = Object.keys(n);
                for (r = 0; r < s.length; ++r) {
                  if ((i = s[r]) !== "removeListener") {
                    this.removeAllListeners(i);
                  }
                }
                this.removeAllListeners("removeListener");
                this._events = Object.create(null);
                this._eventsCount = 0;
                return this;
              }
              if (typeof (t = n[e]) == "function") {
                this.removeListener(e, t);
              } else if (t !== undefined) {
                for (r = t.length - 1; r >= 0; r--) {
                  this.removeListener(e, t[r]);
                }
              }
              return this;
            };
            s.prototype.listeners = function (e) {
              return u(this, e, true);
            };
            s.prototype.rawListeners = function (e) {
              return u(this, e, false);
            };
            s.listenerCount = function (e, t) {
              if (typeof e.listenerCount == "function") {
                return e.listenerCount(t);
              } else {
                return p.call(e, t);
              }
            };
            s.prototype.listenerCount = p;
            s.prototype.eventNames = function () {
              if (this._eventsCount > 0) {
                return t(this._events);
              } else {
                return [];
              }
            };
          },
        82682(e, t, n) {
            "use strict";
        
            var r = n(69600);
            var i = Object.prototype.toString;
            var s = Object.prototype.hasOwnProperty;
            e.exports = function (e, t, n) {
              if (!r(t)) {
                throw new TypeError("iterator must be a function");
              }
              var a;
              var o;
              if (arguments.length >= 3) {
                a = n;
              }
              o = e;
              if (i.call(o) === "[object Array]") {
                (function (e, t, n) {
                  for (var r = 0, i = e.length; r < i; r++) {
                    if (s.call(e, r)) {
                      if (n == null) {
                        t(e[r], r, e);
                      } else {
                        t.call(n, e[r], r, e);
                      }
                    }
                  }
                })(e, t, a);
              } else if (typeof e == "string") {
                (function (e, t, n) {
                  for (var r = 0, i = e.length; r < i; r++) {
                    if (n == null) {
                      t(e.charAt(r), r, e);
                    } else {
                      t.call(n, e.charAt(r), r, e);
                    }
                  }
                })(e, t, a);
              } else {
                (function (e, t, n) {
                  for (var r in e) {
                    if (s.call(e, r)) {
                      if (n == null) {
                        t(e[r], r, e);
                      } else {
                        t.call(n, e[r], r, e);
                      }
                    }
                  }
                })(e, t, a);
              }
            };
          },
        76928(e, t, n) {
            e.exports = a;
            a.available = function () {
              return !!o(document.body);
            };
            a.enabled = function () {
              return !!document.fullscreenEnabled || !!document.webkitFullscreenEnabled || !!document.mozFullScreenEnabled || !!document.msFullscreenEnabled;
            };
            var r = n(37007).EventEmitter;
            var i = n(52676);
            var s = i.removeEventListener;
            function a(e) {
              var t = e.ownerDocument;
              t.body;
              var n = o(e);
              var a = new r();
              var h = ["", "webkit", "moz"];
              for (var l = 0, d = h.length; l < d; ++l) {
                i(t, h[l] + "fullscreenchange", c);
                i(t, h[l] + "fullscreenerror", u);
              }
              i(t, "MSFullscreenChange", c);
              i(t, "MSFullscreenError", u);
              a.release = function () {
                var n = e.exitFullscreen || e.webkitExitFullscreen || e.mozCancelFullScreen || e.mozExitFullScreen || e.msExitFullscreen;
                if (n) {
                  n.apply(e, arguments);
                } else {
                  (t.exitFullscreen || t.webkitExitFullscreen || t.mozCancelFullScreen || t.mozExitFullScreen || t.msExitFullscreen).apply(t, arguments);
                }
              };
              a.request = function () {
                return n.apply(e, arguments);
              };
              a.dispose = function () {
                for (var e = 0, n = h.length; e < n; ++e) {
                  s(t, h[e] + "fullscreenchange", c);
                  s(t, h[e] + "fullscreenerror", u);
                }
                s(t, "MSFullscreenChange", c);
                s(t, "MSFullscreenError", u);
              };
              a.target = p;
              if (!o) {
                setTimeout(function () {
                  a.emit("error", new Error("fullscreen is not supported"));
                }, 0);
              }
              return a;
              function c() {
                if (!p()) {
                  return a.emit("release");
                }
                a.emit("attain");
              }
              function u() {
                a.emit("error");
              }
              function p() {
                return t.fullscreenElement || t.webkitFullscreenElement || t.mozFullScreenElement || t.msFullscreenElement || null;
              }
            }
            function o(e) {
              return e.requestFullscreen || e.webkitRequestFullscreen || e.mozRequestFullScreen || e.msRequestFullscreen;
            }
          },
        89353(e) {
            "use strict";
        
            var t = Object.prototype.toString;
            var n = Math.max;
            function r(e, t) {
              var n = [];
              for (var r = 0; r < e.length; r += 1) {
                n[r] = e[r];
              }
              for (var i = 0; i < t.length; i += 1) {
                n[i + e.length] = t[i];
              }
              return n;
            }
            e.exports = function (e) {
              var i = this;
              if (typeof i != "function" || t.apply(i) !== "[object Function]") {
                throw new TypeError("Function.prototype.bind called on incompatible " + i);
              }
              var s;
              var a = function (e) {
                var t = [];
                for (var n = 1, r = 0; n < e.length; n += 1, r += 1) {
                  t[r] = e[n];
                }
                return t;
              }(arguments);
              for (var o = n(0, i.length - a.length), h = [], l = 0; l < o; l++) {
                h[l] = "$" + l;
              }
              s = Function("binder", "return function (" + function (e) {
                var t = "";
                for (var n = 0; n < e.length; n += 1) {
                  t += e[n];
                  if (n + 1 < e.length) {
                    t += ",";
                  }
                }
                return t;
              }(h) + "){ return binder.apply(this,arguments); }")(function () {
                if (this instanceof s) {
                  var t = i.apply(this, r(a, arguments));
                  if (Object(t) === t) {
                    return t;
                  } else {
                    return this;
                  }
                }
                return i.apply(e, r(a, arguments));
              });
              if (i.prototype) {
                function d() {}
                d.prototype = i.prototype;
                s.prototype = new d();
                d.prototype = null;
              }
              return s;
            };
          },
        66743(e, t, n) {
            "use strict";
        
            var r = n(89353);
            e.exports = Function.prototype.bind || r;
          }
    });
})();
