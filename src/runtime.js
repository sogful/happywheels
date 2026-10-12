(() => {
  var q = window.happywheelgamemodules;
  const n = {};
  function N(T) {
    const V = n[T];
    if (void 0x0 !== V) {
      return V["exports"];
    }
    const h = n[T] = {
      'id': T,
      'loaded': !0x1,
      'exports': {}
    };
    q[T]["call"](h["exports"], h, h["exports"], N);
    h["loaded"] = !0x0;
    return h["exports"];
  }
  N['m'] = q;
  window.happywheelrequire = N;
  window.happywheelmodulecache = n;
  (() => {
    if ('gZFxW' === "ByuZK") {
      this["_isMac"] = n;
    } else {
      const V = [];
      N['O'] = (h, C, j) => {
        if (!C) {
          for (var P = 0x0; P < V["length"]; P++) {
            let m = V[P][0x0];
            let I = V[P][0x1];
            let k = !0x0;
            for (var p = 0x0; p < m['length']; p++) {
              N['O']['j'](m[p]) ? m['splice'](p--, 0x1) : k = !0x1;
            }
            if (k) {
              if ("xsalO" !== "xsalO") {
                var B = T['dg']["REMOVE_FRO" + "M_FAVORITE" + 'S'];
                V['JD']["trackEvent"](h['JD']['LEVEL_BROW' + "SER"], C['JD']["REMOVE_FAV" + "ORITE"]);
              } else {
                V["splice"](P--, 0x1);
                const B = I();
                void 0x0 !== B && (h = B);
              }
            }
          }
          return h;
        }
        V['push']([C, j]);
      };
    }
  })();
  N['n'] = T => {
    if ("zKwaW" !== "zKwaW") {
      return this["_window"];
    } else {
      const h = T && T["__esModule"] ? () => T['default'] : () => T;
      N['d'](h, {
        'a': h
      });
      return h;
    }
  };
  N['cw'] = T => {
    var V;
    return () => {
      if (T) {
        var h = T;
        T = 0x0;
        V = {
          'exports': {}
        };
        h['call'](V["exports"], V, V["exports"]);
      }
      return V['exports'];
    };
  };
  N['d'] = (T, V) => {
    if (Array["isArray"](V)) {
      for (var h = 0x0; h < V["length"];) {
        var C = V[h++];
        var j = V[h++];
        var P = 0x0 === j ? {
          'enumerable': !0x0,
          'value': V[h++]
        } : {
          'enumerable': !0x0,
          'get': j
        };
        N['o'](T, C) || Object['defineProp' + "erty"](T, C, P);
      }
    } else {
      for (var C in V) {
        N['o'](V, C) && !N['o'](T, C) && Object["defineProp" + 'erty'](T, C, {
          'enumerable': !0x0,
          'get': V[C]
        });
      }
    }
  };
  N['g'] = function () {
    if ("hOzlY" !== "GRIYy") {
      if ("object" == typeof globalThis) {
        return globalThis;
      }
      try {
        return this || new Function("return thi" + 's')();
      } catch (V) {
        if ("object" == typeof window) {
          return window;
        }
      }
    } else {
      var j = N["other"];
      var P = j['GetShapeLi' + 'st']()["m_filter"]['groupIndex'];
      if (!(P < 0x0 && P > -0xa || -0x1 != this["paintVecto" + 'r']["indexOf"](j))) {
        var p = T["contact"];
        if (p["m_manifold" + "Count"] > 0x0 && !p["m_shape1"]['m_isSensor'] && !p["m_shape2"]["m_isSensor"]) {
          return !0x0;
        }
      }
    }
  }();
  N['o'] = (T, V) => Object["prototype"]["hasOwnProp" + "erty"]['call'](T, V);
  N["r"] = module => {
    Object.defineProperty(module, Symbol.toStringTag, { value: "Module" });
    Object.defineProperty(module, "__esModule", { value: true });
  };
  N["nmd"] = T => {
    T["paths"] = [];
    T["children"] || (T["children"] = []);
    return T;
  };
  (() => {
    const T = {
      0x39: 0x0
    };
    N['O']['j'] = C => 0x0 === T[C];
    const V = (C, j) => {
      let P = j[0x0];
      let p = j[0x1];
      let K = j[0x2];
      var m;
      var I;
      var k = 0x0;
      if (P["some"](E => 0x0 !== T[E])) {
        for (m in p) {
          N['o'](p, m) && (N['m'][m] = p[m]);
        }
        if (K) {
          var B = K(N);
        }
      }
      for (C && C(j); k < P["length"]; k++) {
        I = P[k];
        N['o'](T, I) && T[I] && T[I][0x0]();
        T[I] = 0x0;
      }
      return N['O'](B);
    };
    const h = self["Tmuiyx1774"] = self["Tmuiyx1774"] || [];
    h["forEach"](V["bind"](null, 0x0));
    h['push'] = V["bind"](null, h["push"]["bind"](h));
  })();
  let f = N['O'](void 0x0, [0x208], () => N(0xbfa5));
  f = N['O'](f);
})();
