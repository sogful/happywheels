(() => {
  const key = "tjf-portable-session";
  let current = null;
  function read() {
    let saved = null;
    let legacy = null;
    try {saved = localStorage.getItem(key)} catch (error) {}
    try {legacy = sessionStorage.getItem(key)} catch (error) {}
    current = saved || legacy || current;
    try {
      if (!saved && legacy) localStorage.setItem(key, legacy);
      sessionStorage.removeItem(key);
    } catch (error) {
      try {
        if (current) sessionStorage.setItem(key, current);
        else sessionStorage.removeItem(key);
      } catch (error) {}
    }
    return current;
  }
  function write(token) {
    current = token || null;
    try {
      if (current) localStorage.setItem(key, current);
      else localStorage.removeItem(key);
      sessionStorage.removeItem(key);
    } catch (error) {
      try {
        if (current) sessionStorage.setItem(key, current);
        else sessionStorage.removeItem(key);
      } catch (error) {}
    }
  }
  function capture(response, previous) {
    const token = response.headers.get("X-TJF-Session");
    if (token !== null && read() === previous) write(token);
    return response;
  }
  /*//////////////////////////////////////////////////////////////////////*/
  window.happywheelsession = {read, write, capture};
  window.addEventListener("storage", event => {
    if (event.key === key || event.key === null) current = event.newValue || null;
  });
})();
