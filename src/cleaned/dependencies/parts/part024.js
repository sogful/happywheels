(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        62828(e, t, n) {
            "use strict";
        
            n.d(t, {
              A: () => s
            });
            var r = n(89165);
            var i = {};
            Object.defineProperty(i, "add", {
              enumerable: false,
              value: function (e, t) {
                if (typeof t == "string") {
                  t = r.A.deserializeShapes(t);
                }
                for (var n = 0; n < t.length; n++) {
                  for (var s = t[n], a = 0; a < s.length; a++) {
                    var o = s[a];
                    if (typeof o == "string" && o[0] === "#") {
                      s[a] = r.A.hexToUint(o);
                    }
                  }
                }
                i[e] = t;
              }
            });
            Object.defineProperty(i, "fromCache", {
              enumerable: false,
              value: function (e) {
                return i[e] || null;
              }
            });
            Object.defineProperty(i, "remove", {
              enumerable: false,
              value: function (e) {
                if (typeof e != "object") {
                  if (i[e]) {
                    i[e].length = 0;
                    delete i[e];
                  }
                } else {
                  for (var t in e) {
                    i.remove(t);
                  }
                }
              }
            });
            Object.defineProperty(i, "removeAll", {
              enumerable: false,
              value: function () {
                for (var e in i) {
                  i.remove(e);
                }
              }
            });
            const s = i;
          },
        89165(e, t, n) {
            "use strict";
        
            n.d(t, {
              A: () => s
            });
            n(27495);
            n(25440);
            n(33771);
            n(90744);
            n(23500);
            n(46682);
            var r = n(96871);
            var i = null;
            var s = function () {
              function e() {}
              e.hexToUint = function (e) {
                if ((e = e.substr(1)).length === 3) {
                  e = e.replace(/([a-f0-9])/g, "$1$1");
                }
                return parseInt(e, 16);
              };
              e.fillFrames = function (e, t, n) {
                var r = e.length;
                if (r < t + n && (e.length = t + n, r < t)) {
                  if (e.fill) {
                    e.fill(false, r, t);
                  } else {
                    for (var i = r; i < t; ++i) {
                      e[i] = false;
                    }
                  }
                }
                if (e.fill) {
                  e.fill(true, t, t + n);
                } else {
                  for (var s = e.length, a = t; a < s; ++a) {
                    e[a] = true;
                  }
                }
              };
              e.deserializeKeyframes = function (e) {
                for (var t, n, r = {}, i = 0, s = {
                    X: "x",
                    Y: "y",
                    A: "sx",
                    B: "sy",
                    C: "kx",
                    D: "ky",
                    R: "r",
                    L: "a",
                    T: "t",
                    F: "c",
                    V: "v"
                  }, a = "", o = false, h = {}; i <= e.length;) {
                  if (s[t = e[i]]) {
                    if (!o) {
                      o = true;
                      r[a] = h;
                    }
                    if (n) {
                      h[n] = this.parseValue(n, a);
                    }
                    n = s[t];
                    a = "";
                    i++;
                  } else if (t && t !== " ") {
                    a += t;
                    i++;
                  } else {
                    i++;
                    h[n] = this.parseValue(n, a);
                    a = "";
                    n = null;
                    h = {};
                    o = false;
                  }
                }
                return r;
              };
              e.deserializeShapes = function (e) {
                var t = [];
                for (var n = e.split("\n"), r = /^[a-z]{1,2}$/, i = 0; i < n.length; i++) {
                  for (var s = n[i].split(" "), a = 0; a < s.length; a++) {
                    var o = s[a];
                    if (o[0] !== "#" && !r.test(o)) {
                      s[a] = parseFloat(o);
                    }
                  }
                  t.push(s);
                }
                return t;
              };
              e.parseValue = function (e, t) {
                switch (e) {
                  case "c":
                    (t = t.split(",")).forEach(function (e, t, n) {
                      n[t] = parseFloat(e);
                    });
                    return t;
                  case "t":
                    return t;
                  case "v":
                    return !!parseInt(t);
                  default:
                    return parseFloat(t);
                }
              };
              e.upload = function (e, t, n) {
                if (!i) {
                  (i = e.plugins.prepare).register(this.addMovieClips);
                }
                i.upload(t, n);
              };
              e.addMovieClips = function (e) {
                return e instanceof r.j7 && (e._timedChildTimelines.forEach(function (t) {
                  if (e.children.indexOf(t.target) === -1) {
                    i.add(t.target);
                  }
                }), true);
              };
              return e;
            }();
          }
    });
})();
