(function() {
    const dependencyroot = new URL("./dependencies/", document.currentScript.src);
    const modulefiles = Array.from({length: 70}, (_, index) => "parts/part" + String(index + 1).padStart(3, "0") + ".js").concat([
        "modules/module1235.js",
        "modules/module13497.js",
        "modules/module21566.js",
        "modules/module22247.js",
        "modules/module23222.js",
        "modules/module24184.js",
        "modules/module25102.js",
        "modules/module27047.js",
        "modules/module27453.js",
        "modules/module27829.js",
        "modules/module33245.js",
        "modules/module45806.js",
        "modules/module46682.js",
        "modules/module48287.js",
        "modules/module48607.js",
        "modules/module49061.js",
        "modules/module4971.js",
        "modules/module50869.js",
        "modules/module61203.js",
        "modules/module64043.js",
        "modules/module64284.js",
        "modules/module71447.js",
        "modules/module71500.js",
        "modules/module72479.js",
        "modules/module7395.js",
        "modules/module80455.js",
        "modules/module83169.js",
        "modules/module84647.js",
        "modules/module88604.js",
        "modules/module9171.js",
        "modules/module94196.js",
        "modules/module97831.js"
    ]);
    window.happywheelmodules = {};
    window.happywheeldependencies = Promise.all(modulefiles.map(modulefile => new Promise((resolve, reject) => {
        const partscript = document.createElement("script");
        partscript.async = true;
        partscript.src = new URL(modulefile, dependencyroot).href;
        partscript.onload = resolve;
        partscript.onerror = reject;
        document.head.appendChild(partscript);
    }))).then(() => {
        const modules = window.happywheelmodules;
        delete window.happywheelmodules;
        (self.Tmuiyx1774 = self.Tmuiyx1774 || []).push([[520], modules]);
    });
})();
