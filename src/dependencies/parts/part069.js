(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        20572(e, t, n) {
            "use strict";
        
            n.d(t, {
              T2: () => o,
              XW: () => s,
              xg: () => a
            });
            var r;
            var i = n(30690);
            function s(e) {
              return new o(t => {
                t(e);
              });
            }
            function a(e) {
              return new o((t, n) => {
                n(e);
              });
            }
            (function (e) {
              e[e.PENDING = 0] = "PENDING";
              e[e.RESOLVED = 1] = "RESOLVED";
              e[e.REJECTED = 2] = "REJECTED";
            })(r ||= {});
            class o {
              constructor(e) {
                o.prototype.__init.call(this);
                o.prototype.__init2.call(this);
                o.prototype.__init3.call(this);
                o.prototype.__init4.call(this);
                this._state = r.PENDING;
                this._handlers = [];
                try {
                  e(this._resolve, this._reject);
                } catch (e) {
                  this._reject(e);
                }
              }
              then(e, t) {
                return new o((n, r) => {
                  this._handlers.push([false, t => {
                    if (e) {
                      try {
                        n(e(t));
                      } catch (e) {
                        r(e);
                      }
                    } else {
                      n(t);
                    }
                  }, e => {
                    if (t) {
                      try {
                        n(t(e));
                      } catch (e) {
                        r(e);
                      }
                    } else {
                      r(e);
                    }
                  }]);
                  this._executeHandlers();
                });
              }
              catch(e) {
                return this.then(e => e, e);
              }
              finally(e) {
                return new o((t, n) => {
                  let r;
                  let i;
                  return this.then(t => {
                    i = false;
                    r = t;
                    if (e) {
                      e();
                    }
                  }, t => {
                    i = true;
                    r = t;
                    if (e) {
                      e();
                    }
                  }).then(() => {
                    if (i) {
                      n(r);
                    } else {
                      t(r);
                    }
                  });
                });
              }
              __init() {
                this._resolve = e => {
                  this._setResult(r.RESOLVED, e);
                };
              }
              __init2() {
                this._reject = e => {
                  this._setResult(r.REJECTED, e);
                };
              }
              __init3() {
                this._setResult = (e, t) => {
                  if (this._state === r.PENDING) {
                    if ((0, i.Qg)(t)) {
                      t.then(this._resolve, this._reject);
                    } else {
                      this._state = e;
                      this._value = t;
                      this._executeHandlers();
                    }
                  }
                };
              }
              __init4() {
                this._executeHandlers = () => {
                  if (this._state === r.PENDING) {
                    return;
                  }
                  const e = this._handlers.slice();
                  this._handlers = [];
                  e.forEach(e => {
                    if (!e[0]) {
                      if (this._state === r.RESOLVED) {
                        e[1](this._value);
                      }
                      if (this._state === r.REJECTED) {
                        e[2](this._value);
                      }
                      e[0] = true;
                    }
                  });
                };
              }
            }
          },
        90519(e, t, n) {
            "use strict";
        
            n.d(t, {
              lu: () => i
            });
            var r = n(92575);
            function i() {
              return Date.now() / 1000;
            }
            const s = function () {
              const {
                performance: e
              } = r.O;
              if (!e || !e.now) {
                return i;
              }
              const t = Date.now() - e.now();
              const n = e.timeOrigin == null ? t : e.timeOrigin;
              return () => (n + e.now()) / 1000;
            }();
            let a;
            (() => {
              const {
                performance: e
              } = r.O;
              if (!e || !e.now) {
                a = "none";
                return;
              }
              const t = 3600000;
              const n = e.now();
              const i = Date.now();
              const s = e.timeOrigin ? Math.abs(e.timeOrigin + n - i) : t;
              const o = s < t;
              const h = e.timing && e.timing.navigationStart;
              const l = typeof h == "number" ? Math.abs(h + n - i) : t;
              if (o || l < t) {
                if (s <= l) {
                  a = "timeOrigin";
                  e.timeOrigin;
                } else {
                  a = "navigationStart";
                }
              } else {
                a = "dateNow";
              }
            })();
            n.d(t, ["zf", 0, s]);
          },
        92575(e, t, n) {
            "use strict";
        
            n.d(t, {
              B: () => i
            });
            const r = globalThis;
            function i(e, t, n) {
              const i = n || r;
              const s = i.__SENTRY__ = i.__SENTRY__ || {};
              const a = s["8.55.2"] = s["8.55.2"] || {};
              return a[e] ||= t();
            }
            n.d(t, ["O", 0, r]);
          },
        45734(e, t, n) {
            "use strict";
        
            function r(e, t, n = 2) {
              if (!t || typeof t != "object" || n <= 0) {
                return t;
              }
              if (e && t && Object.keys(t).length === 0) {
                return e;
              }
              const i = {
                ...e
              };
              for (const e in t) {
                if (Object.prototype.hasOwnProperty.call(t, e)) {
                  i[e] = r(i[e], t[e], n - 1);
                }
              }
              return i;
            }
            n.d(t, {
              h: () => r
            });
          },
        45333(e, t, n) {
            "use strict";
        
            n.d(t, {
              li: () => A,
              mG: () => T
            });
            var r = n(7313);
            var i = n(41186);
            var s = n(30690);
            n(5602);
            var a = n(20572);
            function o(e, t, n, r = 0) {
              return new a.T2((i, a) => {
                const h = e[r];
                if (t === null || typeof h != "function") {
                  i(t);
                } else {
                  const l = h({
                    ...t
                  }, n);
                  if ((0, s.Qg)(l)) {
                    l.then(t => o(e, t, n, r + 1).then(i)).then(null, a);
                  } else {
                    o(e, l, n, r + 1).then(i).then(null, a);
                  }
                }
              });
            }
            var h = n(19841);
            var l = n(92575);
            let d;
            let c;
            let u;
            var p = n(44910);
            var m = n(52879);
            var f = n(2323);
            var _ = n(90519);
            var v = n(46932);
            var y = n(40873);
            var g = n(45734);
            var w = n(21544);
            function x(e, t) {
              const {
                extra: n,
                tags: r,
                user: i,
                contexts: s,
                level: a,
                sdkProcessingMetadata: o,
                breadcrumbs: h,
                fingerprint: l,
                eventProcessors: d,
                attachments: c,
                propagationContext: u,
                transactionName: p,
                span: m
              } = t;
              b(e, "extra", n);
              b(e, "tags", r);
              b(e, "user", i);
              b(e, "contexts", s);
              e.sdkProcessingMetadata = (0, g.h)(e.sdkProcessingMetadata, o, 2);
              if (a) {
                e.level = a;
              }
              if (p) {
                e.transactionName = p;
              }
              if (m) {
                e.span = m;
              }
              if (h.length) {
                e.breadcrumbs = [...e.breadcrumbs, ...h];
              }
              if (l.length) {
                e.fingerprint = [...e.fingerprint, ...l];
              }
              if (d.length) {
                e.eventProcessors = [...e.eventProcessors, ...d];
              }
              if (c.length) {
                e.attachments = [...e.attachments, ...c];
              }
              e.propagationContext = {
                ...e.propagationContext,
                ...u
              };
            }
            function b(e, t, n) {
              e[t] = (0, g.h)(e[t], n, 1);
            }
            function T(e, t, n, s, a, g) {
              const {
                normalizeDepth: b = 3,
                normalizeMaxBreadth: T = 1000
              } = e;
              const A = {
                ...t,
                event_id: t.event_id || n.event_id || (0, p.eJ)(),
                timestamp: t.timestamp || (0, _.lu)()
              };
              const C = n.integrations || e.integrations.map(e => e.name);
              (function (e, t) {
                const {
                  environment: n,
                  release: i,
                  dist: s,
                  maxValueLength: a = 250
                } = t;
                e.environment = e.environment || n || r.U;
                if (!e.release && i) {
                  e.release = i;
                }
                if (!e.dist && s) {
                  e.dist = s;
                }
                e.message &&= (0, f.xv)(e.message, a);
                const o = e.exception && e.exception.values && e.exception.values[0];
                if (o && o.value) {
                  o.value = (0, f.xv)(o.value, a);
                }
                const h = e.request;
                if (h && h.url) {
                  h.url = (0, f.xv)(h.url, a);
                }
              })(A, e);
              (function (e, t) {
                if (t.length > 0) {
                  e.sdk = e.sdk || {};
                  e.sdk.integrations = [...(e.sdk.integrations || []), ...t];
                }
              })(A, C);
              if (a) {
                a.emit("applyFrameMetadata", t);
              }
              if (t.type === undefined) {
                (function (e, t) {
                  const n = function (e) {
                    const t = l.O._sentryDebugIds;
                    if (!t) {
                      return {};
                    }
                    const n = Object.keys(t);
                    if (!u || n.length !== c) {
                      c = n.length;
                      u = n.reduce((n, r) => {
                        d ||= {};
                        const i = d[r];
                        if (i) {
                          n[i[0]] = i[1];
                        } else {
                          const i = e(r);
                          for (let e = i.length - 1; e >= 0; e--) {
                            const s = i[e];
                            const a = s && s.filename;
                            const o = t[r];
                            if (a && o) {
                              n[a] = o;
                              d[r] = [a, o];
                              break;
                            }
                          }
                        }
                        return n;
                      }, {});
                    }
                    return u;
                  }(t);
                  try {
                    e.exception.values.forEach(e => {
                      e.stacktrace.frames.forEach(e => {
                        if (n && e.filename) {
                          e.debug_id = n[e.filename];
                        }
                      });
                    });
                  } catch (e) {}
                })(A, e.stackParser);
              }
              const S = function (e, t) {
                if (!t) {
                  return e;
                }
                const n = e ? e.clone() : new h.H();
                n.update(t);
                return n;
              }(s, n.captureContext);
              if (n.mechanism) {
                (0, p.M6)(A, n.mechanism);
              }
              const E = a ? a.getEventProcessors() : [];
              const O = (0, i.m6)().getScopeData();
              if (g) {
                x(O, g.getScopeData());
              }
              if (S) {
                x(O, S.getScopeData());
              }
              const k = [...(n.attachments || []), ...O.attachments];
              if (k.length) {
                n.attachments = k;
              }
              (function (e, t) {
                const {
                  fingerprint: n,
                  span: r,
                  breadcrumbs: i,
                  sdkProcessingMetadata: s
                } = t;
                (function (e, t) {
                  const {
                    extra: n,
                    tags: r,
                    user: i,
                    contexts: s,
                    level: a,
                    transactionName: o
                  } = t;
                  const h = (0, y.Ce)(n);
                  if (h && Object.keys(h).length) {
                    e.extra = {
                      ...h,
                      ...e.extra
                    };
                  }
                  const l = (0, y.Ce)(r);
                  if (l && Object.keys(l).length) {
                    e.tags = {
                      ...l,
                      ...e.tags
                    };
                  }
                  const d = (0, y.Ce)(i);
                  if (d && Object.keys(d).length) {
                    e.user = {
                      ...d,
                      ...e.user
                    };
                  }
                  const c = (0, y.Ce)(s);
                  if (c && Object.keys(c).length) {
                    e.contexts = {
                      ...c,
                      ...e.contexts
                    };
                  }
                  if (a) {
                    e.level = a;
                  }
                  if (o && e.type !== "transaction") {
                    e.transaction = o;
                  }
                })(e, t);
                if (r) {
                  (function (e, t) {
                    e.contexts = {
                      trace: (0, w.kX)(t),
                      ...e.contexts
                    };
                    e.sdkProcessingMetadata = {
                      dynamicSamplingContext: (0, v.k1)(t),
                      ...e.sdkProcessingMetadata
                    };
                    const n = (0, w.zU)(t);
                    const r = (0, w.et)(n).description;
                    if (r && !e.transaction && e.type === "transaction") {
                      e.transaction = r;
                    }
                  })(e, r);
                }
                (function (e, t) {
                  e.fingerprint = e.fingerprint ? Array.isArray(e.fingerprint) ? e.fingerprint : [e.fingerprint] : [];
                  if (t) {
                    e.fingerprint = e.fingerprint.concat(t);
                  }
                  if (e.fingerprint && !e.fingerprint.length) {
                    delete e.fingerprint;
                  }
                })(e, n);
                (function (e, t) {
                  const n = [...(e.breadcrumbs || []), ...t];
                  e.breadcrumbs = n.length ? n : undefined;
                })(e, i);
                (function (e, t) {
                  e.sdkProcessingMetadata = {
                    ...e.sdkProcessingMetadata,
                    ...t
                  };
                })(e, s);
              })(A, O);
              return o([...E, ...O.eventProcessors], A, n).then(e => {
                if (e) {
                  (function (e) {
                    const t = {};
                    try {
                      e.exception.values.forEach(e => {
                        e.stacktrace.frames.forEach(e => {
                          if (e.debug_id) {
                            if (e.abs_path) {
                              t[e.abs_path] = e.debug_id;
                            } else if (e.filename) {
                              t[e.filename] = e.debug_id;
                            }
                            delete e.debug_id;
                          }
                        });
                      });
                    } catch (e) {}
                    if (Object.keys(t).length === 0) {
                      return;
                    }
                    e.debug_meta = e.debug_meta || {};
                    e.debug_meta.images = e.debug_meta.images || [];
                    const n = e.debug_meta.images;
                    Object.entries(t).forEach(([e, t]) => {
                      n.push({
                        type: "sourcemap",
                        code_file: e,
                        debug_id: t
                      });
                    });
                  })(e);
                }
                if (typeof b == "number" && b > 0) {
                  return function (e, t, n) {
                    if (!e) {
                      return null;
                    }
                    const r = {
                      ...e,
                      ...(e.breadcrumbs && {
                        breadcrumbs: e.breadcrumbs.map(e => ({
                          ...e,
                          ...(e.data && {
                            data: (0, m.S8)(e.data, t, n)
                          })
                        }))
                      }),
                      ...(e.user && {
                        user: (0, m.S8)(e.user, t, n)
                      }),
                      ...(e.contexts && {
                        contexts: (0, m.S8)(e.contexts, t, n)
                      }),
                      ...(e.extra && {
                        extra: (0, m.S8)(e.extra, t, n)
                      })
                    };
                    if (e.contexts && e.contexts.trace && r.contexts) {
                      r.contexts.trace = e.contexts.trace;
                      if (e.contexts.trace.data) {
                        r.contexts.trace.data = (0, m.S8)(e.contexts.trace.data, t, n);
                      }
                    }
                    if (e.spans) {
                      r.spans = e.spans.map(e => ({
                        ...e,
                        ...(e.data && {
                          data: (0, m.S8)(e.data, t, n)
                        })
                      }));
                    }
                    if (e.contexts && e.contexts.flags && r.contexts) {
                      r.contexts.flags = (0, m.S8)(e.contexts.flags, 3, n);
                    }
                    return r;
                  }(e, b, T);
                } else {
                  return e;
                }
              });
            }
            function A(e) {
              if (e) {
                if (function (e) {
                  return e instanceof h.H || typeof e == "function";
                }(e) || function (e) {
                  return Object.keys(e).some(e => C.includes(e));
                }(e)) {
                  return {
                    captureContext: e
                  };
                } else {
                  return e;
                }
              }
            }
            const C = ["user", "level", "extra", "contexts", "tags", "fingerprint", "requestSession", "propagationContext"];
          },
        21544(e, t, n) {
            "use strict";
        
            n.d(t, {
              zU: () => _,
              xl: () => v,
              pK: () => m,
              et: () => p,
              kX: () => d
            });
            var r = n(40873);
            function i(e) {
              const t = e._sentryMetrics;
              if (!t) {
                return;
              }
              const n = {};
              for (const [, [e, i]] of t) {
                (n[e] ||= []).push((0, r.Ce)(i));
              }
              return n;
            }
            var s = n(74611);
            var a = n(5602);
            var o = n(30243);
            var h = n(90519);
            let l = false;
            function d(e) {
              const {
                spanId: t,
                traceId: n,
                isRemote: i
              } = e.spanContext();
              const s = i ? t : p(e).parent_span_id;
              const a = i ? (0, o.ZF)() : t;
              return (0, r.Ce)({
                parent_span_id: s,
                span_id: a,
                trace_id: n
              });
            }
            function c(e) {
              if (typeof e == "number") {
                return u(e);
              } else if (Array.isArray(e)) {
                return e[0] + e[1] / 1000000000;
              } else if (e instanceof Date) {
                return u(e.getTime());
              } else {
                return (0, h.zf)();
              }
            }
            function u(e) {
              if (e > 9999999999) {
                return e / 1000;
              } else {
                return e;
              }
            }
            function p(e) {
              if (function (e) {
                return typeof e.getSpanJSON == "function";
              }(e)) {
                return e.getSpanJSON();
              }
              try {
                const {
                  spanId: t,
                  traceId: n
                } = e.spanContext();
                if (function (e) {
                  const t = e;
                  return !!t.attributes && !!t.startTime && !!t.name && !!t.endTime && !!t.status;
                }(e)) {
                  const {
                    attributes: a,
                    startTime: o,
                    name: h,
                    endTime: l,
                    parentSpanId: d,
                    status: u
                  } = e;
                  return (0, r.Ce)({
                    span_id: t,
                    trace_id: n,
                    data: a,
                    description: h,
                    parent_span_id: d,
                    start_timestamp: c(o),
                    timestamp: c(l) || undefined,
                    status: f(u),
                    op: a[s.uT],
                    origin: a[s.JD],
                    _metrics_summary: i(e)
                  });
                }
                return {
                  span_id: t,
                  trace_id: n
                };
              } catch (e) {
                return {};
              }
            }
            function m(e) {
              const {
                traceFlags: t
              } = e.spanContext();
              return t === 1;
            }
            function f(e) {
              if (e && e.code !== 0) {
                if (e.code === 1) {
                  return "ok";
                } else {
                  return e.message || "unknown_error";
                }
              }
            }
            function _(e) {
              return e._sentryRootSpan || e;
            }
            function v() {
              if (!l) {
                (0, a.pq)(() => {});
                l = true;
              }
            }
          },
        1687(e, t, n) {
            "use strict";
        
            n.d(t, {
              c: () => r()
            });
            var r = n.cw(function (e, t) {
              const n = function* () {}.constructor;
              e.exports = () => n;
            });
          }
    });
})();
