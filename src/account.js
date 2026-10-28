(() => {
  const button = document.querySelector(".account-toggle");
  const hud = document.querySelector(".account-hud");
  const feedback = document.querySelector(".account-feedback");
  let authenticated = false;
  let stage = null;
  let busy = false;
  /*//////////////////////////////////////////////////////////////////////*/
  function storesessiontoken(token) {
    try {
      if (token) sessionStorage.setItem("tjf-portable-session", token);
      else sessionStorage.removeItem("tjf-portable-session");
    } catch (error) {}
  }
  async function request(path, options = {}) {
    const headers = new Headers(options.headers || {});
    let token = null;
    try {token = sessionStorage.getItem("tjf-portable-session")} catch (error) {}
    if (token && path !== "/api/login") headers.set("Authorization", `Bearer ${token}`);
    const response = await fetch(`${window.TJF_WORKER_ORIGIN}${path}`, {
      ...options,
      headers,
      credentials: "omit",
      cache: "no-store"
    });
    const refreshed = response.headers.get("X-TJF-Session");
    if (refreshed !== null) storesessiontoken(refreshed);
    return response;
  }
  function setstate(value) {
    authenticated = value;
    button.textContent = value ? "Log out" : "Log in";
    button.dataset.authenticated = String(value);
    button.setAttribute("aria-label", button.textContent);
  }
  function announce(message, visible = false) {
    feedback.textContent = message;
    feedback.classList.toggle("accountnotice", visible);
  }
  async function refresh() {
    try {
      const response = await request("/api/account");
      const result = response.ok ? await response.json() : {};
      setstate(Boolean(result.authenticated));
    } catch (error) {
      setstate(false);
    }
  }
  /*//////////////////////////////////////////////////////////////////////*/
  window.setaccountvisibility = (visible, currentstage) => {
    hud.hidden = !visible;
    if (currentstage) stage = currentstage;
    if (!visible && window.happywheelrequire) window.happywheelrequire("accountdialog").close();
  };
  window.happywheelaccount = {
    announce,
    request,
    closed() {
      button.setAttribute("aria-expanded", "false");
      announce("");
      if (!hud.hidden) button.focus({preventScroll: true});
    },
    async login(email, password, signal) {
      const response = await request("/api/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email, password}),
        signal
      });
      const result = await response.json();
      if (response.ok && result.ok && typeof result.token === "string") {
        storesessiontoken(result.token);
        setstate(true);
        return {ok: true};
      }
      return {ok: false, reason: result.reason};
    }
  };
  button.addEventListener("click", async () => {
    if (busy) return;
    busy = true;
    button.disabled = true;
    try {
      await refresh();
      if (hud.hidden) return;
      if (authenticated) {
        announce("Logging out...", true);
        const response = await request("/api/logout", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: "{}"
        });
        if (!response.ok) throw new Error("logout failed");
        storesessiontoken(null);
        setstate(false);
        window.location.reload();
      } else if (button.getAttribute("aria-expanded") === "true") {
        window.happywheelrequire("accountdialog").close();
      } else if (stage) {
        announce("");
        window.happywheelrequire("accountdialog").open(stage);
        button.setAttribute("aria-expanded", "true");
      }
    } catch (error) {
      announce("Could not reach the account service. Please try again.", true);
    } finally {
      busy = false;
      button.disabled = false;
    }
  });
  refresh();
})();
