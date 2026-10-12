function (T, V, C) {
  'use strict';

  C['d'](V, {
    'H': () => E,
    'g': () => R
  });
  C(0xf23a);
  C(0xb284);
  C(0x15de4);
  C(0xcdc3);
  C(0x15d77);
  C(0x65f3);
  C(0xb4c);
  var j = C(0x136b);
  var P = C(0x13a47);
  var K = C(0x3432);
  function m(W, A) {
    for (var J = 0x0; J < A["length"]; J++) {
      if ("Fejcv" !== "eciFy") {
        var D = A[J];
        D["enumerable"] = D["enumerable"] || !0x1;
        D['configurab' + 'le'] = !0x0;
        'value' in D && (D["writable"] = !0x0);
        Object['defineProp' + "erty"](W, k(D["key"]), D);
      } else {
        var S = this["bodyMinAng" + 'le'] + V["random"]() * this["bodyRange"];
        var z = h["random"]() * this["timeRange"] + 0.5;
        C['os']['to'](this['body'], {
          'duration': z * j,
          'rotation': S,
          'ease': P['MI']["easeInOut"]
        });
      }
    }
  }
  function I(W, A, J) {
    if ("AjhgZ" !== "AjhgZ") {
      C(j, P, R, K, m, "throw", I);
    } else {
      A && m(W["prototype"], A);
      J && m(W, J);
      Object["defineProp" + "erty"](W, "prototype", {
        'writable': !0x1
      });
      return W;
    }
  }
  function k(W) {
    if ("XqgVC" !== "XqgVC") {
      var D = function (g) {


        if ('object' != typeof g || !g) {
          return g;
        }
        var S = g[D["toPrimitiv" + 'e']];
        if (void 0x0 !== S) {
          var z = S["call"](g, "string");
          if ("object" != typeof z) {
            return z;
          }
          throw new K("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
        }
        return R(g);
      }(C);
      return "symbol" == typeof D ? D : D + '';
    } else {
      var A = function (D) {


        if ("object" != typeof D || !D) {
          return D;
        }
        var g = D[Symbol['toPrimitiv' + 'e']];
        if (void 0x0 !== g) {
          var S = g['call'](D, "string");
          if ("object" != typeof S) {
            return S;
          }
          throw new TypeError('@@toPrimit' + 'ive\x20must\x20r' + "eturn a pr" + "imitive va" + "lue.");
        }
        return String(D);
      }(W);
      return "symbol" == typeof A ? A : A + '';
    }
  }
  function B(W, A) {
    if ("czSNT" === "czSNT") {
      W["prototype"] = Object["create"](A["prototype"]);
      W["prototype"]["constructo" + 'r'] = W;
      u(W, A);
    } else {
      return N["mouseOverH" + "andler"](f);
    }
  }
  function u(W, A) {
    if ("MKIPD" === 'bBwIC') {
      var D = this["wheelBody"]["GetAngle"]();
      var g = C["cos"](D);
      if (this["sign"]) {
        g < -this["minCos"] && (this['sign'] = !0x1, this["wheelFoot1" + "Joint"] && (S = 0x2 * j["ceil"](0x5 * P["random"]()) - 0x1, p['m']["instance"]["playAreaSo" + "undInstanc" + 'e']('Step' + S, this["wheelBody"])));
      } else {
        if (g > this["minCos"] && (this["sign"] = !0x0, this["wheelFoot2" + 'Joint'])) {
          var S = 0x2 * k["ceil"](0x5 * f["random"]());
          V['m']["instance"]["playAreaSo" + "undInstanc" + 'e']("Step" + S, this["wheelBody"]);
        }
      }
    } else {
      u = Object["setPrototy" + 'peOf'] ? Object["setPrototy" + "peOf"]["bind"]() : function (D, g) {


        if ("aBGMQ" !== "dQhKj") {
          D['__proto__'] = g;
          return D;
        } else {
          this['buildWindo' + 'w']();
          this["userText"]['text'] = this['replayData' + "Object"]["user_name"];
          this["votingStar" + 's'] = new C(this["replayData" + "Object"]["average_ra" + "ting"]);
          this["votingStar" + 's']['x'] = 0x2d;
          this["votingStar" + 's']['y'] = 0x41;
          var z = 0x78;
          this["restartBut" + "ton"] = new j['Ch']("view repla" + 'y\x20again', 0x3d88c7, z);
          this["restartBut" + 'ton']['x'] = 0x3c;
          this["restartBut" + "ton"]['y'] = 0x6b;
          this["addChild"](this["restartBut" + "ton"]);
          this['playButton'] = new P['Ch']("play this " + 'level', 0x3d88c7, z);
          this["playButton"]['x'] = 0x3c;
          this['playButton']['y'] = 0x89;
          this['addChild'](this["playButton"]);
          this["exitButton"] = new R['Ch']("exit to me" + 'nu', 0xfd8181, z);
          this['exitButton']['x'] = 0x3c;
          this['exitButton']['y'] = 0xb1;
          this["addChild"](this["exitButton"]);
          this["cancelButt" + 'on'] = new K['Ch']("resume", 0xfd8181, z);
          this["cancelButt" + 'on']['x'] = 0x3c;
          this["cancelButt" + 'on']['y'] = 0xcf;
          this["addChild"](this["cancelButt" + 'on']);
          this["addChild"](this["votingStar" + 's']);
          this["addEventLi" + "stener"](m['Cm']["MOUSE_UP"], this['mouseUpHan' + "dler"]);
          this["votingStar" + 's']["addEventLi" + "stener"](I["RATING_SEL" + "ECTED"], this["ratingSele" + "cted"]);
        }
      };
      return u(W, A);
    }
  }
  var E = function (W) {
    if ('aIDBz' === "aIDBz") {
      function J() {


        if ("pptpH" !== "BQTPC") {
          var D;
          (D = W["call"](this) || this)["artStatusH" + "andlerBind"] = D["artStatusH" + "andler"]["bind"](D);
          D["shapeStatu" + "sHandlerBi" + 'nd'] = D["shapeStatu" + "sHandler"]["bind"](D);
          D["isGroupCan" + 'vas'] = !0x1;
          D["init"]();
          return D;
        } else {
          return ![];
        }
      }
      B(J, W);
      var A = J['prototype'];
      A["init"] = function () {


        J["_canvasWid" + 'th'] = 0x4e20;
        J["_canvasHei" + "ght"] = 0x2710;
        J["_backDropI" + "ndex"] = 0x0;
        this["_shapeCoun" + 't'] = 0x0;
        this["_artCount"] = 0x0;
        this["_mainCanva" + 's'] = this;
        this['graphics']["beginFill"](0xffffff);
        this["graphics"]["drawRect"](0x0, 0x0, J["_canvasWid" + 'th'], J["_canvasHei" + 'ght']);
        this["graphics"]["endFill"]();
        this["shapes"] = new j['kx']();
        this["shapes"]["name"] = "shapes";
        this["joints"] = new j['kx']();
        this["joints"]["name"] = "joints";
        this['triggers'] = new j['kx']();
        this["triggers"]["name"] = 'triggers';
        this['special'] = new j['kx']();
        this["special"]["name"] = "special";
        this["groups"] = new j['kx']();
        this["groups"]["name"] = 'groups';
        this["char"] = new j['kx']();
        this["char"]["name"] = "char";
        this['addChild'](this["shapes"]);
        this['addChild'](this["special"]);
        this["addChild"](this["groups"]);
        this["addChild"](this["joints"]);
        this["addChild"](this["triggers"]);
        this['addChild'](this["char"]);
        this["startPlace" + "Holder"] = new K['ak']();
        this["char"]["addChild"](this["startPlace" + "Holder"]);
        this["startPlace" + "Holder"]["scaleX"] = this["startPlace" + "Holder"]["scaleY"] = 0.5;
        this["startPlace" + 'Holder']['x'] = 0x12c;
        this["startPlace" + "Holder"]['y'] = 0x64 + J["_canvasHei" + "ght"] / 0x2;
        this["addEventLi" + "stener"](P['N3']["ART"], this["artStatusH" + "andlerBind"], !0x1, 0x0, !0x0);
        this["addEventLi" + 'stener'](P['N3']["SHAPE"], this["shapeStatu" + "sHandlerBi" + 'nd'], !0x1, 0x0, !0x0);
        this["shapes"]["pixiSprite"]["removeChil" + 'd'](this["shapes"]["graphics"]["pixiGraphi" + 'cs']);
        this["special"]["pixiSprite"]["removeChil" + 'd'](this["special"]["graphics"]["pixiGraphi" + 'cs']);
        this["groups"]["pixiSprite"]['removeChil' + 'd'](this["groups"]['graphics']["pixiGraphi" + 'cs']);
        this["joints"]["pixiSprite"]["removeChil" + 'd'](this["joints"]['graphics']["pixiGraphi" + 'cs']);
        this["triggers"]["pixiSprite"]["removeChil" + 'd'](this["triggers"]["graphics"]["pixiGraphi" + 'cs']);
        this["char"]["pixiSprite"]["removeChil" + 'd'](this["char"]["graphics"]["pixiGraphi" + 'cs']);
      };
      A["createText" + "Field"] = function (D) {


        this["textField"] = new j['A_']();
        D && D["addChild"](this["textField"]);
        var g = new j['lk']("HelveticaN" + "eueLT Std", 0xb, 0x0, null, null, null, null, null, j['MA']["RIGHT"]);
        this["textField"]["defaultTex" + "tFormat"] = g;
        this["textField"]["multiline"] = !0x0;
        this["textField"]["height"] = 0x14;
        this["textField"]["width"] = 0x0;
        this["textField"]['x'] = 0x37a;
        this["textField"]['y'] = 0x1d1;
        this["textField"]['mouseEnabl' + 'ed'] = !0x1;
        this['textField']["selectable"] = !0x1;
        this["textField"]["autoSize"] = j['wL']['RIGHT'];
        this["textField"]["wordWrap"] = !0x1;
        this["textField"]["blendMode"] = j['Nx']['LUMINVERT'];
        this['setTextFie' + 'ld']();
      };
      A["die"] = function () {


        var D;
        null === (D = this["textField"]) || void 0x0 === D || D["destroy"]();
      };
      A["addRefSpri" + 'te'] = function (D) {


        if ("XburW" === "XburW") {
          if (!(D instanceof K['$w'])) {
            throw new Error("attempted " + "to add non" + "-refsprite" + " to canvas");
          }
          if (D instanceof K['HQ']) {
            this["shapes"]["addChild"](D);
          } else {
            if (D instanceof K['HR']) {
              this["special"]["addChild"](D);
            } else {
              if (D instanceof K['Sv']) {
                this['joints']["addChild"](D);
              } else {
                if (D instanceof K['Qs']) {
                  this["triggers"]["addChild"](D);
                } else {
                  if ("aUoWn" === 'ZWzjz') {
                    void 0x0 === R && (K = null);
                    var S = m["canvasHold" + 'er']["scaleY"] * I['H']["canvasHeig" + 'ht'] + 0x2 * k["spacing"];
                    j["canvasHold" + 'er']['y'] = J["scrollTab"]['y'] * S / -B['bg']["graphics"]['height'] + u["spacing"];
                    B["container"]["cullObject" + 's']();
                  } else {
                    if (!(D instanceof K['DJ'])) {
                      throw new Error("what the f" + "uck is thi" + 's');
                    }
                    this["groups"]["addChild"](D);
                  }
                }
              }
            }
          }
          this["shapeCount"] = this['_mainCanva' + 's']["shapeCount"] + D["shapesUsed"];
          this["tooManySha" + "pes"] = this["_mainCanva" + 's']["shapeCount"] > J["maxShapes"];
          this['artCount'] = this["_artCount"] + D["artUsed"];
          this["tooMuchArt"] = this["_artCount"] > J["maxArt"];
          return D;
        } else {
          for (var z = 0x0; z < V["length"]; z++) {
            var F = p[z];
            F['enumerable'] = F["enumerable"] || !0x1;
            F["configurab" + 'le'] = !0x0;
            "value" in F && (F["writable"] = !0x0);
            K["defineProp" + 'erty'](m, I(F["key"]), F);
          }
        }
      };
      A["addRefSpri" + "teAt"] = function (D, g) {


        if ("wEgiR" !== "mtaBJ") {
          if (!(D instanceof K['$w'])) {
            throw new Error('attempted\x20' + "to add non" + "-refsprite" + " to canvas");
          }
          if (D instanceof K['HQ']) {
            this["shapes"]['addChildAt'](D, g);
          } else {
            if (D instanceof K['HR']) {
              this["special"]["addChildAt"](D, g);
            } else {
              if (D instanceof K['Sv']) {
                this["joints"]["addChildAt"](D, g);
              } else {
                if (D instanceof K['Qs']) {
                  this['triggers']["addChildAt"](D, g);
                } else {
                  if (!(D instanceof K['DJ'])) {
                    throw new Error("what the f" + "uck is thi" + 's');
                  }
                  this["groups"]["addChildAt"](D, g);
                }
              }
            }
          }
          this["shapeCount"] = this["_mainCanva" + 's']["shapeCount"] + D["shapesUsed"];
          this['tooManySha' + "pes"] = this["_mainCanva" + 's']['shapeCount'] > J["maxShapes"];
          this["artCount"] = this["_artCount"] + D["artUsed"];
          this["tooMuchArt"] = this["_artCount"] > J["maxArt"];
          return D;
        } else {
          return this['_levelData' + 'Object'];
        }
      };
      A['removeRefS' + "prite"] = function (D) {


        if ("yqpOt" === 'yqpOt') {
          if (!(D instanceof K['$w'])) {
            throw new Error("attempted " + "to remove " + "non-refspr" + "ite from c" + "anvas");
          }
          var g = D;
          if (g instanceof K['HQ']) {
            this["shapes"]["removeChil" + 'd'](g);
          } else {
            if (g instanceof K['HR']) {
              this["special"]["removeChil" + 'd'](g);
            } else {
              if (g instanceof K['Sv']) {
                this["joints"]["removeChil" + 'd'](g);
              } else {
                if (g instanceof K['Qs']) {
                  this["triggers"]['removeChil' + 'd'](g);
                } else {
                  if (!(g instanceof K['DJ'])) {
                    throw new Error("what the f" + "uck is thi" + 's');
                  }
                  this["groups"]["removeChil" + 'd'](g);
                }
              }
            }
          }
          this["shapeCount"] = this["_mainCanva" + 's']["shapeCount"] - D['shapesUsed'];
          this["tooManySha" + "pes"] = this["_mainCanva" + 's']["shapeCount"] > J["maxShapes"];
          this["artCount"] = this["_artCount"] - D["artUsed"];
          this["tooMuchArt"] = this["_artCount"] > J['maxArt'];
          return D;
        } else {
          f['uO']["instance"]["hide"]();
          T && !this["spinActive"] ? (this["shakeActiv" + 'e'] = !0x1, this["shakeCount" + 'er'] = 0x0, this["spinActive"] = !0x0, this["shapeSprit" + 'e']['rotation'] -= this["shapeSprit" + 'e']["rotation"] % this["rotationPe" + "rStep"]) : V || (this["_disableSp" + 'in'] = !0x0);
        }
      };
      A["setTextFie" + 'ld'] = function () {


        if ("aaknx" !== "aaknx") {
          k["push"](C);
          var g = j['body1'];
          if (g && this != g && g["checkVehic" + 'leAttached'](P)) {
            return !0x0;
          }
          var S = R["body2"];
          if (S && this != S && S["checkVehic" + "leAttached"](K)) {
            return !0x0;
          }
        } else {
          this['textField']["htmlText"] = "shapes lef" + "t: " + (J["maxShapes"] - this["shapeCount"]) + ("<br>art le" + "ft: ") + (J["maxArt"] - this["artCount"]);
        }
      };
      A["shapeStatu" + "sHandler"] = function (D) {


        var g = D["target"];
        g['parent'] != this["shapes"] && g["parent"] != this["special"] || (this["shapeCount"] = this["_mainCanva" + 's']["shapeCount"] + D['value'], this["tooManySha" + "pes"] = this['_mainCanva' + 's']["shapeCount"] > J["maxShapes"]);
      };
      A["artStatusH" + "andler"] = function (D) {


        var g = D['target'];
        g['parent'] != this["shapes"] && g["parent"] != this["special"] || (this["artCount"] = this["_artCount"] + D["value"], this["tooMuchArt"] = this["_artCount"] > J["maxArt"]);
      };
      A["relabelTri" + "ggers"] = function () {


        if ("sVtAY" !== "sVtAY") {
          var S;
          (S = m["call"](this) || this)["_spaceActi" + 'on'] = 0x0;
          S['_shiftActi' + 'on'] = 0x0;
          S['_ctrlActio' + 'n'] = 0x0;
          S['_accelerat' + "ion"] = 0x1;
          S["_character" + "Pose"] = 0x0;
          S["_lockJoint" + 's'] = !0x1;
          S["_leaningSt" + 'rength'] = 0x0;
          S['name'] = "vehicle";
          return S;
        } else {
          for (var D = 0x0; D < this["triggers"]['numChildre' + 'n']; D++) {
            this["triggers"]['getChildAt'](D)['setNumLabe' + 'l'](D + 0x1);
          }
        }
      };
      A["redrawTrig" + "gers"] = function () {


        if ("AJPCQ" === "AJPCQ") {
          for (var D = 0x0; D < this["triggers"]["numChildre" + 'n']; D++) {
            this["triggers"]["getChildAt"](D)["drawShape"]();
          }
        } else {
          var S = this['ropeSpring' + 's'][n];
          S["resolve"]();
        }
      };
      A["redrawJoin" + 'ts'] = function () {


        for (var D = 0x0; D < this["joints"]["numChildre" + 'n']; D++) {
          this["joints"]["getChildAt"](D)["drawArms"]();
        }
      };
      return I(J, [{
        'key': "shapeCount",
        'get': function () {


          if ("uxStU" === "uxStU") {
            return this["_shapeCoun" + 't'];
          } else {
            var g = R['lv'][0x0];
            K["_levelData" + 'Object'] = new m['m'](g["@id"], g["@ln"], g["@ui"], g["@un"], g["@rg"], g["@vs"], g["@ps"], g["@dp"], g['uc'][0x0]["cdata"], g["@pc"], '1', '1', '1', g["@dp"]);
            var S = I['rp'][0x0];
            k["_replayDat" + "aObject"] = new j['J'](S["@id"], S["@li"], S["@ui"], S["@un"], S["@rg"], S["@vs"], S["@vw"], S["@dc"], S['uc'][0x0]["cdata"], S["@pc"], S["@ct"], S["@ar"], S["@vr"]);
            var z = new J['Jh'](B["REPLAY_AND" + "_LEVEL_LOA" + "DED"]);
            z["target"] = u;
            B['dispatchEv' + "ent"](z);
          }
        },
        'set': function (D) {


          this["_shapeCoun" + 't'] = D;
          this["setTextFie" + 'ld']();
        }
      }, {
        'key': "artCount",
        'get': function () {


          if ("kfKtX" === 'kfKtX') {
            return this["_artCount"];
          } else {
            if ("object" != typeof P || !p) {
              return K;
            }
            var g = m[I["toPrimitiv" + 'e']];
            if (void 0x0 !== g) {
              var S = g["call"](u, "string");
              if ("object" != typeof S) {
                return S;
              }
              throw new l("@@toPrimit" + 'ive\x20must\x20r' + "eturn a pr" + 'imitive\x20va' + "lue.");
            }
            return J(B);
          }
        },
        'set': function (D) {
          this['_artCount'] = D;
          this['setTextFie' + 'ld']();
        }
      }, {
        'key': "tooManySha" + "pes",
        'get': function () {


          if ("UGrHR" !== "UGrHR") {
            var g = (0x0, T['Wh'])(V(k["@b2"])['substring'](0x1));
            C["body2"] = this["canvas"]["groups"]["getChildAt"](g);
          } else {
            return this["_tooManySh" + "apes"];
          }
        },
        'set': function (D) {


          D != this["_tooManySh" + "apes"] && (this["_tooManySh" + "apes"] = D, this["dispatchEv" + "ent"](new j['Jh'](J["SHAPE_LIMI" + "T_STATUS"])));
        }
      }, {
        'key': "tooMuchArt",
        'get': function () {

          return this["_tooMuchAr" + 't'];
        },
        'set': function (D) {


          D != this["_tooMuchAr" + 't'] && (this["_tooMuchAr" + 't'] = D, this["dispatchEv" + "ent"](new j['Jh'](J["ART_LIMIT_" + "STATUS"])));
        }
      }], [{
        'key': "backDropIn" + 'dex',
        'get': function () {


          return J["_backDropI" + "ndex"];
        },
        'set': function (D) {


          "iCxYS" === "iCxYS" ? J["_backDropI" + "ndex"] = D : (this['mc']["helpText"]["_pixiSprit" + 'e']["destroy"]({
            'children': !0x0,
            'texture': !0x0,
            'baseTexture': !0x0
          }), this["searchText"]["destroy"](), this['mc']["removeChil" + 'd'](this["searchText"]), this["searchText"] = null, n["prototype"]["destroy"]["call"](this));
        }
      }, {
        'key': 'background' + "Color",
        'get': function () {


          return J["_backgroun" + "dColor"];
        },
        'set': function (D) {


          J["_backgroun" + "dColor"] = D;
        }
      }, {
        'key': "canvasWidt" + 'h',
        'get': function () {
          return J['_canvasWid' + 'th'];
        }
      }, {
        'key': "canvasHeig" + 'ht',
        'get': function () {


          if ("YVGqV" === 'YVGqV') {
            return J["_canvasHei" + "ght"];
          } else {
            var g = (0x0, T['Wh'])(V(k["@b1"])["substring"](0x1));
            C["body1"] = this['canvas']["groups"]["getChildAt"](g);
          }
        }
      }]);
    } else {
      var g;
      var S = A[E];
      var z = R['p'];
      var F = S[0x2];
      W > 0x3 ? (g = F === A) && (P = S[(J = S[0x4]) ? 0x5 : (D = 0x3, 0x3)], S[0x4] = S[0x5] = g) : S[0x0] <= z && ((g = S < 0x2 && z < S[0x1]) ? (E = 0x0, z['v'] = F, M['n'] = S[0x1]) : z < F && (g = H < 0x3 || S[0x0] > b || Z > F) && (S[0x4] = y, S[0x5] = u, X['n'] = F, x = 0x0));
    }
  }(j['kx']);
  E["SHAPE_LIMI" + "T_STATUS"] = "shapelimit" + "status";
  E["ART_LIMIT_" + "STATUS"] = "artlimitst" + "atus";
  E['_canvasWid' + 'th'] = 0x4e20;
  E["_canvasHei" + 'ght'] = 0x2710;
  E['_backDropI' + "ndex"] = 0x0;
  E["_backgroun" + "dColor"] = 0xffffff;
  E["maxShapes"] = 0x384;
  E["maxArt"] = 0x2710;
  var R = function (W) {

    if ('rtskR' === "rtskR") {
      function J(D, g, S) {
        var z;
        (z = W["call"](this) || this)["_mainCanva" + 's'] = g;
        z["_refGroup"] = D;
        z['_groupInde' + 'x'] = S;
        z["doubleClic" + "kEnabled"] = !0x0;
        z["isGroupCan" + "vas"] = !0x0;
        z["groupCanva" + 'sInit']();
        z["createText" + "Field"]();
        return z;
      }
      B(J, W);
      var A = J["prototype"];
      A["init"] = function () {};
      A["groupCanva" + "sInit"] = function () {
        J["_canvasWid" + 'th'] = 0x4e20;
        J["_canvasHei" + "ght"] = 0x2710;
        this["graphics"]["beginFill"](0x999999, 0.35);
        this["graphics"]["drawRect"](0x0, 0x0, J['_canvasWid' + 'th'], J["_canvasHei" + "ght"]);
        this["graphics"]["endFill"]();
        this["graphics"]['lineStyle'](0x0, 0xffffff, 0x1, !0x0);
        this["graphics"]["moveTo"](this["_refGroup"]['x'] - 0x5, this["refGroup"]['y']);
        this["graphics"]["lineTo"](this['_refGroup']['x'] + 0x5, this['refGroup']['y']);
        this['graphics']['moveTo'](this["_refGroup"]['x'], this["refGroup"]['y'] - 0x5);
        this['graphics']["lineTo"](this["_refGroup"]['x'], this["refGroup"]['y'] + 0x5);
        this["shapes"] = new j['kx']();
        this["shapes"]['name'] = "shapes";
        this["special"] = new j['kx']();
        this["special"]["name"] = "special";
        this["addChild"](this["shapes"]);
        this["addChild"](this['special']);
        this["addEventLi" + 'stener'](P['N3']["ART"], this["artStatusH" + "andler"], !0x1, 0x0, !0x0);
        this["addEventLi" + "stener"](P['N3']["SHAPE"], this["shapeStatu" + "sHandler"], !0x1, 0x0, !0x0);
      };
      return I(J, [{
        'key': 'shapeCount',
        'get': function () {
          if ("zDTMa" === 'zDTMa') {
            return this['_mainCanva' + 's']["shapeCount"];
          } else {
            T || (V = this["saverLoade" + 'r']["createXML"]()['toString']());
            k['T6']["getLocal"]("editorLeve" + "l135")["data"]["editorLeve" + "lData"] = C;
          }
        },
        'set': function (D) {
          this['_mainCanva' + 's']["shapeCount"] = D;
        }
      }, {
        'key': "refGroup",
        'get': function () {
          if ("huQkY" === "huQkY") {
            return this["_refGroup"];
          } else {
            this["_attribute" + 's'] = ['x', 'y'];
            this["forceDirty"]();
          }
        }
      }, {
        'key': "groupIndex",
        'get': function () {

          if ('wHLQk' !== "wHLQk") {
            var g = function (S) {
              if ("object" != typeof S || !S) {
                return S;
              }
              var z = S[g["toPrimitiv" + 'e']];
              if (void 0x0 !== z) {
                var F = z["call"](S, 'string');
                if ("object" != typeof F) {
                  return F;
                }
                throw new K('@@toPrimit' + 'ive\x20must\x20r' + "eturn a pr" + "imitive va" + "lue.");
              }
              return R(S);
            }(C);
            return "symbol" == typeof g ? g : g + '';
          } else {
            return this["_groupInde" + 'x'];
          }
        }
      }]);
    } else {
      this["_tweenVal"] = V;
      this["levelSelec" + "tion"]["maskHeight"] = h["round"](this["levelSelec" + "tion"]["fullHeight"] * C);
      this['organizeLi' + 'st']();
      this["dispatchEv" + "ent"](new j['Jh'](P['UPDATE_SCR' + "OLLER"]));
    }
  }(E);
}