(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        81135(e) {
            e.exports = function (e) {
              return e && typeof e == "object" && typeof e.copy == "function" && typeof e.fill == "function" && typeof e.readUInt8 == "function";
            };
          },
        49032(e, t, n) {
            "use strict";
        
            var r = n(47244);
            var i = n(48184);
            var s = n(25767);
            var a = n(35680);
            function o(e) {
              return e.call.bind(e);
            }
            var h = typeof BigInt != "undefined";
            var l = typeof Symbol != "undefined";
            var d = o(Object.prototype.toString);
            var c = o(Number.prototype.valueOf);
            var u = o(String.prototype.valueOf);
            var p = o(Boolean.prototype.valueOf);
            if (h) {
              var m = o(BigInt.prototype.valueOf);
            }
            if (l) {
              var f = o(Symbol.prototype.valueOf);
            }
            function _(e, t) {
              if (typeof e != "object") {
                return false;
              }
              try {
                t(e);
                return true;
              } catch (e) {
                return false;
              }
            }
            function v(e) {
              return d(e) === "[object Map]";
            }
            function y(e) {
              return d(e) === "[object Set]";
            }
            function g(e) {
              return d(e) === "[object WeakMap]";
            }
            function w(e) {
              return d(e) === "[object WeakSet]";
            }
            function x(e) {
              return d(e) === "[object ArrayBuffer]";
            }
            function b(e) {
              return typeof ArrayBuffer != "undefined" && (x.working ? x(e) : e instanceof ArrayBuffer);
            }
            function T(e) {
              return d(e) === "[object DataView]";
            }
            function A(e) {
              return typeof DataView != "undefined" && (T.working ? T(e) : e instanceof DataView);
            }
            t.isArgumentsObject = r;
            t.isGeneratorFunction = i;
            t.isTypedArray = a;
            t.isPromise = function (e) {
              return typeof Promise != "undefined" && e instanceof Promise || e !== null && typeof e == "object" && typeof e.then == "function" && typeof e.catch == "function";
            };
            t.isArrayBufferView = function (e) {
              if (typeof ArrayBuffer != "undefined" && ArrayBuffer.isView) {
                return ArrayBuffer.isView(e);
              } else {
                return a(e) || A(e);
              }
            };
            t.isUint8Array = function (e) {
              return s(e) === "Uint8Array";
            };
            t.isUint8ClampedArray = function (e) {
              return s(e) === "Uint8ClampedArray";
            };
            t.isUint16Array = function (e) {
              return s(e) === "Uint16Array";
            };
            t.isUint32Array = function (e) {
              return s(e) === "Uint32Array";
            };
            t.isInt8Array = function (e) {
              return s(e) === "Int8Array";
            };
            t.isInt16Array = function (e) {
              return s(e) === "Int16Array";
            };
            t.isInt32Array = function (e) {
              return s(e) === "Int32Array";
            };
            t.isFloat32Array = function (e) {
              return s(e) === "Float32Array";
            };
            t.isFloat64Array = function (e) {
              return s(e) === "Float64Array";
            };
            t.isBigInt64Array = function (e) {
              return s(e) === "BigInt64Array";
            };
            t.isBigUint64Array = function (e) {
              return s(e) === "BigUint64Array";
            };
            v.working = typeof Map != "undefined" && v(new Map());
            t.isMap = function (e) {
              return typeof Map != "undefined" && (v.working ? v(e) : e instanceof Map);
            };
            y.working = typeof Set != "undefined" && y(new Set());
            t.isSet = function (e) {
              return typeof Set != "undefined" && (y.working ? y(e) : e instanceof Set);
            };
            g.working = typeof WeakMap != "undefined" && g(new WeakMap());
            t.isWeakMap = function (e) {
              return typeof WeakMap != "undefined" && (g.working ? g(e) : e instanceof WeakMap);
            };
            w.working = typeof WeakSet != "undefined" && w(new WeakSet());
            t.isWeakSet = function (e) {
              return w(e);
            };
            x.working = typeof ArrayBuffer != "undefined" && x(new ArrayBuffer());
            t.isArrayBuffer = b;
            T.working = typeof ArrayBuffer != "undefined" && typeof DataView != "undefined" && T(new DataView(new ArrayBuffer(1), 0, 1));
            t.isDataView = A;
            var C = typeof SharedArrayBuffer != "undefined" ? SharedArrayBuffer : undefined;
            function S(e) {
              return d(e) === "[object SharedArrayBuffer]";
            }
            function E(e) {
              return C !== undefined && (S.working === undefined && (S.working = S(new C())), S.working ? S(e) : e instanceof C);
            }
            function O(e) {
              return _(e, c);
            }
            function k(e) {
              return _(e, u);
            }
            function P(e) {
              return _(e, p);
            }
            function M(e) {
              return h && _(e, m);
            }
            function R(e) {
              return l && _(e, f);
            }
            t.isSharedArrayBuffer = E;
            t.isAsyncFunction = function (e) {
              return d(e) === "[object AsyncFunction]";
            };
            t.isMapIterator = function (e) {
              return d(e) === "[object Map Iterator]";
            };
            t.isSetIterator = function (e) {
              return d(e) === "[object Set Iterator]";
            };
            t.isGeneratorObject = function (e) {
              return d(e) === "[object Generator]";
            };
            t.isWebAssemblyCompiledModule = function (e) {
              return d(e) === "[object WebAssembly.Module]";
            };
            t.isNumberObject = O;
            t.isStringObject = k;
            t.isBooleanObject = P;
            t.isBigIntObject = M;
            t.isSymbolObject = R;
            t.isBoxedPrimitive = function (e) {
              return O(e) || k(e) || P(e) || M(e) || R(e);
            };
            t.isAnyArrayBuffer = function (e) {
              return typeof Uint8Array != "undefined" && (b(e) || E(e));
            };
            ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function (e) {
              Object.defineProperty(t, e, {
                enumerable: false,
                value: function () {
                  throw new Error(e + " is not supported in userland");
                }
              });
            });
          },
        40537(e, t, n) {
            var r = n(65606);
            var i = Object.getOwnPropertyDescriptors || function (e) {
              for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
                n[t[r]] = Object.getOwnPropertyDescriptor(e, t[r]);
              }
              return n;
            };
            var s = /%[sdj%]/g;
            t.format = function (e) {
              if (!g(e)) {
                var t = [];
                for (var n = 0; n < arguments.length; n++) {
                  t.push(l(arguments[n]));
                }
                return t.join(" ");
              }
              n = 1;
              for (var r = arguments, i = r.length, a = String(e).replace(s, function (e) {
                  if (e === "%%") {
                    return "%";
                  }
                  if (n >= i) {
                    return e;
                  }
                  switch (e) {
                    case "%s":
                      return String(r[n++]);
                    case "%d":
                      return Number(r[n++]);
                    case "%j":
                      try {
                        return JSON.stringify(r[n++]);
                      } catch (e) {
                        return "[Circular]";
                      }
                    default:
                      return e;
                  }
                }), o = r[n]; n < i; o = r[++n]) {
                if (v(o) || !b(o)) {
                  a += " " + o;
                } else {
                  a += " " + l(o);
                }
              }
              return a;
            };
            t.deprecate = function (e, n) {
              if (r !== undefined && r.noDeprecation === true) {
                return e;
              }
              if (r === undefined) {
                return function () {
                  return t.deprecate(e, n).apply(this, arguments);
                };
              }
              var i = false;
              return function () {
                if (!i) {
                  if (r.throwDeprecation) {
                    throw new Error(n);
                  }
                  r.traceDeprecation;
                  i = true;
                }
                return e.apply(this, arguments);
              };
            };
            var a = {};
            var o = /^$/;
            if (r.env.NODE_DEBUG) {
              var h = r.env.NODE_DEBUG;
              h = h.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase();
              o = new RegExp("^" + h + "$", "i");
            }
            function l(e, n) {
              var r = {
                seen: [],
                stylize: c
              };
              if (arguments.length >= 3) {
                r.depth = arguments[2];
              }
              if (arguments.length >= 4) {
                r.colors = arguments[3];
              }
              if (_(n)) {
                r.showHidden = n;
              } else if (n) {
                t._extend(r, n);
              }
              if (w(r.showHidden)) {
                r.showHidden = false;
              }
              if (w(r.depth)) {
                r.depth = 2;
              }
              if (w(r.colors)) {
                r.colors = false;
              }
              if (w(r.customInspect)) {
                r.customInspect = true;
              }
              if (r.colors) {
                r.stylize = d;
              }
              return u(r, e, r.depth);
            }
            function d(e, t) {
              var n = l.styles[t];
              if (n) {
                return "[" + l.colors[n][0] + "m" + e + "[" + l.colors[n][1] + "m";
              } else {
                return e;
              }
            }
            function c(e, t) {
              return e;
            }
            function u(e, n, r) {
              if (e.customInspect && n && C(n.inspect) && n.inspect !== t.inspect && (!n.constructor || n.constructor.prototype !== n)) {
                var i = n.inspect(r, e);
                if (!g(i)) {
                  i = u(e, i, r);
                }
                return i;
              }
              var s = function (e, t) {
                if (w(t)) {
                  return e.stylize("undefined", "undefined");
                }
                if (g(t)) {
                  var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, "\"") + "'";
                  return e.stylize(n, "string");
                }
                if (y(t)) {
                  return e.stylize("" + t, "number");
                } else if (_(t)) {
                  return e.stylize("" + t, "boolean");
                } else if (v(t)) {
                  return e.stylize("null", "null");
                } else {
                  return undefined;
                }
              }(e, n);
              if (s) {
                return s;
              }
              var a = Object.keys(n);
              var o = function (e) {
                var t = {};
                e.forEach(function (e, n) {
                  t[e] = true;
                });
                return t;
              }(a);
              if (e.showHidden) {
                a = Object.getOwnPropertyNames(n);
              }
              if (A(n) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0)) {
                return p(n);
              }
              if (a.length === 0) {
                if (C(n)) {
                  var h = n.name ? ": " + n.name : "";
                  return e.stylize("[Function" + h + "]", "special");
                }
                if (x(n)) {
                  return e.stylize(RegExp.prototype.toString.call(n), "regexp");
                }
                if (T(n)) {
                  return e.stylize(Date.prototype.toString.call(n), "date");
                }
                if (A(n)) {
                  return p(n);
                }
              }
              var l;
              var d = "";
              var c = false;
              var b = ["{", "}"];
              if (f(n)) {
                c = true;
                b = ["[", "]"];
              }
              if (C(n)) {
                d = " [Function" + (n.name ? ": " + n.name : "") + "]";
              }
              if (x(n)) {
                d = " " + RegExp.prototype.toString.call(n);
              }
              if (T(n)) {
                d = " " + Date.prototype.toUTCString.call(n);
              }
              if (A(n)) {
                d = " " + p(n);
              }
              if (a.length !== 0 || c && n.length != 0) {
                if (r < 0) {
                  if (x(n)) {
                    return e.stylize(RegExp.prototype.toString.call(n), "regexp");
                  } else {
                    return e.stylize("[Object]", "special");
                  }
                } else {
                  e.seen.push(n);
                  l = c ? function (e, t, n, r, i) {
                    var s = [];
                    for (var a = 0, o = t.length; a < o; ++a) {
                      if (E(t, String(a))) {
                        s.push(m(e, t, n, r, String(a), true));
                      } else {
                        s.push("");
                      }
                    }
                    i.forEach(function (i) {
                      if (!i.match(/^\d+$/)) {
                        s.push(m(e, t, n, r, i, true));
                      }
                    });
                    return s;
                  }(e, n, r, o, a) : a.map(function (t) {
                    return m(e, n, r, o, t, c);
                  });
                  e.seen.pop();
                  return function (e, t, n) {
                    if (e.reduce(function (e, t) {
                      t.indexOf("\n");
                      return e + t.replace(/\u001b\[\d\d?m/g, "").length + 1;
                    }, 0) > 60) {
                      return n[0] + (t === "" ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1];
                    } else {
                      return n[0] + t + " " + e.join(", ") + " " + n[1];
                    }
                  }(l, d, b);
                }
              } else {
                return b[0] + d + b[1];
              }
            }
            function p(e) {
              return "[" + Error.prototype.toString.call(e) + "]";
            }
            function m(e, t, n, r, i, s) {
              var a;
              var o;
              var h;
              if ((h = Object.getOwnPropertyDescriptor(t, i) || {
                value: t[i]
              }).get) {
                o = h.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special");
              } else if (h.set) {
                o = e.stylize("[Setter]", "special");
              }
              if (!E(r, i)) {
                a = "[" + i + "]";
              }
              if (!o) {
                if (e.seen.indexOf(h.value) < 0) {
                  if ((o = v(n) ? u(e, h.value, null) : u(e, h.value, n - 1)).indexOf("\n") > -1) {
                    o = s ? o.split("\n").map(function (e) {
                      return "  " + e;
                    }).join("\n").slice(2) : "\n" + o.split("\n").map(function (e) {
                      return "   " + e;
                    }).join("\n");
                  }
                } else {
                  o = e.stylize("[Circular]", "special");
                }
              }
              if (w(a)) {
                if (s && i.match(/^\d+$/)) {
                  return o;
                }
                if ((a = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
                  a = a.slice(1, -1);
                  a = e.stylize(a, "name");
                } else {
                  a = a.replace(/'/g, "\\'").replace(/\\"/g, "\"").replace(/(^"|"$)/g, "'");
                  a = e.stylize(a, "string");
                }
              }
              return a + ": " + o;
            }
            function f(e) {
              return Array.isArray(e);
            }
            function _(e) {
              return typeof e == "boolean";
            }
            function v(e) {
              return e === null;
            }
            function y(e) {
              return typeof e == "number";
            }
            function g(e) {
              return typeof e == "string";
            }
            function w(e) {
              return e === undefined;
            }
            function x(e) {
              return b(e) && S(e) === "[object RegExp]";
            }
            function b(e) {
              return typeof e == "object" && e !== null;
            }
            function T(e) {
              return b(e) && S(e) === "[object Date]";
            }
            function A(e) {
              return b(e) && (S(e) === "[object Error]" || e instanceof Error);
            }
            function C(e) {
              return typeof e == "function";
            }
            function S(e) {
              return Object.prototype.toString.call(e);
            }
            function E(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }
            t.debuglog = function (e) {
              e = e.toUpperCase();
              if (!a[e]) {
                if (o.test(e)) {
                  r.pid;
                  a[e] = function () {
                    t.format.apply(t, arguments);
                  };
                } else {
                  a[e] = function () {};
                }
              }
              return a[e];
            };
            t.inspect = l;
            l.colors = {
              bold: [1, 22],
              italic: [3, 23],
              underline: [4, 24],
              inverse: [7, 27],
              white: [37, 39],
              grey: [90, 39],
              black: [30, 39],
              blue: [34, 39],
              cyan: [36, 39],
              green: [32, 39],
              magenta: [35, 39],
              red: [31, 39],
              yellow: [33, 39]
            };
            l.styles = {
              special: "cyan",
              number: "yellow",
              boolean: "yellow",
              undefined: "grey",
              null: "bold",
              string: "green",
              date: "magenta",
              regexp: "red"
            };
            t.types = n(49032);
            t.isArray = f;
            t.isBoolean = _;
            t.isNull = v;
            t.isNullOrUndefined = function (e) {
              return e == null;
            };
            t.isNumber = y;
            t.isString = g;
            t.isSymbol = function (e) {
              return typeof e == "symbol";
            };
            t.isUndefined = w;
            t.isRegExp = x;
            t.types.isRegExp = x;
            t.isObject = b;
            t.isDate = T;
            t.types.isDate = T;
            t.isError = A;
            t.types.isNativeError = A;
            t.isFunction = C;
            t.isPrimitive = function (e) {
              return e === null || typeof e == "boolean" || typeof e == "number" || typeof e == "string" || typeof e == "symbol" || e === undefined;
            };
            t.isBuffer = n(81135);
            t.log = function () {};
            t.inherits = n(56698);
            t._extend = function (e, t) {
              if (!t || !b(t)) {
                return e;
              }
              var n = Object.keys(t);
              for (var r = n.length; r--;) {
                e[n[r]] = t[n[r]];
              }
              return e;
            };
            var O = typeof Symbol != "undefined" ? Symbol("util.promisify.custom") : undefined;
            function k(e, t) {
              if (!e) {
                var n = new Error("Promise was rejected with a falsy value");
                n.reason = e;
                e = n;
              }
              return t(e);
            }
            t.promisify = function (e) {
              if (typeof e != "function") {
                throw new TypeError("The \"original\" argument must be of type Function");
              }
              if (O && e[O]) {
                var t;
                if (typeof (t = e[O]) != "function") {
                  throw new TypeError("The \"util.promisify.custom\" argument must be of type Function");
                }
                Object.defineProperty(t, O, {
                  value: t,
                  enumerable: false,
                  writable: false,
                  configurable: true
                });
                return t;
              }
              function t() {
                var t;
                var n;
                var r = new Promise(function (e, r) {
                  t = e;
                  n = r;
                });
                var i = [];
                for (var s = 0; s < arguments.length; s++) {
                  i.push(arguments[s]);
                }
                i.push(function (e, r) {
                  if (e) {
                    n(e);
                  } else {
                    t(r);
                  }
                });
                try {
                  e.apply(this, i);
                } catch (e) {
                  n(e);
                }
                return r;
              }
              Object.setPrototypeOf(t, Object.getPrototypeOf(e));
              if (O) {
                Object.defineProperty(t, O, {
                  value: t,
                  enumerable: false,
                  writable: false,
                  configurable: true
                });
              }
              return Object.defineProperties(t, i(e));
            };
            t.promisify.custom = O;
            t.callbackify = function (e) {
              if (typeof e != "function") {
                throw new TypeError("The \"original\" argument must be of type Function");
              }
              function t() {
                var t = [];
                for (var n = 0; n < arguments.length; n++) {
                  t.push(arguments[n]);
                }
                var i = t.pop();
                if (typeof i != "function") {
                  throw new TypeError("The last argument must be of type Function");
                }
                var s = this;
                function a() {
                  return i.apply(s, arguments);
                }
                e.apply(this, t).then(function (e) {
                  r.nextTick(a.bind(null, null, e));
                }, function (e) {
                  r.nextTick(k.bind(null, e, a));
                });
              }
              Object.setPrototypeOf(t, Object.getPrototypeOf(e));
              Object.defineProperties(t, i(e));
              return t;
            };
          },
        25767(e, t, n) {
            "use strict";
        
            var r = n(82682);
            var i = n(39209);
            var s = n(10487);
            var a = n(36556);
            var o = n(75795);
            var h = n(93628);
            var l = a("Object.prototype.toString");
            var d = n(49092)();
            var c = typeof globalThis == "undefined" ? n.g : globalThis;
            var u = i();
            var p = a("String.prototype.slice");
            var m = a("Array.prototype.indexOf", true) || function (e, t) {
              for (var n = 0; n < e.length; n += 1) {
                if (e[n] === t) {
                  return n;
                }
              }
              return -1;
            };
            var f = {
              __proto__: null
            };
            r(u, d && o && h ? function (e) {
              var t = new c[e]();
              if (Symbol.toStringTag in t && h) {
                var n = h(t);
                var r = o(n, Symbol.toStringTag);
                if (!r && n) {
                  var i = h(n);
                  r = o(i, Symbol.toStringTag);
                }
                if (r && r.get) {
                  var a = s(r.get);
                  f["$" + e] = a;
                }
              }
            } : function (e) {
              var t = new c[e]();
              var n = t.slice || t.set;
              if (n) {
                var r = s(n);
                f["$" + e] = r;
              }
            });
            e.exports = function (e) {
              if (!e || typeof e != "object") {
                return false;
              }
              if (!d) {
                var t = p(l(e), 8, -1);
                if (function (e) {
                  return m(u, e) > -1;
                }(t)) {
                  return t;
                } else {
                  return t === "Object" && function (e) {
                    var t = false;
                    r(f, function (n, r) {
                      if (!t) {
                        try {
                          n(e);
                          t = p(r, 1);
                        } catch (e) {}
                      }
                    });
                    return t;
                  }(e);
                }
              }
              if (o) {
                return function (e) {
                  var t = false;
                  r(f, function (n, r) {
                    if (!t) {
                      try {
                        if ("$" + n(e) === r) {
                          t = p(r, 1);
                        }
                      } catch (e) {}
                    }
                  });
                  return t;
                }(e);
              } else {
                return null;
              }
            };
          },
        59740(e) {
            e.exports = {
              c: function (e) {
                if (Array.isArray) {
                  return Array.isArray(e);
                } else {
                  return Object.prototype.toString.call(e) === "[object Array]";
                }
              }
            };
          },
        18990(e, t, n) {
            var r = n(96538);
            n(58003);
            var i = n(87348);
            n(38433);
            e.exports = {
              JX: r,
              v9: i
            };
          }
    });
})();
