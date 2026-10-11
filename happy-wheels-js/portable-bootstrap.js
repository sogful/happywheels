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
    const localizeGameApiUrl = value => {
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
        const localizedUrl = localizeGameApiUrl(args[1]);
        this.__tjfPortableProxyRequest = localizedUrl !== args[1];
        args[1] = localizedUrl;
        return nativeXhrOpen.apply(this, args);
    };

    const nativeXhrSend = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.send = function() {
        if (this.__tjfPortableProxyRequest) {
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
            const rewritten = localizeGameApiUrl(input);
            if (rewritten === input || (input instanceof Request && rewritten === input.url)) {
                return nativeFetch(input, init);
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
            portableSource = portableSource.replaceAll("Nj()||NP(),", "void 0,");
            portableSource = portableSource.replaceAll(
                "location[NJ][Ng](Nr)[NS]()[Nd](NF,NM)[NS]()[Nz](Nr)===ND",
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
