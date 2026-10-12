(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        71500(e, t, n) {
            "use strict";
        
            n.d(t, {
              os: () => Ee
            });
            var r;
            var i;
            var s;
            var a;
            var o;
            var h;
            var l;
            var d;
            var c = n(48607);
            var u = {};
            var p = 180 / Math.PI;
            var m = Math.PI / 180;
            var f = Math.atan2;
            var _ = /([A-Z])/g;
            var v = /(left|right|width|margin|padding|x)/i;
            var y = /[\s,\(]\S/;
            var g = {
              autoAlpha: "opacity,visibility",
              scale: "scaleX,scaleY",
              alpha: "opacity"
            };
            function w(e, t) {
              return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 10000) / 10000 + t.u, t);
            }
            function x(e, t) {
              return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 10000) / 10000 + t.u, t);
            }
            function b(e, t) {
              return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 10000) / 10000 + t.u : t.b, t);
            }
            function T(e, t) {
              return t.set(t.t, t.p, e === 1 ? t.e : e ? Math.round((t.s + t.c * e) * 10000) / 10000 + t.u : t.b, t);
            }
            function A(e, t) {
              var n = t.s + t.c * e;
              t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
            }
            function C(e, t) {
              return t.set(t.t, t.p, e ? t.e : t.b, t);
            }
            function S(e, t) {
              return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
            }
            function E(e, t, n) {
              return e.style[t] = n;
            }
            function O(e, t, n) {
              return e.style.setProperty(t, n);
            }
            function k(e, t, n) {
              return e._gsap[t] = n;
            }
            function P(e, t, n) {
              return e._gsap.scaleX = e._gsap.scaleY = n;
            }
            function M(e, t, n, r, i) {
              var s = e._gsap;
              s.scaleX = s.scaleY = n;
              s.renderTransform(i, s);
            }
            function R(e, t, n, r, i) {
              var s = e._gsap;
              s[t] = n;
              s.renderTransform(i, s);
            }
            var I = "transform";
            var L = I + "Origin";
            var j = function e(t, n) {
              var r = this;
              var i = this.target;
              var s = i.style;
              var a = i._gsap;
              if (t in u && s) {
                this.tfm = this.tfm || {};
                if (t === "transform") {
                  return g.transform.split(",").forEach(function (t) {
                    return e.call(r, t, n);
                  });
                }
                if (~(t = g[t] || t).indexOf(",")) {
                  t.split(",").forEach(function (e) {
                    return r.tfm[e] = Q(i, e);
                  });
                } else {
                  this.tfm[t] = a.x ? a[t] : Q(i, t);
                }
                if (t === L) {
                  this.tfm.zOrigin = a.zOrigin;
                }
                if (this.props.indexOf(I) >= 0) {
                  return;
                }
                if (a.svg) {
                  this.svgo = i.getAttribute("data-svg-origin");
                  this.props.push(L, n, "");
                }
                t = I;
              }
              if (s || n) {
                this.props.push(t, n, s[t]);
              }
            };
            function B(e) {
              if (e.translate) {
                e.removeProperty("translate");
                e.removeProperty("scale");
                e.removeProperty("rotate");
              }
            }
            function D() {
              var e;
              var t;
              var n = this.props;
              var r = this.target;
              var i = r.style;
              var s = r._gsap;
              for (e = 0; e < n.length; e += 3) {
                if (n[e + 1]) {
                  if (n[e + 1] === 2) {
                    r[n[e]](n[e + 2]);
                  } else {
                    r[n[e]] = n[e + 2];
                  }
                } else if (n[e + 2]) {
                  i[n[e]] = n[e + 2];
                } else {
                  i.removeProperty(n[e].substr(0, 2) === "--" ? n[e] : n[e].replace(_, "-$1").toLowerCase());
                }
              }
              if (this.tfm) {
                for (t in this.tfm) {
                  s[t] = this.tfm[t];
                }
                if (s.svg) {
                  s.renderTransform();
                  r.setAttribute("data-svg-origin", this.svgo || "");
                }
                if ((!(e = l()) || !e.isStart) && !i[I]) {
                  B(i);
                  if (s.zOrigin && i[L]) {
                    i[L] += " " + s.zOrigin + "px";
                    s.zOrigin = 0;
                    s.renderTransform();
                  }
                  s.uncache = 1;
                }
              }
            }
            function F(e, t) {
              var n = {
                target: e,
                props: [],
                revert: D,
                save: j
              };
              if (!e._gsap) {
                c.os.core.getCache(e);
              }
              if (t && e.style && e.nodeType) {
                t.split(",").forEach(function (e) {
                  return n.save(e);
                });
              }
              return n;
            }
            function N(e, t) {
              var n = i.createElementNS ? i.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : i.createElement(e);
              if (n && n.style) {
                return n;
              } else {
                return i.createElement(e);
              }
            }
            var G = function e(t, n, r) {
              var i = getComputedStyle(t);
              return i[n] || i.getPropertyValue(n.replace(_, "-$1").toLowerCase()) || i.getPropertyValue(n) || !r && e(t, V(n) || n, 1) || "";
            };
            var U = "O,Moz,ms,Ms,Webkit".split(",");
            function V(e, t, n) {
              var r = (t || o).style;
              var i = 5;
              if (e in r && !n) {
                return e;
              }
              for (e = e.charAt(0).toUpperCase() + e.substr(1); i-- && !(U[i] + e in r););
              if (i < 0) {
                return null;
              } else {
                return (i === 3 ? "ms" : i >= 0 ? U[i] : "") + e;
              }
            }
            function H() {
              if (typeof window != "undefined" && window.document) {
                r = window;
                i = r.document;
                s = i.documentElement;
                o = N("div") || {
                  style: {}
                };
                N("div");
                I = V(I);
                L = I + "Origin";
                o.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
                d = !!V("perspective");
                l = c.os.core.reverting;
                a = 1;
              }
            }
            function z(e) {
              var t;
              var n = e.ownerSVGElement;
              var r = N("svg", n && n.getAttribute("xmlns") || "http://www.w3.org/2000/svg");
              var i = e.cloneNode(true);
              i.style.display = "block";
              r.appendChild(i);
              s.appendChild(r);
              try {
                t = i.getBBox();
              } catch (e) {}
              r.removeChild(i);
              s.removeChild(r);
              return t;
            }
            function W(e, t) {
              for (var n = t.length; n--;) {
                if (e.hasAttribute(t[n])) {
                  return e.getAttribute(t[n]);
                }
              }
            }
            function X(e) {
              var t;
              var n;
              try {
                t = e.getBBox();
              } catch (r) {
                t = z(e);
                n = 1;
              }
              if ((!t || !t.width && !t.height) && !n) {
                t = z(e);
              }
              if (!t || t.width || t.x || t.y) {
                return t;
              } else {
                return {
                  x: +W(e, ["x", "cx", "x1"]) || 0,
                  y: +W(e, ["y", "cy", "y1"]) || 0,
                  width: 0,
                  height: 0
                };
              }
            }
            function Y(e) {
              return !!e.getCTM && (!e.parentNode || !!e.ownerSVGElement) && !!X(e);
            }
            function q(e, t) {
              if (t) {
                var n;
                var r = e.style;
                if (t in u && t !== L) {
                  t = I;
                }
                if (r.removeProperty) {
                  if ((n = t.substr(0, 2)) === "ms" || t.substr(0, 6) === "webkit") {
                    t = "-" + t;
                  }
                  r.removeProperty(n === "--" ? t : t.replace(_, "-$1").toLowerCase());
                } else {
                  r.removeAttribute(t);
                }
              }
            }
            function J(e, t, n, r, i, s) {
              var a = new c.J7(e._pt, t, n, 0, 1, s ? S : C);
              e._pt = a;
              a.b = r;
              a.e = i;
              e._props.push(n);
              return a;
            }
            var K = {
              deg: 1,
              rad: 1,
              turn: 1
            };
            var Z = {
              grid: 1,
              flex: 1
            };
            var $ = function e(t, n, r, s) {
              var a;
              var h;
              var l;
              var d;
              var p = parseFloat(r) || 0;
              var m = (r + "").trim().substr((p + "").length) || "px";
              var f = o.style;
              var _ = v.test(n);
              var y = t.tagName.toLowerCase() === "svg";
              var g = (y ? "client" : "offset") + (_ ? "Width" : "Height");
              var w = 100;
              var x = s === "px";
              var b = s === "%";
              if (s === m || !p || K[s] || K[m]) {
                return p;
              }
              if (m !== "px" && !x) {
                p = e(t, n, r, "px");
              }
              d = t.getCTM && Y(t);
              if ((b || m === "%") && (u[n] || ~n.indexOf("adius"))) {
                a = d ? t.getBBox()[_ ? "width" : "height"] : t[g];
                return (0, c.E_)(b ? p / a * w : p / 100 * a);
              }
              f[_ ? "width" : "height"] = w + (x ? m : s);
              h = s !== "rem" && ~n.indexOf("adius") || s === "em" && t.appendChild && !y ? t : t.parentNode;
              if (d) {
                h = (t.ownerSVGElement || {}).parentNode;
              }
              if (!h || h === i || !h.appendChild) {
                h = i.body;
              }
              if ((l = h._gsap) && b && l.width && _ && l.time === c.au.time && !l.uncache) {
                return (0, c.E_)(p / l.width * w);
              }
              if (!b || n !== "height" && n !== "width") {
                if ((b || m === "%") && !Z[G(h, "display")]) {
                  f.position = G(t, "position");
                }
                if (h === t) {
                  f.position = "static";
                }
                h.appendChild(o);
                a = o[g];
                h.removeChild(o);
                f.position = "absolute";
              } else {
                var T = t.style[n];
                t.style[n] = w + s;
                a = t[g];
                if (T) {
                  t.style[n] = T;
                } else {
                  q(t, n);
                }
              }
              if (_ && b) {
                (l = (0, c.a0)(h)).time = c.au.time;
                l.width = h[g];
              }
              return (0, c.E_)(x ? a * p / w : a && p ? w / a * p : 0);
            };
            function Q(e, t, n, r) {
              var i;
              if (!a) {
                H();
              }
              if (t in g && t !== "transform" && ~(t = g[t]).indexOf(",")) {
                t = t.split(",")[0];
              }
              if (u[t] && t !== "transform") {
                i = ce(e, r);
                i = t !== "transformOrigin" ? i[t] : i.svg ? i.origin : ue(G(e, L)) + " " + i.zOrigin + "px";
              } else if (!(i = e.style[t]) || i === "auto" || r || ~(i + "").indexOf("calc(")) {
                i = ie[t] && ie[t](e, t, n) || G(e, t) || (0, c.n)(e, t) || (t === "opacity" ? 1 : 0);
              }
              if (n && !~(i + "").trim().indexOf(" ")) {
                return $(e, t, i, n) + n;
              } else {
                return i;
              }
            }
            function ee(e, t, n, r) {
              if (!n || n === "none") {
                var i = V(t, e, 1);
                var s = i && G(e, i, 1);
                if (s && s !== n) {
                  t = i;
                  n = s;
                } else if (t === "borderColor") {
                  n = G(e, "borderTopColor");
                }
              }
              var a;
              var o;
              var h;
              var l;
              var d;
              var u;
              var p;
              var m;
              var f;
              var _;
              var v;
              var y = new c.J7(this._pt, e.style, t, 0, 1, c.l1);
              var g = 0;
              var w = 0;
              y.b = n;
              y.e = r;
              n += "";
              if ((r += "").substring(0, 6) === "var(--") {
                r = G(e, r.substring(4, r.indexOf(")")));
              }
              if (r === "auto") {
                u = e.style[t];
                e.style[t] = r;
                r = G(e, t) || r;
                if (u) {
                  e.style[t] = u;
                } else {
                  q(e, t);
                }
              }
              a = [n, r];
              (0, c.Uc)(a);
              r = a[1];
              h = (n = a[0]).match(c.vM) || [];
              if ((r.match(c.vM) || []).length) {
                while (o = c.vM.exec(r)) {
                  p = o[0];
                  f = r.substring(g, o.index);
                  if (d) {
                    d = (d + 1) % 5;
                  } else if (f.substr(-5) === "rgba(" || f.substr(-5) === "hsla(") {
                    d = 1;
                  }
                  if (p !== (u = h[w++] || "")) {
                    l = parseFloat(u) || 0;
                    v = u.substr((l + "").length);
                    if (p.charAt(1) === "=") {
                      p = (0, c.B0)(l, p) + v;
                    }
                    m = parseFloat(p);
                    _ = p.substr((m + "").length);
                    g = c.vM.lastIndex - _.length;
                    if (!_) {
                      _ = _ || c.Yz.units[t] || v;
                      if (g === r.length) {
                        r += _;
                        y.e += _;
                      }
                    }
                    if (v !== _) {
                      l = $(e, t, u, _) || 0;
                    }
                    y._pt = {
                      _next: y._pt,
                      p: f || w === 1 ? f : ",",
                      s: l,
                      c: m - l,
                      m: d && d < 4 || t === "zIndex" ? Math.round : 0
                    };
                  }
                }
                y.c = g < r.length ? r.substring(g, r.length) : "";
              } else {
                y.r = t === "display" && r === "none" ? S : C;
              }
              if (c.Ks.test(r)) {
                y.e = 0;
              }
              this._pt = y;
              return y;
            }
            var te = {
              top: "0%",
              bottom: "100%",
              left: "0%",
              right: "100%",
              center: "50%"
            };
            function ne(e) {
              var t = e.split(" ");
              var n = t[0];
              var r = t[1] || "50%";
              if (n === "top" || n === "bottom" || r === "left" || r === "right") {
                e = n;
                n = r;
                r = e;
              }
              t[0] = te[n] || n;
              t[1] = te[r] || r;
              return t.join(" ");
            }
            function re(e, t) {
              if (t.tween && t.tween._time === t.tween._dur) {
                var n;
                var r;
                var i;
                var s = t.t;
                var a = s.style;
                var o = t.u;
                var h = s._gsap;
                if (o === "all" || o === true) {
                  a.cssText = "";
                  r = 1;
                } else {
                  for (i = (o = o.split(",")).length; --i > -1;) {
                    n = o[i];
                    if (u[n]) {
                      r = 1;
                      n = n === "transformOrigin" ? L : I;
                    }
                    q(s, n);
                  }
                }
                if (r) {
                  q(s, I);
                  if (h) {
                    if (h.svg) {
                      s.removeAttribute("transform");
                    }
                    a.scale = a.rotate = a.translate = "none";
                    ce(s, 1);
                    h.uncache = 1;
                    B(a);
                  }
                }
              }
            }
            var ie = {
              clearProps: function (e, t, n, r, i) {
                if (i.data !== "isFromStart") {
                  var s = e._pt = new c.J7(e._pt, t, n, 0, 0, re);
                  s.u = r;
                  s.pr = -10;
                  s.tween = i;
                  e._props.push(n);
                  return 1;
                }
              }
            };
            var se = [1, 0, 0, 1, 0, 0];
            var ae = {};
            function oe(e) {
              return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
            }
            function he(e) {
              var t = G(e, I);
              if (oe(t)) {
                return se;
              } else {
                return t.substr(7).match(c.vX).map(c.E_);
              }
            }
            function le(e, t) {
              var n;
              var r;
              var i;
              var a;
              var o = e._gsap || (0, c.a0)(e);
              var h = e.style;
              var l = he(e);
              if (o.svg && e.getAttribute("transform")) {
                if ((l = [(i = e.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") === "1,0,0,1,0,0") {
                  return se;
                } else {
                  return l;
                }
              } else {
                if (l === se && !e.offsetParent && e !== s && !o.svg) {
                  i = h.display;
                  h.display = "block";
                  if (!(n = e.parentNode) || !e.offsetParent && !e.getBoundingClientRect().width) {
                    a = 1;
                    r = e.nextElementSibling;
                    s.appendChild(e);
                  }
                  l = he(e);
                  if (i) {
                    h.display = i;
                  } else {
                    q(e, "display");
                  }
                  if (a) {
                    if (r) {
                      n.insertBefore(e, r);
                    } else if (n) {
                      n.appendChild(e);
                    } else {
                      s.removeChild(e);
                    }
                  }
                }
                if (t && l.length > 6) {
                  return [l[0], l[1], l[4], l[5], l[12], l[13]];
                } else {
                  return l;
                }
              }
            }
            function de(e, t, n, r, i, s) {
              var a;
              var o;
              var h;
              var l = e._gsap;
              var d = i || le(e, true);
              var c = l.xOrigin || 0;
              var u = l.yOrigin || 0;
              var p = l.xOffset || 0;
              var m = l.yOffset || 0;
              var f = d[0];
              var _ = d[1];
              var v = d[2];
              var y = d[3];
              var g = d[4];
              var w = d[5];
              var x = t.split(" ");
              var b = parseFloat(x[0]) || 0;
              var T = parseFloat(x[1]) || 0;
              if (n) {
                if (d !== se && (o = f * y - _ * v)) {
                  h = b * (-_ / o) + T * (f / o) - (f * w - _ * g) / o;
                  b = b * (y / o) + T * (-v / o) + (v * w - y * g) / o;
                  T = h;
                }
              } else {
                b = (a = X(e)).x + (~x[0].indexOf("%") ? b / 100 * a.width : b);
                T = a.y + (~(x[1] || x[0]).indexOf("%") ? T / 100 * a.height : T);
              }
              if (r || r !== false && l.smooth) {
                g = b - c;
                w = T - u;
                l.xOffset = p + (g * f + w * v) - g;
                l.yOffset = m + (g * _ + w * y) - w;
              } else {
                l.xOffset = l.yOffset = 0;
              }
              l.xOrigin = b;
              l.yOrigin = T;
              l.smooth = !!r;
              l.origin = t;
              l.originIsAbsolute = !!n;
              e.style[L] = "0px 0px";
              if (s) {
                J(s, l, "xOrigin", c, b);
                J(s, l, "yOrigin", u, T);
                J(s, l, "xOffset", p, l.xOffset);
                J(s, l, "yOffset", m, l.yOffset);
              }
              e.setAttribute("data-svg-origin", b + " " + T);
            }
            function ce(e, t) {
              var n = e._gsap || new c.n6(e);
              if ("x" in n && !t && !n.uncache) {
                return n;
              }
              var r;
              var i;
              var s;
              var a;
              var o;
              var h;
              var l;
              var u;
              var _;
              var v;
              var y;
              var g;
              var w;
              var x;
              var b;
              var T;
              var A;
              var C;
              var S;
              var E;
              var O;
              var k;
              var P;
              var M;
              var R;
              var j;
              var B;
              var D;
              var F;
              var N;
              var U;
              var V;
              var H = e.style;
              var z = n.scaleX < 0;
              var W = "px";
              var X = "deg";
              var q = getComputedStyle(e);
              var J = G(e, L) || "0";
              r = i = s = h = l = u = _ = v = y = 0;
              a = o = 1;
              n.svg = !!e.getCTM && !!Y(e);
              if (q.translate) {
                if (q.translate !== "none" || q.scale !== "none" || q.rotate !== "none") {
                  H[I] = (q.translate !== "none" ? "translate3d(" + (q.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (q.rotate !== "none" ? "rotate(" + q.rotate + ") " : "") + (q.scale !== "none" ? "scale(" + q.scale.split(" ").join(",") + ") " : "") + (q[I] !== "none" ? q[I] : "");
                }
                H.scale = H.rotate = H.translate = "none";
              }
              x = le(e, n.svg);
              if (n.svg) {
                if (n.uncache) {
                  R = e.getBBox();
                  J = n.xOrigin - R.x + "px " + (n.yOrigin - R.y) + "px";
                  M = "";
                } else {
                  M = !t && e.getAttribute("data-svg-origin");
                }
                de(e, M || J, !!M || n.originIsAbsolute, n.smooth !== false, x);
              }
              g = n.xOrigin || 0;
              w = n.yOrigin || 0;
              if (x !== se) {
                C = x[0];
                S = x[1];
                E = x[2];
                O = x[3];
                r = k = x[4];
                i = P = x[5];
                if (x.length === 6) {
                  a = Math.sqrt(C * C + S * S);
                  o = Math.sqrt(O * O + E * E);
                  h = C || S ? f(S, C) * p : 0;
                  if (_ = E || O ? f(E, O) * p + h : 0) {
                    o *= Math.abs(Math.cos(_ * m));
                  }
                  if (n.svg) {
                    r -= g - (g * C + w * E);
                    i -= w - (g * S + w * O);
                  }
                } else {
                  V = x[6];
                  N = x[7];
                  B = x[8];
                  D = x[9];
                  F = x[10];
                  U = x[11];
                  r = x[12];
                  i = x[13];
                  s = x[14];
                  l = (b = f(V, F)) * p;
                  if (b) {
                    M = k * (T = Math.cos(-b)) + B * (A = Math.sin(-b));
                    R = P * T + D * A;
                    j = V * T + F * A;
                    B = k * -A + B * T;
                    D = P * -A + D * T;
                    F = V * -A + F * T;
                    U = N * -A + U * T;
                    k = M;
                    P = R;
                    V = j;
                  }
                  u = (b = f(-E, F)) * p;
                  if (b) {
                    T = Math.cos(-b);
                    U = O * (A = Math.sin(-b)) + U * T;
                    C = M = C * T - B * A;
                    S = R = S * T - D * A;
                    E = j = E * T - F * A;
                  }
                  h = (b = f(S, C)) * p;
                  if (b) {
                    M = C * (T = Math.cos(b)) + S * (A = Math.sin(b));
                    R = k * T + P * A;
                    S = S * T - C * A;
                    P = P * T - k * A;
                    C = M;
                    k = R;
                  }
                  if (l && Math.abs(l) + Math.abs(h) > 359.9) {
                    l = h = 0;
                    u = 180 - u;
                  }
                  a = (0, c.E_)(Math.sqrt(C * C + S * S + E * E));
                  o = (0, c.E_)(Math.sqrt(P * P + V * V));
                  b = f(k, P);
                  _ = Math.abs(b) > 0.0002 ? b * p : 0;
                  y = U ? 1 / (U < 0 ? -U : U) : 0;
                }
                if (n.svg) {
                  M = e.getAttribute("transform");
                  n.forceCSS = e.setAttribute("transform", "") || !oe(G(e, I));
                  if (M) {
                    e.setAttribute("transform", M);
                  }
                }
              }
              if (Math.abs(_) > 90 && Math.abs(_) < 270) {
                if (z) {
                  a *= -1;
                  _ += h <= 0 ? 180 : -180;
                  h += h <= 0 ? 180 : -180;
                } else {
                  o *= -1;
                  _ += _ <= 0 ? 180 : -180;
                }
              }
              t = t || n.uncache;
              n.x = r - ((n.xPercent = r && (!t && n.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-r) ? -50 : 0))) ? e.offsetWidth * n.xPercent / 100 : 0) + W;
              n.y = i - ((n.yPercent = i && (!t && n.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? e.offsetHeight * n.yPercent / 100 : 0) + W;
              n.z = s + W;
              n.scaleX = (0, c.E_)(a);
              n.scaleY = (0, c.E_)(o);
              n.rotation = (0, c.E_)(h) + X;
              n.rotationX = (0, c.E_)(l) + X;
              n.rotationY = (0, c.E_)(u) + X;
              n.skewX = _ + X;
              n.skewY = v + X;
              n.transformPerspective = y + W;
              if (n.zOrigin = parseFloat(J.split(" ")[2]) || !t && n.zOrigin || 0) {
                H[L] = ue(J);
              }
              n.xOffset = n.yOffset = 0;
              n.force3D = c.Yz.force3D;
              n.renderTransform = n.svg ? ge : d ? ye : me;
              n.uncache = 0;
              return n;
            }
            function ue(e) {
              return (e = e.split(" "))[0] + " " + e[1];
            }
            function pe(e, t, n) {
              var r = (0, c.l_)(t);
              return (0, c.E_)(parseFloat(t) + parseFloat($(e, "x", n + "px", r))) + r;
            }
            function me(e, t) {
              t.z = "0px";
              t.rotationY = t.rotationX = "0deg";
              t.force3D = 0;
              ye(e, t);
            }
            var fe = "0deg";
            var _e = "0px";
            var ve = ") ";
            function ye(e, t) {
              var n = t || this;
              var r = n.xPercent;
              var i = n.yPercent;
              var s = n.x;
              var a = n.y;
              var o = n.z;
              var h = n.rotation;
              var l = n.rotationY;
              var d = n.rotationX;
              var c = n.skewX;
              var u = n.skewY;
              var p = n.scaleX;
              var f = n.scaleY;
              var _ = n.transformPerspective;
              var v = n.force3D;
              var y = n.target;
              var g = n.zOrigin;
              var w = "";
              var x = v === "auto" && e && e !== 1 || v === true;
              if (g && (d !== fe || l !== fe)) {
                var b;
                var T = parseFloat(l) * m;
                var A = Math.sin(T);
                var C = Math.cos(T);
                T = parseFloat(d) * m;
                b = Math.cos(T);
                s = pe(y, s, A * b * -g);
                a = pe(y, a, -Math.sin(T) * -g);
                o = pe(y, o, C * b * -g + g);
              }
              if (_ !== _e) {
                w += "perspective(" + _ + ve;
              }
              if (r || i) {
                w += "translate(" + r + "%, " + i + "%) ";
              }
              if (x || s !== _e || a !== _e || o !== _e) {
                w += o !== _e || x ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + ve;
              }
              if (h !== fe) {
                w += "rotate(" + h + ve;
              }
              if (l !== fe) {
                w += "rotateY(" + l + ve;
              }
              if (d !== fe) {
                w += "rotateX(" + d + ve;
              }
              if (c !== fe || u !== fe) {
                w += "skew(" + c + ", " + u + ve;
              }
              if (p !== 1 || f !== 1) {
                w += "scale(" + p + ", " + f + ve;
              }
              y.style[I] = w || "translate(0, 0)";
            }
            function ge(e, t) {
              var n;
              var r;
              var i;
              var s;
              var a;
              var o = t || this;
              var h = o.xPercent;
              var l = o.yPercent;
              var d = o.x;
              var u = o.y;
              var p = o.rotation;
              var f = o.skewX;
              var _ = o.skewY;
              var v = o.scaleX;
              var y = o.scaleY;
              var g = o.target;
              var w = o.xOrigin;
              var x = o.yOrigin;
              var b = o.xOffset;
              var T = o.yOffset;
              var A = o.forceCSS;
              var C = parseFloat(d);
              var S = parseFloat(u);
              p = parseFloat(p);
              f = parseFloat(f);
              if (_ = parseFloat(_)) {
                f += _ = parseFloat(_);
                p += _;
              }
              if (p || f) {
                p *= m;
                f *= m;
                n = Math.cos(p) * v;
                r = Math.sin(p) * v;
                i = Math.sin(p - f) * -y;
                s = Math.cos(p - f) * y;
                if (f) {
                  _ *= m;
                  a = Math.tan(f - _);
                  i *= a = Math.sqrt(1 + a * a);
                  s *= a;
                  if (_) {
                    a = Math.tan(_);
                    n *= a = Math.sqrt(1 + a * a);
                    r *= a;
                  }
                }
                n = (0, c.E_)(n);
                r = (0, c.E_)(r);
                i = (0, c.E_)(i);
                s = (0, c.E_)(s);
              } else {
                n = v;
                s = y;
                r = i = 0;
              }
              if (C && !~(d + "").indexOf("px") || S && !~(u + "").indexOf("px")) {
                C = $(g, "x", d, "px");
                S = $(g, "y", u, "px");
              }
              if (w || x || b || T) {
                C = (0, c.E_)(C + w - (w * n + x * i) + b);
                S = (0, c.E_)(S + x - (w * r + x * s) + T);
              }
              if (h || l) {
                a = g.getBBox();
                C = (0, c.E_)(C + h / 100 * a.width);
                S = (0, c.E_)(S + l / 100 * a.height);
              }
              a = "matrix(" + n + "," + r + "," + i + "," + s + "," + C + "," + S + ")";
              g.setAttribute("transform", a);
              if (A) {
                g.style[I] = a;
              }
            }
            function we(e, t, n, r, i) {
              var s;
              var a;
              var o = 360;
              var h = (0, c.vQ)(i);
              var l = parseFloat(i) * (h && ~i.indexOf("rad") ? p : 1) - r;
              var d = r + l + "deg";
              if (h) {
                if ((s = i.split("_")[1]) === "short" && (l %= o) !== l % 180) {
                  l += l < 0 ? o : -360;
                }
                if (s === "cw" && l < 0) {
                  l = (l + 36000000000) % o - ~~(l / o) * o;
                } else if (s === "ccw" && l > 0) {
                  l = (l - 36000000000) % o - ~~(l / o) * o;
                }
              }
              e._pt = a = new c.J7(e._pt, t, n, r, l, x);
              a.e = d;
              a.u = "deg";
              e._props.push(n);
              return a;
            }
            function xe(e, t) {
              for (var n in t) {
                e[n] = t[n];
              }
              return e;
            }
            function be(e, t, n) {
              var r;
              var i;
              var s;
              var a;
              var o;
              var h;
              var l;
              var d = xe({}, n._gsap);
              var p = n.style;
              if (d.svg) {
                s = n.getAttribute("transform");
                n.setAttribute("transform", "");
                p[I] = t;
                r = ce(n, 1);
                q(n, I);
                n.setAttribute("transform", s);
              } else {
                s = getComputedStyle(n)[I];
                p[I] = t;
                r = ce(n, 1);
                p[I] = s;
              }
              for (i in u) {
                if ((s = d[i]) !== (a = r[i]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0) {
                  o = (0, c.l_)(s) !== (l = (0, c.l_)(a)) ? $(n, i, s, l) : parseFloat(s);
                  h = parseFloat(a);
                  e._pt = new c.J7(e._pt, r, i, o, h - o, w);
                  e._pt.u = l || 0;
                  e._props.push(i);
                }
              }
              xe(r, d);
            }
            (0, c.fA)("padding,margin,Width,Radius", function (e, t) {
              var n = "Top";
              var r = "Right";
              var i = "Bottom";
              var s = "Left";
              var a = (t < 3 ? [n, r, i, s] : [n + s, n + r, i + r, i + s]).map(function (n) {
                if (t < 2) {
                  return e + n;
                } else {
                  return "border" + n + e;
                }
              });
              ie[t > 1 ? "border" + e : e] = function (e, t, n, r, i) {
                var s;
                var o;
                if (arguments.length < 4) {
                  s = a.map(function (t) {
                    return Q(e, t, n);
                  });
                  if ((o = s.join(" ")).split(s[0]).length === 5) {
                    return s[0];
                  } else {
                    return o;
                  }
                }
                s = (r + "").split(" ");
                o = {};
                a.forEach(function (e, t) {
                  return o[e] = s[t] = s[t] || s[(t - 1) / 2 | 0];
                });
                e.init(t, o, i);
              };
            });
            var Te;
            var Ae;
            var Ce;
            var Se = {
              name: "css",
              register: H,
              targetTest: function (e) {
                return e.style && e.nodeType;
              },
              init: function (e, t, n, r, i) {
                var s;
                var o;
                var h;
                var l;
                var d;
                var p;
                var m;
                var f;
                var _;
                var v;
                var x;
                var C;
                var S;
                var E;
                var O;
                var k;
                var P;
                var M = this._props;
                var R = e.style;
                var j = n.vars.startAt;
                if (!a) {
                  H();
                }
                this.styles = this.styles || F(e);
                k = this.styles.props;
                this.tween = n;
                for (m in t) {
                  if (m !== "autoRound" && (o = t[m], !c.wU[m] || !(0, c.Zm)(m, t, n, r, e, i))) {
                    d = typeof o;
                    p = ie[m];
                    if (d === "function") {
                      d = typeof (o = o.call(n, r, e, i));
                    }
                    if (d === "string" && ~o.indexOf("random(")) {
                      o = (0, c.Vy)(o);
                    }
                    if (p) {
                      if (p(this, e, m, o, n)) {
                        O = 1;
                      }
                    } else if (m.substr(0, 2) === "--") {
                      s = (getComputedStyle(e).getPropertyValue(m) + "").trim();
                      o += "";
                      c.qA.lastIndex = 0;
                      if (!c.qA.test(s)) {
                        f = (0, c.l_)(s);
                        if (_ = (0, c.l_)(o)) {
                          if (f !== _) {
                            s = $(e, m, s, _) + _;
                          }
                        } else if (f) {
                          o += f;
                        }
                      }
                      this.add(R, "setProperty", s, o, r, i, 0, 0, m);
                      M.push(m);
                      k.push(m, 0, R[m]);
                    } else if (d !== "undefined") {
                      if (j && m in j) {
                        s = typeof j[m] == "function" ? j[m].call(n, r, e, i) : j[m];
                        if ((0, c.vQ)(s) && ~s.indexOf("random(")) {
                          s = (0, c.Vy)(s);
                        }
                        if (!(0, c.l_)(s + "") && s !== "auto") {
                          s += c.Yz.units[m] || (0, c.l_)(Q(e, m)) || "";
                        }
                        if ((s + "").charAt(1) === "=") {
                          s = Q(e, m);
                        }
                      } else {
                        s = Q(e, m);
                      }
                      l = parseFloat(s);
                      if (v = d === "string" && o.charAt(1) === "=" && o.substr(0, 2)) {
                        o = o.substr(2);
                      }
                      h = parseFloat(o);
                      if (m in g) {
                        if (m === "autoAlpha") {
                          if (l === 1 && Q(e, "visibility") === "hidden" && h) {
                            l = 0;
                          }
                          k.push("visibility", 0, R.visibility);
                          J(this, R, "visibility", l ? "inherit" : "hidden", h ? "inherit" : "hidden", !h);
                        }
                        if (m !== "scale" && m !== "transform" && ~(m = g[m]).indexOf(",")) {
                          m = m.split(",")[0];
                        }
                      }
                      if (x = m in u) {
                        this.styles.save(m);
                        P = o;
                        if (d === "string" && o.substring(0, 6) === "var(--") {
                          if ((o = G(e, o.substring(4, o.indexOf(")")))).substring(0, 5) === "calc(") {
                            var B = e.style.perspective;
                            e.style.perspective = o;
                            o = G(e, "perspective");
                            if (B) {
                              e.style.perspective = B;
                            } else {
                              q(e, "perspective");
                            }
                          }
                          h = parseFloat(o);
                        }
                        if (!C) {
                          if (!(S = e._gsap).renderTransform || !!t.parseTransform) {
                            ce(e, t.parseTransform);
                          }
                          E = t.smoothOrigin !== false && S.smooth;
                          (C = this._pt = new c.J7(this._pt, R, I, 0, 1, S.renderTransform, S, 0, -1)).dep = 1;
                        }
                        if (m === "scale") {
                          this._pt = new c.J7(this._pt, S, "scaleY", S.scaleY, (v ? (0, c.B0)(S.scaleY, v + h) : h) - S.scaleY || 0, w);
                          this._pt.u = 0;
                          M.push("scaleY", m);
                          m += "X";
                        } else {
                          if (m === "transformOrigin") {
                            k.push(L, 0, R[L]);
                            o = ne(o);
                            if (S.svg) {
                              de(e, o, 0, E, 0, this);
                            } else {
                              if ((_ = parseFloat(o.split(" ")[2]) || 0) !== S.zOrigin) {
                                J(this, S, "zOrigin", S.zOrigin, _);
                              }
                              J(this, R, m, ue(s), ue(o));
                            }
                            continue;
                          }
                          if (m === "svgOrigin") {
                            de(e, o, 1, E, 0, this);
                            continue;
                          }
                          if (m in ae) {
                            we(this, S, m, l, v ? (0, c.B0)(l, v + o) : o);
                            continue;
                          }
                          if (m === "smoothOrigin") {
                            J(this, S, "smooth", S.smooth, o);
                            continue;
                          }
                          if (m === "force3D") {
                            S[m] = o;
                            continue;
                          }
                          if (m === "transform") {
                            be(this, o, e);
                            continue;
                          }
                        }
                      } else if (!(m in R)) {
                        m = V(m) || m;
                      }
                      if (x || (h || h === 0) && (l || l === 0) && !y.test(o) && m in R) {
                        h ||= 0;
                        if ((f = (s + "").substr((l + "").length)) !== (_ = (0, c.l_)(o) || (m in c.Yz.units ? c.Yz.units[m] : f))) {
                          l = $(e, m, s, _);
                        }
                        this._pt = new c.J7(this._pt, x ? S : R, m, l, (v ? (0, c.B0)(l, v + h) : h) - l, x || _ !== "px" && m !== "zIndex" || t.autoRound === false ? w : A);
                        this._pt.u = _ || 0;
                        if (x && P !== o) {
                          this._pt.b = s;
                          this._pt.e = P;
                          this._pt.r = T;
                        } else if (f !== _ && _ !== "%") {
                          this._pt.b = s;
                          this._pt.r = b;
                        }
                      } else if (m in R) {
                        ee.call(this, e, m, s, v ? v + o : o);
                      } else if (m in e) {
                        this.add(e, m, s || e[m], v ? v + o : o, r, i);
                      } else if (m !== "parseTransform") {
                        (0, c.dg)(m, o);
                        continue;
                      }
                      if (!x) {
                        if (m in R) {
                          k.push(m, 0, R[m]);
                        } else if (typeof e[m] == "function") {
                          k.push(m, 2, e[m]());
                        } else {
                          k.push(m, 1, s || e[m]);
                        }
                      }
                      M.push(m);
                    }
                  }
                }
                if (O) {
                  (0, c.St)(this);
                }
              },
              render: function (e, t) {
                if (t.tween._time || !l()) {
                  for (var n = t._pt; n;) {
                    n.r(e, n.d);
                    n = n._next;
                  }
                } else {
                  t.styles.revert();
                }
              },
              get: Q,
              aliases: g,
              getSetter: function (e, t, n) {
                var r = g[t];
                if (r && r.indexOf(",") < 0) {
                  t = r;
                }
                if (t in u && t !== L && (e._gsap.x || Q(e, "x"))) {
                  if (n && h === n) {
                    if (t === "scale") {
                      return P;
                    } else {
                      return k;
                    }
                  } else {
                    return (h = n || {}) && (t === "scale" ? M : R);
                  }
                } else if (e.style && !(0, c.OF)(e.style[t])) {
                  return E;
                } else if (~t.indexOf("-")) {
                  return O;
                } else {
                  return (0, c.Dx)(e, t);
                }
              },
              core: {
                _removeProperty: q,
                _getMatrix: le
              }
            };
            c.os.utils.checkPrefix = V;
            c.os.core.getStyleSaver = F;
            Te = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent";
            Ae = "rotation,rotationX,rotationY,skewX,skewY";
            Ce = (0, c.fA)(Te + "," + Ae + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (e) {
              u[e] = 1;
            });
            (0, c.fA)(Ae, function (e) {
              c.Yz.units[e] = "deg";
              ae[e] = 1;
            });
            g[Ce[13]] = Te + "," + Ae;
            (0, c.fA)("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (e) {
              var t = e.split(":");
              g[t[1]] = Ce[t[0]];
            });
            (0, c.fA)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (e) {
              c.Yz.units[e] = "px";
            });
            c.os.registerPlugin(Se);
            var Ee = c.os.registerPlugin(Se) || c.os;
            Ee.core.Tween;
          }
    });
})();
