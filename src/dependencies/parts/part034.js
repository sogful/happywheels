(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        30592(e, t, n) {
            "use strict";
        
            var r = n(30655);
            function i() {
              return !!r;
            }
            i.hasArrayLengthDefineBug = function () {
              if (!r) {
                return null;
              }
              try {
                return r([], "length", {
                  value: 1
                }).length !== 1;
              } catch (e) {
                return true;
              }
            };
            e.exports = i;
          },
        64039(e, t, n) {
            "use strict";
        
            var r = typeof Symbol != "undefined" && Symbol;
            var i = n(41333);
            e.exports = function () {
              return typeof r == "function" && typeof Symbol == "function" && typeof r("foo") == "symbol" && typeof Symbol("bar") == "symbol" && i();
            };
          },
        41333(e) {
            "use strict";
        
            e.exports = function () {
              if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") {
                return false;
              }
              if (typeof Symbol.iterator == "symbol") {
                return true;
              }
              var e = {};
              var t = Symbol("test");
              var n = Object(t);
              if (typeof t == "string") {
                return false;
              }
              if (Object.prototype.toString.call(t) !== "[object Symbol]") {
                return false;
              }
              if (Object.prototype.toString.call(n) !== "[object Symbol]") {
                return false;
              }
              e[t] = 42;
              for (var r in e) {
                return false;
              }
              if (typeof Object.keys == "function" && Object.keys(e).length !== 0) {
                return false;
              }
              if (typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0) {
                return false;
              }
              var i = Object.getOwnPropertySymbols(e);
              if (i.length !== 1 || i[0] !== t) {
                return false;
              }
              if (!Object.prototype.propertyIsEnumerable.call(e, t)) {
                return false;
              }
              if (typeof Object.getOwnPropertyDescriptor == "function") {
                var s = Object.getOwnPropertyDescriptor(e, t);
                if (s.value !== 42 || s.enumerable !== true) {
                  return false;
                }
              }
              return true;
            };
          },
        49092(e, t, n) {
            "use strict";
        
            var r = n(41333);
            e.exports = function () {
              return r() && !!Symbol.toStringTag;
            };
          },
        9957(e, t, n) {
            "use strict";
        
            var r = Function.prototype.call;
            var i = Object.prototype.hasOwnProperty;
            var s = n(66743);
            e.exports = s.call(r, i);
          }
    });
})();
