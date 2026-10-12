(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        21998(e, t, n) {
            "use strict";
        
            var r = n(9805);
            var i = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0];
            var s = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78];
            var a = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0];
            var o = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
            e.exports = function (e, t, n, h, l, d, c, u) {
              var p;
              var m;
              var f;
              var _;
              var v;
              var y;
              var g;
              var w;
              var x;
              var b = u.bits;
              var T = 0;
              var A = 0;
              var C = 0;
              var S = 0;
              var E = 0;
              var O = 0;
              var k = 0;
              var P = 0;
              var M = 0;
              var R = 0;
              var I = null;
              var L = 0;
              var j = new r.Buf16(16);
              var B = new r.Buf16(16);
              var D = null;
              var F = 0;
              for (T = 0; T <= 15; T++) {
                j[T] = 0;
              }
              for (A = 0; A < h; A++) {
                j[t[n + A]]++;
              }
              E = b;
              S = 15;
              for (; S >= 1 && j[S] === 0; S--);
              if (E > S) {
                E = S;
              }
              if (S === 0) {
                l[d++] = 20971520;
                l[d++] = 20971520;
                u.bits = 1;
                return 0;
              }
              for (C = 1; C < S && j[C] === 0; C++);
              if (E < C) {
                E = C;
              }
              P = 1;
              T = 1;
              for (; T <= 15; T++) {
                P <<= 1;
                if ((P -= j[T]) < 0) {
                  return -1;
                }
              }
              if (P > 0 && (e === 0 || S !== 1)) {
                return -1;
              }
              B[1] = 0;
              T = 1;
              for (; T < 15; T++) {
                B[T + 1] = B[T] + j[T];
              }
              for (A = 0; A < h; A++) {
                if (t[n + A] !== 0) {
                  c[B[t[n + A]]++] = A;
                }
              }
              if (e === 0) {
                I = D = c;
                y = 19;
              } else if (e === 1) {
                I = i;
                L -= 257;
                D = s;
                F -= 257;
                y = 256;
              } else {
                I = a;
                D = o;
                y = -1;
              }
              R = 0;
              A = 0;
              T = C;
              v = d;
              O = E;
              k = 0;
              f = -1;
              _ = (M = 1 << E) - 1;
              if (e === 1 && M > 852 || e === 2 && M > 592) {
                return 1;
              }
              while (true) {
                g = T - k;
                if (c[A] < y) {
                  w = 0;
                  x = c[A];
                } else if (c[A] > y) {
                  w = D[F + c[A]];
                  x = I[L + c[A]];
                } else {
                  w = 96;
                  x = 0;
                }
                p = 1 << T - k;
                C = m = 1 << O;
                do {
                  l[v + (R >> k) + (m -= p)] = g << 24 | w << 16 | x;
                } while (m !== 0);
                for (p = 1 << T - 1; R & p;) {
                  p >>= 1;
                }
                if (p !== 0) {
                  R &= p - 1;
                  R += p;
                } else {
                  R = 0;
                }
                A++;
                if (--j[T] === 0) {
                  if (T === S) {
                    break;
                  }
                  T = t[n + c[A]];
                }
                if (T > E && (R & _) !== f) {
                  if (k === 0) {
                    k = E;
                  }
                  v += C;
                  P = 1 << (O = T - k);
                  while (O + k < S && !((P -= j[O + k]) <= 0)) {
                    O++;
                    P <<= 1;
                  }
                  M += 1 << O;
                  if (e === 1 && M > 852 || e === 2 && M > 592) {
                    return 1;
                  }
                  l[f = R & _] = E << 24 | O << 16 | v - d;
                }
              }
              if (R !== 0) {
                l[v + R] = T - k << 24 | 4194304;
              }
              u.bits = E;
              return 0;
            };
          },
        54674(e) {
            "use strict";
        
            e.exports = {
              2: "need dictionary",
              1: "stream end",
              0: "",
              "-1": "file error",
              "-2": "stream error",
              "-3": "data error",
              "-4": "insufficient memory",
              "-5": "buffer error",
              "-6": "incompatible version"
            };
          },
        23665(e, t, n) {
            "use strict";
        
            var r = n(9805);
            function i(e) {
              for (var t = e.length; --t >= 0;) {
                e[t] = 0;
              }
            }
            var s = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];
            var a = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
            var o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7];
            var h = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
            var l = new Array(576);
            i(l);
            var d = new Array(60);
            i(d);
            var c = new Array(512);
            i(c);
            var u = new Array(256);
            i(u);
            var p = new Array(29);
            i(p);
            var m;
            var f;
            var _;
            var v = new Array(30);
            function y(e, t, n, r, i) {
              this.static_tree = e;
              this.extra_bits = t;
              this.extra_base = n;
              this.elems = r;
              this.max_length = i;
              this.has_stree = e && e.length;
            }
            function g(e, t) {
              this.dyn_tree = e;
              this.max_code = 0;
              this.stat_desc = t;
            }
            function w(e) {
              if (e < 256) {
                return c[e];
              } else {
                return c[256 + (e >>> 7)];
              }
            }
            function x(e, t) {
              e.pending_buf[e.pending++] = t & 255;
              e.pending_buf[e.pending++] = t >>> 8 & 255;
            }
            function b(e, t, n) {
              if (e.bi_valid > 16 - n) {
                e.bi_buf |= t << e.bi_valid & 65535;
                x(e, e.bi_buf);
                e.bi_buf = t >> 16 - e.bi_valid;
                e.bi_valid += n - 16;
              } else {
                e.bi_buf |= t << e.bi_valid & 65535;
                e.bi_valid += n;
              }
            }
            function T(e, t, n) {
              b(e, n[t * 2], n[t * 2 + 1]);
            }
            function A(e, t) {
              var n = 0;
              do {
                n |= e & 1;
                e >>>= 1;
                n <<= 1;
              } while (--t > 0);
              return n >>> 1;
            }
            function C(e, t, n) {
              var r;
              var i;
              var s = new Array(16);
              var a = 0;
              for (r = 1; r <= 15; r++) {
                s[r] = a = a + n[r - 1] << 1;
              }
              for (i = 0; i <= t; i++) {
                var o = e[i * 2 + 1];
                if (o !== 0) {
                  e[i * 2] = A(s[o]++, o);
                }
              }
            }
            function S(e) {
              var t;
              for (t = 0; t < 286; t++) {
                e.dyn_ltree[t * 2] = 0;
              }
              for (t = 0; t < 30; t++) {
                e.dyn_dtree[t * 2] = 0;
              }
              for (t = 0; t < 19; t++) {
                e.bl_tree[t * 2] = 0;
              }
              e.dyn_ltree[512] = 1;
              e.opt_len = e.static_len = 0;
              e.last_lit = e.matches = 0;
            }
            function E(e) {
              if (e.bi_valid > 8) {
                x(e, e.bi_buf);
              } else if (e.bi_valid > 0) {
                e.pending_buf[e.pending++] = e.bi_buf;
              }
              e.bi_buf = 0;
              e.bi_valid = 0;
            }
            function O(e, t, n, r) {
              var i = t * 2;
              var s = n * 2;
              return e[i] < e[s] || e[i] === e[s] && r[t] <= r[n];
            }
            function k(e, t, n) {
              for (var r = e.heap[n], i = n << 1; i <= e.heap_len && (i < e.heap_len && O(t, e.heap[i + 1], e.heap[i], e.depth) && i++, !O(t, r, e.heap[i], e.depth));) {
                e.heap[n] = e.heap[i];
                n = i;
                i <<= 1;
              }
              e.heap[n] = r;
            }
            function P(e, t, n) {
              var r;
              var i;
              var o;
              var h;
              var l = 0;
              if (e.last_lit !== 0) {
                do {
                  r = e.pending_buf[e.d_buf + l * 2] << 8 | e.pending_buf[e.d_buf + l * 2 + 1];
                  i = e.pending_buf[e.l_buf + l];
                  l++;
                  if (r === 0) {
                    T(e, i, t);
                  } else {
                    T(e, (o = u[i]) + 256 + 1, t);
                    if ((h = s[o]) !== 0) {
                      b(e, i -= p[o], h);
                    }
                    T(e, o = w(--r), n);
                    if ((h = a[o]) !== 0) {
                      b(e, r -= v[o], h);
                    }
                  }
                } while (l < e.last_lit);
              }
              T(e, 256, t);
            }
            function M(e, t) {
              var n;
              var r;
              var i;
              var s = t.dyn_tree;
              var a = t.stat_desc.static_tree;
              var o = t.stat_desc.has_stree;
              var h = t.stat_desc.elems;
              var l = -1;
              e.heap_len = 0;
              e.heap_max = 573;
              n = 0;
              for (; n < h; n++) {
                if (s[n * 2] !== 0) {
                  e.heap[++e.heap_len] = l = n;
                  e.depth[n] = 0;
                } else {
                  s[n * 2 + 1] = 0;
                }
              }
              while (e.heap_len < 2) {
                s[(i = e.heap[++e.heap_len] = l < 2 ? ++l : 0) * 2] = 1;
                e.depth[i] = 0;
                e.opt_len--;
                if (o) {
                  e.static_len -= a[i * 2 + 1];
                }
              }
              t.max_code = l;
              n = e.heap_len >> 1;
              for (; n >= 1; n--) {
                k(e, s, n);
              }
              i = h;
              do {
                n = e.heap[1];
                e.heap[1] = e.heap[e.heap_len--];
                k(e, s, 1);
                r = e.heap[1];
                e.heap[--e.heap_max] = n;
                e.heap[--e.heap_max] = r;
                s[i * 2] = s[n * 2] + s[r * 2];
                e.depth[i] = (e.depth[n] >= e.depth[r] ? e.depth[n] : e.depth[r]) + 1;
                s[n * 2 + 1] = s[r * 2 + 1] = i;
                e.heap[1] = i++;
                k(e, s, 1);
              } while (e.heap_len >= 2);
              e.heap[--e.heap_max] = e.heap[1];
              (function (e, t) {
                var n;
                var r;
                var i;
                var s;
                var a;
                var o;
                var h = t.dyn_tree;
                var l = t.max_code;
                var d = t.stat_desc.static_tree;
                var c = t.stat_desc.has_stree;
                var u = t.stat_desc.extra_bits;
                var p = t.stat_desc.extra_base;
                var m = t.stat_desc.max_length;
                var f = 0;
                for (s = 0; s <= 15; s++) {
                  e.bl_count[s] = 0;
                }
                h[e.heap[e.heap_max] * 2 + 1] = 0;
                n = e.heap_max + 1;
                for (; n < 573; n++) {
                  if ((s = h[h[(r = e.heap[n]) * 2 + 1] * 2 + 1] + 1) > m) {
                    s = m;
                    f++;
                  }
                  h[r * 2 + 1] = s;
                  if (!(r > l)) {
                    e.bl_count[s]++;
                    a = 0;
                    if (r >= p) {
                      a = u[r - p];
                    }
                    o = h[r * 2];
                    e.opt_len += o * (s + a);
                    if (c) {
                      e.static_len += o * (d[r * 2 + 1] + a);
                    }
                  }
                }
                if (f !== 0) {
                  do {
                    for (s = m - 1; e.bl_count[s] === 0;) {
                      s--;
                    }
                    e.bl_count[s]--;
                    e.bl_count[s + 1] += 2;
                    e.bl_count[m]--;
                    f -= 2;
                  } while (f > 0);
                  for (s = m; s !== 0; s--) {
                    for (r = e.bl_count[s]; r !== 0;) {
                      if (!((i = e.heap[--n]) > l)) {
                        if (h[i * 2 + 1] !== s) {
                          e.opt_len += (s - h[i * 2 + 1]) * h[i * 2];
                          h[i * 2 + 1] = s;
                        }
                        r--;
                      }
                    }
                  }
                }
              })(e, t);
              C(s, l, e.bl_count);
            }
            function R(e, t, n) {
              var r;
              var i;
              var s = -1;
              var a = t[1];
              var o = 0;
              var h = 7;
              var l = 4;
              if (a === 0) {
                h = 138;
                l = 3;
              }
              t[(n + 1) * 2 + 1] = 65535;
              r = 0;
              for (; r <= n; r++) {
                i = a;
                a = t[(r + 1) * 2 + 1];
                if (!(++o < h) || i !== a) {
                  if (o < l) {
                    e.bl_tree[i * 2] += o;
                  } else if (i !== 0) {
                    if (i !== s) {
                      e.bl_tree[i * 2]++;
                    }
                    e.bl_tree[32]++;
                  } else if (o <= 10) {
                    e.bl_tree[34]++;
                  } else {
                    e.bl_tree[36]++;
                  }
                  o = 0;
                  s = i;
                  if (a === 0) {
                    h = 138;
                    l = 3;
                  } else if (i === a) {
                    h = 6;
                    l = 3;
                  } else {
                    h = 7;
                    l = 4;
                  }
                }
              }
            }
            function I(e, t, n) {
              var r;
              var i;
              var s = -1;
              var a = t[1];
              var o = 0;
              var h = 7;
              var l = 4;
              if (a === 0) {
                h = 138;
                l = 3;
              }
              r = 0;
              for (; r <= n; r++) {
                i = a;
                a = t[(r + 1) * 2 + 1];
                if (!(++o < h) || i !== a) {
                  if (o < l) {
                    do {
                      T(e, i, e.bl_tree);
                    } while (--o !== 0);
                  } else if (i !== 0) {
                    if (i !== s) {
                      T(e, i, e.bl_tree);
                      o--;
                    }
                    T(e, 16, e.bl_tree);
                    b(e, o - 3, 2);
                  } else if (o <= 10) {
                    T(e, 17, e.bl_tree);
                    b(e, o - 3, 3);
                  } else {
                    T(e, 18, e.bl_tree);
                    b(e, o - 11, 7);
                  }
                  o = 0;
                  s = i;
                  if (a === 0) {
                    h = 138;
                    l = 3;
                  } else if (i === a) {
                    h = 6;
                    l = 3;
                  } else {
                    h = 7;
                    l = 4;
                  }
                }
              }
            }
            i(v);
            var L = false;
            function j(e, t, n, i) {
              b(e, 0 + (i ? 1 : 0), 3);
              (function (e, t, n) {
                E(e);
                x(e, n);
                x(e, ~n);
                r.arraySet(e.pending_buf, e.window, t, n, e.pending);
                e.pending += n;
              })(e, t, n);
            }
            t._tr_init = function (e) {
              if (!L) {
                (function () {
                  var e;
                  var t;
                  var n;
                  var r;
                  var i;
                  var h = new Array(16);
                  n = 0;
                  r = 0;
                  for (; r < 28; r++) {
                    p[r] = n;
                    e = 0;
                    for (; e < 1 << s[r]; e++) {
                      u[n++] = r;
                    }
                  }
                  u[n - 1] = r;
                  i = 0;
                  r = 0;
                  for (; r < 16; r++) {
                    v[r] = i;
                    e = 0;
                    for (; e < 1 << a[r]; e++) {
                      c[i++] = r;
                    }
                  }
                  for (i >>= 7; r < 30; r++) {
                    v[r] = i << 7;
                    e = 0;
                    for (; e < 1 << a[r] - 7; e++) {
                      c[256 + i++] = r;
                    }
                  }
                  for (t = 0; t <= 15; t++) {
                    h[t] = 0;
                  }
                  for (e = 0; e <= 143;) {
                    l[e * 2 + 1] = 8;
                    e++;
                    h[8]++;
                  }
                  while (e <= 255) {
                    l[e * 2 + 1] = 9;
                    e++;
                    h[9]++;
                  }
                  while (e <= 279) {
                    l[e * 2 + 1] = 7;
                    e++;
                    h[7]++;
                  }
                  while (e <= 287) {
                    l[e * 2 + 1] = 8;
                    e++;
                    h[8]++;
                  }
                  C(l, 287, h);
                  e = 0;
                  for (; e < 30; e++) {
                    d[e * 2 + 1] = 5;
                    d[e * 2] = A(e, 5);
                  }
                  m = new y(l, s, 257, 286, 15);
                  f = new y(d, a, 0, 30, 15);
                  _ = new y(new Array(0), o, 0, 19, 7);
                })();
                L = true;
              }
              e.l_desc = new g(e.dyn_ltree, m);
              e.d_desc = new g(e.dyn_dtree, f);
              e.bl_desc = new g(e.bl_tree, _);
              e.bi_buf = 0;
              e.bi_valid = 0;
              S(e);
            };
            t._tr_stored_block = j;
            t._tr_flush_block = function (e, t, n, r) {
              var i;
              var s;
              var a = 0;
              if (e.level > 0) {
                if (e.strm.data_type === 2) {
                  e.strm.data_type = function (e) {
                    var t;
                    var n = 4093624447;
                    for (t = 0; t <= 31; t++, n >>>= 1) {
                      if (n & 1 && e.dyn_ltree[t * 2] !== 0) {
                        return 0;
                      }
                    }
                    if (e.dyn_ltree[18] !== 0 || e.dyn_ltree[20] !== 0 || e.dyn_ltree[26] !== 0) {
                      return 1;
                    }
                    for (t = 32; t < 256; t++) {
                      if (e.dyn_ltree[t * 2] !== 0) {
                        return 1;
                      }
                    }
                    return 0;
                  }(e);
                }
                M(e, e.l_desc);
                M(e, e.d_desc);
                a = function (e) {
                  var t;
                  R(e, e.dyn_ltree, e.l_desc.max_code);
                  R(e, e.dyn_dtree, e.d_desc.max_code);
                  M(e, e.bl_desc);
                  t = 18;
                  for (; t >= 3 && e.bl_tree[h[t] * 2 + 1] === 0; t--);
                  e.opt_len += (t + 1) * 3 + 5 + 5 + 4;
                  return t;
                }(e);
                i = e.opt_len + 3 + 7 >>> 3;
                if ((s = e.static_len + 3 + 7 >>> 3) <= i) {
                  i = s;
                }
              } else {
                i = s = n + 5;
              }
              if (n + 4 <= i && t !== -1) {
                j(e, t, n, r);
              } else if (e.strategy === 4 || s === i) {
                b(e, 2 + (r ? 1 : 0), 3);
                P(e, l, d);
              } else {
                b(e, 4 + (r ? 1 : 0), 3);
                (function (e, t, n, r) {
                  var i;
                  b(e, t - 257, 5);
                  b(e, n - 1, 5);
                  b(e, r - 4, 4);
                  i = 0;
                  for (; i < r; i++) {
                    b(e, e.bl_tree[h[i] * 2 + 1], 3);
                  }
                  I(e, e.dyn_ltree, t - 1);
                  I(e, e.dyn_dtree, n - 1);
                })(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, a + 1);
                P(e, e.dyn_ltree, e.dyn_dtree);
              }
              S(e);
              if (r) {
                E(e);
              }
            };
            t._tr_tally = function (e, t, n) {
              e.pending_buf[e.d_buf + e.last_lit * 2] = t >>> 8 & 255;
              e.pending_buf[e.d_buf + e.last_lit * 2 + 1] = t & 255;
              e.pending_buf[e.l_buf + e.last_lit] = n & 255;
              e.last_lit++;
              if (t === 0) {
                e.dyn_ltree[n * 2]++;
              } else {
                e.matches++;
                t--;
                e.dyn_ltree[(u[n] + 256 + 1) * 2]++;
                e.dyn_dtree[w(t) * 2]++;
              }
              return e.last_lit === e.lit_bufsize - 1;
            };
            t._tr_align = function (e) {
              b(e, 2, 3);
              T(e, 256, l);
              (function (e) {
                if (e.bi_valid === 16) {
                  x(e, e.bi_buf);
                  e.bi_buf = 0;
                  e.bi_valid = 0;
                } else if (e.bi_valid >= 8) {
                  e.pending_buf[e.pending++] = e.bi_buf & 255;
                  e.bi_buf >>= 8;
                  e.bi_valid -= 8;
                }
              })(e);
            };
          },
        44442(e) {
            "use strict";
        
            e.exports = function () {
              this.input = null;
              this.next_in = 0;
              this.avail_in = 0;
              this.total_in = 0;
              this.output = null;
              this.next_out = 0;
              this.avail_out = 0;
              this.total_out = 0;
              this.msg = "";
              this.state = null;
              this.data_type = 2;
              this.adler = 0;
            };
          },
        76578(e) {
            "use strict";
        
            e.exports = ["Float16Array", "Float32Array", "Float64Array", "Int8Array", "Int16Array", "Int32Array", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array"];
          },
        65606(e) {
            var t;
            var n;
            var r = e.exports = {};
            function i() {
              throw new Error("setTimeout has not been defined");
            }
            function s() {
              throw new Error("clearTimeout has not been defined");
            }
            function a(e) {
              if (t === setTimeout) {
                return setTimeout(e, 0);
              }
              if ((t === i || !t) && setTimeout) {
                t = setTimeout;
                return setTimeout(e, 0);
              }
              try {
                return t(e, 0);
              } catch (n) {
                try {
                  return t.call(null, e, 0);
                } catch (n) {
                  return t.call(this, e, 0);
                }
              }
            }
            (function () {
              try {
                t = typeof setTimeout == "function" ? setTimeout : i;
              } catch (e) {
                t = i;
              }
              try {
                n = typeof clearTimeout == "function" ? clearTimeout : s;
              } catch (e) {
                n = s;
              }
            })();
            var o;
            var h = [];
            var l = false;
            var d = -1;
            function c() {
              if (l && o) {
                l = false;
                if (o.length) {
                  h = o.concat(h);
                } else {
                  d = -1;
                }
                if (h.length) {
                  u();
                }
              }
            }
            function u() {
              if (!l) {
                var e = a(c);
                l = true;
                for (var t = h.length; t;) {
                  o = h;
                  h = [];
                  while (++d < t) {
                    if (o) {
                      o[d].run();
                    }
                  }
                  d = -1;
                  t = h.length;
                }
                o = null;
                l = false;
                (function (e) {
                  if (n === clearTimeout) {
                    return clearTimeout(e);
                  }
                  if ((n === s || !n) && clearTimeout) {
                    n = clearTimeout;
                    return clearTimeout(e);
                  }
                  try {
                    return n(e);
                  } catch (t) {
                    try {
                      return n.call(null, e);
                    } catch (t) {
                      return n.call(this, e);
                    }
                  }
                })(e);
              }
            }
            function p(e, t) {
              this.fun = e;
              this.array = t;
            }
            function m() {}
            r.nextTick = function (e) {
              var t = new Array(arguments.length - 1);
              if (arguments.length > 1) {
                for (var n = 1; n < arguments.length; n++) {
                  t[n - 1] = arguments[n];
                }
              }
              h.push(new p(e, t));
              if (h.length === 1 && !l) {
                a(u);
              }
            };
            p.prototype.run = function () {
              this.fun.apply(null, this.array);
            };
            r.title = "browser";
            r.browser = true;
            r.env = {};
            r.argv = [];
            r.version = "";
            r.versions = {};
            r.on = m;
            r.addListener = m;
            r.once = m;
            r.off = m;
            r.removeListener = m;
            r.removeAllListeners = m;
            r.emit = m;
            r.prependListener = m;
            r.prependOnceListener = m;
            r.listeners = function (e) {
              return [];
            };
            r.binding = function (e) {
              throw new Error("process.binding is not supported");
            };
            r.cwd = function () {
              return "/";
            };
            r.chdir = function (e) {
              throw new Error("process.chdir is not supported");
            };
            r.umask = function () {
              return 0;
            };
          }
    });
})();
