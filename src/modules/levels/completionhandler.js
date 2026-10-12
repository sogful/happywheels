function (T, V, C) {
  'use strict';

  C['d'](V, {
    'R': () => k
  });
  C(0x7d8);
  var j = C(0x5ab6);
  var P = C(0x13a47);
  var p = C(0x136b);
  var K = C(0x88f1);
  var m = C(0x1373c);
  function I(B, u) {
    I = Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"]["bind"]() : function (E, R) {

      E["__proto__"] = R;
      return E;
    };
    return I(B, u);
  }
  var k = function (B) {
    function u() {
      var A;
      (A = B["call"](this) || this)["checkEndBi" + 'nd'] = A['checkEnd']["bind"](A);
      A["session"] = K['w']['currentSes' + "sion"];
      A["m_physScal" + 'e'] = A["session"]["m_physScal" + 'e'];
      A["create"]();
      return A;
    }
    var E;
    var R;
    R = B;
    (E = u)["prototype"] = Object['create'](R["prototype"]);
    E["prototype"]["constructo" + 'r'] = E;
    I(E, R);
    var W = u["prototype"];
    W["create"] = function () {


      var A = new j['gv']();
      this["body"] = this['session']['m_world']["CreateBody"](A);
      var J = new j['m2']();
      J["friction"] = 0x1;
      J["restitutio" + 'n'] = 0.1;
      J["filter"]['categoryBi' + 'ts'] = 0x8;
      var D = this["session"]['level']["shapeGuide"]["end"];
      var g = D["rotation"] * Math['PI'] / 0xb4;
      var S = new j['RM']();
      S["Set"](D['x'] / this["m_physScal" + 'e'], D['y'] / this["m_physScal" + 'e']);
      var d = 0x5 * D["scaleX"] / this["m_physScal" + 'e'];
      var z = 0x5 * D["scaleY"] / this["m_physScal" + 'e'];
      J['SetAsOrien' + "tedBox"](d, z, S, g);
      this['shape'] = this["body"]["CreateShap" + 'e'](J);
      this["aabb"] = new j['nm']();
      this['aabb']["lowerBound"]["Set"](S['x'] - d, S['y'] - 0x2 * d);
      this["aabb"]["upperBound"]['Set'](S['x'] + d, S['y']);
      this["session"]['contactLis' + "tener"]["registerLi" + "stener"](P['jp']["RESULT"], this["shape"], this["checkEndBi" + 'nd']);
    };
    W["checkEnd"] = function (A) {


      var J = K['w']["currentSes" + "sion"];
      if (J["character"]["dead"]) {
        J["contactLis" + 'tener']["deleteList" + "ener"](P['jp']["RESULT"], this["shape"]);
      } else {
        var D = J["character"]["cameraFocu" + 's']["GetWorldCe" + "nter"]();
        D['x'] < this['aabb']["upperBound"]['x'] && D['x'] > this["aabb"]["lowerBound"]['x'] && D['y'] < this["aabb"]["upperBound"]['y'] && D['y'] > this["aabb"]["lowerBound"]['y'] && (J['contactLis' + 'tener']["deleteList" + 'ener'](P['jp']['RESULT'], this["shape"]), J["isReplay"] || J['levelCompl' + "ete"](), m['m']["instance"]["playSoundI" + "tem"]("Victory"));
      }
    };
    W["die"] = function () {


      this['session']["contactLis" + "tener"]["deleteList" + "ener"](P['jp']["RESULT"], this["shape"]);
    };
    return u;
  }(p['Qe']);
}