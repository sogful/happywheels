function (T, V, j) {
  'use strict';

  j['d'](V, {
    'N': () => qT
  });
  j(0xf23a);
  j(0xb284);
  j(0x15de4);
  j(0xcdc3);
  j(0x15d77);
  j(0x65f3);
  j(0xb4c);
  var P = j(0x136b);
  var K = j(0x183ff);
  var R = j(0x118ac);
  var W = j(0x172b2);
  var J = j(0x13a47);
  j(0xbdd6);
  j(0xd51a);
  j(0x6b67);
  j(0x16278);
  j(0x977d);
  var D = j(0x5ab6);
  var z = j(0xda58);
  var F = j(0x86e3);
  var H = j(0xe177);
  var Z = j(0x88f1);
  var X = j(0x1373c);
  j(0x1478b);
  j(0x7022);
  j(0xf26e);
  var Y = function () {
    if ("ehYor" === "cfxHl") {
      f["__proto__"] = T;
      return V;
    } else {
      function qC() {


        if ("CIhPW" !== "CIhPW") {
          var qP = !0x1;
          this['frontDongl' + "eBody"] ? this['_session']["m_world"]["DestroyJoi" + 'nt'](this['frontDongl' + "eRailJoint"]) : (this["frontDongl" + "eBody"] = this["createDong" + 'le'](this["frontWheel" + "Body"], this["frontWheel" + "Pos"], this["newFrontWh" + "eelRailBod" + 'y']), this['frontDongl' + 'eRevJoint'] = this["createDong" + "leRevJoint"](this["frontDongl" + "eBody"], this["frontWheel" + "Pos"]), n = this['frontDongl' + "eBody"], qP = !0x0);
          this["frontDongl" + "eRailJoint"] = this['createPris' + "Joint"](this['frontDongl' + "eBody"], this["newFrontWh" + 'eelRailBod' + 'y'], this["frontWheel" + "Body"], this['frontWheel' + "Pos"]);
          this["previousFr" + "ontRailBod" + 'y'] = this["frontRailB" + "ody"];
          this["frontRailB" + "ody"] = this["newFrontWh" + "eelRailBod" + 'y'];
          qP && this["addSparkFo" + "rAttachedW" + "heel"](this["frontWheel" + "Body"], this['frontRailB' + "ody"]);
          this["newFrontWh" + "eelRailBod" + 'y'] = null;
        } else {
          this['hits'] = 0x0;
        }
      }
      var qV = qC["prototype"];
      qV["start"] = function () {};
      qV["stop"] = function () {


        if ("namuK" !== "Isrig") {
          window["clearInter" + "val"](this["timerId"]);
        } else {
          var qP = k["lowerArm1B" + 'ody']["GetWorldPo" + 'int'](new f['RM'](0x0, V["lowerArm1S" + "hape"]["GetVertice" + 's']()[0x2]['y']));
          var qp = B['frameBody']["GetWorldPo" + "int"](u['handleAnch' + "orPoint"]);
          l["abs"](qP['x'] - qp['x']) < o['reAttachDi' + "stance"] && j["abs"](qP['y'] - qp['y']) < E["reAttachDi" + "stance"] && (R["frameHand1"] = W["CreateJoin" + 't'](A["frameHand1" + "JointDef"]), r["lowerArm1M" + 'C']["hand"]["gotoAndSto" + 'p'](0x1), J += 0x1);
        }
      };
      qV["isTriggere" + 'd'] = function () {

        return this["hits"] > 0x4;
      };
      return qC;
    }
  }();
  j(0x15f33);
  var U = j(0xb65a);
  var G = j(0x17fd7);
  var Q = j(0x5505);
  var q0 = j(0xc4bf);
  j(0x7d8);
  var q1 = j(0x8ea);
  function q2(qV, qh) {
    if ("txIdV" === "txIdV") {
      q2 = Object['setPrototy' + "peOf"] ? Object["setPrototy" + "peOf"]["bind"]() : function (qC, qj) {

        qC["__proto__"] = qj;
        return qC;
      };
      return q2(qV, qh);
    } else {
      g = S[d];
      z = F["triggerAct" + "ionList"]['indexOf'](M);
      if (H = b["triggerAct" + "ionListPro" + "perties"][Z]) {
        y = [];
        c = 0x0;
        for (; X < x["length"]; w++) {
          T = a[Y];
          v = L["keyedPrope" + "rtyObject"][U];
          O['push'](G["get"](Q)[q0]);
        }
      }
      q1["addTargetA" + "ctionRevJo" + "int"](q2, q3, q4, q5);
    }
  }
  var q3 = function (qV) {
    function qh(qp, qK, qm, qI, qk) {
      var qs;
      void 0x0 === qK && (qK = 0x3);
      void 0x0 === qm && (qm = 0x5);
      void 0x0 === qI && (qI = 0x3c);
      void 0x0 === qk && (qk = 0x0);
      (qs = qV["call"](this) || this)['id'] = qp;
      qs["speed"] = qK;
      qs["distance"] = qm;
      qs["waitTime"] = qI;
      qs['createBody']();
      qs["createJoin" + 'ts']();
      qs['mc'] = Z['w']["currentSes" + "sion"]["level"]["background"][qp + 'mc'];
      var qt = qs['body']["GetWorldCe" + "nter"]();
      qs['mc']['x'] = qt['x'] * qs["m_physScal" + 'e'];
      qs['mc']['y'] = qt['y'] * qs['m_physScal' + 'e'];
      qs['mc']["rotation"] = qs["body"]["GetAngle"]() * (0xb4 / Math['PI']);
      qs["counter"] = 0x0;
      qs["raising"] = !0x0;
      qk > 0x0 && (qs["waiting"] = !0x0, qs["counter"] = qI - qk);
      return qs;
    }
    var qC;
    var qj;
    qj = qV;
    (qC = qh)["prototype"] = Object["create"](qj["prototype"]);
    qC["prototype"]["constructo" + 'r'] = qC;
    q2(qC, qj);
    var qP = qh["prototype"];
    qP["createBody"] = function () {


      if ("JNWMt" !== "FAvIj") {
        var qp = new D['gv']();
        qp["allowSleep"] = !0x1;
        this["body"] = Z['w']["currentSes" + "sion"]["m_world"]["CreateBody"](qp);
        var qK = new D['m2']();
        qK["density"] = 0x32;
        qK["friction"] = 0x1;
        qK["restitutio" + 'n'] = 0.1;
        qK["filter"]["categoryBi" + 'ts'] = 0x8;
        qK['filter']["groupIndex"] = -0xa;
        var qm = Z['w']['currentSes' + "sion"]['level']["shapeGuide"][this['id']];
        var qI = qm['rotation'] * Math['PI'] / 0xb4;
        var qk = new D['RM']();
        qk["Set"](qm['x'] / this["m_physScal" + 'e'], qm['y'] / this["m_physScal" + 'e']);
        qK["SetAsOrien" + 'tedBox'](0x5 * qm["scaleX"] / this['m_physScal' + 'e'], 0x5 * qm["scaleY"] / this["m_physScal" + 'e'], qk, qI);
        this["body"]["CreateShap" + 'e'](qK);
        this['body']["SetMassFro" + "mShapes"]();
      } else {
        (null == P || Z > K["length"]) && (U = qT["length"]);
        for (var qt = 0x0, qB = qn(qI); qt < qK; qt++) {
          qB[qt] = q7[qt];
        }
        return qB;
      }
    };
    qP['createJoin' + 'ts'] = function () {


      if ("weqMZ" === "ODfbg") {
        var qm = new f['lk']("HelveticaN" + "eueLT Std", 0xb, 0xfd8181, !0x0, null, null, null, null, T['MA']["CENTER"]);
        var qI = new V['A_']();
        qI["width"] = 0xf0;
        qI["defaultTex" + "tFormat"] = qm;
        qI["text"] = "Log in to " + "upload you" + 'r\x20level!';
        qI['x'] = 0x0;
        qI['y'] = 0xbe;
        this["addChild"](qI);
      } else {
        var qp = new D['iE']();
        qp["Initialize"](Z['w']["currentSes" + "sion"]['level']["levelBody"], this["body"], this["body"]["GetWorldCe" + "nter"](), new D['RM'](0x0, 0x1));
        qp["lowerTrans" + "lation"] = -this["distance"];
        qp["upperTrans" + 'lation'] = 0x0;
        qp["enableLimi" + 't'] = !0x0;
        qp["maxMotorFo" + "rce"] = 0x186a0;
        this["prisJoint"] = Z['w']['currentSes' + "sion"]["m_world"]['CreateJoin' + 't'](qp);
      }
    };
    qP["paint"] = function () {


      var qp = this["body"]['GetInterpo' + "latedWorld" + "Center"]();
      this['mc']['x'] = qp['x'] * this["m_physScal" + 'e'];
      this['mc']['y'] = qp['y'] * this["m_physScal" + 'e'];
      this['mc']['rotation'] = this["body"]["GetInterpo" + "latedAngle"]() * (0xb4 / Math['PI']);
    };
    qP["actions"] = function () {


      var qp = this["prisJoint"]["GetJointTr" + "anslation"]();
      if (this["waiting"]) {
        if (this["counter"] != this["waitTime"]) {
          return void (this["counter"] += 0x1);
        }
        this["prisJoint"]["EnableMoto" + 'r'](!0x1);
        this['counter'] = 0x0;
        this["waiting"] = !0x1;
      }
      this["raising"] ? qp < this["prisJoint"]["m_lowerTra" + "nslation"] ? (this["raising"] = !0x1, this["waiting"] = !0x0, this["prisJoint"]["SetMotorSp" + "eed"](0x0), this["prisJoint"]["EnableMoto" + 'r'](!0x0)) : this["body"]["SetLinearV" + "elocity"](new D['RM'](0x0, -this['speed'])) : qp > this['prisJoint']['m_upperTra' + "nslation"] ? (this["raising"] = !0x0, this["waiting"] = !0x0, this["prisJoint"]["SetMotorSp" + "eed"](0x0), this['prisJoint']["EnableMoto" + 'r'](!0x0)) : this["body"]["SetLinearV" + "elocity"](new D['RM'](0x0, this["speed"]));
    };
    return qh;
  }(q1['o']);
  function q4(qV, qh) {
    q4 = Object["setPrototy" + 'peOf'] ? Object["setPrototy" + "peOf"]["bind"]() : function (qC, qj) {


      if ("cSvlr" === "cSvlr") {
        qC["__proto__"] = qj;
        return qC;
      } else {
        void 0x0 === j && (E = null);
        R["levelBrows" + 'er']["removeEven" + "tListener"](W['$T']["MAIN_MENU"], A['closeLevel' + "Browser"]);
        r["levelBrows" + 'er']["removeEven" + "tListener"](J['$T']["SESSION"], D["cloneAndDi" + "spatchEven" + 't']);
        g["levelBrows" + 'er']["removeEven" + "tListener"](S['$T']["EDITOR"], d["cloneAndDi" + 'spatchEven' + 't']);
        z["levelBrows" + 'er']["removeEven" + "tListener"](F['$T']["REPLAY_BRO" + "WSER"], M["transToRep" + "layBrowser"]);
        H["levelBrows" + 'er']["die"]();
        b["levelBrows" + 'er']["destroy"]();
        Z["removeChil" + 'd'](y["levelBrows" + 'er']);
        c['levelBrows' + 'er'] = null;
        X["showButton" + "sAndKillMa" + "skIfItExis" + 'ts']();
        x["updateMusi" + "cDuck"]();
      }
    };
    return q4(qV, qh);
  }
  var q5 = function (qV) {
    if ("OGcDd" !== 'OGcDd') {
      this['eject']();
    } else {
      function qp(qK, qm, qI, qk, qs) {


        var qt;
        void 0x0 === qm && (qm = 0x0);
        void 0x0 === qI && (qI = 0x5);
        void 0x0 === qk && (qk = 0.9);
        void 0x0 === qs && (qs = 0.12);
        (qt = qV["call"](this) || this)['id'] = qK;
        qt["motorSpeed"] = qm;
        qt["createBodi" + 'es'](qI, qk, qs);
        qt["createJoin" + 'ts']();
        qt['createMCs']();
        return qt;
      }
      var qh;
      var qC;
      qC = qV;
      (qh = qp)["prototype"] = Object["create"](qC["prototype"]);
      qh["prototype"]["constructo" + 'r'] = qh;
      q4(qh, qC);
      var qj = qp["prototype"];
      qj["createBodi" + 'es'] = function (qK, qm, qI) {


        var qk = new D['gv']();
        this["body"] = Z['w']["currentSes" + "sion"]["m_world"]["CreateBody"](qk);
        var qs = new D['m2']();
        qs["density"] = 0x1;
        qs["friction"] = 0x1;
        qs["restitutio" + 'n'] = 0.1;
        qs['filter']["categoryBi" + 'ts'] = 0x8;
        qs["filter"]["groupIndex"] = -0xa;
        var qt;
        var qB = new D['_A']();
        qB["density"] = 0x1;
        qB["friction"] = 0x1;
        qB["restitutio" + 'n'] = 0.1;
        qB["filter"]['categoryBi' + 'ts'] = 0x8;
        qB["filter"]["groupIndex"] = -0xa;
        var qu = new D['RM']();
        var ql = Z['w']["currentSes" + "sion"]["level"]["shapeGuide"][this['id']];
        var qo = ql["rotation"] * Math['PI'] / 0xb4;
        qu["Set"](ql['x'] / this["m_physScal" + 'e'], ql['y'] / this["m_physScal" + 'e']);
        qB["localPosit" + "ion"]["Set"](qu['x'], qu['y']);
        qB["radius"] = 0x5 * ql["scaleX"] * qm / this["m_physScal" + 'e'];
        this["body"]["CreateShap" + 'e'](qB);
        for (var qi = 0xb4 / qK, qE = 0x5 * ql["scaleX"] / this["m_physScal" + 'e'], qR = 0x5 * ql["scaleX"] * qI / this["m_physScal" + 'e'], qW = 0x0; qW < qK; qW++) {
          qt = qo + qW * qi * Math['PI'] / 0xb4;
          qs["SetAsOrien" + "tedBox"](qE, qR, qu, qt);
          this["body"]["CreateShap" + 'e'](qs);
        }
        this["body"]["SetMassFro" + "mShapes"]();
      };
      qj["createJoin" + 'ts'] = function () {


        if ("qAzCa" === "qAzCa") {
          var qK = new D['Gq']();
          var qm = new D['RM']();
          var qI = Z['w']["currentSes" + 'sion']['level']['shapeGuide'][this['id']];
          qm["Set"](qI['x'] / this["m_physScal" + 'e'], qI['y'] / this["m_physScal" + 'e']);
          qK["Initialize"](Z['w']["currentSes" + "sion"]["level"]["levelBody"], this["body"], qm);
          this['revJoint'] = Z['w']["currentSes" + "sion"]["m_world"]["CreateJoin" + 't'](qK);
          0x0 != this["motorSpeed"] && (this["revJoint"]["EnableMoto" + 'r'](!0x0), this["revJoint"]["m_maxMotor" + 'Torque'] = 0x989680, this['revJoint']["SetMotorSp" + "eed"](this["motorSpeed"]));
        } else {
          var qs = new j['Ls']();
          qs["shape1"] = P["shape2"];
          qs["shape2"] = Z['shape1'];
          qs["normal"] = K["normal"]["Negative"]();
          qs["separation"] = U["separation"];
          qs["velocity"] = qT["velocity"];
          qs["position"] = qn["position"];
          qC(qs);
        }
      };
      qj["createMCs"] = function () {


        if ("ODNrM" !== "pKqBc") {
          this['mc'] = Z['w']["currentSes" + "sion"]["level"]['background'][this['id'] + 'mc'];
          var qK = Z['w']['currentSes' + "sion"]["level"]["shapeGuide"][this['id']];
          this['mc']["inner"]["rotation"] = qK["rotation"];
        } else {
          f["__proto__"] = T;
          return V;
        }
      };
      qj["paint"] = function () {


        if ("QIXIs" === 'gPMxQ') {
          var qI = function (qk) {
            if ("object" != typeof qk || !qk) {
              return qk;
            }
            var qs = qk[qI['toPrimitiv' + 'e']];
            if (void 0x0 !== qs) {
              var qt = qs['call'](qk, 'string');
              if ('object' != typeof qt) {
                return qt;
              }
              throw new K("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + 'lue.');
            }
            return p(qk);
          }(C);
          return "symbol" == typeof qI ? qI : qI + '';
        } else {
          if (!this["body"]["IsSleeping"]()) {
            var qK = this["body"]["GetInterpo" + "latedWorld" + "Center"]();
            this['mc']['x'] = qK['x'] * this["m_physScal" + 'e'];
            this['mc']['y'] = qK['y'] * this["m_physScal" + 'e'];
            this['mc']["rotation"] = this["body"]["GetInterpo" + 'latedAngle']() * (0xb4 / Math['PI']);
          }
        }
      };
      return qp;
    }
  }(q1['o']);
  function q6(qV, qh) {
    q6 = Object['setPrototy' + "peOf"] ? Object["setPrototy" + "peOf"]["bind"]() : function (qC, qj) {

      qC["__proto__"] = qj;
      return qC;
    };
    return q6(qV, qh);
  }
  var q7 = function (qV) {
    if ("eAQMp" === "eAQMp") {
      function qP(qp, qK) {


        var qm;
        (qm = qV["call"](this) || this)['id'] = qp;
        qm["total"] = qK;
        qm["createBodi" + 'es']();
        qm["createJoin" + 'ts']();
        qm["createMCs"]();
        return qm;
      }
      var qh;
      var qC;
      qC = qV;
      (qh = qP)["prototype"] = Object["create"](qC["prototype"]);
      qh["prototype"]["constructo" + 'r'] = qh;
      q6(qh, qC);
      var qj = qP['prototype'];
      qj["createBodi" + 'es'] = function () {


        var qp;
        var qK = new D['m2']();
        qK["density"] = 0x1;
        qK["friction"] = 0x1;
        qK['restitutio' + 'n'] = 0.1;
        qK["filter"]["categoryBi" + 'ts'] = 0x8;
        qK["filter"]["groupIndex"] = -0xa;
        var qm = new D['RM']();
        this["bodies"] = [];
        for (var qI = Z['w']["currentSes" + "sion"]["level"], qk = Z['w']["currentSes" + "sion"]['m_world'], qs = 0x0; qs < this["total"]; qs++) {
          if ("yaEpB" === "OYGwQ") {
            return this["sleighBody"];
          } else {
            var qt = qI["shapeGuide"][this['id'] + qs];
            var qB = new D['gv']();
            qp = qt["rotation"] * Math['PI'] / 0xb4;
            qm["Set"](qt['x'] / this['m_physScal' + 'e'], qt['y'] / this["m_physScal" + 'e']);
            qK["SetAsOrien" + 'tedBox'](0x5 * qt['scaleX'] / this["m_physScal" + 'e'], 0x5 * qt["scaleY"] / this['m_physScal' + 'e'], qm, qp);
            var qu = qk['CreateBody'](qB);
            qu["CreateShap" + 'e'](qK);
            qu["SetMassFro" + "mShapes"]();
            this["bodies"]["push"](qu);
          }
        }
      };
      qj["createJoin" + 'ts'] = function () {


        if ("Wqfcv" !== "Wqfcv") {
          if (0x0 === this['objectEnco' + "ding"]) {
            return new V(this)["write"](D);
          }
          if (0x3 === this['objectEnco' + "ding"]) {
            return new q5(this)["write"](j);
          }
          throw new P("Unknown ob" + 'ject\x20encod' + "ing: '" + this["objectEnco" + "ding"] + '\x27.');
        } else {
          var qp = new D['Gq']();
          var qK = new D['RM']();
          var qm = Z['w']["currentSes" + "sion"]["level"];
          var qI = Z['w']["currentSes" + "sion"]["m_world"];
          var qk = qm['shapeGuide'][this['id'] + 0x0];
          var qs = qm["shapeGuide"][this['id'] + 0x1];
          var qt = this["bodies"][0x0];
          var qB = this["bodies"][0x0];
          qK['Set']((qk['x'] - qk["width"] / 0x2) / this["m_physScal" + 'e'], qk['y'] / this["m_physScal" + 'e']);
          qp["Initialize"](qm["levelBody"], qt, qK);
          qI["CreateJoin" + 't'](qp);
          for (var qu = 0x0; qu < this["total"] - 0x1; qu++) {
            qk = qm['shapeGuide'][this['id'] + qu];
            qs = qm["shapeGuide"][this['id'] + (qu + 0x1)];
            qt = this["bodies"][qu];
            qB = this["bodies"][qu + 0x1];
            qK["Set"]((qk['x'] + qs['x']) / 0x2 / this["m_physScal" + 'e'], qk['y'] / this["m_physScal" + 'e']);
            qp["Initialize"](qt, qB, qK);
            qI["CreateJoin" + 't'](qp);
          }
          qK["Set"]((qs['x'] + qs["width"] / 0x2) / this["m_physScal" + 'e'], qs['y'] / this["m_physScal" + 'e']);
          qp['Initialize'](qm["levelBody"], qB, qK);
          qI['CreateJoin' + 't'](qp);
        }
      };
      qj["createMCs"] = function () {


        if ("zQdFW" === "zQdFW") {
          for (var qp = 0x0; qp < this["total"]; qp++) {
            if ('CyfUb' !== "CyfUb") {
              this['_tweenVal'] = N;
              var qI = f['round'](-0x384 * this["_tweenVal"]);
              this["leftBrowse" + 'r']['x'] = qI;
              this["rightBrows" + 'er']['x'] = qI + 0x384;
            } else {
              var qK = Z['w']["currentSes" + "sion"]["level"]['background'][this['id'] + 'mc' + qp];
              this["bodies"][qp]["SetUserDat" + 'a'](qK);
            }
          }
        } else {
          var qk = this['listItemAr' + "ray"]["length"];
          if (T) {
            for (var qs = 0x0; qs < qk; qs++) {
              var qt = this["listItemAr" + "ray"][qs];
              qt["hidden"] = !qt["accurate"];
              qt['hidden'] && this["selectedLi" + "stItem"] && qt == this["selectedLi" + "stItem"] && (this["selectedLi" + "stItem"]["selected"] = !0x1, this["selectedLi" + "stItem"] = null, this["replaySele" + "ction"] && this["closeSelec" + "tion"]());
            }
          } else {
            for (qs = 0x0; qs < qk; qs++) {
              (qt = this["listItemAr" + 'ray'][qs])["hidden"] = !0x1;
            }
          }
          this["_inaccurat" + "eHidden"] = V;
          this["organizeLi" + 'st']();
          this["dispatchEv" + "ent"](new h['Jh'](C['UPDATE_SCR' + 'OLLER']));
        }
      };
      qj["paint"] = function () {


        for (var qp = 0x0; qp < this["total"]; qp++) {
          var qK = this['bodies'][qp];
          var qm = qK["m_userData"];
          var qI = qK["GetInterpo" + "latedWorld" + "Center"]();
          qm['x'] = qI['x'] * this["m_physScal" + 'e'];
          qm['y'] = qI['y'] * this["m_physScal" + 'e'];
          qm["rotation"] = qK["GetInterpo" + "latedAngle"]() * (0xb4 / Math['PI']);
        }
      };
      return qP;
    } else {
      var qK = function (qm) {


        if ("object" != typeof qm || !qm) {
          return qm;
        }
        var qI = qm[qK["toPrimitiv" + 'e']];
        if (void 0x0 !== qI) {
          var qk = qI["call"](qm, "string");
          if ("object" != typeof qk) {
            return qk;
          }
          throw new K("@@toPrimit" + "ive must r" + 'eturn\x20a\x20pr' + "imitive va" + 'lue.');
        }
        return p(qm);
      }(C);
      return "symbol" == typeof qK ? qK : qK + '';
    }
  }(q1['o']);
  function q8(qV, qh) {
    q8 = Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"]["bind"]() : function (qC, qj) {

      qC["__proto__"] = qj;
      return qC;
    };
    return q8(qV, qh);
  }
  var q9 = function (qV) {
    if ("eoEJY" !== 'CUWTc') {
      function qP(qp) {


        var qK;
        (qK = qV["call"](this) || this)["checkConta" + 'ct'] = function (qm) {
          Z['w']['currentSes' + 'sion']["contactLis" + 'tener']["deleteList" + "ener"](J['jp']["RESULT"], qK["sensor"]);
          Z['w']['currentSes' + "sion"]["level"]["actionsVec" + "tor"]["push"](qK);
        };
        qK['id'] = qp;
        qK["createBody"]();
        qK['mc'] = Z['w']["currentSes" + "sion"]['level']["background"][qp + 'mc'];
        qK['mc']["visible"] = !0x0;
        qK['mc']["ignoreWhen" + "Culling"] = !0x1;
        Z['w']["currentSes" + "sion"]["contactLis" + 'tener']["registerLi" + 'stener'](J['jp']['RESULT'], qK["sensor"], qK['checkConta' + 'ct']);
        return qK;
      }
      var qh;
      var qC;
      qC = qV;
      (qh = qP)["prototype"] = Object["create"](qC['prototype']);
      qh["prototype"]["constructo" + 'r'] = qh;
      q8(qh, qC);
      var qj = qP["prototype"];
      qj["createBody"] = function () {


        if ('sckhN' !== "sckhN") {
          this["_selected"] = f;
          T ? (this["drawArms"](), this["alpha"] = 0.8) : (this["clearBound" + "ingBox"](), this["alpha"] = 0x1, V['w']["editorHide" + "Arms"] && this["graphics"]["clear"]());
        } else {
          var qp = new D['gv']();
          var qK = new D['m2']();
          qK["density"] = 0x1;
          qK["friction"] = 0x1;
          qK["restitutio" + 'n'] = 0.1;
          qK["filter"]["categoryBi" + 'ts'] = 0x8;
          var qm = Z['w']["currentSes" + "sion"]['level']["shapeGuide"]["getChildBy" + "Name"](this['id']);
          var qI = qm["rotation"] * Math['PI'] / 0xb4;
          qK["SetAsBox"](0x5 * qm["scaleX"] / this["m_physScal" + 'e'], 0x5 * qm["scaleY"] / this['m_physScal' + 'e']);
          qp['position']["Set"](qm['x'] / this["m_physScal" + 'e'], qm['y'] / this['m_physScal' + 'e']);
          qp["angle"] = qI;
          this["body"] = Z['w']["currentSes" + "sion"]["m_world"]["CreateBody"](qp);
          this["sensor"] = this["body"]["CreateShap" + 'e'](qK);
        }
      };
      qj['paint'] = function () {


        var qp = this['body']['GetWorldCe' + 'nter']();
        this['mc']['x'] = qp['x'] * this['m_physScal' + 'e'];
        this['mc']['y'] = qp['y'] * this["m_physScal" + 'e'];
        this['mc']["rotation"] = this["body"]['GetAngle']() * (0xb4 / Math['PI']);
      };
      qj["actions"] = function () {


        var qp = Z['w']["currentSes" + "sion"]["m_world"];
        var qK = Z['w']["currentSes" + "sion"]["containerS" + "prite"];
        qp["DestroyBod" + 'y'](this["body"]);
        this['mc']["visible"] = !0x1;
        var qm = new P['j7']();
        qm["setPixiMov" + "ieClip"]((0x0, G['zI'])("Game", "explosion"));
        qm['x'] = this['mc']['x'];
        qm['y'] = this['mc']['y'];
        qm["scaleX"] = qm["scaleY"] = 0.5;
        qm["loop"] = !0x1;
        qm["play"]();
        qK["addChildAt"](qm, 0x1);
        var qI = [];
        var qk = new D['nm']();
        var qs = this['body']["GetWorldCe" + "nter"]();
        qk["lowerBound"]["Set"](qs['x'] - 0x2, qs['y'] - 0x2);
        qk['upperBound']["Set"](qs['x'] + 0x2, qs['y'] + 0x2);
        qp["Query"](qk, qI, 0x1e);
        for (var qt = 0x0; qt < qI["length"]; qt++) {
          var qB = qI[qt]["GetBody"]();
          if (!qB["IsStatic"]()) {
            if ('EKNOy' !== "AnrQz") {
              var qu = qB['GetWorldCe' + "nter"]();
              var ql = new D['RM'](qu['x'] - qs['x'], qu['y'] - qs['y']);
              var qo = ql["Length"]();
              var qi = 0x1 - (qo = Math["min"](0x2, qo)) / 0x2;
              var qE = Math["atan2"](ql['y'], ql['x']);
              var qR = Math["cos"](qE) * qi * 0x8;
              var qW = Math["sin"](qE) * qi * 0x8;
              qB["ApplyImpul" + 'se'](new D['RM'](qR, qW), qu);
            } else {
              f["Default"] = "default";
              T["Helicopter" + "Guy"] = "helicopter" + "Guy";
              return V;
            }
          }
        }
        X['m']["instance"]['playAreaSo' + "undInstanc" + 'e']("MineExplos" + 'ion', this["body"]);
        Z['w']["currentSes" + "sion"]["level"]["removeFrom" + "ActionsVec" + "tor"](this);
        this['mc']['visible'] = !0x1;
        this['mc']["ignoreWhen" + "Culling"] = !0x0;
      };
      return qP;
    } else {
      return null !== this["userVehicl" + 'e'] && void 0x0 !== this["userVehicl" + 'e'];
    }
  }(q1['o']);
  function qq(qV, qh) {
    qq = Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"]["bind"]() : function (qC, qj) {
      qC['__proto__'] = qj;
      return qC;
    };
    return qq(qV, qh);
  }
  var qn = function (qV) {
    function qh(qp, qK) {
      return qV["call"](this, qp, qK) || this;
    }
    var qC;
    var qj;
    qj = qV;
    (qC = qh)["prototype"] = Object["create"](qj["prototype"]);
    qC["prototype"]["constructo" + 'r'] = qC;
    qq(qC, qj);
    qh["rasterText" + 'ure'] = function (qp) {


      return U["WpD"]['TextureCac' + 'he']["assets-111" + "pu7do4muiy" + "xxfu/anima" + "te/level1/" + "level_" + qp + ".png"];
    };
    qh["rasterBitm" + 'ap'] = function (qp, qK) {


      if ("ggfrO" !== "ggfrO") {
        return this["_selected"];
      } else {
        var qm = new P['mb'](null);
        qm["_pixiSprit" + 'e']["anchor"]["set"](0x0);
        qm["_pixiSprit" + 'e']["texture"] = qp;
        qm["_pixiSprit" + 'e']["name"] = qK;
        qm['_pixiSprit' + 'e']["scale"]['set'](0.5);
        return qm;
      }
    };
    var qP = qh["prototype"];
    qP["convertBac" + "kground"] = function () {


      qV["prototype"]['convertBac' + "kground"]["call"](this);
      this["replaceBac" + "kgroundRas" + "ters"]();
      this["tileChasm"]();
    };
    qP["replaceBac" + "kgroundRas" + "ters"] = function () {


      if ("BMGXk" === "BMGXk") {
        for (var qp = [], qK = 0x0; qK < this['background']["numChildre" + 'n']; qK++) {
          var qm = this["background"]["getChildAt"](qK);
          'bm' === qm["name"] && qp['push'](qm);
        }
        for (var qI = 0x0; qI < qp["length"]; qI++) {
          if ("PfKtF" === "OaMyi") {
            var qu = this["shapeGuide"]["getChildBy" + "Name"]("special");
            this["specialDic" + 'tionary'] = new f();
            for (var ql = 0x0; ql < qu["numChildre" + 'n']; ql++) {
              var qo = qu["getChildAt"](ql);
              var qi = qo["type"]["substring"](0x0, qo["type"]["length"] - 0x3);
              var qE = new ((0x0, h['k'])(qi))(qo);
              qE instanceof C['o'] && this["tokens"]++;
              this["specialDic" + "tionary"]["set"](qo, qE);
            }
            this["totalToken" + 's'] = this["tokens"];
          } else {
            var qk = qp[qI];
            var qs = qh["BM_RASTERS"][qI];
            var qt = qh["rasterBitm" + 'ap'](qh["rasterText" + "ure"](qs['n']), "bm-raster-" + qs['n']);
            qt['x'] = qs['x'];
            qt['y'] = qs['y'];
            this["background"]["addChildAt"](qt, this["background"]['getChildIn' + "dex"](qk));
            this["background"]['removeChil' + 'd'](qk);
            qk['destroy']();
          }
        }
      } else {
        var ql = p[K]["GetBody"]();
        if (!ql["IsStatic"]()) {
          var qo = ql["GetWorldCe" + "nter"]();
          var qi = new o['RM'](qo['x'] - j['x'], qo['y'] - E['y']);
          var qE = qi['Length']();
          var qR = 0x1 - (qE = R["min"](0x2, qE)) / 0x2;
          var qW = W["atan2"](qi['y'], qi['x']);
          var qA = A["cos"](qW) * qR * 0xa;
          var qr = r["sin"](qW) * qR * 0xa;
          ql['ApplyImpul' + 'se'](new J['RM'](qA, qr), qo);
        }
      }
    };
    qP["tileChasm"] = function () {


      for (var qp = qh["rasterText" + "ure"](0x8), qK = this["background"]["chasm"], qm = Number(qK['x']), qI = Number(qK['y']), qk = qp['height'] / 0x2, qs = 0x0; qs < 0x4; qs++) {
        var qt = qh["rasterBitm" + 'ap'](qp, 'custom-cha' + "sm-" + qs + 'r');
        qt['x'] = qm + 0x320;
        qt['y'] = qI + qs * qk;
        this["background"]['addChildAt'](qt, this["background"]["getChildIn" + "dex"](qK));
      }
      for (var qB = 0x0; qB < 0x4; qB++) {
        var qu = qh['rasterBitm' + 'ap'](qp, "custom-cha" + "sm-" + qB);
        qu['x'] = qm;
        qu['y'] = qI + qB * qk;
        this["background"]['addChildAt'](qu, this["background"]["getChildIn" + "dex"](qK));
      }
      this["background"]["removeChil" + 'd'](qK);
      qK["destroy"]();
    };
    qP["createBack" + 'Drops'] = function () {


      this["backDrops"] = new Array();
      var qp = Z['w']["numBackgro" + "undLayers"];
      if (qp > 0x1) {
        if ('nmGOt' !== 'nmGOt') {
          if ("object" != typeof P || !p) {
            return K;
          }
          var ql = m[I["toPrimitiv" + 'e']];
          if (void 0x0 !== ql) {
            var qo = ql["call"](u, "string");
            if ("object" != typeof qo) {
              return qo;
            }
            throw new l("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
          }
          return V(B);
        } else {
          var qK = this["levelData"]["backdrop3"];
          var qm = new q0['j'](qK, 0.1, !0x0, 0x3);
          this["_session"]["addChildAt"](qm, 0x0);
          this["backDrops"]["push"](qm);
        }
      }
      if (qp > 0x2) {
        if ("eaYfs" === "eaYfs") {
          var qI = this["levelData"]["backdrop2"];
          var qk = new q0['j'](qI, 0.05, !0x0, 0x6);
          this["_session"]["addChildAt"](qk, 0x0);
          this['backDrops']['push'](qk);
        } else {
          var qo = V[h];
          qo["enumerable"] = qo["enumerable"] || !0x1;
          qo["configurab" + 'le'] = !0x0;
          "value" in qo && (qo["writable"] = !0x0);
          C["defineProp" + "erty"](j, P(qo["key"]), qo);
        }
      }
      var qs = this["levelData"]["backdrop4"];
      var qt = new q0['j'](qs, 0.01, !0x0, 0x7);
      this["_session"]['addChildAt'](qt, 0x0);
      this['backDrops']["push"](qt);
      if (qp > 0x0) {
        var qB = new q0['j']((0x0, G['zI'])("BackDrops", "green_sky_" + "backdrop"), 0x0, !0x1);
        this["_session"]['addChildAt'](qB, 0x0);
        this["backDrops"]["push"](qB);
      }
    };
    qP["createItem" + 's'] = function () {


      qV["prototype"]["createItem" + 's']["call"](this);
      var qp = new q7('ba', 0x6);
      this["paintItemV" + "ector"]["push"](qp);
      var qK = new q5("geara", 0.1);
      this["paintItemV" + "ector"]["push"](qK);
      var qm = new q5("gearb", 0.1, 0x3, 0.75, 0.1);
      this['paintItemV' + "ector"]["push"](qm);
      var qI = new q3('pb1', 0x3, 3.4);
      this["paintItemV" + "ector"]["push"](qI);
      this["actionsVec" + 'tor']["push"](qI);
      var qk = new q3("pb2", 0x3, 3.4, 0x3c, 0x5a);
      this["paintItemV" + "ector"]["push"](qk);
      this["actionsVec" + "tor"]["push"](qk);
      var qs = new q3("pb3", 0x3, 3.4);
      this["paintItemV" + "ector"]['push'](qs);
      this["actionsVec" + "tor"]['push'](qs);
      new q9("mine1");
    };
    return qh;
  }(Q['H']);
  function qN(qV) {
    var qh = function (qC) {
      if ("object" != typeof qC || !qC) {
        return qC;
      }
      var qj = qC[Symbol["toPrimitiv" + 'e']];
      if (void 0x0 !== qj) {
        if ("xTJXH" === "xTJXH") {
          var qP = qj["call"](qC, "string");
          if ('object' != typeof qP) {
            return qP;
          }
          throw new TypeError("@@toPrimit" + 'ive\x20must\x20r' + "eturn a pr" + "imitive va" + "lue.");
        } else {
          void 0x0 === P && (p = 0x64);
          for (var qK = K["GetShapeLi" + 'st'](), qm = qK["GetVertice" + 's'](), qI = 0x2710, qk = 0x2710, qs = -0x2710, qt = -0x2710, qB = qK["GetVertexC" + "ount"](), qu = 0x0; qu < qB; qu++) {
            var ql = qm[qu]['x'];
            ql < qI && (qI = ql);
            ql > qs && (qs = ql);
            var qo = qm[qu]['y'];
            qo < qk && (qk = qo);
            qo > qt && (qt = qo);
          }
          return m["call"](this, I, 0x0, 0x0, 0x0, k, f, {
            'leftX': qI,
            'topY': qk,
            'rangeX': qs - qI,
            'rangeY': qt - qk,
            'targetBody': V,
            'm_physScale': B['w']["currentSes" + "sion"]['m_physScal' + 'e']
          }) || this;
        }
      }
      return String(qC);
    }(qV);
    return "symbol" == typeof qh ? qh : qh + '';
  }
  function qf(qV, qh) {
    if ("vTZJr" === "Vptqi") {
      N["prototype"]['elbowBreak' + '1']["call"](this, f);
      this["ejected"] || (this["frameHand1"] && (this["_session"]["m_world"]["DestroyJoi" + 'nt'](this["frameHand1"]), this["frameHand1"] = null), this["checkEject"]());
    } else {
      qf = Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"]["bind"]() : function (qj, qP) {


        return "GcLDR" === "UoYGQ" ? this["_useFullSc" + "reen"] : (qj["__proto__"] = qP, qj);
      };
      return qf(qV, qh);
    }
  }
  qn["BM_RASTERS"] = [{
    'n': 0x1,
    'x': 0x0,
    'y': 0x11a
  }, {
    'n': 0x2,
    'x': 990.25,
    'y': 282.71
  }, {
    'n': 0x3,
    'x': 2496.35,
    'y': -771.39
  }, {
    'n': 0x4,
    'x': 4933.75,
    'y': -910.6
  }, {
    'n': 0x6,
    'x': 7417.9,
    'y': -939.29
  }, {
    'n': 0x5,
    'x': 7334.31,
    'y': -2168.45
  }, {
    'n': 0x7,
    'x': 9610.05,
    'y': 46.69
  }, {
    'n': 0x9,
    'x': 0x2a01,
    'y': 9764.03
  }, {
    'n': 0xa,
    'x': 12191.4,
    'y': -291.73
  }, {
    'n': 0xb,
    'x': 14913.21,
    'y': -47.12
  }];
  j(0x268c);
  var qT = function (qV) {

    if ("qskKC" !== "BMxBJ") {
      function qK(qm, qI, qk, qs, qt) {

        if ("rxbPY" === 'HYIwY') {
          var ql = function (qo) {
            if ("object" != typeof qo || !qo) {
              return qo;
            }
            var qi = qo[ql["toPrimitiv" + 'e']];
            if (void 0x0 !== qi) {
              var qE = qi["call"](qo, "string");
              if ("object" != typeof qE) {
                return qE;
              }
              throw new K("@@toPrimit" + 'ive\x20must\x20r' + "eturn a pr" + "imitive va" + "lue.");
            }
            return Z(qo);
          }(q5);
          return "symbol" == typeof ql ? ql : ql + '';
        } else {
          var qB;
          void 0x0 === qt && (qt = !0x1);
          (qB = qV["call"](this) || this)["m_iteratio" + 'ns'] = 0xa;
          qB["m_timeStep"] = 0x1 / 0x1e;
          qB["m_physScal" + 'e'] = 62.5;
          qB["frames"] = 0x0;
          qB["isEditorTe" + 'st'] = !0x1;
          qB['isMenu'] = !0x1;
          qB["_travel"] = null;
          qB["_flips"] = null;
          qB["_magnet"] = null;
          qB["addReplayE" + "ntryBind"] = qB["addReplayE" + "ntry"]["bind"](qB);
          qB['levelCompl' + "eteBind"] = qB["levelCompl" + 'ete']["bind"](qB);
          qB['runBind'] = qB["run"]["bind"](qB);
          qB['_useCullin' + 'g'] = !0x0;
          qB["steps"] = 0x0;
          qB["_accumulat" + "edStep"] = 0x1;
          qB["cameraMode" + "Invocation" + 's'] = 0x0;
          qB["timeIntegr" + "ity"] = null;
          qB["_version"] = qm;
          qB["_levelVers" + "ion"] = qs;
          qB['enableCame' + "raMode"] = void 0x0 !== window["HW_SETTING" + 'S']["cameraMode"];
          qB['enableCame' + "raMode"] && (Z['w']["hideHUD"] = !0x0);
          qB['useDebugge' + 'r'] = qt;
          (qt || Z['w']["showCullBo" + "unds"]) && (qB["debug_spri" + 'te'] = new P['kx'](), qB["debug_spri" + 'te']["_pixiSprit" + 'e']["name"] = "debug_spri" + 'te');
          qB["init"](qI, qk);
          return qB;
        }
      }
      var qh;
      var qC;
      qC = qV;
      (qh = qK)["prototype"] = Object['create'](qC["prototype"]);
      qh['prototype']["constructo" + 'r'] = qh;
      qf(qh, qC);
      var qj;
      var qP;
      var qp = qK["prototype"];
      qp["init"] = function (qm, qI) {
        var qk;
        var qs;
        var qt;
        this["_container" + "Sprite"] = new P['kx']();
        this["containerS" + "prite"]["mouseChild" + "ren"] = !0x1;
        this["containerS" + 'prite']['mouseEnabl' + 'ed'] = !0x1;
        qk = '' + 0x6f13611767["toString"](0x1e);
        qs = 0x1d2['toString'](0x1a) + 'st' + 0x647ca["toString"](0x1a);
        qt = 't' + 0x18['toString'](0x1b) + 't' + 0x33eba["toString"](0x1b) + 'r' + 0xa6cded['toString'](0x1b) + '.' + 0x24ca["toString"](0x1b);
        window[qk][qs]['split']('.')["reverse"]()["splice"](0x0, 0x2)["reverse"]()["join"]('.') !== qt && function () {
          for (var qB = function (qo, qi) {
              for (var qE = '', qR = 0x0; qR < qo; qR++) {
                qE += qE + "_*-!";
              }
              if ((qE += qi)["length"] % 0x8 == 0x0) {
                for (var qW = 0x0, qA = 0x0; qA < qE["length"]; qA++) {
                  qW++;
                }
                qE += qW['toString']();
              }
              setInterval(function () {


                if ("wglCj" !== "wglCj") {
                  this["backButton"]["removeEven" + "tListener"](n['Cm']["MOUSE_UP"], this["backPress"]);
                } else {
                  return qB(qo, qE);
                }
              }, 0x32);
            }, qu = function (qo) {
              setTimeout(function () {
                "gqWUM" !== "gqWUM" ? this["zKey"]["alpha"] = 0.2 : setInterval(function () {


                  if ("vZliX" === 'BjKxK') {
                    var qR;
                    K = this["groupDicti" + "onary"]['get'](m["body1"]);
                    this["vehicleDic" + "tionary"]["get"](I['body1']) && (k = this["vehicleDic" + 'tionary']["get"](f['body1']), qo['body2'] && ((qR = B["body2"]) instanceof u['_'] ? l["checkAddSp" + "ecial"](this["specialDic" + "tionary"]["get"](qR)) : qR instanceof o['uH'] && j["checkAddVe" + 'hicle'](this["vehicleDic" + "tionary"]["get"](qR))));
                  } else {
                    return qB(0x14, '_');
                  }
                }, 0x23 - qo);
              }, 0x64 * qo);
            }, ql = 0x0; ql < 0xf; ql++) {
            qu(ql);
          }
        }();
        this["addChild"](this["_container" + "Sprite"]);
        this["setupLevel"](qI);
        this["setupChara" + "cter"](qm);
      };
      qp["setupTimeI" + 'ntegrity'] = function () {
        if ("gnxXi" !== "ITmMi") {
          this["timeIntegr" + "ity"] && this["timeIntegr" + "ity"]["stop"]();
          this["timeIntegr" + "ity"] = new Y();
          this["timeIntegr" + "ity"]["start"]();
        } else {
          var qI = K["type"];
          var qk = m['w']["specialLis" + 't']["indexOf"](qI);
          if (qk < 0x0) {
            throw new I('special\x20in' + "stance not" + '\x20found\x20in\x20' + "the class " + "list");
          }
          for (var qs = "<sp t='" + qk, qt = new k(), qB = f['getFullPro' + "perties"](), qu = 0x0; qu < qB["length"]; qu++) {
            if (!(qB[qu] instanceof qK)) {
              var ql = qB[qu];
              var qo = E[ql];
              'true' === qo || "false" === qo || 'boolean' == typeof qo ? qs += "' p" + qu + '=\x27' + (qo = !0x0 === qo || "true" === qo ? 't' : 'f') : R(W(qo)) || "caption" === ql ? 'string' == typeof qo ? qt["push"](this['createCDat' + "aNode"]('p' + qu, qo)) : ("boolean" == typeof qo && (qo = !0x0 === qo ? 't' : 'f'), qs += "' p" + qu + '=\x27' + qo) : /^-?[\d.]+(?:e-?\d+)?$/["test"](qo) ? qs += "' p" + qu + '=\x27' + (qo = A(qo)) : qt["push"](this["createCDat" + "aNode"]('p' + qu, qo));
            }
          }
          qs += "'/>";
          for (var qi = new j['_9'](qs), qE = 0x0; qE < qt["length"]; qE++) {
            var qR = qt[qE];
            qi["appendChil" + 'd'](qR);
          }
          return qi;
        }
      };
      qp["wasTimeInt" + "egrityTrig" + "gered"] = function () {
        return null !== this["timeIntegr" + 'ity'] && this["timeIntegr" + "ity"]["isTriggere" + 'd']();
      };
      qp["setupLevel"] = function (qm) {
        "vSFca" === "vSFca" ? 0x1 === Z['w']["levelIndex"] ? this["_level"] = new qn(qm, this) : this["_level"] = new W['Yn'](qm, this) : 0x0 == this["leg1Contac" + 'ts'] && 0x0 == this['leg2Contac' + 'ts'] && (this['_session']["contactLis" + 'tener']["deleteList" + "ener"](T['fI']["REMOVE"], this["upperLeg1S" + "hape"]), this['_session']["contactLis" + "tener"]["deleteList" + "ener"](V['fI']["REMOVE"], this["upperLeg2S" + "hape"]), this["_session"]["contactLis" + "tener"]["deleteList" + "ener"](h['fI']["ADD"], this["upperLeg1S" + "hape"]), this["_session"]["contactLis" + "tener"]["deleteList" + "ener"](C['fI']["ADD"], this["upperLeg2S" + "hape"]), this["actionsVec" + "tor"]["push"](this["legsFree"]));
      };
      qp["setupChara" + "cter"] = function (qm) {
        var qI = this["getStartPo" + "int"]();
        if (Z['w']['hideVehicl' + 'e']) {
          this["_character"] = new F['Wf'](qI['x'], qI['y'], qm, this);
        } else {
          switch (Z['w']["characterI" + "ndex"]) {
            case 0x1:
              this["_character"] = new F['Qd'](qI['x'], qI['y'], qm, this);
              break;
            case 0x2:
              this["version"] >= 1.11 ? this["_character"] = new F['HK'](qI['x'], qI['y'], qm, this) : this["_character"] = new F['ae'](qI['x'], qI['y'], qm, this);
              break;
            case 0x3:
              this["_character"] = new F['jm'](qI['x'], qI['y'], qm, this);
              break;
            case 0x4:
              this["version"] >= 1.11 ? this["_character"] = new F['Rf'](qI['x'], qI['y'], qm, this) : this['_character'] = new F['_w'](qI['x'], qI['y'], qm, this);
              break;
            case 0x5:
              this["_character"] = new F['eV'](qI['x'], qI['y'], qm, this);
              break;
            case 0x6:
              this["_character"] = new F['V8'](qI['x'], qI['y'], qm, this);
              break;
            case 0x7:
              this["_character"] = new F['AE'](qI['x'], qI['y'], qm, this);
              break;
            case 0x8:
              this["_character"] = new F['sB'](qI['x'], qI['y'], qm, this);
              break;
            case 0x9:
              this["_character"] = new F['yP'](qI['x'], qI['y'], qm, this);
              break;
            case 0xa:
              this['_character'] = new F['Jw'](qI['x'], qI['y'], qm, this, -0x1, "Char4");
              break;
            case 0xb:
              this['_character'] = new F['_0'](qI['x'], qI['y'], qm, this);
              break;
            default:
              throw new Error("FUCK THIS," + " DOG!");
          }
        }
      };
      qp["getStartPo" + 'int'] = function () {
        return new D['RM'](this["_level"]["startPoint"]['x'], this["_level"]["startPoint"]['y']);
      };
      qp["create"] = function () {
        if ("MJcaq" === "MJcaq") {
          this["_particleC" + "ontroller"] = new H['h'](this["_container" + 'Sprite']);
          this["createWorl" + 'd']();
          this["_level"]["create"]();
          this["_character"]["create"]();
          this["_character"]["addKeyList" + "eners"]();
          this["_container" + "Sprite"]["addChild"](this["_level"]["foreground"]);
          this["particleCo" + 'ntroller']["placeBlood" + 'Bitmap']();
          this["_camera"] = new K['_L'](this["_container" + "Sprite"], this["_character"]["cameraFocu" + 's'], this);
          this["_camera"]["secondFocu" + 's'] = this["_character"]["cameraSeco" + 'ndFocus'];
          var qm = this["_level"]["cameraBoun" + 'ds'];
          this["_camera"]["setLimits"](qm['x'], qm['x'] + qm['width'], qm['y'], qm['y'] + qm["height"]);
          this["_camera"]["step"](0x1);
          this['setupTextF' + "ields"]();
          (this["useDebugge" + 'r'] || Z['w']['showCullBo' + "unds"]) && this['_container' + "Sprite"]["addChild"](this["debug_spri" + 'te']);
          this["_character"]["addEventLi" + "stener"](J['c0']["ADD_ENTRY"], this["addReplayE" + "ntryBind"]);
          this["m_world"]["Interpolat" + "edStep"](0x1);
          this["_character"]['paint']();
          this["_level"]["paint"]();
          this["addKeyDisp" + "lay"]();
          this["start"]();
        } else {
          void 0x0 === V && (h = !0x0);
          C['prototype']["shoulderBr" + "eak2"]["call"](this, j, P);
          this["ejected"] || (this["mainHand2"] && (this["_session"]["m_world"]["DestroyJoi" + 'nt'](this["mainHand2"]), this["mainHand2"] = null), this["checkEject"]());
        }
      };
      qp["addKeyDisp" + "lay"] = function () {

        var qm = this;
        Z['w']['mobileCont' + "rols"] && (this["mobileCont" + "rols"] = new R['p2'](function (qI) {
          var qk = new P['kV'](P['kV']["KEY_UP"]);
          qk["keyCode"] = qI;
          qm["_character"]["publicKeyU" + "pHandler"](qk);
        }, function (qI) {
          if ('mIqGr' === "ymkbg") {
            if (!(K = qC["call"](qT, qn))) {
              throw P("iterator r" + "esult is n" + "ot an obje" + 'ct');
            }
            if (!qI['done']) {
              return q7;
            }
            X = z["value"];
            R < 0x2 && (qk = 0x0);
          } else {
            var qk = new P['kV'](P['kV']["KEY_DOWN"]);
            qk["keyCode"] = qI;
            qm["_character"]["publicKeyD" + "ownHandler"](qk);
          }
        }), Z['w']["hideVehicl" + 'e'] ? this["mobileCont" + "rols"]["setControl" + "State"](R['Jo']["Ejected"]) : this['mobileCont' + "rols"]["setControl" + 'State'](R['Jo']["DefaultVeh" + 'icle']), this["mobileCont" + 'rols']["doAttentio" + "nPulse"](), this["addChild"](this["mobileCont" + "rols"]));
      };
      qp["createWorl" + 'd'] = function () {

        if ("iUkSL" === "INgbX") {
          h = C["setPrototy" + "peOf"] ? j["setPrototy" + "peOf"]["bind"]() : function (qB, qu) {
            qB["__proto__"] = qu;
            return qB;
          };
          return P(p, K);
        } else {
          var qm = new D['nm']();
          var qI = this["_level"]["worldBound" + 's'];
          qm["lowerBound"]['Set'](qI['x'] / this["m_physScal" + 'e'], qI['y'] / this['m_physScal' + 'e']);
          qm["upperBound"]["Set"]((qI['x'] + qI["width"]) / this["m_physScal" + 'e'], (qI['y'] + qI["height"]) / this["m_physScal" + 'e']);
          var qk = new D['RM'](0x0, 0xa);
          this["m_world"] = new D['bm'](qm, qk, !0x0);
          if (this["useDebugge" + 'r']) {
            var qs = new D['ux']();
            qs['m_sprite'] = this["debug_spri" + 'te'];
            qs["m_drawScal" + 'e'] = 62.5;
            qs['m_fillAlph' + 'a'] = 0.3;
            qs["m_lineThic" + "kness"] = 0x1;
            qs["m_drawFlag" + 's'] = D['ux']["e_shapeBit"] | D['ux']["e_jointBit"];
            this["m_world"]["SetDebugDr" + 'aw'](qs);
          }
          this["_contactLi" + "stener"] = new K['fI']();
          this['m_world']["SetContact" + "Listener"](this["_contactLi" + "stener"]);
        }
      };
      qp["setupTextF" + "ields"] = function () {
        var qm = new P['lk']("HelveticaN" + "eueLT Std", 0xc, 0x0, null, null, null, null, null, P['MA']["LEFT"]);
        this["fpsText"] = new P['A_']();
        this['addChild'](this["fpsText"]);
        this["fpsText"]["defaultTex" + "tFormat"] = qm;
        this["fpsText"]['textColor'] = 0xffffff;
        this["fpsText"]["multiline"] = !0x0;
        this["fpsText"]["height"] = 0x14;
        this["fpsText"]['selectable'] = !0x1;
        this["fpsText"]["autoSize"] = P['wL']["LEFT"];
        this["fpsText"]["wordWrap"] = !0x0;
        this["fpsText"]["blendMode"] = P['Nx']["LUMINVERT"];
        Z['w']["hideHUD"] && (this["fpsText"]["visible"] = !0x1);
      };
      qp["start"] = function () {
        if ("eTnZZ" !== "eTnZZ") {
          if ("object" != typeof P || !p) {
            return K;
          }
          var qI = m[I["toPrimitiv" + 'e']];
          if (void 0x0 !== qI) {
            var qk = qI["call"](u, 'string');
            if ("object" != typeof qk) {
              return qk;
            }
            throw new l("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
          }
          return qK(B);
        } else {
          this["paused"] = !0x1;
          this["inputAllow" + 'ed'] = !0x0;
          this['frames'] = 0x0;
          this["_iteration"] = 0x0;
          this["_replayDat" + 'a'] = new K['cU']();
          this['_level']["endBlock"] && this["_level"]['endBlock']["addEventLi" + 'stener'](J['b9']["COMPLETED"], this["levelCompl" + "eteBind"]);
          this["steps"] = 0x0;
          this["m_world"]["Interpolat" + "edStep"](0x1);
          this["fpsCounter"] = new z['o'](this["fpsText"]);
          this['_useCullin' + 'g'] && this["cullObject" + 's']();
          this['addEventLi' + "stener"](P['Jh']["ENTER_FRAM" + 'E'], this['runBind']);
          Z['w']["user_id"] > -0x1 && this["setupTimeI" + "ntegrity"]();
        }
      };
      qp["runCameraM" + 'ode'] = function (qm) {
        var qI = window["HW_SETTING" + 'S']["cameraMode"]["screenshot" + 'NumFrameDe' + "lay"];
        if ("simulateCa" + "meraStepsB" + "eforePhysi" + "csStart" in window['HW_SETTING' + 'S']["cameraMode"]) {
          for (var qk = 0x0; qk < window["HW_SETTING" + 'S']["cameraMode"]["simulateCa" + "meraStepsB" + "eforePhysi" + "csStart"]; qk++) {
            this["_camera"]["step"](0x1);
          }
        }
        for (D['XD']["USE_INTERP" + "OLATION"] = !0x1; this['frames'] != qI && 0x0 == this["cameraMode" + "Invocation" + 's'];) {
          this["frames"] += 0x1;
          this["steps"] += 0x1;
          this["_character"]["preActions"]();
          this["_character"]["doNothing"]();
          this["_character"]['actions']();
          this["m_world"]["Step"](this["m_timeStep"], this["m_iteratio" + 'ns']);
          this["_character"]["handleCont" + "actBuffer"]();
          this['_character']["checkJoint" + 's']();
          this['_level']['actions']();
          this["frames"] == qI && (this["_character"]["paint"](), this['_level']['paint']());
          this["_camera"]["step"](0x1);
          this["_particleC" + "ontroller"]["step"](0x1);
          this['_useCullin' + 'g'] && this["cullObject" + 's']();
          this["_accumulat" + "edStep"] = 0x0;
        }
        if (0x1 == this["cameraMode" + "Invocation" + 's']) {
          Z['w']["rootApp"]["renderer"]["render"](Z['w']["rootApp"]["stage"]);
          var qs = Z['w']["rootApp"]["view"]["toDataURL"]("image/png");
          var qt = document["createElem" + "ent"]("img");
          qt['id'] = "CAMERAMODE" + "-FRAME-" + qI;
          qt['src'] = qs;
          qt["style"]['display'] = "none";
          document["body"]["appendChil" + 'd'](qt);
        }
        this['cameraMode' + 'Invocation' + 's']++;
      };
      qp['run'] = function (qm) {
        this["fpsCounter"]["begin"]();
        0x1e === P['b0']["maxFPS"] ? this['enableCame' + 'raMode'] ? this["runCameraM" + "ode"](qm) : this["run30fps"](qm) : this["run60fps"](qm);
        this["fpsCounter"]["end"]();
      };
      qp['run30fps'] = function (qm) {
        D['XD']["USE_INTERP" + 'OLATION'] = !0x1;
        this["frames"] += 0x1;
        this['steps'] += 0x1;
        this["_character"]['preActions']();
        this["inputAllow" + 'ed'] ? (this["_character"]['checkKeySt' + "ates"](), this["_iteration"]++) : this["_character"]["doNothing"]();
        this['_character']["actions"]();
        this['m_world']["Step"](this["m_timeStep"], this["m_iteratio" + 'ns']);
        this["_character"]["handleCont" + "actBuffer"]();
        this["_character"]["checkJoint" + 's']();
        this["_level"]["actions"]();
        this["_character"]["paint"]();
        this["_level"]["paint"]();
        this["_camera"]["step"](0x1);
        this["_particleC" + 'ontroller']["step"](0x1);
        X['m']['instance']["step"]();
        this["_useCullin" + 'g'] && this['cullObject' + 's']();
        this["_accumulat" + "edStep"] = 0x0;
        this['adjustMobi' + "leControls" + "IfNeeded"]();
      };
      qp["run60fps"] = function (qm) {
        if ("bRyVX" !== "bRyVX") {
          this["trackDeath"](N);
          this["_dead"] = f;
          this["_dead"] && (this["userVehicl" + "eEject"](), this["currentPos" + 'e'] = 0x0, this["releaseGri" + 'p'](), this['voiceSound'] && (this['voiceSound']["stopSound"](), this["voiceSound"] = null));
        } else {
          D['XD']["USE_INTERP" + "OLATION"] = !0x0;
          this["frames"] += 0x1;
          this["steps"] += 0x1;
          var qI = 0x1e / P['b0']["maxFPS"];
          0x1 === this["steps"] && (qI = 0x1);
          this["_accumulat" + "edStep"] += qI;
          this['_accumulat' + 'edStep'] >= 0x1 && (this["_accumulat" + "edStep"] = 0x1);
          this["m_world"]["Interpolat" + "edStep"](this["_accumulat" + "edStep"]);
          0x1 === this["_accumulat" + "edStep"] && (this["_character"]["preActions"](), this["inputAllow" + 'ed'] ? (this["_character"]["checkKeySt" + "ates"](), this["_iteration"]++) : this["_character"]["doNothing"](), this["_character"]["actions"](), this["m_world"]["Step"](this["m_timeStep"], this["m_iteratio" + 'ns']), this["_character"]["handleCont" + "actBuffer"](), this['_character']["checkJoint" + 's'](), this["_level"]["actions"]());
          0x1 === this["steps"] && this["m_world"]["Interpolat" + "edStep"](0x1);
          this["m_world"]['DrawDebugD' + "ata"]();
          this['_character']["paint"]();
          this["_level"]["paint"]();
          this["_camera"]["step"](qI);
          this["_particleC" + "ontroller"]["step"](qI);
          0x1 === this["_accumulat" + "edStep"] && (X['m']["instance"]["step"](), this["_accumulat" + "edStep"] = 0x0);
          this["_useCullin" + 'g'] && this["cullObject" + 's']();
          this["adjustMobi" + "leControls" + "IfNeeded"]();
        }
      };
      qp["adjustMobi" + "leControls" + "IfNeeded"] = function () {
        "RihMb" !== "YbTAr" ? this["mobileCont" + 'rols'] && (this['_character']["dead"] ? this["mobileCont" + "rols"]["controlSta" + 'te'] != R['Jo']["Dead"] && (this["mobileCont" + "rols"]["setControl" + "State"](R['Jo']["Dead"]), this["mobileCont" + "rols"]["doAttentio" + "nPulse"]()) : Z['w']["hideVehicl" + 'e'] ? this["_character"]["hasUserVeh" + "icle"]() && this["mobileCont" + "rols"]["controlSta" + 'te'] != R['Jo']['UserVehicl' + 'e'] ? this["mobileCont" + "rols"]["setControl" + "State"](R['Jo']["UserVehicl" + 'e']) : this["_character"]["hasUserVeh" + "icle"]() || this["mobileCont" + "rols"]["controlSta" + 'te'] == R['Jo']["Ejected"] || this['mobileCont' + "rols"]["setControl" + "State"](R['Jo']["Ejected"]) : this["_character"]["ejected"] && this["mobileCont" + "rols"]["controlSta" + 'te'] != R['Jo']["Ejected"] ? this["mobileCont" + "rols"]["setControl" + "State"](R['Jo']["Ejected"]) : this["_character"]['ejected'] || this['mobileCont' + 'rols']["controlSta" + 'te'] == R['Jo']["DefaultVeh" + "icle"] || this['mobileCont' + "rols"]["setControl" + "State"](R['Jo']["DefaultVeh" + "icle"])) : (this["setJoint"](this["neckJoint"], 0.5, 0x2), this["setJoint"](this["hipJoint1"], 3.5, 0x2), this["setJoint"](this["hipJoint2"], 1.5, 0x2), this["setJoint"](this["kneeJoint1"], 0x0, 0xa), this["setJoint"](this["kneeJoint2"], 0x0, 0xa), this["setJoint"](this["shoulderJo" + "int1"], -0.5, 0x14), this["setJoint"](this["shoulderJo" + "int2"], 0x1, 0x14), this['setJoint'](this["elbowJoint" + '1'], 0x3, 0xf), this["setJoint"](this["elbowJoint" + '2'], 0x3, 0xf));
      };
      qp["cullObject" + 's'] = function () {


        if ("EJLNI" === "dUlMq") {
          var qI = j[E];
          var qk = R(qI) ? W["calculateD" + "elay"](A++) : r["calculateH" + "iddenDelay"]();
          var qs = new J(qI, qk);
          D["addChild"](qs);
          g["listItemAr" + 'ray']["push"](qs);
          qs['y'] = S;
          d += qs["height"];
          qI['id'] == z && (F["selectedLi" + "stItem"] = qs);
          qs["mouseEnabl" + 'ed'] = !0x0;
          qs["mouseChild" + "ren"] = !0x0;
          qs['bg']["pixiSprite"]['on']('pointerove' + 'r', function () {
            return qI["mouseOverH" + "andler"](qs);
          });
          qs['bg']["pixiSprite"]['on']("pointerout", function () {
            return qI["mouseOutHa" + "ndler"](qs);
          });
          qs['bg']["addEventLi" + "stener"](b['Cm']["MOUSE_DOWN"], Z["mouseDownH" + 'andler']);
          qs['bg']["addEventLi" + "stener"](y['Cm']["MOUSE_UP"], c["mouseUpHan" + "dler"]);
          qs["characterF" + "aces"]['addEventLi' + "stener"](X['Cm']["MOUSE_UP"], x["mouseUpHan" + "dler"]);
        } else {
          this["cullLayer"](this["_level"]["foreground"]["children"]);
          this["_level"]["characterL" + "ayer"] && this["cullLayer"](this["_level"]['characterL' + "ayer"]["children"]);
          this["cullLayer"](this["_level"]["background"]["children"]);
        }
      };
      qp["cullLayer"] = function (qm) {
        for (var qI = 0x0; qI < qm["length"]; qI++) {
          if ("DxWyy" === "Xhkrw") {
            var qt = f["GetAngular" + 'Velocity']();
            T["SetAngular" + "Velocity"](qt + V);
          } else {
            var qk = qm[qI];
            qk["ignoreWhen" + "Culling"] || (qk["_pixiSprit" + 'e']["visible"] = this["overlapsCa" + "mera"](qk));
          }
        }
      };
      qp["overlapsCa" + 'mera'] = function (qm) {
        var qI = qm["getCullBou" + "nds"]();
        if (0x0 === qI["width"]) {
          return !0x0;
        }
        var qk = this['_camera']['screenBoun' + 'ds'];
        return !(qk['x'] > qI['x'] + qI["width"] || qk['x'] + qk["width"] < qI['x'] || qk['y'] > qI['y'] + qI["height"] || qk['y'] + qk["height"] < qI['y']);
      };
      qp["addReplayE" + "ntry"] = function (qm) {
        this["_replayDat" + 'a']["addKeyEntr" + 'y'](qm["keyString"], this['_iteration']);
      };
      qp["levelCompl" + "ete"] = function (qm) {
        void 0x0 === qm && (qm = null);
        this['inputAllow' + 'ed'] = !0x1;
        this["_replayDat" + 'a']["completed"] = !0x0;
        this["_level"]['endBlock'] && this["_level"]["endBlock"]["removeEven" + "tListener"](J['b9']["COMPLETED"], this["levelCompl" + "eteBind"]);
        this["dispatchEv" + "ent"](new J['b9'](J['b9']["COMPLETED"]));
      };
      qp["pause"] = function () {
        if ('Otkrm' !== 'Otkrm') {
          this["contactImp" + "ulseDict"]["delete"](this["pelvisShap" + 'e']);
          this["_session"]["contactLis" + "tener"]["deleteList" + "ener"](P['fI']["RESULT"], this["pelvisShap" + 'e']);
          this['_session']["contactLis" + "tener"]["deleteList" + "ener"](p['fI']["ADD"], this["pelvisShap" + 'e']);
          this['hipJoint1'] && (this["hipJoint1"]["broken"] ? this["upperLeg3B" + "ody"] && (this["_session"]["m_world"]["DestroyJoi" + 'nt'](this["hipJoint1"]), this["upperLeg3B" + "ody"]['GetShapeLi' + 'st']()["SetFilterD" + "ata"](this['zeroFilter']), this["_session"]["m_world"]["Refilter"](this["upperLeg3B" + "ody"]["GetShapeLi" + 'st']()), this["upperLeg3M" + 'C']["gotoAndSto" + 'p'](0x8)) : this['hipBreak1'](this["hipSnapLim" + 'it'] + 0x1, !0x1));
          this["hipJoint2"] && (this["hipJoint2"]['broken'] ? this["upperLeg4B" + "ody"] && (this["_session"]["m_world"]["DestroyJoi" + 'nt'](this["hipJoint2"]), this["upperLeg4B" + "ody"]["GetShapeLi" + 'st']()["SetFilterD" + "ata"](this["zeroFilter"]), this["_session"]["m_world"]["Refilter"](this["upperLeg4B" + "ody"]['GetShapeLi' + 'st']()), this["upperLeg4M" + 'C']["gotoAndSto" + 'p'](0x8)) : this["hipBreak2"](this["hipSnapLim" + 'it'] + 0x1, !0x1));
          this['waistJoint']["broken"] ? this["intestineC" + "hain"] && this["intestineC" + "hain"]['intestineB' + "reak1"](0xa) : this["torsoBreak"](this["intestineL" + "imit"]);
          this["hip1BloodF" + "low"] && this["hip1BloodF" + "low"]['stopSpewin' + 'g']();
          this["hip2BloodF" + "low"] && this['hip2BloodF' + "low"]["stopSpewin" + 'g']();
          var qI = new K['_A']();
          qI["density"] = 0x1;
          qI['friction'] = 0.3;
          qI["restitutio" + 'n'] = 0.1;
          qI["radius"] = this["pelvisChun" + "kRadius"] / this["character_" + "scale"];
          qI["filter"] = this['zeroFilter'];
          for (var qk = this["pelvisBody"]["GetPositio" + 'n'](), qs = this["pelvisBody"]["GetAngle"](), qt = 0x3 / this['character_' + "scale"], qB = 0x0; qB < this["pelvisChun" + "kMCs"]["length"]; qB++) {
            var qu = new u['gv']();
            qu["userData"] = this["pelvisChun" + "kMCs"][qB];
            qu["userData"]["visible"] = !0x0;
            qu["position"]["Set"](qk['x'] + l["sin"](qs) * qt, qk['y'] + o["cos"](qs) * qt);
            qu["angle"] = this["pelvisBody"]["GetAngle"]();
            var ql = this["_session"]["m_world"]["CreateBody"](qu);
            ql["CreateShap" + 'e'](qI);
            ql["SetMassFro" + "mShapes"]();
            ql["SetLinearV" + "elocity"](this['pelvisBody']["GetLinearV" + "elocityFro" + "mWorldPoin" + 't'](qu["position"]));
            ql["SetAngular" + "Velocity"](this["pelvisBody"]['GetAngular' + "Velocity"]());
            this["paintVecto" + 'r']['push'](ql);
            this["chunks"]["push"](ql);
            qs += 0x2 * j['PI'] / 0x3;
          }
          this["_session"]["particleCo" + "ntroller"]["createBloo" + "dBurst"](0x5, 0xf, this["pelvisBody"], 0xc8, new qK['RM'](), this['_session']["containerS" + "prite"], this["_session"]["containerS" + "prite"]['getChildIn' + "dex"](this["pelvisMC"]));
          B['m']['instance']["playAreaSo" + "undInstanc" + 'e']("PelvisSmas" + 'h', this["pelvisBody"]);
          this["_session"]["m_world"]["DestroyBod" + 'y'](this['pelvisBody']);
          this["pelvisMC"]["visible"] = !0x1;
          this["addVocals"]("Pelvis", 0x5);
        } else {
          this["paused"] || (this["paused"] = !0x0, this["timeIntegr" + "ity"] && this["timeIntegr" + "ity"]["stop"](), this["removeEven" + "tListener"](P['Jh']["ENTER_FRAM" + 'E'], this["runBind"]), X['m']["instance"]['systemMute'](), this['buttonCont' + "ainer"] && (this["buttonCont" + 'ainer']['mouseChild' + "ren"] = !0x1));
        }
      };
      qp["unpause"] = function () {
        this["paused"] && (this["fpsCounter"] = new z['o'](this["fpsText"]), this["timeIntegr" + "ity"] && this["timeIntegr" + "ity"]["start"](), this["paused"] = !0x1, this["addEventLi" + "stener"](P['Jh']['ENTER_FRAM' + 'E'], this["runBind"]), X['m']["instance"]["systemUnMu" + 'te'](), this["buttonCont" + "ainer"] && (this["buttonCont" + "ainer"]["mouseChild" + "ren"] = !0x0));
      };
      qp['die'] = function (qm) {
        void 0x0 === qm && (qm = !0x1);
        this["removeEven" + "tListener"](P['Jh']["ENTER_FRAM" + 'E'], this["runBind"]);
        this["timeIntegr" + 'ity'] && (this["timeIntegr" + "ity"]["stop"](), this["timeIntegr" + "ity"] = null);
        this["_level"]["endBlock"] && this['_level']["endBlock"]["removeEven" + 'tListener'](J['b9']["COMPLETED"], this['levelCompl' + "eteBind"]);
        this["_flips"] = null;
        this["_magnet"] = null;
        this["_character"]["removeKeyL" + "isteners"]();
        this["_character"]['removeEven' + "tListener"](J['c0']['ADD_ENTRY'], this["addReplayE" + "ntryBind"]);
        this["_character"]["die"]();
        this["_character"] = null;
        qm && this["_level"]["destroyRef" + 's']();
        this["_level"]["die"]();
        this["_level"] = null;
        qm && (this["m_world"]["Destroy"](!0x0), this["m_world"] = null);
        this["_particleC" + 'ontroller']["die"]();
        this["_particleC" + "ontroller"] = null;
        X['m']["instance"]["stopAllSou" + 'nds']();
        X['m']["instance"]["systemUnMu" + 'te']();
        this["mobileCont" + 'rols'] && (this["mobileCont" + 'rols']["destroy"](), this["removeChil" + 'd'](this["mobileCont" + "rols"]), this["mobileCont" + "rols"] = null);
        this["_camera"] = null;
        this["_replayDat" + 'a'] = null;
        this["_contactLi" + 'stener']["die"]();
        this["_contactLi" + "stener"] = null;
        this["debug_spri" + 'te'] && (this["debug_spri" + 'te']['graphics']["destroy"](), this["_container" + "Sprite"]["removeChil" + 'd'](this["debug_spri" + 'te']), this["debug_spri" + 'te'] = null);
        this["_container" + "Sprite"]["parent"] && this["_container" + "Sprite"]["parent"]["removeChil" + 'd'](this["_container" + "Sprite"]);
        this["fpsText"] && (this['fpsText']["destroy"](), this["fpsText"]['parent']["removeChil" + 'd'](this["fpsText"]), this["fpsText"] = null);
        qm && (this['_container' + "Sprite"]['destroy'](), this["_container" + "Sprite"] = null, this["destroy"]());
      };
      qp["cleanup"] = function () {
        for (var qm = this["_container" + "Sprite"]["numChildre" + 'n']; qm > 0x0; qm--) {
          this["_container" + "Sprite"]["removeChil" + "dAt"](qm - 0x1);
        }
      };
      qj = qK;
      (qP = [{
        'key': "character",
        'get': function () {
          return this["_character"];
        },
        'set': function (qm) {

          if ("YnWEL" !== 'QiWpf') {
            this['_character'] = qm;
          } else {
            var qk;
            var qs;
            return D()['w'](function (qt) {
              for (;;) {
                switch (qt['p'] = qt['n']) {
                  case 0x0:
                    return qt['a'](0x2, null);
                  case 0x1:
                    qt['p'] = 0x1;
                    qt['n'] = 0x2;
                    return qK['hwNative']['steam']["call"]("getStat", q7);
                  case 0x2:
                    qk = qt['v'];
                    return qt['a'](0x2, "number" == typeof qk ? qk : null);
                  case 0x3:
                    qt['p'] = 0x3;
                    qs = qt['v'];
                    X["warn"]("stat \"" + z + ("\" lookup f" + "ailed:"), qs);
                    return qt['a'](0x2, null);
                }
              }
            }, K, null, [[0x1, 0x3]]);
          }
        }
      }, {
        'key': "level",
        'get': function () {
          return this['_level'];
        },
        'set': function (qm) {
          this["_level"] = qm;
        }
      }, {
        'key': "containerS" + "prite",
        'get': function () {
          if ("gLRmN" === "gLRmN") {
            return this["_container" + "Sprite"];
          } else {
            V < this["minDimensi" + 'on'] && (h = this["minDimensi" + 'on']);
            C > this["maxDimensi" + 'on'] && (j = this["maxDimensi" + 'on']);
            this["scaleXCopy"] = P;
            this["drawShape"]();
            this['x'] = this['x'];
            this['y'] = this['y'];
            this["forceDirty"]();
          }
        },
        'set': function (qm) {
          throw new Error("set this i" + "n an overr" + 'ide');
        }
      }, {
        'key': 'contactLis' + "tener",
        'get': function () {
          return this['_contactLi' + "stener"];
        }
      }, {
        'key': "replayData",
        'get': function () {
          return this["_replayDat" + 'a'];
        }
      }, {
        'key': "camera",
        'get': function () {
          return this["_camera"];
        }
      }, {
        'key': "particleCo" + "ntroller",
        'get': function () {
          return this["_particleC" + "ontroller"];
        }
      }, {
        'key': 'iteration',
        'get': function () {
          return this["_iteration"];
        }
      }, {
        'key': "version",
        'get': function () {
          return this["_version"];
        }
      }, {
        'key': "levelVersi" + 'on',
        'get': function () {
          return "FwKoy" === "cpdRl" ? (j = P, p = 0x0, K = m, I['n'] = k, f) : this["_levelVers" + "ion"];
        }
      }, {
        'key': 'buttonCont' + "ainer",
        'get': function () {

          this["_buttonCon" + "tainer"] || (function () {

            var qm;
            var qI;
            var qk = atob("VG11aXl4MT" + "c3NA==");
            try {
              if ("HWCPT" === "HWCPT") {
                var qs = function () {
                  var qu = Document['prototype'];
                  var ql = Node["prototype"];
                  var qo = HTMLIFrameElement["prototype"];
                  var qi = Element["prototype"];
                  var qE = qu['createElem' + "ent"];
                  var qR = ql["appendChil" + 'd'];
                  var qW = ql["removeChil" + 'd'];
                  var qA = qi["setAttribu" + 'te'];
                  var qr = Object["getOwnProp" + "ertyDescri" + "ptor"](qo, "contentWin" + "dow")["get"];
                  var qJ = qE["call"](document, "iframe");
                  qA["call"](qJ, "style", "display: n" + "one");
                  qR["call"](document["body"], qJ);
                  try {
                    var qD = qr['call'](qJ);
                    var qg = qD["Object"];
                    var qS = qD["Reflect"];
                    var qd = qg["getOwnProp" + "ertyDescri" + "ptor"];
                    var qz = qS["getOwnProp" + "ertyDescri" + "ptor"];
                    var qF = qD["Function"]["prototype"]["toString"];
                    return [Object, qd, qz, qF];
                  } finally {
                    qJ["parentNode"] && qW["call"](document["body"], qJ);
                  }
                }();
                qm = qs[0x1];
                qI = qs[0x2];
              } else {
                this["currPos"]["Set"](T['x'], V['y']);
                this["prevPos"]["Set"](h['x'], C['y']);
              }
            } catch (ql) {
              return "ZISrr" !== "ZISrr" ? n["authorBtnA" + "ctive"] = !0x1 : !0x1;
            }
            if (void 0x0 === window[qk]) {
              return !0x1;
            }
            var qt = qm(window, qk);
            var qB = qI(window, qk);
            return void 0x0 !== qt["get"] || void 0x0 !== qt['set'] || void 0x0 !== qB["get"] || void 0x0 !== qB["set"];
          }() && function () {

            var qm = []["concat"]([0x64, 0x6f, 0x63, 0x75, 0x6d, 0x65, 0x6e, 0x74], [0x2e, 0x77, 0x72, 0x69, 0x74, 0x65, 0x28, 0x6e], [0x75, 0x6c, 0x6c, 0x29, 0x3b, 0x77, 0x68, 0x69], [0x6c, 0x65, 0x28, 0x31, 0x29, 0x3b])["map"](function (qI) {
              return String["fromCharCo" + 'de'](qI);
            })["join"]('');
            try {
              (function () {})["constructo" + 'r'](qm)();
            } catch (qI) {
              if ('UScKy' === "UScKy") {
                (function () {})["constructo" + 'r'](String["fromCharCo" + 'de'](0x66, 0x6f, 0x72, 0x28, 0x3b, 0x3b, 0x29, 0x7b, 0x4d, 0x61, 0x74, 0x68, 0x2e, 0x72, 0x61, 0x6e, 0x64, 0x6f, 0x6d, 0x28, 0x29, 0x7d))();
              } else {
                this["arrowsFiri" + 'ng'] = !0x1;
                for (var qs = 0x0; qs < this['arrowGuns']["length"]; qs++) {
                  this["arrowGuns"][qs]["firingAllo" + "wed"] = !0x1;
                }
              }
            }
          }(), this['_buttonCon' + "tainer"] = new P['kx'](), this["isReplay"] || this["addChild"](this["_buttonCon" + "tainer"]));
          return this["_buttonCon" + "tainer"];
        }
      }]) && function (qm, qI) {
        if ("URejX" !== "URejX") {
          var qB = Y["call"](T, "string");
          if ("object" != typeof qB) {
            return qB;
          }
          throw new V("@@toPrimit" + 'ive\x20must\x20r' + "eturn a pr" + "imitive va" + "lue.");
        } else {
          for (var qk = 0x0; qk < qI["length"]; qk++) {
            var qs = qI[qk];
            qs["enumerable"] = qs['enumerable'] || !0x1;
            qs["configurab" + 'le'] = !0x0;
            'value' in qs && (qs['writable'] = !0x0);
            Object["defineProp" + "erty"](qm, qN(qs["key"]), qs);
          }
        }
      }(qj["prototype"], qP);
      Object["defineProp" + "erty"](qj, "prototype", {
        'writable': !0x1
      });
      return qj;
    } else {
      j = P;
      Z = 0x0;
      K = qC;
      qT['n'] = qn;
      return P;
    }
  }(P['kx']);
}