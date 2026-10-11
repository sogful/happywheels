(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        52676(e) {
            n.removeEventListener = function (e, n, o, h) {
              return (t = t || (document.addEventListener ? {
                add: r,
                rm: i
              } : {
                add: s,
                rm: a
              })).rm(e, n, o, h);
            };
            n.addEventListener = n;
            e.exports = n;
            var t = null;
            function n(e, n, o, h) {
              return (t = t || (document.addEventListener ? {
                add: r,
                rm: i
              } : {
                add: s,
                rm: a
              })).add(e, n, o, h);
            }
            function r(e, t, n, r) {
              e.addEventListener(t, n, r);
            }
            function i(e, t, n, r) {
              e.removeEventListener(t, n, r);
            }
            function s(e, t, n, r) {
              if (r) {
                throw new Error("cannot useCapture in oldIE");
              }
              e.attachEvent("on" + t, n);
            }
            function a(e, t, n, r) {
              e.detachEvent("on" + t, n);
            }
          },
        94148(e, t, n) {
            "use strict";
        
            var r = n(65606);
            function i(e) {
              i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
                return typeof e;
              } : function (e) {
                if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
                  return "symbol";
                } else {
                  return typeof e;
                }
              };
              return i(e);
            }
            function s(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) {
                  r.writable = true;
                }
                Object.defineProperty(e, o(r.key), r);
              }
            }
            function a(e, t, n) {
              if (t) {
                s(e.prototype, t);
              }
              if (n) {
                s(e, n);
              }
              Object.defineProperty(e, "prototype", {
                writable: false
              });
              return e;
            }
            function o(e) {
              var t = function (e) {
                if (i(e) !== "object" || e === null) {
                  return e;
                }
                var t = e[Symbol.toPrimitive];
                if (t !== undefined) {
                  var n = t.call(e, "string");
                  if (i(n) !== "object") {
                    return n;
                  }
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(e);
              }(e);
              if (i(t) === "symbol") {
                return t;
              } else {
                return String(t);
              }
            }
            var h;
            var l;
            var d = n(69597).codes;
            var c = d.ERR_AMBIGUOUS_ARGUMENT;
            var u = d.ERR_INVALID_ARG_TYPE;
            var p = d.ERR_INVALID_ARG_VALUE;
            var m = d.ERR_INVALID_RETURN_VALUE;
            var f = d.ERR_MISSING_ARGS;
            var _ = n(3918);
            var v = n(40537).inspect;
            var y = n(40537).types;
            var g = y.isPromise;
            var w = y.isRegExp;
            var x = n(11514)();
            var b = n(9394)();
            var T = n(38075)("RegExp.prototype.test");
            function A() {
              var e = n(82299);
              h = e.isDeepEqual;
              l = e.isDeepStrictEqual;
            }
            new Map();
            var C = false;
            var S = e.exports = P;
            var E = {};
            function O(e) {
              if (e.message instanceof Error) {
                throw e.message;
              }
              throw new _(e);
            }
            function k(e, t, n, r) {
              if (!n) {
                var i = false;
                if (t === 0) {
                  i = true;
                  r = "No value argument passed to `assert.ok()`";
                } else if (r instanceof Error) {
                  throw r;
                }
                var s = new _({
                  actual: n,
                  expected: true,
                  message: r,
                  operator: "==",
                  stackStartFn: e
                });
                s.generatedMessage = i;
                throw s;
              }
            }
            function P() {
              for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
                t[n] = arguments[n];
              }
              k.apply(undefined, [P, t.length].concat(t));
            }
            S.fail = function e(t, n, i, s, a) {
              var o;
              var h = arguments.length;
              if (h === 0) {
                o = "Failed";
              } else if (h === 1) {
                i = t;
                t = undefined;
              } else {
                if (C === false) {
                  C = true;
                  (r.emitWarning ? r.emitWarning : function () {}.bind())("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.", "DeprecationWarning", "DEP0094");
                }
                if (h === 2) {
                  s = "!=";
                }
              }
              if (i instanceof Error) {
                throw i;
              }
              var l = {
                actual: t,
                expected: n,
                operator: s === undefined ? "fail" : s,
                stackStartFn: a || e
              };
              if (i !== undefined) {
                l.message = i;
              }
              var d = new _(l);
              if (o) {
                d.message = o;
                d.generatedMessage = true;
              }
              throw d;
            };
            S.AssertionError = _;
            S.ok = P;
            S.equal = function e(t, n, r) {
              if (arguments.length < 2) {
                throw new f("actual", "expected");
              }
              if (t != n) {
                O({
                  actual: t,
                  expected: n,
                  message: r,
                  operator: "==",
                  stackStartFn: e
                });
              }
            };
            S.notEqual = function e(t, n, r) {
              if (arguments.length < 2) {
                throw new f("actual", "expected");
              }
              if (t == n) {
                O({
                  actual: t,
                  expected: n,
                  message: r,
                  operator: "!=",
                  stackStartFn: e
                });
              }
            };
            S.deepEqual = function e(t, n, r) {
              if (arguments.length < 2) {
                throw new f("actual", "expected");
              }
              if (h === undefined) {
                A();
              }
              if (!h(t, n)) {
                O({
                  actual: t,
                  expected: n,
                  message: r,
                  operator: "deepEqual",
                  stackStartFn: e
                });
              }
            };
            S.notDeepEqual = function e(t, n, r) {
              if (arguments.length < 2) {
                throw new f("actual", "expected");
              }
              if (h === undefined) {
                A();
              }
              if (h(t, n)) {
                O({
                  actual: t,
                  expected: n,
                  message: r,
                  operator: "notDeepEqual",
                  stackStartFn: e
                });
              }
            };
            S.deepStrictEqual = function e(t, n, r) {
              if (arguments.length < 2) {
                throw new f("actual", "expected");
              }
              if (h === undefined) {
                A();
              }
              if (!l(t, n)) {
                O({
                  actual: t,
                  expected: n,
                  message: r,
                  operator: "deepStrictEqual",
                  stackStartFn: e
                });
              }
            };
            S.notDeepStrictEqual = function e(t, n, r) {
              if (arguments.length < 2) {
                throw new f("actual", "expected");
              }
              if (h === undefined) {
                A();
              }
              if (l(t, n)) {
                O({
                  actual: t,
                  expected: n,
                  message: r,
                  operator: "notDeepStrictEqual",
                  stackStartFn: e
                });
              }
            };
            S.strictEqual = function e(t, n, r) {
              if (arguments.length < 2) {
                throw new f("actual", "expected");
              }
              if (!b(t, n)) {
                O({
                  actual: t,
                  expected: n,
                  message: r,
                  operator: "strictEqual",
                  stackStartFn: e
                });
              }
            };
            S.notStrictEqual = function e(t, n, r) {
              if (arguments.length < 2) {
                throw new f("actual", "expected");
              }
              if (b(t, n)) {
                O({
                  actual: t,
                  expected: n,
                  message: r,
                  operator: "notStrictEqual",
                  stackStartFn: e
                });
              }
            };
            var M = a(function e(t, n, r) {
              var i = this;
              (function (e, t) {
                if (!(e instanceof t)) {
                  throw new TypeError("Cannot call a class as a function");
                }
              })(this, e);
              n.forEach(function (e) {
                if (e in t) {
                  if (r !== undefined && typeof r[e] == "string" && w(t[e]) && T(t[e], r[e])) {
                    i[e] = r[e];
                  } else {
                    i[e] = t[e];
                  }
                }
              });
            });
            function R(e, t, n, r) {
              if (typeof t != "function") {
                if (w(t)) {
                  return T(t, e);
                }
                if (arguments.length === 2) {
                  throw new u("expected", ["Function", "RegExp"], t);
                }
                if (i(e) !== "object" || e === null) {
                  var s = new _({
                    actual: e,
                    expected: t,
                    message: n,
                    operator: "deepStrictEqual",
                    stackStartFn: r
                  });
                  s.operator = r.name;
                  throw s;
                }
                var a = Object.keys(t);
                if (t instanceof Error) {
                  a.push("name", "message");
                } else if (a.length === 0) {
                  throw new p("error", t, "may not be an empty object");
                }
                if (h === undefined) {
                  A();
                }
                a.forEach(function (i) {
                  if (typeof e[i] != "string" || !w(t[i]) || !T(t[i], e[i])) {
                    (function (e, t, n, r, i, s) {
                      if (!(n in e) || !l(e[n], t[n])) {
                        if (!r) {
                          var a = new M(e, i);
                          var o = new M(t, i, e);
                          var h = new _({
                            actual: a,
                            expected: o,
                            operator: "deepStrictEqual",
                            stackStartFn: s
                          });
                          h.actual = e;
                          h.expected = t;
                          h.operator = s.name;
                          throw h;
                        }
                        O({
                          actual: e,
                          expected: t,
                          message: r,
                          operator: s.name,
                          stackStartFn: s
                        });
                      }
                    })(e, t, i, n, a, r);
                  }
                });
                return true;
              }
              return t.prototype !== undefined && e instanceof t || !Error.isPrototypeOf(t) && t.call({}, e) === true;
            }
            function I(e) {
              if (typeof e != "function") {
                throw new u("fn", "Function", e);
              }
              try {
                e();
              } catch (e) {
                return e;
              }
              return E;
            }
            function L(e) {
              return g(e) || e !== null && i(e) === "object" && typeof e.then == "function" && typeof e.catch == "function";
            }
            function j(e) {
              return Promise.resolve().then(function () {
                var t;
                if (typeof e == "function") {
                  if (!L(t = e())) {
                    throw new m("instance of Promise", "promiseFn", t);
                  }
                } else {
                  if (!L(e)) {
                    throw new u("promiseFn", ["Function", "Promise"], e);
                  }
                  t = e;
                }
                return Promise.resolve().then(function () {
                  return t;
                }).then(function () {
                  return E;
                }).catch(function (e) {
                  return e;
                });
              });
            }
            function B(e, t, n, r) {
              if (typeof n == "string") {
                if (arguments.length === 4) {
                  throw new u("error", ["Object", "Error", "Function", "RegExp"], n);
                }
                if (i(t) === "object" && t !== null) {
                  if (t.message === n) {
                    throw new c("error/message", `The error message "${t.message}" is identical to the message.`);
                  }
                } else if (t === n) {
                  throw new c("error/message", `The error "${t}" is identical to the message.`);
                }
                r = n;
                n = undefined;
              } else if (n != null && i(n) !== "object" && typeof n != "function") {
                throw new u("error", ["Object", "Error", "Function", "RegExp"], n);
              }
              if (t === E) {
                var s = "";
                if (n && n.name) {
                  s += ` (${n.name})`;
                }
                s += r ? `: ${r}` : ".";
                var a = e.name === "rejects" ? "rejection" : "exception";
                O({
                  actual: undefined,
                  expected: n,
                  operator: e.name,
                  message: `Missing expected ${a}${s}`,
                  stackStartFn: e
                });
              }
              if (n && !R(t, n, r, e)) {
                throw t;
              }
            }
            function D(e, t, n, r) {
              if (t !== E) {
                if (typeof n == "string") {
                  r = n;
                  n = undefined;
                }
                if (!n || R(t, n)) {
                  var i = r ? `: ${r}` : ".";
                  var s = e.name === "doesNotReject" ? "rejection" : "exception";
                  O({
                    actual: t,
                    expected: n,
                    operator: e.name,
                    message: `Got unwanted ${s}${i}
        Actual message: "${t && t.message}"`,
                    stackStartFn: e
                  });
                }
                throw t;
              }
            }
            function F(e, t, n, r, s) {
              if (!w(t)) {
                throw new u("regexp", "RegExp", t);
              }
              var a = s === "match";
              if (typeof e != "string" || T(t, e) !== a) {
                if (n instanceof Error) {
                  throw n;
                }
                var o = !n;
                n = n || (typeof e != "string" ? `The "string" argument must be of type string. Received type ${i(e)} (${v(e)})` : `${a ? "The input did not match the regular expression " : "The input was expected to not match the regular expression "}${v(t)}. Input:
        
        ${v(e)}
        `);
                var h = new _({
                  actual: e,
                  expected: t,
                  message: n,
                  operator: s,
                  stackStartFn: r
                });
                h.generatedMessage = o;
                throw h;
              }
            }
            function N() {
              for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
                t[n] = arguments[n];
              }
              k.apply(undefined, [N, t.length].concat(t));
            }
            S.throws = function e(t) {
              for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) {
                r[i - 1] = arguments[i];
              }
              B.apply(undefined, [e, I(t)].concat(r));
            };
            S.rejects = function e(t) {
              for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) {
                r[i - 1] = arguments[i];
              }
              return j(t).then(function (t) {
                return B.apply(undefined, [e, t].concat(r));
              });
            };
            S.doesNotThrow = function e(t) {
              for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) {
                r[i - 1] = arguments[i];
              }
              D.apply(undefined, [e, I(t)].concat(r));
            };
            S.doesNotReject = function e(t) {
              for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) {
                r[i - 1] = arguments[i];
              }
              return j(t).then(function (t) {
                return D.apply(undefined, [e, t].concat(r));
              });
            };
            S.ifError = function e(t) {
              if (t != null) {
                var n = "ifError got unwanted exception: ";
                if (i(t) === "object" && typeof t.message == "string") {
                  if (t.message.length === 0 && t.constructor) {
                    n += t.constructor.name;
                  } else {
                    n += t.message;
                  }
                } else {
                  n += v(t);
                }
                var r = new _({
                  actual: t,
                  expected: null,
                  operator: "ifError",
                  message: n,
                  stackStartFn: e
                });
                var s = t.stack;
                if (typeof s == "string") {
                  var a = s.split("\n");
                  a.shift();
                  var o = r.stack.split("\n");
                  for (var h = 0; h < a.length; h++) {
                    var l = o.indexOf(a[h]);
                    if (l !== -1) {
                      o = o.slice(0, l);
                      break;
                    }
                  }
                  r.stack = `${o.join("\n")}
        ${a.join("\n")}`;
                }
                throw r;
              }
            };
            S.match = function e(t, n, r) {
              F(t, n, r, e, "match");
            };
            S.doesNotMatch = function e(t, n, r) {
              F(t, n, r, e, "doesNotMatch");
            };
            S.strict = x(N, S, {
              equal: S.strictEqual,
              deepEqual: S.deepStrictEqual,
              notEqual: S.notStrictEqual,
              notDeepEqual: S.notDeepStrictEqual
            });
            S.strict.strict = S.strict;
          }
    });
})();
