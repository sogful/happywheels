(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        58859(e, t, n) {
            var r = typeof Map == "function" && Map.prototype;
            var i = Object.getOwnPropertyDescriptor && r ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
            var s = r && i && typeof i.get == "function" ? i.get : null;
            var a = r && Map.prototype.forEach;
            var o = typeof Set == "function" && Set.prototype;
            var h = Object.getOwnPropertyDescriptor && o ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
            var l = o && h && typeof h.get == "function" ? h.get : null;
            var d = o && Set.prototype.forEach;
            var c = typeof WeakMap == "function" && WeakMap.prototype ? WeakMap.prototype.has : null;
            var u = typeof WeakSet == "function" && WeakSet.prototype ? WeakSet.prototype.has : null;
            var p = typeof WeakRef == "function" && WeakRef.prototype ? WeakRef.prototype.deref : null;
            var m = Boolean.prototype.valueOf;
            var f = Object.prototype.toString;
            var _ = Function.prototype.toString;
            var v = String.prototype.match;
            var y = String.prototype.slice;
            var g = String.prototype.replace;
            var w = String.prototype.toUpperCase;
            var x = String.prototype.toLowerCase;
            var b = RegExp.prototype.test;
            var T = Array.prototype.concat;
            var A = Array.prototype.join;
            var C = Array.prototype.slice;
            var S = Math.floor;
            var E = typeof BigInt == "function" ? BigInt.prototype.valueOf : null;
            var O = Object.getOwnPropertySymbols;
            var k = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null;
            var P = typeof Symbol == "function" && typeof Symbol.iterator == "object";
            var M = typeof Symbol == "function" && Symbol.toStringTag && (Symbol.toStringTag, 1) ? Symbol.toStringTag : null;
            var R = Object.prototype.propertyIsEnumerable;
            var I = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function (e) {
              return e.__proto__;
            } : null);
            function L(e, t) {
              if (e === Infinity || e === -Infinity || e != e || e && e > -1000 && e < 1000 || b.call(/e/, t)) {
                return t;
              }
              var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
              if (typeof e == "number") {
                var r = e < 0 ? -S(-e) : S(e);
                if (r !== e) {
                  var i = String(r);
                  var s = y.call(t, i.length + 1);
                  return g.call(i, n, "$&_") + "." + g.call(g.call(s, /([0-9]{3})/g, "$&_"), /_$/, "");
                }
              }
              return g.call(t, n, "$&_");
            }
            var j = n(42634);
            var B = j.custom;
            var D = W(B) ? B : null;
            var F = {
              __proto__: null,
              double: "\"",
              single: "'"
            };
            var N = {
              __proto__: null,
              double: /(["\\])/g,
              single: /(['\\])/g
            };
            function G(e, t, n) {
              var r = n.quoteStyle || t;
              var i = F[r];
              return i + e + i;
            }
            function U(e) {
              return g.call(String(e), /"/g, "&quot;");
            }
            function V(e) {
              return !M || typeof e != "object" || !(M in e) && e[M] === undefined;
            }
            function H(e) {
              return q(e) === "[object Array]" && V(e);
            }
            function z(e) {
              return q(e) === "[object RegExp]" && V(e);
            }
            function W(e) {
              if (P) {
                return e && typeof e == "object" && e instanceof Symbol;
              }
              if (typeof e == "symbol") {
                return true;
              }
              if (!e || typeof e != "object" || !k) {
                return false;
              }
              try {
                k.call(e);
                return true;
              } catch (e) {}
              return false;
            }
            e.exports = function e(t, r, i, o) {
              var h = r || {};
              if (Y(h, "quoteStyle") && !Y(F, h.quoteStyle)) {
                throw new TypeError("option \"quoteStyle\" must be \"single\" or \"double\"");
              }
              if (Y(h, "maxStringLength") && (typeof h.maxStringLength == "number" ? h.maxStringLength < 0 && h.maxStringLength !== Infinity : h.maxStringLength !== null)) {
                throw new TypeError("option \"maxStringLength\", if provided, must be a positive integer, Infinity, or `null`");
              }
              var f = !Y(h, "customInspect") || h.customInspect;
              if (typeof f != "boolean" && f !== "symbol") {
                throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
              }
              if (Y(h, "indent") && h.indent !== null && h.indent !== "\t" && (parseInt(h.indent, 10) !== h.indent || !(h.indent > 0))) {
                throw new TypeError("option \"indent\" must be \"\\t\", an integer > 0, or `null`");
              }
              if (Y(h, "numericSeparator") && typeof h.numericSeparator != "boolean") {
                throw new TypeError("option \"numericSeparator\", if provided, must be `true` or `false`");
              }
              var w = h.numericSeparator;
              if (t === undefined) {
                return "undefined";
              }
              if (t === null) {
                return "null";
              }
              if (typeof t == "boolean") {
                if (t) {
                  return "true";
                } else {
                  return "false";
                }
              }
              if (typeof t == "string") {
                return K(t, h);
              }
              if (typeof t == "number") {
                if (t === 0) {
                  if (Infinity / t > 0) {
                    return "0";
                  } else {
                    return "-0";
                  }
                }
                var b = String(t);
                if (w) {
                  return L(t, b);
                } else {
                  return b;
                }
              }
              if (typeof t == "bigint") {
                var S = String(t) + "n";
                if (w) {
                  return L(t, S);
                } else {
                  return S;
                }
              }
              var O = h.depth === undefined ? 5 : h.depth;
              if (i === undefined) {
                i = 0;
              }
              if (i >= O && O > 0 && typeof t == "object") {
                if (H(t)) {
                  return "[Array]";
                } else {
                  return "[Object]";
                }
              }
              var B;
              var N = function (e, t) {
                var n;
                if (e.indent === "\t") {
                  n = "\t";
                } else {
                  if (typeof e.indent != "number" || !(e.indent > 0)) {
                    return null;
                  }
                  n = A.call(Array(e.indent + 1), " ");
                }
                return {
                  base: n,
                  prev: A.call(Array(t + 1), n)
                };
              }(h, i);
              if (o === undefined) {
                o = [];
              } else if (J(o, t) >= 0) {
                return "[Circular]";
              }
              function X(t, n, r) {
                if (n) {
                  (o = C.call(o)).push(n);
                }
                if (r) {
                  var s = {
                    depth: h.depth
                  };
                  if (Y(h, "quoteStyle")) {
                    s.quoteStyle = h.quoteStyle;
                  }
                  return e(t, s, i + 1, o);
                }
                return e(t, h, i + 1, o);
              }
              if (typeof t == "function" && !z(t)) {
                var Z = function (e) {
                  if (e.name) {
                    return e.name;
                  }
                  var t = v.call(_.call(e), /^function\s*([\w$]+)/);
                  if (t) {
                    return t[1];
                  } else {
                    return null;
                  }
                }(t);
                var re = ne(t, X);
                return "[Function" + (Z ? ": " + Z : " (anonymous)") + "]" + (re.length > 0 ? " { " + A.call(re, ", ") + " }" : "");
              }
              if (W(t)) {
                var ie = P ? g.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : k.call(t);
                if (typeof t != "object" || P) {
                  return ie;
                } else {
                  return $(ie);
                }
              }
              if ((B = t) && typeof B == "object" && (typeof HTMLElement != "undefined" && B instanceof HTMLElement || typeof B.nodeName == "string" && typeof B.getAttribute == "function")) {
                var se = "<" + x.call(String(t.nodeName));
                for (var ae = t.attributes || [], oe = 0; oe < ae.length; oe++) {
                  se += " " + ae[oe].name + "=" + G(U(ae[oe].value), "double", h);
                }
                se += ">";
                if (t.childNodes && t.childNodes.length) {
                  se += "...";
                }
                return se + "</" + x.call(String(t.nodeName)) + ">";
              }
              if (H(t)) {
                if (t.length === 0) {
                  return "[]";
                }
                var he = ne(t, X);
                if (N && !function (e) {
                  for (var t = 0; t < e.length; t++) {
                    if (J(e[t], "\n") >= 0) {
                      return false;
                    }
                  }
                  return true;
                }(he)) {
                  return "[" + te(he, N) + "]";
                } else {
                  return "[ " + A.call(he, ", ") + " ]";
                }
              }
              if (function (e) {
                return q(e) === "[object Error]" && V(e);
              }(t)) {
                var le = ne(t, X);
                if ("cause" in Error.prototype || !("cause" in t) || R.call(t, "cause")) {
                  if (le.length === 0) {
                    return "[" + String(t) + "]";
                  } else {
                    return "{ [" + String(t) + "] " + A.call(le, ", ") + " }";
                  }
                } else {
                  return "{ [" + String(t) + "] " + A.call(T.call("[cause]: " + X(t.cause), le), ", ") + " }";
                }
              }
              if (typeof t == "object" && f) {
                if (D && typeof t[D] == "function" && j) {
                  return j(t, {
                    depth: O - i
                  });
                }
                if (f !== "symbol" && typeof t.inspect == "function") {
                  return t.inspect();
                }
              }
              if (function (e) {
                if (!s || !e || typeof e != "object") {
                  return false;
                }
                try {
                  s.call(e);
                  try {
                    l.call(e);
                  } catch (e) {
                    return true;
                  }
                  return e instanceof Map;
                } catch (e) {}
                return false;
              }(t)) {
                var de = [];
                if (a) {
                  a.call(t, function (e, n) {
                    de.push(X(n, t, true) + " => " + X(e, t));
                  });
                }
                return ee("Map", s.call(t), de, N);
              }
              if (function (e) {
                if (!l || !e || typeof e != "object") {
                  return false;
                }
                try {
                  l.call(e);
                  try {
                    s.call(e);
                  } catch (e) {
                    return true;
                  }
                  return e instanceof Set;
                } catch (e) {}
                return false;
              }(t)) {
                var ce = [];
                if (d) {
                  d.call(t, function (e) {
                    ce.push(X(e, t));
                  });
                }
                return ee("Set", l.call(t), ce, N);
              }
              if (function (e) {
                if (!c || !e || typeof e != "object") {
                  return false;
                }
                try {
                  c.call(e, c);
                  try {
                    u.call(e, u);
                  } catch (e) {
                    return true;
                  }
                  return e instanceof WeakMap;
                } catch (e) {}
                return false;
              }(t)) {
                return Q("WeakMap");
              }
              if (function (e) {
                if (!u || !e || typeof e != "object") {
                  return false;
                }
                try {
                  u.call(e, u);
                  try {
                    c.call(e, c);
                  } catch (e) {
                    return true;
                  }
                  return e instanceof WeakSet;
                } catch (e) {}
                return false;
              }(t)) {
                return Q("WeakSet");
              }
              if (function (e) {
                if (!p || !e || typeof e != "object") {
                  return false;
                }
                try {
                  p.call(e);
                  return true;
                } catch (e) {}
                return false;
              }(t)) {
                return Q("WeakRef");
              }
              if (function (e) {
                return q(e) === "[object Number]" && V(e);
              }(t)) {
                return $(X(Number(t)));
              }
              if (function (e) {
                if (!e || typeof e != "object" || !E) {
                  return false;
                }
                try {
                  E.call(e);
                  return true;
                } catch (e) {}
                return false;
              }(t)) {
                return $(X(E.call(t)));
              }
              if (function (e) {
                return q(e) === "[object Boolean]" && V(e);
              }(t)) {
                return $(m.call(t));
              }
              if (function (e) {
                return q(e) === "[object String]" && V(e);
              }(t)) {
                return $(X(String(t)));
              }
              if (typeof window != "undefined" && t === window) {
                return "{ [object Window] }";
              }
              if (typeof globalThis != "undefined" && t === globalThis || n.g !== undefined && t === n.g) {
                return "{ [object globalThis] }";
              }
              if (!function (e) {
                return q(e) === "[object Date]" && V(e);
              }(t) && !z(t)) {
                var ue = ne(t, X);
                var pe = I ? I(t) === Object.prototype : t instanceof Object || t.constructor === Object;
                var me = t instanceof Object ? "" : "null prototype";
                var fe = !pe && M && Object(t) === t && M in t ? y.call(q(t), 8, -1) : me ? "Object" : "";
                var _e = (pe || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "") + (fe || me ? "[" + A.call(T.call([], fe || [], me || []), ": ") + "] " : "");
                if (ue.length === 0) {
                  return _e + "{}";
                } else if (N) {
                  return _e + "{" + te(ue, N) + "}";
                } else {
                  return _e + "{ " + A.call(ue, ", ") + " }";
                }
              }
              return String(t);
            };
            var X = Object.prototype.hasOwnProperty || function (e) {
              return e in this;
            };
            function Y(e, t) {
              return X.call(e, t);
            }
            function q(e) {
              return f.call(e);
            }
            function J(e, t) {
              if (e.indexOf) {
                return e.indexOf(t);
              }
              for (var n = 0, r = e.length; n < r; n++) {
                if (e[n] === t) {
                  return n;
                }
              }
              return -1;
            }
            function K(e, t) {
              if (e.length > t.maxStringLength) {
                var n = e.length - t.maxStringLength;
                var r = "... " + n + " more character" + (n > 1 ? "s" : "");
                return K(y.call(e, 0, t.maxStringLength), t) + r;
              }
              var i = N[t.quoteStyle || "single"];
              i.lastIndex = 0;
              return G(g.call(g.call(e, i, "\\$1"), /[\x00-\x1f]/g, Z), "single", t);
            }
            function Z(e) {
              var t = e.charCodeAt(0);
              var n = {
                8: "b",
                9: "t",
                10: "n",
                12: "f",
                13: "r"
              }[t];
              if (n) {
                return "\\" + n;
              } else {
                return "\\x" + (t < 16 ? "0" : "") + w.call(t.toString(16));
              }
            }
            function $(e) {
              return "Object(" + e + ")";
            }
            function Q(e) {
              return e + " { ? }";
            }
            function ee(e, t, n, r) {
              return e + " (" + t + ") {" + (r ? te(n, r) : A.call(n, ", ")) + "}";
            }
            function te(e, t) {
              if (e.length === 0) {
                return "";
              }
              var n = "\n" + t.prev + t.base;
              return n + A.call(e, "," + n) + "\n" + t.prev;
            }
            function ne(e, t) {
              var n = H(e);
              var r = [];
              if (n) {
                r.length = e.length;
                for (var i = 0; i < e.length; i++) {
                  r[i] = Y(e, i) ? t(e[i], e) : "";
                }
              }
              var s;
              var a = typeof O == "function" ? O(e) : [];
              if (P) {
                s = {};
                for (var o = 0; o < a.length; o++) {
                  s["$" + a[o]] = a[o];
                }
              }
              for (var h in e) {
                if (Y(e, h)) {
                  if ((!n || String(Number(h)) !== h || !(h < e.length)) && (!P || !(s["$" + h] instanceof Symbol))) {
                    if (b.call(/[^\w$]/, h)) {
                      r.push(t(h, e) + ": " + t(e[h], e));
                    } else {
                      r.push(h + ": " + t(e[h], e));
                    }
                  }
                }
              }
              if (typeof O == "function") {
                for (var l = 0; l < a.length; l++) {
                  if (R.call(e, a[l])) {
                    r.push("[" + t(a[l]) + "]: " + t(e[a[l]], e));
                  }
                }
              }
              return r;
            }
          },
        89211(e) {
            "use strict";
        
            function t(e) {
              return e != e;
            }
            e.exports = function (e, n) {
              if (e === 0 && n === 0) {
                return 1 / e == 1 / n;
              } else {
                return e === n || !!t(e) && !!t(n);
              }
            };
          },
        37653(e, t, n) {
            "use strict";
        
            var r = n(38452);
            var i = n(10487);
            var s = n(89211);
            var a = n(9394);
            var o = n(36576);
            var h = i(a(), Object);
            r(h, {
              getPolyfill: a,
              implementation: s,
              shim: o
            });
            e.exports = h;
          },
        9394(e, t, n) {
            "use strict";
        
            var r = n(89211);
            e.exports = function () {
              if (typeof Object.is == "function") {
                return Object.is;
              } else {
                return r;
              }
            };
          },
        36576(e, t, n) {
            "use strict";
        
            var r = n(9394);
            var i = n(38452);
            e.exports = function () {
              var e = r();
              i(Object, {
                is: e
              }, {
                is: function () {
                  return Object.is !== e;
                }
              });
              return e;
            };
          },
        28875(e, t, n) {
            "use strict";
        
            var r;
            if (!Object.keys) {
              var i = Object.prototype.hasOwnProperty;
              var s = Object.prototype.toString;
              var a = n(1093);
              var o = Object.prototype.propertyIsEnumerable;
              var h = !o.call({
                toString: null
              }, "toString");
              var l = o.call(function () {}, "prototype");
              var d = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"];
              function c(e) {
                var t = e.constructor;
                return t && t.prototype === e;
              }
              var u = {
                $applicationCache: true,
                $console: true,
                $external: true,
                $frame: true,
                $frameElement: true,
                $frames: true,
                $innerHeight: true,
                $innerWidth: true,
                $onmozfullscreenchange: true,
                $onmozfullscreenerror: true,
                $outerHeight: true,
                $outerWidth: true,
                $pageXOffset: true,
                $pageYOffset: true,
                $parent: true,
                $scrollLeft: true,
                $scrollTop: true,
                $scrollX: true,
                $scrollY: true,
                $self: true,
                $webkitIndexedDB: true,
                $webkitStorageInfo: true,
                $window: true
              };
              var p = function () {
                if (typeof window == "undefined") {
                  return false;
                }
                for (var e in window) {
                  try {
                    if (!u["$" + e] && i.call(window, e) && window[e] !== null && typeof window[e] == "object") {
                      try {
                        c(window[e]);
                      } catch (e) {
                        return true;
                      }
                    }
                  } catch (e) {
                    return true;
                  }
                }
                return false;
              }();
              r = function (e) {
                var t = e !== null && typeof e == "object";
                var n = s.call(e) === "[object Function]";
                var r = a(e);
                var o = t && s.call(e) === "[object String]";
                var u = [];
                if (!t && !n && !r) {
                  throw new TypeError("Object.keys called on a non-object");
                }
                var m = l && n;
                if (o && e.length > 0 && !i.call(e, 0)) {
                  for (var f = 0; f < e.length; ++f) {
                    u.push(String(f));
                  }
                }
                if (r && e.length > 0) {
                  for (var _ = 0; _ < e.length; ++_) {
                    u.push(String(_));
                  }
                } else {
                  for (var v in e) {
                    if ((!m || v !== "prototype") && !!i.call(e, v)) {
                      u.push(String(v));
                    }
                  }
                }
                if (h) {
                  var y = function (e) {
                    if (typeof window == "undefined" || !p) {
                      return c(e);
                    }
                    try {
                      return c(e);
                    } catch (e) {
                      return false;
                    }
                  }(e);
                  for (var g = 0; g < d.length; ++g) {
                    if ((!y || d[g] !== "constructor") && !!i.call(e, d[g])) {
                      u.push(d[g]);
                    }
                  }
                }
                return u;
              };
            }
            e.exports = r;
          },
        1189(e, t, n) {
            "use strict";
        
            var r = Array.prototype.slice;
            var i = n(1093);
            var s = Object.keys;
            var a = s ? function (e) {
              return s(e);
            } : n(28875);
            var o = Object.keys;
            a.shim = function () {
              if (Object.keys) {
                var e = function () {
                  var e = Object.keys(arguments);
                  return e && e.length === arguments.length;
                }(1, 2);
                if (!e) {
                  Object.keys = function (e) {
                    if (i(e)) {
                      return o(r.call(e));
                    } else {
                      return o(e);
                    }
                  };
                }
              } else {
                Object.keys = a;
              }
              return Object.keys || a;
            };
            e.exports = a;
          },
        1093(e) {
            "use strict";
        
            var t = Object.prototype.toString;
            e.exports = function (e) {
              var n = t.call(e);
              var r = n === "[object Arguments]";
              r ||= n !== "[object Array]" && e !== null && typeof e == "object" && typeof e.length == "number" && e.length >= 0 && t.call(e.callee) === "[object Function]";
              return r;
            };
          },
        38403(e, t, n) {
            "use strict";
        
            var r = n(1189);
            var i = n(41333)();
            var s = n(36556);
            var a = n(79612);
            var o = s("Array.prototype.push");
            var h = s("Object.prototype.propertyIsEnumerable");
            var l = i ? a.getOwnPropertySymbols : null;
            e.exports = function (e, t) {
              if (e == null) {
                throw new TypeError("target must be an object");
              }
              var n = a(e);
              if (arguments.length === 1) {
                return n;
              }
              for (var s = 1; s < arguments.length; ++s) {
                var d = a(arguments[s]);
                var c = r(d);
                var u = i && (a.getOwnPropertySymbols || l);
                if (u) {
                  for (var p = u(d), m = 0; m < p.length; ++m) {
                    var f = p[m];
                    if (h(d, f)) {
                      o(c, f);
                    }
                  }
                }
                for (var _ = 0; _ < c.length; ++_) {
                  var v = c[_];
                  if (h(d, v)) {
                    var y = d[v];
                    n[v] = y;
                  }
                }
              }
              return n;
            };
          },
        11514(e, t, n) {
            "use strict";
        
            var r = n(38403);
            e.exports = function () {
              if (Object.assign) {
                if (function () {
                  if (!Object.assign) {
                    return false;
                  }
                  var e = "abcdefghijklmnopqrst";
                  for (var t = e.split(""), n = {}, r = 0; r < t.length; ++r) {
                    n[t[r]] = t[r];
                  }
                  var i = Object.assign({}, n);
                  var s = "";
                  for (var a in i) {
                    s += a;
                  }
                  return e !== s;
                }() || function () {
                  if (!Object.assign || !Object.preventExtensions) {
                    return false;
                  }
                  var e = Object.preventExtensions({
                    1: 2
                  });
                  try {
                    Object.assign(e, "xy");
                  } catch (t) {
                    return e[1] === "y";
                  }
                  return false;
                }()) {
                  return r;
                } else {
                  return Object.assign;
                }
              } else {
                return r;
              }
            };
          }
    });
})();
