(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        41443(e, t, n) {
            "use strict";
        
            n.d(t, {
              Rv: () => o,
              dQ: () => r,
              y: () => h
            });
            var r;
            var i = n(55323);
            var s = n(33523);
            i.W0.TARGET_FPMS = 0.06;
            (function (e) {
              e[e.INTERACTION = 50] = "INTERACTION";
              e[e.HIGH = 25] = "HIGH";
              e[e.NORMAL = 0] = "NORMAL";
              e[e.LOW = -25] = "LOW";
              e[e.UTILITY = -50] = "UTILITY";
            })(r ||= {});
            var a = function () {
              function e(e, t = null, n = 0, r = false) {
                this.next = null;
                this.previous = null;
                this._destroyed = false;
                this.fn = e;
                this.context = t;
                this.priority = n;
                this.once = r;
              }
              e.prototype.match = function (e, t = null) {
                return this.fn === e && this.context === t;
              };
              e.prototype.emit = function (e) {
                if (this.fn) {
                  if (this.context) {
                    this.fn.call(this.context, e);
                  } else {
                    this.fn(e);
                  }
                }
                var t = this.next;
                if (this.once) {
                  this.destroy(true);
                }
                if (this._destroyed) {
                  this.next = null;
                }
                return t;
              };
              e.prototype.connect = function (e) {
                this.previous = e;
                if (e.next) {
                  e.next.previous = this;
                }
                this.next = e.next;
                e.next = this;
              };
              e.prototype.destroy = function (e = false) {
                this._destroyed = true;
                this.fn = null;
                this.context = null;
                if (this.previous) {
                  this.previous.next = this.next;
                }
                if (this.next) {
                  this.next.previous = this.previous;
                }
                var t = this.next;
                this.next = e ? null : t;
                this.previous = null;
                return t;
              };
              return e;
            }();
            var o = function () {
              function e() {
                var e = this;
                this.autoStart = false;
                this.deltaTime = 1;
                this.lastTime = -1;
                this.speed = 1;
                this.started = false;
                this._requestId = null;
                this._maxElapsedMS = 100;
                this._minElapsedMS = 0;
                this._protected = false;
                this._lastFrame = -1;
                this._head = new a(null, null, Infinity);
                this.deltaMS = 1 / i.W0.TARGET_FPMS;
                this.elapsedMS = 1 / i.W0.TARGET_FPMS;
                this._tick = function (t) {
                  e._requestId = null;
                  if (e.started) {
                    e.update(t);
                    if (e.started && e._requestId === null && e._head.next) {
                      e._requestId = requestAnimationFrame(e._tick);
                    }
                  }
                };
              }
              e.prototype._requestIfNeeded = function () {
                if (this._requestId === null && this._head.next) {
                  this.lastTime = performance.now();
                  this._lastFrame = this.lastTime;
                  this._requestId = requestAnimationFrame(this._tick);
                }
              };
              e.prototype._cancelIfNeeded = function () {
                if (this._requestId !== null) {
                  cancelAnimationFrame(this._requestId);
                  this._requestId = null;
                }
              };
              e.prototype._startIfPossible = function () {
                if (this.started) {
                  this._requestIfNeeded();
                } else if (this.autoStart) {
                  this.start();
                }
              };
              e.prototype.add = function (e, t, n = r.NORMAL) {
                return this._addListener(new a(e, t, n));
              };
              e.prototype.addOnce = function (e, t, n = r.NORMAL) {
                return this._addListener(new a(e, t, n, true));
              };
              e.prototype._addListener = function (e) {
                var t = this._head.next;
                var n = this._head;
                if (t) {
                  while (t) {
                    if (e.priority > t.priority) {
                      e.connect(n);
                      break;
                    }
                    n = t;
                    t = t.next;
                  }
                  if (!e.previous) {
                    e.connect(n);
                  }
                } else {
                  e.connect(n);
                }
                this._startIfPossible();
                return this;
              };
              e.prototype.remove = function (e, t) {
                for (var n = this._head.next; n;) {
                  n = n.match(e, t) ? n.destroy() : n.next;
                }
                if (!this._head.next) {
                  this._cancelIfNeeded();
                }
                return this;
              };
              Object.defineProperty(e.prototype, "count", {
                get: function () {
                  if (!this._head) {
                    return 0;
                  }
                  var e = 0;
                  for (var t = this._head; t = t.next;) {
                    e++;
                  }
                  return e;
                },
                enumerable: false,
                configurable: true
              });
              e.prototype.start = function () {
                if (!this.started) {
                  this.started = true;
                  this._requestIfNeeded();
                }
              };
              e.prototype.stop = function () {
                if (this.started) {
                  this.started = false;
                  this._cancelIfNeeded();
                }
              };
              e.prototype.destroy = function () {
                if (!this._protected) {
                  this.stop();
                  for (var e = this._head.next; e;) {
                    e = e.destroy(true);
                  }
                  this._head.destroy();
                  this._head = null;
                }
              };
              e.prototype.update = function (e) {
                var t;
                if (e === undefined) {
                  e = performance.now();
                }
                if (e > this.lastTime) {
                  if ((t = this.elapsedMS = e - this.lastTime) > this._maxElapsedMS) {
                    t = this._maxElapsedMS;
                  }
                  t *= this.speed;
                  if (this._minElapsedMS) {
                    var n = e - this._lastFrame | 0;
                    if (n < this._minElapsedMS) {
                      return;
                    }
                    this._lastFrame = e - n % this._minElapsedMS;
                  }
                  this.deltaMS = t;
                  this.deltaTime = this.deltaMS * i.W0.TARGET_FPMS;
                  var r = this._head;
                  for (var s = r.next; s;) {
                    s = s.emit(this.deltaTime);
                  }
                  if (!r.next) {
                    this._cancelIfNeeded();
                  }
                } else {
                  this.deltaTime = this.deltaMS = this.elapsedMS = 0;
                }
                this.lastTime = e;
              };
              Object.defineProperty(e.prototype, "FPS", {
                get: function () {
                  return 1000 / this.elapsedMS;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "minFPS", {
                get: function () {
                  return 1000 / this._maxElapsedMS;
                },
                set: function (e) {
                  var t = Math.min(this.maxFPS, e);
                  var n = Math.min(Math.max(0, t) / 1000, i.W0.TARGET_FPMS);
                  this._maxElapsedMS = 1 / n;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "maxFPS", {
                get: function () {
                  if (this._minElapsedMS) {
                    return Math.round(1000 / this._minElapsedMS);
                  } else {
                    return 0;
                  }
                },
                set: function (e) {
                  if (e === 0) {
                    this._minElapsedMS = 0;
                  } else {
                    var t = Math.max(this.minFPS, e);
                    this._minElapsedMS = 1 / (t / 1000);
                  }
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e, "shared", {
                get: function () {
                  if (!e._shared) {
                    var t = e._shared = new e();
                    t.autoStart = true;
                    t._protected = true;
                  }
                  return e._shared;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e, "system", {
                get: function () {
                  if (!e._system) {
                    var t = e._system = new e();
                    t.autoStart = true;
                    t._protected = true;
                  }
                  return e._system;
                },
                enumerable: false,
                configurable: true
              });
              return e;
            }();
            var h = function () {
              function e() {}
              e.init = function (e) {
                var t = this;
                e = Object.assign({
                  autoStart: true,
                  sharedTicker: false
                }, e);
                Object.defineProperty(this, "ticker", {
                  set: function (e) {
                    if (this._ticker) {
                      this._ticker.remove(this.render, this);
                    }
                    this._ticker = e;
                    if (e) {
                      e.add(this.render, this, r.LOW);
                    }
                  },
                  get: function () {
                    return this._ticker;
                  }
                });
                this.stop = function () {
                  t._ticker.stop();
                };
                this.start = function () {
                  t._ticker.start();
                };
                this._ticker = null;
                this.ticker = e.sharedTicker ? o.shared : new o();
                if (e.autoStart) {
                  this.start();
                }
              };
              e.destroy = function () {
                if (this._ticker) {
                  var e = this._ticker;
                  this.ticker = null;
                  e.destroy();
                }
              };
              e.extension = s.A.Application;
              return e;
            }();
          }
    });
})();
