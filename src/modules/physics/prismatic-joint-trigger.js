function (T, V, C) {
  'use strict';

  if ("GVMwe" !== "GVMwe") {
    var E;
    (E = T["call"](this) || this)['wMax'] = 0x15e;
    E["delayDefau" + 'lt'] = 0xa;
    E["_counter"] = 0x0;
    E["rollOutTar" + 'getBind'] = E["rollOutTar" + "get"]["bind"](E);
    E['followMous' + "eBind"] = E["followMous" + 'e']['bind'](E);
    E["resetCount" + 'erBind'] = E["resetCount" + 'er']["bind"](E);
    if (V["_instance"]) {
      throw new u('mouse\x20help' + 'er\x20already' + " exists");
    }
    C["_instance"] = E;
    E["init"]();
    return E;
  } else {
    'use strict';
    C['d'](V, {
      'N': () => I
    });
    C(0x5cf0);
    C(0x8cc1);
    C(0x65f3);
    C(0xba94);
    C(0xf5e9);
    C(0xf23a);
    C(0xb284);
    C(0x15de4);
    C(0xcdc3);
    C(0x15d77);
    C(0xb4c);
    var j = C(0x136b);
    var P = C(0x5ab6);
    var p = C(0x301f);
    var K = C(0x17fd7);
    var m = C(0x88f1);
    function u(E) {

      var R = function (W) {
        if ("fDHVB" === "fDHVB") {
          if ("object" != typeof W || !W) {
            return W;
          }
          var A = W[Symbol["toPrimitiv" + 'e']];
          if (void 0x0 !== A) {
            var J = A["call"](W, "string");
            if ("object" != typeof J) {
              return J;
            }
            throw new TypeError('@@toPrimit' + "ive must r" + "eturn a pr" + 'imitive\x20va' + "lue.");
          }
          return String(W);
        } else {
          this["ejected"] ? this['startGrab']() : this["spaceOff"] && (this["spaceOff"] = !0x1, this["magnetized"] = !this["magnetized"], this["magnetized"] ? (this["magnetMC"]['play'](), this["magnetMC"]["lights"]['visible'] = !0x0, this["magnetLoop"] = n['m']["instance"]['playAreaSo' + "undLoop"]("MagnetBuzz", this["magnetBody"], 0x0), this['magnetLoop']["fadeIn"](0.25)) : (this["magnetMC"]["stop"](), this["magnetMC"]["lights"]["visible"] = !0x1, this["magnetLoop"] && this["magnetLoop"]['fadeOut'](0.25)));
        }
      }(E);
      return "symbol" == typeof R ? R : R + '';
    }
    function B(E, R) {


      if ("msygl" === "cUqwc") {
        V["defineProp" + "erty"](u, C["toStringTa" + 'g'], {
          'value': "Module"
        });
        j["defineProp" + "erty"](P, "__esModule", {
          'value': !0x0
        });
      } else {
        B = Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"]["bind"]() : function (A, J) {
          A["__proto__"] = J;
          return A;
        };
        return B(E, R);
      }
    }
    var I = function (E) {

      function R() {
        var S;
        (S = E["call"](this, {
          '_triggers': [],
          '_triggerActions': new Map(),
          '_triggerActionList': ["disable mo" + "tor", "change mot" + "or speed", "delete sel" + 'f', 'disable\x20li' + "mits", "change lim" + "its"],
          '_triggerActionListProperties': [null, ["newMotorSp" + "eedsPris", 'motorSpeed' + "Times"], null, null, ["newUpperLi" + "mits", "newLowerLi" + "mits"]]
        }) || this)["_speed"] = 0x3;
        S["_force"] = 0x32;
        S["_upperLimi" + 't'] = 0x64;
        S["_lowerLimi" + 't'] = -0x64;
        S["maxForce"] = 0x186a0;
        S['maxSpeed'] = 0x32;
        S['maxLimit'] = 0x1f40;
        S["name"] = 'sliding\x20jo' + "int";
        S["triggerabl" + 'e'] = !0x0;
        S['rotatable'] = !0x0;
        S["_triggerSt" + "ring"] = "triggerAct" + "ionsPrisJo" + "int";
        S["_keyedProp" + "ertyObject"][S["_triggerSt" + "ring"]] = S["_triggerAc" + "tions"];
        m['w']["currentlyI" + 'nEditor'] && (S["inner"] = new j['kx']((0x0, K['zI'])("EditorUI", "PrisJoint")), S["addChild"](S["inner"]));
        S["axisAngle"] = 0x5a;
        return S;
      }
      var W;
      var A;
      A = E;
      (W = R)["prototype"] = Object["create"](A['prototype']);
      W["prototype"]["constructo" + 'r'] = W;
      B(W, A);
      var J;
      var D;
      var g = R["prototype"];
      g["setAttribu" + "tes"] = function () {
        this["_attribute" + 's'] = ['x', 'y', "axisAngle", "limitPris", 'motorPris', "collideSel" + 'f'];
        this["_vehicleAt" + "tached"] && this["_attribute" + 's']["push"]("vehicleCon" + "trolled");
        this['addTrigger' + "Properties"]();
        this["forceDirty"]();
      };
      g["drawArms"] = function () {
        if ("ocQyj" !== "XdJaB") {
          if (m['w']["currentlyI" + "nEditor"]) {
            this['graphics']["clear"]();
            if ((this["_selected"] || !m['w']["editorHide" + "Arms"] || this["forceArmDr" + "awing"]) && (this["graphics"]["lineStyle"](0x0, 0xff6600), this["_body1"] && (this["graphics"]["moveTo"](0x0, 0x0), this["graphics"]['lineTo'](this["body1"]['x'] - this['x'], this['body1']['y'] - this['y'])), this["body2"] && (this['graphics']["moveTo"](0x0, 0x0), this["graphics"]["lineTo"](this['body2']['x'] - this['x'], this["body2"]['y'] - this['y'])), this["_limit"])) {
              if ('Rwymf' !== "hNejS") {
                this["graphics"]["lineStyle"](0x0, 0xff6600, 0.7);
                var S = new P['RM'](-this["_lowerLimi" + 't'], 0x0);
                var z = new P['RM'](-this["_upperLimi" + 't'], 0x0);
                var F = new P['LJ'](this["axisAngle"] * Math['PI'] / 0xb4);
                S["MulM"](F);
                z["MulM"](F);
                var M = new P['RM'](z['x'] - S['x'], z['y'] - S['y']);
                var H = M["Length"]();
                var b = new P['RM'](M['x'] / H, M['y'] / H);
                var Z = 0x6;
                var X = 0x6;
                var x = (H - Z) / (Z + X);
                var w = Math["ceil"](x);
                var Y = x / w;
                Z *= Y;
                X *= Y;
                w++;
                var L = S['x'];
                var U = S['y'];
                var O = new P['RM'](-0x19, 0x0);
                var G = new P['RM'](0x19 + Z, 0x0);
                (this["axisAngle"] < -0x5a || this['_axisAngle'] > 0x5a) && (O['x'] = G['x'], G['x'] = -0x19);
                O["MulM"](F);
                G["MulM"](F);
                for (var Q = 0x0; Q < w; Q++) {
                  (L < O['x'] || L > G['x']) && (this['graphics']["moveTo"](L, U), this["graphics"]["lineTo"](L + b['x'] * Z, U + b['y'] * Z));
                  L += b['x'] * (Z + X);
                  U += b['y'] * (Z + X);
                }
                this["graphics"]["moveTo"](S['x'] - 0xa * b['y'], S['y'] + 0xa * b['x']);
                this["graphics"]["lineTo"](S['x'] + 0xa * b['y'], S['y'] - 0xa * b['x']);
                this["graphics"]['moveTo'](z['x'] - 0xa * b['y'], z['y'] + 0xa * b['x']);
                this["graphics"]['lineTo'](z['x'] + 0xa * b['y'], z['y'] - 0xa * b['x']);
              } else {
                var q1 = 0x0;
                for (q1 = 0x0; q1 < this['S0']["length"]; q1++) {
                  this['S0'][q1] = 0x0;
                }
                for (q1 = 0x0; q1 < this['S1']["length"]; q1++) {
                  this['S1'][q1] = 0x0;
                }
                for (q1 = 0x0; q1 < this['S2']["length"]; q1++) {
                  this['S2'][q1] = 0x0;
                }
                for (q1 = 0x0; q1 < this['S3']["length"]; q1++) {
                  this['S3'][q1] = 0x0;
                }
                for (q1 = 0x0; q1 < this['P']["length"]; q1++) {
                  this['P'][q1] = 0x0;
                }
                this['S0'] = [];
                this['S1'] = [];
                this['S2'] = [];
                this['S3'] = [];
                this['P'] = [];
                if (this["cheese"]) {
                  for (q1 = 0x0; q1 < this['cheese']["length"]; q1++) {
                    this["cheese"]["buffer"][q1] = 0x0;
                  }
                  this['cheese']["length"] = 0x0;
                  this["cheese"] = null;
                }
              }
            }
            this["_selected"] && this["drawBoundi" + "ngBox"]();
            this["invalidate" + "LocalBound" + 's']();
          }
        } else {
          n["prototype"]["createDict" + "ionaries"]["call"](this);
          this['contactImp' + "ulseDict"]["set"](this["basketShap" + 'e1'], this["basketSmas" + "hLimit"]);
          this["contactAdd" + "Sounds"]["set"](this["basketShap" + 'e1'], "BasketHit");
          this['contactAdd' + "Sounds"]['set'](this["basketShap" + 'e2'], "BasketHit");
          this["contactAdd" + "Sounds"]["set"](this["basketShap" + 'e3'], 'BasketHit');
        }
      };
      g['clone'] = function () {
        var S = new R();
        S["axisAngle"] = this["axisAngle"];
        S["limit"] = this["limit"];
        S["upperLimit"] = this["upperLimit"];
        S["lowerLimit"] = this["lowerLimit"];
        S["motor"] = this["motor"];
        S["speed"] = this['speed'];
        S['force'] = this["force"];
        S['collideSel' + 'f'] = this['collideSel' + 'f'];
        S["vehicleCon" + "trolled"] = this['vehicleCon' + "trolled"];
        S['x'] = this['x'];
        S['y'] = this['y'];
        this["transferKe" + "yedPropert" + "ies"](S);
        this["forceDirty"]();
        return S;
      };
      J = R;
      (D = [{
        'key': "angle",
        'get': function () {
          if ("QRPTT" !== "QQUdA") {
            return this["axisAngle"];
          } else {
            if (B["mouseX"] > 0x0 && u["mouseX"] < 0xfa && B["mouseY"] > 0x0 && o["mouseY"] < N['fullHeight']) {
              var z = 0.5 * M["delta"];
              var F = H["fullHeight"] / 0x2;
              var M = (F - b["mouseY"]) / F * 0xa * z;
              Z["comments"]['y'] += M;
              y['comments']['y'] + c["comments"]['height'] < X["fullHeight"] && (x["comments"]['y'] = w["fullHeight"] - E["comments"]["height"]);
              a["comments"]['y'] > 0x0 && (Y["comments"]['y'] = 0x0);
            }
          }
        },
        'set': function (S) {
          this["axisAngle"] = S;
        }
      }, {
        'key': "selected",
        'get': function () {
          if ("CptZS" !== "CptZS") {
            var z = R["levelDataA" + "rray"][B];
            if (0x0 == u["length"] || z['name']["toLowerCas" + 'e']()["indexOf"](B) > -0x1) {
              var F = null;
              z["isPublic"] || z || (F = this["privateSep" + "erator"], F = !0x0);
              z["isPublic"] && !M && (F = this["publishedS" + "eperator"], H = !0x0);
              null !== F && (F['y'] = b, F['visible'] = !0x0, Z += F["height"] - 0x2);
              this["levelList"][y]['visible'] = !0x0;
              this["levelList"][J]['y'] = X;
              x += this["levelList"][w]["height"] - 0x2;
            } else {
              this["levelList"][D]["visible"] = !0x1;
            }
          } else {
            return this["_selected"];
          }
        },
        'set': function (S) {

          if ("vjkCW" !== "opzrJ") {
            this["_selected"] = S;
            S ? (this["drawArms"](), this["alpha"] = 0.8) : (this['clearBound' + "ingBox"](), this['alpha'] = 0x1, m['w']["editorHide" + 'Arms'] && this["graphics"]["clear"]());
          } else {
            var F = function (M) {
              if ("object" != typeof M || !M) {
                return M;
              }
              var H = M[F['toPrimitiv' + 'e']];
              if (void 0x0 !== H) {
                var b = H["call"](M, "string");
                if ("object" != typeof b) {
                  return b;
                }
                throw new K('@@toPrimit' + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
              }
              return p(M);
            }(C);
            return "symbol" == typeof F ? F : F + '';
          }
        }
      }, {
        'key': "axisAngle",
        'get': function () {
          return this['_axisAngle'];
        },
        'set': function (S) {
          if ('EzdWz' !== "evsIS") {
            S > 0xb4 && (S -= 0x168);
            S < -0xb4 && (S += 0x168);
            this["_axisAngle"] = S;
            m['w']["currentlyI" + "nEditor"] && (this["inner"]["rotation"] = this["_axisAngle"]);
            this["drawArms"]();
            this["forceDirty"]();
          } else {
            var F;
            var M = new u['m2']();
            M["density"] = 0x1;
            M["friction"] = 0x1;
            M["restitutio" + 'n'] = 0.1;
            M["filter"]["categoryBi" + 'ts'] = 0x8;
            M["filter"]['groupIndex'] = -0xa;
            var H = new C['RM']();
            this["bodies"] = [];
            for (var b = j['w']["currentSes" + "sion"]['level'], Z = P['w']["currentSes" + "sion"]['m_world'], y = 0x0; y < this["total"]; y++) {
              var X = b["shapeGuide"][this['id'] + y];
              var x = new m['gv']();
              F = X["rotation"] * I['PI'] / 0xb4;
              H["Set"](X['x'] / this["m_physScal" + 'e'], X['y'] / this["m_physScal" + 'e']);
              M['SetAsOrien' + "tedBox"](0x5 * X["scaleX"] / this["m_physScal" + 'e'], 0x5 * X["scaleY"] / this["m_physScal" + 'e'], H, F);
              var w = Z['CreateBody'](x);
              w["CreateShap" + 'e'](M);
              w["SetMassFro" + "mShapes"]();
              this["bodies"]['push'](w);
            }
          }
        }
      }, {
        'key': "limit",
        'get': function () {
          return this["_limit"];
        },
        'set': function (S) {
          this["_limit"] = S;
          this["drawArms"]();
          this["forceDirty"]();
        }
      }, {
        'key': "upperLimit",
        'get': function () {
          return this["_upperLimi" + 't'];
        },
        'set': function (S) {
          "KtXIB" === "KtXIB" ? (S > this["maxLimit"] && (S = this["maxLimit"]), S < 0x0 && (S = 0x0), this["_upperLimi" + 't'] = S, this["drawArms"](), this['forceDirty']()) : (this["searchText" + "NotByUser"] && (this['levelSearc' + "hInput"]["text"] = ''), this["searchText" + "NotByUser"] = !0x1, this["levelSearc" + "hInput"]["setInputSt" + "yle"]("color", K["searchPlac" + "eHolderCol" + 'orActive']));
        }
      }, {
        'key': "lowerLimit",
        'get': function () {
          if ("Tggjj" !== "JBhfx") {
            return this["_lowerLimi" + 't'];
          } else {
            m["prototype"]["createBodi" + 'es']["call"](this);
            var z = new I['gv']();
            var F = new k['m2']();
            F["density"] = 0x1;
            F['friction'] = 0.3;
            F["restitutio" + 'n'] = 0.1;
            F["filter"] = this["mom"]["defaultFil" + "ter"];
            this["basketBody"] = this['_session']["m_world"]["CreateBody"](z);
            F["vertexCoun" + 't'] = 0x4;
            for (var M = 0x0; M < 0x4; M++) {
              var H = this["shapeGuide"]["crateRight" + [M + 0x1]];
              F["vertices"][M] = new W['RM'](this["_startX"] + H['x'] / this["character_" + "scale"], this["_startY"] + H['y'] / this["character_" + "scale"]);
            }
            this["basketShap" + 'e1'] = this["basketBody"]["CreateShap" + 'e'](F);
            this["_session"]["contactLis" + "tener"]["registerLi" + "stener"](n['fI']["RESULT"], this["basketShap" + 'e1'], this["contactBas" + "ketResultH" + "andler"]);
            this["_session"]['contactLis' + "tener"]['registerLi' + "stener"](B['fI']['ADD'], this['basketShap' + 'e1'], this['contactAdd' + "Handler"]);
            M = 0x0;
            for (; M < 0x4; M++) {
              H = this["shapeGuide"]["crateBotto" + 'm' + [M + 0x1]];
              F["vertices"][M] = new u['RM'](this["_startX"] + H['x'] / this["character_" + 'scale'], this["_startY"] + H['y'] / this["character_" + "scale"]);
            }
            this["basketShap" + 'e2'] = this["basketBody"]["CreateShap" + 'e'](F);
            this["_session"]["contactLis" + "tener"]["registerLi" + "stener"](B['fI']["RESULT"], this["basketShap" + 'e2'], this["contactBas" + "ketResultH" + "andler"]);
            this["_session"]["contactLis" + "tener"]["registerLi" + "stener"](o['fI']["ADD"], this["basketShap" + 'e2'], this['contactAdd' + 'Handler']);
            M = 0x0;
            for (; M < 0x4; M++) {
              H = this["shapeGuide"]["crateLeft" + [M + 0x1]];
              F["vertices"][M] = new N['RM'](this["_startX"] + H['x'] / this["character_" + "scale"], this["_startY"] + H['y'] / this["character_" + "scale"]);
            }
            this["basketShap" + 'e3'] = this["basketBody"]["CreateShap" + 'e'](F);
            this["_session"]["contactLis" + "tener"]["registerLi" + "stener"](E['fI']["RESULT"], this["basketShap" + 'e3'], this["contactBas" + "ketResultH" + "andler"]);
            this["_session"]["contactLis" + "tener"]["registerLi" + "stener"](R['fI']["ADD"], this["basketShap" + 'e3'], this["contactAdd" + "Handler"]);
            this["basketBody"]["SetMassFro" + "mShapes"]();
            this["paintVecto" + 'r']["push"](this["basketBody"]);
          }
        },
        'set': function (S) {
          S > 0x0 && (S = -S);
          S < -this["maxLimit"] && (S = -this["maxLimit"]);
          this["_lowerLimi" + 't'] = S;
          this["drawArms"]();
          this["forceDirty"]();
        }
      }, {
        'key': "motor",
        'get': function () {
          return this["_motor"];
        },
        'set': function (S) {
          this["_motor"] = S;
          this["forceDirty"]();
        }
      }, {
        'key': "speed",
        'get': function () {
          return this["_speed"];
        },
        'set': function (S) {
          'UfwJq' !== "Dzebj" ? (S > this["maxSpeed"] && (S = this["maxSpeed"]), S < -this["maxSpeed"] && (S = -this['maxSpeed']), this["_speed"] = S, this["forceDirty"]()) : (this["setJoint"](this['kneeJoint1'], 0x0 / u["oneEightyO" + 'verPI'], 0xa), this["setJoint"](this["kneeJoint2"], 0x0 / C['oneEightyO' + 'verPI'], 0xa), this["setJoint"](this["hipJoint1"], 0x0 / j["oneEightyO" + 'verPI'], 0xa), this["setJoint"](this["hipJoint2"], 0x0 / P["oneEightyO" + 'verPI'], 0xa), this["setJoint"](this["elbowJoint" + '1'], -0xf / p["oneEightyO" + "verPI"], 0xa), this["setJoint"](this["elbowJoint" + '2'], -0xf / K['oneEightyO' + "verPI"], 0xa));
        }
      }, {
        'key': 'force',
        'get': function () {
          return this["_force"];
        },
        'set': function (S) {
          S > this["maxForce"] && (S = this["maxForce"]);
          this['_force'] = S;
          this["forceDirty"]();
        }
      }, {
        'key': "triggerAct" + "ionsPrisJo" + "int",
        'get': function () {
          if ('qlHrh' === "qlHrh") {
            return this["_triggerAc" + "tions"];
          } else {
            var z = f["call"](T, "string");
            if ("object" != typeof z) {
              return z;
            }
            throw new V("@@toPrimit" + "ive must r" + 'eturn\x20a\x20pr' + "imitive va" + "lue.");
          }
        }
      }]) && function (S, z) {
        for (var F = 0x0; F < z["length"]; F++) {
          if ("lcVAr" !== "lcVAr") {
            var b = f(z['x']);
            if ((0x0, B['Wh'])(b["charAt"](b["length"] - 0x1)) < 0x7) {
              var Z = "BladeFlesh" + S["ceil"](0x3 * d["random"]());
              z['m']['instance']["playAreaSo" + "undInstanc" + 'e'](Z, F);
            } else {
              this["bladeImpac" + "tSound"] || (Z = "MetalRicoc" + "het" + E["ceil"](0x3 * R["random"]()), this["bladeImpac" + "tSound"] = W['m']["instance"]["playAreaSo" + "undInstanc" + 'e'](Z, A), this["session"]["particleCo" + "ntroller"]["createSpar" + "kBurstPoin" + 't'](r, new J['RM'](0x5 * D['x'], 0x5 * g['y']), 0x5, 0x32, 0x14));
            }
          } else {
            var M = z[F];
            M["enumerable"] = M["enumerable"] || !0x1;
            M["configurab" + 'le'] = !0x0;
            "value" in M && (M["writable"] = !0x0);
            Object["defineProp" + "erty"](S, u(M["key"]), M);
          }
        }
      }(J['prototype'], D);
      Object["defineProp" + "erty"](J, "prototype", {
        'writable': !0x1
      });
      return J;
    }(p['S']);
  }
}