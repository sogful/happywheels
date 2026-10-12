(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        81999(e, t, n) {
            "use strict";
        
            var r;
            var i = n(65606);
            function s(e) {
              var t = this;
              this.next = null;
              this.entry = null;
              this.finish = function () {
                (function (e, t) {
                  var n = e.entry;
                  for (e.entry = null; n;) {
                    var r = n.callback;
                    t.pendingcb--;
                    r(undefined);
                    n = n.next;
                  }
                  t.corkedRequestsFree.next = e;
                })(t, e);
              };
            }
            e.exports = C;
            C.WritableState = A;
            var a;
            var o = {
              deprecate: n(94643)
            };
            var h = n(41396);
            var l = n(48287).Buffer;
            var d = (n.g !== undefined ? n.g : typeof window != "undefined" ? window : typeof self != "undefined" ? self : {}).Uint8Array || function () {};
            var c = n(54347);
            var u = n(66644).getHighWaterMark;
            var p = n(12463).F;
            var m = p.ERR_INVALID_ARG_TYPE;
            var f = p.ERR_METHOD_NOT_IMPLEMENTED;
            var _ = p.ERR_MULTIPLE_CALLBACK;
            var v = p.ERR_STREAM_CANNOT_PIPE;
            var y = p.ERR_STREAM_DESTROYED;
            var g = p.ERR_STREAM_NULL_VALUES;
            var w = p.ERR_STREAM_WRITE_AFTER_END;
            var x = p.ERR_UNKNOWN_ENCODING;
            var b = c.errorOrDestroy;
            function T() {}
            function A(e, t, a) {
              r = r || n(88101);
              e = e || {};
              if (typeof a != "boolean") {
                a = t instanceof r;
              }
              this.objectMode = !!e.objectMode;
              if (a) {
                this.objectMode = this.objectMode || !!e.writableObjectMode;
              }
              this.highWaterMark = u(this, e, "writableHighWaterMark", a);
              this.finalCalled = false;
              this.needDrain = false;
              this.ending = false;
              this.ended = false;
              this.finished = false;
              this.destroyed = false;
              var o = e.decodeStrings === false;
              this.decodeStrings = !o;
              this.defaultEncoding = e.defaultEncoding || "utf8";
              this.length = 0;
              this.writing = false;
              this.corked = 0;
              this.sync = true;
              this.bufferProcessing = false;
              this.onwrite = function (e) {
                (function (e, t) {
                  var n = e._writableState;
                  var r = n.sync;
                  var s = n.writecb;
                  if (typeof s != "function") {
                    throw new _();
                  }
                  (function (e) {
                    e.writing = false;
                    e.writecb = null;
                    e.length -= e.writelen;
                    e.writelen = 0;
                  })(n);
                  if (t) {
                    (function (e, t, n, r, s) {
                      --t.pendingcb;
                      if (n) {
                        i.nextTick(s, r);
                        i.nextTick(M, e, t);
                        e._writableState.errorEmitted = true;
                        b(e, r);
                      } else {
                        s(r);
                        e._writableState.errorEmitted = true;
                        b(e, r);
                        M(e, t);
                      }
                    })(e, n, r, t, s);
                  } else {
                    var a = k(n) || e.destroyed;
                    if (!a && !n.corked && !n.bufferProcessing && !!n.bufferedRequest) {
                      O(e, n);
                    }
                    if (r) {
                      i.nextTick(E, e, n, a, s);
                    } else {
                      E(e, n, a, s);
                    }
                  }
                })(t, e);
              };
              this.writecb = null;
              this.writelen = 0;
              this.bufferedRequest = null;
              this.lastBufferedRequest = null;
              this.pendingcb = 0;
              this.prefinished = false;
              this.errorEmitted = false;
              this.emitClose = e.emitClose !== false;
              this.autoDestroy = !!e.autoDestroy;
              this.bufferedRequestCount = 0;
              this.corkedRequestsFree = new s(this);
            }
            function C(e) {
              var t = this instanceof (r = r || n(88101));
              if (!t && !a.call(C, this)) {
                return new C(e);
              }
              this._writableState = new A(e, this, t);
              this.writable = true;
              if (e) {
                if (typeof e.write == "function") {
                  this._write = e.write;
                }
                if (typeof e.writev == "function") {
                  this._writev = e.writev;
                }
                if (typeof e.destroy == "function") {
                  this._destroy = e.destroy;
                }
                if (typeof e.final == "function") {
                  this._final = e.final;
                }
              }
              h.call(this);
            }
            function S(e, t, n, r, i, s, a) {
              t.writelen = r;
              t.writecb = a;
              t.writing = true;
              t.sync = true;
              if (t.destroyed) {
                t.onwrite(new y("write"));
              } else if (n) {
                e._writev(i, t.onwrite);
              } else {
                e._write(i, s, t.onwrite);
              }
              t.sync = false;
            }
            function E(e, t, n, r) {
              if (!n) {
                (function (e, t) {
                  if (t.length === 0 && t.needDrain) {
                    t.needDrain = false;
                    e.emit("drain");
                  }
                })(e, t);
              }
              t.pendingcb--;
              r();
              M(e, t);
            }
            function O(e, t) {
              t.bufferProcessing = true;
              var n = t.bufferedRequest;
              if (e._writev && n && n.next) {
                var r = t.bufferedRequestCount;
                var i = new Array(r);
                var a = t.corkedRequestsFree;
                a.entry = n;
                var o = 0;
                var h = true;
                for (; n;) {
                  i[o] = n;
                  if (!n.isBuf) {
                    h = false;
                  }
                  n = n.next;
                  o += 1;
                }
                i.allBuffers = h;
                S(e, t, true, t.length, i, "", a.finish);
                t.pendingcb++;
                t.lastBufferedRequest = null;
                if (a.next) {
                  t.corkedRequestsFree = a.next;
                  a.next = null;
                } else {
                  t.corkedRequestsFree = new s(t);
                }
                t.bufferedRequestCount = 0;
              } else {
                while (n) {
                  var l = n.chunk;
                  var d = n.encoding;
                  var c = n.callback;
                  S(e, t, false, t.objectMode ? 1 : l.length, l, d, c);
                  n = n.next;
                  t.bufferedRequestCount--;
                  if (t.writing) {
                    break;
                  }
                }
                if (n === null) {
                  t.lastBufferedRequest = null;
                }
              }
              t.bufferedRequest = n;
              t.bufferProcessing = false;
            }
            function k(e) {
              return e.ending && e.length === 0 && e.bufferedRequest === null && !e.finished && !e.writing;
            }
            function P(e, t) {
              e._final(function (n) {
                t.pendingcb--;
                if (n) {
                  b(e, n);
                }
                t.prefinished = true;
                e.emit("prefinish");
                M(e, t);
              });
            }
            function M(e, t) {
              var n = k(t);
              if (n && (function (e, t) {
                if (!t.prefinished && !t.finalCalled) {
                  if (typeof e._final != "function" || t.destroyed) {
                    t.prefinished = true;
                    e.emit("prefinish");
                  } else {
                    t.pendingcb++;
                    t.finalCalled = true;
                    i.nextTick(P, e, t);
                  }
                }
              }(e, t), t.pendingcb === 0 && (t.finished = true, e.emit("finish"), t.autoDestroy))) {
                var r = e._readableState;
                if (!r || r.autoDestroy && r.endEmitted) {
                  e.destroy();
                }
              }
              return n;
            }
            n(56698)(C, h);
            A.prototype.getBuffer = function () {
              for (var e = this.bufferedRequest, t = []; e;) {
                t.push(e);
                e = e.next;
              }
              return t;
            };
            (function () {
              try {
                Object.defineProperty(A.prototype, "buffer", {
                  get: o.deprecate(function () {
                    return this.getBuffer();
                  }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                });
              } catch (e) {}
            })();
            if (typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function") {
              a = Function.prototype[Symbol.hasInstance];
              Object.defineProperty(C, Symbol.hasInstance, {
                value: function (e) {
                  return !!a.call(this, e) || this === C && e && e._writableState instanceof A;
                }
              });
            } else {
              a = function (e) {
                return e instanceof this;
              };
            }
            C.prototype.pipe = function () {
              b(this, new v());
            };
            C.prototype.write = function (e, t, n) {
              var r;
              var s = this._writableState;
              var a = false;
              var o = !s.objectMode && (r = e, l.isBuffer(r) || r instanceof d);
              if (o && !l.isBuffer(e)) {
                e = function (e) {
                  return l.from(e);
                }(e);
              }
              if (typeof t == "function") {
                n = t;
                t = null;
              }
              if (o) {
                t = "buffer";
              } else {
                t ||= s.defaultEncoding;
              }
              if (typeof n != "function") {
                n = T;
              }
              if (s.ending) {
                (function (e, t) {
                  var n = new w();
                  b(e, n);
                  i.nextTick(t, n);
                })(this, n);
              } else if (o || function (e, t, n, r) {
                var s;
                if (n === null) {
                  s = new g();
                } else if (typeof n != "string" && !t.objectMode) {
                  s = new m("chunk", ["string", "Buffer"], n);
                }
                return !s || (b(e, s), i.nextTick(r, s), false);
              }(this, s, e, n)) {
                s.pendingcb++;
                a = function (e, t, n, r, i, s) {
                  if (!n) {
                    var a = function (e, t, n) {
                      if (!e.objectMode && e.decodeStrings !== false && typeof t == "string") {
                        t = l.from(t, n);
                      }
                      return t;
                    }(t, r, i);
                    if (r !== a) {
                      n = true;
                      i = "buffer";
                      r = a;
                    }
                  }
                  var o = t.objectMode ? 1 : r.length;
                  t.length += o;
                  var h = t.length < t.highWaterMark;
                  if (!h) {
                    t.needDrain = true;
                  }
                  if (t.writing || t.corked) {
                    var d = t.lastBufferedRequest;
                    t.lastBufferedRequest = {
                      chunk: r,
                      encoding: i,
                      isBuf: n,
                      callback: s,
                      next: null
                    };
                    if (d) {
                      d.next = t.lastBufferedRequest;
                    } else {
                      t.bufferedRequest = t.lastBufferedRequest;
                    }
                    t.bufferedRequestCount += 1;
                  } else {
                    S(e, t, false, o, r, i, s);
                  }
                  return h;
                }(this, s, o, e, t, n);
              }
              return a;
            };
            C.prototype.cork = function () {
              this._writableState.corked++;
            };
            C.prototype.uncork = function () {
              var e = this._writableState;
              if (e.corked) {
                e.corked--;
                if (!e.writing && !e.corked && !e.bufferProcessing && !!e.bufferedRequest) {
                  O(this, e);
                }
              }
            };
            C.prototype.setDefaultEncoding = function (e) {
              if (typeof e == "string") {
                e = e.toLowerCase();
              }
              if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) {
                throw new x(e);
              }
              this._writableState.defaultEncoding = e;
              return this;
            };
            Object.defineProperty(C.prototype, "writableBuffer", {
              enumerable: false,
              get: function () {
                return this._writableState && this._writableState.getBuffer();
              }
            });
            Object.defineProperty(C.prototype, "writableHighWaterMark", {
              enumerable: false,
              get: function () {
                return this._writableState.highWaterMark;
              }
            });
            C.prototype._write = function (e, t, n) {
              n(new f("_write()"));
            };
            C.prototype._writev = null;
            C.prototype.end = function (e, t, n) {
              var r = this._writableState;
              if (typeof e == "function") {
                n = e;
                e = null;
                t = null;
              } else if (typeof t == "function") {
                n = t;
                t = null;
              }
              if (e != null) {
                this.write(e, t);
              }
              if (r.corked) {
                r.corked = 1;
                this.uncork();
              }
              if (!r.ending) {
                (function (e, t, n) {
                  t.ending = true;
                  M(e, t);
                  if (n) {
                    if (t.finished) {
                      i.nextTick(n);
                    } else {
                      e.once("finish", n);
                    }
                  }
                  t.ended = true;
                  e.writable = false;
                })(this, r, n);
              }
              return this;
            };
            Object.defineProperty(C.prototype, "writableLength", {
              enumerable: false,
              get: function () {
                return this._writableState.length;
              }
            });
            Object.defineProperty(C.prototype, "destroyed", {
              enumerable: false,
              get: function () {
                return this._writableState !== undefined && this._writableState.destroyed;
              },
              set: function (e) {
                if (this._writableState) {
                  this._writableState.destroyed = e;
                }
              }
            });
            C.prototype.destroy = c.destroy;
            C.prototype._undestroy = c.undestroy;
            C.prototype._destroy = function (e, t) {
              t(e);
            };
          },
        65034(e, t, n) {
            "use strict";
        
            var r;
            var i = n(65606);
            function s(e, t, n) {
              if ((t = function (e) {
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
              }(t)) in e) {
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
            var a = n(14257);
            var o = Symbol("lastResolve");
            var h = Symbol("lastReject");
            var l = Symbol("error");
            var d = Symbol("ended");
            var c = Symbol("lastPromise");
            var u = Symbol("handlePromise");
            var p = Symbol("stream");
            function m(e, t) {
              return {
                value: e,
                done: t
              };
            }
            function f(e) {
              var t = e[o];
              if (t !== null) {
                var n = e[p].read();
                if (n !== null) {
                  e[c] = null;
                  e[o] = null;
                  e[h] = null;
                  t(m(n, false));
                }
              }
            }
            function _(e) {
              i.nextTick(f, e);
            }
            var v = Object.getPrototypeOf(function () {});
            var y = Object.setPrototypeOf((s(r = {
              get stream() {
                return this[p];
              },
              next: function () {
                var e = this;
                var t = this[l];
                if (t !== null) {
                  return Promise.reject(t);
                }
                if (this[d]) {
                  return Promise.resolve(m(undefined, true));
                }
                if (this[p].destroyed) {
                  return new Promise(function (t, n) {
                    i.nextTick(function () {
                      if (e[l]) {
                        n(e[l]);
                      } else {
                        t(m(undefined, true));
                      }
                    });
                  });
                }
                var n;
                var r = this[c];
                if (r) {
                  n = new Promise(function (e, t) {
                    return function (n, r) {
                      e.then(function () {
                        if (t[d]) {
                          n(m(undefined, true));
                        } else {
                          t[u](n, r);
                        }
                      }, r);
                    };
                  }(r, this));
                } else {
                  var s = this[p].read();
                  if (s !== null) {
                    return Promise.resolve(m(s, false));
                  }
                  n = new Promise(this[u]);
                }
                this[c] = n;
                return n;
              }
            }, Symbol.asyncIterator, function () {
              return this;
            }), s(r, "return", function () {
              var e = this;
              return new Promise(function (t, n) {
                e[p].destroy(null, function (e) {
                  if (e) {
                    n(e);
                  } else {
                    t(m(undefined, true));
                  }
                });
              });
            }), r), v);
            e.exports = function (e) {
              var t;
              var n = Object.create(y, (s(t = {}, p, {
                value: e,
                writable: true
              }), s(t, o, {
                value: null,
                writable: true
              }), s(t, h, {
                value: null,
                writable: true
              }), s(t, l, {
                value: null,
                writable: true
              }), s(t, d, {
                value: e._readableState.endEmitted,
                writable: true
              }), s(t, u, {
                value: function (e, t) {
                  var r = n[p].read();
                  if (r) {
                    n[c] = null;
                    n[o] = null;
                    n[h] = null;
                    e(m(r, false));
                  } else {
                    n[o] = e;
                    n[h] = t;
                  }
                },
                writable: true
              }), t));
              n[c] = null;
              a(e, function (e) {
                if (e && e.code !== "ERR_STREAM_PREMATURE_CLOSE") {
                  var t = n[h];
                  if (t !== null) {
                    n[c] = null;
                    n[o] = null;
                    n[h] = null;
                    t(e);
                  }
                  n[l] = e;
                  return;
                }
                var r = n[o];
                if (r !== null) {
                  n[c] = null;
                  n[o] = null;
                  n[h] = null;
                  r(m(undefined, true));
                }
                n[d] = true;
              });
              e.on("readable", _.bind(null, n));
              return n;
            };
          }
    });
})();
