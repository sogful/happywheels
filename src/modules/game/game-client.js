function (q0, q1, q2) {
  'use strict';

  q2['d'](q1, {
    'l': () => NB
  });
  q2(0x5cf0);
  q2(0x65f3);
  q2(0xd22);
  q2(0xba94);
  q2(0xf5e9);
  q2(0xf410);
  q2(0xcdc3);
  q2(0x15d77);
  q2(0x8d3);
  q2(0x1312d);
  q2(0x127b);
  q2(0xec3f);
  q2(0x9fab);
  var q3 = q2(0x3432);
  var q4 = q2(0x172b2);
  q2(0xb284);
  q2(0x15de4);
  q2(0xb4c);
  var q5 = q2(0x136b);
  var q6 = q2(0x88f1);
  var q7 = q2(0xe177);
  function q8(Nl) {
    var No = function (Ni) {
      if ("object" != typeof Ni || !Ni) {
        return Ni;
      }
      var NE = Ni[Symbol["toPrimitiv" + 'e']];
      if (void 0x0 !== NE) {
        var NR = NE["call"](Ni, "string");
        if ("object" != typeof NR) {
          return NR;
        }
        throw new TypeError("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
      }
      return String(Ni);
    }(Nl);
    return "symbol" == typeof No ? No : No + '';
  }
  var q9 = function () {
    function Nl(NR, NW, NA, Nr, NJ) {
      if ("AhlYP" === "AhlYP") {
        this["minLineThi" + 'ckness'] = 1.75;
        this["container"] = NR;
        var ND = 0x1e / q5['b0']["maxFPS"];
        Nr *= Nl["scaler"] * ND;
        NJ *= Nl['scaler'] * ND;
        this["currentPos"] = new q5['bR'](NW + Nr, NA + NJ);
        this["lastPos"] = new q5['bR'](NW, NA);
      } else {
        qE["statusSpri" + 'te'] = new ql['AS']("loading re" + "play...");
        var NS = NA["statusSpri" + 'te']['window'];
        NR["addChild"](NS);
        NS["center"]();
        var Nd = new qs['P']();
        Nd["addEventLi" + "stener"](qf['P']["REPLAY_AND" + "_LEVEL_LOA" + "DED"], q9["replayLoad" + 'Complete']);
        Nd["addEventLi" + "stener"](q5['P']['ID_NOT_FOU' + 'ND'], NW['replayLoad' + "Complete"]);
        Nd["addEventLi" + "stener"](qB['P']["LOAD_ERROR"], qW["replayLoad" + "Complete"]);
        Nd["load"]((0x0, qH['Wh'])(qk));
      }
    }
    var No;
    var Ni;
    var NE = Nl["prototype"];
    NE["step"] = function (NR, NW, NA, Nr, NJ, ND, Ng) {


      if ("CoMzg" === "zzuIt") {
        ND = qI["setPrototy" + "peOf"] ? qS["setPrototy" + "peOf"]["bind"]() : function (NH, Nb) {
          NH["__proto__"] = Nb;
          return NH;
        };
        return qA(Nz, qc);
      } else {
        void 0x0 === NJ && (NJ = 0x1);
        void 0x0 === ND && (ND = 0x0);
        void 0x0 === Ng && (Ng = 0x0);
        var NS = this["currentPos"]['x'] - this['lastPos']['x'];
        var Nd = this['currentPos']['y'] - this["lastPos"]['y'];
        if (this["currentPos"]['x'] > NR && this["currentPos"]['x'] < NW && this["currentPos"]['y'] > NA && this["currentPos"]['y'] < Nr) {
          this["container"]["graphics"]["lineStyle"](this["minLineThi" + "ckness"], 0x990000, 0x1);
          var Nz = this["lastPos"]['x'] + ND;
          var NF = this["lastPos"]['y'] + Ng;
          this["container"]['graphics']["moveTo"](Nz + (NS - ND) / NJ, NF + (Nd - Ng) / NJ);
          this['container']["graphics"]['lineTo'](Nz, NF);
          q7['h']["drawnParti" + "cles"] = !0x0;
        }
        this["lastPos"]['x'] = this["currentPos"]['x'];
        this['lastPos']['y'] = this['currentPos']['y'];
        this["currentPos"]['x'] = this["currentPos"]['x'] + NS;
        this["currentPos"]['y'] = this['currentPos']['y'] + Nd + Nl['gravityInc' + 'rement'] * NJ * NJ;
        return !(this["lastPos"]['y'] > q6['w']["YParticleL" + "imit"]);
      }
    };
    NE['removeFrom'] = function (NR) {};
    No = Nl;
    (Ni = [{
      'key': "prev",
      'get': function () {


        if ("zbhYZ" === "zbhYZ") {
          return this["_prev"];
        } else {
          qF["prototype"]["pelvisSmas" + 'h']['call'](this, qT);
          this['eject']();
        }
      },
      'set': function (NR) {

        this["_prev"] = NR;
      }
    }, {
      'key': "next",
      'get': function () {
        return this['_next'];
      },
      'set': function (NR) {

        this["_next"] = NR;
      }
    }]) && function (NR, NW) {


      for (var NA = 0x0; NA < NW['length']; NA++) {
        var Nr = NW[NA];
        Nr["enumerable"] = Nr["enumerable"] || !0x1;
        Nr["configurab" + 'le'] = !0x0;
        "value" in Nr && (Nr["writable"] = !0x0);
        Object["defineProp" + "erty"](NR, q8(Nr["key"]), Nr);
      }
    }(No["prototype"], Ni);
    Object["defineProp" + "erty"](No, "prototype", {
      'writable': !0x1
    });
    return No;
  }();
  function qq(Nl, No) {
    return "LjgJJ" !== "LjgJJ" ? this["_session"] : (qq = Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"]["bind"]() : function (NE, NR) {

      NE["__proto__"] = NR;
      return NE;
    }, qq(Nl, No));
  }
  q9["scaler"] = 62.5 / 0x1e;
  q9["gravityInc" + "rement"] = 0x1 / 0x3 * 62.5 * 0x1 / 0x1e;
  var qn = function (Nl) {


    function No(NR, NW, NA, Nr, NJ) {
      if ('hlrSF' === "ExqHA") {
        if (!(qn instanceof qy['k'])) {
          throw new qg("shape isn'" + "t a define" + 'd\x20type\x20');
        }
        var NS = new qu['m2']();
        NS["density"] = qd["density"];
        this["setShapeFi" + "lter"](qm["collision"], qa, NS);
        var Nd = qh;
        var Nz = NS["vertexCoun" + 't'] = Nd["numVerts"];
        for (qq = 0x0; qZ < Nz; qo++) {
          var NF = Nd["vertVector"][qq];
          var NM = new qn['RM'](Nd['scaleX'] * NF['x'] / this["m_physScal" + 'e'], Nd["scaleY"] * NF['y'] / this["m_physScal" + 'e']);
          qN = qf["cos"](qT) * NM['x'] - qV["sin"](qh) * NM['y'];
          qC = qj["cos"](qP) * NM['y'] + qp['sin'](qK) * NM['x'];
          NS["vertices"][qm] = new qI['RM'](qk['x'] + qs, qt['y'] + qB);
        }
        q8 = q9["CreateShap" + 'e'](NS);
      } else {
        var ND;
        (ND = Nl["call"](this, NR, NW, NA, Nr, NJ) || this)['lineThickn' + 'ess'] = 1.5;
        ND["minLineThi" + "ckness"] = 0x1;
        return ND;
      }
    }
    var Ni;
    var NE;
    NE = Nl;
    (Ni = No)["prototype"] = Object['create'](NE["prototype"]);
    Ni["prototype"]['constructo' + 'r'] = Ni;
    qq(Ni, NE);
    No["prototype"]["step"] = function (NR, NW, NA, Nr, NJ, ND, Ng) {
      if ("GijOJ" === "GijOJ") {
        void 0x0 === NJ && (NJ = 0x1);
        void 0x0 === ND && (ND = 0x0);
        void 0x0 === Ng && (Ng = 0x0);
        var NS = this["currentPos"]['x'] - this["lastPos"]['x'];
        var Nd = this['currentPos']['y'] - this['lastPos']['y'];
        var Nz = (NS * NS + Nd * Nd) / (NJ * NJ);
        if (this["currentPos"]['x'] > NR && this['currentPos']['x'] < NW && this["currentPos"]['y'] > NA && this['currentPos']['y'] < Nr) {
          this["container"]["graphics"]['lineStyle'](this['lineThickn' + "ess"], 0x990000, 0x1, !0x1, "normal", "round");
          var NF = this['lastPos']['x'] + ND;
          var NM = this["lastPos"]['y'] + Ng;
          this["container"]["graphics"]["moveTo"](NF + (NS - ND) / NJ, NM + (Nd - Ng) / NJ);
          this["container"]["graphics"]["lineTo"](NF, NM);
        }
        this["lineThickn" + "ess"] = Math["max"](0x2 * (0x1 - 0.005 * Nz) + this['minLineThi' + "ckness"], this["minLineThi" + "ckness"]);
        this["lastPos"]['x'] = this["currentPos"]['x'];
        this["lastPos"]['y'] = this["currentPos"]['y'];
        this["currentPos"]['x'] = this["currentPos"]['x'] + NS;
        this["currentPos"]['y'] = this['currentPos']['y'] + Nd + No['gravityInc' + 'rement'] * NJ * NJ;
        return !(this["lastPos"]['y'] > q6['w']["YParticleL" + "imit"]);
      } else {
        var Nb = q2[q3];
        if (0x0 == q4(Nb['@t'])) {
          var NZ = new qv['ai']();
          qL["addChild"](NZ);
          NZ['x'] = qU(Nb['@x']);
          NZ['y'] = qO(Nb['@y']);
          if (-0x1 != Nb["@b1"]) {
            if ('s' == (Nc = qG(Nb["@b1"])["charAt"](0x0))) {
              var Ny = nP(np(Nb["@b1"])["substring"](0x1));
              NZ["body1"] = nK["getChildAt"](Ny);
            } else {
              'g' == Nc ? (Ny = n2(n3(Nb["@b1"])["substring"](0x1)), NZ["body1"] = n4["getChildAt"](Ny)) : NZ["body1"] = n5["getChildAt"](Nb["@b1"]);
            }
          }
          -0x1 != Nb['@b2'] && ('s' == (Nc = n6(Nb["@b2"])['charAt'](0x0)) ? (Ny = n7(n8(Nb["@b2"])["substring"](0x1)), NZ["body2"] = n9["getChildAt"](Ny)) : 'g' == Nc ? (Ny = nq(nn(Nb["@b2"])["substring"](0x1)), NZ["body2"] = nN["getChildAt"](Ny)) : NZ["body2"] = nf["getChildAt"](nT(Nb["@b2"])));
          't' == Nb['@l'] && (NZ["limit"] = !0x0);
          null != Nb["@ua"] && (NZ['upperAngle'] = nV(Nb["@ua"]));
          null != Nb["@la"] && (NZ["lowerAngle"] = nh(Nb["@la"]));
          't' == Nb['@m'] && (NZ["motor"] = !0x0);
          null != Nb["@tq"] && (NZ["torque"] = nC(Nb["@tq"]));
          null != Nb['@sp'] && (NZ['speed'] = nj(Nb["@sp"]));
          't' == Nb['@c'] && (NZ["collideSel" + 'f'] = !0x0);
          'f' == Nb['@v'] && (NZ["vehicleCon" + "trolled"] = !0x1);
          NZ["drawArms"]();
        } else {
          if (0x1 == qo(Nb['@t'])) {
            var Nc;
            var NX = new nm['NO']();
            nI["addChild"](NX);
            NX['x'] = nk(Nb['@x']);
            NX['y'] = ns(Nb['@y']);
            NX['axisAngle'] = nY(Nb['@a']);
            -0x1 != Nb["@b1"] && ('s' == (Nc = nB(Nb["@b1"])["charAt"](0x0)) ? (Ny = nu(nl(Nb["@b1"])["substring"](0x1)), NX["body1"] = no["getChildAt"](Ny)) : 'g' == Nc ? (Ny = ni(nE(Nb["@b1"])["substring"](0x1)), NX["body1"] = nR["getChildAt"](Ny)) : NX["body1"] = nW["getChildAt"](Nb["@b1"]));
            -0x1 != Nb["@b2"] && ('s' == (Nc = nA(Nb["@b2"])["charAt"](0x0)) ? (Ny = nr(nJ(Nb["@b2"])["substring"](0x1)), NX['body2'] = nD["getChildAt"](Ny)) : 'g' == Nc ? (Ny = ng(nS(Nb["@b2"])["substring"](0x1)), NX["body2"] = nd["getChildAt"](Ny)) : NX["body2"] = nz["getChildAt"](Nb["@b2"]));
            't' == Nb['@l'] && (NX["limit"] = !0x0);
            null != Nb["@ul"] && (NX["upperLimit"] = nF(Nb["@ul"]));
            null != Nb["@ll"] && (NX['lowerLimit'] = nM(Nb['@ll']));
            't' == Nb['@m'] && (NX["motor"] = !0x0);
            null != Nb["@fo"] && (NX["force"] = nH(Nb["@fo"]));
            null != Nb["@sp"] && (NX["speed"] = nb(Nb["@sp"]));
            't' == Nb['@c'] && (NX["collideSel" + 'f'] = !0x0);
            'f' == Nb['@v'] && (NX['vehicleCon' + "trolled"] = !0x1);
            NX["drawArms"]();
          }
        }
      }
    };
    return No;
  }(q9);
  var qN = q2(0x41a);
  var qf = {
    'RefRectangleShape': q3['HQ'],
    'RefCircleShape': q3['HQ'],
    'RefTriangleShape': q3['HQ'],
    'RefPolygonShape': q3['HQ'],
    'RefArtShape': q3['HQ'],
    'RefShape': q3['HQ'],
    'RectangleShape': q3['RX'],
    'CircleShape': q3['Wf'],
    'TriangleShape': q3['Qu'],
    'PolygonShape': q3['kU'],
    'ArtShape': q3['Ps'],
    'Special': q3['HR'],
    'ArrowGunRef': q3['$P'],
    'BladeWeaponRef': q3['Or'],
    'BoomboxRef': q3['IX'],
    'BoostRef': q3['$D'],
    'BottleRef': q3['ap'],
    'Building1Ref': q3['Ns'],
    'Building2Ref': q3['ab'],
    'CannonRef': q3['tO'],
    'ChainRef': q3['TK'],
    'ChairRef': q3['TQ'],
    'FanRef': q3['TM'],
    'FinishLineRef': q3['hO'],
    'FoodItemRef': q3['zm'],
    'GlassRef': q3['sN'],
    'HarpoonGunRef': q3['d9'],
    'HomingMineRef': q3['RH'],
    'IBeamRef': q3['_i'],
    'JetRef': q3['zt'],
    'LogRef': q3['Wd'],
    'MeteorRef': q3['M_'],
    'MineRef': q3['XU'],
    'NPCharacterRef': q3['ze'],
    'PaddleRef': q3['uB'],
    'RailRef': q3['g_'],
    'SignPostRef': q3['lR'],
    'SoccerBallRef': q3['AX'],
    'SpikesRef': q3['HO'],
    'SpringBoxRef': q3['aX'],
    'TableRef': q3['fL'],
    'TextBoxRef': q3['ee'],
    'ToiletRef': q3['fx'],
    'TokenRef': q3['$6'],
    'TrashCanRef': q3['Wz'],
    'TVRef': q3['QP'],
    'VanRef': q3['tL'],
    'WreckingBallRef': q3['hl'],
    'ArrowGun': q4['_u'],
    'Boombox': q4['Fj'],
    'Bottle': q4['l4'],
    'BladeWeapon': q4['Ld'],
    'Boost': q4['uW'],
    'Building1': q4['mm'],
    'Building2': q4['t6'],
    'Cannon': q4['a2'],
    'Chain': q4['sW'],
    'Chair': q4['sQ'],
    'IBeam': q4['dP'],
    'Jet': q4['Cy'],
    'FinishLine': q4['Qj'],
    'FoodItem': q4['EK'],
    'Fan': q4['Gj'],
    'TrashCan': q4['zH'],
    'Glass': q4['H'],
    'HomingMine': q4['gi'],
    'HarpoonGun': q4['Ee'],
    'Log': q4['tG'],
    'Meteor': q4['fj'],
    'Mine': q4['aR'],
    'NPCharacter': q4['S3'],
    'Rail': q4['hM'],
    'Paddle': q4['jX'],
    'SoccerBall': q4['xH'],
    'Spikes': q4['kk'],
    'SignPost': q4['qV'],
    'SpringBox': q4['P5'],
    'Table': q4['XI'],
    'Token': q4['ou'],
    'Toilet': q4['G8'],
    'TV': q4['TV'],
    'Van': q4['e7'],
    'WreckingBall': q4['cA'],
    'TextBox': q4['fI'],
    'BloodParticle': q9,
    'BloodParticleLine': qn
  };
  var qT = q2(0xb65a);
  var qV = q2(0x17a67);
  var qh = {};
  q2['r'](qh);
  q2['d'](qh, {
    'MovieClip': () => qV['j7'],
    'ShapesCache': () => qV['tH'],
    'Timeline': () => qV['Kf'],
    'Tween': () => qV['K'],
    'VERSION': () => qV['xv'],
    'utils': () => qV['Wp']
  });
  var qC = q2(0x56e7);
  q2(0xf23a);
  q2(0x13648);
  q2(0x7d8);
  q2(0x1478b);
  q2(0x5bcc);
  q2(0x13d7e);
  var qj = q2(0x118ac);
  q2(0x6b67);
  q2(0x16278);
  q2(0x7022);
  var qP = q2(0x1174c);
  var qp = q2(0xbddf);
  var qK = q2(0x17fd7);
  function qm(Nl, No) {

    qm = Object["setPrototy" + "peOf"] ? Object['setPrototy' + "peOf"]["bind"]() : function (Ni, NE) {
      Ni["__proto__"] = NE;
      return Ni;
    };
    return qm(Nl, No);
  }
  var qI = function (Nl) {

    if ("uSlQn" === "ZQuxG") {
      q6['prototype']['createMovi' + "eClips"]["call"](this);
      this["frameMC"] = this["sourceObje" + 'ct']["frame"];
      this["frameMC"]['scaleX'] = this["frameMC"]['scaleY'] = 0x1 / this["mc_scale"];
      this["backWheelM" + 'C'] = this["sourceObje" + 'ct']["backWheel"];
      this["backWheelM" + 'C']["scaleX"] = this["backWheelM" + 'C']["scaleY"] = 0x1 / this["mc_scale"];
      this["frontWheel" + 'MC'] = this["sourceObje" + 'ct']["frontWheel"];
      this["frontWheel" + 'MC']["scaleX"] = this["frontWheel" + 'MC']["scaleY"] = 0x1 / this["mc_scale"];
      this["gearMC"] = this["sourceObje" + 'ct']["gear"];
      this['gearMC']["scaleX"] = this["gearMC"]["scaleY"] = 0x1 / this["mc_scale"];
      this["forkMC"] = this["sourceObje" + 'ct']["fork"];
      this["forkMC"]["scaleX"] = this["forkMC"]["scaleY"] = 0x1 / this["mc_scale"];
      this['brokenFram' + "eMC"] = this["sourceObje" + 'ct']["brokenFram" + 'e'];
      this["brokenFram" + "eMC"]["scaleX"] = this["brokenFram" + 'eMC']['scaleY'] = 0x1 / this["mc_scale"];
      this["seatMC"] = this["sourceObje" + 'ct']["seat"];
      this["seatMC"]['scaleX'] = this["seatMC"]["scaleY"] = 0x1 / this["mc_scale"];
      this['frontWheel' + 'MC']["gotoAndSto" + 'p'](0x1);
      this["backWheelM" + 'C']["gotoAndSto" + 'p'](0x1);
      this["frontWheel" + 'MC']["inner"]["broken"]["visible"] = !0x1;
      this["backWheelM" + 'C']['inner']["broken"]["visible"] = !0x1;
      this["forkMC"]["visible"] = !0x1;
      this["brokenFram" + 'eMC']["visible"] = !0x1;
      this["seatMC"]["visible"] = !0x1;
      this['frameBody']["SetUserDat" + 'a'](this['frameMC']);
      this["backWheelB" + "ody"]["SetUserDat" + 'a'](this["backWheelM" + 'C']);
      this["frontWheel" + "Body"]["SetUserDat" + 'a'](this["frontWheel" + 'MC']);
      this["gearBody"]["SetUserDat" + 'a'](this["gearMC"]);
      this["_session"]["containerS" + "prite"]["addChildAt"](this["backWheelM" + 'C'], this["_session"]["containerS" + "prite"]["getChildIn" + "dex"](this["chestMC"]));
      this["_session"]['containerS' + "prite"]["addChildAt"](this["frontWheel" + 'MC'], this["_session"]["containerS" + 'prite']["getChildIn" + "dex"](this["chestMC"]));
      this["_session"]["containerS" + "prite"]["addChildAt"](this['gearMC'], this["_session"]["containerS" + "prite"]["getChildIn" + "dex"](this['chestMC']));
      this["_session"]["containerS" + "prite"]["addChildAt"](this['frameMC'], this["_session"]["containerS" + "prite"]["getChildIn" + "dex"](this["chestMC"]));
      this["_session"]["containerS" + "prite"]["addChildAt"](this["brokenFram" + "eMC"], this["_session"]["containerS" + "prite"]["getChildIn" + "dex"](this["chestMC"]));
      this['_session']["containerS" + "prite"]["addChildAt"](this["seatMC"], this["_session"]["containerS" + 'prite']['getChildIn' + "dex"](this["chestMC"]));
      this["_session"]["containerS" + "prite"]["addChildAt"](this["forkMC"], this['_session']["containerS" + 'prite']['getChildIn' + "dex"](this['chestMC']));
    } else {
      function NR() {

        if ('boMea' !== "boMea") {
          for (var Nr = this["antiGravAr" + "ray"]["length"], NJ = 0x0; NJ < Nr; NJ++) {
            var ND = this["antiGravAr" + "ray"][NJ];
            ND["IsSleeping"]() || (ND["m_linearVe" + "locity"]['y'] += this["gravityDis" + "placement"]);
          }
          var Ng = this["elf1"]["antiGravAr" + 'ray'];
          Nr = Ng["length"];
          NJ = 0x0;
          for (; NJ < Nr; NJ++) {
            (ND = Ng[NJ])["IsSleeping"]() || (ND["m_linearVe" + "locity"]['y'] += this["gravityDis" + "placement"]);
          }
          Nr = (Ng = this["elf2"]["antiGravAr" + 'ray'])["length"];
          NJ = 0x0;
          for (; NJ < Nr; NJ++) {
            (ND = Ng[NJ])["IsSleeping"]() || (ND["m_linearVe" + "locity"]['y'] += this["gravityDis" + "placement"]);
          }
          if (!this["snowSpray"]) {
            var NS = new q8['RM'](this["_startX"] - 0x8f / this["character_" + "scale"], this["_startY"] + 0xb2 / this['character_' + "scale"]);
            var Nd = new qI['RM'](this["_startX"] + 0x6b / this["character_" + "scale"], this["_startY"] + 0xb2 / this["character_" + 'scale']);
            this['snowSpray'] = this["_session"]["particleCo" + "ntroller"]['createSnow' + "Spray"]("snowflakes", this["sleighBody"], NS, Nd, 0x0, 0x0, 0xb4, 0x5, 0x1388, this["_session"]["containerS" + "prite"]);
            this["sleighBell" + "Loop"] = qS['m']["instance"]["playAreaSo" + "undLoop"]("SleighBell" + 'Loop', this['sleighBody'], 0x0, 0x0);
            this["sleighBell" + 'Loop']["fadeIn"](0.5);
          }
        } else {
          var NW;
          (NW = Nl["call"](this) || this)["rotate"] = function (Nr) {
            var NJ = 0.5 * Nr["delta"];
            NW["star"]["rotation"] += NJ;
          };
          NW['mc'] = new q5['j7']((0x0, qK['zI'])("GameUI", "mc_feature" + "d_button_n" + 'ew_star'));
          NW['mc']['convertChi' + "ldren"]();
          NW['addChild'](NW['mc']);
          NW["star"] = NW['mc']["star"];
          NW["addEventLi" + "stener"](q5['Jh']["ENTER_FRAM" + 'E'], NW["rotate"], !0x1, 0x0, !0x0);
          return NW;
        }
      }
      var No;
      var Ni;
      Ni = Nl;
      (No = NR)["prototype"] = Object["create"](Ni["prototype"]);
      No["prototype"]["constructo" + 'r'] = No;
      qm(No, Ni);
      NR["prototype"]["destroy"] = function () {
        if ("ikqMF" !== 'ikqMF') {
          var NA = qz["shape2"];
          if (NA["GetUserDat" + 'a']() === q8['SHAPE']) {
            var Nr = NA["GetBody"]()["GetLinearV" + "elocity"]();
            qN["landedOn"]["set"](qc["shape1"], Nr['y'] > 0x1 && Nr['y'] > qV["abs"](Nr['x']) ? NA : null);
          }
        } else {
          this['mc']['newText']['_pixiSprit' + 'e']["destroy"]({
            'children': !0x0,
            'texture': !0x0,
            'baseTexture': !0x0
          });
          Nl['prototype']["destroy"]["call"](this);
        }
      };
      return NR;
    }
  }(q5['kx']);
  var qk = q2(0x1d80);
  function qs(Nl) {
    var No = function (Ni) {
      if ("object" != typeof Ni || !Ni) {
        return Ni;
      }
      var NE = Ni[Symbol['toPrimitiv' + 'e']];
      if (void 0x0 !== NE) {
        var NR = NE["call"](Ni, "string");
        if ("object" != typeof NR) {
          return NR;
        }
        throw new TypeError("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
      }
      return String(Ni);
    }(Nl);
    return 'symbol' == typeof No ? No : No + '';
  }
  function qt(Nl, No) {


    qt = Object["setPrototy" + 'peOf'] ? Object["setPrototy" + "peOf"]['bind']() : function (Ni, NE) {
      if ("rAmca" !== 'uulsK') {
        Ni["__proto__"] = NE;
        return Ni;
      } else {
        var NW = qI(qS);
        '' != qA && (qN[qc] = qV(NW) ? qE : NW);
      }
    };
    return qt(Nl, No);
  }
  var qB = function (Nl) {

    if ("HBPdn" !== "JFMMP") {
      function NW(NA, Nr, NJ) {
        var ND;
        void 0x0 === Nr && (Nr = !0x1);
        void 0x0 === NJ && (NJ = !0x1);
        (ND = Nl["call"](this) || this)["checkmark"] = null;
        ND["_completed"] = !0x1;
        var Ng = new q5['j7']((0x0, qK['zI'])("GameUI", "mc_Feature" + "dLevelButt" + 'on'));
        Ng["convertChi" + "ldren"]();
        ND["addChild"](Ng);
        ND["nameMC"] = Ng['nameMC'];
        ND['bg'] = Ng['bg'];
        ND['nameText'] = q5['A_']["spriteToTe" + "xtField"](ND['nameMC']["getChildBy" + 'Name']("nameText"), ND["nameMC"]);
        ND["nameText"]["autoSize"] = q5['wL']['CENTER'];
        ND["nameText"]["selectable"] = !0x1;
        ND["nameText"]['y'] += 0x2;
        ND["nameText"]["width"] = 0x3e8;
        null != NA && (ND["nameText"]["htmlText"] = '<b>' + qk['l']["trimWhites" + "pace"](NA) + '</b>');
        ND["buttonMode"] = !0x0;
        ND["mouseChild" + 'ren'] = !0x1;
        ND["selected"] = !0x1;
        ND["nameMC"]["width"] > ND['bg']["width"] - 0x1e && (ND["nameMC"]["width"] = ND['bg']["width"] - 0x1e, ND["nameMC"]["scaleY"] = ND["nameMC"]["scaleX"]);
        Nr && (ND["newStar"] = new qI(), ND['newStar']["position"]["set"](0xf8, 0x5), ND["newStar"]["scaleX"] = ND["newStar"]["scaleY"] = 0.75, Ng["addChild"](ND["newStar"]), Ng["newStar"] = ND["newStar"]);
        return ND;
      }
      var No;
      var Ni;
      var NE;
      var NR;
      Ni = Nl;
      (No = NW)["prototype"] = Object["create"](Ni["prototype"]);
      No["prototype"]["constructo" + 'r'] = No;
      qt(No, Ni);
      NW["prototype"]["destroy"] = function () {
        "deboV" !== "tuSiK" ? (this["checkmark"] = null, Nl["prototype"]['destroy']["call"](this)) : (qV["buffer"][qE + 0x3] = ql, Ni["buffer"][NW + 0x2] = qs >> 0x8, qf["buffer"][q9 + 0x1] = q5 >> 0x10, No["buffer"][qB] = qW >> 0x18);
      };
      NE = NW;
      (NR = [{
        'key': "completed",
        'get': function () {
          return this["_completed"];
        },
        'set': function (NA) {
          this["_completed"] = NA;
        }
      }, {
        'key': "selected",
        'get': function () {
          if ("GgQnd" === "VaEcn") {
            this["_body1"] && (this["_body1"]["removeEven" + "tListener"](qc['$']["COORDINATE" + "_CHANGE"], this["bodyMoved"]), this["_body1"]['removeEven' + "tListener"](qV['$']["SELECTION_" + "STATE_CHAN" + 'GE'], this["bodySelect" + 'ionChanged']), this["_body1"]['removeJoin' + 't'](this));
            null != qE ? (this["_body1"] = ql, this["_vehicleAt" + "tached"] = !!(this["_body1"] instanceof Ni['uH'] || this["_body2"] instanceof NW['uH']), this["_vehicleAt" + "tached"] = !0x1, this["setAttribu" + "tes"](), null != this['stage'] && (qs['addEventLi' + "stener"](qf['$']["COORDINATE" + "_CHANGE"], this['bodyMoved'], !0x1, 0x0, !0x0), q9['addEventLi' + 'stener'](q5['$']["SELECTION_" + "STATE_CHAN" + 'GE'], this["bodySelect" + "ionChanged"], !0x1, 0x0, !0x0), No["addJoint"](this), this["forceDirty"]())) : this["_body1"] = null;
          } else {
            return this["_selected"];
          }
        },
        'set': function (NA) {
          this["_selected"] = NA;
          this["_selected"] ? this["nameText"]['textColor'] = 0xffffff : this['nameText']["textColor"] = 0x1f4b69;
        }
      }, {
        'key': "height",
        'get': function () {
          if ('ZvnOC' === 'ZvnOC') {
            return this['bg']["height"];
          } else {
            this['paused'] = !0x1;
            this["frames"] = 0x0;
            this["_iteration"] = 0x0;
            this["addEventLi" + "stener"](NR['Jh']["ENTER_FRAM" + 'E'], this["run"]);
          }
        },
        'set': function (NA) {
          this['pixiSprite']["scale"]['y'] = 0x1;
          var Nr = this["getRelativ" + "eBounds"]();
          this["pixiSprite"]["scale"]['y'] = NA / Nr["height"];
        }
      }]) && function (NA, Nr) {
        if ("eXOok" === "gbWhB") {
          this['sleighMC']["inner"]["stem"]["visible"] = !0x1;
          this["sleighBody"]["DestroySha" + 'pe'](this["stem1Shape"]);
          this['sleighBody']["DestroySha" + 'pe'](this['stem2Shape']);
          this["sleighBody"]['DestroySha' + 'pe'](this["stem3Shape"]);
          this["sleighBody"]["SetMassFro" + 'mShapes']();
          var NS = this["sleighBody"]['GetLocalCe' + "nter"]();
          NS = new qc['RM']((this["_startX"] - NS['x']) * this["character_" + "scale"], (this["_startY"] - NS['y']) * this["character_" + "scale"]);
          var Nd = this["shapeGuide"]['rear_1'];
          var Nz = new qV['RM'](Nd['x'] + NS['x'], Nd['y'] + NS['y']);
          this["sleighMC"]["inner"]['x'] = Nz['x'];
          this['sleighMC']["inner"]['y'] = Nz['y'];
          if (this['elf1']["strappedIn"]) {
            var NF = this["strapChest" + "1Joints"][0x0];
            var NM = new qB['Vy']();
            NM["body1"] = qW;
            NM["body2"] = NF["m_body2"];
            NM["localAncho" + 'r1'] = NF["m_localAnc" + "hor1"];
            NM["localAncho" + 'r2'] = NF["m_localAnc" + 'hor2'];
            NM["length"] = NF["m_length"];
            var NH = qH["CreateJoin" + 't'](NM);
            qk["DestroyJoi" + 'nt'](NF);
            this["strapChest" + "1Joints"][0x0] = NH;
          }
          this["elf2"]["strappedIn"] && (NF = this["strapChest" + "2Joints"][0x0], (NM = new qs['Vy']())["body1"] = qf, NM["body2"] = NF["m_body2"], NM["localAncho" + 'r1'] = NF["m_localAnc" + "hor1"], NM["localAncho" + 'r2'] = NF["m_localAnc" + "hor2"], NM["length"] = NF["m_length"], NH = q9['CreateJoin' + 't'](NM), q5["DestroyJoi" + 'nt'](NF), this['strapChest' + '2Joints'][0x0] = NH);
          this["antiGravAr" + "ray"]["push"](NJ);
        } else {
          for (var NJ = 0x0; NJ < Nr["length"]; NJ++) {
            var ND = Nr[NJ];
            ND["enumerable"] = ND["enumerable"] || !0x1;
            ND["configurab" + 'le'] = !0x0;
            "value" in ND && (ND["writable"] = !0x0);
            Object["defineProp" + "erty"](NA, qs(ND["key"]), ND);
          }
        }
      }(NE["prototype"], NR);
      Object["defineProp" + "erty"](NE, "prototype", {
        'writable': !0x1
      });
      return NE;
    } else {
      void 0x0 === qz && (q8 = !0x0);
      qI["prototype"]["hipBreak1"]["call"](this, qS, qA);
      this["ejected"] || (this["cartFoot1J" + "oint"] && (this["_session"]["m_world"]["DestroyJoi" + 'nt'](this["cartFoot1J" + 'oint']), this["cartFoot1J" + "oint"] = null), this["lowerLeg1M" + 'C']["visible"] || (this["lowerLeg1M" + 'C']["visible"] = !0x0), this["checkEject"]());
    }
  }(q5['kx']);
  q2(0xd51a);
  q2(0x87de);
  var qu = q2(0x13a47);
  var ql = q2(0xbfb6);
  var qo = q2(0x183ff);
  function qi(Nl, No) {

    if ("KaNGv" === "AoJtL") {
      return this["_container"];
    } else {
      var Ni = "undefined" != typeof Symbol && Nl[Symbol["iterator"]] || Nl["@@iterator"];
      if (Ni) {
        return (Ni = Ni["call"](Nl))["next"]["bind"](Ni);
      }
      if (Array['isArray'](Nl) || (Ni = function (NW, NA) {
        if ("LXHVp" !== "vnPZl") {
          if (NW) {
            if ("string" == typeof NW) {
              return qE(NW, NA);
            }
            var Nr = {}["toString"]["call"](NW)["slice"](0x8, -0x1);
            "Object" === Nr && NW["constructo" + 'r'] && (Nr = NW["constructo" + 'r']['name']);
            return "Map" === Nr || "Set" === Nr ? Array["from"](NW) : "Arguments" === Nr || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/["test"](Nr) ? qE(NW, NA) : void 0x0;
          }
        } else {
          var ND = this["state"]["buffer"];
          var Ng = qR['Sbox']["buffer"];
          var NS = qz['Xtime2Sbox']["buffer"];
          var Nd = q8["Xtime3Sbox"]["buffer"];
          this["tmp"]["length"] = 0x0;
          this["tmp"]["length"] = 0x10;
          var Nz = this['tmp']["buffer"];
          Nz[0x0] = NS[ND[0x0]] ^ Nd[ND[0x5]] ^ Ng[ND[0xa]] ^ Ng[ND[0xf]];
          Nz[0x1] = Ng[ND[0x0]] ^ NS[ND[0x5]] ^ Nd[ND[0xa]] ^ Ng[ND[0xf]];
          Nz[0x2] = Ng[ND[0x0]] ^ Ng[ND[0x5]] ^ NS[ND[0xa]] ^ Nd[ND[0xf]];
          Nz[0x3] = Nd[ND[0x0]] ^ Ng[ND[0x5]] ^ Ng[ND[0xa]] ^ NS[ND[0xf]];
          Nz[0x4] = NS[ND[0x4]] ^ Nd[ND[0x9]] ^ Ng[ND[0xe]] ^ Ng[ND[0x3]];
          Nz[0x5] = Ng[ND[0x4]] ^ NS[ND[0x9]] ^ Nd[ND[0xe]] ^ Ng[ND[0x3]];
          Nz[0x6] = Ng[ND[0x4]] ^ Ng[ND[0x9]] ^ NS[ND[0xe]] ^ Nd[ND[0x3]];
          Nz[0x7] = Nd[ND[0x4]] ^ Ng[ND[0x9]] ^ Ng[ND[0xe]] ^ NS[ND[0x3]];
          Nz[0x8] = NS[ND[0x8]] ^ Nd[ND[0xd]] ^ Ng[ND[0x2]] ^ Ng[ND[0x7]];
          Nz[0x9] = Ng[ND[0x8]] ^ NS[ND[0xd]] ^ Nd[ND[0x2]] ^ Ng[ND[0x7]];
          Nz[0xa] = Ng[ND[0x8]] ^ Ng[ND[0xd]] ^ NS[ND[0x2]] ^ Nd[ND[0x7]];
          Nz[0xb] = Nd[ND[0x8]] ^ Ng[ND[0xd]] ^ Ng[ND[0x2]] ^ NS[ND[0x7]];
          Nz[0xc] = NS[ND[0xc]] ^ Nd[ND[0x1]] ^ Ng[ND[0x6]] ^ Ng[ND[0xb]];
          Nz[0xd] = Ng[ND[0xc]] ^ NS[ND[0x1]] ^ Nd[ND[0x6]] ^ Ng[ND[0xb]];
          Nz[0xe] = Ng[ND[0xc]] ^ Ng[ND[0x1]] ^ NS[ND[0x6]] ^ Nd[ND[0xb]];
          Nz[0xf] = Nd[ND[0xc]] ^ Ng[ND[0x1]] ^ Ng[ND[0x6]] ^ NS[ND[0xb]];
          this["state"]["position"] = 0x0;
          this["state"]["writeBytes"](this["tmp"], 0x0, 0x4 * qI['Nb']);
        }
      }(Nl)) || No && Nl && "number" == typeof Nl["length"]) {
        Ni && (Nl = Ni);
        var NE = 0x0;
        return function () {
          if ("pSiUu" === "pSiUu") {
            return NE >= Nl['length'] ? {
              'done': !0x0
            } : {
              'done': !0x1,
              'value': Nl[NE++]
            };
          } else {
            this["_window"] = new q6['p8'](!0x1, this, !0x1);
          }
        };
      }
      throw new TypeError("Invalid at" + "tempt to i" + "terate non" + "-iterable " + "instance.\n" + 'In\x20order\x20t' + "o be itera" + "ble, non-a" + "rray objec" + "ts must ha" + "ve a [Symb" + "ol.iterato" + "r]() metho" + 'd.');
    }
  }
  function qE(Nl, No) {


    (null == No || No > Nl["length"]) && (No = Nl["length"]);
    for (var Ni = 0x0, NE = Array(No); Ni < No; Ni++) {
      NE[Ni] = Nl[Ni];
    }
    return NE;
  }
  function qR() {

    var Nl;
    var No;
    var Ni = "function" == typeof Symbol ? Symbol : {};
    var NE = Ni["iterator"] || "@@iterator";
    var NR = Ni["toStringTa" + 'g'] || "@@toString" + "Tag";
    function NW(Nz, NF, NM, NH) {

      var Nb = NF && NF["prototype"] instanceof Nr ? NF : Nr;
      var NZ = Object["create"](Nb["prototype"]);
      qW(NZ, "_invoke", function (Ny, Nc, NX) {

        var Nx;
        var Nw;
        var Na;
        var NY = 0x0;
        var Nv = NX || [];
        var NL = !0x1;
        var NU = {
          'p': 0x0,
          'n': 0x0,
          'v': Nl,
          'a': NO,
          'f': NO["bind"](Nl, 0x4),
          'd': function (NG, NQ) {
            return "LmAaT" === "pLapv" ? qF["userText"]['htmlText'] = "<u>" + qT["userText"]["text"] + "</u>" : (Nx = NG, Nw = 0x0, Na = Nl, NU['n'] = NQ, NA);
          }
        };
        function NO(NG, NQ) {
          if ("apVIa" !== "bsGPJ") {
            Nw = NG;
            Na = NQ;
            No = 0x0;
            for (; !NL && NY && !f0 && No < Nv["length"]; No++) {
              if ("kIMOY" !== "kIMOY") {
                NA["prototype"]["checkJoint" + 's']["call"](this);
                this["detached"] || this["checkRevJo" + "int"](this["connecting" + "Joint"], this["detachLimi" + 't'], this["detachBask" + 'et']);
              } else {
                var f0;
                var f1 = Nv[No];
                var f2 = NU['p'];
                var f3 = f1[0x2];
                NG > 0x3 ? (f0 = f3 === NQ) && (Na = f1[(Nw = f1[0x4]) ? 0x5 : (Nw = 0x3, 0x3)], f1[0x4] = f1[0x5] = Nl) : f1[0x0] <= f2 && ((f0 = NG < 0x2 && f2 < f1[0x1]) ? (Nw = 0x0, NU['v'] = NQ, NU['n'] = f1[0x1]) : f2 < f3 && (f0 = NG < 0x3 || f1[0x0] > NQ || NQ > f3) && (f1[0x4] = NG, f1[0x5] = NQ, NU['n'] = f3, Nw = 0x0));
              }
            }
            if (f0 || NG > 0x1) {
              return NA;
            }
            NL = !0x0;
            throw NQ;
          } else {
            NA["prototype"]["die"]["call"](this);
            this["helmetBody"] = null;
          }
        }
        return function (NG, NQ, f0) {
          if ("pmbkN" === 'bujHi') {
            qF["prototype"]["kneeBreak1"]["call"](this, f0);
            this["ejected"] || this["sleighFoot" + '1'] && (this["_session"]["m_world"]["DestroyJoi" + 'nt'](this["sleighFoot" + '1']), this["sleighFoot" + '1'] = null, this["checkEject"]());
          } else {
            if (NY > 0x1) {
              throw TypeError("Generator " + "is already" + " running");
            }
            NL && 0x1 === NQ && NO(NQ, f0);
            Nw = NQ;
            Na = f0;
            for (; (No = Nw < 0x2 ? Nl : Na) || !NL;) {
              if ("EJftb" !== "EJftb") {
                var f3;
                (f3 = f0["call"](this) || this)['bg'] = new qR['kx']();
                f3['bg']["graphics"]["beginFill"](0x666666);
                f3['bg']["graphics"]["drawRect"](0x0, 0x0, 0x1f4, 0xa);
                f3["addChild"](f3['bg']);
                f3['scrollTab'] = new qz['kx']();
                f3["scrollTab"]["graphics"]['beginFill'](0xcccccc);
                f3["scrollTab"]["graphics"]["drawRect"](0x0, 0x0, 0x1f4, 0xa);
                f3["addChild"](f3["scrollTab"]);
                return f3;
              } else {
                Nx || (Nw ? Nw < 0x3 ? (Nw > 0x1 && (NU['n'] = -0x1), NO(Nw, Na)) : NU['n'] = Na : NU['v'] = Na);
                try {
                  if ("ZPhSB" === "LlWGl") {
                    this["_session"]["m_world"]["DestroyJoi" + 'nt'](this["hipJoint1"]);
                    var f4 = this['upperLeg1B' + "ody"]['GetShapeLi' + 'st']();
                    f4['SetFilterD' + "ata"](this["zeroFilter"]);
                    f4["SetMateria" + 'l'](0x2);
                    f4['m_isSensor'] = !0x1;
                    f4["SetUserDat" + 'a'](this);
                    this["_session"]['m_world']['Refilter'](f4);
                    (f4 = this["lowerLeg1B" + "ody"]["GetShapeLi" + 'st']())['SetFilterD' + "ata"](this["zeroFilter"]);
                    this["_session"]["m_world"]["Refilter"](f4);
                    0x5 == this["upperLeg1M" + 'C']["currentFra" + 'me'] ? this["upperLeg1M" + 'C']["gotoAndSto" + 'p'](0x7) : this["upperLeg1M" + 'C']["gotoAndSto" + 'p'](0x4);
                    this["pelvisMC"]["gotoAndSto" + 'p'](0x2);
                    qz && this["pelvisShap" + 'e']["m_userData"] != Na["GRIND_STAT" + 'E'] && (this["hip1BloodF" + "low"] = this["_session"]["particleCo" + "ntroller"]["createBloo" + "dFlow"](0x0, 0x1, this["pelvisBody"], new qI['RM'](0x0, 0x0), 0x5a, 0x1f4, this["_session"]["containerS" + "prite"], this["_session"]['containerS' + "prite"]["getChildIn" + 'dex'](this["upperLeg1M" + 'C'])), qS['m']["instance"]["playAreaSo" + "undInstanc" + 'e']("LimbRip3", this["upperLeg1B" + "ody"]));
                    var f5 = this["shapeGuide"]["upperLeg1S" + "hape"];
                    this["thigh1Bloo" + 'dFlow'] = this["_session"]["particleCo" + "ntroller"]["createBloo" + "dFlow"](0x1, 0x3, this["upperLeg1B" + "ody"], new qA['RM'](0x0, f5["scaleY"] * -this["shapeRefSc" + "ale"] / this['character_' + "scale"]), 0x10e, 0xc8, this["_session"]["containerS" + "prite"], this["_session"]["containerS" + "prite"]["getChildIn" + "dex"](this["upperLeg1M" + 'C']));
                    this["addVocals"]("Hip1", 0x4);
                  } else {
                    NY = 0x2;
                    if (Nx) {
                      Nw || (NG = 'next');
                      if (No = Nx[NG]) {
                        if (!(No = No["call"](Nx, Na))) {
                          throw TypeError("iterator r" + "esult is n" + "ot an obje" + 'ct');
                        }
                        if (!No["done"]) {
                          return No;
                        }
                        Na = No["value"];
                        Nw < 0x2 && (Nw = 0x0);
                      } else {
                        0x1 === Nw && (No = Nx["return"]) && No["call"](Nx);
                        Nw < 0x2 && (Na = TypeError("The iterat" + "or does no" + "t provide " + 'a\x20\x27' + NG + "' method"), Nw = 0x1);
                      }
                      Nx = Nl;
                    } else {
                      if ((No = (NL = NU['n'] < 0x0) ? Na : Ny["call"](Nc, NU)) !== NA) {
                        break;
                      }
                    }
                  }
                } catch (f4) {
                  if ("EWWgY" === "SCUWz") {
                    var f6 = this['neckVerteb' + "raJoint"]["GetInterpo" + 'latedAncho' + 'r1']();
                    this["spineSprit" + 'e']["graphics"]["moveTo"](f6['x'] * this["m_physScal" + 'e'], f6['y'] * this["m_physScal" + 'e']);
                    f6 = this['vertebraJo' + "ints"][0x0]["GetBody1"]()['GetInterpo' + "latedPosit" + "ion"]();
                    this["spineSprit" + 'e']["graphics"]["lineTo"](f6['x'] * this["m_physScal" + 'e'], f6['y'] * this["m_physScal" + 'e']);
                  } else {
                    Nx = Nl;
                    Nw = 0x1;
                    Na = f4;
                  }
                } finally {
                  NY = 0x1;
                }
              }
            }
            return {
              'value': No,
              'done': NL
            };
          }
        };
      }(Nz, NM, NH), !0x0);
      return NZ;
    }
    var NA = {};
    function Nr() {}
    function NJ() {}
    function ND() {}
    No = Object["getPrototy" + "peOf"];
    var Ng = [][NE] ? No(No([][NE]())) : (qW(No = {}, NE, function () {
      if ("WpRVK" === "laGXY") {
        var NF;
        var NM;
        var NH;
        NJ["prototype"]["createJoin" + 'ts']["call"](this);
        var Nb = qI["oneEightyO" + "verPI"];
        NM = -0x6e / Nb - (NF = this["upperLeg1B" + "ody"]["GetAngle"]() - this["pelvisBody"]["GetAngle"]());
        NH = 0xa / Nb - NF;
        this["hipJoint1"]["SetLimits"](NM, NH);
        NM = -0x6e / Nb - (NF = this['upperLeg2B' + "ody"]['GetAngle']() - this["pelvisBody"]["GetAngle"]());
        NH = 0xa / Nb - NF;
        this["hipJoint2"]["SetLimits"](NM, NH);
        NM = -0x3c / Nb - (NF = this["lowerArm1B" + "ody"]["GetAngle"]() - this["upperArm1B" + "ody"]['GetAngle']());
        NH = 0x0 / Nb - NF;
        this['elbowJoint' + '1']["SetLimits"](NM, NH);
        NM = -0x3c / Nb - (NF = this['lowerArm2B' + "ody"]["GetAngle"]() - this['upperArm2B' + "ody"]["GetAngle"]());
        NH = 0x0 / Nb - NF;
        this["elbowJoint" + '2']["SetLimits"](NM, NH);
        NM = -0x14 / Nb - (NF = this['head1Body']["GetAngle"]() - this['chestBody']['GetAngle']());
        NH = 0x0 / Nb - NF;
        this["neckJoint"]['SetLimits'](NM, NH);
        var NZ = new qS['Gq']();
        NZ["maxMotorTo" + 'rque'] = this["maxTorque"];
        var Ny = new qA['RM']();
        var Nc = this["shapeGuide"]["backWheelS" + "hape"];
        Ny["Set"](this['_startX'] + Nc['x'] / this["character_" + "scale"], this["_startY"] + Nc['y'] / this['character_' + "scale"]);
        NZ['Initialize'](this["frameBody"], this["backWheelB" + "ody"], Ny);
        this["backWheelJ" + "oint"] = this["_session"]['m_world']['CreateJoin' + 't'](NZ);
        Nc = this["shapeGuide"]["frontWheel" + "Shape"];
        Ny["Set"](this['_startX'] + Nc['x'] / this["character_" + "scale"], this["_startY"] + Nc['y'] / this["character_" + "scale"]);
        NZ["Initialize"](this["frameBody"], this["frontWheel" + "Body"], Ny);
        this["frontWheel" + 'Joint'] = this["_session"]["m_world"]['CreateJoin' + 't'](NZ);
        new Nd['Vy']()["Initialize"](this['frameBody'], this["pelvisBody"], this["pelvisBody"]["GetPositio" + 'n'](), this["pelvisBody"]["GetPositio" + 'n']());
        Ny["Set"](this['pelvisBody']["GetPositio" + 'n']()['x'], this["pelvisBody"]["GetPositio" + 'n']()['y']);
        NZ["Initialize"](this["frameBody"], this["pelvisBody"], Ny);
        this["framePelvi" + 's'] = this["_session"]["m_world"]["CreateJoin" + 't'](NZ);
        Nc = this["shapeGuide"]["handleAnch" + 'or'];
        Ny["Set"](this["_startX"] + Nc['x'] / this["character_" + "scale"], this["_startY"] + Nc['y'] / this["character_" + "scale"]);
        NZ["Initialize"](this["frameBody"], this["lowerArm1B" + "ody"], Ny);
        this["frameHand1"] = this["_session"]["m_world"]['CreateJoin' + 't'](NZ);
        NZ["Initialize"](this['frameBody'], this["lowerArm2B" + "ody"], Ny);
        this["frameHand2"] = this["_session"]['m_world']["CreateJoin" + 't'](NZ);
        Nc = this["shapeGuide"]["gearShape"];
        Ny["Set"](this["_startX"] + Nc['x'] / this["character_" + "scale"], this["_startY"] + Nc['y'] / this["character_" + "scale"]);
        NZ["Initialize"](this["frameBody"], this["gearBody"], Ny);
        this["frameGear"] = this["_session"]["m_world"]["CreateJoin" + 't'](NZ);
        var NX = new qc['ZG']();
        NX["body1"] = this["backWheelB" + "ody"];
        NX["body2"] = this["gearBody"];
        NX["joint1"] = this["backWheelJ" + "oint"];
        NX["joint2"] = this["frameGear"];
        this["gearJoint"] = this['_session']["m_world"]["CreateJoin" + 't'](NX);
        this["gearJoint"]["m_ratio"] *= -0x1;
        Nc = this['shapeGuide']["gearAnchor" + '1'];
        Ny["Set"](this["_startX"] + Nc['x'] / this['character_' + "scale"], this["_startY"] + Nc['y'] / this["character_" + "scale"]);
        NZ["Initialize"](this["gearBody"], this["lowerLeg1B" + "ody"], Ny);
        this["gearFoot1"] = this["_session"]["m_world"]["CreateJoin" + 't'](NZ);
        Nc = this["shapeGuide"]["gearAnchor" + '2'];
        Ny["Set"](this["_startX"] + Nc['x'] / this["character_" + "scale"], this['_startY'] + Nc['y'] / this["character_" + "scale"]);
        NZ["Initialize"](this['gearBody'], this["lowerLeg2B" + "ody"], Ny);
        this["gearFoot2"] = this["_session"]["m_world"]["CreateJoin" + 't'](NZ);
      } else {
        return this;
      }
    }), No);
    var NS = ND["prototype"] = Nr["prototype"] = Object["create"](Ng);
    function Nd(Nz) {
      Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"](Nz, ND) : (Nz["__proto__"] = ND, qW(Nz, NR, 'GeneratorF' + "unction"));
      Nz["prototype"] = Object["create"](NS);
      return Nz;
    }
    NJ['prototype'] = ND;
    qW(NS, "constructo" + 'r', ND);
    qW(ND, "constructo" + 'r', NJ);
    NJ["displayNam" + 'e'] = "GeneratorF" + "unction";
    qW(ND, NR, "GeneratorF" + "unction");
    qW(NS);
    qW(NS, NR, "Generator");
    qW(NS, NE, function () {
      if ("BXvdX" === "BXvdX") {
        return this;
      } else {
        var NF;
        qc instanceof qV['j7'] ? (NF = new qE['j7'](null))["setPixiMov" + "ieClip"](ql) : NF = new NE['kx'](No);
        qs["name"] && (NF["name"] = NF["pixiSprite"]["name"] = qf["name"], ND[NW["name"]] = NF);
        Ni["push"](NF);
      }
    });
    qW(NS, "toString", function () {
      return "[object Ge" + "nerator]";
    });
    return (qR = function () {
      return {
        'w': NW,
        'm': Nd
      };
    })();
  }
  function qW(Nl, No, Ni, NE) {


    if ("PheKE" === "PheKE") {
      var NR = Object["defineProp" + 'erty'];
      try {
        if ("invQl" !== "invQl") {
          qT["__proto__"] = qR;
          return qz;
        } else {
          NR({}, '', {});
        }
      } catch (NA) {
        NR = 0x0;
      }
      qW = function (Nr, NJ, ND, Ng) {
        function NS(Nd, Nz) {
          if ("vkgsl" === "axIrL") {
            for (var NM = 0x0; NM < qz["length"]; NM++) {
              var NH = qN[NM];
              NH["enumerable"] = NH['enumerable'] || !0x1;
              NH["configurab" + 'le'] = !0x0;
              "value" in NH && (NH["writable"] = !0x0);
              qc["defineProp" + 'erty'](qV, qE(NH["key"]), NH);
            }
          } else {
            qW(Nr, Nd, function (NM) {

              return this["_invoke"](Nd, Nz, NM);
            });
          }
        }
        NJ ? NR ? NR(Nr, NJ, {
          'value': ND,
          'enumerable': !Ng,
          'configurable': !Ng,
          'writable': !Ng
        }) : Nr[NJ] = ND : (NS('next', 0x0), NS("throw", 0x1), NS("return", 0x2));
      };
      qW(Nl, No, Ni, NE);
    } else {
      var NJ = function (ND) {
        if ("object" != typeof ND || !ND) {
          return ND;
        }
        var Ng = ND[NJ["toPrimitiv" + 'e']];
        if (void 0x0 !== Ng) {
          var NS = Ng['call'](ND, "string");
          if ("object" != typeof NS) {
            return NS;
          }
          throw new qc("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
        }
        return qN(ND);
      }(qI);
      return "symbol" == typeof NJ ? NJ : NJ + '';
    }
  }
  function qA(Nl, No, Ni, NE, NR, NW, NA) {


    try {
      var Nr = Nl[NW](NA);
      var NJ = Nr["value"];
    } catch (ND) {
      return void Ni(ND);
    }
    Nr["done"] ? No(NJ) : Promise["resolve"](NJ)['then'](NE, NR);
  }
  q2(0xbf54);
  q2(0xa70a);
  q2(0x691e);
  q2(0x7ab7);
  q2(0xf26e);
  q2(0x5b7a);
  var qr = function () {

    function Nl() {}
    Nl["onChange"] = function (No) {
      Nl["listeners"]['push'](No);
    };
    Nl["offChange"] = function (No) {


      if ("iTskx" !== "eKFoz") {
        var Ni = Nl["listeners"]["indexOf"](No);
        -0x1 !== Ni && Nl['listeners']['splice'](Ni, 0x1);
      } else {
        var NR = this;
        var NW = {
          'fontFamily': "HelveticaN" + "eueLT Std " + "Med",
          'fontSize': 0xc,
          'fill': "white",
          'leading': 0x2,
          'wordWrap': !0x0
        };
        function NA(Ng) {
          var NS = NR["parse"](NW["stringify"](NW));
          NS["wordWrapWi" + "dth"] = Ng;
          return NS;
        }
        var Nr = new No['lk']("HelveticaN" + "eueLT Std " + "Med", 0xc, 0xffff, !0x1, !0x1, !0x1, '', '', "left", null, null, null, 0x2);
        this["userText"] = new qs['A_']();
        this["userText"]['defaultTex' + "tFormat"] = Nr;
        this["userText"]["text"] = this["_replayDat" + "aObject"]["user_name"];
        this["userText"]['x'] = 0x7;
        this["userText"]['y'] = 4.75;
        var NJ = this["_replayDat" + "aObject"]["timeFrames"] < qf['w']["maxReplayF" + "rames"] ? q9(q5['l5']['setToHundr' + "edths"](this["_replayDat" + "aObject"]['timeSecond' + 's'])) + " seconds" : "---";
        this["timeText"] = new Ni["EYj"](NJ, NA(0x69))["setTransfo" + 'rm'](0xdb, 4.75);
        this["viewsText"] = new qB['EYj'](qW['l5']["addInteger" + "Commas"](this["_replayDat" + "aObject"]["views"]), NW)["setTransfo" + 'rm'](0x1b5, 4.75);
        this["createdTex" + 't'] = new qH["EYj"](qk['l5']["shortenDat" + 'e'](this["_replayDat" + "aObject"]["created"]), NA(0x37))["setTransfo" + 'rm'](0x219, 4.75);
        this["addChild"](this["userText"]);
        this['_pixiSprit' + 'e']['addChild'](this["timeText"]);
        this["_pixiSprit" + 'e']["addChild"](this["viewsText"]);
        this["_pixiSprit" + 'e']["addChild"](this["createdTex" + 't']);
        this["userBtn"]['width'] = this["userText"]['textWidth'] + 0x5;
        this["userBtn"]['addEventLi' + "stener"](q4['Cm']["MOUSE_UP"], this["userPress"], !0x1, 0x0, !0x0);
        this["userBtn"]["pixiSprite"]['on']("pointerove" + 'r', function () {
          return NR["userBtnAct" + "ive"] = !0x0;
        });
        this["userBtn"]["pixiSprite"]['on']("pointerout", function () {
          return NR['userBtnAct' + "ive"] = !0x1;
        });
        this["voteStars"] = new qJ({
          'rating': this["_replayDat" + "aObject"]["average_ra" + "ting"],
          'mcName': "mc_votesta" + 'rs'
        });
        this["voteStars"]['x'] = 0x14a;
        this["addChild"](this["voteStars"]);
        for (var ND = 0x0; ND < this["deferredAc" + 'tions']["length"]; ND++) {
          this["deferredAc" + "tions"][ND]();
        }
        this["deferredAc" + "tions"] = [];
        this['expensiveC' + "reateTimeo" + 'ut'] = null;
      }
    };
    Nl["onNamesCha" + "nge"] = function (No) {
      if ("MlBOv" !== "KDLkq") {
        Nl["nameListen" + "ers"]["push"](No);
      } else {
        var NE = q3["currentSet"];
        No["currentPag" + 'e'] = qs["pageFlippe" + 'r']['currentPag' + 'e'];
        qf["currentSet"] = q9["ceil"](q5["currentPag" + 'e'] * q2["pageLength"] / qB["setLength"]);
        var NR = qW["replayData" + "Array"]["length"];
        qH["currentSet"] > NE && NR <= (qk["currentSet"] - 0x1) * q4["setLength"] ? qJ["loadDataOf" + 'fset']() : (qr["killList"](), qj["buildList"]());
      }
    };
    Nl['offNamesCh' + "ange"] = function (No) {
      var Ni = Nl["nameListen" + "ers"]["indexOf"](No);
      -0x1 !== Ni && Nl['nameListen' + "ers"]["splice"](Ni, 0x1);
    };
    Nl["isFriend"] = function (No) {
      if ("nALRS" === 'nALRS') {
        return !0x1;
      } else {
        qF['uO']["instance"]["show"]("When a rep" + "lay is sav" + 'ed,\x20the\x20ty' + "pe of comp" + 'uter\x20it\x20wa' + "s created " + "on is save" + "d along wi" + "th it.  Co" + "mputers th" + "at match t" + "his type w" + "ill show t" + "he replay " + '100%\x20accur' + "ately.  Th" + "ose that d" + "o not will" + " playback " + "the replay" + " with slig" + "htly diffe" + "rent float" + "ing point " + "math, whic" + "h often (b" + "ut not alw" + "ays) creat" + 'es\x20a\x20diffe' + "rent end r" + "esult enti" + "rely.<br><" + "br>Users m" + 'ay\x20only\x20ra' + "te replays" + " they can " + "view accur" + "ately.", qT["archCheck"]);
      }
    };
    Nl["start"] = function () {};
    Nl["findByTjfN" + "ame"] = function () {
      var No;
      No = qR()['m'](function NE(NR) {
        if ("yNcMp" !== "yNcMp") {
          this["sortDropMe" + 'nu'] = new qT['f']("sort by:", ["newest", "oldest", 'rating', "completion" + " time"], ['newest', "oldest", "rating", "completion" + "_time"], qR['savedDropS' + "ettings"][0x0]);
          this["addChild"](this["sortDropMe" + 'nu']);
          this["sortDropMe" + 'nu']['y'] = this["shadow"]['y'] - 0x15;
          this["sortDropMe" + 'nu']["addEventLi" + "stener"](qz['f']["ITEM_SELEC" + "TED"], this["dropMenuSe" + 'lected']);
          this["dropMenuAr" + "ray"] = [this["sortDropMe" + 'nu']];
          this["organizeDr" + "opMenus"]();
        } else {
          return qR()['w'](function (NA) {


            if ("xLdEK" === "xLdEK") {
              for (;;) {
                switch (NA['p'] = NA['n']) {
                  case 0x0:
                    return NA['a'](0x2, null);
                  case 0x1:
                    NA['p'] = 0x1;
                    NA['n'] = 0x2;
                    return window['hwNative']["friends"]["findByTjfN" + "ame"](NR);
                  case 0x2:
                    return NA['a'](0x2, NA['v']);
                  case 0x3:
                    NA['p'] = 0x3;
                    NA['v'];
                    return NA['a'](0x2, null);
                }
              }
            } else {
              q6 = 0x0;
            }
          }, NE, null, [[0x1, 0x3]]);
        }
      });
      function Ni() {
        var NR = this;
        var NW = arguments;
        return new Promise(function (NA, Nr) {
          var NJ = No["apply"](NR, NW);
          function ND(NS) {

            qA(NJ, NA, Nr, ND, Ng, "next", NS);
          }
          function Ng(NS) {


            "UYURp" === "UYURp" ? qA(NJ, NA, Nr, ND, Ng, "throw", NS) : this["_importabl" + 'e'] = ND;
          }
          ND(void 0x0);
        });
      }
      return function (NR) {
        return Ni["apply"](this, arguments);
      };
    }();
    Nl["compare"] = function (No, Ni) {
      var NE = 'level' === No["activity"]["screen"] ? 0x0 : 0x1;
      var NR = "level" === Ni["activity"]["screen"] ? 0x0 : 0x1;
      if (NE !== NR) {
        return NE - NR;
      }
      var NW = No["name"]["toLowerCas" + 'e']();
      var NA = Ni['name']["toLowerCas" + 'e']();
      return NW !== NA ? NW < NA ? -0x1 : 0x1 : No["steamId64"] === Ni["steamId64"] ? 0x0 : No["steamId64"] < Ni["steamId64"] ? -0x1 : 0x1;
    };
    Nl['apply'] = function (No) {
      Nl["online"] = No["slice"]()["sort"](Nl["compare"]);
      for (var Ni, NE = qi(Nl["listeners"]["slice"]()); !(Ni = NE())["done"];) {
        (0x0, Ni["value"])();
      }
    };
    Nl["applyNames"] = function (No) {

      if ("jTYFA" !== "jTYFA") {
        this["_tweenVal"] = qz;
        this['replaySele' + "ction"]['maskHeight'] = q8["round"](this["replaySele" + "ction"]["fullHeight"] * qI);
        this["organizeLi" + 'st']();
        this["dispatchEv" + "ent"](new qS['Jh'](qA["UPDATE_SCR" + "OLLER"]));
      } else {
        Nl["tjfNames"] = new Set(No["filter"](function (NW) {
          return "string" == typeof NW;
        })["map"](function (NW) {
          return NW["trim"]()["toLowerCas" + 'e']();
        }));
        for (var Ni, NE = qi(Nl['nameListen' + "ers"]["slice"]()); !(Ni = NE())['done'];) {
          (0x0, Ni["value"])();
        }
      }
    };
    return Nl;
  }();
  qr["online"] = [];
  qr['FRIEND_COL' + 'OR'] = 0x3d88c7;
  qr["tjfNames"] = new Set();
  qr["listeners"] = [];
  qr["nameListen" + "ers"] = [];
  qr["started"] = !0x1;
  var qJ = q2(0x1373c);
  function qD(Nl) {

    var No = function (Ni) {
      if ("sJtio" !== "sJtio") {
        return this["maskSprite"]["height"];
      } else {
        if ("object" != typeof Ni || !Ni) {
          return Ni;
        }
        var NE = Ni[Symbol["toPrimitiv" + 'e']];
        if (void 0x0 !== NE) {
          var NR = NE["call"](Ni, "string");
          if ("object" != typeof NR) {
            return NR;
          }
          throw new TypeError("@@toPrimit" + "ive must r" + "eturn a pr" + 'imitive\x20va' + "lue.");
        }
        return String(Ni);
      }
    }(Nl);
    return "symbol" == typeof No ? No : No + '';
  }
  function qg(Nl, No) {

    qg = Object["setPrototy" + 'peOf'] ? Object["setPrototy" + "peOf"]['bind']() : function (Ni, NE) {
      Ni['__proto__'] = NE;
      return Ni;
    };
    return qg(Nl, No);
  }
  var qS = function (Nl) {


    function No(NA) {
      if ('BNszZ' === "BNszZ") {
        var Nr;
        void 0x0 === NA && (NA = {
          'rating': 0x0,
          'mcName': 'mc_votesta' + "rs_large"
        });
        (Nr = Nl["call"](this) || this)["maxRating"] = 0x5;
        var NJ = new q5['j7']((0x0, qK['zI'])("GameUI", NA["mcName"]));
        NJ['convertChi' + "ldren"]();
        Nr["addChild"](NJ);
        Nr["filler"] = NJ["filler"];
        Nr['filler']["mask"] = NJ["starMask"];
        Nr["addChild"](Nr["filler"]);
        Nr["rating"] = NA['rating'];
        Nr["mouseChild" + "ren"] = !0x1;
        return Nr;
      } else {
        qF["prototype"]["footSmash1"]["call"](this, qT);
        this['antiGravAr' + 'ray']["push"](this["foot1Body"]);
      }
    }
    var Ni;
    var NE;
    var NR;
    var NW;
    NE = Nl;
    (Ni = No)["prototype"] = Object["create"](NE["prototype"]);
    Ni["prototype"]["constructo" + 'r'] = Ni;
    qg(Ni, NE);
    NR = No;
    (NW = [{
      'key': "rating",
      'get': function () {
        return "ajZrQ" !== 'ajZrQ' ? this["_volume"] : this["_rating"];
      },
      'set': function (NA) {
        if ("ngjLn" === "yNGVr") {
          return !0x1;
        } else {
          this['_rating'] = NA;
          this["filler"]["scaleX"] = NA / this["maxRating"];
        }
      }
    }]) && function (NA, Nr) {
      if ("fsUOe" !== "fsUOe") {
        this["joints"]['push'](qc);
        var NS = this["joints"]["length"] - 0x1;
        if (qV instanceof qE['Dn']) {
          var Nd = qB;
          if (Nd["IsMotorEna" + "bled"]()) {
            var Nz = Nd["GetMotorSp" + "eed"]();
            this["jointMotor" + 'Speeds'][NS] = Nz;
            this["jointAccel" + 's'][NS] = this['accelerati' + 'on'] < 0xa ? NR["abs"](Nz / (0x64 - 0xa * this["accelerati" + 'on'])) : qJ["abs"](Nz);
            this['lockJoints'] && (this["slowAfterE" + "ject"] = !0x0, (NF = qr['w']["currentSes" + "sion"]["level"]["actionsVec" + 'tor'])["indexOf"](this) < 0x0 && NF["push"](this));
          } else {
            this["jointMotor" + "Speeds"][NS] = null;
          }
          Nd["EnableMoto" + 'r'](!0x1);
        } else {
          var NF;
          var NM = qj;
          NM["IsMotorEna" + "bled"]() ? (Nz = NM["GetMotorSp" + "eed"](), this['jointMotor' + 'Speeds'][NS] = Nz, this["jointAccel" + 's'][NS] = this["accelerati" + 'on'] < 0xa ? qP["abs"](Nz / (0x64 - 0xa * this['accelerati' + 'on'])) : qn["abs"](Nz), this["lockJoints"] && (this["slowAfterE" + 'ject'] = !0x0, (NF = qy['w']["currentSes" + "sion"]["level"]["actionsVec" + "tor"])["indexOf"](this) < 0x0 && NF["push"](this))) : this['jointMotor' + "Speeds"][NS] = null;
          NM['EnableMoto' + 'r'](!0x1);
        }
      } else {
        for (var NJ = 0x0; NJ < Nr['length']; NJ++) {
          if ('XENpv' === "XkPoM") {
            this['bg']["mouseY"] > this["scrollTab"]['y'] ? (this["scrollTab"]['y'] = this["scrollTab"]['y'] + this["scrollTab"]["graphics"]['height'], this["scrollTab"]['y'] + this["scrollTab"]["graphics"]["height"] > this['bg']["graphics"]["height"] && (this['scrollTab']['y'] = this['bg']["graphics"]["height"] - this["scrollTab"]["graphics"]["height"])) : (this["scrollTab"]['y'] = this["scrollTab"]['y'] - this['scrollTab']["graphics"]["height"], this["scrollTab"]['y'] < 0x0 && (this["scrollTab"]['y'] = 0x0));
            this["updateCanv" + 'as']();
          } else {
            var ND = Nr[NJ];
            ND["enumerable"] = ND['enumerable'] || !0x1;
            ND["configurab" + 'le'] = !0x0;
            "value" in ND && (ND["writable"] = !0x0);
            Object["defineProp" + "erty"](NA, qD(ND["key"]), ND);
          }
        }
      }
    }(NR["prototype"], NW);
    Object["defineProp" + 'erty'](NR, "prototype", {
      'writable': !0x1
    });
    return NR;
  }(q5['kx']);
  function qd(Nl, No) {

    return "mPXlk" === "xCeNm" ? q6["applySearc" + 'h']() : (qd = Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"]["bind"]() : function (NE, NR) {
      NE["__proto__"] = NR;
      return NE;
    }, qd(Nl, No));
  }
  var qz = function (Nl) {


    function No(NR) {
      var NW;
      (NW = Nl["call"](this) || this)["characterI" + 'd'] = NR;
      NW["init"](NR);
      return NW;
    }
    var Ni;
    var NE;
    NE = Nl;
    (Ni = No)['prototype'] = Object["create"](NE["prototype"]);
    Ni["prototype"]["constructo" + 'r'] = Ni;
    qd(Ni, NE);
    No["frameName"] = function (NR) {
      return No["CHAR_SPRIT" + "E_PATHS"][NR];
    };
    No["prototype"]["init"] = function (NR) {
      var NW = No["frameName"](NR);
      var NA = new qT["kxk"](qT["gPd"]['from'](NW));
      NA["scale"]['set'](0.25);
      var Nr = No["CHAR_SPRIT" + "E_OFFSETS"][NR];
      NA['x'] = Nr[0x0];
      NA['y'] = Nr[0x1];
      this['_pixiSprit' + 'e']["addChild"](NA);
    };
    return No;
  }(q5['kx']);
  function qF(Nl) {

    var No = function (Ni) {
      if ("object" != typeof Ni || !Ni) {
        return Ni;
      }
      var NE = Ni[Symbol["toPrimitiv" + 'e']];
      if (void 0x0 !== NE) {
        var NR = NE['call'](Ni, "string");
        if ("object" != typeof NR) {
          return NR;
        }
        throw new TypeError("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + 'lue.');
      }
      return String(Ni);
    }(Nl);
    return "symbol" == typeof No ? No : No + '';
  }
  function qM(Nl, No) {


    if ("DLAbn" === "DLAbn") {
      qM = Object["setPrototy" + "peOf"] ? Object['setPrototy' + "peOf"]["bind"]() : function (Ni, NE) {
        Ni["__proto__"] = NE;
        return Ni;
      };
      return qM(Nl, No);
    } else {
      if ("object" != typeof qA || !qN) {
        return qc;
      }
      var NE = qV[qE['toPrimitiv' + 'e']];
      if (void 0x0 !== NE) {
        var NR = NE["call"](qf, "string");
        if ('object' != typeof NR) {
          return NR;
        }
        throw new q9("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
      }
      return No(qs);
    }
  }
  qz["CHAR_SPRIT" + "E_PATHS"] = ["game-ui-76" + ".png", "game-ui-65" + ".png", "game-ui-66" + ".png", "game-ui-67" + ".png", "game-ui-68" + ".png", "game-ui-69" + ".png", "game-ui-70" + ".png", "game-ui-71" + ".png", "game-ui-72" + '.png', "game-ui-73" + ".png", "game-ui-74" + ".png", "game-ui-75" + ".png"];
  qz["CHAR_SPRIT" + "E_OFFSETS"] = [[0x3, 0x2], [0x3, 0x2], [0x1, 0x1], [0x1, 0x1], [0x1, 0x2], [0x2, 0x2], [0x1, 0x2], [0x1, 0x1], [0x1, 0x1], [0x2, 0x1], [0x3, 0x1], [0x1, 0x1]];
  var qH = function (Nl) {


    function No(Nr, NJ) {
      var ND;
      (ND = Nl["call"](this) || this)["rowColor"] = 0x888888;
      ND["authorBtnA" + "ctive"] = !0x1;
      ND["authorPres" + 's'] = function (NS) {


        if ("efeLU" === "SRxeB") {
          q6["prototype"]["createDict" + 'ionaries']["call"](this);
          this["contactAdd" + "Sounds"]["set"](this['seatShape1'], "BikeHit3");
        } else {
          if (ND["authorBtnA" + "ctive"]) {
            if ("squMa" === 'svxXH') {
              if ('object' != typeof qA || !qN) {
                return qc;
              }
              var NM = qV[qE["toPrimitiv" + 'e']];
              if (void 0x0 !== NM) {
                var NH = NM["call"](qf, "string");
                if ("object" != typeof NH) {
                  return NH;
                }
                throw new q9('@@toPrimit' + "ive must r" + "eturn a pr" + 'imitive\x20va' + "lue.");
              }
              return Nd(qs);
            } else {
              var Nd = new q5['vg'](q6['w']["siteURL"] + ("profile.tj" + 'f?uid=') + ND["_levelData" + "Object"]["author_id"]);
              (0x0, q5['is'])(Nd, "_blank");
              qN['JD']["trackEvent"](qN['JD']["LEVEL_BROW" + "SER"], qN['JD']["GOTO_USER_" + "PAGE"], "userID_" + ND["_levelData" + "Object"]["author_id"]);
            }
          }
        }
      };
      ND["_levelData" + "Object"] = Nr;
      var Ng = new q5['j7']((0x0, qK['zI'])("GameUI", "mc_levelli" + "stitem"));
      Ng["convertChi" + "ldren"]();
      ND["addChild"](Ng);
      ND['bg'] = Ng['bg'];
      ND['authorBtn'] = Ng["authorBtn"];
      ND["authorBtn"]["name"] = "authorBtn";
      ND["authorBtn"]["visible"] = !0x1;
      ND['buttonMode'] = !0x0;
      ND["deferredAc" + "tions"] = [];
      0x0 === NJ ? ND["expensiveI" + "nit"]() : ND["expensiveC" + 'reateTimeo' + 'ut'] = window["setTimeout"](ND["expensiveI" + "nit"]["bind"](ND), NJ);
      ND["characterF" + "aces"] = new qz(ND["_levelData" + 'Object']["character"]);
      ND["characterF" + 'aces']['x'] = 0x1a4;
      ND["addChild"](ND["characterF" + "aces"]);
      ND["rollOut"]();
      return ND;
    }
    var Ni;
    var NE;
    NE = Nl;
    (Ni = No)["prototype"] = Object["create"](NE["prototype"]);
    Ni['prototype']["constructo" + 'r'] = Ni;
    qM(Ni, NE);
    var NR;
    var NW;
    var NA = No["prototype"];
    NA["expensiveI" + "nit"] = function () {


      var Nr = this;
      var NJ = {
        'fontFamily': "HelveticaN" + "eueLT Std " + "Med",
        'fontSize': 0xc,
        'fill': "white",
        'leading': 0x2,
        'wordWrap': !0x0
      };
      function ND(Nd) {
        var Nz = JSON["parse"](JSON["stringify"](NJ));
        Nz["wordWrapWi" + "dth"] = Nd;
        return Nz;
      }
      this['titleText'] = new qT["EYj"](this["_levelData" + "Object"]["name"], ND(0xf0))['setTransfo' + 'rm'](0x7, 4.75);
      var Ng = new q5['lk']("HelveticaN" + "eueLT Std " + 'Med', 0xc, 0xffff, !0x1, !0x1, !0x1, '', '', 'left', null, null, null, 0x2);
      this['authorText'] = new q5['A_']();
      this["authorText"]['defaultTex' + "tFormat"] = Ng;
      this["authorText"]["text"] = this["_levelData" + "Object"]["author_nam" + 'e'];
      this["authorText"]['x'] = 0x101;
      this['authorText']['y'] = 4.75;
      this["playsText"] = new qT['EYj'](qN['l5']["addInteger" + 'Commas'](this["_levelData" + 'Object']["plays"]), ND(0x50))["setTransfo" + 'rm'](0x225, 4.75);
      this["createdTex" + 't'] = new qT["EYj"](qN['l5']["shortenDat" + 'e'](this['_levelData' + "Object"]["created"]), ND(0x3c))["setTransfo" + 'rm'](0x28a, 4.75);
      this["_pixiSprit" + 'e']["addChild"](this["titleText"]);
      this["addChild"](this["authorText"]);
      this['_pixiSprit' + 'e']["addChild"](this["playsText"]);
      this["_pixiSprit" + 'e']["addChild"](this["createdTex" + 't']);
      this["authorBtn"]["width"] = this["authorText"]['width'] + 0x5;
      this['authorBtn']["addEventLi" + 'stener'](q5['Cm']['MOUSE_UP'], this['authorPres' + 's'], !0x1, 0x0, !0x0);
      this["authorBtn"]["pixiSprite"]['on']("pointerove" + 'r', function () {
        if ("weQhu" !== 'weQhu') {
          this["graphics"]["beginFill"](0xffffff);
          this["graphics"]["drawRect"](0x0, 0x0, this["windowWidt" + 'h'], this['windowHeig' + 'ht']);
          this['graphics']["endFill"]();
          var Nz = new qS['lk']("HelveticaN" + "eueLT Std", 0xc, 0x0, null, null, null, null, null, qA['MA']["LEFT"]);
          this["textField"] = new qN['A_']();
          this["textField"]["defaultTex" + "tFormat"] = Nz;
          this["textField"]["width"] = this["windowWidt" + 'h'] - 0xc;
          this["textField"]["height"] = 0x14;
          this["textField"]['x'] = 0x0;
          this["textField"]['y'] = 0x0;
          this["textField"]['multiline'] = !0x0;
          this["textField"]["autoSize"] = qc['wL']["LEFT"];
          this["textField"]["wordWrap"] = !0x0;
          this["textField"]["selectable"] = !0x1;
          this["textField"]["antiAliasT" + 'ype'] = qV['BF']["ADVANCED"];
          this["holder"] = new qE['kx']();
          this["addChild"](this['holder']);
          this["holder"]["addChild"](this["textField"]);
          this["maskSprite"] = new ql['kx']();
          this["maskSprite"]["graphics"]["beginFill"](0x0);
          this["maskSprite"]["graphics"]["drawRect"](0x0, 0x0, this["windowWidt" + 'h'] - 0xc, this['windowHeig' + 'ht']);
          this['maskSprite']['graphics']['endFill']();
          this['addChild'](this["maskSprite"]);
          this["holder"]["mask"] = this["maskSprite"];
          this["scroller"] = new Ng['Em'](this["holder"], this["maskSprite"], 0x16);
          this["addChild"](this["scroller"]);
          this["scroller"]['x'] = this["windowWidt" + 'h'] - 0xc;
        } else {
          return Nr["authorBtnA" + "ctive"] = !0x0;
        }
      });
      this["authorBtn"]['pixiSprite']['on']("pointerout", function () {
        return Nr['authorBtnA' + "ctive"] = !0x1;
      });
      this['voteStars'] = new qS({
        'rating': this["_levelData" + "Object"]["average_ra" + "ting"],
        'mcName': "mc_votesta" + 'rs'
      });
      this["voteStars"]['x'] = 0x1ba;
      this["addChild"](this["voteStars"]);
      for (var NS = 0x0; NS < this["deferredAc" + "tions"]["length"]; NS++) {
        this['deferredAc' + "tions"][NS]();
      }
      this["deferredAc" + "tions"] = [];
      this["expensiveC" + "reateTimeo" + 'ut'] = null;
    };
    NA['rollOver'] = function () {
      if ("qBtGp" === "hZvug") {
        return this["pixiSprite"]["position"]['x'];
      } else {
        this['bg']["gotoAndSto" + 'p'](0x2);
        this["setTextCol" + 'or'](0x3d88c7);
      }
    };
    NA["rollOut"] = function () {
      if ("huPcc" !== "huPcc") {
        var NJ = 0xf;
        qV['w']["use60FPS"] && (NJ /= 0x2);
        qE["refreshBut" + "ton"]['rotation'] = (ql["refreshBut" + 'ton']["rotation"] + NJ) % 0x168;
        '0' == NE['refreshBut' + "ton"]["rotation"]["toFixed"](0x0) && No["disableSpi" + 'n'] && (qs["disableSpi" + 'n'] = !0x1, qf["removeEven" + "tListener"](q9['Jh']["ENTER_FRAM" + 'E'], q5["spin"]), Ni["refreshBut" + "ton"]["addEventLi" + "stener"](qB['Cm']["MOUSE_UP"], qW['loadLevels'], !0x1, 0x0, !0x0));
      } else {
        this["_selected"] ? this['rollOver']() : (this['bg']["gotoAndSto" + 'p'](0x1), this["setTextCol" + 'or'](0x888888));
      }
    };
    NA["mouseDown"] = function () {
      this["_selected"] || (this['bg']["gotoAndSto" + 'p'](0x3), this["setTextCol" + 'or'](0xffffff));
    };
    NA["setTextCol" + 'or'] = function (Nr) {

      var NJ = this;
      this["rowColor"] = Nr;
      this["doActionAf" + "terTextCre" + "ation"](function () {
        NJ["titleText"]["tint"] = NJ["playsText"]["tint"] = NJ["createdTex" + 't']["tint"] = Nr;
        NJ["authorText"]["textColor"] = NJ["isFriendAu" + "thor"]() ? qr["FRIEND_COL" + 'OR'] : Nr;
      });
    };
    NA["refreshTex" + "tColor"] = function () {
      this["setTextCol" + 'or'](this["rowColor"]);
    };
    NA['isFriendAu' + "thor"] = function () {

      if ("sFzRN" !== "yhizm") {
        return !0x1;
      } else {
        var NJ;
        var ND;
        var Ng;
        return qV()['w'](function (NS) {
          for (;;) {
            switch (NS['n']) {
              case 0x0:
                this["closeMainM" + "enu"]();
                qu['levelDataO' + "bject"] && (NJ = qd["levelDataO" + "bject"]);
                ND = qm['w']["useDebug"] && qa['w']["debugOptio" + 'ns']["editorDebu" + 'gDraw'];
                Ng = qh['w']["useDebug"] && qq['w']["debugOptio" + 'ns']["editorTest" + "ingMode"];
                qZ['w']["currentlyI" + "nEditor"] = !0x0;
                this["editor"] = new qo['KE'](NJ, ND, Ng);
                qK['w']["editor"] = this["editor"];
                this["addChildAt"](this["editor"], 0x0);
                this["editor"]["init"]();
                this["editor"]["addEventLi" + "stener"](Nl['$T']["MAIN_MENU"], this["closeEdito" + "rBind"]);
              case 0x1:
                return NS['a'](0x2);
            }
          }
        }, qW, this);
      }
    };
    NA["doActionAf" + "terTextCre" + "ation"] = function (Nr) {
      this["expensiveC" + "reateTimeo" + 'ut'] ? this["deferredAc" + "tions"]["push"](Nr) : Nr();
    };
    NA["destroy"] = function () {
      'RdLcA' === "xQYsB" ? qI(qS, qA, qN, qc, qV, "throw", qE) : (this["expensiveC" + 'reateTimeo' + 'ut'] && clearTimeout(this["expensiveC" + "reateTimeo" + 'ut']), this["createdTex" + 't'] && this["createdTex" + 't']["destroy"](), this["titleText"] && this["titleText"]["destroy"](), this['playsText'] && this["playsText"]["destroy"](), Nl["prototype"]['destroy']["call"](this));
    };
    NR = No;
    (NW = [{
      'key': "selected",
      'get': function () {
        return this["_selected"];
      },
      'set': function (Nr) {

        if ("jONUy" === "oVtFz") {
          this["setJoint"](this["neckJoint"], 0.5, 0x2);
          this["setJoint"](this["hipJoint1"], 0x0, 0x2);
          this["setJoint"](this['hipJoint2'], 3.5, 0x2);
          this["setJoint"](this["kneeJoint1"], 0x2, 0xa);
          this["setJoint"](this["kneeJoint2"], 0x0, 0xa);
          this['setJoint'](this["shoulderJo" + "int1"], 0x1, 0x14);
          this["setJoint"](this["shoulderJo" + "int2"], 0x3, 0x14);
          this["setJoint"](this["elbowJoint" + '1'], 0x3, 0xf);
          this["setJoint"](this["elbowJoint" + '2'], 1.5, 0xf);
        } else {
          var NJ = this;
          this["_selected"] = Nr;
          this["_selected"] ? (this["doActionAf" + "terTextCre" + "ation"](function () {
            if ("FNdgq" === "eVHZK") {
              if (qA['handNav']) {
                qN["currMouseX"] = qc["mouseX"];
                qV["currMouseY"] = qE["mouseY"];
                ql["canvas"]["_pixiSprit" + 'e']["interactiv" + "eChildren"] = !0x1;
                return void NE["stage"]['addEventLi' + "stener"](No['Cm']["MOUSE_MOVE"], qs["stageDrag"]);
              }
            } else {
              return NJ['authorText']["htmlText"] = "<u>" + NJ["authorText"]["text"] + "</u>";
            }
          }), this['rollOver'](), this["authorBtn"]["visible"] = !0x0, this['bg']["alpha"] = 0x1, qJ['m']["instance"]["playSoundI" + "tem"]("MenuSelect" + '2')) : (this["doActionAf" + "terTextCre" + "ation"](function () {
            if ("alaAd" === "FDcZt") {
              NA["gotoAndSto" + 'p'](qI);
              var NS = new qS['ws'](qA["width"], qN["height"], !0x0, 0x0);
              NS["draw"](qc);
              this["bloodBmdAr" + 'ray']["push"](NS);
            } else {
              return NJ["authorText"]["htmlText"] = NJ["authorText"]["text"];
            }
          }), this['rollOut'](), this["_faded"] && (this['bg']["alpha"] = No["FADE_VALUE"]), this["authorBtn"]["visible"] = !0x1);
        }
      }
    }, {
      'key': "faded",
      'get': function () {
        return this["_faded"];
      },
      'set': function (Nr) {
        this["_faded"] = Nr;
        this["_faded"] && !this['_selected'] ? this['bg']["alpha"] = No["FADE_VALUE"] : this['bg']['alpha'] = 0x1;
      }
    }, {
      'key': 'levelDataO' + "bject",
      'get': function () {
        return "LCfba" !== "NiIbh" ? this['_levelData' + 'Object'] : this["_window"];
      }
    }]) && function (Nr, NJ) {
      if ("KxzYl" !== "CBnzn") {
        for (var ND = 0x0; ND < NJ["length"]; ND++) {
          if ("MYGvp" !== "DyWMr") {
            var Ng = NJ[ND];
            Ng["enumerable"] = Ng["enumerable"] || !0x1;
            Ng["configurab" + 'le'] = !0x0;
            "value" in Ng && (Ng["writable"] = !0x0);
            Object["defineProp" + "erty"](Nr, qF(Ng["key"]), Ng);
          } else {
            var Nd = qS['target'];
            Nd["removeEven" + "tListener"](qA['Jh']["COMPLETE"], qN["loadComple" + 'te']);
            Nd["removeEven" + "tListener"](qc['BR']["IO_ERROR"], qV["IOErrorHan" + "dler"]);
            qE["dispatchEv" + "ent"](new ql['Jh'](Ng['BR']["IO_ERROR"]));
          }
        }
      } else {
        ND["volumeSlid" + 'er']["setValue"](qB["value"]);
        qW['m']["instance"]["setVolume"](qH["value"] / 0x64);
        qk["value"] > 0x0 && NR['m']["instance"]["isMuted"] ? (qJ['m']["instance"]["unMute"](), qr['J']["trackEvent"](qj['J']["OPTIONS"], qP['J']["UNMUTE"])) : 0x0 !== qn["value"] || qy['m']["instance"]["isMuted"] || (qg['m']["instance"]["mute"](), qu['J']["trackEvent"](qd['J']["OPTIONS"], qm['J']["MUTE"]));
        qa['m']["instance"]["playSoundI" + "tem"]("MenuSelect");
        qh['J']["trackEvent"](qq['J']["OPTIONS"], qZ['J']['SET_VOLUME'], "value_" + qo["value"]);
      }
    }(NR['prototype'], NW);
    Object["defineProp" + 'erty'](NR, "prototype", {
      'writable': !0x1
    });
    return NR;
  }(q5['kx']);
  qH['BG_HEIGHT'] = 0x16;
  qH["FADE_VALUE"] = 0.5;
  var qb = q2(0x133ab);
  function qZ(Nl) {

    var No = function (Ni) {
      if ("NyZmW" !== "NyZmW") {
        this["ejected"] ? this['releaseGri' + 'p']() : this["shockJoint"]["IsMotorEna" + 'bled']() && (this['shockJoint']["GetMotorSp" + "eed"]() > 0x0 ? this["shockJoint"]["GetJointTr" + "anslation"]() > this['jumpTransl' + "ation"] && this["shockJoint"]["SetMotorSp" + "eed"](-0x1) : this["shockJoint"]["GetMotorSp" + "eed"]() < 0x0 && this["shockJoint"]["GetJointTr" + "anslation"]() < 0x0 && (this["shockJoint"]["EnableMoto" + 'r'](!0x1), this["shockJoint"]["SetLimits"](0x0, 0x0), this["shockJoint"]["SetMotorSp" + "eed"](0x0)));
      } else {
        if ("object" != typeof Ni || !Ni) {
          return Ni;
        }
        var NE = Ni[Symbol["toPrimitiv" + 'e']];
        if (void 0x0 !== NE) {
          var NR = NE["call"](Ni, "string");
          if ("object" != typeof NR) {
            return NR;
          }
          throw new TypeError("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
        }
        return String(Ni);
      }
    }(Nl);
    return "symbol" == typeof No ? No : No + '';
  }
  function qy(Nl, No) {


    return "sThyO" === "JzpHn" ? (qT["__proto__"] = qR, qz) : (qy = Object["setPrototy" + 'peOf'] ? Object["setPrototy" + "peOf"]["bind"]() : function (NE, NR) {
      NE["__proto__"] = NR;
      return NE;
    }, qy(Nl, No));
  }
  var qc = function (Nl) {

    function No(Nr) {
      if ("YMZHV" !== "YMZHV") {
        NS = qI["setPrototy" + "peOf"] ? qS["setPrototy" + "peOf"]["bind"]() : function (Nz, NF) {

          Nz["__proto__"] = NF;
          return Nz;
        };
        return qA(qN, qc);
      } else {
        var NJ;
        (NJ = Nl["call"](this) || this)["fullHeight"] = 0x9a;
        NJ["scroll"] = function (Nz) {


          if (NJ["mouseX"] > 0x0 && NJ["mouseX"] < 0xfa && NJ["mouseY"] > 0x0 && NJ["mouseY"] < NJ["fullHeight"]) {
            var NF = NJ["fullHeight"] / 0x2;
            var NM = (NF - NJ["mouseY"]) / NF * 0xa;
            var NH = 0.5 * Nz["delta"];
            NJ["comments"]['y'] += NM * NH;
            NJ["comments"]['y'] + NJ['comments']["height"] < NJ["fullHeight"] && (NJ["comments"]['y'] = NJ["fullHeight"] - NJ["comments"]["height"]);
            NJ['comments']['y'] > 0x0 && (NJ["comments"]['y'] = 0x0);
          }
        };
        NJ["mouseUpHan" + "dler"] = function (Nz) {


          switch (Nz["target"]) {
            case NJ["playButton"]:
              qN['JD']["trackEvent"](qN['JD']["LEVEL_BROW" + "SER"], qN['JD']["LOAD_LEVEL"], "levelID_" + NJ["_levelData" + "Object"]['id']);
              NJ["dispatchEv" + "ent"](new qu['$T'](qu['$T']["SESSION"], NJ["_levelData" + "Object"]));
              break;
            case NJ["authorLeve" + "lsButton"]:
              qN['JD']["trackEvent"](qN['JD']["LEVEL_BROW" + 'SER'], qN['JD']["GET_LEVELS" + "_BY_AUTHOR"], "authorID_" + NJ["_levelData" + "Object"]['author_id']);
              NJ["dispatchEv" + "ent"](new qu['dg'](qu['dg']['USER'], NJ["_levelData" + "Object"]));
              break;
            case NJ["viewReplay" + "sButton"]:
              qN['JD']["trackEvent"](qN['JD']["LEVEL_BROW" + "SER"], qN['JD']["GOTO_REPLA" + "Y_BROWSER"], "levelID_" + NJ["_levelData" + "Object"]['id']);
              var NF = new qu['$T'](qu['$T']["REPLAY_BRO" + "WSER"], NJ["_levelData" + "Object"]);
              NF["target"] = NJ;
              NJ["dispatchEv" + "ent"](NF);
              break;
            case NJ["copyUrlBut" + "ton"]:
              (0x0, qb['e'])(NJ["linkText"]["_pixiTextI" + "nput"]['text'], NJ["copyUrlBut" + "ton"]);
              break;
            case NJ["downloadBu" + 'tton']:
              break;
            case NJ["favoriteBu" + "tton"]:
              if (q6['w']["favoriteLe" + 'velIds']["indexOf"](NJ["_levelData" + "Object"]['id']) > -0x1) {
                if ("pQnme" === 'MyVSt') {
                  this["rotation"] = q6;
                  this["forceDirty"]();
                } else {
                  var NM = qu['dg']["REMOVE_FRO" + "M_FAVORITE" + 'S'];
                  qN['JD']["trackEvent"](qN['JD']["LEVEL_BROW" + "SER"], qN['JD']["REMOVE_FAV" + "ORITE"]);
                }
              } else {
                NM = qu['dg']["ADD_TO_FAV" + "ORITES"];
                qN['JD']["trackEvent"](qN['JD']["LEVEL_BROW" + 'SER'], qN['JD']["ADD_FAVORI" + 'TE']);
              }
              NJ["dispatchEv" + "ent"](new qu['dg'](NM, NJ["_levelData" + "Object"]['id']));
              NJ['favoriteBu' + "tton"]["disabled"] = !0x0;
          }
        };
        var ND = (0x0, qK['zI'])("GameUI", 'mc_levelse' + "lection");
        NJ['__mc'] = ND;
        var Ng = [];
        ND['children']["forEach"](function (Nz) {

          if ("JRoAk" === "JRoAk") {
            var NF;
            Nz instanceof qV['j7'] ? (NF = new q5['j7'](null))["setPixiMov" + "ieClip"](Nz) : NF = new q5['kx'](Nz);
            Nz['name'] && (NF["name"] = NF["pixiSprite"]["name"] = Nz["name"], NJ[Nz["name"]] = NF);
            Ng["push"](NF);
          } else {
            return "string" == typeof q6;
          }
        });
        Ng["forEach"](function (Nz) {

          if ("kCazS" === 'ULPqr') {
            return this["_disabled"];
          } else {
            NJ["addChild"](Nz);
          }
        });
        NJ["descriptio" + "nText"] = q5['A_']['spriteToTe' + 'xtField'](NJ['descriptio' + "nText"], NJ);
        NJ["characterT" + "ext"] = q5['A_']["spriteToTe" + "xtField"](NJ["characterT" + "ext"], NJ);
        NJ["commentsTe" + 'xt'] = q5['A_']["spriteToTe" + "xtField"](NJ["commentsTe" + 'xt'], NJ);
        NJ["avgRatingT" + "ext"] = q5['A_']["spriteToTe" + "xtField"](NJ["avgRatingT" + "ext"], NJ);
        NJ["wtdRatingT" + "ext"] = q5['A_']["spriteToTe" + "xtField"](NJ["wtdRatingT" + "ext"], NJ);
        NJ["linkText"] = q5['A_']['spriteToTe' + "xtField"](NJ["linkText"], NJ);
        NJ["playButton"] = (0x0, qK['Iz'])(q3['yw'], NJ, "playButton", {
          'fileName': 'GameUI',
          'mcName': "mc_levelse" + "lection_pl" + 'ay_button'
        });
        NJ["linkText"]["type"] = q5['ux']["INPUT"];
        NJ["linkText"]["_pixiTextI" + "nput"]["_dom_input"]["setAttribu" + 'te']("readonly", '');
        NJ["linkText"]["_pixiTextI" + "nput"]["setInputSt" + "yle"]("width", "248px");
        NJ["_levelData" + 'Object'] = Nr;
        NJ["shadow"]["mouseEnabl" + 'ed'] = !0x1;
        NJ["descriptio" + "nText"]["autoSize"] = q5['wL']["LEFT"];
        NJ["descriptio" + 'nText']["wordWrap"] = !0x0;
        NJ['descriptio' + "nText"]["text"] = NJ['_levelData' + 'Object']["comments"];
        NJ["_levelData" + 'Object']['forceChar'] ? NJ["characterT" + "ext"]["text"] = q6['w']['characterN' + "ames"][NJ["_levelData" + "Object"]["character"] - 0x1] : NJ["characterT" + "ext"]["text"] = "all";
        NJ["avgRatingT" + 'ext']["text"] = String(qN['l5']["setToHundr" + "edths"](NJ["_levelData" + "Object"]["average_ra" + "ting"])) + " / 5.00 (" + NJ["_levelData" + "Object"]["votes"] + " votes)";
        NJ["wtdRatingT" + "ext"]["text"] = String(qN['l5']["setToHundr" + "edths"](NJ["_levelData" + 'Object']["weighted_r" + "ating"])) + " / 5.00 (" + NJ["_levelData" + "Object"]['votes'] + '\x20votes)';
        NJ["linkText"]["_pixiTextI" + "nput"]["text"] = q6['w']['siteURL'] + ("happy_whee" + 'ls.tjf?lev' + "el_id=") + NJ["_levelData" + "Object"]['id'];
        NJ["viewReplay" + "sButton"] = new q3['Ch']("view repla" + "ys/records", 0xfd8181, 0xa6);
        NJ["addChild"](NJ["viewReplay" + "sButton"]);
        NJ["viewReplay" + "sButton"]['x'] = 0x224;
        NJ['viewReplay' + "sButton"]['y'] = 0x39;
        NJ["authorLeve" + "lsButton"] = new q3['Ch']("view level" + "s by this " + 'author', 0xfd8181, 0xa6);
        NJ["addChild"](NJ["authorLeve" + "lsButton"]);
        NJ["authorLeve" + "lsButton"]['x'] = 0x224;
        NJ['authorLeve' + "lsButton"]['y'] = 0x59;
        NJ['copyUrlBut' + "ton"] = new q3['Ch']("copy level" + " url", 0xcccccc, 0xa6, 0x605344);
        NJ['addChild'](NJ["copyUrlBut" + 'ton']);
        NJ["copyUrlBut" + "ton"]['x'] = 0x224;
        NJ['copyUrlBut' + "ton"]['y'] = 0x79;
        var NS = q6['w']["favoriteLe" + "velIds"]["indexOf"](Nr['id']) > -0x1 ? 'remove\x20fav' + "orite" : "add to fav" + 'orites';
        NJ["favoriteBu" + "tton"] = new q3['Ch'](NS, 0xfffe65, 0x78, 0x605344);
        NJ['addChild'](NJ["favoriteBu" + "tton"]);
        NJ["favoriteBu" + "tton"]['x'] = 0x102;
        NJ["favoriteBu" + "tton"]['y'] = 0x59;
        NJ["comments"] = new q5['kx']();
        NJ["addChild"](NJ["comments"]);
        NJ["comments"]["addChild"](NJ["descriptio" + "nText"]);
        NJ["comments"]["addChild"](NJ["commentsTe" + 'xt']);
        NJ["comments"]["graphics"]["beginFill"](0xefefef, 0x0);
        NJ["comments"]['graphics']["drawRect"](0x0, 0x0, 0xfa, NJ["comments"]['height']);
        NJ['comments']["graphics"]["endFill"]();
        NJ["comments"]["height"] > NJ["fullHeight"] && NJ["addEventLi" + "stener"](q5['Jh']["ENTER_FRAM" + 'E'], NJ["scroll"]);
        NJ["addChild"](NJ["shadow"]);
        NJ["shadow"]["visible"] = !0x1;
        NJ["maskSprite"] = new q5['kx']();
        NJ['addChild'](NJ["maskSprite"]);
        NJ["maskSprite"]['graphics']['beginFill'](0xff0000, 0x1);
        NJ["maskSprite"]["graphics"]["drawRect"](0x0, 0x0, NJ["shadow"]['width'], NJ["shadow"]["height"]);
        NJ['maskSprite']["graphics"]["endFill"]();
        NJ['maskSprite']["visible"] = !0x1;
        NJ['addEventLi' + "stener"](q5['Cm']["MOUSE_UP"], NJ["mouseUpHan" + "dler"]);
        return NJ;
      }
    }
    var Ni;
    var NE;
    NE = Nl;
    (Ni = No)["prototype"] = Object['create'](NE["prototype"]);
    Ni["prototype"]['constructo' + 'r'] = Ni;
    qy(Ni, NE);
    var NR;
    var NW;
    var NA = No["prototype"];
    NA["createDown" + "loadButton"] = function () {};
    NA['refreshDow' + 'nloadButto' + 'n'] = function () {};
    NA["downloadPr" + "essed"] = function () {};
    NA["die"] = function () {
      if ("ghybC" !== "CpYnv") {
        this["removeEven" + "tListener"](q5['Jh']["ENTER_FRAM" + 'E'], this["scroll"]);
        this["removeEven" + "tListener"](q5['Cm']['MOUSE_UP'], this["mouseUpHan" + "dler"]);
      } else {
        return '[object\x20Ge' + 'nerator]';
      }
    };
    NA["destroy"] = function () {
      for (var Nr = ["avgRatingL" + "abel", "characterL" + "abel", "wtdRatingL" + "abel", "linkLabel"], NJ = 0x0; NJ < Nr["length"]; NJ++) {
        if ('fpUov' !== "jYtDK") {
          var ND = Nr[NJ];
          this["__mc"][ND]["destroy"]();
        } else {
          return this["_currentIn" + "dex"];
        }
      }
      Nl["prototype"]['destroy']["call"](this);
    };
    NR = No;
    (NW = [{
      'key': "levelDataO" + "bject",
      'get': function () {
        return this["_levelData" + "Object"];
      }
    }, {
      'key': "maskHeight",
      'get': function () {
        return this["maskSprite"]["height"];
      },
      'set': function (Nr) {

        if ("FTvGT" !== "FTvGT") {
          NW = qI['setPrototy' + "peOf"] ? qS["setPrototy" + "peOf"]["bind"]() : function (ND, Ng) {
            ND["__proto__"] = Ng;
            return ND;
          };
          return qA(qN, qc);
        } else {
          this["shadow"]["height"] = this["maskSprite"]['height'] = Nr;
          this["actualMask"] || (this['actualMask'] = new q5['kx']());
          this["addChild"](this["actualMask"]);
          this["actualMask"]["graphics"]["clear"]();
          this["actualMask"]["graphics"]["beginFill"](0xff0000, 0x1);
          this["actualMask"]["graphics"]['drawRect'](0x0, 0x0, this['shadow']["width"], this["maskSprite"]["height"]);
          this["pixiSprite"]["mask"] = this["actualMask"]["graphics"]["pixiGraphi" + 'cs'];
        }
      }
    }]) && function (Nr, NJ) {
      if ("cwqlR" !== "cwqlR") {
        return ['convertVeh' + "icleToGrou" + 'p'];
      } else {
        for (var ND = 0x0; ND < NJ["length"]; ND++) {
          var Ng = NJ[ND];
          Ng["enumerable"] = Ng["enumerable"] || !0x1;
          Ng["configurab" + 'le'] = !0x0;
          "value" in Ng && (Ng["writable"] = !0x0);
          Object["defineProp" + "erty"](Nr, qZ(Ng["key"]), Ng);
        }
      }
    }(NR["prototype"], NW);
    Object["defineProp" + "erty"](NR, "prototype", {
      'writable': !0x1
    });
    return NR;
  }(q5['kx']);
  var qX = function (Nl) {


    if ("OadWV" !== "oIFMv") {
      Nl[Nl["Level"] = 0x0] = "Level";
      Nl[Nl['Replay'] = 0x1] = 'Replay';
      return Nl;
    } else {
      var Ni = qT["call"](qR, "string");
      if ("object" != typeof Ni) {
        return Ni;
      }
      throw new qz('@@toPrimit' + "ive must r" + "eturn a pr" + 'imitive\x20va' + "lue.");
    }
  }({});
  var qx = function () {


    if ("otklk" === 'otklk') {
      function No(Ni, NE) {
        if ("BZTfA" !== 'pAqKO') {
          this["deferredEx" + "pensiveIni" + 'ts'] = 0x0;
          this["NUM_LEVEL_" + 'ITEMS_VISI' + 'BLE_AT_ONC' + 'E'] = 0x10;
          this['levelIndex' + "ToOpen"] = Ni;
          this["browserTyp" + 'e'] = NE;
        } else {
          var NW = qS["triggerAct" + "ionList"];
          if (NW) {
            for (var NA = qA["triggerAct" + "ionListPro" + "perties"], Nr = qN["triggerAct" + "ions"]["get"](qc), NJ = 0x0; NJ < Nr["length"]; NJ++) {
              var ND = '<a';
              var Ng = Nr[NJ];
              var NS = Ng ? NW["indexOf"](Ng) : 0x0;
              ND += " i='" + NS + '\x27';
              if (NA[NS]) {
                for (var Nd = NA[NS], Nz = 0x0; Nz < Nd["length"]; Nz++) {
                  var NF = Nd[Nz];
                  ND += '\x20p' + Nz + '=\x27' + q5['keyedPrope' + "rtyObject"][NF]["get"](q2)[NJ] + '\x27';
                }
              }
              ND += '/>';
              var NM = new qf['_9'](ND);
              q9["appendChil" + 'd'](NM);
            }
          }
        }
      }
      var Nl = No["prototype"];
      Nl["calculateD" + "elay"] = function (Ni) {
        var NE = 0x0;
        var NR = !0x1;
        if (-0x1 === this["levelIndex" + "ToOpen"]) {
          Ni < this["NUM_LEVEL_" + "ITEMS_VISI" + "BLE_AT_ONC" + 'E'] - 0x1 ? NR = !0x0 : NE = 0xa * this["deferredEx" + "pensiveIni" + 'ts'];
        } else {
          var NW = this["NUM_LEVEL_" + "ITEMS_VISI" + 'BLE_AT_ONC' + 'E'] / 0x2;
          this["browserTyp" + 'e'] == qX["Replay"] && (NW += 0x2);
          (Ni < this["levelIndex" + 'ToOpen'] - NW || Ni > this["levelIndex" + "ToOpen"] + NW) && (NR = !0x0, NE = 0xa * ((Ni > this["levelIndex" + "ToOpen"] ? Ni - this["levelIndex" + "ToOpen"] : this["levelIndex" + "ToOpen"] - Ni) - NW));
        }
        NR || this["deferredEx" + "pensiveIni" + 'ts']++;
        return NE;
      };
      Nl["calculateH" + "iddenDelay"] = function () {
        var Ni = 0xa * this["deferredEx" + "pensiveIni" + 'ts'];
        this["deferredEx" + "pensiveIni" + 'ts']++;
        return Ni;
      };
      return No;
    } else {
      var NE = function (NR) {
        if ("object" != typeof NR || !NR) {
          return NR;
        }
        var NW = NR[NE["toPrimitiv" + 'e']];
        if (void 0x0 !== NW) {
          var NA = NW['call'](NR, "string");
          if ("object" != typeof NA) {
            return NA;
          }
          throw new qc("@@toPrimit" + "ive must r" + 'eturn\x20a\x20pr' + "imitive va" + "lue.");
        }
        return qN(NR);
      }(qI);
      return "symbol" == typeof NE ? NE : NE + '';
    }
  }();
  function qw(Nl) {


    if ("DdAgS" === "JwPOQ") {
      q6["prototype"]["createDict" + 'ionaries']["call"](this);
      this["contactImp" + 'ulseDict']["set"](this["chairShape" + '1'], this["chairSmash" + "Limit"]);
      this["contactImp" + "ulseDict"]["set"](this["bigWheelSh" + "ape"], this['wheelSmash' + "Limit"]);
      this["contactAdd" + "Sounds"]["set"](this["chairShape" + '1'], "ChairHit1");
      this['contactAdd' + 'Sounds']["set"](this["chairShape" + '2'], "ChairHit2");
      this['contactAdd' + "Sounds"]["set"](this["chairShape" + '3'], "ChairHit3");
      this["contactAdd" + "Sounds"]["set"](this["bigWheelSh" + "ape"], "TireHit1");
    } else {
      var No = function (NE) {
        if ("object" != typeof NE || !NE) {
          return NE;
        }
        var NR = NE[Symbol["toPrimitiv" + 'e']];
        if (void 0x0 !== NR) {
          if ("VvDRR" !== 'VvDRR') {
            void 0x0 === qz && (q8 = !0x0);
            qI["prototype"]["shoulderBr" + "eak2"]["call"](this, qS, qA);
            this["lowerArm2S" + "hape"]["m_isSensor"] = !0x1;
            this["_session"]['m_world']['Refilter'](this["lowerArm2S" + 'hape']);
            this['ejected'] || (this['frameHand2'] && (this["_session"]["m_world"]["DestroyJoi" + 'nt'](this["frameHand2"]), this["frameHand2"] = null), this["checkEject"]());
          } else {
            var NW = NR["call"](NE, "string");
            if ("object" != typeof NW) {
              return NW;
            }
            throw new TypeError("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + 'lue.');
          }
        }
        return String(NE);
      }(Nl);
      return "symbol" == typeof No ? No : No + '';
    }
  }
  function qa(Nl, No) {

    if ("rfMSB" === "rfMSB") {
      qa = Object['setPrototy' + "peOf"] ? Object["setPrototy" + "peOf"]["bind"]() : function (Ni, NE) {

        if ("fCDgW" !== 'fCDgW') {
          var NW = this;
          this['_selected'] = qT;
          this["_selected"] ? (this["doActionAf" + "terTextCre" + "ation"](function () {
            return NW["userText"]["htmlText"] = "<u>" + NW["userText"]["text"] + "</u>";
          }), this["rollOver"](), this["userBtn"]["visible"] = !0x0, this['bg']["alpha"] = 0x1, qR['m']['instance']["playSoundI" + "tem"]("MenuSelect" + '2')) : (this["doActionAf" + "terTextCre" + "ation"](function () {
            return NW["userText"]["htmlText"] = NW["userText"]["text"];
          }), this["rollOut"](), this['_faded'] && (this['bg']["alpha"] = qz["FADE_VALUE"]), this["userBtn"]["visible"] = !0x1);
        } else {
          Ni["__proto__"] = NE;
          return Ni;
        }
      };
      return qa(Nl, No);
    } else {
      var NE = function (NR) {
        if ("object" != typeof NR || !NR) {
          return NR;
        }
        var NW = NR[NE["toPrimitiv" + 'e']];
        if (void 0x0 !== NW) {
          var NA = NW["call"](NR, "string");
          if ("object" != typeof NA) {
            return NA;
          }
          throw new qc("@@toPrimit" + "ive must r" + "eturn a pr" + 'imitive\x20va' + "lue.");
        }
        return qN(NR);
      }(qI);
      return 'symbol' == typeof NE ? NE : NE + '';
    }
  }
  var qY = function (Nl) {


    if ("tMvBa" === "xvXpk") {
      void 0x0 === q1 && (qs = -0x1);
      var Nr = new qf(this["particleDi" + 'ct']["get"](q9), q5, No, qB, qW, qH, qk, NE, qJ);
      -0x1 == qr ? qj["addChild"](Nr) : qP["addChildAt"](Nr, qn);
      this["emitters"]["push"](Nr);
      return Nr;
    } else {
      function Nr(NJ, ND, Ng) {

        var NS;
        void 0x0 === ND && (ND = -0x1);
        void 0x0 === Ng && (Ng = -0x1);
        (NS = Nl["call"](this) || this)["_tweenVal"] = 0x0;
        NS["tweenTime"] = 0.25;
        NS["keyDownHan" + "dler"] = function (Ny) {
          if (!NS["opening"]) {
            switch (Ny["keyCode"]) {
              case 0x26:
                NS['selectPrev' + "iousListIt" + 'em']();
                break;
              case 0x28:
                NS["selectNext" + "ListItem"]();
            }
          }
        };
        NS["mouseOverH" + "andler"] = function (Ny) {
          Ny["rollOver"]();
        };
        NS["mouseOutHa" + "ndler"] = function (Ny) {
          Ny["rollOut"]();
        };
        NS['mouseDownH' + 'andler'] = function (Ny) {
          'bg' === Ny["target"]['name'] && Ny['target']["parent"]["parent"]['mouseDown']();
        };
        NS["mouseUpHan" + 'dler'] = function (Ny) {
          if ('bg' === Ny["target"]['name']) {
            if ("KcpDt" !== "DNrnf") {
              var Nc = Ny["target"]["parent"]['parent'];
              NS["selectedLi" + 'stItem'] ? (Nc != NS["selectedLi" + "stItem"] ? (NS["selectedLi" + "stItem"]["selected"] = !0x1, NS["selectedLi" + "stItem"] = Nc, NS["selectedLi" + "stItem"]['selected'] = !0x0) : (NS["selectedLi" + 'stItem']["selected"] = !0x1, NS["selectedLi" + 'stItem'] = null), NS["closing"] || NS["closeSelec" + 'tion']()) : (NS['selectedLi' + "stItem"] = Nc, Nc["selected"] = !0x0, NS["closing"] || NS["openSelect" + "ion"]());
            } else {
              this["_selected"] = qF;
              var Nw = this["icon"]["_pixiSprit" + 'e']["children"][0x0];
              qT ? (this['bg']["gotoAndSto" + 'p'](0x3), Nw["tint"] = 0x3d88c7) : (this['bg']["gotoAndSto" + 'p'](0x1), Nw["tint"] = 0xffffff);
            }
          } else {
            if (Ny["target"] instanceof qz) {
              var NX = Ny["target"];
              NS['selectedCh' + 'aracter'] = NX["characterI" + 'd'];
              NS["dispatchEv" + "ent"](new q5['Jh'](Nr["FACE_SELEC" + "TED"]));
            }
          }
        };
        NS["closingCom" + 'plete'] = function () {
          NS["closing"] = !0x1;
          NS["removeChil" + 'd'](NS["levelSelec" + "tion"]);
          NS["levelSelec" + "tion"]["destroy"]();
          NS["levelSelec" + "tion"] = null;
          NS["selectedLi" + "stItem"] ? NS['openSelect' + "ion"]() : (NS["organizeLi" + 'st'](), NS["dispatchEv" + 'ent'](new q5['Jh'](Nr["UPDATE_SCR" + "OLLER"])));
        };
        NS["openComple" + 'te'] = function () {
          NS['opening'] = !0x1;
        };
        NS["cloneAndDi" + "spatchEven" + 't'] = function (Ny) {
          var Nc = Ny["clone"]();
          Nc["target"] = NS;
          NS["dispatchEv" + "ent"](Nc);
        };
        NS["friendName" + "sChanged"] = function () {

          if ("mVNIj" === "mVNIj") {
            NS["listItemAr" + "ray"]["forEach"](function (Ny) {
              return Ny["refreshTex" + "tColor"]();
            });
          } else {
            for (var Nc = 0x0; Nc < qz['length']; Nc++) {
              var NX = Nb[Nc];
              NX["enumerable"] = NX["enumerable"] || !0x1;
              NX["configurab" + 'le'] = !0x0;
              'value' in NX && (NX["writable"] = !0x0);
              qc["defineProp" + "erty"](qV, qE(NX["key"]), NX);
            }
          }
        };
        NS["listItemAr" + "ray"] = [];
        for (var Nd = NJ['findIndex'](function (Ny) {
            return Ny['id'] == ND;
          }), Nz = new qx(Nd, qX["Level"]), NF = 0x0, NM = qH["BG_HEIGHT"], NH = NJ["length"], Nb = function () {

            if ("XkjEq" === "IwZbL") {
              this["_window"]['closeWindo' + 'w']();
              this['destroy']();
            } else {
              var Ny = Nz["calculateD" + "elay"](NZ);
              var Nc = NJ[NZ];
              var NX = new qH(Nc, Ny);
              NS["addChild"](NX);
              NS["listItemAr" + "ray"]["push"](NX);
              NX['y'] = NF;
              NF += NM;
              Nc['id'] == ND && (NS['selectedLi' + "stItem"] = NX);
              NX["mouseEnabl" + 'ed'] = !0x0;
              NX["mouseChild" + "ren"] = !0x0;
              NX['bg']["pixiSprite"]['on']("pointerove" + 'r', function () {
                if ('RoHNi' === "cpNgE") {
                  var Na;
                  var NY = qc[qV];
                  (Na = qE["keyedPrope" + "rtyObject"][NY]) || (Na = ql["keyedPrope" + "rtyObject"][NY] = new ND());
                  var Nv = Na["get"](Nc);
                  Nv || (Nv = [], Na["set"](qs, Nv));
                  var NL = NZ['@p' + NF];
                  void 0x0 !== NL && (Nv[q5] = 't' == NL || 'f' == NL ? 't' == NL : NJ(NL));
                } else {
                  return NS["mouseOverH" + "andler"](NX);
                }
              });
              NX['bg']['pixiSprite']['on']("pointerout", function () {
                return NS["mouseOutHa" + "ndler"](NX);
              });
              NX['bg']["addEventLi" + 'stener'](q5['Cm']["MOUSE_DOWN"], NS["mouseDownH" + 'andler']);
              NX['bg']['addEventLi' + "stener"](q5['Cm']["MOUSE_UP"], NS["mouseUpHan" + "dler"]);
              NX["characterF" + "aces"]["addEventLi" + "stener"](q5['Cm']['MOUSE_UP'], NS["mouseUpHan" + "dler"]);
            }
          }, NZ = 0x0; NZ < NH; NZ++) {
          Nb();
        }
        NS["selectedLi" + 'stItem'] && (NS['selectedLi' + "stItem"]["selected"] = !0x0, NS["openSelect" + "ion"]());
        NS["selectedCh" + "aracter"] = Ng;
        return NS;
      }
      var No;
      var Ni;
      Ni = Nl;
      (No = Nr)['prototype'] = Object["create"](Ni["prototype"]);
      No["prototype"]["constructo" + 'r'] = No;
      qa(No, Ni);
      var NE;
      var NR;
      var NW = Nr["prototype"];
      NW["selectPrev" + "iousListIt" + 'em'] = function () {
        if ("orjNn" !== "BSgqi") {
          if (this["selectedLi" + "stItem"]) {
            var NJ = this["listItemAr" + 'ray']["indexOf"](this["selectedLi" + "stItem"]);
            if (0x0 == NJ) {
              return;
            }
            this["selectedLi" + "stItem"]["selected"] = !0x1;
            NJ -= 0x1;
            this["selectedLi" + 'stItem'] = this["listItemAr" + 'ray'][NJ];
            this["selectedLi" + "stItem"]["selected"] = !0x0;
            this["closing"] || this["closeSelec" + "tion"]();
          }
        } else {
          var Ng = qz["round"](0x64 * q8(qI));
          if (0x0 == Ng) {
            return '0.00';
          }
          var NS = qS(Ng);
          var Nd = NS["length"] - 0x2;
          var Nz = Nd <= 0x0 ? '0' : NS["substr"](0x0, Nd);
          var NF = NS["substr"](Nd, 0x2);
          Nd < 0x0 && (NF = '0' + NF);
          return qA(Nz) + '.' + NF;
        }
      };
      NW["selectNext" + "ListItem"] = function () {

        if ("gmoVB" !== "gmoVB") {
          var Ng = function (NS) {
            if ("object" != typeof NS || !NS) {
              return NS;
            }
            var Nd = NS[Ng["toPrimitiv" + 'e']];
            if (void 0x0 !== Nd) {
              var Nz = Nd["call"](NS, "string");
              if ("object" != typeof Nz) {
                return Nz;
              }
              throw new qc("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
            }
            return qN(NS);
          }(qI);
          return "symbol" == typeof Ng ? Ng : Ng + '';
        } else {
          if (this["selectedLi" + "stItem"]) {
            if ("SuVZd" === "PKJkJ") {
              var NS = this["frameBody"]["GetAngle"]();
              var Nd = (this['frameBody']['GetAngular' + "Velocity"]() - this["maxSpinAV"]) / -this["maxSpinAV"];
              Nd < 0x0 && (Nd = 0x0);
              Nd > 0x1 && (Nd = 0x1);
              var Nz = qR['cos'](NS) * (this["impulseRig" + 'ht'] + 0x0) * Nd;
              var NF = qz["sin"](NS) * (this["impulseRig" + 'ht'] + 0x0) * Nd;
              var NM = this["frameBody"]['GetLocalCe' + "nter"]();
              this["frameBody"]["ApplyImpul" + 'se'](new q8['RM'](NF, -Nz), this["frameBody"]["GetWorldPo" + "int"](new qI['RM'](NM['x'] - this["impulseOff" + "set"], NM['y'])));
            } else {
              var NJ = this['listItemAr' + "ray"]["indexOf"](this["selectedLi" + "stItem"]);
              if (NJ == this["listItemAr" + "ray"]["length"] - 0x1) {
                return;
              }
              this["selectedLi" + 'stItem']["selected"] = !0x1;
              NJ += 0x1;
              this["selectedLi" + "stItem"] = this["listItemAr" + "ray"][NJ];
              this["selectedLi" + "stItem"]['selected'] = !0x0;
              this["closing"] || this["closeSelec" + "tion"]();
            }
          }
        }
      };
      NW["closeSelec" + "tion"] = function (NJ) {
        void 0x0 === NJ && (NJ = !0x1);
        NJ && this["selectedLi" + "stItem"] && (this["selectedLi" + "stItem"]["selected"] = !0x1, this["selectedLi" + "stItem"] = null);
        this["closing"] = !0x0;
        this["killLevelS" + "election"]();
        qP['os']['to'](this, {
          'duration': this["tweenTime"],
          'tweenVal': 0x0,
          'ease': qp['MI']["easeInOut"],
          'onComplete': this["closingCom" + "plete"]
        });
      };
      NW["killLevelS" + "election"] = function () {
        this["levelSelec" + "tion"]["die"]();
        this["levelSelec" + "tion"]["removeEven" + "tListener"](qu['$T']["SESSION"], this["cloneAndDi" + "spatchEven" + 't']);
        this["levelSelec" + 'tion']["removeEven" + "tListener"](qu['$T']['EDITOR'], this["cloneAndDi" + "spatchEven" + 't']);
        this["levelSelec" + "tion"]['removeEven' + "tListener"](qu['$T']["REPLAY_BRO" + 'WSER'], this["cloneAndDi" + "spatchEven" + 't']);
        this["levelSelec" + "tion"]["removeEven" + 'tListener'](qu['dg']["USER"], this["cloneAndDi" + "spatchEven" + 't']);
        this["levelSelec" + "tion"]["removeEven" + "tListener"](qu['dg']["FLAG"], this["cloneAndDi" + 'spatchEven' + 't']);
        this["levelSelec" + 'tion']["removeEven" + 'tListener'](qu['dg']["ADD_TO_FAV" + "ORITES"], this["cloneAndDi" + "spatchEven" + 't']);
        this["levelSelec" + "tion"]["removeEven" + 'tListener'](qu['dg']["REMOVE_FRO" + "M_FAVORITE" + 'S'], this["cloneAndDi" + "spatchEven" + 't']);
      };
      NW["refreshDow" + "nloadButto" + 'n'] = function () {};
      NW["openSelect" + "ion"] = function () {
        var NJ = this["getChildIn" + "dex"](this["selectedLi" + "stItem"]) + 0x1;
        this['levelSelec' + 'tion'] = new qc(this["selectedLi" + "stItem"]["levelDataO" + "bject"]);
        this["levelSelec" + 'tion']['addEventLi' + 'stener'](qu['$T']["SESSION"], this["cloneAndDi" + "spatchEven" + 't']);
        this["levelSelec" + "tion"]["addEventLi" + "stener"](qu['$T']["EDITOR"], this['cloneAndDi' + "spatchEven" + 't']);
        this["levelSelec" + "tion"]["addEventLi" + "stener"](qu['$T']["REPLAY_BRO" + "WSER"], this["cloneAndDi" + "spatchEven" + 't']);
        this["levelSelec" + "tion"]["addEventLi" + "stener"](qu['dg']["USER"], this["cloneAndDi" + "spatchEven" + 't']);
        this["levelSelec" + "tion"]['addEventLi' + "stener"](qu['dg']["FLAG"], this["cloneAndDi" + "spatchEven" + 't']);
        this["levelSelec" + "tion"]["addEventLi" + "stener"](qu['dg']["ADD_TO_FAV" + "ORITES"], this['cloneAndDi' + 'spatchEven' + 't']);
        this["levelSelec" + 'tion']["addEventLi" + "stener"](qu['dg']["REMOVE_FRO" + "M_FAVORITE" + 'S'], this["cloneAndDi" + "spatchEven" + 't']);
        this["addChildAt"](this["levelSelec" + "tion"], NJ);
        this["levelSelec" + "tion"]["maskHeight"] = 0x0;
        this["opening"] = !0x0;
        qP['os']['to'](this, {
          'duration': this["tweenTime"],
          'tweenVal': 0x1,
          'ease': qp['MI']["easeInOut"],
          'onComplete': this["openComple" + 'te']
        });
      };
      NW["organizeLi" + 'st'] = function () {

        if ("hINbJ" !== "hINbJ") {
          var NH = qF["clone"]();
          qT['dispatchEv' + "ent"](NH);
        } else {
          var NJ;
          this["selectedLi" + "stItem"] && (NJ = this["selectedLi" + "stItem"]['y']);
          for (var ND, Ng = this['numChildre' + 'n'], NS = 0x0, Nd = 0x0; Nd < Ng; Nd++) {
            (ND = this['getChildAt'](Nd))['y'] = NS;
            NS += ND instanceof qH ? qH["BG_HEIGHT"] : ND instanceof qc ? ND["maskHeight"] : ND["height"];
          }
          if (this["selectedLi" + 'stItem']) {
            if ("XTEZz" !== "XTEZz") {
              q8 = qI['setPrototy' + "peOf"] ? qS["setPrototy" + "peOf"]["bind"]() : function (Nb, NZ) {
                Nb["__proto__"] = NZ;
                return Nb;
              };
              return qA(qN, qc);
            } else {
              var Nz = NJ - this["selectedLi" + "stItem"]['y'];
              this['y'] += Nz;
              (Nz = this['y'] + this['selectedLi' + "stItem"]['y']) < 0x0 && (this['y'] -= Nz);
            }
          }
          if (this["levelSelec" + "tion"] && this["opening"]) {
            if ("jIJox" === "sWUGt") {
              return this;
            } else {
              var NF = this["levelSelec" + 'tion']['y'] + this["levelSelec" + "tion"]["maskHeight"];
              (Nz = 0x160 - this['y'] - NF) < 0x0 && (this['y'] += Nz);
            }
          }
        }
      };
      NW["die"] = function () {

        var NJ = this;
        qP['os']["killTweens" + 'Of'](this);
        this["listItemAr" + "ray"]['forEach'](function (ND) {
          ND['bg']["pixiSprite"]["off"]("pointerove" + 'r');
          ND['bg']["pixiSprite"]["off"]("pointerout");
          ND['bg']["removeEven" + "tListener"](q5['Cm']["MOUSE_DOWN"], NJ['mouseDownH' + "andler"]);
          ND['bg']["removeEven" + "tListener"](q5['Cm']["MOUSE_UP"], NJ["mouseUpHan" + "dler"]);
          ND["characterF" + 'aces']["removeEven" + 'tListener'](q5['Cm']["MOUSE_UP"], NJ["mouseUpHan" + "dler"]);
        });
        this["levelSelec" + "tion"] && this['killLevelS' + "election"]();
      };
      NE = Nr;
      (NR = [{
        'key': "tweenVal",
        'get': function () {
          return this["_tweenVal"];
        },
        'set': function (NJ) {
          this["_tweenVal"] = NJ;
          this['levelSelec' + "tion"]["maskHeight"] = Math["round"](this['levelSelec' + "tion"]["fullHeight"] * NJ);
          this["organizeLi" + 'st']();
          this['dispatchEv' + "ent"](new q5['Jh'](Nr["UPDATE_SCR" + "OLLER"]));
        }
      }, {
        'key': "height",
        'get': function () {
          if ("xqvzq" === "xqvzq") {
            var NJ = this["numChildre" + 'n'] * qH['BG_HEIGHT'];
            this["levelSelec" + "tion"] && (NJ += this["levelSelec" + 'tion']["maskHeight"] - qH["BG_HEIGHT"]);
            return NJ;
          } else {
            this["ejected"] && (this["currentPos" + 'e'] = 0x2);
          }
        },
        'set': function (NJ) {
          throw new Error("cannot set" + " list heig" + 'ht\x20manuall' + 'y');
        }
      }, {
        'key': "selectedCh" + 'aracter',
        'get': function () {
          return this['_selectedC' + "haracter"];
        },
        'set': function (NJ) {
          if (NJ > -0x1 && this["_selectedC" + "haracter"] != NJ) {
            this['_highlight' + "edArray"] = [];
            for (var ND = this["listItemAr" + "ray"]["length"], Ng = 0x0; Ng < ND; Ng++) {
              var NS = this["listItemAr" + "ray"][Ng];
              var Nd = NS["characterF" + "aces"]["characterI" + 'd'];
              Nd == NJ ? (NS["faded"] = !0x1, this["_highlight" + "edArray"]["push"](NS)) : NS["faded"] = !0x0;
            }
            this["_selectedC" + "haracter"] = NJ;
          } else {
            this["_highlight" + "edArray"] = null;
            ND = this["listItemAr" + "ray"]["length"];
            Ng = 0x0;
            for (; Ng < ND; Ng++) {
              Nd = (NS = this["listItemAr" + "ray"][Ng])['characterF' + 'aces']["characterI" + 'd'];
              NS["faded"] = !0x1;
            }
            this["_selectedC" + "haracter"] = -0x1;
            this["dispatchEv" + "ent"](new q5['Jh'](Nr["FACE_SELEC" + "TED"]));
          }
        }
      }, {
        'key': "highlighte" + 'dArray',
        'get': function () {
          if ('DXoBg' === "imByl") {
            var ND = q8['x5']["b2Dot"](qI["velocity"], qS["normal"]);
            (ND = qA["abs"](ND)) > 0x4 && qN["contactAdd" + "Buffer"]["set"](qc, ND);
          } else {
            return this["_highlight" + "edArray"];
          }
        }
      }]) && function (NJ, ND) {
        for (var Ng = 0x0; Ng < ND["length"]; Ng++) {
          var NS = ND[Ng];
          NS["enumerable"] = NS["enumerable"] || !0x1;
          NS["configurab" + 'le'] = !0x0;
          'value' in NS && (NS["writable"] = !0x0);
          Object["defineProp" + 'erty'](NJ, qw(NS["key"]), NS);
        }
      }(NE['prototype'], NR);
      Object["defineProp" + "erty"](NE, "prototype", {
        'writable': !0x1
      });
      return NE;
    }
  }(q5['kx']);
  qY["UPDATE_SCR" + "OLLER"] = "updatescro" + "ller";
  qY["FACE_SELEC" + "TED"] = "faceselect" + 'ed';
  var qv = q2(0x164f);
  function qL(Nl) {

    var No = function (Ni) {
      if ("dQfWW" !== "vHZgs") {
        if ("object" != typeof Ni || !Ni) {
          return Ni;
        }
        var NE = Ni[Symbol['toPrimitiv' + 'e']];
        if (void 0x0 !== NE) {
          if ("pvjCY" === "onBvS") {
            q6 = 0x1;
          } else {
            var NR = NE["call"](Ni, "string");
            if ("object" != typeof NR) {
              return NR;
            }
            throw new TypeError("@@toPrimit" + 'ive\x20must\x20r' + "eturn a pr" + "imitive va" + 'lue.');
          }
        }
        return String(Ni);
      } else {
        var Nr = qT["call"](qR, "string");
        if ('object' != typeof Nr) {
          return Nr;
        }
        throw new qz("@@toPrimit" + "ive must r" + 'eturn\x20a\x20pr' + "imitive va" + "lue.");
      }
    }(Nl);
    return "symbol" == typeof No ? No : No + '';
  }
  function qU(Nl, No) {


    qU = Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"]["bind"]() : function (Ni, NE) {
      Ni["__proto__"] = NE;
      return Ni;
    };
    return qU(Nl, No);
  }
  var qO = function (Nl) {


    function No(Nr, NJ, ND, Ng) {
      var NS;
      (NS = Nl["call"](this) || this)['spacing'] = 0x5;
      NS["mouseDownH" + 'andler'] = function (Nz) {


        if ("KLkqA" === "KLkqA") {
          switch (Nz["target"]) {
            case NS["leftArrow"]:
              NS["flipPage"](-0x1);
              break;
            case NS["rightArrow"]:
              NS["flipPage"](0x1);
          }
        } else {
          q2["prototype"]["createBodi" + 'es']["call"](this);
          var NM;
          var NH = new q3['m2']();
          var Nb = new q4['_A']();
          (NM = this["upperLeg1B" + "ody"]['GetShapeLi' + 'st']())["m_isSensor"] = !0x0;
          this["_session"]['m_world']["Refilter"](NM);
          (NM = this["upperLeg2B" + 'ody']["GetShapeLi" + 'st']())["m_isSensor"] = !0x0;
          this["_session"]["m_world"]["Refilter"](NM);
          (NM = this["lowerLeg1B" + "ody"]["GetShapeLi" + 'st']())["m_isSensor"] = !0x0;
          this['_session']["m_world"]["Refilter"](NM);
          (NM = this["lowerLeg2B" + "ody"]["GetShapeLi" + 'st']())["m_isSensor"] = !0x0;
          this["_session"]["m_world"]['Refilter'](NM);
          var NZ = new q5['gv']();
          var Ny = new q6['gv']();
          NH["density"] = 0x1;
          NH['friction'] = 0.3;
          NH["restitutio" + 'n'] = 0.1;
          NH["filter"] = this["defaultFil" + "ter"];
          this["paintVecto" + 'r']["splice"](this["paintVecto" + 'r']["indexOf"](this["chestBody"]), 0x1);
          this['paintVecto' + 'r']["splice"](this["paintVecto" + 'r']["indexOf"](this['pelvisBody']), 0x1);
          this["_session"]["m_world"]["DestroyBod" + 'y'](this["chestBody"]);
          this["_session"]["m_world"]["DestroyBod" + 'y'](this["pelvisBody"]);
          var Nc = this["shapeGuide"]["chestShape"];
          NZ["position"]["Set"](this["_startX"] + Nc['x'] / this["character_" + "scale"], this["_startY"] + Nc['y'] / this["character_" + 'scale']);
          NZ["angle"] = Nc["rotation"] / (0xb4 / q7['PI']);
          this["chestBody"] = this["_session"]['m_world']["CreateBody"](NZ);
          NH["vertexCoun" + 't'] = 0x6;
          for (var NX = 0x0; NX < 0x6; NX++) {
            var Nx = this['shapeGuide']["chestVert" + [NX]];
            NH["vertices"][NX] = new qv['RM'](Nx['x'] / this["character_" + "scale"], Nx['y'] / this["character_" + "scale"]);
          }
          this["chestShape"] = this["chestBody"]["CreateShap" + 'e'](NH);
          this["chestShape"]["SetMateria" + 'l'](0x2);
          this["chestShape"]["SetUserDat" + 'a'](this);
          this["_session"]["contactLis" + "tener"]["registerLi" + "stener"](q9['fI']['RESULT'], this["chestShape"], this["contactRes" + "ultHandler"]);
          this["_session"]["contactLis" + 'tener']["registerLi" + "stener"](qq['fI']['ADD'], this["chestShape"], this["contactAdd" + "Handler"]);
          this["chestBody"]["SetMassFro" + "mShapes"]();
          this["chestBody"]['AllowSleep' + "ing"](!0x1);
          this["paintVecto" + 'r']["push"](this['chestBody']);
          this["cameraFocu" + 's'] = this["chestBody"];
          Nc = this["shapeGuide"]["pelvisShap" + 'e'];
          Ny["position"]["Set"](this["_startX"] + Nc['x'] / this["character_" + "scale"], this["_startY"] + Nc['y'] / this["character_" + "scale"]);
          Ny['angle'] = Nc['rotation'] / (0xb4 / qn['PI']);
          this["pelvisBody"] = this["_session"]["m_world"]["CreateBody"](Ny);
          NH['vertexCoun' + 't'] = 0x5;
          NX = 0x0;
          for (; NX < 0x5; NX++) {
            Nx = this["shapeGuide"]["pelvisVert" + [NX]];
            NH['vertices'][NX] = new qN['RM'](Nx['x'] / this["character_" + "scale"], Nx['y'] / this["character_" + "scale"]);
          }
          this["pelvisShap" + 'e'] = this["pelvisBody"]["CreateShap" + 'e'](NH);
          this["pelvisShap" + 'e']['SetMateria' + 'l'](0x2);
          this["pelvisShap" + 'e']["SetUserDat" + 'a'](this);
          this["_session"]["contactLis" + "tener"]["registerLi" + "stener"](qf['fI']["RESULT"], this["pelvisShap" + 'e'], this['contactRes' + "ultHandler"]);
          this["_session"]["contactLis" + 'tener']["registerLi" + "stener"](qT['fI']["ADD"], this["pelvisShap" + 'e'], this["contactAdd" + "Handler"]);
          this["pelvisBody"]["SetMassFro" + "mShapes"]();
          this['pelvisBody']['AllowSleep' + "ing"](!0x1);
          this["paintVecto" + 'r']['push'](this["pelvisBody"]);
          var Nw = new qV['gv']();
          var Na = new qh['gv']();
          var NY = new qC['gv']();
          var Nv = new qj['gv']();
          var NL = new qP['gv']();
          NH["density"] = 0x4;
          NH["friction"] = 0.3;
          NH["restitutio" + 'n'] = 0.1;
          NH["filter"] = this["zeroFilter"]['Copy']();
          NH["filter"]["groupIndex"] = -0x2;
          this["mowerBody"] = this["_session"]["m_world"]["CreateBody"](Nw);
          NH['vertexCoun' + 't'] = 0x4;
          NX = 0x0;
          for (; NX < 0x4; NX++) {
            Nx = this["shapeGuide"]["handleVert" + [NX + 0x1]];
            NH["vertices"][NX] = new qp['RM'](this["_startX"] + Nx['x'] / this["character_" + 'scale'], this["_startY"] + Nx['y'] / this["character_" + "scale"]);
          }
          this["handleShap" + 'e'] = this["mowerBody"]["CreateShap" + 'e'](NH);
          Nc = this["shapeGuide"]["shaftShape"];
          var NU = new qK['RM'](this["_startX"] + Nc['x'] / this["character_" + "scale"], this["_startY"] + Nc['y'] / this['character_' + "scale"]);
          var NO = Nc["rotation"] / (0xb4 / qm['PI']);
          NH["SetAsOrien" + "tedBox"](0x5 * Nc["scaleX"] / this['character_' + 'scale'], 0x5 * Nc["scaleY"] / this['character_' + "scale"], NU, NO);
          this["shaftShape"] = this["mowerBody"]['CreateShap' + 'e'](NH);
          NH["vertexCoun" + 't'] = 0x6;
          NX = 0x0;
          for (; NX < 0x6; NX++) {
            Nx = this['shapeGuide']["frontVert" + [NX + 0x1]];
            NH["vertices"][NX] = new qI['RM'](this["_startX"] + Nx['x'] / this["character_" + "scale"], this["_startY"] + Nx['y'] / this["character_" + "scale"]);
          }
          this['frontShape'] = this['mowerBody']["CreateShap" + 'e'](NH);
          this["_session"]["contactLis" + "tener"]["registerLi" + "stener"](qk['fI']["RESULT"], this["frontShape"], this["contactMow" + "erResultHa" + "ndler"]);
          this["_session"]["contactLis" + "tener"]["registerLi" + 'stener'](qs['fI']["ADD"], this['frontShape'], this["contactAdd" + "Handler"]);
          Nc = this["shapeGuide"]["baseShape"];
          NU = new qt['RM'](this['_startX'] + Nc['x'] / this["character_" + "scale"], this["_startY"] + Nc['y'] / this["character_" + "scale"]);
          NO = Nc["rotation"] / (0xb4 / qB['PI']);
          NH["SetAsOrien" + 'tedBox'](0x5 * Nc["scaleX"] / this["character_" + "scale"], 0x5 * Nc['scaleY'] / this["character_" + "scale"], NU, NO);
          this["baseShape"] = this['mowerBody']["CreateShap" + 'e'](NH);
          Nc = this["shapeGuide"]["bladeShape"];
          NU = new qu['RM'](this["_startX"] + Nc['x'] / this["character_" + "scale"], this["_startY"] + Nc['y'] / this["character_" + "scale"]);
          NO = Nc["rotation"] / (0xb4 / ql['PI']);
          NH['SetAsOrien' + "tedBox"](0x5 * Nc["scaleX"] / this["character_" + "scale"], 0x5 * Nc["scaleY"] / this["character_" + "scale"], NU, NO);
          this["bladeX"] = 0x5 * Nc["scaleX"] / this["character_" + "scale"];
          this["bladeY"] = 0x5 * Nc['scaleY'] / this["character_" + 'scale'];
          this["bladeCente" + 'r'] = NU;
          this["bladeShape"] = this['mowerBody']["CreateShap" + 'e'](NH);
          this['bladeLeftX'] = this["bladeShape"]["GetVertice" + 's']()[0x0]['x'];
          this["bladeRight" + 'X'] = this['bladeShape']["GetVertice" + 's']()[0x1]['x'];
          this['_session']["contactLis" + "tener"]['registerLi' + "stener"](qo['fI']["RESULT"], this["bladeShape"], this["contactBla" + 'deResultHa' + "ndler"]);
          NH['vertexCoun' + 't'] = 0x5;
          NX = 0x0;
          for (; NX < 0x5; NX++) {
            Nx = this["shapeGuide"]["rearVert" + [NX + 0x1]];
            NH["vertices"][NX] = new qi['RM'](this["_startX"] + Nx['x'] / this["character_" + "scale"], this["_startY"] + Nx['y'] / this["character_" + "scale"]);
          }
          this["rearShape"] = this["mowerBody"]["CreateShap" + 'e'](NH);
          this['_session']['contactLis' + "tener"]["registerLi" + "stener"](qE['fI']['RESULT'], this["rearShape"], this['contactMow' + "erResultHa" + "ndler"]);
          NX = 0x0;
          for (; NX < 0x5; NX++) {
            Nx = this['shapeGuide']["topVert" + [NX + 0x1]];
            NH["vertices"][NX] = new qR['RM'](this["_startX"] + Nx['x'] / this["character_" + 'scale'], this["_startY"] + Nx['y'] / this["character_" + 'scale']);
          }
          this["topShape"] = this["mowerBody"]["CreateShap" + 'e'](NH);
          this["_session"]['contactLis' + "tener"]["registerLi" + "stener"](qW['fI']["RESULT"], this["topShape"], this['contactMow' + "erResultHa" + "ndler"]);
          this["_session"]['contactLis' + 'tener']["registerLi" + "stener"](qA['fI']["ADD"], this["topShape"], this['contactAdd' + "Handler"]);
          NH["vertexCoun" + 't'] = 0x4;
          NX = 0x0;
          for (; NX < 0x4; NX++) {
            Nx = this["shapeGuide"]["backVert" + [NX + 0x1]];
            NH["vertices"][NX] = new qr['RM'](this["_startX"] + Nx['x'] / this["character_" + "scale"], this["_startY"] + Nx['y'] / this['character_' + "scale"]);
          }
          this["seatShape1"] = this['mowerBody']["CreateShap" + 'e'](NH);
          this["_session"]['contactLis' + "tener"]["registerLi" + "stener"](qJ['fI']["RESULT"], this["seatShape1"], this["contactMow" + 'erResultHa' + "ndler"]);
          this["_session"]["contactLis" + "tener"]["registerLi" + "stener"](qD['fI']["ADD"], this["seatShape1"], this["contactAdd" + 'Handler']);
          NX = 0x0;
          for (; NX < 0x4; NX++) {
            Nx = this['shapeGuide']["seatVert" + [NX + 0x1]];
            NH["vertices"][NX] = new qg['RM'](this['_startX'] + Nx['x'] / this["character_" + "scale"], this["_startY"] + Nx['y'] / this["character_" + "scale"]);
          }
          this['seatShape2'] = this["mowerBody"]["CreateShap" + 'e'](NH);
          this["mowerBody"]["DestroySha" + 'pe'](this["seatShape2"]);
          var NG = new qS['z_']();
          NG["maskBits"] = 0x1;
          NG["categoryBi" + 'ts'] = 0x1;
          NH["filter"] = NG;
          NH["friction"] = 0.01;
          NH["density"] = 0.01;
          Nc = this["shapeGuide"]["alignShape" + '1'];
          NU = new qd['RM'](this["_startX"] + Nc['x'] / this["character_" + "scale"], this["_startY"] + Nc['y'] / this['character_' + "scale"]);
          NO = Nc["rotation"] / (0xb4 / qz['PI']);
          NH["SetAsOrien" + "tedBox"](0x5 * Nc["scaleX"] / this["character_" + "scale"], 0x5 * Nc["scaleY"] / this["character_" + "scale"], NU, NO);
          this["mowerBody"]["CreateShap" + 'e'](NH);
          Nc = this["shapeGuide"]['alignShape' + '2'];
          NU = new qF['RM'](this["_startX"] + Nc['x'] / this['character_' + "scale"], this["_startY"] + Nc['y'] / this['character_' + "scale"]);
          NO = Nc["rotation"] / (0xb4 / qM['PI']);
          NH["SetAsOrien" + "tedBox"](0x5 * Nc["scaleX"] / this['character_' + "scale"], 0x5 * Nc['scaleY'] / this["character_" + "scale"], NU, NO);
          this["mowerBody"]["CreateShap" + 'e'](NH);
          NH["isSensor"] = !0x0;
          Nc = this["shapeGuide"]["clearanceS" + "hape"];
          NU = new qH['RM'](this["_startX"] + Nc['x'] / this["character_" + "scale"], this["_startY"] + Nc['y'] / this["character_" + "scale"]);
          NO = Nc["rotation"] / (0xb4 / qb['PI']);
          NH["SetAsOrien" + 'tedBox'](0x5 * Nc["scaleX"] / this["character_" + 'scale'], 0x5 * Nc["scaleY"] / this["character_" + "scale"], NU, NO);
          this["clearanceS" + "hape"] = this["mowerBody"]["CreateShap" + 'e'](NH);
          this["session"]["contactLis" + "tener"]["registerLi" + "stener"](qZ['fI']["ADD"], this["clearanceS" + "hape"], this["clearanceC" + "ontactAdd"]);
          this["session"]["contactLis" + "tener"]["registerLi" + "stener"](qy['fI']["REMOVE"], this["clearanceS" + 'hape'], this["clearanceC" + "ontactRemo" + 've']);
          this["mowerBody"]["SetMassFro" + 'mShapes']();
          this["mowerMass"] = this["mowerBody"]["GetMass"]();
          this['paintVecto' + 'r']["push"](this["mowerBody"]);
          Nb["density"] = 0x5;
          Nb["friction"] = 0x1;
          Nb["restitutio" + 'n'] = 0.3;
          Nb["filter"] = this["zeroFilter"]["Copy"]();
          Nb["filter"]["groupIndex"] = -0x2;
          Nc = this["shapeGuide"]["backWheelS" + "hape"];
          Na["position"]["Set"](this["_startX"] + Nc['x'] / this['character_' + "scale"], this["_startY"] + Nc['y'] / this["character_" + 'scale']);
          Na["angle"] = Nc["rotation"] / (0xb4 / qc['PI']);
          Nb["localPosit" + "ion"]["Set"](0x0, 0x0);
          Nb['radius'] = Nc["width"] / 0x2 / this["character_" + "scale"];
          this["backWheelB" + "ody"] = this["_session"]["m_world"]["CreateBody"](Na);
          this['backWheelS' + "hape"] = this["backWheelB" + "ody"]["CreateShap" + 'e'](Nb);
          this["backWheelB" + 'ody']["SetMassFro" + "mShapes"]();
          this['_session']["contactLis" + "tener"]["registerLi" + "stener"](qX['fI']['ADD'], this["backWheelS" + "hape"], this["wheelConta" + 'ctAdd']);
          this["_session"]["contactLis" + "tener"]["registerLi" + "stener"](qx['fI']["REMOVE"], this["backWheelS" + "hape"], this["wheelConta" + "ctRemove"]);
          Nc = this["shapeGuide"]["frontWheel" + "Shape"];
          NY["position"]['Set'](this["_startX"] + Nc['x'] / this["character_" + 'scale'], this["_startY"] + Nc['y'] / this["character_" + 'scale']);
          NY["angle"] = Nc["rotation"] / (0xb4 / qw['PI']);
          Nb["radius"] = Nc["width"] / 0x2 / this['character_' + "scale"];
          this["frontWheel" + "Body"] = this["_session"]["m_world"]["CreateBody"](NY);
          this["frontWheel" + "Shape"] = this['frontWheel' + "Body"]['CreateShap' + 'e'](Nb);
          this["frontWheel" + "Body"]["SetMassFro" + "mShapes"]();
          this["_session"]['contactLis' + "tener"]["registerLi" + "stener"](nM['fI']["ADD"], this['frontWheel' + "Shape"], this["wheelConta" + "ctAdd"]);
          this["_session"]["contactLis" + "tener"]["registerLi" + "stener"](qa['fI']["REMOVE"], this["frontWheel" + "Shape"], this["wheelConta" + "ctRemove"]);
          NH["density"] = 0x4;
          NH["friction"] = 0.3;
          NH["restitutio" + 'n'] = 0.1;
          NH["filter"] = this["zeroFilter"]["Copy"]();
          NH["filter"]["groupIndex"] = -0x2;
          NH["isSensor"] = !0x1;
          var NQ = 0xc / this["character_" + "scale"];
          NH["SetAsOrien" + "tedBox"](NQ, NQ, NY["position"]);
          this["frontShock" + "Body"] = this["_session"]["m_world"]["CreateBody"](Nv);
          this["frontShock" + "Body"]["CreateShap" + 'e'](NH);
          this["frontShock" + "Body"]['SetMassFro' + "mShapes"]();
          NH["SetAsOrien" + "tedBox"](NQ, NQ, Na["position"]);
          this["backShockB" + "ody"] = this['_session']["m_world"]['CreateBody'](NL);
          this['backShockB' + "ody"]["CreateShap" + 'e'](NH);
          this["backShockB" + "ody"]["SetMassFro" + "mShapes"]();
          this["mowerLoop"] = qY['m']["instance"]['playAreaSo' + 'undLoop']("MowerLoop", this["mowerBody"], 0x0);
          this["mowerLoop"]["fadeTo"](0.5, 0x1);
        }
      };
      var Nd = new q5['j7']((0x0, qK['zI'])("GameUI", "mc_pagefli" + "pper_new"));
      Nd["convertChi" + "ldren"]();
      NS["addChild"](Nd);
      NS["textField"] = q5['A_']["spriteToTe" + "xtField"](Nd["textField"], Nd);
      NS["leftArrow"] = Nd["leftArrow"];
      NS['rightArrow'] = Nd['rightArrow'];
      NS["_currentPa" + 'ge'] = Nr;
      NS["_pageLengt" + 'h'] = NJ;
      NS["_totalItem" + 's'] = ND;
      NS["showTotal"] = Ng;
      NS["_prevPage"] = 0x1 != NS["_currentPa" + 'ge'];
      (!Ng || NS["_totalItem" + 's'] > NS["_currentPa" + 'ge'] * NS["_pageLengt" + 'h']) && (NS["_nextPage"] = !0x0);
      NS["textField"]["autoSize"] = q5['wL']["LEFT"];
      NS["textField"]['wordWrap'] = !0x1;
      NS["textField"]["multiline"] = !0x1;
      NS["textField"]['y'] -= 0x2;
      NS['setTextIte' + 'ms']();
      NS["leftArrow"]["buttonMode"] = NS["rightArrow"]['buttonMode'] = !0x0;
      NS['addEventLi' + 'stener'](q5['Cm']["MOUSE_DOWN"], NS["mouseDownH" + 'andler']);
      return NS;
    }
    var Ni;
    var NE;
    NE = Nl;
    (Ni = No)["prototype"] = Object["create"](NE["prototype"]);
    Ni['prototype']['constructo' + 'r'] = Ni;
    qU(Ni, NE);
    var NR;
    var NW;
    var NA = No["prototype"];
    NA["setTextIte" + 'ms'] = function () {
      var Nr = (this["_currentPa" + 'ge'] - 0x1) * this["_pageLengt" + 'h'] + 0x1;
      var NJ = this["showTotal"] ? String(this["_totalItem" + 's']) : "many";
      if (this['_nextPage']) {
        if ("OtjsA" === "sUQRR") {
          var NS;
          var Nd;
          var Nz;
          q8["prototype"]["createJoin" + 'ts']["call"](this);
          var NF = 0xb4 / qI['PI'];
          Nd = -0x5 / NF - (NS = this["head1Body"]["GetAngle"]() - this["chestBody"]["GetAngle"]());
          Nz = 0x5 / NF - NS;
          this["neckJoint"]["SetLimits"](Nd, Nz);
          var NM = new qS['RM']();
          var NH = new qA['iE']();
          var Nb = this['shapeGuide']["handAnchor"];
          NM["Set"](this["_startX"] + Nb['x'] / this["character_" + "scale"], this['_startY'] + Nb['y'] / this['character_' + 'scale']);
          NH["Initialize"](this["sleighBody"], this["reignsBody"], NM, new qN['RM'](0x0, 0x1));
          NH["enableLimi" + 't'] = !0x0;
          NH["maxMotorFo" + "rce"] = 0x3e8;
          NH["upperTrans" + "lation"] = 0xf / this["m_physScal" + 'e'];
          NH["lowerTrans" + "lation"] = -0x64 / this["m_physScal" + 'e'];
          this["sleighReig" + 'ns'] = this["_session"]["m_world"]["CreateJoin" + 't'](NH);
          var NZ = new qc['Gq']();
          NZ["maxMotorTo" + 'rque'] = this["maxTorque"];
          NZ["enableLimi" + 't'] = !0x1;
          NZ["lowerAngle"] = 0x0;
          NZ['upperAngle'] = 0x0;
          NZ['Initialize'](this["reignsBody"], this["lowerArm1B" + "ody"], NM);
          this["reignsHand" + '1'] = this["_session"]["m_world"]['CreateJoin' + 't'](NZ);
          NZ["Initialize"](this["reignsBody"], this["lowerArm2B" + "ody"], NM);
          this["reignsHand" + '2'] = this["_session"]["m_world"]["CreateJoin" + 't'](NZ);
          NM["Set"](this["pelvisBody"]["GetWorldCe" + "nter"]()['x'], this["pelvisBody"]["GetWorldCe" + "nter"]()['y']);
          NZ["Initialize"](this["sleighBody"], this["pelvisBody"], NM);
          NZ["enableLimi" + 't'] = !0x0;
          this["sleighPelv" + 'is'] = this["_session"]["m_world"]["CreateJoin" + 't'](NZ);
          NZ["enableLimi" + 't'] = !0x1;
          this["pelvisAnch" + 'orPoint'] = this["sleighBody"]["GetLocalPo" + "int"](NM);
          Nb = this["shapeGuide"]["backWheel"];
          NM['Set'](this["_startX"] + Nb['x'] / this["character_" + "scale"], this["_startY"] + Nb['y'] / this["character_" + "scale"]);
          NZ["Initialize"](this["sleighBody"], this["backWheelB" + "ody"], NM);
          this["backWheelJ" + "oint"] = this["_session"]["m_world"]["CreateJoin" + 't'](NZ);
          Nb = this["shapeGuide"]["midWheel1"];
          NM["Set"](this["_startX"] + Nb['x'] / this["character_" + "scale"], this["_startY"] + Nb['y'] / this["character_" + "scale"]);
          NZ["Initialize"](this["sleighBody"], this["midWheel1B" + 'ody'], NM);
          this["midWheel1J" + "oint"] = this['_session']["m_world"]["CreateJoin" + 't'](NZ);
          Nb = this["shapeGuide"]["midWheel2"];
          NM["Set"](this["_startX"] + Nb['x'] / this["character_" + "scale"], this["_startY"] + Nb['y'] / this["character_" + "scale"]);
          NZ["Initialize"](this["sleighBody"], this["midWheel2B" + 'ody'], NM);
          this["midWheel2J" + "oint"] = this["_session"]["m_world"]["CreateJoin" + 't'](NZ);
          Nb = this["shapeGuide"]["frontWheel"];
          NM["Set"](this["_startX"] + Nb['x'] / this["character_" + "scale"], this["_startY"] + Nb['y'] / this["character_" + "scale"]);
          NZ["Initialize"](this["sleighBody"], this["frontWheel" + "Body"], NM);
          this["frontWheel" + "Joint"] = this["_session"]["m_world"]["CreateJoin" + 't'](NZ);
          Nb = this["shapeGuide"]['footAnchor'];
          NM['Set'](this["_startX"] + Nb['x'] / this['character_' + "scale"], this["_startY"] + Nb['y'] / this["character_" + 'scale']);
          NZ["Initialize"](this["sleighBody"], this['lowerLeg1B' + "ody"], NM);
          this["sleighFoot" + '1'] = this["_session"]["m_world"]["CreateJoin" + 't'](NZ);
          this["leg1Anchor" + "Point"] = this["sleighBody"]['GetLocalPo' + "int"](NM);
          NZ['Initialize'](this["sleighBody"], this["lowerLeg2B" + "ody"], NM);
          this["sleighFoot" + '2'] = this["_session"]["m_world"]["CreateJoin" + 't'](NZ);
          this["leg2Anchor" + "Point"] = this["sleighBody"]["GetLocalPo" + "int"](NM);
        } else {
          var ND = this["_currentPa" + 'ge'] * this["_pageLengt" + 'h'];
          this["textField"]["text"] = String(Nr) + " - " + ND + " of " + NJ + '\x20\x20';
        }
      } else {
        ND = (this["_currentPa" + 'ge'] - 0x1) * this["_pageLengt" + 'h'] + 0x1 + this['_totalItem' + 's'];
        ND = this["_totalItem" + 's'];
        this["textField"]["text"] = String(Nr) + " - " + ND + " of " + NJ + '\x20\x20';
      }
      this["organize"]();
    };
    NA["organize"] = function () {
      "aeTiu" === "JlzGh" ? qI(qS, qA, qN, qc, qV, "next", qE) : (this["leftArrow"]['x'] = this["rightArrow"]['x'] - this["spacing"], this['textField']['x'] = this["leftArrow"]['x'] - this["leftArrow"]["width"] - this["textField"]["width"], this["_prevPage"] ? (this['leftArrow']["alpha"] = 0x1, this["leftArrow"]["mouseEnabl" + 'ed'] = !0x0) : (this["leftArrow"]["alpha"] = 0.3, this['leftArrow']['mouseEnabl' + 'ed'] = !0x1), this["_nextPage"] ? (this['rightArrow']["alpha"] = 0x1, this["rightArrow"]["mouseEnabl" + 'ed'] = !0x0) : (this["rightArrow"]["alpha"] = 0.3, this["rightArrow"]["mouseEnabl" + 'ed'] = !0x1));
    };
    NA["flipPage"] = function (Nr) {
      var NJ = this["_currentPa" + 'ge'] + Nr;
      this["_currentPa" + 'ge'] = NJ;
      this["dispatchEv" + "ent"](new q5['Jh'](No["FLIP_PAGE"]));
    };
    NA['die'] = function () {
      if ("qoFpz" === "csphz") {
        var NJ = qz[q8];
        NJ["enumerable"] = NJ['enumerable'] || !0x1;
        NJ['configurab' + 'le'] = !0x0;
        "value" in NJ && (NJ['writable'] = !0x0);
        qI['defineProp' + "erty"](qS, qA(NJ["key"]), NJ);
      } else {
        this["removeEven" + "tListener"](q5['Cm']["MOUSE_DOWN"], this["mouseDownH" + "andler"]);
      }
    };
    NR = No;
    (NW = [{
      'key': "currentPag" + 'e',
      'get': function () {
        return this['_currentPa' + 'ge'];
      }
    }]) && function (Nr, NJ) {
      for (var ND = 0x0; ND < NJ["length"]; ND++) {
        var Ng = NJ[ND];
        Ng['enumerable'] = Ng["enumerable"] || !0x1;
        Ng["configurab" + 'le'] = !0x0;
        'value' in Ng && (Ng["writable"] = !0x0);
        Object['defineProp' + "erty"](Nr, qL(Ng["key"]), Ng);
      }
    }(NR["prototype"], NW);
    Object["defineProp" + "erty"](NR, "prototype", {
      'writable': !0x1
    });
    return NR;
  }(q5['kx']);
  function qG(Nl) {


    if ("EyQZW" === "EyQZW") {
      var No = function (Ni) {
        if ("object" != typeof Ni || !Ni) {
          return Ni;
        }
        var NE = Ni[Symbol["toPrimitiv" + 'e']];
        if (void 0x0 !== NE) {
          var NR = NE["call"](Ni, "string");
          if ("object" != typeof NR) {
            return NR;
          }
          throw new TypeError('@@toPrimit' + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
        }
        return String(Ni);
      }(Nl);
      return "symbol" == typeof No ? No : No + '';
    } else {
      return null;
    }
  }
  function qQ(Nl, No) {


    if ("jzlih" !== "NqePI") {
      qQ = Object["setPrototy" + "peOf"] ? Object['setPrototy' + "peOf"]["bind"]() : function (Ni, NE) {
        if ("bZAne" === 'rdCRS') {
          var NW = qE["impulse"];
          NW > ql["contactImp" + "ulseDict"]["get"](q3["brokenRear" + 'Shape']) && (NE["contactRes" + "ultBuffer"]['get'](qs["brokenRear" + "Shape"]) ? NW > qf["contactRes" + "ultBuffer"]["get"](q9["brokenRear" + "Shape"])['impulse'] && q5["contactRes" + "ultBuffer"]["set"](q2["brokenRear" + "Shape"], qB) : qW["contactRes" + "ultBuffer"]["set"](qH["brokenRear" + 'Shape'], qk));
        } else {
          Ni['__proto__'] = NE;
          return Ni;
        }
      };
      return qQ(Nl, No);
    } else {
      qR["splice"](qz--, 0x1);
      const NE = q8();
      void 0x0 !== NE && (qI = NE);
    }
  }
  qO["FLIP_PAGE"] = "flippage";
  q2(0x977d);
  q2(0x268c);
  var n0 = function (Nl) {

    if ("KvmVJ" !== "yaUPL") {
      function NA() {

        var Nr;
        (Nr = Nl["call"](this) || this)['glowStreng' + 'th'] = 0x0;
        Nr["glowCounte" + 'r'] = 0x0;
        Nr["glowStep"] = 0.1;
        Nr["shakeCount" + 'er'] = 0x0;
        Nr["shakeStep"] = 0x1;
        Nr["rotationPe" + 'rStep'] = q6['w']["use60FPS"] ? 7.5 : 0xf;
        Nr["maxGlowStr" + "ength"] = 0x3;
        Nr["rollOverHa" + "ndler"] = function (NJ) {

          if ("ZHtgg" !== "Urnul") {
            void 0x0 === NJ && (NJ = null);
            Nr['mouseConta' + 'ct'] = !0x0;
            Nr["shakeActiv" + 'e'] = !0x0;
            q3['uO']["instance"]["show"]("refresh re" + "sults", Nr);
          } else {
            qz['os']['to'](NR["loadContai" + 'ner'], {
              'duration': 0x0,
              'alpha': 0x0,
              'onComplete': function () {
                qN["parent"]["stage"]["removeChil" + 'd'](qc["loadContai" + "ner"]);
                qV();
              }
            });
          }
        };
        Nr["rollOutHan" + "dler"] = function (NJ) {
          void 0x0 === NJ && (NJ = null);
          Nr["mouseConta" + 'ct'] = !0x1;
          q3['uO']["instance"]['hide']();
        };
        Nr["step"] = function (NJ) {
          var ND = 0.5 * NJ["delta"];
          if (Nr["spinActive"]) {
            Nr["shapeSprit" + 'e']["rotation"] = (Nr["shapeSprit" + 'e']["rotation"] + Nr["rotationPe" + "rStep"]) % 0x168;
            '0' == Nr["shapeSprit" + 'e']["rotation"]["toFixed"](0x0)["toString"]() && Nr['_disableSp' + 'in'] && (Nr["spinActive"] = !0x1, Nr['_disableSp' + 'in'] = !0x1);
          } else {
            if (Nr["shakeActiv" + 'e']) {
              var Ng = Math['PI'] * Nr["shakeCount" + 'er'] / 0xa;
              q6['w']["use60FPS"] && (Ng /= 0x2);
              Nr["shapeSprit" + 'e']["rotation"] = Math["round"](0x14 * Math["sin"](Ng));
              Nr['shakeCount' + 'er'] += Nr["shakeStep"];
              '0' != Nr["shapeSprit" + 'e']["rotation"]["toFixed"](0x0)['toString']() || Nr['mouseConta' + 'ct'] || (Nr["shakeActiv" + 'e'] = !0x1);
            }
          }
          Nr["glowActive"] && (Nr['glowFilter']["strength"] = (0.5 * -Math['cos'](Nr["glowCounte" + 'r']) + 0.5) * Nr["maxGlowStr" + "ength"], Nr['glowCounte' + 'r'] += Nr["glowStep"] * ND, Nr["filters"] = [Nr["bevelFilte" + 'r'], Nr["glowFilter"], Nr["shadowFilt" + 'er']]);
        };
        Nr['mouseChild' + "ren"] = !0x1;
        Nr['buttonMode'] = !0x0;
        Nr["tabEnabled"] = !0x1;
        Nr["areaSprite"] = new q5['kx']();
        Nr["addChild"](Nr["areaSprite"]);
        Nr["areaSprite"]["graphics"]["beginFill"](0x0);
        Nr["areaSprite"]["graphics"]['drawRect'](0x0, 0x0, 0x14, 0x14);
        Nr["areaSprite"]["graphics"]['endFill']();
        Nr["areaSprite"]["visible"] = !0x1;
        Nr["hitArea"] = Nr["areaSprite"];
        Nr["shapeSprit" + 'e'] = new q5['j7']((0x0, qK['zI'])("GameUI", "mc_refresh" + "_shape"));
        Nr['addChild'](Nr["shapeSprit" + 'e']);
        Nr["shapeSprit" + 'e']['x'] = 0xa;
        Nr["shapeSprit" + 'e']['y'] = 0xa;
        Nr["bevelFilte" + 'r'] = new q5['lU'](0x2, 0x5a, 0xffffff, 0.3, 0x0, 0.3, 0x3, 0x3, 0x1, 0x3);
        Nr["shadowFilt" + 'er'] = new q5['GD'](0x2, 0x5a, 0x0, 0x1, 0x4, 0x4, 0.25, 0x3);
        Nr["glowFilter"] = new q5['qx'](0x3d88c7, 0x1, 0x5, 0x5, 0x0, 0x3, !0x1, !0x1);
        Nr["alpha"] = 0.55;
        Nr["mouseEnabl" + 'ed'] = !0x1;
        Nr['filters'] = [Nr["bevelFilte" + 'r'], Nr["shadowFilt" + 'er']];
        Nr["addEventLi" + "stener"](q5['Cm']["ROLL_OVER"], Nr["rollOverHa" + "ndler"], !0x1, 0x0, !0x0);
        Nr["addEventLi" + "stener"](q5['Cm']["ROLL_OUT"], Nr["rollOutHan" + 'dler'], !0x1, 0x0, !0x0);
        Nr["addEventLi" + 'stener'](q5['Jh']["ENTER_FRAM" + 'E'], Nr["step"], !0x1, 0x0, !0x0);
        return Nr;
      }
      var No;
      var Ni;
      Ni = Nl;
      (No = NA)["prototype"] = Object["create"](Ni["prototype"]);
      No['prototype']["constructo" + 'r'] = No;
      qQ(No, Ni);
      var NE;
      var NR;
      var NW = NA["prototype"];
      NW["setGlow"] = function (Nr) {
        Nr && !this['glowActive'] ? (this["alpha"] = 0x1, this["mouseEnabl" + 'ed'] = !0x0, this["glowActive"] = !0x0, this["glowStreng" + 'th'] = 0x0, this["glowCounte" + 'r'] = 0x0, this["filters"] = [this["bevelFilte" + 'r'], this["glowFilter"], this["shadowFilt" + 'er']]) : Nr || (this["alpha"] = 0.55, this["mouseEnabl" + 'ed'] = !0x1, this["glowActive"] = !0x1, this["filters"] = [this["bevelFilte" + 'r'], this["shadowFilt" + 'er']]);
      };
      NW["setSpin"] = function (Nr) {
        q3['uO']['instance']["hide"]();
        Nr && !this["spinActive"] ? (this['shakeActiv' + 'e'] = !0x1, this["shakeCount" + 'er'] = 0x0, this["spinActive"] = !0x0, this["shapeSprit" + 'e']['rotation'] -= this["shapeSprit" + 'e']["rotation"] % this["rotationPe" + 'rStep']) : Nr || (this['_disableSp' + 'in'] = !0x0);
      };
      NE = NA;
      (NR = [{
        'key': "disableSpi" + 'n',
        'set': function (Nr) {
          this["_disableSp" + 'in'] = Nr;
        }
      }]) && function (Nr, NJ) {
        for (var ND = 0x0; ND < NJ['length']; ND++) {
          var Ng = NJ[ND];
          Ng["enumerable"] = Ng["enumerable"] || !0x1;
          Ng["configurab" + 'le'] = !0x0;
          'value' in Ng && (Ng["writable"] = !0x0);
          Object["defineProp" + "erty"](Nr, qG(Ng["key"]), Ng);
        }
      }(NE['prototype'], NR);
      Object["defineProp" + "erty"](NE, "prototype", {
        'writable': !0x1
      });
      return NE;
    } else {
      var NJ = this['getChildIn' + "dex"](this["selectedLi" + "stItem"]) + 0x1;
      this['replaySele' + "ction"] = new qz(this["selectedLi" + "stItem"]["replayData" + "Object"]);
      this["replaySele" + "ction"]["addEventLi" + "stener"](NR['$T']["SESSION"], this["cloneAndDi" + "spatchEven" + 't']);
      this["replaySele" + "ction"]["addEventLi" + "stener"](qI['dg']["FLAG"], this['cloneAndDi' + "spatchEven" + 't']);
      this["addChildAt"](this["replaySele" + "ction"], NJ);
      this["replaySele" + 'ction']["maskHeight"] = 0x0;
      this["opening"] = !0x0;
      qS['os']['to'](this, {
        'duration': this['tweenTime'],
        'tweenVal': 0x1,
        'ease': qA['MI']['easeInOut'],
        'onComplete': this["openComple" + 'te']
      });
    }
  }(q5['kx']);
  function n1(Nl) {


    if ('UMraY' !== "QmCyG") {
      var No = function (Ni) {
        if ("object" != typeof Ni || !Ni) {
          return Ni;
        }
        var NE = Ni[Symbol["toPrimitiv" + 'e']];
        if (void 0x0 !== NE) {
          var NR = NE["call"](Ni, 'string');
          if ("object" != typeof NR) {
            return NR;
          }
          throw new TypeError("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
        }
        return String(Ni);
      }(Nl);
      return "symbol" == typeof No ? No : No + '';
    } else {
      q8 = qI["setPrototy" + 'peOf'] ? qS['setPrototy' + "peOf"]["bind"]() : function (NE, NR) {
        NE["__proto__"] = NR;
        return NE;
      };
      return qA(qN, qc);
    }
  }
  function n2(Nl, No) {


    n2 = Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"]["bind"]() : function (Ni, NE) {
      Ni["__proto__"] = NE;
      return Ni;
    };
    return n2(Nl, No);
  }
  var n3 = function (Nl) {


    function No() {
      var Nr;
      (Nr = Nl["call"](this) || this)["keyDownHan" + "dler"] = function (ND) {


        0xd == ND["keyCode"] && Nr["validateTe" + 'rm']();
      };
      Nr['mouseUpHan' + 'dler'] = function (ND) {


        switch (ND['target']) {
          case Nr["searchButt" + 'on']:
            Nr["validateTe" + 'rm']();
            break;
          case Nr["cancelButt" + 'on']:
            Nr["dispatchEv" + "ent"](new q5['Jh'](No["CANCEL"]));
        }
      };
      var NJ = new q5['j7']((0x0, qK['zI'])("GameUI", "mc_SearchL" + "evelMenu"));
      NJ["convertChi" + "ldren"]();
      Nr["addChild"](NJ);
      Nr['searchText'] = q5['A_']["spriteToTe" + "xtField"](NJ["searchText"], NJ);
      Nr["errorText"] = q5['A_']["spriteToTe" + "xtField"](NJ['errorText'], NJ);
      Nr["searchText"]["type"] = q5['ux']["INPUT"];
      Nr["searchText"]['_pixiTextI' + "nput"]["setInputSt" + "yle"]("width", "142px");
      Nr["createWind" + 'ow']();
      Nr["dropMenu"] = new ql['f']('search\x20by:', ["level name", 'author\x20nam' + 'e'], [No["LEVEL_NAME"], No['AUTHOR_NAM' + 'E']], No["index"], 0x888888);
      Nr["addChild"](Nr['dropMenu']);
      Nr['dropMenu']["xLeft"] = 0x19;
      Nr["dropMenu"]['y'] = 0xe;
      Nr["searchButt" + 'on'] = new q3['Ch']('search', 0xfd8181, 0x46);
      Nr['addChild'](Nr["searchButt" + 'on']);
      Nr["searchButt" + 'on']['x'] = 0x19;
      Nr['searchButt' + 'on']['y'] = 0x72;
      Nr["cancelButt" + 'on'] = new q3['Ch']('cancel', 0x999999, 0x46);
      Nr["addChild"](Nr["cancelButt" + 'on']);
      Nr["cancelButt" + 'on']['x'] = 0x69;
      Nr["cancelButt" + 'on']['y'] = 0x72;
      Nr["searchText"]["maxChars"] = No["maxChars"];
      Nr["addEventLi" + "stener"](q5['Cm']['MOUSE_UP'], Nr["mouseUpHan" + "dler"]);
      Nr['searchText']["addEventLi" + "stener"](q5['kV']['KEY_DOWN'], Nr["keyDownHan" + "dler"]);
      return Nr;
    }
    var Ni;
    var NE;
    NE = Nl;
    (Ni = No)["prototype"] = Object["create"](NE["prototype"]);
    Ni["prototype"]["constructo" + 'r'] = Ni;
    n2(Ni, NE);
    var NR;
    var NW;
    var NA = No["prototype"];
    NA["createWind" + 'ow'] = function () {
      "mwejl" === "mwejl" ? this["_window"] = new q3['p8'](!0x1, this, !0x0) : (void 0x0 === qF && (qT = null), this["textField"]["alpha"] = this['mc']["XSprite"]["alpha"] = 0x1);
    };
    NA["validateTe" + 'rm'] = function () {
      this["searchText"]["text"] = this["searchText"]["_pixiTextI" + "nput"]["text"];
      this["searchText"]["text"] = qN['l5']["trimWhites" + "pace"](this["searchText"]["text"]);
      if (this["searchText"]["length"] < No["minChars"]) {
        var Nr = "must be be" + "tween " + No["minChars"] + " and " + No["maxChars"] + (" character" + 's');
        this["errorText"]['text'] = Nr;
      } else {
        this["dispatchEv" + 'ent'](new q5['Jh'](No["SEARCH"]));
      }
    };
    NA["die"] = function () {
      No["index"] = this["dropMenu"]["currentInd" + 'ex'];
      this["removeEven" + "tListener"](q5['Cm']["MOUSE_UP"], this["mouseUpHan" + "dler"]);
      this["dropMenu"]["die"]();
      this["_window"]["closeWindo" + 'w']();
    };
    NR = No;
    (NW = [{
      'key': "window",
      'get': function () {
        return this["_window"];
      }
    }, {
      'key': "searchType",
      'get': function () {
        if ("fzPeB" === "YqZqp") {
          'bg' === qF["target"]["name"] && qT["target"]["parent"]["parent"]["mouseDown"]();
        } else {
          return this["dropMenu"]["value"];
        }
      }
    }, {
      'key': "searchTerm",
      'get': function () {
        return this["searchText"]['text'];
      }
    }]) && function (Nr, NJ) {
      for (var ND = 0x0; ND < NJ["length"]; ND++) {
        var Ng = NJ[ND];
        Ng["enumerable"] = Ng["enumerable"] || !0x1;
        Ng["configurab" + 'le'] = !0x0;
        "value" in Ng && (Ng["writable"] = !0x0);
        Object["defineProp" + "erty"](Nr, n1(Ng['key']), Ng);
      }
    }(NR["prototype"], NW);
    Object["defineProp" + "erty"](NR, "prototype", {
      'writable': !0x1
    });
    return NR;
  }(q5['kx']);
  function n4(Nl, No) {

    n4 = Object["setPrototy" + "peOf"] ? Object["setPrototy" + 'peOf']['bind']() : function (Ni, NE) {
      Ni["__proto__"] = NE;
      return Ni;
    };
    return n4(Nl, No);
  }
  n3['AUTHOR_NAM' + 'E'] = "author";
  n3["LEVEL_NAME"] = "level";
  n3['SEARCH'] = "search";
  n3["CANCEL"] = "CANCEL";
  n3["index"] = 0x0;
  n3["minChars"] = 0x4;
  n3["maxChars"] = 0xc;
  var n5 = function (Nl) {


    if ("bzPsp" === "pIwkE") {
      this["eject"]();
    } else {
      function NW(NA, Nr, NJ, ND) {
        if ("GLkop" === "GLkop") {
          var Ng;
          void 0x0 === ND && (ND = 0xffffff);
          (Ng = Nl["call"](this, NA, Nr, NJ, ND) || this)["rollOverHa" + 'ndlerBind'] = Ng["rollOverHa" + "ndler"]["bind"](Ng);
          Ng["rollOutHan" + 'dlerBind'] = Ng["rollOutHan" + "dler"]['bind'](Ng);
          return Ng;
        } else {
          var Nd;
          (Nd = qW["call"](this) || this)["triggering" + "Count"] = 0x0;
          Nd['soundLocat' + 'ion'] = 0x1;
          Nd["mouseOutHa" + "ndlerBind"] = Nd["mouseOutHa" + "ndler"]['bind'](Nd);
          Nd["mouseUpHan" + "dlerBind"] = Nd["mouseUpHan" + 'dler']["bind"](Nd);
          Nd["checkAdd1B" + "ind"] = Nd["checkAdd1"]["bind"](Nd);
          Nd["checkAdd2B" + 'ind'] = Nd["checkAdd2"]["bind"](Nd);
          Nd['checkAdd3B' + "ind"] = Nd["checkAdd3"]["bind"](Nd);
          Nd["checkAdd4B" + 'ind'] = Nd["checkAdd4"]["bind"](Nd);
          Nd["checkRemov" + "e1Bind"] = Nd["checkRemov" + 'e1']["bind"](Nd);
          Nd["createShap" + 'e'](qH);
          Nd["triggerInd" + 'ex'] = qk;
          Nd['_x'] = ND['x'];
          Nd['_y'] = qJ['y'];
          Nd["session"] = qr['w']["currentSes" + "sion"];
          Nd["delayFrame" + 's'] = qj["floor"](0x1e * qP["triggerDel" + 'ay']);
          Nd['delayVecto' + 'r'] = new qn();
          Nd['repeatFram' + 'es'] = Nd["repeatCoun" + 't'] = qy['floor'](0x1e * qg["repeatInte" + "rval"]);
          Nd["type"] = qu["typeIndex"];
          0x2 == qd["typeIndex"] && (Nd["soundEffec" + 't'] = qm['Gg']["instance"]["sfxDiction" + 'ary']["get"](qa["soundEffec" + 't']), Nd["soundLocat" + "ion"] = qh["soundLocat" + "ion"], Nd["soundTrans" + 'form'] = new qq['AX'](qZ["volume"], qo["panning"]));
          Nd['triggeredB' + 'y'] = qK["triggeredB" + 'y'];
          Nd["repeatType"] = Nl["repeatType"];
          Nd["activation" + "Dictionary"] = new q7();
          Nd["targets"] = new qb();
          return Nd;
        }
      }
      var No;
      var Ni;
      Ni = Nl;
      (No = NW)["prototype"] = Object["create"](Ni["prototype"]);
      No["prototype"]["constructo" + 'r'] = No;
      n4(No, Ni);
      var NE = NW["prototype"];
      NE["createText" + "Field"] = function () {
        var NA = new q5['lk']("HelveticaN" + "eueLT Std " + "Med", 0xc, this["_txtColor"], null, null, null, null, null, q5['MA']['CENTER']);
        this["textField"] = new q5['A_']();
        this["textField"]["defaultTex" + "tFormat"] = NA;
        this["textField"]['autoSize'] = q5['wL']["CENTER"];
        this["textField"]["height"] = 0x14;
        this["textField"]['y'] = 0x3;
        this["textField"]["multiline"] = !0x1;
        this["textField"]["selectable"] = !0x1;
        this["textField"]["antiAliasT" + "ype"] = q5['BF']["ADVANCED"];
        this["addChild"](this["textField"]);
        var Nr = this['mc'] = new q5['j7']((0x0, qK['zI'])("GameUI", 'mc_XButton'));
        Nr["convertChi" + "ldren"]();
        this["addChild"](Nr);
        this['XSprite'] = Nr["XSprite"];
        this["XSprite"]['tint'] = this["_txtColor"];
        var NJ = this["XSprite"]['transform']["colorTrans" + "form"];
        NJ["color"] = this['_txtColor'];
        this["XSprite"]["transform"]["colorTrans" + "form"] = NJ;
      };
      NE["createBg"] = function () {
        if ("lIMsI" !== "UwdNL") {
          this["textField"]["autoSize"] = q5['wL']["NONE"];
          this["textField"]["width"] = Math['ceil'](this["textField"]["width"] + 0x14);
          this['textField']['x'] = 0x0;
          var NA = this["textField"]["width"] + 0x2;
          this["XSprite"]['x'] = NA + 1.5 * this["XSprite"]["width"];
          this["XSprite"]['y'] = 11.5;
          this["_bgWidth"] = this["textField"]["width"] + 0x12 + 1.5 * this["XSprite"]["width"];
          Nl["prototype"]["createBg"]['call'](this);
        } else {
          void 0x0 === qs && (qf = null);
          q9["saveMenu"]["removeEven" + "tListener"](q5["SAVE_NEW"], No["saveNewLev" + 'el']);
          qB["saveMenu"]['removeEven' + "tListener"](qW["SAVE_OVER"], qH["saveOverLe" + "vel"]);
          qk["saveMenu"]["removeEven" + "tListener"](NE['p']["WINDOW_CLO" + "SED"], qJ["closeSaveM" + "enu"]);
          qr["saveMenu"]["die"]();
          qj["saveMenu"]["destroy"]();
          qP["saveMenu"] = null;
          qn["dispatchEv" + "ent"](new qy['Jh'](qg["MENU_IDLE"]));
        }
      };
      NE["rollOverHa" + "ndler"] = function (NA) {
        void 0x0 === NA && (NA = null);
        this["textField"]['alpha'] = this['mc']["XSprite"]["alpha"] = 0x1;
      };
      NE['rollOutHan' + 'dler'] = function (NA) {
        if ("kApzi" !== "bTNZo") {
          void 0x0 === NA && (NA = null);
          this["_selected"] || (this["textField"]["alpha"] = this['mc']["XSprite"]['alpha'] = this["offAlpha"]);
        } else {
          for (var NJ = 0x0; NJ < qF["length"]; NJ++) {
            var ND = qR[NJ];
            ND['ignoreWhen' + "Culling"] || (ND["_pixiSprit" + 'e']["visible"] = this["overlapsCa" + "mera"](ND));
          }
        }
      };
      return NW;
    }
  }(q3['Ch']);
  function n6(Nl, No) {

    n6 = Object["setPrototy" + 'peOf'] ? Object["setPrototy" + "peOf"]["bind"]() : function (Ni, NE) {
      Ni["__proto__"] = NE;
      return Ni;
    };
    return n6(Nl, No);
  }
  var n7 = function (Nl) {

    if ("XdSmL" === "XdSmL") {
      function NR() {

        if ("XSHVF" !== 'XSHVF') {
          var ND = this["shapeGuide"]["sidePoint" + qz + '_' + q8];
          qI["vertices"][qS] = new qA['RM'](this['_startX'] + ND['x'] / this["character_" + "scale"], this["_startY"] + ND['y'] / this["character_" + "scale"]);
        } else {
          var NW;
          (NW = Nl['call'](this) || this)["loadData"] = function (ND) {
            void 0x0 === ND && (ND = null);
            for (var Ng = 0x0; Ng < NW["dropMenuAr" + "ray"]["length"]; Ng++) {
              NR["savedDropS" + "ettings"][Ng] = NR['currentDro' + 'pSettings'][Ng];
              NR["savedDropS" + "tates"][Ng] = NR['currentDro' + "pStates"][Ng];
            }
            NW["refreshBut" + 'ton']["setSpin"](!0x0);
            NR["savedSearc" + 'h'] = 0x0;
            NR["levelDataA" + "rray"] = [];
            var NS = new q5['vg'](q6['w']["siteURL"] + ('get_level.' + 'hw'));
            NS["method"] = q5['QI']["POST"];
            NR["urlVariabl" + 'es'] = new q5['Vt']();
            NR["urlVariabl" + 'es']['action'] = "get_all";
            NR["urlVariabl" + 'es']["page"] = NR["currentSet"] = NR["currentPag" + 'e'] = 0x1;
            NR["urlVariabl" + 'es']['sortby'] = NW['sortDropMe' + 'nu']["value"];
            NR["urlVariabl" + 'es']["uploaded"] = NW["uploadDrop" + "Menu"]['value'];
            NR["levelSearc" + 'h'] ? (NR["savedSearc" + 'h'] = 0x1, NR["urlVariabl" + 'es']['action'] = "search_by_" + "name", NR["urlVariabl" + 'es']["sterm"] = NR['levelSearc' + 'h']) : NR["authorName" + "Search"] ? (NR["savedSearc" + 'h'] = 0x2, NR["urlVariabl" + 'es']["action"] = "search_by_" + "user", NR["urlVariabl" + 'es']["sterm"] = NR['authorName' + "Search"]) : NR['_favorites'] ? (NR["savedSearc" + 'h'] = 0x3, NS["url"] = q6['w']["siteURL"] + "user.hw", NR["urlVariabl" + 'es'] = new q5['Vt'](), NR["urlVariabl" + 'es']["action"] = "get_favori" + "tes", q6['w']["favoriteLe" + 'velIds'] = []) : NR["_favorites" + "UserId"] > 0x0 ? (NR["savedSearc" + 'h'] = 0x4, NR["urlVariabl" + 'es'] = new q5['Vt'](), NR["urlVariabl" + 'es']["action"] = "get_fav_by" + "_user", NR["urlVariabl" + 'es']["user_id"] = NR["_favorites" + 'UserId'], NR["ownFavorit" + "esListed"]() && (q6['w']['favoriteLe' + "velIds"] = [])) : 0x0 != NW["authorDrop" + 'Menu']['value'] ? (NR['urlVariabl' + 'es']["action"] = 'get_pub_by' + "_user", NR["urlVariabl" + 'es']["user_id"] = NW['authorDrop' + "Menu"]["value"]) : ND && qN['JD']["trackEvent"](qN['JD']["LEVEL_BROW" + "SER"], qN['JD']["REFRESH_LE" + "VELS"], NW['sortDropMe' + 'nu']["value"] + '_' + NW["uploadDrop" + 'Menu']["value"]);
            NS["data"] = NR["urlVariabl" + 'es'];
            NW["statusSpri" + 'te'] = new q3['AS']('loading\x20le' + 'vels...');
            var Nd = NW["statusSpri" + 'te']["window"];
            NW["addChild"](Nd);
            Nd["center"]();
            NW['listLoadPe' + "nding"] = !0x0;
            NW["loader"] = new q5['NU']();
            NW["loader"]['addEventLi' + "stener"](q5['Jh']["COMPLETE"], NW['levelDataL' + "oaded"]);
            NW["loader"]["addEventLi" + 'stener'](q5['BR']["IO_ERROR"], NW["IOErrorHan" + "dler"]);
            NW["loader"]["addEventLi" + "stener"](q5['Xt']["SECURITY_E" + "RROR"], NW["securityEr" + "rorHandler"]);
            NW["loader"]["load"](NS);
          };
          NW["levelDataL" + "oaded"] = function (ND) {
            var Ng;
            NW["listLoadPe" + "nding"] = !0x1;
            NW["statusSpri" + 'te']["die"]();
            NW["removeLoad" + "erListener" + 's']();
            NW["refreshBut" + "ton"]["setSpin"](!0x1);
            var NS = String(NW['loader']["data"]);
            var Nd = NS["substr"](0x0, 0x8);
            if (Nd["indexOf"]("<html>") > -0x1) {
              NW["createProm" + "ptSprite"]("There was " + "an unexpec" + "ted system" + " Error", 'oh');
              return void NW["updateRefr" + "eshButton"](!0x0);
            }
            if (Nd["indexOf"]("failure") > -0x1) {
              if ("gXzpf" === "gXzpf") {
                var Nz = NS['split'](':');
                "invalid_ac" + 'tion' == Nz[0x1] ? NW["createProm" + "ptSprite"]("An invalid" + " action wa" + "s passed (" + 'you\x20really' + '\x20shouldn\x27t' + " ever be s" + "eeing this" + ').', 'ok') : "bad_param" == Nz[0x1] ? NW["createProm" + "ptSprite"]('A\x20bad\x20para' + "meter was " + "passed (yo" + "u really s" + 'houldn\x27t\x20e' + 'ver\x20be\x20see' + "ing this).", 'ok') : "app_error" == Nz[0x1] ? NW["createProm" + "ptSprite"]("Sorry, the" + 're\x20was\x20an\x20' + "applicatio" + "n error. I" + "t was most" + " likely da" + "tabase rel" + "ated. Plea" + "se try aga" + "in in a mo" + "ment.", 'ok') : NW["createProm" + "ptSprite"]("An unknown" + " Error has" + " occurred.", 'oh');
                return void NW["updateRefr" + "eshButton"](!0x0);
              } else {
                if ("deflate" !== qR) {
                  throw new qz("Invalid de" + "compressio" + 'n\x20algorith' + "m: '" + Nz + '\x27.');
                }
                this["buffer"] = (0x0, qI["inflateRaw" + "Sync"])(this["buffer"]);
              }
            }
            NW['updateRefr' + "eshButton"]();
            var NF = new q5['_9'](NW["loader"]["data"]);
            var NM = (0x0, q5['Wh'])(NF["@pp"]);
            NM > 0x1 && (NR['setLength'] = NM);
            NR["levelDataA" + "rray"] || (NR["levelDataA" + "rray"] = []);
            for (var NH = null === (Ng = NF['lv']) || void 0x0 === Ng ? void 0x0 : Ng["length"], Nb = 0x0; Nb < NH; Nb++) {
              var NZ = NF['lv'][Nb];
              var Ny = new qo['m3'](NZ["@id"], NZ["@ln"], NZ["@ui"], NZ["@un"], NZ['@rg'], NZ["@vs"], NZ["@ps"], NZ["@dp"], NZ['uc'][0x0]["cdata"], NZ['@pc'], 0x1, 0x1, 0x1, NZ['@dp']);
              NR["levelDataA" + "rray"]["push"](Ny);
              NR["ownFavorit" + "esListed"]() && q6['w']["favoriteLe" + 'velIds']["push"](Ny['id']);
            }
            NW['list'] && NW["killList"]();
            NW["buildList"]();
          };
          NW["IOErrorHan" + "dler"] = function (ND) {
            NW["listLoadPe" + 'nding'];
            NW["listLoadPe" + "nding"] = !0x1;
            NW["statusSpri" + 'te'] && NW["statusSpri" + 'te']["die"]();
            NW["removeLoad" + "erListener" + 's']();
            NW["updateRefr" + "eshButton"]();
            NW["refreshBut" + "ton"]["setSpin"](!0x1);
            NW["createProm" + "ptSprite"]("Sorry, the" + 're\x20was\x20an\x20' + 'IO\x20Error.', "ugh, ok");
          };
          NW["securityEr" + "rorHandler"] = function (ND) {
            if ("IOPCa" === "IOPCa") {
              NW["statusSpri" + 'te'] && NW['statusSpri' + 'te']['die']();
              NW["removeLoad" + "erListener" + 's']();
              NW["updateRefr" + "eshButton"]();
              NW["refreshBut" + "ton"]['setSpin'](!0x1);
              NW["createProm" + "ptSprite"]("Sorry, the" + 're\x20was\x20a\x20S' + "ecurity Er" + "ror.", "ugh, ok");
            } else {
              var NS = qT["call"](qR, "string");
              if ("object" != typeof NS) {
                return NS;
              }
              throw new qz('@@toPrimit' + "ive must r" + 'eturn\x20a\x20pr' + "imitive va" + "lue.");
            }
          };
          NW["dropMenuSe" + "lected"] = function (ND) {
            var Ng;
            var NS;
            void 0x0 === ND && (ND = null);
            var Nd = (NS = null != ND ? ND["target"] : NW["authorDrop" + "Menu"])["currentInd" + 'ex'];
            NS == NW["authorDrop" + "Menu"] ? (Ng = 0x0, NR["currentDro" + 'pStates'] = Nd > 0x0 ? [0x1, 0x0, 0x0] : [0x1, 0x1, 0x1]) : Ng = NS == NW["sortDropMe" + 'nu'] ? 0x1 : 0x2;
            NR["currentDro" + "pSettings"][Ng] = Nd;
            NW["organizeDr" + "opMenus"]();
            NW["updateRefr" + "eshButton"](null == ND);
          };
          NW["backPress"] = function (ND) {
            qN['JD']["trackEvent"](qN['JD']["LEVEL_BROW" + "SER"], qN['JD']["GOTO_MAIN_" + "MENU"]);
            NW["dispatchEv" + "ent"](new qu['$T'](qu['$T']["MAIN_MENU"]));
          };
          NW["listFavori" + "tes"] = function (ND) {
            NR["_favorites"] || (NW["searchTerm" + 'Button'] && NW["removeSear" + "chTerm"](), qN['JD']["trackEvent"](qN['JD']['LEVEL_BROW' + "SER"], qN['JD']["GET_FAVORI" + "TES"]), NR["_favorites"] = !0x0, NR["_favorites" + "UserId"] = 0x0, NW['createSear' + "chTermButt" + 'on'](0x3), NW["loadData"]());
          };
          NW["listDownlo" + "ads"] = function (ND) {};
          NW['downloadLe' + "vel"] = function (ND) {};
          NW['deleteDown' + "load"] = function (ND) {};
          NW["getFavorit" + 'esFromUser'] = function (ND) {
            var Ng = ND["extra"];
            NW['searchTerm' + "Button"] && NW["removeSear" + "chTerm"]();
            qN['JD']["trackEvent"](qN['JD']["LEVEL_BROW" + "SER"], qN['JD']["GET_FAVORI" + "TES"], "userID_" + Ng["author_id"]);
            NR["_favorites"] = !0x1;
            NR["_favorites" + "UserId"] = Ng["author_id"];
            NR["_favorites" + "UserName"] = Ng["author_nam" + 'e'];
            NW["createSear" + "chTermButt" + 'on'](0x4);
            NW["loadData"]();
          };
          NW["openSearch" + "Menu"] = function (ND) {
            NW["searchMenu"] = new n3();
            var Ng = NW['searchMenu']["window"];
            NW["addChild"](Ng);
            Ng["center"]();
            NW["_pixiSprit" + 'e']["interactiv" + 'e'] = !0x1;
            Ng["interactiv" + 'e'] = !0x0;
            NW["searchMenu"]["addEventLi" + "stener"](n3["SEARCH"], NW["beginSearc" + 'h']);
            NW["searchMenu"]["addEventLi" + "stener"](n3["CANCEL"], NW["closeSearc" + "hMenu"]);
          };
          NW["closeSearc" + "hMenu"] = function (ND) {
            void 0x0 === ND && (ND = null);
            NW["_pixiSprit" + 'e']["interactiv" + 'e'] = !0x0;
            NW['searchMenu']["removeEven" + "tListener"](n3["SEARCH"], NW["beginSearc" + 'h']);
            NW["searchMenu"]["removeEven" + "tListener"](n3["CANCEL"], NW["closeSearc" + "hMenu"]);
            NW['searchMenu']['die']();
            NW['searchMenu']["destroy"]();
            NW["searchMenu"] = null;
          };
          NW["beginSearc" + 'h'] = function (ND) {
            if ("gQTcT" !== "qRIhs") {
              var Ng = NW["searchMenu"]["searchTerm"];
              var NS = NW["searchMenu"]["searchType"];
              NW["closeSearc" + "hMenu"]();
              NW["searchTerm" + "Button"] && NW["removeSear" + "chTerm"]();
              NS == n3["LEVEL_NAME"] ? (NR["savedTerm"] = Ng, NW["createSear" + "chTermButt" + 'on'](0x1), qN['JD']["trackEvent"](qN['JD']["LEVEL_BROW" + "SER"], qN['JD']["LEVEL_SEAR" + 'CH'], Ng), NW["loadData"]()) : NS == n3["AUTHOR_NAM" + 'E'] && (NR['savedTerm'] = Ng, NW["createSear" + "chTermButt" + 'on'](0x2), qN['JD']["trackEvent"](qN['JD']["LEVEL_BROW" + "SER"], qN['JD']["AUTHOR_SEA" + "RCH"], Ng), NW["loadData"]());
            } else {
              qT["__proto__"] = qR;
              return qz;
            }
          };
          NW["removeSear" + "chTerm"] = function (ND) {
            void 0x0 === ND && (ND = null);
            NR['levelSearc' + 'h'] = null;
            NR['authorName' + 'Search'] = null;
            NR["_favorites"] = !0x1;
            NR["_favorites" + "UserId"] = 0x0;
            NR["_downloads"] = !0x1;
            NW["searchTerm" + "Button"]["removeEven" + "tListener"](q5['Cm']["MOUSE_UP"], NW['removeSear' + "chTerm"]);
            NW["removeChil" + 'd'](NW["searchTerm" + "Button"]);
            NW['searchTerm' + 'Button']['destroy']();
            NW["searchTerm" + "Button"] = null;
            NW["dropMenuSe" + "lected"]();
          };
          NW['editFavori' + "tes"] = function (ND) {
            var Ng = ND["type"] == qu['dg']["ADD_TO_FAV" + "ORITES"];
            if (q6['w']["user_id"] <= 0x0) {
              NW['createProm' + "ptSprite"]("You must b" + "e logged i" + "n to edit " + "your favor" + "ite levels" + ".  " + q6['w']["registerLo" + "ginMessage"], 'ok');
            } else {
              if (q6['w']["disableUpl" + "oad"]) {
                NW["createProm" + "ptSprite"](q6['w']["disableMes" + "sage"], 'OH\x20FINE');
              } else {
                var NS = ND["extra"];
                var Nd = new q5['vg'](q6['w']["siteURL"] + "user.hw");
                Nd["method"] = q5['QI']['POST'];
                var Nz;
                var NF = new q5['Vt']();
                NF["level_id"] = NS;
                Nd["data"] = NF;
                Ng ? (Nz = "adding lev" + "el to favo" + "rites...", NF["action"] = "set_favori" + 'te', NW["favoriteId"] = NS) : (Nz = 'removing\x20l' + "evel from " + "favorites." + '..', NF["action"] = "delete_fav" + "orite", NW["favoriteId"] = -NS);
                NW["statusSpri" + 'te'] = new q3['AS'](Nz);
                var NM = NW['statusSpri' + 'te']["window"];
                NW['addChild'](NM);
                NM["center"]();
                NW["loader"] = new q5['NU']();
                NW["loader"]['addEventLi' + "stener"](q5['Jh']['COMPLETE'], NW["editFavori" + "tesComplet" + 'e']);
                NW["loader"]["addEventLi" + "stener"](q5['BR']["IO_ERROR"], NW["IOErrorHan" + "dler"]);
                NW['loader']["addEventLi" + "stener"](q5['Xt']['SECURITY_E' + "RROR"], NW["securityEr" + "rorHandler"]);
                NW["loader"]['load'](Nd);
              }
            }
          };
          NW["editFavori" + 'tesComplet' + 'e'] = function (ND) {
            NW['statusSpri' + 'te']["die"]();
            NW["removeLoad" + "erListener" + 's']();
            var Ng = String(NW["loader"]["data"]);
            var NS = Ng["substr"](0x0, 0x8);
            var Nd = Ng['split'](':');
            if (NS['indexOf']("<html>") > -0x1) {
              NW["createProm" + "ptSprite"]("There was " + "an unexpec" + "ted system" + " Error", 'oh');
            } else {
              if ("failure" == Nd[0x0]) {
                'not_logged' + '_in' == Nd[0x1] ? NW["createProm" + "ptSprite"]("You must b" + "e logged i" + "n to edit " + "your favor" + "ite levels" + ".  " + q6['w']["registerLo" + "ginMessage"], 'ok') : "duplicate" == Nd[0x1] ? NW["createProm" + "ptSprite"]("This level" + " is alread" + "y one of y" + "our favori" + "te levels.", 'ok') : 'fav_count' == Nd[0x1] ? NW["createProm" + "ptSprite"]("Your favor" + "ites list " + "is full.  " + "Remove som" + "e levels f" + 'rom\x20your\x20f' + "avorites.", 'ok') : "invalid_ac" + "tion" == Nd[0x1] ? NW["createProm" + "ptSprite"]("An invalid" + " action wa" + "s passed (" + "you really" + " shouldn't" + " ever be s" + "eeing this" + ').', 'ok') : "bad_param" == Nd[0x1] ? NW["createProm" + "ptSprite"]("A bad para" + "meter was " + "passed (yo" + "u really s" + "houldn't e" + "ver be see" + "ing this).", 'ok') : "app_error" == Nd[0x1] ? NW["createProm" + "ptSprite"]("Sorry, the" + "re was an " + "applicatio" + "n error. I" + "t was most" + " likely da" + "tabase rel" + "ated. Plea" + "se try aga" + "in in a mo" + "ment.", 'ok') : NW["createProm" + "ptSprite"]("An unknown" + " Error has" + " occurred.", 'oh');
              } else {
                if ("success" == Nd[0x0]) {
                  NW["createProm" + "ptSprite"]("Favorites " + "list updat" + "ed.", 'ok');
                  if (NW["favoriteId"] > 0x0) {
                    -0x1 == q6['w']["favoriteLe" + 'velIds']["indexOf"](NW['favoriteId']) && q6['w']["favoriteLe" + "velIds"]["push"](NW['favoriteId']);
                  } else {
                    if (NW['favoriteId'] < 0x0) {
                      var Nz = q6['w']["favoriteLe" + "velIds"]["indexOf"](-NW["favoriteId"]);
                      Nz > -0x1 && q6['w']['favoriteLe' + 'velIds']["splice"](Nz, 0x1);
                    }
                  }
                }
              }
            }
          };
          NW["getLevelsF" + "romAuthor"] = function (ND) {
            if ("XbVbk" === 'XbVbk') {
              var Ng = ND["extra"];
              NW["updateAuth" + "ors"](Ng["author_nam" + 'e'], Ng["author_id"]);
              NW['authorDrop' + "Menu"]["currentInd" + 'ex'] = NW["authorDrop" + 'Menu']["valueIndex"](Ng["author_id"]);
              NR["currentDro" + "pSettings"][0x0] = NW["authorDrop" + "Menu"]["currentInd" + 'ex'];
              NW["searchTerm" + "Button"] && NW['removeSear' + "chTerm"]();
              NR['currentDro' + "pStates"] = [0x1, 0x0, 0x0];
              NW["organizeDr" + 'opMenus']();
              NW["loadData"]();
            } else {
              var Nd = qF["mask"];
              qT["mask"] = null;
              this["targetMask" + "Holder"]["removeChil" + 'd'](Nd);
            }
          };
          NW["flipPage"] = function (ND) {
            var Ng = NR["currentSet"];
            NR["currentPag" + 'e'] = NW["pageFlippe" + 'r']["currentPag" + 'e'];
            NR["currentSet"] = Math["ceil"](NR["currentPag" + 'e'] * NR["pageLength"] / NR["setLength"]);
            var NS = NR['levelDataA' + "rray"]["length"];
            NR["currentSet"] > Ng && NS <= (NR["currentSet"] - 0x1) * NR["setLength"] ? NW["loadDataOf" + 'fset']() : (NW['killList'](), NW['buildList']());
          };
          NW["cloneAndDi" + "spatchEven" + 't'] = function (ND) {
            if ("KPIfx" !== 'KPIfx') {
              var Nd = qS["other"];
              if (Nd['IsStatic']()) {
                qA["wall"] = !0x0;
              } else {
                var Nz = Nd['GetShapeLi' + 'st']();
                var NF = Nz && Nz["GetUserDat" + 'a']();
                NF instanceof NR['s'] && qs["isCore"](Nd, NF) && (NF["isDadsSon"] ? (qf["son"] = NF, Nd === NF['head1Body'] && (q9["sonsHead"] = !0x0)) : NF === q5["character"] && (NW["dad"] = NF));
              }
            } else {
              ND["levelDataO" + "bject"] && (NR["lastLevelI" + 'd'] = ND["levelDataO" + "bject"]['id']);
              var Ng = ND["clone"]();
              Ng["target"] = NW;
              NW["dispatchEv" + "ent"](Ng);
            }
          };
          NW["faceSelect" + 'ed'] = function (ND) {
            if ("jVPNS" === "jVPNS") {
              void 0x0 === ND && (ND = null);
              NR['selectedCh' + "aracter"] = NW["list"]['selectedCh' + "aracter"];
            } else {
              var NS = qS['entries'][qA];
              NS["gapBefore"] && (qN += NS["gapBefore"]);
              var Nd = new qc['A_']();
              Nd["multiline"] = !0x0;
              Nd["defaultTex" + 'tFormat'] = qV;
              Nd["text"] = NS["text"];
              Nd['y'] = qE;
              Nd["pixiText"]["anchor"]["set"](0.5, 0x0);
              this["creditsSpr" + "ite"]["addChild"](Nd);
              var Nz = Nd["height"];
              NS['url'] && (Nd["mouseEnabl" + 'ed'] = !0x0, Nd["mouseChild" + "ren"] = !0x0, new ql['x'](Nd, NS["url"]));
              q3 += Nz;
            }
          };
          NW['updateScro' + 'ller'] = function (ND) {
            if ("oImna" !== "yhNog") {
              void 0x0 === ND && (ND = null);
              NW["scrollBar"]["updateScro" + 'llTab']();
            } else {
              q6["prototype"]["resetMovie" + "Clips"]["call"](this);
              this["helmetMC"]["visible"] = !0x1;
              this["head1MC"]["helmet"]["visible"] = !0x0;
              this['copterFron' + "tMC"]["inner"]["leg1"]["visible"] = !0x0;
              this["copterFron" + 'tMC']["inner"]["leg2"]["visible"] = !0x0;
              this['copterFron' + "tMC"]["visible"] = !0x0;
              this["copterMC"]["visible"] = !0x0;
              this["copterMC"]["inner"]["propeller"]["visible"] = !0x0;
              this['copterMC']["inner"]["brokenProp" + "eller"]['visible'] = !0x1;
              for (var NS = 0x0; NS < 0x7; NS++) {
                this["brokenCopt" + "erMCs"][NS]["visible"] = !0x1;
              }
              this["copterBody"]["SetUserDat" + 'a'](this["copterMC"]);
              this["magnetBody"]["SetUserDat" + 'a'](this["magnetMC"]);
              this["magnetMC"]["gotoAndSto" + 'p'](0x1);
              this["magnetMC"]["lights"]["visible"] = !0x1;
              this["ropeSprite"]["graphics"]["clear"]();
              var Nd = this["sourceObje" + 'ct']['copterShar' + 'ds'];
              this['_session']["particleCo" + 'ntroller']["createBMDA" + "rray"]("copterShar" + 'ds', Nd);
            }
          };
          var NA = (0x0, qK['zI'])("GameUI", 'mc_level_b' + "rowser");
          NW["__mc"] = NA;
          var Nr = [];
          NA["children"]["forEach"](function (ND) {
            if ("tOdjm" !== "tOdjm") {
              return this["_selected"];
            } else {
              var Ng;
              ND instanceof qV['j7'] ? (Ng = new q5['j7'](null))["setPixiMov" + "ieClip"](ND) : Ng = new q5['kx'](ND);
              ND["name"] && (Ng["name"] = Ng["pixiSprite"]["name"] = ND["name"], NW[ND["name"]] = Ng);
              Nr["push"](Ng);
            }
          });
          Nr["forEach"](function (ND) {
            if ("dzGWk" !== "NwuVF") {
              NW["addChild"](ND);
            } else {
              void 0x0 === qK && (ND = null);
              for (var NS = 0x0; NS < Nr["dropMenuAr" + "ray"]["length"]; NS++) {
                qb["savedDropS" + "ettings"][NS] = qC["currentDro" + "pSettings"][NS];
              }
              qt['refreshBut' + "ton"]["setSpin"](!0x0);
              qM["replayData" + "Array"] = [];
              var Nd = new qi['vg'](qD['w']["siteURL"] + 'replay.hw');
              Nd["method"] = qw['QI']['POST'];
              q0['urlVariabl' + 'es'] = new q1['Vt']();
              q2["urlVariabl" + 'es']['action'] = "get_all_by" + "_level";
              q3["urlVariabl" + 'es']["page"] = q4["currentSet"] = q5["currentPag" + 'e'] = 0x1;
              q6["urlVariabl" + 'es']['level_id'] = q7['_levelId'];
              q8["urlVariabl" + 'es']["sortby"] = q9["sortDropMe" + 'nu']["value"];
              Nd['data'] = qq["urlVariabl" + 'es'];
              qn && qN['JD']["trackEvent"](qf['JD']["REPLAY_BRO" + "WSER"], qT['JD']["REFRESH_RE" + "PLAYS"], qV["sortDropMe" + 'nu']["value"]);
              qh["statusSpri" + 'te'] = new qC['AS']("loading re" + "plays...");
              var Nz = qj["statusSpri" + 'te']["window"];
              qP["addChild"](Nz);
              Nz["center"]();
              qp["loader"] = new qK['NU']();
              qm["loader"]["addEventLi" + "stener"](qI['Jh']['COMPLETE'], qk["replayData" + "Loaded"]);
              qs["loader"]['addEventLi' + "stener"](qt['BR']["IO_ERROR"], qB["IOErrorHan" + "dler"]);
              qu["loader"]["addEventLi" + "stener"](ql['Xt']["SECURITY_E" + "RROR"], qo["securityEr" + "rorHandler"]);
              qi["loader"]["load"](Nd);
            }
          });
          NW["backButton"] = (0x0, qK['Iz'])(q3['yw'], NW, 'backButton', {
            'fileName': 'GameUI',
            'mcName': "mc_feature" + "d_back_but" + "ton"
          });
          return NW;
        }
      }
      var No;
      var Ni;
      Ni = Nl;
      (No = NR)["prototype"] = Object["create"](Ni['prototype']);
      No['prototype']["constructo" + 'r'] = No;
      n6(No, Ni);
      var NE = NR["prototype"];
      NE["init"] = function () {
        this["mouseChild" + "ren"] = !0x1;
        this['shadow']["mouseEnabl" + 'ed'] = !0x1;
        this["refreshBut" + "ton"] = new n0();
        this['addChild'](this["refreshBut" + 'ton']);
        this["refreshBut" + "ton"]['x'] = this['shadow']['x'] + this["shadow"]["width"] + 0xa;
        this["refreshBut" + 'ton']['y'] = this["shadow"]['y'] - 0x16;
        this["refreshBut" + "ton"]['setGlow'](!0x1);
        this["buildDropM" + "enus"]();
        this["searchButt" + 'on'] = new q3['Ch']("search by " + "name", 0x3d88c7, 0x78);
        this["addChild"](this["searchButt" + 'on']);
        this["searchButt" + 'on']['x'] = this["shadow"]['x'];
        this["searchButt" + 'on']['y'] = this['shadow']['y'] - 0x1b;
        this["searchButt" + 'on']['y'] = this['shadow']['y'] + this["shadow"]["height"] + 0x6;
        q6['w']["user_id"] > 0x0 && (this["favoritesB" + 'utton'] = new q3['Ch']("list favor" + "ites", 0xfffe65, 0x78, 0x605344), this["favoritesB" + "utton"]['x'] = this["searchButt" + 'on']['x'] + this["searchButt" + 'on']["width"] + 0x6, this["favoritesB" + "utton"]['y'] = this['searchButt' + 'on']['y'], this["addChild"](this['favoritesB' + "utton"]), this["favoritesB" + "utton"]["addEventLi" + "stener"](q5['Cm']["MOUSE_UP"], this["listFavori" + "tes"]));
        this["backButton"]["addEventLi" + "stener"](q5['Cm']["MOUSE_UP"], this["backPress"]);
        this["searchButt" + 'on']["addEventLi" + "stener"](q5['Cm']["MOUSE_UP"], this['openSearch' + "Menu"]);
        this["refreshBut" + "ton"]["_pixiSprit" + 'e']['on']("pointertap", this["loadData"]["bind"](this));
        NR["savedSearc" + 'h'] > 0x0 && this["createSear" + "chTermButt" + 'on'](NR["savedSearc" + 'h']);
      };
      NE["activate"] = function () {
        this["mouseChild" + 'ren'] = !0x0;
        NR['levelDataA' + "rray"] ? this["buildList"]() : this["loadData"]();
      };
      NR["importLeve" + "lDataArray"] = function (NW) {
        NR['levelDataA' + "rray"] = NW;
        var NA = NR['levelDataA' + "rray"][0x0];
        NR["lastLevelI" + 'd'] = NA['id'];
        NR['currentPag' + 'e'] = 0x1;
        NR["currentSet"] = 0x1;
        NR['levelSearc' + 'h'] = null;
        NR["authorName" + 'Search'] = null;
        NR["_favorites"] = !0x1;
        NR['_favorites' + "UserId"] = 0x0;
        NR["_downloads"] = !0x1;
      };
      NR["importAuth" + 'or'] = function (NW, NA) {
        var Nr = NR["authorValu" + 'es']["indexOf"](NA);
        -0x1 == Nr ? (NR["authorValu" + 'es']["push"](NA), NR["authorDisp" + "lay"]["push"](NW), NR["currentDro" + "pSettings"] = [NR["authorValu" + 'es']["length"] - 0x1, 0x0, 0x3], NR["savedDropS" + "ettings"] = [NR["authorValu" + 'es']["length"] - 0x1, 0x0, 0x3], NR["currentDro" + "pStates"] = [0x1, 0x0, 0x0], NR["savedDropS" + "tates"] = [0x1, 0x0, 0x0]) : (NR["savedDropS" + "ettings"] = [Nr, 0x0, 0x3], NR["savedDropS" + "tates"] = [0x1, 0x0, 0x0]);
        NR['authorName' + "Search"] = null;
        NR["levelSearc" + 'h'] = null;
        NR["_favorites"] = !0x1;
        NR["_favorites" + "UserId"] = 0x0;
        NR["_downloads"] = !0x1;
        NR["savedSearc" + 'h'] = 0x0;
        NR["currentPag" + 'e'] = 0x1;
        NR["currentSet"] = 0x1;
        NR["urlVariabl" + 'es'] = null;
        NR["levelDataA" + "rray"] = null;
      };
      NR["importFavo" + "rites"] = function (NW, NA) {
        NR["_favorites" + "UserId"] = NA;
        NR["_favorites" + "UserName"] = NW;
        NR["_favorites"] = !0x1;
        NR["_downloads"] = !0x1;
        NR["authorName" + 'Search'] = null;
        NR["levelSearc" + 'h'] = null;
        NR["savedSearc" + 'h'] = 0x4;
        NR["currentPag" + 'e'] = 0x1;
        NR["currentSet"] = 0x1;
        NR["urlVariabl" + 'es'] = null;
        NR['levelDataA' + "rray"] = null;
      };
      NR["ownFavorit" + "esListed"] = function () {
        return !!NR["_favorites"] || NR["_favorites" + "UserId"] > 0x0 && NR["_favorites" + "UserId"] === q6['w']["user_id"];
      };
      NE["loadDownlo" + "ads"] = function () {};
      NE["loadDataOf" + "fset"] = function () {
        this["refreshBut" + "ton"]["setSpin"](!0x0);
        var NW = new q5['vg'](q6['w']["siteURL"] + ("get_level." + 'hw'));
        NW["method"] = q5['QI']["POST"];
        NW["data"] = NR['urlVariabl' + 'es'];
        NR["urlVariabl" + 'es']["page"] = NR["currentSet"];
        this["statusSpri" + 'te'] = new q3['AS']("loading le" + "vels...");
        var NA = this["statusSpri" + 'te']["window"];
        this['addChild'](NA);
        NA['center']();
        "get_all" == NR["urlVariabl" + 'es']["action"] && qN['JD']["trackEvent"](qN['JD']["LEVEL_BROW" + "SER"], qN['JD']["PAGE_LEVEL" + 'S'], this['sortDropMe' + 'nu']["value"] + '_' + this["uploadDrop" + "Menu"]["value"], NR["currentSet"]);
        this['listLoadPe' + "nding"] = !0x0;
        this["loader"] = new q5['NU']();
        this["loader"]["addEventLi" + "stener"](q5['Jh']["COMPLETE"], this["levelDataL" + 'oaded']);
        this["loader"]["addEventLi" + 'stener'](q5['BR']["IO_ERROR"], this["IOErrorHan" + "dler"]);
        this['loader']["addEventLi" + "stener"](q5['Xt']['SECURITY_E' + "RROR"], this["securityEr" + "rorHandler"]);
        this["loader"]["load"](NW);
      };
      NE["createProm" + "ptSprite"] = function (NW, NA) {
        var Nr = new q3['Um'](NW, NA)["window"];
        this["addChild"](Nr);
        Nr["center"]();
      };
      NE["removeLoad" + "erListener" + 's'] = function () {
        this["loader"]["removeEven" + "tListener"](q5['Jh']["COMPLETE"], this["levelDataL" + "oaded"]);
        this["loader"]['removeEven' + "tListener"](q5['Jh']["COMPLETE"], this["editFavori" + "tesComplet" + 'e']);
        this["loader"]["removeEven" + "tListener"](q5['BR']["IO_ERROR"], this['IOErrorHan' + "dler"]);
        this['loader']['removeEven' + "tListener"](q5['Xt']["SECURITY_E" + 'RROR'], this["securityEr" + 'rorHandler']);
      };
      NE["buildDropM" + "enus"] = function () {

        if ("LtkTb" === "uXzkl") {
          var NJ = this;
          void 0x0 === qE && (ql = null);
          function ND() {
            NJ["closeSessi" + 'onMenu'](null, !0x1);
            NJ['closeSessi' + "onReplayMe" + 'nu'](null, !0x1);
            NJ["disableSav" + 'e'] = !0x1;
            NJ['replayData' + "Object"] = null;
            NJ["removeVict" + "oryMovieCl" + "ipIfNeeded"]();
            NJ["trackResta" + 'rt']();
            var NS = NJ["session"]["character"];
            var Nd = NJ["session"]["level"];
            var Nz = NJ["session"]["containerS" + "prite"];
            var NF = NJ["session"]["levelVersi" + 'on'];
            NJ["session"]["die"]();
            NJ['session']["removeEven" + "tListener"](Ni['b9']['COMPLETED'], NJ["sessionCom" + "pleteHandl" + "erBind"]);
            NJ['parent']["removeChil" + 'd'](NJ['session']);
            (0x0, qJ['j_'])();
            var NM = new NJ['eM']();
            ND['w']["currentSes" + "sion"] = new Ng(Nz, qn['w']['CURRENT_VE' + "RSION"], NS, Nd, NF, qy['w']['useDebug']);
            NJ["session"] = qg['w']["currentSes" + "sion"];
            NJ["parent"]['addChildAt'](NJ["session"], 0x0);
            NJ["session"]["create"]();
            NJ['loadContai' + "ner"]["hide"]();
            NJ["session"]["addEventLi" + "stener"](qu['b9']["COMPLETED"], NJ["sessionCom" + "pleteHandl" + "erBind"]);
            NJ["lastSessio" + "nStartTime"] = NM["stop"]();
          }
          if (this["lastSessio" + "nStartTime"] < 0xc8) {
            ND();
          } else {
            var Ng = Ni["floor"](qJ["random"]() * this['restartMes' + "sages"]["length"]);
            this['loadContai' + "ner"]["setText"](this["restartMes" + "sages"][Ng]);
            this["loadContai" + "ner"]["show"](ND);
          }
        } else {
          var NW = q6['w']["user_id"];
          NW > 0x0 && -0x1 == NR["authorValu" + 'es']['indexOf'](NW) && (NR["authorValu" + 'es']["push"](NW), NR["authorDisp" + "lay"]["push"](q6['w']["username"]));
          this["authorDrop" + "Menu"] = new ql['f']("author:", NR["authorDisp" + "lay"], NR["authorValu" + 'es'], NR["savedDropS" + "ettings"][0x0]);
          this["sortDropMe" + 'nu'] = new ql['f']("sort by:", ["newest", "oldest", "play count", "rating"], ["newest", 'oldest', "plays", "rating"], NR["savedDropS" + "ettings"][0x1]);
          this["uploadDrop" + "Menu"] = new ql['f']("uploaded:", ["today", "this week", 'this\x20month', "anytime"], ["today", "week", "month", "anytime"], NR["savedDropS" + "ettings"][0x2]);
          this['addChild'](this["authorDrop" + "Menu"]);
          this["addChild"](this["sortDropMe" + 'nu']);
          this["addChild"](this["uploadDrop" + "Menu"]);
          this["authorDrop" + "Menu"]['y'] = this["sortDropMe" + 'nu']['y'] = this["uploadDrop" + "Menu"]['y'] = this["shadow"]['y'] - 0x15;
          this["authorDrop" + "Menu"]["addEventLi" + 'stener'](ql['f']["ITEM_SELEC" + "TED"], this["dropMenuSe" + "lected"]);
          this["sortDropMe" + 'nu']['addEventLi' + "stener"](ql['f']['ITEM_SELEC' + "TED"], this["dropMenuSe" + 'lected']);
          this["uploadDrop" + "Menu"]["addEventLi" + "stener"](ql['f']['ITEM_SELEC' + "TED"], this["dropMenuSe" + "lected"]);
          this["dropMenuAr" + "ray"] = [this["authorDrop" + "Menu"], this['sortDropMe' + 'nu'], this['uploadDrop' + "Menu"]];
          for (var NA = 0x0; NA < this["dropMenuAr" + "ray"]['length']; NA++) {
            NR["currentDro" + "pStates"][NA] = NR["savedDropS" + "tates"][NA];
          }
          this['organizeDr' + 'opMenus']();
        }
      };
      NE["organizeDr" + "opMenus"] = function () {
        for (var NW = this["shadow"]["width"] + this["shadow"]['x'], NA = this["dropMenuAr" + "ray"]["length"] - 0x1; NA > -0x1; NA--) {
          var Nr = this["dropMenuAr" + "ray"][NA];
          0x1 == NR["currentDro" + "pStates"][NA] ? (Nr["visible"] = !0x0, Nr["xLeft"] = NW - Nr["width"], NW = Nr["xLeft"] - NR["dropMenuSp" + "acing"]) : Nr["visible"] = !0x1;
        }
      };
      NE["updateRefr" + "eshButton"] = function (NW) {
        void 0x0 === NW && (NW = !0x1);
        for (var NA = 0x0; NA < this["dropMenuAr" + "ray"]["length"]; NA++) {
          NR["currentDro" + 'pSettings'][NA] != NR["savedDropS" + "ettings"][NA] && (NW = !0x0);
        }
        this["refreshBut" + "ton"]["setGlow"](NW);
      };
      NE["enterDownl" + "oadsMode"] = function () {};
      NE['createSear' + "chTermButt" + 'on'] = function (NW) {
        var NA;
        var Nr;
        var NJ;
        0x1 == NW ? (NR['levelSearc' + 'h'] = NR["savedTerm"], NA = "level name" + ": '" + NR["savedTerm"] + '\x27', Nr = 0x3d88c7, NJ = 0xffffff) : 0x2 == NW ? (NR["authorName" + 'Search'] = NR["savedTerm"], NA = "author nam" + "e: '" + NR["savedTerm"] + '\x27', Nr = 0xfd8181, NJ = 0xffffff) : 0x3 == NW ? (NA = 'favorites', Nr = 0xfffe65, NJ = 0x605344) : 0x4 == NW && (NA = "favorites:" + '\x20\x27' + NR["_favorites" + "UserName"] + '\x27', Nr = 0xfffe65, NJ = 0x605344);
        this["searchTerm" + "Button"] = new n5(NA, Nr, 0x78, NJ);
        this["addChild"](this["searchTerm" + "Button"]);
        this["searchTerm" + "Button"]['x'] = this["shadow"]['x'];
        this["searchTerm" + "Button"]['y'] = this["shadow"]['y'] - 0x1b;
        NR["currentDro" + "pStates"] = NW >= 0x3 ? [0x0, 0x0, 0x0] : [0x0, 0x1, 0x0];
        this["organizeDr" + "opMenus"]();
        this["searchTerm" + "Button"]["addEventLi" + "stener"](q5['Cm']["MOUSE_UP"], this["removeSear" + "chTerm"]);
      };
      NE["updateAuth" + "ors"] = function (NW, NA) {
        -0x1 == NR['authorValu' + 'es']["indexOf"](NA) && (NR["authorValu" + 'es']["push"](NA), NR["authorDisp" + "lay"]["push"](NW), this["authorDrop" + "Menu"]['addValue'](NW, NA));
      };
      NE['buildList'] = function () {
        var NW = (NR["currentPag" + 'e'] - 0x1) * NR["pageLength"];
        var NA = NW + NR["pageLength"];
        NA = Math['min'](NA, NR["levelDataA" + "rray"]["length"]);
        var Nr = NR["levelDataA" + "rray"]["slice"](NW, NA);
        this["listContai" + "ner"] = new q5['kx']();
        this["list"] = new qY(Nr, NR["lastLevelI" + 'd'], NR["selectedCh" + "aracter"]);
        NR["lastLevelI" + 'd'] = -0x1;
        this["listMask"] = new q5['kx']();
        this["listContai" + "ner"]['x'] = this["listHeader"]['x'];
        this["listContai" + "ner"]['y'] = this["listHeader"]['y'] + this["listHeader"]["height"];
        this["listMask"]["graphics"]["beginFill"](0xff0000);
        this["listMask"]["graphics"]['drawRect'](0x0, 0x0, this["shadow"]["width"], this["shadow"]["height"] - this["listHeader"]["height"]);
        this["listMask"]['graphics']["endFill"]();
        this["list"]["mask"] = this["listMask"];
        this["addChildAt"](this["listContai" + "ner"], this['getChildIn' + "dex"](this["listHeader"]));
        this["listContai" + "ner"]["addChild"](this["list"]);
        this["listContai" + "ner"]["addChild"](this["listMask"]);
        this["list"]["mouseEnabl" + 'ed'] = !0x0;
        this["list"]["addEventLi" + "stener"](qY["UPDATE_SCR" + "OLLER"], this["updateScro" + "ller"]);
        this["list"]["addEventLi" + "stener"](qY["FACE_SELEC" + "TED"], this["faceSelect" + 'ed']);
        window["addEventLi" + 'stener']("keydown", this['list']["keyDownHan" + "dler"], !0x1);
        this["list"]["addEventLi" + "stener"](qu['$T']["SESSION"], this["cloneAndDi" + "spatchEven" + 't']);
        this["list"]["addEventLi" + 'stener'](qu['$T']["EDITOR"], this["cloneAndDi" + "spatchEven" + 't']);
        this["list"]['addEventLi' + "stener"](qu['$T']["REPLAY_BRO" + "WSER"], this["cloneAndDi" + 'spatchEven' + 't']);
        this["list"]["addEventLi" + "stener"](qu['dg']["USER"], this["getLevelsF" + "romAuthor"]);
        this["list"]["addEventLi" + "stener"](qu['dg']["ADD_TO_FAV" + "ORITES"], this['editFavori' + "tes"]);
        this["list"]["addEventLi" + "stener"](qu['dg']["REMOVE_FRO" + "M_FAVORITE" + 'S'], this["editFavori" + "tes"]);
        this["scrollBar"] = new qv['X'](this["list"], this["listMask"], 0x16);
        this['scrollBar']['x'] = this["shadow"]['x'] + this["shadow"]["width"] + 0xa;
        this["scrollBar"]['y'] = this["listContai" + "ner"]['y'];
        this['addChildAt'](this["scrollBar"], 0x2);
        this["faceSelect" + 'ed']();
        this["pageFlippe" + 'r'] && (this["pageFlippe" + 'r']["die"](), this["pageFlippe" + 'r']["destroy"](), this['pageFlippe' + 'r']["removeEven" + "tListener"](qO["FLIP_PAGE"], this["flipPage"]), this["removeChil" + 'd'](this["pageFlippe" + 'r']), this["pageFlippe" + 'r'] = null);
        var NJ = NR["levelDataA" + "rray"]["length"];
        if (0x0 == NJ) {
          this["createProm" + "ptSprite"]("no levels " + 'found\x20usin' + "g these pa" + "rameters", 'ok');
        } else {
          var ND = NJ % NR["setLength"] > 0x0;
          this["pageFlippe" + 'r'] = new qO(NR["currentPag" + 'e'], NR["pageLength"], NJ, ND);
          this["addChild"](this['pageFlippe' + 'r']);
          this["pageFlippe" + 'r']['x'] = this["shadow"]['x'] + this['shadow']["width"];
          this["pageFlippe" + 'r']['y'] = this["shadow"]['y'] + this['shadow']["height"] + 0x7;
          this["pageFlippe" + 'r']["addEventLi" + "stener"](qO["FLIP_PAGE"], this["flipPage"]);
        }
      };
      NE["killList"] = function () {
        window["removeEven" + "tListener"]("keydown", this["list"]["keyDownHan" + "dler"], !0x1);
        this["list"]["removeEven" + "tListener"](qY["UPDATE_SCR" + "OLLER"], this["updateScro" + "ller"]);
        this["list"]["removeEven" + 'tListener'](qY["FACE_SELEC" + "TED"], this["faceSelect" + 'ed']);
        this["list"]["removeEven" + "tListener"](qu['$T']["SESSION"], this["cloneAndDi" + "spatchEven" + 't']);
        this["list"]["removeEven" + "tListener"](qu['$T']["EDITOR"], this['cloneAndDi' + "spatchEven" + 't']);
        this["list"]["removeEven" + "tListener"](qu['$T']["REPLAY_BRO" + "WSER"], this["cloneAndDi" + "spatchEven" + 't']);
        this["list"]["removeEven" + "tListener"](qu['dg']['USER'], this["getLevelsF" + "romAuthor"]);
        this['list']['removeEven' + "tListener"](qu['dg']["ADD_TO_FAV" + "ORITES"], this["editFavori" + "tes"]);
        this['list']['removeEven' + "tListener"](qu['dg']["REMOVE_FRO" + "M_FAVORITE" + 'S'], this["editFavori" + "tes"]);
        this["list"]["die"]();
        this['list']["destroy"]();
        this["list"] = null;
        this["scrollBar"]["die"]();
        this["removeChil" + 'd'](this["scrollBar"]);
        this["scrollBar"] = null;
        this["removeChil" + 'd'](this['listContai' + "ner"]);
        this["listContai" + "ner"] = null;
        this["listMask"] = null;
      };
      NE['die'] = function () {
        "XUDWk" !== "CGOyq" ? (this["dead"] = !0x0, this["authorDrop" + "Menu"]["removeEven" + "tListener"](ql['f']["ITEM_SELEC" + "TED"], this["dropMenuSe" + 'lected']), this["sortDropMe" + 'nu']["removeEven" + "tListener"](ql['f']["ITEM_SELEC" + "TED"], this['dropMenuSe' + "lected"]), this["uploadDrop" + 'Menu']["removeEven" + "tListener"](ql['f']["ITEM_SELEC" + 'TED'], this["dropMenuSe" + "lected"]), this["authorDrop" + "Menu"]["die"](), this['sortDropMe' + 'nu']["die"](), this["uploadDrop" + "Menu"]["die"](), this['pageFlippe' + 'r'] && (this['pageFlippe' + 'r']["die"](), this["pageFlippe" + 'r']["removeEven" + "tListener"](qO["FLIP_PAGE"], this["flipPage"])), this["searchButt" + 'on']["removeEven" + "tListener"](q5['Cm']["MOUSE_UP"], this["openSearch" + "Menu"]), this["backButton"]["removeEven" + 'tListener'](q5['Cm']['MOUSE_UP'], this["backPress"]), this["favoritesB" + "utton"] && this["favoritesB" + "utton"]["removeEven" + "tListener"](q5['Cm']["MOUSE_UP"], this['listFavori' + "tes"]), this['searchTerm' + "Button"] && this["searchTerm" + "Button"]["removeEven" + "tListener"](q5['Cm']["MOUSE_UP"], this['removeSear' + "chTerm"]), this["refreshBut" + "ton"]["_pixiSprit" + 'e']['off']("pointertap"), this["list"] && this["killList"]()) : (q6["prototype"]["checkKeySt" + "ates"]["call"](this), this["kid"]["dead"] || (this["kid"]["userVehicl" + 'e'] ? this["kid"]["userVehicl" + 'e']["operateKey" + 's'](this["_session"]["iteration"], this["leftPresse" + 'd'], this["rightPress" + 'ed'], this["upPressed"], this['downPresse' + 'd'], this["spacePress" + 'ed'], this["shiftPress" + 'ed'], this["ctrlPresse" + 'd'], this['zPressed']) : (this["leftPresse" + 'd'] ? this['rightPress' + 'ed'] ? this["kid"]["leftAndRig" + "htActions"]() : this["kid"]["leftPresse" + "dActions"]() : this["rightPress" + 'ed'] ? this['kid']["rightPress" + "edActions"]() : this["kid"]["leftAndRig" + "htActions"](), this["upPressed"] ? this["downPresse" + 'd'] ? this["kid"]["upAndDownA" + "ctions"]() : this["kid"]["upPressedA" + "ctions"]() : this['downPresse' + 'd'] ? this["kid"]["downPresse" + "dActions"]() : this["kid"]["upAndDownA" + "ctions"](), this["spacePress" + 'ed'] ? this["kid"]["spacePress" + "edActions"]() : this["kid"]['spaceNullA' + "ctions"](), this["shiftPress" + 'ed'] ? this["kid"]['shiftPress' + "edActions"]() : this["kid"]["shiftNullA" + "ctions"](), this["ctrlPresse" + 'd'] ? this["kid"]["ctrlPresse" + "dActions"]() : this['kid']["ctrlNullAc" + "tions"](), this["zPressed"] ? this["kid"]["zPressedAc" + 'tions']() : this['kid']["zNullActio" + 'ns']())));
      };
      NE["destroy"] = function () {
        for (var NW = ["playCountL" + 'abel', "titleLabel", "createdOnL" + 'abel', 'authorLabe' + 'l', "ratingLabe" + 'l'], NA = 0x0; NA < NW["length"]; NA++) {
          if ("wkJhN" === "mZHzf") {
            this["_session"] = q6;
            this["kid"] && (this["kid"]['session'] = this["_session"]);
          } else {
            var Nr = NW[NA];
            this["__mc"]["listHeader"][Nr]['destroy']();
          }
        }
        Nl['prototype']["destroy"]["call"](this);
      };
      return NR;
    } else {
      var NA = this["pogoJoint"]['GetJointTr' + "anslation"]();
      var Nr = -0x46 * NA;
      if (NA < 0x0) {
        if (Nr > this["pogoJoint"]["GetMotorSp" + 'eed']()) {
          var NJ = qA["min"](0x1, qN["max"](-NA * this["m_physScal" + 'e'] / 0x14, 0x0));
          qc['m']["instance"]["playAreaSo" + "undInstanc" + 'e']("PogoReleas" + 'e', this["frameBody"], NJ);
        }
        this['pogoJoint']["SetMotorSp" + "eed"](Nr);
      } else {
        this["pogoJoint"]["SetMotorSp" + 'eed'](0x0);
        this["pogoJoint"]["m_lowerTra" + "nslation"] = 0x0;
        this["charging"] = !0x1;
        this["jumpFrames"] = this["jumpFrames" + "Max"];
      }
    }
  }(q5['kx']);
  n7["setLength"] = 0x1f4;
  n7["pageLength"] = 0x32;
  n7["dropMenuSp" + "acing"] = 0xa;
  n7['currentDro' + "pSettings"] = [0x0, 0x0, 0x1];
  n7["savedDropS" + "ettings"] = [0x0, 0x0, 0x1];
  n7['currentDro' + "pStates"] = [0x1, 0x1, 0x1];
  n7["savedDropS" + "tates"] = [0x1, 0x1, 0x1];
  n7["savedSearc" + 'h'] = 0x0;
  n7["selectedCh" + "aracter"] = -0x1;
  n7["authorDisp" + "lay"] = ["everyone"];
  n7['authorValu' + 'es'] = [0x0];
  n7["lastLevelI" + 'd'] = -0x1;
  n7["_favorites" + "UserId"] = 0x0;
  n7["currentSet"] = 0x1;
  n7["currentPag" + 'e'] = 0x1;
  var n8 = q2(0x1814b);
  var n9 = q2(0x11d24);
  function nq(Nl, No) {


    if ("WUhDQ" !== "WUhDQ") {
      var NE = (qk["currentPag" + 'e'] - 0x1) * q4["pageLength"];
      var NR = NE + qJ["pageLength"];
      NR = qr["min"](NR, qj['replayData' + "Array"]["length"]);
      var NW = qP["replayData" + "Array"]["slice"](NE, NR);
      this["listContai" + 'ner'] = new qn['kx']();
      this["list"] = new qy(NW, qg["lastReplay" + 'Id'], qu['selectedCh' + "aracter"], qd["hideInnacc" + 'urate']);
      qm['lastReplay' + 'Id'] = -0x1;
      this["listMask"] = new qa['kx']();
      this["listContai" + "ner"]['x'] = this['listHeader']['x'];
      this["listContai" + "ner"]['y'] = this['listHeader']['y'] + this["listHeader"]["height"];
      this['listMask']["graphics"]["beginFill"](0xff0000);
      this["listMask"]['graphics']["drawRect"](0x0, 0x0, this["shadow"]['width'], this["shadow"]["height"] - this["listHeader"]["height"]);
      this["listMask"]["graphics"]["endFill"]();
      this['list']["mask"] = this["listMask"];
      this["addChildAt"](this["listContai" + 'ner'], this['getChildIn' + 'dex'](this["listHeader"]));
      this["listContai" + "ner"]["addChild"](this["list"]);
      this['listContai' + 'ner']['addChild'](this["listMask"]);
      this["list"]["addEventLi" + "stener"](qh['UPDATE_SCR' + "OLLER"], this['updateScro' + "ller"]);
      this['list']["addEventLi" + "stener"](qq["FACE_SELEC" + "TED"], this["faceSelect" + 'ed']);
      this["list"]["addEventLi" + 'stener'](qZ['$T']["SESSION"], this['cloneAndDi' + "spatchEven" + 't']);
      this["scrollBar"] = new qo['X'](this["list"], this["listMask"], 0x16);
      this['scrollBar']['x'] = this['shadow']['x'] + this["shadow"]["width"] + 0xa;
      this["scrollBar"]['y'] = this["listContai" + "ner"]['y'];
      this["addChildAt"](this['scrollBar'], 0x2);
      this["faceSelect" + 'ed']();
      this["pageFlippe" + 'r'] && (this["pageFlippe" + 'r']['die'](), this["pageFlippe" + 'r']["destroy"](), this['pageFlippe' + 'r']["removeEven" + "tListener"](qK["FLIP_PAGE"], this["flipPage"]), this["removeChil" + 'd'](this["pageFlippe" + 'r']), this['pageFlippe' + 'r'] = null);
      var NA = Nl["replayData" + "Array"]['length'];
      if (0x0 == NA) {
        var Nr = new qD['Um']("no replays" + " found usi" + "ng these p" + "arameters", 'ok')["window"];
        this['addChild'](Nr);
        Nr['center']();
      } else {
        var NJ = NA % qw["setLength"] > 0x0;
        this["pageFlippe" + 'r'] = new q0(q1['currentPag' + 'e'], q2['pageLength'], NA, NJ);
        this["addChild"](this["pageFlippe" + 'r']);
        this["pageFlippe" + 'r']['x'] = this["shadow"]['x'] + this["shadow"]["width"];
        this["pageFlippe" + 'r']['y'] = this["shadow"]['y'] + this["shadow"]['height'] + 0x7;
        this['pageFlippe' + 'r']["addEventLi" + "stener"](q3["FLIP_PAGE"], this["flipPage"]);
      }
    } else {
      nq = Object["setPrototy" + 'peOf'] ? Object["setPrototy" + "peOf"]["bind"]() : function (NE, NR) {
        NE["__proto__"] = NR;
        return NE;
      };
      return nq(Nl, No);
    }
  }
  var nn = function (Nl) {

    if ("FymdN" !== "FymdN") {
      this["characterM" + "enu"]["die"]();
      this["parent"]["removeChil" + 'd'](this["characterM" + "enu"]);
      this["characterM" + "enu"]['removeEven' + 'tListener'](q6["CHARACTER_" + "SELECTED"], this['loadSessio' + "nBind"]);
      this["characterM" + 'enu'] = null;
    } else {
      function NW() {


        var NA;
        (NA = Nl["call"](this) || this)["topY"] = 0x46;
        NA['listSpacin' + 'g'] = 0xa;
        NA["scrollSpee" + 'd'] = 0x0;
        NA["scrollAcce" + 'l'] = 0x1;
        NA["scrollMaxS" + "peed"] = 0xa;
        NA["renderedLe" + "velButtons" + 'UntilIndex'] = -0x1;
        NA["startY"] = 0x0;
        NA["mobileTouc" + "hedDown"] = !0x1;
        NA["mobileLast" + "TouchDiff"] = 0x0;
        NA['completedL' + 'evelIds'] = null;
        NA['dataLoadCo' + "mplete"] = function (ND) {
          if ("HabjQ" !== 'YsPlS') {
            NA["removeLoad" + "erListener" + 's']();
            var Ng;
            var NS = String(NA["loader"]['data']);
            var Nd = NS["substr"](0x0, 0x8);
            if (Nd["indexOf"]("<html>") > -0x1) {
              Ng = new q3['Um']("There was " + "an unexpec" + "ted system" + '\x20Error', 'oh');
            } else {
              if (Nd["indexOf"]("failure") > -0x1) {
                if ('ZofzQ' !== "ZofzQ") {
                  if (this["_currentTo" + 'ol']) {
                    if (this["_currentTo" + 'ol'] == qR) {
                      return;
                    }
                    this["_currentTo" + 'ol']["deactivate"]();
                  }
                  this["_currentTo" + 'ol'] = qT;
                  this["_currentTo" + 'ol']["activate"]();
                } else {
                  var Nz = NS["split"](':');
                  Ng = "invalid_ac" + "tion" == Nz[0x1] ? new q3['Um']("An invalid" + " action wa" + "s passed (" + 'you\x20really' + " shouldn't" + " ever be s" + "eeing this" + ').', 'ok') : "bad_param" == Nz[0x1] ? new q3['Um']("A bad para" + "meter was " + 'passed\x20(yo' + 'u\x20really\x20s' + 'houldn\x27t\x20e' + "ver be see" + "ing this).", 'ok') : "app_error" == Nz[0x1] ? new q3['Um']("Sorry, the" + "re was an " + "applicatio" + "n error. I" + "t was most" + " likely da" + "tabase rel" + "ated. Plea" + "se try aga" + "in in a mo" + "ment.", 'ok') : new q3['Um']("An unknown" + '\x20Error\x20has' + '\x20occurred.', 'oh');
                }
              }
            }
            if (Ng) {
              var NF = Ng["window"];
              NA["addChild"](NF);
              return void NF["center"]();
            }
            NW['levelDataA' + "rray"] = NW["parseFeatu" + "redData"](NS);
            if (!NW["levelDataA" + "rray"]) {
              var NM = (Ng = new q3['Um']("There are " + "no feature" + "d levels.", 'oh'))['window'];
              NA["addChild"](NM);
              return void NM["center"]();
            }
            NA["buildList"]();
          } else {
            var NZ;
            void 0x0 === ql && (q3 = 0x64);
            (NZ = NW["call"](this, qs, qf) || this)["startX"] = NM;
            NZ["startY"] = NS;
            NZ["initialRan" + 'ge'] = NA;
            NZ["halfInitia" + "lRange"] = qB / 0x2;
            NZ["speedRange"] = qW;
            NZ["halfSpeedR" + 'ange'] = qH / 0x2;
            NZ["threeQuart" + "erSpeedRan" + 'ge'] = 0x3 * qk / 0x4;
            Ng["assign"](NZ, qJ);
            NZ["createPart" + "icles"]();
            return NZ;
          }
        };
        NA['securityEr' + "rorHandler"] = function (ND) {
          if ('WCBNT' === "hHkPM") {
            var NS = new qF['$T'](qT['$T']['MAIN_MENU']);
            NS["target"] = this;
            this["dispatchEv" + "ent"](NS);
          } else {
            NA["removeLoad" + "erListener" + 's']();
          }
        };
        NA['startListS' + "croll"] = function (ND) {
          NA["list"]["removeEven" + 'tListener'](q5['Jh']["ENTER_FRAM" + 'E'], NA['stopScroll']);
          NA['list']["addEventLi" + "stener"](q5['Jh']["ENTER_FRAM" + 'E'], NA["listScroll"]);
        };
        NA["stopListSc" + "roll"] = function (ND) {
          NA['list']["removeEven" + "tListener"](q5['Jh']["ENTER_FRAM" + 'E'], NA["listScroll"]);
          NA["list"]["addEventLi" + "stener"](q5['Jh']["ENTER_FRAM" + 'E'], NA["stopScroll"]);
        };
        NA["stopScroll"] = function (ND) {
          if ('IYvhl' === "PNZAE") {
            return this['_y'];
          } else {
            var Ng = 0.5 * ND["delta"];
            NA["scrollSpee" + 'd'] > 0x0 ? NA["scrollSpee" + 'd'] -= 0x1 : NA["scrollSpee" + 'd'] < 0x0 ? NA["scrollSpee" + 'd'] += 0x1 : NA["list"]["removeEven" + "tListener"](q5['Jh']['ENTER_FRAM' + 'E'], NA["stopScroll"]);
            NA['list']['y'] += NA["scrollSpee" + 'd'] * Ng;
            NA["checkScrol" + "lLimits"]();
            NA["createLeve" + "lButtonsIn" + 'View']();
          }
        };
        NA["listScroll"] = function (ND) {
          var Ng = 0.5 * ND["delta"];
          var NS = NA["scrollAcce" + 'l'];
          var Nd = 0x1;
          q6['w']["use60FPS"] && (NS /= 0x2, Nd /= 0x2);
          var Nz = NA["listHitAre" + 'a']["mouseY"] / NA["listHitAre" + 'a']["height"];
          Nz > 0.75 && NA["scrollSpee" + 'd'] > -NA["scrollMaxS" + "peed"] ? NA["scrollSpee" + 'd'] -= NS : Nz < 0.25 && NA["scrollSpee" + 'd'] < NA["scrollMaxS" + "peed"] ? NA["scrollSpee" + 'd'] += NS : NA["scrollSpee" + 'd'] > 0x0 ? NA["scrollSpee" + 'd'] -= Nd : NA["scrollSpee" + 'd'] < 0x0 && (NA["scrollSpee" + 'd'] += Nd);
          NA["list"]['y'] += NA["scrollSpee" + 'd'] * Ng;
          NA["createLeve" + "lButtonsIn" + "View"]();
          NA["checkScrol" + "lLimits"]();
        };
        NA["mouseUpHan" + 'dler'] = function (ND) {
          if (ND["target"] instanceof qB) {
            NA["selectItem"](ND["target"]);
          } else {
            switch (ND["target"]) {
              case NA["backBtn"]:
                n9['J']["trackEvent"](n9['J']["FEATURED_B" + 'ROWSER'], n9['J']["GOTO_MAIN_" + 'MENU']);
                NA["dispatchEv" + "ent"](new qu['$T'](qu['$T']["MAIN_MENU"]));
                break;
              case NA["browserBtn"]:
                n9['J']['trackEvent'](n9['J']["FEATURED_B" + "ROWSER"], n9['J']["GOTO_LEVEL" + "_BROWSER"]);
                NA["dispatchEv" + "ent"](new qu['$T'](qu['$T']["LEVEL_BROW" + "SER"]));
                break;
              case NA["playBtn"]:
                if (!NA["currentIte" + 'm']) {
                  return;
                }
                var Ng = NW["lastItemIn" + "dex"] = NA["featuredLi" + 'st']["indexOf"](NA["currentIte" + 'm']);
                var NS = NW['levelDataA' + 'rray'][Ng];
                n9['J']["trackEvent"](n9['J']["FEATURED_B" + "ROWSER"], n9['J']["LOAD_LEVEL"], 'levelID_' + NS['id']);
                NA["dispatchEv" + "ent"](new qu['$T'](qu['$T']['SESSION'], NS));
                break;
              case NA["viewReplay" + "sBtn"]:
                if (!NA["currentIte" + 'm']) {
                  return;
                }
                Ng = NW["lastItemIn" + "dex"] = NA["featuredLi" + 'st']['indexOf'](NA['currentIte' + 'm']);
                NS = NW["levelDataA" + "rray"][Ng];
                n9['J']["trackEvent"](n9['J']["FEATURED_B" + "ROWSER"], n9['J']["GOTO_REPLA" + "Y_BROWSER"], "levelID_" + NS['id']);
                var Nd = new qu['$T'](qu['$T']["REPLAY_BRO" + "WSER"], NS);
                Nd["target"] = NA;
                NA["dispatchEv" + 'ent'](Nd);
                break;
              case NA["authorSpri" + 'te']:
                if (NA["currentAut" + "horId"]) {
                  var Nz = new q5['vg'](q6['w']["siteURL"] + ("profile.tj" + "f?uid=") + NA["currentAut" + "horId"]);
                  (0x0, q5['is'])(Nz, "_blank");
                  n9['J']["trackEvent"](n9['J']["FEATURED_B" + "ROWSER"], n9['J']["GOTO_USER_" + "PAGE"], "userID_" + NA["currentAut" + "horId"]);
                }
                break;
              case NA["otherLevel" + "sBtn"]:
                NA['currentAut' + "horId"] && (q3['uO']['instance']["hide"](), n7["importAuth" + 'or'](NA["currentAut" + "horName"], NA["currentAut" + "horId"]), n9['J']["trackEvent"](n9['J']["FEATURED_B" + "ROWSER"], n9['J']["GET_LEVELS" + "_BY_AUTHOR"], "authorID_" + NA['currentAut' + "horId"]), NA["dispatchEv" + "ent"](new qu['$T'](qu['$T']["LEVEL_BROW" + "SER"])));
            }
          }
        };
        NA["mouseOverH" + "andler"] = function (ND) {
          ND["target"] === NA["otherLevel" + "sBtn"] && NA["currentAut" + "horId"] && q3['uO']["instance"]["show"]("view other" + '\x20levels\x20by' + " this auth" + 'or', NA['otherLevel' + "sBtn"], 0x5);
        };
        NA['beginComme' + "ntScroll"] = function (ND) {
          NA["commentsBg"]["addEventLi" + 'stener'](q5['Jh']['ENTER_FRAM' + 'E'], NA["scrollComm" + "ents"]);
        };
        NA["endComment" + "Scroll"] = function (ND) {
          NA["commentsBg"]["removeEven" + "tListener"](q5['Jh']['ENTER_FRAM' + 'E'], NA["scrollComm" + "ents"]);
        };
        NA["scrollComm" + "ents"] = function (ND) {
          var Ng = 0.5 * ND['delta'];
          var NS = NA["commentsBg"]['height'] / 0x2;
          var Nd = (NS - NA["commentsBg"]['mouseY']) / NS * 0xa * Ng;
          NA["commentsTe" + 'xt']['y'] += Nd;
          NA["commentsTe" + 'xt']['y'] + NA["commentsTe" + 'xt']["height"] < NA["commentsBg"]['y'] + NA["commentsBg"]["height"] && (NA["commentsTe" + 'xt']['y'] = NA["commentsBg"]['y'] + NA["commentsBg"]['height'] - NA["commentsTe" + 'xt']['height']);
          NA["commentsTe" + 'xt']['y'] > NA["commentsBg"]['y'] + 0x5 && (NA["commentsTe" + 'xt']['y'] = NA["commentsBg"]['y'] + 0x5);
        };
        var Nr = (0x0, qK['zI'])("GameUI", "mc_Feature" + "dMenu");
        NA['mc'] = Nr;
        var NJ = [];
        Nr["children"]["forEach"](function (ND) {
          if ("NWJvo" !== 'bGRNN') {
            var Ng;
            ND instanceof qV['j7'] ? (Ng = new q5['j7'](null))["setPixiMov" + "ieClip"](ND) : Ng = new q5['kx'](ND);
            ND["name"] && (Ng["name"] = Ng["pixiSprite"]["name"] = ND["name"], NA[ND["name"]] = Ng);
            NJ["push"](Ng);
          } else {
            qT["__proto__"] = qR;
            return qz;
          }
        });
        NJ["forEach"](function (ND) {
          if ("FhXlR" !== "uwnAL") {
            NA["addChild"](ND);
          } else {
            var NS = this['head1Body']["GetMass"]() / qW['DEF_HEAD_M' + "ASS"];
            var Nd = this["chestBody"]["GetMass"]() / qH['DEF_CHEST_' + "MASS"];
            var Nz = this["pelvisBody"]["GetMass"]() / qk["DEF_PELVIS" + "_MASS"];
            var NF = this["upperArm1B" + "ody"]['GetMass']() / Nr["DEF_UPPERA" + "RM_MASS"];
            var NM = this["lowerArm1B" + "ody"]["GetMass"]() / qJ["DEF_LOWERA" + "RM_MASS"];
            var NH = this["upperLeg1B" + "ody"]["GetMass"]() / qr["DEF_UPPERL" + "EG_MASS"];
            var Nb = this["lowerLeg1B" + "ody"]["GetMass"]() / qj["DEF_LOWERL" + "EG_MASS"];
            this['headSmashL' + "imit"] = qP["DEF_HEAD_S" + "MASH"] * NS;
            this["chestSmash" + "Limit"] = qn["DEF_CHEST_" + "SMASH"] * Nd;
            this["pelvisSmas" + "hLimit"] = qy["DEF_PELVIS" + "_SMASH"] * Nz;
            this["footSmashL" + "imit"] = qg["DEF_FOOT_S" + "MASH"] * Nb;
            this["neckBreakL" + "imit"] = qu["round"](0x55 * NS);
            this["spineLimit"] = qd["round"](0x69 * NS);
            this["torsoBreak" + "Limit"] = qm["round"](0xb4 * Nz);
            this["intestineL" + "imit"] = qa["round"](0x104 * Nz);
            this["shoulderBr" + "eakLimit"] = qh["round"](0x4b * NF);
            this["shoulderSn" + "apLimit"] = qq["round"](0x5a * NF);
            this['hipBreakLi' + "mit"] = qZ["round"](0x5f * NH);
            this["hipSnapLim" + 'it'] = qo['round'](0x6e * NH);
            this["elbowBreak" + "Limit"] = qK['round'](0x46 * NM);
            this["elbowLigam" + "entLimit"] = ND["round"](0x50 * NM);
            this['kneeBreakL' + "imit"] = NJ['round'](0x50 * Nb);
            this["kneeLigame" + "ntLimit"] = qb["round"](0x5f * Nb);
          }
        });
        NA["nameText"] = q5['A_']["spriteToTe" + "xtField"](NA["nameText"], NA);
        NA["authorText"] = q5['A_']['spriteToTe' + "xtField"](NA["authorText"], NA);
        NA["charText"] = q5['A_']["spriteToTe" + 'xtField'](NA["charText"], NA);
        NA["commentsTe" + 'xt'] = q5['A_']["spriteToTe" + 'xtField'](NA["commentsTe" + 'xt'], NA);
        NA["voteText"] = q5['A_']["spriteToTe" + 'xtField'](NA["voteText"], NA);
        NA["playText"] = q5['A_']["spriteToTe" + "xtField"](NA["playText"], NA);
        NA["voteStars"] = (0x0, qK['Iz'])(qS, NA, "voteStars");
        NA["playBtn"] = (0x0, qK['Iz'])(q3['yw'], NA, "playBtn", {
          'fileName': "GameUI",
          'mcName': "mc_feature" + "d_play_but" + "ton"
        });
        NA["viewReplay" + "sBtn"] = (0x0, qK['Iz'])(q3['yw'], NA, 'viewReplay' + "sBtn", {
          'fileName': "GameUI",
          'mcName': "mc_feature" + "d_vr_butto" + 'n'
        });
        NA["backBtn"] = (0x0, qK['Iz'])(q3['yw'], NA, "backBtn", {
          'fileName': "GameUI",
          'mcName': "mc_feature" + "d_back_but" + "ton"
        });
        NA["browserBtn"] = (0x0, qK['Iz'])(q3['yw'], NA, 'browserBtn', {
          'fileName': "GameUI",
          'mcName': "mc_feature" + "d_ulb_butt" + 'on'
        });
        NA["otherLevel" + "sBtn"] && (NA["otherLevel" + "sBtn"]["mouseChild" + 'ren'] = !0x0, NA["otherLevel" + 'sBtn']["buttonMode"] = !0x0);
        return NA;
      }
      var No;
      var Ni;
      Ni = Nl;
      (No = NW)["prototype"] = Object['create'](Ni["prototype"]);
      No['prototype']["constructo" + 'r'] = No;
      nq(No, Ni);
      var NE = NW["prototype"];
      NE["init"] = function () {
        this["mouseChild" + "ren"] = !0x1;
        this['formatText' + "Fields"]();
        NW["levelDataA" + "rray"] ? this["buildList"]() : this["loadFeatur" + "edData"]();
        this["playBtn"]["addEventLi" + "stener"](q5['Cm']["MOUSE_UP"], this["mouseUpHan" + "dler"]);
        this["viewReplay" + 'sBtn']["addEventLi" + "stener"](q5['Cm']["MOUSE_UP"], this["mouseUpHan" + "dler"]);
        this["backBtn"]['addEventLi' + "stener"](q5['Cm']["MOUSE_UP"], this["mouseUpHan" + "dler"]);
        this["browserBtn"]["addEventLi" + "stener"](q5['Cm']["MOUSE_UP"], this["mouseUpHan" + "dler"]);
        this["otherLevel" + "sBtn"] && (this["otherLevel" + "sBtn"]["addEventLi" + "stener"](q5['Cm']["MOUSE_UP"], this["mouseUpHan" + "dler"]), this["otherLevel" + "sBtn"]["addEventLi" + "stener"](q5['Cm']["MOUSE_OVER"], this["mouseOverH" + "andler"]));
      };
      NE["activate"] = function () {
        this['mouseChild' + "ren"] = !0x0;
      };
      NE["formatText" + "Fields"] = function () {
        this["authorText"] && (this["authorSpri" + 'te'] = new q5['kx'](), this["authorSpri" + 'te']['x'] = this["authorText"]['x'], this["authorSpri" + 'te']['y'] = this["authorText"]['y'], this["authorSpri" + 'te']['x'] = 0x0, this["authorSpri" + 'te']['y'] = 0x0, this["authorSpri" + 'te']["addChild"](this["authorText"]), this["addChild"](this['authorSpri' + 'te']), this["authorSpri" + 'te']["mouseChild" + "ren"] = !0x1, this["authorSpri" + 'te']["buttonMode"] = !0x0, this["nameText"]["selectable"] = this["authorText"]["selectable"] = this["charText"]["selectable"] = this['commentsTe' + 'xt']["selectable"] = this["voteText"]["selectable"] = this["playText"]["selectable"] = !0x1, this["nameText"]["autoSize"] = this["authorText"]["autoSize"] = this['charText']["autoSize"] = this["commentsTe" + 'xt']["autoSize"] = this["voteText"]["autoSize"] = this["playText"]["autoSize"] = q5['wL']["LEFT"], this["nameText"]["wordWrap"] = this["authorText"]["wordWrap"] = this['charText']["wordWrap"] = this["voteText"]["wordWrap"] = this["playText"]["wordWrap"] = !0x1, this['commentsTe' + 'xt']["wordWrap"] = !0x0, this["commentsTe" + 'xt']["mouseEnabl" + 'ed'] = !0x1, this["commentMas" + 'k'] = new q5['kx'](), this["commentMas" + 'k']['graphics']["beginFill"](0xffffff, 0.1), this["commentMas" + 'k']["graphics"]["drawRect"](0x0, 0x0, this["commentsBg"]["width"], this["commentsBg"]["height"]), this["commentMas" + 'k']['graphics']['endFill'](), this["commentMas" + 'k']['x'] = this["commentsBg"]['x'], this["commentMas" + 'k']['y'] = this["commentsBg"]['y'], this["addChild"](this['commentMas' + 'k']), this["commentsTe" + 'xt']["mask"] = this["commentMas" + 'k']);
      };
      NW["featuredRe" + "quest"] = function () {

        if ("yrPXe" !== "yrPXe") {
          q8 = qI["setPrototy" + "peOf"] ? qS["setPrototy" + "peOf"]["bind"]() : function (ND, Ng) {
            ND["__proto__"] = Ng;
            return ND;
          };
          return qA(qN, qc);
        } else {
          var NA = new q5['vg'](q6['w']["siteURL"] + ('get_level.' + 'hw'));
          NA["method"] = q5['QI']['POST'];
          var Nr = new q5['Vt']();
          Nr["action"] = "get_featur" + 'ed';
          NA["data"] = Nr;
          return NA;
        }
      };
      NE["loadFeatur" + "edData"] = function () {
        if ("TQXkt" !== "zjIey") {
          this["loader"] = new q5['NU']();
          this["addLoaderL" + "isteners"]();
          this["loader"]["load"](NW['featuredRe' + 'quest']());
        } else {
          0x0 == qS["IsMotorEna" + "bled"]() && qA["EnableMoto" + 'r'](!0x0);
          var Nr;
          var NJ = qN["GetJointSp" + "eed"]();
          if (NJ < 0x0) {
            Nr = 0x0;
          } else {
            var ND = this["jointAccel" + 's'][NW];
            Nr = NJ < qs ? qf["min"](NJ + ND, q9) : NJ;
          }
          q3["SetMotorSp" + "eed"](Nr);
          return Nr;
        }
      };
      NW["loadLevelD" + 'ataArray'] = function () {

        if ("Tetsl" !== "Tetsl") {
          this["trackVehic" + "leSmashed"]();
          this["contactImp" + 'ulseDict']["delete"](this["frontShape"]);
          var Nr = this["_session"]["contactLis" + "tener"];
          Nr["deleteList" + "ener"](qJ['fI']['RESULT'], this["frontShape"]);
          Nr["deleteList" + "ener"](qr['fI']["RESULT"], this["topShape"]);
          Nr["deleteList" + "ener"](qj['fI']["RESULT"], this["rearShape"]);
          Nr["deleteList" + "ener"](qP['fI']["RESULT"], this["seatShape1"]);
          Nr["deleteList" + "ener"](qn['fI']["RESULT"], this['bladeShape']);
          Nr["deleteList" + "ener"](qy['fI']['ADD'], this["frontShape"]);
          Nr["deleteList" + "ener"](qg['fI']["ADD"], this["topShape"]);
          Nr["deleteList" + "ener"](qu['fI']["ADD"], this["seatShape1"]);
          var NJ = this['_session']["m_world"];
          this["bladeShape" + "Array"] = [];
          this["bladeConta" + "ctArray"] = [];
          for (var ND = this["targetBodi" + 'es']["length"], Ng = 0x0; Ng < ND; Ng++) {
            var NS = this["targetBodi" + 'es'][Ng];
            var Nd = NS["GetShapeLi" + 'st']();
            (Nd["m_userData"] instanceof q2['S3'] || Nd["m_userData"] instanceof q3['s']) && Nd["m_userData"]['removeBody'](NS);
            var Nz = this["risingBodi" + 'es'][Ng];
            Nz["GetUserDat" + 'a']()["stopSpewin" + 'g']();
            NJ["DestroyBod" + 'y'](NS);
            NJ["DestroyBod" + 'y'](Nz);
            var NF = NS["m_userData"];
            if (null != NF["mask"]) {
              var NM = NF["mask"];
              NF["mask"] = null;
              this["targetMask" + "Holder"]["removeChil" + 'd'](NM);
            }
            NF['visible'] = !0x1;
            NF["ignoreWhen" + "Culling"] = !0x0;
          }
          this["grindLoop"] && (this["grindLoop"]["stopSound"](), this['grindLoop'] = null);
          this["mowerLoop"]["stopSound"]();
          this["mowerLoop"] = null;
          this["addedJoint" + "sArray"] = [];
          this["targetBodi" + 'es'] = [];
          this["risingBodi" + 'es'] = [];
          this["eject"]();
          this["mowerSmash" + 'ed'] = !0x0;
          var NH = this["mowerBody"]["GetPositio" + 'n']();
          var Nb = this["mowerBody"]["GetAngle"]();
          var NZ = this["mowerBody"]["GetAngular" + "Velocity"]();
          var Ny = new qa['gv']();
          Ny["position"] = NH;
          Ny['angle'] = Nb;
          var Nc = new qh['m2']();
          Nc["density"] = 0x4;
          Nc["friction"] = 0.3;
          Nc["restitutio" + 'n'] = 0.1;
          Nc["filter"] = this["zeroFilter"];
          this["frontBody"] = NJ["CreateBody"](Ny);
          this["frontBody"]["SetAngular" + "Velocity"](NZ);
          this["rearBody"] = NJ["CreateBody"](Ny);
          this['rearBody']["SetAngular" + "Velocity"](NZ);
          Nc["vertexCoun" + 't'] = 0x4;
          Nc['vertices'] = this["handleShap" + 'e']["GetVertice" + 's']();
          this["handleShap" + 'e'] = this["frontBody"]["CreateShap" + 'e'](Nc);
          Nr["registerLi" + "stener"](qq['fI']["RESULT"], this['handleShap' + 'e'], this["contactFro" + "ntResultHa" + 'ndler']);
          Nc["vertices"] = this["shaftShape"]['GetVertice' + 's']();
          this["frontBody"]['CreateShap' + 'e'](Nc);
          Nc["vertexCoun" + 't'] = 0x6;
          Nc["vertices"] = this["frontShape"]["GetVertice" + 's']();
          this["brokenFron" + "tShape"] = this["frontBody"]['CreateShap' + 'e'](Nc);
          Nr["registerLi" + "stener"](qZ['fI']["RESULT"], this["brokenFron" + "tShape"], this["contactFro" + "ntResultHa" + 'ndler']);
          Nr["registerLi" + "stener"](qo['fI']["ADD"], this['brokenFron' + "tShape"], this["contactAdd" + "Handler"]);
          this['frontBody']["SetMassFro" + "mShapes"]();
          this['frontBody']["SetLinearV" + "elocity"](this["mowerBody"]["GetLinearV" + "elocityFro" + 'mLocalPoin' + 't'](this['frontBody']['GetLocalCe' + "nter"]()));
          this["contactImp" + "ulseDict"]["set"](this["brokenFron" + "tShape"], this['frontRearS' + "mashLimit"]);
          this["contactAdd" + "Sounds"]["set"](this["brokenFron" + 'tShape'], 'ChairHit3');
          Nc["vertexCoun" + 't'] = 0x4;
          Nc["vertices"] = this['baseShape']["GetVertice" + 's']();
          this["baseShape"] = this["rearBody"]['CreateShap' + 'e'](Nc);
          Nr["registerLi" + "stener"](qK['fI']["RESULT"], this["baseShape"], this["contactRea" + "rResultHan" + "dler"]);
          Nr['registerLi' + "stener"](Nl['fI']["ADD"], this["baseShape"], this["contactAdd" + "Handler"]);
          Nc["vertices"] = this["bladeShape"]["GetVertice" + 's']();
          this["bladeShape"] = this["rearBody"]["CreateShap" + 'e'](Nc);
          Nr["registerLi" + "stener"](NE['fI']['RESULT'], this["bladeShape"], this["contactRea" + "rResultHan" + "dler"]);
          Nr["registerLi" + "stener"](qb['fI']["ADD"], this["bladeShape"], this["contactAdd" + "Handler"]);
          Nc["vertexCoun" + 't'] = 0x5;
          Nc["vertices"] = this["rearShape"]['GetVertice' + 's']();
          this["brokenRear" + "Shape"] = this["rearBody"]["CreateShap" + 'e'](Nc);
          Nr["registerLi" + "stener"](qC['fI']["RESULT"], this["brokenRear" + "Shape"], this["contactRea" + "rResultHan" + "dler"]);
          Nr["registerLi" + "stener"](qt['fI']["ADD"], this["brokenRear" + "Shape"], this["contactAdd" + "Handler"]);
          Nc["vertices"] = this["topShape"]['GetVertice' + 's']();
          this["topShape"] = this["rearBody"]['CreateShap' + 'e'](Nc);
          Nr["registerLi" + "stener"](qM['fI']["RESULT"], this["topShape"], this["contactRea" + "rResultHan" + "dler"]);
          Nr["registerLi" + "stener"](qi['fI']["ADD"], this["topShape"], this["contactAdd" + "Handler"]);
          Nc["vertexCoun" + 't'] = 0x4;
          Nc['vertices'] = this["seatShape1"]["GetVertice" + 's']();
          this["seatShape1"] = this["rearBody"]["CreateShap" + 'e'](Nc);
          Nr["registerLi" + "stener"](qD['fI']["RESULT"], this["seatShape1"], this["contactRea" + "rResultHan" + "dler"]);
          Nr['registerLi' + "stener"](qw['fI']["ADD"], this['seatShape1'], this["contactAdd" + "Handler"]);
          Nc["vertices"] = this["seatShape2"]["GetVertice" + 's']();
          this["seatShape2"] = this['rearBody']["CreateShap" + 'e'](Nc);
          this["rearBody"]["SetMassFro" + "mShapes"]();
          this["rearBody"]['SetLinearV' + "elocity"](this["mowerBody"]["GetLinearV" + "elocityFro" + "mLocalPoin" + 't'](this['rearBody']["GetLocalCe" + "nter"]()));
          this["contactImp" + "ulseDict"]["set"](this["brokenRear" + "Shape"], this["frontRearS" + "mashLimit"]);
          this["contactAdd" + "Sounds"]["set"](this["bladeShape"], "BikeHit1");
          this['contactAdd' + "Sounds"]["set"](this["baseShape"], "ChairHit2");
          this["contactAdd" + "Sounds"]['set'](this["topShape"], "ChairHit2");
          this["contactAdd" + "Sounds"]["set"](this["brokenRear" + "Shape"], "ChairHit3");
          this['contactAdd' + "Sounds"]["set"](this["seatShape1"], 'BikeHit3');
          var NX = this["mowerBody"]["GetWorldCe" + "nter"]();
          this["_session"]["particleCo" + "ntroller"]["createPoin" + "tBurst"]("mowershard" + 's', NX['x'] * this["m_physScal" + 'e'], NX['y'] * this["m_physScal" + 'e'], 0x1e, 0x1e, 0x46);
          NJ["DestroyBod" + 'y'](this["mowerBody"]);
          NJ["DestroyBod" + 'y'](this["frontShock" + "Body"]);
          NJ["DestroyBod" + 'y'](this["backShockB" + "ody"]);
          this["mowerMC"]["visible"] = this["bladeCover" + 'MC']["visible"] = !0x1;
          this["frontMC"]["visible"] = !0x0;
          this['frontBody']["SetUserDat" + 'a'](this['frontMC']);
          this['paintVecto' + 'r']["push"](this["frontBody"]);
          this["rearMC"]["visible"] = !0x0;
          this["rearBody"]["SetUserDat" + 'a'](this["rearMC"]);
          this["paintVecto" + 'r']["push"](this["rearBody"]);
          var Nx = new q0['Gq']();
          Nx["maxMotorTo" + "rque"] = this["maxTorque"];
          Nx['enableLimi' + 't'] = !0x1;
          Nx["lowerAngle"] = 0x0;
          Nx["upperAngle"] = 0x0;
          Nx["body1"] = this["frontBody"];
          Nx["body2"] = this["frontWheel" + "Body"];
          Nx["localAncho" + 'r1'] = this["frontShock" + 'Joint']["m_localAnc" + "hor1"];
          Nx["localAncho" + 'r2'] = this["frontWheel" + "Joint"]["m_localAnc" + "hor2"];
          NJ["DestroyJoi" + 'nt'](this["frontWheel" + "Joint"]);
          this["frontWheel" + "Joint"] = NJ["CreateJoin" + 't'](Nx);
          Nx["body1"] = this["rearBody"];
          Nx["body2"] = this["backWheelB" + "ody"];
          Nx["localAncho" + 'r1'] = this["backShockJ" + "oint"]["m_localAnc" + "hor1"];
          Nx["localAncho" + 'r2'] = this["backWheelJ" + "oint"]["m_localAnc" + "hor2"];
          NJ["DestroyJoi" + 'nt'](this["backWheelJ" + "oint"]);
          this["backWheelJ" + "oint"] = NJ["CreateJoin" + 't'](Nx);
          this["shockMC"]["visible"] = !0x1;
          q1['m']["instance"]["playAreaSo" + 'undInstanc' + 'e']("MetalSmash" + 'Heavy3', this["mowerBody"]);
        } else {
          return NW["levelDataA" + "rray"] ? Promise["resolve"](NW["levelDataA" + "rray"]) : (NW["pendingLoa" + 'd'] || (NW["pendingLoa" + 'd'] = new Promise(function (Nr) {

            var NJ = new q5['NU']();
            var ND = null;
            function Ng(NS) {
              null !== ND && (clearTimeout(ND), ND = null, NW["pendingLoa" + 'd'] = null, Nr(NS));
            }
            ND = setTimeout(function () {
              if ("HekuZ" === "YRAPB") {
                var Nd = function (Nz) {

                  if ("object" != typeof Nz || !Nz) {
                    return Nz;
                  }
                  var NF = Nz[Nd["toPrimitiv" + 'e']];
                  if (void 0x0 !== NF) {
                    var NM = NF["call"](Nz, "string");
                    if ("object" != typeof NM) {
                      return NM;
                    }
                    throw new qc("@@toPrimit" + "ive must r" + 'eturn\x20a\x20pr' + 'imitive\x20va' + "lue.");
                  }
                  return qN(Nz);
                }(qI);
                return "symbol" == typeof Nd ? Nd : Nd + '';
              } else {
                return Ng(null);
              }
            }, NW['LOAD_TIMEO' + 'UT_MS']);
            NJ["addEventLi" + "stener"](q5['Jh']['COMPLETE'], function () {

              if ("GADIR" !== "BSqnb") {
                var NS;
                var Nd = String(NJ["data"]);
                if (Nd["substr"](0x0, 0x8)["indexOf"]("<html>") > -0x1 || Nd["substr"](0x0, 0x8)["indexOf"]("failure") > -0x1) {
                  Ng(null);
                } else {
                  if ("BMzEe" === "BMzEe") {
                    if (!NW["levelDataA" + "rray"]) {
                      try {
                        if ("cxjpO" === "bENdS") {
                          var NF = function (NM) {
                            if ('object' != typeof NM || !NM) {
                              return NM;
                            }
                            var NH = NM[NF["toPrimitiv" + 'e']];
                            if (void 0x0 !== NH) {
                              var Nb = NH["call"](NM, "string");
                              if ("object" != typeof Nb) {
                                return Nb;
                              }
                              throw new qc("@@toPrimit" + 'ive\x20must\x20r' + "eturn a pr" + 'imitive\x20va' + 'lue.');
                            }
                            return qN(NM);
                          }(qI);
                          return "symbol" == typeof NF ? NF : NF + '';
                        } else {
                          NW["levelDataA" + "rray"] = NW['parseFeatu' + "redData"](Nd);
                        }
                      } catch (NF) {}
                    }
                    Ng(null !== (NS = NW["levelDataA" + "rray"]) && void 0x0 !== NS ? NS : null);
                  } else {
                    var NH = this["session"]["level"]["actionsVec" + "tor"];
                    var Nb = NH["indexOf"](this);
                    Nb < 0x0 && (NH["push"](this), 0x3 == this['repeatType'] && qF['w']["currentSes" + 'sion']["contactLis" + 'tener']["registerLi" + "stener"](qT['fI']["REMOVE"], this['sensor'], this["checkRemov" + "e1Bind"]));
                  }
                }
              } else {
                this["foreground"] = this["levelData"]["getChildBy" + "Name"]("foreGround");
                this["_session"]["containerS" + "prite"]["addChild"](this['foreground']);
                this["_session"]["particleCo" + 'ntroller']["placeBlood" + "Bitmap"]();
                this["background"] = this["levelData"]["getChildBy" + "Name"]("backGround");
                this["_session"]["containerS" + "prite"]['addChildAt'](this['background'], 0x1);
                this["convertBac" + "kground"]();
              }
            });
            NJ['addEventLi' + 'stener'](q5['BR']["IO_ERROR"], function () {
              return Ng(null);
            });
            NJ["load"](NW['featuredRe' + "quest"]());
          })), NW["pendingLoa" + 'd']);
        }
      };
      NW["parseFeatu" + "redData"] = function (NA) {
        if ("MdMtI" === "MdMtI") {
          var Nr = new q5['_9'](NA);
          if (!Nr['lv']) {
            return null;
          }
          for (var NJ = [], ND = [], Ng = new Date(), NS = Nr['lv']["length"], Nd = 0x0; Nd < NS; Nd++) {
            if ("eIqTX" === "zRVUa") {
              return {
                'w': qF,
                'm': qT
              };
            } else {
              var Nz = Nr['lv'][Nd];
              var NF = new n8['m'](Nz["@id"], Nz["@ln"], Nz["@ui"], Nz["@un"], Nz["@rg"], Nz["@vs"], Nz["@ps"], Nz["@dp"], Nz['uc'][0x0]["cdata"], Nz["@pc"], '1', '1', '1', Nz["@df"]);
              (Ng['getTime']() - NF["date_featu" + "red"]["getTime"]()) / 0x5265c00 < 0xe ? NJ["push"](NF) : ND["push"](NF);
            }
          }
          return NJ["concat"](ND);
        } else {
          var Nb = qF;
          this["jointMotor" + 'Speeds'][qT] && 0x1 == Nb['IsMotorEna' + 'bled']() && Nb['EnableMoto' + 'r'](!0x1);
        }
      };
      NE["addLoaderL" + "isteners"] = function () {
        this["loader"] && (this["loader"]["addEventLi" + "stener"](q5['Jh']["COMPLETE"], this["dataLoadCo" + 'mplete']), this["loader"]["addEventLi" + "stener"](q5['Xt']["SECURITY_E" + "RROR"], this["securityEr" + "rorHandler"]));
      };
      NE["removeLoad" + 'erListener' + 's'] = function () {
        this["loader"] && (this["loader"]['removeEven' + "tListener"](q5['Jh']["COMPLETE"], this["dataLoadCo" + "mplete"]), this["loader"]["removeEven" + "tListener"](q5['Xt']["SECURITY_E" + "RROR"], this["securityEr" + "rorHandler"]));
      };
      NE["buildList"] = function () {
        this["featuredLi" + 'st'] = [];
        this["list"] = new q5['kx']();
        this["list"]['y'] = this["listSpacin" + 'g'];
        this["listHolder"] = new q5['kx']();
        this["listMask"] = new q5['kx']();
        this["listHitAre" + 'a'] = new q5['kx']();
        this["listHitAre" + 'a']["graphics"]["beginFill"](0xff00);
        this["listHitAre" + 'a']["graphics"]["drawRect"](0x0, 0x0, 0x190, 0x1ae);
        this["listHitAre" + 'a']["graphics"]["endFill"]();
        this["listMask"]["graphics"]["beginFill"](0xff0000);
        this["listMask"]["graphics"]["drawRect"](0x0, 0x0, 400.325, 0x1ae);
        this["listMask"]["graphics"]["endFill"]();
        this["listHolder"]['y'] = this["listMask"]['y'] = this["topY"];
        this["listHolder"]["addChild"](this["listHitAre" + 'a']);
        this["listHolder"]["addChild"](this["list"]);
        this['addChild'](this['listHolder']);
        this["addChild"](this['listMask']);
        this["listHolder"]["mask"] = this['listMask'];
        this['listHolder']["hitArea"] = this["listHitAre" + 'a'];
        this["listHitAre" + 'a']['alpha'] = 0x0;
        this["list"]['y'] = NW["yVal"];
        this['createLeve' + "lButtonsIn" + "View"]();
        this["list"]["addChildAt"](this["arrows"], 0x0);
        this["list"]["addChildAt"](this['hiliter'], 0x0);
        this["hiliter"]["width"] += 0.5;
        this["hiliter"]['x'] -= 0.25;
        this["createLeve" + "lButtonsUn" + 'tilIndex'](NW["lastItemIn" + "dex"]);
        this["selectItem"](this["featuredLi" + 'st'][NW["lastItemIn" + "dex"]]);
        q6['w']['mobileCont' + "rols"] || this["listHeight"] > this["listHitAre" + 'a']["height"] && (this["listHolder"]['addEventLi' + "stener"](q5['Cm']["ROLL_OVER"], this["startListS" + "croll"]), this["listHolder"]["addEventLi" + "stener"](q5['Cm']["ROLL_OUT"], this["stopListSc" + "roll"]));
        this['y'] = 0x0;
        this['mc']['y'] = 0x0;
        q6['w']["mobileCont" + "rols"] && (this['listHolder']["interactiv" + 'e'] = !0x0, this["listHolder"]["_pixiSprit" + 'e']['on']("pointermov" + 'e', this['onTouchMov' + 'e']["bind"](this)), this['listHolder']["_pixiSprit" + 'e']['on']("pointerdow" + 'n', this["onPointerD" + "own"]["bind"](this)), this["listHolder"]['_pixiSprit' + 'e']['on']("pointerup", this["onPointerU" + 'p']['bind'](this)), this["listHolder"]["_pixiSprit" + 'e']['on']("pointerupo" + "utside", this["onPointerU" + 'p']['bind'](this)));
      };
      NE["onTouchMov" + 'e'] = function (NA) {
        if (this["mobileTouc" + "hedDown"]) {
          var Nr = this['mobileTouc' + "hLocation"]['y'] - NA["data"]["global"]['y'];
          this["mobileLast" + "TouchDiff"] = Nr;
          0x0 !== Math["abs"](Nr) && (this['list']['y'] -= Nr, this['featuredLi' + 'st'][0x0]["interactiv" + 'e'] && this["setInterac" + "tiveElemen" + "tsForMobil" + "eScroll"](!0x1), this["checkScrol" + 'lLimits'](), this["createLeve" + "lButtonsIn" + "View"](), this["mobileTouc" + "hLocation"] = {
            'x': NA["data"]['global']['x'],
            'y': NA["data"]["global"]['y']
          });
        }
      };
      NE["onPointerD" + "own"] = function (NA) {
        'HcPmS' !== "HcPmS" ? (this["_joints"]["push"](q6), this["forceDirty"]()) : (this["mobileLast" + "TouchDiff"] = 0x0, qP['os']["killTweens" + 'Of'](this["list"]), this["mobileTouc" + "hedDown"] = !0x0, this["mobileTouc" + "hLocation"] = {
          'x': NA["data"]["global"]['x'],
          'y': NA["data"]["global"]['y']
        });
      };
      NE['onPointerU' + 'p'] = function (NA) {

        if ("wnaFl" === "wnaFl") {
          var Nr = this;
          this["mobileTouc" + "hedDown"] = !0x1;
          setTimeout(function () {
            return Nr["setInterac" + "tiveElemen" + "tsForMobil" + "eScroll"](!0x0);
          }, 0x32);
          qP['os']["killTweens" + 'Of'](this["list"]);
          Math["abs"](this["mobileLast" + "TouchDiff"]) > 0x1 && qP['os']['to'](this['list'], {
            'duration': 0x1,
            'y': this["list"]['y'] - 0x3 * this["mobileLast" + "TouchDiff"],
            'ease': qp['MI']["easeOut"],
            'onUpdate': function () {
              Nr["checkScrol" + "lLimits"]();
              Nr["createLeve" + "lButtonsIn" + "View"]();
            }
          });
        } else {
          for (var ND = new qc['lk']("Clarendon " + "LT Std Bol" + 'd', 0x14, 0x3d88c7, null, null, null, null, null, qV['MA']["CENTER"], null, null, null, 0x2), Ng = new qE['lk']("Clarendon " + 'LT\x20Std', 0x12, 0xffffff, !0x1, null, null, null, null, ql['MA']['CENTER'], null, null, null, 0x2), NS = 0x2, Nd = 0x0, Nz = q3; Nd < Nz['length']; Nd++) {
            var NF = Nz[Nd];
            var NM = new qB['A_']();
            NM["defaultTex" + "tFormat"] = ND;
            NM["text"] = NF["title"];
            NM['y'] = NS;
            NM['pixiText']["anchor"]["set"](0.5, 0x0);
            this["creditsSpr" + "ite"]["addChild"](NM);
            NF["titleUrl"] && (NM["mouseEnabl" + 'ed'] = !0x0, NM["mouseChild" + "ren"] = !0x0, new qW['x'](NM, NF['titleUrl']));
            var NH = new qH["A1g"]();
            var Nb = qk["ceil"](NM["width"] / 0xc);
            var NZ = NS + 0x1a;
            var Ny = -(0xc * Nb - 0x5) / 0x2;
            NH['lineStyle'](0x1, 0x3d88c7, 0x1);
            for (var Nc = 0x0; Nc < Nb; Nc++) {
              var NX = 0xc * Nc;
              NH["moveTo"](Ny + NX, NZ);
              NH['lineTo'](Ny + NX + 0x7, NZ);
            }
            this["creditsSpr" + "ite"]["pixiSprite"]['addChild'](NH);
            NS += 0x25;
            for (var Nx = 0x0; Nx < NF["entries"]["length"]; Nx++) {
              var Nw = NF["entries"][Nx];
              Nw["gapBefore"] && (NS += Nw["gapBefore"]);
              var Na = new qr['A_']();
              Na["multiline"] = !0x0;
              Na["defaultTex" + "tFormat"] = Ng;
              Na["text"] = Nw["text"];
              Na['y'] = NS;
              Na["pixiText"]["anchor"]["set"](0.5, 0x0);
              this['creditsSpr' + "ite"]['addChild'](Na);
              var NY = Na['height'];
              Nw['url'] && (Na["mouseEnabl" + 'ed'] = !0x0, Na["mouseChild" + 'ren'] = !0x0, new qj['x'](Na, Nw["url"]));
              NS += NY;
            }
            NS += 0x1a;
          }
        }
      };
      NE['setInterac' + 'tiveElemen' + "tsForMobil" + "eScroll"] = function (NA) {
        for (var Nr = 0x0; Nr < this["featuredLi" + 'st']["length"]; Nr++) {
          this["featuredLi" + 'st'][Nr]["removeEven" + "tListener"](q5['Cm']["MOUSE_UP"], this["mouseUpHan" + "dler"]);
          NA && this["featuredLi" + 'st'][Nr]["addEventLi" + "stener"](q5['Cm']["MOUSE_UP"], this["mouseUpHan" + "dler"]);
        }
        this["backBtn"]['interactiv' + 'e'] = NA;
        this["browserBtn"]["interactiv" + 'e'] = NA;
        this['playBtn']['interactiv' + 'e'] = NA;
        this["viewReplay" + "sBtn"]["interactiv" + 'e'] = NA;
        this["authorSpri" + 'te']["interactiv" + 'e'] = NA;
        this["otherLevel" + "sBtn"]["interactiv" + 'e'] = NA;
      };
      NE["createLeve" + "lButtonsIn" + "View"] = function () {
        if (void 0x0 === this["featuredLe" + "velButtonH" + 'eight']) {
          if ('VoXqF' !== "MYYdY") {
            var NA = new qB('test', !0x1);
            this['featuredLe' + "velButtonH" + "eight"] = NA["height"];
            NA["destroy"]();
          } else {
            qS["prototype"] = qA["create"](qN["prototype"]);
            qc["prototype"]["constructo" + 'r'] = qV;
            qE(ql, NJ);
          }
        }
        var Nr = Math["max"](0x0, -0x1 * (this["list"]['y'] - this["listSpacin" + 'g']));
        var NJ = Math["ceil"](0x9 + Nr / (0.5 * this["featuredLe" + "velButtonH" + "eight"] + 0x2 * this["listSpacin" + 'g'])) - 0x1;
        NJ > NW["levelDataA" + "rray"]["length"] - 0x1 && (NJ = NW["levelDataA" + 'rray']["length"] - 0x1);
        this["createLeve" + "lButtonsUn" + "tilIndex"](NJ);
      };
      NE["createLeve" + "lButtonsUn" + 'tilIndex'] = function (NA) {
        if (this["renderedLe" + "velButtons" + "UntilIndex"] < NA) {
          for (var Nr = new Date(), NJ = this["renderedLe" + "velButtons" + "UntilIndex"] + 0x1; NJ <= NA; NJ++) {
            var ND = NW["levelDataA" + "rray"][NJ];
            var Ng = (Nr["getTime"]() - ND["date_featu" + "red"]["getTime"]()) / 0x5265c00 < 0xe;
            var NS = new qB(ND["name"], Ng, !0x1);
            NS['x'] = 0x4b;
            NS['y'] = this["startY"];
            this["startY"] += 0.5 * NS["height"] + 0x2 * this['listSpacin' + 'g'];
            this["list"]["addChild"](NS);
            this["featuredLi" + 'st']['push'](NS);
            this["featuredLe" + "velButtonH" + "eight"] = NS["height"];
            NS['addEventLi' + 'stener'](q5['Cm']["MOUSE_UP"], this["mouseUpHan" + "dler"]);
            this["renderedLe" + "velButtons" + "UntilIndex"]++;
          }
          this["listHeight"] = this["list"]["height"];
        }
      };
      NE["checkScrol" + "lLimits"] = function () {
        this["list"]['y'] > this["listSpacin" + 'g'] ? (this["list"]['y'] = 0x0 + this["listSpacin" + 'g'], this['scrollSpee' + 'd'] = 0x0) : this["list"]['y'] < this["listHitAre" + 'a']["height"] - (this["listHeight"] + this["listSpacin" + 'g']) && (this['list']['y'] = this['listHitAre' + 'a']["height"] - (this['listHeight'] + this["listSpacin" + 'g']), this["scrollSpee" + 'd'] = 0x0);
        NW['yVal'] = this["list"]['y'];
      };
      NE["selectItem"] = function (NA) {
        this['currentIte' + 'm'] && (this["currentIte" + 'm']["selected"] = !0x1);
        this['currentIte' + 'm'] = NA;
        this["currentIte" + 'm']["selected"] = !0x0;
        var Nr = this["featuredLi" + 'st']["indexOf"](this["currentIte" + 'm']);
        var NJ = NW["levelDataA" + "rray"][Nr];
        this["populateFi" + "elds"](NJ);
        NW['lastItemIn' + "dex"] = Nr;
        qP['os']['to'](this["hiliter"], {
          'duration': 0.85,
          'y': this["currentIte" + 'm']['y'] + 0x5,
          'ease': qp['MI']["easeInOut"]
        });
        qP['os']['to'](this['arrows'], {
          'duration': 0x1,
          'y': this["currentIte" + 'm']['y'] + 0x5,
          'ease': qp['MI']["easeInOut"]
        });
      };
      NE["populateFi" + 'elds'] = function (NA) {
        if (this["authorText"]) {
          this["currentAut" + 'horId'] = NA["author_id"];
          this["currentAut" + "horName"] = NA["author_nam" + 'e'];
          this["nameText"]['htmlText'] = "<b>" + NA["name"] + "</b>";
          this["authorText"]["htmlText"] = "<b>" + NA["author_nam" + 'e'] + '</b>';
          this["voteText"]["htmlText"] = "<b>(" + NA["votes"] + (" votes)</b" + '>');
          var Nr = qk['l']["addInteger" + "Commas"](NA['plays']);
          this["playText"]["htmlText"] = "<b>played " + Nr + " times";
          this["otherLevel" + "sBtn"]['x'] = Math['round'](this["authorText"]['x'] + this['authorText']['textWidth'] + 0xa);
          this["otherLevel" + "sBtn"]["buttonMode"] = !0x0;
          var NJ = NA["character"] > 0x0 ? q6['w']["characterN" + "ames"][NA["character"] - 0x1] : "any";
          this["charText"]["htmlText"] = "<b>playabl" + "e characte" + "r: " + NJ + "</b>";
          this["voteStars"]["rating"] = NA["average_ra" + "ting"];
          this["commentsTe" + 'xt']["text"] = NA["comments"];
          this["commentsBg"]['removeEven' + "tListener"](q5['Jh']["ENTER_FRAM" + 'E'], this["scrollComm" + "ents"]);
          this["commentsBg"]["removeEven" + "tListener"](q5['Cm']["ROLL_OVER"], this["beginComme" + "ntScroll"]);
          this["commentsBg"]["removeEven" + "tListener"](q5['Cm']["ROLL_OUT"], this['endComment' + "Scroll"]);
          this["commentsTe" + 'xt']['y'] = this["commentsBg"]['y'] + 0x5;
          this["commentsTe" + 'xt']["height"] > this['commentsBg']["height"] && (this["commentsBg"]["addEventLi" + "stener"](q5['Cm']["ROLL_OVER"], this["beginComme" + "ntScroll"]), this["commentsBg"]["addEventLi" + "stener"](q5['Cm']["ROLL_OUT"], this["endComment" + "Scroll"]));
        }
      };
      NE["die"] = function () {

        var NA = this;
        qP['os']["killTweens" + 'Of'](this["hiliter"]);
        qP['os']['killTweens' + 'Of'](this["arrows"]);
        qP['os']["killTweens" + 'Of'](this['list']);
        this["removeLoad" + "erListener" + 's']();
        this['mc']["byText"]["destroy"]();
        this["featuredLi" + 'st'] && this['featuredLi' + 'st']["forEach"](function (Nr) {
          if ("GRHnT" !== "GRHnT") {
            return this["pixiSprite"]["position"]['y'];
          } else {
            Nr["removeEven" + "tListener"](q5['Cm']["MOUSE_UP"], NA["mouseUpHan" + "dler"]);
          }
        });
        this['playBtn']["removeEven" + "tListener"](q5['Cm']['MOUSE_UP'], this["mouseUpHan" + 'dler']);
        this["viewReplay" + 'sBtn']["removeEven" + "tListener"](q5['Cm']["MOUSE_UP"], this["mouseUpHan" + "dler"]);
        this["backBtn"]['removeEven' + "tListener"](q5['Cm']["MOUSE_UP"], this["mouseUpHan" + "dler"]);
        this["browserBtn"]["removeEven" + "tListener"](q5['Cm']["MOUSE_UP"], this["mouseUpHan" + "dler"]);
        this["otherLevel" + "sBtn"]["removeEven" + "tListener"](q5['Cm']["MOUSE_UP"], this["mouseUpHan" + "dler"]);
        this["otherLevel" + 'sBtn']['removeEven' + "tListener"](q5['Cm']["MOUSE_OVER"], this['mouseOverH' + "andler"]);
        this["listHolder"] && (this["listHolder"]["removeEven" + "tListener"](q5['Cm']["ROLL_OVER"], this['startListS' + "croll"]), this["listHolder"]["removeEven" + "tListener"](q5['Cm']["ROLL_OUT"], this['stopListSc' + "roll"]), this["list"]["removeEven" + 'tListener'](q5['Jh']['ENTER_FRAM' + 'E'], this['stopScroll']), this["list"]["removeEven" + "tListener"](q5['Jh']["ENTER_FRAM" + 'E'], this["listScroll"]), q6['w']["mobileCont" + "rols"] && (this["listHolder"]['_pixiSprit' + 'e']["off"]("pointermov" + 'e'), this["listHolder"]["_pixiSprit" + 'e']["off"]("pointerdow" + 'n'), this["listHolder"]["_pixiSprit" + 'e']["off"]("pointerup"), this["listHolder"]["_pixiSprit" + 'e']["off"]('pointerupo' + 'utside')));
        this["commentsBg"]['removeEven' + "tListener"](q5['Jh']["ENTER_FRAM" + 'E'], this["scrollComm" + "ents"]);
        this['commentsBg']["removeEven" + "tListener"](q5['Cm']["ROLL_OVER"], this["beginComme" + "ntScroll"]);
        this["commentsBg"]["removeEven" + 'tListener'](q5['Cm']['ROLL_OUT'], this["endComment" + "Scroll"]);
      };
      return NW;
    }
  }(q5['kx']);
  function nN(Nl, No) {


    nN = Object['setPrototy' + "peOf"] ? Object["setPrototy" + "peOf"]["bind"]() : function (Ni, NE) {
      Ni['__proto__'] = NE;
      return Ni;
    };
    return nN(Nl, No);
  }
  nn["lastItemIn" + 'dex'] = 0x0;
  nn['yVal'] = 0xa;
  nn['pendingLoa' + 'd'] = null;
  nn["LOAD_TIMEO" + 'UT_MS'] = 0x2710;
  q2(0x15f33);
  var nf = function (Nl) {

    if ('olYMN' !== "Caihh") {
      function NE() {


        var NR;
        (NR = Nl["call"](this) || this)["appleMouse" + "UpHandler"] = function () {
          n9['J']["trackEvent"](n9['J']["MAIN_MENU"], n9['J']["CLICK_IOS_" + 'LINK']);
          var NW = new q5['vg']("https://it" + "unes.apple" + ".com/us/ap" + "p/happy-wh" + 'eels/id648' + '668184?mt=' + '8');
          (0x0, q5['is'])(NW, "_blank");
        };
        NR["googlePlay" + "MouseUpHan" + "dler"] = function () {
          n9['J']["trackEvent"](n9['J']["MAIN_MENU"], n9['J']["CLICK_GOOG" + "LEPLAY_LIN" + 'K']);
          var NW = new q5['vg']("https://pl" + "ay.google." + "com/store/" + "apps/detai" + "ls?id=com." + 'fancyforce' + ".happywhee" + 'ls');
          (0x0, q5['is'])(NW, "_blank");
        };
        NR["steamMouse" + "UpHandler"] = function () {
          if ("cJrKS" !== "cJrKS") {
            qT["__proto__"] = qR;
            return qz;
          } else {
            n9['J']["trackEvent"](n9['J']["MAIN_MENU"], 'click_stea' + "m_link");
            var NW = new q5['vg']("https://st" + "ore.steamp" + "owered.com" + "/app/47055" + "10/Happy_W" + "heels/");
            (0x0, q5['is'])(NW, "_blank");
          }
        };
        NR["run"] = function (NW) {
          var NA = 0.5 * NW["delta"];
          NR["star"]["rotation"] += NA;
        };
        NR['mc'] = new q5['j7']((0x0, qK['zI'])("GameUI", "iosButton"));
        NR['mc']["convertChi" + "ldren"]();
        NR["addChild"](NR['mc']);
        NR["appButton"] = NR['mc']["appButton"];
        NR["googlePlay" + "AppButton"] = NR['mc']['googlePlay' + 'AppButton'];
        NR['steamButto' + 'n'] = NR['mc']["steamButto" + 'n'];
        NR["appButton"]["buttonMode"] = !0x0;
        NR["appButton"]['_pixiSprit' + 'e']['interactiv' + 'e'] = !0x0;
        NR['appButton']['_pixiSprit' + 'e']['on']("pointerup", NR["appleMouse" + "UpHandler"]);
        NR["googlePlay" + "AppButton"]["buttonMode"] = !0x0;
        NR["googlePlay" + "AppButton"]["_pixiSprit" + 'e']["interactiv" + 'e'] = !0x0;
        NR['googlePlay' + "AppButton"]["_pixiSprit" + 'e']['on']("pointerup", NR["googlePlay" + "MouseUpHan" + "dler"]);
        NR["steamButto" + 'n']["buttonMode"] = !0x0;
        NR["steamButto" + 'n']["_pixiSprit" + 'e']["interactiv" + 'e'] = !0x0;
        NR["steamButto" + 'n']['_pixiSprit' + 'e']['on']("pointerup", NR["steamMouse" + "UpHandler"]);
        NR["star"] = NR['mc']["children"][NR['mc']["children"]['length'] - 0x1]["star"];
        NR["star"]['filters'] = [new q5['GD'](12.5, 0x5a, 0x0, 0x1, 0x1, 0x1, 0.2, 0x3)];
        NR["addEventLi" + "stener"](q5['Jh']["ENTER_FRAM" + 'E'], NR["run"], !0x1, 0x0, !0x0);
        return NR;
      }
      var No;
      var Ni;
      Ni = Nl;
      (No = NE)["prototype"] = Object["create"](Ni["prototype"]);
      No["prototype"]["constructo" + 'r'] = No;
      nN(No, Ni);
      NE['prototype']["destroy"] = function () {
        this['mc']["newStar"]["getChildBy" + "Name"]("newText")["_pixiSprit" + 'e']["destroy"]({
          'children': !0x0,
          'baseTexture': !0x0,
          'texture': !0x0
        });
        this['appButton']["_pixiSprit" + 'e']["off"]("pointerup");
        this['googlePlay' + "AppButton"]["_pixiSprit" + 'e']["off"]("pointerup");
        Nl["prototype"]["destroy"]["call"](this);
      };
      return NE;
    } else {
      var NW = qz["levelDataA" + "rray"][q8];
      var NA = (qI['getTime']() - NW["date_featu" + "red"]["getTime"]()) / 0x5265c00 < 0xe;
      var Nr = new qS(NW["name"], NA, !0x1);
      Nr['x'] = 0x4b;
      Nr['y'] = this['startY'];
      this["startY"] += 0.5 * Nr["height"] + 0x2 * this['listSpacin' + 'g'];
      this['list']["addChild"](Nr);
      this["featuredLi" + 'st']['push'](Nr);
      this["featuredLe" + "velButtonH" + "eight"] = Nr["height"];
      Nr["addEventLi" + "stener"](qA['Cm']["MOUSE_UP"], this["mouseUpHan" + "dler"]);
      this["renderedLe" + "velButtons" + "UntilIndex"]++;
    }
  }(q5['kx']);
  function nT(Nl, No) {


    nT = Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"]['bind']() : function (Ni, NE) {
      Ni["__proto__"] = NE;
      return Ni;
    };
    return nT(Nl, No);
  }
  var nV = function (Nl) {

    function No(NW) {
      var NA;
      (NA = Nl["call"](this) || this)['backPress'] = function (Nr) {

        NA["handleBack"]();
      };
      NA["__mc"] = new q5['j7']((0x0, qK['zI'])("GameUI", NW));
      NA["__mc"]["convertChi" + "ldren"]();
      NA["addChild"](NA["__mc"]);
      NA["backButton"] = (0x0, qK['Iz'])(q3['yw'], NA["__mc"], 'backButton', {
        'fileName': "GameUI",
        'mcName': "mc_feature" + "d_back_but" + "ton"
      });
      NA["backButton"]['addEventLi' + "stener"](q5['Cm']["MOUSE_UP"], NA["backPress"]);
      return NA;
    }
    var Ni;
    var NE;
    NE = Nl;
    (Ni = No)["prototype"] = Object["create"](NE["prototype"]);
    Ni["prototype"]["constructo" + 'r'] = Ni;
    nT(Ni, NE);
    var NR = No["prototype"];
    NR["handleBack"] = function () {
      var NW = new qu['$T'](qu['$T']["MAIN_MENU"]);
      NW["target"] = this;
      this['dispatchEv' + "ent"](NW);
    };
    NR['die'] = function () {
      this["backButton"]["removeEven" + "tListener"](q5['Cm']["MOUSE_UP"], this["backPress"]);
    };
    return No;
  }(q5['kx']);
  var nh = q2(0x370e);
  function nC(Nl, No) {

    nC = Object["setPrototy" + "peOf"] ? Object['setPrototy' + "peOf"]["bind"]() : function (Ni, NE) {
      Ni["__proto__"] = NE;
      return Ni;
    };
    return nC(Nl, No);
  }
  var nj = [{
    'title': "Game / Art" + " / Program" + "ming",
    'entries': [{
      'text': "Jim Bonacc" + 'i',
      'url': "https://to" + "taljerkfac" + "e.com"
    }]
  }, {
    'title': "Intro Song",
    'entries': [{
      'text': "Jack Zanko" + "wski",
      'url': "http://www" + ".pekopeko." + "com"
    }]
  }, {
    'title': "Ongoing de" + "velopment " + "(1.87+) / " + "Site admin",
    'entries': [{
      'text': "kwlsh",
      'url': "https://kw" + "l.sh"
    }]
  }, {
    'title': 'Original\x20J' + 'avascript\x20' + "port",
    'titleUrl': "https://ww" + "w.goodboyd" + "igital.com" + '/',
    'entries': [{
      'text': "Matt Sayer" + 's\x0aMauro\x20de' + " Tarso\nSea" + "n Burns\nSe" + "an Mccumsk" + "ay\nNadjaha" + " Wohedally"
    }]
  }, {
    'title': "Special Th" + "anks:",
    'entries': [{
      'text': 'Erin\x20Catto' + " and the\n " + 'Box2d\x20Comm' + "unity",
      'url': 'http://www' + ".box2d.org"
    }, {
      'text': "Friends & " + 'Family\x0aSan' + "dwiches\nTh" + "e Internet" + "\nAnyone sh" + 'owing\x20inte' + "rest",
      'gapBefore': 0x13
    }]
  }, {
    'title': "Special No" + '\x20Thanks:',
    'entries': [{
      'text': "Mortal Ene" + "mies\nIndif" + "ference\nTi" + "me\nJoe Bon" + "acci"
    }]
  }];
  var nP = function (Nl) {


    function No() {
      if ("FeKaU" !== "opTdd") {
        var NW;
        (NW = Nl["call"](this, "mc_Credits" + "Menu") || this)['scroll'] = function (NA) {


          NW['creditsSpr' + "ite"]['y'] -= 0.5 * Number(NA["delta"]);
          NW['creditsSpr' + "ite"]['y'] < -0x32 - NW['creditsSpr' + "ite"]["height"] && (NW["creditsSpr" + "ite"]['y'] = 0x1fe);
        };
        NW["creditsSpr" + 'ite'] = NW["__mc"]["creditsSpr" + "ite"];
        NW["creditsSpr" + "ite"]['y'] = 0x1fe;
        NW['buildCredi' + 'ts']();
        NW["addEventLi" + "stener"](q5['Jh']["ENTER_FRAM" + 'E'], NW["scroll"]);
        return NW;
      } else {
        return this["_dead"];
      }
    }
    var Ni;
    var NE;
    NE = Nl;
    (Ni = No)["prototype"] = Object['create'](NE['prototype']);
    Ni["prototype"]["constructo" + 'r'] = Ni;
    nC(Ni, NE);
    var NR = No["prototype"];
    NR["buildCredi" + 'ts'] = function () {
      if ("DVsUm" !== "DVsUm") {
        var Nw = qV['fullHeight'] / 0x2;
        var Na = (Nw - qE["mouseY"]) / Nw * 0xa;
        var NY = 0.5 * ql["delta"];
        q3["comments"]['y'] += Na * NY;
        q1["comments"]['y'] + qs["comments"]["height"] < qf["fullHeight"] && (q9["comments"]['y'] = q5["fullHeight"] - q2["comments"]["height"]);
        qB["comments"]['y'] > 0x0 && (qW["comments"]['y'] = 0x0);
      } else {
        for (var NW = new q5['lk']("Clarendon " + "LT Std Bol" + 'd', 0x14, 0x3d88c7, null, null, null, null, null, q5['MA']["CENTER"], null, null, null, 0x2), NA = new q5['lk']("Clarendon " + "LT Std", 0x12, 0xffffff, !0x1, null, null, null, null, q5['MA']["CENTER"], null, null, null, 0x2), Nr = 0x2, NJ = 0x0, ND = nj; NJ < ND["length"]; NJ++) {
          if ("qYMfY" !== 'ekqZd') {
            var Ng = ND[NJ];
            var NS = new q5['A_']();
            NS['defaultTex' + 'tFormat'] = NW;
            NS["text"] = Ng["title"];
            NS['y'] = Nr;
            NS["pixiText"]["anchor"]["set"](0.5, 0x0);
            this["creditsSpr" + "ite"]["addChild"](NS);
            Ng["titleUrl"] && (NS['mouseEnabl' + 'ed'] = !0x0, NS["mouseChild" + "ren"] = !0x0, new nh['x'](NS, Ng["titleUrl"]));
            var Nd = new qT["A1g"]();
            var Nz = Math["ceil"](NS["width"] / 0xc);
            var NF = Nr + 0x1a;
            var NM = -(0xc * Nz - 0x5) / 0x2;
            Nd["lineStyle"](0x1, 0x3d88c7, 0x1);
            for (var NH = 0x0; NH < Nz; NH++) {
              var Nb = 0xc * NH;
              Nd["moveTo"](NM + Nb, NF);
              Nd["lineTo"](NM + Nb + 0x7, NF);
            }
            this['creditsSpr' + "ite"]["pixiSprite"]["addChild"](Nd);
            Nr += 0x25;
            for (var NZ = 0x0; NZ < Ng["entries"]["length"]; NZ++) {
              if ("zJFQA" === "itgKy") {
                return this["_body1"];
              } else {
                var Ny = Ng['entries'][NZ];
                Ny["gapBefore"] && (Nr += Ny["gapBefore"]);
                var Nc = new q5['A_']();
                Nc["multiline"] = !0x0;
                Nc["defaultTex" + "tFormat"] = NA;
                Nc["text"] = Ny["text"];
                Nc['y'] = Nr;
                Nc["pixiText"]["anchor"]["set"](0.5, 0x0);
                this["creditsSpr" + "ite"]["addChild"](Nc);
                var NX = Nc["height"];
                Ny["url"] && (Nc["mouseEnabl" + 'ed'] = !0x0, Nc["mouseChild" + "ren"] = !0x0, new nh['x'](Nc, Ny["url"]));
                Nr += NX;
              }
            }
            Nr += 0x1a;
          } else {
            var NY = this["session"];
            if (!(this["highJumpDo" + 'ne'] || NY['isReplay'] || NY["isEditorTe" + 'st'] || NY["isMenu"] || NY['character'] !== this)) {
              if (this["ejected"] || this["dead"] || this["frameSmash" + 'ed']) {
                this["jumpFromY"] = null;
              } else {
                var Nv = this["rigContact"]();
                if ("boost" !== Nv) {
                  var NL = this["frameBody"]["GetPositio" + 'n']()['y'];
                  "world" !== Nv ? null === this["jumpFromY"] || this["jumpFromY"] - NL < 0xa || (this["highJumpDo" + 'ne'] = !0x0, Nd['YC']['unlockAchi' + 'evement'](qI['Ek']['POGO_10_ME' + "TERS_HIGH"])) : this["jumpFromY"] = NL;
                } else {
                  this["jumpFromY"] = null;
                }
              }
            }
          }
        }
      }
    };
    NR["die"] = function () {
      if ("vzVPL" !== "vzVPL") {
        this['loadButton']["disabled"] = !0x0;
        this["deleteButt" + 'on']['disabled'] = !0x0;
        this['levelSearc' + "hInput"]["disabled"] = !0x0;
        var NA = new qT['lk']("HelveticaN" + "eueLT Std", 0xb, 0xfd8181, !0x0, null, null, null, null, qR['MA']['CENTER']);
        var Nr = new qz['A_']();
        Nr["width"] = 0xf0;
        Nr["defaultTex" + "tFormat"] = NA;
        Nr["text"] = "Log in to " + "load your " + "levels!";
        Nr['x'] = 0x0;
        Nr['y'] = 0x82;
        this['addChild'](Nr);
      } else {
        Nl["prototype"]["die"]["call"](this);
        this["removeEven" + 'tListener'](q5['Jh']["ENTER_FRAM" + 'E'], this["scroll"]);
      }
    };
    return No;
  }(nV);
  function np(Nl) {


    if ("dzaHU" === "dzaHU") {
      var No = function (Ni) {
        if ("object" != typeof Ni || !Ni) {
          return Ni;
        }
        var NE = Ni[Symbol['toPrimitiv' + 'e']];
        if (void 0x0 !== NE) {
          var NR = NE["call"](Ni, "string");
          if ("object" != typeof NR) {
            return NR;
          }
          throw new TypeError("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
        }
        return String(Ni);
      }(Nl);
      return "symbol" == typeof No ? No : No + '';
    } else {
      var NE = qz[q8];
      NE["enumerable"] = NE['enumerable'] || !0x1;
      NE["configurab" + 'le'] = !0x0;
      "value" in NE && (NE["writable"] = !0x0);
      qI["defineProp" + "erty"](qS, qA(NE["key"]), NE);
    }
  }
  function nK(Nl, No) {


    if ("fkPef" === 'fkPef') {
      nK = Object['setPrototy' + "peOf"] ? Object["setPrototy" + "peOf"]["bind"]() : function (Ni, NE) {
        if ("TIOfK" === "TIOfK") {
          Ni["__proto__"] = NE;
          return Ni;
        } else {
          var NW = ql['w'][q3["keys"][NE] + ("DefaultCod" + 'e')];
          qs['w'][qf["keys"][q9] + "Code"] = NW;
          q5['w']["sharedObje" + 'ct']["data"]["keyCodes"][q2["keys"][qB] + "Code"] = NW;
          qW["inputs"][qH]["keyCode"] = NW;
          qk["inputs"][q4]["text"] = qJ["keyCodeNam" + 'es']["get"](NW);
        }
      };
      return nK(Nl, No);
    } else {
      qc['backButton']["removeEven" + 'tListener'](qV['Cm']["MOUSE_UP"], qE["backPress"]);
      ql["currentPag" + 'e'] = 0x1;
      q3['JD']["trackEvent"](No['JD']["REPLAY_BRO" + "WSER"], qs['JD']["GOTO_LEVEL" + '_BROWSER']);
      var NE = new qf['$T'](q9['$T']["PREVIOUS_M" + "ENU"]);
      NE["target"] = q5;
      q2["dispatchEv" + "ent"](NE);
    }
  }
  q2(0x8cc1);
  var nm = function (Nl) {

    function No(Nr, NJ, ND) {
      var Ng;
      (Ng = Nl["call"](this) || this)["handleMous" + "eUp"] = function (Nd) {

        Nd["target"] == Ng['bg'] && (Ng["highlight"](), Ng["inputText"]["text"] = '', Ng["stage"]["addEventLi" + "stener"](q5['kV']["KEY_DOWN"], Ng["handleKeyD" + "own"]), Ng['dispatchEv' + 'ent'](new q5['Jh'](No["FOCUS_IN"])));
      };
      Ng["handleFocu" + "sOut"] = function (Nd) {


        "pBTtm" !== "pupwT" ? (Ng["stage"]["removeEven" + "tListener"](q5['kV']["KEY_DOWN"], Ng["handleKeyD" + "own"]), Ng["removeEven" + "tListener"](No["FOCUS_OUT"], Ng["handleFocu" + "sOut"])) : qF["listeners"]["push"](qT);
      };
      Ng["handleKeyD" + "own"] = function (Nd) {


        if ("KNryN" !== "ZRzce") {
          Ng["_keyCode"] = Nd["keyCode"];
          var Nz = new q3['vq'](q3['vq']["VALUE_CHAN" + 'GE'], null, Ng["_keyCode"]);
          Nz["target"] = Ng;
          Ng["dispatchEv" + "ent"](Nz);
        } else {
          qT && qR();
          qz();
        }
      };
      var NS = new q5['j7']((0x0, qK['zI'])("GameUI", "CustomizeK" + "eyInput"));
      NS["convertChi" + "ldren"]();
      Ng["addChild"](NS);
      Ng["labelText"] = q5['A_']["spriteToTe" + "xtField"](NS["labelText"], NS);
      Ng["inputText"] = q5['A_']["spriteToTe" + 'xtField'](NS['inputText'], NS);
      Ng["defaultTex" + 't'] = q5['A_']["spriteToTe" + "xtField"](NS["defaultTex" + 't'], NS);
      Ng['bg'] = NS['bg'];
      Ng["labelText"]["text"] = Nr;
      Ng["labelText"]["wordWrap"] = !0x0;
      Ng["labelText"]["width"] = 0x3e8;
      Ng['inputText']["text"] = Ng["lastInput"] = NJ;
      Ng["inputText"]['y'] += 0x2;
      Ng["inputText"]["wordWrap"] = !0x0;
      Ng["inputText"]["width"] = 0x3e8;
      Ng["inputText"]["mouseEnabl" + 'ed'] = !0x1;
      Ng["defaultTex" + 't']["text"] = ND;
      Ng["defaultTex" + 't']["wordWrap"] = !0x0;
      Ng["defaultTex" + 't']["width"] = 0x3e8;
      Ng["mouseEnabl" + 'ed'] = !0x0;
      Ng['bg']["addEventLi" + "stener"](q5['Cm']['MOUSE_UP'], Ng["handleMous" + 'eUp']);
      Ng['bg']["buttonMode"] = !0x0;
      Ng['bg']["tabEnabled"] = !0x1;
      return Ng;
    }
    var Ni;
    var NE;
    NE = Nl;
    (Ni = No)["prototype"] = Object["create"](NE["prototype"]);
    Ni["prototype"]["constructo" + 'r'] = Ni;
    nK(Ni, NE);
    var NR;
    var NW;
    var NA = No["prototype"];
    NA["disable"] = function () {
      "TcObr" !== "TcObr" ? qT['stage']["removeEven" + "tListener"](qR['Cm']["MOUSE_MOVE"], qz["mobileMous" + "eMoveHandl" + 'er']) : (this["alpha"] = 0.5, this['bg']["buttonMode"] = !0x1, this['bg']['removeEven' + "tListener"](q5['Cm']["MOUSE_UP"], this["handleMous" + "eUp"]));
    };
    NA["enable"] = function () {
      if ("iFKyn" === "iFKyn") {
        this["alpha"] = 0x1;
        this['bg']['buttonMode'] = !0x0;
        this['bg']["filters"] = [];
        this['bg']['addEventLi' + "stener"](q5['Cm']["MOUSE_UP"], this["handleMous" + "eUp"]);
      } else {
        var NJ;
        var ND;
        var Ng;
        qN["prototype"]["createJoin" + 'ts']["call"](this);
        var NS = qc['oneEightyO' + "verPI"];
        ND = 0x32 / NS - (NJ = this["lowerLeg1B" + "ody"]['GetAngle']() - this["upperLeg1B" + "ody"]["GetAngle"]());
        Ng = 0x96 / NS - NJ;
        this["kneeJoint1"]["SetLimits"](ND, Ng);
        ND = 0x32 / NS - (NJ = this['lowerLeg2B' + "ody"]["GetAngle"]() - this['upperLeg2B' + "ody"]["GetAngle"]());
        Ng = 0x96 / NS - NJ;
        this["kneeJoint2"]['SetLimits'](ND, Ng);
        ND = -0x6e / NS - (NJ = this['upperLeg1B' + "ody"]["GetAngle"]() - this["pelvisBody"]["GetAngle"]());
        Ng = -0x28 / NS - NJ;
        ND = -0x6e / NS - (NJ = this["upperLeg2B" + 'ody']["GetAngle"]() - this["pelvisBody"]["GetAngle"]());
        Ng = -0x28 / NS - NJ;
        ND = -0xa0 / NS - (NJ = this["lowerArm1B" + "ody"]['GetAngle']() - this['upperArm1B' + "ody"]["GetAngle"]());
        Ng = -0x14 / NS - NJ;
        this["elbowJoint" + '1']['SetLimits'](ND, Ng);
        ND = -0xa0 / NS - (NJ = this["lowerArm2B" + "ody"]["GetAngle"]() - this["upperArm2B" + "ody"]["GetAngle"]());
        Ng = -0x14 / NS - NJ;
        this["elbowJoint" + '2']["SetLimits"](ND, Ng);
        ND = -0xa / NS - (NJ = this["head1Body"]["GetAngle"]() - this["chestBody"]["GetAngle"]());
        Ng = 0xa / NS - NJ;
        this['neckJoint']["SetLimits"](ND, Ng);
        var Nd = new qV['Gq']();
        var Nz = new qE['RM']();
        var NF = this["shapeGuide"]["crateAncho" + 'r'];
        Nz['Set'](this["_startX"] + NF['x'] / this["character_" + "scale"], this["_startY"] + NF['y'] / this["character_" + "scale"]);
        Nd["enableLimi" + 't'] = !0x0;
        Nd["lowerAngle"] = 0x0;
        Nd["upperAngle"] = 0x0;
        Nd["Initialize"](this["mom"]["frameBody"], this["basketBody"], Nz);
        this["connecting" + "Joint"] = this["_session"]["m_world"]["CreateJoin" + 't'](Nd);
        Nd["enableLimi" + 't'] = !0x1;
        Nz["SetV"](this["lowerArm1B" + 'ody']["GetWorldPo" + "int"](new ql['RM'](0x0, this["lowerArm1S" + "hape"]["GetVertice" + 's']()[0x2]['y'])));
        Nd["Initialize"](this['basketBody'], this["lowerArm1B" + "ody"], Nz);
        this["basketHand" + '1'] = this["_session"]["m_world"]["CreateJoin" + 't'](Nd);
        Nz["SetV"](this["lowerArm2B" + 'ody']["GetWorldPo" + "int"](new q3['RM'](0x0, this["lowerArm2S" + "hape"]["GetVertice" + 's']()[0x2]['y'])));
        Nd["Initialize"](this["basketBody"], this["lowerArm2B" + 'ody'], Nz);
        this['basketHand' + '2'] = this["_session"]["m_world"]["CreateJoin" + 't'](Nd);
        var NM = new No['iE']();
        Nz["SetV"](this["pelvisBody"]["GetWorldCe" + "nter"]());
        NM["enableLimi" + 't'] = !0x0;
        NM["upperTrans" + "lation"] = 0.25;
        NM["lowerTrans" + "lation"] = 0x0;
        var NH = 0x19 / NS;
        NM["Initialize"](this["basketBody"], this["pelvisBody"], Nz, new qs['RM'](qf["sin"](NH), -q9["cos"](NH)));
        this["basketPelv" + 'is'] = this["_session"]["m_world"]["CreateJoin" + 't'](NM);
      }
    };
    NA["highlight"] = function (Nr) {
      if ("fsqXW" === 'bNhAY') {
        var Ng = NA["random"]() * (qI["random"]() * this["speedRange"] - this["halfSpeedR" + "ange"]);
        var NS = qS["random"]() * (qA["random"]() * this['speedRange'] - this["threeQuart" + "erSpeedRan" + 'ge']);
        var Nd = this["startX"] + qN["random"]() * this["initialRan" + 'ge'] - this["halfInitia" + "lRange"];
        var Nz = this["startY"] + qc["random"]() * this["initialRan" + 'ge'] - this["halfInitia" + "lRange"];
        var NF = new this["particleCl" + "ass"](this['_container'], Nd, Nz, Ng, NS);
        NF["next"] = this["particleLi" + 'st'];
        this["particleLi" + 'st'] && (this["particleLi" + 'st']['prev'] = NF);
        this["particleLi" + 'st'] = NF;
      } else {
        void 0x0 === Nr && (Nr = !0x1);
        var NJ = Nr ? 0xff0000 : 0x3d88c7;
        this['bg']["filters"] = [new q5['qx'](NJ, 0x1, 0x3, 0x3, 0x64, 0x3)];
        this["alpha"] = 0x1;
      }
    };
    NA["clearHighl" + "ight"] = function () {
      if ("FYrnG" === "FYrnG") {
        this['alpha'] = 0.5;
        this['bg']["filters"] = [];
      } else {
        var NJ = this["vertebraJo" + "ints"][qA];
        var ND = this["spineMCs"][qN];
        qc = NJ["GetBody1"]()["GetInterpo" + "latedPosit" + "ion"]();
        ND['x'] = qV['x'] * this["m_physScal" + 'e'];
        ND['y'] = qE['y'] * this["m_physScal" + 'e'];
        var Ng = NJ["GetBody2"]()["GetInterpo" + "latedPosit" + "ion"]();
        var NS = ql["atan2"](q3['y'] - Ng['y'], No['x'] - Ng['x']);
        ND["rotation"] = NS * (0xb4 / qs['PI']);
        this["spineSprit" + 'e']["graphics"]["lineTo"](Ng['x'] * this["m_physScal" + 'e'], Ng['y'] * this["m_physScal" + 'e']);
      }
    };
    NA["die"] = function () {
      if ("cvwhM" === "cvwhM") {
        this["stage"]["removeEven" + "tListener"](q5['kV']["KEY_DOWN"], this['handleKeyD' + "own"]);
        this['bg']["removeEven" + "tListener"](q5['Cm']["MOUSE_UP"], this["handleMous" + "eUp"]);
      } else {
        if (this["jetsFiring"]) {
          this["jetsFiring"] = !0x1;
          for (var NJ = 0x0; NJ < this["jets"]['length']; NJ++) {
            this["jets"][NJ]['firingAllo' + "wed"] = !0x1;
          }
        }
      }
    };
    NR = No;
    (NW = [{
      'key': "keyCode",
      'get': function () {
        return this['_keyCode'];
      },
      'set': function (Nr) {
        this["_keyCode"] = Nr;
      }
    }, {
      'key': "text",
      'set': function (Nr) {
        this['bg']['filters'] = [];
        this["inputText"]["text"] = Nr;
        this["lastInput"] = Nr;
        this["stage"]["removeEven" + "tListener"](q5['kV']["KEY_DOWN"], this["handleKeyD" + "own"]);
        this["dispatchEv" + "ent"](new q5['Jh'](No['FOCUS_OUT']));
      }
    }]) && function (Nr, NJ) {
      for (var ND = 0x0; ND < NJ["length"]; ND++) {
        var Ng = NJ[ND];
        Ng["enumerable"] = Ng["enumerable"] || !0x1;
        Ng["configurab" + 'le'] = !0x0;
        "value" in Ng && (Ng["writable"] = !0x0);
        Object["defineProp" + "erty"](Nr, np(Ng["key"]), Ng);
      }
    }(NR["prototype"], NW);
    Object["defineProp" + "erty"](NR, "prototype", {
      'writable': !0x1
    });
    return NR;
  }(q5['kx']);
  function nI(Nl, No) {


    if ("MuSTd" === "vlWbw") {
      var NE = qW[qH];
      qk = q4(NE['@i']);
      if (qJ && (qr = qj[qP], qn["push"](qy), qg = qu ? qd[qm] : null)) {
        for (var NR = 0x0; NR < qa["length"]; NR++) {
          var NW;
          var NA = qC[NR];
          (NW = qt["keyedPrope" + "rtyObject"][NA]) || (NW = qM["keyedPrope" + "rtyObject"][NA] = new qi());
          var Nr = NW["get"](qD);
          Nr || (Nr = [], NW["set"](qw, Nr));
          var NJ = NE['@p' + NR];
          void 0x0 !== NJ && (Nr[q0] = 't' == NJ || 'f' == NJ ? 't' == NJ : q1(NJ));
        }
      }
    } else {
      nI = Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"]["bind"]() : function (NE, NR) {
        NE["__proto__"] = NR;
        return NE;
      };
      return nI(Nl, No);
    }
  }
  nm['FOCUS_IN'] = "focusin";
  nm["FOCUS_OUT"] = "focusout";
  var nk = function (Nl) {


    function No() {
      var NW;
      (NW = Nl["call"](this, "mc_Customi" + "zeControls" + "Menu") || this)["labels"] = ["Accelerate", "Decelerate", "Lean forwa" + 'rd', "Lean back", "Primary ac" + "tion", "Secondary " + "action 1", "Secondary " + 'action\x202', "Eject", "Switch Cam" + "era"];
      NW["keys"] = ["accelerate", "decelerate", "leanForwar" + 'd', "leanBack", "primaryAct" + "ion", "secondaryA" + "ction1", 'secondaryA' + "ction2", "eject", "switchCame" + 'ra'];
      NW["inputs"] = [];
      NW["clickToCha" + "nge"] = "Click on y" + "our settin" + "gs to chan" + 'ge\x20the\x20key' + '.';
      NW["enterUniqu" + "eKey"] = "Press a ke" + "y not asso" + "ciated wit" + "h another " + "action.";
      NW["handleMous" + "eUp"] = function (NS) {


        if (NS["target"] == NW["restoreDef" + "aultsButto" + 'n']) {
          if ("dtzuY" !== "OCKWj") {
            for (var Nd = 0x0; Nd < NW["labels"]["length"]; Nd++) {
              if ("erzFF" === "lBBeF") {
                ND = qI["setPrototy" + "peOf"] ? qS["setPrototy" + 'peOf']["bind"]() : function (NM, NH) {
                  NM['__proto__'] = NH;
                  return NM;
                };
                return qA(qN, qc);
              } else {
                var Nz = q6['w'][NW["keys"][Nd] + ('DefaultCod' + 'e')];
                q6['w'][NW["keys"][Nd] + "Code"] = Nz;
                q6['w']["sharedObje" + 'ct']['data']["keyCodes"][NW["keys"][Nd] + "Code"] = Nz;
                NW['inputs'][Nd]['keyCode'] = Nz;
                NW['inputs'][Nd]["text"] = NW["keyCodeNam" + 'es']["get"](Nz);
              }
            }
            q6['w']["sharedObje" + 'ct']["flush"]();
          } else {
            return !0x1;
          }
        }
      };
      NW["handleFocu" + 'sIn'] = function (NS) {


        NW["statusText"]["text"] = NW["enterUniqu" + "eKey"];
        for (var Nd = NW['inputs']["indexOf"](NS["target"]), Nz = 0x0; Nz < NW["inputs"]["length"]; Nz++) {
          if (Nz != Nd) {
            var NF = NW["inputs"][Nz];
            NF["disable"]();
            NF["clearHighl" + "ight"]();
          }
        }
      };
      NW["handleFocu" + "sOut"] = function (NS) {

        if ('NsWlG' === 'NsWlG') {
          for (var Nd = 0x0; Nd < NW["inputs"]["length"]; Nd++) {
            NW["inputs"][Nd]["enable"]();
          }
          NW["statusText"]["text"] = NW["clickToCha" + "nge"];
        } else {
          var NF = this["dropMenuAr" + "ray"][q8];
          0x1 == qI["currentDro" + "pStates"][qS] ? (NF["visible"] = !0x0, NF["xLeft"] = qA - NF["width"], qN = NF["xLeft"] - qc['dropMenuSp' + "acing"]) : NF["visible"] = !0x1;
        }
      };
      NW['handleValu' + "eChange"] = function (NS) {

        var Nd = NS["value"];
        var Nz = NS["target"];
        if (0x1b != Nd && 0x9 != Nd) {
          if ("ZLYxv" !== "ZLYxv") {
            qA["wheelConta" + "cts"] += 0x1;
            var Nc = qN["shape1"];
            var NX = Nc["m_body"];
            var Nx = qc["shape2"]["m_body"]["m_mass"];
            if (!(qV["contactAdd" + "Buffer"]["get"](Nc) || 0x0 != Nx && Nx < NX["m_mass"])) {
              var Nw = qf['x5']["b2Dot"](NZ["velocity"], NM["normal"]);
              (Nw = Nd["abs"](Nw)) > 0x4 && qB["contactAdd" + "Buffer"]["set"](Nc, Nw);
            }
          } else {
            for (var NF, NM = NW["inputs"]["indexOf"](Nz), NH = !0x0, Nb = 0x0; Nb < NW["inputs"]["length"]; Nb++) {
              if (Nb != NM) {
                if ("QfiOT" === "QfiOT") {
                  var NZ = NW["inputs"][Nb];
                  Nd == NZ['keyCode'] ? (NZ['highlight'](!0x0), NH = !0x1, NF = Nb) : NZ["clearHighl" + "ight"]();
                } else {
                  var NX = qz(this["_selected"]);
                  this["_selected"] = Nb;
                  qI ? this["alpha"] = 0.8 : (this["clearBound" + "ingBox"](), this["alpha"] = 0x1);
                  this['drawShape']();
                  NX != this["_selected"] && this["dispatchEv" + "ent"](new qS['Jh'](qA['$']["SELECTION_" + 'STATE_CHAN' + 'GE']));
                }
              }
            }
            NH ? (Nz['text'] = NW["keyCodeNam" + 'es']['get'](Nd), q6['w'][NW["keys"][NM] + "Code"] = Nd, q6['w']['sharedObje' + 'ct']["data"]['keyCodes'][NW["keys"][NM] + "Code"] = Nd, q6['w']["sharedObje" + 'ct']["flush"]()) : NW['statusText']["text"] = "The '" + NW["keyCodeNam" + 'es']["get"](Nd) + ("' is assoc" + 'iated\x20with' + '\x20\x27') + NW['labels'][NF] + ("'. Please " + "press anot" + "her key.");
          }
        } else {
          Nz["text"] = Nz["lastInput"];
        }
      };
      NW["statusText"] = q5['A_']["spriteToTe" + "xtField"](NW["__mc"]["statusText"], NW["__mc"]);
      NW["statusText"]["wordWrap"] = !0x0;
      NW["statusText"]["width"] = 0x3e8;
      NW['restoreDef' + 'aultsButto' + 'n'] = (0x0, qK['Iz'])(q3['yw'], NW["__mc"], "restoreDef" + "aultsButto" + 'n', {
        'fileName': "GameUI",
        'mcName': "mc_restore" + "_defaults_" + 'button'
      });
      NW['keyCodeNam' + 'es'] = new Map();
      NW["keyCodeNam" + 'es']["set"](0x8, "Backspace");
      NW["keyCodeNam" + 'es']["set"](0x9, "Tab");
      NW["keyCodeNam" + 'es']["set"](0xd, "Enter");
      NW['keyCodeNam' + 'es']["set"](0x10, "Shift");
      NW["keyCodeNam" + 'es']['set'](0x11, "Control");
      NW["keyCodeNam" + 'es']["set"](0x14, "Caps Lock");
      NW["keyCodeNam" + 'es']["set"](0x1b, "Esc");
      NW["keyCodeNam" + 'es']["set"](0x20, "Spacebar");
      NW["keyCodeNam" + 'es']["set"](0x21, "Page Up");
      NW["keyCodeNam" + 'es']['set'](0x22, "Page Down");
      NW["keyCodeNam" + 'es']["set"](0x23, "End");
      NW["keyCodeNam" + 'es']["set"](0x24, "Home");
      NW["keyCodeNam" + 'es']["set"](0x25, "Left Arrow");
      NW["keyCodeNam" + 'es']["set"](0x26, "Up Arrow");
      NW["keyCodeNam" + 'es']["set"](0x27, "Right Arro" + 'w');
      NW["keyCodeNam" + 'es']["set"](0x28, "Down Arrow");
      NW["keyCodeNam" + 'es']["set"](0x2d, "Insert");
      NW["keyCodeNam" + 'es']["set"](0x2e, "Delete");
      NW["keyCodeNam" + 'es']["set"](0x90, 'Num\x20Lock');
      NW["keyCodeNam" + 'es']["set"](0x91, "ScrLk");
      NW['keyCodeNam' + 'es']["set"](0x13, "Pause/Brea" + 'k');
      NW['keyCodeNam' + 'es']["set"](0x41, 'A');
      NW["keyCodeNam" + 'es']['set'](0x42, 'B');
      NW["keyCodeNam" + 'es']['set'](0x43, 'C');
      NW["keyCodeNam" + 'es']["set"](0x44, 'D');
      NW["keyCodeNam" + 'es']['set'](0x45, 'E');
      NW["keyCodeNam" + 'es']["set"](0x46, 'F');
      NW["keyCodeNam" + 'es']["set"](0x47, 'G');
      NW["keyCodeNam" + 'es']["set"](0x48, 'H');
      NW["keyCodeNam" + 'es']["set"](0x49, 'I');
      NW["keyCodeNam" + 'es']['set'](0x4a, 'J');
      NW["keyCodeNam" + 'es']["set"](0x4b, 'K');
      NW["keyCodeNam" + 'es']["set"](0x4c, 'L');
      NW["keyCodeNam" + 'es']["set"](0x4d, 'M');
      NW["keyCodeNam" + 'es']['set'](0x4e, 'N');
      NW["keyCodeNam" + 'es']["set"](0x4f, 'O');
      NW["keyCodeNam" + 'es']["set"](0x50, 'P');
      NW["keyCodeNam" + 'es']["set"](0x51, 'Q');
      NW["keyCodeNam" + 'es']["set"](0x52, 'R');
      NW['keyCodeNam' + 'es']["set"](0x53, 'S');
      NW["keyCodeNam" + 'es']["set"](0x54, 'T');
      NW["keyCodeNam" + 'es']["set"](0x55, 'U');
      NW['keyCodeNam' + 'es']["set"](0x56, 'V');
      NW["keyCodeNam" + 'es']['set'](0x57, 'W');
      NW["keyCodeNam" + 'es']["set"](0x58, 'X');
      NW["keyCodeNam" + 'es']["set"](0x59, 'Y');
      NW['keyCodeNam' + 'es']["set"](0x5a, 'Z');
      NW["keyCodeNam" + 'es']["set"](0x30, '0');
      NW["keyCodeNam" + 'es']["set"](0x31, '1');
      NW['keyCodeNam' + 'es']["set"](0x32, '2');
      NW["keyCodeNam" + 'es']["set"](0x33, '3');
      NW["keyCodeNam" + 'es']["set"](0x34, '4');
      NW["keyCodeNam" + 'es']['set'](0x35, '5');
      NW["keyCodeNam" + 'es']["set"](0x36, '6');
      NW["keyCodeNam" + 'es']["set"](0x37, '7');
      NW['keyCodeNam' + 'es']["set"](0x38, '8');
      NW["keyCodeNam" + 'es']['set'](0x39, '9');
      NW["keyCodeNam" + 'es']["set"](0xba, ';');
      NW["keyCodeNam" + 'es']["set"](0x3b, ';');
      NW["keyCodeNam" + 'es']["set"](0xbb, '=');
      NW["keyCodeNam" + 'es']["set"](0x3d, '=');
      NW["keyCodeNam" + 'es']["set"](0xab, '=');
      NW["keyCodeNam" + 'es']["set"](0xbd, '-');
      NW['keyCodeNam' + 'es']["set"](0xad, '-');
      NW['keyCodeNam' + 'es']["set"](0xbf, '/?');
      NW["keyCodeNam" + 'es']["set"](0xc0, '~');
      NW["keyCodeNam" + 'es']["set"](0xdb, '[');
      NW["keyCodeNam" + 'es']["set"](0xdc, '|');
      NW['keyCodeNam' + 'es']["set"](0xdd, ']');
      NW["keyCodeNam" + 'es']["set"](0xde, '\x22');
      NW["keyCodeNam" + 'es']["set"](0xa3, '\x22');
      NW["keyCodeNam" + 'es']["set"](0xbc, ',');
      NW["keyCodeNam" + 'es']['set'](0xbe, '.');
      NW["keyCodeNam" + 'es']["set"](0xbf, '/');
      NW['keyCodeNam' + 'es']["set"](0x60, "Numpad 0");
      NW["keyCodeNam" + 'es']["set"](0x61, "Numpad 1");
      NW["keyCodeNam" + 'es']["set"](0x62, 'Numpad\x202');
      NW["keyCodeNam" + 'es']["set"](0x63, "Numpad 3");
      NW["keyCodeNam" + 'es']["set"](0x64, "Numpad 4");
      NW["keyCodeNam" + 'es']["set"](0x65, "Numpad 5");
      NW['keyCodeNam' + 'es']["set"](0x66, "Numpad 6");
      NW["keyCodeNam" + 'es']["set"](0x67, "Numpad 7");
      NW["keyCodeNam" + 'es']["set"](0x68, "Numpad 8");
      NW["keyCodeNam" + 'es']["set"](0x69, "Numpad 9");
      NW["keyCodeNam" + 'es']["set"](0x6a, "Numpad *");
      NW["keyCodeNam" + 'es']["set"](0x6b, "Numpad +");
      NW["keyCodeNam" + 'es']["set"](0x6d, "Numpad -");
      NW["keyCodeNam" + 'es']["set"](0x6e, "Numpad .");
      NW["keyCodeNam" + 'es']["set"](0x6f, "Numpad /");
      NW["keyCodeNam" + 'es']["set"](0x70, 'F1');
      NW["keyCodeNam" + 'es']["set"](0x71, 'F2');
      NW["keyCodeNam" + 'es']["set"](0x72, 'F3');
      NW['keyCodeNam' + 'es']["set"](0x73, 'F4');
      NW["keyCodeNam" + 'es']["set"](0x74, 'F5');
      NW["keyCodeNam" + 'es']["set"](0x75, 'F6');
      NW["keyCodeNam" + 'es']['set'](0x76, 'F7');
      NW["keyCodeNam" + 'es']["set"](0x77, 'F8');
      NW["keyCodeNam" + 'es']["set"](0x78, 'F9');
      NW["keyCodeNam" + 'es']["set"](0x7a, 'F11');
      NW["keyCodeNam" + 'es']["set"](0x7b, "F12");
      NW['keyCodeNam' + 'es']["set"](0x7c, "F13");
      NW["keyCodeNam" + 'es']["set"](0x7d, "F14");
      NW["keyCodeNam" + 'es']["set"](0x7e, "F15");
      for (var NA = 0x0; NA < NW['labels']["length"]; NA++) {
        var Nr = NW["labels"][NA] + ':';
        var NJ = NW['keyCodeNam' + 'es']["get"](q6['w'][NW["keys"][NA] + "Code"]);
        var ND = NW["keyCodeNam" + 'es']["get"](q6['w'][NW["keys"][NA] + ("DefaultCod" + 'e')]);
        var Ng = new nm(Nr, NJ, ND);
        Ng["keyCode"] = q6['w'][NW["keys"][NA] + "Code"];
        Ng["addEventLi" + "stener"](q3['vq']["VALUE_CHAN" + 'GE'], NW["handleValu" + "eChange"]);
        Ng["addEventLi" + "stener"](nm["FOCUS_IN"], NW["handleFocu" + "sIn"]);
        Ng['addEventLi' + "stener"](nm["FOCUS_OUT"], NW["handleFocu" + 'sOut']);
        NW["inputs"]["push"](Ng);
        Ng['x'] = 0x171;
        Ng['y'] = 0x66 + 0x20 * NA;
        NW["addChild"](Ng);
      }
      NW["statusText"]["text"] = NW["clickToCha" + "nge"];
      NW["addEventLi" + "stener"](q5['Cm']['MOUSE_UP'], NW["handleMous" + "eUp"]);
      return NW;
    }
    var Ni;
    var NE;
    NE = Nl;
    (Ni = No)["prototype"] = Object["create"](NE['prototype']);
    Ni["prototype"]["constructo" + 'r'] = Ni;
    nI(Ni, NE);
    var NR = No['prototype'];
    NR["die"] = function () {
      var NW;
      this['removeEven' + "tListener"](q5['Cm']["MOUSE_UP"], this['handleMous' + "eUp"]);
      for (var NA = 0x0; NA < this["inputs"]["length"]; NA++) {
        (NW = this["inputs"][NA])["removeEven" + "tListener"](q3['vq']["VALUE_CHAN" + 'GE'], this["handleValu" + 'eChange']);
        NW["removeEven" + "tListener"](nm["FOCUS_IN"], this["handleFocu" + "sIn"]);
        NW["removeEven" + 'tListener'](nm["FOCUS_OUT"], this["handleFocu" + "sOut"]);
        NW["die"]();
      }
      Nl["prototype"]["die"]["call"](this);
    };
    NR["destroy"] = function () {
      this["__mc"]["yourSettin" + "gText"]["_pixiSprit" + 'e']["destroy"](!0x0);
      this["__mc"]["defaultSet" + "tingText"]["_pixiSprit" + 'e']['destroy'](!0x0);
      Nl["prototype"]["destroy"]["call"](this);
    };
    return No;
  }(nV);
  function ns(Nl) {

    if ("tylYo" === "tylYo") {
      var No = function (Ni) {
        if ("gtqqL" !== "LphEF") {
          if ("object" != typeof Ni || !Ni) {
            return Ni;
          }
          var NE = Ni[Symbol["toPrimitiv" + 'e']];
          if (void 0x0 !== NE) {
            var NR = NE['call'](Ni, "string");
            if ("object" != typeof NR) {
              return NR;
            }
            throw new TypeError("@@toPrimit" + "ive must r" + 'eturn\x20a\x20pr' + "imitive va" + "lue.");
          }
          return String(Ni);
        } else {
          var NA = qc["levelDataA" + 'rray'][qV];
          NA["isPublic"] && !qE && (this["publishedS" + 'eperator'] = new ql['A']("published " + "levels:"), this["publishedS" + "eperator"]['y'] = q3, this["list"]["addChild"](this["publishedS" + 'eperator']), NE += this["publishedS" + "eperator"]["height"] - 0x2, qs = !0x0);
          var Nr = new qf['oi'](NA["name"]);
          Nr['y'] = q9;
          q5 += Nr["height"] - 0x2;
          this['list']['addChild'](Nr);
          this["levelList"]["push"](Nr);
          Nr['mouseEnabl' + 'ed'] = !0x0;
          Nr["addEventLi" + "stener"](NR['Cm']["MOUSE_UP"], this['mouseUpHan' + "dler"]);
        }
      }(Nl);
      return "symbol" == typeof No ? No : No + '';
    } else {
      return q6(null);
    }
  }
  function nB(Nl, No) {


    nB = Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"]["bind"]() : function (Ni, NE) {
      Ni["__proto__"] = NE;
      return Ni;
    };
    return nB(Nl, No);
  }
  var nu = function (Nl) {


    function No(Nr) {
      var NJ;
      void 0x0 === Nr && (Nr = "mc_OldMan");
      (NJ = Nl["call"](this) || this)["bodyMinAng" + 'le'] = -0x6;
      NJ["bodyRange"] = 0x8;
      NJ["headMinAng" + 'le'] = -0x6;
      NJ["headRange"] = 0x6;
      NJ["armMinAngl" + 'e'] = -0xa;
      NJ["armRange"] = 0x28;
      NJ['foreArmMin' + 'Angle'] = -0xf;
      NJ['foreArmRan' + 'ge'] = 0x1e;
      NJ["jawTopY"] = -65.5;
      NJ['jawRangeY'] = 0xf;
      NJ["eye1LeftX"] = -0x18;
      NJ['eye1RangeX'] = 0x10;
      NJ["eye2LeftX"] = 0x22;
      NJ["eye2RangeX"] = 0xd;
      NJ["eye1TopY"] = -0xa;
      NJ["eye1RangeY"] = 0x6;
      NJ["eye2TopY"] = -0x3;
      NJ["eye2RangeY"] = 0x6;
      NJ["timeRange"] = 2.5;
      NJ["jawMoving"] = !0x1;
      NJ['_jawTween'] = 0x0;
      NJ["jawFinishe" + 'd'] = function () {

        NJ["jawMoving"] = !0x1;
      };
      var ND = new q5['j7']((0x0, qK['zI'])('GameUI', Nr));
      ND["convertChi" + "ldren"]();
      NJ["addChild"](ND);
      NJ["body"] = ND["body"];
      NJ["arm"] = NJ["body"]["getChildBy" + 'Name']("arm");
      NJ["foreArm"] = NJ["arm"]["getChildBy" + "Name"]("foreArm");
      NJ["head"] = NJ["body"]['getChildBy' + "Name"]("head");
      NJ["jaw"] = NJ["head"]["getChildBy" + "Name"]('jaw');
      NJ["eyes"] = NJ["head"]["getChildBy" + "Name"]("eyes");
      NJ["eye1"] = NJ["eyes"]["getChildBy" + "Name"]("eye1");
      NJ["eye2"] = NJ["eyes"]["getChildBy" + "Name"]("eye2");
      NJ['_jawTween'] = (NJ["jaw"]['y'] - NJ["jawTopY"]) / NJ['jawRangeY'];
      return NJ;
    }
    var Ni;
    var NE;
    NE = Nl;
    (Ni = No)["prototype"] = Object["create"](NE["prototype"]);
    Ni["prototype"]["constructo" + 'r'] = Ni;
    nB(Ni, NE);
    var NR;
    var NW;
    var NA = No["prototype"];
    NA["slideIn"] = function () {
      var Nr = this["rotation"];
      var NJ = this['x'];
      var ND = this['y'];
      this["rotation"] = -0x2d;
      this['x'] = -0x36;
      this['y'] = 0x23f;
      qP['os']['to'](this, {
        'duration': 0x2,
        'rotation': Nr,
        'x': NJ,
        'y': ND,
        'ease': qp['MI']["easeOut"],
        'delay': 0x1
      });
    };
    NA["step"] = function (Nr) {
      if ("FEbGd" === 'KUQwe') {
        qE["prototype"]["createBodi" + 'es']['call'](this);
        if (-0x1 != this['polyCheste' + "dChars"]["indexOf"](ql['w']["characterI" + "ndex"])) {
          var Nx = new NS['m2']();
          var Nw = new qJ['gv']();
          var Na = new qr['gv']();
          Nx["density"] = 0x1;
          Nx["friction"] = 0.3;
          Nx["restitutio" + 'n'] = 0.1;
          Nx['filter'] = this["defaultFil" + "ter"];
          this["paintVecto" + 'r']["splice"](this["paintVecto" + 'r']["indexOf"](this['chestBody']), 0x1);
          this["paintVecto" + 'r']['splice'](this["paintVecto" + 'r']["indexOf"](this["pelvisBody"]), 0x1);
          this["_session"]["m_world"]["DestroyBod" + 'y'](this["chestBody"]);
          this["_session"]["m_world"]["DestroyBod" + 'y'](this['pelvisBody']);
          var NY = this["shapeGuide"]["chestShape"];
          Nw["position"]["Set"](this["_startX"] + NY['x'] / this["character_" + "scale"], this['_startY'] + NY['y'] / this['character_' + "scale"]);
          Nw["angle"] = NY["rotation"] / (0xb4 / qj['PI']);
          this["chestBody"] = this["_session"]["m_world"]["CreateBody"](Nw);
          Nx["vertexCoun" + 't'] = 0x6;
          for (var Nv = 0x0; Nv < 0x6; Nv++) {
            var NL = this["shapeGuide"]["chestVert" + [Nv]];
            Nx["vertices"][Nv] = new qa['RM'](NL['x'] / this["character_" + "scale"], NL['y'] / this["character_" + "scale"]);
          }
          this["chestShape"] = this["chestBody"]["CreateShap" + 'e'](Nx);
          this['chestShape']["SetMateria" + 'l'](0x2);
          this['chestShape']["SetUserDat" + 'a'](this);
          this["_session"]["contactLis" + "tener"]["registerLi" + 'stener'](NZ['fI']["RESULT"], this["chestShape"], this["contactRes" + 'ultHandler']);
          this["_session"]["contactLis" + "tener"]["registerLi" + "stener"](qy['fI']["ADD"], this["chestShape"], this["contactAdd" + 'Handler']);
          this["chestBody"]["SetMassFro" + "mShapes"]();
          this["chestBody"]["AllowSleep" + 'ing'](!0x1);
          this["paintVecto" + 'r']["push"](this["chestBody"]);
          this["cameraFocu" + 's'] = this['chestBody'];
          NY = this["shapeGuide"]["pelvisShap" + 'e'];
          Na['position']["Set"](this["_startX"] + NY['x'] / this["character_" + "scale"], this["_startY"] + NY['y'] / this["character_" + "scale"]);
          Na["angle"] = NY["rotation"] / (0xb4 / qg['PI']);
          this["pelvisBody"] = this["_session"]["m_world"]["CreateBody"](Na);
          Nx["vertexCoun" + 't'] = 0x5;
          for (var NU = 0x0; NU < 0x5; NU++) {
            var NO = this["shapeGuide"]["pelvisVert" + [NU]];
            Nx["vertices"][NU] = new qh['RM'](NO['x'] / this["character_" + "scale"], NO['y'] / this['character_' + "scale"]);
          }
          this["pelvisShap" + 'e'] = this["pelvisBody"]["CreateShap" + 'e'](Nx);
          this["pelvisShap" + 'e']["SetMateria" + 'l'](0x2);
          this["pelvisShap" + 'e']["SetUserDat" + 'a'](this);
          this["_session"]["contactLis" + 'tener']["registerLi" + "stener"](qd['fI']["RESULT"], this["pelvisShap" + 'e'], this["contactRes" + 'ultHandler']);
          this["_session"]["contactLis" + "tener"]["registerLi" + "stener"](qm['fI']["ADD"], this["pelvisShap" + 'e'], this['contactAdd' + "Handler"]);
          this["pelvisBody"]["SetMassFro" + "mShapes"]();
          this["pelvisBody"]["AllowSleep" + "ing"](!0x1);
          this["paintVecto" + 'r']["push"](this["pelvisBody"]);
        }
      } else {
        void 0x0 === Nr && (Nr = 0x1);
        var NJ = 0x1 - (Nr = Nr < 0x0 ? 0x0 : Nr > 0x1 ? 0x1 : Nr) + 0x1;
        if (Math["random"]() < 0.02) {
          if ("VIRSD" === "RmICE") {
            qF["prototype"]["elbowBreak" + '1']["call"](this, qT);
            this["lowerArm1S" + "hape"]["m_isSensor"] = !0x1;
            this["_session"]["m_world"]["Refilter"](this["lowerArm1S" + "hape"]);
            this["torsoHand1"] && (this["_session"]["m_world"]['DestroyJoi' + 'nt'](this["torsoHand1"]), this["torsoHand1"] = null);
          } else {
            var ND = this['armMinAngl' + 'e'] + Math["random"]() * this["armRange"];
            var Ng = Math["random"]() * this["timeRange"] + 0.5;
            qP['os']['to'](this["arm"], {
              'duration': Ng * NJ,
              'rotation': ND,
              'ease': qp['MI']["easeInOut"]
            });
          }
        }
        if (Math["random"]() < 0.02) {
          if ("brddW" !== "YELUT") {
            var NS = this["foreArmMin" + "Angle"] + Math["random"]() * this["foreArmRan" + 'ge'];
            var Nd = Math["random"]() * this["timeRange"] + 0.5;
            qP['os']['to'](this["foreArm"], {
              'duration': Nd * NJ,
              'rotation': NS,
              'ease': qp['MI']["easeInOut"]
            });
          } else {
            qT['windowX'] = this["_window"]['x'];
            qR["windowY"] = this['_window']['y'];
            this["_window"]['removeEven' + 'tListener'](qz['p8']["WINDOW_CLO" + "SED"], this["windowClos" + 'ed']);
            this['_window']["closeWindo" + 'w']();
            this["_window"] = null;
          }
        }
        if (Math["random"]() < 0.02) {
          if ("NfxMg" === "igabg") {
            this["displayLis" + 't'][qR] = qz;
            this["_currentIn" + "dex"] == NM && (this["display"] = qI);
          } else {
            var Nz = this["bodyMinAng" + 'le'] + Math["random"]() * this["bodyRange"];
            var NF = Math["random"]() * this['timeRange'] + 0.5;
            qP['os']['to'](this['body'], {
              'duration': NF * NJ,
              'rotation': Nz,
              'ease': qp['MI']["easeInOut"]
            });
          }
        }
        if (Math["random"]() < 0.02) {
          if ("TPzCK" === "sWBNZ") {
            var Nv = new NM(qI, qS, qA, Ny, qc);
            this["targets"]["push"](Nv);
            return Nv;
          } else {
            var NM = this["headMinAng" + 'le'] + Math["random"]() * this["headRange"];
            var NH = Math['random']() * this["timeRange"] + 0.5;
            qP['os']['to'](this["head"], {
              'duration': NH * NJ,
              'rotation': NM,
              'ease': qp['MI']["easeInOut"]
            });
          }
        }
        if (Math["random"]() < 0.1) {
          if (this["jawMoving"]) {
            return;
          }
          var Nb = Math["random"]() * this["timeRange"] + 0.05;
          this["jawMoving"] = !0x0;
          qP['os']['to'](this, {
            'duration': Nb * NJ,
            'jawTween': Math["random"](),
            'ease': qp['MI']['easeInOut'],
            'overwrite': !0x1,
            'onComplete': this["jawFinishe" + 'd']
          });
        }
        if (Math['random']() < 0.005) {
          var NZ = Math["random"]();
          var Ny = this["eye1LeftX"] + NZ * this["eye1RangeX"];
          var Nc = Math['random']() * this["timeRange"] + 0.5;
          qP['os']['to'](this["eye1"], {
            'duration': Nc * NJ,
            'x': Ny,
            'ease': qp['MI']["easeInOut"]
          });
          Ny = this["eye2LeftX"] + NZ * this["eye2RangeX"];
          qP['os']['to'](this["eye2"], {
            'duration': Nc * NJ,
            'x': Ny,
            'ease': qp['MI']["easeInOut"]
          });
        }
      }
    };
    NR = No;
    (NW = [{
      'key': "jawTween",
      'get': function () {
        return this["_jawTween"];
      },
      'set': function (Nr) {
        this["_jawTween"] = Nr;
        this['jaw']['y'] = this["jawTopY"] + this["_jawTween"] * this["jawRangeY"];
      }
    }]) && function (Nr, NJ) {
      for (var ND = 0x0; ND < NJ["length"]; ND++) {
        if ("nnNHJ" === 'nnNHJ') {
          var Ng = NJ[ND];
          Ng["enumerable"] = Ng["enumerable"] || !0x1;
          Ng["configurab" + 'le'] = !0x0;
          'value' in Ng && (Ng["writable"] = !0x0);
          Object["defineProp" + "erty"](Nr, ns(Ng["key"]), Ng);
        } else {
          this["ejected"] && (this["currentPos" + 'e'] = 0x3);
        }
      }
    }(NR["prototype"], NW);
    Object["defineProp" + "erty"](NR, "prototype", {
      'writable': !0x1
    });
    return NR;
  }(q5['kx']);
  function nl(Nl) {

    var No = function (Ni) {
      if ("object" != typeof Ni || !Ni) {
        return Ni;
      }
      var NE = Ni[Symbol["toPrimitiv" + 'e']];
      if (void 0x0 !== NE) {
        var NR = NE["call"](Ni, "string");
        if ("object" != typeof NR) {
          return NR;
        }
        throw new TypeError('@@toPrimit' + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
      }
      return String(Ni);
    }(Nl);
    return "symbol" == typeof No ? No : No + '';
  }
  function no(Nl, No) {

    if ("mBtYM" !== "mBtYM") {
      qS["abusiveTex" + "tPrompt"] = new qA['Um'](qN["abusivePro" + "mptText"], 'ok');
      qc["abusiveTex" + 'tPrompt']["addEventLi" + 'stener'](qV['Um']["BUTTON_PRE" + "SSED"], qE['abusiveTex' + "tPromptAcc" + 'epted']);
      var NE = ql["abusiveTex" + 'tPrompt']["window"];
      q3['addChild'](NE);
      return void NE["center"]();
    } else {
      no = Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"]["bind"]() : function (NE, NR) {
        NE["__proto__"] = NR;
        return NE;
      };
      return no(Nl, No);
    }
  }
  var ni = function (Nl) {


    if ('EVzbN' === "EVzbN") {
      function NW() {
        if ("qhPEO" === 'qRzMr') {
          if (this["ejected"]) {
            this["startGrab"]();
          } else {
            this["boostVal"] += this["boostStepU" + 'p'];
            this["boostVal"] = qR["min"](this["boostMax"], this["boostVal"]);
            if (this["boostVal"] < this["boostMax"]) {
              var NJ = this["frameBody"]['GetAngle']();
              var ND = qS["cos"](NJ) * this["boostImpul" + 'se'];
              var Ng = qA["sin"](NJ) * this["boostImpul" + 'se'];
              this["frameBody"]["ApplyImpul" + 'se'](new qN['RM'](ND, Ng), this["frameBody"]["GetWorldCe" + "nter"]());
            }
          }
        } else {
          var NA;
          (NA = Nl["call"](this, "FatLady") || this)['jaw2'] = NA['head']["getChildBy" + "Name"]("jaw2");
          NA["jaw3"] = NA["head"]['getChildBy' + "Name"]("jaw3");
          NA['jaw4'] = NA["head"]["getChildBy" + 'Name']("jaw4");
          NA["jaw5"] = NA["head"]["getChildBy" + "Name"]("jaw5");
          NA["jawTopY"] = -56.85;
          NA["headMinAng" + 'le'] = -0x3;
          NA["eye1LeftX"] = -0x20;
          NA["eye1RangeX"] = 0x10;
          NA["eye1TopY"] = 0x1;
          NA["eye1RangeY"] = 0x5;
          NA["eye2LeftX"] = 0x1f;
          NA["eye2RangeX"] = 0xb;
          NA['eye2TopY'] = 0x0;
          NA["eye2RangeY"] = 0x5;
          NA["foreArmMin" + "Angle"] = -0x19;
          NA["foreArmRan" + 'ge'] = 0x3c;
          return NA;
        }
      }
      var No;
      var Ni;
      var NE;
      var NR;
      Ni = Nl;
      (No = NW)['prototype'] = Object["create"](Ni["prototype"]);
      No["prototype"]["constructo" + 'r'] = No;
      no(No, Ni);
      NE = NW;
      (NR = [{
        'key': "jawTween",
        'get': function () {
          return this["_jawTween"];
        },
        'set': function (NA) {
          this["_jawTween"] = NA;
          this["jaw"]['y'] = this["jawTopY"] + this["_jawTween"] * this["jawRangeY"];
          this["jaw2"]['y'] = 6.5 * this["_jawTween"] - 0x22;
          this["jaw3"]['x'] = 3.4 * this["_jawTween"] - 76.9;
          this['jaw3']['rotation'] = 0x0 + 11.5 * this["_jawTween"];
          this['jaw4']['y'] = 0x5 * this['_jawTween'] - 65.45;
          this["jaw5"]['x'] = 33.45 - 0xa * this['_jawTween'];
          this["jaw5"]['y'] = 7.75 * this["_jawTween"] - 16.55;
          this["jaw5"]["rotation"] = 0x0 + 10.4 * this['_jawTween'];
        }
      }]) && function (NA, Nr) {
        if ("nTDwD" !== "nTDwD") {
          this["loader"]["addEventLi" + "stener"](qF['Jh']["COMPLETE"], this["dataLoadCo" + "mplete"]);
          this["loader"]["addEventLi" + "stener"](qT['BR']["IO_ERROR"], this['securityEr' + "rorHandler"]);
        } else {
          for (var NJ = 0x0; NJ < Nr["length"]; NJ++) {
            if ('TzitX' === "QRVwK") {
              return this["_level_id"];
            } else {
              var ND = Nr[NJ];
              ND["enumerable"] = ND['enumerable'] || !0x1;
              ND["configurab" + 'le'] = !0x0;
              "value" in ND && (ND["writable"] = !0x0);
              Object["defineProp" + "erty"](NA, nl(ND["key"]), ND);
            }
          }
        }
      }(NE["prototype"], NR);
      Object["defineProp" + "erty"](NE, 'prototype', {
        'writable': !0x1
      });
      return NE;
    } else {
      var Nr = qF[qT];
      this["__mc"][Nr]["destroy"]();
    }
  }(nu);
  var nE = q2(0x18496);
  q2(0x2c80);
  var nR = q2(0x9649);
  function nW(Nl) {

    var No = function (Ni) {
      if ('ObOVc' === "ObOVc") {
        if ('object' != typeof Ni || !Ni) {
          return Ni;
        }
        var NE = Ni[Symbol["toPrimitiv" + 'e']];
        if (void 0x0 !== NE) {
          var NR = NE["call"](Ni, "string");
          if ("object" != typeof NR) {
            return NR;
          }
          throw new TypeError("@@toPrimit" + "ive must r" + 'eturn\x20a\x20pr' + "imitive va" + "lue.");
        }
        return String(Ni);
      } else {
        var NA = qz[q8];
        NA["enumerable"] = NA["enumerable"] || !0x1;
        NA['configurab' + 'le'] = !0x0;
        "value" in NA && (NA['writable'] = !0x0);
        qI['defineProp' + 'erty'](qS, qA(NA["key"]), NA);
      }
    }(Nl);
    return "symbol" == typeof No ? No : No + '';
  }
  function nA(Nl, No) {

    nA = Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"]["bind"]() : function (Ni, NE) {
      if ("GDxAe" !== 'GDxAe') {
        qr || (qj = "next");
        if (qP = qn[qy]) {
          if (!(q4 = q5["call"](q6, q7))) {
            throw q8("iterator r" + 'esult\x20is\x20n' + "ot an obje" + 'ct');
          }
          if (!q9["done"]) {
            return qq;
          }
          qn = qN["value"];
          qf < 0x2 && (qT = 0x0);
        } else {
          0x1 === q7 && (qb = qC["return"]) && qt["call"](qM);
          qi < 0x2 && (qD = qw("The iterat" + "or does no" + 't\x20provide\x20' + "a '" + q0 + "' method"), q1 = 0x1);
        }
        q2 = q3;
      } else {
        Ni["__proto__"] = NE;
        return Ni;
      }
    };
    return nA(Nl, No);
  }
  var nr = function (Nl) {

    function No() {
      if ('lKadl' !== "bznaS") {
        var Nr;
        (Nr = Nl["call"](this) || this)["keyDownHan" + "dler"] = function (NJ) {

          Nr['errorText']["text"] = '';
          0xd == NJ["keyCode"] && Nr['ifValidLoa' + 'd']();
        };
        Nr["mouseUpHan" + "dler"] = function (NJ) {


          switch (NJ["target"]) {
            case Nr['loadButton']:
              Nr["ifValidLoa" + 'd']();
              break;
            case Nr['cancelButt' + 'on']:
              Nr["dispatchEv" + "ent"](new q5['Jh'](No["CANCEL"]));
          }
        };
        Nr["buildView"]();
        Nr["createWind" + 'ow']();
        Nr["dropMenu"] = new ql['f']('load:', ["level", "replay"], [No["LEVEL"], No["REPLAY"]], No["index"], 0x888888);
        Nr["addChild"](Nr['dropMenu']);
        Nr["dropMenu"]["xLeft"] = 0x40;
        Nr["dropMenu"]['y'] = 0x23;
        Nr["loadButton"] = new q3['Ch']("load", 0xfd8181, 0x46);
        Nr["addChild"](Nr["loadButton"]);
        Nr["loadButton"]['x'] = 0x19;
        Nr["loadButton"]['y'] = 0x72;
        Nr["cancelButt" + 'on'] = new q3['Ch']("cancel", 0x999999, 0x46);
        Nr['addChild'](Nr["cancelButt" + 'on']);
        Nr["cancelButt" + 'on']['x'] = 0x69;
        Nr["cancelButt" + 'on']['y'] = 0x72;
        Nr["addEventLi" + "stener"](q5['Cm']["MOUSE_UP"], Nr["mouseUpHan" + "dler"]);
        Nr['addEventLi' + "stener"](q5['kV']["KEY_DOWN"], Nr['keyDownHan' + "dler"]);
        return Nr;
      } else {
        qT["__proto__"] = qR;
        return qz;
      }
    }
    var Ni;
    var NE;
    NE = Nl;
    (Ni = No)["prototype"] = Object["create"](NE['prototype']);
    Ni["prototype"]["constructo" + 'r'] = Ni;
    nA(Ni, NE);
    var NR;
    var NW;
    var NA = No['prototype'];
    NA["buildView"] = function () {
      this['mc'] = new q5['j7']((0x0, qK['zI'])("GameUI", "mc_LoadLev" + "elMenu"));
      this['mc']['convertChi' + "ldren"]();
      this["addChild"](this['mc']);
      this["searchText"] = q5['A_']['spriteToTe' + "xtField"](this['mc']['searchText'], this['mc']);
      this["errorText"] = q5['A_']["spriteToTe" + "xtField"](this['mc']['errorText'], this['mc']);
      this["errorText"]["wordWrap"] = !0x0;
      this["errorText"]["width"] = 0x3e8;
      this["searchText"]["type"] = q5['ux']["INPUT"];
      this["searchText"]["_pixiTextI" + "nput"]["setInputSt" + "yle"]("width", "140px");
    };
    NA["createWind" + 'ow'] = function () {
      this['_window'] = new q3['p8'](!0x1, this, !0x0);
    };
    NA["executeDeb" + "ugCommand"] = function (Nr) {
      if ("SlEkY" !== "iMYDK") {
        return "d_toggle_m" + "ore_stats" === Nr ? (q6['w']["showAdvanc" + "edStats"] = !q6['w']["showAdvanc" + 'edStats'], q6['w']["showAdvanc" + "edStats"] ? q6['w']['moreStatsD' + "isplay"] = new nR['Z']() : q6['w']["moreStatsD" + "isplay"]["destroy"](), !0x0) : "d_toggle_h" + 'ud' === Nr && (q6['w']["hideHUD"] = !q6['w']["hideHUD"], q6['w']['debugText']["visible"] = !q6['w']['hideHUD'], !0x0);
      } else {
        var ND;
        qJ["listLoadPe" + "nding"] = !0x1;
        qr["statusSpri" + 'te']["die"]();
        qj["removeLoad" + "erListener" + 's']();
        qP["refreshBut" + "ton"]["setSpin"](!0x1);
        var Ng = qn(qy["loader"]["data"]);
        var NS = Ng["substr"](0x0, 0x8);
        if (NS["indexOf"]("<html>") > -0x1) {
          qg["createProm" + "ptSprite"]("There was " + "an unexpec" + 'ted\x20system' + '\x20Error', 'oh');
          return void qu["updateRefr" + "eshButton"](!0x0);
        }
        if (NS["indexOf"]("failure") > -0x1) {
          var Nd = Ng["split"](':');
          "invalid_ac" + "tion" == Nd[0x1] ? q2["createProm" + "ptSprite"]("An invalid" + '\x20action\x20wa' + "s passed (" + "you really" + " shouldn't" + " ever be s" + "eeing this" + ').', 'ok') : 'bad_param' == Nd[0x1] ? q3['createProm' + "ptSprite"]("A bad para" + "meter was " + "passed (yo" + "u really s" + "houldn't e" + "ver be see" + 'ing\x20this).', 'ok') : "app_error" == Nd[0x1] ? q4["createProm" + "ptSprite"]("Sorry, the" + "re was an " + "applicatio" + "n error. I" + "t was most" + " likely da" + "tabase rel" + "ated. Plea" + "se try aga" + "in in a mo" + "ment.", 'ok') : q5['createProm' + "ptSprite"]("An unknown" + " Error has" + " occurred.", 'oh');
          return void q6["updateRefr" + 'eshButton'](!0x0);
        }
        qZ['updateRefr' + "eshButton"]();
        var Nz = new qo['_9'](qK["loader"]["data"]);
        var NF = (0x0, Nl['Wh'])(Nz["@pp"]);
        NF > 0x1 && (q7["setLength"] = NF);
        qb["levelDataA" + 'rray'] || (qC["levelDataA" + "rray"] = []);
        for (var NM = null === (ND = Nz['lv']) || void 0x0 === ND ? void 0x0 : ND["length"], NH = 0x0; NH < NM; NH++) {
          var Nb = Nz['lv'][NH];
          var NZ = new q7['m3'](Nb["@id"], Nb["@ln"], Nb["@ui"], Nb["@un"], Nb["@rg"], Nb["@vs"], Nb['@ps'], Nb["@dp"], Nb['uc'][0x0]["cdata"], Nb["@pc"], 0x1, 0x1, 0x1, Nb["@dp"]);
          q8["levelDataA" + "rray"]["push"](NZ);
          q9["ownFavorit" + "esListed"]() && qq['w']["favoriteLe" + "velIds"]['push'](NZ['id']);
        }
        qw["list"] && q0["killList"]();
        q1["buildList"]();
      }
    };
    NA["ifValidLoa" + 'd'] = function () {

      if ("MjcEW" !== "MjcEW") {
        var ND = function (Ng) {
          if ('object' != typeof Ng || !Ng) {
            return Ng;
          }
          var NS = Ng[ND['toPrimitiv' + 'e']];
          if (void 0x0 !== NS) {
            var Nd = NS["call"](Ng, "string");
            if ("object" != typeof Nd) {
              return Nd;
            }
            throw new qc("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
          }
          return qN(Ng);
        }(qI);
        return "symbol" == typeof ND ? ND : ND + '';
      } else {
        this["searchText"]['text'] = this["searchText"]["_pixiTextI" + 'nput']["text"];
        this["errorText"]["text"] = '';
        if (this["searchText"]["text"]["startsWith"]('d_')) {
          return this["executeDeb" + "ugCommand"](this['searchText']["text"]) ? void this["dispatchEv" + "ent"](new q5['Jh'](No['CANCEL'])) : void (this["errorText"]["text"] = "Unknown co" + "mmand");
        }
        var Nr = !0x0;
        0x1 == this["searchText"]["text"]["split"]('=')['length'] ? (isNaN(Number(this["searchText"]["text"])) && (Nr = !0x1), Number(this["searchText"]["text"]) < 0x1 && (Nr = !0x1)) : -0x1 == this["searchText"]["text"]["indexOf"]("level_id") && -0x1 == this['searchText']["text"]["indexOf"]("replay_id") && (Nr = !0x1);
        Nr ? this['dispatchEv' + "ent"](new q5['Jh'](No["LOAD"])) : this['errorText']["text"] = "ID is inva" + "lid.";
      }
    };
    NA["die"] = function () {
      No["index"] = this["dropMenu"]["currentInd" + 'ex'];
      this["removeEven" + 'tListener'](q5['Cm']["MOUSE_UP"], this["mouseUpHan" + 'dler']);
      this["searchText"]["removeEven" + "tListener"](q5['kV']["KEY_DOWN"], this["keyDownHan" + "dler"]);
      this['dropMenu']["die"]();
      this['_window']["closeWindo" + 'w']();
    };
    NA["destroy"] = function () {
      if ("YkHkV" === "YkHkV") {
        this['mc']["helpText"]["_pixiSprit" + 'e']["destroy"]({
          'children': !0x0,
          'texture': !0x0,
          'baseTexture': !0x0
        });
        this["searchText"]["destroy"]();
        this['mc']["removeChil" + 'd'](this["searchText"]);
        this['searchText'] = null;
        Nl["prototype"]["destroy"]["call"](this);
      } else {
        var NJ = qE(ql["saveMenu"]["levelName"]);
        var ND = q3(No["saveMenu"]["comments"]);
        qs['closeSaveM' + "enu"]();
        qf["dispatchEv" + "ent"](new NA['Jh'](q5["MENU_BUSY"]));
        var Ng = Ni['instance'];
        Ng["addEventLi" + "stener"](qB["SAVE_COMPL" + "ETE"], qW["saveComple" + 'te']);
        Ng["addEventLi" + "stener"](qH["GENERIC_ER" + 'ROR'], qk["saveComple" + 'te']);
        Ng["saveNewLev" + 'el'](NJ, ND);
      }
    };
    NR = No;
    (NW = [{
      'key': "window",
      'get': function () {
        return this["_window"];
      }
    }, {
      'key': 'loadType',
      'get': function () {
        return this["dropMenu"]["value"];
      }
    }, {
      'key': "loadID",
      'get': function () {
        return this["searchText"]["text"];
      },
      'set': function (Nr) {
        'IoFyo' !== "KbgWA" ? this['searchText']["text"] = Nr : (qT["saverLoade" + 'r']["buildLevel"](qR["target"]["result"]), qz["loadContai" + "ner"]["hide"]());
      }
    }]) && function (Nr, NJ) {
      for (var ND = 0x0; ND < NJ["length"]; ND++) {
        var Ng = NJ[ND];
        Ng["enumerable"] = Ng['enumerable'] || !0x1;
        Ng["configurab" + 'le'] = !0x0;
        "value" in Ng && (Ng['writable'] = !0x0);
        Object["defineProp" + "erty"](Nr, nW(Ng["key"]), Ng);
      }
    }(NR["prototype"], NW);
    Object["defineProp" + "erty"](NR, "prototype", {
      'writable': !0x1
    });
    return NR;
  }(q5['kx']);
  nr["REPLAY"] = "replay";
  nr["LEVEL"] = "level";
  nr["LOAD"] = "load";
  nr["CANCEL"] = 'cancel';
  nr["index"] = 0x0;
  var nJ = q2(0x15719);
  function nD(Nl) {


    if ('IVjkR' === "IVjkR") {
      var No = function (Ni) {
        if ("object" != typeof Ni || !Ni) {
          return Ni;
        }
        var NE = Ni[Symbol["toPrimitiv" + 'e']];
        if (void 0x0 !== NE) {
          if ('dCbEk' === "oEaYF") {
            qF['shape2']["m_isSensor"] || (qT["wheelConta" + "cts"] -= 0x1);
          } else {
            var NR = NE["call"](Ni, "string");
            if ("object" != typeof NR) {
              return NR;
            }
            throw new TypeError('@@toPrimit' + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
          }
        }
        return String(Ni);
      }(Nl);
      return "symbol" == typeof No ? No : No + '';
    } else {
      if (this["count"] > this["total"]) {
        this["finished"] = !0x0;
      } else {
        this["count"]++;
        ql["totalParti" + "cles"] += 0x1;
        var NE = q3["random"]() * (this["yMaxSpeed"] - this["yMinSpeed"]) + this["yMinSpeed"];
        var NR = this["targetBody"]["GetInterpo" + "latedAngle"]() + this["rot"];
        var NW = this['targetBody']["GetLinearV" + 'elocityFro' + "mLocalPoin" + 't'](this["offSet"]);
        var NA = No['cos'](NR) * NE + NW['x'];
        var Nr = qs["sin"](NR) * NE + NW['y'];
        var NJ = qf["floor"](q9["random"]() * this['bmdLength']);
        var ND = new q5(Nr, NA, this["bmdArray"][NJ]);
        this["addChildAt"](ND, 0x0);
        var Ng = this["targetBody"]["GetInterpo" + "latedWorld" + "Point"](this["offSet"]);
        ND['x'] = Ng['x'] * this["m_physScal" + 'e'] - 0.5 * ND["width"];
        ND['y'] = Ng['y'] * this["m_physScal" + 'e'] - 0.5 * ND["height"];
      }
    }
  }
  function ng(Nl, No) {


    ng = Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"]["bind"]() : function (Ni, NE) {
      Ni['__proto__'] = NE;
      return Ni;
    };
    return ng(Nl, No);
  }
  var nS = function (Nl) {


    function No(Nr, NJ, ND) {
      var Ng;
      (Ng = Nl["call"](this) || this)['tweenTime'] = 0.4;
      Ng["maxScale"] = 1.5;
      Ng["rollOverHa" + 'ndler'] = function (Nd) {


        qP['os']['to'](Ng, {
          'duration': Ng["tweenTime"],
          'scaleX': Ng["maxScale"],
          'scaleY': Ng["maxScale"],
          'ease': qp['MI']["easeInOut"]
        });
        nJ['m']["instance"]["playSoundI" + "tem"]("SwishUp");
      };
      Ng["rollOutHan" + "dler"] = function (Nd) {


        if ("xtcPC" === "aYRZp") {
          if ("object" != typeof qA || !qN) {
            return qc;
          }
          var NF = qV[qE['toPrimitiv' + 'e']];
          if (void 0x0 !== NF) {
            var NM = NF['call'](qf, "string");
            if ("object" != typeof NM) {
              return NM;
            }
            throw new q9("@@toPrimit" + 'ive\x20must\x20r' + 'eturn\x20a\x20pr' + "imitive va" + "lue.");
          }
          return Nr(qs);
        } else {
          qP['os']['to'](Ng, {
            'duration': Ng["tweenTime"],
            'scaleX': 0x1,
            'scaleY': 0x1,
            'ease': qp['MI']["easeInOut"]
          });
        }
      };
      Ng["buttonMode"] = !0x0;
      Ng["tabEnabled"] = !0x1;
      Ng["createText" + "Field"](NJ, ND);
      Ng["textField"]["htmlText"] = Nr;
      Ng["createHitB" + 'ox']();
      var NS = new q5['GD'](0x3, 0x5a, 0x0, 0x1, 0x5, 0x5, 0.25, 0x1);
      Ng["textField"]["filters"] = [NS];
      Ng["addEventLi" + "stener"](q5['Cm']["ROLL_OVER"], Ng["rollOverHa" + "ndler"], !0x1, 0x0, !0x0);
      Ng["addEventLi" + 'stener'](q5['Cm']["ROLL_OUT"], Ng["rollOutHan" + "dler"], !0x1, 0x0, !0x0);
      return Ng;
    }
    var Ni;
    var NE;
    NE = Nl;
    (Ni = No)["prototype"] = Object["create"](NE['prototype']);
    Ni["prototype"]["constructo" + 'r'] = Ni;
    ng(Ni, NE);
    var NR;
    var NW;
    var NA = No["prototype"];
    NA["disable"] = function () {
      this['mouseEnabl' + 'ed'] = !0x1;
      this["rollOutHan" + "dler"]();
    };
    NA["enable"] = function () {
      this["mouseEnabl" + 'ed'] = !0x0;
      this['rollOutHan' + "dler"]();
    };
    NA["createText" + "Field"] = function (Nr, NJ) {
      var ND = new q5['lk']("Clarendon " + "LT Std Bol" + 'd', Nr, NJ, null, null, null, null, null, q5['MA']['RIGHT']);
      this["textField"] = new q5['A_']();
      this["textField"]["defaultTex" + 'tFormat'] = ND;
      this["textField"]["width"] = 0x0;
      this["textField"]["height"] = 0x14;
      this["textField"]['autoSize'] = q5['wL']["RIGHT"];
      this["textField"]['x'] = 0x0;
      this["textField"]['y'] = 0x0;
      this["textField"]["multiline"] = !0x0;
      this["textField"]["wordWrap"] = !0x1;
      this["textField"]["selectable"] = !0x1;
      this["textField"]["antiAliasT" + "ype"] = q5['BF']['NORMAL'];
      this["textField"]["mouseEnabl" + 'ed'] = !0x1;
      this['addChild'](this["textField"]);
    };
    NA["createHitB" + 'ox'] = function () {
      var Nr = this["textField"]['height'];
      var NJ = 0.55 * Nr;
      var ND = (Nr - NJ) / 0x2;
      this["hitBox"] = new q5['kx']();
      this["hitBox"]["graphics"]["beginFill"](0xff0000);
      this["hitBox"]["graphics"]["drawRect"](0x0, 0x0, this["textField"]["width"], NJ);
      this["hitBox"]["graphics"]["endFill"]();
      this["hitBox"]['x'] = -this["hitBox"]["width"];
      this["hitBox"]["alpha"] = 0x0;
      this["textField"]['y'] = -ND;
      this["addChild"](this["hitBox"]);
      this['hitArea'] = this["hitBox"];
    };
    NA['addArrow'] = function () {
      var Nr = new q5['j7']();
      Nr["setPixiMov" + "ieClip"]((0x0, qK['zI'])("GameUI", "BigArrow"));
      Nr['x'] = -this["textField"]["width"] - 0x5;
      Nr['y'] = 0x8;
      Nr["alpha"] = 0x0;
      this["addChild"](Nr);
      qP['os']['to'](Nr, {
        'duration': 0.5,
        'alpha': 0x1,
        'ease': qp['MI']["easeOut"]
      });
    };
    NA['die'] = function () {
      qP['os']["killTweens" + 'Of'](this);
      this["removeEven" + "tListener"](q5['Cm']["ROLL_OVER"], this["rollOverHa" + "ndler"]);
      this["removeEven" + "tListener"](q5['Cm']["ROLL_OUT"], this["rollOutHan" + "dler"]);
    };
    NR = No;
    (NW = [{
      'key': "height",
      'get': function () {
        return this["hitBox"]["height"] * this["scaleX"];
      },
      'set': function (Nr) {
        this["pixiSprite"]["scale"]['y'] = 0x1;
        var NJ = this["getRelativ" + "eBounds"]();
        this["pixiSprite"]["scale"]['y'] = Nr / NJ["height"];
      }
    }]) && function (Nr, NJ) {
      if ('YtyxI' !== "YtyxI") {
        this['ejected'] ? this['startGrab']() : this["connecting"] = !0x0;
      } else {
        for (var ND = 0x0; ND < NJ["length"]; ND++) {
          var Ng = NJ[ND];
          Ng["enumerable"] = Ng['enumerable'] || !0x1;
          Ng["configurab" + 'le'] = !0x0;
          "value" in Ng && (Ng["writable"] = !0x0);
          Object["defineProp" + "erty"](Nr, nD(Ng["key"]), Ng);
        }
      }
    }(NR["prototype"], NW);
    Object["defineProp" + "erty"](NR, "prototype", {
      'writable': !0x1
    });
    return NR;
  }(q5['kx']);
  function nd(Nl, No) {


    nd = Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"]["bind"]() : function (Ni, NE) {
      return "pMrWG" !== "pMrWG" ? (qT["__proto__"] = qR, qz) : (Ni["__proto__"] = NE, Ni);
    };
    return nd(Nl, No);
  }
  var nz = function (Nl) {


    function No(NW, NA, Nr, NJ, ND, Ng, NS, Nd, Nz) {
      if ("ZspiP" !== "vUqjj") {
        void 0x0 === Nd && (Nd = "GameUI");
        void 0x0 === Nz && (Nz = "mc_options" + "_Slider");
        return Nl["call"](this, NW, NA, Nr, NJ, ND, Ng, NS, Nd, Nz) || this;
      } else {
        void 0x0 === qz && (q8 = !0x1);
        qI && this["selectedLi" + "stItem"] && (this["selectedLi" + "stItem"]["selected"] = !0x1, this["selectedLi" + "stItem"] = null);
        this["closing"] = !0x0;
        this["killLevelS" + "election"]();
        qS['os']['to'](this, {
          'duration': this["tweenTime"],
          'tweenVal': 0x0,
          'ease': qA['MI']["easeInOut"],
          'onComplete': this["closingCom" + "plete"]
        });
      }
    }
    var Ni;
    var NE;
    NE = Nl;
    (Ni = No)["prototype"] = Object["create"](NE["prototype"]);
    Ni['prototype']['constructo' + 'r'] = Ni;
    nd(Ni, NE);
    var NR = No["prototype"];
    NR["prepare"] = function () {
      "CJzDg" !== "oWUSo" ? (this["sliderTab"]["addEventLi" + "stener"](q5['Cm']["MOUSE_DOWN"], this["mouseDownH" + "andler"]), this["labelText"]['mouseEnabl' + 'ed'] = !0x1, this['removeChil' + 'd'](this["labelText"]), this["inputText"]["defaultTex" + "tFormat"] = new q5['lk']('Clarendon\x20' + "LT Std", 0x14, 0xffffff, null, null, null, null, null, null, null, null, null, 0x2), this["inputText"]["wordWrap"] = this["labelText"]["wordWrap"] = !0x1, this["inputText"]["autoSize"] = this["labelText"]["autoSize"] = q5['wL']["LEFT"], this["inputText"]["addEventLi" + "stener"](q5['kV']["KEY_DOWN"], this["keyDownHan" + "dlerBind"]), this["inputText"]["position"]["set"](0x2, 0x2)) : q6['opening'] = !0x1;
    };
    NR["updateInpu" + "tPosition"] = function () {};
    NR["destroy"] = function () {
      this['mc']["inputText"]["destroy"](!0x0);
      this['mc']['labelText']["destroy"](!0x0);
      Nl["prototype"]["destroy"]["call"](this);
    };
    return No;
  }(q3['Cw']);
  function nF(Nl, No) {


    if ("mmwGq" !== "uUopG") {
      nF = Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"]["bind"]() : function (Ni, NE) {
        if ("IfqiK" !== "IfqiK") {
          qN["chestAttac" + "hed"] = !0x1;
          var NW = new qc['gv']();
          var NA = new qV['_A']();
          NA["density"] = 0.25;
          NA['friction'] = 0x1;
          NA["restitutio" + 'n'] = 0.1;
          NA["filter"]["categoryBi" + 'ts'] = 0x0;
          NA["filter"]["maskBits"] = 0x0;
          NA["radius"] = 0.048;
          NW["position"] = qE["chestBody"]["GetWorldPo" + "int"](new ql['RM'](0x0, 0.16));
          var Nr = this["_session"]['m_world']['CreateBody'](NW);
          Nr["CreateShap" + 'e'](NA);
          Nr["SetMassFro" + "mShapes"]();
          Nr["SetLinearV" + "elocity"](q3["chestBody"]["GetLinearV" + "elocity"]());
          this["antiGravAr" + "ray"]["push"](Nr);
          var NJ = new NE['Vy']();
          if (qs == this["elf1"]) {
            var ND = this["strapChest" + "1Joints"]["length"] - 0x1;
            var Ng = this["strapChest" + "1Joints"][ND];
            NJ["Initialize"](Ng["m_body1"], Nr, Ng["m_body1"]["GetWorldPo" + "int"](new q5['RM'](0x0, -0.016)), NW["position"]);
            NJ["length"] = Ng['m_length'];
            var NS = this["_session"]["m_world"]["CreateJoin" + 't'](NJ);
            this["strapChest" + "1Joints"][ND] = NS;
          } else {
            ND = this["strapChest" + "2Joints"]["length"] - 0x1;
            Ng = this["strapChest" + "2Joints"][ND];
            NJ['Initialize'](Ng["m_body1"], Nr, Ng["m_body1"]["GetWorldPo" + "int"](new q9['RM'](0x0, -0.016)), NW["position"]);
            NJ["length"] = Ng["m_length"];
            NS = this["_session"]["m_world"]['CreateJoin' + 't'](NJ);
            this['strapChest' + "2Joints"][ND] = NS;
          }
          this['headSmashe' + 'd'] || this["_session"]["m_world"]["DestroyJoi" + 'nt'](Ng);
        } else {
          Ni["__proto__"] = NE;
          return Ni;
        }
      };
      return nF(Nl, No);
    } else {
      var NE = 0.5 * q1["delta"];
      var NR = qs["commentsBg"]["height"] / 0x2;
      var NW = (NR - qf["commentsBg"]["mouseY"]) / NR * 0xa * NE;
      q9["commentsTe" + 'xt']['y'] += NW;
      q5['commentsTe' + 'xt']['y'] + q2["commentsTe" + 'xt']["height"] < qB["commentsBg"]['y'] + qW["commentsBg"]["height"] && (qH["commentsTe" + 'xt']['y'] = qk["commentsBg"]['y'] + q4["commentsBg"]["height"] - qJ["commentsTe" + 'xt']['height']);
      qr["commentsTe" + 'xt']['y'] > qj["commentsBg"]['y'] + 0x5 && (qP['commentsTe' + 'xt']['y'] = qn["commentsBg"]['y'] + 0x5);
    }
  }
  var nM = function (Nl) {

    if ('qHrPX' === "qHrPX") {
      function NR(NW) {

        if ("MdrQP" !== "TGZxV") {
          var NA;
          (NA = Nl["call"](this, "mc_Options" + "Menu") || this)["keepGamepa" + "dCacheOnDi" + 'e'] = !0x1;
          NA["mouseUpHan" + "dler"] = function (ND) {
            switch (ND["target"]) {
              case NA['touchContr' + 'olsCheck']:
                NA['displayMob' + "ileControl" + "sChangePop" + 'up']();
                break;
              case NA["fCheck"]:
                NA["stage"]["displaySta" + 'te'] == q5['se']["FULL_SCREE" + "N_INTERACT" + "IVE"] ? (NA["stage"]["displaySta" + 'te'] = q5['se']['NORMAL'], NA["stage"]["displaySta" + 'te'] == q5['se']["NORMAL"] && NA["fCheck"]["gotoAndSto" + 'p'](0x1)) : (NA["stage"]["displaySta" + 'te'] = q5['se']["FULL_SCREE" + "N_INTERACT" + "IVE"], NA["stage"]["displaySta" + 'te'] == q5['se']["FULL_SCREE" + "N_INTERACT" + "IVE"] && NA["fCheck"]["gotoAndSto" + 'p'](0x2));
                break;
              case NA["increasedF" + "ramesCheck"]:
                if (q6['w']['use60FPS']) {
                  NA["increasedF" + 'ramesCheck']['gotoAndSto' + 'p'](0x1);
                  q6['w']["use60FPS"] = !0x1;
                  q5['b0']["maxFPS"] = 0x1e;
                  NA["sharedObje" + 'ct']["data"]["use60FPS"] = !0x1;
                } else {
                  if ("hzYGy" !== 'FVqCr') {
                    var Ng = new q3['rg']("WARNING!\nD" + "o not enab" + "le this if" + '\x20you\x20are\x20a' + 'lready\x20str' + "uggling to" + " run Happy" + " Wheels at" + " 30 FPS. T" + "his option" + " does NOT " + 'improve\x20pe' + "rformance " + "and simply" + " raises th" + "e FPS cap," + " so do not" + " enable th" + "is if you " + "are on a s" + "low PC.\n\nT" + "his option" + " is still " + 'experiment' + "al, so exp" + 'ect\x20some\x20m' + "inor graph" + "ical issue" + "s. Turn th" + "is back of" + "f if you a" + "re not rea" + "ching 60 F" + "PS during " + 'gameplay.', "raise fps " + 'cap\x20to\x2060', "leave it a" + "t 30 fps", !0x0, 0x118, 0x78, 0x4ec44d, 0xfd8181);
                    Ng['addEventLi' + 'stener'](q3['rg']["ANSWER_CHO" + "SEN"], NA["increasedF" + "ramesWarni" + "ngAnswerCh" + "osen"], !0x1, 0x0, !0x0);
                    Ng["answer1Btn"]["helpString"] = "Disable ag" + 'ain\x20if\x20you' + " are not r" + "eaching 60" + '\x20FPS.';
                    var NS = Ng["window"];
                    NA["stage"]["addChild"](NS);
                    NS["center"]();
                  } else {
                    var NM = qS["get"](qA);
                    void 0x0 !== NM && (NM + 0x1 < 0x1e ? qN['set'](qc, NM + 0x1) : (qV["delete"](qE), ql['YC']["unlockAchi" + "evement"](q3)));
                  }
                }
                break;
              case NA["textureRes" + "olutionLow" + "Check"]:
                NA["chosenText" + "ureResolut" + "ion"] = "low";
                NA["displayTex" + "tureResolu" + "tionChange" + "Popup"]();
                break;
              case NA['textureRes' + "olutionMed" + "iumCheck"]:
                NA["chosenText" + "ureResolut" + "ion"] = "medium";
                NA["displayTex" + "tureResolu" + "tionChange" + "Popup"]();
                break;
              case NA["textureRes" + "olutionHig" + 'hCheck']:
                NA["chosenText" + 'ureResolut' + "ion"] = "high";
                NA["displayTex" + "tureResolu" + "tionChange" + "Popup"]();
                break;
              case NA["customizeC" + "ontrolsBut" + "ton"]:
                n9['J']["trackEvent"](n9['J']["OPTIONS"], n9['J']["CUSTOMIZE_" + "CONTROLS"]);
                var Nd = new qu['$T'](qu['$T']["CUSTOMIZE_" + "CONTROLS"]);
                Nd["target"] = NA;
                NA["dispatchEv" + "ent"](Nd);
                break;
              case NA["gamepadCon" + "trolsButto" + 'n']:
                var Nz = new qu['$T'](qu['$T']["GAMEPAD_CO" + "NTROLS"]);
                Nz["target"] = NA;
                NA["keepGamepa" + "dCacheOnDi" + 'e'] = !0x0;
                NA["dispatchEv" + "ent"](Nz);
            }
          };
          NA["mobileCont" + "rolsAnswer" + "Chosen"] = function (ND) {

            if ('PIsiX' === "YXZTa") {
              void 0x0 === qz && (NJ = !0x0);
              qI["prototype"]["hipBreak2"]["call"](this, qS, qA);
              this["ejected"] || (this["cartFoot2J" + "oint"] && (this["_session"]["m_world"]["DestroyJoi" + 'nt'](this["cartFoot2J" + 'oint']), this["cartFoot2J" + "oint"] = null), this['lowerLeg2M' + 'C']["visible"] || (this["lowerLeg2M" + 'C']["visible"] = !0x0), this["checkEject"]());
            } else {
              q3['uO']["instance"]["hide"]();
              var Ng = ND["target"];
              Ng["removeEven" + "tListener"](q3['rg']["ANSWER_CHO" + "SEN"], NA["mobileCont" + "rolsAnswer" + "Chosen"]);
              var NS = Ng["index"];
              Ng["die"]();
              0x0 === NS && (null === q6['w']['mobileCont' + "rolOverrid" + 'e'] ? q6['w']["mobileCont" + "rolOverrid" + 'e'] = !q6['w']["mobileCont" + "rols"] : q6['w']['mobileCont' + 'rolOverrid' + 'e'] = null, NA["sharedObje" + 'ct']['data']["mobileCont" + "rolOverrid" + 'e'] = q6['w']["mobileCont" + "rolOverrid" + 'e'], window["parent"]["history"]["replaceSta" + 'te']({}, document["title"], window["parent"]["location"]["pathname"]), setTimeout(function () {
                return window["location"]["reload"]();
              }, 0x64));
            }
          };
          NA["textureRes" + "olutionAns" + "werChosen"] = function (ND) {
            q3['uO']["instance"]["hide"]();
            var Ng = ND["target"];
            Ng["removeEven" + 'tListener'](q3['rg']["ANSWER_CHO" + 'SEN'], NA["textureRes" + "olutionAns" + "werChosen"]);
            var NS = Ng["index"];
            Ng["die"]();
            0x0 === NS && (q6['w']["textureRes" + "olution"] = NA['chosenText' + "ureResolut" + 'ion'], NA["sharedObje" + 'ct']['data']["textureRes" + "olution"] = NA["chosenText" + "ureResolut" + "ion"], window["parent"]["history"]["replaceSta" + 'te']({}, document['title'], window["parent"]['location']["pathname"]), window["location"]["reload"]());
          };
          NA["increasedF" + "ramesWarni" + "ngAnswerCh" + "osen"] = function (ND) {
            if ("diZCL" !== "gOspR") {
              q3['uO']["instance"]["hide"]();
              var Ng = ND["target"];
              Ng["removeEven" + "tListener"](q3['rg']['ANSWER_CHO' + "SEN"], NA["increasedF" + "ramesWarni" + "ngAnswerCh" + "osen"]);
              var NS = Ng['index'];
              Ng["die"]();
              0x0 == NS && (NA["increasedF" + 'ramesCheck']["gotoAndSto" + 'p'](0x2), q6['w']["use60FPS"] = !0x0, q5['b0']["maxFPS"] = 0x3c, NA["sharedObje" + 'ct']["data"]["use60FPS"] = !0x0);
            } else {
              var Nz = q8["frameName"](qI);
              var NF = new qS["kxk"](qA['gPd']["from"](Nz));
              NF["scale"]["set"](0.25);
              var NM = qN["CHAR_SPRIT" + "E_OFFSETS"][qc];
              NF['x'] = NM[0x0];
              NF['y'] = NM[0x1];
              this["_pixiSprit" + 'e']["addChild"](NF);
            }
          };
          NA["gamepadBut" + "tonOverHan" + "dler"] = function () {};
          NA["mouseOverH" + "andler"] = function (ND) {
            switch (ND["target"]) {
              case NA["fCheck"]:
                q3['uO']['instance']["show"]("Performanc" + "e may be g" + 'reatly\x20red' + "uced when " + "using full" + "screen mod" + "e. Non-vec" + "tor graphi" + 'cs\x20will\x20ap' + "pear pixel" + "ated due t" + "o scaling " + "up. The on" + "ly blood s" + "etting tha" + "t will loo" + "k as inten" + "ded will b" + "e setting " + '2,\x20which\x20i' + 's\x20rendered' + " in vector" + '.\x20Press\x20es' + "cape at an" + "y time to " + "exit fulls" + "creen mode" + '.', NA["fCheck"]);
                break;
              case NA["increasedF" + "ramesCheck"]:
                var Ng;
                Ng = q6['w']["use60FPS"] ? "Turn this " + "back off i" + "f you are " + "not reachi" + "ng 60 FPS." : "Experiment" + "al option " + "to raise F" + "PS cap to " + '60.\x20Do\x20not' + " enable on" + " a slow PC" + '.';
                q3['uO']["instance"]["show"](Ng, NA["increasedF" + 'ramesCheck']);
                break;
              case NA['textureRes' + "olutionLow" + "Check"]:
                q3['uO']["instance"]["show"]('low', NA['textureRes' + "olutionLow" + 'Check']);
                break;
              case NA["textureRes" + 'olutionMed' + "iumCheck"]:
                q3['uO']['instance']["show"]("medium", NA["textureRes" + "olutionMed" + "iumCheck"]);
                break;
              case NA["textureRes" + "olutionHig" + 'hCheck']:
                q3['uO']["instance"]["show"]("high", NA["textureRes" + "olutionHig" + "hCheck"]);
            }
          };
          NA["sliderChan" + 'ge'] = function (ND) {
            q7['h']["maxParticl" + 'es'] = ND["value"];
            NA["sharedObje" + 'ct']["data"]["maxParticl" + 'es'] = q7['h']["maxParticl" + 'es'];
          };
          NA["bloodTypeS" + "liderChang" + 'e'] = function (ND) {
            if ("VipwS" === 'VipwS') {
              q6['w']['bloodSetti' + 'ng'] = ND["value"];
              q6['w']["sharedObje" + 'ct']['data']["bloodSetti" + 'ng'] = q6['w']["bloodSetti" + 'ng'];
              n9['J']["trackEvent"](n9['J']["OPTIONS"], n9['J']["SET_BLOOD"], 'value_' + ND["value"]);
            } else {
              return qF["mouseOverH" + "andler"](qT);
            }
          };
          NA["volumeSlid" + "erChange"] = function (ND) {
            NA['volumeSlid' + 'er']["setValue"](ND["value"]);
            nJ['m']['instance']["setVolume"](ND["value"] / 0x64);
            ND["value"] > 0x0 && nJ['m']["instance"]["isMuted"] ? (nJ['m']["instance"]["unMute"](), n9['J']["trackEvent"](n9['J']["OPTIONS"], n9['J']["UNMUTE"])) : 0x0 !== ND["value"] || nJ['m']["instance"]["isMuted"] || (nJ['m']["instance"]["mute"](), n9['J']["trackEvent"](n9['J']["OPTIONS"], n9['J']["MUTE"]));
            nJ['m']["instance"]["playSoundI" + "tem"]("MenuSelect");
            n9['J']["trackEvent"](n9['J']["OPTIONS"], n9['J']['SET_VOLUME'], "value_" + ND["value"]);
          };
          NA["musicVolum" + "eSliderCha" + 'nge'] = function (ND) {
            NA["musicVolum" + "eSlider"]["setValue"](ND["value"]);
            nJ['m']["instance"]["setMusicVo" + "lume"](ND["value"] / 0x64);
          };
          NA["renderResS" + "liderChang" + 'e'] = function (ND) {
            NA["sharedObje" + 'ct']["data"]["renderReso" + "lutionIncr" + "ease"] = ND["value"];
            NA["sharedObje" + 'ct']["flush"]();
            q6['w']["renderReso" + "lutionIncr" + "ease"] = ND["value"];
            NB["instance"]["resize"]();
          };
          NA['renderResS' + "lider"] = new nz('', '', 0x1, !0x0, 0x0, 0x4, 0x4);
          NA["renderResS" + 'lider']['x'] = 0x1d1;
          NA["renderResS" + "lider"]['y'] = 69.75;
          NA["renderResS" + "lider"]['inputText']["_pixiTextI" + "nput"]["maxLength"] = 0x1;
          NA["renderResS" + "lider"]["inputText"]["restrict"] = '1-4';
          NA["addChild"](NA['renderResS' + 'lider']);
          NA['renderResS' + 'lider']["setValue"](q6['w']['renderReso' + "lutionIncr" + "ease"]);
          NA['renderResS' + "lider"]["helpCaptio" + 'n'] = 'This\x20contr' + "ols the ga" + 'me\x27s\x20rende' + "r resoluti" + "on. Increa" + 'sing\x20the\x20r' + "esolution " + "improves v" + "isual qual" + "ity but ca" + "n degrade " + 'performanc' + 'e.';
          NA["renderResS" + "lider"]["addEventLi" + "stener"](q3['vq']["VALUE_CHAN" + 'GE'], NA["renderResS" + "liderChang" + 'e']);
          NA["increasedF" + 'ramesCheck'] = NA["__mc"]["increasedF" + "ramesCheck"];
          NA["increasedF" + "ramesCheck"]["buttonMode"] = !0x0;
          NA["increasedF" + "ramesCheck"]["addEventLi" + "stener"](q5['Cm']["MOUSE_UP"], NA["mouseUpHan" + "dler"]);
          NA["increasedF" + "ramesCheck"]["addEventLi" + "stener"](q5['Cm']["MOUSE_OVER"], NA["mouseOverH" + "andler"]);
          NA["textureRes" + 'olutionLow' + "Check"] = NA["__mc"]["textureRes" + 'olutionLow' + "Check"];
          NA["textureRes" + "olutionLow" + 'Check']["buttonMode"] = !0x0;
          "low" !== q6['w']["textureRes" + "olution"] && NA["textureRes" + "olutionLow" + "Check"]["addEventLi" + "stener"](q5['Cm']["MOUSE_UP"], NA["mouseUpHan" + "dler"]);
          NA["textureRes" + 'olutionLow' + "Check"]["addEventLi" + "stener"](q5['Cm']["MOUSE_OVER"], NA["mouseOverH" + 'andler']);
          NA["textureRes" + "olutionMed" + "iumCheck"] = NA["__mc"]["textureRes" + "olutionMed" + "iumCheck"];
          NA["textureRes" + 'olutionMed' + "iumCheck"]["buttonMode"] = !0x0;
          "medium" !== q6['w']['textureRes' + "olution"] && NA["textureRes" + "olutionMed" + "iumCheck"]["addEventLi" + 'stener'](q5['Cm']["MOUSE_UP"], NA["mouseUpHan" + "dler"]);
          NA["textureRes" + "olutionMed" + "iumCheck"]["addEventLi" + "stener"](q5['Cm']["MOUSE_OVER"], NA["mouseOverH" + "andler"]);
          NA["textureRes" + "olutionHig" + "hCheck"] = NA['__mc']["textureRes" + "olutionHig" + "hCheck"];
          NA["textureRes" + 'olutionHig' + "hCheck"]["buttonMode"] = !0x0;
          "high" !== q6['w']['textureRes' + "olution"] && NA["textureRes" + "olutionHig" + "hCheck"]["addEventLi" + "stener"](q5['Cm']["MOUSE_UP"], NA["mouseUpHan" + 'dler']);
          NA["textureRes" + "olutionHig" + "hCheck"]["addEventLi" + "stener"](q5['Cm']["MOUSE_OVER"], NA["mouseOverH" + "andler"]);
          NA["fCheck"] = NA["__mc"]["fCheck"];
          NA["fCheck"]["buttonMode"] = !0x0;
          NA["fCheck"]["addEventLi" + "stener"](q5['Cm']["MOUSE_UP"], NA["mouseUpHan" + "dler"]);
          NA['fCheck']["addEventLi" + "stener"](q5['Cm']["MOUSE_OVER"], NA["mouseOverH" + "andler"]);
          NA["customizeC" + "ontrolsBut" + "ton"] = (0x0, qK['Iz'])(q3['yw'], NA["__mc"], "customizeC" + "ontrolsBut" + "ton", {
            'label': "keyboard c" + "ontrols",
            'arrow': !0x0
          });
          NA['customizeC' + "ontrolsBut" + "ton"]["addEventLi" + "stener"](q5['Cm']["MOUSE_UP"], NA["mouseUpHan" + 'dler']);
          NA['sharedObje' + 'ct'] = q6['w']["sharedObje" + 'ct'];
          NW == q5['se']["FULL_SCREE" + "N_INTERACT" + "IVE"] ? NA["fCheck"]['gotoAndSto' + 'p'](0x2) : NA["fCheck"]["gotoAndSto" + 'p'](0x1);
          q6['w']["use60FPS"] ? NA["increasedF" + 'ramesCheck']["gotoAndSto" + 'p'](0x2) : NA["increasedF" + "ramesCheck"]["gotoAndSto" + 'p'](0x1);
          NA["textureRes" + "olutionLow" + 'Check']["gotoAndSto" + 'p']('low' === q6['w']["textureRes" + "olution"] ? 0x2 : 0x1);
          NA['textureRes' + "olutionMed" + 'iumCheck']["gotoAndSto" + 'p']("medium" === q6['w']["textureRes" + "olution"] ? 0x2 : 0x1);
          NA["textureRes" + "olutionHig" + 'hCheck']["gotoAndSto" + 'p']("high" === q6['w']["textureRes" + "olution"] ? 0x2 : 0x1);
          NA["touchContr" + "olsCheck"] = NA["__mc"]["mobileCont" + "rolsCheck"];
          NA["touchContr" + "olsCheck"]["addEventLi" + "stener"](q5['Cm']["MOUSE_UP"], NA["mouseUpHan" + "dler"]);
          NA["touchContr" + "olsCheck"]['buttonMode'] = !0x0;
          NA["touchContr" + "olsCheck"]["gotoAndSto" + 'p'](q6['w']["mobileCont" + "rols"] ? 0x2 : 0x1);
          NA["particleSl" + "ider"] = new nz('', '', 0x4, !0x0, 0x0, 0x7d0, 0xa);
          NA["particleSl" + "ider"]['x'] = 0x1d1;
          NA["particleSl" + "ider"]['y'] = 98.75;
          NA["addChild"](NA["particleSl" + "ider"]);
          NA["particleSl" + "ider"]["setValue"](q7['h']["maxParticl" + 'es']);
          NA["particleSl" + "ider"]['helpCaptio' + 'n'] = 'This\x20is\x20th' + "e maximum " + "number of " + "particles " + 'that\x20can\x20b' + "e seen at " + "once on sc" + "reen.  Blo" + "od, broken" + '\x20glass,\x20sp' + "lintered w" + "ood, and o" + 'ther\x20tiny\x20' + 'flying\x20obj' + 'ects\x20are\x20p' + 'articles.\x20' + " Lowering " + "the number" + " may incre" + "ase perfor" + "mance.  If" + " you don't" + " want to s" + "ee any spo" + "uting bloo" + "d, set it " + "to 0.";
          NA["particleSl" + "ider"]["inputText"]["_pixiTextI" + "nput"]["maxLength"] = 0x4;
          NA["particleSl" + 'ider']['inputText']["restrict"] = "0-9";
          NA["particleSl" + 'ider']["addEventLi" + "stener"](q3['vq']["VALUE_CHAN" + 'GE'], NA["sliderChan" + 'ge']);
          NA["bloodTypeS" + "lider"] = new nz('', '', 0x1, !0x0, 0x1, 0x4, 0x3);
          NA["bloodTypeS" + "lider"]['x'] = 0x1d1;
          NA["bloodTypeS" + 'lider']['y'] = 128.75;
          NA["bloodTypeS" + "lider"]['inputText']["_pixiTextI" + "nput"]["maxLength"] = 0x1;
          NA["bloodTypeS" + "lider"]["inputText"]["restrict"] = "1-4";
          NA["addChild"](NA["bloodTypeS" + "lider"]);
          NA["bloodTypeS" + "lider"]["setValue"](q6['w']["bloodSetti" + 'ng']);
          NA["bloodTypeS" + "lider"]["helpCaptio" + 'n'] = "This contr" + 'ols\x20how\x20th' + "e blood wi" + "ll look.<b" + "r><br>1) T" + "his is the" + '\x20original\x20' + "blood sett" + "ing. It lo" + "oks the wo" + "rst but ru" + 'ns\x20the\x20fas' + "test.<br><" + 'br>2)\x20Each' + " blood par" + "ticle is d" + "rawn as a " + "line. Runs" + '\x20slightly\x20' + "worse than" + " 1 but loo" + "ks a bit b" + "etter<br><" + "br>3) The " + "blood look" + "s like act" + 'ual\x20liquid' + ". Runs a b" + "it worse t" + "han 2. For" + " the sake " + "of perform" + "ance, all " + "blood is r" + "endered on" + " one layer" + ".<br><br>4" + ") This is " + "just like " + "setting 3," + " but has a" + "n addition" + "al bevel a" + 'nd\x20blend\x20m' + "ode applie" + "d. Only us" + 'e\x20this\x20wit' + "h a fast c" + "omputer.";
          NA["bloodTypeS" + "lider"]["addEventLi" + "stener"](q3['vq']["VALUE_CHAN" + 'GE'], NA["bloodTypeS" + "liderChang" + 'e']);
          NA["volumeSlid" + 'er'] = new nz('', '', 0x3, !0x0, 0x0, 0x64, 0x14);
          NA["volumeSlid" + 'er']['x'] = 0x1d1;
          NA["volumeSlid" + 'er']['y'] = 287.75;
          NA["volumeSlid" + 'er']["inputText"]["_pixiTextI" + "nput"]['maxLength'] = 0x3;
          NA['volumeSlid' + 'er']["inputText"]['restrict'] = "0-9";
          NA["addChild"](NA['volumeSlid' + 'er']);
          NA["volumeSlid" + 'er']["setValue"](nJ['m']["instance"]["isMuted"] ? 0x0 : Math["round"](0x64 * nJ['m']["instance"]["volume"]));
          NA["volumeSlid" + 'er']["helpCaptio" + 'n'] = "This contr" + "ols the ga" + 'me\x27s\x20overa' + "ll volume." + " Set to 0 " + "to mute.";
          NA["volumeSlid" + 'er']["onTrack"] = function (ND) {
            if ("ClgMo" === "fkyPm") {
              var NS = new q6(!0x1);
              NS['x'] = this['x'];
              NS['y'] = this['y'];
              NS["angle"] = this['angle'];
              NS["scaleX"] = this["scaleX"];
              NS["scaleY"] = this["scaleY"];
              NS["triggerDel" + 'ay'] = this["triggerDel" + 'ay'];
              NS["repeatInte" + "rval"] = this["repeatInte" + 'rval'];
              NS['typeIndex'] = this["typeIndex"];
              NS["triggeredB" + 'y'] = this["triggeredB" + 'y'];
              NS["repeatType"] = this['repeatType'];
              NS["soundEffec" + 't'] = this['soundEffec' + 't'];
              NS['panning'] = this['panning'];
              NS["volume"] = this["volume"];
              NS["soundLocat" + "ion"] = this['soundLocat' + "ion"];
              NS["startDisab" + "led"] = this["startDisab" + "led"];
              this["transferKe" + "yedPropert" + "ies"](NS);
              NS["forceDirty"]();
              return NS;
            } else {
              return nJ['m']["instance"]["setVolume"](ND / 0x64, !0x1);
            }
          };
          NA["volumeSlid" + 'er']["addEventLi" + "stener"](q3['vq']["VALUE_CHAN" + 'GE'], NA["volumeSlid" + "erChange"]);
          NA["musicVolum" + "eSlider"] = new nz('', '', 0x3, !0x0, 0x0, 0x64, 0x14);
          NA["musicVolum" + "eSlider"]['x'] = 0x1d1;
          NA['musicVolum' + "eSlider"]['y'] = 317.75;
          NA['musicVolum' + "eSlider"]["inputText"]["_pixiTextI" + "nput"]["maxLength"] = 0x3;
          NA["musicVolum" + "eSlider"]["inputText"]["restrict"] = "0-9";
          NA["addChild"](NA["musicVolum" + "eSlider"]);
          NA["musicVolum" + "eSlider"]["setValue"](Math["round"](0x64 * nJ['m']["instance"]["musicVolum" + 'e']));
          NA["musicVolum" + "eSlider"]["helpCaptio" + 'n'] = 'This\x20contr' + 'ols\x20the\x20vo' + 'lume\x20of\x20on' + "ly the mai" + "n menu mus" + "ic.";
          NA['musicVolum' + "eSlider"]["onTrack"] = function (ND) {
            if ("XTwPg" !== "XTwPg") {
              for (;;) {
                switch (qs['n']) {
                  case 0x0:
                    void 0x0 === qu && (qd = null);
                    this["showLoader" + "Screen"]();
                    this["replayData" + "Object"] ? (qm['w']["characterI" + "ndex"] = this["replayData" + "Object"]["character"], this['sessionCon' + 'tentLoader'] = new qa(this["levelDataO" + "bject"], qh['w']["characterI" + "ndex"], this["replayData" + "Object"]['id'])) : (this["characterM" + 'enu'] && (this['closeChara' + 'cterMenu'](), qq['JD']["trackEvent"](qZ['JD']["CHARACTER_" + 'MENU'], qo['JD']["CHARACTER_" + 'SELECTED'], 'character_' + qK['w']["characterI" + "ndex"])), this["levelDataO" + "bject"]["forceChar"] && (ND['w']["characterI" + "ndex"] = this["levelDataO" + "bject"]["character"]), this["sessionCon" + "tentLoader"] = new q7(this["levelDataO" + "bject"], qb['w']["characterI" + "ndex"], -0x1, this["incrementP" + "lays"]));
                    this["sessionCon" + "tentLoader"]["addEventLi" + "stener"](qC['Jh']["COMPLETE"], this["beginSessi" + 'onBind']);
                    this['sessionCon' + "tentLoader"]["addEventLi" + "stener"](qt['BR']["IO_ERROR"], this["IOErrorHan" + "dlerBind"]);
                    this["sessionCon" + "tentLoader"]["addEventLi" + "stener"](qM['NN']["ERROR"], this["loadErrorH" + 'andlerBind']);
                    this["sessionCon" + "tentLoader"]["load"]();
                    this["incrementP" + "lays"] = !0x1;
                  case 0x1:
                    return qi['a'](0x2);
                }
              }
            } else {
              return nJ['m']['instance']["setMusicVo" + 'lume'](ND / 0x64, !0x1);
            }
          };
          NA["musicVolum" + "eSlider"]["addEventLi" + "stener"](q3['vq']["VALUE_CHAN" + 'GE'], NA["musicVolum" + "eSliderCha" + "nge"]);
          if (1.9 == q6['w']["CURRENT_VE" + "RSION"]) {
            if ("XodwQ" !== "SQxNx") {
              var Nr = q6['w']['sharedObje' + 'ct'];
              if (null == Nr["data"]["renderreso" + 'lutionpopu' + 'p'] || q6['w']['showArrowI' + "nOptionsMe" + 'nu']) {
                if ("TIGva" !== "JHBhp") {
                  Nr['data']["renderreso" + "lutionpopu" + 'p'] = 0x1;
                  q6['w']["showArrowI" + "nOptionsMe" + 'nu'] = !0x0;
                  var NJ = new q5['j7']();
                  NJ["setPixiMov" + 'ieClip']((0x0, qK['zI'])("GameUI", "BigArrow"));
                  NJ['x'] = 0x109;
                  NJ['y'] = 87.75;
                  NJ["alpha"] = 0x0;
                  NA["addChild"](NJ);
                  qP['os']['to'](NJ, {
                    'duration': 1.5,
                    'alpha': 0x1,
                    'ease': qp['MI']["easeOut"]
                  });
                } else {
                  var Ng = function (NS) {
                    if ('object' != typeof NS || !NS) {
                      return NS;
                    }
                    var Nd = NS[Ng["toPrimitiv" + 'e']];
                    if (void 0x0 !== Nd) {
                      var Nz = Nd["call"](NS, "string");
                      if ("object" != typeof Nz) {
                        return Nz;
                      }
                      throw new qc("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + 'lue.');
                    }
                    return qN(NS);
                  }(qI);
                  return "symbol" == typeof Ng ? Ng : Ng + '';
                }
              }
            } else {
              q6['prototype']["setLimits"]["call"](this);
              this["tempElbowB" + "reakLimit"] = this["elbowBreak" + 'Limit'];
              this["tempElbowL" + "igamentLim" + 'it'] = this["elbowLigam" + "entLimit"];
              this["tempKneeBr" + "eakLimit"] = this["kneeBreakL" + "imit"];
              this["tempKneeLi" + "gamentLimi" + 't'] = this["kneeLigame" + "ntLimit"];
              this["elbowBreak" + "Limit"] = 0x5a;
              this['elbowLigam' + "entLimit"] = 0x6e;
              this["kneeBreakL" + "imit"] = 0x78;
              this["kneeLigame" + "ntLimit"] = 0x8c;
            }
          }
          return NA;
        } else {
          void 0x0 === qR && (qz = null);
          q8["selectedCh" + "aracter"] = qI["list"]["selectedCh" + "aracter"];
        }
      }
      var No;
      var Ni;
      Ni = Nl;
      (No = NR)["prototype"] = Object["create"](Ni["prototype"]);
      No["prototype"]["constructo" + 'r'] = No;
      nF(No, Ni);
      var NE = NR["prototype"];
      NE["buildChoos" + "eButton"] = function (NW) {
        var NA = new q3['yw']({
          'label': 'choose',
          'arrow': !0x0,
          'small': !0x0
        });
        NA['x'] = 0x1d1;
        NA['y'] = NW - 0.5;
        NA["addEventLi" + "stener"](q5['Cm']["MOUSE_UP"], this["mouseUpHan" + 'dler']);
        this["addChild"](NA);
        return NA;
      };
      NE["displayTex" + "tureResolu" + "tionChange" + "Popup"] = function () {
        var NW = new q3['rg']('Changing\x20t' + "his settin" + "g requires" + '\x20a\x20game\x20re' + "load. Relo" + "ad the gam" + 'e?', "yes", "no, neverm" + "ind", !0x0, 0x118, 0x78, 0x4ec44d, 0xfd8181);
        NW["addEventLi" + 'stener'](q3['rg']['ANSWER_CHO' + "SEN"], this["textureRes" + "olutionAns" + "werChosen"], !0x1, 0x0, !0x0);
        var NA = NW["window"];
        this["stage"]["addChild"](NA);
        NA["center"]();
      };
      NE["displayMob" + "ileControl" + 'sChangePop' + 'up'] = function () {
        if ('uiRsL' === "piHvK") {
          var NJ = qF["GetBody"]()['GetPositio' + 'n']()['x']["toString"]();
          var ND = qT(NJ["charAt"](NJ["length"] - 0x1));
          this["addVocals"](this["randomVoca" + 'ls'](ND), 0x5);
        } else {
          var NW = new q3['rg']("Changing t" + "his settin" + "g requires" + " a game re" + "load. Relo" + "ad the gam" + 'e?', "yes", 'no', !0x0, 0x118, 0x78, 0x4ec44d, 0xfd8181);
          NW["addEventLi" + "stener"](q3['rg']["ANSWER_CHO" + "SEN"], this["mobileCont" + "rolsAnswer" + "Chosen"], !0x1, 0x0, !0x0);
          var NA = NW["window"];
          this["stage"]["addChild"](NA);
          NA["center"]();
        }
      };
      NE["die"] = function () {
        if ("oCRfO" !== "bUfEd") {
          var NW;
          var NA;
          null === (NW = this["gamepadCon" + "trolsButto" + 'n']) || void 0x0 === NW || NW["removeEven" + "tListener"](q5['Cm']["MOUSE_UP"], this["mouseUpHan" + "dler"]);
          null === (NA = this["gamepadCon" + "trolsButto" + 'n']) || void 0x0 === NA || NA["removeEven" + "tListener"](q5['Cm']['MOUSE_OVER'], this["gamepadBut" + "tonOverHan" + "dler"]);
          this["removeEven" + "tListener"](q5['Cm']["MOUSE_UP"], this["mouseUpHan" + "dler"]);
          this["removeEven" + "tListener"](q5['Cm']["MOUSE_OVER"], this["mouseOverH" + 'andler']);
          this["particleSl" + "ider"]["removeEven" + "tListener"](q3['vq']["VALUE_CHAN" + 'GE'], this["sliderChan" + 'ge']);
          this["bloodTypeS" + "lider"]['removeEven' + "tListener"](q3['vq']["VALUE_CHAN" + 'GE'], this['bloodTypeS' + "liderChang" + 'e']);
          this["renderResS" + "lider"]["removeEven" + "tListener"](q3['vq']["VALUE_CHAN" + 'GE'], this['renderResS' + "liderChang" + 'e']);
          this['volumeSlid' + 'er']["removeEven" + "tListener"](q3['vq']["VALUE_CHAN" + 'GE'], this["volumeSlid" + "erChange"]);
          this["musicVolum" + "eSlider"]["removeEven" + "tListener"](q3['vq']["VALUE_CHAN" + 'GE'], this["musicVolum" + "eSliderCha" + "nge"]);
          Nl["prototype"]['die']["call"](this);
        } else {
          qT['__proto__'] = qR;
          return qz;
        }
      };
      NE["destroy"] = function () {
        for (var NW, NA = ["renderResL" + "abelText", "maxParticl" + "eLabelText", "textureRes" + "LabelText", '60fpsLabel' + "Text", "bloodSetti" + 'ngLabelTex' + 't', "graphicalO" + 'ptionsLabe' + "lText", "volumeLabe" + "lText", "musicVolum" + "eLabelText", "fullscreen" + "LabelText", "soundOptLa" + "belText", "kbOptLabel" + "Text", 'mobileCont' + "rolsLabelT" + "ext"], Nr = 0x0; Nr < NA["length"]; Nr++) {
          var NJ = NA[Nr];
          this["__mc"][NJ]["_pixiSprit" + 'e']['destroy']({
            'children': !0x0,
            'baseTexture': !0x0,
            'texture': !0x0
          });
        }
        this["customizeC" + "ontrolsBut" + 'ton']["destroy"]();
        null === (NW = this['gamepadCon' + "trolsButto" + 'n']) || void 0x0 === NW || NW["destroy"]();
        Nl["prototype"]["destroy"]["call"](this);
      };
      return NR;
    } else {
      if (q1["target"] instanceof qs) {
        qy['w']["mobileCont" + "rols"] && (qg["open"] = !0x1);
        qu["removeAll"]();
        var NA = qd["target"];
        if (qm["currentInd" + 'ex'] != NA["index"]) {
          qC["currentInd" + 'ex'] = NA["index"];
          var Nr = new qt['Jh'](qM["ITEM_SELEC" + "TED"]);
          Nr["target"] = qi;
          qD["dispatchEv" + "ent"](Nr);
          qw['w']["mobileCont" + 'rols'] && (q0['currText']["mouseEnabl" + 'ed'] = !0x0, q1["currText"]["interactiv" + 'e'] = !0x0, q2["currText"]["_pixiSprit" + 'e']['interactiv' + "eChildren"] = !0x0);
        }
      }
    }
  }(nV);
  function nH(Nl) {


    if ("erUcW" !== "tHdQG") {
      var No = function (Ni) {
        if ('QdeIr' === "ESUzF") {
          if (q8 && !qI["broken"]) {
            var NA = qV["abs"](qE["m_impulse"]);
            NA > ql && q3(NA);
          }
        } else {
          if ('object' != typeof Ni || !Ni) {
            return Ni;
          }
          var NE = Ni[Symbol["toPrimitiv" + 'e']];
          if (void 0x0 !== NE) {
            var NR = NE["call"](Ni, 'string');
            if ("object" != typeof NR) {
              return NR;
            }
            throw new TypeError("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
          }
          return String(Ni);
        }
      }(Nl);
      return "symbol" == typeof No ? No : No + '';
    } else {
      this["count"]++;
      qI["totalParti" + "cles"] += 0x1;
      var NE = qS["random"]() * (this["yMaxSpeed"] - this["yMinSpeed"]) + this["yMinSpeed"];
      var NR = qA['cos'](this['rot']) * NE;
      var NW = qN["sin"](this["rot"]) * NE;
      var NA = qc["floor"](qV['random']() * this["bmdLength"]);
      var Nr = new qE(NW, NR, this["bmdArray"][NA]);
      this["addChildAt"](Nr, 0x0);
      Nr['x'] = this["startX"] - Nr["width"] / 0x2;
      Nr['y'] = this["startY"] - Nr["height"] / 0x2;
    }
  }
  function nb(Nl, No) {


    if ("UpJpg" === "UpJpg") {
      nb = Object['setPrototy' + 'peOf'] ? Object["setPrototy" + "peOf"]['bind']() : function (Ni, NE) {
        Ni["__proto__"] = NE;
        return Ni;
      };
      return nb(Nl, No);
    } else {
      this["setJoint"](this["neckJoint"], 0x1, 0x1);
      this['setJoint'](this["elbowJoint" + '1'], 0x0, 0xf);
      this['setJoint'](this["elbowJoint" + '2'], 0x0, 0xf);
    }
  }
  var nZ = function (Nl) {

    function No(Nr, NJ) {
      if ('Dbwps' === "Dbwps") {
        var ND;
        (ND = Nl["call"](this) || this)["rowColor"] = 0x888888;
        ND["userBtnAct" + "ive"] = !0x1;
        ND["userPress"] = function (NS) {

          if ("puVmc" !== 'Xnjig') {
            if (ND["userBtnAct" + "ive"]) {
              if ("PtgkM" !== "PtgkM") {
                this["trackDeath"](qF);
                this["_dead"] = qT;
                this["_dead"] && (this["targetAng"] = 0x0, this["userVehicl" + "eEject"](), this["currentPos" + 'e'] = 0x0, this["releaseGri" + 'p'](), this['voiceSound'] && (this["voiceSound"]["stopSound"](), this["voiceSound"] = null));
              } else {
                var Nd = new q5['vg'](q6['w']["siteURL"] + ("profile.tj" + "f?uid=") + ND['_replayDat' + "aObject"]['user_id']);
                (0x0, q5['is'])(Nd, "_blank");
                qN['JD']["trackEvent"](qN['JD']["REPLAY_BRO" + "WSER"], qN['JD']["GOTO_USER_" + "PAGE"], "userID_" + ND["_replayDat" + "aObject"]["user_id"]);
              }
            }
          } else {
            var NM;
            qc instanceof qV['j7'] ? (NM = new qE['j7'](null))["setPixiMov" + "ieClip"](ql) : NM = new ND['kx'](Nd);
            qs["name"] && (NM["name"] = NM["pixiSprite"]["name"] = qf["name"], q9[q5["name"]] = NM);
            NJ["push"](NM);
          }
        };
        ND["_replayDat" + "aObject"] = Nr;
        var Ng = new q5['j7']((0x0, qK['zI'])("GameUI", "mc_replayl" + "istitem"));
        Ng["convertChi" + "ldren"]();
        ND["addChild"](Ng);
        ND['bg'] = Ng['bg'];
        ND["userBtn"] = Ng["userBtn"];
        ND["userBtn"]["visible"] = !0x1;
        ND["accurateMc"] = Ng["accurateMc"];
        ND["_replayDat" + "aObject"]["architectu" + 're'] == q6['w']["architectu" + 're'] ? (ND["accurateMc"]['gotoAndSto' + 'p'](0x1), ND["_accurate"] = !0x0) : ND["accurateMc"]["gotoAndSto" + 'p'](0x2);
        ND["buttonMode"] = !0x0;
        ND['characterF' + "aces"] = new qz(ND["_replayDat" + "aObject"]["character"]);
        ND["characterF" + "aces"]['x'] = 0xbe;
        ND["addChild"](ND["characterF" + "aces"]);
        ND["deferredAc" + "tions"] = [];
        0x0 === NJ ? ND['expensiveI' + "nit"]() : ND["expensiveC" + "reateTimeo" + 'ut'] = window["setTimeout"](ND['expensiveI' + 'nit']["bind"](ND), NJ);
        ND["rollOut"]();
        return ND;
      } else {
        this["_window"] = new qR['p8'](!0x0, this, !0x0);
        this["_window"]['x'] = qz["windowX"];
        this["_window"]['y'] = NA["windowY"];
        this["_window"]["minWidth"] = 0xf0;
        this["_window"]["minHeight"] = 0x12c;
        this["_window"]["addEventLi" + "stener"](qI['p8']["WINDOW_CLO" + "SED"], this["windowClos" + 'ed']);
      }
    }
    var Ni;
    var NE;
    NE = Nl;
    (Ni = No)['prototype'] = Object["create"](NE["prototype"]);
    Ni["prototype"]["constructo" + 'r'] = Ni;
    nb(Ni, NE);
    var NR;
    var NW;
    var NA = No["prototype"];
    NA["expensiveI" + "nit"] = function () {

      var Nr = this;
      var NJ = {
        'fontFamily': "HelveticaN" + 'eueLT\x20Std\x20' + "Med",
        'fontSize': 0xc,
        'fill': "white",
        'leading': 0x2,
        'wordWrap': !0x0
      };
      function ND(Nz) {
        var NF = JSON["parse"](JSON["stringify"](NJ));
        NF["wordWrapWi" + 'dth'] = Nz;
        return NF;
      }
      var Ng = new q5['lk']("HelveticaN" + 'eueLT\x20Std\x20' + "Med", 0xc, 0xffff, !0x1, !0x1, !0x1, '', '', "left", null, null, null, 0x2);
      this["userText"] = new q5['A_']();
      this["userText"]['defaultTex' + "tFormat"] = Ng;
      this["userText"]['text'] = this["_replayDat" + "aObject"]["user_name"];
      this['userText']['x'] = 0x7;
      this["userText"]['y'] = 4.75;
      var NS = this["_replayDat" + "aObject"]["timeFrames"] < q6['w']['maxReplayF' + "rames"] ? String(qN['l5']["setToHundr" + "edths"](this["_replayDat" + "aObject"]["timeSecond" + 's'])) + " seconds" : "---";
      this["timeText"] = new qT["EYj"](NS, ND(0x69))["setTransfo" + 'rm'](0xdb, 4.75);
      this["viewsText"] = new qT["EYj"](qN['l5']["addInteger" + "Commas"](this["_replayDat" + 'aObject']["views"]), NJ)["setTransfo" + 'rm'](0x1b5, 4.75);
      this["createdTex" + 't'] = new qT['EYj'](qN['l5']["shortenDat" + 'e'](this["_replayDat" + 'aObject']['created']), ND(0x37))['setTransfo' + 'rm'](0x219, 4.75);
      this["addChild"](this["userText"]);
      this["_pixiSprit" + 'e']["addChild"](this["timeText"]);
      this["_pixiSprit" + 'e']['addChild'](this['viewsText']);
      this["_pixiSprit" + 'e']["addChild"](this["createdTex" + 't']);
      this["userBtn"]["width"] = this["userText"]["textWidth"] + 0x5;
      this["userBtn"]["addEventLi" + "stener"](q5['Cm']["MOUSE_UP"], this["userPress"], !0x1, 0x0, !0x0);
      this["userBtn"]["pixiSprite"]['on']("pointerove" + 'r', function () {
        return Nr["userBtnAct" + "ive"] = !0x0;
      });
      this["userBtn"]["pixiSprite"]['on']("pointerout", function () {
        return Nr["userBtnAct" + "ive"] = !0x1;
      });
      this["voteStars"] = new qS({
        'rating': this["_replayDat" + "aObject"]["average_ra" + "ting"],
        'mcName': "mc_votesta" + 'rs'
      });
      this['voteStars']['x'] = 0x14a;
      this["addChild"](this["voteStars"]);
      for (var Nd = 0x0; Nd < this["deferredAc" + "tions"]["length"]; Nd++) {
        this["deferredAc" + "tions"][Nd]();
      }
      this["deferredAc" + "tions"] = [];
      this["expensiveC" + "reateTimeo" + 'ut'] = null;
    };
    NA["rollOver"] = function () {
      if ("OrTIV" === "mOmya") {
        return this['_highlight' + "edArray"];
      } else {
        this['bg']["gotoAndSto" + 'p'](0x2);
        this["setTextCol" + 'or'](0x3d88c7);
      }
    };
    NA["rollOut"] = function () {
      "DeLCO" === 'LDCfX' ? (this['removeEven' + "tListener"](qF['Cm']["MOUSE_UP"], this['mouseUpHan' + "dler"]["bind"](this)), this["removeEven" + "tListener"](qT['Cm']["MOUSE_OVER"], this["mouseOverH" + "andler"]["bind"](this))) : this["_selected"] ? this['rollOver']() : (this['bg']["gotoAndSto" + 'p'](0x1), this["setTextCol" + 'or'](0x888888));
    };
    NA['mouseDown'] = function () {
      this["_selected"] || (this['bg']["gotoAndSto" + 'p'](0x3), this["setTextCol" + 'or'](0xffffff));
    };
    NA['setTextCol' + 'or'] = function (Nr) {

      var NJ = this;
      this["rowColor"] = Nr;
      this["doActionAf" + "terTextCre" + "ation"](function () {
        NJ["timeText"]['tint'] = NJ["viewsText"]["tint"] = NJ['createdTex' + 't']["tint"] = Nr;
        NJ["userText"]["textColor"] = NJ["isFriendUs" + 'er']() ? qr['FRIEND_COL' + 'OR'] : Nr;
      });
    };
    NA["refreshTex" + "tColor"] = function () {
      this["setTextCol" + 'or'](this["rowColor"]);
    };
    NA['isFriendUs' + 'er'] = function () {
      return !0x1;
    };
    NA['doActionAf' + "terTextCre" + "ation"] = function (Nr) {
      if ("EkTnw" === "suSOZ") {
        var ND = this["mainBody"]["GetWorldPo" + 'int'](this["handleAnch" + 'orPoint']);
        if (qz['abs'](NA['x'] - ND['x']) < this["reAttachDi" + "stance"] && qI['abs'](qS['y'] - ND['y']) < this['reAttachDi' + "stance"]) {
          return void this['reAttach'](qA);
        }
      } else {
        this["expensiveC" + "reateTimeo" + 'ut'] ? this["deferredAc" + "tions"]["push"](Nr) : Nr();
      }
    };
    NA["destroy"] = function () {
      this['expensiveC' + "reateTimeo" + 'ut'] && window["clearTimeo" + 'ut'](this["expensiveC" + "reateTimeo" + 'ut']);
      this["timeText"] && this["timeText"]["destroy"]();
      this["viewsText"] && this["viewsText"]["destroy"]();
      this["createdTex" + 't'] && this["createdTex" + 't']["destroy"]();
      Nl['prototype']['destroy']["call"](this);
    };
    NR = No;
    (NW = [{
      'key': 'selected',
      'get': function () {
        return this["_selected"];
      },
      'set': function (Nr) {

        if ("UnyCK" !== "knjhW") {
          var NJ = this;
          this["_selected"] = Nr;
          this["_selected"] ? (this['doActionAf' + "terTextCre" + "ation"](function () {
            return NJ["userText"]['htmlText'] = "<u>" + NJ["userText"]["text"] + "</u>";
          }), this['rollOver'](), this["userBtn"]["visible"] = !0x0, this['bg']["alpha"] = 0x1, qJ['m']['instance']["playSoundI" + "tem"]("MenuSelect" + '2')) : (this["doActionAf" + "terTextCre" + "ation"](function () {
            if ("ZbScU" !== "QXuJT") {
              return NJ["userText"]["htmlText"] = NJ["userText"]["text"];
            } else {
              this["ejected"] && (0x1 != this["_currentPo" + 'se'] && 0x2 != this["_currentPo" + 'se'] || (this["currentPos" + 'e'] = 0x0));
            }
          }), this["rollOut"](), this["_faded"] && (this['bg']["alpha"] = No["FADE_VALUE"]), this["userBtn"]["visible"] = !0x1);
        } else {
          this["armSprite"]["graphics"]["clear"]();
          this["_setY"](q6);
          this['drawArms']();
          this["forceDirty"]();
        }
      }
    }, {
      'key': "faded",
      'get': function () {

        if ("gMYlp" !== 'ArjsF') {
          return this["_faded"];
        } else {
          var NJ = function (ND) {
            if ('object' != typeof ND || !ND) {
              return ND;
            }
            var Ng = ND[NJ["toPrimitiv" + 'e']];
            if (void 0x0 !== Ng) {
              var NS = Ng["call"](ND, "string");
              if ("object" != typeof NS) {
                return NS;
              }
              throw new qc("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
            }
            return qN(ND);
          }(qI);
          return "symbol" == typeof NJ ? NJ : NJ + '';
        }
      },
      'set': function (Nr) {
        if ('zdzCF' === "MSpNs") {
          for (var ND = 0x0; ND < h["length"]; ND += 0x2) {
            if (m == I[ND] && k['charCodeAt'](s) != q1[ND + 0x1]) {
              return ![];
            }
          }
        } else {
          this["_faded"] = Nr;
          this["_faded"] && !this['_selected'] ? this['bg']["alpha"] = No["FADE_VALUE"] : this['bg']['alpha'] = 0x1;
        }
      }
    }, {
      'key': "hidden",
      'get': function () {
        if ("wKYJP" === 'BlxYA') {
          var NJ = qz[NA];
          NJ["enumerable"] = NJ["enumerable"] || !0x1;
          NJ["configurab" + 'le'] = !0x0;
          "value" in NJ && (NJ["writable"] = !0x0);
          qI["defineProp" + "erty"](qS, qA(NJ["key"]), NJ);
        } else {
          return this["_hidden"];
        }
      },
      'set': function (Nr) {
        this["visible"] = !Nr;
        this['_hidden'] = Nr;
      }
    }, {
      'key': "accurate",
      'get': function () {
        if ('pygCM' !== "NDhSn") {
          return this["_accurate"];
        } else {
          if (qT["target"] != qR["answer2Btn"]) {
            return;
          }
          qz["_index"] = 0x1;
        }
      }
    }, {
      'key': "height",
      'get': function () {
        return this["_hidden"] ? 0x0 : No['BG_HEIGHT'];
      }
    }, {
      'key': "replayData" + "Object",
      'get': function () {
        return "ByHAw" !== "DFmRu" ? this["_replayDat" + "aObject"] : (qT["__proto__"] = qR, qz);
      }
    }]) && function (Nr, NJ) {
      if ("EzQWX" === "EzQWX") {
        for (var ND = 0x0; ND < NJ["length"]; ND++) {
          var Ng = NJ[ND];
          Ng["enumerable"] = Ng["enumerable"] || !0x1;
          Ng["configurab" + 'le'] = !0x0;
          "value" in Ng && (Ng["writable"] = !0x0);
          Object["defineProp" + "erty"](Nr, nH(Ng["key"]), Ng);
        }
      } else {
        qF["_backDropI" + "ndex"] = qT;
      }
    }(NR["prototype"], NW);
    Object["defineProp" + "erty"](NR, "prototype", {
      'writable': !0x1
    });
    return NR;
  }(q5['kx']);
  function ny(Nl) {


    if ("SuCnI" !== "SGPtw") {
      var No = function (Ni) {
        if ("XxPnO" === "XxPnO") {
          if ("object" != typeof Ni || !Ni) {
            return Ni;
          }
          var NE = Ni[Symbol["toPrimitiv" + 'e']];
          if (void 0x0 !== NE) {
            var NR = NE["call"](Ni, "string");
            if ('object' != typeof NR) {
              return NR;
            }
            throw new TypeError("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + 'lue.');
          }
          return String(Ni);
        } else {
          this["santa"]["dead"] && this["eject"]();
        }
      }(Nl);
      return 'symbol' == typeof No ? No : No + '';
    } else {
      if (!this['_currentIt' + 'em']) {
        return null;
      }
      var NE = this["levelList"]['indexOf'](this["_currentIt" + 'em']);
      return q6['levelDataA' + "rray"][NE];
    }
  }
  function nc(Nl, No) {

    nc = Object['setPrototy' + 'peOf'] ? Object["setPrototy" + 'peOf']["bind"]() : function (Ni, NE) {

      return "wbSMw" !== "zWDOH" ? (Ni["__proto__"] = NE, Ni) : (q8 = qI['setPrototy' + "peOf"] ? qS["setPrototy" + "peOf"]["bind"]() : function (NW, NA) {
        NW["__proto__"] = NA;
        return NW;
      }, qA(qN, qc));
    };
    return nc(Nl, No);
  }
  nZ["BG_HEIGHT"] = 0x16;
  nZ["FADE_VALUE"] = 0.5;
  var nX = function (Nl) {


    function No(Nr) {
      var NJ;
      (NJ = Nl["call"](this) || this)["fullHeight"] = 0x6e;
      NJ["baseHeight"] = 0x0;
      NJ["scroll"] = function (NS) {


        if (NJ["mouseX"] > 0x0 && NJ['mouseX'] < 0xfa && NJ['mouseY'] > 0x0 && NJ['mouseY'] < NJ["fullHeight"]) {
          var Nd = 0.5 * NS["delta"];
          var Nz = NJ["fullHeight"] / 0x2;
          var NF = (Nz - NJ["mouseY"]) / Nz * 0xa * Nd;
          NJ["comments"]['y'] += NF;
          NJ["comments"]['y'] + NJ["comments"]["height"] < NJ["fullHeight"] && (NJ["comments"]['y'] = NJ["fullHeight"] - NJ["comments"]["height"]);
          NJ["comments"]['y'] > 0x0 && (NJ["comments"]['y'] = 0x0);
        }
      };
      NJ["mouseUpHan" + "dler"] = function (NS) {


        switch (NS["target"]) {
          case NJ["playButton"]:
            qN['JD']["trackEvent"](qN['JD']["REPLAY_BRO" + "WSER"], qN['JD']["LOAD_REPLA" + 'Y'], "replayID_" + NJ["_replayDat" + "aObject"]['id']);
            NJ["dispatchEv" + "ent"](new qu['$T'](qu['$T']["SESSION"], null, NJ["_replayDat" + "aObject"]));
            break;
          case NJ["copyUrlBut" + "ton"]:
            (0x0, qb['e'])(NJ["linkText"]["_pixiTextI" + "nput"]["text"], NJ["copyUrlBut" + "ton"]);
        }
      };
      NJ['_replayDat' + "aObject"] = Nr;
      var ND = (0x0, qK['zI'])("GameUI", "mc_replays" + "election");
      NJ["__mc"] = ND;
      var Ng = [];
      ND["children"]["forEach"](function (NS) {


        if ("rBwIR" === "qKIyj") {
          qI(qS, qA, qN, qc, qV, "next", qE);
        } else {
          var Nd;
          NS instanceof qV['j7'] ? (Nd = new q5['j7'](null))["setPixiMov" + "ieClip"](NS) : Nd = new q5['kx'](NS);
          NS["name"] && (Nd["name"] = Nd["pixiSprite"]["name"] = NS['name'], NJ[NS["name"]] = Nd);
          Ng['push'](Nd);
        }
      });
      Ng["forEach"](function (NS) {


        if ("hctfa" !== "hctfa") {
          var Nz = function (NF) {
            if ("object" != typeof NF || !NF) {
              return NF;
            }
            var NM = NF[Nz["toPrimitiv" + 'e']];
            if (void 0x0 !== NM) {
              var NH = NM["call"](NF, "string");
              if ('object' != typeof NH) {
                return NH;
              }
              throw new qc("@@toPrimit" + 'ive\x20must\x20r' + "eturn a pr" + "imitive va" + "lue.");
            }
            return qN(NF);
          }(qI);
          return "symbol" == typeof Nz ? Nz : Nz + '';
        } else {
          NJ["addChild"](NS);
        }
      });
      NJ["descriptio" + "nText"] = q5['A_']["spriteToTe" + "xtField"](NJ["descriptio" + "nText"], NJ);
      NJ["characterT" + "ext"] = q5['A_']["spriteToTe" + 'xtField'](NJ["characterT" + 'ext'], NJ);
      NJ["commentsTe" + 'xt'] = q5['A_']['spriteToTe' + "xtField"](NJ['commentsTe' + 'xt'], NJ);
      NJ['avgRatingT' + "ext"] = q5['A_']["spriteToTe" + "xtField"](NJ["avgRatingT" + "ext"], NJ);
      NJ['wtdRatingT' + "ext"] = q5['A_']["spriteToTe" + 'xtField'](NJ["wtdRatingT" + "ext"], NJ);
      NJ['linkText'] = q5['A_']["spriteToTe" + "xtField"](NJ['linkText'], NJ);
      NJ['playButton'] = (0x0, qK['Iz'])(q3['yw'], NJ, "playButton", {
        'fileName': "GameUI",
        'mcName': "mc_replays" + "election_v" + "iew_button"
      });
      NJ["linkText"]['type'] = q5['ux']["INPUT"];
      NJ["linkText"]["_pixiTextI" + "nput"]['_dom_input']["setAttribu" + 'te']("readonly", '');
      NJ["linkText"]["_pixiTextI" + "nput"]["setInputSt" + "yle"]("width", "214px");
      NJ["shadow"]['mouseEnabl' + 'ed'] = !0x1;
      NJ["descriptio" + "nText"]["autoSize"] = q5['wL']["LEFT"];
      NJ["descriptio" + 'nText']["wordWrap"] = !0x0;
      NJ["descriptio" + "nText"]['text'] = NJ["_replayDat" + "aObject"]['comments'];
      NJ["characterT" + "ext"]["text"] = q6['w']["characterN" + 'ames'][NJ["_replayDat" + "aObject"]["character"] - 0x1];
      NJ["avgRatingT" + "ext"]["text"] = String(qN['l5']["setToHundr" + "edths"](NJ['_replayDat' + "aObject"]['average_ra' + "ting"])) + " / 5.00 (" + NJ["_replayDat" + "aObject"]['votes'] + " votes)";
      NJ['wtdRatingT' + "ext"]["text"] = String(qN['l5']["setToHundr" + "edths"](NJ["_replayDat" + "aObject"]["weighted_r" + "ating"])) + '\x20/\x205.00\x20(' + NJ["_replayDat" + "aObject"]["votes"] + " votes)";
      NJ["linkText"]["_pixiTextI" + "nput"]['text'] = q6['w']["siteURL"] + ("happy_whee" + "ls.tjf?rep" + "lay_id=") + NJ["_replayDat" + "aObject"]['id'];
      NJ["copyUrlBut" + "ton"] = new q3['Ch']("copy repla" + "y url", 0xcccccc, 0x98, 0x605344);
      NJ["copyUrlBut" + 'ton']['x'] = 0x217;
      NJ["copyUrlBut" + 'ton']['y'] = 0x4d;
      NJ["addChild"](NJ['copyUrlBut' + "ton"]);
      NJ["comments"] = new q5['kx']();
      NJ['addChild'](NJ["comments"]);
      NJ["comments"]["addChild"](NJ["descriptio" + "nText"]);
      NJ["comments"]["addChild"](NJ["commentsTe" + 'xt']);
      NJ['comments']["graphics"]["beginFill"](0xefefef, 0x1);
      NJ["comments"]["graphics"]["drawRect"](0x0, 0x0, 0xfa, NJ["comments"]["height"]);
      NJ["comments"]["graphics"]["endFill"]();
      NJ["comments"]["height"] > NJ["fullHeight"] && NJ["addEventLi" + "stener"](q5['Jh']["ENTER_FRAM" + 'E'], NJ["scroll"]);
      NJ["addChild"](NJ["shadow"]);
      NJ["maskSprite"] = new q5['kx']();
      NJ["maskSprite"]["graphics"]["beginFill"](0xff0000);
      NJ['maskSprite']['graphics']["drawRect"](0x0, 0x0, NJ["shadow"]["width"], NJ["shadow"]["height"]);
      NJ["maskSprite"]['graphics']["endFill"]();
      NJ["maskSprite"]["visible"] = !0x1;
      NJ["addEventLi" + "stener"](q5['Cm']["MOUSE_UP"], NJ["mouseUpHan" + "dler"]);
      return NJ;
    }
    var Ni;
    var NE;
    NE = Nl;
    (Ni = No)["prototype"] = Object["create"](NE["prototype"]);
    Ni['prototype']['constructo' + 'r'] = Ni;
    nc(Ni, NE);
    var NR;
    var NW;
    var NA = No["prototype"];
    NA["die"] = function () {
      this["removeEven" + "tListener"](q5['Jh']['ENTER_FRAM' + 'E'], this['scroll']);
      this["removeEven" + "tListener"](q5['Cm']['MOUSE_UP'], this["mouseUpHan" + "dler"]);
    };
    NA['destroy'] = function () {
      for (var Nr = ['avgRatingL' + "abel", "characterL" + 'abel', "wtdRatingL" + "abel", "linkLabel"], NJ = 0x0; NJ < Nr["length"]; NJ++) {
        var ND = Nr[NJ];
        this["__mc"][ND]["destroy"]();
      }
      Nl["prototype"]["destroy"]["call"](this);
    };
    NR = No;
    (NW = [{
      'key': "replayData" + 'Object',
      'get': function () {
        return this["_replayDat" + "aObject"];
      }
    }, {
      'key': "maskHeight",
      'get': function () {
        return this["baseHeight"];
      },
      'set': function (Nr) {
        this["baseHeight"] = Nr;
        this["shadow"]["height"] = this["maskSprite"]['height'] = Nr;
        this["actualMask"] || (this["actualMask"] = new q5['kx']());
        this["addChild"](this["actualMask"]);
        this["actualMask"]["graphics"]["clear"]();
        this["actualMask"]["graphics"]["beginFill"](0xff0000, 0.5);
        this['actualMask']["graphics"]["drawRect"](0x0, 0x0, this["shadow"]['width'], this["baseHeight"]);
        this["pixiSprite"]['mask'] = this['actualMask']["graphics"]["pixiGraphi" + 'cs'];
      }
    }]) && function (Nr, NJ) {
      if ("AxQCW" === "AxQCW") {
        for (var ND = 0x0; ND < NJ["length"]; ND++) {
          var Ng = NJ[ND];
          Ng['enumerable'] = Ng["enumerable"] || !0x1;
          Ng["configurab" + 'le'] = !0x0;
          "value" in Ng && (Ng["writable"] = !0x0);
          Object['defineProp' + "erty"](Nr, ny(Ng["key"]), Ng);
        }
      } else {
        qF['w']["currentlyI" + "nEditor"] && (this["graphics"]["clear"](), (this["_selected"] || !qT['w']["editorHide" + "Arms"] || this["forceArmDr" + "awing"]) && (this["graphics"]["lineStyle"](0x0, 0xff6600), this["_body1"] && (this["graphics"]["moveTo"](0x0, 0x0), this["graphics"]["lineTo"](this["body1"]['x'] - this['x'], this["body1"]['y'] - this['y'])), this['body2'] && (this["graphics"]['moveTo'](0x0, 0x0), this["graphics"]["lineTo"](this['body2']['x'] - this['x'], this["body2"]['y'] - this['y']))), this["_selected"] && this["drawBoundi" + "ngBox"](), this["invalidate" + "LocalBound" + 's']());
      }
    }(NR["prototype"], NW);
    Object["defineProp" + "erty"](NR, "prototype", {
      'writable': !0x1
    });
    return NR;
  }(q5['kx']);
  function nx(Nl) {

    if ("geWui" !== "geWui") {
      this['_display'] = qT;
      this['currText']["text"] = qR;
      this["arrow"]['x'] = this["currText"]["textWidth"] + 0x7;
      this['bg']["width"] = this['arrow']['x'] + this["arrow"]["width"];
      this["_currentIn" + "dex"] = this["displayLis" + 't']["indexOf"](qz);
    } else {
      var No = function (NE) {
        if ("JsgMd" === "ejBXd") {
          qf[q9 = q5 > 0x0 ? NW - 0x1 : qB - 0x1] && (qW = qH < qk - 0x1 ? q4 + 0x1 : 0x0);
          var Nr = qJ[qr];
          this["trimVert"](qj, Nr, qP);
          qn['y'] = qy;
          qg[qu] = qd;
        } else {
          if ("object" != typeof NE || !NE) {
            return NE;
          }
          var NR = NE[Symbol["toPrimitiv" + 'e']];
          if (void 0x0 !== NR) {
            var NW = NR["call"](NE, 'string');
            if ("object" != typeof NW) {
              return NW;
            }
            throw new TypeError("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
          }
          return String(NE);
        }
      }(Nl);
      return "symbol" == typeof No ? No : No + '';
    }
  }
  function nw(Nl, No) {


    return "GMReq" !== 'GMReq' ? (q8 = qI["setPrototy" + "peOf"] ? qS["setPrototy" + "peOf"]['bind']() : function (NE, NR) {
      NE["__proto__"] = NR;
      return NE;
    }, qA(qN, qc)) : (nw = Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"]['bind']() : function (NE, NR) {
      NE["__proto__"] = NR;
      return NE;
    }, nw(Nl, No));
  }
  var na = function (Nl) {

    function No(Nr, NJ, ND, Ng) {
      if ("QTGnU" === "QTGnU") {
        var NS;
        void 0x0 === NJ && (NJ = -0x1);
        void 0x0 === ND && (ND = -0x1);
        void 0x0 === Ng && (Ng = !0x1);
        (NS = Nl["call"](this) || this)["_tweenVal"] = 0x0;
        NS["tweenTime"] = 0.25;
        NS["keyDownHan" + 'dler'] = function (Nc) {


          if (!NS["opening"]) {
            switch (Nc["keyCode"]) {
              case 0x26:
                NS["selectPrev" + "iousListIt" + 'em']();
                break;
              case 0x28:
                NS["selectNext" + 'ListItem']();
            }
          }
        };
        NS["mouseOverH" + "andler"] = function (Nc) {


          if ("vHRJO" !== "dTnjy") {
            Nc["rollOver"]();
          } else {
            return this["_artUsed"];
          }
        };
        NS["mouseOutHa" + "ndler"] = function (Nc) {

          Nc["rollOut"]();
        };
        NS["mouseDownH" + "andler"] = function (Nc) {


          "uILeX" === 'uILeX' ? 'bg' === Nc["target"]['name'] && Nc["target"]["parent"]["parent"]["mouseDown"]() : (qI["promptSpri" + 'te']["removeEven" + "tListener"](qS["BUTTON_PRE" + "SSED"], qA["promptSpri" + "teClosed"]), NM["promptSpri" + 'te'] = null, qc["dispatchEv" + "ent"](new NZ['Jh'](qE["MENU_IDLE"])));
        };
        NS["mouseUpHan" + "dler"] = function (Nc) {


          if ("FFYZh" === "FFYZh") {
            if ('bg' === Nc["target"]["name"]) {
              if ("RnbKi" !== "RnbKi") {
                var Na = new qF['Um']('Sorry,\x20rep' + 'lay\x20not\x20fo' + 'und.', "oh?");
                var NY = Na["window"];
                Nb["addChild"](NY);
                NY["center"]();
              } else {
                var NX = Nc["target"]['parent']["parent"];
                NS['selectedLi' + "stItem"] ? (NX != NS["selectedLi" + "stItem"] ? (NS["selectedLi" + "stItem"]["selected"] = !0x1, NS['selectedLi' + "stItem"] = NX, NS['selectedLi' + "stItem"]["selected"] = !0x0) : (NS["selectedLi" + "stItem"]["selected"] = !0x1, NS["selectedLi" + "stItem"] = null), NS["closing"] || NS["closeSelec" + "tion"]()) : (NS["selectedLi" + "stItem"] = NX, NX['selected'] = !0x0, NS["closing"] || NS["openSelect" + "ion"]());
              }
            } else {
              if (Nc['target'] instanceof qz) {
                var Nx = Nc["target"];
                NS["selectedCh" + "aracter"] = Nx["characterI" + 'd'];
                NS["dispatchEv" + "ent"](new q5['Jh'](No["FACE_SELEC" + "TED"]));
              }
            }
          } else {
            return this["mainBody"];
          }
        };
        NS["closingCom" + "plete"] = function () {


          if ('GZosH' !== 'tvAwq') {
            NS["closing"] = !0x1;
            NS["removeChil" + 'd'](NS["replaySele" + "ction"]);
            NS["replaySele" + "ction"]["destroy"]();
            NS["replaySele" + "ction"] = null;
            NS["selectedLi" + "stItem"] ? NS["openSelect" + "ion"]() : (NS["organizeLi" + 'st'](), NS["dispatchEv" + "ent"](new q5['Jh'](No["UPDATE_SCR" + 'OLLER'])));
          } else {
            var NX = qF[Nb];
            this["activation" + "Dictionary"]["set"](NX, 0x1);
          }
        };
        NS["openComple" + 'te'] = function () {

          NS["opening"] = !0x1;
        };
        NS['cloneAndDi' + "spatchEven" + 't'] = function (Nc) {


          var NX = Nc["clone"]();
          NS["dispatchEv" + "ent"](NX);
        };
        NS["friendName" + "sChanged"] = function () {


          NS["listItemAr" + "ray"]["forEach"](function (Nc) {
            if ("bKpLz" !== "lYFbt") {
              return Nc['refreshTex' + "tColor"]();
            } else {
              var Nx = new T('[fAsATweGB' + "fJijKNSMHy" + "MrfsqZYL]", 'g');
              var Nw = ("fAabsouATw" + "te:GBfJijb" + "lankKNSMHy" + "MrfsqZYL")['replace'](Nx, '');
              V[h][C] = Nw;
            }
          });
        };
        NS["listItemAr" + "ray"] = [];
        for (var Nd = function (Nc) {


            return !Ng || Nc["architectu" + 're'] == q6['w']["architectu" + 're'];
          }, Nz = Nr["filter"](Nd)['findIndex'](function (Nc) {


            return "FyEkR" !== "ReKfG" ? Nc['id'] == NJ : this;
          }), NF = new qx(Nz, qX["Replay"]), NM = 0x0, NH = 0x0, Nb = Nr["length"], NZ = function () {

            if ("kdjHZ" !== "sNdZi") {
              var Nc = Nr[Ny];
              var NX = Nd(Nc) ? NF["calculateD" + "elay"](NH++) : NF["calculateH" + "iddenDelay"]();
              var Nx = new nZ(Nc, NX);
              NS["addChild"](Nx);
              NS["listItemAr" + "ray"]["push"](Nx);
              Nx['y'] = NM;
              NM += Nx["height"];
              Nc['id'] == NJ && (NS["selectedLi" + 'stItem'] = Nx);
              Nx['mouseEnabl' + 'ed'] = !0x0;
              Nx["mouseChild" + "ren"] = !0x0;
              Nx['bg']["pixiSprite"]['on']('pointerove' + 'r', function () {
                return NS["mouseOverH" + "andler"](Nx);
              });
              Nx['bg']["pixiSprite"]['on']("pointerout", function () {
                if ("SHKYB" === "SHKYB") {
                  return NS["mouseOutHa" + "ndler"](Nx);
                } else {
                  qF["prototype"]["createFilt" + "ers"]["call"](this);
                  this["extraFilte" + 'r'] = new Nb['z_']();
                  this["extraFilte" + 'r']["groupIndex"] = this["groupID"];
                  this["extraFilte" + 'r']["categoryBi" + 'ts'] = 0x104;
                }
              });
              Nx['bg']['addEventLi' + "stener"](q5['Cm']["MOUSE_DOWN"], NS["mouseDownH" + "andler"]);
              Nx['bg']["addEventLi" + "stener"](q5['Cm']['MOUSE_UP'], NS["mouseUpHan" + "dler"]);
              Nx["characterF" + 'aces']["addEventLi" + "stener"](q5['Cm']["MOUSE_UP"], NS["mouseUpHan" + "dler"]);
            } else {
              this["_disableSp" + 'in'] = q6;
            }
          }, Ny = 0x0; Ny < Nb; Ny++) {
          NZ();
        }
        NS["selectedLi" + "stItem"] && (NS['selectedLi' + "stItem"]["selected"] = !0x0, NS["openSelect" + "ion"]());
        NS["selectedCh" + "aracter"] = ND;
        NS["inaccurate" + "Hidden"] = Ng;
        NS["windowBind"] = NS["keyDownHan" + "dler"]['bind'](NS);
        window["addEventLi" + "stener"]('keydown', NS['windowBind'], !0x1);
        return NS;
      } else {
        this["dead"] = !0x1;
        this["_dying"] = !0x1;
        this["_currentPo" + 'se'] = 0x0;
        this["_bleedCoun" + "ter"] = 0x0;
        this["lostLimbs"]["clear"]();
        this["_spikeImpa" + "led"] = !0x1;
        this["foot1Body"] = null;
        this["foot2Body"] = null;
        this["grabbing"] = !0x1;
        this['bodyContac' + 't'] = !0x1;
        this['driverCont' + "act"] = !0x1;
        this["gripJoint1"] = null;
        this["gripJoint2"] = null;
        this["createFilt" + 'ers']();
        this["createBodi" + 'es']();
        this["createJoin" + 'ts']();
        this['resetMovie' + "Clips"]();
        this['createDict' + "ionaries"]();
        this["cameraFocu" + 's'] = this["chestBody"];
      }
    }
    var Ni;
    var NE;
    NE = Nl;
    (Ni = No)["prototype"] = Object["create"](NE["prototype"]);
    Ni["prototype"]["constructo" + 'r'] = Ni;
    nw(Ni, NE);
    var NR;
    var NW;
    var NA = No["prototype"];
    NA["selectPrev" + "iousListIt" + 'em'] = function () {
      if (this["selectedLi" + "stItem"]) {
        var Nr = this["listItemAr" + "ray"]["indexOf"](this["selectedLi" + 'stItem']);
        if (0x0 == Nr) {
          return;
        }
        this["selectedLi" + "stItem"]["selected"] = !0x1;
        Nr -= 0x1;
        this["selectedLi" + 'stItem'] = this['listItemAr' + "ray"][Nr];
        this["selectedLi" + "stItem"]["selected"] = !0x0;
        this["closing"] || this['closeSelec' + "tion"]();
      }
    };
    NA["selectNext" + "ListItem"] = function () {
      if (this["selectedLi" + "stItem"]) {
        var Nr = this["listItemAr" + "ray"]["indexOf"](this["selectedLi" + "stItem"]);
        if (Nr == this["listItemAr" + "ray"]["length"] - 0x1) {
          return;
        }
        this["selectedLi" + "stItem"]["selected"] = !0x1;
        Nr += 0x1;
        this["selectedLi" + "stItem"] = this['listItemAr' + "ray"][Nr];
        this["selectedLi" + "stItem"]["selected"] = !0x0;
        this["closing"] || this["closeSelec" + "tion"]();
      }
    };
    NA["closeSelec" + "tion"] = function () {
      this['closing'] = !0x0;
      this["killReplay" + "Selection"]();
      qP['os']['to'](this, {
        'duration': this["tweenTime"],
        'tweenVal': 0x0,
        'ease': qp['MI']["easeInOut"],
        'onComplete': this["closingCom" + "plete"]
      });
    };
    NA["killReplay" + "Selection"] = function () {
      "amAlk" === 'amAlk' ? (this["replaySele" + "ction"]['die'](), this["replaySele" + "ction"]["removeEven" + 'tListener'](qu['$T']["SESSION"], this["cloneAndDi" + "spatchEven" + 't']), this["replaySele" + "ction"]["removeEven" + 'tListener'](qu['dg']['FLAG'], this["cloneAndDi" + "spatchEven" + 't'])) : q6({}, '', {});
    };
    NA['openSelect' + "ion"] = function () {
      if ("agsfd" !== "agsfd") {
        return this["_rating"];
      } else {
        var Nr = this["getChildIn" + "dex"](this["selectedLi" + "stItem"]) + 0x1;
        this["replaySele" + 'ction'] = new nX(this["selectedLi" + 'stItem']["replayData" + 'Object']);
        this["replaySele" + "ction"]["addEventLi" + "stener"](qu['$T']["SESSION"], this["cloneAndDi" + "spatchEven" + 't']);
        this["replaySele" + "ction"]["addEventLi" + "stener"](qu['dg']["FLAG"], this["cloneAndDi" + 'spatchEven' + 't']);
        this["addChildAt"](this["replaySele" + "ction"], Nr);
        this["replaySele" + "ction"]["maskHeight"] = 0x0;
        this["opening"] = !0x0;
        qP['os']['to'](this, {
          'duration': this['tweenTime'],
          'tweenVal': 0x1,
          'ease': qp['MI']['easeInOut'],
          'onComplete': this["openComple" + 'te']
        });
      }
    };
    NA["organizeLi" + 'st'] = function () {
      var Nr;
      this["selectedLi" + "stItem"] && (Nr = this["selectedLi" + "stItem"]['y']);
      for (var NJ, ND = this["numChildre" + 'n'], Ng = 0x0, NS = 0x0; NS < ND; NS++) {
        (NJ = this["getChildAt"](NS))['y'] = Ng;
        Ng += NJ instanceof nZ ? NJ["height"] : NJ instanceof nX ? NJ["maskHeight"] : NJ["height"];
      }
      if (this["selectedLi" + "stItem"]) {
        var Nd = Nr - this["selectedLi" + "stItem"]['y'];
        this['y'] += Nd;
        (Nd = this['y'] + this['selectedLi' + "stItem"]['y']) < 0x0 && (this['y'] -= Nd);
      }
      if (this["replaySele" + 'ction'] && this["opening"]) {
        var Nz = this["replaySele" + "ction"]['y'] + this["replaySele" + "ction"]["maskHeight"];
        (Nd = 0x160 - this['y'] - Nz) < 0x0 && (this['y'] += Nd);
      }
    };
    NA["die"] = function () {

      if ("evUqV" !== "evUqV") {
        if (this["selectedLi" + 'stItem']) {
          var ND = this["listItemAr" + 'ray']["indexOf"](this["selectedLi" + "stItem"]);
          if (0x0 == ND) {
            return;
          }
          this["selectedLi" + "stItem"]["selected"] = !0x1;
          ND -= 0x1;
          this["selectedLi" + "stItem"] = this["listItemAr" + "ray"][ND];
          this["selectedLi" + "stItem"]["selected"] = !0x0;
          this["closing"] || this["closeSelec" + "tion"]();
        }
      } else {
        var Nr = this;
        qP['os']['killTweens' + 'Of'](this);
        this["listItemAr" + "ray"]["forEach"](function (ND) {
          ND['bg']["pixiSprite"]["off"]("pointerove" + 'r');
          ND['bg']["pixiSprite"]["off"]('pointerout');
          ND['bg']["removeEven" + "tListener"](q5['Cm']["MOUSE_DOWN"], Nr["mouseDownH" + "andler"]);
          ND['bg']["removeEven" + "tListener"](q5['Cm']["MOUSE_UP"], Nr["mouseUpHan" + 'dler']);
          ND["characterF" + 'aces']["removeEven" + "tListener"](q5['Cm']["MOUSE_UP"], Nr["mouseUpHan" + "dler"]);
        });
        window['removeEven' + "tListener"]("keydown", this["windowBind"], !0x1);
        this["replaySele" + "ction"] && this["killReplay" + 'Selection']();
      }
    };
    NR = No;
    (NW = [{
      'key': "tweenVal",
      'get': function () {
        return this["_tweenVal"];
      },
      'set': function (Nr) {
        this["_tweenVal"] = Nr;
        this["replaySele" + "ction"]["maskHeight"] = Math["round"](this["replaySele" + "ction"]["fullHeight"] * Nr);
        this["organizeLi" + 'st']();
        this["dispatchEv" + "ent"](new q5['Jh'](No['UPDATE_SCR' + "OLLER"]));
      }
    }, {
      'key': "height",
      'get': function () {
        if ("afpFP" !== "crDIf") {
          for (var Nr = 0x0, NJ = this['listItemAr' + "ray"]["length"], ND = 0x0; ND < NJ; ND++) {
            Nr += this["listItemAr" + "ray"][ND]['height'];
          }
          this["replaySele" + "ction"] && (Nr += this["replaySele" + "ction"]["maskHeight"]);
          return Nr;
        } else {
          qF["prototype"]["kneeBreak2"]["call"](this, qT);
          this["ejected"] || this["sleighFoot" + '2'] && (this["_session"]["m_world"]["DestroyJoi" + 'nt'](this["sleighFoot" + '2']), this["sleighFoot" + '2'] = null, this["checkEject"]());
        }
      },
      'set': function (Nr) {
        if ("EtRYX" !== "UCwIC") {
          throw new Error("cannot set" + '\x20list\x20heig' + "ht manuall" + 'y');
        } else {
          var ND = qT['call'](qR, "string");
          if ("object" != typeof ND) {
            return ND;
          }
          throw new qz("@@toPrimit" + 'ive\x20must\x20r' + "eturn a pr" + "imitive va" + "lue.");
        }
      }
    }, {
      'key': "selectedCh" + "aracter",
      'get': function () {
        return "hZJJQ" !== "hZJJQ" ? this["lostLimbs"]['has'](q6) : this['_selectedC' + "haracter"];
      },
      'set': function (Nr) {
        if ("hDXJb" !== 'hDXJb') {
          NS += 0x1;
        } else {
          if (Nr > -0x1 && this["_selectedC" + "haracter"] != Nr) {
            this["_highlight" + "edArray"] = [];
            for (var NJ = this["listItemAr" + "ray"]['length'], ND = 0x0; ND < NJ; ND++) {
              var Ng = this["listItemAr" + "ray"][ND];
              var NS = Ng["characterF" + "aces"]["characterI" + 'd'];
              NS == Nr ? (Ng["faded"] = !0x1, this["_highlight" + "edArray"]['push'](Ng)) : Ng["faded"] = !0x0;
            }
            this["_selectedC" + "haracter"] = Nr;
          } else {
            this["_highlight" + 'edArray'] = null;
            NJ = this["listItemAr" + "ray"]['length'];
            ND = 0x0;
            for (; ND < NJ; ND++) {
              NS = (Ng = this["listItemAr" + "ray"][ND])["characterF" + 'aces']["characterI" + 'd'];
              Ng["faded"] = !0x1;
            }
            this["_selectedC" + "haracter"] = -0x1;
            this["dispatchEv" + "ent"](new q5['Jh'](No["FACE_SELEC" + "TED"]));
          }
        }
      }
    }, {
      'key': "highlighte" + "dArray",
      'get': function () {
        if ("OMJdv" === 'EZTWx') {
          var NJ = qz['GetBody']()["GetLinearV" + "elocity"]();
          NA["landedOn"]["set"](qI["shape1"], NJ['y'] > 0x1 && NJ['y'] > qS["abs"](NJ['x']) ? qA : null);
        } else {
          return this['_highlight' + "edArray"];
        }
      }
    }, {
      'key': "inaccurate" + "Hidden",
      'get': function () {
        return this['_inaccurat' + 'eHidden'];
      },
      'set': function (Nr) {
        var NJ = this['listItemAr' + "ray"]['length'];
        if (Nr) {
          for (var ND = 0x0; ND < NJ; ND++) {
            var Ng = this["listItemAr" + "ray"][ND];
            Ng["hidden"] = !Ng["accurate"];
            Ng["hidden"] && this["selectedLi" + "stItem"] && Ng == this["selectedLi" + 'stItem'] && (this["selectedLi" + "stItem"]["selected"] = !0x1, this["selectedLi" + "stItem"] = null, this["replaySele" + 'ction'] && this['closeSelec' + "tion"]());
          }
        } else {
          for (ND = 0x0; ND < NJ; ND++) {
            (Ng = this["listItemAr" + "ray"][ND])["hidden"] = !0x1;
          }
        }
        this["_inaccurat" + "eHidden"] = Nr;
        this["organizeLi" + 'st']();
        this['dispatchEv' + "ent"](new q5['Jh'](No["UPDATE_SCR" + "OLLER"]));
      }
    }]) && function (Nr, NJ) {
      if ("BrjWC" !== 'BrjWC') {
        for (var Nd = 0x0; Nd < qz["length"]; Nd++) {
          var Nz = qN[Nd];
          Nz["enumerable"] = Nz["enumerable"] || !0x1;
          Nz['configurab' + 'le'] = !0x0;
          "value" in Nz && (Nz["writable"] = !0x0);
          qc["defineProp" + "erty"](qV, qE(Nz["key"]), Nz);
        }
      } else {
        for (var ND = 0x0; ND < NJ['length']; ND++) {
          if ("bVasp" !== "bVasp") {
            this["_body"] = q6;
          } else {
            var Ng = NJ[ND];
            Ng["enumerable"] = Ng["enumerable"] || !0x1;
            Ng["configurab" + 'le'] = !0x0;
            "value" in Ng && (Ng["writable"] = !0x0);
            Object["defineProp" + 'erty'](Nr, nx(Ng["key"]), Ng);
          }
        }
      }
    }(NR['prototype'], NW);
    Object["defineProp" + "erty"](NR, "prototype", {
      'writable': !0x1
    });
    return NR;
  }(q5['kx']);
  function nY(Nl, No) {


    nY = Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"]["bind"]() : function (Ni, NE) {
      Ni["__proto__"] = NE;
      return Ni;
    };
    return nY(Nl, No);
  }
  na["UPDATE_SCR" + "OLLER"] = "updatescro" + 'ller';
  na['FACE_SELEC' + "TED"] = "faceselect" + 'ed';
  var nv = function (Nl) {

    function No(NW) {
      var NA;
      void 0x0 === NW && (NW = null);
      (NA = Nl['call'](this) || this)["loadData"] = function (ND) {


        if ("DkrOn" !== 'IHvrr') {
          void 0x0 === ND && (ND = null);
          for (var Ng = 0x0; Ng < NA["dropMenuAr" + "ray"]["length"]; Ng++) {
            No["savedDropS" + 'ettings'][Ng] = No["currentDro" + "pSettings"][Ng];
          }
          NA['refreshBut' + "ton"]["setSpin"](!0x0);
          No["replayData" + "Array"] = [];
          var NS = new q5['vg'](q6['w']["siteURL"] + "replay.hw");
          NS["method"] = q5['QI']["POST"];
          No["urlVariabl" + 'es'] = new q5['Vt']();
          No["urlVariabl" + 'es']["action"] = "get_all_by" + "_level";
          No["urlVariabl" + 'es']["page"] = No["currentSet"] = No['currentPag' + 'e'] = 0x1;
          No["urlVariabl" + 'es']["level_id"] = No["_levelId"];
          No["urlVariabl" + 'es']["sortby"] = NA["sortDropMe" + 'nu']["value"];
          NS["data"] = No["urlVariabl" + 'es'];
          ND && qN['JD']["trackEvent"](qN['JD']["REPLAY_BRO" + "WSER"], qN['JD']["REFRESH_RE" + "PLAYS"], NA["sortDropMe" + 'nu']["value"]);
          NA['statusSpri' + 'te'] = new q3['AS']("loading re" + "plays...");
          var Nd = NA['statusSpri' + 'te']["window"];
          NA["addChild"](Nd);
          Nd["center"]();
          NA["loader"] = new q5['NU']();
          NA["loader"]['addEventLi' + "stener"](q5['Jh']['COMPLETE'], NA["replayData" + "Loaded"]);
          NA["loader"]["addEventLi" + "stener"](q5['BR']["IO_ERROR"], NA["IOErrorHan" + "dler"]);
          NA['loader']["addEventLi" + "stener"](q5['Xt']["SECURITY_E" + "RROR"], NA["securityEr" + "rorHandler"]);
          NA["loader"]["load"](NS);
        } else {
          this["backDrops"] = new qI();
          var NF = qS['w']['numBackgro' + "undLayers"];
          if (NF > 0x1) {
            var NM = this["levelData"]['backdrop3'];
            var NH = new ql['j'](NM, 0.1, !0x0, 0x3);
            this['_session']["addChildAt"](NH, 0x0);
            this["backDrops"]['push'](NH);
          }
          if (NF > 0x2) {
            var Nb = this["levelData"]["backdrop2"];
            var NZ = new q3['j'](Nb, 0.05, !0x0, 0x6);
            this["_session"]["addChildAt"](NZ, 0x0);
            this['backDrops']['push'](NZ);
          }
          var Ny = this["levelData"]["backdrop4"];
          var Nc = new qc['j'](Ny, 0.01, !0x0, 0x7);
          this["_session"]["addChildAt"](Nc, 0x0);
          this["backDrops"]["push"](Nc);
          if (NF > 0x0) {
            var NX = new No['j']((0x0, qs['zI'])('BackDrops', "green_sky_" + "backdrop"), 0x0, !0x1);
            this["_session"]['addChildAt'](NX, 0x0);
            this["backDrops"]['push'](NX);
          }
        }
      };
      NA["replayData" + "Loaded"] = function (ND) {


        var Ng;
        NA["statusSpri" + 'te']["die"]();
        NA['removeLoad' + "erListener" + 's']();
        NA["refreshBut" + "ton"]['setSpin'](!0x1);
        var NS = String(NA["loader"]['data']);
        var Nd = NS["substr"](0x0, 0x8);
        if (Nd["indexOf"]("<html>") > -0x1) {
          NA["createProm" + "ptSprite"]("There was " + "an unexpec" + "ted system" + " Error", 'oh');
          return void NA["updateRefr" + "eshButton"](!0x0);
        }
        if (Nd["indexOf"]("failure") > -0x1) {
          if ("rCLPs" !== 'szbVu') {
            var Nz = NS['split'](':');
            "invalid_ac" + "tion" == Nz[0x1] ? NA["createProm" + "ptSprite"]("An invalid" + " action wa" + "s passed (" + "you really" + " shouldn't" + '\x20ever\x20be\x20s' + 'eeing\x20this' + ').', 'ok') : "bad_param" == Nz[0x1] ? NA["createProm" + "ptSprite"]("A bad para" + "meter was " + 'passed\x20(yo' + "u really s" + "houldn't e" + "ver be see" + "ing this).", 'ok') : "app_error" == Nz[0x1] ? NA["createProm" + "ptSprite"]("Sorry, the" + "re was an " + "applicatio" + "n error. I" + "t was most" + '\x20likely\x20da' + "tabase rel" + "ated. Plea" + 'se\x20try\x20aga' + "in in a mo" + "ment.", 'ok') : NA["createProm" + 'ptSprite']("An unknown" + " Error has" + '\x20occurred.', 'oh');
            return void NA["updateRefr" + "eshButton"](!0x0);
          } else {
            return this['_particleC' + 'ontroller'];
          }
        }
        NA["updateRefr" + "eshButton"]();
        var NF = new q5['_9'](NA["loader"]["data"]);
        No["replayData" + "Array"] || (No["replayData" + "Array"] = []);
        for (var NM = null === (Ng = NF['rp']) || void 0x0 === Ng ? void 0x0 : Ng["length"], NH = 0x0; NH < NM; NH++) {
          if ("MuhxO" === "xkwMl") {
            qr || (qj = "next");
            if (qP = Nb[qy]) {
              if (!(q4 = q5['call'](q6, q7))) {
                throw q8("iterator r" + "esult is n" + 'ot\x20an\x20obje' + 'ct');
              }
              if (!q9['done']) {
                return qq;
              }
              qn = qN["value"];
              qf < 0x2 && (qT = 0x0);
            } else {
              0x1 === Nz && (qb = qC["return"]) && qt["call"](qM);
              qi < 0x2 && (qD = qw('The\x20iterat' + "or does no" + "t provide " + "a '" + q0 + "' method"), q1 = 0x1);
            }
            q2 = q3;
          } else {
            var Nb = NF['rp'][NH];
            var NZ = new qo['JS'](Nb["@id"], Nb["@li"], Nb["@ui"], Nb["@un"], Nb["@rg"], Nb["@vs"], Nb["@vw"], Nb["@dc"], Nb['uc'][0x0]["cdata"], Nb['@pc'], Nb["@ct"], Nb["@ar"], Nb["@vr"]);
            No["replayData" + "Array"]["push"](NZ);
          }
        }
        NA["list"] && NA["killList"]();
        NA['buildList']();
      };
      NA["IOErrorHan" + 'dler'] = function (ND) {


        NA["statusSpri" + 'te'] && NA["statusSpri" + 'te']["die"]();
        NA["removeLoad" + 'erListener' + 's']();
        NA["updateRefr" + "eshButton"]();
        NA["refreshBut" + "ton"]["setSpin"](!0x1);
        NA['createProm' + "ptSprite"]("Sorry, the" + "re was an " + "IO Error.", "ugh, ok");
      };
      NA["securityEr" + "rorHandler"] = function (ND) {


        if ("LyNjg" === "afvyu") {
          var NS = qT["call"](qR, "string");
          if ("object" != typeof NS) {
            return NS;
          }
          throw new qz("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
        } else {
          NA["statusSpri" + 'te'] && NA["statusSpri" + 'te']["die"]();
          NA['removeLoad' + "erListener" + 's']();
          NA["updateRefr" + "eshButton"]();
          NA["refreshBut" + "ton"]["setSpin"](!0x1);
          NA["createProm" + "ptSprite"]("Sorry, the" + "re was a S" + 'ecurity\x20Er' + "ror.", "ugh, ok");
        }
      };
      NA["dropMenuSe" + 'lected'] = function (ND) {


        if ("VbFXz" === 'VbFXz') {
          void 0x0 === ND && (ND = null);
          var Ng = ND['target'];
          var NS = NA["dropMenuAr" + "ray"]["indexOf"](Ng);
          var Nd = Ng["currentInd" + 'ex'];
          No['currentDro' + "pSettings"][NS] = Nd;
          NA["organizeDr" + "opMenus"]();
          NA["updateRefr" + "eshButton"](null == ND);
        } else {
          void 0x0 === qH && (qk = null);
          NA["currentMen" + 'u'] = qJ["REPLAY_BRO" + 'WSER'];
          qr['hideButton' + 's']();
          qj["replayBrow" + "ser"] = new qP(qn);
          qy["addChild"](qg['replayBrow' + "ser"]);
          qu["bringUIBut" + "tonsToFron" + 't']();
          qd["replayBrow" + 'ser']['init']();
          qm["replayBrow" + "ser"]["addEventLi" + "stener"](qa['$T']['PREVIOUS_M' + 'ENU'], qh["transFromR" + "eplayBrows" + 'er']);
          qq["replayBrow" + "ser"]["addEventLi" + "stener"](qZ['$T']["LEVEL_BROW" + "SER"], qo['transToLev' + "elBrowserF" + "romReplays"]);
          qK["replayBrow" + 'ser']['addEventLi' + "stener"](ND['$T']["SESSION"], Nr["cloneAndDi" + "spatchEven" + 't']);
          qb['transition' + 'ing'] || qC['replayBrow' + 'ser']["activate"]();
          qt['m']["instance"]['duckMusic'](0.5);
        }
      };
      NA["backPress"] = function (ND) {


        NA["backButton"]["removeEven" + "tListener"](q5['Cm']["MOUSE_UP"], NA["backPress"]);
        No["currentPag" + 'e'] = 0x1;
        qN['JD']["trackEvent"](qN['JD']["REPLAY_BRO" + "WSER"], qN['JD']["GOTO_LEVEL" + "_BROWSER"]);
        var Ng = new qu['$T'](qu['$T']["PREVIOUS_M" + 'ENU']);
        Ng['target'] = NA;
        NA["dispatchEv" + "ent"](Ng);
      };
      NA["getLevelsF" + "romUser"] = function (ND) {


        var Ng = ND["extra"];
        qN['JD']["trackEvent"](qN['JD']['REPLAY_BRO' + "WSER"], qN['JD']["GET_LEVELS" + "_BY_AUTHOR"], 'authorID_' + Ng["author_id"]);
        n7["importAuth" + 'or'](Ng['author_nam' + 'e'], Ng["author_id"]);
        NA["gotoLevelB" + "rowser"]();
      };
      NA['getFavorit' + "esFromUser"] = function (ND) {

        if ("FfaPh" !== "FfaPh") {
          qN = qc["get"](qV);
          qE = [];
          for (var Nd = ql['length'], Nz = 0x0; Nz < Nd; Nz++) {
            q3["push"](Ng[Nz]);
          }
          qs["set"](qf, q9);
        } else {
          var Ng = ND["extra"];
          qN['JD']["trackEvent"](qN['JD']["REPLAY_BRO" + "WSER"], qN['JD']["GET_FAVORI" + "TES"], "userID_" + Ng['author_id']);
          n7['importFavo' + "rites"](Ng["author_nam" + 'e'], Ng['author_id']);
          NA["gotoLevelB" + "rowser"]();
        }
      };
      NA["flipPage"] = function (ND) {


        if ('ItsuQ' !== "ItsuQ") {
          if (qR['target'] instanceof qz['oi']) {
            var Nz = qS["target"];
            qA["currentIte" + 'm'] = Nz;
          }
        } else {
          var Ng = No['currentSet'];
          No["currentPag" + 'e'] = NA['pageFlippe' + 'r']["currentPag" + 'e'];
          No["currentSet"] = Math["ceil"](No['currentPag' + 'e'] * No["pageLength"] / No["setLength"]);
          var NS = No["replayData" + "Array"]["length"];
          No["currentSet"] > Ng && NS <= (No["currentSet"] - 0x1) * No["setLength"] ? NA["loadDataOf" + "fset"]() : (NA["killList"](), NA["buildList"]());
        }
      };
      NA["cloneAndDi" + "spatchEven" + 't'] = function (ND) {


        if ("YRste" !== "YRste") {
          return this['_isMac'];
        } else {
          if (ND["type"] == qu['$T']["SESSION"]) {
            if ("RORXk" === "RORXk") {
              ND['replayData' + 'Object'] && (No['lastReplay' + 'Id'] = ND["replayData" + "Object"]['id']);
              var Ng = new qu['$T'](ND["type"], No["_levelData" + "Object"], ND["replayData" + "Object"], ND["extra"]);
              NA["dispatchEv" + "ent"](Ng);
            } else {
              qT["__proto__"] = qR;
              return qz;
            }
          } else {
            var NS = ND["clone"]();
            NA["dispatchEv" + 'ent'](NS);
          }
        }
      };
      NA["faceSelect" + 'ed'] = function (ND) {


        void 0x0 === ND && (ND = null);
        No["selectedCh" + "aracter"] = NA["list"]["selectedCh" + "aracter"];
      };
      NA["updateScro" + "ller"] = function (ND) {


        void 0x0 === ND && (ND = null);
        NA["scrollBar"]["updateScro" + "llTab"]();
      };
      NA["archValueC" + "hange"] = function (ND) {


        if ("CMVtw" === "CMVtw") {
          No["hideInnacc" + "urate"] = ND["value"];
          NA["list"]['inaccurate' + "Hidden"] = No["hideInnacc" + "urate"];
          NA['updateScro' + "ller"]();
        } else {
          for (var NS = 0x0, Nd = 0x0, Nz = No['atan2'](qs, qf), NF = new q9['LJ'](Nz - 0.5 * q5['PI']), NM = NW["sqrt"](qB["pow"](qW, 0x2) + qH["pow"](qk, 0x2)) - 0xa, NH = NA["floor"](NM / 0x32), Nb = 0x32 * qJ['cos'](Nz), NZ = 0x32 * qr["sin"](Nz), Ny = qj[0x0], Nc = new qP(), NX = 0x0; NX < 0x3; NX++) {
            (Ny = (Ny = qn[NX])["Copy"]())["MulM"](NF);
            Nc["push"](Ny);
          }
          for (var Nx = 0x1; Nx <= NH; Nx++) {
            NS += Nb;
            Nd += NZ;
            Ny = Nc[0x2];
            this["armSprite"]["graphics"]["lineStyle"](null);
            this["armSprite"]['graphics']["beginFill"](0x666666);
            this["armSprite"]["graphics"]["moveTo"](Ny['x'] + NS, Ny['y'] + Nd);
            for (var Nw = 0x0; Nw < 0x3; Nw++) {
              Ny = Nc[Nw];
              this["armSprite"]["graphics"]["lineTo"](Ny['x'] + NS, Ny['y'] + Nd);
            }
            this["armSprite"]["graphics"]["endFill"]();
          }
        }
      };
      NA["archRollOv" + 'er'] = function (ND) {


        q3['uO']["instance"]["show"]("When a rep" + "lay is sav" + "ed, the ty" + "pe of comp" + "uter it wa" + 's\x20created\x20' + "on is save" + "d along wi" + "th it.  Co" + "mputers th" + "at match t" + "his type w" + "ill show t" + "he replay " + "100% accur" + 'ately.\x20\x20Th' + "ose that d" + "o not will" + " playback " + "the replay" + " with slig" + 'htly\x20diffe' + "rent float" + 'ing\x20point\x20' + "math, whic" + "h often (b" + "ut not alw" + "ays) creat" + "es a diffe" + 'rent\x20end\x20r' + "esult enti" + "rely.<br><" + "br>Users m" + 'ay\x20only\x20ra' + "te replays" + " they can " + "view accur" + 'ately.', NA['archCheck']);
      };
      var Nr = (0x0, qK['zI'])("GameUI", 'mc_replay_' + "browser");
      NA["__mc"] = Nr;
      var NJ = [];
      Nr['children']["forEach"](function (ND) {

        if ('AapYv' === 'DuFVa') {
          this["_next"] = q6;
        } else {
          var Ng;
          ND instanceof qV['j7'] ? (Ng = new q5['j7'](null))["setPixiMov" + 'ieClip'](ND) : Ng = new q5['kx'](ND);
          ND['name'] && (Ng["name"] = Ng["pixiSprite"]["name"] = ND['name'], NA[ND['name']] = Ng);
          NJ['push'](Ng);
        }
      });
      NJ["forEach"](function (ND) {

        NA["addChild"](ND);
      });
      NA['titleText'] = q5['A_']['spriteToTe' + "xtField"](NA['titleText'], NA);
      NA["backButton"] = (0x0, qK['Iz'])(q3['yw'], NA, "backButton", {
        'fileName': "GameUI",
        'mcName': "mc_feature" + "d_back_but" + "ton"
      });
      NW && (No["_levelId"] = NW['id'], No["_levelData" + "Object"] = NW);
      return NA;
    }
    var Ni;
    var NE;
    NE = Nl;
    (Ni = No)["prototype"] = Object["create"](NE["prototype"]);
    Ni["prototype"]['constructo' + 'r'] = Ni;
    nY(Ni, NE);
    var NR = No["prototype"];
    NR["init"] = function () {
      this["mouseChild" + "ren"] = !0x1;
      this["shadow"]["mouseEnabl" + 'ed'] = !0x1;
      this['refreshBut' + "ton"] = new n0();
      this["addChild"](this["refreshBut" + 'ton']);
      this["refreshBut" + "ton"]['x'] = this["shadow"]['x'] + this['shadow']["width"] + 0xa;
      this["refreshBut" + "ton"]['y'] = this["shadow"]['y'] - 0x16;
      this["buildDropM" + "enus"]();
      this['titleText']["htmlText"] = "Replays - " + No["_levelData" + "Object"]['name'];
      this["titleText"]['filters'] = [new q5['qx'](0xffffff, void 0x0, void 0x0, void 0x0, 0.5, 0x2), new q5['GD'](0x6, 0x5a, 0x0)];
      var NW = new q5['A_']();
      NW['htmlText'] = 'by';
      NW["defaultTex" + "tFormat"] = new q5['lk']('Clarendon\x20' + "LT Std", 0xf, 0xcccccc, !0x0, !0x1, !0x1, null, null, "left", 0x0, 0x0, 0x2);
      NW['x'] = 0x66 + this['titleText']["_pixiText"]["width"] + 0xa;
      NW['y'] = 0x5 + 0.5 * this["titleText"]["_pixiText"]["height"];
      NW["filters"] = [new q5['qx'](0xffffff, void 0x0, void 0x0, void 0x0, 0.5, 0x2), new q5['GD'](0x6, 0x5a, 0x0)];
      this["addChild"](NW);
      var NA = new q5['A_']();
      NA['htmlText'] = No["_levelData" + "Object"]["author_nam" + 'e'];
      NA["defaultTex" + 'tFormat'] = new q5['lk']("Clarendon " + "LT Std", 0xf, 0xfffe65, !0x0, !0x1, !0x1, null, null, "left", 0x0, 0x0, 0x2);
      NA['x'] = NW['x'] + NW["width"] + 0xa;
      NA['y'] = 0x5 + 0.5 * this["titleText"]["height"];
      NA["filters"] = [new q5['qx'](0xffffff, void 0x0, void 0x0, void 0x0, 0.5, 0x2), new q5['GD'](0x6, 0x5a, 0x0)];
      this["addChild"](NA);
      this["archCheck"] = new q3['oV']("only show " + "accurate r" + 'eplays', 'hideInnacc' + "urate", No['hideInnacc' + "urate"], !0x0, !0x1, 0xcccccc);
      this["archCheck"]['x'] = this["shadow"]['x'];
      this["archCheck"]['y'] = this["shadow"]['y'] - 0x17;
      this["addChild"](this["archCheck"]);
      this["archCheck"]["addEventLi" + 'stener'](q3['vq']["VALUE_CHAN" + 'GE'], this['archValueC' + "hange"]);
      this['archCheck']['addEventLi' + "stener"](q5['Cm']["ROLL_OVER"], this["archRollOv" + 'er']);
      this["refreshBut" + 'ton']["addEventLi" + "stener"](q5['Cm']["MOUSE_UP"], this["loadData"]);
      this["backButton"]["addEventLi" + "stener"](q5['Cm']["MOUSE_UP"], this["backPress"]);
    };
    NR["activate"] = function () {
      this["mouseChild" + "ren"] = !0x0;
      No["replayData" + "Array"] ? this['buildList']() : this["loadData"]();
    };
    No["importRepl" + "ayDataArra" + 'y'] = function (NW, NA) {
      No['replayData' + 'Array'] = NW;
      var Nr = No["replayData" + "Array"][0x0];
      No["lastReplay" + 'Id'] = Nr['id'];
      No['_levelData' + "Object"] = NA;
      No["_levelId"] = NA['id'];
      No["currentPag" + 'e'] = 0x1;
      No["currentSet"] = 0x1;
      No["hideInnacc" + "urate"] = !0x1;
    };
    NR["clearRepla" + 'yList'] = function () {
      No["replayData" + "Array"] = null;
      No["urlVariabl" + 'es'] = null;
    };
    NR["loadDataOf" + "fset"] = function () {
      if ("TBNEH" !== 'WApRn') {
        this['refreshBut' + "ton"]['setSpin'](!0x0);
        var NW = new q5['vg'](q6['w']["siteURL"] + "replay.hw");
        NW["method"] = q5['QI']["POST"];
        NW["data"] = No["urlVariabl" + 'es'];
        No["urlVariabl" + 'es']["page"] = No["currentSet"];
        this["statusSpri" + 'te'] = new q3['AS']("loading re" + "plays...");
        var NA = this["statusSpri" + 'te']["window"];
        this["addChild"](NA);
        NA["center"]();
        qN['JD']["trackEvent"](qN['JD']["REPLAY_BRO" + "WSER"], qN['JD']['PAGE_REPLA' + 'YS'], this["sortDropMe" + 'nu']['value'], No["currentSet"]);
        this["loader"] = new q5['NU']();
        this["loader"]["addEventLi" + "stener"](q5['Jh']["COMPLETE"], this["replayData" + "Loaded"]);
        this["loader"]['addEventLi' + "stener"](q5['BR']["IO_ERROR"], this["IOErrorHan" + "dler"]);
        this['loader']["addEventLi" + "stener"](q5['Xt']["SECURITY_E" + 'RROR'], this["securityEr" + "rorHandler"]);
        this["loader"]['load'](NW);
      } else {
        this["frameHand1" + "Joint"] || this["frameHand2" + "Joint"] || this["cartFoot1J" + 'oint'] || this["cartFoot2J" + "oint"] || this["eject"]();
      }
    };
    NR["createProm" + "ptSprite"] = function (NW, NA) {
      var Nr = new q3['Um'](NW, NA)["window"];
      this["addChild"](Nr);
      Nr['center']();
    };
    NR["removeLoad" + "erListener" + 's'] = function () {
      this["loader"]["removeEven" + 'tListener'](q5['Jh']["COMPLETE"], this["replayData" + 'Loaded']);
      this["loader"]['removeEven' + "tListener"](q5['BR']["IO_ERROR"], this["IOErrorHan" + "dler"]);
      this["loader"]["removeEven" + "tListener"](q5['Xt']["SECURITY_E" + "RROR"], this["securityEr" + "rorHandler"]);
    };
    NR["buildDropM" + "enus"] = function () {
      this["sortDropMe" + 'nu'] = new ql['f']("sort by:", ["newest", "oldest", "rating", 'completion' + " time"], ["newest", "oldest", "rating", 'completion' + "_time"], No["savedDropS" + 'ettings'][0x0]);
      this["addChild"](this["sortDropMe" + 'nu']);
      this['sortDropMe' + 'nu']['y'] = this["shadow"]['y'] - 0x15;
      this["sortDropMe" + 'nu']["addEventLi" + "stener"](ql['f']["ITEM_SELEC" + "TED"], this['dropMenuSe' + "lected"]);
      this["dropMenuAr" + 'ray'] = [this["sortDropMe" + 'nu']];
      this["organizeDr" + "opMenus"]();
    };
    NR["organizeDr" + 'opMenus'] = function () {
      for (var NW = this['shadow']["width"] + this["shadow"]['x'], NA = this["dropMenuAr" + "ray"]["length"] - 0x1; NA > -0x1; NA--) {
        if ("qLitv" !== "qLitv") {
          return new q6(this['_id'], this["_name"], this["_author_id"], this["_author_na" + 'me'], this["_weighted_" + "rating"], this["_votes"], this['_plays'], this["_created"], this["_comments"], this["_character"], this["_forceChar"], this["_importabl" + 'e'], this["_featured"], this["_isPublic"]);
        } else {
          var Nr = this["dropMenuAr" + 'ray'][NA];
          0x1 == No["dropStates"][NA] ? (Nr["visible"] = !0x0, Nr["xLeft"] = NW - Nr["width"], NW = Nr["xLeft"] - No['dropMenuSp' + "acing"]) : Nr["visible"] = !0x1;
        }
      }
    };
    NR["updateRefr" + "eshButton"] = function (NW) {
      if ("yvxlx" !== "yvxlx") {
        qF["prototype"]["kneeBreak2"]["call"](this, qT);
        this["ejected"] || this["removeFrom" + "COMArray"](this["lowerLeg2B" + "ody"]);
      } else {
        void 0x0 === NW && (NW = !0x1);
        for (var NA = 0x0; NA < this["dropMenuAr" + "ray"]['length']; NA++) {
          No["currentDro" + "pSettings"][NA] != No["savedDropS" + "ettings"][NA] && (NW = !0x0);
        }
        this["refreshBut" + "ton"]["setGlow"](NW);
      }
    };
    NR["gotoLevelB" + "rowser"] = function () {
      if ("LeKqa" === 'LeKqa') {
        this['backButton']["removeEven" + "tListener"](q5['Cm']["MOUSE_UP"], this["backPress"]);
        No["currentPag" + 'e'] = 0x1;
        var NW = new qu['$T'](qu['$T']["LEVEL_BROW" + "SER"]);
        NW["target"] = this;
        this["dispatchEv" + "ent"](NW);
      } else {
        this["setJoint"](this["neckJoint"], 0.5, 0x2);
        this["setJoint"](this["hipJoint1"], 1.75, 2.5);
        this["setJoint"](this["hipJoint2"], 2.8, 0x5);
        this["setJoint"](this["kneeJoint1"], 0.2, 0x5);
        this["setJoint"](this["kneeJoint2"], 0.5, 0x5);
        this["setJoint"](this["shoulderJo" + "int1"], 0x4, 0xa);
        this["setJoint"](this["shoulderJo" + "int2"], 2.5, 0xa);
        this["setJoint"](this["elbowJoint" + '1'], 2.5, 0xf);
        this["setJoint"](this["elbowJoint" + '2'], 0x2, 0xf);
      }
    };
    NR["buildList"] = function () {
      var NW = (No["currentPag" + 'e'] - 0x1) * No["pageLength"];
      var NA = NW + No["pageLength"];
      NA = Math["min"](NA, No['replayData' + 'Array']["length"]);
      var Nr = No["replayData" + "Array"]["slice"](NW, NA);
      this["listContai" + "ner"] = new q5['kx']();
      this["list"] = new na(Nr, No["lastReplay" + 'Id'], No["selectedCh" + "aracter"], No['hideInnacc' + 'urate']);
      No["lastReplay" + 'Id'] = -0x1;
      this["listMask"] = new q5['kx']();
      this["listContai" + "ner"]['x'] = this["listHeader"]['x'];
      this["listContai" + "ner"]['y'] = this["listHeader"]['y'] + this["listHeader"]['height'];
      this["listMask"]["graphics"]['beginFill'](0xff0000);
      this["listMask"]["graphics"]["drawRect"](0x0, 0x0, this["shadow"]["width"], this["shadow"]["height"] - this["listHeader"]["height"]);
      this["listMask"]["graphics"]["endFill"]();
      this["list"]["mask"] = this["listMask"];
      this["addChildAt"](this["listContai" + "ner"], this["getChildIn" + "dex"](this["listHeader"]));
      this["listContai" + "ner"]["addChild"](this["list"]);
      this["listContai" + "ner"]['addChild'](this['listMask']);
      this["list"]["addEventLi" + "stener"](na["UPDATE_SCR" + "OLLER"], this["updateScro" + "ller"]);
      this['list']["addEventLi" + "stener"](na["FACE_SELEC" + "TED"], this["faceSelect" + 'ed']);
      this["list"]["addEventLi" + "stener"](qu['$T']["SESSION"], this["cloneAndDi" + "spatchEven" + 't']);
      this['scrollBar'] = new qv['X'](this["list"], this["listMask"], 0x16);
      this['scrollBar']['x'] = this["shadow"]['x'] + this["shadow"]["width"] + 0xa;
      this["scrollBar"]['y'] = this["listContai" + "ner"]['y'];
      this["addChildAt"](this["scrollBar"], 0x2);
      this["faceSelect" + 'ed']();
      this['pageFlippe' + 'r'] && (this["pageFlippe" + 'r']["die"](), this["pageFlippe" + 'r']["destroy"](), this['pageFlippe' + 'r']["removeEven" + "tListener"](qO["FLIP_PAGE"], this["flipPage"]), this["removeChil" + 'd'](this["pageFlippe" + 'r']), this["pageFlippe" + 'r'] = null);
      var NJ = No["replayData" + "Array"]["length"];
      if (0x0 == NJ) {
        if ("NjQtX" !== "NjQtX") {
          var Nd = this["chestMC"]["wound"];
          this["shoulder1B" + "loodFlow"] = this["_session"]["particleCo" + "ntroller"]["createBloo" + "dFlow"](0x0, 0x1, this["chestBody"], new qF['RM'](Nd['x'] / this["character_" + "scale"], Nd['y'] / this["character_" + "scale"]), 0x10e, 0x1f4, this["_session"]["containerS" + "prite"], this["_session"]['containerS' + "prite"]["getChildIn" + "dex"](this["upperArm1M" + 'C']));
          qT['m']['instance']["playAreaSo" + "undInstanc" + 'e']('LimbRip2', this["upperArm1B" + "ody"]);
        } else {
          var ND = new q3['Um']("no replays" + " found usi" + "ng these p" + "arameters", 'ok')["window"];
          this["addChild"](ND);
          ND["center"]();
        }
      } else {
        var Ng = NJ % No["setLength"] > 0x0;
        this["pageFlippe" + 'r'] = new qO(No["currentPag" + 'e'], No["pageLength"], NJ, Ng);
        this["addChild"](this["pageFlippe" + 'r']);
        this["pageFlippe" + 'r']['x'] = this["shadow"]['x'] + this["shadow"]["width"];
        this["pageFlippe" + 'r']['y'] = this['shadow']['y'] + this['shadow']["height"] + 0x7;
        this["pageFlippe" + 'r']["addEventLi" + "stener"](qO["FLIP_PAGE"], this["flipPage"]);
      }
    };
    NR["killList"] = function () {
      this['list']["removeEven" + "tListener"](na["UPDATE_SCR" + "OLLER"], this["updateScro" + "ller"]);
      this["list"]["removeEven" + "tListener"](na["FACE_SELEC" + 'TED'], this["faceSelect" + 'ed']);
      this["list"]["removeEven" + "tListener"](qu['$T']["SESSION"], this["cloneAndDi" + "spatchEven" + 't']);
      this["list"]["die"]();
      this["list"]["destroy"]();
      this["list"] = null;
      this["scrollBar"]["die"]();
      this["removeChil" + 'd'](this["scrollBar"]);
      this["scrollBar"] = null;
      this["removeChil" + 'd'](this["listContai" + "ner"]);
      this["listContai" + "ner"] = null;
      this["listMask"] = null;
    };
    NR["die"] = function () {

      if ("DoJuy" !== "TnUYY") {
        this["sortDropMe" + 'nu']["removeEven" + "tListener"](ql['f']["ITEM_SELEC" + "TED"], this['dropMenuSe' + "lected"]);
        this["sortDropMe" + 'nu']["die"]();
        this["pageFlippe" + 'r'] && (this["pageFlippe" + 'r']['die'](), this['pageFlippe' + 'r']["removeEven" + 'tListener'](qO["FLIP_PAGE"], this["flipPage"]));
        this["backButton"]["removeEven" + "tListener"](q5['Cm']["MOUSE_UP"], this["backPress"]);
        this["archCheck"]['die']();
        this["archCheck"]["removeEven" + "tListener"](q3['vq']['VALUE_CHAN' + 'GE'], this["archValueC" + "hange"]);
        this["archCheck"]["removeEven" + 'tListener'](q5['Cm']["ROLL_OVER"], this["archRollOv" + 'er']);
        this["removeChil" + 'd'](this["archCheck"]);
        this["refreshBut" + "ton"]["removeEven" + "tListener"](q5['Cm']["MOUSE_UP"], this["loadData"]);
        this["list"] && this["killList"]();
      } else {
        q8 = qI["setPrototy" + "peOf"] ? qS['setPrototy' + "peOf"]['bind']() : function (NA, Nr) {
          NA["__proto__"] = Nr;
          return NA;
        };
        return qA(qN, qc);
      }
    };
    NR["destroy"] = function () {
      for (var NW = ["usernameLa" + "bel", "ratingLabe" + 'l', "completion" + "TimeLabel", 'createdLab' + 'el', "viewsLabel", "accurateLa" + 'bel'], NA = 0x0; NA < NW["length"]; NA++) {
        var Nr = NW[NA];
        this['__mc']["listHeader"][Nr]['destroy']();
      }
      Nl['prototype']["destroy"]["call"](this);
    };
    return No;
  }(q5['kx']);
  nv["pageLength"] = 0x32;
  nv["setLength"] = 0x1f4;
  nv["dropMenuSp" + "acing"] = 0xa;
  nv["currentDro" + "pSettings"] = [0x3];
  nv["savedDropS" + "ettings"] = [0x3];
  nv["dropStates"] = [0x1];
  nv["selectedCh" + "aracter"] = -0x1;
  nv['lastReplay' + 'Id'] = -0x1;
  nv["hideInnacc" + "urate"] = !0x1;
  nv["currentSet"] = 0x1;
  var nL = q2(0x16fe2);
  function nU() {

    var Nl;
    var No;
    var Ni = 'function' == typeof Symbol ? Symbol : {};
    var NE = Ni["iterator"] || "@@iterator";
    var NR = Ni["toStringTa" + 'g'] || "@@toString" + "Tag";
    function NW(Nz, NF, NM, NH) {

      var Nb = NF && NF["prototype"] instanceof Nr ? NF : Nr;
      var NZ = Object["create"](Nb["prototype"]);
      nO(NZ, "_invoke", function (Ny, Nc, NX) {

        var Nx;
        var Nw;
        var Na;
        var NY = 0x0;
        var Nv = NX || [];
        var NL = !0x1;
        var NU = {
          'p': 0x0,
          'n': 0x0,
          'v': Nl,
          'a': NO,
          'f': NO["bind"](Nl, 0x4),
          'd': function (NG, NQ) {
            Nx = NG;
            Nw = 0x0;
            Na = Nl;
            NU['n'] = NQ;
            return NA;
          }
        };
        function NO(NG, NQ) {
          Nw = NG;
          Na = NQ;
          No = 0x0;
          for (; !NL && NY && !f0 && No < Nv["length"]; No++) {
            if ("KaujW" === "KaujW") {
              var f0;
              var f1 = Nv[No];
              var f2 = NU['p'];
              var f3 = f1[0x2];
              NG > 0x3 ? (f0 = f3 === NQ) && (Na = f1[(Nw = f1[0x4]) ? 0x5 : (Nw = 0x3, 0x3)], f1[0x4] = f1[0x5] = Nl) : f1[0x0] <= f2 && ((f0 = NG < 0x2 && f2 < f1[0x1]) ? (Nw = 0x0, NU['v'] = NQ, NU['n'] = f1[0x1]) : f2 < f3 && (f0 = NG < 0x3 || f1[0x0] > NQ || NQ > f3) && (f1[0x4] = NG, f1[0x5] = NQ, NU['n'] = f3, Nw = 0x0));
            } else {
              if ("object" != typeof qA || !NU) {
                return qc;
              }
              var f5 = qV[qE["toPrimitiv" + 'e']];
              if (void 0x0 !== f5) {
                var f6 = f5["call"](f2, "string");
                if ("object" != typeof f6) {
                  return f6;
                }
                throw new NY('@@toPrimit' + "ive must r" + 'eturn\x20a\x20pr' + "imitive va" + "lue.");
              }
              return No(qs);
            }
          }
          if (f0 || NG > 0x1) {
            return NA;
          }
          NL = !0x0;
          throw NQ;
        }
        return function (NG, NQ, f0) {
          if ("kTVCY" !== "LQvbp") {
            if (NY > 0x1) {
              throw TypeError("Generator " + "is already" + " running");
            }
            NL && 0x1 === NQ && NO(NQ, f0);
            Nw = NQ;
            Na = f0;
            for (; (No = Nw < 0x2 ? Nl : Na) || !NL;) {
              Nx || (Nw ? Nw < 0x3 ? (Nw > 0x1 && (NU['n'] = -0x1), NO(Nw, Na)) : NU['n'] = Na : NU['v'] = Na);
              try {
                NY = 0x2;
                if (Nx) {
                  if ("gnWhj" === "snhja") {
                    this["session"]["contactLis" + "tener"]["deleteList" + "ener"](NA['jp']["RESULT"], this["shape"]);
                  } else {
                    Nw || (NG = "next");
                    if (No = Nx[NG]) {
                      if ("xYeSa" !== "qcTeZ") {
                        if (!(No = No["call"](Nx, Na))) {
                          throw TypeError("iterator r" + "esult is n" + 'ot\x20an\x20obje' + 'ct');
                        }
                        if (!No["done"]) {
                          return No;
                        }
                        Na = No["value"];
                        Nw < 0x2 && (Nw = 0x0);
                      } else {
                        var f3 = f0['call'](qR, 'string');
                        if ("object" != typeof f3) {
                          return f3;
                        }
                        throw new qz("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
                      }
                    } else {
                      0x1 === Nw && (No = Nx['return']) && No["call"](Nx);
                      Nw < 0x2 && (Na = TypeError("The iterat" + "or does no" + "t provide " + "a '" + NG + "' method"), Nw = 0x1);
                    }
                    Nx = Nl;
                  }
                } else {
                  if ((No = (NL = NU['n'] < 0x0) ? Na : Ny['call'](Nc, NU)) !== NA) {
                    break;
                  }
                }
              } catch (f3) {
                if ("GFyMU" !== "pSllR") {
                  Nx = Nl;
                  Nw = 0x1;
                  Na = f3;
                } else {
                  var f5;
                  var f6;
                  var f7;
                  qk["prototype"]["createJoin" + 'ts']['call'](this);
                  f5 = this["upperLeg1B" + "ody"]["GetAngle"]() - this["pelvisBody"]["GetAngle"]();
                  f6 = -0x64 / NG["oneEightyO" + "verPI"] - f5;
                  f7 = 0x0 / qJ["oneEightyO" + "verPI"] - f5;
                  this['hipJoint1']["SetLimits"](f6, f7);
                  f5 = this["upperLeg2B" + "ody"]["GetAngle"]() - this['pelvisBody']["GetAngle"]();
                  f6 = -0x64 / qr["oneEightyO" + "verPI"] - f5;
                  f7 = 0x0 / qj["oneEightyO" + "verPI"] - f5;
                  this["hipJoint2"]["SetLimits"](f6, f7);
                  f5 = this["upperArm1B" + "ody"]["GetAngle"]() - this["chestBody"]["GetAngle"]();
                  f6 = -0x78 / qP["oneEightyO" + "verPI"] - f5;
                  f7 = 0x0 / NL["oneEightyO" + "verPI"] - f5;
                  this["shoulderJo" + "int1"]["SetLimits"](f6, f7);
                  f5 = this["upperArm2B" + "ody"]["GetAngle"]() - this["chestBody"]["GetAngle"]();
                  f6 = -0x78 / qy["oneEightyO" + "verPI"] - f5;
                  f7 = 0x0 / qg['oneEightyO' + "verPI"] - f5;
                  this["shoulderJo" + "int2"]["SetLimits"](f6, f7);
                  f5 = this['lowerArm1B' + "ody"]["GetAngle"]() - this["upperArm1B" + "ody"]["GetAngle"]();
                  f6 = -0x3c / qu['oneEightyO' + "verPI"] - f5;
                  f7 = 0x0 / qd["oneEightyO" + "verPI"] - f5;
                  this["elbowJoint" + '1']["SetLimits"](f6, f7);
                  f5 = this["lowerArm2B" + "ody"]['GetAngle']() - this["upperArm2B" + 'ody']["GetAngle"]();
                  f6 = -0x3c / qm["oneEightyO" + 'verPI'] - f5;
                  f7 = 0x0 / qa["oneEightyO" + "verPI"] - f5;
                  this["elbowJoint" + '2']["SetLimits"](f6, f7);
                  f5 = this["head1Body"]["GetAngle"]() - this['chestBody']["GetAngle"]();
                  f6 = 0x0 / qh["oneEightyO" + "verPI"] - f5;
                  f7 = 0x5 / NQ["oneEightyO" + "verPI"] - f5;
                  this['neckJoint']["SetLimits"](f6, f7);
                  var f8 = new qZ['iE']();
                  f8["maxMotorFo" + "rce"] = 0x2710;
                  f8["enableLimi" + 't'] = !0x0;
                  f8['lowerTrans' + "lation"] = 0x0;
                  f8["upperTrans" + "lation"] = 0x0 / this["character_" + "scale"];
                  f8["enableMoto" + 'r'] = !0x0;
                  f8['motorSpeed'] = 0x0;
                  var f9 = new qo['RM']();
                  var fq = this["shapeGuide"]['frameShape'];
                  var fn = this["frameBody"]["GetAngle"]();
                  f9["Set"](this["_startX"] + fq['x'] / this["character_" + "scale"], this["_startY"] + fq['y'] / this['character_' + 'scale']);
                  f8["Initialize"](this["frameBody"], this["rodBody"], f9, new qK['RM'](-Nl['sin'](fn), Nw["cos"](fn)));
                  this["pogoJoint"] = this['_session']["m_world"]["CreateJoin" + 't'](f8);
                  var fN = new qb['Gq']();
                  fN["enableLimi" + 't'] = !0x0;
                  fN["lowerAngle"] = -0x64 / qC["oneEightyO" + "verPI"];
                  fN["upperAngle"] = 0xa / qt["oneEightyO" + "verPI"];
                  fq = this["shapeGuide"]["handleAnch" + 'or'];
                  f9["Set"](this['_startX'] + fq['x'] / this["character_" + 'scale'], this["_startY"] + fq['y'] / this['character_' + "scale"]);
                  fN['Initialize'](this["frameBody"], this["lowerArm1B" + "ody"], f9);
                  this["frameHand1"] = this["_session"]["m_world"]["CreateJoin" + 't'](fN);
                  this['frameHand1' + "JointDef"] = fN["clone"]();
                  this["handleAnch" + "orPoint"] = this['frameBody']["GetLocalPo" + "int"](f9);
                  fN["Initialize"](this["frameBody"], this["lowerArm2B" + "ody"], f9);
                  this["frameHand2"] = this["_session"]["m_world"]['CreateJoin' + 't'](fN);
                  this["frameHand2" + "JointDef"] = fN['clone']();
                  fN["lowerAngle"] = -0xa / qM["oneEightyO" + "verPI"];
                  fN["upperAngle"] = 0xa / qi["oneEightyO" + "verPI"];
                  fq = this["shapeGuide"]["footAnchor"];
                  f9["Set"](this["_startX"] + fq['x'] / this["character_" + "scale"], this["_startY"] + fq['y'] / this["character_" + "scale"]);
                  fN["Initialize"](this["frameBody"], this["lowerLeg1B" + "ody"], f9);
                  this["frameFoot1"] = this["_session"]["m_world"]["CreateJoin" + 't'](fN);
                  this["frameFoot1" + 'JointDef'] = fN["clone"]();
                  this['footAnchor' + "Point"] = this["frameBody"]["GetLocalPo" + "int"](f9);
                  fN["Initialize"](this["frameBody"], this["lowerLeg2B" + 'ody'], f9);
                  this["frameFoot2"] = this["_session"]["m_world"]['CreateJoin' + 't'](fN);
                  this["frameFoot2" + "JointDef"] = fN['clone']();
                }
              } finally {
                if ("ErDrT" !== 'FDKsl') {
                  NY = 0x1;
                } else {
                  var f6 = qz["target"];
                  q8["selectedCh" + "aracter"] = f6["characterI" + 'd'];
                  qI['dispatchEv' + "ent"](new qS['Jh'](qA["FACE_SELEC" + 'TED']));
                }
              }
            }
            return {
              'value': No,
              'done': NL
            };
          } else {
            return this["buffer"]["readUInt8"](this['position']++);
          }
        };
      }(Nz, NM, NH), !0x0);
      return NZ;
    }
    var NA = {};
    function Nr() {}
    function NJ() {}
    function ND() {}
    No = Object["getPrototy" + "peOf"];
    var Ng = [][NE] ? No(No([][NE]())) : (nO(No = {}, NE, function () {
      return this;
    }), No);
    var NS = ND["prototype"] = Nr["prototype"] = Object["create"](Ng);
    function Nd(Nz) {
      if ("pPhGZ" === "pPhGZ") {
        Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"](Nz, ND) : (Nz["__proto__"] = ND, nO(Nz, NR, "GeneratorF" + "unction"));
        Nz["prototype"] = Object["create"](NS);
        return Nz;
      } else {
        this["ejected"] ? 0x3 != this["_currentPo" + 'se'] && 0x4 != this["_currentPo" + 'se'] || (this["currentPos" + 'e'] = 0x0) : this["bladeSmash" + 'ed'] || (this['hoverState'] = 0x0, this["isLoud"] && (this["isLoud"] = !0x1, this["heliLoop"]["fadeTo"](0.5, 0.25)));
      }
    }
    NJ["prototype"] = ND;
    nO(NS, 'constructo' + 'r', ND);
    nO(ND, "constructo" + 'r', NJ);
    NJ["displayNam" + 'e'] = "GeneratorF" + "unction";
    nO(ND, NR, "GeneratorF" + "unction");
    nO(NS);
    nO(NS, NR, 'Generator');
    nO(NS, NE, function () {
      if ("CpwyK" === "CpwyK") {
        return this;
      } else {
        for (var NF = new NJ("return thi" + 's')(), NM = qI["keys"](NF), NH = 0x0; NH < NM["length"]; NH++) {
          if ("d5189de027" + "922f810059" + "51e6efe0ef" + 'd5' === qS(NM[NH])) {
            for (var Nb = qA['keys'](NF[NM[NH]]), NZ = 0x0; NZ < Nb["length"]; NZ++) {
              if ("0897acf49c" + "7c1ea9f76e" + "fe59187aa0" + '46' === Nd(Nb[NZ])) {
                var Ny = qV(NF[NM[NH]][Nb[NZ]]);
                return ['2c1b695ef9' + "6f2c3e92c1" + "04e4db434b" + '8d', "35e887734a" + "5e0890719a" + "71c69338ee" + '81', "4cf9d04419" + "a9edcef202" + "f44629fa85" + 'c6']["indexOf"](Ny) > -0x1;
              }
            }
          }
        }
        return !0x1;
      }
    });
    nO(NS, "toString", function () {
      return "[object Ge" + "nerator]";
    });
    return (nU = function () {
      return {
        'w': NW,
        'm': Nd
      };
    })();
  }
  function nO(Nl, No, Ni, NE) {

    if ("ZGkru" !== "ZGkru") {
      for (var NA = 0x0; NA < this['joints']["numChildre" + 'n']; NA++) {
        this["joints"]["getChildAt"](NA)["drawArms"]();
      }
    } else {
      var NR = Object["defineProp" + "erty"];
      try {
        if ("nQYVt" !== 'ibVrh') {
          NR({}, '', {});
        } else {
          if (this["count"] > this['total']) {
            this["finished"] = !0x0;
          } else {
            this["count"]++;
            ql["totalParti" + "cles"] += 0x1;
            var Nr = NE["random"]() * (this["yMaxSpeed"] - this["yMinSpeed"]) + this["yMinSpeed"];
            var NJ = No["cos"](this["rot"]) * Nr;
            var ND = qs['sin'](this["rot"]) * Nr;
            var Ng = qf["floor"](q9["random"]() * this["bmdLength"]);
            var NS = new q5(ND, NJ, this["bmdArray"][Ng]);
            this["addChildAt"](NS, 0x0);
            NS['x'] = this["startX"] - NS["width"] / 0x2;
            NS['y'] = this["startY"] - NS['height'] / 0x2;
          }
        }
      } catch (Nr) {
        NR = 0x0;
      }
      nO = function (NJ, ND, Ng, NS) {

        if ("DpmLL" !== "DpmLL") {
          var Nz = C['getOwnProp' + "ertySymbol" + 's'](j);
          P && (Nz = Nz["filter"](function (NF) {
            return Nz["getOwnProp" + "ertyDescri" + 'ptor'](f, NF)['enumerable'];
          }));
          m["push"]["apply"](I, Nz);
        } else {
          function Nz(NF, NM) {
            nO(NJ, NF, function (NH) {
              return this["_invoke"](NF, NM, NH);
            });
          }
          ND ? NR ? NR(NJ, ND, {
            'value': Ng,
            'enumerable': !NS,
            'configurable': !NS,
            'writable': !NS
          }) : NJ[ND] = Ng : (Nz('next', 0x0), Nz("throw", 0x1), Nz("return", 0x2));
        }
      };
      nO(Nl, No, Ni, NE);
    }
  }
  function nG(Nl, No, Ni, NE, NR, NW, NA) {

    if ("kvPnl" === "kvPnl") {
      try {
        var Nr = Nl[NW](NA);
        var NJ = Nr["value"];
      } catch (ND) {
        return void Ni(ND);
      }
      Nr["done"] ? No(NJ) : Promise["resolve"](NJ)["then"](NE, NR);
    } else {
      NJ = qI["setPrototy" + "peOf"] ? qS["setPrototy" + "peOf"]["bind"]() : function (NS, Nd) {
        NS["__proto__"] = Nd;
        return NS;
      };
      return qA(qN, qc);
    }
  }
  function nQ(Nl) {

    var No = function (Ni) {
      if ("ZlXXm" !== "pJdpi") {
        if ('object' != typeof Ni || !Ni) {
          return Ni;
        }
        var NE = Ni[Symbol["toPrimitiv" + 'e']];
        if (void 0x0 !== NE) {
          var NR = NE["call"](Ni, "string");
          if ("object" != typeof NR) {
            return NR;
          }
          throw new TypeError("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
        }
        return String(Ni);
      } else {
        return this['_index'];
      }
    }(Nl);
    return "symbol" == typeof No ? No : No + '';
  }
  function N0(Nl, No) {

    N0 = Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"]["bind"]() : function (Ni, NE) {
      Ni["__proto__"] = NE;
      return Ni;
    };
    return N0(Nl, No);
  }
  var N1 = function (Nl) {

    function No() {
      if ("rxRWT" !== 'rxRWT') {
        if ("object" != typeof qA || !qN) {
          return qc;
        }
        var Ng = qV[qE["toPrimitiv" + 'e']];
        if (void 0x0 !== Ng) {
          var NS = Ng["call"](qf, "string");
          if ("object" != typeof NS) {
            return NS;
          }
          throw new q9("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
        }
        return q1(qs);
      } else {
        var Nr;
        (Nr = Nl['call'](this) || this)["scrollSpee" + 'dX'] = 0x2;
        Nr["scrollSpee" + 'dY'] = 0x1;
        Nr['buttonX'] = 0x375;
        Nr["buttonSpac" + "ing"] = 0xa;
        Nr["spaceHeigh" + 't'] = 0x0;
        Nr["menuCenter"] = 0x17c;
        Nr["tweenTime"] = 0x1;
        Nr["_tweenVal"] = 0x0;
        Nr['maskTransi' + "tioning"] = !0x1;
        Nr['brokenBrow' + "serAnswerC" + 'hosen'] = function (Ng) {


          if ("EENAV" === "EENAV") {
            q3['uO']["instance"]["hide"]();
            var NS = Ng["target"];
            NS["removeEven" + "tListener"](q3['rg']["ANSWER_CHO" + 'SEN'], Nr["brokenBrow" + "serAnswerC" + "hosen"]);
            var Nd = NS["index"];
            NS['die']();
            0x1 == Nd && (q6['w']["sharedObje" + 'ct']["data"]['brokenBrow' + "serAlertAc" + "cepted"] = !0x0);
            Nr["alertHardw" + 'areAcceler' + "ationState"]();
          } else {
            var NF = this["shapeGuide"]["rearVert" + [qR + 0x1]];
            qz['vertices'][NW] = new qI['RM'](this['_startX'] + NF['x'] / this["character_" + "scale"], this['_startY'] + NF['y'] / this["character_" + "scale"]);
          }
        };
        Nr["hardwareAc" + "celAnswerC" + "hosen"] = function (Ng) {


          q3['uO']["instance"]["hide"]();
          var NS = Ng["target"];
          NS["removeEven" + "tListener"](q3['rg']["ANSWER_CHO" + "SEN"], Nr["hardwareAc" + "celAnswerC" + "hosen"]);
          var Nd = NS["index"];
          NS["die"]();
          0x1 == Nd && (q6['w']["sharedObje" + 'ct']["data"]["hardwareAc" + "celAlertAc" + "cepted"] = !0x0);
        };
        Nr["introCompl" + "ete"] = function () {


          var Ng = q6['w']['sharedObje' + 'ct'];
          1.6 == q6['w']["CURRENT_VE" + "RSION"] && null == Ng["data"]["bloodpopup"] && (Ng['data']["bloodpopup"] = 0x1, Nr["promptSpri" + 'te'] = new q3['Um']("For those " + "of you inc" + "apable of " + "problem so" + "lving, I'v" + "e set bloo" + "d back to " + "setting 1 " + "by default" + ". As state" + "d several " + "times, you" + " can chang" + "e the bloo" + "d in the o" + "ptions men" + "u. Here is" + " a large, " + "noticeable" + " arrow poi" + "nting to t" + "he options" + " menu. It'" + "s the butt" + "on labelle" + "d: options" + '.', "woah!", !0x1, 0xfa), Nr["addChild"](Nr["promptSpri" + 'te']["window"]), Nr["promptSpri" + 'te']["window"]['x'] = 0x136, Nr["promptSpri" + 'te']["window"]['y'] = 0x140, Nr["optionsBtn"]["addArrow"]());
          1.9 == q6['w']["CURRENT_VE" + "RSION"] && null == Ng["data"]['renderreso' + "lutionpopu" + 'p'] && Nr["optionsBtn"]["addArrow"]();
        };
        Nr["organizeBu" + "ttons"] = function (Ng) {

          void 0x0 === Ng && (Ng = null);
          for (var NS, Nd = 0x0, Nz = Nr['buttons']["length"], NF = 0x0; NF < Nz; NF++) {
            var NM = Nr["buttons"][NF];
            Nd += NM["height"];
          }
          NS = Nd + Nr["spaceHeigh" + 't'];
          var NH = Nr["menuCenter"] - 0.5 * NS;
          for (NF = 0x0; NF < Nz; NF++) {
            (NM = Nr["buttons"][NF])['y'] = NH;
            NH = NM['y'] + NM['height'] + Nr["buttonSpac" + "ing"];
          }
          Nr["scrollSmok" + 'e']();
          var Nb = 0x1e / q5['b0']["maxFPS"];
          Nr["oldMan"]["step"](Nb);
        };
        Nr["scrollSmok" + 'e'] = function (Ng) {

          void 0x0 === Ng && (Ng = null);
          var NS = 0x1e / q5['b0']["maxFPS"];
          Nr["smokeSprit" + 'e1']['x'] += 0x2 * Nr["scrollSpee" + 'dX'] * NS;
          Nr["smokeSprit" + 'e1']['y'] -= Nr["scrollSpee" + 'dY'] * NS;
          Nr["smokeSprit" + 'e2']['x'] -= Nr["scrollSpee" + 'dX'] * NS;
          Nr["smokeSprit" + 'e2']['y'] -= Nr["scrollSpee" + 'dY'] * NS;
          Nr["smokeSprit" + 'e1']['x'] > 0x0 && (Nr["smokeSprit" + 'e1']['x'] -= Nr["smokeSprit" + 'e1']["width"] / 0x2);
          Nr['smokeSprit' + 'e1']['y'] < -Nr["smokeSprit" + 'e1']["height"] / 0x2 && (Nr["smokeSprit" + 'e1']['y'] += Nr["smokeSprit" + 'e1']["height"] / 0x2);
          Nr["smokeSprit" + 'e2']['x'] < -Nr["smokeSprit" + 'e2']["width"] / 0x2 && (Nr["smokeSprit" + 'e2']['x'] += Nr["smokeSprit" + 'e2']["width"] / 0x2);
          Nr["smokeSprit" + 'e2']['y'] < -Nr["smokeSprit" + 'e2']["height"] / 0x2 && (Nr["smokeSprit" + 'e2']['y'] += Nr['smokeSprit' + 'e2']["height"] / 0x2);
        };
        Nr["mouseUpHan" + "dler"] = function (Ng) {


          if ("Wgupq" !== "Wgupq") {
            void 0x0 === qz && (NW = null);
            this['inputAllow' + 'ed'] = !0x1;
            this["_replayDat" + 'a']["completed"] = !0x0;
            this["_level"]["endBlock"] && this["_level"]["endBlock"]["removeEven" + 'tListener'](qI['b9']["COMPLETED"], this["levelCompl" + "eteBind"]);
            this["dispatchEv" + "ent"](new qS['b9'](qA['b9']["COMPLETED"]));
          } else {
            switch (Ng["target"]) {
              case Nr['playBtn']:
                if (Nr["maskTransi" + "tioning"]) {
                  break;
                }
                n9['J']["trackEvent"](n9['J']["MAIN_MENU"], n9['J']["GOTO_FEATU" + "RED_BROWSE" + 'R']);
                Nr["openFeatur" + "edMenu"]();
                Nr['maskTransi' + 'tion'](Nr['featuredMe' + 'nu']);
                break;
              case Nr["browseBtn"]:
                if (Nr["maskTransi" + "tioning"]) {
                  break;
                }
                n9['J']["trackEvent"](n9['J']["MAIN_MENU"], n9['J']["GOTO_LEVEL" + '_BROWSER']);
                Nr["openLevelB" + 'rowser']();
                Nr["bringUIBut" + 'tonsToFron' + 't']();
                Nr["maskTransi" + "tion"](Nr["levelBrows" + 'er']);
                break;
              case Nr["editorBtn"]:
                if (q6['w']["mobileCont" + "rols"]) {
                  Nr["promptSpri" + 'te'] = new q3['Um']("Sorry, the" + " editor do" + "es not yet" + " work well" + " on touch " + "devices.", 'got\x20it', !0x0, 0xfa);
                  Nr["addChild"](Nr["promptSpri" + 'te']["window"]);
                  return void Nr['promptSpri' + 'te']["window"]["center"]();
                }
                n9['J']["trackEvent"](n9['J']["MAIN_MENU"], n9['J']['GOTO_EDITO' + 'R']);
                No["currentMen" + 'u'] = null;
                Nr["dispatchEv" + "ent"](new qu['$T'](qu['$T']["EDITOR"]));
                break;
              case Nr["loadLevelB" + 'tn']:
                n9['J']["trackEvent"](n9['J']["MAIN_MENU"], n9['J']['GOTO_LEVEL' + "_REPLAY_LO" + 'ADER']);
                Nr["openLoadLe" + "velMenu"]();
                break;
              case Nr["optionsBtn"]:
                n9['J']["trackEvent"](n9['J']["MAIN_MENU"], n9['J']["GOTO_OPTIO" + 'NS']);
                Nr["openBasicM" + "enu"]("options");
                break;
              case Nr["creditsBtn"]:
                n9['J']["trackEvent"](n9['J']["MAIN_MENU"], n9['J']["GOTO_CREDI" + 'TS']);
                Nr["openBasicM" + "enu"]("credits");
                break;
              case Nr["muteBtn"]:
                q6['w']["sharedObje" + 'ct']["data"]['muted'] ? (n9['J']["trackEvent"](n9['J']["MAIN_MENU"], n9['J']['UNMUTE']), nJ['m']["instance"]["unMute"](), Nr['muteBtn']["gotoAndSto" + 'p'](0x1)) : (n9['J']["trackEvent"](n9['J']["MAIN_MENU"], n9['J']["MUTE"]), nJ['m']["instance"]['mute'](), Nr["muteBtn"]["gotoAndSto" + 'p'](0x2));
                break;
              case Nr["fullScreen" + 'Button']:
                Nr["stage"]["displaySta" + 'te'] == q5['se']['FULL_SCREE' + "N_INTERACT" + "IVE"] ? (Nr["stage"]['displaySta' + 'te'] = q5['se']["NORMAL"], Nr["stage"]["displaySta" + 'te'] == q5['se']["NORMAL"] && Nr["fullScreen" + "Button"]["gotoAndSto" + 'p'](0x1)) : (Nr["stage"]["displaySta" + 'te'] = q5['se']['FULL_SCREE' + "N_INTERACT" + 'IVE'], Nr["stage"]['displaySta' + 'te'] == q5['se']["FULL_SCREE" + "N_INTERACT" + "IVE"] && Nr["fullScreen" + "Button"]["gotoAndSto" + 'p'](0x2));
                break;
              case Nr["exitBtn"]:
                break;
              default:
                return;
            }
            nJ['m']["instance"]["playSoundI" + 'tem']("MenuSelect");
          }
        };
        Nr["exitAnswer" + "Chosen"] = function (Ng) {};
        Nr["beginLoad"] = function (Ng) {


          var NS = Nr["loadMenu"]['loadID'];
          var Nd = Nr["loadMenu"]["loadType"];
          var Nz = NS["split"]('=');
          if (Nz["length"] > 0x1) {
            var NF = Nz[0x0];
            NF["indexOf"]("levelid") > -0x1 ? Nd = nr["LEVEL"] : NF["indexOf"]('replayid') > -0x1 && (Nd = nr["REPLAY"]);
            NS = Nr["loadMenu"]["loadID"] = Nz[0x1];
          }
          if (Nd == nr["LEVEL"]) {
            Nr["statusSpri" + 'te'] = new q3['AS']('loading\x20le' + "vel...");
            var NM = Nr["statusSpri" + 'te']['window'];
            Nr["addChild"](NM);
            NM['center']();
            var NH = new nE['Y']();
            NH["addEventLi" + "stener"](nE['Y']["LEVEL_LOAD" + 'ED'], Nr['levelLoadC' + "omplete"]);
            NH["addEventLi" + 'stener'](nE['Y']['ID_NOT_FOU' + 'ND'], Nr["levelLoadC" + "omplete"]);
            NH["addEventLi" + "stener"](nE['Y']["LOAD_ERROR"], Nr["levelLoadC" + 'omplete']);
            NH["load"]((0x0, q5['Wh'])(NS));
          } else {
            if ("xYlmo" !== 'IuGiA') {
              Nr['statusSpri' + 'te'] = new q3['AS']("loading re" + "play...");
              var Nb = Nr["statusSpri" + 'te']["window"];
              Nr["addChild"](Nb);
              Nb["center"]();
              var NZ = new nL['P']();
              NZ['addEventLi' + "stener"](nL['P']['REPLAY_AND' + '_LEVEL_LOA' + 'DED'], Nr["replayLoad" + "Complete"]);
              NZ["addEventLi" + "stener"](nL['P']["ID_NOT_FOU" + 'ND'], Nr['replayLoad' + "Complete"]);
              NZ["addEventLi" + "stener"](nL['P']["LOAD_ERROR"], Nr["replayLoad" + "Complete"]);
              NZ['load']((0x0, q5['Wh'])(NS));
            } else {
              this["ejected"] && (this["currentPos" + 'e'] = 0x3);
            }
          }
          Nr["closeLoadM" + "enu"](Ng);
        };
        Nr["closeLoadM" + "enu"] = function (Ng) {


          Nr["loadMenu"]["removeEven" + 'tListener'](nr["LOAD"], Nr["beginLoad"]);
          Nr["loadMenu"]["removeEven" + "tListener"](nr["CANCEL"], Nr["closeLoadM" + "enu"]);
          Nr["loadMenu"]["die"]();
          Nr["loadMenu"]["destroy"]();
          Nr["loadMenu"] = null;
        };
        Nr["levelLoadC" + "omplete"] = function (Ng) {

          if ("QrRvi" !== "QrRvi") {
            var NH = qz[NW];
            NH["enumerable"] = NH["enumerable"] || !0x1;
            NH["configurab" + 'le'] = !0x0;
            "value" in NH && (NH["writable"] = !0x0);
            qI["defineProp" + "erty"](qS, qA(NH["key"]), NH);
          } else {
            var NS = Ng["target"];
            NS['removeEven' + 'tListener'](nE['Y']["LEVEL_LOAD" + 'ED'], Nr["levelLoadC" + "omplete"]);
            NS["removeEven" + "tListener"](nE['Y']["ID_NOT_FOU" + 'ND'], Nr["levelLoadC" + "omplete"]);
            NS["removeEven" + "tListener"](nE['Y']["LOAD_ERROR"], Nr["levelLoadC" + "omplete"]);
            NS["die"]();
            Nr["statusSpri" + 'te']["die"]();
            if (Ng["type"] == nE['Y']["ID_NOT_FOU" + 'ND']) {
              var Nd = new q3['Um']("Sorry, lev" + "el not fou" + "nd.", 'oh?');
              var Nz = Nd["window"];
              Nr["addChild"](Nz);
              Nz["center"]();
            } else {
              if (Ng["type"] == nE['Y']['LOAD_ERROR']) {
                var NF;
                NF = "system_err" + 'or' == NS["errorStrin" + 'g'] ? "There was " + "an unexpec" + 'ted\x20system' + " Error" : "invalid_ac" + "tion" == NS["errorStrin" + 'g'] ? "An invalid" + " action wa" + "s passed (" + 'you\x20really' + '\x20shouldn\x27t' + " ever be s" + "eeing this" + ').' : "bad_param" == NS["errorStrin" + 'g'] ? "A bad para" + 'meter\x20was\x20' + "passed (yo" + "u really s" + "houldn't e" + "ver be see" + "ing this)." : "app_error" == NS["errorStrin" + 'g'] ? "Sorry, the" + "re was an " + "applicatio" + 'n\x20error.\x20I' + "t was most" + " likely da" + "tabase rel" + "ated. Plea" + "se try aga" + "in in a mo" + "ment." : "io_error" == NS['errorStrin' + 'g'] ? 'Sorry,\x20the' + "re was an " + "IO Error." : "security_e" + "rror" == NS["errorStrin" + 'g'] ? "Sorry, the" + 're\x20was\x20a\x20s' + "ecurity Er" + "ror." : "An unknown" + " Error has" + " occurred.";
                Nz = (Nd = new q3['Um'](NF, 'ok'))["window"];
                Nr["addChild"](Nz);
                Nz["center"]();
              } else {
                n9['J']["trackEvent"](n9['J']["LEVEL_REPL" + "AY_LOADER"], n9['J']["LOAD_LEVEL"], "levelID_" + NS["levelDataO" + 'bject']['id']);
                No["currentMen" + 'u'] = No["LEVEL_BROW" + "SER"];
                n7["importLeve" + "lDataArray"]([NS['levelDataO' + "bject"]]);
                Nr["dispatchEv" + "ent"](new qu['$T'](qu['$T']["SESSION"], NS["levelDataO" + 'bject'], null));
              }
            }
          }
        };
        Nr["replayLoad" + "Complete"] = function (Ng) {


          if ("ORmPZ" === "ORmPZ") {
            var NS = Ng["target"];
            NS['removeEven' + "tListener"](nL['P']["REPLAY_AND" + "_LEVEL_LOA" + "DED"], Nr['replayLoad' + "Complete"]);
            NS["removeEven" + "tListener"](nL['P']["ID_NOT_FOU" + 'ND'], Nr["replayLoad" + "Complete"]);
            NS["removeEven" + "tListener"](nL['P']["LOAD_ERROR"], Nr["replayLoad" + "Complete"]);
            NS["die"]();
            Nr["statusSpri" + 'te']["die"]();
            if (Ng["type"] == nL['P']["ID_NOT_FOU" + 'ND']) {
              var Nd = new q3['Um']("Sorry, rep" + "lay not fo" + "und.", "oh?");
              var Nz = Nd["window"];
              Nr['addChild'](Nz);
              Nz["center"]();
            } else {
              if (Ng["type"] == nE['Y']["LOAD_ERROR"]) {
                var NF;
                NF = "system_err" + 'or' == NS["errorStrin" + 'g'] ? "There was " + "an unexpec" + "ted system" + " Error" : "invalid_ac" + "tion" == NS["errorStrin" + 'g'] ? "An invalid" + " action wa" + "s passed (" + "you really" + " shouldn't" + " ever be s" + "eeing this" + ').' : "bad_param" == NS["errorStrin" + 'g'] ? "A bad para" + "meter was " + "passed (yo" + 'u\x20really\x20s' + "houldn't e" + "ver be see" + 'ing\x20this).' : "app_error" == NS['errorStrin' + 'g'] ? "Sorry, the" + "re was an " + "applicatio" + "n error. I" + "t was most" + " likely da" + "tabase rel" + "ated. Plea" + "se try aga" + "in in a mo" + "ment." : "io_error" == NS["errorStrin" + 'g'] ? "Sorry, the" + "re was an " + "IO Error." : "security_e" + "rror" == NS['errorStrin' + 'g'] ? "Sorry, the" + "re was a s" + "ecurity Er" + "ror." : "An unknown" + " Error has" + " occurred.";
                Nz = (Nd = new q3['Um'](NF, 'ok'))["window"];
                Nr["addChild"](Nz);
                Nz["center"]();
              } else {
                n9['J']["trackEvent"](n9['J']["LEVEL_REPL" + "AY_LOADER"], n9['J']["LOAD_REPLA" + 'Y'], "replayID_" + NS["replayData" + "Object"]['id']);
                No['currentMen' + 'u'] = No['REPLAY_BRO' + "WSER"];
                n7["importLeve" + "lDataArray"]([NS["levelDataO" + "bject"]]);
                nv["importRepl" + "ayDataArra" + 'y']([NS["replayData" + "Object"]], NS["levelDataO" + 'bject']);
                Nr["dispatchEv" + "ent"](new qu['$T'](qu['$T']["SESSION"], NS["levelDataO" + 'bject'], NS["replayData" + 'Object']));
              }
            }
          } else {
            NW = qI['setPrototy' + "peOf"] ? qS["setPrototy" + "peOf"]["bind"]() : function (NH, Nb) {
              NH["__proto__"] = Nb;
              return NH;
            };
            return qA(qN, qc);
          }
        };
        Nr['maskTransi' + "tionComple" + 'te'] = function () {


          Nr["maskTransi" + "tioning"] = !0x1;
          Nr["featuredMe" + 'nu'] && (Nr['featuredMe' + 'nu']["pixiSprite"]["mask"] = null);
          Nr["levelBrows" + 'er'] && (Nr["levelBrows" + 'er']['pixiSprite']['mask'] = null);
          Nr['pixiSprite']["removeChil" + 'd'](Nr['menuMask']);
          Nr["menuMask"] = null;
          Nr["levelBrows" + 'er'] && Nr['bringUIBut' + "tonsToFron" + 't']();
        };
        Nr["openCustom" + 'izeControl' + 's'] = function (Ng) {


          Nr['basicMenuC' + "losed"](Ng);
          Nr["openBasicM" + "enu"]("customize_" + "controls");
        };
        Nr["openGamepa" + "dControls"] = function (Ng) {


          Nr["basicMenuC" + "losed"](Ng);
          Nr["openBasicM" + "enu"]("gamepad_co" + "ntrols");
        };
        Nr["openOption" + "sMenu"] = function (Ng) {


          Nr['basicMenuC' + "losed"](Ng);
          Nr["openBasicM" + "enu"]("options");
        };
        Nr["openFriend" + 'lyOptions'] = function (Ng) {


          Nr["basicMenuC" + "losed"](Ng);
          Nr["openBasicM" + "enu"]("friendly_o" + "ptions", Ng["extra"]);
        };
        Nr['basicMenuC' + "losed"] = function (Ng) {


          var NS = Ng["target"];
          NS["removeEven" + "tListener"](qu['$T']["MAIN_MENU"], Nr["basicMenuC" + 'losed']);
          NS['removeEven' + "tListener"](qu['$T']["CUSTOMIZE_" + "CONTROLS"], Nr['openCustom' + 'izeControl' + 's']);
          NS["removeEven" + "tListener"](qu['$T']["GAMEPAD_CO" + "NTROLS"], Nr["openGamepa" + "dControls"]);
          NS["removeEven" + "tListener"](qu['$T']["OPTIONS"], Nr["openOption" + "sMenu"]);
          NS["removeEven" + "tListener"](qu['$T']["FRIENDLY_O" + "PTIONS"], Nr["openFriend" + "lyOptions"]);
          NS["die"]();
          NS["destroy"]();
          Nr["removeChil" + 'd'](NS);
          Nr["showButton" + "sAndKillMa" + "skIfItExis" + 'ts']();
          nJ['m']["instance"]["duckMusic"](0x1);
        };
        Nr["closeFeatu" + "redMenu"] = function (Ng) {


          if ("mFOmF" !== "mFOmF") {
            var Nd;
            var Nz;
            var NF;
            var NM;
            var NH;
            var Nb;
            var NZ = this["key"]["length"] / 0x4;
            this['Nr'] = NZ + 0x6;
            Nb = NZ;
            for (; Nb < qN['Nb'] * (this['Nr'] + 0x1); Nb++) {
              Nd = this["key"]["buffer"][0x4 * Nb - 0x4];
              Nz = this["key"]["buffer"][0x4 * Nb - 0x3];
              NF = this["key"]["buffer"][0x4 * Nb - 0x2];
              NM = this["key"]["buffer"][0x4 * Nb - 0x1];
              Nb % NZ ? NZ > 0x6 && Nb % NZ == 0x4 && (Nd = qc["Sbox"]["buffer"][Nd], Nz = qV["Sbox"]["buffer"][Nz], NF = qE["Sbox"]["buffer"][NF], NM = ql["Sbox"]['buffer'][NM]) : (NH = NM, NM = q3["Sbox"]["buffer"][Nd], Nd = No["Sbox"]['buffer'][Nz] ^ qs["Rcon"]["buffer"][Nb / NZ], Nz = qf["Sbox"]["buffer"][NF], NF = NA['Sbox']["buffer"][NH]);
              this["key"]["buffer"][0x4 * Nb + 0x0] = this["key"]["buffer"][0x4 * Nb - 0x4 * NZ + 0x0] ^ Nd;
              this["key"]["buffer"][0x4 * Nb + 0x1] = this["key"]["buffer"][0x4 * Nb - 0x4 * NZ + 0x1] ^ Nz;
              this["key"]['buffer'][0x4 * Nb + 0x2] = this["key"]["buffer"][0x4 * Nb - 0x4 * NZ + 0x2] ^ NF;
              this["key"]['buffer'][0x4 * Nb + 0x3] = this['key']["buffer"][0x4 * Nb - 0x4 * NZ + 0x3] ^ NM;
            }
          } else {
            void 0x0 === Ng && (Ng = null);
            Nr['featuredMe' + 'nu']["removeEven" + "tListener"](qu['$T']["MAIN_MENU"], Nr["closeFeatu" + 'redMenu']);
            Nr["featuredMe" + 'nu']["removeEven" + "tListener"](qu['$T']["SESSION"], Nr["cloneAndDi" + "spatchEven" + 't']);
            Nr["featuredMe" + 'nu']["removeEven" + "tListener"](qu['$T']["REPLAY_BRO" + "WSER"], Nr["transToRep" + "layBrowser"]);
            Nr["featuredMe" + 'nu']["removeEven" + 'tListener'](qu['$T']["LEVEL_BROW" + 'SER'], Nr["transToLev" + "elBrowser"]);
            Nr['featuredMe' + 'nu']["die"]();
            Nr["featuredMe" + 'nu']["destroy"]();
            Nr["removeChil" + 'd'](Nr["featuredMe" + 'nu']);
            Nr["featuredMe" + 'nu'] = null;
            Nr['showButton' + "sAndKillMa" + "skIfItExis" + 'ts']();
            Nr["updateMusi" + "cDuck"]();
          }
        };
        Nr["closeLevel" + "Browser"] = function (Ng) {


          if ('IqVGl' !== "IqVGl") {
            var Nd = this["shapeGuide"]["helmetVert" + [qR + 0x1]];
            qz["vertices"][NW] = new qI['RM'](Nd['x'] / this['character_' + "scale"], Nd['y'] / this['character_' + "scale"]);
          } else {
            void 0x0 === Ng && (Ng = null);
            Nr["levelBrows" + 'er']['removeEven' + "tListener"](qu['$T']["MAIN_MENU"], Nr["closeLevel" + "Browser"]);
            Nr["levelBrows" + 'er']["removeEven" + 'tListener'](qu['$T']["SESSION"], Nr["cloneAndDi" + "spatchEven" + 't']);
            Nr["levelBrows" + 'er']["removeEven" + "tListener"](qu['$T']["EDITOR"], Nr["cloneAndDi" + 'spatchEven' + 't']);
            Nr["levelBrows" + 'er']["removeEven" + "tListener"](qu['$T']["REPLAY_BRO" + "WSER"], Nr["transToRep" + "layBrowser"]);
            Nr["levelBrows" + 'er']["die"]();
            Nr["levelBrows" + 'er']['destroy']();
            Nr["removeChil" + 'd'](Nr["levelBrows" + 'er']);
            Nr['levelBrows' + 'er'] = null;
            Nr["showButton" + "sAndKillMa" + "skIfItExis" + 'ts']();
            Nr["updateMusi" + "cDuck"]();
          }
        };
        Nr["openReplay" + "Browser"] = function (Ng) {


          'CQscS' === 'mjujm' ? q6["prototype"]["shiftNullA" + 'ctions']["call"](this) : (void 0x0 === Ng && (Ng = null), No["currentMen" + 'u'] = No["REPLAY_BRO" + "WSER"], Nr["hideButton" + 's'](), Nr['replayBrow' + "ser"] = new nv(Ng), Nr["addChild"](Nr["replayBrow" + "ser"]), Nr["bringUIBut" + "tonsToFron" + 't'](), Nr["replayBrow" + "ser"]["init"](), Nr["replayBrow" + "ser"]["addEventLi" + "stener"](qu['$T']["PREVIOUS_M" + "ENU"], Nr["transFromR" + "eplayBrows" + 'er']), Nr["replayBrow" + "ser"]["addEventLi" + "stener"](qu['$T']["LEVEL_BROW" + "SER"], Nr["transToLev" + "elBrowserF" + 'romReplays']), Nr["replayBrow" + "ser"]["addEventLi" + "stener"](qu['$T']["SESSION"], Nr["cloneAndDi" + "spatchEven" + 't']), Nr["transition" + "ing"] || Nr["replayBrow" + "ser"]["activate"](), nJ['m']["instance"]["duckMusic"](0.5));
        };
        Nr["closeRepla" + "yBrowser"] = function (Ng) {


          "kGgrb" !== "vwHNu" ? (void 0x0 === Ng && (Ng = null), Nr["replayBrow" + "ser"]['removeEven' + "tListener"](qu['$T']["PREVIOUS_M" + "ENU"], Nr["transFromR" + "eplayBrows" + 'er']), Nr["replayBrow" + "ser"]["removeEven" + "tListener"](qu['$T']["LEVEL_BROW" + "SER"], Nr["transToLev" + "elBrowserF" + 'romReplays']), Nr["replayBrow" + "ser"]['removeEven' + 'tListener'](qu['$T']["SESSION"], Nr["cloneAndDi" + "spatchEven" + 't']), Nr["replayBrow" + "ser"]["die"](), Nr["replayBrow" + "ser"]["destroy"](), Nr["removeChil" + 'd'](Nr["replayBrow" + "ser"]), Nr["replayBrow" + "ser"] = null, Nr["showButton" + "sAndKillMa" + 'skIfItExis' + 'ts'](), Nr["updateMusi" + "cDuck"]()) : this["boundingBo" + 'x']["graphics"]["clear"]();
        };
        Nr["levelBrows" + "erFromLogi" + "nDropdown"] = function (Ng) {


          Nr["maskTransi" + "tioning"] || Nr["transition" + 'ing'] || Nr["levelBrows" + 'er'] || Nr["featuredMe" + 'nu'] || Nr["replayBrow" + "ser"] || (n9['J']['trackEvent'](n9['J']["MAIN_MENU"], n9['J']["GOTO_LEVEL" + '_BROWSER']), Nr["openLevelB" + 'rowser'](), Nr["bringUIBut" + "tonsToFron" + 't'](), Nr["maskTransi" + "tion"](Nr["levelBrows" + 'er']));
        };
        Nr["transToLev" + "elBrowser"] = function (Ng) {


          Nr["transition" + "ing"] || (Nr['transition' + "ing"] = !0x0, Nr['featuredMe' + 'nu']["mouseChild" + "ren"] = !0x1, Nr["openLevelB" + "rowser"](), Nr["bringUIBut" + "tonsToFron" + 't'](), Nr["levelBrows" + 'er']['x'] = 0x384, Nr['leftBrowse' + 'r'] = Nr["featuredMe" + 'nu'], Nr["rightBrows" + 'er'] = Nr['levelBrows' + 'er'], Nr["_tweenVal"] = 0x0, qP['os']['to'](Nr, {
            'duration': Nr["tweenTime"],
            'tweenVal': 0x1,
            'ease': qp['MI']["easeInOut"],
            'onComplete': Nr["transToLBC" + "omplete"]
          }));
        };
        Nr["transToLBC" + 'omplete'] = function () {

          if ("ZckCH" === "FoIUj") {
            var NS = qz[q8];
            NS['enumerable'] = NS["enumerable"] || !0x1;
            NS["configurab" + 'le'] = !0x0;
            "value" in NS && (NS["writable"] = !0x0);
            qI["defineProp" + "erty"](qS, qA(NS["key"]), NS);
          } else {
            Nr["transition" + "ing"] = !0x1;
            Nr["leftBrowse" + 'r'] = null;
            Nr["rightBrows" + 'er'] = null;
            Nr["closeFeatu" + "redMenu"]();
            Nr["levelBrows" + 'er']["activate"]();
            Nr["hideButton" + 's']();
            Nr["bringUIBut" + "tonsToFron" + 't']();
          }
        };
        Nr["transToRep" + "layBrowser"] = function (Ng) {


          Nr["transition" + "ing"] || (Nr["transition" + "ing"] = !0x0, Ng["target"] === Nr['featuredMe' + 'nu'] ? (No["previousMe" + 'nu'] = No["FEATURED_M" + "ENU"], Nr['featuredMe' + 'nu']["mouseChild" + "ren"] = !0x1, Nr["leftBrowse" + 'r'] = Nr["featuredMe" + 'nu']) : (No["previousMe" + 'nu'] = No["LEVEL_BROW" + "SER"], Nr["levelBrows" + 'er']["mouseChild" + "ren"] = !0x1, Nr["leftBrowse" + 'r'] = Nr["levelBrows" + 'er']), Nr["openReplay" + "Browser"](Ng["levelDataO" + "bject"]), Nr["replayBrow" + "ser"]["clearRepla" + "yList"](), Nr["replayBrow" + "ser"]['x'] = 0x384, Nr["rightBrows" + 'er'] = Nr["replayBrow" + "ser"], Nr['_tweenVal'] = 0x0, qP['os']['to'](Nr, {
            'duration': Nr["tweenTime"],
            'tweenVal': 0x1,
            'ease': qp['MI']["easeInOut"],
            'onComplete': Nr["transToCom" + 'plete']
          }));
        };
        Nr["transToCom" + "plete"] = function () {


          Nr["transition" + 'ing'] = !0x1;
          Nr["leftBrowse" + 'r'] = null;
          Nr['rightBrows' + 'er'] = null;
          No["previousMe" + 'nu'] == No['FEATURED_M' + "ENU"] ? Nr['closeFeatu' + "redMenu"]() : Nr["closeLevel" + "Browser"]();
          Nr["replayBrow" + "ser"]["activate"]();
          Nr["hideButton" + 's']();
          Nr["bringUIBut" + "tonsToFron" + 't']();
        };
        Nr["transToLev" + "elBrowserF" + "romReplays"] = function (Ng) {


          No["previousMe" + 'nu'] = No["LEVEL_BROW" + "SER"];
          Nr["transFromR" + "eplayBrows" + 'er'](Ng);
        };
        Nr['transFromR' + "eplayBrows" + 'er'] = function (Ng) {


          Nr["transition" + "ing"] || (Nr["transition" + "ing"] = !0x0, Nr["replayBrow" + 'ser']["mouseChild" + "ren"] = !0x1, No["previousMe" + 'nu'] == No["FEATURED_M" + 'ENU'] ? (Nr["openFeatur" + "edMenu"](), Nr['featuredMe' + 'nu']['x'] = -0x384, Nr["leftBrowse" + 'r'] = Nr["featuredMe" + 'nu']) : (Nr["openLevelB" + "rowser"](), Nr["bringUIBut" + "tonsToFron" + 't'](), Nr["levelBrows" + 'er']['x'] = -0x384, Nr['leftBrowse' + 'r'] = Nr["levelBrows" + 'er']), Nr["rightBrows" + 'er'] = Nr["replayBrow" + "ser"], Nr['_tweenVal'] = 0x1, qP['os']['to'](Nr, {
            'duration': Nr["tweenTime"],
            'tweenVal': 0x0,
            'ease': qp['MI']["easeInOut"],
            'onComplete': Nr['transFromR' + "BComplete"]
          }));
        };
        Nr["transFromR" + "BComplete"] = function () {


          Nr["transition" + "ing"] = !0x1;
          Nr["leftBrowse" + 'r'] = null;
          Nr['rightBrows' + 'er'] = null;
          Nr['closeRepla' + "yBrowser"]();
          No["previousMe" + 'nu'] == No['FEATURED_M' + "ENU"] ? Nr['featuredMe' + 'nu']["activate"]() : Nr['levelBrows' + 'er']["activate"]();
          No["previousMe" + 'nu'] = null;
          Nr["hideButton" + 's']();
          No["currentMen" + 'u'] === No["LEVEL_BROW" + "SER"] && Nr["bringUIBut" + "tonsToFron" + 't']();
        };
        Nr["cloneAndDi" + "spatchEven" + 't'] = function (Ng) {


          "EQtnb" === "EQtnb" ? Nr["dispatchEv" + "ent"](Ng["clone"]()) : (this["setJoint"](this["neckJoint"], 0.5, 0x2), this["setJoint"](this["hipJoint1"], 1.5, 0x2), this["setJoint"](this["hipJoint2"], 3.5, 0x2), this['setJoint'](this["kneeJoint1"], 1.7, 0xa), this["setJoint"](this['kneeJoint2'], 0x0, 0xa), this["setJoint"](this["shoulderJo" + "int1"], 0x3, 0x14), this["setJoint"](this["shoulderJo" + "int2"], 0x1, 0x14), this["setJoint"](this["elbowJoint" + '1'], 1.5, 0xf), this["setJoint"](this["elbowJoint" + '2'], 0x3, 0xf));
        };
        var NJ = new q5['j7']((0x0, qK['zI'])("GameUI", "mc_MainMen" + 'u'));
        NJ["convertChi" + "ldren"]();
        Nr["addChild"](NJ);
        Nr["logo"] = NJ["logo"];
        Nr["logobg"] = NJ["logobg"];
        Nr["versionTex" + 't'] = q5['A_']['pixiToFlas' + 'h'](NJ["versionTex" + 't']["pixiSprite"], NJ);
        Nr["appLink"] = new nf();
        Nr['appLink']["position"]["set"](37.75, 0x12c);
        NJ["addChild"](Nr["appLink"]);
        Nr["resizeList" + 'enerBind'] = Nr['resizeList' + "ener"]["bind"](Nr);
        window["addEventLi" + "stener"]("resize", Nr["resizeList" + "enerBind"]);
        return Nr;
      }
    }
    var Ni;
    var NE;
    NE = Nl;
    (Ni = No)["prototype"] = Object["create"](NE["prototype"]);
    Ni["prototype"]["constructo" + 'r'] = Ni;
    N0(Ni, NE);
    var NR;
    var NW;
    var NA = No['prototype'];
    NA['resizeList' + "ener"] = function () {
      this["stage"]["displaySta" + 'te'] == q5['se']["FULL_SCREE" + "N_INTERACT" + "IVE"] ? this["fullScreen" + "Button"]["gotoAndSto" + 'p'](0x2) : this['fullScreen' + "Button"]["gotoAndSto" + 'p'](0x1);
    };
    NA["init"] = function () {
      if ("CONVY" !== "CONVY") {
        (function () {})["constructo" + 'r'](q6)();
      } else {
        this["buildStage"]();
        this["createButt" + "ons"]();
        this["addEventLi" + "stener"](q5['Jh']['ENTER_FRAM' + 'E'], this["organizeBu" + "ttons"]);
        this["addEventLi" + 'stener'](q5['Cm']["MOUSE_UP"], this['mouseUpHan' + "dler"]);
        this['organizeBu' + "ttons"]();
        if (No["firstLoad"]) {
          No["firstLoad"] = !0x1;
          this["beginIntro" + "Animation"]();
          this['alertBroke' + "nBrowserBe" + "haviour"]() || this["alertHardw" + "areAcceler" + "ationState"]();
        } else {
          switch (No['currentMen' + 'u']) {
            case No["FEATURED_M" + "ENU"]:
              this["openFeatur" + 'edMenu']();
              break;
            case No["LEVEL_BROW" + "SER"]:
              this['openLevelB' + "rowser"]();
              this['bringUIBut' + "tonsToFron" + 't']();
              break;
            case No["REPLAY_BRO" + "WSER"]:
              this['openReplay' + "Browser"]();
          }
        }
      }
    };
    NA["alertHardw" + "areAcceler" + "ationState"] = function () {
      if (!q6['w']["sharedObje" + 'ct']["data"]["hardwareAc" + "celAlertAc" + "cepted"] && (0x0, qu['M0'])()["accelerati" + "onStatus"] === qu['FF']["Disabled"]) {
        var Nr = new q3['rg']("It looks l" + "ike hardwa" + "re acceler" + "ation is d" + "isabled.\nI" + "f the game" + " is slow o" + "r laggy, t" + 'ry\x20enablin' + "g hardware" + " accelerat" + "ion in the" + " browser s" + "ettings.", "alright", 'don\x27t\x20show' + " again", !0x0, 0x118, 0x78, 0x4ec44d, 0xfd8181);
        Nr["addEventLi" + "stener"](q3['rg']["ANSWER_CHO" + "SEN"], this["hardwareAc" + 'celAnswerC' + "hosen"], !0x1, 0x0, !0x0);
        var NJ = Nr["window"];
        this['stage']["addChild"](NJ);
        NJ["center"]();
      }
    };
    NA["alertBroke" + 'nBrowserBe' + "haviour"] = function () {
      if ("ZTjOV" !== "hYhPw") {
        if (q6['w']["sharedObje" + 'ct']["data"]["brokenBrow" + "serAlertAc" + "cepted"]) {
          return !0x1;
        }
        var Nr = new qT["xJt"]({
          'fontFamily': "Clarendon " + 'LT\x20Std\x20Bol' + 'd',
          'fontSize': 0x1e,
          'fill': 0xfd8181
        });
        var NJ = qT["Z1e"]["measureTex" + 't']("pPqQrR!?ST" + "vwxyz", Nr);
        if (NJ["height"] < 28.8 || NJ["height"] > 0x24 * 1.2) {
          if ("Uyyxi" === "xBluH") {
            if (this["add"]) {
              for (var Nd = 0x0; Nd < this["bodiesToAd" + 'd']['length']; Nd++) {
                this["createPris" + "Joint"](this["bodiesToAd" + 'd'][Nd], this["normals"][Nd]);
              }
              this['bodiesToAd' + 'd'] = [];
              this["normals"] = [];
              this["add"] = !0x1;
            }
            if (this["remove"]) {
              for (Nd = 0x0; Nd < this["bodiesToRe" + "move"]["length"]; Nd++) {
                this["removeJoin" + 't'](this["bodiesToRe" + "move"][Nd]);
              }
              this['bodiesToRe' + "move"] = [];
              this["remove"] = !0x1;
              this["checkZeroJ" + "oints"]();
            }
          } else {
            var ND = new q3['rg']("It looks l" + "ike your b" + "rowser is " + "messing wi" + 'th\x20text\x20re' + "ndering.\nI" + "f text loo" + "ks strange" + " or it's s" + "paced too " + 'far\x20apart,' + '\x20try\x20disab' + "ling priva" + "cy protect" + "ions.", "alright", 'don\x27t\x20show' + '\x20again', !0x0, 0x118, 0x78, 0x4ec44d, 0xfd8181);
            ND["addEventLi" + "stener"](q3['rg']["ANSWER_CHO" + "SEN"], this["brokenBrow" + 'serAnswerC' + 'hosen'], !0x1, 0x0, !0x0);
            var Ng = ND['window'];
            this["stage"]["addChild"](Ng);
            Ng["center"]();
            return !0x0;
          }
        }
        return !0x1;
      } else {
        var Nz = this["shapeGuide"]['chestVert' + [qR]];
        qz["vertices"][NW] = new qI['RM'](Nz['x'] / this["character_" + 'scale'], Nz['y'] / this["character_" + "scale"]);
      }
    };
    No["setCurrent" + 'Menu'] = function (Nr) {
      if ('MXnOK' !== "HleGr") {
        No['currentMen' + 'u'] = Nr;
        No["firstLoad"] = !0x1;
      } else {
        return 0x1;
      }
    };
    No["pregenerat" + "eSmokeBitm" + "aps"] = function () {
      var Nr;
      Nr = nU()['m'](function ND() {
        var Ng;
        var NS;
        var Nd;
        return nU()['w'](function (Nz) {
          for (;;) {
            switch (Nz['n']) {
              case 0x0:
                null == (Ng = q5['pW']["instance"])["getTexture"]('smoke1') && ((NS = new q5['ws'](0x384, 0x1f4, !0x0, 0x0, !0x0))['perlinNois' + 'e'](0x384, 0x1f4, 0xa, 0x4, !0x0, !0x0, 0x0, !0x0, null), Nd = NS, Ng["addTexture"]("smoke1", NS), Ng["addTexture"]("smoke2", Nd));
              case 0x1:
                return Nz['a'](0x2);
            }
          }
        }, ND);
      });
      function NJ() {
        var Ng = this;
        var NS = arguments;
        return new Promise(function (Nd, Nz) {
          var NF = Nr["apply"](Ng, NS);
          function NM(Nb) {


            "OfzSW" === "zGRXP" ? qS["shape2"]["m_isSensor"] || (qA["shape1"] == qN["frontWheel" + "Shape"] ? qc["frontConta" + "cts"] -= 0x1 : qV["backContac" + 'ts'] -= 0x1, qE["wheelConta" + "cts"] = ql["frontConta" + "cts"] + Nd['backContac' + 'ts']) : nG(NF, Nd, Nz, NM, NH, 'next', Nb);
          }
          function NH(Nb) {

            nG(NF, Nd, Nz, NM, NH, "throw", Nb);
          }
          NM(void 0x0);
        });
      }
      return function () {
        if ('BUSnO' !== "bmRnH") {
          return NJ["apply"](this, arguments);
        } else {
          if (this["ejected"]) {
            this['currentPos' + 'e'] = 0x2;
          } else {
            var NS = this["mowerBody"]["GetAngle"]();
            var Nd = (this['mowerBody']["GetAngular" + "Velocity"]() - this["maxSpinAV"]) / -this["maxSpinAV"];
            Nd < 0x0 && (Nd = 0x0);
            Nd > 0x1 && (Nd = 0x1);
            var Nz = qV["cos"](NS) * this["impulseRig" + 'ht'] * Nd;
            var NF = qE["sin"](NS) * this["impulseRig" + 'ht'] * Nd;
            var NM = this["mowerBody"]["GetLocalCe" + "nter"]();
            this["mowerBody"]["ApplyImpul" + 'se'](new ql['RM'](-NF, Nz), this["mowerBody"]["GetWorldPo" + "int"](new q3['RM'](NM['x'] + this["impulseOff" + "set"], NM['y'])));
            this["mowerBody"]["ApplyImpul" + 'se'](new NJ['RM'](NF, -Nz), this["mowerBody"]["GetWorldPo" + 'int'](new qs['RM'](NM['x'] - this['impulseOff' + "set"], NM['y'])));
            this["currentPos" + 'e'] = 0x8;
          }
        }
      };
    }();
    NA["buildStage"] = function () {
      var Nr = q6['w']["sharedObje" + 'ct'];
      0x1 != Nr["data"]["fatlady"] ? (Nr["data"]["fatlady"] = 0x1, this["oldMan"] = new ni()) : this["oldMan"] = Math["random"]() > 0.5 ? new ni() : new nu();
      this["oldMan"]['x'] = 0x1c2;
      this["oldMan"]['y'] = 0xfa;
      this["addChildAt"](this["oldMan"], 0x0);
      this['bg'] = new q5['kx']();
      this['bg']["graphics"]["beginFill"](0x33);
      this['bg']["graphics"]['drawRect'](0x0, 0x0, 0x384, 0x1f4);
      this['bg']['graphics']["endFill"]();
      var NJ = q5['pW']["instance"];
      var ND = NJ['getTexture']("smoke1");
      var Ng = NJ["getTexture"]('smoke2');
      this["smokeSprit" + 'e1'] = new q5['kx']();
      this["tileSmoke"](this["smokeSprit" + 'e1'], ND, 0x1);
      this["smokeSprit" + 'e2'] = new q5['kx']();
      this["tileSmoke"](this["smokeSprit" + 'e2'], Ng, 0.75);
      this["smokeSprit" + 'e1']["alpha"] = 0.5;
      this["smokeSprit" + 'e2']["alpha"] = 0.5;
      this["addChildAt"](this["smokeSprit" + 'e2'], 0x0);
      this['addChildAt'](this["smokeSprit" + 'e1'], 0x0);
      this["addChildAt"](this['bg'], 0x0);
      this["versionTex" + 't']["text"] = 'v\x20' + q6['w']["CURRENT_VE" + "RSION_STRI" + 'NG'];
      this['versionTex' + 't']["buttonMode"] = !0x0;
      this["versionTex" + 't']["interactiv" + 'e'] = !0x0;
      this["versionTex" + 't']["addEventLi" + "stener"](q5['Cm']['MOUSE_DOWN'], this['openReleas' + "eLogPage"]);
      this["setupTitle" + "Label"]();
    };
    NA["openReleas" + "eLogPage"] = function (Nr) {
      "VjtZu" === "QwBmI" ? (void 0x0 === q8 && (qI = null), qS["mouseConta" + 'ct'] = !0x0, qA["shakeActiv" + 'e'] = !0x0, qN['uO']["instance"]["show"]("refresh re" + "sults", qc)) : window["open"]("/happy_whe" + "els_releas" + 'e_log.tjf', "_blank");
    };
    NA["setupTitle" + 'Label'] = function () {
      var Nr;
      if (null !== (Nr = window["HW_SETTING" + 'S']) && void 0x0 !== Nr && Nr["titleLabel"] && !this["titleLabel"]) {
        var NJ = new q5['lk']("Clarendon " + "LT Std", window["HW_SETTING" + 'S']["titleLabel" + 'Size'] || 0xc, window["HW_SETTING" + 'S']["titleLabel" + "Color"] || 0x0, null, null, null, null, null, q5['MA']['CENTER']);
        this["titleLabel"] = new q5['A_']();
        this['titleLabel']["defaultTex" + "tFormat"] = NJ;
        this['titleLabel']["text"] = window["HW_SETTING" + 'S']['titleLabel'] || '';
        this["addChild"](this["titleLabel"]);
        this["titleLabel"]['x'] = window["HW_SETTING" + 'S']["titleLabel" + 'X'] || 0x0;
        this["titleLabel"]['y'] = window["HW_SETTING" + 'S']["titleLabel" + 'Y'] || 0x0;
        this["titleLabel"]["rotation"] = window["HW_SETTING" + 'S']["titleLabel" + "Rotation"] || 0x0;
        this["titleLabel"]["pixiText"]['anchor']["set"](0.5);
        this["titleLabel"]["scale"]['set'](0x0);
        var ND = new q5['GD'](0x3, 0x5a, 0x0, 0x1, 0x5, 0x5, 0.25, 0x1);
        this["titleLabel"]["filters"] = [ND];
      }
    };
    NA["tileSmoke"] = function (Nr, NJ, ND) {
      if ('OAQti' === "WaBSx") {
        var Nz = this["voiceArray"]["length"] - 0x1;
        if (this["voiceSound"]) {
          if (this["voiceSound"]["soundChann" + 'el']) {
            if (Nz > this['voicePrior' + 'ity']) {
              this['voiceSound']["stopSound"]();
              var NF = this["voiceArray"][Nz];
              this["voiceSound"] = NW['m']['instance']["playAreaSo" + "undInstanc" + 'e'](this["tag"] + NF, this["head1Body"]);
              this["voicePrior" + "ity"] = Nz;
            }
            return;
          }
          this["voiceSound"] = null;
          this["voicePrior" + "ity"] = -0x1;
        }
        Nz < 0x0 || (NF = this["voiceArray"][Nz], this["voiceSound"] = qT['m']["instance"]["playAreaSo" + "undInstanc" + 'e'](this["tag"] + NF, this["head1Body"]), this["voicePrior" + "ity"] = Nz);
      } else {
        void 0x0 === ND && (ND = 0x1);
        for (var Ng = 0x0; Ng < 0x4; Ng++) {
          if ("PjrPM" === "mNcWA") {
            return this['bg']["height"];
          } else {
            var NS = new q5['kx']();
            NS['alpha'] = ND;
            NS["pixiSprite"]["texture"] = NJ['pixiTextur' + 'e'];
            NS['x'] = Math["floor"](Ng % 0x2) * NJ["pixiTextur" + 'e']["width"];
            NS['y'] = Math["floor"](Ng / 0x2) * NJ["pixiTextur" + 'e']["height"];
            Nr["addChild"](NS);
          }
        }
      }
    };
    NA["createButt" + "ons"] = function () {

      var Nr = this;
      this["buttons"] = [];
      var NJ = 0x3d88c7;
      var ND = 0xfd8181;
      NB['instance']["resize"]();
      this["creditsBtn"] = new nS("CREDITS", 0x19, ND);
      this["addChild"](this["creditsBtn"]);
      this["optionsBtn"] = new nS("OPTIONS", 0x19, ND);
      this["addChild"](this["optionsBtn"]);
      this["editorBtn"] = new nS('LEVEL\x20EDIT' + 'OR', 0x1e, NJ);
      this["addChild"](this["editorBtn"]);
      this["loadLevelB" + 'tn'] = new nS("LOAD LEVEL" + "/REPLAY", 0x1e, NJ);
      this["addChild"](this['loadLevelB' + 'tn']);
      this["browseBtn"] = new nS("BROWSE LEV" + "ELS", 0x1e, NJ);
      this["addChild"](this['browseBtn']);
      this["playBtn"] = new nS("PLAY", 0x38, NJ);
      this["addChild"](this["playBtn"]);
      this["creditsBtn"]['x'] = this["loadLevelB" + 'tn']['x'] = this['optionsBtn']['x'] = this["editorBtn"]['x'] = this["browseBtn"]['x'] = this["playBtn"]['x'] = this["buttonX"];
      this['buttons'] = [this["playBtn"], this["browseBtn"], this["loadLevelB" + 'tn'], this['editorBtn'], this["optionsBtn"], this["creditsBtn"]];
      this["spaceHeigh" + 't'] = (this["buttons"]['length'] - 0x1) * this["buttonSpac" + "ing"];
      this["muteBtn"] = new q5['j7']();
      this["muteBtn"]["setPixiMov" + "ieClip"]((0x0, qK['zI'])("GameUI", "MuteButton"));
      q6['w']["mobileCont" + "rols"] ? (this["muteBtn"]["scaleX"] = 0x3, this["muteBtn"]["scaleY"] = 0x3, this["muteBtn"]['x'] = this["stage"]["stageWidth"] - 0x3 * this["muteBtn"]["width"] - 0x5, this["muteBtn"]['y'] = 0x7) : (this["muteBtn"]['x'] = this["stage"]["stageWidth"] - this['muteBtn']["width"] - 0x5, this["muteBtn"]['y'] = 0x5);
      this["muteBtn"]["gotoAndSto" + 'p'](0x1);
      this['muteBtn']["buttonMode"] = !0x0;
      this["muteBtn"]["alpha"] = 0.7;
      this["addChild"](this["muteBtn"]);
      this["muteBtn"]["interactiv" + 'e'] = !0x0;
      this["muteBtn"]["gotoAndSto" + 'p'](q6['w']["sharedObje" + 'ct']["data"]["muted"] ? 0x2 : 0x1);
      this["fullScreen" + "Button"] = new q5['j7']();
      this['fullScreen' + 'Button']["setPixiMov" + "ieClip"]((0x0, qK['zI'])("GameUI", "FullScreen" + "Button"));
      this["fullScreen" + "Button"]["buttonMode"] = !0x0;
      this["fullScreen" + "Button"]["interactiv" + 'e'] = !0x0;
      this["stage"]['displaySta' + 'te'] == q5['se']['FULL_SCREE' + "N_INTERACT" + "IVE"] ? this["fullScreen" + "Button"]['gotoAndSto' + 'p'](0x2) : this["fullScreen" + "Button"]["gotoAndSto" + 'p'](0x1);
      this['fullScreen' + "Button"]["alpha"] = 0.7;
      this["fullScreen" + "Button"]['_pixiSprit' + 'e']["pivot"]['x'] = this["fullScreen" + "Button"]["_pixiSprit" + 'e']["width"] / 0x2;
      this["fullScreen" + 'Button']["_pixiSprit" + 'e']['pivot']['y'] = this["fullScreen" + "Button"]["_pixiSprit" + 'e']["height"] / 0x2;
      q6['w']['mobileCont' + 'rols'] ? (this["fullScreen" + 'Button']['scale']["set"](0x2), this["fullScreen" + "Button"]['x'] = this["stage"]["stageWidth"] - this["muteBtn"]["width"] - 0x2 * this['fullScreen' + "Button"]["width"], this["fullScreen" + 'Button']['y'] = 0x16) : (this["fullScreen" + "Button"]["scale"]["set"](0.8), this["fullScreen" + "Button"]['x'] = this["stage"]['stageWidth'] - this["muteBtn"]['width'] - this['fullScreen' + 'Button']['width'] - 0x3, this["fullScreen" + "Button"]['y'] = 0xa);
      this["addChild"](this["fullScreen" + "Button"]);
      q6['w']["mobileCont" + "rols"] && (this["bounceAnim" + "ationLoopI" + 'nterval'] = window["setInterva" + 'l'](function () {

        if ("VRZiV" !== "VRZiV") {
          return this["_accelerat" + "ion"];
        } else {
          Nr["stage"]["displaySta" + 'te'] != q5['se']["FULL_SCREE" + "N_INTERACT" + 'IVE'] && qP['os']['to'](Nr["fullScreen" + 'Button']["scale"], {
            'duration': 0.5,
            'x': 2.5,
            'y': 2.5,
            'ease': qp['xu']["easeOut"],
            'onComplete': function () {
              qP['os']['to'](Nr["fullScreen" + "Button"]["scale"], {
                'duration': 0x1,
                'x': 0x2,
                'y': 0x2,
                'ease': qp['br']["easeOut"]
              });
            }
          });
        }
      }, 0x1194));
    };
    NA["beginIntro" + "Animation"] = function () {
      this['bg']["alpha"] = 0x0;
      this["smokeSprit" + 'e1']["alpha"] = 0x0;
      this["smokeSprit" + 'e2']["alpha"] = 0x0;
      this["logo"]['scaleX'] = this["logo"]["scaleY"] = this["logobg"]["scaleX"] = this["logobg"]["scaleY"] = 0x0;
      this["appLink"] && (this['appLink']['x'] = -0x109);
      for (var Nr = this["buttons"]["length"], NJ = 0x2, ND = 0x0; ND < Nr; ND++) {
        if ("THPpH" === "THPpH") {
          var Ng = this["buttons"][ND];
          Ng['x'] = this["buttonX"] + 0x190;
          ND == Nr - 0x1 ? qP['os']['to'](Ng, {
            'duration': 0.5,
            'x': this["buttonX"],
            'ease': qp['MI']['easeOut'],
            'delay': NJ,
            'onComplete': this["introCompl" + 'ete']
          }) : qP['os']['to'](Ng, {
            'duration': 0.5,
            'x': this['buttonX'],
            'ease': qp['MI']["easeOut"],
            'delay': NJ
          });
          NJ += 0.15;
        } else {
          if (NJ < 0x80) {
            this["byteArr"]["writeUnsig" + "nedByte"](qs);
          } else {
            if (qf < 0x4000) {
              this["byteArr"]["writeUnsig" + "nedByte"](NA >> 0x7 & 0x7f | 0x80);
              this["byteArr"]["writeUnsig" + "nedByte"](0x7f & q5);
            } else {
              if (ND < 0x200000) {
                this["byteArr"]["writeUnsig" + 'nedByte'](qB >> 0xe & 0x7f | 0x80);
                this['byteArr']["writeUnsig" + "nedByte"](qW >> 0x7 & 0x7f | 0x80);
                this["byteArr"]["writeUnsig" + "nedByte"](0x7f & qH);
              } else {
                if (!(qy < 0x40000000)) {
                  throw new qg("The value:" + '\x20\x27' + qu + ('\x27\x20is\x20out\x20o' + "f range fo" + "r uint29."));
                }
                this["byteArr"]["writeUnsig" + "nedByte"](qd >> 0x16 & 0x7f | 0x80);
                this["byteArr"]["writeUnsig" + "nedByte"](qm >> 0xf & 0x7f | 0x80);
                this['byteArr']["writeUnsig" + "nedByte"](qa >> 0x8 & 0x7f | 0x80);
                this["byteArr"]["writeUnsig" + "nedByte"](0xff & qh);
              }
            }
          }
        }
      }
      qP['os']['to'](this['smokeSprit' + 'e1'], {
        'duration': 0x1,
        'alpha': 0.5
      });
      qP['os']['to'](this['smokeSprit' + 'e2'], {
        'duration': 0x1,
        'alpha': 0.5
      });
      qP['os']['to'](this['bg'], {
        'duration': 0x2,
        'alpha': 0x1
      });
      qP['os']['to'](this['logo'], {
        'duration': 0.5,
        'scaleX': 0x2,
        'scaleY': 0x2,
        'ease': qp['br']["easeOut"],
        'delay': 1.5
      });
      qP['os']['to'](this["logobg"], {
        'duration': 0.5,
        'scaleX': 0x2,
        'scaleY': 0x2,
        'ease': qp['br']["easeOut"],
        'delay': 1.5
      });
      this["appLink"] && qP['os']['to'](this["appLink"], {
        'duration': 0.5,
        'x': 37.75,
        'ease': qp['MI']["easeOut"],
        'delay': 1.5
      });
      this["oldMan"]["slideIn"]();
      this["superPretz" + 'el'] = nJ['m']["instance"]["playMusicI" + "tem"]("SuperPretz" + 'el');
      this["titleLabel"] && qP['os']['to'](this["titleLabel"]["scale"], {
        'duration': 0x2,
        'x': 0x1,
        'y': 0x1,
        'ease': qp['Oq']["easeOut"],
        'delay': 0x3
      });
    };
    NA["confirmExi" + 't'] = function () {};
    NA["openLoadLe" + "velMenu"] = function () {
      this["loadMenu"] = new nr();
      var Nr = this["loadMenu"]['window'];
      this["addChild"](Nr);
      Nr['center']();
      this["loadMenu"]["addEventLi" + "stener"](nr["LOAD"], this["beginLoad"]);
      this["loadMenu"]["addEventLi" + "stener"](nr["CANCEL"], this["closeLoadM" + "enu"]);
    };
    NA["maskTransi" + 'tion'] = function (Nr) {
      if ("Zrpyv" !== "Zrpyv") {
        var ND = this["listItemAr" + "ray"]["indexOf"](this["selectedLi" + "stItem"]);
        if (ND == this["listItemAr" + "ray"]["length"] - 0x1) {
          return;
        }
        this["selectedLi" + "stItem"]["selected"] = !0x1;
        ND += 0x1;
        this["selectedLi" + "stItem"] = this['listItemAr' + 'ray'][ND];
        this["selectedLi" + 'stItem']["selected"] = !0x0;
        this['closing'] || this["closeSelec" + "tion"]();
      } else {
        this["maskTransi" + "tioning"] = !0x0;
        this["menuMask"] = new qT["kxk"](qT['gPd']["from"]("gameui-ass" + "et-26.png"));
        this["pixiSprite"]["addChild"](this["menuMask"]);
        this["menuMask"]['x'] = this["menuMask"]["width"];
        Nr['pixiSprite']["mask"] = this["menuMask"];
        qP['os']['to'](this["menuMask"], {
          'duration': 0.5,
          'x': -0x32,
          'ease': qp['MI']["easeOut"],
          'onComplete': this["maskTransi" + "tionComple" + 'te']
        });
      }
    };
    NA["hideButton" + 's'] = function () {
      for (var Nr = 0x0; Nr < this["buttons"]["length"]; Nr++) {
        if ('TvqeW' !== "TvqeW") {
          return this["_replayDat" + "aObject"];
        } else {
          var NJ = this["buttons"][Nr];
          NJ["alpha"] = 0.25;
          NJ["disable"]();
        }
      }
      this["logo"]['alpha'] = 0.25;
      this["logobg"]["alpha"] = 0.1;
      this["titleLabel"] && (this["titleLabel"]['alpha'] = 0.1);
      this["loginCorne" + 'r'] && (this["loginCorne" + 'r']["alpha"] = 0.25, this["loginCorne" + 'r']["disable"]());
      this["statusBann" + 'er'] && (this["statusBann" + 'er']['alpha'] = 0.25);
    };
    NA["showButton" + "sAndKillMa" + "skIfItExis" + 'ts'] = function () {
      this["menuMask"] && (qP['os']["killTweens" + 'Of'](this["menuMask"]), this['maskTransi' + "tionComple" + 'te']());
      for (var Nr = 0x0; Nr < this['buttons']['length']; Nr++) {
        var NJ = this["buttons"][Nr];
        NJ["alpha"] = 0x1;
        NJ["enable"]();
      }
      this["logo"]["alpha"] = 0x1;
      this["logobg"]['alpha'] = 0x1;
      this["muteBtn"]["gotoAndSto" + 'p'](q6['w']["sharedObje" + 'ct']["data"]["muted"] ? 0x2 : 0x1);
      this["titleLabel"] && (this["titleLabel"]['alpha'] = 0x1);
      this["loginCorne" + 'r'] && (this["loginCorne" + 'r']["alpha"] = 0x1, this['loginCorne' + 'r']["enable"]());
      this['statusBann' + 'er'] && (this["statusBann" + 'er']["alpha"] = 0x1);
    };
    NA["bringUIBut" + "tonsToFron" + 't'] = function () {
      if ("oXOgu" === "oXOgu") {
        this["addChild"](this['muteBtn']);
        this["addChild"](this["fullScreen" + "Button"]);
        this["muteBtn"]["alpha"] = 0.7;
        this["fullScreen" + "Button"]["alpha"] = 0.7;
      } else {
        this["contactImp" + "ulseDict"]['delete'](this['helmetShap' + 'e']);
        this["head1Shape"] = this['helmetShap' + 'e'];
        this["contactImp" + "ulseDict"]["set"](this["head1Shape"], this["headSmashL" + "imit"]);
        this['helmetShap' + 'e'] = null;
        this["helmetOn"] = !0x1;
        var NJ = new qT['m2']();
        var ND = new qR['gv']();
        NJ["density"] = 0x1;
        NJ["friction"] = 0.3;
        NJ["restitutio" + 'n'] = 0.1;
        NJ["filter"] = this["zeroFilter"];
        var Ng = this["head1Body"]["GetPositio" + 'n']();
        ND["position"] = Ng;
        ND["angle"] = this["head1Body"]["GetAngle"]();
        ND["userData"] = this["helmetMC"];
        this["helmetMC"]["visible"] = !0x0;
        this['head1MC']['helmet']["visible"] = !0x1;
        NJ["vertexCoun" + 't'] = 0x4;
        for (var NS = 0x0; NS < 0x4; NS++) {
          var Nd = this["shapeGuide"]["helmetVert" + [NS + 0x1]];
          NJ["vertices"][NS] = new NW['RM'](Nd['x'] / this["character_" + "scale"], Nd['y'] / this["character_" + "scale"]);
        }
        this["helmetBody"] = this["_session"]["m_world"]['CreateBody'](ND);
        this["helmetBody"]["CreateShap" + 'e'](NJ);
        this["helmetBody"]["SetMassFro" + "mShapes"]();
        this['helmetBody']["SetLinearV" + 'elocity'](this["head1Body"]["GetLinearV" + "elocity"]());
        this["helmetBody"]["SetAngular" + "Velocity"](this['head1Body']["GetAngular" + "Velocity"]());
        this["paintVecto" + 'r']["push"](this["helmetBody"]);
      }
    };
    NA["openBasicM" + "enu"] = function (Nr, NJ) {
      void 0x0 === NJ && (NJ = null);
      if (!this["transition" + "ing"]) {
        if ("sojKV" === 'sojKV') {
          var ND;
          switch (Nr) {
            case "friendly_o" + "ptions":
            case "gamepad_co" + "ntrols":
            default:
              throw new Error("basic menu" + " type not " + 'defined');
            case "options":
              ND = new nM(this['stage']['displaySta' + 'te']);
              break;
            case 'credits':
              ND = new nP();
              break;
            case "customize_" + 'controls':
              ND = new nk();
          }
          this["addChild"](ND);
          ND["addEventLi" + "stener"](qu['$T']["MAIN_MENU"], this["basicMenuC" + "losed"]);
          ND["addEventLi" + "stener"](qu['$T']["CUSTOMIZE_" + "CONTROLS"], this["openCustom" + "izeControl" + 's']);
          ND["addEventLi" + "stener"](qu['$T']["GAMEPAD_CO" + 'NTROLS'], this['openGamepa' + "dControls"]);
          ND['addEventLi' + "stener"](qu['$T']["OPTIONS"], this["openOption" + "sMenu"]);
          ND["addEventLi" + "stener"](qu['$T']["FRIENDLY_O" + "PTIONS"], this["openFriend" + "lyOptions"]);
          this["hideButton" + 's']();
          "options" !== Nr && "friendly_o" + "ptions" !== Nr && nJ['m']["instance"]["duckMusic"](0.5);
        } else {
          var NS = qR["getChildAt"](qz);
          var Nd = new NW(NS, qI);
          this['triggers']["push"](Nd);
          this["triggerDic" + "tionary"]["set"](NS, Nd);
        }
      }
    };
    NA["openFeatur" + "edMenu"] = function () {
      No["currentMen" + 'u'] = No["FEATURED_M" + 'ENU'];
      this["hideButton" + 's']();
      this['featuredMe' + 'nu'] = new nn();
      this["addChild"](this["featuredMe" + 'nu']);
      this["featuredMe" + 'nu']["init"]();
      this['featuredMe' + 'nu']["addEventLi" + "stener"](qu['$T']['MAIN_MENU'], this["closeFeatu" + 'redMenu']);
      this["featuredMe" + 'nu']["addEventLi" + "stener"](qu['$T']["SESSION"], this["cloneAndDi" + "spatchEven" + 't']);
      this['featuredMe' + 'nu']["addEventLi" + 'stener'](qu['$T']["REPLAY_BRO" + "WSER"], this["transToRep" + "layBrowser"]);
      this["featuredMe" + 'nu']["addEventLi" + "stener"](qu['$T']["LEVEL_BROW" + 'SER'], this["transToLev" + "elBrowser"]);
      this['transition' + "ing"] || this["featuredMe" + 'nu']["activate"]();
      nJ['m']['instance']["duckMusic"](0.5);
    };
    NA["openLevelB" + "rowser"] = function (Nr) {
      void 0x0 === Nr && (Nr = !0x0);
      No['currentMen' + 'u'] = No["LEVEL_BROW" + "SER"];
      this["hideButton" + 's']();
      this["levelBrows" + 'er'] = new n7();
      this["addChild"](this['levelBrows' + 'er']);
      this['levelBrows' + 'er']["init"]();
      this["levelBrows" + 'er']["addEventLi" + "stener"](qu['$T']['MAIN_MENU'], this['closeLevel' + "Browser"]);
      this["levelBrows" + 'er']["addEventLi" + "stener"](qu['$T']["SESSION"], this["cloneAndDi" + "spatchEven" + 't']);
      this['levelBrows' + 'er']["addEventLi" + "stener"](qu['$T']["EDITOR"], this["cloneAndDi" + "spatchEven" + 't']);
      this["levelBrows" + 'er']["addEventLi" + "stener"](qu['$T']["REPLAY_BRO" + 'WSER'], this["transToRep" + "layBrowser"]);
      this["transition" + "ing"] || this["levelBrows" + 'er']["activate"]();
      nJ['m']["instance"]["duckMusic"](0.5);
    };
    NA['updateMusi' + "cDuck"] = function () {
      if ("HfLVk" === "HfLVk") {
        var Nr = Boolean(this["featuredMe" + 'nu'] || this["levelBrows" + 'er'] || this["replayBrow" + "ser"]);
        nJ['m']["instance"]["duckMusic"](Nr ? 0.5 : 0x1);
      } else {
        void 0x0 === NW && (qI = '');
        var ND = new qS();
        var Ng = this['getCipher'](qA, ND);
        ND["setBlockSi" + 'ze'](Ng["getBlockSi" + 'ze']());
        Ng["decrypt"](qN);
        qc["position"] = 0x0;
      }
    };
    NA["die"] = function () {
      this["removeEven" + "tListener"](q5['Jh']["ENTER_FRAM" + 'E'], this["organizeBu" + "ttons"]);
      this["removeEven" + "tListener"](q5['Cm']["MOUSE_UP"], this["mouseUpHan" + "dler"]);
      this['versionTex' + 't']["removeEven" + "tListener"](q5['Cm']["MOUSE_DOWN"], this["openReleas" + "eLogPage"]);
      this["superPretz" + 'el'] && (this["superPretz" + 'el']["fadeOut"](0x1, !0x0), this["superPretz" + 'el'] = null);
      this["featuredMe" + 'nu'] && this["closeFeatu" + "redMenu"]();
      this['levelBrows' + 'er'] && this['closeLevel' + "Browser"]();
      this['replayBrow' + "ser"] && this['closeRepla' + "yBrowser"]();
      for (var Nr = 0x0; Nr < this["buttons"]['length']; Nr++) {
        var NJ = this['buttons'][Nr];
        qP['os']['killTweens' + 'Of'](NJ);
        NJ["die"]();
        NJ['destroy']();
      }
      qP['os']["killTweens" + 'Of'](this["fullScreen" + "Button"]);
      this["bounceAnim" + "ationLoopI" + "nterval"] && window["clearInter" + "val"](this["bounceAnim" + "ationLoopI" + "nterval"]);
      window['removeEven' + 'tListener']("resize", this["resizeList" + "enerBind"]);
      this["statusBann" + 'er'] && (this["statusBann" + 'er']['die'](), this['statusBann' + 'er'] = null);
      this["loginCorne" + 'r'] && (this["loginCorne" + 'r']["removeEven" + "tListener"](qu['$T']["LEVEL_BROW" + "SER"], this["levelBrows" + "erFromLogi" + "nDropdown"]), this["loginCorne" + 'r']["die"](), this['loginCorne' + 'r'] = null);
      this['appLink'] && (qP['os']["killTweens" + 'Of'](this["appLink"]), this["appLink"]["destroy"]());
      this["versionTex" + 't']["destroy"]();
      this["titleLabel"] && (qP['os']["killTweens" + 'Of'](this["titleLabel"]['scale']), this["titleLabel"]["destroy"](), this["titleLabel"] = null);
    };
    NR = No;
    (NW = [{
      'key': "tweenVal",
      'get': function () {
        return this["_tweenVal"];
      },
      'set': function (Nr) {
        this["_tweenVal"] = Nr;
        var NJ = Math["round"](-0x384 * this['_tweenVal']);
        this["leftBrowse" + 'r']['x'] = NJ;
        this["rightBrows" + 'er']['x'] = NJ + 0x384;
      }
    }]) && function (Nr, NJ) {
      if ("BohqB" !== "BohqB") {
        var Nd = this["flags"][qF];
        var Nz = new qT();
        Nz["buttonMode"] = !0x1;
        Nz["mouseEnabl" + 'ed'] = !0x1;
        Nz['x'] = Nd['x'] * this["session"]["m_physScal" + 'e'];
        Nz['y'] = Nd['y'] * this['session']["m_physScal" + 'e'];
        this["flagHolder"]["addChild"](Nz);
      } else {
        for (var ND = 0x0; ND < NJ["length"]; ND++) {
          if ("xHZEL" === "kywEu") {
            void 0x0 === qz && (NW = !0x0);
            qI["prototype"]["hipBreak1"]["call"](this, qS, qA);
            this["ejected"] || (this["removeFrom" + "COMArray"](this["upperLeg1B" + "ody"]), this["removeFrom" + "COMArray"](this["lowerLeg1B" + 'ody']), this["upperLeg3B" + 'ody'] && this['COMArray']["push"](this["upperLeg3B" + 'ody']), this["frameFoot1"] && (this["_session"]["m_world"]["DestroyJoi" + 'nt'](this["frameFoot1"]), this['frameFoot1'] = null, this['checkLegsB' + "roken"]()));
          } else {
            var Ng = NJ[ND];
            Ng["enumerable"] = Ng["enumerable"] || !0x1;
            Ng["configurab" + 'le'] = !0x0;
            "value" in Ng && (Ng["writable"] = !0x0);
            Object["defineProp" + 'erty'](Nr, nQ(Ng['key']), Ng);
          }
        }
      }
    }(NR['prototype'], NW);
    Object["defineProp" + "erty"](NR, "prototype", {
      'writable': !0x1
    });
    return NR;
  }(q5['kx']);
  N1['firstLoad'] = !0x0;
  N1["FEATURED_M" + "ENU"] = "featuredme" + 'nu';
  N1["LEVEL_BROW" + "SER"] = "levelbrows" + 'er';
  N1["REPLAY_BRO" + 'WSER'] = "replaybrow" + 'ser';
  var N2 = q2(0xe510);
  var N3 = q2(0xa290);
  function N4() {

    var Nl;
    var No;
    var Ni = "function" == typeof Symbol ? Symbol : {};
    var NE = Ni['iterator'] || "@@iterator";
    var NR = Ni["toStringTa" + 'g'] || "@@toString" + "Tag";
    function NW(Nz, NF, NM, NH) {

      var Nb = NF && NF["prototype"] instanceof Nr ? NF : Nr;
      var NZ = Object["create"](Nb["prototype"]);
      N5(NZ, "_invoke", function (Ny, Nc, NX) {

        var Nx;
        var Nw;
        var Na;
        var NY = 0x0;
        var Nv = NX || [];
        var NL = !0x1;
        var NU = {
          'p': 0x0,
          'n': 0x0,
          'v': Nl,
          'a': NO,
          'f': NO["bind"](Nl, 0x4),
          'd': function (NG, NQ) {
            Nx = NG;
            Nw = 0x0;
            Na = Nl;
            NU['n'] = NQ;
            return NA;
          }
        };
        function NO(NG, NQ) {
          if ("reJze" !== "sdIex") {
            Nw = NG;
            Na = NQ;
            No = 0x0;
            for (; !NL && NY && !f0 && No < Nv["length"]; No++) {
              var f0;
              var f1 = Nv[No];
              var f2 = NU['p'];
              var f3 = f1[0x2];
              NG > 0x3 ? (f0 = f3 === NQ) && (Na = f1[(Nw = f1[0x4]) ? 0x5 : (Nw = 0x3, 0x3)], f1[0x4] = f1[0x5] = Nl) : f1[0x0] <= f2 && ((f0 = NG < 0x2 && f2 < f1[0x1]) ? (Nw = 0x0, NU['v'] = NQ, NU['n'] = f1[0x1]) : f2 < f3 && (f0 = NG < 0x3 || f1[0x0] > NQ || NQ > f3) && (f1[0x4] = NG, f1[0x5] = NQ, NU['n'] = f3, Nw = 0x0));
            }
            if (f0 || NG > 0x1) {
              return NA;
            }
            NL = !0x0;
            throw NQ;
          } else {
            this['sliderTab']["addEventLi" + "stener"](qR['Cm']['MOUSE_DOWN'], this["mouseDownH" + "andler"]);
            this['labelText']["mouseEnabl" + 'ed'] = !0x1;
            this["removeChil" + 'd'](this["labelText"]);
            this["inputText"]["defaultTex" + "tFormat"] = new qz['lk']("Clarendon " + "LT Std", 0x14, 0xffffff, null, null, null, null, null, null, null, null, null, 0x2);
            this["inputText"]["wordWrap"] = this["labelText"]["wordWrap"] = !0x1;
            this["inputText"]["autoSize"] = this["labelText"]["autoSize"] = q8['wL']["LEFT"];
            this["inputText"]["addEventLi" + "stener"](qI['kV']["KEY_DOWN"], this["keyDownHan" + "dlerBind"]);
            this["inputText"]["position"]["set"](0x2, 0x2);
          }
        }
        return function (NG, NQ, f0) {
          if ("tYeEd" === "GumGf") {
            this["refreshBut" + "ton"]["setSpin"](!0x0);
            var f2 = new q1['vg'](qs['w']["siteURL"] + ("get_level." + 'hw'));
            f2["method"] = qf['QI']['POST'];
            f2["data"] = q9["urlVariabl" + 'es'];
            NH["urlVariabl" + 'es']["page"] = Ny["currentSet"];
            this["statusSpri" + 'te'] = new qB['AS']("loading le" + "vels...");
            var f3 = this["statusSpri" + 'te']['window'];
            this["addChild"](f3);
            f3["center"]();
            "get_all" == qW["urlVariabl" + 'es']["action"] && qH['JD']["trackEvent"](qk['JD']["LEVEL_BROW" + "SER"], NX['JD']["PAGE_LEVEL" + 'S'], this["sortDropMe" + 'nu']["value"] + '_' + this["uploadDrop" + "Menu"]["value"], qJ["currentSet"]);
            this["listLoadPe" + 'nding'] = !0x0;
            this["loader"] = new qr['NU']();
            this["loader"]["addEventLi" + 'stener'](qj['Jh']["COMPLETE"], this["levelDataL" + "oaded"]);
            this["loader"]['addEventLi' + "stener"](qP['BR']["IO_ERROR"], this["IOErrorHan" + "dler"]);
            this["loader"]["addEventLi" + "stener"](qn['Xt']['SECURITY_E' + 'RROR'], this["securityEr" + "rorHandler"]);
            this["loader"]["load"](f2);
          } else {
            if (NY > 0x1) {
              throw TypeError("Generator " + "is already" + " running");
            }
            NL && 0x1 === NQ && NO(NQ, f0);
            Nw = NQ;
            Na = f0;
            for (; (No = Nw < 0x2 ? Nl : Na) || !NL;) {
              Nx || (Nw ? Nw < 0x3 ? (Nw > 0x1 && (NU['n'] = -0x1), NO(Nw, Na)) : NU['n'] = Na : NU['v'] = Na);
              try {
                if ("YmRxS" !== "hIBuA") {
                  NY = 0x2;
                  if (Nx) {
                    Nw || (NG = "next");
                    if (No = Nx[NG]) {
                      if ("OcxRW" === "ROman") {
                        var f3 = qz[Na];
                        f3["enumerable"] = f3["enumerable"] || !0x1;
                        f3["configurab" + 'le'] = !0x0;
                        "value" in f3 && (f3["writable"] = !0x0);
                        qI['defineProp' + "erty"](qS, qA(f3["key"]), f3);
                      } else {
                        if (!(No = No['call'](Nx, Na))) {
                          throw TypeError("iterator r" + "esult is n" + "ot an obje" + 'ct');
                        }
                        if (!No["done"]) {
                          return No;
                        }
                        Na = No["value"];
                        Nw < 0x2 && (Nw = 0x0);
                      }
                    } else {
                      0x1 === Nw && (No = Nx["return"]) && No["call"](Nx);
                      Nw < 0x2 && (Na = TypeError("The iterat" + "or does no" + "t provide " + "a '" + NG + "' method"), Nw = 0x1);
                    }
                    Nx = Nl;
                  } else {
                    if ((No = (NL = NU['n'] < 0x0) ? Na : Ny['call'](Nc, NU)) !== NA) {
                      break;
                    }
                  }
                } else {
                  var f4 = f0['shape2']["m_body"];
                  var f5 = qR["contactCou" + 'nt']["get"](f4);
                  void 0x0 === f5 && (f5 = 0x0);
                  qz["contactCou" + 'nt']["set"](f4, f5 + 0x1);
                }
              } catch (f4) {
                Nx = Nl;
                Nw = 0x1;
                Na = f4;
              } finally {
                NY = 0x1;
              }
            }
            return {
              'value': No,
              'done': NL
            };
          }
        };
      }(Nz, NM, NH), !0x0);
      return NZ;
    }
    var NA = {};
    function Nr() {}
    function NJ() {}
    function ND() {}
    No = Object["getPrototy" + 'peOf'];
    var Ng = [][NE] ? No(No([][NE]())) : (N5(No = {}, NE, function () {
      if ("cPvCl" !== "cPvCl") {
        var NF = this["_session"]["m_world"];
        this["paintVecto" + 'r'] = new qg();
        this["chunks"] = [];
        var NM = new qu['gv']();
        var NH = new qd['gv']();
        var Nb = new qm['gv']();
        var NZ = new qa['gv']();
        var Ny = new qh['gv']();
        var Nc = new Ng['gv']();
        var NX = new qZ['gv']();
        var Nx = new qo['gv']();
        var Nw = new qK['gv']();
        var Na = new Nl['gv']();
        var NY = new Nr['gv']();
        var Nv = new qb['m2']();
        var NL = new qC['_A']();
        Nv["density"] = 0x1;
        Nv["friction"] = 0.3;
        Nv["restitutio" + 'n'] = 0.1;
        Nv["filter"] = this["defaultFil" + "ter"];
        NL['density'] = 0x1;
        NL["friction"] = 0.3;
        NL["restitutio" + 'n'] = 0.1;
        NL["filter"] = this["defaultFil" + "ter"];
        this["shapeGuide"] || (this["shapeGuide"] = this["sourceObje" + 'ct']["shapeGuide"]);
        this["shapeGuide"]['parent'] && this['shapeGuide']['parent']["removeChil" + 'd'](this["shapeGuide"]);
        var NU = this["shapeGuide"]["chestShape"];
        NM['position']["Set"](this["_startX"] + NU['x'] / this["character_" + "scale"], this["_startY"] + NU['y'] / this["character_" + "scale"]);
        NM["angle"] = NU["rotation"] / qt["oneEightyO" + 'verPI'];
        Nv["SetAsBox"](NU["scaleX"] * this["shapeRefSc" + "ale"] / this['character_' + 'scale'], NU["scaleY"] * this['shapeRefSc' + "ale"] / this["character_" + 'scale']);
        this["chestBody"] = NF['CreateBody'](NM);
        this["chestBody"]["AllowSleep" + "ing"](!0x1);
        this["chestShape"] = this["chestBody"]["CreateShap" + 'e'](Nv);
        this['chestShape']["SetUserDat" + 'a'](this);
        this["chestShape"]["SetMateria" + 'l'](0x2);
        this["_session"]['contactLis' + "tener"]["registerLi" + "stener"](qM['fI']["RESULT"], this["chestShape"], this["contactRes" + "ultHandler"]);
        this['_session']["contactLis" + "tener"]["registerLi" + "stener"](qi['fI']["ADD"], this["chestShape"], this["contactAdd" + "Handler"]);
        this["chestBody"]['SetMassFro' + 'mShapes']();
        this['paintVecto' + 'r']["push"](this["chestBody"]);
        this["cameraFocu" + 's'] = this["chestBody"];
        NU = this["shapeGuide"]["headShape"];
        NH["position"]['Set'](this['_startX'] + NU['x'] / this['character_' + 'scale'], this['_startY'] + NU['y'] / this["character_" + 'scale']);
        NH["angle"] = NU["rotation"] / qD["oneEightyO" + "verPI"];
        NL["radius"] = NU["scaleX"] * this["shapeRefSc" + "ale"] / this["character_" + "scale"];
        this['head1Body'] = NF["CreateBody"](NH);
        this["head1Body"]["AllowSleep" + "ing"](!0x1);
        this["head1Shape"] = this["head1Body"]["CreateShap" + 'e'](NL);
        this['head1Shape']["SetMateria" + 'l'](0x2);
        this["head1Shape"]["SetUserDat" + 'a'](this);
        this["_session"]["contactLis" + "tener"]["registerLi" + "stener"](qw['fI']["RESULT"], this["head1Shape"], this["contactRes" + "ultHandler"]);
        this["_session"]["contactLis" + 'tener']["registerLi" + 'stener'](q0['fI']["ADD"], this["head1Shape"], this["contactAdd" + "Handler"]);
        this["head1Body"]["SetMassFro" + "mShapes"]();
        this["paintVecto" + 'r']["push"](this["head1Body"]);
        NU = this["shapeGuide"]["pelvisShap" + 'e'];
        Nb["position"]["Set"](this["_startX"] + NU['x'] / this["character_" + "scale"], this['_startY'] + NU['y'] / this["character_" + 'scale']);
        Nb["angle"] = NU["rotation"] / q1["oneEightyO" + "verPI"];
        Nv["SetAsBox"](NU["scaleX"] * this["shapeRefSc" + "ale"] / this["character_" + "scale"], NU["scaleY"] * this["shapeRefSc" + "ale"] / this["character_" + "scale"]);
        this["pelvisBody"] = NF["CreateBody"](Nb);
        this["pelvisBody"]["AllowSleep" + "ing"](!0x1);
        this["pelvisShap" + 'e'] = this["pelvisBody"]["CreateShap" + 'e'](Nv);
        this["pelvisShap" + 'e']["SetMateria" + 'l'](0x2);
        this["pelvisShap" + 'e']["SetUserDat" + 'a'](this);
        this["_session"]["contactLis" + "tener"]["registerLi" + "stener"](q2['fI']["RESULT"], this["pelvisShap" + 'e'], this["contactRes" + "ultHandler"]);
        this["_session"]["contactLis" + "tener"]["registerLi" + "stener"](q3['fI']["ADD"], this["pelvisShap" + 'e'], this['contactAdd' + "Handler"]);
        this["pelvisBody"]["SetMassFro" + "mShapes"]();
        this["paintVecto" + 'r']["push"](this["pelvisBody"]);
        NU = this["shapeGuide"]["upperArm1S" + "hape"];
        NZ["position"]["Set"](this["_startX"] + NU['x'] / this["character_" + "scale"], this["_startY"] + NU['y'] / this["character_" + "scale"]);
        NZ['angle'] = NU['rotation'] / q4["oneEightyO" + "verPI"];
        Nv["SetAsBox"](NU['scaleX'] * this["shapeRefSc" + "ale"] / this["character_" + "scale"], NU["scaleY"] * this["shapeRefSc" + "ale"] / this["character_" + "scale"]);
        this["upperArm1B" + "ody"] = NF["CreateBody"](NZ);
        this["upperArm1B" + "ody"]["CreateShap" + 'e'](Nv);
        this["upperArm1B" + "ody"]['SetMassFro' + "mShapes"]();
        this["paintVecto" + 'r']["push"](this["upperArm1B" + 'ody']);
        NU = this["shapeGuide"]["upperArm2S" + "hape"];
        Nx["position"]["Set"](this["_startX"] + NU['x'] / this["character_" + "scale"], this["_startY"] + NU['y'] / this["character_" + 'scale']);
        Nx["angle"] = NU["rotation"] / q5["oneEightyO" + "verPI"];
        Nv["SetAsBox"](NU["scaleX"] * this["shapeRefSc" + 'ale'] / this["character_" + "scale"], NU["scaleY"] * this["shapeRefSc" + "ale"] / this["character_" + "scale"]);
        this["upperArm2B" + "ody"] = NF["CreateBody"](Nx);
        this["upperArm2B" + "ody"]["CreateShap" + 'e'](Nv);
        this['upperArm2B' + "ody"]['SetMassFro' + 'mShapes']();
        this["paintVecto" + 'r']["push"](this["upperArm2B" + "ody"]);
        NU = this["shapeGuide"]["upperLeg1S" + "hape"];
        Nc["position"]["Set"](this["_startX"] + NU['x'] / this['character_' + "scale"], this['_startY'] + NU['y'] / this["character_" + "scale"]);
        Nc["angle"] = NU["rotation"] / q6["oneEightyO" + 'verPI'];
        Nv["SetAsBox"](NU["scaleX"] * this["shapeRefSc" + 'ale'] / this["character_" + "scale"], NU["scaleY"] * this["shapeRefSc" + "ale"] / this["character_" + "scale"]);
        this["upperLeg1B" + "ody"] = NF['CreateBody'](Nc);
        this["upperLeg1B" + "ody"]["CreateShap" + 'e'](Nv);
        this["upperLeg1B" + "ody"]["SetMassFro" + "mShapes"]();
        this["paintVecto" + 'r']["push"](this["upperLeg1B" + "ody"]);
        NU = this['shapeGuide']["upperLeg2S" + "hape"];
        Na["position"]["Set"](this["_startX"] + NU['x'] / this["character_" + "scale"], this['_startY'] + NU['y'] / this["character_" + "scale"]);
        Na["angle"] = NU["rotation"] / q7["oneEightyO" + "verPI"];
        Nv["SetAsBox"](NU["scaleX"] * this["shapeRefSc" + "ale"] / this["character_" + "scale"], NU["scaleY"] * this["shapeRefSc" + 'ale'] / this["character_" + "scale"]);
        this["upperLeg2B" + "ody"] = NF["CreateBody"](Na);
        this["upperLeg2B" + "ody"]["CreateShap" + 'e'](Nv);
        this['upperLeg2B' + "ody"]["SetMassFro" + "mShapes"]();
        this['paintVecto' + 'r']["push"](this["upperLeg2B" + "ody"]);
        NU = this["shapeGuide"]["lowerArm1S" + "hape"];
        Ny['position']["Set"](this["_startX"] + NU['x'] / this["character_" + 'scale'], this["_startY"] + NU['y'] / this["character_" + 'scale']);
        Ny["angle"] = NU["rotation"] / q8['oneEightyO' + "verPI"];
        Nv["SetAsBox"](NU["scaleX"] * this["shapeRefSc" + 'ale'] / this['character_' + "scale"], NU["scaleY"] * this['shapeRefSc' + "ale"] / this["character_" + "scale"]);
        this["lowerArm1B" + "ody"] = NF["CreateBody"](Ny);
        this["lowerArm1S" + "hape"] = this["lowerArm1B" + "ody"]["CreateShap" + 'e'](Nv);
        this["lowerArm1B" + "ody"]["SetMassFro" + "mShapes"]();
        this["paintVecto" + 'r']["push"](this["lowerArm1B" + "ody"]);
        NU = this["shapeGuide"]["lowerArm2S" + "hape"];
        Nw["position"]["Set"](this["_startX"] + NU['x'] / this["character_" + "scale"], this["_startY"] + NU['y'] / this["character_" + "scale"]);
        Nw["angle"] = NU["rotation"] / q9["oneEightyO" + "verPI"];
        Nv['SetAsBox'](NU["scaleX"] * this['shapeRefSc' + "ale"] / this['character_' + "scale"], NU["scaleY"] * this["shapeRefSc" + "ale"] / this['character_' + 'scale']);
        this["lowerArm2B" + "ody"] = NF["CreateBody"](Nw);
        this["lowerArm2S" + "hape"] = this["lowerArm2B" + "ody"]["CreateShap" + 'e'](Nv);
        this["lowerArm2B" + "ody"]['SetMassFro' + "mShapes"]();
        this["paintVecto" + 'r']["push"](this["lowerArm2B" + "ody"]);
        NU = this["shapeGuide"]["lowerLeg1S" + "hape"];
        NX["position"]["Set"](this["_startX"] + NU['x'] / this["character_" + "scale"], this["_startY"] + NU['y'] / this['character_' + "scale"]);
        NX['angle'] = NU['rotation'] / qq["oneEightyO" + "verPI"];
        Nv["SetAsBox"](NU["scaleX"] * this["shapeRefSc" + 'ale'] / this["character_" + "scale"], NU["scaleY"] * this['shapeRefSc' + "ale"] / this["character_" + 'scale']);
        this["lowerLeg1B" + "ody"] = NF["CreateBody"](NX);
        this["lowerLeg1S" + "hape"] = this["lowerLeg1B" + "ody"]["CreateShap" + 'e'](Nv);
        this['_session']["contactLis" + 'tener']["registerLi" + "stener"](qn['fI']["RESULT"], this["lowerLeg1S" + "hape"], this['contactRes' + "ultHandler"]);
        this["lowerLeg1B" + "ody"]["SetMassFro" + "mShapes"]();
        this["paintVecto" + 'r']["push"](this["lowerLeg1B" + 'ody']);
        NU = this["shapeGuide"]["lowerLeg2S" + "hape"];
        NY["position"]["Set"](this["_startX"] + NU['x'] / this["character_" + "scale"], this["_startY"] + NU['y'] / this["character_" + "scale"]);
        NY["angle"] = NU["rotation"] / qN["oneEightyO" + "verPI"];
        Nv["SetAsBox"](NU['scaleX'] * this["shapeRefSc" + "ale"] / this["character_" + "scale"], NU["scaleY"] * this["shapeRefSc" + "ale"] / this["character_" + "scale"]);
        this['lowerLeg2B' + 'ody'] = NF["CreateBody"](NY);
        this["lowerLeg2S" + "hape"] = this["lowerLeg2B" + "ody"]["CreateShap" + 'e'](Nv);
        this['_session']['contactLis' + "tener"]["registerLi" + "stener"](qf['fI']["RESULT"], this["lowerLeg2S" + "hape"], this["contactRes" + "ultHandler"]);
        this["lowerLeg2B" + "ody"]['SetMassFro' + "mShapes"]();
        this["paintVecto" + 'r']["push"](this["lowerLeg2B" + "ody"]);
        NU = this["shapeGuide"]["intestineS" + "hape"];
        this["intestineL" + 'ength'] = NU["width"];
        NU = this["shapeGuide"]["ligamentSh" + "ape"];
        this["ligamentLe" + "ngth"] = NU["width"];
        NU = this["shapeGuide"]['headChunkS' + "hape"];
        this["headChunkR" + "adius"] = NU["width"] / 0x2;
        NU = this["shapeGuide"]["chestChunk" + "Shape"];
        this['chestChunk' + "Radius"] = NU["width"] / 0x2;
        NU = this["shapeGuide"]["pelvisChun" + "kShape"];
        this["pelvisChun" + "kRadius"] = NU["width"] / 0x2;
      } else {
        return this;
      }
    }), No);
    var NS = ND["prototype"] = Nr["prototype"] = Object["create"](Ng);
    function Nd(Nz) {
      Object['setPrototy' + "peOf"] ? Object["setPrototy" + "peOf"](Nz, ND) : (Nz["__proto__"] = ND, N5(Nz, NR, 'GeneratorF' + "unction"));
      Nz["prototype"] = Object["create"](NS);
      return Nz;
    }
    NJ['prototype'] = ND;
    N5(NS, "constructo" + 'r', ND);
    N5(ND, 'constructo' + 'r', NJ);
    NJ["displayNam" + 'e'] = "GeneratorF" + "unction";
    N5(ND, NR, "GeneratorF" + "unction");
    N5(NS);
    N5(NS, NR, "Generator");
    N5(NS, NE, function () {
      return this;
    });
    N5(NS, "toString", function () {
      return "Dkbqs" !== "amJCX" ? "[object Ge" + "nerator]" : this["_session"];
    });
    return (N4 = function () {
      return {
        'w': NW,
        'm': Nd
      };
    })();
  }
  function N5(Nl, No, Ni, NE) {

    var NR = Object["defineProp" + 'erty'];
    try {
      if ('PvNxI' !== 'TrINv') {
        NR({}, '', {});
      } else {
        var NA = qR["parse"](qz["stringify"](q8));
        NA["wordWrapWi" + "dth"] = qI;
        return NA;
      }
    } catch (NA) {
      NR = 0x0;
    }
    N5 = function (Nr, NJ, ND, Ng) {

      if ("yGPuh" === "QTqeM") {
        qT["__proto__"] = qR;
        return qz;
      } else {
        function Nd(Nz, NF) {

          "wuPWq" !== 'pQMYi' ? N5(Nr, Nz, function (NM) {
            return this["_invoke"](Nz, NF, NM);
          }) : this["startTime"] = q6['now']();
        }
        NJ ? NR ? NR(Nr, NJ, {
          'value': ND,
          'enumerable': !Ng,
          'configurable': !Ng,
          'writable': !Ng
        }) : Nr[NJ] = ND : (Nd("next", 0x0), Nd("throw", 0x1), Nd("return", 0x2));
      }
    };
    N5(Nl, No, Ni, NE);
  }
  function N6(Nl, No, Ni, NE, NR, NW, NA) {


    try {
      var Nr = Nl[NW](NA);
      var NJ = Nr["value"];
    } catch (ND) {
      return void Ni(ND);
    }
    Nr["done"] ? No(NJ) : Promise["resolve"](NJ)["then"](NE, NR);
  }
  function N7(Nl) {


    if ("pEvtI" !== "pEvtI") {
      qN['Z']({
        'category': "debug",
        'message': "assets (wi" + "th audio) " + "loaded",
        'level': "debug"
      });
      var NE = new qc['Yw']();
      NE["test"]();
      qV['w']["architectu" + 're'] = NE["result"];
      qE["tempGameSc" + "reen"] = new ql(q3["options"], No["renderer"]);
      qs["screenMana" + "ger"]["addScreen"](qf["tempGameSc" + "reen"], "TempGameSc" + "ene");
      q9["screenMana" + "ger"]["gotoScreen"]("TempGameSc" + "ene");
    } else {
      var No = function (NE) {
        if ("jyNTy" !== "jgRxh") {
          if ("object" != typeof NE || !NE) {
            return NE;
          }
          var NR = NE[Symbol["toPrimitiv" + 'e']];
          if (void 0x0 !== NR) {
            if ('DLFqn' === "RFtSq") {
              if (this["useDebugge" + 'r']) {
                this["debug_spri" + 'te'] = new qF['kx']();
                this["addChild"](this["debug_spri" + 'te']);
                this["useDebugge" + 'r'] = !0x0;
                this['createText' + "Field"]();
                this["createWorl" + 'd']();
                this["createBodi" + 'es']();
                this["runBind"] = this["run"]["bind"](this);
                this["addEventLi" + "stener"](qT['Jh']["ENTER_FRAM" + 'E'], this["runBind"]);
              } else {
                this["createWorl" + 'd']();
                this['createBodi' + 'es']();
                this["frames"] = 0x0;
                for (; this["frames"] <= this['totalFrame' + 's']; this["frames"]++) {
                  this["m_world"]["Step"](this["m_timeStep"], this["m_iteratio" + 'ns']);
                }
              }
            } else {
              var NW = NR["call"](NE, 'string');
              if ("object" != typeof NW) {
                return NW;
              }
              throw new TypeError("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
            }
          }
          return String(NE);
        } else {
          if (this["_levelItem"]["triggerRep" + 'eatActivat' + "ion"](this["_trigger"], this["_targetAct" + 'ion'], this["_propertie" + 's'], this["counter"])) {
            qF['w']["currentSes" + "sion"]["levelVersi" + 'on'] > 1.8 && (this["counter"] = 0x0);
            return void qT['w']["currentSes" + "sion"]["level"]["removeFrom" + 'ActionsVec' + "tor"](this);
          }
          this["counter"] += 0x1;
        }
      }(Nl);
      return "symbol" == typeof No ? No : No + '';
    }
  }
  function N8(Nl, No) {


    N8 = Object["setPrototy" + "peOf"] ? Object['setPrototy' + "peOf"]["bind"]() : function (Ni, NE) {
      Ni["__proto__"] = NE;
      return Ni;
    };
    return N8(Nl, No);
  }
  var N9 = function (Nl) {

    function No(Nr) {
      if ("TEazM" === "yLGEG") {
        qz(NR, qI, function (Ng) {

          return this["_invoke"](qN, qc, Ng);
        });
      } else {
        var NJ;
        (NJ = Nl["call"](this) || this)["_replayID"] = -0x1;
        NJ["_levelID"] = -0x1;
        NJ['_userID'] = 0x0;
        NJ["levelLoadC" + "ompleteBin" + 'd'] = NJ["levelLoadC" + 'omplete']['bind'](NJ);
        NJ["replayLoad" + "CompleteBi" + 'nd'] = NJ["replayLoad" + "Complete"]["bind"](NJ);
        NJ["openEditor" + "Bind"] = NJ["openEditor"]["bind"](NJ);
        NJ["receiveSes" + 'sionFromMa' + "inMenuBind"] = NJ["receiveSes" + 'sionFromMa' + 'inMenu']["bind"](NJ);
        NJ['closeEdito' + 'rBind'] = NJ["closeEdito" + 'r']["bind"](NJ);
        NJ["closeSessi" + "onControll" + "erBind"] = NJ['closeSessi' + "onControll" + 'er']["bind"](NJ);
        NJ["openDeepLi" + "nkBind"] = NJ["openDeepLi" + 'nk']["bind"](NJ);
        NJ["charIndex"] = 0x1;
        return NJ;
      }
    }
    var Ni;
    var NE;
    NE = Nl;
    (Ni = No)['prototype'] = Object["create"](NE['prototype']);
    Ni['prototype']["constructo" + 'r'] = Ni;
    N8(Ni, NE);
    No["playLevel"] = function (Nr) {
      var NJ;
      null === (NJ = No['deepLinkBi' + 'nd']) || void 0x0 === NJ || NJ['call'](No, {
        'kind': "level",
        'id': Nr
      });
    };
    var NR;
    var NW;
    var NA = No["prototype"];
    NA["init"] = function () {
      this['_readOnly'] && (q6['w']['disableUpl' + "oad"] = !0x0);
      if (window["HW_SETTING" + 'S']) {
        for (var Nr in window["HW_SETTING" + 'S']) {
          q6['w'][Nr] = window["HW_SETTING" + 'S'][Nr];
        }
        window["HW_SETTING" + 'S']["user_id"] && (this["_userID"] = window["HW_SETTING" + 'S']["user_id"], this["_userName"] = window['HW_SETTING' + 'S']["username"]);
      }
      this['createDebu' + "gText"]();
      this["createBord" + 'erCover']();
      this["initSettin" + "gsAndEnter" + "Session"]();
    };
    NA["initSettin" + 'gsAndEnter' + "Session"] = function () {

      var Nr;
      var NJ;
      var ND;
      var Ng;
      var NS;
      var Nd;
      var Nz;
      var NF;
      var NM;
      var NH = this;
      var Nb = q6['w']["sharedObje" + 'ct'];
      Nb["data"]["keyCodes"] ? (q6['w']["accelerate" + "Code"] = Nb["data"]["keyCodes"]["accelerate" + "Code"], q6['w']["decelerate" + "Code"] = Nb["data"]["keyCodes"]["decelerate" + "Code"], q6['w']["leanForwar" + "dCode"] = Nb["data"]['keyCodes']["leanForwar" + "dCode"], q6['w']["leanBackCo" + 'de'] = Nb["data"]["keyCodes"]["leanBackCo" + 'de'], q6['w']["primaryAct" + 'ionCode'] = Nb["data"]["keyCodes"]["primaryAct" + "ionCode"], q6['w']['secondaryA' + "ction1Code"] = Nb["data"]["keyCodes"]["secondaryA" + 'ction1Code'], q6['w']["secondaryA" + "ction2Code"] = Nb["data"]['keyCodes']['secondaryA' + "ction2Code"], q6['w']["ejectCode"] = Nb["data"]['keyCodes']["ejectCode"], q6['w']["switchCame" + 'raCode'] = Nb["data"]["keyCodes"]["switchCame" + "raCode"]) : (Nb['data']['keyCodes'] = {}, Nb["data"]["keyCodes"]["accelerate" + "Code"] = q6['w']["accelerate" + "DefaultCod" + 'e'], Nb["data"]["keyCodes"]["decelerate" + "Code"] = q6['w']["decelerate" + "DefaultCod" + 'e'], Nb["data"]["keyCodes"]["leanForwar" + "dCode"] = q6['w']["leanForwar" + 'dDefaultCo' + 'de'], Nb["data"]["keyCodes"]["leanBackCo" + 'de'] = q6['w']["leanBackDe" + 'faultCode'], Nb["data"]["keyCodes"]["primaryAct" + "ionCode"] = q6['w']["primaryAct" + "ionDefault" + "Code"], Nb["data"]["keyCodes"]["secondaryA" + 'ction1Code'] = q6['w']["secondaryA" + "ction1Defa" + "ultCode"], Nb["data"]["keyCodes"]["secondaryA" + "ction2Code"] = q6['w']["secondaryA" + "ction2Defa" + "ultCode"], Nb['data']["keyCodes"]['ejectCode'] = q6['w']["ejectDefau" + "ltCode"], Nb['data']["keyCodes"]["switchCame" + "raCode"] = q6['w']["switchCame" + "raDefaultC" + "ode"], Nb["flush"]());
      null != Nb['data']["renderReso" + "lutionIncr" + "ease"] && (q6['w']["renderReso" + "lutionIncr" + "ease"] = Nb["data"]["renderReso" + "lutionIncr" + "ease"]);
      null != Nb["data"]['use60FPS'] && (q6['w']["use60FPS"] = Nb["data"]["use60FPS"], q5['b0']['maxFPS'] = q6['w']["use60FPS"] ? 0x3c : 0x1e);
      null != Nb["data"]["textureRes" + "olution"] && (q6['w']["textureRes" + "olution"] = Nb["data"]["textureRes" + "olution"]);
      null != Nb["data"]["maxParticl" + 'es'] && (q7['h']["maxParticl" + 'es'] = Nb["data"]["maxParticl" + 'es']);
      null != Nb["data"]["bloodSetti" + 'ng'] && (q6['w']["bloodSetti" + 'ng'] = Nb["data"]["bloodSetti" + 'ng']);
      N3['e']["isTickBoun" + 'd'] = function () {
        if ("NZoYe" !== "HgWdB") {
          return !(!q6['w']["currentSes" + "sion"] || q6['w']["currentSes" + "sion"] instanceof N2['v'] || NH["sessionCon" + 'troller'] && NH['sessionCon' + "troller"]["menuActive"]);
        } else {
          var Ny = this["getChildIn" + "dex"](this["selectedLi" + "stItem"]) + 0x1;
          this["levelSelec" + "tion"] = new qN(this["selectedLi" + "stItem"]["levelDataO" + "bject"]);
          this["levelSelec" + "tion"]["addEventLi" + "stener"](qc['$T']["SESSION"], this["cloneAndDi" + "spatchEven" + 't']);
          this["levelSelec" + "tion"]['addEventLi' + "stener"](qV['$T']["EDITOR"], this["cloneAndDi" + "spatchEven" + 't']);
          this["levelSelec" + "tion"]["addEventLi" + 'stener'](qE['$T']["REPLAY_BRO" + "WSER"], this["cloneAndDi" + "spatchEven" + 't']);
          this["levelSelec" + "tion"]["addEventLi" + "stener"](ql['dg']["USER"], this["cloneAndDi" + "spatchEven" + 't']);
          this["levelSelec" + 'tion']["addEventLi" + 'stener'](q3['dg']["FLAG"], this['cloneAndDi' + "spatchEven" + 't']);
          this["levelSelec" + "tion"]["addEventLi" + "stener"](q1['dg']["ADD_TO_FAV" + "ORITES"], this["cloneAndDi" + "spatchEven" + 't']);
          this["levelSelec" + 'tion']["addEventLi" + "stener"](qs['dg']['REMOVE_FRO' + 'M_FAVORITE' + 'S'], this['cloneAndDi' + "spatchEven" + 't']);
          this["addChildAt"](this["levelSelec" + "tion"], Ny);
          this["levelSelec" + "tion"]["maskHeight"] = 0x0;
          this["opening"] = !0x0;
          qf['os']['to'](this, {
            'duration': this["tweenTime"],
            'tweenVal': 0x1,
            'ease': q9['MI']["easeInOut"],
            'onComplete': this["openComple" + 'te']
          });
        }
      };
      this["mouseHelpe" + 'r'] = new q3['uO']();
      this["addChild"](this["mouseHelpe" + 'r']);
      NJ = 'h' + (([] < [+[]]) + [][(([] < []) + [])[+[]] + (([] < []) + [])[([] < [+[]]) + ([] < [+[]])] + (([] < []) + [])[+([] < [+[]])] + (([] < [+[]]) + [])[+[]]])[+([] < [+[]]) + [+[]]] + (([] < []) + [])[([] < [+[]]) + ([] < [+[]]) + ([] < [+[]])] + (([] < [+[]]) + [])[+[]] + ([][[]] + [])[+([] < [+[]])] + (([] < []) + [])[+([] < [+[]])] + 'me';
      ND = (([] < [+[]]) + [])[+[]] + (([] < [+[]]) + [][(([] < []) + [])[+[]] + (([] < []) + [])[([] < [+[]]) + ([] < [+[]])] + (([] < []) + [])[+([] < [+[]])] + (([] < [+[]]) + [])[+[]]])[+([] < [+[]]) + [+[]]] + (([] < [+[]]) + [])[+[]] + (([] < []) + [])[+([] < [+[]])] + (([] < []) + [])[([] < [+[]]) + ([] < [+[]])] + 'j' + (([] < [+[]]) + [])[([] < [+[]]) + ([] < [+[]]) + ([] < [+[]])] + (([] < [+[]]) + [])[+([] < [+[]])] + 'k' + (([] < []) + [])[+[]] + (([] < []) + [])[+([] < [+[]])] + ([][(([] < []) + [])[+[]] + (([] < []) + [])[([] < [+[]]) + ([] < [+[]])] + (([] < []) + [])[+([] < [+[]])] + (([] < [+[]]) + [])[+[]]] + [])[([] < [+[]]) + ([] < [+[]]) + ([] < [+[]])] + (([] < [+[]]) + [])[([] < [+[]]) + ([] < [+[]]) + ([] < [+[]])] + (Nr = (+([+([] < [+[]])] + [+([] < [+[]])] + (([] < [+[]]) + [])[([] < [+[]]) + ([] < [+[]]) + ([] < [+[]])] + [([] < [+[]]) + ([] < [+[]])] + [+[]]) + [])[+([] < [+[]])]) + ([][(([] < []) + [])[+[]] + (([] < []) + [])[([] < [+[]]) + ([] < [+[]])] + (([] < []) + [])[+([] < [+[]])] + (([] < [+[]]) + [])[+[]]] + [])[([] < [+[]]) + ([] < [+[]]) + ([] < [+[]])] + (([] < [+[]]) + [][(([] < []) + [])[+[]] + (([] < []) + [])[([] < [+[]]) + ([] < [+[]])] + (([] < []) + [])[+([] < [+[]])] + (([] < [+[]]) + [])[+[]]])[+([] < [+[]]) + [+[]]] + 'm';
      Ng = (([] < []) + [])[([] < [+[]]) + ([] < [+[]]) + ([] < [+[]])] + 'p' + (([] < []) + [])[([] < [+[]]) + ([] < [+[]])] + ([[] < []] + [][[]])[+([] < [+[]]) + [+[]]] + (([] < [+[]]) + [])[+[]];
      NS = (([] < [+[]]) + [])[+([] < [+[]])] + (([] < [+[]]) + [])[([] < [+[]]) + ([] < [+[]]) + ([] < [+[]])] + 'v' + (([] < [+[]]) + [])[([] < [+[]]) + ([] < [+[]]) + ([] < [+[]])] + (([] < [+[]]) + [])[+([] < [+[]])] + (([] < []) + [])[([] < [+[]]) + ([] < [+[]]) + ([] < [+[]])] + (([] < [+[]]) + [])[([] < [+[]]) + ([] < [+[]]) + ([] < [+[]])];
      Nd = (([] < []) + [])[([] < [+[]]) + ([] < [+[]]) + ([] < [+[]])] + 'p' + (([] < []) + [])[([] < [+[]]) + ([] < [+[]])] + ([[] < []] + [][[]])[+([] < [+[]]) + [+[]]] + ([][(([] < []) + [])[+[]] + (([] < []) + [])[([] < [+[]]) + ([] < [+[]])] + (([] < []) + [])[+([] < [+[]])] + (([] < [+[]]) + [])[+[]]] + [])[([] < [+[]]) + ([] < [+[]]) + ([] < [+[]])] + (([] < [+[]]) + [])[([] < [+[]]) + ([] < [+[]]) + ([] < [+[]])];
      Nz = 'j' + (([] < [+[]]) + [][(([] < []) + [])[+[]] + (([] < []) + [])[([] < [+[]]) + ([] < [+[]])] + (([] < []) + [])[+([] < [+[]])] + (([] < [+[]]) + [])[+[]]])[+([] < [+[]]) + [+[]]] + ([[] < []] + [][[]])[+([] < [+[]]) + [+[]]] + ([][[]] + [])[+([] < [+[]])];
      NF = parseInt([+[]] + []);
      NM = parseInt([([] < [+[]]) + ([] < [+[]])] + []);
      location[NJ][Ng](Nr)[NS]()[Nd](NF, NM)[NS]()[Nz](Nr) === ND && this["enterSessi" + 'on']();
    };
    NA["createDebu" + "gText"] = function () {
      if ("BCWkT" === "VAkaN") {
        return this["_levelVers" + 'ion'];
      } else {
        var Nr = q6['w']['debugText'] = new qj['V1']();
        this["addChild"](Nr);
        (q6['w']['hideHUD'] || void 0x0 !== window["HW_SETTING" + 'S']["cameraMode"]) && (Nr['visible'] = !0x1);
      }
    };
    NA['createBord' + "erCover"] = function () {
      this["borderCove" + 'r'] = new q5['kx']();
      var Nr = new Array();
      var NJ = new Array();
      this["borderCove" + 'r']["graphics"]['beginFill'](0x0, 0x1);
      NJ["push"](-0x1f4, -0x1f4);
      NJ["push"](0x578, -0x1f4);
      NJ['push'](0x578, 0x3e8);
      NJ["push"](-0x1f4, 0x3e8);
      NJ["push"](-0x1f4, -0x1f4);
      Nr["push"](q5['e']["MOVE_TO"]);
      Nr["push"](q5['e']["LINE_TO"]);
      Nr["push"](q5['e']['LINE_TO']);
      Nr["push"](q5['e']['LINE_TO']);
      Nr["push"](q5['e']["LINE_TO"]);
      NJ["push"](0x0, 0x0);
      NJ["push"](0x0, 0x1f4);
      NJ["push"](0x384, 0x1f4);
      NJ["push"](0x384, 0x0);
      NJ["push"](0x0, 0x0);
      Nr["push"](q5['e']["MOVE_TO"]);
      Nr["push"](q5['e']["LINE_TO"]);
      Nr["push"](q5['e']['LINE_TO']);
      Nr["push"](q5['e']["LINE_TO"]);
      Nr["push"](q5['e']["LINE_TO"]);
      this["borderCove" + 'r']["graphics"]["drawPath"](Nr, NJ, q5['tl']["NON_ZERO"]);
      this["borderCove" + 'r']["graphics"]["endFill"]();
    };
    NA["enterSessi" + 'on'] = function () {
      this["_userID"] > 0x0 && (q6['w']["user_id"] = this["_userID"], q6['w']["username"] = this['_userName']);
      -0x1 !== this["_levelID"] ? this["loadLevelB" + "yID"](this['_levelID']) : -0x1 !== this["_replayID"] ? this["loadReplay" + "ByID"](this["_replayID"]) : this["openMainMe" + 'nu']();
    };
    NA["loadLevelB" + "yID"] = function (Nr) {
      var NJ = new qo['YI']();
      NJ["addEventLi" + "stener"](qo['YI']["LEVEL_LOAD" + 'ED'], this["levelLoadC" + "ompleteBin" + 'd']);
      NJ["addEventLi" + "stener"](qo['YI']["ID_NOT_FOU" + 'ND'], this["levelLoadC" + "ompleteBin" + 'd']);
      NJ["addEventLi" + "stener"](qo['YI']["LOAD_ERROR"], this["levelLoadC" + "ompleteBin" + 'd']);
      NJ['load'](Nr);
    };
    NA["loadReplay" + "ByID"] = function (Nr) {
      if ("JfHtf" === "ubInX") {
        var Ng = q3["GetAngle"]() + NJ['PI'] / 0x2;
        var NS = new qs['iE']();
        NS["motorSpeed"] = this["getPrisJoi" + "ntSpeed"](qf, NW, q5);
        NS["enableMoto" + 'r'] = !0x0;
        NS["maxMotorFo" + "rce"] = 0x3e8;
        var Nd = this["frameBody"]["GetWorldPo" + "int"](Ni);
        var Nz = qB['GetLocalPo' + "int"](Nd);
        Nz['y'] = this["railJointY"];
        NS["Initialize"](qW, qH, qk["GetWorldPo" + "int"](Nz), new NE['RM'](-qJ["sin"](Ng), qr["cos"](Ng)));
        NS["enableMoto" + 'r'] = !0x1;
        NS["localAncho" + 'r1'] = new qj['RM'](0x0, 0x0);
        NS["localAncho" + 'r2'] = Nz;
        return this["_session"]['m_world']['CreateJoin' + 't'](NS);
      } else {
        var NJ = new qo['PL']();
        NJ["addEventLi" + "stener"](qo['PL']['REPLAY_AND' + "_LEVEL_LOA" + "DED"], this["replayLoad" + "CompleteBi" + 'nd']);
        NJ['addEventLi' + "stener"](qo['PL']["ID_NOT_FOU" + 'ND'], this['replayLoad' + "CompleteBi" + 'nd']);
        NJ["addEventLi" + "stener"](qo['PL']["LOAD_ERROR"], this["replayLoad" + "CompleteBi" + 'nd']);
        NJ["load"](Nr);
      }
    };
    NA["openDeepLi" + 'nk'] = function (Nr) {};
    NA["levelLoadC" + "omplete"] = function (Nr) {
      if ("tuPNB" !== "tuPNB") {
        void 0x0 === qy && (qg = null);
        qu['yg']["resetIdCou" + "nter"]();
        qd['tD']["resetIdCou" + "nter"]();
        for (var Ng = qm["canvas"]["shapes"]["numChildre" + 'n']; Ng > 0x0; Ng--) {
          qa["canvas"]["shapes"]['getChildAt'](Ng - 0x1)["deleteSelf"](qh["canvas"]);
        }
        for (var NS = NA["canvas"]["special"]["numChildre" + 'n']; NS > 0x0; NS--) {
          qZ["canvas"]["special"]["getChildAt"](NS - 0x1)["deleteSelf"](qo['canvas']);
        }
        for (var Nd = qK["canvas"]["groups"]["numChildre" + 'n']; Nd > 0x0; Nd--) {
          Nr["canvas"]["groups"]["getChildAt"](Nd - 0x1)['deleteSelf'](q7["canvas"]);
        }
        for (var Nz = qb['canvas']["joints"]["numChildre" + 'n']; Nz > 0x0; Nz--) {
          qC['canvas']['joints']["getChildAt"](Nz - 0x1)["deleteSelf"](qt["canvas"]);
        }
        for (var NF = qM["canvas"]['triggers']["numChildre" + 'n']; NF > 0x0; NF--) {
          qi['canvas']['triggers']["getChildAt"](NF - 0x1)["deleteSelf"](qD["canvas"]);
        }
        qw["canvas"]["startPlace" + "Holder"]['x'] = 0x12c;
        q0["canvas"]["startPlace" + "Holder"]['y'] = 0x64 + q1['H']['canvasHeig' + 'ht'] / 0x2;
        q2["currentZoo" + 'm'] = 0x0;
        q3["canvasHold" + 'er']['scaleX'] = q4["canvasHold" + 'er']["scaleY"] = 0x1;
        q5["canvasHold" + 'er']['x'] = 0x0;
        q6["canvasHold" + 'er']['y'] = -q7['H']['canvasHeig' + 'ht'] / 0x2;
        q8["horizontal" + "Scroller"]["updateScro" + "llTab"]();
        q9["verticalSc" + "roller"]["updateScro" + "llTab"]();
        qq["actionReco" + 'rder']["clearActio" + 'ns']();
        delete qn['w']["sharedObje" + 'ct']['data']["editorLeve" + "lData"];
      } else {
        var NJ = Nr["target"];
        NJ['removeEven' + "tListener"](qo['YI']["LEVEL_LOAD" + 'ED'], this["levelLoadC" + "ompleteBin" + 'd']);
        NJ["removeEven" + "tListener"](qo['YI']['ID_NOT_FOU' + 'ND'], this["levelLoadC" + "ompleteBin" + 'd']);
        NJ["removeEven" + "tListener"](qo['YI']["LOAD_ERROR"], this["levelLoadC" + "ompleteBin" + 'd']);
        NJ["die"]();
        Nr["type"] == qo['YI']["ID_NOT_FOU" + 'ND'] || Nr['type'] == qo['YI']["LOAD_ERROR"] ? this["openMainMe" + 'nu']() : (N1["setCurrent" + "Menu"](N1["LEVEL_BROW" + "SER"]), n7["importLeve" + "lDataArray"]([NJ["levelDataO" + 'bject']]), this["openSessio" + "nControlle" + 'r'](NJ["levelDataO" + "bject"], null));
      }
    };
    NA["replayLoad" + "Complete"] = function (Nr) {
      var NJ = Nr["target"];
      NJ["removeEven" + "tListener"](qo['PL']["REPLAY_AND" + "_LEVEL_LOA" + "DED"], this["replayLoad" + "CompleteBi" + 'nd']);
      NJ["removeEven" + "tListener"](qo['PL']["ID_NOT_FOU" + 'ND'], this["replayLoad" + "CompleteBi" + 'nd']);
      NJ["removeEven" + 'tListener'](qo['PL']["LOAD_ERROR"], this["replayLoad" + "CompleteBi" + 'nd']);
      NJ["die"]();
      Nr["type"] == qo['PL']["ID_NOT_FOU" + 'ND'] ? this["openMainMe" + 'nu']() : (N1['setCurrent' + "Menu"](N1["REPLAY_BRO" + "WSER"]), n7["importLeve" + "lDataArray"]([NJ["levelDataO" + "bject"]]), nv["importRepl" + "ayDataArra" + 'y']([NJ["replayData" + "Object"]], NJ['levelDataO' + "bject"]), this["openSessio" + "nControlle" + 'r'](NJ["levelDataO" + "bject"], NJ["replayData" + "Object"]));
    };
    NA["openMainMe" + 'nu'] = function () {
      if ("eJkLY" === 'eJkLY') {
        this["mainMenu"] = new N1();
        this["addChildAt"](this["mainMenu"], 0x0);
        this["mainMenu"]["init"]();
        this['mainMenu']["addEventLi" + "stener"](qu['$T']["EDITOR"], this['openEditor' + "Bind"]);
        this["mainMenu"]["addEventLi" + "stener"](qu['$T']["SESSION"], this["receiveSes" + 'sionFromMa' + "inMenuBind"]);
      } else {
        if (qc['w']["currentlyI" + "nEditor"]) {
          this["graphics"]["clear"]();
          if ((this["_selected"] || !qB['w']["editorHide" + "Arms"] || this["forceArmDr" + "awing"]) && (this["graphics"]['lineStyle'](0x0, 0xff6600), this["_body1"] && (this["graphics"]["moveTo"](0x0, 0x0), this["graphics"]['lineTo'](this["body1"]['x'] - this['x'], this["body1"]['y'] - this['y'])), this["body2"] && (this["graphics"]["moveTo"](0x0, 0x0), this["graphics"]["lineTo"](this["body2"]['x'] - this['x'], this["body2"]['y'] - this['y'])), this["_limit"])) {
            this["graphics"]["lineStyle"](0x0, 0xff6600, 0.7);
            var NJ = new qy['RM'](-this["_lowerLimi" + 't'], 0x0);
            var ND = new qg['RM'](-this["_upperLimi" + 't'], 0x0);
            var Ng = new qu['LJ'](this["axisAngle"] * qd['PI'] / 0xb4);
            NJ["MulM"](Ng);
            ND["MulM"](Ng);
            var NS = new qm['RM'](ND['x'] - NJ['x'], ND['y'] - NJ['y']);
            var Nd = NS["Length"]();
            var Nz = new qa['RM'](NS['x'] / Nd, NS['y'] / Nd);
            var NF = 0x6;
            var NM = 0x6;
            var NH = (Nd - NF) / (NF + NM);
            var Nb = qh['ceil'](NH);
            var NZ = NH / Nb;
            NF *= NZ;
            NM *= NZ;
            Nb++;
            var Ny = NJ['x'];
            var Nc = NJ['y'];
            var NX = new NA['RM'](-0x19, 0x0);
            var Nx = new qZ['RM'](0x19 + NF, 0x0);
            (this['axisAngle'] < -0x5a || this["_axisAngle"] > 0x5a) && (NX['x'] = Nx['x'], Nx['x'] = -0x19);
            NX["MulM"](Ng);
            Nx["MulM"](Ng);
            for (var Nw = 0x0; Nw < Nb; Nw++) {
              (Ny < NX['x'] || Ny > Nx['x']) && (this["graphics"]["moveTo"](Ny, Nc), this["graphics"]["lineTo"](Ny + Nz['x'] * NF, Nc + Nz['y'] * NF));
              Ny += Nz['x'] * (NF + NM);
              Nc += Nz['y'] * (NF + NM);
            }
            this["graphics"]["moveTo"](NJ['x'] - 0xa * Nz['y'], NJ['y'] + 0xa * Nz['x']);
            this["graphics"]["lineTo"](NJ['x'] + 0xa * Nz['y'], NJ['y'] - 0xa * Nz['x']);
            this["graphics"]["moveTo"](ND['x'] - 0xa * Nz['y'], ND['y'] + 0xa * Nz['x']);
            this["graphics"]['lineTo'](ND['x'] + 0xa * Nz['y'], ND['y'] - 0xa * Nz['x']);
          }
          this['_selected'] && this['drawBoundi' + "ngBox"]();
          this["invalidate" + "LocalBound" + 's']();
        }
      }
    };
    NA["closeMainM" + "enu"] = function () {
      this["mainMenu"] && (this["mainMenu"]['die'](), this["removeChil" + 'd'](this['mainMenu']), this["mainMenu"]['removeEven' + "tListener"](qu['$T']["EDITOR"], this['openEditor' + 'Bind']), this["mainMenu"]["removeEven" + "tListener"](qu['$T']["SESSION"], this["receiveSes" + 'sionFromMa' + "inMenuBind"]), this["mainMenu"] = null);
    };
    NA["openEditor"] = function () {
      var Nr;
      Nr = N4()['m'](function ND(Ng) {
        if ("AmPWk" === "CNxQR") {
          this["count"]++;
          qR["totalParti" + 'cles'] += 0x1;
          var NM = qz["random"]() * this["speedRange"] + this["minSpeed"];
          var NH = this["targetBody"]["GetInterpo" + "latedAngle"]() + this["angle"];
          var Nb = this["targetBody"]["GetLinearV" + "elocityFro" + "mLocalPoin" + 't'](this["offSet"]);
          var NZ = NR["cos"](NH) * NM + Nb['x'];
          var Ny = qI["sin"](NH) * NM + Nb['y'];
          var Nc = this["targetBody"]["GetInterpo" + "latedWorld" + 'Point'](this["offSet"]);
          var NX = new this["particleCl" + "ass"](this["_container"], Nc['x'] * this['m_physScal' + 'e'], Nc['y'] * this["m_physScal" + 'e'], NZ, Ny);
          NX["next"] = this["particleLi" + 'st'];
          this["particleLi" + 'st'] && (this["particleLi" + 'st']["prev"] = NX);
          this["particleLi" + 'st'] = NX;
        } else {
          var NS;
          var Nd;
          var Nz;
          return N4()['w'](function (NM) {


            if ('HPvAr' === "pzQYZ") {
              NR = qI["setPrototy" + 'peOf'] ? qS['setPrototy' + "peOf"]["bind"]() : function (Nb, NZ) {
                Nb["__proto__"] = NZ;
                return Nb;
              };
              return qA(qN, qc);
            } else {
              for (;;) {
                switch (NM['n']) {
                  case 0x0:
                    this["closeMainM" + 'enu']();
                    Ng["levelDataO" + "bject"] && (NS = Ng["levelDataO" + "bject"]);
                    Nd = q6['w']["useDebug"] && q6['w']["debugOptio" + 'ns']["editorDebu" + "gDraw"];
                    Nz = q6['w']["useDebug"] && q6['w']["debugOptio" + 'ns']["editorTest" + "ingMode"];
                    q6['w']["currentlyI" + "nEditor"] = !0x0;
                    this["editor"] = new q3['KE'](NS, Nd, Nz);
                    q6['w']['editor'] = this["editor"];
                    this["addChildAt"](this["editor"], 0x0);
                    this["editor"]["init"]();
                    this["editor"]["addEventLi" + "stener"](qu['$T']["MAIN_MENU"], this["closeEdito" + "rBind"]);
                  case 0x1:
                    return NM['a'](0x2);
                }
              }
            }
          }, ND, this);
        }
      });
      function NJ() {
        var Ng = this;
        var NS = arguments;
        return new Promise(function (Nd, Nz) {
          var NF = Nr["apply"](Ng, NS);
          function NM(Nb) {


            "xYpDu" === "xYpDu" ? N6(NF, Nd, Nz, NM, NH, "next", Nb) : (T["length"] == V["length"] || h["indexOf"]('.') === 0x0) && (j = !![]);
          }
          function NH(Nb) {


            "IfcAI" === "jWdjd" ? qz(q8, qI, function (Ny) {
              return this["_invoke"](qN, qc, Ny);
            }) : N6(NF, Nd, Nz, NM, NH, "throw", Nb);
          }
          NM(void 0x0);
        });
      }
      return function (Ng) {
        return 'Uddnu' !== "Uddnu" ? this["_screenMot" + 'ion'] : NJ['apply'](this, arguments);
      };
    }();
    NA["closeEdito" + 'r'] = function (Nr) {
      this["editor"]["die"]();
      this["removeChil" + 'd'](this['editor']);
      this["editor"]["removeEven" + "tListener"](qu['$T']["MAIN_MENU"], this["closeEdito" + "rBind"]);
      this["editor"] = null;
      q6['w']["editor"] = null;
      q6['w']["currentlyI" + "nEditor"] = !0x1;
      this["openMainMe" + 'nu']();
    };
    NA["openSessio" + "nControlle" + 'r'] = function (Nr, NJ) {
      if ("klpsw" === "klpsw") {
        void 0x0 === NJ && (NJ = null);
        this["sessionCon" + 'troller'] = new qo['xF'](this, Nr, NJ);
        this['sessionCon' + "troller"]["addEventLi" + "stener"](qu['$T']["MAIN_MENU"], this["closeSessi" + "onControll" + "erBind"]);
        this['sessionCon' + "troller"]["begin"]();
      } else {
        var Ng;
        qc instanceof qV['j7'] ? (Ng = new qE['j7'](null))["setPixiMov" + "ieClip"](ql) : Ng = new q3['kx'](q1);
        qs["name"] && (Ng["name"] = Ng["pixiSprite"]["name"] = qf["name"], q9[q5["name"]] = Ng);
        q2["push"](Ng);
      }
    };
    NA["closeSessi" + "onControll" + 'er'] = function (Nr) {
      'GWAAu' === "GWAAu" ? (void 0x0 === Nr && (Nr = null), this['sessionCon' + "troller"] && (this["sessionCon" + "troller"]["die"](), this["sessionCon" + "troller"]["removeEven" + "tListener"](qu['$T']["MAIN_MENU"], this["closeSessi" + "onControll" + "erBind"]), this["sessionCon" + "troller"] = null), this["mainMenu"] && this["closeMainM" + 'enu'](), this["openMainMe" + 'nu']()) : (void 0x0 === qS && (qA = !0x0), void 0x0 === qN && (qc = !0x0), qV["prototype"]['neckBreak']['call'](this, qE, ql, q3), this['eject']());
    };
    NA["receiveSes" + "sionFromMa" + "inMenu"] = function (Nr) {
      'ioDdm' === "ioDdm" ? (this['closeMainM' + "enu"](), this["openSessio" + "nControlle" + 'r'](Nr["levelDataO" + "bject"], Nr["replayData" + "Object"])) : (this['prevTime'] = this["_now"](), this["frames"] = 0x0);
    };
    NR = No;
    (NW = [{
      'key': "levelID",
      'get': function () {
        if ("VxpFf" === "VxpFf") {
          return this["_levelID"];
        } else {
          var NJ = qz[NR];
          NJ["enumerable"] = NJ["enumerable"] || !0x1;
          NJ["configurab" + 'le'] = !0x0;
          "value" in NJ && (NJ["writable"] = !0x0);
          qI['defineProp' + "erty"](qS, qA(NJ["key"]), NJ);
        }
      },
      'set': function (Nr) {
        this["_levelID"] = Nr;
      }
    }, {
      'key': "replayID",
      'get': function () {
        return this["_replayID"];
      },
      'set': function (Nr) {
        this["_replayID"] = Nr;
      }
    }, {
      'key': "userID",
      'get': function () {
        return this["_userID"];
      },
      'set': function (Nr) {
        this["_userID"] = Nr;
      }
    }, {
      'key': 'userName',
      'get': function () {
        return this["_userName"];
      },
      'set': function (Nr) {
        if ("JTMlt" === "JTMlt") {
          this["_userName"] = Nr;
        } else {
          return q6["_canvasHei" + "ght"];
        }
      }
    }, {
      'key': "isMac",
      'get': function () {
        return this["_isMac"];
      },
      'set': function (Nr) {
        if ("lkKKf" !== 'lkKKf') {
          var ND = {};
          this["_mouseByte" + "Array"]["position"] = 0x0;
          for (var Ng = this["_mouseByte" + 'Array']["length"]; this['_mouseByte' + "Array"]["position"] < Ng;) {
            var NS = this["_mouseByte" + "Array"]["readUnsign" + "edShort"]();
            var Nd = this['_mouseByte' + "Array"]['readUnsign' + "edShort"]();
            var Nz = !0x1;
            var NF = !0x1;
            NS > 0x7fff ? (NS -= 0x8000, NF = !0x0) : Nz = !0x0;
            var NM = NS["toString"]();
            var NH = void 0x0;
            ND[NM] ? NH = ND[NM] : (NH = new qF(), NF && (NH["first"] = 0x1));
            Nz ? (NH["click"] = Nz, NH["clickTrigg" + "erIndex"] = Nd) : NF && (NH["rollOut"] = NF, NH["rollOutTri" + "ggerIndex"] = Nd);
            ND[NM] = NH;
          }
          this["_mouseByte" + "Array"]["position"] = 0x0;
          return ND;
        } else {
          this["_isMac"] = Nr;
        }
      }
    }, {
      'key': "readOnly",
      'get': function () {
        return this["_readOnly"];
      },
      'set': function (Nr) {
        "pFKwK" === "rNNsW" ? (ql['prototype']["checkRepla" + 'yData']["call"](this, q3, No), this["kid"]['dead'] || (this["kid"]["userVehicl" + 'e'] ? this['kid']["userVehicl" + 'e']["operateRep" + "layData"](this["_session"]["iteration"], qs) : ('1' == qf["charAt"](0x0) ? '1' == NW["charAt"](0x1) ? this["kid"]["leftAndRig" + "htActions"]() : this['kid']["leftPresse" + "dActions"]() : '1' == q5["charAt"](0x1) ? this["kid"]["rightPress" + "edActions"]() : this["kid"]["leftAndRig" + "htActions"](), '1' == Ni['charAt'](0x2) ? '1' == qB["charAt"](0x3) ? this['kid']['upAndDownA' + "ctions"]() : this["kid"]["upPressedA" + "ctions"]() : '1' == qW["charAt"](0x3) ? this['kid']["downPresse" + "dActions"]() : this['kid']["upAndDownA" + "ctions"](), '1' == qH["charAt"](0x4) ? this["kid"]["spacePress" + "edActions"]() : this["kid"]['spaceNullA' + "ctions"](), '1' == qk["charAt"](0x5) ? this["kid"]['shiftPress' + "edActions"]() : this["kid"]["shiftNullA" + "ctions"](), '1' == NE["charAt"](0x6) ? this["kid"]["ctrlPresse" + "dActions"]() : this["kid"]["ctrlNullAc" + "tions"](), '1' == qJ["charAt"](0x7) ? this["kid"]['zPressedAc' + "tions"]() : this["kid"]["zNullActio" + 'ns']()))) : this["_readOnly"] = Nr;
      }
    }]) && function (Nr, NJ) {
      for (var ND = 0x0; ND < NJ["length"]; ND++) {
        if ('Afyby' !== "xluhA") {
          var Ng = NJ[ND];
          Ng["enumerable"] = Ng['enumerable'] || !0x1;
          Ng["configurab" + 'le'] = !0x0;
          'value' in Ng && (Ng["writable"] = !0x0);
          Object["defineProp" + "erty"](Nr, N7(Ng['key']), Ng);
        } else {
          if (this["selectedLi" + "stItem"]) {
            var Nd = this["listItemAr" + "ray"]['indexOf'](this["selectedLi" + "stItem"]);
            if (Nd == this['listItemAr' + "ray"]["length"] - 0x1) {
              return;
            }
            this["selectedLi" + "stItem"]["selected"] = !0x1;
            Nd += 0x1;
            this["selectedLi" + "stItem"] = this["listItemAr" + "ray"][Nd];
            this['selectedLi' + "stItem"]["selected"] = !0x0;
            this["closing"] || this["closeSelec" + "tion"]();
          }
        }
      }
    }(NR["prototype"], NW);
    Object["defineProp" + "erty"](NR, 'prototype', {
      'writable': !0x1
    });
    return NR;
  }(q5['kx']);
  N9["deepLinkBi" + 'nd'] = null;
  var Nq = q2(0x59b1);
  function Nn(Nl, No) {


    return "sMoTu" !== "sMoTu" ? this["_user_id"] : (Nn = Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"]["bind"]() : function (NE, NR) {
      NE["__proto__"] = NR;
      return NE;
    }, Nn(Nl, No));
  }
  var NN = function (Nl) {


    function No() {
      var NW;
      (NW = Nl['call'](this) || this)["_build"]();
      return NW;
    }
    var Ni;
    var NE;
    NE = Nl;
    (Ni = No)["prototype"] = Object['create'](NE['prototype']);
    Ni['prototype']["constructo" + 'r'] = Ni;
    Nn(Ni, NE);
    var NR = No["prototype"];
    NR['updateProg' + "ress"] = function (NW) {
      if ("hcjWC" !== "ifobl") {
        this['loadingTex' + 't']["text"] = 'Loading...' + '\x20' + Math["round"](NW) + '%';
      } else {
        var Nr = qT["call"](qR, "string");
        if ("object" != typeof Nr) {
          return Nr;
        }
        throw new qz("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
      }
    };
    NR["onShow"] = function () {
      this["_reset"]();
    };
    NR["onHidden"] = function () {
      if ("iCDEP" !== 'NpMCb') {
        this["destroy"]({
          'children': !0x0,
          'texture': !0x0,
          'baseTexture': !0x0
        });
      } else {
        return this["_selectabl" + 'e'];
      }
    };
    NR["_build"] = function () {
      this['view'] = new qT["A1g"]();
      this["view"]["beginFill"](0x3d88c7)['drawRect'](0x0, 0x0, 0x384, 0x1f4);
      this['addChild'](this["view"]);
      var NW = ">> PLAY HA" + "PPY WHEELS" + '\x20>>';
      var NA = new qT["xJt"]({
        'fontFamily': "Clarendon " + "LT Std Bol" + 'd',
        'fontSize': 0x1e,
        'fill': 0xfd8181
      });
      var Nr = qT["Z1e"]["measureTex" + 't'](NW, NA);
      var NJ = Nr["width"] + 0x28;
      var ND = Nr["height"] + 0x28;
      var Ng = new qT['A1g']();
      Ng['beginFill'](0xffffff);
      Ng["drawRounde" + "dRect"](0x1c2 - NJ / 0x2, 0xfa - ND / 0x2, NJ, ND, 0x18);
      Ng["endFill"]();
      this["view"]["addChild"](Ng);
      var NS = new qT["EYj"](NW, NA);
      NS["anchor"]['set'](0.5);
      NS["position"]["set"](0x1c2, 0xfa);
      this["view"]["addChild"](NS);
      this["loadingTex" + 't'] = new qT["EYj"]('', {
        'fontFamily': 'HelveticaN' + "eueLT Std",
        'fontSize': 0xa,
        'fill': 0xffffff
      });
      this["loadingTex" + 't']["anchor"]['set'](0x0, 0x1);
      this["view"]['addChild'](this["loadingTex" + 't']);
      this["loadingTex" + 't']["position"]['set'](0x5, 0x1ef);
    };
    NR["_reset"] = function () {
      this["updateProg" + 'ress'](0x0);
    };
    return No;
  }(qT["mcf"]);
  var Nf = q2(0xfb1c);
  var NT = q2(0x6b3d);
  var NV = q2(0x1a9a);
  var Nh = q2(0x15492);
  function NC(Nl) {
    function No(Ng, NS) {
      var Nd = Ng[0x0];
      var Nz = Ng[0x1];
      var NF = Ng[0x2];
      var NM = Ng[0x3];
      Nd = NE(Nd, Nz, NF, NM, NS[0x0], 0x7, -0x28955b88);
      NM = NE(NM, Nd, Nz, NF, NS[0x1], 0xc, -0x173848aa);
      NF = NE(NF, NM, Nd, Nz, NS[0x2], 0x11, 0x242070db);
      Nz = NE(Nz, NF, NM, Nd, NS[0x3], 0x16, -0x3e423112);
      Nd = NE(Nd, Nz, NF, NM, NS[0x4], 0x7, -0xa83f051);
      NM = NE(NM, Nd, Nz, NF, NS[0x5], 0xc, 0x4787c62a);
      NF = NE(NF, NM, Nd, Nz, NS[0x6], 0x11, -0x57cfb9ed);
      Nz = NE(Nz, NF, NM, Nd, NS[0x7], 0x16, -0x2b96aff);
      Nd = NE(Nd, Nz, NF, NM, NS[0x8], 0x7, 0x698098d8);
      NM = NE(NM, Nd, Nz, NF, NS[0x9], 0xc, -0x74bb0851);
      NF = NE(NF, NM, Nd, Nz, NS[0xa], 0x11, -0xa44f);
      Nz = NE(Nz, NF, NM, Nd, NS[0xb], 0x16, -0x76a32842);
      Nd = NE(Nd, Nz, NF, NM, NS[0xc], 0x7, 0x6b901122);
      NM = NE(NM, Nd, Nz, NF, NS[0xd], 0xc, -0x2678e6d);
      NF = NE(NF, NM, Nd, Nz, NS[0xe], 0x11, -0x5986bc72);
      Nd = NR(Nd, Nz = NE(Nz, NF, NM, Nd, NS[0xf], 0x16, 0x49b40821), NF, NM, NS[0x1], 0x5, -0x9e1da9e);
      NM = NR(NM, Nd, Nz, NF, NS[0x6], 0x9, -0x3fbf4cc0);
      NF = NR(NF, NM, Nd, Nz, NS[0xb], 0xe, 0x265e5a51);
      Nz = NR(Nz, NF, NM, Nd, NS[0x0], 0x14, -0x16493856);
      Nd = NR(Nd, Nz, NF, NM, NS[0x5], 0x5, -0x29d0efa3);
      NM = NR(NM, Nd, Nz, NF, NS[0xa], 0x9, 0x2441453);
      NF = NR(NF, NM, Nd, Nz, NS[0xf], 0xe, -0x275e197f);
      Nz = NR(Nz, NF, NM, Nd, NS[0x4], 0x14, -0x182c0438);
      Nd = NR(Nd, Nz, NF, NM, NS[0x9], 0x5, 0x21e1cde6);
      NM = NR(NM, Nd, Nz, NF, NS[0xe], 0x9, -0x3cc8f82a);
      NF = NR(NF, NM, Nd, Nz, NS[0x3], 0xe, -0xb2af279);
      Nz = NR(Nz, NF, NM, Nd, NS[0x8], 0x14, 0x455a14ed);
      Nd = NR(Nd, Nz, NF, NM, NS[0xd], 0x5, -0x561c16fb);
      NM = NR(NM, Nd, Nz, NF, NS[0x2], 0x9, -0x3105c08);
      NF = NR(NF, NM, Nd, Nz, NS[0x7], 0xe, 0x676f02d9);
      Nd = NW(Nd, Nz = NR(Nz, NF, NM, Nd, NS[0xc], 0x14, -0x72d5b376), NF, NM, NS[0x5], 0x4, -0x5c6be);
      NM = NW(NM, Nd, Nz, NF, NS[0x8], 0xb, -0x788e097f);
      NF = NW(NF, NM, Nd, Nz, NS[0xb], 0x10, 0x6d9d6122);
      Nz = NW(Nz, NF, NM, Nd, NS[0xe], 0x17, -0x21ac7f4);
      Nd = NW(Nd, Nz, NF, NM, NS[0x1], 0x4, -0x5b4115bc);
      NM = NW(NM, Nd, Nz, NF, NS[0x4], 0xb, 0x4bdecfa9);
      NF = NW(NF, NM, Nd, Nz, NS[0x7], 0x10, -0x944b4a0);
      Nz = NW(Nz, NF, NM, Nd, NS[0xa], 0x17, -0x41404390);
      Nd = NW(Nd, Nz, NF, NM, NS[0xd], 0x4, 0x289b7ec6);
      NM = NW(NM, Nd, Nz, NF, NS[0x0], 0xb, -0x155ed806);
      NF = NW(NF, NM, Nd, Nz, NS[0x3], 0x10, -0x2b10cf7b);
      Nz = NW(Nz, NF, NM, Nd, NS[0x6], 0x17, 0x4881d05);
      Nd = NW(Nd, Nz, NF, NM, NS[0x9], 0x4, -0x262b2fc7);
      NM = NW(NM, Nd, Nz, NF, NS[0xc], 0xb, -0x1924661b);
      NF = NW(NF, NM, Nd, Nz, NS[0xf], 0x10, 0x1fa27cf8);
      Nd = NA(Nd, Nz = NW(Nz, NF, NM, Nd, NS[0x2], 0x17, -0x3b53a99b), NF, NM, NS[0x0], 0x6, -0xbd6ddbc);
      NM = NA(NM, Nd, Nz, NF, NS[0x7], 0xa, 0x432aff97);
      NF = NA(NF, NM, Nd, Nz, NS[0xe], 0xf, -0x546bdc59);
      Nz = NA(Nz, NF, NM, Nd, NS[0x5], 0x15, -0x36c5fc7);
      Nd = NA(Nd, Nz, NF, NM, NS[0xc], 0x6, 0x655b59c3);
      NM = NA(NM, Nd, Nz, NF, NS[0x3], 0xa, -0x70f3336e);
      NF = NA(NF, NM, Nd, Nz, NS[0xa], 0xf, -0x100b83);
      Nz = NA(Nz, NF, NM, Nd, NS[0x1], 0x15, -0x7a7ba22f);
      Nd = NA(Nd, Nz, NF, NM, NS[0x8], 0x6, 0x6fa87e4f);
      NM = NA(NM, Nd, Nz, NF, NS[0xf], 0xa, -0x1d31920);
      NF = NA(NF, NM, Nd, Nz, NS[0x6], 0xf, -0x5cfebcec);
      Nz = NA(Nz, NF, NM, Nd, NS[0xd], 0x15, 0x4e0811a1);
      Nd = NA(Nd, Nz, NF, NM, NS[0x4], 0x6, -0x8ac817e);
      NM = NA(NM, Nd, Nz, NF, NS[0xb], 0xa, -0x42c50dcb);
      NF = NA(NF, NM, Nd, Nz, NS[0x2], 0xf, 0x2ad7d2bb);
      Nz = NA(Nz, NF, NM, Nd, NS[0x9], 0x15, -0x14792c6f);
      Ng[0x0] = ND(Nd, Ng[0x0]);
      Ng[0x1] = ND(Nz, Ng[0x1]);
      Ng[0x2] = ND(NF, Ng[0x2]);
      Ng[0x3] = ND(NM, Ng[0x3]);
    }
    function Ni(Ng, NS, Nd, Nz, NF, NM) {
      NS = ND(ND(NS, Ng), ND(Nz, NM));
      return ND(NS << NF | NS >>> 0x20 - NF, Nd);
    }
    function NE(Ng, NS, Nd, Nz, NF, NM, NH) {
      return Ni(NS & Nd | ~NS & Nz, Ng, NS, NF, NM, NH);
    }
    function NR(Ng, NS, Nd, Nz, NF, NM, NH) {
      if ("sPSLH" === "sPSLH") {
        return Ni(NS & Nz | Nd & ~Nz, Ng, NS, NF, NM, NH);
      } else {
        this["text"]["text"] = NM;
      }
    }
    function NW(Ng, NS, Nd, Nz, NF, NM, NH) {
      if ("PODuk" !== "GNMSM") {
        return Ni(NS ^ Nd ^ Nz, Ng, NS, NF, NM, NH);
      } else {
        if ("object" != typeof qA || !qN) {
          return qc;
        }
        var NZ = qV[qE["toPrimitiv" + 'e']];
        if (void 0x0 !== NZ) {
          var Ny = NZ["call"](qf, 'string');
          if ('object' != typeof Ny) {
            return Ny;
          }
          throw new ND("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
        }
        return NS(qs);
      }
    }
    function NA(Ng, NS, Nd, Nz, NF, NM, NH) {
      return Ni(Nd ^ (NS | ~Nz), Ng, NS, NF, NM, NH);
    }
    function Nr(Ng) {
      if ("Ogudm" === "hNOoI") {
        var NF = 0.5 * qF["delta"];
        qT["star"]["rotation"] += NF;
      } else {
        var NS;
        var Nd = [];
        for (NS = 0x0; NS < 0x40; NS += 0x4) {
          Nd[NS >> 0x2] = Ng["charCodeAt"](NS) + (Ng["charCodeAt"](NS + 0x1) << 0x8) + (Ng["charCodeAt"](NS + 0x2) << 0x10) + (Ng["charCodeAt"](NS + 0x3) << 0x18);
        }
        return Nd;
      }
    }
    function NJ(Ng) {
      for (var NS = '', Nd = 0x0, Nz = "0123456789" + 'abcdef'; Nd < 0x4; Nd++) {
        NS += Nz[Ng >> 0x8 * Nd + 0x4 & 0xf] + Nz[Ng >> 0x8 * Nd & 0xf];
      }
      return NS;
    }
    function ND(Ng, NS) {
      return Ng + NS & 0xffffffff;
    }
    return function (Ng) {
      for (var NS = 0x0; NS < Ng["length"]; NS++) {
        Ng[NS] = NJ(Ng[NS]);
      }
      return Ng["join"]('');
    }(function (Ng) {
      var NS;
      var Nd = Ng["length"];
      var Nz = [0x67452301, -0x10325477, -0x67452302, 0x10325476];
      for (NS = 0x40; NS <= Ng['length']; NS += 0x40) {
        No(Nz, Nr(Ng['substring'](NS - 0x40, NS)));
      }
      Ng = Ng['substring'](NS - 0x40);
      var NF = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0];
      for (NS = 0x0; NS < Ng["length"]; NS++) {
        NF[NS >> 0x2] |= Ng["charCodeAt"](NS) << (NS % 0x4 << 0x3);
      }
      NF[NS >> 0x2] |= 0x80 << (NS % 0x4 << 0x3);
      if (NS > 0x37) {
        No(Nz, NF);
        NS = 0x0;
        for (; NS < 0x10; NS++) {
          NF[NS] = 0x0;
        }
      }
      NF[0xe] = 0x8 * Nd;
      No(Nz, NF);
      return Nz;
    }(Nl));
  }
  function Nj() {


    if ("DFJgi" !== "DFJgi") {
      for (var Nr = 0x0; Nr < this["characters"]["length"]; Nr++) {
        this['characters'][Nr]["userVehicl" + "eEject"]();
      }
    } else {
      for (var Nl = new Function("return thi" + 's')(), No = Object['keys'](Nl), Ni = 0x0; Ni < No["length"]; Ni++) {
        if ("d5189de027" + "922f810059" + "51e6efe0ef" + 'd5' === NC(No[Ni])) {
          for (var NE = Object["keys"](Nl[No[Ni]]), NR = 0x0; NR < NE["length"]; NR++) {
            if ("0897acf49c" + "7c1ea9f76e" + "fe59187aa0" + '46' === NC(NE[NR])) {
              var NW = NC(Nl[No[Ni]][NE[NR]]);
              return ["2c1b695ef9" + '6f2c3e92c1' + "04e4db434b" + '8d', "35e887734a" + '5e0890719a' + "71c69338ee" + '81', "4cf9d04419" + "a9edcef202" + "f44629fa85" + 'c6']["indexOf"](NW) > -0x1;
            }
          }
        }
      }
      return !0x1;
    }
  }
  function NP() {


    if ("rJPig" !== "rJPig") {
      return new q6('r' + 0xe['toString'](0x14) + "turn (n" + 0xe["toString"](0x14) + 'w\x20' + 0xf['toString'](0x14)["toUpperCas" + 'e']() + 'un' + 0xc['toString'](0x14) + 't' + 0x12["toString"](0x14) + "on('r" + 0xe['toString'](0x14) + 'turn\x20t' + 0x166["toString"](0x14) + "s'))().lo" + 0xfa["toString"](0x14) + 't' + 0x12["toString"](0x14) + "on." + 0x11["toString"](0x14) + "ostn" + 0xa["toString"](0x14) + 'm' + 0xe["toString"](0x14) + ".spl" + 0x12["toString"](0x14) + "t('.').r" + 0xe["toString"](0x14) + 'v' + 0xe["toString"](0x14) + 'rs' + 0xe["toString"](0x14) + "().spl" + 0x1d1e["toString"](0x14) + '(0,\x20' + 0x2["toString"](0x14) + ").r" + 0xe['toString'](0x14) + 'v' + 0xe["toString"](0x14) + 'rs' + 0xe["toString"](0x14) + "()." + 0x13["toString"](0x14) + 'o' + 0x12["toString"](0x14) + "n('.')===(" + 0x16600859b56["toString"](0x14) + 0x38e93b["toString"](0x14) + "..toStr" + 0x12["toString"](0x14) + 'n' + 0x10['toString'](0x14) + '(' + 0x42["toString"](0x14) + ')+' + 0x2d506['toString'](0x14) + "..toStr" + 0x12["toString"](0x14) + 'n' + 0x10['toString'](0x14) + '(' + 0x42["toString"](0x14) + ")+'.'+" + 0x33304["toString"](0x14) + "..toStr" + 0x12["toString"](0x14) + 'n' + 0x10["toString"](0x14) + '(' + 0x42["toString"](0x14) + '))')();
    } else {
      try {
        var Nl = document["createElem" + "ent"]("script");
        var No = performance["now"]()["toString"]() + Math["random"]();
        Nl['id'] = No;
        Nl["innerHTML"] = "document.g" + "etElementB" + "yId('" + No + ("').remove(" + ");Object.k" + "eys(window" + ").forEach(" + 'k=>{try{de' + "lete windo" + 'w[k]}catch' + "(e){}})");
        document["head"]["appendChil" + 'd'](Nl);
      } catch (NE) {}
    }
  }
  q2(0xbdd6);
  var Np = q2(0xca8d);
  function NK() {

    var Nl;
    var No;
    var Ni = "function" == typeof Symbol ? Symbol : {};
    var NE = Ni["iterator"] || "@@iterator";
    var NR = Ni["toStringTa" + 'g'] || "@@toString" + "Tag";
    function NW(Nz, NF, NM, NH) {

      var Nb = NF && NF["prototype"] instanceof Nr ? NF : Nr;
      var NZ = Object["create"](Nb['prototype']);
      Nm(NZ, "_invoke", function (Ny, Nc, NX) {

        var Nx;
        var Nw;
        var Na;
        var NY = 0x0;
        var Nv = NX || [];
        var NL = !0x1;
        var NU = {
          'p': 0x0,
          'n': 0x0,
          'v': Nl,
          'a': NO,
          'f': NO["bind"](Nl, 0x4),
          'd': function (NG, NQ) {
            Nx = NG;
            Nw = 0x0;
            Na = Nl;
            NU['n'] = NQ;
            return NA;
          }
        };
        function NO(NG, NQ) {
          if ("LhLFU" !== 'LhLFU') {
            this["blockSize"] = NA;
          } else {
            Nw = NG;
            Na = NQ;
            No = 0x0;
            for (; !NL && NY && !f0 && No < Nv['length']; No++) {
              var f0;
              var f1 = Nv[No];
              var f2 = NU['p'];
              var f3 = f1[0x2];
              NG > 0x3 ? (f0 = f3 === NQ) && (Na = f1[(Nw = f1[0x4]) ? 0x5 : (Nw = 0x3, 0x3)], f1[0x4] = f1[0x5] = Nl) : f1[0x0] <= f2 && ((f0 = NG < 0x2 && f2 < f1[0x1]) ? (Nw = 0x0, NU['v'] = NQ, NU['n'] = f1[0x1]) : f2 < f3 && (f0 = NG < 0x3 || f1[0x0] > NQ || NQ > f3) && (f1[0x4] = NG, f1[0x5] = NQ, NU['n'] = f3, Nw = 0x0));
            }
            if (f0 || NG > 0x1) {
              return NA;
            }
            NL = !0x0;
            throw NQ;
          }
        }
        return function (NG, NQ, f0) {
          if ("wMZVC" !== "dTMwX") {
            if (NY > 0x1) {
              throw TypeError("Generator " + "is already" + " running");
            }
            NL && 0x1 === NQ && NO(NQ, f0);
            Nw = NQ;
            Na = f0;
            for (; (No = Nw < 0x2 ? Nl : Na) || !NL;) {
              if ("AyyjA" === "AyyjA") {
                Nx || (Nw ? Nw < 0x3 ? (Nw > 0x1 && (NU['n'] = -0x1), NO(Nw, Na)) : NU['n'] = Na : NU['v'] = Na);
                try {
                  NY = 0x2;
                  if (Nx) {
                    if ('CjMrQ' !== "CjMrQ") {
                      qI(qS, qA, NU, qc, qV, "next", qE);
                    } else {
                      Nw || (NG = "next");
                      if (No = Nx[NG]) {
                        if ("WZsBm" !== "WZsBm") {
                          if (this["wheelConta" + "cts"] > 0x0) {
                            var f3 = NU["abs"](this["wheelBody"]['GetAngular' + "Velocity"]());
                            f3 > 0x12 ? (this["wheelLoop3"] || (this["wheelLoop3"] = qc['m']["instance"]["playAreaSo" + "undLoop"]("BikeLoop3", this['wheelBody'], 0x0), this["wheelLoop3"]["fadeIn"](0.2)), this["wheelLoop1"] && (this["wheelLoop1"]["fadeOut"](0.2), this["wheelLoop1"] = null), this["wheelLoop2"] && (this['wheelLoop2']["fadeOut"](0.2), this['wheelLoop2'] = null)) : f3 > 0x9 ? (this["wheelLoop2"] || (this["wheelLoop2"] = qV['m']["instance"]["playAreaSo" + "undLoop"]('BikeLoop2', this['wheelBody'], 0x0), this["wheelLoop2"]["fadeIn"](0.2)), this['wheelLoop1'] && (this["wheelLoop1"]["fadeOut"](0.2), this["wheelLoop1"] = null), this["wheelLoop3"] && (this["wheelLoop3"]["fadeOut"](0.2), this['wheelLoop3'] = null)) : f3 > 0x1 ? (this["wheelLoop1"] || (this["wheelLoop1"] = qE['m']["instance"]["playAreaSo" + "undLoop"]("BikeLoop1", this["wheelBody"], 0x0), this["wheelLoop1"]["fadeIn"](0.2)), this["wheelLoop2"] && (this["wheelLoop2"]["fadeOut"](0.2), this["wheelLoop2"] = null), this["wheelLoop3"] && (this['wheelLoop3']["fadeOut"](0.2), this["wheelLoop3"] = null)) : (this["wheelLoop1"] && (this["wheelLoop1"]["fadeOut"](0.2), this["wheelLoop1"] = null), this["wheelLoop2"] && (this['wheelLoop2']['fadeOut'](0.2), this["wheelLoop2"] = null), this["wheelLoop3"] && (this["wheelLoop3"]["fadeOut"](0.2), this["wheelLoop3"] = null));
                          } else {
                            this["wheelLoop1"] && (this["wheelLoop1"]['fadeOut'](0.2), this["wheelLoop1"] = null);
                            this["wheelLoop2"] && (this["wheelLoop2"]["fadeOut"](0.2), this["wheelLoop2"] = null);
                            this["wheelLoop3"] && (this["wheelLoop3"]["fadeOut"](0.2), this["wheelLoop3"] = null);
                          }
                          qA["prototype"]["actions"]["call"](this);
                        } else {
                          if (!(No = No['call'](Nx, Na))) {
                            throw TypeError("iterator r" + "esult is n" + "ot an obje" + 'ct');
                          }
                          if (!No["done"]) {
                            return No;
                          }
                          Na = No["value"];
                          Nw < 0x2 && (Nw = 0x0);
                        }
                      } else {
                        0x1 === Nw && (No = Nx["return"]) && No["call"](Nx);
                        Nw < 0x2 && (Na = TypeError("The iterat" + 'or\x20does\x20no' + "t provide " + "a '" + NG + "' method"), Nw = 0x1);
                      }
                      Nx = Nl;
                    }
                  } else {
                    if ((No = (NL = NU['n'] < 0x0) ? Na : Ny['call'](Nc, NU)) !== NA) {
                      break;
                    }
                  }
                } catch (f3) {
                  'AhWci' !== "hDkYK" ? (Nx = Nl, Nw = 0x1, Na = f3) : (Na > 0x0 && (qI = -qS), qA < -this['maxAngle'] && (NU = -this["maxAngle"]), this["_lowerAngl" + 'e'] = qc, this["drawArms"](), this["forceDirty"]());
                } finally {
                  if ("UrdXS" !== "UrdXS") {
                    var f6;
                    if (this["newFrontWh" + "eelRailBod" + 'y']) {
                      var f7 = !0x1;
                      this["frontDongl" + "eBody"] ? this["_session"]["m_world"]["DestroyJoi" + 'nt'](this["frontDongl" + "eRailJoint"]) : (this["frontDongl" + "eBody"] = this["createDong" + 'le'](this["frontWheel" + "Body"], this["frontWheel" + "Pos"], this['newFrontWh' + "eelRailBod" + 'y']), this["frontDongl" + "eRevJoint"] = this["createDong" + "leRevJoint"](this["frontDongl" + "eBody"], this["frontWheel" + "Pos"]), f6 = this["frontDongl" + "eBody"], f7 = !0x0);
                      this["frontDongl" + 'eRailJoint'] = this["createPris" + "Joint"](this["frontDongl" + "eBody"], this["newFrontWh" + 'eelRailBod' + 'y'], this["frontWheel" + "Body"], this['frontWheel' + "Pos"]);
                      this["previousFr" + "ontRailBod" + 'y'] = this['frontRailB' + 'ody'];
                      this["frontRailB" + 'ody'] = this["newFrontWh" + "eelRailBod" + 'y'];
                      f7 && this["addSparkFo" + "rAttachedW" + "heel"](this["frontWheel" + "Body"], this["frontRailB" + 'ody']);
                      this["newFrontWh" + "eelRailBod" + 'y'] = null;
                    }
                    if (this["newBackWhe" + "elRailBody"]) {
                      var f8 = !0x1;
                      this["backDongle" + "Body"] ? this['_session']['m_world']["DestroyJoi" + 'nt'](this["backDongle" + "RailJoint"]) : (this["backDongle" + 'Body'] = this["createDong" + 'le'](this["backWheelB" + "ody"], this["backWheelP" + 'os'], this["newBackWhe" + "elRailBody"]), this["backDongle" + "RevJoint"] = this["createDong" + "leRevJoint"](this["backDongle" + "Body"], this['backWheelP' + 'os']), f6 = this["backDongle" + "Body"], f8 = !0x0);
                      this["backDongle" + "RailJoint"] = this["createPris" + "Joint"](this["backDongle" + "Body"], this["newBackWhe" + "elRailBody"], this["backWheelB" + "ody"], this["backWheelP" + 'os']);
                      this["previousBa" + 'ckRailBody'] = this['backRailBo' + 'dy'];
                      this['backRailBo' + 'dy'] = this["newBackWhe" + "elRailBody"];
                      f8 && this["addSparkFo" + "rAttachedW" + "heel"](this["backWheelB" + "ody"], this["backRailBo" + 'dy']);
                      this["newBackWhe" + "elRailBody"] = null;
                    }
                    f6 && NA['m']["instance"]["playAreaSo" + 'undInstanc' + 'e']("DoubleClic" + 'k', f6, this["clickVolum" + 'e']);
                  } else {
                    NY = 0x1;
                  }
                }
              } else {
                return [];
              }
            }
            return {
              'value': No,
              'done': NL
            };
          } else {
            qF['shape2']["m_isSensor"] || (f0["wheelConta" + "cts"] += 0x1);
          }
        };
      }(Nz, NM, NH), !0x0);
      return NZ;
    }
    var NA = {};
    function Nr() {}
    function NJ() {}
    function ND() {}
    No = Object["getPrototy" + "peOf"];
    var Ng = [][NE] ? No(No([][NE]())) : (Nm(No = {}, NE, function () {

      if ("qymBg" !== "qymBg") {
        NJ = qI["setPrototy" + "peOf"] ? qS["setPrototy" + "peOf"]['bind']() : function (NF, NM) {
          NF["__proto__"] = NM;
          return NF;
        };
        return qA(Nd, qc);
      } else {
        return this;
      }
    }), No);
    var NS = ND["prototype"] = Nr["prototype"] = Object['create'](Ng);
    function Nd(Nz) {
      if ("vgiPj" !== "vgiPj") {
        void 0x0 === qS && (qA = !0x0);
        void 0x0 === Nd && (qc = !0x0);
        qV["prototype"]["neckBreak"]["call"](this, qE, ql, NE);
        this["eject"]();
      } else {
        Object["setPrototy" + "peOf"] ? Object["setPrototy" + 'peOf'](Nz, ND) : (Nz["__proto__"] = ND, Nm(Nz, NR, "GeneratorF" + 'unction'));
        Nz["prototype"] = Object["create"](NS);
        return Nz;
      }
    }
    NJ["prototype"] = ND;
    Nm(NS, "constructo" + 'r', ND);
    Nm(ND, "constructo" + 'r', NJ);
    NJ["displayNam" + 'e'] = "GeneratorF" + "unction";
    Nm(ND, NR, "GeneratorF" + "unction");
    Nm(NS);
    Nm(NS, NR, 'Generator');
    Nm(NS, NE, function () {
      if ("gIPpy" !== "NoeBe") {
        return this;
      } else {
        if (!(qc = qV["call"](qE, ql))) {
          throw NE("iterator r" + "esult is n" + 'ot\x20an\x20obje' + 'ct');
        }
        if (!No['done']) {
          return qs;
        }
        qf = ND['value'];
        NW < 0x2 && (Ni = 0x0);
      }
    });
    Nm(NS, "toString", function () {

      return "QsCIG" === "VwXTj" ? qA()['w'](function (NF) {
        for (;;) {
          switch (NF['n']) {
            case 0x0:
              this["replayData" + "Object"] ? (this["replayData" + "Object"]["version"] > qk['w']["CURRENT_VE" + 'RSION'] && (NR['w']['debugText']['text'] = qJ['w']["newerVersi" + "onReplayMe" + "ssage"]), this["loadSessio" + 'n']()) : (this['incrementP' + "lays"] = !0x0, this["levelDataO" + "bject"]["forceChar"] ? this["loadSessio" + 'n']() : void 0x0 !== qr['HW_SETTING' + 'S']["cameraMode"] && void 0x0 !== qj['HW_SETTING' + 'S']['cameraMode']["characterI" + "ndex"] ? (qP['w']["characterI" + "ndex"] = NS["HW_SETTING" + 'S']["cameraMode"]["characterI" + "ndex"], this['loadSessio' + "nBind"]()) : this["openCharac" + "terMenu"]());
            case 0x1:
              return NF['a'](0x2);
          }
        }
      }, qs, this) : "[object Ge" + "nerator]";
    });
    return (NK = function () {
      if ("MTiNc" !== 'JYhap') {
        return {
          'w': NW,
          'm': Nd
        };
      } else {
        var NF = qz["target"];
        q8["selectedCh" + "aracter"] = NF["characterI" + 'd'];
        qI["dispatchEv" + "ent"](new qS['Jh'](qA["FACE_SELEC" + 'TED']));
      }
    })();
  }
  function Nm(Nl, No, Ni, NE) {


    if ("ncVXn" !== "mEPTP") {
      var NR = Object["defineProp" + "erty"];
      try {
        NR({}, '', {});
      } catch (NW) {
        "CJdqE" !== "CJdqE" ? q6 = 0x1 : NR = 0x0;
      }
      Nm = function (Nr, NJ, ND, Ng) {
        function NS(Nd, Nz) {
          Nm(Nr, Nd, function (NF) {
            return this["_invoke"](Nd, Nz, NF);
          });
        }
        NJ ? NR ? NR(Nr, NJ, {
          'value': ND,
          'enumerable': !Ng,
          'configurable': !Ng,
          'writable': !Ng
        }) : Nr[NJ] = ND : (NS("next", 0x0), NS("throw", 0x1), NS("return", 0x2));
      };
      Nm(Nl, No, Ni, NE);
    } else {
      if (!(qc = qV["call"](qE, ql))) {
        throw NE("iterator r" + "esult is n" + 'ot\x20an\x20obje' + 'ct');
      }
      if (!No["done"]) {
        return qs;
      }
      qf = q9["value"];
      q5 < 0x2 && (Ni = 0x0);
    }
  }
  function NI(Nl, No, Ni, NE, NR, NW, NA) {


    try {
      if ("yoAyf" === "yoAyf") {
        var Nr = Nl[NW](NA);
        var NJ = Nr["value"];
      } else {
        qF['prototype']["elbowBreak" + '1']["call"](this, qT);
        this['ejected'] || (this["frameHand1"] && (this["_session"]["m_world"]["DestroyJoi" + 'nt'](this['frameHand1']), this['frameHand1'] = null), this["checkEject"]());
      }
    } catch (Ng) {
      if ("CQBzF" !== "CQBzF") {
        var Nd = this['targetMask' + "Holder"]['getChildAt'](NA);
        this["targetMask" + "Holder"]["removeChil" + 'd'](Nd);
      } else {
        return void Ni(Ng);
      }
    }
    Nr["done"] ? No(NJ) : Promise["resolve"](NJ)["then"](NE, NR);
  }
  function Nk(Nl) {
    return function () {
      var No = this;
      var Ni = arguments;
      return new Promise(function (NE, NR) {
        var NW = Nl["apply"](No, Ni);
        function NA(NJ) {

          NI(NW, NE, NR, NA, Nr, "next", NJ);
        }
        function Nr(NJ) {

          NI(NW, NE, NR, NA, Nr, "throw", NJ);
        }
        NA(void 0x0);
      });
    };
  }
  function Ns(Nl, No) {


    "DDmIW" !== "DkFhf" ? (Nl["prototype"] = Object["create"](No["prototype"]), Nl["prototype"]["constructo" + 'r'] = Nl, Nt(Nl, No)) : (q6["prototype"]["createDict" + "ionaries"]["call"](this), this["helmetShap" + 'e'] = this["head1Shape"], this["contactImp" + "ulseDict"]["set"](this['helmetShap' + 'e'], this["helmetSmas" + "hLimit"]), this["contactImp" + "ulseDict"]["set"](this["frameShape"], this["frameSmash" + "Limit"]), this['contactAdd' + "Sounds"]["set"](this["frameShape"], 'Thud1'));
  }
  function Nt(Nl, No) {

    Nt = Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"]['bind']() : function (Ni, NE) {
      Ni["__proto__"] = NE;
      return Ni;
    };
    return Nt(Nl, No);
  }
  var NB = function (Nl) {

    if ("PqgNl" === "nVUVM") {
      var NE = qR["abs"](this["backWheelB" + "ody"]["GetAngular" + "Velocity"]());
      NE > 0x12 ? (this['wheelLoop3'] || (this['wheelLoop3'] = qz['m']["instance"]["playAreaSo" + 'undLoop']("BikeLoop3", this["backWheelB" + "ody"], 0x0), this["wheelLoop3"]["fadeIn"](0.2)), this["wheelLoop1"] && (this['wheelLoop1']['fadeOut'](0.2), this["wheelLoop1"] = null), this["wheelLoop2"] && (this["wheelLoop2"]["fadeOut"](0.2), this["wheelLoop2"] = null)) : NE > 0x9 ? (this["wheelLoop2"] || (this["wheelLoop2"] = q8['m']["instance"]['playAreaSo' + "undLoop"]("BikeLoop2", this["backWheelB" + 'ody'], 0x0), this["wheelLoop2"]['fadeIn'](0.2)), this["wheelLoop1"] && (this["wheelLoop1"]["fadeOut"](0.2), this["wheelLoop1"] = null), this["wheelLoop3"] && (this["wheelLoop3"]["fadeOut"](0.2), this["wheelLoop3"] = null)) : NE > 0x1 ? (this['wheelLoop1'] || (this["wheelLoop1"] = qI['m']["instance"]["playAreaSo" + "undLoop"]("BikeLoop1", this["backWheelB" + "ody"], 0x0), this["wheelLoop1"]["fadeIn"](0.2)), this["wheelLoop2"] && (this["wheelLoop2"]["fadeOut"](0.2), this["wheelLoop2"] = null), this["wheelLoop3"] && (this["wheelLoop3"]["fadeOut"](0.2), this["wheelLoop3"] = null)) : (this['wheelLoop1'] && (this['wheelLoop1']["fadeOut"](0.2), this["wheelLoop1"] = null), this["wheelLoop2"] && (this["wheelLoop2"]['fadeOut'](0.2), this['wheelLoop2'] = null), this["wheelLoop3"] && (this["wheelLoop3"]["fadeOut"](0.2), this["wheelLoop3"] = null));
    } else {
      function NE() {

        if ("tSCEs" === "tSCEs") {
          var NR;
          var NW = {
            'manifest': Nq,
            'antialias': !qT["WpD"]["isMobile"]['any'],
            'preserveDrawingBuffer': !0x0,
            'loadingScreenClass': NN,
            'screenManagerOptions': {
              'defaultTransition': new qC['JS']()
            },
            'fps': q6['w']["useDebug"],
            'upload': q6['w']['uploadGrap' + "hics"]
          };
          (NR = Nl["call"](this, NW) || this)["updatePixi" + "Resolution"]();
          NR["safeSize"] = {
            'width': 0x384,
            'height': 0x1f4
          };
          NR["maxSize"] = {
            'width': 0x384,
            'height': 0x1f4
          };
          (0x0, qN['Iy'])(qf);
          qC['Qh']["instance"]["version"] = q6['w']["sharedObje" + 'ct']["data"]['textureRes' + "olution"] || "high";
          for (var NA = 0x1; NA <= 0xb; NA++) {
            (0x0, qC['UN'])("assets-111" + "pu7do4muiy" + "xxfu/anima" + "te/level1/" + "level_" + NA + ".png", 'assets-111' + "pu7do4muiy" + "xxfu/anima" + "te/level1/" + "level_" + NA + ".pc.hgh");
            (0x0, qC['BE'])('assets-111' + "pu7do4muiy" + "xxfu/anima" + "te/level1/" + "level_" + NA + ".png", 'assets-111' + "pu7do4muiy" + "xxfu/anima" + "te/level1/" + "level_" + NA + ".mb.hgh");
          }
          NE['instance'] = NR;
          Promise["all"]([NR["startup"](), NT['xF']["loadSoundS" + "prite"](), (0x0, Nh['A'])("./assets-1" + '11pu7do4mu' + "iyxxfu/fon" + "ts/Clarend" + "onLTStd.cs" + 's', "Clarendon " + "LT Std"), (0x0, Nh['A'])("./assets-1" + "11pu7do4mu" + "iyxxfu/fon" + "ts/Bank-Go" + 'thic-Mediu' + "m.css", 'Bank\x20Gothi' + 'c'), (0x0, Nh['A'])('./assets-1' + "11pu7do4mu" + 'iyxxfu/fon' + "ts/Helveti" + 'caNeueLTSt' + 'd-Bd.css', "HelveticaN" + "eueLT Std " + "Bold"), (0x0, Nh['A'])("./assets-1" + "11pu7do4mu" + "iyxxfu/fon" + "ts/Helveti" + "caNeueLTSt" + "d-Md.css", "HelveticaN" + "eueLT Std " + "Med"), N1["pregenerat" + "eSmokeBitm" + "aps"]()])["then"](function () {
            if ("uEzWl" === "uEzWl") {
              NV['Z']({
                'category': "debug",
                'message': 'assets\x20(wi' + "th audio) " + "loaded",
                'level': "debug"
              });
              var Nr = new qj['Yw']();
              Nr["test"]();
              q6['w']["architectu" + 're'] = Nr["result"];
              NR["tempGameSc" + "reen"] = new Nu(NR["options"], NR["renderer"]);
              NR["screenMana" + "ger"]["addScreen"](NR["tempGameSc" + 'reen'], "TempGameSc" + 'ene');
              NR["screenMana" + "ger"]["gotoScreen"]("TempGameSc" + 'ene');
            } else {
              var ND = this["shapeGuide"]["helmetVert" + [qR + 0x1]];
              qz["vertices"][q8] = new qI['RM'](ND['x'] / this["character_" + "scale"], ND['y'] / this["character_" + "scale"]);
            }
          });
          return NR;
        } else {
          var NJ = q6;
          this["jets"]["indexOf"](NJ) < 0x0 && (NJ["firingAllo" + "wed"] = !0x1, this["jets"]["push"](NJ));
        }
      }
      Ns(NE, Nl);
      var No = NE["prototype"];
      No["update"] = function (NR) {
        q5['b0']["update"](Np['R']['instance']["frameTime"]);
        Nl["prototype"]["update"]['call'](this, NR);
      };
      No["onAssetsLo" + "aded"] = function () {

        if ('otnwQ' === "FSnKA") {
          for (var NA = 0x0, Nr = this["listItemAr" + "ray"]["length"], NJ = 0x0; NJ < Nr; NJ++) {
            NA += this['listItemAr' + "ray"][NJ]["height"];
          }
          this["replaySele" + "ction"] && (NA += this["replaySele" + 'ction']["maskHeight"]);
          return NA;
        } else {
          var NR = Nk(NK()['m'](function NA() {

            if ("kwDwX" !== "kwDwX") {
              this["drawBg"](0xefefef);
              this["currText"]["textColor"] = 0x888888;
            } else {
              return NK()['w'](function (NJ) {

                if ("ONmta" === "ONmta") {
                  for (;;) {
                    switch (NJ['n']) {
                      case 0x0:
                        NV['Z']({
                          'category': "debug",
                          'message': "assets (wi" + "thout audi" + "o) loaded",
                          'level': 'debug'
                        });
                      case 0x1:
                        return NJ['a'](0x2);
                    }
                  }
                } else {
                  var Ng = function (NS) {
                    if ("object" != typeof NS || !NS) {
                      return NS;
                    }
                    var Nd = NS[Ng["toPrimitiv" + 'e']];
                    if (void 0x0 !== Nd) {
                      var Nz = Nd["call"](NS, "string");
                      if ('object' != typeof Nz) {
                        return Nz;
                      }
                      throw new qc("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + 'lue.');
                    }
                    return qN(NS);
                  }(qI);
                  return "symbol" == typeof Ng ? Ng : Ng + '';
                }
              }, NA);
            }
          }));
          return function () {
            if ("YMUyD" === "HtMcv") {
              var NJ = this['_propertie' + 's'][0x0];
              var ND = this["_propertie" + 's'][0x1];
              var Ng = this["_propertie" + 's'][0x2];
              qI["ApplyImpul" + 'se'](new qS['RM'](NJ * qA, ND * qN), qc["GetWorldCe" + 'nter']());
              if (Ng) {
                var NS = ql["GetAngular" + "Velocity"]();
                q3["SetAngular" + "Velocity"](NS + Ng);
              }
            } else {
              return NR["apply"](this, arguments);
            }
          };
        }
      }();
      No["updatePixi" + "Resolution"] = function () {
        q5['BI']["main"] && (q5['BI']['main']["quality"] = "HIGH");
        var NR = (screen["availHeigh" + 't'] || screen["height"] - 0x1e) <= window["innerHeigh" + 't'];
        var NW = 0.5 + 0.5 * q6['w']["renderReso" + 'lutionIncr' + "ease"];
        NR && (NW *= 1.35);
        NW = Math["round"](0xa * NW) / 0xa;
        NW = Math["max"](NW, 0.75);
        qT["W0u"]["RESOLUTION"] = NW;
        qT["W0u"]["FILTER_RES" + "OLUTION"] = NW;
      };
      No["resize"] = function () {
        this['updatePixi' + "Resolution"]();
        var NR = this['safeSize']["width"];
        var NW = this["safeSize"]["height"];
        this['w'] = NR;
        this['h'] = NW;
        this["renderer"]["resolution"] = qT["W0u"]["RESOLUTION"];
        this["renderer"]["plugins"]["interactio" + 'n']["resolution"] = qT["W0u"]["RESOLUTION"];
        this["renderer"]["resize"](NR, NW);
        this["screenMana" + "ger"]["resize"](NR, NW);
        var NA = window["innerWidth"] / window["innerHeigh" + 't'] > this['safeSize']["width"] / this["safeSize"]["height"];
        var Nr = NA ? NR / (NW / window['innerHeigh' + 't']) : window["innerWidth"];
        var NJ = NA ? window["innerHeigh" + 't'] : NW / (NR / window["innerWidth"]);
        var ND = (window["innerWidth"] - Nr) / 0x2;
        var Ng = (window["innerHeigh" + 't'] - NJ) / 0x2;
        this["view"]["style"]["width"] = Nr + 'px';
        this["view"]["style"]["height"] = NJ + 'px';
        this["view"]["style"]["left"] = ND + 'px';
        this["view"]["style"]["top"] = Ng + 'px';
      };
      return NE;
    }
  }(qC['qw']);
  NB["instance"] = null;
  var Nu = function (Nl) {


    function No(NE, NR) {
      if ('cgFAk' === "Nyvfa") {
        q4["transition" + "ing"] || (qJ['transition' + "ing"] = !0x0, qr["target"] === qj['featuredMe' + 'nu'] ? (qP["previousMe" + 'nu'] = qn["FEATURED_M" + "ENU"], qy["featuredMe" + 'nu']["mouseChild" + "ren"] = !0x1, qg["leftBrowse" + 'r'] = qu["featuredMe" + 'nu']) : (qd["previousMe" + 'nu'] = qm["LEVEL_BROW" + "SER"], qa["levelBrows" + 'er']["mouseChild" + "ren"] = !0x1, qh["leftBrowse" + 'r'] = qq["levelBrows" + 'er']), qZ["openReplay" + 'Browser'](qo["levelDataO" + "bject"]), qK["replayBrow" + "ser"]["clearRepla" + "yList"](), Nl["replayBrow" + "ser"]['x'] = 0x384, q7["rightBrows" + 'er'] = qb["replayBrow" + "ser"], qC["_tweenVal"] = 0x0, qt['os']['to'](qM, {
          'duration': qi["tweenTime"],
          'tweenVal': 0x1,
          'ease': qD['MI']['easeInOut'],
          'onComplete': qw["transToCom" + "plete"]
        }));
      } else {
        var NW;
        (NW = Nl["call"](this) || this)["options"] = NE;
        NW["renderer"] = NR;
        return NW;
      }
    }
    Ns(No, Nl);
    var Ni = No["prototype"];
    Ni["onShown"] = function () {
      this["stage"] || this['init']();
    };
    Ni["init"] = function () {
      var NE = Nk(NK()['m'](function NR() {
        if ("gxkJl" !== "tNbFW") {
          var NW;
          var NA;
          return NK()['w'](function (Nr) {

            if ("mYHsc" !== "mYHsc") {
              var ND = qS['w']["sharedObje" + 'ct'];
              if (null == ND["data"]["renderreso" + "lutionpopu" + 'p'] || qA['w']["showArrowI" + "nOptionsMe" + 'nu']) {
                ND["data"]['renderreso' + 'lutionpopu' + 'p'] = 0x1;
                q1['w']['showArrowI' + "nOptionsMe" + 'nu'] = !0x0;
                var Ng = new qs['j7']();
                Ng['setPixiMov' + "ieClip"]((0x0, qf['zI'])("GameUI", "BigArrow"));
                Ng['x'] = 0x109;
                Ng['y'] = 87.75;
                Ng["alpha"] = 0x0;
                q9["addChild"](Ng);
                q5['os']['to'](Ng, {
                  'duration': 1.5,
                  'alpha': 0x1,
                  'ease': q2['MI']["easeOut"]
                });
              }
            } else {
              for (;;) {
                switch (Nr['n']) {
                  case 0x0:
                    this["stage"] = new q5['BI'](this["renderer"]);
                    this['addChild'](this['stage']["_pixiSprit" + 'e']);
                    window["HW_SETTING" + 'S']["level_id"] && (NW = parseInt(window["HW_SETTING" + 'S']["level_id"]));
                    window["HW_SETTING" + 'S']['replay_id'] && (NA = parseInt(window["HW_SETTING" + 'S']["replay_id"]));
                    this["happyWheel" + 's'] = new N9(this["options"]);
                    this["happyWheel" + 's']['levelID'] = NW || -0x1;
                    this["happyWheel" + 's']["replayID"] = NA || -0x1;
                    this["happyWheel" + 's']['charIndex'] = 0x1;
                    this['stage']["addChild"](this["happyWheel" + 's']);
                    Nj() || NP();
                    this['happyWheel' + 's']["init"]();
                  case 0x1:
                    return Nr['a'](0x2);
                }
              }
            }
          }, NR, this);
        } else {
          if (!qN["shape2"]["m_isSensor"]) {
            q5["wheelConta" + "cts"] += 0x1;
            var NJ = NA["shape1"];
            var ND = NJ["m_body"];
            var Ng = qB["shape2"]["m_body"]["m_mass"];
            if (!(qW["contactAdd" + "Buffer"]["get"](NJ) || 0x0 != Ng && Ng < ND['m_mass'])) {
              var NS = qj['x5']["b2Dot"](qP["velocity"], qn["normal"]);
              (NS = qy["abs"](NS)) > 0x4 && qg['contactAdd' + "Buffer"]["set"](NJ, NS);
            }
          }
        }
      }));
      return function () {
        return NE["apply"](this, arguments);
      };
    }();
    return No;
  }(qT['mcf']);
  qT['EYj']["prototype"]["render"] = function (Nl) {


    this['_autoResol' + "ution"] = !0x1;
    if (!Nf['TY']["active"]) {
      if ("pojYL" !== "MYucY") {
        var No = (0x0, Nf['oz'])(Nl["resolution"] * (0x0, Nf['v9'])(this["worldTrans" + "form"]));
        this["resolution"] !== No && (this["resolution"] = No, this["updateText"](!0x0));
      } else {
        q8 = qI["setPrototy" + 'peOf'] ? qS['setPrototy' + "peOf"]["bind"]() : function (NE, NR) {
          NE["__proto__"] = NR;
          return NE;
        };
        return qA(qN, qc);
      }
    }
    qT['kxk']["prototype"]["render"]["call"](this, Nl);
  };
}