(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        7151(e, t, n) {
            "use strict";
        
            n.d(t, {
              _J: () => p
            });
            n(23792);
            n(36033);
            n(26099);
            n(47764);
            n(62953);
            n(23500);
            var r = n(4971);
            var i = n(98576);
            var s = n(89005);
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(2892);
            var a = n(23222);
            var o = n(46682);
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
              function t(n, i, s, h, l, d) {
                var c;
                if (s === undefined) {
                  s = 90;
                }
                if (h === undefined) {
                  h = -90;
                }
                if (l === undefined) {
                  l = 90;
                }
                if (d === undefined) {
                  d = null;
                }
                c = e.call(this) || this;
                if (n instanceof o.kxk) {
                  n = new r.kx(n);
                }
                c._sprite = n;
                var u = new a.RM(n.x, n.y);
                c.x = u.x;
                c.y = u.y;
                var p = new a.RM(i.x - u.x, i.y - u.y);
                c._angle = c._referenceAngle = Math.atan2(p.y, p.x);
                c._length = p.Length();
                c._childSegments = [];
                c._modelOffsetAngle = s * t.PI_OVER_ONEEIGHTY;
                c._modelDifference = c._modelOffsetAngle - c._referenceAngle;
                c._minAngle = h * t.PI_OVER_ONEEIGHTY;
                c._maxAngle = l * t.PI_OVER_ONEEIGHTY;
                c.parentSegment = d;
                c.calculateVector();
                c.drawSegment();
                return c;
              }
              var n;
              var i;
              i = e;
              (n = t).prototype = Object.create(i.prototype);
              n.prototype.constructor = n;
              l(n, i);
              var s;
              var d;
              var c = t.prototype;
              c.addChildSegment = function (e) {
                this._childSegments.push(e);
              };
              c.drawSegment = function () {
                this.graphics.clear();
                this.graphics.lineStyle(1, 0, 1, false);
                this.graphics.moveTo(0, 0);
                this.graphics.lineTo(this._vector.x, this._vector.y);
                this._sprite.x = this.x;
                this._sprite.y = this.y;
                this._sprite.rotation = Math.round((this._angle + this._modelDifference - this._modelOffsetAngle) * t.ONEEIGHTY_OVER_PI);
                for (var e = 0; e < this._childSegments.length; e++) {
                  this._childSegments[e].drawSegment();
                }
              };
              c.calculateVector = function () {
                this._vector = new a.RM(this._length, 0);
                var e = new a.LJ(this.angle);
                this._vector.MulM(e);
              };
              s = t;
              if (d = [{
                key: "parentSegment",
                get: function () {
                  return this._parentSegment;
                },
                set: function (e) {
                  this._parentSegment = e;
                  if (this._parentSegment) {
                    this._parentSegment.addChildSegment(this);
                  }
                }
              }, {
                key: "endPoint",
                get: function () {
                  return new a.RM(this._vector.x + this.x, this._vector.y + this.y);
                }
              }, {
                key: "length",
                get: function () {
                  return this._length;
                }
              }, {
                key: "angleDegrees",
                get: function () {
                  return this._angle * t.ONEEIGHTY_OVER_PI;
                }
              }, {
                key: "angle",
                get: function () {
                  return this._angle;
                },
                set: function (e) {
                  if (this._parentSegment) {
                    var t = this._parentSegment.angle + this._parentSegment.modelDifference;
                    var n = e - t;
                    if (n < this._minAngle) {
                      e = t + this._minAngle;
                    }
                    if (n > this._maxAngle) {
                      e = t + this._maxAngle;
                    }
                  } else {
                    var r = e - this._referenceAngle;
                    if (r < this._minAngle) {
                      e = this._referenceAngle + this._minAngle;
                    }
                    if (r > this._maxAngle) {
                      e = this._referenceAngle + this._maxAngle;
                    }
                  }
                  var i = this._angle - e;
                  this._angle = e;
                  this.calculateVector();
                  var s = this.endPoint;
                  for (var a = 0; a < this._childSegments.length; a++) {
                    var o = this._childSegments[a];
                    o.x = s.x;
                    o.y = s.y;
                    o.angle = o.angle - i;
                  }
                }
              }, {
                key: "modelAngle",
                get: function () {
                  if (this._parentSegment) {
                    return this._angle - this._parentSegment.angle - this._parentSegment.modelDifference;
                  } else {
                    return this._angle + this._modelDifference - this._modelOffsetAngle;
                  }
                },
                set: function (e) {
                  if (this._parentSegment) {
                    e = e + this._parentSegment.angle + this._parentSegment.modelDifference;
                  } else {
                    e += this._referenceAngle;
                  }
                  this.angle = e;
                  this.drawSegment();
                }
              }, {
                key: "modelAngleDegrees",
                get: function () {
                  return this.modelAngle * t.ONEEIGHTY_OVER_PI;
                },
                set: function (e) {
                  e *= t.PI_OVER_ONEEIGHTY;
                  this.modelAngle = e;
                }
              }, {
                key: "relativeAngle",
                get: function () {
                  if (this._parentSegment) {
                    return this._angle - this._parentSegment.angle;
                  } else {
                    return this.angle;
                  }
                }
              }, {
                key: "relativeAngleDegrees",
                get: function () {
                  return this.relativeAngle * t.ONEEIGHTY_OVER_PI;
                }
              }, {
                key: "modelDifference",
                get: function () {
                  return this._modelDifference;
                }
              }, {
                key: "sprite",
                get: function () {
                  return this._sprite;
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
                })(s.prototype, d);
              }
              Object.defineProperty(s, "prototype", {
                writable: false
              });
              return s;
            }(r.kx);
            d.PI_OVER_ONEEIGHTY = Math.PI / 180;
            d.ONEEIGHTY_OVER_PI = 180 / Math.PI;
            var c = function () {
              function e() {}
              e.solve = function (e, t, n) {
                for (var r = 0; r < this.numIterations; r++) {
                  for (var i = n; i;) {
                    var s = new a.RM(i.x, i.y);
                    var o = n.endPoint;
                    var h = Math.abs(e - o.x);
                    var l = Math.abs(t - o.y);
                    if (h < this.distanceError && l < this.distanceError) {
                      this.drawSegments(n);
                      return;
                    }
                    var d = new a.RM(e - s.x, t - s.y);
                    var c = new a.RM(o.x - s.x, o.y - s.y);
                    d.Normalize();
                    c.Normalize();
                    var u = a.x5.b2Dot(d, c);
                    if (u < 0.9999) {
                      var p = a.x5.b2CrossVV(d, c);
                      if (p > 0) {
                        var m = Math.acos(u);
                        i.angle = i.angle - m;
                      } else if (p < 0) {
                        var f = Math.acos(u);
                        i.angle = i.angle + f;
                      }
                    }
                    i = i.parentSegment;
                  }
                  var _ = n.endPoint;
                  var v = Math.abs(e - _.x);
                  var y = Math.abs(t - _.y);
                  if (v < this.distanceError && y < this.distanceError) {
                    this.drawSegments(n);
                    return;
                  }
                }
                this.drawSegments(n);
              };
              e.drawSegments = function (e) {
                while (e) {
                  e.drawSegment();
                  e = e.parentSegment;
                }
              };
              return e;
            }();
            function u(e, t) {
              u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return u(e, t);
            }
            c.numIterations = 100;
            c.distanceError = 1;
            var p = function (e) {
              function t(n) {
                var o;
                (o = e.call(this) || this).init = function (e) {
                  o.removeEventListener(r.Jh.ADDED_TO_STAGE, o.init);
                  o.graphics.beginFill(10066329, 0.35);
                  o.graphics.drawRect(0, 0, 20000, 10000);
                  o.graphics.endFill();
                  var t = s.H.createNPC(o.npcRef.charIndex);
                  s.H.hideShapes(t);
                  o.bodyHolder = new r.kx();
                  o.bodyHolder.addChild(t);
                  o.addChild(o.bodyHolder);
                  o.bodyHolder.scaleY = 0.5;
                  o.bodyHolder.scaleX = o.npcRef.reverse ? -0.5 : 0.5;
                  o.bodyHolder.x = o.npcRef.x;
                  o.bodyHolder.y = o.npcRef.y;
                  o.bodyHolder.rotation = o.npcRef.rotation;
                  o.head = t.headOuter;
                  o.chest = t.chest;
                  o.pelvis = t.pelvis;
                  o.upperArm1 = t.arm1;
                  o.upperArm2 = t.arm2;
                  o.lowerArm1 = t.lowerArmOuter1;
                  o.lowerArm2 = t.lowerArmOuter2;
                  o.upperLeg1 = t.leg1;
                  o.upperLeg2 = t.leg2;
                  o.lowerLeg1 = t.lowerLegOuter1;
                  o.lowerLeg2 = t.lowerLegOuter2;
                  for (var n = 6; n > -1; n--) {
                    var i = t.getChildAt(n);
                    switch (i) {
                      case o.upperArm1:
                        o.bodyHolder.addChildAt(o.lowerArm1, 0);
                        break;
                      case o.upperArm2:
                        o.bodyHolder.addChildAt(o.lowerArm2, 0);
                        break;
                      case o.upperLeg1:
                        o.bodyHolder.addChildAt(o.lowerLeg1, 0);
                        break;
                      case o.upperLeg2:
                        o.bodyHolder.addChildAt(o.lowerLeg2, 0);
                    }
                    o.bodyHolder.addChildAt(i, 0);
                  }
                  o.lowerArm1.x = o.upperArm1.x + o.lowerArm1.x;
                  o.lowerArm1.y = o.upperArm1.y + o.lowerArm1.y;
                  o.lowerArm2.x = o.upperArm2.x + o.lowerArm2.x;
                  o.lowerArm2.y = o.upperArm2.y + o.lowerArm2.y;
                  o.lowerLeg1.x = o.upperLeg1.x + o.lowerLeg1.x;
                  o.lowerLeg1.y = o.upperLeg1.y + o.lowerLeg1.y;
                  o.lowerLeg2.x = o.upperLeg2.x + o.lowerLeg2.x;
                  o.lowerLeg2.y = o.upperLeg2.y + o.lowerLeg2.y;
                  var h = t.head ? t.head.x : 0;
                  var l = t.head ? t.head.y : 0;
                  o.headSegment = new d(o.head, new a.RM(o.head.x + h, o.head.y + l), -90, -20, 20);
                  o.upperArm1Segment = new d(o.upperArm1, new a.RM(o.lowerArm1.x, o.lowerArm1.y), 90, -180, 60);
                  o.upperArm2Segment = new d(o.upperArm2, new a.RM(o.lowerArm2.x, o.lowerArm2.y), 90, -180, 60);
                  o.lowerArm1Segment = new d(o.lowerArm1, new a.RM(o.lowerArm1.x, o.lowerArm1.y + o.lowerArm1.height * 0.8), 90, -160, 0, o.upperArm1Segment);
                  o.lowerArm2Segment = new d(o.lowerArm2, new a.RM(o.lowerArm2.x, o.lowerArm2.y + o.lowerArm2.height * 0.8), 90, -160, 0, o.upperArm2Segment);
                  o.upperLeg1Segment = new d(o.upperLeg1, new a.RM(o.lowerLeg1.x, o.lowerLeg1.y), 90, -150, 10);
                  o.upperLeg2Segment = new d(o.upperLeg2, new a.RM(o.lowerLeg2.x, o.lowerLeg2.y), 90, -150, 10);
                  o.lowerLeg1Segment = new d(o.lowerLeg1, new a.RM(o.lowerLeg1.x, o.lowerLeg1.y + o.lowerLeg1.height * 0.8), 90, 0, 150, o.upperLeg1Segment);
                  o.lowerLeg2Segment = new d(o.lowerLeg2, new a.RM(o.lowerLeg2.x, o.lowerLeg2.y + o.lowerLeg2.height * 0.8), 90, 0, 150, o.upperLeg2Segment);
                  o.spriteSegments = new Map();
                  o.spriteSegments.set(o.head, o.headSegment);
                  o.spriteSegments.set(o.upperArm1, o.upperArm1Segment);
                  o.spriteSegments.set(o.lowerArm1, o.lowerArm1Segment);
                  o.spriteSegments.set(o.upperArm2, o.upperArm2Segment);
                  o.spriteSegments.set(o.lowerArm2, o.lowerArm2Segment);
                  o.spriteSegments.set(o.upperLeg1, o.upperLeg1Segment);
                  o.spriteSegments.set(o.lowerLeg1, o.lowerLeg1Segment);
                  o.spriteSegments.set(o.upperLeg2, o.upperLeg2Segment);
                  o.spriteSegments.set(o.lowerLeg2, o.lowerLeg2Segment);
                  o.spriteSegments.forEach(function (e, t) {
                    t.mouseEnabled = true;
                    t.pixiSprite.on("pointerdown", function () {
                      return o.mouseDownHandler(t);
                    });
                    t.pixiSprite.on("pointerover", function () {
                      return o.mouseOverHandler(t);
                    });
                  });
                  o.segmentProperties = new Map();
                  o.segmentProperties.set(o.headSegment, "neckAngle");
                  o.segmentProperties.set(o.upperArm1Segment, "shoulder1Angle");
                  o.segmentProperties.set(o.lowerArm1Segment, "elbow1Angle");
                  o.segmentProperties.set(o.upperArm2Segment, "shoulder2Angle");
                  o.segmentProperties.set(o.lowerArm2Segment, "elbow2Angle");
                  o.segmentProperties.set(o.upperLeg1Segment, "hip1Angle");
                  o.segmentProperties.set(o.lowerLeg1Segment, "knee1Angle");
                  o.segmentProperties.set(o.upperLeg2Segment, "hip2Angle");
                  o.segmentProperties.set(o.lowerLeg2Segment, "knee2Angle");
                  o.matchRealCharacter();
                  o.doubleClickEnabled = true;
                  r.BI.main.addEventListener(r.Cm.MOUSE_OVER, o.mouseOverHandler, false, 0, true);
                  o.addEventListener(r.Cm.DOUBLE_CLICK, o.doubleClickHandler);
                };
                o.mouseDownHandler = function (e) {
                  if (o.spriteSegments.get(e)) {
                    o.currentSegment = o.spriteSegments.get(e);
                    o.dragIK();
                    r.BI.main.addEventListener(r.Cm.MOUSE_MOVE, o.dragIK);
                    r.BI.main.addEventListener(r.Cm.MOUSE_UP, o.endIKDrag);
                    r.BI.main.removeEventListener(r.Cm.MOUSE_OVER, o.mouseOverHandler);
                  }
                };
                o.dragIK = function (e = null) {
                  c.solve(o.bodyHolder.mouseX, o.bodyHolder.mouseY, o.currentSegment);
                };
                o.endIKDrag = function (e) {
                  if (o.currentSegment) {
                    var t;
                    var n;
                    r.BI.main.removeEventListener(r.Cm.MOUSE_MOVE, o.dragIK);
                    r.BI.main.removeEventListener(r.Cm.MOUSE_UP, o.endIKDrag);
                    r.BI.main.addEventListener(r.Cm.MOUSE_OVER, o.mouseOverHandler, false, 0, true);
                    var s = o.segmentProperties.get(o.currentSegment);
                    t = o.npcRef.setProperty(s, o.currentSegment.modelAngleDegrees);
                    if (o.currentSegment.parentSegment) {
                      s = o.segmentProperties.get(o.currentSegment.parentSegment);
                      if (n = o.npcRef.setProperty(s, o.currentSegment.parentSegment.modelAngleDegrees)) {
                        if (t) {
                          n.nextAction = t;
                        } else {
                          t = n;
                        }
                      }
                    }
                    if (t) {
                      o.dispatchEvent(new i.X(i.X.GENERIC, t));
                    }
                    o.currentSegment = null;
                  }
                };
                o.mouseOverHandler = function (e) {
                  if (e == o.upperArm2 || e == o.lowerArm2) {
                    o.chest.alpha = o.pelvis.alpha = 0.4;
                  } else {
                    o.chest.alpha = o.pelvis.alpha = 1;
                  }
                };
                o.doubleClickHandler = function (e) {
                  o.dispatchEvent(new r.Jh(t.POSE_COMPLETE));
                };
                o.npcRef = n;
                o.npcRef.npcSprite.visible = false;
                o.addEventListener(r.Jh.ADDED_TO_STAGE, o.init);
                return o;
              }
              var n;
              var o;
              o = e;
              (n = t).prototype = Object.create(o.prototype);
              n.prototype.constructor = n;
              u(n, o);
              var h = t.prototype;
              h.matchRealCharacter = function () {
                this.headSegment.modelAngleDegrees = this.npcRef.neckAngle;
                this.upperArm1Segment.modelAngleDegrees = this.npcRef.shoulder1Angle;
                this.upperArm2Segment.modelAngleDegrees = this.npcRef.shoulder2Angle;
                this.lowerArm1Segment.modelAngleDegrees = this.npcRef.elbow1Angle;
                this.lowerArm2Segment.modelAngleDegrees = this.npcRef.elbow2Angle;
                this.upperLeg1Segment.modelAngleDegrees = this.npcRef.hip1Angle;
                this.upperLeg2Segment.modelAngleDegrees = this.npcRef.hip2Angle;
                this.lowerLeg1Segment.modelAngleDegrees = this.npcRef.knee1Angle;
                this.lowerLeg2Segment.modelAngleDegrees = this.npcRef.knee2Angle;
              };
              h.die = function () {
                this.npcRef.npcSprite.visible = true;
                this.spriteSegments.forEach(function (e, t) {
                  t.pixiSprite.off("pointerdown");
                  t.pixiSprite.off("pointerover");
                });
                this.segmentProperties = null;
                this.spriteSegments = null;
                r.BI.main.removeEventListener(r.Cm.MOUSE_MOVE, this.dragIK);
                r.BI.main.removeEventListener(r.Cm.MOUSE_UP, this.endIKDrag);
                r.BI.main.removeEventListener(r.Cm.MOUSE_OVER, this.mouseOverHandler);
                this.removeEventListener(r.Cm.DOUBLE_CLICK, this.doubleClickHandler);
                this.removeEventListener(r.Jh.ADDED_TO_STAGE, this.init);
                if (this.parent) {
                  this.parent.removeChild(this);
                }
              };
              return t;
            }(r.kx);
            p.POSE_COMPLETE = "posecomplete";
          },
        94695(e, t, n) {
            "use strict";
        
            n.d(t, {
              P: () => l
            });
            n(62010);
            n(54554);
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(26099);
            n(2892);
            var r = n(4971);
            var i = n(39911);
            var s = n(13362);
            var a = n(35057);
            function o(e) {
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
            function h(e, t) {
              h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return h(e, t);
            }
            var l = function (e) {
              function t(t, n, r, i, s, a, o, h) {
                var l;
                if (t === undefined) {
                  t = false;
                }
                if (n === undefined) {
                  n = false;
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
                (l = e.call(this, t, n, r, i, s, a, o, h) || this).handleVector = new Array();
                l.scalable = true;
                l.joinable = false;
                l.minDimension = 0.1;
                l.maxDimension = 10;
                l.name = "art shape";
                l._type = "ArtShape";
                return l;
              }
              var n;
              var i;
              i = e;
              (n = t).prototype = Object.create(i.prototype);
              n.prototype.constructor = n;
              h(n, i);
              var l;
              var d;
              var c = t.prototype;
              c.setAttributes = function () {
                this._attributes = ["x", "y", "shapeWidth", "shapeHeight", "angle", "color", "outlineColor", "opacity"];
                this.addTriggerProperties();
              };
              c.addVert = function (e, t = -1) {
                var n = e;
                if (!n) {
                  throw new Error("trying to add a regular vert into an art shape");
                }
                if (t < 0) {
                  if (this._editMode) {
                    this.vertContainer.addChild(e);
                  }
                  this.vertVector.push(e.vec);
                  this.handleVector.push(n.handle1.vec);
                  this.handleVector.push(n.handle2.vec);
                } else {
                  if (this._editMode) {
                    this.vertContainer.addChildAt(e, t);
                  }
                  this.vertVector.splice(t, 0, e.vec);
                  this.handleVector.splice(t * 2, 0, n.handle1.vec, n.handle2.vec);
                }
              };
              c.removeVert = function (e = -1) {
                if (e < 0) {
                  e = this.vertContainer.numChildren - 1;
                  this.vertContainer.removeChildAt(e);
                  this.vertVector.pop();
                  this.handleVector.pop();
                  this.handleVector.pop();
                } else {
                  this.vertContainer.removeChildAt(e);
                  this.vertVector.splice(e, 1);
                  this.handleVector.splice(e * 2, 2);
                }
              };
              c.addBezierCommands = function (e, t, n, i, s, a) {
                if (s.x == 0 && s.y == 0 && a.x == 0 && a.y == 0) {
                  e.push(r.e.LINE_TO);
                  t.push(i.x, i.y);
                } else {
                  e.push(r.e.CUBIC_CURVE_TO);
                  t.push(s.x, s.y);
                  t.push(a.x, a.y);
                  t.push(i.x, i.y);
                }
              };
              t.bezierValue = function (e, t, n, r, i) {
                return (((i - r * 3 + n * 3 - t) * e + (r * 3 - n * 6 + t * 3)) * e + (n * 3 - t * 3)) * e + t;
              };
              c.drawEditMode = function (e, t, n = false) {
                this.graphics.clear();
                var i = new Array();
                var s = new Array();
                this.graphics.lineStyle(0, 0, this._opacity, false);
                if (this.outlineColor >= 0) {
                  this.graphics.lineStyle(0, this._outlineColor, this._opacity, false);
                }
                if (t) {
                  this.graphics.beginFill(0, this._opacity);
                }
                var a = this.vertContainer.numChildren;
                if (a > 0) {
                  var o = this.vertContainer.getChildAt(0);
                  i.push(r.e.MOVE_TO);
                  s.push(o.x);
                  s.push(o.y);
                  for (var h = 1; h < a; h++) {
                    var l = this.vertContainer.getChildAt(h);
                    this.addBezierCommands(i, s, o.b2position, l.b2position, o.anchor2, l.anchor1);
                    o = l;
                  }
                }
                if (e) {
                  this.graphics.lineStyle(0, 0, 0.5, false);
                  var d = this.vertContainer.getChildAt(this.vertContainer.numChildren - 1);
                  var c = this.vertContainer.getChildAt(0);
                  if (t) {
                    this.addBezierCommands(i, s, d.b2position, c.b2position, d.anchor2, c.anchor1);
                    this.graphics.drawPath(i, s, r.tl.EVEN_ODD);
                    this.graphics.endFill();
                  } else {
                    if (n) {
                      this.addBezierCommands(i, s, d.b2position, e, d.anchor2, e);
                    }
                    this.graphics.drawPath(i, s, r.tl.NON_ZERO);
                  }
                } else {
                  this.graphics.drawPath(i, s, r.tl.NON_ZERO);
                  if (t) {
                    this.graphics.endFill();
                  }
                }
              };
              c.drawShape = function () {
                if (a.w.currentlyInEditor) {
                  this.graphics.clear();
                  var t = new Array();
                  var n = new Array();
                  if (this.outlineColor >= 0) {
                    this.graphics.lineStyle(0, this._outlineColor, 1, false);
                  }
                  if (this.completeFill) {
                    if (this._color === -1) {
                      this.graphics.beginFill(this._color, 0.000001);
                    } else {
                      this.graphics.beginFill(this._color, 1);
                    }
                  } else if (this._outlineColor == -1) {
                    this.graphics.lineStyle(0, 0, 1, false);
                  }
                  var i = this.vertVector?.length;
                  if (i > 0) {
                    var s = this.vertVector[0];
                    t.push(r.e.MOVE_TO);
                    n.push(s.x);
                    n.push(s.y);
                    for (var o = 1; o < i; o++) {
                      var h = this.vertVector[o];
                      var l = this.handleVector[(o - 1) * 2 + 1].Copy();
                      var d = this.handleVector[o * 2].Copy();
                      l.Add(s);
                      d.Add(h);
                      this.addBezierCommands(t, n, s, h, l, d);
                      s = h;
                    }
                    if (this.completeFill) {
                      h = this.vertVector[0];
                      l = this.handleVector[(o - 1) * 2 + 1].Copy();
                      d = this.handleVector[0].Copy();
                      l.Add(s);
                      d.Add(h);
                      this.addBezierCommands(t, n, s, h, l, d);
                      this.graphics.drawPath(t, n, r.tl.NON_ZERO);
                      this.graphics.endFill();
                    } else {
                      this.graphics.drawPath(t, n, r.tl.NON_ZERO);
                    }
                    this.setDefaultDimensions();
                  }
                  this.graphics.pixiGraphics.alpha = this._opacity;
                } else if (this.vertVector?.length > 0) {
                  this.setDefaultDimensions();
                }
              };
              c.getFlatSprite = function () {
                var e = this._opacity == 0 || this._outlineColor < 0 && this._color < 0;
                var t = new r.kx();
                if (e) {
                  t.visible = false;
                }
                if (e && this._triggers.length === 0) {
                  t.ignoreWhenCulling = true;
                  return t;
                }
                if (this._outlineColor >= 0) {
                  t.graphics.lineStyle(0, this._outlineColor, 1, false);
                }
                if (this.completeFill) {
                  if (this._color >= 0) {
                    t.graphics.beginFill(this._color, 1);
                  }
                } else if (this._outlineColor == -1) {
                  t.graphics.lineStyle(0, 0, 1, false);
                }
                var n = new Array();
                var i = new Array();
                var s = this.vertVector[0];
                n.push(r.e.MOVE_TO);
                i.push(s.x);
                i.push(s.y);
                for (var a = this.vertVector.length, o = 1; o < a; o++) {
                  var h = this.vertVector[o];
                  var l = this.handleVector[(o - 1) * 2 + 1].Copy();
                  var d = this.handleVector[o * 2].Copy();
                  l.Add(s);
                  d.Add(h);
                  this.addBezierCommands(n, i, s, h, l, d);
                  s = h;
                }
                if (this.completeFill) {
                  h = this.vertVector[0];
                  l = this.handleVector[(o - 1) * 2 + 1].Copy();
                  d = this.handleVector[0].Copy();
                  l.Add(s);
                  d.Add(h);
                  this.addBezierCommands(n, i, s, h, l, d);
                  t.graphics.drawPath(n, i, r.tl.NON_ZERO);
                  t.graphics.endFill();
                } else {
                  t.graphics.drawPath(n, i, r.tl.NON_ZERO);
                }
                t.x = this.x;
                t.y = this.y;
                t.scaleX = this.scaleX;
                t.scaleY = this.scaleY;
                t.rotation = this.rotation;
                t.alpha = this._opacity;
                return t;
              };
              c.clone = function () {
                var e = new t(this.interactive, this.immovable, this.sleeping, this.density, this.color, this.outlineColor, this.opacity, this.collision);
                for (var n = this.vertVector.length, r = 0; r < n; r++) {
                  var i = this.vertVector[r].Copy();
                  e.vertVector.push(i);
                  var s = r * 2;
                  var a = this.handleVector[s].Copy();
                  var o = this.handleVector[s + 1].Copy();
                  e.handleVector.push(a, o);
                }
                e.completeFill = this.completeFill;
                e.drawShape();
                e.vID = this.vID;
                e.scaleY = this.scaleY;
                e.scaleX = this.scaleX;
                e.angle = this.angle;
                e.x = this.x;
                e.y = this.y;
                e.vehicleHandle = this.vehicleHandle;
                this.transferKeyedProperties(e);
                return e;
              };
              c.populateVertContainer = function () {
                this.destroyVertContainer();
                this.vertContainer = new r.kx();
                for (var e = this.vertVector.length, t = 0; t < e; t++) {
                  var n = new s.tK();
                  n.scale.x = 1 / this.scale.x;
                  n.scale.y = 1 / this.scale.y;
                  n.edgeShape = this;
                  n.vec = this.vertVector[t];
                  var i = t * 2;
                  n.handle1.vec = this.handleVector[i];
                  n.handle2.vec = this.handleVector[i + 1];
                  this.vertContainer.addChild(n);
                }
              };
              c.reverse = function () {
                var e = this.numVerts;
                this.vertVector.reverse();
                this.handleVector.reverse();
                for (var t = 0; t < e; t++) {
                  var n = this.vertVector[t];
                  n.x = -n.x;
                  var r = this.handleVector[t * 2];
                  var i = this.handleVector[t * 2 + 1];
                  r.x = -r.x;
                  i.x = -i.x;
                }
                this.drawShape();
                this.drawBoundingBox();
                this.invalidateLocalBounds();
                this.x = this.x;
                this.y = this.y;
                this.vID = s.yg.getIDCounter();
              };
              l = t;
              if (d = [{
                key: "functions",
                get: function () {
                  var e = [];
                  e.push("reverseShape");
                  e.push("resetScale");
                  if (this.groupable) {
                    e.push("groupSelected");
                  }
                  return e;
                }
              }, {
                key: "vID",
                get: function () {
                  return this._vID;
                },
                set: function (e) {
                  this._vID = e;
                  s.yg.updateIdCounter(e);
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
                    Object.defineProperty(e, o(r.key), r);
                  }
                })(l.prototype, d);
              }
              Object.defineProperty(l, "prototype", {
                writable: false
              });
              return l;
            }(i.P);
          }
    });
})();
