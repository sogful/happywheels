(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        96319(e, t, n) {
            "use strict";
        
            var r = n(28551);
            var i = n(9539);
            e.exports = function (e, t, n, s) {
              try {
                if (s) {
                  return t(r(n)[0], n[1]);
                } else {
                  return t(n);
                }
              } catch (t) {
                i(e, "throw", t);
              }
            };
          },
        84428(e, t, n) {
            "use strict";
        
            var r = n(78227)("iterator");
            var i = false;
            try {
              var s = 0;
              var a = {
                next: function () {
                  return {
                    done: !!s++
                  };
                },
                return: function () {
                  i = true;
                }
              };
              a[r] = function () {
                return this;
              };
              Array.from(a, function () {
                throw 2;
              });
            } catch (e) {}
            e.exports = function (e, t) {
              try {
                if (!t && !i) {
                  return false;
                }
              } catch (e) {
                return false;
              }
              var n = false;
              try {
                var s = {
                  [r]: function () {
                    return {
                      next: function () {
                        return {
                          done: n = true
                        };
                      }
                    };
                  }
                };
                e(s);
              } catch (e) {}
              return n;
            };
          },
        22195(e, t, n) {
            "use strict";
        
            var r = n(79504);
            var i = r({}.toString);
            var s = r("".slice);
            e.exports = function (e) {
              return s(i(e), 8, -1);
            };
          },
        36955(e, t, n) {
            "use strict";
        
            var r = n(92140);
            var i = n(94901);
            var s = n(22195);
            var a = n(78227)("toStringTag");
            var o = Object;
            var h = s(function () {
              return arguments;
            }()) === "Arguments";
            e.exports = r ? s : function (e) {
              var t;
              var n;
              var r;
              if (e === undefined) {
                return "Undefined";
              } else if (e === null) {
                return "Null";
              } else if (typeof (n = function (e, t) {
                try {
                  return e[t];
                } catch (e) {}
              }(t = o(e), a)) == "string") {
                return n;
              } else if (h) {
                return s(t);
              } else if ((r = s(t)) === "Object" && i(t.callee)) {
                return "Arguments";
              } else {
                return r;
              }
            };
          },
        86938(e, t, n) {
            "use strict";
        
            var r = n(2360);
            var i = n(62106);
            var s = n(56279);
            var a = n(76080);
            var o = n(90679);
            var h = n(64117);
            var l = n(72652);
            var d = n(51088);
            var c = n(62529);
            var u = n(87633);
            var p = n(43724);
            var m = n(3451).fastKey;
            var f = n(91181);
            var _ = f.set;
            var v = f.getterFor;
            e.exports = {
              getConstructor: function (e, t, n, d) {
                var c = e(function (e, i) {
                  o(e, u);
                  _(e, {
                    type: t,
                    index: r(null),
                    first: null,
                    last: null,
                    size: 0
                  });
                  if (!p) {
                    e.size = 0;
                  }
                  if (!h(i)) {
                    l(i, e[d], {
                      that: e,
                      AS_ENTRIES: n
                    });
                  }
                });
                var u = c.prototype;
                var f = v(t);
                function y(e, t, n) {
                  var r;
                  var i;
                  var s = f(e);
                  var a = g(e, t);
                  if (a) {
                    a.value = n;
                  } else {
                    s.last = a = {
                      index: i = m(t, true),
                      key: t,
                      value: n,
                      previous: r = s.last,
                      next: null,
                      removed: false
                    };
                    s.first ||= a;
                    if (r) {
                      r.next = a;
                    }
                    if (p) {
                      s.size++;
                    } else {
                      e.size++;
                    }
                    if (i !== "F") {
                      s.index[i] = a;
                    }
                  }
                  return e;
                }
                function g(e, t) {
                  var n;
                  var r = f(e);
                  var i = m(t);
                  if (i !== "F") {
                    return r.index[i];
                  }
                  for (n = r.first; n; n = n.next) {
                    if (n.key === t) {
                      return n;
                    }
                  }
                }
                s(u, {
                  clear: function () {
                    var e = f(this);
                    for (var t = e.first; t;) {
                      t.removed = true;
                      t.previous &&= t.previous.next = null;
                      t = t.next;
                    }
                    e.first = e.last = null;
                    e.index = r(null);
                    if (p) {
                      e.size = 0;
                    } else {
                      this.size = 0;
                    }
                  },
                  delete: function (e) {
                    var t = this;
                    var n = f(t);
                    var r = g(t, e);
                    if (r) {
                      var i = r.next;
                      var s = r.previous;
                      delete n.index[r.index];
                      r.removed = true;
                      if (s) {
                        s.next = i;
                      }
                      if (i) {
                        i.previous = s;
                      }
                      if (n.first === r) {
                        n.first = i;
                      }
                      if (n.last === r) {
                        n.last = s;
                      }
                      if (p) {
                        n.size--;
                      } else {
                        t.size--;
                      }
                    }
                    return !!r;
                  },
                  forEach: function (e) {
                    for (var t, n = f(this), r = a(e, arguments.length > 1 ? arguments[1] : undefined); t = t ? t.next : n.first;) {
                      for (r(t.value, t.key, this); t && t.removed;) {
                        t = t.previous;
                      }
                    }
                  },
                  has: function (e) {
                    return !!g(this, e);
                  }
                });
                s(u, n ? {
                  get: function (e) {
                    var t = g(this, e);
                    return t && t.value;
                  },
                  set: function (e, t) {
                    return y(this, e === 0 ? 0 : e, t);
                  }
                } : {
                  add: function (e) {
                    return y(this, e = e === 0 ? 0 : e, e);
                  }
                });
                if (p) {
                  i(u, "size", {
                    configurable: true,
                    get: function () {
                      return f(this).size;
                    }
                  });
                }
                return c;
              },
              setStrong: function (e, t, n) {
                var r = t + " Iterator";
                var i = v(t);
                var s = v(r);
                d(e, t, function (e, t) {
                  _(this, {
                    type: r,
                    target: e,
                    state: i(e),
                    kind: t,
                    last: null
                  });
                }, function () {
                  var e = s(this);
                  var t = e.kind;
                  for (var n = e.last; n && n.removed;) {
                    n = n.previous;
                  }
                  if (e.target && (e.last = n = n ? n.next : e.state.first)) {
                    return c(t === "keys" ? n.key : t === "values" ? n.value : [n.key, n.value], false);
                  } else {
                    e.target = null;
                    return c(undefined, true);
                  }
                }, n ? "entries" : "values", !n, true);
                u(t);
              }
            };
          },
        91625(e, t, n) {
            "use strict";
        
            var r = n(79504);
            var i = n(56279);
            var s = n(3451).getWeakData;
            var a = n(90679);
            var o = n(28551);
            var h = n(64117);
            var l = n(20034);
            var d = n(72652);
            var c = n(59213);
            var u = n(39297);
            var p = n(91181);
            var m = p.set;
            var f = p.getterFor;
            var _ = c.find;
            var v = c.findIndex;
            var y = r([].splice);
            var g = 0;
            function w(e) {
              return e.frozen ||= new x();
            }
            function x() {
              this.entries = [];
            }
            function b(e, t) {
              return _(e.entries, function (e) {
                return e[0] === t;
              });
            }
            x.prototype = {
              get: function (e) {
                var t = b(this, e);
                if (t) {
                  return t[1];
                }
              },
              has: function (e) {
                return !!b(this, e);
              },
              set: function (e, t) {
                var n = b(this, e);
                if (n) {
                  n[1] = t;
                } else {
                  this.entries.push([e, t]);
                }
              },
              delete: function (e) {
                var t = v(this.entries, function (t) {
                  return t[0] === e;
                });
                if (~t) {
                  y(this.entries, t, 1);
                }
                return !!~t;
              }
            };
            e.exports = {
              getConstructor: function (e, t, n, r) {
                var c = e(function (e, i) {
                  a(e, p);
                  m(e, {
                    type: t,
                    id: g++,
                    frozen: null
                  });
                  if (!h(i)) {
                    d(i, e[r], {
                      that: e,
                      AS_ENTRIES: n
                    });
                  }
                });
                var p = c.prototype;
                var _ = f(t);
                function v(e, t, n) {
                  var r = _(e);
                  var i = s(o(t), true);
                  if (i === true) {
                    w(r).set(t, n);
                  } else {
                    i[r.id] = n;
                  }
                  return e;
                }
                i(p, {
                  delete: function (e) {
                    var t = _(this);
                    if (!l(e)) {
                      return false;
                    }
                    var n = s(e);
                    if (n === true) {
                      return w(t).delete(e);
                    } else {
                      return n && u(n, t.id) && delete n[t.id];
                    }
                  },
                  has: function (e) {
                    var t = _(this);
                    if (!l(e)) {
                      return false;
                    }
                    var n = s(e);
                    if (n === true) {
                      return w(t).has(e);
                    } else {
                      return n && u(n, t.id);
                    }
                  }
                });
                i(p, n ? {
                  get: function (e) {
                    var t = _(this);
                    if (l(e)) {
                      var n = s(e);
                      if (n === true) {
                        return w(t).get(e);
                      }
                      if (n) {
                        return n[t.id];
                      }
                    }
                  },
                  set: function (e, t) {
                    return v(this, e, t);
                  }
                } : {
                  add: function (e) {
                    return v(this, e, true);
                  }
                });
                return c;
              }
            };
          },
        16468(e, t, n) {
            "use strict";
        
            var r = n(46518);
            var i = n(44576);
            var s = n(79504);
            var a = n(92796);
            var o = n(36840);
            var h = n(3451);
            var l = n(72652);
            var d = n(90679);
            var c = n(94901);
            var u = n(64117);
            var p = n(20034);
            var m = n(79039);
            var f = n(84428);
            var _ = n(10687);
            var v = n(23167);
            e.exports = function (e, t, n) {
              var y = e.indexOf("Map") !== -1;
              var g = e.indexOf("Weak") !== -1;
              var w = y ? "set" : "add";
              var x = i[e];
              var b = x && x.prototype;
              var T = x;
              var A = {};
              function C(e) {
                var t = s(b[e]);
                o(b, e, e === "add" ? function (e) {
                  t(this, e === 0 ? 0 : e);
                  return this;
                } : e === "delete" ? function (e) {
                  return (!g || !!p(e)) && t(this, e === 0 ? 0 : e);
                } : e === "get" ? function (e) {
                  if (g && !p(e)) {
                    return undefined;
                  } else {
                    return t(this, e === 0 ? 0 : e);
                  }
                } : e === "has" ? function (e) {
                  return (!g || !!p(e)) && t(this, e === 0 ? 0 : e);
                } : function (e, n) {
                  t(this, e === 0 ? 0 : e, n);
                  return this;
                });
              }
              if (a(e, !c(x) || !g && (!b.forEach || !!m(function () {
                new x().entries().next();
              })))) {
                T = n.getConstructor(t, e, y, w);
                h.enable();
              } else if (a(e, true)) {
                var S = new T();
                var E = S[w](g ? {} : -0, 1) !== S;
                var O = m(function () {
                  S.has(1);
                });
                var k = f(function (e) {
                  new x(e);
                });
                var P = !g && m(function () {
                  var e = new x();
                  for (var t = 5; t--;) {
                    e[w](t, t);
                  }
                  return !e.has(-0);
                });
                if (!k) {
                  (T = t(function (e, t) {
                    d(e, b);
                    var n = v(new x(), e, T);
                    if (!u(t)) {
                      l(t, n[w], {
                        that: n,
                        AS_ENTRIES: y
                      });
                    }
                    return n;
                  })).prototype = b;
                  b.constructor = T;
                }
                if (O || P) {
                  C("delete");
                  C("has");
                  if (y) {
                    C("get");
                  }
                }
                if (P || E) {
                  C(w);
                }
                if (g && b.clear) {
                  delete b.clear;
                }
              }
              A[e] = T;
              r({
                global: true,
                constructor: true,
                forced: T !== x
              }, A);
              _(T, e);
              if (!g) {
                n.setStrong(T, e, y);
              }
              return T;
            };
          },
        77740(e, t, n) {
            "use strict";
        
            var r = n(39297);
            var i = n(35031);
            var s = n(77347);
            var a = n(24913);
            e.exports = function (e, t, n) {
              for (var o = i(t), h = a.f, l = s.f, d = 0; d < o.length; d++) {
                var c = o[d];
                if (!r(e, c) && (!n || !r(n, c))) {
                  h(e, c, l(t, c));
                }
              }
            };
          },
        41436(e, t, n) {
            "use strict";
        
            var r = n(78227)("match");
            e.exports = function (e) {
              var t = /./;
              try {
                "/./"[e](t);
              } catch (n) {
                try {
                  t[r] = false;
                  return "/./"[e](t);
                } catch (e) {}
              }
              return false;
            };
          },
        12211(e, t, n) {
            "use strict";
        
            var r = n(79039);
            e.exports = !r(function () {
              function e() {}
              e.prototype.constructor = null;
              return Object.getPrototypeOf(new e()) !== e.prototype;
            });
          },
        77240(e, t, n) {
            "use strict";
        
            var r = n(79504);
            var i = n(67750);
            var s = n(655);
            var a = /"/g;
            var o = r("".replace);
            e.exports = function (e, t, n, r) {
              var h = s(i(e));
              var l = "<" + t;
              if (n !== "") {
                l += " " + n + "=\"" + o(s(r), a, "&quot;") + "\"";
              }
              return l + ">" + h + "</" + t + ">";
            };
          },
        62529(e) {
            "use strict";
        
            e.exports = function (e, t) {
              return {
                value: e,
                done: t
              };
            };
          },
        66699(e, t, n) {
            "use strict";
        
            var r = n(43724);
            var i = n(24913);
            var s = n(6980);
            e.exports = r ? function (e, t, n) {
              return i.f(e, t, s(1, n));
            } : function (e, t, n) {
              e[t] = n;
              return e;
            };
          },
        6980(e) {
            "use strict";
        
            e.exports = function (e, t) {
              return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
              };
            };
          },
        97040(e, t, n) {
            "use strict";
        
            var r = n(43724);
            var i = n(24913);
            var s = n(6980);
            e.exports = function (e, t, n) {
              if (r) {
                i.f(e, t, s(0, n));
              } else {
                e[t] = n;
              }
            };
          },
        53640(e, t, n) {
            "use strict";
        
            var r = n(28551);
            var i = n(84270);
            var s = TypeError;
            e.exports = function (e) {
              r(this);
              if (e === "string" || e === "default") {
                e = "string";
              } else if (e !== "number") {
                throw new s("Incorrect hint");
              }
              return i(this, e);
            };
          },
        62106(e, t, n) {
            "use strict";
        
            var r = n(50283);
            var i = n(24913);
            e.exports = function (e, t, n) {
              if (n.get) {
                r(n.get, t, {
                  getter: true
                });
              }
              if (n.set) {
                r(n.set, t, {
                  setter: true
                });
              }
              return i.f(e, t, n);
            };
          },
        36840(e, t, n) {
            "use strict";
        
            var r = n(94901);
            var i = n(24913);
            var s = n(50283);
            var a = n(39433);
            e.exports = function (e, t, n, o) {
              o ||= {};
              var h = o.enumerable;
              var l = o.name !== undefined ? o.name : t;
              if (r(n)) {
                s(n, l, o);
              }
              if (o.global) {
                if (h) {
                  e[t] = n;
                } else {
                  a(t, n);
                }
              } else {
                try {
                  if (o.unsafe) {
                    if (e[t]) {
                      h = true;
                    }
                  } else {
                    delete e[t];
                  }
                } catch (e) {}
                if (h) {
                  e[t] = n;
                } else {
                  i.f(e, t, {
                    value: n,
                    enumerable: false,
                    configurable: !o.nonConfigurable,
                    writable: !o.nonWritable
                  });
                }
              }
              return e;
            };
          },
        56279(e, t, n) {
            "use strict";
        
            var r = n(36840);
            e.exports = function (e, t, n) {
              for (var i in t) {
                r(e, i, t[i], n);
              }
              return e;
            };
          },
        39433(e, t, n) {
            "use strict";
        
            var r = n(44576);
            var i = Object.defineProperty;
            e.exports = function (e, t) {
              try {
                i(r, e, {
                  value: t,
                  configurable: true,
                  writable: true
                });
              } catch (n) {
                r[e] = t;
              }
              return t;
            };
          },
        84606(e, t, n) {
            "use strict";
        
            var r = n(16823);
            var i = TypeError;
            e.exports = function (e, t) {
              if (!delete e[t]) {
                throw new i("Cannot delete property " + r(t) + " of " + r(e));
              }
            };
          },
        43724(e, t, n) {
            "use strict";
        
            var r = n(79039);
            e.exports = !r(function () {
              return Object.defineProperty({}, 1, {
                get: function () {
                  return 7;
                }
              })[1] !== 7;
            });
          },
        4055(e, t, n) {
            "use strict";
        
            var r = n(44576);
            var i = n(20034);
            var s = r.document;
            var a = i(s) && i(s.createElement);
            e.exports = function (e) {
              if (a) {
                return s.createElement(e);
              } else {
                return {};
              }
            };
          },
        96837(e) {
            "use strict";
        
            var t = TypeError;
            e.exports = function (e) {
              if (e > 9007199254740991) {
                throw new t("Maximum allowed index exceeded");
              }
              return e;
            };
          },
        67400(e) {
            "use strict";
        
            e.exports = {
              CSSRuleList: 0,
              CSSStyleDeclaration: 0,
              CSSValueList: 0,
              ClientRectList: 0,
              DOMRectList: 0,
              DOMStringList: 0,
              DOMTokenList: 1,
              DataTransferItemList: 0,
              FileList: 0,
              HTMLAllCollection: 0,
              HTMLCollection: 0,
              HTMLFormElement: 0,
              HTMLSelectElement: 0,
              MediaList: 0,
              MimeTypeArray: 0,
              NamedNodeMap: 0,
              NodeList: 1,
              PaintRequestList: 0,
              Plugin: 0,
              PluginArray: 0,
              SVGLengthList: 0,
              SVGNumberList: 0,
              SVGPathSegList: 0,
              SVGPointList: 0,
              SVGStringList: 0,
              SVGTransformList: 0,
              SourceBufferList: 0,
              StyleSheetList: 0,
              TextTrackCueList: 0,
              TextTrackList: 0,
              TouchList: 0
            };
          },
        79296(e, t, n) {
            "use strict";
        
            var r = n(4055)("span").classList;
            var i = r && r.constructor && r.constructor.prototype;
            e.exports = i === Object.prototype ? undefined : i;
          },
        88727(e) {
            "use strict";
        
            e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
          },
        13709(e, t, n) {
            "use strict";
        
            var r = n(82839).match(/firefox\/(\d+)/i);
            e.exports = !!r && +r[1];
          },
        13763(e, t, n) {
            "use strict";
        
            var r = n(82839);
            e.exports = /MSIE|Trident/.test(r);
          },
        44265(e, t, n) {
            "use strict";
        
            var r = n(82839);
            e.exports = /ipad|iphone|ipod/i.test(r) && typeof Pebble != "undefined";
          },
        89544(e, t, n) {
            "use strict";
        
            var r = n(82839);
            e.exports = /ipad|iphone|ipod/i.test(r) && /applewebkit/i.test(r);
          },
        16193(e, t, n) {
            "use strict";
        
            var r = n(84215);
            e.exports = r === "NODE";
          }
    });
})();
