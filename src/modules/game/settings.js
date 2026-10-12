function (T, V, C) {
  'use strict';

  C['d'](V, {
    'w': () => I
  });
  C(0xb284);
  C(0x15de4);
  C(0xcdc3);
  C(0x15d77);
  C(0x65f3);
  C(0xb4c);
  C(0x13648);
  C(0x7d8);
  C(0x1478b);
  C(0x5bcc);
  C(0x13d7e);
  var j;
  var P = C(0xb65a);
  function p(k, B) {
    var u = Object['keys'](k);
    if (Object["getOwnProp" + "ertySymbol" + 's']) {
      var l = Object['getOwnProp' + "ertySymbol" + 's'](k);
      B && (l = l['filter'](function (E) {


        if ("WGiTw" === "WGiTw") {
          return Object["getOwnProp" + "ertyDescri" + 'ptor'](k, E)["enumerable"];
        } else {
          this["updateCOMV" + "alues"]();
          if (this["airLean"]) {
            return;
          }
          if (this["velocityCO" + 'M']['y'] > 0x0) {
            var W = this['velocityCO' + 'M']['y'] / this['verticalVe' + 'locityThre' + "shold"];
            W = k['min'](0x1, W);
            var A = this["targetAngl" + 'e'] * (0x1 - W) + (this["velocityAn" + "gle"] - l['PI']) * W;
          } else {
            W = -this["velocityCO" + 'M']['y'] / this['verticalVe' + "locityThre" + "shold"];
            W = P["min"](0x1, W);
            A = this['targetAngl' + 'e'] * (0x1 - W) + this["velocityAn" + 'gle'] * W;
          }
          var J = A - this["pivotAngle"];
          J > p['PI'] && (J -= 0x2 * K['PI']);
          J < -m['PI'] && (J += 0x2 * I['PI']);
          var D = 0x1e * J;
          D < 0x2 * -this["maxSpinAV"] && (D = 0x2 * -this["maxSpinAV"]);
          D > 0x2 * this["maxSpinAV"] && (D = 0x2 * this["maxSpinAV"]);
          this["frameBody"]["SetAngular" + "Velocity"](D);
        }
      }));
      u["push"]["apply"](u, l);
    }
    return u;
  }
  function K(k, B, u) {
    (B = m(B)) in k ? Object["defineProp" + "erty"](k, B, {
      'value': u,
      'enumerable': !0x0,
      'configurable': !0x0,
      'writable': !0x0
    }) : k[B] = u;
    return k;
  }
  function m(k) {
    if ("GywOX" !== "Xuwiq") {
      var B = function (u) {


        if ("object" != typeof u || !u) {
          return u;
        }
        var l = u[Symbol["toPrimitiv" + 'e']];
        if (void 0x0 !== l) {
          var E = l["call"](u, "string");
          if ("object" != typeof E) {
            return E;
          }
          throw new TypeError("@@toPrimit" + "ive must r" + 'eturn\x20a\x20pr' + "imitive va" + "lue.");
        }
        return String(u);
      }(k);
      return "symbol" == typeof B ? B : B + '';
    } else {
      N["dispatchEv" + "ent"](f["clone"]());
    }
  }
  var I = function () {
    function k() {}
    B = k;
    (u = [{
      'key': "mobileCont" + 'rols',
      'get': function () {


        return null === k["mobileCont" + "rolOverrid" + 'e'] ? P["WpD"]["isMobile"]['any'] : k["mobileCont" + "rolOverrid" + 'e'];
      }
    }, {
      'key': "currentSes" + "sion",
      'get': function () {

        return k["session"];
      },
      'set': function (l) {

        k["session"] = l;
      }
    }]) && function (l, E) {


      if ("IEPan" !== "IEPan") {
        f["__proto__"] = T;
        return V;
      } else {
        for (var R = 0x0; R < E["length"]; R++) {
          if ("QwGtn" !== 'QwGtn') {
            void 0x0 === W && (E = null);
            B["levelSearc" + 'h'] = null;
            u["authorName" + "Search"] = null;
            l["_favorites"] = !0x1;
            p["_favorites" + 'UserId'] = 0x0;
            R["_downloads"] = !0x1;
            E["searchTerm" + "Button"]["removeEven" + "tListener"](R['Cm']["MOUSE_UP"], W['removeSear' + "chTerm"]);
            A["removeChil" + 'd'](P['searchTerm' + "Button"]);
            J["searchTerm" + 'Button']["destroy"]();
            D["searchTerm" + "Button"] = null;
            g["dropMenuSe" + 'lected']();
          } else {
            var W = E[R];
            W["enumerable"] = W["enumerable"] || !0x1;
            W["configurab" + 'le'] = !0x0;
            "value" in W && (W["writable"] = !0x0);
            Object["defineProp" + "erty"](l, m(W["key"]), W);
          }
        }
      }
    }(B, u);
    Object["defineProp" + "erty"](B, "prototype", {
      'writable': !0x1
    });
    return B;
    var B;
    var u;
  }();
  j = I;
  I["mobileCont" + "rolOverrid" + 'e'] = null;
  I["useDebug"] = !0x1;
  I["uploadGrap" + 'hics'] = !0x0;
  I["enableAudi" + 'o'] = !0x0;
  I["CURRENT_VE" + "RSION"] = 2.01;
  I["CURRENT_VE" + "RSION_STRI" + 'NG'] = "1.99.2";
  I["showAdvanc" + "edStats"] = !0x1;
  I["showCullBo" + "unds"] = !0x1;
  I["user_id"] = -0x1;
  I["disableMes" + "sage"] = "Uploading " + 'new\x20data\x20i' + "s temporar" + "ily disabl" + "ed. I'M SO" + "RRY!";
  I["registerLo" + 'ginMessage'] = "Login or r" + "egister fo" + 'r\x20free\x20up\x20' + "there on t" + 'he\x20right.';
  I["editorLogi" + "nMessage"] = "Login or r" + 'egister\x20fo' + "r free abo" + "ve to save" + " and share" + " your crea" + "tions with" + " others wh" + 'o\x20might\x20po' + "ssibly car" + 'e.';
  I["newerVersi" + 'onLevelMes' + "sage"] = 'This\x20Level' + " is from a" + " newer ver" + "sion of Ha" + 'ppy\x20Wheels' + ".  Clear c" + "ache and r" + "eload";
  I["newerVersi" + "onReplayMe" + "ssage"] = "This repla" + 'y\x20is\x20from\x20' + "a newer ve" + "rsion of H" + "appy Wheel" + 's.\x20\x20Clear\x20' + "cache and " + 'reload';
  I["numBackgro" + "undLayers"] = 0x5;
  I["siteURL"] = "http://www" + ".totaljerk" + 'face.com/';
  I["currentlyI" + "nEditor"] = !0x1;
  I["currentlyC" + "olorDroppe" + "rOpen"] = !0x1;
  I['hideHUD'] = !0x1;
  I["textureRes" + "olution"] = "high";
  I["use60FPS"] = !0x1;
  I["characterI" + "ndex"] = 0x1;
  I["hideVehicl" + 'e'] = !0x1;
  I['levelIndex'] = 0x1;
  I['bdIndex'] = 0x0;
  I["bdColor"] = 0xffffff;
  I["renderReso" + "lutionIncr" + "ease"] = 0x2;
  I["showArrowI" + "nOptionsMe" + 'nu'] = !0x1;
  I["bloodSetti" + 'ng'] = 0x1;
  I["YParticleL" + 'imit'] = 0x352;
  I["maxReplayF" + 'rames'] = 0x1770;
  I["characterN" + "ames"] = ["wheelchair" + " guy", "segway guy", "irresponsi" + "ble dad", "effective " + "shopper", "moped coup" + 'le', "lawnmower " + 'man', "explorer g" + 'uy', "santa clau" + 's', "pogostick " + "man", "irresponsi" + "ble mom", "helicopter" + " man"];
  I["shapeList"] = ["RectangleS" + "hape", 'CircleShap' + 'e', "TriangleSh" + "ape", "PolygonSha" + 'pe', "ArtShape"];
  I["specialLis" + 't'] = ['VanRef', "TableRef", "MineRef", "IBeamRef", "LogRef", "SpringBoxR" + 'ef', "SpikesRef", "WreckingBa" + "llRef", "FanRef", "FinishLine" + 'Ref', 'SoccerBall' + "Ref", "MeteorRef", "BoostRef", "Building1R" + 'ef', "Building2R" + 'ef', "HarpoonGun" + "Ref", "TextBoxRef", "NPCharacte" + "rRef", "GlassRef", "ChairRef", "BottleRef", "TVRef", 'BoomboxRef', "SignPostRe" + 'f', "ToiletRef", "HomingMine" + "Ref", "TrashCanRe" + 'f', "RailRef", "JetRef", "ArrowGunRe" + 'f', "ChainRef", "TokenRef", "FoodItemRe" + 'f', "CannonRef", "BladeWeapo" + "nRef", 'PaddleRef'];
  I["totalChara" + 'cters'] = 0xb;
  I['favoriteLe' + 'velIds'] = [];
  I["debugOptio" + 'ns'] = {};
  I["accelerate" + "DefaultCod" + 'e'] = 0x26;
  I["decelerate" + "DefaultCod" + 'e'] = 0x28;
  I['leanForwar' + "dDefaultCo" + 'de'] = 0x27;
  I["leanBackDe" + "faultCode"] = 0x25;
  I["primaryAct" + 'ionDefault' + "Code"] = 0x20;
  I["secondaryA" + "ction1Defa" + "ultCode"] = 0x10;
  I["secondaryA" + "ction2Defa" + "ultCode"] = 0x11;
  I['ejectDefau' + "ltCode"] = 0x5a;
  I["switchCame" + "raDefaultC" + "ode"] = 0x43;
  I["accelerate" + "Code"] = j["accelerate" + "DefaultCod" + 'e'];
  I["decelerate" + "Code"] = j['decelerate' + "DefaultCod" + 'e'];
  I["leanForwar" + "dCode"] = j["leanForwar" + "dDefaultCo" + 'de'];
  I["leanBackCo" + 'de'] = j["leanBackDe" + "faultCode"];
  I["primaryAct" + "ionCode"] = j["primaryAct" + "ionDefault" + "Code"];
  I["secondaryA" + "ction1Code"] = j["secondaryA" + "ction1Defa" + "ultCode"];
  I["secondaryA" + "ction2Code"] = j["secondaryA" + "ction2Defa" + "ultCode"];
  I["ejectCode"] = j['ejectDefau' + "ltCode"];
  I["switchCame" + "raCode"] = j["switchCame" + "raDefaultC" + "ode"];
  I["gamepadDef" + 'aultBindin' + 'gs'] = {
    'b7': "accelerate",
    'b6': "decelerate",
    'b0': 'primaryAct' + "ion",
    'b4': "secondaryA" + "ction1",
    'b5': "secondaryA" + "ction2",
    'b1': 'eject',
    'b8': "switchCame" + 'ra',
    'b11': "toggleCurs" + 'or',
    'b15': 'leanForwar' + 'd',
    'b14': "leanBack",
    'a0+': "leanForwar" + 'd',
    'a0-': 'leanBack'
  };
  I['gamepadBin' + "dings"] = function (k) {


    for (var B = 0x1; B < arguments["length"]; B++) {
      var u = null != arguments[B] ? arguments[B] : {};
      B % 0x2 ? p(Object(u), !0x0)["forEach"](function (l) {
        K(k, l, u[l]);
      }) : Object["getOwnProp" + 'ertyDescri' + 'ptors'] ? Object['defineProp' + "erties"](k, Object["getOwnProp" + "ertyDescri" + "ptors"](u)) : p(Object(u))["forEach"](function (l) {
        if ("yzthR" === "onyYr") {
          this['reference'] = null;
          "traitRefer" + "ences" !== N && (this["flags"] = this['readUInt29']());
          var R = !this["popFlag"]();
          R && (this['reference'] = this[f][this["flags"]]);
          return R;
        } else {
          Object["defineProp" + "erty"](k, l, Object["getOwnProp" + 'ertyDescri' + "ptor"](u, l));
        }
      });
    }
    return k;
  }({}, j["gamepadDef" + "aultBindin" + 'gs']);
}