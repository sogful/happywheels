(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        96897(e, t, n) {
            "use strict";
        
            var r = n(70453);
            var i = n(30041);
            var s = n(30592)();
            var a = n(75795);
            var o = n(69675);
            var h = r("%Math.floor%");
            e.exports = function (e, t) {
              if (typeof e != "function") {
                throw new o("`fn` is not a function");
              }
              if (typeof t != "number" || t < 0 || t > 4294967295 || h(t) !== t) {
                throw new o("`length` must be a positive 32-bit integer");
              }
              var n = arguments.length > 2 && !!arguments[2];
              var r = true;
              var l = true;
              if ("length" in e && a) {
                var d = a(e, "length");
                if (d && !d.configurable) {
                  r = false;
                }
                if (d && !d.writable) {
                  l = false;
                }
              }
              if (r || l || !n) {
                if (s) {
                  i(e, "length", t, true, true);
                } else {
                  i(e, "length", t);
                }
              }
              return e;
            };
          },
        14803(e, t, n) {
            "use strict";
        
            var r = n(58859);
            var i = n(69675);
            function s(e, t, n) {
              for (var r, i = e; (r = i.next) != null; i = r) {
                if (r.key === t) {
                  i.next = r.next;
                  if (!n) {
                    r.next = e.next;
                    e.next = r;
                  }
                  return r;
                }
              }
            }
            e.exports = function () {
              var e;
              var t = {
                assert: function (e) {
                  if (!t.has(e)) {
                    throw new i("Side channel does not contain " + r(e));
                  }
                },
                delete: function (t) {
                  var n = function (e, t) {
                    if (e) {
                      return s(e, t, true);
                    }
                  }(e, t);
                  if (n && e && !e.next) {
                    e = undefined;
                  }
                  return !!n;
                },
                get: function (t) {
                  return function (e, t) {
                    if (e) {
                      var n = s(e, t);
                      return n && n.value;
                    }
                  }(e, t);
                },
                has: function (t) {
                  return function (e, t) {
                    return !!e && !!s(e, t);
                  }(e, t);
                },
                set: function (t, n) {
                  e ||= {
                    next: undefined
                  };
                  (function (e, t, n) {
                    var r = s(e, t);
                    if (r) {
                      r.value = n;
                    } else {
                      e.next = {
                        key: t,
                        next: e.next,
                        value: n
                      };
                    }
                  })(e, t, n);
                }
              };
              return t;
            };
          },
        80507(e, t, n) {
            "use strict";
        
            var r = n(70453);
            var i = n(36556);
            var s = n(58859);
            var a = n(69675);
            var o = r("%Map%", true);
            var h = i("Map.prototype.get", true);
            var l = i("Map.prototype.set", true);
            var d = i("Map.prototype.has", true);
            var c = i("Map.prototype.delete", true);
            var u = i("Map.prototype.size", true);
            e.exports = !!o && function () {
              var e;
              var t = {
                assert: function (e) {
                  if (!t.has(e)) {
                    throw new a("Side channel does not contain " + s(e));
                  }
                },
                delete: function (t) {
                  if (e) {
                    var n = c(e, t);
                    if (u(e) === 0) {
                      e = undefined;
                    }
                    return n;
                  }
                  return false;
                },
                get: function (t) {
                  if (e) {
                    return h(e, t);
                  }
                },
                has: function (t) {
                  return !!e && d(e, t);
                },
                set: function (t, n) {
                  e ||= new o();
                  l(e, t, n);
                }
              };
              return t;
            };
          },
        72271(e, t, n) {
            "use strict";
        
            var r = n(70453);
            var i = n(36556);
            var s = n(58859);
            var a = n(80507);
            var o = n(69675);
            var h = r("%WeakMap%", true);
            var l = i("WeakMap.prototype.get", true);
            var d = i("WeakMap.prototype.set", true);
            var c = i("WeakMap.prototype.has", true);
            var u = i("WeakMap.prototype.delete", true);
            e.exports = h ? function () {
              var e;
              var t;
              var n = {
                assert: function (e) {
                  if (!n.has(e)) {
                    throw new o("Side channel does not contain " + s(e));
                  }
                },
                delete: function (n) {
                  if (h && n && (typeof n == "object" || typeof n == "function")) {
                    if (e) {
                      return u(e, n);
                    }
                  } else if (a && t) {
                    return t.delete(n);
                  }
                  return false;
                },
                get: function (n) {
                  if (h && n && (typeof n == "object" || typeof n == "function") && e) {
                    return l(e, n);
                  } else {
                    return t && t.get(n);
                  }
                },
                has: function (n) {
                  if (h && n && (typeof n == "object" || typeof n == "function") && e) {
                    return c(e, n);
                  } else {
                    return !!t && t.has(n);
                  }
                },
                set: function (n, r) {
                  if (h && n && (typeof n == "object" || typeof n == "function")) {
                    e ||= new h();
                    d(e, n, r);
                  } else if (a) {
                    t ||= a();
                    t.set(n, r);
                  }
                }
              };
              return n;
            } : a;
          },
        71066(e, t, n) {
            var r;
            (function () {
              function i(e, t, n, r, i) {
                this._listener = t;
                this._isOnce = n;
                this.context = r;
                this._signal = e;
                this._priority = i || 0;
              }
              function s(e, t) {
                if (typeof e != "function") {
                  throw new Error("listener is a required param of {fn}() and should be a Function.".replace("{fn}", t));
                }
              }
              function a() {
                this._bindings = [];
                this._prevParams = null;
                var e = this;
                this.dispatch = function () {
                  a.prototype.dispatch.apply(e, arguments);
                };
              }
              i.prototype = {
                active: true,
                params: null,
                execute: function (e) {
                  var t;
                  var n;
                  if (this.active && this._listener) {
                    n = this.params ? this.params.concat(e) : e;
                    t = this._listener.apply(this.context, n);
                    if (this._isOnce) {
                      this.detach();
                    }
                  }
                  return t;
                },
                detach: function () {
                  if (this.isBound()) {
                    return this._signal.remove(this._listener, this.context);
                  } else {
                    return null;
                  }
                },
                isBound: function () {
                  return !!this._signal && !!this._listener;
                },
                isOnce: function () {
                  return this._isOnce;
                },
                getListener: function () {
                  return this._listener;
                },
                getSignal: function () {
                  return this._signal;
                },
                _destroy: function () {
                  delete this._signal;
                  delete this._listener;
                  delete this.context;
                },
                toString: function () {
                  return "[SignalBinding isOnce:" + this._isOnce + ", isBound:" + this.isBound() + ", active:" + this.active + "]";
                }
              };
              a.prototype = {
                VERSION: "1.0.0",
                memorize: false,
                _shouldPropagate: true,
                active: true,
                _registerListener: function (e, t, n, r) {
                  var s;
                  var a = this._indexOfListener(e, n);
                  if (a !== -1) {
                    if ((s = this._bindings[a]).isOnce() !== t) {
                      throw new Error("You cannot add" + (t ? "" : "Once") + "() then add" + (t ? "Once" : "") + "() the same listener without removing the relationship first.");
                    }
                  } else {
                    s = new i(this, e, t, n, r);
                    this._addBinding(s);
                  }
                  if (this.memorize && this._prevParams) {
                    s.execute(this._prevParams);
                  }
                  return s;
                },
                _addBinding: function (e) {
                  var t = this._bindings.length;
                  do {
                    --t;
                  } while (this._bindings[t] && e._priority <= this._bindings[t]._priority);
                  this._bindings.splice(t + 1, 0, e);
                },
                _indexOfListener: function (e, t) {
                  var n;
                  for (var r = this._bindings.length; r--;) {
                    if ((n = this._bindings[r])._listener === e && n.context === t) {
                      return r;
                    }
                  }
                  return -1;
                },
                has: function (e, t) {
                  return this._indexOfListener(e, t) !== -1;
                },
                add: function (e, t, n) {
                  s(e, "add");
                  return this._registerListener(e, false, t, n);
                },
                addOnce: function (e, t, n) {
                  s(e, "addOnce");
                  return this._registerListener(e, true, t, n);
                },
                remove: function (e, t) {
                  s(e, "remove");
                  var n = this._indexOfListener(e, t);
                  if (n !== -1) {
                    this._bindings[n]._destroy();
                    this._bindings.splice(n, 1);
                  }
                  return e;
                },
                removeAll: function () {
                  for (var e = this._bindings.length; e--;) {
                    this._bindings[e]._destroy();
                  }
                  this._bindings.length = 0;
                },
                getNumListeners: function () {
                  return this._bindings.length;
                },
                halt: function () {
                  this._shouldPropagate = false;
                },
                dispatch: function (e) {
                  if (this.active) {
                    var t;
                    var n = Array.prototype.slice.call(arguments);
                    var r = this._bindings.length;
                    if (this.memorize) {
                      this._prevParams = n;
                    }
                    if (r) {
                      t = this._bindings.slice();
                      this._shouldPropagate = true;
                      do {
                        r--;
                      } while (t[r] && this._shouldPropagate && t[r].execute(n) !== false);
                    }
                  }
                },
                forget: function () {
                  this._prevParams = null;
                },
                dispose: function () {
                  this.removeAll();
                  delete this._bindings;
                  delete this._prevParams;
                },
                toString: function () {
                  return "[Signal active:" + this.active + " numListeners:" + this.getNumListeners() + "]";
                }
              };
              var o = a;
              o.Signal = a;
              if ((r = function () {
                return o;
              }.call(t, n, t, e)) !== undefined) {
                e.exports = r;
              }
            })();
          },
        88310(e, t, n) {
            e.exports = i;
            var r = n(37007).EventEmitter;
            function i() {
              r.call(this);
            }
            n(56698)(i, r);
            i.Readable = n(46891);
            i.Writable = n(81999);
            i.Duplex = n(88101);
            i.Transform = n(59083);
            i.PassThrough = n(3681);
            i.finished = n(14257);
            i.pipeline = n(5267);
            i.Stream = i;
            i.prototype.pipe = function (e, t) {
              var n = this;
              function i(t) {
                if (e.writable && e.write(t) === false && n.pause) {
                  n.pause();
                }
              }
              function s() {
                if (n.readable && n.resume) {
                  n.resume();
                }
              }
              n.on("data", i);
              e.on("drain", s);
              if (!e._isStdio && (!t || t.end !== false)) {
                n.on("end", o);
                n.on("close", h);
              }
              var a = false;
              function o() {
                if (!a) {
                  a = true;
                  e.end();
                }
              }
              function h() {
                if (!a) {
                  a = true;
                  if (typeof e.destroy == "function") {
                    e.destroy();
                  }
                }
              }
              function l(e) {
                d();
                if (r.listenerCount(this, "error") === 0) {
                  throw e;
                }
              }
              function d() {
                n.removeListener("data", i);
                e.removeListener("drain", s);
                n.removeListener("end", o);
                n.removeListener("close", h);
                n.removeListener("error", l);
                e.removeListener("error", l);
                n.removeListener("end", d);
                n.removeListener("close", d);
                e.removeListener("close", d);
              }
              n.on("error", l);
              e.on("error", l);
              n.on("end", d);
              n.on("close", d);
              e.on("close", d);
              e.emit("pipe", n);
              return e;
            };
          },
        12463(e) {
            "use strict";
        
            var t = {};
            function n(e, n, r) {
              r ||= Error;
              var i = function (e) {
                var t;
                var r;
                function i(t, r, i) {
                  return e.call(this, function (e, t, r) {
                    if (typeof n == "string") {
                      return n;
                    } else {
                      return n(e, t, r);
                    }
                  }(t, r, i)) || this;
                }
                r = e;
                (t = i).prototype = Object.create(r.prototype);
                t.prototype.constructor = t;
                t.__proto__ = r;
                return i;
              }(r);
              i.prototype.name = r.name;
              i.prototype.code = e;
              t[e] = i;
            }
            function r(e, t) {
              if (Array.isArray(e)) {
                var n = e.length;
                e = e.map(function (e) {
                  return String(e);
                });
                if (n > 2) {
                  return `one of ${t} ${e.slice(0, n - 1).join(", ")}, or ${e[n - 1]}`;
                } else if (n === 2) {
                  return `one of ${t} ${e[0]} or ${e[1]}`;
                } else {
                  return `of ${t} ${e[0]}`;
                }
              }
              return `of ${t} ${String(e)}`;
            }
            n("ERR_INVALID_OPT_VALUE", function (e, t) {
              return "The value \"" + t + "\" is invalid for option \"" + e + "\"";
            }, TypeError);
            n("ERR_INVALID_ARG_TYPE", function (e, t, n) {
              var i;
              var s;
              var a;
              var o;
              if (typeof t == "string" && t.substr(0, 4) === "not ") {
                i = "must not be";
                t = t.replace(/^not /, "");
              } else {
                i = "must be";
              }
              if (function (e, t, n) {
                if (n === undefined || n > e.length) {
                  n = e.length;
                }
                return e.substring(n - 9, n) === " argument";
              }(e)) {
                s = `The ${e} ${i} ${r(t, "type")}`;
              } else {
                if (typeof o != "number") {
                  o = 0;
                }
                var h = o + 1 > (a = e).length || a.indexOf(".", o) === -1 ? "argument" : "property";
                s = `The "${e}" ${h} ${i} ${r(t, "type")}`;
              }
              return `${s}. Received type ${typeof n}`;
            }, TypeError);
            n("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
            n("ERR_METHOD_NOT_IMPLEMENTED", function (e) {
              return "The " + e + " method is not implemented";
            });
            n("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
            n("ERR_STREAM_DESTROYED", function (e) {
              return "Cannot call " + e + " after a stream was destroyed";
            });
            n("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
            n("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
            n("ERR_STREAM_WRITE_AFTER_END", "write after end");
            n("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
            n("ERR_UNKNOWN_ENCODING", function (e) {
              return "Unknown encoding: " + e;
            }, TypeError);
            n("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
            e.exports.F = t;
          },
        88101(e, t, n) {
            "use strict";
        
            var r = n(65606);
            var i = Object.keys || function (e) {
              var t = [];
              for (var n in e) {
                t.push(n);
              }
              return t;
            };
            e.exports = d;
            var s = n(46891);
            var a = n(81999);
            n(56698)(d, s);
            for (var o = i(a.prototype), h = 0; h < o.length; h++) {
              var l = o[h];
              d.prototype[l] ||= a.prototype[l];
            }
            function d(e) {
              if (!(this instanceof d)) {
                return new d(e);
              }
              s.call(this, e);
              a.call(this, e);
              this.allowHalfOpen = true;
              if (e) {
                if (e.readable === false) {
                  this.readable = false;
                }
                if (e.writable === false) {
                  this.writable = false;
                }
                if (e.allowHalfOpen === false) {
                  this.allowHalfOpen = false;
                  this.once("end", c);
                }
              }
            }
            function c() {
              if (!this._writableState.ended) {
                r.nextTick(u, this);
              }
            }
            function u(e) {
              e.end();
            }
            Object.defineProperty(d.prototype, "writableHighWaterMark", {
              enumerable: false,
              get: function () {
                return this._writableState.highWaterMark;
              }
            });
            Object.defineProperty(d.prototype, "writableBuffer", {
              enumerable: false,
              get: function () {
                return this._writableState && this._writableState.getBuffer();
              }
            });
            Object.defineProperty(d.prototype, "writableLength", {
              enumerable: false,
              get: function () {
                return this._writableState.length;
              }
            });
            Object.defineProperty(d.prototype, "destroyed", {
              enumerable: false,
              get: function () {
                return this._readableState !== undefined && this._writableState !== undefined && this._readableState.destroyed && this._writableState.destroyed;
              },
              set: function (e) {
                if (this._readableState !== undefined && this._writableState !== undefined) {
                  this._readableState.destroyed = e;
                  this._writableState.destroyed = e;
                }
              }
            });
          },
        3681(e, t, n) {
            "use strict";
        
            e.exports = i;
            var r = n(59083);
            function i(e) {
              if (!(this instanceof i)) {
                return new i(e);
              }
              r.call(this, e);
            }
            n(56698)(i, r);
            i.prototype._transform = function (e, t, n) {
              n(null, e);
            };
          }
    });
})();
