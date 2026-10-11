(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        64284(e, t, n) {
            "use strict";
        
            n.d(t, {
              Sm: () => w,
              v9: () => _,
              oz: () => v,
              TY: () => f
            });
            var r = n.cw(function (e, t) {
              var r = n(79504);
              var o = s();
              var h = a();
              var l = i();
              var d = n(67750);
              var c = r(l);
              var u = r("".slice);
              var p = Math.ceil;
              function m(e) {
                return function (t, n, r) {
                  var i = h(d(t));
                  var s = o(n);
                  var a = i.length;
                  if (s <= a) {
                    return i;
                  }
                  var l;
                  var m;
                  var f = r === undefined ? " " : h(r);
                  if (f === "") {
                    return i;
                  } else {
                    if ((m = c(f, p((l = s - a) / f.length))).length > l) {
                      m = u(m, 0, l);
                    }
                    if (e) {
                      return i + m;
                    } else {
                      return m + i;
                    }
                  }
                };
              }
              e.exports = {
                n: m(false),
                ...void m(true)
              };
            });
            var i = () => n(72333);
            var s = () => n(18014);
            var a = () => n(655);
            var o = n.cw(function (e, t) {
              var i = n(46518);
              var s = r().n;
              i({
                target: "String",
                proto: true,
                forced: n(83063)
              }, {
                padStart: function (e) {
                  return s(this, e, arguments.length > 1 ? arguments[1] : undefined);
                }
              });
            });
            var h = n.cw(function (e, t) {
              n(15823)("Float64", function (e) {
                return function (t, n, r) {
                  return e(this, t, n, r);
                };
              });
            });
            n(33771);
            n(69085);
            n(23792);
            n(36033);
            n(26099);
            n(47764);
            n(62953);
            n(27495);
            n(90744);
            n(42762);
            n(62062);
            n(89907);
            n(25440);
            h();
            n(81630);
            n(72170);
            n(75044);
            n(69539);
            n(31694);
            n(89955);
            n(33206);
            n(44496);
            n(66651);
            n(12887);
            n(19369);
            n(66812);
            n(8995);
            n(31575);
            n(36072);
            n(88747);
            n(28845);
            n(29423);
            n(57301);
            n(373);
            n(86614);
            n(41405);
            n(33684);
            o();
            n(38781);
            n(42781);
            n(11392);
            n(84864);
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(2892);
            n(34782);
            n(62010);
            n(23418);
            n(2259);
            var l = n(46682);
            var d = n(32601);
            function c(e, t) {
              var n = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
              if (n) {
                return (n = n.call(e)).next.bind(n);
              }
              if (Array.isArray(e) || (n = function (e, t) {
                if (e) {
                  if (typeof e == "string") {
                    return u(e, t);
                  }
                  var n = {}.toString.call(e).slice(8, -1);
                  if (n === "Object" && e.constructor) {
                    n = e.constructor.name;
                  }
                  if (n === "Map" || n === "Set") {
                    return Array.from(e);
                  } else if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
                    return u(e, t);
                  } else {
                    return undefined;
                  }
                }
              }(e)) || t && e && typeof e.length == "number") {
                if (n) {
                  e = n;
                }
                var r = 0;
                return function () {
                  if (r >= e.length) {
                    return {
                      done: true
                    };
                  } else {
                    return {
                      done: false,
                      value: e[r++]
                    };
                  }
                };
              }
              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function u(e, t) {
              if (t == null || t > e.length) {
                t = e.length;
              }
              for (var n = 0, r = Array(t); n < t; n++) {
                r[n] = e[n];
              }
              return r;
            }
            function p(e) {
              var t = function (e) {
                if (typeof e != "object" || !e) {
                  return e;
                }
                var t = e[Symbol.toPrimitive];
                if (t !== undefined) {
                  var n = t.call(e, "string");
                  if (typeof n != "object") {
                    return n;
                  }
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(e);
              }(e);
              if (typeof t == "symbol") {
                return t;
              } else {
                return t + "";
              }
            }
            function m(e, t) {
              m = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return m(e, t);
            }
            var f = {
              active: false
            };
            function _(e) {
              var t = Math.sqrt(e.a * e.a + e.b * e.b);
              var n = Math.sqrt(e.c * e.c + e.d * e.d);
              return Math.max(t, n);
            }
            function v(e) {
              var t = Math.min(Math.max(e, 2), 4);
              return Math.round(t * 4) / 4;
            }
            var y = function (e) {
              e.DEFAULT = "default";
              e.FOCUSED = "focused";
              e.DISABLED = "disabled";
              return e;
            }({});
            var g = null;
            var w = function (e) {
              function t(t) {
                var n;
                (n = e.call(this) || this)._input_style = Object.assign({
                  position: "absolute",
                  background: "none",
                  border: "none",
                  outline: "none",
                  transformOrigin: "0 0",
                  lineHeight: "1"
                }, t.input);
                if (t.box) {
                  n._box_generator = typeof t.box == "function" ? t.box : function (e) {
                    var t;
                    t = "default" in e ? {
                      default: e.default,
                      focused: e.focused || e.default,
                      disabled: e.disabled || e.default
                    } : {
                      default: e,
                      focused: e,
                      disabled: e
                    };
                    return function (e, n, r) {
                      var a = t[r];
                      var o = new l.A1g();
                      if (a.fill !== undefined && a.fill !== null) {
                        o.beginFill(a.fill, a.alpha);
                      }
                      if (a.stroke) {
                        o.lineStyle(a.stroke.width ?? 1, a.stroke.color ?? 0, a.stroke.alpha);
                      }
                      if (a.rounded) {
                        o.drawRoundedRect(0, 0, e, n, a.rounded);
                      } else {
                        o.drawRect(0, 0, e, n);
                      }
                      o.endFill();
                      o.closePath();
                      return o;
                    };
                  }(t.box);
                } else {
                  n._box_generator = null;
                }
                if (Object.prototype.hasOwnProperty.call(n._input_style, "multiline")) {
                  n._multiline = !!n._input_style.multiline;
                  delete n._input_style.multiline;
                } else {
                  n._multiline = false;
                }
                n._text = "";
                n._graphemes = [];
                n._graphemeOffsets = [0];
                n._focused = false;
                n._disabled = false;
                n._max_length = 0;
                n._restrict_regex = null;
                n._restrict_value = "";
                n._placeholder = "";
                n._placeholderColor = 11119017;
                n._substituted = false;
                n._displayAsPassword = false;
                n._cursorIndex = 0;
                n._selStart = 0;
                n._selEnd = 0;
                n._selectionAnchor = 0;
                n._charPositions = [];
                n._lineBreaks = [0];
                n._scrollX = 0;
                n._scrollY = 0;
                n._caretVisible = true;
                n._caretDrawn = false;
                n._caretFontString = "";
                n._dragging = false;
                n._dragStartIndex = 0;
                n._lastClickTime = 0;
                n._hovered = false;
                n._wrappedLines = [""];
                n._useCharWidthCache = false;
                n._charWidthCache = new Map();
                n._charWidthCacheFontString = "";
                n._box_cache = {};
                n._previous = {};
                n._canvasResolution = l.W0u.RESOLUTION || window.devicePixelRatio || 1;
                n._parseStyles();
                n._buildDisplay();
                n._createHiddenInput();
                n._setState(y.DEFAULT);
                n._addListeners();
                n._rebuildCharPositions();
                return n;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              m(n, r);
              var i;
              var s;
              var a = t.prototype;
              a._parseStyles = function () {
                var e = {};
                if (this._input_style.fontFamily) {
                  e.fontFamily = this._input_style.fontFamily;
                }
                if (this._input_style.fontSize) {
                  e.fontSize = parseInt(this._input_style.fontSize);
                }
                if (this._input_style.color) {
                  e.fill = this._input_style.color;
                }
                if (this._input_style.fontWeight) {
                  e.fontWeight = this._input_style.fontWeight;
                }
                if (this._input_style.fontStyle) {
                  e.fontStyle = this._input_style.fontStyle;
                }
                if (this._input_style.fontVariant) {
                  e.fontVariant = this._input_style.fontVariant;
                }
                if (this._input_style.letterSpacing) {
                  e.letterSpacing = parseFloat(this._input_style.letterSpacing);
                }
                this._textStyle = new l.xJt(e);
                this._align = this._input_style.align || "left";
                this._padding = this._parsePadding();
                this._inputWidth = this._input_style.width ? parseFloat(this._input_style.width) : 100;
                this._inputHeight = this._input_style.height ? parseFloat(this._input_style.height) : this._textStyle.fontSize + this._padding[0] + this._padding[2] + 4;
                this._wordWrap = this._input_style.wordWrap !== undefined ? !!this._input_style.wordWrap : this._multiline;
                if (this._multiline && this._wordWrap) {
                  this._textStyle.wordWrap = true;
                  this._textStyle.wordWrapWidth = this._inputWidth - this._padding[1] - this._padding[3];
                  this._textStyle.breakWords = true;
                }
              };
              a._parsePadding = function () {
                var e = this._input_style.textIndent ? parseFloat(this._input_style.textIndent) : 0;
                if (this._input_style.padding && this._input_style.padding.length > 0) {
                  var t = this._input_style.padding.trim().split(" ");
                  if (t.length === 1) {
                    var n = parseFloat(t[0]);
                    return [n, n, n, n + e];
                  }
                  if (t.length === 2) {
                    var r = parseFloat(t[0]);
                    var i = parseFloat(t[1]);
                    return [r, i, r, i + e];
                  }
                  if (t.length === 4) {
                    var s = t.map(function (e) {
                      return parseFloat(e);
                    });
                    s[3] += e;
                    return s;
                  }
                }
                return [0, 0, 0, e];
              };
              a._buildDisplay = function () {
                this._maskGfx = new l.A1g();
                this.addChild(this._maskGfx);
                this._textContainer = new l.mcf();
                this.addChild(this._textContainer);
                this._textContainer.mask = this._maskGfx;
                this._selectionGfx = new l.A1g();
                this._textContainer.addChild(this._selectionGfx);
                this._textCanvas = document.createElement("canvas");
                this._textCanvas.width = 1;
                this._textCanvas.height = 1;
                this._textCtx = this._textCanvas.getContext("2d");
                this._textBaseTexture = new l.t5M(this._textCanvas, {
                  resolution: this._canvasResolution
                });
                this._textBaseTexture.scaleMode = l.M6W.LINEAR;
                this._displaySprite = new l.kxk(new l.gPd(this._textBaseTexture));
                this._textContainer.addChild(this._displaySprite);
                this._resizeTextCanvas();
                this._caret = new l.A1g();
                this._textContainer.addChild(this._caret);
                this._caret.visible = false;
                this._placeholderText = new l.EYj("", this._textStyle.clone());
                this._placeholderText.style.fill = this._placeholderColor;
                this._placeholderText.alpha = 0.7;
                this.addChild(this._placeholderText);
                this._hitArea_gfx = new l.A1g();
                this._hitArea_gfx.alpha = 0;
                this._hitArea_gfx.interactive = true;
                this._hitArea_gfx.cursor = "text";
                this.addChild(this._hitArea_gfx);
                this._updateLayout();
              };
              a._updateLayout = function () {
                var e = this._inputWidth;
                var t = this._inputHeight;
                this._updateMask();
                this._textContainer.x = this._padding[3];
                if (this._multiline) {
                  this._textContainer.y = this._padding[0];
                } else {
                  var n = this._getFontMetrics();
                  var r = n.ascent + n.descent;
                  var i = this._inputHeight - this._padding[0] - this._padding[2];
                  var s = Math.max(0, (i - r) / 2);
                  this._textContainer.y = this._padding[0] + s;
                }
                if (this._textCanvas) {
                  this._resizeTextCanvas();
                }
                this._placeholderText.style.align = this._align;
                if (this._align === "center") {
                  this._placeholderText.x = this._padding[3] + (e - this._padding[1] - this._padding[3]) / 2;
                  this._placeholderText.anchor.x = 0.5;
                } else if (this._align === "right") {
                  this._placeholderText.x = e - this._padding[1];
                  this._placeholderText.anchor.x = 1;
                } else {
                  this._placeholderText.x = this._padding[3];
                  this._placeholderText.anchor.x = 0;
                }
                this._placeholderText.y = this._multiline ? this._padding[0] : this._textContainer.y;
                this._hitArea_gfx.clear();
                this._hitArea_gfx.beginFill(0);
                this._hitArea_gfx.drawRect(0, 0, e, t);
                this._hitArea_gfx.endFill();
              };
              a._updateMask = function () {
                var e = this._inputWidth;
                var t = this._inputHeight;
                this._maskGfx.clear();
                this._maskGfx.beginFill(0);
                this._maskGfx.drawRect(this._padding[3], this._padding[0], e - this._padding[1] - this._padding[3], t - this._padding[0] - this._padding[2]);
                this._maskGfx.endFill();
              };
              a._createHiddenInput = function () {
                this._dom_input = document.createElement("textarea");
                this._dom_input.style.position = "fixed";
                this._dom_input.style.left = "0px";
                this._dom_input.style.top = "0px";
                this._dom_input.style.width = "1px";
                this._dom_input.style.height = "1px";
                this._dom_input.style.opacity = "0";
                this._dom_input.style.overflow = "hidden";
                this._dom_input.style.resize = "none";
                this._dom_input.style.zIndex = "-1";
                this._dom_input.style.pointerEvents = "none";
                this._dom_input.setAttribute("autocomplete", "off");
                this._dom_input.setAttribute("autocorrect", "off");
                this._dom_input.setAttribute("autocapitalize", "off");
                this._dom_input.setAttribute("spellcheck", "false");
                this._dom_input.tabIndex = -1;
                if (!this._multiline) {
                  this._dom_input.style.whiteSpace = "nowrap";
                }
              };
              a._addListeners = function () {
                var e = this;
                this.on("added", this._onAdded.bind(this));
                this.on("removed", this._onRemoved.bind(this));
                this._boundOnInput = this._onInput.bind(this);
                this._boundOnKeyDown = this._onKeyDown.bind(this);
                this._boundOnKeyUp = this._onKeyUp.bind(this);
                this._boundOnFocused = this._onFocused.bind(this);
                this._boundOnBlurred = this._onBlurred.bind(this);
                this._boundOnCompositionEnd = this._onCompositionEnd.bind(this);
                this._boundOnCopyCut = function (t) {
                  if (e._displayAsPassword) {
                    t.preventDefault();
                  }
                };
                this._dom_input.addEventListener("input", this._boundOnInput);
                this._dom_input.addEventListener("keydown", this._boundOnKeyDown);
                this._dom_input.addEventListener("keyup", this._boundOnKeyUp);
                this._dom_input.addEventListener("focus", this._boundOnFocused);
                this._dom_input.addEventListener("blur", this._boundOnBlurred);
                this._dom_input.addEventListener("compositionend", this._boundOnCompositionEnd);
                this._dom_input.addEventListener("copy", this._boundOnCopyCut);
                this._dom_input.addEventListener("cut", this._boundOnCopyCut);
                this._hitArea_gfx.on("pointerdown", this._onPointerDown.bind(this));
                this._hitArea_gfx.on("pointermove", this._onPointerMove.bind(this));
                this._hitArea_gfx.on("pointerup", this._onPointerUp.bind(this));
                this._hitArea_gfx.on("pointerupoutside", this._onPointerUp.bind(this));
                this._hitArea_gfx.on("pointerover", function () {
                  e._hovered = true;
                });
                this._hitArea_gfx.on("pointerout", function () {
                  e._hovered = false;
                });
                this._boundOnWheel = this._onWheel.bind(this);
                window.addEventListener("wheel", this._boundOnWheel, {
                  passive: false
                });
              };
              a._onAdded = function () {
                document.body.appendChild(this._dom_input);
              };
              a._onRemoved = function () {
                if (this._dom_input.parentNode) {
                  this._dom_input.parentNode.removeChild(this._dom_input);
                }
                if (this._focused) {
                  this._onBlurred();
                }
                this._hovered = false;
                this._stopCaretBlink();
              };
              a._onFocused = function () {
                this._focused = true;
                if (d.BI.main) {
                  d.BI.main.suspendKeyboardEvents = true;
                }
                this._setState(y.FOCUSED);
                this._startCaretBlink();
                this._updateCaret();
                this._updatePlaceholder();
                this.emit("focus");
              };
              a._onBlurred = function () {
                if (this._focused) {
                  this._focused = false;
                  if (d.BI.main) {
                    d.BI.main.suspendKeyboardEvents = false;
                  }
                  this._setState(this._disabled ? y.DISABLED : y.DEFAULT);
                  this._stopCaretBlink();
                  this._caret.visible = false;
                  this._selStart = this._selEnd = this._cursorIndex;
                  this._selectionAnchor = this._cursorIndex;
                  this._updateSelection();
                  this._updatePlaceholder();
                  this.emit("blur");
                }
              };
              a.focus = function () {
                var e = this;
                this._dom_input.focus();
                setTimeout(function () {
                  if (!e._focused) {
                    e._dom_input.focus();
                  }
                }, 10);
              };
              a.blur = function () {
                this._dom_input.blur();
              };
              a.select = function () {
                this.focus();
                this._selStart = 0;
                this._selEnd = this._graphemes.length;
                this._cursorIndex = this._graphemes.length;
                this._selectionAnchor = 0;
                this._syncHiddenSelection();
                this._updateSelection();
                this._updateCaret();
              };
              a._onInput = function (e) {
                if (!this._dom_input.readOnly && !e.isComposing) {
                  this._syncFromHidden();
                  this._resetCaretBlink();
                }
              };
              a._onKeyDown = function (e) {
                this.emit("keydown", e);
                var t = e.ctrlKey || e.metaKey;
                if (this._multiline || e.key !== "Enter") {
                  if (e.key !== "Tab") {
                    if (this._handleNavigationKey(e, t)) {
                      e.preventDefault();
                      this._resetCaretBlink();
                      return;
                    } else if (t && !e.shiftKey && e.key.toLowerCase() === "a") {
                      e.preventDefault();
                      this._selStart = 0;
                      this._selEnd = this._graphemes.length;
                      this._cursorIndex = this._graphemes.length;
                      this._selectionAnchor = 0;
                      this._syncHiddenSelection();
                      this._updateSelection();
                      this._updateCaret();
                      this._resetCaretBlink();
                      return;
                    } else {
                      this._dom_input.readOnly;
                      return;
                    }
                  }
                  e.preventDefault();
                } else {
                  e.preventDefault();
                }
              };
              a._onKeyUp = function (e) {
                this.emit("keyup", e);
              };
              a._handleNavigationKey = function (e, t) {
                var n = e.shiftKey;
                switch (e.key) {
                  case "ArrowLeft":
                    if (t) {
                      this._moveCursorByWord(-1, n);
                    } else {
                      this._moveCursor(-1, n);
                    }
                    return true;
                  case "ArrowRight":
                    if (t) {
                      this._moveCursorByWord(1, n);
                    } else {
                      this._moveCursor(1, n);
                    }
                    return true;
                  case "ArrowUp":
                    if (this._multiline) {
                      this._moveCursorVertical(-1, n);
                    }
                    return true;
                  case "ArrowDown":
                    if (this._multiline) {
                      this._moveCursorVertical(1, n);
                    }
                    return true;
                  case "Home":
                    if (t) {
                      this._moveCursorTo(0, n);
                    } else {
                      this._moveCursorToLineStart(n);
                    }
                    return true;
                  case "End":
                    if (t) {
                      this._moveCursorTo(this._graphemes.length, n);
                    } else {
                      this._moveCursorToLineEnd(n);
                    }
                    return true;
                }
                return false;
              };
              a._scrollAndUpdateVisuals = function () {
                var e = this._scrollX;
                var t = this._scrollY;
                this._updateScroll();
                if (this._scrollX !== e || this._scrollY !== t) {
                  this._updateDisplayText();
                }
                this._updateCaret();
                this._updateSelection();
              };
              a._finalizeCursorMove = function (e) {
                this._updateSelectionFromCursor(e);
                this._syncHiddenSelection();
                this._scrollAndUpdateVisuals();
              };
              a._moveCursor = function (e, t) {
                var n;
                n = t || this._selStart === this._selEnd ? Math.max(0, Math.min(this._graphemes.length, this._cursorIndex + e)) : e < 0 ? this._selStart : this._selEnd;
                this._cursorIndex = n;
                this._finalizeCursorMove(t);
              };
              a._moveCursorByWord = function (e, t) {
                var n = this._cursorIndex;
                if (e < 0) {
                  while (n > 0 && /\s/.test(this._graphemes[n - 1])) {
                    n--;
                  }
                  while (n > 0 && !/\s/.test(this._graphemes[n - 1])) {
                    n--;
                  }
                } else {
                  while (n < this._graphemes.length && !/\s/.test(this._graphemes[n])) {
                    n++;
                  }
                  while (n < this._graphemes.length && /\s/.test(this._graphemes[n])) {
                    n++;
                  }
                }
                this._cursorIndex = n;
                this._finalizeCursorMove(t);
              };
              a._moveCursorTo = function (e, t) {
                this._cursorIndex = Math.max(0, Math.min(this._graphemes.length, e));
                this._finalizeCursorMove(t);
              };
              a._moveCursorToLineStart = function (e) {
                if (this._multiline) {
                  var t = this._getLineForIndex(this._cursorIndex);
                  var n = this._lineBreaks[t] || 0;
                  this._moveCursorTo(n, e);
                } else {
                  this._moveCursorTo(0, e);
                }
              };
              a._moveCursorToLineEnd = function (e) {
                if (this._multiline) {
                  var t;
                  var n = this._getLineForIndex(this._cursorIndex);
                  if (n < this._lineBreaks.length - 1) {
                    var r = this._lineBreaks[n + 1];
                    t = /\s/.test(this._graphemes[r - 1] || "") ? r - 1 : r;
                  } else {
                    t = this._graphemes.length;
                  }
                  this._moveCursorTo(Math.max(t, this._lineBreaks[n] || 0), e);
                } else {
                  this._moveCursorTo(this._graphemes.length, e);
                }
              };
              a._moveCursorVertical = function (e, t) {
                var n = this._getLineForIndex(this._cursorIndex) + e;
                if (!(n < 0) && !(n >= this._lineBreaks.length)) {
                  var r = this._getCharPosition(this._cursorIndex);
                  var i = r ? r.x : 0;
                  var s = this._lineBreaks[n];
                  for (var a = n < this._lineBreaks.length - 1 ? this._lineBreaks[n + 1] : this._graphemes.length + 1, o = s, h = Infinity, l = s; l < a && l <= this._graphemes.length; l++) {
                    var d = this._getCharPosition(l);
                    if (d) {
                      var c = Math.abs(d.x - i);
                      if (c < h) {
                        h = c;
                        o = l;
                      }
                    }
                  }
                  this._cursorIndex = Math.min(o, this._graphemes.length);
                  this._finalizeCursorMove(t);
                }
              };
              a._updateSelectionFromCursor = function (e) {
                if (e) {
                  if (this._dragging) {
                    this._selStart = Math.min(this._dragStartIndex, this._cursorIndex);
                    this._selEnd = Math.max(this._dragStartIndex, this._cursorIndex);
                  } else {
                    if (this._selStart === this._selEnd) {
                      this._selectionAnchor = this._selStart;
                    }
                    this._selStart = Math.min(this._selectionAnchor, this._cursorIndex);
                    this._selEnd = Math.max(this._selectionAnchor, this._cursorIndex);
                  }
                } else {
                  this._selStart = this._selEnd = this._cursorIndex;
                  this._selectionAnchor = this._cursorIndex;
                }
              };
              a._onPointerDown = function (e) {
                if (!this._disabled) {
                  var t = e.data.originalEvent;
                  if (t && t.preventDefault) {
                    t.preventDefault();
                  }
                  var n = Date.now();
                  var r = e.data.getLocalPosition(this._textContainer);
                  var i = this._hitTestCharIndex(r.x + this._scrollX, r.y + this._scrollY);
                  if (t && t.shiftKey && this._focused) {
                    this._cursorIndex = i;
                    this._selStart = Math.min(this._selectionAnchor, i);
                    this._selEnd = Math.max(this._selectionAnchor, i);
                    this._dragStartIndex = this._selectionAnchor;
                    this._dragging = true;
                    this._lastClickTime = 0;
                    this.focus();
                    this._syncHiddenSelection();
                    this._updateCaret();
                    this._updateSelection();
                    this._resetCaretBlink();
                    return;
                  }
                  if (n - this._lastClickTime < 300) {
                    this._selectWordAt(i);
                    this._lastClickTime = 0;
                    this._resetCaretBlink();
                    return;
                  }
                  this._cursorIndex = i;
                  this._selStart = this._selEnd = i;
                  this._selectionAnchor = i;
                  this._dragStartIndex = i;
                  this._dragging = true;
                  this._lastClickTime = n;
                  this.focus();
                  this._syncHiddenSelection();
                  this._updateCaret();
                  this._updateSelection();
                  this._resetCaretBlink();
                }
              };
              a._onPointerMove = function (e) {
                if (this._dragging) {
                  var t = e.data.getLocalPosition(this._textContainer);
                  var n = this._hitTestCharIndex(t.x + this._scrollX, t.y + this._scrollY);
                  this._cursorIndex = n;
                  this._selStart = Math.min(this._dragStartIndex, n);
                  this._selEnd = Math.max(this._dragStartIndex, n);
                  this._syncHiddenSelection();
                  this._scrollAndUpdateVisuals();
                }
              };
              a._onPointerUp = function () {
                this._dragging = false;
              };
              a._selectWordAt = function (e) {
                for (var t = e, n = e; t > 0 && !/\s/.test(this._graphemes[t - 1]);) {
                  t--;
                }
                while (n < this._graphemes.length && !/\s/.test(this._graphemes[n])) {
                  n++;
                }
                this._selStart = t;
                this._selEnd = n;
                this._cursorIndex = n;
                this._selectionAnchor = t;
                this._syncHiddenSelection();
                this._updateCaret();
                this._updateSelection();
              };
              a._hitTestCharIndex = function (e, t) {
                if (this._charPositions.length === 0) {
                  return 0;
                }
                var n = 0;
                if (this._multiline) {
                  for (var r = this._lineBreaks.length - 1; r >= 0; r--) {
                    var i = this._getCharPosition(this._lineBreaks[r]);
                    if (i && t >= i.y) {
                      n = r;
                      break;
                    }
                  }
                }
                var s = 0;
                var a = Infinity;
                for (var o = 0; o <= this._graphemes.length; o++) {
                  var h = this._getCharPosition(o);
                  if (h && h.line === n) {
                    var l = Math.abs(h.x - e);
                    if (l < a) {
                      a = l;
                      s = o;
                    }
                  }
                }
                return s;
              };
              a._onCompositionEnd = function () {
                this._syncFromHidden();
              };
              a._segmentText = function () {
                this._graphemes = [];
                this._graphemeOffsets = [];
                for (var e, n = c(t._segmenter.segment(this._text)); !(e = n()).done;) {
                  var r = e.value;
                  var i = r.segment;
                  var s = r.index;
                  this._graphemes.push(i);
                  this._graphemeOffsets.push(s);
                }
                this._graphemeOffsets.push(this._text.length);
              };
              a._graphemeToCodeUnit = function (e) {
                var t = Math.max(0, Math.min(e, this._graphemes.length));
                return this._graphemeOffsets[t];
              };
              a._codeUnitToGrapheme = function (e) {
                var t = this._graphemeOffsets;
                for (var n = 0, r = t.length - 1; n < r;) {
                  var i = n + r + 1 >> 1;
                  if (t[i] <= e) {
                    n = i;
                  } else {
                    r = i - 1;
                  }
                }
                return Math.min(n, this._graphemes.length);
              };
              a._syncFromHidden = function () {
                var n = this._dom_input.value;
                if (!this._multiline) {
                  n = n.replace(/\n/g, "");
                }
                this._text = n;
                this._segmentText();
                if (this._max_length > 0 && this._graphemes.length > this._max_length) {
                  n = n.substring(0, this._graphemeOffsets[this._max_length]);
                }
                if (this._restrict_regex) {
                  if (this._restrict_regex.test(n) || n.length < this._restrict_value.length && !this._restrict_regex.test(this._restrict_value)) {
                    this._restrict_value = n;
                  } else {
                    n = this._restrict_value;
                  }
                }
                if (n !== this._text) {
                  this._text = n;
                  this._segmentText();
                }
                var r = this._dom_input.selectionStart;
                var i = this._dom_input.selectionEnd;
                var s = this._dom_input.value.length;
                var a = this._text.length;
                if (a !== s) {
                  var o = s - a;
                  r = Math.max(0, Math.min(r - o, a));
                  i = Math.max(0, Math.min(i - o, a));
                }
                if (this._dom_input.value !== this._text) {
                  this._dom_input.value = this._text;
                  try {
                    this._dom_input.setSelectionRange(r, i);
                  } catch (e) {}
                }
                var h = Math.min(this._codeUnitToGrapheme(r ?? 0), this._graphemes.length);
                this._cursorIndex = h;
                this._selStart = h;
                this._selEnd = Math.min(this._codeUnitToGrapheme(i ?? 0), this._graphemes.length);
                this._selectionAnchor = this._cursorIndex;
                this._refreshDisplay();
                this.emit("input", this._text);
              };
              a._syncHiddenSelection = function () {
                if (this._dom_input.value !== this._text) {
                  this._dom_input.value = this._text;
                }
                try {
                  this._dom_input.setSelectionRange(this._graphemeToCodeUnit(this._selStart), this._graphemeToCodeUnit(this._selEnd));
                } catch (e) {}
              };
              a._cachedCharWidth = function (e, t) {
                var n = this._charWidthCache.get(e);
                if (n === undefined) {
                  n = t.measureText(e).width;
                  this._charWidthCache.set(e, n);
                }
                return n;
              };
              a._rebuildCharPositions = function () {
                var e = this;
                this._charPositions = [];
                this._lineBreaks = [0];
                if (this._graphemes.length === 0) {
                  this._charPositions.push({
                    x: 0,
                    y: 0,
                    width: 0,
                    line: 0
                  });
                  this._wrappedLines = [""];
                  return;
                }
                var n = function () {
                  if (!g) {
                    var e = document.createElement("canvas");
                    g = e.getContext("2d");
                  }
                  return g;
                }();
                var r = this._textStyle.toFontString();
                n.font = r;
                if (this._useCharWidthCache && this._charWidthCacheFontString !== r) {
                  this._charWidthCache.clear();
                  this._charWidthCacheFontString = r;
                }
                if (this._multiline) {
                  var i = l.Z1e.measureText(this._text, this._textStyle);
                  var s = i.lines;
                  var a = i.lineHeight;
                  this._wrappedLines = s;
                  var o = t._segmenter;
                  var h = this._textStyle.letterSpacing || 0;
                  var d = 0;
                  var u = 0;
                  var p = 0;
                  var m = function () {
                    var t = s[f];
                    if (f > 0) {
                      var r = f - 1;
                      var i = p - a;
                      function l() {
                        var t = e._charPositions.length > 0 ? e._charPositions[e._charPositions.length - 1] : null;
                        e._charPositions.push({
                          x: t && t.line === r ? t.x + t.width : 0,
                          y: i,
                          width: 0,
                          line: r
                        });
                        u++;
                      }
                      if (t.length > 0) {
                        var m = e._text.indexOf(t, d);
                        if (m > d) {
                          while (d < m) {
                            l();
                            d++;
                          }
                        }
                      } else {
                        if (d < e._text.length && e._text[d] === "\r") {
                          l();
                          d++;
                        }
                        if (d < e._text.length && e._text[d] === "\n") {
                          l();
                          d++;
                        }
                      }
                      e._lineBreaks.push(u);
                    }
                    var _ = 0;
                    var v = 0;
                    if (e._useCharWidthCache) {
                      for (var y, g = c(o.segment(t)); !(y = g()).done;) {
                        var w = y.value.segment;
                        var x = e._cachedCharWidth(w, n);
                        e._charPositions.push({
                          x: _,
                          y: p,
                          width: x + h,
                          line: f
                        });
                        _ += x + h;
                        d += w.length;
                        u++;
                        v++;
                      }
                    } else {
                      for (var b, T = c(o.segment(t)); !(b = T()).done;) {
                        var A = b.value;
                        var C = A.segment;
                        var S = A.index;
                        var E = _;
                        var O = n.measureText(t.substring(0, S + C.length)).width + (v + 1) * h;
                        e._charPositions.push({
                          x: E,
                          y: p,
                          width: O - E,
                          line: f
                        });
                        _ = O;
                        d += C.length;
                        u++;
                        v++;
                      }
                    }
                    p += a;
                  };
                  for (var f = 0; f < s.length; f++) {
                    m();
                  }
                  while (u < this._graphemes.length) {
                    var _ = this._charPositions[this._charPositions.length - 1];
                    var v = _ ? _.x + _.width : 0;
                    var y = _ ? _.y : 0;
                    var w = _ ? _.line : s.length - 1;
                    var x = this._graphemes[u];
                    var b = (this._useCharWidthCache ? this._cachedCharWidth(x, n) : n.measureText(x).width) + h;
                    this._charPositions.push({
                      x: v,
                      y,
                      width: b,
                      line: w
                    });
                    u++;
                  }
                  var T = s.length - 1;
                  var A = this._charPositions.length > 0 ? this._charPositions[this._charPositions.length - 1] : null;
                  var C = A ? A.x + A.width : 0;
                  var S = A ? A.y : 0;
                  if (this._graphemes.length > 0 && this._graphemes[this._graphemes.length - 1] === "\n") {
                    C = 0;
                    S = p - a;
                    T++;
                    this._lineBreaks.push(this._graphemes.length);
                  }
                  this._charPositions.push({
                    x: C,
                    y: S,
                    width: 0,
                    line: T
                  });
                  if (this._align !== "left") {
                    var E = this._inputWidth - this._padding[1] - this._padding[3];
                    var O = T + 1;
                    var k = new Float64Array(O);
                    for (var P = 0; P < this._charPositions.length; P++) {
                      var M = this._charPositions[P];
                      var R = M.x + M.width;
                      if (R > k[M.line]) {
                        k[M.line] = R;
                      }
                    }
                    var I = new Float64Array(O);
                    for (var L = 0; L < O; L++) {
                      if (this._align === "center") {
                        I[L] = (E - k[L]) / 2;
                      } else if (this._align === "right") {
                        I[L] = E - k[L];
                      }
                      if (I[L] < 0) {
                        I[L] = 0;
                      }
                    }
                    for (var j = 0; j < this._charPositions.length; j++) {
                      this._charPositions[j].x += I[this._charPositions[j].line];
                    }
                  }
                  if (!this._input_style.height) {
                    var B = S + a + this._padding[0] + this._padding[2];
                    if (B !== this._inputHeight) {
                      this._inputHeight = B;
                      this._updateLayout();
                    }
                  }
                } else {
                  var D = this._textStyle.letterSpacing || 0;
                  var F = this._displayText();
                  var N = 0;
                  if (this._useCharWidthCache) {
                    for (var G = 0; G < this._graphemes.length; G++) {
                      var U = this._cachedCharWidth(this._displayAsPassword ? "•" : this._graphemes[G], n);
                      this._charPositions.push({
                        x: N,
                        y: 0,
                        width: U + D,
                        line: 0
                      });
                      N += U + D;
                    }
                  } else {
                    for (var V = 0; V < this._graphemes.length; V++) {
                      var H = N;
                      var z = this._displayAsPassword ? V + 1 : this._graphemeOffsets[V + 1];
                      var W = n.measureText(F.substring(0, z)).width + (V + 1) * D;
                      this._charPositions.push({
                        x: H,
                        y: 0,
                        width: W - H,
                        line: 0
                      });
                      N = W;
                    }
                  }
                  this._charPositions.push({
                    x: N,
                    y: 0,
                    width: 0,
                    line: 0
                  });
                  this._wrappedLines = [F];
                  if (this._align !== "left") {
                    var X = N;
                    var Y = this._inputWidth - this._padding[1] - this._padding[3];
                    var q = 0;
                    if (this._align === "center") {
                      q = (Y - X) / 2;
                    } else if (this._align === "right") {
                      q = Y - X;
                    }
                    if (q > 0) {
                      for (var J = 0; J < this._charPositions.length; J++) {
                        this._charPositions[J].x += q;
                      }
                    }
                  }
                }
              };
              a._getCharPosition = function (e) {
                if (e < 0 || e >= this._charPositions.length) {
                  return null;
                } else {
                  return this._charPositions[e];
                }
              };
              a._getLineForIndex = function (e) {
                for (var t = this._lineBreaks.length - 1; t >= 0; t--) {
                  if (e >= this._lineBreaks[t]) {
                    return t;
                  }
                }
                return 0;
              };
              a._refreshDisplay = function () {
                this._rebuildCharPositions();
                this._updateScroll();
                this._updateDisplayText();
                this._updateCaret();
                this._updateSelection();
                this._updatePlaceholder();
                this._updateBox();
              };
              a._getFontMetrics = function () {
                var e = this._textStyle.toFontString();
                if (this._cachedFontString !== e) {
                  this._cachedFontString = e;
                  this._cachedFontMetrics = l.Z1e.measureFont(e);
                }
                return this._cachedFontMetrics;
              };
              a._resizeTextCanvas = function () {
                var e = this._canvasResolution;
                var t = Math.max(1, Math.ceil(this._inputWidth - this._padding[1] - this._padding[3]));
                var n = Math.max(1, Math.ceil(this._inputHeight - this._padding[0] - this._padding[2]));
                var r = Math.ceil(t * e);
                var i = Math.ceil(n * e);
                if (this._textCanvas.width !== r || this._textCanvas.height !== i) {
                  this._textCanvas.width = r;
                  this._textCanvas.height = i;
                  this._textBaseTexture.setRealSize(r, i, e);
                }
              };
              a._updateDisplayText = function () {
                var e = this._canvasResolution;
                var t = this._textCtx;
                var n = this._textCanvas.width;
                var r = this._textCanvas.height;
                t.setTransform(1, 0, 0, 1, 0, 0);
                t.clearRect(0, 0, n, r);
                if (this._graphemes.length !== 0) {
                  t.setTransform(e, 0, 0, e, 0, 0);
                  t.font = this._textStyle.toFontString();
                  var i = this._textStyle.fill;
                  if (typeof i == "number") {
                    i = "#" + i.toString(16).padStart(6, "0");
                  }
                  t.fillStyle = i || "#000000";
                  t.textBaseline = "alphabetic";
                  var s = this._getFontMetrics().ascent;
                  if ((this._textStyle.letterSpacing || 0) === 0) {
                    if (this._multiline) {
                      for (var a = 0; a < this._wrappedLines.length; a++) {
                        var o = a < this._lineBreaks.length ? this._lineBreaks[a] : 0;
                        var h = this._getCharPosition(o);
                        if (h) {
                          t.fillText(this._wrappedLines[a], h.x - this._scrollX, s + h.y - this._scrollY);
                        }
                      }
                    } else {
                      t.fillText(this._displayText(), -this._scrollX, s - this._scrollY);
                    }
                  } else {
                    for (var l = 0; l < this._graphemes.length; l++) {
                      var d = this._charPositions[l];
                      if (d) {
                        var c = this._displayAsPassword ? "•" : this._graphemes[l];
                        t.fillText(c, d.x - this._scrollX, s + d.y - this._scrollY);
                      }
                    }
                  }
                  this._textBaseTexture.update();
                } else {
                  this._textBaseTexture.update();
                }
              };
              a._displayText = function () {
                if (this._displayAsPassword) {
                  return "•".repeat(this._graphemes.length);
                } else {
                  return this._text;
                }
              };
              a._updatePlaceholder = function () {
                if (this._text.length === 0 && !this._focused && this._placeholder) {
                  this._placeholderText.visible = true;
                  this._placeholderText.text = this._placeholder;
                } else {
                  this._placeholderText.visible = false;
                }
              };
              a._updateCaret = function () {
                if (this._focused) {
                  var e = this._getCharPosition(this._cursorIndex);
                  if (e) {
                    var t = e.x - this._scrollX;
                    var n = e.y - this._scrollY;
                    var r = this._caretVisible && this._selStart === this._selEnd;
                    var i = this._textStyle.toFontString();
                    if (this._caret.x !== t || this._caret.y !== n || this._caretFontString !== i || !this._caretDrawn) {
                      var s = this._getFontMetrics();
                      var a = s.ascent + s.descent;
                      this._caret.clear();
                      this._caret.lineStyle(1, typeof this._textStyle.fill == "number" ? this._textStyle.fill : l.WpD.string2hex(this._textStyle.fill));
                      this._caret.moveTo(0, 0);
                      this._caret.lineTo(0, a);
                      this._caret.x = t;
                      this._caret.y = n;
                      this._caretDrawn = true;
                      this._caretFontString = i;
                    }
                    this._caret.visible = r;
                  }
                } else {
                  this._caret.visible = false;
                }
              };
              a._startCaretBlink = function () {
                var e = this;
                this._stopCaretBlink();
                this._caretVisible = true;
                this._caret.visible = true;
                this._caretInterval = setInterval(function () {
                  e._caretVisible = !e._caretVisible;
                  if (e._focused && e._selStart === e._selEnd) {
                    e._caret.visible = e._caretVisible;
                  }
                }, 530);
              };
              a._stopCaretBlink = function () {
                if (this._caretInterval) {
                  clearInterval(this._caretInterval);
                  this._caretInterval = null;
                }
              };
              a._resetCaretBlink = function () {
                if (this._focused) {
                  this._startCaretBlink();
                }
              };
              a._updateSelection = function () {
                this._selectionGfx.clear();
                if (this._selStart !== this._selEnd) {
                  this._selectionGfx.beginFill(3379455, 0.3);
                  var e = this._getFontMetrics();
                  var t = e.ascent + e.descent;
                  var n = this._getLineForIndex(this._selStart);
                  for (var r = this._getLineForIndex(this._selEnd), i = n; i <= r; i++) {
                    var s = this._lineBreaks[i] || 0;
                    var a = i < this._lineBreaks.length - 1 ? this._lineBreaks[i + 1] : this._graphemes.length;
                    var o = Math.max(this._selStart, s);
                    var h = Math.min(this._selEnd, a);
                    var l = this._getCharPosition(o);
                    var d = this._getCharPosition(h);
                    if (l && d) {
                      var c = l.x - this._scrollX;
                      var u = undefined;
                      if (d.line !== i) {
                        var p = this._getCharPosition(h - 1);
                        u = (p ? p.x + p.width : 0) - this._scrollX;
                      } else {
                        u = d.x - this._scrollX;
                      }
                      var m = l.y - this._scrollY;
                      this._selectionGfx.drawRect(c, m, u - c, t);
                    }
                  }
                  this._selectionGfx.endFill();
                }
              };
              a._updateScroll = function () {
                var e = this._getCharPosition(this._cursorIndex);
                if (e) {
                  var t = this._inputWidth - this._padding[1] - this._padding[3];
                  var n = this._inputHeight - this._padding[0] - this._padding[2];
                  if (this._multiline) {
                    var r = this._textStyle.fontSize;
                    if (e.y + r - this._scrollY > n) {
                      this._scrollY = e.y + r - n;
                    } else if (e.y - this._scrollY < 0) {
                      this._scrollY = e.y;
                    }
                    if (e.x - this._scrollX > t) {
                      this._scrollX = e.x - t;
                    } else if (e.x - this._scrollX < 0) {
                      this._scrollX = e.x;
                    }
                  } else if (e.x - this._scrollX > t) {
                    this._scrollX = e.x - t;
                  } else if (e.x - this._scrollX < 0) {
                    this._scrollX = e.x;
                  }
                  var i = this._getMaxScrollX();
                  if (this._scrollX > i) {
                    this._scrollX = i;
                  }
                  var s = this._getMaxScrollY();
                  if (this._scrollY > s) {
                    this._scrollY = s;
                  }
                }
              };
              a._getMaxScrollX = function () {
                var e = this._inputWidth - this._padding[1] - this._padding[3];
                var t = this._getCharPosition(this._graphemes.length);
                if (t) {
                  return Math.max(0, t.x - e);
                } else {
                  return 0;
                }
              };
              a._getMaxScrollY = function () {
                if (!this._multiline) {
                  return 0;
                }
                var e = this._inputHeight - this._padding[0] - this._padding[2];
                var t = this._getCharPosition(this._graphemes.length);
                if (!t) {
                  return 0;
                }
                var n = this._textStyle.fontSize;
                return Math.max(0, t.y + n - e);
              };
              a._onWheel = function (e) {
                if (this._hovered) {
                  var t = this._inputHeight - this._padding[0] - this._padding[2];
                  var n = e.deltaY;
                  var r = e.deltaX;
                  var i = this._textStyle.fontSize;
                  if (e.deltaMode === 1) {
                    n *= i;
                    r *= i;
                  } else if (e.deltaMode === 2) {
                    n *= t;
                    r *= t;
                  } else {
                    n = n / 100 * 3 * i;
                    r = r / 100 * 3 * i;
                  }
                  var s = false;
                  if (this._multiline) {
                    var a = this._getMaxScrollY();
                    if (a <= 0) {
                      return;
                    }
                    var o = this._scrollY;
                    this._scrollY = Math.max(0, Math.min(a, this._scrollY + n));
                    s = this._scrollY !== o;
                  } else {
                    var h = r !== 0 ? r : n;
                    var l = this._getMaxScrollX();
                    if (l <= 0) {
                      return;
                    }
                    var d = this._scrollX;
                    this._scrollX = Math.max(0, Math.min(l, this._scrollX + h));
                    s = this._scrollX !== d;
                  }
                  if (s) {
                    e.preventDefault();
                    this._updateDisplayText();
                    this._updateCaret();
                    this._updateSelection();
                  }
                }
              };
              a._setState = function (e) {
                this.state = e;
                this._updateBox();
              };
              a._updateBox = function () {
                if (this._box_generator) {
                  if (this._needsNewBoxCache()) {
                    this._buildBoxCache();
                  }
                  if (this.state !== this._previous.state || this._box !== this._box_cache[this.state]) {
                    if (this._box) {
                      this.removeChild(this._box);
                    }
                    this._box = this._box_cache[this.state];
                    if (this._box) {
                      this.addChildAt(this._box, 0);
                    }
                    this._previous.state = this.state;
                  }
                }
              };
              a._needsNewBoxCache = function () {
                return !this._previous.input_bounds || this._inputWidth !== this._previous.input_bounds.width || this._inputHeight !== this._previous.input_bounds.height;
              };
              a._buildBoxCache = function () {
                this._destroyBoxCache();
                for (var e = 0, t = [y.DEFAULT, y.FOCUSED, y.DISABLED]; e < t.length; e++) {
                  var n = t[e];
                  this._box_cache[n] = this._box_generator(this._inputWidth, this._inputHeight, n);
                }
                this._previous.input_bounds = {
                  width: this._inputWidth,
                  height: this._inputHeight
                };
              };
              a._destroyBoxCache = function () {
                if (this._box) {
                  this.removeChild(this._box);
                  this._box = null;
                }
                for (var e in this._box_cache) {
                  this._box_cache[e].destroy();
                  delete this._box_cache[e];
                }
              };
              a.render = function (t) {
                e.prototype.render.call(this, t);
                if (!f.active) {
                  var n = _(this.worldTransform);
                  var r = v(t.resolution * n);
                  if (this._canvasResolution !== r) {
                    this._canvasResolution = r;
                    this._textBaseTexture.resolution = r;
                    this._textCanvas.width = 0;
                    this._resizeTextCanvas();
                    this._updateDisplayText();
                  }
                }
              };
              a.forceRefresh = function () {
                this._scrollX = 0;
                this._scrollY = 0;
                this._refreshDisplay();
              };
              a.setInputStyle = function (e, t) {
                if (this._input_style[e] !== t) {
                  this._input_style[e] = t;
                  var n = false;
                  switch (e) {
                    case "width":
                      this._inputWidth = parseFloat(t);
                      if (this._multiline && this._wordWrap) {
                        this._textStyle.wordWrapWidth = this._inputWidth - this._padding[1] - this._padding[3];
                      }
                      n = true;
                      break;
                    case "height":
                      this._inputHeight = parseFloat(t);
                      n = true;
                      break;
                    case "fontSize":
                      var r = parseInt(t);
                      this._textStyle.fontSize = r;
                      this._placeholderText.style.fontSize = r;
                      if (!this._input_style.height) {
                        this._inputHeight = r + this._padding[0] + this._padding[2] + 4;
                      }
                      n = true;
                      break;
                    case "fontFamily":
                      this._textStyle.fontFamily = t;
                      this._placeholderText.style.fontFamily = t;
                      break;
                    case "color":
                      var i = t;
                      if (typeof i == "string" && i.startsWith("#")) {
                        i = l.WpD.string2hex(i);
                      }
                      this._textStyle.fill = i;
                      break;
                    case "letterSpacing":
                      this._textStyle.letterSpacing = parseFloat(t);
                      break;
                    case "padding":
                      this._input_style.padding = t;
                      this._padding = this._parsePadding();
                      if (this._multiline && this._wordWrap) {
                        this._textStyle.wordWrapWidth = this._inputWidth - this._padding[1] - this._padding[3];
                      }
                      n = true;
                      break;
                    case "fontWeight":
                      this._textStyle.fontWeight = t;
                      break;
                    case "fontStyle":
                      this._textStyle.fontStyle = t;
                      break;
                    case "align":
                      this._align = t;
                      this._placeholderText.style.align = t;
                  }
                  if (n) {
                    this._updateLayout();
                  }
                  this._refreshDisplay();
                  this._previous.input_bounds = null;
                }
              };
              a.destroy = function (t) {
                if (this._focused) {
                  this._onBlurred();
                }
                window.removeEventListener("wheel", this._boundOnWheel);
                this._stopCaretBlink();
                this._destroyBoxCache();
                if (this._dom_input) {
                  this._dom_input.removeEventListener("input", this._boundOnInput);
                  this._dom_input.removeEventListener("keydown", this._boundOnKeyDown);
                  this._dom_input.removeEventListener("keyup", this._boundOnKeyUp);
                  this._dom_input.removeEventListener("focus", this._boundOnFocused);
                  this._dom_input.removeEventListener("blur", this._boundOnBlurred);
                  this._dom_input.removeEventListener("compositionend", this._boundOnCompositionEnd);
                  this._dom_input.removeEventListener("copy", this._boundOnCopyCut);
                  this._dom_input.removeEventListener("cut", this._boundOnCopyCut);
                  if (this._dom_input.parentNode) {
                    this._dom_input.parentNode.removeChild(this._dom_input);
                  }
                }
                if (this._displaySprite && this._displaySprite.texture) {
                  this._displaySprite.texture.destroy(true);
                }
                this._textCanvas = null;
                this._textCtx = null;
                e.prototype.destroy.call(this, Object.assign({
                  children: true
                }, t));
              };
              i = t;
              if (s = [{
                key: "useCharWidthCache",
                get: function () {
                  return this._useCharWidthCache;
                },
                set: function (e) {
                  this._useCharWidthCache = e;
                  if (!e) {
                    this._charWidthCache.clear();
                    this._charWidthCacheFontString = "";
                  }
                }
              }, {
                key: "substituteText",
                get: function () {
                  return this._substituted;
                },
                set: function (e) {
                  this._substituted = e;
                  this._refreshDisplay();
                }
              }, {
                key: "displayAsPassword",
                get: function () {
                  return this._displayAsPassword;
                },
                set: function (e) {
                  if (this._multiline && e) {
                    throw Error("");
                  }
                  if (this._displayAsPassword !== e) {
                    this._displayAsPassword = e;
                    this._refreshDisplay();
                  }
                }
              }, {
                key: "placeholder",
                get: function () {
                  return this._placeholder;
                },
                set: function (e) {
                  this._placeholder = e;
                  this._updatePlaceholder();
                }
              }, {
                key: "disabled",
                get: function () {
                  return this._disabled;
                },
                set: function (e) {
                  this._disabled = e;
                  this._dom_input.readOnly = e;
                  if (e && this._focused) {
                    this.blur();
                  }
                  this._setState(e ? y.DISABLED : y.DEFAULT);
                }
              }, {
                key: "maxLength",
                get: function () {
                  return this._max_length;
                },
                set: function (e) {
                  this._max_length = e;
                  this._dom_input.removeAttribute("maxlength");
                }
              }, {
                key: "restrict",
                get: function () {
                  return this._restrict_regex;
                },
                set: function (e) {
                  if (e instanceof RegExp) {
                    var t = e.source;
                    if (t.charAt(0) !== "^") {
                      t = "^" + t;
                    }
                    if (t.charAt(t.length - 1) !== "$") {
                      t += "$";
                    }
                    this._restrict_regex = new RegExp(t);
                  } else {
                    var n = this._multiline ? "\\n\\r" : "";
                    this._restrict_regex = new RegExp("^[" + e + n + "]*$", "u");
                  }
                }
              }, {
                key: "text",
                get: function () {
                  return this._text;
                },
                set: function (e) {
                  var t = String(e ?? "");
                  if (t !== this._text) {
                    this._text = t;
                    this._segmentText();
                    this._dom_input.value = this._text;
                    this._restrict_value = this._text;
                    this._cursorIndex = this._graphemes.length;
                    this._selStart = this._selEnd = this._cursorIndex;
                    this._selectionAnchor = this._cursorIndex;
                    this._refreshDisplay();
                  }
                }
              }]) {
                (function (e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || false;
                    r.configurable = true;
                    if ("value" in r) {
                      r.writable = true;
                    }
                    Object.defineProperty(e, p(r.key), r);
                  }
                })(i.prototype, s);
              }
              Object.defineProperty(i, "prototype", {
                writable: false
              });
              return i;
            }(l.mcf);
            w._segmenter = new Intl.Segmenter("en", {
              granularity: "grapheme"
            });
          }
    });
})();
