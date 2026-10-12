function (T, V, C) {
  'use strict';

  C['d'](V, {
    's': () => J
  });
  C(0x5cf0);
  C(0x65f3);
  C(0x7ab7);
  C(0xba94);
  C(0xf5e9);
  C(0xd51a);
  C(0x8cc1);
  C(0x7d8);
  C(0x5bcc);
  C(0x977d);
  C(0xb284);
  C(0x15de4);
  C(0xcdc3);
  C(0x15d77);
  C(0xb4c);
  var j = C(0x5ab6);
  var P = C(0x13a47);
  var K = C(0x136b);
  var m = C(0x172b2);
  var I = C(0x183ff);
  var k = C(0x88f1);
  var B = C(0x1373c);
  var E = C(0x86e3);
  C(0x1202c);
  var R = C(0xa661);
  function W(D) {
    if ("xovCh" === "FYLOw") {
      void 0x0 === V && (k = !0x0);
      C['prototype']["hipBreak1"]["call"](this, j, P);
      this['ejected'] || (this["frameFoot1"] && (this["_session"]["m_world"]["DestroyJoi" + 'nt'](this["frameFoot1"]), this["frameFoot1"] = null), this["checkEject"]());
    } else {
      var g = function (z) {


        if ("object" != typeof z || !z) {
          return z;
        }
        var F = z[Symbol["toPrimitiv" + 'e']];
        if (void 0x0 !== F) {
          var M = F['call'](z, "string");
          if ("object" != typeof M) {
            return M;
          }
          throw new TypeError("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
        }
        return String(z);
      }(D);
      return "symbol" == typeof g ? g : g + '';
    }
  }
  function A(D, g) {
    A = Object['setPrototy' + "peOf"] ? Object["setPrototy" + "peOf"]["bind"]() : function (S, z) {


      if ("vJlMp" === "GxNEc") {
        var M = function (H) {
          if ('object' != typeof H || !H) {
            return H;
          }
          var b = H[M["toPrimitiv" + 'e']];
          if (void 0x0 !== b) {
            var Z = b["call"](H, 'string');
            if ("object" != typeof Z) {
              return Z;
            }
            throw new K('@@toPrimit' + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
          }
          return W(H);
        }(C);
        return "symbol" == typeof M ? M : M + '';
      } else {
        S['__proto__'] = z;
        return S;
      }
    };
    return A(D, g);
  }
  (function () {
    function D() {}
    D["armTorn"] = function (g, S, z, F) {


      var M = g["chestBody"];
      var H = D["remainingH" + "old"]["get"](M);
      if (!H) {
        return F ? void D["remainingH" + 'old']["set"](M, F) : void 0x0;
      }
      z === H && R['YC']["unlockAchi" + "evement"](R['Ek']['LOSE_BOTH_' + "ARMS_WHILE" + "_HANGING"]);
    };
    return D;
  })()["remainingH" + "old"] = new WeakMap();
  C(0x16ebd);
  var J = function (D) {

    function g(b, Z, X, x, w, Y) {
      if ("rmjHR" !== "ClEaG") {
        var v;
        void 0x0 === w && (w = -0x1);
        void 0x0 === Y && (Y = 'Char1');
        (v = D["call"](this) || this)["main"] = !0x0;
        v["mc_scale"] = 0x2;
        v["shapeRefSc" + "ale"] = 0x5;
        v["_currentPo" + 'se'] = 0x0;
        v['_bleedCoun' + "ter"] = 0x0;
        v["neckBreakL" + 'imit'] = 0x4b;
        v["spineLimit"] = 0x5f;
        v["torsoBreak" + "Limit"] = 0xa0;
        v["intestineL" + "imit"] = 0xf0;
        v["shoulderBr" + "eakLimit"] = 0x41;
        v['shoulderSn' + "apLimit"] = 0x50;
        v["hipBreakLi" + "mit"] = 0x55;
        v["hipSnapLim" + 'it'] = 0x64;
        v["elbowBreak" + "Limit"] = 0x3c;
        v["elbowLigam" + "entLimit"] = 0x46;
        v["kneeBreakL" + "imit"] = 0x41;
        v["kneeLigame" + 'ntLimit'] = 0x50;
        v["bodyContac" + 't'] = !0x1;
        v["driverCont" + "act"] = !0x1;
        v["lineThickn" + "ess"] = 0x1;
        v["lineColor"] = 0xff0000;
        v["lineAlpha"] = 0x1;
        v['brainRadiu' + 's'] = 0xc;
        v["lostLimbs"] = new Set();
        v["_spikeImpa" + "led"] = !0x1;
        v["voicePrior" + "ity"] = -0x1;
        v["keyDownHan" + "dler"] = function (L) {


          switch (L["keyCode"]) {
            case k['w']["leanBackCo" + 'de']:
              v["leftPresse" + 'd'] = !0x0;
              break;
            case k['w']["accelerate" + 'Code']:
              v["upPressed"] = !0x0;
              break;
            case k['w']["leanForwar" + "dCode"]:
              v["rightPress" + 'ed'] = !0x0;
              break;
            case k['w']["decelerate" + "Code"]:
              v["downPresse" + 'd'] = !0x0;
              break;
            case k['w']["primaryAct" + "ionCode"]:
              v["spacePress" + 'ed'] = !0x0;
              break;
            case k['w']["secondaryA" + "ction1Code"]:
              v["shiftPress" + 'ed'] = !0x0;
              break;
            case k['w']["secondaryA" + "ction2Code"]:
              v["ctrlPresse" + 'd'] = !0x0;
              break;
            case k['w']['ejectCode']:
              v["zPressed"] = !0x0;
              break;
            case k['w']["switchCame" + "raCode"]:
              v["switchCame" + 'ra']();
          }
        };
        v["keyUpHandl" + 'er'] = function (L) {


          switch (L["keyCode"]) {
            case k['w']["leanBackCo" + 'de']:
              v["leftPresse" + 'd'] = !0x1;
              break;
            case k['w']["accelerate" + "Code"]:
              v['upPressed'] = !0x1;
              break;
            case k['w']["leanForwar" + "dCode"]:
              v["rightPress" + 'ed'] = !0x1;
              break;
            case k['w']["decelerate" + "Code"]:
              v["downPresse" + 'd'] = !0x1;
              break;
            case k['w']["primaryAct" + 'ionCode']:
              v["spacePress" + 'ed'] = !0x1;
              break;
            case k['w']["secondaryA" + "ction1Code"]:
              v["shiftPress" + 'ed'] = !0x1;
              break;
            case k['w']["secondaryA" + 'ction2Code']:
              v["ctrlPresse" + 'd'] = !0x1;
              break;
            case k['w']["ejectCode"]:
              v["zPressed"] = !0x1;
          }
        };
        v["contactRes" + "ultHandler"] = function (L) {


          if ("sHGEW" === "SkjTb") {
            return this["_session"];
          } else {
            var U = L["shape"];
            var O = L["impulse"];
            O > v["contactImp" + "ulseDict"]["get"](U) && (v["contactRes" + "ultBuffer"]["get"](U) ? O > v['contactRes' + "ultBuffer"]["get"](U)["impulse"] && v["contactRes" + "ultBuffer"]["set"](U, L) : v["contactRes" + "ultBuffer"]["set"](U, L));
          }
        };
        v["contactAdd" + "Handler"] = function (L) {


          if ("sSAPM" === "sSAPM") {
            if (!L["shape2"]["m_isSensor"]) {
              var U = L["shape2"]["m_filter"]["groupIndex"];
              if (!(U < 0x0 && U > -0xa || -0x1 != v["paintVecto" + 'r']["indexOf"](L["shape2"]['m_body']))) {
                if ("YmpxB" !== "YmpxB") {
                  var Q = this["_persistLi" + "steners"]["get"](W["shape1"]);
                  null != Q && Q(K);
                  if (null != (Q = this["_persistLi" + "steners"]['get'](M["shape2"]))) {
                    var q0 = new x['Ls']();
                    q0['shape1'] = O["shape2"];
                    q0["shape2"] = E["shape1"];
                    q0['normal'] = R["normal"]["Negative"]();
                    q0["separation"] = W["separation"];
                    q0["velocity"] = A["velocity"];
                    q0["position"] = X["position"];
                    Q(q0);
                  }
                } else {
                  v['bodyContac' + 't'] = !0x0;
                  var O = L["shape1"]["m_body"];
                  O !== v["head1Body"] && O !== v["chestBody"] && O !== v["pelvisBody"] || (v["driverCont" + "act"] = !0x0);
                }
              }
              v["bufferCont" + 'actAdd'](L);
            }
          } else {
            k = C["setPrototy" + "peOf"] ? j['setPrototy' + "peOf"]["bind"]() : function (q0, q1) {
              q0["__proto__"] = q1;
              return q0;
            };
            return P(W, K);
          }
        };
        v["bufferCont" + "actAdd"] = function (L) {


          if ("RaMde" === "RaMde") {
            var U = L['shape1'];
            var O = U["m_body"];
            var G = L["shape2"];
            var Q = G['m_body']["m_mass"];
            if (!(v["contactAdd" + "Buffer"]["get"](U) || G["m_isSensor"] || 0x0 != Q && Q < O['m_mass'])) {
              if ("HrJXE" !== "HrJXE") {
                var q2 = this['shapeGuide']["spineAncho" + 'r'];
                this["neckBloodF" + "low"] = this["_session"]['particleCo' + "ntroller"]["createBloo" + 'dFlow'](2.5, 0x4, this["chestBody"], new q0['RM'](q2['x'] / this["character_" + "scale"], q2['y'] / this["character_" + "scale"]), 0x10e, 0x1f4, this['_session']["containerS" + "prite"], this["_session"]["containerS" + "prite"]["getChildIn" + "dex"](this["chestMC"]));
              } else {
                var q0 = j['x5']["b2Dot"](L["velocity"], L["normal"]);
                (q0 = Math["abs"](q0)) > 0x4 && v["contactAdd" + 'Buffer']["set"](U, q0);
              }
            }
          } else {
            k = C["setPrototy" + "peOf"] ? j["setPrototy" + "peOf"]["bind"]() : function (q3, q4) {
              q3["__proto__"] = q4;
              return q3;
            };
            return P(W, K);
          }
        };
        v["sourceObje" + 'ct'] = X;
        v["groupID"] = w;
        v["tag"] = Y;
        v["session"] = x;
        v["m_physScal" + 'e'] = x["m_physScal" + 'e'];
        v["character_" + "scale"] = v["m_physScal" + 'e'] * v["mc_scale"];
        v["_startX"] = b / v['m_physScal' + 'e'];
        v["_startY"] = Z / v["m_physScal" + 'e'];
        v['composites'] = [];
        v["voiceArray"] = [];
        v["actionsVec" + "tor"] = new Array();
        return v;
      } else {
        T["errorPromp" + 't'] = new V("Your level" + " name cont" + "ains some " + "risky word" + 's.\x20Please\x20' + "remove the" + "m. (sorry," + " I've rece" + "ntly run t" + "he risk of" + " losing ad" + "vertising)", 'ok');
        var U = k["errorPromp" + 't']["window"];
        C["stage"]["addChild"](U);
        return void U["center"]();
      }
    }
    var S;
    var z;
    z = D;
    (S = g)["prototype"] = Object["create"](z["prototype"]);
    S["prototype"]["constructo" + 'r'] = S;
    A(S, z);
    var F;
    var M;
    var H = g["prototype"];
    H['trackDeath'] = function (b) {};
    H["trackLimbL" + "ost"] = function (b) {};
    H["trackArmLo" + 'stHangingO' + 'n'] = function (b) {};
    H["isLimbLost"] = function (b) {
      if ("YaYsY" === 'eqtzB') {
        if (I) {
          if ("string" == typeof P) {
            return J(D, g);
          }
          var X = {}["toString"]["call"](S)["slice"](0x8, -0x1);
          "Object" === X && z["constructo" + 'r'] && (X = z["constructo" + 'r']["name"]);
          return "Map" === X || "Set" === X ? F["from"](M) : 'Arguments' === X || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/["test"](X) ? H(b, Z) : void 0x0;
        }
      } else {
        return this["lostLimbs"]["has"](b);
      }
    };
    H['isOwnBody'] = function (b) {
      if ("nJmwb" === "KcUXE") {
        D || (g = "next");
        if (S = z[z]) {
          if (!(q4 = q5['call'](q6, q7))) {
            throw q8("iterator r" + "esult is n" + "ot an obje" + 'ct');
          }
          if (!q9["done"]) {
            return qq;
          }
          qn = qN["value"];
          qf < 0x2 && (qT = 0x0);
        } else {
          0x1 === I && (Y = v["return"]) && L["call"](U);
          O < 0x2 && (G = Q("The iterat" + "or does no" + "t provide " + 'a\x20\x27' + q0 + "' method"), q1 = 0x1);
        }
        q2 = q3;
      } else {
        return b === this["head1Body"] || b === this['chestBody'] || b === this['pelvisBody'] || b === this["upperArm1B" + "ody"] || b === this["lowerArm1B" + "ody"] || b === this["upperArm3B" + "ody"] || b === this["upperArm2B" + 'ody'] || b === this['lowerArm2B' + "ody"] || b === this["upperArm4B" + "ody"] || b === this["upperLeg1B" + "ody"] || b === this['lowerLeg1B' + "ody"] || b === this["upperLeg3B" + "ody"] || b === this["upperLeg2B" + "ody"] || b === this["lowerLeg2B" + "ody"] || b === this["upperLeg4B" + "ody"];
      }
    };
    H['trackLigam' + "entTorn"] = function (b) {};
    H["trackImpal" + 'ed'] = function (b) {};
    H["trackSpike" + "Impaled"] = function (b) {};
    H["trackRelea" + 'se'] = function (b) {};
    H["trackDecap" + "itation"] = function () {};
    H["isLooseHea" + 'd'] = function (b) {
      if ('iCXKM' !== "POBmP") {
        return b === this['head1Body'] && this["neckJoint"]["broken"] && (!this['spinalChor' + 'd'] || this["spinalChor" + 'd']["torn"]);
      } else {
        if (P["userBtnAct" + "ive"]) {
          var X = new u['vg'](l['w']["siteURL"] + ("profile.tj" + "f?uid=") + o["_replayDat" + "aObject"]["user_id"]);
          (0x0, C['is'])(X, '_blank');
          E['JD']["trackEvent"](R['JD']["REPLAY_BRO" + 'WSER'], W['JD']['GOTO_USER_' + "PAGE"], "userID_" + A["_replayDat" + 'aObject']["user_id"]);
        }
      }
    };
    H["trackCrush" + 'ed'] = function (b) {};
    H["trackVehic" + "leSmashed"] = function () {};
    H['trackPlaye' + "rStat"] = function (b) {};
    H['addKeyList' + "eners"] = function () {
      "uFMkg" !== 'czjSH' ? (k['w']["stageSprit" + 'e']['addEventLi' + "stener"](K['kV']["KEY_DOWN"], this["keyDownHan" + "dler"]), k['w']["stageSprit" + 'e']["addEventLi" + "stener"](K['kV']["KEY_UP"], this["keyUpHandl" + 'er'])) : (V < 0.1 && (k = 0.1), C > 0x1e && (j = 0x1e), this["_repeatInt" + "erval"] = P, this["forceDirty"]());
    };
    H["removeKeyL" + "isteners"] = function () {
      k['w']["stageSprit" + 'e']["removeEven" + "tListener"](K['kV']["KEY_DOWN"], this['keyDownHan' + 'dler']);
      k['w']["stageSprit" + 'e']["removeEven" + "tListener"](K['kV']["KEY_UP"], this["keyUpHandl" + 'er']);
      this["leftPresse" + 'd'] = !0x1;
      this["rightPress" + 'ed'] = !0x1;
      this['upPressed'] = !0x1;
      this["downPresse" + 'd'] = !0x1;
      this["spacePress" + 'ed'] = !0x1;
    };
    H["publicKeyU" + "pHandler"] = function (b) {
      this["keyUpHandl" + 'er'](b);
    };
    H["publicKeyD" + "ownHandler"] = function (b) {
      this["keyDownHan" + 'dler'](b);
    };
    H["doNothing"] = function () {
      "ztxco" === 'jvcTo' ? (this["ejected"] && this["releaseGri" + 'p'](), this["boostVal"] -= this["boostStepD" + "own"], this["boostVal"] = m["max"](0x0, this["boostVal"]), this["snowSpray"] && (this["snowSpray"]["stopSpewin" + 'g'](), this["snowSpray"] = null, this["sleighBell" + "Loop"]["fadeOut"](0.5), this["sleighBell" + "Loop"] = null)) : (this['leftAndRig' + "htActions"](), this["upAndDownA" + "ctions"](), this["spaceNullA" + "ctions"](), this["shiftNullA" + "ctions"](), this["ctrlNullAc" + "tions"](), this["zNullActio" + 'ns']());
    };
    H["checkKeySt" + "ates"] = function () {
      if ("cifqt" !== "cifqt") {
        return this['key']["getBlockSi" + 'ze']();
      } else {
        var b = '';
        this["dead"] ? (this["leftPresse" + 'd'] ? this["rightPress" + 'ed'] ? b += '11' : b += '10' : this["rightPress" + 'ed'] ? b += '01' : b += '00', this["upPressed"] ? this["downPresse" + 'd'] ? b += '11' : b += '10' : this['downPresse' + 'd'] ? b += '01' : b += '00', this["spacePress" + 'ed'] ? b += '1' : b += '0', this["shiftPress" + 'ed'] ? b += '1' : b += '0', this["ctrlPresse" + 'd'] ? b += '1' : b += '0', this["zPressed"] ? b += '1' : b += '0') : this["userVehicl" + 'e'] ? b = this["userVehicl" + 'e']['operateKey' + 's'](this['_session']["iteration"], this["leftPresse" + 'd'], this["rightPress" + 'ed'], this["upPressed"], this["downPresse" + 'd'], this["spacePress" + 'ed'], this["shiftPress" + 'ed'], this["ctrlPresse" + 'd'], this["zPressed"]) : (this["leftPresse" + 'd'] ? this["rightPress" + 'ed'] ? (this['leftAndRig' + "htActions"](), b += '11') : (this["leftPresse" + "dActions"](), b += '10') : this["rightPress" + 'ed'] ? (this["rightPress" + "edActions"](), b += '01') : (this['leftAndRig' + "htActions"](), b += '00'), this["upPressed"] ? this["downPresse" + 'd'] ? (this['upAndDownA' + "ctions"](), b += '11') : (this["upPressedA" + "ctions"](), b += '10') : this["downPresse" + 'd'] ? (this['downPresse' + "dActions"](), b += '01') : (this["upAndDownA" + "ctions"](), b += '00'), this["spacePress" + 'ed'] ? (this["spacePress" + 'edActions'](), b += '1') : (this["spaceNullA" + "ctions"](), b += '0'), this["shiftPress" + 'ed'] ? (this["shiftPress" + "edActions"](), b += '1') : (this["shiftNullA" + "ctions"](), b += '0'), this["ctrlPresse" + 'd'] ? (this["ctrlPresse" + "dActions"](), b += '1') : (this["ctrlNullAc" + "tions"](), b += '0'), this["zPressed"] ? (this["zPressedAc" + "tions"](), b += '1') : (this["zNullActio" + 'ns'](), b += '0'));
        this["dispatchEv" + "ent"](new P['c0'](P['c0']["ADD_ENTRY"], b));
      }
    };
    H["checkRepla" + "yData"] = function (b, Z) {
      "itaim" !== "itaim" ? 0x7 == this["_currentPo" + 'se'] && (this["currentPos" + 'e'] = 0x0) : this["dead"] ? ('1' == Z["charAt"](0x0) ? '1' == Z["charAt"](0x1) ? (b["leftKeyON"](), b["rightKeyON"]()) : (b['leftKeyON'](), b["rightKeyOF" + 'F']()) : '1' == Z["charAt"](0x1) ? (b["leftKeyOFF"](), b["rightKeyON"]()) : (b["rightKeyOF" + 'F'](), b["leftKeyOFF"]()), '1' == Z['charAt'](0x2) ? '1' == Z["charAt"](0x3) ? (b["upKeyON"](), b["downKeyON"]()) : (b["upKeyON"](), b["downKeyOFF"]()) : '1' == Z["charAt"](0x3) ? (b["upKeyOFF"](), b["downKeyON"]()) : (b["upKeyOFF"](), b["downKeyOFF"]()), '1' == Z['charAt'](0x4) ? b["spaceKeyON"]() : b["spaceKeyOF" + 'F'](), '1' == Z["charAt"](0x5) ? b['shiftKeyON']() : b["shiftKeyOF" + 'F'](), '1' == Z["charAt"](0x6) ? b["ctrlKeyON"]() : b["ctrlKeyOFF"](), '1' == Z["charAt"](0x7) ? b["zKeyON"]() : b['zKeyOFF']()) : this["userVehicl" + 'e'] ? this["userVehicl" + 'e']["operateRep" + "layData"](this["_session"]["iteration"], Z, b) : ('1' == Z["charAt"](0x0) ? '1' == Z["charAt"](0x1) ? (this["leftAndRig" + "htActions"](), b["leftKeyON"](), b["rightKeyON"]()) : (this["leftPresse" + "dActions"](), b["leftKeyON"](), b["rightKeyOF" + 'F']()) : '1' == Z['charAt'](0x1) ? (this["rightPress" + "edActions"](), b['leftKeyOFF'](), b['rightKeyON']()) : (this["leftAndRig" + "htActions"](), b["rightKeyOF" + 'F'](), b["leftKeyOFF"]()), '1' == Z["charAt"](0x2) ? '1' == Z["charAt"](0x3) ? (this["upAndDownA" + 'ctions'](), b["upKeyON"](), b["downKeyON"]()) : (this["upPressedA" + "ctions"](), b["upKeyON"](), b["downKeyOFF"]()) : '1' == Z["charAt"](0x3) ? (this["downPresse" + "dActions"](), b["upKeyOFF"](), b["downKeyON"]()) : (this["upAndDownA" + "ctions"](), b["upKeyOFF"](), b["downKeyOFF"]()), '1' == Z["charAt"](0x4) ? (this["spacePress" + 'edActions'](), b["spaceKeyON"]()) : (this["spaceNullA" + "ctions"](), b["spaceKeyOF" + 'F']()), '1' == Z['charAt'](0x5) ? (this["shiftPress" + "edActions"](), b["shiftKeyON"]()) : (this["shiftNullA" + "ctions"](), b["shiftKeyOF" + 'F']()), '1' == Z["charAt"](0x6) ? (this["ctrlPresse" + "dActions"](), b["ctrlKeyON"]()) : (this["ctrlNullAc" + 'tions'](), b["ctrlKeyOFF"]()), '1' == Z["charAt"](0x7) ? (this["zPressedAc" + "tions"](), b["zKeyON"]()) : (this['zNullActio' + 'ns'](), b["zKeyOFF"]()));
    };
    H["preActions"] = function () {};
    H["actions"] = function () {
      if ("PPGlW" !== "PPGlW") {
        B["removeActi" + 'on'](A["legsFree"]);
        var x = B["_session"]["m_world"];
        K['upperLeg1S' + "hape"]["m_isSensor"] = !0x1;
        S["upperLeg1S" + "hape"]["m_body"] && x["Refilter"](E["upperLeg1S" + "hape"]);
        R["upperLeg2S" + "hape"]["m_isSensor"] = !0x1;
        W["upperLeg2S" + "hape"]["m_body"] && x["Refilter"](A["upperLeg2S" + "hape"]);
        P["lowerLeg1S" + "hape"]['m_isSensor'] = !0x1;
        x["Refilter"](J["lowerLeg1S" + "hape"]);
        D["lowerLeg2S" + "hape"]["m_isSensor"] = !0x1;
        x["Refilter"](g["lowerLeg2S" + "hape"]);
        S["lowerArm1S" + "hape"]["m_isSensor"] = !0x1;
        x["Refilter"](z['lowerArm1S' + "hape"]);
        z["lowerArm2S" + "hape"]["m_isSensor"] = !0x1;
        x["Refilter"](F['lowerArm2S' + "hape"]);
      } else {
        this["checkPose"]();
        this["_dead"] || (this["checkVocal" + 's'](), this["voiceArray"] = [], this["_dying"] && this["checkBleed" + "Out"]());
        for (var b = this["actionsVec" + "tor"]['length'], Z = 0x0; Z < b; Z++) {
          (0x0, this["actionsVec" + "tor"][Z])();
        }
      }
    };
    H["removeActi" + 'on'] = function (b) {
      var Z = this["actionsVec" + "tor"]['indexOf'](b);
      Z > -0x1 && this["actionsVec" + "tor"]["splice"](Z, 0x1);
    };
    H["switchCame" + 'ra'] = function () {};
    H["checkVocal" + 's'] = function () {
      var b = this["voiceArray"]["length"] - 0x1;
      if (this['voiceSound']) {
        if ("eRaOQ" === "YKZZS") {
          if ("string" == typeof m) {
            return I(k, f);
          }
          var x = {}['toString']["call"](V)["slice"](0x8, -0x1);
          "Object" === x && B["constructo" + 'r'] && (x = u['constructo' + 'r']["name"]);
          return "Map" === x || "Set" === x ? l["from"](o) : "Arguments" === x || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/["test"](x) ? C(E, R) : void 0x0;
        } else {
          if (this["voiceSound"]["soundChann" + 'el']) {
            if (b > this["voicePrior" + "ity"]) {
              this['voiceSound']["stopSound"]();
              var Z = this["voiceArray"][b];
              this["voiceSound"] = B['m']["instance"]["playAreaSo" + "undInstanc" + 'e'](this["tag"] + Z, this["head1Body"]);
              this["voicePrior" + 'ity'] = b;
            }
            return;
          }
          this["voiceSound"] = null;
          this["voicePrior" + "ity"] = -0x1;
        }
      }
      b < 0x0 || (Z = this["voiceArray"][b], this["voiceSound"] = B['m']["instance"]["playAreaSo" + "undInstanc" + 'e'](this["tag"] + Z, this["head1Body"]), this["voicePrior" + "ity"] = b);
    };
    H["checkBleed" + "Out"] = function () {
      this["_bleedCoun" + "ter"] += 0x1;
      this["_bleedCoun" + "ter"] == g["BLEED_OUT_" + "TOTAL"] && (this["dead"] = !0x0);
    };
    H['checkPose'] = function () {
      if ("SeKfS" !== "SeKfS") {
        var Z = P[W];
        var X = K[M + 0x1];
        I["Initialize"](Z, X, Z['GetPositio' + 'n'](), X["GetPositio" + 'n']());
        k["length"] = j;
        this["ligJoints"]["push"](g["CreateJoin" + 't'](B));
      } else {
        switch (this["_currentPo" + 'se']) {
          case 0x1:
            this["archPose"]();
            break;
          case 0x2:
            this["pushupPose"]();
            break;
          case 0x3:
            this["supermanPo" + 'se']();
            break;
          case 0x4:
            this['tuckPose']();
            break;
          case 0xa:
            this["armsForwar" + "dPose"]();
            break;
          case 0xb:
            this["armsOverhe" + "adPose"]();
            break;
          case 0xc:
            this["holdPositi" + "onPose"]();
        }
      }
    };
    H["leftPresse" + "dActions"] = function () {
      this['chestBody']["ApplyImpul" + 'se'](new j['RM'](-0x1, 0x0), this["chestBody"]["GetWorldCe" + "nter"]());
    };
    H["rightPress" + "edActions"] = function () {
      this["chestBody"]["ApplyImpul" + 'se'](new j['RM'](0x1, 0x0), this["chestBody"]["GetWorldCe" + "nter"]());
    };
    H["upPressedA" + "ctions"] = function () {
      this["chestBody"]["ApplyImpul" + 'se'](new j['RM'](0x0, -0x1), this["chestBody"]["GetWorldCe" + "nter"]());
    };
    H["downPresse" + "dActions"] = function () {
      if ("xYURM" === 'hmczI') {
        this["menuMask"] && (N['os']["killTweens" + 'Of'](this["menuMask"]), this["maskTransi" + 'tionComple' + 'te']());
        for (var Z = 0x0; Z < this['buttons']["length"]; Z++) {
          var X = this["buttons"][Z];
          X["alpha"] = 0x1;
          X["enable"]();
        }
        this["logo"]["alpha"] = 0x1;
        this["logobg"]['alpha'] = 0x1;
        this["muteBtn"]["gotoAndSto" + 'p'](f['w']['sharedObje' + 'ct']["data"]["muted"] ? 0x2 : 0x1);
        this["titleLabel"] && (this["titleLabel"]["alpha"] = 0x1);
        this["loginCorne" + 'r'] && (this["loginCorne" + 'r']["alpha"] = 0x1, this["loginCorne" + 'r']["enable"]());
        this["statusBann" + 'er'] && (this["statusBann" + 'er']["alpha"] = 0x1);
      } else {
        this["chestBody"]["ApplyImpul" + 'se'](new j['RM'](0x0, 0x1), this['chestBody']["GetWorldCe" + "nter"]());
      }
    };
    H["leftAndRig" + "htActions"] = function () {};
    H["upAndDownA" + "ctions"] = function () {};
    H["spacePress" + "edActions"] = function () {};
    H["spaceNullA" + 'ctions'] = function () {};
    H['shiftPress' + "edActions"] = function () {};
    H["shiftNullA" + "ctions"] = function () {};
    H["ctrlPresse" + "dActions"] = function () {};
    H["ctrlNullAc" + "tions"] = function () {};
    H["zPressedAc" + "tions"] = function () {};
    H["zNullActio" + 'ns'] = function () {};
    H["create"] = function () {
      if ("IALFy" === "IALFy") {
        this["createFilt" + "ers"]();
        this["createBodi" + 'es']();
        this["createJoin" + 'ts']();
        this["createMovi" + 'eClips']();
        this["setLimits"]();
        this["createDict" + "ionaries"]();
      } else {
        for (var Z = 0x0; Z < V["length"]; Z++) {
          var X = W[Z];
          X["enumerable"] = X["enumerable"] || !0x1;
          X["configurab" + 'le'] = !0x0;
          'value' in X && (X["writable"] = !0x0);
          K["defineProp" + "erty"](M, I(X["key"]), X);
        }
      }
    };
    H["createFilt" + "ers"] = function () {
      if ("aqPTP" !== "rzuWw") {
        this["defaultFil" + "ter"] = new j['z_']();
        this['defaultFil' + "ter"]["groupIndex"] = this["groupID"];
        this["defaultFil" + "ter"]["categoryBi" + 'ts'] = 0x104;
        this["defaultFil" + "ter"]["maskBits"] = 0x10e;
        this["zeroFilter"] = new j['z_']();
        this["zeroFilter"]["groupIndex"] = 0x0;
        this["zeroFilter"]["categoryBi" + 'ts'] = 0x104;
        this["lowerBodyF" + "ilter"] = new j['z_']();
        this["lowerBodyF" + "ilter"]["categoryBi" + 'ts'] = 0x104;
        this['lowerBodyF' + "ilter"]['maskBits'] = 0x10e;
        this["lowerBodyF" + "ilter"]["groupIndex"] = this["groupID"] - 0x5;
      } else {
        return this["_instant"];
      }
    };
    H["setLimits"] = function () {
      if ("DIiib" !== "otYkw") {
        var b = this["head1Body"]["GetMass"]() / g["DEF_HEAD_M" + "ASS"];
        var Z = this["chestBody"]["GetMass"]() / g["DEF_CHEST_" + 'MASS'];
        var X = this["pelvisBody"]["GetMass"]() / g["DEF_PELVIS" + '_MASS'];
        var x = this["upperArm1B" + "ody"]["GetMass"]() / g["DEF_UPPERA" + "RM_MASS"];
        var w = this["lowerArm1B" + "ody"]["GetMass"]() / g["DEF_LOWERA" + "RM_MASS"];
        var Y = this['upperLeg1B' + "ody"]["GetMass"]() / g["DEF_UPPERL" + "EG_MASS"];
        var v = this["lowerLeg1B" + 'ody']["GetMass"]() / g["DEF_LOWERL" + "EG_MASS"];
        this["headSmashL" + "imit"] = g['DEF_HEAD_S' + "MASH"] * b;
        this["chestSmash" + "Limit"] = g["DEF_CHEST_" + "SMASH"] * Z;
        this['pelvisSmas' + "hLimit"] = g["DEF_PELVIS" + "_SMASH"] * X;
        this["footSmashL" + "imit"] = g["DEF_FOOT_S" + "MASH"] * v;
        this["neckBreakL" + "imit"] = Math["round"](0x55 * b);
        this["spineLimit"] = Math['round'](0x69 * b);
        this["torsoBreak" + "Limit"] = Math['round'](0xb4 * X);
        this["intestineL" + "imit"] = Math["round"](0x104 * X);
        this["shoulderBr" + "eakLimit"] = Math["round"](0x4b * x);
        this["shoulderSn" + 'apLimit'] = Math["round"](0x5a * x);
        this["hipBreakLi" + "mit"] = Math['round'](0x5f * Y);
        this["hipSnapLim" + 'it'] = Math["round"](0x6e * Y);
        this['elbowBreak' + 'Limit'] = Math['round'](0x46 * w);
        this['elbowLigam' + "entLimit"] = Math["round"](0x50 * w);
        this["kneeBreakL" + "imit"] = Math["round"](0x50 * v);
        this["kneeLigame" + "ntLimit"] = Math["round"](0x5f * v);
      } else {
        var U = f['call'](T, "string");
        if ("object" != typeof U) {
          return U;
        }
        throw new V("@@toPrimit" + "ive must r" + "eturn a pr" + 'imitive\x20va' + "lue.");
      }
    };
    H["reset"] = function () {
      this["dead"] = !0x1;
      this["_dying"] = !0x1;
      this['_currentPo' + 'se'] = 0x0;
      this['_bleedCoun' + "ter"] = 0x0;
      this['lostLimbs']['clear']();
      this["_spikeImpa" + "led"] = !0x1;
      this["foot1Body"] = null;
      this["foot2Body"] = null;
      this["grabbing"] = !0x1;
      this["bodyContac" + 't'] = !0x1;
      this["driverCont" + "act"] = !0x1;
      this["gripJoint1"] = null;
      this["gripJoint2"] = null;
      this['createFilt' + "ers"]();
      this["createBodi" + 'es']();
      this["createJoin" + 'ts']();
      this["resetMovie" + 'Clips']();
      this["createDict" + "ionaries"]();
      this["cameraFocu" + 's'] = this["chestBody"];
    };
    H['die'] = function () {
      this["brainBody"] = null;
      this["heartBody"] = null;
      this["upperArm3B" + "ody"] = null;
      this["upperArm4B" + 'ody'] = null;
      this["upperLeg3B" + "ody"] = null;
      this["upperLeg4B" + "ody"] = null;
      this['headBloodF' + "low"] = null;
      this["stomachBlo" + "odFlow"] = null;
      this["neckBloodF" + 'low'] = null;
      this["shoulder1B" + 'loodFlow'] = null;
      this["shoulder2B" + 'loodFlow'] = null;
      this["hip1BloodF" + "low"] = null;
      this["hip2BloodF" + "low"] = null;
      this["chunks"] = [];
      this['voiceArray'] = [];
      this["voiceSound"] = null;
      this["voicePrior" + "ity"] = -0x1;
      for (var b = 0x0; b < this["composites"]["length"]; b++) {
        this['composites'][b] instanceof E['i$'] && this["composites"][b]['die']();
      }
      this["kneeLigame" + "nt1"] = null;
      this['kneeLigame' + 'nt2'] = null;
      this["elbowLigam" + "ent1"] = null;
      this["elbowLigam" + "ent2"] = null;
      this["composites"] = [];
      this['intestineC' + "hain"] && (this["intestineC" + "hain"] = null);
      this["spinalChor" + 'd'] && (this["spinalChor" + 'd']["die"](), this["spinalChor" + 'd'] = null);
      this["actionsVec" + "tor"] = new Array();
      this["userVehicl" + 'e'] = null;
      this["vehicleArm" + "1Joint"] = null;
      this["vehicleArm" + "2Joint"] = null;
    };
    H["paint"] = function () {

      for (var b = 0x0; b < this["paintVecto" + 'r']["length"]; b++) {
        if ("kKWrC" === "kMnii") {
          var a0nWp = {
            q: 0x116a,
            n: 0x17f8
          };
          var w = function (Y) {
            if ("object" != typeof Y || !Y) {
              return Y;
            }
            var v = Y[w["toPrimitiv" + 'e']];
            if (void 0x0 !== v) {
              var L = v["call"](Y, 'string');
              if ("object" != typeof L) {
                return L;
              }
              throw new K('@@toPrimit' + "ive must r" + "eturn a pr" + "imitive va" + 'lue.');
            }
            return W(Y);
          }(C);
          return "symbol" == typeof w ? w : w + '';
        } else {
          var Z = this["paintVecto" + 'r'][b];
          var X = Z["GetInterpo" + "latedWorld" + "Center"]();
          Z["m_userData"]['x'] = X['x'] * this["m_physScal" + 'e'];
          Z["m_userData"]['y'] = X['y'] * this["m_physScal" + 'e'];
          Z["m_userData"]["rotation"] = Z["GetInterpo" + "latedAngle"]() * g["oneEightyO" + "verPI"] % 0x168;
        }
      }
      for (b = 0x0; b < this["composites"]["length"]; b++) {
        this['composites'][b]["paint"]();
      }
    };
    H["createDict" + 'ionaries'] = function () {
      this["contactRes" + 'ultBuffer'] = new Map();
      this["contactAdd" + "Buffer"] = new Map();
      this["contactAdd" + "Sounds"] = new Map();
      this["contactImp" + "ulseDict"] = new Map();
      this["contactImp" + "ulseDict"]["set"](this['head1Shape'], this["headSmashL" + "imit"]);
      this["contactImp" + "ulseDict"]["set"](this["chestShape"], this["chestSmash" + 'Limit']);
      this["contactImp" + "ulseDict"]["set"](this["pelvisShap" + 'e'], this["pelvisSmas" + "hLimit"]);
      this["contactImp" + "ulseDict"]["set"](this["lowerLeg1S" + "hape"], this['footSmashL' + "imit"]);
      this["contactImp" + "ulseDict"]["set"](this["lowerLeg2S" + "hape"], this['footSmashL' + "imit"]);
      this['contactImp' + "ulseDict"]["set"](this["lowerArm1S" + "hape"], 1e-8);
      this["contactImp" + "ulseDict"]["set"](this["lowerArm2S" + "hape"], 1e-8);
      this["contactAdd" + "Sounds"]["set"](this["head1Shape"], "Thud1");
      this["contactAdd" + 'Sounds']['set'](this["chestShape"], "Thud2");
      this["contactAdd" + "Sounds"]["set"](this['pelvisShap' + 'e'], "Thud2");
    };
    H["createBodi" + 'es'] = function () {
      if ("yRYAl" !== "HALsM") {
        var b = this["_session"]["m_world"];
        this["paintVecto" + 'r'] = new Array();
        this["chunks"] = [];
        var Z = new j['gv']();
        var X = new j['gv']();
        var x = new j['gv']();
        var w = new j['gv']();
        var Y = new j['gv']();
        var L = new j['gv']();
        var U = new j['gv']();
        var O = new j['gv']();
        var G = new j['gv']();
        var Q = new j['gv']();
        var q0 = new j['gv']();
        var q1 = new j['m2']();
        var q2 = new j['_A']();
        q1["density"] = 0x1;
        q1["friction"] = 0.3;
        q1['restitutio' + 'n'] = 0.1;
        q1["filter"] = this['defaultFil' + 'ter'];
        q2["density"] = 0x1;
        q2['friction'] = 0.3;
        q2["restitutio" + 'n'] = 0.1;
        q2['filter'] = this["defaultFil" + "ter"];
        this['shapeGuide'] || (this["shapeGuide"] = this["sourceObje" + 'ct']["shapeGuide"]);
        this["shapeGuide"]["parent"] && this["shapeGuide"]["parent"]["removeChil" + 'd'](this["shapeGuide"]);
        var q3 = this["shapeGuide"]["chestShape"];
        Z["position"]["Set"](this['_startX'] + q3['x'] / this['character_' + "scale"], this["_startY"] + q3['y'] / this["character_" + "scale"]);
        Z["angle"] = q3['rotation'] / g["oneEightyO" + 'verPI'];
        q1["SetAsBox"](q3["scaleX"] * this["shapeRefSc" + "ale"] / this["character_" + "scale"], q3["scaleY"] * this["shapeRefSc" + "ale"] / this['character_' + 'scale']);
        this["chestBody"] = b["CreateBody"](Z);
        this['chestBody']["AllowSleep" + "ing"](!0x1);
        this["chestShape"] = this["chestBody"]["CreateShap" + 'e'](q1);
        this["chestShape"]["SetUserDat" + 'a'](this);
        this["chestShape"]["SetMateria" + 'l'](0x2);
        this['_session']['contactLis' + "tener"]["registerLi" + "stener"](I['fI']["RESULT"], this["chestShape"], this["contactRes" + "ultHandler"]);
        this["_session"]["contactLis" + 'tener']['registerLi' + "stener"](I['fI']["ADD"], this["chestShape"], this["contactAdd" + "Handler"]);
        this['chestBody']["SetMassFro" + "mShapes"]();
        this["paintVecto" + 'r']["push"](this["chestBody"]);
        this["cameraFocu" + 's'] = this["chestBody"];
        q3 = this["shapeGuide"]["headShape"];
        X["position"]["Set"](this["_startX"] + q3['x'] / this["character_" + "scale"], this["_startY"] + q3['y'] / this["character_" + "scale"]);
        X["angle"] = q3["rotation"] / g["oneEightyO" + "verPI"];
        q2["radius"] = q3['scaleX'] * this["shapeRefSc" + "ale"] / this["character_" + "scale"];
        this["head1Body"] = b["CreateBody"](X);
        this["head1Body"]["AllowSleep" + "ing"](!0x1);
        this["head1Shape"] = this["head1Body"]["CreateShap" + 'e'](q2);
        this["head1Shape"]["SetMateria" + 'l'](0x2);
        this["head1Shape"]["SetUserDat" + 'a'](this);
        this["_session"]["contactLis" + "tener"]["registerLi" + "stener"](I['fI']["RESULT"], this['head1Shape'], this["contactRes" + "ultHandler"]);
        this["_session"]["contactLis" + "tener"]["registerLi" + "stener"](I['fI']["ADD"], this["head1Shape"], this["contactAdd" + "Handler"]);
        this['head1Body']["SetMassFro" + "mShapes"]();
        this['paintVecto' + 'r']['push'](this["head1Body"]);
        q3 = this["shapeGuide"]["pelvisShap" + 'e'];
        x["position"]["Set"](this["_startX"] + q3['x'] / this["character_" + 'scale'], this["_startY"] + q3['y'] / this["character_" + "scale"]);
        x["angle"] = q3["rotation"] / g["oneEightyO" + "verPI"];
        q1["SetAsBox"](q3['scaleX'] * this["shapeRefSc" + "ale"] / this["character_" + "scale"], q3["scaleY"] * this["shapeRefSc" + "ale"] / this["character_" + 'scale']);
        this["pelvisBody"] = b['CreateBody'](x);
        this['pelvisBody']["AllowSleep" + 'ing'](!0x1);
        this["pelvisShap" + 'e'] = this["pelvisBody"]["CreateShap" + 'e'](q1);
        this["pelvisShap" + 'e']['SetMateria' + 'l'](0x2);
        this["pelvisShap" + 'e']["SetUserDat" + 'a'](this);
        this['_session']["contactLis" + "tener"]["registerLi" + "stener"](I['fI']["RESULT"], this["pelvisShap" + 'e'], this["contactRes" + "ultHandler"]);
        this["_session"]["contactLis" + "tener"]["registerLi" + "stener"](I['fI']["ADD"], this["pelvisShap" + 'e'], this["contactAdd" + "Handler"]);
        this["pelvisBody"]["SetMassFro" + "mShapes"]();
        this["paintVecto" + 'r']["push"](this["pelvisBody"]);
        q3 = this['shapeGuide']["upperArm1S" + "hape"];
        w["position"]['Set'](this["_startX"] + q3['x'] / this["character_" + "scale"], this["_startY"] + q3['y'] / this["character_" + "scale"]);
        w["angle"] = q3["rotation"] / g['oneEightyO' + 'verPI'];
        q1["SetAsBox"](q3["scaleX"] * this["shapeRefSc" + 'ale'] / this["character_" + "scale"], q3["scaleY"] * this["shapeRefSc" + "ale"] / this["character_" + 'scale']);
        this["upperArm1B" + "ody"] = b["CreateBody"](w);
        this["upperArm1B" + "ody"]["CreateShap" + 'e'](q1);
        this['upperArm1B' + 'ody']["SetMassFro" + "mShapes"]();
        this["paintVecto" + 'r']["push"](this["upperArm1B" + "ody"]);
        q3 = this["shapeGuide"]['upperArm2S' + "hape"];
        O["position"]["Set"](this["_startX"] + q3['x'] / this["character_" + "scale"], this["_startY"] + q3['y'] / this["character_" + "scale"]);
        O["angle"] = q3["rotation"] / g['oneEightyO' + "verPI"];
        q1['SetAsBox'](q3["scaleX"] * this['shapeRefSc' + "ale"] / this["character_" + "scale"], q3["scaleY"] * this["shapeRefSc" + "ale"] / this["character_" + "scale"]);
        this["upperArm2B" + "ody"] = b["CreateBody"](O);
        this["upperArm2B" + "ody"]['CreateShap' + 'e'](q1);
        this["upperArm2B" + "ody"]["SetMassFro" + "mShapes"]();
        this["paintVecto" + 'r']["push"](this["upperArm2B" + "ody"]);
        q3 = this['shapeGuide']["upperLeg1S" + "hape"];
        L["position"]["Set"](this["_startX"] + q3['x'] / this["character_" + "scale"], this["_startY"] + q3['y'] / this["character_" + 'scale']);
        L["angle"] = q3["rotation"] / g["oneEightyO" + "verPI"];
        q1['SetAsBox'](q3["scaleX"] * this["shapeRefSc" + "ale"] / this["character_" + "scale"], q3["scaleY"] * this["shapeRefSc" + "ale"] / this["character_" + "scale"]);
        this["upperLeg1B" + "ody"] = b["CreateBody"](L);
        this["upperLeg1B" + "ody"]["CreateShap" + 'e'](q1);
        this["upperLeg1B" + "ody"]["SetMassFro" + "mShapes"]();
        this["paintVecto" + 'r']["push"](this["upperLeg1B" + "ody"]);
        q3 = this["shapeGuide"]["upperLeg2S" + "hape"];
        Q["position"]["Set"](this["_startX"] + q3['x'] / this["character_" + "scale"], this["_startY"] + q3['y'] / this["character_" + "scale"]);
        Q["angle"] = q3["rotation"] / g["oneEightyO" + "verPI"];
        q1["SetAsBox"](q3["scaleX"] * this["shapeRefSc" + "ale"] / this["character_" + "scale"], q3["scaleY"] * this["shapeRefSc" + "ale"] / this["character_" + "scale"]);
        this["upperLeg2B" + "ody"] = b["CreateBody"](Q);
        this["upperLeg2B" + 'ody']["CreateShap" + 'e'](q1);
        this["upperLeg2B" + "ody"]["SetMassFro" + "mShapes"]();
        this["paintVecto" + 'r']["push"](this['upperLeg2B' + "ody"]);
        q3 = this["shapeGuide"]["lowerArm1S" + "hape"];
        Y["position"]["Set"](this["_startX"] + q3['x'] / this["character_" + "scale"], this["_startY"] + q3['y'] / this['character_' + "scale"]);
        Y["angle"] = q3["rotation"] / g["oneEightyO" + "verPI"];
        q1["SetAsBox"](q3["scaleX"] * this["shapeRefSc" + "ale"] / this["character_" + "scale"], q3['scaleY'] * this["shapeRefSc" + "ale"] / this["character_" + "scale"]);
        this["lowerArm1B" + "ody"] = b["CreateBody"](Y);
        this['lowerArm1S' + 'hape'] = this["lowerArm1B" + "ody"]["CreateShap" + 'e'](q1);
        this["lowerArm1B" + "ody"]["SetMassFro" + "mShapes"]();
        this["paintVecto" + 'r']["push"](this["lowerArm1B" + "ody"]);
        q3 = this["shapeGuide"]["lowerArm2S" + 'hape'];
        G['position']["Set"](this["_startX"] + q3['x'] / this["character_" + "scale"], this["_startY"] + q3['y'] / this["character_" + "scale"]);
        G["angle"] = q3["rotation"] / g["oneEightyO" + "verPI"];
        q1["SetAsBox"](q3["scaleX"] * this['shapeRefSc' + "ale"] / this["character_" + "scale"], q3["scaleY"] * this["shapeRefSc" + "ale"] / this["character_" + "scale"]);
        this['lowerArm2B' + "ody"] = b["CreateBody"](G);
        this["lowerArm2S" + "hape"] = this["lowerArm2B" + "ody"]["CreateShap" + 'e'](q1);
        this["lowerArm2B" + "ody"]["SetMassFro" + "mShapes"]();
        this["paintVecto" + 'r']["push"](this["lowerArm2B" + "ody"]);
        q3 = this["shapeGuide"]["lowerLeg1S" + "hape"];
        U["position"]["Set"](this["_startX"] + q3['x'] / this["character_" + 'scale'], this["_startY"] + q3['y'] / this["character_" + "scale"]);
        U["angle"] = q3['rotation'] / g['oneEightyO' + "verPI"];
        q1["SetAsBox"](q3["scaleX"] * this['shapeRefSc' + "ale"] / this["character_" + "scale"], q3["scaleY"] * this["shapeRefSc" + "ale"] / this["character_" + "scale"]);
        this['lowerLeg1B' + 'ody'] = b["CreateBody"](U);
        this["lowerLeg1S" + "hape"] = this["lowerLeg1B" + "ody"]["CreateShap" + 'e'](q1);
        this["_session"]["contactLis" + "tener"]["registerLi" + 'stener'](I['fI']["RESULT"], this["lowerLeg1S" + "hape"], this["contactRes" + "ultHandler"]);
        this["lowerLeg1B" + "ody"]["SetMassFro" + "mShapes"]();
        this["paintVecto" + 'r']["push"](this["lowerLeg1B" + "ody"]);
        q3 = this['shapeGuide']["lowerLeg2S" + "hape"];
        q0["position"]["Set"](this["_startX"] + q3['x'] / this["character_" + "scale"], this["_startY"] + q3['y'] / this["character_" + "scale"]);
        q0["angle"] = q3["rotation"] / g["oneEightyO" + "verPI"];
        q1["SetAsBox"](q3["scaleX"] * this["shapeRefSc" + "ale"] / this["character_" + "scale"], q3["scaleY"] * this["shapeRefSc" + "ale"] / this["character_" + "scale"]);
        this["lowerLeg2B" + "ody"] = b["CreateBody"](q0);
        this["lowerLeg2S" + "hape"] = this["lowerLeg2B" + "ody"]["CreateShap" + 'e'](q1);
        this["_session"]["contactLis" + "tener"]["registerLi" + "stener"](I['fI']["RESULT"], this["lowerLeg2S" + "hape"], this["contactRes" + "ultHandler"]);
        this["lowerLeg2B" + "ody"]["SetMassFro" + "mShapes"]();
        this["paintVecto" + 'r']['push'](this['lowerLeg2B' + "ody"]);
        q3 = this['shapeGuide']["intestineS" + 'hape'];
        this['intestineL' + "ength"] = q3["width"];
        q3 = this["shapeGuide"]["ligamentSh" + "ape"];
        this["ligamentLe" + "ngth"] = q3["width"];
        q3 = this["shapeGuide"]["headChunkS" + "hape"];
        this["headChunkR" + 'adius'] = q3["width"] / 0x2;
        q3 = this['shapeGuide']["chestChunk" + "Shape"];
        this['chestChunk' + "Radius"] = q3['width'] / 0x2;
        q3 = this["shapeGuide"]["pelvisChun" + "kShape"];
        this["pelvisChun" + 'kRadius'] = q3["width"] / 0x2;
      } else {
        this["paintBodyV" + "ector"] = new P();
        this["paintItemV" + "ector"] = new G();
        this["actionsVec" + "tor"] = new K();
        this["actionsToR" + "emove"] = new q1();
        this["singleActi" + "onVector"] = new I();
        this["keepVector"] = new k();
        this["triggers"] = new j();
        this["contactAdd" + "Buffer"] = new g();
        this["contactAdd" + "Sounds"] = new B();
        this["createBack" + "Drops"]();
        this['createMovi' + "eClips"]();
        this["createStat" + "icShapes"]();
        this["createDyna" + "micShapes"]();
        this["createSpec" + "ials"]();
        this["createGrou" + 'ps']();
        this["createJoin" + 'ts']();
        this["createTrig" + "gers"]();
        this["createItem" + 's']();
        this['createToke' + "nHUD"]();
      }
    };
    H["createMovi" + 'eClips'] = function () {
      if ("KmYEK" === 'AJIBW') {
        for (var U = !0x1, O = (N = F['toLowerCas' + 'e']())["replace"](/ /g, ''), G = 0x0; G < this["abusiveStr" + "ings"]["length"]; G++) {
          O['indexOf'](this["abusiveStr" + "ings"][G]) > -0x1 && (U = !0x0);
        }
        return U;
      } else {
        var b = this["_session"]["containerS" + "prite"];
        this['upperArm2M' + 'C'] = this["sourceObje" + 'ct']["upperArm2"];
        this["upperArm2M" + 'C']["scaleX"] = this["upperArm2M" + 'C']["scaleY"] = 0x1 / this["mc_scale"];
        this["upperArm4M" + 'C'] = this["sourceObje" + 'ct']["upperArm4"];
        this["upperArm4M" + 'C']["scaleX"] = this["upperArm4M" + 'C']["scaleY"] = 0x1 / this['mc_scale'];
        this['upperArm4M' + 'C']["visible"] = !0x1;
        this["lowerArm2M" + 'C'] = this["sourceObje" + 'ct']["lowerArm2"];
        this["lowerArm2M" + 'C']["scaleX"] = this["lowerArm2M" + 'C']["scaleY"] = 0x1 / this['mc_scale'];
        this["upperLeg2M" + 'C'] = this["sourceObje" + 'ct']["upperLeg2"];
        this["upperLeg2M" + 'C']['scaleX'] = this["upperLeg2M" + 'C']["scaleY"] = 0x1 / this["mc_scale"];
        this["upperLeg4M" + 'C'] = this["sourceObje" + 'ct']["upperLeg4"];
        this["upperLeg4M" + 'C']["scaleX"] = this["upperLeg4M" + 'C']["scaleY"] = 0x1 / this["mc_scale"];
        this["upperLeg4M" + 'C']["visible"] = !0x1;
        this['lowerLeg2M' + 'C'] = this["sourceObje" + 'ct']["lowerLeg2"];
        this['lowerLeg2M' + 'C']["scaleX"] = this["lowerLeg2M" + 'C']["scaleY"] = 0x1 / this["mc_scale"];
        this["foot2MC"] = this["sourceObje" + 'ct']["foot2"];
        this["foot2MC"]["scaleX"] = this["foot2MC"]["scaleY"] = 0x1 / this["mc_scale"];
        this["foot2MC"]["visible"] = !0x1;
        this["intestineM" + 'Cs'] = [];
        for (var Z = 0x1; Z < 0xb; Z++) {
          var X = this["sourceObje" + 'ct']["intestine" + Z];
          X["scaleX"] = X["scaleY"] = 0x1 / this['mc_scale'];
          this['intestineM' + 'Cs']['push'](X);
          X["visible"] = !0x1;
        }
        this["head1MC"] = this["sourceObje" + 'ct']["head"];
        this['head1MC']["scaleX"] = this["head1MC"]["scaleY"] = 0x1 / this["mc_scale"];
        this["chestMC"] = this["sourceObje" + 'ct']["chest"];
        this["chestMC"]["scaleX"] = this["chestMC"]["scaleY"] = 0x1 / this['mc_scale'];
        this["chestMC"]["wound"]["visible"] = !0x1;
        this['chestMC']["neck"]["visible"] = !0x1;
        this["chestChunk" + "MCs"] = [];
        Z = 0x1;
        for (; Z < 0x5; Z++) {
          var x = this["sourceObje" + 'ct']["chestChunk" + Z];
          x["scaleX"] = x['scaleY'] = 0x1 / this["mc_scale"];
          this["chestChunk" + "MCs"]["push"](x);
          x["visible"] = !0x1;
        }
        this["spineMCs"] = [];
        Z = 0x1;
        for (; Z < 0xb; Z++) {
          var w = this["sourceObje" + 'ct']["spine" + Z];
          w['scaleX'] = w["scaleY"] = 0x1 / this['mc_scale'];
          this["spineMCs"]["push"](w);
          w["visible"] = !0x1;
        }
        this["pelvisMC"] = this["sourceObje" + 'ct']["pelvis"];
        this["pelvisMC"]["scaleX"] = this["pelvisMC"]["scaleY"] = 0x1 / this["mc_scale"];
        this["pelvisMC"]["wound"]["visible"] = !0x1;
        this["pelvisChun" + "kMCs"] = [];
        Z = 0x1;
        for (; Z < 0x4; Z++) {
          var Y = this["sourceObje" + 'ct']["pelvisChun" + 'k' + Z];
          Y["scaleX"] = Y['scaleY'] = 0x1 / this["mc_scale"];
          this["pelvisChun" + "kMCs"]["push"](Y);
          Y["visible"] = !0x1;
        }
        this["heartMC"] = this["sourceObje" + 'ct']["heart"];
        this['heartMC']["scaleX"] = this['heartMC']["scaleY"] = 0x1 / this["mc_scale"];
        this["heartMC"]["visible"] = !0x1;
        this["heartMC"]["stop"]();
        this["brainMC"] = this["sourceObje" + 'ct']["brain"];
        this["brainMC"]["scaleX"] = this['brainMC']["scaleY"] = 0x1 / this["mc_scale"];
        this["brainMC"]["visible"] = !0x1;
        this['headChunkM' + 'Cs'] = [];
        Z = 0x1;
        for (; Z < 0x5; Z++) {
          var v = this["sourceObje" + 'ct']["headChunk" + Z];
          v["scaleX"] = v["scaleY"] = 0x1 / this["mc_scale"];
          this["headChunkM" + 'Cs']["push"](v);
          v["visible"] = !0x1;
        }
        this["upperLeg1M" + 'C'] = this["sourceObje" + 'ct']["upperLeg1"];
        this["upperLeg1M" + 'C']["scaleX"] = this["upperLeg1M" + 'C']["scaleY"] = 0x1 / this["mc_scale"];
        this["upperLeg3M" + 'C'] = this["sourceObje" + 'ct']["upperLeg3"];
        this["upperLeg3M" + 'C']["scaleX"] = this["upperLeg3M" + 'C']["scaleY"] = 0x1 / this["mc_scale"];
        this["upperLeg3M" + 'C']["visible"] = !0x1;
        this["lowerLeg1M" + 'C'] = this["sourceObje" + 'ct']['lowerLeg1'];
        this["lowerLeg1M" + 'C']["scaleX"] = this['lowerLeg1M' + 'C']["scaleY"] = 0x1 / this["mc_scale"];
        this["foot1MC"] = this["sourceObje" + 'ct']["foot1"];
        this['foot1MC']["scaleX"] = this["foot1MC"]["scaleY"] = 0x1 / this["mc_scale"];
        this['foot1MC']['visible'] = !0x1;
        this['upperArm1M' + 'C'] = this["sourceObje" + 'ct']['upperArm1'];
        this["upperArm1M" + 'C']["scaleX"] = this["upperArm1M" + 'C']["scaleY"] = 0x1 / this['mc_scale'];
        this["upperArm3M" + 'C'] = this["sourceObje" + 'ct']["upperArm3"];
        this["upperArm3M" + 'C']["scaleX"] = this["upperArm3M" + 'C']["scaleY"] = 0x1 / this["mc_scale"];
        this["upperArm3M" + 'C']["visible"] = !0x1;
        this["lowerArm1M" + 'C'] = this["sourceObje" + 'ct']["lowerArm1"];
        this["lowerArm1M" + 'C']["scaleX"] = this["lowerArm1M" + 'C']["scaleY"] = 0x1 / this['mc_scale'];
        this["head1Body"]["SetUserDat" + 'a'](this["head1MC"]);
        this["chestBody"]["SetUserDat" + 'a'](this['chestMC']);
        this["pelvisBody"]["SetUserDat" + 'a'](this["pelvisMC"]);
        this["upperArm1B" + "ody"]["SetUserDat" + 'a'](this["upperArm1M" + 'C']);
        this["upperArm2B" + "ody"]["SetUserDat" + 'a'](this['upperArm2M' + 'C']);
        this["upperLeg1B" + "ody"]["SetUserDat" + 'a'](this['upperLeg1M' + 'C']);
        this["upperLeg2B" + "ody"]["SetUserDat" + 'a'](this["upperLeg2M" + 'C']);
        this["lowerArm1B" + "ody"]['SetUserDat' + 'a'](this["lowerArm1M" + 'C']);
        this["lowerArm2B" + "ody"]["SetUserDat" + 'a'](this["lowerArm2M" + 'C']);
        this['lowerLeg1B' + "ody"]["SetUserDat" + 'a'](this["lowerLeg1M" + 'C']);
        this["lowerLeg2B" + "ody"]["SetUserDat" + 'a'](this["lowerLeg2M" + 'C']);
        b["addChild"](this["upperArm2M" + 'C']);
        b["addChild"](this["upperArm4M" + 'C']);
        b['addChild'](this["lowerArm2M" + 'C']);
        b["addChild"](this["upperLeg2M" + 'C']);
        b["addChild"](this["upperLeg4M" + 'C']);
        b['addChild'](this["lowerLeg2M" + 'C']);
        b["addChild"](this["foot2MC"]);
        Z = 0x0;
        for (; Z < this['intestineM' + 'Cs']["length"]; Z++) {
          b["addChild"](this["intestineM" + 'Cs'][Z]);
        }
        b["addChild"](this["head1MC"]);
        b["addChild"](this["chestMC"]);
        Z = 0x0;
        for (; Z < this["chestChunk" + "MCs"]["length"]; Z++) {
          b["addChild"](this["chestChunk" + "MCs"][Z]);
        }
        for (Z = 0x0; Z < this["spineMCs"]["length"]; Z++) {
          b["addChild"](this["spineMCs"][Z]);
        }
        b["addChild"](this["pelvisMC"]);
        Z = 0x0;
        for (; Z < this["pelvisChun" + "kMCs"]['length']; Z++) {
          b["addChild"](this["pelvisChun" + "kMCs"][Z]);
        }
        b["addChild"](this["heartMC"]);
        b["addChild"](this['brainMC']);
        Z = 0x0;
        for (; Z < this["headChunkM" + 'Cs']["length"]; Z++) {
          b["addChild"](this["headChunkM" + 'Cs'][Z]);
        }
        b["addChild"](this["upperLeg1M" + 'C']);
        b["addChild"](this["upperLeg3M" + 'C']);
        b["addChild"](this["lowerLeg1M" + 'C']);
        b["addChild"](this["foot1MC"]);
        b["addChild"](this["upperArm1M" + 'C']);
        b["addChild"](this["upperArm3M" + 'C']);
        b["addChild"](this["lowerArm1M" + 'C']);
      }
    };
    H["resetMovie" + "Clips"] = function () {
      this["upperArm2M" + 'C']["gotoAndSto" + 'p'](0x1);
      this["upperArm2M" + 'C']["visible"] = !0x0;
      this["upperArm4M" + 'C']["gotoAndSto" + 'p'](0x1);
      this["upperArm4M" + 'C']["visible"] = !0x1;
      this["lowerArm2M" + 'C']["gotoAndSto" + 'p'](0x1);
      this["lowerArm2M" + 'C']["hand"]["gotoAndSto" + 'p'](0x1);
      this["upperLeg2M" + 'C']["gotoAndSto" + 'p'](0x1);
      this["upperLeg2M" + 'C']["visible"] = !0x0;
      this["upperLeg4M" + 'C']["gotoAndSto" + 'p'](0x1);
      this["upperLeg4M" + 'C']["visible"] = !0x1;
      this["lowerLeg2M" + 'C']["gotoAndSto" + 'p'](0x1);
      this["foot2MC"]["visible"] = !0x1;
      for (var b = 0x0; b < 0xa; b++) {
        var Z = this["intestineM" + 'Cs'][b];
        Z["visible"] = !0x1;
        Z['x'] = -0x1f4;
        Z['y'] = -0x1f4;
      }
      this["head1MC"]["gotoAndSto" + 'p'](0x1);
      this['head1MC']['visible'] = !0x0;
      this["chestMC"]['gotoAndSto' + 'p'](0x1);
      this["chestMC"]["visible"] = !0x0;
      this["chestMC"]["wound"]["visible"] = !0x1;
      this["chestMC"]["neck"]['visible'] = !0x1;
      b = 0x0;
      for (; b < 0x4; b++) {
        this['chestChunk' + "MCs"][b]["visible"] = !0x1;
      }
      for (b = 0x0; b < 0xa; b++) {
        var X = this['spineMCs'][b];
        X["visible"] = !0x1;
        X['x'] = -0x1f4;
        X['y'] = -0x1f4;
      }
      this["pelvisMC"]["gotoAndSto" + 'p'](0x1);
      this['pelvisMC']["visible"] = !0x0;
      this["pelvisMC"]["wound"]['visible'] = !0x1;
      b = 0x0;
      for (; b < 0x3; b++) {
        this["pelvisChun" + 'kMCs'][b]["visible"] = !0x1;
      }
      this["heartMC"]['visible'] = !0x1;
      this["heartMC"]["stop"]();
      this['brainMC']["visible"] = !0x1;
      b = 0x0;
      for (; b < 0x4; b++) {
        this["headChunkM" + 'Cs'][b]["visible"] = !0x1;
      }
      this["upperLeg1M" + 'C']['gotoAndSto' + 'p'](0x1);
      this["upperLeg1M" + 'C']["visible"] = !0x0;
      this["upperLeg3M" + 'C']["gotoAndSto" + 'p'](0x1);
      this["upperLeg3M" + 'C']["visible"] = !0x1;
      this["lowerLeg1M" + 'C']["gotoAndSto" + 'p'](0x1);
      this["foot1MC"]["visible"] = !0x1;
      this["upperArm1M" + 'C']["gotoAndSto" + 'p'](0x1);
      this["upperArm1M" + 'C']["visible"] = !0x0;
      this["upperArm3M" + 'C']['gotoAndSto' + 'p'](0x1);
      this["upperArm3M" + 'C']["visible"] = !0x1;
      this["lowerArm1M" + 'C']["gotoAndSto" + 'p'](0x1);
      this["lowerArm1M" + 'C']["hand"]["gotoAndSto" + 'p'](0x1);
      this['head1Body']["SetUserDat" + 'a'](this["head1MC"]);
      this['chestBody']["SetUserDat" + 'a'](this["chestMC"]);
      this["pelvisBody"]["SetUserDat" + 'a'](this["pelvisMC"]);
      this["upperArm1B" + "ody"]['SetUserDat' + 'a'](this["upperArm1M" + 'C']);
      this["upperArm2B" + 'ody']["SetUserDat" + 'a'](this["upperArm2M" + 'C']);
      this["upperLeg1B" + "ody"]["SetUserDat" + 'a'](this["upperLeg1M" + 'C']);
      this["upperLeg2B" + "ody"]["SetUserDat" + 'a'](this["upperLeg2M" + 'C']);
      this['lowerArm1B' + "ody"]["SetUserDat" + 'a'](this["lowerArm1M" + 'C']);
      this["lowerArm2B" + "ody"]['SetUserDat' + 'a'](this["lowerArm2M" + 'C']);
      this["lowerLeg1B" + "ody"]["SetUserDat" + 'a'](this['lowerLeg1M' + 'C']);
      this["lowerLeg2B" + "ody"]["SetUserDat" + 'a'](this['lowerLeg2M' + 'C']);
    };
    H["createJoin" + 'ts'] = function () {
      var b;
      var Z = this['_session']["m_world"];
      var X = new j['Gq']();
      X["enableLimi" + 't'] = !0x0;
      X["maxMotorTo" + "rque"] = 0x4;
      var x = new j['RM']();
      var w = this["shapeGuide"]['headAnchor'];
      x["Set"](this["_startX"] + w['x'] / this["character_" + "scale"], this["_startY"] + w['y'] / this['character_' + 'scale']);
      b = this["head1Body"]["GetAngle"]() - this["chestBody"]['GetAngle']();
      X['lowerAngle'] = -0x14 / (0xb4 / Math['PI']) - b;
      X["upperAngle"] = 0x14 / (0xb4 / Math['PI']) - b;
      X["Initialize"](this["chestBody"], this["head1Body"], x);
      this["neckJoint"] = Z["CreateJoin" + 't'](X);
      w = this["shapeGuide"]["pelvisAnch" + 'or'];
      x["Set"](this["_startX"] + w['x'] / this["character_" + "scale"], this["_startY"] + w['y'] / this["character_" + 'scale']);
      b = this['pelvisBody']["GetAngle"]() - this["chestBody"]["GetAngle"]();
      X["lowerAngle"] = -0x5 / (0xb4 / Math['PI']) - b;
      X["upperAngle"] = 0x5 / (0xb4 / Math['PI']) - b;
      X["Initialize"](this["chestBody"], this['pelvisBody'], x);
      this["waistJoint"] = Z["CreateJoin" + 't'](X);
      w = this["shapeGuide"]["upperArmAn" + "chor"];
      x['Set'](this["_startX"] + w['x'] / this["character_" + 'scale'], this["_startY"] + w['y'] / this["character_" + "scale"]);
      b = this["upperArm1B" + "ody"]["GetAngle"]() - this["chestBody"]["GetAngle"]();
      X["lowerAngle"] = -0xb4 / (0xb4 / Math['PI']) - b;
      X["upperAngle"] = 0x3c / (0xb4 / Math['PI']) - b;
      X["Initialize"](this["chestBody"], this["upperArm1B" + 'ody'], x);
      this["shoulderJo" + "int1"] = Z["CreateJoin" + 't'](X);
      b = this["upperArm2B" + "ody"]["GetAngle"]() - this['chestBody']["GetAngle"]();
      X["lowerAngle"] = -0xb4 / (0xb4 / Math['PI']) - b;
      X["upperAngle"] = 0x3c / (0xb4 / Math['PI']) - b;
      X["Initialize"](this["chestBody"], this["upperArm2B" + 'ody'], x);
      this["shoulderJo" + "int2"] = Z["CreateJoin" + 't'](X);
      w = this["shapeGuide"]["lowerArm1A" + "nchor"];
      x["Set"](this["_startX"] + w['x'] / this["character_" + "scale"], this["_startY"] + w['y'] / this['character_' + 'scale']);
      b = this["lowerArm1B" + "ody"]["GetAngle"]() - this["upperArm1B" + 'ody']["GetAngle"]();
      X["lowerAngle"] = -0xa0 / (0xb4 / Math['PI']) - b;
      X["upperAngle"] = 0x0 / (0xb4 / Math['PI']) - b;
      X['Initialize'](this["upperArm1B" + 'ody'], this["lowerArm1B" + "ody"], x);
      this["elbowJoint" + '1'] = Z["CreateJoin" + 't'](X);
      w = this["shapeGuide"]["lowerArm2A" + 'nchor'];
      x["Set"](this["_startX"] + w['x'] / this["character_" + 'scale'], this["_startY"] + w['y'] / this["character_" + "scale"]);
      b = this["lowerArm2B" + "ody"]["GetAngle"]() - this["upperArm2B" + 'ody']["GetAngle"]();
      X["lowerAngle"] = -0xa0 / (0xb4 / Math['PI']) - b;
      X['upperAngle'] = 0x0 / (0xb4 / Math['PI']) - b;
      X["Initialize"](this["upperArm2B" + "ody"], this["lowerArm2B" + "ody"], x);
      this["elbowJoint" + '2'] = Z["CreateJoin" + 't'](X);
      w = this["shapeGuide"]["upperLegAn" + "chor"];
      x["Set"](this["_startX"] + w['x'] / this["character_" + "scale"], this["_startY"] + w['y'] / this["character_" + "scale"]);
      b = this['upperLeg1B' + "ody"]["GetAngle"]() - this["pelvisBody"]["GetAngle"]();
      X['lowerAngle'] = -0x96 / (0xb4 / Math['PI']) - b;
      X['upperAngle'] = 0xa / (0xb4 / Math['PI']) - b;
      X['Initialize'](this["pelvisBody"], this['upperLeg1B' + "ody"], x);
      this["hipJoint1"] = Z["CreateJoin" + 't'](X);
      b = this["upperLeg2B" + "ody"]["GetAngle"]() - this["pelvisBody"]["GetAngle"]();
      X["lowerAngle"] = -0x96 / (0xb4 / Math['PI']) - b;
      X["upperAngle"] = 0xa / (0xb4 / Math['PI']) - b;
      X["Initialize"](this["pelvisBody"], this["upperLeg2B" + "ody"], x);
      this["hipJoint2"] = Z["CreateJoin" + 't'](X);
      w = this["shapeGuide"]["lowerLeg1A" + "nchor"];
      x["Set"](this['_startX'] + w['x'] / this["character_" + "scale"], this['_startY'] + w['y'] / this["character_" + "scale"]);
      b = this["lowerLeg1B" + "ody"]["GetAngle"]() - this["upperLeg1B" + "ody"]["GetAngle"]();
      X["lowerAngle"] = 0x0 / (0xb4 / Math['PI']) - b;
      X["upperAngle"] = 0x96 / g["oneEightyO" + "verPI"] - b;
      X["Initialize"](this['upperLeg1B' + "ody"], this["lowerLeg1B" + "ody"], x);
      this["kneeJoint1"] = Z["CreateJoin" + 't'](X);
      w = this["shapeGuide"]["lowerLeg2A" + "nchor"];
      x["Set"](this['_startX'] + w['x'] / this["character_" + "scale"], this["_startY"] + w['y'] / this["character_" + "scale"]);
      b = this['lowerLeg2B' + "ody"]["GetAngle"]() - this["upperLeg2B" + "ody"]["GetAngle"]();
      X["lowerAngle"] = 0x0 / g["oneEightyO" + "verPI"] - b;
      X["upperAngle"] = 0x96 / g['oneEightyO' + "verPI"] - b;
      X['Initialize'](this["upperLeg2B" + 'ody'], this["lowerLeg2B" + "ody"], x);
      this["kneeJoint2"] = Z["CreateJoin" + 't'](X);
    };
    H["resetJoint" + "Limits"] = function () {
      var b;
      var Z;
      var X;
      var x = g["oneEightyO" + 'verPI'];
      Z = -0x14 / x - (b = this["head1Body"]["GetAngle"]() - this["chestBody"]["GetAngle"]() - this["neckJoint"]["GetJointAn" + 'gle']());
      X = 0x14 / x - b;
      this["neckJoint"]["SetLimits"](Z, X);
      Z = -0x5 / x - (b = this["pelvisBody"]["GetAngle"]() - this["chestBody"]["GetAngle"]() - this["waistJoint"]["GetJointAn" + 'gle']());
      X = 0x5 / x - b;
      this["waistJoint"]['SetLimits'](Z, X);
      Z = -0xb4 / x - (b = this["shoulderJo" + "int1"]["m_body2"]["GetAngle"]() - this['shoulderJo' + "int1"]["m_body1"]["GetAngle"]() - this["shoulderJo" + "int1"]["GetJointAn" + "gle"]());
      X = 0x3c / x - b;
      this["shoulderJo" + "int1"]["SetLimits"](Z, X);
      Z = -0xb4 / x - (b = this["shoulderJo" + 'int2']["m_body2"]["GetAngle"]() - this["shoulderJo" + "int2"]["m_body1"]["GetAngle"]() - this["shoulderJo" + "int2"]["GetJointAn" + "gle"]());
      X = 0x3c / x - b;
      this["shoulderJo" + "int2"]["SetLimits"](Z, X);
      Z = -0xa0 / x - (b = this["lowerArm1B" + "ody"]['GetAngle']() - this["upperArm1B" + "ody"]["GetAngle"]() - this["elbowJoint" + '1']["GetJointAn" + 'gle']());
      X = 0x0 / x - b;
      this["elbowJoint" + '1']["SetLimits"](Z, X);
      Z = -0xa0 / x - (b = this["lowerArm2B" + "ody"]["GetAngle"]() - this["upperArm2B" + "ody"]["GetAngle"]() - this['elbowJoint' + '2']['GetJointAn' + "gle"]());
      X = 0x0 / x - b;
      this["elbowJoint" + '2']["SetLimits"](Z, X);
      Z = -0x96 / x - (b = this["hipJoint1"]["m_body2"]["GetAngle"]() - this['hipJoint1']["m_body1"]['GetAngle']() - this["hipJoint1"]["GetJointAn" + "gle"]());
      X = 0xa / x - b;
      this["hipJoint1"]["SetLimits"](Z, X);
      Z = -0x96 / x - (b = this['hipJoint2']["m_body2"]["GetAngle"]() - this["hipJoint2"]["m_body1"]["GetAngle"]() - this['hipJoint2']['GetJointAn' + "gle"]());
      X = 0xa / x - b;
      this["hipJoint2"]["SetLimits"](Z, X);
      Z = 0x0 / x - (b = this["lowerLeg1B" + "ody"]["GetAngle"]() - this['upperLeg1B' + "ody"]["GetAngle"]() - this["kneeJoint1"]['GetJointAn' + "gle"]());
      X = 0x96 / x - b;
      this["kneeJoint1"]["SetLimits"](Z, X);
      Z = 0x0 / x - (b = this["lowerLeg2B" + "ody"]['GetAngle']() - this["upperLeg2B" + "ody"]["GetAngle"]() - this["kneeJoint2"]["GetJointAn" + 'gle']());
      X = 0x96 / x - b;
      this["kneeJoint2"]["SetLimits"](Z, X);
    };
    H["handleCont" + "actBuffer"] = function () {
      if ("LyJGY" === "LyJGY") {
        this["handleCont" + 'actResults']();
        this["handleCont" + "actAdds"]();
      } else {
        return null;
      }
    };
    H["handleCont" + 'actResults'] = function () {
      var b;
      this['contactRes' + "ultBuffer"]["get"](this["head1Shape"]) && (b = this["contactRes" + "ultBuffer"]["get"](this["head1Shape"]), this["headSmash1"](b["impulse"]), this["contactRes" + "ultBuffer"]['delete'](this["head1Shape"]), this['contactAdd' + "Buffer"]["delete"](this["head1Shape"]));
      this["contactRes" + "ultBuffer"]['get'](this["chestShape"]) && (b = this["contactRes" + "ultBuffer"]['get'](this["chestShape"]), this["chestSmash"](b["impulse"]), this["contactRes" + "ultBuffer"]["delete"](this["chestShape"]), this["contactAdd" + "Buffer"]['delete'](this["chestShape"]));
      this["contactRes" + 'ultBuffer']["get"](this["pelvisShap" + 'e']) && (b = this["contactRes" + "ultBuffer"]["get"](this["pelvisShap" + 'e']), this["pelvisSmas" + 'h'](b["impulse"]), this["contactRes" + "ultBuffer"]["delete"](this["pelvisShap" + 'e']), this["contactAdd" + "Buffer"]["delete"](this["pelvisShap" + 'e']));
      this["contactRes" + "ultBuffer"]["get"](this["lowerLeg1S" + "hape"]) && (b = this['contactRes' + "ultBuffer"]["get"](this["lowerLeg1S" + "hape"]), this["footSmash1"](b["impulse"]), this["contactRes" + "ultBuffer"]["delete"](this["lowerLeg1S" + "hape"]), this["contactAdd" + "Buffer"]["delete"](this["lowerLeg1S" + "hape"]));
      this["contactRes" + "ultBuffer"]['get'](this["lowerLeg2S" + "hape"]) && (b = this["contactRes" + "ultBuffer"]["get"](this["lowerLeg2S" + "hape"]), this["footSmash2"](b["impulse"]), this["contactRes" + "ultBuffer"]["delete"](this["lowerLeg2S" + "hape"]), this["contactAdd" + "Buffer"]["delete"](this['lowerLeg2S' + "hape"]));
      this["contactRes" + "ultBuffer"]["get"](this["lowerArm1S" + "hape"]) && (b = this["contactRes" + "ultBuffer"]["get"](this["lowerArm1S" + "hape"]), this["grabAction"](this["lowerArm1B" + "ody"], b["otherShape"], b['otherShape']["GetBody"]()), this["contactRes" + "ultBuffer"]["delete"](this["lowerArm1S" + "hape"]));
      this["contactRes" + "ultBuffer"]["get"](this['lowerArm2S' + "hape"]) && (b = this["contactRes" + "ultBuffer"]["get"](this["lowerArm2S" + 'hape']), this["grabAction"](this["lowerArm2B" + "ody"], b["otherShape"], b["otherShape"]["GetBody"]()), this["contactRes" + "ultBuffer"]["delete"](this["lowerArm2S" + "hape"]));
    };
    H["handleCont" + "actAdds"] = function () {

      var b = this;
      this["contactAdd" + "Buffer"]["forEach"](function (Z, X) {
        var x = b["contactAdd" + 'Sounds']['get'](X);
        X["m_body"] && B['m']['instance']["playAreaSo" + "undInstanc" + 'e'](x, X["m_body"]);
        b['contactAdd' + 'Buffer']["delete"](X);
      });
    };
    H["checkJoint" + 's'] = function () {
      this["checkRevJo" + "int"](this["waistJoint"], this["torsoBreak" + 'Limit'], this["torsoBreak"]["bind"](this));
      this["checkRevJo" + "int"](this["neckJoint"], this["neckBreakL" + "imit"], this['neckBreak']["bind"](this));
      this["checkRevJo" + "int"](this["shoulderJo" + "int1"], this["shoulderBr" + "eakLimit"], this["shoulderBr" + "eak1"]["bind"](this));
      this["checkRevJo" + "int"](this["shoulderJo" + "int2"], this["shoulderBr" + "eakLimit"], this["shoulderBr" + "eak2"]['bind'](this));
      this["checkRevJo" + "int"](this["elbowJoint" + '1'], this["elbowBreak" + 'Limit'], this["elbowBreak" + '1']["bind"](this));
      this["checkRevJo" + "int"](this["elbowJoint" + '2'], this["elbowBreak" + "Limit"], this["elbowBreak" + '2']["bind"](this));
      this["checkRevJo" + "int"](this["hipJoint1"], this["hipBreakLi" + "mit"], this['hipBreak1']["bind"](this));
      this['checkRevJo' + "int"](this["hipJoint2"], this["hipBreakLi" + "mit"], this["hipBreak2"]['bind'](this));
      this['checkRevJo' + "int"](this['kneeJoint1'], this["kneeBreakL" + "imit"], this['kneeBreak1']["bind"](this));
      this['checkRevJo' + "int"](this["kneeJoint2"], this['kneeBreakL' + "imit"], this["kneeBreak2"]["bind"](this));
      for (var b = 0x0; b < this["composites"]["length"]; b++) {
        this["composites"][b]['checkJoint' + 's']();
      }
    };
    H["checkRevJo" + "int"] = function (b, Z, X) {
      if (b && !b["broken"]) {
        var x = b["GetReactio" + "nForce"]()['Length']();
        if (x > Z) {
          return void X(x);
        }
        var w = b["GetAnchor1"]();
        var Y = b["GetAnchor2"]();
        var v = Y['x'] - w['x'];
        var L = Y['y'] - w['y'];
        Math["sqrt"](v * v + L * L) > 0.5 && X(0x3e8);
      }
    };
    H["checkDistJ" + "oint"] = function (b, Z, X) {
      if (b && !b["broken"]) {
        var x = Math["abs"](b['m_impulse']);
        x > Z && X(x);
      }
    };
    H["headSmash1"] = function (b) {

      this['trackCrush' + 'ed'](this["head1Shape"]);
      this["contactImp" + "ulseDict"]["delete"](this['head1Shape']);
      this["_session"]["contactLis" + "tener"]["deleteList" + "ener"](I['fI']["RESULT"], this["head1Shape"]);
      this["_session"]["contactLis" + "tener"]["deleteList" + 'ener'](I['fI']["ADD"], this["head1Shape"]);
      this["dead"] = !0x0;
      if (this["neckJoint"]["broken"]) {
        this["headBloodF" + "low"]["stopSpewin" + 'g']();
        this["head1MC"]["visible"] = !0x1;
        this["spinalChor" + 'd'] && this["spinalChor" + 'd']["spineBreak" + '2'](0xa);
      } else {
        this["neckJoint"]['broken'] = !0x0;
        this["head1MC"]["visible"] = !0x1;
        this["chestMC"]['neck']['visible'] = !0x0;
        if (this["chestShape"]["m_userData"] != g["GRIND_STAT" + 'E']) {
          if ("pewZp" !== "wntLd") {
            var Z = this["shapeGuide"]["spineAncho" + 'r'];
            this["neckBloodF" + "low"] = this["_session"]["particleCo" + 'ntroller']["createBloo" + 'dFlow'](2.5, 0x4, this["chestBody"], new j['RM'](Z['x'] / this["character_" + "scale"], Z['y'] / this["character_" + "scale"]), 0x10e, 0x1f4, this["_session"]["containerS" + "prite"], this["_session"]["containerS" + "prite"]["getChildIn" + "dex"](this["chestMC"]));
          } else {
            Y = C["setPrototy" + "peOf"] ? j["setPrototy" + "peOf"]["bind"]() : function (Q, q0) {
              Q["__proto__"] = q0;
              return Q;
            };
            return P(U, K);
          }
        }
      }
      var X = new j['_A']();
      X["density"] = 0x1;
      X["friction"] = 0.3;
      X["restitutio" + 'n'] = 0.1;
      X["radius"] = this["headChunkR" + "adius"] / this["character_" + "scale"];
      X["filter"] = this["zeroFilter"];
      for (var x = this["head1Body"]["GetPositio" + 'n'](), w = this["head1Body"]["GetAngle"](), Y = 0x4 / this["character_" + "scale"], v = 0x0; v < this["headChunkM" + 'Cs']["length"]; v++) {
        var L = new j['gv']();
        L["userData"] = this["headChunkM" + 'Cs'][v];
        L["userData"]["visible"] = !0x0;
        L['position']["Set"](x['x'] + Math["sin"](w) * Y, x['y'] + Math["cos"](w) * Y);
        var U = this["_session"]["m_world"]["CreateBody"](L);
        U['CreateShap' + 'e'](X);
        U["SetMassFro" + 'mShapes']();
        U["SetLinearV" + "elocity"](this["head1Body"]['GetLinearV' + 'elocityFro' + "mWorldPoin" + 't'](L["position"]));
        U["SetAngular" + "Velocity"](this["head1Body"]["GetAngular" + "Velocity"]());
        this["paintVecto" + 'r']["push"](U);
        this["chunks"]['push'](U);
        w += Math['PI'] / 0x2;
      }
      X["radius"] = this["brainRadiu" + 's'] / this["character_" + "scale"];
      var O = new j['gv']();
      O["userData"] = this["brainMC"];
      this["brainMC"]['visible'] = !0x0;
      O["position"]['Set'](x['x'], x['y']);
      O["angle"] = this["head1Body"]["GetAngle"]();
      this["brainBody"] = this["_session"]["m_world"]["CreateBody"](O);
      this["brainBody"]["CreateShap" + 'e'](X);
      this["brainBody"]["SetMassFro" + "mShapes"]();
      this["brainBody"]["SetLinearV" + "elocity"](this["head1Body"]["GetLinearV" + "elocity"]());
      this["brainBody"]["SetAngular" + "Velocity"](this["head1Body"]["GetAngular" + "Velocity"]());
      this['paintVecto' + 'r']["push"](this["brainBody"]);
      this["_session"]['particleCo' + "ntroller"]["createBloo" + 'dBurst'](0x5, 0xf, this["head1Body"], 0xc8, new j['RM'](), this["_session"]["containerS" + "prite"], this["_session"]["containerS" + 'prite']["getChildIn" + "dex"](this["brainMC"]));
      B['m']["instance"]["playAreaSo" + "undInstanc" + 'e']("HeadSmash", this["head1Body"]);
      this["_session"]["m_world"]["DestroyBod" + 'y'](this["head1Body"]);
    };
    H["chestSmash"] = function (b) {
      if ('vwVTy' === "honhU") {
        this["createFilt" + "ers"]();
        this["createBodi" + 'es']();
        this['createJoin' + 'ts']();
        this["createMovi" + "eClips"]();
        this["setLimits"]();
        this["createDict" + "ionaries"]();
        this['daughter']["create"]();
        this["son"]['create']();
        this["_session"] instanceof F['v'] && (this["daughter"]['wheelJoint']["SetMotorSp" + "eed"](0x0), this["daughter"]["wheelJoint"]["EnableMoto" + 'r'](!0x0));
        this["dispatchEv" + "ent"](new T['Jh'](V['Jh']["COMPLETE"]));
      } else {
        this["trackCrush" + 'ed'](this["chestShape"]);
        this["contactImp" + "ulseDict"]["delete"](this["chestShape"]);
        this["_session"]["contactLis" + "tener"]["deleteList" + "ener"](I['fI']["RESULT"], this["chestShape"]);
        this['_session']["contactLis" + "tener"]["deleteList" + "ener"](I['fI']["ADD"], this["chestShape"]);
        this["dead"] = !0x0;
        this["neckJoint"]["broken"] ? this["spinalChor" + 'd'] && this["spinalChor" + 'd']["spineBreak" + '1'](0xa) : this["neckBreak"](this["spineLimit"], !0x1, !0x1);
        this["chestMC"]['neck']["visible"] = !0x1;
        this["shoulderJo" + "int1"] && (this["shoulderJo" + 'int1']["broken"] ? this["upperArm3B" + "ody"] && (this["_session"]["m_world"]["DestroyJoi" + 'nt'](this["shoulderJo" + "int1"]), this["upperArm3B" + "ody"]["GetShapeLi" + 'st']()["SetFilterD" + 'ata'](this['zeroFilter']), this["_session"]['m_world']["Refilter"](this["upperArm3B" + "ody"]['GetShapeLi' + 'st']()), this["upperArm3M" + 'C']["gotoAndSto" + 'p'](0x8)) : this['shoulderBr' + "eak1"](this["shoulderSn" + "apLimit"] + 0x1, !0x1));
        this["shoulderJo" + "int2"] && (this["shoulderJo" + "int2"]["broken"] ? this["upperArm4B" + "ody"] && (this['_session']['m_world']["DestroyJoi" + 'nt'](this["shoulderJo" + "int2"]), this["upperArm4B" + "ody"]["GetShapeLi" + 'st']()["SetFilterD" + "ata"](this["zeroFilter"]), this["_session"]["m_world"]["Refilter"](this["upperArm4B" + "ody"]["GetShapeLi" + 'st']()), this["upperArm4M" + 'C']["gotoAndSto" + 'p'](0x8)) : this['shoulderBr' + 'eak2'](this["shoulderSn" + "apLimit"] + 0x1, !0x1));
        this["waistJoint"]["broken"] || this["torsoBreak"](this["intestineL" + "imit"] - 0x1, !0x1);
        this["intestineC" + 'hain'] && this["intestineC" + "hain"]["intestineB" + "reak2"](0xa);
        var Z = new j['_A']();
        Z["density"] = 0x1;
        Z['friction'] = 0.3;
        Z["restitutio" + 'n'] = 0.1;
        Z["radius"] = this["chestChunk" + "Radius"] / this['character_' + "scale"];
        Z['filter'] = this["zeroFilter"];
        for (var X = this["chestBody"]["GetPositio" + 'n'](), x = this["chestBody"]["GetAngle"]() + Math['PI'] / 0x4, w = 0x5 / this["character_" + 'scale'], Y = 0x0; Y < this["chestChunk" + 'MCs']["length"]; Y++) {
          var v = new j['gv']();
          v["userData"] = this["chestChunk" + "MCs"][Y];
          v["userData"]["visible"] = !0x0;
          v["position"]["Set"](X['x'] + Math["sin"](x) * w, X['y'] + Math["cos"](x) * w);
          v["angle"] = this["chestBody"]["GetAngle"]();
          var L = this["_session"]["m_world"]["CreateBody"](v);
          L["CreateShap" + 'e'](Z);
          L["SetMassFro" + "mShapes"]();
          L["SetLinearV" + "elocity"](this["chestBody"]["GetLinearV" + "elocityFro" + "mWorldPoin" + 't'](v['position']));
          L["SetAngular" + "Velocity"](this["chestBody"]["GetAngular" + "Velocity"]());
          this["paintVecto" + 'r']["push"](L);
          this["chunks"]["push"](L);
          x += Math['PI'] / 0x2;
        }
        this["heartMC"]["visible"] = !0x0;
        Z["radius"] = this["headChunkR" + "adius"] / this["character_" + 'scale'];
        var U = new j['gv']();
        U["userData"] = this["heartMC"];
        this["heartMC"]["play"]();
        U["position"]['Set'](X['x'], X['y']);
        U["angle"] = this["chestBody"]["GetAngle"]();
        this['heartBody'] = this["_session"]['m_world']['CreateBody'](U);
        this["heartBody"]["CreateShap" + 'e'](Z);
        this["heartBody"]["SetMassFro" + "mShapes"]();
        this["heartBody"]["SetLinearV" + "elocity"](this["chestBody"]["GetLinearV" + "elocity"]());
        this["heartBody"]["SetAngular" + "Velocity"](this["chestBody"]["GetAngular" + "Velocity"]());
        this["paintVecto" + 'r']["push"](this["heartBody"]);
        this["stomachBlo" + "odFlow"] && this['stomachBlo' + "odFlow"]["stopSpewin" + 'g']();
        this["neckBloodF" + "low"] && this["neckBloodF" + "low"]["stopSpewin" + 'g']();
        this['shoulder1B' + 'loodFlow'] && this["shoulder1B" + "loodFlow"]['stopSpewin' + 'g']();
        this["shoulder2B" + 'loodFlow'] && this["shoulder2B" + "loodFlow"]["stopSpewin" + 'g']();
        this['_session']["particleCo" + "ntroller"]["createBloo" + "dBurst"](0x5, 0x14, this["chestBody"], 0x12c, new j['RM'](), this["_session"]["containerS" + "prite"], this["_session"]["containerS" + "prite"]["getChildIn" + "dex"](this["heartMC"]));
        B['m']["instance"]["playAreaSo" + 'undInstanc' + 'e']("ChestSmash", this["chestBody"]);
        this['chestBody']["SetAngular" + "Velocity"](0x0);
        this["chestBody"]['SetLinearV' + "elocity"](new j['RM']());
        this["_session"]["m_world"]["DestroyBod" + 'y'](this["chestBody"]);
        this["chestMC"]["visible"] = !0x1;
        this["cameraFocu" + 's'] = this["heartBody"];
        this['heartBody']["CopyInterp" + 'olation'](this["chestBody"]);
        this["_session"]["camera"]["focus"] == this["chestBody"] && (this["_session"]["camera"]['focus'] = this['cameraFocu' + 's']);
      }
    };
    H["pelvisSmas" + 'h'] = function (b) {
      if ("qAPeK" === 'qAPeK') {
        this["contactImp" + "ulseDict"]["delete"](this["pelvisShap" + 'e']);
        this["_session"]["contactLis" + 'tener']["deleteList" + "ener"](I['fI']["RESULT"], this["pelvisShap" + 'e']);
        this["_session"]["contactLis" + "tener"]['deleteList' + "ener"](I['fI']["ADD"], this["pelvisShap" + 'e']);
        this["hipJoint1"] && (this["hipJoint1"]["broken"] ? this['upperLeg3B' + "ody"] && (this["_session"]["m_world"]["DestroyJoi" + 'nt'](this["hipJoint1"]), this["upperLeg3B" + "ody"]['GetShapeLi' + 'st']()["SetFilterD" + "ata"](this["zeroFilter"]), this["_session"]["m_world"]["Refilter"](this["upperLeg3B" + "ody"]["GetShapeLi" + 'st']()), this["upperLeg3M" + 'C']["gotoAndSto" + 'p'](0x8)) : this["hipBreak1"](this["hipSnapLim" + 'it'] + 0x1, !0x1));
        this["hipJoint2"] && (this["hipJoint2"]["broken"] ? this["upperLeg4B" + "ody"] && (this["_session"]["m_world"]["DestroyJoi" + 'nt'](this['hipJoint2']), this['upperLeg4B' + "ody"]["GetShapeLi" + 'st']()["SetFilterD" + 'ata'](this["zeroFilter"]), this["_session"]["m_world"]["Refilter"](this["upperLeg4B" + 'ody']["GetShapeLi" + 'st']()), this['upperLeg4M' + 'C']["gotoAndSto" + 'p'](0x8)) : this["hipBreak2"](this["hipSnapLim" + 'it'] + 0x1, !0x1));
        this["waistJoint"]["broken"] ? this["intestineC" + "hain"] && this["intestineC" + "hain"]["intestineB" + "reak1"](0xa) : this["torsoBreak"](this['intestineL' + 'imit']);
        this["hip1BloodF" + "low"] && this["hip1BloodF" + "low"]["stopSpewin" + 'g']();
        this["hip2BloodF" + "low"] && this["hip2BloodF" + "low"]["stopSpewin" + 'g']();
        var Z = new j['_A']();
        Z["density"] = 0x1;
        Z['friction'] = 0.3;
        Z["restitutio" + 'n'] = 0.1;
        Z["radius"] = this["pelvisChun" + "kRadius"] / this["character_" + "scale"];
        Z["filter"] = this["zeroFilter"];
        for (var X = this["pelvisBody"]["GetPositio" + 'n'](), x = this["pelvisBody"]["GetAngle"](), w = 0x3 / this['character_' + "scale"], Y = 0x0; Y < this["pelvisChun" + "kMCs"]["length"]; Y++) {
          if ("wKNym" === "qhmRl") {
            h["statusSpri" + 'te'] && C["statusSpri" + 'te']["die"]();
            j["removeLoad" + "erListener" + 's']();
            P["updateRefr" + "eshButton"]();
            p["refreshBut" + "ton"]["setSpin"](!0x1);
            K["createProm" + "ptSprite"]("Sorry, the" + "re was a S" + "ecurity Er" + "ror.", "ugh, ok");
          } else {
            var v = new j['gv']();
            v["userData"] = this["pelvisChun" + "kMCs"][Y];
            v["userData"]["visible"] = !0x0;
            v["position"]["Set"](X['x'] + Math['sin'](x) * w, X['y'] + Math["cos"](x) * w);
            v["angle"] = this['pelvisBody']["GetAngle"]();
            var L = this["_session"]["m_world"]["CreateBody"](v);
            L["CreateShap" + 'e'](Z);
            L["SetMassFro" + "mShapes"]();
            L["SetLinearV" + "elocity"](this['pelvisBody']["GetLinearV" + "elocityFro" + "mWorldPoin" + 't'](v["position"]));
            L["SetAngular" + "Velocity"](this["pelvisBody"]["GetAngular" + "Velocity"]());
            this['paintVecto' + 'r']['push'](L);
            this["chunks"]["push"](L);
            x += 0x2 * Math['PI'] / 0x3;
          }
        }
        this["_session"]["particleCo" + 'ntroller']["createBloo" + "dBurst"](0x5, 0xf, this["pelvisBody"], 0xc8, new j['RM'](), this["_session"]["containerS" + "prite"], this["_session"]["containerS" + "prite"]['getChildIn' + "dex"](this["pelvisMC"]));
        B['m']["instance"]["playAreaSo" + "undInstanc" + 'e']("PelvisSmas" + 'h', this["pelvisBody"]);
        this['_session']["m_world"]["DestroyBod" + 'y'](this["pelvisBody"]);
        this["pelvisMC"]['visible'] = !0x1;
        this["addVocals"]("Pelvis", 0x5);
      } else {
        N['XD']["USE_INTERP" + "OLATION"] = !0x1;
        this['replayProg' + "ressBar"]["updateProg" + "ress"](this["iteration"], this["totalItera" + "tions"]);
        this["frames"] += 0x1;
        this["steps"] += 0x1;
        this["_character"]["preActions"]();
        if (this["inputAllow" + 'ed']) {
          var G = this["mouseClick" + "Map"][this['iteration']["toString"]()];
          G && this["level"]["mouseClick" + "Trigger"](G);
          this["iteration"] >= this['totalItera' + "tions"] ? this["levelCompl" + "ete"]() : this["_character"]["checkRepla" + "yData"](this['keyDisplay'], this['replayData']["getKeyEntr" + 'y'](this["iteration"]));
          this["_iteration"]++;
        } else {
          this["_character"]["doNothing"]();
        }
        this["_character"]['actions']();
        this["m_world"]["Step"](this["m_timeStep"], this["m_iteratio" + 'ns']);
        this["_character"]["handleCont" + "actBuffer"]();
        this["_character"]["checkJoint" + 's']();
        this["_level"]["actions"]();
        this["_character"]['paint']();
        this['_level']["paint"]();
        this["_camera"]["step"](0x1);
        this["_particleC" + "ontroller"]["step"](0x1);
        F['m']["instance"]["step"]();
        this["_useCullin" + 'g'] && this['cullObject' + 's']();
        this["_accumulat" + 'edStep'] = 0x0;
      }
    };
    H['footSmash1'] = function (b) {
      this["contactImp" + "ulseDict"]["delete"](this['lowerLeg1S' + "hape"]);
      this["_session"]["contactLis" + "tener"]["deleteList" + "ener"](I['fI']["RESULT"], this["lowerLeg1S" + "hape"]);
      this["_session"]["contactLis" + "tener"]["deleteList" + 'ener'](I['fI']["ADD"], this["lowerLeg1S" + "hape"]);
      var Z = new j['m2']();
      var X = new j['gv']();
      var x = this["shapeGuide"]["footShape"];
      var w = this["lowerLeg1B" + 'ody']["GetWorldPo" + "int"](new j['RM'](x['x'] / this["character_" + "scale"], x['y'] / this["character_" + 'scale']));
      X['position'] = w;
      X["angle"] = this["lowerLeg1B" + "ody"]["GetAngle"]();
      X["userData"] = this["foot1MC"];
      this["foot1MC"]["visible"] = !0x0;
      Z['density'] = 0x1;
      Z["friction"] = 0.3;
      Z["restitutio" + 'n'] = 0.1;
      Z["filter"] = this["zeroFilter"];
      Z["SetAsBox"](x["scaleX"] * this['shapeRefSc' + "ale"] / this["character_" + "scale"], x["scaleY"] * this["shapeRefSc" + "ale"] / this["character_" + "scale"]);
      this["foot1Body"] = this["_session"]["m_world"]["CreateBody"](X);
      this["foot1Body"]["CreateShap" + 'e'](Z);
      this["foot1Body"]["SetMassFro" + "mShapes"]();
      this["foot1Body"]["SetLinearV" + "elocity"](this["lowerLeg1B" + "ody"]["GetLinearV" + "elocity"]());
      this["foot1Body"]["SetAngular" + "Velocity"](this["lowerLeg1B" + "ody"]["GetAngular" + "Velocity"]());
      this["paintVecto" + 'r']["push"](this["foot1Body"]);
      var Y = this["shapeGuide"]["lowerLeg1S" + "hape"];
      this["_session"]["particleCo" + "ntroller"]["createBloo" + "dBurst"](0x5, 0xf, this["lowerLeg1B" + "ody"], 0x32, new j['RM'](0x0, 0x5 * Y["scaleY"] / this["character_" + "scale"]), this["_session"]["containerS" + "prite"]);
      0x2 == this["lowerLeg1M" + 'C']["currentFra" + 'me'] ? this["lowerLeg1M" + 'C']["gotoAndSto" + 'p'](0x4) : this["lowerLeg1M" + 'C']["gotoAndSto" + 'p'](0x3);
      var v = Math["ceil"](0x4 * Math['random']());
      B['m']['instance']['playAreaSo' + "undInstanc" + 'e']("BoneBreak" + v, this["lowerLeg1B" + 'ody']);
      this["addVocals"]("Foot1", 0x0);
    };
    H["footSmash2"] = function (b) {
      if ("EJNzh" !== "ZMENd") {
        this["contactImp" + "ulseDict"]["delete"](this["lowerLeg2S" + "hape"]);
        this["_session"]["contactLis" + 'tener']['deleteList' + "ener"](I['fI']["RESULT"], this["lowerLeg2S" + "hape"]);
        this["_session"]['contactLis' + "tener"]["deleteList" + "ener"](I['fI']["ADD"], this["lowerLeg2S" + 'hape']);
        var Z = new j['m2']();
        var X = new j['gv']();
        var x = this["shapeGuide"]["footShape"];
        var w = this["lowerLeg2B" + 'ody']["GetWorldPo" + "int"](new j['RM'](x['x'] / this["character_" + "scale"], x['y'] / this["character_" + "scale"]));
        X["position"] = w;
        X["angle"] = this["lowerLeg2B" + "ody"]["GetAngle"]();
        X["userData"] = this["foot2MC"];
        this["foot2MC"]["visible"] = !0x0;
        Z['density'] = 0x1;
        Z["friction"] = 0.3;
        Z["restitutio" + 'n'] = 0.1;
        Z["filter"] = this["zeroFilter"];
        Z["SetAsBox"](x["scaleX"] * this["shapeRefSc" + "ale"] / this["character_" + "scale"], x["scaleY"] * this["shapeRefSc" + "ale"] / this["character_" + "scale"]);
        this["foot2Body"] = this["_session"]['m_world']["CreateBody"](X);
        this["foot2Body"]["CreateShap" + 'e'](Z);
        this["foot2Body"]["SetMassFro" + "mShapes"]();
        this["foot2Body"]["SetLinearV" + "elocity"](this["lowerLeg2B" + "ody"]["GetLinearV" + "elocity"]());
        this["foot2Body"]["SetAngular" + "Velocity"](this["lowerLeg2B" + 'ody']["GetAngular" + "Velocity"]());
        this["paintVecto" + 'r']["push"](this["foot2Body"]);
        var Y = this["shapeGuide"]["lowerLeg2S" + "hape"];
        this["_session"]["particleCo" + "ntroller"]["createBloo" + "dBurst"](0x5, 0xf, this["lowerLeg2B" + "ody"], 0x32, new j['RM'](0x0, 0x5 * Y["scaleY"] / this['character_' + "scale"]), this["_session"]["containerS" + 'prite']);
        0x2 == this["lowerLeg2M" + 'C']["currentFra" + 'me'] ? this["lowerLeg2M" + 'C']["gotoAndSto" + 'p'](0x4) : this["lowerLeg2M" + 'C']["gotoAndSto" + 'p'](0x3);
        var v = Math["ceil"](0x4 * Math["random"]());
        B['m']["instance"]["playAreaSo" + "undInstanc" + 'e']("BoneBreak" + v, this["lowerLeg2B" + "ody"]);
        this['addVocals']("Foot2", 0x0);
      } else {
        V = h;
        C = 0x1;
        j = P;
      }
    };
    H['torsoBreak'] = function (b, Z, X) {
      void 0x0 === Z && (Z = !0x0);
      void 0x0 === X && (X = !0x0);
      this['waistJoint']["broken"] = !0x0;
      this["_dying"] = !0x0;
      this["_session"]["m_world"]['DestroyJoi' + 'nt'](this["waistJoint"]);
      this["chestMC"]["gotoAndSto" + 'p'](0x2);
      this["pelvisMC"]['wound']["visible"] = !0x0;
      this["pelvisShap" + 'e']['m_userData'] != g['GRIND_STAT' + 'E'] && (this["pelvisBody"]["GetShapeLi" + 'st']()["SetFilterD" + "ata"](this["lowerBodyF" + "ilter"]), this['_session']["m_world"]["Refilter"](this["pelvisBody"]["GetShapeLi" + 'st']()));
      var x = this["upperLeg1B" + "ody"]["GetShapeLi" + 'st']();
      -0x3 != x["m_filter"]["groupIndex"] && (x["SetFilterD" + "ata"](this["lowerBodyF" + "ilter"]), this['session']["m_world"]["Refilter"](x));
      -0x3 != (x = this["upperLeg2B" + "ody"]["GetShapeLi" + 'st']())["m_filter"]["groupIndex"] && (x["SetFilterD" + "ata"](this["lowerBodyF" + "ilter"]), this["session"]["m_world"]["Refilter"](x));
      this["lowerLeg1B" + "ody"]["GetShapeLi" + 'st']()["SetFilterD" + "ata"](this["lowerBodyF" + "ilter"]);
      this["lowerLeg2B" + "ody"]["GetShapeLi" + 'st']()["SetFilterD" + 'ata'](this["lowerBodyF" + 'ilter']);
      this["_session"]["m_world"]["Refilter"](this["lowerLeg1B" + "ody"]["GetShapeLi" + 'st']());
      this["_session"]["m_world"]["Refilter"](this["lowerLeg2B" + "ody"]["GetShapeLi" + 'st']());
      if (b < this['intestineL' + "imit"] && this['chestShape']["m_userData"] != g['GRIND_STAT' + 'E'] && this['pelvisShap' + 'e']['m_userData'] != g["GRIND_STAT" + 'E']) {
        var w = this["intestineL" + 'imit'] - this["torsoBreak" + "Limit"];
        var Y = b - this["torsoBreak" + "Limit"];
        var v = w / 0x8;
        var L = Math["ceil"](Y / v) + 0x1;
        this["intestineC" + "hain"] = new E['h'](this, L, this["intestineL" + "ength"]);
        this["composites"]['push'](this['intestineC' + "hain"]);
      }
      Z && this["chestShape"]["m_userData"] != g["GRIND_STAT" + 'E'] && (this["stomachBlo" + "odFlow"] = this['_session']['particleCo' + "ntroller"]["createBloo" + "dFlow"](0x2, 0x3, this['chestBody'], new j['RM'](0x0, 0x0), 0x5a, 0x1f4, this['_session']['containerS' + "prite"], this["_session"]["containerS" + "prite"]["getChildIn" + 'dex'](this["chestMC"])));
      X && B['m']["instance"]["playAreaSo" + "undInstanc" + 'e']("LimbRip1", this["pelvisBody"]);
      this["addVocals"]("Torso", 0x5);
    };
    H["neckBreak"] = function (b, Z, X) {
      void 0x0 === Z && (Z = !0x0);
      void 0x0 === X && (X = !0x0);
      this["dead"] = !0x0;
      this['neckJoint']["broken"] = !0x0;
      this['_session']['m_world']["DestroyJoi" + 'nt'](this["neckJoint"]);
      this["head1MC"]["gotoAndSto" + 'p'](0x2);
      this["chestMC"]["neck"]['visible'] = !0x0;
      this["head1Shape"]["m_userData"] != g["GRIND_STAT" + 'E'] && (this["head1Body"]["GetShapeLi" + 'st']()["SetFilterD" + "ata"](this["zeroFilter"]), this["_session"]["m_world"]["Refilter"](this["head1Body"]["GetShapeLi" + 'st']()), this["headBloodF" + "low"] = this["_session"]['particleCo' + 'ntroller']["createBloo" + "dFlow"](2.5, 0x4, this["head1Body"], new j['RM'](0x0, 0x0), 0x5a, 0x96, this["_session"]["containerS" + "prite"], this["_session"]["containerS" + "prite"]["getChildIn" + "dex"](this["head1MC"])));
      if (Z && this["chestShape"]["m_userData"] != g["GRIND_STAT" + 'E']) {
        if ("Wxced" === "Wxced") {
          var x = this["shapeGuide"]["spineAncho" + 'r'];
          this["neckBloodF" + 'low'] = this['_session']["particleCo" + "ntroller"]["createBloo" + "dFlow"](2.5, 0x4, this["chestBody"], new j['RM'](x['x'] / this["character_" + "scale"], x['y'] / this["character_" + "scale"]), 0x10e, 0x1f4, this["_session"]["containerS" + "prite"], this["_session"]['containerS' + "prite"]["getChildIn" + "dex"](this['chestMC']));
        } else {
          var O = V[v];
          O["enumerable"] = O["enumerable"] || !0x1;
          O['configurab' + 'le'] = !0x0;
          "value" in O && (O["writable"] = !0x0);
          C["defineProp" + "erty"](j, P(O["key"]), O);
        }
      }
      if (b < this["spineLimit"] && this["chestShape"]["m_userData"] != g["GRIND_STAT" + 'E'] && this["head1Shape"]["m_userData"] != g["GRIND_STAT" + 'E']) {
        if ("aiEVB" !== "LVpBq") {
          var w = this["spineLimit"] - this["neckBreakL" + "imit"];
          var Y = b - this["neckBreakL" + "imit"];
          var v = w / 0x9;
          var L = Math["ceil"](Y / v) + 0x1;
          this["spinalChor" + 'd'] = new E['e1'](this, L, this["ligamentLe" + "ngth"]);
          this["composites"]["push"](this["spinalChor" + 'd']);
        } else {
          var G = F["call"](T, 'string');
          if ("object" != typeof G) {
            return G;
          }
          throw new V("@@toPrimit" + 'ive\x20must\x20r' + "eturn a pr" + 'imitive\x20va' + "lue.");
        }
      }
      X && B['m']["instance"]["playAreaSo" + "undInstanc" + 'e']("NeckBreak", this["head1Body"]);
    };
    H["shoulderBr" + "eak1"] = function (b, Z) {
      void 0x0 === Z && (Z = !0x0);
      this['shoulderJo' + "int1"]["broken"] = !0x0;
      this['trackLimbL' + "ost"]("arm1");
      if (b > this["shoulderSn" + "apLimit"]) {
        this["_session"]["m_world"]["DestroyJoi" + 'nt'](this['shoulderJo' + "int1"]);
        var X = this['upperArm1B' + "ody"]['GetShapeLi' + 'st']();
        X["SetFilterD" + "ata"](this['zeroFilter']);
        X["SetMateria" + 'l'](0x2);
        X["SetUserDat" + 'a'](this);
        this["_session"]["m_world"]["Refilter"](X);
        (X = this["lowerArm1B" + 'ody']["GetShapeLi" + 'st']())["SetFilterD" + "ata"](this["zeroFilter"]);
        this["_session"]['m_world']["Refilter"](X);
        0x5 == this["upperArm1M" + 'C']["currentFra" + 'me'] ? this["upperArm1M" + 'C']["gotoAndSto" + 'p'](0x7) : this["upperArm1M" + 'C']["gotoAndSto" + 'p'](0x4);
        this["chestMC"]["wound"]["visible"] = !0x0;
        if (Z && this["chestShape"]['m_userData'] != g["GRIND_STAT" + 'E']) {
          if ("qQaLH" === "poejI") {
            for (var Q = 0x0; Q < V["length"]; Q++) {
              var q0 = p[Q];
              q0["enumerable"] = q0["enumerable"] || !0x1;
              q0["configurab" + 'le'] = !0x0;
              "value" in q0 && (q0['writable'] = !0x0);
              K["defineProp" + "erty"](m, I(q0["key"]), q0);
            }
          } else {
            var x = this["chestMC"]["wound"];
            this["shoulder1B" + "loodFlow"] = this["_session"]["particleCo" + "ntroller"]['createBloo' + "dFlow"](0x0, 0x1, this["chestBody"], new j['RM'](x['x'] / this["character_" + 'scale'], x['y'] / this["character_" + "scale"]), 0x10e, 0x1f4, this["_session"]["containerS" + "prite"], this["_session"]["containerS" + "prite"]["getChildIn" + "dex"](this["upperArm1M" + 'C']));
            B['m']["instance"]['playAreaSo' + "undInstanc" + 'e']("LimbRip2", this["upperArm1B" + "ody"]);
          }
        }
        x = this["shapeGuide"]['upperArm1S' + "hape"];
        this["arm1BloodF" + "low"] = this["_session"]["particleCo" + "ntroller"]["createBloo" + "dFlow"](0x1, 0x3, this["upperArm1B" + "ody"], new j['RM'](0x0, x["scaleY"] * -this['shapeRefSc' + "ale"] / this["character_" + "scale"]), 0x10e, 0xc8, this["_session"]["containerS" + "prite"], this["_session"]["containerS" + 'prite']["getChildIn" + "dex"](this["upperArm1M" + 'C']));
        this["addVocals"]("Shoulder1", 0x3);
      } else {
        var w = new j['gv']();
        var Y = new j['m2']();
        this['upperArm3M' + 'C']["visible"] = !0x0;
        w["userData"] = this["upperArm3M" + 'C'];
        var v = this["shoulderJo" + "int1"]["GetAnchor1"]();
        w['position']["Set"](v['x'], v['y']);
        w["angle"] = this["upperArm1B" + "ody"]["GetAngle"]();
        var L = this["shapeGuide"]["sevArm1Sha" + 'pe'];
        Y["density"] = 0x1;
        Y["friction"] = 0.3;
        Y["restitutio" + 'n'] = 0.1;
        Y["filter"] = this["defaultFil" + "ter"];
        Y['SetAsOrien' + "tedBox"](L['scaleX'] * this["shapeRefSc" + "ale"] / this["character_" + "scale"], L["scaleY"] * this["shapeRefSc" + "ale"] / this["character_" + "scale"], new j['RM'](0x0, L['y'] / this["character_" + "scale"]), 0x0);
        this["upperArm3B" + "ody"] = this["_session"]["m_world"]["CreateBody"](w);
        this["upperArm3B" + 'ody']["CreateShap" + 'e'](Y);
        this["upperArm3B" + "ody"]['SetMassFro' + "mShapes"]();
        this["upperArm3B" + "ody"]["SetLinearV" + "elocity"](this['upperArm1B' + "ody"]["GetLinearV" + "elocity"]());
        this["upperArm3B" + "ody"]["SetAngular" + "Velocity"](this["upperArm1B" + "ody"]["GetAngular" + 'Velocity']());
        this["paintVecto" + 'r']['push'](this["upperArm3B" + 'ody']);
        this["_session"]['m_world']["DestroyJoi" + 'nt'](this["shoulderJo" + "int1"]);
        this["shoulderJo" + "int1"] = null;
        var U = new j['Gq']();
        U["enableLimi" + 't'] = !0x0;
        U["maxMotorTo" + "rque"] = 0x4;
        var O = this["upperArm3B" + "ody"]["GetAngle"]() - this["chestBody"]["GetAngle"]();
        U["lowerAngle"] = -0xb4 / (0xb4 / Math['PI']) - O;
        U["upperAngle"] = 0x3c / (0xb4 / Math['PI']) - O;
        U["Initialize"](this["chestBody"], this["upperArm3B" + 'ody'], v);
        this["shoulderJo" + "int1"] = this['_session']["m_world"]["CreateJoin" + 't'](U);
        this["shoulderJo" + "int1"]["broken"] = !0x0;
        (X = this["upperArm1B" + "ody"]["GetShapeLi" + 'st']())["SetFilterD" + "ata"](this["zeroFilter"]);
        X["SetMateria" + 'l'](0x2);
        X["SetUserDat" + 'a'](this);
        this['_session']["m_world"]['Refilter'](X);
        (X = this["lowerArm1B" + "ody"]["GetShapeLi" + 'st']())["SetFilterD" + "ata"](this["zeroFilter"]);
        this["_session"]["m_world"]["Refilter"](X);
        0x5 == this["upperArm1M" + 'C']["currentFra" + 'me'] ? this['upperArm1M' + 'C']["gotoAndSto" + 'p'](0x6) : this["upperArm1M" + 'C']["gotoAndSto" + 'p'](0x3);
        this["upperArm3M" + 'C']["gotoAndSto" + 'p'](0x2);
        Z && (this["shoulder1B" + "loodFlow"] = this["_session"]["particleCo" + "ntroller"]["createBloo" + 'dFlow'](0x1, 0x3, this["upperArm3B" + "ody"], new j['RM'](0x0, 0x0), 0x5a, 0xc8, this["_session"]["containerS" + "prite"], this["_session"]["containerS" + 'prite']["getChildIn" + "dex"](this["upperArm1M" + 'C'])), B['m']["instance"]["playAreaSo" + "undInstanc" + 'e']("LimbRip2", this["upperArm1B" + "ody"]));
        this["addVocals"]("Shoulder1", 0x3);
      }
      this["vehicleArm" + "1Joint"] && (this["_session"]["m_world"]['DestroyJoi' + 'nt'](this['vehicleArm' + "1Joint"]), this["vehicleArm" + "1Joint"] = null, null == this['vehicleArm' + "2Joint"] && this["userVehicl" + 'eEject']());
    };
    H["shoulderBr" + 'eak2'] = function (b, Z) {
      if ("QfLhn" !== "lwUEF") {
        void 0x0 === Z && (Z = !0x0);
        this["shoulderJo" + "int2"]["broken"] = !0x0;
        this["trackLimbL" + 'ost']("arm2");
        if (b > this["shoulderSn" + "apLimit"]) {
          if ("zpCoJ" !== "QLgYG") {
            this["_session"]["m_world"]["DestroyJoi" + 'nt'](this["shoulderJo" + "int2"]);
            var X = this["upperArm2B" + "ody"]["GetShapeLi" + 'st']();
            X["SetFilterD" + "ata"](this["zeroFilter"]);
            X["SetMateria" + 'l'](0x2);
            X["SetUserDat" + 'a'](this);
            this["_session"]["m_world"]["Refilter"](X);
            (X = this["lowerArm2B" + "ody"]["GetShapeLi" + 'st']())['SetFilterD' + "ata"](this["zeroFilter"]);
            this["_session"]["m_world"]["Refilter"](X);
            0x5 == this["upperArm2M" + 'C']["currentFra" + 'me'] ? this["upperArm2M" + 'C']["gotoAndSto" + 'p'](0x7) : this['upperArm2M' + 'C']["gotoAndSto" + 'p'](0x4);
            if (Z && this["chestShape"]["m_userData"] != g["GRIND_STAT" + 'E']) {
              var x = this["chestMC"]["wound"];
              this["shoulder2B" + "loodFlow"] = this['_session']["particleCo" + 'ntroller']["createBloo" + "dFlow"](0x0, 0x1, this["chestBody"], new j['RM'](x['x'] / this["character_" + "scale"], x['y'] / this["character_" + "scale"]), 0x10e, 0x1f4, this["session"]["containerS" + "prite"], this['session']["containerS" + "prite"]["getChildIn" + "dex"](this["upperArm2M" + 'C']));
              B['m']["instance"]["playAreaSo" + "undInstanc" + 'e']("LimbRip2", this["upperArm2B" + "ody"]);
            }
            x = this["shapeGuide"]["upperArm2S" + "hape"];
            this['arm2BloodF' + 'low'] = this["_session"]["particleCo" + "ntroller"]['createBloo' + "dFlow"](0x1, 0x3, this["upperArm2B" + "ody"], new j['RM'](0x0, x["scaleY"] * -this["shapeRefSc" + "ale"] / this["character_" + "scale"]), 0x10e, 0xc8, this['_session']["containerS" + "prite"], this["_session"]["containerS" + "prite"]["getChildIn" + "dex"](this["chestMC"]));
            this["addVocals"]("Shoulder2", 0x3);
          } else {
            return w["round"](0x64 * this["scaleY"]);
          }
        } else {
          var w = new j['gv']();
          var Y = new j['m2']();
          this["upperArm4M" + 'C']["visible"] = !0x0;
          w["userData"] = this['upperArm4M' + 'C'];
          var v = this["shoulderJo" + "int2"]['GetAnchor1']();
          w["position"]["Set"](v['x'], v['y']);
          w["angle"] = this["upperArm2B" + "ody"]["GetAngle"]();
          var L = this["shapeGuide"]['sevArm1Sha' + 'pe'];
          Y["density"] = 0x1;
          Y["friction"] = 0.3;
          Y["restitutio" + 'n'] = 0.1;
          Y["filter"] = this["defaultFil" + "ter"];
          Y['SetAsOrien' + 'tedBox'](L['scaleX'] * this["shapeRefSc" + "ale"] / this["character_" + 'scale'], L['scaleY'] * this['shapeRefSc' + "ale"] / this["character_" + "scale"], new j['RM'](0x0, L['y'] / this["character_" + "scale"]), 0x0);
          this["upperArm4B" + "ody"] = this["_session"]["m_world"]["CreateBody"](w);
          this["upperArm4B" + 'ody']["CreateShap" + 'e'](Y);
          this['upperArm4B' + "ody"]["SetMassFro" + "mShapes"]();
          this['upperArm4B' + "ody"]["SetLinearV" + "elocity"](this["upperArm2B" + 'ody']["GetLinearV" + "elocity"]());
          this['upperArm4B' + "ody"]["SetAngular" + "Velocity"](this["upperArm2B" + "ody"]["GetAngular" + "Velocity"]());
          this["paintVecto" + 'r']["push"](this["upperArm4B" + "ody"]);
          this["_session"]["m_world"]["DestroyJoi" + 'nt'](this["shoulderJo" + 'int2']);
          this["shoulderJo" + "int2"] = null;
          var U = new j['Gq']();
          U["enableLimi" + 't'] = !0x0;
          U["maxMotorTo" + "rque"] = 0x4;
          var O = this["upperArm4B" + "ody"]["GetAngle"]() - this["chestBody"]["GetAngle"]();
          U["lowerAngle"] = -0xb4 / (0xb4 / Math['PI']) - O;
          U['upperAngle'] = 0x3c / (0xb4 / Math['PI']) - O;
          U["Initialize"](this["chestBody"], this["upperArm4B" + "ody"], v);
          this['shoulderJo' + 'int2'] = this["_session"]["m_world"]["CreateJoin" + 't'](U);
          this["shoulderJo" + "int2"]["broken"] = !0x0;
          (X = this["upperArm2B" + "ody"]["GetShapeLi" + 'st']())["SetFilterD" + "ata"](this['zeroFilter']);
          X["SetMateria" + 'l'](0x2);
          X["SetUserDat" + 'a'](this);
          this["_session"]["m_world"]['Refilter'](X);
          (X = this["lowerArm2B" + "ody"]['GetShapeLi' + 'st']())["SetFilterD" + "ata"](this['zeroFilter']);
          this["_session"]["m_world"]["Refilter"](X);
          0x5 == this['upperArm2M' + 'C']["currentFra" + 'me'] ? this["upperArm2M" + 'C']["gotoAndSto" + 'p'](0x6) : this["upperArm2M" + 'C']["gotoAndSto" + 'p'](0x3);
          this["upperArm4M" + 'C']["gotoAndSto" + 'p'](0x2);
          Z && (this["shoulder2B" + 'loodFlow'] = this["_session"]["particleCo" + "ntroller"]['createBloo' + "dFlow"](0x1, 0x3, this['upperArm4B' + "ody"], new j['RM'](0x0, 0x0), 0x5a, 0xc8, this["_session"]["containerS" + 'prite'], this["_session"]["containerS" + 'prite']["getChildIn" + "dex"](this["upperArm2M" + 'C'])), B['m']["instance"]["playAreaSo" + "undInstanc" + 'e']("LimbRip2", this["upperArm2B" + "ody"]));
          this["addVocals"]("Shoulder2", 0x3);
        }
        this["vehicleArm" + "2Joint"] && (this["_session"]['m_world']["DestroyJoi" + 'nt'](this["vehicleArm" + "2Joint"]), this["vehicleArm" + "2Joint"] = null, null == this["vehicleArm" + "1Joint"] && this["userVehicl" + 'eEject']());
      } else {
        V["online"] = h["slice"]()["sort"](C["compare"]);
        for (var q0, q1 = j(P["listeners"]["slice"]()); !(q0 = q1())["done"];) {
          (0x0, q0["value"])();
        }
      }
    };
    H["elbowBreak" + '1'] = function (b) {
      this["elbowJoint" + '1']["broken"] = !0x0;
      this["_session"]['m_world']['DestroyJoi' + 'nt'](this["elbowJoint" + '1']);
      this["lowerArm1B" + "ody"]['GetShapeLi' + 'st']()["SetFilterD" + "ata"](this["zeroFilter"]);
      this["_session"]["m_world"]["Refilter"](this["lowerArm1B" + "ody"]["GetShapeLi" + 'st']());
      this["lowerArm1M" + 'C']["gotoAndSto" + 'p'](0x2);
      switch (this['upperArm1M' + 'C']["currentFra" + 'me']) {
        case 0x3:
          this["upperArm1M" + 'C']["gotoAndSto" + 'p'](0x6);
          break;
        case 0x4:
          this["upperArm1M" + 'C']["gotoAndSto" + 'p'](0x7);
          break;
        default:
          this['upperArm1M' + 'C']["gotoAndSto" + 'p'](0x5);
      }
      this['lowerArm1M' + 'C']["gotoAndSto" + 'p'](0x2);
      var Z = this['shapeGuide']["lowerArm1S" + "hape"];
      this["_session"]["particleCo" + "ntroller"]["createBloo" + "dBurst"](0x5, 0xf, this['lowerArm1B' + "ody"], 0x32, new j['RM'](0x0, Z["scaleY"] * -this['shapeRefSc' + "ale"] / this["character_" + "scale"]), this['_session']["containerS" + "prite"]);
      b < this["elbowLigam" + "entLimit"] ? (this['elbowLigam' + "ent1"] = new E['i$'](this["upperArm1B" + "ody"], this["lowerArm1B" + "ody"], this["ligamentLe" + "ngth"], this["character_" + 'scale'], this), this["composites"]['push'](this["elbowLigam" + "ent1"])) : this["trackLimbL" + 'ost']("arm1");
      var X = Math["ceil"](0x4 * Math["random"]());
      B['m']["instance"]["playAreaSo" + "undInstanc" + 'e']('BoneBreak' + X, this["lowerArm1B" + "ody"]);
      this['addVocals']("Elbow1", 0x1);
      this["vehicleArm" + '1Joint'] && (this['_session']["m_world"]["DestroyJoi" + 'nt'](this["vehicleArm" + "1Joint"]), this["vehicleArm" + '1Joint'] = null, null == this["vehicleArm" + "2Joint"] && this["userVehicl" + "eEject"]());
    };
    H["elbowBreak" + '2'] = function (b) {
      this['elbowJoint' + '2']["broken"] = !0x0;
      this["_session"]["m_world"]["DestroyJoi" + 'nt'](this["elbowJoint" + '2']);
      this["lowerArm2B" + "ody"]["GetShapeLi" + 'st']()["SetFilterD" + "ata"](this["zeroFilter"]);
      this["_session"]["m_world"]["Refilter"](this["lowerArm2B" + 'ody']["GetShapeLi" + 'st']());
      this["lowerArm2M" + 'C']["gotoAndSto" + 'p'](0x2);
      switch (this["upperArm2M" + 'C']["currentFra" + 'me']) {
        case 0x3:
          this["upperArm2M" + 'C']["gotoAndSto" + 'p'](0x6);
          break;
        case 0x4:
          this['upperArm2M' + 'C']["gotoAndSto" + 'p'](0x7);
          break;
        default:
          this['upperArm2M' + 'C']["gotoAndSto" + 'p'](0x5);
      }
      this['lowerArm2M' + 'C']["gotoAndSto" + 'p'](0x2);
      var Z = this["shapeGuide"]["lowerArm2S" + "hape"];
      this["_session"]['particleCo' + "ntroller"]["createBloo" + "dBurst"](0x5, 0xf, this["lowerArm2B" + "ody"], 0x32, new j['RM'](0x0, Z["scaleY"] * -this["shapeRefSc" + "ale"] / this["character_" + "scale"]), this["_session"]["containerS" + "prite"]);
      b < this["elbowLigam" + "entLimit"] ? (this["elbowLigam" + "ent2"] = new E['i$'](this["upperArm2B" + 'ody'], this['lowerArm2B' + "ody"], this["ligamentLe" + "ngth"], this["character_" + "scale"], this), this["composites"]['push'](this["elbowLigam" + "ent2"])) : this["trackLimbL" + 'ost']('arm2');
      var X = Math["ceil"](0x4 * Math["random"]());
      B['m']["instance"]["playAreaSo" + "undInstanc" + 'e']('BoneBreak' + X, this["lowerArm2B" + "ody"]);
      this["addVocals"]("Elbow2", 0x1);
      this["vehicleArm" + "2Joint"] && (this['_session']["m_world"]["DestroyJoi" + 'nt'](this["vehicleArm" + "2Joint"]), this["vehicleArm" + "2Joint"] = null, null == this["vehicleArm" + '1Joint'] && this["userVehicl" + 'eEject']());
    };
    H["hipBreak1"] = function (b, Z) {
      if ("lpFyN" !== 'vQWLx') {
        void 0x0 === Z && (Z = !0x0);
        this["hipJoint1"]["broken"] = !0x0;
        this["trackLimbL" + "ost"]("leg1");
        if (b > this["hipSnapLim" + 'it']) {
          if ("oZXID" !== "oZXID") {
            this["expand"](T);
            this["buffer"][V + this["endianStr"]](v, this["position"], !0x0);
            this['position'] += C;
          } else {
            this['_session']["m_world"]["DestroyJoi" + 'nt'](this["hipJoint1"]);
            var X = this['upperLeg1B' + 'ody']["GetShapeLi" + 'st']();
            X["SetFilterD" + "ata"](this["zeroFilter"]);
            X['SetMateria' + 'l'](0x2);
            X["m_isSensor"] = !0x1;
            X["SetUserDat" + 'a'](this);
            this["_session"]["m_world"]["Refilter"](X);
            (X = this["lowerLeg1B" + "ody"]["GetShapeLi" + 'st']())["SetFilterD" + "ata"](this["zeroFilter"]);
            this["_session"]["m_world"]["Refilter"](X);
            0x5 == this["upperLeg1M" + 'C']["currentFra" + 'me'] ? this["upperLeg1M" + 'C']["gotoAndSto" + 'p'](0x7) : this["upperLeg1M" + 'C']["gotoAndSto" + 'p'](0x4);
            this["pelvisMC"]['gotoAndSto' + 'p'](0x2);
            Z && this["pelvisShap" + 'e']['m_userData'] != g["GRIND_STAT" + 'E'] && (this["hip1BloodF" + "low"] = this["_session"]["particleCo" + "ntroller"]["createBloo" + "dFlow"](0x0, 0x1, this["pelvisBody"], new j['RM'](0x0, 0x0), 0x5a, 0x1f4, this["_session"]["containerS" + "prite"], this["_session"]["containerS" + "prite"]["getChildIn" + "dex"](this["upperLeg1M" + 'C'])), B['m']["instance"]["playAreaSo" + 'undInstanc' + 'e']("LimbRip3", this["upperLeg1B" + "ody"]));
            var x = this["shapeGuide"]["upperLeg1S" + "hape"];
            this['thigh1Bloo' + "dFlow"] = this["_session"]["particleCo" + "ntroller"]["createBloo" + "dFlow"](0x1, 0x3, this["upperLeg1B" + "ody"], new j['RM'](0x0, x["scaleY"] * -this["shapeRefSc" + "ale"] / this["character_" + "scale"]), 0x10e, 0xc8, this["_session"]["containerS" + 'prite'], this['_session']["containerS" + 'prite']["getChildIn" + "dex"](this["upperLeg1M" + 'C']));
            this["addVocals"]("Hip1", 0x4);
          }
        } else {
          var w = new j['gv']();
          var Y = new j['m2']();
          this["upperLeg3M" + 'C']["visible"] = !0x0;
          w["userData"] = this["upperLeg3M" + 'C'];
          var v = this["hipJoint1"]["GetAnchor1"]();
          w['position']["Set"](v['x'], v['y']);
          w["angle"] = this["upperLeg1B" + "ody"]["GetAngle"]();
          var L = this["shapeGuide"]["sevLeg1Sha" + 'pe'];
          Y["density"] = 0x1;
          Y["friction"] = 0.3;
          Y["restitutio" + 'n'] = 0.1;
          Y["filter"] = this["defaultFil" + "ter"];
          Y["SetAsOrien" + "tedBox"](L["scaleX"] * this['shapeRefSc' + "ale"] / this["character_" + "scale"], L["scaleY"] * this["shapeRefSc" + "ale"] / this['character_' + "scale"], new j['RM'](0x0, L['y'] / this["character_" + "scale"]), 0x0);
          this["upperLeg3B" + "ody"] = this["_session"]["m_world"]["CreateBody"](w);
          this["upperLeg3B" + "ody"]["CreateShap" + 'e'](Y);
          this["upperLeg3B" + "ody"]["SetMassFro" + "mShapes"]();
          this["upperLeg3B" + "ody"]["SetLinearV" + "elocity"](this["upperLeg1B" + "ody"]["GetLinearV" + "elocity"]());
          this["upperLeg3B" + "ody"]["SetAngular" + "Velocity"](this["upperLeg1B" + "ody"]["GetAngular" + "Velocity"]());
          this["paintVecto" + 'r']["push"](this['upperLeg3B' + "ody"]);
          this["_session"]["m_world"]["DestroyJoi" + 'nt'](this["hipJoint1"]);
          this["hipJoint1"] = null;
          var U = new j['Gq']();
          U["enableLimi" + 't'] = !0x0;
          U["maxMotorTo" + "rque"] = 0x4;
          var O = this["upperLeg3B" + "ody"]['GetAngle']() - this["pelvisBody"]["GetAngle"]();
          U["lowerAngle"] = -0x96 / (0xb4 / Math['PI']) - O;
          U["upperAngle"] = 0xa / (0xb4 / Math['PI']) - O;
          U["Initialize"](this["pelvisBody"], this["upperLeg3B" + 'ody'], v);
          this["hipJoint1"] = this["_session"]["m_world"]["CreateJoin" + 't'](U);
          this["hipJoint1"]["broken"] = !0x0;
          L = this["shapeGuide"]["sevLeg2Sha" + 'pe'];
          this["upperLeg1B" + "ody"]["DestroySha" + 'pe'](this['upperLeg1B' + "ody"]["GetShapeLi" + 'st']());
          Y['filter'] = this['zeroFilter'];
          Y["userData"] = 0x1;
          Y["SetAsOrien" + 'tedBox'](L["scaleX"] * this["shapeRefSc" + 'ale'] / this["character_" + "scale"], L['scaleY'] * this["shapeRefSc" + "ale"] / this["character_" + "scale"], new j['RM'](0x0, L['y'] / this["character_" + "scale"]), 0x0);
          this["upperLeg1B" + "ody"]["CreateShap" + 'e'](Y);
          this["upperLeg1B" + "ody"]["SetMassFro" + "mShapes"]();
          this["lowerLeg1B" + "ody"]["GetShapeLi" + 'st']()["SetFilterD" + "ata"](this["zeroFilter"]);
          this["_session"]['m_world']["Refilter"](this['lowerLeg1B' + "ody"]["GetShapeLi" + 'st']());
          0x5 == this["upperLeg1M" + 'C']["currentFra" + 'me'] ? this["upperLeg1M" + 'C']["gotoAndSto" + 'p'](0x6) : this['upperLeg1M' + 'C']["gotoAndSto" + 'p'](0x3);
          this["upperLeg3M" + 'C']["gotoAndSto" + 'p'](0x2);
          Z && (this["hip1BloodF" + "low"] = this["_session"]["particleCo" + "ntroller"]["createBloo" + "dFlow"](0x1, 0x3, this["upperLeg3B" + 'ody'], new j['RM'](0x0, 0x0), 0x5a, 0xc8, this["_session"]["containerS" + 'prite'], this['_session']["containerS" + "prite"]["getChildIn" + 'dex'](this["upperLeg3M" + 'C'])), B['m']["instance"]['playAreaSo' + "undInstanc" + 'e']('LimbRip3', this["upperLeg1B" + "ody"]));
          x = this["shapeGuide"]["sevLeg2Sha" + 'pe'];
          this['thigh1Bloo' + "dFlow"] = this["_session"]["particleCo" + 'ntroller']['createBloo' + "dFlow"](0x1, 0x3, this["upperLeg1B" + 'ody'], new j['RM'](0x0, 0x0), 0x10e, 0xc8, this['_session']["containerS" + "prite"], this["_session"]["containerS" + "prite"]['getChildIn' + 'dex'](this["upperLeg1M" + 'C']));
          this["addVocals"]("Hip1", 0x4);
        }
      } else {
        var q0 = this["shockJoint"]["GetMotorSp" + "eed"]();
        q0 > 0x0 ? this["shockJoint"]["GetJointTr" + 'anslation']() > this['jumpTransl' + "ation"] && this['shockJoint']["SetMotorSp" + "eed"](-0x1) : q0 < 0x0 && this["shockJoint"]["GetJointTr" + "anslation"]() < 0x0 && (this["shockJoint"]["EnableMoto" + 'r'](!0x1), this["shockJoint"]["SetLimits"](0x0, 0x0), this["shockJoint"]["SetMotorSp" + "eed"](0x0));
      }
    };
    H["hipBreak2"] = function (b, Z) {

      void 0x0 === Z && (Z = !0x0);
      this["hipJoint2"]["broken"] = !0x0;
      this["trackLimbL" + "ost"]("leg2");
      if (b > this["hipSnapLim" + 'it']) {
        this["_session"]["m_world"]["DestroyJoi" + 'nt'](this["hipJoint2"]);
        var X = this["upperLeg2B" + "ody"]['GetShapeLi' + 'st']();
        X["SetFilterD" + "ata"](this["zeroFilter"]);
        X["SetMateria" + 'l'](0x2);
        X["m_isSensor"] = !0x1;
        X['SetUserDat' + 'a'](this);
        this["_session"]["m_world"]["Refilter"](X);
        X = this["lowerLeg2B" + "ody"]["GetShapeLi" + 'st']();
        (X = this["lowerLeg2B" + "ody"]['GetShapeLi' + 'st']())["SetFilterD" + "ata"](this["zeroFilter"]);
        this["_session"]["m_world"]["Refilter"](X);
        0x5 == this["upperLeg2M" + 'C']["currentFra" + 'me'] ? this['upperLeg2M' + 'C']["gotoAndSto" + 'p'](0x7) : this["upperLeg2M" + 'C']["gotoAndSto" + 'p'](0x4);
        Z && this["pelvisShap" + 'e']["m_userData"] != g["GRIND_STAT" + 'E'] && (this['hip2BloodF' + "low"] = this["_session"]["particleCo" + "ntroller"]["createBloo" + "dFlow"](0x0, 0x1, this["pelvisBody"], new j['RM'](0x0, 0x0), 0x5a, 0x1f4, this["_session"]["containerS" + "prite"], this["_session"]["containerS" + "prite"]["getChildIn" + "dex"](this['upperLeg2M' + 'C'])), B['m']["instance"]["playAreaSo" + "undInstanc" + 'e']("LimbRip4", this['upperLeg2B' + "ody"]));
        var x = this["shapeGuide"]["upperLeg2S" + "hape"];
        this["thigh2Bloo" + "dFlow"] = this["_session"]["particleCo" + "ntroller"]["createBloo" + "dFlow"](0x1, 0x3, this["upperLeg2B" + "ody"], new j['RM'](0x0, x["scaleY"] * -this["shapeRefSc" + "ale"] / this["character_" + 'scale']), 0x10e, 0xc8, this["_session"]["containerS" + "prite"], this["_session"]["containerS" + "prite"]["getChildIn" + "dex"](this["upperLeg2M" + 'C']));
        this["addVocals"]("Hip2", 0x4);
      } else {
        if ("lHCBC" === "maREQ") {
          var Q = function (q0) {
            if ("object" != typeof q0 || !q0) {
              return q0;
            }
            var q1 = q0[Q["toPrimitiv" + 'e']];
            if (void 0x0 !== q1) {
              var q2 = q1["call"](q0, "string");
              if ("object" != typeof q2) {
                return q2;
              }
              throw new K('@@toPrimit' + 'ive\x20must\x20r' + "eturn a pr" + "imitive va" + "lue.");
            }
            return O(q0);
          }(C);
          return "symbol" == typeof Q ? Q : Q + '';
        } else {
          var w = new j['gv']();
          var Y = new j['m2']();
          this["upperLeg4M" + 'C']["visible"] = !0x0;
          w["userData"] = this["upperLeg4M" + 'C'];
          var v = this["hipJoint2"]['GetAnchor1']();
          w["position"]['Set'](v['x'], v['y']);
          w["angle"] = this["upperLeg2B" + 'ody']["GetAngle"]();
          var L = this['shapeGuide']["sevLeg1Sha" + 'pe'];
          Y["density"] = 0x1;
          Y["friction"] = 0.3;
          Y["restitutio" + 'n'] = 0.1;
          Y["filter"] = this["defaultFil" + "ter"];
          Y['SetAsOrien' + "tedBox"](L["scaleX"] * this["shapeRefSc" + "ale"] / this["character_" + "scale"], L["scaleY"] * this['shapeRefSc' + "ale"] / this['character_' + "scale"], new j['RM'](0x0, L['y'] / this["character_" + "scale"]), 0x0);
          this["upperLeg4B" + "ody"] = this["_session"]["m_world"]["CreateBody"](w);
          this["upperLeg4B" + "ody"]["CreateShap" + 'e'](Y);
          this["upperLeg4B" + 'ody']["SetMassFro" + "mShapes"]();
          this["upperLeg4B" + "ody"]['SetLinearV' + "elocity"](this["upperLeg2B" + "ody"]["GetLinearV" + 'elocity']());
          this["upperLeg4B" + "ody"]["SetAngular" + "Velocity"](this["upperLeg2B" + "ody"]["GetAngular" + "Velocity"]());
          this["paintVecto" + 'r']['push'](this["upperLeg4B" + "ody"]);
          this["_session"]["m_world"]['DestroyJoi' + 'nt'](this['hipJoint2']);
          this["hipJoint2"] = null;
          var U = new j['Gq']();
          U["enableLimi" + 't'] = !0x0;
          U["maxMotorTo" + "rque"] = 0x4;
          var O = this["upperLeg4B" + 'ody']["GetAngle"]() - this["pelvisBody"]["GetAngle"]();
          U["lowerAngle"] = -0x96 / (0xb4 / Math['PI']) - O;
          U['upperAngle'] = 0xa / (0xb4 / Math['PI']) - O;
          U["Initialize"](this["pelvisBody"], this["upperLeg4B" + "ody"], v);
          this["hipJoint2"] = this["_session"]["m_world"]['CreateJoin' + 't'](U);
          this["hipJoint2"]["broken"] = !0x0;
          L = this["shapeGuide"]["sevLeg2Sha" + 'pe'];
          this["upperLeg2B" + "ody"]["DestroySha" + 'pe'](this["upperLeg2B" + "ody"]["GetShapeLi" + 'st']());
          Y["filter"] = this["zeroFilter"];
          Y["userData"] = 0x1;
          Y["SetAsOrien" + "tedBox"](L["scaleX"] * this["shapeRefSc" + "ale"] / this["character_" + 'scale'], L["scaleY"] * this["shapeRefSc" + "ale"] / this["character_" + "scale"], new j['RM'](0x0, L['y'] / this["character_" + "scale"]), 0x0);
          this["upperLeg2B" + 'ody']["CreateShap" + 'e'](Y);
          this["upperLeg2B" + "ody"]["SetMassFro" + 'mShapes']();
          this["lowerLeg2B" + "ody"]["GetShapeLi" + 'st']()['SetFilterD' + "ata"](this["zeroFilter"]);
          this["_session"]["m_world"]["Refilter"](this["lowerLeg2B" + "ody"]["GetShapeLi" + 'st']());
          0x5 == this["upperLeg2M" + 'C']['currentFra' + 'me'] ? this["upperLeg2M" + 'C']["gotoAndSto" + 'p'](0x6) : this["upperLeg2M" + 'C']["gotoAndSto" + 'p'](0x3);
          this["upperLeg4M" + 'C']["gotoAndSto" + 'p'](0x2);
          Z && (this['hip2BloodF' + "low"] = this["_session"]["particleCo" + "ntroller"]["createBloo" + "dFlow"](0x1, 0x3, this["upperLeg4B" + "ody"], new j['RM'](0x0, 0x0), 0x5a, 0xc8, this["_session"]["containerS" + "prite"], this["_session"]["containerS" + "prite"]["getChildIn" + "dex"](this["upperLeg4M" + 'C'])), B['m']["instance"]["playAreaSo" + "undInstanc" + 'e']("LimbRip4", this['upperLeg2B' + "ody"]));
          x = this["shapeGuide"]["sevLeg2Sha" + 'pe'];
          this["thigh2Bloo" + "dFlow"] = this["_session"]["particleCo" + "ntroller"]["createBloo" + "dFlow"](0x1, 0x3, this["upperLeg2B" + "ody"], new j['RM'](0x0, 0x0), 0x10e, 0xc8, this["_session"]["containerS" + "prite"], this['_session']["containerS" + 'prite']["getChildIn" + "dex"](this["upperLeg2M" + 'C']));
          this["addVocals"]("Hip2", 0x4);
        }
      }
    };
    H["kneeBreak1"] = function (b) {
      this["kneeJoint1"]["broken"] = !0x0;
      this["_session"]["m_world"]["DestroyJoi" + 'nt'](this["kneeJoint1"]);
      var Z = this["lowerLeg1B" + "ody"]["GetShapeLi" + 'st']();
      Z["SetFilterD" + "ata"](this['zeroFilter']);
      Z["m_isSensor"] = !0x1;
      this['_session']["m_world"]["Refilter"](Z);
      0x3 == this["lowerLeg1M" + 'C']["currentFra" + 'me'] ? this["lowerLeg1M" + 'C']["gotoAndSto" + 'p'](0x4) : this["lowerLeg1M" + 'C']["gotoAndSto" + 'p'](0x2);
      switch (this['upperLeg1M' + 'C']["currentFra" + 'me']) {
        case 0x3:
          this["upperLeg1M" + 'C']["gotoAndSto" + 'p'](0x6);
          break;
        case 0x4:
          this["upperLeg1M" + 'C']['gotoAndSto' + 'p'](0x7);
          break;
        default:
          this["upperLeg1M" + 'C']["gotoAndSto" + 'p'](0x5);
      }
      var X = this["shapeGuide"]["lowerLeg1S" + "hape"];
      this['_session']["particleCo" + "ntroller"]["createBloo" + "dBurst"](0x5, 0xf, this["lowerLeg1B" + "ody"], 0x32, new j['RM'](0x0, X['scaleY'] * -this["shapeRefSc" + 'ale'] / this["character_" + "scale"]), this["_session"]["containerS" + "prite"]);
      b < this["kneeLigame" + "ntLimit"] ? (this["kneeLigame" + "nt1"] = new E['i$'](this["upperLeg1B" + "ody"], this["lowerLeg1B" + "ody"], this["ligamentLe" + "ngth"], this["character_" + "scale"], this), this['composites']["push"](this['kneeLigame' + "nt1"])) : this["trackLimbL" + "ost"]("leg1");
      var x = Math["ceil"](0x4 * Math["random"]());
      B['m']["instance"]['playAreaSo' + "undInstanc" + 'e']('BoneBreak' + x, this["upperLeg1B" + "ody"]);
      this["addVocals"]("Knee1", 0x2);
    };
    H["kneeBreak2"] = function (b) {
      this["kneeJoint2"]["broken"] = !0x0;
      this["_session"]['m_world']["DestroyJoi" + 'nt'](this['kneeJoint2']);
      var Z = this["lowerLeg2B" + "ody"]['GetShapeLi' + 'st']();
      Z['SetFilterD' + "ata"](this["zeroFilter"]);
      Z['m_isSensor'] = !0x1;
      this["_session"]["m_world"]['Refilter'](Z);
      0x3 == this["lowerLeg2M" + 'C']["currentFra" + 'me'] ? this["lowerLeg2M" + 'C']["gotoAndSto" + 'p'](0x4) : this["lowerLeg2M" + 'C']['gotoAndSto' + 'p'](0x2);
      switch (this["upperLeg2M" + 'C']["currentFra" + 'me']) {
        case 0x3:
          this["upperLeg2M" + 'C']["gotoAndSto" + 'p'](0x6);
          break;
        case 0x4:
          this["upperLeg2M" + 'C']["gotoAndSto" + 'p'](0x7);
          break;
        default:
          this['upperLeg2M' + 'C']["gotoAndSto" + 'p'](0x5);
      }
      var X = this["shapeGuide"]["lowerLeg2S" + "hape"];
      this["_session"]['particleCo' + "ntroller"]["createBloo" + "dBurst"](0x5, 0xf, this['lowerLeg2B' + "ody"], 0x32, new j['RM'](0x0, X["scaleY"] * -this["shapeRefSc" + "ale"] / this["character_" + "scale"]), this['_session']["containerS" + "prite"]);
      b < this["kneeLigame" + "ntLimit"] ? (this['kneeLigame' + "nt2"] = new E['i$'](this['upperLeg2B' + "ody"], this["lowerLeg2B" + "ody"], this["ligamentLe" + "ngth"], this["character_" + "scale"], this), this["composites"]["push"](this["kneeLigame" + "nt2"])) : this["trackLimbL" + "ost"]('leg2');
      var x = Math["ceil"](0x4 * Math["random"]());
      B['m']["instance"]["playAreaSo" + "undInstanc" + 'e']("BoneBreak" + x, this["upperLeg2B" + 'ody']);
      this["addVocals"]('Knee2', 0x2);
    };
    H["supermanPo" + 'se'] = function () {
      this["setJoint"](this["neckJoint"], 0.5, 0x2);
      this["setJoint"](this["hipJoint1"], 2.6, 0x2);
      this["setJoint"](this["hipJoint2"], 2.6, 0x2);
      this["setJoint"](this['kneeJoint1'], 0x0, 0xa);
      this["setJoint"](this["kneeJoint2"], 0x0, 0xa);
      this["setJoint"](this["shoulderJo" + "int1"], 0x0, 0x14);
      this["setJoint"](this["shoulderJo" + "int2"], 0x0, 0x14);
      this["setJoint"](this["elbowJoint" + '1'], 2.5, 0xf);
      this["setJoint"](this["elbowJoint" + '2'], 2.5, 0xf);
    };
    H["tuckPose"] = function () {
      this["setJoint"](this["neckJoint"], 0.69, 0x2);
      this["setJoint"](this["hipJoint1"], 0x0, 0x2);
      this["setJoint"](this['hipJoint2'], 0x0, 0x2);
      this["setJoint"](this["kneeJoint1"], 0x2, 0xa);
      this["setJoint"](this["kneeJoint2"], 0x2, 0xa);
      this["setJoint"](this["shoulderJo" + "int1"], 0x3, 0x14);
      this["setJoint"](this['shoulderJo' + "int2"], 0x3, 0x14);
      this['setJoint'](this["elbowJoint" + '1'], 1.5, 0xf);
      this['setJoint'](this["elbowJoint" + '2'], 1.5, 0xf);
    };
    H["pushupPose"] = function () {
      'yvtlC' === "yvtlC" ? (this["setJoint"](this["neckJoint"], 0.5, 0x2), this['setJoint'](this["hipJoint1"], 2.6, 0x2), this["setJoint"](this["hipJoint2"], 2.6, 0x2), this["setJoint"](this["kneeJoint1"], 0x0, 0xa), this["setJoint"](this["kneeJoint2"], 0x0, 0xa), this["setJoint"](this["shoulderJo" + 'int1'], 1.7, 0x14), this['setJoint'](this["shoulderJo" + "int2"], 1.7, 0x14), this["setJoint"](this["elbowJoint" + '1'], 2.5, 0xf), this["setJoint"](this['elbowJoint' + '2'], 2.5, 0xf)) : this['_keyCode'] = n;
    };
    H["archPose"] = function () {
      this["setJoint"](this["neckJoint"], 0.5, 0x2);
      this["setJoint"](this["hipJoint1"], 0x3, 0x2);
      this["setJoint"](this["hipJoint2"], 0x3, 0x2);
      this['setJoint'](this["kneeJoint1"], 0x2, 0xa);
      this["setJoint"](this["kneeJoint2"], 0x2, 0xa);
      this["setJoint"](this["shoulderJo" + "int1"], 0x0, 0x14);
      this["setJoint"](this["shoulderJo" + "int2"], 0x0, 0x14);
      this["setJoint"](this['elbowJoint' + '1'], 0x1, 0xf);
      this["setJoint"](this["elbowJoint" + '2'], 0x1, 0xf);
    };
    H["leftWalkPo" + 'se'] = function () {
      this["setJoint"](this["neckJoint"], 0.5, 0x2);
      this["setJoint"](this["hipJoint1"], 2.8, 0x5);
      this["setJoint"](this["hipJoint2"], 1.75, 2.5);
      this["setJoint"](this["kneeJoint1"], 0.5, 0xa);
      this["setJoint"](this["kneeJoint2"], 0.2, 0xa);
      this["setJoint"](this["shoulderJo" + "int1"], 2.5, 0xa);
      this["setJoint"](this["shoulderJo" + "int2"], 0x4, 0xa);
      this["setJoint"](this["elbowJoint" + '1'], 0x2, 0xf);
      this["setJoint"](this['elbowJoint' + '2'], 2.5, 0xf);
    };
    H['rightWalkP' + "ose"] = function () {
      "Pbpsy" !== "Pbpsy" ? (N["prototype"]["kneeBreak1"]["call"](this, F), this["ejected"] || (this["cartFoot1J" + "oint"] && (this['_session']['m_world']["DestroyJoi" + 'nt'](this['cartFoot1J' + "oint"]), this["cartFoot1J" + "oint"] = null), this['lowerLeg1M' + 'C']["visible"] || (this["lowerLeg1M" + 'C']["visible"] = !0x0), this['checkEject']())) : (this['setJoint'](this["neckJoint"], 0.5, 0x2), this["setJoint"](this["hipJoint1"], 1.75, 2.5), this["setJoint"](this["hipJoint2"], 2.8, 0x5), this['setJoint'](this["kneeJoint1"], 0.2, 0x5), this["setJoint"](this["kneeJoint2"], 0.5, 0x5), this["setJoint"](this['shoulderJo' + "int1"], 0x4, 0xa), this["setJoint"](this["shoulderJo" + "int2"], 2.5, 0xa), this["setJoint"](this["elbowJoint" + '1'], 2.5, 0xf), this["setJoint"](this["elbowJoint" + '2'], 0x2, 0xf));
    };
    H['armsForwar' + "dPose"] = function () {

      if ("DfzaR" !== "DfzaR") {
        k = C["setPrototy" + "peOf"] ? j["setPrototy" + "peOf"]["bind"]() : function (Z, X) {
          Z["__proto__"] = X;
          return Z;
        };
        return P(W, K);
      } else {
        this["setJoint"](this["neckJoint"], 0.5, 0x2);
        this["setJoint"](this["shoulderJo" + "int1"], 1.5, 0x14);
        this["setJoint"](this['shoulderJo' + "int2"], 1.5, 0x14);
        this["setJoint"](this["elbowJoint" + '1'], 0x2, 0xf);
        this["setJoint"](this["elbowJoint" + '2'], 0x2, 0xf);
      }
    };
    H["armsOverhe" + "adPose"] = function () {
      this["setJoint"](this["neckJoint"], 0.5, 0x2);
      this["setJoint"](this["shoulderJo" + "int1"], 0x0, 0x14);
      this["setJoint"](this["shoulderJo" + "int2"], 0x0, 0x14);
      this["setJoint"](this["elbowJoint" + '1'], 2.5, 0xf);
      this["setJoint"](this["elbowJoint" + '2'], 2.5, 0xf);
    };
    H["holdPositi" + "onPose"] = function () {
      "nEDvc" !== "nEDvc" ? (P["loadMenu"]["removeEven" + "tListener"](p["LOAD"], K["beginLoad"]), m["loadMenu"]["removeEven" + "tListener"](I["CANCEL"], k["closeLoadM" + "enu"]), f["loadMenu"]["die"](), V["loadMenu"]["destroy"](), B['loadMenu'] = null) : (this["holdJoint"](this["neckJoint"]), this["holdJoint"](this['hipJoint1']), this['holdJoint'](this["hipJoint2"]), this["holdJoint"](this['kneeJoint1']), this["holdJoint"](this["kneeJoint2"]), this['holdJoint'](this['shoulderJo' + 'int1']), this["holdJoint"](this["shoulderJo" + "int2"]), this["holdJoint"](this["elbowJoint" + '1']), this['holdJoint'](this["elbowJoint" + '2']));
    };
    H["cancelPose"] = function () {
      "UVVXN" === "UVVXN" ? (this["neckJoint"] && this['neckJoint']["IsMotorEna" + 'bled']() && this["neckJoint"]["EnableMoto" + 'r'](!0x1), this["shoulderJo" + 'int1'] && this["shoulderJo" + "int1"]["IsMotorEna" + "bled"]() && this["shoulderJo" + "int1"]["EnableMoto" + 'r'](!0x1), this["shoulderJo" + "int2"] && this["shoulderJo" + "int2"]["IsMotorEna" + "bled"]() && this['shoulderJo' + 'int2']['EnableMoto' + 'r'](!0x1), this["elbowJoint" + '1'] && this["elbowJoint" + '1']["IsMotorEna" + "bled"]() && this["elbowJoint" + '1']["EnableMoto" + 'r'](!0x1), this["elbowJoint" + '2'] && this["elbowJoint" + '2']["IsMotorEna" + "bled"]() && this["elbowJoint" + '2']["EnableMoto" + 'r'](!0x1), this["hipJoint1"] && this["hipJoint1"]["IsMotorEna" + "bled"]() && this["hipJoint1"]["EnableMoto" + 'r'](!0x1), this["hipJoint2"] && this["hipJoint2"]["IsMotorEna" + "bled"]() && this["hipJoint2"]["EnableMoto" + 'r'](!0x1), this["kneeJoint1"] && this["kneeJoint1"]["IsMotorEna" + 'bled']() && this["kneeJoint1"]["EnableMoto" + 'r'](!0x1), this["kneeJoint2"] && this["kneeJoint2"]["IsMotorEna" + "bled"]() && this["kneeJoint2"]["EnableMoto" + 'r'](!0x1)) : this["frameHand1"] || this["frameHand2"] || this["eject"]();
    };
    H["holdJoint"] = function (b) {
      b["IsMotorEna" + "bled"]() || b["EnableMoto" + 'r'](!0x0);
      b['SetMotorSp' + "eed"](0x0);
    };
    H["setJoint"] = function (b, Z, X, x) {

      if ("CvkqY" !== "cHdvG") {
        void 0x0 === x && (x = 0xa);
        b["IsMotorEna" + "bled"]() || b["EnableMoto" + 'r'](!0x0);
        var w = -0x1;
        var Y = b["m_lowerAng" + 'le'] + Z;
        var v = b["GetJointAn" + "gle"]() - Y;
        v < 0x0 && (w = 0x1, v = Math["abs"](v));
        var L = Math["min"](X * Math["pow"](v, 0x2), x) * w;
        b["SetMotorSp" + "eed"](L);
      } else {
        var O = this;
        this["list"] && this['list']["children"]['forEach'](function (G) {
          return G["removeEven" + "tListener"](O['Cm']["MOUSE_UP"], O['mouseUpHan' + "dler"]);
        });
        this['listHolder'] && this["removeChil" + 'd'](this["listHolder"]);
        this["listMask"] && this["removeChil" + 'd'](this["listMask"]);
        this["scroller"] && (this["scroller"]["die"](), this['removeChil' + 'd'](this["scroller"]));
        this["_currentIt" + 'em'] = null;
      }
    };
    H["remoteEjec" + 't'] = function () {
      if ("zMntQ" !== "sQkmS") {
        this["eject"]();
      } else {
        return this["_faded"];
      }
    };
    H["eject"] = function () {};
    H["userVehicl" + 'eEject'] = function () {
      this["userVehicl" + 'e'] && (this["userVehicl" + 'e']["removeChar" + "acter"](this), this["userVehicl" + 'e'] = null, this['vehicleArm' + "1Joint"] && (this["_session"]['m_world']['DestroyJoi' + 'nt'](this["vehicleArm" + "1Joint"]), this['vehicleArm' + "1Joint"] = null), this["vehicleArm" + "2Joint"] && (this["_session"]["m_world"]["DestroyJoi" + 'nt'](this["vehicleArm" + '2Joint']), this["vehicleArm" + "2Joint"] = null), this['releaseGri' + 'p'](), this["currentPos" + 'e'] = 0x0);
    };
    H['startGrab'] = function () {
      if ('jMnSw' !== "guFIx") {
        this["_session"]["version"] >= 1.11 ? this["grabbing"] || (this["grabbing"] = !0x0, this["shoulderJo" + "int1"]["broken"] || this['elbowJoint' + '1']["broken"] || this["_session"]["contactLis" + "tener"]["registerLi" + "stener"](I['fI']["RESULT"], this["lowerArm1S" + "hape"], this["contactRes" + "ultHandler"]), this["shoulderJo" + "int2"]["broken"] || this['elbowJoint' + '2']["broken"] || this["_session"]["contactLis" + "tener"]["registerLi" + "stener"](I['fI']["RESULT"], this["lowerArm2S" + "hape"], this["contactRes" + "ultHandler"])) : this["grabbing"] ? this["endGrab"]() : (this['grabbing'] = !0x0, this["shoulderJo" + "int1"]["broken"] || this["elbowJoint" + '1']["broken"] || (this["lowerArm1M" + 'C']["hand"]["gotoAndSto" + 'p'](0x1), this["_session"]["contactLis" + "tener"]['registerLi' + 'stener'](I['fI']["RESULT"], this["lowerArm1S" + "hape"], this["contactRes" + "ultHandler"])), this["shoulderJo" + "int2"]["broken"] || this["elbowJoint" + '2']["broken"] || (this["lowerArm2M" + 'C']["hand"]["gotoAndSto" + 'p'](0x1), this["_session"]["contactLis" + 'tener']["registerLi" + "stener"](I['fI']['RESULT'], this["lowerArm2S" + "hape"], this["contactRes" + "ultHandler"])));
      } else {
        for (var Z = 0x0; Z < this['bodiesToAd' + 'd']["length"]; Z++) {
          this["createPris" + 'Joint'](this["bodiesToAd" + 'd'][Z], this["normals"][Z]);
        }
        this["bodiesToAd" + 'd'] = [];
        this["normals"] = [];
        this["add"] = !0x1;
      }
    };
    H["endGrab"] = function () {
      "DwlUE" === "DwlUE" ? (this["_session"]["contactLis" + "tener"]["deleteList" + "ener"](I['fI']["RESULT"], this["lowerArm1S" + "hape"]), this["_session"]["contactLis" + 'tener']["deleteList" + "ener"](I['fI']["RESULT"], this["lowerArm2S" + 'hape'])) : (this["mouseY"] > this["scrollTab"]['y'] ? this["scrollTab"]['y'] += this['scrollTab']['height'] : this["scrollTab"]['y'] -= this["scrollTab"]["height"], this["clampScrol" + "lTab"](), this["updateCont" + "ent"]());
    };
    H["grabAction"] = function (b, Z, X) {
      var x = b["GetShapeLi" + 'st']();
      var w = b["GetWorldPo" + "int"](new j['RM'](0x0, x["GetVertice" + 's']()[0x2]['y']));
      var Y = new j['Gq']();
      X['IsStatic']() || (Y["enableLimi" + 't'] = !0x0);
      Y["maxMotorTo" + "rque"] = 0x4;
      Y["Initialize"](X, b, w);
      Y['userData'] = g['GRIP_JOINT'];
      if (b == this["lowerArm1B" + "ody"]) {
        this["lowerArm1M" + 'C']["hand"]["gotoAndSto" + 'p'](0x1);
        this["_session"]["contactLis" + 'tener']["deleteList" + "ener"](I['fI']["RESULT"], this["lowerArm1S" + "hape"]);
        if (Z["GetUserDat" + 'a']() instanceof m['bc']) {
          if ("fCMRw" !== "fCMRw") {
            x["prototype"]["paint"]["call"](this);
            var q3 = Z["abs"](this["wheelBody"]["GetAngular" + "Velocity"]()) / 0x5;
            q3 = E["max"](q3, 0x0);
            q3 = 0x1 - (q3 = R["min"](q3, 0x1));
            if (this["wheelFoot1" + "Joint"]) {
              var q4 = this["lowerLeg1B" + "ody"]["GetInterpo" + "latedWorld" + "Center"]();
              var q5 = this['stemBody']["GetInterpo" + "latedWorld" + "Point"](new X['RM'](0.115, 0.5702));
              var q6 = new x['RM'](q4['x'] - q5['x'], q4['y'] - q5['y']);
              var q7 = this["lowerLeg1B" + "ody"]["GetInterpo" + "latedAngle"]();
              var q8 = this["stemBody"]['GetInterpo' + "latedAngle"]() + 0.305;
              var q9 = q7 - q8;
              q5 = new w['RM'](q4['x'] - q6['x'] * q3, q4['y'] - q6['y'] * q3);
              this["lowerLeg1M" + 'C']['x'] = q5['x'] * this["m_physScal" + 'e'];
              this["lowerLeg1M" + 'C']['y'] = q5['y'] * this['m_physScal' + 'e'];
              this["lowerLeg1M" + 'C']["rotation"] = (q7 - q9 * q3) * b["oneEightyO" + "verPI"] % 0x168;
              q4 = this["upperLeg1B" + "ody"]['GetInterpo' + "latedWorld" + "Center"]();
              q5 = this["stemBody"]["GetInterpo" + "latedWorld" + "Point"](new I['RM'](0.1553, 0.1994));
              q6 = new Y['RM'](q4['x'] - q5['x'], q4['y'] - q5['y']);
              q9 = (q7 = this["upperLeg1B" + "ody"]['GetInterpo' + "latedAngle"]()) - (q8 = this["stemBody"]["GetInterpo" + "latedAngle"]() - 0.1952);
              q5 = new v['RM'](q4['x'] - q6['x'] * q3, q4['y'] - q6['y'] * q3);
              this['upperLeg1M' + 'C']['x'] = q5['x'] * this["m_physScal" + 'e'];
              this["upperLeg1M" + 'C']['y'] = q5['y'] * this['m_physScal' + 'e'];
              this["upperLeg1M" + 'C']["rotation"] = (q7 - q9 * q3) * L["oneEightyO" + "verPI"] % 0x168;
            }
            this["wheelFoot2" + "Joint"] && (q4 = this["lowerLeg2B" + 'ody']['GetInterpo' + "latedWorld" + "Center"](), q5 = this["stemBody"]["GetInterpo" + "latedWorld" + "Point"](new z['RM'](0.115, 0.5702)), q6 = new F['RM'](q4['x'] - q5['x'], q4['y'] - q5['y']), q9 = (q7 = this["lowerLeg2B" + "ody"]["GetInterpo" + "latedAngle"]()) - (q8 = this["stemBody"]['GetInterpo' + "latedAngle"]() + 0.305), q5 = new M['RM'](q4['x'] - q6['x'] * q3, q4['y'] - q6['y'] * q3), this["lowerLeg2M" + 'C']['x'] = q5['x'] * this["m_physScal" + 'e'], this['lowerLeg2M' + 'C']['y'] = q5['y'] * this["m_physScal" + 'e'], this["lowerLeg2M" + 'C']["rotation"] = (q7 - q9 * q3) * H["oneEightyO" + "verPI"] % 0x168, q4 = this["upperLeg2B" + "ody"]["GetInterpo" + "latedWorld" + "Center"](), q5 = this['stemBody']["GetInterpo" + "latedWorld" + "Point"](new b['RM'](0.1553, 0.1994)), q6 = new Z['RM'](q4['x'] - q5['x'], q4['y'] - q5['y']), q9 = (q7 = this["upperLeg2B" + "ody"]["GetInterpo" + "latedAngle"]()) - (q8 = this["stemBody"]["GetInterpo" + "latedAngle"]() - 0.1952), q5 = new H['RM'](q4['x'] - q6['x'] * q3, q4['y'] - q6['y'] * q3), this["upperLeg2M" + 'C']['x'] = q5['x'] * this["m_physScal" + 'e'], this["upperLeg2M" + 'C']['y'] = q5['y'] * this["m_physScal" + 'e'], this["upperLeg2M" + 'C']["rotation"] = (q7 - q9 * q3) * v["oneEightyO" + "verPI"] % 0x168);
          } else {
            var v = Z['GetUserDat' + 'a']();
            if (this["userVehicl" + 'e'] && v != this["userVehicl" + 'e']) {
              this["gripJoint1"] = this["_session"]["m_world"]['CreateJoin' + 't'](Y);
            } else {
              this["userVehicl" + 'e'] = Z["GetUserDat" + 'a']();
              this["userVehicl" + 'e']['addCharact' + 'er'](this);
              this["vehicleArm" + "1Joint"] = this["_session"]["m_world"]["CreateJoin" + 't'](Y);
              this["currentPos" + 'e'] = 0x0;
              switch (this["userVehicl" + 'e']["characterP" + "ose"]) {
                case 0x0:
                  break;
                case 0x1:
                  this["currentPos" + 'e'] = 0xa;
                  break;
                case 0x2:
                  this["currentPos" + 'e'] = 0xb;
                  break;
                case 0x3:
                  this["currentPos" + 'e'] = 0xc;
              }
            }
          }
        } else {
          this['gripJoint1'] = this["_session"]["m_world"]["CreateJoin" + 't'](Y);
        }
      }
      if (b == this["lowerArm2B" + "ody"]) {
        this["lowerArm2M" + 'C']['hand']["gotoAndSto" + 'p'](0x1);
        this["_session"]["contactLis" + 'tener']['deleteList' + "ener"](I['fI']["RESULT"], this["lowerArm2S" + "hape"]);
        if (Z['GetUserDat' + 'a']() instanceof m['bc']) {
          v = Z["GetUserDat" + 'a']();
          if (this["userVehicl" + 'e'] && v != this['userVehicl' + 'e']) {
            this["gripJoint2"] = this["_session"]["m_world"]['CreateJoin' + 't'](Y);
          } else {
            this['userVehicl' + 'e'] = Z["GetUserDat" + 'a']();
            this["userVehicl" + 'e']["addCharact" + 'er'](this);
            this['vehicleArm' + "2Joint"] = this['_session']["m_world"]['CreateJoin' + 't'](Y);
            this["currentPos" + 'e'] = 0x0;
            switch (this["userVehicl" + 'e']["characterP" + "ose"]) {
              case 0x0:
                break;
              case 0x1:
                this["currentPos" + 'e'] = 0xa;
                break;
              case 0x2:
                this["currentPos" + 'e'] = 0xb;
                break;
              case 0x3:
                this['currentPos' + 'e'] = 0xc;
            }
          }
        } else {
          this["gripJoint2"] = this["_session"]["m_world"]["CreateJoin" + 't'](Y);
        }
      }
    };
    H["releaseGri" + 'p'] = function () {
      this['grabbing'] && (this['lowerArm1M' + 'C']["hand"]["gotoAndSto" + 'p'](0x2), this["lowerArm2M" + 'C']['hand']["gotoAndSto" + 'p'](0x2), this["grabbing"] = !0x1, this["endGrab"](), this["gripJoint1"] && (this["_session"]["m_world"]["DestroyJoi" + 'nt'](this['gripJoint1']), this["gripJoint1"] = null), this["gripJoint2"] && (this["_session"]["m_world"]["DestroyJoi" + 'nt'](this["gripJoint2"]), this["gripJoint2"] = null));
    };
    H["addVocals"] = function (b, Z) {
      this["voiceArray"][Z] = b;
    };
    H["vocalStart" + 'ed'] = function (b) {};
    H["randomVoca" + 'ls'] = function (b) {
      if ("fbvZa" === "fbvZa") {
        return ["Elbow1", "Elbow2", 'Knee1', "Knee2", "Shoulder1", "Shoulder2", 'Hip1', "Hip2", "Knee1", "Spikes"][b];
      } else {
        m();
      }
    };
    H["shapeImpal" + 'e'] = function (b, Z, X, x) {
      void 0x0 === Z && (Z = !0x0);
      void 0x0 === X && (X = null);
      void 0x0 === x && (x = 0x0);
      if (b == this["chestShape"] || b == this["pelvisShap" + 'e']) {
        var w = b["GetBody"]()['GetPositio' + 'n']()['x']["toString"]();
        var Y = parseInt(w["charAt"](w['length'] - 0x1));
        this["addVocals"](this["randomVoca" + 'ls'](Y), 0x5);
      } else {
        if (b == this["head1Shape"]) {
          if (Z) {
            if (X) {
              var v = b["GetBody"]()["GetWorldCe" + "nter"]();
              new j['RM'](X['x'] - v['x'], X['y'] - v['y'])["LengthSqua" + "red"]() < x ? (this["eject"](), this["dead"] = !0x0) : (w = b["GetBody"]()["GetPositio" + 'n']()['x']["toString"](), Y = parseInt(w['charAt'](w["length"] - 0x1)), this["addVocals"](this["randomVoca" + 'ls'](Y), 0x5));
            } else {
              this["eject"]();
              this["dead"] = !0x0;
            }
          } else {
            w = b["GetBody"]()["GetPositio" + 'n']()['x']["toString"]();
            Y = parseInt(w["charAt"](w["length"] - 0x1));
            this["addVocals"](this["randomVoca" + 'ls'](Y), 0x5);
          }
        }
      }
    };
    H["grindShape"] = function (b) {
      if ("hdqlA" === "BbfNy") {
        var X = C(j["getMonth"]() + 0x1);
        var x = P(W["getDate"]());
        var w = K(M["getFullYea" + 'r']())["substr"](0x2, 0x2);
        return I(X) + '/' + x + '/' + w;
      } else {
        switch (b) {
          case this["head1Shape"]:
            this["head1Shape"]["SetUserDat" + 'a'](g["GRIND_STAT" + 'E']);
            this["contactRes" + "ultBuffer"]["delete"](this["head1Shape"]);
            this["contactAdd" + "Buffer"]["delete"](this["head1Shape"]);
            this["session"]["contactLis" + "tener"]["deleteList" + "ener"](I['fI']["RESULT"], this["head1Shape"]);
            this["session"]["contactLis" + "tener"]["deleteList" + "ener"](I['fI']["ADD"], this["head1Shape"]);
            this["headBloodF" + "low"] && this["headBloodF" + "low"]["stopSpewin" + 'g']();
            break;
          case this["chestShape"]:
            this["chestShape"]["SetUserDat" + 'a'](g["GRIND_STAT" + 'E']);
            this["contactRes" + "ultBuffer"]["delete"](this["chestShape"]);
            this["contactAdd" + "Buffer"]['delete'](this["chestShape"]);
            this["session"]["contactLis" + "tener"]["deleteList" + "ener"](I['fI']["RESULT"], this["chestShape"]);
            this["session"]["contactLis" + "tener"]["deleteList" + "ener"](I['fI']["ADD"], this["chestShape"]);
            this["neckBloodF" + "low"] && this["neckBloodF" + "low"]["stopSpewin" + 'g']();
            this['shoulder1B' + "loodFlow"] && this["shoulder1B" + "loodFlow"]["stopSpewin" + 'g']();
            this['shoulder2B' + "loodFlow"] && this["shoulder2B" + "loodFlow"]["stopSpewin" + 'g']();
            this["stomachBlo" + "odFlow"] && this["stomachBlo" + "odFlow"]["stopSpewin" + 'g']();
            break;
          case this["pelvisShap" + 'e']:
            this["pelvisShap" + 'e']["SetUserDat" + 'a'](g["GRIND_STAT" + 'E']);
            this["contactRes" + "ultBuffer"]["delete"](this["pelvisShap" + 'e']);
            this["contactAdd" + "Buffer"]['delete'](this["pelvisShap" + 'e']);
            this["session"]["contactLis" + "tener"]["deleteList" + "ener"](I['fI']["RESULT"], this["pelvisShap" + 'e']);
            this["session"]['contactLis' + "tener"]["deleteList" + 'ener'](I['fI']["ADD"], this["pelvisShap" + 'e']);
            this['hip1BloodF' + "low"] && this["hip1BloodF" + "low"]["stopSpewin" + 'g']();
            this["hip2BloodF" + "low"] && this["hip2BloodF" + 'low']["stopSpewin" + 'g']();
            break;
          case this["upperArm1B" + "ody"]["GetShapeLi" + 'st']():
            this["arm1BloodF" + "low"] && this["arm1BloodF" + "low"]["stopSpewin" + 'g']();
            break;
          case this["upperArm2B" + "ody"]["GetShapeLi" + 'st']():
            this["arm2BloodF" + "low"] && this["arm2BloodF" + "low"]["stopSpewin" + 'g']();
            break;
          case this["upperLeg1B" + 'ody']['GetShapeLi' + 'st']():
            this["thigh1Bloo" + "dFlow"] && this["thigh1Bloo" + "dFlow"]["stopSpewin" + 'g']();
            break;
          case this["upperLeg2B" + 'ody']["GetShapeLi" + 'st']():
            this["thigh2Bloo" + "dFlow"] && this["thigh2Bloo" + "dFlow"]["stopSpewin" + 'g']();
        }
      }
    };
    H["removeBody"] = function (b) {
      if ("xdlpk" === "yXOtR") {
        var X = new f['Um'](T, V)["window"];
        this["addChild"](X);
        X["center"]();
      } else {
        switch (b) {
          case this["head1Body"]:
            this["neckJoint"]["broken"] || this['neckBreak'](0x0, !0x0, !0x0);
            this["spinalChor" + 'd'] && this['spinalChor' + 'd']["spineBreak" + '2'](0xa);
            break;
          case this["chestBody"]:
            this["neckJoint"]['broken'] || this["neckBreak"](0x0, !0x0, !0x0);
            this["shoulderJo" + "int1"]['broken'] || this["shoulderBr" + "eak1"](0x0, !0x0);
            this["shoulderJo" + 'int2']["broken"] || this["shoulderBr" + "eak2"](0x0, !0x0);
            this["waistJoint"]["broken"] || this["torsoBreak"](0x0);
            this['intestineC' + "hain"] && this["intestineC" + "hain"]["intestineB" + "reak2"](0xa);
            this["spinalChor" + 'd'] && this["spinalChor" + 'd']["spineBreak" + '1'](0xa);
            break;
          case this["pelvisBody"]:
            this["hipJoint1"]["broken"] || this["hipBreak1"](0x0, !0x0);
            this["hipJoint2"]["broken"] || this['hipBreak2'](0x0, !0x0);
            this["waistJoint"]["broken"] || this["torsoBreak"](0x0);
            this["intestineC" + "hain"] && this["intestineC" + 'hain']['intestineB' + "reak1"](0xa);
            break;
          case this["upperArm1B" + "ody"]:
            this["shoulderJo" + "int1"]["broken"] || this["shoulderBr" + 'eak1'](0x0, !0x0);
            this['elbowJoint' + '1']["broken"] || this["elbowBreak" + '1'](0x3e8);
            this["arm1BloodF" + "low"] && this["arm1BloodF" + "low"]["stopSpewin" + 'g']();
            this["elbowLigam" + "ent1"] && this["elbowLigam" + "ent1"]["remoteBrea" + 'k']();
            break;
          case this["upperArm2B" + "ody"]:
            this["shoulderJo" + "int2"]["broken"] || this["shoulderBr" + "eak2"](0x0, !0x0);
            this["elbowJoint" + '2']['broken'] || this["elbowBreak" + '2'](0x3e8);
            this["arm2BloodF" + "low"] && this['arm2BloodF' + 'low']["stopSpewin" + 'g']();
            this['elbowLigam' + "ent2"] && this["elbowLigam" + "ent2"]["remoteBrea" + 'k']();
            break;
          case this["upperLeg1B" + "ody"]:
            this["hipJoint1"]["broken"] || this["hipBreak1"](0x0, !0x0);
            this["kneeJoint1"]["broken"] || this['kneeBreak1'](0x3e8);
            this["thigh1Bloo" + "dFlow"] && this["thigh1Bloo" + "dFlow"]['stopSpewin' + 'g']();
            this["kneeLigame" + "nt1"] && this["kneeLigame" + "nt1"]["remoteBrea" + 'k']();
            break;
          case this["upperLeg2B" + "ody"]:
            this["hipJoint2"]["broken"] || this["hipBreak2"](0x0, !0x0);
            this["kneeJoint2"]["broken"] || this['kneeBreak2'](0x3e8);
            this["thigh2Bloo" + "dFlow"] && this["thigh2Bloo" + "dFlow"]["stopSpewin" + 'g']();
            this['kneeLigame' + "nt2"] && this['kneeLigame' + "nt2"]["remoteBrea" + 'k']();
        }
      }
    };
    H["explodeSha" + 'pe'] = function (b, Z) {
      switch (b) {
        case this['head1Shape']:
          Z > 0.85 && this["headSmash1"](0x0);
          break;
        case this["chestShape"]:
          var X = this["chestBody"]["GetMass"]() / g["DEF_CHEST_" + 'MASS'];
          var x = Math['max'](0x1 - 0.15 * X, 0.7);
          Z > x && this["chestSmash"](0x0);
          break;
        case this["pelvisShap" + 'e']:
          var w = this["pelvisBody"]["GetMass"]() / g["DEF_PELVIS" + "_MASS"];
          Z > (x = Math['max'](0x1 - 0.15 * w, 0.7)) && this['pelvisSmas' + 'h'](0x0);
      }
    };
    H['hasUserVeh' + "icle"] = function () {
      return null !== this["userVehicl" + 'e'] && void 0x0 !== this["userVehicl" + 'e'];
    };
    F = g;
    (M = [{
      'key': 'session',
      'get': function () {
        if ("WfamY" === "YAXuJ") {
          this["downKey"]["alpha"] = 0.2;
        } else {
          return this['_session'];
        }
      },
      'set': function (b) {
        this["_session"] = b;
      }
    }, {
      'key': "dead",
      'get': function () {
        return this['_dead'];
      },
      'set': function (b) {
        this["trackDeath"](b);
        this["_dead"] = b;
        this["_dead"] && (this["userVehicl" + 'eEject'](), this['currentPos' + 'e'] = 0x0, this["releaseGri" + 'p'](), this["voiceSound"] && (this["voiceSound"]["stopSound"](), this["voiceSound"] = null));
      }
    }, {
      'key': "bleedOutTi" + "cksLeft",
      'get': function () {
        if ("OLDkL" !== "dJjWN") {
          return this["_dying"] && !this['_dead'] ? g["BLEED_OUT_" + 'TOTAL'] - this["_bleedCoun" + "ter"] : 0x1 / 0x0;
        } else {
          this["_session"]["camera"]["focus"] == this["cameraFocu" + 's'] ? this["_session"]["camera"]["focus"] = this["girl"]["cameraFocu" + 's'] : this["_session"]["camera"]["focus"] = this["cameraFocu" + 's'];
        }
      }
    }, {
      'key': "spikeImpal" + 'ed',
      'get': function () {
        return this["_spikeImpa" + "led"];
      }
    }, {
      'key': "vehicleBod" + 'y',
      'get': function () {
        return "BMbSX" !== "UaxrJ" ? null : m["startDelay" + "edSaveLeve" + "lUnlock"]();
      }
    }, {
      'key': "vehicleGro" + 'unded',
      'get': function () {
        if ("YqWIr" !== "YqWIr") {
          S["saveMenu"] && E["closeSaveM" + "enu"]();
          R["dispatchEv" + "ent"](new W['Jh'](A["MENU_BUSY"]));
          P["loadMenu"] = new J();
          var Z = D["loadMenu"]["window"];
          g["parent"]["addChild"](Z);
          Z["center"]();
          S['loadMenu']["addEventLi" + "stener"](z["LOAD_SELEC" + "TED"], z["loadLevel"]);
          F["loadMenu"]["addEventLi" + "stener"](M["DELETE_SEL" + "ECTED"], H['deleteChec' + 'k']);
          b["loadMenu"]["addEventLi" + "stener"](Z["IMPORT_DAT" + 'A'], H["importData"]);
          E['loadMenu']['addEventLi' + "stener"](X['p']["WINDOW_CLO" + "SED"], x["closeLoadM" + "enu"]);
        } else {
          return !0x1;
        }
      }
    }, {
      'key': "isDadsSon",
      'get': function () {
        if ('ksWlA' !== "ksWlA") {
          for (var Z = 0x0; Z < this["visual"]["numChildre" + 'n']; Z++) {
            var X = this["visual"]["getChildAt"](Z);
            this['drawBitmap'](X);
          }
          this["_visual"] = null;
        } else {
          return !0x1;
        }
      }
    }, {
      'key': "magnetHeld",
      'get': function () {
        return [];
      }
    }, {
      'key': "currentPos" + 'e',
      'get': function () {
        if ("BlGGD" !== "xuRkH") {
          return this["_currentPo" + 'se'];
        } else {
          this["_triggered"] || (this["_triggered"] = !0x0);
        }
      },
      'set': function (b) {
        b != this["_currentPo" + 'se'] && (this["_currentPo" + 'se'] = b, 0x0 == this["_currentPo" + 'se'] && this["cancelPose"]());
      }
    }, {
      'key': "centralBod" + 'y',
      'get': function () {
        if ("kxcZq" !== "TpvpK") {
          return this["heartBody"] ? this["heartBody"] : this["chestBody"];
        } else {
          var Z = F["call"](T, 'string');
          if ("object" != typeof Z) {
            return Z;
          }
          throw new V("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
        }
      }
    }, {
      'key': "startX",
      'set': function (b) {
        this["_startX"] = b / this["m_physScal" + 'e'];
      }
    }, {
      'key': "startY",
      'set': function (b) {
        this["_startY"] = b / this["m_physScal" + 'e'];
      }
    }]) && function (b, Z) {
      for (var X = 0x0; X < Z['length']; X++) {
        var x = Z[X];
        x["enumerable"] = x["enumerable"] || !0x1;
        x["configurab" + 'le'] = !0x0;
        "value" in x && (x["writable"] = !0x0);
        Object["defineProp" + 'erty'](b, W(x["key"]), x);
      }
    }(F["prototype"], M);
    Object["defineProp" + "erty"](F, "prototype", {
      'writable': !0x1
    });
    return F;
  }(K['Qe']);
  J["DEF_HEAD_M" + "ASS"] = 0.05456;
  J["DEF_CHEST_" + "MASS"] = 0.17171;
  J["DEF_PELVIS" + "_MASS"] = 0.0735;
  J["DEF_UPPERA" + "RM_MASS"] = 0.07019;
  J["DEF_LOWERA" + "RM_MASS"] = 0.07784;
  J["DEF_UPPERL" + "EG_MASS"] = 0.14914;
  J["DEF_LOWERL" + 'EG_MASS'] = 0.10218;
  J["DEF_HEAD_S" + "MASH"] = 0x3;
  J['DEF_CHEST_' + "SMASH"] = 7.5;
  J["DEF_PELVIS" + "_SMASH"] = 5.5;
  J["DEF_FOOT_S" + "MASH"] = 0x4;
  J["oneEightyO" + "verPI"] = 0xb4 / Math['PI'];
  J["BLEED_OUT_" + "TOTAL"] = 0x96;
  J["GRIND_STAT" + 'E'] = 0x1;
  J["IMPALE_JOI" + 'NT'] = "impale";
  J["ARROW_JOIN" + 'T'] = 'arrow';
  J["GRIP_JOINT"] = "grip";
}