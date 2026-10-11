(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        21566(e, t, n) {
            "use strict";
        
            n.d(t, {
              $P: () => h,
              Or: () => u,
              IX: () => f,
              $D: () => y,
              ap: () => b,
              Ns: () => E,
              ab: () => k,
              tO: () => R,
              TK: () => j,
              TQ: () => F,
              TM: () => G,
              hO: () => V,
              zm: () => W,
              sN: () => q,
              d9: () => te,
              RH: () => Z,
              _i: () => ie,
              zt: () => se.z,
              Wd: () => he,
              M_: () => ce,
              XU: () => pe,
              HV: () => fe.H,
              ze: () => ye,
              uB: () => xe,
              g_: () => Ae,
              lR: () => Ee,
              AX: () => ke,
              _c: () => r._,
              HO: () => Re,
              aX: () => je,
              ak: () => Be.a,
              QP: () => nt,
              y8: () => Ne,
              ee: () => He,
              fx: () => Ye,
              $6: () => Ke,
              Wz: () => Qe,
              tL: () => st,
              hl: () => ht
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
                (t = e.call(this) || this)._rateOfFire = 5;
                t._dontShootPlayer = false;
                t._immovable2 = true;
                t.name = "arrow gun";
                t._type = "ArrowGunRef";
                t.shapesUsed = 23;
                t.rotatable = true;
                t.scalable = false;
                t._joinable = true;
                t._groupable = true;
                t._joints = [];
                var n = new i.j7((0, s.zI)("Game", "ArrowGunRef"));
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
                this._attributes = ["x", "y", "angle", "immovable2", "rateOfFire", "dontShootPlayer"];
              };
              d.clone = function () {
                var e = new t();
                e.x = this.x;
                e.y = this.y;
                e.angle = this.angle;
                e.rateOfFire = this.rateOfFire;
                e.immovable2 = this.immovable2;
                e.dontShootPlayer = this.dontShootPlayer;
                this.transferKeyedProperties(e);
                return e;
              };
              h = t;
              if (l = [{
                key: "immovable2",
                get: function () {
                  return this._immovable2;
                },
                set: function (e) {
                  if (!e || !this.inGroup) {
                    this._immovable2 = e;
                  }
                }
              }, {
                key: "rateOfFire",
                get: function () {
                  return this._rateOfFire;
                },
                set: function (e) {
                  this._rateOfFire = e;
                }
              }, {
                key: "dontShootPlayer",
                get: function () {
                  return this._dontShootPlayer;
                },
                set: function (e) {
                  this._dontShootPlayer = e;
                }
              }, {
                key: "joinable",
                get: function () {
                  return !this._immovable2 && this._joinable;
                }
              }, {
                key: "groupable",
                get: function () {
                  return !this._immovable2 && !this.inGroup && this._groupable;
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
            n(23792);
            n(36033);
            n(47764);
            n(62953);
            var l = n(80455);
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
              c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return c(e, t);
            }
            var u = function (e) {
              function t() {
                var t;
                (t = e.call(this, {
                  _triggerable: true,
                  _triggers: [],
                  _triggerActions: new Map(),
                  _triggerActionList: ["wake from sleep", "apply impulse"],
                  _triggerActionListProperties: [null, ["impulseX", "impulseY", "spin"]]
                }) || this)._bladeWeaponType = 1;
                t._reverse = false;
                t.sleeping = false;
                t._interactive = true;
                t.name = "blade weapon";
                t._type = "BladeWeaponRef";
                t.scalable = false;
                t._joinable = true;
                t._groupable = true;
                t.shapesUsed = 2;
                t._joints = [];
                t._keyedPropertyObject[t._triggerString] = t._triggerActions;
                t.mc = new i.j7();
                t.mc.setPixiMovieClip((0, s.zI)("Game", "BladeWeaponMC"));
                t.mc.gotoAndStop(t._bladeWeaponType);
                t.addChild(t.mc);
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              c(n, r);
              var a;
              var o;
              var h = t.prototype;
              h.setAttributes = function () {
                this._attributes = ["x", "y", "angle", "reverse", "sleeping", "interactive", "bladeWeaponType"];
                this.addTriggerProperties();
              };
              h.clone = function () {
                var e = new t();
                e.x = this.x;
                e.y = this.y;
                e.interactive = this.interactive;
                e.angle = this.angle;
                e.reverse = this.reverse;
                e.sleeping = this.sleeping;
                e.bladeWeaponType = this.bladeWeaponType;
                this.transferKeyedProperties(e);
                return e;
              };
              a = t;
              if (o = [{
                key: "bladeWeaponType",
                get: function () {
                  return this._bladeWeaponType;
                },
                set: function (e) {
                  if (e < 1) {
                    e = 1;
                  }
                  if (e > t.MAX_WEAPONS) {
                    e = t.MAX_WEAPONS;
                  }
                  this.mc.gotoAndStop(e);
                  this.invalidateLocalBounds();
                  if (this._selected) {
                    this.drawBoundingBox();
                  }
                  this._bladeWeaponType = e;
                }
              }, {
                key: "reverse",
                get: function () {
                  return this._reverse;
                },
                set: function (e) {
                  if (e != this._reverse) {
                    this.mc.scaleX = e ? -1 : 1;
                    this.invalidateLocalBounds();
                    if (this._selected) {
                      this.drawBoundingBox();
                    }
                    this._reverse = e;
                  }
                }
              }, {
                key: "interactive",
                get: function () {
                  return this._interactive;
                },
                set: function (e) {
                  if (this._interactive != e) {
                    if (!e || !this.inGroup) {
                      this._interactive = e;
                      if (this._interactive) {
                        this._joinable = true;
                        this.shapesUsed = 2;
                        this._artUsed = 0;
                        this.dispatchEvent(new l.N3(l.N3.ART, -1));
                        this.dispatchEvent(new l.N3(l.N3.SHAPE, 2));
                      } else {
                        this._joinable = false;
                        this.shapesUsed = 0;
                        this._artUsed = 1;
                        this.dispatchEvent(new l.N3(l.N3.SHAPE, -2));
                        this.dispatchEvent(new l.N3(l.N3.ART, 1));
                      }
                    }
                  }
                }
              }, {
                key: "groupable",
                get: function () {
                  return !this.inGroup && this._groupable;
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
                    Object.defineProperty(e, d(r.key), r);
                  }
                })(a.prototype, o);
              }
              Object.defineProperty(a, "prototype", {
                writable: false
              });
              return a;
            }(r._);
            function p(e) {
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
            function m(e, t) {
              m = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return m(e, t);
            }
            u.MAX_WEAPONS = 12;
            var f = function (e) {
              function t() {
                var t;
                (t = e.call(this, {
                  _triggerable: true,
                  _triggers: [],
                  _triggerActions: new Map(),
                  _triggerActionList: ["wake from sleep", "apply impulse"],
                  _triggerActionListProperties: [null, ["impulseX", "impulseY", "spin"]]
                }) || this)._interactive = true;
                t.sleeping = false;
                t.name = "boombox";
                t._type = "BoomboxRef";
                t.shapesUsed = 2;
                t.rotatable = true;
                t.scalable = false;
                t._joinable = true;
                t._joints = [];
                t._keyedPropertyObject[t._triggerString] = t._triggerActions;
                var n = new i.j7((0, s.zI)("Game", "BoomboxRef"));
                n.convertChildren(n._pixiSprite);
                t.addChild(n);
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              m(n, r);
              var a;
              var o;
              var h = t.prototype;
              h.setAttributes = function () {
                this._attributes = ["x", "y", "angle", "sleeping", "interactive"];
                this.addTriggerProperties();
              };
              h.clone = function () {
                var e = new t();
                e.x = this.x;
                e.y = this.y;
                e.angle = this.angle;
                e.interactive = this._interactive;
                e.groupable = this._groupable;
                e.joinable = this._joinable;
                e.sleeping = this.sleeping;
                this.transferKeyedProperties(e);
                return e;
              };
              a = t;
              if (o = [{
                key: "interactive",
                get: function () {
                  return this._interactive;
                },
                set: function (e) {
                  if (this._interactive != e) {
                    if (!e || !this.inGroup) {
                      this._interactive = e;
                      if (this._interactive) {
                        this._groupable = false;
                        this._joinable = true;
                        this.shapesUsed = 2;
                        this._artUsed = 0;
                        this.dispatchEvent(new l.N3(l.N3.ART, -1));
                        this.dispatchEvent(new l.N3(l.N3.SHAPE, this.shapesUsed));
                      } else {
                        this._groupable = true;
                        this._joinable = false;
                        this.shapesUsed = 0;
                        this._artUsed = 1;
                        this.dispatchEvent(new l.N3(l.N3.SHAPE, -this.shapesUsed));
                        this.dispatchEvent(new l.N3(l.N3.ART, 1));
                      }
                    }
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
                    Object.defineProperty(e, p(r.key), r);
                  }
                })(a.prototype, o);
              }
              Object.defineProperty(a, "prototype", {
                writable: false
              });
              return a;
            }(r._);
            function _(e) {
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
            function v(e, t) {
              v = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return v(e, t);
            }
            var y = function (e) {
              function t() {
                var t;
                (t = e.call(this) || this).minPanels = 1;
                t.maxPanels = 6;
                t._numPanels = 1;
                t._boostPower = 20;
                t.name = "boost";
                t._type = "BoostRef";
                t.shapesUsed = 1;
                t.rotatable = true;
                t.scalable = false;
                t._triggerable = true;
                t._triggers = [];
                t.panels = new i.j7();
                var n = new i.j7((0, s.zI)("Game", "BoostPanel_copy"));
                t.panels.addChild(n);
                t.addChild(t.panels);
                t.numPanels = 2;
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              v(n, r);
              var a;
              var o;
              var h = t.prototype;
              h.setAttributes = function () {
                this._attributes = ["x", "y", "angle", "numPanels", "boostPower"];
              };
              h.clone = function () {
                var e = new t();
                e.x = this.x;
                e.y = this.y;
                e.angle = this.angle;
                e.numPanels = this.numPanels;
                e.boostPower = this.boostPower;
                return e;
              };
              a = t;
              if (o = [{
                key: "numPanels",
                get: function () {
                  return this._numPanels;
                },
                set: function (e) {
                  if (e < this.minPanels) {
                    e = this.minPanels;
                  }
                  if (e > this.maxPanels) {
                    e = this.maxPanels;
                  }
                  var t = e - this._numPanels;
                  if (t > 0) {
                    for (var n = this._numPanels; n < e; n++) {
                      var r = new i.j7((0, s.zI)("Game", "BoostPanel_copy"));
                      this.panels.addChild(r);
                    }
                  } else if (t < 0) {
                    for (n = t; n < 0; n++) {
                      var a = this.panels.getChildAt(this.panels.numChildren - 1);
                      this.panels.removeChild(a);
                    }
                  }
                  this._numPanels = e;
                  var o = this._numPanels * -90;
                  for (n = 0; n < this._numPanels; n++) {
                    this.panels.getChildAt(n).x = o;
                    o += 180;
                  }
                  this.invalidateLocalBounds();
                  if (this._selected) {
                    this.drawBoundingBox();
                  }
                  this.x = this.x;
                  this.y = this.y;
                }
              }, {
                key: "boostPower",
                get: function () {
                  return this._boostPower;
                },
                set: function (e) {
                  if (e > t.MAX_POWER) {
                    e = t.MAX_POWER;
                  }
                  if (e < t.MIN_POWER) {
                    e = t.MIN_POWER;
                  }
                  this._boostPower = e;
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
                    Object.defineProperty(e, _(r.key), r);
                  }
                })(a.prototype, o);
              }
              Object.defineProperty(a, "prototype", {
                writable: false
              });
              return a;
            }(r._);
            y.MIN_POWER = 10;
            y.MAX_POWER = 100;
            var g = n(35057);
            function w(e) {
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
            function x(e, t) {
              x = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return x(e, t);
            }
            var b = function (e) {
              function t() {
                var t;
                (t = e.call(this, {
                  _triggerable: true,
                  _triggers: [],
                  _triggerActions: new Map(),
                  _triggerActionList: ["wake from sleep", "apply impulse"],
                  _triggerActionListProperties: [null, ["impulseX", "impulseY", "spin"]]
                }) || this)._bottleType = 1;
                t._interactive = true;
                t.sleeping = false;
                t.name = "bottle";
                t._type = "BottleRef";
                t.shapesUsed = 1;
                t.rotatable = true;
                t.scalable = false;
                t._joinable = true;
                t._joints = [];
                t._keyedPropertyObject[t._triggerString] = t._triggerActions;
                if (g.w.currentlyInEditor) {
                  t.container = new i.j7();
                  t.container.setPixiMovieClip((0, s.zI)("Game", "bottle"));
                  t.container.gotoAndStop(1);
                  t.addChild(t.container);
                }
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              x(n, r);
              var a;
              var o;
              var h = t.prototype;
              h.setAttributes = function () {
                this._attributes = ["x", "y", "angle", "bottleType", "sleeping", "interactive"];
                this.addTriggerProperties();
              };
              h.clone = function () {
                var e = new t();
                e.x = this.x;
                e.y = this.y;
                e.rotatable = this.rotatable;
                e.angle = this.angle;
                e.interactive = this._interactive;
                e.groupable = this._groupable;
                e.joinable = this._joinable;
                e.sleeping = this.sleeping;
                e.bottleType = this._bottleType;
                this.transferKeyedProperties(e);
                return e;
              };
              a = t;
              if (o = [{
                key: "bottleType",
                get: function () {
                  return this._bottleType;
                },
                set: function (e) {
                  if (e < 1) {
                    e = 1;
                  }
                  if (e > 4) {
                    e = 4;
                  }
                  if (g.w.currentlyInEditor) {
                    this.container.gotoAndStop(e);
                    this.invalidateLocalBounds();
                  }
                  this._bottleType = e;
                }
              }, {
                key: "interactive",
                get: function () {
                  return this._interactive;
                },
                set: function (e) {
                  if (this._interactive != e) {
                    if (!e || !this.inGroup) {
                      this._interactive = e;
                      if (this._interactive) {
                        this._groupable = false;
                        this._joinable = true;
                        this.shapesUsed = 1;
                        this._artUsed = 0;
                        this.dispatchEvent(new l.N3(l.N3.ART, -1));
                        this.dispatchEvent(new l.N3(l.N3.SHAPE, 1));
                      } else {
                        this._groupable = true;
                        this._joinable = false;
                        this.shapesUsed = 0;
                        this._artUsed = 1;
                        this.dispatchEvent(new l.N3(l.N3.SHAPE, -1));
                        this.dispatchEvent(new l.N3(l.N3.ART, 1));
                      }
                    }
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
                    Object.defineProperty(e, w(r.key), r);
                  }
                })(a.prototype, o);
              }
              Object.defineProperty(a, "prototype", {
                writable: false
              });
              return a;
            }(r._);
            function T(e) {
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
            function A(e, t) {
              A = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return A(e, t);
            }
            var C = function (e) {
              function t() {
                var t;
                (t = e.call(this) || this).tileWidth = 300;
                t.tileHeight = 165;
                t.roofHeight = 100;
                t.minFloors = 3;
                t.maxFloors = 50;
                t.minFloorWidth = 1;
                t.maxFloorWidth = 10;
                t._numFloors = 3;
                t._floorWidth = 1;
                t.shapesUsed = 1;
                t.rotatable = false;
                t.scalable = false;
                t.mouseChildren = true;
                t._type = "BuildingRef";
                t.createTextures();
                t.drawBuilding();
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              A(n, r);
              var i;
              var s;
              var a = t.prototype;
              a.setAttributes = function () {
                this._attributes = ["x", "y", "floorWidth", "numFloors"];
              };
              a.createTextures = function () {};
              a.drawBuilding = function () {};
              a.clone = function () {
                var e = new t();
                e.x = this.x;
                e.y = this.y;
                e.numFloors = this._numFloors;
                e.floorWidth = this._floorWidth;
                return e;
              };
              i = t;
              if (s = [{
                key: "numFloors",
                get: function () {
                  return this._numFloors;
                },
                set: function (e) {
                  if (e < this.minFloors) {
                    e = this.minFloors;
                  }
                  if (e > this.maxFloors) {
                    e = this.maxFloors;
                  }
                  if (this._numFloors != e) {
                    this._numFloors = e;
                    this.drawBuilding();
                    this.invalidateLocalBounds();
                    if (this._selected) {
                      this.drawBoundingBox();
                    }
                    this.x = this.x;
                    this.y = this.y;
                  }
                }
              }, {
                key: "floorWidth",
                get: function () {
                  return this._floorWidth;
                },
                set: function (e) {
                  if (e < this.minFloorWidth) {
                    e = this.minFloorWidth;
                  }
                  if (e > this.maxFloorWidth) {
                    e = this.maxFloorWidth;
                  }
                  if (this._floorWidth != e) {
                    this._floorWidth = e;
                    this.drawBuilding();
                    this.invalidateLocalBounds();
                    if (this._selected) {
                      this.drawBoundingBox();
                    }
                    this.x = this.x;
                    this.y = this.y;
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
                    Object.defineProperty(e, T(r.key), r);
                  }
                })(i.prototype, s);
              }
              Object.defineProperty(i, "prototype", {
                writable: false
              });
              return i;
            }(r._);
            function S(e, t) {
              S = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return S(e, t);
            }
            var E = function (e) {
              function t() {
                var t;
                (t = e.call(this) || this).name = "building 1";
                t._type = "Building1Ref";
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              S(n, r);
              var a = t.prototype;
              a.setAttributes = function () {
                this._attributes = ["x", "y", "floorWidth", "numFloors"];
              };
              a.createTextures = function () {
                var e = i.pW.instance;
                if (e.getTexture(t.B1_ROOF)) {
                  this.roofBMD = e.getTexture(t.B1_ROOF);
                  this.floorBMD = e.getTexture(t.B1_FLOOR);
                  return;
                }
                var n = new i.j7((0, s.zI)("Game", "building1_source"));
                n.convertChildren(n._pixiSprite);
                var r = new i.kx();
                r.addChild(this.createBricks(this.tileWidth, this.roofHeight));
                var a = n.roofTexture;
                r.addChild(a);
                this.roofBMD = new i.ws(this.tileWidth, this.roofHeight, false, 0);
                this.roofBMD.draw(r);
                this.floorBMD = new i.ws(600, 330, false, 0);
                this.floorBMD.draw(this.createBricks(600, 330));
                var o = n.windowTexture;
                this.addWindows(o, this.floorBMD);
                var h = n.ledgeTexture;
                this.addLedge(h, this.floorBMD);
                e.addTexture(t.B1_ROOF, this.roofBMD);
                e.addTexture(t.B1_FLOOR, this.floorBMD);
              };
              a.createBricks = function (e, t) {
                var n = new i.kx();
                n.graphics.beginFill(13351586, 1);
                n.graphics.drawRect(0, 0, e, t);
                var r = Math.floor(e / 15);
                for (var s = Math.floor(t / 5), a = 0, o = 0, h = 0; h < s; h++) {
                  a = h % 2 == 1 ? -7 : 0;
                  for (var l = 0; l < r; l++) {
                    var d = 9206119;
                    var c = Math.round(Math.random() * 64) - 32;
                    d += c;
                    d += c << 8;
                    d += c << 16;
                    n.graphics.beginFill(d, 1);
                    n.graphics.drawRect(a, o, 14, 4);
                    n.graphics.endFill();
                    if (a == -7) {
                      n.graphics.beginFill(d, 1);
                      n.graphics.drawRect(a + e, o, 14, 4);
                      n.graphics.endFill();
                    }
                    a += 15;
                  }
                  o += 5;
                }
                return n;
              };
              a.addWindows = function (e, t) {
                var n = Math.floor(t.width / this.tileWidth) * 3;
                for (var r = Math.floor(t.height / this.tileHeight), s = 40, a = 0; a < r; a++) {
                  for (var o = 0; o < n; o++) {
                    var h = this.randomizeWindowTexture(e);
                    var l = new i.uq();
                    l.translate(s + o * 80, a * 165);
                    t.draw(h, l);
                    if (o % 3 == 2) {
                      s += 60;
                    }
                  }
                  s = 40;
                }
              };
              a.addLedge = function (e, t) {
                e.width = t.width;
                var n = new i.uq();
                n.scale(50, 1);
                n.translate(0, 90);
                t.draw(e, n);
              };
              a.randomizeWindowTexture = function (e) {
                var t = Math.random();
                var n = e.ac;
                var r = e.frame;
                var a = e.outerFrame;
                var o = e.frameShadow;
                var h = new i.j7((0, s.zI)("Game", "window_shade"));
                h.x = 30;
                n.visible = true;
                if (t < 0.15) {
                  r.y = 8;
                } else {
                  n.visible = false;
                  r.y = Math.ceil(Math.random() * 43);
                }
                o.y = r.y + 4;
                h.scaleY = Math.random() * 0.8 + 0.2;
                var l = new i.kx();
                l.addChildAt(e.bg, 0);
                l.addChild(h);
                l.addChild(o);
                l.addChild(r);
                l.addChild(a);
                l.addChild(n);
                return l;
              };
              a.drawBuilding = function () {
                this.graphics.clear();
                var e = this.tileWidth * this._floorWidth;
                var t = 0;
                var n = new i.uq(1, 0, 0, 1, 0, t);
                this.graphics.beginBitmapFill(this.roofBMD, n, true, false);
                this.graphics.drawRect(0, t, e, this.roofHeight);
                this.graphics.endFill();
                t += this.roofHeight;
                n = new i.uq(1, 0, 0, 1, 0, t);
                this.graphics.beginBitmapFill(this.floorBMD, n, true, false);
                this.graphics.drawRect(0, t, e, this.tileHeight * this._numFloors);
                this.graphics.endFill();
              };
              a.clone = function () {
                var e = new t();
                e.x = this.x;
                e.y = this.y;
                e.numFloors = this._numFloors;
                e.floorWidth = this._floorWidth;
                return e;
              };
              return t;
            }(C);
            function O(e, t) {
              O = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return O(e, t);
            }
            E.B1_ROOF = "b1roof";
            E.B1_FLOOR = "b1floor";
            var k = function (e) {
              function t() {
                var t;
                (t = e.call(this) || this).name = "building 2";
                t._type = "Building2Ref";
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              O(n, r);
              var a = t.prototype;
              a.setAttributes = function () {
                this._attributes = ["x", "y", "floorWidth", "numFloors"];
              };
              a.createTextures = function () {
                this.tileWidth = 500;
                this.tileHeight = 180;
                this.roofHeight = 120;
                var e = i.pW.instance;
                if (e.getTexture(t.B2_ROOF)) {
                  this.roofBMD = e.getTexture(t.B2_ROOF);
                  this.floorBMD = e.getTexture(t.B2_FLOOR);
                  return;
                }
                var n = new i.j7((0, s.zI)("Game", "building2_source"));
                n.convertChildren(n._pixiSprite);
                var r = n.roofTexture;
                this.roofBMD = new i.ws(this.tileWidth, this.roofHeight, false, 0);
                this.roofBMD.draw(r);
                var a = n.floorTexture;
                this.floorBMD = new i.ws(this.tileWidth, this.tileHeight, false, 0);
                this.floorBMD.draw(a);
                e.addTexture(t.B2_ROOF, this.roofBMD);
                e.addTexture(t.B2_FLOOR, this.floorBMD);
              };
              a.drawBuilding = function () {
                this.graphics.clear();
                var e = this.tileWidth * this._floorWidth + 226;
                var t = 0;
                var n = new i.uq(1, 0, 0, 1, 0, t);
                this.graphics.beginBitmapFill(this.roofBMD, n, true, false);
                this.graphics.drawRect(0, t, e, this.roofHeight);
                this.graphics.endFill();
                t += this.roofHeight;
                n = new i.uq(1, 0, 0, 1, 0, t);
                this.graphics.beginBitmapFill(this.floorBMD, n, true, false);
                this.graphics.drawRect(0, t, e, this.tileHeight * this._numFloors);
                this.graphics.endFill();
              };
              a.clone = function () {
                var e = new t();
                e.x = this.x;
                e.y = this.y;
                e.numFloors = this._numFloors;
                e.floorWidth = this._floorWidth;
                return e;
              };
              return t;
            }(C);
            function P(e) {
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
            function M(e, t) {
              M = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return M(e, t);
            }
            k.B2_ROOF = "b2roof";
            k.B2_FLOOR = "b2floor";
            var R = function (e) {
              function t() {
                var t;
                (t = e.call(this) || this)._startRotation = 0;
                t._firingRotation = 0;
                t._muzzleScale = 1;
                t._power = 5;
                t._delay = 1;
                t._cannonType = 1;
                t.name = "cannon";
                t._type = "CannonRef";
                t.scalable = false;
                t.base = new i.j7();
                t.base.setPixiMovieClip((0, s.zI)("Game", "CannonBaseMC"));
                t.base.convertChildren(t.base.pixiMovieClip);
                t.base.gotoAndStop(1);
                t.muzzle = new i.j7((0, s.zI)("Game", "cannon_with_IN_arrow"));
                t.muzzle.convertChildren(t.muzzle._pixiSprite);
                t.muzzle.inner.gotoAndStop(1);
                t.muzzleShadow = new i.j7((0, s.zI)("Game", "cannon_with_OUT_arrow"));
                t.muzzleShadow.convertChildren(t.muzzleShadow._pixiSprite);
                t.muzzleShadow.inner.gotoAndStop(1);
                t.base.star.gotoAndStop(1);
                t.base.meter.removeChild(t.base.meter.bar);
                t.removeChild(t.shapes);
                t.addChild(t.muzzle);
                t.addChild(t.muzzleShadow);
                t.addChild(t.base);
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              M(n, r);
              var a;
              var o;
              var h = t.prototype;
              h.setAttributes = function () {
                this._attributes = ["x", "y", "angle", "startRotation", "firingRotation", "cannonType", "cannonDelay", "muzzleScale", "cannonPower"];
              };
              h.clone = function () {
                var e = new t();
                e.x = this.x;
                e.y = this.y;
                e.angle = this.angle;
                e.startRotation = this.startRotation;
                e.firingRotation = this.firingRotation;
                e.muzzleScale = this.muzzleScale;
                e.cannonPower = this.cannonPower;
                e.cannonDelay = this.cannonDelay;
                e.cannonType = this.cannonType;
                return e;
              };
              a = t;
              if (o = [{
                key: "startRotation",
                get: function () {
                  return this._startRotation;
                },
                set: function (e) {
                  if (e < -90) {
                    e = -90;
                  }
                  if (e > 90) {
                    e = 90;
                  }
                  this._startRotation = e;
                  this.muzzle.rotation = this._startRotation;
                  this.invalidateLocalBounds();
                  if (this._selected) {
                    this.drawBoundingBox();
                  }
                }
              }, {
                key: "firingRotation",
                get: function () {
                  return this._firingRotation;
                },
                set: function (e) {
                  if (e < -90) {
                    e = -90;
                  }
                  if (e > 90) {
                    e = 90;
                  }
                  this._firingRotation = e;
                  this.muzzleShadow.rotation = this._firingRotation;
                  this.invalidateLocalBounds();
                  if (this._selected) {
                    this.drawBoundingBox();
                  }
                }
              }, {
                key: "cannonPower",
                get: function () {
                  return this._power;
                },
                set: function (e) {
                  if (e < 1) {
                    e = 1;
                  }
                  if (e > 10) {
                    e = 10;
                  }
                  this._power = e;
                }
              }, {
                key: "cannonType",
                get: function () {
                  return this._cannonType;
                },
                set: function (e) {
                  if (e < 1) {
                    e = 1;
                  }
                  if (e > 2) {
                    e = 2;
                  }
                  this._cannonType = e;
                  this.muzzle.inner.gotoAndStop(this._cannonType);
                  this.muzzleShadow.inner.gotoAndStop(this._cannonType);
                  this.base.gotoAndStop(this._cannonType);
                  if (e == 1) {
                    this.base.star.gotoAndStop(1);
                  }
                  this.invalidateLocalBounds();
                }
              }, {
                key: "cannonDelay",
                get: function () {
                  return this._delay;
                },
                set: function (e) {
                  if (e < 1) {
                    e = 1;
                  }
                  if (e > 10) {
                    e = 10;
                  }
                  this._delay = e;
                }
              }, {
                key: "muzzleScale",
                get: function () {
                  return this._muzzleScale;
                },
                set: function (e) {
                  if (e < 1) {
                    e = 1;
                  }
                  if (e > 10) {
                    e = 10;
                  }
                  this._muzzleScale = e;
                  var t = 1 + e / 20;
                  this.muzzle.scaleX = this.muzzle.scaleY = this.muzzleShadow.scaleX = this.muzzleShadow.scaleY = t;
                  this.invalidateLocalBounds();
                  if (this._selected) {
                    this.drawBoundingBox();
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
                    Object.defineProperty(e, P(r.key), r);
                  }
                })(a.prototype, o);
              }
              Object.defineProperty(a, "prototype", {
                writable: false
              });
              return a;
            }(r._);
            function I(e) {
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
            function L(e, t) {
              L = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return L(e, t);
            }
            var j = function (e) {
              function t() {
                var t;
                (t = e.call(this, {
                  _triggerable: true,
                  _triggers: [],
                  _triggerActions: new Map(),
                  _triggerActionList: ["wake from sleep", "apply impulse"],
                  _triggerActionListProperties: [null, ["impulseX", "impulseY"]]
                }) || this).sleeping = false;
                t.baseAngle = 90;
                t.baseLinkThickness = 3;
                t.baseLinkHeight = 15;
                t._interactive = true;
                t._linkAngle = 0;
                t._linkScale = 1;
                t._linkCount = 20;
                t._linkMCs = [];
                t._points = [];
                t.name = "chain";
                t._type = "ChainRef";
                t.shapesUsed = t._linkCount;
                t._artUsed = 0;
                t.rotatable = true;
                t.scalable = false;
                t._joinable = true;
                t._joints = [];
                t._keyedPropertyObject[t._triggerString] = t._triggerActions;
                t.container = new i.kx();
                t.addChild(t.container);
                t.addLinks();
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              L(n, r);
              var a;
              var o;
              var h = t.prototype;
              h.addLinks = function () {
                this.clearLinks();
                var e = 1 + (this._linkScale - 1) / 9 * 2;
                var t = -this._linkAngle / 10 * (360 / (this._linkCount * 2));
                this.shapesUsed = this._linkCount;
                var n;
                var r;
                var a = 180 / Math.PI;
                var o = this.baseAngle / a;
                var h = t / a;
                var l = [0, 0];
                this._points = [l];
                var d = (this.baseLinkHeight - this.baseLinkThickness * 2) * e;
                var c = this.container.numChildren;
                for (var u = 0; u < this._linkCount; u++) {
                  r = (n = o + ((u + 1) * h - h * 0.5)) * a;
                  var p = Math.cos(n) * d;
                  var m = Math.sin(n) * d;
                  var f = undefined;
                  if (u % 2 == 0) {
                    (f = new i.j7()).setPixiMovieClip((0, s.zI)("Game", "link0MC"));
                    this.container.addChildAt(f, Math.max(0, c));
                  } else {
                    (f = new i.j7()).setPixiMovieClip((0, s.zI)("Game", "link1MC"));
                    this.container.addChildAt(f, c + 1);
                  }
                  f.scaleX = f.scaleY = e;
                  f.rotation = r - 90;
                  f.x = l[0] + p / 2;
                  f.y = l[1] + m / 2;
                  this._linkMCs.push(f);
                  l[0] = l[0] + p;
                  l[1] = l[1] + m;
                  c = f.parent.getChildIndex(f);
                  this._points.push(l);
                }
                this.invalidateLocalBounds();
                if (this._selected) {
                  this.drawBoundingBox();
                }
              };
              h.clearLinks = function () {
                for (var e = 0; e < this._linkMCs.length; e++) {
                  this.container.removeChild(this._linkMCs[e]);
                }
                this._linkMCs = [];
              };
              h.setAttributes = function () {
                this._attributes = ["x", "y", "angle", "sleeping", "interactive", "linkCount", "linkScale", "linkAngle"];
                this.addTriggerProperties();
              };
              h.clone = function () {
                var e = new t();
                e.x = this.x;
                e.y = this.y;
                e.rotatable = this.rotatable;
                e.angle = this.angle;
                e.interactive = this._interactive;
                e.groupable = this._groupable;
                e.joinable = this._joinable;
                e.sleeping = this.sleeping;
                e.linkScale = this._linkScale;
                e.linkAngle = this._linkAngle;
                e.linkCount = this._linkCount;
                this.transferKeyedProperties(e);
                return e;
              };
              a = t;
              if (o = [{
                key: "interactive",
                get: function () {
                  return this._interactive;
                },
                set: function (e) {
                  if (this._interactive != e) {
                    this._interactive = e;
                    if (this._interactive) {
                      this._joinable = true;
                      this.shapesUsed = this._linkCount;
                      this._artUsed = 0;
                      this.dispatchEvent(new l.N3(l.N3.ART, -this._linkCount));
                      this.dispatchEvent(new l.N3(l.N3.SHAPE, this._linkCount));
                    } else {
                      this._joinable = false;
                      this.shapesUsed = 0;
                      this._artUsed = this._linkCount;
                      this.dispatchEvent(new l.N3(l.N3.SHAPE, -this._linkCount));
                      this.dispatchEvent(new l.N3(l.N3.ART, this._linkCount));
                    }
                  }
                }
              }, {
                key: "linkScale",
                get: function () {
                  return this._linkScale;
                },
                set: function (e) {
                  if (e < 1) {
                    e = 1;
                  }
                  if (e > 10) {
                    e = 10;
                  }
                  this._linkScale = e;
                  this.addLinks();
                }
              }, {
                key: "linkAngle",
                get: function () {
                  return this._linkAngle;
                },
                set: function (e) {
                  if (e < -10) {
                    e = -10;
                  }
                  if (e > 10) {
                    e = 10;
                  }
                  this._linkAngle = e;
                  this.addLinks();
                }
              }, {
                key: "linkCount",
                get: function () {
                  return this._linkCount;
                },
                set: function (e) {
                  if (e < 2) {
                    e = 2;
                  }
                  if (e > 40) {
                    e = 40;
                  }
                  var t = e - this._linkCount;
                  this.dispatchEvent(new l.N3(l.N3.SHAPE, t));
                  this._linkCount = e;
                  this.addLinks();
                }
              }, {
                key: "linkMCs",
                get: function () {
                  return this._linkMCs;
                },
                set: function (e) {
                  this._linkMCs = e;
                }
              }, {
                key: "points",
                get: function () {
                  return this._points;
                },
                set: function (e) {
                  this._points = e;
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
                    Object.defineProperty(e, I(r.key), r);
                  }
                })(a.prototype, o);
              }
              Object.defineProperty(a, "prototype", {
                writable: false
              });
              return a;
            }(r._);
            function B(e) {
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
            function D(e, t) {
              D = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return D(e, t);
            }
            var F = function (e) {
              function t() {
                var t;
                (t = e.call(this, {
                  _triggerable: true,
                  _triggers: [],
                  _triggerActions: new Map(),
                  _triggerActionList: ["wake from sleep", "apply impulse"],
                  _triggerActionListProperties: [null, ["impulseX", "impulseY", "spin"]]
                }) || this).sleeping = false;
                t._reverse = false;
                t._interactive = true;
                t.name = "chair";
                t._type = "ChairRef";
                t.shapesUsed = 4;
                t.rotatable = true;
                t.scalable = false;
                t._joinable = true;
                t._joints = [];
                t._keyedPropertyObject[t._triggerString] = t._triggerActions;
                t.container = new i.j7((0, s.zI)("Game", "ChairRef"));
                t.container.convertChildren(t.container._pixiSprite);
                t.addChild(t.container);
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              D(n, r);
              var a;
              var o;
              var h = t.prototype;
              h.setAttributes = function () {
                this._attributes = ["x", "y", "angle", "reverse", "sleeping", "interactive"];
                this.addTriggerProperties();
              };
              h.clone = function () {
                var e = new t();
                e.x = this.x;
                e.y = this.y;
                e.reverse = this.reverse;
                e.angle = this.angle;
                e.sleeping = this.sleeping;
                e.interactive = this._interactive;
                e.joinable = this._joinable;
                this.transferKeyedProperties(e);
                return e;
              };
              a = t;
              if (o = [{
                key: "interactive",
                get: function () {
                  return this._interactive;
                },
                set: function (e) {
                  if (this._interactive != e) {
                    if (!e || !this.inGroup) {
                      this._interactive = e;
                      if (this._interactive) {
                        this._groupable = false;
                        this._joinable = true;
                        this.shapesUsed = 4;
                        this._artUsed = 0;
                        this.dispatchEvent(new l.N3(l.N3.ART, -1));
                        this.dispatchEvent(new l.N3(l.N3.SHAPE, 4));
                      } else {
                        this._groupable = true;
                        this._joinable = false;
                        this.shapesUsed = 0;
                        this._artUsed = 1;
                        this.dispatchEvent(new l.N3(l.N3.SHAPE, -4));
                        this.dispatchEvent(new l.N3(l.N3.ART, 1));
                      }
                    }
                  }
                }
              }, {
                key: "reverse",
                get: function () {
                  return this._reverse;
                },
                set: function (e) {
                  if (e != this._reverse) {
                    this._reverse = e;
                    if (this._reverse) {
                      this.container.scaleX = -1;
                    } else {
                      this.container.scaleX = 1;
                    }
                    this.invalidateLocalBounds();
                    if (this._selected) {
                      this.drawBoundingBox();
                    }
                    this.x = this.x;
                    this.y = this.y;
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
                    Object.defineProperty(e, B(r.key), r);
                  }
                })(a.prototype, o);
              }
              Object.defineProperty(a, "prototype", {
                writable: false
              });
              return a;
            }(r._);
            function N(e, t) {
              N = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return N(e, t);
            }
            var G = function (e) {
              function t() {
                var t;
                (t = e.call(this) || this).shapesUsed = 3;
                t.name = "fan";
                t._type = "FanRef";
                t.rotatable = true;
                t.scalable = false;
                t._triggerable = true;
                t._triggers = [];
                var n = new i.j7((0, s.zI)("Game", "FanRef"));
                n.convertChildren(n._pixiSprite);
                t.addChild(n);
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              N(n, r);
              var a = t.prototype;
              a.setAttributes = function () {
                this._attributes = ["x", "y", "angle"];
              };
              a.clone = function () {
                var e = new t();
                e.x = this.x;
                e.y = this.y;
                e.angle = this.angle;
                return e;
              };
              return t;
            }(r._);
            function U(e, t) {
              U = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return U(e, t);
            }
            var V = function (e) {
              function t() {
                var t;
                (t = e.call(this) || this).name = "finish line";
                t._type = "FinishLineRef";
                t.shapesUsed = 1;
                t.rotatable = false;
                t.scalable = false;
                var n = new i.j7((0, s.zI)("Game", "FinishLineMC"));
                n.convertChildren(n._pixiSprite);
                t.addChild(n);
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              U(n, r);
              var a = t.prototype;
              a.setAttributes = function () {
                this._attributes = ["x", "y"];
              };
              a.clone = function () {
                var e = new t();
                e.x = this.x;
                e.y = this.y;
                return e;
              };
              return t;
            }(r._);
            function H(e) {
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
            function z(e, t) {
              z = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return z(e, t);
            }
            var W = function (e) {
              function t() {
                var t;
                (t = e.call(this, {
                  _triggerable: true,
                  _triggers: [],
                  _triggerActions: new Map(),
                  _triggerActionList: ["wake from sleep", "apply impulse"],
                  _triggerActionListProperties: [null, ["impulseX", "impulseY", "spin"]]
                }) || this).sleeping = false;
                t._interactive = true;
                t._foodType = 1;
                t.name = "food item";
                t._type = "FoodItemRef";
                t.shapesUsed = 3;
                t.rotatable = true;
                t.scalable = false;
                t._joinable = true;
                t._joints = [];
                t._keyedPropertyObject[t._triggerString] = t._triggerActions;
                var n = new i.j7((0, s.zI)("Game", "FoodItemRef"));
                t.container = new i.j7();
                t.container.setPixiMovieClip(n.pixiSprite.container);
                t.container.gotoAndStop(t._foodType);
                t.addChild(t.container);
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              z(n, r);
              var a;
              var o;
              var h = t.prototype;
              h.setAttributes = function () {
                this._attributes = ["x", "y", "angle", "sleeping", "interactive", "foodItemType"];
                this.addTriggerProperties();
              };
              h.clone = function () {
                var e = new t();
                e.x = this.x;
                e.y = this.y;
                e.angle = this.angle;
                e.interactive = this._interactive;
                e.groupable = this._groupable;
                e.joinable = this._joinable;
                e.sleeping = this.sleeping;
                e.foodItemType = this._foodType;
                this.transferKeyedProperties(e);
                return e;
              };
              a = t;
              if (o = [{
                key: "interactive",
                get: function () {
                  return this._interactive;
                },
                set: function (e) {
                  if (this._interactive != e) {
                    if (!e || !this.inGroup) {
                      this._interactive = e;
                      if (this._interactive) {
                        this._groupable = false;
                        this._joinable = true;
                        this.shapesUsed = 3;
                        this._artUsed = 0;
                        this.dispatchEvent(new l.N3(l.N3.ART, -1));
                        this.dispatchEvent(new l.N3(l.N3.SHAPE, this.shapesUsed));
                      } else {
                        this._groupable = true;
                        this._joinable = false;
                        this.shapesUsed = 0;
                        this._artUsed = 1;
                        this.dispatchEvent(new l.N3(l.N3.SHAPE, -this.shapesUsed));
                        this.dispatchEvent(new l.N3(l.N3.ART, 1));
                      }
                    }
                  }
                }
              }, {
                key: "foodItemType",
                get: function () {
                  return this._foodType;
                },
                set: function (e) {
                  if (e < 1) {
                    e = 1;
                  }
                  if (e > 3) {
                    e = 3;
                  }
                  this._foodType = e;
                  this.container.gotoAndStop(e);
                  this.invalidateLocalBounds();
                  if (this._selected) {
                    this.drawBoundingBox();
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
                    Object.defineProperty(e, H(r.key), r);
                  }
                })(a.prototype, o);
              }
              Object.defineProperty(a, "prototype", {
                writable: false
              });
              return a;
            }(r._);
            function X(e) {
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
            function Y(e, t) {
              Y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return Y(e, t);
            }
            var q = function (e) {
              function t() {
                var t;
                (t = e.call(this, {
                  _triggerable: true,
                  _triggers: [],
                  _triggerActions: new Map(),
                  _triggerActionList: ["shatter", "wake from sleep", "apply impulse"],
                  _triggerActionListProperties: [null, null, ["impulseX", "impulseY", "spin"]],
                  _triggerString: "triggerActionsGlass"
                }) || this).sleeping = false;
                t.minXDimension = 0.05;
                t.maxXDimension = 0.5;
                t.minYDimension = 0.5;
                t.maxYDimension = 5;
                t.minStrength = 1;
                t.maxStrength = 10;
                t._shatterStrength = 10;
                t._stabbing = true;
                t.name = "glass panel";
                t._type = "GlassRef";
                t.shapesUsed = 16;
                t.rotatable = true;
                t.scalable = true;
                t._joinable = true;
                t._joints = [];
                t.scaleX = 0.1;
                t.scaleY = 1;
                t._keyedPropertyObject[t._triggerString] = t._triggerActions;
                t.drawShape();
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              Y(n, r);
              var i;
              var s;
              var a = t.prototype;
              a.setAttributes = function () {
                this._attributes = ["x", "y", "shapeWidth", "shapeHeight", "angle", "sleeping", "shatterStrength", "stabbing"];
                this.addTriggerProperties();
              };
              a.clone = function () {
                var e = new t();
                e.x = this.x;
                e.y = this.y;
                e.angle = this.angle;
                e.scaleX = this.scaleX;
                e.scaleY = this.scaleY;
                e.sleeping = this.sleeping;
                e.shatterStrength = this.shatterStrength;
                e.stabbing = this.stabbing;
                this.transferKeyedProperties(e);
                return e;
              };
              a.drawShape = function () {
                this.graphics.clear();
                this.graphics.beginFill(6737151, 0.35);
                this.graphics.drawRect(-50, -50, 100, 100);
                this.graphics.endFill();
              };
              i = t;
              if (s = [{
                key: "scaleX",
                get: function () {
                  return this._getScaleX();
                },
                set: function (e) {
                  if (e < this.minXDimension) {
                    e = this.minXDimension;
                  }
                  if (e > this.maxXDimension) {
                    e = this.maxXDimension;
                  }
                  this._setScaleX(e);
                }
              }, {
                key: "scaleY",
                get: function () {
                  return this._getScaleY();
                },
                set: function (e) {
                  if (e < this.minYDimension) {
                    e = this.minYDimension;
                  }
                  if (e > this.maxYDimension) {
                    e = this.maxYDimension;
                  }
                  this._setScaleY(e);
                }
              }, {
                key: "shatterStrength",
                get: function () {
                  return this._shatterStrength;
                },
                set: function (e) {
                  if (e == 0) {
                    e = 10;
                  }
                  if (e < this.minStrength) {
                    e = this.minStrength;
                  }
                  if (e > this.maxStrength) {
                    e = this.maxStrength;
                  }
                  this._shatterStrength = e;
                }
              }, {
                key: "stabbing",
                get: function () {
                  return this._stabbing;
                },
                set: function (e) {
                  this._stabbing = e;
                }
              }, {
                key: "triggerActionsGlass",
                get: function () {
                  return this._triggerActions;
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
                    Object.defineProperty(e, X(r.key), r);
                  }
                })(i.prototype, s);
              }
              Object.defineProperty(i, "prototype", {
                writable: false
              });
              return i;
            }(r._);
            function J(e) {
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
            function K(e, t) {
              K = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return K(e, t);
            }
            var Z = function (e) {
              function t() {
                var t;
                (t = e.call(this) || this)._seekSpeed = 1;
                t._explosionDelay = 0;
                t.name = "homing mine";
                t._type = "HomingMineRef";
                t.rotatable = false;
                t.scalable = false;
                t._triggers = [];
                t._triggerable = true;
                var n = new i.j7((0, s.zI)("Game", "HomingMineRef"));
                n.convertChildren(n._pixiSprite);
                t.addChild(n);
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              K(n, r);
              var a;
              var o;
              var h = t.prototype;
              h.setAttributes = function () {
                this.shapesUsed = 4;
                this._attributes = ["x", "y", "seekSpeed", "explosionDelay"];
              };
              h.clone = function () {
                var e = new t();
                e.x = this.x;
                e.y = this.y;
                e.seekSpeed = this.seekSpeed;
                e.explosionDelay = this.explosionDelay;
                return e;
              };
              a = t;
              if (o = [{
                key: "seekSpeed",
                get: function () {
                  return this._seekSpeed;
                },
                set: function (e) {
                  if (e > 10) {
                    e = 10;
                  }
                  if (e < 1) {
                    e = 1;
                  }
                  this._seekSpeed = e;
                }
              }, {
                key: "explosionDelay",
                get: function () {
                  return this._explosionDelay;
                },
                set: function (e) {
                  if (e > 5) {
                    e = 5;
                  }
                  if (e < 0) {
                    e = 0;
                  }
                  this._explosionDelay = e;
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
                    Object.defineProperty(e, J(r.key), r);
                  }
                })(a.prototype, o);
              }
              Object.defineProperty(a, "prototype", {
                writable: false
              });
              return a;
            }(r._);
            var $ = n(23222);
            function Q(e) {
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
            function ee(e, t) {
              ee = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return ee(e, t);
            }
            var te = function (e) {
              function t() {
                var t;
                (t = e.call(this, {
                  _triggerable: true,
                  _triggers: [],
                  _triggerActions: new Map(),
                  _triggerActionList: ["fire harpoon", "deactivate", "activate"],
                  _triggerActionListProperties: [null, null, null],
                  _triggerString: "triggerActionsHarpoon"
                }) || this)._useAnchor = true;
                t._fixedAngleTurret = false;
                t._turretAngle = 0;
                t._triggerFiring = false;
                t._startDeactivated = false;
                t.name = "harpoon gun";
                t._type = "HarpoonGunRef";
                t.shapesUsed = 11;
                t.rotatable = true;
                t.scalable = false;
                t._joinable = false;
                t._groupable = false;
                t._keyedPropertyObject[t._triggerString] = t._triggerActions;
                var n = new i.j7((0, s.zI)("Game", "HarpoonGunRef"));
                n.convertChildren(n._pixiSprite);
                t.addChild(n);
                t.turret = n.turret;
                t.light = t.turret.light;
                t.anchorSprite = new i.kx();
                t.addChildAt(t.anchorSprite, n.getChildIndex(t.turret));
                t.drawAnchor();
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              ee(n, r);
              var a;
              var o;
              var h = t.prototype;
              h.setAttributes = function () {
                this._attributes = ["x", "y", "angle", "useAnchor", "fixedAngleTurret"];
                if (this._fixedAngleTurret) {
                  this._attributes.push("turretAngle");
                }
                this._attributes.push("triggerFiring", "startDeactivated");
                this.addTriggerProperties();
              };
              h.getFullProperties = function () {
                return ["x", "y", "angle", "useAnchor", "fixedAngleTurret", "turretAngle", "triggerFiring", "startDeactivated"];
              };
              h.clone = function () {
                var e = new t();
                e.x = this.x;
                e.y = this.y;
                e.angle = this.angle;
                e.useAnchor = this.useAnchor;
                e.fixedAngleTurret = this.fixedAngleTurret;
                e.turretAngle = this.turretAngle;
                e.triggerFiring = this.triggerFiring;
                e.startDeactivated = this.startDeactivated;
                this.transferKeyedProperties(e);
                return e;
              };
              h.setLight = function () {
                if (this._startDeactivated) {
                  this.light.gotoAndStop(4);
                } else if (this._triggerFiring) {
                  this.light.gotoAndStop(3);
                } else if (this._fixedAngleTurret) {
                  this.light.gotoAndStop(2);
                } else {
                  this.light.gotoAndStop(1);
                }
              };
              h.drawAnchor = function () {
                this.anchorSprite.graphics.clear();
                this.anchorSprite.graphics.lineStyle(1, 0, 1);
                this.anchorSprite.graphics.moveTo(-22, -17);
                var e = new $.RM(0, -45);
                var t = new $.LJ(-this.turret.rotation * Math.PI / 180);
                e.MulTM(t);
                e.y += -35;
                var n = new $.RM(e.x + 22, e.y + 17);
                var r = n.Length() * 0.25;
                n.Normalize();
                var i = new $.RM(-22, -17);
                i.x += r * 3 * n.x;
                i.y += r * 3 * n.y;
                i.x += r * n.y;
                i.y -= r * n.x;
                this.anchorSprite.graphics.curveTo(i.x, i.y, e.x, e.y);
              };
              a = t;
              if (o = [{
                key: "useAnchor",
                get: function () {
                  return this._useAnchor;
                },
                set: function (e) {
                  if (this._useAnchor != e) {
                    this._useAnchor = e;
                    this.anchorSprite.visible = this._useAnchor;
                    this.invalidateLocalBounds();
                    if (this._useAnchor) {
                      this.shapesUsed = 11;
                      this.dispatchEvent(new l.N3(l.N3.SHAPE, 7));
                    } else {
                      this.shapesUsed = 4;
                      this.dispatchEvent(new l.N3(l.N3.SHAPE, -7));
                    }
                  }
                }
              }, {
                key: "fixedAngleTurret",
                get: function () {
                  return this._fixedAngleTurret;
                },
                set: function (e) {
                  this._fixedAngleTurret = e;
                  this.turret.rotation = this._fixedAngleTurret ? this._turretAngle : 0;
                  this.setAttributes();
                  this.drawAnchor();
                  this.invalidateLocalBounds();
                  if (this._selected) {
                    this.drawBoundingBox();
                  }
                  this.x = this.x;
                  this.y = this.y;
                  this.setLight();
                }
              }, {
                key: "turretAngle",
                get: function () {
                  return this._turretAngle;
                },
                set: function (e) {
                  if (e < -110) {
                    e = -110;
                  }
                  if (e > 110) {
                    e = 110;
                  }
                  this._turretAngle = e;
                  this.turret.rotation = this._fixedAngleTurret ? this._turretAngle : 0;
                  this.drawAnchor();
                  this.invalidateLocalBounds();
                  if (this._selected) {
                    this.drawBoundingBox();
                  }
                  this.x = this.x;
                  this.y = this.y;
                }
              }, {
                key: "triggerFiring",
                get: function () {
                  return this._triggerFiring;
                },
                set: function (e) {
                  this._triggerFiring = e;
                  this.setLight();
                }
              }, {
                key: "startDeactivated",
                get: function () {
                  return this._startDeactivated;
                },
                set: function (e) {
                  this._startDeactivated = e;
                  this.setLight();
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
                    Object.defineProperty(e, Q(r.key), r);
                  }
                })(a.prototype, o);
              }
              Object.defineProperty(a, "prototype", {
                writable: false
              });
              return a;
            }(r._);
            function ne(e) {
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
            function re(e, t) {
              re = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return re(e, t);
            }
            var ie = function (e) {
              function t() {
                var t;
                (t = e.call(this, {
                  _triggerable: true,
                  _triggers: [],
                  _triggerActions: new Map(),
                  _triggerActionList: ["wake from sleep", "apply impulse"],
                  _triggerActionListProperties: [null, ["impulseX", "impulseY", "spin"]]
                }) || this).sleeping = false;
                t.minXDimension = 0.5;
                t.maxXDimension = 4;
                t.minYDimension = 1;
                t.maxYDimension = 2;
                t._immovable2 = false;
                t.name = "i-beam";
                t._type = "IBeamRef";
                t.shapesUsed = 1;
                t.rotatable = true;
                t.scalable = true;
                t._joinable = true;
                t._groupable = true;
                t._joints = [];
                t._keyedPropertyObject[t._triggerString] = t._triggerActions;
                var n = new i.j7((0, s.zI)("Game", "IBeamRef"));
                n.convertChildren(n._pixiSprite);
                t.addChild(n);
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              re(n, r);
              var a;
              var o;
              var h = t.prototype;
              h.setAttributes = function () {
                this._attributes = ["x", "y", "shapeWidth", "shapeHeight", "angle", "immovable2", "sleeping"];
                this.addTriggerProperties();
              };
              h.clone = function () {
                var e = new t();
                e.x = this.x;
                e.y = this.y;
                e.angle = this.angle;
                e.scaleX = this.scaleX;
                e.scaleY = this.scaleY;
                e._immovable2 = this.immovable2;
                e.sleeping = this.sleeping;
                this.transferKeyedProperties(e);
                return e;
              };
              a = t;
              if (o = [{
                key: "scaleX",
                get: function () {
                  return e.prototype._getScaleX.call(this);
                },
                set: function (t) {
                  if (t < this.minXDimension) {
                    t = this.minXDimension;
                  }
                  if (t > this.maxXDimension) {
                    t = this.maxXDimension;
                  }
                  e.prototype._setScaleX.call(this, t);
                }
              }, {
                key: "scaleY",
                get: function () {
                  return e.prototype._getScaleY.call(this);
                },
                set: function (t) {
                  if (t < this.minYDimension) {
                    t = this.minYDimension;
                  }
                  if (t > this.maxYDimension) {
                    t = this.maxYDimension;
                  }
                  e.prototype._setScaleY.call(this, t);
                }
              }, {
                key: "shapeWidth",
                get: function () {
                  return Math.round(this.scaleX * 400);
                },
                set: function (e) {
                  this.scaleX = e / 400;
                }
              }, {
                key: "shapeHeight",
                get: function () {
                  return Math.round(this.scaleY * 32);
                },
                set: function (e) {
                  this.scaleY = e / 32;
                }
              }, {
                key: "immovable2",
                get: function () {
                  return this._immovable2;
                },
                set: function (e) {
                  if (!e || !this.inGroup) {
                    this._immovable2 = e;
                  }
                }
              }, {
                key: "joinable",
                get: function () {
                  return !this._immovable2 && this._joinable;
                }
              }, {
                key: "groupable",
                get: function () {
                  return !this._immovable2 && !this.inGroup && this._groupable;
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
                    Object.defineProperty(e, ne(r.key), r);
                  }
                })(a.prototype, o);
              }
              Object.defineProperty(a, "prototype", {
                writable: false
              });
              return a;
            }(r._);
            var se = n(89055);
            function ae(e) {
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
            function oe(e, t) {
              oe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return oe(e, t);
            }
            var he = function (e) {
              function t() {
                var t;
                (t = e.call(this, {
                  _triggerable: true,
                  _triggers: [],
                  _triggerActions: new Map(),
                  _triggerActionList: ["wake from sleep", "apply impulse"],
                  _triggerActionListProperties: [null, ["impulseX", "impulseY", "spin"]]
                }) || this).sleeping = false;
                t.minXDimension = 1;
                t.maxXDimension = 1.5;
                t.minYDimension = 0.5;
                t.maxYDimension = 1.5;
                t._immovable2 = false;
                t.name = "log";
                t._type = "LogRef";
                t.shapesUsed = 2;
                t.rotatable = true;
                t.scalable = true;
                t._joinable = true;
                t._joints = [];
                t._keyedPropertyObject[t._triggerString] = t._triggerActions;
                var n = new i.j7((0, s.zI)("Game", "LogRef"));
                n.convertChildren(n._pixiSprite);
                t.addChild(n);
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              oe(n, r);
              var a;
              var o;
              var h = t.prototype;
              h.setAttributes = function () {
                this._attributes = ["x", "y", "shapeWidth", "shapeHeight", "angle", "immovable2", "sleeping"];
                this.addTriggerProperties();
              };
              h.clone = function () {
                var e = new t();
                e.x = this.x;
                e.y = this.y;
                e.angle = this.angle;
                e.scaleX = this.scaleX;
                e.scaleY = this.scaleY;
                e._immovable2 = this.immovable2;
                e.sleeping = this.sleeping;
                this.transferKeyedProperties(e);
                return e;
              };
              a = t;
              if (o = [{
                key: "scaleX",
                get: function () {
                  return e.prototype._getScaleX.call(this);
                },
                set: function (t) {
                  if (t < this.minXDimension) {
                    t = this.minXDimension;
                  }
                  if (t > this.maxXDimension) {
                    t = this.maxXDimension;
                  }
                  e.prototype._setScaleX.call(this, t);
                }
              }, {
                key: "scaleY",
                get: function () {
                  return e.prototype._getScaleY.call(this);
                },
                set: function (t) {
                  if (t < this.minYDimension) {
                    t = this.minYDimension;
                  }
                  if (t > this.maxYDimension) {
                    t = this.maxYDimension;
                  }
                  e.prototype._setScaleY.call(this, t);
                }
              }, {
                key: "shapeWidth",
                get: function () {
                  return Math.round(this.scaleX * 36);
                },
                set: function (e) {
                  this.scaleX = e / 36;
                }
              }, {
                key: "shapeHeight",
                get: function () {
                  return Math.round(this.scaleY * 400);
                },
                set: function (e) {
                  this.scaleY = e / 400;
                }
              }, {
                key: "immovable2",
                get: function () {
                  return this._immovable2;
                },
                set: function (e) {
                  this._immovable2 = e;
                }
              }, {
                key: "joinable",
                get: function () {
                  return !this._immovable2 && this._joinable;
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
                    Object.defineProperty(e, ae(r.key), r);
                  }
                })(a.prototype, o);
              }
              Object.defineProperty(a, "prototype", {
                writable: false
              });
              return a;
            }(r._);
            function le(e) {
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
            function de(e, t) {
              de = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return de(e, t);
            }
            var ce = function (e) {
              function t() {
                var t;
                (t = e.call(this, {
                  _triggerable: true,
                  _triggers: [],
                  _triggerActions: new Map(),
                  _triggerActionList: ["wake from sleep", "apply impulse"],
                  _triggerActionListProperties: [null, ["impulseX", "impulseY", "spin"]]
                }) || this).sleeping = false;
                t.minDimension = 0.5;
                t.maxDimension = 1.5;
                t.defWidth = 400;
                t.defHeight = 400;
                t._immovable2 = false;
                t.shapesUsed = 1;
                t.name = "meteor";
                t._type = "MeteorRef";
                t.rotatable = false;
                t.scalable = true;
                t._keyedPropertyObject[t._triggerString] = t._triggerActions;
                var n = new i.j7((0, s.zI)("Game", "MeteorRef"));
                n.convertChildren(n._pixiSprite);
                t.addChild(n);
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              de(n, r);
              var a;
              var o;
              var h = t.prototype;
              h.setAttributes = function () {
                this._attributes = ["x", "y", "shapeWidth", "shapeHeight", "immovable2", "sleeping"];
                this.addTriggerProperties();
              };
              h.clone = function () {
                var e = new t();
                e.x = this.x;
                e.y = this.y;
                e.scaleX = this.scaleX;
                e.scaleY = this.scaleY;
                e._immovable2 = this.immovable2;
                e.sleeping = this.sleeping;
                this.transferKeyedProperties(e);
                return e;
              };
              a = t;
              if (o = [{
                key: "scaleX",
                get: function () {
                  return e.prototype._getScaleX.call(this);
                },
                set: function (t) {
                  if (t < this.minDimension) {
                    t = this.minDimension;
                  }
                  if (t > this.maxDimension) {
                    t = this.maxDimension;
                  }
                  e.prototype._setScaleX.call(this, t);
                }
              }, {
                key: "scaleY",
                get: function () {
                  return e.prototype._getScaleY.call(this);
                },
                set: function (t) {
                  if (t < this.minDimension) {
                    t = this.minDimension;
                  }
                  if (t > this.maxDimension) {
                    t = this.maxDimension;
                  }
                  e.prototype._setScaleY.call(this, t);
                }
              }, {
                key: "shapeWidth",
                get: function () {
                  return Math.round(this.scaleX * this.defWidth);
                },
                set: function (e) {
                  this.scaleX = this.scaleY = e / this.defWidth;
                }
              }, {
                key: "shapeHeight",
                get: function () {
                  return Math.round(this.scaleY * this.defHeight);
                },
                set: function (e) {
                  this.scaleY = this.scaleX = e / this.defHeight;
                }
              }, {
                key: "immovable2",
                get: function () {
                  return this._immovable2;
                },
                set: function (e) {
                  this._immovable2 = e;
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
                    Object.defineProperty(e, le(r.key), r);
                  }
                })(a.prototype, o);
              }
              Object.defineProperty(a, "prototype", {
                writable: false
              });
              return a;
            }(r._);
            function ue(e, t) {
              ue = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return ue(e, t);
            }
            var pe = function (e) {
              function t() {
                var t;
                (t = e.call(this) || this).name = "landmine";
                t._type = "MineRef";
                t.rotatable = true;
                t.scalable = false;
                t._triggerable = true;
                t._triggers = [];
                var n = new i.j7((0, s.zI)("Game", "MineRef"));
                n.convertChildren(n._pixiSprite);
                t.addChild(n);
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              ue(n, r);
              var a = t.prototype;
              a.setAttributes = function () {
                this.shapesUsed = 2;
                this._attributes = ["x", "y", "angle"];
              };
              a.clone = function () {
                var e = new t();
                e.x = this.x;
                e.y = this.y;
                e.angle = this.angle;
                return e;
              };
              return t;
            }(r._);
            var me = n(54683);
            var fe = n(89005);
            function _e(e) {
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
            function ve(e, t) {
              ve = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return ve(e, t);
            }
            var ye = function (e) {
              function t(t) {
                var n;
                (n = e.call(this, {
                  _triggerable: true,
                  _triggers: [],
                  _triggerActions: new Map(),
                  _triggerActionList: ["wake from sleep", "apply impulse", "hold pose", "release pose"],
                  _triggerActionListProperties: [null, ["impulseX", "impulseY", "spin"], null, null],
                  _triggerString: "triggerActionsNPC"
                }) || this).sleeping = false;
                n._neckAngle = 0;
                n._shoulder1Angle = 0;
                n._shoulder2Angle = 0;
                n._elbow1Angle = 0;
                n._elbow2Angle = 0;
                n._hip1Angle = 0;
                n._hip2Angle = 0;
                n._knee1Angle = 0;
                n._knee2Angle = 0;
                n._reverse = false;
                n._holdPose = false;
                n._interactive = false;
                n._destroyJointsUponDeath = false;
                n._charIndex = 1;
                n.name = "non-player character";
                n._type = "NPCharacterRef";
                n.shapesUsed = 24;
                n._artUsed = 0;
                n.rotatable = true;
                n.scalable = false;
                n._groupable = false;
                n._joinable = true;
                n._interactive = true;
                n._destroyJointsUponDeath = false;
                n._joints = [];
                n._keyedPropertyObject[n._triggerString] = n._triggerActions;
                n.doubleClickEnabled = true;
                if (t !== undefined) {
                  n._charIndex = t;
                }
                n._npcSprite = fe.H.createNPC(n._charIndex);
                fe.H.hideShapes(n._npcSprite);
                n.addChild(n._npcSprite);
                n._npcSprite.scaleX = n._npcSprite.scaleY = 0.5;
                (0, l.FK)(n._npcSprite.pixiSprite);
                return n;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              ve(n, r);
              var s;
              var a;
              var o = t.prototype;
              o.setAttributes = function () {
                this._attributes = ["x", "y", "angle", "charIndex", "sleeping", "reverse", "holdPose", "interactive", "neckAngle", "shoulder1Angle", "shoulder2Angle", "elbow1Angle", "elbow2Angle", "hip1Angle", "hip2Angle", "knee1Angle", "knee2Angle", "destroyJointsUponDeath"];
                this.addTriggerProperties();
              };
              o.clone = function () {
                var e = new t();
                e.angle = this.angle;
                e.sleeping = this.sleeping;
                e.reverse = this.reverse;
                e.holdPose = this.holdPose;
                e.interactive = this.interactive;
                e.neckAngle = this.neckAngle;
                e.shoulder1Angle = this.shoulder1Angle;
                e.shoulder2Angle = this.shoulder2Angle;
                e.elbow1Angle = this.elbow1Angle;
                e.elbow2Angle = this.elbow2Angle;
                e.hip1Angle = this.hip1Angle;
                e.hip2Angle = this.hip2Angle;
                e.knee1Angle = this.knee1Angle;
                e.knee2Angle = this.knee2Angle;
                e.charIndex = this.charIndex;
                e.destroyJointsUponDeath = this.destroyJointsUponDeath;
                e.x = this.x;
                e.y = this.y;
                this.transferKeyedProperties(e);
                return e;
              };
              o.setProperty = function (e, t) {
                var n;
                var r;
                if (e == "interactive" && t == 0 && this._joints) {
                  for (var s = 0; s < this._joints.length; s++) {
                    var a = this._joints[s];
                    n = a.removeBody(this);
                    if (r) {
                      r.nextAction = n.firstAction;
                    }
                    r = n;
                    this.removeJoint(a);
                    s -= 1;
                  }
                }
                var o = this[e];
                var h = new i.bR(this.x, this.y);
                this[e] = t;
                var l = this[e];
                var d = new i.bR(this.x, this.y);
                if (l != o) {
                  n = new me.c(this, e, o, l, h, d);
                  if (r) {
                    r.nextAction = n;
                  }
                }
                return n;
              };
              s = t;
              if (a = [{
                key: "npcSprite",
                get: function () {
                  return this._npcSprite;
                }
              }, {
                key: "charIndex",
                get: function () {
                  return this._charIndex;
                },
                set: function (e) {
                  if (this._charIndex != e) {
                    if (e < 1) {
                      e = 1;
                    }
                    if (e > t.NUM_CHARACTERS) {
                      e = t.NUM_CHARACTERS;
                    }
                    this._charIndex = e;
                    this.removeChild(this._npcSprite);
                    this._npcSprite = fe.H.createNPC(this._charIndex);
                    fe.H.hideShapes(this._npcSprite);
                    this.addChild(this._npcSprite);
                    this._npcSprite.scaleX = this._reverse ? -0.5 : 0.5;
                    this._npcSprite.scaleY = 0.5;
                    this._npcSprite.headOuter.rotation = this._neckAngle;
                    this._npcSprite.arm1.rotation = this._shoulder1Angle;
                    this._npcSprite.arm2.rotation = this._shoulder2Angle;
                    this._npcSprite.lowerArmOuter1.rotation = this._elbow1Angle;
                    this._npcSprite.lowerArmOuter2.rotation = this._elbow2Angle;
                    this._npcSprite.leg1.rotation = this._hip1Angle;
                    this._npcSprite.leg2.rotation = this._hip2Angle;
                    this._npcSprite.lowerLegOuter1.rotation = this._knee1Angle;
                    this._npcSprite.lowerLegOuter2.rotation = this._knee2Angle;
                    this.invalidateLocalBounds();
                    if (this._selected) {
                      this.drawBoundingBox();
                    }
                    this.x = this.x;
                    this.y = this.y;
                    (0, l.FK)(this._npcSprite.pixiSprite);
                  }
                }
              }, {
                key: "reverse",
                get: function () {
                  return this._reverse;
                },
                set: function (e) {
                  if (e != this._reverse) {
                    this._reverse = e;
                    if (this._reverse) {
                      this._npcSprite.scaleX = -0.5;
                    } else {
                      this._npcSprite.scaleX = 0.5;
                    }
                    this.invalidateLocalBounds();
                    if (this._selected) {
                      this.drawBoundingBox();
                    }
                    this.x = this.x;
                    this.y = this.y;
                  }
                }
              }, {
                key: "destroyJointsUponDeath",
                get: function () {
                  return this._destroyJointsUponDeath;
                },
                set: function (e) {
                  this._destroyJointsUponDeath = e;
                }
              }, {
                key: "holdPose",
                get: function () {
                  return this._holdPose;
                },
                set: function (e) {
                  this._holdPose = e;
                }
              }, {
                key: "interactive",
                get: function () {
                  return this._interactive;
                },
                set: function (e) {
                  if (this._interactive != e) {
                    if (!e || !this.inGroup) {
                      this._interactive = e;
                      if (this._interactive) {
                        this._groupable = false;
                        this._joinable = true;
                        this.shapesUsed = 24;
                        this._artUsed = 0;
                        this.dispatchEvent(new l.N3(l.N3.ART, -10));
                        this.dispatchEvent(new l.N3(l.N3.SHAPE, 24));
                      } else {
                        this._groupable = true;
                        this._joinable = false;
                        this.shapesUsed = 0;
                        this._artUsed = 10;
                        this.dispatchEvent(new l.N3(l.N3.SHAPE, -24));
                        this.dispatchEvent(new l.N3(l.N3.ART, 10));
                      }
                    }
                  }
                }
              }, {
                key: "neckAngle",
                get: function () {
                  return this._neckAngle;
                },
                set: function (e) {
                  if (e > 20) {
                    e = 20;
                  }
                  if (e < -20) {
                    e = -20;
                  }
                  this._npcSprite.headOuter.rotation = e;
                  this._neckAngle = e;
                  this.invalidateLocalBounds();
                  if (this._selected) {
                    this.drawBoundingBox();
                  }
                  this.x = this.x;
                  this.y = this.y;
                }
              }, {
                key: "shoulder1Angle",
                get: function () {
                  return this._shoulder1Angle;
                },
                set: function (e) {
                  if (e > 60) {
                    e = 60;
                  }
                  if (e < -180) {
                    e = -180;
                  }
                  this._npcSprite.arm1.rotation = e;
                  this._shoulder1Angle = e;
                  this.invalidateLocalBounds();
                  if (this._selected) {
                    this.drawBoundingBox();
                  }
                  this.x = this.x;
                  this.y = this.y;
                }
              }, {
                key: "shoulder2Angle",
                get: function () {
                  return this._shoulder2Angle;
                },
                set: function (e) {
                  if (e > 60) {
                    e = 60;
                  }
                  if (e < -180) {
                    e = -180;
                  }
                  this._npcSprite.arm2.rotation = e;
                  this._shoulder2Angle = e;
                  this.invalidateLocalBounds();
                  if (this._selected) {
                    this.drawBoundingBox();
                  }
                  this.x = this.x;
                  this.y = this.y;
                }
              }, {
                key: "elbow1Angle",
                get: function () {
                  return this._elbow1Angle;
                },
                set: function (e) {
                  if (e > 0) {
                    e = 0;
                  }
                  if (e < -160) {
                    e = -160;
                  }
                  this._npcSprite.lowerArmOuter1.rotation = e;
                  this._elbow1Angle = e;
                  this.invalidateLocalBounds();
                  if (this._selected) {
                    this.drawBoundingBox();
                  }
                  this.x = this.x;
                  this.y = this.y;
                }
              }, {
                key: "elbow2Angle",
                get: function () {
                  return this._elbow2Angle;
                },
                set: function (e) {
                  if (e > 0) {
                    e = 0;
                  }
                  if (e < -160) {
                    e = -160;
                  }
                  this._npcSprite.lowerArmOuter2.rotation = e;
                  this._elbow2Angle = e;
                  this.invalidateLocalBounds();
                  if (this._selected) {
                    this.drawBoundingBox();
                  }
                  this.x = this.x;
                  this.y = this.y;
                }
              }, {
                key: "hip1Angle",
                get: function () {
                  return this._hip1Angle;
                },
                set: function (e) {
                  if (e > 10) {
                    e = 10;
                  }
                  if (e < -150) {
                    e = -150;
                  }
                  this._npcSprite.leg1.rotation = e;
                  this._hip1Angle = e;
                  this.invalidateLocalBounds();
                  if (this._selected) {
                    this.drawBoundingBox();
                  }
                  this.x = this.x;
                  this.y = this.y;
                }
              }, {
                key: "hip2Angle",
                get: function () {
                  return this._hip2Angle;
                },
                set: function (e) {
                  if (e > 10) {
                    e = 10;
                  }
                  if (e < -150) {
                    e = -150;
                  }
                  this._npcSprite.leg2.rotation = e;
                  this._hip2Angle = e;
                  this.invalidateLocalBounds();
                  if (this._selected) {
                    this.drawBoundingBox();
                  }
                  this.x = this.x;
                  this.y = this.y;
                }
              }, {
                key: "knee1Angle",
                get: function () {
                  return this._knee1Angle;
                },
                set: function (e) {
                  if (e > 150) {
                    e = 150;
                  }
                  if (e < 0) {
                    e = 0;
                  }
                  this._npcSprite.lowerLegOuter1.rotation = e;
                  this._knee1Angle = e;
                  this.invalidateLocalBounds();
                  if (this._selected) {
                    this.drawBoundingBox();
                  }
                  this.x = this.x;
                  this.y = this.y;
                }
              }, {
                key: "knee2Angle",
                get: function () {
                  return this._knee2Angle;
                },
                set: function (e) {
                  if (e > 150) {
                    e = 150;
                  }
                  if (e < 0) {
                    e = 0;
                  }
                  this._npcSprite.lowerLegOuter2.rotation = e;
                  this._knee2Angle = e;
                  this.invalidateLocalBounds();
                  if (this._selected) {
                    this.drawBoundingBox();
                  }
                  this.x = this.x;
                  this.y = this.y;
                }
              }, {
                key: "tag",
                get: function () {
                  var e;
                  switch (this._charIndex) {
                    case 1:
                      e = "Char1";
                      break;
                    case 2:
                    case 9:
                      e = "Char2";
                      break;
                    case 3:
                      e = "Char3";
                      break;
                    case 4:
                    case 15:
                      e = "Kid1";
                      break;
                    case 5:
                    case 13:
                      e = "Char4";
                      break;
                    case 6:
                      e = "Char8";
                      break;
                    case 7:
                      e = "Char9";
                      break;
                    case 8:
                      e = "Char11";
                      break;
                    case 10:
                      e = "Santa";
                      break;
                    case 11:
                      e = "Elf1";
                      break;
                    case 12:
                      e = "Char12";
                      break;
                    case 14:
                      e = "Kid2";
                      break;
                    case 16:
                      e = "Heli";
                  }
                  return e;
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
                    Object.defineProperty(e, _e(r.key), r);
                  }
                })(s.prototype, a);
              }
              Object.defineProperty(s, "prototype", {
                writable: false
              });
              return s;
            }(r._);
            function ge(e) {
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
            function we(e, t) {
              we = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return we(e, t);
            }
            ye.NUM_CHARACTERS = 16;
            var xe = function (e) {
              function t() {
                var t;
                (t = e.call(this) || this).minDelay = 0;
                t.maxDelay = 2;
                t._springDelay = 0;
                t._reverse = false;
                t._paddleAngle = 90;
                t._paddleSpeed = 10;
                t.name = "paddle platform";
                t._type = "PaddleRef";
                t.shapesUsed = 3;
                t.rotatable = true;
                t.scalable = false;
                var n = new i.j7((0, s.zI)("Game", "PaddleBaseMC"));
                n.convertChildren(n._pixiSprite);
                t.paddle = new i.j7((0, s.zI)("Game", "PaddleRef").paddle);
                t.paddle.convertChildren(t.paddle._pixiSprite);
                t.addChild(n);
                t.addChild(t.paddle);
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              we(n, r);
              var a;
              var o;
              var h = t.prototype;
              h.setAttributes = function () {
                this._attributes = ["x", "y", "angle", "springDelay", "reverse", "paddleAngle", "paddleSpeed"];
              };
              h.clone = function () {
                var e = new t();
                e.x = this.x;
                e.y = this.y;
                e.angle = this.angle;
                e.springDelay = this.springDelay;
                e.reverse = this.reverse;
                e.paddleAngle = this.paddleAngle;
                e.paddleSpeed = this.paddleSpeed;
                return e;
              };
              h.destroy = function () {
                this.paddle.timer.timerText._pixiSprite.destroy();
                e.prototype.destroy.call(this);
              };
              a = t;
              if (o = [{
                key: "reverse",
                get: function () {
                  return this._reverse;
                },
                set: function (e) {
                  if (this._reverse != e) {
                    this.paddle.timer.x *= -1;
                    this.paddle.nub.x *= -1;
                    this.paddle.arrow.x *= -1;
                  }
                  this._reverse = e;
                }
              }, {
                key: "paddleAngle",
                get: function () {
                  return this._paddleAngle;
                },
                set: function (e) {
                  if (e > 90) {
                    e = 90;
                  }
                  if (e < 15) {
                    e = 15;
                  }
                  this._paddleAngle = e;
                }
              }, {
                key: "paddleSpeed",
                get: function () {
                  return this._paddleSpeed;
                },
                set: function (e) {
                  if (e > 10) {
                    e = 10;
                  }
                  if (e < 1) {
                    e = 1;
                  }
                  this._paddleSpeed = e;
                }
              }, {
                key: "springDelay",
                get: function () {
                  return this._springDelay;
                },
                set: function (e) {
                  if (e < this.minDelay) {
                    e = this.minDelay;
                  }
                  if (e > this.maxDelay) {
                    e = this.maxDelay;
                  }
                  this._springDelay = e;
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
                    Object.defineProperty(e, ge(r.key), r);
                  }
                })(a.prototype, o);
              }
              Object.defineProperty(a, "prototype", {
                writable: false
              });
              return a;
            }(r._);
            function be(e) {
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
            function Te(e, t) {
              Te = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return Te(e, t);
            }
            var Ae = function (e) {
              function t() {
                var t;
                (t = e.call(this) || this).minXDimension = 1;
                t.maxXDimension = 20;
                t.minYDimension = 1;
                t.maxYDimension = 1;
                t.name = "rail";
                t._type = "RailRef";
                t.shapesUsed = 2;
                t.rotatable = true;
                t.scalable = true;
                t._joinable = false;
                t._groupable = false;
                t.shapeWidth = 250;
                var n = new i.j7((0, s.zI)("Game", "RailRef"));
                n.convertChildren(n._pixiSprite);
                t.addChild(n);
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              Te(n, r);
              var a;
              var o;
              var h = t.prototype;
              h.setAttributes = function () {
                this._attributes = ["x", "y", "shapeWidth", "shapeHeight", "angle"];
              };
              h.clone = function () {
                var e = new t();
                e.x = this.x;
                e.y = this.y;
                e.angle = this.angle;
                e.scaleX = this.scaleX;
                e.scaleY = this.scaleY;
                return e;
              };
              a = t;
              if (o = [{
                key: "scaleX",
                get: function () {
                  return e.prototype._getScaleX.call(this);
                },
                set: function (t) {
                  if (t < this.minXDimension) {
                    t = this.minXDimension;
                  }
                  if (t > this.maxXDimension) {
                    t = this.maxXDimension;
                  }
                  e.prototype._setScaleX.call(this, t);
                }
              }, {
                key: "scaleY",
                get: function () {
                  return e.prototype._getScaleY.call(this);
                },
                set: function (t) {
                  if (t < this.minYDimension) {
                    t = this.minYDimension;
                  }
                  if (t > this.maxYDimension) {
                    t = this.maxYDimension;
                  }
                  e.prototype._setScaleY.call(this, t);
                }
              }, {
                key: "shapeWidth",
                get: function () {
                  return Math.round(this.scaleX * 100);
                },
                set: function (e) {
                  this.scaleX = e / 100;
                }
              }, {
                key: "shapeHeight",
                get: function () {
                  return 18;
                },
                set: function (e) {
                  this.scaleY = 1;
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
                    Object.defineProperty(e, be(r.key), r);
                  }
                })(a.prototype, o);
              }
              Object.defineProperty(a, "prototype", {
                writable: false
              });
              return a;
            }(r._);
            function Ce(e) {
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
            function Se(e, t) {
              Se = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return Se(e, t);
            }
            var Ee = function (e) {
              function t() {
                var t;
                (t = e.call(this) || this)._signPostType = 1;
                t._hasPost = false;
                t.name = "sign";
                t._type = "SignPostRef";
                t.shapesUsed = 0;
                t._artUsed = 1;
                t.rotatable = true;
                t.scalable = false;
                t._joinable = false;
                t._groupable = true;
                t.container = new i.j7();
                t.signPost = true;
                t.view = new i.j7();
                t.view.setPixiMovieClip((0, s.zI)("Game", "SignMC"));
                t.view.gotoAndStop(t._signPostType);
                t.container.addChild(t.view);
                t.addChild(t.container);
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              Se(n, r);
              var a;
              var o;
              var h = t.prototype;
              h.setAttributes = function () {
                this._attributes = ["x", "y", "angle", "signPostType", "signPost"];
              };
              h.clone = function () {
                var e = new t();
                e.x = this.x;
                e.y = this.y;
                e.angle = this.angle;
                e.groupable = this._groupable;
                e.signPostType = this._signPostType;
                e.signPost = this._hasPost;
                return e;
              };
              a = t;
              if (o = [{
                key: "signPost",
                get: function () {
                  return this._hasPost;
                },
                set: function (e) {
                  if (this._hasPost !== e) {
                    if (e) {
                      this._postMC = new i.j7((0, s.zI)("Game", "PostMC"));
                      this.container.addChildAt(this._postMC, 0);
                    } else {
                      this._postMC.parent.removeChild(this._postMC);
                    }
                    this.invalidateLocalBounds();
                    if (this._selected) {
                      this.drawBoundingBox();
                    }
                    this._hasPost = e;
                  }
                }
              }, {
                key: "signPostType",
                get: function () {
                  return this._signPostType;
                },
                set: function (e) {
                  if (e < 1) {
                    e = 1;
                  }
                  if (e > t.TOTAL_SIGN_TYPES) {
                    e = t.TOTAL_SIGN_TYPES;
                  }
                  this.view.gotoAndStop(e);
                  this.invalidateLocalBounds();
                  if (this._selected) {
                    this.drawBoundingBox();
                  }
                  this._signPostType = e;
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
                    Object.defineProperty(e, Ce(r.key), r);
                  }
                })(a.prototype, o);
              }
              Object.defineProperty(a, "prototype", {
                writable: false
              });
              return a;
            }(r._);
            function Oe(e, t) {
              Oe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return Oe(e, t);
            }
            Ee.TOTAL_SIGN_TYPES = 13;
            var ke = function (e) {
              function t() {
                var t;
                (t = e.call(this) || this).name = "soccer ball";
                t._type = "SoccerBallRef";
                t.shapesUsed = 1;
                t.rotatable = false;
                t.scalable = false;
                var n = new i.j7((0, s.zI)("Game", "SoccerBallRef"));
                n.convertChildren(n._pixiSprite);
                t.addChild(n);
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              Oe(n, r);
              var a = t.prototype;
              a.setAttributes = function () {
                this._attributes = ["x", "y"];
              };
              a.clone = function () {
                var e = new t();
                e.x = this.x;
                e.y = this.y;
                return e;
              };
              return t;
            }(r._);
            function Pe(e) {
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
            function Me(e, t) {
              Me = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return Me(e, t);
            }
            var Re = function (e) {
              function t() {
                var t;
                (t = e.call(this, {
                  _triggerable: true,
                  _triggers: [],
                  _triggerActions: new Map(),
                  _triggerActionList: ["wake from sleep", "apply impulse"],
                  _triggerActionListProperties: [null, ["impulseX", "impulseY", "spin"]]
                }) || this).sleeping = false;
                t.minSpikes = 20;
                t.maxSpikes = 150;
                t._immovable2 = true;
                t._numSpikes = 20;
                t.name = "spike set";
                t._type = "SpikesRef";
                t.shapesUsed = 2;
                t.rotatable = true;
                t.scalable = false;
                t._joinable = true;
                t._groupable = true;
                t._joints = [];
                t._keyedPropertyObject[t._triggerString] = t._triggerActions;
                t.spikes = new i.j7((0, s.zI)("Game", "spikes"));
                t.base = new i.j7((0, s.zI)("Game", "spikes_bottom"));
                t.addChild(t.spikes);
                t.spikes._pixiSprite.x = t.base.width / -2;
                t.spikes._pixiSprite.y -= t.spikes.height / 2;
                t.base._pixiSprite.y = t.base.y + t.spikes.height / 2 + t.base.height / 2;
                t.addChild(t.base);
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              Me(n, r);
              var a;
              var o;
              var h = t.prototype;
              h.setAttributes = function () {
                this._attributes = ["x", "y", "angle", "immovable2", "numSpikes", "sleeping"];
                this.addTriggerProperties();
              };
              h.clone = function () {
                var e = new t();
                e.x = this.x;
                e.y = this.y;
                e.angle = this.angle;
                e.numSpikes = this.numSpikes;
                e.immovable2 = this.immovable2;
                e.sleeping = this.sleeping;
                this.transferKeyedProperties(e);
                return e;
              };
              a = t;
              if (o = [{
                key: "numSpikes",
                get: function () {
                  return this._numSpikes;
                },
                set: function (e) {
                  if (e < this.minSpikes) {
                    e = this.minSpikes;
                  }
                  if (e > this.maxSpikes) {
                    e = this.maxSpikes;
                  }
                  var t = e - this._numSpikes;
                  if (t > 0) {
                    for (var n = this._numSpikes; n < e; n++) {
                      var r = new i.j7((0, s.zI)("Game", "spike"));
                      this.spikes.addChild(r);
                      r.x = n * 15;
                    }
                  } else if (t < 0) {
                    for (var a = t; a < 0; a++) {
                      var o = this.spikes.getChildAt(this.spikes.numChildren - 1);
                      this.spikes.removeChild(o);
                    }
                  }
                  this.base._pixiSprite.width = e * 15;
                  this.spikes._pixiSprite.x = this.base._pixiSprite.width / -2;
                  this.invalidateLocalBounds();
                  if (this._selected) {
                    this.drawBoundingBox();
                  }
                  this.x = this.x;
                  this.y = this.y;
                  this._numSpikes = e;
                }
              }, {
                key: "immovable2",
                get: function () {
                  return this._immovable2;
                },
                set: function (e) {
                  if (!e || !this.inGroup) {
                    this._immovable2 = e;
                  }
                }
              }, {
                key: "joinable",
                get: function () {
                  return !this._immovable2 && this._joinable;
                }
              }, {
                key: "groupable",
                get: function () {
                  return !this._immovable2 && !this.inGroup && this._groupable;
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
                    Object.defineProperty(e, Pe(r.key), r);
                  }
                })(a.prototype, o);
              }
              Object.defineProperty(a, "prototype", {
                writable: false
              });
              return a;
            }(r._);
            function Ie(e) {
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
            function Le(e, t) {
              Le = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return Le(e, t);
            }
            var je = function (e) {
              function t() {
                var t;
                (t = e.call(this) || this).minDelay = 0;
                t.maxDelay = 2;
                t._springDelay = 0;
                t.name = "spring platform";
                t._type = "SpringBoxRef";
                t.shapesUsed = 4;
                t.rotatable = true;
                t.scalable = false;
                var n = new i.j7((0, s.zI)("Game", "SpringBoxRef"));
                n.convertChildren(n._pixiSprite);
                t.addChild(n);
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              Le(n, r);
              var a;
              var o;
              var h = t.prototype;
              h.setAttributes = function () {
                this._attributes = ["x", "y", "angle", "springDelay"];
              };
              h.clone = function () {
                var e = new t();
                e.x = this.x;
                e.y = this.y;
                e.angle = this.angle;
                e.springDelay = this.springDelay;
                return e;
              };
              a = t;
              if (o = [{
                key: "springDelay",
                get: function () {
                  return this._springDelay;
                },
                set: function (e) {
                  if (e < this.minDelay) {
                    e = this.minDelay;
                  }
                  if (e > this.maxDelay) {
                    e = this.maxDelay;
                  }
                  this._springDelay = e;
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
                    Object.defineProperty(e, Ie(r.key), r);
                  }
                })(a.prototype, o);
              }
              Object.defineProperty(a, "prototype", {
                writable: false
              });
              return a;
            }(r._);
            var Be = n(10238);
            function De(e) {
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
            function Fe(e, t) {
              Fe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return Fe(e, t);
            }
            var Ne = function (e) {
              function t() {
                var t;
                (t = e.call(this, {
                  _triggerable: true,
                  _triggers: [],
                  _triggerActions: new Map(),
                  _triggerActionList: ["wake from sleep", "apply impulse"],
                  _triggerActionListProperties: [null, ["impulseX", "impulseY", "spin"]]
                }) || this).sleeping = false;
                t._interactive = true;
                t.name = "dinner table";
                t._type = "TableRef";
                t.shapesUsed = 4;
                t.rotatable = true;
                t.scalable = false;
                t._joinable = true;
                t._joints = [];
                t._keyedPropertyObject[t._triggerString] = t._triggerActions;
                var n = new i.j7((0, s.zI)("Game", "TableRef"));
                n.convertChildren(n._pixiSprite);
                t.addChild(n);
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              Fe(n, r);
              var a;
              var o;
              var h = t.prototype;
              h.setAttributes = function () {
                this._attributes = ["x", "y", "angle", "sleeping", "interactive"];
                this.addTriggerProperties();
              };
              h.clone = function () {
                var e = new t();
                e.x = this.x;
                e.y = this.y;
                e.angle = this.angle;
                e.sleeping = this.sleeping;
                e.interactive = this.interactive;
                this.transferKeyedProperties(e);
                return e;
              };
              a = t;
              if (o = [{
                key: "interactive",
                get: function () {
                  return this._interactive;
                },
                set: function (e) {
                  if (this._interactive != e) {
                    if (!e || !this.inGroup) {
                      this._interactive = e;
                      if (this._interactive) {
                        this._groupable = false;
                        this._joinable = true;
                        this.shapesUsed = 1;
                        this._artUsed = 0;
                        this.dispatchEvent(new l.N3(l.N3.ART, -1));
                        this.dispatchEvent(new l.N3(l.N3.SHAPE, this.shapesUsed));
                      } else {
                        this._groupable = true;
                        this._joinable = false;
                        this.shapesUsed = 0;
                        this._artUsed = 1;
                        this.dispatchEvent(new l.N3(l.N3.SHAPE, -this.shapesUsed));
                        this.dispatchEvent(new l.N3(l.N3.ART, 1));
                      }
                    }
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
                    Object.defineProperty(e, De(r.key), r);
                  }
                })(a.prototype, o);
              }
              Object.defineProperty(a, "prototype", {
                writable: false
              });
              return a;
            }(r._);
            n(5745);
            var Ge = n(46682);
            function Ue(e) {
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
            function Ve(e, t) {
              Ve = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return Ve(e, t);
            }
            var He = function (e) {
              function t(t) {
                var n;
                if (t === undefined) {
                  t = 16613761;
                }
                (n = e.call(this, {
                  _triggerable: true,
                  _triggers: [],
                  _triggerActions: new Map(),
                  _triggerActionList: ["change opacity", "slide"],
                  _triggerActionListProperties: [["newOpacities", "opacityTimes"], ["slideTimes", "newX", "newY"]],
                  _triggerString: "triggerActionsText"
                }) || this).MIN_SIZE = 10;
                n.MAX_SIZE = 100;
                n._caption = "HERE'S SOME TEXT";
                n._fontSize = 15;
                n._align = 1;
                n._font = 2;
                n._color = 0;
                n._opacity = 1;
                n._editing = false;
                n.fakeInputChange = function () {
                  n.textField.text = n.textEdit.input.text;
                  n.adjustBg();
                };
                n.fakeInputClose = function () {
                  if (n.textEdit) {
                    n.textEdit.die();
                    n.textEdit.removeEventListener(i.Jh.CHANGE, n.fakeInputChange);
                    n.textEdit.removeEventListener(i.Jh.CLOSE, n.fakeInputClose);
                    n.textEdit = null;
                    n.textField.onBlur();
                  }
                };
                n.adjustBg = function (e = null) {
                  if (g.w.currentlyInEditor) {
                    n.invalidateLocalBounds();
                    if (n._selected) {
                      n.drawBoundingBox();
                    } else {
                      n._redrawBg();
                    }
                  }
                };
                n.name = "text field";
                n._type = "TextBoxRef";
                n.shapesUsed = 0;
                n.rotatable = true;
                n.scalable = false;
                n._joinable = false;
                n._groupable = true;
                n._keyedPropertyObject[n._triggerString] = n._triggerActions;
                n._outlineColor = t;
                n.doubleClickEnabled = true;
                n.createTextField();
                return n;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              Ve(n, r);
              var s;
              var a;
              var o = t.prototype;
              o.setAttributes = function () {
                this._attributes = ["x", "y", "angle", "color", "opacity", "font", "fontSize", "align"];
                this.addTriggerProperties();
              };
              o.getFullProperties = function () {
                return ["x", "y", "angle", "color", "font", "fontSize", "align", "caption", "opacity"];
              };
              o.createTextField = function () {
                var e = this;
                if (g.w.currentlyInEditor) {
                  this.textFormat = new i.lk(t.getFontName(this._font), this._fontSize, this._color, false, null, null, null, null, t.getAlignment(this._align));
                  this.textField = new i.A_(true);
                  this.textField.multiline = true;
                  this.textField.doubleClickToEdit = true;
                  this.textField.defaultTextFormat = this.textFormat;
                  this.textField.addEventListener(i.Jh.VIDEO_FRAME, function () {
                    if (e.textEdit) {
                      e.textEdit.input.focus();
                    } else {
                      e.textEdit = new i.mF(e.textField.text);
                      var t = e.textEdit.window;
                      t.x = 350;
                      t.y = 25;
                      g.w.editor.addChild(t);
                      e.textEdit.addEventListener(i.Jh.CHANGE, e.fakeInputChange, false, 0, true);
                      e.textEdit.input.focus();
                      e.textEdit.addEventListener(i.Jh.CLOSE, e.fakeInputClose, false, 0, true);
                    }
                  });
                  this.textField.type = g.w.currentlyInEditor ? i.ux.INPUT : i.ux.DYNAMIC;
                  this.textField.multiline = true;
                  this.textField.autoSize = i.wL.LEFT;
                  this.textField.wordWrap = false;
                  this.textField.selectable = true;
                  this.textField.antiAliasType = i.BF.ADVANCED;
                  this.textField.maxChars = 200;
                  this.textField.alpha = this._opacity;
                  this.textField.userData.owner = this;
                  if (!this.textField.editInPlace) {
                    this.textField.addEventListener(i.Jh.CHANGE, this.adjustBg, false, 0, true);
                  }
                  if (g.w.currentlyInEditor) {
                    this.adjustBg();
                    this.addChildAt(this.bg, 0);
                  }
                  this.addChild(this.textField);
                  this.caption = this._caption;
                }
              };
              o._redrawBg = function () {
                var e = this.textField.pixiText;
                var t = e.style;
                var n = Ge.Z1e.measureText(e.text, t, t.wordWrap);
                var r = Math.ceil(Math.max(1, n.width)) + 10;
                var s = Math.ceil(Math.max(1, n.height)) + 4;
                this.bg ||= new i.kx();
                this.bg.graphics.clear();
                this.bg.graphics.lineStyle(0, this._outlineColor, 1, true);
                this.bg.graphics.beginFill(16777215, 0.00001);
                this.bg.graphics.drawRect(-5, -2, r, s);
                this.textField._pixiTextInput.setInputStyle("width", e.width + "px");
                return {
                  w: r,
                  h: s,
                  marginX: 5,
                  marginY: 2
                };
              };
              o.drawBoundingBox = function () {
                if (this.textField) {
                  var e = this._redrawBg();
                  var t = e.w;
                  var n = e.h;
                  var r = e.marginX;
                  var i = e.marginY;
                  this.boundingBox.graphics.clear();
                  this.boundingBox.scale.set(0);
                  this.boundingBox.position.set(0);
                  var s = this.doubleClickEnabled ? 52223 : 0;
                  this.boundingBox.graphics.lineStyle(0, s, 1, true);
                  this.boundingBox.graphics.drawRect(0, 0, t * this.scaleX, n * this.scaleY);
                  this.boundingBox.scale.set(1 / this.scaleX, 1 / this.scaleY);
                  this.boundingBox.position.set(-r, -i);
                }
              };
              o.selectAllText = function () {
                if (this._editing) {
                  this.textField.setSelection(0, this.textField.length);
                }
              };
              t.getAlignment = function (e) {
                var t;
                switch (e) {
                  case 1:
                    t = i.MA.LEFT;
                    break;
                  case 2:
                    t = i.MA.CENTER;
                    break;
                  case 3:
                    t = i.MA.RIGHT;
                }
                return t;
              };
              t.getFontName = function (e) {
                var t;
                switch (e) {
                  case 1:
                    t = "HelveticaNeueLT Std";
                    break;
                  case 2:
                    t = "HelveticaNeueLT Std Med";
                    break;
                  case 3:
                    t = "HelveticaNeueLT Std Bold";
                    break;
                  case 4:
                    t = "Clarendon LT Std";
                    break;
                  case 5:
                    t = "Clarendon LT Std Bold";
                }
                return t;
              };
              o.clone = function () {
                var e = new t();
                e.x = this.x;
                e.y = this.y;
                e.angle = this.angle;
                e.fontSize = this.fontSize;
                e.font = this.font;
                e.align = this.align;
                e.color = this.color;
                e.opacity = this.opacity;
                e.caption = this.caption;
                this.transferKeyedProperties(e);
                return e;
              };
              o.setOwner = function (e) {
                this.userData.owner = e;
                if (this.textField) {
                  this.textField.userData.owner = e || this;
                  this.textField.allowEdit = this.textField.userData.owner === this;
                }
              };
              s = t;
              if (a = [{
                key: "editing",
                get: function () {
                  return this._editing;
                },
                set: function (e) {
                  this._editing = e;
                  if (this._editing) {
                    this.stage.focus = this.textField;
                    var t = this.textField.length;
                    this.textField.setSelection(t, t);
                  } else {
                    this.stage.focus = this.stage;
                    this.textField.stopEditing();
                  }
                }
              }, {
                key: "caption",
                get: function () {
                  return this._caption;
                },
                set: function (e) {
                  this._caption = e;
                  if (this.textField) {
                    this.textField.text = this._caption;
                    this.adjustBg();
                    this.x = this.x;
                    this.y = this.y;
                  }
                }
              }, {
                key: "currentText",
                get: function () {
                  return this.textField.text;
                }
              }, {
                key: "fontSize",
                get: function () {
                  return this._fontSize;
                },
                set: function (e) {
                  this._fontSize = Number(e);
                  if (this._fontSize < this.MIN_SIZE) {
                    this._fontSize = this.MIN_SIZE;
                  }
                  if (this._fontSize > this.MAX_SIZE) {
                    this._fontSize = this.MAX_SIZE;
                  }
                  if (this.textFormat) {
                    this.textFormat.size = this._fontSize;
                    this.textField.defaultTextFormat = this.textFormat;
                    this.textField.setTextFormat(this.textFormat);
                    this.adjustBg();
                    this.x = this.x;
                    this.y = this.y;
                  }
                }
              }, {
                key: "align",
                get: function () {
                  return this._align;
                },
                set: function (e) {
                  this._align = Number(e);
                  if (this._align < 1) {
                    this._align = 1;
                  }
                  if (this._align > 3) {
                    this._align = 3;
                  }
                  if (this.textFormat) {
                    this.textFormat.align = t.getAlignment(this._align);
                    this.textField.defaultTextFormat = this.textFormat;
                    this.textField.setTextFormat(this.textFormat);
                    this.adjustBg();
                    this.x = this.x;
                    this.y = this.y;
                  }
                }
              }, {
                key: "font",
                get: function () {
                  return this._font;
                },
                set: function (e) {
                  this._font = Number(e);
                  if (this._font < 1) {
                    this._font = 1;
                  }
                  if (this._font > 5) {
                    this._font = 5;
                  }
                  if (this.textFormat) {
                    this.textFormat.font = t.getFontName(this._font);
                    this.textFormat.bold = false;
                    this.textField.defaultTextFormat = this.textFormat;
                    this.textField.setTextFormat(this.textFormat);
                    this.adjustBg();
                    this.x = this.x;
                    this.y = this.y;
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
                    if (this.textFormat) {
                      this.textFormat.color = this._color;
                      this.textField.defaultTextFormat = this.textFormat;
                      this.textField.setTextFormat(this.textFormat);
                    }
                  }
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
                  if (this.textField) {
                    this.textField.alpha = this._opacity;
                  }
                }
              }, {
                key: "triggerActionsText",
                get: function () {
                  return this._triggerActions;
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
                    Object.defineProperty(e, Ue(r.key), r);
                  }
                })(s.prototype, a);
              }
              Object.defineProperty(s, "prototype", {
                writable: false
              });
              return s;
            }(r._);
            var ze = n(13362);
            function We(e) {
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
            function Xe(e, t) {
              Xe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return Xe(e, t);
            }
            var Ye = function (e) {
              function t() {
                var t;
                (t = e.call(this, {
                  _triggerable: true,
                  _triggers: [],
                  _triggerActions: new Map(),
                  _triggerActionList: ["wake from sleep", "apply impulse"],
                  _triggerActionListProperties: [null, ["impulseX", "impulseY", "spin"]]
                }) || this)._reverse = false;
                t._interactive = true;
                t.sleeping = false;
                t.name = "toilet";
                t._type = "ToiletRef";
                t.shapesUsed = 5;
                t.rotatable = true;
                t.scalable = false;
                t._joinable = true;
                t._joints = [];
                t._keyedPropertyObject[t._triggerString] = t._triggerActions;
                t.container = new i.j7((0, s.zI)("Game", "ToiletRef"));
                t.container.convertChildren(t.container._pixiSprite);
                t.addChild(t.container);
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              Xe(n, r);
              var a;
              var o;
              var h = t.prototype;
              h.setAttributes = function () {
                this._attributes = ["x", "y", "angle", "reverse", "sleeping", "interactive"];
                this.addTriggerProperties();
              };
              h.clone = function () {
                var e = new t();
                e.x = this.x;
                e.y = this.y;
                e.angle = this.angle;
                e.reverse = this.reverse;
                e.interactive = this._interactive;
                e.groupable = this._groupable;
                e.joinable = this._joinable;
                e.sleeping = this.sleeping;
                this.transferKeyedProperties(e);
                return e;
              };
              h.setProperty = function (e, t) {
                var n;
                var r;
                if (e == "interactive" && t == 0 && this._joints) {
                  for (var s = 0; s < this._joints.length; s++) {
                    var a = this._joints[s];
                    n = a.removeBody(this);
                    if (r) {
                      r.nextAction = n.firstAction;
                    }
                    r = n;
                    this.removeJoint(a);
                    s -= 1;
                  }
                }
                var o = this[e];
                var h = new i.bR(this.x, this.y);
                this[e] = t;
                var l = this[e];
                var d = new i.bR(this.x, this.y);
                if (l != o) {
                  n = new ze.cK(this, e, o, l, h, d);
                  if (r) {
                    r.nextAction = n;
                  }
                }
                return n;
              };
              a = t;
              if (o = [{
                key: "interactive",
                get: function () {
                  return this._interactive;
                },
                set: function (e) {
                  if (this._interactive != e) {
                    if (!e || !this.inGroup) {
                      this._interactive = e;
                      if (this._interactive) {
                        this._groupable = false;
                        this._joinable = true;
                        this.shapesUsed = 5;
                        this._artUsed = 0;
                        this.dispatchEvent(new l.N3(l.N3.ART, -1));
                        this.dispatchEvent(new l.N3(l.N3.SHAPE, this.shapesUsed));
                      } else {
                        this._groupable = true;
                        this._joinable = false;
                        this.shapesUsed = 0;
                        this._artUsed = 1;
                        this.dispatchEvent(new l.N3(l.N3.SHAPE, -this.shapesUsed));
                        this.dispatchEvent(new l.N3(l.N3.ART, 1));
                      }
                    }
                  }
                }
              }, {
                key: "reverse",
                get: function () {
                  return this._reverse;
                },
                set: function (e) {
                  if (e != this._reverse) {
                    this._reverse = e;
                    if (this._reverse) {
                      this.container.scaleX = -1;
                    } else {
                      this.container.scaleX = 1;
                    }
                    this.invalidateLocalBounds();
                    if (this._selected) {
                      this.drawBoundingBox();
                    }
                    this.x = this.x;
                    this.y = this.y;
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
                    Object.defineProperty(e, We(r.key), r);
                  }
                })(a.prototype, o);
              }
              Object.defineProperty(a, "prototype", {
                writable: false
              });
              return a;
            }(r._);
            function qe(e) {
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
            function Je(e, t) {
              Je = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return Je(e, t);
            }
            var Ke = function (e) {
              function t() {
                var t;
                (t = e.call(this) || this)._tokenType = 1;
                t.name = "token";
                t._type = "TokenRef";
                t.shapesUsed = 1;
                t.scalable = false;
                t.rotatable = false;
                t._groupable = false;
                t.container = new i.j7();
                t.container.setPixiMovieClip((0, s.zI)("Game", "CoinMC"));
                t.container.convertChildren(t.container._pixiSprite);
                t.container.gotoAndStop(1);
                t.container.container.gotoAndStop(t._tokenType);
                t.addChild(t.container);
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              Je(n, r);
              var a;
              var o;
              var h = t.prototype;
              h.setAttributes = function () {
                this._attributes = ["x", "y", "tokenType"];
              };
              h.clone = function () {
                var e = new t();
                e.x = this.x;
                e.y = this.y;
                e.tokenType = this._tokenType;
                return e;
              };
              a = t;
              if (o = [{
                key: "tokenType",
                get: function () {
                  return this._tokenType;
                },
                set: function (e) {
                  if (e > 6) {
                    e = 6;
                  }
                  if (e < 1) {
                    e = 1;
                  }
                  this.container.container.gotoAndStop(e);
                  this._tokenType = e;
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
                    Object.defineProperty(e, qe(r.key), r);
                  }
                })(a.prototype, o);
              }
              Object.defineProperty(a, "prototype", {
                writable: false
              });
              return a;
            }(r._);
            function Ze(e) {
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
            function $e(e, t) {
              $e = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return $e(e, t);
            }
            var Qe = function (e) {
              function t() {
                var t;
                (t = e.call(this, {
                  _triggerable: true,
                  _triggers: [],
                  _triggerActions: new Map(),
                  _triggerActionList: ["wake from sleep", "apply impulse"],
                  _triggerActionListProperties: [null, ["impulseX", "impulseY", "spin"]]
                }) || this).sleeping = false;
                t._interactive = true;
                t._containsTrash = true;
                t.name = "trash can";
                t._type = "TrashCanRef";
                t.shapesUsed = 13;
                t.rotatable = true;
                t.scalable = false;
                t._joinable = true;
                t._joints = [];
                t._keyedPropertyObject[t._triggerString] = t._triggerActions;
                var n = new i.j7((0, s.zI)("Game", "TrashCanRef"));
                n.convertChildren(n._pixiSprite);
                t.addChild(n);
                t._lid = n.lid;
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              $e(n, r);
              var a;
              var o;
              var h = t.prototype;
              h.setAttributes = function () {
                this._attributes = ["x", "y", "angle", "sleeping", "interactive", "containsTrash"];
                this.addTriggerProperties();
              };
              h.clone = function () {
                var e = new t();
                e.x = this.x;
                e.y = this.y;
                e.rotatable = this.rotatable;
                e.angle = this.angle;
                e.interactive = this._interactive;
                e.groupable = this._groupable;
                e.joinable = this._joinable;
                e.sleeping = this.sleeping;
                e.containsTrash = this._containsTrash;
                this.transferKeyedProperties(e);
                return e;
              };
              h.setProperty = function (e, t) {
                var n;
                var r;
                if (e == "interactive" && t == 0 && this._joints) {
                  for (var s = 0; s < this._joints.length; s++) {
                    var a = this._joints[s];
                    n = a.removeBody(this);
                    if (r) {
                      r.nextAction = n.firstAction;
                    }
                    r = n;
                    this.removeJoint(a);
                    s -= 1;
                  }
                }
                var o = this[e];
                var h = new i.bR(this.x, this.y);
                this[e] = t;
                var l = this[e];
                var d = new i.bR(this.x, this.y);
                if (l != o) {
                  n = new ze.cK(this, e, o, l, h, d);
                  if (r) {
                    r.nextAction = n;
                  }
                }
                return n;
              };
              a = t;
              if (o = [{
                key: "interactive",
                get: function () {
                  return this._interactive;
                },
                set: function (e) {
                  if (this._interactive != e) {
                    if (!e || !this.inGroup) {
                      this._interactive = e;
                      if (this._interactive) {
                        this._groupable = false;
                        this._joinable = true;
                        this.shapesUsed = 1;
                        this._artUsed = 0;
                        this.dispatchEvent(new l.N3(l.N3.ART, -1));
                        this.dispatchEvent(new l.N3(l.N3.SHAPE, 1));
                      } else {
                        this._groupable = true;
                        this._joinable = false;
                        this.shapesUsed = 0;
                        this._artUsed = 1;
                        this.dispatchEvent(new l.N3(l.N3.SHAPE, -1));
                        this.dispatchEvent(new l.N3(l.N3.ART, 1));
                      }
                    }
                  }
                }
              }, {
                key: "containsTrash",
                get: function () {
                  return this._containsTrash;
                },
                set: function (e) {
                  if (this._containsTrash != e) {
                    if (e) {
                      this.addChild(this._lid);
                    } else {
                      this._lid.parent.removeChild(this._lid);
                    }
                    this.invalidateLocalBounds();
                    if (this._selected) {
                      this.drawBoundingBox();
                    }
                    this._containsTrash = e;
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
                    Object.defineProperty(e, Ze(r.key), r);
                  }
                })(a.prototype, o);
              }
              Object.defineProperty(a, "prototype", {
                writable: false
              });
              return a;
            }(r._);
            function et(e) {
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
            function tt(e, t) {
              tt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return tt(e, t);
            }
            var nt = function (e) {
              function t() {
                var t;
                (t = e.call(this, {
                  _triggerable: true,
                  _triggers: [],
                  _triggerActions: new Map(),
                  _triggerActionList: ["wake from sleep", "apply impulse"],
                  _triggerActionListProperties: [null, ["impulseX", "impulseY", "spin"]]
                }) || this).sleeping = false;
                t._interactive = true;
                t.name = "television";
                t._type = "TVRef";
                t.shapesUsed = 3;
                t.rotatable = true;
                t.scalable = false;
                t._joinable = true;
                t._joints = [];
                t._keyedPropertyObject[t._triggerString] = t._triggerActions;
                var n = new i.j7((0, s.zI)("Game", "TVRef"));
                n.convertChildren(n._pixiSprite);
                t.addChild(n);
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              tt(n, r);
              var a;
              var o;
              var h = t.prototype;
              h.setAttributes = function () {
                this._attributes = ["x", "y", "angle", "sleeping", "interactive"];
                this.addTriggerProperties();
              };
              h.clone = function () {
                var e = new t();
                e.x = this.x;
                e.y = this.y;
                e.angle = this.angle;
                e.interactive = this._interactive;
                e.groupable = this._groupable;
                e.joinable = this._joinable;
                e.sleeping = this.sleeping;
                this.transferKeyedProperties(e);
                return e;
              };
              h.setProperty = function (e, t) {
                var n;
                var r;
                if (e == "interactive" && t == 0 && this._joints) {
                  for (var s = 0; s < this._joints.length; s++) {
                    var a = this._joints[s];
                    n = a.removeBody(this);
                    if (r) {
                      r.nextAction = n.firstAction;
                    }
                    r = n;
                    this.removeJoint(a);
                    s -= 1;
                  }
                }
                var o = this[e];
                var h = new i.bR(this.x, this.y);
                this[e] = t;
                var l = this[e];
                var d = new i.bR(this.x, this.y);
                if (l != o) {
                  n = new ze.cK(this, e, o, l, h, d);
                  if (r) {
                    r.nextAction = n;
                  }
                }
                return n;
              };
              a = t;
              if (o = [{
                key: "interactive",
                get: function () {
                  return this._interactive;
                },
                set: function (e) {
                  if (this._interactive != e) {
                    if (!e || !this.inGroup) {
                      this._interactive = e;
                      if (this._interactive) {
                        this._groupable = false;
                        this._joinable = true;
                        this.shapesUsed = 3;
                        this._artUsed = 0;
                        this.dispatchEvent(new l.N3(l.N3.ART, -1));
                        this.dispatchEvent(new l.N3(l.N3.SHAPE, this.shapesUsed));
                      } else {
                        this._groupable = true;
                        this._joinable = false;
                        this.shapesUsed = 0;
                        this._artUsed = 1;
                        this.dispatchEvent(new l.N3(l.N3.SHAPE, -this.shapesUsed));
                        this.dispatchEvent(new l.N3(l.N3.ART, 1));
                      }
                    }
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
                    Object.defineProperty(e, et(r.key), r);
                  }
                })(a.prototype, o);
              }
              Object.defineProperty(a, "prototype", {
                writable: false
              });
              return a;
            }(r._);
            function rt(e) {
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
            function it(e, t) {
              it = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return it(e, t);
            }
            var st = function (e) {
              function t() {
                var t;
                (t = e.call(this, {
                  _triggerable: true,
                  _triggers: [],
                  _triggerActions: new Map(),
                  _triggerActionList: ["wake from sleep", "apply impulse"],
                  _triggerActionListProperties: [null, ["impulseX", "impulseY", "spin"]]
                }) || this).sleeping = false;
                t._interactive = true;
                t.name = "van";
                t._type = "VanRef";
                t.shapesUsed = 3;
                t.rotatable = true;
                t.scalable = false;
                t._joinable = true;
                t._joints = [];
                t._keyedPropertyObject[t._triggerString] = t._triggerActions;
                var n = new i.j7((0, s.zI)("Game", "van"));
                n.convertChildren(n._pixiSprite);
                n.gotoAndStop(1);
                t.addChild(n);
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              it(n, r);
              var a;
              var o;
              var h = t.prototype;
              h.setAttributes = function () {
                this._attributes = ["x", "y", "angle", "sleeping", "interactive"];
                this.addTriggerProperties();
              };
              h.clone = function () {
                var e = new t();
                e.x = this.x;
                e.y = this.y;
                e.angle = this.angle;
                e.sleeping = this.sleeping;
                e.interactive = this.interactive;
                this.transferKeyedProperties(e);
                return e;
              };
              a = t;
              if (o = [{
                key: "interactive",
                get: function () {
                  return this._interactive;
                },
                set: function (e) {
                  if (this._interactive != e) {
                    if (!e || !this.inGroup) {
                      this._interactive = e;
                      if (this._interactive) {
                        this._groupable = false;
                        this._joinable = true;
                        this.shapesUsed = 3;
                        this._artUsed = 0;
                        this.dispatchEvent(new l.N3(l.N3.ART, -1));
                        this.dispatchEvent(new l.N3(l.N3.SHAPE, 3));
                      } else {
                        this._groupable = true;
                        this._joinable = false;
                        this.shapesUsed = 0;
                        this._artUsed = 1;
                        this.dispatchEvent(new l.N3(l.N3.SHAPE, -3));
                        this.dispatchEvent(new l.N3(l.N3.ART, 1));
                      }
                    }
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
                    Object.defineProperty(e, rt(r.key), r);
                  }
                })(a.prototype, o);
              }
              Object.defineProperty(a, "prototype", {
                writable: false
              });
              return a;
            }(r._);
            function at(e) {
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
            function ot(e, t) {
              ot = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return ot(e, t);
            }
            n(89907);
            var ht = function (e) {
              function t() {
                var t;
                (t = e.call(this) || this).minLength = 200;
                t.maxLength = 1000;
                t.minSpeed = 0;
                t.maxSpeed = 7;
                t._ropeLength = 350;
                t._ballSpeed = 4;
                t.name = "wrecking ball";
                t._type = "WreckingBallRef";
                t.shapesUsed = 3;
                t.rotatable = false;
                t.scalable = false;
                t._triggerable = true;
                t._triggers = [];
                t.mouseChildren = true;
                t.anchor = new i.j7((0, s.zI)("Game", "wreckingball_anchor"));
                t.addChild(t.anchor);
                t.ball = new i.j7((0, s.zI)("Game", "wreckingball_ball"));
                t.addChild(t.ball);
                t.arrows = new i.j7((0, s.zI)("Game", "wreckingball_arrows"));
                t.addChild(t.arrows);
                t.rope = new i.j7((0, s.zI)("Game", "wreckingball_rope_copy"));
                t.rope.y += t.anchor.height / 2;
                t.addChild(t.rope);
                t.ropeLength = 350;
                (0, l.FK)(t.pixiSprite);
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              ot(n, r);
              var a;
              var o;
              var h = t.prototype;
              h.setAttributes = function () {
                this._attributes = ["x", "y", "ropeLength"];
              };
              h.clone = function () {
                var e = new t();
                e.x = this.x;
                e.y = this.y;
                e.ropeLength = this._ropeLength;
                return e;
              };
              a = t;
              if (o = [{
                key: "ropeLength",
                get: function () {
                  return this._ropeLength;
                },
                set: function (e) {
                  if (e < this.minLength) {
                    e = this.minLength;
                  }
                  if (e > this.maxLength) {
                    e = this.maxLength;
                  }
                  this._ropeLength = e;
                  this.rope.height = e - 106.5;
                  this.ball.y = this._ropeLength;
                  this.arrows.width = this.ball.y * 2 + 150;
                  this.arrows.scaleY = this.arrows.scaleX;
                  this.invalidateLocalBounds();
                  if (this._selected) {
                    this.drawBoundingBox();
                  }
                  this.x = this.x;
                  this.y = this.y;
                  (0, l.FK)(this.pixiSprite);
                }
              }, {
                key: "ballSpeed",
                get: function () {
                  return this._ballSpeed;
                },
                set: function (e) {
                  if (e < this.minSpeed) {
                    e = this.minSpeed;
                  }
                  if (e > this.maxSpeed) {
                    e = this.maxSpeed;
                  }
                  this._ballSpeed = e;
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
                    Object.defineProperty(e, at(r.key), r);
                  }
                })(a.prototype, o);
              }
              Object.defineProperty(a, "prototype", {
                writable: false
              });
              return a;
            }(r._);
          }
    });
})();
