(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        19890(e, t, n) {
            "use strict";
        
            n.d(t, {
              t: () => d
            });
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(26099);
            n(2892);
            var r = n(6393);
            var i = n(4971);
            var s = n(23222);
            var a = n(13362);
            var o = n(97368);
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
            function l(e, t) {
              l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return l(e, t);
            }
            var d = function (e) {
              function t(t, n, r, i, s, o) {
                var h;
                if (t === undefined) {
                  t = 0;
                }
                if (n === undefined) {
                  n = 0;
                }
                if (r === undefined) {
                  r = 0;
                }
                if (i === undefined) {
                  i = 0;
                }
                if (s === undefined) {
                  s = 0;
                }
                if (o === undefined) {
                  o = 0;
                }
                (h = e.call(this, t, n) || this)._handle1 = new a._c(h);
                h._handle2 = new a._c(h);
                h.addChild(h._handle1);
                h.addChild(h._handle2);
                h._handle1.Set(r, i);
                h._handle2.Set(s, o);
                h._handle1.visible = false;
                h._handle2.visible = false;
                h.doubleClickEnabled = true;
                return h;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              l(n, r);
              var d;
              var c;
              var u = t.prototype;
              u.drawSelf = function () {
                this.graphics.clear();
                this._sprite.graphics.clear();
                var e = this._selected ? 16777215 : 0;
                this._sprite.graphics.lineStyle(null, 0, 1);
                this._sprite.graphics.beginFill(e, 0.5);
                if (this._edgeShape) {
                  var t = new i.uq();
                  t.rotate(-this._edgeShape.rotation * Math.PI / 180);
                  t.scale(1 / (this._edgeShape.scaleX * Math.pow(2, o.K.currentZoom)), 1 / (this._edgeShape.scaleY * Math.pow(2, o.K.currentZoom)));
                  this._sprite.transform.matrix = t;
                  this._handle1.circleSprite.transform.matrix = t;
                  this._handle2.circleSprite.transform.matrix = t;
                }
                this._sprite.graphics.drawRect(-2.5, -2.5, 5, 5);
                this._sprite.graphics.endFill();
              };
              u.drawArms = function (e = true, t = true) {
                this.drawSelf();
                this.graphics.lineStyle(null, 0, 1);
                if (!!e && (this._handle1.x != 0 || this._handle1.y != 0)) {
                  this.graphics.moveTo(0, 0);
                  this.graphics.lineTo(this._handle1.x, this._handle1.y);
                  this.handle1.drawSelf();
                }
                if (!!t && (this._handle2.x != 0 || this._handle2.y != 0)) {
                  this.graphics.moveTo(0, 0);
                  this.graphics.lineTo(this._handle2.x, this._handle2.y);
                  this.handle2.drawSelf();
                }
                this._handle1.visible = e;
                this._handle2.visible = t;
              };
              u.clearArms = function () {
                this.drawSelf();
                this._handle1.visible = false;
                this._handle2.visible = false;
                this._handle1.clearSelf();
                this._handle2.clearSelf();
              };
              u.hasHandles = function () {
                return this._handle1.x != 0 || this._handle1.y != 0 || this._handle2.x != 0 || this._handle2.y != 0;
              };
              u.clone = function () {
                var e = new t();
                e.x = this.x;
                e.y = this.y;
                e.handle1.Set(this.handle1.x, this.handle1.y);
                e.handle2.Set(this.handle2.x, this.handle2.y);
                return e;
              };
              d = t;
              if (c = [{
                key: "handle1",
                get: function () {
                  return this._handle1;
                }
              }, {
                key: "handle2",
                get: function () {
                  return this._handle2;
                }
              }, {
                key: "anchor1",
                get: function () {
                  return new s.RM(this.x + this._handle1.x, this.y + this._handle1.y);
                }
              }, {
                key: "anchor2",
                get: function () {
                  return new s.RM(this.x + this._handle2.x, this.y + this._handle2.y);
                }
              }, {
                key: "selected",
                set: function (e) {
                  this._selected = e;
                  if (this._selected) {
                    this.drawArms(true, true);
                  } else {
                    this.clearArms();
                  }
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
                })(d.prototype, c);
              }
              Object.defineProperty(d, "prototype", {
                writable: false
              });
              return d;
            }(r._);
          },
        6393(e, t, n) {
            "use strict";
        
            n.d(t, {
              _: () => h
            });
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(26099);
            n(2892);
            var r = n(4971);
            var i = n(23222);
            var s = n(97368);
            function a(e) {
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
            function o(e, t) {
              o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return o(e, t);
            }
            var h = function (e) {
              function t(t, n) {
                var s;
                if (t === undefined) {
                  t = 0;
                }
                if (n === undefined) {
                  n = 0;
                }
                (s = e.call(this) || this)._vec = new i.RM();
                s.x = t;
                s.y = n;
                s._sprite = new r.kx();
                s._sprite.mouseEnabled = false;
                s.addChild(s._sprite);
                return s;
              }
              var n;
              var h;
              h = e;
              (n = t).prototype = Object.create(h.prototype);
              n.prototype.constructor = n;
              o(n, h);
              var l;
              var d;
              var c = t.prototype;
              c.drawSelf = function () {
                this.graphics.clear();
                this._sprite.graphics.clear();
                var e = this._selected ? 16777215 : 0;
                this._sprite.graphics.lineStyle(null, 0, 1);
                this._sprite.graphics.beginFill(e, 0.5);
                if (this._edgeShape) {
                  var t = new r.uq();
                  t.rotate(-this._edgeShape.rotation * Math.PI / 180);
                  t.scale(1 / (this._edgeShape.scaleX * Math.pow(2, s.K.currentZoom)), 1 / (this._edgeShape.scaleY * Math.pow(2, s.K.currentZoom)));
                  this._sprite.transform.matrix = t;
                }
                this._sprite.graphics.drawCircle(0, 0, 3);
                this._sprite.graphics.endFill();
              };
              c.clone = function () {
                var e = new t();
                e.x = this.x;
                e.y = this.y;
                return e;
              };
              l = t;
              if (d = [{
                key: "position",
                get: function () {
                  return new r.bR(this.x, this.y);
                }
              }, {
                key: "b2position",
                get: function () {
                  return new i.RM(this.x, this.y);
                }
              }, {
                key: "selected",
                get: function () {
                  return this._selected;
                },
                set: function (e) {
                  this._selected = e;
                  this.drawSelf();
                }
              }, {
                key: "edgeShape",
                get: function () {
                  return this._edgeShape;
                },
                set: function (e) {
                  this._edgeShape = e;
                  this.drawSelf();
                }
              }, {
                key: "x",
                get: function () {
                  return this._pixiSprite.position.x;
                },
                set: function (e) {
                  this._pixiSprite.position.x = e;
                  this._vec.x = this.x;
                }
              }, {
                key: "y",
                get: function () {
                  return this._pixiSprite.position.y;
                },
                set: function (e) {
                  this._pixiSprite.position.y = e;
                  this._vec.y = this.y;
                }
              }, {
                key: "vec",
                get: function () {
                  return this._vec;
                },
                set: function (e) {
                  this._vec = e;
                  this.x = this._vec.x;
                  this.y = this._vec.y;
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
                    Object.defineProperty(e, a(r.key), r);
                  }
                })(l.prototype, d);
              }
              Object.defineProperty(l, "prototype", {
                writable: false
              });
              return l;
            }(r.kx);
          }
    });
})();
