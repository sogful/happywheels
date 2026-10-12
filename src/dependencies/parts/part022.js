(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        87833(e, t, n) {
            "use strict";
        
            n.d(t, {
              m: () => d
            });
            n(54554);
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(26099);
            n(2892);
            var r = n(4971);
            var i = n(27453);
            var s = n(35057);
            var a = n(79676);
            function o(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) {
                  r.writable = true;
                }
                Object.defineProperty(e, h(r.key), r);
              }
            }
            function h(e) {
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
            function l(e, t) {
              l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return l(e, t);
            }
            var d = function (e) {
              function t() {
                var t;
                (t = e.call(this) || this)._areaSounds = new Array();
                t._center = new r.bR();
                t._muted = false;
                t._systemMuted = false;
                t._volume = 1;
                t._musicVolume = 1;
                t._musicDuck = 1;
                var n = s.w.sharedObject.data.volume;
                if (typeof n == "number" && !isNaN(n)) {
                  t.setVolume(n, false);
                }
                var i = s.w.sharedObject.data.musicVolume;
                if (typeof i == "number" && !isNaN(i)) {
                  t.setMusicVolume(i, false);
                }
                if (s.w.sharedObject.data.muted == 1) {
                  t.mute();
                }
                return t;
              }
              var n;
              var h;
              h = e;
              (n = t).prototype = Object.create(h.prototype);
              n.prototype.constructor = n;
              l(n, h);
              var d = t.prototype;
              d.playSoundItem = function (e) {
                if (s.w.enableAudio) {
                  return i.xF.playSound(e);
                }
              };
              d.playMusicItem = function (e) {
                if (s.w.enableAudio) {
                  return i.xF.playSoundOnChannel(e, "music");
                }
              };
              d.playSoundInstance = function (e, t = 0, n = 0, r = null) {
                return i.xF.playSound(e, r);
              };
              d.playPointSoundInstance = function (e, t, n = 1, r = 0) {
                var i = new a.zW(e, t, n, r, this._center);
                if (i.soundChannel) {
                  this._areaSounds.push(i);
                  return i;
                } else {
                  return null;
                }
              };
              d.playAreaSoundInstance = function (e, t, n = 1, r = 0) {
                if (s.w.enableAudio) {
                  var i = new a.Gm(e, t, n, r, this._center);
                  if (i.soundChannel) {
                    this._areaSounds.push(i);
                    return i;
                  } else {
                    return null;
                  }
                }
              };
              d.playAreaSoundLoop = function (e, t, n = 1, r = 0) {
                var i = new a.Jm(e, t, n, r);
                this._areaSounds.push(i);
                return i;
              };
              d.playAreaSoundLoopStatic = function (e, t, n = 1, r = 0) {
                var i = new a.Pg(e, t, n, r);
                this._areaSounds.push(i);
                return i;
              };
              d.step = function () {
                this._center = s.w.currentSession.camera.midScreenPoint;
                for (var e = 0; e < this._areaSounds.length; e++) {
                  var t = this._areaSounds[e];
                  if (t.remove) {
                    t.stopSound();
                    this._areaSounds.splice(e, 1);
                    e -= 1;
                  } else {
                    t.areaCheck(this._center);
                  }
                }
              };
              d.systemMute = function () {
                i.xF.mute();
              };
              d.systemUnMute = function () {
                this._systemMuted = false;
                if (!this._muted) {
                  i.xF.unmute();
                }
              };
              d.mute = function () {
                this._muted = s.w.sharedObject.data.muted = true;
                i.xF.mute();
              };
              d.unMute = function () {
                this._muted = s.w.sharedObject.data.muted = false;
                if (this._volume === 0) {
                  var e = s.w.sharedObject.data.volumeBeforeMute;
                  this.setVolume(typeof e == "number" && e > 0 ? e : 1);
                }
                if (!this._systemMuted) {
                  i.xF.unmute();
                }
              };
              d.setVolume = function (e, t = true) {
                e = Math.min(1, Math.max(0, e));
                this._volume = e;
                if (t) {
                  if (e === 0) {
                    var n = s.w.sharedObject.data.volume;
                    if (typeof n == "number" && n > 0) {
                      s.w.sharedObject.data.volumeBeforeMute = n;
                    }
                  }
                  s.w.sharedObject.data.volume = e;
                }
                i.xF.setVolume(e);
              };
              d.duckMusic = function (e) {
                this._musicDuck = e;
                this.updateMusicVolume();
              };
              d.setMusicVolume = function (e, t = true) {
                e = Math.min(1, Math.max(0, e));
                this._musicVolume = e;
                if (t) {
                  s.w.sharedObject.data.musicVolume = e;
                }
                this.updateMusicVolume();
              };
              d.updateMusicVolume = function () {
                i.xF.getChannelById("music").volume = this._musicDuck * this._musicVolume;
              };
              d.stopAreaSounds = function () {
                for (var e = 0; e < this._areaSounds.length; e++) {
                  this._areaSounds[e].stopSound();
                }
                this._areaSounds = new Array();
              };
              d.stopAllSounds = function () {
                this.stopAreaSounds();
                i.xF.stop();
              };
              return function (e, t, n) {
                if (t) {
                  o(e.prototype, t);
                }
                if (n) {
                  o(e, n);
                }
                Object.defineProperty(e, "prototype", {
                  writable: false
                });
                return e;
              }(t, [{
                key: "isMuted",
                get: function () {
                  return this._muted;
                }
              }, {
                key: "volume",
                get: function () {
                  return this._volume;
                }
              }, {
                key: "musicVolume",
                get: function () {
                  return this._musicVolume;
                }
              }], [{
                key: "instance",
                get: function () {
                  if (t._instance == null) {
                    t._instance = new t();
                  }
                  return t._instance;
                }
              }]);
            }(r.Qe);
            d.SOUND_PATH = "";
          },
        45177(e, t, n) {
            "use strict";
        
            function r(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) {
                  r.writable = true;
                }
                Object.defineProperty(e, i(r.key), r);
              }
            }
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
            n.d(t, {
              G: () => a
            });
            n(23792);
            n(36033);
            n(26099);
            n(47764);
            n(62953);
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(2892);
            function s() {}
            var a = function () {
              function e(e) {
                this._sfxDictionary = new Map();
                this._sfxLookup = [];
                this._sfxArray = [];
                this._sfxDictionary.set("wg voice 1", "Char1Foot1");
                this._sfxDictionary.set("wg voice 2", "Char1Foot2");
                this._sfxDictionary.set("wg voice 3", "Char1Elbow1");
                this._sfxDictionary.set("wg voice 4", "Char1Elbow2");
                this._sfxDictionary.set("wg voice 5", "Char1Knee1");
                this._sfxDictionary.set("wg voice 6", "Char1Knee2");
                this._sfxDictionary.set("wg voice 7", "Char1Shoulder1");
                this._sfxDictionary.set("wg voice 8", "Char1Shoulder2");
                this._sfxDictionary.set("wg voice 9", "Char1Hip1");
                this._sfxDictionary.set("wg voice 10", "Char1Hip2");
                this._sfxDictionary.set("wg voice 11", "Char1Pelvis");
                this._sfxDictionary.set("wg voice 12", "Char1Torso");
                this._sfxDictionary.set("wg voice 13", "Char1Spikes");
                this._sfxDictionary.set("sg voice 1", "Char2Foot1");
                this._sfxDictionary.set("sg voice 2", "Char2Foot2");
                this._sfxDictionary.set("sg voice 3", "Char2Elbow1");
                this._sfxDictionary.set("sg voice 4", "Char2Elbow2");
                this._sfxDictionary.set("sg voice 5", "Char2Knee1");
                this._sfxDictionary.set("sg voice 6", "Char2Knee2");
                this._sfxDictionary.set("sg voice 7", "Char2Shoulder1");
                this._sfxDictionary.set("sg voice 8", "Char2Shoulder2");
                this._sfxDictionary.set("sg voice 9", "Char2Hip1");
                this._sfxDictionary.set("sg voice 10", "Char2Hip2");
                this._sfxDictionary.set("sg voice 11", "Char2Pelvis");
                this._sfxDictionary.set("sg voice 12", "Char2Torso");
                this._sfxDictionary.set("sg voice 13", "Char2Spikes");
                this._sfxDictionary.set("id voice 1", "Char3Foot1");
                this._sfxDictionary.set("id voice 2", "Char3Foot2");
                this._sfxDictionary.set("id voice 3", "Char3Elbow1");
                this._sfxDictionary.set("id voice 4", "Char3Elbow2");
                this._sfxDictionary.set("id voice 5", "Char3Knee1");
                this._sfxDictionary.set("id voice 6", "Char3Knee2");
                this._sfxDictionary.set("id voice 7", "Char3Shoulder1");
                this._sfxDictionary.set("id voice 8", "Char3Shoulder2");
                this._sfxDictionary.set("id voice 9", "Char3Hip1");
                this._sfxDictionary.set("id voice 10", "Char3Hip2");
                this._sfxDictionary.set("id voice 11", "Char3Pelvis");
                this._sfxDictionary.set("id voice 12", "Char3Torso");
                this._sfxDictionary.set("id voice 13", "Char3Spikes");
                this._sfxDictionary.set("id voice 14", "Char3Damnit");
                this._sfxDictionary.set("son voice 1", "Kid1Foot1");
                this._sfxDictionary.set("son voice 2", "Kid1Foot2");
                this._sfxDictionary.set("son voice 3", "Kid1Elbow1");
                this._sfxDictionary.set("son voice 4", "Kid1Elbow2");
                this._sfxDictionary.set("son voice 5", "Kid1Knee1");
                this._sfxDictionary.set("son voice 6", "Kid1Knee2");
                this._sfxDictionary.set("son voice 7", "Kid1Shoulder1");
                this._sfxDictionary.set("son voice 8", "Kid1Shoulder2");
                this._sfxDictionary.set("son voice 9", "Kid1Hip1");
                this._sfxDictionary.set("son voice 10", "Kid1Hip2");
                this._sfxDictionary.set("son voice 11", "Kid1Pelvis");
                this._sfxDictionary.set("son voice 12", "Kid1Torso");
                this._sfxDictionary.set("son voice 13", "Kid1Spikes");
                this._sfxDictionary.set("es voice 1", "Char4Foot1");
                this._sfxDictionary.set("es voice 2", "Char4Foot2");
                this._sfxDictionary.set("es voice 3", "Char4Elbow1");
                this._sfxDictionary.set("es voice 4", "Char4Elbow2");
                this._sfxDictionary.set("es voice 5", "Char4Knee1");
                this._sfxDictionary.set("es voice 6", "Char4Knee2");
                this._sfxDictionary.set("es voice 7", "Char4Shoulder1");
                this._sfxDictionary.set("es voice 8", "Char4Shoulder2");
                this._sfxDictionary.set("es voice 9", "Char4Hip1");
                this._sfxDictionary.set("es voice 10", "Char4Hip2");
                this._sfxDictionary.set("es voice 11", "Char4Pelvis");
                this._sfxDictionary.set("es voice 12", "Char4Torso");
                this._sfxDictionary.set("es voice 13", "Char4Spikes");
                this._sfxDictionary.set("mo1 voice 1", "Char8Foot1");
                this._sfxDictionary.set("mo1 voice 2", "Char8Foot2");
                this._sfxDictionary.set("mo1 voice 3", "Char8Elbow1");
                this._sfxDictionary.set("mo1 voice 4", "Char8Elbow2");
                this._sfxDictionary.set("mo1 voice 5", "Char8Knee1");
                this._sfxDictionary.set("mo1 voice 6", "Char8Knee2");
                this._sfxDictionary.set("mo1 voice 7", "Char8Shoulder1");
                this._sfxDictionary.set("mo1 voice 8", "Char8Shoulder2");
                this._sfxDictionary.set("mo1 voice 9", "Char8Hip1");
                this._sfxDictionary.set("mo1 voice 10", "Char8Hip2");
                this._sfxDictionary.set("mo1 voice 11", "Char8Pelvis");
                this._sfxDictionary.set("mo1 voice 12", "Char8Torso");
                this._sfxDictionary.set("mo1 voice 13", "Char8Spikes");
                this._sfxDictionary.set("mo2 voice 1", "Char9Foot1");
                this._sfxDictionary.set("mo2 voice 2", "Char9Foot2");
                this._sfxDictionary.set("mo2 voice 3", "Char9Elbow1");
                this._sfxDictionary.set("mo2 voice 4", "Char9Elbow2");
                this._sfxDictionary.set("mo2 voice 5", "Char9Knee1");
                this._sfxDictionary.set("mo2 voice 6", "Char9Knee2");
                this._sfxDictionary.set("mo2 voice 7", "Char9Shoulder1");
                this._sfxDictionary.set("mo2 voice 8", "Char9Shoulder2");
                this._sfxDictionary.set("mo2 voice 9", "Char9Hip1");
                this._sfxDictionary.set("mo2 voice 10", "Char9Hip2");
                this._sfxDictionary.set("mo2 voice 11", "Char9Pelvis");
                this._sfxDictionary.set("mo2 voice 12", "Char9Torso");
                this._sfxDictionary.set("mo2 voice 13", "Char9Spikes");
                this._sfxDictionary.set("mo2 voice 14", "Char9Mourn");
                this._sfxDictionary.set("lm voice 1", "Char11Foot1");
                this._sfxDictionary.set("lm voice 2", "Char11Foot2");
                this._sfxDictionary.set("lm voice 3", "Char11Elbow1");
                this._sfxDictionary.set("lm voice 4", "Char11Elbow2");
                this._sfxDictionary.set("lm voice 5", "Char11Knee1");
                this._sfxDictionary.set("lm voice 6", "Char11Knee2");
                this._sfxDictionary.set("lm voice 7", "Char11Shoulder1");
                this._sfxDictionary.set("lm voice 8", "Char11Shoulder2");
                this._sfxDictionary.set("lm voice 9", "Char11Hip1");
                this._sfxDictionary.set("lm voice 10", "Char11Hip2");
                this._sfxDictionary.set("lm voice 11", "Char11Pelvis");
                this._sfxDictionary.set("lm voice 12", "Char11Torso");
                this._sfxDictionary.set("lm voice 13", "Char11Spikes");
                this._sfxDictionary.set("sc voice 1", "SantaFoot1");
                this._sfxDictionary.set("sc voice 2", "SantaFoot2");
                this._sfxDictionary.set("sc voice 3", "SantaElbow1");
                this._sfxDictionary.set("sc voice 4", "SantaElbow2");
                this._sfxDictionary.set("sc voice 5", "SantaKnee1");
                this._sfxDictionary.set("sc voice 6", "SantaKnee2");
                this._sfxDictionary.set("sc voice 7", "SantaShoulder1");
                this._sfxDictionary.set("sc voice 8", "SantaShoulder2");
                this._sfxDictionary.set("sc voice 9", "SantaHip1");
                this._sfxDictionary.set("sc voice 10", "SantaHip2");
                this._sfxDictionary.set("sc voice 11", "SantaPelvis");
                this._sfxDictionary.set("sc voice 12", "SantaTorso");
                this._sfxDictionary.set("sc voice 13", "SantaSpikes");
                this._sfxDictionary.set("sc voice 14", "SantaMourn1");
                this._sfxDictionary.set("sc voice 15", "SantaMourn2");
                this._sfxDictionary.set("elf voice 1", "Elf1Foot1");
                this._sfxDictionary.set("elf voice 2", "Elf1Foot2");
                this._sfxDictionary.set("elf voice 3", "Elf1Elbow1");
                this._sfxDictionary.set("elf voice 4", "Elf1Elbow2");
                this._sfxDictionary.set("elf voice 5", "Elf1Knee1");
                this._sfxDictionary.set("elf voice 6", "Elf1Knee2");
                this._sfxDictionary.set("elf voice 7", "Elf1Shoulder1");
                this._sfxDictionary.set("elf voice 8", "Elf1Shoulder2");
                this._sfxDictionary.set("elf voice 9", "Elf1Hip1");
                this._sfxDictionary.set("elf voice 10", "Elf1Hip2");
                this._sfxDictionary.set("elf voice 11", "Elf1Pelvis");
                this._sfxDictionary.set("elf voice 12", "Elf1Torso");
                this._sfxDictionary.set("elf voice 13", "Elf1Spikes");
                this._sfxDictionary.set("pm voice 1", "Char12Foot1");
                this._sfxDictionary.set("pm voice 2", "Char12Foot2");
                this._sfxDictionary.set("pm voice 3", "Char12Elbow1");
                this._sfxDictionary.set("pm voice 4", "Char12Elbow2");
                this._sfxDictionary.set("pm voice 5", "Char12Knee1");
                this._sfxDictionary.set("pm voice 6", "Char12Knee2");
                this._sfxDictionary.set("pm voice 7", "Char12Shoulder1");
                this._sfxDictionary.set("pm voice 8", "Char12Shoulder2");
                this._sfxDictionary.set("pm voice 9", "Char12Hip1");
                this._sfxDictionary.set("pm voice 10", "Char12Hip2");
                this._sfxDictionary.set("pm voice 11", "Char12Pelvis");
                this._sfxDictionary.set("pm voice 12", "Char12Torso");
                this._sfxDictionary.set("pm voice 13", "Char12Spikes");
                this._sfxDictionary.set("girl voice 1", "Kid2Foot1");
                this._sfxDictionary.set("girl voice 2", "Kid2Foot2");
                this._sfxDictionary.set("girl voice 3", "Kid2Elbow1");
                this._sfxDictionary.set("girl voice 4", "Kid2Elbow2");
                this._sfxDictionary.set("girl voice 5", "Kid2Knee1");
                this._sfxDictionary.set("girl voice 6", "Kid2Knee2");
                this._sfxDictionary.set("girl voice 7", "Kid2Shoulder1");
                this._sfxDictionary.set("girl voice 8", "Kid2Shoulder2");
                this._sfxDictionary.set("girl voice 9", "Kid2Hip1");
                this._sfxDictionary.set("girl voice 10", "Kid2Hip2");
                this._sfxDictionary.set("girl voice 11", "Kid2Pelvis");
                this._sfxDictionary.set("girl voice 12", "Kid2Torso");
                this._sfxDictionary.set("girl voice 13", "Kid2Spikes");
                this._sfxDictionary.set("hm voice 1", "HeliFoot1");
                this._sfxDictionary.set("hm voice 2", "HeliFoot2");
                this._sfxDictionary.set("hm voice 3", "HeliElbow1");
                this._sfxDictionary.set("hm voice 4", "HeliElbow2");
                this._sfxDictionary.set("hm voice 5", "HeliKnee1");
                this._sfxDictionary.set("hm voice 6", "HeliKnee2");
                this._sfxDictionary.set("hm voice 7", "HeliShoulder1");
                this._sfxDictionary.set("hm voice 8", "HeliShoulder2");
                this._sfxDictionary.set("hm voice 9", "HeliHip1");
                this._sfxDictionary.set("hm voice 10", "HeliHip2");
                this._sfxDictionary.set("hm voice 11", "HeliPelvis");
                this._sfxDictionary.set("hm voice 12", "HeliTorso");
                this._sfxDictionary.set("hm voice 13", "HeliSpikes");
                this._sfxDictionary.set("hm voice 14", "HeliHelp");
                this._sfxDictionary.set("arrow fire 1", "ArrowFire1");
                this._sfxDictionary.set("arrow fire 2", "ArrowFire2");
                this._sfxDictionary.set("arrow hit 1", "ArrowFlesh1");
                this._sfxDictionary.set("arrow hit 2", "ArrowFlesh2");
                this._sfxDictionary.set("arrow hit 3", "ArrowFlesh3");
                this._sfxDictionary.set("wood snap 1", "ArrowSnap1");
                this._sfxDictionary.set("wood snap 2", "ArrowSnap2");
                this._sfxDictionary.set("arrow hit 4", "ArrowSolid1");
                this._sfxDictionary.set("arrow hit 5", "ArrowSolid2");
                this._sfxDictionary.set("heavy impact 2", "BallHit");
                this._sfxDictionary.set("heavy woosh", "BallSwing");
                this._sfxDictionary.set("metal impact 1", "BikeHit1");
                this._sfxDictionary.set("metal impact 2", "BikeHit2");
                this._sfxDictionary.set("metal impact 3", "BikeHit3");
                this._sfxDictionary.set("metal smash 1", "BikeSmash1");
                this._sfxDictionary.set("rubber impact 1", "BikeTire");
                this._sfxDictionary.set("plastic impact 1", "BikeTireSmash1");
                this._sfxDictionary.set("stab 1", "BladeFlesh1");
                this._sfxDictionary.set("stab 2", "BladeFlesh2");
                this._sfxDictionary.set("stab 3", "BladeFlesh3");
                this._sfxDictionary.set("bone snap 1", "BoneBreak1");
                this._sfxDictionary.set("bone snap 2", "BoneBreak2");
                this._sfxDictionary.set("bone snap 3", "BoneBreak3");
                this._sfxDictionary.set("bone snap 4", "BoneBreak4");
                this._sfxDictionary.set("plastic impact 1", "BoomboxHit");
                this._sfxDictionary.set("debris smash 1", "BoomboxCrush1");
                this._sfxDictionary.set("debris smash 2", "BoomboxSmash1");
                this._sfxDictionary.set("debris smash 3", "BoomboxSmash2");
                this._sfxDictionary.set("cannon blast", "Cannon1");
                this._sfxDictionary.set("rubber impact 2", "CarTire1");
                this._sfxDictionary.set("chain snap 1", "ChainBreak1");
                this._sfxDictionary.set("chain snap 2", "ChainBreak2");
                this._sfxDictionary.set("chain snap 3", "ChainBreak3");
                this._sfxDictionary.set("metal impact 4", "ChairHit1");
                this._sfxDictionary.set("metal impact 5", "ChairHit2");
                this._sfxDictionary.set("metal impact 6", "ChairHit3");
                this._sfxDictionary.set("burst 1", "ChestSmash");
                this._sfxDictionary.set("switch on", "DoubleClick");
                this._sfxDictionary.set("switch off", "DoubleClickReverse");
                this._sfxDictionary.set("long drum", "DrumLong");
                this._sfxDictionary.set("splat 1", "FoodSplat1");
                this._sfxDictionary.set("splat 2", "FoodSplat2");
                this._sfxDictionary.set("splat 3", "FoodSplat3");
                this._sfxDictionary.set("shatter 7", "GlassHeavy1");
                this._sfxDictionary.set("shatter 8", "GlassHeavy2");
                this._sfxDictionary.set("glass impact 1", "GlassImpact1");
                this._sfxDictionary.set("glass impact 2", "GlassImpact2");
                this._sfxDictionary.set("shatter 1", "GlassLight1");
                this._sfxDictionary.set("shatter 2", "GlassLight2");
                this._sfxDictionary.set("shatter 3", "GlassMid1");
                this._sfxDictionary.set("shatter 4", "GlassMid2");
                this._sfxDictionary.set("harpoon fire", "HarpoonFire");
                this._sfxDictionary.set("stab 4", "HarpoonFlesh1");
                this._sfxDictionary.set("stab 5", "HarpoonFlesh2");
                this._sfxDictionary.set("stab 6", "HarpoonSolid1");
                this._sfxDictionary.set("stab 7", "HarpoonSolid2");
                this._sfxDictionary.set("burst 2", "HeadSmash");
                this._sfxDictionary.set("rapid beep", "HomingMineBeep");
                this._sfxDictionary.set("beep on", "HomingMineFind");
                this._sfxDictionary.set("metal impact 12", "HomingMineImpact1");
                this._sfxDictionary.set("metal impact 13", "HomingMineImpact2");
                this._sfxDictionary.set("beep off", "HomingMineLose");
                this._sfxDictionary.set("metal impact 14", "IBeamHit1");
                this._sfxDictionary.set("metal impact 15", "IBeamHit2");
                this._sfxDictionary.set("stab 8", "ImpaleSpikes1");
                this._sfxDictionary.set("stab 9", "ImpaleSpikes2");
                this._sfxDictionary.set("stab 10", "ImpaleSpikes3");
                this._sfxDictionary.set("jet 1", "Jet1");
                this._sfxDictionary.set("jet 2", "Jet2");
                this._sfxDictionary.set("jet 3", "Jet3");
                this._sfxDictionary.set("tear 1", "LigTear1");
                this._sfxDictionary.set("tear 2", "LigTear2");
                this._sfxDictionary.set("limb rip 1", "LimbRip1");
                this._sfxDictionary.set("limb rip 2", "LimbRip2");
                this._sfxDictionary.set("limb rip 3", "LimbRip3");
                this._sfxDictionary.set("limb rip 4", "LimbRip4");
                this._sfxDictionary.set("wood smash 2", "LumberBreak");
                this._sfxDictionary.set("wood impact 1", "LumberHit1");
                this._sfxDictionary.set("wood impact 2", "LumberHit2");
                this._sfxDictionary.set("button press 1", "MenuSelect");
                this._sfxDictionary.set("button press 2", "MenuSelect2");
                this._sfxDictionary.set("heavy smash 1", "MetalSmashHeavy");
                this._sfxDictionary.set("heavy smash 2", "MetalSmashHeavy2");
                this._sfxDictionary.set("heavy smash 3", "MetalSmashHeavy3");
                this._sfxDictionary.set("debris smash 4", "MetalSmashLight");
                this._sfxDictionary.set("metal smash 2", "MetalSmashMedium");
                this._sfxDictionary.set("heavy impact 1", "MeteorImpact");
                this._sfxDictionary.set("explosion", "MineExplosion");
                this._sfxDictionary.set("stab 11", "MowerFlesh1");
                this._sfxDictionary.set("stab 12", "MowerFlesh2");
                this._sfxDictionary.set("stab 13", "MowerFlesh3");
                this._sfxDictionary.set("saw 1", "MowerImpact1");
                this._sfxDictionary.set("saw 2", "MowerImpact2");
                this._sfxDictionary.set("saw 3", "MowerImpact3");
                this._sfxDictionary.set("limb rip 5", "NeckBreak");
                this._sfxDictionary.set("metal smash 4", "PaddleBreak");
                this._sfxDictionary.set("burst 3", "PelvisSmash");
                this._sfxDictionary.set("ping", "Ping");
                this._sfxDictionary.set("debris smash 7", "PogoFrameSmash");
                this._sfxDictionary.set("pogo 1", "PogoRelease");
                this._sfxDictionary.set("pogo 2", "PogoRelease2");
                this._sfxDictionary.set("air jump", "SegwayJump");
                this._sfxDictionary.set("select 1", "SelectCharacter");
                this._sfxDictionary.set("select 2", "SelectCharacter2");
                this._sfxDictionary.set("thud 1", "ShapeHit1");
                this._sfxDictionary.set("thud 2", "ShapeHit2");
                this._sfxDictionary.set("thud 3", "ShapeHit3");
                this._sfxDictionary.set("thud 4", "ShapeHit4");
                this._sfxDictionary.set("metal impact 16", "SkiImpact1");
                this._sfxDictionary.set("metal impact 17", "SkiImpact2");
                this._sfxDictionary.set("metal smash 3", "SkiSmash");
                this._sfxDictionary.set("wood impact 3", "SleighImpact1");
                this._sfxDictionary.set("wood impact 4", "SleighImpact2");
                this._sfxDictionary.set("wood impact 5", "SleighImpact3");
                this._sfxDictionary.set("heavy smash 4", "SleighSmash");
                this._sfxDictionary.set("metal impact 7", "SpikeBaseHit1");
                this._sfxDictionary.set("metal impact 8", "SpikeBaseHit2");
                this._sfxDictionary.set("spring box", "SpringBoxBounce");
                this._sfxDictionary.set("wood snap 4", "StemSnap");
                this._sfxDictionary.set("footstep 1", "Step1");
                this._sfxDictionary.set("footstep 2", "Step2");
                this._sfxDictionary.set("footstep 3", "Step3");
                this._sfxDictionary.set("footstep 4", "Step4");
                this._sfxDictionary.set("strap snap 1", "StrapSnap1");
                this._sfxDictionary.set("strap snap 2", "StrapSnap2");
                this._sfxDictionary.set("swish 1", "SwishDown");
                this._sfxDictionary.set("swish 2", "SwishUp");
                this._sfxDictionary.set("wood snap 3", "TableBreak1");
                this._sfxDictionary.set("wood smash 1", "TableBreak2");
                this._sfxDictionary.set("thud 5", "Thud1");
                this._sfxDictionary.set("thud 6", "Thud2");
                this._sfxDictionary.set("rubber impact 3", "TireHit1");
                this._sfxDictionary.set("rubber impact 4", "TireHit2");
                this._sfxDictionary.set("porcelain impact 1", "ToiletHit1");
                this._sfxDictionary.set("porcelain impact 2", "ToiletHit2");
                this._sfxDictionary.set("wet smash 1", "ToiletSmash1");
                this._sfxDictionary.set("wet smash 2", "ToiletSmash2");
                this._sfxDictionary.set("wet smash 3", "ToiletSmash3");
                this._sfxDictionary.set("metal impact 9", "TrashCanHit1");
                this._sfxDictionary.set("metal impact 10", "TrashCanHit2");
                this._sfxDictionary.set("debris smash 5", "TrashCanSpill1");
                this._sfxDictionary.set("debris smash 6", "TrashCanSpill2");
                this._sfxDictionary.set("plastic impact 2", "TVHit");
                this._sfxDictionary.set("shatter 5", "TVSmash1");
                this._sfxDictionary.set("shatter 6", "TVSmash2");
                this._sfxDictionary.set("metal impact 11", "VanHit");
                this._sfxDictionary.set("heavy smash 5", "VanSmash");
                this._sfxDictionary.set("wood impact 6", "BasketHit");
                this._sfxDictionary.set("wood smash 3", "BasketSmash");
                this._sfxDictionary.set("metal impact 18", "MetalRicochet1");
                this._sfxDictionary.set("metal impact 19", "MetalRicochet2");
                this._sfxDictionary.set("metal impact 20", "MetalRicochet3");
                this._sfxDictionary.set("heavy smash 6", "MetalSmashHeavy4");
                this._sfxLookup = ["wg voice 1", "wg voice 2", "wg voice 3", "wg voice 4", "wg voice 5", "wg voice 6", "wg voice 7", "wg voice 8", "wg voice 9", "wg voice 10", "wg voice 11", "wg voice 12", "wg voice 13", "sg voice 1", "sg voice 2", "sg voice 3", "sg voice 4", "sg voice 5", "sg voice 6", "sg voice 7", "sg voice 8", "sg voice 9", "sg voice 10", "sg voice 11", "sg voice 12", "sg voice 13", "id voice 1", "id voice 2", "id voice 3", "id voice 4", "id voice 5", "id voice 6", "id voice 7", "id voice 8", "id voice 9", "id voice 10", "id voice 11", "id voice 12", "id voice 13", "id voice 14", "son voice 1", "son voice 2", "son voice 3", "son voice 4", "son voice 5", "son voice 6", "son voice 7", "son voice 8", "son voice 9", "son voice 10", "son voice 11", "son voice 12", "son voice 13", "es voice 1", "es voice 2", "es voice 3", "es voice 4", "es voice 5", "es voice 6", "es voice 7", "es voice 8", "es voice 9", "es voice 10", "es voice 11", "es voice 12", "es voice 13", "mo1 voice 1", "mo1 voice 2", "mo1 voice 3", "mo1 voice 4", "mo1 voice 5", "mo1 voice 6", "mo1 voice 7", "mo1 voice 8", "mo1 voice 9", "mo1 voice 10", "mo1 voice 11", "mo1 voice 12", "mo1 voice 13", "mo2 voice 1", "mo2 voice 2", "mo2 voice 3", "mo2 voice 4", "mo2 voice 5", "mo2 voice 6", "mo2 voice 7", "mo2 voice 8", "mo2 voice 9", "mo2 voice 10", "mo2 voice 11", "mo2 voice 12", "mo2 voice 13", "mo2 voice 14", "lm voice 1", "lm voice 2", "lm voice 3", "lm voice 4", "lm voice 5", "lm voice 6", "lm voice 7", "lm voice 8", "lm voice 9", "lm voice 10", "lm voice 11", "lm voice 12", "lm voice 13", "sc voice 1", "sc voice 2", "sc voice 3", "sc voice 4", "sc voice 5", "sc voice 6", "sc voice 7", "sc voice 8", "sc voice 9", "sc voice 10", "sc voice 11", "sc voice 12", "sc voice 13", "sc voice 14", "sc voice 15", "elf voice 1", "elf voice 2", "elf voice 3", "elf voice 4", "elf voice 5", "elf voice 6", "elf voice 7", "elf voice 8", "elf voice 9", "elf voice 10", "elf voice 11", "elf voice 12", "elf voice 13", "pm voice 1", "pm voice 2", "pm voice 3", "pm voice 4", "pm voice 5", "pm voice 6", "pm voice 7", "pm voice 8", "pm voice 9", "pm voice 10", "pm voice 11", "pm voice 12", "pm voice 13", "metal smash 1", "debris smash 1", "debris smash 2", "debris smash 3", "debris smash 4", "metal smash 2", "metal smash 3", "wet smash 1", "wet smash 2", "wet smash 3", "debris smash 5", "debris smash 6", "wood smash 1", "metal smash 4", "debris smash 7", "wood smash 2", "heavy smash 1", "heavy smash 2", "heavy smash 3", "heavy smash 4", "heavy smash 5", "metal impact 1", "metal impact 2", "metal impact 3", "plastic impact 1", "metal impact 4", "metal impact 5", "metal impact 6", "wood impact 1", "wood impact 2", "metal impact 7", "metal impact 8", "porcelain impact 1", "porcelain impact 2", "metal impact 9", "metal impact 10", "plastic impact 2", "metal impact 11", "metal impact 12", "metal impact 13", "metal impact 14", "metal impact 15", "wood impact 3", "wood impact 4", "wood impact 5", "metal impact 16", "metal impact 17", "rubber impact 1", "rubber impact 2", "rubber impact 3", "rubber impact 4", "glass impact 1", "glass impact 2", "heavy impact 1", "heavy impact 2", "stab 1", "stab 2", "stab 3", "stab 4", "stab 5", "stab 6", "stab 7", "stab 8", "stab 9", "stab 10", "stab 11", "stab 12", "stab 13", "bone snap 1", "bone snap 2", "bone snap 3", "bone snap 4", "burst 1", "burst 2", "burst 3", "tear 1", "tear 2", "limb rip 1", "limb rip 2", "limb rip 3", "limb rip 4", "limb rip 5", "splat 1", "splat 2", "splat 3", "wood snap 1", "wood snap 2", "wood snap 3", "wood snap 4", "chain snap 1", "chain snap 2", "chain snap 3", "strap snap 1", "strap snap 2", "shatter 1", "shatter 2", "shatter 3", "shatter 4", "shatter 5", "shatter 6", "shatter 7", "shatter 8", "thud 1", "thud 2", "thud 3", "thud 4", "thud 5", "thud 6", "air jump", "cannon blast", "arrow fire 1", "arrow fire 2", "arrow hit 1", "arrow hit 2", "arrow hit 3", "arrow hit 4", "arrow hit 5", "beep on", "beep off", "button press 1", "button press 2", "explosion", "footstep 1", "footstep 2", "footstep 3", "footstep 4", "harpoon fire", "heavy woosh", "jet 1", "jet 2", "jet 3", "long drum", "ping", "pogo 1", "pogo 2", "rapid beep", "saw 1", "saw 2", "saw 3", "select 1", "select 2", "swish 1", "swish 2", "switch on", "switch off", "spring box", "girl voice 1", "girl voice 2", "girl voice 3", "girl voice 4", "girl voice 5", "girl voice 6", "girl voice 7", "girl voice 8", "girl voice 9", "girl voice 10", "girl voice 11", "girl voice 12", "girl voice 13", "wood impact 6", "wood smash 3", "hm voice 1", "hm voice 2", "hm voice 3", "hm voice 4", "hm voice 5", "hm voice 6", "hm voice 7", "hm voice 8", "hm voice 9", "hm voice 10", "hm voice 11", "hm voice 12", "hm voice 13", "hm voice 14", "metal impact 18", "metal impact 19", "metal impact 20", "heavy smash 6"];
                this._sfxArray = [["air", "air jump", "heavy woosh", "swish 1", "swish 2"], ["character voices", ["wheelchair guy", "wg voice 1", "wg voice 2", "wg voice 3", "wg voice 4", "wg voice 5", "wg voice 6", "wg voice 7", "wg voice 8", "wg voice 9", "wg voice 10", "wg voice 11", "wg voice 12", "wg voice 13"], ["segway guy", "sg voice 1", "sg voice 2", "sg voice 3", "sg voice 4", "sg voice 5", "sg voice 6", "sg voice 7", "sg voice 8", "sg voice 9", "sg voice 10", "sg voice 11", "sg voice 12", "sg voice 13"], ["irresponsible dad", "id voice 1", "id voice 2", "id voice 3", "id voice 4", "id voice 5", "id voice 6", "id voice 7", "id voice 8", "id voice 9", "id voice 10", "id voice 11", "id voice 12", "id voice 13", "id voice 14"], ["irresponsible son", "son voice 1", "son voice 2", "son voice 3", "son voice 4", "son voice 5", "son voice 6", "son voice 7", "son voice 8", "son voice 9", "son voice 10", "son voice 11", "son voice 12", "son voice 13"], ["effective shopper", "es voice 1", "es voice 2", "es voice 3", "es voice 4", "es voice 5", "es voice 6", "es voice 7", "es voice 8", "es voice 9", "es voice 10", "es voice 11", "es voice 12", "es voice 13"], ["moped guy", "mo1 voice 1", "mo1 voice 2", "mo1 voice 3", "mo1 voice 4", "mo1 voice 5", "mo1 voice 6", "mo1 voice 7", "mo1 voice 8", "mo1 voice 9", "mo1 voice 10", "mo1 voice 11", "mo1 voice 12", "mo1 voice 13"], ["moped girl", "mo2 voice 1", "mo2 voice 2", "mo2 voice 3", "mo2 voice 4", "mo2 voice 5", "mo2 voice 6", "mo2 voice 7", "mo2 voice 8", "mo2 voice 9", "mo2 voice 10", "mo2 voice 11", "mo2 voice 12", "mo2 voice 13", "mo2 voice 14"], ["lawnmower man", "lm voice 1", "lm voice 2", "lm voice 3", "lm voice 4", "lm voice 5", "lm voice 6", "lm voice 7", "lm voice 8", "lm voice 9", "lm voice 10", "lm voice 11", "lm voice 12", "lm voice 13"], ["santa claus", "sc voice 1", "sc voice 2", "sc voice 3", "sc voice 4", "sc voice 5", "sc voice 6", "sc voice 7", "sc voice 8", "sc voice 9", "sc voice 10", "sc voice 11", "sc voice 12", "sc voice 13", "sc voice 14", "sc voice 15"], ["elf", "elf voice 1", "elf voice 2", "elf voice 3", "elf voice 4", "elf voice 5", "elf voice 6", "elf voice 7", "elf voice 8", "elf voice 9", "elf voice 10", "elf voice 11", "elf voice 12", "elf voice 13"], ["pogostick man", "pm voice 1", "pm voice 2", "pm voice 3", "pm voice 4", "pm voice 5", "pm voice 6", "pm voice 7", "pm voice 8", "pm voice 9", "pm voice 10", "pm voice 11", "pm voice 12", "pm voice 13"], ["girl", "girl voice 1", "girl voice 2", "girl voice 3", "girl voice 4", "girl voice 5", "girl voice 6", "girl voice 7", "girl voice 8", "girl voice 9", "girl voice 10", "girl voice 11", "girl voice 12", "girl voice 13"], ["helicopter man", "hm voice 1", "hm voice 2", "hm voice 3", "hm voice 4", "hm voice 5", "hm voice 6", "hm voice 7", "hm voice 8", "hm voice 9", "hm voice 10", "hm voice 11", "hm voice 12", "hm voice 13", "hm voice 14"]], ["electronic", "beep on", "beep off", "ping", "rapid beep", "select 1", "select 2"], ["gore", "bone snap 1", "bone snap 2", "bone snap 3", "bone snap 4", "burst 1", "burst 2", "burst 3", "limb rip 1", "limb rip 2", "limb rip 3", "limb rip 4", "limb rip 5", "splat 1", "splat 2", "splat 3", "stab 1", "stab 2", "stab 3", "stab 4", "stab 5", "stab 6", "stab 7", "stab 8", "stab 9", "stab 10", "stab 11", "stab 12", "stab 13", "tear 1", "tear 2"], ["impacts", "glass impact 1", "glass impact 2", "heavy impact 1", "heavy impact 2", "metal impact 1", "metal impact 2", "metal impact 3", "metal impact 4", "metal impact 5", "metal impact 6", "metal impact 7", "metal impact 8", "metal impact 9", "metal impact 10", "metal impact 11", "metal impact 12", "metal impact 13", "metal impact 14", "metal impact 15", "metal impact 16", "metal impact 17", "metal impact 18", "metal impact 19", "metal impact 20", "plastic impact 1", "plastic impact 2", "porcelain impact 1", "porcelain impact 2", "rubber impact 1", "rubber impact 2", "rubber impact 3", "rubber impact 4", "wood impact 1", "wood impact 2", "wood impact 3", "wood impact 4", "wood impact 5", "wood impact 6"], ["miscellaneous", "arrow fire 1", "arrow fire 2", "arrow hit 1", "arrow hit 2", "arrow hit 3", "arrow hit 4", "arrow hit 5", "button press 1", "button press 2", "cannon blast", "explosion", "footstep 1", "footstep 2", "footstep 3", "footstep 4", "harpoon fire", "jet 1", "jet 2", "jet 3", "long drum", "pogo 1", "pogo 2", "saw 1", "saw 2", "saw 3", "switch on", "switch off", "spring box"], ["shatters", "shatter 1", "shatter 2", "shatter 3", "shatter 4", "shatter 5", "shatter 6", "shatter 7", "shatter 8"], ["smashes", "debris smash 1", "debris smash 2", "debris smash 3", "debris smash 4", "debris smash 5", "debris smash 6", "debris smash 7", "heavy smash 1", "heavy smash 2", "heavy smash 3", "heavy smash 4", "heavy smash 5", "heavy smash 6", "metal smash 1", "metal smash 2", "metal smash 3", "metal smash 4", "wet smash 1", "wet smash 2", "wet smash 3", "wood smash 1", "wood smash 2", "wood smash 3"], ["snaps", "chain snap 1", "chain snap 2", "chain snap 3", "strap snap 1", "strap snap 2", "wood snap 1", "wood snap 2", "wood snap 3", "wood snap 4"], ["thuds", "thud 1", "thud 2", "thud 3", "thud 4", "thud 5", "thud 6"]];
              }
              t = e;
              i = [{
                key: "instance",
                get: function () {
                  if (e._instance === undefined) {
                    e._instance = new e(new s());
                  }
                  return e._instance;
                }
              }];
              if (n = [{
                key: "sfxDictionary",
                get: function () {
                  return this._sfxDictionary;
                }
              }, {
                key: "sfxLookup",
                get: function () {
                  return this._sfxLookup;
                }
              }, {
                key: "sfxArray",
                get: function () {
                  return this._sfxArray;
                }
              }]) {
                r(t.prototype, n);
              }
              if (i) {
                r(t, i);
              }
              Object.defineProperty(t, "prototype", {
                writable: false
              });
              return t;
              var t;
              var n;
              var i;
            }();
          }
    });
})();
