(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        38499(e, t, n) {
            "use strict";
        
            n.d(t, {
              ER: () => T,
              HY: () => r,
              M_: () => l,
              Pp: () => c,
              TE: () => p,
              TO: () => i,
              Td: () => a,
              bO: () => s,
              bR: () => o,
              dL: () => A,
              jl: () => d,
              oA: () => m,
              tS: () => u,
              uq: () => f
            });
            var r;
            var i = Math.PI * 2;
            var s = 180 / Math.PI;
            var a = Math.PI / 180;
            (function (e) {
              e[e.POLY = 0] = "POLY";
              e[e.RECT = 1] = "RECT";
              e[e.CIRC = 2] = "CIRC";
              e[e.ELIP = 3] = "ELIP";
              e[e.RREC = 4] = "RREC";
            })(r ||= {});
            var o = function () {
              function e(e = 0, t = 0) {
                this.x = 0;
                this.y = 0;
                this.x = e;
                this.y = t;
              }
              e.prototype.clone = function () {
                return new e(this.x, this.y);
              };
              e.prototype.copyFrom = function (e) {
                this.set(e.x, e.y);
                return this;
              };
              e.prototype.copyTo = function (e) {
                e.set(this.x, this.y);
                return e;
              };
              e.prototype.equals = function (e) {
                return e.x === this.x && e.y === this.y;
              };
              e.prototype.set = function (e = 0, t = e) {
                this.x = e;
                this.y = t;
                return this;
              };
              e.prototype.toString = function () {
                return "[@pixi/math:Point x=" + this.x + " y=" + this.y + "]";
              };
              return e;
            }();
            var h = [new o(), new o(), new o(), new o()];
            var l = function () {
              function e(e = 0, t = 0, n = 0, i = 0) {
                this.x = Number(e);
                this.y = Number(t);
                this.width = Number(n);
                this.height = Number(i);
                this.type = r.RECT;
              }
              Object.defineProperty(e.prototype, "left", {
                get: function () {
                  return this.x;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "right", {
                get: function () {
                  return this.x + this.width;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "top", {
                get: function () {
                  return this.y;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "bottom", {
                get: function () {
                  return this.y + this.height;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e, "EMPTY", {
                get: function () {
                  return new e(0, 0, 0, 0);
                },
                enumerable: false,
                configurable: true
              });
              e.prototype.clone = function () {
                return new e(this.x, this.y, this.width, this.height);
              };
              e.prototype.copyFrom = function (e) {
                this.x = e.x;
                this.y = e.y;
                this.width = e.width;
                this.height = e.height;
                return this;
              };
              e.prototype.copyTo = function (e) {
                e.x = this.x;
                e.y = this.y;
                e.width = this.width;
                e.height = this.height;
                return e;
              };
              e.prototype.contains = function (e, t) {
                return !(this.width <= 0) && !(this.height <= 0) && e >= this.x && e < this.x + this.width && t >= this.y && t < this.y + this.height;
              };
              e.prototype.intersects = function (e, t) {
                if (!t) {
                  var n = this.x < e.x ? e.x : this.x;
                  if ((this.right > e.right ? e.right : this.right) <= n) {
                    return false;
                  }
                  var r = this.y < e.y ? e.y : this.y;
                  return (this.bottom > e.bottom ? e.bottom : this.bottom) > r;
                }
                var i = this.left;
                var s = this.right;
                var a = this.top;
                var o = this.bottom;
                if (s <= i || o <= a) {
                  return false;
                }
                var l = h[0].set(e.left, e.top);
                var d = h[1].set(e.left, e.bottom);
                var c = h[2].set(e.right, e.top);
                var u = h[3].set(e.right, e.bottom);
                if (c.x <= l.x || d.y <= l.y) {
                  return false;
                }
                var p = Math.sign(t.a * t.d - t.b * t.c);
                if (p === 0) {
                  return false;
                }
                t.apply(l, l);
                t.apply(d, d);
                t.apply(c, c);
                t.apply(u, u);
                if (Math.max(l.x, d.x, c.x, u.x) <= i || Math.min(l.x, d.x, c.x, u.x) >= s || Math.max(l.y, d.y, c.y, u.y) <= a || Math.min(l.y, d.y, c.y, u.y) >= o) {
                  return false;
                }
                var m = p * (d.y - l.y);
                var f = p * (l.x - d.x);
                var _ = m * i + f * a;
                var v = m * s + f * a;
                var y = m * i + f * o;
                var g = m * s + f * o;
                if (Math.max(_, v, y, g) <= m * l.x + f * l.y || Math.min(_, v, y, g) >= m * u.x + f * u.y) {
                  return false;
                }
                var w = p * (l.y - c.y);
                var x = p * (c.x - l.x);
                var b = w * i + x * a;
                var T = w * s + x * a;
                var A = w * i + x * o;
                var C = w * s + x * o;
                return !(Math.max(b, T, A, C) <= w * l.x + x * l.y) && !(Math.min(b, T, A, C) >= w * u.x + x * u.y);
              };
              e.prototype.pad = function (e = 0, t = e) {
                this.x -= e;
                this.y -= t;
                this.width += e * 2;
                this.height += t * 2;
                return this;
              };
              e.prototype.fit = function (e) {
                var t = Math.max(this.x, e.x);
                var n = Math.min(this.x + this.width, e.x + e.width);
                var r = Math.max(this.y, e.y);
                var i = Math.min(this.y + this.height, e.y + e.height);
                this.x = t;
                this.width = Math.max(n - t, 0);
                this.y = r;
                this.height = Math.max(i - r, 0);
                return this;
              };
              e.prototype.ceil = function (e = 1, t = 0.001) {
                var n = Math.ceil((this.x + this.width - t) * e) / e;
                var r = Math.ceil((this.y + this.height - t) * e) / e;
                this.x = Math.floor((this.x + t) * e) / e;
                this.y = Math.floor((this.y + t) * e) / e;
                this.width = n - this.x;
                this.height = r - this.y;
                return this;
              };
              e.prototype.enlarge = function (e) {
                var t = Math.min(this.x, e.x);
                var n = Math.max(this.x + this.width, e.x + e.width);
                var r = Math.min(this.y, e.y);
                var i = Math.max(this.y + this.height, e.y + e.height);
                this.x = t;
                this.width = n - t;
                this.y = r;
                this.height = i - r;
                return this;
              };
              e.prototype.toString = function () {
                return "[@pixi/math:Rectangle x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + "]";
              };
              return e;
            }();
            var d = function () {
              function e(e = 0, t = 0, n = 0) {
                this.x = e;
                this.y = t;
                this.radius = n;
                this.type = r.CIRC;
              }
              e.prototype.clone = function () {
                return new e(this.x, this.y, this.radius);
              };
              e.prototype.contains = function (e, t) {
                if (this.radius <= 0) {
                  return false;
                }
                var n = this.radius * this.radius;
                var r = this.x - e;
                var i = this.y - t;
                return (r *= r) + (i *= i) <= n;
              };
              e.prototype.getBounds = function () {
                return new l(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
              };
              e.prototype.toString = function () {
                return "[@pixi/math:Circle x=" + this.x + " y=" + this.y + " radius=" + this.radius + "]";
              };
              return e;
            }();
            var c = function () {
              function e(e = 0, t = 0, n = 0, i = 0) {
                this.x = e;
                this.y = t;
                this.width = n;
                this.height = i;
                this.type = r.ELIP;
              }
              e.prototype.clone = function () {
                return new e(this.x, this.y, this.width, this.height);
              };
              e.prototype.contains = function (e, t) {
                if (this.width <= 0 || this.height <= 0) {
                  return false;
                }
                var n = (e - this.x) / this.width;
                var r = (t - this.y) / this.height;
                return (n *= n) + (r *= r) <= 1;
              };
              e.prototype.getBounds = function () {
                return new l(this.x - this.width, this.y - this.height, this.width, this.height);
              };
              e.prototype.toString = function () {
                return "[@pixi/math:Ellipse x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + "]";
              };
              return e;
            }();
            var u = function () {
              function e() {
                var e = arguments;
                var t = [];
                for (var n = 0; n < arguments.length; n++) {
                  t[n] = e[n];
                }
                var i = Array.isArray(t[0]) ? t[0] : t;
                if (typeof i[0] != "number") {
                  var s = [];
                  for (var a = 0, o = i.length; a < o; a++) {
                    s.push(i[a].x, i[a].y);
                  }
                  i = s;
                }
                this.points = i;
                this.type = r.POLY;
                this.closeStroke = true;
              }
              e.prototype.clone = function () {
                var t = new e(this.points.slice());
                t.closeStroke = this.closeStroke;
                return t;
              };
              e.prototype.contains = function (e, t) {
                var n = false;
                for (var r = this.points.length / 2, i = 0, s = r - 1; i < r; s = i++) {
                  var a = this.points[i * 2];
                  var o = this.points[i * 2 + 1];
                  var h = this.points[s * 2];
                  var l = this.points[s * 2 + 1];
                  if (o > t != l > t && e < (t - o) / (l - o) * (h - a) + a) {
                    n = !n;
                  }
                }
                return n;
              };
              e.prototype.toString = function () {
                return "[@pixi/math:PolygoncloseStroke=" + this.closeStroke + "points=" + this.points.reduce(function (e, t) {
                  return e + ", " + t;
                }, "") + "]";
              };
              return e;
            }();
            var p = function () {
              function e(e = 0, t = 0, n = 0, i = 0, s = 20) {
                this.x = e;
                this.y = t;
                this.width = n;
                this.height = i;
                this.radius = s;
                this.type = r.RREC;
              }
              e.prototype.clone = function () {
                return new e(this.x, this.y, this.width, this.height, this.radius);
              };
              e.prototype.contains = function (e, t) {
                if (this.width <= 0 || this.height <= 0) {
                  return false;
                }
                if (e >= this.x && e <= this.x + this.width && t >= this.y && t <= this.y + this.height) {
                  var n = Math.max(0, Math.min(this.radius, Math.min(this.width, this.height) / 2));
                  if (t >= this.y + n && t <= this.y + this.height - n || e >= this.x + n && e <= this.x + this.width - n) {
                    return true;
                  }
                  var r = e - (this.x + n);
                  var i = t - (this.y + n);
                  var s = n * n;
                  if (r * r + i * i <= s) {
                    return true;
                  }
                  if ((r = e - (this.x + this.width - n)) * r + i * i <= s) {
                    return true;
                  }
                  if (r * r + (i = t - (this.y + this.height - n)) * i <= s) {
                    return true;
                  }
                  if ((r = e - (this.x + n)) * r + i * i <= s) {
                    return true;
                  }
                }
                return false;
              };
              e.prototype.toString = function () {
                return "[@pixi/math:RoundedRectangle x=" + this.x + " y=" + this.y + "width=" + this.width + " height=" + this.height + " radius=" + this.radius + "]";
              };
              return e;
            }();
            var m = function () {
              function e(e, t, n = 0, r = 0) {
                this._x = n;
                this._y = r;
                this.cb = e;
                this.scope = t;
              }
              e.prototype.clone = function (t = this.cb, n = this.scope) {
                return new e(t, n, this._x, this._y);
              };
              e.prototype.set = function (e = 0, t = e) {
                if (this._x !== e || this._y !== t) {
                  this._x = e;
                  this._y = t;
                  this.cb.call(this.scope);
                }
                return this;
              };
              e.prototype.copyFrom = function (e) {
                if (this._x !== e.x || this._y !== e.y) {
                  this._x = e.x;
                  this._y = e.y;
                  this.cb.call(this.scope);
                }
                return this;
              };
              e.prototype.copyTo = function (e) {
                e.set(this._x, this._y);
                return e;
              };
              e.prototype.equals = function (e) {
                return e.x === this._x && e.y === this._y;
              };
              e.prototype.toString = function () {
                return "[@pixi/math:ObservablePoint x=0 y=0 scope=" + this.scope + "]";
              };
              Object.defineProperty(e.prototype, "x", {
                get: function () {
                  return this._x;
                },
                set: function (e) {
                  if (this._x !== e) {
                    this._x = e;
                    this.cb.call(this.scope);
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "y", {
                get: function () {
                  return this._y;
                },
                set: function (e) {
                  if (this._y !== e) {
                    this._y = e;
                    this.cb.call(this.scope);
                  }
                },
                enumerable: false,
                configurable: true
              });
              return e;
            }();
            var f = function () {
              function e(e = 1, t = 0, n = 0, r = 1, i = 0, s = 0) {
                this.array = null;
                this.a = e;
                this.b = t;
                this.c = n;
                this.d = r;
                this.tx = i;
                this.ty = s;
              }
              e.prototype.fromArray = function (e) {
                this.a = e[0];
                this.b = e[1];
                this.c = e[3];
                this.d = e[4];
                this.tx = e[2];
                this.ty = e[5];
              };
              e.prototype.set = function (e, t, n, r, i, s) {
                this.a = e;
                this.b = t;
                this.c = n;
                this.d = r;
                this.tx = i;
                this.ty = s;
                return this;
              };
              e.prototype.toArray = function (e, t) {
                this.array ||= new Float32Array(9);
                var n = t || this.array;
                if (e) {
                  n[0] = this.a;
                  n[1] = this.b;
                  n[2] = 0;
                  n[3] = this.c;
                  n[4] = this.d;
                  n[5] = 0;
                  n[6] = this.tx;
                  n[7] = this.ty;
                  n[8] = 1;
                } else {
                  n[0] = this.a;
                  n[1] = this.c;
                  n[2] = this.tx;
                  n[3] = this.b;
                  n[4] = this.d;
                  n[5] = this.ty;
                  n[6] = 0;
                  n[7] = 0;
                  n[8] = 1;
                }
                return n;
              };
              e.prototype.apply = function (e, t) {
                t = t || new o();
                var n = e.x;
                var r = e.y;
                t.x = this.a * n + this.c * r + this.tx;
                t.y = this.b * n + this.d * r + this.ty;
                return t;
              };
              e.prototype.applyInverse = function (e, t) {
                t = t || new o();
                var n = 1 / (this.a * this.d + this.c * -this.b);
                var r = e.x;
                var i = e.y;
                t.x = this.d * n * r + -this.c * n * i + (this.ty * this.c - this.tx * this.d) * n;
                t.y = this.a * n * i + -this.b * n * r + (-this.ty * this.a + this.tx * this.b) * n;
                return t;
              };
              e.prototype.translate = function (e, t) {
                this.tx += e;
                this.ty += t;
                return this;
              };
              e.prototype.scale = function (e, t) {
                this.a *= e;
                this.d *= t;
                this.c *= e;
                this.b *= t;
                this.tx *= e;
                this.ty *= t;
                return this;
              };
              e.prototype.rotate = function (e) {
                var t = Math.cos(e);
                var n = Math.sin(e);
                var r = this.a;
                var i = this.c;
                var s = this.tx;
                this.a = r * t - this.b * n;
                this.b = r * n + this.b * t;
                this.c = i * t - this.d * n;
                this.d = i * n + this.d * t;
                this.tx = s * t - this.ty * n;
                this.ty = s * n + this.ty * t;
                return this;
              };
              e.prototype.append = function (e) {
                var t = this.a;
                var n = this.b;
                var r = this.c;
                var i = this.d;
                this.a = e.a * t + e.b * r;
                this.b = e.a * n + e.b * i;
                this.c = e.c * t + e.d * r;
                this.d = e.c * n + e.d * i;
                this.tx = e.tx * t + e.ty * r + this.tx;
                this.ty = e.tx * n + e.ty * i + this.ty;
                return this;
              };
              e.prototype.setTransform = function (e, t, n, r, i, s, a, o, h) {
                this.a = Math.cos(a + h) * i;
                this.b = Math.sin(a + h) * i;
                this.c = -Math.sin(a - o) * s;
                this.d = Math.cos(a - o) * s;
                this.tx = e - (n * this.a + r * this.c);
                this.ty = t - (n * this.b + r * this.d);
                return this;
              };
              e.prototype.prepend = function (e) {
                var t = this.tx;
                if (e.a !== 1 || e.b !== 0 || e.c !== 0 || e.d !== 1) {
                  var n = this.a;
                  var r = this.c;
                  this.a = n * e.a + this.b * e.c;
                  this.b = n * e.b + this.b * e.d;
                  this.c = r * e.a + this.d * e.c;
                  this.d = r * e.b + this.d * e.d;
                }
                this.tx = t * e.a + this.ty * e.c + e.tx;
                this.ty = t * e.b + this.ty * e.d + e.ty;
                return this;
              };
              e.prototype.decompose = function (e) {
                var t = this.a;
                var n = this.b;
                var r = this.c;
                var s = this.d;
                var a = e.pivot;
                var o = -Math.atan2(-r, s);
                var h = Math.atan2(n, t);
                var l = Math.abs(o + h);
                if (l < 0.00001 || Math.abs(i - l) < 0.00001) {
                  e.rotation = h;
                  e.skew.x = e.skew.y = 0;
                } else {
                  e.rotation = 0;
                  e.skew.x = o;
                  e.skew.y = h;
                }
                e.scale.x = Math.sqrt(t * t + n * n);
                e.scale.y = Math.sqrt(r * r + s * s);
                e.position.x = this.tx + (a.x * t + a.y * r);
                e.position.y = this.ty + (a.x * n + a.y * s);
                return e;
              };
              e.prototype.invert = function () {
                var e = this.a;
                var t = this.b;
                var n = this.c;
                var r = this.d;
                var i = this.tx;
                var s = e * r - t * n;
                this.a = r / s;
                this.b = -t / s;
                this.c = -n / s;
                this.d = e / s;
                this.tx = (n * this.ty - r * i) / s;
                this.ty = -(e * this.ty - t * i) / s;
                return this;
              };
              e.prototype.identity = function () {
                this.a = 1;
                this.b = 0;
                this.c = 0;
                this.d = 1;
                this.tx = 0;
                this.ty = 0;
                return this;
              };
              e.prototype.clone = function () {
                var t = new e();
                t.a = this.a;
                t.b = this.b;
                t.c = this.c;
                t.d = this.d;
                t.tx = this.tx;
                t.ty = this.ty;
                return t;
              };
              e.prototype.copyTo = function (e) {
                e.a = this.a;
                e.b = this.b;
                e.c = this.c;
                e.d = this.d;
                e.tx = this.tx;
                e.ty = this.ty;
                return e;
              };
              e.prototype.copyFrom = function (e) {
                this.a = e.a;
                this.b = e.b;
                this.c = e.c;
                this.d = e.d;
                this.tx = e.tx;
                this.ty = e.ty;
                return this;
              };
              e.prototype.toString = function () {
                return "[@pixi/math:Matrix a=" + this.a + " b=" + this.b + " c=" + this.c + " d=" + this.d + " tx=" + this.tx + " ty=" + this.ty + "]";
              };
              Object.defineProperty(e, "IDENTITY", {
                get: function () {
                  return new e();
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e, "TEMP_MATRIX", {
                get: function () {
                  return new e();
                },
                enumerable: false,
                configurable: true
              });
              return e;
            }();
            var _ = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1];
            var v = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1];
            var y = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1];
            var g = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1];
            var w = [];
            var x = [];
            var b = Math.sign;
            (function () {
              for (var e = 0; e < 16; e++) {
                var t = [];
                w.push(t);
                for (var n = 0; n < 16; n++) {
                  var r = b(_[e] * _[n] + y[e] * v[n]);
                  var i = b(v[e] * _[n] + g[e] * v[n]);
                  var s = b(_[e] * y[n] + y[e] * g[n]);
                  var a = b(v[e] * y[n] + g[e] * g[n]);
                  for (var o = 0; o < 16; o++) {
                    if (_[o] === r && v[o] === i && y[o] === s && g[o] === a) {
                      t.push(o);
                      break;
                    }
                  }
                }
              }
              for (e = 0; e < 16; e++) {
                var h = new f();
                h.set(_[e], v[e], y[e], g[e], 0, 0);
                x.push(h);
              }
            })();
            var T = {
              E: 0,
              SE: 1,
              S: 2,
              SW: 3,
              W: 4,
              NW: 5,
              N: 6,
              NE: 7,
              MIRROR_VERTICAL: 8,
              MAIN_DIAGONAL: 10,
              MIRROR_HORIZONTAL: 12,
              REVERSE_DIAGONAL: 14,
              uX: function (e) {
                return _[e];
              },
              uY: function (e) {
                return v[e];
              },
              vX: function (e) {
                return y[e];
              },
              vY: function (e) {
                return g[e];
              },
              inv: function (e) {
                if (e & 8) {
                  return e & 15;
                } else {
                  return -e & 7;
                }
              },
              add: function (e, t) {
                return w[e][t];
              },
              sub: function (e, t) {
                return w[e][T.inv(t)];
              },
              rotate180: function (e) {
                return e ^ 4;
              },
              isVertical: function (e) {
                return (e & 3) == 2;
              },
              byDirection: function (e, t) {
                if (Math.abs(e) * 2 <= Math.abs(t)) {
                  if (t >= 0) {
                    return T.S;
                  } else {
                    return T.N;
                  }
                } else if (Math.abs(t) * 2 <= Math.abs(e)) {
                  if (e > 0) {
                    return T.E;
                  } else {
                    return T.W;
                  }
                } else if (t > 0) {
                  if (e > 0) {
                    return T.SE;
                  } else {
                    return T.SW;
                  }
                } else if (e > 0) {
                  return T.NE;
                } else {
                  return T.NW;
                }
              },
              matrixAppendRotationInv: function (e, t, n = 0, r = 0) {
                var i = x[T.inv(t)];
                i.tx = n;
                i.ty = r;
                e.append(i);
              }
            };
            var A = function () {
              function e() {
                this.worldTransform = new f();
                this.localTransform = new f();
                this.position = new m(this.onChange, this, 0, 0);
                this.scale = new m(this.onChange, this, 1, 1);
                this.pivot = new m(this.onChange, this, 0, 0);
                this.skew = new m(this.updateSkew, this, 0, 0);
                this._rotation = 0;
                this._cx = 1;
                this._sx = 0;
                this._cy = 0;
                this._sy = 1;
                this._localID = 0;
                this._currentLocalID = 0;
                this._worldID = 0;
                this._parentID = 0;
              }
              e.prototype.onChange = function () {
                this._localID++;
              };
              e.prototype.updateSkew = function () {
                this._cx = Math.cos(this._rotation + this.skew.y);
                this._sx = Math.sin(this._rotation + this.skew.y);
                this._cy = -Math.sin(this._rotation - this.skew.x);
                this._sy = Math.cos(this._rotation - this.skew.x);
                this._localID++;
              };
              e.prototype.toString = function () {
                return "[@pixi/math:Transform position=(" + this.position.x + ", " + this.position.y + ") rotation=" + this.rotation + " scale=(" + this.scale.x + ", " + this.scale.y + ") skew=(" + this.skew.x + ", " + this.skew.y + ") ]";
              };
              e.prototype.updateLocalTransform = function () {
                var e = this.localTransform;
                if (this._localID !== this._currentLocalID) {
                  e.a = this._cx * this.scale.x;
                  e.b = this._sx * this.scale.x;
                  e.c = this._cy * this.scale.y;
                  e.d = this._sy * this.scale.y;
                  e.tx = this.position.x - (this.pivot.x * e.a + this.pivot.y * e.c);
                  e.ty = this.position.y - (this.pivot.x * e.b + this.pivot.y * e.d);
                  this._currentLocalID = this._localID;
                  this._parentID = -1;
                }
              };
              e.prototype.updateTransform = function (e) {
                var t = this.localTransform;
                if (this._localID !== this._currentLocalID) {
                  t.a = this._cx * this.scale.x;
                  t.b = this._sx * this.scale.x;
                  t.c = this._cy * this.scale.y;
                  t.d = this._sy * this.scale.y;
                  t.tx = this.position.x - (this.pivot.x * t.a + this.pivot.y * t.c);
                  t.ty = this.position.y - (this.pivot.x * t.b + this.pivot.y * t.d);
                  this._currentLocalID = this._localID;
                  this._parentID = -1;
                }
                if (this._parentID !== e._worldID) {
                  var n = e.worldTransform;
                  var r = this.worldTransform;
                  r.a = t.a * n.a + t.b * n.c;
                  r.b = t.a * n.b + t.b * n.d;
                  r.c = t.c * n.a + t.d * n.c;
                  r.d = t.c * n.b + t.d * n.d;
                  r.tx = t.tx * n.a + t.ty * n.c + n.tx;
                  r.ty = t.tx * n.b + t.ty * n.d + n.ty;
                  this._parentID = e._worldID;
                  this._worldID++;
                }
              };
              e.prototype.setFromMatrix = function (e) {
                e.decompose(this);
                this._localID++;
              };
              Object.defineProperty(e.prototype, "rotation", {
                get: function () {
                  return this._rotation;
                },
                set: function (e) {
                  if (this._rotation !== e) {
                    this._rotation = e;
                    this.updateSkew();
                  }
                },
                enumerable: false,
                configurable: true
              });
              e.IDENTITY = new e();
              return e;
            }();
          }
    });
})();
