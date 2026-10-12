(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        87320(e, t, n) {
            "use strict";
        
            n.d(t, {
              $N: () => o,
              Hd: () => s,
              xE: () => h
            });
            var r = n(30690);
            const i = n(92575).O;
            function s(e, t = {}) {
              if (!e) {
                return "<unknown>";
              }
              try {
                let n = e;
                const r = 5;
                const i = [];
                let s = 0;
                let o = 0;
                const h = " > ";
                const l = h.length;
                let d;
                const c = Array.isArray(t) ? t : t.keyAttrs;
                const u = !Array.isArray(t) && t.maxStringLength || 80;
                while (n && s++ < r && (d = a(n, c), d !== "html" && (!(s > 1) || !(o + i.length * l + d.length >= u)))) {
                  i.push(d);
                  o += d.length;
                  n = n.parentNode;
                }
                return i.reverse().join(h);
              } catch (e) {
                return "<unknown>";
              }
            }
            function a(e, t) {
              const n = e;
              const s = [];
              if (!n || !n.tagName) {
                return "";
              }
              if (i.HTMLElement && n instanceof HTMLElement && n.dataset) {
                if (n.dataset.sentryComponent) {
                  return n.dataset.sentryComponent;
                }
                if (n.dataset.sentryElement) {
                  return n.dataset.sentryElement;
                }
              }
              s.push(n.tagName.toLowerCase());
              const a = t && t.length ? t.filter(e => n.getAttribute(e)).map(e => [e, n.getAttribute(e)]) : null;
              if (a && a.length) {
                a.forEach(e => {
                  s.push(`[${e[0]}="${e[1]}"]`);
                });
              } else {
                if (n.id) {
                  s.push(`#${n.id}`);
                }
                const e = n.className;
                if (e && (0, r.Kg)(e)) {
                  const t = e.split(/\s+/);
                  for (const e of t) {
                    s.push(`.${e}`);
                  }
                }
              }
              const o = ["aria-label", "type", "name", "title", "alt"];
              for (const e of o) {
                const t = n.getAttribute(e);
                if (t) {
                  s.push(`[${e}="${t}"]`);
                }
              }
              return s.join("");
            }
            function o() {
              try {
                return i.document.location.href;
              } catch (e) {
                return "";
              }
            }
            function h(e) {
              if (!i.HTMLElement) {
                return null;
              }
              let t = e;
              for (let e = 0; e < 5; e++) {
                if (!t) {
                  return null;
                }
                if (t instanceof HTMLElement) {
                  if (t.dataset.sentryComponent) {
                    return t.dataset.sentryComponent;
                  }
                  if (t.dataset.sentryElement) {
                    return t.dataset.sentryElement;
                  }
                }
                t = t.parentNode;
              }
              return null;
            }
          },
        30690(e, t, n) {
            "use strict";
        
            n.d(t, {
              BD: () => o,
              Kg: () => l,
              L2: () => g,
              NF: () => d,
              Qd: () => u,
              Qg: () => _,
              T2: () => a,
              W6: () => h,
              bJ: () => i,
              gd: () => f,
              mE: () => v,
              sO: () => c,
              tH: () => y,
              vq: () => m,
              xH: () => p
            });
            const r = Object.prototype.toString;
            function i(e) {
              switch (r.call(e)) {
                case "[object Error]":
                case "[object Exception]":
                case "[object DOMException]":
                case "[object WebAssembly.Exception]":
                  return true;
                default:
                  return y(e, Error);
              }
            }
            function s(e, t) {
              return r.call(e) === `[object ${t}]`;
            }
            function a(e) {
              return s(e, "ErrorEvent");
            }
            function o(e) {
              return s(e, "DOMError");
            }
            function h(e) {
              return s(e, "DOMException");
            }
            function l(e) {
              return s(e, "String");
            }
            function d(e) {
              return typeof e == "object" && e !== null && "__sentry_template_string__" in e && "__sentry_template_values__" in e;
            }
            function c(e) {
              return e === null || d(e) || typeof e != "object" && typeof e != "function";
            }
            function u(e) {
              return s(e, "Object");
            }
            function p(e) {
              return typeof Event != "undefined" && y(e, Event);
            }
            function m(e) {
              return typeof Element != "undefined" && y(e, Element);
            }
            function f(e) {
              return s(e, "RegExp");
            }
            function _(e) {
              return Boolean(e && e.then && typeof e.then == "function");
            }
            function v(e) {
              return u(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e;
            }
            function y(e, t) {
              try {
                return e instanceof t;
              } catch (e) {
                return false;
              }
            }
            function g(e) {
              return typeof e == "object" && e !== null && (!!e.__isVue || !!e._isVue);
            }
          },
        5602(e, t, n) {
            "use strict";
        
            n.d(t, {
              pq: () => a
            });
            var r = n(92575);
            const i = ["debug", "info", "warn", "error", "log", "assert", "trace"];
            const s = {};
            function a(e) {
              if (!("console" in r.O)) {
                return e();
              }
              const t = r.O.console;
              const n = {};
              const i = Object.keys(s);
              i.forEach(e => {
                const r = s[e];
                n[e] = t[e];
                t[e] = r;
              });
              try {
                return e();
              } finally {
                i.forEach(e => {
                  t[e] = n[e];
                });
              }
            }
            const o = (0, r.B)("logger", function () {
              let e = false;
              const t = {
                enable: () => {
                  e = true;
                },
                disable: () => {
                  e = false;
                },
                isEnabled: () => e
              };
              i.forEach(e => {
                t[e] = () => {};
              });
              return t;
            });
            n.d(t, ["Ow", 0, i, "Z9", 0, s, "vF", 0, o]);
          },
        44910(e, t, n) {
            "use strict";
        
            n.d(t, {
              $X: () => o,
              GR: () => d,
              M6: () => l,
              eJ: () => s,
              gO: () => h
            });
            var r = n(40873);
            var i = n(92575);
            function s() {
              const e = i.O;
              const t = e.crypto || e.msCrypto;
              let n = () => Math.random() * 16;
              try {
                if (t && t.randomUUID) {
                  return t.randomUUID().replace(/-/g, "");
                }
                if (t && t.getRandomValues) {
                  n = () => {
                    const e = new Uint8Array(1);
                    t.getRandomValues(e);
                    return e[0];
                  };
                }
              } catch (e) {}
              return ([10000000] + 1000 + 4000 + 8000 + 100000000000).replace(/[018]/g, e => (e ^ (n() & 15) >> e / 4).toString(16));
            }
            function a(e) {
              if (e.exception && e.exception.values) {
                return e.exception.values[0];
              } else {
                return undefined;
              }
            }
            function o(e) {
              const {
                message: t,
                event_id: n
              } = e;
              if (t) {
                return t;
              }
              const r = a(e);
              if (r) {
                if (r.type && r.value) {
                  return `${r.type}: ${r.value}`;
                } else {
                  return r.type || r.value || n || "<unknown>";
                }
              } else {
                return n || "<unknown>";
              }
            }
            function h(e, t, n) {
              const r = e.exception = e.exception || {};
              const i = r.values = r.values || [];
              const s = i[0] = i[0] || {};
              s.value ||= t || "";
              s.type ||= n || "Error";
            }
            function l(e, t) {
              const n = a(e);
              if (!n) {
                return;
              }
              const r = n.mechanism;
              n.mechanism = {
                type: "generic",
                handled: true,
                ...r,
                ...t
              };
              if (t && "data" in t) {
                const e = {
                  ...(r && r.data),
                  ...t.data
                };
                n.mechanism.data = e;
              }
            }
            function d(e) {
              if (function (e) {
                try {
                  return e.__sentry_captured__;
                } catch (e) {}
              }(e)) {
                return true;
              }
              try {
                (0, r.my)(e, "__sentry_captured__", true);
              } catch (e) {}
              return false;
            }
          },
        52879(e, t, n) {
            "use strict";
        
            n.d(t, {
              S8: () => a,
              cd: () => o
            });
            var r = n(30690);
            var i = n(40873);
            var s = n(20527);
            function a(e, t = 100, n = Infinity) {
              try {
                return h("", e, t, n);
              } catch (e) {
                return {
                  ERROR: `**non-serializable** (${e})`
                };
              }
            }
            function o(e, t = 3, n = 102400) {
              const r = a(e, t);
              i = r;
              if (function (e) {
                return ~-encodeURI(e).split(/%..|./).length;
              }(JSON.stringify(i)) > n) {
                return o(e, t - 1, n);
              } else {
                return r;
              }
              var i;
            }
            function h(e, t, a = Infinity, o = Infinity, l = function () {
              const e = typeof WeakSet == "function";
              const t = e ? new WeakSet() : [];
              return [function (n) {
                if (e) {
                  return !!t.has(n) || (t.add(n), false);
                }
                for (let e = 0; e < t.length; e++) {
                  if (t[e] === n) {
                    return true;
                  }
                }
                t.push(n);
                return false;
              }, function (n) {
                if (e) {
                  t.delete(n);
                } else {
                  for (let e = 0; e < t.length; e++) {
                    if (t[e] === n) {
                      t.splice(e, 1);
                      break;
                    }
                  }
                }
              }];
            }()) {
              const [d, c] = l;
              if (t == null || ["boolean", "string"].includes(typeof t) || typeof t == "number" && Number.isFinite(t)) {
                return t;
              }
              const u = function (e, t) {
                try {
                  if (e === "domain" && t && typeof t == "object" && t._events) {
                    return "[Domain]";
                  }
                  if (e === "domainEmitter") {
                    return "[DomainEmitter]";
                  }
                  if (n.g !== undefined && t === n.g) {
                    return "[Global]";
                  }
                  if (typeof window != "undefined" && t === window) {
                    return "[Window]";
                  }
                  if (typeof document != "undefined" && t === document) {
                    return "[Document]";
                  }
                  if ((0, r.L2)(t)) {
                    return "[VueViewModel]";
                  }
                  if ((0, r.mE)(t)) {
                    return "[SyntheticEvent]";
                  }
                  if (typeof t == "number" && !Number.isFinite(t)) {
                    return `[${t}]`;
                  }
                  if (typeof t == "function") {
                    return `[Function: ${(0, s.qQ)(t)}]`;
                  }
                  if (typeof t == "symbol") {
                    return `[${String(t)}]`;
                  }
                  if (typeof t == "bigint") {
                    return `[BigInt: ${String(t)}]`;
                  }
                  const i = function (e) {
                    const t = Object.getPrototypeOf(e);
                    if (t) {
                      return t.constructor.name;
                    } else {
                      return "null prototype";
                    }
                  }(t);
                  if (/^HTML(\w*)Element$/.test(i)) {
                    return `[HTMLElement: ${i}]`;
                  } else {
                    return `[object ${i}]`;
                  }
                } catch (e) {
                  return `**non-serializable** (${e})`;
                }
              }(e, t);
              if (!u.startsWith("[object ")) {
                return u;
              }
              if (t.__sentry_skip_normalization__) {
                return t;
              }
              const p = typeof t.__sentry_override_normalization_depth__ == "number" ? t.__sentry_override_normalization_depth__ : a;
              if (p === 0) {
                return u.replace("object ", "");
              }
              if (d(t)) {
                return "[Circular ~]";
              }
              const m = t;
              if (m && typeof m.toJSON == "function") {
                try {
                  return h("", m.toJSON(), p - 1, o, l);
                } catch (e) {}
              }
              const f = Array.isArray(t) ? [] : {};
              let _ = 0;
              const v = (0, i.W4)(t);
              for (const e in v) {
                if (!Object.prototype.hasOwnProperty.call(v, e)) {
                  continue;
                }
                if (_ >= o) {
                  f[e] = "[MaxProperties ~]";
                  break;
                }
                const t = v[e];
                f[e] = h(e, t, p - 1, o, l);
                _++;
              }
              c(t);
              return f;
            }
          },
        40873(e, t, n) {
            "use strict";
        
            n.d(t, {
              Ce: () => m,
              GS: () => a,
              HF: () => p,
              W4: () => d,
              my: () => o,
              pO: () => h,
              sp: () => l
            });
            var r = n(87320);
            var i = n(30690);
            n(5602);
            var s = n(2323);
            function a(e, t, n) {
              if (!(t in e)) {
                return;
              }
              const r = e[t];
              const i = n(r);
              if (typeof i == "function") {
                h(i, r);
              }
              try {
                e[t] = i;
              } catch (e) {}
            }
            function o(e, t, n) {
              try {
                Object.defineProperty(e, t, {
                  value: n,
                  writable: true,
                  configurable: true
                });
              } catch (e) {}
            }
            function h(e, t) {
              try {
                const n = t.prototype || {};
                e.prototype = t.prototype = n;
                o(e, "__sentry_original__", t);
              } catch (e) {}
            }
            function l(e) {
              return e.__sentry_original__;
            }
            function d(e) {
              if ((0, i.bJ)(e)) {
                return {
                  message: e.message,
                  name: e.name,
                  stack: e.stack,
                  ...u(e)
                };
              }
              if ((0, i.xH)(e)) {
                const t = {
                  type: e.type,
                  target: c(e.target),
                  currentTarget: c(e.currentTarget),
                  ...u(e)
                };
                if (typeof CustomEvent != "undefined" && (0, i.tH)(e, CustomEvent)) {
                  t.detail = e.detail;
                }
                return t;
              }
              return e;
            }
            function c(e) {
              try {
                if ((0, i.vq)(e)) {
                  return (0, r.Hd)(e);
                } else {
                  return Object.prototype.toString.call(e);
                }
              } catch (e) {
                return "<unknown>";
              }
            }
            function u(e) {
              if (typeof e == "object" && e !== null) {
                const t = {};
                for (const n in e) {
                  if (Object.prototype.hasOwnProperty.call(e, n)) {
                    t[n] = e[n];
                  }
                }
                return t;
              }
              return {};
            }
            function p(e, t = 40) {
              const n = Object.keys(d(e));
              n.sort();
              const r = n[0];
              if (!r) {
                return "[object has no keys]";
              }
              if (r.length >= t) {
                return (0, s.xv)(r, t);
              }
              for (let e = n.length; e > 0; e--) {
                const r = n.slice(0, e).join(", ");
                if (!(r.length > t)) {
                  if (e === n.length) {
                    return r;
                  } else {
                    return (0, s.xv)(r, t);
                  }
                }
              }
              return "";
            }
            function m(e) {
              return f(e, new Map());
            }
            function f(e, t) {
              if (function (e) {
                if (!(0, i.Qd)(e)) {
                  return false;
                }
                try {
                  const t = Object.getPrototypeOf(e).constructor.name;
                  return !t || t === "Object";
                } catch (e) {
                  return true;
                }
              }(e)) {
                const n = t.get(e);
                if (n !== undefined) {
                  return n;
                }
                const r = {};
                t.set(e, r);
                for (const n of Object.getOwnPropertyNames(e)) {
                  if (e[n] !== undefined) {
                    r[n] = f(e[n], t);
                  }
                }
                return r;
              }
              if (Array.isArray(e)) {
                const n = t.get(e);
                if (n !== undefined) {
                  return n;
                }
                const r = [];
                t.set(e, r);
                e.forEach(e => {
                  r.push(f(e, t));
                });
                return r;
              }
              return e;
            }
          },
        30243(e, t, n) {
            "use strict";
        
            n.d(t, {
              ZF: () => s,
              el: () => i
            });
            var r = n(44910);
            function i() {
              return (0, r.eJ)();
            }
            function s() {
              return (0, r.eJ)().substring(16);
            }
          },
        20527(e, t, n) {
            "use strict";
        
            n.d(t, {
              RV: () => d,
              gd: () => s,
              qQ: () => l,
              vk: () => a
            });
            const r = /\(error: (.*)\)/;
            const i = /captureMessage|captureException/;
            function s(...e) {
              const t = e.sort((e, t) => e[0] - t[0]).map(e => e[1]);
              return (e, n = 0, s = 0) => {
                const a = [];
                const h = e.split("\n");
                for (let e = n; e < h.length; e++) {
                  const n = h[e];
                  if (n.length > 1024) {
                    continue;
                  }
                  const i = r.test(n) ? n.replace(r, "$1") : n;
                  if (!i.match(/\S*Error: /)) {
                    for (const e of t) {
                      const t = e(i);
                      if (t) {
                        a.push(t);
                        break;
                      }
                    }
                    if (a.length >= 50 + s) {
                      break;
                    }
                  }
                }
                return function (e) {
                  if (!e.length) {
                    return [];
                  }
                  const t = Array.from(e);
                  if (/sentryWrapped/.test(o(t).function || "")) {
                    t.pop();
                  }
                  t.reverse();
                  if (i.test(o(t).function || "")) {
                    t.pop();
                    if (i.test(o(t).function || "")) {
                      t.pop();
                    }
                  }
                  return t.slice(0, 50).map(e => ({
                    ...e,
                    filename: e.filename || o(t).filename,
                    function: e.function || "?"
                  }));
                }(a.slice(s));
              };
            }
            function a(e) {
              if (Array.isArray(e)) {
                return s(...e);
              } else {
                return e;
              }
            }
            function o(e) {
              return e[e.length - 1] || {};
            }
            const h = "<anonymous>";
            function l(e) {
              try {
                return e && typeof e == "function" && e.name || h;
              } catch (e) {
                return h;
              }
            }
            function d(e) {
              const t = e.exception;
              if (t) {
                const e = [];
                try {
                  t.values.forEach(t => {
                    if (t.stacktrace.frames) {
                      e.push(...t.stacktrace.frames);
                    }
                  });
                  return e;
                } catch (e) {
                  return;
                }
              }
            }
          },
        2323(e, t, n) {
            "use strict";
        
            n.d(t, {
              Xr: () => a,
              gt: () => s,
              xv: () => i
            });
            var r = n(30690);
            function i(e, t = 0) {
              if (typeof e != "string" || t === 0 || e.length <= t) {
                return e;
              } else {
                return `${e.slice(0, t)}...`;
              }
            }
            function s(e, t) {
              if (!Array.isArray(e)) {
                return "";
              }
              const n = [];
              for (let t = 0; t < e.length; t++) {
                const i = e[t];
                try {
                  if ((0, r.L2)(i)) {
                    n.push("[VueViewModel]");
                  } else {
                    n.push(String(i));
                  }
                } catch (e) {
                  n.push("[value cannot be serialized]");
                }
              }
              return n.join(t);
            }
            function a(e, t = [], n = false) {
              return t.some(t => function (e, t, n = false) {
                return !!(0, r.Kg)(e) && ((0, r.gd)(t) ? t.test(e) : !!(0, r.Kg)(t) && (n ? e === t : e.includes(t)));
              }(e, t, n));
            }
          }
    });
})();
