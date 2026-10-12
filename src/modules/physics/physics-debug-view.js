function (T, V, j) {
  'use strict';

  j['d'](V, {
    'Yw': () => R,
    'V1': () => D,
    'Q6': () => M,
    'Jo': () => L,
    'p2': () => O,
    'IM': () => q0
  });
  j(0x7022);
  j(0x65f3);
  j(0x977d);
  j(0xb284);
  j(0x15de4);
  j(0xcdc3);
  j(0x15d77);
  j(0xb4c);
  var P = j(0x136b);
  var K = j(0x5ab6);
  var I = j(0xb65a);
  function k(q1) {
    var q2 = function (q3) {
      if ("object" != typeof q3 || !q3) {
        return q3;
      }
      var q4 = q3[Symbol["toPrimitiv" + 'e']];
      if (void 0x0 !== q4) {
        if ("pFgyr" === "pFgyr") {
          var q5 = q4["call"](q3, "string");
          if ("object" != typeof q5) {
            return q5;
          }
          throw new TypeError("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
        } else {
          for (var q7 = 0x0; q7 < V["length"]; q7++) {
            var q8 = p[q7];
            q8["enumerable"] = q8["enumerable"] || !0x1;
            q8["configurab" + 'le'] = !0x0;
            "value" in q8 && (q8['writable'] = !0x0);
            K['defineProp' + "erty"](m, I(q8["key"]), q8);
          }
        }
      }
      return String(q3);
    }(q1);
    return "symbol" == typeof q2 ? q2 : q2 + '';
  }
  function E(q1, q2) {
    if ("abMGN" !== 'virLC') {
      E = Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"]["bind"]() : function (q3, q4) {

        q3["__proto__"] = q4;
        return q3;
      };
      return E(q1, q2);
    } else {
      f['stage'] && (T['saveNewBut' + "ton"]["label"] = "Read the r" + "ules! (" + V + ')');
    }
  }
  var R = function (q1) {
    function q2(q8) {
      var q9;
      void 0x0 === q8 && (q8 = !0x1);
      (q9 = q1["call"](this) || this)['m_iteratio' + 'ns'] = 0xa;
      q9["m_timeStep"] = 0x1 / 0x1e;
      q9["m_physScal" + 'e'] = 62.5;
      q9["totalFrame" + 's'] = 0x1e;
      q9["frames"] = 0x0;
      q9["useDebugge" + 'r'] = q8;
      q9["parent"] && (q9["useDebugge" + 'r'] = !0x0, q9["test"]());
      return q9;
    }
    var q3;
    var q4;
    q4 = q1;
    (q3 = q2)["prototype"] = Object["create"](q4["prototype"]);
    q3["prototype"]["constructo" + 'r'] = q3;
    E(q3, q4);
    var q5;
    var q6;
    var q7 = q2['prototype'];
    q7["test"] = function () {


      if ('sUQFq' === "NaaUd") {
        n["prototype"]["zNullActio" + 'ns']["call"](this);
      } else {
        if (this['useDebugge' + 'r']) {
          this["debug_spri" + 'te'] = new P['kx']();
          this["addChild"](this["debug_spri" + 'te']);
          this['useDebugge' + 'r'] = !0x0;
          this["createText" + "Field"]();
          this["createWorl" + 'd']();
          this["createBodi" + 'es']();
          this["runBind"] = this["run"]["bind"](this);
          this["addEventLi" + "stener"](P['Jh']["ENTER_FRAM" + 'E'], this["runBind"]);
        } else {
          this["createWorl" + 'd']();
          this['createBodi' + 'es']();
          this["frames"] = 0x0;
          for (; this["frames"] <= this["totalFrame" + 's']; this["frames"]++) {
            this['m_world']["Step"](this["m_timeStep"], this["m_iteratio" + 'ns']);
          }
        }
      }
    };
    q7['createText' + "Field"] = function () {


      var q8 = new P['lk']("HelveticaN" + "eueLT Std", 0xb, 0x0, null, null, null, null, null, P['MA']["LEFT"]);
      this["textField"] = new P['A_']();
      this['textField']["width"] = 0x186;
      this["textField"]['height'] = 0xa;
      this["textField"]["defaultTex" + "tFormat"] = q8;
      this["textField"]["autoSize"] = P['wL']["LEFT"];
      this["textField"]['y'] = 0x0;
      this["textField"]["multiline"] = !0x0;
      this["textField"]['selectable'] = !0x0;
      this["textField"]["antiAliasT" + "ype"] = P['BF']["ADVANCED"];
      this["addChild"](this["textField"]);
      this["debugStrin" + 'g'] = '';
    };
    q7["createWorl" + 'd'] = function () {


      var q8 = new K['nm']();
      var q9 = new I["M_G"](-0x1f4, -0x1f4, 0x7d0, 0x7d0);
      q8["lowerBound"]["Set"](q9['x'] / this["m_physScal" + 'e'], q9['y'] / this["m_physScal" + 'e']);
      q8['upperBound']["Set"]((q9['x'] + q9["width"]) / this["m_physScal" + 'e'], (q9['y'] + q9["height"]) / this["m_physScal" + 'e']);
      var qq = new K['RM'](0x0, 0xa);
      this["m_world"] = new K['bm'](q8, qq, !0x0);
      var qn = new K['ux']();
      qn["m_sprite"] = this["debug_spri" + 'te'];
      qn["m_drawScal" + 'e'] = 62.5;
      qn["m_fillAlph" + 'a'] = 0.3;
      qn["m_lineThic" + "kness"] = 0x1;
      qn["m_drawFlag" + 's'] = K['ux']["e_shapeBit"] | K['ux']["e_jointBit"];
      this['useDebugge' + 'r'] && this["m_world"]["SetDebugDr" + 'aw'](qn);
    };
    q7["createBodi" + 'es'] = function () {


      if ("JzzAx" !== "JzzAx") {
        return this["_tweenVal"];
      } else {
        var q8 = new K['gv']();
        var q9 = new K['m2']();
        var qq = new K['_A']();
        q9['friction'] = qq['friction'] = 0x1;
        q9["restitutio" + 'n'] = qq['restitutio' + 'n'] = 0.3;
        q9["density"] = 0x1;
        var qn = this["m_world"]["CreateBody"](q8);
        q9["SetAsOrien" + "tedBox"](0x113 / this['m_physScal' + 'e'], 0x32 / this["m_physScal" + 'e'], new K['RM'](0x113 / this["m_physScal" + 'e'], 0x190 / this["m_physScal" + 'e']));
        qn["CreateShap" + 'e'](q9);
        q9["SetAsOrien" + "tedBox"](0x113 / this["m_physScal" + 'e'], 0x32 / this["m_physScal" + 'e'], new K['RM'](0x113 / this['m_physScal' + 'e'], 0x0 / this["m_physScal" + 'e']));
        qn["CreateShap" + 'e'](q9);
        q9["SetAsOrien" + "tedBox"](0x32 / this['m_physScal' + 'e'], 0xc8 / this["m_physScal" + 'e'], new K['RM'](0x226 / this["m_physScal" + 'e'], 0xc8 / this["m_physScal" + 'e']));
        qn['CreateShap' + 'e'](q9);
        q9["SetAsOrien" + "tedBox"](0x32 / this['m_physScal' + 'e'], 0xc8 / this["m_physScal" + 'e'], new K['RM'](0x0 / this['m_physScal' + 'e'], 0xc8 / this["m_physScal" + 'e']));
        qn["CreateShap" + 'e'](q9);
        q9["SetAsOrien" + "tedBox"](0x5 / this["m_physScal" + 'e'], 0x5 / this["m_physScal" + 'e'], new K['RM'](0x0, 0x0));
        for (var qN = 0xff, qf = 0x159, qT = 0x0; qT < 0x5; qT++) {
          for (var qV = 0x0; qV < 0x5; qV++) {
            q8["position"]["Set"](qN / this["m_physScal" + 'e'], qf / this["m_physScal" + 'e']);
            (qn = this["m_world"]["CreateBody"](q8))["CreateShap" + 'e'](q9);
            qn["SetMassFro" + "mShapes"]();
            0x0 == qT && 0x4 == qV && (this["trackingBo" + 'dy'] = qn);
            qN += 0xa;
          }
          qN = 0xff;
          qf -= 0xa;
        }
        q8["position"]["Set"](0x55 / this["m_physScal" + 'e'], 0x13b / this["m_physScal" + 'e']);
        qn = this["m_world"]["CreateBody"](q8);
        qq['radius'] = 0x19 / this["m_physScal" + 'e'];
        qq["density"] = 0x3;
        qn["CreateShap" + 'e'](qq);
        qn['SetMassFro' + "mShapes"]();
        qn["SetLinearV" + "elocity"](new K['RM'](0x14, 0x0));
      }
    };
    q7['run'] = function (q8) {


      this["frames"] == this["totalFrame" + 's'] && (this["removeEven" + "tListener"](P['Jh']["ENTER_FRAM" + 'E'], this["runBind"]), this["textField"]["htmlText"] = this['debugStrin' + 'g']);
      this["m_world"]['Step'](this["m_timeStep"], this['m_iteratio' + 'ns']);
      var q9 = "frame " + this["frames"] + " = " + this["trackingBo" + 'dy']["GetPositio" + 'n']()['x'] + "<br>";
      this["debugStrin" + 'g'] = this["debugStrin" + 'g']["concat"](q9);
      this["frames"] += 0x1;
    };
    q5 = q2;
    (q6 = [{
      'key': 'result',
      'get': function () {


        if ("zYglf" !== "zYglf") {
          var qq;
          void 0x0 === D && (g = !0x0);
          void 0x0 === S && (d = 0xc8);
          void 0x0 === z && (F = 0x46);
          void 0x0 === M && (H = 0xfd8181);
          void 0x0 === b && (Z = 0xfd8181);
          void 0x0 === y && (c = 0xffffff);
          void 0x0 === X && (x = 0xffffff);
          (qq = w['call'](this, q1, a, Y) || this)["mouseUpHan" + "dler"] = function (qn) {
            if (qn["target"] == qq["answer1Btn"]) {
              qq['_index'] = 0x0;
            } else {
              if (qn["target"] != qq["answer2Btn"]) {
                return;
              }
              qq["_index"] = 0x1;
            }
            qq["dispatchEv" + "ent"](new qq['Jh'](q5["ANSWER_CHO" + "SEN"]));
          };
          qq["createButt" + "ons"](U, O, G, Q, q0, q1, q2);
          qq["adjustSpac" + 'ing']();
          qq["addEventLi" + "stener"](q3['Cm']["MOUSE_UP"], qq["mouseUpHan" + "dler"], !0x1, 0x0, !0x0);
          return qq;
        } else {
          for (var q8 = this["trackingBo" + 'dy']["GetPositio" + 'n']()['x']["toString"](); q8['length'] < 0x11;) {
            q8 = q8["concat"]('0');
          }
          return q8["substr"](q8["length"] - 0x8, 0x8);
        }
      }
    }]) && function (q8, q9) {


      if ("xUgHU" !== "Tgtdf") {
        for (var qq = 0x0; qq < q9["length"]; qq++) {
          var qn = q9[qq];
          qn["enumerable"] = qn["enumerable"] || !0x1;
          qn["configurab" + 'le'] = !0x0;
          "value" in qn && (qn['writable'] = !0x0);
          Object["defineProp" + "erty"](q8, k(qn["key"]), qn);
        }
      } else {
        var qf = I["impulse"];
        qf > k["contactImp" + "ulseDict"]["get"](f["frontShape"]) && (V["contactRes" + "ultBuffer"]['get'](B["frontShape"]) ? qf > u["contactRes" + 'ultBuffer']["get"](l["frontShape"])["impulse"] && o["contactRes" + 'ultBuffer']["set"](j['frontShape'], E) : R["contactRes" + 'ultBuffer']["set"](W["frontShape"], A));
      }
    }(q5["prototype"], q6);
    Object['defineProp' + "erty"](q5, "prototype", {
      'writable': !0x1
    });
    return q5;
  }(P['kx']);
  function W(q1) {
    if ('oFEyP' === "ztyaH") {
      N = f["published"][0x0]["lvs"][0x0]['lv']["length"];
    } else {
      var q2 = function (q4) {


        if ("object" != typeof q4 || !q4) {
          return q4;
        }
        var q5 = q4[Symbol["toPrimitiv" + 'e']];
        if (void 0x0 !== q5) {
          if ("qHAtz" !== "qHAtz") {
            var q8 = this["foreArmMin" + "Angle"] + V['random']() * this["foreArmRan" + 'ge'];
            var q9 = h["random"]() * this["timeRange"] + 0.5;
            C['os']['to'](this['foreArm'], {
              'duration': q9 * j,
              'rotation': q8,
              'ease': P['MI']["easeInOut"]
            });
          } else {
            var q6 = q5["call"](q4, "string");
            if ("object" != typeof q6) {
              return q6;
            }
            throw new TypeError("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
          }
        }
        return String(q4);
      }(q1);
      return "symbol" == typeof q2 ? q2 : q2 + '';
    }
  }
  function J(q1, q2) {
    J = Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"]['bind']() : function (q3, q4) {


      if ("OpcVD" !== "NcCBf") {
        q3["__proto__"] = q4;
        return q3;
      } else {
        this["alpha"] = 0.5;
        this['bg']["buttonMode"] = !0x1;
        this['bg']['removeEven' + 'tListener'](n['Cm']["MOUSE_UP"], this["handleMous" + 'eUp']);
      }
    };
    return J(q1, q2);
  }
  var D = function (q1) {
    function q2() {
      if ("hiROg" === "TtKPO") {
        G(j, P, z, K, H, "next", I);
      } else {
        var q8;
        (q8 = q1["call"](this) || this)["startFadeB" + "ind"] = q8["startFade"]["bind"](q8);
        q8["fadeOutBin" + 'd'] = q8["fadeOut"]["bind"](q8);
        q8['_textField'] = new P['A_']();
        var q9 = new P['lk']("HelveticaN" + "eueLT Std", 0xc, 0xff0000, null, null, null, null, null, P['MA']["CENTER"]);
        q8["_textField"]['defaultTex' + 'tFormat'] = q9;
        q8["_textField"]["multiline"] = !0x0;
        q8['_textField']["height"] = 0x14;
        q8["_textField"]["width"] = 0x12c;
        q8["_textField"]['x'] = 0x1c2;
        q8["_textField"]['mouseEnabl' + 'ed'] = !0x1;
        q8["_textField"]["selectable"] = !0x1;
        q8["_textField"]["autoSize"] = P['wL']["CENTER"];
        q8["_textField"]["wordWrap"] = !0x0;
        q8["addChild"](q8["_textField"]);
        q8["mouseEnabl" + 'ed'] = !0x1;
        q8["mouseChild" + 'ren'] = !0x1;
        return q8;
      }
    }
    var q3;
    var q4;
    q4 = q1;
    (q3 = q2)["prototype"] = Object["create"](q4["prototype"]);
    q3["prototype"]["constructo" + 'r'] = q3;
    J(q3, q4);
    var q5;
    var q6;
    var q7 = q2["prototype"];
    q7["appendText"] = function (q8) {


      if ("zmaIp" === "NbkzD") {
        if (h["shiftKey"] && !C['w']["currentlyC" + "olorDroppe" + 'rOpen']) {
          var qq = m["delta"] < 0x0 ? -0x1 : 0x1;
          I["zoom"](0.25 * qq, k["canvasHold" + 'er']["mouseX"], f["canvasHold" + 'er']['mouseY']);
        }
      } else {
        this["removeList" + "eners"]();
        this["alpha"] = 0x1;
        this["_textField"]["appendText"](q8);
      }
    };
    q7["removeList" + "eners"] = function () {


      this["_timer"] && (this["_timer"]["stop"](), this["_timer"]["removeEven" + "tListener"](P['iJ']["TIMER"], this["startFadeB" + 'ind']), this["_timer"] = null);
      this["removeEven" + "tListener"](P['Jh']["ENTER_FRAM" + 'E'], this["fadeOutBin" + 'd']);
    };
    q7["show"] = function (q8, q9, qq) {


      void 0x0 === q9 && (q9 = 0x2);
      void 0x0 === qq && (qq = 0x1);
      this["alpha"] = 0x1;
      this["_textField"]['text'] = q8;
      this["_timer"] && (this["_timer"]["stop"](), this["_timer"]["removeEven" + "tListener"](P['iJ']["TIMER"], this["startFadeB" + "ind"]), this["removeEven" + "tListener"](P['Jh']["ENTER_FRAM" + 'E'], this['fadeOutBin' + 'd']), this['_timer'] = null);
      this['fadeTime'] = 0x1e * qq;
      this["_timer"] = new P['M4'](0x3e8 * q9, 0x1);
      this["_timer"]["addEventLi" + 'stener'](P['iJ']["TIMER"], this['startFadeB' + "ind"]);
      this["_timer"]["start"]();
    };
    q7["startFade"] = function (q8) {


      if ("FHVPx" !== "rsaUQ") {
        this["_timer"] && (this["_timer"]["stop"](), this["_timer"]["removeEven" + 'tListener'](P['iJ']['TIMER'], this["startFadeB" + "ind"]), this["_timer"] = null);
        this['counter'] = 0x0;
        this["addEventLi" + "stener"](P['Jh']["ENTER_FRAM" + 'E'], this['fadeOutBin' + 'd']);
      } else {
        E["prototype"]["createBodi" + 'es']["call"](this);
        var qq = new R['gv']();
        var qn = new W['gv']();
        var qN = new A['gv']();
        var qf = new r['m2']();
        var qT = new J['_A']();
        qf["density"] = 0x2;
        qf["friction"] = 0.3;
        qf['restitutio' + 'n'] = 0.1;
        qf['filter']["categoryBi" + 'ts'] = 0x201;
        qT["density"] = 0x5;
        qT["friction"] = 0x1;
        qT["restitutio" + 'n'] = 0.3;
        qT["filter"]["categoryBi" + 'ts'] = 0x201;
        this["frameBody"] = this["_session"]["m_world"]["CreateBody"](qq);
        qf['vertexCoun' + 't'] = 0x3;
        for (var qV = 0x0; qV < 0x3; qV++) {
          var qh = this["shapeGuide"]["seatVert" + [qV + 0x1]];
          qf["vertices"][qV] = new a['RM'](this["_startX"] + qh['x'] / this["character_" + "scale"], this["_startY"] + qh['y'] / this["character_" + "scale"]);
        }
        this["seatShape"] = this['frameBody']["CreateShap" + 'e'](qf);
        this["_session"]["contactLis" + "tener"]["registerLi" + "stener"](g['fI']["RESULT"], this["seatShape"], this["contactFra" + 'meResultHa' + "ndler"]);
        qf['filter'] = this["zeroFilter"];
        qV = 0x0;
        for (; qV < 0x3; qV++) {
          qh = this["shapeGuide"]["frameVert" + [qV + 0x1]];
          qf["vertices"][qV] = new S['RM'](this["_startX"] + qh['x'] / this['character_' + 'scale'], this["_startY"] + qh['y'] / this["character_" + "scale"]);
        }
        this["frameShape"] = this["frameBody"]["CreateShap" + 'e'](qf);
        this["_session"]["contactLis" + "tener"]["registerLi" + "stener"](d['fI']["RESULT"], this["frameShape"], this['contactFra' + "meResultHa" + "ndler"]);
        this["_session"]["contactLis" + "tener"]["registerLi" + "stener"](z['fI']["ADD"], this["frameShape"], this["contactAdd" + "Handler"]);
        qV = 0x0;
        for (; qV < 0x3; qV++) {
          qh = this["shapeGuide"]["handleVert" + [qV + 0x1]];
          qf["vertices"][qV] = new F['RM'](this["_startX"] + qh['x'] / this["character_" + "scale"], this["_startY"] + qh['y'] / this["character_" + "scale"]);
        }
        this["handleShap" + 'e'] = this["frameBody"]['CreateShap' + 'e'](qf);
        this["_session"]["contactLis" + 'tener']["registerLi" + "stener"](M['fI']["RESULT"], this["handleShap" + 'e'], this["contactFra" + "meResultHa" + "ndler"]);
        this["_session"]["contactLis" + 'tener']["registerLi" + "stener"](H['fI']["ADD"], this["handleShap" + 'e'], this["contactAdd" + 'Handler']);
        qf["vertexCoun" + 't'] = 0x4;
        qV = 0x0;
        for (; qV < 0x4; qV++) {
          qh = this["shapeGuide"]["midVert" + [qV + 0x1]];
          qf["vertices"][qV] = new b['RM'](this["_startX"] + qh['x'] / this["character_" + "scale"], this["_startY"] + qh['y'] / this["character_" + "scale"]);
        }
        this["midShape"] = this["frameBody"]["CreateShap" + 'e'](qf);
        this["_session"]["contactLis" + "tener"]["registerLi" + "stener"](Z['fI']["RESULT"], this["midShape"], this["contactFra" + "meResultHa" + "ndler"]);
        this["_session"]["contactLis" + "tener"]["registerLi" + "stener"](y['fI']["ADD"], this["midShape"], this["contactAdd" + 'Handler']);
        qV = 0x0;
        for (; qV < 0x4; qV++) {
          qh = this["shapeGuide"]["endVert" + [qV + 0x1]];
          qf["vertices"][qV] = new c['RM'](this["_startX"] + qh['x'] / this['character_' + 'scale'], this["_startY"] + qh['y'] / this['character_' + "scale"]);
        }
        this['endShape'] = this["frameBody"]["CreateShap" + 'e'](qf);
        this["_session"]["contactLis" + "tener"]["registerLi" + 'stener'](X['fI']["RESULT"], this["endShape"], this['contactFra' + "meResultHa" + "ndler"]);
        this["frameBody"]['SetMassFro' + "mShapes"]();
        this['paintVecto' + 'r']["push"](this['frameBody']);
        var qC = this["shapeGuide"]["wheelShape"];
        qn['position']["Set"](this["_startX"] + qC['x'] / this['character_' + "scale"], this["_startY"] + qC['y'] / this['character_' + 'scale']);
        qn["angle"] = qC["rotation"] / x['oneEightyO' + "verPI"];
        qT["radius"] = qC["width"] / 0x2 / this["character_" + 'scale'];
        this["wheelBody"] = this["_session"]["m_world"]['CreateBody'](qn);
        this["wheelShape"] = this["wheelBody"]["CreateShap" + 'e'](qT);
        this["wheelBody"]["SetMassFro" + "mShapes"]();
        this['_session']["contactLis" + "tener"]["registerLi" + "stener"](w['fI']['ADD'], this["wheelShape"], this["contactAdd" + "Handler"]);
        qC = this["shapeGuide"]["gearShape"];
        qN["position"]["Set"](this['_startX'] + qC['x'] / this["character_" + "scale"], this["_startY"] + qC['y'] / this["character_" + "scale"]);
        qN["angle"] = qC["rotation"] / q1["oneEightyO" + 'verPI'];
        qT["radius"] = qC["width"] / 0x2 / this["character_" + "scale"];
        this["gearBody"] = this["_session"]["m_world"]["CreateBody"](qN);
        this['gearBody']["CreateShap" + 'e'](qT);
        this["gearBody"]["SetMassFro" + "mShapes"]();
        this["paintVecto" + 'r']["push"](this["gearBody"]);
        var qj = this["upperLeg1B" + 'ody']["GetShapeLi" + 'st']();
        qj["m_isSensor"] = !0x0;
        (qj = this["upperLeg2B" + "ody"]["GetShapeLi" + 'st']())["m_isSensor"] = !0x0;
        (qj = this["lowerLeg1B" + "ody"]["GetShapeLi" + 'st']())["m_isSensor"] = !0x0;
        (qj = this["lowerLeg2B" + "ody"]["GetShapeLi" + 'st']())["m_isSensor"] = !0x0;
        this['endShape']['m_isSensor'] = !0x0;
      }
    };
    q7["fadeOut"] = function (q8) {


      this['counter']++;
      this["alpha"] = (this['fadeTime'] - this["counter"]) / this["fadeTime"];
      this["counter"] == this['fadeTime'] && this["removeEven" + "tListener"](P['Jh']["ENTER_FRAM" + 'E'], this["fadeOutBin" + 'd']);
    };
    q5 = q2;
    (q6 = [{
      'key': "text",
      'get': function () {


        return this["_textField"]["text"];
      },
      'set': function (q8) {


        this["removeList" + "eners"]();
        this["alpha"] = 0x1;
        this["_textField"]["text"] = q8;
      }
    }, {
      'key': "htmlText",
      'set': function (q8) {


        this["removeList" + "eners"]();
        this["alpha"] = 0x1;
        this["_textField"]["htmlText"] = q8;
      }
    }]) && function (q8, q9) {


      for (var qq = 0x0; qq < q9["length"]; qq++) {
        if ("hwyMV" === "hwyMV") {
          var qn = q9[qq];
          qn["enumerable"] = qn["enumerable"] || !0x1;
          qn["configurab" + 'le'] = !0x0;
          "value" in qn && (qn["writable"] = !0x0);
          Object["defineProp" + "erty"](q8, W(qn["key"]), qn);
        } else {
          this['wheelJoint']["IsMotorEna" + "bled"]() && this["wheelJoint"]["EnableMoto" + 'r'](!0x1);
          0x3 != this["_currentPo" + 'se'] && 0x4 != this["_currentPo" + 'se'] || (this['currentPos' + 'e'] = 0x0);
        }
      }
    }(q5["prototype"], q6);
    Object["defineProp" + "erty"](q5, 'prototype', {
      'writable': !0x1
    });
    return q5;
  }(P['kx']);
  var z = j(0x17fd7);
  function F(q1, q2) {
    F = Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"]["bind"]() : function (q3, q4) {

      q3["__proto__"] = q4;
      return q3;
    };
    return F(q1, q2);
  }
  var M = function (q1) {
    function q2() {
      var q6;
      (q6 = q1["call"](this) || this)["alphaVal"] = 0.2;
      q6["setupMCs"]();
      return q6;
    }
    var q3;
    var q4;
    q4 = q1;
    (q3 = q2)["prototype"] = Object["create"](q4["prototype"]);
    q3['prototype']["constructo" + 'r'] = q3;
    F(q3, q4);
    var q5 = q2["prototype"];
    q5["setupMCs"] = function () {


      if ("wTKfl" !== "wTKfl") {
        var q8 = new T['Gq']();
        var q9 = new V['RM']();
        var qq = R['w']["currentSes" + "sion"]["level"];
        var qn = G['w']["currentSes" + "sion"]["m_world"];
        var qN = qq["shapeGuide"][this['id'] + 0x0];
        var qf = qq["shapeGuide"][this['id'] + 0x1];
        var qT = this["bodies"][0x0];
        var qV = this["bodies"][0x0];
        q9["Set"]((qN['x'] - qN["width"] / 0x2) / this["m_physScal" + 'e'], qN['y'] / this["m_physScal" + 'e']);
        q8["Initialize"](qq['levelBody'], qT, q9);
        qn["CreateJoin" + 't'](q8);
        for (var qh = 0x0; qh < this['total'] - 0x1; qh++) {
          qN = qq["shapeGuide"][this['id'] + qh];
          qf = qq["shapeGuide"][this['id'] + (qh + 0x1)];
          qT = this['bodies'][qh];
          qV = this["bodies"][qh + 0x1];
          q9["Set"]((qN['x'] + qf['x']) / 0x2 / this["m_physScal" + 'e'], qN['y'] / this['m_physScal' + 'e']);
          q8['Initialize'](qT, qV, q9);
          qn["CreateJoin" + 't'](q8);
        }
        q9["Set"]((qf['x'] + qf["width"] / 0x2) / this["m_physScal" + 'e'], qf['y'] / this["m_physScal" + 'e']);
        q8["Initialize"](qq["levelBody"], qV, q9);
        qn["CreateJoin" + 't'](q8);
      } else {
        var q6 = new P['j7']((0x0, z['zI'])("GameUI", "KeyDisplay"));
        q6['convertChi' + "ldren"]();
        this['addChild'](q6);
        this["upKey"] = q6["upKey"];
        this["downKey"] = q6['downKey'];
        this['leftKey'] = q6['leftKey'];
        this["rightKey"] = q6["rightKey"];
        this["spaceKey"] = q6["spaceKey"];
        this["shiftKey"] = q6["shiftKey"];
        this["ctrlKey"] = q6["ctrlKey"];
        this["zKey"] = q6["zKey"];
        this["upKey"]["alpha"] = this["alphaVal"];
        this['downKey']["alpha"] = this["alphaVal"];
        this["leftKey"]["alpha"] = this["alphaVal"];
        this["rightKey"]["alpha"] = this["alphaVal"];
        this["spaceKey"]["alpha"] = this["alphaVal"];
        this["shiftKey"]["alpha"] = this["alphaVal"];
        this["ctrlKey"]["alpha"] = this["alphaVal"];
        this['zKey']['alpha'] = this["alphaVal"];
      }
    };
    q5["upKeyON"] = function () {


      this["upKey"]["alpha"] = 0x1;
    };
    q5["upKeyOFF"] = function () {


      this["upKey"]["alpha"] = 0.2;
    };
    q5["rightKeyON"] = function () {


      this["rightKey"]["alpha"] = 0x1;
    };
    q5["rightKeyOF" + 'F'] = function () {


      this["rightKey"]["alpha"] = 0.2;
    };
    q5["downKeyON"] = function () {


      this["downKey"]["alpha"] = 0x1;
    };
    q5["downKeyOFF"] = function () {


      'fgugO' !== "PsnqY" ? this["downKey"]['alpha'] = 0.2 : V != this["helmetShap" + 'e'] ? h["prototype"]["explodeSha" + 'pe']["call"](this, C, j) : P > 0.85 && this["helmetSmas" + 'h'](0x0);
    };
    q5["leftKeyON"] = function () {


      "muzsO" === "muzsO" ? this["leftKey"]['alpha'] = 0x1 : (f['_instance'] = null, this["removeEven" + "tListener"](T['Jh']["ENTER_FRAM" + 'E'], this["resetCount" + "erBind"]), this["removeEven" + "tListener"](V['Jh']["ENTER_FRAM" + 'E'], this["followMous" + 'eBind']));
    };
    q5["leftKeyOFF"] = function () {


      this["leftKey"]["alpha"] = 0.2;
    };
    q5["spaceKeyON"] = function () {

      this["spaceKey"]['alpha'] = 0x1;
    };
    q5["spaceKeyOF" + 'F'] = function () {


      if ("eiLOT" === "hjhtf") {
        return this["_soundEffe" + 'ct'];
      } else {
        this["spaceKey"]["alpha"] = 0.2;
      }
    };
    q5["shiftKeyON"] = function () {


      if ('reUDl' !== 'aqojm') {
        this["shiftKey"]["alpha"] = 0x1;
      } else {
        if (this["firing"]) {
          var q7 = this["chairBody"]["GetAngle"]() + this["jetAngle"];
          var q8 = m["cos"](q7) * this["jetImpulse"];
          var q9 = I["sin"](q7) * this["jetImpulse"];
          this["bigWheelBo" + 'dy']["ApplyImpul" + 'se'](new k['RM'](q8, q9), this["chairBody"]["GetWorldCe" + "nter"]());
        }
        this["wheelConta" + "cts"] > 0x0 && P["abs"](this["bigWheelBo" + 'dy']['GetAngular' + "Velocity"]()) > 0x1 ? this["wheelSound"] || (this["wheelSound"] = p['m']["instance"]["playAreaSo" + 'undLoop']("BikeLoop1", this["bigWheelBo" + 'dy'], 0x0), this["wheelSound"]["fadeIn"](0.2)) : this["wheelSound"] && (this["wheelSound"]["fadeOut"](0.2), this["wheelSound"] = null);
        K["prototype"]['actions']["call"](this);
      }
    };
    q5['shiftKeyOF' + 'F'] = function () {


      "MQOmi" === "iSOvM" ? this["mobileCont" + "rols"] && (this['_character']["dead"] ? this["mobileCont" + "rols"]["controlSta" + 'te'] != K['Jo']["Dead"] && (this["mobileCont" + "rols"]["setControl" + "State"](H['Jo']["Dead"]), this["mobileCont" + "rols"]["doAttentio" + "nPulse"]()) : I['w']["hideVehicl" + 'e'] ? this['_character']["hasUserVeh" + "icle"]() && this["mobileCont" + "rols"]["controlSta" + 'te'] != k['Jo']["UserVehicl" + 'e'] ? this["mobileCont" + "rols"]["setControl" + "State"](P['Jo']["UserVehicl" + 'e']) : this['_character']['hasUserVeh' + "icle"]() || this["mobileCont" + "rols"]["controlSta" + 'te'] == q2['Jo']["Ejected"] || this["mobileCont" + "rols"]['setControl' + 'State'](q0['Jo']["Ejected"]) : this["_character"]["ejected"] && this["mobileCont" + "rols"]["controlSta" + 'te'] != F['Jo']["Ejected"] ? this['mobileCont' + "rols"]["setControl" + "State"](W['Jo']["Ejected"]) : this["_character"]["ejected"] || this["mobileCont" + "rols"]["controlSta" + 'te'] == q5['Jo']["DefaultVeh" + "icle"] || this["mobileCont" + 'rols']['setControl' + "State"](q3['Jo']['DefaultVeh' + "icle"])) : this["shiftKey"]["alpha"] = 0.2;
    };
    q5["ctrlKeyON"] = function () {


      if ("LFJJq" !== "LFJJq") {
        return this["_joint"];
      } else {
        this["ctrlKey"]["alpha"] = 0x1;
      }
    };
    q5["ctrlKeyOFF"] = function () {


      "SEJfi" === "TEiqE" ? M(function () {
        return R(0x14, '_');
      }, 0x23 - V) : this["ctrlKey"]['alpha'] = 0.2;
    };
    q5['zKeyON'] = function () {


      "AppHr" === "AppHr" ? this["zKey"]["alpha"] = 0x1 : (f["prototype"]["frameSmash"]["call"](this, T, V), this["daughter"]["detachFram" + 'e'](0x0), this["son"]['detachBask' + 'et'](0x0));
    };
    q5["zKeyOFF"] = function () {


      'rZZlS' !== "rZZlS" ? this["ejected"] ? this["releaseGri" + 'p']() : this["backShockJ" + 'oint']["IsMotorEna" + "bled"]() ? this["backShockJ" + "oint"]["GetMotorSp" + "eed"]() > 0x0 ? this["frontShock" + 'Joint']["GetJointTr" + "anslation"]() > this["verticalTr" + "anslation"] && (this["frontShock" + "Joint"]["SetMotorSp" + "eed"](-0x1), this["backShockJ" + "oint"]["SetMotorSp" + "eed"](-0x1)) : this['backShockJ' + "oint"]["GetMotorSp" + 'eed']() < 0x0 && this["backShockJ" + "oint"]["GetJointTr" + 'anslation']() < 0x0 && (this["frontShock" + "Joint"]["EnableMoto" + 'r'](!0x1), this["backShockJ" + 'oint']["EnableMoto" + 'r'](!0x1), this["frontShock" + 'Joint']['SetLimits'](0x0, 0x0), this["backShockJ" + "oint"]["SetLimits"](0x0, 0x0), this["frontShock" + "Joint"]["SetMotorSp" + "eed"](0x0), this['backShockJ' + "oint"]["SetMotorSp" + "eed"](0x0)) : 0x0 != this['backShockJ' + "oint"]["GetUpperLi" + "mit"]() && (this["frontShock" + "Joint"]["SetMotorSp" + "eed"](-0x1), this["backShockJ" + "oint"]['SetMotorSp' + "eed"](-0x1), this["frontShock" + "Joint"]["SetLimits"](0x0, this['verticalTr' + "anslation"]), this["backShockJ" + "oint"]["SetLimits"](0x0, this["verticalTr" + "anslation"]), this["frontShock" + "Joint"]["EnableMoto" + 'r'](!0x0), this["backShockJ" + "oint"]["EnableMoto" + 'r'](!0x0)) : this["zKey"]["alpha"] = 0.2;
    };
    return q2;
  }(P['kx']);
  j(0x87de);
  j(0xf23a);
  j(0x15f33);
  j(0x122b7);
  j(0x2c80);
  var H = j(0x1174c);
  var Z = j(0xbddf);
  var X = j(0x88f1);
  var x = j(0x620e);
  function Y(q1, q2) {
    Y = Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"]["bind"]() : function (q3, q4) {


      if ("pYEVm" === "pYEVm") {
        q3["__proto__"] = q4;
        return q3;
      } else {
        void 0x0 === f && (T = null);
        this["sessionCon" + "troller"] && (this['sessionCon' + 'troller']["die"](), this["sessionCon" + 'troller']["removeEven" + 'tListener'](V['$T']["MAIN_MENU"], this['closeSessi' + "onControll" + "erBind"]), this["sessionCon" + "troller"] = null);
        this["mainMenu"] && this["closeMainM" + "enu"]();
        this["openMainMe" + 'nu']();
      }
    };
    return Y(q1, q2);
  }
  var L = function (q1) {
    q1['DefaultVeh' + "icle"] = "defaultVeh" + "icle";
    q1["Ejected"] = "ejected";
    q1["UserVehicl" + 'e'] = "userVehicl" + 'e';
    q1["Dead"] = "dead";
    return q1;
  }(L || {});
  var U = function (q1) {
    if ('cofyw' !== "cofyw") {
      var q3 = (0x0, T['Wh'])(V(h["@b1"])["substring"](0x1));
      C["body1"] = this["canvas"]["groups"]["getChildAt"](q3);
    } else {
      q1["Default"] = "default";
      q1["Helicopter" + "Guy"] = 'helicopter' + "Guy";
      return q1;
    }
  }(U || {});
  var O = function (q1) {
    function q2(q6, q7) {
      if ("UdEAl" !== "kTOpD") {
        var q8;
        (q8 = q1["call"](this) || this)['MOBILE_CON' + "TROL_BUTTO" + "N_NAME_PRE" + "FIX"] = "mobile-but" + 'ton-';
        q8["nextButton" + 'Id'] = 0x0;
        q8["mouseUpHan" + "dlerBind"] = q8["mouseUpHan" + "dler"]["bind"](q8);
        q8["mouseDownH" + "andlerBind"] = q8["mouseDownH" + "andler"]["bind"](q8);
        q8['touchMoveB' + "ind"] = q8["touchMove"]["bind"](q8);
        q8["controlSta" + 'te'] = L["DefaultVeh" + "icle"];
        q8['mouseUpHan' + "dlerSessio" + 'n'] = q6;
        q8["mouseDownH" + "andlerSess" + 'ion'] = q7;
        q8['buttons'] = [];
        q8["fingerToPr" + "essedButto" + 'nMap'] = {};
        q8["buttonName" + "ToKeyCodeM" + 'ap'] = {};
        q8['isFingerOn' + "ButtonMap"] = {};
        return q8;
      } else {
        return "random-" + this['state']["toString"]();
      }
    }
    var q3;
    var q4;
    q4 = q1;
    (q3 = q2)["prototype"] = Object["create"](q4["prototype"]);
    q3["prototype"]["constructo" + 'r'] = q3;
    Y(q3, q4);
    var q5 = q2["prototype"];
    q5["doAttentio" + 'nPulse'] = function () {


      this['adjustment' + "Filter"] && H['os']["killTweens" + 'Of'](this["adjustment" + "Filter"]);
      this["adjustment" + "Filter"] = new x['MR']({
        'brightness': 0x4
      });
      var q6 = this['buttons']["slice"]();
      q6["push"](q2["pauseBtn"]);
      for (var q7 = 0x0; q7 < q6['length']; q7++) {
        q6[q7]['filters'] = [this["adjustment" + "Filter"]];
      }
      H['os']['to'](this['adjustment' + "Filter"], {
        'duration': 0x2,
        'brightness': 0x1,
        'ease': Z['MI']["easeInOut"]
      });
    };
    q5["setControl" + "State"] = function (q6) {


      this["controlSta" + 'te'] = q6;
      for (var q7 = 0x0; q7 < this["buttons"]["length"]; q7++) {
        var q8 = this["buttons"][q7];
        q8["off"]("touchend");
        q8["off"]('touchstart');
        q8["off"]("touchmove");
        this["_pixiSprit" + 'e']["removeChil" + 'd'](q8);
        q8["destroy"]();
        for (var q9 in this['fingerToPr' + "essedButto" + "nMap"]) {
          if (this["fingerToPr" + "essedButto" + 'nMap'][q9] === q8) {
            if ('erlLl' === "erlLl") {
              var qq = this['buttonName' + "ToKeyCodeM" + 'ap'][q8["name"]];
              this["mouseUpHan" + 'dlerSessio' + 'n'](qq);
            } else {
              var qN = k["lowerArm1B" + "ody"]["GetWorldPo" + "int"](new f['RM'](0x0, V["lowerArm1S" + "hape"]["GetVertice" + 's']()[0x2]['y']));
              var qf = B["frameBody"]["GetWorldPo" + 'int'](u["handleAnch" + "orPoint"]);
              l["abs"](qN['x'] - qf['x']) < o["reAttachDi" + "stance"] && j["abs"](qN['y'] - qf['y']) < E["reAttachDi" + "stance"] && (R["frameHand1"] = W["CreateJoin" + 't'](A["frameHand1" + "JointDef"]), r["lowerArm1M" + 'C']["hand"]["gotoAndSto" + 'p'](0x1), J += 0x1);
            }
          }
        }
      }
      this["buttons"] = [];
      this["fingerToPr" + "essedButto" + "nMap"] = {};
      this["buttonName" + "ToKeyCodeM" + 'ap'] = {};
      this["isFingerOn" + "ButtonMap"] = {};
      q6 == L["DefaultVeh" + "icle"] ? this["showDefaul" + "tVehicleCo" + "ntrols"]() : q6 == L["Ejected"] ? this['showEjecte' + "dControls"]() : q6 == L["UserVehicl" + 'e'] ? this["showUserVe" + 'hicleContr' + "ols"]() : L["Dead"];
    };
    q2["createPaus" + "eButton"] = function () {


      if ("ySWnN" === "dBQfC") {
        R = G['setPrototy' + "peOf"] ? j["setPrototy" + 'peOf']["bind"]() : function (qq, qn) {
          qq["__proto__"] = qn;
          return qq;
        };
        return P(z, K);
      } else {
        var q6 = I['kxk']["from"]("controls_g" + "ameplay_bt" + "n_pause.pn" + 'g');
        var q7 = q6["width"] / 0x2;
        var q8 = q6["height"] / 0x2;
        q6['setTransfo' + 'rm'](q2["PADDING_TO" + "_SIDES"] + q7 / 0x2, q2["PADDING_TO" + "_SIDES"] + q8 / 0x2, q2["BUTTON_SCA" + "LING"], q2["BUTTON_SCA" + "LING"]);
        q6["alpha"] = q2["KEY_ALPHA_" + "INACTIVE"];
        q6['anchor']["set"](0.5);
        q6["interactiv" + 'e'] = !0x0;
        q2["pauseBtn"] = q6;
        return q6;
      }
    };
    q5["addControl" + "Button"] = function (q6, q7) {


      if ("leevM" !== "leevM") {
        var q9 = P["HW_SETTING" + 'S']["cameraMode"]["screenshot" + "NumFrameDe" + "lay"];
        if ("simulateCa" + "meraStepsB" + "eforePhysi" + "csStart" in z["HW_SETTING" + 'S']["cameraMode"]) {
          for (var qq = 0x0; qq < K["HW_SETTING" + 'S']["cameraMode"]["simulateCa" + "meraStepsB" + "eforePhysi" + "csStart"]; qq++) {
            this["_camera"]["step"](0x1);
          }
        }
        for (H['XD']["USE_INTERP" + "OLATION"] = !0x1; this["frames"] != q9 && 0x0 == this["cameraMode" + "Invocation" + 's'];) {
          this["frames"] += 0x1;
          this["steps"] += 0x1;
          this['_character']['preActions']();
          this["_character"]["doNothing"]();
          this["_character"]['actions']();
          this["m_world"]["Step"](this["m_timeStep"], this["m_iteratio" + 'ns']);
          this['_character']["handleCont" + "actBuffer"]();
          this["_character"]['checkJoint' + 's']();
          this["_level"]['actions']();
          this["frames"] == q9 && (this['_character']["paint"](), this["_level"]["paint"]());
          this['_camera']['step'](0x1);
          this["_particleC" + "ontroller"]["step"](0x1);
          this["_useCullin" + 'g'] && this["cullObject" + 's']();
          this["_accumulat" + 'edStep'] = 0x0;
        }
        if (0x1 == this["cameraMode" + "Invocation" + 's']) {
          F['w']['rootApp']["renderer"]['render'](W['w']["rootApp"]['stage']);
          var qn = I['w']["rootApp"]['view']["toDataURL"]("image/png");
          var qN = q7["createElem" + "ent"]("img");
          qN['id'] = "CAMERAMODE" + "-FRAME-" + q9;
          qN["src"] = qn;
          qN["style"]["display"] = "none";
          E["body"]["appendChil" + 'd'](qN);
        }
        this["cameraMode" + "Invocation" + 's']++;
      } else {
        q6["anchor"]["set"](0.5);
        this["_pixiSprit" + 'e']["addChild"](q6);
        this["buttons"]["push"](q6);
        q6["interactiv" + 'e'] = !0x0;
        q6["alpha"] = q2["KEY_ALPHA_" + "INACTIVE"];
        q6['on']("touchend", this["mouseUpHan" + 'dlerBind']);
        q6['on']("touchstart", this['mouseDownH' + "andlerBind"]);
        q6['on']("touchmove", this["touchMoveB" + 'ind']);
        q6["name"] = '' + this["MOBILE_CON" + "TROL_BUTTO" + "N_NAME_PRE" + "FIX"] + this['nextButton' + 'Id'];
        this["buttonName" + "ToKeyCodeM" + 'ap'][q6["name"]] = q7;
        this["nextButton" + 'Id']++;
      }
    };
    q5["showDefaul" + "tVehicleCo" + "ntrols"] = function () {


      var q6;
      q6 = 0xb == X['w']["characterI" + 'ndex'] ? this["showBasicV" + "ehicleMove" + 'mentContro' + 'ls'](U["Helicopter" + 'Guy']) : this["showBasicV" + "ehicleMove" + "mentContro" + 'ls']();
      if ([0x1, 0x5]["includes"](X['w']['characterI' + "ndex"])) {
        if ("jJwYz" === 'jJwYz') {
          var q7 = I["kxk"]["from"]('controls_g' + "ameplay_bt" + "n_jet.png");
          var q8 = q7["width"] / 0x2;
          var q9 = q7["height"] / 0x2;
          q7["setTransfo" + 'rm'](q2['VIEW_WIDTH'] - q2["PADDING_TO" + '_SIDES'] - q8 / 0x2, q2["VIEW_HEIGH" + 'T'] - q2["PADDING_TO" + "_SIDES"] - q6 - q2["PADDING_BE" + "TWEEN_BUTT" + 'ONS'] - q9 / 0x2, -q2["BUTTON_SCA" + "LING"], -q2["BUTTON_SCA" + "LING"]);
          q7["angle"] = 0xb4;
          this["addControl" + "Button"](q7, X['w']['primaryAct' + "ionCode"]);
        } else {
          var qt = N["shape2"]["GetBody"]();
          qt["m_mass"] > 0x0 && 0x0 == f["shape2"]["m_isSensor"] && this["addTrigger" + "ingBody"](qt);
        }
      }
      if ([0x2, 0x4, 0x6, 0x8, 0x9]["includes"](X['w']["characterI" + "ndex"])) {
        if ("ZlmRO" === 'yHeSL') {
          p["maskTransi" + "tioning"] = !0x1;
          K["featuredMe" + 'nu'] && (m["featuredMe" + 'nu']["pixiSprite"]["mask"] = null);
          I["levelBrows" + 'er'] && (k["levelBrows" + 'er']["pixiSprite"]["mask"] = null);
          f['pixiSprite']['removeChil' + 'd'](V["menuMask"]);
          B["menuMask"] = null;
          u["levelBrows" + 'er'] && l["bringUIBut" + "tonsToFron" + 't']();
        } else {
          var qq = I["kxk"]['from']("controls_g" + 'ameplay_bt' + "n_jump.png");
          var qn = qq["width"] / 0x2;
          var qN = qq['height'] / 0x2;
          qq['setTransfo' + 'rm'](q2["PADDING_TO" + "_SIDES"] + qn / 0x2, q2["VIEW_HEIGH" + 'T'] - q2["PADDING_TO" + "_SIDES"] - q6 - q2["PADDING_BE" + "TWEEN_BUTT" + "ONS"] - qN / 0x2, -q2["BUTTON_SCA" + "LING"], -q2["BUTTON_SCA" + "LING"]);
          qq["angle"] = 0xb4;
          this["addControl" + "Button"](qq, X['w']["primaryAct" + "ionCode"]);
        }
      }
      if ([0x3, 0x7, 0xa]["includes"](X['w']["characterI" + "ndex"])) {
        var qf = I["kxk"]["from"]('controls_g' + "ameplay_bt" + "n_break.pn" + 'g');
        var qT = qf["width"] / 0x2;
        var qV = qf['height'] / 0x2;
        qf['setTransfo' + 'rm'](q2["VIEW_WIDTH"] - q2['PADDING_TO' + "_SIDES"] - qT / 0x2, q2["VIEW_HEIGH" + 'T'] - q2["PADDING_TO" + "_SIDES"] - q6 - q2["PADDING_BE" + 'TWEEN_BUTT' + "ONS"] - qV / 0x2, -q2['BUTTON_SCA' + "LING"], -q2["BUTTON_SCA" + "LING"]);
        qf["angle"] = 0xb4;
        this["addControl" + "Button"](qf, X['w']['primaryAct' + 'ionCode']);
      }
      if (0xb == X['w']["characterI" + "ndex"]) {
        var qh = I["kxk"]['from']("controls_g" + "ameplay_bt" + 'n_jump.png');
        var qC = qh["width"] / 0x2;
        var qj = qh["height"] / 0x2;
        qh["setTransfo" + 'rm'](q2["PADDING_TO" + "_SIDES"] + qC / 0x2, q2["VIEW_HEIGH" + 'T'] - q2['PADDING_TO' + "_SIDES"] - q6 - q2["PADDING_BE" + "TWEEN_BUTT" + "ONS"] - qj / 0x2, -q2["BUTTON_SCA" + "LING"], -q2["BUTTON_SCA" + "LING"]);
        qh["angle"] = 0xb4;
        this["addControl" + "Button"](qh, X['w']['secondaryA' + "ction1Code"]);
        var qP = I["kxk"]["from"]('controls_g' + "ameplay_bt" + 'n_jump.png');
        var qp = qP["width"] / 0x2;
        var qK = qP["height"] / 0x2;
        qP["setTransfo" + 'rm'](q2["PADDING_TO" + '_SIDES'] + qC + q2["PADDING_BE" + "TWEEN_BUTT" + "ONS"] + qp / 0x2, q2["VIEW_HEIGH" + 'T'] - q2["PADDING_TO" + "_SIDES"] - q6 - q2["PADDING_BE" + "TWEEN_BUTT" + "ONS"] - qK / 0x2, -q2["BUTTON_SCA" + "LING"], -q2["BUTTON_SCA" + "LING"]);
        this["addControl" + "Button"](qP, X['w']["secondaryA" + "ction2Code"]);
        var qm = I["kxk"]["from"]('controls_g' + "ameplay_bt" + 'n_break.pn' + 'g');
        var qI = qm["width"] / 0x2;
        var qk = qm["height"] / 0x2;
        qm["setTransfo" + 'rm'](q2["VIEW_WIDTH"] - q2["PADDING_TO" + '_SIDES'] - qI / 0x2, q2["VIEW_HEIGH" + 'T'] - q2["PADDING_TO" + "_SIDES"] - q6 - q2["PADDING_BE" + 'TWEEN_BUTT' + "ONS"] - qk / 0x2, -q2["BUTTON_SCA" + "LING"], -q2["BUTTON_SCA" + 'LING']);
        this["addControl" + 'Button'](qm, X['w']['primaryAct' + "ionCode"]);
      }
    };
    q5["showEjecte" + "dControls"] = function () {


      if ('qLkPo' === "tKNaH") {
        var qp = I["impulse"];
        qp > k["contactImp" + "ulseDict"]["get"](f["frontShape"]) && (V["contactRes" + "ultBuffer"]["get"](B["frontShape"]) ? qp > u["contactRes" + "ultBuffer"]["get"](l["frontShape"])["impulse"] && o["contactRes" + "ultBuffer"]["set"](j['frontShape'], E) : R["contactRes" + "ultBuffer"]["set"](W["frontShape"], A));
      } else {
        var q6 = I["kxk"]['from']("controls_g" + "ameplay_bt" + 'n_grab.png');
        var q7 = q6["width"] / 0x2;
        var q8 = q6["height"] / 0x2;
        q6["setTransfo" + 'rm'](q2["VIEW_WIDTH"] - q2["PADDING_TO" + '_SIDES'] - q7 / 0x2, -q2["PADDING_TO" + '_SIDES'] + q2["VIEW_HEIGH" + 'T'] - q8 / 0x2, q2["BUTTON_SCA" + "LING"], q2['BUTTON_SCA' + "LING"]);
        this["addControl" + "Button"](q6, X['w']["primaryAct" + "ionCode"]);
        var q9 = I['kxk']["from"]("controls_g" + "ameplay_bt" + "n_arch.png");
        var qq = q9["width"] / 0x2;
        var qn = q9["height"] / 0x2;
        var qN = I["kxk"]["from"]("controls_g" + "ameplay_bt" + "n_tuck.png");
        var qf = qN["width"] / 0x2;
        var qT = qN["height"] / 0x2;
        var qV = I["kxk"]["from"]('controls_g' + "ameplay_bt" + 'n_superman' + ".png");
        var qh = qV["height"] / 0x2;
        var qC = I["kxk"]["from"]("controls_g" + "ameplay_bt" + "n_pushup.p" + 'ng');
        var qj = qC["width"] / 0x2;
        q9["setTransfo" + 'rm'](q2["PADDING_TO" + "_SIDES"] + qq / 0x2, -q2["PADDING_TO" + "_SIDES"] + q2["VIEW_HEIGH" + 'T'] - qT - qn / 0x2, q2["BUTTON_SCA" + "LING"], q2["BUTTON_SCA" + 'LING']);
        this["addControl" + "Button"](q9, X['w']["leanBackCo" + 'de']);
        qV['setTransfo' + 'rm'](q2["PADDING_TO" + "_SIDES"] + qq + qf / 0x2, -q2["PADDING_TO" + '_SIDES'] + q2['VIEW_HEIGH' + 'T'] - qT - qn - qh / 0x2, q2["BUTTON_SCA" + "LING"], q2["BUTTON_SCA" + "LING"]);
        this["addControl" + "Button"](qV, X['w']["accelerate" + "Code"]);
        qN["setTransfo" + 'rm'](q2["PADDING_TO" + "_SIDES"] + qq + qf / 0x2, -q2["PADDING_TO" + "_SIDES"] + q2["VIEW_HEIGH" + 'T'] - qT / 0x2, q2["BUTTON_SCA" + "LING"], q2["BUTTON_SCA" + "LING"]);
        this['addControl' + "Button"](qN, X['w']["decelerate" + "Code"]);
        qC["setTransfo" + 'rm'](q2["PADDING_TO" + "_SIDES"] + qq + qf + qj / 0x2, -q2['PADDING_TO' + "_SIDES"] + q2["VIEW_HEIGH" + 'T'] - qT - qn / 0x2, q2["BUTTON_SCA" + "LING"], q2["BUTTON_SCA" + "LING"]);
        this["addControl" + "Button"](qC, X['w']["leanForwar" + 'dCode']);
      }
    };
    q5["showBasicV" + "ehicleMove" + "mentContro" + 'ls'] = function (q6) {


      void 0x0 === q6 && (q6 = U["Default"]);
      var q7 = q6 == U["Helicopter" + "Guy"];
      var q8 = I["kxk"]["from"]("controls_g" + "ameplay_bt" + "n_lean.png");
      var q9 = q8["width"] / 0x2;
      var qq = q8["height"] / 0x2;
      q8["setTransfo" + 'rm'](q2["PADDING_TO" + "_SIDES"] + q9 / 0x2, -q2['PADDING_TO' + '_SIDES'] + q2["VIEW_HEIGH" + 'T'] - qq / 0x2, -q2["BUTTON_SCA" + "LING"], q2["BUTTON_SCA" + "LING"]);
      q8["angle"] = 0x5a;
      this["addControl" + "Button"](q8, X['w']["leanBackCo" + 'de']);
      var qn = I["kxk"]["from"]("controls_g" + "ameplay_bt" + 'n_lean.png');
      var qN = qn["width"] / 0x2;
      var qf = qn["height"] / 0x2;
      qn["setTransfo" + 'rm'](q2["PADDING_TO" + '_SIDES'] + q9 + q2["PADDING_BE" + "TWEEN_BUTT" + "ONS"] + qN / 0x2, -q2["PADDING_TO" + "_SIDES"] + q2["VIEW_HEIGH" + 'T'] - qf / 0x2, -q2["BUTTON_SCA" + "LING"], -q2["BUTTON_SCA" + "LING"]);
      qn["angle"] = 0x5a;
      this["addControl" + "Button"](qn, X['w']["leanForwar" + "dCode"]);
      var qT = I["kxk"]["from"]('controls_g' + "ameplay_bt" + "n_move.png");
      var qV = qT["width"] / 0x2;
      var qh = qT["height"] / 0x2;
      qT['setTransfo' + 'rm'](q2["VIEW_WIDTH"] - q2["PADDING_TO" + "_SIDES"] - qV / 0x2, -q2["PADDING_TO" + "_SIDES"] + q2['VIEW_HEIGH' + 'T'] - qh / 0x2, -q2["BUTTON_SCA" + "LING"], -q2["BUTTON_SCA" + "LING"]);
      qT["angle"] = q7 ? 0x5a : 0xb4;
      this["addControl" + 'Button'](qT, X['w']["accelerate" + "Code"]);
      var qC = I["kxk"]["from"]("controls_g" + "ameplay_bt" + "n_move.png");
      var qj = qC["width"] / 0x2;
      var qP = qC['height'] / 0x2;
      qC["setTransfo" + 'rm'](q2["VIEW_WIDTH"] - q2["PADDING_TO" + "_SIDES"] - qV - q2["PADDING_BE" + "TWEEN_BUTT" + 'ONS'] - qj / 0x2, -q2["PADDING_TO" + "_SIDES"] + q2["VIEW_HEIGH" + 'T'] - qP / 0x2, -q2["BUTTON_SCA" + 'LING'], -q2["BUTTON_SCA" + "LING"]);
      qC["angle"] = q7 ? -0x5a : 0x0;
      this['addControl' + "Button"](qC, X['w']["decelerate" + 'Code']);
      if (q7) {
        if ("PQpQr" !== "THosS") {
          var qp = Number(qC['x']);
          var qK = Number(qC['y']);
          qC['x'] = qT['x'];
          qC['y'] = qT['y'];
          qT['x'] = qp;
          qT['y'] = qK;
        } else {
          return this["_refGroup"];
        }
      }
      var qm = I["kxk"]['from']("controls_g" + "ameplay_bt" + "n_eject.pn" + 'g');
      var qI = qm["width"] / 0x2;
      var qk = qm["height"] / 0x2;
      qm["setTransfo" + 'rm'](q2["VIEW_WIDTH"] - q2["PADDING_TO" + "_SIDES"] - qI / 0x2, q2["PADDING_TO" + "_SIDES"] + qk / 0x2, q2['BUTTON_SCA' + "LING"], q2['BUTTON_SCA' + "LING"]);
      this["addControl" + 'Button'](qm, X['w']["ejectCode"]);
      return qV;
    };
    q5["showUserVe" + 'hicleContr' + 'ols'] = function () {


      var q6 = this;
      var q7 = this["showBasicV" + "ehicleMove" + "mentContro" + 'ls']();
      var q8 = I['kxk']["from"]("controls_g" + 'ameplay_bt' + "n_jump.png");
      var q9 = q8["width"] / 0x2;
      var qq = q8["height"] / 0x2;
      q8["setTransfo" + 'rm'](q2['PADDING_TO' + '_SIDES'] + q9 / 0x2, q2["VIEW_HEIGH" + 'T'] - q2['PADDING_TO' + "_SIDES"] - q7 - q2["PADDING_BE" + "TWEEN_BUTT" + "ONS"] - qq / 0x2, -q2["BUTTON_SCA" + "LING"], -q2["BUTTON_SCA" + 'LING']);
      q8["angle"] = 0xb4;
      this["addControl" + "Button"](q8, X['w']["primaryAct" + "ionCode"]);
      var qn = I["kxk"]['from']("controls_g" + "ameplay_bt" + "n_break.pn" + 'g');
      var qN = qn["width"] / 0x2;
      var qf = qn["height"] / 0x2;
      qn["setTransfo" + 'rm'](q2["PADDING_TO" + "_SIDES"] + q9 + q2["PADDING_BE" + "TWEEN_BUTT" + "ONS"] + qN / 0x2, q2["VIEW_HEIGH" + 'T'] - q2["PADDING_TO" + "_SIDES"] - q7 - q2["PADDING_BE" + "TWEEN_BUTT" + "ONS"] - qf / 0x2, -q2["BUTTON_SCA" + "LING"], -q2["BUTTON_SCA" + "LING"]);
      qn["angle"] = 0xb4;
      this["addControl" + "Button"](qn, X['w']['secondaryA' + "ction2Code"]);
      var qT = I['kxk']['from']("controls_g" + "ameplay_bt" + "n_break.pn" + 'g');
      var qV = qT['width'] / 0x2;
      var qh = qT["height"] / 0x2;
      qT["setTransfo" + 'rm'](q2["PADDING_TO" + "_SIDES"] + q9 + q2["PADDING_BE" + 'TWEEN_BUTT' + "ONS"] + qN + q2["PADDING_BE" + "TWEEN_BUTT" + "ONS"] + qV / 0x2, q2["VIEW_HEIGH" + 'T'] - q2["PADDING_TO" + "_SIDES"] - q7 - q2["PADDING_BE" + "TWEEN_BUTT" + "ONS"] - qh / 0x2, -q2["BUTTON_SCA" + 'LING'], -q2["BUTTON_SCA" + "LING"]);
      qT["angle"] = 0xb4;
      this["addControl" + "Button"](qT, X['w']['secondaryA' + "ction1Code"]);
      this["mouseDownH" + 'andlerSess' + "ion"](X['w']["primaryAct" + "ionCode"]);
      setTimeout(function () {
        return q6["mouseUpHan" + 'dlerSessio' + 'n'](X['w']["primaryAct" + "ionCode"]);
      }, 0x64);
    };
    q5["mouseUpHan" + 'dler'] = function (q6) {


      if ("DQGao" !== "DQGao") {
        void 0x0 === H && (O = -0x1);
        return 0x0 === Z['w']["bloodSetti" + 'ng'] ? new Z() : (0x1 == J['w']["bloodSetti" + 'ng'] ? (qq = new X(this["bloodBmdAr" + "ray"], x, U, q6, E, Y, X), -0x1 == L ? U['addChild'](qq) : O["addChildAt"](qq, G)) : 0x2 == Q['w']["bloodSetti" + 'ng'] ? (qq = new q0(null, q1, q2, q3, q4, q5, q6), -0x1 == q7 ? q8["addChild"](qq) : q9['addChildAt'](qq, qq)) : qq = new qn(this["bloodSprit" + 'e'], qN, qf, qT, qV, qh, qC), this["emitters"]["push"](qq), qq);
        var qq;
      } else {
        var q7 = q6["currentTar" + "get"];
        delete this["fingerToPr" + "essedButto" + "nMap"][q6['data']["identifier"]];
        delete this['isFingerOn' + "ButtonMap"][q6["data"]["identifier"]];
        var q8 = this["buttonName" + "ToKeyCodeM" + 'ap'][q7["name"]];
        q7["alpha"] = q2["KEY_ALPHA_" + "INACTIVE"];
        this["mouseUpHan" + "dlerSessio" + 'n'](q8);
      }
    };
    q5["mouseDownH" + "andler"] = function (q6) {


      if ("iMgPK" === "evHtS") {
        if (!V['w']["sharedObje" + 'ct']['data']["hardwareAc" + "celAlertAc" + "cepted"] && (0x0, h['M0'])()["accelerati" + 'onStatus'] === C['FF']["Disabled"]) {
          var qq = new p['rg']("It looks l" + 'ike\x20hardwa' + "re acceler" + 'ation\x20is\x20d' + "isabled.\nI" + "f the game" + " is slow o" + 'r\x20laggy,\x20t' + "ry enablin" + "g hardware" + " accelerat" + "ion in the" + " browser s" + "ettings.", "alright", "don't show" + " again", !0x0, 0x118, 0x78, 0x4ec44d, 0xfd8181);
          qq['addEventLi' + "stener"](K['rg']["ANSWER_CHO" + "SEN"], this["hardwareAc" + "celAnswerC" + "hosen"], !0x1, 0x0, !0x0);
          var qn = qq["window"];
          this["stage"]["addChild"](qn);
          qn["center"]();
        }
      } else {
        var q7 = q6["currentTar" + 'get'];
        this["fingerToPr" + 'essedButto' + "nMap"][q6["data"]["identifier"]] = q6["currentTar" + "get"];
        this["isFingerOn" + "ButtonMap"][q6["data"]["identifier"]] = !0x0;
        var q8 = this["buttonName" + "ToKeyCodeM" + 'ap'][q7["name"]];
        q7["alpha"] = q2["KEY_ALPHA_" + "ACTIVE"];
        this["mouseDownH" + "andlerSess" + "ion"](q8);
      }
    };
    q5['touchMove'] = function (q6) {


      if ('ULVUk' === "ULVUk") {
        var q7 = q6['data']["identifier"];
        if (void 0x0 !== this["fingerToPr" + 'essedButto' + "nMap"][q7]) {
          if ("yssRt" !== "yssRt") {
            return n["trim"]()["toLowerCas" + 'e']();
          } else {
            var q8 = this["stage"]["renderer"]["plugins"]["interactio" + 'n']["hitTest"](q6["data"]["global"]);
            if (q8 && this["fingerToPr" + "essedButto" + "nMap"][q7]["name"] !== q8["name"]) {
              if (this["isFingerOn" + "ButtonMap"][q7]) {
                var q9 = this["fingerToPr" + "essedButto" + "nMap"][q7];
                var qq = this["buttonName" + "ToKeyCodeM" + 'ap'][q9["name"]];
                this["mouseUpHan" + "dlerSessio" + 'n'](qq);
                q9["alpha"] = q2["KEY_ALPHA_" + "INACTIVE"];
              }
              delete this["isFingerOn" + "ButtonMap"][q7];
              if (null !== q8["name"] && void 0x0 !== q8["name"] && q8["name"]["startsWith"](this["MOBILE_CON" + "TROL_BUTTO" + "N_NAME_PRE" + "FIX"])) {
                this["fingerToPr" + "essedButto" + "nMap"][q7] = q8;
                var qn = this["buttonName" + "ToKeyCodeM" + 'ap'][q8['name']];
                this["isFingerOn" + 'ButtonMap'][q7] = !0x0;
                q8['alpha'] = q2["KEY_ALPHA_" + "ACTIVE"];
                this["mouseDownH" + "andlerSess" + "ion"](qn);
              }
            }
          }
        }
      } else {
        T["addEventLi" + "stener"](V['$']['COORDINATE' + "_CHANGE"], this["targetMove" + 'd'], !0x1, 0x0, !0x0);
        h["addEventLi" + "stener"](C['$']["SELECTION_" + "STATE_CHAN" + 'GE'], this["targetSele" + 'ctionChang' + 'ed'], !0x1, 0x0, !0x0);
      }
    };
    q5["destroy"] = function () {


      for (var q6 = 0x0; q6 < this["buttons"]["length"]; q6++) {
        if ("mcsii" === "mcsii") {
          var q7 = this["buttons"][q6];
          q7["off"]("touchend");
          q7["off"]("touchstart");
          q7["off"]("touchmove");
        } else {
          var q9 = V[h];
          q9["enumerable"] = q9["enumerable"] || !0x1;
          q9["configurab" + 'le'] = !0x0;
          "value" in q9 && (q9['writable'] = !0x0);
          C["defineProp" + "erty"](j, P(q9["key"]), q9);
        }
      }
      this["adjustment" + "Filter"] && H['os']["killTweens" + 'Of'](this["adjustment" + "Filter"]);
      q1["prototype"]["destroy"]["call"](this);
    };
    return q2;
  }(P['kx']);
  O["KEY_ALPHA_" + "INACTIVE"] = 0.2;
  O['KEY_ALPHA_' + "ACTIVE"] = 0x1;
  O["BUTTON_SCA" + "LING"] = 0.5;
  O["PADDING_TO" + "_SIDES"] = 0xf;
  O["PADDING_BE" + "TWEEN_BUTT" + "ONS"] = 0xa;
  O["VIEW_WIDTH"] = 0x384;
  O["VIEW_HEIGH" + 'T'] = 0x1f4;
  var G = j(0x3432);
  function Q(q1, q2) {


    return "qJXTK" === "BQOJP" ? (f["__proto__"] = T, V) : (Q = Object["setPrototy" + "peOf"] ? Object["setPrototy" + 'peOf']['bind']() : function (q4, q5) {
      if ("wbSeN" !== "yDYJA") {
        q4["__proto__"] = q5;
        return q4;
      } else {
        if (this["bloodBitma" + 'p1']) {
          var q7 = N['w']["currentSes" + "sion"]["level"]["foreground"];
          q7 && this["containerS" + "prite"]["addChildAt"](this["bloodBitma" + 'p1'], this["containerS" + "prite"]['getChildIn' + "dex"](q7));
        }
      }
    }, Q(q1, q2));
  }
  var q0 = function (q1) {


    function q2() {
      if ("sQCDO" === "sQCDO") {
        var q6;
        (q6 = q1["call"](this) || this)['barWidth'] = 0x258;
        q6["barHeight"] = 0x6;
        q6["border"] = 0x2;
        q6["minWidth"] = 0xa;
        q6['remainder'] = q6["barWidth"] - q6["minWidth"];
        q6['speedArray'] = [0x5, 0xf, 0x1e, 0x3c, 0x64];
        q6['speedIndex'] = 0x2;
        q6["mouseUpHan" + "dler"] = function (q7) {


          switch (q7["target"]) {
            case q6["leftArrows"]:
              q6["decreaseSp" + 'eed']();
              break;
            case q6["rightArrow" + 's']:
              q6['increaseSp' + 'eed']();
          }
        };
        q6['mouseOverH' + "andler"] = function (q7) {


          if ('zPTKp' === "zPTKp") {
            switch (q7['target']) {
              case q6["leftArrows"]:
                G['uO']["instance"]["show"]("slower", q6["leftArrows"]);
                break;
              case q6["rightArrow" + 's']:
                G['uO']["instance"]["show"]("faster", q6["rightArrow" + 's']);
            }
          } else {
            var q9 = this["levelSelec" + 'tion']['y'] + this["levelSelec" + "tion"]["maskHeight"];
            (N = 0x160 - this['y'] - q9) < 0x0 && (this['y'] += f);
          }
        };
        q6['drawShapes']();
        q6["leftArrows"]['addEventLi' + 'stener'](P['Cm']["MOUSE_UP"], q6["mouseUpHan" + "dler"]);
        q6['rightArrow' + 's']["addEventLi" + "stener"](P['Cm']["MOUSE_UP"], q6["mouseUpHan" + 'dler']);
        q6['leftArrows']['addEventLi' + "stener"](P['Cm']["MOUSE_OVER"], q6["mouseOverH" + "andler"]);
        q6["rightArrow" + 's']['addEventLi' + "stener"](P['Cm']["MOUSE_OVER"], q6['mouseOverH' + 'andler']);
        return q6;
      } else {
        this["writeBuffe" + "rFunc"](k, "writeInt32", 0x4);
      }
    }
    var q3;
    var q4;
    q4 = q1;
    (q3 = q2)["prototype"] = Object["create"](q4["prototype"]);
    q3["prototype"]["constructo" + 'r'] = q3;
    Q(q3, q4);
    var q5 = q2["prototype"];
    q5["drawShapes"] = function () {
      this["bgBar"] = new P['kx']();
      this["addChild"](this["bgBar"]);
      this["bgBar"]["graphics"]["beginFill"](0xcccccc);
      this["bgBar"]["graphics"]["drawRoundR" + "ect"](-this["border"], -this['border'], this["barWidth"] + 0x2 * this['border'], this['barHeight'] + 0x2 * this["border"], 0x2 * this["border"], 0x2 * this["border"]);
      this["bgBar"]["graphics"]["endFill"]();
      this["progBar"] = new P['kx']();
      this["addChild"](this["progBar"]);
      this["progBar"]["graphics"]["beginFill"](0xfd8181);
      this["progBar"]["graphics"]["drawRoundR" + 'ect'](0x0, 0x0, this["barWidth"], this["barHeight"], this["border"], this["border"]);
      this["progBar"]["graphics"]["endFill"]();
      this["progBar"]["scale9Grid"] = new P['M_'](this["border"], this['border'], 0x5, 0x2);
      this["updateProg" + "ress"](0x0, 0x1);
      var q6 = this['barHeight'] + 0x2 * this["border"];
      var q7 = q6 / 0x2;
      this['rightArrow' + 's'] = new P['kx']();
      this["addChild"](this['rightArrow' + 's']);
      this["rightArrow" + 's']["graphics"]["beginFill"](0xcccccc);
      this["rightArrow" + 's']["graphics"]["lineTo"](q6, q7);
      this["rightArrow" + 's']["graphics"]["lineTo"](0x0, q6);
      this["rightArrow" + 's']["graphics"]["lineTo"](0x0, 0x0);
      this["rightArrow" + 's']["graphics"]["endFill"]();
      this["rightArrow" + 's']['graphics']['beginFill'](0xcccccc);
      this['rightArrow' + 's']["graphics"]['moveTo'](q7, 0x0);
      this['rightArrow' + 's']["graphics"]["lineTo"](q6 + q7, q7);
      this["rightArrow" + 's']["graphics"]["lineTo"](q7, q6);
      this["rightArrow" + 's']["graphics"]['lineTo'](q7, 0x0);
      this["rightArrow" + 's']["graphics"]['endFill']();
      this["rightArrow" + 's']['x'] = this["barWidth"] + 0xf;
      this["rightArrow" + 's']['y'] = -this["border"];
      this["leftArrows"] = new P['kx']();
      this["addChild"](this["leftArrows"]);
      this['leftArrows']["graphics"]["beginFill"](0xcccccc);
      this["leftArrows"]["graphics"]["lineTo"](0x0, q6);
      this["leftArrows"]['graphics']["lineTo"](-q6, q7);
      this["leftArrows"]["graphics"]["lineTo"](0x0, 0x0);
      this["leftArrows"]["graphics"]["endFill"]();
      this["leftArrows"]["graphics"]["beginFill"](0xcccccc);
      this["leftArrows"]["graphics"]["moveTo"](-q7, 0x0);
      this["leftArrows"]["graphics"]["lineTo"](-q7, q6);
      this["leftArrows"]['graphics']["lineTo"](-(q6 + q7), q7);
      this["leftArrows"]["graphics"]["lineTo"](-q7, 0x0);
      this["leftArrows"]['graphics']['endFill']();
      this["leftArrows"]['x'] = -0xf;
      this["leftArrows"]['y'] = -this["border"];
      this["leftArrows"]["buttonMode"] = this['rightArrow' + 's']["buttonMode"] = !0x0;
    };
    q5["updateProg" + "ress"] = function (q6, q7) {
      if ("EbiuJ" !== "RgEnu") {
        var q8 = q6 / q7;
        this['progBar']["width"] = this['minWidth'] + Math["min"](q8 * this["remainder"], this["remainder"]);
      } else {
        k["clearInter" + 'val'](this["timerId"]);
      }
    };
    q5["increaseSp" + "eed"] = function () {
      this["speedIndex"] = Math["min"](this["speedArray"]["length"] - 0x1, this["speedIndex"] + 0x1);
      this["stage"]['frameRate'] = this["speedArray"][this["speedIndex"]];
    };
    q5["decreaseSp" + "eed"] = function () {
      "kIwbJ" !== 'tPPRm' ? (this["speedIndex"] = Math["max"](0x0, this["speedIndex"] - 0x1), this["stage"]["frameRate"] = this['speedArray'][this["speedIndex"]]) : (V = h, C = 0x1, j = P);
    };
    q5["die"] = function () {
      this["leftArrows"]['removeEven' + "tListener"](P['Cm']["MOUSE_UP"], this["mouseUpHan" + "dler"]);
      this["rightArrow" + 's']["removeEven" + "tListener"](P['Cm']["MOUSE_OVER"], this["mouseOverH" + "andler"]);
      this["leftArrows"]["removeEven" + "tListener"](P['Cm']['MOUSE_UP'], this["mouseUpHan" + "dler"]);
      this["rightArrow" + 's']["removeEven" + 'tListener'](P['Cm']["MOUSE_OVER"], this["mouseOverH" + "andler"]);
      this["stage"]['frameRate'] = 0x1e;
    };
    return q2;
  }(P['kx']);
}