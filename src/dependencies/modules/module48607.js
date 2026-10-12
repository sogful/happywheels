(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        48607(e, t, n) {
            "use strict";
        
            function r(e) {
              if (e === undefined) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return e;
            }
            function i(e, t) {
              e.prototype = Object.create(t.prototype);
              e.prototype.constructor = e;
              e.__proto__ = t;
            }
            n.d(t, {
              B0: () => xe,
              Dx: () => on,
              E_: () => ge,
              J7: () => _n,
              Ks: () => q,
              MI: () => Pn,
              OF: () => j,
              Oq: () => Mn,
              St: () => fn,
              Uc: () => kt,
              Vy: () => mt,
              Yz: () => b,
              Zm: () => Jt,
              a0: () => _e,
              au: () => Pt,
              br: () => Rn,
              dg: () => ee,
              fA: () => ye,
              l1: () => dn,
              l_: () => rt,
              n: () => ve,
              n6: () => Vt,
              os: () => kn,
              qA: () => Et,
              vM: () => X,
              vQ: () => R,
              vX: () => W,
              wU: () => de,
              xu: () => In
            });
            var s;
            var a;
            var o;
            var h;
            var l;
            var d;
            var c;
            var u;
            var p;
            var m;
            var f;
            var _;
            var v;
            var y;
            var g;
            var w;
            var x;
            var b = {
              autoSleep: 120,
              force3D: "auto",
              nullTargetWarn: 1,
              units: {
                lineHeight: ""
              }
            };
            var T = {
              duration: 0.5,
              overwrite: false,
              delay: 0
            };
            var A = 100000000;
            var C = 1e-8;
            var S = Math.PI * 2;
            var E = S / 4;
            var O = 0;
            var k = Math.sqrt;
            var P = Math.cos;
            var M = Math.sin;
            function R(e) {
              return typeof e == "string";
            }
            function I(e) {
              return typeof e == "function";
            }
            function L(e) {
              return typeof e == "number";
            }
            function j(e) {
              return e === undefined;
            }
            function B(e) {
              return typeof e == "object";
            }
            function D(e) {
              return e !== false;
            }
            function F() {
              return typeof window != "undefined";
            }
            function N(e) {
              return I(e) || R(e);
            }
            var G = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function () {};
            var U = Array.isArray;
            var V = /random\([^)]+\)/g;
            var H = /,\s*/g;
            var z = /(?:-?\.?\d|\.)+/gi;
            var W = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g;
            var X = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g;
            var Y = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi;
            var q = /[+-]=-?[.\d]+/;
            var J = /[^,'"\[\]\s]+/gi;
            var K = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i;
            var Z = {};
            var $ = {};
            function Q(e) {
              return ($ = ke(e, Z)) && kn;
            }
            function ee(e, t) {}
            function te(e, t) {
              return !t && undefined;
            }
            function ne(e, t) {
              return e && (Z[e] = t) && $ && ($[e] = t) || Z;
            }
            function re() {
              return 0;
            }
            var ie = {
              suppressEvents: true,
              isStart: true,
              kill: false
            };
            var se = {
              suppressEvents: true,
              kill: false
            };
            var ae = {
              suppressEvents: true
            };
            var oe = {};
            var he = [];
            var le = {};
            var de = {};
            var ce = {};
            var ue = 30;
            var pe = [];
            var me = "";
            function fe(e) {
              var t;
              var n;
              var r = e[0];
              if (!B(r) && !I(r)) {
                e = [e];
              }
              if (!(t = (r._gsap || {}).harness)) {
                for (n = pe.length; n-- && !pe[n].targetTest(r););
                t = pe[n];
              }
              for (n = e.length; n--;) {
                if (!e[n] || !(e[n]._gsap ||= new Vt(e[n], t))) {
                  e.splice(n, 1);
                }
              }
              return e;
            }
            function _e(e) {
              return e._gsap || fe(at(e))[0]._gsap;
            }
            function ve(e, t, n) {
              if ((n = e[t]) && I(n)) {
                return e[t]();
              } else {
                return j(n) && e.getAttribute && e.getAttribute(t) || n;
              }
            }
            function ye(e, t) {
              return (e = e.split(",")).forEach(t) || e;
            }
            function ge(e) {
              return Math.round(e * 100000) / 100000 || 0;
            }
            function we(e) {
              return Math.round(e * 10000000) / 10000000 || 0;
            }
            function xe(e, t) {
              var n = t.charAt(0);
              var r = parseFloat(t.substr(2));
              e = parseFloat(e);
              if (n === "+") {
                return e + r;
              } else if (n === "-") {
                return e - r;
              } else if (n === "*") {
                return e * r;
              } else {
                return e / r;
              }
            }
            function be(e, t) {
              for (var n = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < n;);
              return r < n;
            }
            function Te() {
              var e;
              var t;
              var n = he.length;
              var r = he.slice(0);
              le = {};
              he.length = 0;
              e = 0;
              for (; e < n; e++) {
                if ((t = r[e]) && t._lazy) {
                  t.render(t._lazy[0], t._lazy[1], true)._lazy = 0;
                }
              }
            }
            function Ae(e) {
              return !!e._initted || !!e._startAt || !!e.add;
            }
            function Ce(e, t, n, r) {
              if (he.length && !a) {
                Te();
              }
              e.render(t, n, r || !!a && !!(t < 0) && !!Ae(e));
              if (he.length && !a) {
                Te();
              }
            }
            function Se(e) {
              var t = parseFloat(e);
              if ((t || t === 0) && (e + "").match(J).length < 2) {
                return t;
              } else if (R(e)) {
                return e.trim();
              } else {
                return e;
              }
            }
            function Ee(e) {
              return e;
            }
            function Oe(e, t) {
              for (var n in t) {
                if (!(n in e)) {
                  e[n] = t[n];
                }
              }
              return e;
            }
            function ke(e, t) {
              for (var n in t) {
                e[n] = t[n];
              }
              return e;
            }
            var Pe = function e(t, n) {
              for (var r in n) {
                if (r !== "__proto__" && r !== "constructor" && r !== "prototype") {
                  t[r] = B(n[r]) ? e(t[r] ||= {}, n[r]) : n[r];
                }
              }
              return t;
            };
            function Me(e, t) {
              var n;
              var r = {};
              for (n in e) {
                if (!(n in t)) {
                  r[n] = e[n];
                }
              }
              return r;
            }
            function Re(e) {
              var t;
              var n = e.parent || h;
              var r = e.keyframes ? (t = U(e.keyframes), function (e, n) {
                for (var r in n) {
                  if (!(r in e) && (r !== "duration" || !t) && r !== "ease") {
                    e[r] = n[r];
                  }
                }
              }) : Oe;
              if (D(e.inherit)) {
                while (n) {
                  r(e, n.vars.defaults);
                  n = n.parent || n._dp;
                }
              }
              return e;
            }
            function Ie(e, t, n = "_first", r = "_last", i) {
              var s;
              var a = e[r];
              if (i) {
                for (s = t[i]; a && a[i] > s;) {
                  a = a._prev;
                }
              }
              if (a) {
                t._next = a._next;
                a._next = t;
              } else {
                t._next = e[n];
                e[n] = t;
              }
              if (t._next) {
                t._next._prev = t;
              } else {
                e[r] = t;
              }
              t._prev = a;
              t.parent = t._dp = e;
              return t;
            }
            function Le(e, t, n = "_first", r = "_last") {
              var i = t._prev;
              var s = t._next;
              if (i) {
                i._next = s;
              } else if (e[n] === t) {
                e[n] = s;
              }
              if (s) {
                s._prev = i;
              } else if (e[r] === t) {
                e[r] = i;
              }
              t._next = t._prev = t.parent = null;
            }
            function je(e, t) {
              if (e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove) {
                e.parent.remove(e);
              }
              e._act = 0;
            }
            function Be(e, t) {
              if (e && (!t || t._end > e._dur || t._start < 0)) {
                for (var n = e; n;) {
                  n._dirty = 1;
                  n = n.parent;
                }
              }
              return e;
            }
            function De(e, t, n, r) {
              return e._startAt && (a ? e._startAt.revert(se) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, true, r));
            }
            var Fe = function e(t) {
              return !t || t._ts && e(t.parent);
            };
            function Ne(e) {
              if (e._repeat) {
                return Ge(e._tTime, e = e.duration() + e._rDelay) * e;
              } else {
                return 0;
              }
            }
            function Ge(e, t) {
              var n = Math.floor(e = we(e / t));
              if (e && n === e) {
                return n - 1;
              } else {
                return n;
              }
            }
            function Ue(e, t) {
              return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
            }
            function Ve(e) {
              return e._end = we(e._start + (e._tDur / Math.abs(e._ts || e._rts || C) || 0));
            }
            function He(e, t) {
              var n = e._dp;
              if (n && n.smoothChildTiming && e._ts) {
                e._start = we(n._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts));
                Ve(e);
                if (!n._dirty) {
                  Be(n, e);
                }
              }
              return e;
            }
            function ze(e, t) {
              var n;
              if (t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) {
                n = Ue(e.rawTime(), t);
                if (!t._dur || nt(0, t.totalDuration(), n) - t._tTime > C) {
                  t.render(n, true);
                }
              }
              if (Be(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
                if (e._dur < e.duration()) {
                  for (n = e; n._dp;) {
                    if (n.rawTime() >= 0) {
                      n.totalTime(n._tTime);
                    }
                    n = n._dp;
                  }
                }
                e._zTime = -1e-8;
              }
            }
            function We(e, t, n, r) {
              if (t.parent) {
                je(t);
              }
              t._start = we((L(n) ? n : n || e !== h ? Qe(e, n, t) : e._time) + t._delay);
              t._end = we(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0));
              Ie(e, t, "_first", "_last", e._sort ? "_start" : 0);
              if (!Je(t)) {
                e._recent = t;
              }
              if (!r) {
                ze(e, t);
              }
              if (e._ts < 0) {
                He(e, e._tTime);
              }
              return e;
            }
            function Xe(e, t) {
              return (Z.ScrollTrigger || ee("scrollTrigger", t)) && Z.ScrollTrigger.create(t, e);
            }
            function Ye(e, t, n, r, i) {
              Kt(e, t, i);
              if (e._initted) {
                if (!n && e._pt && !a && (e._dur && e.vars.lazy !== false || !e._dur && e.vars.lazy) && p !== Pt.frame) {
                  he.push(e);
                  e._lazy = [i, r];
                  return 1;
                } else {
                  return undefined;
                }
              } else {
                return 1;
              }
            }
            var qe = function e(t) {
              var n = t.parent;
              return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n));
            };
            function Je(e) {
              var t = e.data;
              return t === "isFromStart" || t === "isStart";
            }
            function Ke(e, t, n, r) {
              var i = e._repeat;
              var s = we(t) || 0;
              var a = e._tTime / e._tDur;
              if (a && !r) {
                e._time *= s / e._dur;
              }
              e._dur = s;
              e._tDur = i ? i < 0 ? 10000000000 : we(s * (i + 1) + e._rDelay * i) : s;
              if (a > 0 && !r) {
                He(e, e._tTime = e._tDur * a);
              }
              if (e.parent) {
                Ve(e);
              }
              if (!n) {
                Be(e.parent, e);
              }
              return e;
            }
            function Ze(e) {
              if (e instanceof zt) {
                return Be(e);
              } else {
                return Ke(e, e._dur);
              }
            }
            var $e = {
              _start: 0,
              endTime: re,
              totalDuration: re
            };
            var Qe = function e(t, n, r) {
              var i;
              var s;
              var a;
              var o = t.labels;
              var h = t._recent || $e;
              var l = t.duration() >= A ? h.endTime(false) : t._dur;
              if (R(n) && (isNaN(n) || n in o)) {
                s = n.charAt(0);
                a = n.substr(-1) === "%";
                i = n.indexOf("=");
                if (s === "<" || s === ">") {
                  if (i >= 0) {
                    n = n.replace(/=/, "");
                  }
                  return (s === "<" ? h._start : h.endTime(h._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (a ? (i < 0 ? h : r).totalDuration() / 100 : 1);
                } else if (i < 0) {
                  if (!(n in o)) {
                    o[n] = l;
                  }
                  return o[n];
                } else {
                  s = parseFloat(n.charAt(i - 1) + n.substr(i + 1));
                  if (a && r) {
                    s = s / 100 * (U(r) ? r[0] : r).totalDuration();
                  }
                  if (i > 1) {
                    return e(t, n.substr(0, i - 1), r) + s;
                  } else {
                    return l + s;
                  }
                }
              } else if (n == null) {
                return l;
              } else {
                return +n;
              }
            };
            function et(e, t, n) {
              var r;
              var i;
              var s = L(t[1]);
              var a = (s ? 2 : 1) + (e < 2 ? 0 : 1);
              var o = t[a];
              if (s) {
                o.duration = t[1];
              }
              o.parent = n;
              if (e) {
                r = o;
                i = n;
                while (i && !("immediateRender" in r)) {
                  r = i.vars.defaults || {};
                  i = D(i.vars.inherit) && i.parent;
                }
                o.immediateRender = D(r.immediateRender);
                if (e < 2) {
                  o.runBackwards = 1;
                } else {
                  o.startAt = t[a - 1];
                }
              }
              return new tn(t[0], o, t[a + 1]);
            }
            function tt(e, t) {
              if (e || e === 0) {
                return t(e);
              } else {
                return t;
              }
            }
            function nt(e, t, n) {
              if (n < e) {
                return e;
              } else if (n > t) {
                return t;
              } else {
                return n;
              }
            }
            function rt(e, t) {
              if (R(e) && (t = K.exec(e))) {
                return t[1];
              } else {
                return "";
              }
            }
            var it = [].slice;
            function st(e, t) {
              return e && B(e) && "length" in e && (!t && !e.length || e.length - 1 in e && B(e[0])) && !e.nodeType && e !== l;
            }
            function at(e, t, n) {
              if (o && !t && o.selector) {
                return o.selector(e);
              } else if (!R(e) || n || !d && Mt()) {
                if (U(e)) {
                  return function (e, t, n = []) {
                    return e.forEach(function (e) {
                      var r;
                      if (R(e) && !t || st(e, 1)) {
                        return (r = n).push.apply(r, at(e));
                      } else {
                        return n.push(e);
                      }
                    }) || n;
                  }(e, n);
                } else if (st(e)) {
                  return it.call(e, 0);
                } else if (e) {
                  return [e];
                } else {
                  return [];
                }
              } else {
                return it.call((t || c).querySelectorAll(e), 0);
              }
            }
            function ot(e) {
              e = at(e)[0] || te() || {};
              return function (t) {
                var n = e.current || e.nativeElement || e;
                return at(t, n.querySelectorAll ? n : n === e ? te() || c.createElement("div") : e);
              };
            }
            function ht(e) {
              return e.sort(function () {
                return 0.5 - Math.random();
              });
            }
            function lt(e) {
              if (I(e)) {
                return e;
              }
              var t = B(e) ? e : {
                each: e
              };
              var n = Dt(t.ease);
              var r = t.from || 0;
              var i = parseFloat(t.base) || 0;
              var s = {};
              var a = r > 0 && r < 1;
              var o = isNaN(r) || a;
              var h = t.axis;
              var l = r;
              var d = r;
              if (R(r)) {
                l = d = {
                  center: 0.5,
                  edges: 0.5,
                  end: 1
                }[r] || 0;
              } else if (!a && o) {
                l = r[0];
                d = r[1];
              }
              return function (e, a, c) {
                var u;
                var p;
                var m;
                var f;
                var _;
                var v;
                var y;
                var g;
                var w;
                var x = (c || t).length;
                var b = s[x];
                if (!b) {
                  if (!(w = t.grid === "auto" ? 0 : (t.grid || [1, A])[1])) {
                    for (y = -A; y < (y = c[w++].getBoundingClientRect().left) && w < x;);
                    if (w < x) {
                      w--;
                    }
                  }
                  b = s[x] = [];
                  u = o ? Math.min(w, x) * l - 0.5 : r % w;
                  p = w === A ? 0 : o ? x * d / w - 0.5 : r / w | 0;
                  y = 0;
                  g = A;
                  v = 0;
                  for (; v < x; v++) {
                    m = v % w - u;
                    f = p - (v / w | 0);
                    b[v] = _ = h ? Math.abs(h === "y" ? f : m) : k(m * m + f * f);
                    if (_ > y) {
                      y = _;
                    }
                    if (_ < g) {
                      g = _;
                    }
                  }
                  if (r === "random") {
                    ht(b);
                  }
                  b.max = y - g;
                  b.min = g;
                  b.v = x = (parseFloat(t.amount) || parseFloat(t.each) * (w > x ? x - 1 : h ? h === "y" ? x / w : w : Math.max(w, x / w)) || 0) * (r === "edges" ? -1 : 1);
                  b.b = x < 0 ? i - x : i;
                  b.u = rt(t.amount || t.each) || 0;
                  n = n && x < 0 ? Bt(n) : n;
                }
                x = (b[e] - b.min) / b.max || 0;
                return we(b.b + (n ? n(x) : x) * b.v) + b.u;
              };
            }
            function dt(e) {
              var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
              return function (n) {
                var r = we(Math.round(parseFloat(n) / e) * e * t);
                return (r - r % 1) / t + (L(n) ? 0 : rt(n));
              };
            }
            function ct(e, t) {
              var n;
              var r;
              var i = U(e);
              if (!i && B(e)) {
                n = i = e.radius || A;
                if (e.values) {
                  e = at(e.values);
                  if (r = !L(e[0])) {
                    n *= n;
                  }
                } else {
                  e = dt(e.increment);
                }
              }
              return tt(t, i ? I(e) ? function (t) {
                r = e(t);
                if (Math.abs(r - t) <= n) {
                  return r;
                } else {
                  return t;
                }
              } : function (t) {
                for (var i, s, a = parseFloat(r ? t.x : t), o = parseFloat(r ? t.y : 0), h = A, l = 0, d = e.length; d--;) {
                  if ((i = r ? (i = e[d].x - a) * i + (s = e[d].y - o) * s : Math.abs(e[d] - a)) < h) {
                    h = i;
                    l = d;
                  }
                }
                l = !n || h <= n ? e[l] : t;
                if (r || l === t || L(t)) {
                  return l;
                } else {
                  return l + rt(t);
                }
              } : dt(e));
            }
            function ut(e, t, n, r) {
              return tt(U(e) ? !t : n === true ? !!(n = 0) : !r, function () {
                if (U(e)) {
                  return e[~~(Math.random() * e.length)];
                } else {
                  return (n = n || 0.00001) && (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((e - n / 2 + Math.random() * (t - e + n * 0.99)) / n) * n * r) / r;
                }
              });
            }
            function pt(e, t, n) {
              return tt(n, function (n) {
                return e[~~t(n)];
              });
            }
            function mt(e) {
              return e.replace(V, function (e) {
                var t = e.indexOf("[") + 1;
                var n = e.substring(t || 7, t ? e.indexOf("]") : e.length - 1).split(H);
                return ut(t ? n : +n[0], t ? 0 : +n[1], +n[2] || 0.00001);
              });
            }
            function ft(e, t, n, r, i) {
              var s = t - e;
              var a = r - n;
              return tt(i, function (t) {
                return n + ((t - e) / s * a || 0);
              });
            }
            function _t(e, t, n) {
              var r;
              var i;
              var s;
              var a = e.labels;
              var o = A;
              for (r in a) {
                if ((i = a[r] - t) < 0 == !!n && i && o > (i = Math.abs(i))) {
                  s = r;
                  o = i;
                }
              }
              return s;
            }
            function vt(e, t, n) {
              var r;
              var i;
              var s;
              var a = e.vars;
              var h = a[t];
              var l = o;
              var d = e._ctx;
              if (h) {
                r = a[t + "Params"];
                i = a.callbackScope || e;
                if (n && he.length) {
                  Te();
                }
                if (d) {
                  o = d;
                }
                s = r ? h.apply(i, r) : h.call(i);
                o = l;
                return s;
              }
            }
            function yt(e) {
              je(e);
              if (e.scrollTrigger) {
                e.scrollTrigger.kill(!!a);
              }
              if (e.progress() < 1) {
                vt(e, "onInterrupt");
              }
              return e;
            }
            var gt = [];
            function wt(e) {
              if (e) {
                e = !e.name && e.default || e;
                if (F() || e.headless) {
                  var t = e.name;
                  var n = I(e);
                  var r = t && !n && e.init ? function () {
                    this._props = [];
                  } : e;
                  var i = {
                    init: re,
                    render: cn,
                    add: qt,
                    kill: pn,
                    modifier: un,
                    rawVars: 0
                  };
                  var s = {
                    targetTest: 0,
                    get: 0,
                    getSetter: on,
                    aliases: {},
                    register: 0
                  };
                  Mt();
                  if (e !== r) {
                    if (de[t]) {
                      return;
                    }
                    Oe(r, Oe(Me(e, i), s));
                    ke(r.prototype, ke(i, Me(e, s)));
                    de[r.prop = t] = r;
                    if (e.targetTest) {
                      pe.push(r);
                      oe[t] = 1;
                    }
                    t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin";
                  }
                  ne(t, r);
                  if (e.register) {
                    e.register(kn, r, _n);
                  }
                } else {
                  gt.push(e);
                }
              }
            }
            var xt = 255;
            var bt = {
              aqua: [0, xt, xt],
              lime: [0, xt, 0],
              silver: [192, 192, 192],
              black: [0, 0, 0],
              maroon: [128, 0, 0],
              teal: [0, 128, 128],
              blue: [0, 0, xt],
              navy: [0, 0, 128],
              white: [xt, xt, xt],
              olive: [128, 128, 0],
              yellow: [xt, xt, 0],
              orange: [xt, 165, 0],
              gray: [128, 128, 128],
              purple: [128, 0, 128],
              green: [0, 128, 0],
              red: [xt, 0, 0],
              pink: [xt, 192, 203],
              cyan: [0, xt, xt],
              transparent: [xt, xt, xt, 0]
            };
            function Tt(e, t, n) {
              return ((e += e < 0 ? 1 : e > 1 ? -1 : 0) * 6 < 1 ? t + (n - t) * e * 6 : e < 0.5 ? n : e * 3 < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) * xt + 0.5 | 0;
            }
            function At(e, t, n) {
              var r;
              var i;
              var s;
              var a;
              var o;
              var h;
              var l;
              var d;
              var c;
              var u;
              var p = e ? L(e) ? [e >> 16, e >> 8 & xt, e & xt] : 0 : bt.black;
              if (!p) {
                if (e.substr(-1) === ",") {
                  e = e.substr(0, e.length - 1);
                }
                if (bt[e]) {
                  p = bt[e];
                } else if (e.charAt(0) === "#") {
                  if (e.length < 6) {
                    r = e.charAt(1);
                    i = e.charAt(2);
                    s = e.charAt(3);
                    e = "#" + r + r + i + i + s + s + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "");
                  }
                  if (e.length === 9) {
                    return [(p = parseInt(e.substr(1, 6), 16)) >> 16, p >> 8 & xt, p & xt, parseInt(e.substr(7), 16) / 255];
                  }
                  p = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & xt, e & xt];
                } else if (e.substr(0, 3) === "hsl") {
                  p = u = e.match(z);
                  if (t) {
                    if (~e.indexOf("=")) {
                      p = e.match(W);
                      if (n && p.length < 4) {
                        p[3] = 1;
                      }
                      return p;
                    }
                  } else {
                    a = +p[0] % 360 / 360;
                    o = +p[1] / 100;
                    r = (h = +p[2] / 100) * 2 - (i = h <= 0.5 ? h * (o + 1) : h + o - h * o);
                    if (p.length > 3) {
                      p[3] *= 1;
                    }
                    p[0] = Tt(a + 1 / 3, r, i);
                    p[1] = Tt(a, r, i);
                    p[2] = Tt(a - 1 / 3, r, i);
                  }
                } else {
                  p = e.match(z) || bt.transparent;
                }
                p = p.map(Number);
              }
              if (t && !u) {
                r = p[0] / xt;
                i = p[1] / xt;
                s = p[2] / xt;
                h = ((l = Math.max(r, i, s)) + (d = Math.min(r, i, s))) / 2;
                if (l === d) {
                  a = o = 0;
                } else {
                  c = l - d;
                  o = h > 0.5 ? c / (2 - l - d) : c / (l + d);
                  a = l === r ? (i - s) / c + (i < s ? 6 : 0) : l === i ? (s - r) / c + 2 : (r - i) / c + 4;
                  a *= 60;
                }
                p[0] = ~~(a + 0.5);
                p[1] = ~~(o * 100 + 0.5);
                p[2] = ~~(h * 100 + 0.5);
              }
              if (n && p.length < 4) {
                p[3] = 1;
              }
              return p;
            }
            function Ct(e) {
              var t = [];
              var n = [];
              var r = -1;
              e.split(Et).forEach(function (e) {
                var i = e.match(X) || [];
                t.push.apply(t, i);
                n.push(r += i.length + 1);
              });
              t.c = n;
              return t;
            }
            function St(e, t, n) {
              var r;
              var i;
              var s;
              var a;
              var o = "";
              var h = (e + o).match(Et);
              var l = t ? "hsla(" : "rgba(";
              var d = 0;
              if (!h) {
                return e;
              }
              h = h.map(function (e) {
                return (e = At(e, t, 1)) && l + (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")";
              });
              if (n && (s = Ct(e), (r = n.c).join(o) !== s.c.join(o))) {
                for (a = (i = e.replace(Et, "1").split(X)).length - 1; d < a; d++) {
                  o += i[d] + (~r.indexOf(d) ? h.shift() || l + "0,0,0,0)" : (s.length ? s : h.length ? h : n).shift());
                }
              }
              if (!i) {
                for (a = (i = e.split(Et)).length - 1; d < a; d++) {
                  o += i[d] + h[d];
                }
              }
              return o + i[a];
            }
            var Et = function () {
              var e;
              var t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
              for (e in bt) {
                t += "|" + e + "\\b";
              }
              return new RegExp(t + ")", "gi");
            }();
            var Ot = /hsl[a]?\(/;
            function kt(e) {
              var t;
              var n = e.join(" ");
              Et.lastIndex = 0;
              if (Et.test(n)) {
                t = Ot.test(n);
                e[1] = St(e[1], t);
                e[0] = St(e[0], t, Ct(e[1]));
                return true;
              }
            }
            var Pt = function () {
              var e;
              var t;
              var n;
              var r;
              var i;
              var s;
              var a = Date.now;
              var o = 500;
              var h = 33;
              var p = a();
              var m = p;
              var _ = 1000 / 240;
              var v = _;
              var y = [];
              var g = function n(l) {
                var d;
                var c;
                var u;
                var f;
                var g = a() - m;
                var w = l === true;
                if (g > o || g < 0) {
                  p += g - h;
                }
                if ((d = (u = (m += g) - p) - v) > 0 || w) {
                  f = ++r.frame;
                  i = u - r.time * 1000;
                  r.time = u /= 1000;
                  v += d + (d >= _ ? 4 : _ - d);
                  c = 1;
                }
                if (!w) {
                  e = t(n);
                }
                if (c) {
                  for (s = 0; s < y.length; s++) {
                    y[s](u, i, f, l);
                  }
                }
              };
              return r = {
                time: 0,
                frame: 0,
                tick: function () {
                  g(true);
                },
                deltaRatio: function (e) {
                  return i / (1000 / (e || 60));
                },
                wake: function () {
                  if (u) {
                    if (!d && F()) {
                      l = d = window;
                      c = l.document || {};
                      Z.gsap = kn;
                      (l.gsapVersions ||= []).push(kn.version);
                      Q($ || l.GreenSockGlobals || !l.gsap && l || {});
                      gt.forEach(wt);
                    }
                    n = typeof requestAnimationFrame != "undefined" && requestAnimationFrame;
                    if (e) {
                      r.sleep();
                    }
                    t = n || function (e) {
                      return setTimeout(e, v - r.time * 1000 + 1 | 0);
                    };
                    f = 1;
                    g(2);
                  }
                },
                sleep: function () {
                  (n ? cancelAnimationFrame : clearTimeout)(e);
                  f = 0;
                  t = re;
                },
                lagSmoothing: function (e, t) {
                  o = e || Infinity;
                  h = Math.min(t || 33, o);
                },
                fps: function (e) {
                  _ = 1000 / (e || 240);
                  v = r.time * 1000 + _;
                },
                add: function (e, t, n) {
                  var i = t ? function (t, n, s, a) {
                    e(t, n, s, a);
                    r.remove(i);
                  } : e;
                  r.remove(e);
                  y[n ? "unshift" : "push"](i);
                  Mt();
                  return i;
                },
                remove: function (e, t) {
                  if (~(t = y.indexOf(e)) && y.splice(t, 1) && s >= t) {
                    s--;
                  }
                },
                _listeners: y
              };
            }();
            function Mt() {
              return !f && Pt.wake();
            }
            var Rt = {};
            var It = /^[\d.\-M][\d.\-,\s]/;
            var Lt = /["']/g;
            function jt(e) {
              var t;
              var n;
              var r;
              var i = {};
              var s = e.substr(1, e.length - 3).split(":");
              var a = s[0];
              for (var o = 1, h = s.length; o < h; o++) {
                n = s[o];
                t = o !== h - 1 ? n.lastIndexOf(",") : n.length;
                r = n.substr(0, t);
                i[a] = isNaN(r) ? r.replace(Lt, "").trim() : +r;
                a = n.substr(t + 1).trim();
              }
              return i;
            }
            function Bt(e) {
              return function (t) {
                return 1 - e(1 - t);
              };
            }
            function Dt(e, t) {
              return e && (I(e) ? e : Rt[e] || function (e) {
                var t;
                var n;
                var r;
                var i;
                var s = (e + "").split("(");
                var a = Rt[s[0]];
                if (a && s.length > 1 && a.config) {
                  return a.config.apply(null, ~e.indexOf("{") ? [jt(s[1])] : (t = e, n = t.indexOf("(") + 1, r = t.indexOf(")"), i = t.indexOf("(", n), t.substring(n, ~i && i < r ? t.indexOf(")", r + 1) : r)).split(",").map(Se));
                } else if (Rt._CE && It.test(e)) {
                  return Rt._CE("", e);
                } else {
                  return a;
                }
              }(e)) || t;
            }
            function Ft(e, t, n = function (e) {
              return 1 - t(1 - e);
            }, r = function (e) {
              if (e < 0.5) {
                return t(e * 2) / 2;
              } else {
                return 1 - t((1 - e) * 2) / 2;
              }
            }) {
              var i;
              var s = {
                easeIn: t,
                easeOut: n,
                easeInOut: r
              };
              ye(e, function (e) {
                Rt[e] = Z[e] = s;
                Rt[i = e.toLowerCase()] = n;
                for (var t in s) {
                  Rt[i + (t === "easeIn" ? ".in" : t === "easeOut" ? ".out" : ".inOut")] = Rt[e + "." + t] = s[t];
                }
              });
              return s;
            }
            function Nt(e) {
              return function (t) {
                if (t < 0.5) {
                  return (1 - e(1 - t * 2)) / 2;
                } else {
                  return 0.5 + e((t - 0.5) * 2) / 2;
                }
              };
            }
            var Gt = function e(t, n, r) {
              var i = n >= 1 ? n : 1;
              var s = (r || (t ? 0.3 : 0.45)) / (n < 1 ? n : 1);
              var a = s / S * (Math.asin(1 / i) || 0);
              function o(e) {
                if (e === 1) {
                  return 1;
                } else {
                  return i * Math.pow(2, e * -10) * M((e - a) * s) + 1;
                }
              }
              var h = t === "out" ? o : t === "in" ? function (e) {
                return 1 - o(1 - e);
              } : Nt(o);
              s = S / s;
              h.config = function (n, r) {
                return e(t, n, r);
              };
              return h;
            };
            var Ut = function e(t, n = 1.70158) {
              function r(e) {
                if (e) {
                  return --e * e * ((n + 1) * e + n) + 1;
                } else {
                  return 0;
                }
              }
              var i = t === "out" ? r : t === "in" ? function (e) {
                return 1 - r(1 - e);
              } : Nt(r);
              i.config = function (n) {
                return e(t, n);
              };
              return i;
            };
            ye("Linear,Quad,Cubic,Quart,Quint,Strong", function (e, t) {
              var n = t < 5 ? t + 1 : t;
              Ft(e + ",Power" + (n - 1), t ? function (e) {
                return Math.pow(e, n);
              } : function (e) {
                return e;
              }, function (e) {
                return 1 - Math.pow(1 - e, n);
              }, function (e) {
                if (e < 0.5) {
                  return Math.pow(e * 2, n) / 2;
                } else {
                  return 1 - Math.pow((1 - e) * 2, n) / 2;
                }
              });
            });
            Rt.Linear.easeNone = Rt.none = Rt.Linear.easeIn;
            Ft("Elastic", Gt("in"), Gt("out"), Gt());
            _ = 7.5625;
            g = (y = 1 / (v = 2.75)) * 2;
            w = y * 2.5;
            Ft("Bounce", function (e) {
              return 1 - x(1 - e);
            }, x = function (e) {
              if (e < y) {
                return _ * e * e;
              } else if (e < g) {
                return _ * Math.pow(e - 1.5 / v, 2) + 0.75;
              } else if (e < w) {
                return _ * (e -= 2.25 / v) * e + 0.9375;
              } else {
                return _ * Math.pow(e - 2.625 / v, 2) + 0.984375;
              }
            });
            Ft("Expo", function (e) {
              return Math.pow(2, (e - 1) * 10) * e + e * e * e * e * e * e * (1 - e);
            });
            Ft("Circ", function (e) {
              return -(k(1 - e * e) - 1);
            });
            Ft("Sine", function (e) {
              if (e === 1) {
                return 1;
              } else {
                return 1 - P(e * E);
              }
            });
            Ft("Back", Ut("in"), Ut("out"), Ut());
            Rt.SteppedEase = Rt.steps = Z.SteppedEase = {
              config: function (e = 1, t) {
                var n = 1 / e;
                var r = e + (t ? 0 : 1);
                var i = t ? 1 : 0;
                return function (e) {
                  return ((r * nt(0, 0.99999999, e) | 0) + i) * n;
                };
              }
            };
            T.ease = Rt["quad.out"];
            ye("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (e) {
              return me += e + "," + e + "Params,";
            });
            function Vt(e, t) {
              this.id = O++;
              e._gsap = this;
              this.target = e;
              this.harness = t;
              this.get = t ? t.get : ve;
              this.set = t ? t.getSetter : on;
            }
            var Ht = function () {
              function e(e) {
                this.vars = e;
                this._delay = +e.delay || 0;
                if (this._repeat = e.repeat === Infinity ? -2 : e.repeat || 0) {
                  this._rDelay = e.repeatDelay || 0;
                  this._yoyo = !!e.yoyo || !!e.yoyoEase;
                }
                this._ts = 1;
                Ke(this, +e.duration, 1, 1);
                this.data = e.data;
                if (o) {
                  this._ctx = o;
                  o.data.push(this);
                }
                if (!f) {
                  Pt.wake();
                }
              }
              var t = e.prototype;
              t.delay = function (e) {
                if (e || e === 0) {
                  if (this.parent && this.parent.smoothChildTiming) {
                    this.startTime(this._start + e - this._delay);
                  }
                  this._delay = e;
                  return this;
                } else {
                  return this._delay;
                }
              };
              t.duration = function (e) {
                if (arguments.length) {
                  return this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e);
                } else {
                  return this.totalDuration() && this._dur;
                }
              };
              t.totalDuration = function (e) {
                if (arguments.length) {
                  this._dirty = 0;
                  return Ke(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1));
                } else {
                  return this._tDur;
                }
              };
              t.totalTime = function (e, t) {
                Mt();
                if (!arguments.length) {
                  return this._tTime;
                }
                var n = this._dp;
                if (n && n.smoothChildTiming && this._ts) {
                  He(this, e);
                  if (!!n._dp && !n.parent) {
                    ze(n, this);
                  }
                  while (n && n.parent) {
                    if (n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts)) {
                      n.totalTime(n._tTime, true);
                    }
                    n = n.parent;
                  }
                  if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e)) {
                    We(this._dp, this, this._start - this._delay);
                  }
                }
                if (this._tTime !== e || !this._dur && !t || this._initted && Math.abs(this._zTime) === C || !this._initted && this._dur && e || !e && !this._initted && (this.add || this._ptLookup)) {
                  if (!this._ts) {
                    this._pTime = e;
                  }
                  Ce(this, e, t);
                }
                return this;
              };
              t.time = function (e, t) {
                if (arguments.length) {
                  return this.totalTime(Math.min(this.totalDuration(), e + Ne(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), t);
                } else {
                  return this._time;
                }
              };
              t.totalProgress = function (e, t) {
                if (arguments.length) {
                  return this.totalTime(this.totalDuration() * e, t);
                } else if (this.totalDuration()) {
                  return Math.min(1, this._tTime / this._tDur);
                } else if (this.rawTime() >= 0 && this._initted) {
                  return 1;
                } else {
                  return 0;
                }
              };
              t.progress = function (e, t) {
                if (arguments.length) {
                  return this.totalTime(this.duration() * (!this._yoyo || this.iteration() & 1 ? e : 1 - e) + Ne(this), t);
                } else if (this.duration()) {
                  return Math.min(1, this._time / this._dur);
                } else if (this.rawTime() > 0) {
                  return 1;
                } else {
                  return 0;
                }
              };
              t.iteration = function (e, t) {
                var n = this.duration() + this._rDelay;
                if (arguments.length) {
                  return this.totalTime(this._time + (e - 1) * n, t);
                } else if (this._repeat) {
                  return Ge(this._tTime, n) + 1;
                } else {
                  return 1;
                }
              };
              t.timeScale = function (e, t) {
                if (!arguments.length) {
                  if (this._rts === -1e-8) {
                    return 0;
                  } else {
                    return this._rts;
                  }
                }
                if (this._rts === e) {
                  return this;
                }
                var n = this.parent && this._ts ? Ue(this.parent._time, this) : this._tTime;
                this._rts = +e || 0;
                this._ts = this._ps || e === -1e-8 ? 0 : this._rts;
                this.totalTime(nt(-Math.abs(this._delay), this.totalDuration(), n), t !== false);
                Ve(this);
                return function (e) {
                  for (var t = e.parent; t && t.parent;) {
                    t._dirty = 1;
                    t.totalDuration();
                    t = t.parent;
                  }
                  return e;
                }(this);
              };
              t.paused = function (e) {
                if (arguments.length) {
                  if (this._ps !== e) {
                    this._ps = e;
                    if (e) {
                      this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
                      this._ts = this._act = 0;
                    } else {
                      Mt();
                      this._ts = this._rts;
                      this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== C && (this._tTime -= C));
                    }
                  }
                  return this;
                } else {
                  return this._ps;
                }
              };
              t.startTime = function (e) {
                if (arguments.length) {
                  this._start = we(e);
                  var t = this.parent || this._dp;
                  if (t && (t._sort || !this.parent)) {
                    We(t, this, this._start - this._delay);
                  }
                  return this;
                }
                return this._start;
              };
              t.endTime = function (e) {
                return this._start + (D(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
              };
              t.rawTime = function (e) {
                var t = this.parent || this._dp;
                if (t) {
                  if (e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1)) {
                    return this._tTime % (this._dur + this._rDelay);
                  } else if (this._ts) {
                    return Ue(t.rawTime(e), this);
                  } else {
                    return this._tTime;
                  }
                } else {
                  return this._tTime;
                }
              };
              t.revert = function (e = ae) {
                var t = a;
                a = e;
                if (Ae(this)) {
                  if (this.timeline) {
                    this.timeline.revert(e);
                  }
                  this.totalTime(-0.01, e.suppressEvents);
                }
                if (this.data !== "nested" && e.kill !== false) {
                  this.kill();
                }
                a = t;
                return this;
              };
              t.globalTime = function (e) {
                for (var t = this, n = arguments.length ? e : t.rawTime(); t;) {
                  n = t._start + n / (Math.abs(t._ts) || 1);
                  t = t._dp;
                }
                if (!this.parent && this._sat) {
                  return this._sat.globalTime(e);
                } else {
                  return n;
                }
              };
              t.repeat = function (e) {
                if (arguments.length) {
                  this._repeat = e === Infinity ? -2 : e;
                  return Ze(this);
                } else if (this._repeat === -2) {
                  return Infinity;
                } else {
                  return this._repeat;
                }
              };
              t.repeatDelay = function (e) {
                if (arguments.length) {
                  var t = this._time;
                  this._rDelay = e;
                  Ze(this);
                  if (t) {
                    return this.time(t);
                  } else {
                    return this;
                  }
                }
                return this._rDelay;
              };
              t.yoyo = function (e) {
                if (arguments.length) {
                  this._yoyo = e;
                  return this;
                } else {
                  return this._yoyo;
                }
              };
              t.seek = function (e, t) {
                return this.totalTime(Qe(this, e), D(t));
              };
              t.restart = function (e, t) {
                this.play().totalTime(e ? -this._delay : 0, D(t));
                if (!this._dur) {
                  this._zTime = -1e-8;
                }
                return this;
              };
              t.play = function (e, t) {
                if (e != null) {
                  this.seek(e, t);
                }
                return this.reversed(false).paused(false);
              };
              t.reverse = function (e, t) {
                if (e != null) {
                  this.seek(e || this.totalDuration(), t);
                }
                return this.reversed(true).paused(false);
              };
              t.pause = function (e, t) {
                if (e != null) {
                  this.seek(e, t);
                }
                return this.paused(true);
              };
              t.resume = function () {
                return this.paused(false);
              };
              t.reversed = function (e) {
                if (arguments.length) {
                  if (!!e !== this.reversed()) {
                    this.timeScale(-this._rts || (e ? -1e-8 : 0));
                  }
                  return this;
                } else {
                  return this._rts < 0;
                }
              };
              t.invalidate = function () {
                this._initted = this._act = 0;
                this._zTime = -1e-8;
                return this;
              };
              t.isActive = function () {
                var e;
                var t = this.parent || this._dp;
                var n = this._start;
                return !t || !!this._ts && !!this._initted && !!t.isActive() && !!((e = t.rawTime(true)) >= n) && !!(e < this.endTime(true) - C);
              };
              t.eventCallback = function (e, t, n) {
                var r = this.vars;
                if (arguments.length > 1) {
                  if (t) {
                    r[e] = t;
                    if (n) {
                      r[e + "Params"] = n;
                    }
                    if (e === "onUpdate") {
                      this._onUpdate = t;
                    }
                  } else {
                    delete r[e];
                  }
                  return this;
                } else {
                  return r[e];
                }
              };
              t.then = function (e) {
                var t = this;
                var n = t._prom;
                return new Promise(function (r) {
                  var i = I(e) ? e : Ee;
                  function s() {
                    var e = t.then;
                    t.then = null;
                    if (n) {
                      n();
                    }
                    if (I(i) && (i = i(t)) && (i.then || i === t)) {
                      t.then = e;
                    }
                    r(i);
                    t.then = e;
                  }
                  if (t._initted && t.totalProgress() === 1 && t._ts >= 0 || !t._tTime && t._ts < 0) {
                    s();
                  } else {
                    t._prom = s;
                  }
                });
              };
              t.kill = function () {
                yt(this);
              };
              return e;
            }();
            Oe(Ht.prototype, {
              _time: 0,
              _start: 0,
              _end: 0,
              _tTime: 0,
              _tDur: 0,
              _dirty: 0,
              _repeat: 0,
              _yoyo: false,
              parent: null,
              _initted: false,
              _rDelay: 0,
              _ts: 1,
              _dp: 0,
              ratio: 0,
              _zTime: -1e-8,
              _prom: 0,
              _ps: false,
              _rts: 1
            });
            var zt = function (e) {
              function t(t, n) {
                var i;
                if (t === undefined) {
                  t = {};
                }
                (i = e.call(this, t) || this).labels = {};
                i.smoothChildTiming = !!t.smoothChildTiming;
                i.autoRemoveChildren = !!t.autoRemoveChildren;
                i._sort = D(t.sortChildren);
                if (h) {
                  We(t.parent || h, r(i), n);
                }
                if (t.reversed) {
                  i.reverse();
                }
                if (t.paused) {
                  i.paused(true);
                }
                if (t.scrollTrigger) {
                  Xe(r(i), t.scrollTrigger);
                }
                return i;
              }
              i(t, e);
              var n = t.prototype;
              n.to = function (e, t, n) {
                et(0, arguments, this);
                return this;
              };
              n.from = function (e, t, n) {
                et(1, arguments, this);
                return this;
              };
              n.fromTo = function (e, t, n, r) {
                et(2, arguments, this);
                return this;
              };
              n.set = function (e, t, n) {
                t.duration = 0;
                t.parent = this;
                if (!Re(t).repeatDelay) {
                  t.repeat = 0;
                }
                t.immediateRender = !!t.immediateRender;
                new tn(e, t, Qe(this, n), 1);
                return this;
              };
              n.call = function (e, t, n) {
                return We(this, tn.delayedCall(0, e, t), n);
              };
              n.staggerTo = function (e, t, n, r, i, s, a) {
                n.duration = t;
                n.stagger = n.stagger || r;
                n.onComplete = s;
                n.onCompleteParams = a;
                n.parent = this;
                new tn(e, n, Qe(this, i));
                return this;
              };
              n.staggerFrom = function (e, t, n, r, i, s, a) {
                n.runBackwards = 1;
                Re(n).immediateRender = D(n.immediateRender);
                return this.staggerTo(e, t, n, r, i, s, a);
              };
              n.staggerFromTo = function (e, t, n, r, i, s, a, o) {
                r.startAt = n;
                Re(r).immediateRender = D(r.immediateRender);
                return this.staggerTo(e, t, r, i, s, a, o);
              };
              n.render = function (e, t, n) {
                var r;
                var i;
                var s;
                var o;
                var l;
                var d;
                var c;
                var u;
                var p;
                var m;
                var f;
                var _;
                var v = this._time;
                var y = this._dirty ? this.totalDuration() : this._tDur;
                var g = this._dur;
                var w = e <= 0 ? 0 : we(e);
                var x = this._zTime < 0 != e < 0 && (this._initted || !g);
                if (this !== h && w > y && e >= 0) {
                  w = y;
                }
                if (w !== this._tTime || n || x) {
                  if (v !== this._time && g) {
                    w += this._time - v;
                    e += this._time - v;
                  }
                  r = w;
                  p = this._start;
                  d = !(u = this._ts);
                  if (x) {
                    if (!g) {
                      v = this._zTime;
                    }
                    if (e || !t) {
                      this._zTime = e;
                    }
                  }
                  if (this._repeat) {
                    f = this._yoyo;
                    l = g + this._rDelay;
                    if (this._repeat < -1 && e < 0) {
                      return this.totalTime(l * 100 + e, t, n);
                    }
                    r = we(w % l);
                    if (w === y) {
                      o = this._repeat;
                      r = g;
                    } else {
                      if ((o = ~~(m = we(w / l))) && o === m) {
                        r = g;
                        o--;
                      }
                      if (r > g) {
                        r = g;
                      }
                    }
                    m = Ge(this._tTime, l);
                    if (!v && this._tTime && m !== o && this._tTime - m * l - this._dur <= 0) {
                      m = o;
                    }
                    if (f && o & 1) {
                      r = g - r;
                      _ = 1;
                    }
                    if (o !== m && !this._lock) {
                      var b = f && m & 1;
                      var T = b === (f && o & 1);
                      if (o < m) {
                        b = !b;
                      }
                      v = b ? 0 : w % g ? g : w;
                      this._lock = 1;
                      this.render(v || (_ ? 0 : we(o * l)), t, !g)._lock = 0;
                      this._tTime = w;
                      if (!t && this.parent) {
                        vt(this, "onRepeat");
                      }
                      if (this.vars.repeatRefresh && !_) {
                        this.invalidate()._lock = 1;
                        m = o;
                      }
                      if (v && v !== this._time || d !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
                        return this;
                      }
                      g = this._dur;
                      y = this._tDur;
                      if (T) {
                        this._lock = 2;
                        v = b ? g : -0.0001;
                        this.render(v, true);
                        if (this.vars.repeatRefresh && !_) {
                          this.invalidate();
                        }
                      }
                      this._lock = 0;
                      if (!this._ts && !d) {
                        return this;
                      }
                    }
                  }
                  if (this._hasPause && !this._forcing && this._lock < 2) {
                    c = function (e, t, n) {
                      var r;
                      if (n > t) {
                        for (r = e._first; r && r._start <= n;) {
                          if (r.data === "isPause" && r._start > t) {
                            return r;
                          }
                          r = r._next;
                        }
                      } else {
                        for (r = e._last; r && r._start >= n;) {
                          if (r.data === "isPause" && r._start < t) {
                            return r;
                          }
                          r = r._prev;
                        }
                      }
                    }(this, we(v), we(r));
                    if (c) {
                      w -= r - (r = c._start);
                    }
                  }
                  this._tTime = w;
                  this._time = r;
                  this._act = !!u;
                  if (!this._initted) {
                    this._onUpdate = this.vars.onUpdate;
                    this._initted = 1;
                    this._zTime = e;
                    v = 0;
                  }
                  if (!v && w && g && !t && !m && (vt(this, "onStart"), this._tTime !== w)) {
                    return this;
                  }
                  if (r >= v && e >= 0) {
                    for (i = this._first; i;) {
                      s = i._next;
                      if ((i._act || r >= i._start) && i._ts && c !== i) {
                        if (i.parent !== this) {
                          return this.render(e, t, n);
                        }
                        i.render(i._ts > 0 ? (r - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (r - i._start) * i._ts, t, n);
                        if (r !== this._time || !this._ts && !d) {
                          c = 0;
                          if (s) {
                            w += this._zTime = -1e-8;
                          }
                          break;
                        }
                      }
                      i = s;
                    }
                  } else {
                    i = this._last;
                    var A = e < 0 ? e : r;
                    for (; i;) {
                      s = i._prev;
                      if ((i._act || A <= i._end) && i._ts && c !== i) {
                        if (i.parent !== this) {
                          return this.render(e, t, n);
                        }
                        i.render(i._ts > 0 ? (A - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (A - i._start) * i._ts, t, n || a && Ae(i));
                        if (r !== this._time || !this._ts && !d) {
                          c = 0;
                          if (s) {
                            w += this._zTime = A ? -1e-8 : C;
                          }
                          break;
                        }
                      }
                      i = s;
                    }
                  }
                  if (c && !t && (this.pause(), c.render(r >= v ? 0 : -1e-8)._zTime = r >= v ? 1 : -1, this._ts)) {
                    this._start = p;
                    Ve(this);
                    return this.render(e, t, n);
                  }
                  if (this._onUpdate && !t) {
                    vt(this, "onUpdate", true);
                  }
                  if (w === y && this._tTime >= this.totalDuration() || !w && v) {
                    if ((p === this._start || Math.abs(u) !== Math.abs(this._ts)) && !this._lock) {
                      if ((e || !g) && (w === y && this._ts > 0 || !w && this._ts < 0)) {
                        je(this, 1);
                      }
                      if (!t && (!(e < 0) || !!v) && (!!w || !!v || !y)) {
                        vt(this, w === y && e >= 0 ? "onComplete" : "onReverseComplete", true);
                        if (this._prom && (!(w < y) || !(this.timeScale() > 0))) {
                          this._prom();
                        }
                      }
                    }
                  }
                }
                return this;
              };
              n.add = function (e, t) {
                var n = this;
                if (!L(t)) {
                  t = Qe(this, t, e);
                }
                if (!(e instanceof Ht)) {
                  if (U(e)) {
                    e.forEach(function (e) {
                      return n.add(e, t);
                    });
                    return this;
                  }
                  if (R(e)) {
                    return this.addLabel(e, t);
                  }
                  if (!I(e)) {
                    return this;
                  }
                  e = tn.delayedCall(0, e);
                }
                if (this !== e) {
                  return We(this, e, t);
                } else {
                  return this;
                }
              };
              n.getChildren = function (e = true, t = true, n = true, r = -A) {
                var i = [];
                for (var s = this._first; s;) {
                  if (s._start >= r) {
                    if (s instanceof tn) {
                      if (t) {
                        i.push(s);
                      }
                    } else {
                      if (n) {
                        i.push(s);
                      }
                      if (e) {
                        i.push.apply(i, s.getChildren(true, t, n));
                      }
                    }
                  }
                  s = s._next;
                }
                return i;
              };
              n.getById = function (e) {
                var t = this.getChildren(1, 1, 1);
                for (var n = t.length; n--;) {
                  if (t[n].vars.id === e) {
                    return t[n];
                  }
                }
              };
              n.remove = function (e) {
                if (R(e)) {
                  return this.removeLabel(e);
                } else if (I(e)) {
                  return this.killTweensOf(e);
                } else {
                  if (e.parent === this) {
                    Le(this, e);
                  }
                  if (e === this._recent) {
                    this._recent = this._last;
                  }
                  return Be(this);
                }
              };
              n.totalTime = function (t, n) {
                if (arguments.length) {
                  this._forcing = 1;
                  if (!this._dp && this._ts) {
                    this._start = we(Pt.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts));
                  }
                  e.prototype.totalTime.call(this, t, n);
                  this._forcing = 0;
                  return this;
                } else {
                  return this._tTime;
                }
              };
              n.addLabel = function (e, t) {
                this.labels[e] = Qe(this, t);
                return this;
              };
              n.removeLabel = function (e) {
                delete this.labels[e];
                return this;
              };
              n.addPause = function (e, t, n) {
                var r = tn.delayedCall(0, t || re, n);
                r.data = "isPause";
                this._hasPause = 1;
                return We(this, r, Qe(this, e));
              };
              n.removePause = function (e) {
                var t = this._first;
                for (e = Qe(this, e); t;) {
                  if (t._start === e && t.data === "isPause") {
                    je(t);
                  }
                  t = t._next;
                }
              };
              n.killTweensOf = function (e, t, n) {
                var r = this.getTweensOf(e, n);
                for (var i = r.length; i--;) {
                  if (Wt !== r[i]) {
                    r[i].kill(e, t);
                  }
                }
                return this;
              };
              n.getTweensOf = function (e, t) {
                var n;
                var r = [];
                var i = at(e);
                for (var s = this._first, a = L(t); s;) {
                  if (s instanceof tn) {
                    if (be(s._targets, i) && (a ? (!Wt || s._initted && s._ts) && s.globalTime(0) <= t && s.globalTime(s.totalDuration()) > t : !t || s.isActive())) {
                      r.push(s);
                    }
                  } else if ((n = s.getTweensOf(i, t)).length) {
                    r.push.apply(r, n);
                  }
                  s = s._next;
                }
                return r;
              };
              n.tweenTo = function (e, t) {
                t = t || {};
                var n;
                var r = this;
                var i = Qe(r, e);
                var s = t;
                var a = s.startAt;
                var o = s.onStart;
                var h = s.onStartParams;
                var l = s.immediateRender;
                var d = tn.to(r, Oe({
                  ease: t.ease || "none",
                  lazy: false,
                  immediateRender: false,
                  time: i,
                  overwrite: "auto",
                  duration: t.duration || Math.abs((i - (a && "time" in a ? a.time : r._time)) / r.timeScale()) || C,
                  onStart: function () {
                    r.pause();
                    if (!n) {
                      var e = t.duration || Math.abs((i - (a && "time" in a ? a.time : r._time)) / r.timeScale());
                      if (d._dur !== e) {
                        Ke(d, e, 0, 1).render(d._time, true, true);
                      }
                      n = 1;
                    }
                    if (o) {
                      o.apply(d, h || []);
                    }
                  }
                }, t));
                if (l) {
                  return d.render(0);
                } else {
                  return d;
                }
              };
              n.tweenFromTo = function (e, t, n) {
                return this.tweenTo(t, Oe({
                  startAt: {
                    time: Qe(this, e)
                  }
                }, n));
              };
              n.recent = function () {
                return this._recent;
              };
              n.nextLabel = function (e = this._time) {
                return _t(this, Qe(this, e));
              };
              n.previousLabel = function (e = this._time) {
                return _t(this, Qe(this, e), 1);
              };
              n.currentLabel = function (e) {
                if (arguments.length) {
                  return this.seek(e, true);
                } else {
                  return this.previousLabel(this._time + C);
                }
              };
              n.shiftChildren = function (e, t, n = 0) {
                var r;
                var i = this._first;
                var s = this.labels;
                for (e = we(e); i;) {
                  if (i._start >= n) {
                    i._start += e;
                    i._end += e;
                  }
                  i = i._next;
                }
                if (t) {
                  for (r in s) {
                    if (s[r] >= n) {
                      s[r] += e;
                    }
                  }
                }
                return Be(this);
              };
              n.invalidate = function (t) {
                var n = this._first;
                for (this._lock = 0; n;) {
                  n.invalidate(t);
                  n = n._next;
                }
                return e.prototype.invalidate.call(this, t);
              };
              n.clear = function (e = true) {
                var t;
                for (var n = this._first; n;) {
                  t = n._next;
                  this.remove(n);
                  n = t;
                }
                if (this._dp) {
                  this._time = this._tTime = this._pTime = 0;
                }
                if (e) {
                  this.labels = {};
                }
                return Be(this);
              };
              n.totalDuration = function (e) {
                var t;
                var n;
                var r;
                var i = 0;
                var s = this;
                var a = s._last;
                var o = A;
                if (arguments.length) {
                  return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -e : e));
                }
                if (s._dirty) {
                  for (r = s.parent; a;) {
                    t = a._prev;
                    if (a._dirty) {
                      a.totalDuration();
                    }
                    if ((n = a._start) > o && s._sort && a._ts && !s._lock) {
                      s._lock = 1;
                      We(s, a, n - a._delay, 1)._lock = 0;
                    } else {
                      o = n;
                    }
                    if (n < 0 && a._ts) {
                      i -= n;
                      if (!r && !s._dp || r && r.smoothChildTiming) {
                        s._start += we(n / s._ts);
                        s._time -= n;
                        s._tTime -= n;
                      }
                      s.shiftChildren(-n, false, -Infinity);
                      o = 0;
                    }
                    if (a._end > i && a._ts) {
                      i = a._end;
                    }
                    a = t;
                  }
                  Ke(s, s === h && s._time > i ? s._time : i, 1, 1);
                  s._dirty = 0;
                }
                return s._tDur;
              };
              t.updateRoot = function (e) {
                if (h._ts) {
                  Ce(h, Ue(e, h));
                  p = Pt.frame;
                }
                if (Pt.frame >= ue) {
                  ue += b.autoSleep || 120;
                  var t = h._first;
                  if ((!t || !t._ts) && b.autoSleep && Pt._listeners.length < 2) {
                    while (t && !t._ts) {
                      t = t._next;
                    }
                    if (!t) {
                      Pt.sleep();
                    }
                  }
                }
              };
              return t;
            }(Ht);
            Oe(zt.prototype, {
              _lock: 0,
              _hasPause: 0,
              _forcing: 0
            });
            var Wt;
            var Xt;
            function Yt(e, t, n, r, i, s, a) {
              var o;
              var h;
              var l;
              var d;
              var c;
              var u;
              var p;
              var m;
              var f = new _n(this._pt, e, t, 0, 1, dn, null, i);
              var _ = 0;
              var v = 0;
              f.b = n;
              f.e = r;
              n += "";
              if (p = ~(r += "").indexOf("random(")) {
                r = mt(r);
              }
              if (s) {
                s(m = [n, r], e, t);
                n = m[0];
                r = m[1];
              }
              h = n.match(Y) || [];
              while (o = Y.exec(r)) {
                d = o[0];
                c = r.substring(_, o.index);
                if (l) {
                  l = (l + 1) % 5;
                } else if (c.substr(-5) === "rgba(") {
                  l = 1;
                }
                if (d !== h[v++]) {
                  u = parseFloat(h[v - 1]) || 0;
                  f._pt = {
                    _next: f._pt,
                    p: c || v === 1 ? c : ",",
                    s: u,
                    c: d.charAt(1) === "=" ? xe(u, d) - u : parseFloat(d) - u,
                    m: l && l < 4 ? Math.round : 0
                  };
                  _ = Y.lastIndex;
                }
              }
              f.c = _ < r.length ? r.substring(_, r.length) : "";
              f.fp = a;
              if (q.test(r) || p) {
                f.e = 0;
              }
              this._pt = f;
              return f;
            }
            function qt(e, t, n, r, i, s, a, o, h, l) {
              if (I(r)) {
                r = r(i || 0, e, s);
              }
              var d;
              var c = e[t];
              var u = n !== "get" ? n : I(c) ? h ? e[t.indexOf("set") || !I(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](h) : e[t]() : c;
              var p = I(c) ? h ? sn : rn : nn;
              if (R(r)) {
                if (~r.indexOf("random(")) {
                  r = mt(r);
                }
                if (r.charAt(1) === "=" && ((d = xe(u, r) + (rt(u) || 0)) || d === 0)) {
                  r = d;
                }
              }
              if (!l || u !== r || Xt) {
                if (isNaN(u * r) || r === "") {
                  if (!c && !(t in e)) {
                    ee(t, r);
                  }
                  return Yt.call(this, e, t, u, r, p, o || b.stringFilter, h);
                } else {
                  d = new _n(this._pt, e, t, +u || 0, r - (u || 0), typeof c == "boolean" ? ln : hn, 0, p);
                  if (h) {
                    d.fp = h;
                  }
                  if (a) {
                    d.modifier(a, this, e);
                  }
                  return this._pt = d;
                }
              }
            }
            function Jt(e, t, n, r, i, s) {
              var a;
              var o;
              var h;
              var l;
              if (de[e] && (a = new de[e]()).init(i, a.rawVars ? t[e] : function (e, t, n, r, i) {
                if (I(e)) {
                  e = $t(e, i, t, n, r);
                }
                if (!B(e) || e.style && e.nodeType || U(e) || G(e)) {
                  if (R(e)) {
                    return $t(e, i, t, n, r);
                  } else {
                    return e;
                  }
                }
                var s;
                var a = {};
                for (s in e) {
                  a[s] = $t(e[s], i, t, n, r);
                }
                return a;
              }(t[e], r, i, s, n), n, r, s) !== false && (n._pt = o = new _n(n._pt, i, e, 0, 1, a.render, a, 0, a.priority), n !== m)) {
                h = n._ptLookup[n._targets.indexOf(i)];
                l = a._props.length;
                while (l--) {
                  h[a._props[l]] = o;
                }
              }
              return a;
            }
            var Kt = function e(t, n, r) {
              var i;
              var o;
              var l;
              var d;
              var c;
              var u;
              var p;
              var m;
              var f;
              var _;
              var v;
              var y;
              var g;
              var w = t.vars;
              var x = w.ease;
              var b = w.startAt;
              var S = w.immediateRender;
              var E = w.lazy;
              var O = w.onUpdate;
              var k = w.runBackwards;
              var P = w.yoyoEase;
              var M = w.keyframes;
              var R = w.autoRevert;
              var I = t._dur;
              var L = t._startAt;
              var j = t._targets;
              var B = t.parent;
              var F = B && B.data === "nested" ? B.vars.targets : j;
              var N = t._overwrite === "auto" && !s;
              var G = t.timeline;
              var U = w.easeReverse || P;
              if (G && (!M || !x)) {
                x = "none";
              }
              t._ease = Dt(x, T.ease);
              t._rEase = U && (Dt(U) || t._ease);
              t._from = !G && !!w.runBackwards;
              if (t._from) {
                t.ratio = 1;
              }
              if (!G || M && !w.stagger) {
                y = (m = j[0] ? _e(j[0]).harness : 0) && w[m.prop];
                i = Me(w, oe);
                if (L) {
                  if (L._zTime < 0) {
                    L.progress(1);
                  }
                  if (n < 0 && k && S && !R) {
                    L.render(-1, true);
                  } else {
                    L.revert(k && I ? se : ie);
                  }
                  L._lazy = 0;
                }
                if (b) {
                  je(t._startAt = tn.set(j, Oe({
                    data: "isStart",
                    overwrite: false,
                    parent: B,
                    immediateRender: true,
                    lazy: !L && D(E),
                    startAt: null,
                    delay: 0,
                    onUpdate: O && function () {
                      return vt(t, "onUpdate");
                    },
                    stagger: 0
                  }, b)));
                  t._startAt._dp = 0;
                  t._startAt._sat = t;
                  if (n < 0 && (a || !S && !R)) {
                    t._startAt.revert(se);
                  }
                  if (S && I && n <= 0 && r <= 0) {
                    if (n) {
                      t._zTime = n;
                    }
                    return;
                  }
                } else if (k && I && !L) {
                  if (n) {
                    S = false;
                  }
                  l = Oe({
                    overwrite: false,
                    data: "isFromStart",
                    lazy: S && !L && D(E),
                    immediateRender: S,
                    stagger: 0,
                    parent: B
                  }, i);
                  if (y) {
                    l[m.prop] = y;
                  }
                  je(t._startAt = tn.set(j, l));
                  t._startAt._dp = 0;
                  t._startAt._sat = t;
                  if (n < 0) {
                    if (a) {
                      t._startAt.revert(se);
                    } else {
                      t._startAt.render(-1, true);
                    }
                  }
                  t._zTime = n;
                  if (S) {
                    if (!n) {
                      return;
                    }
                  } else {
                    e(t._startAt, C, C);
                  }
                }
                t._pt = t._ptCache = 0;
                E = I && D(E) || E && !I;
                o = 0;
                for (; o < j.length; o++) {
                  p = (c = j[o])._gsap || fe(j)[o]._gsap;
                  t._ptLookup[o] = _ = {};
                  if (le[p.id] && he.length) {
                    Te();
                  }
                  v = F === j ? o : F.indexOf(c);
                  if (m && (f = new m()).init(c, y || i, t, v, F) !== false) {
                    t._pt = d = new _n(t._pt, c, f.name, 0, 1, f.render, f, 0, f.priority);
                    f._props.forEach(function (e) {
                      _[e] = d;
                    });
                    if (f.priority) {
                      u = 1;
                    }
                  }
                  if (!m || y) {
                    for (l in i) {
                      if (de[l] && (f = Jt(l, i, t, v, c, F))) {
                        if (f.priority) {
                          u = 1;
                        }
                      } else {
                        _[l] = d = qt.call(t, c, l, "get", i[l], v, F, 0, w.stringFilter);
                      }
                    }
                  }
                  if (t._op && t._op[o]) {
                    t.kill(c, t._op[o]);
                  }
                  if (N && t._pt) {
                    Wt = t;
                    h.killTweensOf(c, _, t.globalTime(n));
                    g = !t.parent;
                    Wt = 0;
                  }
                  if (t._pt && E) {
                    le[p.id] = 1;
                  }
                }
                if (u) {
                  fn(t);
                }
                if (t._onInit) {
                  t._onInit(t);
                }
              }
              t._onUpdate = O;
              t._initted = (!t._op || t._pt) && !g;
              if (M && n <= 0) {
                G.render(A, true, true);
              }
            };
            function Zt(e, t, n, r) {
              var i;
              var s;
              var a = t.ease || r || "power1.inOut";
              if (U(t)) {
                s = n[e] ||= [];
                t.forEach(function (e, n) {
                  return s.push({
                    t: n / (t.length - 1) * 100,
                    v: e,
                    e: a
                  });
                });
              } else {
                for (i in t) {
                  s = n[i] ||= [];
                  if (i !== "ease") {
                    s.push({
                      t: parseFloat(e),
                      v: t[i],
                      e: a
                    });
                  }
                }
              }
            }
            function $t(e, t, n, r, i) {
              if (I(e)) {
                return e.call(t, n, r, i);
              } else if (R(e) && ~e.indexOf("random(")) {
                return mt(e);
              } else {
                return e;
              }
            }
            var Qt = me + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert";
            var en = {};
            ye(Qt + ",id,stagger,delay,duration,paused,scrollTrigger", function (e) {
              return en[e] = 1;
            });
            var tn = function (e) {
              function t(t, n, i, a) {
                var o;
                if (typeof n == "number") {
                  i.duration = n;
                  n = i;
                  i = null;
                }
                var l;
                var d;
                var c;
                var u;
                var p;
                var m;
                var f;
                var _;
                var v = (o = e.call(this, a ? n : Re(n)) || this).vars;
                var y = v.duration;
                var g = v.delay;
                var w = v.immediateRender;
                var x = v.stagger;
                var T = v.overwrite;
                var A = v.keyframes;
                var C = v.defaults;
                var S = v.scrollTrigger;
                var E = n.parent || h;
                var O = (U(t) || G(t) ? L(t[0]) : "length" in n) ? [t] : at(t);
                o._targets = O.length ? fe(O) : te(0, !b.nullTargetWarn) || [];
                o._ptLookup = [];
                o._overwrite = T;
                if (A || x || N(y) || N(g)) {
                  var k = (n = o.vars).easeReverse || n.yoyoEase;
                  (l = o.timeline = new zt({
                    data: "nested",
                    defaults: C || {},
                    targets: E && E.data === "nested" ? E.vars.targets : O
                  })).kill();
                  l.parent = l._dp = r(o);
                  l._start = 0;
                  if (x || N(y) || N(g)) {
                    u = O.length;
                    f = x && lt(x);
                    if (B(x)) {
                      for (p in x) {
                        if (~Qt.indexOf(p)) {
                          _ ||= {};
                          _[p] = x[p];
                        }
                      }
                    }
                    for (d = 0; d < u; d++) {
                      (c = Me(n, en)).stagger = 0;
                      if (k) {
                        c.easeReverse = k;
                      }
                      if (_) {
                        ke(c, _);
                      }
                      m = O[d];
                      c.duration = +$t(y, r(o), d, m, O);
                      c.delay = (+$t(g, r(o), d, m, O) || 0) - o._delay;
                      if (!x && u === 1 && c.delay) {
                        o._delay = g = c.delay;
                        o._start += g;
                        c.delay = 0;
                      }
                      l.to(m, c, f ? f(d, m, O) : 0);
                      l._ease = Rt.none;
                    }
                    if (l.duration()) {
                      y = g = 0;
                    } else {
                      o.timeline = 0;
                    }
                  } else if (A) {
                    Re(Oe(l.vars.defaults, {
                      ease: "none"
                    }));
                    l._ease = Dt(A.ease || n.ease || "none");
                    var P;
                    var M;
                    var R;
                    var I = 0;
                    if (U(A)) {
                      A.forEach(function (e) {
                        return l.to(O, e, ">");
                      });
                      l.duration();
                    } else {
                      c = {};
                      for (p in A) {
                        if (p !== "ease" && p !== "easeEach") {
                          Zt(p, A[p], c, A.easeEach);
                        }
                      }
                      for (p in c) {
                        P = c[p].sort(function (e, t) {
                          return e.t - t.t;
                        });
                        I = 0;
                        d = 0;
                        for (; d < P.length; d++) {
                          (R = {
                            ease: (M = P[d]).e,
                            duration: (M.t - (d ? P[d - 1].t : 0)) / 100 * y
                          })[p] = M.v;
                          l.to(O, R, I);
                          I += R.duration;
                        }
                      }
                      if (l.duration() < y) {
                        l.to({}, {
                          duration: y - l.duration()
                        });
                      }
                    }
                  }
                  if (!y) {
                    o.duration(y = l.duration());
                  }
                } else {
                  o.timeline = 0;
                }
                if (T === true && !s) {
                  Wt = r(o);
                  h.killTweensOf(O);
                  Wt = 0;
                }
                We(E, r(o), i);
                if (n.reversed) {
                  o.reverse();
                }
                if (n.paused) {
                  o.paused(true);
                }
                if (w || !y && !A && o._start === we(E._time) && D(w) && Fe(r(o)) && E.data !== "nested") {
                  o._tTime = -1e-8;
                  o.render(Math.max(0, -g) || 0);
                }
                if (S) {
                  Xe(r(o), S);
                }
                return o;
              }
              i(t, e);
              var n = t.prototype;
              n.render = function (e, t, n) {
                var r;
                var i;
                var s;
                var o;
                var h;
                var l;
                var d;
                var c;
                var u = this._time;
                var p = this._tDur;
                var m = this._dur;
                var f = e < 0;
                var _ = e > p - C && !f ? p : e < C ? 0 : e;
                if (m) {
                  if (_ !== this._tTime || !e || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== f || this._lazy) {
                    r = _;
                    c = this.timeline;
                    if (this._repeat) {
                      o = m + this._rDelay;
                      if (this._repeat < -1 && f) {
                        return this.totalTime(o * 100 + e, t, n);
                      }
                      r = we(_ % o);
                      if (_ === p) {
                        s = this._repeat;
                        r = m;
                      } else if ((s = ~~(h = we(_ / o))) && s === h) {
                        r = m;
                        s--;
                      } else if (r > m) {
                        r = m;
                      }
                      if (l = this._yoyo && s & 1) {
                        r = m - r;
                      }
                      h = Ge(this._tTime, o);
                      if (r === u && !n && this._initted && s === h) {
                        this._tTime = _;
                        return this;
                      }
                      if (s !== h && this.vars.repeatRefresh && !l && !this._lock && r !== o && this._initted) {
                        this._lock = n = 1;
                        this.render(we(o * s), true).invalidate()._lock = 0;
                      }
                    }
                    if (!this._initted) {
                      if (Ye(this, f ? e : r, n, t, _)) {
                        this._tTime = 0;
                        return this;
                      }
                      if (u !== this._time && (!n || !this.vars.repeatRefresh || s === h)) {
                        return this;
                      }
                      if (m !== this._dur) {
                        return this.render(e, t, n);
                      }
                    }
                    if (this._rEase) {
                      var v = r < u;
                      if (v !== this._inv) {
                        var y = v ? u : m - u;
                        this._inv = v;
                        if (this._from) {
                          this.ratio = 1 - this.ratio;
                        }
                        this._invRatio = this.ratio;
                        this._invTime = u;
                        this._invRecip = y ? (v ? -1 : 1) / y : 0;
                        this._invScale = v ? -this.ratio : 1 - this.ratio;
                        this._invEase = v ? this._rEase : this._ease;
                      }
                      this.ratio = d = this._invRatio + this._invScale * this._invEase((r - this._invTime) * this._invRecip);
                    } else {
                      this.ratio = d = this._ease(r / m);
                    }
                    if (this._from) {
                      this.ratio = d = 1 - d;
                    }
                    this._tTime = _;
                    this._time = r;
                    if (!this._act && this._ts) {
                      this._act = 1;
                      this._lazy = 0;
                    }
                    if (!u && _ && !t && !h && (vt(this, "onStart"), this._tTime !== _)) {
                      return this;
                    }
                    for (i = this._pt; i;) {
                      i.r(d, i.d);
                      i = i._next;
                    }
                    if (!c || !c.render(e < 0 ? e : c._dur * c._ease(r / this._dur), t, n)) {
                      if (this._startAt) {
                        this._zTime = e;
                      }
                    }
                    if (this._onUpdate && !t) {
                      if (f) {
                        De(this, e, 0, n);
                      }
                      vt(this, "onUpdate");
                    }
                    if (this._repeat && s !== h && this.vars.onRepeat && !t && this.parent) {
                      vt(this, "onRepeat");
                    }
                    if ((_ === this._tDur || !_) && this._tTime === _) {
                      if (f && !this._onUpdate) {
                        De(this, e, 0, true);
                      }
                      if ((e || !m) && (_ === this._tDur && this._ts > 0 || !_ && this._ts < 0)) {
                        je(this, 1);
                      }
                      if (!t && (!f || !!u) && (!!_ || !!u || !!l)) {
                        vt(this, _ === p ? "onComplete" : "onReverseComplete", true);
                        if (this._prom && (!(_ < p) || !(this.timeScale() > 0))) {
                          this._prom();
                        }
                      }
                    }
                  }
                } else {
                  (function (e, t, n, r) {
                    var i;
                    var s;
                    var o;
                    var h = e.ratio;
                    var l = t < 0 || !t && (!e._start && qe(e) && (e._initted || !Je(e)) || (e._ts < 0 || e._dp._ts < 0) && !Je(e)) ? 0 : 1;
                    var d = e._rDelay;
                    var c = 0;
                    if (d && e._repeat) {
                      c = nt(0, e._tDur, t);
                      s = Ge(c, d);
                      if (e._yoyo && s & 1) {
                        l = 1 - l;
                      }
                      if (s !== Ge(e._tTime, d)) {
                        h = 1 - l;
                        if (e.vars.repeatRefresh && e._initted) {
                          e.invalidate();
                        }
                      }
                    }
                    if (l !== h || a || r || e._zTime === C || !t && e._zTime) {
                      if (!e._initted && Ye(e, t, r, n, c)) {
                        return;
                      }
                      o = e._zTime;
                      e._zTime = t || (n ? C : 0);
                      n ||= t && !o;
                      e.ratio = l;
                      if (e._from) {
                        l = 1 - l;
                      }
                      e._time = 0;
                      e._tTime = c;
                      i = e._pt;
                      while (i) {
                        i.r(l, i.d);
                        i = i._next;
                      }
                      if (t < 0) {
                        De(e, t, 0, true);
                      }
                      if (e._onUpdate && !n) {
                        vt(e, "onUpdate");
                      }
                      if (c && e._repeat && !n && e.parent) {
                        vt(e, "onRepeat");
                      }
                      if ((t >= e._tDur || t < 0) && e.ratio === l) {
                        if (l) {
                          je(e, 1);
                        }
                        if (!n && !a) {
                          vt(e, l ? "onComplete" : "onReverseComplete", true);
                          if (e._prom) {
                            e._prom();
                          }
                        }
                      }
                    } else {
                      e._zTime ||= t;
                    }
                  })(this, e, t, n);
                }
                return this;
              };
              n.targets = function () {
                return this._targets;
              };
              n.invalidate = function (t) {
                if (!t || !this.vars.runBackwards) {
                  this._startAt = 0;
                }
                this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
                this._ptLookup = [];
                if (this.timeline) {
                  this.timeline.invalidate(t);
                }
                return e.prototype.invalidate.call(this, t);
              };
              n.resetTo = function (e, t, n, r, i) {
                if (!f) {
                  Pt.wake();
                }
                if (!this._ts) {
                  this.play();
                }
                var s = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
                if (!this._initted) {
                  Kt(this, s);
                }
                if (function (e, t, n, r, i, s, a, o) {
                  var h;
                  var l;
                  var d;
                  var c;
                  var u = (e._pt && e._ptCache || (e._ptCache = {}))[t];
                  if (!u) {
                    u = e._ptCache[t] = [];
                    d = e._ptLookup;
                    c = e._targets.length;
                    while (c--) {
                      if ((h = d[c][t]) && h.d && h.d._pt) {
                        for (h = h.d._pt; h && h.p !== t && h.fp !== t;) {
                          h = h._next;
                        }
                      }
                      if (!h) {
                        Xt = 1;
                        e.vars[t] = "+=0";
                        Kt(e, a);
                        Xt = 0;
                        if (o) {
                          return te();
                        } else {
                          return 1;
                        }
                      }
                      u.push(h);
                    }
                  }
                  for (c = u.length; c--;) {
                    (h = (l = u[c])._pt || l).s = !r && r !== 0 || i ? h.s + (r || 0) + s * h.c : r;
                    h.c = n - h.s;
                    l.e &&= ge(n) + rt(l.e);
                    l.b &&= h.s + rt(l.b);
                  }
                }(this, e, t, n, r, this._ease(s / this._dur), s, i)) {
                  return this.resetTo(e, t, n, r, 1);
                } else {
                  He(this, 0);
                  if (!this.parent) {
                    Ie(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
                  }
                  return this.render(0);
                }
              };
              n.kill = function (e, t = "all") {
                if (!e && (!t || t === "all")) {
                  this._lazy = this._pt = 0;
                  if (this.parent) {
                    yt(this);
                  } else if (this.scrollTrigger) {
                    this.scrollTrigger.kill(!!a);
                  }
                  return this;
                }
                if (this.timeline) {
                  var n = this.timeline.totalDuration();
                  if (!this.timeline.killTweensOf(e, t, Wt && Wt.vars.overwrite !== true)._first) {
                    yt(this);
                  }
                  if (this.parent && n !== this.timeline.totalDuration()) {
                    Ke(this, this._dur * this.timeline._tDur / n, 0, 1);
                  }
                  return this;
                }
                var r;
                var i;
                var s;
                var o;
                var h;
                var l;
                var d;
                var c = this._targets;
                var u = e ? at(e) : c;
                var p = this._ptLookup;
                var m = this._pt;
                if ((!t || t === "all") && function (e, t) {
                  for (var n = e.length, r = n === t.length; r && n-- && e[n] === t[n];);
                  return n < 0;
                }(c, u)) {
                  if (t === "all") {
                    this._pt = 0;
                  }
                  return yt(this);
                }
                r = this._op = this._op || [];
                if (t !== "all") {
                  if (R(t)) {
                    h = {};
                    ye(t, function (e) {
                      return h[e] = 1;
                    });
                    t = h;
                  }
                  t = function (e, t) {
                    var n;
                    var r;
                    var i;
                    var s;
                    var a = e[0] ? _e(e[0]).harness : 0;
                    var o = a && a.aliases;
                    if (!o) {
                      return t;
                    }
                    n = ke({}, t);
                    for (r in o) {
                      if (r in n) {
                        for (i = (s = o[r].split(",")).length; i--;) {
                          n[s[i]] = n[r];
                        }
                      }
                    }
                    return n;
                  }(c, t);
                }
                d = c.length;
                while (d--) {
                  if (~u.indexOf(c[d])) {
                    i = p[d];
                    if (t === "all") {
                      r[d] = t;
                      o = i;
                      s = {};
                    } else {
                      s = r[d] = r[d] || {};
                      o = t;
                    }
                    for (h in o) {
                      if (l = i && i[h]) {
                        if (!("kill" in l.d) || l.d.kill(h) === true) {
                          Le(this, l, "_pt");
                        }
                        delete i[h];
                      }
                      if (s !== "all") {
                        s[h] = 1;
                      }
                    }
                  }
                }
                if (this._initted && !this._pt && m) {
                  yt(this);
                }
                return this;
              };
              t.to = function (e, n) {
                return new t(e, n, arguments[2]);
              };
              t.from = function (e, t) {
                return et(1, arguments);
              };
              t.delayedCall = function (e, n, r, i) {
                return new t(n, 0, {
                  immediateRender: false,
                  lazy: false,
                  overwrite: false,
                  delay: e,
                  onComplete: n,
                  onReverseComplete: n,
                  onCompleteParams: r,
                  onReverseCompleteParams: r,
                  callbackScope: i
                });
              };
              t.fromTo = function (e, t, n) {
                return et(2, arguments);
              };
              t.set = function (e, n) {
                n.duration = 0;
                if (!n.repeatDelay) {
                  n.repeat = 0;
                }
                return new t(e, n);
              };
              t.killTweensOf = function (e, t, n) {
                return h.killTweensOf(e, t, n);
              };
              return t;
            }(Ht);
            Oe(tn.prototype, {
              _targets: [],
              _lazy: 0,
              _startAt: 0,
              _op: 0,
              _onInit: 0
            });
            ye("staggerTo,staggerFrom,staggerFromTo", function (e) {
              tn[e] = function () {
                var t = new zt();
                var n = it.call(arguments, 0);
                n.splice(e === "staggerFromTo" ? 5 : 4, 0, 0);
                return t[e].apply(t, n);
              };
            });
            function nn(e, t, n) {
              return e[t] = n;
            }
            function rn(e, t, n) {
              return e[t](n);
            }
            function sn(e, t, n, r) {
              return e[t](r.fp, n);
            }
            function an(e, t, n) {
              return e.setAttribute(t, n);
            }
            function on(e, t) {
              if (I(e[t])) {
                return rn;
              } else if (j(e[t]) && e.setAttribute) {
                return an;
              } else {
                return nn;
              }
            }
            function hn(e, t) {
              return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1000000) / 1000000, t);
            }
            function ln(e, t) {
              return t.set(t.t, t.p, !!(t.s + t.c * e), t);
            }
            function dn(e, t) {
              var n = t._pt;
              var r = "";
              if (!e && t.b) {
                r = t.b;
              } else if (e === 1 && t.e) {
                r = t.e;
              } else {
                while (n) {
                  r = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round((n.s + n.c * e) * 10000) / 10000) + r;
                  n = n._next;
                }
                r += t.c;
              }
              t.set(t.t, t.p, r, t);
            }
            function cn(e, t) {
              for (var n = t._pt; n;) {
                n.r(e, n.d);
                n = n._next;
              }
            }
            function un(e, t, n, r) {
              var i;
              for (var s = this._pt; s;) {
                i = s._next;
                if (s.p === r) {
                  s.modifier(e, t, n);
                }
                s = i;
              }
            }
            function pn(e) {
              var t;
              var n;
              for (var r = this._pt; r;) {
                n = r._next;
                if (r.p === e && !r.op || r.op === e) {
                  Le(this, r, "_pt");
                } else if (!r.dep) {
                  t = 1;
                }
                r = n;
              }
              return !t;
            }
            function mn(e, t, n, r) {
              r.mSet(e, t, r.m.call(r.tween, n, r.mt), r);
            }
            function fn(e) {
              var t;
              var n;
              var r;
              var i;
              for (var s = e._pt; s;) {
                t = s._next;
                n = r;
                while (n && n.pr > s.pr) {
                  n = n._next;
                }
                if (s._prev = n ? n._prev : i) {
                  s._prev._next = s;
                } else {
                  r = s;
                }
                if (s._next = n) {
                  n._prev = s;
                } else {
                  i = s;
                }
                s = t;
              }
              e._pt = r;
            }
            var _n = function () {
              function e(e, t, n, r, i, s, a, o, h) {
                this.t = t;
                this.s = r;
                this.c = i;
                this.p = n;
                this.r = s || hn;
                this.d = a || this;
                this.set = o || nn;
                this.pr = h || 0;
                this._next = e;
                if (e) {
                  e._prev = this;
                }
              }
              e.prototype.modifier = function (e, t, n) {
                this.mSet = this.mSet || this.set;
                this.set = mn;
                this.m = e;
                this.mt = n;
                this.tween = t;
              };
              return e;
            }();
            ye(me + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function (e) {
              return oe[e] = 1;
            });
            Z.TweenMax = Z.TweenLite = tn;
            Z.TimelineLite = Z.TimelineMax = zt;
            h = new zt({
              sortChildren: false,
              defaults: T,
              autoRemoveChildren: true,
              id: "root",
              smoothChildTiming: true
            });
            b.stringFilter = kt;
            var vn = [];
            var yn = {};
            var gn = [];
            var wn = 0;
            var xn = 0;
            function bn(e) {
              return (yn[e] || gn).map(function (e) {
                return e();
              });
            }
            function Tn() {
              var e = Date.now();
              var t = [];
              if (e - wn > 2) {
                bn("matchMediaInit");
                vn.forEach(function (e) {
                  var n;
                  var r;
                  var i;
                  var s;
                  var a = e.queries;
                  var o = e.conditions;
                  for (r in a) {
                    if (n = l.matchMedia(a[r]).matches) {
                      i = 1;
                    }
                    if (n !== o[r]) {
                      o[r] = n;
                      s = 1;
                    }
                  }
                  if (s) {
                    e.revert();
                    if (i) {
                      t.push(e);
                    }
                  }
                });
                bn("matchMediaRevert");
                t.forEach(function (e) {
                  return e.onMatch(e, function (t) {
                    return e.add(null, t);
                  });
                });
                wn = e;
                bn("matchMedia");
              }
            }
            var An = function () {
              function e(e, t) {
                this.selector = t && ot(t);
                this.data = [];
                this._r = [];
                this.isReverted = false;
                this.id = xn++;
                if (e) {
                  this.add(e);
                }
              }
              var t = e.prototype;
              t.add = function (e, t, n) {
                if (I(e)) {
                  n = t;
                  t = e;
                  e = I;
                }
                var r = this;
                function i() {
                  var e;
                  var i = o;
                  var s = r.selector;
                  if (i && i !== r) {
                    i.data.push(r);
                  }
                  if (n) {
                    r.selector = ot(n);
                  }
                  o = r;
                  e = t.apply(r, arguments);
                  if (I(e)) {
                    r._r.push(e);
                  }
                  o = i;
                  r.selector = s;
                  r.isReverted = false;
                  return e;
                }
                r.last = i;
                if (e === I) {
                  return i(r, function (e) {
                    return r.add(null, e);
                  });
                } else if (e) {
                  return r[e] = i;
                } else {
                  return i;
                }
              };
              t.ignore = function (e) {
                var t = o;
                o = null;
                e(this);
                o = t;
              };
              t.getTweens = function () {
                var t = [];
                this.data.forEach(function (n) {
                  if (n instanceof e) {
                    return t.push.apply(t, n.getTweens());
                  } else {
                    return n instanceof tn && (!n.parent || n.parent.data !== "nested") && t.push(n);
                  }
                });
                return t;
              };
              t.clear = function () {
                this._r.length = this.data.length = 0;
              };
              t.kill = function (e, t) {
                var n = this;
                if (e) {
                  (function () {
                    var t;
                    var r = n.getTweens();
                    for (var i = n.data.length; i--;) {
                      if ((t = n.data[i]).data === "isFlip") {
                        t.revert();
                        t.getChildren(true, true, false).forEach(function (e) {
                          return r.splice(r.indexOf(e), 1);
                        });
                      }
                    }
                    r.map(function (e) {
                      return {
                        g: e._dur || e._delay || e._sat && !e._sat.vars.immediateRender ? e.globalTime(0) : -Infinity,
                        t: e
                      };
                    }).sort(function (e, t) {
                      return t.g - e.g || -Infinity;
                    }).forEach(function (t) {
                      return t.t.revert(e);
                    });
                    i = n.data.length;
                    while (i--) {
                      if ((t = n.data[i]) instanceof zt) {
                        if (t.data !== "nested") {
                          if (t.scrollTrigger) {
                            t.scrollTrigger.revert();
                          }
                          t.kill();
                        }
                      } else if (!(t instanceof tn) && t.revert) {
                        t.revert(e);
                      }
                    }
                    n._r.forEach(function (t) {
                      return t(e, n);
                    });
                    n.isReverted = true;
                  })();
                } else {
                  this.data.forEach(function (e) {
                    return e.kill && e.kill();
                  });
                }
                this.clear();
                if (t) {
                  for (var r = vn.length; r--;) {
                    if (vn[r].id === this.id) {
                      vn.splice(r, 1);
                    }
                  }
                }
              };
              t.revert = function (e) {
                this.kill(e || {});
              };
              return e;
            }();
            var Cn = function () {
              function e(e) {
                this.contexts = [];
                this.scope = e;
                if (o) {
                  o.data.push(this);
                }
              }
              var t = e.prototype;
              t.add = function (e, t, n) {
                if (!B(e)) {
                  e = {
                    matches: e
                  };
                }
                var r;
                var i;
                var s;
                var a = new An(0, n || this.scope);
                var h = a.conditions = {};
                if (o && !a.selector) {
                  a.selector = o.selector;
                }
                this.contexts.push(a);
                t = a.add("onMatch", t);
                a.queries = e;
                for (i in e) {
                  if (i === "all") {
                    s = 1;
                  } else if (r = l.matchMedia(e[i])) {
                    if (vn.indexOf(a) < 0) {
                      vn.push(a);
                    }
                    if (h[i] = r.matches) {
                      s = 1;
                    }
                    if (r.addListener) {
                      r.addListener(Tn);
                    } else {
                      r.addEventListener("change", Tn);
                    }
                  }
                }
                if (s) {
                  t(a, function (e) {
                    return a.add(null, e);
                  });
                }
                return this;
              };
              t.revert = function (e) {
                this.kill(e || {});
              };
              t.kill = function (e) {
                this.contexts.forEach(function (t) {
                  return t.kill(e, true);
                });
              };
              return e;
            }();
            var Sn = {
              registerPlugin: function () {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
                  t[n] = arguments[n];
                }
                t.forEach(function (e) {
                  return wt(e);
                });
              },
              timeline: function (e) {
                return new zt(e);
              },
              getTweensOf: function (e, t) {
                return h.getTweensOf(e, t);
              },
              getProperty: function (e, t, n, r) {
                if (R(e)) {
                  e = at(e)[0];
                }
                var i = _e(e || {}).get;
                var s = n ? Ee : Se;
                if (n === "native") {
                  n = "";
                }
                if (e) {
                  if (t) {
                    return s((de[t] && de[t].get || i)(e, t, n, r));
                  } else {
                    return function (t, n, r) {
                      return s((de[t] && de[t].get || i)(e, t, n, r));
                    };
                  }
                } else {
                  return e;
                }
              },
              quickSetter: function (e, t, n) {
                if ((e = at(e)).length > 1) {
                  var r = e.map(function (e) {
                    return kn.quickSetter(e, t, n);
                  });
                  var i = r.length;
                  return function (e) {
                    for (var t = i; t--;) {
                      r[t](e);
                    }
                  };
                }
                e = e[0] || {};
                var s = de[t];
                var a = _e(e);
                var o = a.harness && (a.harness.aliases || {})[t] || t;
                var h = s ? function (t) {
                  var r = new s();
                  m._pt = 0;
                  r.init(e, n ? t + n : t, m, 0, [e]);
                  r.render(1, r);
                  if (m._pt) {
                    cn(1, m);
                  }
                } : a.set(e, o);
                if (s) {
                  return h;
                } else {
                  return function (t) {
                    return h(e, o, n ? t + n : t, a, 1);
                  };
                }
              },
              quickTo: function (e, t, n) {
                var r;
                var i = kn.to(e, Oe(((r = {})[t] = "+=0.1", r.paused = true, r.stagger = 0, r), n || {}));
                function s(e, n, r) {
                  return i.resetTo(t, e, n, r);
                }
                s.tween = i;
                return s;
              },
              isTweening: function (e) {
                return h.getTweensOf(e, true).length > 0;
              },
              defaults: function (e) {
                if (e && e.ease) {
                  e.ease = Dt(e.ease, T.ease);
                }
                return Pe(T, e || {});
              },
              config: function (e) {
                return Pe(b, e || {});
              },
              registerEffect: function (e) {
                var t = e.name;
                var n = e.effect;
                var r = e.plugins;
                var i = e.defaults;
                var s = e.extendTimeline;
                (r || "").split(",").forEach(function (e) {
                  return e && !de[e] && !Z[e] && te();
                });
                ce[t] = function (e, t, r) {
                  return n(at(e), Oe(t || {}, i), r);
                };
                if (s) {
                  zt.prototype[t] = function (e, n, r) {
                    return this.add(ce[t](e, B(n) ? n : (r = n) && {}, this), r);
                  };
                }
              },
              registerEase: function (e, t) {
                Rt[e] = Dt(t);
              },
              parseEase: function (e, t) {
                if (arguments.length) {
                  return Dt(e, t);
                } else {
                  return Rt;
                }
              },
              getById: function (e) {
                return h.getById(e);
              },
              exportRoot: function (e = {}, t) {
                var n;
                var r;
                var i = new zt(e);
                i.smoothChildTiming = D(e.smoothChildTiming);
                h.remove(i);
                i._dp = 0;
                i._time = i._tTime = h._time;
                n = h._first;
                while (n) {
                  r = n._next;
                  if (!!t || !!n._dur || !(n instanceof tn) || n.vars.onComplete !== n._targets[0]) {
                    We(i, n, n._start - n._delay);
                  }
                  n = r;
                }
                We(h, i, 0);
                return i;
              },
              context: function (e, t) {
                if (e) {
                  return new An(e, t);
                } else {
                  return o;
                }
              },
              matchMedia: function (e) {
                return new Cn(e);
              },
              matchMediaRefresh: function () {
                return vn.forEach(function (e) {
                  var t;
                  var n;
                  var r = e.conditions;
                  for (n in r) {
                    if (r[n]) {
                      r[n] = false;
                      t = 1;
                    }
                  }
                  if (t) {
                    e.revert();
                  }
                }) || Tn();
              },
              addEventListener: function (e, t) {
                var n = yn[e] ||= [];
                if (!~n.indexOf(t)) {
                  n.push(t);
                }
              },
              removeEventListener: function (e, t) {
                var n = yn[e];
                var r = n && n.indexOf(t);
                if (r >= 0) {
                  n.splice(r, 1);
                }
              },
              utils: {
                wrap: function e(t, n, r) {
                  var i = n - t;
                  if (U(t)) {
                    return pt(t, e(0, t.length), n);
                  } else {
                    return tt(r, function (e) {
                      return (i + (e - t) % i) % i + t;
                    });
                  }
                },
                wrapYoyo: function e(t, n, r) {
                  var i = n - t;
                  var s = i * 2;
                  if (U(t)) {
                    return pt(t, e(0, t.length - 1), n);
                  } else {
                    return tt(r, function (e) {
                      return t + ((e = (s + (e - t) % s) % s || 0) > i ? s - e : e);
                    });
                  }
                },
                distribute: lt,
                random: ut,
                snap: ct,
                normalize: function (e, t, n) {
                  return ft(e, t, 0, 1, n);
                },
                getUnit: rt,
                clamp: function (e, t, n) {
                  return tt(n, function (n) {
                    return nt(e, t, n);
                  });
                },
                splitColor: At,
                toArray: at,
                selector: ot,
                mapRange: ft,
                pipe: function () {
                  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
                    t[n] = arguments[n];
                  }
                  return function (e) {
                    return t.reduce(function (e, t) {
                      return t(e);
                    }, e);
                  };
                },
                unitize: function (e, t) {
                  return function (n) {
                    return e(parseFloat(n)) + (t || rt(n));
                  };
                },
                interpolate: function e(t, n, r, i) {
                  var s = isNaN(t + n) ? 0 : function (e) {
                    return (1 - e) * t + e * n;
                  };
                  if (!s) {
                    var a;
                    var o;
                    var h;
                    var l;
                    var d;
                    var c = R(t);
                    var u = {};
                    if (r === true && (i = 1)) {
                      r = null;
                    }
                    if (c) {
                      t = {
                        p: t
                      };
                      n = {
                        p: n
                      };
                    } else if (U(t) && !U(n)) {
                      h = [];
                      l = t.length;
                      d = l - 2;
                      o = 1;
                      for (; o < l; o++) {
                        h.push(e(t[o - 1], t[o]));
                      }
                      l--;
                      s = function (e) {
                        e *= l;
                        var t = Math.min(d, ~~e);
                        return h[t](e - t);
                      };
                      r = n;
                    } else if (!i) {
                      t = ke(U(t) ? [] : {}, t);
                    }
                    if (!h) {
                      for (a in n) {
                        qt.call(u, t, a, "get", n[a]);
                      }
                      s = function (e) {
                        return cn(e, u) || (c ? t.p : t);
                      };
                    }
                  }
                  return tt(r, s);
                },
                shuffle: ht
              },
              install: Q,
              effects: ce,
              ticker: Pt,
              updateRoot: zt.updateRoot,
              plugins: de,
              globalTimeline: h,
              core: {
                PropTween: _n,
                globals: ne,
                Tween: tn,
                Timeline: zt,
                Animation: Ht,
                getCache: _e,
                _removeLinkedListItem: Le,
                reverting: function () {
                  return a;
                },
                context: function (e) {
                  if (e && o) {
                    o.data.push(e);
                    e._ctx = o;
                  }
                  return o;
                },
                suppressOverwrites: function (e) {
                  return s = e;
                }
              }
            };
            ye("to,from,fromTo,delayedCall,set,killTweensOf", function (e) {
              return Sn[e] = tn[e];
            });
            Pt.add(zt.updateRoot);
            m = Sn.to({}, {
              duration: 0
            });
            function En(e, t) {
              for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t;) {
                n = n._next;
              }
              return n;
            }
            function On(e, t) {
              return {
                name: e,
                headless: 1,
                rawVars: 1,
                init: function (e, n, r) {
                  r._onInit = function (e) {
                    var r;
                    var i;
                    if (R(n)) {
                      r = {};
                      ye(n, function (e) {
                        return r[e] = 1;
                      });
                      n = r;
                    }
                    if (t) {
                      r = {};
                      for (i in n) {
                        r[i] = t(n[i]);
                      }
                      n = r;
                    }
                    (function (e, t) {
                      var n;
                      var r;
                      var i;
                      var s = e._targets;
                      for (n in t) {
                        for (r = s.length; r--;) {
                          if ((i = e._ptLookup[r][n]) && (i = i.d)) {
                            if (i._pt) {
                              i = En(i, n);
                            }
                            if (i && i.modifier) {
                              i.modifier(t[n], e, s[r], n);
                            }
                          }
                        }
                      }
                    })(e, n);
                  };
                }
              };
            }
            var kn = Sn.registerPlugin({
              name: "attr",
              init: function (e, t, n, r, i) {
                var s;
                var a;
                var o;
                this.tween = n;
                for (s in t) {
                  o = e.getAttribute(s) || "";
                  (a = this.add(e, "setAttribute", (o || 0) + "", t[s], r, i, 0, 0, s)).op = s;
                  a.b = o;
                  this._props.push(s);
                }
              },
              render: function (e, t) {
                for (var n = t._pt; n;) {
                  if (a) {
                    n.set(n.t, n.p, n.b, n);
                  } else {
                    n.r(e, n.d);
                  }
                  n = n._next;
                }
              }
            }, {
              name: "endArray",
              headless: 1,
              init: function (e, t) {
                for (var n = t.length; n--;) {
                  this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1);
                }
              }
            }, On("roundProps", dt), On("modifiers"), On("snap", ct)) || Sn;
            tn.version = zt.version = kn.version = "3.15.0";
            u = 1;
            if (F()) {
              Mt();
            }
            Rt.Power0;
            Rt.Power1;
            Rt.Power2;
            Rt.Power3;
            var Pn = Rt.Power4;
            Rt.Linear;
            Rt.Quad;
            Rt.Cubic;
            Rt.Quart;
            Rt.Quint;
            Rt.Strong;
            var Mn = Rt.Elastic;
            Rt.Back;
            Rt.SteppedEase;
            var Rn = Rt.Bounce;
            Rt.Sine;
            var In = Rt.Expo;
            Rt.Circ;
          }
    });
})();
