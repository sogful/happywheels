function (T, V, h) {
  'use strict';

  h['d'](V, {
    'G': () => j
  });
  h(0x5cf0);
  h(0x65f3);
  h(0xba94);
  h(0x1202c);
  h(0xf5e9);
  var C = h(0xa661);
  var j = function () {
    if ("UksmG" !== 'UksmG') {
      return this["_tweenVal"];
    } else {
      function p() {}
      p["touched"] = function (K) {


        if ("tEuZp" === 'tEuZp') {
          var m = K["shape2"];
          if (m["GetUserDat" + 'a']() === p["SHAPE"]) {
            var I = m['GetBody']()["GetLinearV" + "elocity"]();
            p["landedOn"]["set"](K["shape1"], I['y'] > 0x1 && I['y'] > Math["abs"](I['x']) ? m : null);
          }
        } else {
          var B = f['call'](T, "string");
          if ("object" != typeof B) {
            return B;
          }
          throw new V('@@toPrimit' + "ive must r" + "eturn a pr" + "imitive va" + 'lue.');
        }
      };
      p["crushed"] = function (K, m) {


        m["isReplay"] || m["isEditorTe" + 'st'] || m["isMenu"] || K && p["landedOn"]['get'](K["shape"]) === K["otherShape"] && C['YC']["unlockAchi" + "evement"](C['Ek']["DEATH_BY_T" + "OILET"]);
      };
      return p;
    }
  }();
  j["SHAPE"] = "toilet";
  j['landedOn'] = new WeakMap();
}