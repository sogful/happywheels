(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        67526(e, t) {
            "use strict";
        
            t.toByteArray = function (e) {
              var t;
              var n;
              var s = function (e) {
                var t = e.length;
                if (t % 4 > 0) {
                  throw new Error("Invalid string. Length must be a multiple of 4");
                }
                var n = e.indexOf("=");
                if (n === -1) {
                  n = t;
                }
                return [n, n === t ? 0 : 4 - n % 4];
              }(e);
              var a = s[0];
              var o = s[1];
              var h = new i(function (e, t, n) {
                return (t + n) * 3 / 4 - n;
              }(0, a, o));
              var l = 0;
              var d = o > 0 ? a - 4 : a;
              for (n = 0; n < d; n += 4) {
                t = r[e.charCodeAt(n)] << 18 | r[e.charCodeAt(n + 1)] << 12 | r[e.charCodeAt(n + 2)] << 6 | r[e.charCodeAt(n + 3)];
                h[l++] = t >> 16 & 255;
                h[l++] = t >> 8 & 255;
                h[l++] = t & 255;
              }
              if (o === 2) {
                t = r[e.charCodeAt(n)] << 2 | r[e.charCodeAt(n + 1)] >> 4;
                h[l++] = t & 255;
              }
              if (o === 1) {
                t = r[e.charCodeAt(n)] << 10 | r[e.charCodeAt(n + 1)] << 4 | r[e.charCodeAt(n + 2)] >> 2;
                h[l++] = t >> 8 & 255;
                h[l++] = t & 255;
              }
              return h;
            };
            t.fromByteArray = function (e) {
              var t;
              var r = e.length;
              var i = r % 3;
              var s = [];
              for (var a = 16383, o = 0, l = r - i; o < l; o += a) {
                s.push(h(e, o, o + a > l ? l : o + a));
              }
              if (i === 1) {
                t = e[r - 1];
                s.push(n[t >> 2] + n[t << 4 & 63] + "==");
              } else if (i === 2) {
                t = (e[r - 2] << 8) + e[r - 1];
                s.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "=");
              }
              return s.join("");
            };
            var n = [];
            var r = [];
            var i = typeof Uint8Array != "undefined" ? Uint8Array : Array;
            var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            for (var a = 0; a < 64; ++a) {
              n[a] = s[a];
              r[s.charCodeAt(a)] = a;
            }
            function o(e) {
              return n[e >> 18 & 63] + n[e >> 12 & 63] + n[e >> 6 & 63] + n[e & 63];
            }
            function h(e, t, n) {
              var r;
              var i = [];
              for (var s = t; s < n; s += 3) {
                r = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (e[s + 2] & 255);
                i.push(o(r));
              }
              return i.join("");
            }
            r["-".charCodeAt(0)] = 62;
            r["_".charCodeAt(0)] = 63;
          },
        5974(e, t, n) {
            "use strict";
        
            var r = n(65606);
            var i = n(94148);
            var s = n(44442);
            var a = n(58411);
            var o = n(71447);
            var h = n(19681);
            for (var l in h) {
              t[l] = h[l];
            }
            function d(e) {
              if (typeof e != "number" || e < t.DEFLATE || e > t.UNZIP) {
                throw new TypeError("Bad argument");
              }
              this.dictionary = null;
              this.err = 0;
              this.flush = 0;
              this.init_done = false;
              this.level = 0;
              this.memLevel = 0;
              this.mode = e;
              this.strategy = 0;
              this.windowBits = 0;
              this.write_in_progress = false;
              this.pending_close = false;
              this.gzip_id_bytes_read = 0;
            }
            t.NONE = 0;
            t.DEFLATE = 1;
            t.INFLATE = 2;
            t.GZIP = 3;
            t.GUNZIP = 4;
            t.DEFLATERAW = 5;
            t.INFLATERAW = 6;
            t.UNZIP = 7;
            d.prototype.close = function () {
              if (this.write_in_progress) {
                this.pending_close = true;
              } else {
                this.pending_close = false;
                i(this.init_done, "close before init");
                i(this.mode <= t.UNZIP);
                if (this.mode === t.DEFLATE || this.mode === t.GZIP || this.mode === t.DEFLATERAW) {
                  a.deflateEnd(this.strm);
                } else if (this.mode === t.INFLATE || this.mode === t.GUNZIP || this.mode === t.INFLATERAW || this.mode === t.UNZIP) {
                  o.inflateEnd(this.strm);
                }
                this.mode = t.NONE;
                this.dictionary = null;
              }
            };
            d.prototype.write = function (e, t, n, r, i, s, a) {
              return this._write(true, e, t, n, r, i, s, a);
            };
            d.prototype.writeSync = function (e, t, n, r, i, s, a) {
              return this._write(false, e, t, n, r, i, s, a);
            };
            d.prototype._write = function (e, n, s, a, o, h, l, d) {
              i.equal(arguments.length, 8);
              i(this.init_done, "write before init");
              i(this.mode !== t.NONE, "already finalized");
              i.equal(false, this.write_in_progress, "write already in progress");
              i.equal(false, this.pending_close, "close is pending");
              this.write_in_progress = true;
              i.equal(false, n === undefined, "must provide flush value");
              this.write_in_progress = true;
              if (n !== t.Z_NO_FLUSH && n !== t.Z_PARTIAL_FLUSH && n !== t.Z_SYNC_FLUSH && n !== t.Z_FULL_FLUSH && n !== t.Z_FINISH && n !== t.Z_BLOCK) {
                throw new Error("Invalid flush value");
              }
              if (s == null) {
                s = Buffer.alloc(0);
                o = 0;
                a = 0;
              }
              this.strm.avail_in = o;
              this.strm.input = s;
              this.strm.next_in = a;
              this.strm.avail_out = d;
              this.strm.output = h;
              this.strm.next_out = l;
              this.flush = n;
              if (!e) {
                this._process();
                if (this._checkError()) {
                  return this._afterSync();
                } else {
                  return undefined;
                }
              }
              var c = this;
              r.nextTick(function () {
                c._process();
                c._after();
              });
              return this;
            };
            d.prototype._afterSync = function () {
              var e = this.strm.avail_out;
              var t = this.strm.avail_in;
              this.write_in_progress = false;
              return [t, e];
            };
            d.prototype._process = function () {
              var e = null;
              switch (this.mode) {
                case t.DEFLATE:
                case t.GZIP:
                case t.DEFLATERAW:
                  this.err = a.deflate(this.strm, this.flush);
                  break;
                case t.UNZIP:
                  if (this.strm.avail_in > 0) {
                    e = this.strm.next_in;
                  }
                  switch (this.gzip_id_bytes_read) {
                    case 0:
                      if (e === null) {
                        break;
                      }
                      if (this.strm.input[e] !== 31) {
                        this.mode = t.INFLATE;
                        break;
                      }
                      this.gzip_id_bytes_read = 1;
                      e++;
                      if (this.strm.avail_in === 1) {
                        break;
                      }
                    case 1:
                      if (e === null) {
                        break;
                      }
                      if (this.strm.input[e] === 139) {
                        this.gzip_id_bytes_read = 2;
                        this.mode = t.GUNZIP;
                      } else {
                        this.mode = t.INFLATE;
                      }
                      break;
                    default:
                      throw new Error("invalid number of gzip magic number bytes read");
                  }
                case t.INFLATE:
                case t.GUNZIP:
                case t.INFLATERAW:
                  this.err = o.inflate(this.strm, this.flush);
                  if (this.err === t.Z_NEED_DICT && this.dictionary) {
                    this.err = o.inflateSetDictionary(this.strm, this.dictionary);
                    if (this.err === t.Z_OK) {
                      this.err = o.inflate(this.strm, this.flush);
                    } else if (this.err === t.Z_DATA_ERROR) {
                      this.err = t.Z_NEED_DICT;
                    }
                  }
                  while (this.strm.avail_in > 0 && this.mode === t.GUNZIP && this.err === t.Z_STREAM_END && this.strm.next_in[0] !== 0) {
                    this.reset();
                    this.err = o.inflate(this.strm, this.flush);
                  }
                  break;
                default:
                  throw new Error("Unknown mode " + this.mode);
              }
            };
            d.prototype._checkError = function () {
              switch (this.err) {
                case t.Z_OK:
                case t.Z_BUF_ERROR:
                  if (this.strm.avail_out !== 0 && this.flush === t.Z_FINISH) {
                    this._error("unexpected end of file");
                    return false;
                  }
                  break;
                case t.Z_STREAM_END:
                  break;
                case t.Z_NEED_DICT:
                  if (this.dictionary == null) {
                    this._error("Missing dictionary");
                  } else {
                    this._error("Bad dictionary");
                  }
                  return false;
                default:
                  this._error("Zlib error");
                  return false;
              }
              return true;
            };
            d.prototype._after = function () {
              if (this._checkError()) {
                var e = this.strm.avail_out;
                var t = this.strm.avail_in;
                this.write_in_progress = false;
                this.callback(t, e);
                if (this.pending_close) {
                  this.close();
                }
              }
            };
            d.prototype._error = function (e) {
              if (this.strm.msg) {
                e = this.strm.msg;
              }
              this.onerror(e, this.err);
              this.write_in_progress = false;
              if (this.pending_close) {
                this.close();
              }
            };
            d.prototype.init = function (e, n, r, s, a) {
              i(arguments.length === 4 || arguments.length === 5, "init(windowBits, level, memLevel, strategy, [dictionary])");
              i(e >= 8 && e <= 15, "invalid windowBits");
              i(n >= -1 && n <= 9, "invalid compression level");
              i(r >= 1 && r <= 9, "invalid memlevel");
              i(s === t.Z_FILTERED || s === t.Z_HUFFMAN_ONLY || s === t.Z_RLE || s === t.Z_FIXED || s === t.Z_DEFAULT_STRATEGY, "invalid strategy");
              this._init(n, e, r, s, a);
              this._setDictionary();
            };
            d.prototype.params = function () {
              throw new Error("deflateParams Not supported");
            };
            d.prototype.reset = function () {
              this._reset();
              this._setDictionary();
            };
            d.prototype._init = function (e, n, r, i, h) {
              this.level = e;
              this.windowBits = n;
              this.memLevel = r;
              this.strategy = i;
              this.flush = t.Z_NO_FLUSH;
              this.err = t.Z_OK;
              if (this.mode === t.GZIP || this.mode === t.GUNZIP) {
                this.windowBits += 16;
              }
              if (this.mode === t.UNZIP) {
                this.windowBits += 32;
              }
              if (this.mode === t.DEFLATERAW || this.mode === t.INFLATERAW) {
                this.windowBits = this.windowBits * -1;
              }
              this.strm = new s();
              switch (this.mode) {
                case t.DEFLATE:
                case t.GZIP:
                case t.DEFLATERAW:
                  this.err = a.deflateInit2(this.strm, this.level, t.Z_DEFLATED, this.windowBits, this.memLevel, this.strategy);
                  break;
                case t.INFLATE:
                case t.GUNZIP:
                case t.INFLATERAW:
                case t.UNZIP:
                  this.err = o.inflateInit2(this.strm, this.windowBits);
                  break;
                default:
                  throw new Error("Unknown mode " + this.mode);
              }
              if (this.err !== t.Z_OK) {
                this._error("Init error");
              }
              this.dictionary = h;
              this.write_in_progress = false;
              this.init_done = true;
            };
            d.prototype._setDictionary = function () {
              if (this.dictionary != null) {
                this.err = t.Z_OK;
                switch (this.mode) {
                  case t.DEFLATE:
                  case t.DEFLATERAW:
                    this.err = a.deflateSetDictionary(this.strm, this.dictionary);
                }
                if (this.err !== t.Z_OK) {
                  this._error("Failed to set dictionary");
                }
              }
            };
            d.prototype._reset = function () {
              this.err = t.Z_OK;
              switch (this.mode) {
                case t.DEFLATE:
                case t.DEFLATERAW:
                case t.GZIP:
                  this.err = a.deflateReset(this.strm);
                  break;
                case t.INFLATE:
                case t.INFLATERAW:
                case t.GUNZIP:
                  this.err = o.inflateReset(this.strm);
              }
              if (this.err !== t.Z_OK) {
                this._error("Failed to reset stream");
              }
            };
            t.Zlib = d;
          },
        78559(e, t, n) {
            "use strict";
        
            var r = n(65606);
            var i = n(48287).Buffer;
            var s = n(88310).Transform;
            var a = n(5974);
            var o = n(40537);
            var h = n(94148).ok;
            var l = n(48287).kMaxLength;
            var d = "Cannot create final Buffer. It would be larger than 0x" + l.toString(16) + " bytes";
            a.Z_MIN_WINDOWBITS = 8;
            a.Z_MAX_WINDOWBITS = 15;
            a.Z_DEFAULT_WINDOWBITS = 15;
            a.Z_MIN_CHUNK = 64;
            a.Z_MAX_CHUNK = Infinity;
            a.Z_DEFAULT_CHUNK = 16384;
            a.Z_MIN_MEMLEVEL = 1;
            a.Z_MAX_MEMLEVEL = 9;
            a.Z_DEFAULT_MEMLEVEL = 8;
            a.Z_MIN_LEVEL = -1;
            a.Z_MAX_LEVEL = 9;
            a.Z_DEFAULT_LEVEL = a.Z_DEFAULT_COMPRESSION;
            for (var c = Object.keys(a), u = 0; u < c.length; u++) {
              var p = c[u];
              if (p.match(/^Z/)) {
                Object.defineProperty(t, p, {
                  enumerable: true,
                  value: a[p],
                  writable: false
                });
              }
            }
            var m = {
              Z_OK: a.Z_OK,
              Z_STREAM_END: a.Z_STREAM_END,
              Z_NEED_DICT: a.Z_NEED_DICT,
              Z_ERRNO: a.Z_ERRNO,
              Z_STREAM_ERROR: a.Z_STREAM_ERROR,
              Z_DATA_ERROR: a.Z_DATA_ERROR,
              Z_MEM_ERROR: a.Z_MEM_ERROR,
              Z_BUF_ERROR: a.Z_BUF_ERROR,
              Z_VERSION_ERROR: a.Z_VERSION_ERROR
            };
            for (var f = Object.keys(m), _ = 0; _ < f.length; _++) {
              var v = f[_];
              m[m[v]] = v;
            }
            function y(e, t, n) {
              var r = [];
              var s = 0;
              function a() {
                for (var t; (t = e.read()) !== null;) {
                  r.push(t);
                  s += t.length;
                }
                e.once("readable", a);
              }
              function o() {
                var t;
                var a = null;
                if (s >= l) {
                  a = new RangeError(d);
                } else {
                  t = i.concat(r, s);
                }
                r = [];
                e.close();
                n(a, t);
              }
              e.on("error", function (t) {
                e.removeListener("end", o);
                e.removeListener("readable", a);
                n(t);
              });
              e.on("end", o);
              e.end(t);
              a();
            }
            function g(e, t) {
              if (typeof t == "string") {
                t = i.from(t);
              }
              if (!i.isBuffer(t)) {
                throw new TypeError("Not a string or buffer");
              }
              var n = e._finishFlushFlag;
              return e._processChunk(t, n);
            }
            function w(e) {
              if (!(this instanceof w)) {
                return new w(e);
              }
              O.call(this, e, a.DEFLATE);
            }
            function x(e) {
              if (!(this instanceof x)) {
                return new x(e);
              }
              O.call(this, e, a.INFLATE);
            }
            function b(e) {
              if (!(this instanceof b)) {
                return new b(e);
              }
              O.call(this, e, a.GZIP);
            }
            function T(e) {
              if (!(this instanceof T)) {
                return new T(e);
              }
              O.call(this, e, a.GUNZIP);
            }
            function A(e) {
              if (!(this instanceof A)) {
                return new A(e);
              }
              O.call(this, e, a.DEFLATERAW);
            }
            function C(e) {
              if (!(this instanceof C)) {
                return new C(e);
              }
              O.call(this, e, a.INFLATERAW);
            }
            function S(e) {
              if (!(this instanceof S)) {
                return new S(e);
              }
              O.call(this, e, a.UNZIP);
            }
            function E(e) {
              return e === a.Z_NO_FLUSH || e === a.Z_PARTIAL_FLUSH || e === a.Z_SYNC_FLUSH || e === a.Z_FULL_FLUSH || e === a.Z_FINISH || e === a.Z_BLOCK;
            }
            function O(e, n) {
              var r = this;
              this._opts = e = e || {};
              this._chunkSize = e.chunkSize || t.Z_DEFAULT_CHUNK;
              s.call(this, e);
              if (e.flush && !E(e.flush)) {
                throw new Error("Invalid flush flag: " + e.flush);
              }
              if (e.finishFlush && !E(e.finishFlush)) {
                throw new Error("Invalid flush flag: " + e.finishFlush);
              }
              this._flushFlag = e.flush || a.Z_NO_FLUSH;
              this._finishFlushFlag = e.finishFlush !== undefined ? e.finishFlush : a.Z_FINISH;
              if (e.chunkSize && (e.chunkSize < t.Z_MIN_CHUNK || e.chunkSize > t.Z_MAX_CHUNK)) {
                throw new Error("Invalid chunk size: " + e.chunkSize);
              }
              if (e.windowBits && (e.windowBits < t.Z_MIN_WINDOWBITS || e.windowBits > t.Z_MAX_WINDOWBITS)) {
                throw new Error("Invalid windowBits: " + e.windowBits);
              }
              if (e.level && (e.level < t.Z_MIN_LEVEL || e.level > t.Z_MAX_LEVEL)) {
                throw new Error("Invalid compression level: " + e.level);
              }
              if (e.memLevel && (e.memLevel < t.Z_MIN_MEMLEVEL || e.memLevel > t.Z_MAX_MEMLEVEL)) {
                throw new Error("Invalid memLevel: " + e.memLevel);
              }
              if (e.strategy && e.strategy != t.Z_FILTERED && e.strategy != t.Z_HUFFMAN_ONLY && e.strategy != t.Z_RLE && e.strategy != t.Z_FIXED && e.strategy != t.Z_DEFAULT_STRATEGY) {
                throw new Error("Invalid strategy: " + e.strategy);
              }
              if (e.dictionary && !i.isBuffer(e.dictionary)) {
                throw new Error("Invalid dictionary: it should be a Buffer instance");
              }
              this._handle = new a.Zlib(n);
              var o = this;
              this._hadError = false;
              this._handle.onerror = function (e, n) {
                k(o);
                o._hadError = true;
                var r = new Error(e);
                r.errno = n;
                r.code = t.codes[n];
                o.emit("error", r);
              };
              var h = t.Z_DEFAULT_COMPRESSION;
              if (typeof e.level == "number") {
                h = e.level;
              }
              var l = t.Z_DEFAULT_STRATEGY;
              if (typeof e.strategy == "number") {
                l = e.strategy;
              }
              this._handle.init(e.windowBits || t.Z_DEFAULT_WINDOWBITS, h, e.memLevel || t.Z_DEFAULT_MEMLEVEL, l, e.dictionary);
              this._buffer = i.allocUnsafe(this._chunkSize);
              this._offset = 0;
              this._level = h;
              this._strategy = l;
              this.once("end", this.close);
              Object.defineProperty(this, "_closed", {
                get: function () {
                  return !r._handle;
                },
                configurable: true,
                enumerable: true
              });
            }
            function k(e, t) {
              if (t) {
                r.nextTick(t);
              }
              if (e._handle) {
                e._handle.close();
                e._handle = null;
              }
            }
            function P(e) {
              e.emit("close");
            }
            Object.defineProperty(t, "codes", {
              enumerable: true,
              value: Object.freeze(m),
              writable: false
            });
            t.Deflate = w;
            t.Inflate = x;
            t.Gzip = b;
            t.Gunzip = T;
            t.DeflateRaw = A;
            t.InflateRaw = C;
            t.Unzip = S;
            t.createDeflate = function (e) {
              return new w(e);
            };
            t.createInflate = function (e) {
              return new x(e);
            };
            t.createDeflateRaw = function (e) {
              return new A(e);
            };
            t.createInflateRaw = function (e) {
              return new C(e);
            };
            t.createGzip = function (e) {
              return new b(e);
            };
            t.createGunzip = function (e) {
              return new T(e);
            };
            t.createUnzip = function (e) {
              return new S(e);
            };
            t.deflate = function (e, t, n) {
              if (typeof t == "function") {
                n = t;
                t = {};
              }
              return y(new w(t), e, n);
            };
            t.deflateSync = function (e, t) {
              return g(new w(t), e);
            };
            t.gzip = function (e, t, n) {
              if (typeof t == "function") {
                n = t;
                t = {};
              }
              return y(new b(t), e, n);
            };
            t.gzipSync = function (e, t) {
              return g(new b(t), e);
            };
            t.deflateRaw = function (e, t, n) {
              if (typeof t == "function") {
                n = t;
                t = {};
              }
              return y(new A(t), e, n);
            };
            t.deflateRawSync = function (e, t) {
              return g(new A(t), e);
            };
            t.unzip = function (e, t, n) {
              if (typeof t == "function") {
                n = t;
                t = {};
              }
              return y(new S(t), e, n);
            };
            t.unzipSync = function (e, t) {
              return g(new S(t), e);
            };
            t.inflate = function (e, t, n) {
              if (typeof t == "function") {
                n = t;
                t = {};
              }
              return y(new x(t), e, n);
            };
            t.inflateSync = function (e, t) {
              return g(new x(t), e);
            };
            t.gunzip = function (e, t, n) {
              if (typeof t == "function") {
                n = t;
                t = {};
              }
              return y(new T(t), e, n);
            };
            t.gunzipSync = function (e, t) {
              return g(new T(t), e);
            };
            t.inflateRaw = function (e, t, n) {
              if (typeof t == "function") {
                n = t;
                t = {};
              }
              return y(new C(t), e, n);
            };
            t.inflateRawSync = function (e, t) {
              return g(new C(t), e);
            };
            o.inherits(O, s);
            O.prototype.params = function (e, n, i) {
              if (e < t.Z_MIN_LEVEL || e > t.Z_MAX_LEVEL) {
                throw new RangeError("Invalid compression level: " + e);
              }
              if (n != t.Z_FILTERED && n != t.Z_HUFFMAN_ONLY && n != t.Z_RLE && n != t.Z_FIXED && n != t.Z_DEFAULT_STRATEGY) {
                throw new TypeError("Invalid strategy: " + n);
              }
              if (this._level !== e || this._strategy !== n) {
                var s = this;
                this.flush(a.Z_SYNC_FLUSH, function () {
                  h(s._handle, "zlib binding closed");
                  s._handle.params(e, n);
                  if (!s._hadError) {
                    s._level = e;
                    s._strategy = n;
                    if (i) {
                      i();
                    }
                  }
                });
              } else {
                r.nextTick(i);
              }
            };
            O.prototype.reset = function () {
              h(this._handle, "zlib binding closed");
              return this._handle.reset();
            };
            O.prototype._flush = function (e) {
              this._transform(i.alloc(0), "", e);
            };
            O.prototype.flush = function (e, t) {
              var n = this;
              var s = this._writableState;
              if (typeof e == "function" || e === undefined && !t) {
                t = e;
                e = a.Z_FULL_FLUSH;
              }
              if (s.ended) {
                if (t) {
                  r.nextTick(t);
                }
              } else if (s.ending) {
                if (t) {
                  this.once("end", t);
                }
              } else if (s.needDrain) {
                if (t) {
                  this.once("drain", function () {
                    return n.flush(e, t);
                  });
                }
              } else {
                this._flushFlag = e;
                this.write(i.alloc(0), "", t);
              }
            };
            O.prototype.close = function (e) {
              k(this, e);
              r.nextTick(P, this);
            };
            O.prototype._transform = function (e, t, n) {
              var r;
              var s = this._writableState;
              var o = (s.ending || s.ended) && (!e || s.length === e.length);
              if (e === null || i.isBuffer(e)) {
                if (this._handle) {
                  if (o) {
                    r = this._finishFlushFlag;
                  } else {
                    r = this._flushFlag;
                    if (e.length >= s.length) {
                      this._flushFlag = this._opts.flush || a.Z_NO_FLUSH;
                    }
                  }
                  this._processChunk(e, r, n);
                  return;
                } else {
                  return n(new Error("zlib binding closed"));
                }
              } else {
                return n(new Error("invalid input"));
              }
            };
            O.prototype._processChunk = function (e, t, n) {
              var r = e && e.length;
              var s = this._chunkSize - this._offset;
              var a = 0;
              var o = this;
              var c = typeof n == "function";
              if (!c) {
                var u;
                var p = [];
                var m = 0;
                this.on("error", function (e) {
                  u = e;
                });
                h(this._handle, "zlib binding closed");
                do {
                  var f = this._handle.writeSync(t, e, a, r, this._buffer, this._offset, s);
                } while (!this._hadError && y(f[0], f[1]));
                if (this._hadError) {
                  throw u;
                }
                if (m >= l) {
                  k(this);
                  throw new RangeError(d);
                }
                var _ = i.concat(p, m);
                k(this);
                return _;
              }
              h(this._handle, "zlib binding closed");
              var v = this._handle.write(t, e, a, r, this._buffer, this._offset, s);
              function y(l, d) {
                if (this) {
                  this.buffer = null;
                  this.callback = null;
                }
                if (!o._hadError) {
                  var u = s - d;
                  h(u >= 0, "have should not go down");
                  if (u > 0) {
                    var f = o._buffer.slice(o._offset, o._offset + u);
                    o._offset += u;
                    if (c) {
                      o.push(f);
                    } else {
                      p.push(f);
                      m += f.length;
                    }
                  }
                  if (d === 0 || o._offset >= o._chunkSize) {
                    s = o._chunkSize;
                    o._offset = 0;
                    o._buffer = i.allocUnsafe(o._chunkSize);
                  }
                  if (d === 0) {
                    a += r - l;
                    r = l;
                    if (!c) {
                      return true;
                    }
                    var _ = o._handle.write(t, e, a, r, o._buffer, o._offset, o._chunkSize);
                    _.callback = y;
                    _.buffer = e;
                    return;
                  }
                  if (!c) {
                    return false;
                  }
                  n();
                }
              }
              v.buffer = e;
              v.callback = y;
            };
            o.inherits(w, O);
            o.inherits(x, O);
            o.inherits(b, O);
            o.inherits(T, O);
            o.inherits(A, O);
            o.inherits(C, O);
            o.inherits(S, O);
          }
    });
})();
