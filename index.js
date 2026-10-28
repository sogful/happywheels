const gamefiles = {dependencies: "./src/dependencies/index.js"};

(function() {
    function gettitlelabel() {
        const labels = [
            "JS Edition",
            "HTML5 Edition",
            "Flashless Version",
            "RIP Flash Edition",
            "Flash Is Dead!",
            "Farewell Flash...",
            "Without that plugin",
            "Does Jim know I put this here?"
        ];
        return labels[Math.floor(Math.random() * labels.length)];
    }

    function retryonerror(safemode) {
        if (safemode) {
            const urlparams = new URLSearchParams(window.location.search);
            urlparams.set("s", "on");
            window.location.search = urlparams;
        }

        setTimeout(window.location.reload.bind(window.location), (Math.random() * 4000) + 3000);
    }

    window["HW_SETTINGS"] = {
        "siteURL": "https://totaljerkface.com/",
        "pathPrefix": "",
        "titleLabel": gettitlelabel(),
        "titleLabelX": 645,
        "titleLabelY": 250,
        "titleLabelRotation": 0,
        "titleLabelSize": 20,
        "titleLabelColor": 0xfdfd65,
        "resolutionZoomIncreaseRatio": 0.5,
        "tesselation": "tess2"
    };

    const guardedglobalnames = [
        "focus",
        "scrollTo",
        "requestAnimationFrame",
        "cancelAnimationFrame",
        "setTimeout",
        "clearTimeout",
        "setInterval",
        "clearInterval",
        "performance",
        "HW_SETTINGS",
        "localStorage",
        "sessionStorage",
    ];
    for (const name of guardedglobalnames) {
        const descriptor = Object.getOwnPropertyDescriptor(window, name);
        if (!descriptor) {
            continue;
        }
        if ("writable" in descriptor) {
            descriptor.writable = false;
        }
        descriptor.configurable = false;
        try {
            Object.defineProperty(window, name, descriptor);
        } catch (error) {}
    }

    const urlparams = new URLSearchParams(window.location.search);
    const replayid = urlparams.get("replay_id");
    const levelid = urlparams.get("level_id");
    if (replayid !== null && replayid !== "" && !isNaN(replayid)) {
        window["HW_SETTINGS"]["replay_id"] = replayid;
    }
    if (levelid !== null && levelid !== "" && !isNaN(levelid)) {
        window["HW_SETTINGS"]["level_id"] = levelid;
    }

    const loaddependency = (name, safemode) => new Promise((resolve, reject) => {
        const dependencyelement = document.createElement("script");
        let dependencyurl = gamefiles[name];
        if (safemode) dependencyurl += "?x=" + Math.random();
        dependencyelement.async = false;
        dependencyelement.src = dependencyurl;
        dependencyelement.defer = "defer";
        dependencyelement.onload = resolve;
        dependencyelement.onerror = reject;
        document.body.appendChild(dependencyelement);
    });

    const loadscript = scripturl => new Promise((resolve, reject) => {
        const scriptelement = document.createElement("script");
        scriptelement.async = false;
        const cachebustedurl = new URL(scripturl, window.location.href);
        cachebustedurl.searchParams.set("v", String(Date.now()));
        scriptelement.src = cachebustedurl.href;
        scriptelement.onload = resolve;
        scriptelement.onerror = reject;
        document.body.appendChild(scriptelement);
    });

    const safemodeenabled = false;
    try {
        window.happywheelaccount.request("/api/account")
            .then(function(response) { return response.ok ? response.json() : null; })
            .catch(function() { return null; })
            .then(function(account) {
                const userid = Number(account && account.user_id);
                if (account && account.authenticated && Number.isSafeInteger(userid) && typeof account.username === "string") {
                    window.HW_SETTINGS.user_id = userid;
                    window.HW_SETTINGS.username = account.username;
                }
                return loaddependency("dependencies", safemodeenabled)
                    .then(() => window.happywheeldependencies)
                    .then(() => {
                        window.happywheelrecovery = { branch: true };
                        return loadscript("./src/assemble.js")
                            .then(() => {
                                window.happywheelrecovery.assembler = typeof window.loadrecoveredgamemodules;
                                return window.loadrecoveredgamemodules();
                            })
                            .then(() => {
                                window.happywheelrecovery.factories = Object.keys(window.happywheelgamemodules).length;
                                return loadscript("./src/runtime.js");
                            })
                            .then(() => {
                                window.happywheelrecovery.runtime = typeof window.happywheelrequire;
                            });
                    });
            })
            .catch(() => retryonerror(true));
    } catch (error) {
        retryonerror();
    }
})();
