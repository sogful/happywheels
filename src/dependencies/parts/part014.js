(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        17167(e, t, n) {
            "use strict";
        
            n.d(t, {
              HQ: () => p,
              Qu: () => m,
              RX: () => f,
              Wf: () => _
            });
            n(23792);
            n(36033);
            n(26099);
            n(47764);
            n(62953);
            n(62010);
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(2892);
            var r = n(4971);
            var i = n(13362);
            var s = n(80455);
            var a = n(73026);
            var o = n(35057);
            function h(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) {
                  r.writable = true;
                }
                Object.defineProperty(e, d(r.key), r);
              }
            }
            function l(e, t, n) {
              if (t) {
                h(e.prototype, t);
              }
              if (n) {
                h(e, n);
              }
              Object.defineProperty(e, "prototype", {
                writable: false
              });
              return e;
            }
            function d(e) {
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
            function c(e, t) {
              e.prototype = Object.create(t.prototype);
              e.prototype.constructor = e;
              u(e, t);
            }
            function u(e, t) {
              u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return u(e, t);
            }
            var p = function (e) {
              function t(t, n, r, i, s, a, o, h, l) {
                var d;
                if (r === undefined) {
                  r = false;
                }
                if (i === undefined) {
                  i = 5;
                }
                if (s === undefined) {
                  s = 11184810;
                }
                if (a === undefined) {
                  a = -1;
                }
                if (o === undefined) {
                  o = 100;
                }
                if (h === undefined) {
                  h = 0;
                }
                if (l === undefined) {
                  l = 0;
                }
                (d = e.call(this, {
                  _joints: [],
                  _triggers: [],
                  _triggerActions: new Map(),
                  _triggerActionList: ["wake from sleep", "set to fixed", "set to non fixed", "change opacity", "apply impulse", "delete shape", "delete self", "change collision"],
                  _triggerActionListProperties: [null, null, null, ["newOpacities", "opacityTimes"], ["impulseX", "impulseY", "spin"], null, null, ["newCollisions"]]
                }) || this).minDimension = 0.05;
                d.maxDimension = 50;
                d._vehicleHandle = true;
                d._opacity = 1;
                d._innerCutout = 0;
                d._collision = 1;
                d.maxDensity = 100;
                d.minDensity = 0.1;
                d.minOpacity = 0;
                d.maxOpacity = 100;
                d._interactive = t;
                if (d._interactive) {
                  d.shapesUsed = 1;
                  d._artUsed = 0;
                } else {
                  d.shapesUsed = 0;
                  d._artUsed = 1;
                }
                d._immovable = n;
                d.sleeping = r;
                d._density = i;
                d._color = s;
                d._outlineColor = a;
                d._opacity = o * 0.01;
                d._collision = h;
                d._innerCutout = l;
                d._joinable = true;
                d._groupable = true;
                d._triggerable = true;
                d._type = "RefShape";
                d._triggerString = "triggerActionsShape";
                d._keyedPropertyObject[d._triggerString] = d._triggerActions;
                d.setAttributes();
                d.setFilters();
                d.drawShape();
                return d;
              }
              c(t, e);
              var n = t.prototype;
              n.setAttributes = function () {
                if (this._interactive) {
                  this._attributes = ["x", "y", "shapeWidth", "shapeHeight", "angle", "color", "outlineColor", "opacity", "interactive", "immovable", "collision"];
                } else {
                  this._attributes = ["x", "y", "shapeWidth", "shapeHeight", "angle", "color", "outlineColor", "opacity", "interactive"];
                }
                this.addTriggerProperties();
              };
              n.getFullProperties = function () {
                return ["x", "y", "shapeWidth", "shapeHeight", "angle", "immovable", "sleeping", "density", "color", "outlineColor", "opacity", "collision"];
              };
              n.drawShape = function () {};
              n.getFlatSprite = function () {
                return null;
              };
              n.setFilters = function () {
                if (o.w.currentlyInEditor) {
                  if (this._vehicleHandle && this._interactive && this._group instanceof i.uH && this.filters.length == 0) {
                    this.filters = [t.handleGlowFilter];
                  } else {
                    this.filters = [];
                  }
                }
              };
              n.setProperty = function (e, t) {
                var n;
                var s;
                if (e == "immovable" && t == 1 || e == "interactive" && t == 0) {
                  for (var a = 0; a < this._joints.length; a++) {
                    var o = this._joints[a];
                    n = o.removeBody(this);
                    if (s) {
                      s.nextAction = n.firstAction;
                    }
                    s = n;
                    this.removeJoint(o);
                    a -= 1;
                  }
                } else if (e == "interactive" && this._immovable && this.inGroup) {
                  this._immovable = false;
                  s = new i.cK(this, "immovable", true, false);
                }
                var h = this[e];
                var l = new r.bR(this.x, this.y);
                this[e] = t;
                var d = this[e];
                var c = new r.bR(this.x, this.y);
                if (d != h) {
                  n = new i.cK(this, e, h, d, l, c);
                  if (s) {
                    s.nextAction = n;
                  }
                }
                return n;
              };
              n.clone = function () {
                if (this instanceof f) {
                  var e = new f(this.interactive, this.immovable, this.sleeping, this.density, this.color, this.outlineColor, this.opacity, this.collision);
                } else if (this instanceof _) {
                  e = new _(this.interactive, this.immovable, this.sleeping, this.density, this.color, this.outlineColor, this.opacity, this.collision);
                } else if (this instanceof m) {
                  e = new m(this.interactive, this.immovable, this.sleeping, this.density, this.color, this.outlineColor, this.opacity, this.collision);
                }
                e.x = this.x;
                e.y = this.y;
                e.shapeWidth = this.shapeWidth;
                e.shapeHeight = this.shapeHeight;
                e.angle = this.angle;
                e.vehicleHandle = this.vehicleHandle;
                e.innerCutout = this.innerCutout;
                this.transferKeyedProperties(e);
                return e;
              };
              return l(t, [{
                key: "functions",
                get: function () {
                  if (this.groupable) {
                    return ["groupSelected"];
                  } else if (this.group instanceof i.uH && this._interactive == 1) {
                    if (this.vehicleHandle) {
                      return ["removeHandleProperty"];
                    } else {
                      return ["setShapeAsHandle"];
                    }
                  } else {
                    return [];
                  }
                }
              }, {
                key: "interactive",
                get: function () {
                  return this._interactive;
                },
                set: function (e) {
                  if (this._interactive != e) {
                    this._interactive = e;
                    this.setAttributes();
                    this.setFilters();
                    if (this._interactive) {
                      this.shapesUsed = 1;
                      this._artUsed = 0;
                      this.dispatchEvent(new s.N3(s.N3.ART, -1));
                      this.dispatchEvent(new s.N3(s.N3.SHAPE, 1));
                    } else {
                      this.shapesUsed = 0;
                      this._artUsed = 1;
                      this.dispatchEvent(new s.N3(s.N3.SHAPE, -1));
                      this.dispatchEvent(new s.N3(s.N3.ART, 1));
                    }
                  }
                }
              }, {
                key: "density",
                get: function () {
                  return this._density;
                },
                set: function (e) {
                  if (e > this.maxDensity) {
                    e = this.maxDensity;
                  }
                  if (e < this.minDensity) {
                    e = this.minDensity;
                  }
                  this._density = e;
                }
              }, {
                key: "immovable",
                get: function () {
                  return this._immovable;
                },
                set: function (e) {
                  if (!e || !this.inGroup) {
                    this._immovable = e;
                  }
                }
              }, {
                key: "color",
                get: function () {
                  return this._color;
                },
                set: function (e) {
                  if (this._color != e) {
                    this._color = e;
                    this.drawShape();
                  }
                }
              }, {
                key: "outlineColor",
                get: function () {
                  return this._outlineColor;
                },
                set: function (e) {
                  if (this._outlineColor != e) {
                    this._outlineColor = e;
                    this.drawShape();
                  }
                }
              }, {
                key: "opacity",
                get: function () {
                  return Math.round(this._opacity * 100);
                },
                set: function (e) {
                  if (e < this.minOpacity) {
                    e = this.minOpacity;
                  }
                  if (e > this.maxOpacity) {
                    e = this.maxOpacity;
                  }
                  this._opacity = e * 0.01;
                  this.graphics.pixiGraphics.alpha = this._opacity;
                }
              }, {
                key: "innerCutout",
                get: function () {
                  return this._innerCutout;
                },
                set: function (e) {
                  if (e < 0) {
                    e = 0;
                  }
                  if (e > 100) {
                    e = 100;
                  }
                  this._innerCutout = e;
                  this.drawShape();
                }
              }, {
                key: "collision",
                get: function () {
                  return this._collision;
                },
                set: function (e) {
                  if (e < 1) {
                    e = 1;
                  }
                  if (e > 7) {
                    e = 7;
                  }
                  this._collision = e;
                }
              }, {
                key: "vehicleHandle",
                get: function () {
                  return this._vehicleHandle;
                },
                set: function (e) {
                  this._vehicleHandle = e;
                  this.setFilters();
                }
              }, {
                key: "joinable",
                get: function () {
                  return !this._immovable && !!this.interactive && this._joinable;
                },
                set: function (e) {
                  this._joinable = e;
                }
              }, {
                key: "groupable",
                get: function () {
                  return (!this._interactive || !this._immovable) && !this.inGroup && this._groupable;
                },
                set: function (e) {
                  this._groupable = e;
                }
              }, {
                key: "scaleX",
                get: function () {
                  return this._getScaleX();
                },
                set: function (e) {
                  if (e < this.minDimension) {
                    e = this.minDimension;
                  }
                  if (e > this.maxDimension) {
                    e = this.maxDimension;
                  }
                  this._setScaleX(e);
                }
              }, {
                key: "scaleY",
                get: function () {
                  return this._getScaleY();
                },
                set: function (e) {
                  if (e < this.minDimension) {
                    e = this.minDimension;
                  }
                  if (e > this.maxDimension) {
                    e = this.maxDimension;
                  }
                  this._setScaleY(e);
                }
              }, {
                key: "triggerActionsShape",
                get: function () {
                  return this._triggerActions;
                }
              }]);
            }(a.$);
            p.handleGlowFilter = new r.qx(8447743, 0.5, 5, 5, 20, 4);
            var m = function (e) {
              function t(t, n, r, i, s, a, o, h) {
                var l;
                if (t === undefined) {
                  t = true;
                }
                if (n === undefined) {
                  n = true;
                }
                if (r === undefined) {
                  r = false;
                }
                if (i === undefined) {
                  i = 1;
                }
                if (s === undefined) {
                  s = 4032711;
                }
                if (a === undefined) {
                  a = -1;
                }
                if (o === undefined) {
                  o = 100;
                }
                if (h === undefined) {
                  h = 1;
                }
                (l = e.call(this, t, n, r, i, s, a, o, h) || this).name = "triangle shape";
                l._type = "TriangleShape";
                l.maxDimension = 15;
                return l;
              }
              c(t, e);
              var n = t.prototype;
              n.drawShape = function () {
                if (o.w.currentlyInEditor) {
                  this.graphics.clear();
                  if (this.outlineColor >= 0) {
                    this.graphics.lineStyle(0, this._outlineColor, 1, true);
                  }
                  this.graphics.pixiGraphics.beginFill(this._color, this._color === -1 ? 0.00001 : 1);
                  this.graphics.pixiGraphics.moveTo(0, -200);
                  this.graphics.pixiGraphics.lineTo(50, 100);
                  this.graphics.pixiGraphics.lineTo(-50, 100);
                  this.graphics.pixiGraphics.lineTo(0, -200);
                  this.graphics.pixiGraphics.endFill();
                  this.graphics.pixiGraphics.alpha = this._opacity;
                }
              };
              n.getFlatSprite = function () {
                var e = this._opacity == 0 || this._outlineColor < 0 && this._color < 0;
                var t = new r.kx();
                if (e) {
                  t.visible = false;
                }
                if (e && this._triggers.length === 0) {
                  t.ignoreWhenCulling = true;
                  return t;
                } else {
                  if (this.outlineColor >= 0) {
                    t.graphics.lineStyle(0, this._outlineColor, 1, true);
                  }
                  if (this.color >= 0) {
                    t.graphics.beginFill(this._color, this._opacity);
                  }
                  t.graphics.pixiGraphics.moveTo(0, -200);
                  t.graphics.pixiGraphics.lineTo(50, 100);
                  t.graphics.pixiGraphics.lineTo(-50, 100);
                  t.graphics.pixiGraphics.lineTo(0, -200);
                  t.graphics.pixiGraphics.endFill();
                  t.x = this.x;
                  t.y = this.y;
                  t.scaleX = this.scaleX;
                  t.scaleY = this.scaleY;
                  t.rotation = this.rotation;
                  t.alpha = this._opacity;
                  return t;
                }
              };
              return l(t, [{
                key: "shapeHeight",
                get: function () {
                  return Math.round(this.scaleY * 300);
                },
                set: function (e) {
                  this.scaleY = e / 300;
                }
              }]);
            }(p);
            var f = function (e) {
              function t(t, n, r, i, s, a, o, h) {
                var l;
                if (t === undefined) {
                  t = true;
                }
                if (n === undefined) {
                  n = true;
                }
                if (r === undefined) {
                  r = false;
                }
                if (i === undefined) {
                  i = 1;
                }
                if (s === undefined) {
                  s = 4032711;
                }
                if (a === undefined) {
                  a = -1;
                }
                if (o === undefined) {
                  o = 100;
                }
                if (h === undefined) {
                  h = 1;
                }
                (l = e.call(this, t, n, r, i, s, a, o, h) || this)._type = "RectangleShape";
                l.name = "rectangle shape";
                return l;
              }
              c(t, e);
              var n = t.prototype;
              n.drawShape = function () {
                if (o.w.currentlyInEditor) {
                  this.graphics.pixiGraphics.clear();
                  if (this.outlineColor >= 0) {
                    this.graphics.lineStyle(0, this._outlineColor, 1, true);
                  }
                  this.graphics.pixiGraphics.beginFill(this._color, this._color === -1 ? 0.00001 : 1);
                  this.graphics.pixiGraphics.drawRect(-50, -50, 100, 100);
                  this.graphics.pixiGraphics.endFill();
                  this.graphics.pixiGraphics.alpha = this._opacity;
                }
              };
              n.getFlatSprite = function () {
                var e = this._opacity == 0 || this._outlineColor < 0 && this._color < 0;
                var t = new r.kx();
                if (e) {
                  t.visible = false;
                }
                if (e && this._triggers.length === 0) {
                  t.ignoreWhenCulling = true;
                  return t;
                } else {
                  if (this.outlineColor >= 0) {
                    t.graphics.lineStyle(0, this._outlineColor, 1, true);
                  }
                  if (this.color >= 0) {
                    t.graphics.pixiGraphics.beginFill(this._color, 1);
                  }
                  t.graphics.pixiGraphics.drawRect(-50, -50, 100, 100);
                  t.graphics.pixiGraphics.endFill();
                  t.x = this.x;
                  t.y = this.y;
                  t.scaleX = this.scaleX;
                  t.scaleY = this.scaleY;
                  t.rotation = this.rotation;
                  t.alpha = this._opacity;
                  return t;
                }
              };
              return t;
            }(p);
            var _ = function (e) {
              function t(t, n, r, i, s, a, o, h, l) {
                var d;
                if (t === undefined) {
                  t = true;
                }
                if (n === undefined) {
                  n = true;
                }
                if (r === undefined) {
                  r = false;
                }
                if (i === undefined) {
                  i = 1;
                }
                if (s === undefined) {
                  s = 4032711;
                }
                if (a === undefined) {
                  a = -1;
                }
                if (o === undefined) {
                  o = 100;
                }
                if (h === undefined) {
                  h = 1;
                }
                if (l === undefined) {
                  l = 0;
                }
                (d = e.call(this, t, n, r, i, s, a, o, h, l) || this)._type = "CircleShape";
                d.name = "circle shape";
                return d;
              }
              c(t, e);
              var n = t.prototype;
              n.drawShape = function () {
                if (o.w.currentlyInEditor) {
                  this.graphics.pixiGraphics.clear();
                  if (this.outlineColor >= 0) {
                    this.graphics.lineStyle(0, this._outlineColor, 1, true);
                  }
                  this.graphics.pixiGraphics.beginFill(this._color, this._color === -1 ? 0.00001 : 1);
                  this.graphics.pixiGraphics.drawCircle(0, 0, 50);
                  this.graphics.pixiGraphics.endFill();
                  if (this._innerCutout > 0) {
                    this.graphics.pixiGraphics.beginHole();
                    this.graphics.pixiGraphics.drawCircle(0, 0, this._innerCutout * 49 / 100);
                    this.graphics.pixiGraphics.endHole();
                  }
                  this.graphics.pixiGraphics.alpha = this._opacity;
                }
              };
              n.getFlatSprite = function () {
                var e = this._opacity == 0 || this._outlineColor < 0 && this._color < 0;
                var t = new r.kx();
                if (e) {
                  t.visible = false;
                }
                if (e && this._triggers.length === 0) {
                  t.ignoreWhenCulling = true;
                  return t;
                } else {
                  if (this.outlineColor >= 0) {
                    t.graphics.lineStyle(0, this._outlineColor, 1, true);
                  }
                  if (this.color >= 0) {
                    t.graphics.pixiGraphics.beginFill(this._color, 1);
                  }
                  t.graphics.pixiGraphics.drawCircle(0, 0, 50);
                  t.graphics.pixiGraphics.endFill();
                  if (this._innerCutout > 0) {
                    t.graphics.pixiGraphics.beginHole();
                    t.graphics.pixiGraphics.drawCircle(0, 0, this._innerCutout * 49 / 100);
                    t.graphics.pixiGraphics.endHole();
                  }
                  t.x = this.x;
                  t.y = this.y;
                  t.scaleX = this.scaleX;
                  t.scaleY = this.scaleY;
                  t.rotation = this.rotation;
                  t.alpha = this._opacity;
                  return t;
                }
              };
              n.setAttributes = function () {
                if (this._interactive) {
                  this._attributes = ["x", "y", "shapeWidth", "shapeHeight", "angle", "color", "outlineColor", "opacity", "interactive", "immovable", "collision", "innerCutout"];
                } else {
                  this._attributes = ["x", "y", "shapeWidth", "shapeHeight", "angle", "color", "outlineColor", "opacity", "interactive", "innerCutout"];
                }
                this.addTriggerProperties();
              };
              n.getFullProperties = function () {
                return ["x", "y", "shapeWidth", "shapeHeight", "angle", "immovable", "sleeping", "density", "color", "outlineColor", "opacity", "collision", "innerCutout"];
              };
              return l(t, [{
                key: "shapeWidth",
                get: function () {
                  return this._getShapeWidth();
                },
                set: function (e) {
                  this.scaleX = e / 100;
                  this.scaleY = e / 100;
                }
              }, {
                key: "shapeHeight",
                get: function () {
                  return this._getShapeHeight();
                },
                set: function (e) {
                  this.scaleX = e / 100;
                  this.scaleY = e / 100;
                }
              }]);
            }(p);
          },
        70725(e, t, n) {
            "use strict";
        
            n.d(t, {
              HQ: () => r.HQ,
              PV: () => i.P,
              Ps: () => s.P,
              Qu: () => r.Qu,
              RX: () => r.RX,
              Wf: () => r.Wf,
              kU: () => a.k
            });
            var r = n(17167);
            var i = n(39911);
            var s = n(94695);
            var a = n(70706);
          },
        89055(e, t, n) {
            "use strict";
        
            n.d(t, {
              z: () => h
            });
            n(62010);
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(26099);
            n(2892);
            var r = n(43512);
            var i = n(4971);
            var s = n(98263);
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
              function t() {
                var t;
                (t = e.call(this) || this).sleeping = false;
                t._power = 1;
                t._fixedRotation = false;
                t._accelTime = 0;
                t._fireTime = 0;
                t.name = "jet";
                t._type = "JetRef";
                t.joinable = true;
                t.scalable = false;
                t._joints = [];
                t._triggers = [];
                var n = new i.j7((0, s.zI)("Game", "JetRef"));
                n.convertChildren(n._pixiSprite);
                t.addChild(n);
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              o(n, r);
              var h;
              var l;
              var d = t.prototype;
              d.setAttributes = function () {
                this.shapesUsed = 1;
                this._attributes = ["x", "y", "angle", "sleeping", "power", "fireTime", "accelTime", "fixedRotation"];
              };
              d.clone = function () {
                var e = new t();
                e.x = this.x;
                e.y = this.y;
                e.angle = this.angle;
                e.sleeping = this.sleeping;
                e._power = this._power;
                e._accelTime = this._accelTime;
                e._fireTime = this._fireTime;
                e._fixedRotation = this._fixedRotation;
                return e;
              };
              h = t;
              if (l = [{
                key: "power",
                get: function () {
                  return this._power;
                },
                set: function (e) {
                  if (e > t.MAX_POWER) {
                    e = t.MAX_POWER;
                  }
                  if (e < t.MIN_POWER) {
                    e = t.MIN_POWER;
                  }
                  this._power = e;
                  var n = t.MAX_POWER - t.MIN_POWER;
                  var r = (this._power - t.MIN_POWER) / n;
                  this.scaleX = this.scaleY = 1 + r;
                  if (this._selected) {
                    this.drawBoundingBox();
                  }
                  this.x = this.x;
                  this.y = this.y;
                }
              }, {
                key: "fireTime",
                get: function () {
                  return this._fireTime;
                },
                set: function (e) {
                  if (e > t.MAX_FIRE_TIME) {
                    e = t.MAX_FIRE_TIME;
                  }
                  if (e < t.MIN_FIRE_TIME) {
                    e = t.MIN_FIRE_TIME;
                  }
                  this._fireTime = e;
                }
              }, {
                key: "accelTime",
                get: function () {
                  return this._accelTime;
                },
                set: function (e) {
                  if (e > t.MAX_ACCEL_TIME) {
                    e = t.MAX_ACCEL_TIME;
                  }
                  if (e < t.MIN_ACCEL_TIME) {
                    e = t.MIN_ACCEL_TIME;
                  }
                  this._accelTime = e;
                }
              }, {
                key: "fixedRotation",
                get: function () {
                  return this._fixedRotation;
                },
                set: function (e) {
                  this._fixedRotation = e;
                }
              }, {
                key: "triggerable",
                get: function () {
                  return !!this.sleeping || this._triggerable;
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
                })(h.prototype, l);
              }
              Object.defineProperty(h, "prototype", {
                writable: false
              });
              return h;
            }(r._);
            h.MAX_POWER = 10;
            h.MIN_POWER = 1;
            h.MAX_ACCEL_TIME = 5;
            h.MIN_ACCEL_TIME = 0;
            h.MAX_FIRE_TIME = 50;
            h.MIN_FIRE_TIME = 0;
          }
    });
})();
