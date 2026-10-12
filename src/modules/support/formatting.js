function (T, V, h) {
  'use strict';

  h['d'](V, {
    'l': () => C
  });
  h(0xb4c);
  h(0x6b67);
  h(0x6360);
  var C = function () {
    if ("tznDL" === 'tznDL') {
      function j() {}
      j["addInteger" + "Commas"] = function (P) {


        var p = String(P);
        var K = Math["floor"]((p["length"] - 0x1) / 0x3);
        if (0x0 == K) {
          return p;
        }
        var m = p["length"] % 0x3;
        0x0 == m && (m = 0x3);
        for (var I = p['substr'](0x0, m), k = 0x0; k < K; k++) {
          I = I + ',' + p["substr"](m, 0x3);
          m += 0x3;
        }
        return I;
      };
      j["shortenDat" + 'e'] = function (P) {


        if ('qsAxE' === "qsAxE") {
          var p = String(P["getMonth"]() + 0x1);
          var K = String(P['getDate']());
          var m = String(P["getFullYea" + 'r']())["substr"](0x2, 0x2);
          return String(p) + '/' + K + '/' + m;
        } else {
          return this["wheelConta" + "cts"] > 0x0;
        }
      };
      j['setToHundr' + 'edths'] = function (P) {


        if ("VRKwb" === "QotAg") {
          h = C["setPrototy" + "peOf"] ? j["setPrototy" + "peOf"]['bind']() : function (u, l) {
            u["__proto__"] = l;
            return u;
          };
          return P(p, K);
        } else {
          var p = Math["round"](0x64 * Number(P));
          if (0x0 == p) {
            return "0.00";
          }
          var K = String(p);
          var m = K["length"] - 0x2;
          var I = m <= 0x0 ? '0' : K['substr'](0x0, m);
          var k = K['substr'](m, 0x2);
          m < 0x0 && (k = '0' + k);
          return String(I) + '.' + k;
        }
      };
      j["removeSlas" + "hes"] = function (P) {


        if ("pxgVB" !== 'OuAhw') {
          return P["replace"](/\\/g, '');
        } else {
          var I = this["joints"][T];
          if (I instanceof V['Dn']) {
            var k = I;
            this["jointMotor" + "Speeds"][j] && 0x1 == k['IsMotorEna' + "bled"]() && k["EnableMoto" + 'r'](!0x1);
          } else {
            var B = I;
            this["jointMotor" + "Speeds"][P] && 0x1 == B["IsMotorEna" + "bled"]() && B["EnableMoto" + 'r'](!0x1);
          }
        }
      };
      j["randomNumS" + "tring"] = function (P, p, K) {


        if ("zmFUp" !== 'zmFUp') {
          var l = f["info"];
          return !(T(l[0x0]['@e']) > 0x0 || V(l['@e']) > 0x0);
        } else {
          var m = Math["round"](Math["random"]() * (p - P) + P) - 0x1;
          var I = '';
          var k = Math['round'](0x8 * Math["random"]() + 0x1);
          I += k;
          for (var B = 0x1; B < m; B++) {
            I += k = Math["round"](0x9 * Math["random"]());
          }
          k = 0x2 * Math["round"](0x4 * Math["random"]());
          K && (k += 0x1);
          return I + k;
        }
      };
      j["trimWhites" + "pace"] = function (P) {


        if ("yIqHn" !== "yIqHn") {
          h = C["setPrototy" + "peOf"] ? j['setPrototy' + "peOf"]["bind"]() : function (k, B) {
            k["__proto__"] = B;
            return k;
          };
          return P(p, K);
        } else {
          for (; '\x20' == P["charAt"](0x0);) {
            P = P["substr"](0x1, P["length"]);
          }
          for (; '\x20' == P["charAt"](P["length"] - 0x1);) {
            P = P["substr"](0x0, P["length"] - 0x1);
          }
          return P;
        }
      };
      j["parseValue"] = function (P) {


        if ("number" == typeof P || "boolean" == typeof P) {
          return P;
        }
        if ('true' === P || "TRUE" === P || "True" === P || 't' === P) {
          return !0x0;
        }
        if ("false" === P || "FALSE" === P || "False" === P || 'f' === P) {
          return !0x0;
        }
        var p = parseFloat(P);
        return isNaN(p) ? P : p;
      };
      return j;
    } else {
      f['__proto__'] = T;
      return V;
    }
  }();
}