(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        81766(e, t, n) {
            "use strict";
        
            function r(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                if (t) {
                  r = r.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                  });
                }
                n.push.apply(n, r);
              }
              return n;
            }
            function i(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t] ?? {};
                if (t % 2) {
                  r(Object(n), true).forEach(function (t) {
                    s(e, t, n[t]);
                  });
                } else if (Object.getOwnPropertyDescriptors) {
                  Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
                } else {
                  r(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                  });
                }
              }
              return e;
            }
            function s(e, t, n) {
              if ((t = a(t)) in e) {
                Object.defineProperty(e, t, {
                  value: n,
                  enumerable: true,
                  configurable: true,
                  writable: true
                });
              } else {
                e[t] = n;
              }
              return e;
            }
            function a(e) {
              var t = function (e) {
                if (typeof e != "object" || e === null) {
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
                return String(t);
              }
            }
            var o = n(48287).Buffer;
            var h = n(63779).inspect;
            var l = h && h.custom || "inspect";
            function d(e, t, n) {
              o.prototype.copy.call(e, t, n);
            }
            e.exports = function () {
              function e() {
                (function (e, t) {
                  if (!(e instanceof t)) {
                    throw new TypeError("Cannot call a class as a function");
                  }
                })(this, e);
                this.head = null;
                this.tail = null;
                this.length = 0;
              }
              var t;
              var n;
              t = e;
              if (n = [{
                key: "push",
                value: function (e) {
                  var t = {
                    data: e,
                    next: null
                  };
                  if (this.length > 0) {
                    this.tail.next = t;
                  } else {
                    this.head = t;
                  }
                  this.tail = t;
                  ++this.length;
                }
              }, {
                key: "unshift",
                value: function (e) {
                  var t = {
                    data: e,
                    next: this.head
                  };
                  if (this.length === 0) {
                    this.tail = t;
                  }
                  this.head = t;
                  ++this.length;
                }
              }, {
                key: "shift",
                value: function () {
                  if (this.length !== 0) {
                    var e = this.head.data;
                    if (this.length === 1) {
                      this.head = this.tail = null;
                    } else {
                      this.head = this.head.next;
                    }
                    --this.length;
                    return e;
                  }
                }
              }, {
                key: "clear",
                value: function () {
                  this.head = this.tail = null;
                  this.length = 0;
                }
              }, {
                key: "join",
                value: function (e) {
                  if (this.length === 0) {
                    return "";
                  }
                  for (var t = this.head, n = "" + t.data; t = t.next;) {
                    n += e + t.data;
                  }
                  return n;
                }
              }, {
                key: "concat",
                value: function (e) {
                  if (this.length === 0) {
                    return o.alloc(0);
                  }
                  var t = o.allocUnsafe(e >>> 0);
                  for (var n = this.head, r = 0; n;) {
                    d(n.data, t, r);
                    r += n.data.length;
                    n = n.next;
                  }
                  return t;
                }
              }, {
                key: "consume",
                value: function (e, t) {
                  var n;
                  if (e < this.head.data.length) {
                    n = this.head.data.slice(0, e);
                    this.head.data = this.head.data.slice(e);
                  } else {
                    n = e === this.head.data.length ? this.shift() : t ? this._getString(e) : this._getBuffer(e);
                  }
                  return n;
                }
              }, {
                key: "first",
                value: function () {
                  return this.head.data;
                }
              }, {
                key: "_getString",
                value: function (e) {
                  var t = this.head;
                  var n = 1;
                  var r = t.data;
                  for (e -= r.length; t = t.next;) {
                    var i = t.data;
                    var s = e > i.length ? i.length : e;
                    if (s === i.length) {
                      r += i;
                    } else {
                      r += i.slice(0, e);
                    }
                    if ((e -= s) === 0) {
                      if (s === i.length) {
                        ++n;
                        if (t.next) {
                          this.head = t.next;
                        } else {
                          this.head = this.tail = null;
                        }
                      } else {
                        this.head = t;
                        t.data = i.slice(s);
                      }
                      break;
                    }
                    ++n;
                  }
                  this.length -= n;
                  return r;
                }
              }, {
                key: "_getBuffer",
                value: function (e) {
                  var t = o.allocUnsafe(e);
                  var n = this.head;
                  var r = 1;
                  n.data.copy(t);
                  e -= n.data.length;
                  while (n = n.next) {
                    var i = n.data;
                    var s = e > i.length ? i.length : e;
                    i.copy(t, t.length - e, 0, s);
                    if ((e -= s) === 0) {
                      if (s === i.length) {
                        ++r;
                        if (n.next) {
                          this.head = n.next;
                        } else {
                          this.head = this.tail = null;
                        }
                      } else {
                        this.head = n;
                        n.data = i.slice(s);
                      }
                      break;
                    }
                    ++r;
                  }
                  this.length -= r;
                  return t;
                }
              }, {
                key: l,
                value: function (e, t) {
                  return h(this, i(i({}, t), {}, {
                    depth: 0,
                    customInspect: false
                  }));
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
                })(t.prototype, n);
              }
              Object.defineProperty(t, "prototype", {
                writable: false
              });
              return e;
            }();
          },
        54347(e, t, n) {
            "use strict";
        
            var r = n(65606);
            function i(e, t) {
              a(e, t);
              s(e);
            }
            function s(e) {
              if ((!e._writableState || !!e._writableState.emitClose) && (!e._readableState || !!e._readableState.emitClose)) {
                e.emit("close");
              }
            }
            function a(e, t) {
              e.emit("error", t);
            }
            e.exports = {
              destroy: function (e, t) {
                var n = this;
                var o = this._readableState && this._readableState.destroyed;
                var h = this._writableState && this._writableState.destroyed;
                if (o || h) {
                  if (t) {
                    t(e);
                  } else if (e) {
                    if (this._writableState) {
                      if (!this._writableState.errorEmitted) {
                        this._writableState.errorEmitted = true;
                        r.nextTick(a, this, e);
                      }
                    } else {
                      r.nextTick(a, this, e);
                    }
                  }
                  return this;
                } else {
                  if (this._readableState) {
                    this._readableState.destroyed = true;
                  }
                  if (this._writableState) {
                    this._writableState.destroyed = true;
                  }
                  this._destroy(e || null, function (e) {
                    if (!t && e) {
                      if (n._writableState) {
                        if (n._writableState.errorEmitted) {
                          r.nextTick(s, n);
                        } else {
                          n._writableState.errorEmitted = true;
                          r.nextTick(i, n, e);
                        }
                      } else {
                        r.nextTick(i, n, e);
                      }
                    } else if (t) {
                      r.nextTick(s, n);
                      t(e);
                    } else {
                      r.nextTick(s, n);
                    }
                  });
                  return this;
                }
              },
              undestroy: function () {
                if (this._readableState) {
                  this._readableState.destroyed = false;
                  this._readableState.reading = false;
                  this._readableState.ended = false;
                  this._readableState.endEmitted = false;
                }
                if (this._writableState) {
                  this._writableState.destroyed = false;
                  this._writableState.ended = false;
                  this._writableState.ending = false;
                  this._writableState.finalCalled = false;
                  this._writableState.prefinished = false;
                  this._writableState.finished = false;
                  this._writableState.errorEmitted = false;
                }
              },
              errorOrDestroy: function (e, t) {
                var n = e._readableState;
                var r = e._writableState;
                if (n && n.autoDestroy || r && r.autoDestroy) {
                  e.destroy(t);
                } else {
                  e.emit("error", t);
                }
              }
            };
          },
        14257(e, t, n) {
            "use strict";
        
            var r = n(12463).F.ERR_STREAM_PREMATURE_CLOSE;
            function i() {}
            e.exports = function e(t, n, s) {
              if (typeof n == "function") {
                return e(t, null, n);
              }
              n ||= {};
              s = function (e) {
                var t = false;
                return function () {
                  if (!t) {
                    t = true;
                    for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) {
                      r[i] = arguments[i];
                    }
                    e.apply(this, r);
                  }
                };
              }(s || i);
              var a = n.readable || n.readable !== false && t.readable;
              var o = n.writable || n.writable !== false && t.writable;
              function h() {
                if (!t.writable) {
                  d();
                }
              }
              var l = t._writableState && t._writableState.finished;
              function d() {
                o = false;
                l = true;
                if (!a) {
                  s.call(t);
                }
              }
              var c = t._readableState && t._readableState.endEmitted;
              function u() {
                a = false;
                c = true;
                if (!o) {
                  s.call(t);
                }
              }
              function p(e) {
                s.call(t, e);
              }
              function m() {
                var e;
                if (a && !c) {
                  if (!t._readableState || !t._readableState.ended) {
                    e = new r();
                  }
                  return s.call(t, e);
                } else if (o && !l) {
                  if (!t._writableState || !t._writableState.ended) {
                    e = new r();
                  }
                  return s.call(t, e);
                } else {
                  return undefined;
                }
              }
              function f() {
                t.req.on("finish", d);
              }
              if (function (e) {
                return e.setHeader && typeof e.abort == "function";
              }(t)) {
                t.on("complete", d);
                t.on("abort", m);
                if (t.req) {
                  f();
                } else {
                  t.on("request", f);
                }
              } else if (o && !t._writableState) {
                t.on("end", h);
                t.on("close", h);
              }
              t.on("end", u);
              t.on("finish", d);
              if (n.error !== false) {
                t.on("error", p);
              }
              t.on("close", m);
              return function () {
                t.removeListener("complete", d);
                t.removeListener("abort", m);
                t.removeListener("request", f);
                if (t.req) {
                  t.req.removeListener("finish", d);
                }
                t.removeListener("end", h);
                t.removeListener("close", h);
                t.removeListener("finish", d);
                t.removeListener("end", u);
                t.removeListener("error", p);
                t.removeListener("close", m);
              };
            };
          },
        90968(e) {
            e.exports = function () {
              throw new Error("Readable.from is not available in the browser");
            };
          },
        5267(e, t, n) {
            "use strict";
        
            var r;
            var i = n(12463).F;
            var s = i.ERR_MISSING_ARGS;
            var a = i.ERR_STREAM_DESTROYED;
            function o(e) {
              if (e) {
                throw e;
              }
            }
            function h(e) {
              e();
            }
            function l(e, t) {
              return e.pipe(t);
            }
            e.exports = function () {
              for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) {
                t[i] = arguments[i];
              }
              var d;
              var c = function (e) {
                if (e.length) {
                  if (typeof e[e.length - 1] != "function") {
                    return o;
                  } else {
                    return e.pop();
                  }
                } else {
                  return o;
                }
              }(t);
              if (Array.isArray(t[0])) {
                t = t[0];
              }
              if (t.length < 2) {
                throw new s("streams");
              }
              var u = t.map(function (e, i) {
                var s = i < t.length - 1;
                return function (e, t, i, s) {
                  s = function (e) {
                    var t = false;
                    return function () {
                      if (!t) {
                        t = true;
                        e.apply(undefined, arguments);
                      }
                    };
                  }(s);
                  var o = false;
                  e.on("close", function () {
                    o = true;
                  });
                  if (r === undefined) {
                    r = n(14257);
                  }
                  r(e, {
                    readable: t,
                    writable: i
                  }, function (e) {
                    if (e) {
                      return s(e);
                    }
                    o = true;
                    s();
                  });
                  var h = false;
                  return function (t) {
                    if (!o && !h) {
                      h = true;
                      if (function (e) {
                        return e.setHeader && typeof e.abort == "function";
                      }(e)) {
                        return e.abort();
                      } else if (typeof e.destroy == "function") {
                        return e.destroy();
                      } else {
                        s(t || new a("pipe"));
                        return;
                      }
                    }
                  };
                }(e, s, i > 0, function (e) {
                  d ||= e;
                  if (e) {
                    u.forEach(h);
                  }
                  if (!s) {
                    u.forEach(h);
                    c(d);
                  }
                });
              });
              return t.reduce(l);
            };
          },
        66644(e, t, n) {
            "use strict";
        
            var r = n(12463).F.ERR_INVALID_OPT_VALUE;
            e.exports = {
              getHighWaterMark: function (e, t, n, i) {
                var s = function (e, t, n) {
                  return e.highWaterMark ?? (t ? e[n] : null);
                }(t, i, n);
                if (s != null) {
                  if (!isFinite(s) || Math.floor(s) !== s || s < 0) {
                    throw new r(i ? n : "highWaterMark", s);
                  }
                  return Math.floor(s);
                }
                if (e.objectMode) {
                  return 16;
                } else {
                  return 16384;
                }
              }
            };
          },
        41396(e, t, n) {
            e.exports = n(37007).EventEmitter;
          },
        83141(e, t, n) {
            "use strict";
        
            var r = n(92861).Buffer;
            var i = r.isEncoding || function (e) {
              switch ((e = "" + e) && e.toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                case "raw":
                  return true;
                default:
                  return false;
              }
            };
            function s(e) {
              var t;
              this.encoding = function (e) {
                var t = function (e) {
                  if (!e) {
                    return "utf8";
                  }
                  var t;
                  for (;;) {
                    switch (e) {
                      case "utf8":
                      case "utf-8":
                        return "utf8";
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return "utf16le";
                      case "latin1":
                      case "binary":
                        return "latin1";
                      case "base64":
                      case "ascii":
                      case "hex":
                        return e;
                      default:
                        if (t) {
                          return;
                        }
                        e = ("" + e).toLowerCase();
                        t = true;
                    }
                  }
                }(e);
                if (typeof t != "string" && (r.isEncoding === i || !i(e))) {
                  throw new Error("Unknown encoding: " + e);
                }
                return t || e;
              }(e);
              switch (this.encoding) {
                case "utf16le":
                  this.text = h;
                  this.end = l;
                  t = 4;
                  break;
                case "utf8":
                  this.fillLast = o;
                  t = 4;
                  break;
                case "base64":
                  this.text = d;
                  this.end = c;
                  t = 3;
                  break;
                default:
                  this.write = u;
                  this.end = p;
                  return;
              }
              this.lastNeed = 0;
              this.lastTotal = 0;
              this.lastChar = r.allocUnsafe(t);
            }
            function a(e) {
              if (e <= 127) {
                return 0;
              } else if (e >> 5 == 6) {
                return 2;
              } else if (e >> 4 == 14) {
                return 3;
              } else if (e >> 3 == 30) {
                return 4;
              } else if (e >> 6 == 2) {
                return -1;
              } else {
                return -2;
              }
            }
            function o(e) {
              var t = this.lastTotal - this.lastNeed;
              var n = function (e, t) {
                if ((t[0] & 192) != 128) {
                  e.lastNeed = 0;
                  return "�";
                }
                if (e.lastNeed > 1 && t.length > 1) {
                  if ((t[1] & 192) != 128) {
                    e.lastNeed = 1;
                    return "�";
                  }
                  if (e.lastNeed > 2 && t.length > 2 && (t[2] & 192) != 128) {
                    e.lastNeed = 2;
                    return "�";
                  }
                }
              }(this, e);
              if (n !== undefined) {
                return n;
              } else if (this.lastNeed <= e.length) {
                e.copy(this.lastChar, t, 0, this.lastNeed);
                return this.lastChar.toString(this.encoding, 0, this.lastTotal);
              } else {
                e.copy(this.lastChar, t, 0, e.length);
                this.lastNeed -= e.length;
                return;
              }
            }
            function h(e, t) {
              if ((e.length - t) % 2 == 0) {
                var n = e.toString("utf16le", t);
                if (n) {
                  var r = n.charCodeAt(n.length - 1);
                  if (r >= 55296 && r <= 56319) {
                    this.lastNeed = 2;
                    this.lastTotal = 4;
                    this.lastChar[0] = e[e.length - 2];
                    this.lastChar[1] = e[e.length - 1];
                    return n.slice(0, -1);
                  }
                }
                return n;
              }
              this.lastNeed = 1;
              this.lastTotal = 2;
              this.lastChar[0] = e[e.length - 1];
              return e.toString("utf16le", t, e.length - 1);
            }
            function l(e) {
              var t = e && e.length ? this.write(e) : "";
              if (this.lastNeed) {
                var n = this.lastTotal - this.lastNeed;
                return t + this.lastChar.toString("utf16le", 0, n);
              }
              return t;
            }
            function d(e, t) {
              var n = (e.length - t) % 3;
              if (n === 0) {
                return e.toString("base64", t);
              } else {
                this.lastNeed = 3 - n;
                this.lastTotal = 3;
                if (n === 1) {
                  this.lastChar[0] = e[e.length - 1];
                } else {
                  this.lastChar[0] = e[e.length - 2];
                  this.lastChar[1] = e[e.length - 1];
                }
                return e.toString("base64", t, e.length - n);
              }
            }
            function c(e) {
              var t = e && e.length ? this.write(e) : "";
              if (this.lastNeed) {
                return t + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
              } else {
                return t;
              }
            }
            function u(e) {
              return e.toString(this.encoding);
            }
            function p(e) {
              if (e && e.length) {
                return this.write(e);
              } else {
                return "";
              }
            }
            t.I = s;
            s.prototype.write = function (e) {
              if (e.length === 0) {
                return "";
              }
              var t;
              var n;
              if (this.lastNeed) {
                if ((t = this.fillLast(e)) === undefined) {
                  return "";
                }
                n = this.lastNeed;
                this.lastNeed = 0;
              } else {
                n = 0;
              }
              if (n < e.length) {
                if (t) {
                  return t + this.text(e, n);
                } else {
                  return this.text(e, n);
                }
              } else {
                return t || "";
              }
            };
            s.prototype.end = function (e) {
              var t = e && e.length ? this.write(e) : "";
              if (this.lastNeed) {
                return t + "�";
              } else {
                return t;
              }
            };
            s.prototype.text = function (e, t) {
              var n = function (e, t, n) {
                var r = t.length - 1;
                if (r < n) {
                  return 0;
                }
                var i = a(t[r]);
                if (i >= 0) {
                  if (i > 0) {
                    e.lastNeed = i - 1;
                  }
                  return i;
                } else if (--r < n || i === -2) {
                  return 0;
                } else if ((i = a(t[r])) >= 0) {
                  if (i > 0) {
                    e.lastNeed = i - 2;
                  }
                  return i;
                } else if (--r < n || i === -2) {
                  return 0;
                } else if ((i = a(t[r])) >= 0) {
                  if (i > 0) {
                    if (i === 2) {
                      i = 0;
                    } else {
                      e.lastNeed = i - 3;
                    }
                  }
                  return i;
                } else {
                  return 0;
                }
              }(this, e, t);
              if (!this.lastNeed) {
                return e.toString("utf8", t);
              }
              this.lastTotal = n;
              var r = e.length - (n - this.lastNeed);
              e.copy(this.lastChar, 0, r);
              return e.toString("utf8", t, r);
            };
            s.prototype.fillLast = function (e) {
              if (this.lastNeed <= e.length) {
                e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
                return this.lastChar.toString(this.encoding, 0, this.lastTotal);
              }
              e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length);
              this.lastNeed -= e.length;
            };
          },
        94643(e, t, n) {
            function r(e) {
              try {
                if (!n.g.localStorage) {
                  return false;
                }
              } catch (e) {
                return false;
              }
              var t = n.g.localStorage[e];
              return t != null && String(t).toLowerCase() === "true";
            }
            e.exports = function (e, t) {
              if (r("noDeprecation")) {
                return e;
              }
              var n = false;
              return function () {
                if (!n) {
                  if (r("throwDeprecation")) {
                    throw new Error(t);
                  }
                  r("traceDeprecation");
                  n = true;
                }
                return e.apply(this, arguments);
              };
            };
          }
    });
})();
