(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        47293(e) {
            "use strict";
        
            e.exports = function (e, t) {
              var n;
              var r;
              var i;
              var s;
              var a;
              var o;
              var h;
              var l;
              var d;
              var c;
              var u;
              var p;
              var m;
              var f;
              var _;
              var v;
              var y;
              var g;
              var w;
              var x;
              var b;
              var T;
              var A;
              var C;
              var S;
              n = e.state;
              r = e.next_in;
              C = e.input;
              i = r + (e.avail_in - 5);
              s = e.next_out;
              S = e.output;
              a = s - (t - e.avail_out);
              o = s + (e.avail_out - 257);
              h = n.dmax;
              l = n.wsize;
              d = n.whave;
              c = n.wnext;
              u = n.window;
              p = n.hold;
              m = n.bits;
              f = n.lencode;
              _ = n.distcode;
              v = (1 << n.lenbits) - 1;
              y = (1 << n.distbits) - 1;
              e: do {
                if (m < 15) {
                  p += C[r++] << m;
                  m += 8;
                  p += C[r++] << m;
                  m += 8;
                }
                g = f[p & v];
                t: while (true) {
                  p >>>= w = g >>> 24;
                  m -= w;
                  if ((w = g >>> 16 & 255) == 0) {
                    S[s++] = g & 65535;
                  } else {
                    if (!(w & 16)) {
                      if (w & 64) {
                        if (w & 32) {
                          n.mode = 12;
                          break e;
                        }
                        e.msg = "invalid literal/length code";
                        n.mode = 30;
                        break e;
                      }
                      g = f[(g & 65535) + (p & (1 << w) - 1)];
                      continue t;
                    }
                    x = g & 65535;
                    if (w &= 15) {
                      if (m < w) {
                        p += C[r++] << m;
                        m += 8;
                      }
                      x += p & (1 << w) - 1;
                      p >>>= w;
                      m -= w;
                    }
                    if (m < 15) {
                      p += C[r++] << m;
                      m += 8;
                      p += C[r++] << m;
                      m += 8;
                    }
                    g = _[p & y];
                    while (true) {
                      p >>>= w = g >>> 24;
                      m -= w;
                      if ((w = g >>> 16 & 255) & 16) {
                        b = g & 65535;
                        if (m < (w &= 15)) {
                          p += C[r++] << m;
                          if ((m += 8) < w) {
                            p += C[r++] << m;
                            m += 8;
                          }
                        }
                        if ((b += p & (1 << w) - 1) > h) {
                          e.msg = "invalid distance too far back";
                          n.mode = 30;
                          break e;
                        }
                        p >>>= w;
                        m -= w;
                        if (b > (w = s - a)) {
                          if ((w = b - w) > d && n.sane) {
                            e.msg = "invalid distance too far back";
                            n.mode = 30;
                            break e;
                          }
                          T = 0;
                          A = u;
                          if (c === 0) {
                            T += l - w;
                            if (w < x) {
                              x -= w;
                              do {
                                S[s++] = u[T++];
                              } while (--w);
                              T = s - b;
                              A = S;
                            }
                          } else if (c < w) {
                            T += l + c - w;
                            if ((w -= c) < x) {
                              x -= w;
                              do {
                                S[s++] = u[T++];
                              } while (--w);
                              T = 0;
                              if (c < x) {
                                x -= w = c;
                                do {
                                  S[s++] = u[T++];
                                } while (--w);
                                T = s - b;
                                A = S;
                              }
                            }
                          } else {
                            T += c - w;
                            if (w < x) {
                              x -= w;
                              do {
                                S[s++] = u[T++];
                              } while (--w);
                              T = s - b;
                              A = S;
                            }
                          }
                          while (x > 2) {
                            S[s++] = A[T++];
                            S[s++] = A[T++];
                            S[s++] = A[T++];
                            x -= 3;
                          }
                          if (x) {
                            S[s++] = A[T++];
                            if (x > 1) {
                              S[s++] = A[T++];
                            }
                          }
                        } else {
                          T = s - b;
                          do {
                            S[s++] = S[T++];
                            S[s++] = S[T++];
                            S[s++] = S[T++];
                            x -= 3;
                          } while (x > 2);
                          if (x) {
                            S[s++] = S[T++];
                            if (x > 1) {
                              S[s++] = S[T++];
                            }
                          }
                        }
                        break;
                      }
                      if (w & 64) {
                        e.msg = "invalid distance code";
                        n.mode = 30;
                        break e;
                      }
                      g = _[(g & 65535) + (p & (1 << w) - 1)];
                    }
                  }
                  break;
                }
              } while (r < i && s < o);
              r -= x = m >> 3;
              p &= (1 << (m -= x << 3)) - 1;
              e.next_in = r;
              e.next_out = s;
              e.avail_in = r < i ? i - r + 5 : 5 - (r - i);
              e.avail_out = s < o ? o - s + 257 : 257 - (s - o);
              n.hold = p;
              n.bits = m;
            };
          }
    });
})();
