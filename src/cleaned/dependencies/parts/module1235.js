(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        1235(e, t, n) {
            "use strict";
        
            n.d(t, {
              Sd: () => m,
              T: () => b,
              aH: () => w,
              ct: () => x
            });
            var r = n(97831);
            var i = n(88604);
            var s = function () {
              function e(e, t = false, n) {
                this._fn = e;
                this._once = t;
                this._thisArg = n;
                this._next = this._prev = this._owner = null;
              }
              e.prototype.detach = function () {
                return this._owner !== null && (this._owner.detach(this), true);
              };
              return e;
            }();
            function a(e, t) {
              if (e._head) {
                e._tail._next = t;
                t._prev = e._tail;
                e._tail = t;
              } else {
                e._head = t;
                e._tail = t;
              }
              t._owner = e;
              return t;
            }
            var o;
            var h = function () {
              function e() {
                this._head = this._tail = undefined;
              }
              e.prototype.handlers = function (e = false) {
                var t = this._head;
                if (e) {
                  return !!t;
                }
                var n = [];
                for (; t;) {
                  n.push(t);
                  t = t._next;
                }
                return n;
              };
              e.prototype.has = function (e) {
                if (!(e instanceof s)) {
                  throw new Error("MiniSignal#has(): First arg must be a SignalBinding object.");
                }
                return e._owner === this;
              };
              e.prototype.dispatch = function () {
                var e = arguments;
                var t = [];
                for (var n = 0; n < arguments.length; n++) {
                  t[n] = e[n];
                }
                var r = this._head;
                if (!r) {
                  return false;
                }
                while (r) {
                  if (r._once) {
                    this.detach(r);
                  }
                  r._fn.apply(r._thisArg, t);
                  r = r._next;
                }
                return true;
              };
              e.prototype.add = function (e, t = null) {
                if (typeof e != "function") {
                  throw new Error("MiniSignal#add(): First arg must be a Function.");
                }
                return a(this, new s(e, false, t));
              };
              e.prototype.once = function (e, t = null) {
                if (typeof e != "function") {
                  throw new Error("MiniSignal#once(): First arg must be a Function.");
                }
                return a(this, new s(e, true, t));
              };
              e.prototype.detach = function (e) {
                if (!(e instanceof s)) {
                  throw new Error("MiniSignal#detach(): First arg must be a SignalBinding object.");
                }
                if (e._owner === this) {
                  if (e._prev) {
                    e._prev._next = e._next;
                  }
                  if (e._next) {
                    e._next._prev = e._prev;
                  }
                  if (e === this._head) {
                    this._head = e._next;
                    if (e._next === null) {
                      this._tail = null;
                    }
                  } else if (e === this._tail) {
                    this._tail = e._prev;
                    this._tail._next = null;
                  }
                  e._owner = null;
                }
                return this;
              };
              e.prototype.detachAll = function () {
                var e = this._head;
                if (!e) {
                  return this;
                }
                for (this._head = this._tail = null; e;) {
                  e._owner = null;
                  e = e._next;
                }
                return this;
              };
              return e;
            }();
            function l(e, t) {
              t = t || {};
              var n = {
                key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
                q: {
                  name: "queryKey",
                  parser: /(?:^|&)([^&=]*)=?([^&]*)/g
                },
                parser: {
                  strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                  loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                }
              };
              var r = n.parser[t.strictMode ? "strict" : "loose"].exec(e);
              var i = {};
              for (var s = 14; s--;) {
                i[n.key[s]] = r[s] || "";
              }
              i[n.q.name] = {};
              i[n.key[12]].replace(n.q.parser, function (e, t, r) {
                if (t) {
                  i[n.q.name][t] = r;
                }
              });
              return i;
            }
            var d = null;
            function c() {}
            function u(e, t, n) {
              if (t && t.indexOf(".") === 0) {
                t = t.substring(1);
              }
              if (t) {
                e[t] = n;
              }
            }
            function p(e) {
              return e.toString().replace("object ", "");
            }
            var m = function () {
              function e(t, n, r) {
                this._dequeue = c;
                this._onLoadBinding = null;
                this._elementTimer = 0;
                this._boundComplete = null;
                this._boundOnError = null;
                this._boundOnProgress = null;
                this._boundOnTimeout = null;
                this._boundXhrOnError = null;
                this._boundXhrOnTimeout = null;
                this._boundXhrOnAbort = null;
                this._boundXhrOnLoad = null;
                if (typeof t != "string" || typeof n != "string") {
                  throw new Error("Both name and url are required for constructing a resource.");
                }
                r = r || {};
                this._flags = 0;
                this._setFlag(e.STATUS_FLAGS.DATA_URL, n.indexOf("data:") === 0);
                this.name = t;
                this.url = n;
                this.extension = this._getExtension();
                this.data = null;
                this.crossOrigin = r.crossOrigin === true ? "anonymous" : r.crossOrigin;
                this.timeout = r.timeout || 0;
                this.loadType = r.loadType || this._determineLoadType();
                this.xhrType = r.xhrType;
                this.metadata = r.metadata || {};
                this.error = null;
                this.xhr = null;
                this.children = [];
                this.type = e.TYPE.UNKNOWN;
                this.progressChunk = 0;
                this._dequeue = c;
                this._onLoadBinding = null;
                this._elementTimer = 0;
                this._boundComplete = this.complete.bind(this);
                this._boundOnError = this._onError.bind(this);
                this._boundOnProgress = this._onProgress.bind(this);
                this._boundOnTimeout = this._onTimeout.bind(this);
                this._boundXhrOnError = this._xhrOnError.bind(this);
                this._boundXhrOnTimeout = this._xhrOnTimeout.bind(this);
                this._boundXhrOnAbort = this._xhrOnAbort.bind(this);
                this._boundXhrOnLoad = this._xhrOnLoad.bind(this);
                this.onStart = new h();
                this.onProgress = new h();
                this.onComplete = new h();
                this.onAfterMiddleware = new h();
              }
              e.setExtensionLoadType = function (t, n) {
                u(e._loadTypeMap, t, n);
              };
              e.setExtensionXhrType = function (t, n) {
                u(e._xhrTypeMap, t, n);
              };
              Object.defineProperty(e.prototype, "isDataUrl", {
                get: function () {
                  return this._hasFlag(e.STATUS_FLAGS.DATA_URL);
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "isComplete", {
                get: function () {
                  return this._hasFlag(e.STATUS_FLAGS.COMPLETE);
                },
                enumerable: false,
                configurable: true
              });
              Object.defineProperty(e.prototype, "isLoading", {
                get: function () {
                  return this._hasFlag(e.STATUS_FLAGS.LOADING);
                },
                enumerable: false,
                configurable: true
              });
              e.prototype.complete = function () {
                this._clearEvents();
                this._finish();
              };
              e.prototype.abort = function (t) {
                if (!this.error) {
                  this.error = new Error(t);
                  this._clearEvents();
                  if (this.xhr) {
                    this.xhr.abort();
                  } else if (this.xdr) {
                    this.xdr.abort();
                  } else if (this.data) {
                    if (this.data.src) {
                      this.data.src = e.EMPTY_GIF;
                    } else {
                      while (this.data.firstChild) {
                        this.data.removeChild(this.data.firstChild);
                      }
                    }
                  }
                  this._finish();
                }
              };
              e.prototype.load = function (t) {
                var n = this;
                if (!this.isLoading) {
                  if (this.isComplete) {
                    if (t) {
                      setTimeout(function () {
                        return t(n);
                      }, 1);
                    }
                  } else {
                    if (t) {
                      this.onComplete.once(t);
                    }
                    this._setFlag(e.STATUS_FLAGS.LOADING, true);
                    this.onStart.dispatch(this);
                    if (this.crossOrigin === false || typeof this.crossOrigin != "string") {
                      this.crossOrigin = this._determineCrossOrigin(this.url);
                    }
                    switch (this.loadType) {
                      case e.LOAD_TYPE.IMAGE:
                        this.type = e.TYPE.IMAGE;
                        this._loadElement("image");
                        break;
                      case e.LOAD_TYPE.AUDIO:
                        this.type = e.TYPE.AUDIO;
                        this._loadSourceElement("audio");
                        break;
                      case e.LOAD_TYPE.VIDEO:
                        this.type = e.TYPE.VIDEO;
                        this._loadSourceElement("video");
                        break;
                      case e.LOAD_TYPE.XHR:
                      default:
                        if (o === undefined) {
                          o = !!globalThis.XDomainRequest && !("withCredentials" in new XMLHttpRequest());
                        }
                        if (o && this.crossOrigin) {
                          this._loadXdr();
                        } else {
                          this._loadXhr();
                        }
                    }
                  }
                }
              };
              e.prototype._hasFlag = function (e) {
                return (this._flags & e) !== 0;
              };
              e.prototype._setFlag = function (e, t) {
                this._flags = t ? this._flags | e : this._flags & ~e;
              };
              e.prototype._clearEvents = function () {
                clearTimeout(this._elementTimer);
                if (this.data && this.data.removeEventListener) {
                  this.data.removeEventListener("error", this._boundOnError, false);
                  this.data.removeEventListener("load", this._boundComplete, false);
                  this.data.removeEventListener("progress", this._boundOnProgress, false);
                  this.data.removeEventListener("canplaythrough", this._boundComplete, false);
                }
                if (this.xhr) {
                  if (this.xhr.removeEventListener) {
                    this.xhr.removeEventListener("error", this._boundXhrOnError, false);
                    this.xhr.removeEventListener("timeout", this._boundXhrOnTimeout, false);
                    this.xhr.removeEventListener("abort", this._boundXhrOnAbort, false);
                    this.xhr.removeEventListener("progress", this._boundOnProgress, false);
                    this.xhr.removeEventListener("load", this._boundXhrOnLoad, false);
                  } else {
                    this.xhr.onerror = null;
                    this.xhr.ontimeout = null;
                    this.xhr.onprogress = null;
                    this.xhr.onload = null;
                  }
                }
              };
              e.prototype._finish = function () {
                if (this.isComplete) {
                  throw new Error("Complete called again for an already completed resource.");
                }
                this._setFlag(e.STATUS_FLAGS.COMPLETE, true);
                this._setFlag(e.STATUS_FLAGS.LOADING, false);
                this.onComplete.dispatch(this);
              };
              e.prototype._loadElement = function (e) {
                if (this.metadata.loadElement) {
                  this.data = this.metadata.loadElement;
                } else if (e === "image" && globalThis.Image !== undefined) {
                  this.data = new Image();
                } else {
                  this.data = document.createElement(e);
                }
                if (this.crossOrigin) {
                  this.data.crossOrigin = this.crossOrigin;
                }
                if (!this.metadata.skipSource) {
                  this.data.src = this.url;
                }
                this.data.addEventListener("error", this._boundOnError, false);
                this.data.addEventListener("load", this._boundComplete, false);
                this.data.addEventListener("progress", this._boundOnProgress, false);
                if (this.timeout) {
                  this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout);
                }
              };
              e.prototype._loadSourceElement = function (e) {
                if (this.metadata.loadElement) {
                  this.data = this.metadata.loadElement;
                } else if (e === "audio" && globalThis.Audio !== undefined) {
                  this.data = new Audio();
                } else {
                  this.data = document.createElement(e);
                }
                if (this.data !== null) {
                  if (this.crossOrigin) {
                    this.data.crossOrigin = this.crossOrigin;
                  }
                  if (!this.metadata.skipSource) {
                    if (navigator.isCocoonJS) {
                      this.data.src = Array.isArray(this.url) ? this.url[0] : this.url;
                    } else if (Array.isArray(this.url)) {
                      var t = this.metadata.mimeType;
                      for (var n = 0; n < this.url.length; ++n) {
                        this.data.appendChild(this._createSource(e, this.url[n], Array.isArray(t) ? t[n] : t));
                      }
                    } else {
                      t = this.metadata.mimeType;
                      this.data.appendChild(this._createSource(e, this.url, Array.isArray(t) ? t[0] : t));
                    }
                  }
                  this.data.addEventListener("error", this._boundOnError, false);
                  this.data.addEventListener("load", this._boundComplete, false);
                  this.data.addEventListener("progress", this._boundOnProgress, false);
                  this.data.addEventListener("canplaythrough", this._boundComplete, false);
                  this.data.load();
                  if (this.timeout) {
                    this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout);
                  }
                } else {
                  this.abort("Unsupported element: " + e);
                }
              };
              e.prototype._loadXhr = function () {
                if (typeof this.xhrType != "string") {
                  this.xhrType = this._determineXhrType();
                }
                var t = this.xhr = new XMLHttpRequest();
                if (this.crossOrigin === "use-credentials") {
                  t.withCredentials = true;
                }
                t.open("GET", this.url, true);
                t.timeout = this.timeout;
                if (this.xhrType === e.XHR_RESPONSE_TYPE.JSON || this.xhrType === e.XHR_RESPONSE_TYPE.DOCUMENT) {
                  t.responseType = e.XHR_RESPONSE_TYPE.TEXT;
                } else {
                  t.responseType = this.xhrType;
                }
                t.addEventListener("error", this._boundXhrOnError, false);
                t.addEventListener("timeout", this._boundXhrOnTimeout, false);
                t.addEventListener("abort", this._boundXhrOnAbort, false);
                t.addEventListener("progress", this._boundOnProgress, false);
                t.addEventListener("load", this._boundXhrOnLoad, false);
                t.send();
              };
              e.prototype._loadXdr = function () {
                if (typeof this.xhrType != "string") {
                  this.xhrType = this._determineXhrType();
                }
                var e = this.xhr = new globalThis.XDomainRequest();
                e.timeout = this.timeout || 5000;
                e.onerror = this._boundXhrOnError;
                e.ontimeout = this._boundXhrOnTimeout;
                e.onprogress = this._boundOnProgress;
                e.onload = this._boundXhrOnLoad;
                e.open("GET", this.url, true);
                setTimeout(function () {
                  return e.send();
                }, 1);
              };
              e.prototype._createSource = function (e, t, n) {
                n ||= e + "/" + this._getExtension(t);
                var r = document.createElement("source");
                r.src = t;
                r.type = n;
                return r;
              };
              e.prototype._onError = function (e) {
                this.abort("Failed to load element using: " + e.target.nodeName);
              };
              e.prototype._onProgress = function (e) {
                if (e && e.lengthComputable) {
                  this.onProgress.dispatch(this, e.loaded / e.total);
                }
              };
              e.prototype._onTimeout = function () {
                this.abort("Load timed out.");
              };
              e.prototype._xhrOnError = function () {
                var e = this.xhr;
                this.abort(p(e) + " Request failed. Status: " + e.status + ", text: \"" + e.statusText + "\"");
              };
              e.prototype._xhrOnTimeout = function () {
                var e = this.xhr;
                this.abort(p(e) + " Request timed out.");
              };
              e.prototype._xhrOnAbort = function () {
                var e = this.xhr;
                this.abort(p(e) + " Request was aborted by the user.");
              };
              e.prototype._xhrOnLoad = function () {
                var t = this.xhr;
                var n = "";
                var r = t.status === undefined ? 200 : t.status;
                if (t.responseType === "" || t.responseType === "text" || t.responseType === undefined) {
                  n = t.responseText;
                }
                if (r === 0 && (n.length > 0 || t.responseType === e.XHR_RESPONSE_TYPE.BUFFER)) {
                  r = 200;
                } else if (r === 1223) {
                  r = 204;
                }
                if ((r / 100 | 0) == 2) {
                  if (this.xhrType === e.XHR_RESPONSE_TYPE.TEXT) {
                    this.data = n;
                    this.type = e.TYPE.TEXT;
                  } else if (this.xhrType === e.XHR_RESPONSE_TYPE.JSON) {
                    try {
                      this.data = JSON.parse(n);
                      this.type = e.TYPE.JSON;
                    } catch (e) {
                      this.abort("Error trying to parse loaded json: " + e);
                      return;
                    }
                  } else if (this.xhrType === e.XHR_RESPONSE_TYPE.DOCUMENT) {
                    try {
                      if (globalThis.DOMParser) {
                        var i = new DOMParser();
                        this.data = i.parseFromString(n, "text/xml");
                      } else {
                        var s = document.createElement("div");
                        s.innerHTML = n;
                        this.data = s;
                      }
                      this.type = e.TYPE.XML;
                    } catch (e) {
                      this.abort("Error trying to parse loaded xml: " + e);
                      return;
                    }
                  } else {
                    this.data = t.response || n;
                  }
                  this.complete();
                } else {
                  this.abort("[" + t.status + "] " + t.statusText + ": " + t.responseURL);
                }
              };
              e.prototype._determineCrossOrigin = function (e, t) {
                if (e.indexOf("data:") === 0) {
                  return "";
                }
                if (globalThis.origin !== globalThis.location.origin) {
                  return "anonymous";
                }
                t = t || globalThis.location;
                d ||= document.createElement("a");
                d.href = e;
                var n = l(d.href, {
                  strictMode: true
                });
                var r = !n.port && t.port === "" || n.port === t.port;
                var i = n.protocol ? n.protocol + ":" : "";
                if (n.host === t.hostname && r && i === t.protocol) {
                  return "";
                } else {
                  return "anonymous";
                }
              };
              e.prototype._determineXhrType = function () {
                return e._xhrTypeMap[this.extension] || e.XHR_RESPONSE_TYPE.TEXT;
              };
              e.prototype._determineLoadType = function () {
                return e._loadTypeMap[this.extension] || e.LOAD_TYPE.XHR;
              };
              e.prototype._getExtension = function (e = this.url) {
                var t = "";
                if (this.isDataUrl) {
                  var n = e.indexOf("/");
                  t = e.substring(n + 1, e.indexOf(";", n));
                } else {
                  var r = e.indexOf("?");
                  var i = e.indexOf("#");
                  var s = Math.min(r > -1 ? r : e.length, i > -1 ? i : e.length);
                  t = (e = e.substring(0, s)).substring(e.lastIndexOf(".") + 1);
                }
                return t.toLowerCase();
              };
              e.prototype._getMimeFromXhrType = function (t) {
                switch (t) {
                  case e.XHR_RESPONSE_TYPE.BUFFER:
                    return "application/octet-binary";
                  case e.XHR_RESPONSE_TYPE.BLOB:
                    return "application/blob";
                  case e.XHR_RESPONSE_TYPE.DOCUMENT:
                    return "application/xml";
                  case e.XHR_RESPONSE_TYPE.JSON:
                    return "application/json";
                  case e.XHR_RESPONSE_TYPE.DEFAULT:
                  case e.XHR_RESPONSE_TYPE.TEXT:
                  default:
                    return "text/plain";
                }
              };
              return e;
            }();
            function f() {}
            function _(e) {
              return function () {
                var t = arguments;
                var n = [];
                for (var r = 0; r < arguments.length; r++) {
                  n[r] = t[r];
                }
                if (e === null) {
                  throw new Error("Callback was already called.");
                }
                var i = e;
                e = null;
                i.apply(this, n);
              };
            }
            (function (e) {
              var t;
              var n;
              var r;
              var i;
              (t = e.STATUS_FLAGS ||= {})[t.NONE = 0] = "NONE";
              t[t.DATA_URL = 1] = "DATA_URL";
              t[t.COMPLETE = 2] = "COMPLETE";
              t[t.LOADING = 4] = "LOADING";
              (n = e.TYPE ||= {})[n.UNKNOWN = 0] = "UNKNOWN";
              n[n.JSON = 1] = "JSON";
              n[n.XML = 2] = "XML";
              n[n.IMAGE = 3] = "IMAGE";
              n[n.AUDIO = 4] = "AUDIO";
              n[n.VIDEO = 5] = "VIDEO";
              n[n.TEXT = 6] = "TEXT";
              (r = e.LOAD_TYPE ||= {})[r.XHR = 1] = "XHR";
              r[r.IMAGE = 2] = "IMAGE";
              r[r.AUDIO = 3] = "AUDIO";
              r[r.VIDEO = 4] = "VIDEO";
              (i = e.XHR_RESPONSE_TYPE ||= {}).DEFAULT = "text";
              i.BUFFER = "arraybuffer";
              i.BLOB = "blob";
              i.DOCUMENT = "document";
              i.JSON = "json";
              i.TEXT = "text";
              e._loadTypeMap = {
                gif: e.LOAD_TYPE.IMAGE,
                png: e.LOAD_TYPE.IMAGE,
                bmp: e.LOAD_TYPE.IMAGE,
                jpg: e.LOAD_TYPE.IMAGE,
                jpeg: e.LOAD_TYPE.IMAGE,
                tif: e.LOAD_TYPE.IMAGE,
                tiff: e.LOAD_TYPE.IMAGE,
                webp: e.LOAD_TYPE.IMAGE,
                tga: e.LOAD_TYPE.IMAGE,
                avif: e.LOAD_TYPE.IMAGE,
                svg: e.LOAD_TYPE.IMAGE,
                "svg+xml": e.LOAD_TYPE.IMAGE,
                mp3: e.LOAD_TYPE.AUDIO,
                ogg: e.LOAD_TYPE.AUDIO,
                wav: e.LOAD_TYPE.AUDIO,
                mp4: e.LOAD_TYPE.VIDEO,
                webm: e.LOAD_TYPE.VIDEO
              };
              e._xhrTypeMap = {
                xhtml: e.XHR_RESPONSE_TYPE.DOCUMENT,
                html: e.XHR_RESPONSE_TYPE.DOCUMENT,
                htm: e.XHR_RESPONSE_TYPE.DOCUMENT,
                xml: e.XHR_RESPONSE_TYPE.DOCUMENT,
                tmx: e.XHR_RESPONSE_TYPE.DOCUMENT,
                svg: e.XHR_RESPONSE_TYPE.DOCUMENT,
                tsx: e.XHR_RESPONSE_TYPE.DOCUMENT,
                gif: e.XHR_RESPONSE_TYPE.BLOB,
                png: e.XHR_RESPONSE_TYPE.BLOB,
                bmp: e.XHR_RESPONSE_TYPE.BLOB,
                jpg: e.XHR_RESPONSE_TYPE.BLOB,
                jpeg: e.XHR_RESPONSE_TYPE.BLOB,
                tif: e.XHR_RESPONSE_TYPE.BLOB,
                tiff: e.XHR_RESPONSE_TYPE.BLOB,
                webp: e.XHR_RESPONSE_TYPE.BLOB,
                tga: e.XHR_RESPONSE_TYPE.BLOB,
                avif: e.XHR_RESPONSE_TYPE.BLOB,
                json: e.XHR_RESPONSE_TYPE.JSON,
                text: e.XHR_RESPONSE_TYPE.TEXT,
                txt: e.XHR_RESPONSE_TYPE.TEXT,
                ttf: e.XHR_RESPONSE_TYPE.BUFFER,
                otf: e.XHR_RESPONSE_TYPE.BUFFER
              };
              e.EMPTY_GIF = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
            })(m ||= {});
            function v(e, t) {
              this.data = e;
              this.callback = t;
            }
            var y = function () {
              function e(e, t) {
                var n = this;
                if (t === undefined) {
                  t = 1;
                }
                this.workers = 0;
                this.saturated = f;
                this.unsaturated = f;
                this.empty = f;
                this.drain = f;
                this.error = f;
                this.started = false;
                this.paused = false;
                this._tasks = [];
                this._insert = function (e, t, r) {
                  if (r && typeof r != "function") {
                    throw new Error("task callback must be a function");
                  }
                  n.started = true;
                  if (e == null && n.idle()) {
                    setTimeout(function () {
                      return n.drain();
                    }, 1);
                  } else {
                    var i = new v(e, typeof r == "function" ? r : f);
                    if (t) {
                      n._tasks.unshift(i);
                    } else {
                      n._tasks.push(i);
                    }
                    setTimeout(n.process, 1);
                  }
                };
                this.process = function () {
                  while (!n.paused && n.workers < n.concurrency && n._tasks.length) {
                    var e = n._tasks.shift();
                    if (n._tasks.length === 0) {
                      n.empty();
                    }
                    n.workers += 1;
                    if (n.workers === n.concurrency) {
                      n.saturated();
                    }
                    n._worker(e.data, _(n._next(e)));
                  }
                };
                this._worker = e;
                if (t === 0) {
                  throw new Error("Concurrency must not be zero");
                }
                this.concurrency = t;
                this.buffer = t / 4;
              }
              e.prototype._next = function (e) {
                var t = this;
                return function () {
                  var n = arguments;
                  var r = [];
                  for (var i = 0; i < arguments.length; i++) {
                    r[i] = n[i];
                  }
                  t.workers -= 1;
                  e.callback.apply(e, r);
                  if (r[0] != null) {
                    t.error(r[0], e.data);
                  }
                  if (t.workers <= t.concurrency - t.buffer) {
                    t.unsaturated();
                  }
                  if (t.idle()) {
                    t.drain();
                  }
                  t.process();
                };
              };
              e.prototype.push = function (e, t) {
                this._insert(e, false, t);
              };
              e.prototype.kill = function () {
                this.workers = 0;
                this.drain = f;
                this.started = false;
                this._tasks = [];
              };
              e.prototype.unshift = function (e, t) {
                this._insert(e, true, t);
              };
              e.prototype.length = function () {
                return this._tasks.length;
              };
              e.prototype.running = function () {
                return this.workers;
              };
              e.prototype.idle = function () {
                return this._tasks.length + this.workers === 0;
              };
              e.prototype.pause = function () {
                if (this.paused !== true) {
                  this.paused = true;
                }
              };
              e.prototype.resume = function () {
                if (this.paused !== false) {
                  this.paused = false;
                  for (var e = 1; e <= this.concurrency; e++) {
                    this.process();
                  }
                }
              };
              e.eachSeries = function (e, t, n, r) {
                var i = 0;
                var s = e.length;
                (function a(o) {
                  if (o || i === s) {
                    if (n) {
                      n(o);
                    }
                  } else if (r) {
                    setTimeout(function () {
                      t(e[i++], a);
                    }, 1);
                  } else {
                    t(e[i++], a);
                  }
                })();
              };
              e.queue = function (t, n) {
                return new e(t, n);
              };
              return e;
            }();
            var g = /(#[\w-]+)?$/;
            var w = function () {
              function e(t, n) {
                var r = this;
                if (t === undefined) {
                  t = "";
                }
                if (n === undefined) {
                  n = 10;
                }
                this.progress = 0;
                this.loading = false;
                this.defaultQueryString = "";
                this._beforeMiddleware = [];
                this._afterMiddleware = [];
                this._resourcesParsing = [];
                this._boundLoadResource = function (e, t) {
                  return r._loadResource(e, t);
                };
                this.resources = {};
                this.baseUrl = t;
                this._beforeMiddleware = [];
                this._afterMiddleware = [];
                this._resourcesParsing = [];
                this._boundLoadResource = function (e, t) {
                  return r._loadResource(e, t);
                };
                this._queue = y.queue(this._boundLoadResource, n);
                this._queue.pause();
                this.resources = {};
                this.onProgress = new h();
                this.onError = new h();
                this.onLoad = new h();
                this.onStart = new h();
                this.onComplete = new h();
                for (var i = 0; i < e._plugins.length; ++i) {
                  var s = e._plugins[i];
                  var a = s.pre;
                  var o = s.use;
                  if (a) {
                    this.pre(a);
                  }
                  if (o) {
                    this.use(o);
                  }
                }
                this._protected = false;
              }
              e.prototype._add = function (e, t, n, r) {
                if (this.loading && (!n || !n.parentResource)) {
                  throw new Error("Cannot add resources while the loader is running.");
                }
                if (this.resources[e]) {
                  throw new Error("Resource named \"" + e + "\" already exists.");
                }
                t = this._prepareUrl(t);
                this.resources[e] = new m(e, t, n);
                if (typeof r == "function") {
                  this.resources[e].onAfterMiddleware.once(r);
                }
                if (this.loading) {
                  for (var i = n.parentResource, s = [], a = 0; a < i.children.length; ++a) {
                    if (!i.children[a].isComplete) {
                      s.push(i.children[a]);
                    }
                  }
                  var o = i.progressChunk * (s.length + 1) / (s.length + 2);
                  i.children.push(this.resources[e]);
                  i.progressChunk = o;
                  a = 0;
                  for (; a < s.length; ++a) {
                    s[a].progressChunk = o;
                  }
                  this.resources[e].progressChunk = o;
                }
                this._queue.push(this.resources[e]);
                return this;
              };
              e.prototype.pre = function (e) {
                this._beforeMiddleware.push(e);
                return this;
              };
              e.prototype.use = function (e) {
                this._afterMiddleware.push(e);
                return this;
              };
              e.prototype.reset = function () {
                this.progress = 0;
                this.loading = false;
                this._queue.kill();
                this._queue.pause();
                for (var e in this.resources) {
                  var t = this.resources[e];
                  if (t._onLoadBinding) {
                    t._onLoadBinding.detach();
                  }
                  if (t.isLoading) {
                    t.abort("loader reset");
                  }
                }
                this.resources = {};
                return this;
              };
              e.prototype.load = function (e) {
                (0, i.deprecation)("6.5.0", "@pixi/loaders is being replaced with @pixi/assets in the next major release.");
                if (typeof e == "function") {
                  this.onComplete.once(e);
                }
                if (this.loading) {
                  return this;
                }
                if (this._queue.idle()) {
                  this._onStart();
                  this._onComplete();
                } else {
                  var t = 100 / this._queue._tasks.length;
                  for (var n = 0; n < this._queue._tasks.length; ++n) {
                    this._queue._tasks[n].data.progressChunk = t;
                  }
                  this._onStart();
                  this._queue.resume();
                }
                return this;
              };
              Object.defineProperty(e.prototype, "concurrency", {
                get: function () {
                  return this._queue.concurrency;
                },
                set: function (e) {
                  this._queue.concurrency = e;
                },
                enumerable: false,
                configurable: true
              });
              e.prototype._prepareUrl = function (e) {
                var t;
                var n = l(e, {
                  strictMode: true
                });
                t = n.protocol || !n.path || e.indexOf("//") === 0 ? e : this.baseUrl.length && this.baseUrl.lastIndexOf("/") !== this.baseUrl.length - 1 && e.charAt(0) !== "/" ? this.baseUrl + "/" + e : this.baseUrl + e;
                if (this.defaultQueryString) {
                  var r = g.exec(t)[0];
                  if ((t = t.slice(0, t.length - r.length)).indexOf("?") !== -1) {
                    t += "&" + this.defaultQueryString;
                  } else {
                    t += "?" + this.defaultQueryString;
                  }
                  t += r;
                }
                return t;
              };
              e.prototype._loadResource = function (e, t) {
                var n = this;
                e._dequeue = t;
                y.eachSeries(this._beforeMiddleware, function (t, r) {
                  t.call(n, e, function () {
                    r(e.isComplete ? {} : null);
                  });
                }, function () {
                  if (e.isComplete) {
                    n._onLoad(e);
                  } else {
                    e._onLoadBinding = e.onComplete.once(n._onLoad, n);
                    e.load();
                  }
                }, true);
              };
              e.prototype._onStart = function () {
                this.progress = 0;
                this.loading = true;
                this.onStart.dispatch(this);
              };
              e.prototype._onComplete = function () {
                this.progress = 100;
                this.loading = false;
                this.onComplete.dispatch(this, this.resources);
              };
              e.prototype._onLoad = function (e) {
                var t = this;
                e._onLoadBinding = null;
                this._resourcesParsing.push(e);
                e._dequeue();
                y.eachSeries(this._afterMiddleware, function (n, r) {
                  n.call(t, e, r);
                }, function () {
                  e.onAfterMiddleware.dispatch(e);
                  t.progress = Math.min(100, t.progress + e.progressChunk);
                  t.onProgress.dispatch(t, e);
                  if (e.error) {
                    t.onError.dispatch(e.error, t, e);
                  } else {
                    t.onLoad.dispatch(t, e);
                  }
                  t._resourcesParsing.splice(t._resourcesParsing.indexOf(e), 1);
                  if (t._queue.idle() && t._resourcesParsing.length === 0) {
                    t._onComplete();
                  }
                }, true);
              };
              e.prototype.destroy = function () {
                if (!this._protected) {
                  this.reset();
                }
              };
              Object.defineProperty(e, "shared", {
                get: function () {
                  var t = e._shared;
                  if (!t) {
                    (t = new e())._protected = true;
                    e._shared = t;
                  }
                  return t;
                },
                enumerable: false,
                configurable: true
              });
              e.registerPlugin = function (t) {
                (0, i.deprecation)("6.5.0", "Loader.registerPlugin() is deprecated, use extensions.add() instead.");
                r.XO.add({
                  type: r.Ag.Loader,
                  ref: t
                });
                return e;
              };
              e._plugins = [];
              return e;
            }();
            r.XO.handleByList(r.Ag.Loader, w._plugins);
            w.prototype.add = function (e, t, n, r) {
              if (Array.isArray(e)) {
                for (var i = 0; i < e.length; ++i) {
                  this.add(e[i]);
                }
                return this;
              }
              if (typeof e == "object") {
                n = e;
                r = t || n.callback || n.onComplete;
                t = n.url;
                e = n.name || n.key || n.url;
              }
              if (typeof t != "string") {
                r = n;
                n = t;
                t = e;
              }
              if (typeof t != "string") {
                throw new Error("No url passed to add resource to loader.");
              }
              if (typeof n == "function") {
                r = n;
                n = null;
              }
              return this._add(e, t, n, r);
            };
            var x = function () {
              function e() {}
              e.init = function (e) {
                e = Object.assign({
                  sharedLoader: false
                }, e);
                this.loader = e.sharedLoader ? w.shared : new w();
              };
              e.destroy = function () {
                if (this.loader) {
                  this.loader.destroy();
                  this.loader = null;
                }
              };
              e.extension = r.Ag.Application;
              return e;
            }();
            var b = function () {
              function e() {}
              e.add = function () {
                m.setExtensionLoadType("svg", m.LOAD_TYPE.XHR);
                m.setExtensionXhrType("svg", m.XHR_RESPONSE_TYPE.TEXT);
              };
              e.use = function (e, t) {
                if (!e.data || e.type !== m.TYPE.IMAGE && e.extension !== "svg") {
                  t();
                } else {
                  var n = e.data;
                  var i = e.url;
                  var s = e.name;
                  var a = e.metadata;
                  r.gP.fromLoader(n, i, s, a).then(function (n) {
                    e.texture = n;
                    t();
                  }).catch(t);
                }
              };
              e.extension = r.Ag.Loader;
              return e;
            }();
            function T(e, t) {
              if (e.data) {
                if (e.xhr && e.xhrType === m.XHR_RESPONSE_TYPE.BLOB) {
                  if (self.Blob && typeof e.data != "string") {
                    if (e.data.type.indexOf("image") === 0) {
                      var n = globalThis.URL || globalThis.webkitURL;
                      var r = n.createObjectURL(e.data);
                      e.blob = e.data;
                      e.data = new Image();
                      e.data.src = r;
                      e.type = m.TYPE.IMAGE;
                      e.data.onload = function () {
                        n.revokeObjectURL(r);
                        e.data.onload = null;
                        t();
                      };
                      return;
                    }
                  } else {
                    var i = e.xhr.getResponseHeader("content-type");
                    if (i && i.indexOf("image") === 0) {
                      e.data = new Image();
                      e.data.src = "data:" + i + ";base64," + function (e) {
                        var t = "";
                        for (var n = 0; n < e.length;) {
                          for (var r = [0, 0, 0], i = [0, 0, 0, 0], s = 0; s < r.length; ++s) {
                            if (n < e.length) {
                              r[s] = e.charCodeAt(n++) & 255;
                            } else {
                              r[s] = 0;
                            }
                          }
                          i[0] = r[0] >> 2;
                          i[1] = (r[0] & 3) << 4 | r[1] >> 4;
                          i[2] = (r[1] & 15) << 2 | r[2] >> 6;
                          i[3] = r[2] & 63;
                          switch (n - (e.length - 1)) {
                            case 2:
                              i[3] = 64;
                              i[2] = 64;
                              break;
                            case 1:
                              i[3] = 64;
                          }
                          for (s = 0; s < i.length; ++s) {
                            t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(i[s]);
                          }
                        }
                        return t;
                      }(e.xhr.responseText);
                      e.type = m.TYPE.IMAGE;
                      e.data.onload = function () {
                        e.data.onload = null;
                        t();
                      };
                      return;
                    }
                  }
                }
                t();
              } else {
                t();
              }
            }
            var A = function () {
              function e() {}
              e.extension = r.Ag.Loader;
              e.use = T;
              return e;
            }();
            r.XO.add(b, A);
          }
    });
})();
