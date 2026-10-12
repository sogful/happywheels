(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        11313(e, t, n) {
            "use strict";
        
            var r;
            var i;
            var s;
            var a;
            var o;
            var h;
            var l;
            var d;
            var c;
            var u;
            var p;
            var m;
            var f;
            var _;
            var v;
            var y;
            var g;
            var w;
            var x;
            var b;
            n.d(t, {
              B9: () => a,
              E8: () => m,
              Eq: () => w,
              Gk: () => f,
              Km: () => r,
              M6: () => u,
              OS: () => v,
              Pk: () => y,
              QE: () => d,
              XZ: () => c,
              _4: () => o,
              dW: () => l,
              fr: () => _,
              h3: () => i,
              hR: () => h,
              he: () => x,
              uR: () => p,
              vg: () => g,
              wn: () => s,
              yw: () => b
            });
            (function (e) {
              e[e.WEBGL_LEGACY = 0] = "WEBGL_LEGACY";
              e[e.WEBGL = 1] = "WEBGL";
              e[e.WEBGL2 = 2] = "WEBGL2";
            })(r ||= {});
            (function (e) {
              e[e.UNKNOWN = 0] = "UNKNOWN";
              e[e.WEBGL = 1] = "WEBGL";
              e[e.CANVAS = 2] = "CANVAS";
            })(i ||= {});
            (function (e) {
              e[e.COLOR = 16384] = "COLOR";
              e[e.DEPTH = 256] = "DEPTH";
              e[e.STENCIL = 1024] = "STENCIL";
            })(s ||= {});
            (function (e) {
              e[e.NORMAL = 0] = "NORMAL";
              e[e.ADD = 1] = "ADD";
              e[e.MULTIPLY = 2] = "MULTIPLY";
              e[e.SCREEN = 3] = "SCREEN";
              e[e.OVERLAY = 4] = "OVERLAY";
              e[e.DARKEN = 5] = "DARKEN";
              e[e.LIGHTEN = 6] = "LIGHTEN";
              e[e.COLOR_DODGE = 7] = "COLOR_DODGE";
              e[e.COLOR_BURN = 8] = "COLOR_BURN";
              e[e.HARD_LIGHT = 9] = "HARD_LIGHT";
              e[e.SOFT_LIGHT = 10] = "SOFT_LIGHT";
              e[e.DIFFERENCE = 11] = "DIFFERENCE";
              e[e.EXCLUSION = 12] = "EXCLUSION";
              e[e.HUE = 13] = "HUE";
              e[e.SATURATION = 14] = "SATURATION";
              e[e.COLOR = 15] = "COLOR";
              e[e.LUMINOSITY = 16] = "LUMINOSITY";
              e[e.NORMAL_NPM = 17] = "NORMAL_NPM";
              e[e.ADD_NPM = 18] = "ADD_NPM";
              e[e.SCREEN_NPM = 19] = "SCREEN_NPM";
              e[e.NONE = 20] = "NONE";
              e[e.SRC_OVER = 0] = "SRC_OVER";
              e[e.SRC_IN = 21] = "SRC_IN";
              e[e.SRC_OUT = 22] = "SRC_OUT";
              e[e.SRC_ATOP = 23] = "SRC_ATOP";
              e[e.DST_OVER = 24] = "DST_OVER";
              e[e.DST_IN = 25] = "DST_IN";
              e[e.DST_OUT = 26] = "DST_OUT";
              e[e.DST_ATOP = 27] = "DST_ATOP";
              e[e.ERASE = 26] = "ERASE";
              e[e.SUBTRACT = 28] = "SUBTRACT";
              e[e.XOR = 29] = "XOR";
            })(a ||= {});
            (function (e) {
              e[e.POINTS = 0] = "POINTS";
              e[e.LINES = 1] = "LINES";
              e[e.LINE_LOOP = 2] = "LINE_LOOP";
              e[e.LINE_STRIP = 3] = "LINE_STRIP";
              e[e.TRIANGLES = 4] = "TRIANGLES";
              e[e.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP";
              e[e.TRIANGLE_FAN = 6] = "TRIANGLE_FAN";
            })(o ||= {});
            (function (e) {
              e[e.RGBA = 6408] = "RGBA";
              e[e.RGB = 6407] = "RGB";
              e[e.RG = 33319] = "RG";
              e[e.RED = 6403] = "RED";
              e[e.RGBA_INTEGER = 36249] = "RGBA_INTEGER";
              e[e.RGB_INTEGER = 36248] = "RGB_INTEGER";
              e[e.RG_INTEGER = 33320] = "RG_INTEGER";
              e[e.RED_INTEGER = 36244] = "RED_INTEGER";
              e[e.ALPHA = 6406] = "ALPHA";
              e[e.LUMINANCE = 6409] = "LUMINANCE";
              e[e.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA";
              e[e.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT";
              e[e.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL";
            })(h ||= {});
            (function (e) {
              e[e.TEXTURE_2D = 3553] = "TEXTURE_2D";
              e[e.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP";
              e[e.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY";
              e[e.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X";
              e[e.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X";
              e[e.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y";
              e[e.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y";
              e[e.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z";
              e[e.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z";
            })(l ||= {});
            (function (e) {
              e[e.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE";
              e[e.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT";
              e[e.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5";
              e[e.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4";
              e[e.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1";
              e[e.UNSIGNED_INT = 5125] = "UNSIGNED_INT";
              e[e.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV";
              e[e.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV";
              e[e.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8";
              e[e.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV";
              e[e.BYTE = 5120] = "BYTE";
              e[e.SHORT = 5122] = "SHORT";
              e[e.INT = 5124] = "INT";
              e[e.FLOAT = 5126] = "FLOAT";
              e[e.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV";
              e[e.HALF_FLOAT = 36193] = "HALF_FLOAT";
            })(d ||= {});
            (function (e) {
              e[e.FLOAT = 0] = "FLOAT";
              e[e.INT = 1] = "INT";
              e[e.UINT = 2] = "UINT";
            })(c ||= {});
            (function (e) {
              e[e.NEAREST = 0] = "NEAREST";
              e[e.LINEAR = 1] = "LINEAR";
            })(u ||= {});
            (function (e) {
              e[e.CLAMP = 33071] = "CLAMP";
              e[e.REPEAT = 10497] = "REPEAT";
              e[e.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT";
            })(p ||= {});
            (function (e) {
              e[e.OFF = 0] = "OFF";
              e[e.POW2 = 1] = "POW2";
              e[e.ON = 2] = "ON";
              e[e.ON_MANUAL = 3] = "ON_MANUAL";
            })(m ||= {});
            (function (e) {
              e[e.NPM = 0] = "NPM";
              e[e.UNPACK = 1] = "UNPACK";
              e[e.PMA = 2] = "PMA";
              e[e.NO_PREMULTIPLIED_ALPHA = 0] = "NO_PREMULTIPLIED_ALPHA";
              e[e.PREMULTIPLY_ON_UPLOAD = 1] = "PREMULTIPLY_ON_UPLOAD";
              e[e.PREMULTIPLY_ALPHA = 2] = "PREMULTIPLY_ALPHA";
              e[e.PREMULTIPLIED_ALPHA = 2] = "PREMULTIPLIED_ALPHA";
            })(f ||= {});
            (function (e) {
              e[e.NO = 0] = "NO";
              e[e.YES = 1] = "YES";
              e[e.AUTO = 2] = "AUTO";
              e[e.BLEND = 0] = "BLEND";
              e[e.CLEAR = 1] = "CLEAR";
              e[e.BLIT = 2] = "BLIT";
            })(_ ||= {});
            (function (e) {
              e[e.AUTO = 0] = "AUTO";
              e[e.MANUAL = 1] = "MANUAL";
            })(v ||= {});
            (function (e) {
              e.LOW = "lowp";
              e.MEDIUM = "mediump";
              e.HIGH = "highp";
            })(y ||= {});
            (function (e) {
              e[e.NONE = 0] = "NONE";
              e[e.SCISSOR = 1] = "SCISSOR";
              e[e.STENCIL = 2] = "STENCIL";
              e[e.SPRITE = 3] = "SPRITE";
              e[e.COLOR = 4] = "COLOR";
            })(g ||= {});
            (function (e) {
              e[e.RED = 1] = "RED";
              e[e.GREEN = 2] = "GREEN";
              e[e.BLUE = 4] = "BLUE";
              e[e.ALPHA = 8] = "ALPHA";
            })(w ||= {});
            (function (e) {
              e[e.NONE = 0] = "NONE";
              e[e.LOW = 2] = "LOW";
              e[e.MEDIUM = 4] = "MEDIUM";
              e[e.HIGH = 8] = "HIGH";
            })(x ||= {});
            (function (e) {
              e[e.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER";
              e[e.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER";
              e[e.UNIFORM_BUFFER = 35345] = "UNIFORM_BUFFER";
            })(b ||= {});
          }
    });
})();
