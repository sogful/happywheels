(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        27453(e, t, n) {
            "use strict";
        
            n.d(t, {
              xF: () => w
            });
            n(23792);
            n(26099);
            n(31415);
            n(47764);
            n(62953);
            n(23500);
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(2892);
            var r = n(4971);
            function i(e) {
              var t = function (e) {
                if (typeof e != "object" || !e) {
                  return e;
                }
                var t = e[Symbol.toPrimitive];
                if (t !== undefined) {
                  var n = t.call(e, "string");
                  if (typeof n != "object") {
                    return n;
                  }
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(e);
              }(e);
              if (typeof t == "symbol") {
                return t;
              } else {
                return t + "";
              }
            }
            function s(e, t) {
              s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return s(e, t);
            }
            var a = function (e) {
              function t(n) {
                var r;
                (r = e.call(this, t.SOUND_INSTANCE_REMOVED) || this)._sound = n;
                return r;
              }
              var n;
              var r;
              var a;
              var o;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              s(n, r);
              a = t;
              if (o = [{
                key: "sound",
                get: function () {
                  return this._sound;
                }
              }]) {
                (function (e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || false;
                    r.configurable = true;
                    if ("value" in r) {
                      r.writable = true;
                    }
                    Object.defineProperty(e, i(r.key), r);
                  }
                })(a.prototype, o);
              }
              Object.defineProperty(a, "prototype", {
                writable: false
              });
              return a;
            }(r.Jh);
            function o(e) {
              var t = function (e) {
                if (typeof e != "object" || !e) {
                  return e;
                }
                var t = e[Symbol.toPrimitive];
                if (t !== undefined) {
                  var n = t.call(e, "string");
                  if (typeof n != "object") {
                    return n;
                  }
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(e);
              }(e);
              if (typeof t == "symbol") {
                return t;
              } else {
                return t + "";
              }
            }
            a.SOUND_INSTANCE_REMOVED = "soundInstanceRemove";
            var h = function () {
              function e() {
                this.sounds = new Set();
                this._volume = 1;
                this._muted = false;
              }
              var t;
              var n;
              var r = e.prototype;
              r.addSound = function (e) {
                var t = this;
                this.sounds.add(e);
                e.channelVolume = this._volume;
                e.addEventListener(a.SOUND_INSTANCE_REMOVED, function (e) {
                  t.removeSound(e.sound);
                });
              };
              r.mute = function () {
                this._muted = true;
                this._refreshVolume();
              };
              r.unmute = function () {
                this._muted = false;
                this._refreshVolume();
              };
              r.pause = function () {
                this.sounds.forEach(function (e) {
                  return e.channelPaused = true;
                });
              };
              r.resume = function () {
                this.sounds.forEach(function (e) {
                  return e.channelPaused = false;
                });
              };
              r.restart = function () {
                this.sounds.forEach(function (e) {
                  return e.restart();
                });
              };
              r.stop = function () {
                this.sounds.forEach(function (e) {
                  return e.stop();
                });
              };
              r.removeSound = function (e) {
                this.sounds.delete(e);
                e = null;
              };
              r._refreshVolume = function () {
                var e = this._muted ? 0 : this._volume;
                this.sounds.forEach(function (t) {
                  return t.channelVolume = e;
                });
              };
              t = e;
              if (n = [{
                key: "volume",
                set: function (e) {
                  this._volume = e;
                  this._refreshVolume();
                }
              }]) {
                (function (e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || false;
                    r.configurable = true;
                    if ("value" in r) {
                      r.writable = true;
                    }
                    Object.defineProperty(e, o(r.key), r);
                  }
                })(t.prototype, n);
              }
              Object.defineProperty(t, "prototype", {
                writable: false
              });
              return t;
            }();
            function l(e) {
              var t = function (e) {
                if (typeof e != "object" || !e) {
                  return e;
                }
                var t = e[Symbol.toPrimitive];
                if (t !== undefined) {
                  var n = t.call(e, "string");
                  if (typeof n != "object") {
                    return n;
                  }
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(e);
              }(e);
              if (typeof t == "symbol") {
                return t;
              } else {
                return t + "";
              }
            }
            function d(e, t) {
              d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return d(e, t);
            }
            var c = {};
            var u = function (e) {
              function t(t, n, r) {
                var i;
                if (r === undefined) {
                  r = c;
                }
                (i = e.call(this) || this)._volume = 1;
                i.boundOnCompleteHandler = function () {
                  return i._onCompleteHandler();
                };
                i.spriteHowl = t;
                i.id = t.play(n);
                i._channelVolume = 1;
                if (r.loops) {
                  i.loopsRemaining = r.loops || Infinity;
                  i.spriteHowl.loop(true, i.id);
                }
                i.volume = r.volume ?? 1;
                if (r.panning) {
                  i.panning = r.panning;
                }
                i.spriteHowl.on("end", i.boundOnCompleteHandler, i.id);
                return i;
              }
              var n;
              var i;
              i = e;
              (n = t).prototype = Object.create(i.prototype);
              n.prototype.constructor = n;
              d(n, i);
              var s;
              var o;
              var h = t.prototype;
              h.pause = function () {
                this._paused = true;
                this._pause();
              };
              h._pause = function () {
                this.spriteHowl.pause(this.id);
              };
              h.resume = function () {
                this._paused = false;
                if (!this._channelPaused) {
                  this._resume();
                }
              };
              h._resume = function () {
                this.spriteHowl.play(this.id);
              };
              h.restart = function () {
                this.spriteHowl.seek(0, this.id);
              };
              h.stop = function () {
                this.spriteHowl.stop(this.id);
                this.dispatchEvent(new a(this));
                this._dispose();
              };
              h.fadeIn = function (e = 1) {
                this.spriteHowl.fade(0, this.effectiveVolume, e * 1000, this.id);
              };
              h.fadeOut = function (e, t) {
                var n = this;
                if (e === undefined) {
                  e = 1;
                }
                if (t === undefined) {
                  t = false;
                }
                this.spriteHowl.fade(this.spriteHowl.volume(this.id), 0, e * 1000, this.id);
                if (t) {
                  this.dispatchEvent(new a(this));
                  this.spriteHowl.once("fade", function () {
                    return n.stop();
                  }, this.id);
                }
              };
              h._onCompleteHandler = function () {
                if (!this.spriteHowl.loop(this.id) || !(this.loopsRemaining -= 1, this.loopsRemaining !== 0)) {
                  this.dispatchEvent(new r.Jh(r.Jh.SOUND_COMPLETE));
                  this.dispatchEvent(new a(this));
                  this._dispose();
                }
              };
              h._dispose = function () {
                this.spriteHowl.off("end", this.boundOnCompleteHandler, this.id);
              };
              s = t;
              if (o = [{
                key: "volume",
                get: function () {
                  return this._volume;
                },
                set: function (e) {
                  this._volume = e;
                  this.spriteHowl.volume(this.effectiveVolume, this.id);
                }
              }, {
                key: "effectiveVolume",
                get: function () {
                  return this._volume * this.spriteHowl.volume() * this._channelVolume;
                }
              }, {
                key: "channelVolume",
                set: function (e) {
                  this._channelVolume = e;
                  this.volume = this.volume;
                }
              }, {
                key: "channelPaused",
                set: function (e) {
                  this._channelPaused = e;
                  if (e) {
                    this._pause();
                  } else if (!this._paused) {
                    this._resume();
                  }
                }
              }, {
                key: "panning",
                set: function (e) {
                  this.spriteHowl.stereo(e, this.id);
                }
              }]) {
                (function (e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || false;
                    r.configurable = true;
                    if ("value" in r) {
                      r.writable = true;
                    }
                    Object.defineProperty(e, l(r.key), r);
                  }
                })(s.prototype, o);
              }
              Object.defineProperty(s, "prototype", {
                writable: false
              });
              return s;
            }(r.Qe);
            n(36033);
            n(3362);
            n(2259);
            n(78125);
            n(4731);
            n(60479);
            n(40875);
            var p = n(94196);
            var m = n(35057);
            const f = {
              _: {
                ArrowFire1: [0, 293.4166666666667],
                ArrowFire2: [293.4166666666667, 274.29166666666663],
                ArrowFlesh1: [567.7083333333333, 274.83333333333326],
                ArrowFlesh2: [842.5416666666665, 380.4375],
                ArrowFlesh3: [1222.9791666666665, 194.47916666666677],
                ArrowSnap1: [1417.4583333333333, 224.04166666666669],
                ArrowSnap2: [1641.5, 165.60416666666654],
                ArrowSolid1: [1807.1041666666665, 335.24999999999983],
                ArrowSolid2: [2142.3541666666665, 186.0624999999998],
                BallHit: [2328.416666666666, 1676.3749999999998],
                BallSwing: [4004.791666666666, 558.9374999999999],
                BasketHit: [4563.729166666666, 486.9583333333329],
                BasketSmash: [5050.687499999999, 1937.145833333333],
                BikeHit1: [6987.833333333332, 385.52083333333354],
                BikeHit2: [7373.354166666665, 471.1875000000001],
                BikeHit3: [7844.541666666665, 550.9375000000008],
                BikeLoop1: [8395.479166666666, 2958.2708333333335],
                BikeLoop2: [11353.75, 1971.145833333333],
                BikeLoop3: [13324.895833333332, 1316.8124999999993],
                BikeSmash1: [14641.708333333332, 2185.437500000001],
                BikeTire: [16827.145833333332, 422.33333333333434],
                BikeTireSmash1: [17249.479166666668, 627.2291666666661],
                BladeFlesh1: [17876.708333333332, 555.8333333333323],
                BladeFlesh2: [18432.541666666664, 290.72916666666515],
                BladeFlesh3: [18723.270833333332, 567.7500000000002],
                Bleep3: [19291.020833333332, 447.29166666666845],
                BoneBreak1: [19738.3125, 351.20833333333223],
                BoneBreak2: [20089.520833333332, 239.45833333333155],
                BoneBreak3: [20328.979166666664, 243.62500000000153],
                BoneBreak4: [20572.604166666664, 244.5833333333347],
                BoomboxCrush1: [20817.1875, 1080.1249999999989],
                BoomboxHit: [21897.3125, 259.5833333333317],
                BoomboxSmash1: [22156.89583333333, 1695.7916666666647],
                BoomboxSmash2: [23852.687499999996, 1179.479166666667],
                BoostLoop: [25032.16666666666, 1664.6666666666654],
                Cannon1: [26696.83333333333, 1370.2916666666667],
                CarTire1: [28067.124999999993, 703.875],
                ChainBreak1: [28770.999999999993, 196.97916666666515],
                ChainBreak2: [28967.97916666666, 240.99999999999966],
                ChainBreak3: [29208.979166666657, 180.08333333333226],
                ChairHit1: [29389.06249999999, 497.4791666666682],
                ChairHit2: [29886.54166666666, 628.3958333333323],
                ChairHit3: [30514.937499999993, 863.8750000000002],
                Char11Elbow1: [31378.812499999993, 446.3749999999998],
                Char11Elbow2: [31825.187499999993, 416.2708333333356],
                Char11Foot1: [32241.45833333333, 552.6874999999975],
                Char11Foot2: [32794.14583333332, 480.9583333333336],
                Char11Hip1: [33275.10416666666, 1016.958333333335],
                Char11Hip2: [34292.06249999999, 1228.3541666666692],
                Char11Knee1: [35520.416666666664, 498.1041666666641],
                Char11Knee2: [36018.52083333333, 692.5416666666636],
                Char11Pelvis: [36711.06249999999, 1443.0416666666658],
                Char11Shoulder1: [38154.10416666666, 1078.1458333333305],
                Char11Shoulder2: [39232.249999999985, 1105.4791666666688],
                Char11Spikes: [40337.72916666666, 1126.291666666667],
                Char11Torso: [41464.02083333332, 2418.354166666667],
                Char12Elbow1: [43882.374999999985, 1213.4583333333353],
                Char12Elbow2: [45095.83333333332, 496.3333333333324],
                Char12Foot1: [45592.16666666666, 937.6875000000027],
                Char12Foot2: [46529.85416666666, 902.2916666666631],
                Char12Hip1: [47432.14583333332, 1056.2499999999986],
                Char12Hip2: [48488.39583333332, 2839.7291666666647],
                Char12Knee1: [51328.124999999985, 1087.1458333333308],
                Char12Knee2: [52415.270833333314, 1123.83333333333],
                Char12Pelvis: [53539.10416666665, 3439.8541666666633],
                Char12Shoulder1: [56978.95833333331, 1070.5416666666636],
                Char12Shoulder2: [58049.49999999997, 1355.2291666666677],
                Char12Spikes: [59404.72916666664, 1495.104166666664],
                Char12Torso: [60899.83333333331, 2291.145833333331],
                Char1Elbow1: [63190.979166666635, 630.2083333333358],
                Char1Elbow2: [63821.18749999997, 577.7708333333394],
                Char1Foot1: [64398.958333333314, 367.6875000000024],
                Char1Foot2: [64766.645833333314, 304.81249999999704],
                Char1Hip1: [65071.458333333314, 1230.5833333333283],
                Char1Hip2: [66302.04166666664, 514.5833333333343],
                Char1Knee1: [66816.62499999997, 1028.812500000001],
                Char1Knee2: [67845.43749999997, 863.4791666666644],
                Char1Pelvis: [68708.91666666664, 1447.9374999999948],
                Char1Shoulder1: [70156.85416666663, 892.5208333333359],
                Char1Shoulder2: [71049.37499999997, 567.7291666666662],
                Char1Spikes: [71617.10416666664, 1334.8958333333344],
                Char1Torso: [72951.99999999997, 1664.1249999999986],
                Char2Elbow1: [74616.12499999997, 471.7708333333377],
                Char2Elbow2: [75087.8958333333, 585.6041666666698],
                Char2Foot1: [75673.49999999997, 839.4583333333401],
                Char2Foot2: [76512.95833333331, 336.47916666666333],
                Char2Hip1: [76849.43749999999, 1459.2291666666597],
                Char2Hip2: [78308.66666666664, 1495.3541666666724],
                Char2Knee1: [79804.02083333331, 405.6874999999991],
                Char2Knee2: [80209.70833333331, 662.6458333333289],
                Char2Pelvis: [80872.35416666664, 1840.6875000000014],
                Char2Shoulder1: [82713.04166666664, 1124.6666666666697],
                Char2Shoulder2: [83837.70833333331, 1097.9166666666629],
                Char2Spikes: [84935.62499999997, 362.49999999999716],
                Char2Torso: [85298.12499999997, 2218.1250000000005],
                Char3Damnit: [87516.24999999997, 582.9166666666623],
                Char3Elbow1: [88099.16666666663, 488.24999999999363],
                Char3Elbow2: [88587.41666666663, 402.47916666666583],
                Char3Foot1: [88989.8958333333, 401.16666666666845],
                Char3Foot2: [89391.06249999996, 404.91666666666504],
                Char3Hip1: [89795.97916666663, 694.2083333333358],
                Char3Hip2: [90490.18749999996, 537.083333333328],
                Char3Knee1: [91027.27083333328, 317.49999999999545],
                Char3Knee2: [91344.77083333328, 523.5833333333346],
                Char3Pelvis: [91868.35416666661, 732.6666666666597],
                Char3Shoulder1: [92601.02083333328, 482.104166666673],
                Char3Shoulder2: [93083.12499999996, 954.8125000000027],
                Char3Spikes: [94037.93749999996, 635.1875000000007],
                Char3Torso: [94673.12499999996, 1560.8958333333335],
                Char4Elbow1: [96234.02083333328, 691.9583333333321],
                Char4Elbow2: [96925.97916666663, 523.9166666666648],
                Char4Foot1: [97449.89583333328, 674.8333333333392],
                Char4Foot2: [98124.72916666663, 601.687499999997],
                Char4Hip1: [98726.41666666663, 631.2499999999943],
                Char4Hip2: [99357.66666666661, 1451.145833333328],
                Char4Knee1: [100808.81249999994, 947.6666666666631],
                Char4Knee2: [101756.47916666661, 659.3124999999986],
                Char4Pelvis: [102415.79166666661, 1366.5416666666629],
                Char4Shoulder1: [103782.33333333327, 1238.2708333333312],
                Char4Shoulder2: [105020.6041666666, 800.9166666666658],
                Char4Spikes: [105821.52083333327, 924.2916666666616],
                Char4Torso: [106745.81249999993, 1791.6874999999948],
                Char8Elbow1: [108537.49999999993, 265.625],
                Char8Elbow2: [108803.12499999993, 401.33333333332644],
                Char8Foot1: [109204.45833333326, 481.22916666666526],
                Char8Foot2: [109685.68749999991, 384.95833333332996],
                Char8Hip1: [110070.64583333324, 857.6874999999973],
                Char8Hip2: [110928.33333333324, 631.5000000000026],
                Char8Knee1: [111559.83333333324, 531.7916666666633],
                Char8Knee2: [112091.62499999991, 362.937500000001],
                Char8Pelvis: [112454.56249999991, 1421.4374999999961],
                Char8Shoulder1: [113875.9999999999, 761.9166666666644],
                Char8Shoulder2: [114637.91666666657, 849.8541666666597],
                Char8Spikes: [115487.77083333323, 531.1041666666654],
                Char8Torso: [116018.8749999999, 1441.062500000001],
                Char9Elbow1: [117459.9374999999, 224.95833333333337],
                Char9Elbow2: [117684.89583333323, 326.45833333333485],
                Char9Foot1: [118011.35416666657, 374.2500000000035],
                Char9Foot2: [118385.60416666657, 196.97916666666515],
                Char9Hip1: [118582.58333333323, 554.0208333333396],
                Char9Hip2: [119136.60416666657, 484.2708333333263],
                Char9Knee1: [119620.8749999999, 343.5208333333293],
                Char9Knee2: [119964.39583333323, 400.1666666666637],
                Char9Mourn: [120364.5624999999, 1509.5416666666638],
                Char9Pelvis: [121874.10416666656, 1136.6041666666717],
                Char9Shoulder1: [123010.70833333323, 759.8333333333329],
                Char9Shoulder2: [123770.54166666656, 497.8749999999934],
                Char9Spikes: [124268.41666666656, 874.7708333333293],
                Char9Torso: [125143.18749999988, 1443.2291666666686],
                ChestSmash: [126586.41666666656, 964.6874999999966],
                DoubleClick: [127551.10416666654, 203.81249999999795],
                DoubleClickReverse: [127754.91666666654, 277.20833333331996],
                DrumLong: [128032.12499999987, 5000.687499999998],
                ElectricMotor1: [133032.81249999985, 4019.0416666666806],
                Elf1Elbow1: [137051.85416666654, 646.7916666666724],
                Elf1Elbow2: [137698.64583333323, 364.29166666667356],
                Elf1Foot1: [138062.93749999988, 393.2916666666699],
                Elf1Foot2: [138456.22916666657, 615.7916666666665],
                Elf1Hip1: [139072.02083333323, 744.7708333333196],
                Elf1Hip2: [139816.79166666654, 399.77083333332075],
                Elf1Knee1: [140216.56249999985, 384.0416666666613],
                Elf1Knee2: [140600.60416666654, 477.47916666665446],
                Elf1Pelvis: [141078.08333333317, 677.1249999999895],
                Elf1Shoulder1: [141755.20833333317, 536.3541666666549],
                Elf1Shoulder2: [142291.56249999983, 331.6041666666649],
                Elf1Spikes: [142623.16666666648, 350.06250000000705],
                Elf1Torso: [142973.2291666665, 1039.7708333333355],
                ExplorerRoll1: [144012.99999999983, 1301.0208333333253],
                ExplorerRoll2: [145314.02083333317, 1198.5625000000084],
                ExplorerRoll3: [146512.58333333317, 1080.79166666667],
                FoodSplat1: [147593.37499999983, 330.6249999999977],
                FoodSplat2: [147923.99999999983, 669.8125000000061],
                FoodSplat3: [148593.81249999985, 556.8749999999909],
                GlassHeavy1: [149150.68749999983, 1245.6875000000025],
                GlassHeavy2: [150396.37499999983, 2084.458333333345],
                GlassImpact1: [152480.83333333317, 480.2291666666747],
                GlassImpact2: [152961.06249999985, 534.520833333346],
                GlassLight1: [153495.5833333332, 645.8125000000052],
                GlassLight2: [154141.3958333332, 447.87500000001046],
                GlassMid1: [154589.27083333323, 1696.7083333333335],
                GlassMid2: [156285.97916666654, 2485.2916666666542],
                GrindLoop2: [158771.2708333332, 11700.64583333334],
                HarpoonFire: [170471.91666666654, 737.9999999999995],
                HarpoonFlesh1: [171209.91666666654, 1526.7291666666551],
                HarpoonFlesh2: [172736.6458333332, 531.6875000000039],
                HarpoonSolid1: [173268.3333333332, 601.1249999999961],
                HarpoonSolid2: [173869.4583333332, 474.0208333333271],
                HeadSmash: [174343.47916666654, 827.9166666666526],
                HeliElbow1: [175171.39583333317, 573.2500000000016],
                HeliElbow2: [175744.64583333317, 277.85416666665697],
                HeliFoot1: [176022.49999999983, 891.5833333333296],
                HeliFoot2: [176914.08333333317, 810.2916666666715],
                HeliHelp: [177724.37499999983, 602.2708333333355],
                HeliHip1: [178326.64583333317, 1119.5625000000007],
                HeliHip2: [179446.20833333317, 1113.8750000000073],
                HeliKnee1: [180560.08333333317, 1394.1250000000025],
                HeliKnee2: [181954.2083333332, 777.2083333333342],
                HeliLoop: [182731.4166666665, 15042.249999999996],
                HeliPelvis: [197773.6666666665, 1845.937499999991],
                HeliShoulder1: [199619.6041666665, 981.0625000000073],
                HeliShoulder2: [200600.6666666665, 1449.0000000000123],
                HeliSpikes: [202049.6666666665, 422.16666666666924],
                HeliTorso: [202471.8333333332, 3930.145833333341],
                HomingMineBeep: [206401.97916666654, 718.4374999999932],
                HomingMineFind: [207120.41666666654, 180.45833333331984],
                HomingMineImpact1: [207300.87499999985, 1398.7083333333317],
                HomingMineImpact2: [208699.58333333317, 982.0833333333212],
                HomingMineLose: [209681.6666666665, 179.8541666666722],
                IBeamHit1: [209861.52083333317, 591.770833333328],
                IBeamHit2: [210453.2916666665, 495.2083333333235],
                ImpaleSpikes1: [210948.49999999983, 433.9375000000132],
                ImpaleSpikes2: [211382.43749999983, 679.1875000000118],
                ImpaleSpikes3: [212061.62499999985, 562.8541666666536],
                Jet1: [212624.4791666665, 1869.979166666667],
                Jet2: [214494.45833333317, 1868.6666666666554],
                Jet3: [216363.12499999983, 1874.2916666666645],
                JetBlast: [218237.41666666648, 3589.854166666669],
                Kid1Elbow1: [221827.27083333317, 379.04166666666583],
                Kid1Elbow2: [222206.31249999983, 483.4791666666547],
                Kid1Foot1: [222689.79166666648, 570.1458333333278],
                Kid1Foot2: [223259.9374999998, 285.8958333333419],
                Kid1Hip1: [223545.83333333314, 628.854166666656],
                Kid1Hip2: [224174.6874999998, 706.7708333333371],
                Kid1Knee1: [224881.45833333314, 422.33333333334144],
                Kid1Knee2: [225303.79166666648, 391.16666666666333],
                Kid1Pelvis: [225694.95833333314, 365.8125000000041],
                Kid1Shoulder1: [226060.77083333314, 975.5000000000109],
                Kid1Shoulder2: [227036.27083333317, 1017.0208333333335],
                Kid1Spikes: [228053.29166666648, 356.458333333336],
                Kid1Torso: [228409.74999999983, 2192.666666666668],
                Kid2Elbow1: [230602.4166666665, 670.3333333333319],
                Kid2Elbow2: [231272.74999999983, 452.7916666666556],
                Kid2Foot1: [231725.54166666648, 642.9166666666788],
                Kid2Foot2: [232368.45833333317, 582.4791666666727],
                Kid2Hip1: [232950.93749999983, 596.4791666666542],
                Kid2Hip2: [233547.41666666648, 1451.2083333333408],
                Kid2Knee1: [234998.62499999983, 913.7083333333464],
                Kid2Knee2: [235912.33333333317, 639.8749999999893],
                Kid2Pelvis: [236552.20833333317, 1275.9583333333353],
                Kid2Shoulder1: [237828.1666666665, 1213.9166666666767],
                Kid2Shoulder2: [239042.08333333317, 773.0625000000089],
                Kid2Spikes: [239815.1458333332, 885.2708333333226],
                Kid2Torso: [240700.4166666665, 1689.2916666666622],
                LigTear1: [242389.70833333317, 450.7916666666745],
                LigTear2: [242840.49999999985, 456.4583333333303],
                LimbRip1: [243296.95833333317, 928.0416666666724],
                LimbRip2: [244224.99999999985, 721.3749999999948],
                LimbRip3: [244946.37499999985, 1304.770833333322],
                LimbRip4: [246251.14583333317, 1179.770833333322],
                LumberBreak: [247430.91666666648, 2029.8541666666665],
                LumberHit1: [249460.77083333317, 862.3958333333235],
                LumberHit2: [250323.16666666648, 697.1666666666749],
                MagnetBuzz: [251020.33333333317, 7194.562500000018],
                MenuSelect: [258214.89583333317, 51.625000000001364],
                MenuSelect2: [258266.52083333317, 49.35416666666015],
                MetalRicochet1: [258315.87499999983, 729.354166666667],
                MetalRicochet2: [259045.2291666665, 785.1249999999936],
                MetalRicochet3: [259830.35416666648, 961.9374999999764],
                MetalSmashHeavy: [260792.29166666648, 2153.4791666666706],
                MetalSmashHeavy2: [262945.77083333314, 5093.958333333319],
                MetalSmashHeavy3: [268039.72916666645, 3528.8750000000277],
                MetalSmashHeavy4: [271568.6041666665, 2544.249999999977],
                MetalSmashLight: [274112.85416666645, 1543.375000000026],
                MetalSmashMedium: [275656.2291666665, 1267.3125000000027],
                MeteorImpact: [276923.5416666665, 3654.979166666692],
                MineExplosion: [280578.5208333332, 3293.687499999976],
                MineHover: [283872.20833333314, 3182.2916666666856],
                MowerFlesh1: [287054.4999999998, 944.9999999999932],
                MowerFlesh2: [287999.4999999998, 165.62499999997726],
                MowerFlesh3: [288165.1249999998, 365.3749999999718],
                MowerImpact1: [288530.49999999977, 617.0208333333562],
                MowerImpact2: [289147.52083333314, 776.9583333333117],
                MowerImpact3: [289924.47916666645, 819.4374999999923],
                MowerLoop: [290743.91666666645, 22166.291666666664],
                NeckBreak: [312910.20833333314, 789.4791666666947],
                PaddleBreak: [313699.6874999998, 985.4166666666515],
                PelvisSmash: [314685.10416666645, 925.9583333333126],
                Ping: [315611.06249999977, 88.85416666669244],
                PogoFrameSmash: [315699.91666666645, 953.479166666682],
                PogoRelease: [316653.39583333314, 553.2083333333162],
                PogoRelease2: [317206.60416666645, 646.3333333333594],
                SantaElbow1: [317852.9374999998, 429.95833333333167],
                SantaElbow2: [318282.89583333314, 385.62500000000455],
                SantaFoot1: [318668.52083333314, 448.12500000000455],
                SantaFoot2: [319116.64583333314, 342.54166666664787],
                SantaHip1: [319459.1874999998, 1074.7916666666697],
                SantaHip2: [320533.9791666665, 686.1875000000168],
                SantaKnee1: [321220.1666666665, 689.6458333333157],
                SantaKnee2: [321909.8124999998, 435.41666666664014],
                SantaMourn1: [322345.22916666645, 2096.833333333336],
                SantaMourn2: [324442.06249999977, 1363.4791666666501],
                SantaPelvis: [325805.54166666645, 1159.0833333333421],
                SantaShoulder1: [326964.62499999977, 538.4166666666488],
                SantaShoulder2: [327503.04166666645, 536.5625000000023],
                SantaSpikes: [328039.60416666645, 1066.6666666666629],
                SantaTorso: [329106.2708333331, 2523.9791666666633],
                SegwayJump: [331630.24999999977, 506.541666666692],
                SelectCharacter: [332136.79166666645, 252.20833333332848],
                SelectCharacter2: [332388.99999999977, 487.1249999999918],
                ShapeHit1: [332876.12499999977, 233.6666666666929],
                ShapeHit2: [333109.79166666645, 278.1666666666638],
                ShapeHit3: [333387.95833333314, 306.35416666666515],
                ShapeHit4: [333694.31249999977, 757.3333333333494],
                SkiImpact1: [334451.64583333314, 260.14583333335395],
                SkiImpact2: [334711.7916666665, 252.00000000000955],
                SkiLoop: [334963.7916666665, 9904.24999999999],
                SkiSmash: [344868.0416666665, 1425.0416666666865],
                SleighBellLoop: [346293.0833333332, 5733.43749999998],
                SleighImpact1: [352026.52083333314, 792.2500000000241],
                SleighImpact2: [352818.7708333332, 976.1458333333053],
                SleighImpact3: [353794.9166666665, 682.6666666666483],
                SleighSmash: [354477.58333333314, 2272.770833333311],
                SpikeBaseHit1: [356750.35416666645, 359.31249999998727],
                SpikeBaseHit2: [357109.66666666645, 325.4583333333585],
                SpringBoxBounce: [357435.1249999998, 1033.020833333353],
                StemSnap: [358468.14583333314, 505.1874999999768],
                Step1: [358973.33333333314, 89.16666666664241],
                Step2: [359062.49999999977, 85.62499999999318],
                Step3: [359148.12499999977, 62.937499999975444],
                Step4: [359211.06249999977, 68.54166666664696],
                StrapSnap1: [359279.6041666664, 262.89583333334576],
                StrapSnap2: [359542.4999999997, 232.29166666664014],
                SuperPretzel: [359774.7916666664, 35278.00000000002],
                SwishDown: [395052.7916666664, 204.22916666666424],
                SwishUp: [395257.0208333331, 128.06249999999864],
                SwooshFan: [395385.0833333331, 938.8958333333335],
                TVHit: [396323.9791666664, 293.39583333330665],
                TVSmash1: [396617.3749999997, 1394.0625000000182],
                TVSmash2: [398011.4374999997, 1393.3333333333167],
                TableBreak1: [399404.770833333, 659.6875000000182],
                TableBreak2: [400064.458333333, 655.3749999999923],
                Thud1: [400719.833333333, 273.70833333333167],
                Thud2: [400993.5416666664, 289.6250000000009],
                TireHit1: [401283.1666666664, 555.8333333333394],
                TireHit2: [401838.9999999997, 579.0625000000205],
                ToiletHit1: [402418.0624999997, 370.08333333335486],
                ToiletHit2: [402788.1458333331, 355.6874999999877],
                ToiletSmash1: [403143.8333333331, 1168.062500000019],
                ToiletSmash2: [404311.8958333331, 1472.2083333333558],
                ToiletSmash3: [405784.10416666645, 1258.3541666666633],
                TrashCanHit1: [407042.45833333314, 623.229166666647],
                TrashCanHit2: [407665.68749999977, 686.6041666666547],
                TrashCanSpill1: [408352.2916666664, 1170.0624999999718],
                TrashCanSpill2: [409522.3541666664, 1512.8958333333458],
                VanHit: [411035.2499999997, 712.8124999999841],
                VanSmash: [411748.0624999997, 1949.5416666666756],
                Victory: [413697.6041666664, 4086.0208333333503]
              }
            };
            function _() {
              var e;
              var t;
              var n = typeof Symbol == "function" ? Symbol : {};
              var r = n.iterator || "@@iterator";
              var i = n.toStringTag || "@@toStringTag";
              function s(n, r, i, s) {
                var h = r && r.prototype instanceof o ? r : o;
                var l = Object.create(h.prototype);
                v(l, "_invoke", function (n, r, i) {
                  var s;
                  var o;
                  var h;
                  var l = 0;
                  var d = i || [];
                  var c = false;
                  var u = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: p,
                    f: p.bind(e, 4),
                    d: function (t, n) {
                      s = t;
                      o = 0;
                      h = e;
                      u.n = n;
                      return a;
                    }
                  };
                  function p(n, r) {
                    o = n;
                    h = r;
                    t = 0;
                    for (; !c && l && !i && t < d.length; t++) {
                      var i;
                      var s = d[t];
                      var p = u.p;
                      var m = s[2];
                      if (n > 3) {
                        if (i = m === r) {
                          h = s[(o = s[4]) ? 5 : (o = 3, 3)];
                          s[4] = s[5] = e;
                        }
                      } else if (s[0] <= p) {
                        if (i = n < 2 && p < s[1]) {
                          o = 0;
                          u.v = r;
                          u.n = s[1];
                        } else if (p < m && (i = n < 3 || s[0] > r || r > m)) {
                          s[4] = n;
                          s[5] = r;
                          u.n = m;
                          o = 0;
                        }
                      }
                    }
                    if (i || n > 1) {
                      return a;
                    }
                    c = true;
                    throw r;
                  }
                  return function (i, d, m) {
                    if (l > 1) {
                      throw TypeError("Generator is already running");
                    }
                    if (c && d === 1) {
                      p(d, m);
                    }
                    o = d;
                    h = m;
                    while ((t = o < 2 ? e : h) || !c) {
                      if (!s) {
                        if (o) {
                          if (o < 3) {
                            if (o > 1) {
                              u.n = -1;
                            }
                            p(o, h);
                          } else {
                            u.n = h;
                          }
                        } else {
                          u.v = h;
                        }
                      }
                      try {
                        l = 2;
                        if (s) {
                          if (!o) {
                            i = "next";
                          }
                          if (t = s[i]) {
                            if (!(t = t.call(s, h))) {
                              throw TypeError("iterator result is not an object");
                            }
                            if (!t.done) {
                              return t;
                            }
                            h = t.value;
                            if (o < 2) {
                              o = 0;
                            }
                          } else {
                            if (o === 1 && (t = s.return)) {
                              t.call(s);
                            }
                            if (o < 2) {
                              h = TypeError("The iterator does not provide a '" + i + "' method");
                              o = 1;
                            }
                          }
                          s = e;
                        } else if ((t = (c = u.n < 0) ? h : n.call(r, u)) !== a) {
                          break;
                        }
                      } catch (t) {
                        s = e;
                        o = 1;
                        h = t;
                      } finally {
                        l = 1;
                      }
                    }
                    return {
                      value: t,
                      done: c
                    };
                  };
                }(n, i, s), true);
                return l;
              }
              var a = {};
              function o() {}
              function h() {}
              function l() {}
              t = Object.getPrototypeOf;
              var d = [][r] ? t(t([][r]())) : (v(t = {}, r, function () {
                return this;
              }), t);
              var c = l.prototype = o.prototype = Object.create(d);
              function u(e) {
                if (Object.setPrototypeOf) {
                  Object.setPrototypeOf(e, l);
                } else {
                  e.__proto__ = l;
                  v(e, i, "GeneratorFunction");
                }
                e.prototype = Object.create(c);
                return e;
              }
              h.prototype = l;
              v(c, "constructor", l);
              v(l, "constructor", h);
              h.displayName = "GeneratorFunction";
              v(l, i, "GeneratorFunction");
              v(c);
              v(c, i, "Generator");
              v(c, r, function () {
                return this;
              });
              v(c, "toString", function () {
                return "[object Generator]";
              });
              return (_ = function () {
                return {
                  w: s,
                  m: u
                };
              })();
            }
            function v(e, t, n, r) {
              var i = Object.defineProperty;
              try {
                i({}, "", {});
              } catch (e) {
                i = 0;
              }
              v = function (e, t, n, r) {
                function s(t, n) {
                  v(e, t, function (e) {
                    return this._invoke(t, n, e);
                  });
                }
                if (t) {
                  if (i) {
                    i(e, t, {
                      value: n,
                      enumerable: !r,
                      configurable: !r,
                      writable: !r
                    });
                  } else {
                    e[t] = n;
                  }
                } else {
                  s("next", 0);
                  s("throw", 1);
                  s("return", 2);
                }
              };
              v(e, t, n, r);
            }
            function y(e, t, n, r, i, s, a) {
              try {
                var o = e[s](a);
                var h = o.value;
              } catch (e) {
                n(e);
                return;
              }
              if (o.done) {
                t(h);
              } else {
                Promise.resolve(h).then(r, i);
              }
            }
            var g = function () {
              function e() {
                this.channelsById = new Map();
                this.addChannel("sfx");
                this.addChannel("music");
                this.addChannel("vo");
              }
              var t = e.prototype;
              t.loadSoundSprite = function () {
                var e;
                e = _().m(function e() {
                  var t = this;
                  return _().w(function (e) {
                    while (true) {
                      if (e.n === 0) {
                        return e.a(2, new Promise(function (e) {
                          if (m.w.enableAudio) {
                            t.soundSprite = new p.Howl({
                              src: ["assets-111pu7do4muiyxxfu/audiosprite.small.ogg", "assets-111pu7do4muiyxxfu/audiosprite.small.mp3"],
                              sprite: f._,
                              preload: true
                            });
                            t.soundSprite.once("load", function () {
                              return e();
                            });
                          } else {
                            e();
                          }
                        }));
                      }
                    }
                  }, e);
                });
                function t() {
                  var t = this;
                  var n = arguments;
                  return new Promise(function (r, i) {
                    var s = e.apply(t, n);
                    function a(e) {
                      y(s, r, i, a, o, "next", e);
                    }
                    function o(e) {
                      y(s, r, i, a, o, "throw", e);
                    }
                    a(undefined);
                  });
                }
                return function () {
                  return t.apply(this, arguments);
                };
              }();
              t.playSound = function (t, n) {
                return this.playSoundOnChannel(t, e.CHANNEL_SFX, n);
              };
              t.playSoundOnChannel = function (e, t, n) {
                var r = this.getChannelById(t);
                if (!r) {
                  throw Error("invalid sound channel id: " + t);
                }
                var i = new u(this.soundSprite, e, n);
                r.addSound(i);
                return i;
              };
              t.mute = function () {
                p.Howler.mute(true);
              };
              t.unmute = function () {
                p.Howler.mute(false);
              };
              t.setVolume = function (e) {
                p.Howler.volume(e);
              };
              t.pause = function () {
                this.channelsById.forEach(function (e) {
                  return e.pause();
                });
              };
              t.resume = function () {
                this.channelsById.forEach(function (e) {
                  return e.resume();
                });
              };
              t.stop = function () {
                this.channelsById.forEach(function (e) {
                  return e.stop();
                });
              };
              t.addChannel = function (e) {
                if (!this.channelsById.get(e)) {
                  this.channelsById.set(e, new h());
                }
              };
              t.getChannelById = function (e) {
                return this.channelsById.get(e);
              };
              return e;
            }();
            g.CHANNEL_SFX = "sfx";
            g.CHANNEL_VO = "vo";
            g.CHANNEL_MUSIC = "music";
            var w = new g();
          }
    });
})();
