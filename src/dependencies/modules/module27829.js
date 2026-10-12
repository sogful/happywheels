(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        27829(e, t, n) {
            "use strict";
        
            n.d(t, {
              i3: () => m,
              _u: () => f._,
              Ld: () => y,
              Fj: () => x,
              uW: () => T,
              l4: () => S,
              mm: () => k,
              t6: () => M,
              a2: () => I,
              sW: () => B,
              sQ: () => N,
              Gj: () => U,
              Qj: () => H,
              gg: () => W,
              EK: () => q,
              H: () => Z,
              z5: () => Q,
              nd: () => te,
              Av: () => ie,
              Ee: () => ae,
              gi: () => le,
              dP: () => ue,
              Cy: () => fe,
              tG: () => ye,
              fj: () => xe,
              aR: () => Ae,
              S3: () => Ee,
              jX: () => ke,
              hM: () => Me,
              qV: () => Le,
              xH: () => Be,
              kk: () => Ne,
              P5: () => Ue,
              TV: () => st,
              XI: () => ze,
              fI: () => Ye,
              G8: () => Ze,
              ou: () => $e.o,
              zH: () => nt,
              e7: () => ht,
              cA: () => dt
            });
            n(23792);
            n(36033);
            n(26099);
            n(47764);
            n(62953);
            n(2008);
            n(54554);
            var r = n(79676);
            var i = n(99327);
            var s = n(4971);
            var a = n(94898);
            var o = n(23222);
            var h = n(34531);
            var l = n(80455);
            var d = n(2282);
            var c = n(35057);
            var u = n(98263);
            function p(e, t) {
              p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return p(e, t);
            }
            var m = function (e) {
              function t(t, n, a, o) {
                var h;
                (h = e.call(this) || this).tempVisible = false;
                h.checkAdd = function (e) {
                  var t = e.shape2.GetBody();
                  if (e.shape2.GetMaterial() & 6 || t.GetMass() == 0) {
                    if (!e.shape2.IsSensor()) {
                      h.bodiesToAdd.push(t);
                      h.add = true;
                    }
                  }
                };
                h.checkRemove = function (e) {
                  var t = e.shape2.GetBody();
                  if (e.shape2.GetMaterial() & 6 || t.GetMass() == 0) {
                    if (!e.shape2.IsSensor()) {
                      if (h.bjDictionary.get(t) || h.bodiesToAdd.indexOf(t) > -1) {
                        h.bodiesToRemove.push(t);
                        h.remove = true;
                      }
                    }
                  }
                };
                h.fleshSoundStopped = function (e) {
                  h.fleshSound.removeEventListener(r.Gm.AREA_SOUND_STOP, h.fleshSoundStopped);
                  h.fleshSound = null;
                };
                h.solidSoundStopped = function (e) {
                  h.solidSound.removeEventListener(r.Gm.AREA_SOUND_STOP, h.solidSoundStopped);
                  h.solidSound = null;
                };
                h.arrowResultHandler = function (e) {
                  if (e.impulse > 1) {
                    h.die();
                    var t = c.w.currentSession;
                    t.level.removeFromPaintBodyVector(h.arrowBody);
                    t.level.removeFromActionsVector(h);
                    t.level.singleActionVector.push(h);
                  }
                };
                h.mc = new s.j7();
                h.mc.setPixiMovieClip((0, u.zI)("Game", "ArrowMC"), true);
                h.mc.gotoAndStop(1);
                h.mc.x = t.x * h.m_physScale;
                h.mc.y = t.y * h.m_physScale;
                h.mc.rotation = n * 180 / Math.PI;
                h.mc.visible = false;
                h.tempVisible = false;
                c.w.currentSession.level.background.addChildAt(h.mc, o);
                h.createBody(t, n, a);
                h.arrowBody.SetUserData(h.mc);
                h.bodiesToAdd = [];
                h.bodiesToRemove = [];
                h.bjDictionary = new Map();
                h.countDictionary = new Map();
                var l = c.w.currentSession.contactListener;
                l.registerListener(i.fI.ADD, h.sensorShape, h.checkAdd);
                l.registerListener(i.fI.REMOVE, h.sensorShape, h.checkRemove);
                var d = c.w.currentSession.level;
                d.singleActionVector.push(h);
                d.actionsVector.push(h);
                d.paintBodyVector.push(h.arrowBody);
                return h;
              }
              var n;
              var d;
              d = e;
              (n = t).prototype = Object.create(d.prototype);
              n.prototype.constructor = n;
              p(n, d);
              var m = t.prototype;
              m.createBody = function (e, t, n) {
                var r = c.w.currentSession;
                var i = new o.gv();
                i.position = e;
                i.angle = t;
                this.arrowBody = r.m_world.CreateBody(i);
                var s = new o.m2();
                s.SetAsOrientedBox(10 / this.m_physScale, 1 / this.m_physScale, new o.RM(16.5 / this.m_physScale, 0));
                s.isSensor = true;
                s.density = 1;
                s.filter.categoryBits = 8;
                s.filter.groupIndex = -21;
                this.sensorShape = this.arrowBody.CreateShape(s);
                s.SetAsOrientedBox(16.5 / this.m_physScale, 1 / this.m_physScale, new o.RM(-10 / this.m_physScale, 0));
                s.isSensor = false;
                s.filter.groupIndex = 0;
                this.solidShape = this.arrowBody.CreateShape(s);
                this.arrowBody.SetMassFromShapes();
                this.arrowBody.SetLinearVelocity(n);
              };
              m.actions = function () {
                if (this.add) {
                  for (var e = 0; e < this.bodiesToAdd.length; e++) {
                    this.createPrisJoint(this.bodiesToAdd[e]);
                  }
                  this.bodiesToAdd = [];
                  this.add = false;
                }
                if (this.remove) {
                  for (e = 0; e < this.bodiesToRemove.length; e++) {
                    this.removeJoint(this.bodiesToRemove[e]);
                  }
                  this.bodiesToRemove = [];
                  this.remove = false;
                }
              };
              m.singleAction = function () {
                if (this.tempVisible) {
                  this.broken = true;
                  c.w.currentSession.m_world.DestroyBody(this.arrowBody);
                  this.tempVisible = false;
                  var e = this.mc.parent;
                  c.w.currentSession.particleController.createArrowSnap(this.arrowBody, this.mc.currentFrame, e, e.getChildIndex(this.mc));
                  e.removeChild(this.mc);
                  var t = Math.ceil(Math.random() * 2);
                  r.m.instance.playAreaSoundInstance("ArrowSnap" + t, this.arrowBody);
                  this.arrowBody = null;
                } else {
                  this.mc.visible = true;
                  this.tempVisible = true;
                }
              };
              m.createPrisJoint = function (e) {
                var t = e.GetShapeList();
                if (this.bjDictionary.get(e)) {
                  var n = this.countDictionary.get(e);
                  this.countDictionary.set(e, n + 1);
                } else {
                  var i = c.w.currentSession;
                  var s = new o.iE();
                  var d = this.arrowBody.GetWorldPoint(new o.RM(13.25 / this.m_physScale, 0));
                  var u = this.arrowBody.GetAngle();
                  var p = new o.RM(Math.cos(u), Math.sin(u));
                  s.Initialize(this.arrowBody, e, d, p);
                  s.enableLimit = true;
                  s.upperTranslation = 0;
                  s.lowerTranslation = 0;
                  s.collideConnected = true;
                  s.enableMotor = true;
                  s.maxMotorForce = 100000;
                  s.motorSpeed = 0;
                  s.userData = h.sP.ARROW_JOINT;
                  this.bjDictionary.set(e, i.m_world.CreateJoint(s));
                  this.countDictionary.set(e, 1);
                  if (!this.previousBody) {
                    i.contactListener.registerListener(l.jp.RESULT, this.solidShape, this.arrowResultHandler);
                  }
                  if (e != this.previousBody) {
                    this.previousBody = e;
                    if (t.GetMaterial() & 6) {
                      var m;
                      var f = t.GetUserData();
                      if (f instanceof h.sP) {
                        f.shapeImpale(t, true, d, 0.01);
                        i.particleController.createPointBloodBurst(d.x * this.m_physScale, d.y * this.m_physScale, 5, 15, 20);
                        this.mc.gotoAndStop(Math.ceil(Math.random() * 5) + 1);
                      } else if (f instanceof a.S3) {
                        f.shapeImpale(t, true);
                        i.particleController.createPointBloodBurst(d.x * this.m_physScale, d.y * this.m_physScale, 5, 15, 20);
                        this.mc.gotoAndStop(Math.ceil(Math.random() * 5) + 1);
                      } else if (f instanceof a.EK) {
                        m = f.particleType;
                        i.particleController.createPointBurst(m, d.x * this.m_physScale, d.y * this.m_physScale, 5, 15, 20);
                      }
                      if (!this.fleshSound) {
                        var _ = Math.ceil(Math.random() * 3);
                        this.fleshSound = r.m.instance.playAreaSoundInstance("ArrowFlesh" + _, this.arrowBody);
                        if (this.fleshSound) {
                          this.fleshSound.addEventListener(r.Gm.AREA_SOUND_STOP, this.fleshSoundStopped, false, 0, true);
                        }
                      }
                    } else {
                      var v = this.arrowBody.GetLinearVelocity().LengthSquared();
                      if (!this.solidSound && v > 9) {
                        _ = Math.ceil(Math.random() * 2);
                        this.solidSound = r.m.instance.playAreaSoundInstance("ArrowSolid" + _, this.arrowBody);
                        if (this.solidSound) {
                          this.solidSound.addEventListener(r.Gm.AREA_SOUND_STOP, this.solidSoundStopped, false, 0, true);
                        }
                      }
                    }
                  }
                }
              };
              m.removeJoint = function (e) {
                var t = this.countDictionary.get(e);
                if ((t -= 1) == 0) {
                  var n = this.bjDictionary.get(e);
                  c.w.currentSession.m_world.DestroyJoint(n);
                  this.bjDictionary.delete(e);
                  this.countDictionary.delete(e);
                } else {
                  this.countDictionary.set(e, t);
                }
              };
              m.remoteBreak = function () {
                if (!this.broken) {
                  this.broken = true;
                  this.die();
                  var e = c.w.currentSession;
                  e.level.removeFromPaintBodyVector(this.arrowBody);
                  e.level.removeFromActionsVector(this);
                  var t = e.level.singleActionVector;
                  var n = t.indexOf(this);
                  if (n > -1) {
                    t.splice(n, 1);
                  }
                  c.w.currentSession.m_world.DestroyBody(this.arrowBody);
                  this.tempVisible = false;
                  var i = this.mc.parent;
                  c.w.currentSession.particleController.createArrowSnap(this.arrowBody, this.mc.currentFrame, i, i.getChildIndex(this.mc));
                  i.removeChild(this.mc);
                  var s = Math.ceil(Math.random() * 2);
                  r.m.instance.playAreaSoundInstance("ArrowSnap" + s, this.arrowBody);
                }
              };
              m.die = function () {
                var e = c.w.currentSession;
                if (this.fleshSound) {
                  this.fleshSound.removeEventListener(r.Gm.AREA_SOUND_STOP, this.fleshSoundStopped);
                  this.fleshSound = null;
                }
                if (this.solidSound) {
                  this.solidSound.removeEventListener(r.Gm.AREA_SOUND_STOP, this.solidSoundStopped);
                  this.solidSound = null;
                }
                this.add = false;
                this.remove = false;
                this.bodiesToAdd = null;
                this.bodiesToRemove = null;
                this.bjDictionary = null;
                this.countDictionary = null;
                e.contactListener.deleteListener(i.fI.ADD, this.sensorShape);
                e.contactListener.deleteListener(i.fI.REMOVE, this.sensorShape);
                e.contactListener.deleteListener(i.fI.RESULT, this.solidShape);
              };
              return t;
            }(d.o);
            var f = n(23446);
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
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(2892);
            var y = function (e) {
              function t(t, n, a) {
                var h;
                if (n === undefined) {
                  n = null;
                }
                if (a === undefined) {
                  a = null;
                }
                (h = e.call(this) || this).bladeOffset = new o.RM(0, 0);
                h.weaponPosOffset = new o.RM(0, 0);
                h.weaponAngleOffset = 0;
                h.checkAdd = function (e) {
                  var t = e.shape2.GetBody();
                  if (e.shape2.GetMaterial() & 6 || t.GetMass() == 0) {
                    if (!e.shape2.IsSensor() && t.GetMass() != 0) {
                      h.bodiesToAdd.push(t);
                      h.add = true;
                    }
                  }
                };
                h.checkRemove = function (e) {
                  var t = e.shape2.GetBody();
                  if (e.shape2.GetMaterial() & 6 || t.GetMass() == 0) {
                    if (!e.shape2.IsSensor()) {
                      if (h.bjDictionary.get(t) || h.bodiesToAdd.indexOf(t) > -1) {
                        h.bodiesToRemove.push(t);
                        h.remove = true;
                      }
                    }
                  }
                };
                h.fleshSoundStopped = function (e) {
                  h.fleshSound.removeEventListener(r.Gm.AREA_SOUND_STOP, h.fleshSoundStopped);
                  h.fleshSound = null;
                };
                h.solidSoundStopped = function (e) {
                  h.solidSound.removeEventListener(r.Gm.AREA_SOUND_STOP, h.solidSoundStopped);
                  h.solidSound = null;
                };
                var l = t;
                h.mc = new s.j7();
                h.mc.setPixiMovieClip((0, u.zI)("Game", "BladeWeaponMC"));
                var d = new s.j7();
                d.setPixiMovieClip((0, u.zI)("Game", "BladeWeaponMaskMC"));
                d.gotoAndStop(l.bladeWeaponType);
                h.maskSprite = d;
                h.mc.gotoAndStop(l.bladeWeaponType);
                h.isSword = [2, 3, 5, 7].indexOf(l.bladeWeaponType) > -1;
                h.mc.x = l.x;
                h.mc.y = l.y;
                h.mc.rotation = l.rotation;
                if (l.reverse) {
                  h.mc.scaleX *= -1;
                }
                c.w.currentSession.level.background.addChild(h.mc);
                if (!l.interactive) {
                  return function (e) {
                    if (e === undefined) {
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    }
                    return e;
                  }(h);
                }
                if (n) {
                  h.weaponBody = n;
                }
                var p = new o.RM(l.x, l.y);
                if (a) {
                  p.Add(new o.RM(a.x, a.y));
                }
                h.createBody(l, p);
                h.bodiesToAdd = [];
                h.bodiesToRemove = [];
                h.bjDictionary = new Map();
                h.countDictionary = new Map();
                var m = c.w.currentSession.contactListener;
                m.registerListener(i.fI.ADD, h.sensorShape, h.checkAdd);
                m.registerListener(i.fI.REMOVE, h.sensorShape, h.checkRemove);
                var f = c.w.currentSession.level;
                f.actionsVector.push(h);
                if (!n) {
                  f.paintItemVector.push(h);
                }
                h.solidShape;
                return h;
              }
              var n;
              var l;
              l = e;
              (n = t).prototype = Object.create(l.prototype);
              n.prototype.constructor = n;
              v(n, l);
              var d;
              var p;
              var m = t.prototype;
              m.createBody = function (e, t) {
                var n = c.w.currentSession.m_world;
                var r = e.rotation * Math.PI / 180;
                var i = new s.j7();
                i.setPixiMovieClip((0, u.zI)("Game", "BladeWeaponShapesMC"), true);
                i.gotoAndStop(e.bladeWeaponType);
                var a = new o.m2();
                a.friction = 0.75;
                a.restitution = 0.1;
                a.filter.categoryBits = 8;
                a.density = 0.5;
                a.isSensor = true;
                var h = e.reverse ? -1 : 1;
                i.blade.x *= h;
                i.handle.x *= h;
                i.blade.rotation *= h;
                if (this.weaponBody) {
                  var l = new s.uq();
                  l.rotate(i.blade.rotation * Math.PI / 180);
                  l.translate(i.blade.x / this.m_physScale, i.blade.y / this.m_physScale);
                  l.rotate(r);
                  l.translate(t.x / this.m_physScale, t.y / this.m_physScale);
                  var d = (i.blade.rotation + e.rotation) * Math.PI / 180;
                  this.bladeOffset = new o.RM(l.tx, l.ty);
                  a.SetAsOrientedBox(i.blade.scaleX * 100 / 2 / this.m_physScale, i.blade.scaleY * 100 / 2 / this.m_physScale, this.bladeOffset, d);
                  this.sensorShape = this.weaponBody.CreateShape(a);
                  a.filter.maskBits = 8;
                  a.isSensor = false;
                  this.solidShape = this.weaponBody.CreateShape(a);
                  a.filter.maskBits = 65535;
                  this.bladeAngle = this.weaponBody.GetAngle() + d;
                  (l = new s.uq()).rotate(i.handle.rotation * Math.PI / 180);
                  l.translate(i.handle.x / this.m_physScale, i.handle.y / this.m_physScale);
                  l.rotate(r);
                  l.translate(t.x / this.m_physScale, t.y / this.m_physScale);
                  d = (i.handle.rotation + e.rotation) * Math.PI / 180;
                  this.weaponAngleOffset = d;
                  this.weaponPosOffset = new o.RM(l.tx, l.ty);
                  a.SetAsOrientedBox(i.handle.scaleX * 100 / 2 / this.m_physScale, i.handle.scaleY * 100 / 2 / this.m_physScale, new o.RM(l.tx, l.ty), d);
                  this.handleShape = this.weaponBody.CreateShape(a);
                } else {
                  var p = new o.gv();
                  p.position = new o.RM(t.x / this.m_physScale, t.y / this.m_physScale);
                  p.angle = r;
                  p.isSleeping = e.sleeping;
                  this.weaponBody = n.CreateBody(p);
                  this.bladeOffset = new o.RM(i.blade.x / this.m_physScale, i.blade.y / this.m_physScale);
                  a.SetAsOrientedBox(i.blade.scaleX * 100 / 2 / this.m_physScale, i.blade.scaleY * 100 / 2 / this.m_physScale, this.bladeOffset, i.blade.rotation * Math.PI / 180);
                  this.sensorShape = this.weaponBody.CreateShape(a);
                  a.filter.maskBits = 8;
                  a.isSensor = false;
                  this.solidShape = this.weaponBody.CreateShape(a);
                  a.filter.maskBits = 65535;
                  this.bladeAngle = r + i.blade.rotation * Math.PI / 180;
                  a.SetAsOrientedBox(i.handle.scaleX * 100 / 2 / this.m_physScale, i.handle.scaleY * 100 / 2 / this.m_physScale, new o.RM(i.handle.x / this.m_physScale, i.handle.y / this.m_physScale));
                  this.handleShape = this.weaponBody.CreateShape(a);
                  this.weaponBody.SetMassFromShapes();
                  this.weaponBody.SetUserData(this.mc);
                }
              };
              m.createPrisJoint = function (e) {
                var t = e.GetShapeList();
                if ((_ = t.GetUserData()) instanceof h.sP || _ instanceof a.S3) {
                  _.shapeImpale(t);
                }
                if (this.bjDictionary.get(e)) {
                  var n = this.countDictionary.get(e);
                  this.countDictionary.set(e, n + 1);
                } else {
                  var i = c.w.currentSession;
                  var s = new o.iE();
                  var l = this.weaponBody.GetWorldCenter();
                  var d = this.weaponBody.GetAngle() - this.bladeAngle + Math.PI / 2;
                  var u = new o.RM(Math.cos(d), Math.sin(d));
                  s.Initialize(this.weaponBody, e, l, u);
                  s.enableLimit = true;
                  s.upperTranslation = 0;
                  s.lowerTranslation = 0;
                  s.collideConnected = true;
                  s.userData = h.sP.IMPALE_JOINT;
                  s.enableMotor = true;
                  s.maxMotorForce = 100000;
                  s.motorSpeed = 0;
                  this.bjDictionary.set(e, i.m_world.CreateJoint(s));
                  this.countDictionary.set(e, 1);
                  if (e != this.previousBody) {
                    this.previousBody = e;
                    if (t.GetMaterial() & 6) {
                      var p;
                      var m;
                      var f;
                      var _;
                      if ((_ = t.GetUserData()) instanceof h.sP) {
                        m = 50;
                        _.shapeImpale(t, true, l, 0.01);
                        f = e.GetWorldCenter();
                        i.particleController.createPointBloodBurst(f.x * this.m_physScale, f.y * this.m_physScale, 5, 15, m);
                      } else if (_ instanceof a.S3) {
                        m = 50;
                        _.shapeImpale(t, true);
                        f = e.GetWorldCenter();
                        i.particleController.createPointBloodBurst(f.x * this.m_physScale, f.y * this.m_physScale, 5, 15, m);
                      } else if (_ instanceof a.EK) {
                        var v = _;
                        p = v.particleType;
                        m = 25;
                        f = e.GetWorldCenter();
                        i.particleController.createPointBurst(p, f.x * this.m_physScale, f.y * this.m_physScale, 5, 15, m);
                      }
                      this.paintBlood(f.x * this.m_physScale, f.y * this.m_physScale, v);
                      if (!this.fleshSound) {
                        var y = Math.ceil(Math.random() * 3);
                        this.fleshSound = r.m.instance.playAreaSoundInstance("BladeFlesh" + y, this.weaponBody);
                        if (this.fleshSound) {
                          this.fleshSound.addEventListener(r.Gm.AREA_SOUND_STOP, this.fleshSoundStopped, false, 0, true);
                        }
                      }
                    } else {
                      var g = this.weaponBody.GetLinearVelocity().LengthSquared();
                      if (!this.solidSound && g > 9) {
                        y = Math.ceil(Math.random() * 3);
                        this.solidSound = r.m.instance.playAreaSoundInstance("BladeSolid" + y, this.weaponBody);
                        if (this.solidSound) {
                          this.solidSound.addEventListener(r.Gm.AREA_SOUND_STOP, this.solidSoundStopped, false, 0, true);
                        }
                      }
                    }
                  }
                }
              };
              m.actions = function () {
                if (this.add) {
                  for (var e = 0; e < this.bodiesToAdd.length; e++) {
                    this.createPrisJoint(this.bodiesToAdd[e]);
                  }
                  this.bodiesToAdd = [];
                  this.add = false;
                }
                if (this.remove) {
                  for (e = 0; e < this.bodiesToRemove.length; e++) {
                    this.removeJoint(this.bodiesToRemove[e]);
                  }
                  this.bodiesToRemove = [];
                  this.remove = false;
                }
              };
              m.removeJoint = function (e) {
                var t = this.countDictionary.get(e);
                if ((t -= 1) == 0) {
                  var n = this.bjDictionary.get(e);
                  c.w.currentSession.m_world.DestroyJoint(n);
                  this.bjDictionary.delete(e);
                  this.countDictionary.delete(e);
                } else {
                  this.countDictionary.set(e, t);
                }
              };
              m.die = function () {
                var e = c.w.currentSession;
                if (this.fleshSound) {
                  this.fleshSound.removeEventListener(r.Gm.AREA_SOUND_STOP, this.fleshSoundStopped);
                  this.fleshSound = null;
                }
                if (this.solidSound) {
                  this.solidSound.removeEventListener(r.Gm.AREA_SOUND_STOP, this.solidSoundStopped);
                  this.solidSound = null;
                }
                this.add = false;
                this.remove = false;
                this.bodiesToAdd = null;
                this.bodiesToRemove = null;
                this.bjDictionary = null;
                this.countDictionary = null;
                e.contactListener.deleteListener(i.fI.ADD, this.sensorShape);
                e.contactListener.deleteListener(i.fI.REMOVE, this.sensorShape);
                e.contactListener.deleteListener(i.fI.RESULT, this.handleShape);
              };
              m.getJointBody = function (e = null) {
                return this.weaponBody;
              };
              m.paintBlood = function (e, t, n) {
                if (c.w.bloodSetting !== 0) {
                  var r = new s.bR(e, t);
                  r = c.w.currentSession.level.background.localToGlobalUnpatched(r);
                  r = this.mc.globalToLocal(r);
                  var i = new s.j7((0, u.zI)("Game", "BladeBloodMC"));
                  i.convertChildren(i._pixiSprite);
                  i.inner.x = r.x;
                  i.inner.y = r.y;
                  i.inner.rotation = Math.random() * 360;
                  if (Math.random() > 0.5) {
                    i.inner.scaleX = -1;
                  }
                  this.bloodContainer ||= new s.kx();
                  this.mc.addChild(this.bloodContainer);
                  this.bloodContainer.addChild(i);
                  this.mc.addChild(this.maskSprite);
                  this.bloodContainer.mask = this.maskSprite;
                }
              };
              m.paint = function () {
                var e = this.weaponBody.GetInterpolatedWorldPoint(this.weaponPosOffset);
                this.mc.rotation = this.weaponBody.GetInterpolatedAngle() * t.oneEightyOverPI % 360 + this.weaponAngleOffset;
                this.mc.x = e.x * this.m_physScale;
                this.mc.y = e.y * this.m_physScale;
              };
              m.triggerSingleActivation = function (e, t, n) {
                if (t == "wake from sleep") {
                  if (this.weaponBody) {
                    this.weaponBody.WakeUp();
                  }
                } else if (t == "apply impulse" && this.weaponBody) {
                  var r = n[0];
                  var i = n[1];
                  var s = this.weaponBody.GetMass();
                  this.weaponBody.ApplyImpulse(new o.RM(r * s, i * s), this.weaponBody.GetWorldCenter());
                  var a = n[2];
                  var h = this.weaponBody.GetAngularVelocity();
                  this.weaponBody.SetAngularVelocity(h + a);
                }
              };
              d = t;
              if (p = [{
                key: "groupDisplayObject",
                get: function () {
                  return this.mc;
                }
              }, {
                key: "bodyList",
                get: function () {
                  if (this.weaponBody) {
                    return [this.weaponBody];
                  } else {
                    return [];
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
                    Object.defineProperty(e, _(r.key), r);
                  }
                })(d.prototype, p);
              }
              Object.defineProperty(d, "prototype", {
                writable: false
              });
              return d;
            }(d.o);
            function g(e) {
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
            function w(e, t) {
              w = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return w(e, t);
            }
            var x = function (e) {
              function t(t, n, s) {
                var a;
                if (n === undefined) {
                  n = null;
                }
                if (s === undefined) {
                  s = null;
                }
                (a = e.call(this) || this)._crackImpulse = 6.5;
                a._shatterImpulse = 17.5;
                a._break = false;
                a.checkContact = function (e) {
                  if (e.impulse > a._crackImpulse) {
                    if (e.impulse > a._shatterImpulse) {
                      c.w.currentSession.contactListener.deleteListener(i.fI.ADD, a._shape);
                      a._break = true;
                    }
                    a._crackImpulse = a._shatterImpulse;
                    c.w.currentSession.contactListener.deleteListener(l.jp.RESULT, a._shape);
                    c.w.currentSession.level.singleActionVector.push(a);
                  }
                };
                a.checkAdd = function (e) {
                  if (!e.shape2.m_isSensor) {
                    var t = e.shape2.m_body.m_mass;
                    if (t == 0 || !(t < a._body.m_mass)) {
                      var n = o.x5.b2Dot(e.velocity, e.normal);
                      if ((n = Math.abs(n)) > 4) {
                        r.m.instance.playAreaSoundInstance("BoomboxHit", a._body);
                      }
                    }
                  }
                };
                a.createBody(t);
                return a;
              }
              var n;
              var a;
              a = e;
              (n = t).prototype = Object.create(a.prototype);
              n.prototype.constructor = n;
              w(n, a);
              var h;
              var d;
              var p = t.prototype;
              p.createBody = function (e) {
                var t = c.w.currentSession.level;
                var n = t.background;
                var r = e;
                r = r.clone();
                var a = new s.j7();
                a.setPixiMovieClip((0, u.zI)("Game", "BoomboxShardsMC"));
                c.w.currentSession.particleController.createBMDArray("boomboxshards", a);
                this._interactive = r.interactive;
                this.mc = new s.j7();
                this.mc.setPixiMovieClip((0, u.zI)("Game", "BoomboxMC"));
                this.mc.gotoAndStop(1);
                n.addChild(this.mc);
                this.mc.x = e.x;
                this.mc.y = e.y;
                this.mc.rotation = e.rotation;
                if (this._interactive) {
                  var h = new o.RM(r.x, r.y);
                  var l = r.rotation;
                  var d = new o.gv();
                  var p = new o.m2();
                  p.density = 2;
                  p.friction = 0.3;
                  p.filter.categoryBits = 8;
                  p.restitution = 0.1;
                  p.SetAsBox(24 / this.m_physScale, 14 / this.m_physScale);
                  d.position.Set(h.x / this.m_physScale, h.y / this.m_physScale);
                  d.angle = l * Math.PI / 180;
                  d.isSleeping = r.sleeping;
                  var m = this._body = c.w.currentSession.m_world.CreateBody(d);
                  this._shape = m.CreateShape(p);
                  m.SetMassFromShapes();
                  t.paintBodyVector.push(m);
                  m.SetUserData(this.mc);
                  c.w.currentSession.contactListener.registerListener(i.fI.RESULT, this._shape, this.checkContact);
                  c.w.currentSession.contactListener.registerListener(i.fI.ADD, this._shape, this.checkAdd);
                }
              };
              p.singleAction = function () {
                if (!this._break) {
                  var e = Math.ceil(Math.random() * 2);
                  c.w.currentSession.contactListener.registerListener(i.fI.RESULT, this._shape, this.checkContact);
                  r.m.instance.playAreaSoundInstance("BoomboxCrush1", this._body);
                  c.w.currentSession.particleController.createRectBurst("boomboxshards", 8, this._body, 15);
                  e = 1 + Math.ceil(Math.random() * 3);
                  this.mc.gotoAndStop(e);
                  this._break = true;
                  return;
                }
                this.shatter();
              };
              p.getJointBody = function (e = null) {
                return this._body;
              };
              p.shatter = function () {
                var e = c.w.currentSession;
                var t = e.level;
                var n = e.m_world;
                c.w.currentSession.particleController.createRectBurst("boomboxshards", 10, this._body, 30);
                var i = Math.ceil(Math.random() * 2);
                r.m.instance.playAreaSoundInstance("BoomboxSmash" + i, this._body);
                t.removeFromPaintBodyVector(this._body);
                var a = this._body.GetAngularVelocity();
                n.DestroyBody(this._body);
                var h = this._body.GetAngle();
                var l = t.background.getChildIndex(this.mc);
                var d = new s.j7((0, u.zI)("Game", "BoomboxPiece1MC"));
                var p = new s.j7((0, u.zI)("Game", "BoomboxPiece2MC"));
                t.background.addChildAt(d, l);
                t.background.addChildAt(p, l);
                var m = new o.gv();
                m.angle = h;
                var f = new o.RM(-13.6 / this.m_physScale, 1.8 / this.m_physScale);
                m.position = this._body.GetWorldPoint(f);
                var _ = new o.m2();
                _.density = 2;
                _.friction = 0.3;
                _.restitution = 0.1;
                _.filter.categoryBits = 8;
                _.vertexCount = 3;
                _.SetAsBox(10.5 / this.m_physScale, 14 / this.m_physScale);
                var v = n.CreateBody(m);
                v.CreateShape(_);
                v.SetMassFromShapes();
                var y = v.GetLocalCenter();
                v.SetAngularVelocity(a);
                v.SetLinearVelocity(this._body.GetLinearVelocityFromLocalPoint(y));
                v.SetUserData(d);
                t.paintBodyVector.push(v);
                f = new o.RM(13.55 / this.m_physScale, 1.8 / this.m_physScale);
                m.position = this._body.GetWorldPoint(f);
                (v = n.CreateBody(m)).CreateShape(_);
                v.SetMassFromShapes();
                y = v.GetLocalCenter();
                v.SetAngularVelocity(a);
                v.SetLinearVelocity(this._body.GetLinearVelocityFromLocalPoint(y));
                v.SetUserData(p);
                t.paintBodyVector.push(v);
                this.mc.parent.removeChild(this.mc);
                this._body = null;
              };
              p.triggerSingleActivation = function (e, t, n) {
                if (t == "wake from sleep") {
                  if (this._body) {
                    this._body.WakeUp();
                  }
                } else if (t == "apply impulse" && this._body) {
                  var r = n[0];
                  var i = n[1];
                  var s = this._body.GetMass();
                  this._body.ApplyImpulse(new o.RM(r * s, i * s), this._body.GetWorldCenter());
                  var a = n[2];
                  var h = this._body.GetAngularVelocity();
                  this._body.SetAngularVelocity(h + a);
                }
              };
              h = t;
              if (d = [{
                key: "groupDisplayObject",
                get: function () {
                  return this.mc;
                }
              }, {
                key: "bodyList",
                get: function () {
                  if (this._body) {
                    return [this._body];
                  } else {
                    return [];
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
                    Object.defineProperty(e, g(r.key), r);
                  }
                })(h.prototype, d);
              }
              Object.defineProperty(h, "prototype", {
                writable: false
              });
              return h;
            }(d.o);
            function b(e, t) {
              b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return b(e, t);
            }
            var T = function (e) {
              function t(t) {
                var n;
                (n = e.call(this) || this).power = 20;
                n.checkPersist = function (e) {
                  var t = e.shape2.GetBody();
                  if (!(n.bodies.indexOf(t) > -1)) {
                    n.bodies.push(t);
                  }
                };
                var r = t;
                n.power = r.boostPower;
                n.angle = (r.rotation + 90) * Math.PI / 180;
                n.sinVal = Math.sin(n.angle);
                n.cosVal = Math.cos(n.angle);
                n.createBodies(new o.RM(r.x, r.y), r.rotation * Math.PI / 180, r.numPanels);
                n.mc = new s.j7();
                n.mc.x = r.x;
                n.mc.y = r.y;
                n.mc.rotation = r.rotation;
                n.numPanels = r.numPanels;
                n.setupMC();
                c.w.currentSession.level.foreground.addChild(n.mc);
                n.bodies = [];
                c.w.currentSession.level.actionsVector.push(n);
                c.w.currentSession.contactListener.registerListener(i.fI.PERSIST, n.sensor, n.checkPersist);
                return n;
              }
              var n;
              var a;
              a = e;
              (n = t).prototype = Object.create(a.prototype);
              n.prototype.constructor = n;
              b(n, a);
              var h = t.prototype;
              h.setupMC = function () {
                var e = this.numPanels * -90;
                var t = 1;
                for (var n = 0; n < this.numPanels; n++) {
                  var r = new s.j7();
                  r.setPixiMovieClip((0, u.zI)("Game", "BoostPanelMC"));
                  this.mc.addChild(r);
                  r.x = e;
                  e += 180;
                  r.gotoAndPlay(t);
                  if ((t -= 4) <= 0) {
                    t = 18 + t;
                  }
                }
              };
              h.createBodies = function (e, n, r) {
                var i = new o.m2();
                i.filter.categoryBits = 8;
                if (c.w.currentSession.version > 1.42) {
                  i.filter.groupIndex = -20;
                }
                i.isSensor = true;
                i.userData = t.SHAPE;
                i.SetAsOrientedBox(r * 90 / this.m_physScale, 90 / this.m_physScale, new o.RM(e.x / this.m_physScale, e.y / this.m_physScale), n);
                this.sensor = c.w.currentSession.level.levelBody.CreateShape(i);
              };
              h.actions = function () {
                if (this.bodies.length != 0) {
                  var e = this.bodies.indexOf(this.soundBody) > -1;
                  for (var t = 0; t < this.bodies.length; t++) {
                    var n = this.bodies[t];
                    var i = n.GetWorldCenter();
                    var s = this.power * n.GetMass();
                    n.ApplyForce(new o.RM(this.sinVal * s, this.cosVal * -s), i);
                  }
                  if (!e) {
                    if (this.sound) {
                      this.sound.fadeOut(0.2);
                      this.sound = null;
                      this.soundBody = null;
                    }
                    this.soundBody = this.bodies[0];
                    this.sound = r.m.instance.playAreaSoundLoop("BoostLoop", this.soundBody, 0);
                    this.sound.fadeIn(0.2);
                  }
                  this.bodies = [];
                } else if (this.sound) {
                  this.sound.fadeOut(0.2);
                  this.sound = null;
                }
              };
              h.triggerSingleActivation = function (e, n, r) {
                if (!this._triggered) {
                  this._triggered = true;
                  c.w.currentSession.level.actionsVector.push(this);
                  c.w.currentSession.contactListener.registerListener(i.fI.PERSIST, this.sensor, this.checkPersist);
                  this.sensor.SetUserData(t.SHAPE);
                  while (this.mc.numChildren > 0) {
                    var s = this.mc.getChildAt(0);
                    this.mc.removeChild(s);
                    s.destroy();
                  }
                  this.setupMC();
                }
              };
              h.prepareForTrigger = function () {
                var e = c.w.currentSession;
                var t = e.level.actionsVector;
                var n = t.indexOf(this);
                t.splice(n, 1);
                e.contactListener.deleteListener(i.fI.PERSIST, this.sensor);
                this.sensor.SetUserData(null);
                while (this.mc.numChildren > 0) {
                  var r = this.mc.getChildAt(0);
                  this.mc.removeChild(r);
                  r.destroy();
                }
                var a = this.numPanels * -90;
                for (var o = 0; o < this.numPanels; o++) {
                  var h = new s.j7((0, u.zI)("Game", "BoostPanelOffMC"));
                  this.mc.addChild(h);
                  h.x = a;
                  a += 180;
                }
              };
              return t;
            }(d.o);
            function A(e) {
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
            function C(e, t) {
              C = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return C(e, t);
            }
            T.SHAPE = "boost";
            var S = function (e) {
              function t(t, n, r) {
                var i;
                if (n === undefined) {
                  n = null;
                }
                if (r === undefined) {
                  r = null;
                }
                (i = e.call(this) || this).checkContact = function (e) {
                  if (e.impulse > 1.78) {
                    c.w.currentSession.contactListener.deleteListener(l.jp.RESULT, i._shape);
                    c.w.currentSession.level.singleActionVector.push(i);
                  }
                };
                i.createBody(t);
                return i;
              }
              var n;
              var a;
              a = e;
              (n = t).prototype = Object.create(a.prototype);
              n.prototype.constructor = n;
              C(n, a);
              var h;
              var d;
              var p = t.prototype;
              p.createBody = function (e) {
                var t = c.w.currentSession.level;
                var n = t.background;
                var r = e;
                r = r.clone();
                var a = this._bottleType = r.bottleType;
                var h = new s.j7();
                h.setPixiMovieClip((0, u.zI)("Game", "BottleShards" + a + "MC"));
                c.w.currentSession.particleController.createBMDArray("bottleShards" + a, h);
                this._interactive = r.interactive;
                this.mc = new s.j7();
                this.mc.setPixiMovieClip((0, u.zI)("Game", "bottle"));
                this.mc.gotoAndStop(a);
                n.addChild(this.mc);
                this.mc.x = e.x;
                this.mc.y = e.y;
                this.mc.rotation = e.rotation;
                if (this._interactive) {
                  var l = new o.RM(r.x, r.y);
                  var d = r.rotation;
                  var p = new o.gv();
                  var m = new o.m2();
                  m.density = 2;
                  m.friction = 0.3;
                  m.filter.categoryBits = 8;
                  m.restitution = 0.1;
                  m.SetAsBox(5 / this.m_physScale, 14.5 / this.m_physScale);
                  p.position.Set(l.x / this.m_physScale, l.y / this.m_physScale);
                  p.angle = d * Math.PI / 180;
                  p.isSleeping = r.sleeping;
                  var f = this._body = c.w.currentSession.m_world.CreateBody(p);
                  this._shape = f.CreateShape(m);
                  f.SetMassFromShapes();
                  t.paintBodyVector.push(f);
                  f.SetUserData(this.mc);
                  c.w.currentSession.contactListener.registerListener(i.fI.RESULT, this._shape, this.checkContact);
                }
              };
              p.singleAction = function () {
                var e = c.w.currentSession.level;
                e.removeFromActionsVector(this);
                e.removeFromPaintBodyVector(this._body);
                var t = Math.ceil(Math.random() * 2);
                c.w.currentSession.particleController.createRectBurst("bottleShards" + this._bottleType, 10, this._body, 30);
                r.m.instance.playAreaSoundInstance("GlassLight" + t, this._body);
                e.background.removeChild(this.mc);
                c.w.currentSession.m_world.DestroyBody(this._body);
                this._body = null;
              };
              p.getJointBody = function (e = null) {
                return this._body;
              };
              p.triggerSingleActivation = function (e, t, n) {
                if (t == "wake from sleep") {
                  if (this._body) {
                    this._body.WakeUp();
                  }
                } else if (t == "apply impulse" && this._body) {
                  var r = n[0];
                  var i = n[1];
                  var s = this._body.GetMass();
                  this._body.ApplyImpulse(new o.RM(r * s, i * s), this._body.GetWorldCenter());
                  var a = n[2];
                  var h = this._body.GetAngularVelocity();
                  this._body.SetAngularVelocity(h + a);
                }
              };
              h = t;
              if (d = [{
                key: "groupDisplayObject",
                get: function () {
                  return this.mc;
                }
              }, {
                key: "bodyList",
                get: function () {
                  if (this._body) {
                    return [this._body];
                  } else {
                    return [];
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
                    Object.defineProperty(e, A(r.key), r);
                  }
                })(h.prototype, d);
              }
              Object.defineProperty(h, "prototype", {
                writable: false
              });
              return h;
            }(d.o);
            var E = n(13362);
            function O(e, t) {
              O = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return O(e, t);
            }
            var k = function (e) {
              function t(t) {
                var n;
                n = e.call(this) || this;
                var r = t;
                var i = new o.m2();
                i.friction = 0.3;
                i.restitution = 0.1;
                i.filter.categoryBits = 8;
                var a = r.floorWidth * 300;
                var h = r.numFloors * 165 + 100;
                var l = 0;
                var d = new o.RM(r.x + 0 + a * 0.5, r.y + l + h * 0.5);
                i.SetAsOrientedBox(a * 0.5 / n.m_physScale, h * 0.5 / n.m_physScale, new o.RM(d.x / n.m_physScale, d.y / n.m_physScale), 0);
                c.w.currentSession.level.levelBody.CreateShape(i);
                var u = s.pW.instance;
                n.sprite = new s.kx();
                n.sprite.x = t.x;
                n.sprite.y = t.y;
                var p = new s.uq(1, 0, 0, 1, 0, l);
                n.sprite.graphics.beginBitmapFill(u.getTexture(E.Ns.B1_ROOF), p, true, false);
                n.sprite.graphics.drawRect(0, l, a, 100);
                n.sprite.graphics.endFill();
                l += 100;
                p = new s.uq(1, 0, 0, 1, 0, l);
                n.sprite.graphics.beginBitmapFill(u.getTexture(E.Ns.B1_FLOOR), p, true, false);
                n.sprite.graphics.drawRect(0, l, a, r.numFloors * 165);
                n.sprite.graphics.endFill();
                c.w.currentSession.level.background.addChild(n.sprite);
                return n;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              O(n, r);
              return t;
            }(d.o);
            function P(e, t) {
              P = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return P(e, t);
            }
            var M = function (e) {
              function t(t) {
                var n;
                n = e.call(this) || this;
                var r = t;
                var i = new o.m2();
                i.friction = 0.3;
                i.restitution = 0.1;
                i.filter.categoryBits = 8;
                var a = r.floorWidth * 500 + 226;
                var h = r.numFloors * 180 + 120;
                var l = 0;
                var d = new o.RM(r.x + 0 + a * 0.5, r.y + l + h * 0.5);
                i.SetAsOrientedBox(a * 0.5 / n.m_physScale, h * 0.5 / n.m_physScale, new o.RM(d.x / n.m_physScale, d.y / n.m_physScale), 0);
                c.w.currentSession.level.levelBody.CreateShape(i);
                var u = s.pW.instance;
                n.sprite = new s.kx();
                n.sprite.x = t.x;
                n.sprite.y = t.y;
                var p = new s.uq(1, 0, 0, 1, 0, l);
                n.sprite.graphics.beginBitmapFill(u.getTexture(E.ab.B2_ROOF), p, true, false);
                n.sprite.graphics.drawRect(0, l, a, 120);
                n.sprite.graphics.endFill();
                l += 120;
                p = new s.uq(1, 0, 0, 1, 0, l);
                n.sprite.graphics.beginBitmapFill(u.getTexture(E.ab.B2_FLOOR), p, true, false);
                n.sprite.graphics.drawRect(0, l, a, r.numFloors * 180);
                n.sprite.graphics.endFill();
                c.w.currentSession.level.background.addChild(n.sprite);
                return n;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              P(n, r);
              return t;
            }(d.o);
            function R(e, t) {
              R = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return R(e, t);
            }
            n(23500);
            n(62010);
            var I = function (e) {
              function t(n, r, i) {
                var s;
                if (r === undefined) {
                  r = null;
                }
                if (i === undefined) {
                  i = null;
                }
                (s = e.call(this) || this)._frameCounter = 0;
                s._firingFrameCount = 5;
                s._maxTorque = 10000;
                s.PIOverOneEighty = Math.PI / 180;
                s._muzzleMovementSpeed = 0.6;
                s._showStar = true;
                s.checkAdd = function (e) {
                  var n = e.shape2.GetBody();
                  if (s._bodiesInCannonDict.get(n) == null) {
                    s._bodiesInCannonDict.set(n, 1);
                  } else {
                    var r = s._bodiesInCannonDict.get(n);
                    s._bodiesInCannonDict.set(n, r + 1);
                  }
                  if (s.state == t.WAITING) {
                    s.state = t.LOADING;
                    if (s._showStar) {
                      s._baseMC.star.play();
                    }
                    s._baseMC.meter.bar.visible = 1;
                    s._baseMC.meter.bar.scaleX = 0;
                  }
                };
                s.checkRemove = function (e) {
                  var t = e.shape2.GetBody();
                  var n = s._bodiesInCannonDict.get(t);
                  s._bodiesInCannonDict.set(t, n - 1);
                  if (s._bodiesInCannonDict.get(t) === 0) {
                    s._bodiesInCannonDict.delete(t);
                  }
                };
                var a = n;
                s._showStar = a.cannonType == 1;
                s.createBodies(a);
                s.createJoints(a);
                s.state = t.WAITING;
                s._bodiesInCannonDict = new Map();
                s._power = 1.5 + a.cannonPower / 10 * 4;
                s._loadingFrameCount = a.cannonDelay * 30;
                s._startAngle = a.startRotation * s.PIOverOneEighty;
                s._firingAngle = a.firingRotation * s.PIOverOneEighty;
                return s;
              }
              var n;
              var a;
              a = e;
              (n = t).prototype = Object.create(a.prototype);
              n.prototype.constructor = n;
              R(n, a);
              var h = t.prototype;
              h.createBodies = function (e) {
                var t = c.w.currentSession.level;
                var n = c.w.currentSession.m_world;
                var r = t.foreground;
                var a = this._muzzleMC = new s.j7();
                a.setPixiMovieClip((0, u.zI)("Game", "CannonMuzzleMC"));
                a.convertChildren(a.pixiMovieClip);
                var h = this._baseMC = new s.j7();
                h.setPixiMovieClip((0, u.zI)("Game", "CannonBaseMC"));
                h.convertChildren(h.pixiMovieClip);
                this._baseMC.gotoAndStop(e.cannonType);
                this._muzzleMC.gotoAndStop(e.cannonType);
                if (this._showStar) {
                  this._baseMC.star.gotoAndStop(1);
                }
                this._baseMC.meter.bar.visible = 0;
                var l = new s.j7();
                l.setPixiMovieClip((0, u.zI)("Game", "CannonShapesRefMC"));
                l.convertChildren(l.pixiMovieClip);
                var d = 1 + e.muzzleScale / 20;
                var p = e.rotation * this.PIOverOneEighty;
                a.x = e.x;
                a.y = e.y;
                h.x = e.x;
                h.y = e.y;
                a.scaleX = a.scaleY = d;
                a.rotation = e.rotation + e.startRotation;
                h.rotation = e.rotation;
                r.addChild(a);
                r.addChild(h);
                var m = new o.m2();
                m.friction = 0.5;
                m.restitution = 0.1;
                m.filter.categoryBits = 8;
                m.density = 1;
                m.vertexCount = 4;
                var f = new o._A();
                f.friction = 0.5;
                f.restitution = 0.1;
                f.filter.categoryBits = 8;
                f.density = 1;
                f.radius = l.base.width / 2 / this.m_physScale * d;
                var _ = new o.gv();
                _.position = new o.RM(e.x / this.m_physScale, e.y / this.m_physScale);
                _.angle = e.startRotation * this.PIOverOneEighty + p;
                _.allowSleep = false;
                var v;
                var y = this._muzzleBody = n.CreateBody(_);
                y.CreateShape(f);
                for (var g = 0; g < 2; g++) {
                  for (var w = 0; w < 4; w++) {
                    v = l["p" + g + "_" + w];
                    m.vertices[w] = new o.RM(v.x / this.m_physScale * d, v.y / this.m_physScale * d);
                  }
                  y.CreateShape(m);
                }
                m.vertices[0] = new o.RM(l.p0_1.x / this.m_physScale * d, l.p0_1.y / this.m_physScale * d);
                m.vertices[1] = new o.RM(l.p1_0.x / this.m_physScale * d, l.p1_0.y / this.m_physScale * d);
                m.vertices[2] = new o.RM(l.p1_3.x / this.m_physScale * d, l.p1_3.y / this.m_physScale * d);
                m.vertices[3] = new o.RM(l.p0_2.x / this.m_physScale * d, l.p0_2.y / this.m_physScale * d);
                m.isSensor = true;
                m.density = 1e-7;
                m.filter.categoryBits = 8;
                this._sensor = y.CreateShape(m);
                var x = c.w.currentSession.contactListener;
                x.registerListener(i.fI.ADD, this._sensor, this.checkAdd);
                x.registerListener(i.fI.REMOVE, this._sensor, this.checkRemove);
                y.SetMassFromShapes();
                t.paintItemVector.push(this);
                for (var b = 0; b < 4; b++) {
                  v = l["base" + b];
                  m.vertices[b] = new o.RM(v.x / this.m_physScale, v.y / this.m_physScale);
                }
                m.density = 0;
                var T = new o.LJ(p);
                var A = new o.RM(e.x / this.m_physScale, e.y / this.m_physScale);
                for (var C = 0; C < m.vertexCount; C++) {
                  var S = m.vertices[C];
                  S.MulM(T);
                  S.Add(A);
                }
                c.w.currentSession.level.levelBody.CreateShape(m);
                c.w.currentSession.level.actionsVector.push(this);
              };
              h.actions = function () {
                if (this.state == t.LOADING) {
                  if (++this._frameCounter == this._loadingFrameCount) {
                    this._frameCounter = 0;
                    this._baseMC.meter.bar.scaleX = 1;
                    this.moveMuzzleToFire();
                  } else {
                    this._baseMC.meter.bar.scaleX = this._frameCounter / this._loadingFrameCount;
                  }
                } else if (this.state == t.AIMING) {
                  var e = 0;
                  this._bodiesInCannonDict.forEach(function (t, n) {
                    e += t;
                  });
                  if (e === 0) {
                    this.moveMuzzleToStart();
                  } else if (Math.abs(this._firingAngle - this._startAngle - this._muzzleJoint.GetJointAngle()) <= this.PIOverOneEighty) {
                    this.fireCannon();
                    if (this._showStar) {
                      this._baseMC.star.stop();
                    }
                  }
                } else if (this.state == t.FIRING) {
                  if (++this._frameCounter == this._firingFrameCount) {
                    this._frameCounter = 0;
                    this.moveMuzzleToStart();
                  }
                } else if (this.state == t.RETURNING && Math.abs(this._muzzleJoint.GetJointAngle()) <= this.PIOverOneEighty) {
                  this.setWaitState();
                }
              };
              h.setWaitState = function () {
                this.state = t.WAITING;
                this._muzzleJoint.EnableMotor(false);
                this._muzzleJoint.m_upperAngle = this._muzzleJoint.m_lowerAngle = 0;
              };
              h.moveMuzzleToFire = function () {
                var e;
                var n;
                var r;
                this.state = t.AIMING;
                if (this._startAngle < this._firingAngle) {
                  r = this._muzzleMovementSpeed;
                  n = 0;
                  e = this._firingAngle - this._startAngle;
                } else {
                  r = -this._muzzleMovementSpeed;
                  n = this._firingAngle - this._startAngle;
                  e = 0;
                }
                this._muzzleJoint.m_upperAngle = e;
                this._muzzleJoint.m_lowerAngle = n;
                this._muzzleJoint.EnableLimit(true);
                this._muzzleJoint.EnableMotor(true);
                this._muzzleJoint.SetMaxMotorTorque(this._maxTorque);
                this._muzzleJoint.SetMotorSpeed(r);
              };
              h.moveMuzzleToStart = function () {
                this._baseMC.meter.bar.scaleX = 0;
                this.state = t.RETURNING;
                var e = this._startAngle < this._firingAngle ? -this._muzzleMovementSpeed : this._muzzleMovementSpeed;
                this._muzzleJoint.SetMotorSpeed(e);
              };
              h.fireCannon = function () {
                var e = this;
                var n = new s.j7();
                n.setPixiMovieClip((0, u.zI)("Game", "MuzzleFlare"));
                n.rotation = this._muzzleMC.rotation;
                n.x = this._muzzleMC.x;
                n.y = this._muzzleMC.y;
                n.scaleX = n.scaleY = this._muzzleMC.scaleX;
                n.loop = false;
                n.gotoAndPlay(1);
                n.pixiSprite.name = "FLARE";
                c.w.currentSession.containerSprite.addChildAt(n, 1);
                this.state = t.FIRING;
                this._bodiesInCannonDict.forEach(function (t, n) {
                  var r = n;
                  var i = r.GetMass();
                  var s = e._muzzleBody.GetAngle();
                  var a = Math.sin(s);
                  var h = Math.cos(s);
                  var l = r.GetWorldCenter();
                  r.ApplyImpulse(new o.RM(a * (e._power * i * 10), h * (-e._power * i * 10)), l);
                });
                r.m.instance.playAreaSoundInstance("Cannon1", this._muzzleBody);
              };
              h.createJoints = function (e) {
                var t = new o.Gq();
                t.Initialize(c.w.currentSession.level.levelBody, this._muzzleBody, new o.RM(e.x / this.m_physScale, e.y / this.m_physScale));
                t.enableLimit = true;
                t.upperAngle = 0;
                t.lowerAngle = 0;
                this._muzzleJoint = c.w.currentSession.m_world.CreateJoint(t);
              };
              h.paint = function () {
                var e = this._muzzleBody.GetWorldPoint(new o.RM(0, 2 / this.m_physScale));
                this._muzzleMC.x = e.x * this.m_physScale;
                this._muzzleMC.y = e.y * this.m_physScale;
                this._muzzleMC.rotation = this._muzzleBody.GetInterpolatedAngle() * t.oneEightyOverPI % 360;
              };
              return t;
            }(d.o);
            function L(e) {
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
            function j(e, t) {
              j = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return j(e, t);
            }
            I.WAITING = "waiting";
            I.LOADING = "loading";
            I.AIMING = "aiming";
            I.RETURNING = "returning";
            I.FIRING = "firing";
            var B = function (e) {
              function t(t, n, r) {
                var i;
                if (n === undefined) {
                  n = null;
                }
                if (r === undefined) {
                  r = null;
                }
                (i = e.call(this) || this)._breakLimit = 100000;
                i._frameCounter = 0;
                i._checkAllJointsFrequency = 10;
                var s = t;
                s = s.clone();
                i.createBodies(s);
                if (s.interactive) {
                  i.createJoints(s);
                }
                c.w.currentSession.m_world.DestroyBody(i.refBody);
                i._points = [];
                i.refBody = null;
                return i;
              }
              var n;
              var i;
              i = e;
              (n = t).prototype = Object.create(i.prototype);
              n.prototype.constructor = n;
              j(n, i);
              var a;
              var h;
              var l = t.prototype;
              l.createBodies = function (e) {
                var t = e.interactive;
                this._bodies = [];
                var n = c.w.currentSession.level;
                var r = n.background;
                var i = c.w.currentSession.m_world;
                var a = e;
                this._frameCounter = Math.round(a.x + a.y) % 10;
                var h;
                var l = 1 + (a.linkScale - 1) / 9 * 2;
                var d = -a.linkAngle / 10 * (360 / (a.linkCount * 2));
                var p = 180 / Math.PI;
                var m = 90 / p;
                var f = d / p;
                var _ = [0, 0];
                this._points = [_];
                var v;
                var y = l * 9;
                var g = r.numChildren;
                var w = new o.gv();
                w.position = new o.RM(a.x / this.m_physScale, a.y / this.m_physScale);
                w.angle = a.rotation / p;
                this.refBody = i.CreateBody(w);
                for (var x = 0; x < a.linkCount; x++) {
                  h = m + ((x + 1) * f - f * 0.5);
                  var b = Math.cos(h) * y;
                  var T = Math.sin(h) * y;
                  var A = new s.j7();
                  if (x % 2 == 0) {
                    A.setPixiMovieClip((0, u.zI)("Game", "link0MC"));
                    r.addChildAt(A, Math.max(0, g));
                  } else {
                    A.setPixiMovieClip((0, u.zI)("Game", "link1MC"));
                    r.addChildAt(A, g + 1);
                  }
                  var C = l * A.height * 0.5 / this.m_physScale;
                  var S = l * A.width * 0.5 / this.m_physScale;
                  A.scaleX = A.scaleY = l;
                  g = A.parent.getChildIndex(A);
                  var E = new o.gv();
                  if (a.sleeping) {
                    E.isSleeping = true;
                  }
                  var O = new o.m2();
                  O.density = 17;
                  O.friction = 0.3;
                  O.filter.categoryBits = 8;
                  O.restitution = 0.1;
                  var k = this.refBody.GetWorldPoint(new o.RM((_[0] + b / 2) / this.m_physScale, (_[1] + T / 2) / this.m_physScale));
                  E.position = k;
                  E.angle = this.refBody.GetAngle() + h - 90 / p;
                  A.rotation = E.angle * p;
                  A.x = k.x * this.m_physScale;
                  A.y = k.y * this.m_physScale;
                  if (t) {
                    O.SetAsBox(S, C);
                    var P = i.CreateBody(E);
                    this._bodies.push(P);
                    P.CreateShape(O);
                    P.SetMassFromShapes();
                    if (x == 0) {
                      v = P.m_mass;
                    } else {
                      P.m_mass = v;
                    }
                    n.paintBodyVector.push(P);
                    _[0] = _[0] + b;
                    _[1] = _[1] + T;
                    this._points.push([_[0], _[1]]);
                    P.SetUserData(A);
                  } else {
                    _[0] = _[0] + b;
                    _[1] = _[1] + T;
                  }
                }
                if (t) {
                  var M = v / 0.5875199999999999;
                  this._breakLimit *= M * M;
                  c.w.currentSession.level.actionsVector.push(this);
                }
              };
              l.createJoints = function (e) {
                this._joints = [];
                for (var t = 1; t < this._bodies.length; t++) {
                  var n = this._bodies[t - 1];
                  var r = this._bodies[t];
                  var i = this._points[t];
                  var s = this.refBody.GetWorldPoint(new o.RM(i[0] / this.m_physScale, i[1] / this.m_physScale));
                  var a = n.GetLocalPoint(s);
                  var h = r.GetLocalPoint(s);
                  var l = new o.Gq();
                  l.body1 = n;
                  l.body2 = r;
                  l.localAnchor1 = a;
                  l.localAnchor2 = h;
                  var d = c.w.currentSession.m_world.CreateJoint(l);
                  this._joints.push(d);
                }
              };
              l.breakJoint = function (e) {
                var t = e.GetBody1().GetUserData();
                var n = e.GetBody2().GetUserData();
                var i = e.GetBody1();
                var s = e.GetBody2();
                var a = i.GetLocalPoint(e.GetAnchor1());
                var o = s.GetLocalPoint(e.GetAnchor2());
                this.showBrokenLink(a, t);
                this.showBrokenLink(o, n);
                e.broken = true;
                c.w.currentSession.m_world.DestroyJoint(e);
                var h = Math.ceil(Math.random() * 3);
                r.m.instance.playAreaSoundInstance("ChainBreak" + h, i);
              };
              l.showBrokenLink = function (e, t) {
                if (e.y > 0) {
                  t.scaleY *= -1;
                }
                var n = 1 + Math.ceil(Math.random() * 3);
                t.gotoAndStop(n);
              };
              l.actions = function () {
                var e = this._breakLimit;
                if (++this._frameCounter > this._checkAllJointsFrequency) {
                  this._frameCounter = 0;
                  for (var t = 0; t < this._joints.length; t++) {
                    var n = this._joints[t];
                    if (!n.broken) {
                      if (n.GetReactionForce().LengthSquared() > e) {
                        this.breakJoint(n);
                        return;
                      }
                      var r = n.GetAnchor1();
                      var i = n.GetAnchor2();
                      var s = i.x - r.x;
                      var a = i.y - r.y;
                      if (s * s + a * a > 0.15) {
                        this.breakJoint(n);
                      }
                    }
                  }
                }
              };
              l.die = function () {
                e.prototype.die.call(this);
              };
              l.getJointBody = function (e = null) {
                var t;
                var n = 10000000;
                for (var r = 0; r < this._bodies.length; r++) {
                  var i = this._bodies[r];
                  var s = i.GetWorldCenter();
                  var a = new o.RM(e.x - s.x, e.y - s.y);
                  var h = a.x * a.x + a.y * a.y;
                  if (h < n) {
                    n = h;
                    t = i;
                  }
                }
                return t;
              };
              l.triggerSingleActivation = function (e, t, n) {
                if (t == "wake from sleep") {
                  if (this._bodies[0]) {
                    this._bodies[0].WakeUp();
                  }
                } else if (t == "apply impulse") {
                  var r = n[0];
                  var i = n[1];
                  if (this._bodies[0]) {
                    for (var s = this._bodies.length, a = 0; a < s; a++) {
                      var h = this._bodies[a];
                      var l = h.GetMass();
                      h.ApplyImpulse(new o.RM(r * l, i * l), h.GetWorldCenter());
                    }
                  }
                }
              };
              a = t;
              if (h = [{
                key: "groupDisplayObject",
                get: function () {
                  return this.mc;
                }
              }, {
                key: "bodyList",
                get: function () {
                  return this._bodies;
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
                    Object.defineProperty(e, L(r.key), r);
                  }
                })(a.prototype, h);
              }
              Object.defineProperty(a, "prototype", {
                writable: false
              });
              return a;
            }(d.o);
            function D(e) {
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
            function F(e, t) {
              F = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return F(e, t);
            }
            var N = function (e) {
              function t(t, n, r) {
                var i;
                if (n === undefined) {
                  n = null;
                }
                if (r === undefined) {
                  r = null;
                }
                (i = e.call(this) || this).breakLimit = 10;
                i._sign = 1;
                i.checkContact = function (e) {
                  if (e.impulse > i.breakLimit) {
                    c.w.currentSession.contactListener.deleteListener(l.jp.RESULT, i.top);
                    c.w.currentSession.contactListener.deleteListener(l.jp.RESULT, i.leftLeg);
                    c.w.currentSession.contactListener.deleteListener(l.jp.RESULT, i.rightLeg);
                    c.w.currentSession.contactListener.deleteListener(l.jp.RESULT, i.back);
                    c.w.currentSession.level.actionsVector.push(i);
                  }
                };
                var a = t;
                i._sign = a.reverse ? -1 : 1;
                i.mc = new s.j7((0, u.zI)("Game", "ChairMC"));
                i.mc.convertChildren(i.mc._pixiSprite);
                i.mc.gotoAndStop(1);
                i.mc.container.scaleX *= i._sign;
                i.mc.x = a.x;
                i.mc.y = a.y;
                i.mc.rotation = a.rotation;
                c.w.currentSession.level.background.addChild(i.mc);
                if (c.w.currentSession.version < 1.67) {
                  i.createBody(new o.RM(a.x, a.y), a.rotation * Math.PI / 180, false);
                } else if (a.interactive) {
                  i.createBody(new o.RM(a.x, a.y), a.rotation * Math.PI / 180, a.sleeping);
                }
                return i;
              }
              var n;
              var a;
              a = e;
              (n = t).prototype = Object.create(a.prototype);
              n.prototype.constructor = n;
              F(n, a);
              var h;
              var d;
              var p = t.prototype;
              p.createBody = function (e, t, n) {
                var r = new o.gv();
                r.position.Set(e.x / this.m_physScale, e.y / this.m_physScale);
                r.angle = t;
                r.isSleeping = n;
                this.body = c.w.currentSession.m_world.CreateBody(r);
                var s = new o.m2();
                s.density = 5;
                s.friction = 0.1;
                s.restitution = 0.2;
                s.filter.categoryBits = 8;
                s.SetAsOrientedBox(21 / this.m_physScale, 3 / this.m_physScale, new o.RM(0, -3 / this.m_physScale), 0);
                this.top = this.body.CreateShape(s);
                s.SetAsOrientedBox(3 / this.m_physScale, 16 / this.m_physScale, new o.RM(-18 / this.m_physScale, 16 / this.m_physScale), 0);
                this.leftLeg = this.body.CreateShape(s);
                s.SetAsOrientedBox(3 / this.m_physScale, 16 / this.m_physScale, new o.RM(18 / this.m_physScale, 16 / this.m_physScale), 0);
                this.rightLeg = this.body.CreateShape(s);
                s.SetAsOrientedBox(3 / this.m_physScale, 25 / this.m_physScale, new o.RM(this._sign * -18 / this.m_physScale, -31 / this.m_physScale), 0);
                this.back = this.body.CreateShape(s);
                this.body.SetMassFromShapes();
                c.w.currentSession.level.paintItemVector.push(this);
                c.w.currentSession.contactListener.registerListener(i.fI.RESULT, this.top, this.checkContact);
                c.w.currentSession.contactListener.registerListener(i.fI.RESULT, this.leftLeg, this.checkContact);
                c.w.currentSession.contactListener.registerListener(i.fI.RESULT, this.rightLeg, this.checkContact);
                c.w.currentSession.contactListener.registerListener(i.fI.RESULT, this.back, this.checkContact);
              };
              p.paint = function () {
                var e = this.body.GetInterpolatedWorldCenter();
                this.mc.x = e.x * this.m_physScale;
                this.mc.y = e.y * this.m_physScale;
                this.mc.rotation = this.body.GetInterpolatedAngle() * t.oneEightyOverPI % 360;
              };
              p.actions = function () {
                var e = c.w.currentSession.level;
                var t = c.w.currentSession.m_world;
                e.removeFromActionsVector(this);
                e.removeFromPaintItemVector(this);
                var n = this.body.GetWorldCenter();
                var i = this.body.GetAngularVelocity();
                var a = this.body.GetAngle();
                var h = new o.gv();
                h.angle = a;
                h.position = n;
                var l = new o.m2();
                l.density = 5;
                l.friction = 0.1;
                l.restitution = 0.2;
                l.filter.categoryBits = 8;
                l.SetAsOrientedBox(3 / this.m_physScale, 16 / this.m_physScale, new o.RM(-18 / this.m_physScale, 16 / this.m_physScale), 0);
                var d = t.CreateBody(h);
                d.CreateShape(l);
                d.SetMassFromShapes();
                l.SetAsOrientedBox(3 / this.m_physScale, 16 / this.m_physScale, new o.RM(18 / this.m_physScale, 16 / this.m_physScale), 0);
                var p = t.CreateBody(h);
                p.CreateShape(l);
                p.SetMassFromShapes();
                l.SetAsOrientedBox(3 / this.m_physScale, 25 / this.m_physScale, new o.RM(this._sign * -18 / this.m_physScale, -31 / this.m_physScale), 0);
                var m = t.CreateBody(h);
                m.CreateShape(l);
                m.SetMassFromShapes();
                l.SetAsOrientedBox(21 / this.m_physScale, 3 / this.m_physScale, new o.RM(0, -3 / this.m_physScale), 0);
                var f = t.CreateBody(h);
                f.CreateShape(l);
                f.SetMassFromShapes();
                d.SetLinearVelocity(this.body.GetLinearVelocityFromLocalPoint(d.GetLocalCenter()));
                d.SetAngularVelocity(i);
                p.SetLinearVelocity(this.body.GetLinearVelocityFromLocalPoint(p.GetLocalCenter()));
                p.SetAngularVelocity(i);
                m.SetLinearVelocity(this.body.GetLinearVelocityFromLocalPoint(m.GetLocalCenter()));
                m.SetAngularVelocity(i);
                f.SetLinearVelocity(this.body.GetLinearVelocityFromLocalPoint(f.GetLocalCenter()));
                f.SetAngularVelocity(i);
                var _ = new s.j7((0, u.zI)("Game", "chair_leg"));
                var v = new s.j7((0, u.zI)("Game", "chair_leg"));
                var y = new s.j7((0, u.zI)("Game", "chair_top"));
                var g = new s.j7((0, u.zI)("Game", "chair_back_broken"));
                var w = e.background.getChildIndex(this.mc);
                this.mc.parent.removeChild(this.mc);
                y.scaleX *= this._sign;
                e.background.addChildAt(_, w);
                e.background.addChildAt(v, w);
                e.background.addChildAt(y, w);
                e.background.addChildAt(g, w);
                d.SetUserData(_);
                p.SetUserData(v);
                m.SetUserData(g);
                f.SetUserData(y);
                e.paintBodyVector.push(d);
                e.paintBodyVector.push(p);
                e.paintBodyVector.push(m);
                e.paintBodyVector.push(f);
                r.m.instance.playAreaSoundInstance("TableBreak1", f);
                t.DestroyBody(this.body);
                this.body = null;
              };
              p.getJointBody = function (e = null) {
                return this.body;
              };
              p.triggerSingleActivation = function (e, t, n) {
                if (t == "wake from sleep") {
                  if (this.body) {
                    this.body.WakeUp();
                  }
                } else if (t == "apply impulse" && this.body) {
                  var r = n[0];
                  var i = n[1];
                  var s = this.body.GetMass();
                  this.body.ApplyImpulse(new o.RM(r * s, i * s), this.body.GetWorldCenter());
                  var a = n[2];
                  var h = this.body.GetAngularVelocity();
                  this.body.SetAngularVelocity(h + a);
                }
              };
              h = t;
              if (d = [{
                key: "groupDisplayObject",
                get: function () {
                  return this.mc;
                }
              }, {
                key: "bodyList",
                get: function () {
                  if (this.body) {
                    return [this.body];
                  } else {
                    return [];
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
                    Object.defineProperty(e, D(r.key), r);
                  }
                })(h.prototype, d);
              }
              Object.defineProperty(h, "prototype", {
                writable: false
              });
              return h;
            }(d.o);
            function G(e, t) {
              G = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return G(e, t);
            }
            var U = function (e) {
              function t(t) {
                var n;
                (n = e.call(this) || this).checkPersist = function (e) {
                  var t = e.shape2.GetBody();
                  if (!(n.bodies.indexOf(t) > -1)) {
                    n.bodies.push(t);
                  }
                };
                var a = t;
                n.angle = a.rotation * Math.PI / 180;
                n.sinVal = Math.sin(n.angle);
                n.cosVal = Math.cos(n.angle);
                n.createBodies(new o.RM(a.x, a.y), n.angle);
                n.mc = new s.j7((0, u.zI)("Game", "FanMC"));
                n.mc.convertChildren(n.mc.pixiSprite);
                n.mc.x = a.x;
                n.mc.y = a.y;
                n.mc.rotation = a.rotation;
                c.w.currentSession.level.background.addChild(n.mc);
                n.bodies = [];
                c.w.currentSession.level.actionsVector.push(n);
                c.w.currentSession.contactListener.registerListener(i.fI.PERSIST, n.sensor, n.checkPersist);
                n.fanVec = new o.RM(a.x / n.m_physScale, a.y / n.m_physScale);
                n.fanSound = r.m.instance.playAreaSoundLoopStatic("SwooshFan", new s.bR(n.fanVec.x, n.fanVec.y));
                n.mc.blades.play();
                return n;
              }
              var n;
              var a;
              a = e;
              (n = t).prototype = Object.create(a.prototype);
              n.prototype.constructor = n;
              G(n, a);
              var h = t.prototype;
              h.createBodies = function (e, t) {
                var n = new o.m2();
                n.isSensor = true;
                n.filter.categoryBits = 8;
                if (c.w.currentSession.version > 1.42) {
                  n.filter.groupIndex = -20;
                }
                var r = c.w.currentSession.level.levelBody;
                this.center = new o.RM((e.x + Math.sin(t) * 300) / this.m_physScale, (e.y - Math.cos(t) * 300) / this.m_physScale);
                n.SetAsOrientedBox(150 / this.m_physScale, 250 / this.m_physScale, this.center, t);
                this.sensor = r.CreateShape(n);
                n.isSensor = false;
                n.friction = 0.3;
                n.restitution = 0.1;
                n.filter.categoryBits = 8;
                n.filter.groupIndex = 0;
                n.SetAsOrientedBox(150 / this.m_physScale, 25 / this.m_physScale, new o.RM((e.x - Math.sin(t) * -25) / this.m_physScale, (e.y + Math.cos(t) * -25) / this.m_physScale), t);
                r.CreateShape(n);
                n.vertexCount = 7;
                n.vertices[0] = new o.RM(150 / this.m_physScale, 0);
                n.vertices[1] = new o.RM(125 / this.m_physScale, 84.5 / this.m_physScale);
                n.vertices[2] = new o.RM(65 / this.m_physScale, 137 / this.m_physScale);
                n.vertices[3] = new o.RM(0, 150 / this.m_physScale);
                n.vertices[4] = new o.RM(-65 / this.m_physScale, 137 / this.m_physScale);
                n.vertices[5] = new o.RM(-125 / this.m_physScale, 84.5 / this.m_physScale);
                n.vertices[6] = new o.RM(-150 / this.m_physScale, 0);
                var i = new o.LJ(this.angle);
                var s = new o.RM(e.x / this.m_physScale, e.y / this.m_physScale);
                for (var a = 0; a < n.vertexCount; a++) {
                  var h = n.vertices[a];
                  h.MulM(i);
                  h.Add(s);
                }
                r.CreateShape(n);
              };
              h.actions = function () {
                if (this.bodies.length != 0) {
                  for (var e = 0; e < this.bodies.length; e++) {
                    var t = this.bodies[e];
                    var n = t.GetWorldCenter();
                    var r = n.Copy();
                    r.Subtract(this.center);
                    var i = (r.x * -this.sinVal + r.y * this.cosVal) * this.m_physScale + 250;
                    i = Math.max(i, 0);
                    var s = (i = Math.min(i, 250)) / 250;
                    var a = s * s * 15;
                    t.ApplyForce(new o.RM(this.sinVal * a, this.cosVal * -a), n);
                  }
                  this.bodies = [];
                }
              };
              h.triggerSingleActivation = function (e, t, n) {
                if (!this._triggered) {
                  this._triggered = true;
                  c.w.currentSession.level.actionsVector.push(this);
                  c.w.currentSession.contactListener.registerListener(i.fI.PERSIST, this.sensor, this.checkPersist);
                  this.mc.blades.play();
                  this.fanSound = r.m.instance.playAreaSoundLoopStatic("SwooshFan", new s.bR(this.fanVec.x, this.fanVec.y));
                }
              };
              h.prepareForTrigger = function () {
                var e = c.w.currentSession;
                var t = e.level.actionsVector;
                var n = t.indexOf(this);
                t.splice(n, 1);
                e.contactListener.deleteListener(i.fI.PERSIST, this.sensor);
                this.mc.blades.gotoAndStop(2);
                this.fanSound.stopSound(true);
              };
              return t;
            }(d.o);
            function V(e, t) {
              V = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return V(e, t);
            }
            var H = function (e) {
              function t(t) {
                var n;
                (n = e.call(this) || this).checkResult = function (e) {
                  var t = c.w.currentSession;
                  if (t.character.dead) {
                    t.contactListener.deleteListener(l.jp.RESULT, n.shape);
                  } else {
                    var i = t.character.cameraFocus.GetWorldCenter();
                    if (i.x < n.aabb.upperBound.x && i.x > n.aabb.lowerBound.x && i.y < n.aabb.upperBound.y && i.y > n.aabb.lowerBound.y) {
                      t.contactListener.deleteListener(l.jp.RESULT, n.shape);
                      if (!t.isReplay) {
                        t.levelComplete();
                      }
                      var s = t.containerSprite.getChildIndex(t.level.foreground);
                      var a = t.particleController;
                      a.createPointFlow("sparks", n.sparkCoords.x, n.sparkCoords.y, 2, 5, -65, 1000, s);
                      a.createPointFlow("sparks", n.sparkCoords.x, n.sparkCoords.y, 2, 5, -115, 1000, s);
                      r.m.instance.playSoundItem("Victory");
                    }
                  }
                };
                var i = t;
                n.createBodies(new o.RM(i.x, i.y));
                n.mc = new s.j7((0, u.zI)("Game", "FinishLineMC"));
                n.mc.x = i.x;
                n.mc.y = i.y;
                n.mc.rotation = i.rotation;
                var a = c.w.currentSession.level;
                a.background.addChild(n.mc);
                n.mc.flag = new s.j7();
                n.mc.flag.setPixiMovieClip((0, u.zI)("Game", "finishline_flag"));
                n.mc.flag.play();
                a.foreground.addChild(n.mc.flag);
                n.mc.flag.x = i.x - 200;
                n.mc.flag.y = i.y - 220;
                var h = new s.j7();
                h.setPixiMovieClip((0, u.zI)("Game", "Sparks"), true);
                c.w.currentSession.particleController.createBMDArray("sparks", h);
                c.w.currentSession.contactListener.registerListener(l.jp.RESULT, n.shape, n.checkResult);
                return n;
              }
              var n;
              var i;
              i = e;
              (n = t).prototype = Object.create(i.prototype);
              n.prototype.constructor = n;
              V(n, i);
              t.prototype.createBodies = function (e) {
                var t = new o.m2();
                t.friction = 0.3;
                t.restitution = 0.1;
                t.filter.categoryBits = 8;
                t.SetAsOrientedBox(200 / this.m_physScale, 20 / this.m_physScale, new o.RM(e.x / this.m_physScale, e.y / this.m_physScale), 0);
                this.shape = c.w.currentSession.level.levelBody.CreateShape(t);
                this.aabb = new o.nm();
                this.aabb.lowerBound = new o.RM((e.x - 200) / this.m_physScale, (e.y - 200) / this.m_physScale);
                this.aabb.upperBound = new o.RM((e.x + 200) / this.m_physScale, e.y / this.m_physScale);
                this.sparkCoords = new o.RM(e.x - 189, e.y - 224);
                c.w.currentSession.level.keepVector.push(this);
              };
              return t;
            }(d.o);
            function z(e, t) {
              z = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return z(e, t);
            }
            var W = function (e) {
              function t(t, n, r, i) {
                var s;
                (s = e.call(this) || this).createBody(t, r, n, i);
                return s;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              z(n, r);
              t.prototype.createBody = function (e, n, r, i) {
                this._mc = n["m" + e];
                var s = r.GetWorldPoint(new o.RM(this._mc.x / this.m_physScale, this._mc.y / this.m_physScale));
                var a = s.x * this.m_physScale;
                var h = s.y * this.m_physScale;
                this._mc.x = a;
                this._mc.y = h;
                this._mc.rotation = r.GetAngle() * t.oneEightyOverPI % 360;
                var l = new o.gv();
                var d = new o._A();
                d.density = 2;
                d.friction = 0.3;
                d.filter.categoryBits = 8;
                d.restitution = 0.1;
                l.position.Set(s.x, s.y);
                l.angle = r.GetAngle();
                var u = c.w.currentSession.m_world.CreateBody(l);
                u.SetLinearVelocity(r.GetLinearVelocity());
                u.SetAngularVelocity(r.GetAngularVelocity());
                var p = n["c" + e];
                d.radius = p.width / 2 / this.m_physScale;
                var m = u.CreateShape(d);
                m.SetMaterial(1);
                m.SetUserData(i);
                u.SetMassFromShapes();
                c.w.currentSession.level.paintBodyVector.push(u);
                u.SetUserData(this._mc);
                c.w.currentSession.level.background.addChild(this._mc);
              };
              return t;
            }(d.o);
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
              function t(t, n, r) {
                var i;
                if (n === undefined) {
                  n = null;
                }
                if (r === undefined) {
                  r = null;
                }
                (i = e.call(this) || this)._willSmash = false;
                i._MCNames = ["WatermelonMC", "PumpkinMC", "PineappleMC"];
                i._particleMCs = ["WatermelonParticlesMC", "PumpkinParticlesMC", "PineappleParticlesMC"];
                i._juiceColor = [13703445, 15695667, 15066224];
                i._initialStateShapeCount = [1, 1, 1];
                i._initialSmashImpulse = [8, 8, 3];
                i._shapes = [];
                i.checkContact = function (e) {
                  if (e.impulse > i._initialSmashImpulse[i._foodItemType - 1]) {
                    i._willSmash = true;
                    c.w.currentSession.level.singleActionVector.push(i);
                    i.removeListeners();
                  }
                };
                var s = t;
                i.createBody(s);
                return i;
              }
              var n;
              var h;
              h = e;
              (n = t).prototype = Object.create(h.prototype);
              n.prototype.constructor = n;
              Y(n, h);
              t.getChildrenWithPrefix = function (e, t) {
                var n = [];
                for (var r = 0; r < e.numChildren; r++) {
                  if (e.getChildAt(r).name.indexOf(t) == 0) {
                    n.push(e.getChildAt(r));
                  }
                }
                return n;
              };
              var d;
              var p;
              var m = t.prototype;
              m.createBody = function (e) {
                this._foodItemType = e.foodItemType;
                var n = c.w.currentSession.level;
                var r = n.background;
                this._interactive = e.interactive;
                var a = (0, u.zI)("Game", this._MCNames[e.foodItemType - 1]);
                this.mc = new s.j7(a);
                this.mc.convertChildren(this.mc.pixiSprite);
                var h = this.mc.shapes;
                this.mc.removeChild(this.mc.shapes);
                this._chunksMC = this.mc.chunks;
                this.mc.removeChild(this.mc.chunks);
                this.mc.x = e.x;
                this.mc.y = e.y;
                this.mc.rotation = e.rotation;
                r.addChild(this.mc);
                if (this._interactive) {
                  var l = (0, u.zI)("Game", this._particleMCs[this._foodItemType - 1]);
                  var d = new s.j7();
                  d.setPixiMovieClip(l);
                  c.w.currentSession.particleController.createBMDArray(this._particleMCs[this._foodItemType - 1], d);
                  var p;
                  var m;
                  var f;
                  var _;
                  var v = new o.RM(e.x, e.y);
                  var y = e.rotation;
                  var g = new o.gv();
                  var w = new o.m2();
                  w.density = 2;
                  w.friction = 0.3;
                  w.filter.categoryBits = 8;
                  w.restitution = 0.1;
                  g.position.Set(v.x / this.m_physScale, v.y / this.m_physScale);
                  g.angle = y * Math.PI / 180;
                  g.isSleeping = e.sleeping;
                  var x;
                  var b = this._body = c.w.currentSession.m_world.CreateBody(g);
                  for (f = 0; f < this._initialStateShapeCount[e.foodItemType - 1]; f++) {
                    x = t.getChildrenWithPrefix(h, "p" + f);
                    m = 0;
                    for (; m < x.length; m++) {
                      p = h["p" + f + "_" + m];
                      w.vertexCount = x.length;
                      w.vertices[m] = new o.RM(p.x / this.m_physScale, p.y / this.m_physScale);
                    }
                    (_ = b.CreateShape(w)).SetMaterial(4);
                    _.SetUserData(this);
                    c.w.currentSession.contactListener.registerListener(i.fI.RESULT, _, this.checkContact);
                    this._shapes.push(_);
                  }
                  b.SetMassFromShapes();
                  n.paintBodyVector.push(b);
                  b.SetUserData(this.mc);
                }
              };
              m.removeListeners = function () {
                if (this._shapes) {
                  for (var e = 0; e < this._shapes.length; e++) {
                    c.w.currentSession.contactListener.deleteListener(l.jp.RESULT, this._shapes[e]);
                  }
                  this._shapes = null;
                }
              };
              m.grindShape = function (e) {
                this._willSmash = false;
                this.removeListeners();
                if (e.GetBody() === this._body) {
                  c.w.currentSession;
                }
              };
              m.singleAction = function () {
                if (this._willSmash) {
                  for (var e = t.getChildrenWithPrefix(this._chunksMC, "m").length, n = 0; n < e; n++) {
                    new a.gg(n, this._body, this._chunksMC, this);
                  }
                  c.w.currentSession.level.removeFromPaintBodyVector(this._body);
                  var i = Math.ceil(Math.random() * 3);
                  r.m.instance.playAreaSoundInstance("FoodSplat" + i, this._body);
                  c.w.currentSession.particleController.createRectBurst(this._particleMCs[this._foodItemType - 1], 10, this._body, 30);
                  c.w.currentSession.m_world.DestroyBody(this._body);
                  c.w.currentSession.level.background.removeChild(this.mc);
                  this.mc = null;
                  this._chunksMC = null;
                }
              };
              m.getJointBody = function (e = null) {
                return this._body;
              };
              m.triggerSingleActivation = function (e, t, n) {
                if (t == "wake from sleep") {
                  if (this._body) {
                    this._body.WakeUp();
                  }
                } else if (t == "apply impulse" && this._body) {
                  var r = n[0];
                  var i = n[1];
                  var s = this._body.GetMass();
                  this._body.ApplyImpulse(new o.RM(r * s, i * s), this._body.GetWorldCenter());
                  var a = n[2];
                  var h = this._body.GetAngularVelocity();
                  this._body.SetAngularVelocity(h + a);
                }
              };
              d = t;
              if (p = [{
                key: "juiceColor",
                get: function () {
                  return this._juiceColor[this._foodItemType - 1];
                }
              }, {
                key: "particleType",
                get: function () {
                  return this._particleMCs[this._foodItemType - 1];
                }
              }, {
                key: "groupDisplayObject",
                get: function () {
                  return this.mc;
                }
              }, {
                key: "bodyList",
                get: function () {
                  if (this._body) {
                    return [this._body];
                  } else {
                    return [];
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
                    Object.defineProperty(e, X(r.key), r);
                  }
                })(d.prototype, p);
              }
              Object.defineProperty(d, "prototype", {
                writable: false
              });
              return d;
            }(d.o);
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
            q.FOOD_TAG = "food_tag";
            var Z = function (e) {
              function t(t) {
                var n;
                (n = e.call(this) || this).minDistEdge = 0.05;
                n.checkContact = function (e) {
                  if (e.impulse > n.smashImpulse) {
                    n.impactPosition = n.body.GetLocalPoint(e.position);
                    c.w.currentSession.contactListener.deleteListener(l.jp.RESULT, n.shape);
                    c.w.currentSession.contactListener.deleteListener(i.fI.ADD, n.shape);
                    c.w.currentSession.level.singleActionVector.push(n);
                  }
                };
                n.checkAdd = function (e) {
                  if (!e.shape2.m_isSensor) {
                    var t = e.shape2.m_body.m_mass;
                    if (t == 0 || !(t < n.body.m_mass)) {
                      var i = o.x5.b2Dot(e.velocity, e.normal);
                      if ((i = Math.abs(i)) > 4) {
                        var s = Math.ceil(Math.random() * 2);
                        r.m.instance.playAreaSoundInstance("GlassImpact" + s, n.body);
                      }
                    }
                  }
                };
                var a = t;
                n.createBody(new o.RM(a.x, a.y), a.rotation * Math.PI / 180, a.shapeWidth, a.shapeHeight, a.sleeping, a.shatterStrength);
                n.stabbing = a.stabbing;
                n.mc = new s.kx();
                n.mc.graphics.beginFill(6737151, 0.35);
                n.mc.graphics.drawRect(-50, -50, 100, 100);
                n.mc.graphics.endFill();
                n.mc.width = a.shapeWidth;
                n.mc.height = a.shapeHeight;
                n.mc.x = a.x;
                n.mc.y = a.y;
                n.mc.rotation = a.rotation;
                c.w.currentSession.level.background.addChild(n.mc);
                n.body.SetUserData(n.mc);
                var h = new s.j7();
                h.setPixiMovieClip((0, u.zI)("Game", "GlassShardsMC"));
                c.w.currentSession.particleController.createBMDArray("glass", h);
                return n;
              }
              var n;
              var h;
              h = e;
              (n = t).prototype = Object.create(h.prototype);
              n.prototype.constructor = n;
              K(n, h);
              var d;
              var p;
              var m = t.prototype;
              m.createBody = function (e, t, n, r, s, a) {
                var h = new o.gv();
                var l = new o.m2();
                l.density = 2;
                l.friction = 0.3;
                l.restitution = 0.1;
                l.filter.categoryBits = 8;
                var d = c.w.currentSession.level;
                l.SetAsBox(n * 0.5 / this.m_physScale, r * 0.5 / this.m_physScale);
                h.position.Set(e.x / this.m_physScale, e.y / this.m_physScale);
                h.angle = t;
                h.isSleeping = s;
                this.body = c.w.currentSession.m_world.CreateBody(h);
                this.shape = this.body.CreateShape(l);
                this.body.SetMassFromShapes();
                d.paintBodyVector.push(this.body);
                c.w.currentSession.contactListener.registerListener(i.fI.ADD, this.shape, this.checkAdd);
                var u = this.body.GetMass();
                if (u < 0.75) {
                  this.soundSuffix = "Light";
                  this.glassParticles = 100;
                } else if (u < 4) {
                  this.soundSuffix = "Mid";
                  this.glassParticles = 150;
                } else {
                  this.soundSuffix = "Heavy";
                  this.glassParticles = 200;
                }
                this.smashImpulse = Math.round(u * a);
                var p = this.shape.GetVertices();
                this.leftX = p[0].x;
                this.rightX = p[1].x;
                this.topY = p[0].y;
                this.bottomY = p[2].y;
                var m = [[this.leftX, this.topY], [0, this.topY], [this.rightX, this.topY]];
                var f = [[this.rightX, this.topY], [this.rightX, 0], [this.rightX, this.bottomY]];
                var _ = [[this.rightX, this.bottomY], [0, this.bottomY], [this.leftX, this.bottomY]];
                var v = [[this.leftX, this.bottomY], [this.leftX, 0], [this.leftX, this.topY]];
                this.allSides = [m, f, _, v];
                c.w.currentSession.contactListener.registerListener(i.fI.RESULT, this.shape, this.checkContact);
              };
              m.singleAction = function () {
                if (c.w.currentSession.version < 1.36) {
                  this.shatterOld();
                } else {
                  this.shatter();
                }
              };
              m.shatterOld = function () {
                var e = c.w.currentSession;
                var t = e.level;
                var n = e.m_world;
                var i = Math.ceil(Math.random() * 2);
                c.w.currentSession.particleController.createRectBurst("glass", 10, this.body, this.glassParticles);
                r.m.instance.playAreaSoundInstance("Glass" + this.soundSuffix + i, this.body);
                t.removeFromPaintBodyVector(this.body);
                if (this.body.GetMass() < 0.75) {
                  n.DestroyBody(this.body);
                  this.mc.parent.removeChild(this.mc);
                  return;
                }
                var h = this.body.GetWorldCenter();
                var l = this.body.GetAngularVelocity();
                n.DestroyBody(this.body);
                var d = this.body.GetAngle();
                if (this.impactPosition.x - (this.leftX + this.minDistEdge) <= 0) {
                  this.impactPosition.x = this.leftX;
                  this.allSides[3] = null;
                } else if (this.impactPosition.x - (this.rightX - this.minDistEdge) >= 0) {
                  this.impactPosition.x = this.rightX;
                  this.allSides[1] = null;
                }
                if (this.impactPosition.y - (this.topY + this.minDistEdge) <= 0) {
                  this.impactPosition.y = this.topY;
                  this.allSides[0] = null;
                } else if (this.impactPosition.y - (this.bottomY - this.minDistEdge) >= 0) {
                  this.impactPosition.y = this.bottomY;
                  this.allSides[2] = null;
                }
                var u = new o.gv();
                u.angle = d;
                u.position = h;
                var p = new o.m2();
                p.density = 2;
                p.friction = 0.3;
                p.restitution = 0.1;
                p.filter.categoryBits = 8;
                p.vertexCount = 3;
                var m = new o.RM(this.impactPosition.x * this.m_physScale, this.impactPosition.y * this.m_physScale);
                var f = this.mc.parent;
                var _ = f.getChildIndex(this.mc);
                for (var v = 0; v < 4; v++) {
                  if (this.allSides[v]) {
                    var y = this.allSides[v];
                    for (var g = 0; g < 2; g++) {
                      var w = n.CreateBody(u);
                      p.vertices[0] = this.impactPosition;
                      var x = new o.RM(y[g][0], y[g][1]);
                      p.vertices[1] = x;
                      var b = new o.RM(y[g + 1][0], y[g + 1][1]);
                      p.vertices[2] = b;
                      w.CreateShape(p);
                      w.SetMassFromShapes();
                      var T = w.GetWorldCenter();
                      w.SetAngularVelocity(l);
                      w.SetLinearVelocity(this.body.GetLinearVelocityFromWorldPoint(T));
                      x.Set(x.x * this.m_physScale, x.y * this.m_physScale);
                      b.Set(b.x * this.m_physScale, b.y * this.m_physScale);
                      var A = new s.kx();
                      var C = new s.kx();
                      A.graphics.beginFill(6737151, 0.35);
                      C.graphics.beginFill(65280);
                      A.graphics.moveTo(m.x, m.y);
                      C.graphics.moveTo(m.x, m.y);
                      A.graphics.lineTo(x.x, x.y);
                      C.graphics.lineTo(x.x, x.y);
                      A.graphics.lineTo(b.x, b.y);
                      C.graphics.lineTo(b.x, b.y);
                      A.graphics.lineTo(m.x, m.y);
                      C.graphics.lineTo(m.x, m.y);
                      A.graphics.endFill();
                      C.graphics.endFill();
                      f.addChildAt(A, _);
                      w.SetUserData(A);
                      new a.z5(w, A, C);
                    }
                  }
                }
                this.mc.parent.removeChild(this.mc);
                this.body = null;
              };
              m.shatter = function () {
                var e = c.w.currentSession;
                var t = e.level;
                var n = e.m_world;
                var i = Math.ceil(Math.random() * 2);
                c.w.currentSession.particleController.createRectBurst("glass", 10, this.body, this.glassParticles);
                r.m.instance.playAreaSoundInstance("Glass" + this.soundSuffix + i, this.body);
                t.removeFromPaintBodyVector(this.body);
                var h = this.body.GetWorldCenter();
                var l = this.body.GetAngularVelocity();
                n.DestroyBody(this.body);
                var d = this.body.GetAngle();
                if (this.impactPosition.x - (this.leftX + this.minDistEdge) <= 0) {
                  this.impactPosition.x = this.leftX;
                  this.allSides[3] = null;
                } else if (this.impactPosition.x - (this.rightX - this.minDistEdge) >= 0) {
                  this.impactPosition.x = this.rightX;
                  this.allSides[1] = null;
                }
                if (this.impactPosition.y - (this.topY + this.minDistEdge) <= 0) {
                  this.impactPosition.y = this.topY;
                  this.allSides[0] = null;
                } else if (this.impactPosition.y - (this.bottomY - this.minDistEdge) >= 0) {
                  this.impactPosition.y = this.bottomY;
                  this.allSides[2] = null;
                }
                var u = new o.gv();
                u.angle = d;
                u.position = h;
                var p = new o.m2();
                p.density = 2;
                p.friction = 0.3;
                p.restitution = 0.1;
                p.filter.categoryBits = 8;
                p.vertexCount = 3;
                var m = new o.RM(this.impactPosition.x * this.m_physScale, this.impactPosition.y * this.m_physScale);
                var f = this.mc.parent;
                var _ = f.getChildIndex(this.mc);
                for (var v = 0; v < 4; v++) {
                  if (this.allSides[v]) {
                    var y = this.allSides[v];
                    for (var g = 0; g < 2; g++) {
                      var w = n.CreateBody(u);
                      p.vertices[0] = this.impactPosition;
                      var x = new o.RM(y[g][0], y[g][1]);
                      p.vertices[1] = x;
                      var b = new o.RM(y[g + 1][0], y[g + 1][1]);
                      p.vertices[2] = b;
                      w.CreateShape(p);
                      w.SetMassFromShapes();
                      var T = w.GetWorldCenter();
                      w.SetAngularVelocity(l);
                      w.SetLinearVelocity(this.body.GetLinearVelocityFromWorldPoint(T));
                      x.Set(x.x * this.m_physScale, x.y * this.m_physScale);
                      b.Set(b.x * this.m_physScale, b.y * this.m_physScale);
                      var A = new s.kx();
                      var C = new s.kx();
                      A.graphics.beginFill(6737151, 0.35);
                      C.graphics.beginFill(65280);
                      A.graphics.moveTo(m.x, m.y);
                      C.graphics.moveTo(m.x, m.y);
                      A.graphics.lineTo(x.x, x.y);
                      C.graphics.lineTo(x.x, x.y);
                      A.graphics.lineTo(b.x, b.y);
                      C.graphics.lineTo(b.x, b.y);
                      A.graphics.lineTo(m.x, m.y);
                      C.graphics.lineTo(m.x, m.y);
                      A.graphics.endFill();
                      C.graphics.endFill();
                      f.addChildAt(A, _);
                      w.SetUserData(A);
                      new a.nd(w, A, C, this.stabbing);
                    }
                  }
                }
                this.mc.parent.removeChild(this.mc);
                this.body = null;
              };
              m.getJointBody = function (e = null) {
                return this.body;
              };
              m.triggerSingleActivation = function (e, t, n) {
                if (t == "wake from sleep") {
                  if (this.body) {
                    this.body.WakeUp();
                  }
                } else if (t == "apply impulse") {
                  if (this.body) {
                    var r = n[0];
                    var s = n[1];
                    var a = this.body.GetMass();
                    this.body.ApplyImpulse(new o.RM(r * a, s * a), this.body.GetWorldCenter());
                    var h = n[2];
                    var d = this.body.GetAngularVelocity();
                    this.body.SetAngularVelocity(d + h);
                  }
                } else if (t == "shatter") {
                  if (this.impactPosition) {
                    return;
                  }
                  if (this.body) {
                    c.w.currentSession.contactListener.deleteListener(l.jp.RESULT, this.shape);
                    c.w.currentSession.contactListener.deleteListener(i.fI.ADD, this.shape);
                    this.body.WakeUp();
                    var u = new o.RM(e.x / this.m_physScale, e.y / this.m_physScale);
                    var p = this.body.GetLocalPoint(u);
                    var m = p.y / p.x;
                    var f = p.x < 0 ? this.leftX : this.rightX;
                    var _ = p.y < 0 ? this.topY : this.bottomY;
                    var v = new o.RM(f, _);
                    if (f == this.leftX && _ == this.topY || f == this.rightX && _ == this.bottomY) {
                      var y = new o.RM(-v.y, v.x);
                    } else {
                      y = new o.RM(v.y, -v.x);
                    }
                    var g = o.x5.b2Dot(p, y);
                    this.impactPosition = new o.RM();
                    if (g > 0) {
                      this.impactPosition.y = _;
                      this.impactPosition.x = _ / m;
                    } else {
                      this.impactPosition.x = f;
                      this.impactPosition.y = f * m;
                    }
                    this.shatter();
                  }
                }
              };
              d = t;
              if (p = [{
                key: "bodyList",
                get: function () {
                  if (this.body) {
                    return [this.body];
                  } else {
                    return [];
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
                    Object.defineProperty(e, J(r.key), r);
                  }
                })(d.prototype, p);
              }
              Object.defineProperty(d, "prototype", {
                writable: false
              });
              return d;
            }(d.o);
            function $(e, t) {
              $ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return $(e, t);
            }
            n(69085);
            var Q = function (e) {
              function t(t, n, s, a) {
                var o;
                (o = e.call(this) || this).bloodParticles = 50;
                o.checkContact = function (e) {
                  if (e.impulse > o.stabImpulse) {
                    if (e.impulse > o.shatterImpulse) {
                      o.stab = false;
                      c.w.currentSession.contactListener.deleteListener(l.jp.RESULT, o.shape);
                      if (!o.inSAA) {
                        c.w.currentSession.level.singleActionVector.push(o);
                      }
                      o.inSAA = true;
                      return;
                    }
                    if (e.otherShape.m_material & 2 && !o.sensor) {
                      o.stab = true;
                      if (!o.inSAA) {
                        c.w.currentSession.level.singleActionVector.push(o);
                      }
                      o.inSAA = true;
                    }
                  }
                };
                o.checkAdd = function (e) {
                  if (e.shape2.m_material & 2) {
                    var t = e.shape2.GetBody();
                    o.bodiesToAdd.push(t);
                    o.normals.push(e.normal);
                    o.add = true;
                  }
                };
                o.checkRemove = function (e) {
                  if (e.shape2.m_material & 2) {
                    var t = e.shape2.GetBody();
                    if (o.bjDictionary.get(t) || o.bodiesToAdd.indexOf(t) > -1) {
                      o.bodiesToRemove.push(t);
                      o.remove = true;
                    }
                  }
                };
                o.fleshSoundStopped = function (e) {
                  o.fleshSound.removeEventListener(r.Gm.AREA_SOUND_STOP, o.fleshSoundStopped);
                  o.fleshSound = null;
                };
                Object.assign(o, a);
                o.body = t;
                o.shape = t.GetShapeList();
                o.sprite = n;
                o.maskSprite = s;
                o.setValues();
                o.bodiesToAdd = [];
                o.normals = [];
                o.bodiesToRemove = [];
                o.bjDictionary = new Map();
                o.countDictionary = new Map();
                var h = c.w.currentSession;
                h.contactListener.registerListener(i.fI.RESULT, o.shape, o.checkContact);
                h.level.paintItemVector.push(o);
                return o;
              }
              var n;
              var d;
              d = e;
              (n = t).prototype = Object.create(d.prototype);
              n.prototype.constructor = n;
              $(n, d);
              var p = t.prototype;
              p.setValues = function () {
                var e = this.body.GetMass();
                this.shatterImpulse = e * 10;
                this.stabImpulse = e * 2;
                if (e >= 0.15) {
                  this.fatal = true;
                }
                if (e < 0.75) {
                  this.soundSuffix = "Light";
                  this.glassParticles = 50;
                } else if (e < 4) {
                  this.soundSuffix = "Mid";
                  this.glassParticles = 100;
                } else {
                  this.soundSuffix = "Heavy";
                  this.glassParticles = 200;
                }
              };
              p.actions = function () {
                if (this.add) {
                  for (var e = 0; e < this.bodiesToAdd.length; e++) {
                    this.createPrisJoint(this.bodiesToAdd[e], this.normals[e]);
                  }
                  this.bodiesToAdd = [];
                  this.normals = [];
                  this.add = false;
                }
                if (this.remove) {
                  for (e = 0; e < this.bodiesToRemove.length; e++) {
                    this.removeJoint(this.bodiesToRemove[e]);
                  }
                  this.bodiesToRemove = [];
                  this.remove = false;
                }
              };
              p.singleAction = function () {
                var e = c.w.currentSession;
                var t = e.level;
                var n = e.m_world;
                var s = e.contactListener;
                this.inSAA = false;
                if (this.stab) {
                  this.stab = false;
                  s.deleteListener(l.jp.RESULT, this.shape);
                  var a = this.shape.GetFilterData().Copy();
                  a.maskBits = 8;
                  this.shape.SetFilterData(a);
                  n.Refilter(this.shape);
                  var h = new o.m2();
                  h.isSensor = true;
                  h.filter.categoryBits = 8;
                  h.filter.maskBits = 4;
                  h.vertexCount = this.shape.GetVertexCount();
                  h.vertices = this.shape.GetVertices();
                  this.sensor = this.body.CreateShape(h);
                  t.actionsVector.push(this);
                  s.registerListener(l.jp.RESULT, this.shape, this.checkContact);
                  s.registerListener(i.fI.ADD, this.sensor, this.checkAdd);
                  s.registerListener(i.fI.REMOVE, this.sensor, this.checkRemove);
                } else {
                  t.removeFromPaintItemVector(this);
                  t.removeFromActionsVector(this);
                  var d = Math.ceil(Math.random() * 2);
                  e.particleController.createRectBurst("glass", 10, this.body, this.glassParticles);
                  r.m.instance.playAreaSoundInstance("Glass" + this.soundSuffix + d, this.body);
                  n.DestroyBody(this.body);
                  this.sprite.parent.removeChild(this.sprite);
                  s.deleteListener(l.jp.RESULT, this.shape);
                  if (this.sensor) {
                    this.add = this.remove = false;
                    s.deleteListener(i.fI.ADD, this.sensor);
                    s.deleteListener(i.fI.REMOVE, this.sensor);
                    if (this.bmd) {
                      this.bmd.dispose();
                    }
                  }
                }
              };
              p.createPrisJoint = function (e, t) {
                if (this.bjDictionary.get(e)) {
                  var n = this.countDictionary.get(e);
                  this.countDictionary.set(e, n + 1);
                } else {
                  var i = c.w.currentSession;
                  var s = e.GetShapeList();
                  var l = s.GetUserData();
                  if (l instanceof h.sP || l instanceof a.S3) {
                    l.shapeImpale(s, this.fatal);
                  }
                  var d = new o.iE();
                  var u = e.GetWorldCenter();
                  var p = this.body ?? c.w.currentSession.level.levelBody;
                  d.Initialize(p, e, u, t);
                  d.collideConnected = true;
                  d.enableMotor = true;
                  d.maxMotorForce = 30;
                  d.motorSpeed = 0;
                  this.bjDictionary.set(e, i.m_world.CreateJoint(d));
                  this.countDictionary.set(e, 1);
                  if (e != this.previousBody && (this.previousBody = e, i.particleController.createPointBloodBurst(u.x * this.m_physScale, u.y * this.m_physScale, 5, 15, this.bloodParticles), this.paintBlood(u.x * this.m_physScale, u.y * this.m_physScale), !this.fleshSound)) {
                    var m = Math.ceil(Math.random() * 3);
                    this.fleshSound = r.m.instance.playAreaSoundInstance("ImpaleSpikes" + m, this.body);
                    if (this.fleshSound) {
                      this.fleshSound.addEventListener(r.Gm.AREA_SOUND_STOP, this.fleshSoundStopped, false, 0, true);
                    }
                  }
                }
              };
              p.removeJoint = function (e) {
                var t = this.countDictionary.get(e);
                if ((t -= 1) == 0) {
                  var n = this.bjDictionary.get(e);
                  c.w.currentSession.m_world.DestroyJoint(n);
                  this.bjDictionary.delete(e);
                  this.countDictionary.delete(e);
                } else {
                  this.countDictionary.set(e, t);
                }
              };
              p.paintBlood = function (e, t) {
                if (c.w.bloodSetting !== 0) {
                  if (!this.bitmap) {
                    var n = this.sprite.getBounds(this.sprite);
                    this.bmd = new s.ws(Math.ceil(n.width), Math.ceil(n.height), true, 0);
                    this.bitmap = new s.mb(this.bmd);
                    this.bitmap.x = n.x;
                    this.bitmap.y = n.y;
                    this.sprite.addChild(this.bitmap);
                  }
                  var r = new s.bR(e, t);
                  r = c.w.currentSession.level.background.localToGlobal(r);
                  r = this.sprite.globalToLocal(r);
                  var i = new s.j7((0, u.zI)("Game", "GlassBloodMC"));
                  i.convertChildren(i._pixiSprite);
                  i.inner.x = r.x;
                  i.inner.y = r.y;
                  i.inner.rotation = Math.random() * 360;
                  if (Math.random() > 0.5) {
                    i.inner.scaleX = -1;
                  }
                  i.mask = this.maskSprite;
                  var a = new s.uq();
                  a.translate(-this.bitmap.x, -this.bitmap.y);
                  this.bmd.draw(i, a);
                  i.mask = null;
                }
              };
              p.paint = function () {
                var e = this.body.GetInterpolatedPosition();
                this.sprite.x = e.x * this.m_physScale;
                this.sprite.y = e.y * this.m_physScale;
                this.sprite.rotation = this.body.GetInterpolatedAngle() * t.oneEightyOverPI % 360;
              };
              return t;
            }(d.o);
            function ee(e, t) {
              ee = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return ee(e, t);
            }
            var te = function (e) {
              function t(t, n, r, i) {
                return e.call(this, t, n, r, {
                  stabbing: i
                }) || this;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              ee(n, r);
              var s = t.prototype;
              s.setValues = function () {
                var e = this.body.GetMass();
                this.shatterImpulse = e * 10;
                if (this.stabbing) {
                  this.stabImpulse = Math.min(this.body.m_mass * 5, 2.5);
                  if (e < 0.1) {
                    this.bloodParticles = 15;
                    this.stabImpulse = 0;
                  }
                  if (e >= 0.25 && this.sprite.width >= 15) {
                    this.fatal = true;
                  }
                } else {
                  this.stabImpulse = this.shatterImpulse;
                }
                if (e < 0.75) {
                  this.soundSuffix = "Light";
                  this.glassParticles = 50;
                } else if (e < 4) {
                  this.soundSuffix = "Mid";
                  this.glassParticles = 100;
                } else {
                  this.soundSuffix = "Heavy";
                  this.glassParticles = 200;
                }
              };
              s.actions = function () {
                if (this.add) {
                  for (var e = 0; e < this.bodiesToAdd.length; e++) {
                    this.createPrisJoint(this.bodiesToAdd[e], this.normals[e]);
                  }
                  this.bodiesToAdd = [];
                  this.normals = [];
                  this.add = false;
                }
                if (this.remove) {
                  for (e = 0; e < this.bodiesToRemove.length; e++) {
                    this.removeJoint(this.bodiesToRemove[e]);
                  }
                  this.bodiesToRemove = [];
                  this.remove = false;
                  this.checkZeroJoints();
                }
              };
              s.checkZeroJoints = function () {
                var e = 0;
                this.bjDictionary.forEach(function (t, n) {
                  e += 1;
                });
                if (e == 0) {
                  var t = c.w.currentSession;
                  var n = t.contactListener;
                  n.deleteListener(l.jp.RESULT, this.shape);
                  var r = new o.z_();
                  r.categoryBits = 8;
                  this.shape.SetFilterData(r);
                  t.m_world.Refilter(this.shape);
                  n.registerListener(l.jp.RESULT, this.shape, this.checkContact);
                  n.deleteListener(i.fI.ADD, this.sensor);
                  n.deleteListener(i.fI.REMOVE, this.sensor);
                  this.body.DestroyShape(this.sensor);
                  this.sensor = null;
                  t.level.removeFromActionsVector(this);
                }
              };
              return t;
            }(Q);
            var ne = n(33245);
            function re(e, t) {
              re = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return re(e, t);
            }
            n(34060);
            var ie = function (e) {
              function t(t, n, a, o) {
                var h;
                if (o === undefined) {
                  o = false;
                }
                (h = e.call(this) || this).checkAdd = function (e) {
                  var t = e.shape2.GetBody();
                  if (e.shape2.GetMaterial() & 6 || t.GetMass() == 0) {
                    if (!e.shape2.IsSensor()) {
                      h.bodiesToAdd.push(t);
                      h.add = true;
                    }
                  }
                };
                h.checkRemove = function (e) {
                  var t = e.shape2.GetBody();
                  if (e.shape2.GetMaterial() & 6 || t.GetMass() == 0) {
                    if (!e.shape2.IsSensor()) {
                      if (h.bjDictionary.get(t) || h.bodiesToAdd.indexOf(t) > -1) {
                        h.bodiesToRemove.push(t);
                        h.remove = true;
                      }
                    }
                  }
                };
                h.fleshSoundStopped = function (e) {
                  h.fleshSound.removeEventListener(r.Gm.AREA_SOUND_STOP, h.fleshSoundStopped);
                  h.fleshSound = null;
                };
                h.solidSoundStopped = function (e) {
                  h.solidSound.removeEventListener(r.Gm.AREA_SOUND_STOP, h.solidSoundStopped);
                  h.solidSound = null;
                };
                h.fixedTurret = o;
                h.mc = new s.j7((0, ne.z)("Game", "HarpoonMC"));
                h.mc.x = t.x * h.m_physScale;
                h.mc.y = t.y * h.m_physScale;
                h.mc.rotation = n * 180 / Math.PI;
                c.w.currentSession.level.background.addChild(h.mc);
                h.bmd = new s.ws(106, 16, true, 0);
                h.bitmap = new s.mb(h.bmd);
                h.mc.addChild(h.bitmap);
                h.createBody(t, n, a);
                h.harpoonBody.SetUserData(h.mc);
                h.bodiesToAdd = [];
                h.bodiesToRemove = [];
                h.bjDictionary = new Map();
                h.countDictionary = new Map();
                var l = c.w.currentSession.contactListener;
                l.registerListener(i.fI.ADD, h.sensorShape, h.checkAdd);
                l.registerListener(i.fI.REMOVE, h.sensorShape, h.checkRemove);
                c.w.currentSession.level.actionsVector.push(h);
                c.w.currentSession.level.paintBodyVector.push(h.harpoonBody);
                return h;
              }
              var n;
              var l;
              l = e;
              (n = t).prototype = Object.create(l.prototype);
              n.prototype.constructor = n;
              re(n, l);
              var d = t.prototype;
              d.createBody = function (e, t, n) {
                var r = c.w.currentSession;
                var i = new o.gv();
                i.position = e;
                i.angle = t;
                this.harpoonBody = r.m_world.CreateBody(i);
                var s = new o.m2();
                s.SetAsOrientedBox(26.25 / this.m_physScale, 2.5 / this.m_physScale, new o.RM(26.25 / this.m_physScale, 0));
                s.isSensor = true;
                s.density = 3;
                s.filter.categoryBits = 8;
                s.filter.groupIndex = r.version > 1.42 ? -21 : -20;
                this.sensorShape = this.harpoonBody.CreateShape(s);
                s.SetAsOrientedBox(26.25 / this.m_physScale, 2.5 / this.m_physScale, new o.RM(-26.25 / this.m_physScale, 0));
                s.isSensor = false;
                this.harpoonBody.CreateShape(s);
                if (this.fixedTurret) {
                  var a = this.harpoonBody.GetWorldPoint(new o.RM(52.5 / this.m_physScale, 0));
                  this.harpoonBody.SetXForm(a, t);
                }
                this.harpoonBody.SetMassFromShapes();
                this.harpoonBody.SetLinearVelocity(n);
              };
              d.actions = function () {
                if (this.add) {
                  for (var e = 0; e < this.bodiesToAdd.length; e++) {
                    this.createPrisJoint(this.bodiesToAdd[e]);
                  }
                  this.bodiesToAdd = [];
                  this.add = false;
                }
                if (this.remove) {
                  for (e = 0; e < this.bodiesToRemove.length; e++) {
                    this.removeJoint(this.bodiesToRemove[e]);
                  }
                  this.bodiesToRemove = [];
                  this.remove = false;
                }
              };
              d.createPrisJoint = function (e) {
                var n = e.GetShapeList();
                if (this.bjDictionary.get(e)) {
                  var i = this.countDictionary.get(e);
                  this.countDictionary.set(e, i + 1);
                } else {
                  var l = c.w.currentSession;
                  var d = new o.iE();
                  var u = this.harpoonBody.GetWorldPoint(new o.RM(26.25 / this.m_physScale, 0));
                  var p = this.harpoonBody.GetAngle();
                  var m = new o.RM(Math.cos(p), Math.sin(p));
                  d.Initialize(this.harpoonBody, e, u, m);
                  d.enableLimit = true;
                  d.upperTranslation = 0;
                  d.lowerTranslation = 0;
                  d.collideConnected = true;
                  d.userData = h.sP.IMPALE_JOINT;
                  d.enableMotor = true;
                  d.maxMotorForce = 100000;
                  d.motorSpeed = 0;
                  this.bjDictionary.set(e, l.m_world.CreateJoint(d));
                  this.countDictionary.set(e, 1);
                  this.dispatchEvent(new s.Jh(t.HIT));
                  if (e != this.previousBody) {
                    this.previousBody = e;
                    if (n.GetMaterial() & 6) {
                      var f;
                      var _;
                      var v;
                      var y = n.GetUserData();
                      if (y instanceof h.sP) {
                        _ = 50;
                        y.shapeImpale(n, true);
                        l.particleController.createPointBloodBurst(u.x * this.m_physScale, u.y * this.m_physScale, 5, 15, _);
                      } else if (y instanceof a.S3) {
                        _ = 50;
                        var g = y;
                        l.particleController.createPointBloodBurst(u.x * this.m_physScale, u.y * this.m_physScale, 5, 15, _);
                        g.shapeImpale(n, true);
                      } else if (y instanceof a.EK) {
                        f = (v = y).particleType;
                        _ = 25;
                        l.particleController.createPointBurst(f, u.x * this.m_physScale, u.y * this.m_physScale, 5, 15, _);
                      }
                      if (v || c.w.bloodSetting !== 0) {
                        var w = new s.j7();
                        w.setPixiMovieClip((0, ne.z)("Game", "HarpoonBloodMC"));
                        w.gotoAndStop(Math.ceil(Math.random() * 5));
                        if (v) {
                          var x = w.transform.colorTransform;
                          x.color = v.juiceColor;
                          x.alphaMultiplier = 0.75;
                          this.bmd.draw(w, null, x);
                        } else {
                          this.bmd.draw(w);
                        }
                      }
                      if (!this.fleshSound) {
                        var b = Math.ceil(Math.random() * 2);
                        this.fleshSound = r.m.instance.playAreaSoundInstance("HarpoonFlesh" + b, this.harpoonBody);
                        if (this.fleshSound) {
                          this.fleshSound.addEventListener(r.Gm.AREA_SOUND_STOP, this.fleshSoundStopped, false, 0, true);
                        }
                      }
                    } else if (!this.solidSound) {
                      b = Math.ceil(Math.random() * 2);
                      this.solidSound = r.m.instance.playAreaSoundInstance("HarpoonSolid" + b, this.harpoonBody);
                      if (this.solidSound) {
                        this.solidSound.addEventListener(r.Gm.AREA_SOUND_STOP, this.solidSoundStopped, false, 0, true);
                      }
                    }
                  }
                }
              };
              d.removeJoint = function (e) {
                var t = this.countDictionary.get(e);
                if ((t -= 1) == 0) {
                  var n = this.bjDictionary.get(e);
                  c.w.currentSession.m_world.DestroyJoint(n);
                  this.bjDictionary.delete(e);
                  this.countDictionary.delete(e);
                } else {
                  this.countDictionary.set(e, t);
                }
              };
              return t;
            }(d.o);
            function se(e, t) {
              se = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return se(e, t);
            }
            ie.HIT = "hit";
            var ae = function (e) {
              function t(t, n, r) {
                var i;
                if (n === undefined) {
                  n = null;
                }
                if (r === undefined) {
                  r = null;
                }
                (i = e.call(this) || this).targetAdd = function (e) {
                  if (e.shape2.GetMaterial() & 2) {
                    var t = e.shape2.GetBody();
                    if (i.targetDictionary.get(t)) {
                      var n = i.targetDictionary.get(t);
                      i.targetDictionary.set(t, n + 1);
                    } else {
                      i.targetDictionary.set(t, 1);
                    }
                  }
                };
                i.targetAdd2 = function (e) {
                  i.targetAdd(e);
                  i.checkAdd(e);
                };
                i.targetRemove = function (e) {
                  if (e.shape2.GetMaterial() & 2) {
                    var t = e.shape2.GetBody();
                    if (i.targetDictionary.get(t)) {
                      var n = i.targetDictionary.get(t);
                      if ((n -= 1) == 0) {
                        i.targetDictionary.delete(t);
                        if (i.targetBody && t == i.targetBody) {
                          i.targetBody = null;
                        }
                      } else {
                        i.targetDictionary.set(t, n);
                      }
                    }
                  }
                };
                i.checkAdd = function (e) {
                  if (i.targetBody) {
                    var t = e.shape2;
                    var n = t.m_body;
                    var r = n.GetMass();
                    var s = t.m_density;
                    if (!t.IsSensor() && (!(r > 0) || !(s < 10))) {
                      var a = i.turretBody.GetPosition();
                      var h = i.targetBody.GetWorldCenter();
                      var l = new o.Cb();
                      l.p1 = a;
                      l.p2 = h;
                      var d = new o.RM();
                      if (t.TestSegment(n.m_xf, [], d, l, 1)) {
                        i.pathClear = false;
                      }
                    }
                  } else if (!i.fixedTurret) {
                    i.pathClear = false;
                  }
                };
                i.checkPersist = function (e) {
                  if (i.targetBody) {
                    var t = e.shape2;
                    var n = t.m_body;
                    var r = n.GetMass();
                    var s = t.m_density;
                    if (!t.IsSensor() && (!(r > 0) || !(s < 10))) {
                      var a = i.turretBody.GetPosition();
                      var h = i.targetBody.GetWorldCenter();
                      var l = new o.Cb();
                      l.p1 = a;
                      l.p2 = h;
                      var d = new o.RM();
                      if (t.TestSegment(n.m_xf, [], d, l, 1)) {
                        i.pathClear = false;
                      }
                    }
                  } else if (!i.fixedTurret) {
                    i.pathClear = false;
                  }
                };
                i.harpoonHit = function (e) {
                  i.harpoon.removeEventListener(a.Av.HIT, i.harpoonHit);
                  for (var t = 0; t < i.anchorJoints.length - 1; t++) {
                    var n = i.anchorJoints[t];
                    n.m_body2.m_shapeList.m_density = 10;
                    n.m_body2.SetMassFromShapes();
                  }
                };
                var h = t;
                i.fixedTurret = h.fixedAngleTurret;
                i.turretAngle = h.turretAngle;
                i.triggerFiring = h.triggerFiring;
                i.disabled = h.startDeactivated;
                i.useAnchor = h.useAnchor;
                var l = new o.RM(h.x, h.y);
                if (r) {
                  l.Add(new o.RM(r.x, r.y));
                }
                i.createBody(l, h.rotation * Math.PI / 180);
                i.mc = new s.j7((0, u.zI)("Game", "HarpoonGunMC"));
                i.mc.convertChildren(i.mc.pixiSprite);
                i.mc.x = h.x;
                i.mc.y = h.y;
                i.mc.rotation = h.rotation;
                var d = c.w.currentSession.level.background;
                i.anchorSprite = new s.kx();
                d.addChild(i.anchorSprite);
                d.addChild(i.mc);
                i.setLight();
                i.targetDictionary = new Map();
                c.w.currentSession.level.paintItemVector.push(i);
                return i;
              }
              var n;
              var h;
              h = e;
              (n = t).prototype = Object.create(h.prototype);
              n.prototype.constructor = n;
              se(n, h);
              var l = t.prototype;
              l.createBody = function (e, n) {
                var r = new o.m2();
                r.friction = 0.5;
                r.restitution = 0.1;
                r.filter.categoryBits = 8;
                r.filter.groupIndex = -20;
                var s = c.w.currentSession;
                r.SetAsOrientedBox(25 / this.m_physScale, 16 / this.m_physScale, new o.RM(e.x / this.m_physScale, e.y / this.m_physScale), n);
                s.level.levelBody.CreateShape(r);
                r.isSensor = true;
                r.SetAsOrientedBox(400 / this.m_physScale, 200 / this.m_physScale, new o.RM((e.x - Math.sin(n) * -200) / this.m_physScale, (e.y + Math.cos(n) * -200) / this.m_physScale), n);
                this.rangeSensor = s.level.levelBody.CreateShape(r);
                var a = this.rangeSensor.m_vertices[0];
                var h = new o.gv();
                var l = new o.RM((e.x - Math.sin(n) * -35) / this.m_physScale, (e.y + Math.cos(n) * -35) / this.m_physScale);
                h.position = l;
                h.angle = n;
                this.turretBody = s.m_world.CreateBody(h);
                var d = new o.RM(a.x - l.x, a.y - l.y);
                this.targetLength = d.Length() + 0.5;
                var u = new o.Gq();
                u.maxMotorTorque = 10000;
                u.collideConnected = true;
                u.Initialize(this.turretBody, s.level.levelBody, l);
                this.turretJoint = s.m_world.CreateJoint(u);
                if (this.useAnchor) {
                  this.createAnchor();
                }
                if (this.fixedTurret) {
                  s.level.levelBody.DestroyShape(this.rangeSensor);
                  this.rangeSensor = null;
                  this.turretBody.SetXForm(this.turretBody.GetPosition(), n + this.turretAngle / t.oneEightyOverPI);
                  if (!this.triggerFiring) {
                    this.createTargetSensor(this.targetLength);
                    this.aligned = true;
                    this.pathClear = true;
                    c.w.currentSession.level.actionsVector.push(this);
                  }
                } else {
                  var p = c.w.currentSession.contactListener;
                  p.registerListener(i.fI.ADD, this.rangeSensor, this.targetAdd);
                  p.registerListener(i.fI.REMOVE, this.rangeSensor, this.targetRemove);
                  c.w.currentSession.level.actionsVector.push(this);
                }
              };
              l.actions = function () {
                if (!this.disabled) {
                  var e = this.turretBody.GetPosition();
                  if (!this.targetBody) {
                    if (this.targetSensor && !this.fixedTurret) {
                      this.removeTargetSensor();
                    }
                    this.findClosestTarget(e);
                  }
                  if (this.targetBody) {
                    if (this.pathClear && this.aligned && !this.triggerFiring) {
                      var t = c.w.currentSession.contactListener;
                      if (this.fixedTurret) {
                        this.fireHarpoon2();
                        t.deleteListener(i.fI.REMOVE, this.targetSensor);
                      } else {
                        this.fireHarpoon();
                        t.deleteListener(i.fI.ADD, this.rangeSensor);
                        t.deleteListener(i.fI.REMOVE, this.rangeSensor);
                        c.w.currentSession.level.levelBody.DestroyShape(this.rangeSensor);
                      }
                      this.removeTargetSensor();
                      c.w.currentSession.level.removeFromActionsVector(this);
                    }
                    if (!this.fixedTurret) {
                      var n = this.targetBody.GetWorldCenter();
                      var r = new o.RM(n.x - e.x, n.y - e.y);
                      var s = Math.atan2(r.y, r.x) + Math.PI * 0.5;
                      this.aligned = false;
                      var a = this.turretBody.GetAngle() - s;
                      var h = Math.PI * 2;
                      if (a > Math.PI) {
                        a -= h;
                      }
                      if (a < -Math.PI) {
                        a += h;
                      }
                      if (Math.abs(a) > 0.52) {
                        s += a * 0.5;
                      } else {
                        this.aligned = true;
                      }
                      this.turretBody.SetXForm(e, s);
                      this.turretBody.SetAngularVelocity(0);
                      this.turretBody.SetLinearVelocity(new o.RM(0, 0));
                    }
                  }
                  this.pathClear = true;
                }
              };
              l.findClosestTarget = function (e) {
                var t = this;
                var n = 1000000;
                this.targetDictionary.forEach(function (r, i) {
                  var s = i;
                  var a = s.GetWorldCenter();
                  var h = new o.RM(a.x - e.x, a.y - e.y).LengthSquared();
                  if (h < n) {
                    n = h;
                    t.targetBody = s;
                  }
                });
                if (this.targetBody && !this.fixedTurret) {
                  this.createTargetSensor(this.targetLength);
                }
              };
              l.createTargetSensor = function (e) {
                var t = new o.m2();
                t.isSensor = true;
                t.density = 1;
                t.filter.categoryBits = 8;
                t.filter.groupIndex = -20;
                var n = e * 0.5;
                t.SetAsOrientedBox(2 / this.m_physScale, n, new o.RM(0, -n), 0);
                this.targetSensor = this.turretBody.CreateShape(t);
                var r = c.w.currentSession.contactListener;
                if (this.fixedTurret) {
                  r.registerListener(i.fI.ADD, this.targetSensor, this.targetAdd2);
                  r.registerListener(i.fI.REMOVE, this.targetSensor, this.targetRemove);
                  r.registerListener(i.fI.PERSIST, this.targetSensor, this.checkPersist);
                } else {
                  this.turretBody.SetMassFromShapes();
                  r.registerListener(i.fI.ADD, this.targetSensor, this.checkAdd);
                  r.registerListener(i.fI.PERSIST, this.targetSensor, this.checkPersist);
                }
                this.pathClear = false;
                this.turretJoint.EnableMotor(false);
              };
              l.removeTargetSensor = function () {
                var e = c.w.currentSession.contactListener;
                e.deleteListener(i.fI.ADD, this.targetSensor);
                e.deleteListener(i.fI.PERSIST, this.targetSensor);
                this.turretBody.DestroyShape(this.targetSensor);
                this.targetSensor = null;
                this.turretJoint.SetMotorSpeed(0);
                this.turretJoint.EnableMotor(true);
              };
              l.fireHarpoon = function () {
                var e = 2000 / this.m_physScale;
                var t = this.targetBody.GetLinearVelocity();
                var n = this.targetBody.GetWorldCenter();
                var i = this.turretBody.GetPosition();
                var s = Math.pow(t.x, 2) + Math.pow(t.y, 2) - Math.pow(e, 2);
                var h = (t.x * (n.x - i.x) + t.y * (n.y - i.y)) * 2;
                var l = Math.pow(n.x - i.x, 2) + Math.pow(n.y - i.y, 2);
                var d = Math.pow(h, 2) - s * 4 * l;
                if (!(d < 0)) {
                  var c = (-h + Math.sqrt(d)) / (s * 2);
                  var u = (-h - Math.sqrt(d)) / (s * 2);
                  c = c < 0 ? 10000 : c;
                  u = u < 0 ? 10000 : u;
                  var p = Math.min(c, u);
                  var m = p * t.x + n.x;
                  var f = p * t.y + n.y;
                  var _ = new o.RM(m - i.x, f - i.y);
                  var v = Math.atan2(_.y, _.x);
                  var y = new o.RM(e * Math.cos(v), e * Math.sin(v));
                  this.mc.turret.harpoon.visible = false;
                  this.harpoon = new a.Av(i, v, y);
                  r.m.instance.playAreaSoundInstance("HarpoonFire", this.harpoon.harpoonBody);
                  if (this.useAnchor) {
                    var g = this.anchorJoints[this.anchorJoints.length - 1];
                    g.m_localAnchor2 = new o.RM(-20 / this.m_physScale, 0);
                    g.m_body2 = this.harpoon.harpoonBody;
                    this.harpoon.addEventListener(a.Av.HIT, this.harpoonHit, false, 0, true);
                  }
                }
              };
              l.fireHarpoon2 = function () {
                var e = 2000 / this.m_physScale;
                var t = this.turretBody.GetPosition();
                var n = this.turretBody.GetWorldPoint(new o.RM(0, -10));
                var i = new o.RM(n.x - t.x, n.y - t.y);
                var s = Math.atan2(i.y, i.x);
                var h = new o.RM(e * Math.cos(s), e * Math.sin(s));
                this.mc.turret.harpoon.visible = false;
                this.harpoon = new a.Av(t, s, h, this.fixedTurret);
                r.m.instance.playAreaSoundInstance("HarpoonFire", this.harpoon.harpoonBody);
                this.targetDictionary = new Map();
                this.targetBody = null;
                if (this.useAnchor) {
                  var l = this.anchorJoints[this.anchorJoints.length - 1];
                  l.m_localAnchor2 = new o.RM(-20 / this.m_physScale, 0);
                  l.m_body2 = this.harpoon.harpoonBody;
                  this.harpoon.addEventListener(a.Av.HIT, this.harpoonHit, false, 0, true);
                }
              };
              l.createAnchor = function () {
                var e = this.turretBody.GetWorldPoint(new o.RM(0, -50 / this.m_physScale));
                var t = this.turretBody.GetWorldPoint(new o.RM(-21.5 / this.m_physScale, 17 / this.m_physScale));
                var n = new o.gv();
                var r = new o._A();
                r.friction = 0.5;
                r.restitution = 0.1;
                r.filter.categoryBits = 8;
                r.filter.groupIndex = -20;
                r.density = 0.25;
                r.radius = 2.5 / this.m_physScale;
                var i;
                var s;
                var a;
                var h;
                var l = c.w.currentSession.m_world;
                var d = new o.RM(e.x - t.x, e.y - t.y).Length() * 1.25 / 8;
                var u = (e.x - t.x) / 8;
                var p = (e.y - t.y) / 8;
                var m = new o.Vy();
                this.anchorJoints = [];
                for (var f = 0; f < 8; f++) {
                  i = f == 0 ? c.w.currentSession.level.levelBody : s;
                  if (f == 0) {
                    i = c.w.currentSession.level.levelBody;
                    a = t.Copy();
                  } else {
                    a = (i = s).GetWorldCenter();
                  }
                  if (f < 7) {
                    t.Add(new o.RM(u, p));
                    n.position = t;
                    (s = l.CreateBody(n)).CreateShape(r);
                    s.SetMassFromShapes();
                    h = t.Copy();
                  } else {
                    s = this.turretBody;
                    h = e;
                  }
                  m.Initialize(i, s, a, h);
                  m.length = d;
                  var _ = l.CreateJoint(m);
                  this.anchorJoints.push(_);
                }
              };
              l.paint = function () {
                this.mc.turret.rotation = this.turretBody.GetInterpolatedAngle() * 180 / Math.PI - this.mc.rotation;
                if (this.anchorJoints) {
                  var e = this.anchorJoints.length;
                  this.anchorSprite.graphics.clear();
                  this.anchorSprite.graphics.lineStyle(1);
                  var t = this.anchorJoints[0];
                  var n = t.GetInterpolatedAnchor1();
                  this.anchorSprite.graphics.moveTo(n.x * this.m_physScale, n.y * this.m_physScale);
                  for (var r = 0; r < e; r++) {
                    n = (t = this.anchorJoints[r]).GetInterpolatedAnchor2();
                    this.anchorSprite.graphics.lineTo(n.x * this.m_physScale, n.y * this.m_physScale);
                  }
                }
              };
              l.triggerSingleActivation = function (e, t, n) {
                if (t == "fire harpoon") {
                  if (!this.harpoon && !this.disabled) {
                    this.fireHarpoon2();
                    var r = c.w.currentSession.contactListener;
                    if (this.targetSensor) {
                      r.deleteListener(i.fI.REMOVE, this.targetSensor);
                      this.removeTargetSensor();
                    }
                    if (this.rangeSensor) {
                      r.deleteListener(i.fI.ADD, this.rangeSensor);
                      r.deleteListener(i.fI.REMOVE, this.rangeSensor);
                      c.w.currentSession.level.levelBody.DestroyShape(this.rangeSensor);
                    }
                    c.w.currentSession.level.removeFromActionsVector(this);
                  }
                } else if (t == "deactivate") {
                  this.disabled = true;
                  this.setLight();
                } else if (t == "activate") {
                  this.disabled = false;
                  this.setLight();
                }
              };
              l.setLight = function () {
                if (this.disabled) {
                  this.mc.turret.light.gotoAndStop(4);
                } else if (this.triggerFiring) {
                  this.mc.turret.light.gotoAndStop(3);
                } else if (this.fixedTurret) {
                  this.mc.turret.light.gotoAndStop(2);
                } else {
                  this.mc.turret.light.gotoAndStop(1);
                }
              };
              return t;
            }(d.o);
            function oe(e) {
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
            function he(e, t) {
              he = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return he(e, t);
            }
            var le = function (e) {
              function t(n) {
                var r;
                (r = e.call(this) || this).retargetCount = 0;
                r.mineResult = function (e) {
                  if (e.impulse > t.SMASH_IMPULSE) {
                    c.w.currentSession.level.singleActionVector.push(r);
                    var n = c.w.currentSession.contactListener;
                    n.deleteListener(i.fI.ADD, r.mineShape);
                    n.deleteListener(i.fI.RESULT, r.mineShape);
                  } else if (e.otherShape.GetMaterial() & 2) {
                    r.inContact = true;
                  }
                };
                r.targetAdd = function (e) {
                  if (e.shape2.GetMaterial() & 2) {
                    var t = e.shape2.GetBody();
                    if (r.targetDictionary.get(t)) {
                      var n = r.targetDictionary.get(t);
                      r.targetDictionary.set(t, n + 1);
                    } else {
                      r.targetDictionary.set(t, 1);
                    }
                  }
                };
                r.targetRemove = function (e) {
                  if (e.shape2.GetMaterial() & 2) {
                    var t = e.shape2.GetBody();
                    if (r.targetDictionary.get(t)) {
                      var n = r.targetDictionary.get(t);
                      if ((n -= 1) == 0) {
                        r.targetDictionary.delete(t);
                        if (r.target && t == r.target) {
                          r.target = null;
                          if (!r.countingDown) {
                            r.mc.light.gotoAndStop(1);
                          }
                        }
                      } else {
                        r.targetDictionary.set(t, n);
                      }
                    }
                  }
                };
                r.checkAdd = function (e) {
                  if (r.target) {
                    var t = e.shape2;
                    var n = t.m_body;
                    var i = n.GetMass();
                    var s = t.m_density;
                    if (!t.IsSensor() && (!(i > 0) || !(s < 10))) {
                      var a = r.targetingBody.GetPosition();
                      var h = r.target.GetWorldCenter();
                      var l = new o.Cb();
                      l.p1 = a;
                      l.p2 = h;
                      var d = new o.RM();
                      if (t.TestSegment(n.m_xf, [], d, l, 1)) {
                        r.pathClear = false;
                      }
                    }
                  } else {
                    r.pathClear = false;
                  }
                };
                r.checkPersist = function (e) {
                  if (r.target) {
                    var t = e.shape2;
                    var n = t.m_body;
                    var i = n.GetMass();
                    var s = t.m_density;
                    if (!t.IsSensor() && (!(i > 0) || !(s < 10))) {
                      var a = r.targetingBody.GetPosition();
                      var h = r.target.GetWorldCenter();
                      var l = new o.Cb();
                      l.p1 = a;
                      l.p2 = h;
                      var d = new o.RM();
                      if (t.TestSegment(n.m_xf, [], d, l, 1)) {
                        r.pathClear = false;
                      }
                    }
                  } else {
                    r.pathClear = false;
                  }
                };
                var a = n;
                r.createBodies(new o.RM(a.x, a.y));
                r.mc = new s.j7((0, u.zI)("Game", "HomingMineMC"));
                r.mc.convertChildren(r.mc._pixiSprite);
                c.w.currentSession.level.background.addChild(r.mc);
                r.seekSpeed = a.seekSpeed * 0.01;
                r.counter = a.explosionDelay * 30;
                r.targetDictionary = new Map();
                r.totalImpulseVector = new o.RM();
                var h = c.w.currentSession.contactListener;
                h.registerListener(i.fI.ADD, r.rangeSensor, r.targetAdd);
                h.registerListener(i.fI.REMOVE, r.rangeSensor, r.targetRemove);
                h.registerListener(i.fI.RESULT, r.mineShape, r.mineResult);
                c.w.currentSession.level.paintItemVector.push(r);
                c.w.currentSession.level.actionsVector.push(r);
                var l = new s.lU(5, 90, 16777215, 1, 0, 1, 5, 5, 1, 3, "inner");
                var d = new s.j7();
                d.setPixiMovieClip((0, u.zI)("Game", "metal_pieces_MC"), true);
                c.w.currentSession.particleController.createBMDArray("metalpieces", d, [l]);
                return r;
              }
              var n;
              var l;
              l = e;
              (n = t).prototype = Object.create(l.prototype);
              n.prototype.constructor = n;
              he(n, l);
              var d;
              var p;
              var m = t.prototype;
              m.createBodies = function (e) {
                var n = new o.gv();
                n.allowSleep = false;
                n.position = new o.RM(e.x / this.m_physScale, e.y / this.m_physScale);
                var r = new o._A();
                r.density = 1;
                r.friction = 1;
                r.restitution = 0.1;
                r.filter.categoryBits = 8;
                r.radius = 10 / this.m_physScale;
                this.mineBody = c.w.currentSession.m_world.CreateBody(n);
                this.mineShape = this.mineBody.CreateShape(r);
                this.mineBody.SetMassFromShapes();
                r.filter.groupIndex = -20;
                r.isSensor = true;
                r.radius = t.SENSOR_RADIUS / this.m_physScale;
                this.rangeSensor = this.mineBody.CreateShape(r);
                this.targetingBody = c.w.currentSession.m_world.CreateBody(n);
                var i = new o.m2();
                i.isSensor = true;
                i.density = 1;
                i.filter.categoryBits = 8;
                i.filter.groupIndex = -20;
                var s = r.radius * 0.5;
                i.SetAsOrientedBox(2 / this.m_physScale, s, new o.RM(0, -s), 0);
                this.targetingSensor = this.targetingBody.CreateShape(i);
                this.targetingBody.SetMassFromShapes();
                this.targetingBody.DestroyShape(this.targetingSensor);
                this.targetingSensor = null;
                this.mineBody.m_linearVelocity.y += 1 / 30 * -10;
                this.targetingBody.m_linearVelocity.y += 1 / 30 * -10;
              };
              m.paint = function () {
                var e = this.mineBody.GetInterpolatedWorldCenter();
                this.mc.x = e.x * this.m_physScale;
                this.mc.y = e.y * this.m_physScale;
                var n = this.mineBody.GetInterpolatedAngle();
                this.mc.rotation = n * t.oneEightyOverPI % 360;
                var r = this.totalImpulseVector.x * Math.cos(n) + this.totalImpulseVector.y * Math.sin(n);
                var i = this.totalImpulseVector.x * Math.sin(n) - this.totalImpulseVector.y * Math.cos(n);
                r += (Math.random() * r - r * 0.5) * 0.5;
                i += (Math.random() * i - i * 0.5) * 0.5;
                this.mc.jet1.scaleX = this.mc.jet1.scaleY = i < 0 ? Math.min(-i / this.seekSpeed, 2) : 0;
                this.mc.jet2.scaleX = this.mc.jet2.scaleY = r < 0 ? Math.min(-r / this.seekSpeed, 2) : 0;
                this.mc.jet3.scaleX = this.mc.jet3.scaleY = i > 0 ? Math.min(i / this.seekSpeed, 2) : 0;
                this.mc.jet4.scaleX = this.mc.jet4.scaleY = r > 0 ? Math.min(r / this.seekSpeed, 2) : 0;
              };
              m.actions = function () {
                if (this.countingDown && (this.counter -= 1, this.counter <= 0)) {
                  this.explode();
                } else {
                  var e = this.mineBody.GetPosition();
                  var n = this.mineBody.GetLinearVelocity();
                  var i = this.mineBody.GetAngularVelocity();
                  if (!this.target) {
                    if (this.targetingSensor) {
                      this.removeTargetingSensor();
                    }
                    this.findClosestTarget();
                  }
                  if (this.target) {
                    var s = this.target.GetWorldCenter();
                    var a = new o.RM(s.x - e.x, s.y - e.y);
                    var h = a.LengthSquared();
                    if (!this.countingDown && (h < t.EXPLOSION_DISTANCE || this.inContact)) {
                      if (!(this.counter > 0)) {
                        this.explode();
                        return;
                      }
                      this.mc.light.gotoAndPlay(5);
                      this.countingDown = true;
                      this.beepLoop = r.m.instance.playAreaSoundLoop("HomingMineBeep", this.mineBody);
                    }
                    if (this.countingDown && (h < t.EXPLOSION_DISTANCE || this.inContact)) {
                      var l = this.mc.light.currentFrame;
                      this.mc.light.gotoAndStop(l === 5 ? 6 : 5);
                    }
                    var d = Math.atan2(a.y, a.x) + Math.PI * 0.5;
                    this.targetingBody.SetXForm(e, d);
                    if (this.pathClear) {
                      var c;
                      var u;
                      if (!this.countingDown) {
                        this.mc.light.gotoAndStop(3);
                      }
                      if (!this.hoverLoop) {
                        this.hoverLoop = r.m.instance.playAreaSoundLoop("MineHover", this.mineBody);
                        r.m.instance.playAreaSoundInstance("HomingMineFind", this.mineBody);
                      }
                      var p = n.Copy();
                      p.Multiply(1 / 30);
                      var m = a.Copy();
                      m.Normalize();
                      var f = new o.RM(-m.y, m.x);
                      var _ = o.x5.b2Dot(p, f);
                      if (Math.abs(_) > this.seekSpeed) {
                        if (_ > 0) {
                          c = f.x * -this.seekSpeed;
                          u = f.y * -this.seekSpeed;
                        } else {
                          c = f.x * this.seekSpeed;
                          u = f.y * this.seekSpeed;
                        }
                      } else {
                        var v = _;
                        var y = this.seekSpeed;
                        var g = v * v + y * y;
                        var w = Math.sqrt(g);
                        var x = f.Copy();
                        x.Multiply(-v);
                        m.Multiply(w);
                        x.Add(m);
                        c = x.x;
                        u = x.y;
                      }
                    } else {
                      c = -n.x * t.SLOWING_FACTOR / this.mineBody.m_invMass;
                      u = -n.y * t.SLOWING_FACTOR / this.mineBody.m_invMass;
                      if (!this.countingDown) {
                        this.mc.light.gotoAndStop(2);
                      }
                      if (this.hoverLoop) {
                        this.hoverLoop.fadeOut(0.5);
                        this.hoverLoop = null;
                        r.m.instance.playAreaSoundInstance("HomingMineLose", this.mineBody);
                      }
                    }
                    this.retargetCount += 1;
                    if (this.retargetCount == 5) {
                      this.findClosestTarget();
                    }
                  } else {
                    c = -n.x * t.SLOWING_FACTOR / this.mineBody.m_invMass;
                    u = -n.y * t.SLOWING_FACTOR / this.mineBody.m_invMass;
                    if (this.hoverLoop) {
                      this.hoverLoop.fadeOut(0.5);
                      this.hoverLoop = null;
                      r.m.instance.playAreaSoundInstance("HomingMineLose", this.mineBody);
                    }
                  }
                  this.pathClear = true;
                  var b = -i * t.SLOWING_FACTOR / this.mineBody.m_invI;
                  this.mineBody.m_linearVelocity.x += this.mineBody.m_invMass * c;
                  this.mineBody.m_linearVelocity.y += this.mineBody.m_invMass * u;
                  this.mineBody.m_angularVelocity += this.mineBody.m_invI * b;
                  this.mineBody.m_linearVelocity.y += t.GRAVITY_DISPLACEMENT;
                  this.targetingBody.m_linearVelocity.y += t.GRAVITY_DISPLACEMENT;
                  this.totalImpulseVector.Set(c, u - this.seekSpeed * 0.5);
                }
              };
              m.singleAction = function () {
                var e = c.w.currentSession.level.actionsVector;
                var t = e.indexOf(this);
                if (t > -1) {
                  e.splice(t, 1);
                }
                this.explode();
              };
              m.explode = function () {
                var e = c.w.currentSession;
                var t = e.m_world;
                var n = new s.j7();
                n.setPixiMovieClip((0, u.zI)("Game", "explosion_2"));
                n.x = this.mc.x;
                n.y = this.mc.y;
                n.scaleX = n.scaleY = 0.5;
                n.loop = false;
                n.play();
                if (Math.random() > 0.5) {
                  n.scaleX = n.scaleX * -1;
                }
                n.rotation = this.mineBody.GetAngle() * 180 / Math.PI;
                e.containerSprite.addChildAt(n, 1);
                if (this.targetingSensor) {
                  this.removeTargetingSensor();
                }
                var l = e.contactListener;
                l.deleteListener(i.fI.ADD, this.rangeSensor);
                l.deleteListener(i.fI.REMOVE, this.rangeSensor);
                l.deleteListener(i.fI.ADD, this.mineShape);
                l.deleteListener(i.fI.RESULT, this.mineShape);
                t.DestroyBody(this.mineBody);
                t.DestroyBody(this.targetingBody);
                var d = [];
                var p = 2.6;
                var m = new o.nm();
                var f = this.mineBody.GetWorldCenter();
                m.lowerBound.Set(f.x - p, f.y - p);
                m.upperBound.Set(f.x + p, f.y + p);
                t.Query(m, d, 30);
                for (var _ = 0; _ < d.length; _++) {
                  var v = d[_];
                  var y = v.GetBody();
                  if (!y.IsStatic()) {
                    var g = y.GetWorldCenter();
                    var w = new o.RM(g.x - f.x, g.y - f.y);
                    var x = w.Length();
                    var b = 1 - (x = Math.min(p, x)) / p;
                    var T = Math.atan2(w.y, w.x);
                    var A = Math.cos(T) * b * 5;
                    var C = Math.sin(T) * b * 5;
                    y.ApplyImpulse(new o.RM(A, C), g);
                    if (v.m_userData instanceof h.sP || v.m_userData instanceof a.S3) {
                      v.m_userData.explodeShape(v, b);
                    }
                  }
                }
                if (this.hoverLoop) {
                  this.hoverLoop.stopSound();
                }
                if (this.beepLoop) {
                  this.beepLoop.stopSound();
                }
                r.m.instance.playAreaSoundInstance("MineExplosion", this.mineBody);
                e.particleController.createBurst("metalpieces", 10, 50, this.mineBody, 25);
                this.mineBody = null;
                var S = e.level;
                S.removeFromPaintItemVector(this);
                S.removeFromActionsVector(this);
                c.w.currentSession.level.background.removeChild(this.mc);
                this.mc.destroy();
                this.mc = null;
              };
              m.findClosestTarget = function () {
                var e = this;
                this.retargetCount = 0;
                var t = 1000000;
                var n = this.mineBody.GetPosition();
                this.targetDictionary.forEach(function (r, i) {
                  var s = i;
                  var a = s.GetWorldCenter();
                  var h = new o.RM(a.x - n.x, a.y - n.y).LengthSquared();
                  if (h < t) {
                    t = h;
                    e.target = s;
                  }
                });
                if (this.target && !this.targetingSensor) {
                  this.createTargetSensor();
                }
              };
              m.createTargetSensor = function () {
                var e = new o.m2();
                e.isSensor = true;
                e.density = 1;
                e.filter.categoryBits = 8;
                e.filter.groupIndex = -20;
                var n = t.SENSOR_RADIUS * 0.5 / this.m_physScale;
                e.SetAsOrientedBox(2 / this.m_physScale, n, new o.RM(0, -n), 0);
                this.targetingSensor = this.targetingBody.CreateShape(e);
                var r = c.w.currentSession.contactListener;
                r.registerListener(i.fI.ADD, this.targetingSensor, this.checkAdd);
                r.registerListener(i.fI.PERSIST, this.targetingSensor, this.checkPersist);
                this.pathClear = false;
              };
              m.removeTargetingSensor = function () {
                var e = c.w.currentSession.contactListener;
                e.deleteListener(i.fI.ADD, this.targetingSensor);
                e.deleteListener(i.fI.PERSIST, this.targetingSensor);
                this.targetingBody.DestroyShape(this.targetingSensor);
                this.targetingSensor = null;
              };
              m.triggerSingleActivation = function (e, t, n) {
                if (!this._triggered && (this._triggered = true, this.mineBody)) {
                  if (c.w.currentSession.level.singleActionVector.indexOf(this) > -1) {
                    return;
                  }
                  this.singleAction();
                }
              };
              d = t;
              if (p = [{
                key: "bodyList",
                get: function () {
                  if (this.mineBody) {
                    return [this.mineBody];
                  } else {
                    return [];
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
                    Object.defineProperty(e, oe(r.key), r);
                  }
                })(d.prototype, p);
              }
              Object.defineProperty(d, "prototype", {
                writable: false
              });
              return d;
            }(d.o);
            function de(e) {
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
            function ce(e, t) {
              ce = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return ce(e, t);
            }
            le.SENSOR_RADIUS = 600;
            le.SLOWING_FACTOR = 0.05;
            le.EXPLOSION_DISTANCE = Math.pow(0.48, 2);
            le.SMASH_IMPULSE = 3;
            le.GRAVITY_DISPLACEMENT = 1 / 30 * -10;
            var ue = function (e) {
              function t(t, n, r) {
                var i;
                if (n === undefined) {
                  n = null;
                }
                if (r === undefined) {
                  r = null;
                }
                i = e.call(this) || this;
                var a = t;
                if (n) {
                  i.body = n;
                }
                var h = new o.RM(a.x, a.y);
                if (r) {
                  h.Add(new o.RM(r.x, r.y));
                }
                i.createBody(h, a.rotation * Math.PI / 180, a.shapeWidth, a.shapeHeight, a.immovable2, a.sleeping);
                i.mc = new s.j7((0, u.zI)("Game", "IBeamMC"));
                i.mc.width = a.shapeWidth;
                i.mc.height = a.shapeHeight;
                i.mc.x = a.x;
                i.mc.y = a.y;
                i.mc.rotation = a.rotation;
                c.w.currentSession.level.background.addChild(i.mc);
                return i;
              }
              var n;
              var a;
              a = e;
              (n = t).prototype = Object.create(a.prototype);
              n.prototype.constructor = n;
              ce(n, a);
              var h;
              var l;
              var d = t.prototype;
              d.createBody = function (e, t, n, r, s, a) {
                var h = new o.gv();
                var l = new o.m2();
                l.density = 75;
                l.friction = 0.3;
                l.restitution = 0.1;
                l.filter.categoryBits = 8;
                if (s) {
                  l.SetAsOrientedBox(n * 0.5 / this.m_physScale, r * 0.5 / this.m_physScale, new o.RM(e.x / this.m_physScale, e.y / this.m_physScale), t);
                  c.w.currentSession.level.levelBody.CreateShape(l);
                } else {
                  if (this.body) {
                    l.SetAsOrientedBox(n * 0.5 / this.m_physScale, r * 0.5 / this.m_physScale, new o.RM(e.x / this.m_physScale, e.y / this.m_physScale), t);
                    this.shape = this.body.CreateShape(l);
                  } else {
                    l.SetAsBox(n * 0.5 / this.m_physScale, r * 0.5 / this.m_physScale);
                    h.position.Set(e.x / this.m_physScale, e.y / this.m_physScale);
                    h.angle = t;
                    h.isSleeping = a;
                    this.body = c.w.currentSession.m_world.CreateBody(h);
                    this.shape = this.body.CreateShape(l);
                    this.body.SetMassFromShapes();
                    c.w.currentSession.level.paintItemVector.push(this);
                  }
                  c.w.currentSession.contactListener.registerListener(i.fI.ADD, this.shape, this.checkAdd.bind(this));
                }
              };
              d.paint = function () {
                var e = this.body.GetInterpolatedWorldCenter();
                this.mc.x = e.x * this.m_physScale;
                this.mc.y = e.y * this.m_physScale;
                this.mc.rotation = this.body.GetInterpolatedAngle() * t.oneEightyOverPI % 360;
              };
              d.getJointBody = function (e = null) {
                return this.body;
              };
              d.checkAdd = function (e) {
                if (!e.shape2.m_isSensor) {
                  var t = e.shape2.m_body.m_mass;
                  if (t == 0 || !(t < this.body.m_mass)) {
                    var n = o.x5.b2Dot(e.velocity, e.normal);
                    if ((n = Math.abs(n)) > 4) {
                      var i = Math.ceil(Math.random() * 2);
                      r.m.instance.playAreaSoundInstance("IBeamHit" + i, this.body);
                    }
                  }
                }
              };
              d.triggerSingleActivation = function (e, t, n) {
                if (t == "wake from sleep") {
                  if (this.body) {
                    this.body.WakeUp();
                  }
                } else if (t == "apply impulse" && this.body) {
                  var r = n[0];
                  var i = n[1];
                  var s = this.body.GetMass();
                  this.body.ApplyImpulse(new o.RM(r * s, i * s), this.body.GetWorldCenter());
                  var a = n[2];
                  var h = this.body.GetAngularVelocity();
                  this.body.SetAngularVelocity(h + a);
                }
              };
              h = t;
              if (l = [{
                key: "groupDisplayObject",
                get: function () {
                  return this.mc;
                }
              }, {
                key: "bodyList",
                get: function () {
                  if (this.body) {
                    return [this.body];
                  } else {
                    return [];
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
                    Object.defineProperty(e, de(r.key), r);
                  }
                })(h.prototype, l);
              }
              Object.defineProperty(h, "prototype", {
                writable: false
              });
              return h;
            }(d.o);
            function pe(e) {
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
            function me(e, t) {
              me = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return me(e, t);
            }
            var fe = function (e) {
              function t(t) {
                var n;
                (n = e.call(this) || this).fireCount = 0;
                n._firingAllowed = true;
                n.fadeTime = 0;
                n.checkContact = function (e) {
                  if (e.impulse > n.smash_impulse) {
                    c.w.currentSession.level.singleActionVector.push(n);
                    c.w.currentSession.contactListener.deleteListener(i.fI.RESULT, n.jetShape);
                  }
                };
                var r = t;
                n.createBody(r);
                n.mc = new s.j7((0, u.zI)("Game", "jet_mc"));
                n.mc.convertChildren(n.mc.pixiSprite);
                var a = E.zt.MAX_POWER - E.zt.MIN_POWER;
                var o = (r.power - E.zt.MIN_POWER) / a;
                n.mc.scaleX = n.mc.scaleY = 1 + o;
                c.w.currentSession.level.background.addChild(n.mc);
                n.power = r.power;
                if (r.accelTime > 0) {
                  n.accelScaler = 0;
                  n.accelStep = 1 / (r.accelTime * 30);
                  n.fadeTime = r.accelTime;
                } else {
                  n.accelScaler = 1;
                  n.accelStep = 0;
                }
                if (r.fireTime > 0) {
                  n.fireTotal = r.fireTime * 30;
                } else {
                  n.fireTotal = Infinity;
                }
                var h = new s.lU(5, 90, 16777215, 1, 0, 1, 5, 5, 1, 3, "inner");
                var d = new s.j7();
                d.setPixiMovieClip((0, u.zI)("Game", "metal_pieces_MC"), true);
                c.w.currentSession.particleController.createBMDArray("metalpieces", d, [h]);
                c.w.currentSession.level.actionsVector.push(n);
                c.w.currentSession.contactListener.registerListener(l.jp.RESULT, n.jetShape, n.checkContact);
                if (r.sleeping) {
                  n.mc.flames.visible = n.mc.lights.visible = false;
                  n.mc.lights.stop();
                } else {
                  n.fireEngine();
                }
                return n;
              }
              var n;
              var d;
              d = e;
              (n = t).prototype = Object.create(d.prototype);
              n.prototype.constructor = n;
              me(n, d);
              var p;
              var m;
              var f = t.prototype;
              f.createBody = function (e) {
                var t = new o.RM(e.x, e.y);
                var n = e.rotation * Math.PI / 180;
                var r = new o.gv();
                r.isSleeping = e.sleeping;
                r.fixedRotation = e.fixedRotation;
                var i = new o.m2();
                i.density = 3;
                i.friction = 0.5;
                i.restitution = 0.1;
                i.filter.categoryBits = 8;
                var s = 15.5;
                var a = 19;
                var h = E.zt.MAX_POWER - E.zt.MIN_POWER;
                var l = (e.power - E.zt.MIN_POWER) / h;
                s += s * l;
                a += a * l;
                i.SetAsBox(s * 0.5 / this.m_physScale, a * 0.5 / this.m_physScale);
                r.position.Set(t.x / this.m_physScale, t.y / this.m_physScale);
                r.angle = n;
                this.body = c.w.currentSession.m_world.CreateBody(r);
                this.jetShape = this.body.CreateShape(i);
                c.w.currentSession.level.paintItemVector.push(this);
                this.body.SetMassFromShapes();
                this.smash_impulse = Math.round(this.body.GetMass() * 100);
              };
              f.paint = function () {
                var e = this.body.GetInterpolatedWorldCenter();
                this.mc.x = e.x * this.m_physScale;
                this.mc.y = e.y * this.m_physScale;
                this.mc.rotation = this.body.GetInterpolatedAngle() * t.oneEightyOverPI % 360;
                this.mc.flames.scaleX = this.mc.flames.scaleY = this.accelScaler * 0.95 + Math.random() * 0.1;
              };
              f.actions = function () {
                if (!this.body.IsSleeping()) {
                  if (this._firingAllowed) {
                    if (!this.firing) {
                      this.fireEngine();
                    }
                    var e = this.body.GetAngle();
                    this.accelScaler = this.accelScaler + this.accelStep;
                    this.accelScaler = Math.min(1, this.accelScaler);
                    var t = this.power * this.accelScaler;
                    var n = Math.sin(e) * t;
                    var r = -Math.cos(e) * t;
                    this.body.ApplyImpulse(new o.RM(n, r), this.body.GetWorldCenter());
                    this.fireCount += 1;
                    if (this.fireCount > this.fireTotal) {
                      this.mc.flames.visible = this.mc.lights.visible = false;
                      this.mc.lights.stop();
                      c.w.currentSession.level.removeFromActionsVector(this);
                      this.soundLoop.stopSound();
                    }
                  } else {
                    if (this.firing) {
                      this.firing = false;
                      this.mc.flames.visible = this.mc.lights.visible = false;
                      this.mc.lights.stop();
                      this.soundLoop.stopSound();
                    }
                    if (this.accelStep != 0) {
                      this.accelScaler = Math.max(0, this.accelScaler - this.accelStep);
                    }
                  }
                }
              };
              f.getJointBody = function (e = null) {
                return this.body;
              };
              f.fireEngine = function () {
                var e;
                this.firing = true;
                this.mc.lights.play();
                this.mc.flames.visible = this.mc.lights.visible = true;
                e = this.power < 4 ? 1 : this.power < 8 ? 2 : 3;
                this.soundLoop = r.m.instance.playAreaSoundLoop("Jet" + e, this.body, 0, Math.random() * 1000);
                if (this.fadeTime > 0) {
                  this.soundLoop.fadeIn(this.fadeTime);
                } else {
                  this.soundLoop.maxVolume = 1;
                }
              };
              f.singleAction = function () {
                var e = c.w.currentSession.level.actionsVector;
                var t = e.indexOf(this);
                if (t > -1) {
                  e.splice(t, 1);
                }
                this.explode();
              };
              f.explode = function () {
                var e = c.w.currentSession;
                var t = e.m_world;
                var n = new s.j7();
                n.setPixiMovieClip((0, u.zI)("Game", "explosion_2"));
                n.x = this.mc.x;
                n.y = this.mc.y;
                n.scaleX = n.scaleY = 0.5;
                if (Math.random() > 0.5) {
                  n.scaleX = n.scaleX * -1;
                }
                n.rotation = this.body.GetAngle() * 180 / Math.PI;
                n.loop = false;
                n.play();
                e.containerSprite.addChildAt(n, 1);
                t.DestroyBody(this.body);
                var i = [];
                var l = 2.6;
                var d = new o.nm();
                var p = this.body.GetWorldCenter();
                d.lowerBound.Set(p.x - l, p.y - l);
                d.upperBound.Set(p.x + l, p.y + l);
                t.Query(d, i, 30);
                for (var m = 0; m < i.length; m++) {
                  var f = i[m];
                  var _ = f.GetBody();
                  if (!_.IsStatic()) {
                    var v = _.GetWorldCenter();
                    var y = new o.RM(v.x - p.x, v.y - p.y);
                    var g = y.Length();
                    var w = 1 - (g = Math.min(l, g)) / l;
                    var x = Math.atan2(y.y, y.x);
                    var b = Math.cos(x) * w * 5;
                    var T = Math.sin(x) * w * 5;
                    _.ApplyImpulse(new o.RM(b, T), v);
                    if (f.m_userData instanceof h.sP || f.m_userData instanceof a.S3) {
                      f.m_userData.explodeShape(f, w);
                    }
                  }
                }
                if (this.soundLoop) {
                  this.soundLoop.stopSound();
                }
                r.m.instance.playAreaSoundInstance("MineExplosion", this.body);
                e.particleController.createBurst("metalpieces", 10, 50, this.body, 25);
                e.level.removeFromPaintItemVector(this);
                c.w.currentSession.level.background.removeChild(this.mc);
                this.mc.destroy();
                this.mc = null;
              };
              f.triggerSingleActivation = function (e, t, n) {
                if (this.body) {
                  this.body.WakeUp();
                }
              };
              p = t;
              if (m = [{
                key: "firingAllowed",
                get: function () {
                  return this._firingAllowed;
                },
                set: function (e) {
                  this._firingAllowed = e;
                }
              }, {
                key: "bodyList",
                get: function () {
                  if (this.body) {
                    return [this.body];
                  } else {
                    return [];
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
                    Object.defineProperty(e, pe(r.key), r);
                  }
                })(p.prototype, m);
              }
              Object.defineProperty(p, "prototype", {
                writable: false
              });
              return p;
            }(d.o);
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
                (n = e.call(this) || this).checkContact = function (e) {
                  if (e.impulse > 2250) {
                    c.w.currentSession.contactListener.deleteListener(l.jp.RESULT, n.shape);
                    c.w.currentSession.contactListener.deleteListener(i.fI.ADD, n.shape);
                    c.w.currentSession.level.actionsVector.push(n);
                  }
                };
                n.checkAdd = function (e) {
                  if (!e.shape2.m_isSensor) {
                    var t = e.shape2.m_body.m_mass;
                    if (t == 0 || !(t < n.body.m_mass)) {
                      var i = o.x5.b2Dot(e.velocity, e.normal);
                      if ((i = Math.abs(i)) > 4) {
                        var s = Math.ceil(Math.random() * 2);
                        r.m.instance.playAreaSoundInstance("LumberHit" + s, n.body);
                      }
                    }
                  }
                };
                var a = t;
                n.createBody(new o.RM(a.x, a.y), a.rotation * Math.PI / 180, a.shapeWidth, a.shapeHeight, a.immovable2, a.sleeping);
                n.shapeWidth = a.shapeWidth;
                n.shapeHeight = a.shapeHeight;
                n.mc = new s.j7((0, u.zI)("Game", "LogMC"));
                n.mc.width = n.shapeWidth;
                n.mc.height = n.shapeHeight;
                n.mc.x = a.x;
                n.mc.y = a.y;
                n.mc.rotation = a.rotation;
                c.w.currentSession.level.background.addChild(n.mc);
                var h = new s.j7();
                h.setPixiMovieClip((0, u.zI)("Game", "WoodChipsMC"), true);
                c.w.currentSession.particleController.createBMDArray("woodchips", h);
                return n;
              }
              var n;
              var a;
              a = e;
              (n = t).prototype = Object.create(a.prototype);
              n.prototype.constructor = n;
              ve(n, a);
              var h;
              var d;
              var p = t.prototype;
              p.createBody = function (e, t, n, r, s, a) {
                var h = new o.gv();
                var l = new o.m2();
                l.density = 30;
                l.friction = 0.7;
                l.restitution = 0.2;
                l.filter.categoryBits = 8;
                var d = c.w.currentSession.level;
                if (s) {
                  this.center = new o.RM(e.x / this.m_physScale, e.y / this.m_physScale);
                  this.angle = t;
                  l.SetAsOrientedBox(n * 0.5 / this.m_physScale, r * 0.5 / this.m_physScale, this.center, t);
                  this.shape = d.levelBody.CreateShape(l);
                  d.keepVector.push(this);
                } else {
                  l.SetAsBox(n * 0.5 / this.m_physScale, r * 0.5 / this.m_physScale);
                  h.position.Set(e.x / this.m_physScale, e.y / this.m_physScale);
                  h.angle = t;
                  h.isSleeping = a;
                  this.body = c.w.currentSession.m_world.CreateBody(h);
                  this.shape = this.body.CreateShape(l);
                  this.body.SetMassFromShapes();
                  d.paintItemVector.push(this);
                  c.w.currentSession.contactListener.registerListener(i.fI.ADD, this.shape, this.checkAdd);
                }
                c.w.currentSession.contactListener.registerListener(i.fI.RESULT, this.shape, this.checkContact);
              };
              p.paint = function () {
                var e = this.body.GetInterpolatedWorldCenter();
                this.mc.x = e.x * this.m_physScale;
                this.mc.y = e.y * this.m_physScale;
                this.mc.rotation = this.body.GetInterpolatedAngle() * t.oneEightyOverPI % 360;
              };
              p.actions = function () {
                var e = c.w.currentSession;
                var t = e.level;
                var n = e.m_world;
                t.removeFromActionsVector(this);
                c.w.currentSession.contactListener.removeEventListener(l.jp.RESULT, this.checkContact);
                if (this.body) {
                  t.removeFromPaintItemVector(this);
                  var i = this.body.GetWorldCenter();
                  var a = this.body.GetLinearVelocity();
                  var h = this.body.GetAngularVelocity();
                  n.DestroyBody(this.body);
                  var d = this.body.GetAngle();
                  e.particleController.createBurst("woodchips", 10, 30, this.body, 30);
                } else {
                  i = this.center;
                  a = new o.RM(0, 0);
                  h = 0;
                  d = this.angle;
                  t.levelBody.DestroyShape(this.shape);
                  e.particleController.createPointBurst("woodchips", this.center.x * this.m_physScale, this.center.y * this.m_physScale, 10, 30, 30);
                }
                var p = new o.gv();
                p.angle = d;
                p.position = i;
                var m = new o.m2();
                m.density = 30;
                m.friction = 0.7;
                m.restitution = 0.2;
                m.filter.categoryBits = 8;
                m.SetAsOrientedBox(this.shapeWidth * 0.5 / this.m_physScale, this.shapeHeight * 0.25 / this.m_physScale, new o.RM(0, -this.shapeHeight * 0.25 / this.m_physScale), 0);
                var f = n.CreateBody(p);
                f.CreateShape(m);
                f.SetMassFromShapes();
                m.SetAsOrientedBox(this.shapeWidth * 0.5 / this.m_physScale, this.shapeHeight * 0.25 / this.m_physScale, new o.RM(0, this.shapeHeight * 0.25 / this.m_physScale), 0);
                var _ = n.CreateBody(p);
                _.CreateShape(m);
                _.SetMassFromShapes();
                f.SetLinearVelocity(a);
                f.SetAngularVelocity(h);
                _.SetLinearVelocity(a);
                _.SetAngularVelocity(h);
                var v = new s.j7((0, u.zI)("Game", "LogHalf1"));
                var y = new s.j7((0, u.zI)("Game", "LogHalf2"));
                v.scaleX = y.scaleX = this.mc.scaleX;
                v.scaleY = y.scaleY = this.mc.scaleY;
                var g = t.background.getChildIndex(this.mc);
                this.mc.parent.removeChild(this.mc);
                t.background.addChildAt(y, g);
                t.background.addChildAt(v, g);
                f.SetUserData(v);
                _.SetUserData(y);
                t.paintBodyVector.push(f);
                t.paintBodyVector.push(_);
                r.m.instance.playAreaSoundInstance("LumberBreak", f);
                this.body = null;
              };
              p.getJointBody = function (e = null) {
                return this.body;
              };
              p.triggerSingleActivation = function (e, t, n) {
                if (t == "wake from sleep") {
                  if (this.body) {
                    this.body.WakeUp();
                  }
                } else if (t == "apply impulse" && this.body) {
                  var r = n[0];
                  var i = n[1];
                  var s = this.body.GetMass();
                  this.body.ApplyImpulse(new o.RM(r * s, i * s), this.body.GetWorldCenter());
                  var a = n[2];
                  var h = this.body.GetAngularVelocity();
                  this.body.SetAngularVelocity(h + a);
                }
              };
              h = t;
              if (d = [{
                key: "bodyList",
                get: function () {
                  if (this.body) {
                    return [this.body];
                  } else {
                    return [];
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
                    Object.defineProperty(e, _e(r.key), r);
                  }
                })(h.prototype, d);
              }
              Object.defineProperty(h, "prototype", {
                writable: false
              });
              return h;
            }(d.o);
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
            var xe = function (e) {
              function t(t) {
                var n;
                (n = e.call(this) || this).checkAdd = function (e) {
                  if (!e.shape2.m_isSensor) {
                    var t = e.shape2.m_body.m_mass;
                    if (t == 0 || !(t < n.body.m_mass)) {
                      var i = o.x5.b2Dot(e.velocity, e.normal);
                      if ((i = Math.abs(i)) > 2) {
                        r.m.instance.playAreaSoundInstance("MeteorImpact", n.body);
                      }
                    }
                  }
                };
                var i = t;
                n.createBody(new o.RM(i.x, i.y), i.shapeWidth, i.immovable2, i.sleeping);
                return n;
              }
              var n;
              var a;
              a = e;
              (n = t).prototype = Object.create(a.prototype);
              n.prototype.constructor = n;
              we(n, a);
              var h;
              var l;
              var d = t.prototype;
              d.createBody = function (e, t, n, r) {
                var a = new o.gv();
                this.mc = new s.j7((0, u.zI)("Game", "MeteorMC"));
                this.mc.width = t * 407.1 / 400;
                this.mc.height = t * 401.4 / 400;
                this.mc.x = e.x;
                this.mc.y = e.y;
                var h = c.w.currentSession.level;
                h.background.addChild(this.mc);
                var l = new o._A();
                l.density = 75;
                l.friction = 0.5;
                l.restitution = 0.1;
                l.radius = t * 0.5 / this.m_physScale;
                l.filter.categoryBits = 8;
                if (n) {
                  l.localPosition.Set(e.x / this.m_physScale, e.y / this.m_physScale);
                  h.levelBody.CreateShape(l);
                } else {
                  a.position.Set(e.x / this.m_physScale, e.y / this.m_physScale);
                  a.isSleeping = r;
                  this.body = c.w.currentSession.m_world.CreateBody(a);
                  this.shape = this.body.CreateShape(l);
                  this.body.SetMassFromShapes();
                  this.body.SetUserData(this.mc);
                  h.paintItemVector.push(this);
                  c.w.currentSession.contactListener.registerListener(i.fI.ADD, this.shape, this.checkAdd);
                }
              };
              d.paint = function () {
                var e = this.body.GetInterpolatedWorldCenter();
                this.mc.x = e.x * this.m_physScale;
                this.mc.y = e.y * this.m_physScale;
                this.mc.rotation = this.body.GetInterpolatedAngle() * t.oneEightyOverPI % 360;
              };
              d.triggerSingleActivation = function (e, t, n) {
                if (t == "wake from sleep") {
                  if (this.body) {
                    this.body.WakeUp();
                  }
                } else if (t == "apply impulse" && this.body) {
                  var r = n[0];
                  var i = n[1];
                  var s = this.body.GetMass();
                  this.body.ApplyImpulse(new o.RM(r * s, i * s), this.body.GetWorldCenter());
                  var a = n[2];
                  var h = this.body.GetAngularVelocity();
                  this.body.SetAngularVelocity(h + a);
                }
              };
              h = t;
              if (l = [{
                key: "bodyList",
                get: function () {
                  if (this.body) {
                    return [this.body];
                  } else {
                    return [];
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
                    Object.defineProperty(e, ge(r.key), r);
                  }
                })(h.prototype, l);
              }
              Object.defineProperty(h, "prototype", {
                writable: false
              });
              return h;
            }(d.o);
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
              function t(t) {
                var n;
                (n = e.call(this) || this).checkContact = function (e) {
                  c.w.currentSession.contactListener.deleteListener(l.jp.RESULT, n.sensor);
                  c.w.currentSession.level.actionsVector.push(n);
                  n.sensor = null;
                };
                var r = t;
                n.createBody(new o.RM(r.x, r.y), r.rotation * Math.PI / 180);
                n.mc = new s.j7((0, u.zI)("Game", "MineMC"));
                c.w.currentSession.level.background.addChild(n.mc);
                c.w.currentSession.contactListener.registerListener(l.jp.RESULT, n.sensor, n.checkContact);
                return n;
              }
              var n;
              var i;
              i = e;
              (n = t).prototype = Object.create(i.prototype);
              n.prototype.constructor = n;
              Te(n, i);
              var a;
              var h;
              var d = t.prototype;
              d.createBody = function (e, t) {
                var n = new o.gv();
                var r = new o.m2();
                r.density = 1;
                r.friction = 1;
                r.restitution = 0.1;
                r.filter.categoryBits = 8;
                r.SetAsBox(12.5 / this.m_physScale, 1 / this.m_physScale);
                n.position.Set(e.x / this.m_physScale, e.y / this.m_physScale);
                n.angle = t;
                this.body = c.w.currentSession.m_world.CreateBody(n);
                this.body.CreateShape(r);
                r.SetAsOrientedBox(1 / this.m_physScale, 0.5 / this.m_physScale, new o.RM(0, -2.5 / this.m_physScale));
                this.sensor = this.body.CreateShape(r);
                c.w.currentSession.level.paintItemVector.push(this);
                this.body.SetMassFromShapes();
              };
              d.paint = function () {
                var e = this.body.GetInterpolatedWorldCenter();
                this.mc.x = e.x * this.m_physScale;
                this.mc.y = e.y * this.m_physScale;
                this.mc.rotation = this.body.GetInterpolatedAngle() * t.oneEightyOverPI % 360;
              };
              d.actions = function () {
                var e = new s.j7();
                e.setPixiMovieClip((0, u.zI)("Game", "explosion"));
                e.x = this.mc.x;
                e.y = this.mc.y;
                e.scaleX = e.scaleY = 0.5;
                if (Math.random() > 0.5) {
                  e.scaleX = e.scaleX * -1;
                }
                e.rotation = this.body.GetAngle() * 180 / Math.PI;
                e.loop = false;
                e.play();
                c.w.currentSession.containerSprite.addChildAt(e, 1);
                var t = c.w.currentSession.m_world;
                t.DestroyBody(this.body);
                var n = [];
                var i = new o.nm();
                var a = this.body.GetWorldCenter();
                i.lowerBound.Set(a.x - 2, a.y - 2);
                i.upperBound.Set(a.x + 2, a.y + 2);
                t.Query(i, n, 30);
                for (var h = 0; h < n.length; h++) {
                  var l = n[h].GetBody();
                  if (!l.IsStatic()) {
                    var d = l.GetWorldCenter();
                    var p = new o.RM(d.x - a.x, d.y - a.y);
                    var m = p.Length();
                    var f = 1 - (m = Math.min(2, m)) / 2;
                    var _ = Math.atan2(p.y, p.x);
                    var v = Math.cos(_) * f * 10;
                    var y = Math.sin(_) * f * 10;
                    l.ApplyImpulse(new o.RM(v, y), d);
                  }
                }
                r.m.instance.playAreaSoundInstance("MineExplosion", this.body);
                var g = c.w.currentSession.level;
                g.removeFromActionsVector(this);
                g.removeFromPaintItemVector(this);
                c.w.currentSession.level.background.removeChild(this.mc);
                this.mc.destroy();
                this.mc = null;
              };
              d.triggerSingleActivation = function (e, t, n) {
                if (!this._triggered) {
                  this._triggered = true;
                  if (this.sensor) {
                    c.w.currentSession.contactListener.deleteListener(l.jp.RESULT, this.sensor);
                    this.sensor = null;
                    this.actions();
                  }
                }
              };
              a = t;
              if (h = [{
                key: "bodyList",
                get: function () {
                  if (this.body) {
                    return [this.body];
                  } else {
                    return [];
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
                    Object.defineProperty(e, be(r.key), r);
                  }
                })(a.prototype, h);
              }
              Object.defineProperty(a, "prototype", {
                writable: false
              });
              return a;
            }(d.o);
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
            n(38781);
            var Ee = function (e) {
              function t(t, n, r) {
                var i;
                if (n === undefined) {
                  n = null;
                }
                if (r === undefined) {
                  r = null;
                }
                (i = e.call(this) || this).mc_scale = 2;
                i.brainRadius = 12;
                i.voicePriority = -1;
                i.destroyJointsUponDeath = false;
                i.contactResultHandler = function (e) {
                  var t = e.shape;
                  var n = e.impulse;
                  if (n > i.contactImpulseDict.get(t)) {
                    if (i.contactResultBuffer.get(t)) {
                      if (n > i.contactResultBuffer.get(t).impulse) {
                        i.contactResultBuffer.set(t, e);
                      }
                    } else {
                      i.contactResultBuffer.set(t, e);
                    }
                  }
                };
                i.contactAddHandler = function (e) {
                  var t = e.shape1;
                  var n = t.m_body;
                  var r = e.shape2;
                  var s = r.m_body.m_mass;
                  if (!i.contactAddBuffer.get(t) && !r.m_isSensor && (s == 0 || !(s < n.m_mass))) {
                    var a = o.x5.b2Dot(e.velocity, e.normal);
                    if ((a = Math.abs(a)) > 4) {
                      i.contactAddBuffer.set(t, a);
                    }
                  }
                };
                var s = t;
                s = s.clone();
                i.destroyJointsUponDeath = s.destroyJointsUponDeath;
                i.tag = s.tag;
                i.character_scale = i.m_physScale * i.mc_scale;
                i.paintVector = new Array();
                i.voiceArray = [];
                i.session = c.w.currentSession;
                i.characterLayer = i.session.level.characterLayer;
                i.reversed = s.reverse;
                if (s.interactive) {
                  i.createFilters();
                  i.createBodies(s);
                  i.createJoints(s);
                  i.createMovieClips(s);
                  i.setBreakLimits();
                  i.createDictionaries();
                  c.w.currentSession.level.paintItemVector.push(i);
                  c.w.currentSession.level.actionsVector.push(i);
                } else {
                  i.charSprite = s.npcSprite;
                  i.charSprite.x = s.x;
                  i.charSprite.y = s.y;
                  i.charSprite.rotation = s.rotation;
                  i.characterLayer.addChild(i.charSprite);
                  E.HV.hideShapes(i.charSprite);
                }
                return i;
              }
              var n;
              var a;
              a = e;
              (n = t).prototype = Object.create(a.prototype);
              n.prototype.constructor = n;
              Se(n, a);
              var l;
              var d;
              var u = t.prototype;
              u.addUserJoint = function (e) {
                this.userJoints ||= [];
                this.userJoints.push(e);
              };
              u.actions = function () {
                this.handleContactResults();
                this.handleContactAdds();
                this.checkJoints();
                if (!this._dead) {
                  this.checkVocals();
                  this.voiceArray = [];
                }
              };
              u.createFilters = function () {
                this.defaultFilter = new o.z_();
                this.defaultFilter.groupIndex = t.GROUP_ID_COUNT;
                this.defaultFilter.categoryBits = 260;
                this.zeroFilter = new o.z_();
                this.zeroFilter.groupIndex = 0;
                this.zeroFilter.categoryBits = 260;
                this.lowerBodyFilter = new o.z_();
                this.lowerBodyFilter.categoryBits = 260;
                this.lowerBodyFilter.groupIndex = t.GROUP_ID_COUNT - 1;
                t.GROUP_ID_COUNT -= 2;
              };
              u.createDictionaries = function () {
                this.contactResultBuffer = new Map();
                this.contactAddBuffer = new Map();
                this.contactAddSounds = new Map();
                this.contactImpulseDict = new Map();
                this.contactImpulseDict.set(this.headShape, this.headSmashLimit);
                this.contactImpulseDict.set(this.chestShape, this.chestSmashLimit);
                this.contactImpulseDict.set(this.pelvisShape, this.pelvisSmashLimit);
                this.contactAddSounds.set(this.headShape, "Thud1");
                this.contactAddSounds.set(this.chestShape, "Thud2");
                this.contactAddSounds.set(this.pelvisShape, "Thud2");
              };
              u.setBreakLimits = function () {
                var e = this.headBody.GetMass() / h.sP.DEF_HEAD_MASS;
                var t = this.chestBody.GetMass() / h.sP.DEF_CHEST_MASS;
                var n = this.pelvisBody.GetMass() / h.sP.DEF_PELVIS_MASS;
                var r = this.upperArm1Body.GetMass() / h.sP.DEF_UPPERARM_MASS;
                var i = this.lowerArm1Body.GetMass() / h.sP.DEF_LOWERARM_MASS;
                var s = this.upperLeg1Body.GetMass() / h.sP.DEF_UPPERLEG_MASS;
                var a = this.lowerLeg1Body.GetMass() / h.sP.DEF_LOWERLEG_MASS;
                this.headSmashLimit = h.sP.DEF_HEAD_SMASH * e;
                this.chestSmashLimit = h.sP.DEF_CHEST_SMASH * t;
                this.pelvisSmashLimit = h.sP.DEF_PELVIS_SMASH * n;
                this.neckBreakLimit = Math.pow(Math.round(e * 85), 2);
                this.torsoBreakLimit = Math.pow(Math.round(n * 180), 2);
                this.shoulderBreakLimit = Math.pow(Math.round(r * 75), 2);
                this.hipBreakLimit = Math.pow(Math.round(s * 95), 2);
                this.elbowBreakLimit = Math.pow(Math.round(i * 70), 2);
                this.kneeBreakLimit = Math.pow(Math.round(a * 80), 2);
              };
              u.createBodies = function (e) {
                var n = this.session.m_world;
                var r = new o.gv();
                var a = new o.m2();
                var h = new o._A();
                a.density = 1;
                a.friction = 0.3;
                a.restitution = 0.1;
                a.filter = this.defaultFilter;
                h.density = 1;
                h.friction = 0.3;
                h.restitution = 0.1;
                h.filter = this.defaultFilter;
                var l = e.npcSprite;
                var d = this.reversed ? -1 : 1;
                r.isSleeping = e.sleeping;
                r.position.Set(e.x / this.m_physScale, e.y / this.m_physScale);
                r.angle = e.rotation / t.oneEightyOverPI;
                a.SetAsBox(l.chestShape.scaleX * 50 / this.character_scale, l.chestShape.scaleY * 50 / this.character_scale);
                this.chestBody = n.CreateBody(r);
                this.chestShape = this.chestBody.CreateShape(a);
                this.chestShape.SetMaterial(2);
                this.chestShape.SetUserData(this);
                this.session.contactListener.registerListener(i.fI.RESULT, this.chestShape, this.contactResultHandler);
                this.session.contactListener.registerListener(i.fI.ADD, this.chestShape, this.contactAddHandler);
                this.chestBody.SetMassFromShapes();
                this.paintVector.push(this.chestBody);
                var c = new s.bR(l.head.x, l.head.y);
                c = l.headOuter.transform.matrix.transformPoint(c);
                c = l.transform.matrix.transformPoint(c);
                c = e.transform.matrix.transformPoint(c);
                r.position.Set(c.x / this.m_physScale, c.y / this.m_physScale);
                r.angle = (e.rotation + d * l.headOuter.rotation) / t.oneEightyOverPI;
                h.radius = l.headShape.scaleX * 50 / this.character_scale;
                this.headBody = n.CreateBody(r);
                this.headShape = this.headBody.CreateShape(h);
                this.headShape.SetMaterial(2);
                this.headShape.SetUserData(this);
                this.session.contactListener.registerListener(i.fI.RESULT, this.headShape, this.contactResultHandler);
                this.session.contactListener.registerListener(i.fI.ADD, this.headShape, this.contactAddHandler);
                this.headBody.SetMassFromShapes();
                this.paintVector.push(this.headBody);
                c = new s.bR(l.pelvis.x, l.pelvis.y);
                c = l.transform.matrix.transformPoint(c);
                c = e.transform.matrix.transformPoint(c);
                r.position.Set(c.x / this.m_physScale, c.y / this.m_physScale);
                r.angle = (e.rotation + d * l.pelvis.rotation) / t.oneEightyOverPI;
                a.SetAsBox(l.pelvisShape.scaleX * 50 / this.character_scale, l.pelvisShape.scaleY * 50 / this.character_scale);
                this.pelvisBody = n.CreateBody(r);
                this.pelvisShape = this.pelvisBody.CreateShape(a);
                this.pelvisShape.SetMaterial(2);
                this.pelvisShape.SetUserData(this);
                this.session.contactListener.registerListener(i.fI.RESULT, this.pelvisShape, this.contactResultHandler);
                this.session.contactListener.registerListener(i.fI.ADD, this.pelvisShape, this.contactAddHandler);
                this.pelvisBody.SetMassFromShapes();
                this.paintVector.push(this.pelvisBody);
                c = new s.bR(l.upperArm1.x, l.upperArm1.y);
                c = l.arm1.transform.matrix.transformPoint(c);
                c = l.transform.matrix.transformPoint(c);
                c = e.transform.matrix.transformPoint(c);
                r.position.Set(c.x / this.m_physScale, c.y / this.m_physScale);
                r.angle = (e.rotation + d * l.arm1.rotation) / t.oneEightyOverPI;
                a.SetAsBox(l.upperArm1Shape.scaleX * 50 / this.character_scale, l.upperArm1Shape.scaleY * 50 / this.character_scale);
                this.upperArm1Body = n.CreateBody(r);
                var u = this.upperArm1Body.CreateShape(a);
                u.SetMaterial(1);
                u.SetUserData(this);
                this.upperArm1Body.SetMassFromShapes();
                this.paintVector.push(this.upperArm1Body);
                c = new s.bR(l.upperArm2.x, l.upperArm2.y);
                c = l.arm2.transform.matrix.transformPoint(c);
                c = l.transform.matrix.transformPoint(c);
                c = e.transform.matrix.transformPoint(c);
                r.position.Set(c.x / this.m_physScale, c.y / this.m_physScale);
                r.angle = (e.rotation + d * l.arm2.rotation) / t.oneEightyOverPI;
                a.SetAsBox(l.upperArm2Shape.scaleX * 50 / this.character_scale, l.upperArm2Shape.scaleY * 50 / this.character_scale);
                this.upperArm2Body = n.CreateBody(r);
                (u = this.upperArm2Body.CreateShape(a)).SetMaterial(1);
                u.SetUserData(this);
                this.upperArm2Body.SetMassFromShapes();
                this.paintVector.push(this.upperArm2Body);
                c = new s.bR(l.lowerArm1.x, l.lowerArm1.y);
                c = l.lowerArmOuter1.transform.matrix.transformPoint(c);
                c = l.arm1.transform.matrix.transformPoint(c);
                c = l.transform.matrix.transformPoint(c);
                c = e.transform.matrix.transformPoint(c);
                r.position.Set(c.x / this.m_physScale, c.y / this.m_physScale);
                r.angle = (e.rotation + d * (l.arm1.rotation + l.lowerArmOuter1.rotation)) / t.oneEightyOverPI;
                a.SetAsBox(l.lowerArm1Shape.scaleX * 50 / this.character_scale, l.lowerArm1Shape.scaleY * 50 / this.character_scale);
                this.lowerArm1Body = n.CreateBody(r);
                (u = this.lowerArm1Body.CreateShape(a)).SetMaterial(1);
                u.SetUserData(this);
                this.lowerArm1Body.SetMassFromShapes();
                this.paintVector.push(this.lowerArm1Body);
                c = new s.bR(l.lowerArm2.x, l.lowerArm2.y);
                c = l.lowerArmOuter2.transform.matrix.transformPoint(c);
                c = l.arm2.transform.matrix.transformPoint(c);
                c = l.transform.matrix.transformPoint(c);
                c = e.transform.matrix.transformPoint(c);
                r.position.Set(c.x / this.m_physScale, c.y / this.m_physScale);
                r.angle = (e.rotation + d * (l.arm2.rotation + l.lowerArmOuter2.rotation)) / t.oneEightyOverPI;
                a.SetAsBox(l.lowerArm2Shape.scaleX * 50 / this.character_scale, l.lowerArm2Shape.scaleY * 50 / this.character_scale);
                this.lowerArm2Body = n.CreateBody(r);
                (u = this.lowerArm2Body.CreateShape(a)).SetMaterial(1);
                u.SetUserData(this);
                this.lowerArm2Body.SetMassFromShapes();
                this.paintVector.push(this.lowerArm2Body);
                c = new s.bR(l.upperLeg1.x, l.upperLeg1.y);
                c = l.leg1.transform.matrix.transformPoint(c);
                c = l.transform.matrix.transformPoint(c);
                c = e.transform.matrix.transformPoint(c);
                r.position.Set(c.x / this.m_physScale, c.y / this.m_physScale);
                r.angle = (e.rotation + d * l.leg1.rotation) / t.oneEightyOverPI;
                a.SetAsBox(l.upperLeg1Shape.scaleX * 50 / this.character_scale, l.upperLeg1Shape.scaleY * 50 / this.character_scale);
                this.upperLeg1Body = n.CreateBody(r);
                (u = this.upperLeg1Body.CreateShape(a)).SetMaterial(1);
                u.SetUserData(this);
                this.upperLeg1Body.SetMassFromShapes();
                this.paintVector.push(this.upperLeg1Body);
                c = new s.bR(l.upperLeg2.x, l.upperLeg2.y);
                c = l.leg2.transform.matrix.transformPoint(c);
                c = l.transform.matrix.transformPoint(c);
                c = e.transform.matrix.transformPoint(c);
                r.position.Set(c.x / this.m_physScale, c.y / this.m_physScale);
                r.angle = (e.rotation + d * l.leg2.rotation) / t.oneEightyOverPI;
                a.SetAsBox(l.upperLeg2Shape.scaleX * 50 / this.character_scale, l.upperLeg2Shape.scaleY * 50 / this.character_scale);
                this.upperLeg2Body = n.CreateBody(r);
                (u = this.upperLeg2Body.CreateShape(a)).SetMaterial(1);
                u.SetUserData(this);
                this.upperLeg2Body.SetMassFromShapes();
                this.paintVector.push(this.upperLeg2Body);
                c = new s.bR(l.lowerLeg1.x, l.lowerLeg1.y);
                c = l.lowerLegOuter1.transform.matrix.transformPoint(c);
                c = l.leg1.transform.matrix.transformPoint(c);
                c = l.transform.matrix.transformPoint(c);
                c = e.transform.matrix.transformPoint(c);
                r.position.Set(c.x / this.m_physScale, c.y / this.m_physScale);
                r.angle = (e.rotation + d * (l.leg1.rotation + l.lowerLegOuter1.rotation)) / t.oneEightyOverPI;
                a.SetAsBox(l.lowerLeg1Shape.scaleX * 50 / this.character_scale, l.lowerLeg1Shape.scaleY * 50 / this.character_scale);
                this.lowerLeg1Body = n.CreateBody(r);
                (u = this.lowerLeg1Body.CreateShape(a)).SetMaterial(1);
                u.SetUserData(this);
                this.lowerLeg1Body.SetMassFromShapes();
                this.paintVector.push(this.lowerLeg1Body);
                c = new s.bR(l.lowerLeg2.x, l.lowerLeg2.y);
                c = l.lowerLegOuter2.transform.matrix.transformPoint(c);
                c = l.leg2.transform.matrix.transformPoint(c);
                c = l.transform.matrix.transformPoint(c);
                c = e.transform.matrix.transformPoint(c);
                r.position.Set(c.x / this.m_physScale, c.y / this.m_physScale);
                r.angle = (e.rotation + d * (l.leg2.rotation + l.lowerLegOuter2.rotation)) / t.oneEightyOverPI;
                a.SetAsBox(l.lowerLeg2Shape.scaleX * 50 / this.character_scale, l.lowerLeg2Shape.scaleY * 50 / this.character_scale);
                this.lowerLeg2Body = n.CreateBody(r);
                (u = this.lowerLeg2Body.CreateShape(a)).SetMaterial(1);
                u.SetUserData(this);
                this.lowerLeg2Body.SetMassFromShapes();
                this.paintVector.push(this.lowerLeg2Body);
                this.headChunkRadius = Math.round(l.headShape.scaleX * 50 * 0.5);
                this.pelvisChunkRadius = Math.round(l.headShape.scaleX * 50 * 0.75);
                this.chestChunkRadius = Math.round(l.headShape.scaleX * 50 * 0.95);
                this.brainRadius = 12;
              };
              u.createJoints = function (e) {
                var n;
                var r = this.session.m_world;
                var i = new o.Gq();
                i.enableLimit = true;
                i.maxMotorTorque = 4;
                if (e.holdPose && this.session.levelVersion < 1.75) {
                  i.enableMotor = true;
                  i.motorSpeed = 0;
                }
                var a = new o.RM();
                var h = e.npcSprite;
                var l = new s.bR(h.headOuter.x, h.headOuter.y);
                l = h.transform.matrix.transformPoint(l);
                l = e.transform.matrix.transformPoint(l);
                a.Set(l.x / this.m_physScale, l.y / this.m_physScale);
                n = this.headBody.GetAngle() - this.chestBody.GetAngle();
                i.lowerAngle = -20 / t.oneEightyOverPI - n;
                i.upperAngle = 20 / t.oneEightyOverPI - n;
                i.Initialize(this.chestBody, this.headBody, a);
                this.neckJoint = r.CreateJoint(i);
                (l = new s.bR(h.pelvis.x, h.pelvis.y)).y = l.y - h.pelvis.height * 0.5;
                l = h.transform.matrix.transformPoint(l);
                l = e.transform.matrix.transformPoint(l);
                a.Set(l.x / this.m_physScale, l.y / this.m_physScale);
                n = this.pelvisBody.GetAngle() - this.chestBody.GetAngle();
                i.lowerAngle = -5 / t.oneEightyOverPI - n;
                i.upperAngle = 5 / t.oneEightyOverPI - n;
                i.Initialize(this.chestBody, this.pelvisBody, a);
                this.waistJoint = r.CreateJoint(i);
                l = new s.bR(h.arm1.x, h.arm1.y);
                l = h.transform.matrix.transformPoint(l);
                l = e.transform.matrix.transformPoint(l);
                a.Set(l.x / this.m_physScale, l.y / this.m_physScale);
                n = this.upperArm1Body.GetAngle() - this.chestBody.GetAngle();
                if (this.reversed) {
                  i.lowerAngle = -60 / t.oneEightyOverPI - n;
                  i.upperAngle = 180 / t.oneEightyOverPI - n;
                } else {
                  i.lowerAngle = -180 / t.oneEightyOverPI - n;
                  i.upperAngle = 60 / t.oneEightyOverPI - n;
                }
                i.Initialize(this.chestBody, this.upperArm1Body, a);
                this.shoulderJoint1 = r.CreateJoint(i);
                l = new s.bR(h.arm2.x, h.arm2.y);
                l = h.transform.matrix.transformPoint(l);
                l = e.transform.matrix.transformPoint(l);
                a.Set(l.x / this.m_physScale, l.y / this.m_physScale);
                n = this.upperArm2Body.GetAngle() - this.chestBody.GetAngle();
                if (this.reversed) {
                  i.lowerAngle = -60 / t.oneEightyOverPI - n;
                  i.upperAngle = 180 / t.oneEightyOverPI - n;
                } else {
                  i.lowerAngle = -180 / t.oneEightyOverPI - n;
                  i.upperAngle = 60 / t.oneEightyOverPI - n;
                }
                i.Initialize(this.chestBody, this.upperArm2Body, a);
                this.shoulderJoint2 = r.CreateJoint(i);
                l = new s.bR(h.lowerArmOuter1.x, h.lowerArmOuter1.y);
                l = h.arm1.transform.matrix.transformPoint(l);
                l = h.transform.matrix.transformPoint(l);
                l = e.transform.matrix.transformPoint(l);
                a.Set(l.x / this.m_physScale, l.y / this.m_physScale);
                n = this.lowerArm1Body.GetAngle() - this.upperArm1Body.GetAngle();
                if (this.reversed) {
                  i.lowerAngle = 0 / t.oneEightyOverPI - n;
                  i.upperAngle = 160 / t.oneEightyOverPI - n;
                } else {
                  i.lowerAngle = -160 / t.oneEightyOverPI - n;
                  i.upperAngle = 0 / t.oneEightyOverPI - n;
                }
                i.Initialize(this.upperArm1Body, this.lowerArm1Body, a);
                this.elbowJoint1 = r.CreateJoint(i);
                l = new s.bR(h.lowerArmOuter2.x, h.lowerArmOuter2.y);
                l = h.arm2.transform.matrix.transformPoint(l);
                l = h.transform.matrix.transformPoint(l);
                l = e.transform.matrix.transformPoint(l);
                a.Set(l.x / this.m_physScale, l.y / this.m_physScale);
                n = this.lowerArm2Body.GetAngle() - this.upperArm2Body.GetAngle();
                if (this.reversed) {
                  i.lowerAngle = 0 / t.oneEightyOverPI - n;
                  i.upperAngle = 160 / t.oneEightyOverPI - n;
                } else {
                  i.lowerAngle = -160 / t.oneEightyOverPI - n;
                  i.upperAngle = 0 / t.oneEightyOverPI - n;
                }
                i.Initialize(this.upperArm2Body, this.lowerArm2Body, a);
                this.elbowJoint2 = r.CreateJoint(i);
                l = new s.bR(h.leg1.x, h.leg1.y);
                l = h.transform.matrix.transformPoint(l);
                l = e.transform.matrix.transformPoint(l);
                a.Set(l.x / this.m_physScale, l.y / this.m_physScale);
                n = this.upperLeg1Body.GetAngle() - this.pelvisBody.GetAngle();
                if (this.reversed) {
                  i.lowerAngle = -10 / t.oneEightyOverPI - n;
                  i.upperAngle = 150 / t.oneEightyOverPI - n;
                } else {
                  i.lowerAngle = -150 / t.oneEightyOverPI - n;
                  i.upperAngle = 10 / t.oneEightyOverPI - n;
                }
                i.Initialize(this.pelvisBody, this.upperLeg1Body, a);
                this.hipJoint1 = r.CreateJoint(i);
                l = new s.bR(h.leg2.x, h.leg2.y);
                l = h.transform.matrix.transformPoint(l);
                l = e.transform.matrix.transformPoint(l);
                a.Set(l.x / this.m_physScale, l.y / this.m_physScale);
                n = this.upperLeg2Body.GetAngle() - this.pelvisBody.GetAngle();
                if (this.reversed) {
                  i.lowerAngle = -10 / t.oneEightyOverPI - n;
                  i.upperAngle = 150 / t.oneEightyOverPI - n;
                } else {
                  i.lowerAngle = -150 / t.oneEightyOverPI - n;
                  i.upperAngle = 10 / t.oneEightyOverPI - n;
                }
                i.Initialize(this.pelvisBody, this.upperLeg2Body, a);
                this.hipJoint2 = r.CreateJoint(i);
                l = new s.bR(h.lowerLegOuter1.x, h.lowerLegOuter1.y);
                l = h.leg1.transform.matrix.transformPoint(l);
                l = h.transform.matrix.transformPoint(l);
                l = e.transform.matrix.transformPoint(l);
                a.Set(l.x / this.m_physScale, l.y / this.m_physScale);
                n = this.lowerLeg1Body.GetAngle() - this.upperLeg1Body.GetAngle();
                if (this.reversed) {
                  i.lowerAngle = -150 / t.oneEightyOverPI - n;
                  i.upperAngle = 0 / t.oneEightyOverPI - n;
                } else {
                  i.lowerAngle = 0 / t.oneEightyOverPI - n;
                  i.upperAngle = 150 / t.oneEightyOverPI - n;
                }
                i.Initialize(this.upperLeg1Body, this.lowerLeg1Body, a);
                this.kneeJoint1 = r.CreateJoint(i);
                l = new s.bR(h.lowerLegOuter2.x, h.lowerLegOuter2.y);
                l = h.leg2.transform.matrix.transformPoint(l);
                l = h.transform.matrix.transformPoint(l);
                l = e.transform.matrix.transformPoint(l);
                a.Set(l.x / this.m_physScale, l.y / this.m_physScale);
                n = this.lowerLeg2Body.GetAngle() - this.upperLeg2Body.GetAngle();
                if (this.reversed) {
                  i.lowerAngle = -150 / t.oneEightyOverPI - n;
                  i.upperAngle = 0 / t.oneEightyOverPI - n;
                } else {
                  i.lowerAngle = 0 / t.oneEightyOverPI - n;
                  i.upperAngle = 150 / t.oneEightyOverPI - n;
                }
                i.Initialize(this.upperLeg2Body, this.lowerLeg2Body, a);
                this.kneeJoint2 = r.CreateJoint(i);
                if (e.holdPose && this.session.levelVersion >= 1.75) {
                  this.lockPose();
                }
              };
              u.createMovieClips = function (e) {
                var t = E.HV.createNPC(e.charIndex);
                E.HV.hideShapes(t);
                this.headMC = t.head;
                this.chestMC = t.chest;
                this.pelvisMC = t.pelvis;
                this.upperArm1MC = t.upperArm1;
                this.upperArm2MC = t.upperArm2;
                this.lowerArm1MC = t.lowerArm1;
                this.lowerArm2MC = t.lowerArm2;
                this.upperLeg1MC = t.upperLeg1;
                this.upperLeg2MC = t.upperLeg2;
                this.lowerLeg1MC = t.lowerLeg1;
                this.lowerLeg2MC = t.lowerLeg2;
                this.headMC.scaleX = this.headMC.scaleY = 0.5;
                this.chestMC.scaleX = this.chestMC.scaleY = 0.5;
                this.pelvisMC.scaleX = this.pelvisMC.scaleY = 0.5;
                this.upperArm1MC.scaleX = this.upperArm1MC.scaleY = 0.5;
                this.upperArm2MC.scaleX = this.upperArm2MC.scaleY = 0.5;
                this.lowerArm1MC.scaleX = this.lowerArm1MC.scaleY = 0.5;
                this.lowerArm2MC.scaleX = this.lowerArm2MC.scaleY = 0.5;
                this.upperLeg1MC.scaleX = this.upperLeg1MC.scaleY = 0.5;
                this.upperLeg2MC.scaleX = this.upperLeg2MC.scaleY = 0.5;
                this.lowerLeg1MC.scaleX = this.lowerLeg1MC.scaleY = 0.5;
                this.lowerLeg2MC.scaleX = this.lowerLeg2MC.scaleY = 0.5;
                if (this.reversed) {
                  this.headMC.scaleX = -0.5;
                  this.chestMC.scaleX = -0.5;
                  this.pelvisMC.scaleX = -0.5;
                  this.upperArm1MC.scaleX = -0.5;
                  this.upperArm2MC.scaleX = -0.5;
                  this.lowerArm1MC.scaleX = -0.5;
                  this.lowerArm2MC.scaleX = -0.5;
                  this.upperLeg1MC.scaleX = -0.5;
                  this.upperLeg2MC.scaleX = -0.5;
                  this.lowerLeg1MC.scaleX = -0.5;
                  this.lowerLeg2MC.scaleX = -0.5;
                }
                for (var n = t; n.numChildren > 0;) {
                  switch (n.getChildAt(0)) {
                    case n.arm2:
                      this.characterLayer.addChild(this.upperArm2MC);
                      this.characterLayer.addChild(this.lowerArm2MC);
                      n.removeChild(n.arm2);
                      break;
                    case n.arm1:
                      this.characterLayer.addChild(this.upperArm1MC);
                      this.characterLayer.addChild(this.lowerArm1MC);
                      n.removeChild(n.arm1);
                      break;
                    case n.headOuter:
                      this.characterLayer.addChild(this.headMC);
                      n.removeChild(n.headOuter);
                      break;
                    case n.chest:
                      this.characterLayer.addChild(this.chestMC);
                      break;
                    case n.pelvis:
                      this.characterLayer.addChild(this.pelvisMC);
                      break;
                    case n.leg2:
                      this.characterLayer.addChild(this.upperLeg2MC);
                      this.characterLayer.addChild(this.lowerLeg2MC);
                      n.removeChild(n.leg2);
                      break;
                    case n.leg1:
                      this.characterLayer.addChild(this.upperLeg1MC);
                      this.characterLayer.addChild(this.lowerLeg1MC);
                      n.removeChild(n.leg1);
                      break;
                    default:
                      throw Error("what the fuck");
                  }
                }
                this.headBody.SetUserData(this.headMC);
                this.chestBody.SetUserData(this.chestMC);
                this.pelvisBody.SetUserData(this.pelvisMC);
                this.upperArm1Body.SetUserData(this.upperArm1MC);
                this.upperArm2Body.SetUserData(this.upperArm2MC);
                this.lowerArm1Body.SetUserData(this.lowerArm1MC);
                this.lowerArm2Body.SetUserData(this.lowerArm2MC);
                this.upperLeg1Body.SetUserData(this.upperLeg1MC);
                this.upperLeg2Body.SetUserData(this.upperLeg2MC);
                this.lowerLeg1Body.SetUserData(this.lowerLeg1MC);
                this.lowerLeg2Body.SetUserData(this.lowerLeg2MC);
              };
              u.getJointBody = function (e = null) {
                var t;
                var n = 10000000;
                for (var r = this.paintVector.length, i = 0; i < r; i++) {
                  var s = this.paintVector[i];
                  var a = s.GetWorldCenter();
                  var h = new o.RM(e.x - a.x, e.y - a.y);
                  var l = h.x * h.x + h.y * h.y;
                  if (l < n) {
                    var d = 0;
                    for (var c = s.m_jointList; c; c = c.next) {
                      d += 1;
                    }
                    if (s != this.lowerArm1Body && s != this.lowerArm2Body && s != this.lowerLeg1Body && s != this.lowerLeg2Body || !(d > 1)) {
                      n = l;
                      t = s;
                    }
                  }
                }
                return t;
              };
              u.paint = function () {
                for (var e = this.paintVector.length, n = 0; n < e; n++) {
                  var r = this.paintVector[n];
                  var i = r.GetInterpolatedWorldCenter();
                  r.m_userData.x = i.x * this.m_physScale;
                  r.m_userData.y = i.y * this.m_physScale;
                  r.m_userData.rotation = r.GetInterpolatedAngle() * t.oneEightyOverPI % 360;
                }
              };
              u.handleContactResults = function () {
                var e;
                if (this.contactResultBuffer.get(this.headShape)) {
                  e = this.contactResultBuffer.get(this.headShape);
                  this.headSmash(e.impulse);
                  this.contactResultBuffer.delete(this.headShape);
                  this.contactAddBuffer.delete(this.headShape);
                }
                if (this.contactResultBuffer.get(this.chestShape)) {
                  e = this.contactResultBuffer.get(this.chestShape);
                  this.chestSmash(e.impulse);
                  this.contactResultBuffer.delete(this.chestShape);
                  this.contactAddBuffer.delete(this.chestShape);
                }
                if (this.contactResultBuffer.get(this.pelvisShape)) {
                  e = this.contactResultBuffer.get(this.pelvisShape);
                  this.pelvisSmash(e.impulse);
                  this.contactResultBuffer.delete(this.pelvisShape);
                  this.contactAddBuffer.delete(this.pelvisShape);
                }
              };
              u.handleContactAdds = function () {
                var e = this;
                this.contactAddBuffer.forEach(function (t, n) {
                  var i = n;
                  var s = e.contactAddSounds.get(i);
                  r.m.instance.playAreaSoundInstance(s, i.m_body);
                  e.contactAddBuffer.delete(n);
                });
              };
              u.checkJoints = function () {
                this.checkRevJoint(this.waistJoint, this.torsoBreakLimit, this.torsoBreak.bind(this));
                this.checkRevJoint(this.neckJoint, this.neckBreakLimit, this.neckBreak.bind(this));
                this.checkRevJoint(this.shoulderJoint1, this.shoulderBreakLimit, this.shoulderBreak1.bind(this));
                this.checkRevJoint(this.shoulderJoint2, this.shoulderBreakLimit, this.shoulderBreak2.bind(this));
                this.checkRevJoint(this.elbowJoint1, this.elbowBreakLimit, this.elbowBreak1.bind(this));
                this.checkRevJoint(this.elbowJoint2, this.elbowBreakLimit, this.elbowBreak2.bind(this));
                this.checkRevJoint(this.hipJoint1, this.hipBreakLimit, this.hipBreak1.bind(this));
                this.checkRevJoint(this.hipJoint2, this.hipBreakLimit, this.hipBreak2.bind(this));
                this.checkRevJoint(this.kneeJoint1, this.kneeBreakLimit, this.kneeBreak1.bind(this));
                this.checkRevJoint(this.kneeJoint2, this.kneeBreakLimit, this.kneeBreak2.bind(this));
              };
              u.checkRevJoint = function (e, t, n) {
                if (!e.broken) {
                  var r = e.GetReactionForce().LengthSquared();
                  if (r > t) {
                    n(r);
                    return;
                  }
                  var i = e.GetAnchor1();
                  var s = e.GetAnchor2();
                  var a = s.x - i.x;
                  var o = s.y - i.y;
                  if (a * a + o * o > 0.25) {
                    n(1000);
                  }
                }
              };
              u.isLooseHead = function (e) {
                return e === this.headBody && this.neckJoint.broken;
              };
              u.destroyUserJoints = function () {
                for (var e in this.userJoints) {
                  this.session.m_world.DestroyJoint(this.userJoints[e]);
                }
                this.userJoints = null;
              };
              u.cancelPose = function () {
                this.neckJoint.EnableMotor(false);
                this.shoulderJoint1.EnableMotor(false);
                this.shoulderJoint2.EnableMotor(false);
                this.elbowJoint1.EnableMotor(false);
                this.elbowJoint2.EnableMotor(false);
                this.hipJoint1.EnableMotor(false);
                this.hipJoint2.EnableMotor(false);
                this.kneeJoint1.EnableMotor(false);
                this.kneeJoint2.EnableMotor(false);
              };
              u.headSmash = function (e) {
                this.contactImpulseDict.delete(this.headShape);
                this.session.contactListener.deleteListener(i.fI.RESULT, this.headShape);
                this.session.contactListener.deleteListener(i.fI.ADD, this.headShape);
                this.dead = true;
                if (this.neckJoint.broken) {
                  this.headBloodFlow.stopSpewing();
                } else {
                  this.neckJoint.broken = true;
                  this.chestMC.nextFrame();
                  if (this.chestShape.m_userData != t.GRIND_STATE) {
                    var n = this.chestMC.getChildByName("spineRef");
                    var s = this.reversed ? -1 : 1;
                    this.neckBloodFlow = this.session.particleController.createBloodFlow(2.5, 4, this.chestBody, new o.RM(s * n.x / this.character_scale, n.y / this.character_scale), 270, 500, this.characterLayer, this.characterLayer.getChildIndex(this.chestMC));
                  }
                }
                var a = new o._A();
                a.density = 1;
                a.friction = 0.3;
                a.restitution = 0.1;
                a.radius = this.headChunkRadius / this.character_scale;
                a.filter = this.zeroFilter;
                var h = this.headBody.GetPosition();
                var l = this.headBody.GetAngle();
                var d = 4 / this.character_scale;
                this.headMC.gotoAndStop(3);
                this.headMC.visible = false;
                var c = this.characterLayer.getChildIndex(this.headMC);
                this.characterLayer.removeChild(this.headMC);
                for (var u = 1; u < 5; u++) {
                  var p = new o.gv();
                  (n = this.headMC["chunk" + u]).scaleX = n.scaleY = 0.5;
                  this.characterLayer.addChildAt(n, c);
                  p.userData = n;
                  p.position.Set(h.x + Math.sin(l) * d, h.y + Math.cos(l) * d);
                  var m = this.session.m_world.CreateBody(p);
                  var f = m.CreateShape(a);
                  f.SetMaterial(1);
                  m.SetMassFromShapes();
                  m.SetLinearVelocity(this.headBody.GetLinearVelocityFromWorldPoint(p.position));
                  m.SetAngularVelocity(this.headBody.GetAngularVelocity());
                  this.paintVector.push(m);
                  l += Math.PI / 2;
                }
                a.radius = this.brainRadius / this.character_scale;
                var _ = new o.gv();
                (n = this.headMC.brain).scaleX = n.scaleY = 0.5;
                this.characterLayer.addChildAt(n, c);
                _.userData = n;
                _.position.Set(h.x, h.y);
                _.angle = this.headBody.GetAngle();
                var v = this.session.m_world.CreateBody(_);
                (f = v.CreateShape(a)).SetMaterial(1);
                v.SetMassFromShapes();
                v.SetLinearVelocity(this.headBody.GetLinearVelocity());
                v.SetAngularVelocity(this.headBody.GetAngularVelocity());
                this.paintVector.push(v);
                this.session.particleController.createBloodBurst(5, 15, this.headBody, 200, new o.RM(), this.characterLayer);
                r.m.instance.playAreaSoundInstance("HeadSmash", this.headBody);
                this.session.m_world.DestroyBody(this.headBody);
              };
              u.chestSmash = function (e) {
                this.contactImpulseDict.delete(this.chestShape);
                this.session.contactListener.deleteListener(i.fI.RESULT, this.chestShape);
                this.session.contactListener.deleteListener(i.fI.ADD, this.chestShape);
                this.dead = true;
                if (!this.neckJoint.broken) {
                  this.neckBreak(0, false, false);
                }
                if (this.shoulderJoint1) {
                  if (!this.shoulderJoint1.broken) {
                    this.shoulderBreak1(0, false);
                  }
                }
                if (this.shoulderJoint2) {
                  if (!this.shoulderJoint2.broken) {
                    this.shoulderBreak2(0, false);
                  }
                }
                if (!this.waistJoint.broken) {
                  this.torsoBreak(0, false);
                }
                var t = new o._A();
                t.density = 1;
                t.friction = 0.3;
                t.restitution = 0.1;
                t.radius = this.chestChunkRadius / this.character_scale;
                t.filter = this.zeroFilter;
                var n = this.chestBody.GetPosition();
                var s = this.chestBody.GetAngle() + Math.PI / 4;
                var a = 5 / this.character_scale;
                this.chestMC.gotoAndStop(9);
                this.chestMC.visible = false;
                var h = this.characterLayer.getChildIndex(this.chestMC);
                for (var l = 1; l < 5; l++) {
                  var d = new o.gv();
                  var c = this.chestMC["chunk" + l];
                  c.scaleX = c.scaleY = 0.5;
                  this.characterLayer.addChildAt(c, h);
                  d.userData = c;
                  d.position.Set(n.x + Math.sin(s) * a, n.y + Math.cos(s) * a);
                  d.angle = this.chestBody.GetAngle();
                  var u = this.session.m_world.CreateBody(d);
                  var p = u.CreateShape(t);
                  p.SetMaterial(1);
                  u.SetMassFromShapes();
                  u.SetLinearVelocity(this.chestBody.GetLinearVelocityFromWorldPoint(d.position));
                  u.SetAngularVelocity(this.chestBody.GetAngularVelocity());
                  this.paintVector.push(u);
                  s += Math.PI / 2;
                }
                t.radius = this.headChunkRadius / this.character_scale;
                var m = new o.gv();
                (c = this.chestMC.heart).scaleX = c.scaleY = 0.5;
                this.characterLayer.addChildAt(c, h);
                c.play();
                m.userData = c;
                m.position.Set(n.x, n.y);
                m.angle = this.chestBody.GetAngle();
                this.heartBody = this.session.m_world.CreateBody(m);
                (p = this.heartBody.CreateShape(t)).SetMaterial(1);
                this.heartBody.SetMassFromShapes();
                this.heartBody.SetLinearVelocity(this.chestBody.GetLinearVelocity());
                this.heartBody.SetAngularVelocity(this.chestBody.GetAngularVelocity());
                this.paintVector.push(this.heartBody);
                if (this.stomachBloodFlow) {
                  this.stomachBloodFlow.stopSpewing();
                }
                if (this.neckBloodFlow) {
                  this.neckBloodFlow.stopSpewing();
                }
                if (this.shoulder1BloodFlow) {
                  this.shoulder1BloodFlow.stopSpewing();
                }
                if (this.shoulder2BloodFlow) {
                  this.shoulder2BloodFlow.stopSpewing();
                }
                this.session.particleController.createBloodBurst(5, 20, this.chestBody, 300, new o.RM(), this.characterLayer, h);
                r.m.instance.playAreaSoundInstance("ChestSmash", this.chestBody);
                this.chestBody.SetAngularVelocity(0);
                this.chestBody.SetLinearVelocity(new o.RM());
                this.session.m_world.DestroyBody(this.chestBody);
                this.chestMC.visible = false;
              };
              u.pelvisSmash = function (e) {
                this.contactImpulseDict.delete(this.pelvisShape);
                this.session.contactListener.deleteListener(i.fI.RESULT, this.pelvisShape);
                this.session.contactListener.deleteListener(i.fI.ADD, this.pelvisShape);
                if (this.hipJoint1) {
                  if (!this.hipJoint1.broken) {
                    this.hipBreak1(0, false);
                  }
                }
                if (this.hipJoint2) {
                  if (!this.hipJoint2.broken) {
                    this.hipBreak2(0, false);
                  }
                }
                if (!this.waistJoint.broken) {
                  this.torsoBreak(0);
                }
                if (this.hip1BloodFlow) {
                  this.hip1BloodFlow.stopSpewing();
                }
                if (this.hip2BloodFlow) {
                  this.hip2BloodFlow.stopSpewing();
                }
                var t = new o._A();
                t.density = 1;
                t.friction = 0.3;
                t.restitution = 0.1;
                t.radius = this.pelvisChunkRadius / this.character_scale;
                t.filter = this.zeroFilter;
                var n = this.pelvisBody.GetPosition();
                var s = this.pelvisBody.GetAngle();
                var a = 3 / this.character_scale;
                this.pelvisMC.gotoAndStop(5);
                this.pelvisMC.visible = false;
                var h = this.characterLayer.getChildIndex(this.pelvisMC);
                for (var l = 1; l < 4; l++) {
                  var d = new o.gv();
                  var c = this.pelvisMC["chunk" + l];
                  c.scaleX = c.scaleY = 0.5;
                  this.characterLayer.addChildAt(c, h);
                  d.userData = c;
                  d.position.Set(n.x + Math.sin(s) * a, n.y + Math.cos(s) * a);
                  d.angle = this.pelvisBody.GetAngle();
                  var u = this.session.m_world.CreateBody(d);
                  u.CreateShape(t).SetMaterial(1);
                  u.SetMassFromShapes();
                  u.SetLinearVelocity(this.pelvisBody.GetLinearVelocityFromWorldPoint(d.position));
                  u.SetAngularVelocity(this.pelvisBody.GetAngularVelocity());
                  this.paintVector.push(u);
                  s += Math.PI * 2 / 3;
                }
                this.session.particleController.createBloodBurst(5, 15, this.pelvisBody, 200, new o.RM(), this.characterLayer, h);
                r.m.instance.playAreaSoundInstance("PelvisSmash", this.pelvisBody);
                this.session.m_world.DestroyBody(this.pelvisBody);
                this.pelvisMC.visible = false;
                this.addVocals("Pelvis", 5);
              };
              u.torsoBreak = function (e, n = true, i = true) {
                this.waistJoint.broken = true;
                this.session.m_world.DestroyJoint(this.waistJoint);
                var s = this.chestMC.currentFrame;
                this.chestMC.gotoAndStop(s + 4);
                this.pelvisMC.nextFrame();
                if (this.pelvisShape.m_userData != t.GRIND_STATE) {
                  this.pelvisBody.GetShapeList().SetFilterData(this.lowerBodyFilter);
                  this.session.m_world.Refilter(this.pelvisBody.GetShapeList());
                }
                var a = this.upperLeg1Body.GetShapeList();
                if (a.m_filter.groupIndex != -3) {
                  a.SetFilterData(this.lowerBodyFilter);
                  this.session.m_world.Refilter(a);
                }
                if ((a = this.upperLeg2Body.GetShapeList()).m_filter.groupIndex != -3) {
                  a.SetFilterData(this.lowerBodyFilter);
                  this.session.m_world.Refilter(a);
                }
                if ((a = this.lowerLeg1Body.GetShapeList()).m_filter.groupIndex != -3) {
                  a.SetFilterData(this.lowerBodyFilter);
                  this.session.m_world.Refilter(a);
                }
                if ((a = this.lowerLeg2Body.GetShapeList()).m_filter.groupIndex != -3) {
                  a.SetFilterData(this.lowerBodyFilter);
                  this.session.m_world.Refilter(a);
                }
                if (n && this.chestShape.m_userData != t.GRIND_STATE) {
                  this.stomachBloodFlow = this.session.particleController.createBloodFlow(2, 3, this.chestBody, new o.RM(0, 0), 90, 500, this.characterLayer, this.characterLayer.getChildIndex(this.chestMC));
                }
                if (i) {
                  r.m.instance.playAreaSoundInstance("LimbRip1", this.pelvisBody);
                }
                this.addVocals("Torso", 5);
              };
              u.neckBreak = function (e, n = true, i = true) {
                this.dead = true;
                this.neckJoint.broken = true;
                this.session.m_world.DestroyJoint(this.neckJoint);
                this.headMC.gotoAndStop(2);
                this.chestMC.nextFrame();
                if (this.headShape.m_userData != t.GRIND_STATE) {
                  this.headBody.GetShapeList().SetFilterData(this.zeroFilter);
                  this.session.m_world.Refilter(this.headBody.GetShapeList());
                  this.headBloodFlow = this.session.particleController.createBloodFlow(2.5, 4, this.headBody, new o.RM(0, 0), 90, 150, this.characterLayer, this.characterLayer.getChildIndex(this.headMC));
                }
                if (n && this.chestShape.m_userData != t.GRIND_STATE) {
                  var s = this.chestMC.getChildByName("spineRef");
                  var a = this.reversed ? -1 : 1;
                  this.neckBloodFlow = this.session.particleController.createBloodFlow(2.5, 4, this.chestBody, new o.RM(a * s.x / this.character_scale, s.y / this.character_scale), 270, 500, this.characterLayer, this.characterLayer.getChildIndex(this.chestMC));
                }
                if (i) {
                  r.m.instance.playAreaSoundInstance("NeckBreak", this.headBody);
                }
              };
              u.shoulderBreak1 = function (e, n = true) {
                this.shoulderJoint1.broken = true;
                var i = this.shoulderJoint1.m_localAnchor1;
                var s = this.shoulderJoint1.m_localAnchor2;
                this.session.m_world.DestroyJoint(this.shoulderJoint1);
                var a = this.upperArm1Body.GetShapeList();
                if (a.m_filter.groupIndex != -3) {
                  a.SetFilterData(this.zeroFilter);
                  this.session.m_world.Refilter(a);
                  a.SetMaterial(2);
                  a.SetUserData(this);
                  this.arm1BloodFlow = this.session.particleController.createBloodFlow(1, 3, this.upperArm1Body, s, 270, 200, this.characterLayer, this.characterLayer.getChildIndex(this.upperArm1MC));
                }
                if ((a = this.lowerArm1Body.GetShapeList()).m_filter.groupIndex != -3) {
                  a.SetFilterData(this.zeroFilter);
                  this.session.m_world.Refilter(a);
                }
                this.upperArm1MC.nextFrame();
                this.chestMC.nextFrame();
                this.chestMC.nextFrame();
                if (n && this.chestShape.m_userData != t.GRIND_STATE) {
                  this.shoulder1BloodFlow = this.session.particleController.createBloodFlow(0, 1, this.chestBody, i, 270, 500, this.characterLayer, this.characterLayer.getChildIndex(this.upperArm1MC));
                  r.m.instance.playAreaSoundInstance("LimbRip2", this.upperArm1Body);
                }
                this.addVocals("Shoulder1", 3);
              };
              u.shoulderBreak2 = function (e, n = true) {
                this.shoulderJoint2.broken = true;
                var i = this.shoulderJoint2.m_localAnchor1;
                var s = this.shoulderJoint2.m_localAnchor2;
                this.session.m_world.DestroyJoint(this.shoulderJoint2);
                var a = this.upperArm2Body.GetShapeList();
                if (a.m_filter.groupIndex != -3) {
                  a.SetFilterData(this.zeroFilter);
                  this.session.m_world.Refilter(a);
                  a.SetMaterial(2);
                  a.SetUserData(this);
                  this.arm2BloodFlow = this.session.particleController.createBloodFlow(1, 3, this.upperArm2Body, s, 270, 200, this.characterLayer, this.characterLayer.getChildIndex(this.chestMC));
                }
                if ((a = this.lowerArm2Body.GetShapeList()).m_filter.groupIndex != -3) {
                  a.SetFilterData(this.zeroFilter);
                  this.session.m_world.Refilter(a);
                }
                this.upperArm2MC.nextFrame();
                if (n && this.chestShape.m_userData != t.GRIND_STATE) {
                  this.shoulder2BloodFlow = this.session.particleController.createBloodFlow(0, 1, this.chestBody, i, 270, 500, this.characterLayer, this.characterLayer.getChildIndex(this.upperArm2MC));
                  r.m.instance.playAreaSoundInstance("LimbRip2", this.upperArm2Body);
                }
                this.addVocals("Shoulder2", 3);
              };
              u.elbowBreak1 = function (e) {
                this.elbowJoint1.broken = true;
                var t = this.elbowJoint1.m_localAnchor2;
                this.session.m_world.DestroyJoint(this.elbowJoint1);
                for (var n = this.lowerArm1Body.m_jointList; n; n = n.next) {
                  if (!n.other.GetShapeList().m_isSensor) {
                    this.session.m_world.DestroyJoint(n.joint);
                  }
                }
                var i = this.lowerArm1Body.GetShapeList();
                if (i.m_filter.groupIndex != -3) {
                  i.SetFilterData(this.zeroFilter);
                  this.session.m_world.Refilter(i);
                }
                this.lowerArm1MC.gotoAndStop(2);
                var s = this.upperArm1MC.currentFrame;
                this.upperArm1MC.gotoAndStop(s + 2);
                this.session.particleController.createBloodBurst(5, 15, this.lowerArm1Body, 50, t, this.characterLayer);
                var a = Math.ceil(Math.random() * 4);
                r.m.instance.playAreaSoundInstance("BoneBreak" + a, this.lowerArm1Body);
                this.addVocals("Elbow1", 1);
              };
              u.elbowBreak2 = function (e) {
                this.elbowJoint2.broken = true;
                var t = this.elbowJoint1.m_localAnchor2;
                this.session.m_world.DestroyJoint(this.elbowJoint2);
                for (var n = this.lowerArm2Body.m_jointList; n; n = n.next) {
                  if (!n.other.GetShapeList().m_isSensor) {
                    this.session.m_world.DestroyJoint(n.joint);
                  }
                }
                var i = this.lowerArm2Body.GetShapeList();
                if (i.m_filter.groupIndex != -3) {
                  i.SetFilterData(this.zeroFilter);
                  this.session.m_world.Refilter(i);
                }
                this.lowerArm2MC.gotoAndStop(2);
                var s = this.upperArm2MC.currentFrame;
                this.upperArm2MC.gotoAndStop(s + 2);
                this.session.particleController.createBloodBurst(5, 15, this.lowerArm2Body, 50, t, this.characterLayer);
                var a = Math.ceil(Math.random() * 4);
                r.m.instance.playAreaSoundInstance("BoneBreak" + a, this.lowerArm2Body);
                this.addVocals("Elbow2", 1);
              };
              u.hipBreak1 = function (e, n = true) {
                this.hipJoint1.broken = true;
                var i = this.hipJoint1.m_localAnchor2;
                this.session.m_world.DestroyJoint(this.hipJoint1);
                var s = this.upperLeg1Body.GetShapeList();
                if (s.m_filter.groupIndex != -3) {
                  s.SetFilterData(this.zeroFilter);
                  this.session.m_world.Refilter(s);
                  s.SetMaterial(2);
                  s.SetUserData(this);
                  this.thigh1BloodFlow = this.session.particleController.createBloodFlow(1, 3, this.upperLeg1Body, i, 270, 200, this.characterLayer, this.characterLayer.getChildIndex(this.upperLeg1MC));
                }
                if ((s = this.lowerLeg1Body.GetShapeList()).m_filter.groupIndex != -3) {
                  s.SetFilterData(this.zeroFilter);
                  this.session.m_world.Refilter(s);
                }
                this.upperLeg1MC.nextFrame();
                var a = this.pelvisMC.currentFrame;
                this.pelvisMC.gotoAndStop(a + 2);
                if (n && this.pelvisShape.m_userData != t.GRIND_STATE) {
                  this.hip1BloodFlow = this.session.particleController.createBloodFlow(0, 1, this.pelvisBody, new o.RM(0, 0), 90, 500, this.characterLayer, this.characterLayer.getChildIndex(this.upperLeg1MC));
                  r.m.instance.playAreaSoundInstance("LimbRip3", this.upperLeg1Body);
                }
                this.addVocals("Hip1", 4);
              };
              u.hipBreak2 = function (e, n = true) {
                this.hipJoint2.broken = true;
                var i = this.hipJoint2.m_localAnchor2;
                this.session.m_world.DestroyJoint(this.hipJoint2);
                var s = this.upperLeg2Body.GetShapeList();
                if (s.m_filter.groupIndex != -3) {
                  s.SetFilterData(this.zeroFilter);
                  this.session.m_world.Refilter(s);
                  s.SetMaterial(2);
                  s.SetUserData(this);
                  this.thigh2BloodFlow = this.session.particleController.createBloodFlow(1, 3, this.upperLeg2Body, i, 270, 200, this.characterLayer, this.characterLayer.getChildIndex(this.upperLeg2MC));
                }
                if ((s = this.lowerLeg2Body.GetShapeList()).m_filter.groupIndex != -3) {
                  s.SetFilterData(this.zeroFilter);
                  this.session.m_world.Refilter(s);
                }
                this.upperLeg2MC.nextFrame();
                if (n && this.pelvisShape.m_userData != t.GRIND_STATE) {
                  this.hip2BloodFlow = this.session.particleController.createBloodFlow(0, 1, this.pelvisBody, new o.RM(0, 0), 90, 500, this.characterLayer, this.characterLayer.getChildIndex(this.upperLeg2MC));
                  r.m.instance.playAreaSoundInstance("LimbRip4", this.upperLeg2Body);
                }
                this.addVocals("Hip2", 4);
              };
              u.kneeBreak1 = function (e) {
                this.kneeJoint1.broken = true;
                var t = this.kneeJoint1.m_localAnchor2;
                this.session.m_world.DestroyJoint(this.kneeJoint1);
                for (var n = this.lowerLeg1Body.m_jointList; n; n = n.next) {
                  if (!n.other.GetShapeList().m_isSensor) {
                    this.session.m_world.DestroyJoint(n.joint);
                  }
                }
                var i = this.lowerLeg1Body.GetShapeList();
                if (i.m_filter.groupIndex != -3) {
                  i.SetFilterData(this.zeroFilter);
                  i.m_isSensor = false;
                }
                this.session.m_world.Refilter(i);
                this.lowerLeg1MC.gotoAndStop(2);
                var s = this.upperLeg1MC.currentFrame;
                this.upperLeg1MC.gotoAndStop(s + 2);
                this.session.particleController.createBloodBurst(5, 15, this.lowerLeg1Body, 50, t, this.characterLayer);
                var a = Math.ceil(Math.random() * 4);
                r.m.instance.playAreaSoundInstance("BoneBreak" + a, this.upperLeg1Body);
                this.addVocals("Knee1", 2);
              };
              u.kneeBreak2 = function (e) {
                this.kneeJoint2.broken = true;
                var t = this.kneeJoint2.m_localAnchor2;
                this.session.m_world.DestroyJoint(this.kneeJoint2);
                for (var n = this.lowerLeg2Body.m_jointList; n; n = n.next) {
                  if (!n.other.GetShapeList().m_isSensor) {
                    this.session.m_world.DestroyJoint(n.joint);
                  }
                }
                var i = this.lowerLeg2Body.GetShapeList();
                if (i.m_filter.groupIndex != -3) {
                  i.SetFilterData(this.zeroFilter);
                  i.m_isSensor = false;
                }
                this.session.m_world.Refilter(i);
                this.lowerLeg2MC.gotoAndStop(2);
                var s = this.upperLeg2MC.currentFrame;
                this.upperLeg2MC.gotoAndStop(s + 2);
                this.session.particleController.createBloodBurst(5, 15, this.lowerLeg2Body, 50, t, this.characterLayer);
                var a = Math.ceil(Math.random() * 4);
                r.m.instance.playAreaSoundInstance("BoneBreak" + a, this.upperLeg2Body);
                this.addVocals("Knee2", 2);
              };
              u.checkVocals = function () {
                var e = this.voiceArray.length - 1;
                if (this.voiceSound) {
                  if (this.voiceSound.soundChannel) {
                    if (e > this.voicePriority) {
                      this.voiceSound.stopSound();
                      var t = this.voiceArray[e];
                      this.voiceSound = r.m.instance.playAreaSoundInstance(this.tag + t, this.headBody);
                      this.voicePriority = e;
                    }
                    return;
                  }
                  this.voiceSound = null;
                  this.voicePriority = -1;
                }
                if (!(e < 0)) {
                  t = this.voiceArray[e];
                  this.voiceSound = r.m.instance.playAreaSoundInstance(this.tag + t, this.headBody);
                  this.voicePriority = e;
                }
              };
              u.addVocals = function (e, t) {
                this.voiceArray[t] = e;
              };
              u.randomVocals = function (e) {
                return ["Elbow1", "Elbow2", "Knee1", "Knee2", "Shoulder1", "Shoulder2", "Hip1", "Hip2", "Knee1", "Spikes"][e];
              };
              u.shapeImpale = function (e, t = true, n = null, r = 0) {
                if (!(c.w.currentSession.version < 1.35)) {
                  if (e == this.chestShape || e == this.pelvisShape) {
                    var i = e.GetBody().GetPosition().x.toString();
                    var s = parseInt(i.charAt(i.length - 1));
                    this.addVocals(this.randomVocals(s), 5);
                  } else if (e == this.headShape) {
                    if (t) {
                      if (n) {
                        var a = e.GetBody().GetWorldCenter();
                        if (new o.RM(n.x - a.x, n.y - a.y).LengthSquared() < r) {
                          this.dead = true;
                        } else {
                          i = e.GetBody().GetPosition().x.toString();
                          s = parseInt(i.charAt(i.length - 1));
                          this.addVocals(this.randomVocals(s), 5);
                        }
                      } else {
                        this.dead = true;
                      }
                    } else {
                      i = e.GetBody().GetPosition().x.toString();
                      s = parseInt(i.charAt(i.length - 1));
                      this.addVocals(this.randomVocals(s), 5);
                    }
                  }
                }
              };
              u.grindShape = function (e) {
                switch (e) {
                  case this.headShape:
                    this.headShape.SetUserData(t.GRIND_STATE);
                    this.contactResultBuffer.delete(this.headShape);
                    this.contactAddBuffer.delete(this.headShape);
                    this.session.contactListener.deleteListener(i.fI.RESULT, this.headShape);
                    this.session.contactListener.deleteListener(i.fI.ADD, this.headShape);
                    if (this.headBloodFlow) {
                      this.headBloodFlow.stopSpewing();
                    }
                    break;
                  case this.chestShape:
                    this.chestShape.SetUserData(t.GRIND_STATE);
                    this.contactResultBuffer.delete(this.chestShape);
                    this.contactAddBuffer.delete(this.chestShape);
                    this.session.contactListener.deleteListener(i.fI.RESULT, this.chestShape);
                    this.session.contactListener.deleteListener(i.fI.ADD, this.chestShape);
                    if (this.neckBloodFlow) {
                      this.neckBloodFlow.stopSpewing();
                    }
                    if (this.shoulder1BloodFlow) {
                      this.shoulder1BloodFlow.stopSpewing();
                    }
                    if (this.shoulder2BloodFlow) {
                      this.shoulder2BloodFlow.stopSpewing();
                    }
                    if (this.stomachBloodFlow) {
                      this.stomachBloodFlow.stopSpewing();
                    }
                    break;
                  case this.pelvisShape:
                    this.pelvisShape.SetUserData(t.GRIND_STATE);
                    this.contactResultBuffer.delete(this.pelvisShape);
                    this.contactAddBuffer.delete(this.pelvisShape);
                    this.session.contactListener.deleteListener(i.fI.RESULT, this.pelvisShape);
                    this.session.contactListener.deleteListener(i.fI.ADD, this.pelvisShape);
                    if (this.hip1BloodFlow) {
                      this.hip1BloodFlow.stopSpewing();
                    }
                    if (this.hip2BloodFlow) {
                      this.hip2BloodFlow.stopSpewing();
                    }
                    break;
                  case this.upperArm1Body.GetShapeList():
                    if (this.arm1BloodFlow) {
                      this.arm1BloodFlow.stopSpewing();
                    }
                    break;
                  case this.upperArm2Body.GetShapeList():
                    if (this.arm2BloodFlow) {
                      this.arm2BloodFlow.stopSpewing();
                    }
                    break;
                  case this.upperLeg1Body.GetShapeList():
                    if (this.thigh1BloodFlow) {
                      this.thigh1BloodFlow.stopSpewing();
                    }
                    break;
                  case this.upperLeg2Body.GetShapeList():
                    if (this.thigh2BloodFlow) {
                      this.thigh2BloodFlow.stopSpewing();
                    }
                }
              };
              u.removeBody = function (e) {
                switch (e) {
                  case this.headBody:
                    if (!this.neckJoint.broken) {
                      this.neckBreak(0, true, true);
                    }
                    break;
                  case this.chestBody:
                    if (!this.neckJoint.broken) {
                      this.neckBreak(0, true, true);
                    }
                    if (!this.shoulderJoint1.broken) {
                      this.shoulderBreak1(0, true);
                    }
                    if (!this.shoulderJoint2.broken) {
                      this.shoulderBreak2(0, true);
                    }
                    if (!this.waistJoint.broken) {
                      this.torsoBreak(0);
                    }
                    break;
                  case this.pelvisBody:
                    if (!this.hipJoint1.broken) {
                      this.hipBreak1(0, true);
                    }
                    if (!this.hipJoint2.broken) {
                      this.hipBreak2(0, true);
                    }
                    if (!this.waistJoint.broken) {
                      this.torsoBreak(0);
                    }
                    break;
                  case this.upperArm1Body:
                    if (!this.shoulderJoint1.broken) {
                      this.shoulderBreak1(0, true);
                    }
                    if (!this.elbowJoint1.broken) {
                      this.elbowBreak1(0);
                    }
                    break;
                  case this.upperArm2Body:
                    if (!this.shoulderJoint2.broken) {
                      this.shoulderBreak2(0, true);
                    }
                    if (!this.elbowJoint2.broken) {
                      this.elbowBreak2(0);
                    }
                    break;
                  case this.upperLeg1Body:
                    if (!this.hipJoint1.broken) {
                      this.hipBreak1(0, true);
                    }
                    if (!this.kneeJoint1.broken) {
                      this.kneeBreak1(0);
                    }
                    break;
                  case this.upperLeg2Body:
                    if (!this.hipJoint2.broken) {
                      this.hipBreak2(0, true);
                    }
                    if (!this.kneeJoint2.broken) {
                      this.kneeBreak2(0);
                    }
                }
              };
              u.explodeShape = function (e, t) {
                switch (e) {
                  case this.headShape:
                    if (t > 0.85) {
                      this.contactResultBuffer.delete(this.headShape);
                      this.contactAddBuffer.delete(this.headShape);
                      this.headSmash(0);
                    }
                    break;
                  case this.chestShape:
                    var n = this.chestBody.GetMass() / h.sP.DEF_CHEST_MASS;
                    var r = Math.max(1 - n * 0.15, 0.7);
                    if (t > r) {
                      this.contactResultBuffer.delete(this.chestShape);
                      this.contactAddBuffer.delete(this.chestShape);
                      this.chestSmash(0);
                    }
                    break;
                  case this.pelvisShape:
                    var i = this.pelvisBody.GetMass() / h.sP.DEF_PELVIS_MASS;
                    if (t > (r = Math.max(1 - i * 0.15, 0.7))) {
                      this.contactResultBuffer.delete(this.pelvisShape);
                      this.contactAddBuffer.delete(this.pelvisShape);
                      this.pelvisSmash(0);
                    }
                }
              };
              u.triggerSingleActivation = function (e, t, n) {
                if (t == "wake from sleep") {
                  if (this.chestBody) {
                    this.chestBody.WakeUp();
                  }
                } else if (t == "apply impulse") {
                  if (this.destroyJointsUponDeath && this._dead) {
                    return;
                  }
                  if (this.chestBody) {
                    var r = n[0];
                    var i = n[1];
                    var s = n[2];
                    var a = [this.chestBody, this.headBody, this.pelvisBody];
                    if (!this.shoulderJoint1.broken) {
                      a.push(this.upperArm1Body);
                      if (!this.elbowJoint1.broken) {
                        a.push(this.lowerArm1Body);
                      }
                    }
                    if (!this.shoulderJoint2.broken) {
                      a.push(this.upperArm2Body);
                      if (!this.elbowJoint2.broken) {
                        a.push(this.lowerArm2Body);
                      }
                    }
                    if (!this.hipJoint1.broken) {
                      a.push(this.upperLeg1Body);
                      if (!this.kneeJoint1.broken) {
                        a.push(this.lowerLeg1Body);
                      }
                    }
                    if (!this.hipJoint2.broken) {
                      a.push(this.upperLeg2Body);
                      if (!this.kneeJoint2.broken) {
                        a.push(this.lowerLeg2Body);
                      }
                    }
                    for (var h = a.length, l = 0; l < h; l++) {
                      var d = a[l];
                      var c = d.GetMass();
                      d.ApplyImpulse(new o.RM(r * c, i * c), d.GetWorldCenter());
                    }
                    if (s) {
                      var u = this.chestBody.GetAngularVelocity();
                      this.chestBody.SetAngularVelocity(u + s * 10);
                    }
                  }
                } else if (t == "hold pose") {
                  if (this.destroyJointsUponDeath && this._dead) {
                    return;
                  }
                  if (this.chestBody) {
                    this.lockPose();
                  }
                } else if (t == "release pose") {
                  if (this.destroyJointsUponDeath && this._dead) {
                    return;
                  }
                  if (this.chestBody) {
                    this.releasePose();
                  }
                }
              };
              u.lockPose = function () {
                var e = this.neckJoint.GetJointAngle();
                this.neckJoint.m_lowerAngle = e - 0;
                this.neckJoint.m_upperAngle = e + 0;
                e = this.waistJoint.GetJointAngle();
                this.waistJoint.m_lowerAngle = e - 0;
                this.waistJoint.m_upperAngle = e + 0;
                e = this.shoulderJoint1.GetJointAngle();
                this.shoulderJoint1.m_lowerAngle = e - 0;
                this.shoulderJoint1.m_upperAngle = e + 0;
                e = this.elbowJoint1.GetJointAngle();
                this.elbowJoint1.m_lowerAngle = e - 0;
                this.elbowJoint1.m_upperAngle = e + 0;
                e = this.shoulderJoint2.GetJointAngle();
                this.shoulderJoint2.m_lowerAngle = e - 0;
                this.shoulderJoint2.m_upperAngle = e + 0;
                e = this.elbowJoint2.GetJointAngle();
                this.elbowJoint2.m_lowerAngle = e - 0;
                this.elbowJoint2.m_upperAngle = e + 0;
                e = this.hipJoint1.GetJointAngle();
                this.hipJoint1.m_lowerAngle = e - 0;
                this.hipJoint1.m_upperAngle = e + 0;
                e = this.kneeJoint1.GetJointAngle();
                this.kneeJoint1.m_lowerAngle = e - 0;
                this.kneeJoint1.m_upperAngle = e + 0;
                e = this.hipJoint2.GetJointAngle();
                this.hipJoint2.m_lowerAngle = e - 0;
                this.hipJoint2.m_upperAngle = e + 0;
                e = this.kneeJoint2.GetJointAngle();
                this.kneeJoint2.m_lowerAngle = e - 0;
                this.kneeJoint2.m_upperAngle = e + 0;
              };
              u.releasePose = function () {
                this.neckJoint.m_lowerAngle = -20 / t.oneEightyOverPI - this.neckJoint.m_referenceAngle;
                this.neckJoint.m_upperAngle = 20 / t.oneEightyOverPI - this.neckJoint.m_referenceAngle;
                this.waistJoint.m_lowerAngle = -5 / t.oneEightyOverPI - this.waistJoint.m_referenceAngle;
                this.waistJoint.m_upperAngle = 5 / t.oneEightyOverPI - this.waistJoint.m_referenceAngle;
                if (this.reversed) {
                  this.shoulderJoint1.m_lowerAngle = -60 / t.oneEightyOverPI - this.shoulderJoint1.m_referenceAngle;
                  this.shoulderJoint1.m_upperAngle = 180 / t.oneEightyOverPI - this.shoulderJoint1.m_referenceAngle;
                  this.shoulderJoint2.m_lowerAngle = -60 / t.oneEightyOverPI - this.shoulderJoint2.m_referenceAngle;
                  this.shoulderJoint2.m_upperAngle = 180 / t.oneEightyOverPI - this.shoulderJoint2.m_referenceAngle;
                  this.elbowJoint1.m_lowerAngle = 0 / t.oneEightyOverPI - this.elbowJoint1.m_referenceAngle;
                  this.elbowJoint1.m_upperAngle = 160 / t.oneEightyOverPI - this.elbowJoint1.m_referenceAngle;
                  this.elbowJoint2.m_lowerAngle = 0 / t.oneEightyOverPI - this.elbowJoint2.m_referenceAngle;
                  this.elbowJoint2.m_upperAngle = 160 / t.oneEightyOverPI - this.elbowJoint2.m_referenceAngle;
                  this.hipJoint1.m_lowerAngle = -10 / t.oneEightyOverPI - this.hipJoint1.m_referenceAngle;
                  this.hipJoint1.m_upperAngle = 150 / t.oneEightyOverPI - this.hipJoint1.m_referenceAngle;
                  this.hipJoint2.m_lowerAngle = -10 / t.oneEightyOverPI - this.hipJoint2.m_referenceAngle;
                  this.hipJoint2.m_upperAngle = 150 / t.oneEightyOverPI - this.hipJoint2.m_referenceAngle;
                  this.kneeJoint1.m_lowerAngle = -150 / t.oneEightyOverPI - this.kneeJoint1.m_referenceAngle;
                  this.kneeJoint1.m_upperAngle = 0 / t.oneEightyOverPI - this.kneeJoint1.m_referenceAngle;
                  this.kneeJoint2.m_lowerAngle = -150 / t.oneEightyOverPI - this.kneeJoint2.m_referenceAngle;
                  this.kneeJoint2.m_upperAngle = 0 / t.oneEightyOverPI - this.kneeJoint2.m_referenceAngle;
                } else {
                  this.shoulderJoint1.m_lowerAngle = -180 / t.oneEightyOverPI - this.shoulderJoint1.m_referenceAngle;
                  this.shoulderJoint1.m_upperAngle = 60 / t.oneEightyOverPI - this.shoulderJoint1.m_referenceAngle;
                  this.shoulderJoint2.m_lowerAngle = -180 / t.oneEightyOverPI - this.shoulderJoint2.m_referenceAngle;
                  this.shoulderJoint2.m_upperAngle = 60 / t.oneEightyOverPI - this.shoulderJoint2.m_referenceAngle;
                  this.elbowJoint1.m_lowerAngle = -160 / t.oneEightyOverPI - this.elbowJoint1.m_referenceAngle;
                  this.elbowJoint1.m_upperAngle = 0 / t.oneEightyOverPI - this.elbowJoint1.m_referenceAngle;
                  this.elbowJoint2.m_lowerAngle = -160 / t.oneEightyOverPI - this.elbowJoint2.m_referenceAngle;
                  this.elbowJoint2.m_upperAngle = 0 / t.oneEightyOverPI - this.elbowJoint2.m_referenceAngle;
                  this.hipJoint1.m_lowerAngle = -150 / t.oneEightyOverPI - this.hipJoint1.m_referenceAngle;
                  this.hipJoint1.m_upperAngle = 10 / t.oneEightyOverPI - this.hipJoint1.m_referenceAngle;
                  this.hipJoint2.m_lowerAngle = -150 / t.oneEightyOverPI - this.hipJoint2.m_referenceAngle;
                  this.hipJoint2.m_upperAngle = 10 / t.oneEightyOverPI - this.hipJoint2.m_referenceAngle;
                  this.kneeJoint1.m_lowerAngle = 0 / t.oneEightyOverPI - this.kneeJoint1.m_referenceAngle;
                  this.kneeJoint1.m_upperAngle = 150 / t.oneEightyOverPI - this.kneeJoint1.m_referenceAngle;
                  this.kneeJoint2.m_lowerAngle = 0 / t.oneEightyOverPI - this.kneeJoint2.m_referenceAngle;
                  this.kneeJoint2.m_upperAngle = 150 / t.oneEightyOverPI - this.kneeJoint2.m_referenceAngle;
                }
              };
              l = t;
              if (d = [{
                key: "groupDisplayObject",
                get: function () {
                  return this.charSprite;
                }
              }, {
                key: "dead",
                get: function () {
                  return this._dead;
                },
                set: function (e) {
                  this._dead = e;
                  if (this._dead) {
                    if (this.voiceSound) {
                      this.voiceSound.stopSound();
                      this.voiceSound = null;
                    }
                    if (this.destroyJointsUponDeath) {
                      this.destroyUserJoints();
                    }
                    if (this.session.levelVersion < 1.75) {
                      this.cancelPose();
                    } else {
                      this.releasePose();
                    }
                  }
                }
              }, {
                key: "isChild",
                get: function () {
                  return this.tag === "Kid1" || this.tag === "Kid2";
                }
              }, {
                key: "centralBody",
                get: function () {
                  if (this.heartBody) {
                    return this.heartBody;
                  } else {
                    return this.chestBody;
                  }
                }
              }, {
                key: "bodyList",
                get: function () {
                  if (this.chestBody) {
                    return [this.chestBody, this.headBody];
                  } else {
                    return [];
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
                    Object.defineProperty(e, Ce(r.key), r);
                  }
                })(l.prototype, d);
              }
              Object.defineProperty(l, "prototype", {
                writable: false
              });
              return l;
            }(d.o);
            function Oe(e, t) {
              Oe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return Oe(e, t);
            }
            Ee.GROUP_ID_COUNT = -40;
            Ee.GRIND_STATE = 1;
            n(9868);
            n(33771);
            var ke = function (e) {
              function t(t) {
                var n;
                (n = e.call(this) || this).delayCounter = 0;
                n.delayTotal = 0;
                n.direction = 1;
                n.tarAng = 90;
                n.tolerance = 3;
                n.maxSpeed = 6;
                n.minSpeed = 0.5;
                n.checkContact = function (e) {
                  if (e.otherShape != n.blockerShape) {
                    c.w.currentSession.contactListener.deleteListener(l.jp.RESULT, n.padShape);
                    n.hit = true;
                  }
                };
                var r = t;
                n.tarAng = r.paddleAngle * Math.PI / 180;
                n.paddleSpeed = n.minSpeed + (n.maxSpeed - n.minSpeed) * r.paddleSpeed / 10;
                n.paddle = new s.j7((0, u.zI)("Game", "PaddMC"));
                n.paddle.convertChildren(n.paddle._pixiSprite);
                var i = new s.j7((0, u.zI)("Game", "PaddleBaseMC"));
                i.convertChildren(i._pixiSprite);
                if (r.reverse) {
                  n.direction = -1;
                  n.tarAng *= n.direction;
                  n.tolerance *= n.direction;
                  n.paddle.nub.x *= -1;
                  n.paddle.timer.x *= -1;
                  n.paddle.arrow.x *= -1;
                  i.nub.x *= -1;
                }
                n.createBody(new o.RM(r.x, r.y), r.rotation * Math.PI / 180);
                n.createJoint();
                var a = c.w.currentSession.level;
                a.background.addChild(i);
                i.x = r.x;
                i.y = r.y;
                i.rotation = r.rotation;
                n.timerText = n.paddle.timer.timerText._pixiSprite;
                n.glow = n.paddle.arrow.glow;
                n.glow.visible = false;
                a.foreground.addChild(n.paddle);
                n.paddle.x = r.x;
                n.paddle.y = r.y;
                n.paddle.rotation = r.rotation;
                n.delayTotal = Math.round(r.springDelay * 30);
                n.delayCounter = n.delayTotal;
                var h = n.delayCounter / 30;
                n.delayTimeString = h.toFixed(2);
                n.timerText.text = n.delayTimeString;
                a.paintItemVector.push(n);
                a.actionsVector.push(n);
                c.w.currentSession.contactListener.registerListener(l.jp.RESULT, n.padShape, n.checkContact);
                var d = new s.lU(5, 90, 16777215, 1, 0, 1, 5, 5, 1, 3, "inner");
                var p = new s.j7();
                p.setPixiMovieClip((0, u.zI)("Game", "metal_pieces_MC"), true);
                c.w.currentSession.particleController.createBMDArray("metalpieces", p, [d]);
                return n;
              }
              var n;
              var i;
              i = e;
              (n = t).prototype = Object.create(i.prototype);
              n.prototype.constructor = n;
              Oe(n, i);
              var a = t.prototype;
              a.createBody = function (e, t) {
                var n = new o.gv();
                n.position.Set(e.x / this.m_physScale, e.y / this.m_physScale);
                n.angle = t;
                this.body = c.w.currentSession.m_world.CreateBody(n);
                var r = new o.m2();
                r.density = 200;
                r.friction = 0.5;
                r.restitution = 0.1;
                r.filter.categoryBits = 8;
                r.filter.groupIndex = 15;
                r.SetAsOrientedBox(166 / this.m_physScale, 15 / this.m_physScale, new o.RM(0, -5 / this.m_physScale), 0);
                this.padShape = this.body.CreateShape(r);
                this.body.SetMassFromShapes();
                r.filter.groupIndex = 0;
                r.SetAsOrientedBox(175 / this.m_physScale, 20 / this.m_physScale, this.body.GetWorldPoint(new o.RM(0, 0)), t);
                c.w.currentSession.level.levelBody.CreateShape(r);
                (n = new o.gv()).position = this.body.GetWorldPoint(new o.RM(0, 15 / this.m_physScale));
                n.angle = t;
                (r = new o.m2()).density = 0;
                r.friction = 0.5;
                r.restitution = 0.1;
                r.filter.categoryBits = 8;
                r.filter.groupIndex = 15;
                r.SetAsBox(131.25 / this.m_physScale, 5 / this.m_physScale);
                var i = c.w.currentSession.m_world.CreateBody(n);
                this.blockerShape = i.CreateShape(r);
              };
              a.createJoint = function () {
                var e = new o.Gq();
                var t = new o.RM(this.direction * 151 / this.m_physScale, -5 / this.m_physScale);
                e.Initialize(c.w.currentSession.level.levelBody, this.body, this.body.GetWorldPoint(t));
                e.enableLimit = true;
                e.upperAngle = 0;
                e.lowerAngle = 0;
                e.enableMotor = false;
                e.maxMotorTorque = 1000000;
                this.joint = c.w.currentSession.m_world.CreateJoint(e);
              };
              a.paint = function () {
                if (!this.body.IsSleeping()) {
                  var e = this.body.GetInterpolatedWorldCenter();
                  this.paddle.x = e.x * this.m_physScale;
                  this.paddle.y = e.y * this.m_physScale;
                  this.paddle.rotation = this.body.GetInterpolatedAngle() * 180 / Math.PI;
                }
              };
              a.checkRevJoint = function () {
                if (this.joint && !this.joint.broken) {
                  var e = this.joint.GetAnchor1();
                  var t = this.joint.GetAnchor2();
                  var n = t.x - e.x;
                  var r = t.y - e.y;
                  if (n * n + r * r > 0.43) {
                    this.breakJoint();
                  }
                }
              };
              a.breakJoint = function () {
                c.w.currentSession.particleController.createSparkBurstPoint(this.joint.GetAnchor1(), new o.RM(1, 1), 50, 80, 100);
                c.w.currentSession.particleController.createBurst("metalpieces", 10, 50, this.body, 25);
                c.w.currentSession.m_world.DestroyJoint(this.joint);
                this.joint.broken = true;
                this.paddle.arrow.glow.visible = true;
                this.timerText.style.fill = "#FF0000";
                this.timerText.alpha = 0.5;
                this.padShape.m_density = 10;
                this.body.SetMassFromShapes();
                this.paddle.arrow.glow.visible = false;
                r.m.instance.playAreaSoundInstance("PaddleBreak", this.body);
              };
              a.actions = function () {
                if (!this.joint.broken) {
                  if (this.hit) {
                    if (this.delayCounter == 0) {
                      this.glow.visible = true;
                      this.hit = false;
                      this.body.WakeUp();
                      this.body.SetBullet(true);
                      this.joint.SetMotorSpeed(this.direction * this.paddleSpeed);
                      if (this.direction == -1) {
                        this.joint.SetLimits(Math.PI * -90 / 180, 0);
                      } else {
                        this.joint.SetLimits(0, Math.PI * 90 / 180);
                      }
                      this.joint.EnableMotor(true);
                      this.delayCounter = this.delayTotal;
                      this.timerText.text = "0.00";
                      r.m.instance.playAreaSoundInstance("SpringBoxBounce", this.body);
                    } else {
                      var e = this.delayCounter / 30;
                      this.timerText.text = e.toFixed(2);
                      this.delayCounter -= 1;
                    }
                  } else if (this.joint.IsMotorEnabled()) {
                    this.checkRevJoint();
                    if (this.joint.GetMotorSpeed() > 0 && this.direction == 1 || this.joint.GetMotorSpeed() < 0 && this.direction == -1) {
                      if (this.direction == 1) {
                        if (this.joint.GetJointAngle() > this.tarAng) {
                          this.joint.SetMotorSpeed(-2);
                        }
                      } else if (this.joint.GetJointAngle() < this.tarAng) {
                        this.joint.SetMotorSpeed(2);
                      }
                    } else if ((this.joint.GetMotorSpeed() < 0 && this.direction == 1 || this.joint.GetMotorSpeed() > 0 && this.direction == -1) && (this.joint.GetJointAngle() < 0 && this.direction == 1 || this.joint.GetJointAngle() > 0 && this.direction == -1)) {
                      this.joint.EnableMotor(false);
                      this.joint.SetLimits(0, 0);
                      this.joint.SetMotorSpeed(0);
                      this.body.SetBullet(false);
                      c.w.currentSession.contactListener.registerListener(l.jp.RESULT, this.padShape, this.checkContact);
                      this.timerText.text = this.delayTimeString;
                      this.glow.visible = false;
                    }
                  }
                }
              };
              a.die = function () {
                this.timerText.destroy();
                e.prototype.die.call(this);
              };
              return t;
            }(d.o);
            function Pe(e, t) {
              Pe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return Pe(e, t);
            }
            var Me = function (e) {
              function t(t, n, r) {
                var i;
                if (n === undefined) {
                  n = null;
                }
                if (r === undefined) {
                  r = null;
                }
                (i = e.call(this) || this).height = 18;
                var a = t;
                var h = c.w.currentSession.level.background;
                var l = c.w.currentSession.m_world;
                i.mc = new s.j7((0, u.zI)("Game", "RailMC"));
                i.mc.x = a.x;
                i.mc.y = a.y;
                i.mc.width = a.shapeWidth;
                i.mc.rotation = a.rotation;
                h.addChild(i.mc);
                var d = new o.m2();
                d.friction = 0.3;
                d.restitution = 0.1;
                d.filter.categoryBits = 8;
                var p = a.shapeWidth;
                var m = i.height;
                d.SetAsOrientedBox(p / 2 / i.m_physScale, m / 4 / i.m_physScale, new o.RM(0, -m / 4 / i.m_physScale));
                var f = new o.gv();
                f.angle = a.rotation * Math.PI / 180;
                f.position = new o.RM(a.x / i.m_physScale, a.y / i.m_physScale);
                var _ = l.CreateBody(f);
                _.CreateShape(d).SetMaterial(4);
                d.SetAsOrientedBox(p / 2 / i.m_physScale, m / 4 / i.m_physScale, new o.RM(0, m / 4 / i.m_physScale));
                _.CreateShape(d);
                return i;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              Pe(n, r);
              return t;
            }(d.o);
            function Re(e) {
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
            function Ie(e, t) {
              Ie = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return Ie(e, t);
            }
            var Le = function (e) {
              function t(t, n, r) {
                var i;
                if (n === undefined) {
                  n = null;
                }
                if (r === undefined) {
                  r = null;
                }
                i = e.call(this) || this;
                var a = t;
                a = a.clone();
                var o = c.w.currentSession.level.background;
                i.mc = new s.j7();
                i.mc.setPixiMovieClip((0, u.zI)("Game", "SignMC"));
                i.mc.gotoAndStop(a.signPostType);
                o.addChild(i.mc);
                i.mc.x = t.x;
                i.mc.y = t.y;
                if (a.signPost) {
                  var h = new s.j7((0, u.zI)("Game", "PostMC"));
                  i.mc.addChildAt(h, 0);
                }
                i.mc.rotation = a.rotation;
                return i;
              }
              var n;
              var r;
              var i;
              var a;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              Ie(n, r);
              i = t;
              if (a = [{
                key: "groupDisplayObject",
                get: function () {
                  return this.mc;
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
                    Object.defineProperty(e, Re(r.key), r);
                  }
                })(i.prototype, a);
              }
              Object.defineProperty(i, "prototype", {
                writable: false
              });
              return i;
            }(d.o);
            function je(e, t) {
              je = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return je(e, t);
            }
            var Be = function (e) {
              function t(t) {
                var n;
                (n = e.call(this) || this).createBody(new o.RM(t.x, t.y));
                return n;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              je(n, r);
              t.prototype.createBody = function (e) {
                var t = new o.gv();
                var n = new o._A();
                n.density = 0.5;
                n.friction = 0.1;
                n.restitution = 0.5;
                n.filter.categoryBits = 8;
                n.radius = 10 / this.m_physScale;
                t.position.Set(e.x / this.m_physScale, e.y / this.m_physScale);
                var r = c.w.currentSession.m_world.CreateBody(t);
                r.CreateShape(n);
                r.SetMassFromShapes();
                var i = c.w.currentSession.level;
                var a = new s.j7((0, u.zI)("Game", "SoccerBallMC"));
                i.background.addChild(a);
                r.SetUserData(a);
                i.paintBodyVector.push(r);
              };
              return t;
            }(d.o);
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
              function t(t, n, a) {
                var h;
                if (n === undefined) {
                  n = null;
                }
                if (a === undefined) {
                  a = null;
                }
                (h = e.call(this) || this).maxSounds = 2;
                h.soundCounter = 0;
                h.checkAdd = function (e) {
                  if (e.shape2.GetMaterial() & 6) {
                    var t = e.shape2.GetBody();
                    h.bodiesToAdd.push(t);
                    h.add = true;
                  }
                };
                h.checkRemove = function (e) {
                  if (e.shape2.GetMaterial() & 6) {
                    var t = e.shape2.GetBody();
                    if (h.bjDictionary.get(t) || h.bodiesToAdd.indexOf(t) > -1) {
                      h.bodiesToRemove.push(t);
                      h.remove = true;
                    }
                  }
                };
                h.soundStopped = function (e) {
                  e.target.removeEventListener(r.Gm.AREA_SOUND_STOP, h.soundStopped);
                  h.soundCounter -= 1;
                };
                h.checkBaseAdd = function (e) {
                  if (!e.shape2.m_isSensor) {
                    var t = e.shape2.m_body.m_mass;
                    if (t == 0 || !(t < h.body.m_mass)) {
                      var n = o.x5.b2Dot(e.velocity, e.normal);
                      if ((n = Math.abs(n)) > 4) {
                        var i = Math.ceil(Math.random() * 2);
                        r.m.instance.playAreaSoundInstance("SpikeBaseHit" + i, h.body);
                      }
                    }
                  }
                };
                var l = t;
                var d = l.numSpikes * 15;
                h.halfWidth = d / 2;
                if (n) {
                  h.body = n;
                }
                var p = new o.RM(l.x, l.y);
                if (a) {
                  p.Add(new o.RM(a.x, a.y));
                }
                h.createBody(p, d, l.rotation * Math.PI / 180, l.immovable2, l.sleeping);
                h.mc = new s.j7((0, u.zI)("Game", "SpikesMC"));
                h.mc.convertChildren(h.mc.pixiSprite);
                h.mc.x = l.x;
                h.mc.y = l.y;
                h.mc.rotation = l.rotation;
                h.setupMC(l.numSpikes);
                h.angle = l.rotation * Math.PI / 180;
                h.bodiesToAdd = [];
                h.bodiesToRemove = [];
                h.bjDictionary = new Map();
                h.countDictionary = new Map();
                c.w.currentSession.level.actionsVector.push(h);
                var m = c.w.currentSession.contactListener;
                m.registerListener(i.fI.ADD, h.sensor, h.checkAdd);
                m.registerListener(i.fI.REMOVE, h.sensor, h.checkRemove);
                return h;
              }
              var n;
              var l;
              l = e;
              (n = t).prototype = Object.create(l.prototype);
              n.prototype.constructor = n;
              Fe(n, l);
              var d;
              var p;
              var m = t.prototype;
              m.setupMC = function (e) {
                var t = e * 15 - 2;
                this.bmd = new s.ws(t, 50, true, 0);
                this.bitmap = new s.mb(this.bmd);
                this.mc.addChild(this.bitmap);
                this.bloodContainer = new s.kx();
                this.mc.addChild(this.bloodContainer);
                c.w.currentSession.level.background.addChild(this.mc);
                var n = this.mc.spikes;
                var r = this.mc.base;
                r._pixiSprite.width = t;
                n.x = -this.halfWidth;
                for (var i = 20; i < e; i++) {
                  var a = new s.j7((0, u.zI)("Game", "spike"));
                  n.addChild(a);
                  a.x = i * 15;
                }
                if (this.body) {
                  var o = this.body.GetLocalCenter().y * this.m_physScale;
                  n.y -= o;
                  r.y -= o;
                  this.bitmap.y -= o;
                }
              };
              m.createBody = function (e, t, n, r = false, s = false) {
                var a = new o.m2();
                a.isSensor = true;
                a.density = 0.25;
                a.friction = 0.3;
                a.restitution = 0.1;
                a.filter.categoryBits = 8;
                var h = c.w.currentSession.level;
                if (r) {
                  a.SetAsOrientedBox(this.halfWidth / this.m_physScale, 25 / this.m_physScale, new o.RM(e.x / this.m_physScale, e.y / this.m_physScale), n);
                  this.sensor = h.levelBody.CreateShape(a);
                  a.isSensor = false;
                  a.SetAsOrientedBox(this.halfWidth / this.m_physScale, 10 / this.m_physScale, new o.RM((e.x - Math.sin(n) * 35) / this.m_physScale, (e.y + Math.cos(n) * 35) / this.m_physScale), n);
                  h.levelBody.CreateShape(a);
                } else {
                  if (this.body) {
                    a.SetAsOrientedBox(this.halfWidth / this.m_physScale, 25 / this.m_physScale, new o.RM(e.x / this.m_physScale, e.y / this.m_physScale), n);
                    this.sensor = this.body.CreateShape(a);
                    a.isSensor = false;
                    a.density = 3;
                    var l = new o.RM((e.x - Math.sin(n) * 35) / this.m_physScale, (e.y + Math.cos(n) * 35) / this.m_physScale);
                    a.SetAsOrientedBox(this.halfWidth / this.m_physScale, 10 / this.m_physScale, l, n);
                    this.baseShape = this.body.CreateShape(a);
                  } else {
                    var d = new o.gv();
                    a.SetAsBox(this.halfWidth / this.m_physScale, 25 / this.m_physScale);
                    d.position.Set(e.x / this.m_physScale, e.y / this.m_physScale);
                    d.angle = n;
                    d.isSleeping = s;
                    this.body = c.w.currentSession.m_world.CreateBody(d);
                    this.sensor = this.body.CreateShape(a);
                    this.body.SetMassFromShapes();
                    a.isSensor = false;
                    a.density = 3;
                    a.SetAsOrientedBox(this.halfWidth / this.m_physScale, 10 / this.m_physScale, new o.RM(0, 35 / this.m_physScale), 0);
                    this.baseShape = this.body.CreateShape(a);
                    this.body.SetMassFromShapes();
                    h.paintItemVector.push(this);
                  }
                  c.w.currentSession.contactListener.registerListener(i.fI.ADD, this.baseShape, this.checkBaseAdd);
                }
              };
              m.actions = function () {
                if (this.bmd.destroyed) {
                  c.w.currentSession.level.removeFromActionsVector(this);
                } else {
                  if (this.add) {
                    for (var e = 0; e < this.bodiesToAdd.length; e++) {
                      this.createPrisJoint(this.bodiesToAdd[e]);
                    }
                    this.bodiesToAdd = [];
                    this.add = false;
                  }
                  if (this.remove) {
                    for (e = 0; e < this.bodiesToRemove.length; e++) {
                      this.removeJoint(this.bodiesToRemove[e]);
                    }
                    this.bodiesToRemove = [];
                    this.remove = false;
                  }
                }
              };
              m.createPrisJoint = function (e) {
                if (this.bjDictionary.get(e)) {
                  var t = this.countDictionary.get(e);
                  this.countDictionary.set(e, t + 1);
                } else {
                  var n = c.w.currentSession;
                  var i = e.GetShapeList();
                  var s = i.GetUserData();
                  if (s instanceof h.sP || s instanceof a.S3) {
                    s.shapeImpale(i);
                  }
                  var l;
                  var d;
                  var u = new o.iE();
                  var p = e.GetWorldCenter();
                  var m = this.body ?? c.w.currentSession.level.levelBody;
                  u.Initialize(m, e, p, new o.RM(-Math.sin(this.angle), Math.cos(this.angle)));
                  u.collideConnected = true;
                  u.userData = h.sP.IMPALE_JOINT;
                  u.enableMotor = true;
                  u.maxMotorForce = 30;
                  u.motorSpeed = 0;
                  this.bjDictionary.set(e, n.m_world.CreateJoint(u));
                  this.countDictionary.set(e, 1);
                  if (i.GetUserData() instanceof a.EK) {
                    l = i.GetUserData().particleType;
                    d = 25;
                    n.particleController.createPointBurst(l, p.x * this.m_physScale, p.y * this.m_physScale, 5, 15, d);
                  } else {
                    d = 50;
                    n.particleController.createPointBloodBurst(p.x * this.m_physScale, p.y * this.m_physScale, 5, 15, d);
                  }
                  this.paintBlood(p.x * this.m_physScale, p.y * this.m_physScale, i);
                  if (this.soundCounter < this.maxSounds) {
                    var f = Math.ceil(Math.random() * 3);
                    var _ = r.m.instance.playAreaSoundInstance("ImpaleSpikes" + f, e);
                    if (_) {
                      this.soundCounter += 1;
                      _.addEventListener(r.Gm.AREA_SOUND_STOP, this.soundStopped, false, 0, true);
                    }
                  }
                }
              };
              m.paintBlood = function (e, t, n) {
                if (c.w.bloodSetting !== 0 || n.GetUserData() instanceof a.EK) {
                  var r = new s.bR(e, t);
                  r = c.w.currentSession.level.background.localToGlobalUnpatched(r);
                  var i = (r = this.mc.spikes.globalToLocal(r)).x;
                  var o = i % 15;
                  if (o < 0) {
                    if (o < -7.5) {
                      o = -15 - o;
                    } else {
                      o *= -1;
                    }
                  } else if (o > 7.5) {
                    o = 15 - o;
                  } else {
                    o *= -1;
                  }
                  var h = i + o;
                  var l = new s.j7();
                  l.setPixiMovieClip((0, u.zI)("Game", "spike_blood"));
                  var d = l.transform.colorTransform;
                  d.color = 16763904;
                  d.alphaMultiplier = 0.5;
                  l.gotoAndStop(Math.ceil(Math.random() * 5));
                  var p = new s.uq();
                  p.translate(h, 0);
                  this.bmd.clearBeforeRender = false;
                  if (n.GetUserData() instanceof a.EK) {
                    var m = n.GetUserData();
                    (d = l.transform.colorTransform).color = m.juiceColor;
                    d.alphaMultiplier = 0.75;
                    this.bmd.draw(l, p, d);
                  } else {
                    this.bmd.draw(l, p);
                  }
                }
              };
              m.paint = function () {
                var e = this.body.GetInterpolatedWorldCenter();
                this.mc.x = e.x * this.m_physScale;
                this.mc.y = e.y * this.m_physScale;
                this.mc.rotation = this.body.GetInterpolatedAngle() * t.oneEightyOverPI % 360;
              };
              m.removeJoint = function (e) {
                var t = this.countDictionary.get(e);
                if ((t -= 1) == 0) {
                  var n = this.bjDictionary.get(e);
                  c.w.currentSession.m_world.DestroyJoint(n);
                  this.bjDictionary.delete(e);
                  this.countDictionary.delete(e);
                } else {
                  this.countDictionary.set(e, t);
                }
              };
              m.getJointBody = function (e = null) {
                return this.body;
              };
              m.triggerSingleActivation = function (e, t, n) {
                if (t == "wake from sleep") {
                  if (this.body) {
                    this.body.WakeUp();
                  }
                } else if (t == "apply impulse" && this.body) {
                  var r = n[0];
                  var i = n[1];
                  var s = this.body.GetMass();
                  this.body.ApplyImpulse(new o.RM(r * s, i * s), this.body.GetWorldCenter());
                  var a = n[2];
                  var h = this.body.GetAngularVelocity();
                  this.body.SetAngularVelocity(h + a);
                }
              };
              d = t;
              if (p = [{
                key: "groupDisplayObject",
                get: function () {
                  return this.mc;
                }
              }, {
                key: "bodyList",
                get: function () {
                  if (this.body) {
                    return [this.body];
                  } else {
                    return [];
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
                })(d.prototype, p);
              }
              Object.defineProperty(d, "prototype", {
                writable: false
              });
              return d;
            }(d.o);
            function Ge(e, t) {
              Ge = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return Ge(e, t);
            }
            var Ue = function (e) {
              function t(t) {
                var n;
                (n = e.call(this) || this).delayCounter = 0;
                n.delayTotal = 0;
                n.checkContact = function (e) {
                  c.w.currentSession.contactListener.deleteListener(l.jp.RESULT, n.padShape);
                  n.hit = true;
                };
                var r = t;
                n.createBody(new o.RM(r.x, r.y), r.rotation * Math.PI / 180);
                n.createJoint(r.rotation * Math.PI / 180);
                var i = c.w.currentSession.level;
                n.mc = new s.j7((0, u.zI)("Game", "SpringBoxMC"));
                n.mc.convertChildren(n.mc._pixiSprite);
                i.background.addChild(n.mc);
                n.mc.pad.y = n.body.GetLocalCenter().y * -1 * n.m_physScale;
                n.timerText = s.A_.spriteToTextField(n.mc.base.timerText, n.mc.base);
                n.timerText.maxChars = 4;
                n.glow = n.mc.base.glow;
                n.glow.visible = false;
                var a = n.mc.base;
                i.foreground.addChild(a);
                a.x = r.x;
                a.y = r.y;
                a.rotation = r.rotation;
                n.delayTotal = Math.round(r.springDelay * 30);
                n.delayCounter = n.delayTotal;
                var h = n.delayCounter / 30;
                n.delayTimeString = h.toFixed(2);
                n.timerText.text = n.delayTimeString;
                i.paintItemVector.push(n);
                i.actionsVector.push(n);
                c.w.currentSession.contactListener.registerListener(l.jp.RESULT, n.padShape, n.checkContact);
                return n;
              }
              var n;
              var i;
              i = e;
              (n = t).prototype = Object.create(i.prototype);
              n.prototype.constructor = n;
              Ge(n, i);
              var a = t.prototype;
              a.createBody = function (e, t) {
                var n = new o.gv();
                n.position.Set(e.x / this.m_physScale, e.y / this.m_physScale);
                n.angle = t;
                this.body = c.w.currentSession.m_world.CreateBody(n);
                var r = new o.m2();
                r.density = 200;
                r.friction = 0.5;
                r.restitution = 0.1;
                r.filter.categoryBits = 8;
                r.SetAsOrientedBox(175 / this.m_physScale, 11 / this.m_physScale, new o.RM(0, -9 / this.m_physScale), 0);
                this.padShape = this.body.CreateShape(r);
                r.SetAsOrientedBox(13 / this.m_physScale, 9 / this.m_physScale, new o.RM(-120 / this.m_physScale, 11 / this.m_physScale), 0);
                this.body.CreateShape(r);
                r.SetAsOrientedBox(13 / this.m_physScale, 9 / this.m_physScale, new o.RM(120 / this.m_physScale, 11 / this.m_physScale), 0);
                this.body.CreateShape(r);
                this.body.SetMassFromShapes();
                r.SetAsOrientedBox(175 / this.m_physScale, 16 / this.m_physScale, this.body.GetWorldPoint(new o.RM(0, 4 / this.m_physScale)), t);
                c.w.currentSession.level.levelBody.CreateShape(r);
              };
              a.createJoint = function (e) {
                var t = new o.iE();
                t.Initialize(c.w.currentSession.level.levelBody, this.body, this.body.GetWorldCenter(), new o.RM(Math.sin(e), -Math.cos(e)));
                t.enableLimit = true;
                t.upperTranslation = 0;
                t.lowerTranslation = 0;
                t.enableMotor = false;
                t.maxMotorForce = 1000000;
                this.joint = c.w.currentSession.m_world.CreateJoint(t);
              };
              a.paint = function () {
                var e = this.body.GetInterpolatedWorldCenter();
                this.mc.x = e.x * this.m_physScale;
                this.mc.y = e.y * this.m_physScale;
                this.mc.rotation = this.body.GetInterpolatedAngle() * (180 / Math.PI);
              };
              a.actions = function () {
                if (this.hit) {
                  if (this.delayCounter == 0) {
                    this.glow.visible = true;
                    this.hit = false;
                    this.body.WakeUp();
                    this.joint.SetMotorSpeed(10);
                    this.joint.SetLimits(0, 32 / this.m_physScale);
                    this.joint.EnableMotor(true);
                    this.delayCounter = this.delayTotal;
                    this.timerText.text = "0.00";
                    r.m.instance.playAreaSoundInstance("SpringBoxBounce", this.body);
                  } else {
                    var e = this.delayCounter / 30;
                    this.timerText.text = e.toFixed(2);
                    this.delayCounter -= 1;
                  }
                } else if (this.joint.IsMotorEnabled()) {
                  if (this.joint.GetMotorSpeed() > 0) {
                    if (this.joint.GetJointTranslation() * this.m_physScale > 32) {
                      this.joint.SetMotorSpeed(-1);
                    }
                  } else if (this.joint.GetMotorSpeed() < 0 && this.joint.GetJointTranslation() * this.m_physScale < 0) {
                    this.joint.EnableMotor(false);
                    this.joint.SetLimits(0, 0);
                    this.joint.SetMotorSpeed(0);
                    c.w.currentSession.contactListener.registerListener(l.jp.RESULT, this.padShape, this.checkContact);
                    this.timerText.text = this.delayTimeString;
                    this.glow.visible = false;
                  }
                }
              };
              a.die = function () {
                this.mc.base.timerText._pixiSprite.destroy();
                e.prototype.die.call(this);
              };
              return t;
            }(d.o);
            function Ve(e) {
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
            function He(e, t) {
              He = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return He(e, t);
            }
            var ze = function (e) {
              function t(t, n, r) {
                var i;
                if (n === undefined) {
                  n = null;
                }
                if (r === undefined) {
                  r = null;
                }
                (i = e.call(this) || this).breakLimit = 50;
                i.checkContact = function (e) {
                  if (e.impulse > i.breakLimit) {
                    c.w.currentSession.contactListener.deleteListener(l.jp.RESULT, i.top);
                    c.w.currentSession.contactListener.deleteListener(l.jp.RESULT, i.leftLeg);
                    c.w.currentSession.contactListener.deleteListener(l.jp.RESULT, i.rightLeg);
                    c.w.currentSession.level.actionsVector.push(i);
                  }
                };
                var a = t;
                i.mc = new s.j7((0, u.zI)("Game", "TableMC"));
                i.mc.convertChildren(i.mc._pixiSprite);
                i.mc.gotoAndStop(1);
                i.mc.x = a.x;
                i.mc.y = a.y;
                i.mc.rotation = a.rotation;
                c.w.currentSession.level.background.addChild(i.mc);
                if (c.w.currentSession.version < 1.67) {
                  i.createBody(new o.RM(a.x, a.y), a.rotation * Math.PI / 180, false);
                } else if (a.interactive) {
                  i.breakLimit = 15;
                  i.createBody(new o.RM(a.x, a.y), a.rotation * Math.PI / 180, a.sleeping);
                }
                return i;
              }
              var n;
              var a;
              a = e;
              (n = t).prototype = Object.create(a.prototype);
              n.prototype.constructor = n;
              He(n, a);
              var h;
              var d;
              var p = t.prototype;
              p.createBody = function (e, t, n) {
                var r = new o.gv();
                r.position.Set(e.x / this.m_physScale, e.y / this.m_physScale);
                r.angle = t;
                r.isSleeping = n;
                this.body = c.w.currentSession.m_world.CreateBody(r);
                var s = new o.m2();
                s.density = 5;
                s.friction = 0.1;
                s.restitution = 0.2;
                s.filter.categoryBits = 8;
                s.SetAsOrientedBox(78 / this.m_physScale, 3 / this.m_physScale, new o.RM(0, -3 / this.m_physScale), 0);
                this.top = this.body.CreateShape(s);
                s.SetAsOrientedBox(3 / this.m_physScale, 25 / this.m_physScale, new o.RM(-48 / this.m_physScale, 25 / this.m_physScale), 0);
                this.leftLeg = this.body.CreateShape(s);
                s.SetAsOrientedBox(3 / this.m_physScale, 25 / this.m_physScale, new o.RM(48 / this.m_physScale, 25 / this.m_physScale), 0);
                this.rightLeg = this.body.CreateShape(s);
                this.body.SetMassFromShapes();
                c.w.currentSession.level.paintItemVector.push(this);
                this.mc.inner.y = -11;
                c.w.currentSession.contactListener.registerListener(i.fI.RESULT, this.top, this.checkContact);
                c.w.currentSession.contactListener.registerListener(i.fI.RESULT, this.leftLeg, this.checkContact);
                c.w.currentSession.contactListener.registerListener(i.fI.RESULT, this.rightLeg, this.checkContact);
              };
              p.paint = function () {
                var e = this.body.GetInterpolatedWorldCenter();
                this.mc.x = e.x * this.m_physScale;
                this.mc.y = e.y * this.m_physScale;
                this.mc.rotation = this.body.GetInterpolatedAngle() * t.oneEightyOverPI % 360;
              };
              p.actions = function () {
                if (this.break2) {
                  h = c.w.currentSession.level;
                  l = c.w.currentSession.m_world;
                  h.removeFromPaintItemVector(this);
                  h.removeFromActionsVector(this);
                  d = this.body.GetWorldCenter();
                  p = this.body.GetLinearVelocity();
                  m = this.body.GetAngularVelocity();
                  f = this.body.GetAngle();
                  l.DestroyBody(this.body);
                  (_ = new o.gv()).angle = f;
                  _.position = d;
                  (v = new o.m2()).density = 5;
                  v.friction = 0.1;
                  v.restitution = 0.2;
                  v.filter.categoryBits = 8;
                  v.SetAsOrientedBox(39 / this.m_physScale, 3 / this.m_physScale, new o.RM(-39 / this.m_physScale, -3 / this.m_physScale), 0);
                  var e = l.CreateBody(_);
                  e.CreateShape(v);
                  e.SetMassFromShapes();
                  v.SetAsOrientedBox(39 / this.m_physScale, 3 / this.m_physScale, new o.RM(39 / this.m_physScale, -3 / this.m_physScale), 0);
                  var t = l.CreateBody(_);
                  t.CreateShape(v);
                  t.SetMassFromShapes();
                  e.SetLinearVelocity(p);
                  e.SetAngularVelocity(m);
                  t.SetLinearVelocity(p);
                  t.SetAngularVelocity(m);
                  var n = new s.j7((0, u.zI)("Game", "table_top_broken_1"));
                  var a = new s.j7((0, u.zI)("Game", "table_top_broken_2"));
                  b = h.background.getChildIndex(this.mc);
                  this.mc.parent.removeChild(this.mc);
                  h.background.addChildAt(a, b);
                  h.background.addChildAt(n, b);
                  e.SetUserData(n);
                  t.SetUserData(a);
                  h.paintBodyVector.push(e);
                  h.paintBodyVector.push(t);
                  r.m.instance.playAreaSoundInstance("TableBreak1", e);
                  this.body = null;
                } else {
                  var h = c.w.currentSession.level;
                  var l = c.w.currentSession.m_world;
                  h.removeFromActionsVector(this);
                  c.w.currentSession.contactListener.registerListener(i.fI.RESULT, this.top, this.checkContact);
                  var d = this.body.GetWorldCenter();
                  var p = this.body.GetLinearVelocity();
                  var m = this.body.GetAngularVelocity();
                  var f = this.body.GetAngle();
                  this.body.DestroyShape(this.leftLeg);
                  this.body.DestroyShape(this.rightLeg);
                  this.body.SetMassFromShapes();
                  this.mc.inner.leg1.visible = false;
                  this.mc.inner.leg2.visible = false;
                  this.mc.inner.y = 0;
                  var _ = new o.gv();
                  _.angle = f;
                  _.position = d;
                  var v = new o.m2();
                  v.density = 5;
                  v.friction = 0.1;
                  v.restitution = 0.2;
                  v.filter.categoryBits = 8;
                  v.SetAsOrientedBox(3 / this.m_physScale, 25 / this.m_physScale, new o.RM(-48 / this.m_physScale, 25 / this.m_physScale), 0);
                  var y = l.CreateBody(_);
                  y.CreateShape(v);
                  y.SetMassFromShapes();
                  v.SetAsOrientedBox(3 / this.m_physScale, 25 / this.m_physScale, new o.RM(48 / this.m_physScale, 25 / this.m_physScale), 0);
                  var g = l.CreateBody(_);
                  g.CreateShape(v);
                  g.SetMassFromShapes();
                  y.SetLinearVelocity(p);
                  y.SetAngularVelocity(m);
                  g.SetLinearVelocity(p);
                  g.SetAngularVelocity(m);
                  var w = new s.j7((0, u.zI)("Game", "table_leg"));
                  var x = new s.j7((0, u.zI)("Game", "table_leg"));
                  var b = h.background.getChildIndex(this.mc);
                  h.background.addChildAt(w, b);
                  h.background.addChildAt(x, b);
                  y.SetUserData(w);
                  g.SetUserData(x);
                  h.paintBodyVector.push(y);
                  h.paintBodyVector.push(g);
                  this.break2 = true;
                  this.breakLimit = c.w.currentSession.version < 1.67 ? 25 : 7;
                  r.m.instance.playAreaSoundInstance("TableBreak2", this.body);
                }
              };
              p.getJointBody = function (e = null) {
                return this.body;
              };
              p.triggerSingleActivation = function (e, t, n) {
                if (t == "wake from sleep") {
                  if (this.body) {
                    this.body.WakeUp();
                  }
                } else if (t == "apply impulse" && this.body) {
                  var r = n[0];
                  var i = n[1];
                  var s = this.body.GetMass();
                  this.body.ApplyImpulse(new o.RM(r * s, i * s), this.body.GetWorldCenter());
                  var a = n[2];
                  var h = this.body.GetAngularVelocity();
                  this.body.SetAngularVelocity(h + a);
                }
              };
              h = t;
              if (d = [{
                key: "groupDisplayObject",
                get: function () {
                  return this.mc;
                }
              }, {
                key: "bodyList",
                get: function () {
                  if (this.body) {
                    return [this.body];
                  } else {
                    return [];
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
                    Object.defineProperty(e, Ve(r.key), r);
                  }
                })(h.prototype, d);
              }
              Object.defineProperty(h, "prototype", {
                writable: false
              });
              return h;
            }(d.o);
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
              function t(t, n, r) {
                var i;
                if (n === undefined) {
                  n = null;
                }
                if (r === undefined) {
                  r = null;
                }
                i = e.call(this) || this;
                var a = t;
                var o = new s.lk(E.ee.getFontName(a.font), a.fontSize, a.color, false, null, null, null, null, E.ee.getAlignment(a.align));
                i.textField = new s.A_();
                i.textField.usePrompt = true;
                i.textField.defaultTextFormat = o;
                i.textField.type = s.ux.DYNAMIC;
                i.textField.multiline = true;
                i.textField.autoSize = s.wL.LEFT;
                i.textField.wordWrap = false;
                i.textField.selectable = false;
                i.textField.antiAliasType = s.BF.ADVANCED;
                i.textField.text = a.caption;
                i.textField.x = a.x;
                i.textField.y = a.y;
                i.textField.rotation = a.rotation;
                if (c.w.currentSession.levelVersion > 1.68) {
                  i.textField.alpha = a.opacity * 0.01;
                  i.textField.visible = i.textField.alpha != 0;
                }
                c.w.currentSession.level.background.addChild(i.textField);
                i.textField.pixiSprite.name = "TEXT";
                i.textField.setCustomOffset(2, 1);
                return i;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              Xe(n, r);
              var i;
              var a;
              var o = t.prototype;
              o.prepareForTrigger = function () {
                if (c.w.currentSession.levelVersion < 1.69) {
                  this.textField.visible = false;
                }
              };
              o.triggerSingleActivation = function (e, t, n) {
                this.textField.visible = true;
              };
              o.triggerRepeatActivation = function (e, t, n, r) {
                switch (t) {
                  case "change opacity":
                    var i = n[0];
                    var s = n[1];
                    i *= 0.01;
                    if (r == (s = Math.round(s * 30))) {
                      this.textField.visible = i != 0;
                      this.textField.alpha = i;
                      return true;
                    }
                    var a = this.textField.alpha;
                    var o = i - a;
                    this.textField.alpha = a + o / (s - r);
                    this.textField.visible = this.textField.alpha != 0;
                    break;
                  case "slide":
                    s = n[0];
                    var h = n[1];
                    var l = n[2];
                    if (r == (s = Math.round(s * 30))) {
                      this.textField.x = h;
                      this.textField.y = l;
                      return true;
                    }
                    var d = this.textField.x;
                    var c = this.textField.y;
                    var u = h - d;
                    var p = l - c;
                    this.textField.x = d + u / (s - r);
                    this.textField.y = c + p / (s - r);
                }
                return false;
              };
              i = t;
              if (a = [{
                key: "groupDisplayObject",
                get: function () {
                  return this.textField;
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
                })(i.prototype, a);
              }
              Object.defineProperty(i, "prototype", {
                writable: false
              });
              return i;
            }(d.o);
            var qe = n(93885);
            function Je(e) {
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
            function Ke(e, t) {
              Ke = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return Ke(e, t);
            }
            var Ze = function (e) {
              function t(t, n, i) {
                var s;
                if (n === undefined) {
                  n = null;
                }
                if (i === undefined) {
                  i = null;
                }
                (s = e.call(this) || this)._impulseMin = 12;
                s._breakBack = false;
                s._breakBase = false;
                s._inSingleActionArray = false;
                s.checkBackContact = function (e) {
                  if (e.impulse > s._impulseMin) {
                    s._breakBack = true;
                    c.w.currentSession.contactListener.deleteListener(l.jp.RESULT, s._backShape);
                    s.addToSingleActionArray();
                  }
                };
                s.checkBaseContact = function (e) {
                  if (e.impulse > s._impulseMin) {
                    s._breakBase = true;
                    c.w.currentSession.contactListener.deleteListener(l.jp.RESULT, s._bowlShape);
                    c.w.currentSession.contactListener.deleteListener(l.jp.RESULT, s._baseShape);
                    s.addToSingleActionArray();
                  }
                };
                s.checkAdd = function (e) {
                  if (!e.shape2.m_isSensor && !s._hitSound) {
                    var t = e.shape2.m_body.m_mass;
                    if (t == 0 || !(t < s._body.m_mass)) {
                      var n = o.x5.b2Dot(e.velocity, e.normal);
                      if ((n = Math.abs(n)) > 4) {
                        var i = Math.ceil(Math.random() * 2);
                        s._hitSound ||= r.m.instance.playAreaSoundInstance("ToiletHit" + i, s._body);
                        if (s._hitSound) {
                          s._hitSound.addEventListener(r.Gm.AREA_SOUND_STOP, s.hitSoundComplete, false, 0, true);
                        }
                      }
                    }
                  }
                };
                s.soundComplete = function (e) {
                  s._sound.removeEventListener(r.Gm.AREA_SOUND_STOP, s.soundComplete);
                  s._sound = null;
                };
                s.hitSoundComplete = function (e) {
                  s._hitSound.removeEventListener(r.Gm.AREA_SOUND_STOP, s.hitSoundComplete);
                  s._hitSound = null;
                };
                s.createBody(t);
                return s;
              }
              var n;
              var a;
              a = e;
              (n = t).prototype = Object.create(a.prototype);
              n.prototype.constructor = n;
              Ke(n, a);
              var h;
              var d;
              var p = t.prototype;
              p.createBody = function (e) {
                var t = c.w.currentSession.level;
                var n = t.background;
                var r = e;
                r = r.clone();
                this._sign = r.reverse ? -1 : 1;
                var a = new s.lU(1, 90, 16752029, 1, 5308416, 1, 0, 0);
                var h = new s.j7();
                h.setPixiMovieClip((0, u.zI)("Game", "WaterMC"), true);
                var l = new s.j7();
                l.setPixiMovieClip((0, u.zI)("Game", "ToiletParticlesMC"), true);
                var d = [a];
                c.w.currentSession.particleController.createBMDArray("water", h, d);
                c.w.currentSession.particleController.createBMDArray("toiletParticles", l);
                this._interactive = r.interactive;
                this.mc = new s.j7((0, u.zI)("Game", "ToiletMC"));
                this.mc.convertChildren(this.mc._pixiSprite);
                this.mc.container.gotoAndStop(1);
                this.mc.container.scaleX *= this._sign;
                n.addChild(this.mc);
                this.mc.x = e.x;
                this.mc.y = e.y;
                this.mc.rotation = e.rotation;
                if (this._interactive) {
                  var p = new o.RM(r.x, r.y);
                  var m = r.rotation;
                  var f = new o.gv();
                  var _ = new o.m2();
                  _.density = 2;
                  _.friction = 0.3;
                  _.filter.categoryBits = 8;
                  _.restitution = 0.1;
                  _.userData = qe.G.SHAPE;
                  _.SetAsOrientedBox(10 / this.m_physScale, 23.5 / this.m_physScale, new o.RM(this._sign * -21 / this.m_physScale, -16 / this.m_physScale), 0);
                  f.position.Set(p.x / this.m_physScale, p.y / this.m_physScale);
                  f.angle = m * Math.PI / 180;
                  f.isSleeping = r.sleeping;
                  var v = this._body = c.w.currentSession.m_world.CreateBody(f);
                  this._backShape = v.CreateShape(_);
                  _.density = 4;
                  _.SetAsOrientedBox(10.5 / this.m_physScale, 7.5 / this.m_physScale, new o.RM(this._sign * 3 / this.m_physScale, 31.5 / this.m_physScale), 0);
                  this._baseShape = v.CreateShape(_);
                  this._polyDef = _;
                  _.density = 2;
                  _ = this.addBowlShapeToPolyDef(_);
                  this._bowlShape = v.CreateShape(_);
                  v.SetMassFromShapes();
                  t.paintBodyVector.push(v);
                  v.SetUserData(this.mc);
                  v.SetMassFromShapes();
                  var y = v.GetLocalCenter();
                  this.mc.container.x = -y.x * this.m_physScale;
                  this.mc.container.y = -y.y * this.m_physScale;
                  c.w.currentSession.contactListener.registerListener(i.fI.RESULT, this._backShape, this.checkBackContact);
                  c.w.currentSession.contactListener.registerListener(i.fI.RESULT, this._bowlShape, this.checkBaseContact);
                  c.w.currentSession.contactListener.registerListener(i.fI.RESULT, this._baseShape, this.checkBaseContact);
                  c.w.currentSession.contactListener.registerListener(i.fI.ADD, this._backShape, this.checkAdd);
                  c.w.currentSession.contactListener.registerListener(i.fI.ADD, this._bowlShape, this.checkAdd);
                  c.w.currentSession.contactListener.registerListener(i.fI.ADD, this._baseShape, this.checkAdd);
                }
              };
              p.addBowlShapeToPolyDef = function (e) {
                e.vertexCount = 5;
                e.vertices[0] = new o.RM(this._sign * -25 / this.m_physScale, 4.5 / this.m_physScale);
                if (this._breakBase) {
                  e.vertices[1] = new o.RM(this._sign * 2 / this.m_physScale, 4.5 / this.m_physScale);
                  e.vertices[2] = new o.RM(this._sign * 17 / this.m_physScale, 25 / this.m_physScale);
                } else {
                  e.vertices[1] = new o.RM(this._sign * 31 / this.m_physScale, 4.5 / this.m_physScale);
                  e.vertices[2] = new o.RM(this._sign * 25 / this.m_physScale, 20 / this.m_physScale);
                }
                e.vertices[3] = new o.RM(this._sign * 3.5 / this.m_physScale, 30.5 / this.m_physScale);
                e.vertices[4] = new o.RM(this._sign * -22 / this.m_physScale, 17 / this.m_physScale);
                if (this._sign == -1) {
                  var t = [];
                  t[0] = e.vertices[1];
                  t[1] = e.vertices[0];
                  t[3] = e.vertices[3];
                  t[2] = e.vertices[4];
                  t[4] = e.vertices[2];
                  e.vertices = t;
                }
                return e;
              };
              p.addToSingleActionArray = function () {
                if (!this._inSingleActionArray) {
                  this._inSingleActionArray = true;
                  c.w.currentSession.level.singleActionVector.push(this);
                }
              };
              p.singleAction = function () {
                this._inSingleActionArray = false;
                var e;
                var t = c.w.currentSession;
                var n = t.level;
                var r = t.m_world;
                var i = n.background;
                var a = this._body.GetWorldCenter();
                var h = this._body.GetLinearVelocity();
                var d = this._body.GetAngularVelocity();
                var p = this._body.GetAngle();
                var m = new o.gv();
                m.angle = p;
                m.position = a;
                if (this._breakBase && this._baseShape) {
                  this._body.DestroyShape(this._baseShape);
                  this._body.DestroyShape(this._bowlShape);
                  this._baseShape = null;
                  c.w.currentSession.contactListener.deleteListener(l.jp.ADD, this._baseShape);
                  (e = new s.j7((0, u.zI)("Game", "ToiletBasePiece1MC"))).scaleX *= this._sign;
                  i.addChild(e);
                  var f = r.CreateBody(m);
                  f.SetAngularVelocity(d);
                  f.SetLinearVelocity(h);
                  this._polyDef.SetAsOrientedBox(10.5 / this.m_physScale, 7.5 / this.m_physScale, new o.RM(this._sign * 3 / this.m_physScale, 31.5 / this.m_physScale), 0);
                  f.CreateShape(this._polyDef);
                  f.SetUserData(e);
                  n.paintBodyVector.push(f);
                  this._polyDef = this.addBowlShapeToPolyDef(this._polyDef);
                  f.CreateShape(this._polyDef);
                  f.SetMassFromShapes();
                  f.SetAngularVelocity(d);
                  f.SetLinearVelocity(h);
                  var _ = i.getChildIndex(e);
                  var v = this._sign == 1 ? new o.RM(11 / this.m_physScale, 22 / this.m_physScale) : new o.RM(-1 / this.m_physScale, 13 / this.m_physScale);
                  var y = this._sign == 1 ? new o.RM(1 / this.m_physScale, 13 / this.m_physScale) : new o.RM(-11 / this.m_physScale, 22 / this.m_physScale);
                  c.w.currentSession.particleController.createRectBurst("toiletParticles", 20, f, 30);
                  t.particleController.createSpray("water", f, v, y, 0, 2, 15, 3, 95, i, _);
                  (e = new s.j7((0, u.zI)("Game", "ToiletBasePiece2MC"))).scaleX *= this._sign;
                  i.addChild(e);
                  (f = r.CreateBody(m)).SetUserData(e);
                  n.paintBodyVector.push(f);
                  this._polyDef.vertexCount = 4;
                  var g = new o.RM(this._sign * 8 / this.m_physScale, 4.5 / this.m_physScale);
                  var w = new o.RM(this._sign * 31 / this.m_physScale, 4.5 / this.m_physScale);
                  var x = new o.RM(this._sign * 25 / this.m_physScale, 20 / this.m_physScale);
                  var b = new o.RM(this._sign * 17 / this.m_physScale, 25 / this.m_physScale);
                  if (this._sign == 1) {
                    this._polyDef.vertices[0] = g;
                    this._polyDef.vertices[1] = w;
                    this._polyDef.vertices[2] = x;
                    this._polyDef.vertices[3] = b;
                  } else {
                    this._polyDef.vertices[0] = w;
                    this._polyDef.vertices[1] = g;
                    this._polyDef.vertices[2] = b;
                    this._polyDef.vertices[3] = x;
                  }
                  f.CreateShape(this._polyDef);
                  f.SetMassFromShapes();
                  f.SetAngularVelocity(d);
                  f.SetLinearVelocity(h);
                  this.mc.container.base.visible = false;
                  this.playSound(f);
                }
                if (this._breakBack && this._backShape) {
                  this._body.DestroyShape(this._backShape);
                  this._backShape = null;
                  c.w.currentSession.contactListener.deleteListener(l.jp.ADD, this._backShape);
                  this._polyDef.SetAsOrientedBox(10 / this.m_physScale, 12.5 / this.m_physScale, new o.RM(this._sign * -14 / this.m_physScale, -31 / this.m_physScale), 0);
                  (e = new s.j7((0, u.zI)("Game", "ToiletBackPiece1MC"))).scaleX *= this._sign;
                  i.addChild(e);
                  var T = r.CreateBody(m);
                  T.CreateShape(this._polyDef);
                  T.SetMassFromShapes();
                  T.SetAngularVelocity(d);
                  T.SetLinearVelocity(h);
                  T.SetUserData(e);
                  n.paintBodyVector.push(T);
                  this._polyDef.SetAsOrientedBox(10 / this.m_physScale, 11 / this.m_physScale, new o.RM(this._sign * -14 / this.m_physScale, -7 / this.m_physScale), 0);
                  (e = new s.j7((0, u.zI)("Game", "ToiletBackPiece2MC"))).scaleX *= this._sign;
                  i.addChild(e);
                  (T = r.CreateBody(m)).CreateShape(this._polyDef);
                  T.SetUserData(e);
                  n.paintBodyVector.push(T);
                  T.SetMassFromShapes();
                  T.SetAngularVelocity(d);
                  T.SetLinearVelocity(h);
                  this.mc.container.back.visible = false;
                  var A = i.getChildIndex(e);
                  var C = this._sign == 1 ? new o.RM(-7 / this.m_physScale, -14 / this.m_physScale) : new o.RM(23 / this.m_physScale, -13 / this.m_physScale);
                  var S = this._sign == 1 ? new o.RM(-23 / this.m_physScale, -13 / this.m_physScale) : new o.RM(7 / this.m_physScale, -14 / this.m_physScale);
                  t.particleController.createRectBurst("toiletParticles", 20, T, 30);
                  t.particleController.createSpray("water", T, C, S, 0, 1, 15, 3, 80, i, A);
                  this.playSound(T);
                }
                if (this._breakBase && this._breakBack) {
                  c.w.currentSession.contactListener.deleteListener(l.jp.ADD, this._bowlShape);
                  r.DestroyBody(this._body);
                  i.removeChild(this.mc);
                  return;
                }
                this._body.SetMassFromShapes();
                var E = this._body.GetLocalCenter();
                this.mc.container.x = -E.x * this.m_physScale;
                this.mc.container.y = -E.y * this.m_physScale;
              };
              p.playSound = function (e) {
                var t = Math.ceil(Math.random() * 3);
                this._sound ||= r.m.instance.playAreaSoundInstance("ToiletSmash" + t, e);
                if (this._sound) {
                  this._sound.addEventListener(r.Gm.AREA_SOUND_STOP, this.soundComplete, false, 0, true);
                }
              };
              p.getJointBody = function (e = null) {
                return this._body;
              };
              p.triggerSingleActivation = function (e, t, n) {
                if (t == "wake from sleep") {
                  if (this._body) {
                    this._body.WakeUp();
                  }
                } else if (t == "apply impulse" && this._body) {
                  var r = n[0];
                  var i = n[1];
                  var s = this._body.GetMass();
                  this._body.ApplyImpulse(new o.RM(r * s, i * s), this._body.GetWorldCenter());
                  var a = n[2];
                  var h = this._body.GetAngularVelocity();
                  this._body.SetAngularVelocity(h + a);
                }
              };
              h = t;
              if (d = [{
                key: "groupDisplayObject",
                get: function () {
                  return this.mc;
                }
              }, {
                key: "bodyList",
                get: function () {
                  if (this._body) {
                    return [this._body];
                  } else {
                    return [];
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
                    Object.defineProperty(e, Je(r.key), r);
                  }
                })(h.prototype, d);
              }
              Object.defineProperty(h, "prototype", {
                writable: false
              });
              return h;
            }(d.o);
            var $e = n(44386);
            var Qe = n(96871);
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
              function t(t, n, i) {
                var s;
                if (n === undefined) {
                  n = null;
                }
                if (i === undefined) {
                  i = null;
                }
                (s = e.call(this) || this)._crush = false;
                s._containsTrash = true;
                s._trashSpilled = false;
                s._spillImpulse = 3.5;
                s._crushImpulse = 12;
                s.checkContact = function (e) {
                  if (e.impulse > s._spillImpulse) {
                    if (e.impulse > s._crushImpulse) {
                      s._crush = true;
                    }
                    s._spillImpulse = s._crushImpulse;
                    if (s._contact) {
                      if (s._contact.impulse < e.impulse) {
                        s._contact = e;
                      }
                    } else {
                      s._contact = e;
                    }
                    c.w.currentSession.contactListener.deleteListener(l.jp.RESULT, s._shape);
                    c.w.currentSession.level.singleActionVector.push(s);
                  }
                };
                s.checkAdd = function (e) {
                  if (!e.shape2.m_isSensor && !s._trashSound) {
                    var t = e.shape2.m_body.m_mass;
                    if (t == 0 || !(t < s._body.m_mass)) {
                      var n = o.x5.b2Dot(e.velocity, e.normal);
                      if ((n = Math.abs(n)) > 4) {
                        var i = Math.ceil(Math.random() * 2);
                        s._trashSound = r.m.instance.playAreaSoundInstance("TrashCanHit" + i, s._body);
                        if (s._trashSound) {
                          s._trashSound.addEventListener(r.Gm.AREA_SOUND_STOP, s.soundComplete, false, 0, true);
                        }
                      }
                    }
                  }
                };
                s.soundComplete = function (e) {
                  s._trashSound.removeEventListener(r.Gm.AREA_SOUND_STOP, s.soundComplete);
                  s._trashSound = null;
                };
                s.createBody(t);
                return s;
              }
              var n;
              var a;
              a = e;
              (n = t).prototype = Object.create(a.prototype);
              n.prototype.constructor = n;
              tt(n, a);
              var h;
              var d;
              var p = t.prototype;
              p.createBody = function (e) {
                var t = c.w.currentSession.level;
                var n = e;
                n = n.clone();
                this.mc = new s.j7();
                this.mc.setPixiMovieClip((0, u.zI)("Game", "TrashCanMC"), true);
                this.mc.x = e.x;
                this.mc.y = e.y;
                this.mc.rotation = e.rotation;
                this.mc.gotoAndStop(1);
                this.mc.lid.visible = n.containsTrash;
                this._interactive = n.interactive;
                if (this._interactive) {
                  t.foreground.addChildAt(this.mc, 0);
                } else {
                  t.background.addChild(this.mc);
                }
                this.mc.shapes.gotoAndStop(4);
                this.mc.shapes.visible = false;
                if (this._interactive) {
                  var r = new o.RM(n.x / this.m_physScale, n.y / this.m_physScale);
                  var a = n.rotation;
                  var h = new o.gv();
                  var d = new o.m2();
                  var p = new o._A();
                  d.density = 0.75;
                  d.friction = 0.3;
                  d.filter.categoryBits = 8;
                  d.restitution = 0.1;
                  p.density = 0.75;
                  p.friction = 0.3;
                  p.filter.categoryBits = 8;
                  p.restitution = 0.1;
                  h.position.Set(r.x, r.y);
                  h.angle = a * Math.PI / 180;
                  h.isSleeping = n.sleeping;
                  var m = this._body = c.w.currentSession.m_world.CreateBody(h);
                  var f = this.mc.shapes.block;
                  d.SetAsBox(f.width / 2 / this.m_physScale, f.height / 2 / this.m_physScale);
                  this._shape = this._body.CreateShape(d);
                  this._body.SetMassFromShapes();
                  if (!n.containsTrash) {
                    this._containsTrash = false;
                    c.w.currentSession.m_world.DestroyBody(this._body);
                    this.createHollowTrashCan();
                    this._spillImpulse = this._crushImpulse;
                    c.w.currentSession.contactListener.registerListener(l.jp.RESULT, this._shape, this.checkContact);
                    c.w.currentSession.contactListener.registerListener(l.jp.RESULT, this._leftShape, this.checkContact);
                    c.w.currentSession.contactListener.registerListener(l.jp.RESULT, this._rightShape, this.checkContact);
                    return;
                  }
                  t.paintBodyVector.push(m);
                  m.SetUserData(this.mc);
                  c.w.currentSession.contactListener.registerListener(i.fI.RESULT, this._shape, this.checkContact);
                  c.w.currentSession.contactListener.registerListener(i.fI.ADD, this._shape, this.checkAdd);
                }
              };
              p.createHollowTrashCan = function () {
                var e = new o.m2();
                var t = new o.m2();
                var n = new o.gv();
                var r = c.w.currentSession.m_world;
                var s = c.w.currentSession.level;
                var a = this._body.GetPosition();
                var h = this._body.GetAngle();
                var l = this._body.GetLinearVelocity();
                var d = this._body.GetAngularVelocity();
                n.position.Set(a.x, a.y);
                n.angle = h;
                e.density = 0.75;
                e.friction = 0.3;
                e.filter.categoryBits = 8;
                e.restitution = 0.1;
                e.vertexCount = 3;
                t.density = 0.75;
                t.friction = 0.3;
                t.filter.categoryBits = 8;
                t.restitution = 0.1;
                var u = this._body = r.CreateBody(n);
                this._body.SetAngularVelocity(d);
                this._body.SetLinearVelocity(l);
                var p = this.mc.shapes.s1;
                t.SetAsOrientedBox(p.width / 2 / this.m_physScale, p.height / 2 / this.m_physScale, new o.RM(p.x / this.m_physScale, p.y / this.m_physScale));
                this._shape = u.CreateShape(t);
                for (var m = 0; m < 3; m++) {
                  if (m == 0 || m == 2) {
                    for (var f = 0; f < 3; f++) {
                      var _ = this.mc.shapes["p" + m + "_" + f];
                      e.vertices[f] = new o.RM(_.x / this.m_physScale, _.y / this.m_physScale);
                    }
                    if (m == 0) {
                      this._leftShape = u.CreateShape(e);
                    }
                    if (m == 2) {
                      this._rightShape = u.CreateShape(e);
                    }
                  }
                }
                u.SetMassFromShapes();
                s.paintBodyVector.push(u);
                u.SetUserData(this.mc);
                this.mc.can.y -= 13;
                c.w.currentSession.contactListener.registerListener(i.fI.ADD, this._shape, this.checkAdd);
                c.w.currentSession.contactListener.registerListener(i.fI.ADD, this._leftShape, this.checkAdd);
                c.w.currentSession.contactListener.registerListener(i.fI.ADD, this._rightShape, this.checkAdd);
              };
              p.singleAction = function () {
                var e;
                var t;
                var n = c.w.currentSession.level;
                var a = n.background;
                var h = c.w.currentSession.m_world;
                var d = this._body.GetPosition();
                var p = this._body.GetAngle();
                var m = this._body.GetLinearVelocity();
                var f = this._body.GetAngularVelocity();
                var _ = new o.gv();
                var v = new o.m2();
                var y = new o._A();
                v.density = 0.75;
                v.friction = 0.3;
                v.filter.categoryBits = 8;
                v.restitution = 0.1;
                y.density = 0.75;
                y.friction = 0.3;
                y.filter.categoryBits = 8;
                y.restitution = 0.1;
                _.position.Set(d.x, d.y);
                _.angle = p;
                h.DestroyBody(this._body);
                c.w.currentSession.contactListener.deleteListener(i.fI.ADD, this._shape);
                this.mc.lid.visible = false;
                if (this._crush) {
                  c.w.currentSession.contactListener.deleteListener(l.jp.RESULT, this._shape);
                  c.w.currentSession.contactListener.deleteListener(l.jp.RESULT, this._leftShape);
                  c.w.currentSession.contactListener.deleteListener(l.jp.RESULT, this._rightShape);
                  c.w.currentSession.contactListener.deleteListener(i.fI.ADD, this._leftShape);
                  c.w.currentSession.contactListener.deleteListener(i.fI.ADD, this._rightShape);
                  c.w.currentSession.contactListener.deleteListener(i.fI.ADD, this._shape);
                  var g;
                  var w = this._contact.normal;
                  var x = Math.atan2(w.y, w.x) - this._body.GetAngle();
                  if (Math.abs(Math.round(Math.sin(x))) != 1) {
                    g = 2;
                    e = this.mc.shapes.crushH;
                  } else {
                    g = 3;
                    e = this.mc.shapes.crushV;
                  }
                  this._body = h.CreateBody(_);
                  this._body.SetAngularVelocity(f);
                  this._body.SetLinearVelocity(m);
                  this.mc.gotoAndStop(g);
                  n.background.addChild(this.mc);
                  v.SetAsBox(e.width / 2 / this.m_physScale, e.height / 2 / this.m_physScale);
                  this._shape = this._body.CreateShape(v);
                  this._body.SetUserData(this.mc);
                  this._body.SetMassFromShapes();
                  n.paintBodyVector.push(this._body);
                  c.w.currentSession.contactListener.registerListener(i.fI.ADD, this._shape, this.checkAdd);
                } else {
                  this.createHollowTrashCan();
                  c.w.currentSession.contactListener.registerListener(l.jp.RESULT, this._shape, this.checkContact);
                  c.w.currentSession.contactListener.registerListener(l.jp.RESULT, this._leftShape, this.checkContact);
                  c.w.currentSession.contactListener.registerListener(l.jp.RESULT, this._rightShape, this.checkContact);
                }
                if (!this._trashSpilled && this._containsTrash) {
                  var b;
                  var T;
                  this._trashSpilled = true;
                  for (var A = 0; A < 3; A++) {
                    (e = this.mc.shapes["c" + A]).loop = false;
                    var C = (0, u.zI)("Game", "CircleTrashItem" + A);
                    if (C instanceof Qe.j7) {
                      (b = new s.j7()).setPixiMovieClip(C);
                    } else {
                      b = new s.j7(C);
                    }
                    b.gotoAndStop(Math.ceil(Math.random() * b.totalFrames));
                    b.loop = false;
                    a.addChild(b);
                    T = this._body.GetWorldPoint(new o.RM(e.x / this.m_physScale, e.y / this.m_physScale));
                    _.position.Set(T.x, T.y);
                    _.angle = this._body.GetAngle() + e.rotation * Math.PI / 180;
                    t = c.w.currentSession.m_world.CreateBody(_);
                    y.radius = e.width / 2 / this.m_physScale;
                    t.CreateShape(y);
                    t.SetMassFromShapes();
                    n.paintBodyVector.push(t);
                    t.SetUserData(b);
                    t.SetAngularVelocity(f);
                    t.SetLinearVelocity(m);
                  }
                  for (A = 0; A < 7; A++) {
                    (e = this.mc.shapes["r" + A]).loop = false;
                    e.gotoAndStop(Math.ceil(Math.random() * e.totalFrames));
                    var S = (0, u.zI)("Game", "RectTrashItem" + A);
                    if (S instanceof Qe.j7) {
                      (b = new s.j7()).setPixiMovieClip(S);
                    } else {
                      b = new s.j7(S);
                    }
                    b.gotoAndStop(Math.ceil(Math.random() * b.totalFrames));
                    b.enabled = false;
                    b.loop = false;
                    a.addChild(b);
                    T = this._body.GetWorldPoint(new o.RM(e.x / this.m_physScale, e.y / this.m_physScale));
                    _.position.Set(T.x, T.y);
                    _.angle = this._body.GetAngle() + e.rotation * Math.PI / 180;
                    t = c.w.currentSession.m_world.CreateBody(_);
                    v.SetAsBox(e.width / 2 / this.m_physScale, e.height / 2 / this.m_physScale);
                    t.CreateShape(v);
                    t.SetMassFromShapes();
                    n.paintBodyVector.push(t);
                    t.SetUserData(b);
                    t.SetAngularVelocity(f);
                    t.SetLinearVelocity(m);
                  }
                  if (!this._crush) {
                    e = this.mc.shapes.blocker;
                    v.density = 0;
                    v.friction = 0;
                    v.filter.categoryBits = 2;
                    v.filter.maskBits = 2;
                    v.SetAsBox(e.width / 2 / this.m_physScale, e.height / 2 / this.m_physScale);
                    this._body.CreateShape(v);
                  }
                }
                var E = Math.ceil(Math.random() * 2);
                r.m.instance.playAreaSoundInstance("TrashCanSpill" + E, this._body);
              };
              p.getJointBody = function (e = null) {
                return this._body;
              };
              p.triggerSingleActivation = function (e, t, n) {
                if (t == "wake from sleep") {
                  if (this._body) {
                    this._body.WakeUp();
                  }
                } else if (t == "apply impulse" && this._body) {
                  var r = n[0];
                  var i = n[1];
                  var s = this._body.GetMass();
                  this._body.ApplyImpulse(new o.RM(r * s, i * s), this._body.GetWorldCenter());
                  var a = n[2];
                  var h = this._body.GetAngularVelocity();
                  this._body.SetAngularVelocity(h + a);
                }
              };
              h = t;
              if (d = [{
                key: "groupDisplayObject",
                get: function () {
                  return this.mc;
                }
              }, {
                key: "bodyList",
                get: function () {
                  if (this._body) {
                    return [this._body];
                  } else {
                    return [];
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
                })(h.prototype, d);
              }
              Object.defineProperty(h, "prototype", {
                writable: false
              });
              return h;
            }(d.o);
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
              function t(t, n, i) {
                var s;
                if (n === undefined) {
                  n = null;
                }
                if (i === undefined) {
                  i = null;
                }
                (s = e.call(this) || this)._crackImpulse = 7;
                s._shatterImpulse = 20;
                s._break = false;
                s.checkContact = function (e) {
                  if (e.impulse > s._crackImpulse) {
                    if (e.impulse > s._shatterImpulse) {
                      s._break = true;
                    }
                    s._crackImpulse = s._shatterImpulse;
                    c.w.currentSession.contactListener.deleteListener(l.jp.RESULT, s._shape);
                    c.w.currentSession.level.singleActionVector.push(s);
                  }
                };
                s.checkAdd = function (e) {
                  if (!e.shape2.m_isSensor) {
                    var t = e.shape2.m_body.m_mass;
                    if (t == 0 || !(t < s._body.m_mass)) {
                      var n = o.x5.b2Dot(e.velocity, e.normal);
                      if ((n = Math.abs(n)) > 4) {
                        r.m.instance.playAreaSoundInstance("TVHit", s._body);
                      }
                    }
                  }
                };
                s.createBody(t);
                return s;
              }
              var n;
              var a;
              a = e;
              (n = t).prototype = Object.create(a.prototype);
              n.prototype.constructor = n;
              it(n, a);
              var h;
              var d;
              var p = t.prototype;
              p.createBody = function (e) {
                var t = c.w.currentSession.level;
                var n = t.background;
                var r = e;
                r = r.clone();
                var a = new s.j7();
                a.setPixiMovieClip((0, u.zI)("Game", "TVShardsMC"));
                c.w.currentSession.particleController.createBMDArray("tvShards", a);
                this._interactive = r.interactive;
                this.mc = new s.j7();
                this.mc.setPixiMovieClip((0, u.zI)("Game", "tv"));
                this.mc.gotoAndStop(1);
                n.addChild(this.mc);
                this.mc.x = e.x;
                this.mc.y = e.y;
                this.mc.rotation = e.rotation;
                if (this._interactive) {
                  var h = new o.RM(r.x, r.y);
                  var l = r.rotation;
                  var d = new o.gv();
                  var p = new o.m2();
                  p.density = 2;
                  p.friction = 0.3;
                  p.filter.categoryBits = 8;
                  p.restitution = 0.1;
                  p.SetAsBox(27.5 / this.m_physScale, 20 / this.m_physScale);
                  d.position.Set(h.x / this.m_physScale, h.y / this.m_physScale);
                  d.angle = l * Math.PI / 180;
                  d.isSleeping = r.sleeping;
                  var m = this._body = c.w.currentSession.m_world.CreateBody(d);
                  this._shape = m.CreateShape(p);
                  m.SetMassFromShapes();
                  t.paintBodyVector.push(m);
                  m.SetUserData(this.mc);
                  c.w.currentSession.contactListener.registerListener(i.fI.RESULT, this._shape, this.checkContact);
                  c.w.currentSession.contactListener.registerListener(i.fI.ADD, this._shape, this.checkAdd);
                }
              };
              p.singleAction = function () {
                if (!this._break) {
                  var e = Math.ceil(Math.random() * 2);
                  c.w.currentSession.contactListener.registerListener(i.fI.RESULT, this._shape, this.checkContact);
                  r.m.instance.playAreaSoundInstance("GlassLight" + e, this._body);
                  c.w.currentSession.particleController.createRectBurst("tvShards", 10, this._body, 30);
                  e = 1 + Math.ceil(Math.random() * 4);
                  this.mc.gotoAndStop(e);
                  this._break = true;
                  return;
                }
                c.w.currentSession.contactListener.deleteListener(i.fI.ADD, this._shape);
                this.shatter();
              };
              p.getJointBody = function (e = null) {
                return this._body;
              };
              p.shatter = function () {
                var e = c.w.currentSession;
                var t = e.level;
                var n = e.m_world;
                c.w.currentSession.particleController.createRectBurst("tvShards", 10, this._body, 60);
                var i = Math.ceil(Math.random() * 2);
                r.m.instance.playAreaSoundInstance("TVSmash" + i, this._body);
                t.removeFromPaintBodyVector(this._body);
                var a = this._body.GetWorldCenter();
                var h = this._body.GetAngularVelocity();
                n.DestroyBody(this._body);
                var l = this._body.GetAngle();
                var d = t.background.getChildIndex(this.mc);
                var p = new s.j7((0, u.zI)("Game", "TVPiece1MC"));
                var m = new s.j7((0, u.zI)("Game", "TVPiece2MC"));
                var f = new s.j7((0, u.zI)("Game", "TVPiece3MC"));
                t.background.addChildAt(p, d);
                t.background.addChildAt(m, d);
                t.background.addChildAt(f, d);
                var _ = new o.gv();
                _.angle = l;
                _.position = a;
                var v = new o.m2();
                v.density = 2;
                v.friction = 0.3;
                v.restitution = 0.1;
                v.filter.categoryBits = 8;
                v.vertexCount = 3;
                v.vertices[2] = new o.RM(-26 / this.m_physScale, 20 / this.m_physScale);
                v.vertices[1] = new o.RM(0, 20 / this.m_physScale);
                v.vertices[0] = new o.RM(-26 / this.m_physScale, -18 / this.m_physScale);
                var y = n.CreateBody(_);
                y.CreateShape(v);
                y.SetMassFromShapes();
                var g = y.GetLocalCenter();
                y.SetAngularVelocity(h);
                y.SetLinearVelocity(this._body.GetLinearVelocityFromLocalPoint(g));
                y.SetUserData(p);
                t.paintBodyVector.push(y);
                v.vertices[2] = new o.RM(-2 / this.m_physScale, 20 / this.m_physScale);
                v.vertices[1] = new o.RM(25 / this.m_physScale, 20 / this.m_physScale);
                v.vertices[0] = new o.RM(26 / this.m_physScale, -15 / this.m_physScale);
                (y = n.CreateBody(_)).CreateShape(v);
                y.SetMassFromShapes();
                g = y.GetLocalCenter();
                y.SetAngularVelocity(h);
                y.SetLinearVelocity(this._body.GetLinearVelocityFromLocalPoint(g));
                y.SetUserData(m);
                t.paintBodyVector.push(y);
                v.vertices[2] = new o.RM(-1 / this.m_physScale, 4 / this.m_physScale);
                v.vertices[1] = new o.RM(25 / this.m_physScale, -18 / this.m_physScale);
                v.vertices[0] = new o.RM(-24 / this.m_physScale, -18 / this.m_physScale);
                (y = n.CreateBody(_)).CreateShape(v);
                y.SetMassFromShapes();
                g = y.GetLocalCenter();
                y.SetAngularVelocity(h);
                y.SetLinearVelocity(this._body.GetLinearVelocityFromLocalPoint(g));
                y.SetUserData(f);
                t.paintBodyVector.push(y);
                this.mc.parent.removeChild(this.mc);
                this._body = null;
              };
              p.triggerSingleActivation = function (e, t, n) {
                if (t == "wake from sleep") {
                  if (this._body) {
                    this._body.WakeUp();
                  }
                } else if (t == "apply impulse" && this._body) {
                  var r = n[0];
                  var i = n[1];
                  var s = this._body.GetMass();
                  this._body.ApplyImpulse(new o.RM(r * s, i * s), this._body.GetWorldCenter());
                  var a = n[2];
                  var h = this._body.GetAngularVelocity();
                  this._body.SetAngularVelocity(h + a);
                }
              };
              h = t;
              if (d = [{
                key: "groupDisplayObject",
                get: function () {
                  return this.mc;
                }
              }, {
                key: "bodyList",
                get: function () {
                  if (this._body) {
                    return [this._body];
                  } else {
                    return [];
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
                })(h.prototype, d);
              }
              Object.defineProperty(h, "prototype", {
                writable: false
              });
              return h;
            }(d.o);
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
            var ht = function (e) {
              function t(t, n, s) {
                var a;
                if (n === undefined) {
                  n = null;
                }
                if (s === undefined) {
                  s = null;
                }
                (a = e.call(this) || this).checkContact = function (e) {
                  if (e.impulse > 150) {
                    c.w.currentSession.contactListener.deleteListener(l.jp.RESULT, a.vanShape);
                    c.w.currentSession.contactListener.deleteListener(l.jp.ADD, a.vanShape);
                    c.w.currentSession.level.actionsVector.push(a);
                  }
                };
                a.vanAddContact = function (e) {
                  if (!e.shape2.m_isSensor) {
                    var t = e.shape2.m_body.m_mass;
                    if (t == 0 || !(t < a.vanBody.m_mass)) {
                      var n = o.x5.b2Dot(e.velocity, e.normal);
                      if ((n = Math.abs(n)) > 4) {
                        r.m.instance.playAreaSoundInstance("VanHit", a.vanBody);
                      }
                    }
                  }
                };
                a.tireAddContact = function (e) {
                  if (!e.shape2.m_isSensor) {
                    var t = e.shape2.m_body.m_mass;
                    var n = e.shape1.m_body;
                    if (t == 0 || !(t < n.m_mass)) {
                      var i = o.x5.b2Dot(e.velocity, e.normal);
                      if ((i = Math.abs(i)) > 4) {
                        r.m.instance.playAreaSoundInstance("CarTire1", n);
                      }
                    }
                  }
                };
                var h = t;
                a.createMovieClips(h);
                if (h.interactive) {
                  a.createBody(new o.RM(h.x, h.y), h.rotation * Math.PI / 180, h.sleeping);
                  a.createJoints();
                  var d = c.w.currentSession.contactListener;
                  d.registerListener(i.fI.RESULT, a.vanShape, a.checkContact);
                  d.registerListener(i.fI.ADD, a.vanShape, a.vanAddContact);
                  d.registerListener(i.fI.ADD, a.lTireShape, a.tireAddContact);
                  d.registerListener(i.fI.ADD, a.rTireShape, a.tireAddContact);
                }
                return a;
              }
              var n;
              var a;
              a = e;
              (n = t).prototype = Object.create(a.prototype);
              n.prototype.constructor = n;
              ot(n, a);
              var h;
              var d;
              var p = t.prototype;
              p.createBody = function (e, t, n = false) {
                var r = new o.gv();
                r.position.Set(e.x / this.m_physScale, e.y / this.m_physScale);
                r.angle = t;
                r.isSleeping = n;
                var i = c.w.currentSession.m_world;
                this.vanBody = i.CreateBody(r);
                var s = new o.m2();
                s.density = 10;
                s.friction = 0.3;
                s.restitution = 0.1;
                s.filter.categoryBits = 8;
                s.SetAsBox(66 / this.m_physScale, 58 / this.m_physScale);
                this.vanShape = this.vanBody.CreateShape(s);
                this.vanBody.SetMassFromShapes();
                r.position = this.vanBody.GetWorldPoint(new o.RM(-58 / this.m_physScale, 48 / this.m_physScale));
                this.lTireBody = i.CreateBody(r);
                s.friction = 1;
                s.restitution = 0.3;
                s.SetAsBox(10 / this.m_physScale, 22.5 / this.m_physScale);
                this.lTireShape = this.lTireBody.CreateShape(s);
                this.lTireBody.SetMassFromShapes();
                r.position = this.vanBody.GetWorldPoint(new o.RM(58 / this.m_physScale, 48 / this.m_physScale));
                this.rTireBody = i.CreateBody(r);
                this.rTireShape = this.rTireBody.CreateShape(s);
                this.rTireBody.SetMassFromShapes();
                c.w.currentSession.level.paintItemVector.push(this);
              };
              p.createJoints = function () {
                var e = new o.Gq();
                var t = new o.RM();
                e.enableLimit = true;
                e.upperAngle = 0;
                e.lowerAngle = 0;
                t = this.lTireBody.GetWorldCenter();
                e.Initialize(this.vanBody, this.lTireBody, t);
                var n = c.w.currentSession.m_world;
                this.leftJoint = n.CreateJoint(e);
                t = this.rTireBody.GetWorldCenter();
                e.Initialize(this.vanBody, this.rTireBody, t);
                this.rightJoint = n.CreateJoint(e);
              };
              p.createMovieClips = function (e) {
                this.vanMC = new s.j7();
                this.vanMC.setPixiMovieClip((0, u.zI)("Game", "VanBodyMC"));
                this.vanMC.x = e.x;
                this.vanMC.y = e.y;
                this.vanMC.rotation = e.rotation;
                this.lTireMC = new s.j7((0, u.zI)("Game", "VanTireMC"));
                this.rTireMC = new s.j7((0, u.zI)("Game", "VanTireMC"));
                var t = c.w.currentSession.level.background;
                t.addChild(this.lTireMC);
                t.addChild(this.rTireMC);
                t.addChild(this.vanMC);
                if (!e.interactive) {
                  this.vanMC.addChildAt(this.lTireMC, 0);
                  this.vanMC.addChildAt(this.rTireMC, 0);
                  this.lTireMC.x = -58;
                  this.rTireMC.x = 58;
                  this.lTireMC.y = this.rTireMC.y = 48;
                }
              };
              p.paint = function () {
                var e = this.vanBody.GetInterpolatedWorldCenter();
                this.vanMC.x = e.x * this.m_physScale;
                this.vanMC.y = e.y * this.m_physScale;
                this.vanMC.rotation = this.vanBody.GetInterpolatedAngle() * t.oneEightyOverPI % 360;
                e = this.lTireBody.GetInterpolatedWorldCenter();
                this.lTireMC.x = e.x * this.m_physScale;
                this.lTireMC.y = e.y * this.m_physScale;
                this.lTireMC.rotation = this.lTireBody.GetInterpolatedAngle() * t.oneEightyOverPI % 360;
                e = this.rTireBody.GetInterpolatedWorldCenter();
                this.rTireMC.x = e.x * this.m_physScale;
                this.rTireMC.y = e.y * this.m_physScale;
                this.rTireMC.rotation = this.rTireBody.GetInterpolatedAngle() * t.oneEightyOverPI % 360;
              };
              p.actions = function () {
                c.w.currentSession.level.removeFromActionsVector(this);
                this.vanBody.DestroyShape(this.vanBody.m_shapeList);
                var e = new o.m2();
                e.density = 10;
                e.friction = 0.3;
                e.restitution = 0.1;
                e.filter.categoryBits = 8;
                e.SetAsBox(66 / this.m_physScale, 52.5 / this.m_physScale);
                this.vanBody.CreateShape(e);
                this.vanBody.SetMassFromShapes();
                this.vanMC.gotoAndStop(3);
                var t = c.w.currentSession.m_world;
                t.DestroyJoint(this.leftJoint);
                t.DestroyJoint(this.rightJoint);
                c.w.currentSession.particleController.createBurst("vanglass", 50, 30, this.vanBody, 20, -1);
                r.m.instance.playAreaSoundInstance("VanSmash", this.vanBody);
              };
              p.getJointBody = function (e = null) {
                var t;
                var n = 10000000;
                for (var r = [this.vanBody, this.lTireBody, this.rTireBody], i = 0; i < r.length; i++) {
                  var s = r[i];
                  var a = s.GetWorldCenter();
                  var h = new o.RM(e.x - a.x, e.y - a.y);
                  var l = h.x * h.x + h.y * h.y;
                  if (l < n) {
                    n = l;
                    t = s;
                  }
                }
                return t;
              };
              p.triggerSingleActivation = function (e, t, n) {
                if (t == "wake from sleep") {
                  if (this.vanBody) {
                    this.vanBody.WakeUp();
                  }
                } else if (t == "apply impulse" && this.vanBody) {
                  var r = n[0];
                  var i = n[1];
                  var s = this.vanBody.GetMass();
                  this.vanBody.ApplyImpulse(new o.RM(r * s, i * s), this.vanBody.GetWorldCenter());
                  var a = n[2];
                  var h = this.vanBody.GetAngularVelocity();
                  this.vanBody.SetAngularVelocity(h + a);
                }
              };
              h = t;
              if (d = [{
                key: "groupDisplayObject",
                get: function () {
                  return this.vanMC;
                }
              }, {
                key: "bodyList",
                get: function () {
                  if (this.vanBody) {
                    return [this.vanBody];
                  } else {
                    return [];
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
                    Object.defineProperty(e, at(r.key), r);
                  }
                })(h.prototype, d);
              }
              Object.defineProperty(h, "prototype", {
                writable: false
              });
              return h;
            }(d.o);
            function lt(e, t) {
              lt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return lt(e, t);
            }
            var dt = function (e) {
              function t(t) {
                var n;
                (n = e.call(this) || this).speed = 1.75;
                n.checkAdd = function (e) {
                  if (!e.shape2.m_isSensor) {
                    var t = e.shape2.m_body.m_mass;
                    if (t == 0 || !(t < n.body.m_mass)) {
                      var i = o.x5.b2Dot(e.velocity, e.normal);
                      if ((i = Math.abs(i)) > 4) {
                        r.m.instance.playAreaSoundInstance("BallHit", n.body);
                      }
                    }
                  }
                };
                var i = t;
                n.createBody(new o.RM(i.x, i.y), i.ropeLength);
                n.createJoint(new o.RM(i.x, i.y));
                n.mc = new s.j7((0, u.zI)("Game", "WreckingBallMC"));
                n.mc.convertChildren(n.mc.pixiSprite);
                var a = c.w.currentSession.level;
                var h = a.background;
                h.addChild(n.mc);
                n.mc.x = i.x;
                n.mc.y = i.y;
                n.mc.rope.base.y = i.ropeLength - 136.5;
                n.mc.rope.stem.height = i.ropeLength - 120;
                n.ropeMC = n.mc.rope;
                h.addChildAt(n.ropeMC, h.getChildIndex(n.mc));
                n.ropeMC.x = i.x;
                n.ropeMC.y = i.y;
                n.ballMC = n.mc.ball;
                h.addChild(n.ballMC);
                a.paintItemVector.push(n);
                a.actionsVector.push(n);
                n.speed = n.speed * 1000 / i.ropeLength;
                return n;
              }
              var n;
              var a;
              a = e;
              (n = t).prototype = Object.create(a.prototype);
              n.prototype.constructor = n;
              lt(n, a);
              var h = t.prototype;
              h.createBody = function (e, t) {
                var n = new o.gv();
                n.position.Set((e.x + t) / this.m_physScale, e.y / this.m_physScale);
                n.angle = Math.PI * -90 / 180;
                this.body = c.w.currentSession.m_world.CreateBody(n);
                var r = new o.m2();
                r.density = 500;
                r.friction = 0.1;
                r.restitution = 0.1;
                r.filter.categoryBits = 8;
                var s = new o._A();
                s.density = 500;
                s.friction = 0.1;
                s.restitution = 0.1;
                s.filter.categoryBits = 8;
                r.SetAsOrientedBox(18 / this.m_physScale, 7.5 / this.m_physScale, new o.RM(0, -80 / this.m_physScale), 0);
                this.stemShape = this.body.CreateShape(r);
                s.radius = 75 / this.m_physScale;
                this.ballShape = this.body.CreateShape(s);
                this.body.SetMassFromShapes();
                c.w.currentSession.contactListener.registerListener(i.fI.ADD, this.ballShape, this.checkAdd);
                r.SetAsOrientedBox(18 / this.m_physScale, 16 / this.m_physScale, new o.RM(e.x / this.m_physScale, (e.y - 16) / this.m_physScale), 0);
                c.w.currentSession.level.levelBody.CreateShape(r);
              };
              h.createJoint = function (e) {
                var t = new o.Gq();
                t.Initialize(c.w.currentSession.level.levelBody, this.body, new o.RM(e.x / this.m_physScale, e.y / this.m_physScale));
                t.enableLimit = true;
                t.upperAngle = Math.PI + Math.PI * 0.25;
                t.lowerAngle = Math.PI * -0.25;
                t.enableMotor = false;
                t.maxMotorTorque = 10000000;
                this.joint = c.w.currentSession.m_world.CreateJoint(t);
              };
              h.paint = function () {
                var e = this.body.GetInterpolatedWorldCenter();
                this.ballMC.x = e.x * this.m_physScale;
                this.ballMC.y = e.y * this.m_physScale;
                this.ballMC.rotation = this.body.GetInterpolatedAngle() * t.oneEightyOverPI;
                this.ropeMC.rotation = this.ballMC.rotation;
              };
              h.actions = function () {
                if (this.joint.GetJointAngle() < 0.3) {
                  if (this.joint.IsMotorEnabled()) {
                    this.joint.EnableMotor(false);
                    if (this.speed < 0) {
                      this.speed *= -1;
                    }
                    this.joint.SetMotorSpeed(this.speed);
                  }
                } else if (this.joint.GetJointAngle() > 2.84) {
                  if (this.joint.IsMotorEnabled()) {
                    this.joint.EnableMotor(false);
                    if (this.speed > 0) {
                      this.speed *= -1;
                    }
                    this.joint.SetMotorSpeed(this.speed);
                  }
                } else if (!this.joint.IsMotorEnabled()) {
                  this.joint.EnableMotor(true);
                  this.joint.SetMotorSpeed(this.speed);
                  r.m.instance.playAreaSoundInstance("BallSwing", this.body);
                }
              };
              h.prepareForTrigger = function () {
                var e = c.w.currentSession.level.actionsVector;
                var t = e.indexOf(this);
                e.splice(t, 1);
                this.joint.m_upperAngle = 0;
                this.joint.m_lowerAngle = 0;
                this.body.PutToSleep();
                this.ballShape.m_isSensor = true;
                this.stemShape.m_isSensor = true;
                c.w.currentSession.m_world.Refilter(this.ballShape);
                c.w.currentSession.m_world.Refilter(this.stemShape);
              };
              h.triggerSingleActivation = function (e, t, n) {
                if (!this._triggered) {
                  this._triggered = true;
                  this.body.WakeUp();
                  this.joint.m_upperAngle = Math.PI + Math.PI * 0.25;
                  this.joint.m_lowerAngle = Math.PI * -0.25;
                  this.ballShape.m_isSensor = false;
                  this.stemShape.m_isSensor = false;
                  var r = c.w.currentSession;
                  r.m_world.Refilter(this.ballShape);
                  r.m_world.Refilter(this.stemShape);
                  r.level.actionsVector.push(this);
                }
              };
              return t;
            }(d.o);
          }
    });
})();
