(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        96871(e, t, n) {
            "use strict";
        
            n.r(t);
            n.d(t, {
              j7: () => b,
              tH: () => T.A,
              Kf: () => _,
              K: () => p,
              xv: () => A,
              Wp: () => i.A
            });
            n(52476);
            var r;
            var i = n(89165);
            var s = n(46682);
            var a = s.q9.prototype;
            if (s.uWs) {
              r = s.uWs.ColorMatrixFilter;
            }
            a.setRenderable = a.re = function (e) {
              this.renderable = !!e;
              return this;
            };
            a.t = a.setTransform;
            a.setMask = a.ma = function (e) {
              this.mask = e;
              return this;
            };
            a.setAlpha = a.a = function (e) {
              this.alpha = e;
              return this;
            };
            a.setTint = a.i = function (e) {
              if (typeof e == "string") {
                e = i.A.hexToUint(e);
              }
              var t = e >> 16 & 255;
              var n = e >> 8 & 255;
              var r = e & 255;
              return this.c(t / 255, 0, n / 255, 0, r / 255, 0);
            };
            a.setColorTransform = a.c = function (e, t, n, r, i, s) {
              var a = this.colorTransformFilter;
              a.matrix[0] = e;
              a.matrix[4] = t;
              a.matrix[6] = n;
              a.matrix[9] = r;
              a.matrix[12] = i;
              a.matrix[14] = s;
              this.filters = [a];
              return this;
            };
            if (!a.hasOwnProperty("colorTransformFilter")) {
              Object.defineProperty(a, "colorTransformFilter", {
                set: function (e) {
                  this._colorTransformFilter = e;
                },
                get: function () {
                  return this._colorTransformFilter || new r();
                }
              });
            }
            s.q9.extend = s.q9.e = function (e) {
              e.prototype = Object.create(a);
              e.prototype.constructor = e;
              return e;
            };
            s.q9;
            n(39725);
            n(60222);
            n(76580);
            n(69085);
            n(26910);
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(26099);
            n(2892);
            var o = function () {
              function e(e, t, n, r, i, s) {
                var a;
                this.target = e;
                this.startProps = t;
                this.endProps = {};
                this.duration = i;
                this.startFrame = r;
                this.endFrame = r + i;
                this.ease = s;
                this.isTweenlessFrame = !n;
                if (n) {
                  for (a in n) {
                    this.endProps[a] = n[a];
                  }
                }
                for (a in t) {
                  if (!this.endProps.hasOwnProperty(a)) {
                    this.endProps[a] = t[a];
                  }
                }
              }
              var t = e.prototype;
              t.setPosition = function (e) {
                if (e >= this.endFrame) {
                  this.setToEnd();
                } else if (this.isTweenlessFrame) {
                  this.setToEnd();
                } else {
                  var t = (e - this.startFrame) / this.duration;
                  if (this.ease) {
                    t = this.ease(t);
                  }
                  var n = this.target;
                  var r = this.startProps;
                  var i = this.endProps;
                  for (var s in i) {
                    var a = l[s];
                    u(n, s, a ? a(r[s], i[s], t) : r[s]);
                  }
                }
              };
              t.setToEnd = function () {
                var e = this.endProps;
                var t = this.target;
                for (var n in e) {
                  u(t, n, e[n]);
                }
              };
              return e;
            }();
            function h(e, t, n) {
              return e + (t - e) * n;
            }
            var l = {
              x: h,
              y: h,
              sx: h,
              sy: h,
              kx: h,
              ky: h,
              r: function (e, t, n) {
                if (Math.abs(t - e) > d) {
                  if (t > e) {
                    e += c;
                  } else {
                    t += d + c;
                  }
                }
                return e + (t - e) * n;
              },
              a: h,
              t: null,
              v: null,
              c: null,
              m: null,
              g: null
            };
            var d = Math.PI;
            var c = d * 2;
            function u(e, t, n) {
              switch (t) {
                case "x":
                  e.transform.position.x = n;
                  break;
                case "y":
                  e.transform.position.y = n;
                  break;
                case "sx":
                  e.transform.scale.x = n;
                  break;
                case "sy":
                  e.transform.scale.y = n;
                  break;
                case "kx":
                  e.transform.skew.x = n;
                  break;
                case "ky":
                  e.transform.skew.y = n;
                  break;
                case "r":
                  e.transform.rotation = n;
                  break;
                case "a":
                  e.alpha = n;
                  break;
                case "t":
                  e.i(n);
                  break;
                case "c":
                  e.c.apply(e, n);
                  break;
                case "v":
                  e.visible = n;
                  break;
                case "m":
                  e.ma(n);
              }
            }
            const p = o;
            function m(e) {
              Array.call(this);
              this.target = e;
              this._currentProps = {};
            }
            var f = m.prototype = Object.create(Array.prototype);
            f.addTween = function (e, t, n, r) {
              this.extendLastFrame(t - 1);
              var i;
              var s = {};
              for (i in e) {
                if (this._currentProps.hasOwnProperty(i)) {
                  s[i] = this._currentProps[i];
                } else {
                  var a = s[i] = this.getPropFromShorthand(i);
                  for (var o = this.length - 1; o >= 0; --o) {
                    this[o].startProps[i] = a;
                    this[o].endProps[i] = a;
                  }
                }
              }
              var h = new p(this.target, s, e, t, n, r);
              this.push(h);
              Object.assign(this._currentProps, h.endProps);
            };
            f.addKeyframe = function (e, t) {
              this.extendLastFrame(t - 1);
              var n = Object.assign({}, this._currentProps, e);
              var r = new p(this.target, n, null, t, 0);
              this.push(r);
              Object.assign(this._currentProps, r.endProps);
            };
            f.extendLastFrame = function (e) {
              if (this.length) {
                var t = this[this.length - 1];
                if (t.endFrame < e) {
                  if (t.isTweenlessFrame) {
                    t.endFrame = e;
                  } else {
                    this.addKeyframe(this._currentProps, t.endFrame + 1, e - t.endFrame + 1);
                  }
                }
              }
            };
            f.getPropFromShorthand = function (e) {
              var t = this.target;
              switch (e) {
                case "x":
                  return t.position.x;
                case "y":
                  return t.position.y;
                case "sx":
                  return t.scale.x;
                case "sy":
                  return t.scale.y;
                case "kx":
                  return t.skew.x;
                case "ky":
                  return t.skew.y;
                case "r":
                  return t.rotation;
                case "a":
                  return t.alpha;
                case "v":
                  return t.visible;
                case "m":
                  return t.mask;
              }
              return null;
            };
            const _ = m;
            function v(e) {
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
            function y(e, t) {
              y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return y(e, t);
            }
            var g = s.mcf;
            var w = s.RvI.shared;
            var x = function (e) {
              function t(n, r, i, s, a) {
                var o;
                o = e.call(this) || this;
                n = typeof (n = n === undefined ? {} : n) == "number" ? {
                  mode: n || t.INDEPENDENT,
                  duration: r || 0,
                  loop: i === undefined || i,
                  labels: a || {},
                  framerate: s || 0,
                  startPosition: 0
                } : Object.assign({
                  mode: t.INDEPENDENT,
                  startPosition: 0,
                  loop: true,
                  labels: {},
                  duration: 0,
                  framerate: 0
                }, n);
                o.mode = n.mode;
                o.startPosition = n.startPosition;
                o.loop = !!n.loop;
                o.currentFrame = 0;
                o._labels = [];
                o._labelDict = n.labels;
                if (n.labels) {
                  for (var h in n.labels) {
                    var l = {
                      label: h,
                      position: n.labels[h]
                    };
                    o._labels.push(l);
                  }
                  o._labels.sort(function (e, t) {
                    return e.position - t.position;
                  });
                }
                o.selfAdvance = true;
                o._paused = false;
                o.autoReset = true;
                o._synchOffset = 0;
                o._prevPos = -1;
                o._t = 0;
                o._framerate = n.framerate;
                o._duration = 0;
                o._totalFrames = n.duration;
                o._timelines = [];
                o._timedChildTimelines = [];
                o._depthSorted = [];
                o._beforeUpdate = null;
                o.tickerActive = false;
                if (o.mode === t.INDEPENDENT) {
                  o._tickListenerBind = o._tickListener.bind(o);
                  o._onAddedBind = o._onAdded.bind(o);
                  o._onRemovedBind = o._onRemoved.bind(o);
                  o.on("added", o._onAddedBind);
                  o.on("removed", o._onRemovedBind);
                }
                if (n.framerate) {
                  o.framerate = n.framerate;
                }
                return o;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              y(n, r);
              var a;
              var o;
              var h = t.prototype;
              h._onAdded = function () {
                if (!this._paused && !this.tickerActive) {
                  this.tickerActive = true;
                  if (!this._framerate) {
                    this.framerate = this.parentFramerate;
                  }
                  w.add(this._tickListenerBind);
                }
              };
              h._tickListener = function (e) {
                if (!this.paused && this.selfAdvance) {
                  var t = e / s.W0u.TARGET_FPMS / 1000;
                  this.advance(t);
                } else if (this._prevPos < 0) {
                  this._goto(this.currentFrame);
                }
              };
              h._onRemoved = function () {
                this.tickerActive = false;
                w.remove(this._tickListenerBind);
              };
              h._autoExtend = function (e) {
                if (this._totalFrames < e) {
                  this._totalFrames = e;
                }
              };
              h._parseProperties = function (e) {
                if (typeof e.t == "string") {
                  e.t = i.A.hexToUint(e.t);
                } else if (typeof e.v == "number") {
                  e.v = !!e.v;
                }
              };
              h._getChildTimeline = function (e) {
                for (var t = this._timelines.length - 1; t >= 0; --t) {
                  if (this._timelines[t].target === e) {
                    return this._timelines[t];
                  }
                }
                var n = new _(e);
                this._timelines.push(n);
                return n;
              };
              h.addTimedMask = function (e, t) {
                for (var n in t) {
                  this.addKeyframe(e, {
                    m: t[n]
                  }, parseInt(n, 10));
                }
                this._setTimelinePosition(this.currentFrame, this.currentFrame, true);
                return this;
              };
              h.addTween = function (e, t, n, r, i) {
                var s = this._getChildTimeline(e);
                this._parseProperties(t);
                s.addTween(t, n, r, i);
                this._autoExtend(n + r);
                return this;
              };
              h.addKeyframe = function (e, t, n) {
                var r = this._getChildTimeline(e);
                this._parseProperties(t);
                r.addKeyframe(t, n);
                this._autoExtend(n);
                return this;
              };
              h.addTimedChild = function (e, n, r, s) {
                var a;
                var o;
                if (n === undefined) {
                  n = 0;
                }
                if (r === undefined || r < 1) {
                  r = this._totalFrames || 1;
                }
                if (e.mode === t.SYNCHED) {
                  e.parentStartPosition = n;
                }
                o = this._timedChildTimelines.length - 1;
                for (; o >= 0; --o) {
                  if (this._timedChildTimelines[o].target === e) {
                    a = this._timedChildTimelines[o];
                    break;
                  }
                }
                if (!a) {
                  (a = []).target = e;
                  this._timedChildTimelines.push(a);
                }
                i.A.fillFrames(a, n, r);
                if (this._totalFrames < n + r) {
                  this._totalFrames = n + r;
                }
                if (s) {
                  if (typeof s == "string") {
                    s = i.A.deserializeKeyframes(s);
                  }
                  var h = {};
                  for (var l in s) {
                    h = Object.assign({}, h, s[l]);
                    this.addKeyframe(e, h, parseInt(l, 10));
                  }
                  this._getChildTimeline(e).extendLastFrame(n + r);
                }
                this._setTimelinePosition(n, this.currentFrame, true);
                return this;
              };
              h.play = function () {
                this.paused = false;
              };
              h.stop = function () {
                this.paused = true;
              };
              h.gotoAndPlay = function (e) {
                this.paused = false;
                this._goto(e);
              };
              h.gotoAndStop = function (e) {
                this.paused = true;
                this._goto(e);
              };
              h.isAnimationComplete = function () {
                return this.currentFrame + 1 === this.totalFrames;
              };
              h.advance = function (e) {
                var t;
                if (!this._framerate) {
                  this.framerate = this.parentFramerate;
                }
                if (e) {
                  this._t += e;
                }
                if (this._t > this._duration) {
                  this._t = this.loop ? this._t % this._duration : this._duration;
                }
                this.currentFrame = Math.floor(this._t * this._framerate + 1e-8);
                if (this.currentFrame >= this._totalFrames) {
                  this.currentFrame = this._totalFrames - 1;
                }
                if (this._beforeUpdate) {
                  t = this._beforeUpdate(this);
                }
                this._updateTimeline();
                if (t) {
                  t();
                }
                if (!this.loop && this.isAnimationComplete()) {
                  this.stop();
                }
              };
              h._goto = function (e) {
                var t = typeof e == "string" ? this._labelDict[e] : e;
                if (t !== undefined) {
                  this._prevPos = NaN;
                  this.currentFrame = t;
                  if (!this._framerate) {
                    this.framerate = this.parentFramerate;
                  }
                  if (this._framerate > 0) {
                    this._t = t / this._framerate;
                  } else {
                    this._t = 0;
                  }
                  this._updateTimeline();
                }
              };
              h._reset = function () {
                this._prevPos = -1;
                this._t = 0;
                this.currentFrame = 0;
              };
              h._updateTimeline = function () {
                if (this.mode !== t.INDEPENDENT) {
                  this.currentFrame = this.startPosition + (this.mode === t.SINGLE_FRAME ? 0 : this._synchOffset);
                  if (this.currentFrame >= this._totalFrames) {
                    this.currentFrame %= this._totalFrames;
                  }
                }
                if (this._prevPos !== this.currentFrame) {
                  this._setTimelinePosition(this._prevPos, this.currentFrame);
                  this._prevPos = this.currentFrame;
                }
              };
              h._setTimelinePosition = function (e, n) {
                var r;
                var i;
                var s;
                var a = this._timelines;
                for (r = a.length - 1; r >= 0; --r) {
                  var o = a[r];
                  i = 0;
                  s = o.length;
                  for (; i < s; ++i) {
                    var h = o[i];
                    if (n >= h.startFrame && n <= h.endFrame) {
                      h.setPosition(n);
                      break;
                    }
                  }
                }
                var l = this._timedChildTimelines;
                var d = this._depthSorted;
                r = 0;
                s = l.length;
                for (; r < s; ++r) {
                  var c = l[r].target;
                  var u = l[r][n];
                  if (u) {
                    d.push(c);
                    if (c.parent !== this) {
                      this.addChild(c);
                      if (c.mode === t.INDEPENDENT && c.autoReset) {
                        c._reset();
                      }
                    }
                  } else if (!u && c.parent === this) {
                    this.removeChild(c);
                  }
                }
                r = 0;
                s = d.length;
                for (; r < s; r++) {
                  var p = d[r];
                  if (this.children.indexOf(p) !== r) {
                    this.addChildAt(p, r);
                  }
                }
                d.length = 0;
                var m;
                var f = this.children;
                r = 0;
                s = f.length;
                for (; r < s; ++r) {
                  if ((m = f[r]).mode === t.SYNCHED) {
                    m._synchOffset = n - m.parentStartPosition;
                    m._updateTimeline();
                  }
                }
              };
              h.destroy = function (t) {
                if (this._tickListenerBind) {
                  this.tickerActive = false;
                  w.remove(this._tickListenerBind);
                }
                var n = [];
                var r = this._timelines;
                if (r) {
                  for (var i = 0; i < r.length; i++) {
                    var s = r[i];
                    n.push(s.target);
                    s._currentProps = null;
                    s.length = 0;
                  }
                }
                if (r = this._timedChildTimelines) {
                  for (var a = 0; a < r.length; a++) {
                    var o = r[a];
                    if (n.indexOf(o.target) < 0) {
                      n.push(o.target);
                    }
                    o._currentProps = null;
                    o.length = 0;
                  }
                }
                for (var h = 0; h < n.length; h++) {
                  if (this.children.indexOf(n[h]) < 0) {
                    n[h].destroy(t);
                  }
                }
                n.length = 0;
                this._timelines = null;
                this._depthSorted = null;
                this._timedChildTimelines = null;
                this._beforeUpdate = null;
                this._labels = null;
                this._labelDict = null;
                e.prototype.destroy.call(this, t);
              };
              a = t;
              o = [{
                key: "paused",
                get: function () {
                  return this._paused;
                },
                set: function (e) {
                  if (this._paused !== e) {
                    this._paused = e;
                    if (this._paused) {
                      this.tickerActive = false;
                      w.remove(this._tickListenerBind);
                    } else {
                      this.tickerActive = true;
                      w.add(this._tickListenerBind);
                    }
                  }
                }
              }, {
                key: "labels",
                get: function () {
                  return this._labels;
                }
              }, {
                key: "labelsMap",
                get: function () {
                  return this._labelDict;
                }
              }, {
                key: "currentLabel",
                get: function () {
                  for (var e = this._labels, t = null, n = 0, r = e.length; n < r && e[n].position <= this.currentFrame; ++n) {
                    t = e[n].label;
                  }
                  return t;
                }
              }, {
                key: "elapsedTime",
                get: function () {
                  return this._t;
                },
                set: function (e) {
                  this._t = e;
                }
              }, {
                key: "framerate",
                get: function () {
                  return this._framerate;
                },
                set: function (e) {
                  if (e > 0) {
                    if (this._framerate) {
                      this._t *= this._framerate / e;
                    } else {
                      this._t = this.currentFrame / e;
                    }
                    this._framerate = e;
                    this._duration = e ? this._totalFrames / e : 0;
                  } else {
                    this._t = this._framerate = this._duration = 0;
                  }
                }
              }, {
                key: "totalFrames",
                get: function () {
                  return this._totalFrames;
                }
              }, {
                key: "parentFramerate",
                get: function () {
                  for (var e = this, n = e._framerate; (e = e.parent) && !n;) {
                    if (e.mode === t.INDEPENDENT) {
                      n = e._framerate;
                    }
                  }
                  return n || t.DEFAULT_FRAMERATE;
                }
              }];
              if (o) {
                (function (e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || false;
                    r.configurable = true;
                    if ("value" in r) {
                      r.writable = true;
                    }
                    Object.defineProperty(e, v(r.key), r);
                  }
                })(a.prototype, o);
              }
              Object.defineProperty(a, "prototype", {
                writable: false
              });
              return a;
            }(g);
            x.INDEPENDENT = 0;
            x.SINGLE_FRAME = 1;
            x.SYNCHED = 2;
            x.DEFAULT_FRAMERATE = 24;
            x.extend = function (e) {
              e.prototype = Object.create(x.prototype);
              e.prototype.constructor = e;
              return e;
            };
            const b = x;
            var T = n(62828);
            var A = "1.3.5";
          },
        52476(e, t, n) {
            "use strict";
        
            var r = n(46682);
            var i = r.mcf.prototype;
            r.mcf.extend = function (e) {
              e.prototype = Object.create(i);
              e.prototype.constructor = e;
              return e;
            };
            const s = r.mcf;
            n.d(t, ["A", 0, s]);
          },
        60222(e, t, n) {
            "use strict";
        
            var r = n(46682);
            var i = r.A1g.prototype;
            i.drawCommands = i.d = function (e) {
              for (var t, n = [], r = 0; r <= e.length;) {
                var i = e[r++];
                if (i === undefined || this[i]) {
                  if (t) {
                    this[t].apply(this, n);
                    n.length = 0;
                  }
                  t = i;
                } else {
                  n.push(i);
                }
              }
              return this;
            };
            i.c = i.closePath;
            i.h = i.addHole;
            i.m = i.moveTo;
            i.l = i.lineTo;
            i.q = i.quadraticCurveTo;
            i.b = i.bezierCurveTo;
            i.f = i.beginFill;
            i.s = i.lineStyle;
            i.dr = i.drawRect;
            i.rr = i.drawRoundedRect;
            i.rc = i.drawRoundedRect;
            i.dc = i.drawCircle;
            i.ar = i.arc;
            i.at = i.arcTo;
            i.de = i.drawEllipse;
            i.lf = function (e) {
              return this.f(e[0]);
            };
            i.rf = function (e) {
              return this.f(e[0]);
            };
            i.bf = function () {
              return this.f(0);
            };
            i.sd = function () {
              return this;
            };
            i.bs = function () {
              return this;
            };
            i.ls = function () {
              return this;
            };
            i.rs = function () {
              return this;
            };
            const s = r.A1g;
            n.d(t, ["A", 0, s]);
          },
        39725(e, t, n) {
            "use strict";
        
            var r = n(46682);
            var i = r.kxk.prototype;
            r.kxk.extend = function (e) {
              e.prototype = Object.create(i);
              e.prototype.constructor = e;
              return e;
            };
            const s = r.kxk;
            n.d(t, ["A", 0, s]);
          }
    });
})();
