(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        23446(e, t, n) {
            "use strict";
        
            n.d(t, {
              _: () => p
            });
            n(62010);
            n(23792);
            n(36033);
            n(26099);
            n(47764);
            n(62953);
            n(2008);
            n(54554);
            n(23500);
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(2892);
            var r = n(98263);
            var i = n(23222);
            var s = n(4971);
            var a = n(94898);
            var o = n(34531);
            var h = n(99327);
            var l = n(35057);
            var d = n(79676);
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
            function u(e, t) {
              u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return u(e, t);
            }
            var p = function (e) {
              function t(t, n, a) {
                var d;
                if (n === undefined) {
                  n = null;
                }
                if (a === undefined) {
                  a = null;
                }
                (d = e.call(this) || this).arrows = [];
                d.arrowsLeft = 10;
                d.framesPerShot = 3;
                d.frameCount = 0;
                d.retargetCount = 0;
                d._firingAllowed = true;
                d.type = 0;
                d.targetAdd = function (e) {
                  if (e.shape2.GetMaterial() & 2) {
                    var t = e.shape2.GetBody();
                    if (d.targetDictionary.get(t)) {
                      var n = d.targetDictionary.get(t);
                      d.targetDictionary.set(t, n + 1);
                    } else {
                      d.targetDictionary.set(t, 1);
                    }
                  }
                };
                d.targetRemove = function (e) {
                  if (e.shape2.GetMaterial() & 2) {
                    var t = e.shape2.GetBody();
                    if (d.targetDictionary.get(t)) {
                      var n = d.targetDictionary.get(t);
                      if ((n -= 1) == 0) {
                        d.targetDictionary.delete(t);
                        if (d.targetBody && t == d.targetBody) {
                          d.targetBody = null;
                        }
                      } else {
                        d.targetDictionary.set(t, n);
                      }
                    }
                  }
                };
                d.targetAdd2 = function (e) {
                  if (!(e.shape2.GetUserData() instanceof o.sP) && e.shape2.GetMaterial() & 2) {
                    var t = e.shape2.GetBody();
                    if (d.targetDictionary.get(t)) {
                      var n = d.targetDictionary.get(t);
                      d.targetDictionary.set(t, n + 1);
                    } else {
                      d.targetDictionary.set(t, 1);
                    }
                  }
                };
                d.targetRemove2 = function (e) {
                  if (!(e.shape2.GetUserData() instanceof o.sP) && e.shape2.GetMaterial() & 2) {
                    var t = e.shape2.GetBody();
                    if (d.targetDictionary.get(t)) {
                      var n = d.targetDictionary.get(t);
                      if ((n -= 1) == 0) {
                        d.targetDictionary.delete(t);
                        if (d.targetBody && t == d.targetBody) {
                          d.targetBody = null;
                        }
                      } else {
                        d.targetDictionary.set(t, n);
                      }
                    }
                  }
                };
                d.checkAdd = function (e) {
                  if (d.targetBody) {
                    var t = e.shape2;
                    var n = t.m_body;
                    var r = n.GetMass();
                    var s = t.m_density;
                    if (!t.IsSensor() && (!(r > 0) || !(s < 10))) {
                      var a = d.turretBody.GetPosition();
                      var o = d.targetBody.GetWorldCenter();
                      var h = new i.Cb();
                      h.p1 = a;
                      h.p2 = o;
                      var l = new i.RM();
                      if (t.TestSegment(n.m_xf, [], l, h, 1)) {
                        d.pathClear = false;
                      }
                    }
                  } else {
                    d.pathClear = false;
                  }
                };
                d.checkPersist = function (e) {
                  if (d.targetBody) {
                    var t = e.shape2;
                    var n = t.m_body;
                    var r = n.GetMass();
                    var s = t.m_density;
                    if (!t.IsSensor() && (!(r > 0) || !(s < 10))) {
                      var a = d.turretBody.GetPosition();
                      var o = d.targetBody.GetWorldCenter();
                      var h = new i.Cb();
                      h.p1 = a;
                      h.p2 = o;
                      var l = new i.RM();
                      if (t.TestSegment(n.m_xf, [], l, h, 1)) {
                        d.pathClear = false;
                      }
                    }
                  } else {
                    d.pathClear = false;
                  }
                };
                var c = t;
                if (n) {
                  d.baseBody = n;
                }
                var u = new i.RM(c.x, c.y);
                if (a) {
                  u.Add(new i.RM(a.x, a.y));
                }
                d.createBody(u, c.rotation * Math.PI / 180, c.immovable2);
                d.framesPerShot = 23 - c.rateOfFire * 2;
                d.mc = new s.j7((0, r.zI)("Game", "ArrowGunMC"));
                d.mc.convertChildren(d.mc._pixiSprite);
                d.mc.turret.loop = false;
                d.mc.turret.gotoAndStop(1);
                d.mc.x = c.x;
                d.mc.y = c.y;
                d.mc.rotation = c.rotation;
                l.w.currentSession.level.background.addChild(d.mc);
                d.mc.pixiSprite.name = "arrow";
                d.targetDictionary = new Map();
                var p = l.w.currentSession.contactListener;
                if (c.dontShootPlayer) {
                  p.registerListener(h.fI.ADD, d.rangeSensor, d.targetAdd2);
                  p.registerListener(h.fI.REMOVE, d.rangeSensor, d.targetRemove2);
                } else {
                  p.registerListener(h.fI.ADD, d.rangeSensor, d.targetAdd);
                  p.registerListener(h.fI.REMOVE, d.rangeSensor, d.targetRemove);
                }
                l.w.currentSession.level.actionsVector.push(d);
                l.w.currentSession.level.paintItemVector.push(d);
                return d;
              }
              var n;
              var p;
              p = e;
              (n = t).prototype = Object.create(p.prototype);
              n.prototype.constructor = n;
              u(n, p);
              var m;
              var f;
              var _ = t.prototype;
              _.createBody = function (e, t, n) {
                var r = new i.m2();
                r.friction = 0.5;
                r.restitution = 0.1;
                r.filter.categoryBits = 8;
                r.filter.groupIndex = -20;
                var s = new i._A();
                s.filter.categoryBits = 8;
                s.filter.groupIndex = -20;
                s.density = 1;
                var a = l.w.currentSession;
                if (n) {
                  r.SetAsOrientedBox(14 / this.m_physScale, 8 / this.m_physScale, new i.RM(e.x / this.m_physScale, e.y / this.m_physScale), t);
                  a.level.levelBody.CreateShape(r);
                  r.isSensor = true;
                  r.SetAsOrientedBox(400 / this.m_physScale, 200 / this.m_physScale, new i.RM((e.x - Math.sin(t) * -200) / this.m_physScale, (e.y + Math.cos(t) * -200) / this.m_physScale), t);
                  this.rangeSensor = a.level.levelBody.CreateShape(r);
                  var o = this.rangeSensor.m_vertices[0];
                  var h = new i.gv();
                  var d = new i.RM((e.x - Math.sin(t) * -27) / this.m_physScale, (e.y + Math.cos(t) * -27) / this.m_physScale);
                  h.position = d;
                  h.angle = t;
                  this.turretBody = a.m_world.CreateBody(h);
                  var c = new i.RM(o.x - d.x, o.y - d.y);
                  this.targetLength = c.Length() + 0.5;
                  var u = new i.Gq();
                  u.maxMotorTorque = 10000;
                  u.collideConnected = true;
                  u.Initialize(this.turretBody, a.level.levelBody, d);
                  this.turretJoint = a.m_world.CreateJoint(u);
                } else if (this.baseBody) {
                  this.type = 2;
                  r.density = 3;
                  r.filter.groupIndex = 0;
                  r.SetAsOrientedBox(14 / this.m_physScale, 8 / this.m_physScale, new i.RM(e.x / this.m_physScale, e.y / this.m_physScale), t);
                  this.baseBody.CreateShape(r);
                  r.density = 0;
                  r.filter.groupIndex = -20;
                  r.isSensor = true;
                  r.SetAsOrientedBox(400 / this.m_physScale, 200 / this.m_physScale, new i.RM((e.x - Math.sin(t) * -200) / this.m_physScale, (e.y + Math.cos(t) * -200) / this.m_physScale), t);
                  this.rangeSensor = this.baseBody.CreateShape(r);
                  o = this.baseBody.GetWorldPoint(this.rangeSensor.m_vertices[0]);
                  h = new i.gv();
                  d = this.baseBody.GetWorldPoint(new i.RM((e.x - Math.sin(t) * -27) / this.m_physScale, (e.y + Math.cos(t) * -27) / this.m_physScale));
                  h.position = d;
                  h.angle = t;
                  this.turretBody = a.m_world.CreateBody(h);
                  s.localPosition = new i.RM(0, 0);
                  s.radius = 2 / this.m_physScale;
                  var p = this.turretBody.CreateShape(s);
                  this.turretBody.SetMassFromShapes();
                  this.turretBody.DestroyShape(p);
                  c = new i.RM(o.x - d.x, o.y - d.y);
                  this.targetLength = c.Length() + 0.5;
                  (u = new i.Gq()).maxMotorTorque = 10000;
                  u.collideConnected = true;
                  u.Initialize(this.turretBody, this.baseBody, d);
                  this.turretJoint = a.m_world.CreateJoint(u);
                } else {
                  this.type = 1;
                  r.density = 3;
                  (h = new i.gv()).position = new i.RM(e.x / this.m_physScale, e.y / this.m_physScale);
                  h.angle = t;
                  this.baseBody = a.m_world.CreateBody(h);
                  r.filter.groupIndex = 0;
                  r.SetAsBox(14 / this.m_physScale, 8 / this.m_physScale);
                  this.baseBody.CreateShape(r);
                  this.baseBody.SetMassFromShapes();
                  r.filter.groupIndex = -20;
                  r.density = 0;
                  r.isSensor = true;
                  r.SetAsOrientedBox(400 / this.m_physScale, 200 / this.m_physScale, new i.RM(0, -200 / this.m_physScale), 0);
                  this.rangeSensor = this.baseBody.CreateShape(r);
                  o = this.baseBody.GetWorldPoint(this.rangeSensor.m_vertices[0]);
                  d = new i.RM((e.x - Math.sin(t) * -27) / this.m_physScale, (e.y + Math.cos(t) * -27) / this.m_physScale);
                  h.position = d;
                  this.turretBody = a.m_world.CreateBody(h);
                  s.localPosition = new i.RM(0, 0);
                  s.radius = 2 / this.m_physScale;
                  p = this.turretBody.CreateShape(s);
                  this.turretBody.SetMassFromShapes();
                  this.turretBody.DestroyShape(p);
                  c = new i.RM(o.x - d.x, o.y - d.y);
                  this.targetLength = c.Length() + 0.5;
                  (u = new i.Gq()).maxMotorTorque = 10000;
                  u.collideConnected = true;
                  u.Initialize(this.turretBody, this.baseBody, d);
                  this.turretJoint = a.m_world.CreateJoint(u);
                }
                if (l.w.currentSession.version > 1.55) {
                  this.turretJoint.SetMotorSpeed(0);
                  this.turretJoint.EnableMotor(true);
                }
              };
              _.actions = function () {
                var e = this.turretBody.GetPosition();
                if (!this.targetBody && this._firingAllowed) {
                  if (this.targetSensor) {
                    this.removeTargetSensor();
                  }
                  this.findClosestTarget(e);
                }
                if (this.targetBody) {
                  if (this.pathClear && this.aligned && this.frameCount == 0 && this._firingAllowed) {
                    if (this.arrows.length > 9) {
                      var t = this.arrows[0];
                      this.arrows.splice(0, 1);
                      t.remoteBreak();
                    }
                    t = this.fireArrow();
                    if (this.unlimitedArrows) {
                      if (t) {
                        this.arrows.push(t);
                      }
                    } else {
                      this.arrowsLeft = this.arrowsLeft - 1;
                    }
                    this.frameCount = this.framesPerShot;
                    if (this.arrowsLeft <= 0) {
                      l.w.currentSession.level.removeFromActionsVector(this);
                      if (this.baseBody) {
                        this.baseBody.DestroyShape(this.rangeSensor);
                      } else {
                        l.w.currentSession.level.levelBody.DestroyShape(this.rangeSensor);
                      }
                      this.removeTargetSensor();
                      l.w.currentSession.m_world.DestroyBody(this.turretBody);
                      this.turretBody = null;
                      this.die();
                      return;
                    }
                  }
                  var n = this.targetBody.GetWorldCenter();
                  var r = new i.RM(n.x - e.x, n.y - e.y);
                  var s = Math.atan2(r.y, r.x) + Math.PI * 0.5;
                  this.aligned = false;
                  var a = this.turretBody.GetAngle() - s;
                  var o = Math.PI * 2;
                  if (a > Math.PI) {
                    a -= o;
                  }
                  if (a < -Math.PI) {
                    a += o;
                  }
                  if (Math.abs(a) > 0.52) {
                    s += a * 0.5;
                  } else {
                    this.aligned = true;
                  }
                  this.turretBody.SetXForm(e, s);
                  this.turretBody.SetAngularVelocity(0);
                  this.retargetCount += 1;
                  if (this.retargetCount == 5) {
                    this.findClosestTarget(e);
                  }
                }
                this.pathClear = true;
                this.frameCount = Math.max(0, this.frameCount - 1);
              };
              _.findClosestTarget = function (e) {
                var t = this;
                this.retargetCount = 0;
                var n = 1000000;
                this.targetDictionary.forEach(function (r, s) {
                  var a = s;
                  var o = a.GetWorldCenter();
                  var h = new i.RM(o.x - e.x, o.y - e.y).LengthSquared();
                  if (h < n) {
                    n = h;
                    t.targetBody = a;
                  }
                });
                if (this.targetBody && !this.targetSensor) {
                  this.createTargetSensor(this.targetLength);
                }
              };
              _.createTargetSensor = function (e) {
                var t = new i.m2();
                t.isSensor = true;
                t.density = 1e-7;
                t.filter.categoryBits = 8;
                t.filter.groupIndex = -20;
                var n = e * 0.5;
                t.SetAsOrientedBox(2 / this.m_physScale, n, new i.RM(0, -n), 0);
                this.targetSensor = this.turretBody.CreateShape(t);
                this.turretBody.SetMassFromShapes();
                var r = l.w.currentSession.contactListener;
                r.registerListener(h.fI.ADD, this.targetSensor, this.checkAdd);
                r.registerListener(h.fI.PERSIST, this.targetSensor, this.checkPersist);
                this.pathClear = false;
                this.turretJoint.EnableMotor(false);
              };
              _.removeTargetSensor = function () {
                var e = l.w.currentSession.contactListener;
                e.deleteListener(h.fI.ADD, this.targetSensor);
                e.deleteListener(h.fI.PERSIST, this.targetSensor);
                this.turretBody.DestroyShape(this.targetSensor);
                this.targetSensor = null;
                this.turretJoint.SetMotorSpeed(0);
                this.turretJoint.EnableMotor(true);
              };
              _.fireArrow = function () {
                var e = 2000 / this.m_physScale;
                var t = this.targetBody.GetLinearVelocity();
                var n = this.targetBody.GetWorldCenter();
                var r = this.turretBody.GetPosition();
                if (this.baseBody) {
                  var s = this.baseBody.GetLinearVelocityFromWorldPoint(r);
                  t.Subtract(s);
                }
                var o = Math.pow(t.x, 2) + Math.pow(t.y, 2) - Math.pow(e, 2);
                var h = (t.x * (n.x - r.x) + t.y * (n.y - r.y)) * 2;
                var l = Math.pow(n.x - r.x, 2) + Math.pow(n.y - r.y, 2);
                var c = Math.pow(h, 2) - o * 4 * l;
                if (c < 0) {
                  return null;
                }
                var u = (-h + Math.sqrt(c)) / (o * 2);
                var p = (-h - Math.sqrt(c)) / (o * 2);
                u = u < 0 ? 10000 : u;
                p = p < 0 ? 10000 : p;
                var m = Math.min(u, p);
                var f = m * t.x + n.x;
                var _ = m * t.y + n.y;
                var v = new i.RM(f - r.x, _ - r.y);
                var y = Math.atan2(v.y, v.x);
                var g = new i.RM(e * Math.cos(y), e * Math.sin(y));
                if (s) {
                  g.Add(s);
                }
                var w = new a.i3(r, y, g, this.mc.parent.getChildIndex(this.mc));
                d.m.instance.playAreaSoundInstance("ArrowFire" + Math.ceil(Math.random() * 2), this.turretBody);
                this.mc.turret.gotoAndPlay(2);
                return w;
              };
              _.paint = function () {
                if (this.type == 1) {
                  var e = this.baseBody.GetInterpolatedWorldCenter();
                  this.mc.x = e.x * this.m_physScale;
                  this.mc.y = e.y * this.m_physScale;
                  this.mc.rotation = this.baseBody.GetInterpolatedAngle() * t.oneEightyOverPI % 360;
                }
                if (this.turretBody) {
                  this.mc.turret.pixiMovieClip.rotation = (this.turretBody.GetInterpolatedAngle() * t.oneEightyOverPI - (this.mc.rotation + this.mc.parent.parent.rotation)) * 0.0174533;
                }
              };
              _.getJointBody = function (e = null) {
                return this.baseBody;
              };
              _.die = function () {
                var e = l.w.currentSession.contactListener;
                e.deleteListener(h.fI.ADD, this.rangeSensor);
                e.deleteListener(h.fI.REMOVE, this.rangeSensor);
                if (this.targetSensor) {
                  e.deleteListener(h.fI.ADD, this.targetSensor);
                  e.deleteListener(h.fI.PERSIST, this.targetSensor);
                }
                this.targetDictionary = null;
                this.arrows = null;
              };
              m = t;
              if (f = [{
                key: "groupDisplayObject",
                get: function () {
                  return this.mc;
                }
              }, {
                key: "firingAllowed",
                get: function () {
                  return this._firingAllowed;
                },
                set: function (e) {
                  this._firingAllowed = e;
                  if (!this._firingAllowed) {
                    this.targetBody &&= null;
                    if (this.targetSensor) {
                      this.removeTargetSensor();
                    }
                  }
                }
              }, {
                key: "unlimitedArrows",
                get: function () {
                  return this._unlimitedArrows;
                },
                set: function (e) {
                  this._unlimitedArrows = e;
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
                })(m.prototype, f);
              }
              Object.defineProperty(m, "prototype", {
                writable: false
              });
              return m;
            }(n(2282).o);
          },
        44386(e, t, n) {
            "use strict";
        
            n.d(t, {
              o: () => c
            });
            n(2008);
            var r = n(98263);
            var i = n(23222);
            var s = n(4971);
            var a = n(34531);
            var o = n(99327);
            var h = n(35057);
            var l = n(79676);
            function d(e, t) {
              d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return d(e, t);
            }
            var c = function (e) {
              function t(t, n, i) {
                var d;
                if (n === undefined) {
                  n = null;
                }
                if (i === undefined) {
                  i = null;
                }
                (d = e.call(this) || this).checkContact = function (e) {
                  var t = h.w.currentSession;
                  if (e.shape2.GetMaterial() & 2) {
                    var n = e.shape2.GetUserData();
                    if (n instanceof a.sP) {
                      if (!n.dead) {
                        t.contactListener.deleteListener(o.fI.ADD, d._shape);
                        l.m.instance.playAreaSoundInstance("Bleep3", d._body);
                        h.w.currentSession.level.singleActionVector.push(d);
                      }
                    }
                  }
                };
                var c = t;
                d.mc = new s.j7((0, r.zI)("Game", "CoinMC"));
                d.mc.convertChildren(d.mc._pixiSprite);
                d.mc.x = t.x;
                d.mc.y = t.y;
                d.mc.container.gotoAndStop(c.tokenType);
                h.w.currentSession.level.background.addChild(d.mc);
                d.createBody(c);
                return d;
              }
              var n;
              var c;
              c = e;
              (n = t).prototype = Object.create(c.prototype);
              n.prototype.constructor = n;
              d(n, c);
              var u = t.prototype;
              u.createBody = function (e) {
                var t = new i.gv();
                t.position = new i.RM(e.x / this.m_physScale, e.y / this.m_physScale);
                var n = new i._A();
                n.isSensor = true;
                n.radius = 23 / this.m_physScale;
                n.filter.categoryBits = 8;
                this._body = h.w.currentSession.m_world.CreateBody(t);
                this._shape = this._body.CreateShape(n);
                h.w.currentSession.contactListener.registerListener(o.fI.ADD, this._shape, this.checkContact);
              };
              u.singleAction = function () {
                h.w.currentSession.level.tokenFound();
                h.w.currentSession.level.background.removeChild(this.mc);
                h.w.currentSession.m_world.DestroyBody(this._body);
                this._body = null;
              };
              return t;
            }(n(2282).o);
          }
    });
})();
