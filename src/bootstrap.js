(() => {
    const isLoopbackHost = ["localhost", "127.0.0.1", "[::1]"].includes(window.location.hostname);
    const useLocalWorker = isLoopbackHost && new URLSearchParams(window.location.search).get("tjf_worker") === "local";
    const workerOrigin = useLocalWorker
        ? "http://127.0.0.1:8787"
        : "https://tjfcors.coolsite.cv";
    window.TJF_WORKER_ORIGIN = workerOrigin;
    const sessionStorageKey = "tjf-portable-session";
    const getSessionToken = () => {
        try {
            return window.sessionStorage.getItem(sessionStorageKey);
        } catch (error) {
            return null;
        }
    };
    const storeSessionToken = token => {
        try {
            if (token) window.sessionStorage.setItem(sessionStorageKey, token);
            else window.sessionStorage.removeItem(sessionStorageKey);
        } catch (error) {}
    };
    const captureSessionToken = response => {
        const token = response.headers.get("X-TJF-Session");
        if (token !== null) storeSessionToken(token);
        return response;
    };
    const localizegameasseturl = value => {
        let url;
        try {
            url = new URL(value instanceof Request ? value.url : value, window.location.href);
        } catch (error) {
            return value;
        }
        const assetprefix = "/assets-111pu7do4muiyxxfu/";
        const assetprefixindex = url.pathname.indexOf(assetprefix);
        if (assetprefixindex < 0) return value;
        const assetpath = url.pathname.slice(assetprefixindex + assetprefix.length);
        const assetroot = assetpath.split("/", 1)[0];
        const assetdirectories = {
            animate: "assets/images/animate",
            editor: "assets/images/editor",
            fonts: "assets/fonts",
            image: "assets/images",
            shapes: "assets/static/shapes"
        };
        const audiofiles = {
            "audiosprite.small.mp3": "assets/audio/sfxall.mp3",
            "audiosprite.small.ogg": "assets/audio/sfxall.ogg"
        };
        const assetdirectory = assetdirectories[assetroot];
        const localassetpath = audiofiles[assetroot] || (assetdirectory && `${assetdirectory}/${assetpath.slice(assetroot.length).replace(/^\/+/, "")}`);
        if (!localassetpath) return value;
        const localurl = new URL(localassetpath, new URL("./", window.location.href));
        localurl.search = url.search;
        localurl.hash = url.hash;
        return localurl.href;
    };

    const localizegameapiurl = value => {
        let url;
        try {
            url = new URL(value instanceof Request ? value.url : value, window.location.href);
        } catch (error) {
            return value;
        }
        if (!new Set(["totaljerkface.com", "www.totaljerkface.com"]).has(url.hostname) || !url.pathname.toLowerCase().endsWith(".hw")) {
            return value;
        }
        return `${workerOrigin}/proxy${url.pathname}${url.search}`;
    };

    const nativeXhrOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        const args = Array.from(arguments);
        const apiurl = localizegameapiurl(args[1]);
        const localizedurl = localizegameasseturl(apiurl);
        this.__tjfportableproxyrequest = apiurl !== args[1];
        args[1] = localizedurl;
        return nativeXhrOpen.apply(this, args);
    };

    const nativeXhrSend = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.send = function() {
        if (this.__tjfportableproxyrequest) {
            const token = getSessionToken();
            if (token) this.setRequestHeader("Authorization", `Bearer ${token}`);
            this.addEventListener("loadend", () => {
                try {
                    const refreshedToken = this.getResponseHeader("X-TJF-Session");
                    if (refreshedToken !== null) storeSessionToken(refreshedToken);
                } catch (error) {}
            }, { once: true });
        }
        return nativeXhrSend.apply(this, arguments);
    };

    if (typeof window.fetch === "function") {
        const nativeFetch = window.fetch.bind(window);
        window.fetch = (input, init) => {
            const apiurl = localizegameapiurl(input);
            const rewritten = localizegameasseturl(apiurl);
            if (rewritten === input || (input instanceof Request && rewritten === input.url)) {
                return nativeFetch(input, init);
            }
            const isgameapirequest = apiurl !== input;
            if (!isgameapirequest) {
                const requestInput = input instanceof Request ? new Request(rewritten, input) : rewritten;
                return nativeFetch(requestInput, init);
            }
            const requestHeaders = input instanceof Request ? input.headers : undefined;
            const headers = new Headers(init?.headers || requestHeaders || {});
            const token = getSessionToken();
            if (token) headers.set("Authorization", `Bearer ${token}`);
            const requestInit = {
                ...init,
                headers,
                credentials: "omit",
                cache: "no-store"
            };
            const requestInput = input instanceof Request ? new Request(rewritten, input) : rewritten;
            return nativeFetch(requestInput, requestInit).then(captureSessionToken);
        };
    }

    const localizeurlproperty = (prototype, property) => {
        const descriptor = Object.getOwnPropertyDescriptor(prototype, property);
        if (!descriptor || typeof descriptor.set !== "function") return;
        Object.defineProperty(prototype, property, {
            configurable: descriptor.configurable,
            enumerable: descriptor.enumerable,
            get: descriptor.get,
            set(value) {
                descriptor.set.call(this, localizegameasseturl(value));
            }
        });
    };
    localizeurlproperty(HTMLImageElement.prototype, "src");
    localizeurlproperty(HTMLLinkElement.prototype, "href");
    localizeurlproperty(HTMLMediaElement.prototype, "src");
    localizeurlproperty(HTMLSourceElement.prototype, "src");
    const nativesetattribute = Element.prototype.setAttribute;
    Element.prototype.setAttribute = function(name, value) {
        const normalizedname = name.toLowerCase();
        if (normalizedname === "src" || normalizedname === "href") value = localizegameasseturl(value);
        return nativesetattribute.call(this, name, value);
    };

    const viewportWidth = () => document.documentElement.clientWidth || 1280;
    const viewportHeight = () => document.documentElement.clientHeight || 720;
    const nativeScreen = window.screen;
    const screenMetrics = {};
    Object.defineProperties(screenMetrics, {
        width: { enumerable: true, get: () => nativeScreen?.width || viewportWidth() },
        height: { enumerable: true, get: () => nativeScreen?.height || viewportHeight() },
        availWidth: { enumerable: true, get: () => nativeScreen?.availWidth || viewportWidth() },
        availHeight: { enumerable: true, get: () => nativeScreen?.availHeight || viewportHeight() },
        colorDepth: { enumerable: true, get: () => nativeScreen?.colorDepth || 24 },
        pixelDepth: { enumerable: true, get: () => nativeScreen?.pixelDepth || 24 }
    });
    try {
        Object.defineProperty(window, "screen", { enumerable: true, configurable: false, value: screenMetrics });
    } catch (error) {}
    try {
        Object.defineProperty(window, "innerWidth", { enumerable: true, configurable: false, get: viewportWidth });
    } catch (error) {}
    try {
        Object.defineProperty(window, "innerHeight", { enumerable: true, configurable: false, get: viewportHeight });
    } catch (error) {}
    if (typeof window.focus !== "function") {
        Object.defineProperty(window, "focus", { enumerable: true, configurable: false, value() {} });
    }
    if (typeof window.requestAnimationFrame !== "function") {
        Object.defineProperty(window, "requestAnimationFrame", {
            enumerable: true,
            configurable: false,
            value(callback) {
                return window.setTimeout(() => callback(window.performance?.now?.() ?? Date.now()), 16);
            }
        });
    }
    if (typeof window.cancelAnimationFrame !== "function") {
        Object.defineProperty(window, "cancelAnimationFrame", {
            enumerable: true,
            configurable: false,
            value(handle) {
                window.clearTimeout(handle);
            }
        });
    }

    const nativeFunction = window.Function;
    const proxyFunction = new Proxy(nativeFunction, {
        apply(target, receiver, args) {
            return callWithPortableSource(target, receiver, args, false);
        },
        construct(target, args, newTarget) {
            return callWithPortableSource(target, newTarget, args, true);
        }
    });
    function callWithPortableSource(target, receiver, args, construct) {
        const modifiedArgs = args.slice();
        const source = modifiedArgs.length ? modifiedArgs[modifiedArgs.length - 1] : null;

        if (typeof source === "string") {
            const hostGuard = "in\u200C\u200C(do\u200C[30]+do\u200C[31]).location.href";
            let portableSource = source;
            if (portableSource.includes(hostGuard)) {
                portableSource = portableSource.split(hostGuard).join('"https://totaljerkface.com/"');
            }
            portableSource = portableSource.replaceAll("a0N();", "void 0;");
            portableSource = portableSource.replaceAll("a0q(),", "void 0,");
            portableSource = portableSource.replace(/\bNj\(\)\s*\|\|\s*NP\(\)/g, "void 0");
            portableSource = portableSource.replace(
                /location\s*\[\s*NJ\s*\]\s*\[\s*Ng\s*\]\s*\(\s*Nr\s*\)\s*\[\s*NS\s*\]\s*\(\s*\)\s*\[\s*Nd\s*\]\s*\(\s*NF\s*,\s*NM\s*\)\s*\[\s*NS\s*\]\s*\(\s*\)\s*\[\s*Nz\s*\]\s*\(\s*Nr\s*\)\s*===\s*ND/g,
                "true"
            );
            portableSource = portableSource.replace(/\bscreen(?=\s*[\[.])/g, "window.screen");
            modifiedArgs[modifiedArgs.length - 1] = portableSource;
        }

        if (construct) {
            return Reflect.construct(target, modifiedArgs, receiver === proxyFunction ? target : receiver);
        }

        return Reflect.apply(target, receiver, modifiedArgs);
    }

    window.Function = proxyFunction;
})();
