(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        48287(e, t, n) {
            "use strict";
        
            const r = n(67526);
            const i = n(251);
            const s = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
            t.Buffer = h;
            t.SlowBuffer = function (e) {
              if (+e != e) {
                e = 0;
              }
              return h.alloc(+e);
            };
            t.INSPECT_MAX_BYTES = 50;
            const a = 2147483647;
            function o(e) {
              if (e > a) {
                throw new RangeError("The value \"" + e + "\" is invalid for option \"size\"");
              }
              const t = new Uint8Array(e);
              Object.setPrototypeOf(t, h.prototype);
              return t;
            }
            function h(e, t, n) {
              if (typeof e == "number") {
                if (typeof t == "string") {
                  throw new TypeError("The \"string\" argument must be of type string. Received type number");
                }
                return c(e);
              }
              return l(e, t, n);
            }
            function l(e, t, n) {
              if (typeof e == "string") {
                return function (e, t) {
                  if (typeof t != "string" || t === "") {
                    t = "utf8";
                  }
                  if (!h.isEncoding(t)) {
                    throw new TypeError("Unknown encoding: " + t);
                  }
                  const n = f(e, t) | 0;
                  let r = o(n);
                  const i = r.write(e, t);
                  if (i !== n) {
                    r = r.slice(0, i);
                  }
                  return r;
                }(e, t);
              }
              if (ArrayBuffer.isView(e)) {
                return function (e) {
                  if (J(e, Uint8Array)) {
                    const t = new Uint8Array(e);
                    return p(t.buffer, t.byteOffset, t.byteLength);
                  }
                  return u(e);
                }(e);
              }
              if (e == null) {
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
              }
              if (J(e, ArrayBuffer) || e && J(e.buffer, ArrayBuffer)) {
                return p(e, t, n);
              }
              if (typeof SharedArrayBuffer != "undefined" && (J(e, SharedArrayBuffer) || e && J(e.buffer, SharedArrayBuffer))) {
                return p(e, t, n);
              }
              if (typeof e == "number") {
                throw new TypeError("The \"value\" argument must not be of type number. Received type number");
              }
              const r = e.valueOf && e.valueOf();
              if (r != null && r !== e) {
                return h.from(r, t, n);
              }
              const i = function (e) {
                if (h.isBuffer(e)) {
                  const t = m(e.length) | 0;
                  const n = o(t);
                  if (n.length !== 0) {
                    e.copy(n, 0, 0, t);
                  }
                  return n;
                }
                if (e.length !== undefined) {
                  if (typeof e.length != "number" || K(e.length)) {
                    return o(0);
                  } else {
                    return u(e);
                  }
                } else if (e.type === "Buffer" && Array.isArray(e.data)) {
                  return u(e.data);
                } else {
                  return undefined;
                }
              }(e);
              if (i) {
                return i;
              }
              if (typeof Symbol != "undefined" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] == "function") {
                return h.from(e[Symbol.toPrimitive]("string"), t, n);
              }
              throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
            }
            function d(e) {
              if (typeof e != "number") {
                throw new TypeError("\"size\" argument must be of type number");
              }
              if (e < 0) {
                throw new RangeError("The value \"" + e + "\" is invalid for option \"size\"");
              }
            }
            function c(e) {
              d(e);
              return o(e < 0 ? 0 : m(e) | 0);
            }
            function u(e) {
              const t = e.length < 0 ? 0 : m(e.length) | 0;
              const n = o(t);
              for (let r = 0; r < t; r += 1) {
                n[r] = e[r] & 255;
              }
              return n;
            }
            function p(e, t, n) {
              if (t < 0 || e.byteLength < t) {
                throw new RangeError("\"offset\" is outside of buffer bounds");
              }
              if (e.byteLength < t + (n || 0)) {
                throw new RangeError("\"length\" is outside of buffer bounds");
              }
              let r;
              r = t === undefined && n === undefined ? new Uint8Array(e) : n === undefined ? new Uint8Array(e, t) : new Uint8Array(e, t, n);
              Object.setPrototypeOf(r, h.prototype);
              return r;
            }
            function m(e) {
              if (e >= a) {
                throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a.toString(16) + " bytes");
              }
              return e | 0;
            }
            function f(e, t) {
              if (h.isBuffer(e)) {
                return e.length;
              }
              if (ArrayBuffer.isView(e) || J(e, ArrayBuffer)) {
                return e.byteLength;
              }
              if (typeof e != "string") {
                throw new TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof e);
              }
              const n = e.length;
              const r = arguments.length > 2 && arguments[2] === true;
              if (!r && n === 0) {
                return 0;
              }
              let i = false;
              while (true) {
                switch (t) {
                  case "ascii":
                  case "latin1":
                  case "binary":
                    return n;
                  case "utf8":
                  case "utf-8":
                    return X(e).length;
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return n * 2;
                  case "hex":
                    return n >>> 1;
                  case "base64":
                    return Y(e).length;
                  default:
                    if (i) {
                      if (r) {
                        return -1;
                      } else {
                        return X(e).length;
                      }
                    }
                    t = ("" + t).toLowerCase();
                    i = true;
                }
              }
            }
            function _(e, t, n) {
              let r = false;
              if (t === undefined || t < 0) {
                t = 0;
              }
              if (t > this.length) {
                return "";
              }
              if (n === undefined || n > this.length) {
                n = this.length;
              }
              if (n <= 0) {
                return "";
              }
              if ((n >>>= 0) <= (t >>>= 0)) {
                return "";
              }
              for (e ||= "utf8";;) {
                switch (e) {
                  case "hex":
                    return P(this, t, n);
                  case "utf8":
                  case "utf-8":
                    return S(this, t, n);
                  case "ascii":
                    return O(this, t, n);
                  case "latin1":
                  case "binary":
                    return k(this, t, n);
                  case "base64":
                    return C(this, t, n);
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return M(this, t, n);
                  default:
                    if (r) {
                      throw new TypeError("Unknown encoding: " + e);
                    }
                    e = (e + "").toLowerCase();
                    r = true;
                }
              }
            }
            function v(e, t, n) {
              const r = e[t];
              e[t] = e[n];
              e[n] = r;
            }
            function y(e, t, n, r, i) {
              if (e.length === 0) {
                return -1;
              }
              if (typeof n == "string") {
                r = n;
                n = 0;
              } else if (n > 2147483647) {
                n = 2147483647;
              } else if (n < -2147483648) {
                n = -2147483648;
              }
              if (K(n = +n)) {
                n = i ? 0 : e.length - 1;
              }
              if (n < 0) {
                n = e.length + n;
              }
              if (n >= e.length) {
                if (i) {
                  return -1;
                }
                n = e.length - 1;
              } else if (n < 0) {
                if (!i) {
                  return -1;
                }
                n = 0;
              }
              if (typeof t == "string") {
                t = h.from(t, r);
              }
              if (h.isBuffer(t)) {
                if (t.length === 0) {
                  return -1;
                } else {
                  return g(e, t, n, r, i);
                }
              }
              if (typeof t == "number") {
                t &= 255;
                if (typeof Uint8Array.prototype.indexOf == "function") {
                  if (i) {
                    return Uint8Array.prototype.indexOf.call(e, t, n);
                  } else {
                    return Uint8Array.prototype.lastIndexOf.call(e, t, n);
                  }
                } else {
                  return g(e, [t], n, r, i);
                }
              }
              throw new TypeError("val must be string, number or Buffer");
            }
            function g(e, t, n, r, i) {
              let s;
              let a = 1;
              let o = e.length;
              let h = t.length;
              if (r !== undefined && ((r = String(r).toLowerCase()) === "ucs2" || r === "ucs-2" || r === "utf16le" || r === "utf-16le")) {
                if (e.length < 2 || t.length < 2) {
                  return -1;
                }
                a = 2;
                o /= 2;
                h /= 2;
                n /= 2;
              }
              function l(e, t) {
                if (a === 1) {
                  return e[t];
                } else {
                  return e.readUInt16BE(t * a);
                }
              }
              if (i) {
                let r = -1;
                for (s = n; s < o; s++) {
                  if (l(e, s) === l(t, r === -1 ? 0 : s - r)) {
                    if (r === -1) {
                      r = s;
                    }
                    if (s - r + 1 === h) {
                      return r * a;
                    }
                  } else {
                    if (r !== -1) {
                      s -= s - r;
                    }
                    r = -1;
                  }
                }
              } else {
                if (n + h > o) {
                  n = o - h;
                }
                s = n;
                for (; s >= 0; s--) {
                  let n = true;
                  for (let r = 0; r < h; r++) {
                    if (l(e, s + r) !== l(t, r)) {
                      n = false;
                      break;
                    }
                  }
                  if (n) {
                    return s;
                  }
                }
              }
              return -1;
            }
            function w(e, t, n, r) {
              n = Number(n) || 0;
              const i = e.length - n;
              if (r) {
                if ((r = Number(r)) > i) {
                  r = i;
                }
              } else {
                r = i;
              }
              const s = t.length;
              let a;
              if (r > s / 2) {
                r = s / 2;
              }
              a = 0;
              for (; a < r; ++a) {
                const r = parseInt(t.substr(a * 2, 2), 16);
                if (K(r)) {
                  return a;
                }
                e[n + a] = r;
              }
              return a;
            }
            function x(e, t, n, r) {
              return q(X(t, e.length - n), e, n, r);
            }
            function b(e, t, n, r) {
              return q(function (e) {
                const t = [];
                for (let n = 0; n < e.length; ++n) {
                  t.push(e.charCodeAt(n) & 255);
                }
                return t;
              }(t), e, n, r);
            }
            function T(e, t, n, r) {
              return q(Y(t), e, n, r);
            }
            function A(e, t, n, r) {
              return q(function (e, t) {
                let n;
                let r;
                let i;
                const s = [];
                for (let a = 0; a < e.length && !((t -= 2) < 0); ++a) {
                  n = e.charCodeAt(a);
                  r = n >> 8;
                  i = n % 256;
                  s.push(i);
                  s.push(r);
                }
                return s;
              }(t, e.length - n), e, n, r);
            }
            function C(e, t, n) {
              if (t === 0 && n === e.length) {
                return r.fromByteArray(e);
              } else {
                return r.fromByteArray(e.slice(t, n));
              }
            }
            function S(e, t, n) {
              n = Math.min(e.length, n);
              const r = [];
              let i = t;
              while (i < n) {
                const t = e[i];
                let s = null;
                let a = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
                if (i + a <= n) {
                  let n;
                  let r;
                  let o;
                  let h;
                  switch (a) {
                    case 1:
                      if (t < 128) {
                        s = t;
                      }
                      break;
                    case 2:
                      n = e[i + 1];
                      if ((n & 192) == 128) {
                        h = (t & 31) << 6 | n & 63;
                        if (h > 127) {
                          s = h;
                        }
                      }
                      break;
                    case 3:
                      n = e[i + 1];
                      r = e[i + 2];
                      if ((n & 192) == 128 && (r & 192) == 128) {
                        h = (t & 15) << 12 | (n & 63) << 6 | r & 63;
                        if (h > 2047 && (h < 55296 || h > 57343)) {
                          s = h;
                        }
                      }
                      break;
                    case 4:
                      n = e[i + 1];
                      r = e[i + 2];
                      o = e[i + 3];
                      if ((n & 192) == 128 && (r & 192) == 128 && (o & 192) == 128) {
                        h = (t & 15) << 18 | (n & 63) << 12 | (r & 63) << 6 | o & 63;
                        if (h > 65535 && h < 1114112) {
                          s = h;
                        }
                      }
                  }
                }
                if (s === null) {
                  s = 65533;
                  a = 1;
                } else if (s > 65535) {
                  s -= 65536;
                  r.push(s >>> 10 & 1023 | 55296);
                  s = s & 1023 | 56320;
                }
                r.push(s);
                i += a;
              }
              return function (e) {
                const t = e.length;
                if (t <= E) {
                  return String.fromCharCode.apply(String, e);
                }
                let n = "";
                let r = 0;
                while (r < t) {
                  n += String.fromCharCode.apply(String, e.slice(r, r += E));
                }
                return n;
              }(r);
            }
            t.kMaxLength = a;
            h.TYPED_ARRAY_SUPPORT = function () {
              try {
                const e = new Uint8Array(1);
                const t = {
                  foo: function () {
                    return 42;
                  }
                };
                Object.setPrototypeOf(t, Uint8Array.prototype);
                Object.setPrototypeOf(e, t);
                return e.foo() === 42;
              } catch (e) {
                return false;
              }
            }();
            if (!h.TYPED_ARRAY_SUPPORT && typeof console != "undefined") {
              console.error;
            }
            Object.defineProperty(h.prototype, "parent", {
              enumerable: true,
              get: function () {
                if (h.isBuffer(this)) {
                  return this.buffer;
                }
              }
            });
            Object.defineProperty(h.prototype, "offset", {
              enumerable: true,
              get: function () {
                if (h.isBuffer(this)) {
                  return this.byteOffset;
                }
              }
            });
            h.poolSize = 8192;
            h.from = function (e, t, n) {
              return l(e, t, n);
            };
            Object.setPrototypeOf(h.prototype, Uint8Array.prototype);
            Object.setPrototypeOf(h, Uint8Array);
            h.alloc = function (e, t, n) {
              return function (e, t, n) {
                d(e);
                if (e <= 0) {
                  return o(e);
                } else if (t !== undefined) {
                  if (typeof n == "string") {
                    return o(e).fill(t, n);
                  } else {
                    return o(e).fill(t);
                  }
                } else {
                  return o(e);
                }
              }(e, t, n);
            };
            h.allocUnsafe = function (e) {
              return c(e);
            };
            h.allocUnsafeSlow = function (e) {
              return c(e);
            };
            h.isBuffer = function (e) {
              return e != null && e._isBuffer === true && e !== h.prototype;
            };
            h.compare = function (e, t) {
              if (J(e, Uint8Array)) {
                e = h.from(e, e.offset, e.byteLength);
              }
              if (J(t, Uint8Array)) {
                t = h.from(t, t.offset, t.byteLength);
              }
              if (!h.isBuffer(e) || !h.isBuffer(t)) {
                throw new TypeError("The \"buf1\", \"buf2\" arguments must be one of type Buffer or Uint8Array");
              }
              if (e === t) {
                return 0;
              }
              let n = e.length;
              let r = t.length;
              for (let i = 0, s = Math.min(n, r); i < s; ++i) {
                if (e[i] !== t[i]) {
                  n = e[i];
                  r = t[i];
                  break;
                }
              }
              if (n < r) {
                return -1;
              } else if (r < n) {
                return 1;
              } else {
                return 0;
              }
            };
            h.isEncoding = function (e) {
              switch (String(e).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return true;
                default:
                  return false;
              }
            };
            h.concat = function (e, t) {
              if (!Array.isArray(e)) {
                throw new TypeError("\"list\" argument must be an Array of Buffers");
              }
              if (e.length === 0) {
                return h.alloc(0);
              }
              let n;
              if (t === undefined) {
                t = 0;
                n = 0;
                for (; n < e.length; ++n) {
                  t += e[n].length;
                }
              }
              const r = h.allocUnsafe(t);
              let i = 0;
              for (n = 0; n < e.length; ++n) {
                let t = e[n];
                if (J(t, Uint8Array)) {
                  if (i + t.length > r.length) {
                    if (!h.isBuffer(t)) {
                      t = h.from(t);
                    }
                    t.copy(r, i);
                  } else {
                    Uint8Array.prototype.set.call(r, t, i);
                  }
                } else {
                  if (!h.isBuffer(t)) {
                    throw new TypeError("\"list\" argument must be an Array of Buffers");
                  }
                  t.copy(r, i);
                }
                i += t.length;
              }
              return r;
            };
            h.byteLength = f;
            h.prototype._isBuffer = true;
            h.prototype.swap16 = function () {
              const e = this.length;
              if (e % 2 != 0) {
                throw new RangeError("Buffer size must be a multiple of 16-bits");
              }
              for (let t = 0; t < e; t += 2) {
                v(this, t, t + 1);
              }
              return this;
            };
            h.prototype.swap32 = function () {
              const e = this.length;
              if (e % 4 != 0) {
                throw new RangeError("Buffer size must be a multiple of 32-bits");
              }
              for (let t = 0; t < e; t += 4) {
                v(this, t, t + 3);
                v(this, t + 1, t + 2);
              }
              return this;
            };
            h.prototype.swap64 = function () {
              const e = this.length;
              if (e % 8 != 0) {
                throw new RangeError("Buffer size must be a multiple of 64-bits");
              }
              for (let t = 0; t < e; t += 8) {
                v(this, t, t + 7);
                v(this, t + 1, t + 6);
                v(this, t + 2, t + 5);
                v(this, t + 3, t + 4);
              }
              return this;
            };
            h.prototype.toString = function () {
              const e = this.length;
              if (e === 0) {
                return "";
              } else if (arguments.length === 0) {
                return S(this, 0, e);
              } else {
                return _.apply(this, arguments);
              }
            };
            h.prototype.toLocaleString = h.prototype.toString;
            h.prototype.equals = function (e) {
              if (!h.isBuffer(e)) {
                throw new TypeError("Argument must be a Buffer");
              }
              return this === e || h.compare(this, e) === 0;
            };
            h.prototype.inspect = function () {
              let e = "";
              const n = t.INSPECT_MAX_BYTES;
              e = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim();
              if (this.length > n) {
                e += " ... ";
              }
              return "<Buffer " + e + ">";
            };
            if (s) {
              h.prototype[s] = h.prototype.inspect;
            }
            h.prototype.compare = function (e, t, n, r, i) {
              if (J(e, Uint8Array)) {
                e = h.from(e, e.offset, e.byteLength);
              }
              if (!h.isBuffer(e)) {
                throw new TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof e);
              }
              if (t === undefined) {
                t = 0;
              }
              if (n === undefined) {
                n = e ? e.length : 0;
              }
              if (r === undefined) {
                r = 0;
              }
              if (i === undefined) {
                i = this.length;
              }
              if (t < 0 || n > e.length || r < 0 || i > this.length) {
                throw new RangeError("out of range index");
              }
              if (r >= i && t >= n) {
                return 0;
              }
              if (r >= i) {
                return -1;
              }
              if (t >= n) {
                return 1;
              }
              if (this === e) {
                return 0;
              }
              let s = (i >>>= 0) - (r >>>= 0);
              let a = (n >>>= 0) - (t >>>= 0);
              const o = Math.min(s, a);
              const l = this.slice(r, i);
              const d = e.slice(t, n);
              for (let e = 0; e < o; ++e) {
                if (l[e] !== d[e]) {
                  s = l[e];
                  a = d[e];
                  break;
                }
              }
              if (s < a) {
                return -1;
              } else if (a < s) {
                return 1;
              } else {
                return 0;
              }
            };
            h.prototype.includes = function (e, t, n) {
              return this.indexOf(e, t, n) !== -1;
            };
            h.prototype.indexOf = function (e, t, n) {
              return y(this, e, t, n, true);
            };
            h.prototype.lastIndexOf = function (e, t, n) {
              return y(this, e, t, n, false);
            };
            h.prototype.write = function (e, t, n, r) {
              if (t === undefined) {
                r = "utf8";
                n = this.length;
                t = 0;
              } else if (n === undefined && typeof t == "string") {
                r = t;
                n = this.length;
                t = 0;
              } else {
                if (!isFinite(t)) {
                  throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                }
                t >>>= 0;
                if (isFinite(n)) {
                  n >>>= 0;
                  if (r === undefined) {
                    r = "utf8";
                  }
                } else {
                  r = n;
                  n = undefined;
                }
              }
              const i = this.length - t;
              if (n === undefined || n > i) {
                n = i;
              }
              if (e.length > 0 && (n < 0 || t < 0) || t > this.length) {
                throw new RangeError("Attempt to write outside buffer bounds");
              }
              r ||= "utf8";
              let s = false;
              while (true) {
                switch (r) {
                  case "hex":
                    return w(this, e, t, n);
                  case "utf8":
                  case "utf-8":
                    return x(this, e, t, n);
                  case "ascii":
                  case "latin1":
                  case "binary":
                    return b(this, e, t, n);
                  case "base64":
                    return T(this, e, t, n);
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return A(this, e, t, n);
                  default:
                    if (s) {
                      throw new TypeError("Unknown encoding: " + r);
                    }
                    r = ("" + r).toLowerCase();
                    s = true;
                }
              }
            };
            h.prototype.toJSON = function () {
              return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
              };
            };
            const E = 4096;
            function O(e, t, n) {
              let r = "";
              n = Math.min(e.length, n);
              for (let i = t; i < n; ++i) {
                r += String.fromCharCode(e[i] & 127);
              }
              return r;
            }
            function k(e, t, n) {
              let r = "";
              n = Math.min(e.length, n);
              for (let i = t; i < n; ++i) {
                r += String.fromCharCode(e[i]);
              }
              return r;
            }
            function P(e, t, n) {
              const r = e.length;
              if (!t || t < 0) {
                t = 0;
              }
              if (!n || n < 0 || n > r) {
                n = r;
              }
              let i = "";
              for (let r = t; r < n; ++r) {
                i += Z[e[r]];
              }
              return i;
            }
            function M(e, t, n) {
              const r = e.slice(t, n);
              let i = "";
              for (let e = 0; e < r.length - 1; e += 2) {
                i += String.fromCharCode(r[e] + r[e + 1] * 256);
              }
              return i;
            }
            function R(e, t, n) {
              if (e % 1 != 0 || e < 0) {
                throw new RangeError("offset is not uint");
              }
              if (e + t > n) {
                throw new RangeError("Trying to access beyond buffer length");
              }
            }
            function I(e, t, n, r, i, s) {
              if (!h.isBuffer(e)) {
                throw new TypeError("\"buffer\" argument must be a Buffer instance");
              }
              if (t > i || t < s) {
                throw new RangeError("\"value\" argument is out of bounds");
              }
              if (n + r > e.length) {
                throw new RangeError("Index out of range");
              }
            }
            function L(e, t, n, r, i) {
              V(t, r, i, e, n, 7);
              let s = Number(t & BigInt(4294967295));
              e[n++] = s;
              s >>= 8;
              e[n++] = s;
              s >>= 8;
              e[n++] = s;
              s >>= 8;
              e[n++] = s;
              let a = Number(t >> BigInt(32) & BigInt(4294967295));
              e[n++] = a;
              a >>= 8;
              e[n++] = a;
              a >>= 8;
              e[n++] = a;
              a >>= 8;
              e[n++] = a;
              return n;
            }
            function j(e, t, n, r, i) {
              V(t, r, i, e, n, 7);
              let s = Number(t & BigInt(4294967295));
              e[n + 7] = s;
              s >>= 8;
              e[n + 6] = s;
              s >>= 8;
              e[n + 5] = s;
              s >>= 8;
              e[n + 4] = s;
              let a = Number(t >> BigInt(32) & BigInt(4294967295));
              e[n + 3] = a;
              a >>= 8;
              e[n + 2] = a;
              a >>= 8;
              e[n + 1] = a;
              a >>= 8;
              e[n] = a;
              return n + 8;
            }
            function B(e, t, n, r, i, s) {
              if (n + r > e.length) {
                throw new RangeError("Index out of range");
              }
              if (n < 0) {
                throw new RangeError("Index out of range");
              }
            }
            function D(e, t, n, r, s) {
              t = +t;
              n >>>= 0;
              if (!s) {
                B(e, 0, n, 4);
              }
              i.write(e, t, n, r, 23, 4);
              return n + 4;
            }
            function F(e, t, n, r, s) {
              t = +t;
              n >>>= 0;
              if (!s) {
                B(e, 0, n, 8);
              }
              i.write(e, t, n, r, 52, 8);
              return n + 8;
            }
            h.prototype.slice = function (e, t) {
              const n = this.length;
              if ((e = ~~e) < 0) {
                if ((e += n) < 0) {
                  e = 0;
                }
              } else if (e > n) {
                e = n;
              }
              if ((t = t === undefined ? n : ~~t) < 0) {
                if ((t += n) < 0) {
                  t = 0;
                }
              } else if (t > n) {
                t = n;
              }
              if (t < e) {
                t = e;
              }
              const r = this.subarray(e, t);
              Object.setPrototypeOf(r, h.prototype);
              return r;
            };
            h.prototype.readUintLE = h.prototype.readUIntLE = function (e, t, n) {
              e >>>= 0;
              t >>>= 0;
              if (!n) {
                R(e, t, this.length);
              }
              let r = this[e];
              let i = 1;
              let s = 0;
              while (++s < t && (i *= 256)) {
                r += this[e + s] * i;
              }
              return r;
            };
            h.prototype.readUintBE = h.prototype.readUIntBE = function (e, t, n) {
              e >>>= 0;
              t >>>= 0;
              if (!n) {
                R(e, t, this.length);
              }
              let r = this[e + --t];
              let i = 1;
              while (t > 0 && (i *= 256)) {
                r += this[e + --t] * i;
              }
              return r;
            };
            h.prototype.readUint8 = h.prototype.readUInt8 = function (e, t) {
              e >>>= 0;
              if (!t) {
                R(e, 1, this.length);
              }
              return this[e];
            };
            h.prototype.readUint16LE = h.prototype.readUInt16LE = function (e, t) {
              e >>>= 0;
              if (!t) {
                R(e, 2, this.length);
              }
              return this[e] | this[e + 1] << 8;
            };
            h.prototype.readUint16BE = h.prototype.readUInt16BE = function (e, t) {
              e >>>= 0;
              if (!t) {
                R(e, 2, this.length);
              }
              return this[e] << 8 | this[e + 1];
            };
            h.prototype.readUint32LE = h.prototype.readUInt32LE = function (e, t) {
              e >>>= 0;
              if (!t) {
                R(e, 4, this.length);
              }
              return (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
            };
            h.prototype.readUint32BE = h.prototype.readUInt32BE = function (e, t) {
              e >>>= 0;
              if (!t) {
                R(e, 4, this.length);
              }
              return this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
            };
            h.prototype.readBigUInt64LE = $(function (e) {
              H(e >>>= 0, "offset");
              const t = this[e];
              const n = this[e + 7];
              if (t === undefined || n === undefined) {
                z(e, this.length - 8);
              }
              const r = t + this[++e] * 256 + this[++e] * 65536 + this[++e] * 16777216;
              const i = this[++e] + this[++e] * 256 + this[++e] * 65536 + n * 16777216;
              return BigInt(r) + (BigInt(i) << BigInt(32));
            });
            h.prototype.readBigUInt64BE = $(function (e) {
              H(e >>>= 0, "offset");
              const t = this[e];
              const n = this[e + 7];
              if (t === undefined || n === undefined) {
                z(e, this.length - 8);
              }
              const r = t * 16777216 + this[++e] * 65536 + this[++e] * 256 + this[++e];
              const i = this[++e] * 16777216 + this[++e] * 65536 + this[++e] * 256 + n;
              return (BigInt(r) << BigInt(32)) + BigInt(i);
            });
            h.prototype.readIntLE = function (e, t, n) {
              e >>>= 0;
              t >>>= 0;
              if (!n) {
                R(e, t, this.length);
              }
              let r = this[e];
              let i = 1;
              let s = 0;
              while (++s < t && (i *= 256)) {
                r += this[e + s] * i;
              }
              i *= 128;
              if (r >= i) {
                r -= Math.pow(2, t * 8);
              }
              return r;
            };
            h.prototype.readIntBE = function (e, t, n) {
              e >>>= 0;
              t >>>= 0;
              if (!n) {
                R(e, t, this.length);
              }
              let r = t;
              let i = 1;
              let s = this[e + --r];
              while (r > 0 && (i *= 256)) {
                s += this[e + --r] * i;
              }
              i *= 128;
              if (s >= i) {
                s -= Math.pow(2, t * 8);
              }
              return s;
            };
            h.prototype.readInt8 = function (e, t) {
              e >>>= 0;
              if (!t) {
                R(e, 1, this.length);
              }
              if (this[e] & 128) {
                return (255 - this[e] + 1) * -1;
              } else {
                return this[e];
              }
            };
            h.prototype.readInt16LE = function (e, t) {
              e >>>= 0;
              if (!t) {
                R(e, 2, this.length);
              }
              const n = this[e] | this[e + 1] << 8;
              if (n & 32768) {
                return n | -65536;
              } else {
                return n;
              }
            };
            h.prototype.readInt16BE = function (e, t) {
              e >>>= 0;
              if (!t) {
                R(e, 2, this.length);
              }
              const n = this[e + 1] | this[e] << 8;
              if (n & 32768) {
                return n | -65536;
              } else {
                return n;
              }
            };
            h.prototype.readInt32LE = function (e, t) {
              e >>>= 0;
              if (!t) {
                R(e, 4, this.length);
              }
              return this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
            };
            h.prototype.readInt32BE = function (e, t) {
              e >>>= 0;
              if (!t) {
                R(e, 4, this.length);
              }
              return this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
            };
            h.prototype.readBigInt64LE = $(function (e) {
              H(e >>>= 0, "offset");
              const t = this[e];
              const n = this[e + 7];
              if (t === undefined || n === undefined) {
                z(e, this.length - 8);
              }
              const r = this[e + 4] + this[e + 5] * 256 + this[e + 6] * 65536 + (n << 24);
              return (BigInt(r) << BigInt(32)) + BigInt(t + this[++e] * 256 + this[++e] * 65536 + this[++e] * 16777216);
            });
            h.prototype.readBigInt64BE = $(function (e) {
              H(e >>>= 0, "offset");
              const t = this[e];
              const n = this[e + 7];
              if (t === undefined || n === undefined) {
                z(e, this.length - 8);
              }
              const r = (t << 24) + this[++e] * 65536 + this[++e] * 256 + this[++e];
              return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * 16777216 + this[++e] * 65536 + this[++e] * 256 + n);
            });
            h.prototype.readFloatLE = function (e, t) {
              e >>>= 0;
              if (!t) {
                R(e, 4, this.length);
              }
              return i.read(this, e, true, 23, 4);
            };
            h.prototype.readFloatBE = function (e, t) {
              e >>>= 0;
              if (!t) {
                R(e, 4, this.length);
              }
              return i.read(this, e, false, 23, 4);
            };
            h.prototype.readDoubleLE = function (e, t) {
              e >>>= 0;
              if (!t) {
                R(e, 8, this.length);
              }
              return i.read(this, e, true, 52, 8);
            };
            h.prototype.readDoubleBE = function (e, t) {
              e >>>= 0;
              if (!t) {
                R(e, 8, this.length);
              }
              return i.read(this, e, false, 52, 8);
            };
            h.prototype.writeUintLE = h.prototype.writeUIntLE = function (e, t, n, r) {
              e = +e;
              t >>>= 0;
              n >>>= 0;
              if (!r) {
                I(this, e, t, n, Math.pow(2, n * 8) - 1, 0);
              }
              let i = 1;
              let s = 0;
              for (this[t] = e & 255; ++s < n && (i *= 256);) {
                this[t + s] = e / i & 255;
              }
              return t + n;
            };
            h.prototype.writeUintBE = h.prototype.writeUIntBE = function (e, t, n, r) {
              e = +e;
              t >>>= 0;
              n >>>= 0;
              if (!r) {
                I(this, e, t, n, Math.pow(2, n * 8) - 1, 0);
              }
              let i = n - 1;
              let s = 1;
              for (this[t + i] = e & 255; --i >= 0 && (s *= 256);) {
                this[t + i] = e / s & 255;
              }
              return t + n;
            };
            h.prototype.writeUint8 = h.prototype.writeUInt8 = function (e, t, n) {
              e = +e;
              t >>>= 0;
              if (!n) {
                I(this, e, t, 1, 255, 0);
              }
              this[t] = e & 255;
              return t + 1;
            };
            h.prototype.writeUint16LE = h.prototype.writeUInt16LE = function (e, t, n) {
              e = +e;
              t >>>= 0;
              if (!n) {
                I(this, e, t, 2, 65535, 0);
              }
              this[t] = e & 255;
              this[t + 1] = e >>> 8;
              return t + 2;
            };
            h.prototype.writeUint16BE = h.prototype.writeUInt16BE = function (e, t, n) {
              e = +e;
              t >>>= 0;
              if (!n) {
                I(this, e, t, 2, 65535, 0);
              }
              this[t] = e >>> 8;
              this[t + 1] = e & 255;
              return t + 2;
            };
            h.prototype.writeUint32LE = h.prototype.writeUInt32LE = function (e, t, n) {
              e = +e;
              t >>>= 0;
              if (!n) {
                I(this, e, t, 4, 4294967295, 0);
              }
              this[t + 3] = e >>> 24;
              this[t + 2] = e >>> 16;
              this[t + 1] = e >>> 8;
              this[t] = e & 255;
              return t + 4;
            };
            h.prototype.writeUint32BE = h.prototype.writeUInt32BE = function (e, t, n) {
              e = +e;
              t >>>= 0;
              if (!n) {
                I(this, e, t, 4, 4294967295, 0);
              }
              this[t] = e >>> 24;
              this[t + 1] = e >>> 16;
              this[t + 2] = e >>> 8;
              this[t + 3] = e & 255;
              return t + 4;
            };
            h.prototype.writeBigUInt64LE = $(function (e, t = 0) {
              return L(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
            });
            h.prototype.writeBigUInt64BE = $(function (e, t = 0) {
              return j(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
            });
            h.prototype.writeIntLE = function (e, t, n, r) {
              e = +e;
              t >>>= 0;
              if (!r) {
                const r = Math.pow(2, n * 8 - 1);
                I(this, e, t, n, r - 1, -r);
              }
              let i = 0;
              let s = 1;
              let a = 0;
              for (this[t] = e & 255; ++i < n && (s *= 256);) {
                if (e < 0 && a === 0 && this[t + i - 1] !== 0) {
                  a = 1;
                }
                this[t + i] = (e / s | 0) - a & 255;
              }
              return t + n;
            };
            h.prototype.writeIntBE = function (e, t, n, r) {
              e = +e;
              t >>>= 0;
              if (!r) {
                const r = Math.pow(2, n * 8 - 1);
                I(this, e, t, n, r - 1, -r);
              }
              let i = n - 1;
              let s = 1;
              let a = 0;
              for (this[t + i] = e & 255; --i >= 0 && (s *= 256);) {
                if (e < 0 && a === 0 && this[t + i + 1] !== 0) {
                  a = 1;
                }
                this[t + i] = (e / s | 0) - a & 255;
              }
              return t + n;
            };
            h.prototype.writeInt8 = function (e, t, n) {
              e = +e;
              t >>>= 0;
              if (!n) {
                I(this, e, t, 1, 127, -128);
              }
              if (e < 0) {
                e = 255 + e + 1;
              }
              this[t] = e & 255;
              return t + 1;
            };
            h.prototype.writeInt16LE = function (e, t, n) {
              e = +e;
              t >>>= 0;
              if (!n) {
                I(this, e, t, 2, 32767, -32768);
              }
              this[t] = e & 255;
              this[t + 1] = e >>> 8;
              return t + 2;
            };
            h.prototype.writeInt16BE = function (e, t, n) {
              e = +e;
              t >>>= 0;
              if (!n) {
                I(this, e, t, 2, 32767, -32768);
              }
              this[t] = e >>> 8;
              this[t + 1] = e & 255;
              return t + 2;
            };
            h.prototype.writeInt32LE = function (e, t, n) {
              e = +e;
              t >>>= 0;
              if (!n) {
                I(this, e, t, 4, 2147483647, -2147483648);
              }
              this[t] = e & 255;
              this[t + 1] = e >>> 8;
              this[t + 2] = e >>> 16;
              this[t + 3] = e >>> 24;
              return t + 4;
            };
            h.prototype.writeInt32BE = function (e, t, n) {
              e = +e;
              t >>>= 0;
              if (!n) {
                I(this, e, t, 4, 2147483647, -2147483648);
              }
              if (e < 0) {
                e = 4294967295 + e + 1;
              }
              this[t] = e >>> 24;
              this[t + 1] = e >>> 16;
              this[t + 2] = e >>> 8;
              this[t + 3] = e & 255;
              return t + 4;
            };
            h.prototype.writeBigInt64LE = $(function (e, t = 0) {
              return L(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
            });
            h.prototype.writeBigInt64BE = $(function (e, t = 0) {
              return j(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
            });
            h.prototype.writeFloatLE = function (e, t, n) {
              return D(this, e, t, true, n);
            };
            h.prototype.writeFloatBE = function (e, t, n) {
              return D(this, e, t, false, n);
            };
            h.prototype.writeDoubleLE = function (e, t, n) {
              return F(this, e, t, true, n);
            };
            h.prototype.writeDoubleBE = function (e, t, n) {
              return F(this, e, t, false, n);
            };
            h.prototype.copy = function (e, t, n, r) {
              if (!h.isBuffer(e)) {
                throw new TypeError("argument should be a Buffer");
              }
              n ||= 0;
              if (!r && r !== 0) {
                r = this.length;
              }
              if (t >= e.length) {
                t = e.length;
              }
              t ||= 0;
              if (r > 0 && r < n) {
                r = n;
              }
              if (r === n) {
                return 0;
              }
              if (e.length === 0 || this.length === 0) {
                return 0;
              }
              if (t < 0) {
                throw new RangeError("targetStart out of bounds");
              }
              if (n < 0 || n >= this.length) {
                throw new RangeError("Index out of range");
              }
              if (r < 0) {
                throw new RangeError("sourceEnd out of bounds");
              }
              if (r > this.length) {
                r = this.length;
              }
              if (e.length - t < r - n) {
                r = e.length - t + n;
              }
              const i = r - n;
              if (this === e && typeof Uint8Array.prototype.copyWithin == "function") {
                this.copyWithin(t, n, r);
              } else {
                Uint8Array.prototype.set.call(e, this.subarray(n, r), t);
              }
              return i;
            };
            h.prototype.fill = function (e, t, n, r) {
              if (typeof e == "string") {
                if (typeof t == "string") {
                  r = t;
                  t = 0;
                  n = this.length;
                } else if (typeof n == "string") {
                  r = n;
                  n = this.length;
                }
                if (r !== undefined && typeof r != "string") {
                  throw new TypeError("encoding must be a string");
                }
                if (typeof r == "string" && !h.isEncoding(r)) {
                  throw new TypeError("Unknown encoding: " + r);
                }
                if (e.length === 1) {
                  const t = e.charCodeAt(0);
                  if (r === "utf8" && t < 128 || r === "latin1") {
                    e = t;
                  }
                }
              } else if (typeof e == "number") {
                e &= 255;
              } else if (typeof e == "boolean") {
                e = Number(e);
              }
              if (t < 0 || this.length < t || this.length < n) {
                throw new RangeError("Out of range index");
              }
              if (n <= t) {
                return this;
              }
              let i;
              t >>>= 0;
              n = n === undefined ? this.length : n >>> 0;
              e ||= 0;
              if (typeof e == "number") {
                for (i = t; i < n; ++i) {
                  this[i] = e;
                }
              } else {
                const s = h.isBuffer(e) ? e : h.from(e, r);
                const a = s.length;
                if (a === 0) {
                  throw new TypeError("The value \"" + e + "\" is invalid for argument \"value\"");
                }
                for (i = 0; i < n - t; ++i) {
                  this[i + t] = s[i % a];
                }
              }
              return this;
            };
            const N = {};
            function G(e, t, n) {
              N[e] = class extends n {
                constructor() {
                  super();
                  Object.defineProperty(this, "message", {
                    value: t.apply(this, arguments),
                    writable: true,
                    configurable: true
                  });
                  this.name = `${this.name} [${e}]`;
                  this.stack;
                  delete this.name;
                }
                get code() {
                  return e;
                }
                set code(e) {
                  Object.defineProperty(this, "code", {
                    configurable: true,
                    enumerable: true,
                    value: e,
                    writable: true
                  });
                }
                toString() {
                  return `${this.name} [${e}]: ${this.message}`;
                }
              };
            }
            function U(e) {
              let t = "";
              let n = e.length;
              const r = e[0] === "-" ? 1 : 0;
              for (; n >= r + 4; n -= 3) {
                t = `_${e.slice(n - 3, n)}${t}`;
              }
              return `${e.slice(0, n)}${t}`;
            }
            function V(e, t, n, r, i, s) {
              if (e > n || e < t) {
                const r = typeof t == "bigint" ? "n" : "";
                let i;
                i = s > 3 ? t === 0 || t === BigInt(0) ? `>= 0${r} and < 2${r} ** ${(s + 1) * 8}${r}` : `>= -(2${r} ** ${(s + 1) * 8 - 1}${r}) and < 2 ** ${(s + 1) * 8 - 1}${r}` : `>= ${t}${r} and <= ${n}${r}`;
                throw new N.ERR_OUT_OF_RANGE("value", i, e);
              }
              (function (e, t, n) {
                H(t, "offset");
                if (e[t] === undefined || e[t + n] === undefined) {
                  z(t, e.length - (n + 1));
                }
              })(r, i, s);
            }
            function H(e, t) {
              if (typeof e != "number") {
                throw new N.ERR_INVALID_ARG_TYPE(t, "number", e);
              }
            }
            function z(e, t, n) {
              if (Math.floor(e) !== e) {
                H(e, n);
                throw new N.ERR_OUT_OF_RANGE(n || "offset", "an integer", e);
              }
              if (t < 0) {
                throw new N.ERR_BUFFER_OUT_OF_BOUNDS();
              }
              throw new N.ERR_OUT_OF_RANGE(n || "offset", `>= ${n ? 1 : 0} and <= ${t}`, e);
            }
            G("ERR_BUFFER_OUT_OF_BOUNDS", function (e) {
              if (e) {
                return `${e} is outside of buffer bounds`;
              } else {
                return "Attempt to access memory outside buffer bounds";
              }
            }, RangeError);
            G("ERR_INVALID_ARG_TYPE", function (e, t) {
              return `The "${e}" argument must be of type number. Received type ${typeof t}`;
            }, TypeError);
            G("ERR_OUT_OF_RANGE", function (e, t, n) {
              let r = `The value of "${e}" is out of range.`;
              let i = n;
              if (Number.isInteger(n) && Math.abs(n) > 4294967296) {
                i = U(String(n));
              } else if (typeof n == "bigint") {
                i = String(n);
                if (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) {
                  i = U(i);
                }
                i += "n";
              }
              r += ` It must be ${t}. Received ${i}`;
              return r;
            }, RangeError);
            const W = /[^+/0-9A-Za-z-_]/g;
            function X(e, t) {
              let n;
              t = t || Infinity;
              const r = e.length;
              let i = null;
              const s = [];
              for (let a = 0; a < r; ++a) {
                n = e.charCodeAt(a);
                if (n > 55295 && n < 57344) {
                  if (!i) {
                    if (n > 56319) {
                      if ((t -= 3) > -1) {
                        s.push(239, 191, 189);
                      }
                      continue;
                    }
                    if (a + 1 === r) {
                      if ((t -= 3) > -1) {
                        s.push(239, 191, 189);
                      }
                      continue;
                    }
                    i = n;
                    continue;
                  }
                  if (n < 56320) {
                    if ((t -= 3) > -1) {
                      s.push(239, 191, 189);
                    }
                    i = n;
                    continue;
                  }
                  n = 65536 + (i - 55296 << 10 | n - 56320);
                } else if (i && (t -= 3) > -1) {
                  s.push(239, 191, 189);
                }
                i = null;
                if (n < 128) {
                  if ((t -= 1) < 0) {
                    break;
                  }
                  s.push(n);
                } else if (n < 2048) {
                  if ((t -= 2) < 0) {
                    break;
                  }
                  s.push(n >> 6 | 192, n & 63 | 128);
                } else if (n < 65536) {
                  if ((t -= 3) < 0) {
                    break;
                  }
                  s.push(n >> 12 | 224, n >> 6 & 63 | 128, n & 63 | 128);
                } else {
                  if (!(n < 1114112)) {
                    throw new Error("Invalid code point");
                  }
                  if ((t -= 4) < 0) {
                    break;
                  }
                  s.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, n & 63 | 128);
                }
              }
              return s;
            }
            function Y(e) {
              return r.toByteArray(function (e) {
                if ((e = (e = e.split("=")[0]).trim().replace(W, "")).length < 2) {
                  return "";
                }
                while (e.length % 4 != 0) {
                  e += "=";
                }
                return e;
              }(e));
            }
            function q(e, t, n, r) {
              let i;
              for (i = 0; i < r && !(i + n >= t.length) && !(i >= e.length); ++i) {
                t[i + n] = e[i];
              }
              return i;
            }
            function J(e, t) {
              return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
            }
            function K(e) {
              return e != e;
            }
            const Z = function () {
              const e = "0123456789abcdef";
              const t = new Array(256);
              for (let n = 0; n < 16; ++n) {
                const r = n * 16;
                for (let i = 0; i < 16; ++i) {
                  t[r + i] = e[n] + e[i];
                }
              }
              return t;
            }();
            function $(e) {
              if (typeof BigInt == "undefined") {
                return Q;
              } else {
                return e;
              }
            }
            function Q() {
              throw new Error("BigInt not supported");
            }
          }
    });
})();
