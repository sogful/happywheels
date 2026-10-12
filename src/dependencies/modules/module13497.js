(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        13497(e, t, n) {
            "use strict";
        
            n.d(t, {
              Sl: () => o,
              WI: () => l,
              lM: () => p,
              Ky: () => f,
              SL: () => v,
              le: () => g,
              ob: () => x,
              bE: () => S,
              A9: () => O,
              oD: () => B,
              fe: () => F,
              XP: () => N.X,
              Kn: () => U,
              gs: () => z,
              Et: () => X,
              jd: () => J,
              wC: () => Z,
              c$: () => Q,
              cK: () => ee.c,
              bZ: () => ne,
              fD: () => ie,
              OM: () => ae,
              Er: () => le,
              Vm: () => ue,
              Xc: () => fe,
              jw: () => ve,
              u8: () => ge,
              CT: () => be,
              mA: () => Ce,
              kv: () => Ee,
              zN: () => ke,
              X8: () => Me
            });
            var r = n(23170);
            n(62010);
            var i = n(94384);
            var s = n(4971);
            function a(e, t) {
              a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return a(e, t);
            }
            var o = function (e) {
              function t(t, n, r) {
                var s;
                (s = e.call(this, t) || this)._canvas = n;
                s._childIndex = r;
                if (s._canvas instanceof i.g) {
                  var a = s._canvas;
                  s._group = a.refGroup;
                }
                return s;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              a(n, r);
              var s = t.prototype;
              s.undo = function () {
                this._canvas.removeRefSprite(this.refSprite);
                if (this._group) {
                  this.refSprite.inGroup = false;
                  this.refSprite.group = null;
                }
              };
              s.redo = function () {
                this._canvas.addRefSpriteAt(this.refSprite, this._childIndex);
                if (this._group) {
                  this.refSprite.inGroup = true;
                  this.refSprite.group = this._group;
                }
              };
              return t;
            }(r.r);
            function h(e, t) {
              h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return h(e, t);
            }
            n(54554);
            var l = function (e) {
              function t(t, n, r, i) {
                var s;
                (s = e.call(this, t) || this)._property = n;
                s._key = r;
                s._index = i;
                return s;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              h(n, r);
              var i = t.prototype;
              i.undo = function () {
                var e = this.refSprite.keyedPropertyObject[this._property].get(this._key);
                if (e.length > 1) {
                  e.splice(this._index, 1);
                  for (var t = 0; t < this.refSprite.triggerActionList.length; t++) {
                    var n = this.refSprite.triggerActionListProperties[t];
                    if (n) {
                      for (var r = 0; r < n.length; r++) {
                        var i = n[r];
                        var s = this.refSprite.keyedPropertyObject[i];
                        if (s) {
                          var a = s.get(this._key);
                          if (a) {
                            a.splice(this._index, 1);
                          }
                        }
                      }
                    }
                  }
                  this.refSprite.setAttributes();
                }
              };
              i.redo = function () {
                this.refSprite.keyedPropertyObject[this._property].get(this._key).push(this.refSprite.triggerActionList[0]);
                this.refSprite.setAttributes();
              };
              return t;
            }(r.r);
            var d = n(70725);
            var c = n(89346);
            function u(e, t) {
              u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return u(e, t);
            }
            var p = function (e) {
              function t(t, n, r) {
                var i;
                if (r === undefined) {
                  r = null;
                }
                (i = e.call(this, null) || this)._vertIndex = t;
                i._edgeShape = n;
                i._tool = r;
                return i;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              u(n, r);
              var i = t.prototype;
              i.undo = function () {
                this.setPosition();
                this._edgeShape.removeVert(this._vertIndex);
                if (this._tool) {
                  this._tool.remoteButtonPress();
                  if (this._edgeShape.numVerts == 0) {
                    this._tool.removeFrameHandler();
                    this._edgeShape.graphics.clear();
                  } else {
                    this._edgeShape.getVertAt(this._edgeShape.numVerts - 1).selected = true;
                  }
                } else {
                  var e = this._edgeShape.vertVector[0];
                  this._edgeShape.drawEditMode(e, this._edgeShape.completeFill);
                }
              };
              i.redo = function () {
                var e;
                (e = this._edgeShape instanceof d.Ps ? new c.tK(this.posX, this.posY, this.handle1X, this.handle1Y, this.handle2X, this.handle2Y) : new c._J(this.posX, this.posY)).edgeShape = this._edgeShape;
                this._edgeShape.addVert(e, this._vertIndex);
                if (this._tool) {
                  this._tool.remoteButtonPress();
                  if (this._edgeShape.numVerts == 1) {
                    this._tool.addFrameHandler();
                  } else {
                    (e = this._edgeShape.getVertAt(this._edgeShape.numVerts - 2)).selected = false;
                  }
                } else {
                  var t = this._edgeShape.vertVector[0];
                  this._edgeShape.drawEditMode(t, this._edgeShape.completeFill);
                }
              };
              i.setPosition = function () {
                var e = this._edgeShape.vertVector[this._vertIndex];
                this.posX = e.x;
                this.posY = e.y;
                if (this._edgeShape instanceof d.Ps) {
                  var t = this._edgeShape;
                  var n = this._vertIndex * 2;
                  var r = t.handleVector[n];
                  this.handle1X = r.x;
                  this.handle1Y = r.y;
                  r = t.handleVector[n + 1];
                  this.handle2X = r.x;
                  this.handle2Y = r.y;
                }
              };
              return t;
            }(r.r);
            function m(e, t) {
              m = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return m(e, t);
            }
            var f = function (e) {
              function t(t, n, r) {
                var i;
                (i = e.call(this, null) || this)._groupCanvas = t;
                i._canvasHolder = n;
                i._arrowTool = r;
                return i;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              m(n, r);
              var i = t.prototype;
              i.undo = function () {
                this._canvasHolder.addChild(this._groupCanvas);
                this._arrowTool.currentCanvas = this._groupCanvas;
              };
              i.redo = function () {
                this._canvasHolder.removeChild(this._groupCanvas);
                this._arrowTool.currentCanvas = this._arrowTool.canvas;
              };
              i.die = function () {
                e.prototype.die.call(this);
                this._arrowTool = null;
              };
              return t;
            }(r.r);
            function _(e, t) {
              _ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return _(e, t);
            }
            var v = function (e) {
              function t(t, n) {
                var r;
                (r = e.call(this, t) || this)._arrowTool = n;
                return r;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              _(n, r);
              var i = t.prototype;
              i.undo = function () {
                this._arrowTool.openVertEdit(this.refSprite, false);
              };
              i.redo = function () {
                this._arrowTool.closeVertEdit(null, false);
              };
              i.die = function () {
                e.prototype.die.call(this);
                this._arrowTool = null;
              };
              return t;
            }(r.r);
            function y(e, t) {
              y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return y(e, t);
            }
            var g = function (e) {
              function t(t, n, r) {
                var i;
                (i = e.call(this, null) || this)._edgeShape = t;
                i._newShape = n;
                i._tool = r;
                i._completeFill = i._edgeShape.completeFill;
                return i;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              y(n, r);
              var i = t.prototype;
              i.undo = function () {
                this._tool.remoteButtonPress();
                this._tool.setCurrentShape(this._edgeShape);
              };
              i.redo = function () {
                this._edgeShape.completeFill = this._completeFill;
                this._edgeShape.editMode = false;
                this._edgeShape.mouseEnabled = true;
                this._tool.removeFrameHandler();
                this._tool.setCurrentShape(this._newShape);
              };
              return t;
            }(r.r);
            function w(e, t) {
              w = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return w(e, t);
            }
            var x = function (e) {
              function t(t, n, r) {
                var s;
                (s = e.call(this, t) || this)._canvas = n;
                s._childIndex = r;
                if (s._canvas instanceof i.g) {
                  var a = s._canvas;
                  s._group = a.refGroup;
                }
                return s;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              w(n, r);
              var s = t.prototype;
              s.undo = function () {
                this._canvas.addRefSpriteAt(this.refSprite, this._childIndex);
                if (this._group) {
                  this.refSprite.inGroup = true;
                  this.refSprite.group = this._group;
                }
              };
              s.redo = function () {
                this._canvas.removeRefSprite(this.refSprite);
                if (this._group) {
                  this.refSprite.inGroup = false;
                  this.refSprite.group = null;
                }
              };
              return t;
            }(r.r);
            var b = n(94695);
            var T = n(19890);
            var A = n(6393);
            function C(e, t) {
              C = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return C(e, t);
            }
            var S = function (e) {
              function t(t, n, r) {
                var i;
                if (r === undefined) {
                  r = null;
                }
                (i = e.call(this, null) || this)._vertIndex = t;
                i._edgeShape = n;
                i._tool = r;
                i.setPosition();
                return i;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              C(n, r);
              var i = t.prototype;
              i.undo = function () {
                var e;
                (e = this._edgeShape instanceof b.P ? new T.t(this.posX, this.posY, this.handle1X, this.handle1Y, this.handle2X, this.handle2Y) : new A._(this.posX, this.posY)).edgeShape = this._edgeShape;
                this._edgeShape.addVert(e, this._vertIndex);
                if (this._tool) {
                  this._tool.remoteButtonPress();
                  if (this._edgeShape.numVerts == 1) {
                    this._tool.addFrameHandler();
                  } else {
                    (e = this._edgeShape.getVertAt(this._edgeShape.numVerts - 2)).selected = false;
                  }
                } else {
                  var t = this._edgeShape.vertVector[0];
                  this._edgeShape.drawEditMode(t, this._edgeShape.completeFill);
                }
              };
              i.redo = function () {
                this._edgeShape.removeVert(this._vertIndex);
                if (this._tool) {
                  this._tool.remoteButtonPress();
                  if (this._edgeShape.numVerts == 0) {
                    this._tool.removeFrameHandler();
                    this._edgeShape.graphics.clear();
                  } else {
                    this._edgeShape.getVertAt(this._edgeShape.numVerts - 1).selected = true;
                  }
                } else {
                  var e = this._edgeShape.vertVector[0];
                  this._edgeShape.drawEditMode(e, this._edgeShape.completeFill);
                }
              };
              i.setPosition = function () {
                var e = this._edgeShape.vertVector[this._vertIndex];
                this.posX = e.x;
                this.posY = e.y;
                if (this._edgeShape instanceof b.P) {
                  var t = this._edgeShape;
                  var n = this._vertIndex * 2;
                  var r = t.handleVector[n];
                  this.handle1X = r.x;
                  this.handle1Y = r.y;
                  r = t.handleVector[n + 1];
                  this.handle2X = r.x;
                  this.handle2Y = r.y;
                }
              };
              return t;
            }(r.r);
            function E(e, t) {
              E = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return E(e, t);
            }
            var O = function (e) {
              function t(t, n, r, i) {
                var s;
                (s = e.call(this, t) || this)._parent = n;
                s._newIndex = r;
                s._oldIndex = i;
                return s;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              E(n, r);
              var i = t.prototype;
              i.undo = function () {
                this._parent.addChildAt(this.refSprite, this._oldIndex);
              };
              i.redo = function () {
                this._parent.addChildAt(this.refSprite, this._newIndex);
              };
              return t;
            }(r.r);
            var k = n(17167);
            var P = n(43512);
            var M = n(88959);
            var R = n(12319);
            var I = n(47363);
            var L = n(10238);
            function j(e, t) {
              j = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return j(e, t);
            }
            var B = function (e) {
              function t(t, n, r, i) {
                var s;
                (s = e.call(this, t, false) || this)._selectionArray = n;
                s._index = r;
                s._arrowTool = i;
                return s;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              j(n, r);
              var i = t.prototype;
              i.undo = function () {
                this._selectionArray.splice(this._index, 0, this.refSprite);
                this.refSprite.selected = true;
                if (this.refSprite instanceof k.HQ) {
                  this._arrowTool.numShapesSelected += 1;
                } else if (this.refSprite instanceof P._) {
                  this._arrowTool.numSpecialsSelected += 1;
                } else if (this.refSprite instanceof M.D) {
                  this._arrowTool.numGroupsSelected += 1;
                } else if (this.refSprite instanceof R.S) {
                  this._arrowTool.numJointsSelected += 1;
                } else if (this.refSprite instanceof I.Q) {
                  this._arrowTool.numTriggersSelected += 1;
                } else if (this.refSprite instanceof L.a) {
                  this._arrowTool.numCharSelected += 1;
                }
              };
              i.redo = function () {
                this._selectionArray.splice(this._index, 1);
                this.refSprite.selected = false;
                if (this.refSprite instanceof k.HQ) {
                  this._arrowTool.numShapesSelected -= 1;
                } else if (this.refSprite instanceof P._) {
                  this._arrowTool.numSpecialsSelected -= 1;
                } else if (this.refSprite instanceof M.D) {
                  this._arrowTool.numGroupsSelected -= 1;
                } else if (this.refSprite instanceof R.S) {
                  this._arrowTool.numJointsSelected -= 1;
                } else if (this.refSprite instanceof I.Q) {
                  this._arrowTool.numTriggersSelected -= 1;
                } else if (this.refSprite instanceof L.a) {
                  this._arrowTool.numCharSelected -= 1;
                }
              };
              return t;
            }(r.r);
            function D(e, t) {
              D = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return D(e, t);
            }
            var F = function (e) {
              function t(t, n, r, i) {
                var s;
                (s = e.call(this, null) || this)._vertIndex = t;
                s._edgeShape = n;
                s._selectionVector = r;
                s._selectionIndex = i;
                return s;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              D(n, r);
              var i = t.prototype;
              i.undo = function () {
                var e = this._edgeShape.getVertAt(this._vertIndex);
                this._selectionVector.splice(this._selectionIndex, 0, e);
                e.selected = true;
              };
              i.redo = function () {
                var e = this._edgeShape.getVertAt(this._vertIndex);
                this._selectionVector.splice(this._selectionIndex, 1);
                e.selected = false;
              };
              return t;
            }(r.r);
            var N = n(98576);
            function G(e, t) {
              G = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return G(e, t);
            }
            var U = function (e) {
              function t(t, n, r, i, s) {
                var a;
                (a = e.call(this, t) || this)._prevGroup = n;
                a._newGroup = r;
                a._groupParent = i;
                a._groupIndex = s;
                return a;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              G(n, r);
              var i = t.prototype;
              i.undo = function () {
                this._groupParent.removeChild(this.refSprite);
                this.refSprite.group = this._prevGroup;
                this.refSprite.userData.owner = null;
              };
              i.redo = function () {
                this._groupParent.addChildAt(this.refSprite, this._groupIndex);
                this.refSprite.group = this._newGroup;
                this.refSprite.userData.owner = this._groupParent.parent;
              };
              return t;
            }(r.r);
            function V(e) {
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
            function H(e, t) {
              H = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return H(e, t);
            }
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(26099);
            n(2892);
            var z = function (e) {
              function t(t, n, r, i, s, a) {
                var o;
                (o = e.call(this, t) || this)._property = n;
                o._startVal = r;
                o._endVal = i;
                o._key = s;
                o._index = a;
                return o;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              H(n, r);
              var i;
              var s;
              var a = t.prototype;
              a.undo = function () {
                this.refSprite.keyedPropertyObject[this._property][this._key][this._index] = this._startVal;
                this.refSprite.setAttributes();
              };
              a.redo = function () {
                this.refSprite.keyedPropertyObject[this._property][this._key][this._index] = this._endVal;
                this.refSprite.setAttributes();
              };
              a.setEndVal = function () {
                this._endVal = this.refSprite.keyedPropertyObject[this._property][this._key][this._index];
              };
              i = t;
              if (s = [{
                key: "endVal",
                set: function (e) {
                  this._endVal = e;
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
                    Object.defineProperty(e, V(r.key), r);
                  }
                })(i.prototype, s);
              }
              Object.defineProperty(i, "prototype", {
                writable: false
              });
              return i;
            }(r.r);
            function W(e, t) {
              W = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return W(e, t);
            }
            var X = function (e) {
              function t(t, n, r, i) {
                var a;
                if (r === undefined) {
                  r = null;
                }
                if (i === undefined) {
                  i = null;
                }
                (a = e.call(this, null) || this)._vertIndex = t;
                a._edgeShape = n;
                var o = a._edgeShape.getVertAt(a._vertIndex);
                a._startPoint1 = r || new s.bR(o.handle1.x, o.handle1.y);
                a._startPoint2 = i || new s.bR(o.handle2.x, o.handle2.y);
                return a;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              W(n, r);
              var i = t.prototype;
              i.undo = function () {
                var e = this._edgeShape.getVertAt(this._vertIndex);
                this._endPoint1 ||= new s.bR(e.handle1.x, e.handle1.y);
                this._endPoint2 ||= new s.bR(e.handle2.x, e.handle2.y);
                e.handle1.Set(this._startPoint1.x, this._startPoint1.y);
                e.handle2.Set(this._startPoint2.x, this._startPoint2.y);
                var t = this._edgeShape.vertVector[0];
                this._edgeShape.drawEditMode(t, this._edgeShape.completeFill);
              };
              i.redo = function () {
                var e = this._edgeShape.getVertAt(this._vertIndex);
                e.handle1.Set(this._endPoint1.x, this._endPoint1.y);
                e.handle2.Set(this._endPoint2.x, this._endPoint2.y);
                var t = this._edgeShape.vertVector[0];
                this._edgeShape.drawEditMode(t, this._edgeShape.completeFill);
              };
              return t;
            }(r.r);
            function Y(e) {
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
            function q(e, t) {
              q = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return q(e, t);
            }
            var J = function (e) {
              function t(t, n, r, i) {
                var s;
                if (i === undefined) {
                  i = null;
                }
                (s = e.call(this, null) || this)._vertIndex = t;
                s._edgeShape = n;
                s._startPoint = r;
                if (i) {
                  s._endPoint = i;
                }
                return s;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              q(n, r);
              var i;
              var a;
              var o = t.prototype;
              o.undo = function () {
                var e = this._edgeShape.getVertAt(this._vertIndex);
                if (!this._endPoint) {
                  this.setEndPoint();
                }
                e.x = this._startPoint.x;
                e.y = this._startPoint.y;
                var t = this._edgeShape.vertVector[0];
                this._edgeShape.drawEditMode(t, this._edgeShape.completeFill);
              };
              o.redo = function () {
                var e = this._edgeShape.getVertAt(this._vertIndex);
                e.x = this._endPoint.x;
                e.y = this._endPoint.y;
                var t = this._edgeShape.vertVector[0];
                this._edgeShape.drawEditMode(t, this._edgeShape.completeFill);
              };
              o.setEndPoint = function () {
                var e = this._edgeShape.getVertAt(this._vertIndex);
                this._endPoint = new s.bR(e.x, e.y);
              };
              i = t;
              if (a = [{
                key: "endPoint",
                set: function (e) {
                  this._endPoint = e;
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
                    Object.defineProperty(e, Y(r.key), r);
                  }
                })(i.prototype, a);
              }
              Object.defineProperty(i, "prototype", {
                writable: false
              });
              return i;
            }(r.r);
            function K(e, t) {
              K = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return K(e, t);
            }
            var Z = function (e) {
              function t(t, n, r) {
                var i;
                (i = e.call(this, null) || this)._groupCanvas = t;
                i._canvasHolder = n;
                i._arrowTool = r;
                return i;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              K(n, r);
              var i = t.prototype;
              i.undo = function () {
                this._canvasHolder.removeChild(this._groupCanvas);
                this._arrowTool.currentCanvas = this._arrowTool.canvas;
              };
              i.redo = function () {
                this._canvasHolder.addChild(this._groupCanvas);
                this._arrowTool.currentCanvas = this._groupCanvas;
              };
              i.die = function () {
                e.prototype.die.call(this);
                this._arrowTool = null;
              };
              return t;
            }(r.r);
            function $(e, t) {
              $ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return $(e, t);
            }
            var Q = function (e) {
              function t(t, n) {
                var r;
                (r = e.call(this, t) || this)._arrowTool = n;
                return r;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              $(n, r);
              var i = t.prototype;
              i.undo = function () {
                this._arrowTool.closeVertEdit(null, false);
              };
              i.redo = function () {
                this._arrowTool.openVertEdit(this.refSprite, false);
              };
              i.die = function () {
                e.prototype.die.call(this);
                this._arrowTool = null;
              };
              return t;
            }(r.r);
            var ee = n(54683);
            function te(e, t) {
              te = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return te(e, t);
            }
            n(23792);
            n(36033);
            n(47764);
            n(62953);
            var ne = function (e) {
              function t() {
                var t;
                (t = e.call(this) || this).counter = 0;
                t.actionArray = new Array();
                t.index = -1;
                t.dictionary = new Map();
                t.testSprite = new s.kx();
                t.dictionary.set(t.testSprite, 1);
                t.testSprite = null;
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              te(n, r);
              var i = t.prototype;
              i.pushAction = function (e) {
                this.index += 1;
                var t = this.actionArray.length - this.index;
                this.dictionary.set(e, this.counter);
                this.counter += 1;
                for (var n = this.actionArray.splice(this.index, t, e), r = 0; r < n.length; r++) {
                  var i = n[r];
                  (i = i.firstAction).die();
                }
              };
              i.undo = function () {
                if (!(this.index < 0)) {
                  var e = this.actionArray[this.index];
                  for (e = e.lastAction; e; e = e.prevAction) {
                    e.undo();
                  }
                  this.index -= 1;
                  this.dispatchEvent(new s.Jh(t.UNDO));
                }
              };
              i.redo = function () {
                if (this.index != this.actionArray.length - 1) {
                  var e = this.actionArray[this.index + 1];
                  for (e = e.firstAction; e; e = e.nextAction) {
                    e.redo();
                  }
                  this.index += 1;
                  this.dispatchEvent(new s.Jh(t.REDO));
                }
              };
              i.clearActions = function () {
                for (var e = 0; e < this.actionArray.length; e++) {
                  var t = this.actionArray[e];
                  (t = t.firstAction).die();
                }
                this.actionArray = [];
                this.index = -1;
              };
              i.die = function () {
                for (var e = 0; e < this.actionArray.length; e++) {
                  var t = this.actionArray[e];
                  (t = t.firstAction).die();
                }
              };
              return t;
            }(s.Qe);
            function re(e, t) {
              re = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return re(e, t);
            }
            ne.UNDO = "undo";
            ne.REDO = "redo";
            var ie = function (e) {
              function t(t, n, r, i, s) {
                var a;
                (a = e.call(this, t) || this)._property = n;
                a._key = r;
                a._index = i;
                a._tempObject = s;
                return a;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              re(n, r);
              var i = t.prototype;
              i.undo = function () {
                this.refSprite.keyedPropertyObject[this._property].get(this._key).splice(this._index, 0, this._tempObject[this._property]);
                for (var e = 0; e < this.refSprite.triggerActionList.length; e++) {
                  var t = this.refSprite.triggerActionListProperties[e];
                  if (t) {
                    for (var n = 0; n < t.length; n++) {
                      var r = t[n];
                      var i = this.refSprite.keyedPropertyObject[r];
                      if (i) {
                        var s = i.get(this._key);
                        if (s) {
                          s.splice(this._index, 0, this._tempObject[r]);
                        }
                      }
                    }
                  }
                }
                this.refSprite.setAttributes();
              };
              i.redo = function () {
                var e = this.refSprite.keyedPropertyObject[this._property].get(this._key);
                if (e.length > 1) {
                  e.splice(this._index, 1);
                  for (var t = 0; t < this.refSprite.triggerActionList.length; t++) {
                    var n = this.refSprite.triggerActionListProperties[t];
                    if (n) {
                      for (var r = 0; r < n.length; r++) {
                        var i = n[r];
                        var s = this.refSprite.keyedPropertyObject[i];
                        if (s) {
                          var a = s.get(this._key);
                          if (a) {
                            a.splice(this._index, 1);
                          }
                        }
                      }
                    }
                  }
                  this.refSprite.setAttributes();
                }
              };
              return t;
            }(r.r);
            function se(e, t) {
              se = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return se(e, t);
            }
            var ae = function (e) {
              function t(t, n, r) {
                var i;
                if (n === undefined) {
                  n = null;
                }
                if (r === undefined) {
                  r = null;
                }
                (i = e.call(this, null) || this)._edgeShape = t;
                i._startPoint = n;
                i._endPoint = r;
                return i;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              se(n, r);
              var i = t.prototype;
              i.undo = function () {
                this._edgeShape.reverse();
                if (this._startPoint) {
                  this._edgeShape.x = this._startPoint.x;
                  this._edgeShape.y = this._startPoint.y;
                }
              };
              i.redo = function () {
                this._edgeShape.reverse();
                if (this._endPoint) {
                  this._edgeShape.x = this._endPoint.x;
                  this._edgeShape.y = this._endPoint.y;
                }
              };
              return t;
            }(r.r);
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
              function t(t, n) {
                var r;
                (r = e.call(this, t) || this)._startAngle = n;
                return r;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              he(n, r);
              var i;
              var s;
              var a = t.prototype;
              a.undo = function () {
                if (!this._endAngle) {
                  this.setEndAngle();
                }
                this.refSprite.angle = this._startAngle;
              };
              a.redo = function () {
                this.refSprite.angle = this._endAngle;
              };
              a.setEndAngle = function () {
                this._endAngle = this.refSprite.angle;
              };
              i = t;
              if (s = [{
                key: "endAngle",
                set: function (e) {
                  this._endAngle = e;
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
                })(i.prototype, s);
              }
              Object.defineProperty(i, "prototype", {
                writable: false
              });
              return i;
            }(r.r);
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
            var ue = function (e) {
              function t(t, n) {
                var r;
                (r = e.call(this, t) || this)._startAngle = n;
                return r;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              ce(n, r);
              var i;
              var s;
              var a = t.prototype;
              a.undo = function () {
                if (!this._endAngle) {
                  this.setEndAngle();
                }
                this.refSprite.angleUnbound = this._startAngle;
              };
              a.redo = function () {
                this.refSprite.angleUnbound = this._endAngle;
              };
              a.setEndAngle = function () {
                this._endAngle = this.refSprite.angle;
              };
              i = t;
              if (s = [{
                key: "endAngle",
                set: function (e) {
                  this._endAngle = e;
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
                })(i.prototype, s);
              }
              Object.defineProperty(i, "prototype", {
                writable: false
              });
              return i;
            }(r.r);
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
              function t(t, n, r) {
                var i;
                (i = e.call(this, t) || this)._startScaleX = n;
                i._startScaleY = r;
                return i;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              me(n, r);
              var i;
              var s;
              var a = t.prototype;
              a.undo = function () {
                if (!this._endScaleX) {
                  this.setEndScale();
                }
                this.refSprite.scaleX = this._startScaleX;
                this.refSprite.scaleY = this._startScaleY;
              };
              a.redo = function () {
                this.refSprite.scaleX = this._endScaleX;
                this.refSprite.scaleY = this._endScaleY;
              };
              a.setEndScale = function () {
                this._endScaleX = this.refSprite.scaleX;
                this._endScaleY = this.refSprite.scaleY;
              };
              i = t;
              if (s = [{
                key: "endScaleX",
                set: function (e) {
                  this._endScaleX = e;
                }
              }, {
                key: "endScaleY",
                set: function (e) {
                  this._endScaleY = e;
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
                })(i.prototype, s);
              }
              Object.defineProperty(i, "prototype", {
                writable: false
              });
              return i;
            }(r.r);
            function _e(e, t) {
              _e = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return _e(e, t);
            }
            var ve = function (e) {
              function t(t, n, r, i) {
                var s;
                (s = e.call(this, t, false) || this)._selectionArray = n;
                s._index = r;
                s._arrowTool = i;
                return s;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              _e(n, r);
              var i = t.prototype;
              i.undo = function () {
                this._selectionArray.splice(this._index, 1);
                this.refSprite.selected = false;
                if (this.refSprite instanceof k.HQ) {
                  this._arrowTool.numShapesSelected -= 1;
                } else if (this.refSprite instanceof P._) {
                  this._arrowTool.numSpecialsSelected -= 1;
                } else if (this.refSprite instanceof M.D) {
                  this._arrowTool.numGroupsSelected -= 1;
                } else if (this.refSprite instanceof R.S) {
                  this._arrowTool.numJointsSelected -= 1;
                } else if (this.refSprite instanceof I.Q) {
                  this._arrowTool.numTriggersSelected -= 1;
                } else if (this.refSprite instanceof L.a) {
                  this._arrowTool.numCharSelected -= 1;
                }
              };
              i.redo = function () {
                this._selectionArray.splice(this._index, 0, this.refSprite);
                this.refSprite.selected = true;
                if (this.refSprite instanceof k.HQ) {
                  this._arrowTool.numShapesSelected += 1;
                } else if (this.refSprite instanceof P._) {
                  this._arrowTool.numSpecialsSelected += 1;
                } else if (this.refSprite instanceof M.D) {
                  this._arrowTool.numGroupsSelected += 1;
                } else if (this.refSprite instanceof R.S) {
                  this._arrowTool.numJointsSelected += 1;
                } else if (this.refSprite instanceof I.Q) {
                  this._arrowTool.numTriggersSelected += 1;
                } else if (this.refSprite instanceof L.a) {
                  this._arrowTool.numCharSelected += 1;
                }
              };
              return t;
            }(r.r);
            function ye(e, t) {
              ye = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return ye(e, t);
            }
            var ge = function (e) {
              function t(t, n, r, i) {
                var s;
                (s = e.call(this, null) || this)._vertIndex = t;
                s._edgeShape = n;
                s._selectionVector = r;
                s._selectionIndex = i;
                return s;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              ye(n, r);
              var i = t.prototype;
              i.undo = function () {
                var e = this._edgeShape.getVertAt(this._vertIndex);
                this._selectionVector.splice(this._selectionIndex, 1);
                e.selected = false;
              };
              i.redo = function () {
                var e = this._edgeShape.getVertAt(this._vertIndex);
                this._selectionVector.splice(this._selectionIndex, 0, e);
                e.selected = true;
              };
              return t;
            }(r.r);
            function we(e) {
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
            function xe(e, t) {
              xe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return xe(e, t);
            }
            var be = function (e) {
              function t(t, n, r) {
                var i;
                if (r === undefined) {
                  r = null;
                }
                (i = e.call(this, t) || this)._startPoint = n;
                if (r) {
                  i._endPoint = r;
                }
                return i;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              xe(n, r);
              var i;
              var a;
              var o = t.prototype;
              o.undo = function () {
                if (!this._endPoint) {
                  this.setEndPoint();
                }
                this.refSprite.x = this._startPoint.x;
                this.refSprite.y = this._startPoint.y;
              };
              o.redo = function () {
                this.refSprite.x = this._endPoint.x;
                this.refSprite.y = this._endPoint.y;
              };
              o.setEndPoint = function () {
                this._endPoint = new s.bR(this.refSprite.x, this.refSprite.y);
              };
              i = t;
              if (a = [{
                key: "endPoint",
                set: function (e) {
                  this._endPoint = e;
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
                    Object.defineProperty(e, we(r.key), r);
                  }
                })(i.prototype, a);
              }
              Object.defineProperty(i, "prototype", {
                writable: false
              });
              return i;
            }(r.r);
            function Te(e) {
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
            function Ae(e, t) {
              Ae = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return Ae(e, t);
            }
            var Ce = function (e) {
              function t(t, n, r) {
                var i;
                if (r === undefined) {
                  r = null;
                }
                (i = e.call(this, t) || this)._startPoint = n;
                if (r) {
                  i._endPoint = r;
                }
                return i;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              Ae(n, r);
              var i;
              var a;
              var o = t.prototype;
              o.undo = function () {
                if (!this._endPoint) {
                  this.setEndPoint();
                }
                this.refSprite.xUnbound = this._startPoint.x;
                this.refSprite.yUnbound = this._startPoint.y;
              };
              o.redo = function () {
                this.refSprite.xUnbound = this._endPoint.x;
                this.refSprite.yUnbound = this._endPoint.y;
              };
              o.setEndPoint = function () {
                this._endPoint = new s.bR(this.refSprite.x, this.refSprite.y);
              };
              i = t;
              if (a = [{
                key: "endPoint",
                set: function (e) {
                  this._endPoint = e;
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
                    Object.defineProperty(e, Te(r.key), r);
                  }
                })(i.prototype, a);
              }
              Object.defineProperty(i, "prototype", {
                writable: false
              });
              return i;
            }(r.r);
            function Se(e, t) {
              Se = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return Se(e, t);
            }
            var Ee = function (e) {
              function t(t, n, r) {
                var i;
                (i = e.call(this, n) || this)._trigger = t;
                i._targetIndex = r;
                return i;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              Se(n, r);
              var i = t.prototype;
              i.undo = function () {
                this._trigger.targets.splice(this._targetIndex, 1);
                this._trigger.removeMoveListener(this.refSprite);
                this.refSprite.removeTrigger(this._trigger);
                this._trigger.drawArms();
              };
              i.redo = function () {
                this._trigger.targets.splice(this._targetIndex, 0, this.refSprite);
                this._trigger.addMoveListener(this.refSprite);
                this.refSprite.addTrigger(this._trigger);
                this._trigger.drawArms();
              };
              return t;
            }(r.r);
            function Oe(e, t) {
              Oe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return Oe(e, t);
            }
            var ke = function (e) {
              function t(t, n, r) {
                var i;
                (i = e.call(this, n) || this)._trigger = t;
                i._targetIndex = r;
                return i;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              Oe(n, r);
              var i = t.prototype;
              i.undo = function () {
                this._trigger.targets.splice(this._targetIndex, 0, this.refSprite);
                this._trigger.addMoveListener(this.refSprite);
                this.refSprite.addTrigger(this._trigger);
                this._trigger.drawArms();
              };
              i.redo = function () {
                this._trigger.targets.splice(this._targetIndex, 1);
                this._trigger.removeMoveListener(this.refSprite);
                this.refSprite.removeTrigger(this._trigger);
                this._trigger.drawArms();
              };
              return t;
            }(r.r);
            function Pe(e, t) {
              Pe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return Pe(e, t);
            }
            var Me = function (e) {
              function t(t, n, r, i, s) {
                var a;
                (a = e.call(this, t) || this)._prevGroup = n;
                a._newGroup = r;
                a._groupParent = i;
                a._groupIndex = s;
                return a;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              Pe(n, r);
              var i = t.prototype;
              i.undo = function () {
                this._groupParent.addChildAt(this.refSprite, this._groupIndex);
                this.refSprite.group = this._newGroup;
                this.refSprite.userData.owner = this._groupParent.parent;
              };
              i.redo = function () {
                this._groupParent.removeChild(this.refSprite);
                this.refSprite.group = this._prevGroup;
                this.refSprite.userData.owner = null;
              };
              return t;
            }(r.r);
          }
    });
})();
