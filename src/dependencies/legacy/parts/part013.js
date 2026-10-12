(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        39911(e, t, n) {
            "use strict";
        
            n.d(t, {
              P: () => h
            });
            n(54554);
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(26099);
            n(2892);
            var r = n(17167);
            var i = n(4971);
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
                (l = e.call(this, t, n, r, i, s, a, o, h) || this)._vID = 0;
                l.completeFill = false;
                l.vertVector = [];
                l._type = "EdgeShape";
                l.doubleClickEnabled = true;
                return l;
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
              d.addVert = function (e, t = -1) {
                if (t < 0) {
                  if (this._editMode) {
                    this.vertContainer.addChild(e);
                  }
                  this.vertVector.push(e.vec);
                } else {
                  if (this._editMode) {
                    this.vertContainer.addChildAt(e, t);
                  }
                  this.vertVector.splice(t, 0, e.vec);
                }
              };
              d.removeVert = function (e = -1) {
                if (e < 0) {
                  e = this.vertContainer.numChildren - 1;
                  this.vertContainer.removeChildAt(e);
                  this.vertVector.pop();
                } else {
                  this.vertContainer.removeChildAt(e);
                  this.vertVector.splice(e, 1);
                }
              };
              d.getVertAt = function (e) {
                return this.vertContainer.getChildAt(e);
              };
              d.getVertIndex = function (e) {
                return this.vertContainer.getChildIndex(e);
              };
              d.deselectAllVerts = function () {
                for (var e = this.numVerts, t = 0; t < e; t++) {
                  this.vertContainer.getChildAt(t).selected = false;
                }
              };
              d.resizeVerts = function () {
                for (var e = this.numVerts, t = 0; t < e; t++) {
                  var n = this.vertContainer.getChildAt(t);
                  n.selected = n.selected;
                }
              };
              d.drawEditMode = function (e, t, n = false) {};
              d.redraw = function () {
                this.drawShape();
              };
              d.populateVertContainer = function () {
                this.destroyVertContainer();
                this.vertContainer = new i.kx();
                for (var e = this.vertVector.length, t = 0; t < e; t++) {
                  var n = this.vertVector[t];
                  var r = new s.Hm();
                  r.scale.x = 1 / this.scale.x;
                  r.scale.y = 1 / this.scale.y;
                  r.edgeShape = this;
                  r.vec = n;
                  this.vertContainer.addChild(r);
                }
              };
              d.destroyVertContainer = function () {
                if (this.vertContainer) {
                  if (this.vertContainer.parent) {
                    this.vertContainer.parent.removeChild(this.vertContainer);
                  }
                  this.vertContainer = null;
                }
              };
              d.recenter = function () {
                for (var e = this.numVerts, t = 0, n = 0, r = 0, i = 0, s = 0; s < e; s++) {
                  var a = this.vertVector[s];
                  if (a.x < t) {
                    t = a.x;
                  }
                  if (a.x > r) {
                    r = a.x;
                  }
                  if (a.y < n) {
                    n = a.y;
                  }
                  if (a.y > i) {
                    i = a.y;
                  }
                }
                var o = (t + r) * 0.5;
                var h = (n + i) * 0.5;
                for (var l = 0; l < e; l++) {
                  var d = this.vertVector[l];
                  d.x -= o;
                  d.y -= h;
                }
                this.xUnbound = this.x + o;
                this.yUnbound = this.y + h;
              };
              d.setDefaultDimensions = function () {
                for (var e = this.numVerts, t = 0, n = 0, r = 0, i = 0, s = 0; s < e; s++) {
                  var a = this.vertVector[s];
                  if (a.x < t) {
                    t = a.x;
                  }
                  if (a.x > r) {
                    r = a.x;
                  }
                  if (a.y < n) {
                    n = a.y;
                  }
                  if (a.y > i) {
                    i = a.y;
                  }
                }
                this.defaultWidth = r - t;
                this.defaultHeight = i - n;
              };
              d.reverse = function () {
                var e = this.numVerts;
                this.vertVector.reverse();
                for (var t = 0; t < e; t++) {
                  var n = this.vertVector[t];
                  n.x = -n.x;
                }
                this.drawShape();
                this.drawBoundingBox();
                this.invalidateLocalBounds();
                this.x = this.x;
                this.y = this.y;
                this.vID = s.tD.getIDCounter();
              };
              h = t;
              if (l = [{
                key: "numVerts",
                get: function () {
                  return this.vertVector.length;
                }
              }, {
                key: "shapeWidth",
                get: function () {
                  return Math.round(this.scaleX * this.defaultWidth);
                },
                set: function (e) {
                  if (e != 0) {
                    this.scaleX = this.defaultWidth > 0 ? e / this.defaultWidth : 1;
                  }
                }
              }, {
                key: "shapeHeight",
                get: function () {
                  return Math.round(this.scaleY * this.defaultHeight);
                },
                set: function (e) {
                  if (e != 0) {
                    this.scaleY = this.defaultHeight > 0 ? e / this.defaultHeight : 1;
                  }
                }
              }, {
                key: "vID",
                get: function () {
                  return this._vID;
                },
                set: function (e) {}
              }, {
                key: "editMode",
                get: function () {
                  return this._editMode;
                },
                set: function (e) {
                  this._editMode = e;
                  if (this._editMode) {
                    this.populateVertContainer();
                    this.addChild(this.vertContainer);
                    this.blendMode = i.Nx.INVERT;
                  } else {
                    this.destroyVertContainer();
                    this.drawShape();
                    this.blendMode = i.Nx.NORMAL;
                    this.invalidateLocalBounds();
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
                    Object.defineProperty(e, a(r.key), r);
                  }
                })(h.prototype, l);
              }
              Object.defineProperty(h, "prototype", {
                writable: false
              });
              return h;
            }(r.HQ);
          },
        70706(e, t, n) {
            "use strict";
        
            n.d(t, {
              k: () => l
            });
            n(62010);
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
              function t(t, n, i, s, a, o, h, l) {
                var d;
                if (t === undefined) {
                  t = true;
                }
                if (n === undefined) {
                  n = true;
                }
                if (i === undefined) {
                  i = false;
                }
                if (s === undefined) {
                  s = 1;
                }
                if (a === undefined) {
                  a = 4032711;
                }
                if (o === undefined) {
                  o = -1;
                }
                if (h === undefined) {
                  h = 100;
                }
                if (l === undefined) {
                  l = 1;
                }
                (d = e.call(this, t, n, i, s, a, o, h, l) || this).vertContainer = new r.kx();
                d.scalable = true;
                d.minDimension = 0.1;
                d.maxDimension = 10;
                d.name = "polygon shape";
                d._type = "PolygonShape";
                d.doubleClickEnabled = true;
                return d;
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
                if (this._interactive) {
                  this._attributes = ["x", "y", "shapeWidth", "shapeHeight", "angle", "color", "outlineColor", "opacity", "immovable", "collision"];
                } else {
                  this._attributes = ["x", "y", "shapeWidth", "shapeHeight", "angle", "color", "outlineColor", "opacity"];
                }
                this.addTriggerProperties();
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
                    i.push(r.e.LINE_TO);
                    s.push(l.x, l.y);
                    o = l;
                  }
                }
                if (e) {
                  this.graphics.lineStyle(0, 0, 0.5, false);
                  if (t) {
                    i.push(r.e.LINE_TO);
                    s.push(e.x, e.y);
                    this.graphics.drawPath(i, s, r.tl.EVEN_ODD);
                    this.graphics.endFill();
                  } else {
                    if (n) {
                      i.push(r.e.LINE_TO);
                      s.push(e.x, e.y);
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
                    this.graphics.lineStyle(0, this._outlineColor, 1, true);
                  }
                  if (this._color === -1) {
                    this.graphics.beginFill(this._color, 0.000001);
                  } else {
                    this.graphics.beginFill(this._color, 1);
                  }
                  var i = this.vertVector?.length;
                  if (i > 0) {
                    var s = this.vertVector[0];
                    t.push(r.e.MOVE_TO);
                    n.push(s.x);
                    n.push(s.y);
                    for (var o = 1; o < i; o++) {
                      s = this.vertVector[o];
                      t.push(r.e.LINE_TO);
                      n.push(s.x);
                      n.push(s.y);
                    }
                    s = this.vertVector[0];
                    t.push(r.e.LINE_TO);
                    n.push(s.x);
                    n.push(s.y);
                    this.graphics.drawPath(t, n, r.tl.NON_ZERO);
                    this.graphics.endFill();
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
                  t.graphics.lineStyle(0, this._outlineColor, 1, true);
                }
                if (this._color >= 0) {
                  t.graphics.beginFill(this._color, 1);
                }
                var n = new Array();
                var i = new Array();
                var s = this.vertVector[0];
                n.push(r.e.MOVE_TO);
                i.push(s.x);
                i.push(s.y);
                for (var a = this.vertVector.length, o = 1; o < a; o++) {
                  s = this.vertVector[o];
                  n.push(r.e.LINE_TO);
                  i.push(s.x);
                  i.push(s.y);
                }
                s = this.vertVector[0];
                n.push(r.e.LINE_TO);
                i.push(s.x);
                i.push(s.y);
                t.graphics.drawPath(n, i, r.tl.NON_ZERO);
                t.graphics.endFill();
                t.x = this.x;
                t.y = this.y;
                t.scaleX = this.scaleX;
                t.scaleY = this.scaleY;
                t.rotation = this.rotation;
                t.alpha = this._opacity;
                return t;
              };
              c.getCenteredSprite = function (e) {
                var t = new r.kx();
                if (this._opacity == 0 || this._outlineColor < 0 && this._color < 0) {
                  t.visible = false;
                }
                if (this.outlineColor >= 0) {
                  t.graphics.lineStyle(0, this._outlineColor, 1, true);
                }
                if (this.color >= 0) {
                  t.graphics.beginFill(this._color, 1);
                }
                var n = new Array();
                var i = new Array();
                var s = this.vertVector[0];
                n.push(r.e.MOVE_TO);
                i.push(this.scaleX * s.x - e.x);
                i.push(this.scaleY * s.y - e.y);
                for (var a = this.vertVector.length, o = 1; o < a; o++) {
                  s = this.vertVector[o];
                  n.push(r.e.LINE_TO);
                  i.push(this.scaleX * s.x - e.x);
                  i.push(this.scaleY * s.y - e.y);
                }
                s = s = this.vertVector[0];
                n.push(r.e.LINE_TO);
                i.push(this.scaleX * s.x - e.x);
                i.push(this.scaleY * s.y - e.y);
                t.graphics.drawPath(n, i, r.tl.NON_ZERO);
                t.graphics.endFill();
                t.x = this.x;
                t.y = this.y;
                t.rotation = this.rotation;
                t.alpha = this._opacity;
                return t;
              };
              c.clone = function () {
                var e = new t(this.interactive, this.immovable, this.sleeping, this.density, this.color, this.outlineColor, this.opacity, this.collision);
                for (var n = this.numVerts, r = 0; r < n; r++) {
                  var i = this.vertVector[r].Copy();
                  e.vertVector.push(i);
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
                  s.tD.updateIdCounter(e);
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
