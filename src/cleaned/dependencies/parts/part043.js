(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        46891(e, t, n) {
            "use strict";
        
            var r;
            var i = n(65606);
            e.exports = C;
            C.ReadableState = A;
            n(37007).EventEmitter;
            var s;
            function a(e, t) {
              return e.listeners(t).length;
            }
            var o = n(41396);
            var h = n(48287).Buffer;
            var l = (n.g !== undefined ? n.g : typeof window != "undefined" ? window : typeof self != "undefined" ? self : {}).Uint8Array || function () {};
            var d = n(77199);
            s = d && d.debuglog ? d.debuglog("stream") : function () {};
            var c;
            var u;
            var p;
            var m = n(81766);
            var f = n(54347);
            var _ = n(66644).getHighWaterMark;
            var v = n(12463).F;
            var y = v.ERR_INVALID_ARG_TYPE;
            var g = v.ERR_STREAM_PUSH_AFTER_EOF;
            var w = v.ERR_METHOD_NOT_IMPLEMENTED;
            var x = v.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
            n(56698)(C, o);
            var b = f.errorOrDestroy;
            var T = ["error", "close", "destroy", "pause", "resume"];
            function A(e, t, i) {
              r = r || n(88101);
              e = e || {};
              if (typeof i != "boolean") {
                i = t instanceof r;
              }
              this.objectMode = !!e.objectMode;
              if (i) {
                this.objectMode = this.objectMode || !!e.readableObjectMode;
              }
              this.highWaterMark = _(this, e, "readableHighWaterMark", i);
              this.buffer = new m();
              this.length = 0;
              this.pipes = null;
              this.pipesCount = 0;
              this.flowing = null;
              this.ended = false;
              this.endEmitted = false;
              this.reading = false;
              this.sync = true;
              this.needReadable = false;
              this.emittedReadable = false;
              this.readableListening = false;
              this.resumeScheduled = false;
              this.paused = true;
              this.emitClose = e.emitClose !== false;
              this.autoDestroy = !!e.autoDestroy;
              this.destroyed = false;
              this.defaultEncoding = e.defaultEncoding || "utf8";
              this.awaitDrain = 0;
              this.readingMore = false;
              this.decoder = null;
              this.encoding = null;
              if (e.encoding) {
                c ||= n(83141).I;
                this.decoder = new c(e.encoding);
                this.encoding = e.encoding;
              }
            }
            function C(e) {
              r = r || n(88101);
              if (!(this instanceof C)) {
                return new C(e);
              }
              var t = this instanceof r;
              this._readableState = new A(e, this, t);
              this.readable = true;
              if (e) {
                if (typeof e.read == "function") {
                  this._read = e.read;
                }
                if (typeof e.destroy == "function") {
                  this._destroy = e.destroy;
                }
              }
              o.call(this);
            }
            function S(e, t, n, r, i) {
              s("readableAddChunk", t);
              var a;
              var o = e._readableState;
              if (t === null) {
                o.reading = false;
                (function (e, t) {
                  s("onEofChunk");
                  if (!t.ended) {
                    if (t.decoder) {
                      var n = t.decoder.end();
                      if (n && n.length) {
                        t.buffer.push(n);
                        t.length += t.objectMode ? 1 : n.length;
                      }
                    }
                    t.ended = true;
                    if (t.sync) {
                      P(e);
                    } else {
                      t.needReadable = false;
                      if (!t.emittedReadable) {
                        t.emittedReadable = true;
                        M(e);
                      }
                    }
                  }
                })(e, o);
              } else {
                if (!i) {
                  a = function (e, t) {
                    var n;
                    var r;
                    r = t;
                    if (!h.isBuffer(r) && !(r instanceof l) && typeof t != "string" && t !== undefined && !e.objectMode) {
                      n = new y("chunk", ["string", "Buffer", "Uint8Array"], t);
                    }
                    return n;
                  }(o, t);
                }
                if (a) {
                  b(e, a);
                } else if (o.objectMode || t && t.length > 0) {
                  if (typeof t != "string" && !o.objectMode && Object.getPrototypeOf(t) !== h.prototype) {
                    t = function (e) {
                      return h.from(e);
                    }(t);
                  }
                  if (r) {
                    if (o.endEmitted) {
                      b(e, new x());
                    } else {
                      E(e, o, t, true);
                    }
                  } else if (o.ended) {
                    b(e, new g());
                  } else {
                    if (o.destroyed) {
                      return false;
                    }
                    o.reading = false;
                    if (o.decoder && !n) {
                      t = o.decoder.write(t);
                      if (o.objectMode || t.length !== 0) {
                        E(e, o, t, false);
                      } else {
                        R(e, o);
                      }
                    } else {
                      E(e, o, t, false);
                    }
                  }
                } else if (!r) {
                  o.reading = false;
                  R(e, o);
                }
              }
              return !o.ended && (o.length < o.highWaterMark || o.length === 0);
            }
            function E(e, t, n, r) {
              if (t.flowing && t.length === 0 && !t.sync) {
                t.awaitDrain = 0;
                e.emit("data", n);
              } else {
                t.length += t.objectMode ? 1 : n.length;
                if (r) {
                  t.buffer.unshift(n);
                } else {
                  t.buffer.push(n);
                }
                if (t.needReadable) {
                  P(e);
                }
              }
              R(e, t);
            }
            Object.defineProperty(C.prototype, "destroyed", {
              enumerable: false,
              get: function () {
                return this._readableState !== undefined && this._readableState.destroyed;
              },
              set: function (e) {
                if (this._readableState) {
                  this._readableState.destroyed = e;
                }
              }
            });
            C.prototype.destroy = f.destroy;
            C.prototype._undestroy = f.undestroy;
            C.prototype._destroy = function (e, t) {
              t(e);
            };
            C.prototype.push = function (e, t) {
              var n;
              var r = this._readableState;
              if (r.objectMode) {
                n = true;
              } else if (typeof e == "string") {
                if ((t = t || r.defaultEncoding) !== r.encoding) {
                  e = h.from(e, t);
                  t = "";
                }
                n = true;
              }
              return S(this, e, t, false, n);
            };
            C.prototype.unshift = function (e) {
              return S(this, e, null, true, false);
            };
            C.prototype.isPaused = function () {
              return this._readableState.flowing === false;
            };
            C.prototype.setEncoding = function (e) {
              c ||= n(83141).I;
              var t = new c(e);
              this._readableState.decoder = t;
              this._readableState.encoding = this._readableState.decoder.encoding;
              for (var r = this._readableState.buffer.head, i = ""; r !== null;) {
                i += t.write(r.data);
                r = r.next;
              }
              this._readableState.buffer.clear();
              if (i !== "") {
                this._readableState.buffer.push(i);
              }
              this._readableState.length = i.length;
              return this;
            };
            var O = 1073741824;
            function k(e, t) {
              if (e <= 0 || t.length === 0 && t.ended) {
                return 0;
              } else if (t.objectMode) {
                return 1;
              } else if (e != e) {
                if (t.flowing && t.length) {
                  return t.buffer.head.data.length;
                } else {
                  return t.length;
                }
              } else {
                if (e > t.highWaterMark) {
                  t.highWaterMark = function (e) {
                    if (e >= O) {
                      e = O;
                    } else {
                      e--;
                      e |= e >>> 1;
                      e |= e >>> 2;
                      e |= e >>> 4;
                      e |= e >>> 8;
                      e |= e >>> 16;
                      e++;
                    }
                    return e;
                  }(e);
                }
                if (e <= t.length) {
                  return e;
                } else if (t.ended) {
                  return t.length;
                } else {
                  t.needReadable = true;
                  return 0;
                }
              }
            }
            function P(e) {
              var t = e._readableState;
              s("emitReadable", t.needReadable, t.emittedReadable);
              t.needReadable = false;
              if (!t.emittedReadable) {
                s("emitReadable", t.flowing);
                t.emittedReadable = true;
                i.nextTick(M, e);
              }
            }
            function M(e) {
              var t = e._readableState;
              s("emitReadable_", t.destroyed, t.length, t.ended);
              if (!t.destroyed && (!!t.length || !!t.ended)) {
                e.emit("readable");
                t.emittedReadable = false;
              }
              t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark;
              D(e);
            }
            function R(e, t) {
              if (!t.readingMore) {
                t.readingMore = true;
                i.nextTick(I, e, t);
              }
            }
            function I(e, t) {
              while (!t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && t.length === 0)) {
                var n = t.length;
                s("maybeReadMore read 0");
                e.read(0);
                if (n === t.length) {
                  break;
                }
              }
              t.readingMore = false;
            }
            function L(e) {
              var t = e._readableState;
              t.readableListening = e.listenerCount("readable") > 0;
              if (t.resumeScheduled && !t.paused) {
                t.flowing = true;
              } else if (e.listenerCount("data") > 0) {
                e.resume();
              }
            }
            function j(e) {
              s("readable nexttick read 0");
              e.read(0);
            }
            function B(e, t) {
              s("resume", t.reading);
              if (!t.reading) {
                e.read(0);
              }
              t.resumeScheduled = false;
              e.emit("resume");
              D(e);
              if (t.flowing && !t.reading) {
                e.read(0);
              }
            }
            function D(e) {
              var t = e._readableState;
              for (s("flow", t.flowing); t.flowing && e.read() !== null;);
            }
            function F(e, t) {
              if (t.length === 0) {
                return null;
              } else {
                if (t.objectMode) {
                  n = t.buffer.shift();
                } else if (!e || e >= t.length) {
                  n = t.decoder ? t.buffer.join("") : t.buffer.length === 1 ? t.buffer.first() : t.buffer.concat(t.length);
                  t.buffer.clear();
                } else {
                  n = t.buffer.consume(e, t.decoder);
                }
                return n;
              }
              var n;
            }
            function N(e) {
              var t = e._readableState;
              s("endReadable", t.endEmitted);
              if (!t.endEmitted) {
                t.ended = true;
                i.nextTick(G, t, e);
              }
            }
            function G(e, t) {
              s("endReadableNT", e.endEmitted, e.length);
              if (!e.endEmitted && e.length === 0 && (e.endEmitted = true, t.readable = false, t.emit("end"), e.autoDestroy)) {
                var n = t._writableState;
                if (!n || n.autoDestroy && n.finished) {
                  t.destroy();
                }
              }
            }
            function U(e, t) {
              for (var n = 0, r = e.length; n < r; n++) {
                if (e[n] === t) {
                  return n;
                }
              }
              return -1;
            }
            C.prototype.read = function (e) {
              s("read", e);
              e = parseInt(e, 10);
              var t = this._readableState;
              var n = e;
              if (e !== 0) {
                t.emittedReadable = false;
              }
              if (e === 0 && t.needReadable && ((t.highWaterMark !== 0 ? t.length >= t.highWaterMark : t.length > 0) || t.ended)) {
                s("read: emitReadable", t.length, t.ended);
                if (t.length === 0 && t.ended) {
                  N(this);
                } else {
                  P(this);
                }
                return null;
              }
              if ((e = k(e, t)) === 0 && t.ended) {
                if (t.length === 0) {
                  N(this);
                }
                return null;
              }
              var r;
              var i = t.needReadable;
              s("need readable", i);
              if (t.length === 0 || t.length - e < t.highWaterMark) {
                s("length less than watermark", i = true);
              }
              if (t.ended || t.reading) {
                s("reading or ended", i = false);
              } else if (i) {
                s("do read");
                t.reading = true;
                t.sync = true;
                if (t.length === 0) {
                  t.needReadable = true;
                }
                this._read(t.highWaterMark);
                t.sync = false;
                if (!t.reading) {
                  e = k(n, t);
                }
              }
              if ((r = e > 0 ? F(e, t) : null) === null) {
                t.needReadable = t.length <= t.highWaterMark;
                e = 0;
              } else {
                t.length -= e;
                t.awaitDrain = 0;
              }
              if (t.length === 0) {
                if (!t.ended) {
                  t.needReadable = true;
                }
                if (n !== e && t.ended) {
                  N(this);
                }
              }
              if (r !== null) {
                this.emit("data", r);
              }
              return r;
            };
            C.prototype._read = function (e) {
              b(this, new w("_read()"));
            };
            C.prototype.pipe = function (e, t) {
              var n = this;
              var r = this._readableState;
              switch (r.pipesCount) {
                case 0:
                  r.pipes = e;
                  break;
                case 1:
                  r.pipes = [r.pipes, e];
                  break;
                default:
                  r.pipes.push(e);
              }
              r.pipesCount += 1;
              s("pipe count=%d opts=%j", r.pipesCount, t);
              var o = t && t.end === false || e === i.stdout || e === i.stderr ? f : h;
              function h() {
                s("onend");
                e.end();
              }
              if (r.endEmitted) {
                i.nextTick(o);
              } else {
                n.once("end", o);
              }
              e.on("unpipe", function t(i, a) {
                s("onunpipe");
                if (i === n && a && a.hasUnpiped === false) {
                  a.hasUnpiped = true;
                  s("cleanup");
                  e.removeListener("close", p);
                  e.removeListener("finish", m);
                  e.removeListener("drain", l);
                  e.removeListener("error", u);
                  e.removeListener("unpipe", t);
                  n.removeListener("end", h);
                  n.removeListener("end", f);
                  n.removeListener("data", c);
                  d = true;
                  if (!!r.awaitDrain && (!e._writableState || !!e._writableState.needDrain)) {
                    l();
                  }
                }
              });
              var l = function (e) {
                return function () {
                  var t = e._readableState;
                  s("pipeOnDrain", t.awaitDrain);
                  if (t.awaitDrain) {
                    t.awaitDrain--;
                  }
                  if (t.awaitDrain === 0 && a(e, "data")) {
                    t.flowing = true;
                    D(e);
                  }
                };
              }(n);
              e.on("drain", l);
              var d = false;
              function c(t) {
                s("ondata");
                var i = e.write(t);
                s("dest.write", i);
                if (i === false) {
                  if ((r.pipesCount === 1 && r.pipes === e || r.pipesCount > 1 && U(r.pipes, e) !== -1) && !d) {
                    s("false write response, pause", r.awaitDrain);
                    r.awaitDrain++;
                  }
                  n.pause();
                }
              }
              function u(t) {
                s("onerror", t);
                f();
                e.removeListener("error", u);
                if (a(e, "error") === 0) {
                  b(e, t);
                }
              }
              function p() {
                e.removeListener("finish", m);
                f();
              }
              function m() {
                s("onfinish");
                e.removeListener("close", p);
                f();
              }
              function f() {
                s("unpipe");
                n.unpipe(e);
              }
              n.on("data", c);
              (function (e, t, n) {
                if (typeof e.prependListener == "function") {
                  return e.prependListener(t, n);
                }
                if (e._events && e._events[t]) {
                  if (Array.isArray(e._events[t])) {
                    e._events[t].unshift(n);
                  } else {
                    e._events[t] = [n, e._events[t]];
                  }
                } else {
                  e.on(t, n);
                }
              })(e, "error", u);
              e.once("close", p);
              e.once("finish", m);
              e.emit("pipe", n);
              if (!r.flowing) {
                s("pipe resume");
                n.resume();
              }
              return e;
            };
            C.prototype.unpipe = function (e) {
              var t = this._readableState;
              var n = {
                hasUnpiped: false
              };
              if (t.pipesCount === 0) {
                return this;
              }
              if (t.pipesCount === 1) {
                if (!e || e === t.pipes) {
                  e ||= t.pipes;
                  t.pipes = null;
                  t.pipesCount = 0;
                  t.flowing = false;
                  if (e) {
                    e.emit("unpipe", this, n);
                  }
                }
                return this;
              }
              if (!e) {
                var r = t.pipes;
                var i = t.pipesCount;
                t.pipes = null;
                t.pipesCount = 0;
                t.flowing = false;
                for (var s = 0; s < i; s++) {
                  r[s].emit("unpipe", this, {
                    hasUnpiped: false
                  });
                }
                return this;
              }
              var a = U(t.pipes, e);
              if (a !== -1) {
                t.pipes.splice(a, 1);
                t.pipesCount -= 1;
                if (t.pipesCount === 1) {
                  t.pipes = t.pipes[0];
                }
                e.emit("unpipe", this, n);
              }
              return this;
            };
            C.prototype.on = function (e, t) {
              var n = o.prototype.on.call(this, e, t);
              var r = this._readableState;
              if (e === "data") {
                r.readableListening = this.listenerCount("readable") > 0;
                if (r.flowing !== false) {
                  this.resume();
                }
              } else if (e === "readable") {
                if (!r.endEmitted && !r.readableListening) {
                  r.readableListening = r.needReadable = true;
                  r.flowing = false;
                  r.emittedReadable = false;
                  s("on readable", r.length, r.reading);
                  if (r.length) {
                    P(this);
                  } else if (!r.reading) {
                    i.nextTick(j, this);
                  }
                }
              }
              return n;
            };
            C.prototype.addListener = C.prototype.on;
            C.prototype.removeListener = function (e, t) {
              var n = o.prototype.removeListener.call(this, e, t);
              if (e === "readable") {
                i.nextTick(L, this);
              }
              return n;
            };
            C.prototype.removeAllListeners = function (e) {
              var t = o.prototype.removeAllListeners.apply(this, arguments);
              if (e === "readable" || e === undefined) {
                i.nextTick(L, this);
              }
              return t;
            };
            C.prototype.resume = function () {
              var e = this._readableState;
              if (!e.flowing) {
                s("resume");
                e.flowing = !e.readableListening;
                (function (e, t) {
                  if (!t.resumeScheduled) {
                    t.resumeScheduled = true;
                    i.nextTick(B, e, t);
                  }
                })(this, e);
              }
              e.paused = false;
              return this;
            };
            C.prototype.pause = function () {
              s("call pause flowing=%j", this._readableState.flowing);
              if (this._readableState.flowing !== false) {
                s("pause");
                this._readableState.flowing = false;
                this.emit("pause");
              }
              this._readableState.paused = true;
              return this;
            };
            C.prototype.wrap = function (e) {
              var t = this;
              var n = this._readableState;
              var r = false;
              e.on("end", function () {
                s("wrapped end");
                if (n.decoder && !n.ended) {
                  var e = n.decoder.end();
                  if (e && e.length) {
                    t.push(e);
                  }
                }
                t.push(null);
              });
              e.on("data", function (i) {
                s("wrapped data");
                if (n.decoder) {
                  i = n.decoder.write(i);
                }
                if (!n.objectMode || i != null) {
                  if (n.objectMode || i && i.length) {
                    if (!t.push(i)) {
                      r = true;
                      e.pause();
                    }
                  }
                }
              });
              for (var i in e) {
                if (this[i] === undefined && typeof e[i] == "function") {
                  this[i] = function (t) {
                    return function () {
                      return e[t].apply(e, arguments);
                    };
                  }(i);
                }
              }
              for (var a = 0; a < T.length; a++) {
                e.on(T[a], this.emit.bind(this, T[a]));
              }
              this._read = function (t) {
                s("wrapped _read", t);
                if (r) {
                  r = false;
                  e.resume();
                }
              };
              return this;
            };
            if (typeof Symbol == "function") {
              C.prototype[Symbol.asyncIterator] = function () {
                if (u === undefined) {
                  u = n(65034);
                }
                return u(this);
              };
            }
            Object.defineProperty(C.prototype, "readableHighWaterMark", {
              enumerable: false,
              get: function () {
                return this._readableState.highWaterMark;
              }
            });
            Object.defineProperty(C.prototype, "readableBuffer", {
              enumerable: false,
              get: function () {
                return this._readableState && this._readableState.buffer;
              }
            });
            Object.defineProperty(C.prototype, "readableFlowing", {
              enumerable: false,
              get: function () {
                return this._readableState.flowing;
              },
              set: function (e) {
                if (this._readableState) {
                  this._readableState.flowing = e;
                }
              }
            });
            C._fromList = F;
            Object.defineProperty(C.prototype, "readableLength", {
              enumerable: false,
              get: function () {
                return this._readableState.length;
              }
            });
            if (typeof Symbol == "function") {
              C.from = function (e, t) {
                if (p === undefined) {
                  p = n(90968);
                }
                return p(C, e, t);
              };
            }
          },
        59083(e, t, n) {
            "use strict";
        
            e.exports = d;
            var r = n(12463).F;
            var i = r.ERR_METHOD_NOT_IMPLEMENTED;
            var s = r.ERR_MULTIPLE_CALLBACK;
            var a = r.ERR_TRANSFORM_ALREADY_TRANSFORMING;
            var o = r.ERR_TRANSFORM_WITH_LENGTH_0;
            var h = n(88101);
            function l(e, t) {
              var n = this._transformState;
              n.transforming = false;
              var r = n.writecb;
              if (r === null) {
                return this.emit("error", new s());
              }
              n.writechunk = null;
              n.writecb = null;
              if (t != null) {
                this.push(t);
              }
              r(e);
              var i = this._readableState;
              i.reading = false;
              if (i.needReadable || i.length < i.highWaterMark) {
                this._read(i.highWaterMark);
              }
            }
            function d(e) {
              if (!(this instanceof d)) {
                return new d(e);
              }
              h.call(this, e);
              this._transformState = {
                afterTransform: l.bind(this),
                needTransform: false,
                transforming: false,
                writecb: null,
                writechunk: null,
                writeencoding: null
              };
              this._readableState.needReadable = true;
              this._readableState.sync = false;
              if (e) {
                if (typeof e.transform == "function") {
                  this._transform = e.transform;
                }
                if (typeof e.flush == "function") {
                  this._flush = e.flush;
                }
              }
              this.on("prefinish", c);
            }
            function c() {
              var e = this;
              if (typeof this._flush != "function" || this._readableState.destroyed) {
                u(this, null, null);
              } else {
                this._flush(function (t, n) {
                  u(e, t, n);
                });
              }
            }
            function u(e, t, n) {
              if (t) {
                return e.emit("error", t);
              }
              if (n != null) {
                e.push(n);
              }
              if (e._writableState.length) {
                throw new o();
              }
              if (e._transformState.transforming) {
                throw new a();
              }
              return e.push(null);
            }
            n(56698)(d, h);
            d.prototype.push = function (e, t) {
              this._transformState.needTransform = false;
              return h.prototype.push.call(this, e, t);
            };
            d.prototype._transform = function (e, t, n) {
              n(new i("_transform()"));
            };
            d.prototype._write = function (e, t, n) {
              var r = this._transformState;
              r.writecb = n;
              r.writechunk = e;
              r.writeencoding = t;
              if (!r.transforming) {
                var i = this._readableState;
                if (r.needTransform || i.needReadable || i.length < i.highWaterMark) {
                  this._read(i.highWaterMark);
                }
              }
            };
            d.prototype._read = function (e) {
              var t = this._transformState;
              if (t.writechunk === null || t.transforming) {
                t.needTransform = true;
              } else {
                t.transforming = true;
                this._transform(t.writechunk, t.writeencoding, t.afterTransform);
              }
            };
            d.prototype._destroy = function (e, t) {
              h.prototype._destroy.call(this, e, function (e) {
                t(e);
              });
            };
          }
    });
})();
