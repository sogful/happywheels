function (T, V, h) {
  'use strict';

  if ("gUHys" !== "gUHys") {
    void 0x0 === p && (K = !0x1);
    this['removeEven' + "tListener"](m['Jh']["ENTER_FRAM" + 'E'], this["runBind"]);
    this["timeIntegr" + "ity"] && (this["timeIntegr" + "ity"]["stop"](), this["timeIntegr" + "ity"] = null);
    this["_level"]["endBlock"] && this["_level"]["endBlock"]["removeEven" + "tListener"](I['b9']["COMPLETED"], this["levelCompl" + "eteBind"]);
    this["_flips"] = null;
    this["_magnet"] = null;
    this['_character']["removeKeyL" + "isteners"]();
    this["_character"]['removeEven' + "tListener"](k['c0']["ADD_ENTRY"], this["addReplayE" + "ntryBind"]);
    this["_character"]["die"]();
    this["_character"] = null;
    f && this["_level"]['destroyRef' + 's']();
    this["_level"]["die"]();
    this["_level"] = null;
    n && (this["m_world"]["Destroy"](!0x0), this["m_world"] = null);
    this['_particleC' + "ontroller"]['die']();
    this["_particleC" + "ontroller"] = null;
    B['m']["instance"]["stopAllSou" + "nds"]();
    u['m']["instance"]["systemUnMu" + 'te']();
    this['mobileCont' + 'rols'] && (this["mobileCont" + "rols"]["destroy"](), this["removeChil" + 'd'](this["mobileCont" + "rols"]), this['mobileCont' + "rols"] = null);
    this["_camera"] = null;
    this["_replayDat" + 'a'] = null;
    this["_contactLi" + "stener"]["die"]();
    this["_contactLi" + "stener"] = null;
    this["debug_spri" + 'te'] && (this["debug_spri" + 'te']['graphics']["destroy"](), this["_container" + "Sprite"]["removeChil" + 'd'](this['debug_spri' + 'te']), this["debug_spri" + 'te'] = null);
    this['_container' + "Sprite"]["parent"] && this["_container" + "Sprite"]["parent"]['removeChil' + 'd'](this['_container' + 'Sprite']);
    this["fpsText"] && (this["fpsText"]["destroy"](), this["fpsText"]["parent"]["removeChil" + 'd'](this["fpsText"]), this["fpsText"] = null);
    l && (this["_container" + "Sprite"]["destroy"](), this['_container' + "Sprite"] = null, this["destroy"]());
  } else {
    'use strict';
    h['d'](V, {
      'J': () => j
    });
    h(0xb4c);
    h(0x65f3);
    h(0x977d);
    h(0x7022);
    h(0xb284);
    h(0x15de4);
    h(0xcdc3);
    h(0x15d77);
    var C = h(0x41a);
    function p(K) {

      var m = function (I) {
        if ("object" != typeof I || !I) {
          return I;
        }
        var k = I[Symbol["toPrimitiv" + 'e']];
        if (void 0x0 !== k) {
          if ("WQcvp" !== "WQcvp") {
            this["ejected"] ? this["currentPos" + 'e'] = 0x3 : (this["bigWheelJo" + "int"]['IsMotorEna' + "bled"]() || this["bigWheelJo" + "int"]['EnableMoto' + 'r'](!0x0), this["wheelCurre" + "ntSpeed"] = this["bigWheelJo" + "int"]["GetJointSp" + "eed"](), this["wheelCurre" + "ntSpeed"] < 0x0 ? this["wheelNewSp" + "eed"] = 0x0 : this["wheelNewSp" + "eed"] = this["wheelCurre" + "ntSpeed"] < this["wheelMaxSp" + "eed"] ? this['wheelCurre' + "ntSpeed"] + this["accelStep"] : this["wheelCurre" + "ntSpeed"], this["bigWheelJo" + "int"]["SetMotorSp" + "eed"](this['wheelNewSp' + 'eed']), this['currentPos' + 'e'] = 0x5);
          } else {
            var B = k['call'](I, "string");
            if ("object" != typeof B) {
              return B;
            }
            throw new TypeError("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
          }
        }
        return String(I);
      }(K);
      return "symbol" == typeof m ? m : m + '';
    }
    var j = function () {


      if ("fQwwK" !== "AtHsh") {
        function k(E, R, W, A, J, D, z, F, M, H, b, Z, X) {
          if ("btZqq" !== "kviAe") {
            void 0x0 === E && (E = null);
            void 0x0 === R && (R = null);
            void 0x0 === W && (W = null);
            void 0x0 === A && (A = null);
            void 0x0 === J && (J = null);
            void 0x0 === D && (D = null);
            void 0x0 === z && (z = null);
            void 0x0 === F && (F = null);
            void 0x0 === M && (M = null);
            void 0x0 === H && (H = null);
            void 0x0 === b && (b = null);
            void 0x0 === Z && (Z = null);
            void 0x0 === X && (X = null);
            this["_id"] = parseInt(E);
            this["_level_id"] = parseInt(R);
            this["_user_id"] = parseInt(W);
            this["_user_name"] = String(A);
            this["_weighted_" + "rating"] = Number(J);
            this["_votes"] = parseInt(D);
            this["_average_r" + "ating"] = this["getAverage" + "Rating"](this["_weighted_" + "rating"], this["_votes"]);
            this["_views"] = parseInt(z);
            this["_comments"] = M ? C['l5']["removeSlas" + "hes"](String(M)) : '';
            this["_character"] = parseInt(H);
            this["_timeFrame" + 's'] = parseInt(b);
            this["_timeSecon" + 'ds'] = parseInt(b) / 0x1e;
            this['_architect' + "ure"] = String(Z);
            this["_version"] = Number(X);
            var x = String(F);
            var w = Number(x["substr"](0x0, 0x4));
            var Y = Number(x["substr"](0x5, 0x2)) - 0x1;
            var L = Number(x["substr"](0x8, 0x2));
            var U = Number(x["substr"](0xb, 0x2));
            var O = Number(x["substr"](0xe, 0x2));
            var G = Number(x["substr"](0x11, 0x2));
            this["_created"] = new Date(w, Y, L, U, O, G);
          } else {
            f["__proto__"] = T;
            return V;
          }
        }
        var K;
        var m;
        var I = k['prototype'];
        I["getAverage" + "Rating"] = function (u, l) {
          var E = 0x0 == l ? 0x0 : (u - 0x19 / (l + 0xa)) / (l / (l + 0xa));
          return Math["min"](0x5, Math["max"](E, 0x0));
        };
        I["toString"] = function () {
          var u = "replaydata" + "obj: ";
          return (u = (u = (u = (u = (u = (u = (u = (u = (u = (u = (u = (u = (u = (u = u["concat"]("id = " + this["_id"] + ',\x20'))["concat"]("level_id =" + '\x20' + this["_level_id"] + ',\x20'))["concat"]("user_id = " + this["_user_id"] + ',\x20'))["concat"]("user_name " + '=\x20' + this["_user_name"] + ',\x20'))["concat"]("weighted_r" + "ating = " + this['_weighted_' + "rating"] + ',\x20'))["concat"]("average_ra" + 'ting\x20=\x20' + this['_average_r' + "ating"] + ',\x20'))["concat"]("votes = " + this["_votes"] + ',\x20'))["concat"]("views = " + this["_views"] + ',\x20'))["concat"]("created = " + this["_created"] + ',\x20'))["concat"]("comments =" + '\x20' + this["_comments"] + ',\x20'))["concat"]("character " + '=\x20' + this['_character'] + ',\x20'))['concat']("timeFrames" + " = " + this["_timeFrame" + 's'] + ',\x20'))["concat"]('timeSecond' + "s = " + this["_timeSecon" + 'ds'] + ',\x20'))["concat"]("architectu" + "re = " + this["_architect" + "ure"] + ',\x20'))["concat"]("version = " + this['_version'] + ',\x20');
        };
        I["clone"] = function () {
          return "hswND" !== "KGpeR" ? new k(this["_id"], this["_user_id"], this["_user_name"], this["_weighted_" + "rating"], this["_votes"], this["_views"], this["_created"], this["_comments"], this["_character"], this["_timeFrame" + 's'], this["_architect" + "ure"], this["_version"]) : (f['__proto__'] = T, V);
        };
        K = k;
        (m = [{
          'key': 'id',
          'get': function () {
            return "blJoT" !== "blJoT" ? (void 0x0 === m && (I = 0x3e8), k["call"](this, f, n, B, u, l, o, N, E, R) || this) : this["_id"];
          },
          'set': function (u) {
            this["_id"] = u;
          }
        }, {
          'key': "level_id",
          'get': function () {
            return this['_level_id'];
          }
        }, {
          'key': "user_id",
          'get': function () {
            if ("DOICP" === "zXZEu") {
              var l = this["frameBody"]["GetPositio" + 'n']()['y'];
              "world" !== f ? null === this["jumpFromY"] || this["jumpFromY"] - l < 0xa || (this["highJumpDo" + 'ne'] = !0x0, T['YC']["unlockAchi" + "evement"](V['Ek']["POGO_10_ME" + 'TERS_HIGH'])) : this['jumpFromY'] = l;
            } else {
              return this["_user_id"];
            }
          }
        }, {
          'key': "user_name",
          'get': function () {
            if ("kpZrg" !== 'EmMxK') {
              return this["_user_name"];
            } else {
              for (var l = 0x0; l < V["length"]; l++) {
                var E = p[l];
                E["enumerable"] = E["enumerable"] || !0x1;
                E["configurab" + 'le'] = !0x0;
                "value" in E && (E["writable"] = !0x0);
                K["defineProp" + "erty"](m, I(E["key"]), E);
              }
            }
          }
        }, {
          'key': "weighted_r" + 'ating',
          'get': function () {
            return this["_weighted_" + "rating"];
          }
        }, {
          'key': "average_ra" + "ting",
          'get': function () {
            if ("EGjdO" === "EGjdO") {
              return this["_average_r" + "ating"];
            } else {
              var l = j["CreateBody"](P);
              var E = this["vertsBroke" + "nCopter"][p];
              var R = this["brokenCopt" + 'erMCs'][K];
              m["vertexCoun" + 't'] = E["length"];
              I["vertices"] = E;
              l['CreateShap' + 'e'](k);
              l['SetMassFro' + "mShapes"]();
              l["SetAngular" + 'Velocity'](f);
              l["SetLinearV" + "elocity"](this["copterBody"]["GetLinearV" + "elocityFro" + 'mLocalPoin' + 't'](l["GetLocalCe" + "nter"]()));
              l["SetUserDat" + 'a'](R);
              R['visible'] = !0x0;
              this['paintVecto' + 'r']["push"](l);
            }
          }
        }, {
          'key': "votes",
          'get': function () {
            return 'YOBAE' !== "YOBAE" ? this['userData']["owner"] || null : this['_votes'];
          }
        }, {
          'key': "views",
          'get': function () {
            return "jZvtZ" === "gLSrV" ? this['_character' + "Data"] : this["_views"];
          }
        }, {
          'key': "created",
          'get': function () {
            if ("qnbMv" === "qnbMv") {
              return this["_created"];
            } else {
              this['_id'] = n;
            }
          }
        }, {
          'key': "comments",
          'get': function () {
            if ("rZyvd" !== "zSzYi") {
              return this["_comments"];
            } else {
              var l = p[K];
              var E = m[I + 0x1];
              k["Initialize"](l, E, l["GetPositio" + 'n'](), E["GetPositio" + 'n']());
              f["length"] = n;
              B['collideCon' + 'nected'] = !0x1;
              this["vertebraJo" + "ints"]["push"](u["CreateJoin" + 't'](l));
            }
          }
        }, {
          'key': "character",
          'get': function () {
            return this["_character"];
          }
        }, {
          'key': "timeFrames",
          'get': function () {
            if ("bwedJ" === "epCIE") {
              var l = f["call"](T, "string");
              if ("object" != typeof l) {
                return l;
              }
              throw new V("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
            } else {
              return this['_timeFrame' + 's'];
            }
          }
        }, {
          'key': "timeSecond" + 's',
          'get': function () {
            return this["_timeSecon" + 'ds'];
          }
        }, {
          'key': "architectu" + 're',
          'get': function () {
            return this["_architect" + 'ure'];
          }
        }, {
          'key': 'version',
          'get': function () {
            return this["_version"];
          }
        }]) && function (u, l) {
          for (var E = 0x0; E < l["length"]; E++) {
            if ("dJnCM" === "dJnCM") {
              var R = l[E];
              R['enumerable'] = R["enumerable"] || !0x1;
              R['configurab' + 'le'] = !0x0;
              "value" in R && (R["writable"] = !0x0);
              Object["defineProp" + 'erty'](u, p(R["key"]), R);
            } else {
              n = 0x0;
            }
          }
        }(K["prototype"], m);
        Object["defineProp" + "erty"](K, 'prototype', {
          'writable': !0x1
        });
        return K;
      } else {
        var u = -this["jointMotor" + "Speeds"][K];
        if (u >= 0x0) {
          var l = this["handlePosi" + "tiveSpeed"](m, u, I);
        } else {
          l = this['handleNega' + "tiveSpeed"](k, u, f);
        }
        if (n["IsLimitEna" + 'bled']()) {
          var E = E["GetJointAn" + "gle"]();
          E > R["m_upperAng" + 'le'] && l > 0x0 && W["SetMotorSp" + "eed"](0x0);
          E < A["m_lowerAng" + 'le'] && l < 0x0 && p["SetMotorSp" + "eed"](0x0);
        }
      }
    }();
  }
}