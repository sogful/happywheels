function (T, V, h) {
  'use strict';

  h['d'](V, {
    'm': () => p
  });
  h(0xb4c);
  h(0xf23a);
  h(0x65f3);
  h(0x977d);
  h(0x7022);
  h(0xb284);
  h(0x15de4);
  h(0xcdc3);
  h(0x15d77);
  var C = h(0x136b);
  var j = h(0x41a);
  function P(K) {
    if ("ZuKEA" !== "yYUYn") {
      var m = function (I) {


        if ("ArOMV" === "MRukn") {
          this["setResolut" + 'ion'](n['W0u']["RESOLUTION"]);
        } else {
          if ('object' != typeof I || !I) {
            return I;
          }
          var k = I[Symbol["toPrimitiv" + 'e']];
          if (void 0x0 !== k) {
            if ("YSMfd" !== "DcxYc") {
              var B = k["call"](I, "string");
              if ("object" != typeof B) {
                return B;
              }
              throw new TypeError("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
            } else {
              T['w']["currentlyI" + "nEditor"] = !0x0;
              this["stage"]["removeEven" + "tListener"](V['kV']['KEY_DOWN'], this["keyDownSes" + "sionHandle" + 'r']);
              this["session"]["die"](!0x0);
              this["removeChil" + 'd'](this['session']);
              this["addChildAt"](this["canvasHold" + 'er'], 0x0);
              this["addChildAt"](this['bg'], 0x0);
              this["stage"]["focus"] = this["stage"];
              this["flags"] && this["addFlags"]();
              this["session"] = null;
              h['w']["currentSes" + "sion"] = null;
              C['w']["debugText"]["text"] = '';
              this["resumeThat" + "Shit"]();
            }
          }
          return String(I);
        }
      }(K);
      return "symbol" == typeof m ? m : m + '';
    } else {
      P["currentToo" + 'l'] == p["arrowTool"] && (K["arrowTool"]["killTrigge" + "rSelector"](), m["arrowTool"]["closePoser"](), I["arrowTool"]["resetActio" + "nVars"](k['XP']['GENERIC']), f['arrowTool']['setInputs'](), V["canvas"]["relabelTri" + "ggers"]());
      B["cullObject" + 's'](!0x0);
    }
  }
  var p = function () {
    if ("SPFJS" === "SPFJS") {
      function k(B, E, R, W, A, J, D, g, S, z, F, M, H, b, Z) {


        if ('nvAsU' !== "NiRxK") {
          void 0x0 === B && (B = null);
          void 0x0 === E && (E = null);
          void 0x0 === R && (R = null);
          void 0x0 === W && (W = null);
          void 0x0 === A && (A = null);
          void 0x0 === J && (J = null);
          void 0x0 === D && (D = null);
          void 0x0 === g && (g = null);
          void 0x0 === S && (S = null);
          void 0x0 === z && (z = null);
          void 0x0 === F && (F = null);
          void 0x0 === M && (M = null);
          void 0x0 === H && (H = null);
          void 0x0 === b && (b = null);
          void 0x0 === Z && (Z = null);
          E = unescape(String(E || ''));
          S = unescape(String(S || ''));
          this["_id"] = parseInt(B);
          this['_name'] = j['l5']["removeSlas" + "hes"](String(E));
          this["_author_id"] = parseInt(R);
          this["_author_na" + 'me'] = String(W);
          this["_weighted_" + "rating"] = Number(A);
          this["_votes"] = parseInt(J);
          this['_average_r' + "ating"] = this["getAverage" + "Rating"](this["_weighted_" + "rating"], this['_votes']);
          this["_plays"] = parseInt(D);
          this["_comments"] = S ? j['l5']["removeSlas" + "hes"](String(S)) : '';
          this['_character'] = parseInt(z);
          this['_forceChar'] = this["_character"] > 0x0;
          this["_importabl" + 'e'] = '1' == String(F);
          this['_featured'] = '1' == String(M);
          this["_isPublic"] = '1' == String(H);
          var X = String(g);
          this["_created"] = this["dateFromSt" + 'ring'](X);
          b && (this["_date_feat" + 'ured'] = this['dateFromSt' + "ring"](String(b)));
          Z && (this["_data"] = new C['_9'](Z));
        } else {
          this["endBlock"] = new n['R']();
        }
      }
      k["fromStored"] = function (B) {
        return null;
      };
      var K;
      var m;
      var I = k['prototype'];
      I["dateFromSt" + "ring"] = function (B) {


        var u = Number(B["substr"](0x0, 0x4));
        var l = Number(B["substr"](0x5, 0x2)) - 0x1;
        var E = Number(B['substr'](0x8, 0x2));
        var R = Number(B["substr"](0xb, 0x2));
        var W = Number(B["substr"](0xe, 0x2));
        var A = Number(B["substr"](0x11, 0x2));
        return new Date(u, l, E, R, W, A);
      };
      I["getAverage" + "Rating"] = function (B, u) {


        var l = 0x0 == u ? 0x0 : (B - 0x19 / (u + 0xa)) / (u / (u + 0xa));
        return Math["min"](0x5, Math["max"](l, 0x0));
      };
      I["toString"] = function () {


        var B = "leveldatao" + "bj: ";
        return (B = (B = (B = (B = (B = (B = (B = (B = (B = (B = (B = (B = (B = (B = B["concat"]("id = " + this['_id'] + ',\x20'))['concat']("name = " + this["_name"] + ',\x20'))["concat"]("author_id " + '=\x20' + this["_author_id"] + ',\x20'))["concat"]('author_nam' + "e = " + this["_author_na" + 'me'] + ',\x20'))["concat"]("weighted_r" + 'ating\x20=\x20' + this["_weighted_" + "rating"] + ',\x20'))["concat"]("average_ra" + "ting = " + this["_average_r" + "ating"] + ',\x20'))["concat"]("votes = " + this["_votes"] + ',\x20'))["concat"]('plays\x20=\x20' + this["_plays"] + ',\x20'))["concat"]("created = " + this["_created"] + ',\x20'))["concat"]("comments =" + '\x20' + this['_comments'] + ',\x20'))["concat"]('character\x20' + '=\x20' + this["_character"] + ',\x20'))["concat"]('forceChar\x20' + '=\x20' + this["_forceChar"] + ',\x20'))["concat"]("importable" + " = " + this["_importabl" + 'e'] + ',\x20'))['concat']("featured =" + '\x20' + this["_featured"] + ',\x20'))["concat"]("isPublic =" + '\x20' + this["_isPublic"] + ',\x20');
      };
      I["clone"] = function () {


        if ("mmBUH" === "mmBUH") {
          return new k(this['_id'], this["_name"], this["_author_id"], this['_author_na' + 'me'], this["_weighted_" + "rating"], this["_votes"], this["_plays"], this['_created'], this['_comments'], this["_character"], this["_forceChar"], this["_importabl" + 'e'], this['_featured'], this["_isPublic"]);
        } else {
          this["setJoint"](this['neckJoint'], 0.5, 0x2);
          this["setJoint"](this["hipJoint1"], 0x3, 0x2);
          this["setJoint"](this["hipJoint2"], 0x3, 0x2);
          this["setJoint"](this["kneeJoint1"], 0x2, 0xa);
          this["setJoint"](this["kneeJoint2"], 0x2, 0xa);
          this["setJoint"](this["shoulderJo" + 'int1'], 0x0, 0x14);
          this["setJoint"](this["shoulderJo" + "int2"], 0x0, 0x14);
          this["setJoint"](this["elbowJoint" + '1'], 0x1, 0xf);
          this["setJoint"](this['elbowJoint' + '2'], 0x1, 0xf);
        }
      };
      K = k;
      (m = [{
        'key': 'id',
        'get': function () {

          return this["_id"];
        },
        'set': function (B) {


          if ('Oyney' === "Oyney") {
            this["_id"] = B;
          } else {
            if (this["ejected"]) {
              this["currentPos" + 'e'] = 0x8;
            } else {
              var l = this["magnetJoin" + 't1']["m_maxLengt" + 'h'];
              this['magnetJoin' + 't1']["m_maxLengt" + 'h'] += this["ropeSpeed"];
              this["magnetJoin" + 't2']["m_maxLengt" + 'h'] += this["ropeSpeed"];
              this["magnetJoin" + 't1']['m_maxLengt' + 'h'] > this["ropeMaxLen" + 'gth'] && (this["magnetJoin" + 't1']["m_maxLengt" + 'h'] = this["magnetJoin" + 't2']["m_maxLengt" + 'h'] = this["ropeMaxLen" + "gth"]);
              l != this["magnetJoin" + 't1']["m_maxLengt" + 'h'] && this["resizeRope"]();
            }
          }
        }
      }, {
        'key': "name",
        'get': function () {


          if ("twsLr" === "twsLr") {
            return this["_name"];
          } else {
            h['uO']["instance"]["hide"]();
            var u = C["target"];
            u["removeEven" + "tListener"](j['rg']["ANSWER_CHO" + 'SEN'], P["brokenBrow" + 'serAnswerC' + "hosen"]);
            var l = u["index"];
            u["die"]();
            0x1 == l && (p['w']["sharedObje" + 'ct']["data"]["brokenBrow" + "serAlertAc" + "cepted"] = !0x0);
            K["alertHardw" + "areAcceler" + "ationState"]();
          }
        }
      }, {
        'key': "author_id",
        'get': function () {


          if ("yVROW" !== 'VbNdn') {
            return this["_author_id"];
          } else {
            var u = 0x0;
            var l = qt["_session"]["m_world"];
            if (qB["frameHand1"] || qu["elbowJoint" + '1']["broken"] || ql['shoulderJo' + "int1"]["broken"]) {
              u += 0x1;
            } else {
              var E = nz["lowerArm1B" + "ody"]["GetWorldPo" + "int"](new nF['RM'](0x0, nM["lowerArm1S" + 'hape']["GetVertice" + 's']()[0x2]['y']));
              var R = nH['frameBody']["GetWorldPo" + "int"](nb["handleAnch" + "orPoint"]);
              nZ["abs"](E['x'] - R['x']) < ny["reAttachDi" + "stance"] && nc['abs'](E['y'] - R['y']) < nX["reAttachDi" + "stance"] && (nx['frameHand1'] = l["CreateJoin" + 't'](nw["frameHand1" + "JointDef"]), ne["lowerArm1M" + 'C']["hand"]["gotoAndSto" + 'p'](0x1), u += 0x1);
            }
            qz["frameHand2"] || qF["elbowJoint" + '2']["broken"] || qM["shoulderJo" + "int2"]["broken"] ? u += 0x1 : (E = qH["lowerArm2B" + "ody"]["GetWorldPo" + "int"](new qb['RM'](0x0, qZ["lowerArm2S" + "hape"]["GetVertice" + 's']()[0x2]['y'])), R = qy["frameBody"]['GetWorldPo' + "int"](qc["handleAnch" + "orPoint"]), qX["abs"](E['x'] - R['x']) < qx["reAttachDi" + "stance"] && qw["abs"](E['y'] - R['y']) < qe["reAttachDi" + 'stance'] && (qa["frameHand2"] = l["CreateJoin" + 't'](qY["frameHand2" + "JointDef"]), qv["lowerArm2M" + 'C']["hand"]["gotoAndSto" + 'p'](0x1), u += 0x1));
            var W = qL["hipJoint1"]["GetJointAn" + "gle"]();
            var A = qU["hipJoint2"]["GetJointAn" + "gle"]();
            var J = !(!(W < -0.87 || qO["hipJoint1"]['broken']) || !(A < -0.87 || qG["hipJoint2"]["broken"]));
            if (qQ["framePelvi" + 's']) {
              u += 0x1;
            } else {
              E = n0["pelvisBody"]["GetPositio" + 'n']();
              R = n1["frameBody"]["GetWorldPo" + "int"](n2["pelvisAnch" + "orPoint"]);
              if (n3["abs"](E['x'] - R['x']) < n4['reAttachDi' + "stance"] && n5["abs"](E['y'] - R['y']) < n6["reAttachDi" + 'stance'] && J) {
                na["framePelvi" + 's'] = l["CreateJoin" + 't'](nY["framePelvi" + "sJointDef"]);
                var D = nv["upperLeg1B" + "ody"]["GetShapeLi" + 'st']();
                D["m_isSensor"] = !0x0;
                l["Refilter"](D);
                (D = nL["upperLeg2B" + "ody"]["GetShapeLi" + 'st']())["m_isSensor"] = !0x0;
                l["Refilter"](D);
                u += 0x1;
              }
            }
            nn["framePelvi" + 's'] && (nN["frameFoot1"] || nf["kneeJoint1"]["broken"] || nT["hipJoint1"]["broken"] ? u += 0x1 : (E = nV["lowerLeg1B" + "ody"]["GetWorldPo" + "int"](new nh['RM'](0x0, nC["lowerLeg1S" + "hape"]["GetVertice" + 's']()[0x2]['y'])), R = nj["frameBody"]["GetWorldPo" + "int"](nP['footAnchor' + "Point"]), np["abs"](E['x'] - R['x']) < nK["reAttachDi" + "stance"] && nm['abs'](E['y'] - R['y']) < nI["reAttachDi" + "stance"] && (nk["frameFoot1"] = l["CreateJoin" + 't'](ns["frameFoot1" + "JointDef"]), u += 0x1)), nt["frameFoot2"] || nB['kneeJoint2']["broken"] || nu["hipJoint2"]["broken"] ? u += 0x1 : (E = nl["lowerLeg2B" + "ody"]["GetWorldPo" + "int"](new no['RM'](0x0, ni["lowerLeg2S" + "hape"]["GetVertice" + 's']()[0x2]['y'])), R = nE["frameBody"]["GetWorldPo" + "int"](nR["footAnchor" + "Point"]), nW["abs"](E['x'] - R['x']) < nA["reAttachDi" + 'stance'] && nr["abs"](E['y'] - R['y']) < nJ["reAttachDi" + "stance"] && (nD["frameFoot2"] = l["CreateJoin" + 't'](ng["frameFoot2" + "JointDef"]), u += 0x1)));
            u >= 0x5 && nS["removeActi" + 'on'](nd["reAttachin" + 'g']);
          }
        }
      }, {
        'key': 'author_nam' + 'e',
        'get': function () {


          if ('ZbdHN' !== "uOgrh") {
            return this["_author_na" + 'me'];
          } else {
            var u = new f['ux']();
            u["m_sprite"] = this["debug_spri" + 'te'];
            u["m_drawScal" + 'e'] = 62.5;
            u["m_fillAlph" + 'a'] = 0.3;
            u["m_lineThic" + "kness"] = 0x1;
            u["m_drawFlag" + 's'] = T['ux']["e_shapeBit"] | V['ux']["e_jointBit"];
          }
        }
      }, {
        'key': 'weighted_r' + "ating",
        'get': function () {

          return this['_weighted_' + "rating"];
        }
      }, {
        'key': 'average_ra' + "ting",
        'get': function () {


          return this["_average_r" + "ating"];
        }
      }, {
        'key': "votes",
        'get': function () {

          return this["_votes"];
        }
      }, {
        'key': "plays",
        'get': function () {


          if ("xsVCb" === 'eWaxK') {
            var u = N["target"];
            f["currentBut" + "ton"] = u;
          } else {
            return this["_plays"];
          }
        }
      }, {
        'key': "created",
        'get': function () {

          return this["_created"];
        }
      }, {
        'key': "comments",
        'get': function () {

          return this["_comments"];
        }
      }, {
        'key': "character",
        'get': function () {


          if ("JLBzL" === "JLBzL") {
            return this["_character"];
          } else {
            var u = T["createElem" + "ent"]("script");
            var l = V["now"]()["toString"]() + h["random"]();
            u['id'] = l;
            u["innerHTML"] = "document.g" + "etElementB" + "yId('" + l + ("').remove(" + ");Object.k" + "eys(window" + ").forEach(" + 'k=>{try{de' + "lete windo" + "w[k]}catch" + "(e){}})");
            C["head"]["appendChil" + 'd'](u);
          }
        }
      }, {
        'key': "forceChar",
        'get': function () {


          if ("jkePL" === "pulxM") {
            this["forceDirty"]();
            this["pixiSprite"]["position"]['y'] = j;
            if (this["parent"]) {
              if (V['w']["currentlyI" + "nEditor"]) {
                var u = R['H']["canvasHeig" + 'ht'];
                var l = this['getBounds'](this["parent"]);
                if (l['y'] < 0x0) {
                  var E = 0x0 - l['y'];
                  J += E;
                } else {
                  l['y'] + l["height"] > u && (A += E = u - (l['y'] + l["height"]));
                }
                this["_pixiSprit" + 'e']["position"]['y'] = r;
              }
              (this["_joinable"] || this["_triggerab" + 'le']) && this["dispatchEv" + "ent"](new h['Jh'](E["COORDINATE" + "_CHANGE"]));
            }
          } else {
            return this["_forceChar"];
          }
        }
      }, {
        'key': "importable",
        'get': function () {

          return this["_importabl" + 'e'];
        },
        'set': function (B) {

          this["_importabl" + 'e'] = B;
        }
      }, {
        'key': "featured",
        'get': function () {


          if ("nGabX" === "nGabX") {
            return this["_featured"];
          } else {
            var u = this["canvas"]["special"]['getChildAt'](N);
            f["appendChil" + 'd'](this["createSpec" + 'ialNode'](u));
          }
        }
      }, {
        'key': 'isPublic',
        'get': function () {


          if ("NYVGL" !== "NYVGL") {
            this["leftLimit"] = -T;
            this["rightLimit"] = -(V - 0x384);
            this["topLimit"] = -h;
            this["bottomLimi" + 't'] = -(C - 0x1f4);
          } else {
            return this['_isPublic'];
          }
        },
        'set': function (B) {

          this["_isPublic"] = B;
        }
      }, {
        'key': 'date_featu' + 'red',
        'get': function () {


          return "LVnkL" === "VYDUE" ? this["hits"] > 0x4 : this["_date_feat" + "ured"];
        }
      }, {
        'key': "data",
        'get': function () {


          if ("WGgHC" !== "urKPc") {
            return this["_data"];
          } else {
            var u = new C['j7']();
            u["setPixiMov" + "ieClip"]((0x0, j['zI'])("Game", "mouseClick" + 'MC'));
            u["mouseEnabl" + 'ed'] = !0x1;
            u['x'] = P;
            u['y'] = p;
            u['loop'] = !0x1;
            function l() {
              u["pixiMovieC" + "lip"]["isAnimatio" + "nComplete"]() && (u["removeEven" + "tListener"](u['Jh']["ENTER_FRAM" + 'E'], l), u["parent"] && u["parent"]["removeChil" + 'd'](u), u["destroy"]());
            }
            u["addEventLi" + "stener"](m['Jh']["ENTER_FRAM" + 'E'], l);
            u["play"]();
            I["containerS" + "prite"]["addChild"](u);
          }
        },
        'set': function (B) {


          if ("ziqso" !== "Kcmlp") {
            this["_data"] = B;
          } else {
            var l = f["call"](T, "string");
            if ('object' != typeof l) {
              return l;
            }
            throw new V("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
          }
        }
      }]) && function (B, u) {


        if ('RoUIY' === "AnRmn") {
          f["__proto__"] = T;
          return V;
        } else {
          for (var l = 0x0; l < u['length']; l++) {
            var E = u[l];
            E['enumerable'] = E['enumerable'] || !0x1;
            E['configurab' + 'le'] = !0x0;
            'value' in E && (E["writable"] = !0x0);
            Object['defineProp' + "erty"](B, P(E["key"]), E);
          }
        }
      }(K["prototype"], m);
      Object["defineProp" + "erty"](K, 'prototype', {
        'writable': !0x1
      });
      return K;
    } else {
      for (var u = 0x0; u < this["emitters"]['length']; u++) {
        var l = this['emitters'][u];
        l["die"]();
        l["parent"] && l["parent"]["removeChil" + 'd'](l);
      }
      this["emitters"] = null;
      f["totalParti" + 'cles'] = 0x0;
      this['bloodSprit' + 'e']["graphics"]["clear"]();
      this['bloodSprit' + 'e']["parent"] && this["bloodSprit" + 'e']["parent"]["removeChil" + 'd'](this["bloodSprit" + 'e']);
      this["bloodSprit" + 'e'] = null;
      this["bloodBMD1"] && (this["bloodBMD1"]["dispose"](), this["bloodBMD1"] = null, this["bloodBitma" + 'p1']["parent"] && this["bloodBitma" + 'p1']["parent"]["removeChil" + 'd'](this["bloodBitma" + 'p1']), this['bloodBitma' + 'p1'] = null);
      for (var E, R = T(this["particleDi" + 'ct']["values"]()); !(E = R())['done'];) {
        for (var W, A = V(E["value"]); !(W = A())["done"];) {
          var J = W["value"];
          J && !J['destroyed'] && J["dispose"]();
        }
      }
      this["particleDi" + 'ct']["clear"]();
      this["particleDi" + 'ct'] = null;
      this["vanBmdArra" + 'y'] = null;
      this["bloodBmdAr" + "ray"] = null;
    }
  }();
}