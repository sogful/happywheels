(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        88604(e, t, n) {
            "use strict";
        
            n.r(t);
            n.d(t, {
              BaseTextureCache: () => K,
              CanvasRenderTarget: () => Q,
              DATA_URI: () => ne,
              EventEmitter: () => i(),
              ProgramCache: () => q,
              TextureCache: () => J,
              clearTextureCache: () => $,
              correctBlendMode: () => M,
              createIndicesForQuads: () => j,
              decomposeDataUri: () => re,
              deprecation: () => Y,
              destroyTextureCache: () => Z,
              determineCrossOrigin: () => ie,
              earcut: () => r(),
              getBufferType: () => B,
              getResolutionOfUrl: () => se,
              hex2rgb: () => S,
              hex2string: () => E,
              interleaveTypedArrays: () => F,
              isMobile: () => p.Fr,
              isPow2: () => G,
              isWebGLSupported: () => A,
              log2: () => U,
              nextPow2: () => N,
              path: () => y,
              premultiplyBlendMode: () => P,
              premultiplyRgba: () => R,
              premultiplyTint: () => I,
              premultiplyTintToRgba: () => L,
              removeItems: () => V,
              rgb2hex: () => k,
              sayHello: () => T,
              sign: () => H,
              skipHello: () => b,
              string2hex: () => O,
              trimCanvas: () => ee,
              uid: () => W,
              url: () => f
            });
            var r = n.cw(function (e, t) {
              function n(e, t, n) {
                n = n || 2;
                var i;
                var a;
                var o;
                var h;
                var l;
                var u;
                var p;
                var m = t && t.length;
                var _ = m ? t[0] * n : e.length;
                var v = r(e, 0, _, n, true);
                var y = [];
                if (!v || v.next === v.prev) {
                  return y;
                }
                if (m) {
                  v = function (e, t, n, i) {
                    var s;
                    var a;
                    var o;
                    var h = [];
                    s = 0;
                    a = t.length;
                    for (; s < a; s++) {
                      if ((o = r(e, t[s] * i, s < a - 1 ? t[s + 1] * i : e.length, i, false)) === o.next) {
                        o.steiner = true;
                      }
                      h.push(f(o));
                    }
                    h.sort(d);
                    s = 0;
                    for (; s < h.length; s++) {
                      n = c(h[s], n);
                    }
                    return n;
                  }(e, t, v, n);
                }
                if (e.length > n * 80) {
                  i = o = e[0];
                  a = h = e[1];
                  for (var g = n; g < _; g += n) {
                    if ((l = e[g]) < i) {
                      i = l;
                    }
                    if ((u = e[g + 1]) < a) {
                      a = u;
                    }
                    if (l > o) {
                      o = l;
                    }
                    if (u > h) {
                      h = u;
                    }
                  }
                  p = (p = Math.max(o - i, h - a)) !== 0 ? 32767 / p : 0;
                }
                s(v, y, n, i, a, p, 0);
                return y;
              }
              function r(e, t, n, r, i) {
                var s;
                var a;
                if (i === O(e, t, n, r) > 0) {
                  for (s = t; s < n; s += r) {
                    a = C(s, e[s], e[s + 1], a);
                  }
                } else {
                  for (s = n - r; s >= t; s -= r) {
                    a = C(s, e[s], e[s + 1], a);
                  }
                }
                if (a && g(a, a.next)) {
                  S(a);
                  a = a.next;
                }
                return a;
              }
              function i(e, t) {
                if (!e) {
                  return e;
                }
                t ||= e;
                var n;
                var r = e;
                do {
                  n = false;
                  if (r.steiner || !g(r, r.next) && y(r.prev, r, r.next) !== 0) {
                    r = r.next;
                  } else {
                    S(r);
                    if ((r = t = r.prev) === r.next) {
                      break;
                    }
                    n = true;
                  }
                } while (n || r !== t);
                return t;
              }
              function s(e, t, n, r, d, c, u) {
                if (e) {
                  if (!u && c) {
                    (function (e, t, n, r) {
                      var i = e;
                      do {
                        if (i.z === 0) {
                          i.z = m(i.x, i.y, t, n, r);
                        }
                        i.prevZ = i.prev;
                        i.nextZ = i.next;
                        i = i.next;
                      } while (i !== e);
                      i.prevZ.nextZ = null;
                      i.prevZ = null;
                      (function (e) {
                        var t;
                        var n;
                        var r;
                        var i;
                        var s;
                        var a;
                        var o;
                        var h;
                        var l = 1;
                        do {
                          n = e;
                          e = null;
                          s = null;
                          a = 0;
                          while (n) {
                            a++;
                            r = n;
                            o = 0;
                            t = 0;
                            for (; t < l && (o++, r = r.nextZ); t++);
                            for (h = l; o > 0 || h > 0 && r;) {
                              if (o !== 0 && (h === 0 || !r || n.z <= r.z)) {
                                i = n;
                                n = n.nextZ;
                                o--;
                              } else {
                                i = r;
                                r = r.nextZ;
                                h--;
                              }
                              if (s) {
                                s.nextZ = i;
                              } else {
                                e = i;
                              }
                              i.prevZ = s;
                              s = i;
                            }
                            n = r;
                          }
                          s.nextZ = null;
                          l *= 2;
                        } while (a > 1);
                      })(i);
                    })(e, r, d, c);
                  }
                  var p;
                  var f;
                  var _ = e;
                  for (; e.prev !== e.next;) {
                    p = e.prev;
                    f = e.next;
                    if (c ? o(e, r, d, c) : a(e)) {
                      t.push(p.i / n | 0);
                      t.push(e.i / n | 0);
                      t.push(f.i / n | 0);
                      S(e);
                      e = f.next;
                      _ = f.next;
                    } else if ((e = f) === _) {
                      if (u) {
                        if (u === 1) {
                          s(e = h(i(e), t, n), t, n, r, d, c, 2);
                        } else if (u === 2) {
                          l(e, t, n, r, d, c);
                        }
                      } else {
                        s(i(e), t, n, r, d, c, 1);
                      }
                      break;
                    }
                  }
                }
              }
              function a(e) {
                var t = e.prev;
                var n = e;
                var r = e.next;
                if (y(t, n, r) >= 0) {
                  return false;
                }
                var i = t.x;
                var s = n.x;
                var a = r.x;
                var o = t.y;
                var h = n.y;
                var l = r.y;
                var d = i < s ? i < a ? i : a : s < a ? s : a;
                var c = o < h ? o < l ? o : l : h < l ? h : l;
                var u = i > s ? i > a ? i : a : s > a ? s : a;
                var p = o > h ? o > l ? o : l : h > l ? h : l;
                for (var m = r.next; m !== t;) {
                  if (m.x >= d && m.x <= u && m.y >= c && m.y <= p && _(i, o, s, h, a, l, m.x, m.y) && y(m.prev, m, m.next) >= 0) {
                    return false;
                  }
                  m = m.next;
                }
                return true;
              }
              function o(e, t, n, r) {
                var i = e.prev;
                var s = e;
                var a = e.next;
                if (y(i, s, a) >= 0) {
                  return false;
                }
                var o = i.x;
                var h = s.x;
                var l = a.x;
                var d = i.y;
                var c = s.y;
                var u = a.y;
                var p = o < h ? o < l ? o : l : h < l ? h : l;
                var f = d < c ? d < u ? d : u : c < u ? c : u;
                var v = o > h ? o > l ? o : l : h > l ? h : l;
                var g = d > c ? d > u ? d : u : c > u ? c : u;
                for (var w = m(p, f, t, n, r), x = m(v, g, t, n, r), b = e.prevZ, T = e.nextZ; b && b.z >= w && T && T.z <= x;) {
                  if (b.x >= p && b.x <= v && b.y >= f && b.y <= g && b !== i && b !== a && _(o, d, h, c, l, u, b.x, b.y) && y(b.prev, b, b.next) >= 0) {
                    return false;
                  }
                  b = b.prevZ;
                  if (T.x >= p && T.x <= v && T.y >= f && T.y <= g && T !== i && T !== a && _(o, d, h, c, l, u, T.x, T.y) && y(T.prev, T, T.next) >= 0) {
                    return false;
                  }
                  T = T.nextZ;
                }
                while (b && b.z >= w) {
                  if (b.x >= p && b.x <= v && b.y >= f && b.y <= g && b !== i && b !== a && _(o, d, h, c, l, u, b.x, b.y) && y(b.prev, b, b.next) >= 0) {
                    return false;
                  }
                  b = b.prevZ;
                }
                while (T && T.z <= x) {
                  if (T.x >= p && T.x <= v && T.y >= f && T.y <= g && T !== i && T !== a && _(o, d, h, c, l, u, T.x, T.y) && y(T.prev, T, T.next) >= 0) {
                    return false;
                  }
                  T = T.nextZ;
                }
                return true;
              }
              function h(e, t, n) {
                var r = e;
                do {
                  var s = r.prev;
                  var a = r.next.next;
                  if (!g(s, a) && w(s, r, r.next, a) && T(s, a) && T(a, s)) {
                    t.push(s.i / n | 0);
                    t.push(r.i / n | 0);
                    t.push(a.i / n | 0);
                    S(r);
                    S(r.next);
                    r = e = a;
                  }
                  r = r.next;
                } while (r !== e);
                return i(r);
              }
              function l(e, t, n, r, a, o) {
                var h = e;
                do {
                  for (var l = h.next.next; l !== h.prev;) {
                    if (h.i !== l.i && v(h, l)) {
                      var d = A(h, l);
                      h = i(h, h.next);
                      d = i(d, d.next);
                      s(h, t, n, r, a, o, 0);
                      s(d, t, n, r, a, o, 0);
                      return;
                    }
                    l = l.next;
                  }
                  h = h.next;
                } while (h !== e);
              }
              function d(e, t) {
                return e.x - t.x;
              }
              function c(e, t) {
                var n = function (e, t) {
                  var n;
                  var r = t;
                  var i = e.x;
                  var s = e.y;
                  var a = -Infinity;
                  do {
                    if (s <= r.y && s >= r.next.y && r.next.y !== r.y) {
                      var o = r.x + (s - r.y) * (r.next.x - r.x) / (r.next.y - r.y);
                      if (o <= i && o > a && (a = o, n = r.x < r.next.x ? r : r.next, o === i)) {
                        return n;
                      }
                    }
                    r = r.next;
                  } while (r !== t);
                  if (!n) {
                    return null;
                  }
                  var h;
                  var l = n;
                  var d = n.x;
                  var c = n.y;
                  var u = Infinity;
                  r = n;
                  do {
                    if (i >= r.x && r.x >= d && i !== r.x && _(s < c ? i : a, s, d, c, s < c ? a : i, s, r.x, r.y)) {
                      h = Math.abs(s - r.y) / (i - r.x);
                      if (T(r, e) && (h < u || h === u && (r.x > n.x || r.x === n.x && p(n, r)))) {
                        n = r;
                        u = h;
                      }
                    }
                    r = r.next;
                  } while (r !== l);
                  return n;
                }(e, t);
                if (!n) {
                  return t;
                }
                var r = A(n, e);
                i(r, r.next);
                return i(n, n.next);
              }
              function p(e, t) {
                return y(e.prev, e, t.prev) < 0 && y(t.next, e, e.next) < 0;
              }
              function m(e, t, n, r, i) {
                return (e = ((e = ((e = ((e = ((e = (e - n) * i | 0) | e << 8) & 16711935) | e << 4) & 252645135) | e << 2) & 858993459) | e << 1) & 1431655765) | (t = ((t = ((t = ((t = ((t = (t - r) * i | 0) | t << 8) & 16711935) | t << 4) & 252645135) | t << 2) & 858993459) | t << 1) & 1431655765) << 1;
              }
              function f(e) {
                var t = e;
                var n = e;
                do {
                  if (t.x < n.x || t.x === n.x && t.y < n.y) {
                    n = t;
                  }
                  t = t.next;
                } while (t !== e);
                return n;
              }
              function _(e, t, n, r, i, s, a, o) {
                return (i - a) * (t - o) >= (e - a) * (s - o) && (e - a) * (r - o) >= (n - a) * (t - o) && (n - a) * (s - o) >= (i - a) * (r - o);
              }
              function v(e, t) {
                return e.next.i !== t.i && e.prev.i !== t.i && !function (e, t) {
                  var n = e;
                  do {
                    if (n.i !== e.i && n.next.i !== e.i && n.i !== t.i && n.next.i !== t.i && w(n, n.next, e, t)) {
                      return true;
                    }
                    n = n.next;
                  } while (n !== e);
                  return false;
                }(e, t) && (T(e, t) && T(t, e) && function (e, t) {
                  var n = e;
                  var r = false;
                  var i = (e.x + t.x) / 2;
                  var s = (e.y + t.y) / 2;
                  do {
                    if (n.y > s != n.next.y > s && n.next.y !== n.y && i < (n.next.x - n.x) * (s - n.y) / (n.next.y - n.y) + n.x) {
                      r = !r;
                    }
                    n = n.next;
                  } while (n !== e);
                  return r;
                }(e, t) && (y(e.prev, e, t.prev) || y(e, t.prev, t)) || g(e, t) && y(e.prev, e, e.next) > 0 && y(t.prev, t, t.next) > 0);
              }
              function y(e, t, n) {
                return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
              }
              function g(e, t) {
                return e.x === t.x && e.y === t.y;
              }
              function w(e, t, n, r) {
                var i = b(y(e, t, n));
                var s = b(y(e, t, r));
                var a = b(y(n, r, e));
                var o = b(y(n, r, t));
                return i !== s && a !== o || i === 0 && !!x(e, n, t) || s === 0 && !!x(e, r, t) || a === 0 && !!x(n, e, r) || o === 0 && !!x(n, t, r);
              }
              function x(e, t, n) {
                return t.x <= Math.max(e.x, n.x) && t.x >= Math.min(e.x, n.x) && t.y <= Math.max(e.y, n.y) && t.y >= Math.min(e.y, n.y);
              }
              function b(e) {
                if (e > 0) {
                  return 1;
                } else if (e < 0) {
                  return -1;
                } else {
                  return 0;
                }
              }
              function T(e, t) {
                if (y(e.prev, e, e.next) < 0) {
                  return y(e, t, e.next) >= 0 && y(e, e.prev, t) >= 0;
                } else {
                  return y(e, t, e.prev) < 0 || y(e, e.next, t) < 0;
                }
              }
              function A(e, t) {
                var n = new E(e.i, e.x, e.y);
                var r = new E(t.i, t.x, t.y);
                var i = e.next;
                var s = t.prev;
                e.next = t;
                t.prev = e;
                n.next = i;
                i.prev = n;
                r.next = n;
                n.prev = r;
                s.next = r;
                r.prev = s;
                return r;
              }
              function C(e, t, n, r) {
                var i = new E(e, t, n);
                if (r) {
                  i.next = r.next;
                  i.prev = r;
                  r.next.prev = i;
                  r.next = i;
                } else {
                  i.prev = i;
                  i.next = i;
                }
                return i;
              }
              function S(e) {
                e.next.prev = e.prev;
                e.prev.next = e.next;
                if (e.prevZ) {
                  e.prevZ.nextZ = e.nextZ;
                }
                if (e.nextZ) {
                  e.nextZ.prevZ = e.prevZ;
                }
              }
              function E(e, t, n) {
                this.i = e;
                this.x = t;
                this.y = n;
                this.prev = null;
                this.next = null;
                this.z = 0;
                this.prevZ = null;
                this.nextZ = null;
                this.steiner = false;
              }
              function O(e, t, n, r) {
                var i = 0;
                for (var s = t, a = n - r; s < n; s += r) {
                  i += (e[a] - e[s]) * (e[s + 1] + e[a + 1]);
                  a = s;
                }
                return i;
              }
              u();
              e.exports = n;
              e.exports.default = n;
              n.deviation = function (e, t, n, r) {
                var i = t && t.length;
                var s = i ? t[0] * n : e.length;
                var a = Math.abs(O(e, 0, s, n));
                if (i) {
                  for (var o = 0, h = t.length; o < h; o++) {
                    var l = t[o] * n;
                    var d = o < h - 1 ? t[o + 1] * n : e.length;
                    a -= Math.abs(O(e, l, d, n));
                  }
                }
                var c = 0;
                for (o = 0; o < r.length; o += 3) {
                  var u = r[o] * n;
                  var p = r[o + 1] * n;
                  var m = r[o + 2] * n;
                  c += Math.abs((e[u] - e[m]) * (e[p + 1] - e[u + 1]) - (e[u] - e[p]) * (e[m + 1] - e[u + 1]));
                }
                if (a === 0 && c === 0) {
                  return 0;
                } else {
                  return Math.abs((c - a) / a);
                }
              };
              n.flatten = function (e) {
                var t = e[0][0].length;
                var n = {
                  vertices: [],
                  holes: [],
                  dimensions: t
                };
                var r = 0;
                for (var i = 0; i < e.length; i++) {
                  for (var s = 0; s < e[i].length; s++) {
                    for (var a = 0; a < t; a++) {
                      n.vertices.push(e[i][s][a]);
                    }
                  }
                  if (i > 0) {
                    r += e[i - 1].length;
                    n.holes.push(r);
                  }
                }
                return n;
              };
            });
            var i = n.cw(function (e, t) {
              var n = Object.prototype.hasOwnProperty;
              var r = "~";
              function i() {}
              function s(e, t, n) {
                this.fn = e;
                this.context = t;
                this.once = n || false;
              }
              function a(e, t, n, i, a) {
                if (typeof n != "function") {
                  throw new TypeError("The listener must be a function");
                }
                var o = new s(n, i || e, a);
                var h = r ? r + t : t;
                if (e._events[h]) {
                  if (e._events[h].fn) {
                    e._events[h] = [e._events[h], o];
                  } else {
                    e._events[h].push(o);
                  }
                } else {
                  e._events[h] = o;
                  e._eventsCount++;
                }
                return e;
              }
              function o(e, t) {
                if (--e._eventsCount === 0) {
                  e._events = new i();
                } else {
                  delete e._events[t];
                }
              }
              function h() {
                this._events = new i();
                this._eventsCount = 0;
              }
              if (Object.create) {
                i.prototype = Object.create(null);
                if (!new i().__proto__) {
                  r = false;
                }
              }
              h.prototype.eventNames = function () {
                var e;
                var t;
                var i = [];
                if (this._eventsCount === 0) {
                  return i;
                }
                for (t in e = this._events) {
                  if (n.call(e, t)) {
                    i.push(r ? t.slice(1) : t);
                  }
                }
                if (Object.getOwnPropertySymbols) {
                  return i.concat(Object.getOwnPropertySymbols(e));
                } else {
                  return i;
                }
              };
              h.prototype.listeners = function (e) {
                var t = r ? r + e : e;
                var n = this._events[t];
                if (!n) {
                  return [];
                }
                if (n.fn) {
                  return [n.fn];
                }
                for (var i = 0, s = n.length, a = new Array(s); i < s; i++) {
                  a[i] = n[i].fn;
                }
                return a;
              };
              h.prototype.listenerCount = function (e) {
                var t = r ? r + e : e;
                var n = this._events[t];
                if (n) {
                  if (n.fn) {
                    return 1;
                  } else {
                    return n.length;
                  }
                } else {
                  return 0;
                }
              };
              h.prototype.emit = function (e, t, n, i, s, a) {
                var o = r ? r + e : e;
                if (!this._events[o]) {
                  return false;
                }
                var h;
                var l;
                var d = this._events[o];
                var c = arguments.length;
                if (d.fn) {
                  if (d.once) {
                    this.removeListener(e, d.fn, undefined, true);
                  }
                  switch (c) {
                    case 1:
                      d.fn.call(d.context);
                      return true;
                    case 2:
                      d.fn.call(d.context, t);
                      return true;
                    case 3:
                      d.fn.call(d.context, t, n);
                      return true;
                    case 4:
                      d.fn.call(d.context, t, n, i);
                      return true;
                    case 5:
                      d.fn.call(d.context, t, n, i, s);
                      return true;
                    case 6:
                      d.fn.call(d.context, t, n, i, s, a);
                      return true;
                  }
                  l = 1;
                  h = new Array(c - 1);
                  for (; l < c; l++) {
                    h[l - 1] = arguments[l];
                  }
                  d.fn.apply(d.context, h);
                } else {
                  var u;
                  var p = d.length;
                  for (l = 0; l < p; l++) {
                    if (d[l].once) {
                      this.removeListener(e, d[l].fn, undefined, true);
                    }
                    switch (c) {
                      case 1:
                        d[l].fn.call(d[l].context);
                        break;
                      case 2:
                        d[l].fn.call(d[l].context, t);
                        break;
                      case 3:
                        d[l].fn.call(d[l].context, t, n);
                        break;
                      case 4:
                        d[l].fn.call(d[l].context, t, n, i);
                        break;
                      default:
                        if (!h) {
                          u = 1;
                          h = new Array(c - 1);
                          for (; u < c; u++) {
                            h[u - 1] = arguments[u];
                          }
                        }
                        d[l].fn.apply(d[l].context, h);
                    }
                  }
                }
                return true;
              };
              h.prototype.on = function (e, t, n) {
                return a(this, e, t, n, false);
              };
              h.prototype.once = function (e, t, n) {
                return a(this, e, t, n, true);
              };
              h.prototype.removeListener = function (e, t, n, i) {
                var s = r ? r + e : e;
                if (!this._events[s]) {
                  return this;
                }
                if (!t) {
                  o(this, s);
                  return this;
                }
                var a = this._events[s];
                if (a.fn) {
                  if (a.fn === t && (!i || !!a.once) && (!n || a.context === n)) {
                    o(this, s);
                  }
                } else {
                  for (var h = 0, l = [], d = a.length; h < d; h++) {
                    if (a[h].fn !== t || i && !a[h].once || n && a[h].context !== n) {
                      l.push(a[h]);
                    }
                  }
                  if (l.length) {
                    this._events[s] = l.length === 1 ? l[0] : l;
                  } else {
                    o(this, s);
                  }
                }
                return this;
              };
              h.prototype.removeAllListeners = function (e) {
                var t;
                if (e) {
                  t = r ? r + e : e;
                  if (this._events[t]) {
                    o(this, t);
                  }
                } else {
                  this._events = new i();
                  this._eventsCount = 0;
                }
                return this;
              };
              h.prototype.off = h.prototype.removeListener;
              h.prototype.addListener = h.prototype.on;
              h.prefixed = r;
              h.EventEmitter = h;
              e.exports = h;
            });
            var s = n.cw(function (e, t) {
              var n = String.prototype.replace;
              var r = /%20/g;
              var i = "RFC3986";
              e.exports = {
                default: i,
                formatters: {
                  RFC1738: function (e) {
                    return n.call(e, r, "+");
                  },
                  RFC3986: function (e) {
                    return String(e);
                  }
                },
                RFC1738: "RFC1738",
                RFC3986: i
              };
            });
            var a = n.cw(function (e, t) {
              var n = h();
              var r = o();
              var i = s();
              e.exports = {
                formats: i,
                parse: r,
                stringify: n
              };
            });
            var o = n.cw(function (e, t) {
              var n = l();
              var r = Object.prototype.hasOwnProperty;
              var i = Array.isArray;
              var s = {
                allowDots: false,
                allowEmptyArrays: false,
                allowPrototypes: false,
                allowSparse: false,
                arrayLimit: 20,
                charset: "utf-8",
                charsetSentinel: false,
                comma: false,
                decodeDotInKeys: false,
                decoder: n.decode,
                delimiter: "&",
                depth: 5,
                duplicates: "combine",
                ignoreQueryPrefix: false,
                interpretNumericEntities: false,
                parameterLimit: 1000,
                parseArrays: true,
                plainObjects: false,
                strictDepth: false,
                strictMerge: true,
                strictNullHandling: false,
                throwOnLimitExceeded: false
              };
              function a(e) {
                return e.replace(/&#(\d+);/g, function (e, t) {
                  return String.fromCharCode(parseInt(t, 10));
                });
              }
              function o(e, t, n) {
                if (e && typeof e == "string" && t.comma && e.indexOf(",") > -1) {
                  if (t.throwOnLimitExceeded) {
                    var r = 0;
                    for (var i = e.indexOf(","); i > -1;) {
                      if ((r += 1) >= t.arrayLimit) {
                        throw new RangeError("Array limit exceeded. Only " + t.arrayLimit + " element" + (t.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
                      }
                      i = e.indexOf(",", i + 1);
                    }
                  }
                  return e.split(",");
                }
                if (t.throwOnLimitExceeded && n >= t.arrayLimit) {
                  throw new RangeError("Array limit exceeded. Only " + t.arrayLimit + " element" + (t.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
                }
                return e;
              }
              function h(e, t, i, s) {
                if (e) {
                  var a = function (e, t) {
                    var n = t.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e;
                    if (t.depth <= 0) {
                      if (!t.plainObjects && r.call(Object.prototype, n) && !t.allowPrototypes) {
                        return;
                      }
                      return [n];
                    }
                    var i = [];
                    var s = n.indexOf("[");
                    var a = s >= 0 ? n.slice(0, s) : n;
                    if (a) {
                      if (!t.plainObjects && r.call(Object.prototype, a) && !t.allowPrototypes) {
                        return;
                      }
                      i[i.length] = a;
                    }
                    var o = n.length;
                    for (var h = s, l = 0; h >= 0 && l < t.depth;) {
                      var d = 1;
                      for (var c = h + 1, u = -1; c < o && u < 0;) {
                        var p = n.charCodeAt(c);
                        if (p === 91) {
                          d += 1;
                        } else if (p === 93 && (d -= 1) == 0) {
                          u = c;
                        }
                        c += 1;
                      }
                      if (u < 0) {
                        i[i.length] = "[" + n.slice(h) + "]";
                        return i;
                      }
                      var m = n.slice(h, u + 1);
                      var f = m.slice(1, -1);
                      if (!t.plainObjects && r.call(Object.prototype, f) && !t.allowPrototypes) {
                        return;
                      }
                      i[i.length] = m;
                      l += 1;
                      h = n.indexOf("[", u + 1);
                    }
                    if (h >= 0) {
                      if (t.strictDepth === true) {
                        throw new RangeError("Input depth exceeded depth option of " + t.depth + " and strictDepth is true");
                      }
                      i[i.length] = "[" + n.slice(h) + "]";
                    }
                    return i;
                  }(e, i);
                  if (a) {
                    return function (e, t, r, i) {
                      var s = 0;
                      if (e.length > 0 && e[e.length - 1] === "[]") {
                        var a = e.slice(0, -1).join("");
                        s = Array.isArray(t) && t[a] ? t[a].length : 0;
                      }
                      var h = i ? t : o(t, r, s);
                      for (var l = e.length - 1; l >= 0; --l) {
                        var d;
                        var c = e[l];
                        if (c === "[]" && r.parseArrays) {
                          d = n.isOverflow(h) ? h : r.allowEmptyArrays && (h === "" || r.strictNullHandling && h === null) ? [] : n.combine([], h, r.arrayLimit, r.plainObjects, r.throwOnLimitExceeded);
                        } else {
                          d = r.plainObjects ? {
                            __proto__: null
                          } : {};
                          var u = c.charAt(0) === "[" && c.charAt(c.length - 1) === "]" ? c.slice(1, -1) : c;
                          var p = r.decodeDotInKeys ? u.replace(/%2E/g, ".") : u;
                          var m = parseInt(p, 10);
                          var f = !isNaN(m) && c !== p && String(m) === p && m >= 0 && r.parseArrays;
                          if (r.parseArrays || p !== "") {
                            if (f && m < r.arrayLimit) {
                              (d = [])[m] = h;
                            } else {
                              if (f && r.throwOnLimitExceeded) {
                                throw new RangeError("Array limit exceeded. Only " + r.arrayLimit + " element" + (r.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
                              }
                              if (f) {
                                d[m] = h;
                                n.markOverflow(d, m);
                              } else if (p !== "__proto__") {
                                d[p] = h;
                              }
                            }
                          } else {
                            d = {
                              0: h
                            };
                          }
                        }
                        h = d;
                      }
                      return h;
                    }(a, t, i, s);
                  }
                }
              }
              e.exports = function (e, t) {
                var l = function (e) {
                  if (!e) {
                    return s;
                  }
                  if (e.allowEmptyArrays !== undefined && typeof e.allowEmptyArrays != "boolean") {
                    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
                  }
                  if (e.decodeDotInKeys !== undefined && typeof e.decodeDotInKeys != "boolean") {
                    throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
                  }
                  if (e.decoder !== null && e.decoder !== undefined && typeof e.decoder != "function") {
                    throw new TypeError("Decoder has to be a function.");
                  }
                  if (e.charset !== undefined && e.charset !== "utf-8" && e.charset !== "iso-8859-1") {
                    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                  }
                  if (e.throwOnLimitExceeded !== undefined && typeof e.throwOnLimitExceeded != "boolean") {
                    throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
                  }
                  var t = e.charset === undefined ? s.charset : e.charset;
                  var r = e.duplicates === undefined ? s.duplicates : e.duplicates;
                  if (r !== "combine" && r !== "first" && r !== "last") {
                    throw new TypeError("The duplicates option must be either combine, first, or last");
                  }
                  return {
                    allowDots: e.allowDots === undefined ? e.decodeDotInKeys === true || s.allowDots : !!e.allowDots,
                    allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : s.allowEmptyArrays,
                    allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : s.allowPrototypes,
                    allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : s.allowSparse,
                    arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : s.arrayLimit,
                    charset: t,
                    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : s.charsetSentinel,
                    comma: typeof e.comma == "boolean" ? e.comma : s.comma,
                    decodeDotInKeys: typeof e.decodeDotInKeys == "boolean" ? e.decodeDotInKeys : s.decodeDotInKeys,
                    decoder: typeof e.decoder == "function" ? e.decoder : s.decoder,
                    delimiter: typeof e.delimiter == "string" || n.isRegExp(e.delimiter) ? e.delimiter : s.delimiter,
                    depth: typeof e.depth == "number" || e.depth === false ? +e.depth : s.depth,
                    duplicates: r,
                    ignoreQueryPrefix: e.ignoreQueryPrefix === true,
                    interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : s.interpretNumericEntities,
                    parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : s.parameterLimit,
                    parseArrays: e.parseArrays !== false,
                    plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : s.plainObjects,
                    strictDepth: typeof e.strictDepth == "boolean" ? !!e.strictDepth : s.strictDepth,
                    strictMerge: typeof e.strictMerge == "boolean" ? !!e.strictMerge : s.strictMerge,
                    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : s.strictNullHandling,
                    throwOnLimitExceeded: typeof e.throwOnLimitExceeded == "boolean" && e.throwOnLimitExceeded
                  };
                }(t);
                if (e === "" || e == null) {
                  if (l.plainObjects) {
                    return {
                      __proto__: null
                    };
                  } else {
                    return {};
                  }
                }
                var d = typeof e == "string" ? function (e, t) {
                  var h = {
                    __proto__: null
                  };
                  var l = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e;
                  l = l.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
                  var d = t.parameterLimit === Infinity ? undefined : t.parameterLimit;
                  var c = l.split(t.delimiter, t.throwOnLimitExceeded && d !== undefined ? d + 1 : d);
                  if (t.throwOnLimitExceeded && d !== undefined && c.length > d) {
                    throw new RangeError("Parameter limit exceeded. Only " + d + " parameter" + (d === 1 ? "" : "s") + " allowed.");
                  }
                  var u;
                  var p = -1;
                  var m = t.charset;
                  if (t.charsetSentinel) {
                    for (u = 0; u < c.length; ++u) {
                      if (c[u].indexOf("utf8=") === 0) {
                        if (c[u] === "utf8=%E2%9C%93") {
                          m = "utf-8";
                        } else if (c[u] === "utf8=%26%2310003%3B") {
                          m = "iso-8859-1";
                        }
                        p = u;
                        u = c.length;
                      }
                    }
                  }
                  for (u = 0; u < c.length; ++u) {
                    if (u !== p) {
                      var f;
                      var _;
                      var v = c[u];
                      var y = v.indexOf("]=");
                      var g = y === -1 ? v.indexOf("=") : y + 1;
                      if (g === -1) {
                        f = t.decoder(v, s.decoder, m, "key");
                        _ = t.strictNullHandling ? null : "";
                      } else if ((f = t.decoder(v.slice(0, g), s.decoder, m, "key")) !== null) {
                        _ = n.maybeMap(o(v.slice(g + 1), t, i(h[f]) ? h[f].length : 0), function (e) {
                          return t.decoder(e, s.decoder, m, "value");
                        });
                      }
                      if (_ && t.interpretNumericEntities && m === "iso-8859-1") {
                        _ = a(String(_));
                      }
                      if (v.indexOf("[]=") > -1) {
                        _ = i(_) ? [_] : _;
                      }
                      if (t.comma && i(_) && _.length > t.arrayLimit) {
                        _ = n.combine([], _, t.arrayLimit, t.plainObjects, t.throwOnLimitExceeded);
                      }
                      if (f !== null) {
                        var w = r.call(h, f);
                        if (w && (t.duplicates === "combine" || v.indexOf("[]=") > -1)) {
                          h[f] = n.combine(h[f], _, t.arrayLimit, t.plainObjects, t.throwOnLimitExceeded);
                        } else if (!w || t.duplicates === "last") {
                          h[f] = _;
                        }
                      }
                    }
                  }
                  return h;
                }(e, l) : e;
                var c = l.plainObjects ? {
                  __proto__: null
                } : {};
                for (var u = Object.keys(d), p = 0; p < u.length; ++p) {
                  var m = u[p];
                  var f = h(m, d[m], l, typeof e == "string");
                  c = n.merge(c, f, l);
                }
                if (l.allowSparse === true) {
                  return c;
                } else {
                  return n.compact(c);
                }
              };
            });
            var h = n.cw(function (e, t) {
              var n = d();
              var r = l();
              var i = s();
              var a = Object.prototype.hasOwnProperty;
              var o = {
                brackets: function (e) {
                  return e + "[]";
                },
                comma: "comma",
                indices: function (e, t) {
                  return e + "[" + t + "]";
                },
                repeat: function (e) {
                  return e;
                }
              };
              var h = Array.isArray;
              var c = Array.prototype.push;
              function u(e, t) {
                c.apply(e, h(t) ? t : [t]);
              }
              var p = Date.prototype.toISOString;
              var m = i.default;
              var f = {
                addQueryPrefix: false,
                allowDots: false,
                allowEmptyArrays: false,
                arrayFormat: "indices",
                charset: "utf-8",
                charsetSentinel: false,
                commaRoundTrip: false,
                delimiter: "&",
                depth: Infinity,
                encode: true,
                encodeDotInKeys: false,
                encoder: r.encode,
                encodeValuesOnly: false,
                filter: undefined,
                format: m,
                formatter: i.formatters[m],
                indices: false,
                serializeDate: function (e) {
                  return p.call(e);
                },
                skipNulls: false,
                strictNullHandling: false
              };
              var _ = {};
              var v = function e(t, i, s, a, o, l, d, c, p, m, v, y, g, w, x, b, T, A, C, S) {
                var E = t;
                if (S > C) {
                  throw new RangeError("Input depth exceeded depth option of " + C);
                }
                var O;
                for (var k = A, P = 0, M = false; (k = k.get(_)) !== undefined && !M;) {
                  var R = k.get(t);
                  P += 1;
                  if (R !== undefined) {
                    if (R === P) {
                      throw new RangeError("Cyclic object value");
                    }
                    M = true;
                  }
                  if (k.get(_) === undefined) {
                    P = 0;
                  }
                }
                if ((E = typeof m == "function" ? m(i, E) : E) instanceof Date) {
                  E = g(E);
                } else if (s === "comma" && h(E)) {
                  E = r.maybeMap(E, function (e) {
                    if (e instanceof Date) {
                      return g(e);
                    } else {
                      return e;
                    }
                  });
                }
                if (E === null) {
                  if (l) {
                    return x(p && !b ? p(i, f.encoder, T, "key", w) : i);
                  }
                  E = "";
                }
                if (typeof (O = E) == "string" || typeof O == "number" || typeof O == "boolean" || typeof O == "symbol" || typeof O == "bigint" || r.isBuffer(E)) {
                  if (p) {
                    return [x(b ? i : p(i, f.encoder, T, "key", w)) + "=" + x(p(E, f.encoder, T, "value", w))];
                  } else {
                    return [x(i) + "=" + x(String(E))];
                  }
                }
                var I;
                var L = [];
                if (E === undefined) {
                  return L;
                }
                if (s === "comma" && h(E)) {
                  if (b && p) {
                    E = r.maybeMap(E, function (e) {
                      if (e == null) {
                        return e;
                      } else {
                        return p(e);
                      }
                    });
                  }
                  I = [{
                    value: E.length > 0 ? E.join(",") || null : undefined
                  }];
                } else if (h(m)) {
                  I = m;
                } else {
                  var j = Object.keys(E);
                  I = v ? j.sort(v) : j;
                }
                var B = c ? String(i).replace(/\./g, "%2E") : String(i);
                var D = a && h(E) && E.length === 1 ? B + "[]" : B;
                if (o && h(E) && E.length === 0 && Object.keys(E).length === 0) {
                  return D + "[]";
                }
                for (var F = 0; F < I.length; ++F) {
                  var N = I[F];
                  var G = typeof N == "object" && N && N.value !== undefined ? N.value : E[N];
                  if (!d || G !== null) {
                    var U = y && c ? String(N).replace(/\./g, "%2E") : String(N);
                    var V = h(E) ? typeof s == "function" ? s(D, U) : D : D + (y ? "." + U : "[" + U + "]");
                    A.set(t, P);
                    var H = n();
                    H.set(_, A);
                    u(L, e(G, V, s, a, o, l, d, c, s === "comma" && b && h(E) ? null : p, m, v, y, g, w, x, b, T, H, C, S + 1));
                  }
                }
                return L;
              };
              e.exports = function (e, t) {
                var r;
                var s = e;
                var l = function (e) {
                  if (!e) {
                    return f;
                  }
                  if (e.allowEmptyArrays !== undefined && typeof e.allowEmptyArrays != "boolean") {
                    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
                  }
                  if (e.encodeDotInKeys !== undefined && typeof e.encodeDotInKeys != "boolean") {
                    throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
                  }
                  if (e.encoder !== null && e.encoder !== undefined && typeof e.encoder != "function") {
                    throw new TypeError("Encoder has to be a function.");
                  }
                  var t = e.charset || f.charset;
                  if (e.charset !== undefined && e.charset !== "utf-8" && e.charset !== "iso-8859-1") {
                    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                  }
                  var n = i.default;
                  if (e.format !== undefined) {
                    if (!a.call(i.formatters, e.format)) {
                      throw new TypeError("Unknown format option provided.");
                    }
                    n = e.format;
                  }
                  var r;
                  var s = i.formatters[n];
                  var l = f.filter;
                  if (typeof e.filter == "function" || h(e.filter)) {
                    l = e.filter;
                  }
                  r = e.arrayFormat in o ? e.arrayFormat : "indices" in e ? e.indices ? "indices" : "repeat" : f.arrayFormat;
                  if ("commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean") {
                    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
                  }
                  var d = e.allowDots === undefined ? e.encodeDotInKeys === true || f.allowDots : !!e.allowDots;
                  return {
                    addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : f.addQueryPrefix,
                    allowDots: d,
                    allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : f.allowEmptyArrays,
                    arrayFormat: r,
                    charset: t,
                    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : f.charsetSentinel,
                    commaRoundTrip: !!e.commaRoundTrip,
                    delimiter: e.delimiter === undefined ? f.delimiter : e.delimiter,
                    depth: typeof e.depth == "number" ? e.depth : f.depth,
                    encode: typeof e.encode == "boolean" ? e.encode : f.encode,
                    encodeDotInKeys: typeof e.encodeDotInKeys == "boolean" ? e.encodeDotInKeys : f.encodeDotInKeys,
                    encoder: typeof e.encoder == "function" ? e.encoder : f.encoder,
                    encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : f.encodeValuesOnly,
                    filter: l,
                    format: n,
                    formatter: s,
                    serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : f.serializeDate,
                    skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : f.skipNulls,
                    sort: typeof e.sort == "function" ? e.sort : null,
                    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : f.strictNullHandling
                  };
                }(t);
                if (typeof l.filter == "function") {
                  s = (0, l.filter)("", s);
                } else if (h(l.filter)) {
                  r = l.filter;
                }
                var d = [];
                if (typeof s != "object" || s === null) {
                  return "";
                }
                var c = o[l.arrayFormat];
                var p = c === "comma" && l.commaRoundTrip;
                r ||= Object.keys(s);
                if (l.sort) {
                  r.sort(l.sort);
                }
                var m = n();
                for (var _ = 0; _ < r.length; ++_) {
                  var y = r[_];
                  if (y != null) {
                    var g = s[y];
                    if (!l.skipNulls || g !== null) {
                      var w = l.encodeDotInKeys ? String(y).replace(/\./g, "%2E") : String(y);
                      u(d, v(g, w, c, p, l.allowEmptyArrays, l.strictNullHandling, l.skipNulls, l.encodeDotInKeys, l.encode ? l.encoder : null, l.filter, l.sort, l.allowDots, l.serializeDate, l.format, l.formatter, l.encodeValuesOnly, l.charset, m, l.depth, 0));
                    }
                  }
                }
                var x = d.join(l.delimiter);
                var b = l.addQueryPrefix === true ? "?" : "";
                if (l.charsetSentinel) {
                  if (l.charset === "iso-8859-1") {
                    b += "utf8=%26%2310003%3B" + l.delimiter;
                  } else {
                    b += "utf8=%E2%9C%93" + l.delimiter;
                  }
                }
                if (x.length > 0) {
                  return b + x;
                } else {
                  return "";
                }
              };
            });
            var l = n.cw(function (e, t) {
              var r = s();
              var i = d();
              var a = n(30655);
              var o = Object.prototype.hasOwnProperty;
              var h = Array.isArray;
              var l = i();
              function c(e, t) {
                l.set(e, t);
                return e;
              }
              function u(e) {
                return l.has(e);
              }
              function p(e) {
                return l.get(e);
              }
              function m(e, t) {
                l.set(e, t);
              }
              var f = function () {
                var e = [];
                for (var t = 0; t < 256; ++t) {
                  e[e.length] = "%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase();
                }
                return e;
              }();
              function _(e, t) {
                var n = t && t.plainObjects ? {
                  __proto__: null
                } : {};
                for (var r = 0; r < e.length; ++r) {
                  if (e[r] !== undefined) {
                    n[r] = e[r];
                  }
                }
                return n;
              }
              function v(e, t, n) {
                if (t === "__proto__" && a) {
                  a(e, t, {
                    configurable: true,
                    enumerable: true,
                    value: n,
                    writable: true
                  });
                } else {
                  e[t] = n;
                }
              }
              var y = 1024;
              e.exports = {
                arrayToObject: _,
                assign: function (e, t) {
                  return Object.keys(t).reduce(function (e, n) {
                    v(e, n, t[n]);
                    return e;
                  }, e);
                },
                combine: function (e, t, n, r, i) {
                  if (u(e)) {
                    if (i) {
                      throw new RangeError("Array limit exceeded. Only " + n + " element" + (n === 1 ? "" : "s") + " allowed in an array.");
                    }
                    for (var s = h(t) ? t : [t], a = p(e), o = 0; o < s.length; ++o) {
                      e[a += 1] = s[o];
                    }
                    m(e, a);
                    return e;
                  }
                  var l = [].concat(e, t);
                  if (l.length > n) {
                    if (i) {
                      throw new RangeError("Array limit exceeded. Only " + n + " element" + (n === 1 ? "" : "s") + " allowed in an array.");
                    }
                    return c(_(l, {
                      plainObjects: r
                    }), l.length - 1);
                  }
                  return l;
                },
                compact: function (e) {
                  for (var t = [{
                      obj: {
                        o: e
                      },
                      prop: "o"
                    }], n = i(), r = 0; r < t.length; ++r) {
                    var s = t[r];
                    var a = s.obj[s.prop];
                    for (var o = Object.keys(a), l = 0; l < o.length; ++l) {
                      var d = o[l];
                      var c = a[d];
                      if (typeof c == "object" && c !== null && !n.has(c)) {
                        t[t.length] = {
                          obj: a,
                          prop: d
                        };
                        n.set(c, true);
                      }
                    }
                  }
                  (function (e) {
                    while (e.length > 1) {
                      var t = e.pop();
                      var n = t.obj[t.prop];
                      if (h(n)) {
                        var r = [];
                        for (var i = 0; i < n.length; ++i) {
                          if (n[i] !== undefined) {
                            r[r.length] = n[i];
                          }
                        }
                        t.obj[t.prop] = r;
                      }
                    }
                  })(t);
                  return e;
                },
                decode: function (e, t, n) {
                  var r = e.replace(/\+/g, " ");
                  if (n === "iso-8859-1") {
                    return r.replace(/%[0-9a-f]{2}/gi, unescape);
                  }
                  try {
                    return decodeURIComponent(r);
                  } catch (e) {
                    return r;
                  }
                },
                encode: function (e, t, n, i, s) {
                  if (e.length === 0) {
                    return e;
                  }
                  var a = e;
                  if (typeof e == "symbol") {
                    a = Symbol.prototype.toString.call(e);
                  } else if (typeof e != "string") {
                    a = String(e);
                  }
                  if (n === "iso-8859-1") {
                    return escape(a).replace(/%u[0-9a-f]{4}/gi, function (e) {
                      return "%26%23" + parseInt(e.slice(2), 16) + "%3B";
                    });
                  }
                  var o = "";
                  for (var h = 0; h < a.length; h += y) {
                    var l = a.length >= y ? a.slice(h, h + y) : a;
                    if (h + y < a.length) {
                      var d = l.charCodeAt(l.length - 1);
                      if (d >= 55296 && d <= 56319) {
                        l = l.slice(0, -1);
                        h -= 1;
                      }
                    }
                    var c = [];
                    for (var u = 0; u < l.length; ++u) {
                      var p = l.charCodeAt(u);
                      if (p === 45 || p === 46 || p === 95 || p === 126 || p >= 48 && p <= 57 || p >= 65 && p <= 90 || p >= 97 && p <= 122 || s === r.RFC1738 && (p === 40 || p === 41)) {
                        c[c.length] = l.charAt(u);
                      } else if (p < 128) {
                        c[c.length] = f[p];
                      } else if (p < 2048) {
                        c[c.length] = f[p >> 6 | 192] + f[p & 63 | 128];
                      } else if (p < 55296 || p >= 57344) {
                        c[c.length] = f[p >> 12 | 224] + f[p >> 6 & 63 | 128] + f[p & 63 | 128];
                      } else {
                        u += 1;
                        p = 65536 + ((p & 1023) << 10 | l.charCodeAt(u) & 1023);
                        c[c.length] = f[p >> 18 | 240] + f[p >> 12 & 63 | 128] + f[p >> 6 & 63 | 128] + f[p & 63 | 128];
                      }
                    }
                    o += c.join("");
                  }
                  return o;
                },
                isBuffer: function (e) {
                  return !!e && typeof e == "object" && !!e.constructor && typeof e.constructor.isBuffer == "function" && !!e.constructor.isBuffer(e);
                },
                isOverflow: u,
                isRegExp: function (e) {
                  return Object.prototype.toString.call(e) === "[object RegExp]";
                },
                markOverflow: c,
                maybeMap: function (e, t) {
                  if (h(e)) {
                    var n = [];
                    for (var r = 0; r < e.length; r += 1) {
                      n[n.length] = t(e[r]);
                    }
                    return n;
                  }
                  return t(e);
                },
                merge: function e(t, n, r) {
                  if (!n) {
                    return t;
                  }
                  if (typeof n != "object" && typeof n != "function") {
                    if (h(t)) {
                      var i = t.length;
                      if (r && typeof r.arrayLimit == "number" && i >= r.arrayLimit) {
                        if (r.throwOnLimitExceeded) {
                          throw new RangeError("Array limit exceeded. Only " + r.arrayLimit + " element" + (r.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
                        }
                        return c(_(t.concat(n), r), i);
                      }
                      t[i] = n;
                    } else {
                      if (!t || typeof t != "object") {
                        return [t, n];
                      }
                      if (u(t)) {
                        var s = p(t) + 1;
                        t[s] = n;
                        m(t, s);
                      } else {
                        if (r && r.strictMerge) {
                          return [t, n];
                        }
                        if (r && (r.plainObjects || r.allowPrototypes) || !o.call(Object.prototype, n)) {
                          t[n] = true;
                        }
                      }
                    }
                    return t;
                  }
                  if (!t || typeof t != "object") {
                    if (u(n)) {
                      for (var a = Object.keys(n), l = r && r.plainObjects ? {
                          __proto__: null,
                          0: t
                        } : {
                          0: t
                        }, d = 0; d < a.length; d++) {
                        l[parseInt(a[d], 10) + 1] = n[a[d]];
                      }
                      return c(l, p(n) + 1);
                    }
                    var f = [t].concat(n);
                    if (r && typeof r.arrayLimit == "number" && f.length > r.arrayLimit) {
                      if (r.throwOnLimitExceeded) {
                        throw new RangeError("Array limit exceeded. Only " + r.arrayLimit + " element" + (r.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
                      }
                      return c(_(f, r), f.length - 1);
                    }
                    return f;
                  }
                  var y = t;
                  if (h(t) && !h(n)) {
                    y = _(t, r);
                  }
                  if (h(t) && h(n)) {
                    n.forEach(function (n, i) {
                      if (o.call(t, i)) {
                        var s = t[i];
                        if (s && typeof s == "object" && n && typeof n == "object") {
                          t[i] = e(s, n, r);
                        } else {
                          t[t.length] = n;
                        }
                      } else {
                        t[i] = n;
                      }
                    });
                    if (r && typeof r.arrayLimit == "number" && t.length > r.arrayLimit) {
                      if (r.throwOnLimitExceeded) {
                        throw new RangeError("Array limit exceeded. Only " + r.arrayLimit + " element" + (r.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
                      }
                      return c(_(t, r), t.length - 1);
                    }
                    return t;
                  }
                  return Object.keys(n).reduce(function (t, i) {
                    var s = n[i];
                    if (o.call(t, i)) {
                      v(t, i, e(t[i], s, r));
                    } else {
                      v(t, i, s);
                    }
                    if (u(n) && !u(t)) {
                      c(t, p(n));
                    }
                    if (u(t)) {
                      var a = parseInt(i, 10);
                      if (String(a) === i && a >= 0 && a > p(t)) {
                        m(t, a);
                      }
                    }
                    return t;
                  }, y);
                }
              };
            });
            var d = n.cw(function (e, t) {
              var r = n(69675);
              var i = n(58859);
              var s = n(14803);
              var a = n(80507);
              var o = n(72271) || a || s;
              e.exports = function () {
                var e;
                var t = {
                  assert: function (e) {
                    if (!t.has(e)) {
                      var n = e && Object(e) === e ? "the given object key" : i(e);
                      throw new r("Side channel does not contain " + n);
                    }
                  },
                  delete: function (t) {
                    return !!e && e.delete(t);
                  },
                  get: function (t) {
                    return e && e.get(t);
                  },
                  has: function (t) {
                    return !!e && e.has(t);
                  },
                  set: function (t, n) {
                    e ||= o();
                    e.set(t, n);
                  }
                };
                return t;
              };
            });
            var c = n.cw(function (e, t) {
              var r = n(9655);
              function i() {
                this.protocol = null;
                this.slashes = null;
                this.auth = null;
                this.host = null;
                this.port = null;
                this.hostname = null;
                this.hash = null;
                this.search = null;
                this.query = null;
                this.pathname = null;
                this.path = null;
                this.href = null;
              }
              var s = /^([a-z0-9.+-]+:)/i;
              var o = /:[0-9]*$/;
              var h = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/;
              var l = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", "\"", "`", " ", "\r", "\n", "\t"]);
              var d = ["'"].concat(l);
              var c = ["%", "/", "?", ";", "#"].concat(d);
              var u = ["/", "?", "#"];
              var p = /^[+a-z0-9A-Z_-]{0,63}$/;
              var m = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
              var f = {
                javascript: true,
                "javascript:": true
              };
              var _ = {
                javascript: true,
                "javascript:": true
              };
              var v = {
                http: true,
                https: true,
                ftp: true,
                gopher: true,
                file: true,
                "http:": true,
                "https:": true,
                "ftp:": true,
                "gopher:": true,
                "file:": true
              };
              var y = a();
              function g(e, t, n) {
                if (e && typeof e == "object" && e instanceof i) {
                  return e;
                }
                var r = new i();
                r.parse(e, t, n);
                return r;
              }
              i.prototype.parse = function (e, t, n) {
                if (typeof e != "string") {
                  throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
                }
                var i = e.indexOf("?");
                var a = i !== -1 && i < e.indexOf("#") ? "?" : "#";
                var o = e.split(a);
                o[0] = o[0].replace(/\\/g, "/");
                var l = e = o.join(a);
                l = l.trim();
                if (!n && e.split("#").length === 1) {
                  var g = h.exec(l);
                  if (g) {
                    this.path = l;
                    this.href = l;
                    this.pathname = g[1];
                    if (g[2]) {
                      this.search = g[2];
                      this.query = t ? y.parse(this.search.substr(1)) : this.search.substr(1);
                    } else if (t) {
                      this.search = "";
                      this.query = {};
                    }
                    return this;
                  }
                }
                var w = s.exec(l);
                if (w) {
                  var x = (w = w[0]).toLowerCase();
                  this.protocol = x;
                  l = l.substr(w.length);
                }
                if (n || w || l.match(/^\/\/[^@/]+@[^@/]+/)) {
                  var b = l.substr(0, 2) === "//";
                  if (!!b && (!w || !_[w])) {
                    l = l.substr(2);
                    this.slashes = true;
                  }
                }
                if (!_[w] && (b || w && !v[w])) {
                  var T;
                  var A;
                  var C = -1;
                  for (var S = 0; S < u.length; S++) {
                    if ((E = l.indexOf(u[S])) !== -1 && (C === -1 || E < C)) {
                      C = E;
                    }
                  }
                  if ((A = C === -1 ? l.lastIndexOf("@") : l.lastIndexOf("@", C)) !== -1) {
                    T = l.slice(0, A);
                    l = l.slice(A + 1);
                    this.auth = decodeURIComponent(T);
                  }
                  C = -1;
                  S = 0;
                  for (; S < c.length; S++) {
                    var E;
                    if ((E = l.indexOf(c[S])) !== -1 && (C === -1 || E < C)) {
                      C = E;
                    }
                  }
                  if (C === -1) {
                    C = l.length;
                  }
                  this.host = l.slice(0, C);
                  l = l.slice(C);
                  this.parseHost();
                  this.hostname = this.hostname || "";
                  var O = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
                  if (!O) {
                    var k = this.hostname.split(/\./);
                    for (var P = (S = 0, k.length); S < P; S++) {
                      var M = k[S];
                      if (M && !M.match(p)) {
                        var R = "";
                        for (var I = 0, L = M.length; I < L; I++) {
                          if (M.charCodeAt(I) > 127) {
                            R += "x";
                          } else {
                            R += M[I];
                          }
                        }
                        if (!R.match(p)) {
                          var j = k.slice(0, S);
                          var B = k.slice(S + 1);
                          var D = M.match(m);
                          if (D) {
                            j.push(D[1]);
                            B.unshift(D[2]);
                          }
                          if (B.length) {
                            l = "/" + B.join(".") + l;
                          }
                          this.hostname = j.join(".");
                          break;
                        }
                      }
                    }
                  }
                  if (this.hostname.length > 255) {
                    this.hostname = "";
                  } else {
                    this.hostname = this.hostname.toLowerCase();
                  }
                  if (!O) {
                    this.hostname = r.toASCII(this.hostname);
                  }
                  var F = this.port ? ":" + this.port : "";
                  var N = this.hostname || "";
                  this.host = N + F;
                  this.href += this.host;
                  if (O) {
                    this.hostname = this.hostname.substr(1, this.hostname.length - 2);
                    if (l[0] !== "/") {
                      l = "/" + l;
                    }
                  }
                }
                if (!f[x]) {
                  S = 0;
                  P = d.length;
                  for (; S < P; S++) {
                    var G = d[S];
                    if (l.indexOf(G) !== -1) {
                      var U = encodeURIComponent(G);
                      if (U === G) {
                        U = escape(G);
                      }
                      l = l.split(G).join(U);
                    }
                  }
                }
                var V = l.indexOf("#");
                if (V !== -1) {
                  this.hash = l.substr(V);
                  l = l.slice(0, V);
                }
                var H = l.indexOf("?");
                if (H !== -1) {
                  this.search = l.substr(H);
                  this.query = l.substr(H + 1);
                  if (t) {
                    this.query = y.parse(this.query);
                  }
                  l = l.slice(0, H);
                } else if (t) {
                  this.search = "";
                  this.query = {};
                }
                if (l) {
                  this.pathname = l;
                }
                if (v[x] && this.hostname && !this.pathname) {
                  this.pathname = "/";
                }
                if (this.pathname || this.search) {
                  F = this.pathname || "";
                  var z = this.search || "";
                  this.path = F + z;
                }
                this.href = this.format();
                return this;
              };
              i.prototype.format = function () {
                var e = this.auth || "";
                if (e) {
                  e = (e = encodeURIComponent(e)).replace(/%3A/i, ":");
                  e += "@";
                }
                var t = this.protocol || "";
                var n = this.pathname || "";
                var r = this.hash || "";
                var i = false;
                var s = "";
                if (this.host) {
                  i = e + this.host;
                } else if (this.hostname) {
                  i = e + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]");
                  if (this.port) {
                    i += ":" + this.port;
                  }
                }
                if (this.query && typeof this.query == "object" && Object.keys(this.query).length) {
                  s = y.stringify(this.query, {
                    arrayFormat: "repeat",
                    addQueryPrefix: false
                  });
                }
                var a = this.search || s && "?" + s || "";
                if (t && t.substr(-1) !== ":") {
                  t += ":";
                }
                if (this.slashes || (!t || v[t]) && i !== false) {
                  i = "//" + (i || "");
                  if (n && n.charAt(0) !== "/") {
                    n = "/" + n;
                  }
                } else {
                  i ||= "";
                }
                if (r && r.charAt(0) !== "#") {
                  r = "#" + r;
                }
                if (a && a.charAt(0) !== "?") {
                  a = "?" + a;
                }
                return t + i + (n = n.replace(/[?#]/g, function (e) {
                  return encodeURIComponent(e);
                })) + (a = a.replace("#", "%23")) + r;
              };
              i.prototype.resolve = function (e) {
                return this.resolveObject(g(e, false, true)).format();
              };
              i.prototype.resolveObject = function (e) {
                if (typeof e == "string") {
                  var t = new i();
                  t.parse(e, false, true);
                  e = t;
                }
                var n = new i();
                for (var r = Object.keys(this), s = 0; s < r.length; s++) {
                  var a = r[s];
                  n[a] = this[a];
                }
                n.hash = e.hash;
                if (e.href === "") {
                  n.href = n.format();
                  return n;
                }
                if (e.slashes && !e.protocol) {
                  for (var o = Object.keys(e), h = 0; h < o.length; h++) {
                    var l = o[h];
                    if (l !== "protocol") {
                      n[l] = e[l];
                    }
                  }
                  if (v[n.protocol] && n.hostname && !n.pathname) {
                    n.pathname = "/";
                    n.path = n.pathname;
                  }
                  n.href = n.format();
                  return n;
                }
                if (e.protocol && e.protocol !== n.protocol) {
                  if (!v[e.protocol]) {
                    for (var d = Object.keys(e), c = 0; c < d.length; c++) {
                      var u = d[c];
                      n[u] = e[u];
                    }
                    n.href = n.format();
                    return n;
                  }
                  n.protocol = e.protocol;
                  if (e.host || _[e.protocol]) {
                    n.pathname = e.pathname;
                  } else {
                    for (var p = (e.pathname || "").split("/"); p.length && !(e.host = p.shift()););
                    e.host ||= "";
                    e.hostname ||= "";
                    if (p[0] !== "") {
                      p.unshift("");
                    }
                    if (p.length < 2) {
                      p.unshift("");
                    }
                    n.pathname = p.join("/");
                  }
                  n.search = e.search;
                  n.query = e.query;
                  n.host = e.host || "";
                  n.auth = e.auth;
                  n.hostname = e.hostname || e.host;
                  n.port = e.port;
                  if (n.pathname || n.search) {
                    var m = n.pathname || "";
                    var f = n.search || "";
                    n.path = m + f;
                  }
                  n.slashes = n.slashes || e.slashes;
                  n.href = n.format();
                  return n;
                }
                var y = n.pathname && n.pathname.charAt(0) === "/";
                var g = e.host || e.pathname && e.pathname.charAt(0) === "/";
                var w = g || y || n.host && e.pathname;
                var x = w;
                var b = n.pathname && n.pathname.split("/") || [];
                p = e.pathname && e.pathname.split("/") || [];
                var T = n.protocol && !v[n.protocol];
                if (T) {
                  n.hostname = "";
                  n.port = null;
                  if (n.host) {
                    if (b[0] === "") {
                      b[0] = n.host;
                    } else {
                      b.unshift(n.host);
                    }
                  }
                  n.host = "";
                  if (e.protocol) {
                    e.hostname = null;
                    e.port = null;
                    if (e.host) {
                      if (p[0] === "") {
                        p[0] = e.host;
                      } else {
                        p.unshift(e.host);
                      }
                    }
                    e.host = null;
                  }
                  w = w && (p[0] === "" || b[0] === "");
                }
                if (g) {
                  n.host = e.host || e.host === "" ? e.host : n.host;
                  n.hostname = e.hostname || e.hostname === "" ? e.hostname : n.hostname;
                  n.search = e.search;
                  n.query = e.query;
                  b = p;
                } else if (p.length) {
                  b ||= [];
                  b.pop();
                  b = b.concat(p);
                  n.search = e.search;
                  n.query = e.query;
                } else if (e.search != null) {
                  if (T) {
                    n.host = b.shift();
                    n.hostname = n.host;
                    if (O = !!n.host && !!(n.host.indexOf("@") > 0) && n.host.split("@")) {
                      n.auth = O.shift();
                      n.hostname = O.shift();
                      n.host = n.hostname;
                    }
                  }
                  n.search = e.search;
                  n.query = e.query;
                  if (n.pathname !== null || n.search !== null) {
                    n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "");
                  }
                  n.href = n.format();
                  return n;
                }
                if (!b.length) {
                  n.pathname = null;
                  if (n.search) {
                    n.path = "/" + n.search;
                  } else {
                    n.path = null;
                  }
                  n.href = n.format();
                  return n;
                }
                var A = b.slice(-1)[0];
                var C = (n.host || e.host || b.length > 1) && (A === "." || A === "..") || A === "";
                var S = 0;
                for (var E = b.length; E >= 0; E--) {
                  if ((A = b[E]) === ".") {
                    b.splice(E, 1);
                  } else if (A === "..") {
                    b.splice(E, 1);
                    S++;
                  } else if (S) {
                    b.splice(E, 1);
                    S--;
                  }
                }
                if (!w && !x) {
                  for (; S--; S) {
                    b.unshift("..");
                  }
                }
                if (!!w && b[0] !== "" && (!b[0] || b[0].charAt(0) !== "/")) {
                  b.unshift("");
                }
                if (C && b.join("/").substr(-1) !== "/") {
                  b.push("");
                }
                var O;
                var k = b[0] === "" || b[0] && b[0].charAt(0) === "/";
                if (T) {
                  n.hostname = k ? "" : b.length ? b.shift() : "";
                  n.host = n.hostname;
                  if (O = !!n.host && !!(n.host.indexOf("@") > 0) && n.host.split("@")) {
                    n.auth = O.shift();
                    n.hostname = O.shift();
                    n.host = n.hostname;
                  }
                }
                if ((w = w || n.host && b.length) && !k) {
                  b.unshift("");
                }
                if (b.length > 0) {
                  n.pathname = b.join("/");
                } else {
                  n.pathname = null;
                  n.path = null;
                }
                if (n.pathname !== null || n.search !== null) {
                  n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "");
                }
                n.auth = e.auth || n.auth;
                n.slashes = n.slashes || e.slashes;
                n.href = n.format();
                return n;
              };
              i.prototype.parseHost = function () {
                var e = this.host;
                var t = o.exec(e);
                if (t) {
                  if ((t = t[0]) !== ":") {
                    this.port = t.substr(1);
                  }
                  e = e.substr(0, e.length - t.length);
                }
                if (e) {
                  this.hostname = e;
                }
              };
              t.qg = g;
              t.hd = function (e, t) {
                return g(e, false, true).resolve(t);
              };
              t.GP = function (e) {
                if (typeof e == "string") {
                  e = g(e);
                }
                if (e instanceof i) {
                  return e.format();
                } else {
                  return i.prototype.format.call(e);
                }
              };
            });
            var u = () => n(26910);
            var p = n(55323);
            i();
            r();
            c();
            var m = n(11313);
            var f = {
              parse: c().qg,
              format: c().GP,
              resolve: c().hd
            };
            function _(e) {
              if (typeof e != "string") {
                throw new TypeError("Path must be a string. Received " + JSON.stringify(e));
              }
            }
            function v(e) {
              return e.split("?")[0].split("#")[0];
            }
            var y = {
              toPosix: function (e) {
                return e.replace(new RegExp("\\".replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), "/");
              },
              isUrl: function (e) {
                return /^https?:/.test(this.toPosix(e));
              },
              isDataUrl: function (e) {
                return /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(e);
              },
              hasProtocol: function (e) {
                return /^[^/:]+:\//.test(this.toPosix(e));
              },
              getProtocol: function (e) {
                _(e);
                e = this.toPosix(e);
                var t = "";
                var n = /^file:\/\/\//.exec(e);
                var r = /^[^/:]+:\/\//.exec(e);
                var i = /^[^/:]+:\//.exec(e);
                if (n || r || i) {
                  var s = (n == null ? undefined : n[0]) || (r == null ? undefined : r[0]) || (i == null ? undefined : i[0]);
                  t = s;
                  e = e.slice(s.length);
                }
                return t;
              },
              toAbsolute: function (e, t, n) {
                if (this.isDataUrl(e)) {
                  return e;
                }
                var r = v(this.toPosix(t ?? p.W0.ADAPTER.getBaseUrl()));
                var i = v(this.toPosix(n ?? this.rootname(r)));
                _(e);
                if ((e = this.toPosix(e)).startsWith("/")) {
                  return y.join(i, e.slice(1));
                } else if (this.isAbsolute(e)) {
                  return e;
                } else {
                  return this.join(r, e);
                }
              },
              normalize: function (e) {
                _(e = this.toPosix(e));
                if (e.length === 0) {
                  return ".";
                }
                var t = "";
                var n = e.startsWith("/");
                if (this.hasProtocol(e)) {
                  t = this.rootname(e);
                  e = e.slice(t.length);
                }
                var r = e.endsWith("/");
                if ((e = function (e) {
                  var t;
                  var n = "";
                  var r = 0;
                  var i = -1;
                  var s = 0;
                  for (var a = 0; a <= e.length; ++a) {
                    if (a < e.length) {
                      t = e.charCodeAt(a);
                    } else {
                      if (t === 47) {
                        break;
                      }
                      t = 47;
                    }
                    if (t === 47) {
                      if (i === a - 1 || s === 1) ;else if (i !== a - 1 && s === 2) {
                        if (n.length < 2 || r !== 2 || n.charCodeAt(n.length - 1) !== 46 || n.charCodeAt(n.length - 2) !== 46) {
                          if (n.length > 2) {
                            var o = n.lastIndexOf("/");
                            if (o !== n.length - 1) {
                              if (o === -1) {
                                n = "";
                                r = 0;
                              } else {
                                r = (n = n.slice(0, o)).length - 1 - n.lastIndexOf("/");
                              }
                              i = a;
                              s = 0;
                              continue;
                            }
                          } else if (n.length === 2 || n.length === 1) {
                            n = "";
                            r = 0;
                            i = a;
                            s = 0;
                            continue;
                          }
                        }
                      } else {
                        if (n.length > 0) {
                          n += "/" + e.slice(i + 1, a);
                        } else {
                          n = e.slice(i + 1, a);
                        }
                        r = a - i - 1;
                      }
                      i = a;
                      s = 0;
                    } else if (t === 46 && s !== -1) {
                      ++s;
                    } else {
                      s = -1;
                    }
                  }
                  return n;
                }(e)).length > 0 && r) {
                  e += "/";
                }
                if (n) {
                  return "/" + e;
                } else {
                  return t + e;
                }
              },
              isAbsolute: function (e) {
                _(e);
                e = this.toPosix(e);
                return !!this.hasProtocol(e) || e.startsWith("/");
              },
              join: function () {
                var t;
                var n = arguments;
                var r = [];
                for (var i = 0; i < arguments.length; i++) {
                  r[i] = n[i];
                }
                if (r.length === 0) {
                  return ".";
                }
                for (var s = 0; s < r.length; ++s) {
                  var a = r[s];
                  _(a);
                  if (a.length > 0) {
                    if (t === undefined) {
                      t = a;
                    } else {
                      var o = r[s - 1] ?? "";
                      if (this.extname(o)) {
                        t += "/../" + a;
                      } else {
                        t += "/" + a;
                      }
                    }
                  }
                }
                if (t === undefined) {
                  return ".";
                } else {
                  return this.normalize(t);
                }
              },
              dirname: function (e) {
                _(e);
                if (e.length === 0) {
                  return ".";
                }
                var t = (e = this.toPosix(e)).charCodeAt(0);
                var n = t === 47;
                var r = -1;
                var i = true;
                var s = this.getProtocol(e);
                var a = e;
                for (var o = (e = e.slice(s.length)).length - 1; o >= 1; --o) {
                  if ((t = e.charCodeAt(o)) === 47) {
                    if (!i) {
                      r = o;
                      break;
                    }
                  } else {
                    i = false;
                  }
                }
                if (r === -1) {
                  if (n) {
                    return "/";
                  } else if (this.isUrl(a)) {
                    return s + e;
                  } else {
                    return s;
                  }
                } else if (n && r === 1) {
                  return "//";
                } else {
                  return s + e.slice(0, r);
                }
              },
              rootname: function (e) {
                _(e);
                var t = "";
                t = (e = this.toPosix(e)).startsWith("/") ? "/" : this.getProtocol(e);
                if (this.isUrl(e)) {
                  var n = e.indexOf("/", t.length);
                  if (!(t = n !== -1 ? e.slice(0, n) : e).endsWith("/")) {
                    t += "/";
                  }
                }
                return t;
              },
              basename: function (e, t) {
                _(e);
                if (t) {
                  _(t);
                }
                e = this.toPosix(e);
                var n;
                var r = 0;
                var i = -1;
                var s = true;
                if (t !== undefined && t.length > 0 && t.length <= e.length) {
                  if (t.length === e.length && t === e) {
                    return "";
                  }
                  var a = t.length - 1;
                  var o = -1;
                  for (n = e.length - 1; n >= 0; --n) {
                    var h = e.charCodeAt(n);
                    if (h === 47) {
                      if (!s) {
                        r = n + 1;
                        break;
                      }
                    } else {
                      if (o === -1) {
                        s = false;
                        o = n + 1;
                      }
                      if (a >= 0) {
                        if (h === t.charCodeAt(a)) {
                          if (--a === -1) {
                            i = n;
                          }
                        } else {
                          a = -1;
                          i = o;
                        }
                      }
                    }
                  }
                  if (r === i) {
                    i = o;
                  } else if (i === -1) {
                    i = e.length;
                  }
                  return e.slice(r, i);
                }
                for (n = e.length - 1; n >= 0; --n) {
                  if (e.charCodeAt(n) === 47) {
                    if (!s) {
                      r = n + 1;
                      break;
                    }
                  } else if (i === -1) {
                    s = false;
                    i = n + 1;
                  }
                }
                if (i === -1) {
                  return "";
                } else {
                  return e.slice(r, i);
                }
              },
              extname: function (e) {
                _(e);
                var t = -1;
                var n = 0;
                var r = -1;
                var i = true;
                var s = 0;
                for (var a = (e = this.toPosix(e)).length - 1; a >= 0; --a) {
                  var o = e.charCodeAt(a);
                  if (o !== 47) {
                    if (r === -1) {
                      i = false;
                      r = a + 1;
                    }
                    if (o === 46) {
                      if (t === -1) {
                        t = a;
                      } else if (s !== 1) {
                        s = 1;
                      }
                    } else if (t !== -1) {
                      s = -1;
                    }
                  } else if (!i) {
                    n = a + 1;
                    break;
                  }
                }
                if (t === -1 || r === -1 || s === 0 || s === 1 && t === r - 1 && t === n + 1) {
                  return "";
                } else {
                  return e.slice(t, r);
                }
              },
              parse: function (e) {
                _(e);
                var t = {
                  root: "",
                  dir: "",
                  base: "",
                  ext: "",
                  name: ""
                };
                if (e.length === 0) {
                  return t;
                }
                var n;
                var r = (e = this.toPosix(e)).charCodeAt(0);
                var i = this.isAbsolute(e);
                t.root = this.rootname(e);
                n = i || this.hasProtocol(e) ? 1 : 0;
                var s = -1;
                var a = 0;
                var o = -1;
                var h = true;
                for (var l = e.length - 1, d = 0; l >= n; --l) {
                  if ((r = e.charCodeAt(l)) !== 47) {
                    if (o === -1) {
                      h = false;
                      o = l + 1;
                    }
                    if (r === 46) {
                      if (s === -1) {
                        s = l;
                      } else if (d !== 1) {
                        d = 1;
                      }
                    } else if (s !== -1) {
                      d = -1;
                    }
                  } else if (!h) {
                    a = l + 1;
                    break;
                  }
                }
                if (s === -1 || o === -1 || d === 0 || d === 1 && s === o - 1 && s === a + 1) {
                  if (o !== -1) {
                    t.base = t.name = a === 0 && i ? e.slice(1, o) : e.slice(a, o);
                  }
                } else {
                  if (a === 0 && i) {
                    t.name = e.slice(1, s);
                    t.base = e.slice(1, o);
                  } else {
                    t.name = e.slice(a, s);
                    t.base = e.slice(a, o);
                  }
                  t.ext = e.slice(s, o);
                }
                t.dir = this.dirname(e);
                return t;
              },
              sep: "/",
              delimiter: ":"
            };
            p.W0.RETINA_PREFIX = /@([0-9\.]+)x/;
            p.W0.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = false;
            var g;
            var w = false;
            var x = "6.5.10";
            function b() {
              w = true;
            }
            function T(e) {
              var t;
              if (!w) {
                if (p.W0.ADAPTER.getNavigator().userAgent.toLowerCase().indexOf("chrome") > -1) {
                  var n = ["\n %c %c %c PixiJS " + x + " - ✰ " + e + " ✰  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ \n\n", "background: #ff66a5; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff66a5; background: #030307; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "background: #ffc3dc; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;"];
                  (t = globalThis.console).log.apply(t, n);
                } else if (globalThis.console) {
                  globalThis.console.log("PixiJS " + x + " - " + e + " - http://www.pixijs.com/");
                }
                w = true;
              }
            }
            function A() {
              if (g === undefined) {
                g = function () {
                  var e = {
                    stencil: true,
                    failIfMajorPerformanceCaveat: p.W0.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT
                  };
                  try {
                    if (!p.W0.ADAPTER.getWebGLRenderingContext()) {
                      return false;
                    }
                    var t = p.W0.ADAPTER.createCanvas();
                    var n = t.getContext("webgl", e) || t.getContext("experimental-webgl", e);
                    var r = !!n && !!n.getContextAttributes().stencil;
                    if (n) {
                      var i = n.getExtension("WEBGL_lose_context");
                      if (i) {
                        i.loseContext();
                      }
                    }
                    n = null;
                    return r;
                  } catch (e) {
                    return false;
                  }
                }();
              }
              return g;
            }
            var C = {
              aliceblue: "#f0f8ff",
              antiquewhite: "#faebd7",
              aqua: "#00ffff",
              aquamarine: "#7fffd4",
              azure: "#f0ffff",
              beige: "#f5f5dc",
              bisque: "#ffe4c4",
              black: "#000000",
              blanchedalmond: "#ffebcd",
              blue: "#0000ff",
              blueviolet: "#8a2be2",
              brown: "#a52a2a",
              burlywood: "#deb887",
              cadetblue: "#5f9ea0",
              chartreuse: "#7fff00",
              chocolate: "#d2691e",
              coral: "#ff7f50",
              cornflowerblue: "#6495ed",
              cornsilk: "#fff8dc",
              crimson: "#dc143c",
              cyan: "#00ffff",
              darkblue: "#00008b",
              darkcyan: "#008b8b",
              darkgoldenrod: "#b8860b",
              darkgray: "#a9a9a9",
              darkgreen: "#006400",
              darkgrey: "#a9a9a9",
              darkkhaki: "#bdb76b",
              darkmagenta: "#8b008b",
              darkolivegreen: "#556b2f",
              darkorange: "#ff8c00",
              darkorchid: "#9932cc",
              darkred: "#8b0000",
              darksalmon: "#e9967a",
              darkseagreen: "#8fbc8f",
              darkslateblue: "#483d8b",
              darkslategray: "#2f4f4f",
              darkslategrey: "#2f4f4f",
              darkturquoise: "#00ced1",
              darkviolet: "#9400d3",
              deeppink: "#ff1493",
              deepskyblue: "#00bfff",
              dimgray: "#696969",
              dimgrey: "#696969",
              dodgerblue: "#1e90ff",
              firebrick: "#b22222",
              floralwhite: "#fffaf0",
              forestgreen: "#228b22",
              fuchsia: "#ff00ff",
              gainsboro: "#dcdcdc",
              ghostwhite: "#f8f8ff",
              goldenrod: "#daa520",
              gold: "#ffd700",
              gray: "#808080",
              green: "#008000",
              greenyellow: "#adff2f",
              grey: "#808080",
              honeydew: "#f0fff0",
              hotpink: "#ff69b4",
              indianred: "#cd5c5c",
              indigo: "#4b0082",
              ivory: "#fffff0",
              khaki: "#f0e68c",
              lavenderblush: "#fff0f5",
              lavender: "#e6e6fa",
              lawngreen: "#7cfc00",
              lemonchiffon: "#fffacd",
              lightblue: "#add8e6",
              lightcoral: "#f08080",
              lightcyan: "#e0ffff",
              lightgoldenrodyellow: "#fafad2",
              lightgray: "#d3d3d3",
              lightgreen: "#90ee90",
              lightgrey: "#d3d3d3",
              lightpink: "#ffb6c1",
              lightsalmon: "#ffa07a",
              lightseagreen: "#20b2aa",
              lightskyblue: "#87cefa",
              lightslategray: "#778899",
              lightslategrey: "#778899",
              lightsteelblue: "#b0c4de",
              lightyellow: "#ffffe0",
              lime: "#00ff00",
              limegreen: "#32cd32",
              linen: "#faf0e6",
              magenta: "#ff00ff",
              maroon: "#800000",
              mediumaquamarine: "#66cdaa",
              mediumblue: "#0000cd",
              mediumorchid: "#ba55d3",
              mediumpurple: "#9370db",
              mediumseagreen: "#3cb371",
              mediumslateblue: "#7b68ee",
              mediumspringgreen: "#00fa9a",
              mediumturquoise: "#48d1cc",
              mediumvioletred: "#c71585",
              midnightblue: "#191970",
              mintcream: "#f5fffa",
              mistyrose: "#ffe4e1",
              moccasin: "#ffe4b5",
              navajowhite: "#ffdead",
              navy: "#000080",
              oldlace: "#fdf5e6",
              olive: "#808000",
              olivedrab: "#6b8e23",
              orange: "#ffa500",
              orangered: "#ff4500",
              orchid: "#da70d6",
              palegoldenrod: "#eee8aa",
              palegreen: "#98fb98",
              paleturquoise: "#afeeee",
              palevioletred: "#db7093",
              papayawhip: "#ffefd5",
              peachpuff: "#ffdab9",
              peru: "#cd853f",
              pink: "#ffc0cb",
              plum: "#dda0dd",
              powderblue: "#b0e0e6",
              purple: "#800080",
              rebeccapurple: "#663399",
              red: "#ff0000",
              rosybrown: "#bc8f8f",
              royalblue: "#4169e1",
              saddlebrown: "#8b4513",
              salmon: "#fa8072",
              sandybrown: "#f4a460",
              seagreen: "#2e8b57",
              seashell: "#fff5ee",
              sienna: "#a0522d",
              silver: "#c0c0c0",
              skyblue: "#87ceeb",
              slateblue: "#6a5acd",
              slategray: "#708090",
              slategrey: "#708090",
              snow: "#fffafa",
              springgreen: "#00ff7f",
              steelblue: "#4682b4",
              tan: "#d2b48c",
              teal: "#008080",
              thistle: "#d8bfd8",
              tomato: "#ff6347",
              turquoise: "#40e0d0",
              violet: "#ee82ee",
              wheat: "#f5deb3",
              white: "#ffffff",
              whitesmoke: "#f5f5f5",
              yellow: "#ffff00",
              yellowgreen: "#9acd32"
            };
            function S(e, t = []) {
              t[0] = (e >> 16 & 255) / 255;
              t[1] = (e >> 8 & 255) / 255;
              t[2] = (e & 255) / 255;
              return t;
            }
            function E(e) {
              var t = e.toString(16);
              return "#" + ("000000".substring(0, 6 - t.length) + t);
            }
            function O(e) {
              if (typeof e == "string" && (e = C[e.toLowerCase()] || e)[0] === "#") {
                e = e.slice(1);
              }
              return parseInt(e, 16);
            }
            function k(e) {
              return (e[0] * 255 << 16) + (e[1] * 255 << 8) + (e[2] * 255 | 0);
            }
            var P = function () {
              var e = [];
              var t = [];
              for (var n = 0; n < 32; n++) {
                e[n] = n;
                t[n] = n;
              }
              e[m.B9.NORMAL_NPM] = m.B9.NORMAL;
              e[m.B9.ADD_NPM] = m.B9.ADD;
              e[m.B9.SCREEN_NPM] = m.B9.SCREEN;
              t[m.B9.NORMAL] = m.B9.NORMAL_NPM;
              t[m.B9.ADD] = m.B9.ADD_NPM;
              t[m.B9.SCREEN] = m.B9.SCREEN_NPM;
              var r = [];
              r.push(t);
              r.push(e);
              return r;
            }();
            function M(e, t) {
              return P[t ? 1 : 0][e];
            }
            function R(e, t, n, r) {
              n = n || new Float32Array(4);
              if (r || r === undefined) {
                n[0] = e[0] * t;
                n[1] = e[1] * t;
                n[2] = e[2] * t;
              } else {
                n[0] = e[0];
                n[1] = e[1];
                n[2] = e[2];
              }
              n[3] = t;
              return n;
            }
            function I(e, t) {
              if (t === 1) {
                return (t * 255 << 24) + e;
              }
              if (t === 0) {
                return 0;
              }
              var n = e >> 16 & 255;
              var r = e >> 8 & 255;
              return (t * 255 << 24) + ((n = n * t + 0.5 | 0) << 16) + ((r = r * t + 0.5 | 0) << 8) + ((e & 255) * t + 0.5 | 0);
            }
            function L(e, t, n, r) {
              (n = n || new Float32Array(4))[0] = (e >> 16 & 255) / 255;
              n[1] = (e >> 8 & 255) / 255;
              n[2] = (e & 255) / 255;
              if (r || r === undefined) {
                n[0] *= t;
                n[1] *= t;
                n[2] *= t;
              }
              n[3] = t;
              return n;
            }
            function j(e, t = null) {
              var n = e * 6;
              if ((t = t || new Uint16Array(n)).length !== n) {
                throw new Error("Out buffer length is incorrect, got " + t.length + " and expected " + n);
              }
              for (var r = 0, i = 0; r < n; r += 6, i += 4) {
                t[r + 0] = i + 0;
                t[r + 1] = i + 1;
                t[r + 2] = i + 2;
                t[r + 3] = i + 0;
                t[r + 4] = i + 2;
                t[r + 5] = i + 3;
              }
              return t;
            }
            function B(e) {
              if (e.BYTES_PER_ELEMENT === 4) {
                if (e instanceof Float32Array) {
                  return "Float32Array";
                } else if (e instanceof Uint32Array) {
                  return "Uint32Array";
                } else {
                  return "Int32Array";
                }
              }
              if (e.BYTES_PER_ELEMENT === 2) {
                if (e instanceof Uint16Array) {
                  return "Uint16Array";
                }
              } else if (e.BYTES_PER_ELEMENT === 1 && e instanceof Uint8Array) {
                return "Uint8Array";
              }
              return null;
            }
            var D = {
              Float32Array,
              Uint32Array,
              Int32Array,
              Uint8Array
            };
            function F(e, t) {
              var n = 0;
              var r = 0;
              var i = {};
              for (var s = 0; s < e.length; s++) {
                r += t[s];
                n += e[s].length;
              }
              var a = new ArrayBuffer(n * 4);
              var o = null;
              var h = 0;
              for (s = 0; s < e.length; s++) {
                var l = t[s];
                var d = e[s];
                var c = B(d);
                i[c] ||= new D[c](a);
                o = i[c];
                for (var u = 0; u < d.length; u++) {
                  o[(u / l | 0) * r + h + u % l] = d[u];
                }
                h += l;
              }
              return new Float32Array(a);
            }
            function N(e) {
              e += e === 0 ? 1 : 0;
              --e;
              e |= e >>> 1;
              e |= e >>> 2;
              e |= e >>> 4;
              return 1 + ((e |= e >>> 8) | e >>> 16);
            }
            function G(e) {
              return !(e & e - 1) && !!e;
            }
            function U(e) {
              var t = (e > 65535 ? 1 : 0) << 4;
              var n = ((e >>>= t) > 255 ? 1 : 0) << 3;
              t |= n;
              t |= n = ((e >>>= n) > 15 ? 1 : 0) << 2;
              return (t |= n = ((e >>>= n) > 3 ? 1 : 0) << 1) | (e >>>= n) >> 1;
            }
            function V(e, t, n) {
              var r;
              var i = e.length;
              if (!(t >= i) && n !== 0) {
                var s = i - (n = t + n > i ? i - t : n);
                for (r = t; r < s; ++r) {
                  e[r] = e[r + n];
                }
                e.length = s;
              }
            }
            function H(e) {
              if (e === 0) {
                return 0;
              } else if (e < 0) {
                return -1;
              } else {
                return 1;
              }
            }
            var z = 0;
            function W() {
              return ++z;
            }
            var X = {};
            function Y(e, t, n = 3) {
              if (!X[t]) {
                var r = new Error().stack;
                if (r !== undefined) {
                  r = r.split("\n").splice(n).join("\n");
                  console.groupCollapsed;
                }
                X[t] = true;
              }
            }
            var q = {};
            var J = Object.create(null);
            var K = Object.create(null);
            function Z() {
              var e;
              for (e in J) {
                J[e].destroy();
              }
              for (e in K) {
                K[e].destroy();
              }
            }
            function $() {
              var e;
              for (e in J) {
                delete J[e];
              }
              for (e in K) {
                delete K[e];
              }
            }
            var Q = function () {
              function e(e, t, n) {
                this.canvas = p.W0.ADAPTER.createCanvas();
                this.context = this.canvas.getContext("2d");
                this.resolution = n || p.W0.RESOLUTION;
                this.resize(e, t);
              }
              e.prototype.clear = function () {
                this.context.setTransform(1, 0, 0, 1, 0, 0);
                this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
              };
              e.prototype.resize = function (e, t) {
                this.canvas.width = Math.round(e * this.resolution);
                this.canvas.height = Math.round(t * this.resolution);
              };
              e.prototype.destroy = function () {
                this.context = null;
                this.canvas = null;
              };
              Object.defineProperty(e.prototype, "width", {
                get: function () {
                  return this.canvas.width;
                },
                set: function (e) {
                  this.canvas.width = Math.round(e);
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "height", {
                get: function () {
                  return this.canvas.height;
                },
                set: function (e) {
                  this.canvas.height = Math.round(e);
                },
                enumerable: false,
                configurable: true
              });
              return e;
            }();
            function ee(e) {
              var t;
              var n;
              var r;
              var i = e.width;
              var s = e.height;
              var a = e.getContext("2d", {
                willReadFrequently: true
              });
              var o = a.getImageData(0, 0, i, s).data;
              var h = o.length;
              var l = {
                top: null,
                left: null,
                right: null,
                bottom: null
              };
              var d = null;
              for (t = 0; t < h; t += 4) {
                if (o[t + 3] !== 0) {
                  n = t / 4 % i;
                  r = ~~(t / 4 / i);
                  if (l.top === null) {
                    l.top = r;
                  }
                  if (l.left === null || n < l.left) {
                    l.left = n;
                  }
                  if (l.right === null || l.right < n) {
                    l.right = n + 1;
                  }
                  if (l.bottom === null || l.bottom < r) {
                    l.bottom = r;
                  }
                }
              }
              if (l.top !== null) {
                i = l.right - l.left;
                s = l.bottom - l.top + 1;
                d = a.getImageData(l.left, l.top, i, s);
              }
              return {
                height: s,
                width: i,
                data: d
              };
            }
            var te;
            var ne = /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i;
            function re(e) {
              var t = ne.exec(e);
              if (t) {
                return {
                  mediaType: t[1] ? t[1].toLowerCase() : undefined,
                  subType: t[2] ? t[2].toLowerCase() : undefined,
                  charset: t[3] ? t[3].toLowerCase() : undefined,
                  encoding: t[4] ? t[4].toLowerCase() : undefined,
                  data: t[5]
                };
              }
            }
            function ie(e, t = globalThis.location) {
              if (e.indexOf("data:") === 0) {
                return "";
              }
              t = t || globalThis.location;
              te ||= document.createElement("a");
              te.href = e;
              var n = f.parse(te.href);
              var r = !n.port && t.port === "" || n.port === t.port;
              if (n.hostname === t.hostname && r && n.protocol === t.protocol) {
                return "";
              } else {
                return "anonymous";
              }
            }
            function se(e, t) {
              var n = p.W0.RETINA_PREFIX.exec(e);
              if (n) {
                return parseFloat(n[1]);
              } else if (t !== undefined) {
                return t;
              } else {
                return 1;
              }
            }
          }
    });
})();
