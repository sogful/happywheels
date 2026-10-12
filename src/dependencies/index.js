(() => {
    const scripturl = document.currentScript.src;
    const legacyfiles = [];
    const modulefiles = [
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
        "module9171.js",
        "module88604.js",
        "module94196.js",
        "module97831.js"
    ];

    for (let index = 1; index <= 70; index++) {
        legacyfiles.push("legacy/parts/part" + String(index).padStart(3, "0") + ".js");
    }

    for (const modulefile of modulefiles) {
        legacyfiles.push("legacy/modules/" + modulefile);
    }

    const loadscript = filepath => new Promise((resolve, reject) => {
        const scriptelement = document.createElement("script");
        scriptelement.async = true;
        scriptelement.src = new URL(filepath, scripturl).href;
        scriptelement.onload = resolve;
        scriptelement.onerror = reject;
        document.head.appendChild(scriptelement);
    });

    window.happywheelmodules = {};
    window.happywheeldependencies = Promise.all(legacyfiles.map(loadscript)).then(() => {
        const modules = window.happywheelmodules;
        delete window.happywheelmodules;
        (self["Tmuiyx1774"] = self["Tmuiyx1774"] || []).push([[520], modules]);
    });
})();
