const accountbutton = document.getElementById("account-button");
const accountpanel = document.getElementById("account-panel");
const accountform = document.getElementById("account-form");
const accountemail = document.getElementById("account-email");
const accountpassword = document.getElementById("account-password");
const accountfeedback = document.getElementById("account-feedback");
const accountsubmit = document.getElementById("account-submit");
const accounthud = document.querySelector(".account-hud");
let accountauthenticated = false;
const gamefiles = {
    dependencies: "./src/dependencies/index.js"
};

function storesessiontoken(token) {
    try {
        if (token) sessionStorage.setItem("tjf-portable-session", token);
        else sessionStorage.removeItem("tjf-portable-session");
    } catch (error) {}
}

async function calltjfapi(path, options = {}) {
    const headers = new Headers(options.headers || {});
    const token = sessionStorage.getItem("tjf-portable-session");
    if (token && path !== "/api/login") headers.set("Authorization", `Bearer ${token}`);
    const response = await fetch(`${window.TJF_WORKER_ORIGIN}${path}`, {
        ...options,
        headers,
        credentials: "omit",
        cache: "no-store"
    });
    const refreshedToken = response.headers.get("X-TJF-Session");
    if (refreshedToken !== null) storesessiontoken(refreshedToken);
    return response;
}

function setaccountstate(authenticated) {
    accountauthenticated = authenticated;
    accountbutton.textContent = authenticated ? "Log out" : "Log in";
    accountbutton.dataset.authenticated = String(authenticated);
    accountbutton.setAttribute("aria-label", authenticated ? "Log out" : "Log in");
    accountpanel.hidden = true;
    accountbutton.setAttribute("aria-expanded", "false");
    accountemail.value = "";
    accountpassword.value = "";
    accountfeedback.textContent = "";
    accountfeedback.dataset.state = "";
}

function setaccountvisibility(visible) {
    accounthud.hidden = !visible;
    if (!visible) {
        accountpanel.hidden = true;
        accountbutton.setAttribute("aria-expanded", "false");
    }
}

window.setaccountvisibility = setaccountvisibility;

async function refreshaccountstate() {
    try {
        const response = await calltjfapi("/api/account");
        if (response.ok) {
            const result = await response.json();
            setaccountstate(Boolean(result.authenticated));
        } else {
            setaccountstate(false);
        }
    } catch (error) {
        setaccountstate(false);
    }
}

accountbutton.addEventListener("click", async () => {
    const panelwasopen = !accountpanel.hidden;
    await refreshaccountstate();
    if (accountauthenticated) {
        accountbutton.disabled = true;
        try {
            const response = await calltjfapi("/api/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: "{}",
                cache: "no-store"
            });
            if (!response.ok) throw new Error("logout failed");
            setaccountstate(false);
            window.location.reload();
        } catch (error) {
            accountfeedback.textContent = "Could not log out. Try again.";
            accountfeedback.dataset.state = "error";
            accountpanel.hidden = false;
            accountbutton.setAttribute("aria-expanded", "true");
        } finally {
            accountbutton.disabled = false;
        }
        return;
    }
    accountpanel.hidden = panelwasopen;
    accountbutton.setAttribute("aria-expanded", String(!accountpanel.hidden));
    if (!accountpanel.hidden) accountemail.focus();
});

document.getElementById("account-close").addEventListener("click", () => {
    accountpanel.hidden = true;
    accountbutton.setAttribute("aria-expanded", "false");
});

accountform.addEventListener("submit", async event => {
    event.preventDefault();
    accountsubmit.disabled = true;
    accountsubmit.setAttribute("aria-label", "Logging in...");
    accountfeedback.textContent = "Logging in...";
    accountfeedback.dataset.state = "pending";
    const credentials = JSON.stringify({ email: accountemail.value, password: accountpassword.value });
    accountpassword.value = "";
    try {
        const response = await calltjfapi("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: credentials,
            cache: "no-store"
        });
        const result = await response.json();
        if (response.ok && result.ok && typeof result.token === "string") {
            storesessiontoken(result.token);
            setaccountstate(true);
            window.location.reload();
            return;
        }
        const messages = {
            credentials: "No matching email and password.",
            verification: "Verify your email with Totaljerkface before signing in.",
            lockout: "Too many login attempts. Wait before trying again.",
            origin: "The local sign-in request was rejected.",
            format: "Enter a valid email and password.",
            unavailable: "Totaljerkface could not complete sign-in. Try again later."
        };
        accountfeedback.textContent = messages[result.reason] || messages.unavailable;
        accountfeedback.dataset.state = "error";
    } catch (error) {
        accountfeedback.textContent = "Could not reach the sign-in service. Check your connection and try again.";
        accountfeedback.dataset.state = "error";
    } finally {
        accountsubmit.disabled = false;
        accountsubmit.setAttribute("aria-label", "Log in");
    }
});

refreshaccountstate();

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
        calltjfapi("/api/account")
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
