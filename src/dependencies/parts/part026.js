(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        76580(e, t, n) {
            "use strict";
        
            n(89907);
            n(26099);
            n(38781);
            var r = n(46682);
            var i = r.EYj.prototype;
            var s = ["center", "right"];
            i.setAlign = i.g = function (e) {
              if (typeof e == "string") {
                e = s.indexOf(e);
              }
              this.style.align = s[e] || "left";
              this.anchor.x = (e + 1) / 2;
              return this;
            };
            var a = {
              o: "font",
              z: "fontSize",
              f: "fontFamily",
              y: "fontStyle",
              g: "fontWeight",
              i: "fill",
              a: "align",
              s: "stroke",
              t: "strokeThickness",
              w: "wordWrap",
              d: "wordWrapWidth",
              l: "lineHeight",
              h: "dropShadow",
              c: "dropShadowColor",
              n: "dropShadowAngle",
              b: "dropShadowBlur",
              p: "padding",
              x: "textBaseline",
              j: "lineJoin",
              m: "miterLimit",
              e: "letterSpacing"
            };
            i.setStyle = i.ss = function (e) {
              for (var t in a) {
                if (e[t] !== undefined) {
                  e[a[t]] = e[t];
                  delete e[t];
                }
              }
              this.style = e;
              return this;
            };
            i.setShadow = i.sh = function (e, t, n) {
              var r = this.style;
              r.dropShadow = true;
              if (e !== undefined) {
                e = "#" + e.toString(16);
              }
              r.dropShadowColor = o(e, r.dropShadowColor);
              r.dropShadowAngle = o(t, r.dropShadowAngle);
              r.dropShadowDistance = o(n, r.dropShadowDistance);
              return this;
            };
            function o(e, t) {
              if (e === undefined) {
                return t;
              } else {
                return e;
              }
            }
            const h = r.EYj;
            n.d(t, ["A", 0, h]);
          }
    });
})();
