(() => {
  let identity = {authenticated: false};
  let stage = null;
  let controller = null;
  let busy = false;
  let notice = "";
  /*//////////////////////////////////////////////////////////////////////*/
  function publish() {
    window.dispatchEvent(new CustomEvent("gameaccountchange", {detail: {authenticated: identity.authenticated, username: identity.username || "", busy, notice}}));
  }
  function apply(result) {
    identity = result;
    const userid = result.authenticated ? Number(result.user_id) : -1;
    const username = result.authenticated ? result.username : "";
    Object.assign(window.HW_SETTINGS || {}, {user_id: userid, username});
    if (window.happywheelrequire) Object.assign(window.happywheelrequire(0x88f1).w, {user_id: userid, username});
    if (controller) {
      controller._userID = userid;
      controller._userName = username;
    }
    publish();
  }
  async function request(path, options = {}) {
    const headers = new Headers(options.headers || {});
    const token = window.happywheelsession.read();
    if (token && path !== "/api/login") headers.set("Authorization", `Bearer ${token}`);
    const controller = new AbortController();
    const abort = () => controller.abort();
    const timer = setTimeout(abort, 15000);
    if (options.signal?.aborted) abort();
    else options.signal?.addEventListener("abort", abort, {once: true});
    try {
      const response = await fetch(`${window.TJF_WORKER_ORIGIN}${path}`, {
        ...options, headers, signal: controller.signal, credentials: "omit", cache: "no-store"
      });
      return window.happywheelsession.capture(response, token);
    } finally {
      clearTimeout(timer);
      options.signal?.removeEventListener("abort", abort);
    }
  }
  function announce(message) {
    notice = message;
    publish();
  }
  async function refresh() {
    const response = await request("/api/account");
    if (!response.ok) throw new Error("Account lookup failed");
    const result = await response.json();
    if (result.authenticated && (!Number.isSafeInteger(Number(result.user_id)) || typeof result.username !== "string")) throw new Error("Invalid account response");
    apply(result);
    return result;
  }
  /*//////////////////////////////////////////////////////////////////////*/
  window.setaccountvisibility = (visible, currentstage, currentcontroller) => {
    if (currentstage) stage = currentstage;
    if (currentcontroller) controller = currentcontroller;
    if (!visible && window.happywheelrequire) window.happywheelrequire("accountdialog").close();
  };
  window.happywheelaccount = {
    announce, request, refresh,
    get state() {return {authenticated: Boolean(identity.authenticated), username: identity.username || "", busy, notice}},
    closed() {announce("")},
    async login(email, password, signal) {
      const response = await request("/api/login", {
        method: "POST", headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email, password}), signal
      });
      const result = await response.json();
      if (response.ok && result.ok && typeof result.token === "string") {
        window.happywheelsession.write(result.token);
        await refresh();
        return {ok: true};
      }
      return {ok: false, reason: result.reason};
    },
    async activate() {
      if (busy) return;
      if (!identity.authenticated) {
        if (stage) window.happywheelrequire("accountdialog").open(stage);
        return;
      }
      busy = true;
      announce("Logging out...");
      try {
        const response = await request("/api/logout", {
          method: "POST", headers: {"Content-Type": "application/json"}, body: "{}"
        });
        if (!response.ok) throw new Error("Logout failed");
        window.happywheelsession.write(null);
        notice = "";
        apply({authenticated: false});
      } catch (error) {
        announce("Could not log out. Please try again.");
      } finally {
        busy = false;
        publish();
      }
    }
  };
  window.addEventListener("storage", event => {
    if (event.key === "tjf-portable-session" || event.key === null) refresh().catch(() => {});
  });
})();
