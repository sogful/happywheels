(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        58411(e, t, n) {
            "use strict";
        
            var r;
            var i = n(9805);
            var s = n(23665);
            var a = n(53269);
            var o = n(14823);
            var h = n(54674);
            var l = -2;
            var d = 258;
            var c = 262;
            var u = 103;
            var p = 113;
            var m = 666;
            function f(e, t) {
              e.msg = h[t];
              return t;
            }
            function _(e) {
              return (e << 1) - (e > 4 ? 9 : 0);
            }
            function v(e) {
              for (var t = e.length; --t >= 0;) {
                e[t] = 0;
              }
            }
            function y(e) {
              var t = e.state;
              var n = t.pending;
              if (n > e.avail_out) {
                n = e.avail_out;
              }
              if (n !== 0) {
                i.arraySet(e.output, t.pending_buf, t.pending_out, n, e.next_out);
                e.next_out += n;
                t.pending_out += n;
                e.total_out += n;
                e.avail_out -= n;
                t.pending -= n;
                if (t.pending === 0) {
                  t.pending_out = 0;
                }
              }
            }
            function g(e, t) {
              s._tr_flush_block(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t);
              e.block_start = e.strstart;
              y(e.strm);
            }
            function w(e, t) {
              e.pending_buf[e.pending++] = t;
            }
            function x(e, t) {
              e.pending_buf[e.pending++] = t >>> 8 & 255;
              e.pending_buf[e.pending++] = t & 255;
            }
            function b(e, t, n, r) {
              var s = e.avail_in;
              if (s > r) {
                s = r;
              }
              if (s === 0) {
                return 0;
              } else {
                e.avail_in -= s;
                i.arraySet(t, e.input, e.next_in, s, n);
                if (e.state.wrap === 1) {
                  e.adler = a(e.adler, t, s, n);
                } else if (e.state.wrap === 2) {
                  e.adler = o(e.adler, t, s, n);
                }
                e.next_in += s;
                e.total_in += s;
                return s;
              }
            }
            function T(e, t) {
              var n;
              var r;
              var i = e.max_chain_length;
              var s = e.strstart;
              var a = e.prev_length;
              var o = e.nice_match;
              var h = e.strstart > e.w_size - c ? e.strstart - (e.w_size - c) : 0;
              var l = e.window;
              var u = e.w_mask;
              var p = e.prev;
              var m = e.strstart + d;
              var f = l[s + a - 1];
              var _ = l[s + a];
              if (e.prev_length >= e.good_match) {
                i >>= 2;
              }
              if (o > e.lookahead) {
                o = e.lookahead;
              }
              do {
                if (l[(n = t) + a] === _ && l[n + a - 1] === f && l[n] === l[s] && l[++n] === l[s + 1]) {
                  s += 2;
                  n++;
                  do {} while (l[++s] === l[++n] && l[++s] === l[++n] && l[++s] === l[++n] && l[++s] === l[++n] && l[++s] === l[++n] && l[++s] === l[++n] && l[++s] === l[++n] && l[++s] === l[++n] && s < m);
                  r = d - (m - s);
                  s = m - d;
                  if (r > a) {
                    e.match_start = t;
                    a = r;
                    if (r >= o) {
                      break;
                    }
                    f = l[s + a - 1];
                    _ = l[s + a];
                  }
                }
              } while ((t = p[t & u]) > h && --i !== 0);
              if (a <= e.lookahead) {
                return a;
              } else {
                return e.lookahead;
              }
            }
            function A(e) {
              var t;
              var n;
              var r;
              var s;
              var a;
              var o = e.w_size;
              do {
                s = e.window_size - e.lookahead - e.strstart;
                if (e.strstart >= o + (o - c)) {
                  i.arraySet(e.window, e.window, o, o, 0);
                  e.match_start -= o;
                  e.strstart -= o;
                  e.block_start -= o;
                  t = n = e.hash_size;
                  do {
                    r = e.head[--t];
                    e.head[t] = r >= o ? r - o : 0;
                  } while (--n);
                  t = n = o;
                  do {
                    r = e.prev[--t];
                    e.prev[t] = r >= o ? r - o : 0;
                  } while (--n);
                  s += o;
                }
                if (e.strm.avail_in === 0) {
                  break;
                }
                n = b(e.strm, e.window, e.strstart + e.lookahead, s);
                e.lookahead += n;
                if (e.lookahead + e.insert >= 3) {
                  a = e.strstart - e.insert;
                  e.ins_h = e.window[a];
                  e.ins_h = (e.ins_h << e.hash_shift ^ e.window[a + 1]) & e.hash_mask;
                  while (e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[a + 3 - 1]) & e.hash_mask, e.prev[a & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = a, a++, e.insert--, !(e.lookahead + e.insert < 3)));
                }
              } while (e.lookahead < c && e.strm.avail_in !== 0);
            }
            function C(e, t) {
              var n;
              var r;
              while (true) {
                if (e.lookahead < c) {
                  A(e);
                  if (e.lookahead < c && t === 0) {
                    return 1;
                  }
                  if (e.lookahead === 0) {
                    break;
                  }
                }
                n = 0;
                if (e.lookahead >= 3) {
                  e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 3 - 1]) & e.hash_mask;
                  n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
                  e.head[e.ins_h] = e.strstart;
                }
                if (n !== 0 && e.strstart - n <= e.w_size - c) {
                  e.match_length = T(e, n);
                }
                if (e.match_length >= 3) {
                  r = s._tr_tally(e, e.strstart - e.match_start, e.match_length - 3);
                  e.lookahead -= e.match_length;
                  if (e.match_length <= e.max_lazy_match && e.lookahead >= 3) {
                    e.match_length--;
                    do {
                      e.strstart++;
                      e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 3 - 1]) & e.hash_mask;
                      n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
                      e.head[e.ins_h] = e.strstart;
                    } while (--e.match_length !== 0);
                    e.strstart++;
                  } else {
                    e.strstart += e.match_length;
                    e.match_length = 0;
                    e.ins_h = e.window[e.strstart];
                    e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
                  }
                } else {
                  r = s._tr_tally(e, 0, e.window[e.strstart]);
                  e.lookahead--;
                  e.strstart++;
                }
                if (r && (g(e, false), e.strm.avail_out === 0)) {
                  return 1;
                }
              }
              e.insert = e.strstart < 2 ? e.strstart : 2;
              if (t === 4) {
                g(e, true);
                if (e.strm.avail_out === 0) {
                  return 3;
                } else {
                  return 4;
                }
              } else if (e.last_lit && (g(e, false), e.strm.avail_out === 0)) {
                return 1;
              } else {
                return 2;
              }
            }
            function S(e, t) {
              var n;
              var r;
              var i;
              while (true) {
                if (e.lookahead < c) {
                  A(e);
                  if (e.lookahead < c && t === 0) {
                    return 1;
                  }
                  if (e.lookahead === 0) {
                    break;
                  }
                }
                n = 0;
                if (e.lookahead >= 3) {
                  e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 3 - 1]) & e.hash_mask;
                  n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
                  e.head[e.ins_h] = e.strstart;
                }
                e.prev_length = e.match_length;
                e.prev_match = e.match_start;
                e.match_length = 2;
                if (n !== 0 && e.prev_length < e.max_lazy_match && e.strstart - n <= e.w_size - c) {
                  e.match_length = T(e, n);
                  if (e.match_length <= 5 && (e.strategy === 1 || e.match_length === 3 && e.strstart - e.match_start > 4096)) {
                    e.match_length = 2;
                  }
                }
                if (e.prev_length >= 3 && e.match_length <= e.prev_length) {
                  i = e.strstart + e.lookahead - 3;
                  r = s._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - 3);
                  e.lookahead -= e.prev_length - 1;
                  e.prev_length -= 2;
                  do {
                    if (++e.strstart <= i) {
                      e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 3 - 1]) & e.hash_mask;
                      n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
                      e.head[e.ins_h] = e.strstart;
                    }
                  } while (--e.prev_length !== 0);
                  e.match_available = 0;
                  e.match_length = 2;
                  e.strstart++;
                  if (r && (g(e, false), e.strm.avail_out === 0)) {
                    return 1;
                  }
                } else if (e.match_available) {
                  if (r = s._tr_tally(e, 0, e.window[e.strstart - 1])) {
                    g(e, false);
                  }
                  e.strstart++;
                  e.lookahead--;
                  if (e.strm.avail_out === 0) {
                    return 1;
                  }
                } else {
                  e.match_available = 1;
                  e.strstart++;
                  e.lookahead--;
                }
              }
              if (e.match_available) {
                r = s._tr_tally(e, 0, e.window[e.strstart - 1]);
                e.match_available = 0;
              }
              e.insert = e.strstart < 2 ? e.strstart : 2;
              if (t === 4) {
                g(e, true);
                if (e.strm.avail_out === 0) {
                  return 3;
                } else {
                  return 4;
                }
              } else if (e.last_lit && (g(e, false), e.strm.avail_out === 0)) {
                return 1;
              } else {
                return 2;
              }
            }
            function E(e, t, n, r, i) {
              this.good_length = e;
              this.max_lazy = t;
              this.nice_length = n;
              this.max_chain = r;
              this.func = i;
            }
            function O() {
              this.strm = null;
              this.status = 0;
              this.pending_buf = null;
              this.pending_buf_size = 0;
              this.pending_out = 0;
              this.pending = 0;
              this.wrap = 0;
              this.gzhead = null;
              this.gzindex = 0;
              this.method = 8;
              this.last_flush = -1;
              this.w_size = 0;
              this.w_bits = 0;
              this.w_mask = 0;
              this.window = null;
              this.window_size = 0;
              this.prev = null;
              this.head = null;
              this.ins_h = 0;
              this.hash_size = 0;
              this.hash_bits = 0;
              this.hash_mask = 0;
              this.hash_shift = 0;
              this.block_start = 0;
              this.match_length = 0;
              this.prev_match = 0;
              this.match_available = 0;
              this.strstart = 0;
              this.match_start = 0;
              this.lookahead = 0;
              this.prev_length = 0;
              this.max_chain_length = 0;
              this.max_lazy_match = 0;
              this.level = 0;
              this.strategy = 0;
              this.good_match = 0;
              this.nice_match = 0;
              this.dyn_ltree = new i.Buf16(1146);
              this.dyn_dtree = new i.Buf16(122);
              this.bl_tree = new i.Buf16(78);
              v(this.dyn_ltree);
              v(this.dyn_dtree);
              v(this.bl_tree);
              this.l_desc = null;
              this.d_desc = null;
              this.bl_desc = null;
              this.bl_count = new i.Buf16(16);
              this.heap = new i.Buf16(573);
              v(this.heap);
              this.heap_len = 0;
              this.heap_max = 0;
              this.depth = new i.Buf16(573);
              v(this.depth);
              this.l_buf = 0;
              this.lit_bufsize = 0;
              this.last_lit = 0;
              this.d_buf = 0;
              this.opt_len = 0;
              this.static_len = 0;
              this.matches = 0;
              this.insert = 0;
              this.bi_buf = 0;
              this.bi_valid = 0;
            }
            function k(e) {
              var t;
              if (e && e.state) {
                e.total_in = e.total_out = 0;
                e.data_type = 2;
                (t = e.state).pending = 0;
                t.pending_out = 0;
                if (t.wrap < 0) {
                  t.wrap = -t.wrap;
                }
                t.status = t.wrap ? 42 : p;
                e.adler = t.wrap === 2 ? 0 : 1;
                t.last_flush = 0;
                s._tr_init(t);
                return 0;
              } else {
                return f(e, l);
              }
            }
            function P(e) {
              var t;
              var n = k(e);
              if (n === 0) {
                (t = e.state).window_size = t.w_size * 2;
                v(t.head);
                t.max_lazy_match = r[t.level].max_lazy;
                t.good_match = r[t.level].good_length;
                t.nice_match = r[t.level].nice_length;
                t.max_chain_length = r[t.level].max_chain;
                t.strstart = 0;
                t.block_start = 0;
                t.lookahead = 0;
                t.insert = 0;
                t.match_length = t.prev_length = 2;
                t.match_available = 0;
                t.ins_h = 0;
              }
              return n;
            }
            function M(e, t, n, r, s, a) {
              if (!e) {
                return l;
              }
              var o = 1;
              if (t === -1) {
                t = 6;
              }
              if (r < 0) {
                o = 0;
                r = -r;
              } else if (r > 15) {
                o = 2;
                r -= 16;
              }
              if (s < 1 || s > 9 || n !== 8 || r < 8 || r > 15 || t < 0 || t > 9 || a < 0 || a > 4) {
                return f(e, l);
              }
              if (r === 8) {
                r = 9;
              }
              var h = new O();
              e.state = h;
              h.strm = e;
              h.wrap = o;
              h.gzhead = null;
              h.w_bits = r;
              h.w_size = 1 << h.w_bits;
              h.w_mask = h.w_size - 1;
              h.hash_bits = s + 7;
              h.hash_size = 1 << h.hash_bits;
              h.hash_mask = h.hash_size - 1;
              h.hash_shift = ~~((h.hash_bits + 3 - 1) / 3);
              h.window = new i.Buf8(h.w_size * 2);
              h.head = new i.Buf16(h.hash_size);
              h.prev = new i.Buf16(h.w_size);
              h.lit_bufsize = 1 << s + 6;
              h.pending_buf_size = h.lit_bufsize * 4;
              h.pending_buf = new i.Buf8(h.pending_buf_size);
              h.d_buf = h.lit_bufsize * 1;
              h.l_buf = h.lit_bufsize * 3;
              h.level = t;
              h.strategy = a;
              h.method = n;
              return P(e);
            }
            r = [new E(0, 0, 0, 0, function (e, t) {
              var n = 65535;
              for (n > e.pending_buf_size - 5 && (n = e.pending_buf_size - 5);;) {
                if (e.lookahead <= 1) {
                  A(e);
                  if (e.lookahead === 0 && t === 0) {
                    return 1;
                  }
                  if (e.lookahead === 0) {
                    break;
                  }
                }
                e.strstart += e.lookahead;
                e.lookahead = 0;
                var r = e.block_start + n;
                if ((e.strstart === 0 || e.strstart >= r) && (e.lookahead = e.strstart - r, e.strstart = r, g(e, false), e.strm.avail_out === 0)) {
                  return 1;
                }
                if (e.strstart - e.block_start >= e.w_size - c && (g(e, false), e.strm.avail_out === 0)) {
                  return 1;
                }
              }
              e.insert = 0;
              if (t === 4) {
                g(e, true);
                if (e.strm.avail_out === 0) {
                  return 3;
                } else {
                  return 4;
                }
              } else {
                if (e.strstart > e.block_start) {
                  g(e, false);
                  e.strm.avail_out;
                }
                return 1;
              }
            }), new E(4, 4, 8, 4, C), new E(4, 5, 16, 8, C), new E(4, 6, 32, 32, C), new E(4, 4, 16, 16, S), new E(8, 16, 32, 32, S), new E(8, 16, 128, 128, S), new E(8, 32, 128, 256, S), new E(32, 128, 258, 1024, S), new E(32, 258, 258, 4096, S)];
            t.deflateInit = function (e, t) {
              return M(e, t, 8, 15, 8, 0);
            };
            t.deflateInit2 = M;
            t.deflateReset = P;
            t.deflateResetKeep = k;
            t.deflateSetHeader = function (e, t) {
              if (e && e.state) {
                if (e.state.wrap !== 2) {
                  return l;
                } else {
                  e.state.gzhead = t;
                  return 0;
                }
              } else {
                return l;
              }
            };
            t.deflate = function (e, t) {
              var n;
              var i;
              var a;
              var h;
              if (!e || !e.state || t > 5 || t < 0) {
                if (e) {
                  return f(e, l);
                } else {
                  return l;
                }
              }
              i = e.state;
              if (!e.output || !e.input && e.avail_in !== 0 || i.status === m && t !== 4) {
                return f(e, e.avail_out === 0 ? -5 : l);
              }
              i.strm = e;
              n = i.last_flush;
              i.last_flush = t;
              if (i.status === 42) {
                if (i.wrap === 2) {
                  e.adler = 0;
                  w(i, 31);
                  w(i, 139);
                  w(i, 8);
                  if (i.gzhead) {
                    w(i, (i.gzhead.text ? 1 : 0) + (i.gzhead.hcrc ? 2 : 0) + (i.gzhead.extra ? 4 : 0) + (i.gzhead.name ? 8 : 0) + (i.gzhead.comment ? 16 : 0));
                    w(i, i.gzhead.time & 255);
                    w(i, i.gzhead.time >> 8 & 255);
                    w(i, i.gzhead.time >> 16 & 255);
                    w(i, i.gzhead.time >> 24 & 255);
                    w(i, i.level === 9 ? 2 : i.strategy >= 2 || i.level < 2 ? 4 : 0);
                    w(i, i.gzhead.os & 255);
                    if (i.gzhead.extra && i.gzhead.extra.length) {
                      w(i, i.gzhead.extra.length & 255);
                      w(i, i.gzhead.extra.length >> 8 & 255);
                    }
                    if (i.gzhead.hcrc) {
                      e.adler = o(e.adler, i.pending_buf, i.pending, 0);
                    }
                    i.gzindex = 0;
                    i.status = 69;
                  } else {
                    w(i, 0);
                    w(i, 0);
                    w(i, 0);
                    w(i, 0);
                    w(i, 0);
                    w(i, i.level === 9 ? 2 : i.strategy >= 2 || i.level < 2 ? 4 : 0);
                    w(i, 3);
                    i.status = p;
                  }
                } else {
                  var c = 8 + (i.w_bits - 8 << 4) << 8;
                  c |= (i.strategy >= 2 || i.level < 2 ? 0 : i.level < 6 ? 1 : i.level === 6 ? 2 : 3) << 6;
                  if (i.strstart !== 0) {
                    c |= 32;
                  }
                  c += 31 - c % 31;
                  i.status = p;
                  x(i, c);
                  if (i.strstart !== 0) {
                    x(i, e.adler >>> 16);
                    x(i, e.adler & 65535);
                  }
                  e.adler = 1;
                }
              }
              if (i.status === 69) {
                if (i.gzhead.extra) {
                  for (a = i.pending; i.gzindex < (i.gzhead.extra.length & 65535) && (i.pending !== i.pending_buf_size || (i.gzhead.hcrc && i.pending > a && (e.adler = o(e.adler, i.pending_buf, i.pending - a, a)), y(e), a = i.pending, i.pending !== i.pending_buf_size));) {
                    w(i, i.gzhead.extra[i.gzindex] & 255);
                    i.gzindex++;
                  }
                  if (i.gzhead.hcrc && i.pending > a) {
                    e.adler = o(e.adler, i.pending_buf, i.pending - a, a);
                  }
                  if (i.gzindex === i.gzhead.extra.length) {
                    i.gzindex = 0;
                    i.status = 73;
                  }
                } else {
                  i.status = 73;
                }
              }
              if (i.status === 73) {
                if (i.gzhead.name) {
                  a = i.pending;
                  do {
                    if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > a && (e.adler = o(e.adler, i.pending_buf, i.pending - a, a)), y(e), a = i.pending, i.pending === i.pending_buf_size)) {
                      h = 1;
                      break;
                    }
                    h = i.gzindex < i.gzhead.name.length ? i.gzhead.name.charCodeAt(i.gzindex++) & 255 : 0;
                    w(i, h);
                  } while (h !== 0);
                  if (i.gzhead.hcrc && i.pending > a) {
                    e.adler = o(e.adler, i.pending_buf, i.pending - a, a);
                  }
                  if (h === 0) {
                    i.gzindex = 0;
                    i.status = 91;
                  }
                } else {
                  i.status = 91;
                }
              }
              if (i.status === 91) {
                if (i.gzhead.comment) {
                  a = i.pending;
                  do {
                    if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > a && (e.adler = o(e.adler, i.pending_buf, i.pending - a, a)), y(e), a = i.pending, i.pending === i.pending_buf_size)) {
                      h = 1;
                      break;
                    }
                    h = i.gzindex < i.gzhead.comment.length ? i.gzhead.comment.charCodeAt(i.gzindex++) & 255 : 0;
                    w(i, h);
                  } while (h !== 0);
                  if (i.gzhead.hcrc && i.pending > a) {
                    e.adler = o(e.adler, i.pending_buf, i.pending - a, a);
                  }
                  if (h === 0) {
                    i.status = u;
                  }
                } else {
                  i.status = u;
                }
              }
              if (i.status === u) {
                if (i.gzhead.hcrc) {
                  if (i.pending + 2 > i.pending_buf_size) {
                    y(e);
                  }
                  if (i.pending + 2 <= i.pending_buf_size) {
                    w(i, e.adler & 255);
                    w(i, e.adler >> 8 & 255);
                    e.adler = 0;
                    i.status = p;
                  }
                } else {
                  i.status = p;
                }
              }
              if (i.pending !== 0) {
                y(e);
                if (e.avail_out === 0) {
                  i.last_flush = -1;
                  return 0;
                }
              } else if (e.avail_in === 0 && _(t) <= _(n) && t !== 4) {
                return f(e, -5);
              }
              if (i.status === m && e.avail_in !== 0) {
                return f(e, -5);
              }
              if (e.avail_in !== 0 || i.lookahead !== 0 || t !== 0 && i.status !== m) {
                var b = i.strategy === 2 ? function (e, t) {
                  var n;
                  for (;;) {
                    if (e.lookahead === 0 && (A(e), e.lookahead === 0)) {
                      if (t === 0) {
                        return 1;
                      }
                      break;
                    }
                    e.match_length = 0;
                    n = s._tr_tally(e, 0, e.window[e.strstart]);
                    e.lookahead--;
                    e.strstart++;
                    if (n && (g(e, false), e.strm.avail_out === 0)) {
                      return 1;
                    }
                  }
                  e.insert = 0;
                  if (t === 4) {
                    g(e, true);
                    if (e.strm.avail_out === 0) {
                      return 3;
                    } else {
                      return 4;
                    }
                  } else if (e.last_lit && (g(e, false), e.strm.avail_out === 0)) {
                    return 1;
                  } else {
                    return 2;
                  }
                }(i, t) : i.strategy === 3 ? function (e, t) {
                  var n;
                  var r;
                  var i;
                  var a;
                  var o = e.window;
                  while (true) {
                    if (e.lookahead <= d) {
                      A(e);
                      if (e.lookahead <= d && t === 0) {
                        return 1;
                      }
                      if (e.lookahead === 0) {
                        break;
                      }
                    }
                    e.match_length = 0;
                    if (e.lookahead >= 3 && e.strstart > 0 && (r = o[i = e.strstart - 1]) === o[++i] && r === o[++i] && r === o[++i]) {
                      a = e.strstart + d;
                      do {} while (r === o[++i] && r === o[++i] && r === o[++i] && r === o[++i] && r === o[++i] && r === o[++i] && r === o[++i] && r === o[++i] && i < a);
                      e.match_length = d - (a - i);
                      if (e.match_length > e.lookahead) {
                        e.match_length = e.lookahead;
                      }
                    }
                    if (e.match_length >= 3) {
                      n = s._tr_tally(e, 1, e.match_length - 3);
                      e.lookahead -= e.match_length;
                      e.strstart += e.match_length;
                      e.match_length = 0;
                    } else {
                      n = s._tr_tally(e, 0, e.window[e.strstart]);
                      e.lookahead--;
                      e.strstart++;
                    }
                    if (n && (g(e, false), e.strm.avail_out === 0)) {
                      return 1;
                    }
                  }
                  e.insert = 0;
                  if (t === 4) {
                    g(e, true);
                    if (e.strm.avail_out === 0) {
                      return 3;
                    } else {
                      return 4;
                    }
                  } else if (e.last_lit && (g(e, false), e.strm.avail_out === 0)) {
                    return 1;
                  } else {
                    return 2;
                  }
                }(i, t) : r[i.level].func(i, t);
                if (b === 3 || b === 4) {
                  i.status = m;
                }
                if (b === 1 || b === 3) {
                  if (e.avail_out === 0) {
                    i.last_flush = -1;
                  }
                  return 0;
                }
                if (b === 2 && (t === 1 ? s._tr_align(i) : t !== 5 && (s._tr_stored_block(i, 0, 0, false), t === 3 && (v(i.head), i.lookahead === 0 && (i.strstart = 0, i.block_start = 0, i.insert = 0))), y(e), e.avail_out === 0)) {
                  i.last_flush = -1;
                  return 0;
                }
              }
              if (t !== 4) {
                return 0;
              } else if (i.wrap <= 0) {
                return 1;
              } else {
                if (i.wrap === 2) {
                  w(i, e.adler & 255);
                  w(i, e.adler >> 8 & 255);
                  w(i, e.adler >> 16 & 255);
                  w(i, e.adler >> 24 & 255);
                  w(i, e.total_in & 255);
                  w(i, e.total_in >> 8 & 255);
                  w(i, e.total_in >> 16 & 255);
                  w(i, e.total_in >> 24 & 255);
                } else {
                  x(i, e.adler >>> 16);
                  x(i, e.adler & 65535);
                }
                y(e);
                if (i.wrap > 0) {
                  i.wrap = -i.wrap;
                }
                if (i.pending !== 0) {
                  return 0;
                } else {
                  return 1;
                }
              }
            };
            t.deflateEnd = function (e) {
              var t;
              if (e && e.state) {
                if ((t = e.state.status) !== 42 && t !== 69 && t !== 73 && t !== 91 && t !== u && t !== p && t !== m) {
                  return f(e, l);
                } else {
                  e.state = null;
                  if (t === p) {
                    return f(e, -3);
                  } else {
                    return 0;
                  }
                }
              } else {
                return l;
              }
            };
            t.deflateSetDictionary = function (e, t) {
              var n;
              var r;
              var s;
              var o;
              var h;
              var d;
              var c;
              var u;
              var p = t.length;
              if (!e || !e.state) {
                return l;
              }
              if ((o = (n = e.state).wrap) === 2 || o === 1 && n.status !== 42 || n.lookahead) {
                return l;
              }
              if (o === 1) {
                e.adler = a(e.adler, t, p, 0);
              }
              n.wrap = 0;
              if (p >= n.w_size) {
                if (o === 0) {
                  v(n.head);
                  n.strstart = 0;
                  n.block_start = 0;
                  n.insert = 0;
                }
                u = new i.Buf8(n.w_size);
                i.arraySet(u, t, p - n.w_size, n.w_size, 0);
                t = u;
                p = n.w_size;
              }
              h = e.avail_in;
              d = e.next_in;
              c = e.input;
              e.avail_in = p;
              e.next_in = 0;
              e.input = t;
              A(n);
              while (n.lookahead >= 3) {
                r = n.strstart;
                s = n.lookahead - 2;
                do {
                  n.ins_h = (n.ins_h << n.hash_shift ^ n.window[r + 3 - 1]) & n.hash_mask;
                  n.prev[r & n.w_mask] = n.head[n.ins_h];
                  n.head[n.ins_h] = r;
                  r++;
                } while (--s);
                n.strstart = r;
                n.lookahead = 2;
                A(n);
              }
              n.strstart += n.lookahead;
              n.block_start = n.strstart;
              n.insert = n.lookahead;
              n.lookahead = 0;
              n.match_length = n.prev_length = 2;
              n.match_available = 0;
              e.next_in = d;
              e.input = c;
              e.avail_in = h;
              n.wrap = o;
              return 0;
            };
            t.deflateInfo = "pako deflate (from Nodeca project)";
          }
    });
})();
