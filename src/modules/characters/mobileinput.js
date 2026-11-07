function (module, exports, require) {
  "use strict";
  const display = require(0x136b);
  const sprites = require(0xb65a);
  const animation = require(0x1174c);
  const easing = require(0xbddf);
  const settings = require(0x88f1).w;
  const filters = require(0x620e);
  /*//////////////////////////////////////////////////////////////////////*/
  class controls extends display.kx {
    constructor(release, press) {
      super();
      this.release = release;
      this.press = press;
      this.buttons = [];
      this.fingers = new Map();
      this.codes = new Map();
      this.inputmanager = settings.rootApp.renderer.plugins.interaction;
      this.downbind = event => this.movefinger(event.data.identifier, event.currentTarget);
      this.upbind = event => this.endfinger(event.data.identifier);
      this.movebind = event => {
        const finger = event.data.identifier;
        if (!this.fingers.has(finger)) return;
        const hit = this.inputmanager.hitTest(event.data.global);
        this.movefinger(finger, this.buttons.includes(hit) ? hit : null);
      };
      this.releasebind = () => this.releasebuttons();
      this.layoutbind = () => {if (this.controlState) this.setControlState(this.controlState); else this.releasebuttons()};
      window.addEventListener("gametouchlayoutchange", this.layoutbind);
      this.visibilitybind = () => {if (document.hidden) this.releasebuttons()};
      this.endbind = event => {
        if (event.pointerType === "touch" && this.inputmanager.supportsTouchEvents) return;
        this.endfinger(event.pointerType === "mouse" ? 1 : event.pointerId);
      };
      this.touchendbind = event => {
        if (!this.inputmanager.supportsTouchEvents) return;
        for (const touch of event.changedTouches) this.endfinger(touch.identifier);
      };
      this.keybind = event => {
        if (["Escape", "Tab"].includes(event.key)) this.releasebuttons();
      };
      this.inputmanager.on("pointermove", this.movebind);
      for (const name of ["pointerup", "pointerupoutside", "pointercancel"]) {
        this.inputmanager.on(name, this.upbind);
      }
      for (const name of ["pointerup", "pointercancel", "lostpointercapture"]) {
        window.addEventListener(name, this.endbind);
      }
      window.addEventListener("touchend", this.touchendbind);
      window.addEventListener("touchcancel", this.touchendbind);
      for (const name of ["blur", "pagehide", "resize", "orientationchange", "gameviewportchange"]) {
        window.addEventListener(name, this.releasebind);
      }
      document.addEventListener("visibilitychange", this.visibilitybind);
      document.addEventListener("keydown", this.keybind, {capture: true});
      this._pixiSprite.on("removed", this.releasebind);
      if (controls.pauseBtn) controls.pauseBtn.on("pointerdown", this.releasebind);
    }
    /*//////////////////////////////////////////////////////////////////////*/
    static "createPauseButton"() {
      const button = sprites.kxk.from("controls_gameplay_btn_pause.png");
      button.anchor.set(0.5);
      button.scale.set(0.5);
      button.position.set(56, 56);
      button.alpha = controls.KEY_ALPHA_INACTIVE;
      button.interactive = true;
      controls.pauseBtn = button;
      return button;
    }
    "doAttentionPulse"() {
      if (this.adjustment) animation.os.killTweensOf(this.adjustment);
      this.adjustment = new filters.MR({brightness: 4});
      for (const button of [...this.buttons, controls.pauseBtn].filter(Boolean)) {
        button.filters = [this.adjustment];
      }
      animation.os.to(this.adjustment, {duration: 2, brightness: 1, ease: easing.MI.easeInOut});
    }
    "setControlState"(state) {
      this.releasebuttons();
      for (const button of this.buttons) {
        this._pixiSprite.removeChild(button);
        button.destroy();
      }
      this.buttons = [];
      this.codes.clear();
      this.controlState = state;
      if (state === "defaultVehicle" || state === "userVehicle") {
        this.vehiclebuttons();
        if (state === "userVehicle") {
          this.addbutton("jump", settings.primaryActionCode, 834, 310);
          this.addbutton("break", settings.secondaryAction2Code, 598, 310, 180);
          this.addbutton("break", settings.secondaryAction1Code, 716, 310, 180);
          const button = this.buttons.find(item => this.codes.get(item) === settings.primaryActionCode);
          this.movefinger("pulse", button);
          this.pulsetimer = setTimeout(() => this.endfinger("pulse"), 100);
        } else {
          this.actionbuttons();
        }
      } else if (state === "ejected") {
        this.addbutton("grab", settings.primaryActionCode, 78, 428);
        this.addbutton("arch", settings.leanBackCode, 666, 358);
        this.addbutton("superman", settings.accelerateCode, 750, 270);
        this.addbutton("tuck", settings.decelerateCode, 750, 446);
        this.addbutton("pushup", settings.leanForwardCode, 834, 358);
      }
    }
    vehiclebuttons() {
      const helicopter = settings.characterIndex === 11;
      this.addbutton("lean", settings.leanBackCode, 716, 428, 90, true);
      this.addbutton("lean", settings.leanForwardCode, 834, 428, 270);
      this.addbutton("move", settings.accelerateCode, 188, 428, helicopter ? -90 : 0);
      this.addbutton("move", settings.decelerateCode, 70, 428, helicopter ? 90 : 180);
      this.addbutton("eject", settings.ejectCode, 844, 56);
    }
    actionbuttons() {
      const character = settings.characterIndex;
      if ([1, 5].includes(character)) {
        this.addbutton("jet", settings.primaryActionCode, 834, 310);
      } else if ([2, 4, 6, 8, 9].includes(character)) {
        this.addbutton("jump", settings.primaryActionCode, 834, 310);
      } else if ([3, 7, 10].includes(character)) {
        this.addbutton("break", settings.primaryActionCode, 834, 310);
      } else if (character === 11) {
        this.addbutton("jump", settings.secondaryAction1Code, 716, 310);
        this.addbutton("jump", settings.secondaryAction2Code, 598, 310, 180);
        this.addbutton("break", settings.primaryActionCode, 834, 310, 180);
      }
    }
    addbutton(image, code, horizontal, vertical, angle = 0, mirror = false) {
      const button = sprites.kxk.from(`controls_gameplay_btn_${image}.png`);
      button.anchor.set(0.5);
      button.scale.set(mirror ? -0.5 : 0.5, 0.5);
      button.angle = angle;
      button.position.set(settings.sharedObject.data.touchhand === "left" ? 900 - horizontal : horizontal, vertical);
      button.interactive = true;
      button.alpha = controls.KEY_ALPHA_INACTIVE;
      button.on("pointerdown", this.downbind);
      for (const name of ["pointerup", "pointerupoutside", "pointercancel"]) {
        button.on(name, this.upbind);
      }
      this._pixiSprite.addChild(button);
      this.buttons.push(button);
      this.codes.set(button, code);
      return button;
    }
    /*//////////////////////////////////////////////////////////////////////*/
    movefinger(finger, button) {
      const previous = this.fingers.get(finger);
      if (previous === button) return;
      this.fingers.set(finger, button);
      const held = [...this.fingers.values()];
      if (previous) {
        const code = this.codes.get(previous);
        if (!held.includes(previous)) previous.alpha = controls.KEY_ALPHA_INACTIVE;
        if (!held.some(item => item && this.codes.get(item) === code)) this.release(code);
      }
      if (button) {
        const code = this.codes.get(button);
        const shared = [...this.fingers].some(([other, item]) =>
          other !== finger && item && this.codes.get(item) === code);
        button.alpha = controls.KEY_ALPHA_ACTIVE;
        if (!shared && (!previous || this.codes.get(previous) !== code)) this.press(code);
      }
    }
    endfinger(finger) {
      if (!this.fingers.has(finger)) return;
      this.movefinger(finger, null);
      this.fingers.delete(finger);
    }
    releasebuttons() {
      clearTimeout(this.pulsetimer);
      const codes = new Set([...this.fingers.values()].filter(Boolean).map(button => this.codes.get(button)));
      this.fingers.clear();
      for (const button of this.buttons) button.alpha = controls.KEY_ALPHA_INACTIVE;
      for (const code of codes) this.release(code);
    }
    "destroy"() {
      this.releasebuttons();
      window.removeEventListener("gametouchlayoutchange", this.layoutbind);
      this.inputmanager.off("pointermove", this.movebind);
      for (const name of ["pointerup", "pointerupoutside", "pointercancel"]) {
        this.inputmanager.off(name, this.upbind);
      }
      for (const name of ["pointerup", "pointercancel", "lostpointercapture"]) {
        window.removeEventListener(name, this.endbind);
      }
      window.removeEventListener("touchend", this.touchendbind);
      window.removeEventListener("touchcancel", this.touchendbind);
      for (const name of ["blur", "pagehide", "resize", "orientationchange", "gameviewportchange"]) {
        window.removeEventListener(name, this.releasebind);
      }
      document.removeEventListener("visibilitychange", this.visibilitybind);
      document.removeEventListener("keydown", this.keybind, {capture: true});
      this._pixiSprite.off("removed", this.releasebind);
      if (controls.pauseBtn) controls.pauseBtn.off("pointerdown", this.releasebind);
      if (this.adjustment) animation.os.killTweensOf(this.adjustment);
      for (const button of this.buttons) {
        button.off("pointerdown", this.downbind);
        for (const name of ["pointerup", "pointerupoutside", "pointercancel"]) {
          button.off(name, this.upbind);
        }
      }
      super.destroy();
    }
  }
  /*//////////////////////////////////////////////////////////////////////*/
  controls["KEY_ALPHA_INACTIVE"] = 0.2;
  controls["KEY_ALPHA_ACTIVE"] = 1;
  controls["BUTTON_SCALING"] = 0.5;
  controls["PADDING_TO_SIDES"] = 15;
  controls["PADDING_BETWEEN_BUTTONS"] = 10;
  controls["VIEW_WIDTH"] = 900;
  controls["VIEW_HEIGHT"] = 500;
  exports.controls = controls;
}
