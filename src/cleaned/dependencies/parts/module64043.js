(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        64043(e, t, n) {
            (function (e) {
              e.parser = function (e, t) {
                return new i(e, t);
              };
              e.SAXParser = i;
              e.SAXStream = a;
              e.createStream = function (e, t) {
                return new a(e, t);
              };
              e.MAX_BUFFER_LENGTH = 65536;
              var t;
              var r = ["comment", "sgmlDecl", "textNode", "tagName", "doctype", "procInstName", "procInstBody", "entity", "attribName", "attribValue", "cdata", "script"];
              function i(t, n) {
                if (!(this instanceof i)) {
                  return new i(t, n);
                }
                var s = this;
                (function (e) {
                  for (var t = 0, n = r.length; t < n; t++) {
                    e[r[t]] = "";
                  }
                })(s);
                s.q = s.c = "";
                s.bufferCheckPosition = e.MAX_BUFFER_LENGTH;
                s.encoding = null;
                s.opt = n || {};
                s.opt.lowercase = s.opt.lowercase || s.opt.lowercasetags;
                s.looseCase = s.opt.lowercase ? "toLowerCase" : "toUpperCase";
                s.opt.maxEntityCount = s.opt.maxEntityCount || 512;
                s.opt.maxEntityDepth = s.opt.maxEntityDepth || 4;
                s.entityCount = s.entityDepth = 0;
                s.tags = [];
                s.closed = s.closedRoot = s.sawRoot = false;
                s.tag = s.error = null;
                s.strict = !!t;
                s.noscript = !!t || !!s.opt.noscript;
                s.state = A.BEGIN;
                s.strictEntities = s.opt.strictEntities;
                s.ENTITIES = s.strictEntities ? Object.create(e.XML_ENTITIES) : Object.create(e.ENTITIES);
                s.attribList = [];
                if (s.opt.xmlns) {
                  s.ns = Object.create(c);
                }
                if (s.opt.unquotedAttributeValues === undefined) {
                  s.opt.unquotedAttributeValues = !t;
                }
                s.trackPosition = s.opt.position !== false;
                if (s.trackPosition) {
                  s.position = s.line = s.column = 0;
                }
                S(s, "onready");
              }
              e.EVENTS = ["text", "processinginstruction", "sgmldeclaration", "doctype", "comment", "opentagstart", "attribute", "opentag", "closetag", "opencdata", "cdata", "closecdata", "error", "end", "ready", "script", "opennamespace", "closenamespace"];
              Object.create ||= function (e) {
                function t() {}
                t.prototype = e;
                return new t();
              };
              Object.keys ||= function (e) {
                var t = [];
                for (var n in e) {
                  if (e.hasOwnProperty(n)) {
                    t.push(n);
                  }
                }
                return t;
              };
              i.prototype = {
                end: function () {
                  I(this);
                },
                write: function (t) {
                  var n = this;
                  if (this.error) {
                    throw this.error;
                  }
                  if (n.closed) {
                    return R(n, "Cannot write after close. Assign an onready handler.");
                  }
                  if (t === null) {
                    return I(n);
                  }
                  if (typeof t == "object") {
                    t = t.toString();
                  }
                  for (var i = 0, s = ""; s = V(t, i++), n.c = s, s;) {
                    if (n.trackPosition) {
                      n.position++;
                      if (s === "\n") {
                        n.line++;
                        n.column = 0;
                      } else {
                        n.column++;
                      }
                    }
                    switch (n.state) {
                      case A.BEGIN:
                        n.state = A.BEGIN_WHITESPACE;
                        if (s === "﻿") {
                          continue;
                        }
                        U(n, s);
                        continue;
                      case A.BEGIN_WHITESPACE:
                        U(n, s);
                        continue;
                      case A.TEXT:
                        if (n.sawRoot && !n.closedRoot) {
                          var a = i - 1;
                          while (s && s !== "<" && s !== "&") {
                            if ((s = V(t, i++)) && n.trackPosition) {
                              n.position++;
                              if (s === "\n") {
                                n.line++;
                                n.column = 0;
                              } else {
                                n.column++;
                              }
                            }
                          }
                          n.textNode += t.substring(a, i - 1);
                        }
                        if (s !== "<" || n.sawRoot && n.closedRoot && !n.strict) {
                          if (!_(s) && (!n.sawRoot || !!n.closedRoot)) {
                            L(n, "Text data outside of root node.");
                          }
                          if (s === "&") {
                            n.state = A.TEXT_ENTITY;
                          } else {
                            n.textNode += s;
                          }
                        } else {
                          n.state = A.OPEN_WAKA;
                          n.startTagPosition = n.position;
                        }
                        continue;
                      case A.SCRIPT:
                        if (s === "<") {
                          n.state = A.SCRIPT_ENDING;
                        } else {
                          n.script += s;
                        }
                        continue;
                      case A.SCRIPT_ENDING:
                        if (s === "/") {
                          n.state = A.CLOSE_TAG;
                        } else {
                          n.script += "<" + s;
                          n.state = A.SCRIPT;
                        }
                        continue;
                      case A.OPEN_WAKA:
                        if (s === "!") {
                          n.state = A.SGML_DECL;
                          n.sgmlDecl = "";
                        } else if (_(s)) ;else if (g(u, s)) {
                          n.state = A.OPEN_TAG;
                          n.tagName = s;
                        } else if (s === "/") {
                          n.state = A.CLOSE_TAG;
                          n.tagName = "";
                        } else if (s === "?") {
                          n.state = A.PROC_INST;
                          n.procInstName = n.procInstBody = "";
                        } else {
                          L(n, "Unencoded <");
                          if (n.startTagPosition + 1 < n.position) {
                            var l = n.position - n.startTagPosition;
                            s = new Array(l).join(" ") + s;
                          }
                          n.textNode += "<" + s;
                          n.state = A.TEXT;
                        }
                        continue;
                      case A.SGML_DECL:
                        if (n.sgmlDecl + s === "--") {
                          n.state = A.COMMENT;
                          n.comment = "";
                          n.sgmlDecl = "";
                          continue;
                        }
                        if (n.doctype && n.doctype !== true && n.sgmlDecl) {
                          n.state = A.DOCTYPE_DTD;
                          n.doctype += "<!" + n.sgmlDecl + s;
                          n.sgmlDecl = "";
                        } else if (o.test(n.sgmlDecl + s)) {
                          k(n, "onopencdata");
                          n.state = A.CDATA;
                          n.sgmlDecl = "";
                          n.cdata = "";
                        } else if (h.test(n.sgmlDecl + s)) {
                          n.state = A.DOCTYPE;
                          if (n.doctype || n.sawRoot) {
                            L(n, "Inappropriately located doctype declaration");
                          }
                          n.doctype = "";
                          n.sgmlDecl = "";
                        } else if (s === ">") {
                          k(n, "onsgmldeclaration", n.sgmlDecl);
                          n.sgmlDecl = "";
                          n.state = A.TEXT;
                        } else if (v(s)) {
                          n.state = A.SGML_DECL_QUOTED;
                          n.sgmlDecl += s;
                        } else {
                          n.sgmlDecl += s;
                        }
                        continue;
                      case A.SGML_DECL_QUOTED:
                        if (s === n.q) {
                          n.state = A.SGML_DECL;
                          n.q = "";
                        }
                        n.sgmlDecl += s;
                        continue;
                      case A.DOCTYPE:
                        if (s === ">") {
                          n.state = A.TEXT;
                          k(n, "ondoctype", n.doctype);
                          n.doctype = true;
                        } else {
                          n.doctype += s;
                          if (s === "[") {
                            n.state = A.DOCTYPE_DTD;
                          } else if (v(s)) {
                            n.state = A.DOCTYPE_QUOTED;
                            n.q = s;
                          }
                        }
                        continue;
                      case A.DOCTYPE_QUOTED:
                        n.doctype += s;
                        if (s === n.q) {
                          n.q = "";
                          n.state = A.DOCTYPE;
                        }
                        continue;
                      case A.DOCTYPE_DTD:
                        if (s === "]") {
                          n.doctype += s;
                          n.state = A.DOCTYPE;
                        } else if (s === "<") {
                          n.state = A.OPEN_WAKA;
                          n.startTagPosition = n.position;
                        } else if (v(s)) {
                          n.doctype += s;
                          n.state = A.DOCTYPE_DTD_QUOTED;
                          n.q = s;
                        } else {
                          n.doctype += s;
                        }
                        continue;
                      case A.DOCTYPE_DTD_QUOTED:
                        n.doctype += s;
                        if (s === n.q) {
                          n.state = A.DOCTYPE_DTD;
                          n.q = "";
                        }
                        continue;
                      case A.COMMENT:
                        if (s === "-") {
                          n.state = A.COMMENT_ENDING;
                        } else {
                          n.comment += s;
                        }
                        continue;
                      case A.COMMENT_ENDING:
                        if (s === "-") {
                          n.state = A.COMMENT_ENDED;
                          n.comment = M(n.opt, n.comment);
                          if (n.comment) {
                            k(n, "oncomment", n.comment);
                          }
                          n.comment = "";
                        } else {
                          n.comment += "-" + s;
                          n.state = A.COMMENT;
                        }
                        continue;
                      case A.COMMENT_ENDED:
                        if (s !== ">") {
                          L(n, "Malformed comment");
                          n.comment += "--" + s;
                          n.state = A.COMMENT;
                        } else if (n.doctype && n.doctype !== true) {
                          n.state = A.DOCTYPE_DTD;
                        } else {
                          n.state = A.TEXT;
                        }
                        continue;
                      case A.CDATA:
                        for (a = i - 1; s && s !== "]";) {
                          if ((s = V(t, i++)) && n.trackPosition) {
                            n.position++;
                            if (s === "\n") {
                              n.line++;
                              n.column = 0;
                            } else {
                              n.column++;
                            }
                          }
                        }
                        n.cdata += t.substring(a, i - 1);
                        if (s === "]") {
                          n.state = A.CDATA_ENDING;
                        }
                        continue;
                      case A.CDATA_ENDING:
                        if (s === "]") {
                          n.state = A.CDATA_ENDING_2;
                        } else {
                          n.cdata += "]" + s;
                          n.state = A.CDATA;
                        }
                        continue;
                      case A.CDATA_ENDING_2:
                        if (s === ">") {
                          if (n.cdata) {
                            k(n, "oncdata", n.cdata);
                          }
                          k(n, "onclosecdata");
                          n.cdata = "";
                          n.state = A.TEXT;
                        } else if (s === "]") {
                          n.cdata += "]";
                        } else {
                          n.cdata += "]]" + s;
                          n.state = A.CDATA;
                        }
                        continue;
                      case A.PROC_INST:
                        if (s === "?") {
                          n.state = A.PROC_INST_ENDING;
                        } else if (_(s)) {
                          n.state = A.PROC_INST_BODY;
                        } else {
                          n.procInstName += s;
                        }
                        continue;
                      case A.PROC_INST_BODY:
                        if (!n.procInstBody && _(s)) {
                          continue;
                        }
                        if (s === "?") {
                          n.state = A.PROC_INST_ENDING;
                        } else {
                          n.procInstBody += s;
                        }
                        continue;
                      case A.PROC_INST_ENDING:
                        if (s === ">") {
                          const e = {
                            name: n.procInstName,
                            body: n.procInstBody
                          };
                          O(n, e);
                          k(n, "onprocessinginstruction", e);
                          n.procInstName = n.procInstBody = "";
                          n.state = A.TEXT;
                        } else {
                          n.procInstBody += "?" + s;
                          n.state = A.PROC_INST_BODY;
                        }
                        continue;
                      case A.OPEN_TAG:
                        if (g(p, s)) {
                          n.tagName += s;
                        } else {
                          j(n);
                          if (s === ">") {
                            F(n);
                          } else if (s === "/") {
                            n.state = A.OPEN_TAG_SLASH;
                          } else {
                            if (!_(s)) {
                              L(n, "Invalid character in tag name");
                            }
                            n.state = A.ATTRIB;
                          }
                        }
                        continue;
                      case A.OPEN_TAG_SLASH:
                        if (s === ">") {
                          F(n, true);
                          N(n);
                        } else {
                          L(n, "Forward-slash in opening tag not followed by >");
                          n.state = A.ATTRIB;
                        }
                        continue;
                      case A.ATTRIB:
                        if (_(s)) {
                          continue;
                        }
                        if (s === ">") {
                          F(n);
                        } else if (s === "/") {
                          n.state = A.OPEN_TAG_SLASH;
                        } else if (g(u, s)) {
                          n.attribName = s;
                          n.attribValue = "";
                          n.state = A.ATTRIB_NAME;
                        } else {
                          L(n, "Invalid attribute name");
                        }
                        continue;
                      case A.ATTRIB_NAME:
                        if (s === "=") {
                          n.state = A.ATTRIB_VALUE;
                        } else if (s === ">") {
                          L(n, "Attribute without value");
                          n.attribValue = n.attribName;
                          D(n);
                          F(n);
                        } else if (_(s)) {
                          n.state = A.ATTRIB_NAME_SAW_WHITE;
                        } else if (g(p, s)) {
                          n.attribName += s;
                        } else {
                          L(n, "Invalid attribute name");
                        }
                        continue;
                      case A.ATTRIB_NAME_SAW_WHITE:
                        if (s === "=") {
                          n.state = A.ATTRIB_VALUE;
                        } else {
                          if (_(s)) {
                            continue;
                          }
                          L(n, "Attribute without value");
                          n.tag.attributes[n.attribName] = "";
                          n.attribValue = "";
                          k(n, "onattribute", {
                            name: n.attribName,
                            value: ""
                          });
                          n.attribName = "";
                          if (s === ">") {
                            F(n);
                          } else if (g(u, s)) {
                            n.attribName = s;
                            n.state = A.ATTRIB_NAME;
                          } else {
                            L(n, "Invalid attribute name");
                            n.state = A.ATTRIB;
                          }
                        }
                        continue;
                      case A.ATTRIB_VALUE:
                        if (_(s)) {
                          continue;
                        }
                        if (v(s)) {
                          n.q = s;
                          n.state = A.ATTRIB_VALUE_QUOTED;
                        } else {
                          if (!n.opt.unquotedAttributeValues) {
                            R(n, "Unquoted attribute value");
                          }
                          n.state = A.ATTRIB_VALUE_UNQUOTED;
                          n.attribValue = s;
                        }
                        continue;
                      case A.ATTRIB_VALUE_QUOTED:
                        if (s !== n.q) {
                          if (s === "&") {
                            n.state = A.ATTRIB_VALUE_ENTITY_Q;
                          } else {
                            n.attribValue += s;
                          }
                          continue;
                        }
                        D(n);
                        n.q = "";
                        n.state = A.ATTRIB_VALUE_CLOSED;
                        continue;
                      case A.ATTRIB_VALUE_CLOSED:
                        if (_(s)) {
                          n.state = A.ATTRIB;
                        } else if (s === ">") {
                          F(n);
                        } else if (s === "/") {
                          n.state = A.OPEN_TAG_SLASH;
                        } else if (g(u, s)) {
                          L(n, "No whitespace between attributes");
                          n.attribName = s;
                          n.attribValue = "";
                          n.state = A.ATTRIB_NAME;
                        } else {
                          L(n, "Invalid attribute name");
                        }
                        continue;
                      case A.ATTRIB_VALUE_UNQUOTED:
                        if (!y(s)) {
                          if (s === "&") {
                            n.state = A.ATTRIB_VALUE_ENTITY_U;
                          } else {
                            n.attribValue += s;
                          }
                          continue;
                        }
                        D(n);
                        if (s === ">") {
                          F(n);
                        } else {
                          n.state = A.ATTRIB;
                        }
                        continue;
                      case A.CLOSE_TAG:
                        if (n.tagName) {
                          if (s === ">") {
                            N(n);
                          } else if (g(p, s)) {
                            n.tagName += s;
                          } else if (n.script) {
                            n.script += "</" + n.tagName + s;
                            n.tagName = "";
                            n.state = A.SCRIPT;
                          } else {
                            if (!_(s)) {
                              L(n, "Invalid tagname in closing tag");
                            }
                            n.state = A.CLOSE_TAG_SAW_WHITE;
                          }
                        } else {
                          if (_(s)) {
                            continue;
                          }
                          if (w(u, s)) {
                            if (n.script) {
                              n.script += "</" + s;
                              n.state = A.SCRIPT;
                            } else {
                              L(n, "Invalid tagname in closing tag.");
                            }
                          } else {
                            n.tagName = s;
                          }
                        }
                        continue;
                      case A.CLOSE_TAG_SAW_WHITE:
                        if (_(s)) {
                          continue;
                        }
                        if (s === ">") {
                          N(n);
                        } else {
                          L(n, "Invalid characters in closing tag");
                        }
                        continue;
                      case A.TEXT_ENTITY:
                      case A.ATTRIB_VALUE_ENTITY_Q:
                      case A.ATTRIB_VALUE_ENTITY_U:
                        var d;
                        var c;
                        switch (n.state) {
                          case A.TEXT_ENTITY:
                            d = A.TEXT;
                            c = "textNode";
                            break;
                          case A.ATTRIB_VALUE_ENTITY_Q:
                            d = A.ATTRIB_VALUE_QUOTED;
                            c = "attribValue";
                            break;
                          case A.ATTRIB_VALUE_ENTITY_U:
                            d = A.ATTRIB_VALUE_UNQUOTED;
                            c = "attribValue";
                        }
                        if (s === ";") {
                          var x = G(n);
                          if (n.opt.unparsedEntities && !Object.values(e.XML_ENTITIES).includes(x)) {
                            if ((n.entityCount += 1) > n.opt.maxEntityCount) {
                              R(n, "Parsed entity count exceeds max entity count");
                            }
                            if ((n.entityDepth += 1) > n.opt.maxEntityDepth) {
                              R(n, "Parsed entity depth exceeds max entity depth");
                            }
                            n.entity = "";
                            n.state = d;
                            n.write(x);
                            n.entityDepth -= 1;
                          } else {
                            n[c] += x;
                            n.entity = "";
                            n.state = d;
                          }
                        } else if (g(n.entity.length ? f : m, s)) {
                          n.entity += s;
                        } else {
                          L(n, "Invalid character in entity name");
                          n[c] += "&" + n.entity + s;
                          n.entity = "";
                          n.state = d;
                        }
                        continue;
                      default:
                        throw new Error(n, "Unknown state: " + n.state);
                    }
                  }
                  if (n.position >= n.bufferCheckPosition) {
                    (function (t) {
                      var n = Math.max(e.MAX_BUFFER_LENGTH, 10);
                      var i = 0;
                      for (var s = 0, a = r.length; s < a; s++) {
                        var o = t[r[s]].length;
                        if (o > n) {
                          switch (r[s]) {
                            case "textNode":
                              P(t);
                              break;
                            case "cdata":
                              k(t, "oncdata", t.cdata);
                              t.cdata = "";
                              break;
                            case "script":
                              k(t, "onscript", t.script);
                              t.script = "";
                              break;
                            default:
                              R(t, "Max buffer length exceeded: " + r[s]);
                          }
                        }
                        i = Math.max(i, o);
                      }
                      var h = e.MAX_BUFFER_LENGTH - i;
                      t.bufferCheckPosition = h + t.position;
                    })(n);
                  }
                  return n;
                },
                resume: function () {
                  this.error = null;
                  return this;
                },
                close: function () {
                  return this.write(null);
                },
                flush: function () {
                  var e;
                  P(e = this);
                  if (e.cdata !== "") {
                    k(e, "oncdata", e.cdata);
                    e.cdata = "";
                  }
                  if (e.script !== "") {
                    k(e, "onscript", e.script);
                    e.script = "";
                  }
                }
              };
              try {
                t = n(88310).Stream;
              } catch (e) {
                t = function () {};
              }
              t ||= function () {};
              var s = e.EVENTS.filter(function (e) {
                return e !== "error" && e !== "end";
              });
              function a(e, n) {
                if (!(this instanceof a)) {
                  return new a(e, n);
                }
                t.apply(this);
                this._parser = new i(e, n);
                this.writable = true;
                this.readable = true;
                var r = this;
                this._parser.onend = function () {
                  r.emit("end");
                };
                this._parser.onerror = function (e) {
                  r.emit("error", e);
                  r._parser.error = null;
                };
                this._decoder = null;
                this._decoderBuffer = null;
                s.forEach(function (e) {
                  Object.defineProperty(r, "on" + e, {
                    get: function () {
                      return r._parser["on" + e];
                    },
                    set: function (t) {
                      if (!t) {
                        r.removeAllListeners(e);
                        r._parser["on" + e] = t;
                        return t;
                      }
                      r.on(e, t);
                    },
                    enumerable: true,
                    configurable: false
                  });
                });
              }
              a.prototype = Object.create(t.prototype, {
                constructor: {
                  value: a
                }
              });
              a.prototype._decodeBuffer = function (e, t) {
                if (this._decoderBuffer) {
                  e = Buffer.concat([this._decoderBuffer, e]);
                  this._decoderBuffer = null;
                }
                if (!this._decoder) {
                  var n = function (e, t) {
                    if (e.length >= 2) {
                      if (e[0] === 255 && e[1] === 254) {
                        return "utf-16le";
                      }
                      if (e[0] === 254 && e[1] === 255) {
                        return "utf-16be";
                      }
                    }
                    if (e.length >= 3 && e[0] === 239 && e[1] === 187 && e[2] === 191) {
                      return "utf8";
                    } else if (e.length >= 4) {
                      if (e[0] === 60 && e[1] === 0 && e[2] === 63 && e[3] === 0) {
                        return "utf-16le";
                      } else if (e[0] === 0 && e[1] === 60 && e[2] === 0 && e[3] === 63) {
                        return "utf-16be";
                      } else {
                        return "utf8";
                      }
                    } else if (t) {
                      return "utf8";
                    } else {
                      return null;
                    }
                  }(e, t);
                  if (!n) {
                    this._decoderBuffer = e;
                    return "";
                  }
                  this._parser.encoding = n;
                  this._decoder = new TextDecoder(n);
                }
                return this._decoder.decode(e, {
                  stream: !t
                });
              };
              a.prototype.write = function (e) {
                if (typeof Buffer == "function" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer(e)) {
                  e = this._decodeBuffer(e, false);
                } else if (this._decoderBuffer) {
                  var t = this._decodeBuffer(Buffer.alloc(0), true);
                  if (t) {
                    this._parser.write(t);
                    this.emit("data", t);
                  }
                }
                this._parser.write(e.toString());
                this.emit("data", e);
                return true;
              };
              a.prototype.end = function (e) {
                if (e && e.length) {
                  this.write(e);
                }
                if (this._decoderBuffer) {
                  var t = this._decodeBuffer(Buffer.alloc(0), true);
                  if (t) {
                    this._parser.write(t);
                    this.emit("data", t);
                  }
                } else if (this._decoder) {
                  var n = this._decoder.decode();
                  if (n) {
                    this._parser.write(n);
                    this.emit("data", n);
                  }
                }
                this._parser.end();
                return true;
              };
              a.prototype.on = function (e, n) {
                var r = this;
                if (!r._parser["on" + e] && s.indexOf(e) !== -1) {
                  r._parser["on" + e] = function () {
                    var t = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
                    t.splice(0, 0, e);
                    r.emit.apply(r, t);
                  };
                }
                return t.prototype.on.call(r, e, n);
              };
              var o = /^\[CDATA\[$/i;
              var h = /^DOCTYPE$/i;
              var l = "http://www.w3.org/XML/1998/namespace";
              var d = "http://www.w3.org/2000/xmlns/";
              var c = {
                xml: l,
                xmlns: d
              };
              var u = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
              var p = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
              var m = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
              var f = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
              function _(e) {
                return e === " " || e === "\n" || e === "\r" || e === "\t";
              }
              function v(e) {
                return e === "\"" || e === "'";
              }
              function y(e) {
                return e === ">" || _(e);
              }
              function g(e, t) {
                return e.test(t);
              }
              function w(e, t) {
                return !g(e, t);
              }
              var x;
              var b;
              var T;
              var A = 0;
              e.STATE = {
                BEGIN: A++,
                BEGIN_WHITESPACE: A++,
                TEXT: A++,
                TEXT_ENTITY: A++,
                OPEN_WAKA: A++,
                SGML_DECL: A++,
                SGML_DECL_QUOTED: A++,
                DOCTYPE: A++,
                DOCTYPE_QUOTED: A++,
                DOCTYPE_DTD: A++,
                DOCTYPE_DTD_QUOTED: A++,
                COMMENT_STARTING: A++,
                COMMENT: A++,
                COMMENT_ENDING: A++,
                COMMENT_ENDED: A++,
                CDATA: A++,
                CDATA_ENDING: A++,
                CDATA_ENDING_2: A++,
                PROC_INST: A++,
                PROC_INST_BODY: A++,
                PROC_INST_ENDING: A++,
                OPEN_TAG: A++,
                OPEN_TAG_SLASH: A++,
                ATTRIB: A++,
                ATTRIB_NAME: A++,
                ATTRIB_NAME_SAW_WHITE: A++,
                ATTRIB_VALUE: A++,
                ATTRIB_VALUE_QUOTED: A++,
                ATTRIB_VALUE_CLOSED: A++,
                ATTRIB_VALUE_UNQUOTED: A++,
                ATTRIB_VALUE_ENTITY_Q: A++,
                ATTRIB_VALUE_ENTITY_U: A++,
                CLOSE_TAG: A++,
                CLOSE_TAG_SAW_WHITE: A++,
                SCRIPT: A++,
                SCRIPT_ENDING: A++
              };
              e.XML_ENTITIES = Object.assign(Object.create(null), {
                amp: "&",
                gt: ">",
                lt: "<",
                quot: "\"",
                apos: "'"
              });
              e.ENTITIES = Object.assign(Object.create(null), {
                amp: "&",
                gt: ">",
                lt: "<",
                quot: "\"",
                apos: "'",
                AElig: 198,
                Aacute: 193,
                Acirc: 194,
                Agrave: 192,
                Aring: 197,
                Atilde: 195,
                Auml: 196,
                Ccedil: 199,
                ETH: 208,
                Eacute: 201,
                Ecirc: 202,
                Egrave: 200,
                Euml: 203,
                Iacute: 205,
                Icirc: 206,
                Igrave: 204,
                Iuml: 207,
                Ntilde: 209,
                Oacute: 211,
                Ocirc: 212,
                Ograve: 210,
                Oslash: 216,
                Otilde: 213,
                Ouml: 214,
                THORN: 222,
                Uacute: 218,
                Ucirc: 219,
                Ugrave: 217,
                Uuml: 220,
                Yacute: 221,
                aacute: 225,
                acirc: 226,
                aelig: 230,
                agrave: 224,
                aring: 229,
                atilde: 227,
                auml: 228,
                ccedil: 231,
                eacute: 233,
                ecirc: 234,
                egrave: 232,
                eth: 240,
                euml: 235,
                iacute: 237,
                icirc: 238,
                igrave: 236,
                iuml: 239,
                ntilde: 241,
                oacute: 243,
                ocirc: 244,
                ograve: 242,
                oslash: 248,
                otilde: 245,
                ouml: 246,
                szlig: 223,
                thorn: 254,
                uacute: 250,
                ucirc: 251,
                ugrave: 249,
                uuml: 252,
                yacute: 253,
                yuml: 255,
                copy: 169,
                reg: 174,
                nbsp: 160,
                iexcl: 161,
                cent: 162,
                pound: 163,
                curren: 164,
                yen: 165,
                brvbar: 166,
                sect: 167,
                uml: 168,
                ordf: 170,
                laquo: 171,
                not: 172,
                shy: 173,
                macr: 175,
                deg: 176,
                plusmn: 177,
                sup1: 185,
                sup2: 178,
                sup3: 179,
                acute: 180,
                micro: 181,
                para: 182,
                middot: 183,
                cedil: 184,
                ordm: 186,
                raquo: 187,
                frac14: 188,
                frac12: 189,
                frac34: 190,
                iquest: 191,
                times: 215,
                divide: 247,
                OElig: 338,
                oelig: 339,
                Scaron: 352,
                scaron: 353,
                Yuml: 376,
                fnof: 402,
                circ: 710,
                tilde: 732,
                Alpha: 913,
                Beta: 914,
                Gamma: 915,
                Delta: 916,
                Epsilon: 917,
                Zeta: 918,
                Eta: 919,
                Theta: 920,
                Iota: 921,
                Kappa: 922,
                Lambda: 923,
                Mu: 924,
                Nu: 925,
                Xi: 926,
                Omicron: 927,
                Pi: 928,
                Rho: 929,
                Sigma: 931,
                Tau: 932,
                Upsilon: 933,
                Phi: 934,
                Chi: 935,
                Psi: 936,
                Omega: 937,
                alpha: 945,
                beta: 946,
                gamma: 947,
                delta: 948,
                epsilon: 949,
                zeta: 950,
                eta: 951,
                theta: 952,
                iota: 953,
                kappa: 954,
                lambda: 955,
                mu: 956,
                nu: 957,
                xi: 958,
                omicron: 959,
                pi: 960,
                rho: 961,
                sigmaf: 962,
                sigma: 963,
                tau: 964,
                upsilon: 965,
                phi: 966,
                chi: 967,
                psi: 968,
                omega: 969,
                thetasym: 977,
                upsih: 978,
                piv: 982,
                ensp: 8194,
                emsp: 8195,
                thinsp: 8201,
                zwnj: 8204,
                zwj: 8205,
                lrm: 8206,
                rlm: 8207,
                ndash: 8211,
                mdash: 8212,
                lsquo: 8216,
                rsquo: 8217,
                sbquo: 8218,
                ldquo: 8220,
                rdquo: 8221,
                bdquo: 8222,
                dagger: 8224,
                Dagger: 8225,
                bull: 8226,
                hellip: 8230,
                permil: 8240,
                prime: 8242,
                Prime: 8243,
                lsaquo: 8249,
                rsaquo: 8250,
                oline: 8254,
                frasl: 8260,
                euro: 8364,
                image: 8465,
                weierp: 8472,
                real: 8476,
                trade: 8482,
                alefsym: 8501,
                larr: 8592,
                uarr: 8593,
                rarr: 8594,
                darr: 8595,
                harr: 8596,
                crarr: 8629,
                lArr: 8656,
                uArr: 8657,
                rArr: 8658,
                dArr: 8659,
                hArr: 8660,
                forall: 8704,
                part: 8706,
                exist: 8707,
                empty: 8709,
                nabla: 8711,
                isin: 8712,
                notin: 8713,
                ni: 8715,
                prod: 8719,
                sum: 8721,
                minus: 8722,
                lowast: 8727,
                radic: 8730,
                prop: 8733,
                infin: 8734,
                ang: 8736,
                and: 8743,
                or: 8744,
                cap: 8745,
                cup: 8746,
                int: 8747,
                there4: 8756,
                sim: 8764,
                cong: 8773,
                asymp: 8776,
                ne: 8800,
                equiv: 8801,
                le: 8804,
                ge: 8805,
                sub: 8834,
                sup: 8835,
                nsub: 8836,
                sube: 8838,
                supe: 8839,
                oplus: 8853,
                otimes: 8855,
                perp: 8869,
                sdot: 8901,
                lceil: 8968,
                rceil: 8969,
                lfloor: 8970,
                rfloor: 8971,
                lang: 9001,
                rang: 9002,
                loz: 9674,
                spades: 9824,
                clubs: 9827,
                hearts: 9829,
                diams: 9830
              });
              Object.keys(e.ENTITIES).forEach(function (t) {
                var n = e.ENTITIES[t];
                var r = typeof n == "number" ? String.fromCharCode(n) : n;
                e.ENTITIES[t] = r;
              });
              for (var C in e.STATE) {
                e.STATE[e.STATE[C]] = C;
              }
              function S(e, t, n) {
                if (e[t]) {
                  e[t](n);
                }
              }
              function E(e) {
                if (e) {
                  return e.toLowerCase().replace(/[^a-z0-9]/g, "");
                } else {
                  return null;
                }
              }
              function O(e, t) {
                if (e.strict && e.encoding && t && t.name === "xml") {
                  var n;
                  var r;
                  var i = (r = (n = t.body) && n.match(/(?:^|\s)encoding\s*=\s*(['"])([^'"]+)\1/i)) ? r[2] : null;
                  if (i && !function (e, t) {
                    const n = E(e);
                    const r = E(t);
                    return !n || !r || (r === "utf16" ? n === "utf16le" || n === "utf16be" : n === r);
                  }(e.encoding, i)) {
                    L(e, "XML declaration encoding " + i + " does not match detected stream encoding " + e.encoding.toUpperCase());
                  }
                }
              }
              function k(e, t, n) {
                if (e.textNode) {
                  P(e);
                }
                S(e, t, n);
              }
              function P(e) {
                e.textNode = M(e.opt, e.textNode);
                if (e.textNode) {
                  S(e, "ontext", e.textNode);
                }
                e.textNode = "";
              }
              function M(e, t) {
                if (e.trim) {
                  t = t.trim();
                }
                if (e.normalize) {
                  t = t.replace(/\s+/g, " ");
                }
                return t;
              }
              function R(e, t) {
                P(e);
                if (e.trackPosition) {
                  t += "\nLine: " + e.line + "\nColumn: " + e.column + "\nChar: " + e.c;
                }
                t = new Error(t);
                e.error = t;
                S(e, "onerror", t);
                return e;
              }
              function I(e) {
                if (e.sawRoot && !e.closedRoot) {
                  L(e, "Unclosed root tag");
                }
                if (e.state !== A.BEGIN && e.state !== A.BEGIN_WHITESPACE && e.state !== A.TEXT) {
                  R(e, "Unexpected end");
                }
                P(e);
                e.c = "";
                e.closed = true;
                S(e, "onend");
                i.call(e, e.strict, e.opt);
                return e;
              }
              function L(e, t) {
                if (typeof e != "object" || !(e instanceof i)) {
                  throw new Error("bad call to strictFail");
                }
                if (e.strict) {
                  R(e, t);
                }
              }
              function j(e) {
                if (!e.strict) {
                  e.tagName = e.tagName[e.looseCase]();
                }
                var t = e.tags[e.tags.length - 1] || e;
                var n = e.tag = {
                  name: e.tagName,
                  attributes: {}
                };
                if (e.opt.xmlns) {
                  n.ns = t.ns;
                }
                e.attribList.length = 0;
                k(e, "onopentagstart", n);
              }
              function B(e, t) {
                var n = e.indexOf(":") < 0 ? ["", e] : e.split(":");
                var r = n[0];
                var i = n[1];
                if (t && e === "xmlns") {
                  r = "xmlns";
                  i = "";
                }
                return {
                  prefix: r,
                  local: i
                };
              }
              function D(e) {
                if (!e.strict) {
                  e.attribName = e.attribName[e.looseCase]();
                }
                if (e.attribList.indexOf(e.attribName) !== -1 || e.tag.attributes.hasOwnProperty(e.attribName)) {
                  e.attribName = e.attribValue = "";
                } else {
                  if (e.opt.xmlns) {
                    var t = B(e.attribName, true);
                    var n = t.prefix;
                    var r = t.local;
                    if (n === "xmlns") {
                      if (r === "xml" && e.attribValue !== l) {
                        L(e, "xml: prefix must be bound to " + l + "\nActual: " + e.attribValue);
                      } else if (r === "xmlns" && e.attribValue !== d) {
                        L(e, "xmlns: prefix must be bound to " + d + "\nActual: " + e.attribValue);
                      } else {
                        var i = e.tag;
                        var s = e.tags[e.tags.length - 1] || e;
                        if (i.ns === s.ns) {
                          i.ns = Object.create(s.ns);
                        }
                        i.ns[r] = e.attribValue;
                      }
                    }
                    e.attribList.push([e.attribName, e.attribValue]);
                  } else {
                    e.tag.attributes[e.attribName] = e.attribValue;
                    k(e, "onattribute", {
                      name: e.attribName,
                      value: e.attribValue
                    });
                  }
                  e.attribName = e.attribValue = "";
                }
              }
              function F(e, t) {
                if (e.opt.xmlns) {
                  var n = e.tag;
                  var r = B(e.tagName);
                  n.prefix = r.prefix;
                  n.local = r.local;
                  n.uri = n.ns[r.prefix] || "";
                  if (n.prefix && !n.uri) {
                    L(e, "Unbound namespace prefix: " + JSON.stringify(e.tagName));
                    n.uri = r.prefix;
                  }
                  var i = e.tags[e.tags.length - 1] || e;
                  if (n.ns && i.ns !== n.ns) {
                    Object.keys(n.ns).forEach(function (t) {
                      k(e, "onopennamespace", {
                        prefix: t,
                        uri: n.ns[t]
                      });
                    });
                  }
                  for (var s = 0, a = e.attribList.length; s < a; s++) {
                    var o = e.attribList[s];
                    var h = o[0];
                    var l = o[1];
                    var d = B(h, true);
                    var c = d.prefix;
                    var u = d.local;
                    var p = c === "" ? "" : n.ns[c] || "";
                    var m = {
                      name: h,
                      value: l,
                      prefix: c,
                      local: u,
                      uri: p
                    };
                    if (c && c !== "xmlns" && !p) {
                      L(e, "Unbound namespace prefix: " + JSON.stringify(c));
                      m.uri = c;
                    }
                    e.tag.attributes[h] = m;
                    k(e, "onattribute", m);
                  }
                  e.attribList.length = 0;
                }
                e.tag.isSelfClosing = !!t;
                e.sawRoot = true;
                e.tags.push(e.tag);
                k(e, "onopentag", e.tag);
                if (!t) {
                  if (e.noscript || e.tagName.toLowerCase() !== "script") {
                    e.state = A.TEXT;
                  } else {
                    e.state = A.SCRIPT;
                  }
                  e.tag = null;
                  e.tagName = "";
                }
                e.attribName = e.attribValue = "";
                e.attribList.length = 0;
              }
              function N(e) {
                if (!e.tagName) {
                  L(e, "Weird empty close tag.");
                  e.textNode += "</>";
                  e.state = A.TEXT;
                  return;
                }
                if (e.script) {
                  if (e.tagName !== "script") {
                    e.script += "</" + e.tagName + ">";
                    e.tagName = "";
                    e.state = A.SCRIPT;
                    return;
                  }
                  k(e, "onscript", e.script);
                  e.script = "";
                }
                var t = e.tags.length;
                var n = e.tagName;
                if (!e.strict) {
                  n = n[e.looseCase]();
                }
                for (var r = n; t-- && e.tags[t].name !== r;) {
                  L(e, "Unexpected close tag");
                }
                if (t < 0) {
                  L(e, "Unmatched closing tag: " + e.tagName);
                  e.textNode += "</" + e.tagName + ">";
                  e.state = A.TEXT;
                  return;
                }
                e.tagName = n;
                for (var i = e.tags.length; i-- > t;) {
                  var s = e.tag = e.tags.pop();
                  e.tagName = e.tag.name;
                  k(e, "onclosetag", e.tagName);
                  var a = {};
                  for (var o in s.ns) {
                    a[o] = s.ns[o];
                  }
                  var h = e.tags[e.tags.length - 1] || e;
                  if (e.opt.xmlns && s.ns !== h.ns) {
                    Object.keys(s.ns).forEach(function (t) {
                      var n = s.ns[t];
                      k(e, "onclosenamespace", {
                        prefix: t,
                        uri: n
                      });
                    });
                  }
                }
                if (t === 0) {
                  e.closedRoot = true;
                }
                e.tagName = e.attribValue = e.attribName = "";
                e.attribList.length = 0;
                e.state = A.TEXT;
              }
              function G(e) {
                var t;
                var n = e.entity;
                var r = n.toLowerCase();
                var i = "";
                if (e.ENTITIES[n]) {
                  return e.ENTITIES[n];
                } else if (e.ENTITIES[r]) {
                  return e.ENTITIES[r];
                } else {
                  if ((n = r).charAt(0) === "#") {
                    if (n.charAt(1) === "x") {
                      n = n.slice(2);
                      i = (t = parseInt(n, 16)).toString(16);
                    } else {
                      n = n.slice(1);
                      i = (t = parseInt(n, 10)).toString(10);
                    }
                  }
                  n = n.replace(/^0+/, "");
                  if (isNaN(t) || i.toLowerCase() !== n || t < 0 || t > 1114111 || !function (e) {
                    return e === 9 || e === 10 || e === 13 || e >= 32 && e <= 55295 || e >= 57344 && e <= 65533 || e >= 65536 && e <= 1114111;
                  }(t)) {
                    L(e, "Invalid character entity");
                    return "&" + e.entity + ";";
                  } else {
                    return String.fromCodePoint(t);
                  }
                }
              }
              function U(e, t) {
                if (t === "<") {
                  e.state = A.OPEN_WAKA;
                  e.startTagPosition = e.position;
                } else if (!_(t)) {
                  L(e, "Non-whitespace before first tag.");
                  e.textNode = t;
                  e.state = A.TEXT;
                }
              }
              function V(e, t) {
                var n = "";
                if (t < e.length) {
                  n = e.charAt(t);
                }
                return n;
              }
              A = e.STATE;
              if (!String.fromCodePoint) {
                x = String.fromCharCode;
                b = Math.floor;
                T = function () {
                  var e;
                  var t;
                  var n = [];
                  var r = -1;
                  var i = arguments.length;
                  if (!i) {
                    return "";
                  }
                  var s = "";
                  while (++r < i) {
                    var a = Number(arguments[r]);
                    if (!isFinite(a) || a < 0 || a > 1114111 || b(a) !== a) {
                      throw RangeError("Invalid code point: " + a);
                    }
                    if (a <= 65535) {
                      n.push(a);
                    } else {
                      e = 55296 + ((a -= 65536) >> 10);
                      t = a % 1024 + 56320;
                      n.push(e, t);
                    }
                    if (r + 1 === i || n.length > 16384) {
                      s += x.apply(null, n);
                      n.length = 0;
                    }
                  }
                  return s;
                };
                if (Object.defineProperty) {
                  Object.defineProperty(String, "fromCodePoint", {
                    value: T,
                    configurable: true,
                    writable: true
                  });
                } else {
                  String.fromCodePoint = T;
                }
              }
            })(t);
          }
    });
})();
