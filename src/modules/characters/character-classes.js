function (q0, q1, q2) {
  'use strict';

  q2['d'](q1, {
    'i3': () => qu['i3'],
    '_u': () => qu['_u'],
    'Ld': () => qu['Ld'],
    'Fj': () => qu['Fj'],
    'uW': () => qu['uW'],
    'l4': () => qu['l4'],
    'mm': () => qu['mm'],
    't6': () => qu['t6'],
    'a2': () => qu['a2'],
    'sW': () => qu['sW'],
    'sQ': () => qu['sQ'],
    'Gj': () => qu['Gj'],
    'Qj': () => qu['Qj'],
    'gg': () => qu['gg'],
    'EK': () => qu['EK'],
    'H': () => qu['H'],
    'z5': () => qu['z5'],
    'nd': () => qu['nd'],
    'Av': () => qu['Av'],
    'Ee': () => qu['Ee'],
    'gi': () => qu['gi'],
    'dP': () => qu['dP'],
    'Cy': () => qu['Cy'],
    'tG': () => qu['tG'],
    'fj': () => qu['fj'],
    'aR': () => qu['aR'],
    'S3': () => qu['S3'],
    'jX': () => qu['jX'],
    'hM': () => qu['hM'],
    'qV': () => qu['qV'],
    'xH': () => qu['xH'],
    'kk': () => qu['kk'],
    'P5': () => qu['P5'],
    'TV': () => qu['TV'],
    'XI': () => qu['XI'],
    'o0': () => qN,
    'XT': () => qV,
    'sD': () => qj,
    'zL': () => qK,
    'jJ': () => qk,
    'oe': () => qB,
    'fI': () => qu['fI'],
    'G8': () => qu['G8'],
    'ou': () => qu['ou'],
    'zH': () => qu['zH'],
    'Yn': () => qO,
    'e7': () => qu['e7'],
    'bc': () => q8,
    'cA': () => qu['cA']
  });
  q2(0xd51a);
  q2(0xb284);
  q2(0x15de4);
  q2(0xcdc3);
  q2(0x15d77);
  q2(0x65f3);
  q2(0xb4c);
  var q3 = q2(0x5ab6);
  var q4 = q2(0x88f1);
  var q5 = q2(0x8ea);
  function q6(qG) {
    if ("uwNsH" !== "uwNsH") {
      for (T = 0x0; V < this['bodiesToRe' + "move"]["length"]; h++) {
        this["removeJoin" + 't'](this["bodiesToRe" + 'move'][C]);
      }
      this["bodiesToRe" + "move"] = [];
      this["remove"] = !0x1;
      this["checkZeroJ" + "oints"]();
    } else {
      var qQ = function (n1) {


        if ('LAQdY' !== "LAQdY") {
          var n5;
          K instanceof m['j7'] ? (n5 = new I['j7'](null))["setPixiMov" + "ieClip"](k) : n5 = new f['kx'](q1);
          B["name"] && (n5['name'] = n5["pixiSprite"]["name"] = u['name'], l[o["name"]] = n5);
          q2["push"](n5);
        } else {
          if ("object" != typeof n1 || !n1) {
            return n1;
          }
          var n2 = n1[Symbol["toPrimitiv" + 'e']];
          if (void 0x0 !== n2) {
            var n3 = n2['call'](n1, "string");
            if ("object" != typeof n3) {
              return n3;
            }
            throw new TypeError("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
          }
          return String(n1);
        }
      }(qG);
      return "symbol" == typeof qQ ? qQ : qQ + '';
    }
  }
  function q7(qG, qQ) {
    if ("ubrWv" !== "QFlhJ") {
      q7 = Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"]['bind']() : function (n0, n1) {


        if ("LHIRR" !== "LHIRR") {
          this["contactImp" + "ulseDict"]["delete"](this['helmetShap' + 'e']);
          this["head1Shape"] = this["helmetShap" + 'e'];
          this['contactImp' + 'ulseDict']["set"](this["head1Shape"], this["headSmashL" + 'imit']);
          this["helmetShap" + 'e'] = null;
          this["helmetOn"] = !0x1;
          var n3 = new f['m2']();
          var n4 = new T['gv']();
          n3["density"] = 0x1;
          n3["friction"] = 0.3;
          n3["restitutio" + 'n'] = 0.1;
          n3["filter"] = this['zeroFilter'];
          var n5 = this['head1Body']["GetPositio" + 'n']();
          n4["position"] = n5;
          n4["angle"] = this["head1Body"]['GetAngle']();
          n4['userData'] = this["helmetMC"];
          this['helmetMC']["visible"] = !0x0;
          this["head1MC"]["helmet"]["visible"] = !0x1;
          n3['vertexCoun' + 't'] = 0x4;
          for (var n6 = 0x0; n6 < 0x4; n6++) {
            var n7 = this["shapeGuide"]['helmetVert' + [n6 + 0x1]];
            n3["vertices"][n6] = new h['RM'](n7['x'] / this["character_" + "scale"], n7['y'] / this["character_" + "scale"]);
          }
          this["helmetBody"] = this['_session']['m_world']["CreateBody"](n4);
          this["helmetBody"]["CreateShap" + 'e'](n3);
          this["helmetBody"]["SetMassFro" + "mShapes"]();
          this['helmetBody']["SetLinearV" + "elocity"](this["head1Body"]["GetLinearV" + "elocity"]());
          this["helmetBody"]["SetAngular" + "Velocity"](this["head1Body"]["GetAngular" + "Velocity"]());
          this['paintVecto' + 'r']["push"](this['helmetBody']);
        } else {
          n0['__proto__'] = n1;
          return n0;
        }
      };
      return q7(qG, qQ);
    } else {
      var n1 = this;
      T['os']["killTweens" + 'Of'](this);
      this['listItemAr' + "ray"]["forEach"](function (n2) {


        n2['bg']['pixiSprite']["off"]("pointerove" + 'r');
        n2['bg']["pixiSprite"]["off"]("pointerout");
        n2['bg']["removeEven" + "tListener"](n1['Cm']["MOUSE_DOWN"], n1["mouseDownH" + "andler"]);
        n2['bg']["removeEven" + "tListener"](P['Cm']["MOUSE_UP"], n1["mouseUpHan" + "dler"]);
        n2["characterF" + "aces"]["removeEven" + "tListener"](p['Cm']["MOUSE_UP"], n1["mouseUpHan" + "dler"]);
      });
      this["levelSelec" + "tion"] && this["killLevelS" + "election"]();
    }
  }
  var q8 = function (qG) {
    if ("xbsNP" !== 'sjgwK') {
      function n4(n5, n6) {


        if ("PdElP" !== "ViBvB") {
          var n7;
          (n7 = qG['call'](this) || this)["maxSpinAV"] = 3.5;
          n7["impulseOff" + "set"] = 0x1;
          n7["spaceActio" + 'n'] = 0x0;
          n7["shiftActio" + 'n'] = 0x0;
          n7['ctrlAction'] = 0x0;
          n7["_character" + "Pose"] = 0x0;
          n7["_body"] = n6;
          n7["accelerati" + 'on'] = n5['accelerati' + 'on'];
          n7["leaningStr" + 'ength'] = n5['leaningStr' + 'ength'];
          n7["spaceActio" + 'n'] = n5['spaceActio' + 'n'];
          n7["shiftActio" + 'n'] = n5["shiftActio" + 'n'];
          n7["ctrlAction"] = n5["ctrlAction"];
          n7['lockJoints'] = n5["lockJoints"];
          n7["_character" + 'Pose'] = n5["characterP" + "ose"];
          n7["joints"] = [];
          n7["jointMotor" + "Speeds"] = [];
          n7["jointAccel" + 's'] = [];
          n7["jets"] = [];
          n7["arrowGuns"] = [];
          n7["characters"] = [];
          n7["vehicles"] = [];
          n7["lastIterat" + "ion"] = -0x1;
          return n7;
        } else {
          this["_addingTar" + 'gets'] = n;
          this["forceDirty"]();
        }
      }
      var qQ;
      var n0;
      n0 = qG;
      (qQ = n4)["prototype"] = Object['create'](n0["prototype"]);
      qQ["prototype"]['constructo' + 'r'] = qQ;
      q7(qQ, n0);
      var n1;
      var n2;
      var n3 = n4["prototype"];
      n3["setShitUp"] = function () {


        if ("QqwQU" !== "QqwQU") {
          var n7 = qF["shape2"]["GetBody"]();
          n7 == this["triggering" + "Body"] && 0x0 == qT["shape2"]["m_isSensor"] && (this["triggering" + "Count"] -= 0x1, this['triggering' + 'Count'] < 0x1 && n7["m_mass"] > 0x0 && (this["triggering" + "Count"] = 0x0, this["triggering" + "Body"] = null));
        } else {
          var n5 = this["_body"]['GetMass']();
          this["leanImpuls" + 'e'] = n5 * (0.1 * this["leaningStr" + "ength"]);
        }
      };
      n3["addHandle"] = function (n5) {


        'LQMvR' !== "LQMvR" ? (n['prototype']["createDict" + "ionaries"]['call'](this), this["helmetShap" + 'e'] = this["head1Shape"], this["contactImp" + "ulseDict"]["set"](this["helmetShap" + 'e'], this["helmetSmas" + "hLimit"])) : n5["SetUserDat" + 'a'](this);
      };
      n3["checkAddSp" + "ecial"] = function (n5) {


        if (n5 instanceof qu['Cy']) {
          var n6 = n5;
          this["jets"]["indexOf"](n6) < 0x0 && (n6["firingAllo" + "wed"] = !0x1, this["jets"]["push"](n6));
        } else {
          if (n5 instanceof qu['_u']) {
            var n7 = n5;
            this["arrowGuns"]["indexOf"](n7) < 0x0 && (n7["firingAllo" + "wed"] = !0x1, n7["unlimitedA" + "rrows"] = !0x0, this["arrowGuns"]["push"](n7));
          }
        }
      };
      n3["checkAddVe" + "hicle"] = function (n5) {


        this["vehicles"]["indexOf"](n5) < 0x0 && (this["vehicles"]["push"](n5), n5["checkAddVe" + "hicle"](this));
      };
      n3["addJoint"] = function (n5) {


        this["joints"]['push'](n5);
        var n6 = this["joints"]["length"] - 0x1;
        if (n5 instanceof q3['Dn']) {
          var n7 = n5;
          if (n7["IsMotorEna" + "bled"]()) {
            if ("kADKb" !== "kADKb") {
              N["prototype"]["chestSmash"]["call"](this, f);
              this["eject"]();
            } else {
              var n8 = n7["GetMotorSp" + "eed"]();
              this["jointMotor" + "Speeds"][n6] = n8;
              this["jointAccel" + 's'][n6] = this["accelerati" + 'on'] < 0xa ? Math['abs'](n8 / (0x64 - 0xa * this["accelerati" + 'on'])) : Math["abs"](n8);
              this["lockJoints"] && (this["slowAfterE" + "ject"] = !0x0, (n9 = q4['w']["currentSes" + "sion"]["level"]["actionsVec" + 'tor'])["indexOf"](this) < 0x0 && n9["push"](this));
            }
          } else {
            this["jointMotor" + "Speeds"][n6] = null;
          }
          n7["EnableMoto" + 'r'](!0x1);
        } else {
          if ("eKJjW" === 'KboSb') {
            void 0x0 === j && (P = !0x0);
            void 0x0 === p && (K = !0x0);
            m["prototype"]["torsoBreak"]["call"](this, I, k, f);
            this["disableRun" + "ning"]();
          } else {
            var n9;
            var nq = n5;
            nq["IsMotorEna" + "bled"]() ? (n8 = nq["GetMotorSp" + "eed"](), this["jointMotor" + "Speeds"][n6] = n8, this["jointAccel" + 's'][n6] = this["accelerati" + 'on'] < 0xa ? Math["abs"](n8 / (0x64 - 0xa * this["accelerati" + 'on'])) : Math["abs"](n8), this["lockJoints"] && (this["slowAfterE" + "ject"] = !0x0, (n9 = q4['w']["currentSes" + 'sion']["level"]["actionsVec" + "tor"])["indexOf"](this) < 0x0 && n9["push"](this))) : this["jointMotor" + "Speeds"][n6] = null;
            nq['EnableMoto' + 'r'](!0x1);
          }
        }
      };
      n3["operateKey" + 's'] = function (n5, n6, n7, n8, n9, nq, nn, nN, nf) {


        if ("RevnU" === "RevnU") {
          var nT = '';
          if (n5 <= this["lastIterat" + 'ion']) {
            return nT;
          }
          this['lastIterat' + "ion"] = n5;
          var nV = [0x0, 0x0, 0x0, 0x0];
          n6 ? n7 ? (this["leftAndRig" + "htActions"](), nT += '11') : (this["leftPresse" + "dActions"](), nT += '10') : n7 ? (this["rightPress" + "edActions"](), nT += '01') : (this["leftAndRig" + "htActions"](), nT += '00');
          n8 ? n9 ? (this["upAndDownA" + "ctions"](), nT += '11') : (this["upPressedA" + "ctions"](), nT += '10') : n9 ? (this['downPresse' + "dActions"](), nT += '01') : (this["upAndDownA" + "ctions"](), nT += '00');
          if (nq) {
            var nh = nV[this["spaceActio" + 'n']];
            nV[this['spaceActio' + 'n']] = nh + 0x1;
            nT += '1';
          } else {
            nT += '0';
          }
          nn ? (nh = nV[this["shiftActio" + 'n']], nV[this["shiftActio" + 'n']] = nh + 0x1, nT += '1') : nT += '0';
          nN ? (nh = nV[this["shiftActio" + 'n']], nV[this["ctrlAction"]] = nh + 0x1, nT += '1') : nT += '0';
          (nh = nV[0x1]) > 0x0 && this["brake"]();
          (nh = nV[0x2]) > 0x0 ? this["fireJets"]() : this["stopJets"]();
          (nh = nV[0x3]) > 0x0 ? this["fireArrows"]() : this["stopArrows"]();
          for (var nC = 0x0; nC < this["vehicles"]['length']; nC++) {
            this["vehicles"][nC]["operateKey" + 's'](n5, n6, n7, n8, n9, nq, nn, nN, nf);
          }
          nf ? (this["zPressedAc" + "tions"](), nT += '1') : nT += '0';
          return nT;
        } else {
          var nP = V[h];
          nP["enumerable"] = nP["enumerable"] || !0x1;
          nP["configurab" + 'le'] = !0x0;
          "value" in nP && (nP['writable'] = !0x0);
          C["defineProp" + "erty"](j, P(nP["key"]), nP);
        }
      };
      n3['operateRep' + "layData"] = function (n5, n6, n7) {


        if ("QDAoO" !== "QDAoO") {
          this["contactImp" + "ulseDict"]["delete"](this['jetShape']);
          this['_session']["contactLis" + "tener"]['deleteList' + "ener"](f['fI']['RESULT'], this["jetShape"]);
          this["_session"]['contactLis' + 'tener']['deleteList' + "ener"](T['fI']["ADD"], this["jetShape"]);
          var nN = this["jetBody"]["GetWorldCe" + 'nter']();
          this['jetMC']["visible"] = !0x1;
          this["session"]['particleCo' + "ntroller"]["createPoin" + "tBurst"]("jetshards", nN['x'] * this['m_physScal' + 'e'], nN['y'] * this["m_physScal" + 'e'], 0x5, 0x32, 0x32, this['session']["containerS" + "prite"]["getChildIn" + "dex"](this["jetMC"]));
          this["session"]["m_world"]["DestroyBod" + 'y'](this["jetBody"]);
          V['m']["instance"]["playAreaSo" + "undInstanc" + 'e']('MetalSmash' + 'Light', this["jetBody"]);
        } else {
          void 0x0 === n7 && (n7 = null);
          if (!(n5 <= this["lastIterat" + "ion"])) {
            if ('Pelbp' === "Pelbp") {
              this["lastIterat" + "ion"] = n5;
              var n8 = [0x0, 0x0, 0x0, 0x0];
              if (n7) {
                if ("rsgbJ" !== 'pXCuv') {
                  '1' == n6["charAt"](0x0) ? '1' == n6["charAt"](0x1) ? (this["leftAndRig" + "htActions"](), n7["leftKeyON"](), n7['rightKeyON']()) : (this["leftPresse" + "dActions"](), n7['leftKeyON'](), n7["rightKeyOF" + 'F']()) : '1' == n6["charAt"](0x1) ? (this["rightPress" + "edActions"](), n7["leftKeyOFF"](), n7["rightKeyON"]()) : (this["leftAndRig" + "htActions"](), n7["rightKeyOF" + 'F'](), n7["leftKeyOFF"]());
                  '1' == n6["charAt"](0x2) ? '1' == n6['charAt'](0x3) ? (this["upAndDownA" + "ctions"](), n7["upKeyON"](), n7['downKeyON']()) : (this["upPressedA" + "ctions"](), n7["upKeyON"](), n7["downKeyOFF"]()) : '1' == n6["charAt"](0x3) ? (this["downPresse" + "dActions"](), n7["upKeyOFF"](), n7["downKeyON"]()) : (this["upAndDownA" + "ctions"](), n7["upKeyOFF"](), n7["downKeyOFF"]());
                  if ('1' == n6["charAt"](0x4)) {
                    var n9 = n8[this["spaceActio" + 'n']];
                    n8[this["spaceActio" + 'n']] = n9 + 0x1;
                    n7["spaceKeyON"]();
                  } else {
                    n7["spaceKeyOF" + 'F']();
                  }
                  '1' == n6['charAt'](0x5) ? (n9 = n8[this["shiftActio" + 'n']], n8[this["shiftActio" + 'n']] = n9 + 0x1, n7["shiftKeyON"]()) : n7["shiftKeyOF" + 'F']();
                  '1' == n6["charAt"](0x6) ? (n9 = n8[this["shiftActio" + 'n']], n8[this["ctrlAction"]] = n9 + 0x1, n7["ctrlKeyON"]()) : n7["ctrlKeyOFF"]();
                  '1' == n6["charAt"](0x7) ? (this["zPressedAc" + "tions"](), n7["zKeyON"]()) : n7["zKeyOFF"]();
                } else {
                  0x7 == this["_currentPo" + 'se'] && (this["currentPos" + 'e'] = 0x0);
                }
              } else {
                '1' == n6["charAt"](0x0) ? '1' == n6["charAt"](0x1) ? this["leftAndRig" + 'htActions']() : this['leftPresse' + "dActions"]() : '1' == n6['charAt'](0x1) ? this["rightPress" + "edActions"]() : this["leftAndRig" + 'htActions']();
                '1' == n6['charAt'](0x2) ? '1' == n6["charAt"](0x3) ? this["upAndDownA" + "ctions"]() : this["upPressedA" + "ctions"]() : '1' == n6["charAt"](0x3) ? this["downPresse" + 'dActions']() : this['upAndDownA' + "ctions"]();
                '1' == n6["charAt"](0x4) && (n9 = n8[this["spaceActio" + 'n']], n8[this['spaceActio' + 'n']] = n9 + 0x1);
                '1' == n6["charAt"](0x5) && (n9 = n8[this["shiftActio" + 'n']], n8[this["shiftActio" + 'n']] = n9 + 0x1);
                '1' == n6["charAt"](0x6) && (n9 = n8[this['shiftActio' + 'n']], n8[this['ctrlAction']] = n9 + 0x1);
                '1' == n6["charAt"](0x7) && this["zPressedAc" + "tions"]();
              }
              (n9 = n8[0x1]) > 0x0 && this["brake"]();
              (n9 = n8[0x2]) > 0x0 ? this["fireJets"]() : this["stopJets"]();
              (n9 = n8[0x3]) > 0x0 ? this["fireArrows"]() : this["stopArrows"]();
              for (var nq = 0x0; nq < this["vehicles"]["length"]; nq++) {
                this['vehicles'][nq]["operateRep" + "layData"](n5, n6, n7);
              }
            } else {
              var nT = qV;
              var nV = new qE['gv']();
              nV["position"]['Set'](ql['x'], n8['y']);
              nV["angle"] = n6;
              nV['isSleeping'] = nT["sleeping"];
              var nh = this['_session']["m_world"]["CreateBody"](nV);
              nh["m_userData"] = qs;
              var nC = new qf['m2']();
              nC["density"] = nT["density"];
              this["setShapeFi" + 'lter'](n2["collision"], nq["immovable"], nC);
              nC["SetAsBox"](0x32 * n7['scaleX'] / this["m_physScal" + 'e'], 0x32 * qB["scaleY"] / this["m_physScal" + 'e']);
              var nj = nh['CreateShap' + 'e'](nC);
              nh["SetMassFro" + "mShapes"]();
              this["paintBodyV" + "ector"]["push"](nh);
              this["shapeDicti" + "onary"]["set"](qW, nj);
            }
          }
        }
      };
      n3["leftPresse" + "dActions"] = function () {


        if ("QORbb" !== "QORbb") {
          return qR >= qz['length'] ? {
            'done': !0x0
          } : {
            'done': !0x1,
            'value': n1[qI++]
          };
        } else {
          if (this['leaningStr' + 'ength'] > 0x0) {
            if ("aAsxV" !== 'aAsxV') {
              this["currText"]["destroy"]();
              this['mc']["removeChil" + 'd'](this["currText"]);
              q6["prototype"]["destroy"]["call"](this);
            } else {
              var n5 = this["_body"]["GetAngle"]();
              var n6 = (this["_body"]['GetAngular' + "Velocity"]() + this['maxSpinAV']) / this["maxSpinAV"];
              n6 < 0x0 && (n6 = 0x0);
              n6 > 0x1 && (n6 = 0x1);
              var n7 = Math["cos"](n5) * this["leanImpuls" + 'e'] * n6;
              var n8 = Math["sin"](n5) * this["leanImpuls" + 'e'] * n6;
              var n9 = this["_body"]["GetLocalCe" + "nter"]();
              this["_body"]["ApplyImpul" + 'se'](new q3['RM'](n8, -n7), this["_body"]["GetWorldPo" + "int"](new q3['RM'](n9['x'] + this["impulseOff" + "set"], n9['y'])));
              this["_body"]["ApplyImpul" + 'se'](new q3['RM'](-n8, n7), this["_body"]["GetWorldPo" + "int"](new q3['RM'](n9['x'] - this["impulseOff" + "set"], n9['y'])));
            }
          }
        }
      };
      n3["rightPress" + "edActions"] = function () {


        if (this['leaningStr' + "ength"] > 0x0) {
          if ("xOsMU" === "yfiqu") {
            var nn = qT["call"](qR, "string");
            if ("object" != typeof nn) {
              return nn;
            }
            throw new qz('@@toPrimit' + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
          } else {
            var n5 = this["_body"]["GetAngle"]();
            var n6 = (this["_body"]["GetAngular" + "Velocity"]() - this['maxSpinAV']) / -this["maxSpinAV"];
            n6 < 0x0 && (n6 = 0x0);
            n6 > 0x1 && (n6 = 0x1);
            var n7 = Math["cos"](n5) * this["leanImpuls" + 'e'] * n6;
            var n8 = Math["sin"](n5) * this["leanImpuls" + 'e'] * n6;
            var n9 = this["_body"]["GetLocalCe" + "nter"]();
            this["_body"]["ApplyImpul" + 'se'](new q3['RM'](-n8, n7), this["_body"]["GetWorldPo" + "int"](new q3['RM'](n9['x'] + this["impulseOff" + "set"], n9['y'])));
            this["_body"]["ApplyImpul" + 'se'](new q3['RM'](n8, -n7), this["_body"]["GetWorldPo" + "int"](new q3['RM'](n9['x'] - this["impulseOff" + "set"], n9['y'])));
          }
        }
      };
      n3["leftAndRig" + "htActions"] = function () {};
      n3["upPressedA" + "ctions"] = function () {


        for (var n5 = 0x0; n5 < this["joints"]['length']; n5++) {
          var n6 = this["joints"][n5];
          if (n6 instanceof q3['Dn']) {
            var n7 = n6;
            if (this["jointMotor" + "Speeds"][n5]) {
              if ((nq = this["jointMotor" + "Speeds"][n5]) >= 0x0) {
                var n8 = this["handlePosi" + "tiveSpeed"](n7, nq, n5);
              } else {
                n8 = this["handleNega" + "tiveSpeed"](n7, nq, n5);
              }
              if (n7["IsLimitEna" + "bled"]()) {
                var n9 = n7["GetJointAn" + 'gle']();
                n9 > n7["m_upperAng" + 'le'] && n8 > 0x0 && n7['SetMotorSp' + 'eed'](0x0);
                n9 < n7["m_lowerAng" + 'le'] && n8 < 0x0 && n7["SetMotorSp" + "eed"](0x0);
              }
            }
          } else {
            if ('rAAPu' !== "vSdYi") {
              var nq;
              var nn = n6;
              if (this["jointMotor" + "Speeds"][n5] && (n8 = (nq = this["jointMotor" + "Speeds"][n5]) >= 0x0 ? this["handlePosi" + "tiveSpeedP" + "ris"](nn, nq, n5) : this['handleNega' + "tiveSpeedP" + "ris"](nn, nq, n5), nn["IsLimitEna" + "bled"]())) {
                var nN = nn['GetJointTr' + "anslation"]();
                nN > nn["m_upperTra" + "nslation"] && n8 > 0x0 && nn["SetMotorSp" + "eed"](0x0);
                nN < nn["m_lowerTra" + "nslation"] && n8 < 0x0 && nn["SetMotorSp" + "eed"](0x0);
              }
            } else {
              n['prototype']["zNullActio" + 'ns']["call"](this);
            }
          }
        }
      };
      n3["downPresse" + "dActions"] = function () {


        for (var n5 = 0x0; n5 < this["joints"]["length"]; n5++) {
          if ("suimk" !== 'suimk') {
            return this['_limit'];
          } else {
            var n6 = this["joints"][n5];
            if (n6 instanceof q3['Dn']) {
              if ("noCPZ" === 'noCPZ') {
                var n7 = n6;
                if (this["jointMotor" + 'Speeds'][n5]) {
                  if ("fVKkx" !== "fVKkx") {
                    nN = qI["setPrototy" + "peOf"] ? qS["setPrototy" + "peOf"]["bind"]() : function (nh, nC) {
                      nh["__proto__"] = nC;
                      return nh;
                    };
                    return qA(qN, qc);
                  } else {
                    var n8 = -this["jointMotor" + "Speeds"][n5];
                    if (n8 >= 0x0) {
                      var n9 = this["handlePosi" + "tiveSpeed"](n7, n8, n5);
                    } else {
                      n9 = this["handleNega" + "tiveSpeed"](n7, n8, n5);
                    }
                    if (n7["IsLimitEna" + "bled"]()) {
                      var nq = n7["GetJointAn" + "gle"]();
                      nq > n7['m_upperAng' + 'le'] && n9 > 0x0 && n7["SetMotorSp" + "eed"](0x0);
                      nq < n7["m_lowerAng" + 'le'] && n9 < 0x0 && n7["SetMotorSp" + "eed"](0x0);
                    }
                  }
                }
              } else {
                j["torsoHand1"] && (P["_session"]["m_world"]["DestroyJoi" + 'nt'](p["torsoHand1"]), K["torsoHand1"] = null);
                m["torsoHand2"] && (I["_session"]["m_world"]['DestroyJoi' + 'nt'](k["torsoHand2"]), f["torsoHand2"] = null);
              }
            } else {
              var nn = n6;
              if (this["jointMotor" + "Speeds"][n5]) {
                var nN = -this["jointMotor" + "Speeds"][n5];
                n9 = nN >= 0x0 ? this["handlePosi" + 'tiveSpeedP' + "ris"](nn, nN, n5) : this['handleNega' + "tiveSpeedP" + "ris"](nn, nN, n5);
                if (nn["IsLimitEna" + "bled"]()) {
                  var nf = nn["GetJointTr" + "anslation"]();
                  nf > nn["m_upperTra" + "nslation"] && n9 > 0x0 && nn['SetMotorSp' + "eed"](0x0);
                  nf < nn['m_lowerTra' + "nslation"] && n9 < 0x0 && nn["SetMotorSp" + "eed"](0x0);
                }
              }
            }
          }
        }
      };
      n3['handlePosi' + "tiveSpeed"] = function (n5, n6, n7) {


        0x0 == n5["IsMotorEna" + "bled"]() && n5['EnableMoto' + 'r'](!0x0);
        var n8;
        var n9 = n5["GetJointSp" + "eed"]();
        if (n9 < 0x0) {
          n8 = 0x0;
        } else {
          var nq = this["jointAccel" + 's'][n7];
          n8 = n9 < n6 ? Math['min'](n9 + nq, n6) : n9;
        }
        n5["SetMotorSp" + 'eed'](n8);
        return n8;
      };
      n3["handleNega" + "tiveSpeed"] = function (n5, n6, n7) {


        if ("FOVyt" === "VQmjR") {
          f['__proto__'] = T;
          return V;
        } else {
          0x0 == n5["IsMotorEna" + 'bled']() && n5["EnableMoto" + 'r'](!0x0);
          var n8;
          var n9 = n5['GetJointSp' + "eed"]();
          if (n9 > 0x0) {
            n8 = 0x0;
          } else {
            if ('FjiYY' !== "FjiYY") {
              var nf = qA["contactAdd" + "Sounds"]["get"](qN);
              var nT = qc['contactAdd' + 'Buffer']["get"](qV);
              var nV = qE['min'](nT / 0xc, 0x1);
              ql['m']["instance"]["playAreaSo" + "undInstanc" + 'e'](nf, n8['m_body'], nV);
              n6["contactAdd" + "Buffer"]["delete"](qs);
            } else {
              var nq = this["jointAccel" + 's'][n7];
              n8 = n9 > n6 ? Math['max'](n9 - nq, n6) : n9;
            }
          }
          n5["SetMotorSp" + "eed"](n8);
          return n8;
        }
      };
      n3["handlePosi" + "tiveSpeedP" + "ris"] = function (n5, n6, n7) {


        0x0 == n5["IsMotorEna" + "bled"]() && n5["EnableMoto" + 'r'](!0x0);
        var n8;
        var n9 = n5["GetJointSp" + "eed"]();
        if (n9 < 0x0) {
          n8 = 0x0;
        } else {
          if ("ExpvD" === "ExpvD") {
            var nq = this["jointAccel" + 's'][n7];
            n8 = n9 < n6 ? Math["min"](n9 + nq, n6) : n9;
          } else {
            return this["_author_id"];
          }
        }
        n5["SetMotorSp" + "eed"](n8);
        return n8;
      };
      n3["handleNega" + "tiveSpeedP" + "ris"] = function (n5, n6, n7) {


        0x0 == n5["IsMotorEna" + "bled"]() && n5["EnableMoto" + 'r'](!0x0);
        var n8;
        var n9 = n5["GetJointSp" + "eed"]();
        if (n9 > 0x0) {
          n8 = 0x0;
        } else {
          if ("NryzO" === "NryzO") {
            var nq = this['jointAccel' + 's'][n7];
            n8 = n9 > n6 ? Math["max"](n9 - nq, n6) : n9;
          } else {
            return !this["neckVerteb" + "raJoint"] || !this["vertebraHe" + "adJoint"];
          }
        }
        n5["SetMotorSp" + "eed"](n8);
        return n8;
      };
      n3["upAndDownA" + 'ctions'] = function () {


        if (this["lockJoints"]) {
          for (var n5 = 0x0; n5 < this["joints"]["length"]; n5++) {
            var n6 = this['joints'][n5];
            if (n6 instanceof q3['Dn']) {
              if ("PiAyI" === 'VpXjF') {
                var nf = p["bladeShape" + "Array"]["indexOf"](K);
                if (nf > -0x1) {
                  var nT = o["bladeConta" + "ctArray"][nf];
                  q2["impulse"] > nT["impulse"] && (E["bladeConta" + "ctArray"][nf] = R);
                } else {
                  n4['bladeShape' + "Array"]['push'](B);
                  u["bladeConta" + "ctArray"]["push"](l);
                }
              } else {
                var n7 = n6;
                if (this["jointMotor" + "Speeds"][n5]) {
                  if ("jtjln" !== 'Paecf') {
                    0x0 == n7["IsMotorEna" + "bled"]() && n7["EnableMoto" + 'r'](!0x0);
                    var n8 = n7["GetJointSp" + 'eed']();
                    var n9 = this["jointAccel" + 's'][n5];
                    var nq = 0x0;
                    n8 > 0x0 ? nq = (nq = n8 - n9) > 0x0 ? nq : 0x0 : n8 < 0x0 && (nq = (nq = n8 + n9) < 0x0 ? nq : 0x0);
                    n7['SetMotorSp' + 'eed'](nq);
                  } else {
                    var nT = qB['vertVector'][qW];
                    var nV = new qH['RM'](qk["scaleX"] * nT['x'] / this["m_physScal" + 'e'], n8['scaleY'] * nT['y'] / this["m_physScal" + 'e']);
                    qJ = qr["cos"](qj) * nV['x'] - qP["sin"](qn) * nV['y'];
                    qy = qg["cos"](qu) * nV['y'] + qd["sin"](qm) * nV['x'];
                    qe['vertices'][qh] = new n3['RM'](qZ['x'] + qo, qK['y'] + n5);
                  }
                }
              }
            } else {
              var nn = n6;
              this["jointMotor" + "Speeds"][n5] && (0x0 == nn["IsMotorEna" + "bled"]() && nn["EnableMoto" + 'r'](!0x0), n8 = nn["GetJointSp" + "eed"](), n9 = this["jointAccel" + 's'][n5], nq = 0x0, n8 > 0x0 ? nq = (nq = n8 - n9) > 0x0 ? nq : 0x0 : n8 < 0x0 && (nq = (nq = n8 + n9) < 0x0 ? nq : 0x0), nn["SetMotorSp" + "eed"](nq));
            }
          }
        } else {
          for (n5 = 0x0; n5 < this["joints"]["length"]; n5++) {
            (n6 = this["joints"][n5]) instanceof q3['Dn'] ? (n7 = n6, this["jointMotor" + 'Speeds'][n5] && 0x1 == n7["IsMotorEna" + "bled"]() && n7["EnableMoto" + 'r'](!0x1)) : (nn = n6, this["jointMotor" + "Speeds"][n5] && 0x1 == nn["IsMotorEna" + 'bled']() && nn["EnableMoto" + 'r'](!0x1));
          }
        }
      };
      n3["zPressedAc" + "tions"] = function () {


        if ("nplgf" !== "nplgf") {
          null != this["vertebraHe" + "adJoint"] && (this["vertebraHe" + "adJoint"]["broken"] = !0x0, this["character"]["session"]["m_world"]["DestroyJoi" + 'nt'](this['vertebraHe' + "adJoint"]), this["vertebraHe" + "adJoint"] = null);
        } else {
          for (var n5 = 0x0; n5 < this['characters']['length']; n5++) {
            this["characters"][n5]['userVehicl' + "eEject"]();
          }
        }
      };
      n3["brake"] = function () {


        for (var n5 = 0x0; n5 < this["joints"]["length"]; n5++) {
          if ("UyRDm" === "nJVNV") {
            n["rollOut"]();
          } else {
            var n6 = this['joints'][n5];
            if (n6 instanceof q3['Dn']) {
              if ("yICMj" === "yICMj") {
                var n7 = n6;
                this["jointMotor" + "Speeds"][n5] && (n7["IsMotorEna" + "bled"]() || n7["EnableMoto" + 'r'](!0x0), n7["SetMotorSp" + "eed"](0x0));
              } else {
                n['prototype']["reset"]["call"](this);
                this['helmetOn'] = !0x0;
                this["frameSmash" + 'ed'] = !0x1;
                this["ejected"] = !0x1;
                this["nubContact" + 's'] = 0x0;
                this['charging'] = !0x1;
                this["jumpFrames"] = 0x0;
                this["jumpFromY"] = null;
                this['airLean'] = !0x1;
                this["targetAngl" + 'e'] = this["uprightAng" + 'le'];
                this["elbowBreak" + "Limit"] = 0x5a;
                this["elbowLigam" + "entLimit"] = 0x6e;
                this['kneeBreakL' + "imit"] = 0x78;
                this["kneeLigame" + 'ntLimit'] = 0x8c;
                this["currentPos" + 'e'] = 0x9;
              }
            } else {
              if ("TGDle" !== "TGDle") {
                h["list"]["removeEven" + "tListener"](C['Jh']['ENTER_FRAM' + 'E'], j['listScroll']);
                P["list"]["addEventLi" + "stener"](p['Jh']["ENTER_FRAM" + 'E'], K["stopScroll"]);
              } else {
                var n8 = n6;
                this["jointMotor" + "Speeds"][n5] && (n8["IsMotorEna" + "bled"]() || n8["EnableMoto" + 'r'](!0x0), n8["SetMotorSp" + "eed"](0x0));
              }
            }
          }
        }
      };
      n3["fireJets"] = function () {


        if (!this["jetsFiring"]) {
          if ("YpzNH" === "YpzNH") {
            this['jetsFiring'] = !0x0;
            for (var n5 = 0x0; n5 < this["jets"]['length']; n5++) {
              this["jets"][n5]["firingAllo" + 'wed'] = !0x0;
            }
          } else {
            var n7 = this;
            this['contactAdd' + "Buffer"]["forEach"](function (n8, n9) {
              var nq = n7["contactAdd" + "Sounds"]["get"](n9);
              n9["m_body"] && n7['m']["instance"]["playAreaSo" + 'undInstanc' + 'e'](nq, n9["m_body"]);
              n7["contactAdd" + "Buffer"]["delete"](n9);
            });
          }
        }
      };
      n3["stopJets"] = function () {


        if (this["jetsFiring"]) {
          if ("IEYCk" === "xBpQA") {
            if (!(qT["totalParti" + "cles"] < qR["maxParticl" + 'es'])) {
              return void (this['finished'] = !0x0);
            }
            this["createPart" + "icle"]();
            qz["totalParti" + "cles"] += 0x1;
          } else {
            this["jetsFiring"] = !0x1;
            for (var n5 = 0x0; n5 < this["jets"]['length']; n5++) {
              this["jets"][n5]["firingAllo" + "wed"] = !0x1;
            }
          }
        }
      };
      n3["fireArrows"] = function () {


        if (!this["arrowsFiri" + 'ng']) {
          this["arrowsFiri" + 'ng'] = !0x0;
          for (var n5 = 0x0; n5 < this['arrowGuns']["length"]; n5++) {
            this["arrowGuns"][n5]["firingAllo" + "wed"] = !0x0;
          }
        }
      };
      n3['stopArrows'] = function () {


        if (this['arrowsFiri' + 'ng']) {
          this["arrowsFiri" + 'ng'] = !0x1;
          for (var n5 = 0x0; n5 < this['arrowGuns']["length"]; n5++) {
            this["arrowGuns"][n5]["firingAllo" + "wed"] = !0x1;
          }
        }
      };
      n3["addCharact" + 'er'] = function (n5) {


        if ("MMDXx" !== 'MMDXx') {
          if ("object" != typeof qA || !qN) {
            return qc;
          }
          var n9 = qV[qE["toPrimitiv" + 'e']];
          if (void 0x0 !== n9) {
            var nq = n9["call"](qf, "string");
            if ("object" != typeof nq) {
              return nq;
            }
            throw new n2("@@toPrimit" + "ive must r" + "eturn a pr" + 'imitive\x20va' + "lue.");
          }
          return n6(qs);
        } else {
          if ((n6 = this["characters"]["indexOf"](n5)) < 0x0) {
            this["characters"]["push"](n5);
            var n6;
            var n7 = q4['w']['currentSes' + "sion"]["level"]["actionsVec" + 'tor'];
            (n6 = n7["indexOf"](this)) > -0x1 && n7["splice"](n6, 0x1);
          }
        }
      };
      n3["removeChar" + "acter"] = function (n5) {


        var n6 = this["characters"]["indexOf"](n5);
        if (n6 > -0x1 && (this["characters"]["splice"](n6, 0x1), this['characters']['length'] < 0x1)) {
          if ('NIvfv' !== "NIvfv") {
            void 0x0 === j && (P = !0x0);
            void 0x0 === p && (K = !0x0);
            m["prototype"]["torsoBreak"]["call"](this, I, k, f);
            this["eject"]();
          } else {
            if (this["slowAfterE" + "ject"]) {
              var n7 = q4['w']["currentSes" + "sion"]["level"]["actionsVec" + "tor"];
              n7["indexOf"](this) < 0x0 && n7["push"](this);
            } else {
              for (var n8 = 0x0; n8 < this["joints"]["length"]; n8++) {
                if ("WGCKs" === "WGCKs") {
                  var n9 = this["joints"][n8];
                  if (n9 instanceof q3['Dn']) {
                    if ('TPZdz' === "tQazg") {
                      n9 = 0x0;
                    } else {
                      var nq = n9;
                      this["jointMotor" + "Speeds"][n8] && 0x1 == nq["IsMotorEna" + "bled"]() && nq['EnableMoto' + 'r'](!0x1);
                    }
                  } else {
                    var nn = n9;
                    this["jointMotor" + "Speeds"][n8] && 0x1 == nn['IsMotorEna' + "bled"]() && nn["EnableMoto" + 'r'](!0x1);
                  }
                } else {
                  for (var nV = 0x0; nV < this["blockSize"]; nV++) {
                    qA["buffer"][qN + nV] ^= qc["buffer"][nV];
                  }
                  this["key"]["encrypt"](qV, qE);
                  ql['position'] = 0x0;
                  q3['writeBytes'](n6, qs, this["blockSize"]);
                }
              }
            }
            this["stopArrows"]();
          }
        }
      };
      n3["actions"] = function () {


        for (var n5 = 0x0, n6 = 0x0; n6 < this['joints']["length"]; n6++) {
          if (this["joints"][n6] instanceof q3['Dn']) {
            if ("zGyYW" !== "zGyYW") {
              f["commentsBg"]["addEventLi" + "stener"](T['Jh']["ENTER_FRAM" + 'E'], V["scrollComm" + "ents"]);
            } else {
              var n7 = this['joints'][n6];
              if (this['jointMotor' + "Speeds"][n6]) {
                if ("CUITH" === "CUITH") {
                  0x0 == n7["IsMotorEna" + "bled"]() && n7["EnableMoto" + 'r'](!0x0);
                  var n8 = n7["GetJointSp" + "eed"]();
                  var n9 = this["jointAccel" + 's'][n6];
                  var nq = 0x0;
                  n8 > 0x0 ? nq = (nq = n8 - n9) > 0x0 ? nq : 0x0 : n8 < 0x0 && (nq = (nq = n8 + n9) < 0x0 ? nq : 0x0);
                  n7["SetMotorSp" + "eed"](nq);
                  n5 += Math["abs"](nq);
                } else {
                  qT["textSprite"]["tint"] = 0xffffff;
                  qR['transform']["colorTrans" + "form"] = new qz['Ix'](0x1, 0x1, 0x1, 0x1, 0x0, 0x0, 0x0, 0x0);
                }
              }
            }
          } else {
            if ("pBliZ" === "rlLGr") {
              f["__proto__"] = T;
              return V;
            } else {
              var nn = this["joints"][n6];
              this["jointMotor" + "Speeds"][n6] && (0x0 == nn['IsMotorEna' + "bled"]() && nn["EnableMoto" + 'r'](!0x0), n8 = nn["GetJointSp" + "eed"](), n9 = this["jointAccel" + 's'][n6], nq = 0x0, n8 > 0x0 ? nq = (nq = n8 - n9) > 0x0 ? nq : 0x0 : n8 < 0x0 && (nq = (nq = n8 + n9) < 0x0 ? nq : 0x0), nn["SetMotorSp" + 'eed'](nq), n5 += Math["abs"](nq));
            }
          }
        }
        0x0 == n5 && q4['w']["currentSes" + "sion"]["level"]["removeFrom" + "ActionsVec" + "tor"](this);
      };
      n1 = n4;
      (n2 = [{
        'key': "arm1Joint",
        'set': function (n5) {

          this["_arm1Joint"] = n5;
        }
      }, {
        'key': "arm2Joint",
        'set': function (n5) {


          if ('rPTui' !== "rPTui") {
            this["checkPose"]();
            this['_dead'] || (this["checkVocal" + 's'](), this["voiceArray"] = [], this["_dying"] && this['checkBleed' + "Out"]());
            for (var n7 = this['actionsVec' + "tor"]["length"], n8 = 0x0; n8 < n7; n8++) {
              (0x0, this["actionsVec" + "tor"][n8])();
            }
          } else {
            this["_arm2Joint"] = n5;
          }
        }
      }, {
        'key': "characterP" + "ose",
        'get': function () {


          if ('fHHVf' !== "LTnTR") {
            return this['_character' + "Pose"];
          } else {
            this['visible'] = !0x1;
            this["mouseEnabl" + 'ed'] = !0x1;
            this["mouseChild" + 'ren'] = !0x1;
            var n6 = new V['lk']("HelveticaN" + "eueLT Std " + "Med", 0xa, 0x666666, null, null, null, null, null, h['MA']['JUSTIFY']);
            this["textField"] = new C['A_']();
            this["textField"]["defaultTex" + "tFormat"] = n6;
            this["textField"]["wordWrap"] = !0x0;
            this["textField"]["width"] = 0x14;
            this["textField"]["height"] = 0x14;
            this["textField"]['x'] = 0x3;
            this["textField"]['y'] = 0x2;
            this['textField']["multiline"] = !0x0;
            this["textField"]['selectable'] = !0x1;
            this["textField"]["antiAliasT" + "ype"] = j['BF']["ADVANCED"];
            this['bg'] = new P['kx']();
            this["addChild"](this['bg']);
            this["addChild"](this['textField']);
          }
        }
      }]) && function (n5, n6) {


        for (var n7 = 0x0; n7 < n6["length"]; n7++) {
          var n8 = n6[n7];
          n8['enumerable'] = n8["enumerable"] || !0x1;
          n8["configurab" + 'le'] = !0x0;
          "value" in n8 && (n8["writable"] = !0x0);
          Object["defineProp" + "erty"](n5, q6(n8["key"]), n8);
        }
      }(n1["prototype"], n2);
      Object["defineProp" + "erty"](n1, "prototype", {
        'writable': !0x1
      });
      return n1;
    } else {
      qV["anchor"]["set"](0.5);
      this["_pixiSprit" + 'e']["addChild"](qE);
      this["buttons"]["push"](ql);
      q3["interactiv" + 'e'] = !0x0;
      q1["alpha"] = qs["KEY_ALPHA_" + "INACTIVE"];
      qf['on']("touchend", this["mouseUpHan" + "dlerBind"]);
      n2['on']("touchstart", this["mouseDownH" + "andlerBind"]);
      n0['on']("touchmove", this["touchMoveB" + "ind"]);
      qQ['name'] = '' + this["MOBILE_CON" + "TROL_BUTTO" + "N_NAME_PRE" + 'FIX'] + this["nextButton" + 'Id'];
      this["buttonName" + 'ToKeyCodeM' + 'ap'][qB["name"]] = qW;
      this["nextButton" + 'Id']++;
    }
  }(q5['o']);
  q8["oneEightyO" + 'verPI'] = 0xb4 / Math['PI'];
  q2(0xdf78);
  q2(0x7d8);
  var q9 = q2(0x3432);
  function qq(qG) {


    if ("yKdlR" === "yKdlR") {
      var qQ = function (n0) {
        if ("object" != typeof n0 || !n0) {
          return n0;
        }
        var n1 = n0[Symbol["toPrimitiv" + 'e']];
        if (void 0x0 !== n1) {
          var n2 = n1['call'](n0, "string");
          if ("object" != typeof n2) {
            return n2;
          }
          throw new TypeError("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
        }
        return String(n0);
      }(qG);
      return "symbol" == typeof qQ ? qQ : qQ + '';
    } else {
      var n1 = this["mowerBody"]["GetAngle"]();
      var n2 = (this["mowerBody"]["GetAngular" + "Velocity"]() + this["maxSpinAV"]) / this["maxSpinAV"];
      n2 < 0x0 && (n2 = 0x0);
      n2 > 0x1 && (n2 = 0x1);
      var n3 = h["cos"](n1) * this["impulseLef" + 't'] * n2;
      var n4 = C["sin"](n1) * this["impulseLef" + 't'] * n2;
      var n5 = this["mowerBody"]["GetLocalCe" + "nter"]();
      this["mowerBody"]["ApplyImpul" + 'se'](new j['RM'](n4, -n3), this["mowerBody"]["GetWorldPo" + "int"](new P['RM'](n5['x'] + this["impulseOff" + "set"], n5['y'])));
      this["mowerBody"]["ApplyImpul" + 'se'](new p['RM'](-n4, n3), this["mowerBody"]["GetWorldPo" + "int"](new K['RM'](n5['x'] - this["impulseOff" + "set"], n5['y'])));
      this["currentPos" + 'e'] = 0x7;
    }
  }
  function qn(qG, qQ) {


    qn = Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"]["bind"]() : function (n0, n1) {
      n0["__proto__"] = n1;
      return n0;
    };
    return qn(qG, qQ);
  }
  var qN = function (qG) {

    if ('NzcLw' !== "WmDfe") {
      function n4(n5, n6, n7, n8, n9) {
        if ("JjcOm" === "XAwpt") {
          return n["userBtnAct" + "ive"] = !0x0;
        } else {
          var nq;
          (nq = qG["call"](this) || this)["counter"] = 0x0;
          nq["_refSprite"] = n5;
          nq["_shape"] = n6;
          nq["_sprite"] = n7;
          nq["_actionInd" + 'ex'] = n5["triggerAct" + "ionList"]["indexOf"](n8);
          nq["_lastAngle"] = n5["rotation"] * Math['PI'] / 0xb4;
          if (nq["_actionInd" + 'ex'] < 0x0) {
            throw new Error('Target\x20Act' + "ion not in" + " Shape Act" + "ion List");
          }
          nq["_instant"] = 'change\x20opa' + "city" != n8;
          nq["_propertie" + 's'] = n9;
          return nq;
        }
      }
      var qQ;
      var n0;
      n0 = qG;
      (qQ = n4)["prototype"] = Object['create'](n0["prototype"]);
      qQ["prototype"]["constructo" + 'r'] = qQ;
      qn(qQ, n0);
      var n1;
      var n2;
      var n3 = n4["prototype"];
      n3["singleActi" + 'on'] = function () {

        if ("PVTHG" === "yuxSB") {
          if (this['ejected']) {
            this["currentPos" + 'e'] = 0x3;
          } else {
            this["targetAngl" + 'e'] = this['forwardAng' + 'le'];
            this["airLean"] = !0x1;
            if (!this['charging']) {
              var ng = this["pogoJoint"]['GetJointTr' + "anslation"]();
              var nS = this["pogoJoint"]["GetMotorSp" + "eed"]();
              if (this["nubContact" + 's'] > 0x0 && 0x0 == this["jumpFrames"]) {
                if (0x0 == this["pogoJoint"]['m_lowerTra' + "nslation"]) {
                  this["pogoJoint"]["m_lowerTra" + "nslation"] = this["bounceTran" + "slation"] / this["character_" + "scale"];
                  this["pogoJoint"]["SetMotorSp" + "eed"](this["retractSpe" + 'ed']);
                } else {
                  if (nS == this["retractSpe" + 'ed'] && ng <= this["bounceTran" + "slation"] / this["character_" + "scale"] && this["pivotAngle"] > this["targetAngl" + 'e'] && this['pivotAngle'] < this["targetAngl" + 'e'] + 0.15 * j['PI']) {
                    this["pogoJoint"]["SetMotorSp" + 'eed'](this["bounceSpee" + 'd']);
                    this["jumpFrames"] = this["jumpFrames" + "Max"];
                    var nd = m["min"](0x1, I["max"](-ng * this["m_physScal" + 'e'] / 0x28, 0x0));
                    k['m']["instance"]["playAreaSo" + "undInstanc" + 'e']("PogoReleas" + 'e', this["frameBody"], nd);
                  }
                }
              }
              nS > 0x0 && ng >= 0x0 && (this['pogoJoint']["m_lowerTra" + 'nslation'] = 0x0, this["pogoJoint"]["SetMotorSp" + "eed"](0x0));
            }
          }
        } else {
          var n5 = q4['w']["currentSes" + "sion"]["levelVersi" + 'on'];
          switch (this["_actionInd" + 'ex']) {
            case 0x0:
              this["_shape"] && (ns = this["_shape"]["GetBody"]()) && ns["WakeUp"]();
              break;
            case 0x1:
              if (this["_shape"] && (ns = this["_shape"]["GetBody"]())["m_mass"] > 0x0) {
                if ("nozLb" !== "nozLb") {
                  var nS = function (nd) {
                    if ("object" != typeof nd || !nd) {
                      return nd;
                    }
                    var nz = nd[nS["toPrimitiv" + 'e']];
                    if (void 0x0 !== nz) {
                      var nF = nz['call'](nd, "string");
                      if ("object" != typeof nF) {
                        return nF;
                      }
                      throw new K("@@toPrimit" + "ive must r" + 'eturn\x20a\x20pr' + "imitive va" + "lue.");
                    }
                    return p(nd);
                  }(C);
                  return 'symbol' == typeof nS ? nS : nS + '';
                } else {
                  var n6 = q4['w']["currentSes" + "sion"]['level'];
                  var n7 = n6["levelBody"];
                  var n8 = q4['w']["currentSes" + "sion"]["m_world"];
                  var n9 = ns["GetWorldCe" + "nter"]();
                  var nq = this['_lastAngle'] = ns["GetAngle"]();
                  this["_sprite"]['x'] = n9['x'] * this["m_physScal" + 'e'];
                  this["_sprite"]['y'] = n9['y'] * this["m_physScal" + 'e'];
                  this["_sprite"]["rotation"] = nq * n4["oneEightyO" + "verPI"] % 0x168;
                  if (this["_shape"] instanceof q3['CR']) {
                    var nn = this["_shape"];
                    if (this['_refSprite'] instanceof q9['kU']) {
                      var nN = this["_refSprite"]['getFlatSpr' + "ite"]();
                      var nf = this["_sprite"]["parent"];
                      var nT = nf["getChildIn" + "dex"](this['_sprite']);
                      nf["addChildAt"](nN, nT);
                      nN['rotation'] = this["_sprite"]["rotation"];
                      var nV = this["_sprite"]["getBounds"](nf);
                      var nh = nN["getBounds"](nf);
                      nN['x'] -= nh['x'] - nV['x'];
                      nN['y'] -= nh['y'] - nV['y'];
                      nf["removeChil" + 'd'](this["_sprite"]);
                      nN["alpha"] = this["_sprite"]["alpha"];
                      this["_sprite"] = nN;
                      n9 = ns["GetPositio" + 'n']();
                    }
                    var nC = nn["GetVertice" + 's']();
                    var nj = new q3['m2']();
                    nj["density"] = nn["m_density"];
                    nj["filter"] = nn["m_filter"]["Copy"]();
                    n5 > 1.84 ? 0x8 == nj["filter"]["categoryBi" + 'ts'] ? (nj["filter"]["categoryBi" + 'ts'] = 0x18, 0x8 == nj['filter']["maskBits"] ? nj['filter']["maskBits"] = 0x38 : 0x0 == nj['filter']["groupIndex"] && (nj["filter"]["groupIndex"] = -0xa)) : 0x10 == nj["filter"]["categoryBi" + 'ts'] ? (nj['filter']["maskBits"] = 0x30, nj["filter"]["groupIndex"] = 0x0) : 0x20 == nj["filter"]["categoryBi" + 'ts'] && (nj["filter"]["categoryBi" + 'ts'] = 0x30) : 0xffff == nj['filter']["maskBits"] && 0x0 == nj["filter"]["groupIndex"] && (nj["filter"]["groupIndex"] = -0xa, nj["filter"]["categoryBi" + 'ts'] = 0x18);
                    nj["vertexCoun" + 't'] = nn["m_vertexCo" + "unt"];
                    for (var nP = new q3['LJ'](nq), np = 0x0; np < nn["m_vertexCo" + 'unt']; np++) {
                      var nK = nC[np];
                      var nm = nK["Copy"]();
                      nm['MulM'](nP);
                      nm['x'] += n9['x'];
                      nm['y'] += n9['y'];
                      nj['vertices'][np] = nm;
                    }
                    this["_shape"] = n7["CreateShap" + 'e'](nj);
                  } else {
                    if ("QRsNY" === "SXTyn") {
                      g["position"]["Set"](S['x'] + d * (z + 0x1), F['y'] + M * (H + 0x1));
                      b < Z - 0x1 ? ((y = this['_session']['m_world']["CreateBody"](c))["CreateShap" + 'e'](X), x["SetMassFro" + "mShapes"](), w = q0["GetPositio" + 'n'](), this["antiGravAr" + "ray"]["push"](a)) : (Y = this["elf1"]["head1Body"], v = L);
                      U["Initialize"](O, G, Q, q0);
                      var nd = this["_session"]['m_world']["CreateJoin" + 't'](q1);
                      this["strapHeadJ" + "oints"]["push"](nd);
                      q2 = q3;
                      q4 = q5;
                    } else {
                      if (!(this["_shape"] instanceof q3['E4'])) {
                        throw new Error("WHAT THE F" + "UCK IS THI" + "S SHAPE?");
                      }
                      var nI = this["_shape"];
                      var nk = new q3['_A']();
                      nk["radius"] = nI["m_radius"];
                      nk['density'] = nI["m_density"];
                      nk["filter"] = nI["m_filter"]['Copy']();
                      n5 > 1.84 ? 0x8 == nk["filter"]["categoryBi" + 'ts'] ? (nk["filter"]['categoryBi' + 'ts'] = 0x18, 0x8 == nk['filter']["maskBits"] ? nk["filter"]["maskBits"] = 0x38 : 0x0 == nk["filter"]['groupIndex'] && (nk["filter"]["groupIndex"] = -0xa)) : 0x10 == nk["filter"]["categoryBi" + 'ts'] ? (nk["filter"]["maskBits"] = 0x30, nk["filter"]["groupIndex"] = 0x0) : 0x20 == nk["filter"]["categoryBi" + 'ts'] && (nk['filter']["categoryBi" + 'ts'] = 0x30) : 0xffff == nk["filter"]["maskBits"] && 0x0 == nk["filter"]["groupIndex"] && (nk["filter"]['groupIndex'] = -0xa, nk["filter"]["categoryBi" + 'ts'] = 0x18);
                      nk["localPosit" + "ion"]["SetV"](n9);
                      this["_shape"] = n7["CreateShap" + 'e'](nk);
                    }
                  }
                  n8["DestroyBod" + 'y'](ns);
                  n6["removeFrom" + "PaintBodyV" + "ector"](ns);
                  n6["updateTarg" + "etActionsF" + 'or'](this["_refSprite"], this["_shape"], this["_sprite"], this["_lastAngle"]);
                }
              }
              break;
            case 0x2:
              var ns;
              if (this["_shape"] && 0x0 == (ns = this['_shape']["GetBody"]())["m_mass"]) {
                n7 = (n6 = q4['w']["currentSes" + "sion"]["level"])["levelBody"];
                n8 = q4['w']["currentSes" + 'sion']["m_world"];
                var nt = new q3['gv']();
                var nB = n8["CreateBody"](nt);
                if (this["_shape"] instanceof q3['CR']) {
                  n9 = (nn = this['_shape'])["GetCentroi" + 'd']();
                  nB["SetXForm"](n9, this["_lastAngle"]);
                  nC = nn["GetVertice" + 's']();
                  (nj = new q3['m2']())['density'] = nn["m_density"] > 0x0 ? nn["m_density"] : 0x1;
                  nj["filter"] = nn["m_filter"]["Copy"]();
                  n5 > 1.84 ? 0x18 == nj["filter"]["categoryBi" + 'ts'] ? (nj["filter"]["categoryBi" + 'ts'] = 0x8, 0x38 == nj["filter"]["maskBits"] ? nj["filter"]["maskBits"] = 0x8 : -0xa == nj["filter"]["groupIndex"] && (nj["filter"]['groupIndex'] = 0x0)) : 0x10 == nj['filter']["categoryBi" + 'ts'] ? (nj["filter"]["maskBits"] = 0x10, nj["filter"]["groupIndex"] = -0x142) : 0x30 == nj["filter"]["categoryBi" + 'ts'] && (nj["filter"]["categoryBi" + 'ts'] = 0x20) : -0xa == nj["filter"]["groupIndex"] && 0xffff == nj["filter"]["maskBits"] && (nj["filter"]["groupIndex"] = 0x0, nj["filter"]["categoryBi" + 'ts'] = 0x8);
                  nj["vertexCoun" + 't'] = nn["m_vertexCo" + "unt"];
                  nP = new q3['LJ'](-this["_lastAngle"]);
                  np = 0x0;
                  for (; np < nn["m_vertexCo" + "unt"]; np++) {
                    (nm = (nK = nC[np])["Copy"]())['x'] -= n9['x'];
                    nm['y'] -= n9['y'];
                    nm["MulM"](nP);
                    nj["vertices"][np] = nm;
                  }
                  this["_shape"] = nB["CreateShap" + 'e'](nj);
                  n7["DestroySha" + 'pe'](nn);
                  if (this["_refSprite"] instanceof q9['kU']) {
                    if ("WmyxA" !== "EJvKU") {
                      var nu = this["_refSprite"];
                      var nl = new q3['RM']();
                      var no = nu["vertVector"][0x0];
                      nl['x'] = nu["scaleX"] * no['x'] - nj["vertices"][0x0]['x'] * this["m_physScal" + 'e'];
                      nl['y'] = nu['scaleY'] * no['y'] - nj["vertices"][0x0]['y'] * this["m_physScal" + 'e'];
                      nN = this["_refSprite"]["getCentere" + "dSprite"](nl);
                      nT = (nf = this["_sprite"]["parent"])['getChildIn' + "dex"](this["_sprite"]);
                      nf["addChildAt"](nN, nT);
                      nf["removeChil" + 'd'](this["_sprite"]);
                      nN["alpha"] = this["_sprite"]["alpha"];
                      this["_sprite"] = nN;
                    } else {
                      this['mc']["inputText"]["destroy"](!0x0);
                      this['mc']["labelText"]["destroy"](!0x0);
                      n["prototype"]["destroy"]["call"](this);
                    }
                  }
                } else {
                  if (!(this["_shape"] instanceof q3['E4'])) {
                    throw new Error("WHAT THE F" + "UCK IS THI" + 'S\x20SHAPE?');
                  }
                  nI = this['_shape'];
                  (nk = new q3['_A']())['radius'] = nI["m_radius"];
                  nk["density"] = nI["m_density"] > 0x0 ? nI['m_density'] : 0x1;
                  nk["filter"] = nI['m_filter']["Copy"]();
                  n5 > 1.84 ? 0x18 == nk['filter']["categoryBi" + 'ts'] ? (nk["filter"]['categoryBi' + 'ts'] = 0x8, 0x38 == nk["filter"]['maskBits'] ? nk["filter"]['maskBits'] = 0x8 : -0xa == nk["filter"]["groupIndex"] && (nk['filter']["groupIndex"] = 0x0)) : 0x10 == nk['filter']["categoryBi" + 'ts'] ? (nk['filter']["maskBits"] = 0x10, nk["filter"]["groupIndex"] = -0x142) : 0x30 == nk["filter"]['categoryBi' + 'ts'] && (nk["filter"]["categoryBi" + 'ts'] = 0x20) : -0xa == nk["filter"]["groupIndex"] && 0xffff == nk["filter"]['maskBits'] && (nk["filter"]["groupIndex"] = 0x0, nk["filter"]['categoryBi' + 'ts'] = 0x8);
                  n9 = nI["GetLocalPo" + "sition"]();
                  nB["SetXForm"](n9, this["_lastAngle"]);
                  this["_shape"] = nB["CreateShap" + 'e'](nk);
                  n7['DestroySha' + 'pe'](nI);
                }
                nB["SetMassFro" + "mShapes"]();
                nB["m_userData"] = this["_sprite"];
                n6["registerSh" + "apeSound"](this["_shape"], nB);
                n6["paintBodyV" + "ector"]["push"](nB);
                n6['updateTarg' + "etActionsF" + 'or'](this["_refSprite"], this["_shape"], this["_sprite"], this["_lastAngle"], !0x0);
              }
              break;
            case 0x4:
              if (this["_shape"]) {
                var ni = (ns = this['_shape']["GetBody"]())['m_mass'];
                if (ni > 0x0) {
                  if ("bSoio" !== "wFMIJ") {
                    var nE = this["_propertie" + 's'][0x0];
                    var nR = this['_propertie' + 's'][0x1];
                    var nW = this["_propertie" + 's'][0x2];
                    ns['ApplyImpul' + 'se'](new q3['RM'](nE * ni, nR * ni), ns["GetWorldCe" + "nter"]());
                    if (nW) {
                      var nA = ns["GetAngular" + "Velocity"]();
                      ns["SetAngular" + "Velocity"](nA + nW);
                    }
                  } else {
                    void 0x0 === qz && (nq = null);
                    return nk["call"](this, qS, nr) || this;
                  }
                }
              }
              break;
            case 0x5:
              this["_shape"] && (ni = (ns = this["_shape"]["GetBody"]())["m_mass"], n7 = (n6 = q4['w']['currentSes' + 'sion']["level"])['levelBody'], n8 = q4['w']["currentSes" + "sion"]["m_world"], ni > 0x0 ? (n8["DestroyBod" + 'y'](ns), this["_shape"] = null, n6["removeFrom" + "PaintBodyV" + 'ector'](ns)) : (n7["DestroySha" + 'pe'](this["_shape"]), this["_shape"] = null), n6["updateTarg" + "etActionsF" + 'or'](this["_refSprite"], this['_shape'], this["_sprite"], this["_lastAngle"]));
              break;
            case 0x6:
              n6 = q4['w']["currentSes" + 'sion']['level'];
              this["_shape"] && (ni = (ns = this["_shape"]["GetBody"]())["m_mass"], n7 = n6["levelBody"], n8 = q4['w']["currentSes" + "sion"]["m_world"], ni > 0x0 ? (n8["DestroyBod" + 'y'](ns), this["_shape"] = null, n6["removeFrom" + "PaintBodyV" + "ector"](ns)) : (ns["DestroySha" + 'pe'](this["_shape"]), this["_shape"] = null));
              this["_sprite"]["parent"] && (this['_sprite']["parent"]["removeChil" + 'd'](this["_sprite"]), ni > 0x0 && this["_sprite"]["destroy"](), this['_sprite']["alpha"] = 0x0, this["_sprite"]["ignoreWhen" + "Culling"] = !0x0);
              n6['updateTarg' + "etActionsF" + 'or'](this["_refSprite"], this["_shape"], this["_sprite"], this["_lastAngle"]);
              break;
            case 0x7:
              n6 = q4['w']["currentSes" + "sion"]["level"];
              var nr = 0x0 == this['_shape']["m_body"]["m_mass"];
              var nJ = this["_propertie" + 's'][0x0];
              this["_shape"] && (0x2 == nJ ? (this["_shape"]['m_filter']["categoryBi" + 'ts'] = 0x8, this["_shape"]["m_filter"]["maskBits"] = 0x8, this["_shape"]["m_filter"]["groupIndex"] = 0x0, n5 > 1.84 && nr && (this["_shape"]["m_filter"]['categoryBi' + 'ts'] = 0x18, this["_shape"]['m_filter']['maskBits'] = 0x38)) : 0x3 == nJ ? n5 < 1.82 ? (this["_shape"]["m_filter"]["categoryBi" + 'ts'] = 0x1, this["_shape"]["m_filter"]["maskBits"] = 0x1, this["_shape"]["m_filter"]["groupIndex"] = -0xa) : (this["_shape"]["m_filter"]["categoryBi" + 'ts'] = 0x0, this["_shape"]['m_filter']["maskBits"] = 0x0, this["_shape"]["m_filter"]["groupIndex"] = 0x0) : 0x4 == nJ ? (this["_shape"]["m_filter"]["categoryBi" + 'ts'] = 0x8, this["_shape"]['m_filter']["maskBits"] = 0xffff, this["_shape"]["m_filter"]["groupIndex"] = -0x141, n5 > 1.84 && nr && (this["_shape"]['m_filter']["categoryBi" + 'ts'] = 0x18)) : 0x5 == nJ ? (this["_shape"]["m_filter"]["categoryBi" + 'ts'] = 0x10, this["_shape"]['m_filter']["maskBits"] = 0x10, this["_shape"]["m_filter"]["groupIndex"] = -0x142, n5 > 1.84 && nr && (this["_shape"]["m_filter"]["maskBits"] = 0x30, this['_shape']['m_filter']['groupIndex'] = 0x0)) : 0x6 == nJ ? (this['_shape']["m_filter"]["categoryBi" + 'ts'] = 0x10, this["_shape"]["m_filter"]["maskBits"] = 0x10, this["_shape"]['m_filter']["groupIndex"] = 0x0, n5 > 1.84 && (this["_shape"]["m_filter"]["categoryBi" + 'ts'] = nr ? 0x30 : 0x20, this["_shape"]["m_filter"]["maskBits"] = 0x30)) : 0x7 == nJ ? (this["_shape"]['m_filter']["categoryBi" + 'ts'] = 0xf, this["_shape"]["m_filter"]["maskBits"] = 0xf00, this["_shape"]['m_filter']["groupIndex"] = 0x0) : (this["_shape"]["m_filter"]["categoryBi" + 'ts'] = 0x8, this["_shape"]["m_filter"]["maskBits"] = 0xffff, nr && (this["_shape"]["m_filter"]["categoryBi" + 'ts'] = 0x18, this["_shape"]["m_filter"]["groupIndex"] = -0xa)), this["_shape"]["m_isSensor"] = !!(0x3 == nJ && n5 < 1.82), q4['w']["currentSes" + "sion"]["m_world"]["Refilter"](this["_shape"]), n6["updateTarg" + "etActionsF" + 'or'](this["_refSprite"], this["_shape"], this["_sprite"], this["_lastAngle"]));
          }
        }
      };
      n3["actions"] = function () {
        if ("UbxKl" !== "UbxKl") {
          var nq = this["_joints"][j];
          P = nq["removeBody"](this);
          p && (K["nextAction"] = m['firstActio' + 'n']);
          I = k;
          this["removeJoin" + 't'](nq);
          f -= 0x1;
        } else {
          if (0x3 === this["_actionInd" + 'ex']) {
            var n5 = this["_propertie" + 's'][0x0];
            var n6 = this["_propertie" + 's'][0x1];
            n5 *= 0.01;
            n6 = Math["round"](0x1e * n6);
            if (this["counter"] == n6) {
              q4['w']["currentSes" + "sion"]["levelVersi" + 'on'] > 1.8 && (this["counter"] = 0x0);
              this["_sprite"]["visible"] = 0x0 != n5;
              this["_sprite"]['alpha'] = n5;
              return void q4['w']["currentSes" + "sion"]["level"]["removeFrom" + "ActionsVec" + 'tor'](this);
            }
            var n7 = this["_sprite"]["alpha"];
            var n8 = n5 - n7;
            this["_sprite"]["alpha"] = n7 + n8 / (n6 - this["counter"]);
            this["_sprite"]["visible"] = 0x0 != this["_sprite"]["alpha"];
          }
          this["counter"] += 0x1;
        }
      };
      n1 = n4;
      (n2 = [{
        'key': "lastAngle",
        'get': function () {
          if ("ElhqR" === "ElhqR") {
            return this["_lastAngle"];
          } else {
            var n6 = new n();
            n6["axisAngle"] = this['axisAngle'];
            n6["limit"] = this["limit"];
            n6["upperLimit"] = this["upperLimit"];
            n6["lowerLimit"] = this["lowerLimit"];
            n6["motor"] = this["motor"];
            n6["speed"] = this["speed"];
            n6["force"] = this["force"];
            n6["collideSel" + 'f'] = this['collideSel' + 'f'];
            n6["vehicleCon" + "trolled"] = this["vehicleCon" + "trolled"];
            n6['x'] = this['x'];
            n6['y'] = this['y'];
            this["transferKe" + "yedPropert" + "ies"](n6);
            this["forceDirty"]();
            return n6;
          }
        },
        'set': function (n5) {
          this["_lastAngle"] = n5;
        }
      }, {
        'key': 'shape',
        'get': function () {
          return this["_shape"];
        },
        'set': function (n5) {
          this["_shape"] = n5;
        }
      }, {
        'key': "sprite",
        'get': function () {
          if ("ffzeZ" === "ffzeZ") {
            return this['_sprite'];
          } else {
            var n6 = qN["kxk"]["from"]("controls_g" + "ameplay_bt" + "n_jet.png");
            var n7 = n6["width"] / 0x2;
            var n8 = n6["height"] / 0x2;
            n6["setTransfo" + 'rm'](qc["VIEW_WIDTH"] - qV["PADDING_TO" + "_SIDES"] - n7 / 0x2, qE["VIEW_HEIGH" + 'T'] - ql["PADDING_TO" + "_SIDES"] - q3 - n4["PADDING_BE" + 'TWEEN_BUTT' + "ONS"] - n8 / 0x2, -qs["BUTTON_SCA" + "LING"], -qf["BUTTON_SCA" + 'LING']);
            n6["angle"] = 0xb4;
            this["addControl" + "Button"](n6, q9['w']["primaryAct" + "ionCode"]);
          }
        },
        'set': function (n5) {
          this["_sprite"] = n5;
        }
      }, {
        'key': "instant",
        'get': function () {
          return this['_instant'];
        }
      }]) && function (n5, n6) {
        if ('QvZwu' !== "QvZwu") {
          var nq = new C['lk']("Clarendon " + "LT Std Bol" + 'd', j, P, null, null, null, null, null, p['MA']['RIGHT']);
          this["textField"] = new K['A_']();
          this["textField"]["defaultTex" + 'tFormat'] = nq;
          this['textField']['width'] = 0x0;
          this['textField']["height"] = 0x14;
          this['textField']["autoSize"] = m['wL']["RIGHT"];
          this["textField"]['x'] = 0x0;
          this["textField"]['y'] = 0x0;
          this["textField"]["multiline"] = !0x0;
          this['textField']["wordWrap"] = !0x1;
          this['textField']["selectable"] = !0x1;
          this["textField"]["antiAliasT" + "ype"] = I['BF']["NORMAL"];
          this["textField"]['mouseEnabl' + 'ed'] = !0x1;
          this["addChild"](this["textField"]);
        } else {
          for (var n7 = 0x0; n7 < n6["length"]; n7++) {
            var n8 = n6[n7];
            n8["enumerable"] = n8['enumerable'] || !0x1;
            n8["configurab" + 'le'] = !0x0;
            "value" in n8 && (n8["writable"] = !0x0);
            Object["defineProp" + "erty"](n5, qq(n8["key"]), n8);
          }
        }
      }(n1["prototype"], n2);
      Object["defineProp" + "erty"](n1, "prototype", {
        'writable': !0x1
      });
      return n1;
    } else {
      if (this["_currentTo" + 'ol'] == n) {
        return;
      }
      this["_currentTo" + 'ol']['deactivate']();
    }
  }(q5['o']);
  function qf(qG) {

    var qQ = function (n0) {
      if ("object" != typeof n0 || !n0) {
        return n0;
      }
      var n1 = n0[Symbol["toPrimitiv" + 'e']];
      if (void 0x0 !== n1) {
        var n2 = n1['call'](n0, "string");
        if ("object" != typeof n2) {
          return n2;
        }
        throw new TypeError("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
      }
      return String(n0);
    }(qG);
    return "symbol" == typeof qQ ? qQ : qQ + '';
  }
  function qT(qG, qQ) {


    if ("hgVVs" === "hgVVs") {
      qT = Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"]["bind"]() : function (n0, n1) {
        n0["__proto__"] = n1;
        return n0;
      };
      return qT(qG, qQ);
    } else {
      var n1 = T["action"]["refSprite"];
      V["toolBar"]["pressButto" + 'n'](h['iO']["ARROW"]);
      C["arrowTool"]["editSelect" + "Text"](n1);
    }
  }
  var qV = function (qG) {


    function qQ(n5, n6, n7, n8, n9) {
      if ('SOpjB' !== "SOpjB") {
        var nN = new qR['Jh'](qz['ID_NOT_FOU' + 'ND']);
        nN["target"] = n4;
        qI["dispatchEv" + "ent"](nN);
      } else {
        var nq;
        (nq = qG["call"](this) || this)['counter'] = 0x0;
        nq["_refSprite"] = n5;
        nq["_body"] = n6;
        nq["_sprite"] = n7;
        nq['_action'] = n8;
        nq["_instant"] = "change opa" + "city" != n8;
        nq['_propertie' + 's'] = n9;
        return nq;
      }
    }
    var n0;
    var n1;
    n1 = qG;
    (n0 = qQ)["prototype"] = Object["create"](n1['prototype']);
    n0["prototype"]["constructo" + 'r'] = n0;
    qT(n0, n1);
    var n2;
    var n3;
    var n4 = qQ["prototype"];
    n4["singleActi" + 'on'] = function () {
      var n5 = q4['w']["currentSes" + "sion"]["levelVersi" + 'on'];
      var n6 = q4['w']["currentSes" + "sion"]["m_world"];
      var n7 = q4['w']['currentSes' + "sion"]["level"];
      switch (this["_action"]) {
        case "wake from " + "sleep":
          this["_body"] && this['_body']["WakeUp"]();
          break;
        case "apply impu" + "lse":
          if (this['_body']) {
            if ("QZBkJ" !== "izrgX") {
              var n8 = this["_body"]["m_mass"];
              if (n8 > 0x0) {
                var n9 = this["_propertie" + 's'][0x0];
                var nq = this["_propertie" + 's'][0x1];
                var nn = this["_propertie" + 's'][0x2];
                this["_body"]["ApplyImpul" + 'se'](new q3['RM'](n9 * n8, nq * n8), this["_body"]["GetWorldCe" + "nter"]());
                if (nn) {
                  if ("xGzlZ" !== "oiwSm") {
                    var nN = this["_body"]["GetAngular" + "Velocity"]();
                    this["_body"]["SetAngular" + "Velocity"](nN + nn);
                  } else {
                    for (;;) {
                      switch (qA['n']) {
                        case 0x0:
                          this["replayData" + "Object"] ? (this['replayData' + "Object"]['version'] > nh['w']['CURRENT_VE' + "RSION"] && (nN['w']['debugText']["text"] = n8['w']["newerVersi" + "onReplayMe" + "ssage"]), this['loadSessio' + 'n']()) : (this["incrementP" + "lays"] = !0x0, this["levelDataO" + "bject"]['forceChar'] ? this["loadSessio" + 'n']() : void 0x0 !== n7['HW_SETTING' + 'S']["cameraMode"] && void 0x0 !== qB['HW_SETTING' + 'S']['cameraMode']['characterI' + "ndex"] ? (qW['w']["characterI" + "ndex"] = qH["HW_SETTING" + 'S']["cameraMode"]["characterI" + "ndex"], this["loadSessio" + "nBind"]()) : this["openCharac" + "terMenu"]());
                        case 0x1:
                          return qk['a'](0x2);
                      }
                    }
                  }
                }
              }
            } else {
              var nK;
              this['contactRes' + "ultBuffer"]["get"](this["helmetShap" + 'e']) && (nK = this["contactRes" + "ultBuffer"]["get"](this['helmetShap' + 'e']), this['helmetSmas' + 'h'](nK['impulse']), this["contactRes" + 'ultBuffer']["delete"](this['head1Shape']), this["contactAdd" + "Buffer"]['delete'](this['head1Shape']));
              n["prototype"]["handleCont" + 'actResults']["call"](this);
            }
          }
          break;
        case "set to fix" + 'ed':
          if (this["_body"] && this["_body"]["m_mass"] > 0x0) {
            if ("fQvkk" === "fQvkk") {
              var nf = this['_body']["GetWorldCe" + 'nter']();
              this["_body"]["m_userData"]['x'] = nf['x'] * this["m_physScal" + 'e'];
              this["_body"]["m_userData"]['y'] = nf['y'] * this["m_physScal" + 'e'];
              this["_body"]["m_userData"]["rotation"] = this["_body"]["GetAngle"]() * (0xb4 / Math['PI']) % 0x168;
              var nT = new q3['Pp']();
              nT["center"] = new q3['RM']();
              nT["mass"] = 0x0;
              nT['I'] = 0x0;
              this["_body"]["SetMass"](nT);
              this["_body"]["SetLinearV" + 'elocity'](new q3['RM']());
              this["_body"]["SetAngular" + 'Velocity'](0x0);
              this['_body']["UpdateInte" + "rpolation"](0x1);
              n7["removeFrom" + "PaintBodyV" + "ector"](this["_body"]);
              if (n5 > 1.84) {
                for (nj = this["_body"]["GetShapeLi" + 'st'](); nj; nj = nj["m_next"]) {
                  0x8 == nj["m_material"] && (0x8 == nj["m_filter"]["categoryBi" + 'ts'] ? (nj["m_filter"]["categoryBi" + 'ts'] = 0x18, 0x8 == nj["m_filter"]["maskBits"] ? nj["m_filter"]["maskBits"] = 0x38 : 0x0 == nj["m_filter"]['groupIndex'] && (nj["m_filter"]["groupIndex"] = -0xa)) : 0x10 == nj["m_filter"]['categoryBi' + 'ts'] ? (nj["m_filter"]["maskBits"] = 0x30, nj["m_filter"]["groupIndex"] = 0x0) : 0x20 == nj["m_filter"]['categoryBi' + 'ts'] && (nj["m_filter"]['categoryBi' + 'ts'] = 0x30), n6["Refilter"](nj));
                }
              }
              for (var nV = this["_body"]["GetJointLi" + 'st'](); nV; nV = nV["next"]) {
                0x0 == nV["other"]["m_I"] && 0x0 != nV["other"]["m_mass"] && n6["DestroyJoi" + 'nt'](nV["joint"]);
              }
            } else {
              var nm = T[V];
              var nI = h[C];
              nI["visible"] = !0x0;
              nm["SetUserDat" + 'a'](nI);
              this["paintVecto" + 'r']["push"](nm);
            }
          }
          break;
        case "set to non" + '\x20fixed':
          if (this["_body"] && 0x0 == this["_body"]['m_mass'] && (this["_body"]["SetMassFro" + "mShapes"](), this["_body"]["WakeUp"](), n7['paintBodyV' + "ector"]["push"](this['_body']), this["_body"]["UpdateInte" + "rpolation"](0x1), n5 > 1.84)) {
            for (nj = this["_body"]["GetShapeLi" + 'st'](); nj; nj = nj["m_next"]) {
              0x18 == nj["m_filter"]["categoryBi" + 'ts'] ? (nj["m_filter"]['categoryBi' + 'ts'] = 0x8, 0x38 == nj["m_filter"]["maskBits"] ? nj["m_filter"]["maskBits"] = 0x8 : -0xa == nj["m_filter"]["groupIndex"] && (nj["m_filter"]["groupIndex"] = 0x0)) : 0x10 == nj["m_filter"]["categoryBi" + 'ts'] ? (nj["m_filter"]['maskBits'] = 0x10, nj["m_filter"]["groupIndex"] = -0x142) : 0x30 == nj["m_filter"]["categoryBi" + 'ts'] && (nj["m_filter"]["categoryBi" + 'ts'] = 0x20);
              n6["Refilter"](nj);
            }
          }
          break;
        case "delete sha" + "pes":
          this["_body"] && (n6["DestroyBod" + 'y'](this["_body"]), n7["removeFrom" + "PaintBodyV" + "ector"](this["_body"]), this["_body"] = null, n7["updateTarg" + "etActionGr" + "oupsFor"](this['_refSprite'], this["_body"], this["_sprite"]));
          break;
        case "delete sel" + 'f':
          this["_body"] && (n6["DestroyBod" + 'y'](this['_body']), n7["removeFrom" + "PaintBodyV" + "ector"](this['_body']), this["_body"] = null, n7["updateTarg" + 'etActionGr' + "oupsFor"](this["_refSprite"], this["_body"], this["_sprite"]));
          this["_sprite"]["parent"] && (this["_sprite"]["parent"]["removeChil" + 'd'](this['_sprite']), this["_sprite"]["destroy"](), this["_sprite"]["alpha"] = 0x0, this['_sprite']["ignoreWhen" + "Culling"] = !0x0);
          n7["updateTarg" + "etActionGr" + "oupsFor"](this["_refSprite"], this["_body"], this['_sprite']);
          break;
        case "change col" + 'lision':
          var nh = this['_propertie' + 's'][0x0];
          if (this["_body"]) {
            if ("ncsTt" !== "ncsTt") {
              f['u']["instance"]["hide"]();
              T['dispatchEv' + "ent"](V["clone"]());
            } else {
              for (var nC = 0x0 == this["_body"]["m_mass"], nj = this["_body"]["GetShapeLi" + 'st'](); nj; nj = nj["m_next"]) {
                0x8 == nj['m_material'] && (0x2 == nh ? (nj["m_filter"]["categoryBi" + 'ts'] = 0x8, nj["m_filter"]["maskBits"] = 0x8, nj["m_filter"]["groupIndex"] = 0x0, n5 > 1.84 && nC && (nj['m_filter']['categoryBi' + 'ts'] = 0x18, nj["m_filter"]["maskBits"] = 0x38)) : 0x3 == nh ? n5 < 1.82 ? (nj["m_filter"]["categoryBi" + 'ts'] = 0x1, nj["m_filter"]["maskBits"] = 0x1, nj["m_filter"]["groupIndex"] = -0xa) : (nj["m_filter"]["categoryBi" + 'ts'] = 0x0, nj["m_filter"]["maskBits"] = 0x0, nj["m_filter"]["groupIndex"] = 0x0) : 0x4 == nh ? (nj["m_filter"]["categoryBi" + 'ts'] = 0x8, nj["m_filter"]["maskBits"] = 0xffff, nj["m_filter"]["groupIndex"] = -0x141, n5 > 1.84 && nC && (nj["m_filter"]["categoryBi" + 'ts'] = 0x18)) : 0x5 == nh ? (nj["m_filter"]["categoryBi" + 'ts'] = 0x10, nj['m_filter']["maskBits"] = 0x10, nj["m_filter"]["groupIndex"] = -0x142, n5 > 1.84 && nC && (nj["m_filter"]["maskBits"] = 0x30, nj["m_filter"]["groupIndex"] = 0x0)) : 0x6 == nh ? (nj["m_filter"]["categoryBi" + 'ts'] = 0x10, nj["m_filter"]["maskBits"] = 0x10, nj["m_filter"]["groupIndex"] = 0x0, n5 > 1.84 && (nj["m_filter"]["categoryBi" + 'ts'] = nC ? 0x30 : 0x20, nj['m_filter']["maskBits"] = 0x30)) : 0x7 == nh ? (nj["m_filter"]["categoryBi" + 'ts'] = 0xf, nj["m_filter"]["maskBits"] = 0xf00, nj["m_filter"]["groupIndex"] = 0x0) : (nj["m_filter"]["categoryBi" + 'ts'] = 0x8, nj["m_filter"]["maskBits"] = 0xffff, nC && (nj["m_filter"]["categoryBi" + 'ts'] = 0x18, nj["m_filter"]["groupIndex"] = -0xa)), nj["m_isSensor"] = !!(0x3 == nh && n5 < 1.82), q4['w']["currentSes" + "sion"]["m_world"]["Refilter"](nj));
              }
              n7['updateTarg' + "etActionGr" + "oupsFor"](this["_refSprite"], this["_body"], this["_sprite"]);
            }
          }
      }
    };
    n4["actions"] = function () {
      if ("change opa" + "city" === this["_action"]) {
        if ('HnrSE' === "HnrSE") {
          var n5 = this["_propertie" + 's'][0x0];
          var n6 = this["_propertie" + 's'][0x1];
          n5 *= 0.01;
          n6 = Math["round"](0x1e * n6);
          if (this["counter"] == n6) {
            q4['w']["currentSes" + "sion"]["levelVersi" + 'on'] > 1.8 && (this["counter"] = 0x0);
            this["_sprite"]["visible"] = 0x0 != n5;
            this["_sprite"]["alpha"] = n5;
            return void q4['w']['currentSes' + "sion"]["level"]["removeFrom" + "ActionsVec" + "tor"](this);
          }
          var n7 = this["_sprite"]["alpha"];
          var n8 = n5 - n7;
          this["_sprite"]["alpha"] = n7 + n8 / (n6 - this["counter"]);
          this["_sprite"]['visible'] = 0x0 != this["_sprite"]["alpha"];
        } else {
          this["_setShapeW" + "idth"](n);
        }
      }
      this["counter"] += 0x1;
    };
    n2 = qQ;
    (n3 = [{
      'key': "body",
      'get': function () {
        return this['_body'];
      },
      'set': function (n5) {
        this["_body"] = n5;
      }
    }, {
      'key': "sprite",
      'get': function () {
        return this["_sprite"];
      },
      'set': function (n5) {
        'ZIwgP' !== "ZIwgP" ? (this["stage"]["removeEven" + "tListener"](V['Cm']["MOUSE_UP"], this["mouseUpHan" + "dler"]), this["stage"]['removeEven' + 'tListener'](h['Cm']["MOUSE_MOVE"], this["updateCanv" + 'as']), this["removeEven" + 'tListener'](C['Cm']["MOUSE_DOWN"], this["mouseDownH" + 'andler']), this["scrollTab"]["removeEven" + "tListener"](j['Cm']["MOUSE_DOWN"], this["mouseDownH" + 'andler']), this['bg']['removeEven' + "tListener"](P['Cm']["MOUSE_DOWN"], this["mouseDownH" + "andler"])) : this["_sprite"] = n5;
      }
    }, {
      'key': "instant",
      'get': function () {
        if ("atOIq" !== "atOIq") {
          for (var n6 = 0x0; n6 < V["length"]; n6++) {
            var n7 = p[n6];
            n7["enumerable"] = n7["enumerable"] || !0x1;
            n7["configurab" + 'le'] = !0x0;
            'value' in n7 && (n7["writable"] = !0x0);
            K["defineProp" + "erty"](m, I(n7["key"]), n7);
          }
        } else {
          return this["_instant"];
        }
      }
    }]) && function (n5, n6) {
      if ("dQpzY" !== "EZbpk") {
        for (var n7 = 0x0; n7 < n6["length"]; n7++) {
          if ("cljIM" === "cljIM") {
            var n8 = n6[n7];
            n8["enumerable"] = n8["enumerable"] || !0x1;
            n8["configurab" + 'le'] = !0x0;
            "value" in n8 && (n8["writable"] = !0x0);
            Object["defineProp" + "erty"](n5, qf(n8["key"]), n8);
          } else {
            var nq = f["call"](T, 'string');
            if ("object" != typeof nq) {
              return nq;
            }
            throw new V("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
          }
        }
      } else {
        f["prototype"]["paint"]["call"](this);
        var nn = this["frontWheel" + "Body"]["GetInterpo" + "latedWorld" + 'Center']();
        this["frontWheel" + 'MC']['x'] = nn['x'] * this["m_physScal" + 'e'];
        this['frontWheel' + 'MC']['y'] = nn['y'] * this["m_physScal" + 'e'];
        this["frontWheel" + 'MC']["inner"]["rotation"] = this["frontWheel" + 'Body']["GetInterpo" + "latedAngle"]() * (0xb4 / T['PI']) % 0x168;
        nn = this["backWheelB" + 'ody']['GetInterpo' + "latedWorld" + "Center"]();
        this["backWheelM" + 'C']['x'] = nn['x'] * this["m_physScal" + 'e'];
        this["backWheelM" + 'C']['y'] = nn['y'] * this["m_physScal" + 'e'];
        this["backWheelM" + 'C']["inner"]["rotation"] = this["backWheelB" + "ody"]["GetInterpo" + "latedAngle"]() * (0xb4 / V['PI']) % 0x168;
        this["targetMask" + "Holder"]['x'] = this["bladeCover" + 'MC']['x'] = this["mowerMC"]['x'];
        this["targetMask" + "Holder"]['y'] = this["bladeCover" + 'MC']['y'] = this["mowerMC"]['y'];
        this["targetMask" + "Holder"]["rotation"] = this["bladeCover" + 'MC']["rotation"] = this["mowerMC"]["rotation"];
        if (!this["mowerSmash" + 'ed']) {
          nn = this["frontShock" + 'Joint']["GetInterpo" + "latedAncho" + 'r1']();
          var nN = this["frontShock" + "Body"]['GetInterpo' + "latedWorld" + "Center"]();
          this["shockMC"]['graphics']["clear"]();
          this["shockMC"]["graphics"]["lineStyle"](0x3, 0x171717);
          this["shockMC"]["graphics"]["moveTo"](nn['x'] * this["m_physScal" + 'e'], nn['y'] * this['m_physScal' + 'e']);
          this["shockMC"]["graphics"]["lineTo"](nN['x'] * this["m_physScal" + 'e'], nN['y'] * this["m_physScal" + 'e']);
          nn = this['backShockJ' + "oint"]["GetInterpo" + "latedAncho" + 'r1']();
          nN = this["backShockB" + "ody"]['GetInterpo' + "latedWorld" + "Center"]();
          this["shockMC"]["graphics"]["moveTo"](nn['x'] * this['m_physScal' + 'e'], nn['y'] * this["m_physScal" + 'e']);
          this['shockMC']["graphics"]["lineTo"](nN['x'] * this["m_physScal" + 'e'], nN['y'] * this['m_physScal' + 'e']);
        }
      }
    }(n2["prototype"], n3);
    Object["defineProp" + "erty"](n2, 'prototype', {
      'writable': !0x1
    });
    return n2;
  }(q5['o']);
  function qh(qG) {

    var qQ = function (n0) {
      if ("object" != typeof n0 || !n0) {
        return n0;
      }
      var n1 = n0[Symbol["toPrimitiv" + 'e']];
      if (void 0x0 !== n1) {
        if ("BfHGb" !== "BfHGb") {
          I["setPrototy" + "peOf"] ? k['setPrototy' + "peOf"](f, q1) : (B["__proto__"] = u, l(o, q2, "GeneratorF" + "unction"));
          E["prototype"] = R["create"](W);
          return A;
        } else {
          var n2 = n1['call'](n0, "string");
          if ('object' != typeof n2) {
            return n2;
          }
          throw new TypeError("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
        }
      }
      return String(n0);
    }(qG);
    return "symbol" == typeof qQ ? qQ : qQ + '';
  }
  function qC(qG, qQ) {


    if ("fkQub" !== "PtJOy") {
      qC = Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"]['bind']() : function (n0, n1) {
        if ("YzMPS" === "YzMPS") {
          n0["__proto__"] = n1;
          return n0;
        } else {
          this["upKey"]["alpha"] = 0.2;
        }
      };
      return qC(qG, qQ);
    } else {
      var n1 = 0.5 * l['delta'];
      var n2 = o["scrollAcce" + 'l'];
      var n3 = 0x1;
      q2['w']["use60FPS"] && (n2 /= 0x2, n3 /= 0x2);
      var n4 = E["listHitAre" + 'a']["mouseY"] / R["listHitAre" + 'a']["height"];
      n4 > 0.75 && W["scrollSpee" + 'd'] > -A["scrollMaxS" + "peed"] ? r["scrollSpee" + 'd'] -= n2 : n4 < 0.25 && J["scrollSpee" + 'd'] < D['scrollMaxS' + "peed"] ? g['scrollSpee' + 'd'] += n2 : S["scrollSpee" + 'd'] > 0x0 ? d["scrollSpee" + 'd'] -= n3 : z["scrollSpee" + 'd'] < 0x0 && (F["scrollSpee" + 'd'] += n3);
      M["list"]['y'] += H["scrollSpee" + 'd'] * n1;
      b["createLeve" + "lButtonsIn" + "View"]();
      Z["checkScrol" + 'lLimits']();
    }
  }
  var qj = function (qG) {


    if ("hTSzG" === "BusQj") {
      f["__proto__"] = T;
      return V;
    } else {
      function n5(n6, n7, n8, n9) {
        var nq;
        (nq = qG["call"](this) || this)["counter"] = 0x0;
        nq["_refSprite"] = n6;
        nq["_joint"] = n7;
        nq["_action"] = n8;
        nq["_instant"] = "change mot" + "or speed" != n8;
        nq["_propertie" + 's'] = n9;
        return nq;
      }
      var qQ;
      var n0;
      n0 = qG;
      (qQ = n5)["prototype"] = Object['create'](n0["prototype"]);
      qQ["prototype"]["constructo" + 'r'] = qQ;
      qC(qQ, n0);
      var n1;
      var n2;
      var n3 = n5['prototype'];
      n3["singleActi" + 'on'] = function () {
        if ("YHCSu" === "HlsyZ") {
          var n9 = qS["GetMotorSp" + "eed"]();
          this["jointMotor" + "Speeds"][qA] = n9;
          this["jointAccel" + 's'][qN] = this["accelerati" + 'on'] < 0xa ? qc['abs'](n9 / (0x64 - 0xa * this["accelerati" + 'on'])) : qV["abs"](n9);
          this['lockJoints'] && (this["slowAfterE" + 'ject'] = !0x0, (qE = ql['w']["currentSes" + "sion"]["level"]["actionsVec" + "tor"])["indexOf"](this) < 0x0 && q3["push"](this));
        } else {
          switch (this['_action']) {
            case "disable li" + "mits":
              this["_joint"] && (this['_joint']["m_body1"]["IsSleeping"]() && this["_joint"]["m_body1"]["WakeUp"](), this["_joint"]["m_body2"]["IsSleeping"]() && this["_joint"]["m_body2"]["WakeUp"](), this["_joint"]['EnableLimi' + 't'](!0x1));
              break;
            case 'change\x20lim' + "its":
              if (this["_joint"]) {
                if ("RwwWo" !== "VFWqg") {
                  this["_joint"]["m_body1"]["IsSleeping"]() && this["_joint"]['m_body1']["WakeUp"]();
                  this["_joint"]["m_body2"]["IsSleeping"]() && this["_joint"]["m_body2"]["WakeUp"]();
                  var n6 = this["_propertie" + 's'][0x0] / this["m_physScal" + 'e'];
                  var n7 = this['_propertie' + 's'][0x1] / this['m_physScal' + 'e'];
                  this["_joint"]["SetLimits"](n7, n6);
                  q4['w']['currentSes' + "sion"]["levelVersi" + 'on'] > 1.84 && this['_joint']["EnableLimi" + 't'](!0x0);
                } else {
                  return T["cull"](V, h, C);
                }
              }
              break;
            case "disable mo" + "tor":
              this["_joint"] && this["_joint"]["EnableMoto" + 'r'](!0x1);
              break;
            case "delete sel" + 'f':
              this['_joint'] && (q4['w']["currentSes" + "sion"]["m_world"]["DestroyJoi" + 'nt'](this["_joint"]), this["_joint"] = null);
          }
        }
      };
      n3["actions"] = function () {
        if ("change mot" + "or speed" === this['_action'] && this["_joint"]) {
          this["_joint"]["m_body1"]["IsSleeping"]() && this["_joint"]["m_body1"]["WakeUp"]();
          this['_joint']["m_body2"]["IsSleeping"]() && this["_joint"]["m_body2"]['WakeUp']();
          this["_joint"]["IsMotorEna" + 'bled']() || this["_joint"]["EnableMoto" + 'r'](!0x0);
          var n6 = this["_propertie" + 's'][0x0];
          var n7 = this["_propertie" + 's'][0x1];
          n7 = Math["round"](0x1e * n7);
          if (this["counter"] == n7) {
            q4['w']["currentSes" + "sion"]["levelVersi" + 'on'] > 1.8 && (this['counter'] = 0x0);
            this["_joint"]["SetMotorSp" + "eed"](n6);
            return void q4['w']["currentSes" + "sion"]["level"]["removeFrom" + "ActionsVec" + "tor"](this);
          }
          var n8 = this["_joint"]["GetMotorSp" + "eed"]();
          var n9 = n6 - n8;
          this['_joint']["SetMotorSp" + "eed"](n8 + n9 / (n7 - this["counter"]));
        }
        this["counter"] += 0x1;
      };
      n1 = n5;
      (n2 = [{
        'key': "joint",
        'get': function () {
          return "fbyOS" !== "fbyOS" ? (qT["__proto__"] = qR, qz) : this["_joint"];
        },
        'set': function (n6) {
          this["_joint"] = n6;
        }
      }, {
        'key': "instant",
        'get': function () {
          return this["_instant"];
        }
      }]) && function (n6, n7) {
        if ("fDsXM" === "kZDTY") {
          var nn = qT(qR);
          var nN = qz['floor']((nn["length"] - 0x1) / 0x3);
          if (0x0 == nN) {
            return nn;
          }
          var nf = nn['length'] % 0x3;
          0x0 == nf && (nf = 0x3);
          for (var nT = nn["substr"](0x0, nf), nV = 0x0; nV < nN; nV++) {
            nT = nT + ',' + nn["substr"](nf, 0x3);
            nf += 0x3;
          }
          return nT;
        } else {
          for (var n8 = 0x0; n8 < n7["length"]; n8++) {
            if ("CQqSv" !== "CQqSv") {
              void 0x0 === V && (h = !0x0);
              C["prototype"]["shoulderBr" + "eak1"]["call"](this, j, P);
              this["ejected"] || (this['frameHand1'] && (this["_session"]["m_world"]['DestroyJoi' + 'nt'](this["frameHand1"]), this["frameHand1"] = null), this["checkEject"]());
            } else {
              var n9 = n7[n8];
              n9["enumerable"] = n9["enumerable"] || !0x1;
              n9["configurab" + 'le'] = !0x0;
              "value" in n9 && (n9['writable'] = !0x0);
              Object["defineProp" + "erty"](n6, qh(n9["key"]), n9);
            }
          }
        }
      }(n1["prototype"], n2);
      Object["defineProp" + "erty"](n1, "prototype", {
        'writable': !0x1
      });
      return n1;
    }
  }(q5['o']);
  function qP(qG) {

    var qQ = function (n0) {
      if ("KnXfT" !== "KnXfT") {
        switch (nD) {
          case 'x':
            var n4 = new T4['ks']('x', 'x', 0x7, !0x0);
            n4["restrict"] = '0-9.';
            n4["decimals"] = 0x2;
            return n4;
          case 'y':
            var n5 = new T5['ks']('y', 'y', 0x7, !0x0);
            n5["restrict"] = "0-9.";
            n5["decimals"] = 0x2;
            return n5;
          case "shapeWidth":
            var n6 = new T6['ks']("width", "shapeWidth", 0x7, !0x0);
            n6["restrict"] = '0-9.';
            n6["decimals"] = 0x0;
            return n6;
          case 'shapeHeigh' + 't':
            var n7 = new T7['ks']("height", "shapeHeigh" + 't', 0x7, !0x0);
            n7["restrict"] = '0-9.';
            n7["decimals"] = 0x0;
            return n7;
          case "angle":
            var n8 = new T8['ks']('rotation', "angle", 0x5, !0x0);
            n8['restrict'] = "0-9\\-";
            n8["decimals"] = 0x0;
            return n8;
          case "interactiv" + 'e':
            var n9 = new T9['oV']("interactiv" + 'e', "interactiv" + 'e');
            n9["helpCaptio" + 'n'] = "Setting in" + "teractive " + 'to\x20false\x20w' + "ill treat " + "the shape " + "like flat " + "artwork.  " + "The shape " + 'will\x20only\x20' + "move if pa" + "rt of a gr" + "oup, and w" + "ill not ta" + "ke away fr" + "om the tot" + "al availab" + "le shapeco" + "unt allowe" + "d in your " + 'level.\x20\x20Us' + "eful when " + "just addin" + "g visual d" + "etail to a" + "lready int" + "eractive l" + "arger shap" + "es or grou" + "ps.";
            return n9;
          case 'immovable':
            var nq = new Tq['oV']("fixed", "immovable", !0x1, !0x0, !0x0);
            nq["helpCaptio" + 'n'] = "A fixed ob" + "ject will " + 'never\x20move' + " and will " + 'support\x20an' + "y weight.";
            nq["oppositeDe" + "pendent"] = !0x0;
            var nn = new Tn['oV']("sleeping", "sleeping", !0x1, !0x1);
            nn["helpCaptio" + 'n'] = "A sleeping" + '\x20object\x20wi' + "ll remain " + "frozen in " + "place unti" + "l it is to" + 'uched\x20by\x20a' + "ny other m" + 'oving\x20obje' + 'ct.';
            var nN = new TN['ks']("density", "density", 0x4, !0x0);
            nN['restrict'] = "0-9.";
            nN["allowNaN"] = !0x0;
            nq["addChildIn" + "put"](nn);
            nq["addChildIn" + "put"](nN);
            return nq;
          case "color":
            return new Tf['AN']('color', "color", !0x0, !0x0);
          case "outlineCol" + 'or':
            return new TT['AN']("outline co" + "lor", "outlineCol" + 'or', !0x0, !0x0);
          case "opacity":
            var nf = new TV['Cw']("opacity", "opacity", 0x3, !0x0, 0x0, 0x64, 0x64);
            nf["restrict"] = "0-9";
            nf["helpCaptio" + 'n'] = "Transparen" + "t shapes a" + "re more cp" + "u intensiv" + "e than opa" + "que shapes" + ", so use t" + "ransparenc" + "y sparingl" + "y.  Best p" + "erformance" + " is at 100" + " or 0.";
            return nf;
          case "collision":
            var nT = new Th['Cw']("collision", "collision", 0x1, !0x0, 0x1, 0x7, 0x6);
            nT["restrict"] = "0-9";
            nT["helpCaptio" + 'n'] = "This value" + " determine" + "s what the" + " shape wil" + "l collide " + 'with.<br><' + "br>1: coll" + "ides with " + "everything" + ".<br><br>2" + ": collides" + " with most" + "ly everyth" + 'ing\x20but\x20ch' + "aracters.<" + 'br><br>3:\x20' + "collides w" + 'ith\x20nothin' + "g. (mostly" + " for use w" + "ith joints" + ". If you'd" + '\x20like\x20to\x20j' + "ust use sh" + "apes as ar" + "t, uncheck" + " interacti" + "ve instead" + ")<br><br>4" + ": collides" + " with ever" + "ything exc" + "ept other " + 'shapes\x20wit' + "h collisio" + 'n\x20set\x20to\x20t' + "his value." + " (useful f" + 'or\x20somethi' + 'ng\x20like\x20a\x20' + "pair of at" + "tached leg" + "s that you" + " don't wan" + "t collidin" + "g with eac" + "h other)<b" + "r><br>5: C" + "ollides on" + 'ly\x20with\x20fi' + "xed shapes" + ".<br><br>6" + ':\x20Collides' + '\x20only\x20with' + " fixed sha" + "pes and ot" + 'her\x20shapes' + " with coll" + "ision set " + "to this va" + "lue.<br><b" + "r>7: Colli" + "des only w" + "ith charac" + "ters.";
            return nT;
          case "immovable2":
            var nV = new TC['oV']("fixed", "immovable2", !0x1, !0x0, !0x0);
            nV["oppositeDe" + "pendent"] = !0x0;
            nV["helpCaptio" + 'n'] = "A fixed ob" + 'ject\x20doesn' + "'t move an" + "d will sup" + "port any w" + 'eight.';
            return nV;
          case "immovable3":
            (nV = new Tj['oV']("fixed", "immovable", !0x1, !0x0, !0x0))["oppositeDe" + "pendent"] = !0x0;
            nV["helpCaptio" + 'n'] = "A fixed ob" + "ject doesn" + "'t move an" + "d will sup" + "port any w" + "eight.";
            return nV;
          case "limit":
            var nh = new TP['oV']('limit\x20rota' + "tion", "limit", !0x1);
            var nC = new Tp['Cw']("upper angl" + 'e', "upperAngle", 0x3, !0x0, 0x0, 0xb4, 0xb4);
            nC["restrict"] = "0-9";
            var nj = new TK['Cw']("lower angl" + 'e', "lowerAngle", 0x4, !0x0, -0xb4, 0x0, 0xb4);
            nj["restrict"] = "0-9\\-";
            nh['addChildIn' + 'put'](nC);
            nh["addChildIn" + "put"](nj);
            return nh;
          case 'motor':
            var nP = new Tm['oV']("enable mot" + 'or', "motor", !0x1);
            var np = new TI['ks']('motor\x20torq' + 'ue', "torque", 0x5, !0x0);
            np['restrict'] = '0-9';
            np["decimals"] = 0x0;
            np["helpCaptio" + 'n'] = 'Controls\x20t' + "he amount " + "of force u" + 'sed\x20to\x20rot' + "ate the jo" + "int.  Very" + " dense obj" + "ects may n" + 'eed\x20a\x20lot\x20' + "of torque " + "to rotate " + "effectivel" + 'y\x20with\x20a\x20m' + 'otor.';
            var nK = new Tk['Cw']("motor spee" + 'd\x20', "speed", 0x5, !0x0, -0x14, 0x14, 0x28);
            nK["helpCaptio" + 'n'] = "Controls h" + "ow quickly" + " the motor" + " rotates t" + "he joint. " + " If this i" + "s a large " + "amount and" + " the joint" + " is unresp" + "onsive, yo" + 'u\x20may\x20have' + " to play a" + 'round\x20with' + " the torqu" + "e. Change " + "the speed " + "to negativ" + 'e\x20to\x20chang' + 'e\x20the\x20dire' + "ction of m" + "ovement.";
            nK["restrict"] = "0-9\\-.";
            nP["addChildIn" + "put"](np);
            nP['addChildIn' + "put"](nK);
            return nP;
          case "axisAngle":
            var nm = new Ts['Cw']("axis angle", "axisAngle", 0x4, !0x0, -0xb4, 0xb4, 0x168);
            nm['helpCaptio' + 'n'] = "This is th" + "e angle (i" + "n degrees)" + " of the ax" + 'is\x20of\x20move' + "ment betwe" + "en the bod" + "ies of thi" + "s joint. R" + 'elative\x20to' + " each othe" + "r, the two" + " bodies wi" + "ll be cons" + "trained to" + " this axis" + '.';
            return nm;
          case "limitPris":
            nh = new Tt['oV']("limit rang" + 'e', "limit", !0x1);
            (nC = new TB['Cw']("upper limi" + 't', "upperLimit", 0x4, !0x0, 0x0, 0xbb8, 0x12c))["restrict"] = '0-9';
            (nj = new Tu['Cw']("lower limi" + 't', 'lowerLimit', 0x5, !0x0, -0xbb8, 0x0, 0x12c))["restrict"] = "0-9\\-";
            nh['addChildIn' + "put"](nC);
            nh["addChildIn" + 'put'](nj);
            return nh;
          case "motorPris":
            nP = new Tl['oV']("enable mot" + 'or', "motor", !0x1);
            var nI = new To['ks']("motor forc" + 'e', "force", 0x5, !0x0);
            nI["restrict"] = "0-9";
            nI["decimals"] = 0x0;
            nI["helpCaptio" + 'n'] = "Controls t" + "he amount " + "of force u" + "sed to pow" + "er the joi" + "nt.  Very " + 'dense\x20obje' + "cts may ne" + "ed a lot o" + "f force to" + '\x20move\x20effe' + 'ctively\x20wi' + "th a motor" + '.';
            var nk = new Ti['Cw']("motor spee" + 'd\x20', "speed", 0x5, !0x0, -0x32, 0x32, 0x64);
            nk["helpCaptio" + 'n'] = "Controls h" + "ow quickly" + " the motor" + " moves obj" + "ects along" + " the axis " + "of the joi" + "nt.  If th" + "is is a la" + "rge amount" + " and the j" + "oint is un" + 'responsive' + ", you may " + "have to pl" + "ay around " + "with the f" + "orce. Chan" + "ge the spe" + "ed to nega" + "tive to ch" + "ange the d" + "irection o" + "f movement" + '.';
            nk["restrict"] = "0-9\\-.";
            nP["addChildIn" + "put"](nI);
            nP["addChildIn" + 'put'](nk);
            return nP;
          case "collideSel" + 'f':
            var ns = new TE['oV']("collide co" + "nnected", "collideSel" + 'f', !0x1);
            ns["helpCaptio" + 'n'] = "Select thi" + "s if you'd" + " like the " + "two object" + "s connecte" + "d by this " + "joint to c" + "ollide wit" + "h each oth" + "er. Do not" + " use this " + 'if\x20you\x27d\x20l' + "ike the ob" + "jects to o" + "verlap.";
            return ns;
          case "ropeLength":
            var nt = new TR['Cw']("rope lengt" + 'h', 'ropeLength', 0x4, !0x0, 0xc8, 0x3e8, 0x50);
            nt["restrict"] = "0-9";
            return nt;
          case "ballSpeed":
            var nB = new TW['Cw']("ball speed", "ballSpeed", 0x1, !0x0, 0x0, 0x7, 0x7);
            nB['restrict'] = "0-9";
            return nB;
          case 'springDela' + 'y':
            var nu = new TA['Cw']("delay", "springDela" + 'y', 0x3, !0x0, 0x0, 0x2, 0x4);
            nu["restrict"] = "0-9";
            nu["decimals"] = 0x1;
            return nu;
          case "numSpikes":
            var nl = new Tr['Cw']("spikes", "numSpikes", 0x3, !0x0, 0x14, 0x96, 0x82);
            nl['restrict'] = "0-9";
            return nl;
          case "numPanels":
            var no = new TJ['Cw']("panels", "numPanels", 0x1, !0x0, 0x1, 0x6, 0x5);
            no["restrict"] = "0-9";
            return no;
          case "characterI" + "ndex":
            var ni = new TD['Cw']("default ch" + "aracter", "characterI" + "ndex", 0x2, !0x0, 0x1, Tg['w']["totalChara" + "cters"], TS['w']['totalChara' + "cters"] - 0x1);
            ni["restrict"] = "0-9";
            return ni;
          case "forceChar":
            var nE = new Td['oV']("force char" + "acter", "forceChar", !0x1);
            nE["helpCaptio" + 'n'] = "If enabled" + ", the user" + " must play" + " this leve" + "l with the" + " current c" + "haracter.";
            return nE;
          case "numFloors":
            var nR = new Tz['Cw']("floors", "numFloors", 0x2, !0x0, 0x3, 0x32, 0x2f);
            nR["restrict"] = "0-9";
            return nR;
          case "floorWidth":
            var nW = new TF['Cw']("floor widt" + 'h', "floorWidth", 0x2, !0x0, 0x1, 0xa, 0x9);
            nW["restrict"] = "0-9";
            return nW;
          case 'sleeping':
            var nA = new TM['oV']("sleeping", "sleeping", !0x1);
            nA["helpCaptio" + 'n'] = 'A\x20sleeping' + " object wi" + 'll\x20remain\x20' + "frozen in " + "place unti" + "l it is to" + "uched by a" + "ny other m" + "oving obje" + "ct.";
            return nA;
          case "useAnchor":
            return new TH['oV']('anchor', "useAnchor");
          case "foreground":
            var nr = new Tb['oV']("foreground", "foreground", !0x1);
            nr['helpCaptio' + 'n'] = 'When\x20check' + "ed, this i" + "tem will o" + "verlap in " + "front of t" + "he player " + 'character\x20' + "during gam" + "eplay";
            return nr;
          case 'font':
            return new TZ['Cw']("font", "font", 0x1, !0x0, 0x1, 0x5, 0x4);
          case "fontSize":
            return new Ty['Cw']("font size", "fontSize", 0x3, !0x0, 0xa, 0x64, 0x5a);
          case 'align':
            return new Tc['Cw']('alignment', "align", 0x1, !0x0, 0x1, 0x3, 0x2);
          case "charIndex":
            return new TX['Cw']("character " + "type", "charIndex", 0x2, !0x0, 0x1, Tx['ze']["NUM_CHARAC" + "TERS"], Tw['ze']["NUM_CHARAC" + "TERS"] - 0x1);
          case 'neckAngle':
            var nJ = new Te['Cw']('neck\x20angle', 'neckAngle', 0x4, !0x0, -0x14, 0x14, 0x28);
            nJ["helpCaptio" + 'n'] = Ta["poseString"];
            nJ["decimals"] = 0x0;
            return nJ;
          case "shoulder1A" + "ngle":
            var nD = new TY['Cw']("arm 1 angl" + 'e', "shoulder1A" + 'ngle', 0x4, !0x0, -0xb4, 0x3c, 0xf0);
            nD["helpCaptio" + 'n'] = Tv["poseString"];
            nD['decimals'] = 0x0;
            return nD;
          case "shoulder2A" + "ngle":
            var ng = new TL['Cw']("arm 2 angl" + 'e', "shoulder2A" + "ngle", 0x4, !0x0, -0xb4, 0x3c, 0xf0);
            ng["helpCaptio" + 'n'] = TU["poseString"];
            ng['decimals'] = 0x0;
            return ng;
          case "elbow1Angl" + 'e':
            var nS = new TO['Cw']("elbow 1 an" + "gle", "elbow1Angl" + 'e', 0x4, !0x0, -0xa0, 0x0, 0xa0);
            nS['helpCaptio' + 'n'] = TG["poseString"];
            nS["decimals"] = 0x0;
            return nS;
          case "elbow2Angl" + 'e':
            var nd = new TQ['Cw']("elbow 2 an" + "gle", 'elbow2Angl' + 'e', 0x4, !0x0, -0xa0, 0x0, 0xa0);
            nd['helpCaptio' + 'n'] = V0["poseString"];
            nd["decimals"] = 0x0;
            return nd;
          case "hip1Angle":
            var nz = new V1['Cw']("leg 1 angl" + 'e', "hip1Angle", 0x4, !0x0, -0x96, 0xa, 0xa0);
            nz["helpCaptio" + 'n'] = V2["poseString"];
            nz["decimals"] = 0x0;
            return nz;
          case "hip2Angle":
            var nF = new V3['Cw']("leg 2 angl" + 'e', "hip2Angle", 0x4, !0x0, -0x96, 0xa, 0xa0);
            nF["helpCaptio" + 'n'] = V4["poseString"];
            nF["decimals"] = 0x0;
            return nF;
          case "knee1Angle":
            var nM = new V5['Cw']("knee 1 ang" + 'le', "knee1Angle", 0x4, !0x0, 0x0, 0x96, 0x96);
            nM["helpCaptio" + 'n'] = V6["poseString"];
            nM["decimals"] = 0x0;
            return nM;
          case "knee2Angle":
            var nH = new V7['Cw']('knee\x202\x20ang' + 'le', "knee2Angle", 0x4, !0x0, 0x0, 0x96, 0x96);
            nH["helpCaptio" + 'n'] = V8["poseString"];
            nH["decimals"] = 0x0;
            return nH;
          case "reverse":
            return new V9['oV']("reverse", "reverse");
          case "holdPose":
            return new Vq['oV']("hold pose", "holdPose");
          case "shatterStr" + "ength":
            var nb = new Vn['Cw']("strength", 'shatterStr' + "ength", 0x2, !0x0, 0x1, 0xa, 0x9);
            nb["helpCaptio" + 'n'] = "Determines" + " how much " + "force is r" + 'equired\x20to' + " shatter t" + "he initial" + " glass pan" + 'e.';
            return nb;
          case "stabbing":
            var nZ = new VN['oV']("stabbing", "stabbing");
            nZ["helpCaptio" + 'n'] = "Determines" + " if broken" + '\x20glass\x20can' + " stab the " + "character.";
            return nZ;
          case "bottleType":
            return new Vf['Cw']("bottle typ" + 'e', "bottleType", 0x1, !0x0, 0x1, 0x4, 0x3);
          case "signPostTy" + 'pe':
            return new VT['Cw']('sign\x20type', "signPostTy" + 'pe', 0x2, !0x0, 0x1, VV['lR']["TOTAL_SIGN" + "_TYPES"], Vh['lR']['TOTAL_SIGN' + "_TYPES"] - 0x1);
          case 'signPost':
            return new VC['oV']("show sign " + "post", "signPost");
          case "containsTr" + "ash":
            return new Vj['oV']("contains t" + "rash", "containsTr" + "ash");
          case 'seekSpeed':
            var ny = new VP['Cw']("speed", "seekSpeed", 0x2, !0x0, 0x1, 0xa, 0x9);
            ny["restrict"] = "0-9";
            return ny;
          case 'explosionD' + 'elay':
            var nc = new Vp['Cw']("delay", "explosionD" + "elay", 0x1, !0x0, 0x0, 0x5, 0x5);
            nc["restrict"] = "0-9";
            return nc;
          case "power":
            var nX = new VK['Cw']("power", 'power', 0x2, !0x0, Vm['z']["MIN_POWER"], VI['z']["MAX_POWER"], Vk['z']['MAX_POWER'] - 0x1);
            nX["restrict"] = '0-9';
            return nX;
          case 'fireTime':
            var nx = new Vs['Cw']('firing\x20tim' + 'e', "fireTime", 0x2, !0x0, Vt['z']["MIN_FIRE_T" + "IME"], VB['z']["MAX_FIRE_T" + "IME"], Vu['z']['MAX_FIRE_T' + "IME"] - Vl['z']["MIN_FIRE_T" + "IME"]);
            nx["restrict"] = "0-9";
            nx["helpCaptio" + 'n'] = "The amount" + " of time (" + "in seconds" + ')\x20until\x20th' + 'e\x20jet\x20shut' + "s off. Wit" + "h a settin" + "g of 0, th" + "e jet will" + " not shut " + "off.";
            return nx;
          case "accelTime":
            var nw = new Vo['Cw']("accelerati" + 'on\x20time', "accelTime", 0x1, !0x0, Vi['z']['MIN_ACCEL_' + "TIME"], VE['z']["MAX_ACCEL_" + "TIME"], VR['z']["MAX_ACCEL_" + "TIME"] - VW['z']["MIN_ACCEL_" + "TIME"]);
            nw["restrict"] = "0-9";
            nw['helpCaptio' + 'n'] = "The amount" + " of time (" + "in seconds" + ") until th" + "e jet reac" + "hes full p" + "ower";
            return nw;
          case "fixedRotat" + 'ion':
            var ne = new VA['oV']("fixed angl" + 'e', "fixedRotat" + "ion", !0x1, !0x0);
            ne["helpCaptio" + 'n'] = "Checking t" + "his will p" + "revent the" + " object fr" + "om rotatin" + 'g';
            return ne;
          case "rateOfFire":
            var na = new Vr['Cw']("rate of fi" + 're', "rateOfFire", 0x2, !0x0, 0x1, 0xa, 0x9);
            na["restrict"] = "0-9";
            return na;
          case 'dontShootP' + "layer":
            var nY = new VJ['oV']("don't shoo" + 't\x20player', "dontShootP" + "layer", !0x1, !0x0);
            nY["helpCaptio" + 'n'] = "Uncheck th" + "is if you " + "only want " + 'the\x20gun\x20to' + " target no" + "n-player c" + "haracters";
            return nY;
          case "linkCount":
            return new VD['Cw']("link count", "linkCount", 0x3, !0x0, 0x2, 0x28, 0x13);
          case "linkScale":
            return new Vg['Cw']("link scale", "linkScale", 0x2, !0x0, 0x1, 0xa, 0x9);
          case "linkAngle":
            return new VS['Cw']("chain curv" + 'e', "linkAngle", 0x3, !0x0, -0xa, 0xa, 0x28);
          case "tokenType":
            return new Vd['Cw']("token type", "tokenType", 0x1, !0x0, 0x1, 0x6, 0x5);
          case "foodItemTy" + 'pe':
            return new Vz['Cw']("food type", 'foodItemTy' + 'pe', 0x1, !0x0, 0x1, 0x3, 0x2);
          case "startRotat" + "ion":
            var nv = new VF['Cw']('start\x20rota' + "tion", "startRotat" + "ion", 0x3, !0x0, -0x5a, 0x5a, 0xb4);
            nv["helpCaptio" + 'n'] = "The angle " + "the muzzle" + " rests at " + 'until\x20obje' + "cts fall i" + "nto it.";
            nv["restrict"] = "0-9\\-";
            return nv;
          case 'firingRota' + 'tion':
            var nL = new VM['Cw']("firing rot" + "ation", 'firingRota' + 'tion', 0x3, !0x0, -0x5a, 0x5a, 0xb4);
            nL["helpCaptio" + 'n'] = "The angle " + "the muzzle" + " moves to " + "and fires.";
            nL["restrict"] = "0-9\\-";
            return nL;
          case "muzzleScal" + 'e':
            return new VH['Cw']("muzzle sca" + 'le', "muzzleScal" + 'e', 0x2, !0x0, 0x1, 0xa, 0x9);
          case "cannonPowe" + 'r':
            return new Vb['Cw']("power", "cannonPowe" + 'r', 0x2, !0x0, 0x1, 0xa, 0x9);
          case "cannonDela" + 'y':
            var nU = new VZ['Cw']("delay", "cannonDela" + 'y', 0x2, !0x0, 0x1, 0xa, 0x9);
            nU['helpCaptio' + 'n'] = "The amount" + " of time i" + 'n\x20seconds\x20' + 'before\x20the' + " cannon mo" + "ves to the" + " firing po" + "sition.";
            return nU;
          case 'cannonType':
            return new Vy['Cw']("type", "cannonType", 0x1, !0x0, 0x1, 0x2, 0x1);
          case "bladeWeapo" + 'nType':
            return new Vc['Cw']("type", "bladeWeapo" + "nType", 0x2, !0x0, 0x1, 0xc, 0xb);
          case "spaceActio" + 'n':
            var nO = new VX['Cw']("spacebar a" + "ction", 'spaceActio' + 'n', 0x1, !0x0, 0x0, Vx['u']["NUM_ACTION" + 'S'], Vw['u']["NUM_ACTION" + 'S']);
            nO["helpCaptio" + 'n'] = "This value" + " determine" + "s what hap" + "pens when " + "spacebar i" + "s pressed." + "<br><br>0:" + '\x20Nothing!<' + "br><br>1: " + "All attach" + 'ed\x20joints\x20' + "will brake" + " (motors s" + "et to 0).<" + "br><br>2: " + "Any jets a" + "ttached to" + " the vehic" + "le with jo" + "ints will " + "fire.<br><" + "br>3: Any " + 'arrowguns\x20' + "attached t" + "o the vehi" + "cle with j" + "oints will" + " shoot";
            return nO;
          case "shiftActio" + 'n':
            var nG = new Ve['Cw']("shift acti" + 'on', "shiftActio" + 'n', 0x1, !0x0, 0x0, Va['u']["NUM_ACTION" + 'S'], VY['u']["NUM_ACTION" + 'S']);
            nG['helpCaptio' + 'n'] = "This value" + " determine" + "s what hap" + "pens when " + "SHIFT is p" + "ressed.<br" + "><br>0: No" + "thing!<br>" + "<br>1: All" + " attached " + "joints wil" + "l brake (m" + 'otors\x20set\x20' + "to 0).<br>" + "<br>2: Any" + " jets atta" + "ched to th" + "e vehicle " + "with joint" + "s will fir" + "e.<br><br>" + "3: Any arr" + "owguns att" + "ached to t" + "he vehicle" + " with join" + "ts will sh" + "oot";
            return nG;
          case "ctrlAction":
            var nQ = new Vv['Cw']("ctrl actio" + 'n', "ctrlAction", 0x1, !0x0, 0x0, VL['u']['NUM_ACTION' + 'S'], VU['u']['NUM_ACTION' + 'S']);
            nQ["helpCaptio" + 'n'] = 'This\x20value' + " determine" + "s what hap" + "pens when " + "CTRL is pr" + "essed.<br>" + "<br>0: Not" + "hing!<br><" + "br>1: All " + "attached j" + 'oints\x20will' + " brake (mo" + "tors set t" + "o 0).<br><" + "br>2: Any " + "jets attac" + "hed to the" + " vehicle w" + 'ith\x20joints' + " will fire" + ".<br><br>3" + ':\x20Any\x20arro' + "wguns atta" + "ched to th" + "e vehicle " + "with joint" + "s will sho" + 'ot';
            return nQ;
          case "accelerati" + 'on':
            var N0 = new VO['Cw']("accelerati" + 'on', "accelerati" + 'on', 0x2, !0x0, 0x1, 0xa, 0x9);
            N0["helpCaptio" + 'n'] = "Determines" + " how quick" + "ly attache" + "d joints r" + "each their" + " set motor" + " speed whe" + "n pressing" + " up or dow" + "n. Low tor" + "que can pr" + 'event\x20a\x20mo' + "tor from r" + "eaching it" + "s top spee" + 'd.';
            return N0;
          case 'leaningStr' + 'ength':
            var N1 = new VG['Cw']('leaning\x20st' + "rength", "leaningStr" + "ength", 0x1, !0x0, 0x0, 0xa, 0xa);
            N1["helpCaptio" + 'n'] = 'Determines' + '\x20how\x20much\x20' + "force is u" + "sed when l" + "eaning usi" + 'ng\x20left\x20an' + 'd\x20right.\x20S' + "et to zero" + '\x20to\x20disabl' + "e leaning.";
            return N1;
          case "vehicleCon" + "trolled":
            var N2 = new VQ['oV']('vehicle\x20co' + "ntrolled", "vehicleCon" + "trolled", !0x0, !0x0);
            N2["helpCaptio" + 'n'] = "Uncheck th" + "is is you " + "don't want" + " this join" + 't\x20to\x20be\x20co' + "ntrolled b" + "y the vehi" + "cle. It wi" + "ll functio" + "n like a n" + "ormal join" + 't.';
            return N2;
          case "characterP" + "ose":
            var N3 = new h0['Cw']('grabbing\x20p' + "ose", "characterP" + "ose", 0x1, !0x0, 0x0, h1['u']["NUM_POSES"], h2['u']["NUM_POSES"]);
            N3["helpCaptio" + 'n'] = 'This\x20value' + '\x20determine' + "s what pos" + 'e\x20the\x20char' + "acter will" + " take afte" + "r grabbing" + " a vehicle" + '\x20handle.<b' + "r><br>0: l" + "imp limbs<" + "br><br>1: " + "arms forwa" + "rd<br><br>" + "2: arms ov" + "erhead<br>" + "<br>3: the" + " character" + " will hold" + " whatever " + "pose he ha" + 'd\x20when\x20gra' + "bbing";
            return N3;
          case "lockJoints":
            var N4 = new h3['oV']("lock joint" + 's', "lockJoints", !0x1);
            N4["helpCaptio" + 'n'] = "Check this" + " if you'd " + "like all a" + "ttached jo" + "ints with " + "motors to " + "slow their" + " speed to " + "0 when not" + " accelerat" + "ing or dec" + "elerating " + '(by\x20defaul' + "t, joints " + "will hang " + 'loose).\x20Jo' + "ints will " + 'slow\x20at\x20th' + "e accelera" + "tion rate " + "you've spe" + "cified.";
            return N4;
          case "innerCutou" + 't':
            return new h4['Cw']("inner cuto" + 'ut', "innerCutou" + 't', 0x3, !0x0, 0x0, 0x64, 0x64);
          case "destroyJoi" + "ntsUponDea" + 'th':
            var N5 = new h5['oV']("release on" + " death", 'destroyJoi' + "ntsUponDea" + 'th', !0x1, !0x0);
            N5["helpCaptio" + 'n'] = 'Check\x20this' + " if you'd " + "like all a" + "ttached jo" + "ints and a" + "ssociated " + "trigger ac" + "tions to b" + "e detroyed" + '\x20when\x20the\x20' + "character " + "dies. This" + " is especi" + "ally good " + "for charac" + "ters with " + "walk cycle" + 's.';
            return N5;
          case "paddleAngl" + 'e':
            return new h6['Cw']("max angle", 'paddleAngl' + 'e', 0x2, !0x0, 0xf, 0x5a, 0x4b);
          case 'paddleSpee' + 'd':
            return new h7['Cw']("speed", "paddleSpee" + 'd', 0x2, !0x0, 0x1, 0xa, 0x9);
          case "hideVehicl" + 'e':
            var N6 = new h8['oV']("hide vehic" + 'le', "hideVehicl" + 'e', !0x0);
            N6["helpCaptio" + 'n'] = "Check this" + " if you do" + "n't want t" + "o include " + "the charac" + 'ter\x27s\x20vehi' + "cle in you" + "r level. T" + "his is goo" + "d for gett" + "ing the ch" + "aracter in" + "to a custo" + "m vehicle," + " rope leve" + "ls, etc.";
            return N6;
          case "triggeredB" + 'y':
            var N7 = new h9['Cw']("triggered " + 'by', "triggeredB" + 'y', 0x1, !0x0, 0x1, 0x6, 0x5);
            N7["restrict"] = "0-9";
            N7["helpCaptio" + 'n'] = "Set this t" + "o determin" + "e what wil" + "l activate" + " the trigg" + "er upon co" + "ntact. In " + 'addition\x20t' + "o these op" + "tions, tri" + "ggers can " + 'now\x20also\x20b' + "e triggere" + "d by other" + " triggers." + "<br><br>1." + " Triggered" + " by only t" + "he main ch" + "aracter.<b" + "r><br>2. T" + "riggered b" + "y any char" + "acter, inc" + 'luding\x20NCP' + 's.<br><br>' + "3. Trigger" + "ed by any " + "non-fixed " + "shape.<br>" + '<br>4.\x20Tri' + "ggered by " + "only the t" + "argets att" + "ached to t" + 'his\x20trigge' + "r.<br><br>" + "5. Trigger" + "ed only by" + " other tri" + "ggers<br><" + 'br>6.\x20Trig' + "gered by l" + 'eft-clicki' + "ng the tri" + "gger shape" + " with your" + " mouse";
            return N7;
          case "triggerDel" + 'ay':
            var N8 = new hq['Cw']("delay", "triggerDel" + 'ay', 0x4, !0x0, 0x0, 0x1e, 0x3c);
            N8["restrict"] = "0-9.";
            return N8;
          case "soundEffec" + 't':
            return new hn['Z']("sound effe" + 'ct', "soundEffec" + 't', hN['Gg']["instance"]["sfxArray"], !0x0, !0x0);
          case 'panning':
            return new hf['Cw']("panning", "panning", 0x4, !0x0, -0x1, 0x1, 0x14);
          case "volume":
            return new hT['Cw']("volume", "volume", 0x3, !0x0, 0x0, 0x1, 0xa);
          case 'triggerTyp' + 'e':
            return new hV['Z']("action", "triggerTyp" + 'e', hh['Q']["typeArray"], !0x1, !0x0);
          case "wheelType":
            return new hC['Cw']('wheel\x20type', "wheelType", 0x2, !0x0, 0x1, 0xa, 0x9);
          case "repeatType":
            var N9 = new hj['Cw']("repeat typ" + 'e', "repeatType", 0x1, !0x0, 0x1, 0x4, 0x3);
            N9["restrict"] = '0-9';
            N9["helpCaptio" + 'n'] = "This deter" + "mines the " + "repeating " + "behavior o" + "f the trig" + "ger.<br><b" + "r>1. Trigg" + "er action " + "only occur" + "s once, th" + "en trigger" + " is delete" + "d.<br><br>" + "2. Trigger" + " action oc" + "curs upon " + "contact wi" + "th the tri" + "gger. It w" + "ill occur " + 'again\x20with' + " new conta" + 'ct\x20after\x20t' + 'he\x20trigger' + " area is c" + "lear of th" + "e original" + " triggerin" + "g body.<br" + "><br>3. Tr" + "igger acti" + 'on\x20will\x20oc' + 'cur\x20on\x20a\x20r' + "epeated in" + "terval unt" + "il the tri" + 'ggering\x20bo' + 'dy\x20leaves\x20' + "the trigge" + "r area.<br" + "><br>4. Tr" + "igger acti" + "on will oc" + "cur on a r" + "epeated in" + "terval onc" + 'e\x20activate' + "d until di" + "sabled by " + "other trig" + "gers.";
            return N9;
          case "repeatInte" + "rval":
            var Nq = new hP['Cw']("repeat int" + "erval", "repeatInte" + 'rval', 0x4, !0x0, 0x0, 0x1e, 0x3c);
            Nq["restrict"] = "0-9.";
            Nq["helpCaptio" + 'n'] = "This is th" + "e number o" + "f seconds " + "between tr" + "igger acti" + "vations wh" + "en repeat " + "type is se" + "t to 3 or " + '4.';
            return Nq;
          case "soundLocat" + "ion":
            var Nn = new hp['Cw']("sound loca" + "tion", "soundLocat" + "ion", 0x1, !0x0, 0x1, 0x2, 0x1);
            Nn["restrict"] = "0-9";
            Nn['helpCaptio' + 'n'] = "This deter" + "mines the " + "apparent l" + "ocation of" + " the sound" + ".<br><br>1" + ". Global. " + "The sound " + "effect wil" + "l sound th" + "e same no " + "matter whe" + "n or where" + " it is act" + "ivated. Vo" + 'lume\x20and\x20p' + "anning are" + " determine" + "d by the u" + "ser.<br><b" + "r>2. Locat" + "ion specif" + "ic. The so" + "und effect" + '\x20will\x20play' + " as if it " + "is coming " + 'from\x20the\x20l' + "ocation of" + " its trigg" + "er. Sounds" + " will dimi" + 'nish\x20and\x20p' + 'an\x20left\x20an' + "d right de" + "pending on" + " the playe" + 'r\x27s\x20locati' + "on relativ" + "e to the t" + "rigger. Vo" + "lume will " + 'determine\x20' + "the max vo" + "lume of th" + "e sound.";
            return Nn;
          case "startDisab" + "led":
            var NN = new hK['oV']("start disa" + "bled", "startDisab" + "led", !0x1, !0x0);
            NN["helpCaptio" + 'n'] = "If checked" + ", this tri" + 'gger\x20will\x20' + "not functi" + "on until e" + "nabled by " + "another tr" + "igger.";
            return NN;
          case 'fixedAngle' + "Turret":
            var Nf = new hm['oV']("fixed turr" + 'et', "fixedAngle" + "Turret", !0x1, !0x0);
            Nf["helpCaptio" + 'n'] = "If checked" + ", the turr" + "et of the " + "gun will o" + "nly aim at" + " the speci" + "fied turre" + "t angle.";
            return Nf;
          case 'turretAngl' + 'e':
            var NT = new hI['Cw']("turret ang" + 'le', "turretAngl" + 'e', 0x4, !0x0, -0x6e, 0x6e, 0xdc);
            NT['restrict'] = "0-9\\-";
            return NT;
          case "triggerFir" + "ing":
            var NV = new hk['oV']("trigger fi" + 'ring', "triggerFir" + "ing", !0x1, !0x0);
            NV["helpCaptio" + 'n'] = "If checked" + ", the turr" + "et of the " + 'gun\x20will\x20o' + "nly fire w" + 'hen\x20signal' + "ed by a tr" + "igger.";
            return NV;
          case "startDeact" + "ivated":
            var Nh = new hs['oV']("start deac" + "tivated", 'startDeact' + "ivated", !0x1, !0x0);
            Nh["helpCaptio" + 'n'] = "If checked" + ',\x20the\x20obje' + "ct will be" + " deactivat" + "ed until a" + "ctivated b" + 'y\x20a\x20trigge' + 'r.';
            return Nh;
          case "boostPower":
            var NC = new ht['Cw']('boost\x20powe' + 'r', "boostPower", 0x3, !0x0, hB['$D']["MIN_POWER"], hu['$D']["MAX_POWER"], hl['$D']["MAX_POWER"] - ho['$D']["MIN_POWER"]);
            NC['restrict'] = "0-9";
            return NC;
        }
        return null;
      } else {
        if ('object' != typeof n0 || !n0) {
          return n0;
        }
        var n1 = n0[Symbol['toPrimitiv' + 'e']];
        if (void 0x0 !== n1) {
          if ("uTXKL" !== 'uTXKL') {
            this["_window"] = new n['p8'](!0x1, this, !0x0);
          } else {
            var n2 = n1["call"](n0, "string");
            if ("object" != typeof n2) {
              return n2;
            }
            throw new TypeError("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
          }
        }
        return String(n0);
      }
    }(qG);
    return "symbol" == typeof qQ ? qQ : qQ + '';
  }
  function qp(qG, qQ) {


    if ("GLjKf" === "GLjKf") {
      qp = Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"]["bind"]() : function (n0, n1) {
        if ('Mrovj' !== "gIgKh") {
          n0["__proto__"] = n1;
          return n0;
        } else {
          this["loadContai" + "ner"]['hide']();
          this["sessionCon" + "tentLoader"]["removeEven" + "tListener"](qz['Jh']["COMPLETE"], this["beginSessi" + "onBind"]);
          this["sessionCon" + 'tentLoader']["removeEven" + "tListener"](q8['BR']["IO_ERROR"], this["IOErrorHan" + "dlerBind"]);
          this["sessionCon" + "tentLoader"]["removeEven" + "tListener"](qI['NN']["ERROR"], this['loadErrorH' + "andlerBind"]);
          var n3;
          var n4 = this["sessionCon" + "tentLoader"]["errorStrin" + 'g'];
          this["sessionCon" + "tentLoader"] = null;
          n3 = "system_err" + 'or' == n4 ? "There was " + "an unexpec" + "ted system" + '\x20Error' : "invalid_ac" + "tion" == n4 ? "An invalid" + " action wa" + "s passed (" + "you really" + " shouldn't" + " ever be s" + 'eeing\x20this' + ').' : "bad_param" == n4 ? "A bad para" + "meter was " + "passed (yo" + "u really s" + 'houldn\x27t\x20e' + "ver be see" + "ing this)." : "app_error" == n4 ? "Sorry, the" + "re was an " + 'applicatio' + "n error. I" + "t was most" + " likely da" + "tabase rel" + "ated. Plea" + "se try aga" + "in in a mo" + "ment." : "asset_load" + '_error' == n4 ? "Sorry, the" + "re was a p" + "roblem loa" + "ding the l" + "evel art. " + 'Try\x20again?' : "An unknown" + '\x20Error\x20has' + " occurred.";
          this["openPrompt"](n3, 'ok');
          this["dispatchEv" + "ent"](new qS['$T'](qA['$T']["MAIN_MENU"]));
        }
      };
      return qp(qG, qQ);
    } else {
      this["ejected"] ? (this["elf1"]["eject"](), this['elf2']["eject"]()) : (this['ejectImpul' + 'se'] = 0x5, this['eject']());
    }
  }
  var qK = function (qG) {

    function qQ(n5, n6, n7, n8) {
      if ("fDrdO" !== "fDrdO") {
        h = C['setPrototy' + 'peOf'] ? j["setPrototy" + "peOf"]['bind']() : function (nn, nN) {

          nn["__proto__"] = nN;
          return nn;
        };
        return P(p, K);
      } else {
        var n9;
        (n9 = qG["call"](this) || this)["counter"] = 0x0;
        n9["_refSprite"] = n5;
        n9["_joint"] = n6;
        n9["_action"] = n7;
        n9["_instant"] = "change mot" + "or speed" != n7;
        n9["_propertie" + 's'] = n8;
        return n9;
      }
    }
    var n0;
    var n1;
    n1 = qG;
    (n0 = qQ)["prototype"] = Object["create"](n1["prototype"]);
    n0["prototype"]["constructo" + 'r'] = n0;
    qp(n0, n1);
    var n2;
    var n3;
    var n4 = qQ["prototype"];
    n4["singleActi" + 'on'] = function () {
      if ("eDYtT" !== "fiMfR") {
        switch (this["_action"]) {
          case "disable li" + 'mits':
            this["_joint"] && (this["_joint"]["m_body1"]["IsSleeping"]() && this["_joint"]['m_body1']["WakeUp"](), this["_joint"]["m_body2"]["IsSleeping"]() && this["_joint"]["m_body2"]["WakeUp"](), this["_joint"]['EnableLimi' + 't'](!0x1));
            break;
          case "change lim" + "its":
            if (this["_joint"]) {
              if ('jTgwj' !== 'jTgwj') {
                return this['commentsIn' + "put"]["text"];
              } else {
                this["_joint"]["m_body1"]['IsSleeping']() && this["_joint"]["m_body1"]["WakeUp"]();
                this["_joint"]["m_body2"]["IsSleeping"]() && this["_joint"]["m_body2"]["WakeUp"]();
                var n5 = this["_propertie" + 's'][0x0] * Math['PI'] / 0xb4;
                var n6 = this["_propertie" + 's'][0x1] * Math['PI'] / 0xb4;
                this["_joint"]["SetLimits"](n6, n5);
                q4['w']["currentSes" + "sion"]["levelVersi" + 'on'] > 1.84 && this['_joint']["EnableLimi" + 't'](!0x0);
              }
            }
            break;
          case "disable mo" + "tor":
            this["_joint"] && (this["_joint"]["EnableMoto" + 'r'](!0x1), this['_joint']["m_body1"]["IsSleeping"]() && this['_joint']["m_body1"]["WakeUp"](), this["_joint"]['m_body2']["IsSleeping"]() && this["_joint"]["m_body2"]["WakeUp"]());
            break;
          case "delete sel" + 'f':
            this['_joint'] && (q4['w']["currentSes" + "sion"]["m_world"]['DestroyJoi' + 'nt'](this["_joint"]), this["_joint"] = null);
        }
      } else {
        this['ejected'] ? 0x3 != this["_currentPo" + 'se'] && 0x4 != this["_currentPo" + 'se'] || (this["currentPos" + 'e'] = 0x0) : this["backWheelJ" + 'oint']["IsMotorEna" + 'bled']() && (this["backWheelJ" + "oint"]["EnableMoto" + 'r'](!0x1), this["midWheel1J" + "oint"]["EnableMoto" + 'r'](!0x1), this["midWheel2J" + "oint"]['EnableMoto' + 'r'](!0x1), this["frontWheel" + "Joint"]["EnableMoto" + 'r'](!0x1), this["sleighReig" + 'ns'] && this["sleighReig" + 'ns']["EnableMoto" + 'r'](!0x1));
      }
    };
    n4["actions"] = function () {
      if ("dmEhA" === "dmEhA") {
        if ("change mot" + "or speed" === this["_action"] && this['_joint']) {
          this["_joint"]["m_body1"]["IsSleeping"]() && this["_joint"]["m_body1"]["WakeUp"]();
          this["_joint"]["m_body2"]["IsSleeping"]() && this["_joint"]["m_body2"]["WakeUp"]();
          this['_joint']["IsMotorEna" + "bled"]() || this["_joint"]["EnableMoto" + 'r'](!0x0);
          var n5 = this["_propertie" + 's'][0x0];
          var n6 = this["_propertie" + 's'][0x1];
          n6 = Math["round"](0x1e * n6);
          if (this["counter"] == n6) {
            q4['w']["currentSes" + "sion"]["levelVersi" + 'on'] > 1.8 && (this["counter"] = 0x0);
            this["_joint"]['SetMotorSp' + "eed"](n5);
            return void q4['w']["currentSes" + "sion"]["level"]["removeFrom" + 'ActionsVec' + "tor"](this);
          }
          var n7 = this["_joint"]["GetMotorSp" + "eed"]();
          var n8 = n5 - n7;
          this['_joint']["SetMotorSp" + "eed"](n7 + n8 / (n6 - this["counter"]));
        }
        this["counter"] += 0x1;
      } else {
        return this['_date_feat' + "ured"];
      }
    };
    n2 = qQ;
    (n3 = [{
      'key': "joint",
      'get': function () {
        return this['_joint'];
      },
      'set': function (n5) {
        if ("hpjsw" === "PaeFR") {
          var n7 = f["call"](T, "string");
          if ("object" != typeof n7) {
            return n7;
          }
          throw new V("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
        } else {
          this["_joint"] = n5;
        }
      }
    }, {
      'key': "instant",
      'get': function () {

        return "EGixG" === "EGixG" ? this["_instant"] : (h = C['setPrototy' + "peOf"] ? j["setPrototy" + "peOf"]["bind"]() : function (n6, n7) {
          n6["__proto__"] = n7;
          return n6;
        }, P(p, K));
      }
    }]) && function (n5, n6) {
      for (var n7 = 0x0; n7 < n6['length']; n7++) {
        var n8 = n6[n7];
        n8["enumerable"] = n8["enumerable"] || !0x1;
        n8["configurab" + 'le'] = !0x0;
        "value" in n8 && (n8["writable"] = !0x0);
        Object["defineProp" + "erty"](n5, qP(n8["key"]), n8);
      }
    }(n2["prototype"], n3);
    Object["defineProp" + "erty"](n2, "prototype", {
      'writable': !0x1
    });
    return n2;
  }(q5['o']);
  function qm(qG) {

    var qQ = function (n0) {
      if ("object" != typeof n0 || !n0) {
        return n0;
      }
      var n1 = n0[Symbol['toPrimitiv' + 'e']];
      if (void 0x0 !== n1) {
        var n2 = n1["call"](n0, "string");
        if ("object" != typeof n2) {
          return n2;
        }
        throw new TypeError('@@toPrimit' + "ive must r" + "eturn a pr" + 'imitive\x20va' + "lue.");
      }
      return String(n0);
    }(qG);
    return "symbol" == typeof qQ ? qQ : qQ + '';
  }
  function qI(qG, qQ) {


    if ("hdJig" !== "hdJig") {
      var n1 = this['bigWheelBo' + 'dy']['GetInterpo' + "latedWorld" + "Center"]();
      this['jetMC']['x'] = n1['x'] * this["m_physScal" + 'e'];
      this["jetMC"]['y'] = n1['y'] * this["m_physScal" + 'e'];
      this["jetMC"]['rotation'] = (this["chairBody"]['GetInterpo' + "latedAngle"]() + this["jetAngle"]) * n['oneEightyO' + 'verPI'] % 0x168;
    } else {
      qI = Object['setPrototy' + "peOf"] ? Object["setPrototy" + "peOf"]["bind"]() : function (n1, n2) {
        if ("xBxPr" === "xBxPr") {
          n1['__proto__'] = n2;
          return n1;
        } else {
          var n4 = this["_triggers"]["indexOf"](f);
          this["_triggers"]['splice'](n4, 0x1);
          if (n4 < 0x0) {
            throw new T("FUCK YOU t" + "rigger not" + " found");
          }
          this["triggerAct" + "ions"] && this["triggerAct" + "ions"]["has"](V);
          this["setAttribu" + "tes"]();
          this["forceDirty"]();
        }
      };
      return qI(qG, qQ);
    }
  }
  var qk = function (qG) {

    function qQ(n5, n6, n7, n8, n9) {
      if ("dxEHI" === 'ewEHr') {
        return this["frontConta" + "cts"] + this["backContac" + 'ts'] > 0x0;
      } else {
        var nq;
        (nq = qG['call'](this) || this)["counter"] = 0x0;
        nq["_refSprite"] = n5;
        nq["_trigger"] = n6;
        nq["_levelItem"] = n7;
        nq['_targetAct' + "ion"] = n8;
        nq['_instant'] = !("change opa" + 'city' == n8 || "slide" == n8);
        nq["_propertie" + 's'] = n9;
        return nq;
      }
    }
    var n0;
    var n1;
    n1 = qG;
    (n0 = qQ)['prototype'] = Object["create"](n1["prototype"]);
    n0["prototype"]["constructo" + 'r'] = n0;
    qI(n0, n1);
    var n2;
    var n3;
    var n4 = qQ["prototype"];
    n4["singleActi" + 'on'] = function () {
      if ("JXmPX" === 'JXmPX') {
        this["_levelItem"]["triggerSin" + 'gleActivat' + "ion"](this["_trigger"], this["_targetAct" + "ion"], this["_propertie" + 's']);
      } else {
        var n6 = new qR['iE']();
        n6["Initialize"](qz['w']["currentSes" + "sion"]["level"]["levelBody"], this["body"], this["body"]["GetWorldCe" + "nter"](), new q8['RM'](0x0, 0x1));
        n6['lowerTrans' + "lation"] = -this["distance"];
        n6["upperTrans" + 'lation'] = 0x0;
        n6["enableLimi" + 't'] = !0x0;
        n6["maxMotorFo" + "rce"] = 0x186a0;
        this["prisJoint"] = qI['w']["currentSes" + "sion"]["m_world"]["CreateJoin" + 't'](n6);
      }
    };
    n4['actions'] = function () {
      if ("cegPz" !== "hbxtO") {
        if (this["_levelItem"]["triggerRep" + "eatActivat" + "ion"](this["_trigger"], this["_targetAct" + "ion"], this['_propertie' + 's'], this["counter"])) {
          q4['w']["currentSes" + "sion"]["levelVersi" + 'on'] > 1.8 && (this['counter'] = 0x0);
          return void q4['w']['currentSes' + "sion"]["level"]["removeFrom" + "ActionsVec" + "tor"](this);
        }
        this["counter"] += 0x1;
      } else {
        return '[object\x20Ge' + "nerator]";
      }
    };
    n2 = qQ;
    (n3 = [{
      'key': "targetActi" + 'on',
      'get': function () {
        return this["_targetAct" + "ion"];
      }
    }, {
      'key': "levelItem",
      'get': function () {
        return this["_levelItem"];
      }
    }, {
      'key': "instant",
      'get': function () {
        return this["_instant"];
      }
    }]) && function (n5, n6) {

      if ("qtbAa" === "qtbAa") {
        for (var n7 = 0x0; n7 < n6["length"]; n7++) {
          if ("NdfPt" !== "UcBqb") {
            var n8 = n6[n7];
            n8["enumerable"] = n8["enumerable"] || !0x1;
            n8["configurab" + 'le'] = !0x0;
            'value' in n8 && (n8["writable"] = !0x0);
            Object["defineProp" + "erty"](n5, qm(n8["key"]), n8);
          } else {
            return T >= V["length"] ? {
              'done': !0x0
            } : {
              'done': !0x1,
              'value': h[C++]
            };
          }
        }
      } else {
        var nn = function (nN) {
          if ("object" != typeof nN || !nN) {
            return nN;
          }
          var nf = nN[nn['toPrimitiv' + 'e']];
          if (void 0x0 !== nf) {
            var nT = nf["call"](nN, "string");
            if ("object" != typeof nT) {
              return nT;
            }
            throw new K("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + 'lue.');
          }
          return p(nN);
        }(C);
        return 'symbol' == typeof nn ? nn : nn + '';
      }
    }(n2["prototype"], n3);
    Object["defineProp" + 'erty'](n2, "prototype", {
      'writable': !0x1
    });
    return n2;
  }(q5['o']);
  function qs(qG) {

    var qQ = function (n0) {
      if ("OLjHf" === "OLjHf") {
        if ("object" != typeof n0 || !n0) {
          return n0;
        }
        var n1 = n0[Symbol["toPrimitiv" + 'e']];
        if (void 0x0 !== n1) {
          if ("JvzAo" === "JvzAo") {
            var n2 = n1["call"](n0, "string");
            if ("object" != typeof n2) {
              return n2;
            }
            throw new TypeError("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
          } else {
            var n4 = function (n5) {


              if ("object" != typeof n5 || !n5) {
                return n5;
              }
              var n6 = n5[n4["toPrimitiv" + 'e']];
              if (void 0x0 !== n6) {
                var n7 = n6["call"](n5, "string");
                if ("object" != typeof n7) {
                  return n7;
                }
                throw new K("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + 'lue.');
              }
              return p(n5);
            }(C);
            return "symbol" == typeof n4 ? n4 : n4 + '';
          }
        }
        return String(n0);
      } else {
        void 0x0 === k && (f = "GameUI");
        void 0x0 === q1 && (B = "mc_options" + "_Slider");
        return u["call"](this, l, o, q2, E, R, W, A, r, J) || this;
      }
    }(qG);
    return "symbol" == typeof qQ ? qQ : qQ + '';
  }
  function qt(qG, qQ) {


    qt = Object["setPrototy" + 'peOf'] ? Object["setPrototy" + "peOf"]['bind']() : function (n0, n1) {
      n0["__proto__"] = n1;
      return n0;
    };
    return qt(qG, qQ);
  }
  var qB = function (qG) {


    function qQ(n5, n6, n7, n8, n9) {
      var nq;
      (nq = qG["call"](this) || this)['counter'] = 0x0;
      nq['_refSprite'] = n5;
      nq["_sourceTri" + "gger"] = n6;
      nq['_receiving' + "Trigger"] = n7;
      nq['_targetAct' + 'ion'] = n8;
      nq["_instant"] = !0x0;
      nq["_propertie" + 's'] = n9;
      return nq;
    }
    var n0;
    var n1;
    n1 = qG;
    (n0 = qQ)["prototype"] = Object["create"](n1["prototype"]);
    n0["prototype"]["constructo" + 'r'] = n0;
    qt(n0, n1);
    var n2;
    var n3;
    var n4 = qQ["prototype"];
    n4["singleActi" + 'on'] = function () {
      if ("BaFNl" !== "xEAin") {
        switch (this['_targetAct' + "ion"]) {
          case "activate t" + "rigger":
            this["_receiving" + "Trigger"]["activateBy" + "Trigger"]();
            break;
          case "disable":
            this["_receiving" + 'Trigger']["disabled"] = !0x0;
            break;
          case "enable":
            this['_receiving' + "Trigger"]['disabled'] = !0x1;
        }
      } else {
        P < p["minDelay"] && (K = m['minDelay']);
        I > k["maxDelay"] && (f = q1["maxDelay"]);
        this["_triggerDe" + "lay"] = B;
        this["forceDirty"]();
      }
    };
    n4["actions"] = function () {};
    n2 = qQ;
    (n3 = [{
      'key': "targetActi" + 'on',
      'get': function () {
        if ("PMhMq" !== "zJEyK") {
          return this['_targetAct' + "ion"];
        } else {
          if ("object" != typeof P || !p) {
            return K;
          }
          var n6 = m[I['toPrimitiv' + 'e']];
          if (void 0x0 !== n6) {
            var n7 = n6["call"](u, "string");
            if ("object" != typeof n7) {
              return n7;
            }
            throw new l("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
          }
          return q1(B);
        }
      }
    }, {
      'key': "instant",
      'get': function () {
        return this["_instant"];
      }
    }]) && function (n5, n6) {
      if ("gqTGe" !== "BuedH") {
        for (var n7 = 0x0; n7 < n6["length"]; n7++) {
          var n8 = n6[n7];
          n8["enumerable"] = n8["enumerable"] || !0x1;
          n8['configurab' + 'le'] = !0x0;
          "value" in n8 && (n8["writable"] = !0x0);
          Object['defineProp' + "erty"](n5, qs(n8["key"]), n8);
        }
      } else {
        this["count"]++;
        qI["totalParti" + "cles"] += 0x1;
        var nq = qS["random"]() * (this['yMaxSpeed'] - this['yMinSpeed']) + this["yMinSpeed"];
        var nn = this["targetBody"]["GetInterpo" + "latedAngle"]() + this["rot"];
        var nN = this["targetBody"]["GetLinearV" + "elocityFro" + "mLocalPoin" + 't'](this['offSet']);
        var nf = qA["cos"](nn) * nq + nN['x'];
        var nT = qN["sin"](nn) * nq + nN['y'];
        var nV = qc["floor"](qV["random"]() * this["bmdLength"]);
        var nh = new qE(nT, nf, this["bmdArray"][nV]);
        this["addChildAt"](nh, 0x0);
        var nC = this["targetBody"]["GetInterpo" + "latedWorld" + "Point"](this['offSet']);
        nh['x'] = nC['x'] * this["m_physScal" + 'e'] - 0.5 * nh["width"];
        nh['y'] = nC['y'] * this["m_physScal" + 'e'] - 0.5 * nh["height"];
      }
    }(n2["prototype"], n3);
    Object["defineProp" + "erty"](n2, 'prototype', {
      'writable': !0x1
    });
    return n2;
  }(q5['o']);
  var qu = q2(0x6cb5);
  var ql = q2(0x5505);
  q2(0x5cf0);
  q2(0x8cc1);
  q2(0xba94);
  q2(0xf5e9);
  var qo = q2(0x183ff);
  var qi = q2(0x136b);
  var qE = q2(0x1373c);
  var qR = q2(0x86e3);
  var qW = q2(0x17fd7);
  function qA(qG) {


    if ("QHTwZ" === "KRsue") {
      this["brainBody"] = null;
      this["heartBody"] = null;
      this['upperArm3B' + 'ody'] = null;
      this["upperArm4B" + "ody"] = null;
      this["upperLeg3B" + "ody"] = null;
      this["upperLeg4B" + "ody"] = null;
      this["headBloodF" + "low"] = null;
      this["stomachBlo" + "odFlow"] = null;
      this["neckBloodF" + "low"] = null;
      this["shoulder1B" + "loodFlow"] = null;
      this["shoulder2B" + "loodFlow"] = null;
      this["hip1BloodF" + "low"] = null;
      this["hip2BloodF" + "low"] = null;
      this["chunks"] = [];
      this['voiceArray'] = [];
      this["voiceSound"] = null;
      this["voicePrior" + "ity"] = -0x1;
      for (var n1 = 0x0; n1 < this["composites"]["length"]; n1++) {
        this["composites"][n1] instanceof N['i$'] && this["composites"][n1]["die"]();
      }
      this["kneeLigame" + "nt1"] = null;
      this["kneeLigame" + "nt2"] = null;
      this["elbowLigam" + 'ent1'] = null;
      this["elbowLigam" + "ent2"] = null;
      this["composites"] = [];
      this["intestineC" + "hain"] && (this["intestineC" + "hain"] = null);
      this["spinalChor" + 'd'] && (this["spinalChor" + 'd']["die"](), this["spinalChor" + 'd'] = null);
      this["actionsVec" + "tor"] = new f();
      this["userVehicl" + 'e'] = null;
      this['vehicleArm' + '1Joint'] = null;
      this["vehicleArm" + "2Joint"] = null;
    } else {
      var qQ = function (n1) {
        if ("CQevx" === "AgaAD") {
          for (var n5 = 0x0; n5 < V["length"]; n5++) {
            var n6 = p[n5];
            n6["enumerable"] = n6['enumerable'] || !0x1;
            n6["configurab" + 'le'] = !0x0;
            "value" in n6 && (n6['writable'] = !0x0);
            K["defineProp" + "erty"](m, I(n6["key"]), n6);
          }
        } else {
          if ("object" != typeof n1 || !n1) {
            return n1;
          }
          var n2 = n1[Symbol["toPrimitiv" + 'e']];
          if (void 0x0 !== n2) {
            var n3 = n2["call"](n1, "string");
            if ("object" != typeof n3) {
              return n3;
            }
            throw new TypeError("@@toPrimit" + 'ive\x20must\x20r' + "eturn a pr" + "imitive va" + 'lue.');
          }
          return String(n1);
        }
      }(qG);
      return "symbol" == typeof qQ ? qQ : qQ + '';
    }
  }
  function qr(qG, qQ) {


    qr = Object["setPrototy" + 'peOf'] ? Object["setPrototy" + 'peOf']["bind"]() : function (n0, n1) {
      n0["__proto__"] = n1;
      return n0;
    };
    return qr(qG, qQ);
  }
  q2(0x118ac);
  var qJ = function (qG) {


    if ('DMRgt' !== "YFdWl") {
      function n4(n5, n6) {
        if ("adfHS" === "UShVK") {
          var n9;
          this['contactRes' + "ultBuffer"]["get"](this["hatShape"]) && (n9 = this["contactRes" + "ultBuffer"]["get"](this["hatShape"]), this["hatSmash"](n9["impulse"]), this['contactRes' + "ultBuffer"]["delete"](this["head1Shape"]), this["contactAdd" + "Buffer"]["delete"](this["head1Shape"]));
          this["contactRes" + "ultBuffer"]["get"](this["frontWheel" + "Shape"]) && this["contactRes" + 'ultBuffer']["delete"](this['frontWheel' + "Shape"]);
          this["contactRes" + "ultBuffer"]["get"](this["backWheelS" + "hape"]) && this["contactRes" + "ultBuffer"]["delete"](this["backWheelS" + "hape"]);
          this["contactRes" + "ultBuffer"]["get"](this["frameBotto" + "mShape"]) && this["frameSmash"]();
          this["contactRes" + "ultBuffer"]["get"](this["frameLeftS" + "hape"]) && this["frameSmash"]();
          this["contactRes" + "ultBuffer"]["get"](this["frameRight" + "Shape"]) && this["frameSmash"]();
          n["prototype"]["handleCont" + "actResults"]["call"](this);
        } else {
          var n7;
          (n7 = qG["call"](this) || this)["triggering" + "Count"] = 0x0;
          n7['soundLocat' + 'ion'] = 0x1;
          n7['mouseOutHa' + "ndlerBind"] = n7["mouseOutHa" + 'ndler']['bind'](n7);
          n7["mouseUpHan" + "dlerBind"] = n7["mouseUpHan" + "dler"]["bind"](n7);
          n7["checkAdd1B" + "ind"] = n7["checkAdd1"]['bind'](n7);
          n7["checkAdd2B" + "ind"] = n7["checkAdd2"]["bind"](n7);
          n7["checkAdd3B" + "ind"] = n7["checkAdd3"]["bind"](n7);
          n7["checkAdd4B" + "ind"] = n7["checkAdd4"]["bind"](n7);
          n7["checkRemov" + "e1Bind"] = n7["checkRemov" + 'e1']['bind'](n7);
          n7["createShap" + 'e'](n5);
          n7["triggerInd" + 'ex'] = n6;
          n7['_x'] = n5['x'];
          n7['_y'] = n5['y'];
          n7["session"] = q4['w']["currentSes" + "sion"];
          n7["delayFrame" + 's'] = Math["floor"](0x1e * n5["triggerDel" + 'ay']);
          n7['delayVecto' + 'r'] = new Array();
          n7["repeatFram" + 'es'] = n7["repeatCoun" + 't'] = Math["floor"](0x1e * n5["repeatInte" + "rval"]);
          n7["type"] = n5['typeIndex'];
          0x2 == n5["typeIndex"] && (n7["soundEffec" + 't'] = qE['Gg']['instance']["sfxDiction" + "ary"]["get"](n5["soundEffec" + 't']), n7["soundLocat" + "ion"] = n5["soundLocat" + "ion"], n7["soundTrans" + "form"] = new qE['AX'](n5["volume"], n5["panning"]));
          n7['triggeredB' + 'y'] = n5["triggeredB" + 'y'];
          n7["repeatType"] = n5["repeatType"];
          n7["activation" + "Dictionary"] = new Map();
          n7["targets"] = new Array();
          return n7;
        }
      }
      var qQ;
      var n0;
      n0 = qG;
      (qQ = n4)["prototype"] = Object["create"](n0["prototype"]);
      qQ['prototype']["constructo" + 'r'] = qQ;
      qr(qQ, n0);
      var n1;
      var n2;
      var n3 = n4["prototype"];
      n3["createShap" + 'e'] = function (n5) {
        if (0x5 != n5["triggeredB" + 'y']) {
          if (0x6 == n5["triggeredB" + 'y']) {
            this["buttonSpri" + 'te'] = new qi['kx']();
            this["buttonSpri" + 'te']['graphics']["beginFill"](0x0, 0x1);
            this["buttonSpri" + 'te']['graphics']["drawRect"](-0x32, -0x32, 0x64, 0x64);
            this["buttonSpri" + 'te']['x'] = n5['x'];
            this["buttonSpri" + 'te']['y'] = n5['y'];
            this["buttonSpri" + 'te']["scaleX"] = n5["scaleX"];
            this["buttonSpri" + 'te']["scaleY"] = n5["scaleY"];
            this["buttonSpri" + 'te']["alpha"] = 0x0;
            var n6 = new qi['kx']();
            n6["graphics"]["beginFill"](0x0, 0x1);
            n6['graphics']["drawRect"](-0x32, -0x32, 0x64, 0x64);
            n6['x'] = n5['x'];
            n6['y'] = n5['y'];
            n6['scaleX'] = n5["scaleX"];
            n6['scaleY'] = n5["scaleY"];
            n6["mouseEnabl" + 'ed'] = !0x1;
            n6["visible"] = !0x1;
            this["buttonSpri" + 'te']["hitArea"] = n6;
            this['buttonSpri' + 'te']["buttonMode"] = !0x0;
            !n5["startDisab" + "led"] && this["buttonSpri" + 'te']["addEventLi" + "stener"](qi['Cm']["MOUSE_UP"], this["mouseUpHan" + "dlerBind"], !0x1, 0x0, !0x0);
            q4['w']["rootApp"]["renderer"]["render"](this["buttonSpri" + 'te']["_pixiSprit" + 'e']);
            var n7 = q4['w']["currentSes" + "sion"]["buttonCont" + "ainer"];
            n7["addChild"](this["buttonSpri" + 'te']);
            n7["addChild"](n6);
          }
          var n8 = new q3['m2']();
          n8["filter"]['categoryBi' + 'ts'] = 0x18;
          n8['filter']["groupIndex"] = -0x14;
          n8["isSensor"] = !0x0;
          var n9 = q4['w']["currentSes" + "sion"]['level']["m_physScal" + 'e'];
          var nq = new q3['RM'](n5['x'] / n9, n5['y'] / n9);
          var nn = n5["angle"] * Math['PI'] / 0xb4;
          n8["SetAsOrien" + "tedBox"](0x32 * n5["scaleX"] / n9, 0x32 * n5["scaleY"] / n9, new q3['RM'](nq['x'], nq['y']), nn);
          this["sensor"] = q4['w']["currentSes" + "sion"]["level"]["levelBody"]['CreateShap' + 'e'](n8);
          null === this["sensor"]["m_userData"] && (this["sensor"]['m_userData'] = {
            'disabled': this["disabled"]
          });
          0x1 == n5["triggeredB" + 'y'] ? q4['w']["currentSes" + 'sion']["contactLis" + "tener"]["registerLi" + "stener"](qo['fI']["ADD"], this["sensor"], this["checkAdd1B" + "ind"]) : 0x2 == n5["triggeredB" + 'y'] ? q4['w']["currentSes" + "sion"]["contactLis" + "tener"]["registerLi" + "stener"](qo['fI']["ADD"], this["sensor"], this["checkAdd2B" + "ind"]) : 0x3 == n5["triggeredB" + 'y'] ? q4['w']["currentSes" + "sion"]['contactLis' + "tener"]['registerLi' + "stener"](qo['fI']["ADD"], this["sensor"], this["checkAdd3B" + "ind"]) : 0x4 == n5['triggeredB' + 'y'] && q4['w']["currentSes" + "sion"]["contactLis" + "tener"]["registerLi" + "stener"](qo['fI']["ADD"], this["sensor"], this["checkAdd4B" + "ind"]);
        }
      };
      n3["addActivat" + "ionBody"] = function (n5) {
        if ("eWvwE" !== "maWGy") {
          if (0x4 == this["triggeredB" + 'y'] && this["activation" + "Dictionary"]) {
            for (var n6 = 0x0; n6 < n5["length"]; n6++) {
              if ("baOKn" !== "mhEvJ") {
                var n7 = n5[n6];
                this["activation" + "Dictionary"]["set"](n7, 0x1);
              } else {
                I["shape2"]["m_isSensor"] || (k["wheelConta" + "cts"] -= 0x1, 0x4 & f['shape2']["GetMateria" + 'l']() && (n4['shape1'] == B["frontWheel" + "Shape"] && u["shape2"]["GetBody"]() == l["frontRailB" + "ody"] && (o["destroyFro" + "ntDongle"] = !0x0), q2["shape1"] == E["backWheelS" + "hape"] && R["shape2"]["GetBody"]() == W["backRailBo" + 'dy'] && (A['destroyBac' + "kDongle"] = !0x0)));
              }
            }
          }
        } else {
          V = h;
          C = 0x1;
          j = P;
        }
      };
      n4["playClickA" + "nimation"] = function (n5, n6, n7) {

        var n8 = new qi['j7']();
        n8["setPixiMov" + "ieClip"]((0x0, qW['zI'])("Game", "mouseClick" + 'MC'));
        n8["mouseEnabl" + 'ed'] = !0x1;
        n8['x'] = n6;
        n8['y'] = n7;
        n8['loop'] = !0x1;
        function n9() {
          if ("IglKR" === "ShmMa") {
            this["dispatchEv" + "ent"](new P['Jh'](p['Jh']["COMPLETE"]));
            var nn = this["saverLoade" + 'r']["createXML"]();
            var nN = new K['Pu'](-0x1, -0x1);
            nN['levelXML'] = nn;
            var nf = nN["buildLevel" + "SourceObje" + 'ct']();
            m['w']["currentSes" + "sion"] = this['session'] = new I['Nn'](k['w']["CURRENT_VE" + "RSION"], this["characterD" + "ata"], nf, f['w']["CURRENT_VE" + "RSION"], n6['w']["editorDebu" + "gDraw"]);
            this['session']["isEditorTe" + 'st'] = !0x0;
            this["addChild"](this["session"]);
            this["session"]['create']();
            this["topMenu"]['levelTeste' + 'd'] = !0x0;
            this["removeChil" + 'd'](this["canvasHold" + 'er']);
            this['stage']["addEventLi" + "stener"](B['kV']["KEY_DOWN"], this["keyDownSes" + 'sionHandle' + 'r']);
            this["cullObject" + 's'](!0x0);
          } else {
            n8["pixiMovieC" + 'lip']["isAnimatio" + "nComplete"]() && (n8["removeEven" + 'tListener'](qi['Jh']["ENTER_FRAM" + 'E'], n9), n8["parent"] && n8["parent"]["removeChil" + 'd'](n8), n8["destroy"]());
          }
        }
        n8["addEventLi" + "stener"](qi['Jh']["ENTER_FRAM" + 'E'], n9);
        n8["play"]();
        n5["containerS" + "prite"]["addChild"](n8);
      };
      n3['mouseUpHan' + "dler"] = function (n5) {

        if ("EKgeu" !== "yPemU") {
          void 0x0 === n5 && (n5 = null);
          null == n5 && n4["playClickA" + "nimation"](this["session"], this['_x'], this['_y']);
          if (this["repeatType"] > 0x2) {
            var n6 = this["session"]["level"]["actionsVec" + 'tor'];
            var n7 = n6["indexOf"](this);
            n7 < 0x0 && (this["session"]["isReplay"] || this["session"]["replayData"]["addMouseEn" + "try"](this['session']["iteration"], this["triggerInd" + 'ex']), n6["push"](this), this["triggering" + "Body"] = this["session"]['level']["levelBody"], 0x3 == this["repeatType"] && this["buttonSpri" + 'te']['addEventLi' + "stener"](qi['Cm']["ROLL_OUT"], this["mouseOutHa" + "ndlerBind"], !0x1, 0x0, !0x0));
          } else {
            0x1 == this["repeatType"] && (this["buttonSpri" + 'te']["removeEven" + "tListener"](qi['Cm']["MOUSE_UP"], this["mouseUpHan" + "dlerBind"]), this['buttonSpri' + 'te']["parent"] && this["buttonSpri" + 'te']["parent"]['removeChil' + 'd'](this["buttonSpri" + 'te']));
            0x0 == this["delayFrame" + 's'] ? (n7 = (n6 = this["session"]["level"]["singleActi" + 'onVector'])["indexOf"](this)) < 0x0 && (this['session']["isReplay"] || this["session"]["replayData"]['addMouseEn' + "try"](this['session']["iteration"], this["triggerInd" + 'ex']), n6["push"](this)) : (n7 = (n6 = this["session"]["level"]['actionsVec' + "tor"])["indexOf"](this), this["delayVecto" + 'r']["push"](0x0), n7 < 0x0 && (this["session"]['isReplay'] || this["session"]["replayData"]["addMouseEn" + "try"](this["session"]['iteration'], this["triggerInd" + 'ex']), n6["push"](this)));
          }
        } else {
          n3 = qI["setPrototy" + "peOf"] ? qS["setPrototy" + "peOf"]["bind"]() : function (n9, nq) {
            n9["__proto__"] = nq;
            return n9;
          };
          return qA(qN, qc);
        }
      };
      n3["mouseOutHa" + "ndler"] = function (n5) {
        if ("CdHsU" !== "CdHsU") {
          this["_autoResol" + "ution"] = !0x1;
          if (!h['TY']["active"]) {
            var n7 = (0x0, m['oz'])(I["resolution"] * (0x0, k['v9'])(this["worldTrans" + "form"]));
            this["resolution"] !== n7 && (this["resolution"] = n7, this["updateText"](!0x0));
          }
          p["kxk"]["prototype"]["render"]["call"](this, K);
        } else {
          void 0x0 === n5 && (n5 = null);
          this["buttonSpri" + 'te']["removeEven" + "tListener"](qi['Cm']["ROLL_OUT"], this["mouseOutHa" + "ndlerBind"]);
          this["triggering" + "Body"] = null;
          this["session"]["isReplay"] || this["session"]["replayData"]["addMouseEn" + 'try'](this["session"]["iteration"], this["triggerInd" + 'ex'], 0x1);
        }
      };
      n3["addTargetA" + "ctionShape"] = function (n5, n6, n7, n8, n9) {
        var nq = new qN(n5, n6, n7, n8, n9);
        this["targets"]["push"](nq);
        return nq;
      };
      n3["addTargetA" + "ctionGroup"] = function (n5, n6, n7, n8, n9) {
        var nq = new qV(n5, n6, n7, n8, n9);
        this["targets"]['push'](nq);
        return nq;
      };
      n3["addTargetI" + "temSpecial"] = function (n5, n6, n7, n8) {
        var n9 = new qk(n6, this, n5, n7, n8);
        this["targets"]["push"](n9);
        return n9;
      };
      n3["addTargetA" + "ctionRevJo" + 'int'] = function (n5, n6, n7, n8) {
        if ("UoTcS" === "rSSVK") {
          f["__proto__"] = T;
          return V;
        } else {
          var n9 = new qK(n5, n6, n7, n8);
          this["targets"]["push"](n9);
          return n9;
        }
      };
      n3["addTargetA" + "ctionPrisJ" + "oint"] = function (n5, n6, n7, n8) {
        var n9 = new qj(n5, n6, n7, n8);
        this["targets"]["push"](n9);
        return n9;
      };
      n3["addTargetA" + "ctionTrigg" + 'er'] = function (n5, n6, n7, n8, n9) {
        if ("lzLcS" === "lzLcS") {
          var nq = new qB(n5, n6, n7, n8, n9);
          this["targets"]['push'](nq);
          return nq;
        } else {
          var nN = this["buttons"][p];
          nN['x'] = this["buttonX"] + 0x190;
          K == m - 0x1 ? I['os']['to'](nN, {
            'duration': 0.5,
            'x': this["buttonX"],
            'ease': k['MI']["easeOut"],
            'delay': f,
            'onComplete': this["introCompl" + "ete"]
          }) : n4['os']['to'](nN, {
            'duration': 0.5,
            'x': this["buttonX"],
            'ease': B['MI']["easeOut"],
            'delay': u
          });
          l += 0.15;
        }
      };
      n3["singleActi" + 'on'] = function () {

        if (0x1 == this["type"]) {
          for (var n5 = this["targets"]["length"], n6 = 0x0; n6 < n5; n6++) {
            if (this["targets"][n6] instanceof qN) {
              var n7 = this["targets"][n6];
              n7['instant'] ? n7["singleActi" + 'on']() : q4['w']["currentSes" + "sion"]["level"]['actionsVec' + 'tor']["push"](n7);
            } else {
              if (this["targets"][n6] instanceof qk) {
                var n8 = this["targets"][n6];
                n8['instant'] ? n8["singleActi" + 'on']() : q4['w']["currentSes" + "sion"]["level"]['actionsVec' + "tor"]["push"](n8);
              } else {
                if (this["targets"][n6] instanceof qV) {
                  if ("oiyqm" !== "emTvg") {
                    var n9 = this["targets"][n6];
                    n9["instant"] ? n9['singleActi' + 'on']() : q4['w']['currentSes' + 'sion']["level"]["actionsVec" + "tor"]['push'](n9);
                  } else {
                    var nh = qH['a'];
                    var nC = qk["triggerAct" + "ions"]["get"](q4);
                    nC || (nC = [], qJ["triggerAct" + 'ions']["set"](qr, nC));
                    for (var nj = 0x0; nj < (null == nh ? void 0x0 : nh["length"]); nj++) {
                      var nP = nh[nj];
                      qM = qi(nP['@i']);
                      if (qD && (qw = q0[q1], nC["push"](q2), q3 = q4 ? q5[q6] : null)) {
                        for (var np = 0x0; np < q7["length"]; np++) {
                          var nK;
                          var nm = qV[np];
                          (nK = qh["keyedPrope" + "rtyObject"][nm]) || (nK = qC["keyedPrope" + "rtyObject"][nm] = new qj());
                          var nI = nK["get"](qP);
                          nI || (nI = [], nK["set"](qp, nI));
                          var nk = nP['@p' + np];
                          void 0x0 !== nk && (nI[nj] = 't' == nk || 'f' == nk ? 't' == nk : qK(nk));
                        }
                      }
                    }
                  }
                } else {
                  if (this["targets"][n6] instanceof qK) {
                    var nq = this["targets"][n6];
                    nq["instant"] ? nq["singleActi" + 'on']() : q4['w']["currentSes" + "sion"]["level"]['actionsVec' + "tor"]["push"](nq);
                  } else {
                    if (this["targets"][n6] instanceof qj) {
                      if ('NYsif' === "cVtMd") {
                        h = C["setPrototy" + "peOf"] ? j["setPrototy" + "peOf"]["bind"]() : function (nC, nj) {
                          nC["__proto__"] = nj;
                          return nC;
                        };
                        return P(p, K);
                      } else {
                        var nn = this["targets"][n6];
                        nn["instant"] ? nn["singleActi" + 'on']() : q4['w']["currentSes" + "sion"]["level"]['actionsVec' + "tor"]["push"](nn);
                      }
                    } else {
                      this["targets"][n6] instanceof qB && this["targets"][n6]["singleActi" + 'on']();
                    }
                  }
                }
              }
            }
          }
        } else {
          if (0x2 == this["type"] && this["soundEffec" + 't']) {
            if (0x1 == this["soundLocat" + "ion"]) {
              qE['m']["instance"]["playSoundI" + "nstance"](this["soundEffec" + 't'], 0x0, 0x0, this["soundTrans" + "form"]);
            } else {
              var nN = q4['w']["currentSes" + "sion"]["level"]['m_physScal' + 'e'];
              var nf = new q3['RM'](this['_x'] / nN, this['_y'] / nN);
              qE['m']["instance"]["playPointS" + "oundInstan" + 'ce'](this["soundEffec" + 't'], nf, this["soundTrans" + "form"]["volume"]);
            }
          } else {
            if (0x3 == this["type"]) {
              if ("FKfDD" === "dNChI") {
                this['bg']["graphics"]["clear"]();
                this['bg']["graphics"]["beginFill"](0xfffe65, 0x1);
                this['bg']["graphics"]["drawRect"](0x0, 0x0, N["ceil"](this['textField']['width']) + 0x8, f['ceil'](this["textField"]["height"]) + 0x4);
                this['bg']["graphics"]["endFill"]();
              } else {
                var nT = q4['w']["currentSes" + "sion"];
                nT["isReplay"] || nT["levelCompl" + "ete"]();
                qE['m']["instance"]["playSoundI" + "tem"]("Victory");
              }
            }
          }
        }
        0x1 == this["repeatType"] && this["sensor"] && (q4['w']['currentSes' + "sion"]['level']["levelBody"]["DestroySha" + 'pe'](this['sensor']), this["sensor"] = null);
      };
      n3["actions"] = function () {
        var n5;
        var n6;
        if (this["delayVecto" + 'r']["length"] > 0x0) {
          for (var n7 = this["delayVecto" + 'r']['length'] - 0x1; n7 > -0x1; n7--) {
            var n8 = this["delayVecto" + 'r'][n7];
            n8 == this["delayFrame" + 's'] ? (this["singleActi" + 'on'](), this["delayVecto" + 'r']["splice"](n7, 0x1)) : this["delayVecto" + 'r'][n7] = n8 + 0x1;
          }
          0x0 == this["delayVecto" + 'r']["length"] && (n5 = !0x0);
        } else {
          n5 = !0x0;
        }
        this["repeatType"] > 0x2 && this['triggering' + "Body"] ? this['repeatCoun' + 't'] == this["repeatFram" + 'es'] || isNaN(this["repeatFram" + 'es']) ? (0x0 == this["delayFrame" + 's'] ? this["singleActi" + 'on']() : this["delayVecto" + 'r']["push"](0x0), this["repeatCoun" + 't'] = 0x0) : this["repeatCoun" + 't']++ : n6 = !0x0;
        n5 && n6 && this["session"]["level"]["removeFrom" + "ActionsVec" + "tor"](this);
      };
      n3["addTrigger" + "ingBody"] = function (n5) {
        if ("yztIe" === "RTPud") {
          this["graphics"]["lineStyle"](0x0, 0xff6600, 0.7);
          var nN = new P['RM'](-this["_lowerLimi" + 't'], 0x0);
          var nf = new p['RM'](-this["_upperLimi" + 't'], 0x0);
          var nT = new K['LJ'](this["axisAngle"] * m['PI'] / 0xb4);
          nN["MulM"](nT);
          nf["MulM"](nT);
          var nV = new I['RM'](nf['x'] - nN['x'], nf['y'] - nN['y']);
          var nh = nV["Length"]();
          var nC = new k['RM'](nV['x'] / nh, nV['y'] / nh);
          var nj = 0x6;
          var nP = 0x6;
          var np = (nh - nj) / (nj + nP);
          var nK = f["ceil"](np);
          var nm = np / nK;
          nj *= nm;
          nP *= nm;
          nK++;
          var nI = nN['x'];
          var nk = nN['y'];
          var ns = new n4['RM'](-0x19, 0x0);
          var nt = new B['RM'](0x19 + nj, 0x0);
          (this["axisAngle"] < -0x5a || this["_axisAngle"] > 0x5a) && (ns['x'] = nt['x'], nt['x'] = -0x19);
          ns['MulM'](nT);
          nt["MulM"](nT);
          for (var nB = 0x0; nB < nK; nB++) {
            (nI < ns['x'] || nI > nt['x']) && (this["graphics"]["moveTo"](nI, nk), this['graphics']["lineTo"](nI + nC['x'] * nj, nk + nC['y'] * nj));
            nI += nC['x'] * (nj + nP);
            nk += nC['y'] * (nj + nP);
          }
          this["graphics"]["moveTo"](nN['x'] - 0xa * nC['y'], nN['y'] + 0xa * nC['x']);
          this['graphics']['lineTo'](nN['x'] + 0xa * nC['y'], nN['y'] - 0xa * nC['x']);
          this["graphics"]["moveTo"](nf['x'] - 0xa * nC['y'], nf['y'] + 0xa * nC['x']);
          this["graphics"]["lineTo"](nf['x'] + 0xa * nC['y'], nf['y'] - 0xa * nC['x']);
        } else {
          if (this["triggering" + "Body"]) {
            n5 == this["triggering" + "Body"] && (this["triggering" + "Count"] += 0x1);
          } else {
            for (var n6 = 0x0, n7 = n5["m_contactL" + "ist"]; n7; n7 = n7["next"]) {
              var n8 = n7['contact'];
              n8["m_shape1"] == this["sensor"] ? n8["m_shape2"]["m_isSensor"] || (n6 += n8['m_manifold' + "Count"]) : n8['m_shape2'] == this["sensor"] && (n8["m_shape1"]["m_isSensor"] || (n6 += n8["m_manifold" + "Count"]));
            }
            if (n6 > 0x0) {
              return;
            }
            this["triggering" + "Body"] = n5;
            this["triggering" + "Count"] += 0x1;
            if (this["repeatType"] > 0x2) {
              var n9 = this["session"]["level"]["actionsVec" + "tor"];
              var nq = n9["indexOf"](this);
              nq < 0x0 && (n9["push"](this), 0x3 == this["repeatType"] && q4['w']["currentSes" + "sion"]['contactLis' + "tener"]["registerLi" + "stener"](qo['fI']["REMOVE"], this['sensor'], this["checkRemov" + "e1Bind"]));
            } else {
              0x1 == this["repeatType"] ? (q4['w']["currentSes" + "sion"]["contactLis" + "tener"]["deleteList" + "ener"](qo['fI']["ADD"], this["sensor"]), this["activation" + "Dictionary"] = null) : q4['w']['currentSes' + "sion"]["contactLis" + "tener"]["registerLi" + "stener"](qo['fI']["REMOVE"], this["sensor"], this["checkRemov" + "e1Bind"]);
              0x0 == this["delayFrame" + 's'] ? (nq = (n9 = this["session"]["level"]["singleActi" + "onVector"])['indexOf'](this)) < 0x0 && n9["push"](this) : (nq = (n9 = this["session"]["level"]["actionsVec" + "tor"])["indexOf"](this), this["delayVecto" + 'r']["push"](0x0), nq < 0x0 && n9["push"](this));
            }
          }
        }
      };
      n3["activateBy" + 'Trigger'] = function () {
        if (!this["_disabled"]) {
          if (0x1 == this["repeatType"]) {
            if (!this["activation" + 'Dictionary']) {
              return;
            }
            if (0x0 == this["delayFrame" + 's']) {
              if ("rRVfY" !== "rRVfY") {
                this["_currentIt" + 'em'] && (this["_currentIt" + 'em']["selected"] = !0x1);
                this["_currentIt" + 'em'] = n;
                this["_currentIt" + 'em']['selected'] = !0x0;
              } else {
                var n5 = this["session"]["level"]['singleActi' + "onVector"];
                var n6 = n5['indexOf'](this);
                n6 < 0x0 && (q4['w']["currentSes" + "sion"]["contactLis" + "tener"]["deleteList" + "ener"](qo['fI']['ADD'], this["sensor"]), this["activation" + "Dictionary"] = null, this["singleActi" + 'on']());
              }
            } else {
              (n6 = (n5 = this['session']["level"]["actionsVec" + "tor"])["indexOf"](this)) < 0x0 && (q4['w']["currentSes" + "sion"]["contactLis" + "tener"]["deleteList" + "ener"](qo['fI']["ADD"], this["sensor"]), this["activation" + "Dictionary"] = null, n5["push"](this), this["delayVecto" + 'r']["push"](0x0));
            }
          } else {
            if (0x2 == this["repeatType"]) {
              0x0 == this["delayFrame" + 's'] ? (n6 = (n5 = this["session"]["level"]["singleActi" + "onVector"])["indexOf"](this)) < 0x0 && this["singleActi" + 'on']() : (n6 = (n5 = this["session"]['level']['actionsVec' + 'tor'])['indexOf'](this)) < 0x0 ? (n5["push"](this), this["delayVecto" + 'r']["push"](0x0)) : this["delayVecto" + 'r']["push"](0x0);
            } else {
              if (0x3 == this["repeatType"]) {
                if (this["triggering" + 'Body']) {
                  return;
                }
                0x0 == this["delayFrame" + 's'] ? (n6 = (n5 = this["session"]["level"]['singleActi' + "onVector"])["indexOf"](this)) < 0x0 && this["singleActi" + 'on']() : (n6 = (n5 = this["session"]["level"]["actionsVec" + "tor"])["indexOf"](this)) < 0x0 && (n5["push"](this), this["delayVecto" + 'r']["push"](0x0));
              } else {
                if (0x4 == this["repeatType"]) {
                  if (this["triggering" + 'Body']) {
                    return;
                  }
                  this["triggering" + "Body"] = this["session"]["level"]["levelBody"];
                  (n6 = (n5 = this["session"]["level"]["actionsVec" + "tor"])['indexOf'](this)) < 0x0 && n5['push'](this);
                }
              }
            }
          }
        }
      };
      n3["checkRemov" + 'e1'] = function (n5) {
        if ("zNfgs" === "uNWZO") {
          this["loadContai" + "ner"]["hide"]();
          this["sessionCon" + "tentLoader"]['removeEven' + "tListener"](qz['Jh']['COMPLETE'], this['beginSessi' + "onBind"]);
          this["sessionCon" + "tentLoader"]['removeEven' + "tListener"](n3['BR']["IO_ERROR"], this["IOErrorHan" + "dlerBind"]);
          this["sessionCon" + "tentLoader"]["removeEven" + "tListener"](qI['NN']["ERROR"], this["loadErrorH" + 'andlerBind']);
          this["sessionCon" + "tentLoader"] = null;
          this["openPrompt"]("Sorry, the" + "re was a p" + "roblem loa" + "ding the l" + "evel. Plea" + "se wait a " + "moment and" + " then try " + "again.", "alright");
          this["dispatchEv" + "ent"](new qS['$T'](qA['$T']["MAIN_MENU"]));
        } else {
          var n6 = n5["shape2"]["GetBody"]();
          n6 == this["triggering" + "Body"] && 0x0 == n5["shape2"]['m_isSensor'] && (this["triggering" + "Count"] -= 0x1, this['triggering' + "Count"] < 0x1 && n6["m_mass"] > 0x0 && (this["triggering" + "Count"] = 0x0, this["triggering" + "Body"] = null));
        }
      };
      n3['checkAdd1'] = function (n5) {
        var n6 = n5["shape2"]['GetBody']();
        n6 == this["session"]["character"]["centralBod" + 'y'] && this["addTrigger" + 'ingBody'](n6);
      };
      n3["checkAdd2"] = function (n5) {
        var n6 = n5["shape2"]["GetBody"]();
        var n7 = n5["shape2"];
        n7["m_userData"] instanceof qu['S3'] ? n6 == n7["m_userData"]["centralBod" + 'y'] && this["addTrigger" + "ingBody"](n6) : n7["m_userData"] instanceof qR['sP'] && n6 == n7['m_userData']["centralBod" + 'y'] && this["addTrigger" + "ingBody"](n6);
      };
      n3['checkAdd3'] = function (n5) {
        if ("xNctj" !== "RzrLK") {
          var n6 = n5["shape2"]["GetBody"]();
          n6["m_mass"] > 0x0 && 0x0 == n5['shape2']["m_isSensor"] && this['addTrigger' + "ingBody"](n6);
        } else {
          this["ejected"] ? this["currentPos" + 'e'] = 0x3 : (this["wheelJoint"]["IsMotorEna" + 'bled']() || this["wheelJoint"]["EnableMoto" + 'r'](!0x0), this['wheelCurre' + "ntSpeed"] = this["wheelJoint"]["GetJointSp" + "eed"](), this["wheelCurre" + "ntSpeed"] < 0x0 ? this["wheelNewSp" + "eed"] = 0x0 : this["wheelNewSp" + "eed"] = this["wheelCurre" + "ntSpeed"] < this["wheelMaxSp" + 'eed'] ? this["wheelCurre" + "ntSpeed"] + this["accelStep"] : this["wheelCurre" + "ntSpeed"], this["wheelJoint"]["SetMotorSp" + "eed"](this["wheelNewSp" + "eed"]));
        }
      };
      n3['checkAdd4'] = function (n5) {

        if ("XtbaY" !== "XtbaY") {
          n3 = qI["setPrototy" + "peOf"] ? qS["setPrototy" + 'peOf']["bind"]() : function (n8, n9) {
            n8["__proto__"] = n9;
            return n8;
          };
          return qA(qN, qc);
        } else {
          var n6 = n5["shape2"]["GetBody"]();
          n6["m_mass"] > 0x0 && 0x0 == n5["shape2"]["m_isSensor"] && this["activation" + "Dictionary"]["get"](n6) && this["addTrigger" + "ingBody"](n6);
        }
      };
      n1 = n4;
      (n2 = [{
        'key': 'disabled',
        'get': function () {
          return this['_disabled'];
        },
        'set': function (n5) {
          this["sensor"] && (this["sensor"]["m_userData"]["disabled"] = n5);
          if (this["_disabled"]) {
            n5 || this["activation" + "Dictionary"] && (n6 = q4['w']["currentSes" + "sion"], 0x1 == this["triggeredB" + 'y'] ? q4['w']["currentSes" + "sion"]["contactLis" + "tener"]["registerLi" + "stener"](qo['fI']["ADD"], this["sensor"], this['checkAdd1B' + "ind"]) : 0x2 == this["triggeredB" + 'y'] ? q4['w']["currentSes" + "sion"]["contactLis" + 'tener']['registerLi' + 'stener'](qo['fI']["ADD"], this["sensor"], this['checkAdd2B' + "ind"]) : 0x3 == this["triggeredB" + 'y'] ? q4['w']["currentSes" + "sion"]["contactLis" + "tener"]["registerLi" + "stener"](qo['fI']["ADD"], this["sensor"], this["checkAdd3B" + "ind"]) : 0x4 == this["triggeredB" + 'y'] ? q4['w']["currentSes" + 'sion']["contactLis" + "tener"]["registerLi" + "stener"](qo['fI']['ADD'], this["sensor"], this["checkAdd4B" + "ind"]) : 0x6 == this['triggeredB' + 'y'] && (this["buttonSpri" + 'te']["mouseEnabl" + 'ed'] = !0x0, this["buttonSpri" + 'te']["addEventLi" + "stener"](qi['Cm']["MOUSE_UP"], this["mouseUpHan" + "dlerBind"], !0x1, 0x0, !0x0)), this["sensor"] && n6["m_world"]["Refilter"](this["sensor"]));
          } else {
            if (n5) {
              var n6 = q4['w']['currentSes' + "sion"];
              this["sensor"] && (n6["contactLis" + "tener"]["deleteList" + "ener"](qo['fI']["ADD"], this["sensor"]), n6["contactLis" + 'tener']["deleteList" + "ener"](qo['fI']["REMOVE"], this["sensor"]));
              this["triggering" + 'Body'] = null;
              this["triggering" + "Count"] = 0x0;
              this["repeatCoun" + 't'] = this["repeatFram" + 'es'];
              this["delayVecto" + 'r'] = new Array();
              var n7 = n6["level"]['singleActi' + "onVector"];
              var n8 = n7["indexOf"](this);
              n8 > -0x1 && n7["splice"](n8, 0x1);
              (n8 = (n7 = n6["level"]['actionsVec' + "tor"])["indexOf"](this)) > -0x1 && n7["splice"](n8, 0x1);
              0x6 == this['triggeredB' + 'y'] && (this["buttonSpri" + 'te']["mouseEnabl" + 'ed'] = !0x1, this['buttonSpri' + 'te']["removeEven" + "tListener"](qi['Cm']["MOUSE_UP"], this["mouseUpHan" + 'dlerBind']), this["buttonSpri" + 'te']["interactiv" + 'e'] = !0x1);
            }
          }
          this["_disabled"] = n5;
        }
      }, {
        'key': 'x',
        'get': function () {
          return this['_x'];
        }
      }, {
        'key': 'y',
        'get': function () {
          return this['_y'];
        }
      }]) && function (n5, n6) {
        if ("tQAeg" !== "tQAeg") {
          return this["_triggers"];
        } else {
          for (var n7 = 0x0; n7 < n6["length"]; n7++) {
            if ("kEgRx" !== "kEgRx") {
              var nn;
              void 0x0 === qW && (qH = 0x3e8);
              (nn = qk["call"](this, q4) || this)['_accumulat' + "edDelta"] = 0x0;
              nn["targetBody"] = qJ;
              nn["minSpeed"] = qr;
              nn["maxSpeed"] = qj;
              nn["perFrame"] = qP;
              nn["startX"] = qn['x'];
              nn["startY"] = qy['y'];
              var nN = new qg['RM'](qu['x'] - qd['x'], qm['y'] - qe['y']);
              nn["rangeX"] = nN['x'];
              nn["rangeY"] = nN['y'];
              nn["angleRange"] = qh * qq['PI'] / 0xb4;
              var nf = qZ['atan2'](nN['y'], nN['x']);
              nn["rot"] = nf + (0.5 * qo['PI'] - 0.5 * nn["angleRange"]);
              nn["m_physScal" + 'e'] = qK['w']["currentSes" + 'sion']["m_physScal" + 'e'];
              nn["_container"] = n5 || nn;
              var nT = 0x2 == n2['w']['bloodSetti' + 'ng'] ? "BloodParti" + "cleLine" : "BloodParti" + "cle";
              nn['particleCl' + "ass"] = (0x0, qb['k'])(nT);
              return nn;
            } else {
              var n8 = n6[n7];
              n8["enumerable"] = n8["enumerable"] || !0x1;
              n8["configurab" + 'le'] = !0x0;
              "value" in n8 && (n8['writable'] = !0x0);
              Object["defineProp" + 'erty'](n5, qA(n8["key"]), n8);
            }
          }
        }
      }(n1["prototype"], n2);
      Object["defineProp" + "erty"](n1, "prototype", {
        'writable': !0x1
      });
      return n1;
    } else {
      if (!(T instanceof V['DJ'])) {
        throw new h("what the f" + 'uck\x20is\x20thi' + 's');
      }
      this["groups"]["addChild"](C);
    }
  }(q5['o']);
  q2(0x5bcc);
  var qD = q2(0x170b0);
  var qg = q2(0x15b7f);
  var qS = q2(0x14909);
  var qd = q2(0xe68c);
  var qz = q2(0x301f);
  var qF = q2(0xb903);
  var qM = q2(0x11432);
  var qH = q2(0x430f);
  var qb = q2(0xa9f8);
  var qZ = q2(0x1fa6);
  var qy = q2(0x15719);
  var qc = q2(0x2f77);
  var qX = q2(0x5b96);
  var qx = q2(0xad62);
  var qw = q2(0xc4bf);
  function qe(qG, qQ) {


    qe = Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"]["bind"]() : function (n0, n1) {
      n0["__proto__"] = n1;
      return n0;
    };
    return qe(qG, qQ);
  }
  var qa = function (qG) {


    function qQ() {
      return qG["call"](this, (0x0, qW['zI'])("BackDrops", "backdrop1"), 0.5, !0x0, 0x2, 0x3, !0x0) || this;
    }
    var n0;
    var n1;
    n1 = qG;
    (n0 = qQ)["prototype"] = Object['create'](n1["prototype"]);
    n0["prototype"]["constructo" + 'r'] = n0;
    qe(n0, n1);
    qQ['prototype']["createBitm" + "aps"] = function () {
      if ('PKYei' === "PKYei") {
        var n2 = this["_visual"]['b1'];
        this["drawBuildi" + 'ng'](n2, 0x5a, 0x58, !0x0, 0x1388);
        n2 = this["_visual"]['b2'];
        this["drawBuildi" + 'ng'](n2, 0x8c, 0x5a, !0x0, 0x1388);
        n2 = this['_visual']['b3'];
        this["drawBuildi" + 'ng'](n2, 0x3c, 0x66, !0x0, 0x1388);
        n2 = this["_visual"]['b4'];
        this["drawBuildi" + 'ng'](n2, 0xa0, 0x65, !0x0, 0x1388);
        this["_visual"] = null;
      } else {
        void 0x0 === q8 && (qI = 0x1);
        var n4 = 0x0;
        this["_container"] == this && this["_container"]["graphics"]["clear"]();
        for (var n5 = qS['w']["currentSes" + "sion"]["camera"]["screenBoun" + 'ds'], n6 = n5['x'] - 0x32, n7 = n5['x'] + 0x3b6, n8 = n5['y'] - 0x32, n9 = n5['y'] + 0x2bc, nq = qA['w']["currentSes" + "sion"]['camera']["screenMoti" + 'on'], nn = this["particleLi" + 'st']; nn; nn = nn["next"]) {
          n4 += 0x1;
          nn["step"](n6, n7, n8, n9, qN, nq['x'], nq['y']) || (nn['prev'] && (nn["prev"]["next"] = nn["next"]), nn["next"] && (nn["next"]["prev"] = nn["prev"]), nn == this["particleLi" + 'st'] && (this["particleLi" + 'st'] = nn['next']), nn["removeFrom"](this["_container"]), qc["totalParti" + "cles"] -= 0x1, n4 -= 0x1);
        }
        return !this["finished"] || 0x0 != n4;
      }
    };
    return qQ;
  }(qw['j']);
  function qY(qG, qQ) {


    if ('wDQRf' !== "QyhqR") {
      qY = Object["setPrototy" + "peOf"] ? Object["setPrototy" + "peOf"]["bind"]() : function (n0, n1) {
        n0["__proto__"] = n1;
        return n0;
      };
      return qY(qG, qQ);
    } else {
      var n1 = N("return (fu" + "nction() " + ("{}.constru" + "ctor(\"retu" + "rn this\")(" + '\x20)') + ');');
      f = n1();
    }
  }
  var qv = function (qG) {


    function qQ() {
      if ("qxUke" !== "qxUke") {
        var n3 = this['copterBody']["GetAngle"]();
        var n4 = (this['copterBody']["GetAngular" + "Velocity"]() - this["maxSpinAV"]) / -this["maxSpinAV"];
        n4 < 0x0 && (n4 = 0x0);
        n4 > 0x1 && (n4 = 0x1);
        var n5 = h["cos"](n3) * this["impulseRig" + 'ht'] * n4;
        var n6 = C["sin"](n3) * this["impulseRig" + 'ht'] * n4;
        var n7 = this["copterBody"]['GetLocalCe' + "nter"]();
        this["copterBody"]["ApplyImpul" + 'se'](new j['RM'](-n6, n5), this['copterBody']['GetWorldPo' + "int"](new P['RM'](n7['x'] + this['impulseOff' + "set"], n7['y'])));
        this["copterBody"]["ApplyImpul" + 'se'](new p['RM'](n6, -n5), this["copterBody"]["GetWorldPo" + "int"](new K['RM'](n7['x'] - this["impulseOff" + "set"], n7['y'])));
      } else {
        return qG['call'](this, (0x0, qW['zI'])("BackDrops", "backdrop2"), 0.25, !0x0, 0x5, 0x3, !0x0) || this;
      }
    }
    var n0;
    var n1;
    n1 = qG;
    (n0 = qQ)["prototype"] = Object["create"](n1["prototype"]);
    n0["prototype"]['constructo' + 'r'] = n0;
    qY(n0, n1);
    qQ["prototype"]["createBitm" + 'aps'] = function () {
      if ("ikLJK" === "ikLJK") {
        var n2 = this["_visual"]['b1'];
        this["drawBuildi" + 'ng'](n2, 0x5a, 0x58);
        n2 = this["_visual"]['b2'];
        this["drawBuildi" + 'ng'](n2, 0x28, 0x32, !0x0, 0x9c4);
        n2 = this["_visual"]['b3'];
        this["drawBuildi" + 'ng'](n2, 0x2e, 0x32, !0x0, 0x9c4);
        n2 = this["_visual"]['b4'];
        this["drawBuildi" + 'ng'](n2, 0xf, 0x32, !0x0, 0x9c4);
        this['_visual'] = null;
      } else {
        if (this["ejected"]) {
          this['currentPos' + 'e'] = 0x2;
        } else {
          var n4 = this["frameBody"]["GetAngle"]();
          var n5 = j['cos'](n4) * this["impulseMag" + "nitude"];
          var n6 = P["sin"](n4) * this['impulseMag' + "nitude"];
          var n7 = this["frameBody"]["GetLocalCe" + "nter"]();
          this["frameBody"]["ApplyImpul" + 'se'](new p['RM'](n6, -n5), this["frameBody"]["GetWorldPo" + "int"](new K['RM'](n7['x'] - this["impulseOff" + "set"], n7['y'])));
        }
      }
    };
    return qQ;
  }(qw['j']);
  function qL(qG) {
    var qQ = function (n0) {
      if ("object" != typeof n0 || !n0) {
        return n0;
      }
      var n1 = n0[Symbol["toPrimitiv" + 'e']];
      if (void 0x0 !== n1) {
        var n2 = n1["call"](n0, "string");
        if ("object" != typeof n2) {
          return n2;
        }
        throw new TypeError("@@toPrimit" + 'ive\x20must\x20r' + "eturn a pr" + 'imitive\x20va' + "lue.");
      }
      return String(n0);
    }(qG);
    return 'symbol' == typeof qQ ? qQ : qQ + '';
  }
  function qU(qG, qQ) {


    qU = Object["setPrototy" + 'peOf'] ? Object["setPrototy" + "peOf"]["bind"]() : function (n0, n1) {
      n0["__proto__"] = n1;
      return n0;
    };
    return qU(qG, qQ);
  }
  var qO = function (qG) {

    function qQ(n5, n6) {
      var n7;
      (n7 = qG["call"](this, n5, n6) || this)['tokens'] = 0x0;
      n7["borderThic" + "kness"] = 0xfa;
      n7["skyHeight"] = 0x1388;
      n7["shapeConta" + "ctAdd"] = function (n8) {


        var n9 = n8["shape1"];
        var nq = n9["m_body"];
        var nn = n8["shape2"];
        var nN = nn["m_body"]["m_mass"];
        if (!(n7['contactAdd' + "Buffer"]["get"](n9) || nn["m_isSensor"] || 0x0 != nN && nN < nq["m_mass"])) {
          if ("Yuvii" !== "USiqt") {
            var nf = q3['x5']["b2Dot"](n8["velocity"], n8["normal"]);
            (nf = Math["abs"](nf)) > 0x4 && n7["contactAdd" + "Buffer"]["set"](n9, nf);
          } else {
            try {
              q8["label"] = qI;
              qS["disabled"] = !0x1;
            } catch (nV) {}
          }
        }
      };
      n7["levelData"] = null;
      n7["shapeGuide"] = n5;
      return n7;
    }
    var n0;
    var n1;
    n1 = qG;
    (n0 = qQ)["prototype"] = Object["create"](n1["prototype"]);
    n0["prototype"]["constructo" + 'r'] = n0;
    qU(n0, n1);
    var n2;
    var n3;
    var n4 = qQ['prototype'];
    n4['create'] = function () {
      if ("yrMYg" !== "WGDFf") {
        this["paintBodyV" + "ector"] = new Array();
        this["paintItemV" + 'ector'] = new Array();
        this['actionsVec' + "tor"] = new Array();
        this['actionsToR' + "emove"] = new Array();
        this["singleActi" + "onVector"] = new Array();
        this['keepVector'] = new Array();
        this["triggers"] = new Array();
        this["contactAdd" + "Buffer"] = new Map();
        this["contactAdd" + "Sounds"] = new Map();
        this["createBack" + "Drops"]();
        this["createMovi" + "eClips"]();
        this["createStat" + "icShapes"]();
        this["createDyna" + "micShapes"]();
        this["createSpec" + "ials"]();
        this["createGrou" + 'ps']();
        this["createJoin" + 'ts']();
        this["createTrig" + "gers"]();
        this["createItem" + 's']();
        this["createToke" + "nHUD"]();
      } else {
        V['prototype']['createJoin' + 'ts']["call"](this);
        var n6;
        var n7;
        var n8;
        var n9 = this["session"]["m_world"];
        var nq = h["oneEightyO" + 'verPI'];
        n7 = -0x6e / nq - (n6 = this["upperLeg1B" + "ody"]['GetAngle']() - this["pelvisBody"]["GetAngle"]());
        n8 = -0x5a / nq - n6;
        this["hipJoint1"]['SetLimits'](n7, n8);
        n7 = -0x6e / nq - (n6 = this['upperLeg2B' + "ody"]["GetAngle"]() - this["pelvisBody"]["GetAngle"]());
        n8 = -0x5a / nq - n6;
        this["hipJoint2"]["SetLimits"](n7, n8);
        var nn = new C['Gq']();
        nn["maxMotorTo" + "rque"] = this["maxTorque"];
        var nN = new j['RM']();
        var nf = this["shapeGuide"]['bigWheelSh' + "ape"];
        nN["Set"](this["_startX"] + nf['x'] / this["character_" + "scale"], this["_startY"] + nf['y'] / this["character_" + "scale"]);
        nn["Initialize"](this["chairBody"], this["bigWheelBo" + 'dy'], nN);
        this["bigWheelJo" + "int"] = n9["CreateJoin" + 't'](nn);
        nf = this["shapeGuide"]["smallWheel" + "Shape"];
        nN["Set"](this["_startX"] + nf['x'] / this["character_" + "scale"], this["_startY"] + nf['y'] / this["character_" + "scale"]);
        nn["Initialize"](this["chairBody"], this['smallWheel' + "Body"], nN);
        this["smallWheel" + "Joint"] = n9["CreateJoin" + 't'](nn);
        new P['Vy']()["Initialize"](this["chairBody"], this["pelvisBody"], this["pelvisBody"]["GetPositio" + 'n'](), this["pelvisBody"]["GetPositio" + 'n']());
        nN["Set"](this["chestBody"]["GetPositio" + 'n']()['x'], this["chestBody"]['GetPositio' + 'n']()['y']);
        nn["Initialize"](this["chairBody"], this['chestBody'], nN);
        this["chairChest"] = n9["CreateJoin" + 't'](nn);
        nN["Set"](this["pelvisBody"]['GetPositio' + 'n']()['x'], this["pelvisBody"]["GetPositio" + 'n']()['y']);
        nn["Initialize"](this["chairBody"], this['pelvisBody'], nN);
        this["chairPelvi" + 's'] = n9["CreateJoin" + 't'](nn);
        nN["Set"](this["upperLeg1B" + "ody"]["GetPositio" + 'n']()['x'], this["upperLeg1B" + "ody"]["GetPositio" + 'n']()['y']);
        nn["Initialize"](this["chairBody"], this["upperLeg1B" + "ody"], nN);
        this["chairLeg1"] = n9["CreateJoin" + 't'](nn);
        nN['Set'](this["upperLeg2B" + "ody"]["GetPositio" + 'n']()['x'], this['upperLeg2B' + 'ody']["GetPositio" + 'n']()['y']);
        nn["Initialize"](this["chairBody"], this["upperLeg2B" + "ody"], nN);
        this["chairLeg2"] = n9["CreateJoin" + 't'](nn);
      }
    };
    n4["reset"] = function () {
      this["die"]();
      this["_session"]["containerS" + "prite"]["removeChil" + 'd'](this['background']);
      this["_session"]["containerS" + 'prite']['removeChil' + 'd'](this["characterL" + "ayer"]);
      this['_session']["containerS" + "prite"]["removeChil" + 'd'](this["foreground"]);
      this['background']["destroy"]();
      this["characterL" + "ayer"]["destroy"]();
      this["foreground"]["destroy"]();
      this["tokenField"] && (this['tokenField']["destroy"](), this["tokenField"] = null);
      this["tokens"] = 0x0;
      this["contactAdd" + "Buffer"] = new Map();
      this["contactAdd" + "Sounds"] = new Map();
      this["paintBodyV" + "ector"] = new Array();
      this["paintItemV" + "ector"] = new Array();
      this["actionsVec" + "tor"] = new Array();
      this["actionsToR" + "emove"] = new Array();
      this["singleActi" + "onVector"] = new Array();
      this["keepVector"] = new Array();
      this["triggers"] = new Array();
      this["createMovi" + "eClips"]();
      this["createStat" + "icShapes"]();
      this["createDyna" + 'micShapes']();
      this["createSpec" + 'ials']();
      this["createGrou" + 'ps']();
      this["createJoin" + 'ts']();
      this["createTrig" + 'gers']();
      this["createItem" + 's']();
      this["createToke" + "nHUD"]();
    };
    n4["die"] = function () {
      if ("OifWW" !== "OifWW") {
        this["ready"] = !0x1;
        this["state"] = new qT();
        this["psize"] = this["state"]["getPoolSiz" + 'e']();
        this["pool"] = new qR();
        this["pool"]["length"] = this["psize"];
        this['pptr'] = 0x0;
        for (; this['pptr'] < this["psize"];) {
          var n6 = 0x10000 * q8["random"]();
          this["pool"]["buffer"][this["pptr"]++] = n6 >>> 0x8;
          this['pool']["buffer"][this["pptr"]++] = 0xff & n6;
        }
        this["pptr"] = 0x0;
        this['seed']();
      } else {
        qG["prototype"]["die"]["call"](this);
        this['targetActi' + "onDictiona" + 'ry'] = null;
        this["refTrigger" + "Dictionary"] = null;
        this["triggerDic" + "tionary"] = null;
      }
    };
    n4["destroyRef" + 's'] = function () {
      var n5 = this["shapeGuide"]["getChildBy" + 'Name']("special");
      if (n5) {
        for (var n6 = 0x0; n6 < n5["numChildre" + 'n']; n6++) {
          n5['getChildAt'](n6)["destroy"]();
        }
      }
    };
    n4["createStat" + "icShapes"] = function () {
      this['shapeDicti' + "onary"] = new Map();
      this["spriteDict" + "ionary"] = new Map();
      var n5 = new q3['gv']();
      this["levelBody"] = this["_session"]["m_world"]['CreateBody'](n5);
      var n6 = new q3['m2']();
      var n7 = new q3['_A']();
      var n8 = new q3['m2']();
      var n9 = new q3['m2']();
      n6['friction'] = 0x1;
      n6['restitutio' + 'n'] = 0.1;
      n6["filter"]["categoryBi" + 'ts'] = 0x8;
      n6["filter"]["groupIndex"] = -0xa;
      var nq;
      var nn = new q3['RM']();
      var nN = 0.5 * this["borderThic" + "kness"] / this["m_physScal" + 'e'];
      var nf = (this['borderThic' + "kness"] + 0.5 * (qD['H']["canvasHeig" + 'ht'] + this["skyHeight"])) / this["m_physScal" + 'e'];
      nn["Set"](-nN, 0.5 * (qD['H']["canvasHeig" + 'ht'] - this['skyHeight']) / this["m_physScal" + 'e']);
      n6["SetAsOrien" + "tedBox"](nN, nf, nn, 0x0);
      this["levelBody"]["CreateShap" + 'e'](n6);
      nn["Set"]((qD['H']['canvasWidt' + 'h'] + 0.5 * this["borderThic" + "kness"]) / this["m_physScal" + 'e'], 0.5 * (qD['H']["canvasHeig" + 'ht'] - this["skyHeight"]) / this['m_physScal' + 'e']);
      n6["SetAsOrien" + "tedBox"](nN, nf, nn, 0x0);
      this["levelBody"]["CreateShap" + 'e'](n6);
      nN = (this["borderThic" + "kness"] + 0.5 * qD['H']["canvasWidt" + 'h']) / this["m_physScal" + 'e'];
      nf = 0.5 * this["borderThic" + 'kness'] / this["m_physScal" + 'e'];
      nn["Set"](0.5 * qD['H']["canvasWidt" + 'h'] / this["m_physScal" + 'e'], -(0.5 * this["borderThic" + "kness"] + this['skyHeight']) / this["m_physScal" + 'e']);
      n6["SetAsOrien" + "tedBox"](nN, nf, nn, 0x0);
      this["levelBody"]["CreateShap" + 'e'](n6);
      for (var nT, nV = this["shapeGuide"]["getChildBy" + "Name"]("shapes"), nh = 0x0; nh < nV["numChildre" + 'n']; nh++) {
        var nC = nV["getChildAt"](nh);
        if (nC instanceof qH['HQ']) {
          if ("zkNsL" === 'zkNsL') {
            var nj = nC;
            if (nj["immovable"] && (nT = nj["getFlatSpr" + "ite"](), this["background"]["addChild"](nT), this["spriteDict" + "ionary"]["set"](nC, nT), nj["interactiv" + 'e'])) {
              if ("lirnE" === "hTHpX") {
                var nl = T["parse"](V["stringify"](h));
                nl['wordWrapWi' + "dth"] = C;
                return nl;
              } else {
                nq = nC["rotation"] * Math['PI'] / 0xb4;
                nn["Set"](nC['x'] / this["m_physScal" + 'e'], nC['y'] / this["m_physScal" + 'e']);
                if (nj instanceof qH['RX']) {
                  n6 = new q3['m2']();
                  this["setShapeFi" + "lter"](nj['collision'], nj["immovable"], n6);
                  n6["SetAsOrien" + 'tedBox'](0x32 * nC['scaleX'] / this["m_physScal" + 'e'], 0x32 * nC["scaleY"] / this["m_physScal" + 'e'], nn, nq);
                  var nP = this["levelBody"]["CreateShap" + 'e'](n6);
                } else {
                  if (nj instanceof qH['Wf']) {
                    n7 = new q3['_A']();
                    this["setShapeFi" + "lter"](nj["collision"], nj["immovable"], n7);
                    n7["localPosit" + "ion"]["Set"](nn['x'], nn['y']);
                    n7["radius"] = 0x32 * nC["scaleX"] / this["m_physScal" + 'e'];
                    nP = this["levelBody"]["CreateShap" + 'e'](n7);
                  } else {
                    if (nj instanceof qH['Qu']) {
                      if ("PzwaF" === "JOcLW") {
                        this['writeUnsig' + "nedShort"](nj['Buffer']["byteLength"](qR));
                        this["writeMulti" + "Byte"](qz);
                      } else {
                        n8 = new q3['m2']();
                        this["setShapeFi" + "lter"](nj["collision"], nj["immovable"], n8);
                        n8["vertexCoun" + 't'] = 0x3;
                        nN = 0x32 * nC["scaleX"] / this["m_physScal" + 'e'];
                        nf = 0x64 * nC["scaleY"] / this["m_physScal" + 'e'];
                        n8["vertices"][0x0] = new q3['RM'](0x0, -0x2 * nf);
                        n8["vertices"][0x1] = new q3['RM'](nN, nf);
                        n8["vertices"][0x2] = new q3['RM'](-nN, nf);
                        for (var np = 0x0; np < 0x3; np++) {
                          if ("GWsVH" === "GWsVH") {
                            var nK = n8["vertices"][np];
                            var nm = Math["cos"](nq) * nK['x'] - Math["sin"](nq) * nK['y'];
                            var nI = Math["cos"](nq) * nK['y'] + Math["sin"](nq) * nK['x'];
                            n8["vertices"][np] = new q3['RM'](nn['x'] + nm, nn['y'] + nI);
                          } else {
                            this["ejected"] && (this["currentPos" + 'e'] = 0x1);
                          }
                        }
                        nP = this["levelBody"]["CreateShap" + 'e'](n8);
                      }
                    } else {
                      if (nj instanceof qM['k']) {
                        n9 = new q3['m2']();
                        this["setShapeFi" + "lter"](nj["collision"], nj["immovable"], n9);
                        var nk = nC;
                        var ns = n9["vertexCoun" + 't'] = nk['numVerts'];
                        for (np = 0x0; np < ns; np++) {
                          if ("uWfyE" !== "DhEAK") {
                            var nt = nk["vertVector"][np];
                            var nB = new q3['RM'](nk['scaleX'] * nt['x'] / this["m_physScal" + 'e'], nk['scaleY'] * nt['y'] / this["m_physScal" + 'e']);
                            nm = Math["cos"](nq) * nB['x'] - Math["sin"](nq) * nB['y'];
                            nI = Math["cos"](nq) * nB['y'] + Math['sin'](nq) * nB['x'];
                            n9["vertices"][np] = new q3['RM'](nn['x'] + nm, nn['y'] + nI);
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
                        nP = this["levelBody"]['CreateShap' + 'e'](n9);
                      }
                    }
                  }
                }
                this["shapeDicti" + "onary"]["set"](nC, nP);
              }
            }
          } else {
            for (var nR = 0x0; nR < 0x5; nR++) {
              nP["position"]["Set"](qE / this["m_physScal" + 'e'], ql / this["m_physScal" + 'e']);
              (q3 = this["m_world"]["CreateBody"](n6))["CreateShap" + 'e'](qs);
              nC['SetMassFro' + "mShapes"]();
              0x0 == nf && 0x4 == nR && (this['trackingBo' + 'dy'] = n9);
              n7 += 0xa;
            }
            qB = 0xff;
            qW -= 0xa;
          }
        }
      }
    };
    n4["createDyna" + "micShapes"] = function () {
      if ("Crufo" === 'Crufo') {
        for (var n5, n6 = new q3['RM'](), n7 = this["shapeGuide"]["getChildBy" + "Name"]("shapes"), n8 = 0x0; n8 < n7["numChildre" + 'n']; n8++) {
          if ("rIiJm" === 'GSXci') {
            for (var nR = this['canvas']["shapes"]["numChildre" + 'n']; nR > 0x0; nR--) {
              this["canvas"]['shapes']["getChildAt"](nR - 0x1)['deleteSelf'](this["canvas"]);
            }
            for (var nW = this["canvas"]["joints"]['numChildre' + 'n']; nW > 0x0; nW--) {
              this["canvas"]["joints"]["getChildAt"](nW - 0x1)['deleteSelf'](this["canvas"]);
            }
            for (var nA = this["canvas"]['groups']["numChildre" + 'n']; nA > 0x0; nA--) {
              this["canvas"]["groups"]["getChildAt"](nA - 0x1)["deleteSelf"](this["canvas"]);
            }
            for (var nr = this["canvas"]["special"]["numChildre" + 'n']; nr > 0x0; nr--) {
              this['canvas']["special"]["getChildAt"](nr - 0x1)["deleteSelf"](this["canvas"]);
            }
          } else {
            var n9 = n7["getChildAt"](n8);
            if (n9 instanceof qH['HQ']) {
              if ("znpWs" !== "znpWs") {
                n["prototype"]["reset"]["call"](this);
                this["ejected"] = !0x1;
                this["detached"] = !0x1;
              } else {
                var nq = n9;
                if (!nq["immovable"]) {
                  var nn = nq["getFlatSpr" + "ite"]();
                  this["session"]["levelVersi" + 'on'] >= 1.8 ? this['background']["addChildAt"](nn, n8) : this["background"]["addChild"](nn);
                  this["spriteDict" + "ionary"]['set'](n9, nn);
                  if (nq["interactiv" + 'e']) {
                    n5 = n9["rotation"] * Math['PI'] / 0xb4;
                    n6["Set"](n9['x'] / this["m_physScal" + 'e'], n9['y'] / this["m_physScal" + 'e']);
                    if (n9 instanceof qH['RX']) {
                      var nN = n9;
                      var nf = new q3['gv']();
                      nf["position"]["Set"](n6['x'], n6['y']);
                      nf["angle"] = n5;
                      nf["isSleeping"] = nN["sleeping"];
                      var nT = this["_session"]["m_world"]["CreateBody"](nf);
                      nT["m_userData"] = nn;
                      var nV = new q3['m2']();
                      nV["density"] = nN["density"];
                      this["setShapeFi" + "lter"](nq["collision"], nq['immovable'], nV);
                      nV["SetAsBox"](0x32 * n9["scaleX"] / this["m_physScal" + 'e'], 0x32 * n9['scaleY'] / this["m_physScal" + 'e']);
                      var nh = nT["CreateShap" + 'e'](nV);
                      nT["SetMassFro" + "mShapes"]();
                      this["paintBodyV" + "ector"]["push"](nT);
                      this["shapeDicti" + "onary"]["set"](n9, nh);
                    } else {
                      if (n9 instanceof qH['Wf']) {
                        var nC = n9;
                        var nj = new q3['gv']();
                        nj["position"]["Set"](n6['x'], n6['y']);
                        nj["angle"] = n5;
                        nj["isSleeping"] = nC["sleeping"];
                        (nT = this["_session"]["m_world"]["CreateBody"](nj))["m_userData"] = nn;
                        var nP = new q3['_A']();
                        nP["density"] = nC["density"];
                        this["setShapeFi" + "lter"](nq['collision'], nq["immovable"], nP);
                        nP["localPosit" + "ion"]["Set"](0x0, 0x0);
                        nP["radius"] = 0x32 * n9["scaleX"] / this["m_physScal" + 'e'];
                        nh = nT["CreateShap" + 'e'](nP);
                        nT['SetMassFro' + "mShapes"]();
                        this["paintBodyV" + "ector"]["push"](nT);
                        this["shapeDicti" + 'onary']["set"](n9, nh);
                      } else {
                        if (n9 instanceof qH['Qu']) {
                          var np = n9;
                          var nK = new q3['gv']();
                          nK["isSleeping"] = np['sleeping'];
                          nK["position"]['Set'](n6['x'], n6['y']);
                          nK["angle"] = n5;
                          (nT = this['_session']["m_world"]["CreateBody"](nK))["m_userData"] = nn;
                          var nm = new q3['m2']();
                          nm["density"] = np['density'];
                          this["setShapeFi" + "lter"](nq["collision"], nq["immovable"], nm);
                          nm["vertexCoun" + 't'] = 0x3;
                          var nI = 0x32 * np['scaleX'] / this["m_physScal" + 'e'];
                          var nk = 0x64 * np["scaleY"] / this["m_physScal" + 'e'];
                          nm["vertices"][0x0] = new q3['RM'](0x0, -0x2 * nk);
                          nm["vertices"][0x1] = new q3['RM'](nI, nk);
                          nm["vertices"][0x2] = new q3['RM'](-nI, nk);
                          nh = nT["CreateShap" + 'e'](nm);
                          nT["SetMassFro" + 'mShapes']();
                          this["paintBodyV" + "ector"]["push"](nT);
                          this["shapeDicti" + "onary"]["set"](n9, nh);
                        } else {
                          if (n9 instanceof qM['k']) {
                            var ns = n9;
                            var nt = new q3['gv']();
                            nt['isSleeping'] = ns["sleeping"];
                            nt["position"]["Set"](n6['x'], n6['y']);
                            nt["angle"] = n5;
                            nT = this["_session"]["m_world"]["CreateBody"](nt);
                            var nB = new q3['m2']();
                            nB["density"] = ns["density"];
                            this["setShapeFi" + "lter"](nq["collision"], nq["immovable"], nB);
                            for (var nu = nB["vertexCoun" + 't'] = ns["numVerts"], nl = 0x0; nl < nu; nl++) {
                              var no = ns["vertVector"][nl];
                              nB["vertices"][nl] = new q3['RM'](ns["scaleX"] * no['x'] / this['m_physScal' + 'e'], ns["scaleY"] * no['y'] / this["m_physScal" + 'e']);
                            }
                            nh = nT["CreateShap" + 'e'](nB);
                            nT['SetMassFro' + "mShapes"]();
                            var ni = nT["GetLocalCe" + "nter"]()["Copy"]();
                            ni['x'] = ni['x'] * this["m_physScal" + 'e'];
                            ni['y'] = ni['y'] * this["m_physScal" + 'e'];
                            this["background"]["removeChil" + 'd'](nn);
                            nn = ns["getCentere" + "dSprite"](ni);
                            this["background"]["addChild"](nn);
                            nT["m_userData"] = nn;
                            this["paintBodyV" + "ector"]["push"](nT);
                            this["shapeDicti" + "onary"]["set"](n9, nh);
                            this["spriteDict" + "ionary"]["set"](n9, nn);
                          }
                        }
                      }
                    }
                    this['registerSh' + 'apeSound'](nh, nT);
                  }
                }
              }
            }
          }
        }
      } else {
        if (I["target"] == k['restoreDef' + "aultsButto" + 'n']) {
          for (var nA = 0x0; nA < r['labels']["length"]; nA++) {
            var nr = Z['w'][y["keys"][nA] + ("DefaultCod" + 'e')];
            c['w'][X["keys"][nA] + "Code"] = nr;
            x['w']["sharedObje" + 'ct']["data"]["keyCodes"][w["keys"][nA] + "Code"] = nr;
            qG["inputs"][nA]["keyCode"] = nr;
            a["inputs"][nA]['text'] = Y["keyCodeNam" + 'es']["get"](nr);
          }
          b['w']["sharedObje" + 'ct']["flush"]();
        }
      }
    };
    n4["setShapeFi" + "lter"] = function (n5, n6, n7) {
      n7["friction"] = 0x1;
      n7["restitutio" + 'n'] = 0.1;
      0x2 == n5 ? (n7['filter']['categoryBi' + 'ts'] = 0x8, n7["filter"]['maskBits'] = 0x8, this["_levelVers" + "ion"] > 1.84 && n6 && (n7["filter"]["categoryBi" + 'ts'] = 0x18, n7["filter"]["maskBits"] = 0x38)) : 0x3 == n5 ? this["_levelVers" + "ion"] < 1.85 ? (n7["filter"]['categoryBi' + 'ts'] = 0x1, n7["filter"]["maskBits"] = 0x1, n7["filter"]["groupIndex"] = -0xa, n7["isSensor"] = !0x0) : (n7["filter"]["categoryBi" + 'ts'] = 0x0, n7["filter"]['maskBits'] = 0x0) : 0x4 == n5 ? (n7["filter"]["categoryBi" + 'ts'] = 0x8, n7["filter"]["groupIndex"] = -0x141, this["_levelVers" + 'ion'] > 1.84 && n6 && (n7["filter"]["categoryBi" + 'ts'] = 0x18)) : 0x5 == n5 ? (n7["filter"]["categoryBi" + 'ts'] = 0x10, n7["filter"]["maskBits"] = 0x10, n7['filter']["groupIndex"] = -0x142, this["_levelVers" + "ion"] > 1.84 && n6 && (n7["filter"]["maskBits"] = 0x30, n7["filter"]['groupIndex'] = 0x0)) : 0x6 == n5 ? this["_levelVers" + "ion"] > 1.84 ? (n7["filter"]["categoryBi" + 'ts'] = n6 ? 0x30 : 0x20, n7["filter"]["maskBits"] = 0x30) : (n7["filter"]["categoryBi" + 'ts'] = 0x10, n7['filter']["maskBits"] = 0x10) : 0x7 == n5 ? (n7["filter"]["categoryBi" + 'ts'] = 0xf, n7["filter"]['maskBits'] = 0xf00) : n6 ? (n7["filter"]["categoryBi" + 'ts'] = 0x18, n7['filter']["groupIndex"] = -0xa) : n7["filter"]['categoryBi' + 'ts'] = 0x8;
    };
    n4["createSpec" + "ials"] = function () {
      var n5 = this["shapeGuide"]["getChildBy" + "Name"]('special');
      this['specialDic' + "tionary"] = new Map();
      for (var n6 = 0x0; n6 < n5["numChildre" + 'n']; n6++) {
        var n7 = n5["getChildAt"](n6);
        var n8 = n7["type"]['substring'](0x0, n7["type"]["length"] - 0x3);
        var n9 = new ((0x0, qc['k'])(n8))(n7);
        n9 instanceof qx['o'] && this["tokens"]++;
        this["specialDic" + "tionary"]["set"](n7, n9);
      }
      this["totalToken" + 's'] = this['tokens'];
    };
    n4["createGrou" + 'ps'] = function () {

      var n5 = this["shapeGuide"]["getChildBy" + "Name"]("groups");
      this['groupDicti' + "onary"] = new Map();
      this["vehicleDic" + "tionary"] = new Map();
      for (var n6 = Math['PI'] / 0xb4, n7 = 0x0; n7 < n5["numChildre" + 'n']; n7++) {
        var n8 = n5["getChildAt"](n7);
        var n9 = n8['rotation'] * n6;
        var nq = new q3['RM'](n8['x'] / this["m_physScal" + 'e'], n8['y'] / this["m_physScal" + 'e']);
        if (n8["shapesUsed"] > 0x0) {
          var nn = new q3['gv']();
          nn['position']["Set"](nq['x'], nq['y']);
          nn["angle"] = n9;
          nn["isSleeping"] = n8["sleeping"];
          nn["fixedRotat" + "ion"] = n8["fixedRotat" + "ion"];
          var nN = this['_session']["m_world"]["CreateBody"](nn);
          var nf = new qi['kx']();
          var nT = new qi['kx']();
          nf["addChild"](nT);
          nN["m_userData"] = nf;
          nf["alpha"] = 0.01 * n8["opacity"];
          n8["foreground"] ? this["foreground"]["addChild"](nf) : this["background"]["addChild"](nf);
          if (n8 instanceof q9['uH']) {
            var nV = new q8(n8, nN);
            this["vehicleDic" + "tionary"]["set"](n8, nV);
          }
          for (var nh = 0x0; nh < n8["shapeConta" + "iner"]["numChildre" + 'n']; nh++) {
            var nC = n8["shapeConta" + "iner"]['getChildAt'](nh);
            if (nC["interactiv" + 'e']) {
              nq["Set"]((nC['x'] + n8["offset"]['x']) / this["m_physScal" + 'e'], (nC['y'] + n8["offset"]['y']) / this["m_physScal" + 'e']);
              n9 = nC["rotation"] * n6;
              var nj = this["_levelVers" + "ion"] > 1.84 ? n8["immovable"] : nC["immovable"];
              if (nC instanceof qH['RX']) {
                if ("SSUNy" === "SSUNy") {
                  var nP = new q3['m2']();
                  nP["density"] = nC["density"];
                  this["setShapeFi" + "lter"](nC["collision"], nj, nP);
                  nP["SetAsOrien" + "tedBox"](0x32 * nC["scaleX"] / this["m_physScal" + 'e'], 0x32 * nC["scaleY"] / this["m_physScal" + 'e'], nq, n9);
                  var np = nN['CreateShap' + 'e'](nP);
                } else {
                  for (var nM = 0x0; nM < nz["length"]; nM++) {
                    var nH = nf[nM];
                    nH["enumerable"] = nH["enumerable"] || !0x1;
                    nH["configurab" + 'le'] = !0x0;
                    "value" in nH && (nH["writable"] = !0x0);
                    qc["defineProp" + "erty"](nh, nE(nH["key"]), nH);
                  }
                }
              } else {
                if (nC instanceof qH['Wf']) {
                  if ("qehgl" === "dpeTL") {
                    h = C['setPrototy' + "peOf"] ? j["setPrototy" + "peOf"]["bind"]() : function (nH, nb) {
                      nH["__proto__"] = nb;
                      return nH;
                    };
                    return P(p, K);
                  } else {
                    var nK = new q3['_A']();
                    nK["density"] = nC["density"];
                    this['setShapeFi' + "lter"](nC["collision"], nj, nK);
                    nK['localPosit' + "ion"]["Set"](nq['x'], nq['y']);
                    nK["radius"] = 0x32 * nC["scaleX"] / this["m_physScal" + 'e'];
                    np = nN["CreateShap" + 'e'](nK);
                  }
                } else {
                  if (nC instanceof qH['Qu']) {
                    if ("KJYEW" !== "rRBil") {
                      var nm = new q3['m2']();
                      nm['density'] = nC["density"];
                      this['setShapeFi' + "lter"](nC["collision"], nj, nm);
                      nm["vertexCoun" + 't'] = 0x3;
                      var nI = 0x32 * nC['scaleX'] / this["m_physScal" + 'e'];
                      var nk = 0x64 * nC["scaleY"] / this["m_physScal" + 'e'];
                      nm["vertices"][0x0] = new q3['RM'](0x0, -0x2 * nk);
                      nm["vertices"][0x1] = new q3['RM'](nI, nk);
                      nm["vertices"][0x2] = new q3['RM'](-nI, nk);
                      for (var ns = 0x0; ns < 0x3; ns++) {
                        var nt = nm['vertices'][ns];
                        var nB = Math['cos'](n9) * nt['x'] - Math["sin"](n9) * nt['y'];
                        var nu = Math["cos"](n9) * nt['y'] + Math['sin'](n9) * nt['x'];
                        nm["vertices"][ns] = new q3['RM'](nq['x'] + nB, nq['y'] + nu);
                      }
                      np = nN["CreateShap" + 'e'](nm);
                    } else {
                      if (!(ng instanceof nl['Q'])) {
                        throw new nd("what the f" + "uck is thi" + "s target");
                      }
                      var nb = this["triggerDic" + "tionary"]["get"](nI);
                      var nZ = qe["triggerAct" + "ions"]["get"](nC);
                      nn = qZ["isArray"](nZ) ? nZ[0x0] : nZ;
                      ni = nm["triggerAct" + "ionList"]['indexOf'](n5);
                      if (nq = qb["triggerAct" + "ionListPro" + 'perties'][nj]) {
                        nB = [];
                        qM = 0x0;
                        for (; qi < nD["length"]; qw++) {
                          q0 = q1[q2];
                          q3 = q4["keyedPrope" + "rtyObject"][q5];
                          q6["push"](q7["get"](q8));
                        }
                      }
                      q9["addTargetA" + "ctionTrigg" + 'er'](qq, qn, nb, qN, qf);
                    }
                  } else {
                    if (!(nC instanceof qM['k'])) {
                      throw new Error("shape isn'" + "t a define" + 'd\x20type\x20');
                    }
                    var nl = new q3['m2']();
                    nl["density"] = nC['density'];
                    this["setShapeFi" + "lter"](nC["collision"], nj, nl);
                    var no = nC;
                    var ni = nl["vertexCoun" + 't'] = no["numVerts"];
                    for (ns = 0x0; ns < ni; ns++) {
                      var nE = no['vertVector'][ns];
                      var nR = new q3['RM'](no["scaleX"] * nE['x'] / this["m_physScal" + 'e'], no['scaleY'] * nE['y'] / this["m_physScal" + 'e']);
                      nB = Math["cos"](n9) * nR['x'] - Math["sin"](n9) * nR['y'];
                      nu = Math["cos"](n9) * nR['y'] + Math["sin"](n9) * nR['x'];
                      nl["vertices"][ns] = new q3['RM'](nq['x'] + nB, nq['y'] + nu);
                    }
                    np = nN["CreateShap" + 'e'](nl);
                  }
                }
              }
              np["SetMateria" + 'l'](0x8);
              nC["vehicleHan" + "dle"] && nV && nV['addHandle'](np);
            }
            var nW = nC["getFlatSpr" + "ite"]();
            nW['x'] += n8['offset']['x'];
            nW['y'] += n8["offset"]['y'];
            nT["addChild"](nW);
          }
          for (nh = 0x0; nh < n8["specialCon" + "tainer"]["numChildre" + 'n']; nh++) {
            if ("VWAGR" === "VWAGR") {
              var nA = n8["specialCon" + "tainer"]["getChildAt"](nh);
              var nr = nA["type"]["substring"](0x0, nA["type"]["length"] - 0x3);
              var nJ = new ((0x0, qc['k'])(nr))(nA, nN, n8["offset"]);
              var nD = nJ["groupDispl" + 'ayObject'];
              nD['x'] += n8["offset"]['x'];
              nD['y'] += n8["offset"]['y'];
              nT['addChild'](nD);
              nJ instanceof qX['_'] && nV && nV["checkAddSp" + "ecial"](nJ);
            } else {
              return this["_iteration"];
            }
          }
          nN["SetMassFro" + "mShapes"]();
          var ng = nN["GetLocalCe" + "nter"]();
          nT['x'] = -ng['x'] * this["m_physScal" + 'e'];
          nT['y'] = -ng['y'] * this["m_physScal" + 'e'];
          this["paintBodyV" + 'ector']["push"](nN);
          this["groupDicti" + "onary"]["set"](n8, nN);
          nV && (nV['setShitUp'](), nV = null);
          if (n8["immovable"] && nN['m_mass'] > 0x0) {
            if ('DfmbV' !== "DPVlS") {
              var nS = nN["GetWorldCe" + "nter"]();
              nN["m_userData"]['x'] = nS['x'] * this["m_physScal" + 'e'];
              nN["m_userData"]['y'] = nS['y'] * this['m_physScal' + 'e'];
              nN["m_userData"]["rotation"] = nN["GetAngle"]() * qQ["oneEightyO" + "verPI"] % 0x168;
              var nd = new q3['Pp']();
              nd["center"] = new q3['RM']();
              nd['mass'] = 0x0;
              nd['I'] = 0x0;
              nN["SetMass"](nd);
              nN['SetLinearV' + "elocity"](new q3['RM']());
              nN["SetAngular" + "Velocity"](0x0);
              this['removeFrom' + 'PaintBodyV' + "ector"](nN);
            } else {
              return this["length"] - this["position"];
            }
          }
        } else {
          nf = new qi['kx']();
          nT = new qi['kx']();
          nf["addChild"](nT);
          nf["alpha"] = 0.01 * n8["opacity"];
          n8['foreground'] ? this['foreground']['addChild'](nf) : this["background"]["addChild"](nf);
          nh = 0x0;
          for (; nh < n8["shapeConta" + "iner"]["numChildre" + 'n']; nh++) {
            (nW = (nC = n8["shapeConta" + 'iner']['getChildAt'](nh))["getFlatSpr" + "ite"]())['x'] += n8["offset"]['x'];
            nW['y'] += n8["offset"]['y'];
            nT["addChild"](nW);
          }
          for (nh = 0x0; nh < n8["specialCon" + "tainer"]["numChildre" + 'n']; nh++) {
            var nz = (nA = n8['specialCon' + "tainer"]["getChildAt"](nh))["type"]["substring"](0x0, nA["type"]["length"] - 0x3);
            (nD = (nJ = new ((0x0, qc['k'])(nz))(nA, null, n8["offset"]))["groupDispl" + "ayObject"])['x'] += n8["offset"]['x'];
            nD['y'] += n8['offset']['y'];
            nT["addChild"](nD);
          }
          nf['x'] = n8['x'];
          nf['y'] = n8['y'];
          nf['rotation'] = n8["rotation"];
        }
        this["spriteDict" + "ionary"]["set"](n8, nf);
      }
    };
    n4["createJoin" + 'ts'] = function () {

      this["jointDicti" + "onary"] = new Map();
      for (var n5, n6, n7, n8, n9 = this["shapeGuide"]["getChildBy" + "Name"]("joints"), nq = null, nn = 0x0; nn < n9["numChildre" + 'n']; nn++) {
        if ("rKRkG" !== "rKRkG") {
          var nk = qz[q8];
          nk['enumerable'] = nk["enumerable"] || !0x1;
          nk["configurab" + 'le'] = !0x0;
          "value" in nk && (nk["writable"] = !0x0);
          qI["defineProp" + 'erty'](qS, qA(nk['key']), nk);
        } else {
          var nN = n9["getChildAt"](nn);
          if (nN instanceof qS['a']) {
            var nf = nN;
            var nT = new q3['Gq']();
            var nV = new q3['RM']();
            nV["Set"](nf['x'] / this["m_physScal" + 'e'], nf['y'] / this["m_physScal" + 'e']);
            nf["body1"] ? nf["body1"] instanceof qb['_'] ? (n5 = (nC = this["specialDic" + "tionary"]["get"](nf['body1']))["getJointBo" + 'dy'](nV), nC instanceof qu['S3'] && (nq = nC)) : nf["body1"] instanceof qg['D'] ? (n5 = this["groupDicti" + "onary"]["get"](nf["body1"]), this['vehicleDic' + "tionary"]["get"](nf['body1']) && (n7 = this["vehicleDic" + "tionary"]["get"](nf["body1"]), nf["body2"] && ((np = nf["body2"]) instanceof qb['_'] ? n7["checkAddSp" + "ecial"](this["specialDic" + "tionary"]["get"](np)) : np instanceof q9['uH'] && n7["checkAddVe" + "hicle"](this["vehicleDic" + 'tionary']['get'](np))))) : n5 = this["shapeDicti" + 'onary']["get"](nf['body1'])["GetBody"]() : n5 = this["levelBody"];
            nf["body2"] ? nf['body2'] instanceof qb['_'] ? (n6 = (nC = this["specialDic" + "tionary"]["get"](nf["body2"]))["getJointBo" + 'dy'](nV), nC instanceof qu['S3'] && (nq = nC)) : nf["body2"] instanceof qg['D'] ? (n6 = this["groupDicti" + 'onary']["get"](nf['body2']), this["vehicleDic" + "tionary"]["get"](nf["body2"]) && (n8 = this['vehicleDic' + "tionary"]["get"](nf["body2"]), nf["body1"] && ((np = nf["body1"]) instanceof qb['_'] ? n8["checkAddSp" + "ecial"](this["specialDic" + 'tionary']["get"](np)) : np instanceof q9['uH'] && n8["checkAddVe" + "hicle"](this['vehicleDic' + "tionary"]["get"](np))))) : n6 = this["shapeDicti" + 'onary']["get"](nf["body2"])["GetBody"]() : n6 = this["levelBody"];
            nT["Initialize"](n5, n6, nV);
            nf['limit'] && (nT["enableLimi" + 't'] = !0x0, nT["upperAngle"] = nf["upperAngle"] * Math['PI'] / 0xb4, nT['lowerAngle'] = nf["lowerAngle"] * Math['PI'] / 0xb4);
            nT["maxMotorTo" + "rque"] = 0x32;
            nf["motor"] && (nT["enableMoto" + 'r'] = !0x0, nT['maxMotorTo' + "rque"] = nf["torque"], nT["motorSpeed"] = nf["speed"]);
            this["_levelVers" + "ion"] > 1.84 && (nT['upperAngle'] = nf["upperAngle"] * Math['PI'] / 0xb4, nT["lowerAngle"] = nf['lowerAngle'] * Math['PI'] / 0xb4, nT["maxMotorTo" + "rque"] = nf["torque"], nT["motorSpeed"] = nf["speed"]);
            nf['collideSel' + 'f'] && (nT["collideCon" + 'nected'] = !0x0);
            var nh = this["_session"]["m_world"]["CreateJoin" + 't'](nT);
            n7 && nf['vehicleCon' + "trolled"] && n7["addJoint"](nh);
            n8 && nf["vehicleCon" + "trolled"] && n8["addJoint"](nh);
            nq && nq["addUserJoi" + 'nt'](nh);
            n7 = n8 = null;
            nq = null;
            this['jointDicti' + 'onary']["set"](nN, nh);
          } else {
            if (nN instanceof qd['N']) {
              if ("EdPqf" === "EdPqf") {
                var nC;
                var nj = nN;
                var nP = new q3['iE']();
                (nV = new q3['RM']())['Set'](nj['x'] / this["m_physScal" + 'e'], nj['y'] / this["m_physScal" + 'e']);
                if (nj["body1"]) {
                  if (nj['body1'] instanceof qb['_']) {
                    n5 = (nC = this["specialDic" + "tionary"]["get"](nj['body1']))["getJointBo" + 'dy'](nV);
                    nC instanceof qu['S3'] && (nq = nC);
                  } else {
                    if (nj["body1"] instanceof qg['D']) {
                      var np;
                      n5 = this['groupDicti' + "onary"]["get"](nj["body1"]);
                      this["vehicleDic" + "tionary"]["get"](nj['body1']) && (n7 = this["vehicleDic" + "tionary"]["get"](nj['body1']), nj["body2"] && ((np = nj["body2"]) instanceof qb['_'] ? n7["checkAddSp" + "ecial"](this["specialDic" + "tionary"]["get"](np)) : np instanceof q9['uH'] && n7["checkAddVe" + "hicle"](this["vehicleDic" + "tionary"]["get"](np))));
                    } else {
                      n5 = this["shapeDicti" + 'onary']["get"](nj["body1"])['GetBody']();
                    }
                  }
                } else {
                  n5 = this['levelBody'];
                }
                nj["body2"] ? nj["body2"] instanceof qb['_'] ? (n6 = (nC = this["specialDic" + 'tionary']["get"](nj["body2"]))["getJointBo" + 'dy'](nV), nC instanceof qu['S3'] && (nq = nC)) : nj["body2"] instanceof qg['D'] ? (n6 = this['groupDicti' + "onary"]["get"](nj["body2"]), this["vehicleDic" + 'tionary']["get"](nj["body2"]) && (n8 = this["vehicleDic" + "tionary"]["get"](nj["body2"]), nj['body1'] && ((np = nj["body1"]) instanceof qb['_'] ? n8["checkAddSp" + "ecial"](this['specialDic' + "tionary"]["get"](np)) : np instanceof q9['uH'] && n8["checkAddVe" + "hicle"](this["vehicleDic" + "tionary"]['get'](np))))) : n6 = this["shapeDicti" + "onary"]["get"](nj['body2'])["GetBody"]() : n6 = this["levelBody"];
                var nK = new q3['RM'](Math["cos"](nj["axisAngle"] * qQ["PIOverOneE" + "ighty"]), Math["sin"](nj["axisAngle"] * qQ["PIOverOneE" + 'ighty']));
                nP["Initialize"](n5, n6, nV, nK);
                nj["limit"] && (nP["enableLimi" + 't'] = !0x0);
                nP["upperTrans" + "lation"] = nj["upperLimit"] / this["m_physScal" + 'e'];
                nP['lowerTrans' + "lation"] = nj["lowerLimit"] / this["m_physScal" + 'e'];
                nj["motor"] && (nP["enableMoto" + 'r'] = !0x0);
                nP["maxMotorFo" + "rce"] = nj["force"];
                nP["motorSpeed"] = nj["speed"];
                nj["collideSel" + 'f'] && (nP["collideCon" + "nected"] = !0x0);
                var nm = this["_session"]["m_world"]['CreateJoin' + 't'](nP);
                n7 && nj["vehicleCon" + "trolled"] && n7["addJoint"](nm);
                n8 && nj["vehicleCon" + "trolled"] && n8["addJoint"](nm);
                nq && nq["addUserJoi" + 'nt'](nm);
                n7 = n8 = null;
                nq = null;
                this["jointDicti" + "onary"]['set'](nN, nm);
              } else {
                nn = qI["setPrototy" + "peOf"] ? qS["setPrototy" + "peOf"]["bind"]() : function (ns, nt) {
                  ns["__proto__"] = nt;
                  return ns;
                };
                return qA(nT, qc);
              }
            }
          }
        }
      }
    };
    n4["createTrig" + "gers"] = function () {

      this["targetActi" + "onDictiona" + 'ry'] = new Map();
      this['refTrigger' + "Dictionary"] = new Map();
      this["triggerDic" + "tionary"] = new Map();
      for (var n5 = this["shapeGuide"]["getChildBy" + 'Name']("triggers"), n6 = 0x0; n6 < n5["numChildre" + 'n']; n6++) {
        var n7 = n5["getChildAt"](n6);
        var n8 = new qJ(n7, n6);
        this["triggers"]["push"](n8);
        this["triggerDic" + "tionary"]["set"](n7, n8);
      }
      for (n6 = 0x0; n6 < n5["numChildre" + 'n']; n6++) {
        if ("xwygC" === "xwygC") {
          n7 = n5['getChildAt'](n6);
          n8 = this['triggerDic' + "tionary"]["get"](n7);
          if (0x1 == n7["typeIndex"]) {
            for (var n9 = n7["targets"], nq = n9["length"], nn = 0x0; nn < nq; nn++) {
              var nN = n9[nn];
              if (nN instanceof qH['HQ']) {
                for (var nf = this["shapeDicti" + "onary"]["get"](nN), nT = this["spriteDict" + "ionary"]["get"](nN), nV = nN["triggerAct" + "ions"]["get"](n7), nh = nV["length"], nC = 0x0; nC < nh; nC++) {
                  if ("cxdnI" !== "cxdnI") {
                    var nr = this["strapChest" + "1Joints"][0x0];
                    var nJ = n["abs"](nr["m_impulse"]);
                    nJ > 0.4 && this["breakStrap"](this["elf1"]);
                  } else {
                    var nj = nV[nC];
                    var nP = nN["triggerAct" + "ionList"]["indexOf"](nj);
                    var np = nN["triggerAct" + "ionListPro" + 'perties'][nP];
                    var nK = null;
                    if (np) {
                      if ("LAOuV" !== "LAOuV") {
                        f["__proto__"] = T;
                        return V;
                      } else {
                        nK = [];
                        for (var nm = 0x0; nm < np["length"]; nm++) {
                          var nI = np[nm];
                          var nk = nN["keyedPrope" + "rtyObject"][nI];
                          nK["push"](nk["get"](n7)[nC]);
                        }
                      }
                    }
                    var ns = n8["addTargetA" + "ctionShape"](nN, nf, nT, nj, nK);
                    if (this["targetActi" + "onDictiona" + 'ry']["get"](nN)) {
                      var nt = this["targetActi" + "onDictiona" + 'ry']["get"](nN);
                    } else {
                      nt = new Array();
                      this["targetActi" + "onDictiona" + 'ry']["set"](nN, nt);
                    }
                    nt["push"](ns);
                  }
                }
                if (this["refTrigger" + "Dictionary"]["get"](nN)) {
                  var nB = this["refTrigger" + "Dictionary"]["get"](nN);
                } else {
                  nB = new Array();
                  this["refTrigger" + "Dictionary"]["set"](nN, nB);
                }
                nB["push"](n8);
              } else {
                if (nN instanceof qb['_']) {
                  if ("DevXw" === "XlXjG") {
                    return N['id'] == f;
                  } else {
                    var nu = this["specialDic" + "tionary"]["get"](nN);
                    nj = void 0x0;
                    nK = null;
                    if (nN["triggerAct" + "ionList"]) {
                      nh = (nV = nN['triggerAct' + "ions"]['get'](n7))["length"];
                      nC = 0x0;
                      for (; nC < nh; nC++) {
                        if ("rwocf" === "rwocf") {
                          nj = nV[nC];
                          nP = nN["triggerAct" + "ionList"]["indexOf"](nj);
                          if (np = nN["triggerAct" + "ionListPro" + "perties"][nP]) {
                            nK = [];
                            nm = 0x0;
                            for (; nm < np["length"]; nm++) {
                              nI = np[nm];
                              nk = nN['keyedPrope' + "rtyObject"][nI];
                              nK["push"](nk["get"](n7)[nC]);
                            }
                          }
                          n8['addTargetI' + "temSpecial"](nu, nN, nj, nK);
                        } else {
                          var ng = k["value"];
                          var nS = f["target"];
                          if (0x1b != ng && 0x9 != ng) {
                            for (var nd, nz = D["inputs"]["indexOf"](nS), nF = !0x0, nM = 0x0; nM < g["inputs"]['length']; nM++) {
                              if (nM != nz) {
                                var nH = X["inputs"][nM];
                                ng == nH["keyCode"] ? (nH["highlight"](!0x0), nF = !0x1, nd = nM) : nH["clearHighl" + "ight"]();
                              }
                            }
                            nF ? (nS["text"] = d["keyCodeNam" + 'es']["get"](ng), z['w'][F["keys"][nz] + "Code"] = ng, M['w']["sharedObje" + 'ct']["data"]["keyCodes"][H["keys"][nz] + "Code"] = ng, b['w']["sharedObje" + 'ct']["flush"]()) : Z["statusText"]["text"] = 'The\x20\x27' + y["keyCodeNam" + 'es']["get"](ng) + ("' is assoc" + "iated with" + '\x20\x27') + c["labels"][nd] + ('\x27.\x20Please\x20' + "press anot" + "her key.");
                          } else {
                            nS["text"] = nS["lastInput"];
                          }
                        }
                      }
                    } else {
                      n8['addTargetI' + "temSpecial"](nu, nN, nj, nK);
                    }
                    nu["prepareFor" + "Trigger"]();
                  }
                } else {
                  if (nN instanceof qg['D']) {
                    if ('epzqz' === "epzqz") {
                      var nl = this["groupDicti" + "onary"]["get"](nN);
                      nT = this["spriteDict" + 'ionary']["get"](nN);
                      nh = (nV = nN["triggerAct" + "ions"]["get"](n7))["length"];
                      nC = 0x0;
                      for (; nC < nh; nC++) {
                        nj = nV[nC];
                        nP = nN["triggerAct" + 'ionList']["indexOf"](nj);
                        if (np = nN["triggerAct" + "ionListPro" + "perties"][nP]) {
                          nK = [];
                          nm = 0x0;
                          for (; nm < np["length"]; nm++) {
                            nI = np[nm];
                            nk = nN["keyedPrope" + 'rtyObject'][nI];
                            nK["push"](nk["get"](n7)[nC]);
                          }
                        }
                        var no = n8["addTargetA" + "ctionGroup"](nN, nl, nT, nj, nK);
                      }
                      this["targetActi" + "onDictiona" + 'ry']["get"](nN) ? nt = this["targetActi" + "onDictiona" + 'ry']["get"](nN) : (nt = new Array(), this["targetActi" + "onDictiona" + 'ry']["set"](nN, nt));
                      nt["push"](no);
                    } else {
                      var nS = qR['@v' + qz];
                      nf[nu] = nS;
                    }
                  } else {
                    if (nN instanceof qz['S']) {
                      if (nN instanceof qS['a']) {
                        if ("euybS" !== "euybS") {
                          var nd = function (nz) {
                            if ("object" != typeof nz || !nz) {
                              return nz;
                            }
                            var nF = nz[nd["toPrimitiv" + 'e']];
                            if (void 0x0 !== nF) {
                              var nM = nF["call"](nz, "string");
                              if ("object" != typeof nM) {
                                return nM;
                              }
                              throw new qc("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
                            }
                            return nC(nz);
                          }(nu);
                          return "symbol" == typeof nd ? nd : nd + '';
                        } else {
                          var ni = this["jointDicti" + "onary"]["get"](nN);
                          nh = (nV = nN["triggerAct" + "ions"]["get"](n7))["length"];
                          nC = 0x0;
                          for (; nC < nh; nC++) {
                            nj = nV[nC];
                            nP = nN['triggerAct' + "ionList"]["indexOf"](nj);
                            if (np = nN["triggerAct" + "ionListPro" + "perties"][nP]) {
                              nK = [];
                              nm = 0x0;
                              for (; nm < np['length']; nm++) {
                                nI = np[nm];
                                nk = nN["keyedPrope" + "rtyObject"][nI];
                                nK["push"](nk["get"](n7)[nC]);
                              }
                            }
                            n8["addTargetA" + "ctionRevJo" + "int"](nN, ni, nj, nK);
                          }
                        }
                      } else {
                        if (nN instanceof qd['N']) {
                          var nE = this["jointDicti" + "onary"]["get"](nN);
                          nh = (nV = nN["triggerAct" + "ions"]["get"](n7))["length"];
                          nC = 0x0;
                          for (; nC < nh; nC++) {
                            nj = nV[nC];
                            nP = nN["triggerAct" + "ionList"]["indexOf"](nj);
                            if (np = nN["triggerAct" + "ionListPro" + "perties"][nP]) {
                              nK = [];
                              nm = 0x0;
                              for (; nm < np["length"]; nm++) {
                                nI = np[nm];
                                nk = nN["keyedPrope" + "rtyObject"][nI];
                                nK["push"](nk["get"](n7)[nC]);
                              }
                            }
                            n8["addTargetA" + "ctionPrisJ" + "oint"](nN, nE, nj, nK);
                          }
                        }
                      }
                    } else {
                      if (!(nN instanceof qF['Q'])) {
                        throw new Error("what the f" + "uck is thi" + "s target");
                      }
                      var nR = this["triggerDic" + "tionary"]["get"](nN);
                      var nW = nN["triggerAct" + "ions"]["get"](n7);
                      nj = Array['isArray'](nW) ? nW[0x0] : nW;
                      nP = nN["triggerAct" + "ionList"]["indexOf"](nj);
                      if (np = nN["triggerAct" + "ionListPro" + "perties"][nP]) {
                        nK = [];
                        nm = 0x0;
                        for (; nm < np["length"]; nm++) {
                          nI = np[nm];
                          nk = nN["keyedPrope" + "rtyObject"][nI];
                          nK["push"](nk['get'](n7));
                        }
                      }
                      n8['addTargetA' + "ctionTrigg" + 'er'](nN, n8, nR, nj, nK);
                    }
                  }
                }
              }
            }
          }
          if (0x4 == n7["triggeredB" + 'y']) {
            nq = (n9 = n7["targets"])["length"];
            nn = 0x0;
            for (; nn < nq; nn++) {
              if ((nN = n9[nn]) instanceof qH['HQ']) {
                (nf = this["shapeDicti" + "onary"]["get"](nN)) && (nl = nf["GetBody"]())["m_mass"] > 0x0 && 0x0 == nf["m_isSensor"] && n8["addActivat" + "ionBody"]([nl]);
              } else {
                if (nN instanceof qb['_']) {
                  nu = this["specialDic" + "tionary"]["get"](nN);
                  n8['addActivat' + "ionBody"](nu['bodyList']);
                } else {
                  if (nN instanceof qg['D']) {
                    (nl = this["groupDicti" + "onary"]["get"](nN)) && n8["addActivat" + "ionBody"]([nl]);
                  } else {
                    if (nN instanceof qz['S']) ;else {
                      if (!(nN instanceof qF['Q'])) {
                        throw new Error("what the f" + "uck is thi" + "s target");
                      }
                    }
                  }
                }
              }
            }
          }
          n7["startDisab" + "led"] && (n8["disabled"] = !0x0);
        } else {
          var nz = qz[q8];
          nz["enumerable"] = nz["enumerable"] || !0x1;
          nz["configurab" + 'le'] = !0x0;
          "value" in nz && (nz['writable'] = !0x0);
          qI["defineProp" + "erty"](qS, qA(nz["key"]), nz);
        }
      }
      this["shapeDicti" + "onary"] = null;
      this["spriteDict" + "ionary"] = null;
      this["specialDic" + "tionary"] = null;
      this["groupDicti" + "onary"] = null;
      this["vehicleDic" + "tionary"] = null;
    };
    n4['createMovi' + "eClips"] = function () {
      this["foreground"] = new qi['kx']();
      this["characterL" + "ayer"] = new qi['kx']();
      this["background"] = new qi['kx']();
      0x0 == q4['w']["bdIndex"] && (this["background"]["graphics"]["beginFill"](q4['w']["bdColor"], 0x1), this['background']["graphics"]["drawRect"](0x0, 0x0, 0x4e20, 0x2710), this["background"]["graphics"]["endFill"]());
      this['_session']["containerS" + "prite"]["addChildAt"](this["characterL" + "ayer"], 0x0);
      this['_session']["containerS" + 'prite']["addChildAt"](this["background"], 0x0);
      this["_session"]["containerS" + "prite"]["addChild"](this["foreground"]);
      this['_session']["particleCo" + "ntroller"]["placeBlood" + "Bitmap"]();
    };
    n4['createBack' + "Drops"] = function () {
      if ("oEjEB" === "OWYcZ") {
        var n9 = qR["getChildAt"](qz);
        var nq = n9["type"]["substring"](0x0, n9["type"]["length"] - 0x3);
        var nn = new ((0x0, q8['k'])(nq))(n9);
        nn instanceof qI['o'] && this["tokens"]++;
        this['specialDic' + "tionary"]["set"](n9, nn);
      } else {
        this['backDrops'] = new Array();
        switch (q4['w']["bdIndex"]) {
          case 0x0:
          default:
            break;
          case 0x1:
            var n5 = new qi['j7']((0x0, qW['zI'])("BackDrops", "green_back" + "drop1"));
            n5["convertChi" + 'ldren'](n5["_pixiSprit" + 'e']);
            var n6 = new qw['j'](n5, 0.1, !0x0, 0x3, 0x3);
            this["_session"]["addChildAt"](n6, 0x0);
            this["backDrops"]["push"](n6);
            (n5 = new qi['j7']((0x0, qW['zI'])("BackDrops", 'green_back' + "drop2")))['convertChi' + "ldren"](n5["_pixiSprit" + 'e']);
            n6 = new qw['j'](n5, 0.05, !0x0, 0x6);
            this["_session"]['addChildAt'](n6, 0x0);
            this["backDrops"]["push"](n6);
            (n5 = new qi['j7']((0x0, qW['zI'])('BackDrops', 'green_back' + 'drop3')))["convertChi" + 'ldren'](n5["_pixiSprit" + 'e']);
            n6 = new qw['j'](n5, 0.01, !0x0, 0x7);
            this["_session"]["addChildAt"](n6, 0x0);
            this['backDrops']["push"](n6);
            (n5 = new qi['j7']((0x0, qW['zI'])("BackDrops", "green_sky_" + 'backdrop')))["convertChi" + "ldren"](n5["_pixiSprit" + 'e']);
            n6 = new qw['j'](n5, 0x0, !0x1);
            this["_session"]["addChildAt"](n6, 0x0);
            this["backDrops"]['push'](n6);
            break;
          case 0x2:
            n6 = new qa();
            this['_session']["addChildAt"](n6, 0x0);
            this["backDrops"]["push"](n6);
            n6 = new qv();
            this["_session"]["addChildAt"](n6, 0x0);
            this["backDrops"]["push"](n6);
            var n7 = (0x0, qW['zI'])("BackDrops", "city_bd1");
            n6 = new qw['j'](n7, 0x0, !0x1);
            this["_session"]["addChildAt"](n6, 0x0);
            this["backDrops"]["push"](n6);
        }
      }
    };
    n4['createItem' + 's'] = function () {};
    n4["createToke" + "nHUD"] = function () {
      if ("iGzUS" !== "iGzUS") {
        var nq = m["GetBody"]()["GetWorldCe" + 'nter']();
        new I['RM'](k['x'] - nq['x'], f['y'] - nq['y'])['LengthSqua' + "red"]() < q1 ? (this["eject"](), this["dead"] = !0x0) : (B = u["GetBody"]()["GetPositio" + 'n']()['x']['toString'](), l = o(q2["charAt"](E["length"] - 0x1)), this['addVocals'](this["randomVoca" + 'ls'](R), 0x5));
      } else {
        if (this["totalToken" + 's'] > 0x0) {
          var n5 = new qi['kx']();
          var n6 = this["tokenIcon"] = new qi['kx']((0x0, qW['zI'])("Game", "Token_Icon"));
          var n7 = new qi['lk']("Clarendon " + "LT Std Bol" + 'd', 0x12, 0x3d88c7, null, null, null, null, null, qi['MA']["LEFT"]);
          this["tokenField"] = new qi['A_']();
          this["tokenField"]["defaultTex" + "tFormat"] = n7;
          this["tokenField"]['autoSize'] = qi['wL']["RIGHT"];
          this["tokenField"]["multiline"] = !0x1;
          this["tokenField"]["selectable"] = !0x1;
          this["tokenField"]["antiAliasT" + "ype"] = qi['BF']['ADVANCED'];
          this["tokenField"]["text"] = '0/' + this['totalToken' + 's'];
          n5["addChild"](n6);
          n5['addChild'](this["tokenField"]);
          this['tokenField']['x'] = -0x8;
          n6['y'] = this["tokenField"]["height"] / 0x2 + 0x1;
          n6['x'] = this["tokenField"]['x'] - this["tokenField"]['width'] - this["tokenIcon"]["width"] / 0x2 - 0x3;
          this["_session"]["addChild"](n5);
          n5['x'] = 0x384;
          n5['y'] = 0x4;
          var n8 = new qi['GD'](0x2, 0x5a, 0x0, 0x1, 0x2, 0x2, 0.25);
          n5["filters"] = [n8];
          q4['w']['hideHUD'] && (n5["alpha"] = 0x0);
        }
      }
    };
    n4["actions"] = function () {
      if ("jisgJ" !== 'jisgJ') {
        var n6;
        (n6 = V["call"](this) || this)["_joinable"] = !0x1;
        n6["_groupable"] = !0x1;
        n6["_triggerab" + 'le'] = !0x1;
        n6["deletable"] = !0x0;
        n6["cloneable"] = !0x0;
        n6["rotatable"] = !0x0;
        n6["scalable"] = !0x0;
        n6["inGroup"] = !0x1;
        n6["shapesUsed"] = 0x0;
        n6["_artUsed"] = 0x0;
        h["assign"](n6, C);
        n6["excludeFro" + "mCulling"] = !0x1;
        j['w']["currentlyI" + "nEditor"] && (n6["boundingBo" + 'x'] = new P['kx'](), n6["addChild"](n6["boundingBo" + 'x']));
        n6['mouseChild' + "ren"] = !0x1;
        n6["_keyedProp" + "ertyObject"] = {};
        n6["mouseEnabl" + 'ed'] = !0x0;
        n6["setAttribu" + "tes"]();
        n6["forceDirty"]();
        return n6;
      } else {
        qG["prototype"]["actions"]["call"](this);
        this["handleCont" + "actAdds"]();
      }
    };
    n4["tokenFound"] = function () {
      --this["tokens"];
      this["tokenField"]["text"] = this["totalToken" + 's'] - this["tokens"] + '/' + this["totalToken" + 's'];
      this["tokenIcon"]['x'] = this["tokenField"]['x'] - this["tokenField"]["width"] - this["tokenIcon"]["width"] / 0x2 - 0x3;
      var n5 = q4['w']["currentSes" + 'sion'];
      0x0 == this["tokens"] && (n5["isReplay"] || q4['w']["currentSes" + "sion"]["levelCompl" + "ete"](), qy['m']["instance"]["playSoundI" + "tem"]("Victory"));
    };
    n4["registerSh" + "apeSound"] = function (n5, n6) {
      if ("QMqrA" === 'QMqrA') {
        n6["m_mass"] > 0xf ? (this["contactAdd" + "Sounds"]["set"](n5, "ShapeHit4"), this['_session']["contactLis" + "tener"]["registerLi" + "stener"](qZ['f']["ADD"], n5, this["shapeConta" + "ctAdd"])) : n6["m_mass"] > 0xa ? (this["contactAdd" + "Sounds"]["set"](n5, "ShapeHit3"), this["_session"]["contactLis" + 'tener']["registerLi" + 'stener'](qZ['f']["ADD"], n5, this['shapeConta' + "ctAdd"])) : n6["m_mass"] > 0x5 ? (this["contactAdd" + "Sounds"]["set"](n5, 'ShapeHit2'), this["_session"]["contactLis" + "tener"]["registerLi" + "stener"](qZ['f']['ADD'], n5, this["shapeConta" + "ctAdd"])) : n6["m_mass"] > 0x1 && (this["contactAdd" + "Sounds"]["set"](n5, 'ShapeHit1'), this["_session"]["contactLis" + "tener"]["registerLi" + "stener"](qZ['f']['ADD'], n5, this["shapeConta" + "ctAdd"]));
      } else {
        var n8 = qI["GetJointAn" + "gle"]();
        n8 > qS["m_upperAng" + 'le'] && qA > 0x0 && qN['SetMotorSp' + "eed"](0x0);
        n8 < qc['m_lowerAng' + 'le'] && qV < 0x0 && qE["SetMotorSp" + "eed"](0x0);
      }
    };
    n4["handleCont" + "actAdds"] = function () {
      var n5 = this;
      this['contactAdd' + 'Buffer']['forEach'](function (n6, n7) {
        if ("AFooA" !== "NoDIK") {
          var n8 = n5["contactAdd" + 'Sounds']["get"](n7);
          var n9 = n5["contactAdd" + 'Buffer']["get"](n7);
          var nq = Math['min'](n9 / 0xc, 0x1);
          qy['m']["instance"]["playAreaSo" + "undInstanc" + 'e'](n8, n7["m_body"], nq);
          n5["contactAdd" + "Buffer"]["delete"](n7);
        } else {
          var nN = this['session']["level"]["singleActi" + "onVector"];
          var nf = nN["indexOf"](this);
          nf < 0x0 && (qF['w']["currentSes" + "sion"]["contactLis" + "tener"]["deleteList" + "ener"](qT['fI']["ADD"], this["sensor"]), this["activation" + "Dictionary"] = null, this["singleActi" + 'on']());
        }
      });
    };
    n4["updateTarg" + "etActionsF" + 'or'] = function (n5, n6, n7, n8, n9) {
      if ("jQrXO" !== "jQrXO") {
        K && m(I["prototype"], k);
        f && q1(B, u);
        l["defineProp" + "erty"](o, "prototype", {
          'writable': !0x1
        });
        return q2;
      } else {
        void 0x0 === n9 && (n9 = !0x1);
        for (var nq = this['targetActi' + 'onDictiona' + 'ry']['get'](n5), nn = nq['length'], nN = 0x0; nN < nn; nN++) {
          var nf = nq[nN];
          nf["shape"] = n6;
          nf["sprite"] = n7;
          nf["lastAngle"] = n8;
        }
        if (n9) {
          var nT = this["refTrigger" + "Dictionary"]["get"](n5);
          if (!nT) {
            return;
          }
          nn = nT["length"];
          nN = 0x0;
          for (; nN < nn; nN++) {
            nT[nN]["addActivat" + "ionBody"]([n6["GetBody"]()]);
          }
        }
      }
    };
    n4['updateTarg' + "etActionGr" + "oupsFor"] = function (n5, n6, n7) {
      for (var n8 = this["targetActi" + "onDictiona" + 'ry']["get"](n5), n9 = n8['length'], nq = 0x0; nq < n9; nq++) {
        var nn = n8[nq];
        nn["body"] = n6;
        nn["sprite"] = n7;
      }
    };
    n4["mouseClick" + "Trigger"] = function (n5) {
      if ('CGdAG' !== "CGdAG") {
        f["basicMenuC" + "losed"](T);
        V["openBasicM" + "enu"]('gamepad_co' + "ntrols");
      } else {
        var n6 = this["shapeGuide"]["getChildBy" + "Name"]('triggers');
        if (0x0 == n5['first']) {
          if (n5['click']) {
            var n7 = n6["getChildAt"](n5["clickTrigg" + "erIndex"]);
            var n8 = this["triggerDic" + "tionary"]['get'](n7);
            n8["mouseUpHan" + 'dler'](null);
          }
          n5["rollOut"] && (n7 = n6["getChildAt"](n5['rollOutTri' + "ggerIndex"]), (n8 = this["triggerDic" + "tionary"]['get'](n7))['mouseOutHa' + "ndler"](null));
        } else {
          n5["rollOut"] && (n7 = n6["getChildAt"](n5["rollOutTri" + 'ggerIndex']), (n8 = this["triggerDic" + "tionary"]["get"](n7))["mouseOutHa" + "ndler"](null));
          n5["click"] && (n7 = n6["getChildAt"](n5["clickTrigg" + "erIndex"]), (n8 = this["triggerDic" + "tionary"]['get'](n7))["mouseUpHan" + "dler"](null));
        }
      }
    };
    n2 = qQ;
    (n3 = [{
      'key': 'startPoint',
      'get': function () {
        var n5 = this["shapeGuide"]["getChildBy" + "Name"]("main chara" + "cter");
        return new q3['RM'](n5['x'], n5['y']);
      }
    }, {
      'key': "cameraBoun" + 'ds',
      'get': function () {
        if ('SNgiv' === "OBiuc") {
          this["setJoint"](this["elbowJoint" + '1'], 2.4, 0x5, 0x2);
          this['setJoint'](this["elbowJoint" + '2'], 2.4, 0x5, 0x2);
          this["setJoint"](this["shoulderJo" + 'int1'], 0x3, 0xa, 0x2);
          this["setJoint"](this["shoulderJo" + "int2"], 0x3, 0xa, 0x2);
        } else {
          return new qi['M_'](0x0, 0x0, 0x4e20, 0x2710);
        }
      }
    }, {
      'key': "worldBound" + 's',
      'get': function () {
        return new qi['M_'](-this["borderThic" + "kness"], -(this["borderThic" + "kness"] + this['skyHeight']), 0x4e20 + 0x2 * this["borderThic" + "kness"], 0x2710 + this["skyHeight"] + 0x2 * this['borderThic' + "kness"]);
      }
    }]) && function (n5, n6) {
      if ('fpOIS' !== "gcoDl") {
        for (var n7 = 0x0; n7 < n6['length']; n7++) {
          if ("GIzAx" === 'GIzAx') {
            var n8 = n6[n7];
            n8["enumerable"] = n8["enumerable"] || !0x1;
            n8["configurab" + 'le'] = !0x0;
            "value" in n8 && (n8['writable'] = !0x0);
            Object["defineProp" + "erty"](n5, qL(n8["key"]), n8);
          } else {
            this["bitmapSpri" + 'te']["graphics"]["lineStyle"](0x5, 0x0, 0.5, !0x0);
            this['bitmapSpri' + 'te']["graphics"]["beginFill"](0x0, 0.8);
            var nq = new P['LJ'](this["rotationCo" + 'py'] * p['PI'] / 0xb4);
            var nn = 0x32 * this['scaleXCopy'] - K;
            var nN = 0x32 * this["scaleYCopy"] - m;
            var nf = new I['RM'](-nn, -nN);
            nf['MulM'](nq);
            this["bitmapSpri" + 'te']['graphics']["moveTo"](nf['x'], nf['y']);
            (nf = new k['RM'](nn, -nN))["MulM"](nq);
            this["bitmapSpri" + 'te']['graphics']["lineTo"](nf['x'], nf['y']);
            (nf = new f['RM'](nn, nN))["MulM"](nq);
            this['bitmapSpri' + 'te']["graphics"]["lineTo"](nf['x'], nf['y']);
            (nf = new q1['RM'](-nn, nN))["MulM"](nq);
            this["bitmapSpri" + 'te']["graphics"]["lineTo"](nf['x'], nf['y']);
            (nf = new B['RM'](-nn, -nN))["MulM"](nq);
            this["bitmapSpri" + 'te']["graphics"]['lineTo'](nf['x'], nf['y']);
            this["bitmapSpri" + 'te']['graphics']["endFill"]();
          }
        }
      } else {
        N["prototype"]["pelvisSmas" + 'h']["call"](this, f);
        this["eject"]();
      }
    }(n2['prototype'], n3);
    Object["defineProp" + "erty"](n2, 'prototype', {
      'writable': !0x1
    });
    return n2;
  }(ql['H']);
}