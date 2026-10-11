(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        94196(e, t, n) {
            var r;
            (function () {
              "use strict";
        
              function i() {
                this.init();
              }
              i.prototype = {
                init: function () {
                  var e = this || s;
                  e._counter = 1000;
                  e._html5AudioPool = [];
                  e.html5PoolSize = 10;
                  e._codecs = {};
                  e._howls = [];
                  e._muted = false;
                  e._volume = 1;
                  e._canPlayEvent = "canplaythrough";
                  e._navigator = typeof window != "undefined" && window.navigator ? window.navigator : null;
                  e.masterGain = null;
                  e.noAudio = false;
                  e.usingWebAudio = true;
                  e.autoSuspend = true;
                  e.ctx = null;
                  e.autoUnlock = true;
                  e._setup();
                  return e;
                },
                volume: function (e) {
                  var t = this || s;
                  e = parseFloat(e);
                  if (!t.ctx) {
                    p();
                  }
                  if (e !== undefined && e >= 0 && e <= 1) {
                    t._volume = e;
                    if (t._muted) {
                      return t;
                    }
                    if (t.usingWebAudio) {
                      t.masterGain.gain.setValueAtTime(e, s.ctx.currentTime);
                    }
                    for (var n = 0; n < t._howls.length; n++) {
                      if (!t._howls[n]._webAudio) {
                        for (var r = t._howls[n]._getSoundIds(), i = 0; i < r.length; i++) {
                          var a = t._howls[n]._soundById(r[i]);
                          if (a && a._node) {
                            a._node.volume = a._volume * e;
                          }
                        }
                      }
                    }
                    return t;
                  }
                  return t._volume;
                },
                mute: function (e) {
                  var t = this || s;
                  if (!t.ctx) {
                    p();
                  }
                  t._muted = e;
                  if (t.usingWebAudio) {
                    t.masterGain.gain.setValueAtTime(e ? 0 : t._volume, s.ctx.currentTime);
                  }
                  for (var n = 0; n < t._howls.length; n++) {
                    if (!t._howls[n]._webAudio) {
                      for (var r = t._howls[n]._getSoundIds(), i = 0; i < r.length; i++) {
                        var a = t._howls[n]._soundById(r[i]);
                        if (a && a._node) {
                          a._node.muted = !!e || a._muted;
                        }
                      }
                    }
                  }
                  return t;
                },
                stop: function () {
                  for (var e = this || s, t = 0; t < e._howls.length; t++) {
                    e._howls[t].stop();
                  }
                  return e;
                },
                unload: function () {
                  var e = this || s;
                  for (var t = e._howls.length - 1; t >= 0; t--) {
                    e._howls[t].unload();
                  }
                  if (e.usingWebAudio && e.ctx && e.ctx.close !== undefined) {
                    e.ctx.close();
                    e.ctx = null;
                    p();
                  }
                  return e;
                },
                codecs: function (e) {
                  return (this || s)._codecs[e.replace(/^x-/, "")];
                },
                _setup: function () {
                  var e = this || s;
                  e.state = e.ctx && e.ctx.state || "suspended";
                  e._autoSuspend();
                  if (!e.usingWebAudio) {
                    if (typeof Audio != "undefined") {
                      try {
                        if (new Audio().oncanplaythrough === undefined) {
                          e._canPlayEvent = "canplay";
                        }
                      } catch (t) {
                        e.noAudio = true;
                      }
                    } else {
                      e.noAudio = true;
                    }
                  }
                  try {
                    if (new Audio().muted) {
                      e.noAudio = true;
                    }
                  } catch (e) {}
                  if (!e.noAudio) {
                    e._setupCodecs();
                  }
                  return e;
                },
                _setupCodecs: function () {
                  var e = this || s;
                  var t = null;
                  try {
                    t = typeof Audio != "undefined" ? new Audio() : null;
                  } catch (t) {
                    return e;
                  }
                  if (!t || typeof t.canPlayType != "function") {
                    return e;
                  }
                  var n = t.canPlayType("audio/mpeg;").replace(/^no$/, "");
                  var r = e._navigator ? e._navigator.userAgent : "";
                  var i = r.match(/OPR\/(\d+)/g);
                  var a = i && parseInt(i[0].split("/")[1], 10) < 33;
                  var o = r.indexOf("Safari") !== -1 && r.indexOf("Chrome") === -1;
                  var h = r.match(/Version\/(.*?) /);
                  var l = o && h && parseInt(h[1], 10) < 15;
                  e._codecs = {
                    mp3: !a && (!!n || !!t.canPlayType("audio/mp3;").replace(/^no$/, "")),
                    mpeg: !!n,
                    opus: !!t.canPlayType("audio/ogg; codecs=\"opus\"").replace(/^no$/, ""),
                    ogg: !!t.canPlayType("audio/ogg; codecs=\"vorbis\"").replace(/^no$/, ""),
                    oga: !!t.canPlayType("audio/ogg; codecs=\"vorbis\"").replace(/^no$/, ""),
                    wav: !!(t.canPlayType("audio/wav; codecs=\"1\"") || t.canPlayType("audio/wav")).replace(/^no$/, ""),
                    aac: !!t.canPlayType("audio/aac;").replace(/^no$/, ""),
                    caf: !!t.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                    m4a: !!(t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    m4b: !!(t.canPlayType("audio/x-m4b;") || t.canPlayType("audio/m4b;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    mp4: !!(t.canPlayType("audio/x-mp4;") || t.canPlayType("audio/mp4;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    weba: !l && !!t.canPlayType("audio/webm; codecs=\"vorbis\"").replace(/^no$/, ""),
                    webm: !l && !!t.canPlayType("audio/webm; codecs=\"vorbis\"").replace(/^no$/, ""),
                    dolby: !!t.canPlayType("audio/mp4; codecs=\"ec-3\"").replace(/^no$/, ""),
                    flac: !!(t.canPlayType("audio/x-flac;") || t.canPlayType("audio/flac;")).replace(/^no$/, "")
                  };
                  return e;
                },
                _unlockAudio: function () {
                  var e = this || s;
                  if (!e._audioUnlocked && e.ctx) {
                    e._audioUnlocked = false;
                    e.autoUnlock = false;
                    if (!e._mobileUnloaded && e.ctx.sampleRate !== 44100) {
                      e._mobileUnloaded = true;
                      e.unload();
                    }
                    e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050);
                    function t(n) {
                      while (e._html5AudioPool.length < e.html5PoolSize) {
                        try {
                          var r = new Audio();
                          r._unlocked = true;
                          e._releaseHtml5Audio(r);
                        } catch (n) {
                          e.noAudio = true;
                          break;
                        }
                      }
                      for (var i = 0; i < e._howls.length; i++) {
                        if (!e._howls[i]._webAudio) {
                          for (var s = e._howls[i]._getSoundIds(), a = 0; a < s.length; a++) {
                            var o = e._howls[i]._soundById(s[a]);
                            if (o && o._node && !o._node._unlocked) {
                              o._node._unlocked = true;
                              o._node.load();
                            }
                          }
                        }
                      }
                      e._autoResume();
                      var h = e.ctx.createBufferSource();
                      h.buffer = e._scratchBuffer;
                      h.connect(e.ctx.destination);
                      if (h.start === undefined) {
                        h.noteOn(0);
                      } else {
                        h.start(0);
                      }
                      if (typeof e.ctx.resume == "function") {
                        e.ctx.resume();
                      }
                      h.onended = function () {
                        h.disconnect(0);
                        e._audioUnlocked = true;
                        document.removeEventListener("touchstart", t, true);
                        document.removeEventListener("touchend", t, true);
                        document.removeEventListener("click", t, true);
                        document.removeEventListener("keydown", t, true);
                        for (var n = 0; n < e._howls.length; n++) {
                          e._howls[n]._emit("unlock");
                        }
                      };
                    }
                    document.addEventListener("touchstart", t, true);
                    document.addEventListener("touchend", t, true);
                    document.addEventListener("click", t, true);
                    document.addEventListener("keydown", t, true);
                    return e;
                  }
                },
                _obtainHtml5Audio: function () {
                  var e = this || s;
                  if (e._html5AudioPool.length) {
                    return e._html5AudioPool.pop();
                  }
                  var t = new Audio().play();
                  if (t && typeof Promise != "undefined" && (t instanceof Promise || typeof t.then == "function")) {
                    t.catch(function () {});
                  }
                  return new Audio();
                },
                _releaseHtml5Audio: function (e) {
                  var t = this || s;
                  if (e._unlocked) {
                    t._html5AudioPool.push(e);
                  }
                  return t;
                },
                _autoSuspend: function () {
                  var e = this;
                  if (e.autoSuspend && e.ctx && e.ctx.suspend !== undefined && s.usingWebAudio) {
                    for (var t = 0; t < e._howls.length; t++) {
                      if (e._howls[t]._webAudio) {
                        for (var n = 0; n < e._howls[t]._sounds.length; n++) {
                          if (!e._howls[t]._sounds[n]._paused) {
                            return e;
                          }
                        }
                      }
                    }
                    if (e._suspendTimer) {
                      clearTimeout(e._suspendTimer);
                    }
                    e._suspendTimer = setTimeout(function () {
                      if (e.autoSuspend) {
                        e._suspendTimer = null;
                        e.state = "suspending";
                        function t() {
                          e.state = "suspended";
                          if (e._resumeAfterSuspend) {
                            delete e._resumeAfterSuspend;
                            e._autoResume();
                          }
                        }
                        e.ctx.suspend().then(t, t);
                      }
                    }, 30000);
                    return e;
                  }
                },
                _autoResume: function () {
                  var e = this;
                  if (e.ctx && e.ctx.resume !== undefined && s.usingWebAudio) {
                    if (e.state === "running" && e.ctx.state !== "interrupted" && e._suspendTimer) {
                      clearTimeout(e._suspendTimer);
                      e._suspendTimer = null;
                    } else if (e.state === "suspended" || e.state === "running" && e.ctx.state === "interrupted") {
                      e.ctx.resume().then(function () {
                        e.state = "running";
                        for (var t = 0; t < e._howls.length; t++) {
                          e._howls[t]._emit("resume");
                        }
                      });
                      if (e._suspendTimer) {
                        clearTimeout(e._suspendTimer);
                        e._suspendTimer = null;
                      }
                    } else if (e.state === "suspending") {
                      e._resumeAfterSuspend = true;
                    }
                    return e;
                  }
                }
              };
              var s = new i();
              function a(e) {
                if (e.src && e.src.length !== 0) {
                  this.init(e);
                }
              }
              a.prototype = {
                init: function (e) {
                  var t = this;
                  if (!s.ctx) {
                    p();
                  }
                  t._autoplay = e.autoplay || false;
                  t._format = typeof e.format != "string" ? e.format : [e.format];
                  t._html5 = e.html5 || false;
                  t._muted = e.mute || false;
                  t._loop = e.loop || false;
                  t._pool = e.pool || 5;
                  t._preload = typeof e.preload != "boolean" && e.preload !== "metadata" || e.preload;
                  t._rate = e.rate || 1;
                  t._sprite = e.sprite || {};
                  t._src = typeof e.src != "string" ? e.src : [e.src];
                  t._volume = e.volume !== undefined ? e.volume : 1;
                  t._xhr = {
                    method: e.xhr && e.xhr.method ? e.xhr.method : "GET",
                    headers: e.xhr && e.xhr.headers ? e.xhr.headers : null,
                    withCredentials: !!e.xhr && !!e.xhr.withCredentials && e.xhr.withCredentials
                  };
                  t._duration = 0;
                  t._state = "unloaded";
                  t._sounds = [];
                  t._endTimers = {};
                  t._queue = [];
                  t._playLock = false;
                  t._onend = e.onend ? [{
                    fn: e.onend
                  }] : [];
                  t._onfade = e.onfade ? [{
                    fn: e.onfade
                  }] : [];
                  t._onload = e.onload ? [{
                    fn: e.onload
                  }] : [];
                  t._onloaderror = e.onloaderror ? [{
                    fn: e.onloaderror
                  }] : [];
                  t._onplayerror = e.onplayerror ? [{
                    fn: e.onplayerror
                  }] : [];
                  t._onpause = e.onpause ? [{
                    fn: e.onpause
                  }] : [];
                  t._onplay = e.onplay ? [{
                    fn: e.onplay
                  }] : [];
                  t._onstop = e.onstop ? [{
                    fn: e.onstop
                  }] : [];
                  t._onmute = e.onmute ? [{
                    fn: e.onmute
                  }] : [];
                  t._onvolume = e.onvolume ? [{
                    fn: e.onvolume
                  }] : [];
                  t._onrate = e.onrate ? [{
                    fn: e.onrate
                  }] : [];
                  t._onseek = e.onseek ? [{
                    fn: e.onseek
                  }] : [];
                  t._onunlock = e.onunlock ? [{
                    fn: e.onunlock
                  }] : [];
                  t._onresume = [];
                  t._webAudio = s.usingWebAudio && !t._html5;
                  if (s.ctx !== undefined && s.ctx && s.autoUnlock) {
                    s._unlockAudio();
                  }
                  s._howls.push(t);
                  if (t._autoplay) {
                    t._queue.push({
                      event: "play",
                      action: function () {
                        t.play();
                      }
                    });
                  }
                  if (t._preload && t._preload !== "none") {
                    t.load();
                  }
                  return t;
                },
                load: function () {
                  var e = this;
                  var t = null;
                  if (s.noAudio) {
                    e._emit("loaderror", null, "No audio support.");
                  } else {
                    if (typeof e._src == "string") {
                      e._src = [e._src];
                    }
                    for (var n = 0; n < e._src.length; n++) {
                      var r;
                      var i;
                      if (e._format && e._format[n]) {
                        r = e._format[n];
                      } else {
                        if (typeof (i = e._src[n]) != "string") {
                          e._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                          continue;
                        }
                        if (!(r = /^data:audio\/([^;,]+);/i.exec(i))) {
                          r = /\.([^.]+)$/.exec(i.split("?", 1)[0]);
                        }
                        r &&= r[1].toLowerCase();
                      }
                      if (r && s.codecs(r)) {
                        t = e._src[n];
                        break;
                      }
                    }
                    if (t) {
                      e._src = t;
                      e._state = "loading";
                      if (window.location.protocol === "https:" && t.slice(0, 5) === "http:") {
                        e._html5 = true;
                        e._webAudio = false;
                      }
                      new o(e);
                      if (e._webAudio) {
                        l(e);
                      }
                      return e;
                    }
                    e._emit("loaderror", null, "No codec support for selected audio sources.");
                  }
                },
                play: function (e, t) {
                  var n = this;
                  var r = null;
                  if (typeof e == "number") {
                    r = e;
                    e = null;
                  } else {
                    if (typeof e == "string" && n._state === "loaded" && !n._sprite[e]) {
                      return null;
                    }
                    if (e === undefined && (e = "__default", !n._playLock)) {
                      var i = 0;
                      for (var a = 0; a < n._sounds.length; a++) {
                        if (n._sounds[a]._paused && !n._sounds[a]._ended) {
                          i++;
                          r = n._sounds[a]._id;
                        }
                      }
                      if (i === 1) {
                        e = null;
                      } else {
                        r = null;
                      }
                    }
                  }
                  var o = r ? n._soundById(r) : n._inactiveSound();
                  if (!o) {
                    return null;
                  }
                  if (r && !e) {
                    e = o._sprite || "__default";
                  }
                  if (n._state !== "loaded") {
                    o._sprite = e;
                    o._ended = false;
                    var h = o._id;
                    n._queue.push({
                      event: "play",
                      action: function () {
                        n.play(h);
                      }
                    });
                    return h;
                  }
                  if (r && !o._paused) {
                    if (!t) {
                      n._loadQueue("play");
                    }
                    return o._id;
                  }
                  if (n._webAudio) {
                    s._autoResume();
                  }
                  var l = Math.max(0, o._seek > 0 ? o._seek : n._sprite[e][0] / 1000);
                  var d = Math.max(0, (n._sprite[e][0] + n._sprite[e][1]) / 1000 - l);
                  var c = d * 1000 / Math.abs(o._rate);
                  var u = n._sprite[e][0] / 1000;
                  var p = (n._sprite[e][0] + n._sprite[e][1]) / 1000;
                  o._sprite = e;
                  o._ended = false;
                  function m() {
                    o._paused = false;
                    o._seek = l;
                    o._start = u;
                    o._stop = p;
                    o._loop = !!o._loop || !!n._sprite[e][2];
                  }
                  if (!(l >= p)) {
                    var f = o._node;
                    if (n._webAudio) {
                      function _() {
                        n._playLock = false;
                        m();
                        n._refreshBuffer(o);
                        var e = o._muted || n._muted ? 0 : o._volume;
                        f.gain.setValueAtTime(e, s.ctx.currentTime);
                        o._playStart = s.ctx.currentTime;
                        if (f.bufferSource.start === undefined) {
                          if (o._loop) {
                            f.bufferSource.noteGrainOn(0, l, 86400);
                          } else {
                            f.bufferSource.noteGrainOn(0, l, d);
                          }
                        } else if (o._loop) {
                          f.bufferSource.start(0, l, 86400);
                        } else {
                          f.bufferSource.start(0, l, d);
                        }
                        if (c !== Infinity) {
                          n._endTimers[o._id] = setTimeout(n._ended.bind(n, o), c);
                        }
                        if (!t) {
                          setTimeout(function () {
                            n._emit("play", o._id);
                            n._loadQueue();
                          }, 0);
                        }
                      }
                      if (s.state === "running" && s.ctx.state !== "interrupted") {
                        _();
                      } else {
                        n._playLock = true;
                        n.once("resume", _);
                        n._clearTimer(o._id);
                      }
                    } else {
                      function v() {
                        f.currentTime = l;
                        f.muted = o._muted || n._muted || s._muted || f.muted;
                        f.volume = o._volume * s.volume();
                        f.playbackRate = o._rate;
                        try {
                          var r = f.play();
                          if (r && typeof Promise != "undefined" && (r instanceof Promise || typeof r.then == "function")) {
                            n._playLock = true;
                            m();
                            r.then(function () {
                              n._playLock = false;
                              f._unlocked = true;
                              if (t) {
                                n._loadQueue();
                              } else {
                                n._emit("play", o._id);
                              }
                            }).catch(function () {
                              n._playLock = false;
                              n._emit("playerror", o._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                              o._ended = true;
                              o._paused = true;
                            });
                          } else if (!t) {
                            n._playLock = false;
                            m();
                            n._emit("play", o._id);
                          }
                          f.playbackRate = o._rate;
                          if (f.paused) {
                            n._emit("playerror", o._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                            return;
                          }
                          if (e !== "__default" || o._loop) {
                            n._endTimers[o._id] = setTimeout(n._ended.bind(n, o), c);
                          } else {
                            n._endTimers[o._id] = function () {
                              n._ended(o);
                              f.removeEventListener("ended", n._endTimers[o._id], false);
                            };
                            f.addEventListener("ended", n._endTimers[o._id], false);
                          }
                        } catch (e) {
                          n._emit("playerror", o._id, e);
                        }
                      }
                      if (f.src === "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA") {
                        f.src = n._src;
                        f.load();
                      }
                      var y = window && window.ejecta || !f.readyState && s._navigator.isCocoonJS;
                      if (f.readyState >= 3 || y) {
                        v();
                      } else {
                        n._playLock = true;
                        n._state = "loading";
                        function g() {
                          n._state = "loaded";
                          v();
                          f.removeEventListener(s._canPlayEvent, g, false);
                        }
                        f.addEventListener(s._canPlayEvent, g, false);
                        n._clearTimer(o._id);
                      }
                    }
                    return o._id;
                  }
                  n._ended(o);
                },
                pause: function (e) {
                  var t = this;
                  if (t._state !== "loaded" || t._playLock) {
                    t._queue.push({
                      event: "pause",
                      action: function () {
                        t.pause(e);
                      }
                    });
                    return t;
                  }
                  for (var n = t._getSoundIds(e), r = 0; r < n.length; r++) {
                    t._clearTimer(n[r]);
                    var i = t._soundById(n[r]);
                    if (i && !i._paused && (i._seek = t.seek(n[r]), i._rateSeek = 0, i._paused = true, t._stopFade(n[r]), i._node)) {
                      if (t._webAudio) {
                        if (!i._node.bufferSource) {
                          continue;
                        }
                        if (i._node.bufferSource.stop === undefined) {
                          i._node.bufferSource.noteOff(0);
                        } else {
                          i._node.bufferSource.stop(0);
                        }
                        t._cleanBuffer(i._node);
                      } else if (!isNaN(i._node.duration) || i._node.duration === Infinity) {
                        i._node.pause();
                      }
                    }
                    if (!arguments[1]) {
                      t._emit("pause", i ? i._id : null);
                    }
                  }
                  return t;
                },
                stop: function (e, t) {
                  var n = this;
                  if (n._state !== "loaded" || n._playLock) {
                    n._queue.push({
                      event: "stop",
                      action: function () {
                        n.stop(e);
                      }
                    });
                    return n;
                  }
                  for (var r = n._getSoundIds(e), i = 0; i < r.length; i++) {
                    n._clearTimer(r[i]);
                    var s = n._soundById(r[i]);
                    if (s) {
                      s._seek = s._start || 0;
                      s._rateSeek = 0;
                      s._paused = true;
                      s._ended = true;
                      n._stopFade(r[i]);
                      if (s._node) {
                        if (n._webAudio) {
                          if (s._node.bufferSource) {
                            if (s._node.bufferSource.stop === undefined) {
                              s._node.bufferSource.noteOff(0);
                            } else {
                              s._node.bufferSource.stop(0);
                            }
                            n._cleanBuffer(s._node);
                          }
                        } else if (!isNaN(s._node.duration) || s._node.duration === Infinity) {
                          s._node.currentTime = s._start || 0;
                          s._node.pause();
                          if (s._node.duration === Infinity) {
                            n._clearSound(s._node);
                          }
                        }
                      }
                      if (!t) {
                        n._emit("stop", s._id);
                      }
                    }
                  }
                  return n;
                },
                mute: function (e, t) {
                  var n = this;
                  if (n._state !== "loaded" || n._playLock) {
                    n._queue.push({
                      event: "mute",
                      action: function () {
                        n.mute(e, t);
                      }
                    });
                    return n;
                  }
                  if (t === undefined) {
                    if (typeof e != "boolean") {
                      return n._muted;
                    }
                    n._muted = e;
                  }
                  for (var r = n._getSoundIds(t), i = 0; i < r.length; i++) {
                    var a = n._soundById(r[i]);
                    if (a) {
                      a._muted = e;
                      if (a._interval) {
                        n._stopFade(a._id);
                      }
                      if (n._webAudio && a._node) {
                        a._node.gain.setValueAtTime(e ? 0 : a._volume, s.ctx.currentTime);
                      } else if (a._node) {
                        a._node.muted = !!s._muted || e;
                      }
                      n._emit("mute", a._id);
                    }
                  }
                  return n;
                },
                volume: function () {
                  var e;
                  var t;
                  var n;
                  var r = this;
                  var i = arguments;
                  if (i.length === 0) {
                    return r._volume;
                  }
                  if (i.length === 1 || i.length === 2 && i[1] === undefined) {
                    if (r._getSoundIds().indexOf(i[0]) >= 0) {
                      t = parseInt(i[0], 10);
                    } else {
                      e = parseFloat(i[0]);
                    }
                  } else if (i.length >= 2) {
                    e = parseFloat(i[0]);
                    t = parseInt(i[1], 10);
                  }
                  if (e === undefined || !(e >= 0) || !(e <= 1)) {
                    if (n = t ? r._soundById(t) : r._sounds[0]) {
                      return n._volume;
                    } else {
                      return 0;
                    }
                  }
                  if (r._state !== "loaded" || r._playLock) {
                    r._queue.push({
                      event: "volume",
                      action: function () {
                        r.volume.apply(r, i);
                      }
                    });
                    return r;
                  }
                  if (t === undefined) {
                    r._volume = e;
                  }
                  t = r._getSoundIds(t);
                  for (var a = 0; a < t.length; a++) {
                    if (n = r._soundById(t[a])) {
                      n._volume = e;
                      if (!i[2]) {
                        r._stopFade(t[a]);
                      }
                      if (r._webAudio && n._node && !n._muted) {
                        n._node.gain.setValueAtTime(e, s.ctx.currentTime);
                      } else if (n._node && !n._muted) {
                        n._node.volume = e * s.volume();
                      }
                      r._emit("volume", n._id);
                    }
                  }
                  return r;
                },
                fade: function (e, t, n, r) {
                  var i = this;
                  if (i._state !== "loaded" || i._playLock) {
                    i._queue.push({
                      event: "fade",
                      action: function () {
                        i.fade(e, t, n, r);
                      }
                    });
                    return i;
                  }
                  e = Math.min(Math.max(0, parseFloat(e)), 1);
                  t = Math.min(Math.max(0, parseFloat(t)), 1);
                  n = parseFloat(n);
                  i.volume(e, r);
                  for (var a = i._getSoundIds(r), o = 0; o < a.length; o++) {
                    var h = i._soundById(a[o]);
                    if (h) {
                      if (!r) {
                        i._stopFade(a[o]);
                      }
                      if (i._webAudio && !h._muted) {
                        var l = s.ctx.currentTime;
                        var d = l + n / 1000;
                        h._volume = e;
                        h._node.gain.setValueAtTime(e, l);
                        h._node.gain.linearRampToValueAtTime(t, d);
                      }
                      i._startFadeInterval(h, e, t, n, a[o], r === undefined);
                    }
                  }
                  return i;
                },
                _startFadeInterval: function (e, t, n, r, i, s) {
                  var a = this;
                  var o = t;
                  var h = n - t;
                  var l = Math.abs(h / 0.01);
                  var d = Math.max(4, l > 0 ? r / l : r);
                  var c = Date.now();
                  e._fadeTo = n;
                  e._interval = setInterval(function () {
                    var i = (Date.now() - c) / r;
                    c = Date.now();
                    o += h * i;
                    o = Math.round(o * 100) / 100;
                    o = h < 0 ? Math.max(n, o) : Math.min(n, o);
                    if (a._webAudio) {
                      e._volume = o;
                    } else {
                      a.volume(o, e._id, true);
                    }
                    if (s) {
                      a._volume = o;
                    }
                    if (n < t && o <= n || n > t && o >= n) {
                      clearInterval(e._interval);
                      e._interval = null;
                      e._fadeTo = null;
                      a.volume(n, e._id);
                      a._emit("fade", e._id);
                    }
                  }, d);
                },
                _stopFade: function (e) {
                  var t = this;
                  var n = t._soundById(e);
                  if (n && n._interval) {
                    if (t._webAudio) {
                      n._node.gain.cancelScheduledValues(s.ctx.currentTime);
                    }
                    clearInterval(n._interval);
                    n._interval = null;
                    t.volume(n._fadeTo, e);
                    n._fadeTo = null;
                    t._emit("fade", e);
                  }
                  return t;
                },
                loop: function () {
                  var e;
                  var t;
                  var n;
                  var r = this;
                  var i = arguments;
                  if (i.length === 0) {
                    return r._loop;
                  }
                  if (i.length === 1) {
                    if (typeof i[0] != "boolean") {
                      return !!(n = r._soundById(parseInt(i[0], 10))) && n._loop;
                    }
                    e = i[0];
                    r._loop = e;
                  } else if (i.length === 2) {
                    e = i[0];
                    t = parseInt(i[1], 10);
                  }
                  for (var s = r._getSoundIds(t), a = 0; a < s.length; a++) {
                    if (n = r._soundById(s[a])) {
                      n._loop = e;
                      if (r._webAudio && n._node && n._node.bufferSource) {
                        n._node.bufferSource.loop = e;
                        if (e) {
                          n._node.bufferSource.loopStart = n._start || 0;
                          n._node.bufferSource.loopEnd = n._stop;
                          if (r.playing(s[a])) {
                            r.pause(s[a], true);
                            r.play(s[a], true);
                          }
                        }
                      }
                    }
                  }
                  return r;
                },
                rate: function () {
                  var e;
                  var t;
                  var n;
                  var r = this;
                  var i = arguments;
                  if (i.length === 0) {
                    t = r._sounds[0]._id;
                  } else if (i.length === 1) {
                    if (r._getSoundIds().indexOf(i[0]) >= 0) {
                      t = parseInt(i[0], 10);
                    } else {
                      e = parseFloat(i[0]);
                    }
                  } else if (i.length === 2) {
                    e = parseFloat(i[0]);
                    t = parseInt(i[1], 10);
                  }
                  if (typeof e != "number") {
                    if (n = r._soundById(t)) {
                      return n._rate;
                    } else {
                      return r._rate;
                    }
                  }
                  if (r._state !== "loaded" || r._playLock) {
                    r._queue.push({
                      event: "rate",
                      action: function () {
                        r.rate.apply(r, i);
                      }
                    });
                    return r;
                  }
                  if (t === undefined) {
                    r._rate = e;
                  }
                  t = r._getSoundIds(t);
                  for (var a = 0; a < t.length; a++) {
                    if (n = r._soundById(t[a])) {
                      if (r.playing(t[a])) {
                        n._rateSeek = r.seek(t[a]);
                        n._playStart = r._webAudio ? s.ctx.currentTime : n._playStart;
                      }
                      n._rate = e;
                      if (r._webAudio && n._node && n._node.bufferSource) {
                        n._node.bufferSource.playbackRate.setValueAtTime(e, s.ctx.currentTime);
                      } else if (n._node) {
                        n._node.playbackRate = e;
                      }
                      var o = r.seek(t[a]);
                      var h = ((r._sprite[n._sprite][0] + r._sprite[n._sprite][1]) / 1000 - o) * 1000 / Math.abs(n._rate);
                      if (!!r._endTimers[t[a]] || !n._paused) {
                        r._clearTimer(t[a]);
                        r._endTimers[t[a]] = setTimeout(r._ended.bind(r, n), h);
                      }
                      r._emit("rate", n._id);
                    }
                  }
                  return r;
                },
                seek: function () {
                  var e;
                  var t;
                  var n = this;
                  var r = arguments;
                  if (r.length === 0) {
                    if (n._sounds.length) {
                      t = n._sounds[0]._id;
                    }
                  } else if (r.length === 1) {
                    if (n._getSoundIds().indexOf(r[0]) >= 0) {
                      t = parseInt(r[0], 10);
                    } else if (n._sounds.length) {
                      t = n._sounds[0]._id;
                      e = parseFloat(r[0]);
                    }
                  } else if (r.length === 2) {
                    e = parseFloat(r[0]);
                    t = parseInt(r[1], 10);
                  }
                  if (t === undefined) {
                    return 0;
                  }
                  if (typeof e == "number" && (n._state !== "loaded" || n._playLock)) {
                    n._queue.push({
                      event: "seek",
                      action: function () {
                        n.seek.apply(n, r);
                      }
                    });
                    return n;
                  }
                  var i = n._soundById(t);
                  if (i) {
                    if (typeof e != "number" || !(e >= 0)) {
                      if (n._webAudio) {
                        var a = n.playing(t) ? s.ctx.currentTime - i._playStart : 0;
                        var o = i._rateSeek ? i._rateSeek - i._seek : 0;
                        return i._seek + (o + a * Math.abs(i._rate));
                      }
                      return i._node.currentTime;
                    }
                    var h = n.playing(t);
                    if (h) {
                      n.pause(t, true);
                    }
                    i._seek = e;
                    i._ended = false;
                    n._clearTimer(t);
                    if (!n._webAudio && !!i._node && !isNaN(i._node.duration)) {
                      i._node.currentTime = e;
                    }
                    function l() {
                      if (h) {
                        n.play(t, true);
                      }
                      n._emit("seek", t);
                    }
                    if (h && !n._webAudio) {
                      function d() {
                        if (n._playLock) {
                          setTimeout(d, 0);
                        } else {
                          l();
                        }
                      }
                      setTimeout(d, 0);
                    } else {
                      l();
                    }
                  }
                  return n;
                },
                playing: function (e) {
                  var t = this;
                  if (typeof e == "number") {
                    var n = t._soundById(e);
                    return !!n && !n._paused;
                  }
                  for (var r = 0; r < t._sounds.length; r++) {
                    if (!t._sounds[r]._paused) {
                      return true;
                    }
                  }
                  return false;
                },
                duration: function (e) {
                  var t = this;
                  var n = t._duration;
                  var r = t._soundById(e);
                  if (r) {
                    n = t._sprite[r._sprite][1] / 1000;
                  }
                  return n;
                },
                state: function () {
                  return this._state;
                },
                unload: function () {
                  var e = this;
                  for (var t = e._sounds, n = 0; n < t.length; n++) {
                    if (!t[n]._paused) {
                      e.stop(t[n]._id);
                    }
                    if (!e._webAudio) {
                      e._clearSound(t[n]._node);
                      t[n]._node.removeEventListener("error", t[n]._errorFn, false);
                      t[n]._node.removeEventListener(s._canPlayEvent, t[n]._loadFn, false);
                      t[n]._node.removeEventListener("ended", t[n]._endFn, false);
                      s._releaseHtml5Audio(t[n]._node);
                    }
                    delete t[n]._node;
                    e._clearTimer(t[n]._id);
                  }
                  var r = s._howls.indexOf(e);
                  if (r >= 0) {
                    s._howls.splice(r, 1);
                  }
                  var i = true;
                  for (n = 0; n < s._howls.length; n++) {
                    if (s._howls[n]._src === e._src || e._src.indexOf(s._howls[n]._src) >= 0) {
                      i = false;
                      break;
                    }
                  }
                  if (h && i) {
                    delete h[e._src];
                  }
                  s.noAudio = false;
                  e._state = "unloaded";
                  e._sounds = [];
                  e = null;
                  return null;
                },
                on: function (e, t, n, r) {
                  var i = this["_on" + e];
                  if (typeof t == "function") {
                    i.push(r ? {
                      id: n,
                      fn: t,
                      once: r
                    } : {
                      id: n,
                      fn: t
                    });
                  }
                  return this;
                },
                off: function (e, t, n) {
                  var r = this;
                  var i = r["_on" + e];
                  var s = 0;
                  if (typeof t == "number") {
                    n = t;
                    t = null;
                  }
                  if (t || n) {
                    for (s = 0; s < i.length; s++) {
                      var a = n === i[s].id;
                      if (t === i[s].fn && a || !t && a) {
                        i.splice(s, 1);
                        break;
                      }
                    }
                  } else if (e) {
                    r["_on" + e] = [];
                  } else {
                    var o = Object.keys(r);
                    for (s = 0; s < o.length; s++) {
                      if (o[s].indexOf("_on") === 0 && Array.isArray(r[o[s]])) {
                        r[o[s]] = [];
                      }
                    }
                  }
                  return r;
                },
                once: function (e, t, n) {
                  this.on(e, t, n, 1);
                  return this;
                },
                _emit: function (e, t, n) {
                  var r = this;
                  var i = r["_on" + e];
                  for (var s = i.length - 1; s >= 0; s--) {
                    if (!i[s].id || i[s].id === t || e === "load") {
                      setTimeout(function (e) {
                        e.call(this, t, n);
                      }.bind(r, i[s].fn), 0);
                      if (i[s].once) {
                        r.off(e, i[s].fn, i[s].id);
                      }
                    }
                  }
                  r._loadQueue(e);
                  return r;
                },
                _loadQueue: function (e) {
                  var t = this;
                  if (t._queue.length > 0) {
                    var n = t._queue[0];
                    if (n.event === e) {
                      t._queue.shift();
                      t._loadQueue();
                    }
                    if (!e) {
                      n.action();
                    }
                  }
                  return t;
                },
                _ended: function (e) {
                  var t = this;
                  var n = e._sprite;
                  if (!t._webAudio && e._node && !e._node.paused && !e._node.ended && e._node.currentTime < e._stop) {
                    setTimeout(t._ended.bind(t, e), 100);
                    return t;
                  }
                  var r = !!e._loop || !!t._sprite[n][2];
                  t._emit("end", e._id);
                  if (!t._webAudio && r) {
                    t.stop(e._id, true).play(e._id);
                  }
                  if (t._webAudio && r) {
                    t._emit("play", e._id);
                    e._seek = e._start || 0;
                    e._rateSeek = 0;
                    e._playStart = s.ctx.currentTime;
                    var i = (e._stop - e._start) * 1000 / Math.abs(e._rate);
                    t._endTimers[e._id] = setTimeout(t._ended.bind(t, e), i);
                  }
                  if (t._webAudio && !r) {
                    e._paused = true;
                    e._ended = true;
                    e._seek = e._start || 0;
                    e._rateSeek = 0;
                    t._clearTimer(e._id);
                    t._cleanBuffer(e._node);
                    s._autoSuspend();
                  }
                  if (!t._webAudio && !r) {
                    t.stop(e._id, true);
                  }
                  return t;
                },
                _clearTimer: function (e) {
                  var t = this;
                  if (t._endTimers[e]) {
                    if (typeof t._endTimers[e] != "function") {
                      clearTimeout(t._endTimers[e]);
                    } else {
                      var n = t._soundById(e);
                      if (n && n._node) {
                        n._node.removeEventListener("ended", t._endTimers[e], false);
                      }
                    }
                    delete t._endTimers[e];
                  }
                  return t;
                },
                _soundById: function (e) {
                  for (var t = this, n = 0; n < t._sounds.length; n++) {
                    if (e === t._sounds[n]._id) {
                      return t._sounds[n];
                    }
                  }
                  return null;
                },
                _inactiveSound: function () {
                  var e = this;
                  e._drain();
                  for (var t = 0; t < e._sounds.length; t++) {
                    if (e._sounds[t]._ended) {
                      return e._sounds[t].reset();
                    }
                  }
                  return new o(e);
                },
                _drain: function () {
                  var e = this;
                  var t = e._pool;
                  var n = 0;
                  var r = 0;
                  if (!(e._sounds.length < t)) {
                    for (r = 0; r < e._sounds.length; r++) {
                      if (e._sounds[r]._ended) {
                        n++;
                      }
                    }
                    for (r = e._sounds.length - 1; r >= 0; r--) {
                      if (n <= t) {
                        return;
                      }
                      if (e._sounds[r]._ended) {
                        if (e._webAudio && e._sounds[r]._node) {
                          e._sounds[r]._node.disconnect(0);
                        }
                        e._sounds.splice(r, 1);
                        n--;
                      }
                    }
                  }
                },
                _getSoundIds: function (e) {
                  if (e === undefined) {
                    var t = [];
                    for (var n = 0; n < this._sounds.length; n++) {
                      t.push(this._sounds[n]._id);
                    }
                    return t;
                  }
                  return [e];
                },
                _refreshBuffer: function (e) {
                  e._node.bufferSource = s.ctx.createBufferSource();
                  e._node.bufferSource.buffer = h[this._src];
                  if (e._panner) {
                    e._node.bufferSource.connect(e._panner);
                  } else {
                    e._node.bufferSource.connect(e._node);
                  }
                  e._node.bufferSource.loop = e._loop;
                  if (e._loop) {
                    e._node.bufferSource.loopStart = e._start || 0;
                    e._node.bufferSource.loopEnd = e._stop || 0;
                  }
                  e._node.bufferSource.playbackRate.setValueAtTime(e._rate, s.ctx.currentTime);
                  return this;
                },
                _cleanBuffer: function (e) {
                  var t = s._navigator && s._navigator.vendor.indexOf("Apple") >= 0;
                  if (!e.bufferSource) {
                    return this;
                  }
                  if (s._scratchBuffer && e.bufferSource && (e.bufferSource.onended = null, e.bufferSource.disconnect(0), t)) {
                    try {
                      e.bufferSource.buffer = s._scratchBuffer;
                    } catch (e) {}
                  }
                  e.bufferSource = null;
                  return this;
                },
                _clearSound: function (e) {
                  if (!/MSIE |Trident\//.test(s._navigator && s._navigator.userAgent)) {
                    e.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";
                  }
                }
              };
              function o(e) {
                this._parent = e;
                this.init();
              }
              o.prototype = {
                init: function () {
                  var e = this;
                  var t = e._parent;
                  e._muted = t._muted;
                  e._loop = t._loop;
                  e._volume = t._volume;
                  e._rate = t._rate;
                  e._seek = 0;
                  e._paused = true;
                  e._ended = true;
                  e._sprite = "__default";
                  e._id = ++s._counter;
                  t._sounds.push(e);
                  e.create();
                  return e;
                },
                create: function () {
                  var e = this;
                  var t = e._parent;
                  var n = s._muted || e._muted || e._parent._muted ? 0 : e._volume;
                  if (t._webAudio) {
                    e._node = s.ctx.createGain === undefined ? s.ctx.createGainNode() : s.ctx.createGain();
                    e._node.gain.setValueAtTime(n, s.ctx.currentTime);
                    e._node.paused = true;
                    e._node.connect(s.masterGain);
                  } else if (!s.noAudio) {
                    e._node = s._obtainHtml5Audio();
                    e._errorFn = e._errorListener.bind(e);
                    e._node.addEventListener("error", e._errorFn, false);
                    e._loadFn = e._loadListener.bind(e);
                    e._node.addEventListener(s._canPlayEvent, e._loadFn, false);
                    e._endFn = e._endListener.bind(e);
                    e._node.addEventListener("ended", e._endFn, false);
                    e._node.src = t._src;
                    e._node.preload = t._preload === true ? "auto" : t._preload;
                    e._node.volume = n * s.volume();
                    e._node.load();
                  }
                  return e;
                },
                reset: function () {
                  var e = this;
                  var t = e._parent;
                  e._muted = t._muted;
                  e._loop = t._loop;
                  e._volume = t._volume;
                  e._rate = t._rate;
                  e._seek = 0;
                  e._rateSeek = 0;
                  e._paused = true;
                  e._ended = true;
                  e._sprite = "__default";
                  e._id = ++s._counter;
                  return e;
                },
                _errorListener: function () {
                  var e = this;
                  e._parent._emit("loaderror", e._id, e._node.error ? e._node.error.code : 0);
                  e._node.removeEventListener("error", e._errorFn, false);
                },
                _loadListener: function () {
                  var e = this;
                  var t = e._parent;
                  t._duration = Math.ceil(e._node.duration * 10) / 10;
                  if (Object.keys(t._sprite).length === 0) {
                    t._sprite = {
                      __default: [0, t._duration * 1000]
                    };
                  }
                  if (t._state !== "loaded") {
                    t._state = "loaded";
                    t._emit("load");
                    t._loadQueue();
                  }
                  e._node.removeEventListener(s._canPlayEvent, e._loadFn, false);
                },
                _endListener: function () {
                  var e = this;
                  var t = e._parent;
                  if (t._duration === Infinity) {
                    t._duration = Math.ceil(e._node.duration * 10) / 10;
                    if (t._sprite.__default[1] === Infinity) {
                      t._sprite.__default[1] = t._duration * 1000;
                    }
                    t._ended(e);
                  }
                  e._node.removeEventListener("ended", e._endFn, false);
                }
              };
              var h = {};
              function l(e) {
                var t = e._src;
                if (h[t]) {
                  e._duration = h[t].duration;
                  u(e);
                  return;
                }
                if (/^data:[^;]+;base64,/.test(t)) {
                  for (var n = atob(t.split(",")[1]), r = new Uint8Array(n.length), i = 0; i < n.length; ++i) {
                    r[i] = n.charCodeAt(i);
                  }
                  c(r.buffer, e);
                } else {
                  var s = new XMLHttpRequest();
                  s.open(e._xhr.method, t, true);
                  s.withCredentials = e._xhr.withCredentials;
                  s.responseType = "arraybuffer";
                  if (e._xhr.headers) {
                    Object.keys(e._xhr.headers).forEach(function (t) {
                      s.setRequestHeader(t, e._xhr.headers[t]);
                    });
                  }
                  s.onload = function () {
                    var t = (s.status + "")[0];
                    if (t === "0" || t === "2" || t === "3") {
                      c(s.response, e);
                    } else {
                      e._emit("loaderror", null, "Failed loading audio file with status: " + s.status + ".");
                    }
                  };
                  s.onerror = function () {
                    if (e._webAudio) {
                      e._html5 = true;
                      e._webAudio = false;
                      e._sounds = [];
                      delete h[t];
                      e.load();
                    }
                  };
                  d(s);
                }
              }
              function d(e) {
                try {
                  e.send();
                } catch (t) {
                  e.onerror();
                }
              }
              function c(e, t) {
                function n() {
                  t._emit("loaderror", null, "Decoding audio data failed.");
                }
                function r(e) {
                  if (e && t._sounds.length > 0) {
                    h[t._src] = e;
                    u(t, e);
                  } else {
                    n();
                  }
                }
                if (typeof Promise != "undefined" && s.ctx.decodeAudioData.length === 1) {
                  s.ctx.decodeAudioData(e).then(r).catch(n);
                } else {
                  s.ctx.decodeAudioData(e, r, n);
                }
              }
              function u(e, t) {
                if (t && !e._duration) {
                  e._duration = t.duration;
                }
                if (Object.keys(e._sprite).length === 0) {
                  e._sprite = {
                    __default: [0, e._duration * 1000]
                  };
                }
                if (e._state !== "loaded") {
                  e._state = "loaded";
                  e._emit("load");
                  e._loadQueue();
                }
              }
              function p() {
                if (s.usingWebAudio) {
                  try {
                    if (typeof AudioContext != "undefined") {
                      s.ctx = new AudioContext();
                    } else if (typeof webkitAudioContext != "undefined") {
                      s.ctx = new webkitAudioContext();
                    } else {
                      s.usingWebAudio = false;
                    }
                  } catch (e) {
                    s.usingWebAudio = false;
                  }
                  if (!s.ctx) {
                    s.usingWebAudio = false;
                  }
                  var e = /iP(hone|od|ad)/.test(s._navigator && s._navigator.platform);
                  var t = s._navigator && s._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                  var n = t ? parseInt(t[1], 10) : null;
                  if (e && n && n < 9) {
                    var r = /safari/.test(s._navigator && s._navigator.userAgent.toLowerCase());
                    if (s._navigator && !r) {
                      s.usingWebAudio = false;
                    }
                  }
                  if (s.usingWebAudio) {
                    s.masterGain = s.ctx.createGain === undefined ? s.ctx.createGainNode() : s.ctx.createGain();
                    s.masterGain.gain.setValueAtTime(s._muted ? 0 : s._volume, s.ctx.currentTime);
                    s.masterGain.connect(s.ctx.destination);
                  }
                  s._setup();
                }
              }
              if ((r = function () {
                return {
                  Howler: s,
                  Howl: a
                };
              }.apply(t, [])) !== undefined) {
                e.exports = r;
              }
              t.Howler = s;
              t.Howl = a;
              if (n.g !== undefined) {
                n.g.HowlerGlobal = i;
                n.g.Howler = s;
                n.g.Howl = a;
                n.g.Sound = o;
              } else if (typeof window != "undefined") {
                window.HowlerGlobal = i;
                window.Howler = s;
                window.Howl = a;
                window.Sound = o;
              }
            })();
            (function () {
              "use strict";
        
              var e;
              HowlerGlobal.prototype._pos = [0, 0, 0];
              HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];
              HowlerGlobal.prototype.stereo = function (e) {
                var t = this;
                if (!t.ctx || !t.ctx.listener) {
                  return t;
                }
                for (var n = t._howls.length - 1; n >= 0; n--) {
                  t._howls[n].stereo(e);
                }
                return t;
              };
              HowlerGlobal.prototype.pos = function (e, t, n) {
                var r = this;
                if (r.ctx && r.ctx.listener) {
                  t = typeof t != "number" ? r._pos[1] : t;
                  n = typeof n != "number" ? r._pos[2] : n;
                  if (typeof e != "number") {
                    return r._pos;
                  } else {
                    r._pos = [e, t, n];
                    if (r.ctx.listener.positionX !== undefined) {
                      r.ctx.listener.positionX.setTargetAtTime(r._pos[0], Howler.ctx.currentTime, 0.1);
                      r.ctx.listener.positionY.setTargetAtTime(r._pos[1], Howler.ctx.currentTime, 0.1);
                      r.ctx.listener.positionZ.setTargetAtTime(r._pos[2], Howler.ctx.currentTime, 0.1);
                    } else {
                      r.ctx.listener.setPosition(r._pos[0], r._pos[1], r._pos[2]);
                    }
                    return r;
                  }
                } else {
                  return r;
                }
              };
              HowlerGlobal.prototype.orientation = function (e, t, n, r, i, s) {
                var a = this;
                if (!a.ctx || !a.ctx.listener) {
                  return a;
                }
                var o = a._orientation;
                t = typeof t != "number" ? o[1] : t;
                n = typeof n != "number" ? o[2] : n;
                r = typeof r != "number" ? o[3] : r;
                i = typeof i != "number" ? o[4] : i;
                s = typeof s != "number" ? o[5] : s;
                if (typeof e != "number") {
                  return o;
                } else {
                  a._orientation = [e, t, n, r, i, s];
                  if (a.ctx.listener.forwardX !== undefined) {
                    a.ctx.listener.forwardX.setTargetAtTime(e, Howler.ctx.currentTime, 0.1);
                    a.ctx.listener.forwardY.setTargetAtTime(t, Howler.ctx.currentTime, 0.1);
                    a.ctx.listener.forwardZ.setTargetAtTime(n, Howler.ctx.currentTime, 0.1);
                    a.ctx.listener.upX.setTargetAtTime(r, Howler.ctx.currentTime, 0.1);
                    a.ctx.listener.upY.setTargetAtTime(i, Howler.ctx.currentTime, 0.1);
                    a.ctx.listener.upZ.setTargetAtTime(s, Howler.ctx.currentTime, 0.1);
                  } else {
                    a.ctx.listener.setOrientation(e, t, n, r, i, s);
                  }
                  return a;
                }
              };
              Howl.prototype.init = (e = Howl.prototype.init, function (t) {
                var n = this;
                n._orientation = t.orientation || [1, 0, 0];
                n._stereo = t.stereo || null;
                n._pos = t.pos || null;
                n._pannerAttr = {
                  coneInnerAngle: t.coneInnerAngle !== undefined ? t.coneInnerAngle : 360,
                  coneOuterAngle: t.coneOuterAngle !== undefined ? t.coneOuterAngle : 360,
                  coneOuterGain: t.coneOuterGain !== undefined ? t.coneOuterGain : 0,
                  distanceModel: t.distanceModel !== undefined ? t.distanceModel : "inverse",
                  maxDistance: t.maxDistance !== undefined ? t.maxDistance : 10000,
                  panningModel: t.panningModel !== undefined ? t.panningModel : "HRTF",
                  refDistance: t.refDistance !== undefined ? t.refDistance : 1,
                  rolloffFactor: t.rolloffFactor !== undefined ? t.rolloffFactor : 1
                };
                n._onstereo = t.onstereo ? [{
                  fn: t.onstereo
                }] : [];
                n._onpos = t.onpos ? [{
                  fn: t.onpos
                }] : [];
                n._onorientation = t.onorientation ? [{
                  fn: t.onorientation
                }] : [];
                return e.call(this, t);
              });
              Howl.prototype.stereo = function (e, n) {
                var r = this;
                if (!r._webAudio) {
                  return r;
                }
                if (r._state !== "loaded") {
                  r._queue.push({
                    event: "stereo",
                    action: function () {
                      r.stereo(e, n);
                    }
                  });
                  return r;
                }
                var i = Howler.ctx.createStereoPanner === undefined ? "spatial" : "stereo";
                if (n === undefined) {
                  if (typeof e != "number") {
                    return r._stereo;
                  }
                  r._stereo = e;
                  r._pos = [e, 0, 0];
                }
                for (var s = r._getSoundIds(n), a = 0; a < s.length; a++) {
                  var o = r._soundById(s[a]);
                  if (o) {
                    if (typeof e != "number") {
                      return o._stereo;
                    }
                    o._stereo = e;
                    o._pos = [e, 0, 0];
                    if (o._node) {
                      o._pannerAttr.panningModel = "equalpower";
                      if (!o._panner || !o._panner.pan) {
                        t(o, i);
                      }
                      if (i === "spatial") {
                        if (o._panner.positionX !== undefined) {
                          o._panner.positionX.setValueAtTime(e, Howler.ctx.currentTime);
                          o._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime);
                          o._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime);
                        } else {
                          o._panner.setPosition(e, 0, 0);
                        }
                      } else {
                        o._panner.pan.setValueAtTime(e, Howler.ctx.currentTime);
                      }
                    }
                    r._emit("stereo", o._id);
                  }
                }
                return r;
              };
              Howl.prototype.pos = function (e, n, r, i) {
                var s = this;
                if (!s._webAudio) {
                  return s;
                }
                if (s._state !== "loaded") {
                  s._queue.push({
                    event: "pos",
                    action: function () {
                      s.pos(e, n, r, i);
                    }
                  });
                  return s;
                }
                n = typeof n != "number" ? 0 : n;
                r = typeof r != "number" ? -0.5 : r;
                if (i === undefined) {
                  if (typeof e != "number") {
                    return s._pos;
                  }
                  s._pos = [e, n, r];
                }
                for (var a = s._getSoundIds(i), o = 0; o < a.length; o++) {
                  var h = s._soundById(a[o]);
                  if (h) {
                    if (typeof e != "number") {
                      return h._pos;
                    }
                    h._pos = [e, n, r];
                    if (h._node) {
                      if (!h._panner || !!h._panner.pan) {
                        t(h, "spatial");
                      }
                      if (h._panner.positionX !== undefined) {
                        h._panner.positionX.setValueAtTime(e, Howler.ctx.currentTime);
                        h._panner.positionY.setValueAtTime(n, Howler.ctx.currentTime);
                        h._panner.positionZ.setValueAtTime(r, Howler.ctx.currentTime);
                      } else {
                        h._panner.setPosition(e, n, r);
                      }
                    }
                    s._emit("pos", h._id);
                  }
                }
                return s;
              };
              Howl.prototype.orientation = function (e, n, r, i) {
                var s = this;
                if (!s._webAudio) {
                  return s;
                }
                if (s._state !== "loaded") {
                  s._queue.push({
                    event: "orientation",
                    action: function () {
                      s.orientation(e, n, r, i);
                    }
                  });
                  return s;
                }
                n = typeof n != "number" ? s._orientation[1] : n;
                r = typeof r != "number" ? s._orientation[2] : r;
                if (i === undefined) {
                  if (typeof e != "number") {
                    return s._orientation;
                  }
                  s._orientation = [e, n, r];
                }
                for (var a = s._getSoundIds(i), o = 0; o < a.length; o++) {
                  var h = s._soundById(a[o]);
                  if (h) {
                    if (typeof e != "number") {
                      return h._orientation;
                    }
                    h._orientation = [e, n, r];
                    if (h._node) {
                      if (!h._panner) {
                        h._pos ||= s._pos || [0, 0, -0.5];
                        t(h, "spatial");
                      }
                      if (h._panner.orientationX !== undefined) {
                        h._panner.orientationX.setValueAtTime(e, Howler.ctx.currentTime);
                        h._panner.orientationY.setValueAtTime(n, Howler.ctx.currentTime);
                        h._panner.orientationZ.setValueAtTime(r, Howler.ctx.currentTime);
                      } else {
                        h._panner.setOrientation(e, n, r);
                      }
                    }
                    s._emit("orientation", h._id);
                  }
                }
                return s;
              };
              Howl.prototype.pannerAttr = function () {
                var e;
                var n;
                var r;
                var i = this;
                var s = arguments;
                if (!i._webAudio) {
                  return i;
                }
                if (s.length === 0) {
                  return i._pannerAttr;
                }
                if (s.length === 1) {
                  if (typeof s[0] != "object") {
                    if (r = i._soundById(parseInt(s[0], 10))) {
                      return r._pannerAttr;
                    } else {
                      return i._pannerAttr;
                    }
                  }
                  e = s[0];
                  if (n === undefined) {
                    e.pannerAttr ||= {
                      coneInnerAngle: e.coneInnerAngle,
                      coneOuterAngle: e.coneOuterAngle,
                      coneOuterGain: e.coneOuterGain,
                      distanceModel: e.distanceModel,
                      maxDistance: e.maxDistance,
                      refDistance: e.refDistance,
                      rolloffFactor: e.rolloffFactor,
                      panningModel: e.panningModel
                    };
                    i._pannerAttr = {
                      coneInnerAngle: e.pannerAttr.coneInnerAngle !== undefined ? e.pannerAttr.coneInnerAngle : i._coneInnerAngle,
                      coneOuterAngle: e.pannerAttr.coneOuterAngle !== undefined ? e.pannerAttr.coneOuterAngle : i._coneOuterAngle,
                      coneOuterGain: e.pannerAttr.coneOuterGain !== undefined ? e.pannerAttr.coneOuterGain : i._coneOuterGain,
                      distanceModel: e.pannerAttr.distanceModel !== undefined ? e.pannerAttr.distanceModel : i._distanceModel,
                      maxDistance: e.pannerAttr.maxDistance !== undefined ? e.pannerAttr.maxDistance : i._maxDistance,
                      refDistance: e.pannerAttr.refDistance !== undefined ? e.pannerAttr.refDistance : i._refDistance,
                      rolloffFactor: e.pannerAttr.rolloffFactor !== undefined ? e.pannerAttr.rolloffFactor : i._rolloffFactor,
                      panningModel: e.pannerAttr.panningModel !== undefined ? e.pannerAttr.panningModel : i._panningModel
                    };
                  }
                } else if (s.length === 2) {
                  e = s[0];
                  n = parseInt(s[1], 10);
                }
                for (var a = i._getSoundIds(n), o = 0; o < a.length; o++) {
                  if (r = i._soundById(a[o])) {
                    var h = r._pannerAttr;
                    h = {
                      coneInnerAngle: e.coneInnerAngle !== undefined ? e.coneInnerAngle : h.coneInnerAngle,
                      coneOuterAngle: e.coneOuterAngle !== undefined ? e.coneOuterAngle : h.coneOuterAngle,
                      coneOuterGain: e.coneOuterGain !== undefined ? e.coneOuterGain : h.coneOuterGain,
                      distanceModel: e.distanceModel !== undefined ? e.distanceModel : h.distanceModel,
                      maxDistance: e.maxDistance !== undefined ? e.maxDistance : h.maxDistance,
                      refDistance: e.refDistance !== undefined ? e.refDistance : h.refDistance,
                      rolloffFactor: e.rolloffFactor !== undefined ? e.rolloffFactor : h.rolloffFactor,
                      panningModel: e.panningModel !== undefined ? e.panningModel : h.panningModel
                    };
                    var l = r._panner;
                    if (!l) {
                      r._pos ||= i._pos || [0, 0, -0.5];
                      t(r, "spatial");
                      l = r._panner;
                    }
                    l.coneInnerAngle = h.coneInnerAngle;
                    l.coneOuterAngle = h.coneOuterAngle;
                    l.coneOuterGain = h.coneOuterGain;
                    l.distanceModel = h.distanceModel;
                    l.maxDistance = h.maxDistance;
                    l.refDistance = h.refDistance;
                    l.rolloffFactor = h.rolloffFactor;
                    l.panningModel = h.panningModel;
                  }
                }
                return i;
              };
              Sound.prototype.init = function (e) {
                return function () {
                  var t = this;
                  var n = t._parent;
                  t._orientation = n._orientation;
                  t._stereo = n._stereo;
                  t._pos = n._pos;
                  t._pannerAttr = n._pannerAttr;
                  e.call(this);
                  if (t._stereo) {
                    n.stereo(t._stereo);
                  } else if (t._pos) {
                    n.pos(t._pos[0], t._pos[1], t._pos[2], t._id);
                  }
                };
              }(Sound.prototype.init);
              Sound.prototype.reset = function (e) {
                return function () {
                  var t = this;
                  var n = t._parent;
                  t._orientation = n._orientation;
                  t._stereo = n._stereo;
                  t._pos = n._pos;
                  t._pannerAttr = n._pannerAttr;
                  if (t._stereo) {
                    n.stereo(t._stereo);
                  } else if (t._pos) {
                    n.pos(t._pos[0], t._pos[1], t._pos[2], t._id);
                  } else if (t._panner) {
                    t._panner.disconnect(0);
                    t._panner = undefined;
                    n._refreshBuffer(t);
                  }
                  return e.call(this);
                };
              }(Sound.prototype.reset);
              function t(e, t) {
                if ((t = t || "spatial") === "spatial") {
                  e._panner = Howler.ctx.createPanner();
                  e._panner.coneInnerAngle = e._pannerAttr.coneInnerAngle;
                  e._panner.coneOuterAngle = e._pannerAttr.coneOuterAngle;
                  e._panner.coneOuterGain = e._pannerAttr.coneOuterGain;
                  e._panner.distanceModel = e._pannerAttr.distanceModel;
                  e._panner.maxDistance = e._pannerAttr.maxDistance;
                  e._panner.refDistance = e._pannerAttr.refDistance;
                  e._panner.rolloffFactor = e._pannerAttr.rolloffFactor;
                  e._panner.panningModel = e._pannerAttr.panningModel;
                  if (e._panner.positionX !== undefined) {
                    e._panner.positionX.setValueAtTime(e._pos[0], Howler.ctx.currentTime);
                    e._panner.positionY.setValueAtTime(e._pos[1], Howler.ctx.currentTime);
                    e._panner.positionZ.setValueAtTime(e._pos[2], Howler.ctx.currentTime);
                  } else {
                    e._panner.setPosition(e._pos[0], e._pos[1], e._pos[2]);
                  }
                  if (e._panner.orientationX !== undefined) {
                    e._panner.orientationX.setValueAtTime(e._orientation[0], Howler.ctx.currentTime);
                    e._panner.orientationY.setValueAtTime(e._orientation[1], Howler.ctx.currentTime);
                    e._panner.orientationZ.setValueAtTime(e._orientation[2], Howler.ctx.currentTime);
                  } else {
                    e._panner.setOrientation(e._orientation[0], e._orientation[1], e._orientation[2]);
                  }
                } else {
                  e._panner = Howler.ctx.createStereoPanner();
                  e._panner.pan.setValueAtTime(e._stereo, Howler.ctx.currentTime);
                }
                e._panner.connect(e._node);
                if (!e._paused) {
                  e._parent.pause(e._id, true).play(e._id, true);
                }
              }
            })();
          }
    });
})();
