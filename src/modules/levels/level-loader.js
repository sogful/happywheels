function (T, V, C) {
  'use strict';

  if ("CpSdZ" === "CpSdZ") {
    'use strict';
    C['d'](V, {
      'H': () => K
    });
    C(0x7d8);
    C(0xf23a);
    C(0x6b67);
    C(0x16278);
    C(0xb4c);
    C(0xd51a);
    C(0x87de);
    C(0xb284);
    C(0x15de4);
    C(0xcdc3);
    C(0x15d77);
    C(0x65f3);
    var j = C(0x136b);
    var P = C(0x5ab6);
    var p = C(0xdf78);
    function I(B) {


      if ("tyBnp" === 'tyBnp') {
        var u = function (E) {
          if ("object" != typeof E || !E) {
            return E;
          }
          var R = E[Symbol["toPrimitiv" + 'e']];
          if (void 0x0 !== R) {
            var W = R["call"](E, "string");
            if ("object" != typeof W) {
              return W;
            }
            throw new TypeError("@@toPrimit" + "ive must r" + "eturn a pr" + "imitive va" + "lue.");
          }
          return String(E);
        }(B);
        return "symbol" == typeof u ? u : u + '';
      } else {
        this["pogoJoint"]["SetMotorSp" + "eed"](this["bounceSpee" + 'd']);
        this["jumpFrames"] = this['jumpFrames' + "Max"];
        var E = T["min"](0x1, V["max"](-h * this["m_physScal" + 'e'] / 0x28, 0x0));
        C['m']["instance"]["playAreaSo" + "undInstanc" + 'e']("PogoReleas" + 'e2', this["frameBody"], E);
      }
    }
    function m(B, u) {


      m = Object['setPrototy' + "peOf"] ? Object["setPrototy" + "peOf"]["bind"]() : function (l, E) {
        if ("dbREq" !== "dbREq") {
          this["shiftKey"]["alpha"] = 0.2;
        } else {
          l["__proto__"] = E;
          return l;
        }
      };
      return m(B, u);
    }
    var K = function (B) {


      function u(D, g) {
        if ("TimeH" === "TimeH") {
          var S;
          (S = B["call"](this) || this)["_levelVers" + "ion"] = 0x0;
          S["session"] = g;
          S['m_physScal' + 'e'] = g["m_physScal" + 'e'];
          S["levelData"] = D;
          S["_levelVers" + "ion"] = g["levelVersi" + 'on'];
          D["getChildBy" + "Name"]("shapeGuide") && (S["shapeGuide"] = D["getChildBy" + "Name"]("shapeGuide"), S["shapeGuide"]['x'] = 0x0, S["shapeGuide"]['y'] = 0x0);
          return S;
        } else {
          f["__proto__"] = T;
          return V;
        }
      }
      var E;
      var R;
      R = B;
      (E = u)["prototype"] = Object["create"](R["prototype"]);
      E["prototype"]["constructo" + 'r'] = E;
      m(E, R);
      var W;
      var A;
      var J = u["prototype"];
      J['create'] = function () {
        this["paintBodyV" + "ector"] = new Array();
        this["paintItemV" + "ector"] = new Array();
        this["actionsVec" + 'tor'] = new Array();
        this['actionsToR' + "emove"] = new Array();
        this["singleActi" + "onVector"] = new Array();
        this["keepVector"] = new Array();
        this['_session']["containerS" + "prite"]["addChildAt"](this["shapeGuide"], 0x0);
        this["createBack" + "Drops"]();
        this["createMovi" + 'eClips']();
        this["createStat" + "icShapes"]();
        this["createDyna" + "micShapes"]();
        this["createItem" + 's']();
      };
      J["reset"] = function () {
        this["paintBodyV" + "ector"] = new Array();
        this["paintItemV" + "ector"] = new Array();
        this["actionsVec" + "tor"] = new Array();
        this["actionsToR" + "emove"] = new Array();
        this["singleActi" + "onVector"] = new Array();
        this["keepVector"] = new Array();
        this['createStat' + "icShapes"]();
        this["createDyna" + "micShapes"]();
        this["createItem" + 's']();
      };
      J["die"] = function () {
        if ("fDGvN" !== "Jfcll") {
          this['endBlock'] && this["endBlock"]["die"]();
          if (this["actionsVec" + "tor"]) {
            for (var D = 0x0; D < this['actionsVec' + 'tor']["length"]; D++) {
              this['actionsVec' + "tor"][D]['die']();
            }
          }
          this["paintBodyV" + "ector"] = null;
          this["paintItemV" + "ector"] = null;
          this["actionsVec" + "tor"] = null;
          this["actionsToR" + "emove"] = null;
          this['singleActi' + "onVector"] = null;
          this["keepVector"] = null;
        } else {
          var S = new P['gv']();
          var z = new p['m2']();
          var F = new K['_A']();
          z["friction"] = F["friction"] = 0x1;
          z["restitutio" + 'n'] = F["restitutio" + 'n'] = 0.3;
          z["density"] = 0x1;
          var M = this["m_world"]["CreateBody"](S);
          z["SetAsOrien" + "tedBox"](0x113 / this["m_physScal" + 'e'], 0x32 / this['m_physScal' + 'e'], new m['RM'](0x113 / this["m_physScal" + 'e'], 0x190 / this["m_physScal" + 'e']));
          M["CreateShap" + 'e'](z);
          z["SetAsOrien" + 'tedBox'](0x113 / this["m_physScal" + 'e'], 0x32 / this["m_physScal" + 'e'], new I['RM'](0x113 / this["m_physScal" + 'e'], 0x0 / this["m_physScal" + 'e']));
          M["CreateShap" + 'e'](z);
          z["SetAsOrien" + "tedBox"](0x32 / this["m_physScal" + 'e'], 0xc8 / this['m_physScal' + 'e'], new k['RM'](0x226 / this["m_physScal" + 'e'], 0xc8 / this["m_physScal" + 'e']));
          M["CreateShap" + 'e'](z);
          z["SetAsOrien" + "tedBox"](0x32 / this["m_physScal" + 'e'], 0xc8 / this["m_physScal" + 'e'], new j['RM'](0x0 / this["m_physScal" + 'e'], 0xc8 / this["m_physScal" + 'e']));
          M["CreateShap" + 'e'](z);
          z["SetAsOrien" + "tedBox"](0x5 / this['m_physScal' + 'e'], 0x5 / this['m_physScal' + 'e'], new u['RM'](0x0, 0x0));
          for (var H = 0xff, b = 0x159, Z = 0x0; Z < 0x5; Z++) {
            for (var y = 0x0; y < 0x5; y++) {
              S["position"]["Set"](H / this["m_physScal" + 'e'], b / this["m_physScal" + 'e']);
              (M = this["m_world"]["CreateBody"](S))['CreateShap' + 'e'](z);
              M["SetMassFro" + "mShapes"]();
              0x0 == Z && 0x4 == y && (this["trackingBo" + 'dy'] = M);
              H += 0xa;
            }
            H = 0xff;
            b -= 0xa;
          }
          S["position"]['Set'](0x55 / this["m_physScal" + 'e'], 0x13b / this["m_physScal" + 'e']);
          M = this["m_world"]["CreateBody"](S);
          F["radius"] = 0x19 / this["m_physScal" + 'e'];
          F["density"] = 0x3;
          M['CreateShap' + 'e'](F);
          M["SetMassFro" + "mShapes"]();
          M["SetLinearV" + "elocity"](new B['RM'](0x14, 0x0));
        }
      };
      J["destroyRef" + 's'] = function () {};
      J["createStat" + "icShapes"] = function () {
        if ("dmhBK" === "dmhBK") {
          var D = new P['gv']();
          this["levelBody"] = this["_session"]["m_world"]["CreateBody"](D);
          var g = new P['m2']();
          var S = new P['_A']();
          var z = new P['m2']();
          g["friction"] = 0x1;
          g["restitutio" + 'n'] = 0.1;
          g["filter"]['categoryBi' + 'ts'] = 0x8;
          g["filter"]['groupIndex'] = -0xa;
          S["friction"] = 0x1;
          S['restitutio' + 'n'] = 0.1;
          S["filter"]["categoryBi" + 'ts'] = 0x8;
          S['filter']["groupIndex"] = -0xa;
          z["friction"] = 0x1;
          z["restitutio" + 'n'] = 0.1;
          z["filter"]["categoryBi" + 'ts'] = 0x8;
          z["vertexCoun" + 't'] = 0x3;
          z["filter"]["groupIndex"] = -0xa;
          for (var F, M = new P['RM'](), H = 0x0; H < this["shapeGuide"]["numChildre" + 'n']; H++) {
            var b = this["shapeGuide"]["getChildAt"](H);
            b['visible'] = !0x1;
            F = b["rotation"] * Math['PI'] / 0xb4;
            M["Set"](b['x'] / this["m_physScal" + 'e'], b['y'] / this["m_physScal" + 'e']);
            switch (b["name"]) {
              case 'rp':
                g["SetAsOrien" + 'tedBox'](0x5 * b["scaleX"] / this['m_physScal' + 'e'], 0x5 * b["scaleY"] / this["m_physScal" + 'e'], M, F);
                this["levelBody"]["CreateShap" + 'e'](g);
                break;
              case 'cp':
                S["localPosit" + "ion"]["Set"](M['x'], M['y']);
                S['radius'] = 0x5 * b["scaleX"] / this['m_physScal' + 'e'];
                this["levelBody"]["CreateShap" + 'e'](S);
                break;
              case 'tp':
                var Z = 0x5 * b["scaleX"] / this["m_physScal" + 'e'];
                var X = 0xa * b["scaleY"] / this["m_physScal" + 'e'];
                z['vertices'][0x0] = new P['RM'](0x0, -0x2 * X);
                z["vertices"][0x1] = new P['RM'](Z, X);
                z["vertices"][0x2] = new P['RM'](-Z, X);
                for (var x = 0x0; x < 0x3; x++) {
                  var w = z["vertices"][x];
                  var Y = Math['cos'](F) * w['x'] - Math['sin'](F) * w['y'];
                  var L = Math["cos"](F) * w['y'] + Math["sin"](F) * w['x'];
                  z["vertices"][x] = new P['RM'](M['x'] + Y, M['y'] + L);
                }
                this["levelBody"]["CreateShap" + 'e'](z);
                break;
              case "rpd":
                var U = new P['gv']();
                U['isSleeping'] = !0x0;
                var O = this["_session"]['m_world']["CreateBody"](U);
                var G = new P['m2']();
                G["density"] = 0x1;
                G['friction'] = 0x1;
                G["restitutio" + 'n'] = 0.1;
                G["filter"]["categoryBi" + 'ts'] = 0x8;
                G["SetAsOrien" + "tedBox"](0x5 * b["scaleX"] / this["m_physScal" + 'e'], 0x5 * b["scaleY"] / this["m_physScal" + 'e'], M, F);
                O["CreateShap" + 'e'](G);
                O["SetMassFro" + 'mShapes']();
            }
          }
        } else {
          var q0 = L['call'](T, "string");
          if ("object" != typeof q0) {
            return q0;
          }
          throw new V("@@toPrimit" + 'ive\x20must\x20r' + "eturn a pr" + "imitive va" + "lue.");
        }
      };
      J["createDyna" + "micShapes"] = function () {
        if ("vxkaV" !== "gZJyG") {
          for (var D, g = new P['RM'](), S = 0x0; S < this["shapeGuide"]['numChildre' + 'n']; S++) {
            var z = this["shapeGuide"]["getChildAt"](S);
            D = z['rotation'] * Math['PI'] / 0xb4;
            g["Set"](z['x'] / this["m_physScal" + 'e'], z['y'] / this["m_physScal" + 'e']);
            if ("shapeGuide" === z["parent"]["name"]) {
              z["visible"] = !0x1;
              var F = z["name"]["split"]('_');
              var M = this["background"][F[0x0] + 'mc'];
              if (void 0x0 !== M && F["length"] > 0x1) {
                var H = new P['gv']();
                "sleep" == F[0x2] && (H["isSleeping"] = !0x0);
                var b = this["_session"]["m_world"]['CreateBody'](H);
                b['m_userData'] = M;
                var Z = new P['m2']();
                Z["density"] = Number(F[0x1]);
                Z["friction"] = 0x1;
                Z["restitutio" + 'n'] = 0.1;
                Z["filter"]["categoryBi" + 'ts'] = 0x8;
                Z["SetAsOrien" + "tedBox"](0x5 * z["scaleX"] / this['m_physScal' + 'e'], 0x5 * z["scaleY"] / this["m_physScal" + 'e'], g, D);
                b["CreateShap" + 'e'](Z);
                b["SetMassFro" + 'mShapes']();
                this["paintBodyV" + "ector"]["push"](b);
              }
            }
          }
        } else {
          f["__proto__"] = T;
          return V;
        }
      };
      J["createBack" + "Drops"] = function () {
        this['backDrops'] = [];
      };
      J["insertBack" + "Drops"] = function () {
        for (var D = this["backDrops"]["length"], g = 0x0; g < D; g++) {
          var S = this["backDrops"][g];
          this["_session"]["addChildAt"](S, 0x0);
        }
      };
      J["createMovi" + "eClips"] = function () {
        this["foreground"] = this["levelData"]["getChildBy" + "Name"]("foreGround");
        this["_session"]['containerS' + "prite"]["addChild"](this["foreground"]);
        this["_session"]["particleCo" + 'ntroller']["placeBlood" + "Bitmap"]();
        this["background"] = this["levelData"]["getChildBy" + "Name"]("backGround");
        this["_session"]["containerS" + "prite"]["addChildAt"](this["background"], 0x1);
        this['convertBac' + "kground"]();
      };
      J["convertBac" + "kground"] = function () {};
      J["createBitm" + 'ap'] = function (D) {
        var g = new j['ws'](D["width"], D["height"], !0x0, 0xffffff);
        g['draw'](D);
        return new j['mb'](g);
      };
      J["createItem" + 's'] = function () {
        this["endBlock"] = new p['R']();
      };
      J["addListene" + 'rs'] = function () {};
      J["removeFrom" + "PaintBodyV" + "ector"] = function (D) {
        if ("GiMvY" !== "hOnYP") {
          var g = this["paintBodyV" + "ector"]["indexOf"](D);
          g > -0x1 && this["paintBodyV" + "ector"]["splice"](g, 0x1);
        } else {
          this["textField"]['x'] = (this["bgWidth"] - this["textField"]["_pixiText"]["width"]) / 0x2;
          this['textField']['y'] = (this["bgHeight"] - this["textField"]["_pixiText"]['height']) / 0x2;
        }
      };
      J["removeFrom" + 'PaintItemV' + "ector"] = function (D) {
        var g = this["paintItemV" + "ector"]["indexOf"](D);
        g > -0x1 && this["paintItemV" + "ector"]["splice"](g, 0x1);
      };
      J["removeFrom" + "ActionsVec" + "tor"] = function (D) {
        if ("kQhrf" === "kQhrf") {
          this["actionsToR" + "emove"]["push"](D);
        } else {
          return this;
        }
      };
      J["paint"] = function () {
        for (var D = this["paintBodyV" + 'ector']["length"], g = 0x0; g < D; g++) {
          if ("MaELV" !== "MaELV") {
            return void N(f);
          } else {
            var S = this["paintBodyV" + "ector"][g];
            var z = S["GetInterpo" + "latedWorld" + "Center"]();
            S["m_userData"]['x'] = z['x'] * this["m_physScal" + 'e'];
            S["m_userData"]['y'] = z['y'] * this["m_physScal" + 'e'];
            S["m_userData"]['rotation'] = S['GetInterpo' + "latedAngle"]() * u["oneEightyO" + "verPI"] % 0x168;
          }
        }
        D = this["paintItemV" + "ector"]['length'];
        for (var F = 0x0; F < D; F++) {
          this["paintItemV" + 'ector'][F]["paint"]();
        }
      };
      J["actions"] = function () {
        if ("RppRa" !== "GnfNS") {
          for (var D = this["singleActi" + "onVector"]['length']; this["singleActi" + 'onVector']["length"] > 0x0;) {
            if ("ksrfz" !== "YYMYR") {
              var g = this["singleActi" + "onVector"][0x0];
              g["singleActi" + 'on']();
              this["singleActi" + "onVector"]["indexOf"](g) > -0x1 && this["singleActi" + 'onVector']["splice"](this["singleActi" + "onVector"]["indexOf"](g), 0x1);
            } else {
              this['stab'] = !0x1;
              var Z = this["character"]["session"];
              var y = Z["m_world"];
              var X = Z["contactLis" + "tener"];
              X['deleteList' + "ener"](T['jp']["RESULT"], this["shape"]);
              var x = this["shape"]['GetFilterD' + "ata"]()["Copy"]();
              x["maskBits"] = 0x8;
              this["shape"]["SetFilterD" + "ata"](x);
              y["Refilter"](this['shape']);
              var w = new V['m2']();
              w["isSensor"] = !0x0;
              w["filter"]["categoryBi" + 'ts'] = 0x8;
              w["filter"]["maskBits"] = 0x4;
              w["vertexCoun" + 't'] = this['shape']["GetVertexC" + "ount"]();
              w["vertices"] = this["shape"]['GetVertice' + 's']();
              this["sensor"] = this["body"]["CreateShap" + 'e'](w);
              X["registerLi" + "stener"](h['fI']["ADD"], this["sensor"], this["checkAdd"]);
              X["registerLi" + "stener"](C['fI']["REMOVE"], this["sensor"], this["checkRemov" + 'e']);
            }
          }
          this["singleActi" + 'onVector'] = new Array();
          D = this['actionsVec' + "tor"]["length"];
          for (var S = this['actionsVec' + "tor"]["slice"](), z = 0x0; z < D; z++) {
            S[z]["actions"]();
          }
          D = this["actionsToR" + "emove"]["length"];
          for (var F = 0x0; F < D; F++) {
            var M = this["actionsToR" + "emove"][F];
            var H = this["actionsVec" + "tor"]["indexOf"](M);
            H > -0x1 && this["actionsVec" + "tor"]["splice"](H, 0x1);
          }
          this["actionsToR" + "emove"] = new Array();
        } else {
          var Z = new p['Ps'](!0x1, !0x1, !0x1, 0x1, 0x0, -0x1, 0x0);
          Z['x'] = Z['y'] = 0x0;
          Z["vertVector"]["push"](new K['RM']());
          Z['vertVector']["push"](new m['RM'](0xa, 0x0));
          Z["vertVector"]["push"](new I['RM'](0x5, 0x5));
          Z["handleVect" + 'or']["push"](new k['RM']());
          Z['handleVect' + 'or']["push"](new z['RM']());
          Z["handleVect" + 'or']["push"](new g['RM']());
          Z["handleVect" + 'or']["push"](new B['RM']());
          Z["handleVect" + 'or']["push"](new u['RM']());
          Z["handleVect" + 'or']["push"](new W['RM']());
          return Z;
        }
      };
      J["registerSh" + "apeSound"] = function (D, g) {};
      J["updateTarg" + "etActionsF" + 'or'] = function (D, g, S, z, F) {
        void 0x0 === F && (F = !0x1);
      };
      J["updateTarg" + "etActionGr" + "oupsFor"] = function (D, g, S) {};
      J["mouseClick" + 'Trigger'] = function (D) {};
      W = u;
      (A = [{
        'key': "session",
        'get': function () {
          return this["_session"];
        },
        'set': function (D) {
          "rzGEN" !== 'rzGEN' ? (this["_attribute" + 's'] = ['x', 'y', "limit", "motor", "collideSel" + 'f'], this['_vehicleAt' + "tached"] && this["_attribute" + 's']["push"]("vehicleCon" + "trolled"), this["addTrigger" + "Properties"]()) : this["_session"] = D;
        }
      }, {
        'key': "startPoint",
        'get': function () {
          if ("ubIXG" !== "ubIXG") {
            var g = f['clone']();
            g['target'] = T;
            V["dispatchEv" + "ent"](g);
          } else {
            return new P['RM'](0x190, 0x64);
          }
        }
      }, {
        'key': "cameraBoun" + 'ds',
        'get': function () {
          if ('qVDBN' === "gzzBX") {
            this["ejected"] && (this["currentPos" + 'e'] = 0x1);
          } else {
            var D = this["shapeGuide"]["getChildBy" + "Name"]("camUpper");
            var g = this['shapeGuide']["getChildBy" + "Name"]("camLower");
            return new j['M_'](g['x'], g['y'], D['x'] - g['x'], D['y'] - g['y']);
          }
        }
      }, {
        'key': 'worldBound' + 's',
        'get': function () {
          var D = this["shapeGuide"]["getChildBy" + 'Name']("upper");
          var g = this["shapeGuide"]["getChildBy" + "Name"]('lower');
          return new j['M_'](g['x'], g['y'], D['x'] - g['x'], D['y'] - g['y']);
        }
      }, {
        'key': "levelVersi" + 'on',
        'get': function () {
          return this["_levelVers" + 'ion'];
        },
        'set': function (D) {
          'kprja' === "IhBwl" ? j ? (P["IsMotorEna" + "bled"]() || p["EnableMoto" + 'r'](!0x1), K["EnableMoto" + 'r'](!0x0), this["decelerate" + "PrisJoint"](m)) : (I["IsMotorEna" + "bled"]() || k["EnableMoto" + 'r'](!0x0), this["decelerate" + "RevoluteJo" + "int"](f)) : this["_levelVers" + "ion"] = D;
        }
      }]) && function (D, g) {
        if ("fbXva" !== "EnVZc") {
          for (var S = 0x0; S < g["length"]; S++) {
            if ("GzRLQ" !== "Jbsff") {
              var z = g[S];
              z["enumerable"] = z["enumerable"] || !0x1;
              z["configurab" + 'le'] = !0x0;
              "value" in z && (z['writable'] = !0x0);
              Object['defineProp' + "erty"](D, I(z["key"]), z);
            } else {
              var M = this["_addListen" + "ers"]["get"](K["shape1"]);
              null != M && M(m);
              if (null != (M = this["_addListen" + "ers"]["get"](I["shape2"]))) {
                var H = new E['Ls']();
                H["shape1"] = R["shape2"];
                H["shape2"] = W["shape1"];
                H['normal'] = A['normal']["Negative"]();
                H["separation"] = P["separation"];
                H["velocity"] = J["velocity"];
                H["position"] = D["position"];
                H['id'] = g['id'];
                H["swap"] = !0x0;
                M(H);
              }
            }
          }
        } else {
          void 0x0 === V && (h = !0x0);
          C["prototype"]["shoulderBr" + "eak2"]["call"](this, j, P);
          this["ejected"] || (this['removeFrom' + 'COMArray'](this["upperArm2B" + "ody"]), this["removeFrom" + 'COMArray'](this["lowerArm2B" + "ody"]), this["upperArm4B" + "ody"] && this["COMArray"]["push"](this["upperArm4B" + "ody"]), this["copterHand" + '2'] && (this["_session"]["m_world"]["DestroyJoi" + 'nt'](this["copterHand" + '2']), this["copterHand" + '2'] = null, this["checkEject"]()));
        }
      }(W["prototype"], A);
      Object['defineProp' + "erty"](W, "prototype", {
        'writable': !0x1
      });
      return W;
    }(j['Qe']);
    K["oneEightyO" + "verPI"] = 0xb4 / Math['PI'];
    K["PIOverOneE" + "ighty"] = Math['PI'] / 0xb4;
  } else {
    T["basicMenuC" + "losed"](V);
    h["openBasicM" + "enu"]("friendly_o" + "ptions", C["extra"]);
  }
}