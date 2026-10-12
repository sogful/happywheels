(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        3296(e, t, n) {
            "use strict";
        
            n(45806);
          },
        27208(e, t, n) {
            "use strict";
        
            var r = n(46518);
            var i = n(69565);
            var s = n(44124)("URL", "toString");
            r({
              target: "URL",
              proto: true,
              enumerable: true
            }, {
              toJSON: function () {
                return i(s, this);
              }
            });
          }
    });
})();
