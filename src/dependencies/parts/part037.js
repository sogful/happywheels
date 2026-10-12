(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        9805(e, t) {
            "use strict";
        
            var n = typeof Uint8Array != "undefined" && typeof Uint16Array != "undefined" && typeof Int32Array != "undefined";
            function r(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }
            t.assign = function (e) {
              for (var t = Array.prototype.slice.call(arguments, 1); t.length;) {
                var n = t.shift();
                if (n) {
                  if (typeof n != "object") {
                    throw new TypeError(n + "must be non-object");
                  }
                  for (var i in n) {
                    if (r(n, i)) {
                      e[i] = n[i];
                    }
                  }
                }
              }
              return e;
            };
            t.shrinkBuf = function (e, t) {
              if (e.length === t) {
                return e;
              } else if (e.subarray) {
                return e.subarray(0, t);
              } else {
                e.length = t;
                return e;
              }
            };
            var i = {
              arraySet: function (e, t, n, r, i) {
                if (t.subarray && e.subarray) {
                  e.set(t.subarray(n, n + r), i);
                } else {
                  for (var s = 0; s < r; s++) {
                    e[i + s] = t[n + s];
                  }
                }
              },
              flattenChunks: function (e) {
                var t;
                var n;
                var r;
                var i;
                var s;
                var a;
                r = 0;
                t = 0;
                n = e.length;
                for (; t < n; t++) {
                  r += e[t].length;
                }
                a = new Uint8Array(r);
                i = 0;
                t = 0;
                n = e.length;
                for (; t < n; t++) {
                  s = e[t];
                  a.set(s, i);
                  i += s.length;
                }
                return a;
              }
            };
            var s = {
              arraySet: function (e, t, n, r, i) {
                for (var s = 0; s < r; s++) {
                  e[i + s] = t[n + s];
                }
              },
              flattenChunks: function (e) {
                return [].concat.apply([], e);
              }
            };
            t.setTyped = function (e) {
              if (e) {
                t.Buf8 = Uint8Array;
                t.Buf16 = Uint16Array;
                t.Buf32 = Int32Array;
                t.assign(t, i);
              } else {
                t.Buf8 = Array;
                t.Buf16 = Array;
                t.Buf32 = Array;
                t.assign(t, s);
              }
            };
            t.setTyped(n);
          },
        53269(e) {
            "use strict";
        
            e.exports = function (e, t, n, r) {
              var i = e & 65535;
              var s = e >>> 16 & 65535;
              var a = 0;
              for (; n !== 0;) {
                n -= a = n > 2000 ? 2000 : n;
                do {
                  s = s + (i = i + t[r++] | 0) | 0;
                } while (--a);
                i %= 65521;
                s %= 65521;
              }
              return i | s << 16;
            };
          },
        19681(e) {
            "use strict";
        
            e.exports = {
              Z_NO_FLUSH: 0,
              Z_PARTIAL_FLUSH: 1,
              Z_SYNC_FLUSH: 2,
              Z_FULL_FLUSH: 3,
              Z_FINISH: 4,
              Z_BLOCK: 5,
              Z_TREES: 6,
              Z_OK: 0,
              Z_STREAM_END: 1,
              Z_NEED_DICT: 2,
              Z_ERRNO: -1,
              Z_STREAM_ERROR: -2,
              Z_DATA_ERROR: -3,
              Z_BUF_ERROR: -5,
              Z_NO_COMPRESSION: 0,
              Z_BEST_SPEED: 1,
              Z_BEST_COMPRESSION: 9,
              Z_DEFAULT_COMPRESSION: -1,
              Z_FILTERED: 1,
              Z_HUFFMAN_ONLY: 2,
              Z_RLE: 3,
              Z_FIXED: 4,
              Z_DEFAULT_STRATEGY: 0,
              Z_BINARY: 0,
              Z_TEXT: 1,
              Z_UNKNOWN: 2,
              Z_DEFLATED: 8
            };
          },
        14823(e) {
            "use strict";
        
            var t = function () {
              var e;
              var t = [];
              for (var n = 0; n < 256; n++) {
                e = n;
                for (var r = 0; r < 8; r++) {
                  e = e & 1 ? e >>> 1 ^ -306674912 : e >>> 1;
                }
                t[n] = e;
              }
              return t;
            }();
            e.exports = function (e, n, r, i) {
              var s = t;
              var a = i + r;
              e ^= -1;
              for (var o = i; o < a; o++) {
                e = e >>> 8 ^ s[(e ^ n[o]) & 255];
              }
              return e ^ -1;
            };
          }
    });
})();
