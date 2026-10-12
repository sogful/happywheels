(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        51853(e, t, n) {
            "use strict";
        
            n.d(t, {
              R: () => s
            });
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(26099);
            n(2892);
            var r = n(71066);
            function i(e) {
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
            var s = function () {
              function e() {
                this.onUpdate = new r.Signal();
                this.updateBind = this.update.bind(this);
                this.active = false;
                this.deltaTime = 1;
                this.timeElapsed = 0;
                this.lastTime = 0;
                this.frameTime = -1;
                this.speed = 1;
              }
              var t;
              var n;
              var s = e.prototype;
              s.start = function () {
                if (!this.active) {
                  this.active = true;
                  if (!this.requested) {
                    requestAnimationFrame(this.updateBind);
                    this.requested = true;
                  }
                }
              };
              s.stop = function () {
                this.active &&= false;
              };
              s.update = function (e) {
                this.requested = false;
                if (this.active) {
                  requestAnimationFrame(this.updateBind);
                  this.requested = true;
                  this.frameTime = e;
                  var t = performance.now();
                  var n = t - this.lastTime;
                  if (n > 100) {
                    n = 100;
                  }
                  this.deltaTime = n * 0.06;
                  this.deltaTime *= this.speed;
                  this.onUpdate.dispatch(this.deltaTime);
                  this.lastTime = t;
                }
              };
              s.add = function (e, t) {
                this.onUpdate.add(e, t);
              };
              s.remove = function (e, t) {
                this.onUpdate.remove(e, t);
              };
              t = e;
              if (n = [{
                key: "count",
                get: function () {
                  return this.onUpdate.getNumListeners();
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
                    Object.defineProperty(e, i(r.key), r);
                  }
                })(t.prototype, n);
              }
              Object.defineProperty(t, "prototype", {
                writable: false
              });
              return t;
            }();
            s.instance = new s();
          },
        41616(e, t, n) {
            "use strict";
        
            n.d(t, {
              e: () => r
            });
            var r = {
              dirty: true,
              isTickBound: null,
              markDirty: function () {
                r.dirty = true;
              },
              shouldRender: function () {
                return r.isTickBound === null || !r.isTickBound() || !!r.dirty && (r.dirty = false, true);
              }
            };
            window.addEventListener("resize", r.markDirty);
          }
    });
})();
