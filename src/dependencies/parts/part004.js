(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        38473(e, t, n) {
            "use strict";
        
            n.d(t, {
              Z: () => o
            });
            n(16034);
            n(23792);
            n(26099);
            n(31415);
            n(47764);
            n(62953);
            n(79432);
            var r = n(4971);
            var i = n(51853);
            var s = n(35057);
            var a = n(46682);
            var o = function () {
              function e() {
                this.updateFunctionBind = this.update.bind(this);
                this.holder = new a.kxk();
                this.holder.x = 0;
                this.holder.y = 0;
                s.w.rootApp.stage.addChild(this.holder);
                var e = new a.xJt({
                  fontFamily: "Courier New",
                  fontSize: 14,
                  fill: "#ffffff",
                  stroke: "#00000",
                  strokeThickness: 2,
                  fontWeight: "bold"
                });
                a.BxG.from("StatsText", e, {
                  chars: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789=/:(). ",
                  resolution: 4
                });
                this.textField = new a.T7$("", {
                  fontName: "StatsText"
                });
                this.textField.x = 0;
                this.textField.y = 0;
                this.holder.addChild(this.textField);
                a.RvI.shared.add(this.updateFunctionBind);
              }
              var t = e.prototype;
              t.destroy = function () {
                a.RvI.shared.remove(this.updateFunctionBind);
                this.holder.destroy({
                  children: true,
                  texture: true,
                  baseTexture: true
                });
              };
              t.update = function () {
                var e = Object.values(a.WpD.BaseTextureCache);
                var t = Object.values(a.WpD.TextureCache);
                var n = new Set(e).size;
                var o = new Set(t).size;
                var h = Object.keys(s.w.rootApp.renderer.buffer.managedBuffers).length;
                var l = Object.keys(s.w.rootApp.renderer.geometry.managedGeometries).length;
                var d = s.w.rootApp.renderer.texture.managedTextures.length;
                var c = this.getRenderTreeSize();
                var u = c[0];
                var p = c[1];
                var m = "\nBaseTextureCache : " + e.length + " (" + n + ")\nTextureCache     : " + t.length + " (" + o + ")\nMgn. buffer size : " + h + "\nMgn.   geom size : " + l + "\nMgn.   tex size  : " + d + "\nRender tree size : " + u + "/" + p + "\n========================\nTicker(shared)   : " + a.RvI.shared.count + "\nTicker(flash)    : " + r.b0.count + "\nTicker(F2/app)   : " + i.R.instance.count;
                this.textField.text = m;
                this.textField.text += "\n\n::: Stats calculation slows down the game :::";
              };
              t.getRenderTreeSize = function () {
                return this.getRenderTreeSizeOfObject(s.w.rootApp.stage);
              };
              t.getRenderTreeSizeOfObject = function (e) {
                var t = 0;
                var n = 0;
                for (var r = 0; r < e.children.length; r++) {
                  t++;
                  var i = this.getRenderTreeSizeOfObject(e.children[r]);
                  var s = i[0];
                  t += i[1];
                  if (e.children[r].visible) {
                    n += 1 + s;
                  }
                }
                return [n, t];
              };
              return e;
            }();
          }
    });
})();
