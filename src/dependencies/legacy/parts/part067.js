(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        6810(e, t, n) {
            "use strict";
        
            n.d(t, {
              Z: () => o
            });
            var r = n(41186);
            var i = n(5602);
            var s = n(90519);
            const a = 100;
            function o(e, t) {
              const n = (0, r.KU)();
              const o = (0, r.rm)();
              if (!n) {
                return;
              }
              const {
                beforeBreadcrumb: h = null,
                maxBreadcrumbs: l = a
              } = n.getOptions();
              if (l <= 0) {
                return;
              }
              const d = {
                timestamp: (0, s.lu)(),
                ...e
              };
              const c = h ? (0, i.pq)(() => h(d, t)) : d;
              if (c !== null) {
                if (n.emit) {
                  n.emit("beforeAddBreadcrumb", c, t);
                }
                o.addBreadcrumb(c, l);
              }
            }
          },
        7313(e, t, n) {
            "use strict";
        
            n.d(t, ["U", 0, "production"]);
          },
        41186(e, t, n) {
            "use strict";
        
            n.d(t, {
              KU: () => g,
              o5: () => f,
              m6: () => v,
              rm: () => _,
              vn: () => w,
              v4: () => y
            });
            var r = n(92575);
            function i() {
              s(r.O);
              return r.O;
            }
            function s(e) {
              const t = e.__SENTRY__ = e.__SENTRY__ || {};
              t.version = t.version || "8.55.2";
              return t["8.55.2"] = t["8.55.2"] || {};
            }
            var a = n(19841);
            var o = n(30690);
            class h {
              constructor(e, t) {
                let n;
                let r;
                n = e || new a.H();
                r = t || new a.H();
                this._stack = [{
                  scope: n
                }];
                this._isolationScope = r;
              }
              withScope(e) {
                const t = this._pushScope();
                let n;
                try {
                  n = e(t);
                } catch (e) {
                  this._popScope();
                  throw e;
                }
                if ((0, o.Qg)(n)) {
                  return n.then(e => {
                    this._popScope();
                    return e;
                  }, e => {
                    this._popScope();
                    throw e;
                  });
                } else {
                  this._popScope();
                  return n;
                }
              }
              getClient() {
                return this.getStackTop().client;
              }
              getScope() {
                return this.getStackTop().scope;
              }
              getIsolationScope() {
                return this._isolationScope;
              }
              getStackTop() {
                return this._stack[this._stack.length - 1];
              }
              _pushScope() {
                const e = this.getScope().clone();
                this._stack.push({
                  client: this.getClient(),
                  scope: e
                });
                return e;
              }
              _popScope() {
                return !(this._stack.length <= 1) && !!this._stack.pop();
              }
            }
            function l() {
              const e = s(i());
              return e.stack = e.stack || new h((0, r.B)("defaultCurrentScope", () => new a.H()), (0, r.B)("defaultIsolationScope", () => new a.H()));
            }
            function d(e) {
              return l().withScope(e);
            }
            function c(e, t) {
              const n = l();
              return n.withScope(() => {
                n.getStackTop().scope = e;
                return t(e);
              });
            }
            function u(e) {
              return l().withScope(() => e(l().getIsolationScope()));
            }
            function p(e) {
              const t = s(e);
              if (t.acs) {
                return t.acs;
              } else {
                return {
                  withIsolationScope: u,
                  withScope: d,
                  withSetScope: c,
                  withSetIsolationScope: (e, t) => u(t),
                  getCurrentScope: () => l().getScope(),
                  getIsolationScope: () => l().getIsolationScope()
                };
              }
            }
            var m = n(40873);
            function f() {
              return p(i()).getCurrentScope();
            }
            function _() {
              return p(i()).getIsolationScope();
            }
            function v() {
              return (0, r.B)("globalScope", () => new a.H());
            }
            function y(...e) {
              const t = p(i());
              if (e.length === 2) {
                const [n, r] = e;
                if (n) {
                  return t.withSetScope(n, r);
                } else {
                  return t.withScope(r);
                }
              }
              return t.withScope(e[0]);
            }
            function g() {
              return f().getClient();
            }
            function w(e) {
              const t = e.getPropagationContext();
              const {
                traceId: n,
                spanId: r,
                parentSpanId: i
              } = t;
              return (0, m.Ce)({
                trace_id: n,
                span_id: r,
                parent_span_id: i
              });
            }
          },
        64251(e, t, n) {
            "use strict";
        
            n.d(t, {
              Cp: () => h,
              J0: () => u,
              J5: () => f,
              NA: () => d,
              gV: () => c,
              r: () => l
            });
            var r = n(7313);
            var i = n(41186);
            var s = n(59328);
            var a = n(92575);
            var o = n(45333);
            function h(e, t) {
              return (0, i.o5)().captureException(e, (0, o.li)(t));
            }
            function l(e, t) {
              return (0, i.o5)().captureEvent(e, t);
            }
            function d(e, t) {
              (0, i.rm)().setTag(e, t);
            }
            function c(e) {
              (0, i.rm)().setUser(e);
            }
            function u(e) {
              const t = (0, i.KU)();
              const n = (0, i.rm)();
              const o = (0, i.o5)();
              const {
                release: h,
                environment: l = r.U
              } = t && t.getOptions() || {};
              const {
                userAgent: d
              } = a.O.navigator || {};
              const c = (0, s.fj)({
                release: h,
                environment: l,
                user: o.getUser() || n.getUser(),
                ...(d && {
                  userAgent: d
                }),
                ...e
              });
              const u = n.getSession();
              if (u && u.status === "ok") {
                (0, s.qO)(u, {
                  status: "exited"
                });
              }
              p();
              n.setSession(c);
              o.setSession(c);
              return c;
            }
            function p() {
              const e = (0, i.rm)();
              const t = (0, i.o5)();
              const n = t.getSession() || e.getSession();
              if (n) {
                (0, s.Vu)(n);
              }
              m();
              e.setSession();
              t.setSession();
            }
            function m() {
              const e = (0, i.rm)();
              const t = (0, i.o5)();
              const n = (0, i.KU)();
              const r = t.getSession() || e.getSession();
              if (r && n) {
                n.captureSession(r);
              }
            }
            function f(e = false) {
              if (e) {
                p();
              } else {
                m();
              }
            }
          },
        19841(e, t, n) {
            "use strict";
        
            n.d(t, {
              H: () => f
            });
            var r = n(59328);
            var i = n(30690);
            var s = n(5602);
            var a = n(44910);
            var o = n(30243);
            var h = n(90519);
            var l = n(45734);
            var d = n(40873);
            const c = "_sentrySpan";
            function u(e, t) {
              if (t) {
                (0, d.my)(e, c, t);
              } else {
                delete e[c];
              }
            }
            function p(e) {
              return e[c];
            }
            class m {
              constructor() {
                this._notifyingListeners = false;
                this._scopeListeners = [];
                this._eventProcessors = [];
                this._breadcrumbs = [];
                this._attachments = [];
                this._user = {};
                this._tags = {};
                this._extra = {};
                this._contexts = {};
                this._sdkProcessingMetadata = {};
                this._propagationContext = {
                  traceId: (0, o.el)(),
                  spanId: (0, o.ZF)()
                };
              }
              clone() {
                const e = new m();
                e._breadcrumbs = [...this._breadcrumbs];
                e._tags = {
                  ...this._tags
                };
                e._extra = {
                  ...this._extra
                };
                e._contexts = {
                  ...this._contexts
                };
                if (this._contexts.flags) {
                  e._contexts.flags = {
                    values: [...this._contexts.flags.values]
                  };
                }
                e._user = this._user;
                e._level = this._level;
                e._session = this._session;
                e._transactionName = this._transactionName;
                e._fingerprint = this._fingerprint;
                e._eventProcessors = [...this._eventProcessors];
                e._requestSession = this._requestSession;
                e._attachments = [...this._attachments];
                e._sdkProcessingMetadata = {
                  ...this._sdkProcessingMetadata
                };
                e._propagationContext = {
                  ...this._propagationContext
                };
                e._client = this._client;
                e._lastEventId = this._lastEventId;
                u(e, p(this));
                return e;
              }
              setClient(e) {
                this._client = e;
              }
              setLastEventId(e) {
                this._lastEventId = e;
              }
              getClient() {
                return this._client;
              }
              lastEventId() {
                return this._lastEventId;
              }
              addScopeListener(e) {
                this._scopeListeners.push(e);
              }
              addEventProcessor(e) {
                this._eventProcessors.push(e);
                return this;
              }
              setUser(e) {
                this._user = e || {
                  email: undefined,
                  id: undefined,
                  ip_address: undefined,
                  username: undefined
                };
                if (this._session) {
                  (0, r.qO)(this._session, {
                    user: e
                  });
                }
                this._notifyScopeListeners();
                return this;
              }
              getUser() {
                return this._user;
              }
              getRequestSession() {
                return this._requestSession;
              }
              setRequestSession(e) {
                this._requestSession = e;
                return this;
              }
              setTags(e) {
                this._tags = {
                  ...this._tags,
                  ...e
                };
                this._notifyScopeListeners();
                return this;
              }
              setTag(e, t) {
                this._tags = {
                  ...this._tags,
                  [e]: t
                };
                this._notifyScopeListeners();
                return this;
              }
              setExtras(e) {
                this._extra = {
                  ...this._extra,
                  ...e
                };
                this._notifyScopeListeners();
                return this;
              }
              setExtra(e, t) {
                this._extra = {
                  ...this._extra,
                  [e]: t
                };
                this._notifyScopeListeners();
                return this;
              }
              setFingerprint(e) {
                this._fingerprint = e;
                this._notifyScopeListeners();
                return this;
              }
              setLevel(e) {
                this._level = e;
                this._notifyScopeListeners();
                return this;
              }
              setTransactionName(e) {
                this._transactionName = e;
                this._notifyScopeListeners();
                return this;
              }
              setContext(e, t) {
                if (t === null) {
                  delete this._contexts[e];
                } else {
                  this._contexts[e] = t;
                }
                this._notifyScopeListeners();
                return this;
              }
              setSession(e) {
                if (e) {
                  this._session = e;
                } else {
                  delete this._session;
                }
                this._notifyScopeListeners();
                return this;
              }
              getSession() {
                return this._session;
              }
              update(e) {
                if (!e) {
                  return this;
                }
                const t = typeof e == "function" ? e(this) : e;
                const [n, r] = t instanceof f ? [t.getScopeData(), t.getRequestSession()] : (0, i.Qd)(t) ? [e, e.requestSession] : [];
                const {
                  tags: s,
                  extra: a,
                  user: o,
                  contexts: h,
                  level: l,
                  fingerprint: d = [],
                  propagationContext: c
                } = n || {};
                this._tags = {
                  ...this._tags,
                  ...s
                };
                this._extra = {
                  ...this._extra,
                  ...a
                };
                this._contexts = {
                  ...this._contexts,
                  ...h
                };
                if (o && Object.keys(o).length) {
                  this._user = o;
                }
                if (l) {
                  this._level = l;
                }
                if (d.length) {
                  this._fingerprint = d;
                }
                if (c) {
                  this._propagationContext = c;
                }
                if (r) {
                  this._requestSession = r;
                }
                return this;
              }
              clear() {
                this._breadcrumbs = [];
                this._tags = {};
                this._extra = {};
                this._user = {};
                this._contexts = {};
                this._level = undefined;
                this._transactionName = undefined;
                this._fingerprint = undefined;
                this._requestSession = undefined;
                this._session = undefined;
                u(this, undefined);
                this._attachments = [];
                this.setPropagationContext({
                  traceId: (0, o.el)()
                });
                this._notifyScopeListeners();
                return this;
              }
              addBreadcrumb(e, t) {
                const n = typeof t == "number" ? t : 100;
                if (n <= 0) {
                  return this;
                }
                const r = {
                  timestamp: (0, h.lu)(),
                  ...e
                };
                this._breadcrumbs.push(r);
                if (this._breadcrumbs.length > n) {
                  this._breadcrumbs = this._breadcrumbs.slice(-n);
                  if (this._client) {
                    this._client.recordDroppedEvent("buffer_overflow", "log_item");
                  }
                }
                this._notifyScopeListeners();
                return this;
              }
              getLastBreadcrumb() {
                return this._breadcrumbs[this._breadcrumbs.length - 1];
              }
              clearBreadcrumbs() {
                this._breadcrumbs = [];
                this._notifyScopeListeners();
                return this;
              }
              addAttachment(e) {
                this._attachments.push(e);
                return this;
              }
              clearAttachments() {
                this._attachments = [];
                return this;
              }
              getScopeData() {
                return {
                  breadcrumbs: this._breadcrumbs,
                  attachments: this._attachments,
                  contexts: this._contexts,
                  tags: this._tags,
                  extra: this._extra,
                  user: this._user,
                  level: this._level,
                  fingerprint: this._fingerprint || [],
                  eventProcessors: this._eventProcessors,
                  propagationContext: this._propagationContext,
                  sdkProcessingMetadata: this._sdkProcessingMetadata,
                  transactionName: this._transactionName,
                  span: p(this)
                };
              }
              setSDKProcessingMetadata(e) {
                this._sdkProcessingMetadata = (0, l.h)(this._sdkProcessingMetadata, e, 2);
                return this;
              }
              setPropagationContext(e) {
                this._propagationContext = {
                  spanId: (0, o.ZF)(),
                  ...e
                };
                return this;
              }
              getPropagationContext() {
                return this._propagationContext;
              }
              captureException(e, t) {
                const n = t && t.event_id ? t.event_id : (0, a.eJ)();
                if (!this._client) {
                  s.vF.warn("No client configured on scope - will not capture exception!");
                  return n;
                }
                const r = new Error("Sentry syntheticException");
                this._client.captureException(e, {
                  originalException: e,
                  syntheticException: r,
                  ...t,
                  event_id: n
                }, this);
                return n;
              }
              captureMessage(e, t, n) {
                const r = n && n.event_id ? n.event_id : (0, a.eJ)();
                if (!this._client) {
                  s.vF.warn("No client configured on scope - will not capture message!");
                  return r;
                }
                const i = new Error(e);
                this._client.captureMessage(e, t, {
                  originalException: e,
                  syntheticException: i,
                  ...n,
                  event_id: r
                }, this);
                return r;
              }
              captureEvent(e, t) {
                const n = t && t.event_id ? t.event_id : (0, a.eJ)();
                if (this._client) {
                  this._client.captureEvent(e, {
                    ...t,
                    event_id: n
                  }, this);
                  return n;
                } else {
                  s.vF.warn("No client configured on scope - will not capture event!");
                  return n;
                }
              }
              _notifyScopeListeners() {
                if (!this._notifyingListeners) {
                  this._notifyingListeners = true;
                  this._scopeListeners.forEach(e => {
                    e(this);
                  });
                  this._notifyingListeners = false;
                }
              }
            }
            const f = m;
          },
        74611(e, t, n) {
            "use strict";
        
            n.d(t, ["JD", 0, "sentry.origin", "i_", 0, "sentry.source", "sy", 0, "sentry.sample_rate", "uT", 0, "sentry.op"]);
          },
        59328(e, t, n) {
            "use strict";
        
            n.d(t, {
              Vu: () => h,
              fj: () => a,
              qO: () => o
            });
            var r = n(40873);
            var i = n(90519);
            var s = n(44910);
            function a(e) {
              const t = (0, i.zf)();
              const n = {
                sid: (0, s.eJ)(),
                init: true,
                timestamp: t,
                started: t,
                duration: 0,
                status: "ok",
                errors: 0,
                ignoreDuration: false,
                toJSON: () => function (e) {
                  return (0, r.Ce)({
                    sid: `${e.sid}`,
                    init: e.init,
                    started: new Date(e.started * 1000).toISOString(),
                    timestamp: new Date(e.timestamp * 1000).toISOString(),
                    status: e.status,
                    errors: e.errors,
                    did: typeof e.did == "number" || typeof e.did == "string" ? `${e.did}` : undefined,
                    duration: e.duration,
                    abnormal_mechanism: e.abnormal_mechanism,
                    attrs: {
                      release: e.release,
                      environment: e.environment,
                      ip_address: e.ipAddress,
                      user_agent: e.userAgent
                    }
                  });
                }(n)
              };
              if (e) {
                o(n, e);
              }
              return n;
            }
            function o(e, t = {}) {
              if (t.user) {
                if (!e.ipAddress && t.user.ip_address) {
                  e.ipAddress = t.user.ip_address;
                }
                if (!e.did && !t.did) {
                  e.did = t.user.id || t.user.email || t.user.username;
                }
              }
              e.timestamp = t.timestamp || (0, i.zf)();
              if (t.abnormal_mechanism) {
                e.abnormal_mechanism = t.abnormal_mechanism;
              }
              if (t.ignoreDuration) {
                e.ignoreDuration = t.ignoreDuration;
              }
              if (t.sid) {
                e.sid = t.sid.length === 32 ? t.sid : (0, s.eJ)();
              }
              if (t.init !== undefined) {
                e.init = t.init;
              }
              if (!e.did && t.did) {
                e.did = `${t.did}`;
              }
              if (typeof t.started == "number") {
                e.started = t.started;
              }
              if (e.ignoreDuration) {
                e.duration = undefined;
              } else if (typeof t.duration == "number") {
                e.duration = t.duration;
              } else {
                const t = e.timestamp - e.started;
                e.duration = t >= 0 ? t : 0;
              }
              if (t.release) {
                e.release = t.release;
              }
              if (t.environment) {
                e.environment = t.environment;
              }
              if (!e.ipAddress && t.ipAddress) {
                e.ipAddress = t.ipAddress;
              }
              if (!e.userAgent && t.userAgent) {
                e.userAgent = t.userAgent;
              }
              if (typeof t.errors == "number") {
                e.errors = t.errors;
              }
              if (t.status) {
                e.status = t.status;
              }
            }
            function h(e, t) {
              let n = {};
              if (t) {
                n = {
                  status: t
                };
              } else if (e.status === "ok") {
                n = {
                  status: "exited"
                };
              }
              o(e, n);
            }
          },
        46932(e, t, n) {
            "use strict";
        
            n.d(t, {
              ao: () => u,
              k1: () => p
            });
            var r = n(7313);
            var i = n(41186);
            var s = n(74611);
            var a = n(30690);
            const o = /^sentry-/;
            function h(e) {
              return e.split(",").map(e => e.split("=").map(e => decodeURIComponent(e.trim()))).reduce((e, [t, n]) => {
                if (t && n) {
                  e[t] = n;
                }
                return e;
              }, {});
            }
            var l = n(40873);
            var d = n(21544);
            function c(e, t) {
              const n = t.getOptions();
              const {
                publicKey: i
              } = t.getDsn() || {};
              const s = (0, l.Ce)({
                environment: n.environment || r.U,
                release: n.release,
                public_key: i,
                trace_id: e
              });
              t.emit("createDsc", s);
              return s;
            }
            function u(e, t) {
              const n = t.getPropagationContext();
              return n.dsc || c(n.traceId, e);
            }
            function p(e) {
              const t = (0, i.KU)();
              if (!t) {
                return {};
              }
              const n = (0, d.zU)(e);
              const r = n._frozenDsc;
              if (r) {
                return r;
              }
              const l = n.spanContext().traceState;
              const u = l && l.get("sentry.dsc");
              const p = u && function (e) {
                const t = function (e) {
                  if (e && ((0, a.Kg)(e) || Array.isArray(e))) {
                    if (Array.isArray(e)) {
                      return e.reduce((e, t) => {
                        const n = h(t);
                        Object.entries(n).forEach(([t, n]) => {
                          e[t] = n;
                        });
                        return e;
                      }, {});
                    } else {
                      return h(e);
                    }
                  }
                }(e);
                if (!t) {
                  return;
                }
                const n = Object.entries(t).reduce((e, [t, n]) => {
                  if (t.match(o)) {
                    e[t.slice(7)] = n;
                  }
                  return e;
                }, {});
                if (Object.keys(n).length > 0) {
                  return n;
                } else {
                  return undefined;
                }
              }(u);
              if (p) {
                return p;
              }
              const m = c(e.spanContext().traceId, t);
              const f = (0, d.et)(n);
              const _ = f.data || {};
              const v = _[s.sy];
              if (v != null) {
                m.sample_rate = `${v}`;
              }
              const y = _[s.i_];
              const g = f.description;
              if (y !== "url" && g) {
                m.transaction = g;
              }
              if (function () {
                if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) {
                  return false;
                }
                const e = (0, i.KU)();
                const t = e && e.getOptions();
                return !!t && (t.enableTracing || "tracesSampleRate" in t || "tracesSampler" in t);
              }()) {
                m.sampled = String((0, d.pK)(n));
              }
              t.emit("createDsc", m, n);
              return m;
            }
          }
    });
})();
