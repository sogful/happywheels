(function() {
    const modulefiles = Array.from({length: 70}, (_, index) => "part" + String(index + 1).padStart(3, "0") + ".js").concat([
        "module1235.js",
        "module13497.js",
        "module21566.js",
        "module22247.js",
        "module23222.js",
        "module24184.js",
        "module25102.js",
        "module27047.js",
        "module27453.js",
        "module27829.js",
        "module33245.js",
        "module45806.js",
        "module46682.js",
        "module48287.js",
        "module48607.js",
        "module49061.js",
        "module4971.js",
        "module50869.js",
        "module61203.js",
        "module64043.js",
        "module64284.js",
        "module71447.js",
        "module71500.js",
        "module72479.js",
        "module7395.js",
        "module80455.js",
        "module83169.js",
        "module84647.js",
        "module88604.js",
        "module9171.js",
        "module94196.js",
        "module97831.js"
    ]);
    window.happywheelmodules = {};
    window.happywheeldependencies = Promise.all(modulefiles.map(modulefile => new Promise((resolve, reject) => {
        const partscript = document.createElement("script");
        partscript.async = true;
        partscript.src = "./src/cleaned/dependencies/parts/" + modulefile;
        partscript.onload = resolve;
        partscript.onerror = reject;
        document.head.appendChild(partscript);
    }))).then(() => {
        const modules = window.happywheelmodules;
        delete window.happywheelmodules;
        (self.Tmuiyx1774 = self.Tmuiyx1774 || []).push([[520], modules]);
    });
})();
