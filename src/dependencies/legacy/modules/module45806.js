(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        45806(e, t, n) {
            "use strict";
        
            n(47764);
            var r;
            var i = n(46518);
            var s = n(43724);
            var a = n(67416);
            var o = n(44576);
            var h = n(76080);
            var l = n(79504);
            var d = n(36840);
            var c = n(62106);
            var u = n(90679);
            var p = n(39297);
            var m = n(44213);
            var f = n(97916);
            var _ = n(67680);
            var v = n(68183).L;
            var y = n(3717);
            var g = n(70918);
            var w = n(655);
            var x = n(10687);
            var b = n(22812);
            var T = n(98406);
            var A = n(91181);
            var C = A.set;
            var S = A.getterFor("URL");
            var E = T.URLSearchParams;
            var O = T.getState;
            var k = g.decode;
            var P = g.encode;
            var M = o.URL;
            var R = o.TypeError;
            var I = o.parseInt;
            var L = Math.floor;
            var j = Math.pow;
            var B = String.fromCharCode;
            var D = l("".charAt);
            var F = l(/./.exec);
            var N = l([].join);
            var G = l(1.1.toString);
            var U = l([].pop);
            var V = l([].push);
            var H = l("".replace);
            var z = l([].shift);
            var W = l("".split);
            var X = l("".indexOf);
            var Y = l("".slice);
            var q = l("".toLowerCase);
            var J = l([].unshift);
            var K = "Invalid scheme";
            var Z = "Invalid host";
            var $ = "Invalid port";
            var Q = /[a-z]/i;
            var ee = /[\d+\-.a-z]/i;
            var te = /\d/;
            var ne = /^0x/i;
            var re = /^[0-7]+$/;
            var ie = /^\d+$/;
            var se = /^[\da-f]+$/i;
            var ae = /[\u0000-\u0020#%/:<>?@[\\\]^|\u007F]/;
            var oe = /[\0\t\n\r #/:<>?@[\\\]^|]/;
            var he = /^[\u0000-\u0020]+/;
            var le = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/;
            var de = /[\t\n\r]/g;
            var ce = /[^\u0000-\u007F]/;
            function ue(e) {
              return e === 173 || e === 847 || e === 8203 || e === 12644 || e === 65279 || e === 65440 || e >= 4447 && e <= 4448 || e >= 6068 && e <= 6069 || e >= 6155 && e <= 6159 || e >= 8288 && e <= 8292 || e >= 8298 && e <= 8303 || e >= 65024 && e <= 65039 || e >= 917760 && e <= 917999;
            }
            function pe(e) {
              return e === 65533 || e >= 55296 && e <= 57343 || e >= 128 && e <= 159 || e >= 8206 && e <= 8207 || e >= 8232 && e <= 8233 || e >= 8234 && e <= 8238 || e >= 8293 && e <= 8297 || e >= 64976 && e <= 65007 || !(~e & 65534) || e >= 57344 && e <= 63743 || e >= 983040 && e <= 1114109;
            }
            function me(e) {
              if (e >= 65281 && e <= 65374) {
                return e - 65248;
              } else if (e === 160 || e === 5760 || e === 8239 || e === 8287 || e === 12288 || e >= 8192 && e <= 8202 || e <= 65535 && X("¨¯´¸˘˙˚˛˜˝ͺ΄΅᾽᾿῀῁῍῎῏῝῞῟῭΅´῾‗‾⁇⁈⁉℀℁℅℆⩴゛゜ﱞﱟﱠﱡﱢﱣﷺﷻ︓︖﹇﹈﹉﹊﹋﹌﹕﹖﹟﹤﹥﹨﹪﹫ﹰﹲﹴﹶﹸﹺﹼﹾ￣", B(e)) > -1) {
                return 32;
              } else {
                return e;
              }
            }
            function fe(e) {
              var t;
              var n;
              var r;
              var i;
              if (typeof e == "number") {
                t = [];
                n = 0;
                for (; n < 4; n++) {
                  J(t, e % 256);
                  e = L(e / 256);
                }
                return N(t, ".");
              }
              if (typeof e == "object") {
                t = "";
                r = function (e) {
                  var t = null;
                  var n = 1;
                  var r = null;
                  var i = 0;
                  for (var s = 0; s < 8; s++) {
                    if (e[s] !== 0) {
                      if (i > n) {
                        t = r;
                        n = i;
                      }
                      r = null;
                      i = 0;
                    } else {
                      if (r === null) {
                        r = s;
                      }
                      ++i;
                    }
                  }
                  if (i > n) {
                    return r;
                  } else {
                    return t;
                  }
                }(e);
                n = 0;
                for (; n < 8; n++) {
                  if (!i || e[n] !== 0) {
                    i &&= false;
                    if (r === n) {
                      t += n ? ":" : "::";
                      i = true;
                    } else {
                      t += G(e[n], 16);
                      if (n < 7) {
                        t += ":";
                      }
                    }
                  }
                }
                return "[" + t + "]";
              }
              return e;
            }
            var _e = {};
            var ve = m({}, _e, {
              " ": 1,
              "\"": 1,
              "#": 1,
              "<": 1,
              ">": 1
            });
            var ye = m({}, ve, {
              "'": 1
            });
            var ge = m({}, _e, {
              " ": 1,
              "\"": 1,
              "<": 1,
              ">": 1,
              "`": 1
            });
            var we = m({}, ge, {
              "#": 1,
              "?": 1,
              "{": 1,
              "}": 1,
              "^": 1
            });
            var xe = m({}, we, {
              "/": 1,
              ":": 1,
              ";": 1,
              "=": 1,
              "@": 1,
              "[": 1,
              "\\": 1,
              "]": 1,
              "^": 1,
              "|": 1
            });
            function be(e, t) {
              var n = v(e, 0);
              if (n >= 32 && n < 127 && !p(t, e)) {
                return e;
              } else if (e === "'" && p(t, e)) {
                return "%27";
              } else {
                return P(e);
              }
            }
            var Te = {
              ftp: 21,
              file: null,
              http: 80,
              https: 443,
              ws: 80,
              wss: 443
            };
            function Ae(e, t) {
              var n;
              return e.length === 2 && F(Q, D(e, 0)) && ((n = D(e, 1)) === ":" || !t && n === "|");
            }
            function Ce(e) {
              var t;
              return e.length > 1 && Ae(Y(e, 0, 2)) && (e.length === 2 || (t = D(e, 2)) === "/" || t === "\\" || t === "?" || t === "#");
            }
            function Se(e) {
              return e === "." || q(e) === "%2e";
            }
            function Ee(e) {
              return (e = q(e)) === ".." || e === "%2e." || e === ".%2e" || e === "%2e%2e";
            }
            var Oe = {};
            var ke = {};
            var Pe = {};
            var Me = {};
            var Re = {};
            var Ie = {};
            var Le = {};
            var je = {};
            var Be = {};
            var De = {};
            var Fe = {};
            var Ne = {};
            var Ge = {};
            var Ue = {};
            var Ve = {};
            var He = {};
            var ze = {};
            var We = {};
            var Xe = {};
            var Ye = {};
            var qe = {};
            function Je(e, t, n) {
              var r;
              var i;
              var s;
              var a = w(e);
              if (t) {
                if (i = this.parse(a)) {
                  throw new R(i);
                }
                this.searchParams = null;
              } else {
                if (n !== undefined) {
                  r = new Je(n, true);
                }
                if (i = this.parse(a, null, r)) {
                  throw new R(i);
                }
                (s = O(new E())).bindURL(this);
                this.searchParams = s;
              }
            }
            Je.prototype = {
              type: "URL",
              parse: function (e, t, n) {
                var i;
                var s;
                var a;
                var o;
                var h = this;
                var l = t || Oe;
                var d = 0;
                var c = "";
                var u = false;
                var m = false;
                var v = false;
                e = w(e);
                if (!t) {
                  h.scheme = "";
                  h.username = "";
                  h.password = "";
                  h.host = null;
                  h.port = null;
                  h.path = [];
                  h.query = null;
                  h.fragment = null;
                  h.cannotBeABaseURL = false;
                  e = H(e, he, "");
                  e = H(e, le, "$1");
                }
                e = H(e, de, "");
                i = f(e);
                while (d <= i.length) {
                  s = i[d];
                  switch (l) {
                    case Oe:
                      if (!s || !F(Q, s)) {
                        if (t) {
                          return K;
                        }
                        l = Pe;
                        continue;
                      }
                      c += q(s);
                      l = ke;
                      break;
                    case ke:
                      if (s && F(ee, s)) {
                        c += q(s);
                      } else {
                        if (s !== ":") {
                          if (t) {
                            return K;
                          }
                          c = "";
                          l = Pe;
                          d = 0;
                          continue;
                        }
                        if (t && (h.isSpecial() !== p(Te, c) || c === "file" && (h.includesCredentials() || h.port !== null) || h.scheme === "file" && h.host === "")) {
                          return;
                        }
                        h.scheme = c;
                        if (t) {
                          if (h.isSpecial() && Te[h.scheme] === h.port) {
                            h.port = null;
                          }
                          return;
                        }
                        c = "";
                        if (h.scheme === "file") {
                          l = Ue;
                        } else if (h.isSpecial() && n && n.scheme === h.scheme) {
                          l = Me;
                        } else if (h.isSpecial()) {
                          l = je;
                        } else if (i[d + 1] === "/") {
                          l = Re;
                          d++;
                        } else {
                          h.cannotBeABaseURL = true;
                          V(h.path, "");
                          l = Xe;
                        }
                      }
                      break;
                    case Pe:
                      if (!n || n.cannotBeABaseURL && s !== "#") {
                        return K;
                      }
                      if (n.cannotBeABaseURL && s === "#") {
                        h.scheme = n.scheme;
                        h.path = _(n.path);
                        h.query = n.query;
                        h.fragment = "";
                        h.cannotBeABaseURL = true;
                        l = qe;
                        break;
                      }
                      l = n.scheme === "file" ? Ue : Ie;
                      continue;
                    case Me:
                      if (s !== "/" || i[d + 1] !== "/") {
                        l = Ie;
                        continue;
                      }
                      l = Be;
                      d++;
                      break;
                    case Re:
                      if (s === "/") {
                        l = De;
                        break;
                      }
                      l = We;
                      continue;
                    case Ie:
                      h.scheme = n.scheme;
                      if (s === r) {
                        h.username = n.username;
                        h.password = n.password;
                        h.host = n.host;
                        h.port = n.port;
                        h.path = _(n.path);
                        h.query = n.query;
                      } else if (s === "/" || s === "\\" && h.isSpecial()) {
                        l = Le;
                      } else if (s === "?") {
                        h.username = n.username;
                        h.password = n.password;
                        h.host = n.host;
                        h.port = n.port;
                        h.path = _(n.path);
                        h.query = "";
                        l = Ye;
                      } else {
                        if (s !== "#") {
                          h.username = n.username;
                          h.password = n.password;
                          h.host = n.host;
                          h.port = n.port;
                          h.path = _(n.path);
                          if (h.path.length) {
                            h.path.length--;
                          }
                          l = We;
                          continue;
                        }
                        h.username = n.username;
                        h.password = n.password;
                        h.host = n.host;
                        h.port = n.port;
                        h.path = _(n.path);
                        h.query = n.query;
                        h.fragment = "";
                        l = qe;
                      }
                      break;
                    case Le:
                      if (!h.isSpecial() || s !== "/" && s !== "\\") {
                        if (s !== "/") {
                          h.username = n.username;
                          h.password = n.password;
                          h.host = n.host;
                          h.port = n.port;
                          l = We;
                          continue;
                        }
                        l = De;
                      } else {
                        l = Be;
                      }
                      break;
                    case je:
                      l = Be;
                      if (s !== "/" || i[d + 1] !== "/") {
                        continue;
                      }
                      d++;
                      break;
                    case Be:
                      if (s !== "/" && s !== "\\") {
                        l = De;
                        continue;
                      }
                      break;
                    case De:
                      if (s === "@") {
                        if (u) {
                          c = "%40" + c;
                        }
                        u = true;
                        a = f(c);
                        for (var y = 0; y < a.length; y++) {
                          var g = a[y];
                          if (g !== ":" || v) {
                            var x = be(g, xe);
                            if (v) {
                              h.password += x;
                            } else {
                              h.username += x;
                            }
                          } else {
                            v = true;
                          }
                        }
                        c = "";
                      } else if (s === r || s === "/" || s === "?" || s === "#" || s === "\\" && h.isSpecial()) {
                        if (u && c === "") {
                          return "Invalid authority";
                        }
                        d -= f(c).length + 1;
                        c = "";
                        l = Fe;
                      } else {
                        c += s;
                      }
                      break;
                    case Fe:
                    case Ne:
                      if (t && h.scheme === "file") {
                        l = He;
                        continue;
                      }
                      if (s !== ":" || m) {
                        if (s === r || s === "/" || s === "?" || s === "#" || s === "\\" && h.isSpecial()) {
                          if (h.isSpecial() && c === "") {
                            return Z;
                          }
                          if (t && c === "" && (h.includesCredentials() || h.port !== null)) {
                            return;
                          }
                          if (o = h.parseHost(c)) {
                            return o;
                          }
                          c = "";
                          l = ze;
                          if (t) {
                            return;
                          }
                          continue;
                        }
                        if (s === "[") {
                          m = true;
                        } else if (s === "]") {
                          m = false;
                        }
                        c += s;
                      } else {
                        if (c === "") {
                          return Z;
                        }
                        if (t === Ne) {
                          return;
                        }
                        if (o = h.parseHost(c)) {
                          return o;
                        }
                        c = "";
                        l = Ge;
                      }
                      break;
                    case Ge:
                      if (!F(te, s)) {
                        if (s === r || s === "/" || s === "?" || s === "#" || s === "\\" && h.isSpecial() || t) {
                          if (c !== "") {
                            var b = I(c, 10);
                            if (b > 65535) {
                              return $;
                            }
                            h.port = h.isSpecial() && b === Te[h.scheme] ? null : b;
                            c = "";
                          }
                          if (t) {
                            return;
                          }
                          l = ze;
                          continue;
                        }
                        return $;
                      }
                      c += s;
                      break;
                    case Ue:
                      h.scheme = "file";
                      h.host = "";
                      if (s === "/" || s === "\\") {
                        l = Ve;
                      } else {
                        if (!n || n.scheme !== "file") {
                          l = We;
                          continue;
                        }
                        switch (s) {
                          case r:
                            h.host = n.host;
                            h.path = _(n.path);
                            h.query = n.query;
                            break;
                          case "?":
                            h.host = n.host;
                            h.path = _(n.path);
                            h.query = "";
                            l = Ye;
                            break;
                          case "#":
                            h.host = n.host;
                            h.path = _(n.path);
                            h.query = n.query;
                            h.fragment = "";
                            l = qe;
                            break;
                          default:
                            h.host = n.host;
                            if (!Ce(N(_(i, d), ""))) {
                              h.path = _(n.path);
                              h.shortenPath();
                            }
                            l = We;
                            continue;
                        }
                      }
                      break;
                    case Ve:
                      if (s === "/" || s === "\\") {
                        l = He;
                        break;
                      }
                      if (n && n.scheme === "file") {
                        h.host = n.host;
                        if (!Ce(N(_(i, d), "")) && Ae(n.path[0], true)) {
                          V(h.path, n.path[0]);
                        }
                      }
                      l = We;
                      continue;
                    case He:
                      if (s === r || s === "/" || s === "\\" || s === "?" || s === "#") {
                        if (!t && Ae(c)) {
                          l = We;
                        } else if (c === "") {
                          h.host = "";
                          if (t) {
                            return;
                          }
                          l = ze;
                        } else {
                          if (o = h.parseHost(c)) {
                            return o;
                          }
                          if (h.host === "localhost") {
                            h.host = "";
                          }
                          if (t) {
                            return;
                          }
                          c = "";
                          l = ze;
                        }
                        continue;
                      }
                      c += s;
                      break;
                    case ze:
                      if (h.isSpecial()) {
                        l = We;
                        if (s !== "/" && s !== "\\") {
                          continue;
                        }
                      } else if (t || s !== "?") {
                        if (t || s !== "#") {
                          if (s !== r && (l = We, s !== "/")) {
                            continue;
                          }
                        } else {
                          h.fragment = "";
                          l = qe;
                        }
                      } else {
                        h.query = "";
                        l = Ye;
                      }
                      break;
                    case We:
                      if (s === r || s === "/" || s === "\\" && h.isSpecial() || !t && (s === "?" || s === "#")) {
                        if (Ee(c)) {
                          h.shortenPath();
                          if (s !== "/" && (s !== "\\" || !h.isSpecial())) {
                            V(h.path, "");
                          }
                        } else if (Se(c)) {
                          if (s !== "/" && (s !== "\\" || !h.isSpecial())) {
                            V(h.path, "");
                          }
                        } else {
                          if (h.scheme === "file" && !h.path.length && Ae(c)) {
                            if (h.host !== null && h.host !== "") {
                              h.host = "";
                            }
                            c = D(c, 0) + ":";
                          }
                          V(h.path, c);
                        }
                        c = "";
                        if (h.scheme === "file" && (s === r || s === "?" || s === "#")) {
                          while (h.path.length > 1 && h.path[0] === "") {
                            z(h.path);
                          }
                        }
                        if (s === "?") {
                          h.query = "";
                          l = Ye;
                        } else if (s === "#") {
                          h.fragment = "";
                          l = qe;
                        }
                      } else {
                        c += be(s, we);
                      }
                      break;
                    case Xe:
                      if (s === "?") {
                        h.query = "";
                        l = Ye;
                      } else if (s === "#") {
                        h.fragment = "";
                        l = qe;
                      } else if (s !== r) {
                        h.path[0] += s === " " ? i[d + 1] === "?" || i[d + 1] === "#" ? "%20" : " " : be(s, _e);
                      }
                      break;
                    case Ye:
                      if (t || s !== "#") {
                        if (s !== r) {
                          h.query += be(s, h.isSpecial() ? ye : ve);
                        }
                      } else {
                        h.fragment = "";
                        l = qe;
                      }
                      break;
                    case qe:
                      if (s !== r) {
                        h.fragment += be(s, ge);
                      }
                  }
                  d++;
                }
              },
              parseHost: function (e) {
                var t;
                var n;
                var r;
                if (D(e, 0) === "[") {
                  if (D(e, e.length - 1) !== "]") {
                    return Z;
                  }
                  t = function (e) {
                    var t;
                    var n;
                    var r;
                    var i;
                    var s;
                    var a;
                    var o;
                    var h = [0, 0, 0, 0, 0, 0, 0, 0];
                    var l = 0;
                    var d = null;
                    var c = 0;
                    function u() {
                      return D(e, c);
                    }
                    if (u() === ":") {
                      if (D(e, 1) !== ":") {
                        return;
                      }
                      c += 2;
                      d = ++l;
                    }
                    while (u()) {
                      if (l === 8) {
                        return;
                      }
                      if (u() !== ":") {
                        for (t = n = 0; n < 4 && F(se, u());) {
                          t = t * 16 + I(u(), 16);
                          c++;
                          n++;
                        }
                        if (u() === ".") {
                          if (n === 0) {
                            return;
                          }
                          c -= n;
                          if (l > 6) {
                            return;
                          }
                          for (r = 0; u();) {
                            i = null;
                            if (r > 0) {
                              if (u() !== "." || !(r < 4)) {
                                return;
                              }
                              c++;
                            }
                            if (!F(te, u())) {
                              return;
                            }
                            while (F(te, u())) {
                              s = I(u(), 10);
                              if (i === null) {
                                i = s;
                              } else {
                                if (i === 0) {
                                  return;
                                }
                                i = i * 10 + s;
                              }
                              if (i > 255) {
                                return;
                              }
                              c++;
                            }
                            h[l] = h[l] * 256 + i;
                            if (++r === 2 || r === 4) {
                              l++;
                            }
                          }
                          if (r !== 4) {
                            return;
                          }
                          break;
                        }
                        if (u() === ":") {
                          c++;
                          if (!u()) {
                            return;
                          }
                        } else if (u()) {
                          return;
                        }
                        h[l++] = t;
                      } else {
                        if (d !== null) {
                          return;
                        }
                        c++;
                        d = ++l;
                      }
                    }
                    if (d !== null) {
                      a = l - d;
                      l = 7;
                      while (l !== 0 && a > 0) {
                        o = h[l];
                        h[l--] = h[d + a - 1];
                        h[d + --a] = o;
                      }
                    } else if (l !== 8) {
                      return;
                    }
                    return h;
                  }(Y(e, 1, -1));
                  if (!t) {
                    return Z;
                  }
                  this.host = t;
                } else if (this.isSpecial()) {
                  e = function (e) {
                    if (!F(ce, e)) {
                      if (e === "") {
                        return null;
                      } else {
                        return y(e);
                      }
                    }
                    var t;
                    var n;
                    var r;
                    var i = f(e);
                    var s = "";
                    for (t = 0; t < i.length; t++) {
                      n = v(i[t], 0);
                      if (pe(n)) {
                        return null;
                      }
                      if (!ue(n)) {
                        s += (r = me(n)) === n ? i[t] : B(r);
                      }
                    }
                    if (s === "") {
                      return null;
                    } else {
                      return y(s);
                    }
                  }(k(e));
                  if (e === null || F(ae, e)) {
                    return Z;
                  }
                  if (function (e) {
                    var t;
                    var n;
                    var r = W(e, ".");
                    if (r[r.length - 1] === "") {
                      if (r.length === 1) {
                        return false;
                      }
                      r.length--;
                    }
                    t = r[r.length - 1];
                    return !!F(ie, t) || !!F(ne, t) && ((n = Y(t, 2)) === "" || !!F(se, n));
                  }(e)) {
                    t = function (e) {
                      var t;
                      var n;
                      var r;
                      var i;
                      var s;
                      var a;
                      var o;
                      var h = W(e, ".");
                      if (h.length && h[h.length - 1] === "") {
                        h.length--;
                      }
                      if ((t = h.length) > 4) {
                        return null;
                      }
                      n = [];
                      r = 0;
                      for (; r < t; r++) {
                        if ((i = h[r]) === "") {
                          return null;
                        }
                        s = 10;
                        if (i.length > 1 && D(i, 0) === "0") {
                          s = F(ne, i) ? 16 : 8;
                          i = Y(i, s === 8 ? 1 : 2);
                        }
                        if (i === "") {
                          a = 0;
                        } else {
                          if (!F(s === 10 ? ie : s === 8 ? re : se, i)) {
                            return null;
                          }
                          a = I(i, s);
                        }
                        V(n, a);
                      }
                      for (r = 0; r < t; r++) {
                        a = n[r];
                        if (r === t - 1) {
                          if (a >= j(256, 5 - t)) {
                            return null;
                          }
                        } else if (a > 255) {
                          return null;
                        }
                      }
                      o = U(n);
                      r = 0;
                      for (; r < n.length; r++) {
                        o += n[r] * j(256, 3 - r);
                      }
                      return o;
                    }(e);
                    if (t === null) {
                      return Z;
                    }
                    this.host = t;
                  } else {
                    this.host = e;
                  }
                } else {
                  if (F(oe, e)) {
                    return Z;
                  }
                  t = "";
                  n = f(e);
                  r = 0;
                  for (; r < n.length; r++) {
                    t += be(n[r], _e);
                  }
                  this.host = t;
                }
              },
              cannotHaveUsernamePasswordPort: function () {
                return this.host === null || this.host === "" || this.cannotBeABaseURL || this.scheme === "file";
              },
              includesCredentials: function () {
                return this.username !== "" || this.password !== "";
              },
              isSpecial: function () {
                return p(Te, this.scheme);
              },
              shortenPath: function () {
                var e = this.path;
                var t = e.length;
                if (!!t && (this.scheme !== "file" || t !== 1 || !Ae(e[0], true))) {
                  e.length--;
                }
              },
              serialize: function () {
                var e = this;
                var t = e.scheme;
                var n = e.username;
                var r = e.password;
                var i = e.host;
                var s = e.port;
                var a = e.path;
                var o = e.query;
                var h = e.fragment;
                var l = t + ":";
                if (i !== null) {
                  l += "//";
                  if (e.includesCredentials()) {
                    l += n + (r ? ":" + r : "") + "@";
                  }
                  l += fe(i);
                  if (s !== null) {
                    l += ":" + s;
                  }
                } else if (t === "file") {
                  l += "//";
                }
                if (i === null && !e.cannotBeABaseURL && a.length > 1 && a[0] === "") {
                  l += "/.";
                }
                l += e.cannotBeABaseURL ? a[0] : a.length ? "/" + N(a, "/") : "";
                if (o !== null) {
                  l += "?" + o;
                }
                if (h !== null) {
                  l += "#" + h;
                }
                return l;
              },
              setHref: function (e) {
                var t = this.parse(e);
                if (t) {
                  throw new R(t);
                }
                this.searchParams.update();
              },
              getOrigin: function () {
                var e = this.scheme;
                var t = this.port;
                if (e === "blob") {
                  try {
                    return new Ke(this.path[0]).origin;
                  } catch (e) {
                    return "null";
                  }
                }
                if (e !== "file" && this.isSpecial()) {
                  return e + "://" + fe(this.host) + (t !== null ? ":" + t : "");
                } else {
                  return "null";
                }
              },
              getProtocol: function () {
                return this.scheme + ":";
              },
              setProtocol: function (e) {
                this.parse(w(e) + ":", Oe);
              },
              getUsername: function () {
                return this.username;
              },
              setUsername: function (e) {
                var t = f(w(e));
                if (!this.cannotHaveUsernamePasswordPort()) {
                  this.username = "";
                  for (var n = 0; n < t.length; n++) {
                    this.username += be(t[n], xe);
                  }
                }
              },
              getPassword: function () {
                return this.password;
              },
              setPassword: function (e) {
                var t = f(w(e));
                if (!this.cannotHaveUsernamePasswordPort()) {
                  this.password = "";
                  for (var n = 0; n < t.length; n++) {
                    this.password += be(t[n], xe);
                  }
                }
              },
              getHost: function () {
                var e = this.host;
                var t = this.port;
                if (e === null) {
                  return "";
                } else if (t === null) {
                  return fe(e);
                } else {
                  return fe(e) + ":" + t;
                }
              },
              setHost: function (e) {
                if (!this.cannotBeABaseURL) {
                  this.parse(e, Fe);
                }
              },
              getHostname: function () {
                var e = this.host;
                if (e === null) {
                  return "";
                } else {
                  return fe(e);
                }
              },
              setHostname: function (e) {
                if (!this.cannotBeABaseURL) {
                  this.parse(e, Ne);
                }
              },
              getPort: function () {
                var e = this.port;
                if (e === null) {
                  return "";
                } else {
                  return w(e);
                }
              },
              setPort: function (e) {
                if (!this.cannotHaveUsernamePasswordPort()) {
                  if ((e = w(e)) === "") {
                    this.port = null;
                  } else {
                    this.parse(e, Ge);
                  }
                }
              },
              getPathname: function () {
                var e = this.path;
                if (this.cannotBeABaseURL) {
                  return e[0];
                } else if (e.length) {
                  return "/" + N(e, "/");
                } else {
                  return "";
                }
              },
              setPathname: function (e) {
                if (!this.cannotBeABaseURL) {
                  this.path = [];
                  this.parse(e, ze);
                }
              },
              getSearch: function () {
                var e = this.query;
                if (e) {
                  return "?" + e;
                } else {
                  return "";
                }
              },
              setSearch: function (e) {
                if ((e = w(e)) === "") {
                  this.query = null;
                } else {
                  if (D(e, 0) === "?") {
                    e = Y(e, 1);
                  }
                  this.query = "";
                  this.parse(e, Ye);
                }
                this.searchParams.update();
              },
              getSearchParams: function () {
                return this.searchParams.facade;
              },
              getHash: function () {
                var e = this.fragment;
                if (e) {
                  return "#" + e;
                } else {
                  return "";
                }
              },
              setHash: function (e) {
                if ((e = w(e)) !== "") {
                  if (D(e, 0) === "#") {
                    e = Y(e, 1);
                  }
                  this.fragment = "";
                  this.parse(e, qe);
                } else {
                  this.fragment = null;
                }
              },
              update: function () {
                this.query = this.searchParams.serialize() || null;
              }
            };
            function Ke(e) {
              var t = u(this, Ze);
              var n = b(arguments.length, 1) > 1 ? arguments[1] : undefined;
              var r = C(t, new Je(e, false, n));
              if (!s) {
                t.href = r.serialize();
                t.origin = r.getOrigin();
                t.protocol = r.getProtocol();
                t.username = r.getUsername();
                t.password = r.getPassword();
                t.host = r.getHost();
                t.hostname = r.getHostname();
                t.port = r.getPort();
                t.pathname = r.getPathname();
                t.search = r.getSearch();
                t.searchParams = r.getSearchParams();
                t.hash = r.getHash();
              }
            }
            var Ze = Ke.prototype;
            function $e(e, t) {
              return {
                get: function () {
                  return S(this)[e]();
                },
                set: t && function (e) {
                  return S(this)[t](e);
                },
                configurable: true,
                enumerable: true
              };
            }
            if (s) {
              c(Ze, "href", $e("serialize", "setHref"));
              c(Ze, "origin", $e("getOrigin"));
              c(Ze, "protocol", $e("getProtocol", "setProtocol"));
              c(Ze, "username", $e("getUsername", "setUsername"));
              c(Ze, "password", $e("getPassword", "setPassword"));
              c(Ze, "host", $e("getHost", "setHost"));
              c(Ze, "hostname", $e("getHostname", "setHostname"));
              c(Ze, "port", $e("getPort", "setPort"));
              c(Ze, "pathname", $e("getPathname", "setPathname"));
              c(Ze, "search", $e("getSearch", "setSearch"));
              c(Ze, "searchParams", $e("getSearchParams"));
              c(Ze, "hash", $e("getHash", "setHash"));
            }
            d(Ze, "toJSON", function () {
              return S(this).serialize();
            }, {
              enumerable: true
            });
            d(Ze, "toString", function () {
              return S(this).serialize();
            }, {
              enumerable: true
            });
            if (M) {
              var Qe = M.createObjectURL;
              var et = M.revokeObjectURL;
              if (Qe) {
                d(Ke, "createObjectURL", h(Qe, M));
              }
              if (et) {
                d(Ke, "revokeObjectURL", h(et, M));
              }
            }
            x(Ke, "URL");
            i({
              global: true,
              constructor: true,
              forced: !a,
              sham: !s
            }, {
              URL: Ke
            });
          }
    });
})();
