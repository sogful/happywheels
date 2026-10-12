(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        7395(e, t, n) {
            "use strict";
        
            n.d(t, {
              pW: () => y,
              ag: () => f,
              yB: () => b,
              M4: () => h
            });
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(26099);
            n(2892);
            var r = n(28242);
            var i = n(46563);
            var s = n(44093);
            function a(e) {
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
            function o(e, t) {
              o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return o(e, t);
            }
            var h = function (e) {
              function t(t, n) {
                var r;
                if (n === undefined) {
                  n = 0;
                }
                (r = e.call(this) || this).currentCount = 0;
                r.delay = 0;
                r.repeatCount = 0;
                r._interval = null;
                r.delay = t;
                r.repeatCount = n;
                return r;
              }
              var n;
              var i;
              i = e;
              (n = t).prototype = Object.create(i.prototype);
              n.prototype.constructor = n;
              o(n, i);
              var h;
              var l;
              var d = t.prototype;
              d.reset = function () {
                this.stop();
                this.currentCount = 0;
              };
              d.start = function () {
                var e = this;
                if (!this.running) {
                  this.stop();
                  this._interval = window.setInterval(function () {
                    return e.tick();
                  }, this.delay);
                }
              };
              d.stop = function () {
                window.clearInterval(this._interval);
                this._interval = null;
              };
              d.tick = function () {
                this.currentCount += 1;
                this.dispatchEvent(new r.J(s.iJ.TIMER));
                if (this.currentCount >= this.repeatCount) {
                  this.stop();
                  this.dispatchEvent(new r.J(s.iJ.COMPLETE));
                }
              };
              h = t;
              if (l = [{
                key: "running",
                get: function () {
                  return !!this._interval;
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
                    Object.defineProperty(e, a(r.key), r);
                  }
                })(h.prototype, l);
              }
              Object.defineProperty(h, "prototype", {
                writable: false
              });
              return h;
            }(i.Q);
            n(28706);
            n(34782);
            n(27208);
            n(38781);
            var l = n(78559);
            var d = n(48287);
            n(79432);
            var c = 0;
            var u = function () {
              function e(e) {
                this.byteArr = e;
                this.references = [];
              }
              var t = e.prototype;
              t.getReference = function (e) {
                var t = this.references.indexOf(e);
                if (t >= 0) {
                  return t;
                } else {
                  this.references.push(e);
                  return false;
                }
              };
              t.writeReference = function (e) {
                this.byteArr.writeByte(7);
                this.byteArr.writeUnsignedShort(e);
              };
              t.writeObjectEnd = function () {
                this.byteArr.writeShort(0);
                this.byteArr.writeByte(9);
              };
              t.readObjectEnd = function (e) {
                if (this.byteArr.readByte() === 9) {
                  return e;
                }
                throw new Error("Invalid object end marker found.");
              };
              t.writeString = function (e, t = true) {
                var n = e.length > 65535;
                if (t) {
                  this.byteArr.writeByte(n ? 12 : 2);
                }
                if (n) {
                  this.byteArr.writeUnsignedInt(e.length);
                } else {
                  this.byteArr.writeUnsignedShort(e.length);
                }
                this.byteArr.writeUTFBytes(e);
              };
              t.writeObject = function (e) {
                var t = this.getReference(e);
                if (t === false || typeof t != "number") {
                  this.byteArr.writeByte(3);
                  for (var n in e) {
                    this.writeString(n, false);
                    this.write(e[n]);
                  }
                  this.writeObjectEnd();
                } else {
                  this.writeReference(t);
                }
              };
              t.readObject = function () {
                var e = {};
                this.references.push(e);
                for (var t = this.byteArr.readUTF(); t !== ""; t = this.byteArr.readUTF()) {
                  e[t] = this.read();
                }
                return this.readObjectEnd(e);
              };
              t.writeECMAArray = function (e) {
                var t = this.getReference(e);
                if (t === false || typeof t != "number") {
                  this.byteArr.writeByte(8);
                  this.byteArr.writeUnsignedInt(Object.keys(e).length);
                  for (var n in e) {
                    this.writeString(String(n), false);
                    this.write(e[n]);
                  }
                  this.writeObjectEnd();
                } else {
                  this.writeReference(t);
                }
              };
              t.readECMAArray = function () {
                var e = [];
                var t = this.byteArr.readUnsignedInt();
                this.references.push(e);
                for (var n = 0; n < t; n++) {
                  e[this.byteArr.readUTF()] = this.read();
                }
                if (this.byteArr.readShort() === 0) {
                  return this.readObjectEnd(e);
                }
                throw new Error("Invalid object end string found.");
              };
              t.writeDate = function (e) {
                var t = this.getReference(e);
                if (t !== false && typeof t == "number") {
                  this.writeReference(t);
                }
                this.byteArr.writeByte(11);
                this.byteArr.writeDouble(e.getTime());
                this.byteArr.writeShort(e.getTimezoneOffset());
                return false;
              };
              t.readDate = function () {
                var e = new Date(this.byteArr.readDouble());
                this.byteArr.readShort();
                this.references.push(e);
                return e;
              };
              t.writeTypedObject = function (e) {
                var t = this.getReference(e);
                if (t === false || typeof t != "number") {
                  this.byteArr.writeByte(16);
                  this.byteArr.writeUTF(this.byteArr.classMapping[e.constructor]);
                  for (var n in e) {
                    this.writeString(n, false);
                    this.write(e[n]);
                  }
                  this.writeObjectEnd();
                } else {
                  this.writeReference(t);
                }
              };
              t.readTypedObject = function () {
                var e = {};
                var t = this.byteArr.readUTF();
                if (!this.byteArr.aliasMapping[t]) {
                  throw new Error("The classname: '" + t + "' is not registered.");
                }
                var n = this.byteArr.aliasMapping[t];
                this.references.push(e);
                e = new n();
                for (var r = this.byteArr.readUTF(); r !== ""; r = this.byteArr.readUTF()) {
                  e[r] = this.read();
                }
                return this.readObjectEnd(e);
              };
              t.write = function (e) {
                if (e === null) {
                  this.byteArr.writeByte(5);
                } else if (e === undefined) {
                  this.byteArr.writeByte(6);
                } else {
                  var t = e.constructor;
                  if (t === Boolean) {
                    this.byteArr.writeByte(1);
                    this.byteArr.writeBoolean(e);
                  } else if (t === Number) {
                    this.byteArr.writeByte(c);
                    this.byteArr.writeDouble(e);
                  } else if (t === String) {
                    this.writeString(e);
                  } else if (t === Object) {
                    this.writeObject(e);
                  } else if (t === Array) {
                    this.writeECMAArray(e);
                  } else if (t === Date) {
                    this.writeDate(e);
                  } else {
                    if (!this.byteArr.classMapping[t]) {
                      throw new Error("Unknown value type: '" + t + "'.");
                    }
                    this.writeTypedObject(e);
                  }
                }
              };
              t.read = function () {
                var e = this.byteArr.readByte();
                switch (e) {
                  case 5:
                    return null;
                  case 6:
                    return;
                  case 1:
                    return this.byteArr.readBoolean();
                  case c:
                    return this.byteArr.readDouble();
                  case 2:
                    return this.byteArr.readUTF();
                  case 12:
                    return this.byteArr.readUTFBytes(this.byteArr.readUnsignedInt());
                  case 7:
                    return this.references[this.byteArr.readUnsignedShort()];
                  case 3:
                    return this.readObject();
                  case 8:
                    return this.readECMAArray();
                  case 11:
                    return this.readDate();
                  case 16:
                    return this.readTypedObject();
                  default:
                    throw new Error("Unknown or unsupported AMF0 marker: '" + e + "'.");
                }
              };
              return e;
            }();
            n(69479);
            var p = function () {
              function e(e) {
                this.byteArr = e;
                this.flags = 0;
                this.reference = null;
                this.stringReferences = [];
                this.objectReferences = [];
                this.traitReferences = [];
              }
              var t = e.prototype;
              t.readUInt29 = function () {
                var e = 0;
                for (var t = 0; t < 4; t++) {
                  var n = this.byteArr.readUnsignedByte();
                  e = t === 3 ? (e << 8) + n : (e << 7) + (n & 127);
                  if (!(n & 128)) {
                    break;
                  }
                }
                return e;
              };
              t.writeUInt29 = function (e) {
                if (e < 128) {
                  this.byteArr.writeUnsignedByte(e);
                } else if (e < 16384) {
                  this.byteArr.writeUnsignedByte(e >> 7 & 127 | 128);
                  this.byteArr.writeUnsignedByte(e & 127);
                } else if (e < 2097152) {
                  this.byteArr.writeUnsignedByte(e >> 14 & 127 | 128);
                  this.byteArr.writeUnsignedByte(e >> 7 & 127 | 128);
                  this.byteArr.writeUnsignedByte(e & 127);
                } else {
                  if (!(e < 1073741824)) {
                    throw new RangeError("The value: '" + e + "' is out of range for uint29.");
                  }
                  this.byteArr.writeUnsignedByte(e >> 22 & 127 | 128);
                  this.byteArr.writeUnsignedByte(e >> 15 & 127 | 128);
                  this.byteArr.writeUnsignedByte(e >> 8 & 127 | 128);
                  this.byteArr.writeUnsignedByte(e & 255);
                }
              };
              t.popFlag = function () {
                var e = this.flags & 1;
                this.flags >>= 1;
                return e;
              };
              t.isReference = function (e) {
                this.reference = null;
                if (e !== "traitReferences") {
                  this.flags = this.readUInt29();
                }
                var t = !this.popFlag();
                if (t) {
                  this.reference = this[e][this.flags];
                }
                return t;
              };
              t.getReference = function (e, t) {
                var n = this[t].indexOf(e);
                if (n >= 0) {
                  return n;
                } else {
                  this[t].push(e);
                  return false;
                }
              };
              t.write = function (e) {
                if (e === null) {
                  this.byteArr.writeByte(1);
                } else if (e === undefined) {
                  this.byteArr.writeByte(0);
                } else {
                  var t = e.constructor;
                  if (t === Boolean) {
                    this.byteArr.writeByte(e ? 3 : 2);
                  } else if (t === Number) {
                    if (e << 3 >> 3 === e) {
                      this.byteArr.writeByte(4);
                      this.writeUInt29(e & 536870911);
                    } else {
                      this.byteArr.writeByte(5);
                      this.byteArr.writeDouble(e);
                    }
                  }
                }
              };
              t.read = function () {
                var e = this.byteArr.readByte();
                switch (e) {
                  case 1:
                    return null;
                  case 0:
                    return;
                  case 3:
                    return true;
                  case 2:
                    return false;
                  case 4:
                    return this.readUInt29() << 3 >> 3;
                  case 5:
                    return this.byteArr.readDouble();
                  default:
                    throw new Error("Unknown or unsupported AMF3 marker: '" + e + "'.");
                }
              };
              return e;
            }();
            function m(e) {
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
            var f = function () {
              function e(e) {
                if (d.Buffer.isBuffer(e)) {
                  this.buffer = e;
                } else if (Array.isArray(e)) {
                  this.buffer = d.Buffer.from(e);
                } else {
                  this.buffer = d.Buffer.alloc(0);
                }
                this.position = 0;
                this.endian = true;
                this.objectEncoding = 3;
              }
              e.registerClassAlias = function (e, t) {
                if (!e) {
                  throw new Error("Missing alias name.");
                }
                if (!t) {
                  throw new Error("Missing class object.");
                }
                this.classMapping[t] = e;
                this.aliasMapping[e] = t;
              };
              var t;
              var n;
              var r = e.prototype;
              r.readBufferFunc = function (e, t) {
                var n = this.buffer[e + this.endianStr](this.position);
                this.position += t;
                return n;
              };
              r.writeBufferFunc = function (e, t, n) {
                this.expand(n);
                this.buffer[t + this.endianStr](e, this.position);
                this.position += n;
              };
              r.expand = function (e) {
                if (this.bytesAvailable < e) {
                  this.buffer = d.Buffer.concat([this.buffer, d.Buffer.alloc(e - this.bytesAvailable)]);
                }
              };
              r.clear = function () {
                this.buffer = d.Buffer.alloc(0);
                this.position = 0;
              };
              r.compress = function (e = "deflate") {
                if ((e = e.toLowerCase()) === "zlib") {
                  this.buffer = (0, l.deflateSync)(this.buffer, {
                    level: 9
                  });
                } else {
                  if (e !== "deflate") {
                    throw new Error("Invalid compression algorithm: '" + e + "'.");
                  }
                  this.buffer = (0, l.deflateRawSync)(this.buffer);
                }
                this.position = this.length;
              };
              r.readBoolean = function () {
                return this.readByte() !== 0;
              };
              r.readByte = function () {
                return this.buffer.readInt8(this.position++);
              };
              r.readBytes = function (e, t = 0, n = 0) {
                if (n === 0) {
                  n = this.bytesAvailable;
                }
                if (n > this.bytesAvailable) {
                  throw new RangeError("End of buffer was encountered.");
                }
                if (e.length < t + n) {
                  e.expand(t + n);
                }
                for (var r = 0; r < n; r++) {
                  e.buffer[r + t] = this.buffer[r + this.position];
                }
                this.position += n;
              };
              r.readDouble = function () {
                return this.readBufferFunc("readDouble", 8);
              };
              r.readFloat = function () {
                return this.readBufferFunc("readFloat", 4);
              };
              r.readInt = function () {
                return this.readBufferFunc("readInt32", 4);
              };
              r.readMultiByte = function (t, n = "utf8") {
                var r = this.position;
                this.position += t;
                if (n !== "utf8") {
                  throw new Error("Invalid character set: '" + n + "'.");
                }
                return e.utf8TextDecoder.decode(this.buffer.slice(r, this.position));
              };
              r.readObject = function () {
                if (this.objectEncoding === 0) {
                  return new u(this).read();
                }
                if (this.objectEncoding === 3) {
                  return new p(this).read();
                }
                throw new Error("Unknown object encoding: '" + this.objectEncoding + "'.");
              };
              r.readShort = function () {
                return this.readBufferFunc("readInt16", 2);
              };
              r.readUnsignedByte = function () {
                return this.buffer.readUInt8(this.position++);
              };
              r.readUnsignedInt = function () {
                return this.readBufferFunc("readUInt32", 4);
              };
              r.readUnsignedShort = function () {
                return this.readBufferFunc("readUInt16", 2);
              };
              r.readUTF = function () {
                return this.readMultiByte(this.readUnsignedShort());
              };
              r.readUTFBytes = function (e) {
                return this.readMultiByte(e);
              };
              r.toJSON = function () {
                return this.buffer.toJSON();
              };
              r.toString = function () {
                return this.buffer.toString("utf8");
              };
              r.uncompress = function (e = "deflate") {
                if ((e = e.toLowerCase()) === "zlib") {
                  this.buffer = (0, l.inflateSync)(this.buffer, {
                    level: 9
                  });
                } else {
                  if (e !== "deflate") {
                    throw new Error("Invalid decompression algorithm: '" + e + "'.");
                  }
                  this.buffer = (0, l.inflateRawSync)(this.buffer);
                }
                this.position = 0;
              };
              r.writeBoolean = function (e) {
                this.writeByte(e ? 1 : 0);
              };
              r.writeByte = function (e) {
                this.expand(1);
                this.buffer.writeInt8(e, this.position++);
              };
              r.writeBytes = function (e, t = 0, n = 0) {
                if (n === 0) {
                  n = e.length - t;
                }
                this.expand(n);
                for (var r = 0; r < n; r++) {
                  this.buffer[r + this.position] = e.buffer[r + t];
                }
                this.position += n;
              };
              r.writeDouble = function (e) {
                this.writeBufferFunc(e, "writeDouble", 8);
              };
              r.writeFloat = function (e) {
                this.writeBufferFunc(e, "writeFloat", 4);
              };
              r.writeInt = function (e) {
                this.writeBufferFunc(e, "writeInt32", 4);
              };
              r.writeMultiByte = function (t, n = "utf8") {
                this.position += d.Buffer.byteLength(t);
                if (n !== "utf8") {
                  throw new Error("Invalid character set: '" + n + "'.");
                }
                this.buffer = d.Buffer.concat([this.buffer, d.Buffer.from(e.utf8TextEncoder.encode(t))]);
              };
              r.writeObject = function (e) {
                if (this.objectEncoding === 0) {
                  return new u(this).write(e);
                }
                if (this.objectEncoding === 3) {
                  return new p(this).write(e);
                }
                throw new Error("Unknown object encoding: '" + this.objectEncoding + "'.");
              };
              r.writeShort = function (e) {
                this.writeBufferFunc(e, "writeInt16", 2);
              };
              r.writeUnsignedByte = function (e) {
                this.expand(1);
                this.buffer.writeUInt8(e, this.position++);
              };
              r.writeUnsignedInt = function (e) {
                this.writeBufferFunc(e, "writeUInt32", 4);
              };
              r.writeUnsignedShort = function (e) {
                this.writeBufferFunc(e, "writeUInt16", 2);
              };
              r.writeUTF = function (e) {
                this.writeUnsignedShort(d.Buffer.byteLength(e));
                this.writeMultiByte(e);
              };
              r.writeUTFBytes = function (e) {
                this.writeMultiByte(e);
              };
              t = e;
              if (n = [{
                key: "endianStr",
                get: function () {
                  if (this.endian) {
                    return "BE";
                  } else {
                    return "LE";
                  }
                }
              }, {
                key: "length",
                get: function () {
                  return this.buffer.length;
                },
                set: function (e) {
                  if (e === 0) {
                    this.clear();
                  } else if (e !== this.length) {
                    if (e < this.length) {
                      this.buffer = this.buffer.slice(0, e);
                      this.position = this.length;
                    } else {
                      this.expand(e);
                    }
                  }
                }
              }, {
                key: "bytesAvailable",
                get: function () {
                  return this.length - this.position;
                }
              }, {
                key: "classMapping",
                get: function () {
                  return e.classMapping;
                }
              }, {
                key: "aliasMapping",
                get: function () {
                  return e.aliasMapping;
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
                    Object.defineProperty(e, m(r.key), r);
                  }
                })(t.prototype, n);
              }
              Object.defineProperty(t, "prototype", {
                writable: false
              });
              return t;
            }();
            function _(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) {
                  r.writable = true;
                }
                Object.defineProperty(e, v(r.key), r);
              }
            }
            function v(e) {
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
            f.classMapping = {};
            f.aliasMapping = {};
            f.utf8TextEncoder = new TextEncoder();
            f.utf8TextDecoder = new TextDecoder("utf8");
            n(62010);
            var y = function () {
              function e() {
                if (e._instance) {
                  throw new Error("BitmapManager already exists");
                }
                this.init();
              }
              var t;
              var n;
              var r;
              var i = e.prototype;
              i.init = function () {
                this._textures = {};
              };
              i.addTexture = function (e, t) {
                this._textures[e] = t;
              };
              i.getTexture = function (e) {
                return this._textures[e];
              };
              t = e;
              r = [{
                key: "instance",
                get: function () {
                  e._instance ||= new e();
                  return e._instance;
                }
              }];
              if (n = [{
                key: "textures",
                get: function () {
                  return this._textures;
                }
              }]) {
                _(t.prototype, n);
              }
              if (r) {
                _(t, r);
              }
              Object.defineProperty(t, "prototype", {
                writable: false
              });
              return t;
            }();
            n(23418);
            n(47764);
            n(2259);
            n(23792);
            n(62953);
            var g = n(46682);
            function w(e, t) {
              var n = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
              if (n) {
                return (n = n.call(e)).next.bind(n);
              }
              if (Array.isArray(e) || (n = function (e, t) {
                if (e) {
                  if (typeof e == "string") {
                    return x(e, t);
                  }
                  var n = {}.toString.call(e).slice(8, -1);
                  if (n === "Object" && e.constructor) {
                    n = e.constructor.name;
                  }
                  if (n === "Map" || n === "Set") {
                    return Array.from(e);
                  } else if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
                    return x(e, t);
                  } else {
                    return undefined;
                  }
                }
              }(e)) || t && e && typeof e.length == "number") {
                if (n) {
                  e = n;
                }
                var r = 0;
                return function () {
                  if (r >= e.length) {
                    return {
                      done: true
                    };
                  } else {
                    return {
                      done: false,
                      value: e[r++]
                    };
                  }
                };
              }
              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function x(e, t) {
              if (t == null || t > e.length) {
                t = e.length;
              }
              for (var n = 0, r = Array(t); n < t; n++) {
                r[n] = e[n];
              }
              return r;
            }
            var b = function () {
              function e() {}
              e.destroyRecursive = function (t) {
                if (t && typeof t == "object") {
                  t._destroyed = true;
                  if (t.children && t.children.length) {
                    for (var n = t.children.length; n--;) {
                      e.destroyRecursive(t.children[n]);
                    }
                  }
                  if (t._timedChildTimelines && t._timedChildTimelines.length) {
                    for (var r = t._timedChildTimelines.length; r--;) {
                      var i = t._timedChildTimelines[r];
                      if (Array.isArray(i)) {
                        for (var s, a = w(i); !(s = a()).done;) {
                          var o = s.value;
                          e.destroyRecursive(o);
                        }
                      } else {
                        e.destroyRecursive(i);
                      }
                    }
                  }
                  if (t._timelines && t._timelines.length) {
                    for (var h = t._timelines.length; h--;) {
                      var l = t._timelines[h];
                      if (Array.isArray(l)) {
                        for (var d, c = w(l); !(d = c()).done;) {
                          var u = d.value;
                          e.destroyRecursive(u);
                        }
                      } else {
                        e.destroyRecursive(l);
                      }
                    }
                  }
                  if (t.childrenToAdd && t.childrenToAdd.length) {
                    for (var p = t.childrenToAdd.length; p--;) {
                      var m = t.childrenToAdd[p];
                      if (Array.isArray(m)) {
                        for (var f, _ = w(m); !(f = _()).done;) {
                          var v = f.value;
                          e.destroyRecursive(v);
                        }
                      } else {
                        e.destroyRecursive(m);
                      }
                    }
                  }
                  if (t.transform) {
                    if (t.transform.position.cb) {
                      t.position.cb = null;
                    }
                    if (t.transform.position.scope) {
                      t.position.scope = null;
                    }
                    if (t.transform.scale.cb) {
                      t.scale.cb = null;
                    }
                    if (t.transform.scale.scope) {
                      t.scale.scope = null;
                    }
                  }
                  if (t._timedChildTimelines) {
                    t._timedChildTimelines.length = 0;
                  }
                  if (t.children) {
                    t.children.length = 0;
                  }
                  t._flashSprite &&= null;
                  t.mask &&= null;
                  t._duration &&= null;
                  t.indices &&= null;
                  t.uvs &&= null;
                  t.vertexData &&= null;
                  try {
                    e.destroyPixi(t);
                  } catch (e) {}
                }
              };
              e.destroyPixi = function (e) {
                if (e.parent) {
                  e.parent.removeChild(e);
                }
                if (typeof e._tickListenerBind == "function") {
                  e.tickerActive = false;
                  g.RvI.shared.remove(e._tickListenerBind);
                }
                if (e._events) {
                  e.removeAllListeners();
                }
                if (e.transform) {
                  if (e.transform.position.cb) {
                    e.position.cb = null;
                  }
                  if (e.transform.position.scope) {
                    e.position.scope = null;
                  }
                  if (e.transform.scale.cb) {
                    e.scale.cb = null;
                  }
                  if (e.transform.scale.scope) {
                    e.scale.scope = null;
                  }
                }
                e.parent = null;
                e._bounds = null;
                e._mask = null;
                e.filters = null;
                e.filterArea = null;
                e.hitArea = null;
                e.interactive = false;
                e.interactiveChildren = false;
                e._destroyed = true;
              };
              return e;
            }();
          }
    });
})();
