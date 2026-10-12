(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        70453(e, t, n) {
            "use strict";
        
            var r;
            var i = n(79612);
            var s = n(69383);
            var a = n(41237);
            var o = n(79290);
            var h = n(79538);
            var l = n(58068);
            var d = n(69675);
            var c = n(35345);
            var u = n(71514);
            var p = n(58968);
            var m = n(6188);
            var f = n(68002);
            var _ = n(75880);
            var v = n(70414);
            var y = n(73093);
            var g = Function;
            function w(e) {
              try {
                return g("\"use strict\"; return (" + e + ").constructor;")();
              } catch (e) {}
            }
            var x = n(75795);
            var b = n(30655);
            function T() {
              throw new d();
            }
            var A = x ? function () {
              try {
                return T;
              } catch (e) {
                try {
                  return x(arguments, "callee").get;
                } catch (e) {
                  return T;
                }
              }
            }() : T;
            var C = n(64039)();
            var S = n(93628);
            var E = n(71064);
            var O = n(48648);
            var k = n(11002);
            var P = n(10076);
            var M = {};
            var R = typeof Uint8Array != "undefined" && S ? S(Uint8Array) : r;
            var I = {
              __proto__: null,
              "%AggregateError%": typeof AggregateError == "undefined" ? r : AggregateError,
              "%Array%": Array,
              "%ArrayBuffer%": typeof ArrayBuffer == "undefined" ? r : ArrayBuffer,
              "%ArrayIteratorPrototype%": C && S ? S([][Symbol.iterator]()) : r,
              "%AsyncFromSyncIteratorPrototype%": r,
              "%AsyncFunction%": M,
              "%AsyncGenerator%": M,
              "%AsyncGeneratorFunction%": M,
              "%AsyncIteratorPrototype%": M,
              "%Atomics%": typeof Atomics == "undefined" ? r : Atomics,
              "%BigInt%": typeof BigInt == "undefined" ? r : BigInt,
              "%BigInt64Array%": typeof BigInt64Array == "undefined" ? r : BigInt64Array,
              "%BigUint64Array%": typeof BigUint64Array == "undefined" ? r : BigUint64Array,
              "%Boolean%": Boolean,
              "%DataView%": typeof DataView == "undefined" ? r : DataView,
              "%Date%": Date,
              "%decodeURI%": decodeURI,
              "%decodeURIComponent%": decodeURIComponent,
              "%encodeURI%": encodeURI,
              "%encodeURIComponent%": encodeURIComponent,
              "%Error%": s,
              "%eval%": eval,
              "%EvalError%": a,
              "%Float16Array%": typeof Float16Array == "undefined" ? r : Float16Array,
              "%Float32Array%": typeof Float32Array == "undefined" ? r : Float32Array,
              "%Float64Array%": typeof Float64Array == "undefined" ? r : Float64Array,
              "%FinalizationRegistry%": typeof FinalizationRegistry == "undefined" ? r : FinalizationRegistry,
              "%Function%": g,
              "%GeneratorFunction%": M,
              "%Int8Array%": typeof Int8Array == "undefined" ? r : Int8Array,
              "%Int16Array%": typeof Int16Array == "undefined" ? r : Int16Array,
              "%Int32Array%": typeof Int32Array == "undefined" ? r : Int32Array,
              "%isFinite%": isFinite,
              "%isNaN%": isNaN,
              "%IteratorPrototype%": C && S ? S(S([][Symbol.iterator]())) : r,
              "%JSON%": typeof JSON == "object" ? JSON : r,
              "%Map%": typeof Map == "undefined" ? r : Map,
              "%MapIteratorPrototype%": typeof Map != "undefined" && C && S ? S(new Map()[Symbol.iterator]()) : r,
              "%Math%": Math,
              "%Number%": Number,
              "%Object%": i,
              "%Object.getOwnPropertyDescriptor%": x,
              "%parseFloat%": parseFloat,
              "%parseInt%": parseInt,
              "%Promise%": typeof Promise == "undefined" ? r : Promise,
              "%Proxy%": typeof Proxy == "undefined" ? r : Proxy,
              "%RangeError%": o,
              "%ReferenceError%": h,
              "%Reflect%": typeof Reflect == "undefined" ? r : Reflect,
              "%RegExp%": RegExp,
              "%Set%": typeof Set == "undefined" ? r : Set,
              "%SetIteratorPrototype%": typeof Set != "undefined" && C && S ? S(new Set()[Symbol.iterator]()) : r,
              "%SharedArrayBuffer%": typeof SharedArrayBuffer == "undefined" ? r : SharedArrayBuffer,
              "%String%": String,
              "%StringIteratorPrototype%": C && S ? S(""[Symbol.iterator]()) : r,
              "%Symbol%": C ? Symbol : r,
              "%SyntaxError%": l,
              "%ThrowTypeError%": A,
              "%TypedArray%": R,
              "%TypeError%": d,
              "%Uint8Array%": typeof Uint8Array == "undefined" ? r : Uint8Array,
              "%Uint8ClampedArray%": typeof Uint8ClampedArray == "undefined" ? r : Uint8ClampedArray,
              "%Uint16Array%": typeof Uint16Array == "undefined" ? r : Uint16Array,
              "%Uint32Array%": typeof Uint32Array == "undefined" ? r : Uint32Array,
              "%URIError%": c,
              "%WeakMap%": typeof WeakMap == "undefined" ? r : WeakMap,
              "%WeakRef%": typeof WeakRef == "undefined" ? r : WeakRef,
              "%WeakSet%": typeof WeakSet == "undefined" ? r : WeakSet,
              "%Function.prototype.call%": P,
              "%Function.prototype.apply%": k,
              "%Object.defineProperty%": b,
              "%Object.getPrototypeOf%": E,
              "%Math.abs%": u,
              "%Math.floor%": p,
              "%Math.max%": m,
              "%Math.min%": f,
              "%Math.pow%": _,
              "%Math.round%": v,
              "%Math.sign%": y,
              "%Reflect.getPrototypeOf%": O
            };
            if (S) {
              try {
                null.error;
              } catch (e) {
                var L = S(S(e));
                I["%Error.prototype%"] = L;
              }
            }
            var j = function e(t) {
              var n;
              if (t === "%AsyncFunction%") {
                n = w("async function () {}");
              } else if (t === "%GeneratorFunction%") {
                n = w("function* () {}");
              } else if (t === "%AsyncGeneratorFunction%") {
                n = w("async function* () {}");
              } else if (t === "%AsyncGenerator%") {
                var r = e("%AsyncGeneratorFunction%");
                if (r) {
                  n = r.prototype;
                }
              } else if (t === "%AsyncIteratorPrototype%") {
                var i = e("%AsyncGenerator%");
                if (i && S) {
                  n = S(i.prototype);
                }
              }
              I[t] = n;
              return n;
            };
            var B = {
              __proto__: null,
              "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
              "%ArrayPrototype%": ["Array", "prototype"],
              "%ArrayProto_entries%": ["Array", "prototype", "entries"],
              "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
              "%ArrayProto_keys%": ["Array", "prototype", "keys"],
              "%ArrayProto_values%": ["Array", "prototype", "values"],
              "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
              "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
              "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
              "%BooleanPrototype%": ["Boolean", "prototype"],
              "%DataViewPrototype%": ["DataView", "prototype"],
              "%DatePrototype%": ["Date", "prototype"],
              "%ErrorPrototype%": ["Error", "prototype"],
              "%EvalErrorPrototype%": ["EvalError", "prototype"],
              "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
              "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
              "%FunctionPrototype%": ["Function", "prototype"],
              "%Generator%": ["GeneratorFunction", "prototype"],
              "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
              "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
              "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
              "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
              "%JSONParse%": ["JSON", "parse"],
              "%JSONStringify%": ["JSON", "stringify"],
              "%MapPrototype%": ["Map", "prototype"],
              "%NumberPrototype%": ["Number", "prototype"],
              "%ObjectPrototype%": ["Object", "prototype"],
              "%ObjProto_toString%": ["Object", "prototype", "toString"],
              "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
              "%PromisePrototype%": ["Promise", "prototype"],
              "%PromiseProto_then%": ["Promise", "prototype", "then"],
              "%Promise_all%": ["Promise", "all"],
              "%Promise_reject%": ["Promise", "reject"],
              "%Promise_resolve%": ["Promise", "resolve"],
              "%RangeErrorPrototype%": ["RangeError", "prototype"],
              "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
              "%RegExpPrototype%": ["RegExp", "prototype"],
              "%SetPrototype%": ["Set", "prototype"],
              "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
              "%StringPrototype%": ["String", "prototype"],
              "%SymbolPrototype%": ["Symbol", "prototype"],
              "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
              "%TypedArrayPrototype%": ["TypedArray", "prototype"],
              "%TypeErrorPrototype%": ["TypeError", "prototype"],
              "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
              "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
              "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
              "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
              "%URIErrorPrototype%": ["URIError", "prototype"],
              "%WeakMapPrototype%": ["WeakMap", "prototype"],
              "%WeakSetPrototype%": ["WeakSet", "prototype"]
            };
            var D = n(66743);
            var F = n(9957);
            var N = D.call(P, Array.prototype.concat);
            var G = D.call(k, Array.prototype.splice);
            var U = D.call(P, String.prototype.replace);
            var V = D.call(P, String.prototype.slice);
            var H = D.call(P, RegExp.prototype.exec);
            var z = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
            var W = /\\(\\)?/g;
            function X(e, t) {
              var n;
              var r = e;
              if (F(B, r)) {
                r = "%" + (n = B[r])[0] + "%";
              }
              if (F(I, r)) {
                var i = I[r];
                if (i === M) {
                  i = j(r);
                }
                if (i === undefined && !t) {
                  throw new d("intrinsic " + e + " exists, but is not available. Please file an issue!");
                }
                return {
                  alias: n,
                  name: r,
                  value: i
                };
              }
              throw new l("intrinsic " + e + " does not exist!");
            }
            e.exports = function (e, t) {
              if (typeof e != "string" || e.length === 0) {
                throw new d("intrinsic name must be a non-empty string");
              }
              if (arguments.length > 1 && typeof t != "boolean") {
                throw new d("\"allowMissing\" argument must be a boolean");
              }
              if (H(/^%?[^%]*%?$/, e) === null) {
                throw new l("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
              }
              var n = function (e) {
                var t = V(e, 0, 1);
                var n = V(e, -1);
                if (t === "%" && n !== "%") {
                  throw new l("invalid intrinsic syntax, expected closing `%`");
                }
                if (n === "%" && t !== "%") {
                  throw new l("invalid intrinsic syntax, expected opening `%`");
                }
                var r = [];
                U(e, z, function (e, t, n, i) {
                  r[r.length] = n ? U(i, W, "$1") : t || e;
                });
                return r;
              }(e);
              var r = n.length > 0 ? n[0] : "";
              var i = X("%" + r + "%", t);
              var s = i.name;
              var a = i.value;
              var o = false;
              var h = i.alias;
              if (h) {
                r = h[0];
                G(n, N([0, 1], h));
              }
              for (var c = 1, u = true; c < n.length; c += 1) {
                var p = n[c];
                var m = V(p, 0, 1);
                var f = V(p, -1);
                if ((m === "\"" || m === "'" || m === "`" || f === "\"" || f === "'" || f === "`") && m !== f) {
                  throw new l("property names with quotes must have matching quotes");
                }
                if (p === "constructor" || !u) {
                  o = true;
                }
                if (F(I, s = "%" + (r += "." + p) + "%")) {
                  a = I[s];
                } else if (a != null) {
                  if (!(p in a)) {
                    if (!t) {
                      throw new d("base intrinsic for " + e + " exists, but the property is not available.");
                    }
                    return;
                  }
                  if (x && c + 1 >= n.length) {
                    var _ = x(a, p);
                    a = (u = !!_) && "get" in _ && !("originalValue" in _.get) ? _.get : a[p];
                  } else {
                    u = F(a, p);
                    a = a[p];
                  }
                  if (u && !o) {
                    I[s] = a;
                  }
                }
              }
              return a;
            };
          },
        71064(e, t, n) {
            "use strict";
        
            var r = n(79612);
            e.exports = r.getPrototypeOf || null;
          },
        48648(e) {
            "use strict";
        
            e.exports = typeof Reflect != "undefined" && Reflect.getPrototypeOf || null;
          },
        93628(e, t, n) {
            "use strict";
        
            var r = n(48648);
            var i = n(71064);
            var s = n(7176);
            e.exports = r ? function (e) {
              return r(e);
            } : i ? function (e) {
              if (!e || typeof e != "object" && typeof e != "function") {
                throw new TypeError("getProto: not an object");
              }
              return i(e);
            } : s ? function (e) {
              return s(e);
            } : null;
          },
        6549(e) {
            "use strict";
        
            e.exports = Object.getOwnPropertyDescriptor;
          },
        75795(e, t, n) {
            "use strict";
        
            var r = n(6549);
            if (r) {
              try {
                r([], "length");
              } catch (e) {
                r = null;
              }
            }
            e.exports = r;
          }
    });
})();
