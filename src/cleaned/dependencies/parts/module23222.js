(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        23222(e, t, n) {
            "use strict";
        
            n.d(t, {
              nm: () => d,
              XD: () => Z,
              gv: () => Q,
              _A: () => V,
              E4: () => R,
              zS: () => ne,
              Ls: () => S,
              ux: () => fe,
              Vy: () => Be,
              z_: () => N,
              ZG: () => Fe,
              Pp: () => H,
              LJ: () => i,
              x5: () => h,
              m2: () => W,
              CR: () => I,
              iE: () => Ge,
              Dn: () => Pe,
              Gq: () => Ve,
              Kz: () => ze,
              Cb: () => D,
              _g: () => c,
              RM: () => l,
              bm: () => Ie
            });
            var r = n.cw(function (e, t) {
              n(46518)({
                target: "Math",
                stat: true
              }, {
                trunc: n(80741)
              });
            });
            n(2892);
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(26099);
            var i = function () {
              function e(e = 0, t = null, n = null) {
                this.col1 = new l();
                this.col2 = new l();
                if (t != null && n != null) {
                  this.col1.SetV(t);
                  this.col2.SetV(n);
                } else {
                  var r = Math.cos(e);
                  var i = Math.sin(e);
                  this.col1.x = r;
                  this.col2.x = -i;
                  this.col1.y = i;
                  this.col2.y = r;
                }
              }
              var t = e.prototype;
              t.Set = function (e) {
                var t = Math.cos(e);
                var n = Math.sin(e);
                this.col1.x = t;
                this.col2.x = -n;
                this.col1.y = n;
                this.col2.y = t;
              };
              t.SetVV = function (e, t) {
                this.col1.SetV(e);
                this.col2.SetV(t);
              };
              t.Copy = function () {
                return new e(0, this.col1, this.col2);
              };
              t.SetM = function (e) {
                this.col1.SetV(e.col1);
                this.col2.SetV(e.col2);
              };
              t.AddM = function (e) {
                this.col1.x += e.col1.x;
                this.col1.y += e.col1.y;
                this.col2.x += e.col2.x;
                this.col2.y += e.col2.y;
              };
              t.SetIdentity = function () {
                this.col1.x = 1;
                this.col2.x = 0;
                this.col1.y = 0;
                this.col2.y = 1;
              };
              t.SetZero = function () {
                this.col1.x = 0;
                this.col2.x = 0;
                this.col1.y = 0;
                this.col2.y = 0;
              };
              t.GetAngle = function () {
                return Math.atan2(this.col1.y, this.col1.x);
              };
              t.Invert = function (e) {
                var t = this.col1.x;
                var n = this.col2.x;
                var r = this.col1.y;
                var i = this.col2.y;
                var s = t * i - n * r;
                if (s == 0) {
                  return null;
                } else {
                  s = 1 / s;
                  e.col1.x = s * i;
                  e.col2.x = -s * n;
                  e.col1.y = -s * r;
                  e.col2.y = s * t;
                  return e;
                }
              };
              t.GetDeterminant = function () {
                var e = this.col1.x;
                var t = this.col2.x;
                var n = this.col1.y;
                return e * this.col2.y - t * n;
              };
              t.Solve = function (e, t, n) {
                var r = this.col1.x;
                var i = this.col2.x;
                var s = this.col1.y;
                var a = this.col2.y;
                var o = r * a - i * s;
                o = 1 / o;
                e.x = o * (a * t - i * n);
                e.y = o * (r * n - s * t);
                return e;
              };
              t.Abs = function () {
                this.col1.Abs();
                this.col2.Abs();
              };
              return e;
            }();
            var s = function () {
              function e(e = null, t = null) {
                this.position = new l();
                this.R = new i();
                if (e) {
                  this.position.SetV(e);
                  this.R.SetM(t);
                }
              }
              var t = e.prototype;
              t.Initialize = function (e, t) {
                this.position.SetV(e);
                this.R.SetM(t);
              };
              t.SetIdentity = function () {
                this.position.SetZero();
                this.R.SetIdentity();
              };
              t.Set = function (e) {
                this.position.SetV(e.position);
                this.R.SetM(e.R);
              };
              t.GetAngle = function () {
                return Math.atan2(this.R.col1.y, this.R.col1.x);
              };
              return e;
            }();
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
            var o;
            var h = function () {
              function e() {}
              e.b2IsValid = function (e) {
                return isFinite(e);
              };
              e.b2Dot = function (e, t) {
                return e.x * t.x + e.y * t.y;
              };
              e.b2CrossVV = function (e, t) {
                return e.x * t.y - e.y * t.x;
              };
              e.b2CrossVF = function (e, t) {
                return new l(t * e.y, -t * e.x);
              };
              e.b2CrossFV = function (e, t) {
                return new l(-e * t.y, e * t.x);
              };
              e.b2MulMV = function (e, t) {
                return new l(e.col1.x * t.x + e.col2.x * t.y, e.col1.y * t.x + e.col2.y * t.y);
              };
              e.b2MulTMV = function (t, n) {
                return new l(e.b2Dot(n, t.col1), e.b2Dot(n, t.col2));
              };
              e.b2MulX = function (t, n) {
                var r = e.b2MulMV(t.R, n);
                r.x += t.position.x;
                r.y += t.position.y;
                return r;
              };
              e.b2MulXT = function (t, n) {
                var r = e.SubtractVV(n, t.position);
                var i = r.x * t.R.col1.x + r.y * t.R.col1.y;
                r.y = r.x * t.R.col2.x + r.y * t.R.col2.y;
                r.x = i;
                return r;
              };
              e.AddVV = function (e, t) {
                return new l(e.x + t.x, e.y + t.y);
              };
              e.SubtractVV = function (e, t) {
                return new l(e.x - t.x, e.y - t.y);
              };
              e.b2Distance = function (e, t) {
                var n = e.x - t.x;
                var r = e.y - t.y;
                return Math.sqrt(n * n + r * r);
              };
              e.b2DistanceSquared = function (e, t) {
                var n = e.x - t.x;
                var r = e.y - t.y;
                return n * n + r * r;
              };
              e.MulFV = function (e, t) {
                return new l(e * t.x, e * t.y);
              };
              e.AddMM = function (t, n) {
                return new i(0, e.AddVV(t.col1, n.col1), e.AddVV(t.col2, n.col2));
              };
              e.b2MulMM = function (t, n) {
                return new i(0, e.b2MulMV(t, n.col1), e.b2MulMV(t, n.col2));
              };
              e.b2MulTMM = function (t, n) {
                var r = new l(e.b2Dot(t.col1, n.col1), e.b2Dot(t.col2, n.col1));
                var s = new l(e.b2Dot(t.col1, n.col2), e.b2Dot(t.col2, n.col2));
                return new i(0, r, s);
              };
              e.b2Abs = function (e) {
                if (e > 0) {
                  return e;
                } else {
                  return -e;
                }
              };
              e.b2AbsV = function (t) {
                return new l(e.b2Abs(t.x), e.b2Abs(t.y));
              };
              e.b2AbsM = function (t) {
                return new i(0, e.b2AbsV(t.col1), e.b2AbsV(t.col2));
              };
              e.b2Min = function (e, t) {
                if (e < t) {
                  return e;
                } else {
                  return t;
                }
              };
              e.b2MinV = function (t, n) {
                return new l(e.b2Min(t.x, n.x), e.b2Min(t.y, n.y));
              };
              e.b2Max = function (e, t) {
                if (e > t) {
                  return e;
                } else {
                  return t;
                }
              };
              e.b2MaxV = function (t, n) {
                return new l(e.b2Max(t.x, n.x), e.b2Max(t.y, n.y));
              };
              e.b2Clamp = function (t, n, r) {
                return e.b2Max(n, e.b2Min(t, r));
              };
              e.b2ClampV = function (t, n, r) {
                return e.b2MaxV(n, e.b2MinV(t, r));
              };
              e.b2Swap = function (e, t) {
                var n = e[0];
                e[0] = t[0];
                t[0] = n;
              };
              e.b2Random = function () {
                return Math.random() * 2 - 1;
              };
              e.b2RandomRange = function (e, t) {
                return (t - e) * Math.random() + e;
              };
              e.b2NextPowerOfTwo = function (e) {
                e |= e >> 1 & 2147483647;
                e |= e >> 2 & 1073741823;
                e |= e >> 4 & 268435455;
                return 1 + ((e |= e >> 8 & 16777215) | e >> 16 & 65535);
              };
              e.b2IsPowerOfTwo = function (e) {
                return e > 0 && !(e & e - 1);
              };
              t = e;
              if (n = [{
                key: "b2Vec2_zero",
                get: function () {
                  e._b2Vec2_zero ||= new l(0, 0);
                  return e._b2Vec2_zero;
                }
              }, {
                key: "b2Mat22_identity",
                get: function () {
                  e._b2Mat22_identity ||= new i(0, new l(1, 0), new l(0, 1));
                  return e._b2Mat22_identity;
                }
              }, {
                key: "b2XForm_identity",
                get: function () {
                  e._b2XForm_identity ||= new s(e.b2Vec2_zero, e.b2Mat22_identity);
                  return e._b2XForm_identity;
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
                })(t, n);
              }
              Object.defineProperty(t, "prototype", {
                writable: false
              });
              return t;
              var t;
              var n;
            }();
            var l = function () {
              function e(e = 0, t = 0) {
                this.x = e;
                this.y = t;
              }
              var t = e.prototype;
              t.SetZero = function () {
                this.x = 0;
                this.y = 0;
              };
              t.Set = function (e = 0, t = 0) {
                this.x = e;
                this.y = t;
              };
              t.SetV = function (e) {
                this.x = e.x;
                this.y = e.y;
              };
              t.Negative = function () {
                return new e(-this.x, -this.y);
              };
              e.Make = function (t, n) {
                return new e(t, n);
              };
              t.Copy = function () {
                return new e(this.x, this.y);
              };
              t.Add = function (e) {
                this.x += e.x;
                this.y += e.y;
              };
              t.Subtract = function (e) {
                this.x -= e.x;
                this.y -= e.y;
              };
              t.Multiply = function (e) {
                this.x *= e;
                this.y *= e;
              };
              t.MulM = function (e) {
                var t = this.x;
                this.x = e.col1.x * t + e.col2.x * this.y;
                this.y = e.col1.y * t + e.col2.y * this.y;
              };
              t.MulTM = function (e) {
                var t = h.b2Dot(this, e.col1);
                this.y = h.b2Dot(this, e.col2);
                this.x = t;
              };
              t.CrossVF = function (e) {
                var t = this.x;
                this.x = e * this.y;
                this.y = -e * t;
              };
              t.CrossFV = function (e) {
                var t = this.x;
                this.x = -e * this.y;
                this.y = e * t;
              };
              t.MinV = function (e) {
                this.x = this.x < e.x ? this.x : e.x;
                this.y = this.y < e.y ? this.y : e.y;
              };
              t.MaxV = function (e) {
                this.x = this.x > e.x ? this.x : e.x;
                this.y = this.y > e.y ? this.y : e.y;
              };
              t.Abs = function () {
                if (this.x < 0) {
                  this.x = -this.x;
                }
                if (this.y < 0) {
                  this.y = -this.y;
                }
              };
              t.Length = function () {
                return Math.sqrt(this.x * this.x + this.y * this.y);
              };
              t.LengthSquared = function () {
                return this.x * this.x + this.y * this.y;
              };
              t.Normalize = function () {
                var e = Math.sqrt(this.x * this.x + this.y * this.y);
                if (e < Number.MIN_VALUE) {
                  return 0;
                }
                var t = 1 / e;
                this.x *= t;
                this.y *= t;
                return e;
              };
              t.IsValid = function () {
                return h.b2IsValid(this.x) && h.b2IsValid(this.y);
              };
              return e;
            }();
            var d = function () {
              function e() {
                this.lowerBound = new l();
                this.upperBound = new l();
              }
              e.prototype.IsValid = function () {
                var e = this.upperBound.x - this.lowerBound.x;
                var t = this.upperBound.y - this.lowerBound.y;
                return e >= 0 && t >= 0 && this.lowerBound.IsValid() && this.upperBound.IsValid();
              };
              return e;
            }();
            r();
            var c = function () {
              function e() {}
              e.b2Assert = function (e) {
                if (!e) {
                  undefined.x++;
                }
              };
              return e;
            }();
            o = c;
            c.USHRT_MAX = 65535;
            c.b2_pi = Math.PI;
            c.b2_maxManifoldPoints = 2;
            c.b2_maxPolygonVertices = 10;
            c.b2_maxProxies = 1024;
            c.b2_maxPairs = o.b2_maxProxies * 16;
            c.b2_linearSlop = 0.005;
            c.b2_angularSlop = 2 / 180 * o.b2_pi;
            c.b2_toiSlop = o.b2_linearSlop * 8;
            c.b2_maxTOIContactsPerIsland = 32;
            c.b2_maxTOIIterations = 5000;
            c.b2_velocityThreshold = 1;
            c.b2_maxLinearCorrection = 0.2;
            c.b2_maxAngularCorrection = 8 / 180 * o.b2_pi;
            c.b2_maxLinearVelocity = 200;
            c.b2_maxLinearVelocitySquared = o.b2_maxLinearVelocity * o.b2_maxLinearVelocity;
            c.b2_maxAngularVelocity = 250;
            c.b2_maxAngularVelocitySquared = o.b2_maxAngularVelocity * o.b2_maxAngularVelocity;
            c.b2_contactBaumgarte = 0.2;
            c.b2_timeToSleep = 0.5;
            c.b2_linearSleepTolerance = 0.01;
            c.b2_angularSleepTolerance = 2 / 180;
            var u;
            var p = function () {
              function e() {}
              var t = e.prototype;
              t.IsLower = function () {
                return !(this.value & 1);
              };
              t.IsUpper = function () {
                return !(~this.value & 1);
              };
              t.Swap = function (e) {
                var t = this.value;
                var n = this.proxyId;
                var r = this.stabbingCount;
                this.value = e.value;
                this.proxyId = e.proxyId;
                this.stabbingCount = e.stabbingCount;
                e.value = t;
                e.proxyId = n;
                e.stabbingCount = r;
              };
              return e;
            }();
            function m() {
              this.lowerValues = [0, 0];
              this.upperValues = [0, 0];
            }
            var f = function () {
              function e() {
                this.userData = null;
              }
              var t = e.prototype;
              t.SetBuffered = function () {
                this.status |= e.e_pairBuffered;
              };
              t.ClearBuffered = function () {
                this.status &= ~e.e_pairBuffered;
              };
              t.IsBuffered = function () {
                return (this.status & e.e_pairBuffered) == e.e_pairBuffered;
              };
              t.SetRemoved = function () {
                this.status |= e.e_pairRemoved;
              };
              t.ClearRemoved = function () {
                this.status &= ~e.e_pairRemoved;
              };
              t.IsRemoved = function () {
                return (this.status & e.e_pairRemoved) == e.e_pairRemoved;
              };
              t.SetFinal = function () {
                this.status |= e.e_pairFinal;
              };
              t.IsFinal = function () {
                return (this.status & e.e_pairFinal) == e.e_pairFinal;
              };
              return e;
            }();
            u = f;
            f.b2_nullPair = c.USHRT_MAX;
            f.b2_nullProxy = c.USHRT_MAX;
            f.b2_tableCapacity = c.b2_maxPairs;
            f.b2_tableMask = u.b2_tableCapacity - 1;
            f.e_pairBuffered = 1;
            f.e_pairRemoved = 2;
            f.e_pairFinal = 4;
            function _() {}
            var v = function () {
              function e() {
                var e;
                this.m_freePair = 0;
                this.m_hashTable = new Array(f.b2_tableCapacity);
                e = 0;
                for (; e < f.b2_tableCapacity; ++e) {
                  this.m_hashTable[e] = f.b2_nullPair;
                }
                this.m_pairs = new Array(c.b2_maxPairs);
                e = 0;
                for (; e < c.b2_maxPairs; ++e) {
                  this.m_pairs[e] = new f();
                }
                this.m_pairBuffer = new Array(c.b2_maxPairs);
                e = 0;
                for (; e < c.b2_maxPairs; ++e) {
                  this.m_pairBuffer[e] = new _();
                }
                for (e = 0; e < c.b2_maxPairs; ++e) {
                  this.m_pairs[e].proxyId1 = f.b2_nullProxy;
                  this.m_pairs[e].proxyId2 = f.b2_nullProxy;
                  this.m_pairs[e].userData = null;
                  this.m_pairs[e].status = 0;
                  this.m_pairs[e].next = e + 1;
                }
                this.m_pairs[c.b2_maxPairs - 1].next = f.b2_nullPair;
                this.m_pairCount = 0;
                this.m_pairBufferCount = 0;
              }
              var t = e.prototype;
              t.Initialize = function (e, t) {
                this.m_broadPhase = e;
                this.m_callback = t;
              };
              t.Destroy = function () {
                this.m_hashTable.length = 0;
                this.m_pairs.length = 0;
                this.m_pairBuffer.length = 0;
                this.m_hashTable = null;
                this.m_pairs = null;
                this.m_pairBuffer = null;
              };
              t.AddBufferedPair = function (e, t) {
                var n;
                var r = this.AddPair(e, t);
                if (r.IsBuffered() == 0) {
                  r.SetBuffered();
                  (n = this.m_pairBuffer[this.m_pairBufferCount]).proxyId1 = r.proxyId1;
                  n.proxyId2 = r.proxyId2;
                  ++this.m_pairBufferCount;
                }
                r.ClearRemoved();
                if (g.s_validate) {
                  this.ValidateBuffer();
                }
              };
              t.RemoveBufferedPair = function (e, t) {
                var n;
                var r = this.Find(e, t);
                if (r != null) {
                  if (r.IsBuffered() == 0) {
                    r.SetBuffered();
                    (n = this.m_pairBuffer[this.m_pairBufferCount]).proxyId1 = r.proxyId1;
                    n.proxyId2 = r.proxyId2;
                    ++this.m_pairBufferCount;
                  }
                  r.SetRemoved();
                  if (g.s_validate) {
                    this.ValidateBuffer();
                  }
                }
              };
              t.Commit = function () {
                var e;
                var t;
                var n = 0;
                var r = this.m_broadPhase.m_proxyPool;
                for (t = 0; t < this.m_pairBufferCount; ++t) {
                  e = this.m_pairBuffer[t];
                  var i = this.Find(e.proxyId1, e.proxyId2);
                  i.ClearBuffered();
                  var s = r[i.proxyId1];
                  var a = r[i.proxyId2];
                  if (i.IsRemoved()) {
                    if (i.IsFinal() == 1) {
                      this.m_callback.PairRemoved(s.userData, a.userData, i.userData);
                    }
                    (e = this.m_pairBuffer[n]).proxyId1 = i.proxyId1;
                    e.proxyId2 = i.proxyId2;
                    ++n;
                  } else if (i.IsFinal() == 0) {
                    i.userData = this.m_callback.PairAdded(s.userData, a.userData);
                    i.SetFinal();
                  }
                }
                for (t = 0; t < n; ++t) {
                  e = this.m_pairBuffer[t];
                  this.RemovePair(e.proxyId1, e.proxyId2);
                }
                this.m_pairBufferCount = 0;
                if (g.s_validate) {
                  this.ValidateTable();
                }
              };
              t.AddPair = function (t, n) {
                if (t > n) {
                  var r = t;
                  t = n;
                  n = r;
                }
                var i = e.Hash(t, n) & f.b2_tableMask;
                var s = this.FindHash(t, n, i);
                if (s != null) {
                  return s;
                }
                var a = this.m_freePair;
                s = this.m_pairs[a];
                this.m_freePair = s.next;
                s.proxyId1 = t;
                s.proxyId2 = n;
                s.status = 0;
                s.userData = null;
                s.next = this.m_hashTable[i];
                this.m_hashTable[i] = a;
                ++this.m_pairCount;
                return s;
              };
              t.RemovePair = function (t, n) {
                var r;
                if (t > n) {
                  var i = t;
                  t = n;
                  n = i;
                }
                var s = e.Hash(t, n) & f.b2_tableMask;
                for (var a = this.m_hashTable[s], o = null; a != f.b2_nullPair;) {
                  if (e.Equals(this.m_pairs[a], t, n)) {
                    var h = a;
                    r = this.m_pairs[a];
                    if (o) {
                      o.next = r.next;
                    } else {
                      this.m_hashTable[s] = r.next;
                    }
                    var l = (r = this.m_pairs[h]).userData;
                    r.next = this.m_freePair;
                    r.proxyId1 = f.b2_nullProxy;
                    r.proxyId2 = f.b2_nullProxy;
                    r.userData = null;
                    r.status = 0;
                    this.m_freePair = h;
                    --this.m_pairCount;
                    return l;
                  }
                  a = (o = this.m_pairs[a]).next;
                }
                return null;
              };
              t.Find = function (t, n) {
                if (t > n) {
                  var r = t;
                  t = n;
                  n = r;
                }
                var i = e.Hash(t, n) & f.b2_tableMask;
                return this.FindHash(t, n, i);
              };
              t.FindHash = function (t, n, r) {
                var i;
                var s = this.m_hashTable[r];
                for (i = this.m_pairs[s]; s != f.b2_nullPair && e.Equals(i, t, n) == 0;) {
                  s = i.next;
                  i = this.m_pairs[s];
                }
                if (s == f.b2_nullPair) {
                  return null;
                } else {
                  return i;
                }
              };
              t.ValidateBuffer = function () {};
              t.ValidateTable = function () {};
              e.Hash = function (e, t) {
                var n = t << 16 & -65536 | e;
                n = ~n + (n << 15 & -32768);
                n ^= n >> 12 & 1048575;
                n += n << 2 & -4;
                n ^= n >> 4 & 268435455;
                return (n *= 2057) ^ n >> 16 & 65535;
              };
              e.Equals = function (e, t, n) {
                return e.proxyId1 == t && e.proxyId2 == n;
              };
              e.EqualsPair = function (e, t) {
                return e.proxyId1 == t.proxyId1 && e.proxyId2 == t.proxyId2;
              };
              return e;
            }();
            var y = function () {
              function e() {
                this.lowerBounds = [0, 0];
                this.upperBounds = [0, 0];
                this.userData = null;
              }
              var t = e.prototype;
              t.GetNext = function () {
                return this.lowerBounds[0];
              };
              t.SetNext = function (e) {
                this.lowerBounds[0] = e & 65535;
              };
              t.IsValid = function () {
                return this.overlapCount != g.b2_invalid;
              };
              return e;
            }();
            var g = function () {
              function e(t, n) {
                var r;
                this.m_pairManager = new v();
                this.m_proxyPool = new Array(c.b2_maxPairs);
                this.m_bounds = new Array(c.b2_maxProxies * 2);
                this.m_queryResults = new Array(c.b2_maxProxies);
                this.m_quantizationFactor = new l();
                this.m_pairManager.Initialize(this, n);
                this.m_worldAABB = t;
                this.m_proxyCount = 0;
                r = 0;
                for (; r < c.b2_maxProxies; r++) {
                  this.m_queryResults[r] = 0;
                }
                this.m_bounds = new Array(2);
                r = 0;
                for (; r < 2; r++) {
                  this.m_bounds[r] = new Array(c.b2_maxProxies * 2);
                  for (var i = 0; i < c.b2_maxProxies * 2; i++) {
                    this.m_bounds[r][i] = new p();
                  }
                }
                var s;
                var a = t.upperBound.x - t.lowerBound.x;
                var o = t.upperBound.y - t.lowerBound.y;
                this.m_quantizationFactor.x = c.USHRT_MAX / a;
                this.m_quantizationFactor.y = c.USHRT_MAX / o;
                r = 0;
                for (; r < c.b2_maxProxies - 1; ++r) {
                  s = new y();
                  this.m_proxyPool[r] = s;
                  s.SetNext(r + 1);
                  s.timeStamp = 0;
                  s.overlapCount = e.b2_invalid;
                  s.userData = null;
                }
                s = new y();
                this.m_proxyPool[c.b2_maxProxies - 1] = s;
                s.SetNext(f.b2_nullProxy);
                s.timeStamp = 0;
                s.overlapCount = e.b2_invalid;
                s.userData = null;
                this.m_freeProxy = 0;
                this.m_timeStamp = 1;
                this.m_queryResultCount = 0;
              }
              var t = e.prototype;
              t.Destroy = function () {
                this.m_bounds.length = 0;
                this.m_proxyPool.length = 0;
                this.m_bounds = null;
                this.m_proxyPool = null;
                this.m_pairManager.Destroy();
              };
              t.InRange = function (e) {
                var t;
                var n;
                var r;
                var i;
                t = e.lowerBound.x;
                n = e.lowerBound.y;
                t -= this.m_worldAABB.upperBound.x;
                n -= this.m_worldAABB.upperBound.y;
                r = this.m_worldAABB.lowerBound.x;
                i = this.m_worldAABB.lowerBound.y;
                r -= e.upperBound.x;
                i -= e.upperBound.y;
                t = h.b2Max(t, r);
                n = h.b2Max(n, i);
                return h.b2Max(t, n) < 0;
              };
              t.GetProxy = function (e) {
                var t = this.m_proxyPool[e];
                if (e == f.b2_nullProxy || t.IsValid() == 0) {
                  return null;
                } else {
                  return t;
                }
              };
              t.CreateProxy = function (e, t) {
                var n;
                var r;
                var i = this.m_freeProxy;
                r = this.m_proxyPool[i];
                this.m_freeProxy = r.GetNext();
                r.overlapCount = 0;
                r.userData = t;
                var s = this.m_proxyCount * 2;
                var a = new Array(2);
                var o = new Array(2);
                this.ComputeBounds(a, o, e);
                for (var h = 0; h < 2; ++h) {
                  var l;
                  var d;
                  var c = this.m_bounds[h];
                  var u = [l];
                  var m = [d];
                  this.Query(u, m, a[h], o[h], c, s, h);
                  l = u[0];
                  var f;
                  var _;
                  var v;
                  var y;
                  var g = s - (d = m[0]);
                  var w = new Array(g);
                  for (f = 0; f < g; f++) {
                    w[f] = new p();
                    _ = w[f];
                    v = c[d + f];
                    _.value = v.value;
                    _.proxyId = v.proxyId;
                    _.stabbingCount = v.stabbingCount;
                  }
                  g = w.length;
                  var x = d + 2;
                  for (f = 0; f < g; f++) {
                    v = w[f];
                    (_ = c[x + f]).value = v.value;
                    _.proxyId = v.proxyId;
                    _.stabbingCount = v.stabbingCount;
                  }
                  g = d - l;
                  w = new Array(g);
                  f = 0;
                  for (; f < g; f++) {
                    w[f] = new p();
                    _ = w[f];
                    v = c[l + f];
                    _.value = v.value;
                    _.proxyId = v.proxyId;
                    _.stabbingCount = v.stabbingCount;
                  }
                  g = w.length;
                  x = l + 1;
                  f = 0;
                  for (; f < g; f++) {
                    v = w[f];
                    (_ = c[x + f]).value = v.value;
                    _.proxyId = v.proxyId;
                    _.stabbingCount = v.stabbingCount;
                  }
                  ++d;
                  _ = c[l];
                  v = c[d];
                  _.value = a[h];
                  _.proxyId = i;
                  v.value = o[h];
                  v.proxyId = i;
                  y = c[l - 1];
                  _.stabbingCount = l == 0 ? 0 : y.stabbingCount;
                  y = c[d - 1];
                  v.stabbingCount = y.stabbingCount;
                  n = l;
                  for (; n < d; ++n) {
                    (y = c[n]).stabbingCount++;
                  }
                  for (n = l; n < s + 2; ++n) {
                    _ = c[n];
                    var b = this.m_proxyPool[_.proxyId];
                    if (_.IsLower()) {
                      b.lowerBounds[h] = n;
                    } else {
                      b.upperBounds[h] = n;
                    }
                  }
                }
                ++this.m_proxyCount;
                for (var T = 0; T < this.m_queryResultCount; ++T) {
                  this.m_pairManager.AddBufferedPair(i, this.m_queryResults[T]);
                }
                this.m_pairManager.Commit();
                this.m_queryResultCount = 0;
                this.IncrementTimeStamp();
                return i;
              };
              t.DestroyProxy = function (t) {
                var n;
                var r;
                var i = this.m_proxyPool[t];
                var s = this.m_proxyCount * 2;
                for (var a = 0; a < 2; ++a) {
                  var o;
                  var h = this.m_bounds[a];
                  var l = i.lowerBounds[a];
                  var d = i.upperBounds[a];
                  var c = (n = h[l]).value;
                  var u = (r = h[d]).value;
                  var m = d - l - 1;
                  var f = new Array(m);
                  for (o = 0; o < m; o++) {
                    f[o] = new p();
                    n = f[o];
                    r = h[l + 1 + o];
                    n.value = r.value;
                    n.proxyId = r.proxyId;
                    n.stabbingCount = r.stabbingCount;
                  }
                  m = f.length;
                  var _ = l;
                  for (o = 0; o < m; o++) {
                    r = f[o];
                    (n = h[_ + o]).value = r.value;
                    n.proxyId = r.proxyId;
                    n.stabbingCount = r.stabbingCount;
                  }
                  m = s - d - 1;
                  f = new Array(m);
                  o = 0;
                  for (; o < m; o++) {
                    f[o] = new p();
                    n = f[o];
                    r = h[d + 1 + o];
                    n.value = r.value;
                    n.proxyId = r.proxyId;
                    n.stabbingCount = r.stabbingCount;
                  }
                  m = f.length;
                  _ = d - 1;
                  o = 0;
                  for (; o < m; o++) {
                    r = f[o];
                    (n = h[_ + o]).value = r.value;
                    n.proxyId = r.proxyId;
                    n.stabbingCount = r.stabbingCount;
                  }
                  m = s - 2;
                  for (var v = l; v < m; ++v) {
                    n = h[v];
                    var y = this.m_proxyPool[n.proxyId];
                    if (n.IsLower()) {
                      y.lowerBounds[a] = v;
                    } else {
                      y.upperBounds[a] = v;
                    }
                  }
                  m = d - 1;
                  for (var g = l; g < m; ++g) {
                    (n = h[g]).stabbingCount--;
                  }
                  this.Query([0], [0], c, u, h, s - 2, a);
                }
                for (var w = 0; w < this.m_queryResultCount; ++w) {
                  this.m_pairManager.RemoveBufferedPair(t, this.m_queryResults[w]);
                }
                this.m_pairManager.Commit();
                this.m_queryResultCount = 0;
                this.IncrementTimeStamp();
                i.userData = null;
                i.overlapCount = e.b2_invalid;
                i.lowerBounds[0] = e.b2_invalid;
                i.lowerBounds[1] = e.b2_invalid;
                i.upperBounds[0] = e.b2_invalid;
                i.upperBounds[1] = e.b2_invalid;
                i.SetNext(this.m_freeProxy);
                this.m_freeProxy = t;
                --this.m_proxyCount;
              };
              t.MoveProxy = function (e, t) {
                var n;
                var r;
                var i;
                var s;
                var a;
                var o;
                var h;
                var l;
                var d;
                if (e != f.b2_nullProxy && !(c.b2_maxProxies <= e) && t.IsValid() != 0) {
                  var u = this.m_proxyCount * 2;
                  var p = this.m_proxyPool[e];
                  var _ = new m();
                  this.ComputeBounds(_.lowerValues, _.upperValues, t);
                  var v = new m();
                  for (i = 0; i < 2; ++i) {
                    a = this.m_bounds[i][p.lowerBounds[i]];
                    v.lowerValues[i] = a.value;
                    a = this.m_bounds[i][p.upperBounds[i]];
                    v.upperValues[i] = a.value;
                  }
                  for (i = 0; i < 2; ++i) {
                    var y = this.m_bounds[i];
                    var g = p.lowerBounds[i];
                    var w = p.upperBounds[i];
                    var x = _.lowerValues[i];
                    var b = _.upperValues[i];
                    var T = x - (a = y[g]).value;
                    a.value = x;
                    var A = b - (a = y[w]).value;
                    a.value = b;
                    if (T < 0) {
                      for (s = g; s > 0 && x < y[s - 1].value;) {
                        a = y[s];
                        var C = (o = y[s - 1]).proxyId;
                        var S = this.m_proxyPool[o.proxyId];
                        o.stabbingCount++;
                        if (o.IsUpper() == 1) {
                          if (this.TestOverlap(_, S)) {
                            this.m_pairManager.AddBufferedPair(e, C);
                          }
                          r = (n = S.upperBounds)[i];
                          r++;
                          n[i] = r;
                          a.stabbingCount++;
                        } else {
                          r = (n = S.lowerBounds)[i];
                          r++;
                          n[i] = r;
                          a.stabbingCount--;
                        }
                        r = (n = p.lowerBounds)[i];
                        r--;
                        n[i] = r;
                        a.Swap(o);
                        --s;
                      }
                    }
                    if (A > 0) {
                      for (s = w; s < u - 1 && y[s + 1].value <= b;) {
                        a = y[s];
                        l = (h = y[s + 1]).proxyId;
                        d = this.m_proxyPool[l];
                        h.stabbingCount++;
                        if (h.IsLower() == 1) {
                          if (this.TestOverlap(_, d)) {
                            this.m_pairManager.AddBufferedPair(e, l);
                          }
                          r = (n = d.lowerBounds)[i];
                          r--;
                          n[i] = r;
                          a.stabbingCount++;
                        } else {
                          r = (n = d.upperBounds)[i];
                          r--;
                          n[i] = r;
                          a.stabbingCount--;
                        }
                        r = (n = p.upperBounds)[i];
                        r++;
                        n[i] = r;
                        a.Swap(h);
                        s++;
                      }
                    }
                    if (T > 0) {
                      for (s = g; s < u - 1 && y[s + 1].value <= x;) {
                        a = y[s];
                        l = (h = y[s + 1]).proxyId;
                        d = this.m_proxyPool[l];
                        h.stabbingCount--;
                        if (h.IsUpper()) {
                          if (this.TestOverlap(v, d)) {
                            this.m_pairManager.RemoveBufferedPair(e, l);
                          }
                          r = (n = d.upperBounds)[i];
                          r--;
                          n[i] = r;
                          a.stabbingCount--;
                        } else {
                          r = (n = d.lowerBounds)[i];
                          r--;
                          n[i] = r;
                          a.stabbingCount++;
                        }
                        r = (n = p.lowerBounds)[i];
                        r++;
                        n[i] = r;
                        a.Swap(h);
                        s++;
                      }
                    }
                    if (A < 0) {
                      for (s = w; s > 0 && b < y[s - 1].value;) {
                        a = y[s];
                        C = (o = y[s - 1]).proxyId;
                        S = this.m_proxyPool[C];
                        o.stabbingCount--;
                        if (o.IsLower() == 1) {
                          if (this.TestOverlap(v, S)) {
                            this.m_pairManager.RemoveBufferedPair(e, C);
                          }
                          r = (n = S.lowerBounds)[i];
                          r++;
                          n[i] = r;
                          a.stabbingCount--;
                        } else {
                          r = (n = S.upperBounds)[i];
                          r++;
                          n[i] = r;
                          a.stabbingCount++;
                        }
                        r = (n = p.upperBounds)[i];
                        r--;
                        n[i] = r;
                        a.Swap(o);
                        s--;
                      }
                    }
                  }
                }
              };
              t.Commit = function () {
                this.m_pairManager.Commit();
              };
              t.QueryAABB = function (e, t, n) {
                var r = new Array(2);
                var i = new Array(2);
                this.ComputeBounds(r, i, e);
                var s = [undefined];
                var a = [undefined];
                this.Query(s, a, r[0], i[0], this.m_bounds[0], this.m_proxyCount * 2, 0);
                this.Query(s, a, r[1], i[1], this.m_bounds[1], this.m_proxyCount * 2, 1);
                for (var o = 0, h = 0; h < this.m_queryResultCount && o < n; ++h, ++o) {
                  var l = this.m_proxyPool[this.m_queryResults[h]];
                  t[h] = l.userData;
                }
                this.m_queryResultCount = 0;
                this.IncrementTimeStamp();
                return o;
              };
              t.Validate = function () {
                for (var e = 0; e < 2; ++e) {
                  var t = this.m_bounds[e];
                  for (var n = this.m_proxyCount * 2, r = 0; r < n; ++r) {
                    t[r].IsLower();
                  }
                }
              };
              t.ComputeBounds = function (e, t, n) {
                var r = n.lowerBound.x;
                var i = n.lowerBound.y;
                r = h.b2Min(r, this.m_worldAABB.upperBound.x);
                i = h.b2Min(i, this.m_worldAABB.upperBound.y);
                r = h.b2Max(r, this.m_worldAABB.lowerBound.x);
                i = h.b2Max(i, this.m_worldAABB.lowerBound.y);
                var s = n.upperBound.x;
                var a = n.upperBound.y;
                s = h.b2Min(s, this.m_worldAABB.upperBound.x);
                a = h.b2Min(a, this.m_worldAABB.upperBound.y);
                s = h.b2Max(s, this.m_worldAABB.lowerBound.x);
                a = h.b2Max(a, this.m_worldAABB.lowerBound.y);
                e[0] = this.m_quantizationFactor.x * (r - this.m_worldAABB.lowerBound.x) & c.USHRT_MAX - 1;
                t[0] = this.m_quantizationFactor.x * (s - this.m_worldAABB.lowerBound.x) & 65535 | 1;
                e[1] = this.m_quantizationFactor.y * (i - this.m_worldAABB.lowerBound.y) & c.USHRT_MAX - 1;
                t[1] = this.m_quantizationFactor.y * (a - this.m_worldAABB.lowerBound.y) & 65535 | 1;
              };
              t.TestOverlap = function (e, t) {
                for (var n = 0; n < 2; ++n) {
                  var r = this.m_bounds[n];
                  var i = r[t.upperBounds[n]];
                  if (e.lowerValues[n] > i.value) {
                    return false;
                  }
                  i = r[t.lowerBounds[n]];
                  if (e.upperValues[n] < i.value) {
                    return false;
                  }
                }
                return true;
              };
              t.Query = function (t, n, r, i, s, a, o) {
                var h;
                var l = e.BinarySearch(s, a, r);
                for (var d = e.BinarySearch(s, a, i), c = l; c < d; ++c) {
                  if ((h = s[c]).IsLower()) {
                    this.IncrementOverlapCount(h.proxyId);
                  }
                }
                if (l > 0) {
                  var u = l - 1;
                  for (var p = (h = s[u]).stabbingCount; p;) {
                    if ((h = s[u]).IsLower() && l <= this.m_proxyPool[h.proxyId].upperBounds[o]) {
                      this.IncrementOverlapCount(h.proxyId);
                      --p;
                    }
                    --u;
                  }
                }
                t[0] = l;
                n[0] = d;
              };
              t.IncrementOverlapCount = function (e) {
                var t = this.m_proxyPool[e];
                if (t.timeStamp < this.m_timeStamp) {
                  t.timeStamp = this.m_timeStamp;
                  t.overlapCount = 1;
                } else {
                  t.overlapCount = 2;
                  this.m_queryResults[this.m_queryResultCount] = e;
                  ++this.m_queryResultCount;
                }
              };
              t.IncrementTimeStamp = function () {
                if (this.m_timeStamp == c.USHRT_MAX) {
                  for (var e = 0; e < c.b2_maxProxies; ++e) {
                    this.m_proxyPool[e].timeStamp = 0;
                  }
                  this.m_timeStamp = 1;
                } else {
                  ++this.m_timeStamp;
                }
              };
              e.BinarySearch = function (e, t, n) {
                for (var r = 0, i = t - 1; r <= i;) {
                  var s = Math.trunc((r + i) / 2);
                  var a = e[s];
                  if (a.value > n) {
                    i = s - 1;
                  } else {
                    if (!(a.value < n)) {
                      return s;
                    }
                    r = s + 1;
                  }
                }
                return r;
              };
              return e;
            }();
            function w(e) {
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
            g.s_validate = false;
            g.b2_invalid = c.USHRT_MAX;
            g.b2_nullEdge = c.USHRT_MAX;
            var x = function () {
              e = function () {};
              if (t = [{
                key: "referenceEdge",
                get: function () {
                  return this._referenceEdge;
                },
                set: function (e) {
                  this._referenceEdge = e;
                  this._m_id._key = this._m_id._key & -256 | this._referenceEdge & 255;
                }
              }, {
                key: "incidentEdge",
                get: function () {
                  return this._incidentEdge;
                },
                set: function (e) {
                  this._incidentEdge = e;
                  this._m_id._key = this._m_id._key & -65281 | this._incidentEdge << 8 & 65280;
                }
              }, {
                key: "incidentVertex",
                get: function () {
                  return this._incidentVertex;
                },
                set: function (e) {
                  this._incidentVertex = e;
                  this._m_id._key = this._m_id._key & -16711681 | this._incidentVertex << 16 & 16711680;
                }
              }, {
                key: "flip",
                get: function () {
                  return this._flip;
                },
                set: function (e) {
                  this._flip = e;
                  this._m_id._key = this._m_id._key & 16777215 | this._flip << 24 & -16777216;
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
                    Object.defineProperty(e, w(r.key), r);
                  }
                })(e.prototype, t);
              }
              Object.defineProperty(e, "prototype", {
                writable: false
              });
              return e;
              var e;
              var t;
            }();
            function b(e) {
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
            var T = function () {
              function e() {
                this.features = new x();
                this.features._m_id = this;
              }
              var t;
              var n;
              var r = e.prototype;
              r.Set = function (e) {
                this.key = e._key;
              };
              r.Copy = function () {
                var t = new e();
                t.key = this.key;
                return t;
              };
              t = e;
              if (n = [{
                key: "key",
                get: function () {
                  return this._key;
                },
                set: function (e) {
                  this._key = e;
                  this.features._referenceEdge = this._key & 255;
                  this.features._incidentEdge = (this._key & 65280) >> 8 & 255;
                  this.features._incidentVertex = (this._key & 16711680) >> 16 & 255;
                  this.features._flip = (this._key & -16777216) >> 24 & 255;
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
                    Object.defineProperty(e, b(r.key), r);
                  }
                })(t.prototype, n);
              }
              Object.defineProperty(t, "prototype", {
                writable: false
              });
              return t;
            }();
            function A() {
              this.v = new l();
              this.id = new T();
            }
            var C = function () {
              function e() {}
              e.ClipSegmentToLine = function (e, t, n, r) {
                var i;
                var s = 0;
                var a = (i = t[0]).v;
                var o = (i = t[1]).v;
                var l = h.b2Dot(n, a) - r;
                var d = h.b2Dot(n, o) - r;
                if (l <= 0) {
                  e[s++] = t[0];
                }
                if (d <= 0) {
                  e[s++] = t[1];
                }
                if (l * d < 0) {
                  var c;
                  var u = l / (l - d);
                  var p = (i = e[s]).v;
                  p.x = a.x + u * (o.x - a.x);
                  p.y = a.y + u * (o.y - a.y);
                  i = e[s];
                  if (l > 0) {
                    c = t[0];
                    i.id = c.id;
                  } else {
                    c = t[1];
                    i.id = c.id;
                  }
                  ++s;
                }
                return s;
              };
              e.EdgeSeparation = function (e, t, n, r, i) {
                var s;
                var a;
                var o = e.m_vertices;
                var h = e.m_normals;
                var l = r.m_vertexCount;
                var d = r.m_vertices;
                s = t.R;
                a = h[n];
                var c = s.col1.x * a.x + s.col2.x * a.y;
                var u = s.col1.y * a.x + s.col2.y * a.y;
                var p = (s = i.R).col1.x * c + s.col1.y * u;
                var m = s.col2.x * c + s.col2.y * u;
                var f = 0;
                var _ = Number.MAX_VALUE;
                for (var v = 0; v < l; ++v) {
                  var y = (a = d[v]).x * p + a.y * m;
                  if (y < _) {
                    _ = y;
                    f = v;
                  }
                }
                a = o[n];
                s = t.R;
                var g = t.position.x + (s.col1.x * a.x + s.col2.x * a.y);
                var w = t.position.y + (s.col1.y * a.x + s.col2.y * a.y);
                a = d[f];
                s = i.R;
                var x = i.position.x + (s.col1.x * a.x + s.col2.x * a.y);
                var b = i.position.y + (s.col1.y * a.x + s.col2.y * a.y);
                return (x -= g) * c + (b -= w) * u;
              };
              e.FindMaxSeparation = function (t, n, r, i, s) {
                var a;
                var o;
                var h = n.m_vertexCount;
                var l = n.m_normals;
                o = s.R;
                a = i.m_centroid;
                var d = s.position.x + (o.col1.x * a.x + o.col2.x * a.y);
                var c = s.position.y + (o.col1.y * a.x + o.col2.y * a.y);
                o = r.R;
                a = n.m_centroid;
                d -= r.position.x + (o.col1.x * a.x + o.col2.x * a.y);
                c -= r.position.y + (o.col1.y * a.x + o.col2.y * a.y);
                var u = d * r.R.col1.x + c * r.R.col1.y;
                var p = d * r.R.col2.x + c * r.R.col2.y;
                var m = 0;
                var f = -Number.MAX_VALUE;
                for (var _ = 0; _ < h; ++_) {
                  var v = (a = l[_]).x * u + a.y * p;
                  if (v > f) {
                    f = v;
                    m = _;
                  }
                }
                var y = e.EdgeSeparation(n, r, m, i, s);
                if (y > 0) {
                  return y;
                }
                var g = m - 1 >= 0 ? m - 1 : h - 1;
                var w = e.EdgeSeparation(n, r, g, i, s);
                if (w > 0) {
                  return w;
                }
                var x;
                var b;
                var T;
                var A = m + 1 < h ? m + 1 : 0;
                var C = e.EdgeSeparation(n, r, A, i, s);
                if (C > 0) {
                  return C;
                }
                if (w > y && w > C) {
                  T = -1;
                  x = g;
                  b = w;
                } else {
                  if (!(C > y)) {
                    t[0] = m;
                    return y;
                  }
                  T = 1;
                  x = A;
                  b = C;
                }
                while (true) {
                  m = T == -1 ? x - 1 >= 0 ? x - 1 : h - 1 : x + 1 < h ? x + 1 : 0;
                  if ((y = e.EdgeSeparation(n, r, m, i, s)) > 0) {
                    return y;
                  }
                  if (!(y > b)) {
                    break;
                  }
                  x = m;
                  b = y;
                }
                t[0] = x;
                return b;
              };
              e.FindIncidentEdge = function (e, t, n, r, i, s) {
                var a;
                var o;
                var h = t.m_normals;
                var l = i.m_vertexCount;
                var d = i.m_vertices;
                var c = i.m_normals;
                a = n.R;
                o = h[r];
                var u = a.col1.x * o.x + a.col2.x * o.y;
                var p = a.col1.y * o.x + a.col2.y * o.y;
                var m = (a = s.R).col1.x * u + a.col1.y * p;
                p = a.col2.x * u + a.col2.y * p;
                u = m;
                var f;
                var _ = 0;
                var v = Number.MAX_VALUE;
                for (var y = 0; y < l; ++y) {
                  var g = u * (o = c[y]).x + p * o.y;
                  if (g < v) {
                    v = g;
                    _ = y;
                  }
                }
                var w = _;
                var x = w + 1 < l ? w + 1 : 0;
                f = e[0];
                o = d[w];
                a = s.R;
                f.v.x = s.position.x + (a.col1.x * o.x + a.col2.x * o.y);
                f.v.y = s.position.y + (a.col1.y * o.x + a.col2.y * o.y);
                f.id.features.referenceEdge = r;
                f.id.features.incidentEdge = w;
                f.id.features.incidentVertex = 0;
                f = e[1];
                o = d[x];
                a = s.R;
                f.v.x = s.position.x + (a.col1.x * o.x + a.col2.x * o.y);
                f.v.y = s.position.y + (a.col1.y * o.x + a.col2.y * o.y);
                f.id.features.referenceEdge = r;
                f.id.features.incidentEdge = x;
                f.id.features.incidentVertex = 1;
              };
              e.b2CollidePolygons = function (t, n, r, i, a) {
                var o;
                t.pointCount = 0;
                var l = 0;
                var d = [l];
                var u = e.FindMaxSeparation(d, n, r, i, a);
                l = d[0];
                if (!(u > 0)) {
                  var p = 0;
                  var m = [p];
                  var f = e.FindMaxSeparation(m, i, a, n, r);
                  p = m[0];
                  if (!(f > 0)) {
                    var _;
                    var v;
                    var y;
                    var g;
                    var w = new s();
                    var x = new s();
                    if (f > u * 0.98 + 0.001) {
                      _ = i;
                      v = n;
                      w.Set(a);
                      x.Set(r);
                      y = p;
                      g = 1;
                    } else {
                      _ = n;
                      v = i;
                      w.Set(r);
                      x.Set(a);
                      y = l;
                      g = 0;
                    }
                    var b = [new A(), new A()];
                    e.FindIncidentEdge(b, _, w, y, v, x);
                    var T;
                    var C = _.m_vertexCount;
                    var S = _.m_vertices;
                    var E = S[y];
                    var O = E.Copy();
                    T = y + 1 < C ? (E = S[y + 1]).Copy() : (E = S[0]).Copy();
                    var k = h.b2MulMV(w.R, h.SubtractVV(T, O));
                    k.Normalize();
                    var P = h.b2CrossVF(k, 1);
                    O = h.b2MulX(w, O);
                    T = h.b2MulX(w, T);
                    var M = h.b2Dot(P, O);
                    var R = -h.b2Dot(k, O);
                    var I = h.b2Dot(k, T);
                    var L = [new A(), new A()];
                    var j = [new A(), new A()];
                    if (!(e.ClipSegmentToLine(L, b, k.Negative(), R) < 2) && !(e.ClipSegmentToLine(j, L, k, I) < 2)) {
                      t.normal = g ? P.Negative() : P.Copy();
                      var B = 0;
                      for (var D = 0; D < c.b2_maxManifoldPoints; ++D) {
                        o = j[D];
                        var F = h.b2Dot(P, o.v) - M;
                        if (F <= 0) {
                          var N = t.points[B];
                          N.separation = F;
                          N.localPoint1 = h.b2MulXT(r, o.v);
                          N.localPoint2 = h.b2MulXT(a, o.v);
                          N.id.key = o.id._key;
                          N.id.features.flip = g;
                          ++B;
                        }
                      }
                      t.pointCount = B;
                    }
                  }
                }
              };
              e.b2CollideCircles = function (e, t, n, r, i) {
                var s;
                var a;
                e.pointCount = 0;
                s = n.R;
                a = t.m_localPosition;
                var o = n.position.x + (s.col1.x * a.x + s.col2.x * a.y);
                var h = n.position.y + (s.col1.y * a.x + s.col2.y * a.y);
                s = i.R;
                a = r.m_localPosition;
                var l = i.position.x + (s.col1.x * a.x + s.col2.x * a.y);
                var d = i.position.y + (s.col1.y * a.x + s.col2.y * a.y);
                var c = l - o;
                var u = d - h;
                var p = c * c + u * u;
                var m = t.m_radius;
                var f = r.m_radius;
                var _ = m + f;
                if (!(p > _ * _)) {
                  var v;
                  if (p < Number.MIN_VALUE) {
                    v = -_;
                    e.normal.Set(0, 1);
                  } else {
                    var y = Math.sqrt(p);
                    v = y - _;
                    var g = 1 / y;
                    e.normal.x = g * c;
                    e.normal.y = g * u;
                  }
                  e.pointCount = 1;
                  var w = e.points[0];
                  w.id.key = 0;
                  w.separation = v;
                  o += m * e.normal.x;
                  h += m * e.normal.y;
                  var x = (o + (l -= f * e.normal.x)) * 0.5;
                  var b = (h + (d -= f * e.normal.y)) * 0.5;
                  var T = x - n.position.x;
                  var A = b - n.position.y;
                  w.localPoint1.x = T * n.R.col1.x + A * n.R.col1.y;
                  w.localPoint1.y = T * n.R.col2.x + A * n.R.col2.y;
                  T = x - i.position.x;
                  A = b - i.position.y;
                  w.localPoint2.x = T * i.R.col1.x + A * i.R.col1.y;
                  w.localPoint2.y = T * i.R.col2.x + A * i.R.col2.y;
                }
              };
              e.b2CollidePolygonAndCircle = function (t, n, r, i, s) {
                var a;
                var o;
                var h;
                var l;
                var d;
                var c;
                var u;
                t.pointCount = 0;
                u = s.R;
                c = i.m_localPosition;
                var p = s.position.x + (u.col1.x * c.x + u.col2.x * c.y);
                var m = s.position.y + (u.col1.y * c.x + u.col2.y * c.y);
                o = p - r.position.x;
                h = m - r.position.y;
                var f = o * (u = r.R).col1.x + h * u.col1.y;
                var _ = o * u.col2.x + h * u.col2.y;
                var v = 0;
                var y = -Number.MAX_VALUE;
                var g = i.m_radius;
                for (var w = n.m_vertexCount, x = n.m_vertices, b = n.m_normals, T = 0; T < w; ++T) {
                  o = f - (c = x[T]).x;
                  h = _ - c.y;
                  var A = (c = b[T]).x * o + c.y * h;
                  if (A > g) {
                    return;
                  }
                  if (A > y) {
                    y = A;
                    v = T;
                  }
                }
                if (y < Number.MIN_VALUE) {
                  t.pointCount = 1;
                  c = b[v];
                  u = r.R;
                  t.normal.x = u.col1.x * c.x + u.col2.x * c.y;
                  t.normal.y = u.col1.y * c.x + u.col2.y * c.y;
                  (a = t.points[0]).id.features.incidentEdge = v;
                  a.id.features.incidentVertex = e.b2_nullFeature;
                  a.id.features.referenceEdge = 0;
                  a.id.features.flip = 0;
                  l = p - g * t.normal.x;
                  d = m - g * t.normal.y;
                  o = l - r.position.x;
                  h = d - r.position.y;
                  u = r.R;
                  a.localPoint1.x = o * u.col1.x + h * u.col1.y;
                  a.localPoint1.y = o * u.col2.x + h * u.col2.y;
                  o = l - s.position.x;
                  h = d - s.position.y;
                  u = s.R;
                  a.localPoint2.x = o * u.col1.x + h * u.col1.y;
                  a.localPoint2.y = o * u.col2.x + h * u.col2.y;
                  a.separation = y - g;
                  return;
                }
                var C = v;
                var S = C + 1 < w ? C + 1 : 0;
                c = x[C];
                var E = x[S];
                var O = E.x - c.x;
                var k = E.y - c.y;
                var P = Math.sqrt(O * O + k * k);
                O /= P;
                k /= P;
                var M;
                var R;
                var I = (o = f - c.x) * O + (h = _ - c.y) * k;
                a = t.points[0];
                if (I <= 0) {
                  M = c.x;
                  R = c.y;
                  a.id.features.incidentEdge = e.b2_nullFeature;
                  a.id.features.incidentVertex = C;
                } else if (I >= P) {
                  M = E.x;
                  R = E.y;
                  a.id.features.incidentEdge = e.b2_nullFeature;
                  a.id.features.incidentVertex = S;
                } else {
                  M = O * I + c.x;
                  R = k * I + c.y;
                  a.id.features.incidentEdge = v;
                  a.id.features.incidentVertex = 0;
                }
                o = f - M;
                h = _ - R;
                var L = Math.sqrt(o * o + h * h);
                o /= L;
                h /= L;
                if (!(L > g)) {
                  t.pointCount = 1;
                  u = r.R;
                  t.normal.x = u.col1.x * o + u.col2.x * h;
                  t.normal.y = u.col1.y * o + u.col2.y * h;
                  l = p - g * t.normal.x;
                  d = m - g * t.normal.y;
                  o = l - r.position.x;
                  h = d - r.position.y;
                  u = r.R;
                  a.localPoint1.x = o * u.col1.x + h * u.col1.y;
                  a.localPoint1.y = o * u.col2.x + h * u.col2.y;
                  o = l - s.position.x;
                  h = d - s.position.y;
                  u = s.R;
                  a.localPoint2.x = o * u.col1.x + h * u.col1.y;
                  a.localPoint2.y = o * u.col2.x + h * u.col2.y;
                  a.separation = L - g;
                  a.id.features.referenceEdge = 0;
                  a.id.features.flip = 0;
                }
              };
              e.b2TestOverlap = function (e, t) {
                var n = t.lowerBound;
                var r = e.upperBound;
                var i = n.x - r.x;
                var s = n.y - r.y;
                n = e.lowerBound;
                r = t.upperBound;
                var a = n.x - r.x;
                var o = n.y - r.y;
                return !(i > 0) && !(s > 0) && !(a > 0) && !(o > 0);
              };
              return e;
            }();
            C.b2_nullFeature = 255;
            function S() {
              this.position = new l();
              this.velocity = new l();
              this.normal = new l();
              this.id = new T();
              this.swap = false;
            }
            var E = function () {
              function e() {
                this.p = new l();
              }
              var t = e.prototype;
              t.Support = function (e, t, n) {
                return this.p;
              };
              t.GetFirstVertex = function (e) {
                return this.p;
              };
              return e;
            }();
            n(2008);
            function O() {
              this.R = new i();
              this.center = new l();
              this.extents = new l();
            }
            function k(e, t) {
              e.prototype = Object.create(t.prototype);
              e.prototype.constructor = e;
              P(e, t);
            }
            function P(e, t) {
              P = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return P(e, t);
            }
            var M = function () {
              function e(e) {
                this.m_userData = e.userData;
                this.m_friction = e.friction;
                this.m_restitution = e.restitution;
                this.m_density = e.density;
                this.m_body = null;
                this.m_sweepRadius = 0;
                this.m_next = null;
                this.m_proxyId = f.b2_nullProxy;
                this.m_filter = e.filter.Copy();
                this.m_isSensor = e.isSensor;
              }
              var t = e.prototype;
              t.GetType = function () {
                return this.m_type;
              };
              t.IsSensor = function () {
                return this.m_isSensor;
              };
              t.SetFilterData = function (e) {
                this.m_filter = e.Copy();
              };
              t.GetFilterData = function () {
                return this.m_filter.Copy();
              };
              t.GetBody = function () {
                return this.m_body;
              };
              t.GetNext = function () {
                return this.m_next;
              };
              t.GetUserData = function () {
                return this.m_userData;
              };
              t.SetUserData = function (e) {
                this.m_userData = e;
              };
              t.GetMaterial = function () {
                return this.m_material;
              };
              t.SetMaterial = function (e) {
                this.m_material = e;
              };
              t.TestPoint = function (e, t) {
                return false;
              };
              t.TestSegment = function (e, t, n, r, i) {
                return false;
              };
              t.ComputeAABB = function (e, t) {};
              t.ComputeSweptAABB = function (e, t, n) {};
              t.ComputeMass = function (e) {};
              t.GetSweepRadius = function () {
                return this.m_sweepRadius;
              };
              t.GetFriction = function () {
                return this.m_friction;
              };
              t.GetRestitution = function () {
                return this.m_restitution;
              };
              e.Create = function (t, n) {
                switch (t.type) {
                  case e.e_circleShape:
                    return new R(t);
                  case e.e_polygonShape:
                    return new I(t);
                  default:
                    return null;
                }
              };
              e.Destroy = function (e, t) {};
              t.CreateProxy = function (t, n) {
                var r = e.s_proxyAABB;
                this.ComputeAABB(r, n);
                var i = t.InRange(r);
                this.m_proxyId = i ? t.CreateProxy(r, this) : f.b2_nullProxy;
              };
              t.DestroyProxy = function (e) {
                if (this.m_proxyId != f.b2_nullProxy) {
                  e.DestroyProxy(this.m_proxyId);
                  this.m_proxyId = f.b2_nullProxy;
                }
              };
              t.Synchronize = function (t, n, r) {
                if (this.m_proxyId == f.b2_nullProxy) {
                  return false;
                }
                var i = e.s_syncAABB;
                this.ComputeSweptAABB(i, n, r);
                return !!t.InRange(i) && (t.MoveProxy(this.m_proxyId, i), true);
              };
              t.RefilterProxy = function (t, n) {
                if (this.m_proxyId != f.b2_nullProxy) {
                  t.DestroyProxy(this.m_proxyId);
                  var r = e.s_resetAABB;
                  this.ComputeAABB(r, n);
                  var i = t.InRange(r);
                  this.m_proxyId = i ? t.CreateProxy(r, this) : f.b2_nullProxy;
                }
              };
              t.UpdateSweepRadius = function (e) {};
              return e;
            }();
            M.e_unknownShape = -1;
            M.e_circleShape = 0;
            M.e_polygonShape = 1;
            M.e_shapeTypeCount = 2;
            M.s_proxyAABB = new d();
            M.s_syncAABB = new d();
            M.s_resetAABB = new d();
            var R = function (e) {
              function t(n) {
                var r;
                (r = e.call(this, n) || this).m_localPosition = new l();
                var i = n;
                r.m_type = t.e_circleShape;
                r.m_localPosition.SetV(i.localPosition);
                r.m_radius = i.radius;
                return r;
              }
              k(t, e);
              var n = t.prototype;
              n.TestPoint = function (e, t) {
                var n = e.R;
                var r = e.position.x + (n.col1.x * this.m_localPosition.x + n.col2.x * this.m_localPosition.y);
                var i = e.position.y + (n.col1.y * this.m_localPosition.x + n.col2.y * this.m_localPosition.y);
                return (r = t.x - r) * r + (i = t.y - i) * i <= this.m_radius * this.m_radius;
              };
              n.TestSegment = function (e, t, n, r, i) {
                var s = e.R;
                var a = e.position.x + (s.col1.x * this.m_localPosition.x + s.col2.x * this.m_localPosition.y);
                var o = e.position.x + (s.col1.y * this.m_localPosition.x + s.col2.y * this.m_localPosition.y);
                var h = r.p1.x - a;
                var l = r.p1.y - o;
                var d = h * h + l * l - this.m_radius * this.m_radius;
                if (d < 0) {
                  return false;
                }
                var c = r.p2.x - r.p1.x;
                var u = r.p2.y - r.p1.y;
                var p = h * c + l * u;
                var m = c * c + u * u;
                var f = p * p - m * d;
                if (f < 0 || m < Number.MIN_VALUE) {
                  return false;
                }
                var _ = -(p + Math.sqrt(f));
                return _ >= 0 && _ <= i * m && (_ /= m, t[0] = _, n.x = h + _ * c, n.y = l + _ * u, n.Normalize(), true);
              };
              n.ComputeAABB = function (e, t) {
                var n = t.R;
                var r = t.position.x + (n.col1.x * this.m_localPosition.x + n.col2.x * this.m_localPosition.y);
                var i = t.position.y + (n.col1.y * this.m_localPosition.x + n.col2.y * this.m_localPosition.y);
                e.lowerBound.Set(r - this.m_radius, i - this.m_radius);
                e.upperBound.Set(r + this.m_radius, i + this.m_radius);
              };
              n.ComputeSweptAABB = function (e, t, n) {
                var r;
                r = t.R;
                var i = t.position.x + (r.col1.x * this.m_localPosition.x + r.col2.x * this.m_localPosition.y);
                var s = t.position.y + (r.col1.y * this.m_localPosition.x + r.col2.y * this.m_localPosition.y);
                r = n.R;
                var a = n.position.x + (r.col1.x * this.m_localPosition.x + r.col2.x * this.m_localPosition.y);
                var o = n.position.y + (r.col1.y * this.m_localPosition.x + r.col2.y * this.m_localPosition.y);
                e.lowerBound.Set((i < a ? i : a) - this.m_radius, (s < o ? s : o) - this.m_radius);
                e.upperBound.Set((i > a ? i : a) + this.m_radius, (s > o ? s : o) + this.m_radius);
              };
              n.ComputeMass = function (e) {
                e.mass = this.m_density * c.b2_pi * this.m_radius * this.m_radius;
                e.center.SetV(this.m_localPosition);
                e.I = e.mass * (this.m_radius * 0.5 * this.m_radius + (this.m_localPosition.x * this.m_localPosition.x + this.m_localPosition.y * this.m_localPosition.y));
              };
              n.GetLocalPosition = function () {
                return this.m_localPosition;
              };
              n.GetRadius = function () {
                return this.m_radius;
              };
              n.UpdateSweepRadius = function (e) {
                var t = this.m_localPosition.x - e.x;
                var n = this.m_localPosition.y - e.y;
                t = Math.sqrt(t * t + n * n);
                this.m_sweepRadius = t + this.m_radius - c.b2_toiSlop;
              };
              return t;
            }(M);
            var I = function (e) {
              function t(n) {
                var r;
                (r = e.call(this, n) || this).m_obb = new O();
                r.m_vertices = new Array(c.b2_maxPolygonVertices);
                r.m_normals = new Array(c.b2_maxPolygonVertices);
                r.m_coreVertices = new Array(c.b2_maxPolygonVertices);
                r.s_supportVec = new l();
                r.m_type = t.e_polygonShape;
                var i;
                var s = n;
                r.m_vertexCount = s.vertexCount;
                var a = i;
                var o = i;
                for (i = 0; i < r.m_vertexCount; ++i) {
                  r.m_vertices[i] = s.vertices[i].Copy();
                }
                for (i = 0; i < r.m_vertexCount; ++i) {
                  a = i;
                  o = i + 1 < r.m_vertexCount ? i + 1 : 0;
                  var h = r.m_vertices[o].x - r.m_vertices[a].x;
                  var d = r.m_vertices[o].y - r.m_vertices[a].y;
                  var u = Math.sqrt(h * h + d * d);
                  r.m_normals[i] = new l(d / u, -h / u);
                }
                r.m_centroid = t.ComputeCentroid(s.vertices, s.vertexCount);
                t.ComputeOBB(r.m_obb, r.m_vertices, r.m_vertexCount);
                i = 0;
                for (; i < r.m_vertexCount; ++i) {
                  a = i - 1 >= 0 ? i - 1 : r.m_vertexCount - 1;
                  o = i;
                  var p = r.m_normals[a].x;
                  var m = r.m_normals[a].y;
                  var f = r.m_normals[o].x;
                  var _ = r.m_normals[o].y;
                  var v = r.m_vertices[i].x - r.m_centroid.x;
                  var y = r.m_vertices[i].y - r.m_centroid.y;
                  var g = p * v + m * y - c.b2_toiSlop;
                  var w = f * v + _ * y - c.b2_toiSlop;
                  var x = 1 / (p * _ - m * f);
                  r.m_coreVertices[i] = new l(x * (_ * g - m * w) + r.m_centroid.x, x * (p * w - f * g) + r.m_centroid.y);
                }
                return r;
              }
              k(t, e);
              var n = t.prototype;
              n.TestPoint = function (e, t) {
                var n;
                var r = e.R;
                var i = t.x - e.position.x;
                var s = t.y - e.position.y;
                var a = i * r.col1.x + s * r.col1.y;
                var o = i * r.col2.x + s * r.col2.y;
                for (var h = 0; h < this.m_vertexCount; ++h) {
                  i = a - (n = this.m_vertices[h]).x;
                  s = o - n.y;
                  if ((n = this.m_normals[h]).x * i + n.y * s > 0) {
                    return false;
                  }
                }
                return true;
              };
              n.TestSegment = function (e, t, n, r, i) {
                var s;
                var a;
                var o;
                var h;
                var l = 0;
                var d = i;
                s = r.p1.x - e.position.x;
                a = r.p1.y - e.position.y;
                var c = s * (o = e.R).col1.x + a * o.col1.y;
                var u = s * o.col2.x + a * o.col2.y;
                s = r.p2.x - e.position.x;
                a = r.p2.y - e.position.y;
                var p = s * (o = e.R).col1.x + a * o.col1.y - c;
                var m = s * o.col2.x + a * o.col2.y - u;
                var f = -1;
                for (var _ = 0; _ < this.m_vertexCount; ++_) {
                  s = (h = this.m_vertices[_]).x - c;
                  a = h.y - u;
                  var v = (h = this.m_normals[_]).x * s + h.y * a;
                  var y = h.x * p + h.y * m;
                  if (y < 0 && v < l * y) {
                    l = v / y;
                    f = _;
                  } else if (y > 0 && v < d * y) {
                    d = v / y;
                  }
                  if (d < l) {
                    return false;
                  }
                }
                return f >= 0 && (t[0] = l, o = e.R, h = this.m_normals[f], n.x = o.col1.x * h.x + o.col2.x * h.y, n.y = o.col1.y * h.x + o.col2.y * h.y, true);
              };
              n.ComputeAABB = function (e, n) {
                var r;
                var i;
                var s = t.s_computeMat;
                r = n.R;
                i = this.m_obb.R.col1;
                s.col1.x = r.col1.x * i.x + r.col2.x * i.y;
                s.col1.y = r.col1.y * i.x + r.col2.y * i.y;
                i = this.m_obb.R.col2;
                s.col2.x = r.col1.x * i.x + r.col2.x * i.y;
                s.col2.y = r.col1.y * i.x + r.col2.y * i.y;
                s.Abs();
                var a = s;
                i = this.m_obb.extents;
                var o = a.col1.x * i.x + a.col2.x * i.y;
                var h = a.col1.y * i.x + a.col2.y * i.y;
                r = n.R;
                i = this.m_obb.center;
                var l = n.position.x + (r.col1.x * i.x + r.col2.x * i.y);
                var d = n.position.y + (r.col1.y * i.x + r.col2.y * i.y);
                e.lowerBound.Set(l - o, d - h);
                e.upperBound.Set(l + o, d + h);
              };
              n.ComputeSweptAABB = function (e, n, r) {
                var i = t.s_sweptAABB1;
                var s = t.s_sweptAABB2;
                this.ComputeAABB(i, n);
                this.ComputeAABB(s, r);
                e.lowerBound.Set(i.lowerBound.x < s.lowerBound.x ? i.lowerBound.x : s.lowerBound.x, i.lowerBound.y < s.lowerBound.y ? i.lowerBound.y : s.lowerBound.y);
                e.upperBound.Set(i.upperBound.x > s.upperBound.x ? i.upperBound.x : s.upperBound.x, i.upperBound.y > s.upperBound.y ? i.upperBound.y : s.upperBound.y);
              };
              n.ComputeMass = function (e) {
                var t = 0;
                var n = 0;
                var r = 0;
                var i = 0;
                var s = 1 / 3;
                for (var a = 0; a < this.m_vertexCount; ++a) {
                  var o = this.m_vertices[a];
                  var h = a + 1 < this.m_vertexCount ? this.m_vertices[a + 1] : this.m_vertices[0];
                  var l = o.x - 0;
                  var d = o.y - 0;
                  var c = h.x - 0;
                  var u = h.y - 0;
                  var p = l * u - d * c;
                  var m = p * 0.5;
                  r += m;
                  t += m * s * (0 + o.x + h.x);
                  n += m * s * (0 + o.y + h.y);
                  i += p * (s * ((l * l + c * l + c * c) * 0.25 + (l * 0 + c * 0)) + 0 + (s * ((d * d + u * d + u * u) * 0.25 + (d * 0 + u * 0)) + 0));
                }
                e.mass = this.m_density * r;
                t *= 1 / r;
                n *= 1 / r;
                e.center.Set(t, n);
                e.I = this.m_density * i;
              };
              n.GetOBB = function () {
                return this.m_obb;
              };
              n.GetCentroid = function () {
                return this.m_centroid;
              };
              n.GetVertexCount = function () {
                return this.m_vertexCount;
              };
              n.GetVertices = function () {
                return this.m_vertices;
              };
              n.GetCoreVertices = function () {
                return this.m_coreVertices;
              };
              n.GetNormals = function () {
                return this.m_normals;
              };
              n.GetFirstVertex = function (e) {
                return h.b2MulX(e, this.m_coreVertices[0]);
              };
              n.Centroid = function (e) {
                return h.b2MulX(e, this.m_centroid);
              };
              n.Support = function (e, t, n) {
                var r;
                var i;
                var s = t * (i = e.R).col1.x + n * i.col1.y;
                var a = t * i.col2.x + n * i.col2.y;
                var o = 0;
                var h = (r = this.m_coreVertices[0]).x * s + r.y * a;
                for (var l = 1; l < this.m_vertexCount; ++l) {
                  var d = (r = this.m_coreVertices[l]).x * s + r.y * a;
                  if (d > h) {
                    o = l;
                    h = d;
                  }
                }
                i = e.R;
                r = this.m_coreVertices[o];
                this.s_supportVec.x = e.position.x + (i.col1.x * r.x + i.col2.x * r.y);
                this.s_supportVec.y = e.position.y + (i.col1.y * r.x + i.col2.y * r.y);
                return this.s_supportVec;
              };
              n.UpdateSweepRadius = function (e) {
                var t;
                this.m_sweepRadius = 0;
                for (var n = 0; n < this.m_vertexCount; ++n) {
                  var r = (t = this.m_coreVertices[n]).x - e.x;
                  var i = t.y - e.y;
                  if ((r = Math.sqrt(r * r + i * i)) > this.m_sweepRadius) {
                    this.m_sweepRadius = r;
                  }
                }
              };
              t.ComputeCentroid = function (e, t) {
                var n = new l();
                var r = 0;
                var i = 1 / 3;
                for (var s = 0; s < t; ++s) {
                  var a = e[s];
                  var o = s + 1 < t ? e[s + 1] : e[0];
                  var h = a.x - 0;
                  var d = a.y - 0;
                  var c = o.x - 0;
                  var u = (h * (o.y - 0) - d * c) * 0.5;
                  r += u;
                  n.x += u * i * (0 + a.x + o.x);
                  n.y += u * i * (0 + a.y + o.y);
                }
                n.x *= 1 / r;
                n.y *= 1 / r;
                return n;
              };
              t.ComputeOBB = function (e, t, n) {
                var r;
                var i = new Array(c.b2_maxPolygonVertices + 1);
                for (r = 0; r < n; ++r) {
                  i[r] = t[r];
                }
                i[n] = i[0];
                var s = Number.MAX_VALUE;
                for (r = 1; r <= n; ++r) {
                  var a = i[r - 1];
                  var o = i[r].x - a.x;
                  var h = i[r].y - a.y;
                  var l = Math.sqrt(o * o + h * h);
                  var d = -(h /= l);
                  var u = o /= l;
                  var p = Number.MAX_VALUE;
                  var m = Number.MAX_VALUE;
                  var f = -Number.MAX_VALUE;
                  var _ = -Number.MAX_VALUE;
                  for (var v = 0; v < n; ++v) {
                    var y = i[v].x - a.x;
                    var g = i[v].y - a.y;
                    var w = o * y + h * g;
                    var x = d * y + u * g;
                    if (w < p) {
                      p = w;
                    }
                    if (x < m) {
                      m = x;
                    }
                    if (w > f) {
                      f = w;
                    }
                    if (x > _) {
                      _ = x;
                    }
                  }
                  var b = (f - p) * (_ - m);
                  if (b < s * 0.95) {
                    s = b;
                    e.R.col1.x = o;
                    e.R.col1.y = h;
                    e.R.col2.x = d;
                    e.R.col2.y = u;
                    var T = (p + f) * 0.5;
                    var A = (m + _) * 0.5;
                    var C = e.R;
                    e.center.x = a.x + (C.col1.x * T + C.col2.x * A);
                    e.center.y = a.y + (C.col1.y * T + C.col2.y * A);
                    e.extents.x = (f - p) * 0.5;
                    e.extents.y = (_ - m) * 0.5;
                  }
                }
              };
              return t;
            }(M);
            I.s_sweptAABB1 = new d();
            I.s_sweptAABB2 = new d();
            I.s_computeMat = new i();
            var L = function () {
              function e() {}
              e.ProcessTwo = function (e, t, n, r, i) {
                var s = i[0];
                var a = i[1];
                var o = n[0];
                var h = n[1];
                var l = r[0];
                var d = r[1];
                var c = -a.x;
                var u = -a.y;
                var p = s.x - a.x;
                var m = s.y - a.y;
                var f = Math.sqrt(p * p + m * m);
                var _ = c * (p /= f) + u * (m /= f);
                if (_ <= 0 || f < Number.MIN_VALUE) {
                  e.SetV(h);
                  t.SetV(d);
                  o.SetV(h);
                  l.SetV(d);
                  s.SetV(a);
                  return 1;
                } else {
                  _ /= f;
                  e.x = h.x + _ * (o.x - h.x);
                  e.y = h.y + _ * (o.y - h.y);
                  t.x = d.x + _ * (l.x - d.x);
                  t.y = d.y + _ * (l.y - d.y);
                  return 2;
                }
              };
              e.ProcessThree = function (e, t, n, r, i) {
                var s = i[0];
                var a = i[1];
                var o = i[2];
                var h = n[0];
                var l = n[1];
                var d = n[2];
                var c = r[0];
                var u = r[1];
                var p = r[2];
                var m = s.x;
                var f = s.y;
                var _ = a.x;
                var v = a.y;
                var y = o.x;
                var g = o.y;
                var w = _ - m;
                var x = v - f;
                var b = y - m;
                var T = g - f;
                var A = y - _;
                var C = g - v;
                var S = -(m * b + f * T);
                var E = y * b + g * T;
                var O = -(_ * A + v * C);
                var k = y * A + g * C;
                if (E <= 0 && k <= 0) {
                  e.SetV(d);
                  t.SetV(p);
                  h.SetV(d);
                  c.SetV(p);
                  s.SetV(o);
                  return 1;
                }
                var P;
                var M = w * T - x * b;
                var R = M * (m * v - f * _);
                var I = M * (_ * g - v * y);
                if (I <= 0 && O >= 0 && k >= 0 && O + k > 0) {
                  P = O / (O + k);
                  e.x = l.x + P * (d.x - l.x);
                  e.y = l.y + P * (d.y - l.y);
                  t.x = u.x + P * (p.x - u.x);
                  t.y = u.y + P * (p.y - u.y);
                  h.SetV(d);
                  c.SetV(p);
                  s.SetV(o);
                  return 2;
                }
                var L = M * (y * f - g * m);
                if (L <= 0 && S >= 0 && E >= 0 && S + E > 0) {
                  P = S / (S + E);
                  e.x = h.x + P * (d.x - h.x);
                  e.y = h.y + P * (d.y - h.y);
                  t.x = c.x + P * (p.x - c.x);
                  t.y = c.y + P * (p.y - c.y);
                  l.SetV(d);
                  u.SetV(p);
                  a.SetV(o);
                  return 2;
                }
                var j = I + L + R;
                var B = I * (j = 1 / j);
                var D = L * j;
                var F = 1 - B - D;
                e.x = B * h.x + D * l.x + F * d.x;
                e.y = B * h.y + D * l.y + F * d.y;
                t.x = B * c.x + D * u.x + F * p.x;
                t.y = B * c.y + D * u.y + F * p.y;
                return 3;
              };
              e.InPoints = function (e, t, n) {
                var r = Number.MIN_VALUE * 100;
                for (var i = 0; i < n; ++i) {
                  var s = t[i];
                  var a = Math.abs(e.x - s.x);
                  var o = Math.abs(e.y - s.y);
                  var h = Math.max(Math.abs(e.x), Math.abs(s.x));
                  var l = Math.max(Math.abs(e.y), Math.abs(s.y));
                  if (a < r * (h + 1) && o < r * (l + 1)) {
                    return true;
                  }
                }
                return false;
              };
              e.DistanceGeneric = function (t, n, r, i, s, a) {
                var o;
                var l = e.s_p1s;
                var d = e.s_p2s;
                var c = e.s_points;
                var u = 0;
                t.SetV(r.GetFirstVertex(i));
                n.SetV(s.GetFirstVertex(a));
                var p = 0;
                for (var m = 0; m < 20; ++m) {
                  var f = n.x - t.x;
                  var _ = n.y - t.y;
                  var v = r.Support(i, f, _);
                  var y = s.Support(a, -f, -_);
                  p = f * f + _ * _;
                  var g = y.x - v.x;
                  var w = y.y - v.y;
                  if (p - (f * g + _ * w) <= p * 0.01) {
                    if (u == 0) {
                      t.SetV(v);
                      n.SetV(y);
                    }
                    e.g_GJK_Iterations = m;
                    return Math.sqrt(p);
                  }
                  switch (u) {
                    case 0:
                      (o = l[0]).SetV(v);
                      (o = d[0]).SetV(y);
                      (o = c[0]).x = g;
                      o.y = w;
                      t.SetV(l[0]);
                      n.SetV(d[0]);
                      ++u;
                      break;
                    case 1:
                      (o = l[1]).SetV(v);
                      (o = d[1]).SetV(y);
                      (o = c[1]).x = g;
                      o.y = w;
                      u = e.ProcessTwo(t, n, l, d, c);
                      break;
                    case 2:
                      (o = l[2]).SetV(v);
                      (o = d[2]).SetV(y);
                      (o = c[2]).x = g;
                      o.y = w;
                      u = e.ProcessThree(t, n, l, d, c);
                  }
                  if (u == 3) {
                    e.g_GJK_Iterations = m;
                    return 0;
                  }
                  var x = -Number.MAX_VALUE;
                  for (var b = 0; b < u; ++b) {
                    o = c[b];
                    x = h.b2Max(x, o.x * o.x + o.y * o.y);
                  }
                  if (u == 3 || p <= Number.MIN_VALUE * 100 * x) {
                    e.g_GJK_Iterations = m;
                    p = (f = n.x - t.x) * f + (_ = n.y - t.y) * _;
                    return Math.sqrt(p);
                  }
                }
                e.g_GJK_Iterations = 20;
                return Math.sqrt(p);
              };
              e.DistanceCC = function (e, t, n, r, i, s) {
                var a;
                var o;
                a = r.R;
                o = n.m_localPosition;
                var h = r.position.x + (a.col1.x * o.x + a.col2.x * o.y);
                var l = r.position.y + (a.col1.y * o.x + a.col2.y * o.y);
                a = s.R;
                o = i.m_localPosition;
                var d = s.position.x + (a.col1.x * o.x + a.col2.x * o.y);
                var u = s.position.y + (a.col1.y * o.x + a.col2.y * o.y);
                var p = d - h;
                var m = u - l;
                var f = p * p + m * m;
                var _ = n.m_radius - c.b2_toiSlop;
                var v = i.m_radius - c.b2_toiSlop;
                var y = _ + v;
                if (f > y * y) {
                  var g = Math.sqrt(p * p + m * m);
                  p /= g;
                  m /= g;
                  var w = g - y;
                  e.x = h + _ * p;
                  e.y = l + _ * m;
                  t.x = d - v * p;
                  t.y = u - v * m;
                  return w;
                }
                if (f > Number.MIN_VALUE * Number.MIN_VALUE) {
                  var x = Math.sqrt(p * p + m * m);
                  p /= x;
                  m /= x;
                  e.x = h + _ * p;
                  e.y = l + _ * m;
                  t.x = e.x;
                  t.y = e.y;
                  return 0;
                }
                e.x = h;
                e.y = l;
                t.x = e.x;
                t.y = e.y;
                return 0;
              };
              e.DistancePC = function (t, n, r, i, s, a) {
                var o = e.gPoint;
                var l = s.m_localPosition;
                var d = a.R;
                o.p.x = a.position.x + (d.col1.x * l.x + d.col2.x * l.y);
                o.p.y = a.position.y + (d.col1.y * l.x + d.col2.y * l.y);
                var u = e.DistanceGeneric(t, n, r, i, o, h.b2XForm_identity);
                var p = s.m_radius - c.b2_toiSlop;
                if (u > p) {
                  u -= p;
                  var m = n.x - t.x;
                  var f = n.y - t.y;
                  var _ = Math.sqrt(m * m + f * f);
                  m /= _;
                  f /= _;
                  n.x -= p * m;
                  n.y -= p * f;
                } else {
                  u = 0;
                  n.x = t.x;
                  n.y = t.y;
                }
                return u;
              };
              e.Distance = function (t, n, r, i, s, a) {
                var o = r.m_type;
                var h = s.m_type;
                if (o == M.e_circleShape && h == M.e_circleShape) {
                  return e.DistanceCC(t, n, r, i, s, a);
                } else if (o == M.e_polygonShape && h == M.e_circleShape) {
                  return e.DistancePC(t, n, r, i, s, a);
                } else if (o == M.e_circleShape && h == M.e_polygonShape) {
                  return e.DistancePC(n, t, s, a, r, i);
                } else if (o == M.e_polygonShape && h == M.e_polygonShape) {
                  return e.DistanceGeneric(t, n, r, i, s, a);
                } else {
                  return 0;
                }
              };
              return e;
            }();
            L.g_GJK_Iterations = 0;
            L.s_p1s = [new l(), new l(), new l()];
            L.s_p2s = [new l(), new l(), new l()];
            L.s_points = [new l(), new l(), new l()];
            L.gPoint = new E();
            var j = function () {
              function e() {
                this.localPoint1 = new l();
                this.localPoint2 = new l();
                this.id = new T();
              }
              var t = e.prototype;
              t.Reset = function () {
                this.localPoint1.SetZero();
                this.localPoint2.SetZero();
                this.separation = 0;
                this.normalImpulse = 0;
                this.tangentImpulse = 0;
                this.id.key = 0;
              };
              t.Set = function (e) {
                this.localPoint1.SetV(e.localPoint1);
                this.localPoint2.SetV(e.localPoint2);
                this.separation = e.separation;
                this.normalImpulse = e.normalImpulse;
                this.tangentImpulse = e.tangentImpulse;
                this.id.key = e.id.key;
              };
              return e;
            }();
            var B = function () {
              function e() {
                this.pointCount = 0;
                this.points = new Array(c.b2_maxManifoldPoints);
                for (var e = 0; e < c.b2_maxManifoldPoints; e++) {
                  this.points[e] = new j();
                }
                this.normal = new l();
              }
              var t = e.prototype;
              t.Reset = function () {
                for (var e = 0; e < c.b2_maxManifoldPoints; e++) {
                  this.points[e].Reset();
                }
                this.normal.SetZero();
                this.pointCount = 0;
              };
              t.Set = function (e) {
                this.pointCount = e.pointCount;
                for (var t = 0; t < c.b2_maxManifoldPoints; t++) {
                  this.points[t].Set(e.points[t]);
                }
                this.normal.SetV(e.normal);
              };
              return e;
            }();
            var D = function () {
              function e() {
                this.p1 = new l();
                this.p2 = new l();
              }
              e.prototype.TestSegment = function (e, t, n, r) {
                var i = n.p1;
                var s = n.p2.x - i.x;
                var a = n.p2.y - i.y;
                var o = this.p2.x - this.p1.x;
                var h = this.p2.y - this.p1.y;
                var l = -o;
                var d = Number.MIN_VALUE * 100;
                var c = -(s * h + a * l);
                if (c > d) {
                  var u = i.x - this.p1.x;
                  var p = i.y - this.p1.y;
                  var m = u * h + p * l;
                  if (m >= 0 && m <= r * c) {
                    var f = -a * p + a * u;
                    if (-d * c <= f && f <= c * (1 + d)) {
                      m /= c;
                      var _ = Math.sqrt(h * h + l * l);
                      h /= _;
                      l /= _;
                      e[0] = m;
                      t.Set(h, l);
                      return true;
                    }
                  }
                }
                return false;
              };
              return e;
            }();
            var F = function () {
              function e() {}
              e.TimeOfImpact = function (t, n, r, i) {
                var s;
                var a;
                var o = t.m_sweepRadius;
                var h = r.m_sweepRadius;
                var l = n.t0;
                var d = n.c.x - n.c0.x;
                var u = n.c.y - n.c0.y;
                var p = i.c.x - i.c0.x;
                var m = i.c.y - i.c0.y;
                var f = n.a - n.a0;
                var _ = i.a - i.a0;
                var v = 0;
                var y = e.s_p1;
                var g = e.s_p2;
                var w = 0;
                var x = 0;
                var b = 0;
                var T = 0;
                var A = 0;
                while (true) {
                  var C = (1 - v) * l + v;
                  var S = e.s_xf1;
                  var E = e.s_xf2;
                  n.GetXForm(S, C);
                  i.GetXForm(E, C);
                  T = L.Distance(y, g, t, S, r, E);
                  if (w == 0) {
                    A = T > c.b2_toiSlop * 2 ? c.b2_toiSlop * 1.5 : (s = c.b2_toiSlop * 0.05) > (a = T - c.b2_toiSlop * 0.5) ? s : a;
                  }
                  if (T - A < c.b2_toiSlop * 0.05 || w == 20) {
                    break;
                  }
                  x = g.x - y.x;
                  b = g.y - y.y;
                  var O = Math.sqrt(x * x + b * b);
                  var k = (x /= O) * (d - p) + (b /= O) * (u - m) + (f < 0 ? -f : f) * o + (_ < 0 ? -_ : _) * h;
                  if (k == 0) {
                    v = 1;
                    break;
                  }
                  var P = v + (T - A) / k;
                  if (P < 0 || P > 1) {
                    v = 1;
                    break;
                  }
                  if (P < (1 + Number.MIN_VALUE * 100) * v) {
                    break;
                  }
                  v = P;
                  ++w;
                }
                return v;
              };
              return e;
            }();
            F.s_p1 = new l();
            F.s_p2 = new l();
            F.s_xf1 = new s();
            F.s_xf2 = new s();
            var N = function () {
              function e() {
                this.categoryBits = 1;
                this.maskBits = 65535;
                this.groupIndex = 0;
              }
              e.prototype.Copy = function () {
                var t = new e();
                t.categoryBits = this.categoryBits;
                t.maskBits = this.maskBits;
                t.groupIndex = this.groupIndex;
                return t;
              };
              return e;
            }();
            function G() {
              this.type = M.e_unknownShape;
              this.userData = null;
              this.friction = 0.2;
              this.restitution = 0;
              this.density = 0;
              this.isSensor = false;
              this.filter = new N();
            }
            function U(e, t) {
              U = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return U(e, t);
            }
            var V = function (e) {
              function t() {
                var t;
                (t = e.call(this) || this).localPosition = new l(0, 0);
                t.type = M.e_circleShape;
                t.radius = 1;
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              U(n, r);
              return t;
            }(G);
            function H() {
              this.mass = 0;
              this.center = new l(0, 0);
              this.I = 0;
            }
            function z(e, t) {
              z = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return z(e, t);
            }
            var W = function (e) {
              function t() {
                var t;
                (t = e.call(this) || this).vertices = new Array(c.b2_maxPolygonVertices);
                t.type = M.e_polygonShape;
                t.vertexCount = 0;
                for (var n = 0; n < c.b2_maxPolygonVertices; n++) {
                  t.vertices[n] = new l();
                }
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              z(n, r);
              var i = t.prototype;
              i.SetAsBox = function (e, t) {
                this.vertexCount = 4;
                this.vertices[0].Set(-e, -t);
                this.vertices[1].Set(e, -t);
                this.vertices[2].Set(e, t);
                this.vertices[3].Set(-e, t);
              };
              i.SetAsOrientedBox = function (e, n, r = null, i = 0) {
                this.vertexCount = 4;
                this.vertices[0].Set(-e, -n);
                this.vertices[1].Set(e, -n);
                this.vertices[2].Set(e, n);
                this.vertices[3].Set(-e, n);
                if (r) {
                  var s = r;
                  var a = t.s_mat;
                  a.Set(i);
                  for (var o = 0; o < this.vertexCount; ++o) {
                    r = this.vertices[o];
                    e = s.x + (a.col1.x * r.x + a.col2.x * r.y);
                    r.y = s.y + (a.col1.y * r.x + a.col2.y * r.y);
                    r.x = e;
                  }
                }
              };
              return t;
            }(G);
            function X(e) {
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
            W.s_mat = new i();
            var Y = function () {
              function e(e, t, n) {
                this._r = 0;
                this._g = 0;
                this._b = 0;
                this._r = h.b2Clamp(e, 0, 1) * 255;
                this._g = h.b2Clamp(t, 0, 1) * 255;
                this._b = h.b2Clamp(n, 0, 1) * 255;
              }
              var t;
              var n;
              e.prototype.Set = function (e, t, n) {
                this._r = h.b2Clamp(e, 0, 1) * 255;
                this._g = h.b2Clamp(t, 0, 1) * 255;
                this._b = h.b2Clamp(n, 0, 1) * 255;
              };
              t = e;
              if (n = [{
                key: "r",
                set: function (e) {
                  this._r = h.b2Clamp(e, 0, 1) * 255;
                }
              }, {
                key: "g",
                set: function (e) {
                  this._g = h.b2Clamp(e, 0, 1) * 255;
                }
              }, {
                key: "b",
                set: function (e) {
                  this._b = h.b2Clamp(e, 0, 1) * 255;
                }
              }, {
                key: "color",
                get: function () {
                  return this._r | this._g << 8 | this._b << 16;
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
                    Object.defineProperty(e, X(r.key), r);
                  }
                })(t.prototype, n);
              }
              Object.defineProperty(t, "prototype", {
                writable: false
              });
              return t;
            }();
            var q = function () {
              function e() {
                this.localCenter = new l();
                this.c0 = new l();
                this.c = new l();
              }
              var t = e.prototype;
              t.GetXForm = function (e, t) {
                if (1 - this.t0 > Number.MIN_VALUE) {
                  var n = (t - this.t0) / (1 - this.t0);
                  e.position.x = (1 - n) * this.c0.x + n * this.c.x;
                  e.position.y = (1 - n) * this.c0.y + n * this.c.y;
                  var r = (1 - n) * this.a0 + n * this.a;
                  e.R.Set(r);
                } else {
                  e.position.SetV(this.c);
                  e.R.Set(this.a);
                }
                var i = e.R;
                e.position.x -= i.col1.x * this.localCenter.x + i.col2.x * this.localCenter.y;
                e.position.y -= i.col1.y * this.localCenter.x + i.col2.y * this.localCenter.y;
              };
              t.Advance = function (e) {
                if (this.t0 < e && 1 - this.t0 > Number.MIN_VALUE) {
                  var t = (e - this.t0) / (1 - this.t0);
                  this.c0.x = (1 - t) * this.c0.x + t * this.c.x;
                  this.c0.y = (1 - t) * this.c0.y + t * this.c.y;
                  this.a0 = (1 - t) * this.a0 + t * this.a;
                  this.t0 = e;
                }
              };
              return e;
            }();
            function J(e, t, n) {
              return e + (t - e) * (n < 0 ? 0 : n > 1 ? 1 : n);
            }
            function K(e, t, n) {
              e.x = J(e.x, t.x, n);
              e.y = J(e.y, t.y, n);
            }
            var Z = function () {
              function e(t, n) {
                this.m_xf = new s();
                this.m_sweep = new q();
                this.m_linearVelocity = new l();
                this.m_force = new l();
                this.m_interpolatedPosition = new l();
                this.m_interpolatedWorldCenter = new l();
                this.m_interpolatedLinearVelocity = new l();
                this.m_interpolatedAngle = 0;
                this.m_interpolatedMatrix = new i();
                this.m_flags = 0;
                if (t.isBullet) {
                  this.m_flags |= e.e_bulletFlag;
                }
                if (t.fixedRotation) {
                  this.m_flags |= e.e_fixedRotationFlag;
                }
                if (t.allowSleep) {
                  this.m_flags |= e.e_allowSleepFlag;
                }
                if (t.isSleeping) {
                  this.m_flags |= e.e_sleepFlag;
                }
                this.m_world = n;
                this.m_xf.position.SetV(t.position);
                this.m_xf.R.Set(t.angle);
                this.m_sweep.localCenter.SetV(t.massData.center);
                this.m_sweep.t0 = 1;
                this.m_sweep.a0 = this.m_sweep.a = t.angle;
                var r = this.m_xf.R;
                var a = this.m_sweep.localCenter;
                this.m_sweep.c.x = r.col1.x * a.x + r.col2.x * a.y;
                this.m_sweep.c.y = r.col1.y * a.x + r.col2.y * a.y;
                this.m_sweep.c.x += this.m_xf.position.x;
                this.m_sweep.c.y += this.m_xf.position.y;
                this.m_sweep.c0.SetV(this.m_sweep.c);
                this.m_jointList = null;
                this.m_contactList = null;
                this.m_prev = null;
                this.m_next = null;
                this.m_linearDamping = t.linearDamping;
                this.m_angularDamping = t.angularDamping;
                this.m_force.Set(0, 0);
                this.m_torque = 0;
                this.m_linearVelocity.SetZero();
                this.m_angularVelocity = 0;
                this.m_sleepTime = 0;
                this.m_invMass = 0;
                this.m_I = 0;
                this.m_invI = 0;
                this.m_mass = t.massData.mass;
                if (this.m_mass > 0) {
                  this.m_invMass = 1 / this.m_mass;
                }
                if ((this.m_flags & e.e_fixedRotationFlag) == 0) {
                  this.m_I = t.massData.I;
                }
                if (this.m_I > 0) {
                  this.m_invI = 1 / this.m_I;
                }
                if (this.m_invMass == 0 && this.m_invI == 0) {
                  this.m_type = e.e_staticType;
                } else {
                  this.m_type = e.e_dynamicType;
                }
                this.m_userData = t.userData;
                this.m_interpolatedPosition.SetV(this.m_xf.position);
                this.m_interpolatedWorldCenter.SetV(this.m_sweep.c);
                this.m_interpolatedAngle = this.m_sweep.a;
                this.m_interpolatedMatrix.SetM(this.m_xf.R);
                this.m_shapeList = null;
                this.m_shapeCount = 0;
              }
              var t = e.prototype;
              t.CreateShape = function (e) {
                if (this.m_world.m_lock == 1) {
                  return null;
                }
                var t = M.Create(e, this.m_world.m_blockAllocator);
                t.m_next = this.m_shapeList;
                this.m_shapeList = t;
                ++this.m_shapeCount;
                t.m_body = this;
                t.CreateProxy(this.m_world.m_broadPhase, this.m_xf);
                t.UpdateSweepRadius(this.m_sweep.localCenter);
                return t;
              };
              t.DestroyShape = function (e) {
                if (this.m_world.m_lock != 1) {
                  e.DestroyProxy(this.m_world.m_broadPhase);
                  for (var t = this.m_shapeList, n = null; t != null;) {
                    if (t == e) {
                      if (n) {
                        n.m_next = e.m_next;
                      } else {
                        this.m_shapeList = e.m_next;
                      }
                      break;
                    }
                    n = t;
                    t = t.m_next;
                  }
                  e.m_body = null;
                  e.m_next = null;
                  --this.m_shapeCount;
                  M.Destroy(e, this.m_world.m_blockAllocator);
                }
              };
              t.SetMass = function (t) {
                var n;
                if (this.m_world.m_lock != 1) {
                  this.m_invMass = 0;
                  this.m_I = 0;
                  this.m_invI = 0;
                  this.m_mass = t.mass;
                  if (this.m_mass > 0) {
                    this.m_invMass = 1 / this.m_mass;
                  }
                  if ((this.m_flags & e.e_fixedRotationFlag) == 0) {
                    this.m_I = t.I;
                  }
                  if (this.m_I > 0) {
                    this.m_invI = 1 / this.m_I;
                  }
                  this.m_sweep.localCenter.SetV(t.center);
                  var r = this.m_xf.R;
                  var i = this.m_sweep.localCenter;
                  this.m_sweep.c.x = r.col1.x * i.x + r.col2.x * i.y;
                  this.m_sweep.c.y = r.col1.y * i.x + r.col2.y * i.y;
                  this.m_sweep.c.x += this.m_xf.position.x;
                  this.m_sweep.c.y += this.m_xf.position.y;
                  this.m_sweep.c0.SetV(this.m_sweep.c);
                  this.m_interpolatedWorldCenter.SetV(this.m_sweep.c);
                  n = this.m_shapeList;
                  for (; n; n = n.m_next) {
                    n.UpdateSweepRadius(this.m_sweep.localCenter);
                  }
                  var s = this.m_type;
                  if (this.m_invMass == 0 && this.m_invI == 0) {
                    this.m_type = e.e_staticType;
                  } else {
                    this.m_type = e.e_dynamicType;
                  }
                  if (s != this.m_type) {
                    for (n = this.m_shapeList; n; n = n.m_next) {
                      n.RefilterProxy(this.m_world.m_broadPhase, this.m_xf);
                    }
                  }
                }
              };
              t.SetMassFromShapes = function () {
                var t;
                if (this.m_world.m_lock != 1) {
                  this.m_mass = 0;
                  this.m_invMass = 0;
                  this.m_I = 0;
                  this.m_invI = 0;
                  var n = 0;
                  var r = 0;
                  var i = e.s_massData;
                  for (t = this.m_shapeList; t; t = t.m_next) {
                    t.ComputeMass(i);
                    this.m_mass += i.mass;
                    n += i.mass * i.center.x;
                    r += i.mass * i.center.y;
                    this.m_I += i.I;
                  }
                  if (this.m_mass > 0) {
                    this.m_invMass = 1 / this.m_mass;
                    n *= this.m_invMass;
                    r *= this.m_invMass;
                  }
                  if (this.m_I > 0 && (this.m_flags & e.e_fixedRotationFlag) == 0) {
                    this.m_I -= this.m_mass * (n * n + r * r);
                    this.m_invI = 1 / this.m_I;
                  } else {
                    this.m_I = 0;
                    this.m_invI = 0;
                  }
                  this.m_sweep.localCenter.Set(n, r);
                  var s = this.m_xf.R;
                  var a = this.m_sweep.localCenter;
                  this.m_sweep.c.x = s.col1.x * a.x + s.col2.x * a.y;
                  this.m_sweep.c.y = s.col1.y * a.x + s.col2.y * a.y;
                  this.m_sweep.c.x += this.m_xf.position.x;
                  this.m_sweep.c.y += this.m_xf.position.y;
                  this.m_sweep.c0.SetV(this.m_sweep.c);
                  this.m_interpolatedWorldCenter.SetV(this.m_sweep.c);
                  t = this.m_shapeList;
                  for (; t; t = t.m_next) {
                    t.UpdateSweepRadius(this.m_sweep.localCenter);
                  }
                  var o = this.m_type;
                  if (this.m_invMass == 0 && this.m_invI == 0) {
                    this.m_type = e.e_staticType;
                  } else {
                    this.m_type = e.e_dynamicType;
                  }
                  if (o != this.m_type) {
                    for (t = this.m_shapeList; t; t = t.m_next) {
                      t.RefilterProxy(this.m_world.m_broadPhase, this.m_xf);
                    }
                  }
                }
              };
              t.SetXForm = function (t, n) {
                var r;
                if (this.m_world.m_lock == 1) {
                  return true;
                }
                if (this.IsFrozen()) {
                  return false;
                }
                this.m_xf.R.Set(n);
                this.m_xf.position.SetV(t);
                var i = this.m_xf.R;
                var s = this.m_sweep.localCenter;
                this.m_sweep.c.x = i.col1.x * s.x + i.col2.x * s.y;
                this.m_sweep.c.y = i.col1.y * s.x + i.col2.y * s.y;
                this.m_sweep.c.x += this.m_xf.position.x;
                this.m_sweep.c.y += this.m_xf.position.y;
                this.m_sweep.c0.SetV(this.m_sweep.c);
                this.m_sweep.a0 = this.m_sweep.a = n;
                this.m_interpolatedPosition.SetV(this.m_xf.position);
                this.m_interpolatedWorldCenter.SetV(this.m_sweep.c);
                this.m_interpolatedAngle = n;
                this.m_interpolatedMatrix.SetM(this.m_xf.R);
                var a = false;
                for (r = this.m_shapeList; r; r = r.m_next) {
                  if (r.Synchronize(this.m_world.m_broadPhase, this.m_xf, this.m_xf) == 0) {
                    a = true;
                    break;
                  }
                }
                if (a == 1) {
                  this.m_flags |= e.e_frozenFlag;
                  this.m_linearVelocity.SetZero();
                  this.m_angularVelocity = 0;
                  r = this.m_shapeList;
                  for (; r; r = r.m_next) {
                    r.DestroyProxy(this.m_world.m_broadPhase);
                  }
                  return false;
                }
                this.m_world.m_broadPhase.Commit();
                return true;
              };
              t.GetXForm = function () {
                return this.m_xf;
              };
              t.GetPosition = function () {
                return this.m_xf.position;
              };
              t.GetAngle = function () {
                return this.m_sweep.a;
              };
              t.GetWorldCenter = function () {
                return this.m_sweep.c;
              };
              t.GetLocalCenter = function () {
                return this.m_sweep.localCenter;
              };
              t.SetLinearVelocity = function (e) {
                this.m_linearVelocity.SetV(e);
              };
              t.GetLinearVelocity = function () {
                return this.m_linearVelocity;
              };
              t.SetAngularVelocity = function (e) {
                this.m_angularVelocity = e;
              };
              t.GetAngularVelocity = function () {
                return this.m_angularVelocity;
              };
              t.ApplyForce = function (e, t) {
                if (this.IsSleeping()) {
                  this.WakeUp();
                }
                this.m_force.x += e.x;
                this.m_force.y += e.y;
                this.m_torque += (t.x - this.m_sweep.c.x) * e.y - (t.y - this.m_sweep.c.y) * e.x;
              };
              t.ApplyTorque = function (e) {
                if (this.IsSleeping()) {
                  this.WakeUp();
                }
                this.m_torque += e;
              };
              t.ApplyImpulse = function (e, t) {
                if (this.IsSleeping()) {
                  this.WakeUp();
                }
                this.m_linearVelocity.x += this.m_invMass * e.x;
                this.m_linearVelocity.y += this.m_invMass * e.y;
                this.m_angularVelocity += this.m_invI * ((t.x - this.m_sweep.c.x) * e.y - (t.y - this.m_sweep.c.y) * e.x);
              };
              t.GetMass = function () {
                return this.m_mass;
              };
              t.GetInertia = function () {
                return this.m_I;
              };
              t.GetWorldPoint = function (e) {
                var t = this.m_xf.R;
                var n = new l(t.col1.x * e.x + t.col2.x * e.y, t.col1.y * e.x + t.col2.y * e.y);
                n.x += this.m_xf.position.x;
                n.y += this.m_xf.position.y;
                return n;
              };
              t.GetWorldVector = function (e) {
                return h.b2MulMV(this.m_xf.R, e);
              };
              t.GetLocalPoint = function (e) {
                return h.b2MulXT(this.m_xf, e);
              };
              t.GetLocalVector = function (e) {
                return h.b2MulTMV(this.m_xf.R, e);
              };
              t.GetLinearVelocityFromWorldPoint = function (e) {
                return new l(this.m_linearVelocity.x + this.m_angularVelocity * (e.y - this.m_sweep.c.y), this.m_linearVelocity.y - this.m_angularVelocity * (e.x - this.m_sweep.c.x));
              };
              t.GetLinearVelocityFromLocalPoint = function (e) {
                var t = this.m_xf.R;
                var n = new l(t.col1.x * e.x + t.col2.x * e.y, t.col1.y * e.x + t.col2.y * e.y);
                n.x += this.m_xf.position.x;
                n.y += this.m_xf.position.y;
                return new l(this.m_linearVelocity.x + this.m_angularVelocity * (n.y - this.m_sweep.c.y), this.m_linearVelocity.y - this.m_angularVelocity * (n.x - this.m_sweep.c.x));
              };
              t.IsBullet = function () {
                return (this.m_flags & e.e_bulletFlag) == e.e_bulletFlag;
              };
              t.SetBullet = function (t) {
                if (t) {
                  this.m_flags |= e.e_bulletFlag;
                } else {
                  this.m_flags &= ~e.e_bulletFlag;
                }
              };
              t.IsStatic = function () {
                return this.m_type == e.e_staticType;
              };
              t.IsDynamic = function () {
                return this.m_type == e.e_dynamicType;
              };
              t.IsFrozen = function () {
                return (this.m_flags & e.e_frozenFlag) == e.e_frozenFlag;
              };
              t.IsSleeping = function () {
                return (this.m_flags & e.e_sleepFlag) == e.e_sleepFlag;
              };
              t.AllowSleeping = function (t) {
                if (t) {
                  this.m_flags |= e.e_allowSleepFlag;
                } else {
                  this.m_flags &= ~e.e_allowSleepFlag;
                  this.WakeUp();
                }
              };
              t.WakeUp = function () {
                this.m_flags &= ~e.e_sleepFlag;
                this.m_sleepTime = 0;
              };
              t.PutToSleep = function () {
                this.m_flags |= e.e_sleepFlag;
                this.m_sleepTime = 0;
                this.m_linearVelocity.SetZero();
                this.m_angularVelocity = 0;
                this.m_force.SetZero();
                this.m_torque = 0;
              };
              t.GetShapeList = function () {
                return this.m_shapeList;
              };
              t.GetJointList = function () {
                return this.m_jointList;
              };
              t.GetNext = function () {
                return this.m_next;
              };
              t.GetUserData = function () {
                return this.m_userData;
              };
              t.SetUserData = function (e) {
                this.m_userData = e;
              };
              t.GetWorld = function () {
                return this.m_world;
              };
              t.SynchronizeShapes = function () {
                var t = e.s_xf1;
                t.R.Set(this.m_sweep.a0);
                var n;
                var r = t.R;
                var i = this.m_sweep.localCenter;
                t.position.x = this.m_sweep.c0.x - (r.col1.x * i.x + r.col2.x * i.y);
                t.position.y = this.m_sweep.c0.y - (r.col1.y * i.x + r.col2.y * i.y);
                var s = true;
                for (n = this.m_shapeList; n && (s = n.Synchronize(this.m_world.m_broadPhase, t, this.m_xf)) != 0; n = n.m_next);
                if (s == 0) {
                  this.m_flags |= e.e_frozenFlag;
                  this.m_linearVelocity.SetZero();
                  this.m_angularVelocity = 0;
                  n = this.m_shapeList;
                  for (; n; n = n.m_next) {
                    n.DestroyProxy(this.m_world.m_broadPhase);
                  }
                  return false;
                }
                return true;
              };
              t.SynchronizeTransform = function () {
                this.m_xf.R.Set(this.m_sweep.a);
                var e = this.m_xf.R;
                var t = this.m_sweep.localCenter;
                this.m_xf.position.x = this.m_sweep.c.x - (e.col1.x * t.x + e.col2.x * t.y);
                this.m_xf.position.y = this.m_sweep.c.y - (e.col1.y * t.x + e.col2.y * t.y);
              };
              t.IsConnected = function (e) {
                for (var t = this.m_jointList; t; t = t.next) {
                  if (t.other == e) {
                    return t.joint.m_collideConnected == 0;
                  }
                }
                return false;
              };
              t.Advance = function (e) {
                this.m_sweep.Advance(e);
                this.m_sweep.c.SetV(this.m_sweep.c0);
                this.m_sweep.a = this.m_sweep.a0;
                this.SynchronizeTransform();
              };
              t.CopyInterpolation = function (e) {
                this.m_interpolatedPosition = e.m_interpolatedPosition.Copy();
                this.m_interpolatedWorldCenter = e.m_interpolatedWorldCenter.Copy();
                this.m_interpolatedLinearVelocity = e.m_interpolatedLinearVelocity.Copy();
                this.m_interpolatedMatrix = e.m_interpolatedMatrix.Copy();
                this.m_interpolatedAngle = e.m_interpolatedAngle;
              };
              t.UpdateInterpolation = function (e) {
                var t;
                var n;
                var r;
                t = this.m_interpolatedMatrix;
                n = this.m_xf.R;
                r = e;
                K(t.col1, n.col1, r);
                K(t.col2, n.col2, r);
                this.m_interpolatedPosition.x = J(this.m_interpolatedPosition.x, this.m_xf.position.x, e);
                this.m_interpolatedPosition.y = J(this.m_interpolatedPosition.y, this.m_xf.position.y, e);
                this.m_interpolatedWorldCenter.x = J(this.m_interpolatedWorldCenter.x, this.m_sweep.c.x, e);
                this.m_interpolatedWorldCenter.y = J(this.m_interpolatedWorldCenter.y, this.m_sweep.c.y, e);
                this.m_interpolatedLinearVelocity.x = J(this.m_interpolatedLinearVelocity.x, this.m_linearVelocity.x, e);
                this.m_interpolatedLinearVelocity.y = J(this.m_interpolatedLinearVelocity.y, this.m_linearVelocity.y, e);
                this.m_interpolatedAngle = function (e, t, n) {
                  return e + function (e, t, n = false) {
                    var r = n ? 57.2958 : 1;
                    var i = Math.PI * 2 * r;
                    var s = (t - e) % i;
                    return s * 2 % i - s;
                  }(e, t, false) * (n < 0 ? 0 : n > 1 ? 1 : n);
                }(this.m_interpolatedAngle, this.m_sweep.a, e);
              };
              t.GetInterpolatedPosition = function () {
                if (e.USE_INTERPOLATION) {
                  return this.m_interpolatedPosition;
                } else {
                  return this.m_xf.position;
                }
              };
              t.GetInterpolatedAngle = function () {
                if (e.USE_INTERPOLATION) {
                  return this.m_interpolatedAngle;
                } else {
                  return this.m_sweep.a;
                }
              };
              t.GetInterpolatedWorldCenter = function () {
                if (e.USE_INTERPOLATION) {
                  return this.m_interpolatedWorldCenter;
                } else {
                  return this.m_sweep.c;
                }
              };
              t.GetInterpolatedLinearVelocity = function () {
                if (e.USE_INTERPOLATION) {
                  return this.m_interpolatedLinearVelocity;
                } else {
                  return this.m_linearVelocity;
                }
              };
              t.GetInterpolatedXForm = function () {
                if (!e.USE_INTERPOLATION) {
                  return this.m_xf;
                }
                var t = new s();
                t.position.SetV(this.m_interpolatedPosition);
                t.R.SetM(this.m_interpolatedMatrix);
                return t;
              };
              t.GetInterpolatedWorldPoint = function (t) {
                var n = e.USE_INTERPOLATION ? this.m_interpolatedMatrix : this.m_xf.R;
                var r = new l(n.col1.x * t.x + n.col2.x * t.y, n.col1.y * t.x + n.col2.y * t.y);
                r.x += e.USE_INTERPOLATION ? this.m_interpolatedPosition.x : this.m_xf.position.x;
                r.y += e.USE_INTERPOLATION ? this.m_interpolatedPosition.y : this.m_xf.position.y;
                return r;
              };
              return e;
            }();
            Z.e_frozenFlag = 2;
            Z.e_islandFlag = 4;
            Z.e_sleepFlag = 8;
            Z.e_allowSleepFlag = 16;
            Z.e_bulletFlag = 32;
            Z.e_fixedRotationFlag = 64;
            Z.e_staticType = 1;
            Z.e_dynamicType = 2;
            Z.e_maxTypes = 3;
            Z.s_massData = new H();
            Z.s_xf1 = new s();
            Z.USE_INTERPOLATION = false;
            var $;
            function Q() {
              this.massData = new H();
              this.position = new l();
              this.massData.center.SetZero();
              this.massData.mass = 0;
              this.massData.I = 0;
              this.userData = null;
              this.position.Set(0, 0);
              this.angle = 0;
              this.linearDamping = 0;
              this.angularDamping = 0;
              this.allowSleep = true;
              this.isSleeping = false;
              this.fixedRotation = false;
              this.isBullet = false;
            }
            var ee = function () {
              function e() {}
              e.prototype.ShouldCollide = function (e, t) {
                var n = e.GetFilterData();
                var r = t.GetFilterData();
                if (n.groupIndex == r.groupIndex && n.groupIndex != 0) {
                  return n.groupIndex > 0;
                } else {
                  return (n.maskBits & r.categoryBits) != 0 && (n.categoryBits & r.maskBits) != 0;
                }
              };
              return e;
            }();
            function te(e, t) {
              te = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return te(e, t);
            }
            $ = ee;
            ee.b2_defaultFilter = new $();
            var ne = function (e) {
              function t() {
                return e.apply(this, arguments) || this;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              te(n, r);
              var i = t.prototype;
              i.Add = function (e) {};
              i.Persist = function (e) {};
              i.Remove = function (e) {};
              i.Result = function (e) {};
              return t;
            }(n(4971).Qe);
            function re() {}
            function ie() {}
            function se(e, t) {
              e.prototype = Object.create(t.prototype);
              e.prototype.constructor = e;
              ae(e, t);
            }
            function ae(e, t) {
              ae = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return ae(e, t);
            }
            var oe = function () {
              function e(t = null, n = null) {
                this.m_node1 = new ie();
                this.m_node2 = new ie();
                this.m_flags = 0;
                if (!t || !n) {
                  this.m_shape1 = null;
                  this.m_shape2 = null;
                  return;
                }
                if (t.IsSensor() || n.IsSensor()) {
                  this.m_flags |= e.e_nonSolidFlag;
                }
                this.m_shape1 = t;
                this.m_shape2 = n;
                this.m_manifoldCount = 0;
                this.m_friction = Math.sqrt(this.m_shape1.m_friction * this.m_shape2.m_friction);
                this.m_restitution = h.b2Max(this.m_shape1.m_restitution, this.m_shape2.m_restitution);
                this.m_prev = null;
                this.m_next = null;
                this.m_node1.contact = null;
                this.m_node1.prev = null;
                this.m_node1.next = null;
                this.m_node1.other = null;
                this.m_node2.contact = null;
                this.m_node2.prev = null;
                this.m_node2.next = null;
                this.m_node2.other = null;
              }
              var t = e.prototype;
              t.Evaluate = function (e) {};
              t.GetManifolds = function () {
                return null;
              };
              t.GetManifoldCount = function () {
                return this.m_manifoldCount;
              };
              t.IsSolid = function () {
                return (this.m_flags & e.e_nonSolidFlag) == 0;
              };
              t.GetNext = function () {
                return this.m_next;
              };
              t.GetShape1 = function () {
                return this.m_shape1;
              };
              t.GetShape2 = function () {
                return this.m_shape2;
              };
              e.AddType = function (t, n, r, i) {
                e.s_registers[r][i].createFcn = t;
                e.s_registers[r][i].destroyFcn = n;
                e.s_registers[r][i].primary = true;
                if (r != i) {
                  e.s_registers[i][r].createFcn = t;
                  e.s_registers[i][r].destroyFcn = n;
                  e.s_registers[i][r].primary = false;
                }
              };
              e.InitializeRegisters = function () {
                e.s_registers = new Array(M.e_shapeTypeCount);
                for (var t = 0; t < M.e_shapeTypeCount; t++) {
                  e.s_registers[t] = new Array(M.e_shapeTypeCount);
                  for (var n = 0; n < M.e_shapeTypeCount; n++) {
                    e.s_registers[t][n] = new re();
                  }
                }
                e.AddType(he.Create, he.Destroy, M.e_circleShape, M.e_circleShape);
                e.AddType(le.Create, le.Destroy, M.e_polygonShape, M.e_circleShape);
                e.AddType(de.Create, de.Destroy, M.e_polygonShape, M.e_polygonShape);
              };
              e.Create = function (t, n, r) {
                if (e.s_initialized == 0) {
                  e.InitializeRegisters();
                  e.s_initialized = true;
                }
                var i = t.m_type;
                var s = n.m_type;
                var a = e.s_registers[i][s];
                var o = a.createFcn;
                if (o != null) {
                  if (a.primary) {
                    return o(t, n, r);
                  }
                  for (var h = o(n, t, r), l = 0; l < h.m_manifoldCount; ++l) {
                    var d = h.GetManifolds()[l];
                    d.normal = d.normal.Negative();
                  }
                  return h;
                }
                return null;
              };
              e.Destroy = function (t, n) {
                if (t.m_manifoldCount > 0) {
                  t.m_shape1.m_body.WakeUp();
                  t.m_shape2.m_body.WakeUp();
                }
                var r = t.m_shape1.m_type;
                var i = t.m_shape2.m_type;
                (0, e.s_registers[r][i].destroyFcn)(t, n);
              };
              t.Update = function (t) {
                var n = this.m_manifoldCount;
                this.Evaluate(t);
                var r = this.m_manifoldCount;
                var i = this.m_shape1.m_body;
                var s = this.m_shape2.m_body;
                if (r == 0 && n > 0) {
                  i.WakeUp();
                  s.WakeUp();
                }
                if (i.IsStatic() || i.IsBullet() || s.IsStatic() || s.IsBullet()) {
                  this.m_flags &= ~e.e_slowFlag;
                } else {
                  this.m_flags |= e.e_slowFlag;
                }
              };
              return e;
            }();
            oe.s_initialized = false;
            oe.e_nonSolidFlag = 1;
            oe.e_slowFlag = 2;
            oe.e_islandFlag = 4;
            oe.e_toiFlag = 8;
            var he = function (e) {
              function t(t, n) {
                var r;
                (r = e.call(this, t, n) || this).m_manifolds = [new B()];
                r.m0 = new B();
                r.m_manifold = r.m_manifolds[0];
                r.m_manifold.pointCount = 0;
                var i = r.m_manifold.points[0];
                i.normalImpulse = 0;
                i.tangentImpulse = 0;
                return r;
              }
              se(t, e);
              t.Create = function (e, n, r) {
                return new t(e, n);
              };
              t.Destroy = function (e, t) {};
              var n = t.prototype;
              n.Evaluate = function (e) {
                var n;
                var r;
                var i;
                var s = this.m_shape1.m_body;
                var a = this.m_shape2.m_body;
                this.m0.Set(this.m_manifold);
                C.b2CollideCircles(this.m_manifold, this.m_shape1, s.m_xf, this.m_shape2, a.m_xf);
                var o = t.s_evalCP;
                o.shape1 = this.m_shape1;
                o.shape2 = this.m_shape2;
                o.friction = this.m_friction;
                o.restitution = this.m_restitution;
                if (this.m_manifold.pointCount > 0) {
                  this.m_manifoldCount = 1;
                  var h = this.m_manifold.points[0];
                  if (this.m0.pointCount == 0) {
                    h.normalImpulse = 0;
                    h.tangentImpulse = 0;
                    if (e) {
                      o.position = s.GetWorldPoint(h.localPoint1);
                      n = s.GetLinearVelocityFromLocalPoint(h.localPoint1);
                      r = a.GetLinearVelocityFromLocalPoint(h.localPoint2);
                      o.velocity.Set(r.x - n.x, r.y - n.y);
                      o.normal.SetV(this.m_manifold.normal);
                      o.separation = h.separation;
                      o.id.key = h.id._key;
                      e.Add(o);
                    }
                  } else {
                    i = this.m0.points[0];
                    h.normalImpulse = i.normalImpulse;
                    h.tangentImpulse = i.tangentImpulse;
                    if (e) {
                      o.position = s.GetWorldPoint(h.localPoint1);
                      n = s.GetLinearVelocityFromLocalPoint(h.localPoint1);
                      r = a.GetLinearVelocityFromLocalPoint(h.localPoint2);
                      o.velocity.Set(r.x - n.x, r.y - n.y);
                      o.normal.SetV(this.m_manifold.normal);
                      o.separation = h.separation;
                      o.id.key = h.id._key;
                      e.Persist(o);
                    }
                  }
                } else {
                  this.m_manifoldCount = 0;
                  if (this.m0.pointCount > 0 && e) {
                    i = this.m0.points[0];
                    o.position = s.GetWorldPoint(i.localPoint1);
                    n = s.GetLinearVelocityFromLocalPoint(i.localPoint1);
                    r = a.GetLinearVelocityFromLocalPoint(i.localPoint2);
                    o.velocity.Set(r.x - n.x, r.y - n.y);
                    o.normal.SetV(this.m0.normal);
                    o.separation = i.separation;
                    o.id.key = i.id._key;
                    e.Remove(o);
                  }
                }
              };
              n.GetManifolds = function () {
                return this.m_manifolds;
              };
              return t;
            }(oe);
            he.s_evalCP = new S();
            var le = function (e) {
              function t(t, n) {
                var r;
                (r = e.call(this, t, n) || this).m_manifolds = [new B()];
                r.m0 = new B();
                r.m_manifold = r.m_manifolds[0];
                c.b2Assert(r.m_shape1.m_type == M.e_polygonShape);
                c.b2Assert(r.m_shape2.m_type == M.e_circleShape);
                r.m_manifold.pointCount = 0;
                var i = r.m_manifold.points[0];
                i.normalImpulse = 0;
                i.tangentImpulse = 0;
                return r;
              }
              se(t, e);
              t.Create = function (e, n, r) {
                return new t(e, n);
              };
              t.Destroy = function (e, t) {};
              var n = t.prototype;
              n.Evaluate = function (e) {
                var n;
                var r;
                var i;
                var s;
                var a = this.m_shape1.m_body;
                var o = this.m_shape2.m_body;
                this.m0.Set(this.m_manifold);
                C.b2CollidePolygonAndCircle(this.m_manifold, this.m_shape1, a.m_xf, this.m_shape2, o.m_xf);
                var h = [false, false];
                var l = t.s_evalCP;
                l.shape1 = this.m_shape1;
                l.shape2 = this.m_shape2;
                l.friction = this.m_friction;
                l.restitution = this.m_restitution;
                if (this.m_manifold.pointCount > 0) {
                  for (n = 0; n < this.m_manifold.pointCount; ++n) {
                    var d = this.m_manifold.points[n];
                    d.normalImpulse = 0;
                    d.tangentImpulse = 0;
                    var c = false;
                    var u = d.id._key;
                    for (var p = 0; p < this.m0.pointCount; ++p) {
                      if (h[p] != 1 && (s = this.m0.points[p]).id._key == u) {
                        h[p] = true;
                        d.normalImpulse = s.normalImpulse;
                        d.tangentImpulse = s.tangentImpulse;
                        c = true;
                        if (e != null) {
                          l.position = a.GetWorldPoint(d.localPoint1);
                          r = a.GetLinearVelocityFromLocalPoint(d.localPoint1);
                          i = o.GetLinearVelocityFromLocalPoint(d.localPoint2);
                          l.velocity.Set(i.x - r.x, i.y - r.y);
                          l.normal.SetV(this.m_manifold.normal);
                          l.separation = d.separation;
                          l.id.key = u;
                          e.Persist(l);
                        }
                        break;
                      }
                    }
                    if (c == 0 && e != null) {
                      l.position = a.GetWorldPoint(d.localPoint1);
                      r = a.GetLinearVelocityFromLocalPoint(d.localPoint1);
                      i = o.GetLinearVelocityFromLocalPoint(d.localPoint2);
                      l.velocity.Set(i.x - r.x, i.y - r.y);
                      l.normal.SetV(this.m_manifold.normal);
                      l.separation = d.separation;
                      l.id.key = u;
                      e.Add(l);
                    }
                  }
                  this.m_manifoldCount = 1;
                } else {
                  this.m_manifoldCount = 0;
                }
                if (e != null) {
                  for (n = 0; n < this.m0.pointCount; ++n) {
                    if (!h[n]) {
                      s = this.m0.points[n];
                      l.position = a.GetWorldPoint(s.localPoint1);
                      r = a.GetLinearVelocityFromLocalPoint(s.localPoint1);
                      i = o.GetLinearVelocityFromLocalPoint(s.localPoint2);
                      l.velocity.Set(i.x - r.x, i.y - r.y);
                      l.normal.SetV(this.m0.normal);
                      l.separation = s.separation;
                      l.id.key = s.id._key;
                      e.Remove(l);
                    }
                  }
                }
              };
              n.GetManifolds = function () {
                return this.m_manifolds;
              };
              return t;
            }(oe);
            le.s_evalCP = new S();
            var de = function (e) {
              function t(t, n) {
                var r;
                (r = e.call(this, t, n) || this).m_manifolds = [new B()];
                r.m0 = new B();
                r.m_manifold = r.m_manifolds[0];
                r.m_manifold.pointCount = 0;
                return r;
              }
              se(t, e);
              t.Create = function (e, n, r) {
                return new t(e, n);
              };
              t.Destroy = function (e, t) {};
              var n = t.prototype;
              n.Evaluate = function (e) {
                var n;
                var r;
                var i;
                var s;
                var a = this.m_shape1.m_body;
                var o = this.m_shape2.m_body;
                this.m0.Set(this.m_manifold);
                C.b2CollidePolygons(this.m_manifold, this.m_shape1, a.m_xf, this.m_shape2, o.m_xf);
                var h = [false, false];
                var l = t.s_evalCP;
                l.shape1 = this.m_shape1;
                l.shape2 = this.m_shape2;
                l.friction = this.m_friction;
                l.restitution = this.m_restitution;
                if (this.m_manifold.pointCount > 0) {
                  for (s = 0; s < this.m_manifold.pointCount; ++s) {
                    var d = this.m_manifold.points[s];
                    d.normalImpulse = 0;
                    d.tangentImpulse = 0;
                    var c = false;
                    var u = d.id._key;
                    for (var p = 0; p < this.m0.pointCount; ++p) {
                      if (h[p] != 1 && (i = this.m0.points[p]).id._key == u) {
                        h[p] = true;
                        d.normalImpulse = i.normalImpulse;
                        d.tangentImpulse = i.tangentImpulse;
                        c = true;
                        if (e != null) {
                          l.position = a.GetWorldPoint(d.localPoint1);
                          n = a.GetLinearVelocityFromLocalPoint(d.localPoint1);
                          r = o.GetLinearVelocityFromLocalPoint(d.localPoint2);
                          l.velocity.Set(r.x - n.x, r.y - n.y);
                          l.normal.SetV(this.m_manifold.normal);
                          l.separation = d.separation;
                          l.id.key = u;
                          e.Persist(l);
                        }
                        break;
                      }
                    }
                    if (c == 0 && e != null) {
                      l.position = a.GetWorldPoint(d.localPoint1);
                      n = a.GetLinearVelocityFromLocalPoint(d.localPoint1);
                      r = o.GetLinearVelocityFromLocalPoint(d.localPoint2);
                      l.velocity.Set(r.x - n.x, r.y - n.y);
                      l.normal.SetV(this.m_manifold.normal);
                      l.separation = d.separation;
                      l.id.key = u;
                      e.Add(l);
                    }
                  }
                  this.m_manifoldCount = 1;
                } else {
                  this.m_manifoldCount = 0;
                }
                if (e != null) {
                  for (s = 0; s < this.m0.pointCount; ++s) {
                    if (!h[s]) {
                      i = this.m0.points[s];
                      l.position = a.GetWorldPoint(i.localPoint1);
                      n = a.GetLinearVelocityFromLocalPoint(i.localPoint1);
                      r = o.GetLinearVelocityFromLocalPoint(i.localPoint2);
                      l.velocity.Set(r.x - n.x, r.y - n.y);
                      l.normal.SetV(this.m0.normal);
                      l.separation = i.separation;
                      l.id.key = i.id._key;
                      e.Remove(l);
                    }
                  }
                }
              };
              n.GetManifolds = function () {
                return this.m_manifolds;
              };
              return t;
            }(oe);
            function ce(e, t) {
              ce = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return ce(e, t);
            }
            de.s_evalCP = new S();
            var ue = function (e) {
              function t() {
                return e.call(this) || this;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              ce(n, r);
              var i = t.prototype;
              i.Evaluate = function (e) {};
              i.GetManifolds = function () {
                return null;
              };
              return t;
            }(oe);
            function pe(e, t) {
              pe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return pe(e, t);
            }
            var me = function (e) {
              function t() {
                var t;
                (t = e.call(this) || this).m_nullContact = new ue();
                t.m_world = null;
                t.m_destroyImmediate = false;
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              pe(n, r);
              var i = t.prototype;
              i.PairAdded = function (e, t) {
                var n = e;
                var r = t;
                var i = n.m_body;
                var s = r.m_body;
                if (i.IsStatic() && s.IsStatic()) {
                  return this.m_nullContact;
                }
                if (n.m_body == r.m_body) {
                  return this.m_nullContact;
                }
                if (s.IsConnected(i)) {
                  return this.m_nullContact;
                }
                if (this.m_world.m_contactFilter != null && this.m_world.m_contactFilter.ShouldCollide(n, r) == 0) {
                  return this.m_nullContact;
                }
                var a = oe.Create(n, r, this.m_world.m_blockAllocator);
                if (a == null) {
                  return this.m_nullContact;
                } else {
                  n = a.m_shape1;
                  r = a.m_shape2;
                  i = n.m_body;
                  s = r.m_body;
                  a.m_prev = null;
                  a.m_next = this.m_world.m_contactList;
                  if (this.m_world.m_contactList != null) {
                    this.m_world.m_contactList.m_prev = a;
                  }
                  this.m_world.m_contactList = a;
                  a.m_node1.contact = a;
                  a.m_node1.other = s;
                  a.m_node1.prev = null;
                  a.m_node1.next = i.m_contactList;
                  if (i.m_contactList != null) {
                    i.m_contactList.prev = a.m_node1;
                  }
                  i.m_contactList = a.m_node1;
                  a.m_node2.contact = a;
                  a.m_node2.other = i;
                  a.m_node2.prev = null;
                  a.m_node2.next = s.m_contactList;
                  if (s.m_contactList != null) {
                    s.m_contactList.prev = a.m_node2;
                  }
                  s.m_contactList = a.m_node2;
                  ++this.m_world.m_contactCount;
                  return a;
                }
              };
              i.PairRemoved = function (e, t, n) {
                if (n != null) {
                  var r = n;
                  if (r != this.m_nullContact) {
                    this.Destroy(r);
                  }
                }
              };
              i.Destroy = function (e) {
                var n = e.m_shape1;
                var r = e.m_shape2;
                var i = e.m_manifoldCount;
                if (i > 0 && this.m_world.m_contactListener) {
                  var s = n.m_body;
                  var a = r.m_body;
                  var o = e.GetManifolds();
                  var h = t.s_evalCP;
                  h.shape1 = e.m_shape1;
                  h.shape2 = e.m_shape2;
                  h.friction = e.m_friction;
                  h.restitution = e.m_restitution;
                  for (var l = 0; l < i; ++l) {
                    var d = o[l];
                    h.normal.SetV(d.normal);
                    for (var c = 0; c < d.pointCount; ++c) {
                      var u = d.points[c];
                      h.position = s.GetWorldPoint(u.localPoint1);
                      var p = s.GetLinearVelocityFromLocalPoint(u.localPoint1);
                      var m = a.GetLinearVelocityFromLocalPoint(u.localPoint2);
                      h.velocity.Set(m.x - p.x, m.y - p.y);
                      h.separation = u.separation;
                      h.id.key = u.id._key;
                      this.m_world.m_contactListener.Remove(h);
                    }
                  }
                }
                if (e.m_prev) {
                  e.m_prev.m_next = e.m_next;
                }
                if (e.m_next) {
                  e.m_next.m_prev = e.m_prev;
                }
                if (e == this.m_world.m_contactList) {
                  this.m_world.m_contactList = e.m_next;
                }
                var f = n.m_body;
                var _ = r.m_body;
                if (e.m_node1.prev) {
                  e.m_node1.prev.next = e.m_node1.next;
                }
                if (e.m_node1.next) {
                  e.m_node1.next.prev = e.m_node1.prev;
                }
                if (e.m_node1 == f.m_contactList) {
                  f.m_contactList = e.m_node1.next;
                }
                if (e.m_node2.prev) {
                  e.m_node2.prev.next = e.m_node2.next;
                }
                if (e.m_node2.next) {
                  e.m_node2.next.prev = e.m_node2.prev;
                }
                if (e.m_node2 == _.m_contactList) {
                  _.m_contactList = e.m_node2.next;
                }
                oe.Destroy(e, this.m_world.m_blockAllocator);
                --this.m_world.m_contactCount;
              };
              i.Collide = function () {
                for (var e = this.m_world.m_contactList; e; e = e.m_next) {
                  var t = e.m_shape1.m_body;
                  var n = e.m_shape2.m_body;
                  if (!t.IsSleeping() || !n.IsSleeping()) {
                    e.Update(this.m_world.m_contactListener);
                  }
                }
              };
              return t;
            }(function () {
              function e() {}
              var t = e.prototype;
              t.PairAdded = function (e, t) {
                return null;
              };
              t.PairRemoved = function (e, t, n) {};
              return e;
            }());
            me.s_evalCP = new S();
            var fe = function () {
              function e() {
                this.m_drawScale = 1;
                this.m_lineThickness = 1;
                this.m_alpha = 1;
                this.m_fillAlpha = 1;
                this.m_xformScale = 1;
                this.m_drawFlags = 0;
              }
              var t = e.prototype;
              t.SetFlags = function (e) {
                this.m_drawFlags = e;
              };
              t.GetFlags = function () {
                return this.m_drawFlags;
              };
              t.AppendFlags = function (e) {
                this.m_drawFlags |= e;
              };
              t.ClearFlags = function (e) {
                this.m_drawFlags &= ~e;
              };
              t.DrawPolygon = function (e, t, n) {
                this.m_sprite.graphics.lineStyle(this.m_lineThickness, n.color, this.m_alpha);
                this.m_sprite.graphics.moveTo(e[0].x * this.m_drawScale, e[0].y * this.m_drawScale);
                for (var r = 1; r < t; r++) {
                  this.m_sprite.graphics.lineTo(e[r].x * this.m_drawScale, e[r].y * this.m_drawScale);
                }
                this.m_sprite.graphics.lineTo(e[0].x * this.m_drawScale, e[0].y * this.m_drawScale);
              };
              t.DrawSolidPolygon = function (e, t, n) {
                this.m_sprite.graphics.lineStyle(this.m_lineThickness, n.color, this.m_alpha);
                this.m_sprite.graphics.moveTo(e[0].x * this.m_drawScale, e[0].y * this.m_drawScale);
                this.m_sprite.graphics.beginFill(n.color, this.m_fillAlpha);
                for (var r = 1; r < t; r++) {
                  this.m_sprite.graphics.lineTo(e[r].x * this.m_drawScale, e[r].y * this.m_drawScale);
                }
                this.m_sprite.graphics.lineTo(e[0].x * this.m_drawScale, e[0].y * this.m_drawScale);
                this.m_sprite.graphics.endFill();
              };
              t.DrawCircle = function (e, t, n) {
                this.m_sprite.graphics.lineStyle(this.m_lineThickness, n.color, this.m_alpha);
                this.m_sprite.graphics.drawCircle(e.x * this.m_drawScale, e.y * this.m_drawScale, t * this.m_drawScale);
              };
              t.DrawSolidCircle = function (e, t, n, r) {
                this.m_sprite.graphics.lineStyle(this.m_lineThickness, r.color, this.m_alpha);
                this.m_sprite.graphics.moveTo(0, 0);
                this.m_sprite.graphics.beginFill(r.color, this.m_fillAlpha);
                this.m_sprite.graphics.drawCircle(e.x * this.m_drawScale, e.y * this.m_drawScale, t * this.m_drawScale);
                this.m_sprite.graphics.endFill();
                this.m_sprite.graphics.moveTo(e.x * this.m_drawScale, e.y * this.m_drawScale);
                this.m_sprite.graphics.lineTo((e.x + n.x * t) * this.m_drawScale, (e.y + n.y * t) * this.m_drawScale);
              };
              t.DrawSegment = function (e, t, n) {
                this.m_sprite.graphics.lineStyle(this.m_lineThickness, n.color, this.m_alpha);
                this.m_sprite.graphics.moveTo(e.x * this.m_drawScale, e.y * this.m_drawScale);
                this.m_sprite.graphics.lineTo(t.x * this.m_drawScale, t.y * this.m_drawScale);
              };
              t.DrawXForm = function (e) {
                this.m_sprite.graphics.lineStyle(this.m_lineThickness, 16711680, this.m_alpha);
                this.m_sprite.graphics.moveTo(e.position.x * this.m_drawScale, e.position.y * this.m_drawScale);
                this.m_sprite.graphics.lineTo((e.position.x + this.m_xformScale * e.R.col1.x) * this.m_drawScale, (e.position.y + this.m_xformScale * e.R.col1.y) * this.m_drawScale);
                this.m_sprite.graphics.lineStyle(this.m_lineThickness, 65280, this.m_alpha);
                this.m_sprite.graphics.moveTo(e.position.x * this.m_drawScale, e.position.y * this.m_drawScale);
                this.m_sprite.graphics.lineTo((e.position.x + this.m_xformScale * e.R.col2.x) * this.m_drawScale, (e.position.y + this.m_xformScale * e.R.col2.y) * this.m_drawScale);
              };
              return e;
            }();
            fe.e_shapeBit = 1;
            fe.e_jointBit = 2;
            fe.e_coreShapeBit = 4;
            fe.e_aabbBit = 8;
            fe.e_obbBit = 16;
            fe.e_pairBit = 32;
            fe.e_centerOfMassBit = 64;
            function _e() {
              this.localAnchor1 = new l();
              this.localAnchor2 = new l();
              this.r1 = new l();
              this.r2 = new l();
            }
            function ve() {
              this.normal = new l();
              this.points = new Array(c.b2_maxManifoldPoints);
              for (var e = 0; e < c.b2_maxManifoldPoints; e++) {
                this.points[e] = new _e();
              }
            }
            function ye() {}
            var ge = function () {
              function e(e, t, n, r) {
                var i;
                var s;
                var a;
                this.m_step = new ye();
                this.m_constraints = [];
                this.m_step.dt = e.dt;
                this.m_step.inv_dt = e.inv_dt;
                this.m_step.maxIterations = e.maxIterations;
                this.m_allocator = r;
                this.m_constraintCount = 0;
                s = 0;
                for (; s < n; ++s) {
                  i = t[s];
                  this.m_constraintCount += i.m_manifoldCount;
                }
                for (s = 0; s < this.m_constraintCount; s++) {
                  this.m_constraints[s] = new ve();
                }
                var o = 0;
                for (s = 0; s < n; ++s) {
                  var h = (i = t[s]).m_shape1.m_body;
                  var l = i.m_shape2.m_body;
                  for (var d = i.m_manifoldCount, u = i.GetManifolds(), p = i.m_friction, m = i.m_restitution, f = h.m_linearVelocity.x, _ = h.m_linearVelocity.y, v = l.m_linearVelocity.x, y = l.m_linearVelocity.y, g = h.m_angularVelocity, w = l.m_angularVelocity, x = 0; x < d; ++x) {
                    var b = u[x];
                    var T = b.normal.x;
                    var A = b.normal.y;
                    var C = this.m_constraints[o];
                    C.body1 = h;
                    C.body2 = l;
                    C.manifold = b;
                    C.normal.x = T;
                    C.normal.y = A;
                    C.pointCount = b.pointCount;
                    C.friction = p;
                    C.restitution = m;
                    for (var S = 0; S < C.pointCount; ++S) {
                      var E = b.points[S];
                      var O = C.points[S];
                      O.normalImpulse = E.normalImpulse;
                      O.tangentImpulse = E.tangentImpulse;
                      O.separation = E.separation;
                      O.positionImpulse = 0;
                      O.localAnchor1.SetV(E.localPoint1);
                      O.localAnchor2.SetV(E.localPoint2);
                      a = h.m_xf.R;
                      var k = E.localPoint1.x - h.m_sweep.localCenter.x;
                      var P = E.localPoint1.y - h.m_sweep.localCenter.y;
                      var M = a.col1.x * k + a.col2.x * P;
                      P = a.col1.y * k + a.col2.y * P;
                      k = M;
                      O.r1.Set(k, P);
                      a = l.m_xf.R;
                      var R = E.localPoint2.x - l.m_sweep.localCenter.x;
                      var I = E.localPoint2.y - l.m_sweep.localCenter.y;
                      M = a.col1.x * R + a.col2.x * I;
                      I = a.col1.y * R + a.col2.y * I;
                      R = M;
                      O.r2.Set(R, I);
                      var L = k * k + P * P;
                      var j = R * R + I * I;
                      var B = k * T + P * A;
                      var D = R * T + I * A;
                      var F = h.m_invMass + l.m_invMass;
                      F += h.m_invI * (L - B * B) + l.m_invI * (j - D * D);
                      O.normalMass = 1 / F;
                      var N = h.m_mass * h.m_invMass + l.m_mass * l.m_invMass;
                      N += h.m_mass * h.m_invI * (L - B * B) + l.m_mass * l.m_invI * (j - D * D);
                      O.equalizedMass = 1 / N;
                      var G = -T;
                      var U = k * A + P * G;
                      var V = R * A + I * G;
                      var H = h.m_invMass + l.m_invMass;
                      H += h.m_invI * (L - U * U) + l.m_invI * (j - V * V);
                      O.tangentMass = 1 / H;
                      O.velocityBias = 0;
                      if (O.separation > 0) {
                        O.velocityBias = O.separation * -60;
                      }
                      M = v + -w * I - f - -g * P;
                      var z = y + w * R - _ - g * k;
                      var W = C.normal.x * M + C.normal.y * z;
                      if (W < -c.b2_velocityThreshold) {
                        O.velocityBias += -C.restitution * W;
                      }
                    }
                    ++o;
                  }
                }
              }
              var t = e.prototype;
              t.InitVelocityConstraints = function (e) {
                for (var t = 0; t < this.m_constraintCount; ++t) {
                  var n = this.m_constraints[t];
                  var r = n.body1;
                  var i = n.body2;
                  var s = r.m_invMass;
                  var a = r.m_invI;
                  var o = i.m_invMass;
                  var h = i.m_invI;
                  var l = n.normal.x;
                  var d = n.normal.y;
                  var c = d;
                  var u = -l;
                  if (e.warmStarting) {
                    for (var p = n.pointCount, m = 0; m < p; ++m) {
                      var f = n.points[m];
                      f.normalImpulse *= e.dtRatio;
                      f.tangentImpulse *= e.dtRatio;
                      var _ = f.normalImpulse * l + f.tangentImpulse * c;
                      var v = f.normalImpulse * d + f.tangentImpulse * u;
                      r.m_angularVelocity -= a * (f.r1.x * v - f.r1.y * _);
                      r.m_linearVelocity.x -= s * _;
                      r.m_linearVelocity.y -= s * v;
                      i.m_angularVelocity += h * (f.r2.x * v - f.r2.y * _);
                      i.m_linearVelocity.x += o * _;
                      i.m_linearVelocity.y += o * v;
                    }
                  } else {
                    for (var y = n.pointCount, g = 0; g < y; ++g) {
                      var w = n.points[g];
                      w.normalImpulse = 0;
                      w.tangentImpulse = 0;
                    }
                  }
                }
              };
              t.SolveVelocityConstraints = function () {
                var e;
                var t;
                var n;
                var r;
                var i;
                var s;
                var a;
                var o;
                var l;
                var d;
                var c;
                var u;
                for (var p = 0; p < this.m_constraintCount; ++p) {
                  var m = this.m_constraints[p];
                  var f = m.body1;
                  var _ = m.body2;
                  var v = f.m_angularVelocity;
                  var y = _.m_angularVelocity;
                  var g = f.m_linearVelocity;
                  var w = _.m_linearVelocity;
                  var x = f.m_invMass;
                  var b = f.m_invI;
                  var T = _.m_invMass;
                  var A = _.m_invI;
                  var C = m.normal.x;
                  var S = m.normal.y;
                  var E = S;
                  var O = -C;
                  var k = m.friction;
                  var P = m.pointCount;
                  for (e = 0; e < P; ++e) {
                    t = m.points[e];
                    i = (n = w.x + -y * t.r2.y - g.x - -v * t.r1.y) * C + (r = w.y + y * t.r2.x - g.y - v * t.r1.x) * S;
                    a = -t.normalMass * (i - t.velocityBias);
                    s = n * E + r * O;
                    o = t.tangentMass * -s;
                    a = (l = h.b2Max(t.normalImpulse + a, 0)) - t.normalImpulse;
                    var M = k * t.normalImpulse;
                    c = a * C + (o = (d = h.b2Clamp(t.tangentImpulse + o, -M, M)) - t.tangentImpulse) * E;
                    u = a * S + o * O;
                    g.x -= x * c;
                    g.y -= x * u;
                    v -= b * (t.r1.x * u - t.r1.y * c);
                    w.x += T * c;
                    w.y += T * u;
                    y += A * (t.r2.x * u - t.r2.y * c);
                    t.normalImpulse = l;
                    t.tangentImpulse = d;
                  }
                  f.m_angularVelocity = v;
                  _.m_angularVelocity = y;
                }
              };
              t.FinalizeVelocityConstraints = function () {
                for (var e = 0; e < this.m_constraintCount; ++e) {
                  for (var t = this.m_constraints[e], n = t.manifold, r = 0; r < t.pointCount; ++r) {
                    var i = n.points[r];
                    var s = t.points[r];
                    i.normalImpulse = s.normalImpulse;
                    i.tangentImpulse = s.tangentImpulse;
                  }
                }
              };
              t.SolvePositionConstraints = function (e) {
                var t;
                var n;
                var r = 0;
                for (var i = 0; i < this.m_constraintCount; ++i) {
                  var s = this.m_constraints[i];
                  var a = s.body1;
                  var o = s.body2;
                  var l = a.m_sweep.c;
                  var d = a.m_sweep.a;
                  var u = o.m_sweep.c;
                  var p = o.m_sweep.a;
                  var m = a.m_mass * a.m_invMass;
                  var f = a.m_mass * a.m_invI;
                  var _ = o.m_mass * o.m_invMass;
                  var v = o.m_mass * o.m_invI;
                  var y = s.normal.x;
                  var g = s.normal.y;
                  for (var w = s.pointCount, x = 0; x < w; ++x) {
                    var b = s.points[x];
                    t = a.m_xf.R;
                    n = a.m_sweep.localCenter;
                    var T = b.localAnchor1.x - n.x;
                    var A = b.localAnchor1.y - n.y;
                    var C = t.col1.x * T + t.col2.x * A;
                    A = t.col1.y * T + t.col2.y * A;
                    T = C;
                    t = o.m_xf.R;
                    n = o.m_sweep.localCenter;
                    var S = b.localAnchor2.x - n.x;
                    var E = b.localAnchor2.y - n.y;
                    C = t.col1.x * S + t.col2.x * E;
                    E = t.col1.y * S + t.col2.y * E;
                    S = C;
                    var O = l.x + T;
                    var k = l.y + A;
                    var P = (u.x + S - O) * y + (u.y + E - k) * g + b.separation;
                    r = h.b2Min(r, P);
                    var M = e * h.b2Clamp(P + c.b2_linearSlop, -c.b2_maxLinearCorrection, 0);
                    var R = -b.equalizedMass * M;
                    var I = b.positionImpulse;
                    b.positionImpulse = h.b2Max(I + R, 0);
                    var L = (R = b.positionImpulse - I) * y;
                    var j = R * g;
                    l.x -= m * L;
                    l.y -= m * j;
                    d -= f * (T * j - A * L);
                    a.m_sweep.a = d;
                    a.SynchronizeTransform();
                    u.x += _ * L;
                    u.y += _ * j;
                    p += v * (S * j - E * L);
                    o.m_sweep.a = p;
                    o.SynchronizeTransform();
                  }
                }
                return r >= c.b2_linearSlop * -1.5;
              };
              return e;
            }();
            var we = function () {
              function e(e, t, n, r, i) {
                var s;
                this.m_bodyCapacity = e;
                this.m_contactCapacity = t;
                this.m_jointCapacity = n;
                this.m_bodyCount = 0;
                this.m_contactCount = 0;
                this.m_jointCount = 0;
                this.m_allocator = r;
                this.m_listener = i;
                this.m_bodies = new Array(e);
                s = 0;
                for (; s < e; s++) {
                  this.m_bodies[s] = null;
                }
                this.m_contacts = new Array(t);
                s = 0;
                for (; s < t; s++) {
                  this.m_contacts[s] = null;
                }
                this.m_joints = new Array(n);
                s = 0;
                for (; s < n; s++) {
                  this.m_joints[s] = null;
                }
                this.m_positionIterationCount = 0;
              }
              var t = e.prototype;
              t.Clear = function () {
                this.m_bodyCount = 0;
                this.m_contactCount = 0;
                this.m_jointCount = 0;
              };
              t.Solve = function (e, t, n, r) {
                var i;
                var s;
                for (i = 0; i < this.m_bodyCount; ++i) {
                  if (!(s = this.m_bodies[i]).IsStatic()) {
                    s.m_linearVelocity.x += e.dt * (t.x + s.m_invMass * s.m_force.x);
                    s.m_linearVelocity.y += e.dt * (t.y + s.m_invMass * s.m_force.y);
                    s.m_angularVelocity += e.dt * s.m_invI * s.m_torque;
                    s.m_force.SetZero();
                    s.m_torque = 0;
                    s.m_linearVelocity.Multiply(h.b2Clamp(1 - e.dt * s.m_linearDamping, 0, 1));
                    s.m_angularVelocity *= h.b2Clamp(1 - e.dt * s.m_angularDamping, 0, 1);
                    if (s.m_linearVelocity.LengthSquared() > c.b2_maxLinearVelocitySquared) {
                      s.m_linearVelocity.Normalize();
                      s.m_linearVelocity.x *= c.b2_maxLinearVelocity;
                      s.m_linearVelocity.y *= c.b2_maxLinearVelocity;
                    }
                    if (s.m_angularVelocity * s.m_angularVelocity > c.b2_maxAngularVelocitySquared) {
                      if (s.m_angularVelocity < 0) {
                        s.m_angularVelocity = -c.b2_maxAngularVelocity;
                      } else {
                        s.m_angularVelocity = c.b2_maxAngularVelocity;
                      }
                    }
                  }
                }
                var a = new ge(e, this.m_contacts, this.m_contactCount, this.m_allocator);
                a.InitVelocityConstraints(e);
                i = 0;
                for (; i < this.m_jointCount; ++i) {
                  this.m_joints[i].InitVelocityConstraints(e);
                }
                for (i = 0; i < e.maxIterations; ++i) {
                  a.SolveVelocityConstraints();
                  for (var o = 0; o < this.m_jointCount; ++o) {
                    this.m_joints[o].SolveVelocityConstraints(e);
                  }
                }
                a.FinalizeVelocityConstraints();
                i = 0;
                for (; i < this.m_bodyCount; ++i) {
                  if (!(s = this.m_bodies[i]).IsStatic()) {
                    s.m_sweep.c0.SetV(s.m_sweep.c);
                    s.m_sweep.a0 = s.m_sweep.a;
                    s.m_sweep.c.x += e.dt * s.m_linearVelocity.x;
                    s.m_sweep.c.y += e.dt * s.m_linearVelocity.y;
                    s.m_sweep.a += e.dt * s.m_angularVelocity;
                    s.SynchronizeTransform();
                  }
                }
                if (n) {
                  for (i = 0; i < this.m_jointCount; ++i) {
                    this.m_joints[i].InitPositionConstraints();
                  }
                  for (this.m_positionIterationCount = 0; this.m_positionIterationCount < e.maxIterations; ++this.m_positionIterationCount) {
                    var l = a.SolvePositionConstraints(c.b2_contactBaumgarte);
                    var d = true;
                    for (i = 0; i < this.m_jointCount; ++i) {
                      var u = this.m_joints[i].SolvePositionConstraints();
                      d = d && u;
                    }
                    if (l && d) {
                      break;
                    }
                  }
                }
                this.Report(a.m_constraints);
                if (r) {
                  var p = Number.MAX_VALUE;
                  var m = c.b2_linearSleepTolerance * c.b2_linearSleepTolerance;
                  var f = c.b2_angularSleepTolerance * c.b2_angularSleepTolerance;
                  for (i = 0; i < this.m_bodyCount; ++i) {
                    if ((s = this.m_bodies[i]).m_invMass != 0) {
                      if ((s.m_flags & Z.e_allowSleepFlag) == 0) {
                        s.m_sleepTime = 0;
                        p = 0;
                      }
                      if ((s.m_flags & Z.e_allowSleepFlag) == 0 || s.m_angularVelocity * s.m_angularVelocity > f || h.b2Dot(s.m_linearVelocity, s.m_linearVelocity) > m) {
                        s.m_sleepTime = 0;
                        p = 0;
                      } else {
                        s.m_sleepTime += e.dt;
                        p = h.b2Min(p, s.m_sleepTime);
                      }
                    }
                  }
                  if (p >= c.b2_timeToSleep) {
                    for (i = 0; i < this.m_bodyCount; ++i) {
                      (s = this.m_bodies[i]).m_flags |= Z.e_sleepFlag;
                      s.m_linearVelocity.SetZero();
                      s.m_angularVelocity = 0;
                    }
                  }
                }
              };
              t.SolveTOI = function (e) {
                var t;
                var n = new ge(e, this.m_contacts, this.m_contactCount, this.m_allocator);
                for (t = 0; t < e.maxIterations; ++t) {
                  n.SolveVelocityConstraints();
                }
                for (t = 0; t < this.m_bodyCount; ++t) {
                  var r = this.m_bodies[t];
                  if (!r.IsStatic()) {
                    r.m_sweep.c0.SetV(r.m_sweep.c);
                    r.m_sweep.a0 = r.m_sweep.a;
                    r.m_sweep.c.x += e.dt * r.m_linearVelocity.x;
                    r.m_sweep.c.y += e.dt * r.m_linearVelocity.y;
                    r.m_sweep.a += e.dt * r.m_angularVelocity;
                    r.SynchronizeTransform();
                  }
                }
                for (t = 0; t < e.maxIterations && !n.SolvePositionConstraints(0.75); ++t);
                this.Report(n.m_constraints);
              };
              t.Report = function (t) {
                if (this.m_listener != null) {
                  for (var n = 0; n < this.m_contactCount; ++n) {
                    var r = this.m_contacts[n];
                    var i = t[n];
                    var s = e.s_reportCR;
                    s.shape1 = r.m_shape1;
                    s.shape2 = r.m_shape2;
                    var a = s.shape1.m_body;
                    for (var o = r.m_manifoldCount, h = r.GetManifolds(), l = 0; l < o; ++l) {
                      var d = h[l];
                      s.normal.SetV(d.normal);
                      for (var c = 0; c < d.pointCount; ++c) {
                        var u = d.points[c];
                        var p = i.points[c];
                        s.position = a.GetWorldPoint(u.localPoint1);
                        s.normalImpulse = p.normalImpulse;
                        s.tangentImpulse = p.tangentImpulse;
                        s.id.key = u.id.key;
                        this.m_listener.Result(s);
                      }
                    }
                  }
                }
              };
              t.AddBody = function (e) {
                this.m_bodies[this.m_bodyCount++] = e;
              };
              t.AddContact = function (e) {
                this.m_contacts[this.m_contactCount++] = e;
              };
              t.AddJoint = function (e) {
                this.m_joints[this.m_jointCount++] = e;
              };
              return e;
            }();
            we.s_reportCR = new function () {
              this.position = new l();
              this.normal = new l();
              this.id = new T();
            }();
            function xe() {}
            var be = function () {
              function e() {
                this.linear1 = new l();
                this.linear2 = new l();
              }
              var t = e.prototype;
              t.SetZero = function () {
                this.linear1.SetZero();
                this.angular1 = 0;
                this.linear2.SetZero();
                this.angular2 = 0;
              };
              t.Set = function (e, t, n, r) {
                this.linear1.SetV(e);
                this.angular1 = t;
                this.linear2.SetV(n);
                this.angular2 = r;
              };
              t.Compute = function (e, t, n, r) {
                return this.linear1.x * e.x + this.linear1.y * e.y + this.angular1 * t + (this.linear2.x * n.x + this.linear2.y * n.y) + this.angular2 * r;
              };
              return e;
            }();
            function Te(e, t) {
              e.prototype = Object.create(t.prototype);
              e.prototype.constructor = e;
              Ae(e, t);
            }
            function Ae(e, t) {
              Ae = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return Ae(e, t);
            }
            var Ce = function () {
              function e(e) {
                this.m_node1 = new xe();
                this.m_node2 = new xe();
                this.m_type = e.type;
                this.m_prev = null;
                this.m_next = null;
                this.m_body1 = e.body1;
                this.m_body2 = e.body2;
                this.m_collideConnected = e.collideConnected;
                this.m_islandFlag = false;
                this.m_userData = e.userData;
              }
              var t = e.prototype;
              t.GetInterpolatedAnchor1 = function () {
                return null;
              };
              t.GetInterpolatedAnchor2 = function () {
                return null;
              };
              t.GetType = function () {
                return this.m_type;
              };
              t.GetAnchor1 = function () {
                return null;
              };
              t.GetAnchor2 = function () {
                return null;
              };
              t.GetReactionForce = function () {
                return null;
              };
              t.GetReactionTorque = function () {
                return 0;
              };
              t.GetBody1 = function () {
                return this.m_body1;
              };
              t.GetBody2 = function () {
                return this.m_body2;
              };
              t.GetNext = function () {
                return this.m_next;
              };
              t.GetUserData = function () {
                return this.m_userData;
              };
              t.SetUserData = function (e) {
                this.m_userData = e;
              };
              e.Create = function (t, n) {
                var r = null;
                switch (t.type) {
                  case e.e_distanceJoint:
                    r = new Re(t);
                    break;
                  case e.e_mouseJoint:
                    r = new Me(t);
                    break;
                  case e.e_prismaticJoint:
                    r = new ke(t);
                    break;
                  case e.e_revoluteJoint:
                    r = new Pe(t);
                    break;
                  case e.e_pulleyJoint:
                    r = new Se(t);
                    break;
                  case e.e_gearJoint:
                    r = new Ee(t);
                    break;
                  case e.e_ropeJoint:
                    r = new Oe(t);
                }
                return r;
              };
              e.Destroy = function (e, t) {};
              t.InitVelocityConstraints = function (e) {};
              t.SolveVelocityConstraints = function (e) {};
              t.InitPositionConstraints = function () {};
              t.SolvePositionConstraints = function () {
                return false;
              };
              return e;
            }();
            Ce.e_unknownJoint = 0;
            Ce.e_revoluteJoint = 1;
            Ce.e_prismaticJoint = 2;
            Ce.e_distanceJoint = 3;
            Ce.e_pulleyJoint = 4;
            Ce.e_mouseJoint = 5;
            Ce.e_gearJoint = 6;
            Ce.e_ropeJoint = 7;
            Ce.e_inactiveLimit = 0;
            Ce.e_atLowerLimit = 1;
            Ce.e_atUpperLimit = 2;
            Ce.e_equalLimits = 3;
            var Se = function (e) {
              function t(n) {
                var r;
                (r = e.call(this, n) || this).m_groundAnchor1 = new l();
                r.m_groundAnchor2 = new l();
                r.m_localAnchor1 = new l();
                r.m_localAnchor2 = new l();
                r.m_u1 = new l();
                r.m_u2 = new l();
                r.m_ground = r.m_body1.m_world.m_groundBody;
                r.m_groundAnchor1.x = n.groundAnchor1.x - r.m_ground.m_xf.position.x;
                r.m_groundAnchor1.y = n.groundAnchor1.y - r.m_ground.m_xf.position.y;
                r.m_groundAnchor2.x = n.groundAnchor2.x - r.m_ground.m_xf.position.x;
                r.m_groundAnchor2.y = n.groundAnchor2.y - r.m_ground.m_xf.position.y;
                r.m_localAnchor1.SetV(n.localAnchor1);
                r.m_localAnchor2.SetV(n.localAnchor2);
                r.m_ratio = n.ratio;
                r.m_constant = n.length1 + r.m_ratio * n.length2;
                r.m_maxLength1 = h.b2Min(n.maxLength1, r.m_constant - r.m_ratio * t.b2_minPulleyLength);
                r.m_maxLength2 = h.b2Min(n.maxLength2, (r.m_constant - t.b2_minPulleyLength) / r.m_ratio);
                r.m_force = 0;
                r.m_limitForce1 = 0;
                r.m_limitForce2 = 0;
                return r;
              }
              Te(t, e);
              var n = t.prototype;
              n.GetInterpolatedAnchor1 = function () {
                return this.m_body1.GetInterpolatedWorldPoint(this.m_localAnchor1);
              };
              n.GetInterpolatedAnchor2 = function () {
                return this.m_body2.GetInterpolatedWorldPoint(this.m_localAnchor2);
              };
              n.GetAnchor1 = function () {
                return this.m_body1.GetWorldPoint(this.m_localAnchor1);
              };
              n.GetAnchor2 = function () {
                return this.m_body2.GetWorldPoint(this.m_localAnchor2);
              };
              n.GetReactionForce = function () {
                var e = this.m_u2.Copy();
                e.Multiply(this.m_force);
                return e;
              };
              n.GetReactionTorque = function () {
                return 0;
              };
              n.GetGroundAnchor1 = function () {
                var e = this.m_ground.m_xf.position.Copy();
                e.Add(this.m_groundAnchor1);
                return e;
              };
              n.GetGroundAnchor2 = function () {
                var e = this.m_ground.m_xf.position.Copy();
                e.Add(this.m_groundAnchor2);
                return e;
              };
              n.GetLength1 = function () {
                var e = this.m_body1.GetWorldPoint(this.m_localAnchor1);
                var t = this.m_ground.m_xf.position.x + this.m_groundAnchor1.x;
                var n = this.m_ground.m_xf.position.y + this.m_groundAnchor1.y;
                var r = e.x - t;
                var i = e.y - n;
                return Math.sqrt(r * r + i * i);
              };
              n.GetLength2 = function () {
                var e = this.m_body2.GetWorldPoint(this.m_localAnchor2);
                var t = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x;
                var n = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y;
                var r = e.x - t;
                var i = e.y - n;
                return Math.sqrt(r * r + i * i);
              };
              n.GetRatio = function () {
                return this.m_ratio;
              };
              n.InitVelocityConstraints = function (e) {
                var n;
                var r = this.m_body1;
                var i = this.m_body2;
                n = r.m_xf.R;
                var s = this.m_localAnchor1.x - r.m_sweep.localCenter.x;
                var a = this.m_localAnchor1.y - r.m_sweep.localCenter.y;
                var o = n.col1.x * s + n.col2.x * a;
                a = n.col1.y * s + n.col2.y * a;
                s = o;
                n = i.m_xf.R;
                var h = this.m_localAnchor2.x - i.m_sweep.localCenter.x;
                var l = this.m_localAnchor2.y - i.m_sweep.localCenter.y;
                o = n.col1.x * h + n.col2.x * l;
                l = n.col1.y * h + n.col2.y * l;
                h = o;
                var d = r.m_sweep.c.x + s;
                var u = r.m_sweep.c.y + a;
                var p = i.m_sweep.c.x + h;
                var m = i.m_sweep.c.y + l;
                var f = this.m_ground.m_xf.position.x + this.m_groundAnchor1.x;
                var _ = this.m_ground.m_xf.position.y + this.m_groundAnchor1.y;
                var v = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x;
                var y = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y;
                this.m_u1.Set(d - f, u - _);
                this.m_u2.Set(p - v, m - y);
                var g = this.m_u1.Length();
                var w = this.m_u2.Length();
                if (g > c.b2_linearSlop) {
                  this.m_u1.Multiply(1 / g);
                } else {
                  this.m_u1.SetZero();
                }
                if (w > c.b2_linearSlop) {
                  this.m_u2.Multiply(1 / w);
                } else {
                  this.m_u2.SetZero();
                }
                if (this.m_constant - g - this.m_ratio * w > 0) {
                  this.m_state = t.e_inactiveLimit;
                  this.m_force = 0;
                } else {
                  this.m_state = t.e_atUpperLimit;
                  this.m_positionImpulse = 0;
                }
                if (g < this.m_maxLength1) {
                  this.m_limitState1 = t.e_inactiveLimit;
                  this.m_limitForce1 = 0;
                } else {
                  this.m_limitState1 = t.e_atUpperLimit;
                  this.m_limitPositionImpulse1 = 0;
                }
                if (w < this.m_maxLength2) {
                  this.m_limitState2 = t.e_inactiveLimit;
                  this.m_limitForce2 = 0;
                } else {
                  this.m_limitState2 = t.e_atUpperLimit;
                  this.m_limitPositionImpulse2 = 0;
                }
                var x = s * this.m_u1.y - a * this.m_u1.x;
                var b = h * this.m_u2.y - l * this.m_u2.x;
                this.m_limitMass1 = r.m_invMass + r.m_invI * x * x;
                this.m_limitMass2 = i.m_invMass + i.m_invI * b * b;
                this.m_pulleyMass = this.m_limitMass1 + this.m_ratio * this.m_ratio * this.m_limitMass2;
                this.m_limitMass1 = 1 / this.m_limitMass1;
                this.m_limitMass2 = 1 / this.m_limitMass2;
                this.m_pulleyMass = 1 / this.m_pulleyMass;
                if (e.warmStarting) {
                  var T = e.dt * (-this.m_force - this.m_limitForce1) * this.m_u1.x;
                  var A = e.dt * (-this.m_force - this.m_limitForce1) * this.m_u1.y;
                  var C = e.dt * (-this.m_ratio * this.m_force - this.m_limitForce2) * this.m_u2.x;
                  var S = e.dt * (-this.m_ratio * this.m_force - this.m_limitForce2) * this.m_u2.y;
                  r.m_linearVelocity.x += r.m_invMass * T;
                  r.m_linearVelocity.y += r.m_invMass * A;
                  r.m_angularVelocity += r.m_invI * (s * A - a * T);
                  i.m_linearVelocity.x += i.m_invMass * C;
                  i.m_linearVelocity.y += i.m_invMass * S;
                  i.m_angularVelocity += i.m_invI * (h * S - l * C);
                } else {
                  this.m_force = 0;
                  this.m_limitForce1 = 0;
                  this.m_limitForce2 = 0;
                }
              };
              n.SolveVelocityConstraints = function (e) {
                var n;
                var r = this.m_body1;
                var i = this.m_body2;
                n = r.m_xf.R;
                var s = this.m_localAnchor1.x - r.m_sweep.localCenter.x;
                var a = this.m_localAnchor1.y - r.m_sweep.localCenter.y;
                var o = n.col1.x * s + n.col2.x * a;
                a = n.col1.y * s + n.col2.y * a;
                s = o;
                n = i.m_xf.R;
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
                var w = this.m_localAnchor2.x - i.m_sweep.localCenter.x;
                var x = this.m_localAnchor2.y - i.m_sweep.localCenter.y;
                o = n.col1.x * w + n.col2.x * x;
                x = n.col1.y * w + n.col2.y * x;
                w = o;
                if (this.m_state == t.e_atUpperLimit) {
                  l = r.m_linearVelocity.x + -r.m_angularVelocity * a;
                  d = r.m_linearVelocity.y + r.m_angularVelocity * s;
                  c = i.m_linearVelocity.x + -i.m_angularVelocity * x;
                  u = i.m_linearVelocity.y + i.m_angularVelocity * w;
                  v = -(this.m_u1.x * l + this.m_u1.y * d) - this.m_ratio * (this.m_u2.x * c + this.m_u2.y * u);
                  y = -e.inv_dt * this.m_pulleyMass * v;
                  g = this.m_force;
                  this.m_force = h.b2Max(0, this.m_force + y);
                  y = this.m_force - g;
                  p = -e.dt * y * this.m_u1.x;
                  m = -e.dt * y * this.m_u1.y;
                  f = -e.dt * this.m_ratio * y * this.m_u2.x;
                  _ = -e.dt * this.m_ratio * y * this.m_u2.y;
                  r.m_linearVelocity.x += r.m_invMass * p;
                  r.m_linearVelocity.y += r.m_invMass * m;
                  r.m_angularVelocity += r.m_invI * (s * m - a * p);
                  i.m_linearVelocity.x += i.m_invMass * f;
                  i.m_linearVelocity.y += i.m_invMass * _;
                  i.m_angularVelocity += i.m_invI * (w * _ - x * f);
                }
                if (this.m_limitState1 == t.e_atUpperLimit) {
                  l = r.m_linearVelocity.x + -r.m_angularVelocity * a;
                  d = r.m_linearVelocity.y + r.m_angularVelocity * s;
                  v = -(this.m_u1.x * l + this.m_u1.y * d);
                  y = -e.inv_dt * this.m_limitMass1 * v;
                  g = this.m_limitForce1;
                  this.m_limitForce1 = h.b2Max(0, this.m_limitForce1 + y);
                  y = this.m_limitForce1 - g;
                  p = -e.dt * y * this.m_u1.x;
                  m = -e.dt * y * this.m_u1.y;
                  r.m_linearVelocity.x += r.m_invMass * p;
                  r.m_linearVelocity.y += r.m_invMass * m;
                  r.m_angularVelocity += r.m_invI * (s * m - a * p);
                }
                if (this.m_limitState2 == t.e_atUpperLimit) {
                  c = i.m_linearVelocity.x + -i.m_angularVelocity * x;
                  u = i.m_linearVelocity.y + i.m_angularVelocity * w;
                  v = -(this.m_u2.x * c + this.m_u2.y * u);
                  y = -e.inv_dt * this.m_limitMass2 * v;
                  g = this.m_limitForce2;
                  this.m_limitForce2 = h.b2Max(0, this.m_limitForce2 + y);
                  y = this.m_limitForce2 - g;
                  f = -e.dt * y * this.m_u2.x;
                  _ = -e.dt * y * this.m_u2.y;
                  i.m_linearVelocity.x += i.m_invMass * f;
                  i.m_linearVelocity.y += i.m_invMass * _;
                  i.m_angularVelocity += i.m_invI * (w * _ - x * f);
                }
              };
              n.SolvePositionConstraints = function () {
                var e;
                var n;
                var r;
                var i;
                var s;
                var a;
                var o;
                var l;
                var d;
                var u;
                var p;
                var m;
                var f;
                var _;
                var v;
                var y;
                var g = this.m_body1;
                var w = this.m_body2;
                var x = this.m_ground.m_xf.position.x + this.m_groundAnchor1.x;
                var b = this.m_ground.m_xf.position.y + this.m_groundAnchor1.y;
                var T = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x;
                var A = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y;
                var C = 0;
                if (this.m_state == t.e_atUpperLimit) {
                  e = g.m_xf.R;
                  n = this.m_localAnchor1.x - g.m_sweep.localCenter.x;
                  r = this.m_localAnchor1.y - g.m_sweep.localCenter.y;
                  y = e.col1.x * n + e.col2.x * r;
                  r = e.col1.y * n + e.col2.y * r;
                  n = y;
                  e = w.m_xf.R;
                  i = this.m_localAnchor2.x - w.m_sweep.localCenter.x;
                  s = this.m_localAnchor2.y - w.m_sweep.localCenter.y;
                  y = e.col1.x * i + e.col2.x * s;
                  s = e.col1.y * i + e.col2.y * s;
                  i = y;
                  a = g.m_sweep.c.x + n;
                  o = g.m_sweep.c.y + r;
                  l = w.m_sweep.c.x + i;
                  d = w.m_sweep.c.y + s;
                  this.m_u1.Set(a - x, o - b);
                  this.m_u2.Set(l - T, d - A);
                  u = this.m_u1.Length();
                  p = this.m_u2.Length();
                  if (u > c.b2_linearSlop) {
                    this.m_u1.Multiply(1 / u);
                  } else {
                    this.m_u1.SetZero();
                  }
                  if (p > c.b2_linearSlop) {
                    this.m_u2.Multiply(1 / p);
                  } else {
                    this.m_u2.SetZero();
                  }
                  m = this.m_constant - u - this.m_ratio * p;
                  C = h.b2Max(C, -m);
                  m = h.b2Clamp(m + c.b2_linearSlop, -c.b2_maxLinearCorrection, 0);
                  f = -this.m_pulleyMass * m;
                  _ = this.m_positionImpulse;
                  this.m_positionImpulse = h.b2Max(0, this.m_positionImpulse + f);
                  a = -(f = this.m_positionImpulse - _) * this.m_u1.x;
                  o = -f * this.m_u1.y;
                  l = -this.m_ratio * f * this.m_u2.x;
                  d = -this.m_ratio * f * this.m_u2.y;
                  g.m_sweep.c.x += g.m_invMass * a;
                  g.m_sweep.c.y += g.m_invMass * o;
                  g.m_sweep.a += g.m_invI * (n * o - r * a);
                  w.m_sweep.c.x += w.m_invMass * l;
                  w.m_sweep.c.y += w.m_invMass * d;
                  w.m_sweep.a += w.m_invI * (i * d - s * l);
                  g.SynchronizeTransform();
                  w.SynchronizeTransform();
                }
                if (this.m_limitState1 == t.e_atUpperLimit) {
                  e = g.m_xf.R;
                  n = this.m_localAnchor1.x - g.m_sweep.localCenter.x;
                  r = this.m_localAnchor1.y - g.m_sweep.localCenter.y;
                  y = e.col1.x * n + e.col2.x * r;
                  r = e.col1.y * n + e.col2.y * r;
                  n = y;
                  a = g.m_sweep.c.x + n;
                  o = g.m_sweep.c.y + r;
                  this.m_u1.Set(a - x, o - b);
                  if ((u = this.m_u1.Length()) > c.b2_linearSlop) {
                    this.m_u1.x *= 1 / u;
                    this.m_u1.y *= 1 / u;
                  } else {
                    this.m_u1.SetZero();
                  }
                  m = this.m_maxLength1 - u;
                  C = h.b2Max(C, -m);
                  m = h.b2Clamp(m + c.b2_linearSlop, -c.b2_maxLinearCorrection, 0);
                  f = -this.m_limitMass1 * m;
                  v = this.m_limitPositionImpulse1;
                  this.m_limitPositionImpulse1 = h.b2Max(0, this.m_limitPositionImpulse1 + f);
                  a = -(f = this.m_limitPositionImpulse1 - v) * this.m_u1.x;
                  o = -f * this.m_u1.y;
                  g.m_sweep.c.x += g.m_invMass * a;
                  g.m_sweep.c.y += g.m_invMass * o;
                  g.m_sweep.a += g.m_invI * (n * o - r * a);
                  g.SynchronizeTransform();
                }
                if (this.m_limitState2 == t.e_atUpperLimit) {
                  e = w.m_xf.R;
                  i = this.m_localAnchor2.x - w.m_sweep.localCenter.x;
                  s = this.m_localAnchor2.y - w.m_sweep.localCenter.y;
                  y = e.col1.x * i + e.col2.x * s;
                  s = e.col1.y * i + e.col2.y * s;
                  i = y;
                  l = w.m_sweep.c.x + i;
                  d = w.m_sweep.c.y + s;
                  this.m_u2.Set(l - T, d - A);
                  if ((p = this.m_u2.Length()) > c.b2_linearSlop) {
                    this.m_u2.x *= 1 / p;
                    this.m_u2.y *= 1 / p;
                  } else {
                    this.m_u2.SetZero();
                  }
                  m = this.m_maxLength2 - p;
                  C = h.b2Max(C, -m);
                  m = h.b2Clamp(m + c.b2_linearSlop, -c.b2_maxLinearCorrection, 0);
                  f = -this.m_limitMass2 * m;
                  v = this.m_limitPositionImpulse2;
                  this.m_limitPositionImpulse2 = h.b2Max(0, this.m_limitPositionImpulse2 + f);
                  l = -(f = this.m_limitPositionImpulse2 - v) * this.m_u2.x;
                  d = -f * this.m_u2.y;
                  w.m_sweep.c.x += w.m_invMass * l;
                  w.m_sweep.c.y += w.m_invMass * d;
                  w.m_sweep.a += w.m_invI * (i * d - s * l);
                  w.SynchronizeTransform();
                }
                return C < c.b2_linearSlop;
              };
              return t;
            }(Ce);
            Se.b2_minPulleyLength = 2;
            var Ee = function (e) {
              function t(t) {
                var n;
                (n = e.call(this, t) || this).m_groundAnchor1 = new l();
                n.m_groundAnchor2 = new l();
                n.m_localAnchor1 = new l();
                n.m_localAnchor2 = new l();
                n.m_J = new be();
                var r;
                var i;
                var s = t.joint1.m_type;
                var a = t.joint2.m_type;
                n.m_revolute1 = null;
                n.m_prismatic1 = null;
                n.m_revolute2 = null;
                n.m_prismatic2 = null;
                n.m_ground1 = t.joint1.m_body1;
                n.m_body1 = t.joint1.m_body2;
                if (s == Ce.e_revoluteJoint) {
                  n.m_revolute1 = t.joint1;
                  n.m_groundAnchor1.SetV(n.m_revolute1.m_localAnchor1);
                  n.m_localAnchor1.SetV(n.m_revolute1.m_localAnchor2);
                  r = n.m_revolute1.GetJointAngle();
                } else {
                  n.m_prismatic1 = t.joint1;
                  n.m_groundAnchor1.SetV(n.m_prismatic1.m_localAnchor1);
                  n.m_localAnchor1.SetV(n.m_prismatic1.m_localAnchor2);
                  r = n.m_prismatic1.GetJointTranslation();
                }
                n.m_ground2 = t.joint2.m_body1;
                n.m_body2 = t.joint2.m_body2;
                if (a == Ce.e_revoluteJoint) {
                  n.m_revolute2 = t.joint2;
                  n.m_groundAnchor2.SetV(n.m_revolute2.m_localAnchor1);
                  n.m_localAnchor2.SetV(n.m_revolute2.m_localAnchor2);
                  i = n.m_revolute2.GetJointAngle();
                } else {
                  n.m_prismatic2 = t.joint2;
                  n.m_groundAnchor2.SetV(n.m_prismatic2.m_localAnchor1);
                  n.m_localAnchor2.SetV(n.m_prismatic2.m_localAnchor2);
                  i = n.m_prismatic2.GetJointTranslation();
                }
                n.m_ratio = t.ratio;
                n.m_constant = r + n.m_ratio * i;
                n.m_force = 0;
                return n;
              }
              Te(t, e);
              var n = t.prototype;
              n.GetInterpolatedAnchor1 = function () {
                return this.m_body1.GetInterpolatedWorldPoint(this.m_localAnchor1);
              };
              n.GetInterpolatedAnchor2 = function () {
                return this.m_body2.GetInterpolatedWorldPoint(this.m_localAnchor2);
              };
              n.GetAnchor1 = function () {
                return this.m_body1.GetWorldPoint(this.m_localAnchor1);
              };
              n.GetAnchor2 = function () {
                return this.m_body2.GetWorldPoint(this.m_localAnchor2);
              };
              n.GetReactionForce = function () {
                return new l(this.m_force * this.m_J.linear2.x, this.m_force * this.m_J.linear2.y);
              };
              n.GetReactionTorque = function () {
                var e = this.m_body2.m_xf.R;
                var t = this.m_localAnchor1.x - this.m_body2.m_sweep.localCenter.x;
                var n = this.m_localAnchor1.y - this.m_body2.m_sweep.localCenter.y;
                var r = e.col1.x * t + e.col2.x * n;
                n = e.col1.y * t + e.col2.y * n;
                t = r;
                return this.m_force * this.m_J.angular2 - (t * (this.m_force * this.m_J.linear2.y) - n * (this.m_force * this.m_J.linear2.x));
              };
              n.GetRatio = function () {
                return this.m_ratio;
              };
              n.InitVelocityConstraints = function (e) {
                var t;
                var n;
                var r;
                var i;
                var s;
                var a;
                var o;
                var h;
                var l = this.m_ground1;
                var d = this.m_ground2;
                var c = this.m_body1;
                var u = this.m_body2;
                var p = 0;
                this.m_J.SetZero();
                if (this.m_revolute1) {
                  this.m_J.angular1 = -1;
                  p += c.m_invI;
                } else {
                  s = l.m_xf.R;
                  a = this.m_prismatic1.m_localXAxis1;
                  t = s.col1.x * a.x + s.col2.x * a.y;
                  n = s.col1.y * a.x + s.col2.y * a.y;
                  s = c.m_xf.R;
                  r = this.m_localAnchor1.x - c.m_sweep.localCenter.x;
                  i = this.m_localAnchor1.y - c.m_sweep.localCenter.y;
                  h = s.col1.x * r + s.col2.x * i;
                  i = s.col1.y * r + s.col2.y * i;
                  o = (r = h) * n - i * t;
                  this.m_J.linear1.Set(-t, -n);
                  this.m_J.angular1 = -o;
                  p += c.m_invMass + c.m_invI * o * o;
                }
                if (this.m_revolute2) {
                  this.m_J.angular2 = -this.m_ratio;
                  p += this.m_ratio * this.m_ratio * u.m_invI;
                } else {
                  s = d.m_xf.R;
                  a = this.m_prismatic2.m_localXAxis1;
                  t = s.col1.x * a.x + s.col2.x * a.y;
                  n = s.col1.y * a.x + s.col2.y * a.y;
                  s = u.m_xf.R;
                  r = this.m_localAnchor2.x - u.m_sweep.localCenter.x;
                  i = this.m_localAnchor2.y - u.m_sweep.localCenter.y;
                  h = s.col1.x * r + s.col2.x * i;
                  i = s.col1.y * r + s.col2.y * i;
                  o = (r = h) * n - i * t;
                  this.m_J.linear2.Set(-this.m_ratio * t, -this.m_ratio * n);
                  this.m_J.angular2 = -this.m_ratio * o;
                  p += this.m_ratio * this.m_ratio * (u.m_invMass + u.m_invI * o * o);
                }
                this.m_mass = 1 / p;
                if (e.warmStarting) {
                  var m = e.dt * this.m_force;
                  c.m_linearVelocity.x += c.m_invMass * m * this.m_J.linear1.x;
                  c.m_linearVelocity.y += c.m_invMass * m * this.m_J.linear1.y;
                  c.m_angularVelocity += c.m_invI * m * this.m_J.angular1;
                  u.m_linearVelocity.x += u.m_invMass * m * this.m_J.linear2.x;
                  u.m_linearVelocity.y += u.m_invMass * m * this.m_J.linear2.y;
                  u.m_angularVelocity += u.m_invI * m * this.m_J.angular2;
                } else {
                  this.m_force = 0;
                }
              };
              n.SolveVelocityConstraints = function (e) {
                var t = this.m_body1;
                var n = this.m_body2;
                var r = this.m_J.Compute(t.m_linearVelocity, t.m_angularVelocity, n.m_linearVelocity, n.m_angularVelocity);
                var i = -e.inv_dt * this.m_mass * r;
                this.m_force += i;
                var s = e.dt * i;
                t.m_linearVelocity.x += t.m_invMass * s * this.m_J.linear1.x;
                t.m_linearVelocity.y += t.m_invMass * s * this.m_J.linear1.y;
                t.m_angularVelocity += t.m_invI * s * this.m_J.angular1;
                n.m_linearVelocity.x += n.m_invMass * s * this.m_J.linear2.x;
                n.m_linearVelocity.y += n.m_invMass * s * this.m_J.linear2.y;
                n.m_angularVelocity += n.m_invI * s * this.m_J.angular2;
              };
              n.SolvePositionConstraints = function () {
                var e;
                var t;
                var n = this.m_body1;
                var r = this.m_body2;
                e = this.m_revolute1 ? this.m_revolute1.GetJointAngle() : this.m_prismatic1.GetJointTranslation();
                t = this.m_revolute2 ? this.m_revolute2.GetJointAngle() : this.m_prismatic2.GetJointTranslation();
                var i = this.m_constant - (e + this.m_ratio * t);
                var s = -this.m_mass * i;
                n.m_sweep.c.x += n.m_invMass * s * this.m_J.linear1.x;
                n.m_sweep.c.y += n.m_invMass * s * this.m_J.linear1.y;
                n.m_sweep.a += n.m_invI * s * this.m_J.angular1;
                r.m_sweep.c.x += r.m_invMass * s * this.m_J.linear2.x;
                r.m_sweep.c.y += r.m_invMass * s * this.m_J.linear2.y;
                r.m_sweep.a += r.m_invI * s * this.m_J.angular2;
                n.SynchronizeTransform();
                r.SynchronizeTransform();
                return c.b2_linearSlop > 0;
              };
              return t;
            }(Ce);
            var Oe = function (e) {
              function t(t) {
                var n;
                (n = e.call(this, t) || this).m_localAnchor1 = new l();
                n.m_localAnchor2 = new l();
                n.m_u = new l();
                n.m_localAnchor1.SetV(t.localAnchor1);
                n.m_localAnchor2.SetV(t.localAnchor2);
                n.m_length = 0;
                n.m_maxLength = t.length;
                n.m_impulse = 0;
                n.m_inv_dt = 0;
                return n;
              }
              Te(t, e);
              var n = t.prototype;
              n.InitVelocityConstraints = function (e) {
                var t;
                var n;
                this.m_inv_dt = e.inv_dt;
                var r = this.m_body1;
                var i = this.m_body2;
                t = r.m_xf.R;
                var s = this.m_localAnchor1.x - r.m_sweep.localCenter.x;
                var a = this.m_localAnchor1.y - r.m_sweep.localCenter.y;
                n = t.col1.x * s + t.col2.x * a;
                a = t.col1.y * s + t.col2.y * a;
                s = n;
                t = i.m_xf.R;
                var o = this.m_localAnchor2.x - i.m_sweep.localCenter.x;
                var h = this.m_localAnchor2.y - i.m_sweep.localCenter.y;
                n = t.col1.x * o + t.col2.x * h;
                h = t.col1.y * o + t.col2.y * h;
                o = n;
                this.m_u.x = i.m_sweep.c.x + o - r.m_sweep.c.x - s;
                this.m_u.y = i.m_sweep.c.y + h - r.m_sweep.c.y - a;
                this.m_length = Math.sqrt(this.m_u.x * this.m_u.x + this.m_u.y * this.m_u.y);
                if (!(this.m_length > c.b2_linearSlop)) {
                  this.m_u.SetZero();
                  this.m_mass = 0;
                  this.m_impulse = 0;
                  return;
                }
                this.m_u.Multiply(1 / this.m_length);
                var l = s * this.m_u.y - a * this.m_u.x;
                var d = o * this.m_u.y - h * this.m_u.x;
                var u = r.m_invMass + r.m_invI * l * l + i.m_invMass + i.m_invI * d * d;
                this.m_mass = 1 / u;
                if (e.warmStarting) {
                  this.m_impulse *= e.dtRatio;
                  var p = this.m_impulse * this.m_u.x;
                  var m = this.m_impulse * this.m_u.y;
                  r.m_linearVelocity.x -= r.m_invMass * p;
                  r.m_linearVelocity.y -= r.m_invMass * m;
                  r.m_angularVelocity -= r.m_invI * (s * m - a * p);
                  i.m_linearVelocity.x += i.m_invMass * p;
                  i.m_linearVelocity.y += i.m_invMass * m;
                  i.m_angularVelocity += i.m_invI * (o * m - h * p);
                } else {
                  this.m_impulse = 0;
                }
              };
              n.SolveVelocityConstraints = function (e) {
                var t;
                var n = this.m_body1;
                var r = this.m_body2;
                t = n.m_xf.R;
                var i = this.m_localAnchor1.x - n.m_sweep.localCenter.x;
                var s = this.m_localAnchor1.y - n.m_sweep.localCenter.y;
                var a = t.col1.x * i + t.col2.x * s;
                s = t.col1.y * i + t.col2.y * s;
                i = a;
                t = r.m_xf.R;
                var o = this.m_localAnchor2.x - r.m_sweep.localCenter.x;
                var h = this.m_localAnchor2.y - r.m_sweep.localCenter.y;
                a = t.col1.x * o + t.col2.x * h;
                h = t.col1.y * o + t.col2.y * h;
                o = a;
                var l = n.m_linearVelocity.x + -n.m_angularVelocity * s;
                var d = n.m_linearVelocity.y + n.m_angularVelocity * i;
                var c = r.m_linearVelocity.x + -r.m_angularVelocity * h;
                var u = r.m_linearVelocity.y + r.m_angularVelocity * o;
                var p = this.m_u.x * (c - l) + this.m_u.y * (u - d);
                var m = this.m_length - this.m_maxLength;
                if (m < 0) {
                  p += e.inv_dt * m;
                }
                var f = -this.m_mass * p;
                var _ = this.m_impulse;
                this.m_impulse = Math.min(0, this.m_impulse + f);
                var v = (f = this.m_impulse - _) * this.m_u.x;
                var y = f * this.m_u.y;
                n.m_linearVelocity.x -= n.m_invMass * v;
                n.m_linearVelocity.y -= n.m_invMass * y;
                n.m_angularVelocity -= n.m_invI * (i * y - s * v);
                r.m_linearVelocity.x += r.m_invMass * v;
                r.m_linearVelocity.y += r.m_invMass * y;
                r.m_angularVelocity += r.m_invI * (o * y - h * v);
              };
              n.SolvePositionConstraints = function () {
                var e;
                var t = this.m_body1;
                var n = this.m_body2;
                e = t.m_xf.R;
                var r = this.m_localAnchor1.x - t.m_sweep.localCenter.x;
                var i = this.m_localAnchor1.y - t.m_sweep.localCenter.y;
                var s = e.col1.x * r + e.col2.x * i;
                i = e.col1.y * r + e.col2.y * i;
                r = s;
                e = n.m_xf.R;
                var a = this.m_localAnchor2.x - n.m_sweep.localCenter.x;
                var o = this.m_localAnchor2.y - n.m_sweep.localCenter.y;
                s = e.col1.x * a + e.col2.x * o;
                o = e.col1.y * a + e.col2.y * o;
                a = s;
                var l = n.m_sweep.c.x + a - t.m_sweep.c.x - r;
                var d = n.m_sweep.c.y + o - t.m_sweep.c.y - i;
                var u = Math.sqrt(l * l + d * d);
                l /= u;
                d /= u;
                var p = u - this.m_maxLength;
                p = h.b2Clamp(p, 0, c.b2_maxLinearCorrection);
                var m = -this.m_mass * p;
                this.m_u.Set(l, d);
                var f = m * this.m_u.x;
                var _ = m * this.m_u.y;
                t.m_sweep.c.x -= t.m_invMass * f;
                t.m_sweep.c.y -= t.m_invMass * _;
                t.m_sweep.a -= t.m_invI * (r * _ - i * f);
                n.m_sweep.c.x += n.m_invMass * f;
                n.m_sweep.c.y += n.m_invMass * _;
                n.m_sweep.a += n.m_invI * (a * _ - o * f);
                t.SynchronizeTransform();
                n.SynchronizeTransform();
                return u - this.m_maxLength < c.b2_linearSlop;
              };
              n.GetInterpolatedAnchor1 = function () {
                return this.m_body1.GetInterpolatedWorldPoint(this.m_localAnchor1);
              };
              n.GetInterpolatedAnchor2 = function () {
                return this.m_body2.GetInterpolatedWorldPoint(this.m_localAnchor2);
              };
              n.GetAnchor1 = function () {
                return this.m_body1.GetWorldPoint(this.m_localAnchor1);
              };
              n.GetAnchor2 = function () {
                return this.m_body2.GetWorldPoint(this.m_localAnchor2);
              };
              n.GetReactionForce = function () {
                var e = new l();
                e.SetV(this.m_u);
                e.Multiply(this.m_inv_dt * this.m_impulse);
                return e;
              };
              n.GetReactionTorque = function () {
                return 0;
              };
              return t;
            }(Ce);
            var ke = function (e) {
              function t(t) {
                var n;
                (n = e.call(this, t) || this).m_localAnchor1 = new l();
                n.m_localAnchor2 = new l();
                n.m_localXAxis1 = new l();
                n.m_localYAxis1 = new l();
                n.m_linearJacobian = new be();
                n.m_motorJacobian = new be();
                n.m_localAnchor1.SetV(t.localAnchor1);
                n.m_localAnchor2.SetV(t.localAnchor2);
                n.m_localXAxis1.SetV(t.localAxis1);
                n.m_localYAxis1.x = -n.m_localXAxis1.y;
                n.m_localYAxis1.y = n.m_localXAxis1.x;
                n.m_refAngle = t.referenceAngle;
                n.m_linearJacobian.SetZero();
                n.m_linearMass = 0;
                n.m_force = 0;
                n.m_angularMass = 0;
                n.m_torque = 0;
                n.m_motorJacobian.SetZero();
                n.m_motorMass = 0;
                n.m_motorForce = 0;
                n.m_limitForce = 0;
                n.m_limitPositionImpulse = 0;
                n.m_lowerTranslation = t.lowerTranslation;
                n.m_upperTranslation = t.upperTranslation;
                n.m_maxMotorForce = t.maxMotorForce;
                n.m_motorSpeed = t.motorSpeed;
                n.m_enableLimit = t.enableLimit;
                n.m_enableMotor = t.enableMotor;
                return n;
              }
              Te(t, e);
              var n = t.prototype;
              n.GetInterpolatedAnchor1 = function () {
                return this.m_body1.GetInterpolatedWorldPoint(this.m_localAnchor1);
              };
              n.GetInterpolatedAnchor2 = function () {
                return this.m_body2.GetInterpolatedWorldPoint(this.m_localAnchor2);
              };
              n.GetAnchor1 = function () {
                return this.m_body1.GetWorldPoint(this.m_localAnchor1);
              };
              n.GetAnchor2 = function () {
                return this.m_body2.GetWorldPoint(this.m_localAnchor2);
              };
              n.GetReactionForce = function () {
                var e = this.m_body1.m_xf.R;
                var t = this.m_limitForce * (e.col1.x * this.m_localXAxis1.x + e.col2.x * this.m_localXAxis1.y);
                var n = this.m_limitForce * (e.col1.y * this.m_localXAxis1.x + e.col2.y * this.m_localXAxis1.y);
                var r = this.m_force * (e.col1.x * this.m_localYAxis1.x + e.col2.x * this.m_localYAxis1.y);
                var i = this.m_force * (e.col1.y * this.m_localYAxis1.x + e.col2.y * this.m_localYAxis1.y);
                return new l(this.m_limitForce * t + this.m_force * r, this.m_limitForce * n + this.m_force * i);
              };
              n.GetReactionTorque = function () {
                return this.m_torque;
              };
              n.GetJointTranslation = function () {
                var e = this.m_body1;
                var t = this.m_body2;
                var n = e.GetWorldPoint(this.m_localAnchor1);
                var r = t.GetWorldPoint(this.m_localAnchor2);
                var i = r.x - n.x;
                var s = r.y - n.y;
                var a = e.GetWorldVector(this.m_localXAxis1);
                return a.x * i + a.y * s;
              };
              n.GetJointSpeed = function () {
                var e;
                var t = this.m_body1;
                var n = this.m_body2;
                e = t.m_xf.R;
                var r = this.m_localAnchor1.x - t.m_sweep.localCenter.x;
                var i = this.m_localAnchor1.y - t.m_sweep.localCenter.y;
                var s = e.col1.x * r + e.col2.x * i;
                i = e.col1.y * r + e.col2.y * i;
                r = s;
                e = n.m_xf.R;
                var a = this.m_localAnchor2.x - n.m_sweep.localCenter.x;
                var o = this.m_localAnchor2.y - n.m_sweep.localCenter.y;
                s = e.col1.x * a + e.col2.x * o;
                o = e.col1.y * a + e.col2.y * o;
                a = s;
                var h = t.m_sweep.c.x + r;
                var l = t.m_sweep.c.y + i;
                var d = n.m_sweep.c.x + a - h;
                var c = n.m_sweep.c.y + o - l;
                var u = t.GetWorldVector(this.m_localXAxis1);
                var p = t.m_linearVelocity;
                var m = n.m_linearVelocity;
                var f = t.m_angularVelocity;
                var _ = n.m_angularVelocity;
                return d * (-f * u.y) + c * (f * u.x) + (u.x * (m.x + -_ * o - p.x - -f * i) + u.y * (m.y + _ * a - p.y - f * r));
              };
              n.IsLimitEnabled = function () {
                return this.m_enableLimit;
              };
              n.EnableLimit = function (e) {
                this.m_enableLimit = e;
              };
              n.GetLowerLimit = function () {
                return this.m_lowerTranslation;
              };
              n.GetUpperLimit = function () {
                return this.m_upperTranslation;
              };
              n.SetLimits = function (e, t) {
                this.m_lowerTranslation = e;
                this.m_upperTranslation = t;
              };
              n.IsMotorEnabled = function () {
                return this.m_enableMotor;
              };
              n.EnableMotor = function (e) {
                this.m_enableMotor = e;
              };
              n.SetMotorSpeed = function (e) {
                this.m_motorSpeed = e;
              };
              n.GetMotorSpeed = function () {
                return this.m_motorSpeed;
              };
              n.SetMaxMotorForce = function (e) {
                this.m_maxMotorForce = e;
              };
              n.GetMotorForce = function () {
                return this.m_motorForce;
              };
              n.InitVelocityConstraints = function (e) {
                var n;
                var r;
                var i = this.m_body1;
                var s = this.m_body2;
                n = i.m_xf.R;
                var a = this.m_localAnchor1.x - i.m_sweep.localCenter.x;
                var o = this.m_localAnchor1.y - i.m_sweep.localCenter.y;
                r = n.col1.x * a + n.col2.x * o;
                o = n.col1.y * a + n.col2.y * o;
                a = r;
                n = s.m_xf.R;
                var l = this.m_localAnchor2.x - s.m_sweep.localCenter.x;
                var d = this.m_localAnchor2.y - s.m_sweep.localCenter.y;
                r = n.col1.x * l + n.col2.x * d;
                d = n.col1.y * l + n.col2.y * d;
                l = r;
                var u = i.m_invMass;
                var p = s.m_invMass;
                var m = i.m_invI;
                var f = s.m_invI;
                var _ = (n = i.m_xf.R).col1.x * this.m_localYAxis1.x + n.col2.x * this.m_localYAxis1.y;
                var v = n.col1.y * this.m_localYAxis1.x + n.col2.y * this.m_localYAxis1.y;
                var y = s.m_sweep.c.x + l - i.m_sweep.c.x;
                var g = s.m_sweep.c.y + d - i.m_sweep.c.y;
                this.m_linearJacobian.linear1.x = -_;
                this.m_linearJacobian.linear1.y = -v;
                this.m_linearJacobian.linear2.x = _;
                this.m_linearJacobian.linear2.y = v;
                this.m_linearJacobian.angular1 = -(y * v - g * _);
                this.m_linearJacobian.angular2 = l * v - d * _;
                this.m_linearMass = u + m * this.m_linearJacobian.angular1 * this.m_linearJacobian.angular1 + p + f * this.m_linearJacobian.angular2 * this.m_linearJacobian.angular2;
                this.m_linearMass = 1 / this.m_linearMass;
                this.m_angularMass = m + f;
                if (this.m_angularMass > Number.MIN_VALUE) {
                  this.m_angularMass = 1 / this.m_angularMass;
                }
                if (this.m_enableLimit || this.m_enableMotor) {
                  var w = (n = i.m_xf.R).col1.x * this.m_localXAxis1.x + n.col2.x * this.m_localXAxis1.y;
                  var x = n.col1.y * this.m_localXAxis1.x + n.col2.y * this.m_localXAxis1.y;
                  this.m_motorJacobian.linear1.x = -w;
                  this.m_motorJacobian.linear1.y = -x;
                  this.m_motorJacobian.linear2.x = w;
                  this.m_motorJacobian.linear2.y = x;
                  this.m_motorJacobian.angular1 = -(y * x - g * w);
                  this.m_motorJacobian.angular2 = l * x - d * w;
                  this.m_motorMass = u + m * this.m_motorJacobian.angular1 * this.m_motorJacobian.angular1 + p + f * this.m_motorJacobian.angular2 * this.m_motorJacobian.angular2;
                  this.m_motorMass = 1 / this.m_motorMass;
                  if (this.m_enableLimit) {
                    var b = w * (y - a) + x * (g - o);
                    if (h.b2Abs(this.m_upperTranslation - this.m_lowerTranslation) < c.b2_linearSlop * 2) {
                      this.m_limitState = t.e_equalLimits;
                    } else if (b <= this.m_lowerTranslation) {
                      if (this.m_limitState != t.e_atLowerLimit) {
                        this.m_limitForce = 0;
                      }
                      this.m_limitState = t.e_atLowerLimit;
                    } else if (b >= this.m_upperTranslation) {
                      if (this.m_limitState != t.e_atUpperLimit) {
                        this.m_limitForce = 0;
                      }
                      this.m_limitState = t.e_atUpperLimit;
                    } else {
                      this.m_limitState = t.e_inactiveLimit;
                      this.m_limitForce = 0;
                    }
                  }
                }
                if (this.m_enableMotor == 0) {
                  this.m_motorForce = 0;
                }
                if (this.m_enableLimit == 0) {
                  this.m_limitForce = 0;
                }
                if (e.warmStarting) {
                  var T = e.dt * (this.m_force * this.m_linearJacobian.linear1.x + (this.m_motorForce + this.m_limitForce) * this.m_motorJacobian.linear1.x);
                  var A = e.dt * (this.m_force * this.m_linearJacobian.linear1.y + (this.m_motorForce + this.m_limitForce) * this.m_motorJacobian.linear1.y);
                  var C = e.dt * (this.m_force * this.m_linearJacobian.linear2.x + (this.m_motorForce + this.m_limitForce) * this.m_motorJacobian.linear2.x);
                  var S = e.dt * (this.m_force * this.m_linearJacobian.linear2.y + (this.m_motorForce + this.m_limitForce) * this.m_motorJacobian.linear2.y);
                  var E = e.dt * (this.m_force * this.m_linearJacobian.angular1 - this.m_torque + (this.m_motorForce + this.m_limitForce) * this.m_motorJacobian.angular1);
                  var O = e.dt * (this.m_force * this.m_linearJacobian.angular2 + this.m_torque + (this.m_motorForce + this.m_limitForce) * this.m_motorJacobian.angular2);
                  i.m_linearVelocity.x += u * T;
                  i.m_linearVelocity.y += u * A;
                  i.m_angularVelocity += m * E;
                  s.m_linearVelocity.x += p * C;
                  s.m_linearVelocity.y += p * S;
                  s.m_angularVelocity += f * O;
                } else {
                  this.m_force = 0;
                  this.m_torque = 0;
                  this.m_limitForce = 0;
                  this.m_motorForce = 0;
                }
                this.m_limitPositionImpulse = 0;
              };
              n.SolveVelocityConstraints = function (e) {
                var n;
                var r = this.m_body1;
                var i = this.m_body2;
                var s = r.m_invMass;
                var a = i.m_invMass;
                var o = r.m_invI;
                var l = i.m_invI;
                var d = this.m_linearJacobian.Compute(r.m_linearVelocity, r.m_angularVelocity, i.m_linearVelocity, i.m_angularVelocity);
                var c = -e.inv_dt * this.m_linearMass * d;
                this.m_force += c;
                var u = e.dt * c;
                r.m_linearVelocity.x += s * u * this.m_linearJacobian.linear1.x;
                r.m_linearVelocity.y += s * u * this.m_linearJacobian.linear1.y;
                r.m_angularVelocity += o * u * this.m_linearJacobian.angular1;
                i.m_linearVelocity.x += a * u * this.m_linearJacobian.linear2.x;
                i.m_linearVelocity.y += a * u * this.m_linearJacobian.linear2.y;
                i.m_angularVelocity += l * u * this.m_linearJacobian.angular2;
                var p = i.m_angularVelocity - r.m_angularVelocity;
                var m = -e.inv_dt * this.m_angularMass * p;
                this.m_torque += m;
                var f = e.dt * m;
                r.m_angularVelocity -= o * f;
                i.m_angularVelocity += l * f;
                if (this.m_enableMotor && this.m_limitState != t.e_equalLimits) {
                  var _ = this.m_motorJacobian.Compute(r.m_linearVelocity, r.m_angularVelocity, i.m_linearVelocity, i.m_angularVelocity) - this.m_motorSpeed;
                  var v = -e.inv_dt * this.m_motorMass * _;
                  var y = this.m_motorForce;
                  this.m_motorForce = h.b2Clamp(this.m_motorForce + v, -this.m_maxMotorForce, this.m_maxMotorForce);
                  v = this.m_motorForce - y;
                  u = e.dt * v;
                  r.m_linearVelocity.x += s * u * this.m_motorJacobian.linear1.x;
                  r.m_linearVelocity.y += s * u * this.m_motorJacobian.linear1.y;
                  r.m_angularVelocity += o * u * this.m_motorJacobian.angular1;
                  i.m_linearVelocity.x += a * u * this.m_motorJacobian.linear2.x;
                  i.m_linearVelocity.y += a * u * this.m_motorJacobian.linear2.y;
                  i.m_angularVelocity += l * u * this.m_motorJacobian.angular2;
                }
                if (this.m_enableLimit && this.m_limitState != t.e_inactiveLimit) {
                  var g = this.m_motorJacobian.Compute(r.m_linearVelocity, r.m_angularVelocity, i.m_linearVelocity, i.m_angularVelocity);
                  var w = -e.inv_dt * this.m_motorMass * g;
                  if (this.m_limitState == t.e_equalLimits) {
                    this.m_limitForce += w;
                  } else if (this.m_limitState == t.e_atLowerLimit) {
                    n = this.m_limitForce;
                    this.m_limitForce = h.b2Max(this.m_limitForce + w, 0);
                    w = this.m_limitForce - n;
                  } else if (this.m_limitState == t.e_atUpperLimit) {
                    n = this.m_limitForce;
                    this.m_limitForce = h.b2Min(this.m_limitForce + w, 0);
                    w = this.m_limitForce - n;
                  }
                  u = e.dt * w;
                  r.m_linearVelocity.x += s * u * this.m_motorJacobian.linear1.x;
                  r.m_linearVelocity.y += s * u * this.m_motorJacobian.linear1.y;
                  r.m_angularVelocity += o * u * this.m_motorJacobian.angular1;
                  i.m_linearVelocity.x += a * u * this.m_motorJacobian.linear2.x;
                  i.m_linearVelocity.y += a * u * this.m_motorJacobian.linear2.y;
                  i.m_angularVelocity += l * u * this.m_motorJacobian.angular2;
                }
              };
              n.SolvePositionConstraints = function () {
                var e;
                var n;
                var r;
                var i;
                var s = this.m_body1;
                var a = this.m_body2;
                var o = s.m_invMass;
                var l = a.m_invMass;
                var d = s.m_invI;
                var u = a.m_invI;
                r = s.m_xf.R;
                var p = this.m_localAnchor1.x - s.m_sweep.localCenter.x;
                var m = this.m_localAnchor1.y - s.m_sweep.localCenter.y;
                i = r.col1.x * p + r.col2.x * m;
                m = r.col1.y * p + r.col2.y * m;
                p = i;
                r = a.m_xf.R;
                var f = this.m_localAnchor2.x - a.m_sweep.localCenter.x;
                var _ = this.m_localAnchor2.y - a.m_sweep.localCenter.y;
                i = r.col1.x * f + r.col2.x * _;
                _ = r.col1.y * f + r.col2.y * _;
                f = i;
                var v = s.m_sweep.c.x + p;
                var y = s.m_sweep.c.y + m;
                var g = a.m_sweep.c.x + f;
                var w = a.m_sweep.c.y + _;
                var x = g - v;
                var b = w - y;
                var T = ((r = s.m_xf.R).col1.x * this.m_localYAxis1.x + r.col2.x * this.m_localYAxis1.y) * x + (r.col1.y * this.m_localYAxis1.x + r.col2.y * this.m_localYAxis1.y) * b;
                T = h.b2Clamp(T, -c.b2_maxLinearCorrection, c.b2_maxLinearCorrection);
                var A = -this.m_linearMass * T;
                s.m_sweep.c.x += o * A * this.m_linearJacobian.linear1.x;
                s.m_sweep.c.y += o * A * this.m_linearJacobian.linear1.y;
                s.m_sweep.a += d * A * this.m_linearJacobian.angular1;
                a.m_sweep.c.x += l * A * this.m_linearJacobian.linear2.x;
                a.m_sweep.c.y += l * A * this.m_linearJacobian.linear2.y;
                a.m_sweep.a += u * A * this.m_linearJacobian.angular2;
                var C = h.b2Abs(T);
                var S = a.m_sweep.a - s.m_sweep.a - this.m_refAngle;
                S = h.b2Clamp(S, -c.b2_maxAngularCorrection, c.b2_maxAngularCorrection);
                var E = -this.m_angularMass * S;
                s.m_sweep.a -= s.m_invI * E;
                a.m_sweep.a += a.m_invI * E;
                s.SynchronizeTransform();
                a.SynchronizeTransform();
                var O = h.b2Abs(S);
                if (this.m_enableLimit && this.m_limitState != t.e_inactiveLimit) {
                  r = s.m_xf.R;
                  p = this.m_localAnchor1.x - s.m_sweep.localCenter.x;
                  m = this.m_localAnchor1.y - s.m_sweep.localCenter.y;
                  i = r.col1.x * p + r.col2.x * m;
                  m = r.col1.y * p + r.col2.y * m;
                  p = i;
                  r = a.m_xf.R;
                  f = this.m_localAnchor2.x - a.m_sweep.localCenter.x;
                  _ = this.m_localAnchor2.y - a.m_sweep.localCenter.y;
                  i = r.col1.x * f + r.col2.x * _;
                  _ = r.col1.y * f + r.col2.y * _;
                  f = i;
                  v = s.m_sweep.c.x + p;
                  y = s.m_sweep.c.y + m;
                  x = (g = a.m_sweep.c.x + f) - v;
                  b = (w = a.m_sweep.c.y + _) - y;
                  var k = ((r = s.m_xf.R).col1.x * this.m_localXAxis1.x + r.col2.x * this.m_localXAxis1.y) * x + (r.col1.y * this.m_localXAxis1.x + r.col2.y * this.m_localXAxis1.y) * b;
                  var P = 0;
                  if (this.m_limitState == t.e_equalLimits) {
                    e = h.b2Clamp(k, -c.b2_maxLinearCorrection, c.b2_maxLinearCorrection);
                    P = -this.m_motorMass * e;
                    C = h.b2Max(C, h.b2Abs(S));
                  } else if (this.m_limitState == t.e_atLowerLimit) {
                    e = k - this.m_lowerTranslation;
                    C = h.b2Max(C, -e);
                    e = h.b2Clamp(e + c.b2_linearSlop, -c.b2_maxLinearCorrection, 0);
                    P = -this.m_motorMass * e;
                    n = this.m_limitPositionImpulse;
                    this.m_limitPositionImpulse = h.b2Max(this.m_limitPositionImpulse + P, 0);
                    P = this.m_limitPositionImpulse - n;
                  } else if (this.m_limitState == t.e_atUpperLimit) {
                    e = k - this.m_upperTranslation;
                    C = h.b2Max(C, e);
                    e = h.b2Clamp(e - c.b2_linearSlop, 0, c.b2_maxLinearCorrection);
                    P = -this.m_motorMass * e;
                    n = this.m_limitPositionImpulse;
                    this.m_limitPositionImpulse = h.b2Min(this.m_limitPositionImpulse + P, 0);
                    P = this.m_limitPositionImpulse - n;
                  }
                  s.m_sweep.c.x += o * P * this.m_motorJacobian.linear1.x;
                  s.m_sweep.c.y += o * P * this.m_motorJacobian.linear1.y;
                  s.m_sweep.a += d * P * this.m_motorJacobian.angular1;
                  a.m_sweep.c.x += l * P * this.m_motorJacobian.linear2.x;
                  a.m_sweep.c.y += l * P * this.m_motorJacobian.linear2.y;
                  a.m_sweep.a += u * P * this.m_motorJacobian.angular2;
                  s.SynchronizeTransform();
                  a.SynchronizeTransform();
                }
                return C <= c.b2_linearSlop && O <= c.b2_angularSlop;
              };
              return t;
            }(Ce);
            var Pe = function (e) {
              function t(t) {
                var n;
                (n = e.call(this, t) || this).m_localAnchor1 = new l();
                n.m_localAnchor2 = new l();
                n.m_pivotForce = new l();
                n.m_pivotMass = new i();
                n.K = new i();
                n.K1 = new i();
                n.K2 = new i();
                n.K3 = new i();
                n.m_localAnchor1.SetV(t.localAnchor1);
                n.m_localAnchor2.SetV(t.localAnchor2);
                n.m_referenceAngle = t.referenceAngle;
                n.m_pivotForce.Set(0, 0);
                n.m_motorForce = 0;
                n.m_limitForce = 0;
                n.m_limitPositionImpulse = 0;
                n.m_lowerAngle = t.lowerAngle;
                n.m_upperAngle = t.upperAngle;
                n.m_maxMotorTorque = t.maxMotorTorque;
                n.m_motorSpeed = t.motorSpeed;
                n.m_enableLimit = t.enableLimit;
                n.m_enableMotor = t.enableMotor;
                return n;
              }
              Te(t, e);
              var n = t.prototype;
              n.GetInterpolatedAnchor1 = function () {
                return this.m_body1.GetInterpolatedWorldPoint(this.m_localAnchor1);
              };
              n.GetInterpolatedAnchor2 = function () {
                return this.m_body2.GetInterpolatedWorldPoint(this.m_localAnchor2);
              };
              n.GetAnchor1 = function () {
                return this.m_body1.GetWorldPoint(this.m_localAnchor1);
              };
              n.GetAnchor2 = function () {
                return this.m_body2.GetWorldPoint(this.m_localAnchor2);
              };
              n.GetReactionForce = function () {
                return this.m_pivotForce;
              };
              n.GetReactionTorque = function () {
                return this.m_limitForce;
              };
              n.GetJointAngle = function () {
                return this.m_body2.m_sweep.a - this.m_body1.m_sweep.a - this.m_referenceAngle;
              };
              n.GetJointSpeed = function () {
                return this.m_body2.m_angularVelocity - this.m_body1.m_angularVelocity;
              };
              n.IsLimitEnabled = function () {
                return this.m_enableLimit;
              };
              n.EnableLimit = function (e) {
                this.m_enableLimit = e;
              };
              n.GetLowerLimit = function () {
                return this.m_lowerAngle;
              };
              n.GetUpperLimit = function () {
                return this.m_upperAngle;
              };
              n.SetLimits = function (e, t) {
                this.m_lowerAngle = e;
                this.m_upperAngle = t;
              };
              n.IsMotorEnabled = function () {
                return this.m_enableMotor;
              };
              n.EnableMotor = function (e) {
                this.m_enableMotor = e;
              };
              n.SetMotorSpeed = function (e) {
                this.m_motorSpeed = e;
              };
              n.GetMotorSpeed = function () {
                return this.m_motorSpeed;
              };
              n.SetMaxMotorTorque = function (e) {
                this.m_maxMotorTorque = e;
              };
              n.GetMotorTorque = function () {
                return this.m_motorForce;
              };
              n.InitVelocityConstraints = function (e) {
                var n;
                var r;
                var i = this.m_body1;
                var s = this.m_body2;
                n = i.m_xf.R;
                var a = this.m_localAnchor1.x - i.m_sweep.localCenter.x;
                var o = this.m_localAnchor1.y - i.m_sweep.localCenter.y;
                r = n.col1.x * a + n.col2.x * o;
                o = n.col1.y * a + n.col2.y * o;
                a = r;
                n = s.m_xf.R;
                var l = this.m_localAnchor2.x - s.m_sweep.localCenter.x;
                var d = this.m_localAnchor2.y - s.m_sweep.localCenter.y;
                r = n.col1.x * l + n.col2.x * d;
                d = n.col1.y * l + n.col2.y * d;
                l = r;
                var u = i.m_invMass;
                var p = s.m_invMass;
                var m = i.m_invI;
                var f = s.m_invI;
                this.K1.col1.x = u + p;
                this.K1.col2.x = 0;
                this.K1.col1.y = 0;
                this.K1.col2.y = u + p;
                this.K2.col1.x = m * o * o;
                this.K2.col2.x = -m * a * o;
                this.K2.col1.y = -m * a * o;
                this.K2.col2.y = m * a * a;
                this.K3.col1.x = f * d * d;
                this.K3.col2.x = -f * l * d;
                this.K3.col1.y = -f * l * d;
                this.K3.col2.y = f * l * l;
                this.K.SetM(this.K1);
                this.K.AddM(this.K2);
                this.K.AddM(this.K3);
                this.K.Invert(this.m_pivotMass);
                this.m_motorMass = 1 / (m + f);
                if (this.m_enableMotor == 0) {
                  this.m_motorForce = 0;
                }
                if (this.m_enableLimit) {
                  var _ = s.m_sweep.a - i.m_sweep.a - this.m_referenceAngle;
                  if (h.b2Abs(this.m_upperAngle - this.m_lowerAngle) < c.b2_angularSlop * 2) {
                    this.m_limitState = t.e_equalLimits;
                  } else if (_ <= this.m_lowerAngle) {
                    if (this.m_limitState != t.e_atLowerLimit) {
                      this.m_limitForce = 0;
                    }
                    this.m_limitState = t.e_atLowerLimit;
                  } else if (_ >= this.m_upperAngle) {
                    if (this.m_limitState != t.e_atUpperLimit) {
                      this.m_limitForce = 0;
                    }
                    this.m_limitState = t.e_atUpperLimit;
                  } else {
                    this.m_limitState = t.e_inactiveLimit;
                    this.m_limitForce = 0;
                  }
                } else {
                  this.m_limitForce = 0;
                }
                if (e.warmStarting) {
                  i.m_linearVelocity.x -= e.dt * u * this.m_pivotForce.x;
                  i.m_linearVelocity.y -= e.dt * u * this.m_pivotForce.y;
                  i.m_angularVelocity -= e.dt * m * (a * this.m_pivotForce.y - o * this.m_pivotForce.x + this.m_motorForce + this.m_limitForce);
                  s.m_linearVelocity.x += e.dt * p * this.m_pivotForce.x;
                  s.m_linearVelocity.y += e.dt * p * this.m_pivotForce.y;
                  s.m_angularVelocity += e.dt * f * (l * this.m_pivotForce.y - d * this.m_pivotForce.x + this.m_motorForce + this.m_limitForce);
                } else {
                  this.m_pivotForce.SetZero();
                  this.m_motorForce = 0;
                  this.m_limitForce = 0;
                }
                this.m_limitPositionImpulse = 0;
              };
              n.SolveVelocityConstraints = function (e) {
                var n;
                var r;
                var i = this.m_body1;
                var s = this.m_body2;
                n = i.m_xf.R;
                var a = this.m_localAnchor1.x - i.m_sweep.localCenter.x;
                var o = this.m_localAnchor1.y - i.m_sweep.localCenter.y;
                r = n.col1.x * a + n.col2.x * o;
                o = n.col1.y * a + n.col2.y * o;
                a = r;
                n = s.m_xf.R;
                var l;
                var d = this.m_localAnchor2.x - s.m_sweep.localCenter.x;
                var c = this.m_localAnchor2.y - s.m_sweep.localCenter.y;
                r = n.col1.x * d + n.col2.x * c;
                c = n.col1.y * d + n.col2.y * c;
                d = r;
                var u = s.m_linearVelocity.x + -s.m_angularVelocity * c - i.m_linearVelocity.x - -i.m_angularVelocity * o;
                var p = s.m_linearVelocity.y + s.m_angularVelocity * d - i.m_linearVelocity.y - i.m_angularVelocity * a;
                var m = -e.inv_dt * (this.m_pivotMass.col1.x * u + this.m_pivotMass.col2.x * p);
                var f = -e.inv_dt * (this.m_pivotMass.col1.y * u + this.m_pivotMass.col2.y * p);
                this.m_pivotForce.x += m;
                this.m_pivotForce.y += f;
                var _ = e.dt * m;
                var v = e.dt * f;
                i.m_linearVelocity.x -= i.m_invMass * _;
                i.m_linearVelocity.y -= i.m_invMass * v;
                i.m_angularVelocity -= i.m_invI * (a * v - o * _);
                s.m_linearVelocity.x += s.m_invMass * _;
                s.m_linearVelocity.y += s.m_invMass * v;
                s.m_angularVelocity += s.m_invI * (d * v - c * _);
                if (this.m_enableMotor && this.m_limitState != t.e_equalLimits) {
                  var y = s.m_angularVelocity - i.m_angularVelocity - this.m_motorSpeed;
                  var g = -e.inv_dt * this.m_motorMass * y;
                  var w = this.m_motorForce;
                  this.m_motorForce = h.b2Clamp(this.m_motorForce + g, -this.m_maxMotorTorque, this.m_maxMotorTorque);
                  g = this.m_motorForce - w;
                  i.m_angularVelocity -= i.m_invI * e.dt * g;
                  s.m_angularVelocity += s.m_invI * e.dt * g;
                }
                if (this.m_enableLimit && this.m_limitState != t.e_inactiveLimit) {
                  var x = s.m_angularVelocity - i.m_angularVelocity;
                  var b = -e.inv_dt * this.m_motorMass * x;
                  if (this.m_limitState == t.e_equalLimits) {
                    this.m_limitForce += b;
                  } else if (this.m_limitState == t.e_atLowerLimit) {
                    l = this.m_limitForce;
                    this.m_limitForce = h.b2Max(this.m_limitForce + b, 0);
                    b = this.m_limitForce - l;
                  } else if (this.m_limitState == t.e_atUpperLimit) {
                    l = this.m_limitForce;
                    this.m_limitForce = h.b2Min(this.m_limitForce + b, 0);
                    b = this.m_limitForce - l;
                  }
                  i.m_angularVelocity -= i.m_invI * e.dt * b;
                  s.m_angularVelocity += s.m_invI * e.dt * b;
                }
              };
              n.SolvePositionConstraints = function () {
                var e;
                var n;
                var r;
                var i;
                var s = this.m_body1;
                var a = this.m_body2;
                i = s.m_xf.R;
                var o = this.m_localAnchor1.x - s.m_sweep.localCenter.x;
                var l = this.m_localAnchor1.y - s.m_sweep.localCenter.y;
                var d = i.col1.x * o + i.col2.x * l;
                l = i.col1.y * o + i.col2.y * l;
                o = d;
                i = a.m_xf.R;
                var u = this.m_localAnchor2.x - a.m_sweep.localCenter.x;
                var p = this.m_localAnchor2.y - a.m_sweep.localCenter.y;
                d = i.col1.x * u + i.col2.x * p;
                p = i.col1.y * u + i.col2.y * p;
                u = d;
                var m = s.m_sweep.c.x + o;
                var f = s.m_sweep.c.y + l;
                var _ = a.m_sweep.c.x + u - m;
                var v = a.m_sweep.c.y + p - f;
                r = Math.sqrt(_ * _ + v * v);
                var y = s.m_invMass;
                var g = a.m_invMass;
                var w = s.m_invI;
                var x = a.m_invI;
                this.K1.col1.x = y + g;
                this.K1.col2.x = 0;
                this.K1.col1.y = 0;
                this.K1.col2.y = y + g;
                this.K2.col1.x = w * l * l;
                this.K2.col2.x = -w * o * l;
                this.K2.col1.y = -w * o * l;
                this.K2.col2.y = w * o * o;
                this.K3.col1.x = x * p * p;
                this.K3.col2.x = -x * u * p;
                this.K3.col1.y = -x * u * p;
                this.K3.col2.y = x * u * u;
                this.K.SetM(this.K1);
                this.K.AddM(this.K2);
                this.K.AddM(this.K3);
                this.K.Solve(t.tImpulse, -_, -v);
                var b = t.tImpulse.x;
                var T = t.tImpulse.y;
                s.m_sweep.c.x -= s.m_invMass * b;
                s.m_sweep.c.y -= s.m_invMass * T;
                s.m_sweep.a -= s.m_invI * (o * T - l * b);
                a.m_sweep.c.x += a.m_invMass * b;
                a.m_sweep.c.y += a.m_invMass * T;
                a.m_sweep.a += a.m_invI * (u * T - p * b);
                s.SynchronizeTransform();
                a.SynchronizeTransform();
                var A = 0;
                if (this.m_enableLimit && this.m_limitState != t.e_inactiveLimit) {
                  var C = a.m_sweep.a - s.m_sweep.a - this.m_referenceAngle;
                  var S = 0;
                  if (this.m_limitState == t.e_equalLimits) {
                    n = h.b2Clamp(C, -c.b2_maxAngularCorrection, c.b2_maxAngularCorrection);
                    S = -this.m_motorMass * n;
                    A = h.b2Abs(n);
                  } else if (this.m_limitState == t.e_atLowerLimit) {
                    n = C - this.m_lowerAngle;
                    A = h.b2Max(0, -n);
                    n = h.b2Clamp(n + c.b2_angularSlop, -c.b2_maxAngularCorrection, 0);
                    S = -this.m_motorMass * n;
                    e = this.m_limitPositionImpulse;
                    this.m_limitPositionImpulse = h.b2Max(this.m_limitPositionImpulse + S, 0);
                    S = this.m_limitPositionImpulse - e;
                  } else if (this.m_limitState == t.e_atUpperLimit) {
                    n = C - this.m_upperAngle;
                    A = h.b2Max(0, n);
                    n = h.b2Clamp(n - c.b2_angularSlop, 0, c.b2_maxAngularCorrection);
                    S = -this.m_motorMass * n;
                    e = this.m_limitPositionImpulse;
                    this.m_limitPositionImpulse = h.b2Min(this.m_limitPositionImpulse + S, 0);
                    S = this.m_limitPositionImpulse - e;
                  }
                  s.m_sweep.a -= s.m_invI * S;
                  a.m_sweep.a += a.m_invI * S;
                  s.SynchronizeTransform();
                  a.SynchronizeTransform();
                }
                return r <= c.b2_linearSlop && A <= c.b2_angularSlop;
              };
              return t;
            }(Ce);
            Pe.tImpulse = new l();
            var Me = function (e) {
              function t(t) {
                var n;
                (n = e.call(this, t) || this).m_localAnchor = new l();
                n.m_target = new l();
                n.m_impulse = new l();
                n.m_mass = new i();
                n.m_C = new l();
                n.K = new i();
                n.K1 = new i();
                n.K2 = new i();
                n.m_target.SetV(t.target);
                var r = n.m_target.x - n.m_body2.m_xf.position.x;
                var s = n.m_target.y - n.m_body2.m_xf.position.y;
                var a = n.m_body2.m_xf.R;
                n.m_localAnchor.x = r * a.col1.x + s * a.col1.y;
                n.m_localAnchor.y = r * a.col2.x + s * a.col2.y;
                n.m_maxForce = t.maxForce;
                n.m_impulse.SetZero();
                var o = n.m_body2.m_mass;
                var h = c.b2_pi * 2 * t.frequencyHz;
                var d = o * 2 * t.dampingRatio * h;
                var u = t.timeStep * o * (h * h);
                n.m_gamma = 1 / (d + u);
                n.m_beta = u / (d + u);
                return n;
              }
              Te(t, e);
              var n = t.prototype;
              n.GetInterpolatedAnchor1 = function () {
                return this.m_target;
              };
              n.GetInterpolatedAnchor2 = function () {
                return this.m_body2.GetInterpolatedWorldPoint(this.m_localAnchor);
              };
              n.GetAnchor1 = function () {
                return this.m_target;
              };
              n.GetAnchor2 = function () {
                return this.m_body2.GetWorldPoint(this.m_localAnchor);
              };
              n.GetReactionForce = function () {
                return this.m_impulse;
              };
              n.GetReactionTorque = function () {
                return 0;
              };
              n.SetTarget = function (e) {
                if (this.m_body2.IsSleeping()) {
                  this.m_body2.WakeUp();
                }
                this.m_target = e;
              };
              n.InitVelocityConstraints = function (e) {
                var t = this.m_body2;
                var n = t.m_xf.R;
                var r = this.m_localAnchor.x - t.m_sweep.localCenter.x;
                var i = this.m_localAnchor.y - t.m_sweep.localCenter.y;
                var s = n.col1.x * r + n.col2.x * i;
                i = n.col1.y * r + n.col2.y * i;
                r = s;
                var a = t.m_invMass;
                var o = t.m_invI;
                this.K1.col1.x = a;
                this.K1.col2.x = 0;
                this.K1.col1.y = 0;
                this.K1.col2.y = a;
                this.K2.col1.x = o * i * i;
                this.K2.col2.x = -o * r * i;
                this.K2.col1.y = -o * r * i;
                this.K2.col2.y = o * r * r;
                this.K.SetM(this.K1);
                this.K.AddM(this.K2);
                this.K.col1.x += this.m_gamma;
                this.K.col2.y += this.m_gamma;
                this.K.Invert(this.m_mass);
                this.m_C.x = t.m_sweep.c.x + r - this.m_target.x;
                this.m_C.y = t.m_sweep.c.y + i - this.m_target.y;
                t.m_angularVelocity *= 0.98;
                var h = e.dt * this.m_impulse.x;
                var l = e.dt * this.m_impulse.y;
                t.m_linearVelocity.x += a * h;
                t.m_linearVelocity.y += a * l;
                t.m_angularVelocity += o * (r * l - i * h);
              };
              n.SolveVelocityConstraints = function (e) {
                var t;
                var n;
                var r = this.m_body2;
                t = r.m_xf.R;
                var i = this.m_localAnchor.x - r.m_sweep.localCenter.x;
                var s = this.m_localAnchor.y - r.m_sweep.localCenter.y;
                n = t.col1.x * i + t.col2.x * s;
                s = t.col1.y * i + t.col2.y * s;
                i = n;
                var a = r.m_linearVelocity.x + -r.m_angularVelocity * s;
                var o = r.m_linearVelocity.y + r.m_angularVelocity * i;
                t = this.m_mass;
                n = a + this.m_beta * e.inv_dt * this.m_C.x + this.m_gamma * e.dt * this.m_impulse.x;
                var h = o + this.m_beta * e.inv_dt * this.m_C.y + this.m_gamma * e.dt * this.m_impulse.y;
                var l = -e.inv_dt * (t.col1.x * n + t.col2.x * h);
                var d = -e.inv_dt * (t.col1.y * n + t.col2.y * h);
                var c = this.m_impulse.x;
                var u = this.m_impulse.y;
                this.m_impulse.x += l;
                this.m_impulse.y += d;
                var p = this.m_impulse.Length();
                if (p > this.m_maxForce) {
                  this.m_impulse.Multiply(this.m_maxForce / p);
                }
                l = this.m_impulse.x - c;
                d = this.m_impulse.y - u;
                var m = e.dt * l;
                var f = e.dt * d;
                r.m_linearVelocity.x += r.m_invMass * m;
                r.m_linearVelocity.y += r.m_invMass * f;
                r.m_angularVelocity += r.m_invI * (i * f - s * m);
              };
              n.SolvePositionConstraints = function () {
                return true;
              };
              return t;
            }(Ce);
            var Re = function (e) {
              function t(t) {
                var n;
                (n = e.call(this, t) || this).m_localAnchor1 = new l();
                n.m_localAnchor2 = new l();
                n.m_u = new l();
                n.m_localAnchor1.SetV(t.localAnchor1);
                n.m_localAnchor2.SetV(t.localAnchor2);
                n.m_length = t.length;
                n.m_frequencyHz = t.frequencyHz;
                n.m_dampingRatio = t.dampingRatio;
                n.m_impulse = 0;
                n.m_gamma = 0;
                n.m_bias = 0;
                n.m_inv_dt = 0;
                return n;
              }
              Te(t, e);
              var n = t.prototype;
              n.InitVelocityConstraints = function (e) {
                var t;
                var n;
                this.m_inv_dt = e.inv_dt;
                var r = this.m_body1;
                var i = this.m_body2;
                t = r.m_xf.R;
                var s = this.m_localAnchor1.x - r.m_sweep.localCenter.x;
                var a = this.m_localAnchor1.y - r.m_sweep.localCenter.y;
                n = t.col1.x * s + t.col2.x * a;
                a = t.col1.y * s + t.col2.y * a;
                s = n;
                t = i.m_xf.R;
                var o = this.m_localAnchor2.x - i.m_sweep.localCenter.x;
                var h = this.m_localAnchor2.y - i.m_sweep.localCenter.y;
                n = t.col1.x * o + t.col2.x * h;
                h = t.col1.y * o + t.col2.y * h;
                o = n;
                this.m_u.x = i.m_sweep.c.x + o - r.m_sweep.c.x - s;
                this.m_u.y = i.m_sweep.c.y + h - r.m_sweep.c.y - a;
                var l = Math.sqrt(this.m_u.x * this.m_u.x + this.m_u.y * this.m_u.y);
                if (l > c.b2_linearSlop) {
                  this.m_u.Multiply(1 / l);
                } else {
                  this.m_u.SetZero();
                }
                var d = s * this.m_u.y - a * this.m_u.x;
                var u = o * this.m_u.y - h * this.m_u.x;
                var p = r.m_invMass + r.m_invI * d * d + i.m_invMass + i.m_invI * u * u;
                this.m_mass = 1 / p;
                if (this.m_frequencyHz > 0) {
                  var m = l - this.m_length;
                  var f = Math.PI * 2 * this.m_frequencyHz;
                  var _ = this.m_mass * 2 * this.m_dampingRatio * f;
                  var v = this.m_mass * f * f;
                  this.m_gamma = 1 / (e.dt * (_ + e.dt * v));
                  this.m_bias = m * e.dt * v * this.m_gamma;
                  this.m_mass = 1 / (p + this.m_gamma);
                }
                if (e.warmStarting) {
                  this.m_impulse *= e.dtRatio;
                  var y = this.m_impulse * this.m_u.x;
                  var g = this.m_impulse * this.m_u.y;
                  r.m_linearVelocity.x -= r.m_invMass * y;
                  r.m_linearVelocity.y -= r.m_invMass * g;
                  r.m_angularVelocity -= r.m_invI * (s * g - a * y);
                  i.m_linearVelocity.x += i.m_invMass * y;
                  i.m_linearVelocity.y += i.m_invMass * g;
                  i.m_angularVelocity += i.m_invI * (o * g - h * y);
                } else {
                  this.m_impulse = 0;
                }
              };
              n.SolveVelocityConstraints = function (e) {
                var t;
                var n = this.m_body1;
                var r = this.m_body2;
                t = n.m_xf.R;
                var i = this.m_localAnchor1.x - n.m_sweep.localCenter.x;
                var s = this.m_localAnchor1.y - n.m_sweep.localCenter.y;
                var a = t.col1.x * i + t.col2.x * s;
                s = t.col1.y * i + t.col2.y * s;
                i = a;
                t = r.m_xf.R;
                var o = this.m_localAnchor2.x - r.m_sweep.localCenter.x;
                var h = this.m_localAnchor2.y - r.m_sweep.localCenter.y;
                a = t.col1.x * o + t.col2.x * h;
                h = t.col1.y * o + t.col2.y * h;
                o = a;
                var l = n.m_linearVelocity.x + -n.m_angularVelocity * s;
                var d = n.m_linearVelocity.y + n.m_angularVelocity * i;
                var c = r.m_linearVelocity.x + -r.m_angularVelocity * h;
                var u = r.m_linearVelocity.y + r.m_angularVelocity * o;
                var p = this.m_u.x * (c - l) + this.m_u.y * (u - d);
                var m = -this.m_mass * (p + this.m_bias + this.m_gamma * this.m_impulse);
                this.m_impulse += m;
                var f = m * this.m_u.x;
                var _ = m * this.m_u.y;
                n.m_linearVelocity.x -= n.m_invMass * f;
                n.m_linearVelocity.y -= n.m_invMass * _;
                n.m_angularVelocity -= n.m_invI * (i * _ - s * f);
                r.m_linearVelocity.x += r.m_invMass * f;
                r.m_linearVelocity.y += r.m_invMass * _;
                r.m_angularVelocity += r.m_invI * (o * _ - h * f);
              };
              n.SolvePositionConstraints = function () {
                var e;
                if (this.m_frequencyHz > 0) {
                  return true;
                }
                var t = this.m_body1;
                var n = this.m_body2;
                e = t.m_xf.R;
                var r = this.m_localAnchor1.x - t.m_sweep.localCenter.x;
                var i = this.m_localAnchor1.y - t.m_sweep.localCenter.y;
                var s = e.col1.x * r + e.col2.x * i;
                i = e.col1.y * r + e.col2.y * i;
                r = s;
                e = n.m_xf.R;
                var a = this.m_localAnchor2.x - n.m_sweep.localCenter.x;
                var o = this.m_localAnchor2.y - n.m_sweep.localCenter.y;
                s = e.col1.x * a + e.col2.x * o;
                o = e.col1.y * a + e.col2.y * o;
                a = s;
                var l = n.m_sweep.c.x + a - t.m_sweep.c.x - r;
                var d = n.m_sweep.c.y + o - t.m_sweep.c.y - i;
                var u = Math.sqrt(l * l + d * d);
                l /= u;
                d /= u;
                var p = u - this.m_length;
                p = h.b2Clamp(p, -c.b2_maxLinearCorrection, c.b2_maxLinearCorrection);
                var m = -this.m_mass * p;
                this.m_u.Set(l, d);
                var f = m * this.m_u.x;
                var _ = m * this.m_u.y;
                t.m_sweep.c.x -= t.m_invMass * f;
                t.m_sweep.c.y -= t.m_invMass * _;
                t.m_sweep.a -= t.m_invI * (r * _ - i * f);
                n.m_sweep.c.x += n.m_invMass * f;
                n.m_sweep.c.y += n.m_invMass * _;
                n.m_sweep.a += n.m_invI * (a * _ - o * f);
                t.SynchronizeTransform();
                n.SynchronizeTransform();
                return h.b2Abs(p) < c.b2_linearSlop;
              };
              n.GetAnchor1 = function () {
                return this.m_body1.GetWorldPoint(this.m_localAnchor1);
              };
              n.GetAnchor2 = function () {
                return this.m_body2.GetWorldPoint(this.m_localAnchor2);
              };
              n.GetReactionForce = function () {
                var e = new l();
                e.SetV(this.m_u);
                e.Multiply(this.m_inv_dt * this.m_impulse);
                return e;
              };
              n.GetReactionTorque = function () {
                return 0;
              };
              n.GetInterpolatedAnchor1 = function () {
                return this.m_body1.GetInterpolatedWorldPoint(this.m_localAnchor1);
              };
              n.GetInterpolatedAnchor2 = function () {
                return this.m_body2.GetInterpolatedWorldPoint(this.m_localAnchor2);
              };
              return t;
            }(Ce);
            var Ie = function () {
              function e(t, n, r) {
                this.m_contactManager = new me();
                this.m_destructionListener = null;
                this.m_boundaryListener = null;
                this.m_contactFilter = ee.b2_defaultFilter;
                this.m_contactListener = null;
                this.m_debugDraw = null;
                this.m_bodyList = null;
                this.m_contactList = null;
                this.m_jointList = null;
                this.m_bodyCount = 0;
                this.m_contactCount = 0;
                this.m_jointCount = 0;
                e.m_positionCorrection = true;
                e.m_warmStarting = true;
                e.m_continuousPhysics = true;
                this.m_allowSleep = r;
                this.m_gravity = n;
                this.m_lock = false;
                this.m_inv_dt0 = 0;
                this.m_contactManager.m_world = this;
                this.m_broadPhase = new g(t, this.m_contactManager);
                var i = new Q();
                this.m_groundBody = this.CreateBody(i);
              }
              var t = e.prototype;
              t.Destroy = function (e = false) {
                for (var t = this.GetBodyList(); t; t = t.m_next) {
                  this.DestroyBody(t, e);
                }
                this.SetContactListener(null);
                this.SetDestructionListener(null);
                this.SetBoundaryListener(null);
                this.SetContactFilter(null);
                this.m_broadPhase.Destroy();
                this.m_broadPhase = null;
              };
              t.SetDestructionListener = function (e) {
                this.m_destructionListener = e;
              };
              t.SetBoundaryListener = function (e) {
                this.m_boundaryListener = e;
              };
              t.SetContactFilter = function (e) {
                this.m_contactFilter = e;
              };
              t.SetContactListener = function (e) {
                this.m_contactListener = e;
              };
              t.SetDebugDraw = function (e) {
                this.m_debugDraw = e;
              };
              t.Validate = function () {
                this.m_broadPhase.Validate();
              };
              t.GetProxyCount = function () {
                return this.m_broadPhase.m_proxyCount;
              };
              t.GetPairCount = function () {
                return this.m_broadPhase.m_pairManager.m_pairCount;
              };
              t.CreateBody = function (e) {
                if (this.m_lock == 1) {
                  return null;
                }
                var t = new Z(e, this);
                t.m_prev = null;
                t.m_next = this.m_bodyList;
                if (this.m_bodyList) {
                  this.m_bodyList.m_prev = t;
                }
                this.m_bodyList = t;
                ++this.m_bodyCount;
                return t;
              };
              t.DestroyBody = function (e, t = false) {
                if (this.m_lock != 1) {
                  for (var n = e.m_jointList; n;) {
                    var r = n;
                    n = n.next;
                    if (this.m_destructionListener) {
                      this.m_destructionListener.SayGoodbyeJoint(r.joint);
                    }
                    this.DestroyJoint(r.joint);
                    if (t) {
                      r.joint.m_userData = null;
                    }
                  }
                  for (var i = e.m_shapeList; i;) {
                    var s = i;
                    i = i.m_next;
                    if (this.m_destructionListener) {
                      this.m_destructionListener.SayGoodbyeShape(s);
                    }
                    s.DestroyProxy(this.m_broadPhase);
                    M.Destroy(s, this.m_blockAllocator);
                    if (t) {
                      s.m_userData = null;
                    }
                  }
                  if (e.m_prev) {
                    e.m_prev.m_next = e.m_next;
                  }
                  if (e.m_next) {
                    e.m_next.m_prev = e.m_prev;
                  }
                  if (e == this.m_bodyList) {
                    this.m_bodyList = e.m_next;
                  }
                  --this.m_bodyCount;
                  e.destroyed = true;
                  if (t) {
                    e.m_userData = null;
                  }
                }
              };
              t.CreateJoint = function (e) {
                var t = Ce.Create(e, this.m_blockAllocator);
                t.m_prev = null;
                t.m_next = this.m_jointList;
                if (this.m_jointList) {
                  this.m_jointList.m_prev = t;
                }
                this.m_jointList = t;
                ++this.m_jointCount;
                t.m_node1.joint = t;
                t.m_node1.other = t.m_body2;
                t.m_node1.prev = null;
                t.m_node1.next = t.m_body1.m_jointList;
                if (t.m_body1.m_jointList) {
                  t.m_body1.m_jointList.prev = t.m_node1;
                }
                t.m_body1.m_jointList = t.m_node1;
                t.m_node2.joint = t;
                t.m_node2.other = t.m_body1;
                t.m_node2.prev = null;
                t.m_node2.next = t.m_body2.m_jointList;
                if (t.m_body2.m_jointList) {
                  t.m_body2.m_jointList.prev = t.m_node2;
                }
                t.m_body2.m_jointList = t.m_node2;
                if (e.collideConnected == 0) {
                  var n = e.body1.m_shapeCount < e.body2.m_shapeCount ? e.body1 : e.body2;
                  for (var r = n.m_shapeList; r; r = r.m_next) {
                    r.RefilterProxy(this.m_broadPhase, n.m_xf);
                  }
                }
                return t;
              };
              t.DestroyJoint = function (e) {
                if (!e.destroyed) {
                  var t = e.m_collideConnected;
                  if (e.m_prev) {
                    e.m_prev.m_next = e.m_next;
                  }
                  if (e.m_next) {
                    e.m_next.m_prev = e.m_prev;
                  }
                  if (e == this.m_jointList) {
                    this.m_jointList = e.m_next;
                  }
                  var n = e.m_body1;
                  var r = e.m_body2;
                  n.WakeUp();
                  r.WakeUp();
                  if (e.m_node1.prev) {
                    e.m_node1.prev.next = e.m_node1.next;
                  }
                  if (e.m_node1.next) {
                    e.m_node1.next.prev = e.m_node1.prev;
                  }
                  if (e.m_node1 == n.m_jointList) {
                    n.m_jointList = e.m_node1.next;
                  }
                  e.m_node1.prev = null;
                  e.m_node1.next = null;
                  if (e.m_node2.prev) {
                    e.m_node2.prev.next = e.m_node2.next;
                  }
                  if (e.m_node2.next) {
                    e.m_node2.next.prev = e.m_node2.prev;
                  }
                  if (e.m_node2 == r.m_jointList) {
                    r.m_jointList = e.m_node2.next;
                  }
                  e.m_node2.prev = null;
                  e.m_node2.next = null;
                  Ce.Destroy(e, this.m_blockAllocator);
                  e.destroyed = true;
                  --this.m_jointCount;
                  if (t == 0) {
                    var i = n.m_shapeCount < r.m_shapeCount ? n : r;
                    for (var s = i.m_shapeList; s; s = s.m_next) {
                      s.RefilterProxy(this.m_broadPhase, i.m_xf);
                    }
                  }
                }
              };
              t.Refilter = function (e) {
                e.RefilterProxy(this.m_broadPhase, e.m_body.m_xf);
              };
              t.SetWarmStarting = function (t) {
                e.m_warmStarting = t;
              };
              t.SetPositionCorrection = function (t) {
                e.m_positionCorrection = t;
              };
              t.SetContinuousPhysics = function (t) {
                e.m_continuousPhysics = t;
              };
              t.GetBodyCount = function () {
                return this.m_bodyCount;
              };
              t.GetJointCount = function () {
                return this.m_jointCount;
              };
              t.GetContactCount = function () {
                return this.m_contactCount;
              };
              t.SetGravity = function (e) {
                this.m_gravity = e;
              };
              t.GetGroundBody = function () {
                return this.m_groundBody;
              };
              t.Step = function (t, n) {
                this.m_lock = true;
                var r = new ye();
                r.dt = t;
                r.maxIterations = n;
                r.inv_dt = t > 0 ? 1 / t : 0;
                r.dtRatio = this.m_inv_dt0 * t;
                r.positionCorrection = e.m_positionCorrection;
                r.warmStarting = e.m_warmStarting;
                this.m_contactManager.Collide();
                if (r.dt > 0) {
                  this.Solve(r);
                }
                if (e.m_continuousPhysics && r.dt > 0) {
                  this.SolveTOI(r);
                }
                if (!Z.USE_INTERPOLATION) {
                  this.DrawDebugData();
                }
                this.m_inv_dt0 = r.inv_dt;
                this.m_lock = false;
              };
              t.Query = function (e, t, n) {
                var r = new Array(n);
                for (var i = this.m_broadPhase.QueryAABB(e, r, n), s = 0; s < i; ++s) {
                  t[s] = r[s];
                }
                return i;
              };
              t.GetBodyList = function () {
                return this.m_bodyList;
              };
              t.GetJointList = function () {
                return this.m_jointList;
              };
              t.Solve = function (t) {
                var n;
                this.m_positionIterationCount = 0;
                var r = new we(this.m_bodyCount, this.m_contactCount, this.m_jointCount, this.m_stackAllocator, this.m_contactListener);
                for (n = this.m_bodyList; n; n = n.m_next) {
                  n.m_flags &= ~Z.e_islandFlag;
                }
                for (var i = this.m_contactList; i; i = i.m_next) {
                  i.m_flags &= ~oe.e_islandFlag;
                }
                for (var s = this.m_jointList; s; s = s.m_next) {
                  s.m_islandFlag = false;
                }
                var a = this.m_bodyCount;
                var o = new Array(a);
                for (var h = this.m_bodyList; h; h = h.m_next) {
                  if (!(h.m_flags & (Z.e_islandFlag | Z.e_sleepFlag | Z.e_frozenFlag)) && !h.IsStatic()) {
                    r.Clear();
                    var l = 0;
                    o[l++] = h;
                    h.m_flags |= Z.e_islandFlag;
                    while (l > 0) {
                      n = o[--l];
                      r.AddBody(n);
                      n.m_flags &= ~Z.e_sleepFlag;
                      if (!n.IsStatic()) {
                        for (var d = n.m_contactList; d; d = d.next) {
                          if (!(d.contact.m_flags & (oe.e_islandFlag | oe.e_nonSolidFlag)) && d.contact.m_manifoldCount != 0) {
                            r.AddContact(d.contact);
                            d.contact.m_flags |= oe.e_islandFlag;
                            var c = d.other;
                            if (!(c.m_flags & Z.e_islandFlag)) {
                              o[l++] = c;
                              c.m_flags |= Z.e_islandFlag;
                            }
                          }
                        }
                        for (var u = n.m_jointList; u; u = u.next) {
                          if (u.joint.m_islandFlag != 1) {
                            r.AddJoint(u.joint);
                            u.joint.m_islandFlag = true;
                            var p = u.other;
                            if (!(p.m_flags & Z.e_islandFlag)) {
                              o[l++] = p;
                              p.m_flags |= Z.e_islandFlag;
                            }
                          }
                        }
                      }
                    }
                    r.Solve(t, this.m_gravity, e.m_positionCorrection, this.m_allowSleep);
                    if (r.m_positionIterationCount > this.m_positionIterationCount) {
                      this.m_positionIterationCount = r.m_positionIterationCount;
                    }
                    for (var m = 0; m < r.m_bodyCount; ++m) {
                      if ((n = r.m_bodies[m]).IsStatic()) {
                        n.m_flags &= ~Z.e_islandFlag;
                      }
                    }
                  }
                }
                for (n = this.m_bodyList; n; n = n.m_next) {
                  if (!(n.m_flags & (Z.e_sleepFlag | Z.e_frozenFlag)) && !n.IsStatic()) {
                    if (n.SynchronizeShapes() == 0 && this.m_boundaryListener != null) {
                      this.m_boundaryListener.Violation(n);
                    }
                  }
                }
                this.m_broadPhase.Commit();
              };
              t.SolveTOI = function (e) {
                var t;
                var n;
                var r;
                var i;
                var s;
                var a;
                var o;
                var h = new we(this.m_bodyCount, c.b2_maxTOIContactsPerIsland, 0, this.m_stackAllocator, this.m_contactListener);
                var l = this.m_bodyCount;
                var d = new Array(l);
                for (t = this.m_bodyList; t; t = t.m_next) {
                  t.m_flags &= ~Z.e_islandFlag;
                  t.m_sweep.t0 = 0;
                }
                for (o = this.m_contactList; o; o = o.m_next) {
                  o.m_flags &= ~(oe.e_toiFlag | oe.e_islandFlag);
                }
                for (var u = 0;; ++u) {
                  var p = null;
                  var m = 1;
                  for (o = this.m_contactList; o; o = o.m_next) {
                    if (!(o.m_flags & (oe.e_slowFlag | oe.e_nonSolidFlag))) {
                      var f = 1;
                      if (o.m_flags & oe.e_toiFlag) {
                        f = o.m_toi;
                      } else {
                        n = o.m_shape1;
                        r = o.m_shape2;
                        i = n.m_body;
                        s = r.m_body;
                        if ((i.IsStatic() || i.IsSleeping()) && (s.IsStatic() || s.IsSleeping())) {
                          continue;
                        }
                        var _ = i.m_sweep.t0;
                        if (i.m_sweep.t0 < s.m_sweep.t0) {
                          _ = s.m_sweep.t0;
                          i.m_sweep.Advance(_);
                        } else if (s.m_sweep.t0 < i.m_sweep.t0) {
                          _ = i.m_sweep.t0;
                          s.m_sweep.Advance(_);
                        }
                        if ((f = F.TimeOfImpact(o.m_shape1, i.m_sweep, o.m_shape2, s.m_sweep)) > 0 && f < 1 && (f = (1 - f) * _ + f) > 1) {
                          f = 1;
                        }
                        o.m_toi = f;
                        o.m_flags |= oe.e_toiFlag;
                      }
                      if (Number.MIN_VALUE < f && f < m) {
                        p = o;
                        m = f;
                      }
                    }
                  }
                  if (p == null || 1 - Number.MIN_VALUE * 100 < m) {
                    break;
                  }
                  if (u == c.b2_maxTOIIterations) {
                    break;
                  }
                  n = p.m_shape1;
                  r = p.m_shape2;
                  i = n.m_body;
                  s = r.m_body;
                  i.Advance(m);
                  s.Advance(m);
                  p.Update(this.m_contactListener);
                  p.m_flags &= ~oe.e_toiFlag;
                  if (p.m_manifoldCount != 0) {
                    var v = i;
                    if (v.IsStatic()) {
                      v = s;
                    }
                    h.Clear();
                    var y = 0;
                    d[y++] = v;
                    v.m_flags |= Z.e_islandFlag;
                    while (y > 0) {
                      t = d[--y];
                      h.AddBody(t);
                      t.m_flags &= ~Z.e_sleepFlag;
                      if (!t.IsStatic()) {
                        for (a = t.m_contactList; a; a = a.next) {
                          if (h.m_contactCount != h.m_contactCapacity && !(a.contact.m_flags & (oe.e_islandFlag | oe.e_slowFlag | oe.e_nonSolidFlag)) && a.contact.m_manifoldCount != 0) {
                            h.AddContact(a.contact);
                            a.contact.m_flags |= oe.e_islandFlag;
                            var g = a.other;
                            if (!(g.m_flags & Z.e_islandFlag)) {
                              if (g.IsStatic() == 0) {
                                g.Advance(m);
                                g.WakeUp();
                              }
                              d[y++] = g;
                              g.m_flags |= Z.e_islandFlag;
                            }
                          }
                        }
                      }
                    }
                    var w = new ye();
                    w.dt = (1 - m) * e.dt;
                    w.inv_dt = 1 / w.dt;
                    w.maxIterations = e.maxIterations;
                    h.SolveTOI(w);
                    for (var x = 0; x < h.m_bodyCount; ++x) {
                      (t = h.m_bodies[x]).m_flags &= ~Z.e_islandFlag;
                      if (!(t.m_flags & (Z.e_sleepFlag | Z.e_frozenFlag)) && !t.IsStatic()) {
                        if (t.SynchronizeShapes() == 0 && this.m_boundaryListener != null) {
                          this.m_boundaryListener.Violation(t);
                        }
                        a = t.m_contactList;
                        for (; a; a = a.next) {
                          a.contact.m_flags &= ~oe.e_toiFlag;
                        }
                      }
                    }
                    for (var b = 0; b < h.m_contactCount; ++b) {
                      (o = h.m_contacts[b]).m_flags &= ~(oe.e_toiFlag | oe.e_islandFlag);
                    }
                    this.m_broadPhase.Commit();
                  }
                }
              };
              t.DrawJoint = function (t) {
                var n = t.m_body1;
                var r = t.m_body2;
                var i = n.GetInterpolatedWorldCenter();
                var s = r.GetInterpolatedWorldCenter();
                var a = t.GetInterpolatedAnchor1();
                var o = t.GetInterpolatedAnchor2();
                var h = e.s_jointColor;
                switch (t.m_type) {
                  case Ce.e_distanceJoint:
                    this.m_debugDraw.DrawSegment(a, o, h);
                    break;
                  case Ce.e_pulleyJoint:
                    var l = t;
                    var d = l.GetGroundAnchor1();
                    var c = l.GetGroundAnchor2();
                    this.m_debugDraw.DrawSegment(d, a, h);
                    this.m_debugDraw.DrawSegment(c, o, h);
                    this.m_debugDraw.DrawSegment(d, c, h);
                    break;
                  case Ce.e_mouseJoint:
                    this.m_debugDraw.DrawSegment(a, o, h);
                    break;
                  default:
                    if (n != this.m_groundBody) {
                      this.m_debugDraw.DrawSegment(i, a, h);
                    }
                    this.m_debugDraw.DrawSegment(a, o, h);
                    if (r != this.m_groundBody) {
                      this.m_debugDraw.DrawSegment(s, o, h);
                    }
                }
              };
              t.DrawShape = function (t, n, r, i) {
                var s = e.s_coreColor;
                switch (t.m_type) {
                  case M.e_circleShape:
                    var a = t;
                    var o = h.b2MulX(n, a.m_localPosition);
                    var l = a.m_radius;
                    var d = n.R.col1;
                    this.m_debugDraw.DrawSolidCircle(o, l, d, r);
                    if (i) {
                      this.m_debugDraw.DrawCircle(o, l - c.b2_toiSlop, s);
                    }
                    break;
                  case M.e_polygonShape:
                    var u;
                    var p = t;
                    var m = p.GetVertexCount();
                    var f = p.GetVertices();
                    var _ = new Array(c.b2_maxPolygonVertices);
                    for (u = 0; u < m; ++u) {
                      _[u] = h.b2MulX(n, f[u]);
                    }
                    this.m_debugDraw.DrawSolidPolygon(_, m, r);
                    if (i) {
                      var v = p.GetCoreVertices();
                      for (u = 0; u < m; ++u) {
                        _[u] = h.b2MulX(n, v[u]);
                      }
                      this.m_debugDraw.DrawPolygon(_, m, s);
                    }
                }
              };
              t.DrawDebugData = function () {
                if (this.m_debugDraw != null) {
                  this.m_debugDraw.m_sprite.graphics.clear();
                  var t;
                  var n;
                  var r;
                  var i;
                  var s;
                  var a;
                  var o = this.m_debugDraw.GetFlags();
                  var h = new l();
                  var u = new l();
                  var p = new l();
                  var m = new Y(0, 0, 0);
                  var _ = new d();
                  var v = new d();
                  var y = [new l(), new l(), new l(), new l()];
                  if (o & fe.e_shapeBit) {
                    var g = (o & fe.e_coreShapeBit) == fe.e_coreShapeBit;
                    for (n = this.m_bodyList; n; n = n.m_next) {
                      a = n.GetInterpolatedXForm();
                      r = n.GetShapeList();
                      for (; r; r = r.m_next) {
                        if (r.IsSensor() && r.m_userData !== null) {
                          this.DrawShape(r, a, new Y(0.5, 0.9, 0.5), r.m_userData.disabled);
                        } else if (n.IsStatic()) {
                          this.DrawShape(r, a, new Y(0.5, 0.9, 0.5), g);
                        } else if (n.IsSleeping()) {
                          this.DrawShape(r, a, new Y(0.5, 0.5, 0.9), g);
                        } else {
                          this.DrawShape(r, a, new Y(0.9, 0.9, 0.9), g);
                        }
                      }
                    }
                  }
                  if (o & fe.e_jointBit) {
                    for (i = this.m_jointList; i; i = i.m_next) {
                      this.DrawJoint(i);
                    }
                  }
                  if (o & fe.e_pairBit) {
                    s = this.m_broadPhase;
                    h.Set(1 / s.m_quantizationFactor.x, 1 / s.m_quantizationFactor.y);
                    m.Set(0.9, 0.9, 0.3);
                    t = 0;
                    for (; t < f.b2_tableCapacity; ++t) {
                      for (var w = s.m_pairManager.m_hashTable[t]; w != f.b2_nullPair;) {
                        var x = s.m_pairManager.m_pairs[w];
                        var b = s.m_proxyPool[x.proxyId1];
                        var T = s.m_proxyPool[x.proxyId2];
                        _.lowerBound.x = s.m_worldAABB.lowerBound.x + h.x * s.m_bounds[0][b.lowerBounds[0]].value;
                        _.lowerBound.y = s.m_worldAABB.lowerBound.y + h.y * s.m_bounds[1][b.lowerBounds[1]].value;
                        _.upperBound.x = s.m_worldAABB.lowerBound.x + h.x * s.m_bounds[0][b.upperBounds[0]].value;
                        _.upperBound.y = s.m_worldAABB.lowerBound.y + h.y * s.m_bounds[1][b.upperBounds[1]].value;
                        v.lowerBound.x = s.m_worldAABB.lowerBound.x + h.x * s.m_bounds[0][T.lowerBounds[0]].value;
                        v.lowerBound.y = s.m_worldAABB.lowerBound.y + h.y * s.m_bounds[1][T.lowerBounds[1]].value;
                        v.upperBound.x = s.m_worldAABB.lowerBound.x + h.x * s.m_bounds[0][T.upperBounds[0]].value;
                        v.upperBound.y = s.m_worldAABB.lowerBound.y + h.y * s.m_bounds[1][T.upperBounds[1]].value;
                        u.x = (_.lowerBound.x + _.upperBound.x) * 0.5;
                        u.y = (_.lowerBound.y + _.upperBound.y) * 0.5;
                        p.x = (v.lowerBound.x + v.upperBound.x) * 0.5;
                        p.y = (v.lowerBound.y + v.upperBound.y) * 0.5;
                        this.m_debugDraw.DrawSegment(u, p, m);
                        w = x.next;
                      }
                    }
                  }
                  if (o & fe.e_aabbBit) {
                    var A = (s = this.m_broadPhase).m_worldAABB.lowerBound;
                    var C = s.m_worldAABB.upperBound;
                    h.Set(1 / s.m_quantizationFactor.x, 1 / s.m_quantizationFactor.y);
                    m.Set(0.9, 0.3, 0.9);
                    t = 0;
                    for (; t < c.b2_maxProxies; ++t) {
                      var S = s.m_proxyPool[t];
                      if (S.IsValid() != 0) {
                        _.lowerBound.x = A.x + h.x * s.m_bounds[0][S.lowerBounds[0]].value;
                        _.lowerBound.y = A.y + h.y * s.m_bounds[1][S.lowerBounds[1]].value;
                        _.upperBound.x = A.x + h.x * s.m_bounds[0][S.upperBounds[0]].value;
                        _.upperBound.y = A.y + h.y * s.m_bounds[1][S.upperBounds[1]].value;
                        y[0].Set(_.lowerBound.x, _.lowerBound.y);
                        y[1].Set(_.upperBound.x, _.lowerBound.y);
                        y[2].Set(_.upperBound.x, _.upperBound.y);
                        y[3].Set(_.lowerBound.x, _.upperBound.y);
                        this.m_debugDraw.DrawPolygon(y, 4, m);
                      }
                    }
                    y[0].Set(A.x, A.y);
                    y[1].Set(C.x, A.y);
                    y[2].Set(C.x, C.y);
                    y[3].Set(A.x, C.y);
                    this.m_debugDraw.DrawPolygon(y, 4, new Y(0.3, 0.9, 0.9));
                  }
                  if (o & fe.e_obbBit) {
                    m.Set(0.5, 0.3, 0.5);
                    n = this.m_bodyList;
                    for (; n; n = n.m_next) {
                      a = n.GetInterpolatedXForm();
                      r = n.GetShapeList();
                      for (; r; r = r.m_next) {
                        if (r.m_type == M.e_polygonShape) {
                          var E = r.GetOBB();
                          var O = E.extents;
                          y[0].Set(-O.x, -O.y);
                          y[1].Set(O.x, -O.y);
                          y[2].Set(O.x, O.y);
                          y[3].Set(-O.x, O.y);
                          t = 0;
                          for (; t < 4; ++t) {
                            var k = E.R;
                            var P = y[t];
                            var R = E.center.x + (k.col1.x * P.x + k.col2.x * P.y);
                            y[t].y = E.center.y + (k.col1.y * P.x + k.col2.y * P.y);
                            y[t].x = R;
                            k = a.R;
                            R = a.position.x + (k.col1.x * P.x + k.col2.x * P.y);
                            y[t].y = a.position.y + (k.col1.y * P.x + k.col2.y * P.y);
                            y[t].x = R;
                          }
                          this.m_debugDraw.DrawPolygon(y, 4, m);
                        }
                      }
                    }
                  }
                  if (o & fe.e_centerOfMassBit) {
                    for (n = this.m_bodyList; n; n = n.m_next) {
                      (a = e.s_xf).R = Z.USE_INTERPOLATION ? n.m_interpolatedMatrix : n.m_xf.R;
                      a.position = n.GetInterpolatedWorldCenter();
                      this.m_debugDraw.DrawXForm(a);
                    }
                  }
                }
              };
              t.InterpolatedStep = function (e = 1) {
                for (var t = this.m_bodyList; t;) {
                  if (!t.destroyed) {
                    t.UpdateInterpolation(e);
                  }
                  t = t.m_next;
                }
              };
              return e;
            }();
            Ie.s_jointColor = new Y(0.5, 0.8, 0.8);
            Ie.s_coreColor = new Y(0.9, 0.6, 0.6);
            Ie.s_xf = new s();
            function Le() {
              this.type = Ce.e_unknownJoint;
              this.userData = null;
              this.body1 = null;
              this.body2 = null;
              this.collideConnected = false;
            }
            function je(e, t) {
              je = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return je(e, t);
            }
            var Be = function (e) {
              function t() {
                var t;
                (t = e.call(this) || this).localAnchor1 = new l();
                t.localAnchor2 = new l();
                t.type = Ce.e_distanceJoint;
                t.length = 1;
                t.frequencyHz = 0;
                t.dampingRatio = 0;
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              je(n, r);
              t.prototype.Initialize = function (e, t, n, r) {
                this.body1 = e;
                this.body2 = t;
                this.localAnchor1.SetV(this.body1.GetLocalPoint(n));
                this.localAnchor2.SetV(this.body2.GetLocalPoint(r));
                var i = r.x - n.x;
                var s = r.y - n.y;
                this.length = Math.sqrt(i * i + s * s);
                this.frequencyHz = 0;
                this.dampingRatio = 0;
              };
              return t;
            }(Le);
            function De(e, t) {
              De = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return De(e, t);
            }
            var Fe = function (e) {
              function t() {
                var t;
                (t = e.call(this) || this).type = Ce.e_gearJoint;
                t.joint1 = null;
                t.joint2 = null;
                t.ratio = 1;
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              De(n, r);
              return t;
            }(Le);
            function Ne(e, t) {
              Ne = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return Ne(e, t);
            }
            var Ge = function (e) {
              function t() {
                var t;
                (t = e.call(this) || this).localAnchor1 = new l();
                t.localAnchor2 = new l();
                t.localAxis1 = new l();
                t.type = Ce.e_prismaticJoint;
                t.localAxis1.Set(1, 0);
                t.referenceAngle = 0;
                t.enableLimit = false;
                t.lowerTranslation = 0;
                t.upperTranslation = 0;
                t.enableMotor = false;
                t.maxMotorForce = 0;
                t.motorSpeed = 0;
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              Ne(n, r);
              t.prototype.Initialize = function (e, t, n, r) {
                this.body1 = e;
                this.body2 = t;
                this.localAnchor1 = this.body1.GetLocalPoint(n);
                this.localAnchor2 = this.body2.GetLocalPoint(n);
                this.localAxis1 = this.body1.GetLocalVector(r);
                this.referenceAngle = this.body2.GetAngle() - this.body1.GetAngle();
              };
              return t;
            }(Le);
            function Ue(e, t) {
              Ue = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return Ue(e, t);
            }
            var Ve = function (e) {
              function t() {
                var t;
                (t = e.call(this) || this).localAnchor1 = new l();
                t.localAnchor2 = new l();
                t.type = Ce.e_revoluteJoint;
                t.localAnchor1.Set(0, 0);
                t.localAnchor2.Set(0, 0);
                t.referenceAngle = 0;
                t.lowerAngle = 0;
                t.upperAngle = 0;
                t.maxMotorTorque = 0;
                t.motorSpeed = 0;
                t.enableLimit = false;
                t.enableMotor = false;
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              Ue(n, r);
              var i = t.prototype;
              i.Initialize = function (e, t, n) {
                this.body1 = e;
                this.body2 = t;
                this.localAnchor1 = this.body1.GetLocalPoint(n);
                this.localAnchor2 = this.body2.GetLocalPoint(n);
                this.referenceAngle = this.body2.GetAngle() - this.body1.GetAngle();
              };
              i.clone = function () {
                var e = new t();
                e.body1 = this.body1;
                e.body2 = this.body2;
                e.localAnchor1 = this.localAnchor1.Copy();
                e.localAnchor2 = this.localAnchor2.Copy();
                e.referenceAngle = this.referenceAngle;
                e.enableLimit = this.enableLimit;
                e.lowerAngle = this.lowerAngle;
                e.upperAngle = this.upperAngle;
                e.enableMotor = this.enableMotor;
                e.motorSpeed = this.motorSpeed;
                e.maxMotorTorque = this.maxMotorTorque;
                e.collideConnected = this.collideConnected;
                return e;
              };
              return t;
            }(Le);
            function He(e, t) {
              He = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return He(e, t);
            }
            var ze = function (e) {
              function t() {
                var t;
                (t = e.call(this) || this).localAnchor1 = new l();
                t.localAnchor2 = new l();
                t.type = Ce.e_ropeJoint;
                t.length = 1;
                t.frequencyHz = 0;
                t.dampingRatio = 0;
                return t;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              He(n, r);
              t.prototype.Initialize = function (e, t, n, r) {
                this.body1 = e;
                this.body2 = t;
                this.localAnchor1.SetV(this.body1.GetLocalPoint(n));
                this.localAnchor2.SetV(this.body2.GetLocalPoint(r));
                var i = r.x - n.x;
                var s = r.y - n.y;
                this.length = Math.sqrt(i * i + s * s);
                this.frequencyHz = 0;
                this.dampingRatio = 0;
              };
              return t;
            }(Le);
          }
    });
})();
