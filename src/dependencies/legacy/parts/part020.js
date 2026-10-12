(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        89346(e, t, n) {
            "use strict";
        
            n.d(t, {
              _c: () => o,
              tK: () => h.t,
              _J: () => l._,
              er: () => m
            });
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(26099);
            n(2892);
            var r = n(4971);
            var i = n(23222);
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
              function t(t, n, s) {
                var a;
                if (n === undefined) {
                  n = 0;
                }
                if (s === undefined) {
                  s = 0;
                }
                (a = e.call(this) || this)._vec = new i.RM();
                a._vert = t;
                a.x = n;
                a.y = s;
                a._circleSprite = new r.kx();
                a._circleSprite.mouseEnabled = false;
                a.addChild(a._circleSprite);
                return a;
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
              d.drawSelf = function () {
                this._circleSprite.graphics.clear();
                this._circleSprite.graphics.beginFill(16777215, 0.5);
                this._circleSprite.graphics.lineStyle(null, 0, 1);
                this._circleSprite.graphics.drawCircle(0, 0, 3);
                this._circleSprite.graphics.endFill();
              };
              d.clearSelf = function () {
                this._circleSprite.graphics.clear();
              };
              d.Set = function (e, t) {
                this.x = e;
                this.y = t;
                if (this.x == 0 && this.y == 0) {
                  this.clearSelf();
                } else {
                  this.drawSelf();
                }
                if (this._vert) {
                  this._vert.drawArms();
                }
              };
              h = t;
              if (l = [{
                key: "vert",
                get: function () {
                  return this._vert;
                }
              }, {
                key: "circleSprite",
                get: function () {
                  return this._circleSprite;
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
                    Object.defineProperty(e, s(r.key), r);
                  }
                })(h.prototype, l);
              }
              Object.defineProperty(h, "prototype", {
                writable: false
              });
              return h;
            }(r.kx);
            var h = n(19890);
            var l = n(6393);
            n(54554);
            var d = n(35057);
            var c = n(13362);
            function u(e) {
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
            function p(e, t) {
              p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return p(e, t);
            }
            var m = function (e) {
              function t(n, s) {
                var a;
                (a = e.call(this) || this).init = function (e) {
                  a.removeEventListener(r.Jh.ADDED_TO_STAGE, a.init);
                  a.graphics.beginFill(10066329, 0.35);
                  a.graphics.drawRect(0, 0, 20000, 10000);
                  a.graphics.endFill();
                  a._canvasIndex = a._edgeShape.parent.getChildIndex(a._edgeShape);
                  a.addChild(a._edgeShape);
                  a._edgeShape.editMode = true;
                  a._edgeShape.mouseEnabled = false;
                  a._edgeShape.mouseChildren = true;
                  a._edgeShape.blendMode = r.Nx.NORMAL;
                  var n = a._edgeShape.getVertAt(0);
                  a._edgeShape.drawEditMode(n.b2position, a._edgeShape.completeFill);
                  t._selectedVerts ||= new Array();
                  a.initialData = new Array();
                  var i;
                  var s = a._edgeShape.numVerts;
                  if (a._edgeShape instanceof c.Ps) {
                    i = a._edgeShape;
                  }
                  for (var o = 0; o < s; o++) {
                    var h = a._edgeShape.vertVector[o];
                    a.initialData[o] = new Array(6);
                    a.initialData[o][0] = h.x;
                    a.initialData[o][1] = h.y;
                    if (i) {
                      var l = i.handleVector[o * 2];
                      var d = i.handleVector[o * 2 + 1];
                      a.initialData[o][2] = l.x;
                      a.initialData[o][3] = l.y;
                      a.initialData[o][4] = d.x;
                      a.initialData[o][5] = d.y;
                    }
                  }
                  a.stage = r.BI.main;
                  a.stage.addEventListener(r.Cm.MOUSE_DOWN, a.mouseDownHandler);
                  a.stage.addEventListener(r.Cm.DOUBLE_CLICK, a.doubleClickHandler);
                  a.stage.addEventListener(r.kV.KEY_DOWN, a.keyDownHandler);
                };
                a.keyDownHandler = function (e) {
                  switch (e.keyCode) {
                    case 8:
                      a.deleteSelected();
                      break;
                    case 13:
                      a.insertVertSelected();
                      break;
                    case 37:
                      a.moveSelected(-1, 0, e.shiftKey);
                      break;
                    case 38:
                      a.moveSelected(0, -1, e.shiftKey);
                      break;
                    case 39:
                      a.moveSelected(1, 0, e.shiftKey);
                      break;
                    case 40:
                      a.moveSelected(0, 1, e.shiftKey);
                  }
                };
                a.mouseDownHandler = function (e) {
                  var n;
                  var i;
                  var s = a.getDisplayUnderMouse([c.Hm, c._c]);
                  if (s) {
                    e.target = s;
                  }
                  if (e.target instanceof c.Hm) {
                    var o = e.target;
                    var h = t._selectedVerts.indexOf(o);
                    if (e.shiftKey) {
                      if (h < 0) {
                        n = a.addToSelected(o);
                        a._mouseVert = o;
                      } else {
                        n = a.removeFromSelected(o);
                        a._mouseVert = null;
                      }
                      if (t._selectedVerts.length > 0) {
                        a._mouseVert ||= t._selectedVerts[t._selectedVerts.length - 1];
                        a.stage.addEventListener(r.Cm.MOUSE_UP, a.mouseUpHandler);
                        a.stage.addEventListener(r.Cm.MOUSE_MOVE, a.mouseMoveVert);
                      }
                    } else {
                      if (h < 0) {
                        i = a.deselectAll();
                        n = a.addToSelected(o);
                        if (i) {
                          i.nextAction = n;
                        }
                      }
                      a._mouseVert = o;
                      a.stage.addEventListener(r.Cm.MOUSE_UP, a.mouseUpHandler);
                      a.stage.addEventListener(r.Cm.MOUSE_MOVE, a.mouseMoveVert);
                    }
                  } else if (e.target instanceof c._c) {
                    a._selectedHandle = e.target;
                    a.stage.addEventListener(r.Cm.MOUSE_UP, a.mouseUpHandler);
                    a.stage.addEventListener(r.Cm.MOUSE_MOVE, a.mouseMoveBezHandle);
                  } else {
                    if (t._selectedVerts.length > 0 && !e.shiftKey) {
                      n = a.deselectAll();
                    }
                    if (a.parent.contains(e.target)) {
                      a.stage.addEventListener(r.Cm.MOUSE_MOVE, a.mouseMoveBox);
                      a.stage.addEventListener(r.Cm.MOUSE_UP, a.mouseUpHandler);
                      if (!a.boundingBoxSprite) {
                        a.boundingBoxSprite = new r.kx();
                        a.addChild(a.boundingBoxSprite);
                        a.boundingBoxSprite.x = a.mouseX;
                        a.boundingBoxSprite.y = a.mouseY;
                        a.boundingBoxSprite.blendMode = r.Nx.INVERT;
                      }
                    }
                  }
                  if (n) {
                    a.dispatchEvent(new c.XP(c.XP.GENERIC, n));
                  }
                };
                a.doubleClickHandler = function (e) {
                  var n = a.getDisplayUnderMouse([c.Hm, c._c]);
                  if (n) {
                    e.target = n;
                  }
                  if (e.target instanceof c.tK) {
                    var i = e.target;
                    if (t._selectedVerts.indexOf(i) > -1) {
                      a.enableVertHandles(i);
                      a.redrawShape();
                    }
                  } else if (e.target == a) {
                    a.dispatchEvent(new r.Jh(t.EDIT_COMPLETE));
                  }
                };
                a.enableVertHandles = function (e) {
                  var t;
                  var n;
                  var s = a._edgeShape.numVerts;
                  var o = a._edgeShape.getVertIndex(e);
                  if (o == 0) {
                    t = a._edgeShape.getVertAt(s - 1);
                    n = a._edgeShape.getVertAt(o + 1);
                  } else if (o == s - 1) {
                    t = a._edgeShape.getVertAt(o - 1);
                    n = a._edgeShape.getVertAt(0);
                  } else {
                    t = a._edgeShape.getVertAt(o - 1);
                    n = a._edgeShape.getVertAt(o + 1);
                  }
                  var h;
                  var l;
                  var d;
                  var u = t.x == n.x && t.y == n.y ? new i.RM(t.x - e.x, t.y - e.y) : new i.RM(t.x - n.x, t.y - n.y);
                  var p = u.Length();
                  u.Normalize();
                  u.Multiply(Math.max(5, p * 0.25));
                  u.x = Math.round(u.x);
                  u.y = Math.round(u.y);
                  if (e.handle1.x == 0 && e.handle1.y == 0) {
                    h = true;
                    l = new r.bR(e.handle1.x, e.handle1.y);
                    if (e.handle2.x != 0 || e.handle2.y != 0) {
                      e.handle1.Set(-e.handle2.x, -e.handle2.y);
                    } else {
                      e.handle1.Set(u.x, u.y);
                    }
                  }
                  if (e.handle2.x == 0 && e.handle2.y == 0) {
                    h = true;
                    d = new r.bR(e.handle2.x, e.handle2.y);
                    if (e.handle1.x != 0 || e.handle1.y != 0) {
                      e.handle2.Set(-e.handle1.x, -e.handle1.y);
                    } else {
                      e.handle2.Set(u.x, u.y);
                    }
                  }
                  if (h) {
                    var m = new c.Et(a._edgeShape.getVertIndex(e), a._edgeShape, l, d);
                    a.dispatchEvent(new c.XP(c.XP.GENERIC, m));
                  }
                };
                a.mouseUpHandler = function (e) {
                  var t;
                  var n;
                  a.stage.removeEventListener(r.Cm.MOUSE_UP, a.mouseUpHandler);
                  a.stage.removeEventListener(r.Cm.MOUSE_MOVE, a.mouseMoveVert);
                  a.stage.removeEventListener(r.Cm.MOUSE_MOVE, a.mouseMoveBezHandle);
                  a.stage.removeEventListener(r.Cm.MOUSE_MOVE, a.mouseMoveBox);
                  a.dragging = false;
                  a._mouseVert = null;
                  a._selectedHandle &&= null;
                  if (a.boundingBoxSprite) {
                    var i = a.boundingBoxSprite.getBounds(a._canvas);
                    a.removeChild(a.boundingBoxSprite);
                    a.boundingBoxSprite = null;
                    var s = a._edgeShape.numVerts;
                    if (!e.shiftKey) {
                      t = a.deselectAll();
                    }
                    for (var o = 0; o < s; o++) {
                      var h = a._edgeShape.getVertAt(o);
                      if (h.getBounds(a._canvas).intersects(i)) {
                        n = a.addToSelected(h);
                        if (t) {
                          t.nextAction = n;
                        }
                        t = n;
                      }
                    }
                  }
                  if (n) {
                    a.dispatchEvent(new c.XP(c.XP.GENERIC, n));
                  }
                };
                a.mouseMoveVert = function (e) {
                  if (t._selectedVerts.length > 0) {
                    var n;
                    var i;
                    var s = a._mouseVert.x;
                    var o = a._mouseVert.y;
                    var h = Math.round(a._edgeShape.mouseX);
                    var l = Math.round(a._edgeShape.mouseY);
                    if (e.shiftKey) {
                      h = Math.round(h * 0.1) * 10;
                      l = Math.round(l * 0.1) * 10;
                    }
                    var d = t._selectedVerts.length;
                    if (a._edgeShape instanceof c.Ps) {
                      for (var u = 0; u < d; u++) {
                        var p = t._selectedVerts[u];
                        if (!a.dragging) {
                          n = new c.jd(a._edgeShape.getVertIndex(p), a._edgeShape, new r.bR(p.x, p.y));
                          if (i) {
                            n.prevAction = i;
                          }
                          i = n;
                        }
                        var m = p.x - s;
                        var f = p.y - o;
                        p.x = Math.round(h + m);
                        p.y = Math.round(l + f);
                      }
                      if (!a.dragging) {
                        a.dispatchEvent(new c.XP(c.XP.GENERIC, n));
                        a.dragging = true;
                      }
                      a.redrawShape();
                    } else {
                      var _ = a.storeCoords();
                      var v = new Array();
                      for (var y = 0; y < d; y++) {
                        var g = t._selectedVerts[y];
                        var w = a._edgeShape.getVertIndex(g);
                        v.push(w);
                        var x = _[w];
                        var b = g.x - s;
                        var T = g.y - o;
                        x.x = Math.round(h + b);
                        x.y = Math.round(l + T);
                      }
                      if (a.isConvexB2Vec2(_)) {
                        for (var A = 0; A < d; A++) {
                          var C = t._selectedVerts[A];
                          var S = _[v[A]];
                          if (!a.dragging) {
                            n = new c.jd(a._edgeShape.getVertIndex(C), a._edgeShape, new r.bR(C.x, C.y));
                            if (i) {
                              n.prevAction = i;
                            }
                            i = n;
                          }
                          C.x = S.x;
                          C.y = S.y;
                        }
                        if (!a.dragging) {
                          a.dispatchEvent(new c.XP(c.XP.GENERIC, n));
                          a.dragging = true;
                        }
                        a.redrawShape();
                      }
                    }
                  }
                };
                a.mouseMoveBezHandle = function (e) {
                  var t;
                  if (a._selectedHandle) {
                    if (!a.dragging) {
                      t = new c.Et(a._edgeShape.getVertIndex(a._selectedHandle.vert), a._edgeShape);
                    }
                    a._selectedHandle.Set(Math.round(a._selectedHandle.vert.mouseX), Math.round(a._selectedHandle.vert.mouseY));
                    if (e.shiftKey) {
                      a._selectedHandle.Set(Math.round(a._selectedHandle.x * 0.1) * 10, Math.round(a._selectedHandle.y * 0.1) * 10);
                    }
                    if (Math.sqrt(a._selectedHandle.x * a._selectedHandle.x + a._selectedHandle.y * a._selectedHandle.y) < Math.pow(2, -c.KE.currentZoom) * 5) {
                      a._selectedHandle.Set(0, 0);
                    }
                    if (!e.altKey) {
                      (a._selectedHandle == a._selectedHandle.vert.handle1 ? a._selectedHandle.vert.handle2 : a._selectedHandle.vert.handle1).Set(-a._selectedHandle.x, -a._selectedHandle.y);
                    }
                    a.redrawShape();
                    if (!a.dragging) {
                      a.dispatchEvent(new c.XP(c.XP.GENERIC, t));
                      a.dragging = true;
                    }
                  }
                };
                a.mouseMoveBox = function (e) {
                  if (a.boundingBoxSprite) {
                    a.boundingBoxSprite.graphics.clear();
                    a.boundingBoxSprite.graphics.lineStyle(1, 0, 1);
                    var t = a.boundingBoxSprite.mouseX < 0 ? a.boundingBoxSprite.mouseX : 0;
                    var n = a.boundingBoxSprite.mouseY < 0 ? a.boundingBoxSprite.mouseY : 0;
                    var r = Math.abs(a.boundingBoxSprite.mouseX);
                    var i = Math.abs(a.boundingBoxSprite.mouseY);
                    a.boundingBoxSprite.graphics.drawRect(t, n, r, i);
                  }
                };
                a._edgeShape = n;
                a._canvas = s;
                a.doubleClickEnabled = true;
                a.addEventListener(r.Jh.ADDED_TO_STAGE, a.init);
                return a;
              }
              var n;
              var s;
              s = e;
              (n = t).prototype = Object.create(s.prototype);
              n.prototype.constructor = n;
              p(n, s);
              var a;
              var o;
              var h = t.prototype;
              h.addToSelected = function (e) {
                e.selected = true;
                t._selectedVerts.push(e);
                return new c.u8(this._edgeShape.getVertIndex(e), this._edgeShape, t._selectedVerts, t._selectedVerts.length - 1);
              };
              h.removeFromSelected = function (e) {
                var n;
                e.selected = false;
                var r = t._selectedVerts.indexOf(e);
                if (r > -1) {
                  t._selectedVerts.splice(r, 1);
                  n = new c.fe(this._edgeShape.getVertIndex(e), this._edgeShape, t._selectedVerts, r);
                }
                return n;
              };
              h.deselectAll = function () {
                var e;
                var n;
                for (var r = t._selectedVerts.length - 1; r > -1; r--) {
                  var i = t._selectedVerts[r];
                  e = this.removeFromSelected(i);
                  if (n) {
                    n.nextAction = e.firstAction;
                  }
                  n = e;
                }
                return e;
              };
              h.storeCoords = function () {
                var e = new Array();
                for (var t = this._edgeShape.numVerts, n = 0; n < t; n++) {
                  var r = this._edgeShape.getVertAt(n);
                  e.push(new i.RM(r.x, r.y));
                }
                return e;
              };
              h.isConvexB2Vec2 = function (e) {
                for (var t = e.length, n = 0; n < t; n++) {
                  var r = e[n];
                  var s = n + 1;
                  if (s > t - 1) {
                    s -= t;
                  }
                  var a = e[s];
                  if ((s = n + 2) > t - 1) {
                    s -= t;
                  }
                  var o = e[s];
                  var h = new i.RM(a.x - r.x, a.y - r.y);
                  var l = new i.RM(o.x - a.x, o.y - a.y);
                  h.Normalize();
                  l.Normalize();
                  var d = new i.RM(h.y, -h.x);
                  if (i.x5.b2Dot(l, d) >= 0) {
                    return false;
                  }
                }
                return true;
              };
              h.fixConcaveViolations = function () {
                var e;
                var n;
                var s;
                var a = this._edgeShape.numVerts;
                do {
                  s = false;
                  for (var o = 0; o < a; o++) {
                    var h = this._edgeShape.getVertAt(o);
                    var l = o + 1;
                    if (l > a - 1) {
                      l -= a;
                    }
                    var d = this._edgeShape.getVertAt(l);
                    if ((l = o + 2) > a - 1) {
                      l -= a;
                    }
                    var u = this._edgeShape.getVertAt(l);
                    var p = new i.RM(d.x - h.x, d.y - h.y);
                    var m = new i.RM(u.x - d.x, u.y - d.y);
                    p.Normalize();
                    m.Normalize();
                    var f = new i.RM(p.y, -p.x);
                    if (i.x5.b2Dot(m, f) >= 0) {
                      s = true;
                      var _ = new i.RM(u.x - h.x, u.y - h.y);
                      _.Normalize();
                      var v = new i.RM(_.y, -_.x);
                      var y = i.x5.b2Dot(_, new i.RM(d.x - h.x, d.y - h.y));
                      n = new c.jd(this._edgeShape.getVertIndex(d), this._edgeShape, new r.bR(d.x, d.y));
                      if (e) {
                        e.nextAction = n;
                      }
                      e = n;
                      d.x = h.x + _.x * y + v.x * t.ADJUSTMENT_LENGTH;
                      d.y = h.y + _.y * y + v.y * t.ADJUSTMENT_LENGTH;
                    }
                  }
                } while (s == 1);
                return e;
              };
              h.moveSelected = function (e, n, i) {
                if (!this.stage.hasEventListener(r.Cm.MOUSE_UP)) {
                  var s;
                  var a;
                  var o = t._selectedVerts.length;
                  if (o != 0) {
                    if (i) {
                      e *= 10;
                      n *= 10;
                    }
                    e *= 1 / this._canvas.parent.scaleX;
                    n *= 1 / this._canvas.parent.scaleY;
                    if (this._edgeShape instanceof c.Ps) {
                      for (var h = 0; h < o; h++) {
                        var l = t._selectedVerts[h];
                        if (!this.translating) {
                          s = new c.jd(this._edgeShape.getVertIndex(l), this._edgeShape, new r.bR(l.x, l.y));
                          if (a) {
                            s.prevAction = a;
                          }
                          a = s;
                        }
                        l.x += e;
                        l.y += n;
                      }
                      if (!this.translating && s) {
                        this.dispatchEvent(new c.XP(c.XP.GENERIC, s));
                        this.translating = true;
                      }
                      this.redrawShape();
                    } else {
                      var d = this.storeCoords();
                      var u = new Array();
                      for (var p = 0; p < o; p++) {
                        var m = t._selectedVerts[p];
                        var f = this._edgeShape.getVertIndex(m);
                        u.push(f);
                        var _ = d[f];
                        _.x += e;
                        _.y += n;
                      }
                      if (this.isConvexB2Vec2(d)) {
                        for (var v = 0; v < o; v++) {
                          var y = t._selectedVerts[v];
                          var g = d[u[v]];
                          if (!this.translating) {
                            s = new c.jd(this._edgeShape.getVertIndex(y), this._edgeShape, new r.bR(y.x, y.y));
                            if (a) {
                              s.prevAction = a;
                            }
                            a = s;
                          }
                          y.x = g.x;
                          y.y = g.y;
                        }
                        if (!this.translating) {
                          this.dispatchEvent(new c.XP(c.XP.GENERIC, s));
                          this.translating = true;
                        }
                        this.redrawShape();
                      }
                    }
                  }
                }
              };
              h.deleteSelected = function () {
                var e;
                var n;
                var r;
                var i = this._edgeShape instanceof c.Ps ? 2 : 3;
                var s = this._edgeShape instanceof c.Ps ? "Art shapes must have at least 2 vertices" : "Polygon shapes must have at least 3 vertices";
                for (var a = t._selectedVerts.length - 1; a > -1; a--) {
                  if (this._edgeShape.numVerts <= i) {
                    d.w.debugText.show(s);
                    break;
                  }
                  var o = t._selectedVerts[a];
                  e = this.removeFromSelected(o);
                  var h = this._edgeShape.getVertIndex(o);
                  n = new c.bE(h, this._edgeShape, null);
                  this._edgeShape.removeVert(h);
                  n.prevAction = e;
                  if (r) {
                    r.nextAction = e;
                  }
                  r = n;
                }
                this.redrawShape();
                if (n) {
                  this.dispatchEvent(new c.XP(c.XP.GENERIC, n));
                }
              };
              h.insertVertSelected = function () {
                var e;
                var n;
                var r;
                var s;
                var a;
                var o;
                var h;
                var l;
                var u = t._selectedVerts.length;
                var p = this._edgeShape.numVerts;
                var m = this._edgeShape.getVertAt(p - 1);
                l = this._edgeShape instanceof c.Ps ? "Art shapes have a maximum of " + (h = c.yg.MAX_VERTS) + " vertices" : "Polygon shapes have a maximum of " + (h = c.tD.MAX_VERTS) + " vertices";
                for (var f = 0; f < u; f++) {
                  var _ = t._selectedVerts[f];
                  if (p >= h) {
                    d.w.debugText.show(l);
                    break;
                  }
                  if (_ == m) {
                    if (this._edgeShape.completeFill) {
                      s = this._edgeShape.getVertAt(0);
                      var v = undefined;
                      if (_ instanceof c.tK && s instanceof c.tK) {
                        a = _;
                        o = s;
                        var y = c.Ps.bezierValue(0.5, a.x, a.anchor2.x, o.anchor1.x, o.x);
                        var g = c.Ps.bezierValue(0.5, a.y, a.anchor2.y, o.anchor1.y, o.y);
                        v = new c.tK(y, g);
                      } else {
                        var w = new i.RM(s.x - _.x, s.y - _.y);
                        var x = new i.RM(w.y, -w.x);
                        x.Normalize();
                        var b = _.x + w.x * 0.5 + x.x * t.ADJUSTMENT_LENGTH;
                        var T = _.y + w.y * 0.5 + x.y * t.ADJUSTMENT_LENGTH;
                        v = new c.Hm(b, T);
                      }
                      v.edgeShape = this._edgeShape;
                      this._edgeShape.addVert(v);
                      m = v;
                      p++;
                      e = new c.lM(p - 1, this._edgeShape);
                      if (n) {
                        n.nextAction = e;
                      }
                      n = e;
                    }
                  } else {
                    var A = this._edgeShape.getVertIndex(_);
                    s = this._edgeShape.getVertAt(A + 1);
                    var C = undefined;
                    if (_ instanceof c.tK && s instanceof c.tK) {
                      a = _;
                      o = s;
                      var S = c.Ps.bezierValue(0.5, a.x, a.anchor2.x, o.anchor1.x, o.x);
                      var E = c.Ps.bezierValue(0.5, a.y, a.anchor2.y, o.anchor1.y, o.y);
                      C = new c.tK(S, E);
                    } else {
                      var O = new i.RM(s.x - _.x, s.y - _.y);
                      var k = new i.RM(O.y, -O.x);
                      k.Normalize();
                      var P = _.x + O.x * 0.5 + k.x * t.ADJUSTMENT_LENGTH;
                      var M = _.y + O.y * 0.5 + k.y * t.ADJUSTMENT_LENGTH;
                      C = new c.Hm(P, M);
                    }
                    C.edgeShape = this._edgeShape;
                    this._edgeShape.addVert(C, A + 1);
                    p++;
                    m = this._edgeShape.getVertAt(p - 1);
                    e = new c.lM(A + 1, this._edgeShape);
                    if (n) {
                      n.nextAction = e;
                    }
                    n = e;
                  }
                }
                if (this._edgeShape instanceof c.kU) {
                  r = this.fixConcaveViolations();
                }
                this.redrawShape();
                if (r) {
                  e.nextAction = r.firstAction;
                  e = r;
                }
                if (e) {
                  this.dispatchEvent(new c.XP(c.XP.GENERIC, e));
                }
              };
              h.redrawShape = function () {
                var e = this._edgeShape.getVertAt(0);
                this._edgeShape.drawEditMode(e.b2position, this._edgeShape.completeFill);
              };
              h.resizeVerts = function () {
                this._edgeShape.resizeVerts();
              };
              h.isDataAltered = function () {
                var e;
                var t = this._edgeShape.numVerts;
                if (t != this.initialData.length) {
                  return true;
                }
                if (this._edgeShape instanceof c.Ps) {
                  e = this._edgeShape;
                }
                for (var n = 0; n < t; n++) {
                  var r = this._edgeShape.vertVector[n];
                  if (this.initialData[n][0] != r.x) {
                    return true;
                  }
                  if (this.initialData[n][1] != r.y) {
                    return true;
                  }
                  if (e) {
                    var i = e.handleVector[n * 2];
                    var s = e.handleVector[n * 2 + 1];
                    if (this.initialData[n][2] != i.x) {
                      return true;
                    }
                    if (this.initialData[n][3] != i.y) {
                      return true;
                    }
                    if (this.initialData[n][4] != s.x) {
                      return true;
                    }
                    if (this.initialData[n][5] != s.y) {
                      return true;
                    }
                  }
                }
                return false;
              };
              h.die = function () {
                this.stage.removeEventListener(r.Cm.MOUSE_DOWN, this.mouseDownHandler);
                this.stage.removeEventListener(r.Cm.DOUBLE_CLICK, this.doubleClickHandler);
                this.stage.removeEventListener(r.kV.KEY_DOWN, this.keyDownHandler);
                this.stage.removeEventListener(r.Cm.MOUSE_UP, this.mouseUpHandler);
                this.stage.removeEventListener(r.Cm.MOUSE_MOVE, this.mouseMoveBezHandle);
                this.stage.removeEventListener(r.Cm.MOUSE_MOVE, this.mouseMoveVert);
                this.stage.removeEventListener(r.Cm.MOUSE_MOVE, this.mouseMoveBox);
                this.removeEventListener(r.Jh.ADDED_TO_STAGE, this.init);
                if (parent) {
                  this.parent.removeChild(this);
                }
                this._edgeShape.editMode = false;
                this._edgeShape.mouseEnabled = true;
                this._edgeShape.mouseChildren = true;
                if (this.isDataAltered()) {
                  if (this._edgeShape instanceof c.Ps) {
                    this._edgeShape.vID = c.yg.getIDCounter();
                  } else {
                    this._edgeShape.vID = c.tD.getIDCounter();
                  }
                }
                this._canvas.addRefSpriteAt(this._edgeShape, this._canvasIndex);
              };
              a = t;
              if (o = [{
                key: "edgeShape",
                get: function () {
                  return this._edgeShape;
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
                    Object.defineProperty(e, u(r.key), r);
                  }
                })(a.prototype, o);
              }
              Object.defineProperty(a, "prototype", {
                writable: false
              });
              return a;
            }(r.kx);
            m.EDIT_COMPLETE = "editcomplete";
            m.ADJUSTMENT_LENGTH = 0.25;
          }
    });
})();
