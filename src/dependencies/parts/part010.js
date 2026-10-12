(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        23170(e, t, n) {
            "use strict";
        
            function r(e) {
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
            n.d(t, {
              r: () => i
            });
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(26099);
            n(2892);
            var i = function () {
              function e(e, t = true) {
                this._refSprite = e;
                this._resetTested = t;
              }
              var t;
              var n;
              var i = e.prototype;
              i.undo = function () {};
              i.redo = function () {};
              i.die = function () {
                this._prevAction = null;
                if (this._nextAction) {
                  this._nextAction.die();
                }
                this._nextAction = null;
              };
              t = e;
              if (n = [{
                key: "refSprite",
                get: function () {
                  return this._refSprite;
                }
              }, {
                key: "prevAction",
                get: function () {
                  return this._prevAction;
                },
                set: function (e) {
                  this._prevAction = e;
                  if (e.nextAction != this) {
                    e.nextAction = this;
                  }
                }
              }, {
                key: "nextAction",
                get: function () {
                  return this._nextAction;
                },
                set: function (e) {
                  this._nextAction = e;
                  if (e.prevAction != this) {
                    e.prevAction = this;
                  }
                }
              }, {
                key: "firstAction",
                get: function () {
                  for (var e = this; e.prevAction;) {
                    e = e.prevAction;
                  }
                  return e;
                }
              }, {
                key: "lastAction",
                get: function () {
                  for (var e = this; e.nextAction;) {
                    e = e.nextAction;
                  }
                  return e;
                }
              }, {
                key: "resetTested",
                get: function () {
                  return this._resetTested;
                }
              }]) {
                (function (e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) {
                      i.writable = true;
                    }
                    Object.defineProperty(e, r(i.key), i);
                  }
                })(t.prototype, n);
              }
              Object.defineProperty(t, "prototype", {
                writable: false
              });
              return t;
            }();
          },
        98576(e, t, n) {
            "use strict";
        
            function r(e) {
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
            function i(e, t) {
              i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return i(e, t);
            }
            n.d(t, {
              X: () => s
            });
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(26099);
            n(2892);
            var s = function (e) {
              function t(t, n) {
                var r;
                (r = e.call(this, t) || this)._action = n;
                return r;
              }
              var n;
              var s;
              var a;
              var o;
              s = e;
              (n = t).prototype = Object.create(s.prototype);
              n.prototype.constructor = n;
              i(n, s);
              a = t;
              if (o = [{
                key: "action",
                get: function () {
                  return this._action;
                }
              }]) {
                (function (e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) {
                      i.writable = true;
                    }
                    Object.defineProperty(e, r(i.key), i);
                  }
                })(a.prototype, o);
              }
              Object.defineProperty(a, "prototype", {
                writable: false
              });
              return a;
            }(n(4971).Jh);
            s.GENERIC = "generic";
            s.TEMP = "temp";
            s.SCALE = "scale";
            s.TRANSLATE = "translate";
            s.ROTATE = "rotate";
            s.DEPTH = "depth";
            s.VERT = "vert";
          },
        54683(e, t, n) {
            "use strict";
        
            function r(e) {
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
            function i(e, t) {
              i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return i(e, t);
            }
            n.d(t, {
              c: () => s
            });
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(26099);
            n(2892);
            var s = function (e) {
              function t(t, n, r, i, s, a) {
                var o;
                if (s === undefined) {
                  s = null;
                }
                if (a === undefined) {
                  a = null;
                }
                (o = e.call(this, t) || this)._property = n;
                o._startVal = r;
                o._endVal = i;
                o._startPoint = s;
                o._endPoint = a;
                return o;
              }
              var n;
              var s;
              s = e;
              (n = t).prototype = Object.create(s.prototype);
              n.prototype.constructor = n;
              i(n, s);
              var a;
              var o;
              var h = t.prototype;
              h.undo = function () {
                this.refSprite[this._property] = this._startVal;
                if (this._startPoint) {
                  this.refSprite.x = this._startPoint.x;
                  this.refSprite.y = this._startPoint.y;
                }
              };
              h.redo = function () {
                this.refSprite[this._property] = this._endVal;
                if (this._endPoint) {
                  this.refSprite.x = this._endPoint.x;
                  this.refSprite.y = this._endPoint.y;
                }
              };
              h.setEndVal = function () {
                this._endVal = this.refSprite[this._property];
              };
              a = t;
              if (o = [{
                key: "endVal",
                set: function (e) {
                  this._endVal = e;
                }
              }]) {
                (function (e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) {
                      i.writable = true;
                    }
                    Object.defineProperty(e, r(i.key), i);
                  }
                })(a.prototype, o);
              }
              Object.defineProperty(a, "prototype", {
                writable: false
              });
              return a;
            }(n(23170).r);
          }
    });
})();
