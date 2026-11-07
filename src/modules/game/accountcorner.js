function (module, exports, require) {
  "use strict";
  const display = require(0x136b);
  const widgets = require(0x3432);
  const animation = require(0x1174c);
  /*//////////////////////////////////////////////////////////////////////*/
  class corner extends display.kx {
    constructor() {
      super();
      this.buttons = [];
      this.revealed = false;
      this.x = 10;
      this.bg = new display.kx();
      this.addChild(this.bg);
      this.changebind = () => this.render();
      this.enterbind = () => this.reveal(true);
      this.leavebind = () => this.reveal(false);
      this.tapbind = () => {if (!this.revealed) this.reveal(true)};
      window.addEventListener("gameaccountchange", this.changebind);
      window.addEventListener("gametouchlayoutchange", this.changebind);
      this.addEventListener(display.Cm.ROLL_OVER, this.enterbind);
      this.addEventListener(display.Cm.ROLL_OUT, this.leavebind);
      this.addEventListener(display.Cm.MOUSE_UP, this.tapbind);
      this.render();
    }
    label(text) {
      const label = new display.A_();
      label.defaultTextFormat = new display.lk("HelveticaNeueLT Std", 11, 0xffffff, null, null, null, null, null, display.MA.LEFT);
      label.autoSize = display.wL.LEFT;
      label.selectable = false;
      label.mouseEnabled = false;
      label.text = text;
      this.addChild(label);
      return label;
    }
    button(text, color, handler) {
      const button = new widgets.Ch(text, color, 90);
      button.addEventListener(display.Cm.MOUSE_UP, handler);
      this.addChild(button);
      this.buttons.push({button, handler});
    }
    render() {
      for (const {button, handler} of this.buttons) {
        button.removeEventListener(display.Cm.MOUSE_UP, handler);
        this.removeChild(button);
        button.die();
      }
      this.buttons = [];
      if (this.strip) {this.removeChild(this.strip); this.strip.destroy()}
      const account = window.happywheelaccount.state;
      this.button(account.authenticated ? "view profile" : "log in", account.authenticated ? 0x3d88c7 : 0xfd8181, () => {
        if (account.authenticated) {
          const settings = require(0x88f1).w;
          window.open(`https://totaljerkface.com/profile.tjf?uid=${settings.user_id}`, "_blank", "noopener");
        } else window.happywheelaccount.activate();
      });
      this.button(account.authenticated ? "log out" : "register", account.authenticated ? 0xfd8181 : 0x3d88c7, () => {
        if (account.authenticated) window.happywheelaccount.activate();
        else window.open("https://totaljerkface.com/register.tjf", "_blank", "noopener");
      });
      this.strip = this.label(account.notice || (account.authenticated ? account.username : "not logged in"));
      this.panelwidth = Math.max(150, Math.ceil(this.strip.textWidth) + 20);
      this.panelheight = 90;
      this.scaleX = this.scaleY = require(0x88f1).w.mobileControls ? 1.6 : 1;
      this.bg.graphics.clear();
      this.bg.graphics.beginFill(0x999999);
      this.bg.graphics.drawRect(0, 0, this.panelwidth, this.panelheight);
      this.bg.graphics.beginFill(0xcccccc);
      this.bg.graphics.drawRect(2, 2, this.panelwidth - 4, this.panelheight - 4);
      for (const [index, {button}] of this.buttons.entries()) {
        button.x = Math.round((this.panelwidth - 90) / 2);
        button.y = 8 + index * 30;
        button.disabled = account.busy;
      }
      this.strip.x = Math.round((this.panelwidth - this.strip.textWidth) / 2);
      this.strip.y = this.panelheight - 18;
      if (!this.revealed) this.y = (20 - this.panelheight) * this.scaleY;
    }
    reveal(visible) {
      if (!this.mouseEnabled) return;
      this.revealed = visible;
      animation.os.killTweensOf(this);
      animation.os.to(this, {duration: 0.3, y: visible ? 0 : (20 - this.panelheight) * this.scaleY});
    }
    disable() {this.reveal(false); this.mouseEnabled = false}
    enable() {this.mouseEnabled = true}
    die() {
      window.removeEventListener("gameaccountchange", this.changebind);
      window.removeEventListener("gametouchlayoutchange", this.changebind);
      animation.os.killTweensOf(this);
      this.removeEventListener(display.Cm.ROLL_OVER, this.enterbind);
      this.removeEventListener(display.Cm.ROLL_OUT, this.leavebind);
      this.removeEventListener(display.Cm.MOUSE_UP, this.tapbind);
      for (const {button, handler} of this.buttons) button.removeEventListener(display.Cm.MOUSE_UP, handler);
      this.destroy();
    }
  }
  exports.corner = corner;
}
