(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        89005(e, t, n) {
            "use strict";
        
            n.d(t, {
              H: () => a
            });
            var r = n(4971);
            var i = n(98263);
            function s(e, t) {
              s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return s(e, t);
            }
            var a = function (e) {
              function t(t) {
                var n;
                (n = e.call(this) || this).mouseEnabled = false;
                n.mouseChildren = false;
                var s = (0, i.zI)("Game", "NPCSprite" + t);
                var a = new r.j7(s);
                a.convertChildren(a._pixiSprite);
                n.x = a.x;
                n.y = a.y;
                n.addChild(a);
                n.chest = a.chest;
                n.pelvis = a.pelvis;
                n.headOuter = a.headOuter;
                n.arm1 = a.arm1;
                n.arm2 = a.arm2;
                n.leg1 = a.leg1;
                n.leg2 = a.leg2;
                n.head = a.headOuter.head;
                n.upperArm1 = a.arm1.upperArm1;
                n.upperArm2 = a.arm2.upperArm2;
                n.lowerArmOuter1 = a.lowerArmOuter1 = new r.j7(a.arm1._pixiSprite.lowerArmOuter1);
                n.lowerArmOuter1.convertChildren(n.lowerArmOuter1.pixiSprite);
                n.lowerArmOuter2 = a.lowerArmOuter2 = new r.j7(a.arm2._pixiSprite.lowerArmOuter2);
                n.lowerArmOuter2.convertChildren(n.lowerArmOuter2.pixiSprite);
                n.lowerArm1 = a.lowerArmOuter1.lowerArm1;
                n.lowerArm2 = a.lowerArmOuter2.lowerArm2;
                n.upperLeg1 = a.leg1.upperLeg1;
                n.upperLeg2 = a.leg2.upperLeg2;
                n.lowerLegOuter1 = a.lowerLegOuter1 = new r.j7(a.leg1._pixiSprite.lowerLegOuter1);
                n.lowerLegOuter1.convertChildren(n.lowerLegOuter1.pixiSprite);
                n.lowerLegOuter2 = a.lowerLegOuter2 = new r.j7(a.leg2._pixiSprite.lowerLegOuter2);
                n.lowerLegOuter2.convertChildren(n.lowerLegOuter2.pixiSprite);
                n.lowerLeg1 = a.lowerLegOuter1.lowerLeg1;
                n.lowerLeg2 = a.lowerLegOuter2.lowerLeg2;
                n.headShape = n.head.shape;
                n.chestShape = n.chest.shape;
                n.pelvisShape = n.pelvis.shape;
                n.upperArm1Shape = n.upperArm1.shape;
                n.upperArm2Shape = n.upperArm2.shape;
                n.lowerArm1Shape = new r.j7(n.lowerArm1.pixiMovieClip.shape);
                n.lowerArm2Shape = n.lowerArm2.shape;
                n.upperLeg1Shape = n.upperLeg1.shape;
                n.upperLeg2Shape = n.upperLeg2.shape;
                n.lowerLeg1Shape = n.lowerLeg1.shape;
                n.lowerLeg2Shape = n.lowerLeg2.shape;
                n.headShape.visible = n.chestShape.visible = n.pelvisShape.visible = n.upperArm1Shape.visible = n.upperArm2Shape.visible = n.lowerArm1Shape.visible = n.lowerArm2Shape.visible = n.upperLeg1Shape.visible = n.upperLeg2Shape.visible = n.lowerLeg1Shape.visible = n.lowerLeg2Shape.visible = false;
                return n;
              }
              var n;
              var a;
              a = e;
              (n = t).prototype = Object.create(a.prototype);
              n.prototype.constructor = n;
              s(n, a);
              t.createNPC = function (e) {
                var t = (0, i.zI)("Game", "NPCSprite" + e);
                var n = new r.j7(t);
                n.convertChildren(n._pixiSprite);
                n.head = n.headOuter.head;
                n.upperArm1 = n.arm1.upperArm1;
                n.upperArm2 = n.arm2.upperArm2;
                n.lowerArmOuter1 = n.lowerArmOuter1 = new r.j7(n.arm1._pixiSprite.lowerArmOuter1);
                n.lowerArmOuter1.convertChildren(n.lowerArmOuter1.pixiSprite);
                n.lowerArmOuter2 = n.lowerArmOuter2 = new r.j7(n.arm2._pixiSprite.lowerArmOuter2);
                n.lowerArmOuter2.convertChildren(n.lowerArmOuter2.pixiSprite);
                n.lowerArm1 = n.lowerArmOuter1.lowerArm1;
                n.lowerArm2 = n.lowerArmOuter2.lowerArm2;
                n.upperLeg1 = n.leg1.upperLeg1;
                n.upperLeg2 = n.leg2.upperLeg2;
                n.lowerLegOuter1 = n.lowerLegOuter1 = new r.j7(n.leg1._pixiSprite.lowerLegOuter1);
                n.lowerLegOuter1.convertChildren(n.lowerLegOuter1.pixiSprite);
                n.lowerLegOuter2 = n.lowerLegOuter2 = new r.j7(n.leg2._pixiSprite.lowerLegOuter2);
                n.lowerLegOuter2.convertChildren(n.lowerLegOuter2.pixiSprite);
                n.lowerLeg1 = n.lowerLegOuter1.lowerLeg1;
                n.lowerLeg2 = n.lowerLegOuter2.lowerLeg2;
                n.headShape = n.head.shape;
                n.chestShape = n.chest.shape;
                n.pelvisShape = n.pelvis.shape;
                n.upperArm1Shape = n.upperArm1.shape;
                n.upperArm2Shape = n.upperArm2.shape;
                n.lowerArm1Shape = n.lowerArm1.shape;
                n.lowerArm2Shape = n.lowerArm2.shape;
                n.upperLeg1Shape = n.upperLeg1.shape;
                n.upperLeg2Shape = n.upperLeg2.shape;
                n.lowerLeg1Shape = n.lowerLeg1.shape;
                n.lowerLeg2Shape = n.lowerLeg2.shape;
                var s = new r.j7(n.chest.pixiMovieClip.heart);
                n.chest.heart = s;
                for (var a = 1; a < 5; a++) {
                  var o = new r.j7(n.chest.pixiMovieClip["chunk" + a]);
                  n.chest["chunk" + a] = o;
                }
                for (var h = 1; h < 4; h++) {
                  var l = new r.j7(n.pelvis.pixiMovieClip["chunk" + h]);
                  n.pelvis["chunk" + h] = l;
                }
                var d = new r.j7(n.head.pixiMovieClip.brain);
                n.head.brain = d;
                for (var c = 1; c < 5; c++) {
                  var u = new r.j7(n.head.pixiMovieClip["chunk" + c]);
                  n.head["chunk" + c] = u;
                }
                return n;
              };
              t.removeShapes = function (e) {
                e.head.removeChild(e.headShape);
                e.chest.removeChild(e.chestShape);
                e.pelvis.removeChild(e.pelvisShape);
                e.upperArm1.removeChild(e.upperArm1Shape);
                e.upperArm2.removeChild(e.upperArm2Shape);
                e.lowerArm1.removeChild(e.lowerArm1Shape);
                e.lowerArm2.removeChild(e.lowerArm2Shape);
                e.upperLeg1.removeChild(e.upperLeg1Shape);
                e.upperLeg2.removeChild(e.upperLeg2Shape);
                e.lowerLeg1.removeChild(e.lowerLeg1Shape);
                e.lowerLeg2.removeChild(e.lowerLeg2Shape);
                e.headShape = null;
                e.chestShape = null;
                e.pelvisShape = null;
                e.upperArm1Shape = null;
                e.upperArm2Shape = null;
                e.lowerArm1Shape = null;
                e.lowerArm2Shape = null;
                e.upperLeg1Shape = null;
                e.upperLeg2Shape = null;
                e.lowerLeg1Shape = null;
                e.lowerLeg2Shape = null;
              };
              t.hideShapes = function (e) {
                e.headShape.alpha = 0;
                e.chestShape.alpha = 0;
                e.pelvisShape.alpha = 0;
                e.upperArm1Shape.alpha = 0;
                e.upperArm2Shape.alpha = 0;
                e.lowerArm1Shape.alpha = 0;
                e.lowerArm2Shape.alpha = 0;
                e.upperLeg1Shape.alpha = 0;
                e.upperLeg2Shape.alpha = 0;
                e.lowerLeg1Shape.alpha = 0;
                e.lowerLeg2Shape.alpha = 0;
              };
              t.prototype.removeShapes = function () {
                this.head.removeChild(this.headShape);
                this.chest.removeChild(this.chestShape);
                this.pelvis.removeChild(this.pelvisShape);
                this.upperArm1.removeChild(this.upperArm1Shape);
                this.upperArm2.removeChild(this.upperArm2Shape);
                this.lowerArm1.removeChild(this.lowerArm1Shape);
                this.lowerArm2.removeChild(this.lowerArm2Shape);
                this.upperLeg1.removeChild(this.upperLeg1Shape);
                this.upperLeg2.removeChild(this.upperLeg2Shape);
                this.lowerLeg1.removeChild(this.lowerLeg1Shape);
                this.lowerLeg2.removeChild(this.lowerLeg2Shape);
                this.headShape = null;
                this.chestShape = null;
                this.pelvisShape = null;
                this.upperArm1Shape = null;
                this.upperArm2Shape = null;
                this.lowerArm1Shape = null;
                this.lowerArm2Shape = null;
                this.upperLeg1Shape = null;
                this.upperLeg2Shape = null;
                this.lowerLeg1Shape = null;
                this.lowerLeg2Shape = null;
              };
              return t;
            }(r.kx);
          },
        43512(e, t, n) {
            "use strict";
        
            n.d(t, {
              _: () => o
            });
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(26099);
            n(2892);
            var r = n(4971);
            var i = n(13362);
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
            function a(e, t) {
              a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return a(e, t);
            }
            var o = function (e) {
              function t(t) {
                var n;
                if (!(n = e.call(this, t) || this)._triggerString) {
                  n._triggerString = "triggerActionsSpecial";
                }
                return n;
              }
              var n;
              var o;
              o = e;
              (n = t).prototype = Object.create(o.prototype);
              n.prototype.constructor = n;
              a(n, o);
              var h;
              var l;
              var d = t.prototype;
              d.clone = function () {
                var e = new t();
                e.x = this.x;
                e.y = this.y;
                this.forceDirty();
                return e;
              };
              d.setProperty = function (e, t) {
                var n;
                var s;
                if ((e == "immovable2" && t == 1 || e == "interactive" && t == 0) && this._joints) {
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
                this.forceDirty();
                return n;
              };
              h = t;
              if (l = [{
                key: "type",
                get: function () {
                  return this._type;
                }
              }, {
                key: "groupable",
                get: function () {
                  return !this.inGroup && this._groupable;
                },
                set: function (e) {
                  this._groupable = e;
                  this.forceDirty();
                }
              }, {
                key: "triggerActionsSpecial",
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
                    Object.defineProperty(e, s(r.key), r);
                  }
                })(h.prototype, l);
              }
              Object.defineProperty(h, "prototype", {
                writable: false
              });
              return h;
            }(n(73026).$);
          },
        10238(e, t, n) {
            "use strict";
        
            n.d(t, {
              a: () => d
            });
            n(62010);
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(26099);
            n(2892);
            var r = n(4971);
            var i = n(73026);
            var s = n(35057);
            var a = n(98263);
            var o = n(80455);
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
              function t() {
                var t;
                (t = e.call(this) || this).minIndex = 1;
                t.maxIndex = s.w.totalCharacters;
                t._characterIndex = 1;
                t._forceChar = false;
                t._hideVehicle = false;
                t.maxIndex = s.w.totalCharacters;
                t.name = "main character";
                t.deletable = false;
                t.cloneable = false;
                t.rotatable = false;
                t.scalable = false;
                t.mc = new r.j7();
                t.mc.setPixiMovieClip((0, a.zI)("Game", "StartPlaceHolder").mc);
                t.mc.gotoAndStop(1);
                t.addChild(t.mc);
                (0, o.FK)(t.mc.pixiMovieClip);
                return t;
              }
              var n;
              var i;
              i = e;
              (n = t).prototype = Object.create(i.prototype);
              n.prototype.constructor = n;
              l(n, i);
              var d;
              var c;
              var u = t.prototype;
              u.setAttributes = function () {
                this._attributes = ["x", "y", "characterIndex", "forceChar", "hideVehicle"];
              };
              u.getVehicleIndex = function () {
                var e = 1;
                switch (this._characterIndex) {
                  case 4:
                  case 6:
                    e = 0;
                }
                return e;
              };
              d = t;
              if (c = [{
                key: "characterIndex",
                get: function () {
                  return this._characterIndex;
                },
                set: function (e) {
                  if (e < this.minIndex) {
                    e = this.minIndex;
                  }
                  if (e > this.maxIndex) {
                    e = this.maxIndex;
                  }
                  this._characterIndex = e;
                  this.mc.gotoAndStop(e);
                  var t = this.getVehicleIndex();
                  this.mc.pixiMovieClip.children[t].visible = !this._hideVehicle;
                  this.invalidateLocalBounds();
                  if (this._selected) {
                    this.drawBoundingBox();
                  }
                  this.x = this.x;
                  this.y = this.y;
                  (0, o.FK)(this.mc.pixiMovieClip);
                }
              }, {
                key: "hideVehicle",
                get: function () {
                  return this._hideVehicle;
                },
                set: function (e) {
                  this._hideVehicle = e;
                  var t = this.getVehicleIndex();
                  this.mc.pixiMovieClip.children[t].visible = !this._hideVehicle;
                  this.invalidateLocalBounds();
                  if (this._selected) {
                    this.drawBoundingBox();
                  }
                }
              }, {
                key: "forceChar",
                get: function () {
                  return this._forceChar;
                },
                set: function (e) {
                  this._forceChar = e;
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
            }(i.$);
          }
    });
})();
