(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        79676(e, t, n) {
            "use strict";
        
            n.d(t, {
              Gm: () => d,
              Jm: () => h,
              Pg: () => u,
              zW: () => m,
              m: () => f.m,
              Gg: () => _.G,
              AX: () => v
            });
            var r = n(4971);
            var i = n(27453);
            n(69085);
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(26099);
            n(2892);
            var s = n(71500);
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
              function t(t, n, r, i, s) {
                var a;
                (a = e.call(this) || this)._maxVolume = 1;
                a._startTime = 0;
                Object.assign(a, s);
                a._sourceObject = n;
                a._sound = t;
                a._maxVolume = r;
                a._startTime = i;
                return a;
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
              d.areaCheck = function (e) {
                var t = this.calculateSoundTransform(e);
                if (t) {
                  this._soundChannel ||= i.xF.playSound(this._sound, {
                    loops: Infinity
                  });
                  if (this._soundChannel) {
                    this._soundChannel.volume = t.volume;
                    this._soundChannel.panning = t.panning;
                  }
                } else {
                  this.stopSound(false);
                }
              };
              d.calculateSoundTransform = function (e) {
                var n = this._sourceObject.GetWorldCenter();
                if (isNaN(n.x)) {
                  n.Set(0, 0);
                }
                var r = n.x - e.x;
                var i = n.y - e.y;
                var s = Math.abs(r);
                var a = Math.abs(i);
                if (s > t.xCutoff || a > t.yCutoff || this._maxVolume == 0) {
                  return null;
                }
                var o = (1 - s / t.xCutoff) * this._maxVolume;
                var h = (1 - a / t.yCutoff) * this._maxVolume;
                var l = Math.min(o, h);
                var d = r / t.xCutoff;
                return new v(l, d);
              };
              d.stopSound = function (e = true) {
                if (this._soundChannel) {
                  this._soundChannel.stop();
                  this._soundChannel = null;
                  if (e) {
                    this._remove = true;
                  }
                } else if (e) {
                  this._remove = true;
                }
              };
              d.fadeIn = function (e) {
                s.os.killTweensOf(this);
                this._remove = false;
                s.os.to(this, {
                  duration: e,
                  maxVolume: 1,
                  onComplete: this.fadeInComplete.bind(this)
                });
              };
              d.fadeInComplete = function () {};
              d.fadeOut = function (e) {
                s.os.killTweensOf(this);
                s.os.to(this, {
                  duration: e,
                  maxVolume: 0,
                  onComplete: this.fadeOutComplete.bind(this)
                });
              };
              d.fadeOutComplete = function () {
                this._remove = true;
              };
              d.fadeTo = function (e, t) {
                s.os.killTweensOf(this);
                this._remove = false;
                s.os.to(this, {
                  duration: t,
                  maxVolume: e
                });
              };
              h = t;
              if (l = [{
                key: "soundChannel",
                get: function () {
                  return this._soundChannel;
                }
              }, {
                key: "sound",
                get: function () {
                  return this._sound;
                }
              }, {
                key: "maxVolume",
                get: function () {
                  return this._maxVolume;
                },
                set: function (e) {
                  this._maxVolume = e;
                }
              }, {
                key: "remove",
                get: function () {
                  return this._remove;
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
            }(r.Qe);
            function l(e, t) {
              l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return l(e, t);
            }
            h.xCutoff = 16;
            h.yCutoff = 8;
            var d = function (e) {
              function t(n, s, a, o, h, l) {
                var d;
                (d = e.call(this, n, s, a, o, l) || this).soundCompleteBind = d.soundComplete.bind(d);
                var c = d.calculateSoundTransform(h);
                if (c) {
                  d._soundChannel = i.xF.playSound(n, c);
                  if (d._soundChannel) {
                    d._soundChannel.addEventListener(r.Jh.SOUND_COMPLETE, d.soundCompleteBind);
                  }
                } else {
                  var u = new r.Jh(t.AREA_SOUND_STOP);
                  u.target = d;
                  d.dispatchEvent(u);
                }
                return d;
              }
              var n;
              var s;
              s = e;
              (n = t).prototype = Object.create(s.prototype);
              n.prototype.constructor = n;
              l(n, s);
              var a = t.prototype;
              a.areaCheck = function (e) {
                var t = this.calculateSoundTransform(e);
                if (t) {
                  this._soundChannel.volume = t.volume;
                  this._soundChannel.panning = t.panning;
                } else {
                  this.stopSound();
                }
              };
              a.soundComplete = function (e) {
                this._soundChannel.removeEventListener(r.Jh.SOUND_COMPLETE, this.soundCompleteBind);
                this._soundChannel = null;
                this._remove = true;
                var n = new r.Jh(t.AREA_SOUND_STOP);
                n.target = this;
                this.dispatchEvent(n);
              };
              a.stopSound = function (e = true) {
                if (this._soundChannel) {
                  this._soundChannel.removeEventListener(r.Jh.SOUND_COMPLETE, this.soundCompleteBind);
                  this._soundChannel.stop();
                  this._soundChannel = null;
                  if (e) {
                    this._remove = true;
                  }
                  var n = new r.Jh(t.AREA_SOUND_STOP);
                  n.target = this;
                  this.dispatchEvent(n);
                }
              };
              return t;
            }(h);
            function c(e, t) {
              c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return c(e, t);
            }
            d.AREA_SOUND_STOP = "areasoundstop";
            var u = function (e) {
              function t(t, n, r, i) {
                var s;
                (s = e.call(this, t, null, r, i) || this)._coordinates = n;
                return s;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              c(n, r);
              t.prototype.calculateSoundTransform = function (e) {
                var n = this._coordinates.x - e.x;
                var r = this._coordinates.y - e.y;
                var i = Math.abs(n);
                var s = Math.abs(r);
                if (i > t.xCutoff || s > t.yCutoff || this._maxVolume == 0) {
                  return null;
                }
                var a = (1 - i / t.xCutoff) * this._maxVolume;
                var o = (1 - s / t.yCutoff) * this._maxVolume;
                var h = Math.min(a, o);
                var l = n / t.xCutoff;
                return new v(h, l);
              };
              return t;
            }(h);
            function p(e, t) {
              p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return p(e, t);
            }
            var m = function (e) {
              function t(t, n, r, i, s) {
                var a;
                var o = n.Copy();
                if (!(a = e.call(this, t, null, r, i, s, {
                  _point: o
                }) || this)._point) {
                  a._point = n.Copy();
                }
                return a;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              p(n, r);
              t.prototype.calculateSoundTransform = function (e) {
                var n = this._point.x - e.x;
                var r = this._point.y - e.y;
                var i = Math.abs(n);
                var s = Math.abs(r);
                if (i > t.xCutoff || s > t.yCutoff || this._maxVolume == 0) {
                  return null;
                }
                var a = (1 - i / t.xCutoff) * this._maxVolume;
                var o = (1 - s / t.yCutoff) * this._maxVolume;
                var h = Math.min(a, o);
                var l = n / t.xCutoff;
                return new v(h, l);
              };
              return t;
            }(d);
            var f = n(87833);
            var _ = n(45177);
            function v(e = 1, t = 0) {
              this.volume = 1;
              this.panning = 0;
              this.volume = e;
              this.panning = t;
            }
          }
    });
})();
