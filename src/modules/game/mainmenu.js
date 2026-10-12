function (q0, q1, q2) {
  'use strict';

  q2['d'](q1, {
    'fI': () => q4['f'],
    'm3': () => q5['m3'],
    'YI': () => q6['Y'],
    'Du': () => qt,
    'cU': () => qN,
    'JS': () => q5['JS'],
    'PL': () => qf['P'],
    'Nn': () => qE['N'],
    'je': () => qi,
    'xF': () => nq,
    'IL': () => nV,
    'Gp': () => nC,
    'Vc': () => nP,
    '_L': () => q3['_'],
    'Pu': () => qm
  });
  var q3 = q2(0x74c4);
  var q4 = q2(0x1fa6);
  var q5 = q2(0x83f2);
  var q6 = q2(0x18496);
  q2(0x65f3);
  q2(0x977d);
  q2(0xb284);
  q2(0x15de4);
  q2(0xcdc3);
  q2(0x15d77);
  q2(0xb4c);
  var q7 = q2(0x136b);
  var q8 = q2(0xfc39);
  var q9 = function () {
    if ("UQuSI" === "HqCjH") {
      var nK = this;
      this["buttons"] = [];
      var nm = 0x3d88c7;
      var nI = 0xfd8181;
      E['instance']["resize"]();
      this["creditsBtn"] = new R("CREDITS", 0x19, nI);
      this['addChild'](this['creditsBtn']);
      this["optionsBtn"] = new W("OPTIONS", 0x19, nI);
      this["addChild"](this['optionsBtn']);
      this["editorBtn"] = new A("LEVEL EDIT" + 'OR', 0x1e, nm);
      this["addChild"](this["editorBtn"]);
      this["loadLevelB" + 'tn'] = new r("LOAD LEVEL" + "/REPLAY", 0x1e, nm);
      this['addChild'](this["loadLevelB" + 'tn']);
      this["browseBtn"] = new J("BROWSE LEV" + "ELS", 0x1e, nm);
      this['addChild'](this["browseBtn"]);
      this["playBtn"] = new D('PLAY', 0x38, nm);
      this["addChild"](this["playBtn"]);
      this["creditsBtn"]['x'] = this["loadLevelB" + 'tn']['x'] = this["optionsBtn"]['x'] = this["editorBtn"]['x'] = this["browseBtn"]['x'] = this["playBtn"]['x'] = this["buttonX"];
      this["buttons"] = [this["playBtn"], this["browseBtn"], this["loadLevelB" + 'tn'], this["editorBtn"], this["optionsBtn"], this['creditsBtn']];
      this["spaceHeigh" + 't'] = (this["buttons"]["length"] - 0x1) * this["buttonSpac" + "ing"];
      this["muteBtn"] = new g['j7']();
      this["muteBtn"]["setPixiMov" + "ieClip"]((0x0, S['zI'])("GameUI", "MuteButton"));
      d['w']['mobileCont' + "rols"] ? (this["muteBtn"]["scaleX"] = 0x3, this["muteBtn"]["scaleY"] = 0x3, this["muteBtn"]['x'] = this["stage"]["stageWidth"] - 0x3 * this['muteBtn']["width"] - 0x5, this["muteBtn"]['y'] = 0x7) : (this["muteBtn"]['x'] = this["stage"]["stageWidth"] - this["muteBtn"]["width"] - 0x5, this["muteBtn"]['y'] = 0x5);
      this["muteBtn"]['gotoAndSto' + 'p'](0x1);
      this["muteBtn"]["buttonMode"] = !0x0;
      this["muteBtn"]['alpha'] = 0.7;
      this["addChild"](this["muteBtn"]);
      this["muteBtn"]["interactiv" + 'e'] = !0x0;
      this["muteBtn"]["gotoAndSto" + 'p'](z['w']["sharedObje" + 'ct']["data"]['muted'] ? 0x2 : 0x1);
      this["fullScreen" + "Button"] = new F['j7']();
      this["fullScreen" + "Button"]["setPixiMov" + "ieClip"]((0x0, M['zI'])("GameUI", 'FullScreen' + "Button"));
      this["fullScreen" + "Button"]["buttonMode"] = !0x0;
      this["fullScreen" + "Button"]["interactiv" + 'e'] = !0x0;
      this["stage"]["displaySta" + 'te'] == H['se']["FULL_SCREE" + 'N_INTERACT' + "IVE"] ? this["fullScreen" + "Button"]["gotoAndSto" + 'p'](0x2) : this["fullScreen" + 'Button']["gotoAndSto" + 'p'](0x1);
      this['fullScreen' + "Button"]["alpha"] = 0.7;
      this["fullScreen" + "Button"]["_pixiSprit" + 'e']["pivot"]['x'] = this['fullScreen' + "Button"]["_pixiSprit" + 'e']["width"] / 0x2;
      this["fullScreen" + 'Button']["_pixiSprit" + 'e']["pivot"]['y'] = this["fullScreen" + "Button"]['_pixiSprit' + 'e']["height"] / 0x2;
      b['w']["mobileCont" + "rols"] ? (this["fullScreen" + "Button"]['scale']["set"](0x2), this['fullScreen' + "Button"]['x'] = this["stage"]["stageWidth"] - this["muteBtn"]["width"] - 0x2 * this["fullScreen" + "Button"]["width"], this["fullScreen" + "Button"]['y'] = 0x16) : (this['fullScreen' + 'Button']['scale']["set"](0.8), this["fullScreen" + "Button"]['x'] = this["stage"]['stageWidth'] - this['muteBtn']['width'] - this["fullScreen" + 'Button']["width"] - 0x3, this["fullScreen" + "Button"]['y'] = 0xa);
      this["addChild"](this["fullScreen" + "Button"]);
      Z['w']["mobileCont" + "rols"] && (this["bounceAnim" + "ationLoopI" + "nterval"] = y["setInterva" + 'l'](function () {


        nK["stage"]["displaySta" + 'te'] != nK['se']["FULL_SCREE" + "N_INTERACT" + "IVE"] && nm['os']['to'](nK["fullScreen" + 'Button']["scale"], {
          'duration': 0.5,
          'x': 2.5,
          'y': 2.5,
          'ease': nI['xu']['easeOut'],
          'onComplete': function () {
            O['os']['to'](nK['fullScreen' + "Button"]["scale"], {
              'duration': 0x1,
              'x': 0x2,
              'y': 0x2,
              'ease': G['br']["easeOut"]
            });
          }
        });
      }, 0x1194));
    } else {
      function nK() {

        this["first"] = 0x0;
      }
      nK["prototype"]["mouseData"] = function () {};
      return nK;
    }
  }();
  function qq(np) {
    var nK = function (nm) {
      if ("object" != typeof nm || !nm) {
        return nm;
      }
      var nI = nm[Symbol["toPrimitiv" + 'e']];
      if (void 0x0 !== nI) {
        var nk = nI["call"](nm, "string");
        if ('object' != typeof nk) {
          return nk;
        }
        throw new TypeError("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
      }
      return String(nm);
    }(np);
    return "symbol" == typeof nK ? nK : nK + '';
  }
  function qn(np, nK) {
    qn = Object["setPrototy" + "peOf"] ? Object["setPrototy" + 'peOf']["bind"]() : function (nm, nI) {
      nm['__proto__'] = nI;
      return nm;
    };
    return qn(np, nK);
  }
  var qN = function (np) {
    if ("qWLXc" !== "qWLXc") {
      this["ejected"] ? this["currentPos" + 'e'] = 0x3 : (this["backWheelJ" + 'oint']["IsMotorEna" + "bled"]() || (this["backWheelJ" + "oint"]["EnableMoto" + 'r'](!0x0), this["frontWheel" + "Joint"]["EnableMoto" + 'r'](!0x0), this["motorSound"] = n['m']["instance"]["playAreaSo" + "undLoop"]("ElectricMo" + "tor1", this["backWheelB" + "ody"], 0x1)), this['wheelCurre' + "ntSpeed"] = this["backWheelJ" + "oint"]["GetJointSp" + "eed"](), this["wheelCurre" + "ntSpeed"] < 0x0 ? this["wheelNewSp" + "eed"] = 0x0 : this["wheelNewSp" + "eed"] = this["wheelCurre" + "ntSpeed"] < this["wheelMaxSp" + "eed"] ? this["wheelCurre" + "ntSpeed"] + this["accelStep"] : this["wheelCurre" + "ntSpeed"], this["backWheelJ" + "oint"]["SetMotorSp" + "eed"](this["wheelNewSp" + "eed"]), this["frontWheel" + 'Joint']["SetMotorSp" + "eed"](this['wheelNewSp' + "eed"]));
    } else {
      function nB() {


        var nu;
        (nu = np["call"](this) || this)["_keyByteAr" + "ray"] = new q8['ag']();
        nu["_mouseByte" + "Array"] = new q8['ag']();
        return nu;
      }
      var nK;
      var nm;
      nm = np;
      (nK = nB)["prototype"] = Object["create"](nm["prototype"]);
      nK["prototype"]['constructo' + 'r'] = nK;
      qn(nK, nm);
      var nI;
      var nk;
      var ns = nB["prototype"];
      ns["isValidMou" + "seData"] = function (nu, nl, no, ni) {
        if ((no - nl) % 0x4 != 0x0) {
          return !0x1;
        }
        for (var nE = nl; nE < no; nE += 0x4) {
          if ((0x7fff & (nu[nE] << 0x8 | nu[nE + 0x1])) > ni) {
            return !0x1;
          }
        }
        return !0x0;
      };
      ns["parseByteA" + "rray"] = function (nu) {


        if ("hJKFk" === "hJKFk") {
          for (var nl = -0x1, no = 0x0; no < nu["length"]; no++) {
            if (0xff === nu["buffer"][no] && this["isValidMou" + "seData"](nu['buffer'], no + 0x1, nu["length"], no)) {
              nl = no;
              break;
            }
          }
          -0x1 === nl ? (this["_keyByteAr" + "ray"] = nu, this["_mouseByte" + "Array"] = new q8['ag']()) : (this["_keyByteAr" + "ray"] = new q8['ag'](), this["_keyByteAr" + "ray"]["writeBytes"](nu, 0x0, nl), this["_mouseByte" + "Array"] = new q8['ag'](), this["_mouseByte" + 'Array']["writeBytes"](nu, nl + 0x1, nu["length"] - (nl + 0x1)));
        } else {
          if (!qS) {
            throw new qA("Missing al" + "ias name.");
          }
          if (!qN) {
            throw new qc('Missing\x20cl' + "ass object" + '.');
          }
          this["classMappi" + 'ng'][qV] = qE;
          this["aliasMappi" + 'ng'][ql] = nm;
        }
      };
      ns["addKeyEntr" + 'y'] = function (nu, nl) {


        var no = parseInt(nu, 0x2);
        this["_keyByteAr" + "ray"]['writeUnsig' + "nedByte"](no);
      };
      ns["hasKeyInpu" + 't'] = function () {


        if ("NdKYU" === 'NdKYU') {
          for (var nu = this["_keyByteAr" + 'ray']["buffer"], nl = 0x0; nl < this["_keyByteAr" + "ray"]['length']; nl++) {
            if (0x0 !== nu[nl]) {
              return !0x0;
            }
          }
          return !0x1;
        } else {
          this["editor"]['die']();
          this["removeChil" + 'd'](this["editor"]);
          this['editor']["removeEven" + "tListener"](f['$T']['MAIN_MENU'], this["closeEdito" + "rBind"]);
          this["editor"] = null;
          T['w']["editor"] = null;
          V['w']["currentlyI" + "nEditor"] = !0x1;
          this['openMainMe' + 'nu']();
        }
      };
      ns['getKeyEntr' + 'y'] = function (nu) {


        var nl = this["_keyByteAr" + "ray"]["buffer"][nu]["toString"](0x2);
        return this["completeBy" + 'te'](nl);
      };
      ns["addMouseEn" + "try"] = function (nu, nl, no) {


        void 0x0 === no && (no = 0x0);
        nu > 0x7fff && (nu = 0x7fff);
        nl > 0xffff && (nl = 0xffff);
        no > 0x0 && (nu += 0x8000);
        this['_mouseByte' + "Array"]["writeShort"](nu);
        this["_mouseByte" + "Array"]["writeShort"](nl);
      };
      ns["getMouseCl" + "ickMap"] = function () {


        var nu = {};
        this["_mouseByte" + 'Array']["position"] = 0x0;
        for (var nl = this["_mouseByte" + "Array"]["length"]; this['_mouseByte' + "Array"]["position"] < nl;) {
          var no = this["_mouseByte" + "Array"]["readUnsign" + "edShort"]();
          var ni = this["_mouseByte" + "Array"]["readUnsign" + "edShort"]();
          var nE = !0x1;
          var nR = !0x1;
          no > 0x7fff ? (no -= 0x8000, nR = !0x0) : nE = !0x0;
          var nW = no["toString"]();
          var nA = void 0x0;
          nu[nW] ? nA = nu[nW] : (nA = new q9(), nR && (nA['first'] = 0x1));
          nE ? (nA["click"] = nE, nA["clickTrigg" + "erIndex"] = ni) : nR && (nA['rollOut'] = nR, nA["rollOutTri" + "ggerIndex"] = ni);
          nu[nW] = nA;
        }
        this["_mouseByte" + "Array"]["position"] = 0x0;
        return nu;
      };
      ns["completeBy" + 'te'] = function (nu, nl) {


        if ("imFta" === "YwykP") {
          var ni = qH["target"];
          ni['removeEven' + "tListener"](qk['Jh']["COMPLETE"], nI["loadComple" + 'te']);
          ni["removeEven" + "tListener"](qJ['BR']["IO_ERROR"], qr["IOErrorHan" + "dler"]);
          var nE = qj(ni["data"]);
          var nR = nE["substr"](0x0, 0x8);
          if (nR["indexOf"]("<html>") > -0x1) {
            qP["_errorStri" + 'ng'] = 'system_err' + 'or';
            return void qn["dispatchEv" + "ent"](new qy['NN'](qg['NN']["ERROR"]));
          }
          if (nR['indexOf']("failure") > -0x1) {
            var nW = nE["split"](':');
            qM["_errorStri" + 'ng'] = nW[0x1];
            return void qi["dispatchEv" + "ent"](new qD['NN'](qw['NN']["ERROR"]));
          }
          try {
            var nA = q0['t7']["decryptByt" + 'es'](ni["data"], "eatshit" + q1["authorId"]);
            q2["_levelXML"] = new q3['_9'](nA);
          } catch (nr) {
            q7["dispatchEv" + "ent"](new q8['NN'](q9['NN']["ERROR"]));
          }
          qb["dispatchEv" + "ent"](new qC['Jh'](qt['Jh']["COMPLETE"]));
        } else {
          for (void 0x0 === nl && (nl = 0x8); nu["length"] < nl;) {
            nu = '0' + nu;
          }
          return nu;
        }
      };
      ns["resetPosit" + "ion"] = function () {


        this["_keyByteAr" + "ray"]["position"] = 0x0;
        this["_mouseByte" + "Array"]["position"] = 0x0;
      };
      ns["reset"] = function () {


        this["_keyByteAr" + "ray"] = new q8['ag']();
        this["_mouseByte" + "Array"] = new q8['ag']();
        this['resetPosit' + 'ion']();
      };
      ns["getLength"] = function () {


        return this["_keyByteAr" + "ray"]["length"];
      };
      nI = nB;
      (nk = [{
        'key': "byteArray",
        'get': function () {


          var nu = new q8['ag']();
          nu["writeBytes"](this["_keyByteAr" + "ray"], 0x0, this["_keyByteAr" + "ray"]["length"]);
          this["_mouseByte" + 'Array']["length"] > 0x0 && (nu["writeUnsig" + "nedByte"](0xff), nu["writeBytes"](this["_mouseByte" + "Array"], 0x0, this["_mouseByte" + "Array"]["length"]));
          return nu;
        },
        'set': function (nu) {


          if ("BptAw" !== "XQZcE") {
            this["parseByteA" + "rray"](nu);
          } else {
            var no = new qA['vg'](qN['w']["siteURL"] + ("get_level." + 'hw'));
            no["method"] = qc['QI']["POST"];
            var ni = new qV['Vt']();
            ni["level_id"] = this["levelId"];
            ni["action"] = "get_record";
            ni["ip_trackin" + 'g'] = qE['l5']["randomNumS" + "tring"](0x4, 0x8, this["incrementP" + "lays"]);
            no["data"] = ni;
            var nE = new ql['NU']();
            nE["responseTy" + 'pe'] = "blob";
            nE["dataFormat"] = nm['Uw']["BINARY"];
            nE["addEventLi" + "stener"](nB['Jh']["COMPLETE"], this["loadComple" + 'te']);
            nE["addEventLi" + "stener"](qs['BR']["IO_ERROR"], this["IOErrorHan" + "dler"]);
            nE["load"](no);
          }
        }
      }, {
        'key': "completed",
        'get': function () {

          return this["_completed"];
        },
        'set': function (nu) {

          this["_completed"] = nu;
        }
      }]) && function (nu, nl) {


        for (var no = 0x0; no < nl["length"]; no++) {
          if ("WJsLx" === "vnDnA") {
            V(h, C, function (nR) {
              return this["_invoke"](p, K, nR);
            });
          } else {
            var ni = nl[no];
            ni['enumerable'] = ni["enumerable"] || !0x1;
            ni["configurab" + 'le'] = !0x0;
            'value' in ni && (ni["writable"] = !0x0);
            Object["defineProp" + 'erty'](nu, qq(ni['key']), ni);
          }
        }
      }(nI['prototype'], nk);
      Object["defineProp" + 'erty'](nI, "prototype", {
        'writable': !0x1
      });
      return nI;
    }
  }(q7['Qe']);
  qN['REPLAY_LOA' + "DED"] = "replayload" + 'ed';
  var qf = q2(0x16fe2);
  q2(0x6b67);
  q2(0x16278);
  q2(0xf23a);
  q2(0x5cf0);
  q2(0x7ab7);
  q2(0xba94);
  q2(0xf5e9);
  q2(0x8cc1);
  q2(0x87de);
  q2(0x5b7a);
  q2(0x8d3);
  var qT = q2(0x3432);
  var qV = q2(0x41a);
  var qh = q2(0x88f1);
  var qC = q2(0x1373c);
  var qj = q2(0x5ab6);
  function qP(np, nK) {


    (null == nK || nK > np["length"]) && (nK = np["length"]);
    for (var nm = 0x0, nI = Array(nK); nm < nK; nm++) {
      nI[nm] = np[nm];
    }
    return nI;
  }
  function qp(np) {


    if ("bkDAI" !== "bkDAI") {
      var nI = V[h];
      nI["enumerable"] = nI["enumerable"] || !0x1;
      nI['configurab' + 'le'] = !0x0;
      "value" in nI && (nI["writable"] = !0x0);
      C["defineProp" + 'erty'](j, P(nI["key"]), nI);
    } else {
      var nK = function (nI) {
        if ('object' != typeof nI || !nI) {
          return nI;
        }
        var nk = nI[Symbol["toPrimitiv" + 'e']];
        if (void 0x0 !== nk) {
          var ns = nk["call"](nI, "string");
          if ("object" != typeof ns) {
            return ns;
          }
          throw new TypeError("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
        }
        return String(nI);
      }(np);
      return "symbol" == typeof nK ? nK : nK + '';
    }
  }
  function qK(np, nK) {


    qK = Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"]["bind"]() : function (nm, nI) {
      nm["__proto__"] = nI;
      return nm;
    };
    return qK(np, nK);
  }
  var qm = function (np) {

    function nK(nB, nu, nl) {
      var no;
      void 0x0 === nl && (nl = !0x1);
      (no = np["call"](this) || this)["IOErrorHan" + "dler"] = function (ni) {


        if ('spJAk' !== 'AitET') {
          var nE = ni["target"];
          nE["removeEven" + "tListener"](q7['Jh']["COMPLETE"], no["loadComple" + 'te']);
          nE["removeEven" + "tListener"](q7['BR']["IO_ERROR"], no['IOErrorHan' + "dler"]);
          no["dispatchEv" + "ent"](new q7['Jh'](q7['BR']["IO_ERROR"]));
        } else {
          n['SetUserDat' + 'a'](this);
        }
      };
      no["loadComple" + 'te'] = function (ni) {


        var nE = ni["target"];
        nE["removeEven" + "tListener"](q7['Jh']['COMPLETE'], no["loadComple" + 'te']);
        nE["removeEven" + "tListener"](q7['BR']["IO_ERROR"], no["IOErrorHan" + "dler"]);
        var nR = String(nE["data"]);
        var nW = nR['substr'](0x0, 0x8);
        if (nW["indexOf"]("<html>") > -0x1) {
          no["_errorStri" + 'ng'] = "system_err" + 'or';
          return void no["dispatchEv" + "ent"](new q7['NN'](q7['NN']["ERROR"]));
        }
        if (nW["indexOf"]("failure") > -0x1) {
          if ("VMDEb" !== 'xoPDI') {
            var nA = nR["split"](':');
            no['_errorStri' + 'ng'] = nA[0x1];
            return void no["dispatchEv" + "ent"](new q7['NN'](q7['NN']["ERROR"]));
          } else {
            this["textField"]['htmlText'] = this['levelRatin' + 'gs'][this["_rating"]];
            this["textField"]['width'] = 0xa;
            this["textField"]['autoSize'] = nr['wL']["LEFT"];
            this["textField"]['wordWrap'] = !0x1;
            this["drawBg"]();
          }
        }
        try {
          var nr = q8['t7']["decryptByt" + 'es'](nE["data"], "eatshit" + no["authorId"]);
          no['_levelXML'] = new q7['_9'](nr);
        } catch (nD) {
          if ("bbkGq" === 'Yewxu') {
            var nS = new p['lk']("Clarendon " + "LT Std", K["HW_SETTING" + 'S']["titleLabel" + "Size"] || 0xc, m["HW_SETTING" + 'S']["titleLabel" + "Color"] || 0x0, null, null, null, null, null, I['MA']['CENTER']);
            this["titleLabel"] = new k['A_']();
            this["titleLabel"]["defaultTex" + "tFormat"] = nS;
            this["titleLabel"]["text"] = nl["HW_SETTING" + 'S']["titleLabel"] || '';
            this['addChild'](this["titleLabel"]);
            this['titleLabel']['x'] = nB["HW_SETTING" + 'S']['titleLabel' + 'X'] || 0x0;
            this["titleLabel"]['y'] = B["HW_SETTING" + 'S']["titleLabel" + 'Y'] || 0x0;
            this['titleLabel']["rotation"] = u["HW_SETTING" + 'S']["titleLabel" + "Rotation"] || 0x0;
            this["titleLabel"]["pixiText"]["anchor"]["set"](0.5);
            this["titleLabel"]["scale"]["set"](0x0);
            var nd = new l['GD'](0x3, 0x5a, 0x0, 0x1, 0x5, 0x5, 0.25, 0x1);
            this["titleLabel"]["filters"] = [nd];
          } else {
            no["dispatchEv" + "ent"](new q7['NN'](q7['NN']['ERROR']));
          }
        }
        no["dispatchEv" + "ent"](new q7['Jh'](q7['Jh']["COMPLETE"]));
      };
      no['levelId'] = nB;
      no["authorId"] = nu;
      no['incrementP' + 'lays'] = nl;
      return no;
    }
    var nm;
    var nI;
    nI = np;
    (nm = nK)["prototype"] = Object["create"](nI["prototype"]);
    nm["prototype"]["constructo" + 'r'] = nm;
    qK(nm, nI);
    var nk;
    var ns;
    var nt = nK["prototype"];
    nt["loadLocal"] = function () {

      var nB = new q7['vg']("assets-111" + "pu7do4muiy" + "xxfu/level" + "s/test.xml");
      nB['method'] = q7['QI']["GET"];
      nB["data"] = {};
      var nu = new q7['NU']();
      nu['addEventLi' + "stener"](q7['Jh']["COMPLETE"], function (nl) {
        "oJDPG" !== "oJDPG" ? (f["label"] = T, V["disabled"] = !0x1) : (this["_levelXML"] = new q7['_9'](nl["target"]["data"]), this['dispatchEv' + 'ent'](new q7['Jh'](q7['Jh']["COMPLETE"])));
      }["bind"](this));
      nu["addEventLi" + "stener"](q7['BR']["IO_ERROR"], this["IOErrorHan" + 'dler']);
      nu["load"](nB);
    };
    nt["loadXML"] = function () {
      this["_levelXML"] = new q7['_9'](window['xml']);
      this["dispatchEv" + "ent"](new q7['Jh'](q7['Jh']['COMPLETE']));
    };
    nt["loadData"] = function () {
      if ("ZGWUP" !== "ZGWUP") {
        var nu = new qI['lk']("Clarendon " + "LT Std Bol" + 'd', 0x4b, 0xfd8181, null, null, null, null, null, qS['MA']["CENTER"]);
        var nl = new qA['A_']();
        nl["defaultTex" + "tFormat"] = nu;
        nl["htmlText"] = 'PLAY!';
        this["addChild"](nl);
        this["mobilePlay" + 'Button'] = nl;
        nl['x'] = 0x28a;
        nl['y'] = 0x14f;
        nl["pixiText"]["anchor"]["set"](0.5);
        nl["scale"]["set"](0x0);
        var no = new qN['GD'](0x3, 0x5a, 0x0, 0x1, 0x5, 0x5, 0.25, 0x1);
        nl["filters"] = [no];
        nl["addEventLi" + "stener"](qc['Cm']["MOUSE_DOWN"], this["mobilePlay" + "ButtonMous" + "eDownHandl" + 'er']);
        qV['os']['to'](this["mobilePlay" + "Button"]['scale'], {
          'duration': 0x2,
          'x': 0x1,
          'y': 0x1,
          'ease': qE['Oq']["easeOut"],
          'delay': 0.3
        });
      } else {
        this["loadFromSe" + "rver"]();
      }
    };
    nt["loadDownlo" + 'aded'] = function () {
      if ("fvARa" !== 'dJnQS') {
        return !0x1;
      } else {
        var nu;
        void 0x0 === f && (q1 = 0x64);
        (nu = B["call"](this, u) || this)['targetBody'] = l;
        nu["offSet"] = o;
        nu['initialRan' + 'ge'] = q2;
        nu["halfInitia" + "lRange"] = E / 0x2;
        nu["speedRange"] = R;
        nu["halfSpeedR" + "ange"] = W / 0x2;
        nu["m_physScal" + 'e'] = A['w']["currentSes" + "sion"]["m_physScal" + 'e'];
        nu["startVel"] = r["GetLinearV" + 'elocityFro' + "mLocalPoin" + 't'](J);
        nu['startPos'] = D["GetWorldPo" + "int"](g);
        nu['createPart' + "icles"]();
        return nu;
      }
    };
    nt["sendPlayCo" + "unt"] = function () {};
    nt["loadFromSe" + 'rver'] = function () {
      if ("ZDRVo" === "truPI") {
        N != this["_startDisa" + 'bled'] && (this["_startDisa" + "bled"] = f, this["drawShape"](), this["forceDirty"]());
      } else {
        var nB = new q7['vg'](qh['w']["siteURL"] + ("get_level." + 'hw'));
        nB['method'] = q7['QI']['POST'];
        var nu = new q7['Vt']();
        nu["level_id"] = this["levelId"];
        nu["action"] = "get_record";
        nu["ip_trackin" + 'g'] = qV['l5']["randomNumS" + "tring"](0x4, 0x8, this["incrementP" + "lays"]);
        nB["data"] = nu;
        var nl = new q7['NU']();
        nl["responseTy" + 'pe'] = "blob";
        nl["dataFormat"] = q7['Uw']["BINARY"];
        nl["addEventLi" + "stener"](q7['Jh']['COMPLETE'], this["loadComple" + 'te']);
        nl["addEventLi" + 'stener'](q7['BR']["IO_ERROR"], this["IOErrorHan" + "dler"]);
        nl['load'](nB);
      }
    };
    nt["buildLevel" + "SourceObje" + 'ct'] = function () {

      var nB;
      var nu;
      var nl;
      var no;
      var nE;
      var nR;
      var nW;
      var nA;
      var nr;
      var nJ;
      var nD;
      var ng;
      var nS;
      var nd;
      var nz;
      var nF;
      var nM = new q7['kx']();
      nM["name"] = "shapeGuide";
      var nH = new q7['kx']();
      nH["name"] = 'shapes';
      var nb = new q7['kx']();
      nb["name"] = 'joints';
      var nZ = new q7['kx']();
      nZ["name"] = "special";
      var ny = new q7['kx']();
      ny["name"] = "groups";
      var nc = new q7['kx']();
      nc["name"] = "triggers";
      nM['addChild'](nH);
      nM["addChild"](nZ);
      nM["addChild"](ny);
      nM["addChild"](nb);
      nM["addChild"](nc);
      var nX = this["_levelXML"]["info"][0x0];
      var nx = (null === (nB = this["_levelXML"]) || void 0x0 === nB || null === (nu = nB["shapes"]) || void 0x0 === nu || null === (nl = nu[0x0]) || void 0x0 === nl ? void 0x0 : nl['sh']) || [];
      var nw = (null === (no = this["_levelXML"]) || void 0x0 === no || null === (nE = no["specials"]) || void 0x0 === nE || null === (nR = nE[0x0]) || void 0x0 === nR ? void 0x0 : nR['sp']) || [];
      var na = (null === (nW = this['_levelXML']) || void 0x0 === nW || null === (nA = nW["groups"]) || void 0x0 === nA || null === (nr = nA[0x0]) || void 0x0 === nr ? void 0x0 : nr['g']) || [];
      var nY = (null === (nJ = this['_levelXML']) || void 0x0 === nJ || null === (nD = nJ["joints"]) || void 0x0 === nD || null === (ng = nD[0x0]) || void 0x0 === ng ? void 0x0 : ng['j']) || [];
      var nv = (null === (nS = this['_levelXML']) || void 0x0 === nS || null === (nd = nS["triggers"]) || void 0x0 === nd || null === (nz = nd[0x0]) || void 0x0 === nz ? void 0x0 : nz['t']) || [];
      this["_levelVers" + "ion"] = Number(nX['@v']);
      this["_levelVers" + "ion"] > qh['w']['CURRENT_VE' + "RSION"] && (qh['w']["debugText"]["text"] = qh['w']['newerVersi' + "onLevelMes" + 'sage']);
      for (var nL = nx['length'], nU = [], nO = [], nG = [], nQ = [], N0 = 0x0; N0 < nL; N0++) {
        var N1 = nx[N0];
        var N2 = parseInt(N1['@t']);
        0x3 == N2 && 'f' == N1['@i'] && (N2 = 0x4);
        var N3 = qh['w']["shapeList"][N2];
        var N4 = new ((0x0, qV['k1'])(N3))();
        'f' == N1['@i'] && (N4['interactiv' + 'e'] = !0x1);
        't' == N1['@h'] && (N4["vehicleHan" + "dle"] = !0x0);
        'f' == N1['@h'] && (N4["vehicleHan" + "dle"] = !0x1);
        var N5 = N4["getFullPro" + "perties"]();
        var N6 = N5["length"];
        if (0x3 == N2) {
          var N7 = N1['v'][0x0];
          var N8 = parseInt(N7["@id"]);
          var N9 = N7['@f'];
          var Nq = nO["indexOf"](N8);
          if (Nq > -0x1) {
            var Nn = nU[Nq];
          } else {
            var NN = parseInt(N7['@n']);
            Nn = new Array(NN);
            for (var Nf = 0x0; Nf < NN; Nf++) {
              var NT = N7['@v' + Nf];
              Nn[Nf] = NT;
            }
            nU["push"](Nn);
            nO["push"](N8);
          }
          for (var NV = N4, Nh = 0x0; Nh < Nn["length"]; Nh++) {
            var NC = Nn[Nh];
            var Nj = this["_levelVers" + "ion"] < 1.84 ? NC["split"]('.') : NC["split"]('_');
            var NP = new qj['RM'](parseFloat(Nj[0x0]), parseFloat(Nj[0x1]));
            NV["vertVector"]["push"](NP);
          }
          if (!(NV['numVerts'] > 0x1)) {
            if ("zMpUY" !== "WKxOA") {
              nH["addChild"](this["createDumm" + "yShape"]());
              continue;
            } else {
              if (!q1["shape2"]['m_isSensor']) {
                z["shape1"] == F["frontWheel" + "Shape"] ? M["frontConta" + "cts"] += 0x1 : H["backContac" + 'ts'] += 0x1;
                b["wheelConta" + "cts"] = Z["frontConta" + "cts"] + y["backContac" + 'ts'];
                var Ts = c["shape1"];
                var TB = Ts["m_body"];
                var Tu = X["shape2"]["m_body"]["m_mass"];
                if (!(x["contactAdd" + "Buffer"]["get"](Ts) || 0x0 != Tu && Tu < TB["m_mass"])) {
                  var Tl = L['x5']["b2Dot"](U["velocity"], O["normal"]);
                  (Tl = G['abs'](Tl)) > 0x4 && Q['contactAdd' + "Buffer"]['set'](Ts, "hit");
                }
              }
            }
          }
          N4['completeFi' + 'll'] = 't' == N9;
          N4["vID"] = N8;
          NV["redraw"]();
        } else {
          if (0x4 == N2) {
            if ('FRhol' === "FRhol") {
              var Np = N1['v'][0x0];
              var NK = parseInt(Np["@id"]);
              var Nm = Np['@f'];
              var NI = nQ["indexOf"](NK);
              if (NI > -0x1) {
                Nn = nG[NI];
              } else {
                if ("XVIZJ" !== "XVIZJ") {
                  this["handNav"] || (this["handNav"] = !0x0, this["currentToo" + 'l'] == this["arrowTool"] ? this["arrowTool"]["deactivate" + "KeepSelect" + "ion"]() : this["currentToo" + 'l'] == this["polygonToo" + 'l'] ? this["polygonToo" + 'l']['deactivate' + "ContinueDr" + "awing"]() : this['currentToo' + 'l'] == this['artTool'] ? this["artTool"]["deactivate" + "ContinueDr" + "awing"]() : this["currentToo" + 'l'] && this['currentToo' + 'l']["deactivate"](), this["handCursor"] = new T(), this["handCursor"]['x'] = this["mouseX"], this["handCursor"]['y'] = this["mouseY"], this['handCursor']["mouseEnabl" + 'ed'] = this["handCursor"]["mouseChild" + "ren"] = !0x1, this["addChild"](this['handCursor']), V['KK']['hide'](), this["stage"]["removeEven" + "tListener"](h['kV']["KEY_DOWN"], this["keyDownHan" + "dler"]), this["stage"]['addEventLi' + "stener"](C['Cm']["MOUSE_MOVE"], this["followCurs" + 'or']));
                } else {
                  var Nk = parseInt(Np['@n']);
                  Nn = new Array(Nk);
                  for (var Ns = 0x0; Ns < Nk; Ns++) {
                    var NB = Np['@v' + Ns];
                    Nn[Ns] = NB;
                  }
                  nG["push"](Nn);
                  nQ['push'](NK);
                }
              }
              for (var Nu = N4, Nl = 0x0; Nl < Nn["length"]; Nl++) {
                var No = Nn[Nl];
                var Ni = this["_levelVers" + "ion"] < 1.84 ? No["split"]('.') : No["split"]('_');
                var NE = new qj['RM'](parseFloat(Ni[0x0]), parseFloat(Ni[0x1]));
                var NR = Ni[0x2] ? new qj['RM'](parseFloat(Ni[0x2]), parseFloat(Ni[0x3])) : new qj['RM']();
                var NW = Ni[0x4] ? new qj['RM'](parseFloat(Ni[0x4]), parseFloat(Ni[0x5])) : new qj['RM']();
                Nu["vertVector"]["push"](NE);
                Nu["handleVect" + 'or']["push"](NR);
                Nu["handleVect" + 'or']["push"](NW);
              }
              if (!(Nu['numVerts'] > 0x1)) {
                nH["addChild"](this["createDumm" + 'yShape']());
                continue;
              }
              N4['completeFi' + 'll'] = 't' == Nm;
              N4["vID"] = NK;
              Nu["redraw"]();
            } else {
              this["beginTime"] = this["_now"]();
            }
          }
        }
        for (var NA = 0x0; NA < N6; NA++) {
          var Nr = N5[NA];
          var NJ = N1['@p' + NA];
          if (void 0x0 !== NJ) {
            if ('t' == NJ || 'f' == NJ) {
              N4[Nr] = 't' == NJ;
            } else {
              var ND = parseFloat(NJ);
              '' != NJ && (N4[Nr] = isNaN(ND) ? NJ : ND);
            }
          }
        }
        nH["addChild"](N4);
        N4['x'] = parseFloat(N1["@p0"]);
        N4['y'] = parseFloat(N1["@p1"]);
      }
      nL = nw['length'];
      for (var Ng = 0x0; Ng < nL; Ng++) {
        var NS = nw[Ng];
        var Nd = parseInt(NS['@t']);
        var Nz = qh['w']["specialLis" + 't'][Nd];
        var NF = void 0x0;
        try {
          NF = (0x0, qV['k1'])(Nz);
        } catch (Tu) {
          if ("gTaSS" === "dSTVD") {
            this["currCOM"] = this["getCenterO" + "fMass"]();
          } else {
            continue;
          }
        }
        for (var NM = void 0x0, NH = (NM = "NPCharacte" + 'rRef' === Nz ? new NF(parseInt(NS["@p3"])) : new NF())["getFullPro" + "perties"](), Nb = 0x0; Nb < NH["length"]; Nb++) {
          if ("msPJr" !== "sPUqK") {
            var NZ = NH[Nb];
            if ("string" == typeof NM[NZ]) {
              var Ny = NS['@p' + Nb] ? NS['@p' + Nb] : NS['p' + Nb][0x0]['cdata'];
              null == Ny && (Ny = '');
              NM[NZ] = Ny;
            } else {
              var Nc = NS['@p' + Nb];
              Nc || (Nc = NS['p' + Nb]);
              if (void 0x0 === Nc) {
                continue;
              }
              Nc instanceof Array && (Nc = Nc[0x0]['cdata']);
              if ('t' == Nc || 'f' == Nc) {
                NM[NZ] = 't' == Nc;
              } else {
                var NX = parseFloat(Nc);
                '' != Nc && (NM[NZ] = isNaN(NX) ? Nc : NX);
              }
            }
          } else {
            void 0x0 === N && (f = 0x1);
            return !0x1;
          }
        }
        nZ["addChild"](NM);
        NM['x'] = parseFloat(NS["@p0"]);
        NM['y'] = parseFloat(NS["@p1"]);
      }
      nL = na["length"];
      for (var Nx = 0x0; Nx < nL; Nx++) {
        if ("OpPda" === "OpPda") {
          var Nw;
          var Na = na[Nx];
          if ('t' == Na['@v']) {
            if ("XaRWI" === "XaRWI") {
              var NY = Nw = new qT['uH']();
              NY["spaceActio" + 'n'] = parseInt(Na["@sb"]);
              NY["shiftActio" + 'n'] = parseInt(Na["@sh"]);
              NY["ctrlAction"] = parseInt(Na["@ct"]);
              NY["accelerati" + 'on'] = parseInt(Na['@a']);
              NY["leaningStr" + "ength"] = parseInt(Na['@l']);
              NY["characterP" + "ose"] = parseInt(Na["@cp"]);
              NY["lockJoints"] = 't' == Na["@lo"];
            } else {
              var TE = this["saverLoade" + 'r']["createXML"]()["toString"]();
              this["saveLevelO" + "nLocalStor" + "age"](TE);
              this["download"](TE, 'level.xml');
            }
          } else {
            Nw = new qT['DJ']();
          }
          Nw["offset"] = new q7['bR'](parseFloat(Na['@ox']), parseFloat(Na["@oy"]));
          Nw["angle"] = parseInt(Na['@r']);
          Nw["sleeping"] = 't' == Na['@s'];
          Nw["foreground"] = 't' == Na['@f'];
          Na['@o'] ? Nw["opacity"] = '' == String(Na['@o']) ? 0x64 : parseInt(Na['@o']) : Nw["opacity"] = 0x64;
          Nw["immovable"] = 't' == Na["@im"];
          Nw["fixedRotat" + "ion"] = 't' == Na["@fr"];
          for (var Nv = Na['sh'], NL = null == Nv ? void 0x0 : Nv["length"], NU = 0x0; NU < NL; NU++) {
            var NO = Nv[NU];
            var NG = parseInt(NO['@t']);
            0x3 == NG && 'f' == NO['@i'] && (NG = 0x4);
            var NQ = qh['w']["shapeList"][NG];
            var f0 = new ((0x0, qV['k1'])(NQ))();
            f0["inGroup"] = !0x0;
            f0['group'] = Nw;
            'f' == NO['@i'] && (f0["interactiv" + 'e'] = !0x1);
            't' == NO['@h'] && (f0["vehicleHan" + "dle"] = !0x0);
            'f' == NO['@h'] && (f0["vehicleHan" + "dle"] = !0x1);
            var f1 = f0["getFullPro" + "perties"]();
            var f2 = f1["length"];
            if (0x3 == NG) {
              if ("dUACx" === "dUACx") {
                var f3 = NO['v'][0x0];
                var f4 = parseFloat(f3['@id']);
                var f5 = f3['@f'];
                var f6 = nO["indexOf"](f4);
                if (f6 > -0x1) {
                  Nn = nU[f6];
                } else {
                  var f7 = parseInt(f3['@n']);
                  Nn = new Array(f7);
                  for (var f8 = 0x0; f8 < f7; f8++) {
                    var f9 = f3['@v' + f8];
                    Nn[f8] = f9;
                  }
                  nU["push"](Nn);
                  nO["push"](f4);
                }
                for (var fq = f0, fn = 0x0; fn < Nn['length']; fn++) {
                  var fN = Nn[fn];
                  var ff = this["_levelVers" + 'ion'] < 1.84 ? fN["split"]('.') : fN["split"]('_');
                  var fT = new qj['RM'](parseFloat(ff[0x0]), parseFloat(ff[0x1]));
                  fq["vertVector"]["push"](fT);
                }
                if (!(fq["numVerts"] > 0x1)) {
                  Nw["addShape"](this["createDumm" + 'yShape']());
                  continue;
                }
                f0["completeFi" + 'll'] = 't' == f5;
                f0["vID"] = f4;
                fq["redraw"]();
              } else {
                if (!qq['Sbox']) {
                  nq['Sbox'] = new nn['ag'](nN['Buffer']["from"](nf["_Sbox"]));
                  nT["InvSbox"] = new nV['ag'](nh["Buffer"]["from"](nC["_InvSbox"]));
                  nj["Xtime2Sbox"] = new nP['ag'](np["Buffer"]["from"](nK["_Xtime2Sbo" + 'x']));
                  nm["Xtime3Sbox"] = new nI['ag'](nk["Buffer"]["from"](ns['_Xtime3Sbo' + 'x']));
                  fT["Xtime2"] = new nB['ag'](nu['Buffer']["from"](nl["_Xtime2"]));
                  no["Xtime9"] = new T9['ag'](nE["Buffer"]["from"](nR['_Xtime9']));
                  nW['XtimeB'] = new nA['ag'](nr['Buffer']["from"](nJ["_XtimeB"]));
                  nD["XtimeD"] = new ng['ag'](nS['Buffer']["from"](nd["_XtimeD"]));
                  nz["XtimeE"] = new nF['ag'](nM["Buffer"]["from"](nH["_XtimeE"]));
                  nb["Rcon"] = new nZ['ag'](ny["Buffer"]["from"](nc["_Rcon"]));
                  for (var TR = 0x0; TR < 0x100; TR++) {
                    nX["Sbox"]["buffer"][TR] = nx["_Sbox"][TR];
                    nw["InvSbox"]["buffer"][TR] = Np["_InvSbox"][TR];
                    na["Xtime2Sbox"]["buffer"][TR] = nY["_Xtime2Sbo" + 'x'][TR];
                    nv["Xtime3Sbox"]["buffer"][TR] = nL["_Xtime3Sbo" + 'x'][TR];
                    nU['Xtime2']["buffer"][TR] = nO['_Xtime2'][TR];
                    nG['Xtime9']['buffer'][TR] = nQ["_Xtime9"][TR];
                    N0["XtimeB"]['buffer'][TR] = N1["_XtimeB"][TR];
                    N2["XtimeD"]["buffer"][TR] = N3['_XtimeD'][TR];
                    N4["XtimeE"]["buffer"][TR] = N5["_XtimeE"][TR];
                  }
                  for (var TW = 0x0; TW < N6["_Rcon"]["length"]; TW++) {
                    N7["Rcon"][TW] = N8["_Rcon"][TW];
                  }
                }
              }
            } else {
              if (0x4 == NG) {
                if ('EVbCL' !== "LFxkI") {
                  var fV = NO['v'][0x0];
                  var fh = parseFloat(fV["@id"]);
                  var fC = fV['@f'];
                  var fj = nQ["indexOf"](fh);
                  if (fj > -0x1) {
                    Nn = nG[fj];
                  } else {
                    var fP = parseInt(fV['@n']);
                    Nn = new Array(fP);
                    for (var fp = 0x0; fp < fP; fp++) {
                      var fK = fV['@v' + fp];
                      Nn[fp] = fK;
                    }
                    nG["push"](Nn);
                    nQ["push"](fh);
                  }
                  for (var fm = f0, fI = 0x0; fI < Nn["length"]; fI++) {
                    if ("BEwnD" !== "WGYNE") {
                      var fk = Nn[fI];
                      var fs = this["_levelVers" + "ion"] < 1.84 ? fk["split"]('.') : fk["split"]('_');
                      var fB = new qj['RM'](parseFloat(fs[0x0]), parseFloat(fs[0x1]));
                      var fu = fs[0x2] ? new qj['RM'](parseFloat(fs[0x2]), parseFloat(fs[0x3])) : new qj['RM']();
                      var fl = fs[0x4] ? new qj['RM'](parseFloat(fs[0x4]), parseFloat(fs[0x5])) : new qj['RM']();
                      fm['vertVector']['push'](fB);
                      fm["handleVect" + 'or']["push"](fu);
                      fm["handleVect" + 'or']['push'](fl);
                    } else {
                      this['defaultFil' + 'ter'] = new f['z_']();
                      this['defaultFil' + "ter"]["groupIndex"] = this["groupID"];
                      this["defaultFil" + "ter"]["categoryBi" + 'ts'] = 0x104;
                      this["defaultFil" + 'ter']["maskBits"] = 0x10e;
                      this["zeroFilter"] = new T['z_']();
                      this["zeroFilter"]["groupIndex"] = 0x0;
                      this["zeroFilter"]["categoryBi" + 'ts'] = 0x104;
                      this["lowerBodyF" + "ilter"] = new V['z_']();
                      this["lowerBodyF" + "ilter"]["categoryBi" + 'ts'] = 0x104;
                      this["lowerBodyF" + "ilter"]["maskBits"] = 0x10e;
                      this['lowerBodyF' + "ilter"]["groupIndex"] = this['groupID'] - 0x5;
                    }
                  }
                  if (!(fm["numVerts"] > 0x1)) {
                    if ("HQKYg" === "HQKYg") {
                      Nw["addShape"](this["createDumm" + 'yShape']());
                      continue;
                    } else {
                      if ("object" != typeof P || !p) {
                        return K;
                      }
                      var TA = m[I['toPrimitiv' + 'e']];
                      if (void 0x0 !== TA) {
                        var Tr = TA["call"](u, "string");
                        if ('object' != typeof Tr) {
                          return Tr;
                        }
                        throw new l("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + 'lue.');
                      }
                      return q1(B);
                    }
                  }
                  f0["completeFi" + 'll'] = 't' == fC;
                  f0["vID"] = fh;
                  fm["redraw"]();
                } else {
                  f["__proto__"] = T;
                  return V;
                }
              }
            }
            for (var fo = 0x0; fo < f2; fo++) {
              var fE = f1[fo];
              var fR = NO['@p' + fo];
              if (void 0x0 !== fR) {
                if ('t' == fR || 'f' == fR) {
                  f0[fE] = 't' == fR;
                } else {
                  var fW = parseFloat(fR);
                  '' != fR && (f0[fE] = isNaN(fW) ? fR : fW);
                }
              }
            }
            Nw["addShape"](f0);
            f0['x'] = parseFloat(NO["@p0"]);
            f0['y'] = parseFloat(NO["@p1"]);
          }
          var fA = Na['sp'];
          NL = null == fA ? void 0x0 : fA["length"];
          for (var fr = 0x0; fr < NL; fr++) {
            if ("bVKul" === "bVKul") {
              NO = fA[fr];
              var fJ = parseInt(NO['@t']);
              var fD = qh['w']["specialLis" + 't'][fJ];
              var fg = (0x0, qV['k1'])(fD);
              var fS = void 0x0;
              (fS = "NPCharacte" + "rRef" === fD ? new fg(parseInt(NO["@p3"])) : new fg())["inGroup"] = !0x0;
              fS["group"] = Nw;
              var fd = fS['getFullPro' + "perties"]();
              for (fo = 0x0; fo < fd["length"]; fo++) {
                var fz = fd[fo];
                if ("string" == typeof fS[fz]) {
                  if ('YiRlj' === "WHMZj") {
                    this["_window"]["closeWindo" + 'w']();
                    this["votingStar" + 's']["die"]();
                    this["votingStar" + 's']["removeEven" + "tListener"](N3['RATING_SEL' + 'ECTED'], this["ratingSele" + "cted"]);
                    this["removeEven" + "tListener"](qT['Cm']["MOUSE_UP"], this["mouseUpHan" + 'dler']);
                  } else {
                    var fF = NO['@p' + fo] ? NO['@p' + fo] : NO['p' + fo][0x0]["cdata"];
                    fS[fz] = fF || '';
                  }
                } else {
                  if ("rvFBH" === "FKXtE") {
                    var TD = q1[B];
                    var Tg = u[TD];
                    "true" === Tg || "false" === Tg || "boolean" == typeof Tg ? l += "' p" + o + '=\x27' + (Tg = !0x0 === Tg || "true" === Tg ? 't' : 'f') : q2(E(Tg)) || "caption" === TD ? 'string' == typeof Tg ? R["push"](this["createCDat" + "aNode"]('p' + W, Tg)) : ("boolean" == typeof Tg && (Tg = !0x0 === Tg ? 't' : 'f'), A += "' p" + r + '=\x27' + Tg) : /^-?[\d.]+(?:e-?\d+)?$/['test'](Tg) ? J += "' p" + D + '=\x27' + (Tg = g(Tg)) : S["push"](this["createCDat" + 'aNode']('p' + d, Tg));
                  } else {
                    var fM = NO['@p' + fo];
                    fM || (fM = NO['p' + fo]);
                    if (void 0x0 === fM) {
                      continue;
                    }
                    fM instanceof Array && (fM = fM[0x0]['cdata']);
                    if ('t' == fM || 'f' == fM) {
                      fS[fz] = 't' == fM;
                    } else {
                      if ("TLkfw" === "TLkfw") {
                        var fH = parseFloat(fM);
                        '' != fM && (fS[fz] = isNaN(fH) ? fM : fH);
                      } else {
                        var Tg = qT["call"](nY, "string");
                        if ("object" != typeof Tg) {
                          return Tg;
                        }
                        throw new N2('@@toPrimit' + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
                      }
                    }
                  }
                }
              }
              Nw["addSpecial"](fS);
              fS['x'] = parseFloat(NO["@p0"]);
              fS['y'] = parseFloat(NO["@p1"]);
            } else {
              this['mouseChild' + "ren"] = !0x1;
              this['shadow']["mouseEnabl" + 'ed'] = !0x1;
              this["refreshBut" + "ton"] = new P();
              this["addChild"](this["refreshBut" + "ton"]);
              this["refreshBut" + "ton"]['x'] = this["shadow"]['x'] + this["shadow"]["width"] + 0xa;
              this["refreshBut" + 'ton']['y'] = this["shadow"]['y'] - 0x16;
              this["refreshBut" + "ton"]["setGlow"](!0x1);
              this['buildDropM' + 'enus']();
              this["searchButt" + 'on'] = new p['Ch']("search by " + 'name', 0x3d88c7, 0x78);
              this["addChild"](this['searchButt' + 'on']);
              this["searchButt" + 'on']['x'] = this["shadow"]['x'];
              this["searchButt" + 'on']['y'] = this["shadow"]['y'] - 0x1b;
              this["searchButt" + 'on']['y'] = this["shadow"]['y'] + this["shadow"]["height"] + 0x6;
              K['w']["user_id"] > 0x0 && (this["favoritesB" + "utton"] = new m['Ch']("list favor" + "ites", 0xfffe65, 0x78, 0x605344), this["favoritesB" + "utton"]['x'] = this["searchButt" + 'on']['x'] + this['searchButt' + 'on']["width"] + 0x6, this['favoritesB' + "utton"]['y'] = this["searchButt" + 'on']['y'], this["addChild"](this["favoritesB" + "utton"]), this["favoritesB" + "utton"]["addEventLi" + 'stener'](I['Cm']["MOUSE_UP"], this["listFavori" + "tes"]));
              this['backButton']["addEventLi" + "stener"](k['Cm']["MOUSE_UP"], this["backPress"]);
              this["searchButt" + 'on']["addEventLi" + "stener"](f['Cm']["MOUSE_UP"], this["openSearch" + "Menu"]);
              this["refreshBut" + "ton"]["_pixiSprit" + 'e']['on']("pointertap", this["loadData"]["bind"](this));
              q1["savedSearc" + 'h'] > 0x0 && this["createSear" + 'chTermButt' + 'on'](B["savedSearc" + 'h']);
            }
          }
          ny["addChild"](Nw);
          Nw['x'] = parseFloat(Na['@x']);
          Nw['y'] = parseFloat(Na['@y']);
        } else {
          this["statusSpri" + 'te'] = new nu['AS']("Saving Rep" + "lay...");
          var Td = this['statusSpri' + 'te']['window'];
          this["_window"]['parent']["addChild"](Td);
          Td["center"]();
          var Tz = this["createRepl" + "ayQueryStr" + 'ing'](this["_levelId"], this["_character"], nb['w']["architectu" + 're'], this["_completed"] ? this["_length"] : nS['w']["maxReplayF" + "rames"], nr['w']["CURRENT_VE" + "RSION"], this["commentsIn" + "put"]["text"]);
          var TF = new nR(this["APPLESAUCE"]);
          var TM = TF["encrypt"](Tz);
          var TH = TF["getIV"]();
          var Tb = new nl['ag']();
          Tb["writeBytes"](this["_byteArray"]);
          var TZ = ny['nu']["encodeByte" + "Array"](Tb);
          var Ty = nv['w']['siteURL'] + "replay.hw";
          var Tc = new N5['vg'](Ty);
          Tc['method'] = nH['QI']["POST"];
          var TX = new nE['Vt']();
          TX["action"] = "create";
          TX['rr'] = nO(TZ);
          TX['em'] = nU(TM);
          TX['ei'] = qj(TH);
          Tc["data"] = TX;
          this["loader"] = new qP['NU']();
          this['loader']["addEventLi" + 'stener'](nD['Jh']["COMPLETE"], this["replaySave" + 'd']);
          this["loader"]["load"](Tc);
        }
      }
      nL = nY["length"];
      for (var fb = 0x0; fb < nL; fb++) {
        var fZ = nY[fb];
        if (0x0 == parseInt(fZ['@t'])) {
          var fy = new qT['ai']();
          nb["addChild"](fy);
          fy['x'] = parseFloat(fZ['@x']);
          fy['y'] = parseFloat(fZ['@y']);
          if (-0x1 != fZ["@b1"]) {
            if ('s' == (fX = String(fZ["@b1"])["charAt"](0x0))) {
              if ("eNLWW" === "Gwqhk") {
                var Tz = this["COMArray"][T];
                var TF = Tz["GetWorldCe" + "nter"]();
                var TM = Tz['GetMass']();
                V['x'] += TF['x'] * TM;
                h['y'] += TF['y'] * TM;
                C += TM;
              } else {
                var fc = parseInt(String(fZ["@b1"])["substring"](0x1));
                fy["body1"] = nZ["getChildAt"](fc);
              }
            } else {
              'g' == fX ? (fc = parseInt(String(fZ["@b1"])["substring"](0x1)), fy["body1"] = ny["getChildAt"](fc)) : fy["body1"] = nH["getChildAt"](fZ["@b1"]);
            }
          }
          -0x1 != fZ["@b2"] && ('s' == (fX = String(fZ["@b2"])["charAt"](0x0)) ? (fc = parseInt(String(fZ["@b2"])["substring"](0x1)), fy["body2"] = nZ["getChildAt"](fc)) : 'g' == fX ? (fc = parseInt(String(fZ['@b2'])["substring"](0x1)), fy['body2'] = ny['getChildAt'](fc)) : fy["body2"] = nH["getChildAt"](parseInt(fZ["@b2"])));
          't' == fZ['@l'] && (fy["limit"] = !0x0);
          null != fZ['@ua'] && (fy["upperAngle"] = parseInt(fZ["@ua"]));
          null != fZ["@la"] && (fy["lowerAngle"] = parseInt(fZ["@la"]));
          't' == fZ['@m'] && (fy['motor'] = !0x0);
          null != fZ["@tq"] && (fy["torque"] = parseFloat(fZ["@tq"]));
          null != fZ["@sp"] && (fy["speed"] = parseFloat(fZ["@sp"]));
          't' == fZ['@c'] && (fy["collideSel" + 'f'] = !0x0);
          'f' == fZ['@v'] && (fy["vehicleCon" + "trolled"] = !0x1);
          fy["drawArms"]();
        } else {
          if (0x1 == parseInt(fZ['@t'])) {
            var fX;
            var fx = new qT['NO']();
            nb["addChild"](fx);
            fx['x'] = parseFloat(fZ['@x']);
            fx['y'] = parseFloat(fZ['@y']);
            fx["axisAngle"] = parseFloat(fZ['@a']);
            -0x1 != fZ["@b1"] && ('s' == (fX = String(fZ["@b1"])["charAt"](0x0)) ? (fc = parseInt(String(fZ["@b1"])["substring"](0x1)), fx['body1'] = nZ["getChildAt"](fc)) : 'g' == fX ? (fc = parseInt(String(fZ["@b1"])["substring"](0x1)), fx["body1"] = ny["getChildAt"](fc)) : fx["body1"] = nH["getChildAt"](fZ["@b1"]));
            -0x1 != fZ['@b2'] && ('s' == (fX = String(fZ["@b2"])["charAt"](0x0)) ? (fc = parseInt(String(fZ["@b2"])['substring'](0x1)), fx["body2"] = nZ["getChildAt"](fc)) : 'g' == fX ? (fc = parseInt(String(fZ["@b2"])["substring"](0x1)), fx['body2'] = ny['getChildAt'](fc)) : fx["body2"] = nH['getChildAt'](fZ["@b2"]));
            't' == fZ['@l'] && (fx["limit"] = !0x0);
            null != fZ["@ul"] && (fx["upperLimit"] = parseInt(fZ["@ul"]));
            null != fZ['@ll'] && (fx['lowerLimit'] = parseInt(fZ["@ll"]));
            't' == fZ['@m'] && (fx["motor"] = !0x0);
            null != fZ['@fo'] && (fx["force"] = parseFloat(fZ["@fo"]));
            null != fZ["@sp"] && (fx["speed"] = parseFloat(fZ["@sp"]));
            't' == fZ['@c'] && (fx["collideSel" + 'f'] = !0x0);
            'f' == fZ['@v'] && (fx["vehicleCon" + "trolled"] = !0x1);
            fx["drawArms"]();
          }
        }
      }
      nL = nv["length"];
      for (var fw = 0x0; fw < nL; fw++) {
        var fa = new qT['Qs']();
        nc["addChild"](fa);
      }
      for (var fY = new Set(), fv = 0x0; fv < nL; fv++) {
        var fL = nv[fv];
        (fa = nc["getChildAt"](fv))['x'] = parseFloat(fL['@x']);
        fa['y'] = parseFloat(fL['@y']);
        fa["angle"] = parseFloat(fL['@a']);
        fa["shapeWidth"] = parseFloat(fL['@w']);
        fa["shapeHeigh" + 't'] = parseFloat(fL['@h']);
        fa["triggeredB" + 'y'] = parseInt(fL['@b'] || 0x1);
        fa['typeIndex'] = parseInt(fL['@t']);
        fa['repeatType'] = parseInt(fL['@r'] || 0x1);
        't' == fL["@sd"] && (fa['startDisab' + "led"] = !0x0);
        fa['repeatType'] > 0x2 && (fa["repeatInte" + "rval"] = parseFloat(fL['@i']));
        var fU = !(0x1 != fa["typeIndex"] && 0x4 != fa['triggeredB' + 'y']);
        var fO = 0x1 == fa["typeIndex"];
        0x1 == fa["typeIndex"] ? fa["triggerDel" + 'ay'] = parseFloat(fL['@d']) : 0x2 == fa["typeIndex"] ? (fa["soundEffec" + 't'] = qC['Gg']["instance"]["sfxLookup"][parseInt(fL['@s'])], fa["triggerDel" + 'ay'] = parseFloat(fL['@d']), fa["volume"] = parseFloat(fL['@v']), fa["soundLocat" + "ion"] = parseFloat(fL['@l']), fa["panning"] = parseFloat(fL['@p'])) : 0x3 == fa["typeIndex"] && (fa["triggerDel" + 'ay'] = 0x0);
        if (fU) {
          for (var fG, fQ = fL["children"], T0 = 0x0; T0 < fQ["length"]; T0++) {
            var T1 = fQ[T0];
            var T2 = T1["name"];
            var T3 = null;
            var T4 = null;
            var T5 = null;
            var T6 = parseInt(T1['@i']);
            if ('sh' == T2) {
              fG = nH["getChildAt"](T6);
            } else {
              if ('sp' == T2) {
                fG = nZ["getChildAt"](T6);
              } else {
                if ('g' == T2) {
                  fG = ny["getChildAt"](T6);
                } else {
                  if ('j' == T2) {
                    fG = nb["getChildAt"](T6);
                  } else {
                    if ('t' != T2) {
                      throw new Error("what the f" + "uck is thi" + "s target?");
                    }
                    fG = nc['getChildAt'](T6);
                  }
                }
              }
            }
            if (fO && (T3 = fG['triggerAct' + 'ionList'], T4 = fG["triggerAct" + "ionListPro" + "perties"], T3)) {
              if (this["_levelVers" + "ion"] < 1.87) {
                var T7 = parseInt(T1['@a'] || 0x0);
                var T8 = T3[T7];
                fG["triggerAct" + "ions"]['set'](fa, [T8]);
                if (T5 = T4 ? T4[T7] : null) {
                  for (var T9 = 0x0; T9 < T5["length"]; T9++) {
                    if ('jccvu' === "bHDTU") {
                      var TF = this["shapeGuide"]["helmetVert" + [T + 0x1]];
                      V["vertices"][h] = new C['RM'](TF['x'] / this["character_" + 'scale'], TF['y'] / this["character_" + "scale"]);
                    } else {
                      var Tq = T5[T9];
                      (TC = fG["keyedPrope" + "rtyObject"][Tq]) || (TC = fG["keyedPrope" + "rtyObject"][Tq] = new Map());
                      var Tn = T1['@p' + T9];
                      't' == Tn || 'f' == Tn ? TC["set"](fa, 't' == Tn ? [!0x0] : [!0x1]) : '' != Tn && TC["set"](fa, [parseFloat(Tn)]);
                    }
                  }
                }
              } else {
                var TN = T1['a'];
                var Tf = fG["triggerAct" + "ions"]["get"](fa);
                Tf || (Tf = [], fG["triggerAct" + "ions"]['set'](fa, Tf));
                for (var TT = 0x0; TT < (null == TN ? void 0x0 : TN["length"]); TT++) {
                  if ("lcOIE" === "lcOIE") {
                    var TV = TN[TT];
                    T7 = parseInt(TV['@i']);
                    if (T3 && (T8 = T3[T7], Tf["push"](T8), T5 = T4 ? T4[T7] : null)) {
                      for (var Th = 0x0; Th < T5["length"]; Th++) {
                        if ("PAEYW" !== "PAEYW") {
                          var TM = this["jointAccel" + 's'][j];
                          P = p < K ? m["min"](I + TM, k) : f;
                        } else {
                          var TC;
                          var Tj = T5[Th];
                          (TC = fG["keyedPrope" + 'rtyObject'][Tj]) || (TC = fG["keyedPrope" + "rtyObject"][Tj] = new Map());
                          var TP = TC["get"](fa);
                          TP || (TP = [], TC["set"](fa, TP));
                          var Tp = TV['@p' + Th];
                          void 0x0 !== Tp && (TP[TT] = 't' == Tp || 'f' == Tp ? 't' == Tp : parseFloat(Tp));
                        }
                      }
                    }
                  } else {
                    this["removeActi" + 'on'](this["reAttachin" + 'g']);
                    this['ejected'] = !0x0;
                    this["resetJoint" + "Limits"]();
                    var TH = this["_session"]["m_world"];
                    TH["DestroyJoi" + 'nt'](this["framePelvi" + 's']);
                    this["framePelvi" + 's'] = null;
                    this["frameFoot1"] && (TH["DestroyJoi" + 'nt'](this["frameFoot1"]), this['frameFoot1'] = null);
                    this["frameFoot2"] && (TH['DestroyJoi' + 'nt'](this["frameFoot2"]), this["frameFoot2"] = null);
                    this["torsoHand1"] && (TH["DestroyJoi" + 'nt'](this["torsoHand1"]), this["torsoHand1"] = null);
                    this["torsoHand2"] && (TH['DestroyJoi' + 'nt'](this["torsoHand2"]), this["torsoHand2"] = null);
                    this["guy"]['tankShape'] || (this["leg1Contac" + 'ts'] = 0x0, this["leg2Contac" + 'ts'] = 0x0, this["checkLegsF" + "ree"]());
                  }
                }
              }
            }
            fa["addTarget"](fG, !0x0);
            fY["add"](fG);
          }
        }
        fa['x'] = parseFloat(fL['@x']);
        fa['y'] = parseFloat(fL['@y']);
      }
      for (var TK, Tm = function (TH) {


          var Tb = 'undefined' != typeof Symbol && TH[Symbol["iterator"]] || TH['@@iterator'];
          if (Tb) {
            return (Tb = Tb["call"](TH))["next"]["bind"](Tb);
          }
          if (Array["isArray"](TH) || (Tb = function (Ty, Tc) {
            if (Ty) {
              if ("string" == typeof Ty) {
                return qP(Ty, Tc);
              }
              var TX = {}["toString"]["call"](Ty)["slice"](0x8, -0x1);
              "Object" === TX && Ty["constructo" + 'r'] && (TX = Ty["constructo" + 'r']["name"]);
              return "Map" === TX || "Set" === TX ? Array["from"](Ty) : 'Arguments' === TX || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/["test"](TX) ? qP(Ty, Tc) : void 0x0;
            }
          }(TH))) {
            Tb && (TH = Tb);
            var TZ = 0x0;
            return function () {
              return TZ >= TH["length"] ? {
                'done': !0x0
              } : {
                'done': !0x1,
                'value': TH[TZ++]
              };
            };
          }
          throw new TypeError("Invalid at" + "tempt to i" + "terate non" + "-iterable " + "instance.\n" + 'In\x20order\x20t' + 'o\x20be\x20itera' + "ble, non-a" + "rray objec" + "ts must ha" + 've\x20a\x20[Symb' + "ol.iterato" + "r]() metho" + 'd.');
        }(fY); !(TK = Tm())["done"];) {
        TK["value"]["sortTrigge" + 'rs']();
      }
      var TI = new qT['ak']();
      nM["addChild"](TI);
      TI['x'] = parseFloat(nX['@x']);
      TI['y'] = parseFloat(nX['@y']);
      TI['characterI' + "ndex"] = parseFloat(nX['@c']);
      TI["hideVehicl" + 'e'] = 't' == nX['@h'];
      qh['w']["hideVehicl" + 'e'] = TI['hideVehicl' + 'e'];
      qh['w']["bdIndex"] = parseInt(nX["@bg"]);
      (null == nX || null === (nF = nX["@bgc"]) || void 0x0 === nF ? void 0x0 : nF["length"]) > 0x0 ? qh['w']["bdColor"] = parseInt(nX["@bgc"]) : qh['w']['bdColor'] = 0xffffff;
      return nM;
    };
    nt["createDumm" + 'yShape'] = function () {
      var nB = new qT['Ps'](!0x1, !0x1, !0x1, 0x1, 0x0, -0x1, 0x0);
      nB['x'] = nB['y'] = 0x0;
      nB["vertVector"]["push"](new qj['RM']());
      nB['vertVector']["push"](new qj['RM'](0xa, 0x0));
      nB["vertVector"]['push'](new qj['RM'](0x5, 0x5));
      nB["handleVect" + 'or']["push"](new qj['RM']());
      nB["handleVect" + 'or']['push'](new qj['RM']());
      nB["handleVect" + 'or']["push"](new qj['RM']());
      nB["handleVect" + 'or']["push"](new qj['RM']());
      nB["handleVect" + 'or']["push"](new qj['RM']());
      nB["handleVect" + 'or']["push"](new qj['RM']());
      return nB;
    };
    nt["buildRefSh" + 'ape'] = function (nB) {
      if ("qniau" === 'qniau') {
        return null;
      } else {
        this["statusSpri" + 'te'] = new p("Deleting L" + "evel...");
        var nl = this["statusSpri" + 'te']["window"];
        this["canvas"]["parent"]['parent']["addChild"](nl);
        nl["center"]();
        var no = new K['vg'](m['w']["siteURL"] + ("set_level." + 'hw'));
        no["method"] = I['QI']["POST"];
        var ni = new k['Vt']();
        ni["action"] = f ? "del_level" : "del_priv_l" + "evel";
        ni["level_id"] = q1;
        no['data'] = ni;
        var nE = new B['NU']();
        nE["addEventLi" + "stener"](u['Jh']["COMPLETE"], this['levelDelet' + 'ed']);
        nE["addEventLi" + "stener"](l['BR']["IO_ERROR"], this["IOErrorHan" + "dler"]);
        nE["load"](no);
      }
    };
    nk = nK;
    (ns = [{
      'key': "levelXML",
      'get': function () {
        if ("YfCkS" !== 'UQVup') {
          return this["_levelXML"];
        } else {
          this["_session"]["camera"]["focus"] == this['cameraFocu' + 's'] ? this["_session"]["camera"]["focus"] = this["elf1"]["cameraFocu" + 's'] : this['_session']["camera"]["focus"] == this["elf1"]["cameraFocu" + 's'] ? this["_session"]["camera"]['focus'] = this["elf2"]["cameraFocu" + 's'] : this["_session"]['camera']["focus"] = this["cameraFocu" + 's'];
        }
      },
      'set': function (nB) {
        if ("rKmHZ" !== 'nHwHq') {
          this["_levelXML"] = nB;
        } else {
          var nl = f[T](V);
          var no = nl["value"];
        }
      }
    }, {
      'key': "levelVersi" + 'on',
      'get': function () {
        if ("FosMr" !== "ZkFkk") {
          return this["_levelVers" + "ion"];
        } else {
          N['XD']["USE_INTERP" + 'OLATION'] = !0x0;
          this["frames"] += 0x1;
          this['steps'] += 0x1;
          var nu = 0x1e / f['b0']["maxFPS"];
          0x1 === this["steps"] && (nu = 0x1);
          this["_accumulat" + "edStep"] += nu;
          this['_accumulat' + "edStep"] >= 0x1 && (this['_accumulat' + "edStep"] = 0x1);
          this['m_world']["Interpolat" + "edStep"](this['_accumulat' + "edStep"]);
          0x1 === this["_accumulat" + "edStep"] && (this["_character"]["preActions"](), this["_character"]["doNothing"](), this["_character"]["actions"](), this['m_world']["Step"](this["m_timeStep"], this["m_iteratio" + 'ns']), this["_character"]['handleCont' + "actBuffer"](), this["_character"]["checkJoint" + 's'](), this["_accumulat" + "edStep"] = 0x0);
          0x1 === this['steps'] && this["m_world"]["Interpolat" + 'edStep'](0x1);
          this["_character"]["paint"]();
          this["_particleC" + "ontroller"]["step"](nu);
        }
      }
    }, {
      'key': "errorStrin" + 'g',
      'get': function () {
        if ('THyXB' === "yjVxu") {
          var nu;
          try {
            nu = new m['_9'](I);
          } catch (nl) {
            return;
          }
          j["_leveldata"] = nu;
          P["dispatchEv" + 'ent'](new p['Jh'](K["IMPORT_DAT" + 'A']));
        } else {
          return this["_errorStri" + 'ng'];
        }
      }
    }]) && function (nB, nu) {
      for (var nl = 0x0; nl < nu["length"]; nl++) {
        var no = nu[nl];
        no["enumerable"] = no["enumerable"] || !0x1;
        no["configurab" + 'le'] = !0x0;
        "value" in no && (no["writable"] = !0x0);
        Object["defineProp" + "erty"](nB, qp(no["key"]), no);
      }
    }(nk["prototype"], ns);
    Object["defineProp" + "erty"](nk, "prototype", {
      'writable': !0x1
    });
    return nk;
  }(q7['Qe']);
  var qI = q2(0xbc9f);
  function qk(np) {
    var nK = function (nm) {
      if ("object" != typeof nm || !nm) {
        return nm;
      }
      var nI = nm[Symbol['toPrimitiv' + 'e']];
      if (void 0x0 !== nI) {
        var nk = nI["call"](nm, "string");
        if ("object" != typeof nk) {
          return nk;
        }
        throw new TypeError("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
      }
      return String(nm);
    }(np);
    return 'symbol' == typeof nK ? nK : nK + '';
  }
  function qs(np, nK) {


    qs = Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"]["bind"]() : function (nm, nI) {
      nm['__proto__'] = nI;
      return nm;
    };
    return qs(np, nK);
  }
  var qt = function (np) {

    if ('hCNao' !== "tlLMm") {
      function ns(nt, nB, nu) {

        var nl;
        (nl = np["call"](this, nB, nu, !0x1) || this)["loadComple" + 'te'] = function (no) {
          var ni = no["target"];
          ni["removeEven" + "tListener"](q7['Jh']["COMPLETE"], nl["loadComple" + 'te']);
          ni["removeEven" + "tListener"](q7['BR']["IO_ERROR"], nl["IOErrorHan" + "dler"]);
          var nE = String(ni["data"]);
          var nR = nE["substr"](0x0, 0x8);
          if (nR["indexOf"]("<html>") > -0x1) {
            nl["_errorStri" + 'ng'] = 'system_err' + 'or';
            return void nl["dispatchEv" + "ent"](new q7['NN'](q7['NN']["ERROR"]));
          }
          if (nR["indexOf"]("failure") > -0x1) {
            if ("PSuZm" === "PSuZm") {
              var nW = nE["split"](':');
              nl["_errorStri" + 'ng'] = nW[0x1];
              return void nl["dispatchEv" + "ent"](new q7['NN'](q7['NN']['ERROR']));
            } else {
              var nz = f["call"](T, "string");
              if ("object" != typeof nz) {
                return nz;
              }
              throw new V("@@toPrimit" + "ive must r" + 'eturn\x20a\x20pr' + "imitive va" + 'lue.');
            }
          }
          var nA = qI['Buffer']["from"](ni['data']);
          var nr = new q8['ag'](nA);
          var nJ = nr["readInt"]();
          var nD = new q8['ag']();
          nr["readBytes"](nD, 0x0, nJ);
          nl["_replayByt" + 'eArray'] = nD;
          var ng = new q8['ag']();
          nr["readBytes"](ng, 0x0, 0x0);
          q8['t7']["decryptByt" + "eArray"](ng, "eatshit" + nl["authorId"]);
          ng["uncompress"]("zlib");
          var nS = ng["readUTFByt" + 'es'](ng["length"]);
          nl["_levelXML"] = new q7['_9'](nS);
          nl['dispatchEv' + 'ent'](new q7['Jh'](q7['Jh']["COMPLETE"]));
        };
        nl["replayId"] = nt;
        return nl;
      }
      var nK;
      var nm;
      var nI;
      var nk;
      nm = np;
      (nK = ns)["prototype"] = Object["create"](nm["prototype"]);
      nK["prototype"]["constructo" + 'r'] = nK;
      qs(nK, nm);
      ns["prototype"]["loadData"] = function () {
        var nt = new q7['vg'](qh['w']["siteURL"] + "replay.hw");
        nt["method"] = q7['QI']["POST"];
        var nB = new q7['Vt']();
        nB["replay_id"] = this["replayId"];
        nB["level_id"] = this["levelId"];
        nB["action"] = "get_cmb_re" + "cords";
        nt["data"] = nB;
        var nu = new q7['NU']();
        nu["responseTy" + 'pe'] = "blob";
        nu["dataFormat"] = q7['Uw']['BINARY'];
        nu["addEventLi" + 'stener'](q7['Jh']["COMPLETE"], this["loadComple" + 'te']);
        nu["addEventLi" + 'stener'](q7['BR']["IO_ERROR"], this["IOErrorHan" + "dler"]);
        nu["load"](nt);
      };
      nI = ns;
      (nk = [{
        'key': "replayByte" + "Array",
        'get': function () {
          if ("aWnwL" !== 'aWnwL') {
            void 0x0 === qn && (qN = null);
            void 0x0 === qf && (qT = null);
            void 0x0 === qV && (qh = null);
            void 0x0 === qC && (qj = null);
            void 0x0 === qP && (qp = null);
            void 0x0 === qK && (qm = null);
            void 0x0 === qI && (qk = null);
            void 0x0 === qs && (qt = null);
            void 0x0 === qB && (qu = null);
            void 0x0 === ql && (qo = null);
            void 0x0 === qi && (qE = null);
            void 0x0 === qR && (qW = null);
            void 0x0 === qA && (qr = null);
            this["_id"] = qJ(qD);
            this["_level_id"] = qg(qS);
            this["_user_id"] = qd(qz);
            this["_user_name"] = qF(qM);
            this["_weighted_" + "rating"] = qH(qb);
            this['_votes'] = qZ(qy);
            this["_average_r" + "ating"] = this["getAverage" + "Rating"](this["_weighted_" + "rating"], this["_votes"]);
            this["_views"] = qc(qX);
            this["_comments"] = qx ? qw['l5']["removeSlas" + "hes"](qe(qa)) : '';
            this["_character"] = qY(qv);
            this["_timeFrame" + 's'] = qL(qU);
            this["_timeSecon" + 'ds'] = qO(qG) / 0x1e;
            this["_architect" + "ure"] = qQ(n0);
            this['_version'] = n1(n2);
            var nB = n3(n4);
            var nu = n5(nB["substr"](0x0, 0x4));
            var nl = n6(nB["substr"](0x5, 0x2)) - 0x1;
            var no = n7(nB["substr"](0x8, 0x2));
            var ni = n8(nB["substr"](0xb, 0x2));
            var nE = n9(nB["substr"](0xe, 0x2));
            var nR = nq(nB['substr'](0x11, 0x2));
            this['_created'] = new nn(nu, nl, no, ni, nE, nR);
          } else {
            return this["_replayByt" + "eArray"];
          }
        }
      }]) && function (nt, nB) {
        for (var nu = 0x0; nu < nB['length']; nu++) {
          var nl = nB[nu];
          nl["enumerable"] = nl["enumerable"] || !0x1;
          nl["configurab" + 'le'] = !0x0;
          'value' in nl && (nl["writable"] = !0x0);
          Object["defineProp" + "erty"](nt, qk(nl["key"]), nl);
        }
      }(nI["prototype"], nk);
      Object["defineProp" + "erty"](nI, "prototype", {
        'writable': !0x1
      });
      return nI;
    } else {
      var nB = h["getItem"](C["LAST_RULE_" + "READ_TIMES" + "TAMP_STORA" + "GE_KEY_NAM" + 'E']);
      var nu = null === nB;
      if (null !== nB) {
        var nl = m(nB);
        I['now']() - nl > k["MAX_RULE_R" + "EAD_TIMEOU" + "T_MS"] && (nu = !0x0);
      }
      nu && (this["saveNewBut" + 'ton']["disabled"] = !0x0, this['saveNewBut' + "ton"]["label"] = "Read the r" + 'ules!', this["rulesLink"]["addEventLi" + "stener"]("linkClicke" + 'd', function () {
        return nB["startDelay" + "edSaveLeve" + "lUnlock"]();
      }));
    }
  }(qm);
  var qB = q2(0x17fd7);
  var qu = q2(0x56e7);
  function ql(np) {
    var nK = function (nm) {
      if ("uaXOX" !== "lwyGA") {
        if ('object' != typeof nm || !nm) {
          return nm;
        }
        var nI = nm[Symbol["toPrimitiv" + 'e']];
        if (void 0x0 !== nI) {
          var nk = nI["call"](nm, "string");
          if ("object" != typeof nk) {
            return nk;
          }
          throw new TypeError("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + 'lue.');
        }
        return String(nm);
      } else {
        this["actionReco" + "rder"]["removeEven" + "tListener"](R['bZ']['UNDO'], this["undoHandle" + 'r']);
        this["actionReco" + "rder"]['removeEven' + "tListener"](W['bZ']["REDO"], this['redoHandle' + 'r']);
        this["toolBar"]["removeEven" + "tListener"](A['iO']['TOOL_SELEC' + "TED"], this["toolSelect" + 'ed']);
        this['removeEven' + 'tListener'](r['Cm']["MOUSE_DOWN"], this["mouseDownH" + "andler"]);
        this["removeEven" + 'tListener'](J['Cm']["MOUSE_UP"], this['mouseUpHan' + "dler"]);
        this['canvasHold' + 'er']["removeEven" + "tListener"](D['Cm']["MOUSE_WHEE" + 'L'], this["mouseWheel" + "Handler"]);
        this['bg']["removeEven" + "tListener"](g['Cm']["MOUSE_WHEE" + 'L'], this["mouseWheel" + "Handler"]);
        this["stage"]["removeEven" + "tListener"](S['kV']["KEY_DOWN"], this["keyDownHan" + "dler"]);
        this["stage"]["removeEven" + "tListener"](d['kV']["KEY_UP"], this["keyUpHandl" + 'er']);
        this["shapeTool"]["removeEven" + "tListener"](z['XP']["GENERIC"], this["actionHand" + "ler"]);
        this["polygonToo" + 'l']["removeEven" + 'tListener'](F['XP']["GENERIC"], this["actionHand" + "ler"]);
        this["artTool"]["removeEven" + "tListener"](M['XP']["GENERIC"], this["actionHand" + "ler"]);
        this["jointTool"]['removeEven' + "tListener"](H['XP']['GENERIC'], this["actionHand" + "ler"]);
        this["specialToo" + 'l']["removeEven" + "tListener"](b['XP']["GENERIC"], this["actionHand" + "ler"]);
        this["textTool"]['removeEven' + "tListener"](Z['XP']["GENERIC"], this['actionHand' + 'ler']);
        this["textTool"]['removeEven' + "tListener"](y['XP']["GENERIC"], this["textPlaced"]);
        this["triggerToo" + 'l']["removeEven" + "tListener"](c['XP']["GENERIC"], this['actionHand' + "ler"]);
        this["triggerToo" + 'l']["removeEven" + "tListener"](X['XP']["GENERIC"], this["triggerPla" + "ced"]);
        this["arrowTool"]["removeEven" + "tListener"](x['XP']["GENERIC"], this["actionHand" + "ler"]);
        this["arrowTool"]["removeEven" + "tListener"](w['XP']["SCALE"], this["actionHand" + 'ler']);
        this["arrowTool"]["removeEven" + "tListener"](np['XP']["TRANSLATE"], this["actionHand" + 'ler']);
        this["arrowTool"]["removeEven" + "tListener"](a['XP']["ROTATE"], this["actionHand" + "ler"]);
        this["arrowTool"]["removeEven" + 'tListener'](Y['XP']["DEPTH"], this["actionHand" + "ler"]);
      }
    }(np);
    return 'symbol' == typeof nK ? nK : nK + '';
  }
  function qo(np, nK) {


    qo = Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"]["bind"]() : function (nm, nI) {
      if ("fOGUI" !== "UDcSd") {
        nm['__proto__'] = nI;
        return nm;
      } else {
        N["useFullScr" + "een"] = f["value"];
      }
    };
    return qo(np, nK);
  }
  var qi = function (np) {

    if ("ojobQ" === "ojobQ") {
      function nt(nB, nu, nl, no) {
        if ("WYFhv" !== "YGqin") {
          var ni;
          void 0x0 === nl && (nl = -0x1);
          void 0x0 === no && (no = !0x1);
          (ni = np["call"](this) || this)['dataLoaded' + "Bind"] = ni["dataLoaded"]["bind"](ni);
          ni["IOErrorHan" + "dlerBind"] = ni["IOErrorHan" + "dler"]["bind"](ni);
          ni["loadErrorH" + "andlerBind"] = ni["loadErrorH" + "andler"]['bind'](ni);
          ni["levelDataO" + 'bject'] = nB;
          ni["replayId"] = nl;
          ni["characterI" + "ndex"] = nu;
          ni["incrementP" + "lays"] = no;
          return ni;
        } else {
          var nR = h['x5']["b2Dot"](C["velocity"], j["normal"]);
          (nR = P["abs"](nR)) > 0x4 && p['contactAdd' + "Buffer"]["set"](K, 'hit');
        }
      }
      var nK;
      var nm;
      nm = np;
      (nK = nt)["prototype"] = Object["create"](nm["prototype"]);
      nK["prototype"]["constructo" + 'r'] = nK;
      qo(nK, nm);
      var nI;
      var nk;
      var ns = nt["prototype"];
      ns["load"] = function () {
        this["loadData"]();
      };
      ns["loadData"] = function () {
        if ("oZCug" !== "oZCug") {
          return !0x1;
        } else {
          this['replayId'] > 0x0 ? this["userLevelL" + "oader"] = new qt(this["replayId"], this["levelDataO" + "bject"]['id'], this["levelDataO" + "bject"]["author_id"]) : this['userLevelL' + "oader"] = new qm(this['levelDataO' + "bject"]['id'], this["levelDataO" + "bject"]["author_id"], this["incrementP" + "lays"]);
          this["userLevelL" + "oader"]["addEventLi" + "stener"](q7['Jh']["COMPLETE"], this["dataLoaded" + "Bind"]);
          this["userLevelL" + "oader"]["addEventLi" + "stener"](q7['BR']["IO_ERROR"], this["IOErrorHan" + "dlerBind"]);
          this['userLevelL' + "oader"]["addEventLi" + "stener"](q7['NN']["ERROR"], this["loadErrorH" + "andlerBind"]);
          (this["levelDataO" + 'bject']['id'] || this["replayId"] > 0x0) && this["userLevelL" + "oader"]["loadData"]();
        }
      };
      ns["dataLoaded"] = function (nB) {

        var nu = this;
        this["userLevelL" + 'oader']["removeEven" + "tListener"](q7['Jh']["COMPLETE"], this['dataLoaded' + 'Bind']);
        this["userLevelL" + "oader"]['removeEven' + "tListener"](q7['BR']['IO_ERROR'], this["IOErrorHan" + "dlerBind"]);
        this['userLevelL' + "oader"]["removeEven" + 'tListener'](q7['NN']["ERROR"], this["loadErrorH" + "andlerBind"]);
        if (this["userLevelL" + "oader"] instanceof qt) {
          if ("tNuuj" === "tNuuj") {
            var nl = this['userLevelL' + "oader"];
            this['_replayDat' + 'a'] = new qN();
            this["_replayDat" + 'a']["byteArray"] = nl["replayByte" + "Array"];
          } else {
            var ni = new I['gv']();
            ni['userData'] = this["chestChunk" + 'MCs'][k];
            ni["userData"]["visible"] = !0x0;
            ni['position']["Set"](f['x'] + nt["sin"](B) * u, l['y'] + o["cos"](q2) * E);
            ni["angle"] = this["chestBody"]["GetAngle"]();
            var nE = this["_session"]["m_world"]["CreateBody"](ni);
            nE["CreateShap" + 'e'](R);
            nE["SetMassFro" + "mShapes"]();
            nE["SetLinearV" + "elocity"](this["chestBody"]["GetLinearV" + "elocityFro" + "mWorldPoin" + 't'](ni["position"]));
            nE['SetAngular' + 'Velocity'](this["chestBody"]['GetAngular' + "Velocity"]());
            this["paintVecto" + 'r']["push"](nE);
            this['chunks']["push"](nE);
            W += A['PI'] / 0x2;
          }
        }
        0x1 != this["levelDataO" + "bject"]['id'] ? (this['_levelData'] = this["userLevelL" + "oader"]["buildLevel" + "SourceObje" + 'ct'](), this["_levelVers" + "ion"] = this["userLevelL" + "oader"]["levelVersi" + 'on'], this['loadCharac' + "terData"]()) : (qh['w']["hideVehicl" + 'e'] = !0x1, qu['Qh']["instance"]['load']("level1", {
          'reloadOnError': !0x1
        })["then"](function () {
          if ("yIOEw" === "yIOEw") {
            var ni = new q7['j7']();
            ni["setPixiMov" + "ieClip"]((0x0, qB['zI'])("Level1"));
            ni['convertChi' + "ldren"](ni["pixiMovieC" + "lip"]);
            nu["_levelData"] = ni["children"][0x0];
            nu["loadCharac" + "terData"]();
          } else {
            this["ejected"] = !0x0;
            this["resetJoint" + "Limits"]();
            this["_session"]["m_world"]["DestroyJoi" + 'nt'](this["seatPelvis"]);
            this["seatPelvis"] = null;
            this['_session']["m_world"]["DestroyJoi" + 'nt'](this["seatChest"]);
            this["seatChest"] = null;
            this["seatLeg1"] && (this["_session"]['m_world']["DestroyJoi" + 'nt'](this["seatLeg1"]), this["seatLeg1"] = null);
            this['seatLeg2'] && (this['_session']["m_world"]["DestroyJoi" + 'nt'](this["seatLeg2"]), this["seatLeg2"] = null);
            var nR = this["_session"]["m_world"];
            this["detached"] || (this["refilterSh" + 'it'](this["head1Body"]["GetShapeLi" + 'st']()), this["refilterSh" + 'it'](this["pelvisBody"]["GetShapeLi" + 'st']()), this["refilterSh" + 'it'](this['chestBody']["GetShapeLi" + 'st']()), this["refilterSh" + 'it'](this['upperArm1B' + 'ody']["GetShapeLi" + 'st']()), this["refilterSh" + 'it'](this["upperArm2B" + "ody"]["GetShapeLi" + 'st']()), this['refilterSh' + 'it'](this["lowerArm1B" + "ody"]['GetShapeLi' + 'st']()), this["refilterSh" + 'it'](this["lowerArm2B" + "ody"]["GetShapeLi" + 'st']()), this["refilterSh" + 'it'](this["upperLeg1B" + "ody"]['GetShapeLi' + 'st']()), this["refilterSh" + 'it'](this["upperLeg2B" + "ody"]["GetShapeLi" + 'st']()), this["refilterSh" + 'it'](this["lowerLeg1B" + "ody"]["GetShapeLi" + 'st']()), this['refilterSh' + 'it'](this["lowerLeg2B" + "ody"]["GetShapeLi" + 'st']()));
            for (var nW = this["seatBody"]["GetShapeLi" + 'st'](); nW; nW = nW["m_next"]) {
              nW["SetFilterD" + "ata"](this["zeroFilter"]);
              nR["Refilter"](nW);
            }
          }
        }, function () {
          if ("rowfU" !== "rowfU") {
            this['frontWheel' + 'MC']["gotoAndSto" + 'p'](0x2);
            this["frontWheel" + 'MC']["inner"]["spokes"]["visible"] = !0x1;
            this["frontWheel" + 'MC']["inner"]["broken"]["visible"] = !0x0;
            this["contactImp" + "ulseDict"]["delete"](this["frontWheel" + "Shape"]);
            this['_session']["contactLis" + "tener"]["deleteList" + 'ener'](p['fI']["RESULT"], this['frontWheel' + "Shape"]);
            this["_session"]["contactLis" + "tener"]["deleteList" + "ener"](K['fI']["ADD"], this['frontWheel' + "Shape"]);
            this["_session"]['contactLis' + "tener"]["deleteList" + "ener"](m['fI']["REMOVE"], this["frontWheel" + "Shape"]);
            this["frontConta" + "cts"] = 0x0;
            this["wheelConta" + "cts"] = this["frontConta" + "cts"] + this["backContac" + 'ts'];
            var nE = this['frontWheel' + "Body"]["GetShapeLi" + 'st']();
            this["frontWheel" + "Body"]["DestroySha" + 'pe'](nE);
            var nR = new I['m2']();
            nR["density"] = 0x2;
            nR["friction"] = 0.3;
            nR["restitutio" + 'n'] = 0.1;
            this['ejected'] ? nR["filter"] = this["zeroFilter"] : nR["filter"]["categoryBi" + 'ts'] = 0x201;
            var nW = k["atan2"](f['y'], nt['x']) - this["frontWheel" + "Body"]["GetAngle"]();
            this["frontWheel" + 'MC']["inner"]["broken"]["rotation"] = nW * B["oneEightyO" + 'verPI'];
            nR["SetAsOrien" + "tedBox"](0x19 / this["character_" + "scale"], 0x2d / this["character_" + 'scale'], new u['RM'](0x0, 0x0), nW);
            this["frontWheel" + "Body"]["CreateShap" + 'e'](nR);
            l['m']["instance"]["playAreaSo" + "undInstanc" + 'e']('BikeTireSm' + "ash1", this["frontWheel" + "Body"]);
          } else {
            nu["_errorStri" + 'ng'] = "asset_load" + "_error";
            nu["dispatchEv" + "ent"](new q7['Jh'](q7['NN']["ERROR"]));
          }
        }));
      };
      ns["IOErrorHan" + 'dler'] = function (nB) {
        this["userLevelL" + "oader"]["removeEven" + "tListener"](q7['Jh']["COMPLETE"], this["dataLoaded" + "Bind"]);
        this["userLevelL" + "oader"]["removeEven" + "tListener"](q7['BR']["IO_ERROR"], this["IOErrorHan" + "dlerBind"]);
        this["userLevelL" + 'oader']["removeEven" + 'tListener'](q7['NN']["ERROR"], this['loadErrorH' + "andlerBind"]);
        this["dispatchEv" + "ent"](new q7['Jh'](q7['BR']["IO_ERROR"]));
      };
      ns["loadErrorH" + 'andler'] = function (nB) {
        if ("SqpKj" === "SqpKj") {
          this["userLevelL" + "oader"]["removeEven" + "tListener"](q7['Jh']["COMPLETE"], this["dataLoaded" + "Bind"]);
          this["userLevelL" + "oader"]['removeEven' + "tListener"](q7['BR']["IO_ERROR"], this["IOErrorHan" + "dlerBind"]);
          this["userLevelL" + "oader"]["removeEven" + "tListener"](q7['NN']["ERROR"], this['loadErrorH' + "andlerBind"]);
          this["_errorStri" + 'ng'] = this["userLevelL" + "oader"]["errorStrin" + 'g'];
          this["dispatchEv" + "ent"](new q7['Jh'](q7['NN']["ERROR"]));
        } else {
          var nl = f['w']["currentSes" + 'sion']["level"]["background"][this['id'] + 'mc' + T];
          this['bodies'][V]["SetUserDat" + 'a'](nl);
        }
      };
      ns["loadCharac" + "terData"] = function () {
        this['_character' + "Data"] = new q7['j7']();
        var nB = "Character" + this["characterI" + "ndex"];
        this["_levelVers" + "ion"] >= 1.11 && (nB += "V111");
        this["_character" + "Data"]["setPixiMov" + "ieClip"]((0x0, qB['zI'])(nB));
        this["_character" + "Data"]["convertChi" + "ldren"](this["_character" + "Data"]['pixiMovieC' + "lip"]);
        this['dispatchEv' + "ent"](new q7['Jh'](q7['Jh']["COMPLETE"]));
      };
      nI = nt;
      (nk = [{
        'key': "replayData",
        'get': function () {
          if ("rrgva" !== "rrgva") {
            this["mouseEnabl" + 'ed'] = !0x0;
            this['rollOutHan' + "dler"]();
          } else {
            return this['_replayDat' + 'a'];
          }
        }
      }, {
        'key': 'levelData',
        'get': function () {
          if ("BLBau" === "BLBau") {
            return this["_levelData"];
          } else {
            void 0x0 === h && (C = null);
            j["content"]['y'] = P['scrollTab']['y'] * p["content"]["height"] / -K['bg']['height'];
          }
        }
      }, {
        'key': "levelVersi" + 'on',
        'get': function () {
          return this["_levelVers" + "ion"];
        }
      }, {
        'key': "characterD" + 'ata',
        'get': function () {
          return this["_character" + "Data"];
        }
      }, {
        'key': "errorStrin" + 'g',
        'get': function () {
          if ('UqVhp' !== "MiwBv") {
            return this['_errorStri' + 'ng'];
          } else {
            this["dead"] ? ('1' == qj["charAt"](0x0) ? '1' == qP["charAt"](0x1) ? (qp["leftKeyON"](), qK["rightKeyON"]()) : (qm["leftKeyON"](), qI["rightKeyOF" + 'F']()) : '1' == qk["charAt"](0x1) ? (qs["leftKeyOFF"](), qt["rightKeyON"]()) : (qB['rightKeyOF' + 'F'](), qu["leftKeyOFF"]()), '1' == ql["charAt"](0x2) ? '1' == qo["charAt"](0x3) ? (qi["upKeyON"](), qE["downKeyON"]()) : (qR["upKeyON"](), qW["downKeyOFF"]()) : '1' == qA['charAt'](0x3) ? (qr["upKeyOFF"](), qJ['downKeyON']()) : (qD["upKeyOFF"](), qg["downKeyOFF"]()), '1' == qS["charAt"](0x4) ? qd["spaceKeyON"]() : qz["spaceKeyOF" + 'F'](), '1' == qF["charAt"](0x5) ? qM['shiftKeyON']() : qH['shiftKeyOF' + 'F'](), '1' == qb['charAt'](0x6) ? qZ['ctrlKeyON']() : qy["ctrlKeyOFF"](), '1' == qc['charAt'](0x7) ? qX["zKeyON"]() : qx["zKeyOFF"]()) : this["userVehicl" + 'e'] ? this["userVehicl" + 'e']["operateRep" + "layData"](this["_session"]["iteration"], qw, qe) : ('1' == qa["charAt"](0x0) ? '1' == qY["charAt"](0x1) ? (this["leftAndRig" + "htActions"](), qv['leftKeyON'](), qL["rightKeyON"]()) : (this["leftPresse" + "dActions"](), qU["leftKeyON"](), qO["rightKeyOF" + 'F']()) : '1' == qG["charAt"](0x1) ? (this["rightPress" + "edActions"](), qQ["leftKeyOFF"](), n0["rightKeyON"]()) : (this["leftAndRig" + "htActions"](), n1["rightKeyOF" + 'F'](), n2['leftKeyOFF']()), '1' == n3["charAt"](0x2) ? '1' == n4["charAt"](0x3) ? (this["upAndDownA" + "ctions"](), n5["upKeyON"](), n6["downKeyON"]()) : (this["upPressedA" + "ctions"](), n7["upKeyON"](), n8["downKeyOFF"]()) : '1' == n9['charAt'](0x3) ? (this["downPresse" + "dActions"](), nq["upKeyOFF"](), nn["downKeyON"]()) : (this["upAndDownA" + "ctions"](), nN["upKeyOFF"](), nf['downKeyOFF']()), '1' == nT["charAt"](0x4) ? (this['spacePress' + "edActions"](), nV["spaceKeyON"]()) : (this["spaceNullA" + "ctions"](), nh["spaceKeyOF" + 'F']()), '1' == nC["charAt"](0x5) ? (this["shiftPress" + "edActions"](), nj["shiftKeyON"]()) : (this["shiftNullA" + "ctions"](), nP["shiftKeyOF" + 'F']()), '1' == np["charAt"](0x6) ? (this["ctrlPresse" + "dActions"](), nK["ctrlKeyON"]()) : (this['ctrlNullAc' + "tions"](), nm["ctrlKeyOFF"]()), '1' == nI["charAt"](0x7) ? (this["zPressedAc" + "tions"](), nk["zKeyON"]()) : (this["zNullActio" + 'ns'](), ns['zKeyOFF']()));
          }
        }
      }]) && function (nB, nu) {
        if ("GpEHo" === "YiRci") {
          I(this["_zoomTextL" + "ockTimer"]);
          this["resetResol" + "ution"]();
          this["removeList" + "eners"]();
          this["canvas"]["removeEven" + "tListener"](k['H']["SHAPE_LIMI" + "T_STATUS"], this["shapeLimit" + "Status"]);
          this["canvas"]["removeEven" + "tListener"](f['H']["ART_LIMIT_" + "STATUS"], this["artLimitSt" + 'atus']);
          this["canvas"]["die"]();
          this["topMenu"]["removeEven" + 'tListener'](nt['pF']["MENU_BUSY"], this["putShitOnH" + 'old']);
          this["topMenu"]["removeEven" + "tListener"](B['pF']["MENU_IDLE"], this["resumeThat" + "Shit"]);
          this["topMenu"]["removeEven" + "tListener"](u['pF']["TEST_LEVEL"], this['testLevel']);
          this["topMenu"]["removeEven" + "tListener"](l['pF']["CLEAR_STAG" + 'E'], this['clearStage']);
          this["topMenu"]['removeEven' + "tListener"](o['pF']["GO_MAIN_ME" + 'NU'], this["exitToMain" + 'Menu']);
          this['topMenu']["removeEven" + "tListener"](q2['pF']['CHANGE_ARM' + "_DRAW_STAT" + 'E'], this["redrawTrig" + "gersAndJoi" + "nts"]);
          this["topMenu"]["die"]();
          this["helpWindow"]["die"]();
          this["toolBar"]['die']();
          this["horizontal" + "Scroller"]["die"]();
          this["verticalSc" + "roller"]["die"]();
          this["actionReco" + "rder"]["die"]();
          this["saverLoade" + 'r']['die']();
          this["saverLoade" + 'r']["removeEven" + "tListener"](E['$H']['CLEAR_STAG' + 'E'], this["clearStage"]);
          this["saverLoade" + 'r']["removeEven" + "tListener"](R['$H']["UPDATE_COP" + "IED_VERTS"], this["updateCopi" + 'edVerts']);
          this["saverLoade" + 'r'] = null;
          this["arrowTool"]["die"]();
          this["shapeTool"]["die"]();
          this["polygonToo" + 'l']["die"]();
          this["jointTool"]["die"]();
          this["specialToo" + 'l']["die"]();
          this["textTool"]["die"]();
          this["triggerToo" + 'l']["die"]();
          this["artTool"]["die"]();
          this["autoSaveTi" + "mer"] && (this["autoSaveTi" + "mer"]["stop"](), this["autoSaveTi" + "mer"]["removeEven" + "tListener"](W['iJ']["TIMER"], this["timerHandl" + 'er']));
          delete A['w']['sharedObje' + 'ct']["data"]["editorLeve" + "lData"];
        } else {
          for (var nl = 0x0; nl < nu["length"]; nl++) {
            if ("nkACG" === "AJGkt") {
              N["session"] = f;
            } else {
              var no = nu[nl];
              no["enumerable"] = no["enumerable"] || !0x1;
              no["configurab" + 'le'] = !0x0;
              "value" in no && (no["writable"] = !0x0);
              Object["defineProp" + "erty"](nB, ql(no["key"]), no);
            }
          }
        }
      }(nI["prototype"], nk);
      Object["defineProp" + "erty"](nI, "prototype", {
        'writable': !0x1
      });
      return nI;
    } else {
      return this["_rating"];
    }
  }(q7['Qe']);
  var qE = q2(0x13a75);
  q2(0xd22);
  q2(0x1312d);
  q2(0x127b);
  q2(0xec3f);
  q2(0x9fab);
  var qR = q2(0x1174c);
  var qW = q2(0xbddf);
  var qA = q2(0x13a47);
  q2(0x15f33);
  q2(0x5bcc);
  var qr = q2(0x15719);
  var qJ = q2(0xb65a);
  function qD(np) {

    var nK = function (nm) {
      if ("object" != typeof nm || !nm) {
        return nm;
      }
      var nI = nm[Symbol["toPrimitiv" + 'e']];
      if (void 0x0 !== nI) {
        var nk = nI["call"](nm, "string");
        if ("object" != typeof nk) {
          return nk;
        }
        throw new TypeError("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
      }
      return String(nm);
    }(np);
    return "symbol" == typeof nK ? nK : nK + '';
  }
  function qg(np, nK) {


    qg = Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"]["bind"]() : function (nm, nI) {
      nm["__proto__"] = nI;
      return nm;
    };
    return qg(np, nK);
  }
  var qS = function (np) {


    function nK(nB) {
      var nu;
      (nu = np["call"](this) || this)["_index"] = nB;
      nu["createBg"]();
      nu['mouseChild' + "ren"] = !0x1;
      nB <= qh['w']["totalChara" + "cters"] && (nu["loadBitmap" + 's'](), nu["loaderBW"]["visible"] = !0x0, nu["loaderColo" + 'r']['visible'] = !0x1, nu["_selectabl" + 'e'] = !0x0, nu["buttonMode"] = !0x0);
      return nu;
    }
    var nm;
    var nI;
    nI = np;
    (nm = nK)["prototype"] = Object["create"](nI["prototype"]);
    nm["prototype"]['constructo' + 'r'] = nm;
    qg(nm, nI);
    var nk;
    var ns;
    var nt = nK["prototype"];
    nt["createBg"] = function () {
      "aQRjF" === "zKZiM" ? (n['prototype']["reset"]["call"](this), this["ejected"] = !0x1, this["wheelConta" + "cts"] = 0x0, this["frontConta" + 'cts'] = 0x0, this['backContac' + 'ts'] = 0x0, this["boostVal"] = 0x0, this['frameSmash' + 'ed'] = !0x1, this["impulseMag" + "nitude"] = this["_session"]['version'] > 1.2 ? 0x1 : 0.75) : (this['bg'] = new q7['kx'](), this['addChild'](this['bg']), this['bg']['graphics']["beginFill"](0xffffff, 0.1), this['bg']["graphics"]["drawRect"](0x0, 0x0, nK["iconWidth"], nK['iconHeight']), this['bg']["graphics"]["drawRect"](0x5, 0x5, nK["iconWidth"] - 0xa, nK['iconHeight'] - 0xa), this['bg']["graphics"]["endFill"](), this['bg']["graphics"]["beginFill"](0x0, 0.1), this['bg']["graphics"]["drawRect"](0x5, 0x5, nK["iconWidth"] - 0xa, nK["iconHeight"] - 0xa), this['bg']['graphics']["endFill"]());
    };
    nt["loadBitmap" + 's'] = function () {
      this["loaderBW"] = new q7['kx'](qJ["kxk"]['from'](nK["fileString"] + this["index"] + "_bw.png"));
      this["loaderColo" + 'r'] = new q7['kx'](qJ["kxk"]["from"](nK["fileString"] + this["index"] + ".png"));
      this["loaderBW"]['x'] = this["loaderColo" + 'r']['x'] = 0x5;
      this["loaderBW"]['y'] = this["loaderColo" + 'r']['y'] = 0x5;
      this["addChild"](this['loaderBW']);
      this["addChild"](this["loaderColo" + 'r']);
    };
    nk = nK;
    (ns = [{
      'key': "selected",
      'get': function () {
        return this["_selected"];
      },
      'set': function (nB) {
        if ("kOizH" === "mVYMq") {
          this["promptSpri" + 'te'] = new T(V, h);
          var nl = this["promptSpri" + 'te']["window"];
          this['parent']["addChild"](nl);
          nl["center"]();
          this["promptSpri" + 'te']["addEventLi" + "stener"](C["BUTTON_PRE" + "SSED"], this["promptSpri" + "teClosedNo" + "StateChang" + 'e']);
        } else {
          nB != this["_selected"] && (this["_selected"] = nB, this['_selected'] ? (this['bg']["graphics"]["clear"](), this['bg']["graphics"]['beginFill'](0xffffff, 0x1), this['bg']['graphics']['drawRect'](0x0, 0x0, nK["iconWidth"], nK["iconHeight"]), this['bg']["graphics"]["drawRect"](0x5, 0x5, nK["iconWidth"] - 0xa, nK["iconHeight"] - 0xa), this['bg']['graphics']["endFill"](), this['bg']["graphics"]["beginFill"](0x0, 0.7), this['bg']["graphics"]["drawRect"](0x5, 0x5, nK["iconWidth"] - 0xa, nK["iconHeight"] - 0xa), this['bg']["graphics"]["endFill"](), this['bg']["alpha"] = 0.25, this['glowFilter'] = new q7['qx'](0xffffff, 0x1, 0xa, 0xa, 0x2, 0x3), this['bg']["filters"] = [this["glowFilter"]], this["loaderBW"]["visible"] = !0x1, this['loaderColo' + 'r']["visible"] = !0x0) : (this['bg']["graphics"]["clear"](), this['bg']["graphics"]["beginFill"](0xffffff, 0.1), this['bg']["graphics"]["drawRect"](0x0, 0x0, nK["iconWidth"], nK['iconHeight']), this['bg']["graphics"]["drawRect"](0x5, 0x5, nK['iconWidth'] - 0xa, nK["iconHeight"] - 0xa), this['bg']["graphics"]['endFill'](), this['bg']["graphics"]["beginFill"](0x0, 0.1), this['bg']["graphics"]["drawRect"](0x5, 0x5, nK["iconWidth"] - 0xa, nK["iconHeight"] - 0xa), this['bg']["graphics"]["endFill"](), this['bg']["blendMode"] = q7['Nx']["NORMAL"], this['bg']["filters"] = [], this['bg']['alpha'] = 0x1, this["loaderBW"]['visible'] = !0x0, this["loaderColo" + 'r']["visible"] = !0x1));
        }
      }
    }, {
      'key': "selectable",
      'get': function () {
        return this["_selectabl" + 'e'];
      }
    }, {
      'key': "index",
      'get': function () {
        return this["_index"];
      }
    }]) && function (nB, nu) {
      if ("FIzsO" === "FIzsO") {
        for (var nl = 0x0; nl < nu['length']; nl++) {
          var no = nu[nl];
          no["enumerable"] = no["enumerable"] || !0x1;
          no["configurab" + 'le'] = !0x0;
          "value" in no && (no["writable"] = !0x0);
          Object["defineProp" + 'erty'](nB, qD(no["key"]), no);
        }
      } else {
        return this["_instant"];
      }
    }(nk["prototype"], ns);
    Object["defineProp" + "erty"](nk, "prototype", {
      'writable': !0x1
    });
    return nk;
  }(q7['kx']);
  qS["fileString"] = "char";
  qS["iconWidth"] = 0x32;
  qS["iconHeight"] = 0x32;
  var qd = q2(0xe510);
  function qz(np, nK) {


    qz = Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"]["bind"]() : function (nm, nI) {
      nm["__proto__"] = nI;
      return nm;
    };
    return qz(np, nK);
  }
  var qF = function (np) {

    function nK() {
      if ("VdaIE" !== "VdaIE") {
        P["impulse"] > p['stabImpuls' + 'e'] && 0x2 & K["otherShape"]["m_material"] && !m['sensor'] && (I["stab"] = !0x0, k["character"]['bladeActio' + 'ns']['indexOf'](f) < 0x0 && q1["character"]["bladeActio" + 'ns']["push"](B));
      } else {
        var ns;
        (ns = np["call"](this) || this)["scrollSpee" + 'dX'] = 0x2;
        ns["scrollSpee" + 'dY'] = 0x1;
        ns["scaleInc1"] = 0x0;
        ns['rotInc1'] = 0x0;
        ns["scaleInc2"] = 3.14;
        ns["rotInc2"] = 3.14;
        ns["mobilePlay" + "ButtonMous" + "eDownHandl" + 'er'] = function (nu) {


          "gDHqe" !== 'gDHqe' ? N = f : ns["dispatchEv" + "ent"](new q7['Jh'](nK["CHARACTER_" + 'SELECTED']));
        };
        ns["mobileIcon" + "MouseUpHan" + "dler"] = function (nu) {


          if ("jrDYI" === "eNqtF") {
            var ni = K["instance"];
            ni["removeEven" + "tListener"](m["LOAD_COMPL" + "ETE"], I["loadComple" + 'te']);
            ni["removeEven" + "tListener"](k["GENERIC_ER" + "ROR"], f["loadComple" + 'te']);
            q1["type"] == B['LOAD_COMPL' + "ETE"] || (u["currentLev" + "elDataObje" + 'ct'] = null);
            l["dispatchEv" + "ent"](new o['Jh'](q2["MENU_IDLE"]));
          } else {
            if (nu['target'] instanceof qS) {
              if ("PGvkh" === "PGvkh") {
                var nl = nu["target"];
                ns["selectedIc" + 'on']['selected'] = !0x1;
                nl["selected"] = !0x0;
                ns["selectedIc" + 'on'] = nl;
                ns['loadCharac' + "ter"]();
                qr['m']["instance"]["playSoundI" + "tem"]("SelectChar" + 'acter');
                qR['os']['to'](ns["mobilePlay" + "Button"]["scale"], {
                  'duration': 0.1,
                  'x': 1.2,
                  'y': 1.2,
                  'onComplete': function () {
                    if ("oQABF" !== "oQABF") {
                      f["__proto__"] = T;
                      return V;
                    } else {
                      qR['os']['to'](ns["mobilePlay" + "Button"]["scale"], {
                        'duration': 0.8,
                        'x': 0x1,
                        'y': 0x1,
                        'ease': "back.inOut" + "(2)"
                      });
                    }
                  }
                });
              } else {
                void 0x0 === m && (I = 0x1);
                this["changeY"] = this['speedY'] + this["gravitySpe" + 'ed'];
                this["graphics"]["clear"]();
                this['graphics']["lineStyle"](0x1, this["color"]);
                this["graphics"]['moveTo'](-this["speedX"], -this['changeY']);
                this["graphics"]["lineTo"](0x0, 0x0);
                this['y'] += this["changeY"] * k;
                this['x'] += this["speedX"] * f;
                this["speedX"] *= q1["decayRate"] * B;
                this['speedY'] *= u["decayRate"] * l;
                this["gravitySpe" + 'ed'] += o["gravityInc" + "rement"] * q2;
                return !(E["abs"](this["speedY"]) < 0x1 && R['abs'](this["speedX"]) < 0x1);
              }
            }
          }
        };
        ns["iconMouseO" + "verHandler"] = function (nu) {


          if ('kyHxY' !== "YHWAX") {
            if (nu['target'] instanceof qS) {
              if ('xEPDT' === "xEPDT") {
                var nl = nu["target"];
                if (nl == ns["selectedIc" + 'on'] || 0x0 == nl["selectable"]) {
                  return;
                }
                ns["selectedIc" + 'on']["selected"] = !0x1;
                nl["selected"] = !0x0;
                ns["selectedIc" + 'on'] = nl;
                ns["loadCharac" + "ter"]();
                qr['m']["instance"]["playSoundI" + "tem"]("SelectChar" + "acter");
              } else {
                N["prototype"]["pelvisSmas" + 'h']["call"](this, f);
                this["eject"]();
              }
            }
          } else {
            var nE = I['target']["parent"]["parent"];
            k["selectedLi" + "stItem"] ? (nE != f["selectedLi" + "stItem"] ? (q1["selectedLi" + "stItem"]["selected"] = !0x1, B["selectedLi" + "stItem"] = nE, u['selectedLi' + 'stItem']["selected"] = !0x0) : (l["selectedLi" + "stItem"]["selected"] = !0x1, o["selectedLi" + "stItem"] = null), q2["closing"] || E["closeSelec" + "tion"]()) : (R["selectedLi" + "stItem"] = nE, nE["selected"] = !0x0, W["closing"] || A["openSelect" + 'ion']());
          }
        };
        ns["iconMouseD" + "ownHandler"] = function (nu) {


          if ("CIelQ" !== 'rztTK') {
            if (nu["target"] instanceof qS) {
              if ("aPTDN" !== "fpYnY") {
                var nl = nu["target"];
                if (!nl["selectable"]) {
                  return;
                }
                qr['m']["instance"]["playSoundI" + "tem"]("MenuSelect");
                nl["selected"] = !0x0;
                ns["selectedIc" + 'on'] = nl;
                qh['w']["characterI" + "ndex"] = ns["selectedIc" + 'on']["index"];
                ns["dispatchEv" + "ent"](new q7['Jh'](nK["CHARACTER_" + "SELECTED"]));
              } else {
                if (V['w']["sharedObje" + 'ct']["data"]["brokenBrow" + "serAlertAc" + "cepted"]) {
                  return !0x1;
                }
                var ni = new h["xJt"]({
                  'fontFamily': "Clarendon " + 'LT\x20Std\x20Bol' + 'd',
                  'fontSize': 0x1e,
                  'fill': 0xfd8181
                });
                var nE = C["Z1e"]["measureTex" + 't']("pPqQrR!?ST" + "vwxyz", ni);
                if (nE["height"] < 28.8 || nE["height"] > 0x24 * 1.2) {
                  var nR = new p['rg']("It looks l" + "ike your b" + "rowser is " + "messing wi" + "th text re" + 'ndering.\x0aI' + 'f\x20text\x20loo' + "ks strange" + " or it's s" + "paced too " + "far apart," + " try disab" + "ling priva" + "cy protect" + "ions.", 'alright', "don't show" + " again", !0x0, 0x118, 0x78, 0x4ec44d, 0xfd8181);
                  nR["addEventLi" + "stener"](K['rg']['ANSWER_CHO' + "SEN"], this["brokenBrow" + "serAnswerC" + "hosen"], !0x1, 0x0, !0x0);
                  var nW = nR['window'];
                  this["stage"]["addChild"](nW);
                  nW["center"]();
                  return !0x0;
                }
                return !0x1;
              }
            }
          } else {
            this['levelList'] = [];
            this["list"] = new K['kx']();
            this["listHolder"] = new m['kx']();
            this["listMask"] = new I['kx']();
            this['listMask']["graphics"]["beginFill"](0xff0000);
            this["listMask"]["graphics"]["drawRect"](0x0, 0x0, this["listBg"]["width"] - 0x4, this["listBg"]["height"] - 0x4);
            this['listMask']["graphics"]["endFill"]();
            this["listHolder"]['x'] = this["listMask"]['x'] = this["listBg"]['x'] + 0x2;
            this["listHolder"]['y'] = this["listMask"]['y'] = this['listBg']['y'] + 0x2;
            this["listHolder"]["addChild"](this["list"]);
            this['addChild'](this["listHolder"]);
            this["addChild"](this['listMask']);
            this["listHolder"]["mask"] = this["listMask"];
            var nE = 0x0;
            k["levelDataA" + "rray"]["some"](function (nJ) {
              return !nJ["isPublic"];
            }) && (this['privateSep' + "erator"] = new f['A']('private\x20le' + "vels:"), this['privateSep' + "erator"]['y'] = nE, this["list"]["addChild"](this['privateSep' + "erator"]), nE += this["privateSep" + "erator"]["height"] - 0x2);
            for (var nR = !0x1, nW = 0x0; nW < q1["levelDataA" + "rray"]["length"]; nW++) {
              var nA = E["levelDataA" + "rray"][nW];
              nA["isPublic"] && !nR && (this["publishedS" + "eperator"] = new R['A']("published " + "levels:"), this["publishedS" + 'eperator']['y'] = nE, this["list"]["addChild"](this["publishedS" + "eperator"]), nE += this['publishedS' + "eperator"]["height"] - 0x2, nR = !0x0);
              var nr = new W['oi'](nA["name"]);
              nr['y'] = nE;
              nE += nr["height"] - 0x2;
              this["list"]["addChild"](nr);
              this["levelList"]["push"](nr);
              nr["mouseEnabl" + 'ed'] = !0x0;
              nr["addEventLi" + "stener"](A['Cm']["MOUSE_UP"], this["mouseUpHan" + "dler"]);
            }
            this['scroller'] = new q2['Em'](this["list"], this["listMask"], 0x16);
            this['addChild'](this["scroller"]);
            this["scroller"]['y'] = this["listMask"]['y'];
            this["scroller"]['x'] = this["listMask"]['x'] + this['listMask']["graphics"]['width'] - 0xc;
          }
        };
        ns["scrollSmok" + 'e'] = function (nu) {


          var nl = 0x1e / q7['b0']["maxFPS"];
          ns['smokeSprit' + 'e1']['x'] += 0x2 * ns["scrollSpee" + 'dX'] * nl;
          ns["smokeSprit" + 'e1']['y'] -= ns["scrollSpee" + 'dY'] * nl;
          ns['smokeSprit' + 'e2']['x'] -= ns["scrollSpee" + 'dX'] * nl;
          ns["smokeSprit" + 'e2']['y'] -= ns['scrollSpee' + 'dY'] * nl;
          ns["smokeSprit" + 'e1']['x'] > 0x0 && (ns["smokeSprit" + 'e1']['x'] -= ns["smokeSprit" + 'e1']["width"] / 0x2);
          ns["smokeSprit" + 'e1']['y'] < -ns['smokeSprit' + 'e1']["height"] / 0x2 && (ns["smokeSprit" + 'e1']['y'] += ns["smokeSprit" + 'e1']["height"] / 0x2);
          ns["smokeSprit" + 'e2']['x'] < -ns["smokeSprit" + 'e2']["width"] / 0x2 && (ns["smokeSprit" + 'e2']['x'] += ns['smokeSprit' + 'e2']["width"] / 0x2);
          ns["smokeSprit" + 'e2']['y'] < -ns["smokeSprit" + 'e2']["height"] / 0x2 && (ns['smokeSprit' + 'e2']['y'] += ns["smokeSprit" + 'e2']["height"] / 0x2);
          ns["adjustSpot" + "lights"](nl);
        };
        ns["characterL" + "oaded"] = function () {


          var nu = (0x0, qV['iG'])(qh['w']["characterI" + 'ndex']);
          qh['w']["currentSes" + "sion"] = ns["session"] = new qd['v'](nu);
          ns["session"]["visible"] = !0x1;
          ns["addChild"](ns["session"]);
          ns["session"]["scaleX"] = ns["session"]["scaleY"] = 0x2;
          ns["session"]["create"]();
          ns["session"]["visible"] = !0x0;
        };
        qh['w']["stageSprit" + 'e'] = ns["stage"];
        qh['w']["characterI" + "ndex"] = 0x1;
        var nt = new q7['j7']((0x0, qB['zI'])('GameUI', 'mc_Charact' + "erMenu"));
        nt["convertChi" + "ldren"]();
        ns["addChild"](nt);
        ns["altar"] = nt["altar"];
        ns["spotlight1"] = nt["spotlight1"];
        ns["spotlight2"] = nt["spotlight2"];
        ns["spotlight1"]["blendMode"] = q7['Nx']["ADD"];
        ns["spotlight2"]["blendMode"] = q7['Nx']["ADD"];
        ns["spotlight1"]["alpha"] = 0.3;
        ns["spotlight2"]["alpha"] = 0.3;
        ns["buildStage"]();
        ns['buildMenu'](qh['w']["mobileCont" + "rols"]);
        qr['m']["instance"]["playSoundI" + "tem"]("DrumLong");
        ns["addEventLi" + "stener"](q7['Jh']["ENTER_FRAM" + 'E'], ns['scrollSmok' + 'e']);
        ns["loadCharac" + "ter"]();
        return ns;
      }
    }
    var nm;
    var nI;
    nI = np;
    (nm = nK)["prototype"] = Object["create"](nI["prototype"]);
    nm["prototype"]['constructo' + 'r'] = nm;
    qz(nm, nI);
    var nk = nK["prototype"];
    nk["buildStage"] = function () {
      if ("gjQIq" !== "oOsSE") {
        this['bg'] = new q7['kx']();
        this['bg']["graphics"]["beginFill"](0x33);
        this['bg']["graphics"]["drawRect"](0x0, 0x0, 0x384, 0x1f4);
        this['bg']["graphics"]["endFill"]();
        var ns = q7['pW']["instance"];
        var nt = ns["getTexture"]("smoke1");
        var nB = ns["getTexture"]("smoke2");
        this["smokeSprit" + 'e1'] = new q7['kx']();
        this['tileSmoke'](this["smokeSprit" + 'e1'], nt, 0x1);
        this["smokeSprit" + 'e2'] = new q7['kx']();
        this["tileSmoke"](this["smokeSprit" + 'e2'], nB, 0.75);
        this["smokeSprit" + 'e1']["alpha"] = 0.5;
        this["smokeSprit" + 'e2']["alpha"] = 0.5;
        this["addChildAt"](this["altar"], 0x0);
        this["addChildAt"](this["spotlight2"], 0x0);
        this["addChildAt"](this["spotlight1"], 0x0);
        this["addChildAt"](this["smokeSprit" + 'e2'], 0x0);
        this["addChildAt"](this["smokeSprit" + 'e1'], 0x0);
        this["addChildAt"](this['bg'], 0x0);
      } else {
        this["setJoint"](this["neckJoint"], 0x0, 0x2);
        this["setJoint"](this["elbowJoint" + '1'], 1.04, 0xf);
        this["setJoint"](this['elbowJoint' + '2'], 1.04, 0xf);
      }
    };
    nk["tileSmoke"] = function (ns, nt, nB) {
      if ("LesQA" !== "LesQA") {
        if (Z['ejected'] || y["dead"]) {
          c["removeActi" + 'on'](X["reAttachin" + 'g']);
        } else {
          var ni = 0x0;
          var nE = qm["_session"]["m_world"];
          if (qI['torsoHand1'] || qk["elbowJoint" + '1']['broken'] || qs["shoulderJo" + "int1"]['broken']) {
            ni += 0x1;
          } else {
            var nR = qY["lowerArm1B" + "ody"]["GetWorldPo" + "int"](new qv['RM'](0x0, qL["lowerArm1S" + "hape"]["GetVertice" + 's']()[0x2]['y']));
            var nW = qU["guy"]["chestBody"]["GetWorldPo" + "int"](qO["torsoAncho" + "rPoint"]);
            qG['abs'](nR['x'] - nW['x']) < qQ["reAttachDi" + "stance"] && n0["abs"](nR['y'] - nW['y']) < n1["reAttachDi" + "stance"] && (n2["torsoHand1"] = nE["CreateJoin" + 't'](n3["torsoHand1" + "JointDef"]), n4["lowerArm1M" + 'C']["hand"]["gotoAndSto" + 'p'](0x1), ni += 0x1);
          }
          qD["torsoHand2"] || qg["elbowJoint" + '2']["broken"] || qS['shoulderJo' + "int2"]["broken"] ? ni += 0x1 : (nR = qd["lowerArm2B" + "ody"]["GetWorldPo" + 'int'](new qz['RM'](0x0, qF["lowerArm2S" + "hape"]['GetVertice' + 's']()[0x2]['y'])), nW = qM['guy']["chestBody"]["GetWorldPo" + 'int'](qH["torsoAncho" + "rPoint"]), qb["abs"](nR['x'] - nW['x']) < qZ["reAttachDi" + "stance"] && qy['abs'](nR['y'] - nW['y']) < qc["reAttachDi" + "stance"] && (qX["torsoHand2"] = nE["CreateJoin" + 't'](qx["torsoHand2" + "JointDef"]), qw["lowerArm2M" + 'C']["hand"]["gotoAndSto" + 'p'](0x1), ni += 0x1));
          ni >= 0x2 && qe["removeActi" + 'on'](qa["reAttachin" + 'g']);
        }
      } else {
        void 0x0 === nB && (nB = 0x1);
        for (var nu = 0x0; nu < 0x4; nu++) {
          var nl = new q7['kx']();
          nl['alpha'] = nB;
          nl['pixiSprite']["texture"] = nt["pixiTextur" + 'e'];
          nl['x'] = Math["floor"](nu % 0x2) * nt["pixiTextur" + 'e']["width"];
          nl['y'] = Math["floor"](nu / 0x2) * nt["pixiTextur" + 'e']["height"];
          ns["addChild"](nl);
        }
      }
    };
    nk["buildMenu"] = function (ns) {
      if ("RlCif" !== "fhcRL") {
        this["iconHolder"] = new q7['kx']();
        this["iconHolder"]['x'] = 0x1f4;
        this["iconHolder"]['y'] = 0x78;
        this['addChild'](this["iconHolder"]);
        this["icons"] = [];
        for (var nt = ns ? 0xb : 0x19, nB = 0x0; nB < nt; nB++) {
          var nu = new qS(nB + 0x1);
          this["iconHolder"]["addChild"](nu);
          nu['x'] = nB % 0x5 * 0x3c;
          nu['y'] = 0x3c * Math["floor"](0.2 * nB);
          this["icons"]["push"](nu);
          ns ? nu["addEventLi" + "stener"](q7['Cm']['MOUSE_UP'], this["mobileIcon" + 'MouseUpHan' + "dler"]) : nB < 0xb && (nu["addEventLi" + "stener"](q7['Cm']["MOUSE_OVER"], this["iconMouseO" + 'verHandler']), nu['addEventLi' + "stener"](q7['Cm']['MOUSE_DOWN'], this["iconMouseD" + "ownHandler"]));
        }
        var nl = this["icons"][0x0];
        nl["selected"] = !0x0;
        this["selectedIc" + 'on'] = nl;
        if (ns) {
          if ("QrlKJ" !== "MlxSD") {
            var no = new q7['lk']("Clarendon " + 'LT\x20Std\x20Bol' + 'd', 0x4b, 0xfd8181, null, null, null, null, null, q7['MA']["CENTER"]);
            var ni = new q7['A_']();
            ni['defaultTex' + "tFormat"] = no;
            ni["htmlText"] = "PLAY!";
            this["addChild"](ni);
            this["mobilePlay" + "Button"] = ni;
            ni['x'] = 0x28a;
            ni['y'] = 0x14f;
            ni['pixiText']["anchor"]["set"](0.5);
            ni["scale"]["set"](0x0);
            var nE = new q7['GD'](0x3, 0x5a, 0x0, 0x1, 0x5, 0x5, 0.25, 0x1);
            ni["filters"] = [nE];
            ni["addEventLi" + "stener"](q7['Cm']["MOUSE_DOWN"], this["mobilePlay" + "ButtonMous" + 'eDownHandl' + 'er']);
            qR['os']['to'](this['mobilePlay' + "Button"]["scale"], {
              'duration': 0x2,
              'x': 0x1,
              'y': 0x1,
              'ease': qW['Oq']["easeOut"],
              'delay': 0.3
            });
          } else {
            var nW = qz[q8];
            nW["enumerable"] = nW["enumerable"] || !0x1;
            nW["configurab" + 'le'] = !0x0;
            "value" in nW && (nW["writable"] = !0x0);
            qI["defineProp" + "erty"](qS, qA(nW["key"]), nW);
          }
        }
      } else {
        m["loginPromp" + 't']['removeEven' + "tListener"](I['Um']['BUTTON_PRE' + "SSED"], k["loginPromp" + "tAccepted"]);
        f["loginPromp" + 't'] = null;
        q1["resumeThat" + "Shit"]();
        B['autoSaveTi' + "mer"] = new u['M4'](l["autoSaveIn" + "terval"], 0x0);
        o["autoSaveTi" + "mer"]["addEventLi" + "stener"](q2['iJ']['TIMER'], E["timerHandl" + 'er']);
        R["autoSaveTi" + "mer"]["start"]();
      }
    };
    nk["adjustSpot" + 'lights'] = function (ns) {
      void 0x0 === ns && (ns = 0x1);
      this["spotlight1"]["scaleY"] = 0.25 * Math["sin"](this['scaleInc1']) + 1.25;
      this["scaleInc1"] += 0.01 * ns;
      this['spotlight1']["rotation"] = 0xf * Math["sin"](this["rotInc1"]) + 0xa;
      this["rotInc1"] += 0.04 * ns;
      this["spotlight2"]["scaleY"] = 0.25 * Math["cos"](this["scaleInc2"]) + 1.25;
      this["scaleInc2"] -= 0.012 * ns;
      this["spotlight2"]["rotation"] = 0xf * Math["cos"](this["rotInc2"]) - 0xa;
      this["rotInc2"] -= 0.04 * ns;
    };
    nk["loadCharac" + "ter"] = function () {
      if ("PCcQu" === 'PCcQu') {
        qh['w']["characterI" + "ndex"] = this["selectedIc" + 'on']["index"];
        this['killSessio' + "nIfExists"]();
        this["characterL" + "oaded"]();
      } else {
        h = C["setPrototy" + "peOf"] ? j["setPrototy" + 'peOf']["bind"]() : function (nt, nB) {
          nt['__proto__'] = nB;
          return nt;
        };
        return P(p, K);
      }
    };
    nk["killSessio" + "nIfExists"] = function () {
      this["session"] && (this['session']["die"](), this["session"]["destroy"](), this["removeChil" + 'd'](this["session"]), qh['w']["currentSes" + 'sion'] = this["session"] = null);
    };
    nk["die"] = function () {

      if ("igmiQ" !== "tOqKH") {
        var ns = this;
        this["killSessio" + "nIfExists"]();
        this["icons"]["forEach"](function (nt, nB) {
          nt["removeEven" + "tListener"](q7['Cm']["MOUSE_OVER"], ns["iconMouseO" + "verHandler"]);
          nt["removeEven" + "tListener"](q7['Cm']['MOUSE_DOWN'], ns['iconMouseD' + "ownHandler"]);
          nt["removeEven" + "tListener"](q7['Cm']["MOUSE_UP"], ns["mobileIcon" + "MouseUpHan" + "dler"]);
        });
        qh['w']["mobileCont" + "rols"] && (qR['os']["killTweens" + 'Of'](this["mobilePlay" + "Button"]), this["mobilePlay" + "Button"]["removeEven" + "tListener"](q7['Cm']["MOUSE_DOWN"], this["mobilePlay" + 'ButtonMous' + "eDownHandl" + 'er']), this["mobilePlay" + 'Button']["destroy"]());
        this["removeEven" + "tListener"](q7['Jh']["ENTER_FRAM" + 'E'], this["scrollSmok" + 'e']);
      } else {
        this["borderCove" + 'r'] = new k['kx']();
        var nB = new f();
        var nu = new q1();
        this["borderCove" + 'r']["graphics"]['beginFill'](0x0, 0x1);
        nu["push"](-0x1f4, -0x1f4);
        nu["push"](0x578, -0x1f4);
        nu['push'](0x578, 0x3e8);
        nu['push'](-0x1f4, 0x3e8);
        nu['push'](-0x1f4, -0x1f4);
        nB["push"](B['e']["MOVE_TO"]);
        nB["push"](u['e']["LINE_TO"]);
        nB["push"](l['e']["LINE_TO"]);
        nB["push"](o['e']["LINE_TO"]);
        nB['push'](q2['e']['LINE_TO']);
        nu["push"](0x0, 0x0);
        nu['push'](0x0, 0x1f4);
        nu['push'](0x384, 0x1f4);
        nu["push"](0x384, 0x0);
        nu["push"](0x0, 0x0);
        nB["push"](E['e']["MOVE_TO"]);
        nB["push"](R['e']["LINE_TO"]);
        nB["push"](W['e']["LINE_TO"]);
        nB["push"](A['e']["LINE_TO"]);
        nB['push'](r['e']["LINE_TO"]);
        this["borderCove" + 'r']["graphics"]["drawPath"](nB, nu, J['tl']["NON_ZERO"]);
        this['borderCove' + 'r']["graphics"]["endFill"]();
      }
    };
    return nK;
  }(q7['kx']);
  function qM() {

    var np;
    var nK;
    var nm = "function" == typeof Symbol ? Symbol : {};
    var nI = nm["iterator"] || "@@iterator";
    var nk = nm["toStringTa" + 'g'] || "@@toString" + "Tag";
    function ns(nR, nW, nA, nr) {

      var nJ = nW && nW["prototype"] instanceof nB ? nW : nB;
      var nD = Object['create'](nJ['prototype']);
      qH(nD, "_invoke", function (ng, nS, nd) {

        var nz;
        var nF;
        var nM;
        var nH = 0x0;
        var nb = nd || [];
        var nZ = !0x1;
        var ny = {
          'p': 0x0,
          'n': 0x0,
          'v': np,
          'a': nc,
          'f': nc["bind"](np, 0x4),
          'd': function (nX, nx) {
            nz = nX;
            nF = 0x0;
            nM = np;
            ny['n'] = nx;
            return nt;
          }
        };
        function nc(nX, nx) {
          if ("xvPJB" === "xvPJB") {
            nF = nX;
            nM = nx;
            nK = 0x0;
            for (; !nZ && nH && !nw && nK < nb["length"]; nK++) {
              var nw;
              var na = nb[nK];
              var nY = ny['p'];
              var nv = na[0x2];
              nX > 0x3 ? (nw = nv === nx) && (nM = na[(nF = na[0x4]) ? 0x5 : (nF = 0x3, 0x3)], na[0x4] = na[0x5] = np) : na[0x0] <= nY && ((nw = nX < 0x2 && nY < na[0x1]) ? (nF = 0x0, ny['v'] = nx, ny['n'] = na[0x1]) : nY < nv && (nw = nX < 0x3 || na[0x0] > nx || nx > nv) && (na[0x4] = nX, na[0x5] = nx, ny['n'] = nv, nF = 0x0));
            }
            if (nw || nX > 0x1) {
              return nt;
            }
            nZ = !0x0;
            throw nx;
          } else {
            void 0x0 === f && (T = null);
            this["buttonSpri" + 'te']["removeEven" + "tListener"](V['Cm']['ROLL_OUT'], this["mouseOutHa" + 'ndlerBind']);
            this["triggering" + "Body"] = null;
            this['session']["isReplay"] || this["session"]['replayData']["addMouseEn" + "try"](this["session"]['iteration'], this["triggerInd" + 'ex'], 0x1);
          }
        }
        return function (nX, nx, nw) {

          if ("pIEte" === "pIEte") {
            if (nH > 0x1) {
              throw TypeError('Generator\x20' + "is already" + " running");
            }
            nZ && 0x1 === nx && nc(nx, nw);
            nF = nx;
            nM = nw;
            for (; (nK = nF < 0x2 ? np : nM) || !nZ;) {
              if ("frUHI" === "frUHI") {
                nz || (nF ? nF < 0x3 ? (nF > 0x1 && (ny['n'] = -0x1), nc(nF, nM)) : ny['n'] = nM : ny['v'] = nM);
                try {
                  if ("qsMvV" !== "qsMvV") {
                    j['w']["bloodSetti" + 'ng'] = P["value"];
                    p['w']['sharedObje' + 'ct']["data"]["bloodSetti" + 'ng'] = K['w']["bloodSetti" + 'ng'];
                    m['J']["trackEvent"](I['J']["OPTIONS"], k['J']['SET_BLOOD'], 'value_' + nS["value"]);
                  } else {
                    nH = 0x2;
                    if (nz) {
                      nF || (nX = "next");
                      if (nK = nz[nX]) {
                        if (!(nK = nK['call'](nz, nM))) {
                          throw TypeError("iterator r" + "esult is n" + "ot an obje" + 'ct');
                        }
                        if (!nK["done"]) {
                          return nK;
                        }
                        nM = nK['value'];
                        nF < 0x2 && (nF = 0x0);
                      } else {
                        0x1 === nF && (nK = nz['return']) && nK["call"](nz);
                        nF < 0x2 && (nM = TypeError("The iterat" + "or does no" + "t provide " + "a '" + nX + '\x27\x20method'), nF = 0x1);
                      }
                      nz = np;
                    } else {
                      if ((nK = (nZ = ny['n'] < 0x0) ? nM : ng["call"](nS, ny)) !== nt) {
                        break;
                      }
                    }
                  }
                } catch (nY) {
                  nz = np;
                  nF = 0x1;
                  nM = nY;
                } finally {
                  if ("lmuiG" !== "lmuiG") {
                    this["adjustment" + "Filter"] && V['os']["killTweens" + 'Of'](this["adjustment" + "Filter"]);
                    this["adjustment" + "Filter"] = new h['MR']({
                      'brightness': 0x4
                    });
                    var nL = this['buttons']["slice"]();
                    nL["push"](C['pauseBtn']);
                    for (var nU = 0x0; nU < nL["length"]; nU++) {
                      nL[nU]["filters"] = [this["adjustment" + 'Filter']];
                    }
                    j['os']['to'](this["adjustment" + 'Filter'], {
                      'duration': 0x2,
                      'brightness': 0x1,
                      'ease': P['MI']["easeInOut"]
                    });
                  } else {
                    nH = 0x1;
                  }
                }
              } else {
                m['os']["killTweens" + 'Of'](this);
                this["removeEven" + "tListener"](I['Cm']["ROLL_OVER"], this["rollOverHa" + "ndler"]);
                this["removeEven" + "tListener"](k['Cm']["ROLL_OUT"], this["rollOutHan" + "dler"]);
                this["levelOptio" + "nsMenu"] && this["closeOptio" + "nsMenu"]();
                this['testButton']['removeEven' + "tListener"](nS['Cm']["CLICK"], this["testLevel"]);
                this['optionsBut' + "ton"]["removeEven" + "tListener"](q1['Cm']["CLICK"], this["openOption" + "sMenu"]);
                this["saveButton"]["removeEven" + "tListener"](B['Cm']["CLICK"], this["openSaveMe" + 'nu']);
                this["loadButton"]["removeEven" + "tListener"](u['Cm']["CLICK"], this["openLoadMe" + 'nu']);
                this["clearButto" + 'n']["removeEven" + 'tListener'](l['Cm']['CLICK'], this["clearPress"]);
                this["mainMenuBu" + "tton"]["removeEven" + "tListener"](nr['Cm']["CLICK"], this["mainMenuPr" + "ess"]);
                this["helpCheck"]["removeEven" + "tListener"](ng['O']["VALUE_CHAN" + 'GE'], this["helpToggle"]);
                E['W']["instance"]["removeEven" + "tListener"](R['p']["WINDOW_CLO" + "SED"], this["helpClosed"]);
                this["testButton"]["die"]();
                this['optionsBut' + "ton"]["die"]();
                this["saveButton"]["die"]();
                this["loadButton"]["die"]();
                this["clearButto" + 'n']["die"]();
                this['mainMenuBu' + 'tton']["die"]();
                this['helpCheck']["die"]();
                this["debugCheck"]['die']();
                this["hideArmsCh" + "eck"]["die"]();
                this["fullScreen" + 'Check']["die"]();
                this["menuText"]['destroy']();
              }
            }
            return {
              'value': nK,
              'done': nZ
            };
          } else {
            h = C["setPrototy" + 'peOf'] ? j["setPrototy" + "peOf"]["bind"]() : function (nO, nG) {
              nO["__proto__"] = nG;
              return nO;
            };
            return P(p, K);
          }
        };
      }(nR, nA, nr), !0x0);
      return nD;
    }
    var nt = {};
    function nB() {}
    function nu() {}
    function nl() {}
    nK = Object["getPrototy" + "peOf"];
    var no = [][nI] ? nK(nK([][nI]())) : (qH(nK = {}, nI, function () {
      return this;
    }), nK);
    var ni = nl["prototype"] = nB["prototype"] = Object["create"](no);
    function nE(nR) {
      Object["setPrototy" + "peOf"] ? Object['setPrototy' + 'peOf'](nR, nl) : (nR["__proto__"] = nl, qH(nR, nk, "GeneratorF" + 'unction'));
      nR['prototype'] = Object["create"](ni);
      return nR;
    }
    nu["prototype"] = nl;
    qH(ni, "constructo" + 'r', nl);
    qH(nl, "constructo" + 'r', nu);
    nu['displayNam' + 'e'] = "GeneratorF" + "unction";
    qH(nl, nk, "GeneratorF" + "unction");
    qH(ni);
    qH(ni, nk, 'Generator');
    qH(ni, nI, function () {
      if ("FHNfQ" !== "FHNfQ") {
        var nW = qT[qR](qz);
        var nA = nW["value"];
      } else {
        return this;
      }
    });
    qH(ni, "toString", function () {
      return "[object Ge" + "nerator]";
    });
    return (qM = function () {
      return {
        'w': ns,
        'm': nE
      };
    })();
  }
  function qH(np, nK, nm, nI) {


    if ("uDGZb" !== "uDGZb") {
      void 0x0 === j && (P = !0x0);
      void 0x0 === p && (K = !0x0);
      m["prototype"]['torsoBreak']["call"](this, I, k, f);
      this["eject"]();
    } else {
      var nk = Object["defineProp" + "erty"];
      try {
        "ixVUG" !== 'WVLtw' ? nk({}, '', {}) : (this["setJoint"](this["neckJoint"], 0.5, 0x2), this["setJoint"](this["hipJoint1"], 2.8, 0x5), this["setJoint"](this["hipJoint2"], 1.75, 2.5), this["setJoint"](this["kneeJoint1"], 0.5, 0xa), this['setJoint'](this["kneeJoint2"], 0.2, 0xa), this['setJoint'](this["shoulderJo" + "int1"], 2.5, 0xa), this["setJoint"](this["shoulderJo" + "int2"], 0x4, 0xa), this["setJoint"](this["elbowJoint" + '1'], 0x2, 0xf), this["setJoint"](this["elbowJoint" + '2'], 2.5, 0xf));
      } catch (nB) {
        nk = 0x0;
      }
      qH = function (nu, nl, no, ni) {
        if ("fTqZL" === "fTqZL") {
          function nE(nR, nW) {
            qH(nu, nR, function (nA) {
              if ("DOBRR" === "QhZQO") {
                this["_window"] = new q6['p8'](!0x1, this, !0x1);
              } else {
                return this["_invoke"](nR, nW, nA);
              }
            });
          }
          nl ? nk ? nk(nu, nl, {
            'value': no,
            'enumerable': !ni,
            'configurable': !ni,
            'writable': !ni
          }) : nu[nl] = no : (nE("next", 0x0), nE("throw", 0x1), nE("return", 0x2));
        } else {
          var nW;
          (nW = n["call"](this) || this)["artStatusH" + "andlerBind"] = nW["artStatusH" + "andler"]["bind"](nW);
          nW["shapeStatu" + "sHandlerBi" + 'nd'] = nW["shapeStatu" + 'sHandler']["bind"](nW);
          nW["isGroupCan" + "vas"] = !0x1;
          nW["init"]();
          return nW;
        }
      };
      qH(np, nK, nm, nI);
    }
  }
  function qb(np, nK, nm, nI, nk, ns, nt) {


    if ("uYIed" === "uYIed") {
      try {
        if ("Hdtnm" !== "wcldT") {
          var nB = np[ns](nt);
          var nu = nB["value"];
        } else {
          var no = "MowerImpac" + 't' + k['ceil'](0x3 * f["random"]());
          q1["mowerImpac" + "tSound"] = B['m']["instance"]["playAreaSo" + "undInstanc" + 'e'](no, u);
          var ni = l["mowerBody"]["GetLocalPo" + "int"](o)['x'];
          var nE = q2["bladeShape"]["GetVertice" + 's']()[0x2]['y'];
          var nR = E["mowerBody"]["GetWorldPo" + "int"](new R['RM'](ni, nE));
          W["session"]["particleCo" + "ntroller"]['createSpar' + 'kBurstPoin' + 't'](nR, new A['RM'](0x5 * r, 0x5 * J), 0x5, 0x32, 0x14);
        }
      } catch (no) {
        if ("jbJFR" === "UMuGf") {
          this["backWheelM" + 'C']["gotoAndSto" + 'p'](0x2);
          this["backWheelM" + 'C']['inner']['spokes']["visible"] = !0x1;
          this["backWheelM" + 'C']["inner"]["broken"]["visible"] = !0x0;
          this['contactImp' + 'ulseDict']["delete"](this["backWheelS" + "hape"]);
          this["_session"]["contactLis" + "tener"]['deleteList' + "ener"](p['fI']["RESULT"], this["backWheelS" + "hape"]);
          this['_session']["contactLis" + "tener"]["deleteList" + "ener"](K['fI']["ADD"], this["backWheelS" + "hape"]);
          this["_session"]["contactLis" + "tener"]["deleteList" + 'ener'](m['fI']["REMOVE"], this["backWheelS" + "hape"]);
          var nE = this["backWheelB" + "ody"]["GetShapeLi" + 'st']();
          this["backWheelB" + "ody"]["DestroySha" + 'pe'](nE);
          var nR = new I['m2']();
          nR["density"] = 0x2;
          nR["friction"] = 0.3;
          nR["restitutio" + 'n'] = 0.1;
          this["ejected"] ? nR["filter"] = this["zeroFilter"] : nR["filter"]['categoryBi' + 'ts'] = 0x201;
          var nW = k["atan2"](f['y'], q1['x']) - this['backWheelB' + "ody"]["GetAngle"]();
          this["backWheelM" + 'C']["inner"]["broken"]['rotation'] = nW * B["oneEightyO" + "verPI"];
          nR["SetAsOrien" + "tedBox"](0x19 / this["character_" + "scale"], 0x32 / this["character_" + "scale"], new u['RM'](0x0, 0x0), nW);
          this["backWheelB" + "ody"]["CreateShap" + 'e'](nR);
          l['m']["instance"]["playAreaSo" + "undInstanc" + 'e']("BikeTireSm" + "ash1", this["backWheelB" + "ody"]);
        } else {
          return void nm(no);
        }
      }
      nB['done'] ? nK(nu) : Promise["resolve"](nu)["then"](nI, nk);
    } else {
      N["addChild"](f);
    }
  }
  qF['CHARACTER_' + "SELECTED"] = "characters" + "elected";
  var qZ = function () {

    function np(nm, nI) {
      this["parent"] = nm;
      this["loadContai" + "ner"] = new q7['Nw']();
      var nk = new q7['kx']();
      nk["graphics"]["beginFill"](0x3d88c7);
      nk["graphics"]["drawRect"](-0x1c2, -0xfa, 0x384, 0x1f4);
      this["loadContai" + "ner"]['x'] = 0x1c2;
      this['loadContai' + "ner"]['y'] = 0xfa;
      this["loadContai" + "ner"]["addChild"](nk);
      this["text"] = new qJ["EYj"](nI, {
        'fill': 0xffffff,
        'fontSize': 0x2e
      });
      this["text"]["anchor"]['set'](0.5);
      nk["_pixiSprit" + 'e']["addChild"](this["text"]);
      this["showing"] = !0x1;
      this['loadContai' + 'ner']["alpha"] = 0x0;
      this["cameraMode" + "Enabled"] = void 0x0 !== window['HW_SETTING' + 'S']["cameraMode"];
    }
    var nK = np["prototype"];
    nK["show"] = function () {
      var nm;
      nm = qM()['m'](function nk(ns) {
        if ("TYyUt" === "ubbLi") {
          void 0x0 === h && (C = !0x0);
          j["prototype"]["hipBreak2"]["call"](this, P, p);
          this["upperLeg4B" + "ody"] && this['antiGravAr' + "ray"]["push"](this['upperLeg4B' + "ody"]);
          this["ejected"] || this["wheelFoot2" + 'Joint'] && (this["_session"]["m_world"]["DestroyJoi" + 'nt'](this["wheelFoot2" + "Joint"]), this["wheelFoot2" + "Joint"] = null, this["_session"]["contactLis" + "tener"]["registerLi" + "stener"](K['fI']["RESULT"], this["lowerLeg2S" + "hape"], this["contactRes" + "ultHandler"]), this["checkLegsO" + 'k']());
        } else {
          var nt = this;
          return qM()['w'](function (nu) {


            if ("hIEQV" !== "vNnCX") {
              for (;;) {
                switch (nu['n']) {
                  case 0x0:
                    if (!this["cameraMode" + "Enabled"]) {
                      if ("AQWlh" !== "AQWlh") {
                        return this["dropMenu"]["value"];
                      } else {
                        nu['n'] = 0x1;
                        break;
                      }
                    }
                    return nu['a'](0x2, new Promise(function (no) {
                      ns && ns();
                      no();
                    }));
                  case 0x1:
                    this["showing"] = !0x0;
                    qR['os']["killTweens" + 'Of'](this["loadContai" + "ner"]);
                    return nu['a'](0x2, new Promise(function (no) {
                      nt["parent"]["stage"]["addChild"](nt['loadContai' + "ner"]);
                      nt["loadContai" + 'ner']["alpha"] = 0x1;
                      setTimeout(function () {
                        ns && ns();
                        no();
                      }, 0xa);
                    }));
                }
              }
            } else {
              this["userData"]["owner"] = n;
            }
          }, nk, this);
        }
      });
      function nI() {
        var ns = this;
        var nt = arguments;
        return new Promise(function (nB, nu) {
          var nl = nm["apply"](ns, nt);
          function no(nE) {

            qb(nl, nB, nu, no, ni, "next", nE);
          }
          function ni(nE) {

            qb(nl, nB, nu, no, ni, "throw", nE);
          }
          no(void 0x0);
        });
      }
      return function (ns) {
        return nI["apply"](this, arguments);
      };
    }();
    nK["hide"] = function () {

      if ("iUMrw" !== "tCQpR") {
        var nm = this;
        return this["cameraMode" + "Enabled"] ? new Promise(function (nI) {
          "UwJqq" === "uJgwQ" ? (A["prototype"]["checkRepla" + "yData"]['call'](this, r, J), this["daughter"]['dead'] || (this["daughter"]["userVehicl" + 'e'] ? this["daughter"]["userVehicl" + 'e']["operateRep" + "layData"](this["_session"]["iteration"], D) : ('1' == g["charAt"](0x0) ? '1' == S["charAt"](0x1) ? this["daughter"]['leftAndRig' + "htActions"]() : this["daughter"]["leftPresse" + "dActions"]() : '1' == d["charAt"](0x1) ? this["daughter"]["rightPress" + "edActions"]() : this["daughter"]["leftAndRig" + "htActions"](), '1' == z["charAt"](0x2) ? '1' == F["charAt"](0x3) ? this["daughter"]['upAndDownA' + 'ctions']() : this["daughter"]["upPressedA" + 'ctions']() : '1' == M["charAt"](0x3) ? this["daughter"]["downPresse" + "dActions"]() : this["daughter"]["upAndDownA" + "ctions"](), '1' == H['charAt'](0x4) ? this["daughter"]["spacePress" + "edActions"]() : this["daughter"]["spaceNullA" + "ctions"](), '1' == b["charAt"](0x5) ? this["daughter"]["shiftPress" + "edActions"]() : this["daughter"]["shiftNullA" + "ctions"](), '1' == Z["charAt"](0x6) ? this["daughter"]["ctrlPresse" + 'dActions']() : this["daughter"]["ctrlNullAc" + 'tions'](), '1' == y["charAt"](0x7) ? this["daughter"]["zPressedAc" + "tions"]() : this["daughter"]["zNullActio" + 'ns']())), this['son']["dead"] || (this['son']['userVehicl' + 'e'] ? this["son"]["userVehicl" + 'e']["operateRep" + "layData"](this["_session"]["iteration"], c) : ('1' == X["charAt"](0x0) ? '1' == x["charAt"](0x1) ? this["son"]["leftAndRig" + "htActions"]() : this["son"]["leftPresse" + "dActions"]() : '1' == w["charAt"](0x1) ? this["son"]["rightPress" + 'edActions']() : this["son"]["leftAndRig" + 'htActions'](), '1' == q0['charAt'](0x2) ? '1' == a['charAt'](0x3) ? this["son"]['upAndDownA' + "ctions"]() : this["son"]["upPressedA" + "ctions"]() : '1' == Y["charAt"](0x3) ? this["son"]['downPresse' + "dActions"]() : this["son"]["upAndDownA" + "ctions"](), '1' == v["charAt"](0x4) ? this["son"]["spacePress" + "edActions"]() : this["son"]["spaceNullA" + "ctions"](), '1' == L["charAt"](0x5) ? this["son"]["shiftPress" + "edActions"]() : this['son']['shiftNullA' + "ctions"](), '1' == U["charAt"](0x6) ? this["son"]['ctrlPresse' + "dActions"]() : this["son"]["ctrlNullAc" + "tions"](), '1' == O["charAt"](0x7) ? this["son"]["zPressedAc" + "tions"]() : this['son']["zNullActio" + 'ns']()))) : nI();
        }) : (this['showing'] = !0x1, qR['os']["killTweens" + 'Of'](this["loadContai" + 'ner']), new Promise(function (nI) {

          'IauPK' === "fQHvC" ? (n["prototype"]["actions"]["call"](this), this["kid"]['actions']()) : qR['os']['to'](nm['loadContai' + "ner"], {
            'duration': 0x0,
            'alpha': 0x0,
            'onComplete': function () {
              nm["parent"]["stage"]["removeChil" + 'd'](nm["loadContai" + "ner"]);
              nI();
            }
          });
        }));
      } else {
        var nk;
        this["trackVehic" + "leSmashed"]();
        this["eject"]();
        this['contactRes' + "ultBuffer"]["delete"](this["frameBotto" + "mShape"]);
        this["contactRes" + "ultBuffer"]["delete"](this["frameLeftS" + "hape"]);
        this["contactRes" + "ultBuffer"]["delete"](this["frameRight" + "Shape"]);
        this["frontWheel" + "Shape"]["SetFilterD" + "ata"](this['zeroFilter']);
        this["backWheelS" + "hape"]["SetFilterD" + "ata"](this["zeroFilter"]);
        this["_session"]["contactLis" + "tener"]["deleteList" + 'ener'](E['fI']["RESULT"], this["frameBotto" + "mShape"]);
        this["_session"]["contactLis" + "tener"]['deleteList' + "ener"](R['fI']["RESULT"], this["frameLeftS" + 'hape']);
        this["_session"]["contactLis" + "tener"]['deleteList' + "ener"](W['fI']["RESULT"], this['frameRight' + "Shape"]);
        this['_session']["contactLis" + "tener"]["deleteList" + "ener"](A['fI']["ADD"], this['frontWheel' + "Shape"]);
        this["_session"]["contactLis" + "tener"]["deleteList" + "ener"](r['fI']["ADD"], this["backWheelS" + 'hape']);
        this["frontDongl" + "eBody"] && this["removeFron" + "tDongle"]();
        this["backDongle" + "Body"] && this["removeBack" + "Dongle"]();
        var ns = this["frameBody"]["GetPositio" + 'n']();
        var nt = this["frameBody"]["GetAngle"]();
        var nB = this['frameBody']["GetAngular" + "Velocity"]();
        var nu = new J['gv']();
        nu["position"] = ns;
        nu["angle"] = nt;
        var nl = new D['m2']();
        nl["density"] = 1.5;
        nl["friction"] = 0.3;
        nl["restitutio" + 'n'] = 0.1;
        nl['filter']["categoryBi" + 'ts'] = 0x202;
        var no = [];
        var ni = this["_session"]["m_world"]["CreateBody"](nu);
        no['push'](ni);
        var nE = this["shapeGuide"]["cartBottom" + "Shape"];
        nk = new g['RM'](this['_startX'] + nE['x'] / this['character_' + "scale"], this["_startY"] + nE['y'] / this["character_" + "scale"]);
        var nR = nE["rotation"] / S["oneEightyO" + "verPI"];
        nl["SetAsOrien" + "tedBox"](0x5 * nE["scaleX"] / this["character_" + 'scale'], 0x5 * nE["scaleY"] / this["character_" + "scale"], nk, nR);
        ni["CreateShap" + 'e'](nl);
        nR = (nE = this["shapeGuide"]["cartLeftSh" + "ape"])["rotation"] / d["oneEightyO" + 'verPI'];
        nk = new z['RM'](this["_startX"] + nE['x'] / this["character_" + 'scale'], this['_startY'] + nE['y'] / this['character_' + "scale"]);
        nl["SetAsOrien" + "tedBox"](0x5 * nE['scaleX'] / this["character_" + "scale"], 0x5 * nE["scaleY"] / this["character_" + "scale"], nk, nR);
        ni["CreateShap" + 'e'](nl);
        nR = (nE = this["shapeGuide"]["cartRightS" + "hape"])["rotation"] / F["oneEightyO" + "verPI"];
        nk = new M['RM'](this['_startX'] + nE['x'] / this["character_" + "scale"], this["_startY"] + nE['y'] / this['character_' + "scale"]);
        nl['SetAsOrien' + "tedBox"](0x5 * nE["scaleX"] / this["character_" + "scale"], 0x5 * nE["scaleY"] / this["character_" + "scale"], nk, nR);
        ni['CreateShap' + 'e'](nl);
        ni["SetMassFro" + 'mShapes']();
        ni["SetLinearV" + "elocity"](this["frameBody"]["GetLinearV" + "elocityFro" + "mLocalPoin" + 't'](ni["GetLocalCe" + "nter"]()));
        ni['SetAngular' + "Velocity"](nB);
        H['m']['instance']["playAreaSo" + "undInstanc" + 'e']("MetalSmash" + "Heavy", ni);
        ni = this["_session"]["m_world"]["CreateBody"](nu);
        no["push"](ni);
        nR = (nE = this['shapeGuide']["frameLeftS" + 'hape'])["rotation"] / b["oneEightyO" + "verPI"];
        nk = new Z['RM'](this["_startX"] + nE['x'] / this["character_" + "scale"], this["_startY"] + nE['y'] / this["character_" + "scale"]);
        nl["SetAsOrien" + "tedBox"](0x5 * nE["scaleX"] / this["character_" + "scale"], 0x5 * nE["scaleY"] / this['character_' + "scale"], nk, nR);
        ni["CreateShap" + 'e'](nl);
        ni["SetMassFro" + "mShapes"]();
        ni["SetLinearV" + "elocity"](this["frameBody"]["GetLinearV" + 'elocityFro' + "mLocalPoin" + 't'](ni["GetLocalCe" + "nter"]()));
        ni["SetAngular" + 'Velocity'](nB);
        ni = this["_session"]["m_world"]["CreateBody"](nu);
        no["push"](ni);
        nR = (nE = this["shapeGuide"]["frameRight" + 'Shape'])["rotation"] / y["oneEightyO" + 'verPI'];
        nk = new c['RM'](this['_startX'] + nE['x'] / this["character_" + "scale"], this["_startY"] + nE['y'] / this["character_" + "scale"]);
        nl["SetAsOrien" + "tedBox"](0x5 * nE["scaleX"] / this["character_" + "scale"], 0x5 * nE["scaleY"] / this['character_' + "scale"], nk, nR);
        ni["CreateShap" + 'e'](nl);
        ni["SetMassFro" + 'mShapes']();
        ni["SetLinearV" + "elocity"](this["frameBody"]["GetLinearV" + "elocityFro" + "mLocalPoin" + 't'](ni["GetLocalCe" + "nter"]()));
        ni["SetAngular" + "Velocity"](nB);
        ni = this["_session"]['m_world']["CreateBody"](nu);
        no["push"](ni);
        nR = (nE = this["shapeGuide"]["frame2Bott" + "omShape"])["rotation"] / X["oneEightyO" + "verPI"];
        nk = new x['RM'](this["_startX"] + nE['x'] / this["character_" + 'scale'], this["_startY"] + nE['y'] / this["character_" + 'scale']);
        nl["SetAsOrien" + "tedBox"](0x5 * nE["scaleX"] / this['character_' + 'scale'], 0x5 * nE['scaleY'] / this["character_" + "scale"], nk, nR);
        ni["CreateShap" + 'e'](nl);
        ni["SetMassFro" + "mShapes"]();
        ni["SetLinearV" + 'elocity'](this["frameBody"]["GetLinearV" + "elocityFro" + "mLocalPoin" + 't'](ni["GetLocalCe" + 'nter']()));
        ni["SetAngular" + "Velocity"](nB);
        ni = this["_session"]["m_world"]["CreateBody"](nu);
        no["push"](ni);
        nR = (nE = this["shapeGuide"]['engineShap' + 'e'])["rotation"] / w["oneEightyO" + "verPI"];
        nk = new q0['RM'](this["_startX"] + nE['x'] / this['character_' + "scale"], this["_startY"] + nE['y'] / this["character_" + "scale"]);
        nl['SetAsOrien' + "tedBox"](0x5 * nE["scaleX"] / this["character_" + "scale"], 0x5 * nE["scaleY"] / this["character_" + "scale"], nk, nR);
        ni["CreateShap" + 'e'](nl);
        ni['SetMassFro' + "mShapes"]();
        ni["SetLinearV" + "elocity"](this["frameBody"]["GetLinearV" + "elocityFro" + "mLocalPoin" + 't'](ni["GetLocalCe" + "nter"]()));
        ni['SetAngular' + "Velocity"](nB);
        this["_session"]["particleCo" + 'ntroller']["createBurs" + 't']("cartshards", 0x1e, 0x1e, ni, 0x32);
        for (var nW = [this["cartSmashe" + "dMC"], this["frameLeftS" + "mashedMC"], this["frameRight" + "SmashedMC"], this["frameBotto" + "mSmashedMC"], this["engineSmas" + 'hedMC']], nA = 0x0; nA < nW["length"]; nA++) {
          var nr = no[nA];
          var nJ = nW[nA];
          nJ['visible'] = !0x0;
          nr['SetUserDat' + 'a'](nJ);
          this["paintVecto" + 'r']['push'](nr);
        }
        this["_session"]["m_world"]['DestroyBod' + 'y'](this["frameBody"]);
        this['frameMC']["visible"] = !0x1;
      }
    };
    nK["setText"] = function (nm) {
      if ('ccMHY' === 'ccMHY') {
        this["text"]["text"] = nm;
      } else {
        if ("string" == typeof qV) {
          return qE(ql, q3);
        }
        var nk = {}["toString"]["call"](q1)["slice"](0x8, -0x1);
        "Object" === nk && qs["constructo" + 'r'] && (nk = qf['constructo' + 'r']["name"]);
        return "Map" === nk || "Set" === nk ? q9["from"](q5) : "Arguments" === nk || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/["test"](nk) ? q2(qB, qW) : void 0x0;
      }
    };
    nK["die"] = function () {
      this["text"]["destroy"]({
        'children': !0x0,
        'baseTexture': !0x0,
        'texture': !0x0
      });
    };
    return np;
  }();
  q2(0x83eb);
  var qy = q2(0x900b);
  var qc = q2(0x5394);
  var qX = q2['n'](qc);
  var qx = function () {

    function np(nm) {
      this["key"] = nm;
    }
    var nK = np["prototype"];
    nK["encrypt"] = function (nm) {
      var nI = qX()["enc"]['Hex']["parse"](this['key']);
      var nk = qX()["lib"]["WordArray"]["random"](0x10);
      var ns = qX()["AES"]["encrypt"](nm, nI, {
        'iv': nk,
        'mode': qX()["mode"]["CBC"]
      });
      this['IV'] = nk["toString"](qX()['enc']["Hex"]);
      return ns["toString"]();
    };
    nK['decrypt'] = function (nm, nI) {

      if ("Khjir" === "INTVb") {
        var nu = this;
        this['rowColor'] = T;
        this["doActionAf" + "terTextCre" + "ation"](function () {
          nu["titleText"]["tint"] = nu["playsText"]['tint'] = nu["createdTex" + 't']["tint"] = nu;
          nu["authorText"]['textColor'] = nu["isFriendAu" + "thor"]() ? P["FRIEND_COL" + 'OR'] : p;
        });
      } else {
        var nk = qX()["enc"]["Base64"]["parse"](nm);
        var ns = qX()["enc"]["Hex"]["parse"](this["key"]);
        var nt = qX()["enc"]["Hex"]["parse"](nI);
        return qX()["AES"]["decrypt"]({
          'ciphertext': nk
        }, ns, {
          'iv': nt,
          'mode': qX()["mode"]["CBC"]
        })["toString"](qX()["enc"]["Utf8"]);
      }
    };
    nK["getIV"] = function () {
      return this['IV'];
    };
    return np;
  }();
  function qw(np) {

    var nK = function (nm) {
      if ("object" != typeof nm || !nm) {
        return nm;
      }
      var nI = nm[Symbol["toPrimitiv" + 'e']];
      if (void 0x0 !== nI) {
        if ("xotlT" === "XNubf") {
          j["prototype"] = P["create"](p['prototype']);
          K["prototype"]["constructo" + 'r'] = m;
          I(k, f);
        } else {
          var nk = nI["call"](nm, 'string');
          if ("object" != typeof nk) {
            return nk;
          }
          throw new TypeError("@@toPrimit" + 'ive\x20must\x20r' + "eturn a pr" + "imitive va" + "lue.");
        }
      }
      return String(nm);
    }(np);
    return "symbol" == typeof nK ? nK : nK + '';
  }
  function qe(np, nK) {


    qe = Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"]['bind']() : function (nm, nI) {
      nm['__proto__'] = nI;
      return nm;
    };
    return qe(np, nK);
  }
  var qa = function (np) {

    if ("GWxMU" !== "XeJae") {
      function nt(nB, nu, nl) {


        var no;
        (no = np['call'](this) || this)["APPLESAUCE"] = "7ab7657e55" + "95b5c34869" + "88c90728c6" + 'ae';
        no["maxComment" + "Chars"] = 0xc8;
        no["setCharTex" + 't'] = function (nW) {
          var nA = no["maxComment" + "Chars"] - no["commentsIn" + "put"]["text"]["length"];
          no["cCharsText"]["text"] = String(nA) + (" chars lef" + 't');
        };
        no["mouseUpHan" + "dler"] = function (nW) {
          if (qy['L']["containsBa" + "dWord"](no["commentsIn" + "put"]["text"])) {
            no["errorPromp" + 't'] = new qT['Um']("Your repla" + "y comments" + " contain s" + "ome risky " + "words. Ple" + "ase remove" + " them. (so" + "rry, I've " + 'recently\x20r' + 'un\x20the\x20ris' + "k of losin" + 'g\x20advertis' + "ing)", 'ok');
            var nA = no["errorPromp" + 't']["window"];
            no['stage']["addChild"](nA);
            return void nA["center"]();
          }
          no['save']();
        };
        no["replaySave" + 'd'] = function (nW) {
          no['statusSpri' + 'te']['die']();
          no["loader"]["removeEven" + 'tListener'](q7['Jh']["COMPLETE"], no["replaySave" + 'd']);
          var nA = String(no["loader"]["data"]);
          var nr = nA["substr"](0x0, 0x8);
          var nJ = nA['split'](':');
          nr["indexOf"]("<html>") > -0x1 ? (no["_errorMess" + 'age'] = 'There\x20was\x20' + "an unexpec" + 'ted\x20system' + " Error", no["dispatchEv" + "ent"](new q7['Jh'](nt["GENERIC_ER" + "ROR"]))) : "failure" == nJ[0x0] ? ("invalid_ac" + "tion" == nJ[0x1] ? no["_errorMess" + "age"] = "An invalid" + " action wa" + 's\x20passed\x20(' + "you really" + " shouldn't" + " ever be s" + "eeing this" + ').' : "time_locko" + 'ut' == nJ[0x1] ? no['_errorMess' + "age"] = "You saved " + "a replay t" + "oo recentl" + "y. Please " + "wait a mom" + "ent and tr" + 'y\x20again.' : "hi_comp_ti" + 'me' == nJ[0x1] ? no['_errorMess' + "age"] = 'Your\x20repla' + "y is too l" + "ong." : "bad_param" == nJ[0x1] ? no["_errorMess" + 'age'] = "A bad para" + "meter was " + "passed (yo" + "u really s" + "houldn't e" + "ver be see" + "ing this)." : "app_error" == nJ[0x1] ? no['_errorMess' + "age"] = "Sorry, the" + "re was an " + "applicatio" + "n error. I" + "t was most" + " likely da" + "tabase rel" + "ated. Plea" + "se try aga" + "in in a mo" + "ment." : "not_logged" + '_in' == nJ[0x1] ? no["_errorMess" + "age"] = "You are no" + "t currentl" + "y logged i" + 'n.' : no["_errorMess" + "age"] = "An unknown" + " Error has" + " occurred.", no["dispatchEv" + 'ent'](new q7['Jh'](nt["GENERIC_ER" + "ROR"]))) : "success" == nJ[0x0] ? (no['_newReplay' + 'ID'] = (0x0, q7['Wh'])(nJ[0x1]), no["dispatchEv" + "ent"](new q7['Jh'](nt["SAVE_COMPL" + "ETE"]))) : (no["_errorMess" + "age"] = "Error: som" + "ething dre" + "adful has " + "happened", no["dispatchEv" + "ent"](new q7['Jh'](nt["GENERIC_ER" + "ROR"])));
        };
        no["windowClos" + 'ed'] = function (nW) {
          no["dispatchEv" + "ent"](nW["clone"]());
        };
        no["_byteArray"] = nB["byteArray"];
        no["_completed"] = nB["completed"];
        no["_length"] = nB['getLength']();
        no["_levelId"] = nu;
        no["_character"] = nl;
        var ni = new q7['j7']((0x0, qB['zI'])("GameUI", "mc_SaveRep" + "layMenu"));
        ni["convertChi" + 'ldren']();
        no["addChild"](ni);
        ni["children"][0x3]['x'] += 0x2a;
        ni["children"][0x3]['y'] -= 0x2;
        ni["children"][0x4]['x'] -= 0x4b;
        var nE = q7['A_']["pixiToFlas" + 'h'](ni["commentsTe" + 'xt']['pixiSprite'], ni);
        no["cCharsText"] = q7['A_']["pixiToFlas" + 'h'](ni["cCharsText"]["pixiSprite"], ni);
        no["buildWindo" + 'w']();
        no["saveButton"] = new qT['Ch']("save", 0xfd8181, 0x64);
        no["addChild"](no["saveButton"]);
        no["saveButton"]['x'] = 0x46;
        no['saveButton']['y'] = 0x99;
        no["saveButton"]["addEventLi" + "stener"](q7['Cm']["MOUSE_UP"], no["mouseUpHan" + "dler"]);
        no["cCharsText"]["selectable"] = !0x1;
        var nR = new qA['Sm']({
          'input': {
            'multiline': !0x0
          }
        });
        nR["setInputSt" + "yle"]("width", "190px");
        nR['setInputSt' + "yle"]("height", "93px");
        nR['x'] = nE["pixiText"]['x'];
        nR['y'] = nE["pixiText"]['y'];
        nR['setInputSt' + "yle"]("fontFamily", nE["pixiText"]['style']["fontFamily"]);
        nR["setInputSt" + "yle"]("fontSize", nE["pixiText"]["style"]["fontSize"] + 'px');
        nR["setInputSt" + "yle"]("color", nE['pixiText']["style"]["fill"]);
        nR["maxLength"] = no["maxComment" + "Chars"];
        no["pixiSprite"]["addChild"](nR);
        ni["removeChil" + 'd'](nE);
        nE["destroy"]();
        no["commentsIn" + "put"] = nR;
        no["addEventLi" + "stener"](q7['Jh']["ENTER_FRAM" + 'E'], no["setCharTex" + 't']);
        return no;
      }
      var nK;
      var nm;
      nm = np;
      (nK = nt)["prototype"] = Object["create"](nm["prototype"]);
      nK["prototype"]["constructo" + 'r'] = nK;
      qe(nK, nm);
      var nI;
      var nk;
      var ns = nt["prototype"];
      ns["createRepl" + "ayQueryStr" + "ing"] = function (nB, nu, nl, no, ni, nE) {
        return "id=" + nB + "&pc=" + nu + "&ar=" + nl + "&ct=" + no + "&vr=" + ni + '&uc=' + (nE = escape(nE)) + "&ui=" + qh['w']["user_id"];
      };
      ns["save"] = function () {
        if ("gVLyJ" !== 'HHrJH') {
          this["statusSpri" + 'te'] = new qT['AS']('Saving\x20Rep' + "lay...");
          var nB = this["statusSpri" + 'te']['window'];
          this["_window"]["parent"]["addChild"](nB);
          nB['center']();
          var nu = this["createRepl" + "ayQueryStr" + "ing"](this["_levelId"], this['_character'], qh['w']["architectu" + 're'], this['_completed'] ? this["_length"] : qh['w']["maxReplayF" + "rames"], qh['w']["CURRENT_VE" + "RSION"], this["commentsIn" + "put"]["text"]);
          var nl = new qx(this["APPLESAUCE"]);
          var no = nl["encrypt"](nu);
          var ni = nl["getIV"]();
          var nE = new q8['ag']();
          nE["writeBytes"](this['_byteArray']);
          var nR = q8['nu']["encodeByte" + "Array"](nE);
          var nW = qh['w']["siteURL"] + "replay.hw";
          var nA = new q7['vg'](nW);
          nA["method"] = q7['QI']["POST"];
          var nr = new q7['Vt']();
          nr["action"] = "create";
          nr['rr'] = encodeURIComponent(nR);
          nr['em'] = encodeURIComponent(no);
          nr['ei'] = encodeURIComponent(ni);
          nA["data"] = nr;
          this["loader"] = new q7['NU']();
          this['loader']["addEventLi" + "stener"](q7['Jh']["COMPLETE"], this["replaySave" + 'd']);
          this['loader']["load"](nA);
        } else {
          if (this["totalToken" + 's'] > 0x0) {
            var nD = new o['kx']();
            var ng = this["tokenIcon"] = new q2['kx']((0x0, E['zI'])("Game", "Token_Icon"));
            var nS = new R['lk']("Clarendon " + "LT Std Bol" + 'd', 0x12, 0x3d88c7, null, null, null, null, null, W['MA']["LEFT"]);
            this["tokenField"] = new A['A_']();
            this["tokenField"]["defaultTex" + "tFormat"] = nS;
            this["tokenField"]["autoSize"] = r['wL']["RIGHT"];
            this["tokenField"]["multiline"] = !0x1;
            this["tokenField"]["selectable"] = !0x1;
            this["tokenField"]['antiAliasT' + "ype"] = J['BF']["ADVANCED"];
            this["tokenField"]['text'] = '0/' + this["totalToken" + 's'];
            nD["addChild"](ng);
            nD["addChild"](this["tokenField"]);
            this['tokenField']['x'] = -0x8;
            ng['y'] = this["tokenField"]["height"] / 0x2 + 0x1;
            ng['x'] = this["tokenField"]['x'] - this['tokenField']["width"] - this["tokenIcon"]["width"] / 0x2 - 0x3;
            this["_session"]['addChild'](nD);
            nD['x'] = 0x384;
            nD['y'] = 0x4;
            var nd = new D['GD'](0x2, 0x5a, 0x0, 0x1, 0x2, 0x2, 0.25);
            nD["filters"] = [nd];
            g['w']["hideHUD"] && (nD['alpha'] = 0x0);
          }
        }
      };
      ns["buildWindo" + 'w'] = function () {
        if ("RzByN" !== "ZEKQf") {
          this["_window"] = new qT['p8'](!0x0, this, !0x0);
          this['_window']["addEventLi" + "stener"](qT['p8']["WINDOW_CLO" + "SED"], this['windowClos' + 'ed']);
        } else {
          var nu;
          (nu = h["call"](this, C, j, P, p, K) || this)["lineThickn" + "ess"] = 1.5;
          nu["minLineThi" + "ckness"] = 0x1;
          return nu;
        }
      };
      ns["die"] = function () {
        this["_window"]["removeEven" + "tListener"](qT['p8']["WINDOW_CLO" + "SED"], this["windowClos" + 'ed']);
        this["_window"]["closeWindo" + 'w']();
        this["removeEven" + "tListener"](q7['Jh']["ENTER_FRAM" + 'E'], this["setCharTex" + 't']);
        this["saveButton"]["removeEven" + "tListener"](q7['Cm']["MOUSE_UP"], this["mouseUpHan" + "dler"]);
        this["commentsIn" + 'put']["destroy"]();
        this["destroyTex" + "tTextures"](this["pixiSprite"]);
        this["destroy"]();
      };
      ns["destroyTex" + 'tTextures'] = function (nB) {
        if ("DXHNe" !== "dtPvb") {
          for (var nu = nB["children"]["length"] - 0x1; nu >= 0x0; nu--) {
            var nl;
            var no = nB["children"][nu];
            no instanceof qJ["EYj"] ? no["_destroyed"] || no["destroy"]({
              'children': !0x0,
              'texture': !0x0,
              'baseTexture': !0x0
            }) : null !== (nl = no["children"]) && void 0x0 !== nl && nl["length"] && this["destroyTex" + "tTextures"](no);
          }
        } else {
          return n(0x14, '_');
        }
      };
      nI = nt;
      (nk = [{
        'key': 'window',
        'get': function () {
          return this["_window"];
        }
      }, {
        'key': "errorMessa" + 'ge',
        'get': function () {
          return this["_errorMess" + "age"];
        }
      }, {
        'key': "newReplayI" + 'D',
        'get': function () {
          return "eSnEV" === "eSnEV" ? this['_newReplay' + 'ID'] : n["_backgroun" + 'dColor'];
        }
      }]) && function (nB, nu) {
        for (var nl = 0x0; nl < nu["length"]; nl++) {
          if ("QNKgL" === "yRPuS") {
            this["byteArr"]["writeByte"](0x7);
            this["byteArr"]["writeUnsig" + "nedShort"](ns);
          } else {
            var no = nu[nl];
            no["enumerable"] = no["enumerable"] || !0x1;
            no["configurab" + 'le'] = !0x0;
            "value" in no && (no["writable"] = !0x0);
            Object["defineProp" + "erty"](nB, qw(no["key"]), no);
          }
        }
      }(nI["prototype"], nk);
      Object["defineProp" + 'erty'](nI, "prototype", {
        'writable': !0x1
      });
      return nI;
    } else {
      this['trackDeath'](N);
      this["_dead"] = f;
      this["_dead"] && (this["userVehicl" + 'eEject'](), this["currentPos" + 'e'] = 0x0, this["releaseGri" + 'p'](), this['voiceSound'] && (this["voiceSound"]["stopSound"](), this['voiceSound'] = null));
    }
  }(q7['kx']);
  qa["SAVE_COMPL" + "ETE"] = "savecomple" + 'te';
  qa["GENERIC_ER" + "ROR"] = "genericerr" + 'or';
  q2(0xd51a);
  var qY = q2(0x11d24);
  function qv(np) {


    if ("oNmqj" !== "oNmqj") {
      var nI;
      var nk = q2[qB];
      var ns = qW['p'];
      var nt = nk[0x2];
      qH > 0x3 ? (nI = nt === qk) && (q4 = nk[(qJ = nk[0x4]) ? 0x5 : (qr = 0x3, 0x3)], nk[0x4] = nk[0x5] = qj) : nk[0x0] <= ns && ((nI = qP < 0x2 && ns < nk[0x1]) ? (qn = 0x0, qy['v'] = qg, qu['n'] = nk[0x1]) : ns < nt && (nI = qd < 0x3 || nk[0x0] > qm || qe > nt) && (nk[0x4] = qh, nk[0x5] = qq, qZ['n'] = nt, qo = 0x0));
    } else {
      var nK = function (nI) {
        if ("object" != typeof nI || !nI) {
          return nI;
        }
        var nk = nI[Symbol["toPrimitiv" + 'e']];
        if (void 0x0 !== nk) {
          var ns = nk["call"](nI, "string");
          if ("object" != typeof ns) {
            return ns;
          }
          throw new TypeError("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
        }
        return String(nI);
      }(np);
      return "symbol" == typeof nK ? nK : nK + '';
    }
  }
  function qL(np, nK) {


    qL = Object["setPrototy" + 'peOf'] ? Object["setPrototy" + "peOf"]["bind"]() : function (nm, nI) {
      return "HOOhs" === "HOOhs" ? (nm['__proto__'] = nI, nm) : (f["__proto__"] = T, V);
    };
    return qL(np, nK);
  }
  var qU = function (np) {


    function nK(nB, nu, nl) {
      var no;
      void 0x0 === nB && (nB = 0x0);
      void 0x0 === nu && (nu = null);
      void 0x0 === nl && (nl = 0xffff66);
      (no = np["call"](this) || this)["maxRating"] = 0x5;
      no["starWidth"] = 0x1e;
      no["levelRatin" + 'gs'] = ['0\x20-\x20godawf' + 'ul', "1 - shitty", "2 - meh", '3\x20-\x20good', "4 - pretty" + " great", "5 - superb" + '!'];
      no['mouseMoveH' + "andler"] = function (nE) {


        if ("SnaQd" === "LiKCy") {
          var nA = this["paintBodyV" + "ector"][N];
          var nr = nA["GetInterpo" + "latedWorld" + "Center"]();
          nA['m_userData']['x'] = nr['x'] * this["m_physScal" + 'e'];
          nA["m_userData"]['y'] = nr['y'] * this["m_physScal" + 'e'];
          nA["m_userData"]["rotation"] = nA['GetInterpo' + "latedAngle"]() * f["oneEightyO" + "verPI"] % 0x168;
        } else {
          var nR = Math["max"](Math["min"](Math["ceil"](no["mouseX"] / no["starWidth"]), 0x5), 0x0);
          no["rating"] = nR;
          no["textBox"] && (no["setText"](), no["drawBg"](), no["textBox"]['x'] = no["mouseX"] + 0x14, no["textBox"]['y'] = no['mouseY'] + 0xa);
        }
      };
      no["rollOutHan" + "dler"] = function (nE) {


        "PQHeV" !== "PQHeV" ? this["currentPos" + 'e'] = 0x4 : (void 0x0 === nE && (nE = null), no["_rating"] = -0x1, no["filler"]["scaleX"] = 0x0, no["textBox"] && no["removeText" + "Box"]());
      };
      no['rollOverHa' + "ndler"] = function (nE) {


        if ("QemRB" === "QemRB") {
          no["textBox"] || no["addTextBox"]();
        } else {
          var nW = this['_refSprite']["getFlatSpr" + "ite"]();
          var nA = this["_sprite"]["parent"];
          var nr = nA["getChildIn" + "dex"](this["_sprite"]);
          nA["addChildAt"](nW, nr);
          nW["rotation"] = this["_sprite"]["rotation"];
          var nJ = this["_sprite"]["getBounds"](nA);
          var nD = nW["getBounds"](nA);
          nW['x'] -= nD['x'] - nJ['x'];
          nW['y'] -= nD['y'] - nJ['y'];
          nA["removeChil" + 'd'](this["_sprite"]);
          nW["alpha"] = this["_sprite"]["alpha"];
          this["_sprite"] = nW;
          N = f["GetPositio" + 'n']();
        }
      };
      no["mouseUpHan" + "dler"] = function (nE) {


        no["buttonMode"] = !0x1;
        no["textBox"] && no["removeText" + 'Box']();
        no['removeEven' + "tListener"](q7['Cm']["ROLL_OUT"], no["rollOutHan" + "dler"]);
        no["removeEven" + "tListener"](q7['Cm']["ROLL_OVER"], no["rollOverHa" + 'ndler']);
        no["removeEven" + "tListener"](q7['Cm']["MOUSE_MOVE"], no["mouseMoveH" + "andler"]);
        no["removeEven" + "tListener"](q7['Cm']["MOUSE_UP"], no['mouseUpHan' + "dler"]);
        no["_rating"] > -0x1 && no["dispatchEv" + "ent"](new q7['Jh'](nK["RATING_SEL" + "ECTED"]));
      };
      var ni = new q7['j7']((0x0, qB['zI'])("GameUI", 'mc_votings' + "tars"));
      ni["convertChi" + "ldren"](ni["pixiSprite"]);
      no["publicFill" + 'er'] = ni["publicFill" + 'er'];
      no["starMask"] = ni["starMask"];
      no["publicFill" + 'er']["mask"] = no["starMask"];
      no["addChild"](ni);
      no["publicRati" + 'ng'] = nB;
      nu && (no["levelRatin" + 'gs'] = nu);
      no["buildHitBo" + 'x']();
      no["createFill" + 'er'](nl);
      no["rollOutHan" + "dler"]();
      no["mouseChild" + "ren"] = !0x1;
      no["buttonMode"] = !0x0;
      no["tabEnabled"] = !0x1;
      no['addEventLi' + "stener"](q7['Cm']['ROLL_OUT'], no['rollOutHan' + "dler"]);
      no["addEventLi" + "stener"](q7['Cm']["ROLL_OVER"], no["rollOverHa" + "ndler"]);
      no["addEventLi" + "stener"](q7['Cm']["MOUSE_MOVE"], no["mouseMoveH" + 'andler']);
      no["addEventLi" + "stener"](q7['Cm']["MOUSE_UP"], no['mouseUpHan' + "dler"]);
      return no;
    }
    var nm;
    var nI;
    nI = np;
    (nm = nK)["prototype"] = Object['create'](nI["prototype"]);
    nm['prototype']["constructo" + 'r'] = nm;
    qL(nm, nI);
    var nk;
    var ns;
    var nt = nK["prototype"];
    nt['createFill' + 'er'] = function (nB) {
      this["filler"] = new q7['kx']();
      this["addChild"](this["filler"]);
      this["filler"]["graphics"]["beginFill"](nB, 0x1);
      this["filler"]["graphics"]["drawRect"](0x0, 0x0, 0x96, 0x1e);
      this["filler"]["graphics"]["endFill"]();
      this["filler"]['mask'] = this["starMask"];
    };
    nt["addTextBox"] = function () {
      var nB = new q7['lk']("HelveticaN" + 'eueLT\x20Std\x20' + "Med", 0xc, 0xffffff, null, null, null, null, null, q7['MA']["LEFT"]);
      this["textField"] = new q7['A_']();
      this['textField']["defaultTex" + "tFormat"] = nB;
      this["textField"]["autoSize"] = q7['wL']["LEFT"];
      this["textField"]["width"] = 0x14;
      this["textField"]["height"] = 0x14;
      this["textField"]['x'] = 0x3;
      this["textField"]['y'] = 0x3;
      this["textField"]["multiline"] = !0x1;
      this["textField"]["selectable"] = !0x1;
      this["textField"]['antiAliasT' + "ype"] = q7['BF']["ADVANCED"];
      this["textBg"] = new q7['kx']();
      this['textBox'] = new q7['kx']();
      this["addChild"](this["textBox"]);
      this["textBox"]["addChild"](this["textBg"]);
      this["textBox"]["addChild"](this["textField"]);
      var nu = new q7['GD'](0xa, 0x5a, 0x0, 0x1, 0x7, 0x7, 0.2, 0x3);
      this["textBox"]["filters"] = [nu];
    };
    nt["removeText" + "Box"] = function () {
      this["removeChil" + 'd'](this["textBox"]);
      this["textBox"]["_pixiSprit" + 'e']["destroy"]({
        'children': !0x0,
        'baseTexture': !0x0,
        'texture': !0x0
      });
      this["textBox"] = null;
    };
    nt["drawBg"] = function () {
      this['textBg']["graphics"]["clear"]();
      this["textBg"]["graphics"]["lineStyle"](0x1, 0x999999, 0x1, !0x0);
      this["textBg"]["graphics"]["beginFill"](0xcccccc, 0x1);
      this['textBg']["graphics"]["drawRect"](0x0, 0x0, Math["ceil"](this["textField"]['width']) + 0x5, Math["ceil"](this["textField"]["height"]) + 0x5);
      this["textBg"]["graphics"]["endFill"]();
    };
    nt["setText"] = function () {
      this["textField"]["htmlText"] = this["levelRatin" + 'gs'][this["_rating"]];
      this['textField']["width"] = 0xa;
      this['textField']["autoSize"] = q7['wL']['LEFT'];
      this["textField"]['wordWrap'] = !0x1;
      this["drawBg"]();
    };
    nt["buildHitBo" + 'x'] = function () {
      this['hitBox'] = new q7['kx']();
      this["hitBox"]["graphics"]["beginFill"](0x0);
      this["hitBox"]["graphics"]['drawRect'](-0x14, 0x0, 0xbe, 0x1d);
      this["hitBox"]['graphics']["endFill"]();
      this["addChild"](this["hitBox"]);
      this['hitArea'] = this["hitBox"];
      this["hitBox"]["alpha"] = 0x0;
    };
    nt["die"] = function () {
      if ("NlJSV" !== 'NlJSV') {
        var nu;
        var nl = q2[qB];
        var no = qW['p'];
        var ni = nl[0x2];
        qH > 0x3 ? (nu = ni === qk) && (q4 = nl[(qJ = nl[0x4]) ? 0x5 : (qr = 0x3, 0x3)], nl[0x4] = nl[0x5] = qj) : nl[0x0] <= no && ((nu = qP < 0x2 && no < nl[0x1]) ? (qn = 0x0, qy['v'] = qg, qu['n'] = nl[0x1]) : no < ni && (nu = qd < 0x3 || nl[0x0] > qm || qe > ni) && (nl[0x4] = qh, nl[0x5] = qq, qZ['n'] = ni, qo = 0x0));
      } else {
        this["removeEven" + "tListener"](q7['Cm']['ROLL_OUT'], this["rollOutHan" + "dler"]);
        this["removeEven" + 'tListener'](q7['Cm']["ROLL_OVER"], this["rollOverHa" + "ndler"]);
        this["removeEven" + "tListener"](q7['Cm']["MOUSE_MOVE"], this["mouseMoveH" + "andler"]);
        this["removeEven" + 'tListener'](q7['Cm']["MOUSE_UP"], this["mouseUpHan" + "dler"]);
        this['textBox'] && this["removeText" + "Box"]();
      }
    };
    nk = nK;
    (ns = [{
      'key': "publicRati" + 'ng',
      'get': function () {
        return this['_publicRat' + "ing"];
      },
      'set': function (nB) {
        "QNvyv" !== "eUDfE" ? (this["_publicRat" + "ing"] = nB, this["publicFill" + 'er']['scaleX'] = nB / this["maxRating"]) : (this['_timer'] && (this["_timer"]['stop'](), this['_timer']['removeEven' + "tListener"](N['iJ']["TIMER"], this['startFadeB' + "ind"]), this["_timer"] = null), this["removeEven" + "tListener"](f['Jh']["ENTER_FRAM" + 'E'], this['fadeOutBin' + 'd']));
      }
    }, {
      'key': "rating",
      'get': function () {
        if ('gXVaJ' !== 'gXVaJ') {
          n["prototype"]['shiftNullA' + "ctions"]["call"](this);
        } else {
          return this["_rating"];
        }
      },
      'set': function (nB) {
        "uawTx" !== 'qvagE' ? (this["_rating"] = nB, this['filler']["scaleX"] = Math["max"](0x0, this['_rating']) / this["maxRating"]) : (this["loaderBW"] = new q8['kx'](qI["kxk"]["from"](qS["fileString"] + this["index"] + "_bw.png")), this["loaderColo" + 'r'] = new qA['kx'](qN["kxk"]["from"](qc["fileString"] + this["index"] + '.png')), this["loaderBW"]['x'] = this['loaderColo' + 'r']['x'] = 0x5, this["loaderBW"]['y'] = this['loaderColo' + 'r']['y'] = 0x5, this["addChild"](this["loaderBW"]), this["addChild"](this["loaderColo" + 'r']));
      }
    }]) && function (nB, nu) {
      if ("HWgaJ" !== "ONWFi") {
        for (var nl = 0x0; nl < nu["length"]; nl++) {
          var no = nu[nl];
          no["enumerable"] = no["enumerable"] || !0x1;
          no["configurab" + 'le'] = !0x0;
          "value" in no && (no["writable"] = !0x0);
          Object["defineProp" + "erty"](nB, qv(no["key"]), no);
        }
      } else {
        var nE = this["jointDicti" + "onary"]["get"](Z);
        y = (c = X["triggerAct" + "ions"]["get"](x))['length'];
        w = 0x0;
        for (; np < a; Y++) {
          qm = qI[qk];
          qs = qt["triggerAct" + "ionList"]["indexOf"](qB);
          if (qu = ql['triggerAct' + "ionListPro" + "perties"][qo]) {
            qi = [];
            qE = 0x0;
            for (; qR < qW["length"]; qA++) {
              qr = qJ[qD];
              qg = qS["keyedPrope" + 'rtyObject'][qd];
              qz["push"](qF["get"](qM)[qH]);
            }
          }
          qb["addTargetA" + "ctionPrisJ" + "oint"](qZ, nE, qy, qc);
        }
      }
    }(nk['prototype'], ns);
    Object["defineProp" + "erty"](nk, "prototype", {
      'writable': !0x1
    });
    return nk;
  }(q7['kx']);
  function qO(np) {


    if ("pMVNW" !== "pMVNW") {
      var nI = q7;
      var nk = new q8['Gq']();
      var ns = new q9['RM']();
      ns["Set"](nI['x'] / this["m_physScal" + 'e'], nI['y'] / this["m_physScal" + 'e']);
      nI["body1"] ? nI["body1"] instanceof qq['_'] ? (qn = (qN = this["specialDic" + 'tionary']["get"](nI["body1"]))["getJointBo" + 'dy'](ns), qf instanceof qT['S3'] && (qV = qh)) : nI["body1"] instanceof qC['D'] ? (qj = this["groupDicti" + "onary"]["get"](nI['body1']), this["vehicleDic" + "tionary"]["get"](nI["body1"]) && (qP = this["vehicleDic" + "tionary"]["get"](nI["body1"]), nI["body2"] && ((qp = nI["body2"]) instanceof qK['_'] ? qm["checkAddSp" + "ecial"](this["specialDic" + "tionary"]["get"](qI)) : qk instanceof qs['uH'] && qt['checkAddVe' + "hicle"](this['vehicleDic' + "tionary"]["get"](qB))))) : qu = this["shapeDicti" + "onary"]["get"](nI["body1"])["GetBody"]() : ql = this["levelBody"];
      nI['body2'] ? nI["body2"] instanceof qo['_'] ? (qi = (qE = this["specialDic" + "tionary"]["get"](nI["body2"]))["getJointBo" + 'dy'](ns), qR instanceof qW['S3'] && (qA = qr)) : nI["body2"] instanceof qJ['D'] ? (qD = this['groupDicti' + "onary"]["get"](nI["body2"]), this["vehicleDic" + "tionary"]["get"](nI["body2"]) && (qg = this['vehicleDic' + "tionary"]["get"](nI["body2"]), nI["body1"] && ((qS = nI["body1"]) instanceof qd['_'] ? qz["checkAddSp" + "ecial"](this["specialDic" + "tionary"]['get'](qF)) : qM instanceof qH['uH'] && qb['checkAddVe' + 'hicle'](this["vehicleDic" + "tionary"]['get'](qZ))))) : qy = this["shapeDicti" + "onary"]["get"](nI["body2"])['GetBody']() : qc = this['levelBody'];
      nk['Initialize'](qX, qx, ns);
      nI["limit"] && (nk['enableLimi' + 't'] = !0x0, nk['upperAngle'] = nI["upperAngle"] * qw['PI'] / 0xb4, nk["lowerAngle"] = nI["lowerAngle"] * qe['PI'] / 0xb4);
      nk["maxMotorTo" + "rque"] = 0x32;
      nI["motor"] && (nk["enableMoto" + 'r'] = !0x0, nk["maxMotorTo" + "rque"] = nI["torque"], nk["motorSpeed"] = nI["speed"]);
      this["_levelVers" + "ion"] > 1.84 && (nk["upperAngle"] = nI["upperAngle"] * qa['PI'] / 0xb4, nk["lowerAngle"] = nI["lowerAngle"] * qY['PI'] / 0xb4, nk["maxMotorTo" + "rque"] = nI['torque'], nk['motorSpeed'] = nI["speed"]);
      nI["collideSel" + 'f'] && (nk["collideCon" + "nected"] = !0x0);
      var nt = this["_session"]["m_world"]["CreateJoin" + 't'](nk);
      qv && nI["vehicleCon" + "trolled"] && qL["addJoint"](nt);
      qU && nI["vehicleCon" + "trolled"] && qO['addJoint'](nt);
      qG && qQ["addUserJoi" + 'nt'](nt);
      n0 = n1 = null;
      n2 = null;
      this["jointDicti" + 'onary']["set"](n3, nt);
    } else {
      var nK = function (nI) {
        if ("khqPU" === "tKifF") {
          var nB = 0.5 * z["delta"];
          if (F["spinActive"]) {
            M["shapeSprit" + 'e']["rotation"] = (H["shapeSprit" + 'e']["rotation"] + b["rotationPe" + "rStep"]) % 0x168;
            '0' == Z["shapeSprit" + 'e']["rotation"]["toFixed"](0x0)["toString"]() && y["_disableSp" + 'in'] && (c["spinActive"] = !0x1, X["_disableSp" + 'in'] = !0x1);
          } else {
            if (x["shakeActiv" + 'e']) {
              var nu = qN['PI'] * qf["shakeCount" + 'er'] / 0xa;
              qT['w']["use60FPS"] && (nu /= 0x2);
              qV["shapeSprit" + 'e']["rotation"] = qh["round"](0x14 * qC["sin"](nu));
              qj["shakeCount" + 'er'] += qP["shakeStep"];
              '0' != qp["shapeSprit" + 'e']["rotation"]["toFixed"](0x0)["toString"]() || qK['mouseConta' + 'ct'] || (qm['shakeActiv' + 'e'] = !0x1);
            }
          }
          q1["glowActive"] && (q2["glowFilter"]["strength"] = (0.5 * -q3['cos'](q4["glowCounte" + 'r']) + 0.5) * q5["maxGlowStr" + "ength"], q6["glowCounte" + 'r'] += q7["glowStep"] * nB, q8["filters"] = [q9['bevelFilte' + 'r'], qq["glowFilter"], qn["shadowFilt" + 'er']]);
        } else {
          if ('object' != typeof nI || !nI) {
            return nI;
          }
          var nk = nI[Symbol["toPrimitiv" + 'e']];
          if (void 0x0 !== nk) {
            if ("SfIrZ" !== "MJcJR") {
              var ns = nk["call"](nI, "string");
              if ("object" != typeof ns) {
                return ns;
              }
              throw new TypeError("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + 'lue.');
            } else {
              return this["_session"];
            }
          }
          return String(nI);
        }
      }(np);
      return "symbol" == typeof nK ? nK : nK + '';
    }
  }
  function qG(np, nK) {


    qG = Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"]['bind']() : function (nm, nI) {
      if ("WlZxT" !== "WlZxT") {
        T != this["_tooMuchAr" + 't'] && (this["_tooMuchAr" + 't'] = V, this["dispatchEv" + "ent"](new h['Jh'](C["ART_LIMIT_" + 'STATUS'])));
      } else {
        nm["__proto__"] = nI;
        return nm;
      }
    };
    return qG(np, nK);
  }
  qU["RATING_SEL" + 'ECTED'] = 'ratingsele' + "cted";
  var qQ = function (np) {


    function nK(nB, nu) {
      if ("zwHIS" === "BOJhR") {
        C = [];
        for (var ni = 0x0; ni < j["length"]; ni++) {
          var nE = k[ni];
          var nR = f["keyedPrope" + "rtyObject"][nE];
          q1["push"](nR["get"](B)[u]);
        }
      } else {
        var nl;
        void 0x0 === nu && (nu = !0x1);
        (nl = np["call"](this) || this)["mouseUpHan" + "dler"] = function (ni) {


          switch (ni["target"]) {
            case nl["restartBut" + "ton"]:
              nl["dispatchEv" + "ent"](new q7['Jh'](nK["RESTART_LE" + 'VEL']));
              break;
            case nl["characterB" + "utton"]:
              qY['J']['trackEvent'](qY['J']["LEVEL"], qY['J']["CHANGE_CHA" + "RACTER"], "levelID_" + nl['levelDataO' + "bject"]['id']);
              nl["dispatchEv" + "ent"](new q7['Jh'](nK["CHOOSE_CHA" + "RACTER"]));
              break;
            case nl["replayButt" + 'on']:
              nl["dispatchEv" + "ent"](new q7['Jh'](nK["VIEW_REPLA" + 'Y']));
              break;
            case nl["saveButton"]:
              if (qh['w']["user_id"] <= 0x0) {
                if ("ZuIkf" === 'ZuIkf') {
                  nl["promptSpri" + 'te'] = new qT['Um']("You must b" + "e logged i" + "n to save " + "replays.  " + qh['w']["registerLo" + "ginMessage"], 'ok');
                  var nE = nl["promptSpri" + 'te']["window"];
                  nl["_window"]["parent"]["addChild"](nE);
                  return void nE["center"]();
                } else {
                  this["ejected"] = !0x0;
                  this["resetJoint" + "Limits"]();
                  var nW = this["_session"]["m_world"];
                  this["sleighFoot" + '1'] && (this['_session']["m_world"]["DestroyJoi" + 'nt'](this["sleighFoot" + '1']), this["sleighFoot" + '1'] = null);
                  this["sleighFoot" + '2'] && (this['_session']['m_world']["DestroyJoi" + 'nt'](this['sleighFoot' + '2']), this["sleighFoot" + '2'] = null);
                  this["sleighPelv" + 'is'] && (this["_session"]["m_world"]["DestroyJoi" + 'nt'](this["sleighPelv" + 'is']), this["sleighPelv" + 'is'] = null);
                  this["reignsHand" + '1'] && (this['_session']["m_world"]["DestroyJoi" + 'nt'](this["reignsHand" + '1']), this['reignsHand' + '1'] = null, this["checkReign" + 's']());
                  this['reignsHand' + '2'] && (this['_session']["m_world"]['DestroyJoi' + 'nt'](this["reignsHand" + '2']), this["reignsHand" + '2'] = null, this['checkReign' + 's']());
                  if (this["_session"]["version"] > 1.51) {
                    for (var nA = this['sleighBody']["GetShapeLi" + 'st'](); nA; nA = nA["m_next"]) {
                      -0x1 == nA["m_filter"]["groupIndex"] && (nA["m_filter"]["groupIndex"] = 0x0, nW['Refilter'](nA));
                    }
                    this["midWheel2S" + "hape"]["m_filter"]["groupIndex"] = 0x0;
                    nW["Refilter"](this["midWheel2S" + "hape"]);
                  } else {
                    this["seatShape"]['m_filter']['groupIndex'] = 0x0;
                    this["backShape"]['m_filter']["groupIndex"] = 0x0;
                    nW["Refilter"](this["seatShape"]);
                    nW['Refilter'](this["backShape"]);
                  }
                  this["lowerArm1M" + 'C']["hand"]["gotoAndSto" + 'p'](0x2);
                  this["lowerArm2M" + 'C']['hand']["gotoAndSto" + 'p'](0x2);
                  var nr = this["sleighBody"]["GetAngle"]() - V['PI'] / 0x2;
                  var nJ = h['cos'](nr) * this["ejectImpul" + 'se'];
                  var nD = C["sin"](nr) * this['ejectImpul' + 'se'];
                  this['chestBody']["ApplyImpul" + 'se'](new j['RM'](nJ, nD), this["chestBody"]["GetWorldCe" + "nter"]());
                  this["pelvisBody"]["ApplyImpul" + 'se'](new P['RM'](nJ, nD), this["pelvisBody"]["GetWorldCe" + "nter"]());
                  this['backWheelJ' + "oint"]["IsMotorEna" + "bled"]() && (this["backWheelJ" + 'oint']["EnableMoto" + 'r'](!0x1), this["midWheel1J" + "oint"]["EnableMoto" + 'r'](!0x1), this["midWheel2J" + "oint"]["EnableMoto" + 'r'](!0x1), this["frontWheel" + "Joint"]["EnableMoto" + 'r'](!0x1));
                  this["snowSpray"] && (this["snowSpray"]["stopSpewin" + 'g'](), this['snowSpray'] = null, this["sleighBell" + "Loop"]["fadeOut"](0.5), this['sleighBell' + "Loop"] = null);
                }
              }
              if (qh['w']["disableUpl" + "oad"]) {
                nl["promptSpri" + 'te'] = new qT['Um'](qh['w']["disableMes" + 'sage'], "OH FINE");
                nE = nl["promptSpri" + 'te']["window"];
                nl["_window"]["parent"]["addChild"](nE);
                return void nE['center']();
              }
              nl["dispatchEv" + "ent"](new q7['Jh'](nK["SAVE_REPLA" + 'Y']));
              break;
            case nl["editFavori" + "tesButton"]:
              if (qh['w']["user_id"] <= 0x0) {
                nl["promptSpri" + 'te'] = new qT['Um']('You\x20must\x20b' + "e logged i" + "n to edit " + "your favor" + "ite levels" + ".  " + qh['w']["registerLo" + "ginMessage"], 'ok');
                nE = nl['promptSpri' + 'te']['window'];
                nl["_window"]['parent']["addChild"](nE);
                return void nE["center"]();
              }
              if (qh['w']["disableUpl" + "oad"]) {
                nl["promptSpri" + 'te'] = new qT['Um'](qh['w']["disableMes" + "sage"], "OH FINE");
                nE = nl["promptSpri" + 'te']["window"];
                nl['_window']["parent"]['addChild'](nE);
                return void nE['center']();
              }
              nl["editFavori" + "tes"]();
              break;
            case nl["exitButton"]:
              nl["dispatchEv" + "ent"](new q7['Jh'](nK["EXIT"]));
              break;
            case nl["cancelButt" + 'on']:
              nl["dispatchEv" + "ent"](new q7['Jh'](nK['CANCEL']));
              break;
            case nl["muteButton"]:
              0x1 == nl['muteButton']["currentFra" + 'me'] ? (nl["muteButton"]["gotoAndSto" + 'p'](0x2), qr['m']["instance"]["mute"](), qY['J']["trackEvent"](qY['J']["LEVEL"], qY['J']["MUTE"])) : (nl["muteButton"]["gotoAndSto" + 'p'](0x1), qr['m']["instance"]["unMute"](), qY['J']["trackEvent"](qY['J']["LEVEL"], qY['J']["UNMUTE"]));
              break;
            case nl["fullScreen" + "Button"]:
              nl["stage"]["displaySta" + 'te'] == q7['se']['FULL_SCREE' + "N_INTERACT" + "IVE"] ? (nl["stage"]["displaySta" + 'te'] = q7['se']["NORMAL"], nl["stage"]["displaySta" + 'te'] == q7['se']['NORMAL'] && nl["fullScreen" + "Button"]["gotoAndSto" + 'p'](0x1)) : (nl["stage"]["displaySta" + 'te'] = q7['se']["FULL_SCREE" + "N_INTERACT" + "IVE"], nl["stage"]["displaySta" + 'te'] == q7['se']["FULL_SCREE" + "N_INTERACT" + 'IVE'] && nl["fullScreen" + 'Button']["gotoAndSto" + 'p'](0x2));
          }
        };
        nl['rollOverHa' + "ndler"] = function (ni) {


          switch (ni["target"]) {
            case nl["restartBut" + 'ton']:
              qT['uO']["instance"]["show"]("(R)", nl["restartBut" + "ton"]);
              break;
            case nl["fullScreen" + "Button"]:
              qT['uO']["instance"]["show"]("Fullscreen", nl["fullScreen" + 'Button']);
              break;
            case nl["muteButton"]:
              qT['uO']['instance']["show"]("Mute / Unm" + "ute", nl["muteButton"]);
          }
        };
        nl["keyDownHan" + "dler"] = function (ni) {


          "zrCeD" === "wAFCm" ? (this['_body2'] && (this["_body2"]["removeEven" + "tListener"](K['$']["COORDINATE" + '_CHANGE'], this["bodyMoved"]), this["_body2"]["removeEven" + "tListener"](m['$']["SELECTION_" + "STATE_CHAN" + 'GE'], this["bodySelect" + "ionChanged"]), this["_body2"]['removeJoin' + 't'](this)), null != I ? (this["_body2"] = k, this["_vehicleAt" + 'tached'] = !0x1, this["_vehicleAt" + "tached"] = !!(this["_body1"] instanceof f['uH'] || this["_body2"] instanceof q1['uH']), this["setAttribu" + "tes"](), null != this["stage"] && (B["addEventLi" + "stener"](u['$']["COORDINATE" + "_CHANGE"], this["bodyMoved"], !0x1, 0x0, !0x0), l["addEventLi" + "stener"](o['$']["SELECTION_" + "STATE_CHAN" + 'GE'], this["bodySelect" + "ionChanged"], !0x1, 0x0, !0x0), q2['addJoint'](this), this['forceDirty']())) : this["_body2"] = null) : nl["_disableKe" + 'ys'] || 0x52 !== ni['keyCode'] || nl["dispatchEv" + "ent"](new q7['Jh'](nK["RESTART_LE" + 'VEL']));
        };
        nl["editFavori" + "tes"] = function () {


          var ni = new q7['vg'](qh['w']["siteURL"] + "user.hw");
          ni["method"] = q7['QI']["POST"];
          var nE = new q7['Vt']();
          nE["level_id"] = nl["levelDataO" + "bject"]['id'];
          ni["data"] = nE;
          if (nl['isFavorite']) {
            nR = "removing l" + "evel from " + "favorites." + '..';
            nE["action"] = "delete_fav" + "orite";
          } else {
            if ("errIO" === "eREaG") {
              return void qF(qT);
            } else {
              var nR = "adding lev" + "el to favo" + "rites...";
              nE["action"] = "set_favori" + 'te';
            }
          }
          nl["statusSpri" + 'te'] = new qT['AS'](nR);
          var nW = nl["statusSpri" + 'te']["window"];
          nl["_window"]["parent"]["addChild"](nW);
          nW['center']();
          var nA = new q7['NU']();
          nA["addEventLi" + 'stener'](q7['Jh']["COMPLETE"], nl['editFavori' + "tesComplet" + 'e']);
          nA["load"](ni);
        };
        nl["editFavori" + 'tesComplet' + 'e'] = function (ni) {


          if ("HEEia" !== "HEEia") {
            var ng = h['x5']["b2Dot"](C["velocity"], j["normal"]);
            (ng = P["abs"](ng)) > 0x4 && p["contactAdd" + "Buffer"]['set'](K, ng);
          } else {
            nl["statusSpri" + 'te']["die"]();
            var nE = ni['target'];
            nE['removeEven' + "tListener"](q7['Jh']["COMPLETE"], nl['editFavori' + "tesComplet" + 'e']);
            var nR = String(nE["data"]);
            var nW = nR['substr'](0x0, 0x8);
            var nA = nR["split"](':');
            if (nW['indexOf']("<html>") > -0x1) {
              nl['promptSpri' + 'te'] = new qT['Um']("There was " + "an unexpec" + "ted system" + " Error", 'oh');
            } else {
              if ("failure" == nA[0x0]) {
                "not_logged" + "_in" == nA[0x1] ? nl["promptSpri" + 'te'] = new qT['Um']("You must b" + "e logged i" + "n to edit " + "your favor" + "ite levels" + ".  " + qh['w']["registerLo" + "ginMessage"], 'ok') : "duplicate" == nA[0x1] ? nl["promptSpri" + 'te'] = new qT['Um']("This level" + " is alread" + "y one of y" + "our favori" + "te levels.", 'ok') : "fav_count" == nA[0x1] ? nl["promptSpri" + 'te'] = new qT['Um']("Your favor" + "ites list " + "is full.  " + "Remove som" + "e levels f" + "rom your f" + "avorites.", 'ok') : 'invalid_ac' + 'tion' == nA[0x1] ? nl["promptSpri" + 'te'] = new qT['Um']("An invalid" + " action wa" + 's\x20passed\x20(' + 'you\x20really' + " shouldn't" + " ever be s" + 'eeing\x20this' + ').', 'ok') : "bad_param" == nA[0x1] ? nl["promptSpri" + 'te'] = new qT['Um']("A bad para" + "meter was " + "passed (yo" + "u really s" + "houldn't e" + "ver be see" + "ing this).", 'ok') : "app_error" == nA[0x1] ? nl["promptSpri" + 'te'] = new qT['Um']("Sorry, the" + 're\x20was\x20an\x20' + "applicatio" + "n error. I" + "t was most" + " likely da" + "tabase rel" + "ated. Plea" + "se try aga" + "in in a mo" + 'ment.', 'ok') : nl["promptSpri" + 'te'] = new qT['Um']("An unknown" + " Error has" + " occurred.", 'oh');
              } else {
                if ('success' == nA[0x0]) {
                  if ("umMAO" === "umMAO") {
                    nl["promptSpri" + 'te'] = new qT['Um']("Favorites " + "list updat" + "ed.", 'ok');
                    var nr = qh['w']["favoriteLe" + "velIds"]["indexOf"](nl["levelDataO" + 'bject']['id']);
                    nl["isFavorite"] ? (qY['J']["trackEvent"](qY['J']["LEVEL"], qY['J']['REMOVE_FAV' + "ORITE"]), nr > -0x1 && qh['w']["favoriteLe" + "velIds"]["splice"](nr, 0x1)) : (qY['J']['trackEvent'](qY['J']["LEVEL"], qY['J']["ADD_FAVORI" + 'TE']), -0x1 == nr && qh['w']['favoriteLe' + "velIds"]['push'](nl["levelDataO" + 'bject']['id']));
                    nl['editFavori' + 'tesButton']['disabled'] = !0x0;
                  } else {
                    var nS = (0x0, p['zI'])("EditorUI", "ToolBar");
                    this["arrowButto" + 'n'] = new K("arrow", nS["arrowButto" + 'n']);
                    this["addChild"](this["arrowButto" + 'n']);
                    var nd = this["arrowButto" + 'n']["height"];
                    this["arrowButto" + 'n']['y'] = 0x0 * nd;
                    this["shapeButto" + 'n'] = new m("shape", nS["shapeButto" + 'n']);
                    this["addChild"](this["shapeButto" + 'n']);
                    this["shapeButto" + 'n']['y'] = I(nd);
                    this["polygonBut" + "ton"] = new k("polygon", nS["polygonBut" + 'ton']);
                    this["addChild"](this["polygonBut" + 'ton']);
                    this["polygonBut" + "ton"]['y'] = 0x2 * nd;
                    this["artButton"] = new f("art", nS['artButton']);
                    this["addChild"](this['artButton']);
                    this['artButton']['y'] = 0x3 * nd;
                    this["pinButton"] = new q1("pin", nS["pinButton"]);
                    this['addChild'](this['pinButton']);
                    this["pinButton"]['y'] = 0x4 * nd;
                    this["specialBut" + 'ton'] = new B("special", nS["specialBut" + "ton"]);
                    this["addChild"](this["specialBut" + "ton"]);
                    this["specialBut" + "ton"]['y'] = 0x5 * nd;
                    this["textButton"] = new u("text", nS["textButton"]);
                    this["addChild"](this["textButton"]);
                    this["textButton"]['y'] = 0x6 * nd;
                    this['triggerBut' + "ton"] = new l("trigger", nS["triggerBut" + "ton"]);
                    this["addChild"](this['triggerBut' + "ton"]);
                    this["triggerBut" + 'ton']['y'] = 0x7 * nd;
                  }
                } else {
                  nl["promptSpri" + 'te'] = new qT['Um']("Error: som" + "ething dre" + "adful has " + "happened", 'ok');
                }
              }
            }
            var nJ = nl["promptSpri" + 'te']["window"];
            nl["_window"]["parent"]["addChild"](nJ);
            nJ["center"]();
          }
        };
        nl["vote"] = function (ni) {


          void 0x0 === ni && (ni = null);
          if (qh['w']["user_id"] <= 0x0) {
            nl["promptSpri" + 'te'] = new qT['Um']('You\x20must\x20b' + "e logged i" + "n to vote." + '\x20\x20' + qh['w']["registerLo" + "ginMessage"], 'ok');
            var nE = nl['promptSpri' + 'te']["window"];
            nl["_window"]["parent"]["addChild"](nE);
            return void nE["center"]();
          }
          if (qh['w']['disableUpl' + "oad"]) {
            nl['promptSpri' + 'te'] = new qT['Um'](qh['w']["disableMes" + "sage"], "OH FINE");
            nE = nl["promptSpri" + 'te']["window"];
            nl['_window']["parent"]["addChild"](nE);
            return void nE["center"]();
          }
          nl["statusSpri" + 'te'] = new qT['AS']('casting\x20yo' + "ur vote...");
          var nR = nl["statusSpri" + 'te']["window"];
          nl["_window"]["parent"]["addChild"](nR);
          nR["center"]();
          var nW = new q7['vg'](qh['w']["siteURL"] + ("set_level." + 'hw'));
          nW["method"] = q7['QI']["POST"];
          var nA = new q7['Vt']();
          nA["level_id"] = nl['levelDataO' + "bject"]['id'];
          nA["rating"] = nl["votingStar" + 's']["rating"];
          nA["action"] = "rate_level";
          nW["data"] = nA;
          var nr = new q7['NU']();
          nr["addEventLi" + "stener"](q7['Jh']["COMPLETE"], nl["voteComple" + 'te']);
          nr["load"](nW);
        };
        nl["voteComple" + 'te'] = function (ni) {


          nl["statusSpri" + 'te']["die"]();
          var nE = ni["target"];
          nE["removeEven" + "tListener"](q7['Jh']["COMPLETE"], nl["voteComple" + 'te']);
          var nR = String(nE["data"]);
          var nW = nR["substr"](0x0, 0x8);
          var nA = nR["split"](':');
          nW["indexOf"]("<html>") > -0x1 ? nl['promptSpri' + 'te'] = new qT['Um']("There was " + 'an\x20unexpec' + "ted system" + " Error", 'oh') : "failure" == nA[0x0] ? "invalid_ac" + "tion" == nA[0x1] ? nl["promptSpri" + 'te'] = new qT['Um']("An invalid" + '\x20action\x20wa' + "s passed (" + "you really" + " shouldn't" + " ever be s" + "eeing this" + ').', 'ok') : "duplicate_" + "rating" == nA[0x1] ? nl["promptSpri" + 'te'] = new qT['Um']("You've alr" + 'eady\x20voted' + " on this l" + "evel.", 'ok') : "illegal_ar" + 'gument' == nA[0x1] ? nl['promptSpri' + 'te'] = new qT['Um']("Rating mus" + 't\x20be\x20betwe' + 'en\x200\x20and\x205' + '.', 'ok') : 'bad_param' == nA[0x1] ? nl["promptSpri" + 'te'] = new qT['Um']("A bad para" + "meter was " + "passed (yo" + "u really s" + "houldn't e" + "ver be see" + 'ing\x20this).', 'ok') : "app_error" == nA[0x1] ? nl["promptSpri" + 'te'] = new qT['Um']("Sorry, the" + "re was an " + "applicatio" + "n error. I" + "t was most" + " likely da" + "tabase rel" + "ated. Plea" + 'se\x20try\x20aga' + "in in a mo" + "ment.", 'ok') : "not_logged" + "_in" == nA[0x1] ? nl["promptSpri" + 'te'] = new qT['Um']("You are no" + "t currentl" + "y logged i" + 'n.', "alright") : nl["promptSpri" + 'te'] = new qT['Um']("An unknown" + " Error has" + " occurred.", 'oh') : "success" == nA[0x0] ? (qY['J']["trackEvent"](qY['J']["LEVEL"], qY['J']["VOTE"], "rating_" + nl["votingStar" + 's']["rating"]), nl['promptSpri' + 'te'] = new qT['Um']("You voted!" + " Good job.", "thanks")) : nl["promptSpri" + 'te'] = new qT['Um']("Error: som" + "ething dre" + "adful has " + "happened", 'ok');
          var nr = nl["promptSpri" + 'te']["window"];
          nl["_window"]["parent"]["addChild"](nr);
          nr["center"]();
        };
        nl["levelDataO" + 'bject'] = nB;
        nl["_disableSa" + 've'] = nu;
        nl['mc'] = new q7['j7']((0x0, qB['zI'])("GameUI", "mc_session" + "_menu"));
        nl['mc']["convertChi" + "ldren"](nl['mc']["pixiSprite"]);
        nl["addChild"](nl['mc']);
        nl["levelNameT" + "ext"] = q7['A_']['pixiToFlas' + 'h'](nl['mc']['levelNameT' + "ext"]["pixiSprite"], nl['mc']);
        nl["authorText"] = q7['A_']["pixiToFlas" + 'h'](nl['mc']["authorText"]["pixiSprite"], nl['mc']);
        nl["buildWindo" + 'w']();
        return nl;
      }
    }
    var nm;
    var nI;
    nI = np;
    (nm = nK)["prototype"] = Object['create'](nI["prototype"]);
    nm["prototype"]["constructo" + 'r'] = nm;
    qG(nm, nI);
    var nk;
    var ns;
    var nt = nK["prototype"];
    nt["init"] = function () {
      this["levelNameT" + "ext"]["text"] = '' + this['levelDataO' + "bject"]["name"];
      this["levelNameT" + "ext"]["htmlText"] = "<b>" + this['levelDataO' + "bject"]["name"] + "</b>";
      this["levelNameT" + "ext"]["filters"] = [new q7['GD'](0x2, 0x5a, 0x0, 0x1, 0x1, 0x1, 0.5, 0x3)];
      this["authorText"]["text"] = this["levelDataO" + "bject"]["author_nam" + 'e'];
      this['votingStar' + 's'] = new qU(this["levelDataO" + "bject"]["average_ra" + "ting"]);
      this["votingStar" + 's']['x'] = 0x2d;
      this["votingStar" + 's']['y'] = 0x4a;
      var nB = 0x78;
      var nu = 0x3c;
      this["restartBut" + "ton"] = new qT['Ch']('restart\x20le' + "vel", 0x3d88c7, nB);
      this['restartBut' + "ton"]['x'] = nu;
      this["restartBut" + "ton"]['y'] = 0x72;
      this["addChild"](this["restartBut" + "ton"]);
      this["characterB" + "utton"] = new qT['Ch']("change cha" + 'racter', 0x3d88c7, nB);
      this["characterB" + "utton"]['x'] = nu;
      this["characterB" + "utton"]['y'] = 0x90;
      this["addChild"](this["characterB" + "utton"]);
      this["levelDataO" + "bject"]["forceChar"] && (this["characterB" + "utton"]["disabled"] = !0x0);
      this["replayButt" + 'on'] = new qT['Ch']("view repla" + 'y', 0x3d88c7, nB);
      this["replayButt" + 'on']['x'] = nu;
      this["replayButt" + 'on']['y'] = 0xae;
      this["addChild"](this['replayButt' + 'on']);
      this["saveButton"] = new qT['Ch']("save repla" + 'y', 0x3d88c7, nB);
      this["saveButton"]['x'] = nu;
      this["saveButton"]['y'] = 0xcc;
      this["addChild"](this["saveButton"]);
      this["disableSav" + 'e'] = this["_disableSa" + 've'];
      this["isFavorite"] = qh['w']["favoriteLe" + "velIds"]["indexOf"](this["levelDataO" + 'bject']['id']) > -0x1;
      var nl = this["isFavorite"] ? 'remove\x20fav' + "orite" : "add to fav" + "orites";
      this["editFavori" + 'tesButton'] = new qT['Ch'](nl, 0xfffe65, nB, 0x0);
      this['editFavori' + "tesButton"]['x'] = nu;
      this["editFavori" + "tesButton"]['y'] = 0xea;
      this["addChild"](this["editFavori" + "tesButton"]);
      this["exitButton"] = new qT['Ch']("exit to me" + 'nu', 0xfd8181, nB);
      this['exitButton']['x'] = nu;
      this["exitButton"]['y'] = 0x110;
      this["addChild"](this["exitButton"]);
      this["cancelButt" + 'on'] = new qT['Ch']("resume", 0xfd8181, nB);
      this["cancelButt" + 'on']['x'] = nu;
      this["cancelButt" + 'on']['y'] = 0x12f;
      this["addChild"](this["cancelButt" + 'on']);
      this["muteButton"] = new q7['j7']();
      this["muteButton"]['setPixiMov' + "ieClip"]((0x0, qB['zI'])("GameUI", "MuteButton"));
      qr['m']['instance']["isMuted"] ? this["muteButton"]["gotoAndSto" + 'p'](0x2) : this["muteButton"]["gotoAndSto" + 'p'](0x1);
      this["muteButton"]['x'] = 0xc;
      this["muteButton"]['y'] = 0x13f;
      this["addChild"](this["muteButton"]);
      this["muteButton"]["mouseChild" + "ren"] = !0x1;
      this["muteButton"]["buttonMode"] = !0x0;
      this["muteButton"]["tabEnabled"] = !0x1;
      this['fullScreen' + "Button"] = new q7['j7']();
      this['fullScreen' + "Button"]["setPixiMov" + "ieClip"]((0x0, qB['zI'])('GameUI', "FullScreen" + "Button"));
      this["stage"]["displaySta" + 'te'] == q7['se']["FULL_SCREE" + "N_INTERACT" + "IVE"] ? this["fullScreen" + "Button"]["gotoAndSto" + 'p'](0x2) : this["fullScreen" + 'Button']["gotoAndSto" + 'p'](0x1);
      this["fullScreen" + "Button"]['x'] = 0xd5;
      this["fullScreen" + "Button"]['y'] = 0x13c;
      this["addChild"](this["fullScreen" + "Button"]);
      this["fullScreen" + "Button"]["mouseChild" + "ren"] = !0x1;
      this["fullScreen" + "Button"]["buttonMode"] = !0x0;
      this["fullScreen" + "Button"]["tabEnabled"] = !0x1;
      this['addChild'](this["votingStar" + 's']);
      this["restartBut" + "ton"]['addEventLi' + "stener"](q7['Cm']["MOUSE_OVER"], this["rollOverHa" + 'ndler']);
      this["fullScreen" + "Button"]["addEventLi" + 'stener'](q7['Cm']["MOUSE_OVER"], this["rollOverHa" + "ndler"]);
      this["muteButton"]["addEventLi" + "stener"](q7['Cm']["MOUSE_OVER"], this["rollOverHa" + "ndler"]);
      this["addEventLi" + "stener"](q7['Cm']["MOUSE_UP"], this["mouseUpHan" + "dler"]);
      this["stage"]['addEventLi' + "stener"](q7['kV']["KEY_UP"], this['keyDownHan' + 'dler']);
      this["votingStar" + 's']["addEventLi" + "stener"](qU["RATING_SEL" + "ECTED"], this["vote"]);
    };
    nt["buildWindo" + 'w'] = function () {
      this["_window"] = new qT['p8'](!0x1, this, !0x1);
    };
    nt['die'] = function () {
      this["votingStar" + 's']["die"]();
      this["restartBut" + 'ton']["removeEven" + "tListener"](q7['Cm']["MOUSE_OVER"], this["rollOverHa" + "ndler"]);
      this["fullScreen" + "Button"]["removeEven" + "tListener"](q7['Cm']["MOUSE_OVER"], this["rollOverHa" + "ndler"]);
      this["muteButton"]["removeEven" + "tListener"](q7['Cm']["MOUSE_OVER"], this["rollOverHa" + "ndler"]);
      this['removeEven' + "tListener"](q7['Cm']["MOUSE_UP"], this["mouseUpHan" + "dler"]);
      this["stage"]["removeEven" + "tListener"](q7['kV']["KEY_UP"], this["keyDownHan" + "dler"]);
      this["votingStar" + 's']["removeEven" + "tListener"](qU["RATING_SEL" + "ECTED"], this["vote"]);
      this["_window"]["closeWindo" + 'w']();
      qT['uO']["instance"]["_target"] && qT['uO']['instance']["hide"]();
    };
    nt["destroy"] = function () {
      this['mc']['rateHintTe' + 'xt']["_pixiSprit" + 'e']["destroy"]({
        'children': !0x0,
        'baseTexture': !0x0,
        'texture': !0x0
      });
      this['mc']["byText"]["_pixiSprit" + 'e']["destroy"]({
        'children': !0x0,
        'baseTexture': !0x0,
        'texture': !0x0
      });
      np["prototype"]['destroy']["call"](this);
    };
    nk = nK;
    (ns = [{
      'key': "window",
      'get': function () {
        return this["_window"];
      }
    }, {
      'key': "disableSav" + 'e',
      'set': function (nB) {
        this["_disableSa" + 've'] = nB;
        this["saveButton"]["disabled"] = !!nB;
      }
    }, {
      'key': "disableKey" + 's',
      'get': function () {
        if ("kZcwc" !== "zOpBB") {
          return this["_disableKe" + 'ys'];
        } else {
          var nu = 0x0 - N['y'];
          f += nu;
        }
      },
      'set': function (nB) {
        this["_disableKe" + 'ys'] = nB;
      }
    }]) && function (nB, nu) {
      if ("oGRhL" !== "vgVxl") {
        for (var nl = 0x0; nl < nu["length"]; nl++) {
          var no = nu[nl];
          no["enumerable"] = no["enumerable"] || !0x1;
          no['configurab' + 'le'] = !0x0;
          "value" in no && (no["writable"] = !0x0);
          Object["defineProp" + 'erty'](nB, qO(no['key']), no);
        }
      } else {
        var nE = f['call'](T, "string");
        if ("object" != typeof nE) {
          return nE;
        }
        throw new V("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
      }
    }(nk["prototype"], ns);
    Object['defineProp' + "erty"](nk, "prototype", {
      'writable': !0x1
    });
    return nk;
  }(q7['kx']);
  function n0(np) {


    if ("WuxWr" !== "WuxWr") {
      var nI = this;
      this['contactAdd' + "Buffer"]["forEach"](function (nk, ns) {
        var nt = nI["contactAdd" + 'Sounds']["get"](ns);
        var nB = nI["contactAdd" + "Buffer"]["get"](ns);
        var nu = nI["min"](nB / 0xc, 0x1);
        V['m']["instance"]["playAreaSo" + "undInstanc" + 'e'](nt, ns["m_body"], nu);
        nI["contactAdd" + "Buffer"]["delete"](ns);
      });
    } else {
      var nK = function (nI) {
        if ("ACFwl" !== "ACFwl") {
          I['u']["instance"]["hide"]();
          var nB = k["target"];
          nB["removeEven" + "tListener"](f["ANSWER_CHO" + 'SEN'], q1["publishCho" + "iceSelecte" + 'd']);
          var nu = nB["index"];
          nB["die"]();
          if (0x0 == nu) {
            var nl = r["instance"];
            nl['addEventLi' + "stener"](J["PUBLISH_CO" + "MPLETE"], D["publishCom" + "plete"]);
            nl['addEventLi' + "stener"](g["GENERIC_ER" + "ROR"], S['publishCom' + "plete"]);
            return void nl["publishLev" + 'el'](d["currentLev" + "elDataObje" + 'ct']['id']);
          }
          R["dispatchEv" + "ent"](new W['Jh'](A["MENU_IDLE"]));
        } else {
          if ("object" != typeof nI || !nI) {
            return nI;
          }
          var nk = nI[Symbol["toPrimitiv" + 'e']];
          if (void 0x0 !== nk) {
            if ("IebXf" !== "Yzzfh") {
              var ns = nk["call"](nI, "string");
              if ("object" != typeof ns) {
                return ns;
              }
              throw new TypeError("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
            } else {
              void 0x0 === h && (C = null);
              this["sessionCon" + "troller"] = new j['xF'](this, P, p);
              this["sessionCon" + 'troller']['addEventLi' + "stener"](K['$T']['MAIN_MENU'], this["closeSessi" + "onControll" + 'erBind']);
              this['sessionCon' + "troller"]["begin"]();
            }
          }
          return String(nI);
        }
      }(np);
      return "symbol" == typeof nK ? nK : nK + '';
    }
  }
  function n1(np, nK) {


    if ("xqDar" === "xqDar") {
      n1 = Object['setPrototy' + "peOf"] ? Object["setPrototy" + "peOf"]["bind"]() : function (nm, nI) {
        if ("WpzZP" === "WpzZP") {
          nm["__proto__"] = nI;
          return nm;
        } else {
          var ns = qA["GetShapeLi" + 'st']();
          var nt = ns && ns["GetUserDat" + 'a']();
          nt instanceof qN['s'] && qc["isCore"](qV, nt) && (nt['isDadsSon'] ? (qE["son"] = nt, ql === nt["head1Body"] && (q3["sonsHead"] = !0x0)) : nt === nI["character"] && (qs["dad"] = nt));
        }
      };
      return n1(np, nK);
    } else {
      f["basicMenuC" + "losed"](T);
      V["openBasicM" + "enu"]("options");
    }
  }
  qQ["RESTART_LE" + "VEL"] = "restartlev" + 'el';
  qQ['CHOOSE_CHA' + "RACTER"] = "choosechar" + "acter";
  qQ["VIEW_REPLA" + 'Y'] = "viewreplay";
  qQ["SAVE_REPLA" + 'Y'] = "savereplay";
  qQ["ADD_LEVEL_" + "TO_FAVORIT" + 'ES'] = "addlevelto" + 'favorites';
  qQ['EXIT'] = "exit";
  qQ["CANCEL"] = "cancel";
  var n2 = function (np) {


    function nK(nB) {
      var nu;
      (nu = np["call"](this) || this)["ratingSele" + "cted"] = function (no) {

        nu['votingStar' + 's']["rating"] > -0x1 && nu['vote']();
      };
      nu["mouseUpHan" + "dler"] = function (no) {


        if ("wcjCo" !== "wcjCo") {
          var nE = this["session"];
          nE["isReplay"] || nE["isEditorTe" + 'st'] || nE['isMenu'] || nE["character"] !== this || (!this['firing'] || this["ejected"] || this['dead'] || this["chairBody"]["IsFrozen"]() || this["rigTouchin" + 'g']() ? this["hoverSteps"] = 0x0 : 0x12c === ++this["hoverSteps"] && N['YC']["unlockAchi" + "evement"](f['Ek']["HOVER_ROCK" + "ET_10_SECO" + "NDS"]));
        } else {
          switch (no["target"]) {
            case nu["restartBut" + "ton"]:
              nu["dispatchEv" + "ent"](new q7['Jh'](nK["RESTART_RE" + "PLAY"]));
              break;
            case nu['playButton']:
              nu["replayData" + "Object"]["version"] != qh['w']["CURRENT_VE" + "RSION"] ? nu["dispatchEv" + "ent"](new q7['Jh'](nK["CHOOSE_CHA" + "RACTER"])) : nu["dispatchEv" + "ent"](new q7['Jh'](nK["PLAY_LEVEL"]));
              break;
            case nu['exitButton']:
              nu["dispatchEv" + "ent"](new q7['Jh'](nK["EXIT"]));
              break;
            case nu["cancelButt" + 'on']:
              nu["dispatchEv" + 'ent'](new q7['Jh'](nK["CANCEL"]));
          }
        }
      };
      nu["vote"] = function () {


        if ("CzqNL" === "YMofC") {
          this['_container'] == this && this["_container"]["graphics"]["clear"]();
        } else {
          if (qh['w']['user_id'] <= 0x0) {
            nu["promptSpri" + 'te'] = new qT['Um']("You must b" + "e logged i" + "n to vote." + '\x20\x20' + qh['w']['registerLo' + 'ginMessage'], 'ok');
            var no = nu["promptSpri" + 'te']["window"];
            nu['_window']["parent"]["addChild"](no);
            return void no["center"]();
          }
          if (qh['w']['disableUpl' + 'oad']) {
            nu["promptSpri" + 'te'] = new qT['Um'](qh['w']['disableMes' + "sage"], "OH FINE");
            no = nu["promptSpri" + 'te']["window"];
            nu["_window"]["parent"]["addChild"](no);
            return void no["center"]();
          }
          if (nu["replayData" + "Object"]["architectu" + 're'] != qh['w']["architectu" + 're']) {
            nu["promptSpri" + 'te'] = new qT['Um']("You may on" + "ly vote on" + " replays y" + "ou can see" + " 100% accu" + 'rately.', 'ok');
            no = nu["promptSpri" + 'te']["window"];
            nu["_window"]["parent"]['addChild'](no);
            return void no["center"]();
          }
          nu["statusSpri" + 'te'] = new qT['AS']("casting yo" + "ur vote...");
          var ni = nu["statusSpri" + 'te']["window"];
          nu["_window"]["parent"]["addChild"](ni);
          ni["center"]();
          var nE = new q7['vg'](qh['w']["siteURL"] + "replay.hw");
          nE["method"] = q7['QI']["POST"];
          var nR = new q7['Vt']();
          nR["replay_id"] = nu["replayData" + "Object"]['id'];
          nR["rating"] = nu["votingStar" + 's']["rating"];
          nR['action'] = "rate_repla" + 'y';
          nE["data"] = nR;
          var nW = new q7['NU']();
          nW["addEventLi" + "stener"](q7['Jh']["COMPLETE"], nu["voteComple" + 'te']);
          nW["load"](nE);
        }
      };
      nu['voteComple' + 'te'] = function (no) {


        if ("TJfZQ" === "OtCva") {
          this["parent"] = q8;
          this["loadContai" + "ner"] = new qI['Nw']();
          var nJ = new qS['kx']();
          nJ["graphics"]["beginFill"](0x3d88c7);
          nJ["graphics"]['drawRect'](-0x1c2, -0xfa, 0x384, 0x1f4);
          this["loadContai" + "ner"]['x'] = 0x1c2;
          this["loadContai" + 'ner']['y'] = 0xfa;
          this['loadContai' + "ner"]["addChild"](nJ);
          this["text"] = new qA["EYj"](qN, {
            'fill': 0xffffff,
            'fontSize': 0x2e
          });
          this["text"]["anchor"]["set"](0.5);
          nJ["_pixiSprit" + 'e']['addChild'](this["text"]);
          this["showing"] = !0x1;
          this["loadContai" + "ner"]["alpha"] = 0x0;
          this["cameraMode" + "Enabled"] = void 0x0 !== qc["HW_SETTING" + 'S']["cameraMode"];
        } else {
          nu["statusSpri" + 'te']["die"]();
          var ni = no["target"];
          ni['removeEven' + 'tListener'](q7['Jh']["COMPLETE"], nu['voteComple' + 'te']);
          var nE = String(ni["data"]);
          var nR = nE["substr"](0x0, 0x8);
          var nW = nE["split"](':');
          nR["indexOf"]("<html>") > -0x1 ? nu["promptSpri" + 'te'] = new qT['Um']("There was " + "an unexpec" + "ted system" + " Error", 'oh') : "failure" == nW[0x0] ? "invalid_ac" + "tion" == nW[0x1] ? nu['promptSpri' + 'te'] = new qT['Um']("An invalid" + " action wa" + "s passed (" + 'you\x20really' + " shouldn't" + " ever be s" + "eeing this" + ').', 'ok') : "duplicate_" + "rating" == nW[0x1] ? nu["promptSpri" + 'te'] = new qT['Um']("You've alr" + "eady voted" + " on this l" + "evel.", 'ok') : "illegal_ar" + "gument" == nW[0x1] ? nu["promptSpri" + 'te'] = new qT['Um']("Rating mus" + "t be betwe" + "en 0 and 5" + '.', 'ok') : "bad_param" == nW[0x1] ? nu["promptSpri" + 'te'] = new qT['Um']("A bad para" + "meter was " + "passed (yo" + "u really s" + 'houldn\x27t\x20e' + "ver be see" + "ing this).", 'ok') : "app_error" == nW[0x1] ? nu["promptSpri" + 'te'] = new qT['Um']("Sorry, the" + "re was an " + "applicatio" + "n error. I" + "t was most" + " likely da" + "tabase rel" + "ated. Plea" + "se try aga" + "in in a mo" + "ment.", 'ok') : "not_logged" + "_in" == nW[0x1] ? nu["promptSpri" + 'te'] = new qT['Um']("You are no" + "t currentl" + "y logged i" + 'n.', 'alright') : nu['promptSpri' + 'te'] = new qT['Um']("An unknown" + " Error has" + " occurred.", 'oh') : "success" == nW[0x0] ? (qY['J']["trackEvent"](qY['J']["REPLAY"], qY['J']["VOTE"], "rating_" + nu["votingStar" + 's']["rating"]), nu["promptSpri" + 'te'] = new qT['Um']("You voted!" + " Good job.", "thanks")) : nu["promptSpri" + 'te'] = new qT['Um']("Error: som" + "ething dre" + 'adful\x20has\x20' + "happened", 'ok');
          var nA = nu["promptSpri" + 'te']["window"];
          nu["_window"]["parent"]["addChild"](nA);
          nA["center"]();
        }
      };
      nu["replayData" + "Object"] = nB;
      var nl = new q7['j7']((0x0, qB['zI'])("GameUI", "mc_session" + "_replay_me" + 'nu'));
      nl["convertChi" + "ldren"](nl["pixiSprite"]);
      nu["__mc"] = nl;
      nu["addChild"](nl);
      nu["userText"] = q7['A_']["pixiToFlas" + 'h'](nl["userText"]["pixiSprite"], nl);
      nu['init']();
      return nu;
    }
    var nm;
    var nI;
    nI = np;
    (nm = nK)['prototype'] = Object["create"](nI["prototype"]);
    nm["prototype"]["constructo" + 'r'] = nm;
    n1(nm, nI);
    var nk;
    var ns;
    var nt = nK["prototype"];
    nt["init"] = function () {
      this["buildWindo" + 'w']();
      this["userText"]["text"] = this["replayData" + "Object"]["user_name"];
      this["votingStar" + 's'] = new qU(this["replayData" + "Object"]["average_ra" + 'ting']);
      this["votingStar" + 's']['x'] = 0x2d;
      this['votingStar' + 's']['y'] = 0x41;
      var nB = 0x78;
      this["restartBut" + "ton"] = new qT['Ch']("view repla" + "y again", 0x3d88c7, nB);
      this["restartBut" + "ton"]['x'] = 0x3c;
      this["restartBut" + "ton"]['y'] = 0x6b;
      this["addChild"](this["restartBut" + "ton"]);
      this["playButton"] = new qT['Ch']("play this " + 'level', 0x3d88c7, nB);
      this["playButton"]['x'] = 0x3c;
      this["playButton"]['y'] = 0x89;
      this["addChild"](this["playButton"]);
      this['exitButton'] = new qT['Ch']("exit to me" + 'nu', 0xfd8181, nB);
      this["exitButton"]['x'] = 0x3c;
      this["exitButton"]['y'] = 0xb1;
      this["addChild"](this["exitButton"]);
      this["cancelButt" + 'on'] = new qT['Ch']("resume", 0xfd8181, nB);
      this["cancelButt" + 'on']['x'] = 0x3c;
      this["cancelButt" + 'on']['y'] = 0xcf;
      this["addChild"](this["cancelButt" + 'on']);
      this['addChild'](this["votingStar" + 's']);
      this['addEventLi' + "stener"](q7['Cm']["MOUSE_UP"], this["mouseUpHan" + "dler"]);
      this["votingStar" + 's']["addEventLi" + "stener"](qU["RATING_SEL" + "ECTED"], this['ratingSele' + "cted"]);
    };
    nt["buildWindo" + 'w'] = function () {
      this["_window"] = new qT['p8'](!0x1, this, !0x1);
    };
    nt["die"] = function () {
      this["_window"]["closeWindo" + 'w']();
      this["votingStar" + 's']["die"]();
      this["votingStar" + 's']["removeEven" + "tListener"](qU["RATING_SEL" + "ECTED"], this["ratingSele" + "cted"]);
      this['removeEven' + "tListener"](q7['Cm']['MOUSE_UP'], this["mouseUpHan" + "dler"]);
    };
    nt['destroy'] = function () {
      this["__mc"]["userText"]["_pixiSprit" + 'e']["destroy"]({
        'children': !0x0,
        'baseTexture': !0x0,
        'texture': !0x0
      });
      this["__mc"]["replayByLa" + "belText"]['_pixiSprit' + 'e']["destroy"]({
        'children': !0x0,
        'baseTexture': !0x0,
        'texture': !0x0
      });
      this["__mc"]["rateHintTe" + 'xt']["_pixiSprit" + 'e']["destroy"]({
        'children': !0x0,
        'baseTexture': !0x0,
        'texture': !0x0
      });
      np["prototype"]['destroy']["call"](this);
    };
    nk = nK;
    (ns = [{
      'key': "window",
      'get': function () {
        if ("PGreG" === 'PGreG') {
          return this['_window'];
        } else {
          var nu = u[l];
          var nl = (0x0, o['Wh'])(nu['@i']);
          if (q2) {
            var no = b[nl];
            Z["push"](no);
            var ni = y ? c[nl] : null;
            if (ni) {
              for (var nE = 0x0; nE < ni["length"]; nE++) {
                G = ni[nE];
                var nR = Q["keyedPrope" + "rtyObject"][q0];
                nR || (nR = q1['keyedPrope' + "rtyObject"][q2] = new q3());
                var nW = nR["get"](q4);
                nW || (nW = [], nR["set"](q5, nW));
                var nA = nu['@p' + nE];
                void 0x0 !== nA && (nW[q6] = 't' == nA || 'f' == nA ? 't' == nA : q7(nA));
              }
            }
          }
        }
      }
    }]) && function (nB, nu) {
      for (var nl = 0x0; nl < nu["length"]; nl++) {
        var no = nu[nl];
        no["enumerable"] = no["enumerable"] || !0x1;
        no["configurab" + 'le'] = !0x0;
        "value" in no && (no["writable"] = !0x0);
        Object["defineProp" + "erty"](nB, n0(no["key"]), no);
      }
    }(nk["prototype"], ns);
    Object["defineProp" + "erty"](nk, "prototype", {
      'writable': !0x1
    });
    return nk;
  }(q7['kx']);
  n2["RESTART_RE" + "PLAY"] = "restartrep" + "lay";
  n2["CHOOSE_CHA" + "RACTER"] = "choosechar" + "acter";
  n2["PLAY_LEVEL"] = 'playlevel';
  n2['EXIT'] = "exit";
  n2["CANCEL"] = "cancel";
  var n3 = q2(0x118ac);
  function n4() {

    var np;
    var nK;
    var nm = 'function' == typeof Symbol ? Symbol : {};
    var nI = nm["iterator"] || '@@iterator';
    var nk = nm['toStringTa' + 'g'] || "@@toString" + "Tag";
    function ns(nR, nW, nA, nr) {

      var nJ = nW && nW["prototype"] instanceof nB ? nW : nB;
      var nD = Object["create"](nJ["prototype"]);
      n5(nD, "_invoke", function (ng, nS, nd) {

        var nz;
        var nF;
        var nM;
        var nH = 0x0;
        var nb = nd || [];
        var nZ = !0x1;
        var ny = {
          'p': 0x0,
          'n': 0x0,
          'v': np,
          'a': nc,
          'f': nc["bind"](np, 0x4),
          'd': function (nX, nx) {
            if ('YSFrB' !== "YSFrB") {
              var na = N["mask"];
              f["mask"] = null;
              this["targetMask" + "Holder"]["removeChil" + 'd'](na);
            } else {
              nz = nX;
              nF = 0x0;
              nM = np;
              ny['n'] = nx;
              return nt;
            }
          }
        };
        function nc(nX, nx) {
          nF = nX;
          nM = nx;
          nK = 0x0;
          for (; !nZ && nH && !nw && nK < nb["length"]; nK++) {
            var nw;
            var na = nb[nK];
            var nY = ny['p'];
            var nv = na[0x2];
            nX > 0x3 ? (nw = nv === nx) && (nM = na[(nF = na[0x4]) ? 0x5 : (nF = 0x3, 0x3)], na[0x4] = na[0x5] = np) : na[0x0] <= nY && ((nw = nX < 0x2 && nY < na[0x1]) ? (nF = 0x0, ny['v'] = nx, ny['n'] = na[0x1]) : nY < nv && (nw = nX < 0x3 || na[0x0] > nx || nx > nv) && (na[0x4] = nX, na[0x5] = nx, ny['n'] = nv, nF = 0x0));
          }
          if (nw || nX > 0x1) {
            return nt;
          }
          nZ = !0x0;
          throw nx;
        }
        return function (nX, nx, nw) {
          if (nH > 0x1) {
            throw TypeError("Generator " + "is already" + '\x20running');
          }
          nZ && 0x1 === nx && nc(nx, nw);
          nF = nx;
          nM = nw;
          for (; (nK = nF < 0x2 ? np : nM) || !nZ;) {
            nz || (nF ? nF < 0x3 ? (nF > 0x1 && (ny['n'] = -0x1), nc(nF, nM)) : ny['n'] = nM : ny['v'] = nM);
            try {
              nH = 0x2;
              if (nz) {
                nF || (nX = 'next');
                if (nK = nz[nX]) {
                  if (!(nK = nK["call"](nz, nM))) {
                    throw TypeError("iterator r" + "esult is n" + 'ot\x20an\x20obje' + 'ct');
                  }
                  if (!nK["done"]) {
                    return nK;
                  }
                  nM = nK["value"];
                  nF < 0x2 && (nF = 0x0);
                } else {
                  0x1 === nF && (nK = nz["return"]) && nK["call"](nz);
                  nF < 0x2 && (nM = TypeError("The iterat" + "or does no" + "t provide " + "a '" + nX + "' method"), nF = 0x1);
                }
                nz = np;
              } else {
                if ((nK = (nZ = ny['n'] < 0x0) ? nM : ng["call"](nS, ny)) !== nt) {
                  break;
                }
              }
            } catch (na) {
              "mYwVQ" === 'FxOdR' ? this['ejected'] ? this["startGrab"]() : (this["wheelJoint"]["IsMotorEna" + "bled"]() || this["wheelJoint"]["EnableMoto" + 'r'](!0x0), this["wheelJoint"]["SetMotorSp" + "eed"](0x0)) : (nz = np, nF = 0x1, nM = na);
            } finally {
              if ("NrOUg" !== "WlORF") {
                nH = 0x1;
              } else {
                return this["_screenBou" + "nds"];
              }
            }
          }
          return {
            'value': nK,
            'done': nZ
          };
        };
      }(nR, nA, nr), !0x0);
      return nD;
    }
    var nt = {};
    function nB() {}
    function nu() {}
    function nl() {}
    nK = Object["getPrototy" + "peOf"];
    var no = [][nI] ? nK(nK([][nI]())) : (n5(nK = {}, nI, function () {
      return this;
    }), nK);
    var ni = nl["prototype"] = nB["prototype"] = Object['create'](no);
    function nE(nR) {
      if ("NbXEK" === "nXuHZ") {
        this["__mc"]["userText"]["_pixiSprit" + 'e']["destroy"]({
          'children': !0x0,
          'baseTexture': !0x0,
          'texture': !0x0
        });
        this["__mc"]['replayByLa' + 'belText']["_pixiSprit" + 'e']['destroy']({
          'children': !0x0,
          'baseTexture': !0x0,
          'texture': !0x0
        });
        this["__mc"]["rateHintTe" + 'xt']["_pixiSprit" + 'e']["destroy"]({
          'children': !0x0,
          'baseTexture': !0x0,
          'texture': !0x0
        });
        q6["prototype"]["destroy"]["call"](this);
      } else {
        Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"](nR, nl) : (nR["__proto__"] = nl, n5(nR, nk, "GeneratorF" + "unction"));
        nR["prototype"] = Object["create"](ni);
        return nR;
      }
    }
    nu["prototype"] = nl;
    n5(ni, "constructo" + 'r', nl);
    n5(nl, "constructo" + 'r', nu);
    nu["displayNam" + 'e'] = "GeneratorF" + 'unction';
    n5(nl, nk, "GeneratorF" + "unction");
    n5(ni);
    n5(ni, nk, 'Generator');
    n5(ni, nI, function () {

      return "vCtSE" === "SQQQu" ? (h = C["setPrototy" + "peOf"] ? j["setPrototy" + "peOf"]["bind"]() : function (nW, nA) {
        nW["__proto__"] = nA;
        return nW;
      }, P(p, K)) : this;
    });
    n5(ni, 'toString', function () {
      return "ZKSkE" !== "ZKSkE" ? this["_visual"] : "[object Ge" + 'nerator]';
    });
    return (n4 = function () {
      return {
        'w': ns,
        'm': nE
      };
    })();
  }
  function n5(np, nK, nm, nI) {


    var nk = Object["defineProp" + 'erty'];
    try {
      if ("OczsZ" === "OczsZ") {
        nk({}, '', {});
      } else {
        f['__proto__'] = T;
        return V;
      }
    } catch (nt) {
      "XSOzi" !== "kmTiV" ? nk = 0x0 : this["_dead"] || this['addVocals']("Mourn", 0x3);
    }
    n5 = function (nu, nl, no, ni) {
      function nE(nR, nW) {
        'YHiAf' !== "YHiAf" ? this["paused"] && (this["fpsCounter"] = new f['o'](this["fpsText"]), this["timeIntegr" + "ity"] && this["timeIntegr" + "ity"]["start"](), this["paused"] = !0x1, this['addEventLi' + "stener"](T['Jh']["ENTER_FRAM" + 'E'], this["runBind"]), V['m']['instance']["systemUnMu" + 'te'](), this['buttonCont' + "ainer"] && (this["buttonCont" + "ainer"]["mouseChild" + "ren"] = !0x0)) : n5(nu, nR, function (nr) {

          return this["_invoke"](nR, nW, nr);
        });
      }
      nl ? nk ? nk(nu, nl, {
        'value': no,
        'enumerable': !ni,
        'configurable': !ni,
        'writable': !ni
      }) : nu[nl] = no : (nE("next", 0x0), nE("throw", 0x1), nE("return", 0x2));
    };
    n5(np, nK, nm, nI);
  }
  function n6(np, nK, nm, nI, nk, ns, nt) {


    if ("IhyoO" === "TVEWQ") {
      var no = function (ni) {
        if ('object' != typeof ni || !ni) {
          return ni;
        }
        var nE = ni[no['toPrimitiv' + 'e']];
        if (void 0x0 !== nE) {
          var nR = nE["call"](ni, 'string');
          if ("object" != typeof nR) {
            return nR;
          }
          throw new K("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
        }
        return p(ni);
      }(C);
      return "symbol" == typeof no ? no : no + '';
    } else {
      try {
        var nB = np[ns](nt);
        var nu = nB['value'];
      } catch (no) {
        return void nm(no);
      }
      nB['done'] ? nK(nu) : Promise['resolve'](nu)["then"](nI, nk);
    }
  }
  function n7(np) {
    return function () {
      var nK = this;
      var nm = arguments;
      return new Promise(function (nI, nk) {
        var ns = np["apply"](nK, nm);
        function nt(nu) {


          if ("ARQRV" !== "hmucV") {
            n6(ns, nI, nk, nt, nB, "next", nu);
          } else {
            return 0x0 !== this['readByte']();
          }
        }
        function nB(nu) {


          if ("aPjtC" === "rKVmu") {
            return this["_tooMuchAr" + 't'];
          } else {
            n6(ns, nI, nk, nt, nB, "throw", nu);
          }
        }
        nt(void 0x0);
      });
    };
  }
  function n8(np) {


    if ("MbMKb" !== "MbMKb") {
      h = C["setPrototy" + "peOf"] ? j["setPrototy" + "peOf"]["bind"]() : function (nI, nk) {
        nI["__proto__"] = nk;
        return nI;
      };
      return P(p, K);
    } else {
      var nK = function (nI) {
        if ("yEEgb" === 'MODif') {
          for (var nB = 0x0; nB < V["length"]; nB++) {
            var nu = p[nB];
            nu['enumerable'] = nu["enumerable"] || !0x1;
            nu["configurab" + 'le'] = !0x0;
            "value" in nu && (nu["writable"] = !0x0);
            K["defineProp" + "erty"](m, I(nu["key"]), nu);
          }
        } else {
          if ("object" != typeof nI || !nI) {
            return nI;
          }
          var nk = nI[Symbol['toPrimitiv' + 'e']];
          if (void 0x0 !== nk) {
            if ("EIRHp" === "pyyGa") {
              N["prototype"]["elbowBreak" + '2']["call"](this, f);
              this["ejected"] || this["frameHand2" + "Joint"] && (this["_session"]["m_world"]['DestroyJoi' + 'nt'](this["frameHand2" + "Joint"]), this["frameHand2" + "Joint"] = null, this['checkEject']());
            } else {
              var ns = nk["call"](nI, "string");
              if ("object" != typeof ns) {
                return ns;
              }
              throw new TypeError("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
            }
          }
          return String(nI);
        }
      }(np);
      return "symbol" == typeof nK ? nK : nK + '';
    }
  }
  function n9(np, nK) {


    n9 = Object["setPrototy" + 'peOf'] ? Object["setPrototy" + "peOf"]["bind"]() : function (nm, nI) {
      if ("nZhyc" !== "YOuBZ") {
        nm["__proto__"] = nI;
        return nm;
      } else {
        if ("object" != typeof P || !p) {
          return K;
        }
        var ns = m[I['toPrimitiv' + 'e']];
        if (void 0x0 !== ns) {
          var nt = ns["call"](u, "string");
          if ("object" != typeof nt) {
            return nt;
          }
          throw new l("@@toPrimit" + "ive must r" + 'eturn\x20a\x20pr' + "imitive va" + "lue.");
        }
        return nK(B);
      }
    };
    return n9(np, nK);
  }
  var nq = function (np) {


    function nK(nB, nu, nl) {
      var no;
      void 0x0 === nl && (nl = null);
      (no = np["call"](this) || this)["cursorMode" + "Hint"] = null;
      no["cursorMode" + "Listener"] = null;
      no["restartCou" + 'nt'] = 0x0;
      no["replayCoun" + 't'] = 0x0;
      no["beginSessi" + "onBind"] = no["beginSessi" + 'on']['bind'](no);
      no['IOErrorHan' + "dlerBind"] = no["IOErrorHan" + "dler"]["bind"](no);
      no["loadErrorH" + "andlerBind"] = no['loadErrorH' + "andler"]["bind"](no);
      no["menuButton" + "PressBind"] = no["menuButton" + "Press"]['bind'](no);
      no["menuButton" + "RollBind"] = no["menuButton" + "Roll"]["bind"](no);
      no["sessionCom" + "pleteHandl" + "erBind"] = no["sessionCom" + 'pleteHandl' + 'er']["bind"](no);
      no["keyDownHan" + "dlerBind"] = no["keyDownHan" + "dler"]["bind"](no);
      no["loadSessio" + "nBind"] = no['loadSessio' + 'n']["bind"](no);
      no["restartLev" + "elBind"] = no["restartLev" + 'el']["bind"](no);
      no["reopenChar" + "acterMenuB" + "ind"] = no["reopenChar" + "acterMenu"]["bind"](no);
      no["replayLeve" + "lBind"] = no['replayLeve' + 'l']["bind"](no);
      no['openSaveRe' + "playMenuBi" + 'nd'] = no["openSaveRe" + "playMenu"]["bind"](no);
      no["closeSessi" + "onMenuBind"] = no["closeSessi" + "onMenu"]["bind"](no);
      no["returnToMa" + "inMenuBind"] = no['returnToMa' + "inMenu"]["bind"](no);
      no["closeSaveR" + "eplayMenuB" + "ind"] = no["closeSaveR" + 'eplayMenu']['bind'](no);
      no["closeSessi" + "onReplayMe" + "nuBind"] = no["closeSessi" + "onReplayMe" + 'nu']["bind"](no);
      no["loadingMes" + "sages"] = ["Building l" + "evel...", "Creating l" + "evel...", 'Constructi' + "ng level.." + '.', "Loading..."];
      no["restartMes" + "sages"] = ["Restarting" + " level...", "Resetting." + '..', "Re-instant" + "iating lev" + "el..."];
      no["replayMess" + "ages"] = ["Loading...", "Loading re" + "play...", "Constructi" + "ng replay." + '..', "Re-instant" + "iating rep" + 'lay...'];
      no["parent"] = nB;
      no['levelDataO' + "bject"] = nu;
      no["replayData" + "Object"] = nl;
      no["loadContai" + "ner"] = new qZ(no["parent"], no["loadingMes" + "sages"][0x0]);
      return no;
    }
    var nm;
    var nI;
    nI = np;
    (nm = nK)["prototype"] = Object['create'](nI["prototype"]);
    nm["prototype"]["constructo" + 'r'] = nm;
    n9(nm, nI);
    var nk;
    var ns;
    var nt = nK["prototype"];
    nt["begin"] = function () {
      var nB = n7(n4()['m'](function nu() {
        if ("MvIQq" !== "MvIQq") {
          this['setJoint'](this["neckJoint"], 0.5, 0x2);
          this["setJoint"](this["hipJoint1"], 0.5, 0x5);
          this["setJoint"](this["hipJoint2"], 0.5, 0x5);
          this['setJoint'](this["kneeJoint1"], 0x1, 0xa);
          this['setJoint'](this["kneeJoint2"], 0x1, 0xa);
          this["setJoint"](this["shoulderJo" + "int1"], 0x3, 0x14);
          this["setJoint"](this["shoulderJo" + "int2"], 0x3, 0x14);
          this["setJoint"](this["elbowJoint" + '1'], 1.4, 0xf);
          this["setJoint"](this["elbowJoint" + '2'], 1.4, 0xf);
        } else {
          return n4()['w'](function (no) {


            for (;;) {
              switch (no['n']) {
                case 0x0:
                  this["replayData" + "Object"] ? (this["replayData" + "Object"]["version"] > qh['w']['CURRENT_VE' + "RSION"] && (qh['w']["debugText"]["text"] = qh['w']["newerVersi" + 'onReplayMe' + "ssage"]), this["loadSessio" + 'n']()) : (this["incrementP" + "lays"] = !0x0, this['levelDataO' + "bject"]['forceChar'] ? this["loadSessio" + 'n']() : void 0x0 !== window["HW_SETTING" + 'S']["cameraMode"] && void 0x0 !== window["HW_SETTING" + 'S']["cameraMode"]["characterI" + "ndex"] ? (qh['w']['characterI' + "ndex"] = window["HW_SETTING" + 'S']['cameraMode']["characterI" + "ndex"], this['loadSessio' + "nBind"]()) : this['openCharac' + "terMenu"]());
                case 0x1:
                  return no['a'](0x2);
              }
            }
          }, nu, this);
        }
      }));
      return function () {
        if ("nshJw" !== "cmWVP") {
          return nB["apply"](this, arguments);
        } else {
          this["dragging"] = !0x0;
          this["stage"]["addEventLi" + "stener"](f['Cm']["MOUSE_UP"], this["mouseUpHan" + "dler"]);
          this["stage"]["addEventLi" + "stener"](T['Cm']["MOUSE_MOVE"], this["updateCanv" + 'as']);
          this['scrollTab']["startDrag"](!0x1, new V['M_'](0x0, 0x0, 0x0, this['bg']["graphics"]["height"] - this["scrollTab"]["graphics"]["height"]));
        }
      };
    }();
    nt["openCharac" + "terMenu"] = function () {
      qh['w']["hideVehicl" + 'e'] = !0x1;
      this["characterM" + "enu"] = new qF();
      this['parent']["addChildAt"](this["characterM" + 'enu'], 0x0);
      this['characterM' + "enu"]["addEventLi" + "stener"](qF['CHARACTER_' + "SELECTED"], this["loadSessio" + "nBind"]);
    };
    nt['closeChara' + "cterMenu"] = function () {
      this["characterM" + 'enu']["die"]();
      this["parent"]["removeChil" + 'd'](this['characterM' + "enu"]);
      this["characterM" + 'enu']["removeEven" + "tListener"](qF['CHARACTER_' + "SELECTED"], this["loadSessio" + "nBind"]);
      this["characterM" + "enu"] = null;
    };
    nt["showLoader" + "Screen"] = function (nB) {
      if (nB) {
        this["loadContai" + "ner"]["setText"](nB);
      } else {
        var nu = Math["floor"](Math["random"]() * this["loadingMes" + "sages"]["length"]);
        this["loadContai" + 'ner']['setText'](this['loadingMes' + "sages"][nu]);
      }
      this['loadContai' + "ner"]["showing"] || this["loadContai" + "ner"]["show"]();
    };
    nt["loadSessio" + 'n'] = function () {
      var nB = n7(n4()['m'](function nu(nl) {
        return n4()['w'](function (no) {
          for (;;) {
            switch (no['n']) {
              case 0x0:
                void 0x0 === nl && (nl = null);
                this["showLoader" + 'Screen']();
                this['replayData' + "Object"] ? (qh['w']["characterI" + 'ndex'] = this["replayData" + "Object"]["character"], this['sessionCon' + "tentLoader"] = new qi(this["levelDataO" + "bject"], qh['w']["characterI" + "ndex"], this["replayData" + "Object"]['id'])) : (this["characterM" + "enu"] && (this['closeChara' + 'cterMenu'](), qV['JD']["trackEvent"](qV['JD']["CHARACTER_" + "MENU"], qV['JD']["CHARACTER_" + "SELECTED"], "character_" + qh['w']["characterI" + "ndex"])), this["levelDataO" + "bject"]["forceChar"] && (qh['w']["characterI" + 'ndex'] = this['levelDataO' + "bject"]['character']), this["sessionCon" + 'tentLoader'] = new qi(this['levelDataO' + "bject"], qh['w']["characterI" + "ndex"], -0x1, this["incrementP" + 'lays']));
                this["sessionCon" + 'tentLoader']["addEventLi" + "stener"](q7['Jh']["COMPLETE"], this["beginSessi" + "onBind"]);
                this["sessionCon" + "tentLoader"]["addEventLi" + "stener"](q7['BR']["IO_ERROR"], this["IOErrorHan" + "dlerBind"]);
                this["sessionCon" + "tentLoader"]["addEventLi" + "stener"](q7['NN']['ERROR'], this['loadErrorH' + 'andlerBind']);
                this["sessionCon" + "tentLoader"]["load"]();
                this["incrementP" + 'lays'] = !0x1;
              case 0x1:
                return no['a'](0x2);
            }
          }
        }, nu, this);
      }));
      return function (nl) {
        if ("IRzEH" === 'pjeYT') {
          this["ejected"] && this["startGrab"]();
        } else {
          return nB["apply"](this, arguments);
        }
      };
    }();
    nt["beginSessi" + 'on'] = function (nB) {

      var nu;
      var nl = this;
      this["loadContai" + "ner"]["hide"]();
      (0x0, qV['j_'])();
      qh['w']["levelIndex"] = this["levelDataO" + "bject"]['id'];
      qh['w']["stageSprit" + 'e'] = this["parent"]["stage"];
      var no = new qV['eM']();
      this["replayData" + 'Object'] ? (nu = window["parent"]["location"]["pathname"] + ("?replay_id" + '=') + this["replayData" + "Object"]['id'], qh['w']["currentSes" + "sion"] = this["session"] = new nV(this["replayData" + "Object"]["version"], this["sessionCon" + "tentLoader"]["characterD" + "ata"], this["sessionCon" + "tentLoader"]["levelData"], this["sessionCon" + "tentLoader"]["levelVersi" + 'on'], this["sessionCon" + "tentLoader"]["replayData"], qh['w']["useDebug"])) : (nu = window["parent"]["location"]["pathname"] + "?level_id=" + this["levelDataO" + "bject"]['id'], qh['w']["currentSes" + "sion"] = this["session"] = new qE['N'](qh['w']["CURRENT_VE" + "RSION"], this["sessionCon" + "tentLoader"]["characterD" + "ata"], this["sessionCon" + "tentLoader"]['levelData'], this['sessionCon' + "tentLoader"]["levelVersi" + 'on'], qh['w']["useDebug"]));
      if (qh['w']["mobileCont" + "rols"]) {
        if ("MDypl" !== "rifYy") {
          var ni = n3['p2']["createPaus" + "eButton"]();
          this["parent"]["_pixiSprit" + 'e']["addChild"](ni);
          ni['on']('pointertap', function () {
            if ("MvFit" === 'deLKv') {
              if ("object" != typeof P || !p) {
                return K;
              }
              var nR = m[I["toPrimitiv" + 'e']];
              if (void 0x0 !== nR) {
                var nW = nR["call"](u, "string");
                if ("object" != typeof nW) {
                  return nW;
                }
                throw new l("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
              }
              return q1(B);
            } else {
              return nl['menuButton' + "Press"]();
            }
          });
          this['menuButton' + "Mobile"] = ni;
        } else {
          n["prototype"]['ctrlNullAc' + "tions"]["call"](this);
        }
      } else {
        this["menuButton"] = new qT['Ch']("menu", 0x999999, 0x32, 0xffffff);
        this['parent']["addChildAt"](this["menuButton"], 0x0);
        this["menuButton"]['x'] = 0xa;
        this["menuButton"]['y'] = 0x1d3;
        this["menuButton"]["addEventLi" + "stener"](q7['Cm']["MOUSE_UP"], this["menuButton" + "PressBind"]);
        this['menuButton']["addEventLi" + "stener"](q7['Cm']["ROLL_OVER"], this["menuButton" + "RollBind"]);
      }
      qh['w']["hideHUD"] && (this["menuButton"]["visible"] = !0x1);
      this["session"]["_pixiSprit" + 'e']["name"] = "session";
      this["parent"]["addChildAt"](this["session"], 0x0);
      this["session"]["create"]();
      this["parent"]["stage"]["focus"] = this["parent"]["stage"];
      this["sessionCon" + "tentLoader"]["removeEven" + "tListener"](q7['Jh']["COMPLETE"], this["beginSessi" + "onBind"]);
      this["sessionCon" + 'tentLoader']["removeEven" + "tListener"](q7['BR']["IO_ERROR"], this["IOErrorHan" + "dlerBind"]);
      this["sessionCon" + "tentLoader"]['removeEven' + "tListener"](q7['NN']["ERROR"], this["loadErrorH" + "andlerBind"]);
      this['sessionCon' + "tentLoader"] = null;
      this['session']["addEventLi" + "stener"](qA['b9']["COMPLETED"], this["sessionCom" + "pleteHandl" + "erBind"]);
      this["parent"]['stage']['addEventLi' + 'stener'](q7['kV']["KEY_DOWN"], this["keyDownHan" + "dlerBind"]);
      window['parent']["history"]["replaceSta" + 'te']({}, document["title"], nu);
      this["lastSessio" + "nStartTime"] = no["stop"]();
    };
    nt["loadErrorH" + "andler"] = function (nB) {
      if ("XgCxI" !== "XgCxI") {
        this["trackDeath"](f);
        this['_dead'] != T && (this["_dead"] = V, this['_dead'] && (this["removeActi" + 'on'](this['reAttachin' + 'g']), this["userVehicl" + "eEject"](), this["currentPos" + 'e'] = 0x0, this["releaseGri" + 'p'](), this["voiceSound"] && (this["voiceSound"]["stopSound"](), this["voiceSound"] = null), this["guy"]["mourn"]()));
      } else {
        this["loadContai" + "ner"]["hide"]();
        this["sessionCon" + "tentLoader"]["removeEven" + "tListener"](q7['Jh']['COMPLETE'], this["beginSessi" + "onBind"]);
        this["sessionCon" + 'tentLoader']["removeEven" + "tListener"](q7['BR']["IO_ERROR"], this["IOErrorHan" + "dlerBind"]);
        this["sessionCon" + 'tentLoader']['removeEven' + "tListener"](q7['NN']["ERROR"], this["loadErrorH" + "andlerBind"]);
        var nu;
        var nl = this["sessionCon" + "tentLoader"]['errorStrin' + 'g'];
        this["sessionCon" + "tentLoader"] = null;
        nu = "system_err" + 'or' == nl ? "There was " + "an unexpec" + 'ted\x20system' + " Error" : "invalid_ac" + "tion" == nl ? "An invalid" + " action wa" + "s passed (" + "you really" + " shouldn't" + " ever be s" + "eeing this" + ').' : "bad_param" == nl ? 'A\x20bad\x20para' + "meter was " + "passed (yo" + "u really s" + "houldn't e" + "ver be see" + 'ing\x20this).' : "app_error" == nl ? 'Sorry,\x20the' + 're\x20was\x20an\x20' + "applicatio" + "n error. I" + "t was most" + " likely da" + "tabase rel" + "ated. Plea" + "se try aga" + "in in a mo" + "ment." : "asset_load" + "_error" == nl ? "Sorry, the" + "re was a p" + "roblem loa" + "ding the l" + 'evel\x20art.\x20' + "Try again?" : "An unknown" + '\x20Error\x20has' + " occurred.";
        this['openPrompt'](nu, 'ok');
        this["dispatchEv" + 'ent'](new qA['$T'](qA['$T']["MAIN_MENU"]));
      }
    };
    nt["IOErrorHan" + "dler"] = function (nB) {
      if ('ZuUWs' === "qekqw") {
        var nl = this["targets"][N];
        nl['instant'] ? nl["singleActi" + 'on']() : f['w']["currentSes" + "sion"]["level"]["actionsVec" + "tor"]["push"](nl);
      } else {
        this["loadContai" + "ner"]['hide']();
        this["sessionCon" + "tentLoader"]["removeEven" + "tListener"](q7['Jh']["COMPLETE"], this["beginSessi" + 'onBind']);
        this["sessionCon" + "tentLoader"]["removeEven" + "tListener"](q7['BR']["IO_ERROR"], this["IOErrorHan" + "dlerBind"]);
        this["sessionCon" + "tentLoader"]["removeEven" + "tListener"](q7['NN']["ERROR"], this['loadErrorH' + 'andlerBind']);
        this["sessionCon" + "tentLoader"] = null;
        this['openPrompt']("Sorry, the" + "re was a p" + "roblem loa" + "ding the l" + "evel. Plea" + "se wait a " + "moment and" + " then try " + 'again.', "alright");
        this["dispatchEv" + "ent"](new qA['$T'](qA['$T']["MAIN_MENU"]));
      }
    };
    nt["killSessio" + 'n'] = function () {
      this['session']['die'](!0x0);
      this["session"]['removeEven' + "tListener"](qA['b9']["COMPLETED"], this["sessionCom" + "pleteHandl" + "erBind"]);
      this["parent"]["removeChil" + 'd'](this['session']);
      this["menuButton"] && (this["menuButton"]['removeEven' + "tListener"](q7['Cm']["MOUSE_UP"], this["menuButton" + "PressBind"]), this["menuButton"]["removeEven" + "tListener"](q7['Cm']["ROLL_OVER"], this["menuButton" + 'RollBind']), this["parent"]["removeChil" + 'd'](this["menuButton"]));
      this["menuButton" + "Mobile"] && (this["menuButton" + "Mobile"]["off"]("pointertap"), this["parent"]["_pixiSprit" + 'e']["removeChil" + 'd'](this["menuButton" + "Mobile"]));
      this['removeVict' + "oryMovieCl" + "ipIfNeeded"]();
      qh['w']["currentSes" + "sion"] = this["session"] = null;
      this["parent"]["stage"]["removeEven" + "tListener"](q7['kV']['KEY_DOWN'], this["keyDownHan" + "dlerBind"]);
    };
    nt['removeVict' + "oryMovieCl" + 'ipIfNeeded'] = function () {
      'NXLpv' === "NXLpv" ? this["victoryMC"] && (this["victoryMC"]['parent']["removeChil" + 'd'](this["victoryMC"]), this["victoryMC"]["timeText"]['_pixiSprit' + 'e']['destroy']({
        'children': !0x0,
        'baseTexture': !0x0,
        'texture': !0x0
      }), this["victoryMC"]['timeText'] = null, this["victoryMC"]["destroy"](), this["victoryMC"] = null) : this["_container"] == this && this["_container"]["graphics"]["clear"]();
    };
    nt["menuButton" + "Press"] = function (nB) {
      void 0x0 === nB && (nB = null);
      this["replayData" + "Object"] ? this["sessionRep" + "layMenu"] ? this["closeSessi" + "onReplayMe" + 'nu']() : this["openSessio" + "nReplayMen" + 'u']() : this['sessionMen' + 'u'] ? this["sessionMen" + 'u']["disableKey" + 's'] || this['closeSessi' + 'onMenu']() : this['openSessio' + "nMenu"]();
    };
    nt["requestPau" + 'se'] = function () {
      "PtHgK" === "HFcLm" ? this['_dead'] || this['addVocals']("Damnit", 0x3) : !this["session"] || this["menuActive"] || this["loadContai" + "ner"]["showing"] || (this["replayData" + "Object"] ? this['openSessio' + "nReplayMen" + 'u']() : this["openSessio" + "nMenu"]());
    };
    nt["menuButton" + "Roll"] = function (nB) {
      if ("ZswKp" !== 'ZswKp') {
        return this['scaleYCopy'];
      } else {
        qT['uO']["instance"]["show"]("Tab (esc i" + "s now used" + " to exit f" + 'ullscreen)', this["menuButton"]);
      }
    };
    nt['sessionCom' + "pleteHandl" + 'er'] = function (nB) {
      this["session"]["removeEven" + "tListener"](qA['b9']["COMPLETED"], this["sessionCom" + "pleteHandl" + "erBind"]);
      this["replayData" + "Object"] ? this["openSessio" + "nReplayMen" + 'u'](!0x1) : this["openSessio" + "nMenu"](!0x1);
    };
    nt["keyDownHan" + "dler"] = function (nB) {
      if ("xchMJ" === "bjffy") {
        this["_setShapeH" + "eight"](n);
      } else {
        if (this["session"]) {
          switch (nB["keyCode"]) {
            case 0x9:
              this["menuButton" + "Press"]();
              break;
            case 0x1b:
              break;
            case qh['w']["switchCame" + "raCode"]:
              this["session"]["isReplay"] && this["session"]["character"]["switchCame" + 'ra']();
          }
        }
      }
    };
    nt["openSessio" + "nMenu"] = function (nB) {
      if ('fTvKi' === "fTvKi") {
        void 0x0 === nB && (nB = !0x0);
        if (!this["sessionMen" + 'u'] && !this["loadContai" + "ner"]["showing"]) {
          this["sessionMen" + 'u'] = new qQ(this["levelDataO" + "bject"], this["disableSav" + 'e'] || this["session"]["wasTimeInt" + 'egrityTrig' + "gered"]());
          this["sessionMen" + 'u']["addEventLi" + "stener"](qQ["RESTART_LE" + "VEL"], this["restartLev" + "elBind"]);
          this["sessionMen" + 'u']["addEventLi" + "stener"](qQ['CHOOSE_CHA' + "RACTER"], this["reopenChar" + "acterMenuB" + "ind"]);
          this["sessionMen" + 'u']["addEventLi" + 'stener'](qQ["VIEW_REPLA" + 'Y'], this["replayLeve" + "lBind"]);
          this["sessionMen" + 'u']["addEventLi" + "stener"](qQ["SAVE_REPLA" + 'Y'], this["openSaveRe" + "playMenuBi" + 'nd']);
          this["sessionMen" + 'u']["addEventLi" + "stener"](qQ["CANCEL"], this["closeSessi" + "onMenuBind"]);
          this["sessionMen" + 'u']["addEventLi" + "stener"](qQ["EXIT"], this["returnToMa" + "inMenuBind"]);
          var nu = this["sessionMen" + 'u']["window"];
          this['parent']["addChild"](nu);
          nu["center"]();
          this["sessionMen" + 'u']["init"]();
          void 0x0 !== window["HW_SETTING" + 'S']["cameraMode"] && (this["sessionMen" + 'u']["alpha"] = 0x0, this["sessionMen" + 'u']['window']["alpha"] = 0x0);
          if (nB) {
            this["session"]["pause"]();
          } else {
            var nl = nu['y'];
            nu['y'] = 0x208;
            if (this["session"]['replayData']["completed"]) {
              if (void 0x0 === window["HW_SETTING" + 'S']["cameraMode"]) {
                if ("RqGHZ" !== "bbLTl") {
                  this["victoryMC"] = new q7['j7']();
                  this["victoryMC"]['setPixiMov' + 'ieClip']((0x0, qB['zI'])("GameUI", "mc_victory" + '_mc'), !0x0);
                  this["victoryMC"]['x'] = 0x1c2;
                  this["victoryMC"]['y'] = 0xaf;
                  this["victoryMC"]["loop"] = !0x1;
                  this["victoryMC"]["play"]();
                  var no = this["session"]["replayData"]["getLength"]() / 0x1e;
                  this["victoryMC"]['timeText']["textField"]["pixiSprite"]["text"] = qV['l5']["setToHundr" + "edths"](no) + " seconds";
                  this["victoryMC"]["timeText"]["filters"] = [new q7['qx'](0xffffff, 0x1, 0x2, 0x2, 0x1, 0x2)];
                  this["parent"]["addChildAt"](this["victoryMC"], this["parent"]["getChildIn" + "dex"](nu));
                  nl = 0x78;
                  qR['os']['to'](nu, {
                    'duration': 0.5,
                    'y': nl,
                    'ease': qW['MI']["easeOut"],
                    'delay': 1.5
                  });
                } else {
                  if ('object' != typeof P || !p) {
                    return K;
                  }
                  var nE = m[I["toPrimitiv" + 'e']];
                  if (void 0x0 !== nE) {
                    var nR = nE["call"](u, "string");
                    if ("object" != typeof nR) {
                      return nR;
                    }
                    throw new l("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
                  }
                  return q1(B);
                }
              }
            } else {
              qR['os']['to'](nu, {
                'duration': 0.5,
                'y': nl,
                'ease': qW['MI']["easeOut"]
              });
            }
          }
        }
      } else {
        return this["_hideArms"];
      }
    };
    nt['closeSessi' + "onMenu"] = function (nB, nu) {
      if ("oZtjP" === "oZtjP") {
        void 0x0 === nB && (nB = null);
        void 0x0 === nu && (nu = !0x0);
        this["sessionMen" + 'u'] && (this["sessionMen" + 'u']["die"](), this['sessionMen' + 'u']["destroy"](), this["sessionMen" + 'u']["removeEven" + 'tListener'](qQ["RESTART_LE" + "VEL"], this["restartLev" + "elBind"]), this["sessionMen" + 'u']["removeEven" + "tListener"](qQ["CHOOSE_CHA" + 'RACTER'], this["reopenChar" + "acterMenuB" + "ind"]), this["sessionMen" + 'u']["removeEven" + "tListener"](qQ["VIEW_REPLA" + 'Y'], this["replayLeve" + "lBind"]), this["sessionMen" + 'u']["removeEven" + "tListener"](qQ["SAVE_REPLA" + 'Y'], this["openSaveRe" + "playMenuBi" + 'nd']), this["sessionMen" + 'u']["removeEven" + "tListener"](qQ["CANCEL"], this["closeSessi" + 'onMenuBind']), this['sessionMen' + 'u']['removeEven' + 'tListener'](qQ['EXIT'], this["returnToMa" + "inMenuBind"]), this["sessionMen" + 'u'] = null, nu && this["session"]["unpause"]());
      } else {
        return this["_levelData"];
      }
    };
    nt["openSessio" + "nReplayMen" + 'u'] = function (nB) {

      if ("eXHSf" !== "qBeof") {
        void 0x0 === nB && (nB = !0x0);
        if (!this["sessionRep" + "layMenu"] && !this["loadContai" + 'ner']["showing"]) {
          if ("VkQKO" === "VkQKO") {
            nB && this["session"]["pause"]();
            this["sessionRep" + "layMenu"] = new n2(this['replayData' + 'Object']);
            this["sessionRep" + 'layMenu']["addEventLi" + "stener"](n2["RESTART_RE" + "PLAY"], this["replayLeve" + "lBind"]);
            this["sessionRep" + "layMenu"]["addEventLi" + "stener"](n2["PLAY_LEVEL"], this["restartLev" + "elBind"]);
            this["sessionRep" + "layMenu"]["addEventLi" + 'stener'](n2["CHOOSE_CHA" + "RACTER"], this["reopenChar" + "acterMenuB" + "ind"]);
            this["sessionRep" + "layMenu"]["addEventLi" + "stener"](n2['CANCEL'], this["closeSessi" + "onReplayMe" + "nuBind"]);
            this['sessionRep' + "layMenu"]['addEventLi' + "stener"](n2["EXIT"], this["returnToMa" + "inMenuBind"]);
            var nu = this["sessionRep" + "layMenu"]["window"];
            this['parent']["addChild"](nu);
            nu["center"]();
          } else {
            var no;
            var ni;
            var nE = new K['bR'](this['x'], this['y']);
            this["_body1"] && (ni = no = new m['cK'](this, 'body1', this["_body1"], null, nE, nE), this["_body1"]["removeEven" + "tListener"](I['$']["COORDINATE" + "_CHANGE"], this['bodyMoved']), this["_body1"]["removeEven" + "tListener"](k['$']["SELECTION_" + "STATE_CHAN" + 'GE'], this["bodySelect" + "ionChanged"]), this["_body1"]["removeJoin" + 't'](this), this["_body1"] = null);
            this["_body2"] && (no = new f['cK'](this, "body2", this["_body2"], null, nE, nE), ni && (ni["nextAction"] = no), ni = no, this["_body2"]["removeEven" + "tListener"](q1['$']["COORDINATE" + "_CHANGE"], this["bodyMoved"]), this["_body2"]["removeEven" + "tListener"](B['$']["SELECTION_" + "STATE_CHAN" + 'GE'], this["bodySelect" + 'ionChanged']), this['_body2']["removeJoin" + 't'](this), this["_body2"] = null);
            if (this["_triggers"]) {
              for (var nR = 0x0; nR < this['_triggers']["length"]; nR++) {
                var nW = this["_triggers"][nR];
                no = nW["removeTarg" + 'et'](this);
                ni && (ni["nextAction"] = no["firstActio" + 'n']);
                ni = no;
                this["removeTrig" + 'ger'](nW);
                nR -= 0x1;
              }
            }
            return u ? (no = new l['ob'](this, o, this["parent"]['getChildIn' + "dex"](this)), ni && (ni["nextAction"] = no), q2["removeRefS" + "prite"](this), no) : null;
          }
        }
      } else {
        h = C["setPrototy" + "peOf"] ? j["setPrototy" + "peOf"]['bind']() : function (ni, nE) {
          ni["__proto__"] = nE;
          return ni;
        };
        return P(p, K);
      }
    };
    nt['closeSessi' + "onReplayMe" + 'nu'] = function (nB, nu) {
      if ("NOIhY" === "NOIhY") {
        void 0x0 === nB && (nB = null);
        void 0x0 === nu && (nu = !0x0);
        this["sessionRep" + "layMenu"] && (this["sessionRep" + "layMenu"]['die'](), this["sessionRep" + "layMenu"]["destroy"](), this["sessionRep" + 'layMenu']["removeEven" + "tListener"](n2["RESTART_RE" + "PLAY"], this["replayLeve" + "lBind"]), this["sessionRep" + "layMenu"]["removeEven" + "tListener"](n2['PLAY_LEVEL'], this["restartLev" + "elBind"]), this["sessionRep" + "layMenu"]["removeEven" + "tListener"](n2["CHOOSE_CHA" + "RACTER"], this["reopenChar" + "acterMenuB" + 'ind']), this["sessionRep" + "layMenu"]["removeEven" + "tListener"](n2["CANCEL"], this["closeSessi" + "onReplayMe" + "nuBind"]), this["sessionRep" + "layMenu"]["removeEven" + "tListener"](n2["EXIT"], this["returnToMa" + "inMenuBind"]), this["sessionRep" + "layMenu"] = null, nu && this["session"]["unpause"]());
      } else {
        D || (g = "next");
        if (S = d[z]) {
          if (!(q4 = q5["call"](q6, q7))) {
            throw q8("iterator r" + "esult is n" + 'ot\x20an\x20obje' + 'ct');
          }
          if (!q9['done']) {
            return qq;
          }
          qn = qN["value"];
          qf < 0x2 && (qT = 0x0);
        } else {
          0x1 === a && (Y = v["return"]) && L['call'](U);
          O < 0x2 && (G = Q("The iterat" + "or does no" + "t provide " + 'a\x20\x27' + q0 + "' method"), q1 = 0x1);
        }
        q2 = q3;
      }
    };
    nt["trackResta" + 'rt'] = function () {
      this['restartCou' + 'nt'] += 0x1;
      qV['JD']["trackEvent"](qV['JD']['LEVEL'], qV['JD']["RESTART"], "levelID_" + this["levelDataO" + "bject"]['id'], this["restartCou" + 'nt']);
    };
    nt["reopenChar" + "acterMenu"] = function (nB) {
      this["replayData" + "Object"] = null;
      this["disableSav" + 'e'] = !0x1;
      this["closeSessi" + "onMenu"](null, !0x1);
      this["closeSessi" + 'onReplayMe' + 'nu'](null, !0x1);
      this["killSessio" + 'n']();
      this["levelDataO" + "bject"]["forceChar"] ? this["loadSessio" + 'n']() : (this["trackResta" + 'rt'](), this['openCharac' + "terMenu"]());
    };
    nt["returnToMa" + "inMenu"] = function (nB) {
      this["closeSessi" + "onMenu"](null, !0x1);
      this["closeSessi" + "onReplayMe" + 'nu'](null, !0x1);
      this['killSessio' + 'n']();
      (0x0, qV['j_'])();
      this["dispatchEv" + "ent"](new qA['$T'](qA['$T']["MAIN_MENU"]));
    };
    nt["restartLev" + 'el'] = function (nB) {
      var nu = this;
      void 0x0 === nB && (nB = null);
      function nl() {
        if ("GMLSf" === "HkbKj") {
          this["_disableKe" + 'ys'] = q6;
        } else {
          nu["closeSessi" + "onMenu"](null, !0x1);
          nu['closeSessi' + "onReplayMe" + 'nu'](null, !0x1);
          nu["disableSav" + 'e'] = !0x1;
          nu["replayData" + "Object"] = null;
          nu["removeVict" + "oryMovieCl" + "ipIfNeeded"]();
          nu["trackResta" + 'rt']();
          var ni = nu["session"]["character"];
          var nE = nu["session"]["level"];
          var nR = nu["session"]["containerS" + "prite"];
          var nW = nu["session"]["levelVersi" + 'on'];
          nu["session"]["die"]();
          nu["session"]["removeEven" + "tListener"](qA['b9']["COMPLETED"], nu["sessionCom" + "pleteHandl" + "erBind"]);
          nu["parent"]["removeChil" + 'd'](nu["session"]);
          (0x0, qV['j_'])();
          var nA = new qV['eM']();
          qh['w']["currentSes" + "sion"] = new nC(nR, qh['w']["CURRENT_VE" + "RSION"], ni, nE, nW, qh['w']["useDebug"]);
          nu['session'] = qh['w']["currentSes" + "sion"];
          nu["parent"]["addChildAt"](nu["session"], 0x0);
          nu["session"]["create"]();
          nu["loadContai" + "ner"]["hide"]();
          nu["session"]["addEventLi" + 'stener'](qA['b9']["COMPLETED"], nu["sessionCom" + "pleteHandl" + "erBind"]);
          nu["lastSessio" + "nStartTime"] = nA["stop"]();
        }
      }
      if (this['lastSessio' + "nStartTime"] < 0xc8) {
        nl();
      } else {
        var no = Math["floor"](Math["random"]() * this['restartMes' + 'sages']["length"]);
        this["loadContai" + "ner"]['setText'](this["restartMes" + "sages"][no]);
        this["loadContai" + "ner"]["show"](nl);
      }
    };
    nt["replayLeve" + 'l'] = function (nB) {

      var nu = this;
      this['closeSessi' + "onMenu"](null, !0x1);
      this["closeSessi" + "onReplayMe" + 'nu'](null, !0x1);
      this["removeVict" + 'oryMovieCl' + "ipIfNeeded"]();
      this["replayCoun" + 't'] += 0x1;
      qV['JD']["trackEvent"](qV['JD']["LEVEL"], qV['JD']["VIEW_REPLA" + 'Y'], 'levelID_' + this["levelDataO" + "bject"]['id'], this["replayCoun" + 't']);
      var nl = Math["floor"](Math["random"]() * this["replayMess" + "ages"]["length"]);
      this['loadContai' + "ner"]["setText"](this['replayMess' + "ages"][nl]);
      this["loadContai" + "ner"]["show"](function () {
        var no = nu["session"]["character"];
        var ni = nu["session"]["level"];
        var nE = nu["session"]["containerS" + "prite"];
        var nR = nu["session"]["replayData"];
        var nW = nu['session']["version"];
        var nA = nu['session']["levelVersi" + 'on'];
        nu['session']['die']();
        nu["session"]["removeEven" + "tListener"](qA['b9']["COMPLETED"], nu["sessionCom" + "pleteHandl" + "erBind"]);
        nu["parent"]["removeChil" + 'd'](nu["session"]);
        (0x0, qV['j_'])();
        qh['w']["currentSes" + "sion"] = new nP(nE, nW, no, ni, nA, nR);
        nu["session"] = qh['w']["currentSes" + "sion"];
        nu["parent"]["addChildAt"](nu["session"], 0x0);
        nu["session"]["create"]();
        nu["loadContai" + "ner"]["hide"]();
        nu['session']["addEventLi" + 'stener'](qA['b9']["COMPLETED"], nu['sessionCom' + "pleteHandl" + "erBind"]);
      });
    };
    nt["openSaveRe" + "playMenu"] = function (nB) {
      if (this["session"]["replayData"]["getLength"]() > qh['w']["maxReplayF" + "rames"]) {
        this["openPrompt"]("Sorry, you" + "r replay m" + "ust be les" + "s than 200" + " seconds.", 'ok');
      } else {
        this['sessionMen' + 'u']["disableKey" + 's'] = !0x0;
        this["saveReplay" + "Menu"] = new qa(this["session"]['replayData'], this["levelDataO" + "bject"]['id'], qh['w']['characterI' + "ndex"]);
        this["saveReplay" + "Menu"]["addEventLi" + 'stener'](qa["SAVE_COMPL" + "ETE"], this['closeSaveR' + "eplayMenuB" + "ind"]);
        this["saveReplay" + "Menu"]["addEventLi" + "stener"](qa["GENERIC_ER" + "ROR"], this["closeSaveR" + "eplayMenuB" + "ind"]);
        this["saveReplay" + "Menu"]["addEventLi" + "stener"](qT['p8']["WINDOW_CLO" + "SED"], this["closeSaveR" + "eplayMenuB" + "ind"]);
        var nu = this['saveReplay' + "Menu"]["window"];
        this["parent"]["addChild"](nu);
        nu["center"]();
      }
    };
    nt["closeSaveR" + "eplayMenu"] = function (nB) {
      this["saveReplay" + "Menu"]["removeEven" + 'tListener'](qa["SAVE_COMPL" + "ETE"], this["closeSaveR" + "eplayMenuB" + 'ind']);
      this["saveReplay" + "Menu"]["removeEven" + "tListener"](qa["GENERIC_ER" + 'ROR'], this["closeSaveR" + "eplayMenuB" + "ind"]);
      this["saveReplay" + "Menu"]['removeEven' + "tListener"](qT['p8']['WINDOW_CLO' + "SED"], this["closeSaveR" + "eplayMenuB" + "ind"]);
      this["saveReplay" + "Menu"]["die"]();
      this["sessionMen" + 'u']['disableKey' + 's'] = !0x1;
      nB["type"] == qa["GENERIC_ER" + "ROR"] && this["openPrompt"](this["saveReplay" + "Menu"]["errorMessa" + 'ge'], "alright");
      nB['type'] == qa["SAVE_COMPL" + "ETE"] && (qV['JD']["trackEvent"](qV['JD']["LEVEL"], qV['JD']["SAVE_REPLA" + 'Y'], "levelID_" + this["levelDataO" + "bject"]['id']), this["disableSav" + 'e'] = !0x0, this["sessionMen" + 'u']['disableSav' + 'e'] = !0x0, this["openPrompt"]('Replay\x20suc' + 'cesfully\x20s' + "aved: id " + this['saveReplay' + "Menu"]['newReplayI' + 'D'], 'ok'));
    };
    nt["openPrompt"] = function (nB, nu) {
      if ('AqjHv' === 'AqjHv') {
        this["promptSpri" + 'te'] = new qT['Um'](nB, nu);
        var nl = this["promptSpri" + 'te']["window"];
        this['parent']["addChild"](nl);
        nl["center"]();
      } else {
        for (var ni in h["HW_SETTING" + 'S']) {
          C['w'][ni] = j["HW_SETTING" + 'S'][ni];
        }
        P["HW_SETTING" + 'S']["user_id"] && (this["_userID"] = p['HW_SETTING' + 'S']["user_id"], this["_userName"] = K['HW_SETTING' + 'S']["username"]);
      }
    };
    nt["die"] = function () {
      this["session"] && this["killSessio" + 'n']();
      this['loadContai' + "ner"]["die"]();
      this["menuButton"] && this['menuButton']['die']();
    };
    nk = nK;
    (ns = [{
      'key': "menuActive",
      'get': function () {
        return !!(this["sessionMen" + 'u'] || this["sessionRep" + "layMenu"] || this["promptSpri" + 'te'] && this["promptSpri" + 'te']["window"]["parent"]);
      }
    }]) && function (nB, nu) {
      for (var nl = 0x0; nl < nu["length"]; nl++) {
        if ("OOKAm" === "OOKAm") {
          var no = nu[nl];
          no["enumerable"] = no["enumerable"] || !0x1;
          no["configurab" + 'le'] = !0x0;
          "value" in no && (no['writable'] = !0x0);
          Object["defineProp" + "erty"](nB, n8(no["key"]), no);
        } else {
          qn["statusSpri" + 'te']["die"]();
          var nE = qy["target"];
          nE["removeEven" + 'tListener'](qg['Jh']["COMPLETE"], qu["voteComple" + 'te']);
          var nR = qd(nE["data"]);
          var nW = nR["substr"](0x0, 0x8);
          var nA = nR["split"](':');
          nW["indexOf"]("<html>") > -0x1 ? qm["promptSpri" + 'te'] = new qe['Um']("There was " + "an unexpec" + "ted system" + " Error", 'oh') : "failure" == nA[0x0] ? "invalid_ac" + "tion" == nA[0x1] ? qh["promptSpri" + 'te'] = new qq['Um']("An invalid" + " action wa" + "s passed (" + "you really" + " shouldn't" + " ever be s" + "eeing this" + ').', 'ok') : "duplicate_" + "rating" == nA[0x1] ? qZ["promptSpri" + 'te'] = new qo['Um']("You've alr" + "eady voted" + " on this l" + "evel.", 'ok') : "illegal_ar" + 'gument' == nA[0x1] ? qK['promptSpri' + 'te'] = new nB['Um']("Rating mus" + "t be betwe" + 'en\x200\x20and\x205' + '.', 'ok') : "bad_param" == nA[0x1] ? q7["promptSpri" + 'te'] = new qb['Um']("A bad para" + "meter was " + "passed (yo" + "u really s" + 'houldn\x27t\x20e' + "ver be see" + "ing this).", 'ok') : "app_error" == nA[0x1] ? qC["promptSpri" + 'te'] = new qt['Um']("Sorry, the" + "re was an " + "applicatio" + 'n\x20error.\x20I' + "t was most" + " likely da" + "tabase rel" + 'ated.\x20Plea' + "se try aga" + "in in a mo" + "ment.", 'ok') : 'not_logged' + "_in" == nA[0x1] ? qM["promptSpri" + 'te'] = new qi['Um']("You are no" + "t currentl" + "y logged i" + 'n.', "alright") : qD["promptSpri" + 'te'] = new qw['Um']("An unknown" + " Error has" + " occurred.", 'oh') : "success" == nA[0x0] ? (q0['J']['trackEvent'](q1['J']["REPLAY"], q2['J']["VOTE"], "rating_" + q3["votingStar" + 's']["rating"]), q4["promptSpri" + 'te'] = new q5['Um']("You voted!" + " Good job.", "thanks")) : q6["promptSpri" + 'te'] = new q7['Um']("Error: som" + "ething dre" + "adful has " + 'happened', 'ok');
          var nr = q8["promptSpri" + 'te']["window"];
          q9['_window']["parent"]["addChild"](nr);
          nr['center']();
        }
      }
    }(nk["prototype"], ns);
    Object["defineProp" + "erty"](nk, "prototype", {
      'writable': !0x1
    });
    return nk;
  }(q7['Qe']);
  var nn = q2(0xe177);
  var nN = q2(0xda58);
  function nf(np) {

    var nK = function (nm) {
      if ("oRAQF" === "oRAQF") {
        if ("object" != typeof nm || !nm) {
          return nm;
        }
        var nI = nm[Symbol["toPrimitiv" + 'e']];
        if (void 0x0 !== nI) {
          var nk = nI["call"](nm, "string");
          if ("object" != typeof nk) {
            return nk;
          }
          throw new TypeError("@@toPrimit" + "ive must r" + "eturn a pr" + 'imitive\x20va' + "lue.");
        }
        return String(nm);
      } else {
        var nt = 0xc * C;
        j["moveTo"](P + nt, p);
        K["lineTo"](m + nt + 0x7, I);
      }
    }(np);
    return "symbol" == typeof nK ? nK : nK + '';
  }
  function nT(np, nK) {


    nT = Object["setPrototy" + "peOf"] ? Object["setPrototy" + 'peOf']['bind']() : function (nm, nI) {
      if ("GNisA" !== "LEced") {
        nm['__proto__'] = nI;
        return nm;
      } else {
        V > this["maxLimit"] && (h = this['maxLimit']);
        C < 0x0 && (j = 0x0);
        this["_upperLimi" + 't'] = P;
        this["drawArms"]();
        this["forceDirty"]();
      }
    };
    return nT(np, nK);
  }
  var nV = function (np) {


    function nK(nB, nu, nl, no, ni, nE) {
      var nR;
      (nR = np["call"](this, nB, nu, nl, no, nE) || this)["_frameRate" + "Count"] = 0x0;
      nR["_extraUpda" + "tes"] = 0x0;
      nR["_realUpdat" + 'eFrames'] = 0x0;
      nR['_accumulat' + "edStep"] = 0x1;
      nR['steps'] = 0x0;
      nR["_replayDat" + 'a'] = ni;
      nR["mouseClick" + "Map"] = nR["_replayDat" + 'a']["getMouseCl" + "ickMap"]();
      nR["totalItera" + "tions"] = nR["_replayDat" + 'a']["getLength"]();
      nR["isReplay"] = !0x0;
      return nR;
    }
    var nm;
    var nI;
    nI = np;
    (nm = nK)["prototype"] = Object["create"](nI["prototype"]);
    nm["prototype"]["constructo" + 'r'] = nm;
    nT(nm, nI);
    var nk;
    var ns;
    var nt = nK["prototype"];
    nt["create"] = function () {
      if ("JMYoA" !== "Aaisq") {
        this["_particleC" + 'ontroller'] = new nn['h'](this['_container' + 'Sprite']);
        this['createWorl' + 'd']();
        this['_level']["create"]();
        this["_character"]["create"]();
        this["_container" + "Sprite"]["addChild"](this["_level"]["foreground"]);
        this["_camera"] = new q3['_'](this['_container' + "Sprite"], this["_character"]["cameraFocu" + 's'], this);
        this["_camera"]["secondFocu" + 's'] = this["_character"]["cameraSeco" + "ndFocus"];
        var nB = this["_level"]['cameraBoun' + 'ds'];
        this["_camera"]["setLimits"](nB['x'], nB['x'] + nB["width"], nB['y'], nB['y'] + nB["height"]);
        this['_camera']["step"](0x1);
        this['setupTextF' + "ields"]();
        this["useDebugge" + 'r'] && this["_container" + 'Sprite']["addChild"](this["debug_spri" + 'te']);
        this['m_world']["Interpolat" + 'edStep'](0x1);
        this['_character']["paint"]();
        this['_level']['paint']();
        this["start"]();
      } else {
        this["setJoint"](this["neckJoint"], 0.5, 0x2);
        this["setJoint"](this["hipJoint1"], 0x0, 0x2);
        this["setJoint"](this["hipJoint2"], 3.5, 0x2);
        this["setJoint"](this["kneeJoint1"], 0x2, 0xa);
        this["setJoint"](this['kneeJoint2'], 0x0, 0xa);
        this["setJoint"](this["shoulderJo" + "int1"], 0x1, 0x14);
        this["setJoint"](this["shoulderJo" + "int2"], 0x3, 0x14);
        this["setJoint"](this["elbowJoint" + '1'], 0x3, 0xf);
        this["setJoint"](this["elbowJoint" + '2'], 1.5, 0xf);
      }
    };
    nt["start"] = function () {
      this['paused'] = !0x1;
      this["inputAllow" + 'ed'] = !0x0;
      this["frames"] = 0x0;
      this["_iteration"] = 0x0;
      this["addReplayC" + "ontrols"]();
      this["fpsCounter"] = new nN['o'](this["fpsText"]);
      this["_useCullin" + 'g'] && this["cullObject" + 's']();
      this['addEventLi' + "stener"](q7['Jh']["ENTER_FRAM" + 'E'], this["runBind"]);
    };
    nt["addReplayC" + "ontrols"] = function () {
      "EFTVd" !== "fJbOT" ? (this["keyDisplay"] = new n3['Q6'](), this["addChild"](this["keyDisplay"]), this['replayProg' + "ressBar"] = new n3['IM'](), this["replayProg" + "ressBar"]['x'] = 0x96, this["replayProg" + "ressBar"]['y'] = 0x14, this["addChild"](this["replayProg" + "ressBar"]), qh['w']["hideHUD"] && (this['keyDisplay']["visible"] = this["replayProg" + "ressBar"]["visible"] = this["fpsText"]["visible"] = !0x1)) : (void 0x0 === V && (h = !0x0), C['prototype']["hipBreak2"]["call"](this, j, P), this['ejected'] || (this["kneeJoint2"]["broken"] || this["refilterSh" + 'it'](this["lowerLeg2S" + "hape"]), this["gearFoot2"] && (this["_session"]["m_world"]["DestroyJoi" + 'nt'](this["gearFoot2"]), this["gearFoot2"] = null, null == this["gearFoot1"] && (this["_session"]["m_world"]["DestroyJoi" + 'nt'](this["framePelvi" + 's']), this["framePelvi" + 's'] = null)), this["checkEject"]()));
    };
    nt["removeRepl" + "ayControls"] = function () {
      if ("OmFhu" !== "wAuWG") {
        this["removeChil" + 'd'](this["keyDisplay"]);
        this["keyDisplay"] = null;
        this["replayProg" + "ressBar"]["die"]();
        this['stage']["frameRate"] = 0x1e;
      } else {
        var nu;
        var nl;
        var no;
        0x1 == f ? (q1["levelSearc" + 'h'] = B["savedTerm"], nu = "level name" + ':\x20\x27' + u["savedTerm"] + '\x27', nl = 0x3d88c7, no = 0xffffff) : 0x2 == l ? (o["authorName" + "Search"] = q2["savedTerm"], nu = 'author\x20nam' + 'e:\x20\x27' + E["savedTerm"] + '\x27', nl = 0xfd8181, no = 0xffffff) : 0x3 == R ? (nu = 'favorites', nl = 0xfffe65, no = 0x605344) : 0x4 == W && (nu = 'favorites:' + '\x20\x27' + A["_favorites" + 'UserName'] + '\x27', nl = 0xfffe65, no = 0x605344);
        this["searchTerm" + 'Button'] = new r(nu, nl, 0x78, no);
        this["addChild"](this['searchTerm' + "Button"]);
        this["searchTerm" + "Button"]['x'] = this["shadow"]['x'];
        this["searchTerm" + "Button"]['y'] = this["shadow"]['y'] - 0x1b;
        J['currentDro' + "pStates"] = D >= 0x3 ? [0x0, 0x0, 0x0] : [0x0, 0x1, 0x0];
        this["organizeDr" + "opMenus"]();
        this['searchTerm' + "Button"]["addEventLi" + 'stener'](g['Cm']["MOUSE_UP"], this["removeSear" + "chTerm"]);
      }
    };
    nt["update"] = function () {
      0x1e === q7['b0']["maxFPS"] ? this["update30fp" + 's']() : this['update60fp' + 's']();
    };
    nt["update30fp" + 's'] = function () {
      qj['XD']["USE_INTERP" + "OLATION"] = !0x1;
      this["replayProg" + "ressBar"]["updateProg" + "ress"](this["iteration"], this["totalItera" + 'tions']);
      this['frames'] += 0x1;
      this["steps"] += 0x1;
      this["_character"]["preActions"]();
      if (this["inputAllow" + 'ed']) {
        if ("XjMeA" !== "XjMeA") {
          var nl;
          var no;
          var ni;
          this["_session"]["contactLis" + "tener"]["deleteList" + "ener"](h['fI']["RESULT"], this["lowerArm1S" + "hape"]);
          this["_session"]["contactLis" + "tener"]["deleteList" + "ener"](C['fI']['RESULT'], this['lowerArm2S' + "hape"]);
          this['contactRes' + "ultBuffer"]["delete"](this["lowerArm1S" + 'hape']);
          this["contactRes" + "ultBuffer"]["delete"](this["lowerArm2S" + "hape"]);
          this['ejected'] = !0x1;
          this["currentPos" + 'e'] = 0x0;
          this["releaseGri" + 'p']();
          var nE = 0xb4 / j['PI'];
          no = -0x32 / nE - (nl = this['hipJoint1']["m_body2"]["GetAngle"]() - this["hipJoint1"]["m_body1"]["GetAngle"]() - this["hipJoint1"]["GetJointAn" + "gle"]());
          ni = 0xa / nE - nl;
          this["hipJoint1"]["SetLimits"](no, ni);
          no = -0x32 / nE - (nl = this["hipJoint2"]["m_body2"]["GetAngle"]() - this["hipJoint2"]["m_body1"]["GetAngle"]() - this['hipJoint2']["GetJointAn" + "gle"]());
          ni = 0xa / nE - nl;
          this["hipJoint2"]["SetLimits"](no, ni);
          no = -0x3c / nE - (nl = this["lowerArm1B" + "ody"]["GetAngle"]() - this["upperArm1B" + "ody"]['GetAngle']() - this["elbowJoint" + '1']["GetJointAn" + "gle"]());
          ni = 0x0 / nE - nl;
          this["elbowJoint" + '1']["SetLimits"](no, ni);
          no = -0x3c / nE - (nl = this["lowerArm2B" + "ody"]["GetAngle"]() - this['upperArm2B' + "ody"]["GetAngle"]() - this["elbowJoint" + '2']["GetJointAn" + "gle"]());
          ni = 0x0 / nE - nl;
          this["elbowJoint" + '2']["SetLimits"](no, ni);
          no = 0x0 / nE - (nl = this["head1Body"]["GetAngle"]() - this["chestBody"]["GetAngle"]() - this['neckJoint']["GetJointAn" + "gle"]());
          ni = 0x14 / nE - nl;
          this["neckJoint"]["SetLimits"](no, ni);
          var nR = this["_session"]["m_world"];
          var nW = new P['z_']();
          nW["categoryBi" + 'ts'] = 0x202;
          for (var nA = this["frameBody"]["GetShapeLi" + 'st'](); nA; nA = nA["m_next"]) {
            nA['SetFilterD' + 'ata'](nW);
            nR["Refilter"](nA);
          }
          (nW = new p['z_']())["categoryBi" + 'ts'] = 0x104;
          nW["maskBits"] = 0x10c;
          (nA = this['wheelBody']['GetShapeLi' + 'st']())["SetFilterD" + "ata"](nW);
          nR["Refilter"](nA);
          K == this['lowerArm1B' + 'ody'] ? (this["frameHand1"] = nR["CreateJoin" + 't'](this["frameHand1" + "JointDef"]), this["lowerArm1M" + 'C']["hand"]["gotoAndSto" + 'p'](0x1)) : (this["frameHand2"] = nR["CreateJoin" + 't'](this["frameHand2" + "JointDef"]), this['lowerArm2M' + 'C']["hand"]["gotoAndSto" + 'p'](0x1));
          this["actionsVec" + "tor"]['push'](this['reAttachin' + 'g']);
        } else {
          var nB = this["mouseClick" + "Map"][this["iteration"]['toString']()];
          nB && this["level"]['mouseClick' + "Trigger"](nB);
          this["iteration"] >= this["totalItera" + "tions"] ? this["levelCompl" + "ete"]() : this["_character"]['checkRepla' + "yData"](this["keyDisplay"], this["replayData"]["getKeyEntr" + 'y'](this["iteration"]));
          this["_iteration"]++;
        }
      } else {
        this["_character"]["doNothing"]();
      }
      this["_character"]["actions"]();
      this["m_world"]["Step"](this['m_timeStep'], this["m_iteratio" + 'ns']);
      this["_character"]["handleCont" + "actBuffer"]();
      this['_character']["checkJoint" + 's']();
      this["_level"]["actions"]();
      this["_character"]["paint"]();
      this['_level']["paint"]();
      this['_camera']["step"](0x1);
      this["_particleC" + "ontroller"]["step"](0x1);
      qC['m']["instance"]["step"]();
      this['_useCullin' + 'g'] && this["cullObject" + 's']();
      this["_accumulat" + 'edStep'] = 0x0;
    };
    nt["update60fp" + 's'] = function () {
      if ("lSELr" === "lSELr") {
        qj['XD']['USE_INTERP' + "OLATION"] = !0x0;
        this["replayProg" + "ressBar"]["updateProg" + 'ress'](this["iteration"], this["totalItera" + "tions"]);
        this["frames"] += 0x1;
        this['steps'] += 0x1;
        var nB = 0x1e / q7['b0']["maxFPS"];
        0x1 === this["steps"] && (nB = 0x1);
        this["_accumulat" + "edStep"] += nB;
        this["_accumulat" + "edStep"] >= 0x1 && (this["_accumulat" + "edStep"] = 0x1);
        this["m_world"]["Interpolat" + "edStep"](this['_accumulat' + "edStep"]);
        if (0x1 === this["_accumulat" + "edStep"]) {
          this["_character"]["preActions"]();
          if (this['inputAllow' + 'ed']) {
            if ("rYcPK" === "gZzeU") {
              this['cullLayer'](this["_level"]['foreground']["children"]);
              this["_level"]['characterL' + "ayer"] && this["cullLayer"](this['_level']["characterL" + "ayer"]['children']);
              this["cullLayer"](this["_level"]['background']["children"]);
            } else {
              var nu = this["mouseClick" + "Map"][this["iteration"]['toString']()];
              nu && this["level"]["mouseClick" + "Trigger"](nu);
              this["iteration"] >= this["totalItera" + "tions"] ? this["levelCompl" + "ete"]() : this["_character"]["checkRepla" + "yData"](this['keyDisplay'], this["replayData"]['getKeyEntr' + 'y'](this["iteration"]));
              this["_iteration"]++;
            }
          } else {
            this['_character']["doNothing"]();
          }
          this["_character"]["actions"]();
          this["m_world"]['Step'](this["m_timeStep"], this["m_iteratio" + 'ns']);
          this["_character"]["handleCont" + "actBuffer"]();
          this["_character"]["checkJoint" + 's']();
          this["_level"]["actions"]();
        }
        0x1 === this["steps"] && this["m_world"]["Interpolat" + "edStep"](0x1);
        this["_character"]["paint"]();
        this["_level"]["paint"]();
        this["_camera"]["step"](nB);
        this["_particleC" + "ontroller"]["step"](nB);
        0x1 === this["_accumulat" + "edStep"] && (qC['m']["instance"]['step'](), this["_accumulat" + "edStep"] = 0x0);
        this["_useCullin" + 'g'] && this["cullObject" + 's']();
      } else {
        N["prototype"]["chestSmash"]["call"](this, f);
        this["eject"]();
      }
    };
    nt['run'] = function (nB) {
      this["fpsCounter"]["begin"]();
      this['stage']['frameRate'] !== this["_previousF" + "rameRate"] && (this["extraUpdat" + 'es'] = this['stage']["frameRate"], this["_previousF" + "rameRate"] = this["stage"]["frameRate"]);
      if (this["_extraUpda" + 'tes'] > 0x0) {
        for (var nu = 0x0; nu <= this["_extraUpda" + "tes"]; nu++) {
          this["update"]();
        }
      } else {
        this["_realUpdat" + "eFrames"] % this["_frameRate" + "Count"] === 0x0 && this["update"]();
      }
      this["_realUpdat" + "eFrames"]++;
      this["fpsCounter"]["end"]();
    };
    nt["levelCompl" + "ete"] = function (nB) {
      void 0x0 === nB && (nB = null);
      this["inputAllow" + 'ed'] = !0x1;
      this['dispatchEv' + "ent"](new qA['b9'](qA['b9']["COMPLETED"]));
    };
    nt["die"] = function (nB) {
      void 0x0 === nB && (nB = !0x1);
      np["prototype"]['die']["call"](this, nB);
      this['removeRepl' + "ayControls"]();
    };
    nk = nK;
    (ns = [{
      'key': "extraUpdat" + 'es',
      'set': function (nB) {
        if ("PYRCW" !== "PYRCW") {
          this["searchText"]["text"] = this["searchText"]["_pixiTextI" + "nput"]["text"];
          this["errorText"]["text"] = '';
          if (this["searchText"]["text"]["startsWith"]('d_')) {
            return this["executeDeb" + "ugCommand"](this["searchText"]["text"]) ? void this['dispatchEv' + "ent"](new C['Jh'](j["CANCEL"])) : void (this["errorText"]["text"] = "Unknown co" + "mmand");
          }
          var nl = !0x0;
          0x1 == this["searchText"]["text"]["split"]('=')["length"] ? (P(p(this["searchText"]["text"])) && (nl = !0x1), K(this["searchText"]["text"]) < 0x1 && (nl = !0x1)) : -0x1 == this["searchText"]["text"]["indexOf"]("level_id") && -0x1 == this["searchText"]["text"]["indexOf"]("replay_id") && (nl = !0x1);
          nl ? this["dispatchEv" + "ent"](new m['Jh'](I["LOAD"])) : this["errorText"]["text"] = "ID is inva" + 'lid.';
        } else {
          switch (nB) {
            case 0x5:
              this["_extraUpda" + "tes"] = -0x2;
              this["_frameRate" + "Count"] = 0x3;
              break;
            case 0xf:
              this["_extraUpda" + "tes"] = -0x1;
              this['_frameRate' + "Count"] = 0x2;
              break;
            case 0x1e:
              this["_extraUpda" + 'tes'] = 0x0;
              this["_frameRate" + "Count"] = 0x1;
              break;
            case 0x3c:
              this["_extraUpda" + "tes"] = 0x1;
              break;
            case 0x64:
              this["_extraUpda" + "tes"] = 0x2;
          }
        }
      }
    }]) && function (nB, nu) {
      if ("fsvIN" === "fsvIN") {
        for (var nl = 0x0; nl < nu["length"]; nl++) {
          if ("gWjPj" === "QIFzr") {
            this['currentPos' + 'e'] = 0x1;
          } else {
            var no = nu[nl];
            no["enumerable"] = no["enumerable"] || !0x1;
            no["configurab" + 'le'] = !0x0;
            "value" in no && (no["writable"] = !0x0);
            Object['defineProp' + "erty"](nB, nf(no["key"]), no);
          }
        }
      } else {
        return this["_dead"];
      }
    }(nk["prototype"], ns);
    Object["defineProp" + "erty"](nk, "prototype", {
      'writable': !0x1
    });
    return nk;
  }(qE['N']);
  function nh(np, nK) {


    if ("lkgEk" !== "HeJhs") {
      nh = Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"]["bind"]() : function (nm, nI) {
        nm["__proto__"] = nI;
        return nm;
      };
      return nh(np, nK);
    } else {
      j["shape2"]["m_isSensor"] || (P["shape1"] == p["frontWheel" + "Shape"] ? K["frontConta" + 'cts'] -= 0x1 : m["backContac" + 'ts'] -= 0x1, I["wheelConta" + "cts"] = k['frontConta' + "cts"] + f["backContac" + 'ts']);
    }
  }
  var nC = function (np) {


    if ("RQvMD" === "RQvMD") {
      function nk(ns, nt, nB, nu, nl, no) {
        var ni;
        (ni = np["call"](this, nt, null, null, nl, no) || this)["_container" + "Sprite"] = ns;
        ni["addChild"](ni["_container" + "Sprite"]);
        ni["_character"] = nB;
        ni["_character"]["session"] = ni;
        ni['_level'] = nu;
        ni["_level"]['session'] = ni;
        return ni;
      }
      var nK;
      var nm;
      nm = np;
      (nK = nk)["prototype"] = Object["create"](nm["prototype"]);
      nK["prototype"]["constructo" + 'r'] = nK;
      nh(nK, nm);
      var nI = nk["prototype"];
      nI["init"] = function (ns, nt) {};
      nI["create"] = function () {
        if ("zRCWK" !== "HyJcw") {
          this['_particleC' + "ontroller"] = new nn['h'](this["_container" + "Sprite"]);
          this["createWorl" + 'd']();
          this["_level"]["reset"]();
          this["_level"]['insertBack' + "Drops"]();
          this["_character"]["reset"]();
          this["_character"]["addKeyList" + "eners"]();
          this["_camera"] = new q3['_'](this["_container" + "Sprite"], this["_character"]['cameraFocu' + 's'], this);
          this["_camera"]["secondFocu" + 's'] = this["_character"]['cameraSeco' + "ndFocus"];
          var ns = this['_level']["cameraBoun" + 'ds'];
          this["_camera"]["setLimits"](ns['x'], ns['x'] + ns["width"], ns['y'], ns['y'] + ns['height']);
          this["_camera"]["step"](0x1);
          this["setupTextF" + "ields"]();
          this['useDebugge' + 'r'] && this["_container" + "Sprite"]["addChild"](this["debug_spri" + 'te']);
          this["_character"]["addEventLi" + "stener"](qA['c0']['ADD_ENTRY'], this['addReplayE' + "ntryBind"]);
          this["_character"]["paint"]();
          this['_level']["paint"]();
          this["addKeyDisp" + "lay"]();
          this["start"]();
        } else {
          var nB = this["bgHeight"] - 0x1e;
          this["button"]['y'] = nB;
          this["textField"]['y'] = (nB - this["textField"]["_pixiText"]["height"]) / 0x2;
        }
      };
      return nk;
    } else {
      for (var nt = this["copterBody"]["GetAngular" + "Velocity"](); this["targetAng"] > P['PI'];) {
        this["targetAng"] -= 0x2 * p['PI'];
      }
      for (; this["targetAng"] < -K['PI'];) {
        this['targetAng'] += 0x2 * m['PI'];
      }
      for (var nB = this["copterBody"]["GetAngle"](); nB > I['PI'];) {
        nB -= 0x2 * k['PI'];
      }
      for (; nB < -f['PI'];) {
        nB += 0x2 * q1['PI'];
      }
      var nu = nt - 0x3 * -B["sin"](nB - this["targetAng"]);
      this["copterBody"]['m_angularV' + "elocity"] -= nu;
    }
  }(qE['N']);
  function nj(np, nK) {


    if ("FUCrB" !== "FUCrB") {
      void 0x0 === qA && (qN = 0x0);
      0x0 == qc && (qV = new qE()["getTime"]());
      this["pool"]["buffer"][this["pptr"]++] ^= 0xff & ql;
      this["pool"]["buffer"][this["pptr"]++] ^= q3 >> 0x8 & 0xff;
      this["pool"]["buffer"][this['pptr']++] ^= nK >> 0x10 & 0xff;
      this["pool"]['buffer'][this["pptr"]++] ^= qs >> 0x18 & 0xff;
      this['pptr'] %= this["psize"];
    } else {
      nj = Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"]["bind"]() : function (nI, nk) {
        return "yPzyl" === 'dahMK' ? (j = P, p = 0x0, K = m, I['n'] = k, f) : (nI['__proto__'] = nk, nI);
      };
      return nj(np, nK);
    }
  }
  var nP = function (np) {


    function nK(ns, nt, nB, nu, nl, no) {
      var ni;
      (ni = np["call"](this, nt, null, null, nl, no) || this)['_container' + "Sprite"] = ns;
      ni["addChild"](ni["_container" + 'Sprite']);
      ni['_character'] = nB;
      ni["_character"]['session'] = ni;
      ni["_level"] = nu;
      ni["_level"]["session"] = ni;
      return ni;
    }
    var nm;
    var nI;
    nI = np;
    (nm = nK)["prototype"] = Object["create"](nI['prototype']);
    nm["prototype"]["constructo" + 'r'] = nm;
    nj(nm, nI);
    var nk = nK['prototype'];
    nk["init"] = function (ns, nt) {};
    nk['create'] = function () {
      this["_particleC" + "ontroller"] = new nn['h'](this['_container' + "Sprite"]);
      this["createWorl" + 'd']();
      this["_level"]["reset"]();
      this["_level"]["insertBack" + "Drops"]();
      this["_character"]['reset']();
      this["_camera"] = new q3['_'](this["_container" + "Sprite"], this["_character"]["cameraFocu" + 's'], this);
      this["_camera"]["secondFocu" + 's'] = this["_character"]['cameraSeco' + "ndFocus"];
      var ns = this["_level"]["cameraBoun" + 'ds'];
      this["_camera"]["setLimits"](ns['x'], ns['x'] + ns['width'], ns['y'], ns['y'] + ns["height"]);
      this["_camera"]["step"](0x1);
      this["setupTextF" + 'ields']();
      this["useDebugge" + 'r'] && this["_container" + "Sprite"]["addChild"](this["debug_spri" + 'te']);
      this["m_world"]["Interpolat" + 'edStep'](0x1);
      this["_character"]['paint']();
      this["_level"]['paint']();
      this["start"]();
    };
    return nK;
  }(nV);
}