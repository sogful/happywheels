(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        88959(e, t, n) {
            "use strict";
        
            n.d(t, {
              D: () => h
            });
            n(23792);
            n(36033);
            n(26099);
            n(47764);
            n(62953);
            n(62010);
            n(28706);
            n(34782);
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(2892);
            var r = n(4971);
            var i = n(23222);
            var s = n(13362);
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
                (t = e.call(this, {
                  _triggers: [],
                  _triggerActions: new Map(),
                  _triggerActionList: ["wake from sleep", "change opacity", "apply impulse", "set to fixed", "set to non fixed", "delete shapes", "delete self", "change collision"],
                  _triggerActionListProperties: [null, ["newOpacities", "opacityTimes"], ["impulseX", "impulseY", "spin"], null, null, null, null, ["newCollisions"]]
                }) || this)._opacity = 1;
                t.name = "group";
                t.scalable = false;
                t._joinable = true;
                t._joints = [];
                t._triggerable = true;
                t._triggerString = "triggerActionsGroup";
                t._keyedPropertyObject[t._triggerString] = t._triggerActions;
                t._shapeContainer = new r.kx();
                t._specialContainer = new r.kx();
                t.addChild(t._shapeContainer);
                t.addChild(t._specialContainer);
                t.doubleClickEnabled = true;
                return t;
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
              c.setAttributes = function () {
                this._attributes = ["x", "y", "angle", "sleeping", "foreground", "opacity", "immovable3", "fixedRotation"];
                this.addTriggerProperties();
              };
              c.build = function (e, t) {
                var n;
                var i;
                var a;
                var o;
                var h = new r.M_();
                this.shapesUsed = 0;
                this._artUsed = 0;
                for (var l = 0; l < e.length; l++) {
                  (n = e[l]).setOwner(this);
                  this.shapesUsed += n.shapesUsed;
                  this._artUsed += n.artUsed;
                  var d = n.getIsolatedBounds();
                  if (h.width) {
                    h.merge(d);
                  } else {
                    h.copyFrom(d);
                  }
                  i = n.deleteSelf(t);
                  if (n instanceof s.HQ) {
                    this._shapeContainer.addChild(n);
                  } else {
                    if (!(n instanceof s.HR)) {
                      throw Error("group child instanceof not shape or special.  FUCK OFF");
                    }
                    this._specialContainer.addChild(n);
                  }
                  a = new s.Kn(n, null, this, n.parent, n.parent.getChildIndex(n));
                  n.group = this;
                  i.nextAction = a;
                  if (o) {
                    o.nextAction = i.firstAction;
                  }
                  o = a;
                }
                if (this.shapesUsed == 0) {
                  a = new s.cK(this, "joinable", this._joinable, false);
                  if (o) {
                    o.nextAction = a;
                  }
                  this._joinable = false;
                }
                var c = new r.bR(h.x + h.width / 2, h.y + h.height / 2);
                this._shapeContainer.x = this._specialContainer.x = -c.x;
                this._shapeContainer.y = this._specialContainer.y = -c.y;
                this.x = c.x;
                this.y = c.y;
                this._offset = new r.bR(this._shapeContainer.x, this._shapeContainer.y);
                return a;
              };
              c.rebuild = function (e, t, n) {
                var a;
                var o;
                var h;
                var l;
                if (n === undefined) {
                  n = true;
                }
                this.shapesUsed = 0;
                this._artUsed = 0;
                var d = this.rotation * Math.PI / 180;
                for (var c = 0; c < e.length; c++) {
                  (a = e[c]).setOwner(this);
                  var u = new r.bR(a.x, a.y);
                  var p = a.angle;
                  var m = p - this.rotation;
                  var f = new i.RM(a.x - this.x, a.y - this.y);
                  var _ = new i.LJ(-d);
                  var v = new i.RM(-this._offset.x, -this._offset.y);
                  f.MulM(_);
                  f.Add(v);
                  a.angleUnbound = m;
                  var y = new s.Vm(a, p);
                  a.xUnbound = f.x;
                  a.yUnbound = f.y;
                  var g = new s.mA(a, u.clone(), new r.bR(f.x, f.y));
                  y.nextAction = g;
                  if (l) {
                    l.nextAction = y;
                  }
                  l = g;
                  this.shapesUsed += a.shapesUsed;
                  this._artUsed += a.artUsed;
                  o = a.deleteSelf(t);
                  if (a instanceof s.HQ) {
                    this._shapeContainer.addChild(a);
                  } else {
                    if (!(a instanceof s.HR)) {
                      throw Error("group child instanceof not shape or special.  FUCK OFF");
                    }
                    this._specialContainer.addChild(a);
                  }
                  h = new s.Kn(a, a.group, this, a.parent, a.parent.getChildIndex(a));
                  a.group = this;
                  o.nextAction = h;
                  if (l) {
                    l.nextAction = o.firstAction;
                  }
                  l = h;
                }
                if (this.shapesUsed == 0) {
                  h = new s.cK(this, "joinable", this._joinable, false);
                  if (l) {
                    l.nextAction = h;
                  }
                  l = h;
                  this._joinable = false;
                  c = 0;
                  for (; c < this._joints.length; c++) {
                    var w = this._joints[c];
                    h = w.removeBody(this);
                    if (l) {
                      l.nextAction = h.firstAction;
                    }
                    l = h;
                    this.removeJoint(w);
                    c -= 1;
                  }
                } else {
                  h = new s.cK(this, "joinable", this._joinable, true);
                  if (l) {
                    l.nextAction = h;
                  }
                  this._joinable = true;
                }
                this.invalidateLocalBounds();
                return h;
              };
              c.breakApart = function (e, t) {
                var n;
                var r;
                if (this.shapeContainer.numChildren > 0) {
                  r = n = this.breakContainer(this._shapeContainer, e, t);
                }
                if (this.specialContainer.numChildren > 0) {
                  n = this.breakContainer(this._specialContainer, e, t);
                  if (r) {
                    r.nextAction = n.firstAction;
                  }
                  r = n;
                }
                return r;
              };
              c.breakContainer = function (e, t, n) {
                var i;
                var a;
                var o;
                var h;
                var l = this.rotation;
                for (; e.numChildren > 0;) {
                  var d = e.getChildAt(0);
                  i = new r.bR(d.x, d.y);
                  a = e.localToGlobalUnpatched(i.clone());
                  var c = d.angle;
                  var u = c + l;
                  t.push(d);
                  e.removeChild(d);
                  d.setOwner(null);
                  o = new s.X8(d, d.group, null, e, 0);
                  n.addRefSprite(d);
                  if (n instanceof s.gJ) {
                    d.inGroup = true;
                    var p = n;
                    d.group = p.refGroup;
                  } else {
                    d.inGroup = false;
                    d.group = null;
                  }
                  var m = new s.Sl(d, n, d.parent.getChildIndex(d));
                  d.xUnbound = a.x;
                  d.yUnbound = a.y;
                  var f = new s.mA(d, i.clone(), a.clone());
                  d.angleUnbound = u;
                  var _ = new s.Vm(d, c);
                  _.setEndAngle();
                  if (h) {
                    h.nextAction = o;
                  }
                  o.nextAction = m;
                  m.nextAction = f;
                  f.nextAction = _;
                  h = _;
                }
                return h;
              };
              c.addShape = function (e) {
                this.shapesUsed += e.shapesUsed;
                this._artUsed += e.artUsed;
                this._shapeContainer.addChild(e);
                e.setOwner(this);
              };
              c.addSpecial = function (e) {
                this.shapesUsed += e.shapesUsed;
                this._artUsed += e.artUsed;
                this._specialContainer.addChild(e);
                e.setOwner(this);
              };
              c.clone = function () {
                var e = new t();
                e.offset = this.offset;
                e.x = this.x;
                e.y = this.y;
                e.angle = this.angle;
                e.sleeping = this.sleeping;
                e.foreground = this.foreground;
                e.opacity = this.opacity;
                e.joinable = this.joinable;
                e.immovable = this.immovable;
                e.fixedRotation = this.fixedRotation;
                for (var n = 0; n < this._shapeContainer.numChildren; n++) {
                  var r = this._shapeContainer.getChildAt(n);
                  var i = r.clone();
                  i.group = e;
                  i.inGroup = true;
                  e.addShape(i);
                }
                for (n = 0; n < this._specialContainer.numChildren; n++) {
                  (i = (r = this._specialContainer.getChildAt(n)).clone()).group = e;
                  i.inGroup = true;
                  e.addSpecial(i);
                }
                this.transferKeyedProperties(e);
                return e;
              };
              c.vehicleClone = function () {
                var e = new s.uH();
                e.offset = this.offset;
                e.x = this.x;
                e.y = this.y;
                e.angle = this.angle;
                e.sleeping = this.sleeping;
                e.foreground = this.foreground;
                e.opacity = this.opacity;
                e.joinable = this.joinable;
                for (var t = 0; t < this._shapeContainer.numChildren; t++) {
                  var n = this._shapeContainer.getChildAt(t);
                  var r = n.clone();
                  r.group = e;
                  r.inGroup = true;
                  e.addShape(r);
                  r.setFilters();
                }
                for (t = 0; t < this._specialContainer.numChildren; t++) {
                  (r = (n = this._specialContainer.getChildAt(t)).clone()).group = e;
                  r.inGroup = true;
                  e.addSpecial(r);
                }
                this.transferKeyedProperties(e);
                return e;
              };
              c.setProperty = function (e, t) {
                var n;
                var i;
                if (e == "immovable" && t == 1) {
                  for (var a = 0; a < this._joints.length; a++) {
                    var o = this._joints[a];
                    n = o.removeBody(this);
                    if (i) {
                      i.nextAction = n.firstAction;
                    }
                    i = n;
                    this.removeJoint(o);
                    a -= 1;
                  }
                }
                var h = this[e];
                var l = new r.bR(this.x, this.y);
                this[e] = t;
                var d = this[e];
                var c = new r.bR(this.x, this.y);
                if (d != h) {
                  n = new s.cK(this, e, h, d, l, c);
                  if (i) {
                    i.nextAction = n;
                  }
                }
                return n;
              };
              c.drawBoundingBox = function () {
                this.boundingBox.graphics.clear();
                var e = this.getInnerBoundsUnrotated();
                var t = this.doubleClickEnabled ? 52223 : 0;
                this.boundingBox.graphics.lineStyle(0, t, 1, true);
                this.boundingBox.graphics.drawRect(e.x, e.y, e.width, e.height);
              };
              c.getInnerBoundsUnrotated = function () {
                var e = this.rotation;
                this.rotation = 0;
                var t = new r.M_();
                for (var n = this._shapeContainer.children.slice(0).concat(this._specialContainer.children), i = 0; i < n.length; i++) {
                  var s = n[i].getBounds(this);
                  if (!t.width) {
                    t.copyFrom(s);
                  }
                  t.merge(s);
                }
                this.rotation = e;
                return t;
              };
              c.getBounds = function (e) {
                var t = new r.M_();
                for (var n = this._shapeContainer.children.slice(0).concat(this._specialContainer.children), i = 0; i < n.length; i++) {
                  var s = n[i].getBounds(e);
                  if (!t.width) {
                    t.copyFrom(s);
                  }
                  t.merge(s);
                }
                return t;
              };
              c.hitTestObject = function (e) {
                for (var t = this._shapeContainer.children.slice(0).concat(this._specialContainer.children), n = 0; n < t.length; n++) {
                  if (t[n].hitTestObject(e)) {
                    return true;
                  }
                }
                return false;
              };
              c.hitTestPoint = function (e = 0, t = 0, n = false) {
                for (var r = this._shapeContainer.children.slice(0).concat(this._specialContainer.children), i = 0; i < r.length; i++) {
                  if (r[i].hitTestPoint(e, t, n)) {
                    return true;
                  }
                }
                return false;
              };
              l = t;
              if (d = [{
                key: "functions",
                get: function () {
                  if (this.vehiclePossible) {
                    return ["breakSelectedGroups", "convertGroupToVehicle"];
                  } else {
                    return ["breakSelectedGroups"];
                  }
                }
              }, {
                key: "joinable",
                get: function () {
                  return !this._immovable && this._joinable;
                },
                set: function (e) {
                  this._joinable = e;
                }
              }, {
                key: "foreground",
                get: function () {
                  return this._foreground;
                },
                set: function (e) {
                  this._foreground = e;
                }
              }, {
                key: "shapeContainer",
                get: function () {
                  return this._shapeContainer;
                }
              }, {
                key: "specialContainer",
                get: function () {
                  return this._specialContainer;
                }
              }, {
                key: "totalObjects",
                get: function () {
                  return this._shapeContainer.numChildren + this._specialContainer.numChildren;
                }
              }, {
                key: "offset",
                get: function () {
                  return this._offset;
                },
                set: function (e) {
                  this._offset = e.clone();
                  this._shapeContainer.x = this._specialContainer.x = this._offset.x;
                  this._shapeContainer.y = this._specialContainer.y = this._offset.y;
                }
              }, {
                key: "opacity",
                get: function () {
                  return Math.round(this._opacity * 100);
                },
                set: function (e) {
                  if (e < 0) {
                    e = 0;
                  }
                  if (e > 100) {
                    e = 100;
                  }
                  this._opacity = e * 0.01;
                  this._shapeContainer.alpha = this._specialContainer.alpha = this._opacity;
                }
              }, {
                key: "immovable",
                get: function () {
                  return this._immovable;
                },
                set: function (e) {
                  this._immovable = e;
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
                key: "vehiclePossible",
                get: function () {
                  for (var e = 0; e < this._shapeContainer.numChildren; e++) {
                    if (this._shapeContainer.getChildAt(e).interactive) {
                      return true;
                    }
                  }
                  return false;
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
            }(n(73026).$);
          },
        38939(e, t, n) {
            "use strict";
        
            n.d(t, {
              D: () => r.D
            });
            var r = n(88959);
          }
    });
})();
