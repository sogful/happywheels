(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        22247(e, t, n) {
            "use strict";
        
            n.d(t, {
              qw: () => Ft,
              JS: () => d,
              Qh: () => gt,
              Bq: () => Nt,
              BE: () => dt,
              UN: () => lt
            });
            var r = () => n(46518);
            var i = n.cw(function (e, t) {
              var i = r();
              var s = n(57029);
              var a = n(6469);
              i({
                target: "Array",
                proto: true
              }, {
                copyWithin: s
              });
              a("copyWithin");
            });
            var s = n.cw(function (e, t) {
              var i = r();
              var s = n(97751);
              var a = n(18745);
              var o = n(30566);
              var h = n(35548);
              var l = n(28551);
              var d = n(20034);
              var c = n(2360);
              var u = n(79039);
              var p = s("Reflect", "construct");
              var m = Object.prototype;
              var f = [].push;
              var _ = u(function () {
                function e() {}
                return !(p(function () {}, [], e) instanceof e);
              });
              var v = !u(function () {
                p(function () {});
              });
              var y = _ || v;
              i({
                target: "Reflect",
                stat: true,
                forced: y,
                sham: y
              }, {
                construct: function (e, t) {
                  h(e);
                  var n = arguments.length < 3 ? e : h(arguments[2]);
                  l(t);
                  if (v && !_) {
                    return p(e, t, n);
                  }
                  if (e === n) {
                    switch (t.length) {
                      case 0:
                        return new e();
                      case 1:
                        return new e(t[0]);
                      case 2:
                        return new e(t[0], t[1]);
                      case 3:
                        return new e(t[0], t[1], t[2]);
                      case 4:
                        return new e(t[0], t[1], t[2], t[3]);
                    }
                    var r = [null];
                    a(f, r, t);
                    return new (a(o, e, r))();
                  }
                  var i = n.prototype;
                  var s = c(d(i) ? i : m);
                  var u = a(e, s, t);
                  if (d(u)) {
                    return u;
                  } else {
                    return s;
                  }
                }
              });
            });
            var a = n.cw(function (e, t) {
              var i;
              var s = r();
              var a = n(27476);
              var o = n(77347).f;
              var h = n(18014);
              var l = n(655);
              var d = n(60511);
              var c = n(67750);
              var u = n(41436);
              var p = n(96395);
              var m = a("".slice);
              var f = Math.min;
              var _ = u("endsWith");
              s({
                target: "String",
                proto: true,
                forced: (!!p || !!_ || !(i = o(String.prototype, "endsWith"), i && !i.writable)) && !_
              }, {
                endsWith: function (e) {
                  var t = l(c(this));
                  d(e);
                  var n = l(e);
                  var r = arguments.length > 1 ? arguments[1] : undefined;
                  var i = t.length;
                  var s = r === undefined ? i : f(h(r), i);
                  return m(t, s - n.length, s) === n;
                }
              });
            });
            n(69085);
            n(26099);
            n(3362);
            s();
            n(52675);
            n(89463);
            n(2259);
            n(23792);
            n(47764);
            n(62953);
            n(78125);
            n(4731);
            n(60479);
            n(40875);
            var o = n(46682);
            var h = n(71066);
            function l(e, t) {
              l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return l(e, t);
            }
            var d = function (e) {
              function t() {
                return e.call(this) || this;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              l(n, r);
              var i = t.prototype;
              i.start = function (e, t, n) {
                this.transitionOutComplete.dispatch();
                this.transitionInStart.dispatch();
                this.transitionComplete.dispatch();
              };
              i.resize = function (e, t) {
                this.width = e;
                this.height = t;
              };
              return t;
            }(function () {
              function e() {
                this.transitionOutComplete = new h.Signal();
                this.transitionInStart = new h.Signal();
                this.transitionComplete = new h.Signal();
              }
              var t = e.prototype;
              t.start = function (e, t, n) {
                this.container = e;
                this.currentScreen = t;
                this.nextScreen = n;
              };
              t.resize = function (e, t) {
                this.width = e;
                this.height = t;
              };
              t._startTransitionOut = function () {};
              t._onTransitionOutComplete = function () {
                this.transitionOutComplete.dispatch();
              };
              t._startTransitionIn = function () {
                this.transitionInStart.dispatch();
              };
              t._onTransitionInComplete = function () {
                this.transitionComplete.dispatch();
              };
              return e;
            }());
            var c = function () {
              function e() {
                this.firefox = false;
                this.opera = false;
                this.android = false;
                this.chromeOS = false;
                this.iOS = false;
                this.linux = false;
                this.macOS = false;
                this.windows = false;
                this.desktop = false;
                this.iPad = false;
                var e = navigator.userAgent;
                this._checkBrowser(e);
                this._checkOS(e);
                this._checkDevice();
                this._checkIsMobile();
              }
              var t = e.prototype;
              t._checkBrowser = function (e) {
                if (/Opera|OPR|op/.test(e)) {
                  this.opera = true;
                } else if (/Firefox/.test(e)) {
                  this.firefox = true;
                }
              };
              t._checkOS = function (e) {
                if (/Android/.test(e)) {
                  this.android = true;
                } else if (/CrOS/.test(e)) {
                  this.chromeOS = true;
                } else if (/iP[ao]d|iPhone/i.test(e)) {
                  this.iOS = true;
                } else if (/Linux/.test(e)) {
                  this.linux = true;
                } else if (/Mac OS/.test(e)) {
                  this.macOS = true;
                } else if (/Windows/.test(e)) {
                  this.windows = true;
                }
                if (this.windows || this.macOS || this.linux || this.chromeOS) {
                  this.desktop = true;
                }
              };
              t._checkDevice = function () {
                this.iPad = navigator.userAgent.toLowerCase().indexOf("ipad") !== -1;
              };
              t._checkIsMobile = function () {
                var e;
                var t = false;
                e = navigator.userAgent || navigator.vendor;
                if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) {
                  t = true;
                }
                this.isMobile = t;
              };
              return e;
            }();
            c.instance = new c();
            var u = n(51853);
            function p(e, t) {
              p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return p(e, t);
            }
            var m;
            var f;
            var _;
            var v;
            var y = function (e) {
              function t() {
                var t;
                (t = e.call(this) || this)._build();
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              p(n, r);
              var i = t.prototype;
              i.updateProgress = function (e) {
                this.bar.scale.x = e / 100;
              };
              i.resize = function (e, t) {
                this.view.position.set(e / 2, t / 2);
              };
              i.updateWaiting = function () {
                this.waitingCount++;
                this.view.scale.x = 1 + Math.pow(Math.sin(this.waitingCount * 0.05), 2);
              };
              i.startWaiting = function () {
                this.waitingCount = 0;
                u.R.instance.add(this.updateWaiting, this);
              };
              i.stopWaiting = function () {
                u.R.instance.remove(this.updateWaiting, this);
              };
              i.onShow = function () {
                this._reset();
              };
              i.onHidden = function () {
                this._reset();
              };
              i._build = function () {
                this.view = new o.mcf();
                var e = new o.A1g().beginFill(10066329).drawRect(0, 0, 300, 50);
                e.position.set(-150, -25);
                this.view.addChild(e);
                this.bar = new o.A1g().beginFill(3355443).drawRect(0, 0, 300, 50);
                this.bar.position.set(-150, -25);
                this.view.addChild(this.bar);
                this.addChild(this.view);
              };
              i._reset = function () {
                this.updateProgress(0);
                this.stopWaiting();
              };
              return t;
            }(o.mcf);
            n(42762);
            n(2008);
            n(79432);
            n(23418);
            n(31415);
            n(62062);
            var g = n(97831);
            var w = n(59043);
            var x = n(88604);
            var b = n(55323);
            var T = n(11313);
            var A = n(61203);
            var C = n(1235);
            function S(e, t, n, r) {
              return new (n ||= Promise)(function (i, s) {
                function a(e) {
                  try {
                    h(r.next(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function o(e) {
                  try {
                    h(r.throw(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function h(e) {
                  var t;
                  if (e.done) {
                    i(e.value);
                  } else {
                    (t = e.value, t instanceof n ? t : new n(function (e) {
                      e(t);
                    })).then(a, o);
                  }
                }
                h((r = r.apply(e, t || [])).next());
              });
            }
            function E(e, t) {
              var n;
              var r;
              var i;
              var s;
              var a = {
                label: 0,
                sent: function () {
                  if (i[0] & 1) {
                    throw i[1];
                  }
                  return i[1];
                },
                trys: [],
                ops: []
              };
              s = {
                next: o(0),
                throw: o(1),
                return: o(2)
              };
              if (typeof Symbol == "function") {
                s[Symbol.iterator] = function () {
                  return this;
                };
              }
              return s;
              function o(s) {
                return function (o) {
                  return function (s) {
                    if (n) {
                      throw new TypeError("Generator is already executing.");
                    }
                    while (a) {
                      try {
                        n = 1;
                        if (r && (i = s[0] & 2 ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, s[1])).done) {
                          return i;
                        }
                        r = 0;
                        if (i) {
                          s = [s[0] & 2, i.value];
                        }
                        switch (s[0]) {
                          case 0:
                          case 1:
                            i = s;
                            break;
                          case 4:
                            a.label++;
                            return {
                              value: s[1],
                              done: false
                            };
                          case 5:
                            a.label++;
                            r = s[1];
                            s = [0];
                            continue;
                          case 7:
                            s = a.ops.pop();
                            a.trys.pop();
                            continue;
                          default:
                            if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (s[0] === 6 || s[0] === 2)) {
                              a = 0;
                              continue;
                            }
                            if (s[0] === 3 && (!i || s[1] > i[0] && s[1] < i[3])) {
                              a.label = s[1];
                              break;
                            }
                            if (s[0] === 6 && a.label < i[1]) {
                              a.label = i[1];
                              i = s;
                              break;
                            }
                            if (i && a.label < i[2]) {
                              a.label = i[2];
                              a.ops.push(s);
                              break;
                            }
                            if (i[2]) {
                              a.ops.pop();
                            }
                            a.trys.pop();
                            continue;
                        }
                        s = t.call(e, a);
                      } catch (e) {
                        s = [6, e];
                        r = 0;
                      } finally {
                        n = i = 0;
                      }
                    }
                    if (s[0] & 5) {
                      throw s[1];
                    }
                    return {
                      value: s[0] ? s[1] : undefined,
                      done: true
                    };
                  }([s, o]);
                };
              }
            }
            (function (e) {
              e[e.cTFETC1 = 0] = "cTFETC1";
              e[e.cTFETC2 = 1] = "cTFETC2";
              e[e.cTFBC1 = 2] = "cTFBC1";
              e[e.cTFBC3 = 3] = "cTFBC3";
              e[e.cTFBC4 = 4] = "cTFBC4";
              e[e.cTFBC5 = 5] = "cTFBC5";
              e[e.cTFBC7 = 6] = "cTFBC7";
              e[e.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB";
              e[e.cTFPVRTC1_4_RGBA = 9] = "cTFPVRTC1_4_RGBA";
              e[e.cTFASTC_4x4 = 10] = "cTFASTC_4x4";
              e[e.cTFATC_RGB = 11] = "cTFATC_RGB";
              e[e.cTFATC_RGBA_INTERPOLATED_ALPHA = 12] = "cTFATC_RGBA_INTERPOLATED_ALPHA";
              e[e.cTFRGBA32 = 13] = "cTFRGBA32";
              e[e.cTFRGB565 = 14] = "cTFRGB565";
              e[e.cTFBGR565 = 15] = "cTFBGR565";
              e[e.cTFRGBA4444 = 16] = "cTFRGBA4444";
            })(v ||= {});
            (m = {})[v.cTFETC1] = A.Nx.COMPRESSED_RGB_ETC1_WEBGL;
            m[v.cTFBC1] = A.Nx.COMPRESSED_RGB_S3TC_DXT1_EXT;
            m[v.cTFBC3] = A.Nx.COMPRESSED_RGBA_S3TC_DXT5_EXT;
            m[v.cTFPVRTC1_4_RGB] = A.Nx.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
            m[v.cTFPVRTC1_4_RGBA] = A.Nx.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
            m[v.cTFATC_RGB] = A.Nx.COMPRESSED_RGB_ATC_WEBGL;
            m[v.cTFASTC_4x4] = A.Nx.COMPRESSED_RGBA_ASTC_4x4_KHR;
            var O = m;
            (f = {})[v.cTFRGBA32] = T.QE.UNSIGNED_BYTE;
            f[v.cTFRGB565] = T.QE.UNSIGNED_SHORT_5_6_5;
            f[v.cTFRGBA4444] = T.QE.UNSIGNED_SHORT_4_4_4_4;
            var k = f;
            var P = Object.keys(O).map(function (e) {
              return Number(e);
            }).reduce(function (e, t) {
              e[O[t]] = t;
              return e;
            }, {});
            (_ = {})[v.cTFBC3] = true;
            _[v.cTFPVRTC1_4_RGBA] = true;
            _[v.cTFASTC_4x4] = true;
            var M = _;
            function R() {
              var e;
              var t = {
                init: function (t) {
                  if (self.BASIS) {
                    self.BASIS({
                      wasmBinary: t.wasmSource
                    }).then(function (t) {
                      t.initializeBasis();
                      e = t;
                      self.postMessage({
                        type: "init",
                        success: true
                      });
                    });
                    return null;
                  } else {
                    return {
                      type: "init",
                      success: false
                    };
                  }
                },
                transcode: function (t) {
                  var n = t.basisData;
                  var r = new e.BasisFile(n);
                  var i = r.getNumImages();
                  var s = r.getHasAlpha() ? t.rgbaFormat : t.rgbFormat;
                  var a = new Array(i);
                  var o = false;
                  if (!r.startTranscoding()) {
                    r.close();
                    r.delete();
                    return {
                      type: "transcode",
                      requestID: t.requestID,
                      success: false,
                      imageArray: null
                    };
                  }
                  for (var h = 0; h < i; h++) {
                    for (var l = r.getNumLevels(h), d = {
                        imageID: h,
                        levelArray: new Array(),
                        width: null,
                        height: null
                      }, c = 0; c < l; c++) {
                      var u = o ? 14 : s;
                      var p = r.getImageWidth(h, c);
                      var m = r.getImageHeight(h, c);
                      var f = r.getImageTranscodedSizeInBytes(h, c, u);
                      var _ = p + 3 & -4;
                      var v = m + 3 & -4;
                      if (c === 0) {
                        d.width = _;
                        d.height = v;
                      }
                      var y = new Uint8Array(f);
                      if (!r.transcodeImage(y, h, c, u, false, false)) {
                        if (o) {
                          return {
                            type: "transcode",
                            requestID: t.requestID,
                            success: false
                          };
                        }
                        h = -1;
                        o = true;
                        break;
                      }
                      d.levelArray.push({
                        levelID: c,
                        levelWidth: p,
                        levelHeight: m,
                        levelBuffer: y
                      });
                    }
                    a[h] = d;
                  }
                  r.close();
                  r.delete();
                  return {
                    type: "transcode",
                    requestID: t.requestID,
                    success: true,
                    basisFormat: o ? 14 : s,
                    imageArray: a
                  };
                }
              };
              self.onmessage = function (e) {
                var n = e.data;
                var r = t[n.type](n);
                if (r) {
                  self.postMessage(r);
                }
              };
            }
            var I = function () {
              function e() {
                var t = this;
                this.requests = {};
                this.onMessage = function (e) {
                  var n = e.data;
                  if (n.type === "init") {
                    if (!n.success) {
                      throw new Error("BasisResource.TranscoderWorker failed to initialize.");
                    }
                    t.isInit = true;
                    t.onInit();
                  } else if (n.type === "transcode") {
                    --t.load;
                    var r = n.requestID;
                    if (n.success) {
                      t.requests[r].resolve(n);
                    } else {
                      t.requests[r].reject();
                    }
                    delete t.requests[r];
                  }
                };
                this.isInit = false;
                this.load = 0;
                this.initPromise = new Promise(function (e) {
                  t.onInit = e;
                });
                e.wasmSource;
                this.worker = new Worker(e.workerURL);
                this.worker.onmessage = this.onMessage;
                this.worker.postMessage({
                  type: "init",
                  jsSource: e.jsSource,
                  wasmSource: e.wasmSource
                });
              }
              Object.defineProperty(e, "workerURL", {
                get: function () {
                  if (!e._workerURL) {
                    var t = R.toString();
                    var n = t.indexOf("{");
                    var r = t.lastIndexOf("}");
                    t = t.slice(n + 1, r);
                    if (e.jsSource) {
                      t = e.jsSource + "\n" + t;
                    }
                    e._workerURL = URL.createObjectURL(new Blob([t]));
                  }
                  return e._workerURL;
                },
                enumerable: false,
                configurable: true
              });
              e.prototype.initAsync = function () {
                return this.initPromise;
              };
              e.prototype.transcodeAsync = function (t, n, r) {
                return S(this, undefined, Promise, function () {
                  var i;
                  var s;
                  var a = this;
                  return E(this, function (o) {
                    ++this.load;
                    i = e._tempID++;
                    s = new Promise(function (e, t) {
                      a.requests[i] = {
                        resolve: e,
                        reject: t
                      };
                    });
                    this.worker.postMessage({
                      requestID: i,
                      basisData: t,
                      rgbaFormat: n,
                      rgbFormat: r,
                      type: "transcode"
                    });
                    return [2, s];
                  });
                });
              };
              e.loadTranscoder = function (t, n) {
                var r = this;
                var i = fetch(t).then(function (e) {
                  return e.text();
                }).then(function (t) {
                  e.jsSource = t;
                });
                var s = fetch(n).then(function (e) {
                  return e.arrayBuffer();
                }).then(function (t) {
                  e.wasmSource = t;
                });
                return Promise.all([i, s]).then(function (e) {
                  r._onTranscoderInitializedResolve();
                  return e;
                });
              };
              e.setTranscoder = function (t, n) {
                e.jsSource = t;
                e.wasmSource = n;
              };
              e.onTranscoderInitialized = new Promise(function (t) {
                e._onTranscoderInitializedResolve = t;
              });
              e._tempID = 0;
              return e;
            }();
            var L = function () {
              function e() {}
              e.transcode = function (t) {
                return S(this, undefined, Promise, function () {
                  var n;
                  return E(this, function (r) {
                    switch (r.label) {
                      case 0:
                        if (typeof Worker != "undefined" && e.TranscoderWorker.wasmSource) {
                          return [4, e.transcodeAsync(t)];
                        } else {
                          return [3, 2];
                        }
                      case 1:
                        n = r.sent();
                        return [3, 3];
                      case 2:
                        n = e.transcodeSync(t);
                        r.label = 3;
                      case 3:
                        return [2, n];
                    }
                  });
                });
              };
              e.transcodeAsync = function (t) {
                return S(this, undefined, Promise, function () {
                  var n;
                  var r;
                  var i;
                  var s;
                  var a;
                  var o;
                  var h;
                  var l;
                  var d;
                  var c;
                  return E(this, function (u) {
                    switch (u.label) {
                      case 0:
                        if (!e.defaultRGBAFormat && !e.defaultRGBFormat) {
                          e.autoDetectFormats();
                        }
                        n = e.workerPool;
                        r = 268435456;
                        i = null;
                        d = 0;
                        c = n.length;
                        for (; d < c; d++) {
                          if (n[d].load < r) {
                            i = n[d];
                            r = i.load;
                          }
                        }
                        if (!i) {
                          i = new I();
                          n.push(i);
                        }
                        return [4, i.initAsync()];
                      case 1:
                        u.sent();
                        return [4, i.transcodeAsync(new Uint8Array(t), e.defaultRGBAFormat.basisFormat, e.defaultRGBFormat.basisFormat)];
                      case 2:
                        s = u.sent();
                        a = s.basisFormat;
                        o = s.imageArray;
                        if (a > 12) {
                          h = o.map(function (e) {
                            return new g.dZ(new Uint16Array(e.levelArray[0].levelBuffer.buffer), {
                              width: e.width,
                              height: e.height
                            });
                          });
                        } else {
                          l = O[s.basisFormat];
                          h = new Array(o.length);
                          d = 0;
                          c = o.length;
                          for (; d < c; d++) {
                            h[d] = new A.Jn(null, {
                              format: l,
                              width: o[d].width,
                              height: o[d].height,
                              levelBuffers: o[d].levelArray,
                              levels: o[d].levelArray.length
                            });
                          }
                        }
                        h.basisFormat = a;
                        return [2, h];
                    }
                  });
                });
              };
              e.transcodeSync = function (t) {
                if (!e.defaultRGBAFormat && !e.defaultRGBFormat) {
                  e.autoDetectFormats();
                }
                var n = e.basisBinding;
                var r = new Uint8Array(t);
                var i = new n.BasisFile(r);
                var s = i.getNumImages();
                var a = i.getHasAlpha() ? e.defaultRGBAFormat.basisFormat : e.defaultRGBFormat.basisFormat;
                var o = v.cTFRGB565;
                var h = new Array(s);
                var l = e.fallbackMode;
                if (!i.startTranscoding()) {
                  i.close();
                  i.delete();
                  return null;
                }
                for (var d = 0; d < s; d++) {
                  for (var c = l ? 1 : i.getNumLevels(d), u = i.getImageWidth(d, 0), p = i.getImageHeight(d, 0), m = u + 3 & -4, f = p + 3 & -4, _ = new Array(c), y = 0; y < c; y++) {
                    var w = i.getImageWidth(d, y);
                    var x = i.getImageHeight(d, y);
                    var b = i.getImageTranscodedSizeInBytes(d, 0, l ? o : a);
                    _[y] = {
                      levelID: y,
                      levelBuffer: new Uint8Array(b),
                      levelWidth: w,
                      levelHeight: x
                    };
                    if (i.transcodeImage(_[y].levelBuffer, d, 0, l ? o : a, false, false)) ;else {
                      if (l) {
                        break;
                      }
                      d = -1;
                      l = true;
                    }
                  }
                  var T;
                  T = l ? new g.dZ(new Uint16Array(_[0].levelBuffer.buffer), {
                    width: u,
                    height: p
                  }) : new A.Jn(null, {
                    format: O[a],
                    width: m,
                    height: f,
                    levelBuffers: _,
                    levels: c
                  });
                  h[d] = T;
                }
                i.close();
                i.delete();
                var C = h;
                C.basisFormat = l ? o : a;
                return C;
              };
              e.autoDetectFormats = function (t) {
                if (!t) {
                  var n = b.W0.ADAPTER.createCanvas().getContext("webgl");
                  if (!n) {
                    return;
                  }
                  t = {
                    s3tc: n.getExtension("WEBGL_compressed_texture_s3tc"),
                    s3tc_sRGB: n.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
                    astc: n.getExtension("WEBGL_compressed_texture_astc"),
                    etc: n.getExtension("WEBGL_compressed_texture_etc"),
                    etc1: n.getExtension("WEBGL_compressed_texture_etc1"),
                    pvrtc: n.getExtension("WEBGL_compressed_texture_pvrtc") || n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
                    atc: n.getExtension("WEBGL_compressed_texture_atc")
                  };
                }
                var r = {};
                for (var i in t) {
                  var s = t[i];
                  if (s) {
                    Object.assign(r, Object.getPrototypeOf(s));
                  }
                }
                for (var a = 0; a < 2; a++) {
                  var o = !!a;
                  var h = undefined;
                  var l = undefined;
                  for (var d in r) {
                    if ((l = P[h = r[d]]) !== undefined && (o && M[l] || !o && !M[l])) {
                      break;
                    }
                  }
                  if (h) {
                    e[o ? "defaultRGBAFormat" : "defaultRGBFormat"] = {
                      textureFormat: h,
                      basisFormat: l
                    };
                  } else {
                    e[o ? "defaultRGBAFormat" : "defaultRGBFormat"] = {
                      textureFormat: T.QE.UNSIGNED_SHORT_5_6_5,
                      basisFormat: v.cTFRGB565
                    };
                    e.fallbackMode = true;
                  }
                }
              };
              e.bindTranscoder = function (t) {
                e.basisBinding = t;
              };
              e.loadTranscoder = function (t, n) {
                return e.TranscoderWorker.loadTranscoder(t, n);
              };
              e.setTranscoder = function (t, n) {
                e.TranscoderWorker.setTranscoder(t, n);
              };
              Object.defineProperty(e, "TRANSCODER_WORKER_POOL_LIMIT", {
                get: function () {
                  return this.workerPool.length || 1;
                },
                set: function (e) {
                  for (var t = this.workerPool.length; t < e; t++) {
                    this.workerPool[t] = new I();
                    this.workerPool[t].initAsync();
                  }
                },
                enumerable: false,
                configurable: true
              });
              e.extension = g.Ag.Loader;
              e.fallbackMode = false;
              e.workerPool = [];
              e.TranscoderWorker = I;
              return e;
            }();
            C.Sd.setExtensionXhrType("basis", C.Sd.XHR_RESPONSE_TYPE.BUFFER);
            var j = function () {
              function e() {}
              e.use = function (t, n) {
                if (t.extension === "basis" && t.data) {
                  S(this, undefined, undefined, function () {
                    var r;
                    return E(this, function (i) {
                      switch (i.label) {
                        case 0:
                          if (L.basisBinding || L.TranscoderWorker.wasmSource) {
                            return [3, 2];
                          } else {
                            return [4, I.onTranscoderInitialized];
                          }
                        case 1:
                          i.sent();
                          i.label = 2;
                        case 2:
                          return [4, L.transcode(t.data)];
                        case 3:
                          r = i.sent();
                          Object.assign(t, e.registerTextures(t.url, r, t.metadata));
                          n();
                          return [2];
                      }
                    });
                  });
                } else {
                  n();
                }
              };
              e.registerTextures = function (e, t, n) {
                var r = {
                  textures: {},
                  texture: null
                };
                if (!t) {
                  return r;
                }
                var i = k[t.basisFormat];
                var s = t.basisFormat !== v.cTFRGBA32 ? T.hR.RGB : T.hR.RGBA;
                t.map(function (e) {
                  return new g.gP(new g.t5(e, Object.assign({
                    mipmap: e instanceof A.Jn && e.levels > 1 ? T.E8.ON_MANUAL : T.E8.OFF,
                    alphaMode: T.Gk.NO_PREMULTIPLIED_ALPHA,
                    type: i,
                    format: s
                  }, n)));
                }).forEach(function (t, n) {
                  var i = t.baseTexture;
                  var s = e + "-" + (n + 1);
                  g.t5.addToCache(i, s);
                  g.gP.addToCache(t, s);
                  if (n === 0) {
                    g.t5.addToCache(i, e);
                    g.gP.addToCache(t, e);
                    r.texture = t;
                  }
                  r.textures[s] = t;
                });
                return r;
              };
              e.bindTranscoder = function (e) {
                L.basisBinding = e;
              };
              e.loadTranscoder = function (e, t) {
                return L.TranscoderWorker.loadTranscoder(e, t);
              };
              e.setTranscoder = function (e, t) {
                L.TranscoderWorker.setTranscoder(e, t);
              };
              e.extension = g.Ag.Loader;
              return e;
            }();
            g.XO.add(j);
            var B = n(83169);
            function D() {
              D = Object.assign || function (e) {
                var t;
                var n = arguments;
                for (var r = 1, i = arguments.length; r < i; r++) {
                  for (var s in t = n[r]) {
                    if (Object.prototype.hasOwnProperty.call(t, s)) {
                      e[s] = t[s];
                    }
                  }
                }
                return e;
              };
              return D.apply(this, arguments);
            }
            function F(e, t, n, r) {
              return new (n ||= Promise)(function (i, s) {
                function a(e) {
                  try {
                    h(r.next(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function o(e) {
                  try {
                    h(r.throw(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function h(e) {
                  var t;
                  if (e.done) {
                    i(e.value);
                  } else {
                    (t = e.value, t instanceof n ? t : new n(function (e) {
                      e(t);
                    })).then(a, o);
                  }
                }
                h((r = r.apply(e, t || [])).next());
              });
            }
            function N(e, t) {
              var n;
              var r;
              var i;
              var s;
              var a = {
                label: 0,
                sent: function () {
                  if (i[0] & 1) {
                    throw i[1];
                  }
                  return i[1];
                },
                trys: [],
                ops: []
              };
              s = {
                next: o(0),
                throw: o(1),
                return: o(2)
              };
              if (typeof Symbol == "function") {
                s[Symbol.iterator] = function () {
                  return this;
                };
              }
              return s;
              function o(s) {
                return function (o) {
                  return function (s) {
                    if (n) {
                      throw new TypeError("Generator is already executing.");
                    }
                    while (a) {
                      try {
                        n = 1;
                        if (r && (i = s[0] & 2 ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, s[1])).done) {
                          return i;
                        }
                        r = 0;
                        if (i) {
                          s = [s[0] & 2, i.value];
                        }
                        switch (s[0]) {
                          case 0:
                          case 1:
                            i = s;
                            break;
                          case 4:
                            a.label++;
                            return {
                              value: s[1],
                              done: false
                            };
                          case 5:
                            a.label++;
                            r = s[1];
                            s = [0];
                            continue;
                          case 7:
                            s = a.ops.pop();
                            a.trys.pop();
                            continue;
                          default:
                            if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (s[0] === 6 || s[0] === 2)) {
                              a = 0;
                              continue;
                            }
                            if (s[0] === 3 && (!i || s[1] > i[0] && s[1] < i[3])) {
                              a.label = s[1];
                              break;
                            }
                            if (s[0] === 6 && a.label < i[1]) {
                              a.label = i[1];
                              i = s;
                              break;
                            }
                            if (i && a.label < i[2]) {
                              a.label = i[2];
                              a.ops.push(s);
                              break;
                            }
                            if (i[2]) {
                              a.ops.pop();
                            }
                            a.trys.pop();
                            continue;
                        }
                        s = t.call(e, a);
                      } catch (e) {
                        s = [6, e];
                        r = 0;
                      } finally {
                        n = i = 0;
                      }
                    }
                    if (s[0] & 5) {
                      throw s[1];
                    }
                    return {
                      value: s[0] ? s[1] : undefined,
                      done: true
                    };
                  }([s, o]);
                };
              }
            }
            var G = function () {
              function e(e, t = false) {
                this._loader = e;
                this._assetList = [];
                this._isLoading = false;
                this._maxConcurrent = 1;
                this.verbose = t;
              }
              e.prototype.add = function (e) {
                var t = this;
                e.forEach(function (e) {
                  t._assetList.push(e);
                });
                this.verbose;
                if (this._isActive && !this._isLoading) {
                  this._next();
                }
              };
              e.prototype._next = function () {
                return F(this, undefined, Promise, function () {
                  var e;
                  var t;
                  var n;
                  return N(this, function (r) {
                    switch (r.label) {
                      case 0:
                        if (!this._assetList.length || !this._isActive) {
                          return [3, 2];
                        }
                        this._isLoading = true;
                        e = [];
                        t = Math.min(this._assetList.length, this._maxConcurrent);
                        n = 0;
                        for (; n < t; n++) {
                          e.push(this._assetList.pop());
                        }
                        return [4, this._loader.load(e)];
                      case 1:
                        r.sent();
                        this._isLoading = false;
                        this._next();
                        r.label = 2;
                      case 2:
                        return [2];
                    }
                  });
                });
              };
              Object.defineProperty(e.prototype, "active", {
                get: function () {
                  return this._isActive;
                },
                set: function (e) {
                  if (this._isActive !== e) {
                    this._isActive = e;
                    if (e && !this._isLoading) {
                      this._next();
                    }
                  }
                },
                enumerable: false,
                configurable: true
              });
              return e;
            }();
            function U(e, t) {
              if (!Array.isArray(e)) {
                e = [e];
              }
              if (t) {
                return e.map(function (e) {
                  if (typeof e == "string") {
                    return t(e);
                  } else {
                    return e;
                  }
                });
              } else {
                return e;
              }
            }
            function V(e, t, n, r, i) {
              for (var s = t[n], a = 0; a < s.length; a++) {
                var o = s[a];
                if (n < t.length - 1) {
                  V(e.replace(r[n], o), t, n + 1, r, i);
                } else {
                  i.push(e.replace(r[n], o));
                }
              }
            }
            function H(e) {
              var t = e.match(/\{(.*?)\}/g);
              var n = [];
              if (t) {
                var r = [];
                t.forEach(function (e) {
                  var t = e.substring(1, e.length - 1).split(",");
                  r.push(t);
                });
                V(e, r, 0, t, n);
              } else {
                n.push(e);
              }
              return n;
            }
            function z(e) {
              return !Array.isArray(e);
            }
            var W = new (function () {
              function e() {
                this._parsers = [];
                this._cache = new Map();
                this._cacheMap = new Map();
              }
              e.prototype.reset = function () {
                this._cacheMap.clear();
                this._cache.clear();
              };
              e.prototype.has = function (e) {
                return this._cache.has(e);
              };
              e.prototype.get = function (e) {
                return this._cache.get(e);
              };
              e.prototype.set = function (e, t) {
                var n;
                var r = this;
                var i = U(e);
                for (var s = 0; s < this.parsers.length; s++) {
                  var a = this.parsers[s];
                  if (a.test(t)) {
                    n = a.getCacheableAssets(i, t);
                    break;
                  }
                }
                if (!n) {
                  n = {};
                  i.forEach(function (e) {
                    n[e] = t;
                  });
                }
                var o = Object.keys(n);
                var h = {
                  cacheKeys: o,
                  keys: i
                };
                i.forEach(function (e) {
                  r._cacheMap.set(e, h);
                });
                o.forEach(function (e) {
                  if (r._cache.has(e)) {
                    r._cache.get(e);
                  }
                  r._cache.set(e, n[e]);
                });
                if (t instanceof g.gP) {
                  var l = t;
                  i.forEach(function (e) {
                    if (l.baseTexture !== g.gP.EMPTY.baseTexture) {
                      g.t5.addToCache(l.baseTexture, e);
                    }
                    g.gP.addToCache(l, e);
                  });
                }
              };
              e.prototype.remove = function (e) {
                var t = this;
                this._cacheMap.get(e);
                if (this._cacheMap.has(e)) {
                  var n = this._cacheMap.get(e);
                  n.cacheKeys.forEach(function (e) {
                    t._cache.delete(e);
                  });
                  n.keys.forEach(function (e) {
                    t._cacheMap.delete(e);
                  });
                }
              };
              Object.defineProperty(e.prototype, "parsers", {
                get: function () {
                  return this._parsers;
                },
                enumerable: false,
                configurable: true
              });
              return e;
            }())();
            function X(e, t, n) {
              var r = {};
              e.forEach(function (e) {
                r[e] = t;
              });
              Object.keys(t.textures).forEach(function (e) {
                r[e] = t.textures[e];
              });
              if (!n) {
                var i = x.path.dirname(e[0]);
                t.linkedSheets.forEach(function (e, n) {
                  var s = X([i + "/" + t.data.meta.related_multi_packs[n]], e, true);
                  Object.assign(r, s);
                });
              }
              return r;
            }
            var Y = {
              extension: g.Ag.CacheParser,
              test: function (e) {
                return e instanceof w.z;
              },
              getCacheableAssets: function (e, t) {
                return X(e, t, false);
              }
            };
            var q = {
              extension: g.Ag.CacheParser,
              test: function (e) {
                return Array.isArray(e) && e.every(function (e) {
                  return e instanceof g.gP;
                });
              },
              getCacheableAssets: function (e, t) {
                var n = {};
                e.forEach(function (e) {
                  t.forEach(function (t, r) {
                    n[e + (r === 0 ? "" : r + 1)] = t;
                  });
                });
                return n;
              }
            };
            function J() {
              var e = arguments;
              var t = this;
              var n = [];
              for (var r = 0; r < arguments.length; r++) {
                n[r] = e[r];
              }
              return function (e) {
                return F(t, undefined, undefined, function () {
                  return N(this, function (t) {
                    e.unshift.apply(e, n);
                    return [2, e];
                  });
                });
              };
            }
            function K() {
              var e = arguments;
              var t = this;
              var n = [];
              for (var r = 0; r < arguments.length; r++) {
                n[r] = e[r];
              }
              return function (e) {
                return F(t, undefined, undefined, function () {
                  var t;
                  var r;
                  var i;
                  var s;
                  return N(this, function (a) {
                    t = 0;
                    r = n;
                    for (; t < r.length; t++) {
                      i = r[t];
                      if ((s = e.indexOf(i)) !== -1) {
                        e.splice(s, 1);
                      }
                    }
                    return [2, e];
                  });
                });
              };
            }
            var Z = {
              extension: g.Ag.DetectionParser,
              test: function () {
                return F(undefined, undefined, Promise, function () {
                  var e;
                  return N(this, function (t) {
                    switch (t.label) {
                      case 0:
                        if (globalThis.createImageBitmap) {
                          return [4, b.W0.ADAPTER.fetch("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=").then(function (e) {
                            return e.blob();
                          })];
                        } else {
                          return [2, false];
                        }
                      case 1:
                        e = t.sent();
                        return [2, createImageBitmap(e).then(function () {
                          return true;
                        }, function () {
                          return false;
                        })];
                    }
                  });
                });
              },
              add: J("avif"),
              remove: K("avif")
            };
            g.Ag.DetectionParser;
            g.Ag.DetectionParser;
            J("basis");
            K("basis");
            var $ = {
              extension: g.Ag.DetectionParser,
              test: function () {
                return F(undefined, undefined, Promise, function () {
                  var e;
                  return N(this, function (t) {
                    switch (t.label) {
                      case 0:
                        if (globalThis.createImageBitmap) {
                          return [4, b.W0.ADAPTER.fetch("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=").then(function (e) {
                            return e.blob();
                          })];
                        } else {
                          return [2, false];
                        }
                      case 1:
                        e = t.sent();
                        return [2, createImageBitmap(e).then(function () {
                          return true;
                        }, function () {
                          return false;
                        })];
                    }
                  });
                });
              },
              add: J("webp"),
              remove: K("webp")
            };
            var Q = [".xml", ".fnt"];
            var ee = {
              extension: g.Ag.LoadParser,
              test: function (e) {
                return Q.includes(x.path.extname(e));
              },
              testParse: function (e) {
                return F(this, undefined, Promise, function () {
                  return N(this, function (t) {
                    return [2, B.lk.test(e) || B.Kk.test(e)];
                  });
                });
              },
              parse: function (e, t, n) {
                return F(this, undefined, Promise, function () {
                  var r;
                  var i;
                  var s;
                  var a;
                  var o;
                  var h;
                  var l;
                  var d;
                  var c;
                  return N(this, function (u) {
                    switch (u.label) {
                      case 0:
                        r = B.lk.test(e) ? B.lk.parse(e) : B.Kk.parse(e);
                        i = t.src;
                        s = r.page;
                        a = [];
                        o = 0;
                        for (; o < s.length; ++o) {
                          h = s[o].file;
                          l = x.path.join(x.path.dirname(i), h);
                          a.push(l);
                        }
                        return [4, n.load(a)];
                      case 1:
                        d = u.sent();
                        c = a.map(function (e) {
                          return d[e];
                        });
                        return [2, B.Bx.install(r, c, true)];
                    }
                  });
                });
              },
              load: function (e, t) {
                return F(this, undefined, Promise, function () {
                  return N(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, b.W0.ADAPTER.fetch(e)];
                      case 1:
                        return [2, t.sent().text()];
                    }
                  });
                });
              },
              unload: function (e) {
                e.destroy();
              }
            };
            var te = {
              extension: g.Ag.LoadParser,
              test: function (e) {
                return x.path.extname(e).includes(".json");
              },
              load: function (e) {
                return F(this, undefined, Promise, function () {
                  return N(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, b.W0.ADAPTER.fetch(e)];
                      case 1:
                        return [4, t.sent().json()];
                      case 2:
                        return [2, t.sent()];
                    }
                  });
                });
              }
            };
            var ne = {
              extension: g.Ag.LoadParser,
              testParse: function (e, t) {
                return F(this, undefined, Promise, function () {
                  return N(this, function (n) {
                    return [2, x.path.extname(t.src).includes(".json") && !!e.frames];
                  });
                });
              },
              parse: function (e, t, n) {
                return F(this, undefined, Promise, function () {
                  var s;
                  var a;
                  var o;
                  var h;
                  var l;
                  var d;
                  var c;
                  var u;
                  var p;
                  var m;
                  var f;
                  var _;
                  return N(this, function (v) {
                    switch (v.label) {
                      case 0:
                        if ((s = x.path.dirname(t.src)) && s.lastIndexOf("/") !== s.length - 1) {
                          s += "/";
                        }
                        a = s + e.meta.image;
                        return [4, n.load([a])];
                      case 1:
                        o = v.sent();
                        h = o[a];
                        return [4, (l = new w.z(h.baseTexture, e, t.src)).parse()];
                      case 2:
                        v.sent();
                        d = (e == null ? undefined : e.meta)?.related_multi_packs;
                        if (!Array.isArray(d)) {
                          return [3, 4];
                        }
                        c = [];
                        u = 0;
                        p = d;
                        for (; u < p.length; u++) {
                          if (typeof (m = p[u]) == "string") {
                            f = s + m;
                            if (!t.data?.ignoreMultiPack) {
                              c.push(n.load({
                                src: f,
                                data: {
                                  ignoreMultiPack: true
                                }
                              }));
                            }
                          }
                        }
                        return [4, Promise.all(c)];
                      case 3:
                        _ = v.sent();
                        l.linkedSheets = _;
                        _.forEach(function (e) {
                          e.linkedSheets = [l].concat(l.linkedSheets.filter(function (t) {
                            return t !== e;
                          }));
                        });
                        v.label = 4;
                      case 4:
                        return [2, l];
                    }
                  });
                });
              },
              unload: function (e) {
                e.destroy(true);
              }
            };
            var re = {
              extension: g.Ag.LoadParser,
              test: function (e) {
                return x.path.extname(e).includes(".txt");
              },
              load: function (e) {
                return F(this, undefined, Promise, function () {
                  return N(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, b.W0.ADAPTER.fetch(e)];
                      case 1:
                        return [4, t.sent().text()];
                      case 2:
                        return [2, t.sent()];
                    }
                  });
                });
              }
            };
            var ie = ["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"];
            var se = ["woff", "woff2", "ttf", "otf"];
            var ae = {
              extension: g.Ag.LoadParser,
              test: function (e) {
                var t = e.split("?")[0].split(".").pop();
                return se.includes(t);
              },
              load: function (e, t) {
                var s;
                return F(this, undefined, Promise, function () {
                  var h;
                  var l;
                  var d;
                  var c;
                  var u;
                  var p;
                  var m;
                  return N(this, function (f) {
                    switch (f.label) {
                      case 0:
                        if (!window.navigator.onLine) {
                          throw new Error("[loadWebFont] Cannot load font - navigator is offline");
                        }
                        if (!("FontFace" in window)) {
                          return [3, 5];
                        }
                        h = [];
                        l = t.data?.family ?? function (e) {
                          var t = x.path.extname(e);
                          return x.path.basename(e, t).replace(/(-|_)/g, " ").toLowerCase().split(" ").map(function (e) {
                            return e.charAt(0).toUpperCase() + e.slice(1);
                          }).join(" ");
                        }(e);
                        d = ((s = t.data?.weights) === null || s === undefined ? undefined : s.filter(function (e) {
                          return ie.includes(e);
                        })) ?? ["normal"];
                        c = t.data ?? {};
                        u = 0;
                        f.label = 1;
                      case 1:
                        if (u < d.length) {
                          p = d[u];
                          return [4, (m = new FontFace(l, "url(" + e + ")", D(D({}, c), {
                            weight: p
                          }))).load()];
                        } else {
                          return [3, 4];
                        }
                      case 2:
                        f.sent();
                        document.fonts.add(m);
                        h.push(m);
                        f.label = 3;
                      case 3:
                        u++;
                        return [3, 1];
                      case 4:
                        return [2, h.length === 1 ? h[0] : h];
                      case 5:
                        return [2, null];
                    }
                  });
                });
              },
              unload: function (e) {
                (Array.isArray(e) ? e : [e]).forEach(function (e) {
                  return document.fonts.delete(e);
                });
              }
            };
            function oe(e, t) {
              var n = e.split("?")[0];
              var r = x.path.extname(n).toLowerCase();
              if (Array.isArray(t)) {
                return t.includes(r.toLowerCase());
              } else {
                return r.toLowerCase() === t;
              }
            }
            function he(e, t, n) {
              var r = new g.gP(e);
              r.baseTexture.on("dispose", function () {
                delete t.promiseCache[n];
              });
              return r;
            }
            g.Ag.LoadParser;
            g.Ag.LoadParser;
            var le;
            var de;
            var ce = {
              extension: g.Ag.LoadParser,
              test: function (e) {
                return oe(e, ".ktx");
              },
              load: function (e, t, n) {
                return F(this, undefined, Promise, function () {
                  var r;
                  var i;
                  var s;
                  var a;
                  var o;
                  var h;
                  var l;
                  var d;
                  return N(this, function (c) {
                    switch (c.label) {
                      case 0:
                        return [4, b.W0.ADAPTER.fetch(e)];
                      case 1:
                        return [4, c.sent().arrayBuffer()];
                      case 2:
                        r = c.sent();
                        i = (0, A.V_)(e, r);
                        s = i.compressed;
                        a = i.uncompressed;
                        o = i.kvData;
                        h = s ?? a;
                        l = D({
                          mipmap: T.E8.OFF,
                          alphaMode: T.Gk.NO_PREMULTIPLIED_ALPHA,
                          resolution: (0, x.getResolutionOfUrl)(e)
                        }, t.data);
                        return [2, (d = h.map(function (t) {
                          if (h === a) {
                            Object.assign(l, {
                              type: t.type,
                              format: t.format
                            });
                          }
                          var r = new g.t5(t, l);
                          r.ktxKeyValueData = o;
                          return he(r, n, e);
                        })).length === 1 ? d[0] : d];
                    }
                  });
                });
              },
              unload: function (e) {
                if (Array.isArray(e)) {
                  e.forEach(function (e) {
                    return e.destroy(true);
                  });
                } else {
                  e.destroy(true);
                }
              }
            };
            var ue = 0;
            var pe = function () {
              function e() {
                this._initialized = false;
                this._createdWorkers = 0;
                this.workerPool = [];
                this.queue = [];
                this.resolveHash = {};
              }
              e.prototype.isImageBitmapSupported = function () {
                if (this._isImageBitmapSupported === undefined) {
                  this._isImageBitmapSupported = new Promise(function (e) {
                    var t = URL.createObjectURL(new Blob(["\n    async function checkImageBitmap()\n    {\n        try\n        {\n            if (typeof createImageBitmap !== 'function') return false;\n\n            const response = await fetch('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=');\n            const imageBlob =  await response.blob();\n            const imageBitmap = await createImageBitmap(imageBlob);\n\n            return imageBitmap.width === 1 && imageBitmap.height === 1;\n        }\n        catch (e)\n        {\n            return false;\n        }\n    }\n    checkImageBitmap().then((result) => { self.postMessage(result); });\n    "], {
                      type: "application/javascript"
                    }));
                    var n = new Worker(t);
                    n.addEventListener("message", function (r) {
                      n.terminate();
                      URL.revokeObjectURL(t);
                      e(r.data);
                    });
                  });
                }
                return this._isImageBitmapSupported;
              };
              e.prototype.loadImageBitmap = function (e) {
                return this._run("loadImageBitmap", [e]);
              };
              e.prototype._initWorkers = function () {
                return F(this, undefined, undefined, function () {
                  return N(this, function (e) {
                    this._initialized ||= true;
                    return [2];
                  });
                });
              };
              e.prototype.getWorker = function () {
                var e = this;
                if (le === undefined) {
                  le = navigator.hardwareConcurrency || 4;
                }
                var t = this.workerPool.pop();
                if (!t && this._createdWorkers < le) {
                  de ||= URL.createObjectURL(new Blob(["\n    async function loadImageBitmap(url)\n    {\n        const response = await fetch(url);\n\n        if (!response.ok)\n        {\n            throw new Error(`[WorkerManager.loadImageBitmap] Failed to fetch ${url}: `\n                + `${response.status} ${response.statusText}`);\n        }\n\n        const imageBlob =  await response.blob();\n        const imageBitmap = await createImageBitmap(imageBlob);\n\n        return imageBitmap;\n    }\n    self.onmessage = async (event) =>\n    {\n        try\n        {\n            const imageBitmap = await loadImageBitmap(event.data.data[0]);\n\n            self.postMessage({\n                data: imageBitmap,\n                uuid: event.data.uuid,\n                id: event.data.id,\n            }, [imageBitmap]);\n        }\n        catch(e)\n        {\n            self.postMessage({\n                error: e,\n                uuid: event.data.uuid,\n                id: event.data.id,\n            });\n        }\n    };"], {
                    type: "application/javascript"
                  }));
                  this._createdWorkers++;
                  (t = new Worker(de)).addEventListener("message", function (t) {
                    e.complete(t.data);
                    e.returnWorker(t.target);
                    e.next();
                  });
                }
                return t;
              };
              e.prototype.returnWorker = function (e) {
                this.workerPool.push(e);
              };
              e.prototype.complete = function (e) {
                if (e.error !== undefined) {
                  this.resolveHash[e.uuid].reject(e.error);
                } else {
                  this.resolveHash[e.uuid].resolve(e.data);
                }
                this.resolveHash[e.uuid] = null;
              };
              e.prototype._run = function (e, t) {
                return F(this, undefined, Promise, function () {
                  var n;
                  var r = this;
                  return N(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return [4, this._initWorkers()];
                      case 1:
                        i.sent();
                        n = new Promise(function (n, i) {
                          r.queue.push({
                            id: e,
                            arguments: t,
                            resolve: n,
                            reject: i
                          });
                        });
                        this.next();
                        return [2, n];
                    }
                  });
                });
              };
              e.prototype.next = function () {
                if (this.queue.length) {
                  var e = this.getWorker();
                  if (e) {
                    var t = this.queue.pop();
                    var n = t.id;
                    this.resolveHash[ue] = {
                      resolve: t.resolve,
                      reject: t.reject
                    };
                    e.postMessage({
                      data: t.arguments,
                      uuid: ue++,
                      id: n
                    });
                  }
                }
              };
              return e;
            }();
            var me = new pe();
            var fe = [".jpg", ".png", ".jpeg", ".avif", ".webp"];
            function _e(e) {
              return F(this, undefined, Promise, function () {
                var t;
                var n;
                return N(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return [4, b.W0.ADAPTER.fetch(e)];
                    case 1:
                      if (!(t = r.sent()).ok) {
                        throw new Error("[loadImageBitmap] Failed to fetch " + e + ": " + t.status + " " + t.statusText);
                      }
                      return [4, t.blob()];
                    case 2:
                      n = r.sent();
                      return [4, createImageBitmap(n)];
                    case 3:
                      return [2, r.sent()];
                  }
                });
              });
            }
            var ve = {
              extension: g.Ag.LoadParser,
              config: {
                preferWorkers: true
              },
              test: function (e) {
                var t = false;
                for (var n = 0; n < fe.length; n++) {
                  if (e.indexOf("data:image/" + fe[n].slice(1)) === 0) {
                    t = true;
                    break;
                  }
                }
                return t || oe(e, fe);
              },
              load: function (e, t, n) {
                return F(this, undefined, Promise, function () {
                  var r;
                  var i;
                  var s;
                  return N(this, function (a) {
                    switch (a.label) {
                      case 0:
                        r = null;
                        if (window.createImageBitmap) {
                          if (i = this.config.preferWorkers) {
                            return [4, me.isImageBitmapSupported()];
                          } else {
                            return [3, 2];
                          }
                        } else {
                          return [3, 7];
                        }
                      case 1:
                        i = a.sent();
                        a.label = 2;
                      case 2:
                        if (i) {
                          return [4, me.loadImageBitmap(e)];
                        } else {
                          return [3, 4];
                        }
                      case 3:
                        r = a.sent();
                        return [3, 6];
                      case 4:
                        return [4, _e(e)];
                      case 5:
                        r = a.sent();
                        a.label = 6;
                      case 6:
                        return [3, 9];
                      case 7:
                        return [4, new Promise(function (t) {
                          (r = new Image()).crossOrigin = "anonymous";
                          r.src = e;
                          if (r.complete) {
                            t(r);
                          } else {
                            r.onload = function () {
                              t(r);
                            };
                          }
                        })];
                      case 8:
                        r = a.sent();
                        a.label = 9;
                      case 9:
                        (s = new g.t5(r, D({
                          resolution: (0, x.getResolutionOfUrl)(e)
                        }, t.data))).resource.src = e;
                        return [2, he(s, n, e)];
                    }
                  });
                });
              },
              unload: function (e) {
                e.destroy(true);
              }
            };
            var ye = {
              extension: g.Ag.LoadParser,
              test: function (e) {
                return x.path.extname(e).includes(".svg");
              },
              testParse: function (e) {
                return F(this, undefined, Promise, function () {
                  return N(this, function (t) {
                    return [2, g.$f.test(e)];
                  });
                });
              },
              parse: function (e, t, n) {
                return F(this, undefined, Promise, function () {
                  var a;
                  var o;
                  var h;
                  return N(this, function (l) {
                    switch (l.label) {
                      case 0:
                        a = new g.$f(e, (t == null ? undefined : t.data)?.resourceOptions);
                        (o = new g.t5(a, D({
                          resolution: (0, x.getResolutionOfUrl)(e)
                        }, t == null ? undefined : t.data))).resource.src = e;
                        h = he(o, n, e);
                        if ((t == null ? undefined : t.data)?.resourceOptions?.autoLoad) {
                          return [3, 2];
                        } else {
                          return [4, a.load()];
                        }
                      case 1:
                        l.sent();
                        l.label = 2;
                      case 2:
                        return [2, h];
                    }
                  });
                });
              },
              load: function (e, t) {
                return F(this, undefined, Promise, function () {
                  return N(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, b.W0.ADAPTER.fetch(e)];
                      case 1:
                        return [2, t.sent().text()];
                    }
                  });
                });
              },
              unload: ve.unload
            };
            var ge = function () {
              function e() {
                this._parsers = [];
                this.promiseCache = {};
              }
              e.prototype.reset = function () {
                this.promiseCache = {};
              };
              e.prototype._getLoadPromiseAndParser = function (e, t) {
                var n = {
                  promise: null,
                  parser: null
                };
                n.promise = F(this, undefined, undefined, function () {
                  var r;
                  var i;
                  var s;
                  var a;
                  var o;
                  var h;
                  return N(this, function (l) {
                    switch (l.label) {
                      case 0:
                        r = null;
                        i = 0;
                        l.label = 1;
                      case 1:
                        if (i < this.parsers.length) {
                          if ((s = this.parsers[i]).load && ((o = s.test) === null || o === undefined ? undefined : o.call(s, e, t, this))) {
                            return [4, s.load(e, t, this)];
                          } else {
                            return [3, 3];
                          }
                        } else {
                          return [3, 4];
                        }
                      case 2:
                        r = l.sent();
                        n.parser = s;
                        return [3, 4];
                      case 3:
                        i++;
                        return [3, 1];
                      case 4:
                        if (!n.parser) {
                          return [2, null];
                        }
                        i = 0;
                        l.label = 5;
                      case 5:
                        if (i < this.parsers.length) {
                          if ((s = this.parsers[i]).parse) {
                            if (a = s.parse) {
                              return [4, (h = s.testParse) === null || h === undefined ? undefined : h.call(s, r, t, this)];
                            } else {
                              return [3, 7];
                            }
                          } else {
                            return [3, 9];
                          }
                        } else {
                          return [3, 10];
                        }
                      case 6:
                        a = l.sent();
                        l.label = 7;
                      case 7:
                        if (a) {
                          return [4, s.parse(r, t, this)];
                        } else {
                          return [3, 9];
                        }
                      case 8:
                        r = l.sent() || r;
                        n.parser = s;
                        l.label = 9;
                      case 9:
                        i++;
                        return [3, 5];
                      case 10:
                        return [2, r];
                    }
                  });
                });
                return n;
              };
              e.prototype.load = function (e, t) {
                return F(this, undefined, Promise, function () {
                  var n;
                  var r;
                  var i;
                  var s;
                  var a;
                  var o;
                  var h = this;
                  return N(this, function (l) {
                    switch (l.label) {
                      case 0:
                        n = 0;
                        r = {};
                        i = z(e);
                        s = U(e, function (e) {
                          return {
                            src: e
                          };
                        });
                        a = s.length;
                        o = s.map(function (e) {
                          return F(h, undefined, undefined, function () {
                            var i;
                            var s;
                            var o;
                            var h;
                            return N(this, function (l) {
                              switch (l.label) {
                                case 0:
                                  i = x.path.toAbsolute(e.src);
                                  if (r[e.src]) {
                                    return [3, 4];
                                  }
                                  l.label = 1;
                                case 1:
                                  l.trys.push([1, 3,, 4]);
                                  this.promiseCache[i] ||= this._getLoadPromiseAndParser(i, e);
                                  s = r;
                                  o = e.src;
                                  return [4, this.promiseCache[i].promise];
                                case 2:
                                  s[o] = l.sent();
                                  if (t) {
                                    t(++n / a);
                                  }
                                  return [3, 4];
                                case 3:
                                  h = l.sent();
                                  delete this.promiseCache[i];
                                  delete r[e.src];
                                  throw new Error("[Loader.load] Failed to load " + i + ".\n" + h);
                                case 4:
                                  return [2];
                              }
                            });
                          });
                        });
                        return [4, Promise.all(o)];
                      case 1:
                        l.sent();
                        return [2, i ? r[s[0].src] : r];
                    }
                  });
                });
              };
              e.prototype.unload = function (e) {
                return F(this, undefined, Promise, function () {
                  var t;
                  var n;
                  var r = this;
                  return N(this, function (i) {
                    switch (i.label) {
                      case 0:
                        t = U(e, function (e) {
                          return {
                            src: e
                          };
                        });
                        n = t.map(function (e) {
                          return F(r, undefined, undefined, function () {
                            var t;
                            var n;
                            var r;
                            var i;
                            var s;
                            return N(this, function (a) {
                              switch (a.label) {
                                case 0:
                                  t = x.path.toAbsolute(e.src);
                                  if (n = this.promiseCache[t]) {
                                    return [4, n.promise];
                                  } else {
                                    return [3, 2];
                                  }
                                case 1:
                                  r = a.sent();
                                  if ((s = (i = n.parser) === null || i === undefined ? undefined : i.unload) !== null && s !== undefined) {
                                    s.call(i, r, e, this);
                                  }
                                  delete this.promiseCache[t];
                                  a.label = 2;
                                case 2:
                                  return [2];
                              }
                            });
                          });
                        });
                        return [4, Promise.all(n)];
                      case 1:
                        i.sent();
                        return [2];
                    }
                  });
                });
              };
              Object.defineProperty(e.prototype, "parsers", {
                get: function () {
                  return this._parsers;
                },
                enumerable: false,
                configurable: true
              });
              return e;
            }();
            var we = ["jpg", "png", "jpeg", "avif", "webp"];
            var xe = {
              extension: g.Ag.ResolveParser,
              test: function (e) {
                var t = e.split("?")[0].split(".");
                var n = t.pop();
                var r = t.pop();
                return n === "json" && we.includes(r);
              },
              parse: function (e) {
                var r = e.split(".");
                return {
                  resolution: parseFloat(b.W0.RETINA_PREFIX.exec(e)?.[1] ?? "1"),
                  format: r[r.length - 2],
                  src: e
                };
              }
            };
            var be = {
              extension: g.Ag.ResolveParser,
              test: ve.test,
              parse: function (e) {
                return {
                  resolution: parseFloat(b.W0.RETINA_PREFIX.exec(e)?.[1] ?? "1"),
                  format: e.split(".").pop(),
                  src: e
                };
              }
            };
            g.Ag.ResolveParser;
            var Te = function () {
              function e() {
                this._assetMap = {};
                this._preferredOrder = [];
                this._parsers = [];
                this._resolverHash = {};
                this._bundles = {};
              }
              e.prototype.prefer = function () {
                var e = arguments;
                var t = this;
                var n = [];
                for (var r = 0; r < arguments.length; r++) {
                  n[r] = e[r];
                }
                n.forEach(function (e) {
                  t._preferredOrder.push(e);
                  e.priority ||= Object.keys(e.params);
                });
                this._resolverHash = {};
              };
              Object.defineProperty(e.prototype, "basePath", {
                get: function () {
                  return this._basePath;
                },
                set: function (e) {
                  this._basePath = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "rootPath", {
                get: function () {
                  return this._rootPath;
                },
                set: function (e) {
                  this._rootPath = e;
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "parsers", {
                get: function () {
                  return this._parsers;
                },
                enumerable: false,
                configurable: true
              });
              e.prototype.reset = function () {
                this._preferredOrder = [];
                this._resolverHash = {};
                this._assetMap = {};
                this._rootPath = null;
                this._basePath = null;
                this._manifest = null;
              };
              e.prototype.addManifest = function (e) {
                var t = this;
                this._manifest;
                this._manifest = e;
                e.bundles.forEach(function (e) {
                  t.addBundle(e.name, e.assets);
                });
              };
              e.prototype.addBundle = function (e, t) {
                var n = this;
                var r = [];
                if (Array.isArray(t)) {
                  t.forEach(function (e) {
                    if (typeof e.name == "string") {
                      r.push(e.name);
                    } else {
                      r.push.apply(r, e.name);
                    }
                    n.add(e.name, e.srcs);
                  });
                } else {
                  Object.keys(t).forEach(function (e) {
                    r.push(e);
                    n.add(e, t[e]);
                  });
                }
                this._bundles[e] = r;
              };
              e.prototype.add = function (e, t, n) {
                var r = this;
                var i = U(e);
                i.forEach(function (e) {
                  r._assetMap[e];
                });
                if (!Array.isArray(t)) {
                  t = typeof t == "string" ? H(t) : [t];
                }
                var s = t.map(function (e) {
                  var s = e;
                  if (typeof e == "string") {
                    var a = false;
                    for (var o = 0; o < r._parsers.length; o++) {
                      var h = r._parsers[o];
                      if (h.test(e)) {
                        s = h.parse(e);
                        a = true;
                        break;
                      }
                    }
                    if (!a) {
                      s = {
                        src: e
                      };
                    }
                  }
                  s.format ||= s.src.split(".").pop();
                  s.alias ||= i;
                  if (r._basePath || r._rootPath) {
                    s.src = x.path.toAbsolute(s.src, r._basePath, r._rootPath);
                  }
                  s.data = s.data ?? n;
                  return s;
                });
                i.forEach(function (e) {
                  r._assetMap[e] = s;
                });
              };
              e.prototype.resolveBundle = function (e) {
                var t = this;
                var n = z(e);
                e = U(e);
                var r = {};
                e.forEach(function (e) {
                  var n = t._bundles[e];
                  if (n) {
                    r[e] = t.resolve(n);
                  }
                });
                if (n) {
                  return r[e[0]];
                } else {
                  return r;
                }
              };
              e.prototype.resolveUrl = function (e) {
                var t = this.resolve(e);
                if (typeof e != "string") {
                  var n = {};
                  for (var r in t) {
                    n[r] = t[r].src;
                  }
                  return n;
                }
                return t.src;
              };
              e.prototype.resolve = function (e) {
                var t = this;
                var n = z(e);
                e = U(e);
                var r = {};
                e.forEach(function (e) {
                  if (!t._resolverHash[e]) {
                    if (t._assetMap[e]) {
                      var i = t._assetMap[e];
                      var s = t._getPreferredOrder(i);
                      var a = i[0];
                      if (s != null) {
                        s.priority.forEach(function (e) {
                          s.params[e].forEach(function (t) {
                            var n = i.filter(function (n) {
                              return !!n[e] && n[e] === t;
                            });
                            if (n.length) {
                              i = n;
                            }
                          });
                        });
                      }
                      t._resolverHash[e] = i[0] ?? a;
                    } else {
                      var o = e;
                      if (t._basePath || t._rootPath) {
                        o = x.path.toAbsolute(o, t._basePath, t._rootPath);
                      }
                      t._resolverHash[e] = {
                        src: o
                      };
                    }
                  }
                  r[e] = t._resolverHash[e];
                });
                if (n) {
                  return r[e[0]];
                } else {
                  return r;
                }
              };
              e.prototype._getPreferredOrder = function (e) {
                var t = function (t) {
                  var r = e[0];
                  var i = n._preferredOrder.find(function (e) {
                    return e.params.format.includes(r.format);
                  });
                  if (i) {
                    return {
                      value: i
                    };
                  }
                };
                var n = this;
                for (var r = 0; r < e.length; r++) {
                  var i = t();
                  if (typeof i == "object") {
                    return i.value;
                  }
                }
                return this._preferredOrder[0];
              };
              return e;
            }();
            var Ae = function () {
              function e() {
                this._detections = [];
                this._initialized = false;
                this.resolver = new Te();
                this.loader = new ge();
                this.cache = W;
                this._backgroundLoader = new G(this.loader);
                this._backgroundLoader.active = true;
                this.reset();
              }
              e.prototype.init = function (e) {
                if (e === undefined) {
                  e = {};
                }
                return F(this, undefined, Promise, function () {
                  var s;
                  var a;
                  var o;
                  var h;
                  var l;
                  var d;
                  var c;
                  var u;
                  var p;
                  var m;
                  return N(this, function (f) {
                    switch (f.label) {
                      case 0:
                        if (this._initialized) {
                          return [2];
                        } else {
                          this._initialized = true;
                          if (e.basePath) {
                            this.resolver.basePath = e.basePath;
                          }
                          if (e.manifest) {
                            if (typeof (s = e.manifest) != "string") {
                              return [3, 2];
                            } else {
                              return [4, this.load(s)];
                            }
                          } else {
                            return [3, 3];
                          }
                        }
                      case 1:
                        s = f.sent();
                        f.label = 2;
                      case 2:
                        this.resolver.addManifest(s);
                        f.label = 3;
                      case 3:
                        a = e.texturePreference?.resolution ?? 1;
                        o = typeof a == "number" ? [a] : a;
                        if (!e.texturePreference?.format) {
                          return [3, 9];
                        }
                        l = e.texturePreference?.format;
                        h = typeof l == "string" ? [l] : l;
                        d = 0;
                        c = this._detections;
                        f.label = 4;
                      case 4:
                        if (d < c.length) {
                          return [4, (m = c[d]).test()];
                        } else {
                          return [3, 8];
                        }
                      case 5:
                        if (f.sent()) {
                          return [3, 7];
                        } else {
                          return [4, m.remove(h)];
                        }
                      case 6:
                        h = f.sent();
                        f.label = 7;
                      case 7:
                        d++;
                        return [3, 4];
                      case 8:
                        return [3, 14];
                      case 9:
                        h = ["png", "jpg", "jpeg"];
                        u = 0;
                        p = this._detections;
                        f.label = 10;
                      case 10:
                        if (u < p.length) {
                          return [4, (m = p[u]).test()];
                        } else {
                          return [3, 14];
                        }
                      case 11:
                        if (f.sent()) {
                          return [4, m.add(h)];
                        } else {
                          return [3, 13];
                        }
                      case 12:
                        h = f.sent();
                        f.label = 13;
                      case 13:
                        u++;
                        return [3, 10];
                      case 14:
                        this.resolver.prefer({
                          params: {
                            format: h,
                            resolution: o
                          }
                        });
                        return [2];
                    }
                  });
                });
              };
              e.prototype.add = function (e, t, n) {
                this.resolver.add(e, t, n);
              };
              e.prototype.load = function (e, t) {
                return F(this, undefined, Promise, function () {
                  var n;
                  var r;
                  var i;
                  var s;
                  var a = this;
                  return N(this, function (o) {
                    switch (o.label) {
                      case 0:
                        if (this._initialized) {
                          return [3, 2];
                        } else {
                          return [4, this.init()];
                        }
                      case 1:
                        o.sent();
                        o.label = 2;
                      case 2:
                        n = z(e);
                        r = U(e).map(function (e) {
                          if (typeof e != "string") {
                            a.resolver.add(e.src, e);
                            return e.src;
                          } else {
                            return e;
                          }
                        });
                        i = this.resolver.resolve(r);
                        return [4, this._mapLoadToResolve(i, t)];
                      case 3:
                        s = o.sent();
                        return [2, n ? s[r[0]] : s];
                    }
                  });
                });
              };
              e.prototype.addBundle = function (e, t) {
                this.resolver.addBundle(e, t);
              };
              e.prototype.loadBundle = function (e, t) {
                return F(this, undefined, Promise, function () {
                  var n;
                  var r;
                  var i;
                  var s;
                  var a;
                  var o;
                  var h;
                  var l;
                  var d = this;
                  return N(this, function (c) {
                    switch (c.label) {
                      case 0:
                        if (this._initialized) {
                          return [3, 2];
                        } else {
                          return [4, this.init()];
                        }
                      case 1:
                        c.sent();
                        c.label = 2;
                      case 2:
                        n = false;
                        if (typeof e == "string") {
                          n = true;
                          e = [e];
                        }
                        r = this.resolver.resolveBundle(e);
                        i = {};
                        s = Object.keys(r);
                        a = 0;
                        o = 0;
                        h = function () {
                          if (t != null) {
                            t(++a / o);
                          }
                        };
                        l = s.map(function (e) {
                          var t = r[e];
                          o += Object.keys(t).length;
                          return d._mapLoadToResolve(t, h).then(function (t) {
                            i[e] = t;
                          });
                        });
                        return [4, Promise.all(l)];
                      case 3:
                        c.sent();
                        return [2, n ? i[e[0]] : i];
                    }
                  });
                });
              };
              e.prototype.backgroundLoad = function (e) {
                return F(this, undefined, Promise, function () {
                  var t;
                  return N(this, function (n) {
                    switch (n.label) {
                      case 0:
                        if (this._initialized) {
                          return [3, 2];
                        } else {
                          return [4, this.init()];
                        }
                      case 1:
                        n.sent();
                        n.label = 2;
                      case 2:
                        if (typeof e == "string") {
                          e = [e];
                        }
                        t = this.resolver.resolve(e);
                        this._backgroundLoader.add(Object.values(t));
                        return [2];
                    }
                  });
                });
              };
              e.prototype.backgroundLoadBundle = function (e) {
                return F(this, undefined, Promise, function () {
                  var t;
                  var n = this;
                  return N(this, function (r) {
                    switch (r.label) {
                      case 0:
                        if (this._initialized) {
                          return [3, 2];
                        } else {
                          return [4, this.init()];
                        }
                      case 1:
                        r.sent();
                        r.label = 2;
                      case 2:
                        if (typeof e == "string") {
                          e = [e];
                        }
                        t = this.resolver.resolveBundle(e);
                        Object.values(t).forEach(function (e) {
                          n._backgroundLoader.add(Object.values(e));
                        });
                        return [2];
                    }
                  });
                });
              };
              e.prototype.reset = function () {
                this.resolver.reset();
                this.loader.reset();
                this.cache.reset();
                this._initialized = false;
              };
              e.prototype.get = function (e) {
                if (typeof e == "string") {
                  return W.get(e);
                }
                var t = {};
                for (var n = 0; n < e.length; n++) {
                  t[n] = W.get(e[n]);
                }
                return t;
              };
              e.prototype._mapLoadToResolve = function (e, t) {
                return F(this, undefined, Promise, function () {
                  var n;
                  var r;
                  var i;
                  var s;
                  return N(this, function (a) {
                    switch (a.label) {
                      case 0:
                        n = Object.values(e);
                        r = Object.keys(e);
                        this._backgroundLoader.active = false;
                        return [4, this.loader.load(n, t)];
                      case 1:
                        i = a.sent();
                        this._backgroundLoader.active = true;
                        s = {};
                        n.forEach(function (e, t) {
                          var n = i[e.src];
                          var a = [e.src];
                          if (e.alias) {
                            a.push.apply(a, e.alias);
                          }
                          s[r[t]] = n;
                          W.set(a, n);
                        });
                        return [2, s];
                    }
                  });
                });
              };
              e.prototype.unload = function (e) {
                return F(this, undefined, Promise, function () {
                  var t;
                  var n;
                  return N(this, function (r) {
                    switch (r.label) {
                      case 0:
                        if (this._initialized) {
                          return [3, 2];
                        } else {
                          return [4, this.init()];
                        }
                      case 1:
                        r.sent();
                        r.label = 2;
                      case 2:
                        t = U(e).map(function (e) {
                          if (typeof e != "string") {
                            return e.src;
                          } else {
                            return e;
                          }
                        });
                        n = this.resolver.resolve(t);
                        return [4, this._unloadFromResolved(n)];
                      case 3:
                        r.sent();
                        return [2];
                    }
                  });
                });
              };
              e.prototype.unloadBundle = function (e) {
                return F(this, undefined, Promise, function () {
                  var t;
                  var n;
                  var r = this;
                  return N(this, function (i) {
                    switch (i.label) {
                      case 0:
                        if (this._initialized) {
                          return [3, 2];
                        } else {
                          return [4, this.init()];
                        }
                      case 1:
                        i.sent();
                        i.label = 2;
                      case 2:
                        e = U(e);
                        t = this.resolver.resolveBundle(e);
                        n = Object.keys(t).map(function (e) {
                          return r._unloadFromResolved(t[e]);
                        });
                        return [4, Promise.all(n)];
                      case 3:
                        i.sent();
                        return [2];
                    }
                  });
                });
              };
              e.prototype._unloadFromResolved = function (e) {
                return F(this, undefined, undefined, function () {
                  var t;
                  return N(this, function (n) {
                    switch (n.label) {
                      case 0:
                        (t = Object.values(e)).forEach(function (e) {
                          W.remove(e.src);
                        });
                        return [4, this.loader.unload(t)];
                      case 1:
                        n.sent();
                        return [2];
                    }
                  });
                });
              };
              Object.defineProperty(e.prototype, "detections", {
                get: function () {
                  return this._detections;
                },
                enumerable: false,
                configurable: true
              });
              return e;
            }();
            var Ce = new Ae();
            function Se(e, t, n) {
              var r = this;
              if (n === undefined) {
                n = 20;
              }
              return new Promise(function (i) {
                var s = [];
                for (var a in e) {
                  var h = e[a];
                  var l = Ce.get(a);
                  var d = l && l.baseTexture;
                  if (d) {
                    if (h.tags) {
                      if (h.tags[4444]) {
                        d.type = o.QE4.UNSIGNED_SHORT_4_4_4_4;
                      }
                      if (h.tags.nearest) {
                        d.scaleMode = o.M6W.NEAREST;
                      }
                    }
                    if (d.isPowerOfTwo) {
                      d.wrapMode = o.uRw.REPEAT;
                    }
                    s.push(d);
                  }
                }
                var c = 0;
                function p() {
                  for (var e = 0; e < n; e++) {
                    if (c === s.length) {
                      u.R.instance.remove(p, r);
                      i();
                      break;
                    }
                    t.texture.bind(s[c]);
                    c++;
                  }
                }
                u.R.instance.add(p, r);
              });
            }
            function Ee(e, t, n) {
              var r = this;
              if (n === undefined) {
                n = 20;
              }
              return new Promise(function (i) {
                var s = [];
                for (var a in e) {
                  var o = Ce.get(a);
                  var h = o && o.baseTexture;
                  if (h) {
                    s.push(h);
                  }
                }
                var l = 0;
                function d() {
                  for (var e = 0; e < n; e++) {
                    if (l === s.length) {
                      u.R.instance.remove(d, r);
                      i();
                      break;
                    }
                    t.texture.destroyTexture(s[l], true);
                    l++;
                  }
                }
                u.R.instance.add(d, r);
              });
            }
            g.XO.handleByList(g.Ag.LoadParser, Ce.loader.parsers).handleByList(g.Ag.ResolveParser, Ce.resolver.parsers).handleByList(g.Ag.CacheParser, Ce.cache.parsers).handleByList(g.Ag.DetectionParser, Ce.detections);
            g.XO.add(ve, ye, re, te, ne, ee, ae, Y, q, be, xe, $, Z);
            a();
            n(27495);
            n(90744);
            n(21489);
            n(81630);
            n(72170);
            n(75044);
            n(69539);
            n(31694);
            n(89955);
            n(33206);
            n(44496);
            n(66651);
            n(12887);
            n(19369);
            n(66812);
            n(8995);
            n(31575);
            n(36072);
            n(88747);
            n(28845);
            n(29423);
            n(57301);
            n(373);
            n(86614);
            n(41405);
            n(33684);
            i();
            var Oe = ArrayBuffer;
            var ke = Uint8Array;
            var Pe = Uint16Array;
            var Me = Int16Array;
            var Re = Int32Array;
            function Ie(e, t, n) {
              if (ke.prototype.slice) {
                return ke.prototype.slice.call(e, t, n);
              }
              if (t == null || t < 0) {
                t = 0;
              }
              if (n == null || n > e.length) {
                n = e.length;
              }
              var r = new ke(n - t);
              r.set(e.subarray(t, n));
              return r;
            }
            function Le(e, t, n, r) {
              if (ke.prototype.fill) {
                return ke.prototype.fill.call(e, t, n, r);
              }
              if (n == null || n < 0) {
                n = 0;
              }
              if (r == null || r > e.length) {
                r = e.length;
              }
              for (; n < r; ++n) {
                e[n] = t;
              }
              return e;
            }
            function je(e, t, n, r) {
              if (ke.prototype.copyWithin) {
                return ke.prototype.copyWithin.call(e, t, n, r);
              }
              if (n == null || n < 0) {
                n = 0;
              }
              if (r == null || r > e.length) {
                r = e.length;
              }
              while (n < r) {
                e[t++] = e[n++];
              }
            }
            var Be = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"];
            function De(e, t, n) {
              var r = new Error(t || Be[e]);
              r.code = e;
              if (Error.captureStackTrace) {
                Error.captureStackTrace(r, De);
              }
              if (!n) {
                throw r;
              }
              return r;
            }
            function Fe(e, t, n) {
              for (var r = 0, i = 0; r < n; ++r) {
                i |= e[t++] << (r << 3);
              }
              return i;
            }
            function Ne(e, t) {
              var n;
              var r = e[0] | e[1] << 8 | e[2] << 16;
              if (r == 3126568 && e[3] == 253) {
                var i = e[4];
                var s = i >> 5 & 1;
                var a = i >> 2 & 1;
                var o = i & 3;
                var h = i >> 6;
                if (i & 8) {
                  De(0);
                }
                var l = 6 - s;
                var d = o == 3 ? 4 : o;
                var c = Fe(e, l, d);
                var u = h ? 1 << h : s;
                var p = Fe(e, l += d, u) + (h == 1 && 256);
                var m = p;
                if (!s) {
                  var f = 1 << 10 + (e[5] >> 3);
                  m = f + (f >> 3) * (e[5] & 7);
                }
                if (m > 2145386496) {
                  De(1);
                }
                var _ = new ke((t == 1 ? p || m : t ? 0 : m) + 12);
                _[0] = 1;
                _[4] = 4;
                _[8] = 8;
                return {
                  b: l + u,
                  y: 0,
                  l: 0,
                  d: c,
                  w: t && t != 1 ? t : _.subarray(12),
                  e: m,
                  o: new Re(_.buffer, 0, 3),
                  u: p,
                  c: a,
                  m: Math.min(131072, m)
                };
              }
              if ((r >> 4 | e[3] << 20) == 25481893) {
                return (((n = e)[4] | n[5] << 8 | n[6] << 16 | n[7] << 24) >>> 0) + 8;
              }
              De(0);
            }
            function Ge(e) {
              for (var t = 0; 1 << t <= e; ++t);
              return t - 1;
            }
            function Ue(e, t, n) {
              var r = 4 + (t << 3);
              var i = 5 + (e[t] & 15);
              if (i > n) {
                De(3);
              }
              var s = 1 << i;
              for (var a = s, o = -1, h = -1, l = -1, d = s, c = new Oe(512 + (s << 2)), u = new Me(c, 0, 256), p = new Pe(c, 0, 256), m = new Pe(c, 512, s), f = 512 + (s << 1), _ = new ke(c, f, s), v = new ke(c, f + s); o < 255 && a > 0;) {
                var y = Ge(a + 1);
                var g = r >> 3;
                var w = (1 << y + 1) - 1;
                var x = (e[g] | e[g + 1] << 8 | e[g + 2] << 16) >> (r & 7) & w;
                var b = (1 << y) - 1;
                var T = w - a - 1;
                var A = x & b;
                if (A < T) {
                  r += y;
                  x = A;
                } else {
                  r += y + 1;
                  if (x > b) {
                    x -= T;
                  }
                }
                u[++o] = --x;
                if (x == -1) {
                  a += x;
                  _[--d] = o;
                } else {
                  a -= x;
                }
                if (!x) {
                  do {
                    var C = r >> 3;
                    h = (e[C] | e[C + 1] << 8) >> (r & 7) & 3;
                    r += 2;
                    o += h;
                  } while (h == 3);
                }
              }
              if (o > 255 || a) {
                De(0);
              }
              var S = 0;
              var E = (s >> 1) + (s >> 3) + 3;
              var O = s - 1;
              for (var k = 0; k <= o; ++k) {
                var P = u[k];
                if (P < 1) {
                  p[k] = -P;
                } else {
                  for (l = 0; l < P; ++l) {
                    _[S] = k;
                    do {
                      S = S + E & O;
                    } while (S >= d);
                  }
                }
              }
              if (S) {
                De(0);
              }
              l = 0;
              for (; l < s; ++l) {
                var M = p[_[l]]++;
                var R = v[l] = i - Ge(M);
                m[l] = (M << R) - s;
              }
              return [r + 7 >> 3, {
                b: i,
                s: _,
                n: v,
                t: m
              }];
            }
            var Ve = Ue(new ke([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1];
            var He = Ue(new ke([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1];
            var ze = Ue(new ke([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1];
            function We(e, t) {
              for (var n = e.length, r = new Re(n), i = 0; i < n; ++i) {
                r[i] = t;
                t += 1 << e[i];
              }
              return r;
            }
            var Xe = new ke(new Re([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36);
            var Ye = We(Xe, 0);
            var qe = new ke(new Re([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53);
            var Je = We(qe, 3);
            function Ke(e, t, n) {
              var r = e.length;
              var i = t.length;
              var s = e[r - 1];
              var a = (1 << n.b) - 1;
              var o = -n.b;
              if (!s) {
                De(0);
              }
              var h = 0;
              var l = n.b;
              for (var d = (r << 3) - 8 + Ge(s) - l, c = -1; d > o && c < i;) {
                var u = d >> 3;
                h = (h << l | (e[u] | e[u + 1] << 8 | e[u + 2] << 16) >> (d & 7)) & a;
                t[++c] = n.s[h];
                d -= l = n.n[h];
              }
              if (d != o || c + 1 != i) {
                De(0);
              }
            }
            function Ze(e, t, n) {
              var r = 6;
              var i = t.length + 3 >> 2;
              var s = i << 1;
              var a = i + s;
              Ke(e.subarray(r, r += e[0] | e[1] << 8), t.subarray(0, i), n);
              Ke(e.subarray(r, r += e[2] | e[3] << 8), t.subarray(i, s), n);
              Ke(e.subarray(r, r += e[4] | e[5] << 8), t.subarray(s, a), n);
              Ke(e.subarray(r), t.subarray(a), n);
            }
            function $e(e, t, n) {
              var r;
              var i = t.b;
              var s = e[i];
              var a = s >> 1 & 3;
              t.l = s & 1;
              var o = s >> 3 | e[i + 1] << 5 | e[i + 2] << 13;
              var h = (i += 3) + o;
              if (a == 1) {
                if (i >= e.length) {
                  return;
                }
                t.b = i + 1;
                if (n) {
                  Le(n, e[i], t.y, t.y += o);
                  return n;
                } else {
                  return Le(new ke(o), e[i]);
                }
              }
              if (!(h > e.length)) {
                if (a == 0) {
                  t.b = h;
                  if (n) {
                    n.set(e.subarray(i, h), t.y);
                    t.y += o;
                    return n;
                  } else {
                    return Ie(e, i, h);
                  }
                }
                if (a == 2) {
                  var l = e[i];
                  var d = l & 3;
                  var c = l >> 2 & 3;
                  var u = l >> 4;
                  var p = 0;
                  var m = 0;
                  if (d < 2) {
                    if (c & 1) {
                      u |= e[++i] << 4 | (c & 2 && e[++i] << 12);
                    } else {
                      u = l >> 3;
                    }
                  } else {
                    m = c;
                    if (c < 2) {
                      u |= (e[++i] & 63) << 4;
                      p = e[i] >> 6 | e[++i] << 2;
                    } else if (c == 2) {
                      u |= e[++i] << 4 | (e[++i] & 3) << 12;
                      p = e[i] >> 2 | e[++i] << 6;
                    } else {
                      u |= e[++i] << 4 | (e[++i] & 63) << 12;
                      p = e[i] >> 6 | e[++i] << 2 | e[++i] << 10;
                    }
                  }
                  ++i;
                  var f = n ? n.subarray(t.y, t.y + t.m) : new ke(t.m);
                  var _ = f.length - u;
                  if (d == 0) {
                    f.set(e.subarray(i, i += u), _);
                  } else if (d == 1) {
                    Le(f, e[i++], _);
                  } else {
                    var v = t.h;
                    if (d == 2) {
                      var y = function (e, t) {
                        var n = 0;
                        var r = -1;
                        var i = new ke(292);
                        var s = e[t];
                        var a = i.subarray(0, 256);
                        var o = i.subarray(256, 268);
                        var h = new Pe(i.buffer, 268);
                        if (s < 128) {
                          var l = Ue(e, t + 1, 6);
                          var d = l[0];
                          var c = l[1];
                          var u = d << 3;
                          var p = e[t += s];
                          if (!p) {
                            De(0);
                          }
                          var m = 0;
                          var f = 0;
                          for (var _ = c.b, v = _, y = (++t << 3) - 8 + Ge(p); !((y -= _) < u);) {
                            var g = y >> 3;
                            m += (e[g] | e[g + 1] << 8) >> (y & 7) & (1 << _) - 1;
                            a[++r] = c.s[m];
                            if ((y -= v) < u) {
                              break;
                            }
                            f += (e[g = y >> 3] | e[g + 1] << 8) >> (y & 7) & (1 << v) - 1;
                            a[++r] = c.s[f];
                            _ = c.n[m];
                            m = c.t[m];
                            v = c.n[f];
                            f = c.t[f];
                          }
                          if (++r > 255) {
                            De(0);
                          }
                        } else {
                          for (r = s - 127; n < r; n += 2) {
                            var w = e[++t];
                            a[n] = w >> 4;
                            a[n + 1] = w & 15;
                          }
                          ++t;
                        }
                        var x = 0;
                        for (n = 0; n < r; ++n) {
                          if ((C = a[n]) > 11) {
                            De(0);
                          }
                          x += C && 1 << C - 1;
                        }
                        var b = Ge(x) + 1;
                        var T = 1 << b;
                        var A = T - x;
                        if (A & A - 1) {
                          De(0);
                        }
                        a[r++] = Ge(A) + 1;
                        n = 0;
                        for (; n < r; ++n) {
                          var C = a[n];
                          ++o[a[n] = C && b + 1 - C];
                        }
                        var S = new ke(T << 1);
                        var E = S.subarray(0, T);
                        var O = S.subarray(T);
                        h[b] = 0;
                        n = b;
                        for (; n > 0; --n) {
                          var k = h[n];
                          Le(O, n, k, h[n - 1] = k + o[n] * (1 << b - n));
                        }
                        if (h[0] != T) {
                          De(0);
                        }
                        n = 0;
                        for (; n < r; ++n) {
                          var P = a[n];
                          if (P) {
                            var M = h[P];
                            Le(E, n, M, h[P] = M + (1 << b - P));
                          }
                        }
                        return [t, {
                          n: O,
                          b,
                          s: E
                        }];
                      }(e, i);
                      p += i - (i = y[0]);
                      t.h = v = y[1];
                    } else if (!v) {
                      De(0);
                    }
                    (m ? Ze : Ke)(e.subarray(i, i += p), f.subarray(_), v);
                  }
                  var g = e[i++];
                  if (g) {
                    if (g == 255) {
                      g = 32512 + (e[i++] | e[i++] << 8);
                    } else if (g > 127) {
                      g = g - 128 << 8 | e[i++];
                    }
                    var w = e[i++];
                    if (w & 3) {
                      De(0);
                    }
                    var x = [He, ze, Ve];
                    for (var b = 2; b > -1; --b) {
                      var T = w >> 2 + (b << 1) & 3;
                      if (T == 1) {
                        var A = new ke([0, 0, e[i++]]);
                        x[b] = {
                          s: A.subarray(2, 3),
                          n: A.subarray(0, 1),
                          t: new Pe(A.buffer, 0, 1),
                          b: 0
                        };
                      } else if (T == 2) {
                        i = (r = Ue(e, i, 9 - (b & 1)))[0];
                        x[b] = r[1];
                      } else if (T == 3) {
                        if (!t.t) {
                          De(0);
                        }
                        x[b] = t.t[b];
                      }
                    }
                    var C = t.t = x;
                    var S = C[0];
                    var E = C[1];
                    var O = C[2];
                    var k = e[h - 1];
                    if (!k) {
                      De(0);
                    }
                    var P = (h << 3) - 8 + Ge(k) - O.b;
                    var M = P >> 3;
                    var R = 0;
                    var I = (e[M] | e[M + 1] << 8) >> (P & 7) & (1 << O.b) - 1;
                    var L = (e[M = (P -= E.b) >> 3] | e[M + 1] << 8) >> (P & 7) & (1 << E.b) - 1;
                    var j = (e[M = (P -= S.b) >> 3] | e[M + 1] << 8) >> (P & 7) & (1 << S.b) - 1;
                    for (++g; --g;) {
                      var B = O.s[I];
                      var D = O.n[I];
                      var F = S.s[j];
                      var N = S.n[j];
                      var G = E.s[L];
                      var U = E.n[L];
                      var V = 1 << G;
                      var H = V + ((e[M = (P -= G) >> 3] | e[M + 1] << 8 | e[M + 2] << 16 | e[M + 3] << 24) >>> (P & 7) & V - 1);
                      M = (P -= qe[F]) >> 3;
                      var z = Je[F] + ((e[M] | e[M + 1] << 8 | e[M + 2] << 16) >> (P & 7) & (1 << qe[F]) - 1);
                      M = (P -= Xe[B]) >> 3;
                      var W = Ye[B] + ((e[M] | e[M + 1] << 8 | e[M + 2] << 16) >> (P & 7) & (1 << Xe[B]) - 1);
                      M = (P -= D) >> 3;
                      I = O.t[I] + ((e[M] | e[M + 1] << 8) >> (P & 7) & (1 << D) - 1);
                      M = (P -= N) >> 3;
                      j = S.t[j] + ((e[M] | e[M + 1] << 8) >> (P & 7) & (1 << N) - 1);
                      M = (P -= U) >> 3;
                      L = E.t[L] + ((e[M] | e[M + 1] << 8) >> (P & 7) & (1 << U) - 1);
                      if (H > 3) {
                        t.o[2] = t.o[1];
                        t.o[1] = t.o[0];
                        t.o[0] = H -= 3;
                      } else {
                        var X = H - (W != 0);
                        if (X) {
                          H = X == 3 ? t.o[0] - 1 : t.o[X];
                          if (X > 1) {
                            t.o[2] = t.o[1];
                          }
                          t.o[1] = t.o[0];
                          t.o[0] = H;
                        } else {
                          H = t.o[0];
                        }
                      }
                      for (b = 0; b < W; ++b) {
                        f[R + b] = f[_ + b];
                      }
                      _ += W;
                      var Y = (R += W) - H;
                      if (Y < 0) {
                        var q = -Y;
                        var J = t.e + Y;
                        if (q > z) {
                          q = z;
                        }
                        b = 0;
                        for (; b < q; ++b) {
                          f[R + b] = t.w[J + b];
                        }
                        R += q;
                        z -= q;
                        Y = 0;
                      }
                      for (b = 0; b < z; ++b) {
                        f[R + b] = f[Y + b];
                      }
                      R += z;
                    }
                    if (R != _) {
                      while (_ < f.length) {
                        f[R++] = f[_++];
                      }
                    } else {
                      R = f.length;
                    }
                    if (n) {
                      t.y += R;
                    } else {
                      f = Ie(f, 0, R);
                    }
                  } else if (n) {
                    t.y += u;
                    if (_) {
                      for (b = 0; b < u; ++b) {
                        f[b] = f[_ + b];
                      }
                    }
                  } else if (_) {
                    f = Ie(f, _);
                  }
                  t.b = h;
                  return f;
                }
                De(2);
              }
            }
            function Qe(e, t) {
              var n = [];
              var r = +!t;
              var i = 0;
              for (var s = 0; e.length;) {
                var a = Ne(e, r || t);
                if (typeof a == "object") {
                  for (r ? (t = null, a.w.length == a.u && (n.push(t = a.w), s += a.u)) : (n.push(t), a.e = 0); !a.l;) {
                    var o = $e(e, a, t);
                    if (!o) {
                      De(5);
                    }
                    if (t) {
                      a.e = a.y;
                    } else {
                      n.push(o);
                      s += o.length;
                      je(a.w, 0, o.length);
                      a.w.set(o, a.w.length - o.length);
                    }
                  }
                  i = a.b + a.c * 4;
                } else {
                  i = a;
                }
                e = e.subarray(i);
              }
              return function (e, t) {
                if (e.length == 1) {
                  return e[0];
                }
                var n = new ke(t);
                for (var r = 0, i = 0; r < e.length; ++r) {
                  var s = e[r];
                  n.set(s, i);
                  i += s.length;
                }
                return n;
              }(n, s);
            }
            function et() {
              var e;
              var t;
              var n = typeof Symbol == "function" ? Symbol : {};
              var r = n.iterator || "@@iterator";
              var i = n.toStringTag || "@@toStringTag";
              function s(n, r, i, s) {
                var h = r && r.prototype instanceof o ? r : o;
                var l = Object.create(h.prototype);
                tt(l, "_invoke", function (n, r, i) {
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
              var d = [][r] ? t(t([][r]())) : (tt(t = {}, r, function () {
                return this;
              }), t);
              var c = l.prototype = o.prototype = Object.create(d);
              function u(e) {
                if (Object.setPrototypeOf) {
                  Object.setPrototypeOf(e, l);
                } else {
                  e.__proto__ = l;
                  tt(e, i, "GeneratorFunction");
                }
                e.prototype = Object.create(c);
                return e;
              }
              h.prototype = l;
              tt(c, "constructor", l);
              tt(l, "constructor", h);
              h.displayName = "GeneratorFunction";
              tt(l, i, "GeneratorFunction");
              tt(c);
              tt(c, i, "Generator");
              tt(c, r, function () {
                return this;
              });
              tt(c, "toString", function () {
                return "[object Generator]";
              });
              return (et = function () {
                return {
                  w: s,
                  m: u
                };
              })();
            }
            function tt(e, t, n, r) {
              var i = Object.defineProperty;
              try {
                i({}, "", {});
              } catch (e) {
                i = 0;
              }
              tt = function (e, t, n, r) {
                function s(t, n) {
                  tt(e, t, function (e) {
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
              tt(e, t, n, r);
            }
            function nt(e, t, n, r, i, s, a) {
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
            var rt = null;
            var it = null;
            var st = false;
            var at = {};
            var ot = {};
            var ht = {
              extension: o.AgS.LoadParser,
              test: function (e) {
                return e.split("?")[0].toLowerCase().endsWith(".hgh");
              },
              load: function (e, t, n) {
                return (r = et().m(function r() {
                  var i;
                  var s;
                  var a;
                  var h;
                  var l;
                  var d;
                  var c;
                  var u;
                  var p;
                  var m;
                  var f;
                  return et().w(function (r) {
                    while (true) {
                      switch (r.n) {
                        case 0:
                          r.n = 1;
                          return fetch(e);
                        case 1:
                          i = r.v;
                          m = Uint8Array;
                          r.n = 2;
                          return i.arrayBuffer();
                        case 2:
                          f = r.v;
                          s = new m(f);
                          a = Qe(s);
                          h = a.buffer;
                          if (a.byteOffset !== 0) {
                            new Uint8Array(h).copyWithin(0, a.byteOffset, a.byteOffset + a.byteLength);
                          }
                          l = (0, A.V_)(e, h);
                          d = l.compressed;
                          c = l.kvData;
                          if (d && d.length === 1) {
                            r.n = 3;
                            break;
                          }
                          throw new Error("[CompressedTextureSupport] Could not load " + e);
                        case 3:
                          (u = new o.t5M(d[0], Object.assign({
                            mipmap: o.E8U.OFF,
                            alphaMode: o.Gkr.PMA,
                            resolution: o.WpD.getResolutionOfUrl(e)
                          }, t.data))).ktxKeyValueData = c;
                          p = new o.gPd(u);
                          u.on("dispose", function () {
                            delete n.promiseCache[e];
                          });
                          return r.a(2, p);
                      }
                    }
                  }, r);
                }), function () {
                  var e = this;
                  var t = arguments;
                  return new Promise(function (n, i) {
                    var s = r.apply(e, t);
                    function a(e) {
                      nt(s, n, i, a, o, "next", e);
                    }
                    function o(e) {
                      nt(s, n, i, a, o, "throw", e);
                    }
                    a(undefined);
                  });
                })();
                var r;
              },
              unload: function (e) {
                e.destroy(true);
              }
            };
            function lt(e, t) {
              at[e] = t;
            }
            function dt(e, t) {
              ot[e] = t;
            }
            function ct(e) {
              if (rt && at[e]) {
                return at[e];
              } else if (it && ot[e]) {
                return ot[e];
              } else {
                return e;
              }
            }
            function ut(e) {
              var t = e.baseTexture.resource;
              if (t instanceof A.Jn && t.levels === 1) {
                var n = t.width;
                var r = t.height;
                var i = n + 3 & -4;
                var s = r + 3 & -4;
                if (i !== n || s !== r) {
                  t._width = i;
                  t._height = s;
                  e.baseTexture.setRealSize(i, s);
                  e.frame = new o.M_G(0, 0, n, r);
                }
              }
            }
            var pt = n(35057);
            var mt = n(62828);
            function ft() {
              var e;
              var t;
              var n = typeof Symbol == "function" ? Symbol : {};
              var r = n.iterator || "@@iterator";
              var i = n.toStringTag || "@@toStringTag";
              function s(n, r, i, s) {
                var h = r && r.prototype instanceof o ? r : o;
                var l = Object.create(h.prototype);
                _t(l, "_invoke", function (n, r, i) {
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
              var d = [][r] ? t(t([][r]())) : (_t(t = {}, r, function () {
                return this;
              }), t);
              var c = l.prototype = o.prototype = Object.create(d);
              function u(e) {
                if (Object.setPrototypeOf) {
                  Object.setPrototypeOf(e, l);
                } else {
                  e.__proto__ = l;
                  _t(e, i, "GeneratorFunction");
                }
                e.prototype = Object.create(c);
                return e;
              }
              h.prototype = l;
              _t(c, "constructor", l);
              _t(l, "constructor", h);
              h.displayName = "GeneratorFunction";
              _t(l, i, "GeneratorFunction");
              _t(c);
              _t(c, i, "Generator");
              _t(c, r, function () {
                return this;
              });
              _t(c, "toString", function () {
                return "[object Generator]";
              });
              return (ft = function () {
                return {
                  w: s,
                  m: u
                };
              })();
            }
            function _t(e, t, n, r) {
              var i = Object.defineProperty;
              try {
                i({}, "", {});
              } catch (e) {
                i = 0;
              }
              _t = function (e, t, n, r) {
                function s(t, n) {
                  _t(e, t, function (e) {
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
              _t(e, t, n, r);
            }
            function vt(e, t, n, r, i, s, a) {
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
            function yt(e) {
              return function () {
                var t = this;
                var n = arguments;
                return new Promise(function (r, i) {
                  var s = e.apply(t, n);
                  function a(e) {
                    vt(s, r, i, a, o, "next", e);
                  }
                  function o(e) {
                    vt(s, r, i, a, o, "throw", e);
                  }
                  a(undefined);
                });
              };
            }
            var gt = function () {
              function e() {
                this.onProgress = new h.Signal();
              }
              var t = e.prototype;
              t.init = function (e, t = {}) {
                window.createImageBitmap = null;
                if (!e) {
                  throw new Error("FIDO Resource manager expects a manifest");
                }
                this.basePath = t.basePath || window.ASSET_URL;
                this.renderer = t.renderer;
                this.manifest = e;
                this.version = t.version || "default";
                this.upload = t.upload;
                (function (e) {
                  if (!e || !e.gl) {
                    return false;
                  }
                  function t() {
                    rt = e.gl.getExtension("EXT_texture_compression_bptc");
                    e.context.extensions.bptc = rt;
                    it = e.gl.getExtension("WEBGL_compressed_texture_astc");
                  }
                  t();
                  e.runners.contextChange.add({
                    contextChange: t
                  });
                  if (rt || it) {
                    (function () {
                      if (!st) {
                        st = true;
                        o.XOh.add(ce, ht);
                        A.FU[36492] = 1;
                        A.FU[36493] = 1;
                        var e = A.Jn._formatToExtension;
                        A.Jn._formatToExtension = function (t) {
                          if (t >= 36492 && t <= 36495) {
                            return "bptc";
                          } else if (t >= 37808 && t <= 37821 || t >= 37840 && t <= 37853) {
                            return "astc";
                          } else {
                            return e(t);
                          }
                        };
                      }
                    })();
                  }
                })(this.renderer);
              };
              t.load = function () {
                var e = yt(ft().m(function e(t, n) {
                  var r;
                  var i;
                  var s;
                  var a;
                  var h;
                  var l;
                  var d;
                  var c;
                  var u;
                  var p;
                  var m;
                  var f;
                  var _;
                  var v;
                  var y;
                  var g;
                  var w;
                  var x;
                  var b;
                  var T;
                  var A;
                  var C = this;
                  return ft().w(function (e) {
                    while (true) {
                      switch (e.p = e.n) {
                        case 0:
                          if (n === undefined) {
                            n = {};
                          }
                          r = this.getManifestFromIds(t);
                          i = this.version;
                          s = [];
                          a = [];
                          h = 0;
                          for (; h < r.length; h++) {
                            if (!(l = r[h]).loaded) {
                              for (d in l) {
                                c = l[d];
                                if (d !== "audio") {
                                  for (u in c) {
                                    m = false;
                                    if (d === "misc" || d === "fonts") {
                                      m = true;
                                    }
                                    if ((p = c)[u].tags !== undefined && p[u].tags["mobile-only"] && !pt.w.mobileControls) {
                                      m = true;
                                      delete p[u];
                                    }
                                    if (!m) {
                                      Ce.add(u, this.basePath + ct(p[u][i] || p[u].default));
                                      s.push(u);
                                      if (d === "animate") {
                                        a.push(u);
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          e.p = 1;
                          e.n = 2;
                          return Ce.load(s, function (e) {
                            C.onProgress.dispatch(e * 100);
                          });
                        case 2:
                          f = e.v;
                          e.n = 5;
                          break;
                        case 3:
                          e.p = 3;
                          e.v;
                          if (n.reloadOnError !== false) {
                            e.n = 4;
                            break;
                          }
                          throw new Error("ResourceManager: failed to load assets");
                        case 4:
                          if (!window.resourceManagerPendingReload) {
                            window.resourceManagerPendingReload = true;
                            setTimeout(function () {
                              window.location.reload();
                            }, 2000);
                          }
                          e.n = 5;
                          return new Promise(function () {});
                        case 5:
                          this.pinFrameOrigSizes(f);
                          for (_ in f) {
                            if (f[_] instanceof o.gPd) {
                              ut(f[_]);
                            }
                          }
                          for (v = 0; v < a.length; v++) {
                            y = a[v];
                            mt.A.add(y, f[y]);
                          }
                          for (g in f) {
                            if ((w = f[g]) instanceof o.zo6 && !o.WpD.BaseTextureCache[g]) {
                              x = new o.gPd(w.baseTexture);
                              o.t5M.addToCache(w.baseTexture, g);
                              o.gPd.addToCache(x, g);
                              if (b = w.baseTexture.resource && w.baseTexture.resource.src) {
                                o.t5M.addToCache(w.baseTexture, b);
                                o.gPd.addToCache(x, b);
                              }
                            }
                          }
                          T = 0;
                        case 6:
                          if (!(T < r.length)) {
                            e.n = 9;
                            break;
                          }
                          (A = r[T]).loaded = true;
                          if (!this.upload) {
                            e.n = 8;
                            break;
                          }
                          if (A.uploaded) {
                            e.n = 8;
                            break;
                          }
                          e.n = 7;
                          return Se(A.image, this.renderer);
                        case 7:
                          A.uploaded = true;
                        case 8:
                          T++;
                          e.n = 6;
                          break;
                        case 9:
                          return e.a(2);
                      }
                    }
                  }, e, this, [[1, 3]]);
                }));
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              }();
              t.pinFrameOrigSizes = function (e) {
                function t() {
                  var t = e[n];
                  if (!(t instanceof o.zo6) || !t.data || !t.data.frames || !t.textures) {
                    return 1;
                  }
                  var r = t.data.frames;
                  for (var i in r) {
                    var s = r[i].origSize;
                    var a = t.textures[i];
                    if (s && a) {
                      if (a.orig.width !== s.w || a.orig.height !== s.h) {
                        a.orig.width = s.w;
                        a.orig.height = s.h;
                        if (a.trim) {
                          a.trim.width = s.w;
                          a.trim.height = s.h;
                        }
                        a.updateUvs();
                      }
                    }
                  }
                }
                for (var n in e) {
                  t();
                }
              };
              t.unload = function () {
                var e = yt(ft().m(function e(t) {
                  var n;
                  var r;
                  var i;
                  return ft().w(function (e) {
                    while (true) {
                      switch (e.n) {
                        case 0:
                          n = this.getManifestFromIds(t);
                          r = 0;
                        case 1:
                          if (!(r < n.length)) {
                            e.n = 4;
                            break;
                          }
                          if (!(i = n[r]).uploaded) {
                            e.n = 3;
                            break;
                          }
                          e.n = 2;
                          return Ee(i.image, this.renderer);
                        case 2:
                          i.uploaded = false;
                        case 3:
                          r++;
                          e.n = 1;
                          break;
                        case 4:
                          return e.a(2);
                      }
                    }
                  }, e, this);
                }));
                return function (t) {
                  return e.apply(this, arguments);
                };
              }();
              t.manifestsAreLoaded = function (e) {
                return this.getManifestFromIds(e).every(function (e) {
                  return e.loaded;
                });
              };
              t.hasManifestFor = function (e) {
                return !!this.manifest[e];
              };
              t.getManifestFromIds = function (e) {
                var t = this;
                if (!(e instanceof Array)) {
                  e = [e];
                }
                return (e = Array.from(new Set(e))).map(function (e) {
                  if (typeof e == "string") {
                    if (!t.manifest[e]) {
                      throw new Error(e + " does not exist in manifest");
                    }
                    return t.manifest[e];
                  }
                  return e;
                });
              };
              return e;
            }();
            function wt() {
              var e;
              var t;
              var n = typeof Symbol == "function" ? Symbol : {};
              var r = n.iterator || "@@iterator";
              var i = n.toStringTag || "@@toStringTag";
              function s(n, r, i, s) {
                var h = r && r.prototype instanceof o ? r : o;
                var l = Object.create(h.prototype);
                xt(l, "_invoke", function (n, r, i) {
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
              var d = [][r] ? t(t([][r]())) : (xt(t = {}, r, function () {
                return this;
              }), t);
              var c = l.prototype = o.prototype = Object.create(d);
              function u(e) {
                if (Object.setPrototypeOf) {
                  Object.setPrototypeOf(e, l);
                } else {
                  e.__proto__ = l;
                  xt(e, i, "GeneratorFunction");
                }
                e.prototype = Object.create(c);
                return e;
              }
              h.prototype = l;
              xt(c, "constructor", l);
              xt(l, "constructor", h);
              h.displayName = "GeneratorFunction";
              xt(l, i, "GeneratorFunction");
              xt(c);
              xt(c, i, "Generator");
              xt(c, r, function () {
                return this;
              });
              xt(c, "toString", function () {
                return "[object Generator]";
              });
              return (wt = function () {
                return {
                  w: s,
                  m: u
                };
              })();
            }
            function xt(e, t, n, r) {
              var i = Object.defineProperty;
              try {
                i({}, "", {});
              } catch (e) {
                i = 0;
              }
              xt = function (e, t, n, r) {
                function s(t, n) {
                  xt(e, t, function (e) {
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
              xt(e, t, n, r);
            }
            function bt(e, t, n, r, i, s, a) {
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
            function Tt(e) {
              return function () {
                var t = this;
                var n = arguments;
                return new Promise(function (r, i) {
                  var s = e.apply(t, n);
                  function a(e) {
                    bt(s, r, i, a, o, "next", e);
                  }
                  function o(e) {
                    bt(s, r, i, a, o, "throw", e);
                  }
                  a(undefined);
                });
              };
            }
            function At(e) {
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
            gt.instance = new gt();
            n(45700);
            n(89572);
            n(2892);
            n(28706);
            var Ct = function () {
              function e(e) {
                this.screens = {};
                this.transitionMap = {};
                this.container = e.container || new o.mcf();
                this.loadingScreen = e.loadingScreen || new y();
                this.defaultTransition = new d();
                this.screenLoaded = new h.Signal();
                this.history = [];
                this.nextScreen = null;
                var t = new o.A1g();
                t.beginFill(4032711).drawRect(0, 0, 900, 500);
                this.container.addChild(t);
              }
              var t;
              var n;
              var r = e.prototype;
              r.registerTransition = function (e, t, n = "all", r = false) {
                e.transitionOutComplete.add(this._onTransitionOutComplete, this);
                e.transitionInStart.add(this._onTransitionInStart, this);
                e.transitionComplete.add(this._onTransitionComplete, this);
                var i = this.transitionMap[t];
                i ||= this.transitionMap[t] = {};
                i[n] = e;
                if (r) {
                  this.registerTransition(e, n, t);
                }
              };
              r._getTransitionTo = function (e) {
                var t = this;
                function n(e, n) {
                  return !!t.transitionMap[e] && (t.transitionMap[e][n] || t.transitionMap[e].all);
                }
                if (this.currentScreen) {
                  return n(this.currentScreen.id, e) || n("all", e) || this.defaultTransition;
                } else {
                  return this.getScreenById(e).transition || this.defaultTransition;
                }
              };
              r.getScreenById = function (e) {
                var t = this.screens[e];
                if (t) {
                  return t;
                }
                throw new Error("screen not found with id : " + e);
              };
              r.addScreen = function (e, t) {
                this.screens[t] = e;
                e.id = t;
                e.firstRun = true;
                e.screenManager = this;
                return e;
              };
              r.goBack = function () {
                this.history.pop();
                var e = this.history.pop();
                if (e) {
                  this.gotoScreen(e);
                }
              };
              r.getScreenId = function (e) {
                for (var t in this.screens) {
                  if (this.screens[t] === e) {
                    return t;
                  }
                }
                return null;
              };
              r.gotoScreen = function (e, t = {}, n = false, r = false, i = false) {
                if (typeof e == "string") {
                  e = this.getScreenById(e);
                }
                if ((r || this.currentScreen !== e) && (r || e !== this.nextScreen)) {
                  this.targetScreen = e;
                  if (this.nextScreen) {
                    this.targetScreen._tmpParams = {
                      params: t,
                      instant: n,
                      forceRefresh: r,
                      screenIsPrepared: i
                    };
                  } else {
                    var s = St(e, t);
                    if (gt.instance.manifestsAreLoaded(s)) {
                      if (e.firstRun) {
                        if (e.init) {
                          e.init();
                        }
                        e.firstRun = false;
                      }
                      if (i || !Ot(e, "asyncPrepare")) {
                        if (e != this.loadingScreen) {
                          this.history.push(e);
                        }
                        this.nextScreen = e;
                        Et(this.nextScreen, "beforeShow", t);
                        this.transition = null;
                        if (!n) {
                          this.transition = this._getTransitionTo(this.nextScreen.id);
                        }
                        if (this.currentScreen) {
                          Et(this.currentScreen, "onHide");
                        }
                        if (this.transition) {
                          Et(this.transition, "resize", this.w, this.h);
                          this.transition.start(this.container, this.currentScreen, this.nextScreen);
                        } else {
                          this._instantTransition();
                        }
                      } else {
                        this._prepareScreen(e, t, n, r);
                      }
                    } else {
                      this._loadScreen(e, t, n, r);
                    }
                  }
                }
              };
              r._loadScreen = function () {
                var e = Tt(wt().m(function e(t, n, r, i) {
                  return wt().w(function (e) {
                    while (true) {
                      switch (e.n) {
                        case 0:
                          e.n = 1;
                          return this._loadAssets(St(t, n));
                        case 1:
                          if (t) {
                            this.gotoScreen(t, n, r, i);
                          }
                        case 2:
                          return e.a(2);
                      }
                    }
                  }, e, this);
                }));
                return function (t, n, r, i) {
                  return e.apply(this, arguments);
                };
              }();
              r._loadAssets = function () {
                var e = Tt(wt().m(function e(t) {
                  return wt().w(function (e) {
                    while (true) {
                      switch (e.n) {
                        case 0:
                          this.gotoScreen(this.loadingScreen);
                          gt.instance.onProgress.add(this.loadingScreen.updateProgress, this.loadingScreen);
                          e.n = 1;
                          return gt.instance.load(t);
                        case 1:
                          gt.instance.onProgress.remove(this.loadingScreen.updateProgress, this.loadingScreen);
                        case 2:
                          return e.a(2);
                      }
                    }
                  }, e, this);
                }));
                return function (t) {
                  return e.apply(this, arguments);
                };
              }();
              r._prepareScreen = function () {
                var e = Tt(wt().m(function e(t, n, r, i) {
                  return wt().w(function (e) {
                    while (true) {
                      switch (e.n) {
                        case 0:
                          this.gotoScreen(this.loadingScreen);
                          this.loadingScreen.startWaiting();
                          e.n = 1;
                          return t.asyncPrepare(n);
                        case 1:
                          this.gotoScreen(t, n, r, i, true);
                        case 2:
                          return e.a(2);
                      }
                    }
                  }, e, this);
                }));
                return function (t, n, r, i) {
                  return e.apply(this, arguments);
                };
              }();
              r._instantTransition = function () {
                this._onTransitionOutComplete();
                this._onTransitionInStart();
                this._onTransitionComplete();
              };
              r._onTransitionOutComplete = function () {
                if (this.currentScreen) {
                  Et(this.currentScreen, "onHidden");
                  this.container.removeChild(this.currentScreen);
                }
              };
              r._onTransitionInStart = function () {
                this.blockInteraction(true);
                Et(this.nextScreen, "resize", this.w, this.h);
                Et(this.nextScreen, "onShow");
                if (this.nextScreen.parent !== this.container) {
                  this.container.addChild(this.nextScreen);
                }
              };
              r._onTransitionComplete = function () {
                this.currentScreen = this.nextScreen;
                this.nextScreen = null;
                if (this.currentScreen != this.targetScreen) {
                  var e = this.targetScreen._tmpParams;
                  this.gotoScreen(this.targetScreen, e.params, e.instant, e.forceRefresh, e.screenIsPrepared);
                  delete this.targetScreen._tmpParams;
                } else {
                  Et(this.currentScreen, "onShown");
                }
                this.blockInteraction(false);
              };
              r.resize = function (e, t) {
                this.w = e;
                this.h = t;
                Et(this.transition, "resize", e, t);
                Et(this.currentScreen, "resize", e, t);
                Et(this.nextScreen, "resize", e, t);
              };
              r.blockInteraction = function (e) {
                this.container.interactive = !e;
                this.container.interactiveChildren = !e;
              };
              t = e;
              if (n = [{
                key: "loadingScreen",
                get: function () {
                  return this._loadingScreen;
                },
                set: function (e) {
                  this._loadingScreen = e;
                  this.addScreen(this._loadingScreen, "loading");
                }
              }, {
                key: "defaultTransition",
                get: function () {
                  if (this.transitionMap.all) {
                    return this.transitionMap.all.all;
                  } else {
                    return null;
                  }
                },
                set: function (e) {
                  if (e) {
                    this.registerTransition(e, "all", "all");
                  }
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
                    Object.defineProperty(e, At(r.key), r);
                  }
                })(t.prototype, n);
              }
              Object.defineProperty(t, "prototype", {
                writable: false
              });
              return t;
            }();
            function St(e, t) {
              var n = [];
              if (t && t.manifests) {
                n = n.concat(t.manifests);
              }
              if (e.manifests) {
                n = n.concat(e.manifests);
              }
              return n;
            }
            function Et(e, t) {
              if (Ot(e, t)) {
                for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) {
                  r[i - 2] = arguments[i];
                }
                e[t].apply(e, r);
              }
            }
            function Ot(e, t) {
              return e && e[t] && typeof e[t] == "function";
            }
            var kt = n(41616);
            function Pt() {
              var e;
              var t;
              var n = typeof Symbol == "function" ? Symbol : {};
              var r = n.iterator || "@@iterator";
              var i = n.toStringTag || "@@toStringTag";
              function s(n, r, i, s) {
                var h = r && r.prototype instanceof o ? r : o;
                var l = Object.create(h.prototype);
                Mt(l, "_invoke", function (n, r, i) {
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
              var d = [][r] ? t(t([][r]())) : (Mt(t = {}, r, function () {
                return this;
              }), t);
              var c = l.prototype = o.prototype = Object.create(d);
              function u(e) {
                if (Object.setPrototypeOf) {
                  Object.setPrototypeOf(e, l);
                } else {
                  e.__proto__ = l;
                  Mt(e, i, "GeneratorFunction");
                }
                e.prototype = Object.create(c);
                return e;
              }
              h.prototype = l;
              Mt(c, "constructor", l);
              Mt(l, "constructor", h);
              h.displayName = "GeneratorFunction";
              Mt(l, i, "GeneratorFunction");
              Mt(c);
              Mt(c, i, "Generator");
              Mt(c, r, function () {
                return this;
              });
              Mt(c, "toString", function () {
                return "[object Generator]";
              });
              return (Pt = function () {
                return {
                  w: s,
                  m: u
                };
              })();
            }
            function Mt(e, t, n, r) {
              var i = Object.defineProperty;
              try {
                i({}, "", {});
              } catch (e) {
                i = 0;
              }
              Mt = function (e, t, n, r) {
                function s(t, n) {
                  Mt(e, t, function (e) {
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
              Mt(e, t, n, r);
            }
            function Rt(e, t, n) {
              if (Lt()) {
                return Reflect.construct.apply(null, arguments);
              }
              var r = [null];
              r.push.apply(r, t);
              var i = new (e.bind.apply(e, r))();
              if (n) {
                It(i, n.prototype);
              }
              return i;
            }
            function It(e, t) {
              It = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return It(e, t);
            }
            function Lt() {
              try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
              } catch (e) {}
              return (Lt = function () {
                return !!e;
              })();
            }
            function jt(e, t, n, r, i, s, a) {
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
            o.W0u.PREFER_ENV = o.Kmu.WEBGL2;
            if (c.instance.android) {
              o.W0u.PRECISION_FRAGMENT = o.PkU.LOW;
              o.W0u.PRECISION_VERTEX = o.PkU.HIGH;
            } else if (c.instance.iOS) {
              o.W0u.PRECISION_FRAGMENT = o.PkU.HIGH;
              o.W0u.PRECISION_VERTEX = o.PkU.HIGH;
            }
            o.W0u.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = false;
            var Bt = function (e) {
              e[e.DEFAULT = 0] = "DEFAULT";
              e[e.CSS_RESIZE_PRESERVE_RATIO = 1] = "CSS_RESIZE_PRESERVE_RATIO";
              e[e.CSS_RESIZE = 2] = "CSS_RESIZE";
              return e;
            }(Bt || {});
            var Dt = function (e) {
              e[e.LANDSCAPE = 0] = "LANDSCAPE";
              e[e.PORTRAIT = 1] = "PORTRAIT";
              e[e.BOTH = 2] = "BOTH";
              return e;
            }(Dt || {});
            var Ft = function () {
              function e(e) {
                var t = {
                  width: 800,
                  height: 600,
                  transparent: false,
                  backgroundColor: 4032711,
                  resizeMode: Bt.DEFAULT,
                  orientationMode: Dt.LANDSCAPE,
                  loadingScreenClass: y,
                  config: null,
                  screenManagerOptions: {
                    defaultTransition: new d()
                  }
                };
                e = e || t;
                this.options = Object.assign({}, t, e);
                this.setupPixi();
                u.R.instance.start();
                u.R.instance.add(this.update, this);
                this.resourceManager = gt.instance;
                if (e.manifest) {
                  var n = e.version || "default";
                  var r = !window.HW_SETTINGS.disableTextureUpload && e.upload;
                  if (o.WpD.isMobile.any) {
                    r = false;
                  }
                  this.resourceManager.init(e.manifest, {
                    renderer: this.renderer,
                    basePath: window.ASSET_URL,
                    version: n,
                    upload: r
                  });
                }
                this.screenManager = new Ct(this.options.screenManagerOptions);
                this.stage.addChild(this.screenManager.container);
              }
              var t = e.prototype;
              t.setupPixi = function () {
                var e = this.options;
                var t = e.antialias;
                if (t === undefined) {
                  t = c.instance.desktop;
                }
                this.renderer = new o.A49({
                  antialias: t,
                  resolution: 1,
                  backgroundColor: e.backgroundColor,
                  useContextAlpha: false,
                  backgroundAlpha: 1,
                  width: e.width,
                  height: e.height
                });
                this.renderer.clearBeforeRender = false;
                this.renderer.plugins.accessibility.destroy();
                delete this.renderer.plugins.accessibility;
                this.view = this.renderer.view;
                this.stage = new o.mcf();
                this.view.style.position = "absolute";
                this.view.addEventListener("mousedown", function () {
                  window.focus();
                }, true);
              };
              t.update = function (e) {
                if (!c.instance.iOS || e > 0.8) {
                  if (!kt.e.shouldRender()) {
                    return;
                  }
                  this.renderer.render(this.stage);
                }
              };
              t.startup = function () {
                var e;
                e = Pt().m(function e() {
                  var t;
                  var n;
                  var r;
                  return Pt().w(function (e) {
                    while (true) {
                      switch (e.n) {
                        case 0:
                          if (this.options.loadingScreenClass) {
                            t = this.options.loadingScreenParams || [];
                            this.screenManager.loadingScreen = Rt(this.options.loadingScreenClass, t);
                          }
                          n = ["default"];
                          r = 1;
                          for (; r < 12; r++) {
                            n.push("character" + r);
                          }
                          n.push("backgrounds");
                          n.push("game");
                          n.push("game-ui");
                          n.push("character-shared");
                          e.n = 1;
                          return this.screenManager._loadAssets(n);
                        case 1:
                          this.onAssetsLoaded();
                        case 2:
                          return e.a(2);
                      }
                    }
                  }, e, this);
                });
                function t() {
                  var t = this;
                  var n = arguments;
                  return new Promise(function (r, i) {
                    var s = e.apply(t, n);
                    function a(e) {
                      jt(s, r, i, a, o, "next", e);
                    }
                    function o(e) {
                      jt(s, r, i, a, o, "throw", e);
                    }
                    a(undefined);
                  });
                }
                return function () {
                  return t.apply(this, arguments);
                };
              }();
              t.onAssetsLoaded = function () {};
              t.resize = function (e, t) {
                this.w = e;
                this.h = t;
                var n = 1;
                if (c.instance.isMobile) {
                  n = window.devicePixelRatio;
                }
                if (n > 2) {
                  n = 2;
                }
                var r = e / this.safeSize.width < t / this.safeSize.height ? e / this.safeSize.width : t / this.safeSize.height;
                var i = Math.min(this.maxSize.width * r, e);
                var s = Math.min(this.maxSize.height * r, t);
                this.renderer.resize(i * n | 0, s * n | 0);
                this.view.style.width = i + "px";
                this.view.style.height = s + "px";
                this.view.style.left = e / 2 - i / 2 + "px";
                this.view.style.top = t / 2 - s / 2 + "px";
                this.screenManager.resize(i / r, s / r);
                this.screenManager.container.scale.set(r * n);
              };
              return e;
            }();
            function Nt() {
              var e = document.createElement("canvas");
              try {
                e.getContext("webgl");
                this.supported = true;
              } catch (e) {}
              e.remove();
            }
          }
    });
})();
