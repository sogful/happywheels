function (module, exports, require) {
  "use strict";
  const display = require(0x136b);
  const widgets = require(0x3432);
  const inputs = require(0x13a47);
  let active = null;
  /*//////////////////////////////////////////////////////////////////////*/
  class accountdialog extends display.kx {
    constructor() {
      super();
      this.closed = false;
      this.submitting = false;
      this.graphics.beginFill(0xcccccc);
      this.graphics.drawRect(0, 0, 250, 160);
      this.graphics.endFill();
      const title = this.label("log in to totaljerkface.com", "HelveticaNeueLT Std Med");
      title.x = Math.round((250 - title.textWidth) / 2);
      title.y = 12;
      this.email = this.input("Email", 38, 320);
      this.password = this.input("Password", 64, 1024);
      this.password.displayAsPassword = true;
      const email = this.label("email:");
      const password = this.label("password:");
      email.x = password.x = 85 - Math.max(email.textWidth, password.textWidth) - 8;
      email.y = 41;
      password.y = 67;
      this.error = new display.A_();
      this.error.defaultTextFormat = new display.lk("HelveticaNeueLT Std", 11, 0xaa0000, null, null, null, null, null, display.MA.CENTER);
      this.error.multiline = true;
      this.error.wordWrap = true;
      this.error.width = 230;
      this.error.selectable = false;
      this.error.antiAliasType = display.BF.ADVANCED;
      this.addChild(this.error);
      this.loginbutton = new widgets.Ch("log in", 0xfd8181, 80);
      this.registerbutton = new widgets.Ch("register", 0x3d88c7, 80);
      this.loginbutton.x = 40;
      this.registerbutton.x = 130;
      this.loginbutton.y = this.registerbutton.y = 128;
      this.addChild(this.loginbutton);
      this.addChild(this.registerbutton);
      this.submitbind = () => this.submit();
      this.registerbind = () => window.open("https://totaljerkface.com/register.tjf", "_blank", "noopener");
      this.closebind = () => this.destroywindow();
      this.keybind = event => {
        if (event.key === "Escape") {
          event.preventDefault();
          event.stopImmediatePropagation();
          this.close();
        }
      };
      this.loginbutton.addEventListener(display.Cm.MOUSE_UP, this.submitbind);
      this.registerbutton.addEventListener(display.Cm.MOUSE_UP, this.registerbind);
      this.email.on("keydown", event => this.inputkey(event, this.password));
      this.password.on("keydown", event => this.inputkey(event, this.email));
      this.frame = new widgets.p8(true, this, true);
      this.frame.addEventListener(widgets.p8.WINDOW_CLOSED, this.closebind);
      this.resizebind = () => {if (this.hoststage) this.place(this.hoststage)};
      window.addEventListener("resize", this.resizebind);
      document.addEventListener("keydown", this.keybind, {capture: true});
    }
    place(stage) {
      this.hoststage = stage;
      const bounds = document.querySelector(".game canvas").getBoundingClientRect();
      const ratio = Math.min(bounds.width / stage.stageWidth, bounds.height / stage.stageHeight);
      const maximum = Math.min((stage.stageWidth - 16) / this.frame.width, (stage.stageHeight - 16) / this.frame.height);
      const scale = Math.max(1, Math.min(1.1 / ratio, maximum));
      this.frame.scaleX = this.frame.scaleY = scale;
      this.frame.x = Math.round((stage.stageWidth - this.frame.width * scale) / 2);
      this.frame.y = Math.round((stage.stageHeight - this.frame.height * scale) / 2);
    }
    label(text, font = "HelveticaNeueLT Std") {
      const label = new display.A_();
      label.defaultTextFormat = new display.lk(font, 11, 0xffffff, null, null, null, null, null, display.MA.LEFT);
      label.autoSize = display.wL.LEFT;
      label.selectable = false;
      label.mouseEnabled = false;
      label.antiAliasType = display.BF.ADVANCED;
      label.text = text;
      this.addChild(label);
      return label;
    }
    input(name, vertical, maximum) {
      const input = new inputs.Sm({
        input: {fontFamily: "HelveticaNeueLT Std", fontSize: "11px", color: "#000000", width: "150px", padding: "3px"},
        box: {
          default: {fill: 0xffffff, stroke: {color: 0x999999, width: 1}},
          focused: {fill: 0xffffff, stroke: {color: 0x3d88c7, width: 1}}
        }
      });
      input.x = 85;
      input.y = vertical;
      input.maxLength = maximum;
      input._dom_input.setAttribute("aria-label", name);
      input._dom_input.setAttribute("autocomplete", name === "Email" ? "username" : "current-password");
      input._dom_input.setAttribute("inputmode", name === "Email" ? "email" : "text");
      this.pixiSprite.addChild(input);
      return input;
    }
    inputkey(event, next) {
      if (event.key === "Enter") {
        event.preventDefault();
        this.submit();
      } else if (event.key === "Tab") {
        event.preventDefault();
        next.focus();
      }
    }
    /*//////////////////////////////////////////////////////////////////////*/
    showerror(message) {
      this.error.text = message;
      this.error.x = Math.round((250 - this.error.textWidth) / 2);
      this.error.y = Math.round(90 + (32 - this.error.height) / 2);
      window.happywheelaccount.announce(message);
    }
    async submit() {
      if (this.submitting || this.closed) return;
      const email = this.email.text.trim();
      const password = this.password.text;
      if (!email) return this.showerror("Please enter an email address.");
      if (email.length < 6 || !/^\S+@\S+\.\S+$/.test(email)) return this.showerror("Please enter a valid email address.");
      if (!password) return this.showerror("Please enter your password.");
      if (password.length < 5) return this.showerror("Login failed. No matching email and password.");
      this.setsubmitting(true);
      this.showerror("");
      this.request = new AbortController();
      window.happywheelaccount.announce("Logging in...");
      try {
        const result = await window.happywheelaccount.login(email, password, this.request.signal);
        if (this.closed) return;
        if (result.ok) {
          this.close();
          window.location.reload();
          return;
        }
        const messages = {
          credentials: "Login failed. No matching email and password.",
          verification: "We emailed you a link to confirm it's you. Open it, then log in again here.",
          lockout: "Too many failed logins. Please wait before trying again.",
          format: "Please enter a valid email address and password.",
          origin: "The sign-in request was rejected.",
          unavailable: "Login failed. System error. Please try again later."
        };
        this.showerror(messages[result.reason] || messages.unavailable);
      } catch (error) {
        if (!this.closed) this.showerror("Could not reach the sign-in service. Please try again later.");
      } finally {
        if (!this.closed) this.setsubmitting(false);
      }
    }
    setsubmitting(value) {
      this.submitting = value;
      this.loginbutton.disabled = value;
      this.registerbutton.disabled = value;
      this.loginbutton.label = value ? "logging in..." : "log in";
      this.email.disabled = this.password.disabled = value;
    }
    close() {
      if (!this.closed) this.frame.closeWindow();
    }
    destroywindow() {
      if (this.closed) return;
      this.closed = true;
      active = null;
      if (this.request) this.request.abort();
      window.removeEventListener("resize", this.resizebind);
      document.removeEventListener("keydown", this.keybind, {capture: true});
      this.frame.removeEventListener(widgets.p8.WINDOW_CLOSED, this.closebind);
      this.loginbutton.removeEventListener(display.Cm.MOUSE_UP, this.submitbind);
      this.registerbutton.removeEventListener(display.Cm.MOUSE_UP, this.registerbind);
      this.email.blur();
      this.password.blur();
      this.email.text = this.password.text = "";
      this.email.destroy();
      this.password.destroy();
      this.loginbutton.die();
      this.registerbutton.die();
      this.destroy();
      window.happywheelaccount.closed();
    }
  }
  /*//////////////////////////////////////////////////////////////////////*/
  exports.open = stage => {
    if (active) return active;
    if (!stage) return null;
    active = new accountdialog();
    stage.addChild(active.frame);
    active.place(stage);
    active.email.focus();
    return active;
  };
  exports.close = () => {if (active) active.close()};
}
