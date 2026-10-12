(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        71447(e, t, n) {
            "use strict";
        
            var r = n(9805);
            var i = n(53269);
            var s = n(14823);
            var a = n(47293);
            var o = n(21998);
            var h = -2;
            var l = 12;
            var d = 30;
            function c(e) {
              return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((e & 65280) << 8) + ((e & 255) << 24);
            }
            function u() {
              this.mode = 0;
              this.last = false;
              this.wrap = 0;
              this.havedict = false;
              this.flags = 0;
              this.dmax = 0;
              this.check = 0;
              this.total = 0;
              this.head = null;
              this.wbits = 0;
              this.wsize = 0;
              this.whave = 0;
              this.wnext = 0;
              this.window = null;
              this.hold = 0;
              this.bits = 0;
              this.length = 0;
              this.offset = 0;
              this.extra = 0;
              this.lencode = null;
              this.distcode = null;
              this.lenbits = 0;
              this.distbits = 0;
              this.ncode = 0;
              this.nlen = 0;
              this.ndist = 0;
              this.have = 0;
              this.next = null;
              this.lens = new r.Buf16(320);
              this.work = new r.Buf16(288);
              this.lendyn = null;
              this.distdyn = null;
              this.sane = 0;
              this.back = 0;
              this.was = 0;
            }
            function p(e) {
              var t;
              if (e && e.state) {
                t = e.state;
                e.total_in = e.total_out = t.total = 0;
                e.msg = "";
                if (t.wrap) {
                  e.adler = t.wrap & 1;
                }
                t.mode = 1;
                t.last = 0;
                t.havedict = 0;
                t.dmax = 32768;
                t.head = null;
                t.hold = 0;
                t.bits = 0;
                t.lencode = t.lendyn = new r.Buf32(852);
                t.distcode = t.distdyn = new r.Buf32(592);
                t.sane = 1;
                t.back = -1;
                return 0;
              } else {
                return h;
              }
            }
            function m(e) {
              var t;
              if (e && e.state) {
                (t = e.state).wsize = 0;
                t.whave = 0;
                t.wnext = 0;
                return p(e);
              } else {
                return h;
              }
            }
            function f(e, t) {
              var n;
              var r;
              if (e && e.state) {
                r = e.state;
                if (t < 0) {
                  n = 0;
                  t = -t;
                } else {
                  n = 1 + (t >> 4);
                  if (t < 48) {
                    t &= 15;
                  }
                }
                if (t && (t < 8 || t > 15)) {
                  return h;
                } else {
                  if (r.window !== null && r.wbits !== t) {
                    r.window = null;
                  }
                  r.wrap = n;
                  r.wbits = t;
                  return m(e);
                }
              } else {
                return h;
              }
            }
            function _(e, t) {
              var n;
              var r;
              if (e) {
                r = new u();
                e.state = r;
                r.window = null;
                if ((n = f(e, t)) !== 0) {
                  e.state = null;
                }
                return n;
              } else {
                return h;
              }
            }
            var v;
            var y;
            var g = true;
            function w(e) {
              if (g) {
                var t;
                v = new r.Buf32(512);
                y = new r.Buf32(32);
                t = 0;
                while (t < 144) {
                  e.lens[t++] = 8;
                }
                while (t < 256) {
                  e.lens[t++] = 9;
                }
                while (t < 280) {
                  e.lens[t++] = 7;
                }
                while (t < 288) {
                  e.lens[t++] = 8;
                }
                o(1, e.lens, 0, 288, v, 0, e.work, {
                  bits: 9
                });
                t = 0;
                while (t < 32) {
                  e.lens[t++] = 5;
                }
                o(2, e.lens, 0, 32, y, 0, e.work, {
                  bits: 5
                });
                g = false;
              }
              e.lencode = v;
              e.lenbits = 9;
              e.distcode = y;
              e.distbits = 5;
            }
            function x(e, t, n, i) {
              var s;
              var a = e.state;
              if (a.window === null) {
                a.wsize = 1 << a.wbits;
                a.wnext = 0;
                a.whave = 0;
                a.window = new r.Buf8(a.wsize);
              }
              if (i >= a.wsize) {
                r.arraySet(a.window, t, n - a.wsize, a.wsize, 0);
                a.wnext = 0;
                a.whave = a.wsize;
              } else {
                if ((s = a.wsize - a.wnext) > i) {
                  s = i;
                }
                r.arraySet(a.window, t, n - i, s, a.wnext);
                if (i -= s) {
                  r.arraySet(a.window, t, n - i, i, 0);
                  a.wnext = i;
                  a.whave = a.wsize;
                } else {
                  a.wnext += s;
                  if (a.wnext === a.wsize) {
                    a.wnext = 0;
                  }
                  if (a.whave < a.wsize) {
                    a.whave += s;
                  }
                }
              }
              return 0;
            }
            t.inflateReset = m;
            t.inflateReset2 = f;
            t.inflateResetKeep = p;
            t.inflateInit = function (e) {
              return _(e, 15);
            };
            t.inflateInit2 = _;
            t.inflate = function (e, t) {
              var n;
              var u;
              var p;
              var m;
              var f;
              var _;
              var v;
              var y;
              var g;
              var b;
              var T;
              var A;
              var C;
              var S;
              var E;
              var O;
              var k;
              var P;
              var M;
              var R;
              var I;
              var L;
              var j;
              var B;
              var D = 0;
              var F = new r.Buf8(4);
              var N = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
              if (!e || !e.state || !e.output || !e.input && e.avail_in !== 0) {
                return h;
              }
              if ((n = e.state).mode === l) {
                n.mode = 13;
              }
              f = e.next_out;
              p = e.output;
              v = e.avail_out;
              m = e.next_in;
              u = e.input;
              _ = e.avail_in;
              y = n.hold;
              g = n.bits;
              b = _;
              T = v;
              L = 0;
              e: while (true) {
                switch (n.mode) {
                  case 1:
                    if (n.wrap === 0) {
                      n.mode = 13;
                      break;
                    }
                    while (g < 16) {
                      if (_ === 0) {
                        break e;
                      }
                      _--;
                      y += u[m++] << g;
                      g += 8;
                    }
                    if (n.wrap & 2 && y === 35615) {
                      n.check = 0;
                      F[0] = y & 255;
                      F[1] = y >>> 8 & 255;
                      n.check = s(n.check, F, 2, 0);
                      y = 0;
                      g = 0;
                      n.mode = 2;
                      break;
                    }
                    n.flags = 0;
                    if (n.head) {
                      n.head.done = false;
                    }
                    if (!(n.wrap & 1) || (((y & 255) << 8) + (y >> 8)) % 31) {
                      e.msg = "incorrect header check";
                      n.mode = d;
                      break;
                    }
                    if ((y & 15) != 8) {
                      e.msg = "unknown compression method";
                      n.mode = d;
                      break;
                    }
                    g -= 4;
                    I = 8 + ((y >>>= 4) & 15);
                    if (n.wbits === 0) {
                      n.wbits = I;
                    } else if (I > n.wbits) {
                      e.msg = "invalid window size";
                      n.mode = d;
                      break;
                    }
                    n.dmax = 1 << I;
                    e.adler = n.check = 1;
                    n.mode = y & 512 ? 10 : l;
                    y = 0;
                    g = 0;
                    break;
                  case 2:
                    while (g < 16) {
                      if (_ === 0) {
                        break e;
                      }
                      _--;
                      y += u[m++] << g;
                      g += 8;
                    }
                    n.flags = y;
                    if ((n.flags & 255) != 8) {
                      e.msg = "unknown compression method";
                      n.mode = d;
                      break;
                    }
                    if (n.flags & 57344) {
                      e.msg = "unknown header flags set";
                      n.mode = d;
                      break;
                    }
                    if (n.head) {
                      n.head.text = y >> 8 & 1;
                    }
                    if (n.flags & 512) {
                      F[0] = y & 255;
                      F[1] = y >>> 8 & 255;
                      n.check = s(n.check, F, 2, 0);
                    }
                    y = 0;
                    g = 0;
                    n.mode = 3;
                  case 3:
                    while (g < 32) {
                      if (_ === 0) {
                        break e;
                      }
                      _--;
                      y += u[m++] << g;
                      g += 8;
                    }
                    if (n.head) {
                      n.head.time = y;
                    }
                    if (n.flags & 512) {
                      F[0] = y & 255;
                      F[1] = y >>> 8 & 255;
                      F[2] = y >>> 16 & 255;
                      F[3] = y >>> 24 & 255;
                      n.check = s(n.check, F, 4, 0);
                    }
                    y = 0;
                    g = 0;
                    n.mode = 4;
                  case 4:
                    while (g < 16) {
                      if (_ === 0) {
                        break e;
                      }
                      _--;
                      y += u[m++] << g;
                      g += 8;
                    }
                    if (n.head) {
                      n.head.xflags = y & 255;
                      n.head.os = y >> 8;
                    }
                    if (n.flags & 512) {
                      F[0] = y & 255;
                      F[1] = y >>> 8 & 255;
                      n.check = s(n.check, F, 2, 0);
                    }
                    y = 0;
                    g = 0;
                    n.mode = 5;
                  case 5:
                    if (n.flags & 1024) {
                      while (g < 16) {
                        if (_ === 0) {
                          break e;
                        }
                        _--;
                        y += u[m++] << g;
                        g += 8;
                      }
                      n.length = y;
                      if (n.head) {
                        n.head.extra_len = y;
                      }
                      if (n.flags & 512) {
                        F[0] = y & 255;
                        F[1] = y >>> 8 & 255;
                        n.check = s(n.check, F, 2, 0);
                      }
                      y = 0;
                      g = 0;
                    } else if (n.head) {
                      n.head.extra = null;
                    }
                    n.mode = 6;
                  case 6:
                    if (n.flags & 1024 && ((A = n.length) > _ && (A = _), A && (n.head && (I = n.head.extra_len - n.length, n.head.extra ||= new Array(n.head.extra_len), r.arraySet(n.head.extra, u, m, A, I)), n.flags & 512 && (n.check = s(n.check, u, A, m)), _ -= A, m += A, n.length -= A), n.length)) {
                      break e;
                    }
                    n.length = 0;
                    n.mode = 7;
                  case 7:
                    if (n.flags & 2048) {
                      if (_ === 0) {
                        break e;
                      }
                      A = 0;
                      do {
                        I = u[m + A++];
                        if (n.head && I && n.length < 65536) {
                          n.head.name += String.fromCharCode(I);
                        }
                      } while (I && A < _);
                      if (n.flags & 512) {
                        n.check = s(n.check, u, A, m);
                      }
                      _ -= A;
                      m += A;
                      if (I) {
                        break e;
                      }
                    } else if (n.head) {
                      n.head.name = null;
                    }
                    n.length = 0;
                    n.mode = 8;
                  case 8:
                    if (n.flags & 4096) {
                      if (_ === 0) {
                        break e;
                      }
                      A = 0;
                      do {
                        I = u[m + A++];
                        if (n.head && I && n.length < 65536) {
                          n.head.comment += String.fromCharCode(I);
                        }
                      } while (I && A < _);
                      if (n.flags & 512) {
                        n.check = s(n.check, u, A, m);
                      }
                      _ -= A;
                      m += A;
                      if (I) {
                        break e;
                      }
                    } else if (n.head) {
                      n.head.comment = null;
                    }
                    n.mode = 9;
                  case 9:
                    if (n.flags & 512) {
                      while (g < 16) {
                        if (_ === 0) {
                          break e;
                        }
                        _--;
                        y += u[m++] << g;
                        g += 8;
                      }
                      if (y !== (n.check & 65535)) {
                        e.msg = "header crc mismatch";
                        n.mode = d;
                        break;
                      }
                      y = 0;
                      g = 0;
                    }
                    if (n.head) {
                      n.head.hcrc = n.flags >> 9 & 1;
                      n.head.done = true;
                    }
                    e.adler = n.check = 0;
                    n.mode = l;
                    break;
                  case 10:
                    while (g < 32) {
                      if (_ === 0) {
                        break e;
                      }
                      _--;
                      y += u[m++] << g;
                      g += 8;
                    }
                    e.adler = n.check = c(y);
                    y = 0;
                    g = 0;
                    n.mode = 11;
                  case 11:
                    if (n.havedict === 0) {
                      e.next_out = f;
                      e.avail_out = v;
                      e.next_in = m;
                      e.avail_in = _;
                      n.hold = y;
                      n.bits = g;
                      return 2;
                    }
                    e.adler = n.check = 1;
                    n.mode = l;
                  case l:
                    if (t === 5 || t === 6) {
                      break e;
                    }
                  case 13:
                    if (n.last) {
                      y >>>= g & 7;
                      g -= g & 7;
                      n.mode = 27;
                      break;
                    }
                    while (g < 3) {
                      if (_ === 0) {
                        break e;
                      }
                      _--;
                      y += u[m++] << g;
                      g += 8;
                    }
                    n.last = y & 1;
                    g -= 1;
                    switch ((y >>>= 1) & 3) {
                      case 0:
                        n.mode = 14;
                        break;
                      case 1:
                        w(n);
                        n.mode = 20;
                        if (t === 6) {
                          y >>>= 2;
                          g -= 2;
                          break e;
                        }
                        break;
                      case 2:
                        n.mode = 17;
                        break;
                      case 3:
                        e.msg = "invalid block type";
                        n.mode = d;
                    }
                    y >>>= 2;
                    g -= 2;
                    break;
                  case 14:
                    y >>>= g & 7;
                    g -= g & 7;
                    while (g < 32) {
                      if (_ === 0) {
                        break e;
                      }
                      _--;
                      y += u[m++] << g;
                      g += 8;
                    }
                    if ((y & 65535) != (y >>> 16 ^ 65535)) {
                      e.msg = "invalid stored block lengths";
                      n.mode = d;
                      break;
                    }
                    n.length = y & 65535;
                    y = 0;
                    g = 0;
                    n.mode = 15;
                    if (t === 6) {
                      break e;
                    }
                  case 15:
                    n.mode = 16;
                  case 16:
                    if (A = n.length) {
                      if (A > _) {
                        A = _;
                      }
                      if (A > v) {
                        A = v;
                      }
                      if (A === 0) {
                        break e;
                      }
                      r.arraySet(p, u, m, A, f);
                      _ -= A;
                      m += A;
                      v -= A;
                      f += A;
                      n.length -= A;
                      break;
                    }
                    n.mode = l;
                    break;
                  case 17:
                    while (g < 14) {
                      if (_ === 0) {
                        break e;
                      }
                      _--;
                      y += u[m++] << g;
                      g += 8;
                    }
                    n.nlen = 257 + (y & 31);
                    y >>>= 5;
                    g -= 5;
                    n.ndist = 1 + (y & 31);
                    y >>>= 5;
                    g -= 5;
                    n.ncode = 4 + (y & 15);
                    y >>>= 4;
                    g -= 4;
                    if (n.nlen > 286 || n.ndist > 30) {
                      e.msg = "too many length or distance symbols";
                      n.mode = d;
                      break;
                    }
                    n.have = 0;
                    n.mode = 18;
                  case 18:
                    while (n.have < n.ncode) {
                      while (g < 3) {
                        if (_ === 0) {
                          break e;
                        }
                        _--;
                        y += u[m++] << g;
                        g += 8;
                      }
                      n.lens[N[n.have++]] = y & 7;
                      y >>>= 3;
                      g -= 3;
                    }
                    while (n.have < 19) {
                      n.lens[N[n.have++]] = 0;
                    }
                    n.lencode = n.lendyn;
                    n.lenbits = 7;
                    j = {
                      bits: n.lenbits
                    };
                    L = o(0, n.lens, 0, 19, n.lencode, 0, n.work, j);
                    n.lenbits = j.bits;
                    if (L) {
                      e.msg = "invalid code lengths set";
                      n.mode = d;
                      break;
                    }
                    n.have = 0;
                    n.mode = 19;
                  case 19:
                    while (n.have < n.nlen + n.ndist) {
                      while (O = (D = n.lencode[y & (1 << n.lenbits) - 1]) >>> 16 & 255, k = D & 65535, !((E = D >>> 24) <= g)) {
                        if (_ === 0) {
                          break e;
                        }
                        _--;
                        y += u[m++] << g;
                        g += 8;
                      }
                      if (k < 16) {
                        y >>>= E;
                        g -= E;
                        n.lens[n.have++] = k;
                      } else {
                        if (k === 16) {
                          for (B = E + 2; g < B;) {
                            if (_ === 0) {
                              break e;
                            }
                            _--;
                            y += u[m++] << g;
                            g += 8;
                          }
                          y >>>= E;
                          g -= E;
                          if (n.have === 0) {
                            e.msg = "invalid bit length repeat";
                            n.mode = d;
                            break;
                          }
                          I = n.lens[n.have - 1];
                          A = 3 + (y & 3);
                          y >>>= 2;
                          g -= 2;
                        } else if (k === 17) {
                          for (B = E + 3; g < B;) {
                            if (_ === 0) {
                              break e;
                            }
                            _--;
                            y += u[m++] << g;
                            g += 8;
                          }
                          g -= E;
                          I = 0;
                          A = 3 + ((y >>>= E) & 7);
                          y >>>= 3;
                          g -= 3;
                        } else {
                          for (B = E + 7; g < B;) {
                            if (_ === 0) {
                              break e;
                            }
                            _--;
                            y += u[m++] << g;
                            g += 8;
                          }
                          g -= E;
                          I = 0;
                          A = 11 + ((y >>>= E) & 127);
                          y >>>= 7;
                          g -= 7;
                        }
                        if (n.have + A > n.nlen + n.ndist) {
                          e.msg = "invalid bit length repeat";
                          n.mode = d;
                          break;
                        }
                        while (A--) {
                          n.lens[n.have++] = I;
                        }
                      }
                    }
                    if (n.mode === d) {
                      break;
                    }
                    if (n.lens[256] === 0) {
                      e.msg = "invalid code -- missing end-of-block";
                      n.mode = d;
                      break;
                    }
                    n.lenbits = 9;
                    j = {
                      bits: n.lenbits
                    };
                    L = o(1, n.lens, 0, n.nlen, n.lencode, 0, n.work, j);
                    n.lenbits = j.bits;
                    if (L) {
                      e.msg = "invalid literal/lengths set";
                      n.mode = d;
                      break;
                    }
                    n.distbits = 6;
                    n.distcode = n.distdyn;
                    j = {
                      bits: n.distbits
                    };
                    L = o(2, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, j);
                    n.distbits = j.bits;
                    if (L) {
                      e.msg = "invalid distances set";
                      n.mode = d;
                      break;
                    }
                    n.mode = 20;
                    if (t === 6) {
                      break e;
                    }
                  case 20:
                    n.mode = 21;
                  case 21:
                    if (_ >= 6 && v >= 258) {
                      e.next_out = f;
                      e.avail_out = v;
                      e.next_in = m;
                      e.avail_in = _;
                      n.hold = y;
                      n.bits = g;
                      a(e, T);
                      f = e.next_out;
                      p = e.output;
                      v = e.avail_out;
                      m = e.next_in;
                      u = e.input;
                      _ = e.avail_in;
                      y = n.hold;
                      g = n.bits;
                      if (n.mode === l) {
                        n.back = -1;
                      }
                      break;
                    }
                    for (n.back = 0; O = (D = n.lencode[y & (1 << n.lenbits) - 1]) >>> 16 & 255, k = D & 65535, !((E = D >>> 24) <= g);) {
                      if (_ === 0) {
                        break e;
                      }
                      _--;
                      y += u[m++] << g;
                      g += 8;
                    }
                    if (O && !(O & 240)) {
                      P = E;
                      M = O;
                      R = k;
                      while (O = (D = n.lencode[R + ((y & (1 << P + M) - 1) >> P)]) >>> 16 & 255, k = D & 65535, !(P + (E = D >>> 24) <= g)) {
                        if (_ === 0) {
                          break e;
                        }
                        _--;
                        y += u[m++] << g;
                        g += 8;
                      }
                      y >>>= P;
                      g -= P;
                      n.back += P;
                    }
                    y >>>= E;
                    g -= E;
                    n.back += E;
                    n.length = k;
                    if (O === 0) {
                      n.mode = 26;
                      break;
                    }
                    if (O & 32) {
                      n.back = -1;
                      n.mode = l;
                      break;
                    }
                    if (O & 64) {
                      e.msg = "invalid literal/length code";
                      n.mode = d;
                      break;
                    }
                    n.extra = O & 15;
                    n.mode = 22;
                  case 22:
                    if (n.extra) {
                      for (B = n.extra; g < B;) {
                        if (_ === 0) {
                          break e;
                        }
                        _--;
                        y += u[m++] << g;
                        g += 8;
                      }
                      n.length += y & (1 << n.extra) - 1;
                      y >>>= n.extra;
                      g -= n.extra;
                      n.back += n.extra;
                    }
                    n.was = n.length;
                    n.mode = 23;
                  case 23:
                    while (O = (D = n.distcode[y & (1 << n.distbits) - 1]) >>> 16 & 255, k = D & 65535, !((E = D >>> 24) <= g)) {
                      if (_ === 0) {
                        break e;
                      }
                      _--;
                      y += u[m++] << g;
                      g += 8;
                    }
                    if (!(O & 240)) {
                      P = E;
                      M = O;
                      R = k;
                      while (O = (D = n.distcode[R + ((y & (1 << P + M) - 1) >> P)]) >>> 16 & 255, k = D & 65535, !(P + (E = D >>> 24) <= g)) {
                        if (_ === 0) {
                          break e;
                        }
                        _--;
                        y += u[m++] << g;
                        g += 8;
                      }
                      y >>>= P;
                      g -= P;
                      n.back += P;
                    }
                    y >>>= E;
                    g -= E;
                    n.back += E;
                    if (O & 64) {
                      e.msg = "invalid distance code";
                      n.mode = d;
                      break;
                    }
                    n.offset = k;
                    n.extra = O & 15;
                    n.mode = 24;
                  case 24:
                    if (n.extra) {
                      for (B = n.extra; g < B;) {
                        if (_ === 0) {
                          break e;
                        }
                        _--;
                        y += u[m++] << g;
                        g += 8;
                      }
                      n.offset += y & (1 << n.extra) - 1;
                      y >>>= n.extra;
                      g -= n.extra;
                      n.back += n.extra;
                    }
                    if (n.offset > n.dmax) {
                      e.msg = "invalid distance too far back";
                      n.mode = d;
                      break;
                    }
                    n.mode = 25;
                  case 25:
                    if (v === 0) {
                      break e;
                    }
                    A = T - v;
                    if (n.offset > A) {
                      if ((A = n.offset - A) > n.whave && n.sane) {
                        e.msg = "invalid distance too far back";
                        n.mode = d;
                        break;
                      }
                      if (A > n.wnext) {
                        A -= n.wnext;
                        C = n.wsize - A;
                      } else {
                        C = n.wnext - A;
                      }
                      if (A > n.length) {
                        A = n.length;
                      }
                      S = n.window;
                    } else {
                      S = p;
                      C = f - n.offset;
                      A = n.length;
                    }
                    if (A > v) {
                      A = v;
                    }
                    v -= A;
                    n.length -= A;
                    do {
                      p[f++] = S[C++];
                    } while (--A);
                    if (n.length === 0) {
                      n.mode = 21;
                    }
                    break;
                  case 26:
                    if (v === 0) {
                      break e;
                    }
                    p[f++] = n.length;
                    v--;
                    n.mode = 21;
                    break;
                  case 27:
                    if (n.wrap) {
                      while (g < 32) {
                        if (_ === 0) {
                          break e;
                        }
                        _--;
                        y |= u[m++] << g;
                        g += 8;
                      }
                      T -= v;
                      e.total_out += T;
                      n.total += T;
                      if (T) {
                        e.adler = n.check = n.flags ? s(n.check, p, T, f - T) : i(n.check, p, T, f - T);
                      }
                      T = v;
                      if ((n.flags ? y : c(y)) !== n.check) {
                        e.msg = "incorrect data check";
                        n.mode = d;
                        break;
                      }
                      y = 0;
                      g = 0;
                    }
                    n.mode = 28;
                  case 28:
                    if (n.wrap && n.flags) {
                      while (g < 32) {
                        if (_ === 0) {
                          break e;
                        }
                        _--;
                        y += u[m++] << g;
                        g += 8;
                      }
                      if (y !== (n.total & -1)) {
                        e.msg = "incorrect length check";
                        n.mode = d;
                        break;
                      }
                      y = 0;
                      g = 0;
                    }
                    n.mode = 29;
                  case 29:
                    L = 1;
                    break e;
                  case d:
                    L = -3;
                    break e;
                  case 31:
                    return -4;
                  default:
                    return h;
                }
              }
              e.next_out = f;
              e.avail_out = v;
              e.next_in = m;
              e.avail_in = _;
              n.hold = y;
              n.bits = g;
              if ((n.wsize || T !== e.avail_out && n.mode < d && (n.mode < 27 || t !== 4)) && x(e, e.output, e.next_out, T - e.avail_out)) {
                n.mode = 31;
                return -4;
              } else {
                b -= e.avail_in;
                T -= e.avail_out;
                e.total_in += b;
                e.total_out += T;
                n.total += T;
                if (n.wrap && T) {
                  e.adler = n.check = n.flags ? s(n.check, p, T, e.next_out - T) : i(n.check, p, T, e.next_out - T);
                }
                e.data_type = n.bits + (n.last ? 64 : 0) + (n.mode === l ? 128 : 0) + (n.mode === 20 || n.mode === 15 ? 256 : 0);
                if ((b === 0 && T === 0 || t === 4) && L === 0) {
                  L = -5;
                }
                return L;
              }
            };
            t.inflateEnd = function (e) {
              if (!e || !e.state) {
                return h;
              }
              var t = e.state;
              t.window &&= null;
              e.state = null;
              return 0;
            };
            t.inflateGetHeader = function (e, t) {
              var n;
              if (e && e.state && (n = e.state).wrap & 2) {
                n.head = t;
                t.done = false;
                return 0;
              } else {
                return h;
              }
            };
            t.inflateSetDictionary = function (e, t) {
              var n;
              var r = t.length;
              if (e && e.state) {
                if ((n = e.state).wrap !== 0 && n.mode !== 11) {
                  return h;
                } else if (n.mode === 11 && i(1, t, r, 0) !== n.check) {
                  return -3;
                } else if (x(e, t, r, r)) {
                  n.mode = 31;
                  return -4;
                } else {
                  n.havedict = 1;
                  return 0;
                }
              } else {
                return h;
              }
            };
            t.inflateInfo = "pako inflate (from Nodeca project)";
          }
    });
})();
