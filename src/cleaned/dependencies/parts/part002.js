(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        3918(e, t, n) {
            "use strict";
        
            var r = n(65606);
            function i(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                if (t) {
                  r = r.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                  });
                }
                n.push.apply(n, r);
              }
              return n;
            }
            function s(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t] ?? {};
                if (t % 2) {
                  i(Object(n), true).forEach(function (t) {
                    var r;
                    var i;
                    var s;
                    r = e;
                    i = t;
                    s = n[t];
                    if ((i = a(i)) in r) {
                      Object.defineProperty(r, i, {
                        value: s,
                        enumerable: true,
                        configurable: true,
                        writable: true
                      });
                    } else {
                      r[i] = s;
                    }
                  });
                } else if (Object.getOwnPropertyDescriptors) {
                  Object.defineProperties(e, Object.getOwnPropertyDescriptors(n));
                } else {
                  i(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                  });
                }
              }
              return e;
            }
            function a(e) {
              var t = function (e) {
                if (m(e) !== "object" || e === null) {
                  return e;
                }
                var t = e[Symbol.toPrimitive];
                if (t !== undefined) {
                  var n = t.call(e, "string");
                  if (m(n) !== "object") {
                    return n;
                  }
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(e);
              }(e);
              if (m(t) === "symbol") {
                return t;
              } else {
                return String(t);
              }
            }
            function o(e, t) {
              if (t && (m(t) === "object" || typeof t == "function")) {
                return t;
              }
              if (t !== undefined) {
                throw new TypeError("Derived constructors may only return object or undefined");
              }
              return h(e);
            }
            function h(e) {
              if (e === undefined) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              }
              return e;
            }
            function l(e) {
              var t = typeof Map == "function" ? new Map() : undefined;
              l = function (e) {
                if (e === null || (n = e, Function.toString.call(n).indexOf("[native code]") === -1)) {
                  return e;
                }
                var n;
                if (typeof e != "function") {
                  throw new TypeError("Super expression must either be null or a function");
                }
                if (t !== undefined) {
                  if (t.has(e)) {
                    return t.get(e);
                  }
                  t.set(e, r);
                }
                function r() {
                  return d(e, arguments, p(this).constructor);
                }
                r.prototype = Object.create(e.prototype, {
                  constructor: {
                    value: r,
                    enumerable: false,
                    writable: true,
                    configurable: true
                  }
                });
                return u(r, e);
              };
              return l(e);
            }
            function d(e, t, n) {
              d = c() ? Reflect.construct.bind() : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var i = new (Function.bind.apply(e, r))();
                if (n) {
                  u(i, n.prototype);
                }
                return i;
              };
              return d.apply(null, arguments);
            }
            function c() {
              if (typeof Reflect == "undefined" || !Reflect.construct) {
                return false;
              }
              if (Reflect.construct.sham) {
                return false;
              }
              if (typeof Proxy == "function") {
                return true;
              }
              try {
                Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                return true;
              } catch (e) {
                return false;
              }
            }
            function u(e, t) {
              u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return u(e, t);
            }
            function p(e) {
              p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              };
              return p(e);
            }
            function m(e) {
              m = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
                return typeof e;
              } : function (e) {
                if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
                  return "symbol";
                } else {
                  return typeof e;
                }
              };
              return m(e);
            }
            var f = n(40537).inspect;
            var _ = n(69597).codes.ERR_INVALID_ARG_TYPE;
            function v(e, t, n) {
              if (n === undefined || n > e.length) {
                n = e.length;
              }
              return e.substring(n - t.length, n) === t;
            }
            var y = "";
            var g = "";
            var w = "";
            var x = "";
            var b = {
              deepStrictEqual: "Expected values to be strictly deep-equal:",
              strictEqual: "Expected values to be strictly equal:",
              strictEqualObject: "Expected \"actual\" to be reference-equal to \"expected\":",
              deepEqual: "Expected values to be loosely deep-equal:",
              equal: "Expected values to be loosely equal:",
              notDeepStrictEqual: "Expected \"actual\" not to be strictly deep-equal to:",
              notStrictEqual: "Expected \"actual\" to be strictly unequal to:",
              notStrictEqualObject: "Expected \"actual\" not to be reference-equal to \"expected\":",
              notDeepEqual: "Expected \"actual\" not to be loosely deep-equal to:",
              notEqual: "Expected \"actual\" to be loosely unequal to:",
              notIdentical: "Values identical but not reference-equal:"
            };
            function T(e) {
              var t = Object.keys(e);
              var n = Object.create(Object.getPrototypeOf(e));
              t.forEach(function (t) {
                n[t] = e[t];
              });
              Object.defineProperty(n, "message", {
                value: e.message
              });
              return n;
            }
            function A(e) {
              return f(e, {
                compact: false,
                customInspect: false,
                depth: 1000,
                maxArrayLength: Infinity,
                showHidden: false,
                breakLength: Infinity,
                showProxy: false,
                sorted: true,
                getters: true
              });
            }
            var C = function (e, t) {
              (function (e, t) {
                if (typeof t != "function" && t !== null) {
                  throw new TypeError("Super expression must either be null or a function");
                }
                e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                    value: e,
                    writable: true,
                    configurable: true
                  }
                });
                Object.defineProperty(e, "prototype", {
                  writable: false
                });
                if (t) {
                  u(e, t);
                }
              })(S, e);
              var n;
              var i;
              var l;
              var d;
              n = S;
              i = c();
              function C() {
                var e;
                var t = p(n);
                if (i) {
                  var r = p(this).constructor;
                  e = Reflect.construct(t, arguments, r);
                } else {
                  e = t.apply(this, arguments);
                }
                return o(this, e);
              }
              function S(e) {
                var t;
                (function (e, t) {
                  if (!(e instanceof t)) {
                    throw new TypeError("Cannot call a class as a function");
                  }
                })(this, S);
                if (m(e) !== "object" || e === null) {
                  throw new _("options", "Object", e);
                }
                var n = e.message;
                var i = e.operator;
                var s = e.stackStartFn;
                var a = e.actual;
                var l = e.expected;
                var d = Error.stackTraceLimit;
                Error.stackTraceLimit = 0;
                if (n != null) {
                  t = C.call(this, String(n));
                } else {
                  if (r.stderr && r.stderr.isTTY) {
                    if (r.stderr && r.stderr.getColorDepth && r.stderr.getColorDepth() !== 1) {
                      y = "[34m";
                      g = "[32m";
                      x = "[39m";
                      w = "[31m";
                    } else {
                      y = "";
                      g = "";
                      x = "";
                      w = "";
                    }
                  }
                  if (m(a) === "object" && a !== null && m(l) === "object" && l !== null && "stack" in a && a instanceof Error && "stack" in l && l instanceof Error) {
                    a = T(a);
                    l = T(l);
                  }
                  if (i === "deepStrictEqual" || i === "strictEqual") {
                    t = C.call(this, function (e, t, n) {
                      var i = "";
                      var s = "";
                      var a = 0;
                      var o = "";
                      var h = false;
                      var l = A(e);
                      var d = l.split("\n");
                      var c = A(t).split("\n");
                      var u = 0;
                      var p = "";
                      if (n === "strictEqual" && m(e) === "object" && m(t) === "object" && e !== null && t !== null) {
                        n = "strictEqualObject";
                      }
                      if (d.length === 1 && c.length === 1 && d[0] !== c[0]) {
                        var f = d[0].length + c[0].length;
                        if (f <= 10) {
                          if ((m(e) !== "object" || e === null) && (m(t) !== "object" || t === null) && (e !== 0 || t !== 0)) {
                            return `${b[n]}
        
        ${d[0]} !== ${c[0]}
        `;
                          }
                        } else if (n !== "strictEqualObject" && f < (r.stderr && r.stderr.isTTY ? r.stderr.columns : 80)) {
                          while (d[0][u] === c[0][u]) {
                            u++;
                          }
                          if (u > 2) {
                            p = `
          ${function (e, t) {
                              t = Math.floor(t);
                              if (e.length == 0 || t == 0) {
                                return "";
                              }
                              var n = e.length * t;
                              for (t = Math.floor(Math.log(t) / Math.log(2)); t;) {
                                e += e;
                                t--;
                              }
                              return e + e.substring(0, n - e.length);
                            }(" ", u)}^`;
                            u = 0;
                          }
                        }
                      }
                      for (var _ = d[d.length - 1], T = c[c.length - 1]; _ === T && (u++ < 2 ? o = `
          ${_}${o}` : i = _, d.pop(), c.pop(), d.length !== 0 && c.length !== 0);) {
                        _ = d[d.length - 1];
                        T = c[c.length - 1];
                      }
                      var C = Math.max(d.length, c.length);
                      if (C === 0) {
                        var S = l.split("\n");
                        if (S.length > 30) {
                          for (S[26] = `${y}...${x}`; S.length > 27;) {
                            S.pop();
                          }
                        }
                        return `${b.notIdentical}
        
        ${S.join("\n")}
        `;
                      }
                      if (u > 3) {
                        o = `
        ${y}...${x}${o}`;
                        h = true;
                      }
                      if (i !== "") {
                        o = `
          ${i}${o}`;
                        i = "";
                      }
                      var E = 0;
                      var O = `${b[n]}
        ${g}+ actual${x} ${w}- expected${x}`;
                      var k = ` ${y}...${x} Lines skipped`;
                      for (u = 0; u < C; u++) {
                        var P = u - a;
                        if (d.length < u + 1) {
                          if (P > 1 && u > 2) {
                            if (P > 4) {
                              s += `
        ${y}...${x}`;
                              h = true;
                            } else if (P > 3) {
                              s += `
          ${c[u - 2]}`;
                              E++;
                            }
                            s += `
          ${c[u - 1]}`;
                            E++;
                          }
                          a = u;
                          i += `
        ${w}-${x} ${c[u]}`;
                          E++;
                        } else if (c.length < u + 1) {
                          if (P > 1 && u > 2) {
                            if (P > 4) {
                              s += `
        ${y}...${x}`;
                              h = true;
                            } else if (P > 3) {
                              s += `
          ${d[u - 2]}`;
                              E++;
                            }
                            s += `
          ${d[u - 1]}`;
                            E++;
                          }
                          a = u;
                          s += `
        ${g}+${x} ${d[u]}`;
                          E++;
                        } else {
                          var M = c[u];
                          var R = d[u];
                          var I = R !== M && (!v(R, ",") || R.slice(0, -1) !== M);
                          if (I && v(M, ",") && M.slice(0, -1) === R) {
                            I = false;
                            R += ",";
                          }
                          if (I) {
                            if (P > 1 && u > 2) {
                              if (P > 4) {
                                s += `
        ${y}...${x}`;
                                h = true;
                              } else if (P > 3) {
                                s += `
          ${d[u - 2]}`;
                                E++;
                              }
                              s += `
          ${d[u - 1]}`;
                              E++;
                            }
                            a = u;
                            s += `
        ${g}+${x} ${R}`;
                            i += `
        ${w}-${x} ${M}`;
                            E += 2;
                          } else {
                            s += i;
                            i = "";
                            if (P === 1 || u === 0) {
                              s += `
          ${R}`;
                              E++;
                            }
                          }
                        }
                        if (E > 20 && u < C - 2) {
                          return `${O}${k}
        ${s}
        ${y}...${x}${i}
        ${y}...${x}`;
                        }
                      }
                      return `${O}${h ? k : ""}
        ${s}${i}${o}${p}`;
                    }(a, l, i));
                  } else if (i === "notDeepStrictEqual" || i === "notStrictEqual") {
                    var c = b[i];
                    var u = A(a).split("\n");
                    if (i === "notStrictEqual" && m(a) === "object" && a !== null) {
                      c = b.notStrictEqualObject;
                    }
                    if (u.length > 30) {
                      for (u[26] = `${y}...${x}`; u.length > 27;) {
                        u.pop();
                      }
                    }
                    t = u.length === 1 ? C.call(this, `${c} ${u[0]}`) : C.call(this, `${c}
        
        ${u.join("\n")}
        `);
                  } else {
                    var p = A(a);
                    var f = "";
                    var E = b[i];
                    if (i === "notDeepEqual" || i === "notEqual") {
                      if ((p = `${b[i]}
        
        ${p}`).length > 1024) {
                        p = `${p.slice(0, 1021)}...`;
                      }
                    } else {
                      f = `${A(l)}`;
                      if (p.length > 512) {
                        p = `${p.slice(0, 509)}...`;
                      }
                      if (f.length > 512) {
                        f = `${f.slice(0, 509)}...`;
                      }
                      if (i === "deepEqual" || i === "equal") {
                        p = `${E}
        
        ${p}
        
        should equal
        
        `;
                      } else {
                        f = ` ${i} ${f}`;
                      }
                    }
                    t = C.call(this, `${p}${f}`);
                  }
                }
                Error.stackTraceLimit = d;
                t.generatedMessage = !n;
                Object.defineProperty(h(t), "name", {
                  value: "AssertionError [ERR_ASSERTION]",
                  enumerable: false,
                  writable: true,
                  configurable: true
                });
                t.code = "ERR_ASSERTION";
                t.actual = a;
                t.expected = l;
                t.operator = i;
                if (Error.captureStackTrace) {
                  Error.captureStackTrace(h(t), s);
                }
                t.stack;
                t.name = "AssertionError";
                return o(t);
              }
              l = S;
              if (d = [{
                key: "toString",
                value: function () {
                  return `${this.name} [${this.code}]: ${this.message}`;
                }
              }, {
                key: t,
                value: function (e, t) {
                  return f(this, s(s({}, t), {}, {
                    customInspect: false,
                    depth: 0
                  }));
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
                })(l.prototype, d);
              }
              Object.defineProperty(l, "prototype", {
                writable: false
              });
              return S;
            }(l(Error), f.custom);
            e.exports = C;
          },
        69597(e, t, n) {
            "use strict";
        
            function r(e) {
              r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
                return typeof e;
              } : function (e) {
                if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
                  return "symbol";
                } else {
                  return typeof e;
                }
              };
              return r(e);
            }
            function i(e, t) {
              i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return i(e, t);
            }
            function s(e) {
              s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              };
              return s(e);
            }
            var a;
            var o;
            var h = {};
            function l(e, t, n) {
              n ||= Error;
              var a = function (n) {
                (function (e, t) {
                  if (typeof t != "function" && t !== null) {
                    throw new TypeError("Super expression must either be null or a function");
                  }
                  e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                      value: e,
                      writable: true,
                      configurable: true
                    }
                  });
                  Object.defineProperty(e, "prototype", {
                    writable: false
                  });
                  if (t) {
                    i(e, t);
                  }
                })(d, n);
                var a;
                var o;
                var h;
                o = d;
                h = function () {
                  if (typeof Reflect == "undefined" || !Reflect.construct) {
                    return false;
                  }
                  if (Reflect.construct.sham) {
                    return false;
                  }
                  if (typeof Proxy == "function") {
                    return true;
                  }
                  try {
                    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                    return true;
                  } catch (e) {
                    return false;
                  }
                }();
                function l() {
                  var e;
                  var t = s(o);
                  if (h) {
                    var n = s(this).constructor;
                    e = Reflect.construct(t, arguments, n);
                  } else {
                    e = t.apply(this, arguments);
                  }
                  return function (e, t) {
                    if (t && (r(t) === "object" || typeof t == "function")) {
                      return t;
                    }
                    if (t !== undefined) {
                      throw new TypeError("Derived constructors may only return object or undefined");
                    }
                    return function (e) {
                      if (e === undefined) {
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                      }
                      return e;
                    }(e);
                  }(this, e);
                }
                function d(n, r, i) {
                  var s;
                  (function (e, t) {
                    if (!(e instanceof t)) {
                      throw new TypeError("Cannot call a class as a function");
                    }
                  })(this, d);
                  s = l.call(this, function (e, n, r) {
                    if (typeof t == "string") {
                      return t;
                    } else {
                      return t(e, n, r);
                    }
                  }(n, r, i));
                  s.code = e;
                  return s;
                }
                a = d;
                Object.defineProperty(a, "prototype", {
                  writable: false
                });
                return a;
              }(n);
              h[e] = a;
            }
            function d(e, t) {
              if (Array.isArray(e)) {
                var n = e.length;
                e = e.map(function (e) {
                  return String(e);
                });
                if (n > 2) {
                  return `one of ${t} ${e.slice(0, n - 1).join(", ")}, or ${e[n - 1]}`;
                } else if (n === 2) {
                  return `one of ${t} ${e[0]} or ${e[1]}`;
                } else {
                  return `of ${t} ${e[0]}`;
                }
              }
              return `of ${t} ${String(e)}`;
            }
            l("ERR_AMBIGUOUS_ARGUMENT", "The \"%s\" argument is ambiguous. %s", TypeError);
            l("ERR_INVALID_ARG_TYPE", function (e, t, i) {
              var s;
              var o;
              var h;
              var l;
              if (a === undefined) {
                a = n(94148);
              }
              a(typeof e == "string", "'name' must be a string");
              if (typeof t == "string" && t.substr(0, 4) === "not ") {
                s = "must not be";
                t = t.replace(/^not /, "");
              } else {
                s = "must be";
              }
              if (function (e, t, n) {
                if (n === undefined || n > e.length) {
                  n = e.length;
                }
                return e.substring(n - 9, n) === " argument";
              }(e)) {
                o = `The ${e} ${s} ${d(t, "type")}`;
              } else {
                if (typeof l != "number") {
                  l = 0;
                }
                var c = l + 1 > (h = e).length || h.indexOf(".", l) === -1 ? "argument" : "property";
                o = `The "${e}" ${c} ${s} ${d(t, "type")}`;
              }
              return `${o}. Received type ${r(i)}`;
            }, TypeError);
            l("ERR_INVALID_ARG_VALUE", function (e, t, r = "is invalid") {
              if (o === undefined) {
                o = n(40537);
              }
              var i = o.inspect(t);
              if (i.length > 128) {
                i = `${i.slice(0, 128)}...`;
              }
              return `The argument '${e}' ${r}. Received ${i}`;
            }, TypeError, RangeError);
            l("ERR_INVALID_RETURN_VALUE", function (e, t, n) {
              var i;
              i = n && n.constructor && n.constructor.name ? `instance of ${n.constructor.name}` : `type ${r(n)}`;
              return `Expected ${e} to be returned from the "${t}" function but got ${i}.`;
            }, TypeError);
            l("ERR_MISSING_ARGS", function () {
              for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
                t[r] = arguments[r];
              }
              if (a === undefined) {
                a = n(94148);
              }
              a(t.length > 0, "At least one arg needs to be specified");
              var i = "The ";
              var s = t.length;
              t = t.map(function (e) {
                return `"${e}"`;
              });
              switch (s) {
                case 1:
                  i += `${t[0]} argument`;
                  break;
                case 2:
                  i += `${t[0]} and ${t[1]} arguments`;
                  break;
                default:
                  i += t.slice(0, s - 1).join(", ");
                  i += `, and ${t[s - 1]} arguments`;
              }
              return `${i} must be specified`;
            }, TypeError);
            e.exports.codes = h;
          }
    });
})();
