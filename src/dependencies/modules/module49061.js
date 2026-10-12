(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        49061(e, t, n) {
            "use strict";
        
            var r = () => n(46518);
            var i = n.cw(function (e, t) {
              var i = r();
              var s = n(59213).find;
              var a = n(6469);
              var o = "find";
              var h = true;
              if (o in []) {
                Array(1)[o](function () {
                  h = false;
                });
              }
              i({
                target: "Array",
                proto: true,
                forced: h
              }, {
                find: function (e) {
                  return s(this, e, arguments.length > 1 ? arguments[1] : undefined);
                }
              });
              a(o);
            });
            var s = n.cw(function (e, t) {
              var i = r();
              var s = n(2087);
              var a = Math.abs;
              i({
                target: "Number",
                stat: true
              }, {
                isSafeInteger: function (e) {
                  return s(e) && a(e) <= 9007199254740991;
                }
              });
            });
            var a = n.cw(function (e, t) {
              var r = n(72805);
              (0, n(94644).exportTypedArrayStaticMethod)("from", n(43251), r);
            });
            n(11392);
            n(62062);
            n(84864);
            n(27495);
            n(38781);
            n(26099);
            n(23792);
            n(3362);
            n(47764);
            n(62953);
            n(52675);
            n(89463);
            n(2259);
            n(78125);
            n(4731);
            n(60479);
            n(40875);
            var o = n(46682);
            var h = n(45499);
            var l = n(22247);
            var d = n(80455);
            var c = n(5602);
            const u = [];
            function p(e) {
              const t = e.defaultIntegrations || [];
              const n = e.integrations;
              let r;
              t.forEach(e => {
                e.isDefaultInstance = true;
              });
              if (Array.isArray(n)) {
                r = [...t, ...n];
              } else if (typeof n == "function") {
                const e = n(t);
                r = Array.isArray(e) ? e : [e];
              } else {
                r = t;
              }
              const i = function (e) {
                const t = {};
                e.forEach(e => {
                  const {
                    name: n
                  } = e;
                  const r = t[n];
                  if (!r || !!r.isDefaultInstance || !e.isDefaultInstance) {
                    t[n] = e;
                  }
                });
                return Object.values(t);
              }(r);
              const s = i.findIndex(e => e.name === "Debug");
              if (s > -1) {
                const [e] = i.splice(s, 1);
                i.push(e);
              }
              return i;
            }
            function m(e, t) {
              for (const n of t) {
                if (n && n.afterAllSetup) {
                  n.afterAllSetup(e);
                }
              }
            }
            function f(e, t, n) {
              if (!n[t.name]) {
                n[t.name] = t;
                if (u.indexOf(t.name) === -1 && typeof t.setupOnce == "function") {
                  t.setupOnce();
                  u.push(t.name);
                }
                if (t.setup && typeof t.setup == "function") {
                  t.setup(e);
                }
                if (typeof t.preprocessEvent == "function") {
                  const n = t.preprocessEvent.bind(t);
                  e.on("preprocessEvent", (t, r) => n(t, r, e));
                }
                if (typeof t.processEvent == "function") {
                  const n = t.processEvent.bind(t);
                  const r = Object.assign((t, r) => n(t, r, e), {
                    id: t.name
                  });
                  e.addEventProcessor(r);
                }
              }
            }
            var _ = n(44910);
            var v = n(2323);
            const y = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, /^Can't find variable: gmo$/, "undefined is not an object (evaluating 'a.L')", "can't redefine non-configurable property \"solana\"", "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler", /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/, /^Java exception was raised during method invocation$/];
            const g = (e = {}) => ({
              name: "InboundFilters",
              processEvent(t, n, r) {
                const i = r.getOptions();
                const s = function (e = {}, t = {}) {
                  return {
                    allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
                    denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
                    ignoreErrors: [...(e.ignoreErrors || []), ...(t.ignoreErrors || []), ...(e.disableErrorDefaults ? [] : y)],
                    ignoreTransactions: [...(e.ignoreTransactions || []), ...(t.ignoreTransactions || [])],
                    ignoreInternal: e.ignoreInternal === undefined || e.ignoreInternal
                  };
                }(e, i);
                if (function (e, t) {
                  return !!t.ignoreInternal && !!function (e) {
                    try {
                      return e.exception.values[0].type === "SentryError";
                    } catch (e) {}
                    return false;
                  }(e) || !!function (e, t) {
                    return !e.type && !!t && !!t.length && function (e) {
                      const t = [];
                      let n;
                      if (e.message) {
                        t.push(e.message);
                      }
                      try {
                        n = e.exception.values[e.exception.values.length - 1];
                      } catch (e) {}
                      if (n && n.value) {
                        t.push(n.value);
                        if (n.type) {
                          t.push(`${n.type}: ${n.value}`);
                        }
                      }
                      return t;
                    }(e).some(e => (0, v.Xr)(e, t));
                  }(e, t.ignoreErrors) || !!function (e) {
                    return !e.type && !!e.exception && !!e.exception.values && e.exception.values.length !== 0 && !e.message && !e.exception.values.some(e => e.stacktrace || e.type && e.type !== "Error" || e.value);
                  }(e) || !!function (e, t) {
                    if (e.type !== "transaction" || !t || !t.length) {
                      return false;
                    }
                    const n = e.transaction;
                    return !!n && (0, v.Xr)(n, t);
                  }(e, t.ignoreTransactions) || !!function (e, t) {
                    if (!t || !t.length) {
                      return false;
                    }
                    const n = w(e);
                    return !!n && (0, v.Xr)(n, t);
                  }(e, t.denyUrls) || !function (e, t) {
                    if (!t || !t.length) {
                      return true;
                    }
                    const n = w(e);
                    return !n || (0, v.Xr)(n, t);
                  }(e, t.allowUrls);
                }(t, s)) {
                  return null;
                } else {
                  return t;
                }
              }
            });
            function w(e) {
              try {
                let t;
                try {
                  t = e.exception.values[0].stacktrace.frames;
                } catch (e) {}
                if (t) {
                  return function (e = []) {
                    for (let t = e.length - 1; t >= 0; t--) {
                      const n = e[t];
                      if (n && n.filename !== "<anonymous>" && n.filename !== "[native code]") {
                        return n.filename || null;
                      }
                    }
                    return null;
                  }(t);
                } else {
                  return null;
                }
              } catch (e) {
                return null;
              }
            }
            var x = n(41186);
            var b = n(40873);
            let T;
            const A = new WeakMap();
            const C = () => ({
              name: "FunctionToString",
              setupOnce() {
                T = Function.prototype.toString;
                try {
                  Function.prototype.toString = function (...e) {
                    const t = (0, b.sp)(this);
                    const n = A.has((0, x.KU)()) && t !== undefined ? t : this;
                    return T.apply(n, e);
                  };
                } catch (e) {}
              },
              setup(e) {
                A.set(e, true);
              }
            });
            var S = n(20527);
            const E = () => {
              let e;
              return {
                name: "Dedupe",
                processEvent(t) {
                  if (t.type) {
                    return t;
                  }
                  try {
                    if (function (e, t) {
                      return !!t && (!!function (e, t) {
                        const n = e.message;
                        const r = t.message;
                        return (!!n || !!r) && (!n || !!r) && (!!n || !r) && n === r && !!k(e, t) && !!O(e, t);
                      }(e, t) || !!function (e, t) {
                        const n = P(t);
                        const r = P(e);
                        return !!n && !!r && n.type === r.type && n.value === r.value && !!k(e, t) && !!O(e, t);
                      }(e, t));
                    }(t, e)) {
                      return null;
                    }
                  } catch (e) {}
                  return e = t;
                }
              };
            };
            function O(e, t) {
              let n = (0, S.RV)(e);
              let r = (0, S.RV)(t);
              if (!n && !r) {
                return true;
              }
              if (n && !r || !n && r) {
                return false;
              }
              if (r.length !== n.length) {
                return false;
              }
              for (let e = 0; e < r.length; e++) {
                const t = r[e];
                const i = n[e];
                if (t.filename !== i.filename || t.lineno !== i.lineno || t.colno !== i.colno || t.function !== i.function) {
                  return false;
                }
              }
              return true;
            }
            function k(e, t) {
              let n = e.fingerprint;
              let r = t.fingerprint;
              if (!n && !r) {
                return true;
              }
              if (n && !r || !n && r) {
                return false;
              }
              try {
                return n.join("") === r.join("");
              } catch (e) {
                return false;
              }
            }
            function P(e) {
              return e.exception && e.exception.values && e.exception.values[0];
            }
            const M = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
            function R(e, t = false) {
              const {
                host: n,
                path: r,
                pass: i,
                port: s,
                projectId: a,
                protocol: o,
                publicKey: h
              } = e;
              return `${o}://${h}${t && i ? `:${i}` : ""}@${n}${s ? `:${s}` : ""}/${r ? `${r}/` : r}${a}`;
            }
            function I(e) {
              return {
                protocol: e.protocol,
                publicKey: e.publicKey || "",
                pass: e.pass || "",
                host: e.host,
                port: e.port || "",
                path: e.path || "",
                projectId: e.projectId
              };
            }
            var L = n(52879);
            var j = n(92575);
            function B(e, t = []) {
              return [e, t];
            }
            function D(e, t) {
              const [n, r] = e;
              return [n, [...r, t]];
            }
            function F(e, t) {
              const n = e[1];
              for (const e of n) {
                if (t(e, e[0].type)) {
                  return true;
                }
              }
              return false;
            }
            function N(e) {
              if (j.O.__SENTRY__ && j.O.__SENTRY__.encodePolyfill) {
                return j.O.__SENTRY__.encodePolyfill(e);
              } else {
                return new TextEncoder().encode(e);
              }
            }
            function G(e) {
              const [t, n] = e;
              let r = JSON.stringify(t);
              function i(e) {
                if (typeof r == "string") {
                  r = typeof e == "string" ? r + e : [N(r), e];
                } else {
                  r.push(typeof e == "string" ? N(e) : e);
                }
              }
              for (const e of n) {
                const [t, n] = e;
                i(`\n${JSON.stringify(t)}\n`);
                if (typeof n == "string" || n instanceof Uint8Array) {
                  i(n);
                } else {
                  let e;
                  try {
                    e = JSON.stringify(n);
                  } catch (t) {
                    e = JSON.stringify((0, L.S8)(n));
                  }
                  i(e);
                }
              }
              if (typeof r == "string") {
                return r;
              } else {
                return function (e) {
                  const t = e.reduce((e, t) => e + t.length, 0);
                  const n = new Uint8Array(t);
                  let r = 0;
                  for (const t of e) {
                    n.set(t, r);
                    r += t.length;
                  }
                  return n;
                }(r);
              }
            }
            function U(e) {
              const t = typeof e.data == "string" ? N(e.data) : e.data;
              return [(0, b.Ce)({
                type: "attachment",
                length: t.length,
                filename: e.filename,
                content_type: e.contentType,
                attachment_type: e.attachmentType
              }), t];
            }
            const V = {
              session: "session",
              sessions: "session",
              attachment: "attachment",
              transaction: "transaction",
              event: "error",
              client_report: "internal",
              user_report: "default",
              profile: "profile",
              profile_chunk: "profile",
              replay_event: "replay",
              replay_recording: "replay",
              check_in: "monitor",
              feedback: "feedback",
              span: "span",
              statsd: "metric_bucket",
              raw_security: "security"
            };
            function H(e) {
              return V[e];
            }
            function z(e) {
              if (!e || !e.sdk) {
                return;
              }
              const {
                name: t,
                version: n
              } = e.sdk;
              return {
                name: t,
                version: n
              };
            }
            var W = n(59328);
            var X = n(46932);
            var Y = n(90519);
            class q extends Error {
              constructor(e, t = "warn") {
                super(e);
                this.message = e;
                this.logLevel = t;
              }
            }
            var J = n(30690);
            var K = n(20572);
            var Z = n(45333);
            var $ = n(21544);
            class Q {
              constructor(e) {
                this._options = e;
                this._integrations = {};
                this._numProcessing = 0;
                this._outcomes = {};
                this._hooks = {};
                this._eventProcessors = [];
                if (e.dsn) {
                  this._dsn = function (e) {
                    const t = typeof e == "string" ? function (e) {
                      const t = M.exec(e);
                      if (!t) {
                        (0, c.pq)(() => {});
                        return;
                      }
                      const [n, r, i = "", s = "", a = "", o = ""] = t.slice(1);
                      let h = "";
                      let l = o;
                      const d = l.split("/");
                      if (d.length > 1) {
                        h = d.slice(0, -1).join("/");
                        l = d.pop();
                      }
                      if (l) {
                        const e = l.match(/^\d+/);
                        if (e) {
                          l = e[0];
                        }
                      }
                      return I({
                        host: s,
                        pass: i,
                        path: h,
                        projectId: l,
                        port: a,
                        protocol: n,
                        publicKey: r
                      });
                    }(e) : I(e);
                    if (t) {
                      return t;
                    }
                  }(e.dsn);
                }
                if (this._dsn) {
                  t = this._dsn;
                  n = e.tunnel;
                  r = e._metadata ? e._metadata.sdk : undefined;
                  const i = n || `${function (e) {
                    return `${function (e) {
                      const t = e.protocol ? `${e.protocol}:` : "";
                      const n = e.port ? `:${e.port}` : "";
                      return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`;
                    }(e)}${e.projectId}/envelope/`;
                  }(t)}?${function (e, t) {
                    const n = {
                      sentry_version: "7"
                    };
                    if (e.publicKey) {
                      n.sentry_key = e.publicKey;
                    }
                    if (t) {
                      n.sentry_client = `${t.name}/${t.version}`;
                    }
                    return new URLSearchParams(n).toString();
                  }(t, r)}`;
                  this._transport = e.transport({
                    tunnel: this._options.tunnel,
                    recordDroppedEvent: this.recordDroppedEvent.bind(this),
                    ...e.transportOptions,
                    url: i
                  });
                }
                var t;
                var n;
                var r;
                if (["enableTracing", "tracesSampleRate", "tracesSampler"].find(t => t in e && e[t] == null)) {
                  (0, c.pq)(() => {});
                }
              }
              captureException(e, t, n) {
                const r = (0, _.eJ)();
                if ((0, _.GR)(e)) {
                  return r;
                }
                const i = {
                  event_id: r,
                  ...t
                };
                this._process(this.eventFromException(e, i).then(e => this._captureEvent(e, i, n)));
                return i.event_id;
              }
              captureMessage(e, t, n, r) {
                const i = {
                  event_id: (0, _.eJ)(),
                  ...n
                };
                const s = (0, J.NF)(e) ? e : String(e);
                const a = (0, J.sO)(e) ? this.eventFromMessage(s, t, i) : this.eventFromException(e, i);
                this._process(a.then(e => this._captureEvent(e, i, r)));
                return i.event_id;
              }
              captureEvent(e, t, n) {
                const r = (0, _.eJ)();
                if (t && t.originalException && (0, _.GR)(t.originalException)) {
                  return r;
                }
                const i = {
                  event_id: r,
                  ...t
                };
                const s = (e.sdkProcessingMetadata || {}).capturedSpanScope;
                this._process(this._captureEvent(e, i, s || n));
                return i.event_id;
              }
              captureSession(e) {
                if (typeof e.release == "string") {
                  this.sendSession(e);
                  (0, W.qO)(e, {
                    init: false
                  });
                }
              }
              getDsn() {
                return this._dsn;
              }
              getOptions() {
                return this._options;
              }
              getSdkMetadata() {
                return this._options._metadata;
              }
              getTransport() {
                return this._transport;
              }
              flush(e) {
                const t = this._transport;
                if (t) {
                  this.emit("flush");
                  return this._isClientDoneProcessing(e).then(n => t.flush(e).then(e => n && e));
                } else {
                  return (0, K.XW)(true);
                }
              }
              close(e) {
                return this.flush(e).then(e => {
                  this.getOptions().enabled = false;
                  this.emit("close");
                  return e;
                });
              }
              getEventProcessors() {
                return this._eventProcessors;
              }
              addEventProcessor(e) {
                this._eventProcessors.push(e);
              }
              init() {
                if (this._isEnabled() || this._options.integrations.some(({
                  name: e
                }) => e.startsWith("Spotlight"))) {
                  this._setupIntegrations();
                }
              }
              getIntegrationByName(e) {
                return this._integrations[e];
              }
              addIntegration(e) {
                const t = this._integrations[e.name];
                f(this, e, this._integrations);
                if (!t) {
                  m(this, [e]);
                }
              }
              sendEvent(e, t = {}) {
                this.emit("beforeSendEvent", e, t);
                let n = function (e, t, n, r) {
                  const i = z(n);
                  const s = e.type && e.type !== "replay_event" ? e.type : "event";
                  (function (e, t) {
                    if (t) {
                      e.sdk = e.sdk || {};
                      e.sdk.name = e.sdk.name || t.name;
                      e.sdk.version = e.sdk.version || t.version;
                      e.sdk.integrations = [...(e.sdk.integrations || []), ...(t.integrations || [])];
                      e.sdk.packages = [...(e.sdk.packages || []), ...(t.packages || [])];
                    }
                  })(e, n && n.sdk);
                  const a = function (e, t, n, r) {
                    const i = e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
                    return {
                      event_id: e.event_id,
                      sent_at: new Date().toISOString(),
                      ...(t && {
                        sdk: t
                      }),
                      ...(!!n && r && {
                        dsn: R(r)
                      }),
                      ...(i && {
                        trace: (0, b.Ce)({
                          ...i
                        })
                      })
                    };
                  }(e, i, r, t);
                  delete e.sdkProcessingMetadata;
                  return B(a, [[{
                    type: s
                  }, e]]);
                }(e, this._dsn, this._options._metadata, this._options.tunnel);
                for (const e of t.attachments || []) {
                  n = D(n, U(e));
                }
                const r = this.sendEnvelope(n);
                if (r) {
                  r.then(t => this.emit("afterSendEvent", e, t), null);
                }
              }
              sendSession(e) {
                const t = function (e, t, n, r) {
                  const i = z(n);
                  return B({
                    sent_at: new Date().toISOString(),
                    ...(i && {
                      sdk: i
                    }),
                    ...(!!r && t && {
                      dsn: R(t)
                    })
                  }, ["aggregates" in e ? [{
                    type: "sessions"
                  }, e] : [{
                    type: "session"
                  }, e.toJSON()]]);
                }(e, this._dsn, this._options._metadata, this._options.tunnel);
                this.sendEnvelope(t);
              }
              recordDroppedEvent(e, t, n) {
                if (this._options.sendClientReports) {
                  const r = typeof n == "number" ? n : 1;
                  const i = `${e}:${t}`;
                  this._outcomes[i] = (this._outcomes[i] || 0) + r;
                }
              }
              on(e, t) {
                const n = this._hooks[e] = this._hooks[e] || [];
                n.push(t);
                return () => {
                  const e = n.indexOf(t);
                  if (e > -1) {
                    n.splice(e, 1);
                  }
                };
              }
              emit(e, ...t) {
                const n = this._hooks[e];
                if (n) {
                  n.forEach(e => e(...t));
                }
              }
              sendEnvelope(e) {
                this.emit("beforeEnvelope", e);
                if (this._isEnabled() && this._transport) {
                  return this._transport.send(e).then(null, e => e);
                } else {
                  return (0, K.XW)({});
                }
              }
              _setupIntegrations() {
                const {
                  integrations: e
                } = this._options;
                this._integrations = function (e, t) {
                  const n = {};
                  t.forEach(t => {
                    if (t) {
                      f(e, t, n);
                    }
                  });
                  return n;
                }(this, e);
                m(this, e);
              }
              _updateSessionFromEvent(e, t) {
                let n = t.level === "fatal";
                let r = false;
                const i = t.exception && t.exception.values;
                if (i) {
                  r = true;
                  for (const e of i) {
                    const t = e.mechanism;
                    if (t && t.handled === false) {
                      n = true;
                      break;
                    }
                  }
                }
                const s = e.status === "ok";
                if (s && e.errors === 0 || s && n) {
                  (0, W.qO)(e, {
                    ...(n && {
                      status: "crashed"
                    }),
                    errors: e.errors || Number(r || n)
                  });
                  this.captureSession(e);
                }
              }
              _isClientDoneProcessing(e) {
                return new K.T2(t => {
                  let n = 0;
                  const r = setInterval(() => {
                    if (this._numProcessing == 0) {
                      clearInterval(r);
                      t(true);
                    } else {
                      n += 1;
                      if (e && n >= e) {
                        clearInterval(r);
                        t(false);
                      }
                    }
                  }, 1);
                });
              }
              _isEnabled() {
                return this.getOptions().enabled !== false && this._transport !== undefined;
              }
              _prepareEvent(e, t, n = (0, x.o5)(), r = (0, x.rm)()) {
                const i = this.getOptions();
                const s = Object.keys(this._integrations);
                if (!t.integrations && s.length > 0) {
                  t.integrations = s;
                }
                this.emit("preprocessEvent", e, t);
                if (!e.type) {
                  r.setLastEventId(e.event_id || t.event_id);
                }
                return (0, Z.mG)(i, e, t, n, this, r).then(e => {
                  if (e === null) {
                    return e;
                  }
                  e.contexts = {
                    trace: (0, x.vn)(n),
                    ...e.contexts
                  };
                  const t = (0, X.ao)(this, n);
                  e.sdkProcessingMetadata = {
                    dynamicSamplingContext: t,
                    ...e.sdkProcessingMetadata
                  };
                  return e;
                });
              }
              _captureEvent(e, t = {}, n) {
                return this._processEvent(e, t, n).then(e => e.event_id, e => {});
              }
              _processEvent(e, t, n) {
                const r = this.getOptions();
                const {
                  sampleRate: i
                } = r;
                const s = te(e);
                const a = ee(e);
                const o = e.type || "error";
                const h = `before send for type \`${o}\``;
                const l = i === undefined ? undefined : function (e) {
                  if (typeof e == "boolean") {
                    return Number(e);
                  }
                  const t = typeof e == "string" ? parseFloat(e) : e;
                  if (typeof t != "number" || isNaN(t) || t < 0 || t > 1) {
                    return undefined;
                  } else {
                    return t;
                  }
                }(i);
                if (a && typeof l == "number" && Math.random() > l) {
                  this.recordDroppedEvent("sample_rate", "error", e);
                  return (0, K.xg)(new q(`Discarding event because it's not included in the random sample (sampling rate = ${i})`, "log"));
                }
                const d = o === "replay_event" ? "replay" : o;
                const c = (e.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
                return this._prepareEvent(e, t, n, c).then(n => {
                  if (n === null) {
                    this.recordDroppedEvent("event_processor", d, e);
                    throw new q("An event processor returned `null`, will not send event.", "log");
                  }
                  if (t.data && t.data.__sentry__ === true) {
                    return n;
                  }
                  const i = function (e, t, n, r) {
                    const {
                      beforeSend: i,
                      beforeSendTransaction: s,
                      beforeSendSpan: a
                    } = t;
                    if (ee(n) && i) {
                      return i(n, r);
                    }
                    if (te(n)) {
                      if (n.spans && a) {
                        const t = [];
                        for (const r of n.spans) {
                          const n = a(r);
                          if (n) {
                            t.push(n);
                          } else {
                            (0, $.xl)();
                            e.recordDroppedEvent("before_send", "span");
                          }
                        }
                        n.spans = t;
                      }
                      if (s) {
                        if (n.spans) {
                          const e = n.spans.length;
                          n.sdkProcessingMetadata = {
                            ...n.sdkProcessingMetadata,
                            spanCountBeforeProcessing: e
                          };
                        }
                        return s(n, r);
                      }
                    }
                    return n;
                  }(this, r, n, t);
                  return function (e, t) {
                    const n = `${t} must return \`null\` or a valid event.`;
                    if ((0, J.Qg)(e)) {
                      return e.then(e => {
                        if (!(0, J.Qd)(e) && e !== null) {
                          throw new q(n);
                        }
                        return e;
                      }, e => {
                        throw new q(`${t} rejected with ${e}`);
                      });
                    }
                    if (!(0, J.Qd)(e) && e !== null) {
                      throw new q(n);
                    }
                    return e;
                  }(i, h);
                }).then(r => {
                  if (r === null) {
                    this.recordDroppedEvent("before_send", d, e);
                    if (s) {
                      const t = 1 + (e.spans || []).length;
                      this.recordDroppedEvent("before_send", "span", t);
                    }
                    throw new q(`${h} returned \`null\`, will not send event.`, "log");
                  }
                  const i = n && n.getSession();
                  if (!s && i) {
                    this._updateSessionFromEvent(i, r);
                  }
                  if (s) {
                    const e = (r.sdkProcessingMetadata && r.sdkProcessingMetadata.spanCountBeforeProcessing || 0) - (r.spans ? r.spans.length : 0);
                    if (e > 0) {
                      this.recordDroppedEvent("before_send", "span", e);
                    }
                  }
                  const a = r.transaction_info;
                  if (s && a && r.transaction !== e.transaction) {
                    const e = "custom";
                    r.transaction_info = {
                      ...a,
                      source: e
                    };
                  }
                  this.sendEvent(r, t);
                  return r;
                }).then(null, e => {
                  if (e instanceof q) {
                    throw e;
                  }
                  this.captureException(e, {
                    data: {
                      __sentry__: true
                    },
                    originalException: e
                  });
                  throw new q(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${e}`);
                });
              }
              _process(e) {
                this._numProcessing++;
                e.then(e => {
                  this._numProcessing--;
                  return e;
                }, e => {
                  this._numProcessing--;
                  return e;
                });
              }
              _clearOutcomes() {
                const e = this._outcomes;
                this._outcomes = {};
                return Object.entries(e).map(([e, t]) => {
                  const [n, r] = e.split(":");
                  return {
                    reason: n,
                    category: r,
                    quantity: t
                  };
                });
              }
              _flushOutcomes() {
                const e = this._clearOutcomes();
                if (e.length === 0) {
                  return;
                }
                if (!this._dsn) {
                  return;
                }
                n = e;
                const t = B((r = this._options.tunnel && R(this._dsn)) ? {
                  dsn: r
                } : {}, [[{
                  type: "client_report"
                }, {
                  timestamp: (0, Y.lu)(),
                  discarded_events: n
                }]]);
                var n;
                var r;
                this.sendEnvelope(t);
              }
            }
            function ee(e) {
              return e.type === undefined;
            }
            function te(e) {
              return e.type === "transaction";
            }
            function ne(e, t) {
              const n = ie(e, t);
              const r = {
                type: oe(t),
                value: he(t)
              };
              if (n.length) {
                r.stacktrace = {
                  frames: n
                };
              }
              if (r.type === undefined && r.value === "") {
                r.value = "Unrecoverable error caught";
              }
              return r;
            }
            function re(e, t) {
              return {
                exception: {
                  values: [ne(e, t)]
                }
              };
            }
            function ie(e, t) {
              const n = t.stacktrace || t.stack || "";
              const r = function (e) {
                if (e && se.test(e.message)) {
                  return 1;
                } else {
                  return 0;
                }
              }(t);
              const i = function (e) {
                if (typeof e.framesToPop == "number") {
                  return e.framesToPop;
                } else {
                  return 0;
                }
              }(t);
              try {
                return e(n, r, i);
              } catch (e) {}
              return [];
            }
            const se = /Minified React error #\d+;/i;
            function ae(e) {
              return typeof WebAssembly != "undefined" && WebAssembly.Exception !== undefined && e instanceof WebAssembly.Exception;
            }
            function oe(e) {
              const t = e && e.name;
              if (!t && ae(e)) {
                if (e.message && Array.isArray(e.message) && e.message.length == 2) {
                  return e.message[0];
                } else {
                  return "WebAssembly.Exception";
                }
              } else {
                return t;
              }
            }
            function he(e) {
              const t = e && e.message;
              if (t) {
                if (t.error && typeof t.error.message == "string") {
                  return t.error.message;
                } else if (ae(e) && Array.isArray(e.message) && e.message.length == 2) {
                  return e.message[1];
                } else {
                  return t;
                }
              } else {
                return "No error message";
              }
            }
            function le(e, t, n, r, i) {
              let s;
              if ((0, J.T2)(t) && t.error) {
                return re(e, t.error);
              }
              if ((0, J.BD)(t) || (0, J.W6)(t)) {
                const i = t;
                if ("stack" in t) {
                  s = re(e, t);
                } else {
                  const t = i.name || ((0, J.BD)(i) ? "DOMError" : "DOMException");
                  const a = i.message ? `${t}: ${i.message}` : t;
                  s = de(e, a, n, r);
                  (0, _.gO)(s, a);
                }
                if ("code" in i) {
                  s.tags = {
                    ...s.tags,
                    "DOMException.code": `${i.code}`
                  };
                }
                return s;
              }
              if ((0, J.bJ)(t)) {
                return re(e, t);
              } else if ((0, J.Qd)(t) || (0, J.xH)(t)) {
                s = function (e, t, n, r) {
                  const i = (0, x.KU)();
                  const s = i && i.getOptions().normalizeDepth;
                  const a = function (e) {
                    for (const t in e) {
                      if (Object.prototype.hasOwnProperty.call(e, t)) {
                        const n = e[t];
                        if (n instanceof Error) {
                          return n;
                        }
                      }
                    }
                  }(t);
                  const o = {
                    __serialized__: (0, L.cd)(t, s)
                  };
                  if (a) {
                    return {
                      exception: {
                        values: [ne(e, a)]
                      },
                      extra: o
                    };
                  }
                  const h = {
                    exception: {
                      values: [{
                        type: (0, J.xH)(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error",
                        value: ce(t, {
                          isUnhandledRejection: r
                        })
                      }]
                    },
                    extra: o
                  };
                  if (n) {
                    const t = ie(e, n);
                    if (t.length) {
                      h.exception.values[0].stacktrace = {
                        frames: t
                      };
                    }
                  }
                  return h;
                }(e, t, n, i);
                (0, _.M6)(s, {
                  synthetic: true
                });
                return s;
              } else {
                s = de(e, t, n, r);
                (0, _.gO)(s, `${t}`, undefined);
                (0, _.M6)(s, {
                  synthetic: true
                });
                return s;
              }
            }
            function de(e, t, n, r) {
              const i = {};
              if (r && n) {
                const r = ie(e, n);
                if (r.length) {
                  i.exception = {
                    values: [{
                      value: t,
                      stacktrace: {
                        frames: r
                      }
                    }]
                  };
                }
                (0, _.M6)(i, {
                  synthetic: true
                });
              }
              if ((0, J.NF)(t)) {
                const {
                  __sentry_template_string__: e,
                  __sentry_template_values__: n
                } = t;
                i.logentry = {
                  message: e,
                  params: n
                };
                return i;
              }
              i.message = t;
              return i;
            }
            function ce(e, {
              isUnhandledRejection: t
            }) {
              const n = (0, b.HF)(e);
              const r = t ? "promise rejection" : "exception";
              if ((0, J.T2)(e)) {
                return `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\``;
              } else if ((0, J.xH)(e)) {
                return `Event \`${function (e) {
                  try {
                    const t = Object.getPrototypeOf(e);
                    if (t) {
                      return t.constructor.name;
                    } else {
                      return undefined;
                    }
                  } catch (e) {}
                }(e)}\` (type=${e.type}) captured as ${r}`;
              } else {
                return `Object captured as ${r} with keys: ${n}`;
              }
            }
            var ue = n(64251);
            const pe = j.O;
            let me = 0;
            function fe() {
              return me > 0;
            }
            function _e(e, t = {}) {
              if (!function (e) {
                return typeof e == "function";
              }(e)) {
                return e;
              }
              try {
                const t = e.__sentry_wrapped__;
                if (t) {
                  if (typeof t == "function") {
                    return t;
                  } else {
                    return e;
                  }
                }
                if ((0, b.sp)(e)) {
                  return e;
                }
              } catch (t) {
                return e;
              }
              const n = function (...n) {
                try {
                  const r = n.map(e => _e(e, t));
                  return e.apply(this, r);
                } catch (e) {
                  me++;
                  setTimeout(() => {
                    me--;
                  });
                  (0, x.v4)(r => {
                    r.addEventProcessor(e => {
                      if (t.mechanism) {
                        (0, _.gO)(e, undefined, undefined);
                        (0, _.M6)(e, t.mechanism);
                      }
                      e.extra = {
                        ...e.extra,
                        arguments: n
                      };
                      return e;
                    });
                    (0, ue.Cp)(e);
                  });
                  throw e;
                }
              };
              try {
                for (const t in e) {
                  if (Object.prototype.hasOwnProperty.call(e, t)) {
                    n[t] = e[t];
                  }
                }
              } catch (e) {}
              (0, b.pO)(n, e);
              (0, b.my)(e, "__sentry_wrapped__", n);
              try {
                if (Object.getOwnPropertyDescriptor(n, "name").configurable) {
                  Object.defineProperty(n, "name", {
                    get: () => e.name
                  });
                }
              } catch (e) {}
              return n;
            }
            class ve extends Q {
              constructor(e) {
                const t = {
                  parentSpanIsAlwaysRootSpan: true,
                  ...e
                };
                (function (e, t, n = [t], r = "npm") {
                  const i = e._metadata || {};
                  i.sdk ||= {
                    name: `sentry.javascript.${t}`,
                    packages: n.map(e => ({
                      name: `${r}:@sentry/${e}`,
                      version: "8.55.2"
                    })),
                    version: "8.55.2"
                  };
                  e._metadata = i;
                })(t, "browser", ["browser"], pe.SENTRY_SDK_SOURCE || "npm");
                super(t);
                if (t.sendClientReports && pe.document) {
                  pe.document.addEventListener("visibilitychange", () => {
                    if (pe.document.visibilityState === "hidden") {
                      this._flushOutcomes();
                    }
                  });
                }
              }
              eventFromException(e, t) {
                return function (e, t, n, r) {
                  const i = le(e, t, n && n.syntheticException || undefined, r);
                  (0, _.M6)(i);
                  i.level = "error";
                  if (n && n.event_id) {
                    i.event_id = n.event_id;
                  }
                  return (0, K.XW)(i);
                }(this._options.stackParser, e, t, this._options.attachStacktrace);
              }
              eventFromMessage(e, t = "info", n) {
                return function (e, t, n = "info", r, i) {
                  const s = de(e, t, r && r.syntheticException || undefined, i);
                  s.level = n;
                  if (r && r.event_id) {
                    s.event_id = r.event_id;
                  }
                  return (0, K.XW)(s);
                }(this._options.stackParser, e, t, n, this._options.attachStacktrace);
              }
              captureUserFeedback(e) {
                if (!this._isEnabled()) {
                  return;
                }
                const t = function (e, {
                  metadata: t,
                  tunnel: n,
                  dsn: r
                }) {
                  const i = {
                    event_id: e.event_id,
                    sent_at: new Date().toISOString(),
                    ...(t && t.sdk && {
                      sdk: {
                        name: t.sdk.name,
                        version: t.sdk.version
                      }
                    }),
                    ...(!!n && !!r && {
                      dsn: R(r)
                    })
                  };
                  const s = function (e) {
                    return [{
                      type: "user_report"
                    }, e];
                  }(e);
                  return B(i, [s]);
                }(e, {
                  metadata: this.getSdkMetadata(),
                  dsn: this.getDsn(),
                  tunnel: this.getOptions().tunnel
                });
                this.sendEnvelope(t);
              }
              _prepareEvent(e, t, n) {
                e.platform = e.platform || "javascript";
                return super._prepareEvent(e, t, n);
              }
            }
            const ye = {};
            const ge = {};
            function we(e, t) {
              ye[e] = ye[e] || [];
              ye[e].push(t);
            }
            function xe(e, t) {
              if (!ge[e]) {
                ge[e] = true;
                try {
                  t();
                } catch (e) {}
              }
            }
            function be(e, t) {
              const n = e && ye[e];
              if (n) {
                for (const e of n) {
                  try {
                    e(t);
                  } catch (e) {}
                }
              }
            }
            const Te = j.O;
            let Ae;
            let Ce;
            let Se;
            function Ee() {
              if (!Te.document) {
                return;
              }
              const e = be.bind(null, "dom");
              const t = Oe(e, true);
              Te.document.addEventListener("click", t, false);
              Te.document.addEventListener("keypress", t, false);
              ["EventTarget", "Node"].forEach(t => {
                const n = Te[t];
                const r = n && n.prototype;
                if (r && r.hasOwnProperty && r.hasOwnProperty("addEventListener")) {
                  (0, b.GS)(r, "addEventListener", function (t) {
                    return function (n, r, i) {
                      if (n === "click" || n == "keypress") {
                        try {
                          const r = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {};
                          const s = r[n] = r[n] || {
                            refCount: 0
                          };
                          if (!s.handler) {
                            const r = Oe(e);
                            s.handler = r;
                            t.call(this, n, r, i);
                          }
                          s.refCount++;
                        } catch (e) {}
                      }
                      return t.call(this, n, r, i);
                    };
                  });
                  (0, b.GS)(r, "removeEventListener", function (e) {
                    return function (t, n, r) {
                      if (t === "click" || t == "keypress") {
                        try {
                          const n = this.__sentry_instrumentation_handlers__ || {};
                          const i = n[t];
                          if (i) {
                            i.refCount--;
                            if (i.refCount <= 0) {
                              e.call(this, t, i.handler, r);
                              i.handler = undefined;
                              delete n[t];
                            }
                            if (Object.keys(n).length === 0) {
                              delete this.__sentry_instrumentation_handlers__;
                            }
                          }
                        } catch (e) {}
                      }
                      return e.call(this, t, n, r);
                    };
                  });
                }
              });
            }
            function Oe(e, t = false) {
              return n => {
                if (!n || n._sentryCaptured) {
                  return;
                }
                const r = function (e) {
                  try {
                    return e.target;
                  } catch (e) {
                    return null;
                  }
                }(n);
                if (function (e, t) {
                  return e === "keypress" && (!t || !t.tagName || t.tagName !== "INPUT" && t.tagName !== "TEXTAREA" && !t.isContentEditable);
                }(n.type, r)) {
                  return;
                }
                (0, b.my)(n, "_sentryCaptured", true);
                if (r && !r._sentryId) {
                  (0, b.my)(r, "_sentryId", (0, _.eJ)());
                }
                const i = n.type === "keypress" ? "input" : n.type;
                if (!function (e) {
                  if (e.type !== Ce) {
                    return false;
                  }
                  try {
                    if (!e.target || e.target._sentryId !== Se) {
                      return false;
                    }
                  } catch (e) {}
                  return true;
                }(n)) {
                  e({
                    event: n,
                    name: i,
                    global: t
                  });
                  Ce = n.type;
                  Se = r ? r._sentryId : undefined;
                }
                clearTimeout(Ae);
                Ae = Te.setTimeout(() => {
                  Se = undefined;
                  Ce = undefined;
                }, 1000);
              };
            }
            const ke = "__sentry_xhr_v3__";
            function Pe() {
              if (!Te.XMLHttpRequest) {
                return;
              }
              const e = XMLHttpRequest.prototype;
              e.open = new Proxy(e.open, {
                apply(e, t, n) {
                  const r = new Error();
                  const i = (0, Y.zf)() * 1000;
                  const s = (0, J.Kg)(n[0]) ? n[0].toUpperCase() : undefined;
                  const a = function (e) {
                    if ((0, J.Kg)(e)) {
                      return e;
                    }
                    try {
                      return e.toString();
                    } catch (e) {}
                  }(n[1]);
                  if (!s || !a) {
                    return e.apply(t, n);
                  }
                  t[ke] = {
                    method: s,
                    url: a,
                    request_headers: {}
                  };
                  if (s === "POST" && a.match(/sentry_key/)) {
                    t.__sentry_own_request__ = true;
                  }
                  const o = () => {
                    const e = t[ke];
                    if (e && t.readyState === 4) {
                      try {
                        e.status_code = t.status;
                      } catch (e) {}
                      be("xhr", {
                        endTimestamp: (0, Y.zf)() * 1000,
                        startTimestamp: i,
                        xhr: t,
                        virtualError: r
                      });
                    }
                  };
                  if ("onreadystatechange" in t && typeof t.onreadystatechange == "function") {
                    t.onreadystatechange = new Proxy(t.onreadystatechange, {
                      apply: (e, t, n) => {
                        o();
                        return e.apply(t, n);
                      }
                    });
                  } else {
                    t.addEventListener("readystatechange", o);
                  }
                  t.setRequestHeader = new Proxy(t.setRequestHeader, {
                    apply(e, t, n) {
                      const [r, i] = n;
                      const s = t[ke];
                      if (s && (0, J.Kg)(r) && (0, J.Kg)(i)) {
                        s.request_headers[r.toLowerCase()] = i;
                      }
                      return e.apply(t, n);
                    }
                  });
                  return e.apply(t, n);
                }
              });
              e.send = new Proxy(e.send, {
                apply(e, t, n) {
                  const r = t[ke];
                  if (r) {
                    if (n[0] !== undefined) {
                      r.body = n[0];
                    }
                    be("xhr", {
                      startTimestamp: (0, Y.zf)() * 1000,
                      xhr: t
                    });
                    return e.apply(t, n);
                  } else {
                    return e.apply(t, n);
                  }
                }
              });
            }
            const Me = j.O;
            let Re;
            function Ie(e) {
              const t = "history";
              we(t, e);
              xe(t, Le);
            }
            function Le() {
              if (!function () {
                const e = Me.chrome;
                const t = e && e.app && e.app.runtime;
                const n = "history" in Me && !!Me.history.pushState && !!Me.history.replaceState;
                return !t && n;
              }()) {
                return;
              }
              const e = Te.onpopstate;
              function t(e) {
                return function (...t) {
                  const n = t.length > 2 ? t[2] : undefined;
                  if (n) {
                    const e = Re;
                    const t = String(n);
                    Re = t;
                    be("history", {
                      from: e,
                      to: t
                    });
                  }
                  return e.apply(this, t);
                };
              }
              Te.onpopstate = function (...t) {
                const n = Te.location.href;
                const r = Re;
                Re = n;
                be("history", {
                  from: r,
                  to: n
                });
                if (e) {
                  try {
                    return e.apply(this, t);
                  } catch (e) {}
                }
              };
              (0, b.GS)(Te.history, "pushState", t);
              (0, b.GS)(Te.history, "replaceState", t);
            }
            function je() {
              if ("console" in j.O) {
                c.Ow.forEach(function (e) {
                  if (e in j.O.console) {
                    (0, b.GS)(j.O.console, e, function (t) {
                      c.Z9[e] = t;
                      return function (...t) {
                        be("console", {
                          args: t,
                          level: e
                        });
                        const n = c.Z9[e];
                        if (n) {
                          n.apply(j.O.console, t);
                        }
                      };
                    });
                  }
                });
              }
            }
            const Be = j.O;
            function De(e) {
              return e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString());
            }
            function Fe(e, t) {
              return !!e && typeof e == "object" && !!e[t];
            }
            function Ne(e) {
              if (typeof e == "string") {
                return e;
              } else if (e) {
                if (Fe(e, "url")) {
                  return e.url;
                } else if (e.toString) {
                  return e.toString();
                } else {
                  return "";
                }
              } else {
                return "";
              }
            }
            var Ge = n(6810);
            var Ue = n(87320);
            function Ve(e) {
              if (e === undefined) {
                return undefined;
              } else if (e >= 400 && e < 500) {
                return "warning";
              } else if (e >= 500) {
                return "error";
              } else {
                return undefined;
              }
            }
            function He(e) {
              if (!e) {
                return {};
              }
              const t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
              if (!t) {
                return {};
              }
              const n = t[6] || "";
              const r = t[8] || "";
              return {
                host: t[4],
                path: t[5],
                protocol: t[2],
                search: n,
                hash: r,
                relative: t[5] + n + r
              };
            }
            const ze = (e = {}) => {
              const t = {
                console: true,
                dom: true,
                fetch: true,
                history: true,
                sentry: true,
                xhr: true,
                ...e
              };
              return {
                name: "Breadcrumbs",
                setup(e) {
                  var n;
                  if (t.console) {
                    (function (e) {
                      const t = "console";
                      we(t, e);
                      xe(t, je);
                    })(function (e) {
                      return function (t) {
                        if ((0, x.KU)() !== e) {
                          return;
                        }
                        const n = {
                          category: "console",
                          data: {
                            arguments: t.args,
                            logger: "console"
                          },
                          level: (r = t.level, r === "warn" ? "warning" : ["fatal", "error", "warning", "log", "info", "debug"].includes(r) ? r : "log"),
                          message: (0, v.gt)(t.args, " ")
                        };
                        var r;
                        if (t.level === "assert") {
                          if (t.args[0] !== false) {
                            return;
                          }
                          n.message = `Assertion failed: ${(0, v.gt)(t.args.slice(1), " ") || "console.assert"}`;
                          n.data.arguments = t.args.slice(1);
                        }
                        (0, Ge.Z)(n, {
                          input: t.args,
                          level: t.level
                        });
                      };
                    }(e));
                  }
                  if (t.dom) {
                    n = function (e, t) {
                      return function (n) {
                        if ((0, x.KU)() !== e) {
                          return;
                        }
                        let r;
                        let i;
                        let s = typeof t == "object" ? t.serializeAttribute : undefined;
                        let a = typeof t == "object" && typeof t.maxStringLength == "number" ? t.maxStringLength : undefined;
                        if (a && a > 1024) {
                          a = 1024;
                        }
                        if (typeof s == "string") {
                          s = [s];
                        }
                        try {
                          const e = n.event;
                          const t = function (e) {
                            return !!e && !!e.target;
                          }(e) ? e.target : e;
                          r = (0, Ue.Hd)(t, {
                            keyAttrs: s,
                            maxStringLength: a
                          });
                          i = (0, Ue.xE)(t);
                        } catch (e) {
                          r = "<unknown>";
                        }
                        if (r.length === 0) {
                          return;
                        }
                        const o = {
                          category: `ui.${n.name}`,
                          message: r
                        };
                        if (i) {
                          o.data = {
                            "ui.component_name": i
                          };
                        }
                        (0, Ge.Z)(o, {
                          event: n.event,
                          name: n.name,
                          global: n.global
                        });
                      };
                    }(e, t.dom);
                    we("dom", n);
                    xe("dom", Ee);
                  }
                  if (t.xhr) {
                    (function (e) {
                      we("xhr", e);
                      xe("xhr", Pe);
                    })(function (e) {
                      return function (t) {
                        if ((0, x.KU)() !== e) {
                          return;
                        }
                        const {
                          startTimestamp: n,
                          endTimestamp: r
                        } = t;
                        const i = t.xhr[ke];
                        if (!n || !r || !i) {
                          return;
                        }
                        const {
                          method: s,
                          url: a,
                          status_code: o,
                          body: h
                        } = i;
                        const l = {
                          method: s,
                          url: a,
                          status_code: o
                        };
                        const d = {
                          xhr: t.xhr,
                          input: h,
                          startTimestamp: n,
                          endTimestamp: r
                        };
                        const c = Ve(o);
                        (0, Ge.Z)({
                          category: "xhr",
                          data: l,
                          type: "http",
                          level: c
                        }, d);
                      };
                    }(e));
                  }
                  if (t.fetch) {
                    (function (e) {
                      const t = "fetch";
                      we(t, e);
                      xe(t, () => function (e, t = false) {
                        if (!t || !!function () {
                          if (typeof EdgeRuntime == "string") {
                            return true;
                          }
                          if (!function () {
                            if (!("fetch" in Be)) {
                              return false;
                            }
                            try {
                              new Headers();
                              new Request("http://www.example.com");
                              new Response();
                              return true;
                            } catch (e) {
                              return false;
                            }
                          }()) {
                            return false;
                          }
                          if (De(Be.fetch)) {
                            return true;
                          }
                          let e = false;
                          const t = Be.document;
                          if (t && typeof t.createElement == "function") {
                            try {
                              const n = t.createElement("iframe");
                              n.hidden = true;
                              t.head.appendChild(n);
                              if (n.contentWindow && n.contentWindow.fetch) {
                                e = De(n.contentWindow.fetch);
                              }
                              t.head.removeChild(n);
                            } catch (e) {}
                          }
                          return e;
                        }()) {
                          (0, b.GS)(j.O, "fetch", function (t) {
                            return function (...n) {
                              const r = new Error();
                              const {
                                method: i,
                                url: s
                              } = function (e) {
                                if (e.length === 0) {
                                  return {
                                    method: "GET",
                                    url: ""
                                  };
                                }
                                if (e.length === 2) {
                                  const [t, n] = e;
                                  return {
                                    url: Ne(t),
                                    method: Fe(n, "method") ? String(n.method).toUpperCase() : "GET"
                                  };
                                }
                                const t = e[0];
                                return {
                                  url: Ne(t),
                                  method: Fe(t, "method") ? String(t.method).toUpperCase() : "GET"
                                };
                              }(n);
                              const a = {
                                args: n,
                                fetchData: {
                                  method: i,
                                  url: s
                                },
                                startTimestamp: (0, Y.zf)() * 1000,
                                virtualError: r
                              };
                              if (!e) {
                                be("fetch", {
                                  ...a
                                });
                              }
                              return t.apply(j.O, n).then(async t => {
                                if (e) {
                                  e(t);
                                } else {
                                  be("fetch", {
                                    ...a,
                                    endTimestamp: (0, Y.zf)() * 1000,
                                    response: t
                                  });
                                }
                                return t;
                              }, e => {
                                be("fetch", {
                                  ...a,
                                  endTimestamp: (0, Y.zf)() * 1000,
                                  error: e
                                });
                                if ((0, J.bJ)(e) && e.stack === undefined) {
                                  e.stack = r.stack;
                                  (0, b.my)(e, "framesToPop", 1);
                                }
                                throw e;
                              });
                            };
                          });
                        }
                      }(undefined, undefined));
                    })(function (e) {
                      return function (t) {
                        if ((0, x.KU)() !== e) {
                          return;
                        }
                        const {
                          startTimestamp: n,
                          endTimestamp: r
                        } = t;
                        if (r && (!t.fetchData.url.match(/sentry_key/) || t.fetchData.method !== "POST")) {
                          if (t.error) {
                            const e = t.fetchData;
                            const i = {
                              data: t.error,
                              input: t.args,
                              startTimestamp: n,
                              endTimestamp: r
                            };
                            (0, Ge.Z)({
                              category: "fetch",
                              data: e,
                              level: "error",
                              type: "http"
                            }, i);
                          } else {
                            const e = t.response;
                            const i = {
                              ...t.fetchData,
                              status_code: e && e.status
                            };
                            const s = {
                              input: t.args,
                              response: e,
                              startTimestamp: n,
                              endTimestamp: r
                            };
                            const a = Ve(i.status_code);
                            (0, Ge.Z)({
                              category: "fetch",
                              data: i,
                              type: "http",
                              level: a
                            }, s);
                          }
                        }
                      };
                    }(e));
                  }
                  if (t.history) {
                    Ie(function (e) {
                      return function (t) {
                        if ((0, x.KU)() !== e) {
                          return;
                        }
                        let n = t.from;
                        let r = t.to;
                        const i = He(pe.location.href);
                        let s = n ? He(n) : undefined;
                        const a = He(r);
                        if (!s || !s.path) {
                          s = i;
                        }
                        if (i.protocol === a.protocol && i.host === a.host) {
                          r = a.relative;
                        }
                        if (i.protocol === s.protocol && i.host === s.host) {
                          n = s.relative;
                        }
                        (0, Ge.Z)({
                          category: "navigation",
                          data: {
                            from: n,
                            to: r
                          }
                        });
                      };
                    }(e));
                  }
                  if (t.sentry) {
                    e.on("beforeSendEvent", function (e) {
                      return function (t) {
                        if ((0, x.KU)() === e) {
                          (0, Ge.Z)({
                            category: "sentry." + (t.type === "transaction" ? "transaction" : "event"),
                            event_id: t.event_id,
                            level: t.level,
                            message: (0, _.$X)(t)
                          }, {
                            event: t
                          });
                        }
                      };
                    }(e));
                  }
                }
              };
            };
            const We = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"];
            const Xe = (e = {}) => {
              const t = {
                XMLHttpRequest: true,
                eventTarget: true,
                requestAnimationFrame: true,
                setInterval: true,
                setTimeout: true,
                ...e
              };
              return {
                name: "BrowserApiErrors",
                setupOnce() {
                  if (t.setTimeout) {
                    (0, b.GS)(pe, "setTimeout", Ye);
                  }
                  if (t.setInterval) {
                    (0, b.GS)(pe, "setInterval", Ye);
                  }
                  if (t.requestAnimationFrame) {
                    (0, b.GS)(pe, "requestAnimationFrame", qe);
                  }
                  if (t.XMLHttpRequest && "XMLHttpRequest" in pe) {
                    (0, b.GS)(XMLHttpRequest.prototype, "send", Je);
                  }
                  const e = t.eventTarget;
                  if (e) {
                    (Array.isArray(e) ? e : We).forEach(Ke);
                  }
                }
              };
            };
            function Ye(e) {
              return function (...t) {
                const n = t[0];
                t[0] = _e(n, {
                  mechanism: {
                    data: {
                      function: (0, S.qQ)(e)
                    },
                    handled: false,
                    type: "instrument"
                  }
                });
                return e.apply(this, t);
              };
            }
            function qe(e) {
              return function (t) {
                return e.apply(this, [_e(t, {
                  mechanism: {
                    data: {
                      function: "requestAnimationFrame",
                      handler: (0, S.qQ)(e)
                    },
                    handled: false,
                    type: "instrument"
                  }
                })]);
              };
            }
            function Je(e) {
              return function (...t) {
                const n = this;
                ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(e => {
                  if (e in n && typeof n[e] == "function") {
                    (0, b.GS)(n, e, function (t) {
                      const n = {
                        mechanism: {
                          data: {
                            function: e,
                            handler: (0, S.qQ)(t)
                          },
                          handled: false,
                          type: "instrument"
                        }
                      };
                      const r = (0, b.sp)(t);
                      if (r) {
                        n.mechanism.data.handler = (0, S.qQ)(r);
                      }
                      return _e(t, n);
                    });
                  }
                });
                return e.apply(this, t);
              };
            }
            function Ke(e) {
              const t = pe[e];
              const n = t && t.prototype;
              if (n && n.hasOwnProperty && n.hasOwnProperty("addEventListener")) {
                (0, b.GS)(n, "addEventListener", function (t) {
                  return function (n, r, i) {
                    try {
                      if (typeof r.handleEvent == "function") {
                        r.handleEvent = _e(r.handleEvent, {
                          mechanism: {
                            data: {
                              function: "handleEvent",
                              handler: (0, S.qQ)(r),
                              target: e
                            },
                            handled: false,
                            type: "instrument"
                          }
                        });
                      }
                    } catch (e) {}
                    return t.apply(this, [n, _e(r, {
                      mechanism: {
                        data: {
                          function: "addEventListener",
                          handler: (0, S.qQ)(r),
                          target: e
                        },
                        handled: false,
                        type: "instrument"
                      }
                    }), i]);
                  };
                });
                (0, b.GS)(n, "removeEventListener", function (e) {
                  return function (t, n, r) {
                    try {
                      const i = n.__sentry_wrapped__;
                      if (i) {
                        e.call(this, t, i, r);
                      }
                    } catch (e) {}
                    return e.call(this, t, n, r);
                  };
                });
              }
            }
            let Ze = null;
            function $e() {
              Ze = j.O.onerror;
              j.O.onerror = function (e, t, n, r, i) {
                be("error", {
                  column: r,
                  error: i,
                  line: n,
                  msg: e,
                  url: t
                });
                return !!Ze && Ze.apply(this, arguments);
              };
              j.O.onerror.__SENTRY_INSTRUMENTED__ = true;
            }
            let Qe = null;
            function et() {
              Qe = j.O.onunhandledrejection;
              j.O.onunhandledrejection = function (e) {
                be("unhandledrejection", e);
                return !Qe || Qe.apply(this, arguments);
              };
              j.O.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
            }
            const tt = (e = {}) => {
              const t = {
                onerror: true,
                onunhandledrejection: true,
                ...e
              };
              return {
                name: "GlobalHandlers",
                setupOnce() {
                  Error.stackTraceLimit = 50;
                },
                setup(e) {
                  if (t.onerror) {
                    (function (e) {
                      (function () {
                        const t = "error";
                        we(t, t => {
                          const {
                            stackParser: n,
                            attachStacktrace: r
                          } = nt();
                          if ((0, x.KU)() !== e || fe()) {
                            return;
                          }
                          const {
                            msg: i,
                            url: s,
                            line: a,
                            column: o,
                            error: h
                          } = t;
                          const l = function (e, t, n, r) {
                            const i = e.exception = e.exception || {};
                            const s = i.values = i.values || [];
                            const a = s[0] = s[0] || {};
                            const o = a.stacktrace = a.stacktrace || {};
                            const h = o.frames = o.frames || [];
                            const l = r;
                            const d = n;
                            const c = (0, J.Kg)(t) && t.length > 0 ? t : (0, Ue.$N)();
                            if (h.length === 0) {
                              h.push({
                                colno: l,
                                filename: c,
                                function: "?",
                                in_app: true,
                                lineno: d
                              });
                            }
                            return e;
                          }(le(n, h || i, undefined, r, false), s, a, o);
                          l.level = "error";
                          (0, ue.r)(l, {
                            originalException: h,
                            mechanism: {
                              handled: false,
                              type: "onerror"
                            }
                          });
                        });
                        xe(t, $e);
                      })();
                    })(e);
                  }
                  if (t.onunhandledrejection) {
                    (function (e) {
                      (function () {
                        const t = "unhandledrejection";
                        we(t, t => {
                          const {
                            stackParser: n,
                            attachStacktrace: r
                          } = nt();
                          if ((0, x.KU)() !== e || fe()) {
                            return;
                          }
                          const i = function (e) {
                            if ((0, J.sO)(e)) {
                              return e;
                            }
                            try {
                              if ("reason" in e) {
                                return e.reason;
                              }
                              if ("detail" in e && "reason" in e.detail) {
                                return e.detail.reason;
                              }
                            } catch (e) {}
                            return e;
                          }(t);
                          const s = (0, J.sO)(i) ? {
                            exception: {
                              values: [{
                                type: "UnhandledRejection",
                                value: `Non-Error promise rejection captured with value: ${String(i)}`
                              }]
                            }
                          } : le(n, i, undefined, r, true);
                          s.level = "error";
                          (0, ue.r)(s, {
                            originalException: i,
                            mechanism: {
                              handled: false,
                              type: "onunhandledrejection"
                            }
                          });
                        });
                        xe(t, et);
                      })();
                    })(e);
                  }
                }
              };
            };
            function nt() {
              const e = (0, x.KU)();
              return e && e.getOptions() || {
                stackParser: () => [],
                attachStacktrace: false
              };
            }
            function rt(e, t, n = 250, r, i, s, a) {
              if (!s.exception || !s.exception.values || !a || !(0, J.tH)(a.originalException, Error)) {
                return;
              }
              const o = s.exception.values.length > 0 ? s.exception.values[s.exception.values.length - 1] : undefined;
              var h;
              var l;
              if (o) {
                s.exception.values = (h = it(e, t, i, a.originalException, r, s.exception.values, o, 0), l = n, h.map(e => {
                  e.value &&= (0, v.xv)(e.value, l);
                  return e;
                }));
              }
            }
            function it(e, t, n, r, i, s, a, o) {
              if (s.length >= n + 1) {
                return s;
              }
              let h = [...s];
              if ((0, J.tH)(r[i], Error)) {
                st(a, o);
                const s = e(t, r[i]);
                const l = h.length;
                at(s, i, l, o);
                h = it(e, t, n, r[i], i, [s, ...h], s, l);
              }
              if (Array.isArray(r.errors)) {
                r.errors.forEach((r, s) => {
                  if ((0, J.tH)(r, Error)) {
                    st(a, o);
                    const l = e(t, r);
                    const d = h.length;
                    at(l, `errors[${s}]`, d, o);
                    h = it(e, t, n, r, i, [l, ...h], l, d);
                  }
                });
              }
              return h;
            }
            function st(e, t) {
              e.mechanism = e.mechanism || {
                type: "generic",
                handled: true
              };
              e.mechanism = {
                ...e.mechanism,
                ...(e.type === "AggregateError" && {
                  is_exception_group: true
                }),
                exception_id: t
              };
            }
            function at(e, t, n, r) {
              e.mechanism = e.mechanism || {
                type: "generic",
                handled: true
              };
              e.mechanism = {
                ...e.mechanism,
                type: "chained",
                source: t,
                exception_id: n,
                parent_id: r
              };
            }
            const ot = (e = {}) => {
              const t = e.limit || 5;
              const n = e.key || "cause";
              return {
                name: "LinkedErrors",
                preprocessEvent(e, r, i) {
                  const s = i.getOptions();
                  rt(ne, s.stackParser, s.maxValueLength, n, t, e, r);
                }
              };
            };
            function ht(e, t, n, r) {
              const i = {
                filename: e,
                function: t === "<anonymous>" ? "?" : t,
                in_app: true
              };
              if (n !== undefined) {
                i.lineno = n;
              }
              if (r !== undefined) {
                i.colno = r;
              }
              return i;
            }
            const lt = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i;
            const dt = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
            const ct = /\((\S*)(?::(\d+))(?::(\d+))\)/;
            const ut = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
            const pt = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
            const mt = [[30, e => {
              const t = lt.exec(e);
              if (t) {
                const [, e, n, r] = t;
                return ht(e, "?", +n, +r);
              }
              const n = dt.exec(e);
              if (n) {
                if (n[2] && n[2].indexOf("eval") === 0) {
                  const e = ct.exec(n[2]);
                  if (e) {
                    n[2] = e[1];
                    n[3] = e[2];
                    n[4] = e[3];
                  }
                }
                const [e, t] = _t(n[1] || "?", n[2]);
                return ht(t, e, n[3] ? +n[3] : undefined, n[4] ? +n[4] : undefined);
              }
            }], [50, e => {
              const t = ut.exec(e);
              if (t) {
                if (t[3] && t[3].indexOf(" > eval") > -1) {
                  const e = pt.exec(t[3]);
                  if (e) {
                    t[1] = t[1] || "eval";
                    t[3] = e[1];
                    t[4] = e[2];
                    t[5] = "";
                  }
                }
                let e = t[3];
                let n = t[1] || "?";
                [n, e] = _t(n, e);
                return ht(e, n, t[4] ? +t[4] : undefined, t[5] ? +t[5] : undefined);
              }
            }]];
            const ft = (0, S.gd)(...mt);
            const _t = (e, t) => {
              const n = e.indexOf("safari-extension") !== -1;
              const r = e.indexOf("safari-web-extension") !== -1;
              if (n || r) {
                return [e.indexOf("@") !== -1 ? e.split("@")[0] : "?", n ? `safari-extension:${t}` : `safari-web-extension:${t}`];
              } else {
                return [e, t];
              }
            };
            const vt = {};
            function yt(e) {
              vt[e] = undefined;
            }
            function gt(e, t) {
              if (t === "event" || t === "transaction") {
                if (Array.isArray(e)) {
                  return e[1];
                } else {
                  return undefined;
                }
              }
            }
            function wt(e, t = function (e) {
              const t = vt[e];
              if (t) {
                return t;
              }
              let n = Te[e];
              if (De(n)) {
                return vt[e] = n.bind(Te);
              }
              const r = Te.document;
              if (r && typeof r.createElement == "function") {
                try {
                  const t = r.createElement("iframe");
                  t.hidden = true;
                  r.head.appendChild(t);
                  const i = t.contentWindow;
                  if (i && i[e]) {
                    n = i[e];
                  }
                  r.head.removeChild(t);
                } catch (e) {}
              }
              if (n) {
                return vt[e] = n.bind(Te);
              } else {
                return n;
              }
            }("fetch")) {
              let n = 0;
              let r = 0;
              return function (e, t, n = function (e) {
                const t = [];
                function n(e) {
                  return t.splice(t.indexOf(e), 1)[0] || Promise.resolve(undefined);
                }
                return {
                  $: t,
                  add: function (r) {
                    if (e !== undefined && !(t.length < e)) {
                      return (0, K.xg)(new q("Not adding Promise because buffer limit was reached."));
                    }
                    const i = r();
                    if (t.indexOf(i) === -1) {
                      t.push(i);
                    }
                    i.then(() => n(i)).then(null, () => n(i).then(null, () => {}));
                    return i;
                  },
                  drain: function (e) {
                    return new K.T2((n, r) => {
                      let i = t.length;
                      if (!i) {
                        return n(true);
                      }
                      const s = setTimeout(() => {
                        if (e && e > 0) {
                          n(false);
                        }
                      }, e);
                      t.forEach(e => {
                        (0, K.XW)(e).then(() => {
                          if (! --i) {
                            clearTimeout(s);
                            n(true);
                          }
                        }, r);
                      });
                    });
                  }
                };
              }(e.bufferSize || 64)) {
                let r = {};
                return {
                  send: function (i) {
                    const s = [];
                    F(i, (t, n) => {
                      const i = H(n);
                      if (function (e, t, n = Date.now()) {
                        return function (e, t) {
                          return e[t] || e.all || 0;
                        }(e, t) > n;
                      }(r, i)) {
                        const r = gt(t, n);
                        e.recordDroppedEvent("ratelimit_backoff", i, r);
                      } else {
                        s.push(t);
                      }
                    });
                    if (s.length === 0) {
                      return (0, K.XW)({});
                    }
                    const a = B(i[0], s);
                    const o = t => {
                      F(a, (n, r) => {
                        const i = gt(n, r);
                        e.recordDroppedEvent(t, H(r), i);
                      });
                    };
                    return n.add(() => t({
                      body: G(a)
                    }).then(e => {
                      if (e.statusCode !== undefined) {
                        if (!(e.statusCode < 200)) {
                          e.statusCode;
                        }
                      }
                      r = function (e, {
                        statusCode: t,
                        headers: n
                      }, r = Date.now()) {
                        const i = {
                          ...e
                        };
                        const s = n && n["x-sentry-rate-limits"];
                        const a = n && n["retry-after"];
                        if (s) {
                          for (const e of s.trim().split(",")) {
                            const [t, n,,, s] = e.split(":", 5);
                            const a = parseInt(t, 10);
                            const o = (isNaN(a) ? 60 : a) * 1000;
                            if (n) {
                              for (const e of n.split(";")) {
                                if (e !== "metric_bucket" || !s || !!s.split(";").includes("custom")) {
                                  i[e] = r + o;
                                }
                              }
                            } else {
                              i.all = r + o;
                            }
                          }
                        } else if (a) {
                          i.all = r + function (e, t = Date.now()) {
                            const n = parseInt(`${e}`, 10);
                            if (!isNaN(n)) {
                              return n * 1000;
                            }
                            const r = Date.parse(`${e}`);
                            if (isNaN(r)) {
                              return 60000;
                            } else {
                              return r - t;
                            }
                          }(a, r);
                        } else if (t === 429) {
                          i.all = r + 60000;
                        }
                        return i;
                      }(r, e);
                      return e;
                    }, e => {
                      o("network_error");
                      throw e;
                    })).then(e => e, e => {
                      if (e instanceof q) {
                        o("queue_overflow");
                        return (0, K.XW)({});
                      }
                      throw e;
                    });
                  },
                  flush: e => n.drain(e)
                };
              }(e, function (i) {
                const s = i.body.length;
                n += s;
                r++;
                const a = {
                  body: i.body,
                  method: "POST",
                  referrerPolicy: "origin",
                  headers: e.headers,
                  keepalive: n <= 60000 && r < 15,
                  ...e.fetchOptions
                };
                if (!t) {
                  yt("fetch");
                  return (0, K.xg)("No fetch implementation available");
                }
                try {
                  return t(e.url, a).then(e => {
                    n -= s;
                    r--;
                    return {
                      statusCode: e.status,
                      headers: {
                        "x-sentry-rate-limits": e.headers.get("X-Sentry-Rate-Limits"),
                        "retry-after": e.headers.get("Retry-After")
                      }
                    };
                  });
                } catch (e) {
                  yt("fetch");
                  n -= s;
                  r--;
                  return (0, K.xg)(e);
                }
              });
            }
            function xt(e) {
              const t = [g(), C(), Xe(), ze(), tt(), ot(), E(), {
                name: "HttpContext",
                preprocessEvent(e) {
                  if (!pe.navigator && !pe.location && !pe.document) {
                    return;
                  }
                  const t = e.request && e.request.url || pe.location && pe.location.href;
                  const {
                    referrer: n
                  } = pe.document || {};
                  const {
                    userAgent: r
                  } = pe.navigator || {};
                  const i = {
                    ...(e.request && e.request.headers),
                    ...(n && {
                      Referer: n
                    }),
                    ...(r && {
                      "User-Agent": r
                    })
                  };
                  const s = {
                    ...e.request,
                    ...(t && {
                      url: t
                    }),
                    headers: i
                  };
                  e.request = s;
                }
              }];
              if (e.autoSessionTracking !== false) {
                t.push({
                  name: "BrowserSession",
                  setupOnce() {
                    if (pe.document !== undefined) {
                      (0, ue.J0)({
                        ignoreDuration: true
                      });
                      (0, ue.J5)();
                      Ie(({
                        from: e,
                        to: t
                      }) => {
                        if (e !== undefined && e !== t) {
                          (0, ue.J0)({
                            ignoreDuration: true
                          });
                          (0, ue.J5)();
                        }
                      });
                    }
                  }
                });
              }
              return t;
            }
            const bt = {
              localhost: {
                dsn: "https://558bea16176abff21c4b0f1a93c08932@sentry.totaljerkface.com/4"
              },
              "totaljerkface.com": {
                dsn: "https://3284adeae688992a7a84a6d3ddedad95@sentry.totaljerkface.com/2",
                allowUrlRegexes: ["https:\\/\\/(\\.)?totaljerkface\\.com\\/happy-wheels-js\\/js\\/.*\\.js"]
              },
              "beta.totaljerkface.com": {
                dsn: "https://2e1b9e5d00d7b7a329f362e863845b7a@sentry.totaljerkface.com/3",
                allowUrlRegexes: ["https:\\/\\/(\\.)?beta.totaljerkface\\.com\\/happy-wheels-js\\/js\\/.*\\.js"]
              }
            };
            var Tt = n(35057);
            var At = n(87186);
            var Ct = n(71500);
            var St = n(38473);
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
            n(62010);
            n(2892);
            n(34782);
            n(2008);
            a();
            s();
            n(42762);
            i();
            n(26910);
            n(16034);
            n(45700);
            n(89572);
            n(79432);
            n(83851);
            n(23500);
            n(81278);
            var Et;
            var Ot = n(4971);
            function kt() {
              var e;
              var t;
              var n = typeof Symbol == "function" ? Symbol : {};
              var r = n.iterator || "@@iterator";
              var i = n.toStringTag || "@@toStringTag";
              function s(n, r, i, s) {
                var h = r && r.prototype instanceof o ? r : o;
                var l = Object.create(h.prototype);
                Pt(l, "_invoke", function (n, r, i) {
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
              var d = [][r] ? t(t([][r]())) : (Pt(t = {}, r, function () {
                return this;
              }), t);
              var c = l.prototype = o.prototype = Object.create(d);
              function u(e) {
                if (Object.setPrototypeOf) {
                  Object.setPrototypeOf(e, l);
                } else {
                  e.__proto__ = l;
                  Pt(e, i, "GeneratorFunction");
                }
                e.prototype = Object.create(c);
                return e;
              }
              h.prototype = l;
              Pt(c, "constructor", l);
              Pt(l, "constructor", h);
              h.displayName = "GeneratorFunction";
              Pt(l, i, "GeneratorFunction");
              Pt(c);
              Pt(c, i, "Generator");
              Pt(c, r, function () {
                return this;
              });
              Pt(c, "toString", function () {
                return "[object Generator]";
              });
              return (kt = function () {
                return {
                  w: s,
                  m: u
                };
              })();
            }
            function Pt(e, t, n, r) {
              var i = Object.defineProperty;
              try {
                i({}, "", {});
              } catch (e) {
                i = 0;
              }
              Pt = function (e, t, n, r) {
                function s(t, n) {
                  Pt(e, t, function (e) {
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
              Pt(e, t, n, r);
            }
            function Mt(e, t, n, r, i, s, a) {
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
            o.loU.buildPoly.triangulate = d.oe;
            (0, d.L3)();
            window.ASSET_URL = "./";
            function Rt() {
              window.scrollTo(0, 0);
              Et.resize();
            }
            function It() {
              o.WpD.skipHello();
              if (new l.Bq().supported) {
                Tt.w.sharedObject = Ot.T6.getLocal("options135");
                if (Tt.w.sharedObject.data.mobileControlOverride) {
                  Tt.w.mobileControlOverride = Tt.w.sharedObject.data.mobileControlOverride;
                }
                try {
                  Tt.w.rootApp = Et = new h.l();
                } catch (e) {
                  alert("There was an issue while starting up. Your browser probably doesn't support WebGL (or it's disabled).\n\nError: " + e);
                  throw e;
                }
                var e = document.getElementById("og-game-holder");
                e.appendChild(Et.view);
                e.style.background = "#3d88c7";
                Et.view.style.position = "absolute";
                Et.view.style.top = "0px";
                Et.view.style.left = "0px";
                window.addEventListener("resize", function () {
                  Rt();
                });
                Rt();
                document.body.style.backgroundColor = "black";
                if (Tt.w.showAdvancedStats) {
                  Tt.w.moreStatsDisplay = new St.Z();
                }
              } else {
                alert("Sorry, your browser doesn't support WebGL (or it's disabled).");
              }
            }
            function Lt() {
              return (e = kt().m(function e() {
                return kt().w(function (e) {
                  while (true) {
                    switch (e.n) {
                      case 0:
                        e.n = 1;
                        break;
                      case 1:
                        e.n = 2;
                        return Promise.all([(0, At.A)("./assets-111pu7do4muiyxxfu/fonts/ClarendonLTStd-Bold.css", "Clarendon LT Std Bold"), (0, At.A)("./assets-111pu7do4muiyxxfu/fonts/HelveticaNeueLTStd-Roman.css", "HelveticaNeueLT Std")]);
                      case 2:
                        It();
                      case 3:
                        return e.a(2);
                    }
                  }
                }, e);
              }), Lt = function () {
                var t = this;
                var n = arguments;
                return new Promise(function (r, i) {
                  var s = e.apply(t, n);
                  function a(e) {
                    Mt(s, r, i, a, o, "next", e);
                  }
                  function o(e) {
                    Mt(s, r, i, a, o, "throw", e);
                  }
                  a(undefined);
                });
              }).apply(this, arguments);
              var e;
            }
            Ct.os.defaults({
              overwrite: "auto"
            });
            (function () {
              var e = document.location.hostname;
              var t = bt[e];
              if (t !== undefined) {
                var n = Tt.w.CURRENT_VERSION_STRING;
                var r = {
                  dsn: t.dsn,
                  release: n,
                  maxBreadcrumbs: 150,
                  beforeBreadcrumb: function (e, t) {
                    if (e.category === "xhr" && e.data.url.indexOf("assets-111pu7do4muiyxxfu/") > -1 || e.category === "console" && e.level === "warning" && e.message.startsWith("Texture added to the cache with an id [")) {
                      return null;
                    } else {
                      return e;
                    }
                  }
                };
                if (t.tunnel !== undefined && t.tunnel !== null) {
                  r.tunnel = t.tunnel;
                }
                if (t.allowUrls !== undefined) {
                  var i = t.allowUrlRegexes.map(function (e) {
                    return new RegExp(e);
                  });
                  r.allowUrls = i;
                }
                (function (e = {}) {
                  const t = function (e = {}) {
                    const t = {
                      defaultIntegrations: xt(e),
                      release: typeof __SENTRY_RELEASE__ == "string" ? __SENTRY_RELEASE__ : pe.SENTRY_RELEASE && pe.SENTRY_RELEASE.id ? pe.SENTRY_RELEASE.id : undefined,
                      autoSessionTracking: true,
                      sendClientReports: true
                    };
                    if (e.defaultIntegrations == null) {
                      delete e.defaultIntegrations;
                    }
                    return {
                      ...t,
                      ...e
                    };
                  }(e);
                  if (!t.skipBrowserExtensionCheck && function () {
                    const e = pe.window !== undefined && pe;
                    if (!e) {
                      return false;
                    }
                    const t = e[e.chrome ? "chrome" : "browser"];
                    const n = t && t.runtime && t.runtime.id;
                    const r = pe.location && pe.location.href || "";
                    const i = !!n && pe === pe.top && ["chrome-extension:", "moz-extension:", "ms-browser-extension:", "safari-web-extension:"].some(e => r.startsWith(`${e}//`));
                    const s = e.nw !== undefined;
                    return !!n && !i && !s;
                  }()) {
                    (0, c.pq)(() => {});
                    return;
                  }
                  const n = {
                    ...t,
                    stackParser: (0, S.vk)(t.stackParser || ft),
                    integrations: p(t),
                    transport: t.transport || wt
                  };
                  (function (e, t) {
                    if (t.debug === true) {
                      (0, c.pq)(() => {});
                    }
                    (0, x.o5)().update(t.initialScope);
                    const n = new e(t);
                    (function (e) {
                      (0, x.o5)().setClient(e);
                    })(n);
                    n.init();
                  })(ve, n);
                })(r);
                if (window.HW_SETTINGS.user_id !== undefined && window.HW_SETTINGS.user_id !== null) {
                  ue.gV({
                    id: window.HW_SETTINGS.user_id.toString(),
                    username: window.HW_SETTINGS.username
                  });
                }
                ue.NA("mobile_controls_enabled", Tt.w.mobileControls);
              }
            })();
            (function () {
              Lt.apply(this, arguments);
            })();
            document.getElementById("og-game-holder").onwheel = function (e) {
              e.preventDefault();
            };
          }
    });
})();
