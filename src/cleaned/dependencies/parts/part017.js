(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        74418(e, t, n) {
            "use strict";
        
            n.d(t, {
              Z: () => v
            });
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(26099);
            n(2892);
            var r = n(4971);
            var i = n(80902);
            var s = n(27453);
            var a = n(45177);
            var o = n(14865);
            var h = n(15081);
            var l = n(98263);
            function d(e) {
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
            function c(e, t) {
              c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return c(e, t);
            }
            var u = function (e) {
              function t(n, i, d, c) {
                var u;
                if (d === undefined) {
                  d = false;
                }
                if (c === undefined) {
                  c = false;
                }
                (u = e.call(this) || this).maxHeight = 220;
                u.maskHeight = 220;
                u.totalHeight = 224;
                u.totalWidth = 154;
                u.itemWidth = 150;
                u.mouseUpHandler = function (e) {
                  if (e instanceof o.t) {
                    var n = e;
                    n.expanded = !n.expanded;
                    u.organizeList();
                  } else if (e instanceof h.B) {
                    if (u._selectedItem) {
                      if (u._selectedItem == e) {
                        return;
                      }
                      u._selectedItem.selected = false;
                    }
                    u._selectedItem = e;
                    u._selectedItem.selected = true;
                    u.dispatchEvent(new r.Jh(t.ITEM_SELECTED));
                  } else if (e == u.playSprite && u.playSound) {
                    var i = u.mouseItem.value;
                    var l = a.G.instance.sfxDictionary.get(i);
                    if (u.soundChannel) {
                      u.soundChannel.stop();
                    }
                    u.soundChannel = s.xF.playSoundOnChannel(l, "sfx");
                  }
                };
                u.mouseOverHandler = function (e) {
                  if (e instanceof h.B) {
                    var t = e;
                    if (u.lastRolledItem) {
                      u.lastRolledItem.rollOut();
                    }
                    u.lastRolledItem = t;
                    u.lastRolledItem.rollOver();
                    if (t instanceof o.t || !u.playSound) {
                      return;
                    }
                    if (!u.playSprite) {
                      u.playSprite = new r.j7((0, l.zI)("EditorUI", "ListPlayButton"));
                      u.playSprite.pixiSprite.buttonMode = u.playSprite.pixiSprite.interactive = true;
                      u.playSprite.pixiSprite.on("pointertap", function () {
                        return u.mouseUpHandler(u.playSprite);
                      });
                      u.playSprite.x = 135;
                      u.playSprite.y = 11;
                    }
                    u.mouseItem = e;
                    u.mouseItem.addChild(u.playSprite);
                  }
                };
                u.enterFrameHandler = function (e) {
                  var t = e.delta * 0.5;
                  var n = u.maskHeight * 0.5;
                  var r = n - 30;
                  var i = n + 30;
                  var s = (u.holder.mouseY < r ? u.holder.mouseY - r : u.holder.mouseY > i ? u.holder.mouseY - i : 0) / r * 10;
                  u.list.y -= s * t;
                  if (u.list.y > 0) {
                    u.list.y = 0;
                  }
                  if (u.list.y < u.maskHeight - u.list.height) {
                    u.list.y = u.maskHeight - u.list.height;
                  }
                };
                u.entryList = n;
                if (!c) {
                  u.initialEntry = i;
                }
                u.playSound = d;
                u.init();
                return u;
              }
              var n;
              var i;
              i = e;
              (n = t).prototype = Object.create(i.prototype);
              n.prototype.constructor = n;
              c(n, i);
              var u;
              var p;
              var m = t.prototype;
              m.init = function () {
                this.createList();
                if (this.scrollable) {
                  this.holder.addEventListener(r.Jh.ENTER_FRAME, this.enterFrameHandler);
                }
              };
              m.createList = function () {
                this.holder = new r.kx();
                this.holder.y = 2;
                this.holder.x = 2;
                this.addChild(this.holder);
                this.listMask = new r.kx();
                this.listMask.graphics.beginFill(0);
                this.listMask.graphics.drawRect(0, 0, this.itemWidth, this.maskHeight);
                this.listMask.graphics.endFill();
                this.holder.addChild(this.listMask);
                this.list = new r.kx();
                this.holder.addChildAt(this.list, 0);
                this.list.mask = this.listMask;
                var e = 0;
                for (var t = 0; t < this.entryList.length; t++) {
                  var n = this.entryList[t];
                  var i = this.createItem(n, 0);
                  this.list.addChild(i);
                  e += i.height;
                }
                if (e >= this.maxHeight) {
                  this.scrollable = true;
                  this.maskHeight = this.maxHeight;
                } else {
                  this.maskHeight = e;
                }
                this.totalHeight = this.maskHeight + 4;
                this.graphics.beginFill(10066329);
                this.graphics.drawRect(0, 0, this.totalWidth, this.totalHeight);
                this.graphics.endFill();
                if (this._selectedItem) {
                  if (this._selectedItem.parentItem) {
                    for (var s = this._selectedItem.parentItem; s;) {
                      s.expanded = true;
                      s = s.parentItem;
                    }
                  }
                  this.organizeList();
                  if (this.scrollable) {
                    var a = Math.round(this.maskHeight * 0.5);
                    var o = 0;
                    var h = this._selectedItem.parent;
                    for (var l = this._selectedItem; l != this.list;) {
                      o += l.y;
                      h = (l = h).parent;
                    }
                    var d = a - o;
                    this.list.y = d - 11;
                  }
                } else {
                  this.organizeList();
                }
              };
              m.createItem = function (e, t) {
                var n = this;
                if (e instanceof Array) {
                  var r = e;
                  var i = new o.t(r[0], t, this.itemWidth);
                  i.bg.pixiSprite.interactive = true;
                  i.bg.pixiSprite.on("pointerover", function () {
                    return n.mouseOverHandler(i);
                  });
                  i.bg.pixiSprite.on("pointertap", function () {
                    return n.mouseUpHandler(i);
                  });
                  for (var s = 1; s < r.length; s++) {
                    var a = r[s];
                    i.addChildItem(this.createItem(a, t + 1));
                  }
                  return i;
                }
                var l = e;
                var d = new h.B(l, l, t, this.itemWidth);
                d.bg.pixiSprite.interactive = true;
                d.bg.pixiSprite.on("pointerover", function () {
                  return n.mouseOverHandler(d);
                });
                d.bg.pixiSprite.on("pointertap", function () {
                  return n.mouseUpHandler(d);
                });
                if (l == this.initialEntry) {
                  this._selectedItem = d;
                  this._selectedItem.selected = true;
                }
                return d;
              };
              m.organizeList = function () {
                var e = 0;
                for (var t = 0; t < this.list.numChildren; t++) {
                  var n = this.list.getChildAt(t);
                  n.y = e;
                  e += n.height;
                  if (n instanceof o.t) {
                    n.organizeChildren();
                  }
                }
              };
              m.die = function () {
                if (this.soundChannel) {
                  this.soundChannel.stop();
                }
                this.list.removeEventListener(r.Cm.MOUSE_UP, this.mouseUpHandler);
                this.list.removeEventListener(r.Cm.MOUSE_OVER, this.mouseOverHandler);
                this.holder.removeEventListener(r.Jh.ENTER_FRAME, this.enterFrameHandler);
              };
              u = t;
              if (p = [{
                key: "selectedEntry",
                get: function () {
                  return this._selectedItem.value;
                }
              }, {
                key: "height",
                get: function () {
                  return this.totalHeight;
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
                    Object.defineProperty(e, d(r.key), r);
                  }
                })(u.prototype, p);
              }
              Object.defineProperty(u, "prototype", {
                writable: false
              });
              return u;
            }(r.kx);
            u.ITEM_SELECTED = "itemselected";
            var p = n(59301);
            var m = n(42574);
            function f(e) {
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
            function _(e, t) {
              _ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return _(e, t);
            }
            var v = function (e) {
              function t(t, n, i, s, a, o) {
                var h;
                if (o === undefined) {
                  o = false;
                }
                (h = e.call(this) || this)._entry = "UHH";
                h.arrowUpHandler = function (e) {
                  if (!h.listMenu) {
                    h.listMenu = new u(h.entryArray, h.entry, h.playSound, h._ambiguous);
                    h.stage.addChild(h.listMenu);
                    var t = h.localToGlobal(new r.bR(h.arrowSprite.x, h.arrowSprite.y));
                    h.listMenu.x = t.x;
                    h.listMenu.y = Math.round(t.y - h.listMenu.height * 0.5) + 8;
                    if (h.listMenu.y + h.listMenu.height > 500) {
                      h.listMenu.y = Math.ceil(500 - h.listMenu.height);
                    }
                    h.listMenu.addEventListener(u.ITEM_SELECTED, h.itemSelected);
                    h.listMenu.addEventListener(r.Cm.ROLL_OUT, h.closeListMenu);
                  }
                };
                h.expandUpHandler = function (e) {
                  if (h.stage) {
                    h.stage.focus = h.stage;
                  }
                  if (h.multipleIndex == 0) {
                    h.dispatchEvent(new m.O(m.O.ADD_INPUT, h, h.entry));
                  } else {
                    h.dispatchEvent(new m.O(m.O.REMOVE_INPUT, h, h.entry));
                  }
                };
                h.expandOverHandler = function (e) {
                  if (h.multipleIndex == 0) {
                    var t = h.multipleKey;
                    var n = t.parent.getChildIndex(t) + 1;
                    p.u.instance.show("add another action for trigger " + n, h);
                  }
                };
                h.itemSelected = function (e) {
                  h.entry = h.listMenu.selectedEntry;
                  h.dispatchEvent(new m.O(m.O.VALUE_CHANGE, h, h.entry, true));
                };
                h.closeListMenu = function (e = null) {
                  if (h.listMenu) {
                    h.listMenu.die();
                    h.listMenu.removeEventListener(u.ITEM_SELECTED, h.itemSelected);
                    h.stage.removeChild(h.listMenu);
                    h.listMenu = null;
                  }
                };
                h.attribute = n;
                h.entryArray = i;
                h.childInputs = [];
                h.editable = a;
                h.playSound = s;
                h._expandable = o;
                h.createLabel(t);
                h.init();
                return h;
              }
              var n;
              var i;
              i = e;
              (n = t).prototype = Object.create(i.prototype);
              n.prototype.constructor = n;
              _(n, i);
              var s;
              var a;
              var o = t.prototype;
              o.init = function () {
                this.arrowSprite = new r.kx();
                this.addChild(this.arrowSprite);
                this.arrowSprite.x = 110;
                this.arrowSprite.y = 7;
                this.arrowSprite.graphics.beginFill(4032711);
                this.arrowSprite.graphics.lineTo(10, 8);
                this.arrowSprite.graphics.lineTo(0, 16);
                this.arrowSprite.graphics.lineTo(0, 0);
                this.arrowSprite.graphics.endFill();
                this.arrowSprite.buttonMode = true;
                this.arrowSprite.addEventListener(r.Cm.MOUSE_UP, this.arrowUpHandler);
                if (this._expandable) {
                  this.drawExpandButton();
                }
              };
              o.drawExpandButton = function () {
                if (!this.plusSprite) {
                  this.plusSprite = new r.kx();
                  this.addChild(this.plusSprite);
                  this.plusSprite.x = 100.5;
                  this.plusSprite.y = 14.5;
                  this.plusSprite.buttonMode = true;
                  this.plusSprite.addEventListener(r.Cm.MOUSE_UP, this.expandUpHandler);
                  this.plusSprite.addEventListener(r.Cm.ROLL_OVER, this.expandOverHandler);
                }
                this.plusSprite.graphics.clear();
                this.plusSprite.graphics.beginFill(16777215);
                this.plusSprite.graphics.drawCircle(0, 0, 4.5);
                this.plusSprite.graphics.endFill();
                if (this.multipleIndex === 0) {
                  this.plusSprite.graphics.beginFill(4032711);
                  this.plusSprite.graphics.drawRect(-2.5, -0.5, 5, 1);
                  this.plusSprite.graphics.endFill();
                  this.plusSprite.graphics.beginFill(4032711);
                  this.plusSprite.graphics.drawRect(-0.5, -2.5, 1, 5);
                  this.plusSprite.graphics.endFill();
                } else {
                  this.plusSprite.graphics.beginFill(16613761);
                  this.plusSprite.graphics.drawRect(-2.5, -0.5, 5, 1);
                  this.plusSprite.graphics.endFill();
                }
              };
              o.createLabel = function (e) {
                var t = new r.lk("HelveticaNeueLT Std", 11, 16777215, null, null, null, null, null, r.MA.LEFT);
                this.labelText = new r.A_();
                this.labelText.defaultTextFormat = t;
                this.labelText.autoSize = r.wL.LEFT;
                this.labelText.width = 10;
                this.labelText.height = 17;
                this.labelText.x = 0;
                this.labelText.y = 0;
                this.labelText.multiline = false;
                this.labelText.selectable = false;
                this.labelText.antiAliasType = r.BF.ADVANCED;
                this.labelText.text = e + ":";
                this.addChild(this.labelText);
                t = new r.lk("HelveticaNeueLT Std", 11, 7895160, null, null, null, null, null, r.MA.LEFT);
                this.valueText = new r.A_();
                this.valueText.defaultTextFormat = t;
                this.valueText.autoSize = r.wL.LEFT;
                this.valueText.width = 10;
                this.valueText.height = 17;
                this.valueText.x = 0;
                this.valueText.y = Math.ceil(this.labelText.y + this.labelText.height) - 2;
                this.valueText.multiline = false;
                this.valueText.selectable = false;
                this.valueText.antiAliasType = r.BF.ADVANCED;
                this.valueText.text = "";
                this.addChild(this.valueText);
              };
              o.setValue = function (e) {
                this.entry = e;
              };
              o.setToAmbiguous = function () {
                this.valueText.text = "-";
                this._ambiguous = true;
              };
              o.die = function () {
                e.prototype.die.call(this);
                this.closeListMenu();
                this.arrowSprite.removeEventListener(r.Cm.MOUSE_UP, this.arrowUpHandler);
                if (this.plusSprite) {
                  this.plusSprite.removeEventListener(r.Cm.MOUSE_UP, this.expandUpHandler);
                  this.plusSprite.removeEventListener(r.Cm.ROLL_OVER, this.expandOverHandler);
                }
              };
              s = t;
              if (a = [{
                key: "entry",
                get: function () {
                  return this._entry;
                },
                set: function (e) {
                  if (this.editable) {
                    this._ambiguous = false;
                    this._entry = e;
                    this.valueText.text = this._entry;
                  }
                }
              }, {
                key: "height",
                get: function () {
                  return 31;
                }
              }, {
                key: "multipleIndex",
                get: function () {
                  return this._multipleIndex;
                },
                set: function (e) {
                  this._multipleIndex = e;
                  this.drawExpandButton();
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
                    Object.defineProperty(e, f(r.key), r);
                  }
                })(s.prototype, a);
              }
              Object.defineProperty(s, "prototype", {
                writable: false
              });
              return s;
            }(i.C);
          },
        67340(e, t, n) {
            "use strict";
        
            n.d(t, {
              A: () => s
            });
            var r = n(4971);
            function i(e, t) {
              i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return i(e, t);
            }
            var s = function (e) {
              function t(t) {
                var n;
                (n = e.call(this) || this).createTextField();
                if (t !== null) {
                  n.textField.htmlText = "" + String(t);
                }
                n.bg = new r.kx();
                n.addChildAt(n.bg, 0);
                n.drawBg(11382189);
                n.buttonMode = false;
                n.mouseChildren = false;
                return n;
              }
              var n;
              var s;
              s = e;
              (n = t).prototype = Object.create(s.prototype);
              n.prototype.constructor = n;
              i(n, s);
              var a = t.prototype;
              a.createTextField = function () {
                var e = new r.lk("HelveticaNeueLT Std Med", 12, 16777215, null, null, null, null, null, r.MA.CENTER);
                this.textField = new r.A_();
                this.textField.defaultTextFormat = e;
                this.textField.width = 174;
                this.textField.height = 18;
                this.textField.x = 5;
                this.textField.y = 2;
                this.textField.multiline = false;
                this.textField.wordWrap = false;
                this.textField.selectable = false;
                this.textField.antiAliasType = r.BF.ADVANCED;
                this.addChild(this.textField);
              };
              a.drawBg = function (e) {
                this.bg.graphics.clear();
                this.bg.graphics.beginFill(e);
                this.bg.graphics.drawRect(0, 0, 200, 20);
                this.bg.graphics.endFill();
                this.bg.graphics.lineStyle(0, 10066329, 1);
                this.bg.graphics.moveTo(0, 0);
                this.bg.graphics.lineTo(200, 0);
                this.bg.graphics.moveTo(0, 20);
                this.bg.graphics.lineTo(200, 20);
              };
              return t;
            }(r.kx);
          },
        14865(e, t, n) {
            "use strict";
        
            n.d(t, {
              t: () => o
            });
            n(2892);
            n(27495);
            n(25440);
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(26099);
            var r = n(15081);
            var i = n(4971);
            function s(e) {
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
            function a(e, t) {
              a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return a(e, t);
            }
            var o = function (e) {
              function t(t, n, r) {
                var s;
                if (n === undefined) {
                  n = 0;
                }
                if (r === undefined) {
                  r = 100;
                }
                (s = e.call(this, t, "", n, r) || this).symbol = new i.kx();
                s._downBgColor = 8825545;
                s.addChild(s.symbol);
                s.symbol.y = 7;
                s.symbol.x = 5 + n * 13;
                s.symbol.mouseEnabled = false;
                s.textField.x = s.symbol.x + 12;
                s.holder = new i.kx();
                s.holder.y = s._bgHeight;
                s.rollOut();
                return s;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              a(n, r);
              var o;
              var h;
              var l = t.prototype;
              l.addChildItem = function (e) {
                this.holder.addChild(e);
                e.x = 0;
                e.y = (this.holder.numChildren - 1) * this._bgHeight;
                e.parentItem = this;
              };
              l.drawSymbol = function () {
                if (this.symbol) {
                  this.symbol.graphics.clear();
                  var e = Number(this.textField.textColor.replace("#", "0x"));
                  if (this._expanded) {
                    this.symbol.graphics.beginFill(e);
                    this.symbol.graphics.drawRect(0, 4, 9, 1);
                    this.symbol.graphics.endFill();
                  } else {
                    this.symbol.graphics.beginFill(e);
                    this.symbol.graphics.drawRect(0, 4, 9, 1);
                    this.symbol.graphics.endFill();
                    this.symbol.graphics.beginFill(e);
                    this.symbol.graphics.drawRect(4, 0, 1, 9);
                    this.symbol.graphics.endFill();
                  }
                }
              };
              l.organizeChildren = function () {
                var e = 0;
                for (var t = 0; t < this.holder.numChildren; t++) {
                  var n = this.holder.getChildAt(t);
                  n.y = e;
                  e += n.height;
                }
              };
              o = t;
              if (h = [{
                key: "expanded",
                get: function () {
                  return this._expanded;
                },
                set: function (e) {
                  if (e != this._expanded) {
                    this._expanded = e;
                    if (this._expanded) {
                      this.addChild(this.holder);
                    } else if (this.holder.parent) {
                      this.removeChild(this.holder);
                    }
                    this.drawSymbol();
                  }
                }
              }, {
                key: "height",
                get: function () {
                  if (this._expanded) {
                    var e = this._bgHeight;
                    for (var t = 0; t < this.holder.numChildren; t++) {
                      e += this.holder.getChildAt(t).height;
                    }
                    return e;
                  }
                  return this._bgHeight;
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
                    Object.defineProperty(e, s(r.key), r);
                  }
                })(o.prototype, h);
              }
              Object.defineProperty(o, "prototype", {
                writable: false
              });
              return o;
            }(r.B);
          }
    });
})();
