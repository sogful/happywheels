(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        82299(e, t, n) {
            "use strict";
        
            function r(e, t) {
              return function (e) {
                if (Array.isArray(e)) {
                  return e;
                }
              }(e) || function (e, t) {
                var n = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
                if (n != null) {
                  var r;
                  var i;
                  var s;
                  var a;
                  var o = [];
                  var h = true;
                  var l = false;
                  try {
                    s = (n = n.call(e)).next;
                    if (t === 0) {
                      if (Object(n) !== n) {
                        return;
                      }
                      h = false;
                    } else {
                      for (; !(h = (r = s.call(n)).done) && (o.push(r.value), o.length !== t); h = true);
                    }
                  } catch (e) {
                    l = true;
                    i = e;
                  } finally {
                    try {
                      if (!h && n.return != null && (a = n.return(), Object(a) !== a)) {
                        return;
                      }
                    } finally {
                      if (l) {
                        throw i;
                      }
                    }
                  }
                  return o;
                }
              }(e, t) || function (e, t) {
                if (e) {
                  if (typeof e == "string") {
                    return i(e, t);
                  }
                  var n = Object.prototype.toString.call(e).slice(8, -1);
                  if (n === "Object" && e.constructor) {
                    n = e.constructor.name;
                  }
                  if (n === "Map" || n === "Set") {
                    return Array.from(e);
                  } else if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
                    return i(e, t);
                  } else {
                    return undefined;
                  }
                }
              }(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }();
            }
            function i(e, t) {
              if (t == null || t > e.length) {
                t = e.length;
              }
              for (var n = 0, r = new Array(t); n < t; n++) {
                r[n] = e[n];
              }
              return r;
            }
            function s(e) {
              s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
                return typeof e;
              } : function (e) {
                if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
                  return "symbol";
                } else {
                  return typeof e;
                }
              };
              return s(e);
            }
            var a = /a/g.flags !== undefined;
            function o(e) {
              var t = [];
              e.forEach(function (e) {
                return t.push(e);
              });
              return t;
            }
            function h(e) {
              var t = [];
              e.forEach(function (e, n) {
                return t.push([n, e]);
              });
              return t;
            }
            var l = Object.is ? Object.is : n(37653);
            var d = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols : function () {
              return [];
            };
            var c = Number.isNaN ? Number.isNaN : n(24133);
            function u(e) {
              return e.call.bind(e);
            }
            var p = u(Object.prototype.hasOwnProperty);
            var m = u(Object.prototype.propertyIsEnumerable);
            var f = u(Object.prototype.toString);
            var _ = n(40537).types;
            var v = _.isAnyArrayBuffer;
            var y = _.isArrayBufferView;
            var g = _.isDate;
            var w = _.isMap;
            var x = _.isRegExp;
            var b = _.isSet;
            var T = _.isNativeError;
            var A = _.isBoxedPrimitive;
            var C = _.isNumberObject;
            var S = _.isStringObject;
            var E = _.isBooleanObject;
            var O = _.isBigIntObject;
            var k = _.isSymbolObject;
            var P = _.isFloat32Array;
            var M = _.isFloat64Array;
            function R(e) {
              if (e.length === 0 || e.length > 10) {
                return true;
              }
              for (var t = 0; t < e.length; t++) {
                var n = e.charCodeAt(t);
                if (n < 48 || n > 57) {
                  return true;
                }
              }
              return e.length === 10 && e >= Math.pow(2, 32);
            }
            function I(e) {
              return Object.keys(e).filter(R).concat(d(e).filter(Object.prototype.propertyIsEnumerable.bind(e)));
            }
            function L(e, t) {
              if (e === t) {
                return 0;
              }
              var n = e.length;
              var r = t.length;
              for (var i = 0, s = Math.min(n, r); i < s; ++i) {
                if (e[i] !== t[i]) {
                  n = e[i];
                  r = t[i];
                  break;
                }
              }
              if (n < r) {
                return -1;
              } else if (r < n) {
                return 1;
              } else {
                return 0;
              }
            }
            function j(e, t, n, r) {
              if (e === t) {
                return e !== 0 || !n || l(e, t);
              }
              if (n) {
                if (s(e) !== "object") {
                  return typeof e == "number" && c(e) && c(t);
                }
                if (s(t) !== "object" || e === null || t === null) {
                  return false;
                }
                if (Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)) {
                  return false;
                }
              } else {
                if (e === null || s(e) !== "object") {
                  return (t === null || s(t) !== "object") && e == t;
                }
                if (t === null || s(t) !== "object") {
                  return false;
                }
              }
              var i;
              var o;
              var h;
              var d;
              var u = f(e);
              if (u !== f(t)) {
                return false;
              }
              if (Array.isArray(e)) {
                if (e.length !== t.length) {
                  return false;
                }
                var p = I(e);
                var m = I(t);
                return p.length === m.length && D(e, t, n, r, 1, p);
              }
              if (u === "[object Object]" && (!w(e) && w(t) || !b(e) && b(t))) {
                return false;
              }
              if (g(e)) {
                if (!g(t) || Date.prototype.getTime.call(e) !== Date.prototype.getTime.call(t)) {
                  return false;
                }
              } else if (x(e)) {
                if (!x(t) || (h = e, d = t, !(a ? h.source === d.source && h.flags === d.flags : RegExp.prototype.toString.call(h) === RegExp.prototype.toString.call(d)))) {
                  return false;
                }
              } else if (T(e) || e instanceof Error) {
                if (e.message !== t.message || e.name !== t.name) {
                  return false;
                }
              } else {
                if (y(e)) {
                  if (n || !P(e) && !M(e)) {
                    if (!function (e, t) {
                      return e.byteLength === t.byteLength && L(new Uint8Array(e.buffer, e.byteOffset, e.byteLength), new Uint8Array(t.buffer, t.byteOffset, t.byteLength)) === 0;
                    }(e, t)) {
                      return false;
                    }
                  } else if (!function (e, t) {
                    if (e.byteLength !== t.byteLength) {
                      return false;
                    }
                    for (var n = 0; n < e.byteLength; n++) {
                      if (e[n] !== t[n]) {
                        return false;
                      }
                    }
                    return true;
                  }(e, t)) {
                    return false;
                  }
                  var _ = I(e);
                  var R = I(t);
                  return _.length === R.length && D(e, t, n, r, 0, _);
                }
                if (b(e)) {
                  return !!b(t) && e.size === t.size && D(e, t, n, r, 2);
                }
                if (w(e)) {
                  return !!w(t) && e.size === t.size && D(e, t, n, r, 3);
                }
                if (v(e)) {
                  o = t;
                  if ((i = e).byteLength !== o.byteLength || L(new Uint8Array(i), new Uint8Array(o)) !== 0) {
                    return false;
                  }
                } else if (A(e) && !function (e, t) {
                  if (C(e)) {
                    return C(t) && l(Number.prototype.valueOf.call(e), Number.prototype.valueOf.call(t));
                  } else if (S(e)) {
                    return S(t) && String.prototype.valueOf.call(e) === String.prototype.valueOf.call(t);
                  } else if (E(e)) {
                    return E(t) && Boolean.prototype.valueOf.call(e) === Boolean.prototype.valueOf.call(t);
                  } else if (O(e)) {
                    return O(t) && BigInt.prototype.valueOf.call(e) === BigInt.prototype.valueOf.call(t);
                  } else {
                    return k(t) && Symbol.prototype.valueOf.call(e) === Symbol.prototype.valueOf.call(t);
                  }
                }(e, t)) {
                  return false;
                }
              }
              return D(e, t, n, r, 0);
            }
            function B(e, t) {
              return t.filter(function (t) {
                return m(e, t);
              });
            }
            function D(e, t, n, i, a, l) {
              if (arguments.length === 5) {
                l = Object.keys(e);
                var c = Object.keys(t);
                if (l.length !== c.length) {
                  return false;
                }
              }
              for (var u = 0; u < l.length; u++) {
                if (!p(t, l[u])) {
                  return false;
                }
              }
              if (n && arguments.length === 5) {
                var f = d(e);
                if (f.length !== 0) {
                  var _ = 0;
                  for (u = 0; u < f.length; u++) {
                    var v = f[u];
                    if (m(e, v)) {
                      if (!m(t, v)) {
                        return false;
                      }
                      l.push(v);
                      _++;
                    } else if (m(t, v)) {
                      return false;
                    }
                  }
                  var y = d(t);
                  if (f.length !== y.length && B(t, y).length !== _) {
                    return false;
                  }
                } else {
                  var g = d(t);
                  if (g.length !== 0 && B(t, g).length !== 0) {
                    return false;
                  }
                }
              }
              if (l.length === 0 && (a === 0 || a === 1 && e.length === 0 || e.size === 0)) {
                return true;
              }
              if (i === undefined) {
                i = {
                  val1: new Map(),
                  val2: new Map(),
                  position: 0
                };
              } else {
                var w = i.val1.get(e);
                if (w !== undefined) {
                  var x = i.val2.get(t);
                  if (x !== undefined) {
                    return w === x;
                  }
                }
                i.position++;
              }
              i.val1.set(e, i.position);
              i.val2.set(t, i.position);
              var b = function (e, t, n, i, a, l) {
                var d = 0;
                if (l === 2) {
                  if (!function (e, t, n, r) {
                    var i = null;
                    for (var a = o(e), h = 0; h < a.length; h++) {
                      var l = a[h];
                      if (s(l) === "object" && l !== null) {
                        if (i === null) {
                          i = new Set();
                        }
                        i.add(l);
                      } else if (!t.has(l)) {
                        if (n) {
                          return false;
                        }
                        if (!G(e, t, l)) {
                          return false;
                        }
                        if (i === null) {
                          i = new Set();
                        }
                        i.add(l);
                      }
                    }
                    if (i !== null) {
                      for (var d = o(t), c = 0; c < d.length; c++) {
                        var u = d[c];
                        if (s(u) === "object" && u !== null) {
                          if (!F(i, u, n, r)) {
                            return false;
                          }
                        } else if (!n && !e.has(u) && !F(i, u, n, r)) {
                          return false;
                        }
                      }
                      return i.size === 0;
                    }
                    return true;
                  }(e, t, n, a)) {
                    return false;
                  }
                } else if (l === 3) {
                  if (!function (e, t, n, i) {
                    var a = null;
                    for (var o = h(e), l = 0; l < o.length; l++) {
                      var d = r(o[l], 2);
                      var c = d[0];
                      var u = d[1];
                      if (s(c) === "object" && c !== null) {
                        if (a === null) {
                          a = new Set();
                        }
                        a.add(c);
                      } else {
                        var p = t.get(c);
                        if (p === undefined && !t.has(c) || !j(u, p, n, i)) {
                          if (n) {
                            return false;
                          }
                          if (!U(e, t, c, u, i)) {
                            return false;
                          }
                          if (a === null) {
                            a = new Set();
                          }
                          a.add(c);
                        }
                      }
                    }
                    if (a !== null) {
                      for (var m = h(t), f = 0; f < m.length; f++) {
                        var _ = r(m[f], 2);
                        var v = _[0];
                        var y = _[1];
                        if (s(v) === "object" && v !== null) {
                          if (!V(a, e, v, y, n, i)) {
                            return false;
                          }
                        } else if (!n && (!e.has(v) || !j(e.get(v), y, false, i)) && !V(a, e, v, y, false, i)) {
                          return false;
                        }
                      }
                      return a.size === 0;
                    }
                    return true;
                  }(e, t, n, a)) {
                    return false;
                  }
                } else if (l === 1) {
                  for (; d < e.length; d++) {
                    if (!p(e, d)) {
                      if (p(t, d)) {
                        return false;
                      }
                      for (var c = Object.keys(e); d < c.length; d++) {
                        var u = c[d];
                        if (!p(t, u) || !j(e[u], t[u], n, a)) {
                          return false;
                        }
                      }
                      return c.length === Object.keys(t).length;
                    }
                    if (!p(t, d) || !j(e[d], t[d], n, a)) {
                      return false;
                    }
                  }
                }
                for (d = 0; d < i.length; d++) {
                  var m = i[d];
                  if (!j(e[m], t[m], n, a)) {
                    return false;
                  }
                }
                return true;
              }(e, t, n, l, i, a);
              i.val1.delete(e);
              i.val2.delete(t);
              return b;
            }
            function F(e, t, n, r) {
              for (var i = o(e), s = 0; s < i.length; s++) {
                var a = i[s];
                if (j(t, a, n, r)) {
                  e.delete(a);
                  return true;
                }
              }
              return false;
            }
            function N(e) {
              switch (s(e)) {
                case "undefined":
                  return null;
                case "object":
                  return;
                case "symbol":
                  return false;
                case "string":
                  e = +e;
                case "number":
                  if (c(e)) {
                    return false;
                  }
              }
              return true;
            }
            function G(e, t, n) {
              var r = N(n);
              return r ?? (t.has(r) && !e.has(r));
            }
            function U(e, t, n, r, i) {
              var s = N(n);
              if (s != null) {
                return s;
              }
              var a = t.get(s);
              return (a !== undefined || !!t.has(s)) && !!j(r, a, false, i) && !e.has(s) && j(r, a, false, i);
            }
            function V(e, t, n, r, i, s) {
              for (var a = o(e), h = 0; h < a.length; h++) {
                var l = a[h];
                if (j(n, l, i, s) && j(r, t.get(l), i, s)) {
                  e.delete(l);
                  return true;
                }
              }
              return false;
            }
            e.exports = {
              isDeepEqual: function (e, t) {
                return j(e, t, false);
              },
              isDeepStrictEqual: function (e, t) {
                return j(e, t, true);
              }
            };
          },
        98263(e, t, n) {
            "use strict";
        
            function r(e, t, n, r) {
              if (!t[n]) {
                var i = new e(r);
                t.addChild(i);
                return i;
              }
              var s = t.getChildIndex(t[n]);
              t.removeChild(t[n]);
              var a = new e(r);
              a.position.set(t[n].x, t[n].y);
              a.scale.set(t[n].scale.x, t[n].scale.y);
              t.addChildAt(a, s);
              a.name = n;
              a.pixiSprite.name = n;
              t[n] = a;
              return a;
            }
            n.d(t, {
              zI: () => i.z,
              Iz: () => r
            });
            n(62010);
            var i = n(33245);
          }
    });
})();
