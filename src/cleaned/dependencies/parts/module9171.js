(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        9171(e, t, n) {
            "use strict";
        
            n.d(t, {
              cz: () => o,
              dC: () => c,
              mc: () => p,
              q9: () => d
            });
            var r = n(55323);
            var i = n(38499);
            var s = n(88604);
            var a = n(11313);
            r.W0.SORTABLE_CHILDREN = false;
            var o = function () {
              function e() {
                this.minX = Infinity;
                this.minY = Infinity;
                this.maxX = -Infinity;
                this.maxY = -Infinity;
                this.rect = null;
                this.updateID = -1;
              }
              e.prototype.isEmpty = function () {
                return this.minX > this.maxX || this.minY > this.maxY;
              };
              e.prototype.clear = function () {
                this.minX = Infinity;
                this.minY = Infinity;
                this.maxX = -Infinity;
                this.maxY = -Infinity;
              };
              e.prototype.getRectangle = function (e) {
                if (this.minX > this.maxX || this.minY > this.maxY) {
                  return i.M_.EMPTY;
                } else {
                  (e = e || new i.M_(0, 0, 1, 1)).x = this.minX;
                  e.y = this.minY;
                  e.width = this.maxX - this.minX;
                  e.height = this.maxY - this.minY;
                  return e;
                }
              };
              e.prototype.addPoint = function (e) {
                this.minX = Math.min(this.minX, e.x);
                this.maxX = Math.max(this.maxX, e.x);
                this.minY = Math.min(this.minY, e.y);
                this.maxY = Math.max(this.maxY, e.y);
              };
              e.prototype.addPointMatrix = function (e, t) {
                var n = e.a;
                var r = e.b;
                var i = e.c;
                var s = e.d;
                var a = e.tx;
                var o = e.ty;
                var h = n * t.x + i * t.y + a;
                var l = r * t.x + s * t.y + o;
                this.minX = Math.min(this.minX, h);
                this.maxX = Math.max(this.maxX, h);
                this.minY = Math.min(this.minY, l);
                this.maxY = Math.max(this.maxY, l);
              };
              e.prototype.addQuad = function (e) {
                var t = this.minX;
                var n = this.minY;
                var r = this.maxX;
                var i = this.maxY;
                var s = e[0];
                var a = e[1];
                t = s < t ? s : t;
                n = a < n ? a : n;
                r = s > r ? s : r;
                i = a > i ? a : i;
                t = (s = e[2]) < t ? s : t;
                n = (a = e[3]) < n ? a : n;
                r = s > r ? s : r;
                i = a > i ? a : i;
                t = (s = e[4]) < t ? s : t;
                n = (a = e[5]) < n ? a : n;
                r = s > r ? s : r;
                i = a > i ? a : i;
                t = (s = e[6]) < t ? s : t;
                n = (a = e[7]) < n ? a : n;
                r = s > r ? s : r;
                i = a > i ? a : i;
                this.minX = t;
                this.minY = n;
                this.maxX = r;
                this.maxY = i;
              };
              e.prototype.addFrame = function (e, t, n, r, i) {
                this.addFrameMatrix(e.worldTransform, t, n, r, i);
              };
              e.prototype.addFrameMatrix = function (e, t, n, r, i) {
                var s = e.a;
                var a = e.b;
                var o = e.c;
                var h = e.d;
                var l = e.tx;
                var d = e.ty;
                var c = this.minX;
                var u = this.minY;
                var p = this.maxX;
                var m = this.maxY;
                var f = s * t + o * n + l;
                var _ = a * t + h * n + d;
                c = f < c ? f : c;
                u = _ < u ? _ : u;
                p = f > p ? f : p;
                m = _ > m ? _ : m;
                c = (f = s * r + o * n + l) < c ? f : c;
                u = (_ = a * r + h * n + d) < u ? _ : u;
                p = f > p ? f : p;
                m = _ > m ? _ : m;
                c = (f = s * t + o * i + l) < c ? f : c;
                u = (_ = a * t + h * i + d) < u ? _ : u;
                p = f > p ? f : p;
                m = _ > m ? _ : m;
                c = (f = s * r + o * i + l) < c ? f : c;
                u = (_ = a * r + h * i + d) < u ? _ : u;
                p = f > p ? f : p;
                m = _ > m ? _ : m;
                this.minX = c;
                this.minY = u;
                this.maxX = p;
                this.maxY = m;
              };
              e.prototype.addVertexData = function (e, t, n) {
                var r = this.minX;
                var i = this.minY;
                var s = this.maxX;
                var a = this.maxY;
                for (var o = t; o < n; o += 2) {
                  var h = e[o];
                  var l = e[o + 1];
                  r = h < r ? h : r;
                  i = l < i ? l : i;
                  s = h > s ? h : s;
                  a = l > a ? l : a;
                }
                this.minX = r;
                this.minY = i;
                this.maxX = s;
                this.maxY = a;
              };
              e.prototype.addVertices = function (e, t, n, r) {
                this.addVerticesMatrix(e.worldTransform, t, n, r);
              };
              e.prototype.addVerticesMatrix = function (e, t, n, r, i = 0, s = i) {
                var a = e.a;
                var o = e.b;
                var h = e.c;
                var l = e.d;
                var d = e.tx;
                var c = e.ty;
                var u = this.minX;
                var p = this.minY;
                var m = this.maxX;
                var f = this.maxY;
                for (var _ = n; _ < r; _ += 2) {
                  var v = t[_];
                  var y = t[_ + 1];
                  var g = a * v + h * y + d;
                  var w = l * y + o * v + c;
                  u = Math.min(u, g - i);
                  m = Math.max(m, g + i);
                  p = Math.min(p, w - s);
                  f = Math.max(f, w + s);
                }
                this.minX = u;
                this.minY = p;
                this.maxX = m;
                this.maxY = f;
              };
              e.prototype.addBounds = function (e) {
                var t = this.minX;
                var n = this.minY;
                var r = this.maxX;
                var i = this.maxY;
                this.minX = e.minX < t ? e.minX : t;
                this.minY = e.minY < n ? e.minY : n;
                this.maxX = e.maxX > r ? e.maxX : r;
                this.maxY = e.maxY > i ? e.maxY : i;
              };
              e.prototype.addBoundsMask = function (e, t) {
                var n = e.minX > t.minX ? e.minX : t.minX;
                var r = e.minY > t.minY ? e.minY : t.minY;
                var i = e.maxX < t.maxX ? e.maxX : t.maxX;
                var s = e.maxY < t.maxY ? e.maxY : t.maxY;
                if (n <= i && r <= s) {
                  var a = this.minX;
                  var o = this.minY;
                  var h = this.maxX;
                  var l = this.maxY;
                  this.minX = n < a ? n : a;
                  this.minY = r < o ? r : o;
                  this.maxX = i > h ? i : h;
                  this.maxY = s > l ? s : l;
                }
              };
              e.prototype.addBoundsMatrix = function (e, t) {
                this.addFrameMatrix(t, e.minX, e.minY, e.maxX, e.maxY);
              };
              e.prototype.addBoundsArea = function (e, t) {
                var n = e.minX > t.x ? e.minX : t.x;
                var r = e.minY > t.y ? e.minY : t.y;
                var i = e.maxX < t.x + t.width ? e.maxX : t.x + t.width;
                var s = e.maxY < t.y + t.height ? e.maxY : t.y + t.height;
                if (n <= i && r <= s) {
                  var a = this.minX;
                  var o = this.minY;
                  var h = this.maxX;
                  var l = this.maxY;
                  this.minX = n < a ? n : a;
                  this.minY = r < o ? r : o;
                  this.maxX = i > h ? i : h;
                  this.maxY = s > l ? s : l;
                }
              };
              e.prototype.pad = function (e = 0, t = e) {
                if (!this.isEmpty()) {
                  this.minX -= e;
                  this.maxX += e;
                  this.minY -= t;
                  this.maxY += t;
                }
              };
              e.prototype.addFramePad = function (e, t, n, r, i, s) {
                e -= i;
                t -= s;
                n += i;
                r += s;
                this.minX = this.minX < e ? this.minX : e;
                this.maxX = this.maxX > n ? this.maxX : n;
                this.minY = this.minY < t ? this.minY : t;
                this.maxY = this.maxY > r ? this.maxY : r;
              };
              return e;
            }();
            function h(e, t) {
              h = Object.setPrototypeOf || {
                __proto__: []
              } instanceof Array && function (e, t) {
                e.__proto__ = t;
              } || function (e, t) {
                for (var n in t) {
                  if (t.hasOwnProperty(n)) {
                    e[n] = t[n];
                  }
                }
              };
              return h(e, t);
            }
            function l(e, t) {
              function n() {
                this.constructor = e;
              }
              h(e, t);
              e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
            }
            var d = function (e) {
              function t() {
                var t = e.call(this) || this;
                t.tempDisplayObjectParent = null;
                t.transform = new i.dL();
                t.alpha = 1;
                t.visible = true;
                t.renderable = true;
                t.cullable = false;
                t.cullArea = null;
                t.parent = null;
                t.worldAlpha = 1;
                t._lastSortedIndex = 0;
                t._zIndex = 0;
                t.filterArea = null;
                t.filters = null;
                t._enabledFilters = null;
                t._bounds = new o();
                t._localBounds = null;
                t._boundsID = 0;
                t._boundsRect = null;
                t._localBoundsRect = null;
                t._mask = null;
                t._maskRefCount = 0;
                t._destroyed = false;
                t.isSprite = false;
                t.isMask = false;
                return t;
              }
              l(t, e);
              t.mixin = function (e) {
                for (var n = Object.keys(e), r = 0; r < n.length; ++r) {
                  var i = n[r];
                  Object.defineProperty(t.prototype, i, Object.getOwnPropertyDescriptor(e, i));
                }
              };
              Object.defineProperty(t.prototype, "destroyed", {
                get: function () {
                  return this._destroyed;
                },
                enumerable: false,
                configurable: true
              });
              t.prototype._recursivePostUpdateTransform = function () {
                if (this.parent) {
                  this.parent._recursivePostUpdateTransform();
                  this.transform.updateTransform(this.parent.transform);
                } else {
                  this.transform.updateTransform(this._tempDisplayObjectParent.transform);
                }
              };
              t.prototype.updateTransform = function () {
                this._boundsID++;
                this.transform.updateTransform(this.parent.transform);
                this.worldAlpha = this.alpha * this.parent.worldAlpha;
              };
              t.prototype.getBounds = function (e, t) {
                if (!e) {
                  if (this.parent) {
                    this._recursivePostUpdateTransform();
                    this.updateTransform();
                  } else {
                    this.parent = this._tempDisplayObjectParent;
                    this.updateTransform();
                    this.parent = null;
                  }
                }
                if (this._bounds.updateID !== this._boundsID) {
                  this.calculateBounds();
                  this._bounds.updateID = this._boundsID;
                }
                if (!t) {
                  this._boundsRect ||= new i.M_();
                  t = this._boundsRect;
                }
                return this._bounds.getRectangle(t);
              };
              t.prototype.getLocalBounds = function (e) {
                if (!e) {
                  this._localBoundsRect ||= new i.M_();
                  e = this._localBoundsRect;
                }
                this._localBounds ||= new o();
                var t = this.transform;
                var n = this.parent;
                this.parent = null;
                this.transform = this._tempDisplayObjectParent.transform;
                var r = this._bounds;
                var s = this._boundsID;
                this._bounds = this._localBounds;
                var a = this.getBounds(false, e);
                this.parent = n;
                this.transform = t;
                this._bounds = r;
                this._bounds.updateID += this._boundsID - s;
                return a;
              };
              t.prototype.toGlobal = function (e, t, n = false) {
                if (!n) {
                  this._recursivePostUpdateTransform();
                  if (this.parent) {
                    this.displayObjectUpdateTransform();
                  } else {
                    this.parent = this._tempDisplayObjectParent;
                    this.displayObjectUpdateTransform();
                    this.parent = null;
                  }
                }
                return this.worldTransform.apply(e, t);
              };
              t.prototype.toLocal = function (e, t, n, r) {
                if (t) {
                  e = t.toGlobal(e, n, r);
                }
                if (!r) {
                  this._recursivePostUpdateTransform();
                  if (this.parent) {
                    this.displayObjectUpdateTransform();
                  } else {
                    this.parent = this._tempDisplayObjectParent;
                    this.displayObjectUpdateTransform();
                    this.parent = null;
                  }
                }
                return this.worldTransform.applyInverse(e, n);
              };
              t.prototype.setParent = function (e) {
                if (!e || !e.addChild) {
                  throw new Error("setParent: Argument must be a Container");
                }
                e.addChild(this);
                return e;
              };
              t.prototype.setTransform = function (e = 0, t = 0, n = 1, r = 1, i = 0, s = 0, a = 0, o = 0, h = 0) {
                this.position.x = e;
                this.position.y = t;
                this.scale.x = n || 1;
                this.scale.y = r || 1;
                this.rotation = i;
                this.skew.x = s;
                this.skew.y = a;
                this.pivot.x = o;
                this.pivot.y = h;
                return this;
              };
              t.prototype.destroy = function (e) {
                if (this.parent) {
                  this.parent.removeChild(this);
                }
                this._destroyed = true;
                this.transform = null;
                this.parent = null;
                this._bounds = null;
                this.mask = null;
                this.cullArea = null;
                this.filters = null;
                this.filterArea = null;
                this.hitArea = null;
                this.interactive = false;
                this.interactiveChildren = false;
                this.emit("destroyed");
                this.removeAllListeners();
              };
              Object.defineProperty(t.prototype, "_tempDisplayObjectParent", {
                get: function () {
                  if (this.tempDisplayObjectParent === null) {
                    this.tempDisplayObjectParent = new c();
                  }
                  return this.tempDisplayObjectParent;
                },
                enumerable: false,
                configurable: true
              });
              t.prototype.enableTempParent = function () {
                var e = this.parent;
                this.parent = this._tempDisplayObjectParent;
                return e;
              };
              t.prototype.disableTempParent = function (e) {
                this.parent = e;
              };
              Object.defineProperty(t.prototype, "x", {
                get: function () {
                  return this.position.x;
                },
                set: function (e) {
                  this.transform.position.x = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "y", {
                get: function () {
                  return this.position.y;
                },
                set: function (e) {
                  this.transform.position.y = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "worldTransform", {
                get: function () {
                  return this.transform.worldTransform;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "localTransform", {
                get: function () {
                  return this.transform.localTransform;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "position", {
                get: function () {
                  return this.transform.position;
                },
                set: function (e) {
                  this.transform.position.copyFrom(e);
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "scale", {
                get: function () {
                  return this.transform.scale;
                },
                set: function (e) {
                  this.transform.scale.copyFrom(e);
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "pivot", {
                get: function () {
                  return this.transform.pivot;
                },
                set: function (e) {
                  this.transform.pivot.copyFrom(e);
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "skew", {
                get: function () {
                  return this.transform.skew;
                },
                set: function (e) {
                  this.transform.skew.copyFrom(e);
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "rotation", {
                get: function () {
                  return this.transform.rotation;
                },
                set: function (e) {
                  this.transform.rotation = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "angle", {
                get: function () {
                  return this.transform.rotation * i.bO;
                },
                set: function (e) {
                  this.transform.rotation = e * i.Td;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "zIndex", {
                get: function () {
                  return this._zIndex;
                },
                set: function (e) {
                  this._zIndex = e;
                  if (this.parent) {
                    this.parent.sortDirty = true;
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "worldVisible", {
                get: function () {
                  var e = this;
                  do {
                    if (!e.visible) {
                      return false;
                    }
                    e = e.parent;
                  } while (e);
                  return true;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "mask", {
                get: function () {
                  return this._mask;
                },
                set: function (e) {
                  var t;
                  if (this._mask !== e) {
                    if (this._mask && (t = this._mask.isMaskData ? this._mask.maskObject : this._mask)) {
                      t._maskRefCount--;
                      if (t._maskRefCount === 0) {
                        t.renderable = true;
                        t.isMask = false;
                      }
                    }
                    this._mask = e;
                    if (this._mask && (t = this._mask.isMaskData ? this._mask.maskObject : this._mask)) {
                      if (t._maskRefCount === 0) {
                        t.renderable = false;
                        t.isMask = true;
                      }
                      t._maskRefCount++;
                    }
                  }
                },
                enumerable: false,
                configurable: true
              });
              return t;
            }(s.EventEmitter);
            var c = function (e) {
              function t() {
                var t = e !== null && e.apply(this, arguments) || this;
                t.sortDirty = null;
                return t;
              }
              l(t, e);
              return t;
            }(d);
            function u(e, t) {
              if (e.zIndex === t.zIndex) {
                return e._lastSortedIndex - t._lastSortedIndex;
              } else {
                return e.zIndex - t.zIndex;
              }
            }
            d.prototype.displayObjectUpdateTransform = d.prototype.updateTransform;
            var p = function (e) {
              function t() {
                var t = e.call(this) || this;
                t.children = [];
                t.sortableChildren = r.W0.SORTABLE_CHILDREN;
                t.sortDirty = false;
                return t;
              }
              l(t, e);
              t.prototype.onChildrenChange = function (e) {};
              t.prototype.addChild = function () {
                var e = arguments;
                var t = [];
                for (var n = 0; n < arguments.length; n++) {
                  t[n] = e[n];
                }
                if (t.length > 1) {
                  for (var r = 0; r < t.length; r++) {
                    this.addChild(t[r]);
                  }
                } else {
                  var i = t[0];
                  if (i.parent) {
                    i.parent.removeChild(i);
                  }
                  i.parent = this;
                  this.sortDirty = true;
                  i.transform._parentID = -1;
                  this.children.push(i);
                  this._boundsID++;
                  this.onChildrenChange(this.children.length - 1);
                  this.emit("childAdded", i, this, this.children.length - 1);
                  i.emit("added", this);
                }
                return t[0];
              };
              t.prototype.addChildAt = function (e, t) {
                if (t < 0 || t > this.children.length) {
                  throw new Error(e + "addChildAt: The index " + t + " supplied is out of bounds " + this.children.length);
                }
                if (e.parent) {
                  e.parent.removeChild(e);
                }
                e.parent = this;
                this.sortDirty = true;
                e.transform._parentID = -1;
                this.children.splice(t, 0, e);
                this._boundsID++;
                this.onChildrenChange(t);
                e.emit("added", this);
                this.emit("childAdded", e, this, t);
                return e;
              };
              t.prototype.swapChildren = function (e, t) {
                if (e !== t) {
                  var n = this.getChildIndex(e);
                  var r = this.getChildIndex(t);
                  this.children[n] = t;
                  this.children[r] = e;
                  this.onChildrenChange(n < r ? n : r);
                }
              };
              t.prototype.getChildIndex = function (e) {
                var t = this.children.indexOf(e);
                if (t === -1) {
                  throw new Error("The supplied DisplayObject must be a child of the caller");
                }
                return t;
              };
              t.prototype.setChildIndex = function (e, t) {
                if (t < 0 || t >= this.children.length) {
                  throw new Error("The index " + t + " supplied is out of bounds " + this.children.length);
                }
                var n = this.getChildIndex(e);
                (0, s.removeItems)(this.children, n, 1);
                this.children.splice(t, 0, e);
                this.onChildrenChange(t);
              };
              t.prototype.getChildAt = function (e) {
                if (e < 0 || e >= this.children.length) {
                  throw new Error("getChildAt: Index (" + e + ") does not exist.");
                }
                return this.children[e];
              };
              t.prototype.removeChild = function () {
                var e = arguments;
                var t = [];
                for (var n = 0; n < arguments.length; n++) {
                  t[n] = e[n];
                }
                if (t.length > 1) {
                  for (var r = 0; r < t.length; r++) {
                    this.removeChild(t[r]);
                  }
                } else {
                  var i = t[0];
                  var a = this.children.indexOf(i);
                  if (a === -1) {
                    return null;
                  }
                  i.parent = null;
                  i.transform._parentID = -1;
                  (0, s.removeItems)(this.children, a, 1);
                  this._boundsID++;
                  this.onChildrenChange(a);
                  i.emit("removed", this);
                  this.emit("childRemoved", i, this, a);
                }
                return t[0];
              };
              t.prototype.removeChildAt = function (e) {
                var t = this.getChildAt(e);
                t.parent = null;
                t.transform._parentID = -1;
                (0, s.removeItems)(this.children, e, 1);
                this._boundsID++;
                this.onChildrenChange(e);
                t.emit("removed", this);
                this.emit("childRemoved", t, this, e);
                return t;
              };
              t.prototype.removeChildren = function (e = 0, t = this.children.length) {
                var n;
                var r = e;
                var i = t - r;
                if (i > 0 && i <= t) {
                  n = this.children.splice(r, i);
                  for (var s = 0; s < n.length; ++s) {
                    n[s].parent = null;
                    if (n[s].transform) {
                      n[s].transform._parentID = -1;
                    }
                  }
                  this._boundsID++;
                  this.onChildrenChange(e);
                  s = 0;
                  for (; s < n.length; ++s) {
                    n[s].emit("removed", this);
                    this.emit("childRemoved", n[s], this, s);
                  }
                  return n;
                }
                if (i === 0 && this.children.length === 0) {
                  return [];
                }
                throw new RangeError("removeChildren: numeric values are outside the acceptable range.");
              };
              t.prototype.sortChildren = function () {
                var e = false;
                for (var t = 0, n = this.children.length; t < n; ++t) {
                  var r = this.children[t];
                  r._lastSortedIndex = t;
                  if (!e && r.zIndex !== 0) {
                    e = true;
                  }
                }
                if (e && this.children.length > 1) {
                  this.children.sort(u);
                }
                this.sortDirty = false;
              };
              t.prototype.updateTransform = function () {
                if (this.sortableChildren && this.sortDirty) {
                  this.sortChildren();
                }
                this._boundsID++;
                this.transform.updateTransform(this.parent.transform);
                this.worldAlpha = this.alpha * this.parent.worldAlpha;
                for (var e = 0, t = this.children.length; e < t; ++e) {
                  var n = this.children[e];
                  if (n.visible) {
                    n.updateTransform();
                  }
                }
              };
              t.prototype.calculateBounds = function () {
                this._bounds.clear();
                this._calculateBounds();
                for (var e = 0; e < this.children.length; e++) {
                  var t = this.children[e];
                  if (t.visible && t.renderable) {
                    t.calculateBounds();
                    if (t._mask) {
                      var n = t._mask.isMaskData ? t._mask.maskObject : t._mask;
                      if (n) {
                        n.calculateBounds();
                        this._bounds.addBoundsMask(t._bounds, n._bounds);
                      } else {
                        this._bounds.addBounds(t._bounds);
                      }
                    } else if (t.filterArea) {
                      this._bounds.addBoundsArea(t._bounds, t.filterArea);
                    } else {
                      this._bounds.addBounds(t._bounds);
                    }
                  }
                }
                this._bounds.updateID = this._boundsID;
              };
              t.prototype.getLocalBounds = function (t, n = false) {
                var r = e.prototype.getLocalBounds.call(this, t);
                if (!n) {
                  for (var i = 0, s = this.children.length; i < s; ++i) {
                    var a = this.children[i];
                    if (a.visible) {
                      a.updateTransform();
                    }
                  }
                }
                return r;
              };
              t.prototype._calculateBounds = function () {};
              t.prototype._renderWithCulling = function (e) {
                var n = e.renderTexture.sourceFrame;
                if (n.width > 0 && n.height > 0) {
                  var r;
                  var i;
                  if (this.cullArea) {
                    r = this.cullArea;
                    i = this.worldTransform;
                  } else if (this._render !== t.prototype._render) {
                    r = this.getBounds(true);
                  }
                  if (r && n.intersects(r, i)) {
                    this._render(e);
                  } else if (this.cullArea) {
                    return;
                  }
                  for (var s = 0, a = this.children.length; s < a; ++s) {
                    var o = this.children[s];
                    var h = o.cullable;
                    o.cullable = h || !this.cullArea;
                    o.render(e);
                    o.cullable = h;
                  }
                }
              };
              t.prototype.render = function (e) {
                if (this.visible && !(this.worldAlpha <= 0) && this.renderable) {
                  if (this._mask || this.filters && this.filters.length) {
                    this.renderAdvanced(e);
                  } else if (this.cullable) {
                    this._renderWithCulling(e);
                  } else {
                    this._render(e);
                    for (var t = 0, n = this.children.length; t < n; ++t) {
                      this.children[t].render(e);
                    }
                  }
                }
              };
              t.prototype.renderAdvanced = function (e) {
                var t = this.filters;
                var n = this._mask;
                if (t) {
                  this._enabledFilters ||= [];
                  this._enabledFilters.length = 0;
                  for (var r = 0; r < t.length; r++) {
                    if (t[r].enabled) {
                      this._enabledFilters.push(t[r]);
                    }
                  }
                }
                var i = t && this._enabledFilters && this._enabledFilters.length || n && (!n.isMaskData || n.enabled && (n.autoDetect || n.type !== a.vg.NONE));
                if (i) {
                  e.batch.flush();
                }
                if (t && this._enabledFilters && this._enabledFilters.length) {
                  e.filter.push(this, this._enabledFilters);
                }
                if (n) {
                  e.mask.push(this, this._mask);
                }
                if (this.cullable) {
                  this._renderWithCulling(e);
                } else {
                  this._render(e);
                  r = 0;
                  for (var s = this.children.length; r < s; ++r) {
                    this.children[r].render(e);
                  }
                }
                if (i) {
                  e.batch.flush();
                }
                if (n) {
                  e.mask.pop(this);
                }
                if (t && this._enabledFilters && this._enabledFilters.length) {
                  e.filter.pop();
                }
              };
              t.prototype._render = function (e) {};
              t.prototype.destroy = function (t) {
                e.prototype.destroy.call(this);
                this.sortDirty = false;
                var n = typeof t == "boolean" ? t : t && t.children;
                var r = this.removeChildren(0, this.children.length);
                if (n) {
                  for (var i = 0; i < r.length; ++i) {
                    r[i].destroy(t);
                  }
                }
              };
              Object.defineProperty(t.prototype, "width", {
                get: function () {
                  return this.scale.x * this.getLocalBounds().width;
                },
                set: function (e) {
                  var t = this.getLocalBounds().width;
                  this.scale.x = t !== 0 ? e / t : 1;
                  this._width = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(t.prototype, "height", {
                get: function () {
                  return this.scale.y * this.getLocalBounds().height;
                },
                set: function (e) {
                  var t = this.getLocalBounds().height;
                  this.scale.y = t !== 0 ? e / t : 1;
                  this._height = e;
                },
                enumerable: false,
                configurable: true
              });
              return t;
            }(d);
            p.prototype.containerUpdateTransform = p.prototype.updateTransform;
          }
    });
})();
