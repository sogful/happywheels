(() => {
  const scripturl = document.currentScript.src;
  window.loadrecoveredgamemodules = async function () {
    const response = await fetch(new URL("module-map.json", scripturl), { cache: "no-store" });
    if (!response.ok) throw new Error("Module map failed :(");
    const entries = await response.json();
    const registry = window.happywheelgamemodules || (window.happywheelgamemodules = {});
    const factories = await Promise.all(entries.map(async entry => {
      const sourceResponse = await fetch(new URL(entry.file, scripturl), { cache: "no-store" });
      if (!sourceResponse.ok) throw new Error("Couldnt load the module source?! " + entry.file);
      const source = await sourceResponse.text();
      return [entry.id, Function("return (" + source + ");")()];
    }));
    for (const [id, factory] of factories) registry[id] = factory;
    return registry;
  };
})();
