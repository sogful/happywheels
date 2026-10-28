(() => {
  const frame = document.querySelector(".game-frame");
  const viewport = window.visualViewport;
  let previous = "";
  /*//////////////////////////////////////////////////////////////////////*/
  function fit() {
    const width = Math.min(document.documentElement.clientWidth, viewport?.width || window.innerWidth);
    const height = viewport?.height || window.innerHeight;
    const left = viewport?.offsetLeft || 0;
    const top = viewport?.offsetTop || 0;
    const current = [width, height, left, top].join(":");
    if (!width || !height || current === previous) return;
    previous = current;
    const canvaswidth = Math.min(width, height * 1.8);
    frame.style.width = `${width}px`;
    frame.style.height = `${height}px`;
    frame.style.left = `${left}px`;
    frame.style.top = `${top}px`;
    frame.style.setProperty("--canvaswidth", `${canvaswidth}px`);
    frame.style.setProperty("--canvasheight", `${canvaswidth / 1.8}px`);
    window.dispatchEvent(new Event("gameviewportchange"));
  }
  fit();
  window.addEventListener("resize", fit);
  window.addEventListener("orientationchange", fit);
  viewport?.addEventListener("resize", fit);
  viewport?.addEventListener("scroll", fit);
})();
