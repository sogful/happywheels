(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        61214(e, t, n) {
            "use strict";
        
            n.d(t, {
              Ix: () => p,
              uq: () => u,
              bR: () => o,
              M_: () => l,
              dL: () => f
            });
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(2892);
            n(26099);
            n(38781);
            var r;
            var i = n(46682);
            function s(e) {
              var t = function (e) {
                if (typeof e != "object" || !e) {
                  return e;
                }
                var t = e[Symbol.toPrimitive];
                if (t !== undefined) {
                  var n = t.call(e, "string");
                  if (typeof n != "object") {
                    return n;
                  }
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(e);
              }(e);
              if (typeof t == "symbol") {
                return t;
              } else {
                return t + "";
              }
            }
            var a;
            var o = function () {
              function e(e = 0, t = 0) {
                this.pixiPoint = new i.bRX(e, t);
              }
              var t;
              var n;
              var r = e.prototype;
              r.set = function (e = 0, t = e) {
                this.pixiPoint.x = e;
                this.pixiPoint.y = t;
                return this;
              };
              e.fromPixi = function (t) {
                return new e(t.x, t.y);
              };
              r.add = function (e) {
                this.pixiPoint.x += e.pixiPoint.x;
                this.pixiPoint.y += e.pixiPoint.y;
              };
              r.clone = function () {
                return new e(this.pixiPoint.x, this.pixiPoint.y);
              };
              r.copyFrom = function (e) {
                this.pixiPoint.x = e.pixiPoint.x;
                this.pixiPoint.y = e.pixiPoint.y;
              };
              r.copyFromPixi = function (e) {
                this.pixiPoint.x = e.x;
                this.pixiPoint.y = e.y;
              };
              e.distance = function (e, t) {
                var n = t.pixiPoint.x - e.pixiPoint.x;
                var r = t.pixiPoint.y - e.pixiPoint.y;
                return Math.sqrt(n * n + r * r);
              };
              r.equals = function (e) {
                return this.pixiPoint.equals(e.pixiPoint);
              };
              e.interpolate = function (t, n, r) {
                if (r < 0) {
                  r = 0;
                }
                if (r > 1) {
                  r = 1;
                }
                var i = 1 - r;
                e._temp.x = t.x + (n.x - t.x) * i;
                e._temp.y = t.y + (n.y - t.y) * i;
                return e._temp;
              };
              r.normalize = function (e) {
                this.pixiPoint.x = this.pixiPoint.x * (this.length * e);
                this.pixiPoint.y = this.pixiPoint.y * (this.length * e);
              };
              r.offset = function (e, t) {
                this.pixiPoint.x += e;
                this.pixiPoint.y += t;
              };
              e.polar = function (t, n) {
                e._temp.x = Math.cos(n) * t;
                e._temp.y = Math.sin(n) * t;
                return e._temp;
              };
              r.setTo = function (e, t) {
                this.pixiPoint.x = e;
                this.pixiPoint.y = t;
              };
              r.subtract = function (e) {
                this.pixiPoint.x -= e.pixiPoint.x;
                this.pixiPoint.y -= e.pixiPoint.y;
              };
              r.toString = function () {
                return "[Point " + Math.round(this.x) + " " + Math.round(this.y) + "]";
              };
              t = e;
              if (n = [{
                key: "x",
                get: function () {
                  return this.pixiPoint.x;
                },
                set: function (e) {
                  this.pixiPoint.x = e;
                }
              }, {
                key: "y",
                get: function () {
                  return this.pixiPoint.y;
                },
                set: function (e) {
                  this.pixiPoint.y = e;
                }
              }, {
                key: "length",
                get: function () {
                  var e = this.pixiPoint.x;
                  var t = this.pixiPoint.y;
                  return Math.sqrt(e * e + t * t);
                }
              }]) {
                (function (e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || false;
                    r.configurable = true;
                    if ("value" in r) {
                      r.writable = true;
                    }
                    Object.defineProperty(e, s(r.key), r);
                  }
                })(t.prototype, n);
              }
              Object.defineProperty(t, "prototype", {
                writable: false
              });
              return t;
            }();
            function h(e) {
              var t = function (e) {
                if (typeof e != "object" || !e) {
                  return e;
                }
                var t = e[Symbol.toPrimitive];
                if (t !== undefined) {
                  var n = t.call(e, "string");
                  if (typeof n != "object") {
                    return n;
                  }
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(e);
              }(e);
              if (typeof t == "symbol") {
                return t;
              } else {
                return t + "";
              }
            }
            r = o;
            o._temp = new r();
            var l = function () {
              function e(e = 0, t = 0, n = 0, r = 0) {
                this.x = 0;
                this.y = 0;
                this.width = 0;
                this.height = 0;
                this.x = e;
                this.y = t;
                this.width = n;
                this.height = r;
              }
              e.fromPixi = function (t) {
                return new e(t.x, t.y, t.width, t.height);
              };
              var t;
              var n;
              var r = e.prototype;
              r.clone = function () {
                return new e(this.x, this.y, this.width, this.height);
              };
              r.contains = function (e = 0, t = 0) {
                return !(e < this.left) && !(e > this.right) && !(t < this.top) && !(t > this.bottom);
              };
              r.containsPoint = function (e) {
                return this.contains(e.x, e.y);
              };
              r.containsRect = function (e) {
                return !(e.left < this.left) && !(e.right > this.right) && !(e.top < this.top) && !(e.bottom > this.bottom);
              };
              r.copyFrom = function (e) {
                this.x = e.x;
                this.y = e.y;
                this.width = e.width;
                this.height = e.height;
              };
              r.equals = function (e) {
                return this.x === e.x && this.y === e.y && this.width === e.width && this.height === e.height;
              };
              r.inflate = function (e = 0, t = 0) {
                this.width += e;
                this.height += t;
              };
              r.inflatePoint = function (e) {
                this.inflate(e.x, e.y);
              };
              r.intersection = function (t) {
                if (this.intersects(t)) {
                  e._temp.left = Math.max(this.left, t.left);
                  e._temp.right = Math.min(this.right, t.right);
                  e._temp.bottom = Math.max(this.bottom, t.bottom);
                  e._temp.top = Math.min(this.top, t.top);
                  return e._temp;
                } else {
                  return null;
                }
              };
              r.intersects = function (e) {
                var t = e.left <= this.right && e.right >= this.left;
                var n = e.top <= this.bottom && e.bottom >= this.top;
                return t && n;
              };
              r.isEmpty = function () {
                return this.width === 0 && this.height === 0;
              };
              r.offset = function (e, t) {
                this.x += e;
                this.y += t;
              };
              r.offsetPoint = function (e) {
                this.offset(e.x, e.y);
              };
              r.setEmpty = function () {
                this.width = this.height = 0;
              };
              r.setTo = function (e = 0, t = 0, n = 0, r = 0) {
                this.x = e;
                this.y = t;
                this.width = n;
                this.height = r;
              };
              r.union = function (t) {
                e._temp.left = Math.min(this.left, t.left);
                e._temp.top = Math.min(this.top, t.top);
                e._temp.right = Math.max(this.right, t.right);
                e._temp.bottom = Math.max(this.bottom, t.bottom);
                return e._temp;
              };
              r.merge = function (e) {
                var t = Math.min(this.left, e.left);
                var n = Math.min(this.top, e.top);
                var r = Math.max(this.right, e.right);
                var i = Math.max(this.bottom, e.bottom);
                this.left = t;
                this.top = n;
                this.right = r;
                this.bottom = i;
                return this;
              };
              r.toString = function () {
                return "[Rect " + Math.round(this.x) + " " + Math.round(this.y) + " " + Math.round(this.width) + " " + Math.round(this.height) + "]";
              };
              t = e;
              if (n = [{
                key: "left",
                get: function () {
                  return this.x;
                },
                set: function (e) {
                  this.x = e;
                }
              }, {
                key: "top",
                get: function () {
                  return this.y;
                },
                set: function (e) {
                  this.y = e;
                }
              }, {
                key: "right",
                get: function () {
                  return this.x + this.width;
                },
                set: function (e) {
                  this.width = e - this.x;
                }
              }, {
                key: "bottom",
                get: function () {
                  return this.y + this.height;
                },
                set: function (e) {
                  this.height = e - this.y;
                }
              }]) {
                (function (e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || false;
                    r.configurable = true;
                    if ("value" in r) {
                      r.writable = true;
                    }
                    Object.defineProperty(e, h(r.key), r);
                  }
                })(t.prototype, n);
              }
              Object.defineProperty(t, "prototype", {
                writable: false
              });
              return t;
            }();
            a = l;
            l._temp = new a();
            n(28706);
            var d = n(4971);
            function c(e) {
              var t = function (e) {
                if (typeof e != "object" || !e) {
                  return e;
                }
                var t = e[Symbol.toPrimitive];
                if (t !== undefined) {
                  var n = t.call(e, "string");
                  if (typeof n != "object") {
                    return n;
                  }
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(e);
              }(e);
              if (typeof t == "symbol") {
                return t;
              } else {
                return t + "";
              }
            }
            var u = function () {
              function e(e = 1, t = 0, n = 0, r = 1, s = 0, a = 0) {
                this.pixiMatrix = new i.uqu(e, t, n, r, s, a);
              }
              var t;
              var n;
              var r = e.prototype;
              r.clone = function () {
                var t = new e();
                t.copyFrom(this);
                return t;
              };
              r.concat = function (e) {
                this.pixiMatrix.append(e.pixiMatrix);
              };
              r.copyFrom = function (e) {
                this.pixiMatrix.copyFrom(e.pixiMatrix);
              };
              r.deltaTransformPoint = function (e) {
                var t = e.x;
                var n = e.y;
                var r = this.transformPoint(e);
                r.x = r.x - t;
                r.y = r.x - n;
                return r;
              };
              r.identity = function () {
                this.pixiMatrix.identity();
              };
              r.invert = function () {
                this.pixiMatrix.invert();
              };
              r.rotate = function (e) {
                this.pixiMatrix.rotate(e);
              };
              r.scale = function (e, t) {
                this.pixiMatrix.scale(e, t);
              };
              r.setTo = function (e, t, n, r, i, s) {
                this.pixiMatrix.set(e, t, n, r, i, s);
              };
              r.transformPoint = function (e) {
                if (this.relatedTransform) {
                  this.relatedTransform.updateLocalTransform();
                }
                var t = this.pixiMatrix.apply(e.pixiPoint);
                return d.bR.fromPixi(t);
              };
              r.translate = function (e, t) {
                this.pixiMatrix.translate(e, t);
              };
              t = e;
              if (n = [{
                key: "a",
                get: function () {
                  return this.pixiMatrix.a;
                },
                set: function (e) {
                  this.pixiMatrix.a = e;
                }
              }, {
                key: "b",
                get: function () {
                  return this.pixiMatrix.b;
                },
                set: function (e) {
                  this.pixiMatrix.b = e;
                }
              }, {
                key: "c",
                get: function () {
                  return this.pixiMatrix.c;
                },
                set: function (e) {
                  this.pixiMatrix.c = e;
                }
              }, {
                key: "d",
                get: function () {
                  return this.pixiMatrix.d;
                },
                set: function (e) {
                  this.pixiMatrix.d = e;
                }
              }, {
                key: "tx",
                get: function () {
                  return this.pixiMatrix.tx;
                },
                set: function (e) {
                  this.pixiMatrix.tx = e;
                }
              }, {
                key: "ty",
                get: function () {
                  return this.pixiMatrix.ty;
                },
                set: function (e) {
                  this.pixiMatrix.ty = e;
                }
              }]) {
                (function (e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || false;
                    r.configurable = true;
                    if ("value" in r) {
                      r.writable = true;
                    }
                    Object.defineProperty(e, c(r.key), r);
                  }
                })(t.prototype, n);
              }
              Object.defineProperty(t, "prototype", {
                writable: false
              });
              return t;
            }();
            var p = function () {
              function e(e = 1, t = 1, n = 1, r = 1, i = 0, s = 0, a = 0, o = 0) {
                this.redMultiplier = e;
                this.greenMultiplier = t;
                this.blueMultiplier = n;
                this.alphaMultiplier = r;
                this.redOffset = i;
                this.greenOffset = s;
                this.blueOffset = a;
                this.alphaOffset = o;
              }
              var t = e.prototype;
              t.concat = function (e) {
                this.redMultiplier *= e.redMultiplier;
                this.greenMultiplier *= e.greenMultiplier;
                this.blueMultiplier *= e.blueMultiplier;
                this.alphaMultiplier *= e.alphaMultiplier;
                this.redOffset *= e.redOffset;
                this.greenOffset *= e.greenOffset;
                this.blueOffset *= e.blueOffset;
                this.alphaOffset *= e.alphaOffset;
              };
              t.getHexColor = function () {
                return i.WpD.rgb2hex([this.redMultiplier, this.greenMultiplier, this.blueMultiplier]);
              };
              t.getColorMatrix = function () {
                return [this.redMultiplier, 0, 0, 0.5, 0, 0, this.greenMultiplier, 0, 0.5, 0, 0, 0, this.blueMultiplier, 0.5, 0, 0, 0, 0, 1, 0];
              };
              return e;
            }();
            function m(e) {
              var t = function (e) {
                if (typeof e != "object" || !e) {
                  return e;
                }
                var t = e[Symbol.toPrimitive];
                if (t !== undefined) {
                  var n = t.call(e, "string");
                  if (typeof n != "object") {
                    return n;
                  }
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(e);
              }(e);
              if (typeof t == "symbol") {
                return t;
              } else {
                return t + "";
              }
            }
            var f = function () {
              e = function () {
                this.matrix = new d.uq();
              };
              if (t = [{
                key: "colorTransform",
                get: function () {
                  this._colorTransform ||= new d.Ix();
                  return this._colorTransform;
                },
                set: function (e) {
                  this._colorTransform = e;
                }
              }]) {
                (function (e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || false;
                    r.configurable = true;
                    if ("value" in r) {
                      r.writable = true;
                    }
                    Object.defineProperty(e, m(r.key), r);
                  }
                })(e.prototype, t);
              }
              Object.defineProperty(e, "prototype", {
                writable: false
              });
              return e;
              var e;
              var t;
            }();
          }
    });
})();
