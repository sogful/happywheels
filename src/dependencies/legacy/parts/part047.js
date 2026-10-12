(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        87348(e, t, n) {
            var r;
            var i;
            var s = n(45193);
            var a = n(59740).c;
            function o(e, t, n) {
              return (!n && e.spaces ? "\n" : "") + Array(t + 1).join(e.spaces);
            }
            function h(e, t, n) {
              if (t.ignoreAttributes) {
                return "";
              }
              if ("attributesFn" in t) {
                e = t.attributesFn(e, i, r);
              }
              var s;
              var a;
              var h;
              var l;
              var d = [];
              for (s in e) {
                if (e.hasOwnProperty(s) && e[s] !== null && e[s] !== undefined) {
                  l = t.noQuotesForNativeAttributes && typeof e[s] != "string" ? "" : "\"";
                  a = (a = "" + e[s]).replace(/"/g, "&quot;");
                  h = "attributeNameFn" in t ? t.attributeNameFn(s, a, i, r) : s;
                  d.push(t.spaces && t.indentAttributes ? o(t, n + 1, false) : " ");
                  d.push(h + "=" + l + ("attributeValueFn" in t ? t.attributeValueFn(a, s, i, r) : a) + l);
                }
              }
              if (e && Object.keys(e).length && t.spaces && t.indentAttributes) {
                d.push(o(t, n, false));
              }
              return d.join("");
            }
            function l(e, t, n) {
              r = e;
              i = "xml";
              if (t.ignoreDeclaration) {
                return "";
              } else {
                return "<?xml" + h(e[t.attributesKey], t, n) + "?>";
              }
            }
            function d(e, t, n) {
              if (t.ignoreInstruction) {
                return "";
              }
              var s;
              for (s in e) {
                if (e.hasOwnProperty(s)) {
                  break;
                }
              }
              var a = "instructionNameFn" in t ? t.instructionNameFn(s, e[s], i, r) : s;
              if (typeof e[s] == "object") {
                r = e;
                i = a;
                return "<?" + a + h(e[s][t.attributesKey], t, n) + "?>";
              }
              var o = e[s] ? e[s] : "";
              if ("instructionFn" in t) {
                o = t.instructionFn(o, s, i, r);
              }
              return "<?" + a + (o ? " " + o : "") + "?>";
            }
            function c(e, t) {
              if (t.ignoreComment) {
                return "";
              } else {
                return "<!--" + ("commentFn" in t ? t.commentFn(e, i, r) : e) + "-->";
              }
            }
            function u(e, t) {
              if (t.ignoreCdata) {
                return "";
              } else {
                return "<![CDATA[" + ("cdataFn" in t ? t.cdataFn(e, i, r) : e.replace("]]>", "]]]]><![CDATA[>")) + "]]>";
              }
            }
            function p(e, t) {
              if (t.ignoreDoctype) {
                return "";
              } else {
                return "<!DOCTYPE " + ("doctypeFn" in t ? t.doctypeFn(e, i, r) : e) + ">";
              }
            }
            function m(e, t) {
              if (t.ignoreText) {
                return "";
              } else {
                e = (e = (e = "" + e).replace(/&amp;/g, "&")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
                if ("textFn" in t) {
                  return t.textFn(e, i, r);
                } else {
                  return e;
                }
              }
            }
            function f(e, t, n, s) {
              return e.reduce(function (e, a) {
                var l = o(t, n, s && !e);
                switch (a.type) {
                  case "element":
                    return e + l + function (e, t, n) {
                      r = e;
                      i = e.name;
                      var s = [];
                      var a = "elementNameFn" in t ? t.elementNameFn(e.name, e) : e.name;
                      s.push("<" + a);
                      if (e[t.attributesKey]) {
                        s.push(h(e[t.attributesKey], t, n));
                      }
                      var o = e[t.elementsKey] && e[t.elementsKey].length || e[t.attributesKey] && e[t.attributesKey]["xml:space"] === "preserve";
                      o ||= "fullTagEmptyElementFn" in t ? t.fullTagEmptyElementFn(e.name, e) : t.fullTagEmptyElement;
                      if (o) {
                        s.push(">");
                        if (e[t.elementsKey] && e[t.elementsKey].length) {
                          s.push(f(e[t.elementsKey], t, n + 1));
                          r = e;
                          i = e.name;
                        }
                        s.push(t.spaces && function (e, t) {
                          var n;
                          if (e.elements && e.elements.length) {
                            for (n = 0; n < e.elements.length; ++n) {
                              switch (e.elements[n][t.typeKey]) {
                                case "text":
                                  if (t.indentText) {
                                    return true;
                                  }
                                  break;
                                case "cdata":
                                  if (t.indentCdata) {
                                    return true;
                                  }
                                  break;
                                case "instruction":
                                  if (t.indentInstruction) {
                                    return true;
                                  }
                                  break;
                                default:
                                  return true;
                              }
                            }
                          }
                          return false;
                        }(e, t) ? "\n" + Array(n + 1).join(t.spaces) : "");
                        s.push("</" + a + ">");
                      } else {
                        s.push("/>");
                      }
                      return s.join("");
                    }(a, t, n);
                  case "comment":
                    return e + l + c(a[t.commentKey], t);
                  case "doctype":
                    return e + l + p(a[t.doctypeKey], t);
                  case "cdata":
                    return e + (t.indentCdata ? l : "") + u(a[t.cdataKey], t);
                  case "text":
                    return e + (t.indentText ? l : "") + m(a[t.textKey], t);
                  case "instruction":
                    var _ = {
                      [a[t.nameKey]]: a[t.attributesKey] ? a : a[t.instructionKey]
                    };
                    return e + (t.indentInstruction ? l : "") + d(_, t, n);
                }
              }, "");
            }
            function _(e, t, n) {
              var r;
              for (r in e) {
                if (e.hasOwnProperty(r)) {
                  switch (r) {
                    case t.parentKey:
                    case t.attributesKey:
                      break;
                    case t.textKey:
                      if (t.indentText || n) {
                        return true;
                      }
                      break;
                    case t.cdataKey:
                      if (t.indentCdata || n) {
                        return true;
                      }
                      break;
                    case t.instructionKey:
                      if (t.indentInstruction || n) {
                        return true;
                      }
                      break;
                    case t.doctypeKey:
                    case t.commentKey:
                    default:
                      return true;
                  }
                }
              }
              return false;
            }
            function v(e, t, n, s, a) {
              r = e;
              i = t;
              var l = "elementNameFn" in n ? n.elementNameFn(t, e) : t;
              if (e == null || e === "") {
                if ("fullTagEmptyElementFn" in n && n.fullTagEmptyElementFn(t, e) || n.fullTagEmptyElement) {
                  return "<" + l + "></" + l + ">";
                } else {
                  return "<" + l + "/>";
                }
              }
              var d = [];
              if (t) {
                d.push("<" + l);
                if (typeof e != "object") {
                  d.push(">" + m(e, n) + "</" + l + ">");
                  return d.join("");
                }
                if (e[n.attributesKey]) {
                  d.push(h(e[n.attributesKey], n, s));
                }
                var c = _(e, n, true) || e[n.attributesKey] && e[n.attributesKey]["xml:space"] === "preserve";
                c ||= "fullTagEmptyElementFn" in n ? n.fullTagEmptyElementFn(t, e) : n.fullTagEmptyElement;
                if (!c) {
                  d.push("/>");
                  return d.join("");
                }
                d.push(">");
              }
              d.push(y(e, n, s + 1, false));
              r = e;
              i = t;
              if (t) {
                d.push((a ? o(n, s, false) : "") + "</" + l + ">");
              }
              return d.join("");
            }
            function y(e, t, n, r) {
              var i;
              var s;
              var h;
              var f = [];
              for (s in e) {
                if (e.hasOwnProperty(s)) {
                  h = a(e[s]) ? e[s] : [e[s]];
                  i = 0;
                  for (; i < h.length; ++i) {
                    switch (s) {
                      case t.declarationKey:
                        f.push(l(h[i], t, n));
                        break;
                      case t.instructionKey:
                        f.push((t.indentInstruction ? o(t, n, r) : "") + d(h[i], t, n));
                        break;
                      case t.attributesKey:
                      case t.parentKey:
                        break;
                      case t.textKey:
                        f.push((t.indentText ? o(t, n, r) : "") + m(h[i], t));
                        break;
                      case t.cdataKey:
                        f.push((t.indentCdata ? o(t, n, r) : "") + u(h[i], t));
                        break;
                      case t.doctypeKey:
                        f.push(o(t, n, r) + p(h[i], t));
                        break;
                      case t.commentKey:
                        f.push(o(t, n, r) + c(h[i], t));
                        break;
                      default:
                        f.push(o(t, n, r) + v(h[i], s, t, n, _(h[i], t)));
                    }
                    r = r && !f.length;
                  }
                }
              }
              return f.join("");
            }
            e.exports = function (e, t) {
              t = function (e) {
                var t = s.copyOptions(e);
                s.ensureFlagExists("ignoreDeclaration", t);
                s.ensureFlagExists("ignoreInstruction", t);
                s.ensureFlagExists("ignoreAttributes", t);
                s.ensureFlagExists("ignoreText", t);
                s.ensureFlagExists("ignoreComment", t);
                s.ensureFlagExists("ignoreCdata", t);
                s.ensureFlagExists("ignoreDoctype", t);
                s.ensureFlagExists("compact", t);
                s.ensureFlagExists("indentText", t);
                s.ensureFlagExists("indentCdata", t);
                s.ensureFlagExists("indentAttributes", t);
                s.ensureFlagExists("indentInstruction", t);
                s.ensureFlagExists("fullTagEmptyElement", t);
                s.ensureFlagExists("noQuotesForNativeAttributes", t);
                s.ensureSpacesExists(t);
                if (typeof t.spaces == "number") {
                  t.spaces = Array(t.spaces + 1).join(" ");
                }
                s.ensureKeyExists("declaration", t);
                s.ensureKeyExists("instruction", t);
                s.ensureKeyExists("attributes", t);
                s.ensureKeyExists("text", t);
                s.ensureKeyExists("comment", t);
                s.ensureKeyExists("cdata", t);
                s.ensureKeyExists("doctype", t);
                s.ensureKeyExists("type", t);
                s.ensureKeyExists("name", t);
                s.ensureKeyExists("elements", t);
                s.checkFnExists("doctype", t);
                s.checkFnExists("instruction", t);
                s.checkFnExists("cdata", t);
                s.checkFnExists("comment", t);
                s.checkFnExists("text", t);
                s.checkFnExists("instructionName", t);
                s.checkFnExists("elementName", t);
                s.checkFnExists("attributeName", t);
                s.checkFnExists("attributeValue", t);
                s.checkFnExists("attributes", t);
                s.checkFnExists("fullTagEmptyElement", t);
                return t;
              }(t);
              var n = [];
              r = e;
              i = "_root_";
              if (t.compact) {
                n.push(y(e, t, 0, true));
              } else {
                if (e[t.declarationKey]) {
                  n.push(l(e[t.declarationKey], t, 0));
                }
                if (e[t.elementsKey] && e[t.elementsKey].length) {
                  n.push(f(e[t.elementsKey], t, 0, !n.length));
                }
              }
              return n.join("");
            };
          },
        38433(e, t, n) {
            var r = n(87348);
            e.exports = function (e, t) {
              if (e instanceof Buffer) {
                e = e.toString();
              }
              var n = null;
              if (typeof e == "string") {
                try {
                  n = JSON.parse(e);
                } catch (e) {
                  throw new Error("The JSON structure is invalid");
                }
              } else {
                n = e;
              }
              return r(n, t);
            };
          },
        45193(e, t, n) {
            var r = n(59740).c;
            e.exports = {
              copyOptions: function (e) {
                var t;
                var n = {};
                for (t in e) {
                  if (e.hasOwnProperty(t)) {
                    n[t] = e[t];
                  }
                }
                return n;
              },
              ensureFlagExists: function (e, t) {
                if (!(e in t) || typeof t[e] != "boolean") {
                  t[e] = false;
                }
              },
              ensureSpacesExists: function (e) {
                if (!("spaces" in e) || typeof e.spaces != "number" && typeof e.spaces != "string") {
                  e.spaces = 0;
                }
              },
              ensureAlwaysArrayExists: function (e) {
                if (!("alwaysArray" in e) || typeof e.alwaysArray != "boolean" && !r(e.alwaysArray)) {
                  e.alwaysArray = false;
                }
              },
              ensureKeyExists: function (e, t) {
                if (!(e + "Key" in t) || typeof t[e + "Key"] != "string") {
                  t[e + "Key"] = t.compact ? "_" + e : e;
                }
              },
              checkFnExists: function (e, t) {
                return e + "Fn" in t;
              }
            };
          },
        96538(e, t, n) {
            var r;
            var i;
            var s = n(64043);
            var a = n(45193);
            var o = n(59740).c;
            function h(e) {
              var t = Number(e);
              if (!isNaN(t)) {
                return t;
              }
              var n = e.toLowerCase();
              return n === "true" || n !== "false" && e;
            }
            function l(e, t) {
              var n;
              if (r.compact) {
                if (!i[r[e + "Key"]] && (o(r.alwaysArray) ? r.alwaysArray.indexOf(r[e + "Key"]) !== -1 : r.alwaysArray)) {
                  i[r[e + "Key"]] = [];
                }
                if (i[r[e + "Key"]] && !o(i[r[e + "Key"]])) {
                  i[r[e + "Key"]] = [i[r[e + "Key"]]];
                }
                if (e + "Fn" in r && typeof t == "string") {
                  t = r[e + "Fn"](t, i);
                }
                if (e === "instruction" && ("instructionFn" in r || "instructionNameFn" in r)) {
                  for (n in t) {
                    if (t.hasOwnProperty(n)) {
                      if ("instructionFn" in r) {
                        t[n] = r.instructionFn(t[n], n, i);
                      } else {
                        var s = t[n];
                        delete t[n];
                        t[r.instructionNameFn(n, s, i)] = s;
                      }
                    }
                  }
                }
                if (o(i[r[e + "Key"]])) {
                  i[r[e + "Key"]].push(t);
                } else {
                  i[r[e + "Key"]] = t;
                }
              } else {
                i[r.elementsKey] ||= [];
                var a = {
                  [r.typeKey]: e
                };
                if (e === "instruction") {
                  for (n in t) {
                    if (t.hasOwnProperty(n)) {
                      break;
                    }
                  }
                  a[r.nameKey] = "instructionNameFn" in r ? r.instructionNameFn(n, t, i) : n;
                  if (r.instructionHasAttributes) {
                    a[r.attributesKey] = t[n][r.attributesKey];
                    if ("instructionFn" in r) {
                      a[r.attributesKey] = r.instructionFn(a[r.attributesKey], n, i);
                    }
                  } else {
                    if ("instructionFn" in r) {
                      t[n] = r.instructionFn(t[n], n, i);
                    }
                    a[r.instructionKey] = t[n];
                  }
                } else {
                  if (e + "Fn" in r) {
                    t = r[e + "Fn"](t, i);
                  }
                  a[r[e + "Key"]] = t;
                }
                if (r.addParent) {
                  a[r.parentKey] = i;
                }
                i[r.elementsKey].push(a);
              }
            }
            function d(e) {
              var t;
              if ("attributesFn" in r && e) {
                e = r.attributesFn(e, i);
              }
              if ((r.trim || "attributeValueFn" in r || "attributeNameFn" in r || r.nativeTypeAttributes) && e) {
                for (t in e) {
                  if (e.hasOwnProperty(t) && (r.trim && (e[t] = e[t].trim()), r.nativeTypeAttributes && (e[t] = h(e[t])), "attributeValueFn" in r && (e[t] = r.attributeValueFn(e[t], t, i)), "attributeNameFn" in r)) {
                    var n = e[t];
                    delete e[t];
                    e[r.attributeNameFn(t, e[t], i)] = n;
                  }
                }
              }
              return e;
            }
            function c(e) {
              var t = {};
              if (e.body && (e.name.toLowerCase() === "xml" || r.instructionHasAttributes)) {
                for (var n, s = /([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|(\w+))\s*/g; (n = s.exec(e.body)) !== null;) {
                  t[n[1]] = n[2] || n[3] || n[4];
                }
                t = d(t);
              }
              if (e.name.toLowerCase() === "xml") {
                if (r.ignoreDeclaration) {
                  return;
                }
                i[r.declarationKey] = {};
                if (Object.keys(t).length) {
                  i[r.declarationKey][r.attributesKey] = t;
                }
                if (r.addParent) {
                  i[r.declarationKey][r.parentKey] = i;
                }
              } else {
                if (r.ignoreInstruction) {
                  return;
                }
                if (r.trim) {
                  e.body = e.body.trim();
                }
                var a = {};
                if (r.instructionHasAttributes && Object.keys(t).length) {
                  a[e.name] = {};
                  a[e.name][r.attributesKey] = t;
                } else {
                  a[e.name] = e.body;
                }
                l("instruction", a);
              }
            }
            function u(e, t) {
              var n;
              if (typeof e == "object") {
                t = e.attributes;
                e = e.name;
              }
              t = d(t);
              if ("elementNameFn" in r) {
                e = r.elementNameFn(e, i);
              }
              if (r.compact) {
                var s;
                n = {};
                if (!r.ignoreAttributes && t && Object.keys(t).length) {
                  n[r.attributesKey] = {};
                  for (s in t) {
                    if (t.hasOwnProperty(s)) {
                      n[r.attributesKey][s] = t[s];
                    }
                  }
                }
                if (!(e in i) && (o(r.alwaysArray) ? r.alwaysArray.indexOf(e) !== -1 : r.alwaysArray)) {
                  i[e] = [];
                }
                if (i[e] && !o(i[e])) {
                  i[e] = [i[e]];
                }
                if (o(i[e])) {
                  i[e].push(n);
                } else {
                  i[e] = n;
                }
              } else {
                i[r.elementsKey] ||= [];
                (n = {})[r.typeKey] = "element";
                n[r.nameKey] = e;
                if (!r.ignoreAttributes && t && Object.keys(t).length) {
                  n[r.attributesKey] = t;
                }
                if (r.alwaysChildren) {
                  n[r.elementsKey] = [];
                }
                i[r.elementsKey].push(n);
              }
              n[r.parentKey] = i;
              i = n;
            }
            function p(e) {
              if (!r.ignoreText) {
                if (e.trim() || r.captureSpacesBetweenElements) {
                  if (r.trim) {
                    e = e.trim();
                  }
                  if (r.nativeType) {
                    e = h(e);
                  }
                  if (r.sanitize) {
                    e = e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
                  }
                  l("text", e);
                }
              }
            }
            function m(e) {
              if (!r.ignoreComment) {
                if (r.trim) {
                  e = e.trim();
                }
                l("comment", e);
              }
            }
            function f(e) {
              var t = i[r.parentKey];
              if (!r.addParent) {
                delete i[r.parentKey];
              }
              i = t;
            }
            function _(e) {
              if (!r.ignoreCdata) {
                if (r.trim) {
                  e = e.trim();
                }
                l("cdata", e);
              }
            }
            function v(e) {
              if (!r.ignoreDoctype) {
                e = e.replace(/^ /, "");
                if (r.trim) {
                  e = e.trim();
                }
                l("doctype", e);
              }
            }
            function y(e) {
              e.note = e;
            }
            e.exports = function (e, t) {
              var n = s.parser(true, {});
              var o = {};
              i = o;
              r = function (e) {
                r = a.copyOptions(e);
                a.ensureFlagExists("ignoreDeclaration", r);
                a.ensureFlagExists("ignoreInstruction", r);
                a.ensureFlagExists("ignoreAttributes", r);
                a.ensureFlagExists("ignoreText", r);
                a.ensureFlagExists("ignoreComment", r);
                a.ensureFlagExists("ignoreCdata", r);
                a.ensureFlagExists("ignoreDoctype", r);
                a.ensureFlagExists("compact", r);
                a.ensureFlagExists("alwaysChildren", r);
                a.ensureFlagExists("addParent", r);
                a.ensureFlagExists("trim", r);
                a.ensureFlagExists("nativeType", r);
                a.ensureFlagExists("nativeTypeAttributes", r);
                a.ensureFlagExists("sanitize", r);
                a.ensureFlagExists("instructionHasAttributes", r);
                a.ensureFlagExists("captureSpacesBetweenElements", r);
                a.ensureAlwaysArrayExists(r);
                a.ensureKeyExists("declaration", r);
                a.ensureKeyExists("instruction", r);
                a.ensureKeyExists("attributes", r);
                a.ensureKeyExists("text", r);
                a.ensureKeyExists("comment", r);
                a.ensureKeyExists("cdata", r);
                a.ensureKeyExists("doctype", r);
                a.ensureKeyExists("type", r);
                a.ensureKeyExists("name", r);
                a.ensureKeyExists("elements", r);
                a.ensureKeyExists("parent", r);
                a.checkFnExists("doctype", r);
                a.checkFnExists("instruction", r);
                a.checkFnExists("cdata", r);
                a.checkFnExists("comment", r);
                a.checkFnExists("text", r);
                a.checkFnExists("instructionName", r);
                a.checkFnExists("elementName", r);
                a.checkFnExists("attributeName", r);
                a.checkFnExists("attributeValue", r);
                a.checkFnExists("attributes", r);
                return r;
              }(t);
              n.opt = {
                strictEntities: true
              };
              n.onopentag = u;
              n.ontext = p;
              n.oncomment = m;
              n.onclosetag = f;
              n.onerror = y;
              n.oncdata = _;
              n.ondoctype = v;
              n.onprocessinginstruction = c;
              n.write(e).close();
              if (o[r.elementsKey]) {
                var h = o[r.elementsKey];
                delete o[r.elementsKey];
                o[r.elementsKey] = h;
                delete o.text;
              }
              return o;
            };
          },
        58003(e, t, n) {
            var r = n(45193);
            var i = n(96538);
            e.exports = function (e, t) {
              var n;
              var s;
              var a;
              n = function (e) {
                var t = r.copyOptions(e);
                r.ensureSpacesExists(t);
                return t;
              }(t);
              s = i(e, n);
              a = "compact" in n && n.compact ? "_parent" : "parent";
              return ("addParent" in n && n.addParent ? JSON.stringify(s, function (e, t) {
                if (e === a) {
                  return "_";
                } else {
                  return t;
                }
              }, n.spaces) : JSON.stringify(s, null, n.spaces)).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
            };
          },
        91909(e) {
            "use strict";
        
            e.exports = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}\n";
          },
        39209(e, t, n) {
            "use strict";
        
            var r = n(76578);
            var i = typeof globalThis == "undefined" ? n.g : globalThis;
            e.exports = function () {
              var e = [];
              for (var t = 0; t < r.length; t++) {
                if (typeof i[r[t]] == "function") {
                  e[e.length] = r[t];
                }
              }
              return e;
            };
          },
        79306(e, t, n) {
            "use strict";
        
            var r = n(94901);
            var i = n(16823);
            var s = TypeError;
            e.exports = function (e) {
              if (r(e)) {
                return e;
              }
              throw new s(i(e) + " is not a function");
            };
          },
        35548(e, t, n) {
            "use strict";
        
            var r = n(33517);
            var i = n(16823);
            var s = TypeError;
            e.exports = function (e) {
              if (r(e)) {
                return e;
              }
              throw new s(i(e) + " is not a constructor");
            };
          },
        73506(e, t, n) {
            "use strict";
        
            var r = n(13925);
            var i = String;
            var s = TypeError;
            e.exports = function (e) {
              if (r(e)) {
                return e;
              }
              throw new s("Can't set " + i(e) + " as a prototype");
            };
          },
        6469(e, t, n) {
            "use strict";
        
            var r = n(78227);
            var i = n(2360);
            var s = n(24913).f;
            var a = r("unscopables");
            var o = Array.prototype;
            if (o[a] === undefined) {
              s(o, a, {
                configurable: true,
                value: i(null)
              });
            }
            e.exports = function (e) {
              o[a][e] = true;
            };
          },
        57829(e, t, n) {
            "use strict";
        
            var r = n(68183).o;
            e.exports = function (e, t, n) {
              return t + (n && r(e, t).length || 1);
            };
          },
        90679(e, t, n) {
            "use strict";
        
            var r = n(1625);
            var i = TypeError;
            e.exports = function (e, t) {
              if (r(t, e)) {
                return e;
              }
              throw new i("Incorrect invocation");
            };
          },
        28551(e, t, n) {
            "use strict";
        
            var r = n(20034);
            var i = String;
            var s = TypeError;
            e.exports = function (e) {
              if (r(e)) {
                return e;
              }
              throw new s(i(e) + " is not an object");
            };
          },
        77811(e) {
            "use strict";
        
            e.exports = typeof ArrayBuffer != "undefined" && typeof DataView != "undefined";
          },
        15652(e, t, n) {
            "use strict";
        
            var r = n(79039);
            e.exports = r(function () {
              if (typeof ArrayBuffer == "function") {
                var e = new ArrayBuffer(8);
                if (Object.isExtensible(e)) {
                  Object.defineProperty(e, "a", {
                    value: 8
                  });
                }
              }
            });
          }
    });
})();
