function (module, exports, require) {
  "use strict";
  const display = require(0x136b);
  const widgets = require(0x3432);
  const settings = require(0x88f1).w;
  const sprites = require(0xb65a);
  const resources = require(0x56e7).Qh.instance;
  const variants = new Map();
  const sources = new Map();
  function snapshot(texture) {
    if (!texture?.baseTexture || !texture.frame) return null;
    return {base: texture.baseTexture, frame: texture.frame.clone(), orig: texture.orig.clone(), trim: texture.trim?.clone(), rotate: texture.rotate};
  }
  function restore(texture, saved) {
    if (texture.baseTexture === saved.base && texture.frame.x === saved.frame.x && texture.frame.y === saved.frame.y && texture.frame.width === saved.frame.width && texture.frame.height === saved.frame.height) return;
    texture.baseTexture = saved.base;
    texture.trim = saved.trim ? saved.trim.clone() : null;
    texture.rotate = saved.rotate;
    texture.frame = saved.frame.clone();
    texture.orig = saved.orig.clone();
    texture.updateUvs();
  }
  /*//////////////////////////////////////////////////////////////////////*/
  function save() {settings.sharedObject.flush()}
  function update(options) {
    const left = settings.sharedObject.data.touchhand === "left";
    options.handbutton.label = left ? "left-handed" : "right-handed";
    options.handbutton.visible = settings.mobileControls;
    options.touchControlsCheck.gotoAndStop(settings.mobileControls ? 2 : 1);
    for (const quality of ["Low", "Medium", "High"]) {
      const button = options[`textureResolution${quality}Check`];
      button.gotoAndStop(settings.textureResolution === quality.toLowerCase() ? 2 : 1);
    }
  }
  function attach(options) {
    options.handbutton = new widgets.Ch("right-handed", 0x3d88c7, 130);
    options.handbutton.x = 640;
    options.handbutton.y = 383;
    options.handbind = () => {
      settings.sharedObject.data.touchhand = settings.sharedObject.data.touchhand === "left" ? "right" : "left";
      save();
      window.dispatchEvent(new Event("gametouchlayoutchange"));
      update(options);
    };
    options.handbutton.addEventListener(display.Cm.MOUSE_UP, options.handbind);
    options.addChild(options.handbutton);
    options.settingstatus = new display.A_();
    options.settingstatus.defaultTextFormat = new display.lk("HelveticaNeueLT Std", 11, 0xffffff);
    options.settingstatus.autoSize = display.wL.LEFT;
    options.settingstatus.x = 465;
    options.settingstatus.y = 405;
    options.addChild(options.settingstatus);
    update(options);
  }
  function detach(options) {
    options.closed = true;
    if (options.handbutton) options.handbutton.removeEventListener(display.Cm.MOUSE_UP, options.handbind);
  }
  async function touch(options) {
    if (options.settingbusy) return;
    options.settingbusy = true;
    options.mouseChildren = false;
    const previous = settings.mobileControlOverride;
    settings.mobileControlOverride = !settings.mobileControls;
    try {
      const images = ["move", "reset", "grab", "lean", "superman", "jump", "arch", "break", "pushup", "tuck", "eject", "pause", "jet"];
      if (settings.mobileControls && !images.every(name => sprites.WpD.TextureCache[`controls_gameplay_btn_${name}.png`])) {
        const atlas = await fetch("./assets/images/mobile_controls/mobile_controls.json").then(response => {
          if (!response.ok) throw new Error("Controls could not load");
          return response.json();
        });
        const base = sprites.t5M.from("./assets/images/mobile_controls/mobile_controls.png");
        if (!base.valid) await new Promise((resolve, reject) => {base.once("loaded", resolve); base.once("error", reject)});
        base.setResolution(1);
        const sheet = new sprites.zo6(base, atlas);
        await sheet.parse();
      }
      settings.sharedObject.data.mobileControlOverride = settings.mobileControlOverride;
      save();
      window.dispatchEvent(new Event("gametouchlayoutchange"));
    } catch (error) {
      settings.mobileControlOverride = previous;
      options.settingstatus.text = "Could not load touch controls. Try again.";
    }
    options.settingbusy = false;
    if (!options.closed) {options.mouseChildren = true; update(options)}
  }
  /*//////////////////////////////////////////////////////////////////////*/
  async function loadvariants(images, value, progress) {
    let completed = 0;
    const loaded = {};
    const entries = Object.entries(images);
    const results = await Promise.allSettled(entries.map(async ([name, entry]) => {
      const url = new URL(resources.basePath + entry[value], location.href);
      const response = await fetch(url, {signal: AbortSignal.timeout(20000)});
      if (!response.ok) throw new Error("Textures could not load");
      const data = await response.json();
      const image = new URL(data.meta.image, url);
      image.searchParams.set("portablequality", value);
      const base = sprites.t5M.from(image.href);
      if (!base.valid) await new Promise((resolve, reject) => {
        const finish = error => {
          clearTimeout(timer);
          base.off("loaded", ready);
          base.off("error", failed);
          if (error) {sprites.t5M.removeFromCache(image.href); reject(error)} else resolve();
        };
        const ready = () => finish();
        const failed = () => finish(new Error("Textures could not load"));
        const timer = setTimeout(failed, 20000);
        base.once("loaded", ready);
        base.once("error", failed);
      });
      base.setResolution(1);
      const sheet = new sprites.zo6(base, data);
      await sheet.parse();
      loaded[name] = sheet;
      progress(++completed / entries.length * 100);
    }));
    const failure = results.find(result => result.status === "rejected");
    if (failure) throw failure.reason;
    for (const sheet of Object.values(loaded)) {
      for (const texture of Object.values(sheet.textures)) texture.orig = texture.orig.clone();
    }
    resources.pinFrameOrigSizes(loaded);
  }
  /*//////////////////////////////////////////////////////////////////////*/
  async function quality(options, value) {
    if (options.settingbusy || !["high", "medium", "low"].includes(value) || value === settings.textureResolution) return;
    options.settingerror = "";
    options.settingbusy = true;
    options.mouseChildren = false;
    const previous = resources.version;
    const cache = sprites.WpD.TextureCache;
    const originals = {...cache};
    const before = new Map(Object.entries(originals).map(([name, texture]) => [name, snapshot(texture)]));
    const image = {};
    for (const manifest of Object.values(resources.manifest)) {
      if (!manifest.loaded) continue;
      for (const [name, entry] of Object.entries(manifest.image || {})) {
        if (entry[value] && entry[value] !== entry[previous]) {
          image[name] = entry;
        }
      }
    }
    resources.version = value;
    const progress = percent => {if (!options.closed) options.settingstatus.text = `Loading textures... ${Math.round(percent)}%`};
    progress(0);
    try {
      const captured = sources.get(value) || new Set();
      const missing = Object.fromEntries(Object.entries(image).filter(([name]) => !captured.has(name)));
      if (Object.keys(missing).length) await loadvariants(missing, value, progress);
      sources.set(value, new Set([...captured, ...Object.keys(missing)]));
      const selected = variants.get(value) || new Map();
      for (const [name, texture] of Object.entries(cache)) {
        if (!selected.has(name)) selected.set(name, snapshot(texture));
      }
      variants.set(value, selected);
      for (const [name, original] of Object.entries(originals)) {
        const replacement = selected.get(name);
        if (!replacement || !original.baseTexture) continue;
        restore(original, replacement);
        cache[name] = original;
      }
      settings.textureResolution = value;
      settings.sharedObject.data.textureResolution = value;
      save();
      if (!options.closed) options.settingstatus.text = "Textures updated.";
    } catch (error) {
      resources.version = previous;
      console.warn("Could not change texture quality.", error);
      options.settingerror = error.cause?.message || error.message;
      for (const [name, original] of Object.entries(originals)) {
        if (before.get(name) && original.baseTexture) restore(original, before.get(name));
        cache[name] = original;
      }
      if (!options.closed) options.settingstatus.text = "Could not load textures. Try again.";
    } finally {
      options.settingbusy = false;
      if (!options.closed) {options.mouseChildren = true; update(options)}
    }
  }
  exports.attach = attach;
  exports.detach = detach;
  exports.touch = touch;
  exports.quality = quality;
}
