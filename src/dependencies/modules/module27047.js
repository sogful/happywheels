(() => {
    const modules = window.happywheelmodules || (window.happywheelmodules = {});
    Object.assign(modules, {
        27047(e, t, n) {
            "use strict";
        
            n.d(t, {
              us: () => x,
              yg: () => A,
              dq: () => P,
              tD: () => R,
              y8: () => B,
              kw: () => N,
              kf: () => U,
              tU: () => H
            });
            n(54554);
            n(62010);
            n(23792);
            n(36033);
            n(26099);
            n(47764);
            n(62953);
            n(45700);
            n(89572);
            n(52675);
            n(89463);
            n(2892);
            n(34782);
            n(23418);
            n(2259);
            var r = n(13497);
            var i = n(70725);
            var s = n(13362);
            var a = n(4971);
            var o = n(50869);
            var h = n(21566);
            var l = n(7151);
            var d = n(38939);
            var c = n(35057);
            function u(e) {
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
            function p(e, t) {
              p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return p(e, t);
            }
            var m = function (e) {
              function t(t, n) {
                var r;
                (r = e.call(this) || this)._initialised = false;
                r._editor = t;
                r._canvas = n;
                return r;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              p(n, r);
              var i;
              var a;
              var o = t.prototype;
              o.activate = function () {
                if (!this.activated) {
                  if (!this._initialised) {
                    this.init();
                    this._initialised = true;
                  }
                  this.window = new s.p8(false, this);
                  this.window.x = t.windowX;
                  this.window.y = t.windowY;
                  this._canvas.parent.parent.addChild(this.window);
                  this.onActivate();
                }
              };
              o.deactivate = function () {
                if (this.activated) {
                  this.onDeactivate();
                  this.closeToolWindow();
                }
              };
              o.closeToolWindow = function () {
                t.windowX = this.window.x;
                t.windowY = this.window.y;
                this.window.closeWindow();
                this.window = null;
              };
              o.onActivate = function () {};
              o.onDeactivate = function () {};
              o.resetActionVars = function (e) {};
              o.addFrameHandler = function () {};
              o.removeFrameHandler = function () {};
              o.setCurrentShape = function (e) {};
              o.resizeElements = function () {};
              o.init = function () {};
              o.die = function () {
                if (this.window) {
                  this.deactivate();
                }
              };
              o.remoteButtonPress = function () {
                if (this instanceof s.tD) {
                  this._editor.toolBar.pressButton(s.iO.POLYGON);
                } else if (this instanceof s.yg) {
                  this._editor.toolBar.pressButton(s.iO.ART);
                }
              };
              i = t;
              if (a = [{
                key: "initialised",
                get: function () {
                  return this._initialised;
                }
              }, {
                key: "canvas",
                get: function () {
                  return this._canvas;
                }
              }, {
                key: "editor",
                get: function () {
                  return this._editor;
                }
              }, {
                key: "activated",
                get: function () {
                  return !!this.window;
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
                    Object.defineProperty(e, u(r.key), r);
                  }
                })(i.prototype, a);
              }
              Object.defineProperty(i, "prototype", {
                writable: false
              });
              return i;
            }(a.kx);
            m.windowX = 54;
            m.windowY = 30;
            var f = n(53289);
            var _ = n(89346);
            var v = n(98263);
            function y(e, t) {
              if (t == null || t > e.length) {
                t = e.length;
              }
              for (var n = 0, r = Array(t); n < t; n++) {
                r[n] = e[n];
              }
              return r;
            }
            function g(e) {
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
            function w(e, t) {
              w = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return w(e, t);
            }
            var x = function (e) {
              function t(t, n) {
                var o;
                (o = e.call(this, t, n) || this).windowWidth = 130;
                o.cutoffHeight = 430;
                o.indent = 5;
                o.numShapesSelected = 0;
                o.numSpecialsSelected = 0;
                o.numJointsSelected = 0;
                o.numTriggersSelected = 0;
                o.numGroupsSelected = 0;
                o.numCharSelected = 0;
                o.helpMessage = "<u><b>Selection Tool Help:</b></u><br><br>The selection tool allows you to select objects by clicking on them, or by dragging a rectangle around them.  When an object is selected, the properties of that object will be displayed for your goddamn pleasure.<br><br>Selecting multiple objects will allow you to make changes to several objects at once.  No playa, I'm fuckin serious.  Hold <b>shift</b> when selecting to add to or remove from your current selection.<br><br>If all of the selected objects are groupable (such as non-fixed shapes), you will be able to group them to make more complex objects.  Once a group is created, you can double-click on it to enter and edit it.  Double click again on the background to exit.<br><br>You may now also double click into art and polygon shapes to edit them.<br><br><u>Keyboard Shortcuts:</u><br><br><b>up,down,left,right</b>: Move the selected object(s) around the this.stage.  Hold <b>shift</b> to move them around faster.<br><br><b>a,w,s,d</b>: Resize the height and width of the selected object(s), when allowable.  Hold <b>shift</b> to resize faster.<br><br><b>z,x</b>: Rotate the selected object(s) when allowable.  Hold <b>shift</b> to rotate faster.<br><br><b>ctrl+up,down</b>: Raise or lower the depth of the object.<br><br><b>backspace</b>: Delete the current selection.<br><br><b>ctrl+c</b>: Copy the selected object(s).<br><br><b>ctrl+v</b>: Paste the last copied objects.  Hold <b>shift</b> to paste in the same location as the original.<br><br><b>ctrl+z</b>:  Undo the last action.<br><br><b>ctrl+y</b>:  Redo what you just undid.<br><br>";
                o.helpPolyEdit = "<u><b>Polygon Editor Help:</b></u><br><br>Manually move the points of your polygon to your liking. The polygon must remain convex, so your actions will be constrained.<br><br><u>Keyboard Shortcuts:</u><br><br><b>up,down,left,right</b>: Move the selected points(s) around the this.stage.  Hold <b>shift</b> to move them around faster.<br><br><b>backspace</b>: Delete the selected points.<br><br><b>Enter</b>: After selecting a point, use Enter to insert a point between the current and next point.";
                o.helpArtEdit = "<u><b>Art Editor Help:</b></u><br><br>Manually move the points of your art shape to your liking. Double click on a point to add bezier handles for controlling the curves of your shape. To remove handles and simply use straight lines, drag handles into the selected point.<br><br><u>Keyboard Shortcuts:</u><br><br><b>up,down,left,right</b>: Move the selected points(s) around the this.stage.  Hold <b>shift</b> to move them around faster.<br><br><b>backspace</b>: Delete the selected points.<br><br><b>Enter</b>: After selecting a point, use Enter to insert a point between the current and next point.";
                o.reverseShape = function (e) {
                  var t;
                  var n;
                  if (e === undefined) {
                    e = null;
                  }
                  for (var s = o.currentSelection.length, h = 0; h < s; h++) {
                    var l = o.currentSelection[h];
                    if (l instanceof i.PV) {
                      var d = l;
                      var c = new a.bR(d.x, d.y);
                      d.reverse();
                      var u = new a.bR(d.x, d.y);
                      t = new r.OM(d, c, u);
                      if (n) {
                        n.nextAction = t;
                      }
                      n = t;
                      d.forceDirty();
                    }
                  }
                  if (n) {
                    o.dispatchEvent(new r.XP(r.XP.GENERIC, n));
                    o.updateInputValues();
                  }
                };
                o.resetScale = function (e) {
                  var t;
                  var n;
                  var s;
                  if (e === undefined) {
                    e = null;
                  }
                  for (var a = o.currentSelection.length, h = 0; h < a; h++) {
                    var l = o.currentSelection[h];
                    if (l instanceof i.PV) {
                      var d = l;
                      t = new r.cK(d, "shapeWidth", d.shapeWidth, d.defaultWidth);
                      n = new r.cK(d, "shapeHeight", d.shapeHeight, d.defaultHeight);
                      d.shapeWidth = d.defaultWidth;
                      d.shapeHeight = d.defaultHeight;
                      t.nextAction = n;
                      if (s) {
                        s.nextAction = t;
                      }
                      s = n;
                      d.forceDirty();
                    }
                  }
                  if (s) {
                    o.dispatchEvent(new r.XP(r.XP.GENERIC, s));
                    o.updateInputValues();
                  }
                };
                o.dragShapes = function (e) {
                  var t;
                  var n;
                  var i = o._canvas.mouseX - o.currMouseX;
                  var s = o._canvas.mouseY - o.currMouseY;
                  o.currMouseX = o._canvas.mouseX;
                  o.currMouseY = o._canvas.mouseY;
                  for (var h = 0; h < o.currentSelection.length; h++) {
                    var l = o.currentSelection[h];
                    if (!o.dragging) {
                      t = new r.CT(l, new a.bR(l.x, l.y));
                      if (n) {
                        t.prevAction = n;
                      }
                      n = t;
                    }
                    l.x += i;
                    l.y += s;
                    l.forceDirty();
                  }
                  o.updateInputValues();
                  if (!o.dragging) {
                    o.dispatchEvent(new r.XP(r.XP.GENERIC, t));
                    o.dragging = true;
                  }
                };
                o.createSelectBox = function (e) {
                  if (!o.selectBox) {
                    o.stage.removeEventListener(a.Cm.MOUSE_UP, o.mouseUpHandler);
                    o.stage.addEventListener(a.Cm.MOUSE_UP, o.selectContained);
                    o.selectBox = new s.wu();
                    o.currentCanvas.addChild(o.selectBox);
                    o.selectBox.x = o.currMouseX;
                    o.selectBox.y = o.currMouseY;
                    o.selectBox.mouseEnabled = false;
                  }
                  o.selectBox.adjustBg((o._canvas.mouseX - o.currMouseX) / 100, (o._canvas.mouseY - o.currMouseY) / 100);
                };
                o.selectContained = function (e) {
                  var t;
                  var n;
                  var i;
                  var s;
                  if (!e.shiftKey) {
                    t = o.deselectAll();
                  }
                  for (var h = 0; h < o._currentCanvas.shapes.numChildren; h++) {
                    if ((n = o._currentCanvas.shapes.getChildAt(h)).visible && !n.selected && n.hitTestObject(o.selectBox)) {
                      i = o.addToSelection(n);
                      if (s) {
                        i.prevAction = s;
                      }
                      s = i;
                    }
                  }
                  for (var l = 0; l < o._currentCanvas.special.numChildren; l++) {
                    if ((n = o._currentCanvas.special.getChildAt(l)).visible && !n.selected && n.hitTestObject(o.selectBox)) {
                      i = o.addToSelection(n);
                      if (s) {
                        i.prevAction = s;
                      }
                      s = i;
                    }
                  }
                  if (!o.currentCanvas.isGroupCanvas) {
                    for (var d = 0; d < o._currentCanvas.groups.numChildren; d++) {
                      var c = o._currentCanvas.groups.getChildAt(d);
                      if (c.visible && !c.selected && c.hitTestObject(o.selectBox)) {
                        i = o.addToSelection(c);
                        if (s) {
                          i.prevAction = s;
                        }
                        s = i;
                      }
                    }
                    for (var u = 0; u < o._currentCanvas.joints.numChildren; u++) {
                      if ((n = o._currentCanvas.joints.getChildAt(u)).visible && !n.selected && n.hitTestObject(o.selectBox)) {
                        i = o.addToSelection(n);
                        if (s) {
                          i.prevAction = s;
                        }
                        s = i;
                      }
                    }
                    for (var p = 0; p < o._currentCanvas.triggers.numChildren; p++) {
                      if ((n = o._currentCanvas.triggers.getChildAt(p)).visible && !n.selected && n.hitTestObject(o.selectBox)) {
                        i = o.addToSelection(n);
                        if (s) {
                          i.prevAction = s;
                        }
                        s = i;
                      }
                    }
                    if (!(n = o._currentCanvas.startPlaceHolder).selected && n.visible && n.hitTestObject(o.selectBox)) {
                      i = o.addToSelection(n);
                      if (s) {
                        i.prevAction = s;
                      }
                      s = i;
                    }
                  }
                  if (i) {
                    if (t) {
                      t.nextAction = i.firstAction;
                    }
                    o.dispatchEvent(new r.XP(r.XP.GENERIC, i));
                  } else if (t) {
                    o.dispatchEvent(new r.XP(r.XP.GENERIC, t));
                  }
                  o.setInputs();
                  if (o.selectBox && o.selectBox.parent) {
                    o.selectBox.parent.removeChild(o.selectBox);
                  }
                  o.selectBox = null;
                  o.stage.removeEventListener(a.Cm.MOUSE_UP, o.selectContained);
                  o.stage.removeEventListener(a.Cm.MOUSE_MOVE, o.createSelectBox);
                };
                o.mouseDownCanvasHandler = function (e) {
                  var t;
                  o.currMouseX = o._canvas.mouseX;
                  o.currMouseY = o._canvas.mouseY;
                  var n = e.target.userData && e.target.userData.owner ? e.target.userData.owner : e.target;
                  e.target = n;
                  if (e.target instanceof s.$w) {
                    var i;
                    var h = e.target;
                    if (h.selected) {
                      if (e.shiftKey) {
                        t = o.removeFromSelection(h);
                        o.dispatchEvent(new r.XP(r.XP.GENERIC, t));
                      }
                    } else {
                      i = e.shiftKey ? o.completeEdit() : o.deselectAll();
                      t = o.addToSelection(h);
                      if (i) {
                        t.prevAction = i;
                      }
                      o.dispatchEvent(new r.XP(r.XP.GENERIC, t));
                    }
                    o.setInputs();
                    if (o.currentSelection.length < 1) {
                      return;
                    }
                    o.stage.addEventListener(a.Cm.MOUSE_UP, o.mouseUpHandler);
                    o.stage.addEventListener(a.Cm.MOUSE_MOVE, o.dragShapes);
                  } else if (e.target == o._currentCanvas) {
                    o.stage.addEventListener(a.Cm.MOUSE_MOVE, o.createSelectBox);
                    o.stage.addEventListener(a.Cm.MOUSE_UP, o.mouseUpHandler);
                  }
                };
                o.mouseUpHandler = function (e) {
                  var t = e.target.userData && e.target.userData.owner ? e.target.userData.owner : e.target;
                  e.target = t;
                  var n = o.getSelectedSpriteUnderMouse();
                  if (e.target instanceof s.Hl && n) {
                    e.target = n;
                  }
                  if (e.target instanceof s.$w) ;else if (!e.shiftKey) {
                    var i = o.deselectAll();
                    if (i) {
                      o.dispatchEvent(new r.XP(r.XP.GENERIC, i));
                    }
                    o.setInputs();
                  }
                  if (o.selectBox && o.selectBox.parent) {
                    o.selectBox.parent.removeChild(o.selectBox);
                  }
                  o.selectBox = null;
                  o.stage.removeEventListener(a.Cm.MOUSE_UP, o.mouseUpHandler);
                  o.stage.removeEventListener(a.Cm.MOUSE_MOVE, o.dragShapes);
                  o.stage.removeEventListener(a.Cm.MOUSE_MOVE, o.createSelectBox);
                  o.stage.removeEventListener(a.Cm.MOUSE_UP, o.selectContained);
                  o.dragging = false;
                };
                o.doubleClickHandler = function (e) {
                  var t = e.target.userData && e.target.userData.owner ? e.target.userData.owner : e.target;
                  e.target = t;
                  if (e.target instanceof h.ee) {
                    var n = e.target;
                    var a = o.deselectAll();
                    var l = o.addToSelection(n);
                    if (a) {
                      l.prevAction = a;
                    }
                    n.editing = true;
                    o.dispatchEvent(new r.XP(r.XP.GENERIC, l));
                    o.setInputs();
                  } else if (e.target instanceof d.D) {
                    var c = e.target;
                    o.openGroupCanvas(c);
                  } else if (e.target instanceof s.gJ) {
                    var u = e.target;
                    o.closeGroupCanvas(u);
                  } else if (e.target instanceof h.ze) {
                    var p = e.target;
                    o.openPoser(p);
                  } else if (e.target instanceof i.PV) {
                    var m = e.target;
                    o.openVertEdit(m);
                  }
                };
                o.triggerSelectorHandler = function (e) {
                  o.dispatchEvent(new r.XP(r.XP.GENERIC, e.action));
                };
                o.triggerSelectorComplete = function (e) {
                  o.killTriggerSelector();
                  o.setInputs();
                };
                o.keyDownHandler = function (e) {
                  if (!(e.target instanceof a.A_) && !c.w.currentlyColorDropperOpen) {
                    switch (e.keyCode) {
                      case 8:
                        var t = o.deleteSelection();
                        if (t) {
                          o.dispatchEvent(new r.XP(r.XP.GENERIC, t));
                        }
                        o.setInputs();
                        break;
                      case 37:
                        o.moveSelected(-1, 0, e.shiftKey);
                        break;
                      case 38:
                        if (e.ctrlKey) {
                          o.raiseDepthSelected();
                        } else {
                          o.moveSelected(0, -1, e.shiftKey);
                        }
                        break;
                      case 39:
                        o.moveSelected(1, 0, e.shiftKey);
                        break;
                      case 40:
                        if (e.ctrlKey) {
                          o.lowerDepthSelected();
                        } else {
                          o.moveSelected(0, 1, e.shiftKey);
                        }
                        break;
                      case 65:
                        o.adjustScale(-1, 0, e.shiftKey);
                        break;
                      case 87:
                        o.adjustScale(0, 1, e.shiftKey);
                        break;
                      case 68:
                        o.adjustScale(1, 0, e.shiftKey);
                        break;
                      case 83:
                        o.adjustScale(0, -1, e.shiftKey);
                        break;
                      case 90:
                        if (!e.ctrlKey) {
                          o.adjustRotation(-1, e.shiftKey);
                        }
                        break;
                      case 88:
                        o.adjustRotation(1, e.shiftKey);
                        break;
                      case 67:
                        o.copySelected();
                        break;
                      case 86:
                        o.paste(e.shiftKey);
                        break;
                      case 71:
                        break;
                      default:
                        return;
                    }
                  }
                };
                o.groupSelected = function (e = null) {
                  var t = new d.D();
                  var n = t.build(o.currentSelection, o._canvas);
                  var i = o.deselectAll();
                  n.nextAction = i.firstAction;
                  o._canvas.addRefSprite(t);
                  var s = new r.Sl(t, o._canvas, t.parent.getChildIndex(t));
                  i.nextAction = s;
                  var a = o.addToSelection(t);
                  s.nextAction = a;
                  o.dispatchEvent(new r.XP(r.XP.GENERIC, a));
                  o.setInputs();
                };
                o.breakSelectedGroups = function (e = null) {
                  var t;
                  var n;
                  var i = [];
                  var s = [];
                  for (var a = 0; a < o.currentSelection.length; a++) {
                    s.push(o.currentSelection[a]);
                  }
                  n = t = o.deleteSelection();
                  for (var h = 0; h < s.length; h++) {
                    t = s[h].breakApart(i, o._canvas);
                    n.nextAction = t.firstAction;
                    n = t;
                  }
                  for (var l = 0; l < i.length; l++) {
                    var d = i[l];
                    t = o.addToSelection(d);
                    n.nextAction = t;
                    n = t;
                  }
                  o.setInputs();
                  o.dispatchEvent(new r.XP(r.XP.GENERIC, t));
                };
                o.poserHandler = function (e) {
                  o.dispatchEvent(new r.XP(r.XP.GENERIC, e.action));
                };
                o.closePoser = function (e = null) {
                  if (o.poser) {
                    o.poser.removeEventListener(r.XP.GENERIC, o.poserHandler);
                    o.poser.removeEventListener(l._J.POSE_COMPLETE, o.closePoser);
                    o.poser.die();
                    o.poser = null;
                    c.w.debugText.text = "";
                  }
                };
                o.vertEditHandler = function (e) {
                  o.dispatchEvent(new r.XP(r.XP.GENERIC, e.action));
                };
                o.closeVertEdit = function (e = null, t = true) {
                  if (o.vertEdit) {
                    var n;
                    var i;
                    var h = o.vertEdit.edgeShape;
                    if (t) {
                      n = o.vertEdit.deselectAll();
                      i = new r.SL(h, o);
                      if (n) {
                        n.nextAction = i;
                      }
                    }
                    o.vertEdit.removeEventListener(r.XP.GENERIC, o.vertEditHandler);
                    o.vertEdit.removeEventListener(_.er.EDIT_COMPLETE, o.closeVertEdit);
                    o.vertEdit.die();
                    o.vertEdit = null;
                    c.w.debugText.text = "";
                    if (t) {
                      var l = h.x;
                      var d = h.y;
                      h.x = l;
                      h.y = d;
                      var u = i;
                      if (h.x != l || h.y != d) {
                        u = new r.mA(h, new a.bR(l, d), new a.bR(h.x, h.y));
                        i.nextAction = u;
                      }
                      o.dispatchEvent(new r.XP(r.XP.GENERIC, u));
                    }
                  }
                  s.WJ.instance.populate(o.helpMessage);
                };
                o.convertGroupToVehicle = function (e) {
                  var t;
                  for (var n = 0; n < o.currentSelection.length; n++) {
                    var i = o.currentSelection[n];
                    var s = i.parent.getChildIndex(i);
                    var h = i.vehicleClone();
                    o._currentCanvas.addRefSpriteAt(h, s);
                    h.x = h.x;
                    h.y = h.y;
                    var l = new r.Sl(h, o._currentCanvas, s);
                    if (t) {
                      l.prevAction = t.lastAction;
                    }
                    t = l;
                    for (var d = undefined; i.joints.length > 0;) {
                      var c = i.joints[0];
                      var u = new a.bR(c.x, c.y);
                      if (c.body1 == i) {
                        c.body1 = h;
                        d = new r.cK(c, "body1", i, h, u, u);
                      } else {
                        c.body2 = h;
                        d = new r.cK(c, "body2", i, h, u, u);
                      }
                      t.nextAction = d;
                      t = d;
                    }
                    var p = o.removeFromSelection(i);
                    t.nextAction = p.firstAction;
                    var m = i.deleteSelf(o._currentCanvas);
                    p.nextAction = m.firstAction;
                    var f = o.addToSelection(h);
                    f.prevAction = m.lastAction;
                    t = f.lastAction;
                  }
                  o.setInputs();
                  o.dispatchEvent(new r.XP(r.XP.GENERIC, t));
                };
                o.convertVehicleToGroup = function (e) {
                  var t;
                  for (var n = 0; n < o.currentSelection.length; n++) {
                    var i = o.currentSelection[n];
                    var s = i.parent.getChildIndex(i);
                    var h = i.cloneAsGroup();
                    o._currentCanvas.addRefSpriteAt(h, s);
                    h.x = h.x;
                    h.y = h.y;
                    var l = new r.Sl(h, o._currentCanvas, s);
                    if (t) {
                      l.prevAction = t.lastAction;
                    }
                    t = l;
                    for (var d = undefined; i.joints.length > 0;) {
                      var c = i.joints[0];
                      var u = new a.bR(c.x, c.y);
                      if (c.body1 == i) {
                        c.body1 = h;
                        d = new r.cK(c, "body1", i, h, u, u);
                      } else {
                        c.body2 = h;
                        d = new r.cK(c, "body2", i, h, u, u);
                      }
                      t.nextAction = d;
                      t = d;
                    }
                    var p = o.removeFromSelection(i);
                    t.nextAction = p.firstAction;
                    var m = i.deleteSelf(o._currentCanvas);
                    p.nextAction = m.firstAction;
                    var f = o.addToSelection(h);
                    f.prevAction = m.lastAction;
                    t = f.lastAction;
                  }
                  o.setInputs();
                  o.dispatchEvent(new r.XP(r.XP.GENERIC, t));
                };
                o.setShapeAsHandle = function (e) {
                  var t;
                  var n;
                  for (var i = 0; i < o.currentSelection.length; i++) {
                    var s = o.currentSelection[i];
                    s.vehicleHandle = true;
                    n = new r.cK(s, "vehicleHandle", false, true);
                    if (t) {
                      t.nextAction = n;
                    }
                    t = n;
                  }
                  o.setInputs();
                  o.dispatchEvent(new r.XP(r.XP.GENERIC, n));
                };
                o.removeHandleProperty = function (e) {
                  var t;
                  var n;
                  for (var i = 0; i < o.currentSelection.length; i++) {
                    var s = o.currentSelection[i];
                    s.vehicleHandle = false;
                    n = new r.cK(s, "vehicleHandle", true, false);
                    if (t) {
                      t.nextAction = n;
                    }
                    t = n;
                  }
                  o.setInputs();
                  o.dispatchEvent(new r.XP(r.XP.GENERIC, n));
                };
                o.addNewTarget = function (e) {
                  o.beginTriggerSelector();
                };
                o.removeTarget = function (e) {
                  var t;
                  var n;
                  for (var i = 0; i < o.currentSelection.length; i++) {
                    t = o.currentSelection[i].removeLastTarget();
                    if (n) {
                      n.nextAction = t;
                    }
                    n = t;
                  }
                  o.dispatchEvent(new r.XP(r.XP.GENERIC, t));
                };
                o.inputValueChange = function (e) {
                  var t;
                  var n;
                  var i = e.inputObject;
                  var s = i.attribute;
                  var a = i.multipleKey;
                  var h = i.multipleIndex;
                  if (a) {
                    for (var l = 0; l < o.currentSelection.length; l++) {
                      if (t = o.currentSelection[l].setKeyedProperty(s, a, h, e.value)) {
                        if (n) {
                          t.firstAction.prevAction = n;
                        }
                        n = t;
                      }
                    }
                  } else {
                    for (var d = 0; d < o.currentSelection.length; d++) {
                      if (t = o.currentSelection[d].setProperty(s, e.value)) {
                        if (n) {
                          t.firstAction.prevAction = n;
                        }
                        n = t;
                      }
                    }
                  }
                  if (t) {
                    o.dispatchEvent(new r.XP(r.XP.GENERIC, t));
                  }
                  if (e.resetInputs) {
                    o.setInputs();
                  }
                };
                o.inputAddInput = function (e) {
                  var t;
                  var n;
                  var i = e.inputObject;
                  var s = i.attribute;
                  var a = i.multipleKey;
                  var h = i.multipleIndex;
                  for (var l = 0; l < o.currentSelection.length; l++) {
                    var d = o.currentSelection[l];
                    var c = d.keyedPropertyObject[s].get(a);
                    if (c.length < 10) {
                      c.push(d.triggerActionList[0]);
                      d.setAttributes();
                      t = new r.WI(d, s, a, h);
                      if (n) {
                        n.nextAction = t;
                      }
                      n = t;
                    }
                  }
                  if (e.resetInputs) {
                    o.removeInputs();
                    o.setInputs();
                  }
                  if (n) {
                    o.dispatchEvent(new r.XP(r.XP.GENERIC, n));
                  }
                };
                o.inputRemoveInput = function (e) {
                  var t;
                  var n;
                  var i;
                  var s = e.inputObject;
                  var a = s.attribute;
                  var h = s.multipleKey;
                  var l = s.multipleIndex;
                  for (var d = 0; d < o.currentSelection.length; d++) {
                    var c = o.currentSelection[d];
                    var u = {};
                    var p = c.keyedPropertyObject[a].get(h);
                    if (p.length > 1) {
                      u[a] = p[l];
                      p.splice(l, 1);
                      for (var m = 0; m < c.triggerActionList.length; m++) {
                        if (t = c.triggerActionListProperties[m]) {
                          for (var f = 0; f < t.length; f++) {
                            var _ = t[f];
                            var v = c.keyedPropertyObject[_];
                            if (v) {
                              var y = v.get(h);
                              if (y) {
                                u[_] = y[l];
                                y.splice(l, 1);
                              }
                            }
                          }
                        }
                      }
                      n = new r.fD(c, a, h, l, u);
                      if (i) {
                        i.nextAction = n;
                      }
                      i = n;
                      c.setAttributes();
                    }
                  }
                  if (e.resetInputs) {
                    o.removeInputs();
                    o.setInputs();
                  }
                  if (i) {
                    o.dispatchEvent(new r.XP(r.XP.GENERIC, i));
                  }
                };
                o.scrollInputs = function (e) {
                  var t = o.cutoffHeight + 5 - o.inputMask.y;
                  var n = o.inputHolder.height;
                  var r = Math.round(o.holderY - (n - t) - 5);
                  if (o.mouseX > 0 && o.mouseX < o.windowWidth) {
                    if (o.mouseY >= o.cutoffHeight - 30 && o.mouseY <= o.cutoffHeight + 5) {
                      o.inputHolder.y -= 10;
                      if (o.inputHolder.y < r) {
                        o.inputHolder.y = r;
                      }
                    } else if (o.mouseY > 0 && o.mouseY < 35) {
                      o.inputHolder.y += 10;
                      if (o.inputHolder.y > o.holderY) {
                        o.inputHolder.y = o.holderY;
                      }
                    }
                  }
                  o.scrollUpSprite.visible = o.inputHolder.y != o.holderY;
                  o.scrollDownSprite.visible = o.inputHolder.y != r;
                };
                o.buildView();
                o._currentCanvas = n;
                return o;
              }
              var n;
              var u;
              u = e;
              (n = t).prototype = Object.create(u.prototype);
              n.prototype.constructor = n;
              w(n, u);
              var p;
              var m;
              var x = t.prototype;
              x.buildView = function () {
                var e = new a.lk("HelveticaNeueLT Std", 11, 16777215, null, null, null, null, null, a.MA.LEFT);
                this.labelText = new a.A_();
                this.addChild(this.labelText);
                this.labelText.defaultTextFormat = e;
                this.labelText.x = 4;
              };
              x.init = function () {
                this.inputs = [];
                this.buttons = [];
                this.currentAttributes = [];
                this.currentFunctions = [];
                this.copiedSelection = [];
                this.currentSelection = [];
                this.inputHolder = new a.kx();
                this.addChild(this.inputHolder);
                this.inputMask = new a.kx();
                this.addChild(this.inputMask);
                this.inputMask.graphics.beginFill(16711680);
                this.inputMask.graphics.drawRect(0, 0, this.windowWidth, 100);
                this.inputMask.visible = false;
                this.inputHolder.y = this.inputMask.y = this.holderY = this.labelText.y + Math.ceil(this.labelText.height);
              };
              x.onActivate = function () {
                e.prototype.activate.call(this);
                this.dragging = false;
                this.labelText.text = "nothing selected";
                this.window.minWidth = this.windowWidth;
                this.window.minHeight = 50;
                this.window.resize();
                s.WJ.instance.populate(this.helpMessage);
                this.stage.addEventListener(a.Cm.MOUSE_DOWN, this.mouseDownCanvasHandler);
                this.stage.addEventListener(a.Cm.DOUBLE_CLICK, this.doubleClickHandler);
                this.stage.addEventListener(a.kV.KEY_DOWN, this.keyDownHandler);
                if (this.currentSelection.length > 0) {
                  this.setInputs();
                }
              };
              x.onDeactivate = function () {
                this.killTriggerSelector(false);
                this.closePoser();
                var e = this.deselectAll();
                if (e) {
                  this.dispatchEvent(new r.XP(r.XP.GENERIC, e));
                }
                for (var t in this.inputs) {
                  if (this.inputs[t] instanceof o.AN) {
                    this.inputs[t].closeColorSelector();
                  }
                }
                this.stage.removeEventListener(a.Cm.MOUSE_DOWN, this.mouseDownCanvasHandler);
                this.stage.removeEventListener(a.Cm.DOUBLE_CLICK, this.doubleClickHandler);
                this.stage.removeEventListener(a.Cm.MOUSE_UP, this.mouseUpHandler);
                this.stage.removeEventListener(a.Cm.MOUSE_UP, this.selectContained);
                this.stage.removeEventListener(a.Cm.MOUSE_MOVE, this.createSelectBox);
                this.stage.removeEventListener(a.kV.KEY_DOWN, this.keyDownHandler);
                this.stage.removeEventListener(a.Cm.MOUSE_MOVE, this.dragShapes);
                this.disableScrolling();
                if (this.selectBox) {
                  this._currentCanvas.removeChild(this.selectBox);
                  this.selectBox = null;
                }
              };
              x.deactivateKeepSelection = function () {
                this.killTriggerSelector(false);
                this.closePoser();
                for (var e in this.inputs) {
                  if (this.inputs[e] instanceof o.AN) {
                    this.inputs[e].closeColorSelector();
                  }
                }
                this.stage.removeEventListener(a.Cm.MOUSE_DOWN, this.mouseDownCanvasHandler);
                this.stage.removeEventListener(a.Cm.DOUBLE_CLICK, this.doubleClickHandler);
                this.stage.removeEventListener(a.Cm.MOUSE_UP, this.mouseUpHandler);
                this.stage.removeEventListener(a.Cm.MOUSE_UP, this.selectContained);
                this.stage.removeEventListener(a.Cm.MOUSE_MOVE, this.createSelectBox);
                this.stage.removeEventListener(a.kV.KEY_DOWN, this.keyDownHandler);
                this.stage.removeEventListener(a.Cm.MOUSE_MOVE, this.dragShapes);
                this.disableScrolling();
                if (this.selectBox) {
                  this._currentCanvas.removeChild(this.selectBox);
                  this.selectBox = null;
                }
                this.closeToolWindow();
              };
              x.resetActionVars = function (e) {
                switch (e) {
                  case r.XP.TRANSLATE:
                    this.scaling = false;
                    this.rotating = false;
                    break;
                  case r.XP.SCALE:
                    this.translating = false;
                    this.rotating = false;
                    break;
                  case r.XP.ROTATE:
                    this.scaling = false;
                    this.translating = false;
                    break;
                  default:
                    this.translating = false;
                    this.scaling = false;
                    this.rotating = false;
                }
                if (this.vertEdit) {
                  this.vertEdit.translating = false;
                }
              };
              x.getSelectedSpriteUnderMouse = function () {
                for (var e, t = null, n = function (e) {
                    var t = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
                    if (t) {
                      return (t = t.call(e)).next.bind(t);
                    }
                    if (Array.isArray(e) || (t = function (e, t) {
                      if (e) {
                        if (typeof e == "string") {
                          return y(e, t);
                        }
                        var n = {}.toString.call(e).slice(8, -1);
                        if (n === "Object" && e.constructor) {
                          n = e.constructor.name;
                        }
                        if (n === "Map" || n === "Set") {
                          return Array.from(e);
                        } else if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
                          return y(e, t);
                        } else {
                          return undefined;
                        }
                      }
                    }(e))) {
                      if (t) {
                        e = t;
                      }
                      var n = 0;
                      return function () {
                        if (n >= e.length) {
                          return {
                            done: true
                          };
                        } else {
                          return {
                            done: false,
                            value: e[n++]
                          };
                        }
                      };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                  }(this.currentSelection); !(e = n()).done;) {
                  var r = e.value;
                  if (r.hitTestPoint(a.BI.main.mouseX, a.BI.main.mouseY)) {
                    t = r;
                    break;
                  }
                }
                return t;
              };
              x.addToSelection = function (e) {
                e.selected = true;
                var t;
                var n;
                var a;
                var o;
                var l = e.parent.getChildIndex(e);
                if (e instanceof i.HQ) {
                  if (this.numShapesSelected > 0) {
                    t = 0;
                    n = a = this.numShapesSelected;
                    for (var c = t; c < n; c++) {
                      if ((o = this.currentSelection[c]).parent.getChildIndex(o) > l) {
                        a = c;
                        c = 100000;
                      }
                    }
                  } else {
                    a = 0;
                  }
                  this.currentSelection.splice(a, 0, e);
                  this.numShapesSelected += 1;
                } else if (e instanceof h._c) {
                  if (this.numSpecialsSelected > 0) {
                    t = this.numShapesSelected;
                    n = a = this.numShapesSelected + this.numSpecialsSelected;
                    for (var u = t; u < n; u++) {
                      if ((o = this.currentSelection[u]).parent.getChildIndex(o) > l) {
                        a = u;
                        u = 100000;
                      }
                    }
                  } else {
                    a = this.numShapesSelected;
                  }
                  this.currentSelection.splice(a, 0, e);
                  this.numSpecialsSelected += 1;
                } else if (e instanceof d.D) {
                  if (this.numGroupsSelected > 0) {
                    t = this.numShapesSelected + this.numSpecialsSelected;
                    n = a = this.numShapesSelected + this.numSpecialsSelected + this.numGroupsSelected;
                    for (var p = t; p < n; p++) {
                      if ((o = this.currentSelection[p]).parent.getChildIndex(o) > l) {
                        a = p;
                        p = 100000;
                      }
                    }
                  } else {
                    a = this.numShapesSelected + this.numSpecialsSelected;
                  }
                  this.currentSelection.splice(a, 0, e);
                  this.numGroupsSelected += 1;
                } else if (e instanceof s.Sv) {
                  if (this.numJointsSelected > 0) {
                    t = this.numShapesSelected + this.numSpecialsSelected + this.numGroupsSelected;
                    n = a = this.numShapesSelected + this.numSpecialsSelected + this.numGroupsSelected + this.numJointsSelected;
                    for (var m = t; m < n; m++) {
                      if ((o = this.currentSelection[m]).parent.getChildIndex(o) > l) {
                        a = m;
                        m = 100000;
                      }
                    }
                  } else {
                    a = this.numShapesSelected + this.numSpecialsSelected + this.numGroupsSelected;
                  }
                  this.currentSelection.splice(a, 0, e);
                  this.numJointsSelected += 1;
                } else if (e instanceof s.Qs) {
                  if (this.numTriggersSelected > 0) {
                    t = this.numShapesSelected + this.numSpecialsSelected + this.numGroupsSelected + this.numJointsSelected;
                    n = a = this.numShapesSelected + this.numSpecialsSelected + this.numGroupsSelected + this.numJointsSelected + this.numTriggersSelected;
                    for (var f = t; f < n; f++) {
                      if ((o = this.currentSelection[f]).parent.getChildIndex(o) > l) {
                        a = f;
                        f = 100000;
                      }
                    }
                  } else {
                    a = this.numShapesSelected + this.numSpecialsSelected + this.numGroupsSelected + this.numJointsSelected;
                  }
                  this.currentSelection.splice(a, 0, e);
                  this.numTriggersSelected += 1;
                } else {
                  if (!(e instanceof h.ak)) {
                    throw new Error("What the fu");
                  }
                  a = this.currentSelection.length;
                  this.currentSelection.splice(a, 0, e);
                  this.numCharSelected += 1;
                }
                return new r.jw(e, this.currentSelection, a, this);
              };
              x.removeFromSelection = function (e) {
                var t = this.currentSelection.indexOf(e);
                var n = null;
                if (e instanceof i.HQ) {
                  this.numShapesSelected -= 1;
                } else if (e instanceof h._c) {
                  this.numSpecialsSelected -= 1;
                  if (e instanceof h.ee) {
                    var a = e;
                    if (a.editing) {
                      n = new r.cK(a, "caption", a.caption, a.currentText);
                      a.caption = a.currentText;
                      a.editing = false;
                    }
                  }
                } else if (e instanceof d.D) {
                  this.numGroupsSelected -= 1;
                } else if (e instanceof s.Sv) {
                  this.numJointsSelected -= 1;
                } else if (e instanceof s.Qs) {
                  this.numTriggersSelected -= 1;
                } else {
                  if (!(e instanceof h.ak)) {
                    throw new Error("tried to Deselect this... what instanceof it");
                  }
                  this.numCharSelected -= 1;
                }
                e.selected = false;
                this.currentSelection.splice(t, 1);
                var o = new r.oD(e, this.currentSelection, t, this);
                if (n) {
                  o.prevAction = n;
                }
                return o;
              };
              x.deselectAll = function () {
                var e;
                var t = null;
                for (var n = this.currentSelection.length - 1; n > -1; n--) {
                  var r = this.currentSelection[n];
                  t = this.removeFromSelection(r);
                  if (e) {
                    e.nextAction = t.firstAction;
                  }
                  e = t;
                }
                this.setInputs();
                return t;
              };
              x.deleteSelection = function () {
                if (this.currentSelection.length == 0) {
                  return null;
                }
                var e;
                var t;
                var n;
                for (var r = this.currentSelection.length - 1; r > -1; r--) {
                  var i = this.currentSelection[r];
                  t = this.removeFromSelection(i);
                  if (n) {
                    n.nextAction = t.firstAction;
                  }
                  n = t;
                  if (i.deletable && (e = i.deleteSelf(this._currentCanvas))) {
                    t.nextAction = e.firstAction;
                    n = e;
                  }
                }
                this._canvas.relabelTriggers();
                this.currentSelection.splice(0, this.currentSelection.length);
                return n;
              };
              x.editSelectText = function (e) {
                var t = this.addToSelection(e);
                e.editing = true;
                e.selectAllText();
                this.setInputs();
                this.dispatchEvent(new r.XP(r.XP.GENERIC, t));
              };
              x.completeEdit = function () {
                for (var e = this.currentSelection.length - 1; e > -1; e--) {
                  if (this.currentSelection[e] instanceof h.ee) {
                    var t = this.currentSelection[e];
                    var n = new r.cK(t, "caption", t.caption, t.currentText);
                    t.caption = t.currentText;
                    t.editing = false;
                    return n;
                  }
                }
                return null;
              };
              x.beginTriggerSelector = function (e = null) {
                this.stage.removeEventListener(a.Cm.MOUSE_DOWN, this.mouseDownCanvasHandler);
                this.stage.removeEventListener(a.Cm.DOUBLE_CLICK, this.doubleClickHandler);
                this.stage.removeEventListener(a.Cm.MOUSE_UP, this.mouseUpHandler);
                this.stage.removeEventListener(a.Cm.MOUSE_UP, this.selectContained);
                this.stage.removeEventListener(a.Cm.MOUSE_MOVE, this.createSelectBox);
                this.stage.removeEventListener(a.kV.KEY_DOWN, this.keyDownHandler);
                this.stage.removeEventListener(a.Cm.MOUSE_MOVE, this.dragShapes);
                if (e) {
                  var t = this.addToSelection(e);
                  this.dispatchEvent(new r.XP(r.XP.GENERIC, t));
                }
                for (var n = 0; n < this.currentSelection.length; n++) {
                  this.currentSelection[n].addingTargets = true;
                }
                this.setInputs();
                this.trigSelector = new f.E(this.currentSelection, this.canvas);
                this.trigSelector.addEventListener(r.XP.GENERIC, this.triggerSelectorHandler);
                this.trigSelector.addEventListener(f.E.SELECT_COMPLETE, this.triggerSelectorComplete);
              };
              x.killTriggerSelector = function (e = true) {
                if (this.trigSelector) {
                  this.trigSelector.removeEventListener(r.XP.GENERIC, this.triggerSelectorHandler);
                  this.trigSelector.removeEventListener(f.E.SELECT_COMPLETE, this.triggerSelectorComplete);
                  this.trigSelector.die();
                  this.trigSelector = null;
                  for (var t = 0; t < this.currentSelection.length; t++) {
                    this.currentSelection[t].addingTargets = false;
                  }
                  if (e) {
                    this.stage.addEventListener(a.Cm.MOUSE_DOWN, this.mouseDownCanvasHandler);
                    this.stage.addEventListener(a.Cm.DOUBLE_CLICK, this.doubleClickHandler);
                    this.stage.addEventListener(a.kV.KEY_DOWN, this.keyDownHandler);
                  }
                }
              };
              x.openGroupCanvas = function (e) {
                var t = this.deselectAll();
                var n = e.parent.getChildIndex(e);
                this._canvas.removeRefSprite(e);
                var i = new r.ob(e, this._canvas, n);
                t.nextAction = i;
                var a = new s.gJ(e, this._canvas, n);
                this._canvas.parent.addChild(a);
                var o = new r.wC(a, a.parent, this);
                o.prevAction = i;
                var h = e.breakApart([], a);
                o.nextAction = h.firstAction;
                this.currentCanvas = a;
                this.dispatchEvent(new r.XP(r.XP.GENERIC, h));
              };
              x.closeGroupCanvas = function (e) {
                var t;
                var n = e.refGroup;
                var i = [];
                for (var s = 0; s < e.shapes.numChildren; s++) {
                  t = e.shapes.getChildAt(s);
                  i.push(t);
                }
                for (var a = 0; a < e.special.numChildren; a++) {
                  t = e.special.getChildAt(a);
                  i.push(t);
                }
                var o = n.rebuild(i, e, false);
                var h = new r.Ky(e, e.parent, this);
                e.parent.removeChild(e);
                this.currentCanvas = this._canvas;
                var l;
                var d = new r.Sl(n, this._canvas, e.groupIndex);
                this._canvas.addRefSpriteAt(n, e.groupIndex);
                var u = this.addToSelection(n);
                if (o) {
                  o.nextAction = h;
                  h.nextAction = d;
                  d.nextAction = u;
                  l = u;
                } else {
                  var p = this.deleteSelection();
                  h.nextAction = d;
                  d.nextAction = u;
                  u.nextAction = p.firstAction;
                  l = p;
                }
                this.dispatchEvent(new r.XP(r.XP.GENERIC, l));
                this.setInputs();
                c.w.debugText.text = "";
              };
              x.openPoser = function (e) {
                var t = this.deselectAll();
                this.poser = new l._J(e);
                this._canvas.parent.addChild(this.poser);
                this.poser.addEventListener(r.XP.GENERIC, this.poserHandler);
                this.poser.addEventListener(l._J.POSE_COMPLETE, this.closePoser);
                this.dispatchEvent(new r.XP(r.XP.GENERIC, t));
              };
              x.openVertEdit = function (e, t) {
                var n;
                var a;
                if (t === undefined) {
                  t = true;
                }
                if (t) {
                  n = this.deselectAll();
                  a = new r.c$(e, this);
                  if (n) {
                    n.nextAction = a;
                  }
                }
                this.vertEdit = new _.er(e, this._currentCanvas);
                this._canvas.parent.addChild(this.vertEdit);
                this.vertEdit.addEventListener(r.XP.GENERIC, this.vertEditHandler);
                this.vertEdit.addEventListener(_.er.EDIT_COMPLETE, this.closeVertEdit);
                if (t) {
                  this.dispatchEvent(new r.XP(r.XP.GENERIC, a));
                }
                if (e instanceof i.Ps) {
                  s.WJ.instance.populate(this.helpArtEdit);
                } else {
                  s.WJ.instance.populate(this.helpPolyEdit);
                }
              };
              x.vertEditOpen = function () {
                return !!this.vertEdit;
              };
              x.resizeElements = function () {
                if (this.vertEdit) {
                  this.vertEdit.resizeVerts();
                }
              };
              x.copySelected = function () {
                if (this.currentSelection.length != 0) {
                  this.copiedSelection = [];
                  for (var e = 0; e < this.currentSelection.length; e++) {
                    var t = this.currentSelection[e];
                    var n = null;
                    if (t.cloneable && (n = t.clone()) instanceof s.Sv) {
                      var r = t;
                      var i = n;
                      if (r.body1) {
                        var a = this.currentSelection.indexOf(r.body1);
                        i.body1 = a > -1 ? this.copiedSelection[a] : r.body1;
                      }
                      if (r.body2) {
                        var o = this.currentSelection.indexOf(r.body2);
                        i.body2 = o > -1 ? this.copiedSelection[o] : r.body2;
                      }
                      if (!i.body1 && !i.body2) {
                        n = null;
                      }
                    }
                    this.copiedSelection.push(n);
                  }
                  for (var h = 0; h < this.currentSelection.length; h++) {
                    var l = this.currentSelection[h];
                    var d = this.copiedSelection[h];
                    if (l instanceof s.Qs && d) {
                      var c = l;
                      var u = d;
                      var p = c.targets;
                      var m = u.cloneTargets;
                      for (var f = p.length, _ = 0; _ < f; _++) {
                        var v = p[_];
                        var y = this.currentSelection.indexOf(v);
                        var g = y > -1 ? this.copiedSelection[y] : v;
                        m[_] = g;
                        for (var w in g.keyedPropertyObject) {
                          var x = g.keyedPropertyObject[w];
                          if (x && x.get(c)) {
                            for (var b = x.get(c), T = [], A = 0; A < b.length; A++) {
                              T.push(b[A]);
                            }
                            x.set(u, T);
                          }
                        }
                      }
                    }
                  }
                }
              };
              x.paste = function (e = false) {
                if (this.copiedSelection.length != 0) {
                  var t;
                  var n;
                  var a;
                  var o = this.deselectAll();
                  if (this._currentCanvas instanceof s.gJ) {
                    var l = this._currentCanvas;
                    for (var c = 0; c < this.copiedSelection.length; c++) {
                      if (this.copiedSelection[c]) {
                        var u = this.copiedSelection[c].clone();
                        if ((u instanceof i.HQ || u instanceof h._c) && u.groupable) {
                          this._currentCanvas.addRefSprite(u);
                          u.x = u.x;
                          u.y = u.y;
                          u.inGroup = true;
                          u.group = l.refGroup;
                          u.setFilters();
                          n = new r.Sl(u, this._currentCanvas, u.parent.getChildIndex(u));
                          t = this.addToSelection(u);
                          n.nextAction = t;
                          if (o) {
                            o.nextAction = n;
                          }
                          o = t;
                        }
                      }
                    }
                  } else {
                    for (var p = 0; p < this.copiedSelection.length; p++) {
                      if (this.copiedSelection[p]) {
                        var m = this.copiedSelection[p];
                        var f = m.clone();
                        if (f instanceof i.HQ || f instanceof h._c || f instanceof d.D || f instanceof s.Qs) {
                          this._currentCanvas.addRefSprite(f);
                          f.x = f.x;
                          f.y = f.y;
                          n = new r.Sl(f, this._currentCanvas, f.parent.getChildIndex(f));
                          t = this.addToSelection(f);
                          n.nextAction = t;
                          if (o) {
                            o.nextAction = n;
                          }
                          o = t;
                        } else {
                          if (!(f instanceof s.Sv)) {
                            throw new Error("clone instanceof unknown type or null");
                          }
                          this._currentCanvas.addRefSprite(f);
                          f.x = f.x;
                          f.y = f.y;
                          t = this.addToSelection(f);
                          (n = new r.Sl(f, this._currentCanvas, f.parent.getChildIndex(f))).nextAction = t;
                          if (o) {
                            o.nextAction = n;
                          }
                          o = t;
                          var _ = m;
                          var v = f;
                          if (_.body1) {
                            var y = this.copiedSelection.indexOf(_.body1);
                            var g = y > -1 ? this.currentSelection[y] : _.body1;
                            v.body1 = g;
                            a = new r.cK(v, "body1", null, g);
                            o.nextAction = a;
                            o = a;
                          }
                          if (_.body2) {
                            var w = this.copiedSelection.indexOf(_.body2);
                            var x = w > -1 ? this.currentSelection[w] : _.body2;
                            v.body2 = x;
                            a = new r.cK(v, "body2", null, x);
                            o.nextAction = a;
                            o = a;
                          }
                          v.x = v.x;
                        }
                      }
                    }
                    for (var b = 0; b < this.copiedSelection.length; b++) {
                      if (this.copiedSelection[b]) {
                        var T = this.copiedSelection[b];
                        var A = this.currentSelection[b];
                        if (T instanceof s.Qs) {
                          var C = T;
                          var S = A;
                          var E = S.parent.getChildIndex(S);
                          S.setNumLabel(E + 1);
                          var O = C.cloneTargets;
                          for (var k = O.length, P = 0; P < k; P++) {
                            var M = O[P];
                            var R = this.copiedSelection.indexOf(M);
                            var I = R > -1 ? this.currentSelection[R] : M;
                            var L = S.addTarget(I);
                            o.nextAction = L;
                            o = L;
                            for (var j in I.keyedPropertyObject) {
                              var B = I.keyedPropertyObject[j];
                              if (B && B.get(C)) {
                                B.set(S, B.get(C));
                              }
                            }
                            I.setAttributes();
                          }
                          S.x = S.x;
                        }
                      }
                    }
                  }
                  this.setInputs();
                  if (o) {
                    this.dispatchEvent(new r.XP(r.XP.GENERIC, o));
                  }
                  if (!e) {
                    this.centerSelected();
                  }
                  this.editor.cullObjects();
                }
              };
              x.centerSelected = function () {
                if (this.currentSelection.length != 0) {
                  var e = this.currentSelection[0];
                  var t = e.getBounds(this._currentCanvas);
                  for (var n = 1; n < this.currentSelection.length; n++) {
                    e = this.currentSelection[n];
                    t = t.union(e.getBounds(this._currentCanvas));
                  }
                  var r = new a.bR(this.stage.stageWidth / 2, this.stage.stageHeight / 2);
                  r = this.stage.localToGlobalUnpatched(r);
                  var i = (r = this._currentCanvas.globalToLocal(r)).x - (t.x + t.width / 2);
                  var s = r.y - (t.y + t.height / 2);
                  for (var o = 0; o < this.currentSelection.length; o++) {
                    (e = this.currentSelection[o]).x += i;
                    e.y += s;
                  }
                }
              };
              x.moveSelected = function (e, t, n) {
                if (!this.dragging && this.currentSelection.length != 0) {
                  var i;
                  var s;
                  if (n) {
                    e *= 10;
                    t *= 10;
                  }
                  e *= 1 / this._canvas.parent.scaleX;
                  t *= 1 / this._canvas.parent.scaleY;
                  for (var o = 0; o < this.currentSelection.length; o++) {
                    var h = this.currentSelection[o];
                    if (!this.translating) {
                      i = new r.CT(h, new a.bR(h.x, h.y));
                      if (s) {
                        i.prevAction = s;
                      }
                      s = i;
                    }
                    h.x += e;
                    h.y += t;
                  }
                  this.updateInputValues();
                  if (!this.translating && s) {
                    this.dispatchEvent(new r.XP(r.XP.TRANSLATE, i));
                    this.translating = true;
                  }
                }
              };
              x.raiseDepthSelected = function () {
                if (!this.dragging && this.currentSelection.length != 0) {
                  var e;
                  var t;
                  var n;
                  var i;
                  var a;
                  var o;
                  for (var h = this.currentSelection.length - 1; h > -1; h--) {
                    var l = this.currentSelection[h];
                    var d = l.parent;
                    if (l instanceof s.Qs) {
                      o = true;
                    }
                    if (d != n) {
                      i = 10000000;
                      n = d;
                      a = d.numChildren;
                    }
                    var c = d.getChildIndex(l);
                    var u = c + 1;
                    if (u < a && u < i) {
                      d.addChildAt(l, u);
                      e = new r.A9(l, d, u, c);
                      if (t) {
                        t.nextAction = e;
                      }
                      t = e;
                      i = u;
                    } else {
                      i = c;
                    }
                  }
                  if (o) {
                    this._canvas.relabelTriggers();
                  }
                  if (e) {
                    this.dispatchEvent(new r.XP(r.XP.DEPTH, e));
                  }
                }
              };
              x.lowerDepthSelected = function () {
                if (!this.dragging && this.currentSelection.length != 0) {
                  var e;
                  var t;
                  var n;
                  var i;
                  var a;
                  for (var o = 0; o < this.currentSelection.length; o++) {
                    var h = this.currentSelection[o];
                    if (h instanceof s.Qs) {
                      a = true;
                    }
                    var l = h.parent;
                    if (l != n) {
                      i = -1;
                      n = l;
                    }
                    var d = l.getChildIndex(h);
                    var c = d - 1;
                    if (c < d && c > i) {
                      l.addChildAt(h, c);
                      e = new r.A9(h, l, c, d);
                      if (t) {
                        t.nextAction = e;
                      }
                      t = e;
                      i = c;
                    } else {
                      i = d;
                    }
                  }
                  if (a) {
                    this._canvas.relabelTriggers();
                  }
                  if (e) {
                    this.dispatchEvent(new r.XP(r.XP.DEPTH, e));
                  }
                }
              };
              x.adjustScale = function (e, t, n) {
                if (this.currentSelection.length != 0) {
                  var i;
                  var s;
                  var o;
                  if (n) {
                    e *= 10;
                    t *= 10;
                  }
                  for (var h = 0; h < this.currentSelection.length; h++) {
                    var l = this.currentSelection[h];
                    if (l.scalable) {
                      if (!this.scaling) {
                        s = new r.CT(l, new a.bR(l.x, l.y));
                        i = new r.Xc(l, l.scaleX, l.scaleY);
                        s.nextAction = i;
                        if (o) {
                          s.prevAction = o;
                        }
                        o = i;
                      }
                      l.shapeWidth += e;
                      l.shapeHeight += t;
                    }
                  }
                  this.updateInputValues();
                  if (!this.scaling && o) {
                    this.dispatchEvent(new r.XP(r.XP.SCALE, i));
                    this.scaling = true;
                  }
                }
              };
              x.adjustRotation = function (e, t) {
                if (this.currentSelection.length != 0) {
                  var n;
                  var i;
                  var s;
                  if (t) {
                    e *= 10;
                  }
                  for (var o = 0; o < this.currentSelection.length; o++) {
                    var h = this.currentSelection[o];
                    if (h.rotatable) {
                      if (!this.rotating) {
                        i = new r.CT(h, new a.bR(h.x, h.y));
                        n = new r.Er(h, h.angle);
                        i.nextAction = n;
                        if (s) {
                          i.prevAction = s;
                        }
                        s = n;
                      }
                      h.angle += e;
                    }
                  }
                  this.updateInputValues();
                  if (!this.rotating && s) {
                    this.dispatchEvent(new r.XP(r.XP.ROTATE, n));
                    this.rotating = true;
                  }
                }
              };
              x.setInputs = function () {
                var e = this.currentSelection.length;
                if (e == 0) {
                  this.removeInputs();
                  this.labelText.text = "nothing selected";
                  this.inputMask.height = 0;
                  this.disableScrolling();
                  this.window.setDimensions(this.windowWidth, this.height + 5);
                  return;
                }
                var t;
                var n = this.currentAttributes;
                for (var r = this.currentSelection[0], i = r.name, a = true, h = [], l = 0; l < r.attributes.length; l++) {
                  t = r.attributes[l];
                  h.push(t);
                }
                for (var d = 1; d < e; d++) {
                  if ((r = this.currentSelection[d]).name != i) {
                    a = false;
                  }
                  for (var c = 0; c < h.length; c++) {
                    if (typeof (t = h[c]) == "string") {
                      if (r.attributes.indexOf(t) < 0) {
                        h.splice(c, 1);
                        c -= 1;
                      }
                    } else {
                      var u = t[0];
                      var p = t[1];
                      var m = t[2];
                      var f = false;
                      for (var _ = 0; _ < r.attributes.length; _++) {
                        if (r.attributes[_] instanceof Array) {
                          var v = r.attributes[_];
                          if (v[0] == u && v[1] == p && v[2] == m) {
                            f = true;
                          }
                        }
                      }
                      if (!f) {
                        h.splice(c, 1);
                        c -= 1;
                      }
                    }
                  }
                }
                r = this.currentSelection[0];
                if (a) {
                  var y = e > 1 ? "s" : "";
                  this.labelText.text = String(i) + y;
                } else {
                  this.labelText.text = "multiple objects";
                }
                var g = n.length;
                for (var w = 0; w < n.length; w++) {
                  var x = h[w];
                  var b = n[w];
                  if (typeof x == "string" && typeof b == "string") {
                    if (b != x) {
                      g = w;
                      w = n.length;
                    }
                  } else if (!(x instanceof Array) || !(b instanceof Array) || x[0] != b[0] || x[1] != b[1] || x[2] != b[2]) {
                    g = 1;
                    w = n.length;
                  }
                }
                this.removeInputs(g);
                var T;
                var A = 0;
                if (g > 0) {
                  var C = this.inputs[this.inputs.length - 1];
                  A = C.y + C.height * 1.25;
                  if (C.childInputs) {
                    for (var S = 0; S < C.childInputs.length; S++) {
                      A += C.childInputs[S].height * 1.25;
                    }
                  }
                }
                this.currentAttributes = h;
                for (var E = g; E < this.currentAttributes.length; E++) {
                  var O = this.currentAttributes[E];
                  (T = this.currentAttributes[E] instanceof Array ? s.Ej.buildKeyedInput(O[0], O[1], O[2], r) : s.Ej.buildInput(O)).y = A;
                  T.x = this.indent;
                  this.inputHolder.addChild(T);
                  T.addEventListener(o.ON.VALUE_CHANGE, this.inputValueChange);
                  if (T.expandable) {
                    T.addEventListener(o.ON.ADD_INPUT, this.inputAddInput);
                    T.addEventListener(o.ON.REMOVE_INPUT, this.inputRemoveInput);
                  }
                  this.inputs.push(T);
                  A += T.height * 1.25;
                  if (T.childInputs) {
                    for (var k = 0; k < T.childInputs.length; k++) {
                      var P = T.childInputs[k];
                      P.y = A;
                      P.x = this.indent;
                      this.inputHolder.addChild(P);
                      A += P.height * 1.25;
                    }
                  }
                }
                this.updateInputValues();
                this.setButtons();
                if (this.inputHolder.height > this.cutoffHeight) {
                  this.inputMask.height = this.cutoffHeight + 5 - this.inputMask.y;
                  this.window.setDimensions(this.windowWidth, this.cutoffHeight + 5);
                  this.enableScrolling();
                } else {
                  this.inputMask.height = this.inputHolder.height;
                  this.disableScrolling();
                  this.inputHolder.y = this.holderY;
                  this.window.setDimensions(this.windowWidth, this.holderY + this.inputMask.height + 5);
                }
                this.updateActualInputMask();
              };
              x.setButtons = function () {
                var e;
                var t = this.currentSelection.length;
                for (var n = this.currentSelection[0], r = [], i = 0; i < n.functions.length; i++) {
                  e = n.functions[i];
                  r.push(e);
                }
                for (var o = 1; o < t; o++) {
                  n = this.currentSelection[o];
                  for (var h = 0; h < r.length; h++) {
                    e = r[h];
                    if (n.functions.indexOf(e) < 0) {
                      r.splice(h, 1);
                      h -= 1;
                    }
                  }
                }
                var l = Math.ceil(this.inputHolder.height) + 5;
                this.currentFunctions = r;
                for (var d = 0; d < this.currentFunctions.length; d++) {
                  var c = this.currentFunctions[d];
                  var u = s.ON.buildButton(c);
                  u.y = l;
                  u.x = this.indent;
                  this.inputHolder.addChild(u);
                  u.addEventListener(a.Cm.MOUSE_UP, this[u.functionString], false, 0, true);
                  this.buttons.push(u);
                  l += Math.ceil(u.height) + 5;
                }
                this.updateActualInputMask();
              };
              x.updateInputValues = function () {
                for (var e = 0; e < this.inputs.length; e++) {
                  var t = this.inputs[e];
                  this.updateInput(t);
                }
                this.editor.cullObjects();
              };
              x.updateInput = function (e) {
                var t;
                var n = e.attribute;
                var r = e.multipleKey;
                var i = e.multipleIndex;
                var s = false;
                if (r) {
                  var a = this.currentSelection[0];
                  var o = a.keyedPropertyObject[n];
                  o ||= a.keyedPropertyObject[n] = new Map();
                  if ((t = o.get(r)[i]) !== 0 && !t) {
                    o.get(r)[i] = t = e.defaultValue;
                  }
                  for (var h = 1; h < this.currentSelection.length; h++) {
                    (a = this.currentSelection[h]).forceDirty();
                    if (!(o = a.keyedPropertyObject[n])) {
                      o = a.keyedPropertyObject[n] = new Map();
                    }
                    var l = o.get(r)[i];
                    if (l !== 0 && !l) {
                      o.get(r)[i] = l = e.defaultValue;
                    }
                    if (o.get(r)[i] != t) {
                      s = true;
                      break;
                    }
                  }
                } else {
                  t = this.currentSelection[0][n];
                  for (var d = 1; d < this.currentSelection.length; d++) {
                    this.currentSelection[d].forceDirty();
                    if (this.currentSelection[d][n] != t) {
                      s = true;
                      break;
                    }
                  }
                }
                if (s) {
                  e.setToAmbiguous();
                } else {
                  e.setValue(t);
                  for (var c = 0; c < e.childInputs.length; c++) {
                    var u = e.childInputs[c];
                    this.updateInput(u);
                  }
                }
              };
              x.removeInputs = function (e = 0) {
                for (var t = e; t < this.inputs.length; t++) {
                  for (var n = this.inputs[t], r = 0; r < n.childInputs.length; r++) {
                    var i = n.childInputs[r];
                    this.inputHolder.removeChild(i);
                  }
                  n.removeEventListener(o.ON.VALUE_CHANGE, this.inputValueChange);
                  n.removeEventListener(o.ON.ADD_INPUT, this.inputAddInput);
                  n.removeEventListener(o.ON.REMOVE_INPUT, this.inputRemoveInput);
                  n.die();
                  this.inputHolder.removeChild(n);
                  this.inputs.splice(t, 1);
                  this.currentAttributes.splice(t, 1);
                  t--;
                }
                for (var s = 0; s < this.buttons.length; s++) {
                  var h = this.buttons[s];
                  h.removeEventListener(a.Cm.MOUSE_UP, this[h.functionString]);
                  this.inputHolder.removeChild(h);
                  h.die();
                }
                this.buttons = [];
                this.currentFunctions = [];
              };
              x.updateCopiedVerts = function () {
                var e;
                var t;
                var n;
                var r;
                var s = [];
                var a = [];
                var o = R.getIDCounter();
                var h = A.getIDCounter();
                for (var l = 0; l < this.copiedSelection.length; l++) {
                  (r = this.copiedSelection[l]).forceDirty();
                  if (r instanceof i.kU) {
                    if (s[e = (t = r).vID]) {
                      t.vID = s[e];
                    } else {
                      t.vID = o;
                      s[e] = o;
                    }
                    o += 1;
                  } else if (r instanceof i.Ps) {
                    if (a[e = (n = r).vID]) {
                      n.vID = a[e];
                    } else {
                      n.vID = h;
                      a[e] = h;
                    }
                    h += 1;
                  } else if (r instanceof d.D) {
                    for (var c = r.shapeContainer, u = 0; u < c.numChildren; u++) {
                      var p = c.getChildAt(u);
                      if (p instanceof i.kU) {
                        if (s[e = (t = p).vID]) {
                          t.vID = s[e];
                        } else {
                          t.vID = o;
                          s[e] = o;
                        }
                        o += 1;
                      } else if (p instanceof i.Ps) {
                        if (a[e = (n = r).vID]) {
                          n.vID = a[e];
                        } else {
                          n.vID = h;
                          a[e] = h;
                        }
                        h += 1;
                      }
                    }
                  }
                }
              };
              x.enableScrolling = function () {
                if (!this.scrolling) {
                  this.scrolling = true;
                  this.scrollUpSprite = new a.j7((0, v.zI)("EditorUI", "ScrollUpSprite"));
                  this.addChild(this.scrollUpSprite);
                  this.scrollUpSprite.y = this.holderY;
                  this.scrollDownSprite = new a.j7((0, v.zI)("EditorUI", "ScrollUpSprite"));
                  this.addChild(this.scrollDownSprite);
                  this.scrollDownSprite.y = this.cutoffHeight + 5;
                  this.scrollDownSprite.scaleY = -1;
                  this.addEventListener(a.Jh.ENTER_FRAME, this.scrollInputs);
                }
                this.updateActualInputMask();
              };
              x.disableScrolling = function () {
                this.scrolling = false;
                if (this.scrollUpSprite) {
                  this.removeChild(this.scrollUpSprite);
                }
                if (this.scrollDownSprite) {
                  this.removeChild(this.scrollDownSprite);
                }
                this.scrollUpSprite = null;
                this.scrollDownSprite = null;
                this.removeEventListener(a.Jh.ENTER_FRAME, this.scrollInputs);
                this.updateActualInputMask();
              };
              x.updateActualInputMask = function () {
                this.actualInputMask ||= new a.kx();
                this.addChild(this.actualInputMask);
                this.actualInputMask.graphics.clear();
                this.actualInputMask.graphics.beginFill(16711680, this.scrolling ? 0.2 : 0.6);
                this.actualInputMask.graphics.drawRect(0, this.inputMask.y, this.windowWidth, this.inputMask.height);
                this.inputHolder.pixiSprite.mask = this.actualInputMask.graphics.pixiGraphics;
              };
              x.die = function () {
                var t;
                e.prototype.die.call(this);
                if (this.inputs) {
                  this.removeInputs();
                }
                if ((t = this.labelText) !== null && t !== undefined) {
                  t.destroy();
                }
              };
              p = t;
              if (m = [{
                key: "currentCanvas",
                get: function () {
                  return this._currentCanvas;
                },
                set: function (e) {
                  this._currentCanvas = e;
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
                    Object.defineProperty(e, g(r.key), r);
                  }
                })(p.prototype, m);
              }
              Object.defineProperty(p, "prototype", {
                writable: false
              });
              return p;
            }(m);
            var b = n(23222);
            function T(e, t) {
              T = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return T(e, t);
            }
            var A = function (e) {
              function t(n, r) {
                var i;
                (i = e.call(this, n, r) || this).dragState = 0;
                i.artState = 0;
                i.helpMessage = "<u><b>Art Tool Help:</b></u><br><br>The art tool can be used to make terrain with bezier curves. Click wherever you'd like to place vertices and lines. Hold the mouse down upon clicking to determine the curve of a line. Click on the first vertex again to complete the shape.<br><br><u>Keyboard Shortcuts:</u><br><br>Press delete to remove your most recent vertex<br><br>Hold <b>shift</b> to align your points with a 10 pixel grid.<br><br>Press <b>Enter</b> to complete your shape early without filling it to just draw lines.<br><br>Double click with the arrow tool into an artshape for manual editing<br><br>From there, click or drag to select vertices.<br><br>Double click on vertices to expand their bezier handles if they are collapsed. Hold alt to manually adjust one bezier handle at a time. Select a point and press Enter to insert new points.";
                i.frameHandler = function (e) {
                  i.artState = t.E_NORMAL;
                  i.nextPos = new b.RM(Math.round(i.currentShape.mouseX), Math.round(i.currentShape.mouseY));
                  if (i.shiftPressed) {
                    i.nextPos.x = Math.round(i.nextPos.x * 0.1) * 10;
                    i.nextPos.y = Math.round(i.nextPos.y * 0.1) * 10;
                  }
                  var n = i.currentShape.numVerts;
                  var r = i.currentShape.getVertAt(0);
                  var s = i.currentShape.getVertAt(n - 1);
                  var a = new b.RM(i.nextPos.x - s.x, i.nextPos.y - s.y);
                  var o = a.Length();
                  if (i.dragState == 1) {
                    if (o > t.MIN_HANDLE_DISTANCE) {
                      i.dragState = 2;
                      s.handle2.Set(i.nextPos.x - s.x, i.nextPos.y - s.y);
                      s.handle1.Set(-s.handle2.x, -s.handle2.y);
                    }
                  } else if (i.dragState == 2) {
                    if (o <= t.MIN_HANDLE_DISTANCE) {
                      s.handle1.Set(0, 0);
                      s.handle2.Set(0, 0);
                    } else {
                      s.handle2.Set(i.nextPos.x - s.x, i.nextPos.y - s.y);
                      s.handle1.Set(-s.handle2.x, -s.handle2.y);
                    }
                  }
                  if (n > 1) {
                    if (n == t.MAX_VERTS) {
                      i.artState = t.E_COMPLETE;
                    }
                    if (i.artState != t.E_COMPLETE) {
                      if (o == 0) {
                        i.artState = t.E_DONT_UPDATE;
                      } else if (o < t.MIN_LINE_DISTANCE) {
                        a.Normalize();
                        a.Multiply(t.MIN_LINE_DISTANCE);
                        i.nextPos = new b.RM(Math.round(s.x + a.x), Math.round(s.y + a.y));
                      }
                      if (new b.RM(r.x - i.nextPos.x, r.y - i.nextPos.y).Length() < t.SNAP_DISTANCE * Math.pow(2, -i.editor.staticCurrentZoom)) {
                        i.artState = t.E_COMPLETE;
                      }
                    }
                  } else if (r) {
                    if (o == 0) {
                      i.artState = t.E_DONT_UPDATE;
                    } else if (o < t.MIN_LINE_DISTANCE) {
                      a.Normalize();
                      a.Multiply(t.MIN_LINE_DISTANCE);
                      i.nextPos = new b.RM(Math.round(r.x + a.x), Math.round(r.y + a.y));
                    }
                  }
                  i.currentShape.drawEditMode(i.nextPos, i.artState == t.E_COMPLETE, true);
                };
                i.mouseDownHandler = function (e) {
                  if (e.target instanceof a.kx) {
                    var t = e.target;
                    if (i._canvas.contains(t)) {
                      i.setVertex();
                      i.stage.addEventListener(a.Cm.MOUSE_UP, i.mouseUpHandler);
                      i.dragState = 1;
                      i.updateRemainingVerts();
                    }
                  }
                };
                i.keyDownHandler = function (e) {
                  switch (e.keyCode) {
                    case 8:
                      if (!(e.target instanceof a.A_)) {
                        i.deletePreviousVertex();
                      }
                      break;
                    case 13:
                      if (!(e.target instanceof a.A_)) {
                        if (i.currentShape.numVerts < 2) {
                          c.w.debugText.show("art shapes must have at least 2 points");
                        } else {
                          i.completeShape();
                        }
                      }
                      break;
                    case 16:
                      i.shiftPressed = true;
                      break;
                    case 17:
                      i.ctrlPressed = true;
                  }
                };
                i.keyUpHandler = function (e) {
                  switch (e.keyCode) {
                    case 16:
                      i.shiftPressed = false;
                      break;
                    case 17:
                      i.ctrlPressed = false;
                  }
                };
                i.mouseUpHandler = function (e) {
                  i.stage.removeEventListener(a.Cm.MOUSE_UP, i.mouseUpHandler);
                  i.dragState = 0;
                };
                i.mouseMoveHandler = function (e) {
                  if (e.target instanceof a.kx) {
                    var t = e.target;
                    if (i._canvas.contains(t)) {
                      if (i.cursorSprite.visible == 0) {
                        i.cursorSprite.visible = true;
                        a.KK.hide();
                      }
                      var n = i._canvas.parent.parent;
                      i.cursorSprite.x = n.mouseX;
                      i.cursorSprite.y = n.mouseY;
                    } else if (i.cursorSprite.visible == 1) {
                      i.cursorSprite.visible = false;
                      a.KK.show();
                    }
                  } else if (i.cursorSprite.visible == 1) {
                    i.cursorSprite.visible = false;
                    a.KK.show();
                  }
                };
                i.inputValueChange = function (e) {
                  var t = e.inputObject.attribute;
                  i.currentShape[t] = e.value;
                  i.currentShape.forceDirty();
                  i.editor.cullObjects();
                  i.updateTextFields();
                };
                return i;
              }
              var n;
              var h;
              h = e;
              (n = t).prototype = Object.create(h.prototype);
              n.prototype.constructor = n;
              T(n, h);
              var l = t.prototype;
              l.init = function () {
                this.createCursor();
                this.currentShape = new i.Ps();
                this.currentShape.editMode = true;
                this.currentShape.mouseEnabled = false;
                this.remainingVertsInput = new o.ks("vertices left", "vertsLeft", 3, true, true);
                this.remainingVertsInput.x = 5;
                this.remainingVertsInput.y = 5;
                this.addChild(this.remainingVertsInput);
                this.colorInput = new o.AN("shape color", "color", true, true);
                this.colorInput.x = 5;
                this.colorInput.y = this.remainingVertsInput.y + Math.ceil(this.remainingVertsInput.height * 1.25) + 5;
                this.addChild(this.colorInput);
                this.outlineColorInput = new o.AN("outline color", "outlineColor", true, true);
                this.outlineColorInput.x = 5;
                this.outlineColorInput.y = this.colorInput.y + Math.ceil(this.colorInput.height);
                this.addChild(this.outlineColorInput);
                this.opacityInput = new o.Cw("opacity", "opacity", 3, true, 0, 100, 100);
                this.opacityInput.restrict = "0-9";
                this.opacityInput.helpCaption = "Transparent shapes are more cpu intensive than opaque shapes, so use transparency sparingly.  Best performance is at 100 or 0.";
                this.opacityInput.x = 5;
                this.opacityInput.y = this.outlineColorInput.y + Math.ceil(this.outlineColorInput.height * 1.25);
                this.addChild(this.opacityInput);
                this.colorInput.addEventListener(o.ON.VALUE_CHANGE, this.inputValueChange);
                this.outlineColorInput.addEventListener(o.ON.VALUE_CHANGE, this.inputValueChange);
                this.opacityInput.addEventListener(o.ON.VALUE_CHANGE, this.inputValueChange);
                this.updateTextFields();
              };
              l.activate = function () {
                e.prototype.activate.call(this);
                s.WJ.instance.populate(this.helpMessage);
                this.window.setDimensions(130, this.height + 10);
                this._canvas.parent.addChild(this.currentShape);
                this.stage.addEventListener(a.Cm.MOUSE_DOWN, this.mouseDownHandler);
                this.stage.addEventListener(a.Cm.MOUSE_MOVE, this.mouseMoveHandler);
                this.stage.addEventListener(a.kV.KEY_DOWN, this.keyDownHandler);
                this.stage.addEventListener(a.kV.KEY_UP, this.keyUpHandler);
              };
              l.activateContinueDrawing = function () {
                e.prototype.activate.call(this);
                s.WJ.instance.populate(this.helpMessage);
                this.window.setDimensions(130, this.height + 10);
                this._canvas.parent.addChild(this.currentShape);
                this.stage.addEventListener(a.Cm.MOUSE_DOWN, this.mouseDownHandler);
                this.stage.addEventListener(a.Cm.MOUSE_MOVE, this.mouseMoveHandler);
                this.stage.addEventListener(a.kV.KEY_DOWN, this.keyDownHandler);
                this.stage.addEventListener(a.kV.KEY_UP, this.keyUpHandler);
              };
              l.deactivate = function () {
                if (this.currentShape.parent) {
                  this._canvas.parent.removeChild(this.currentShape);
                  var t;
                  var n;
                  for (var i = this.currentShape.numVerts - 1; i > -1; i--) {
                    n = new r.bE(i, this.currentShape, this);
                    this.currentShape.removeVert();
                    if (t) {
                      t.nextAction = n;
                    }
                    t = n;
                  }
                  if (n) {
                    this.dispatchEvent(new r.XP(r.XP.GENERIC, n));
                  }
                  this.currentShape.redraw();
                }
                this.colorInput.closeColorSelector();
                this.outlineColorInput.closeColorSelector();
                this.updateRemainingVerts();
                this.cursorSprite.visible = false;
                a.KK.show();
                this.stage.removeEventListener(a.Jh.ENTER_FRAME, this.frameHandler);
                this.stage.removeEventListener(a.Cm.MOUSE_DOWN, this.mouseDownHandler);
                this.stage.removeEventListener(a.Cm.MOUSE_MOVE, this.mouseMoveHandler);
                this.stage.removeEventListener(a.Cm.MOUSE_UP, this.mouseUpHandler);
                this.stage.removeEventListener(a.kV.KEY_DOWN, this.keyDownHandler);
                this.stage.removeEventListener(a.kV.KEY_UP, this.keyUpHandler);
                e.prototype.deactivate.call(this);
              };
              l.deactivateContinueDrawing = function () {
                this.colorInput.closeColorSelector();
                this.outlineColorInput.closeColorSelector();
                this.cursorSprite.visible = false;
                this.stage.removeEventListener(a.Cm.MOUSE_DOWN, this.mouseDownHandler);
                this.stage.removeEventListener(a.Cm.MOUSE_MOVE, this.mouseMoveHandler);
                this.stage.removeEventListener(a.Cm.MOUSE_UP, this.mouseUpHandler);
                this.stage.removeEventListener(a.kV.KEY_DOWN, this.keyDownHandler);
                this.stage.removeEventListener(a.kV.KEY_UP, this.keyUpHandler);
                e.prototype.deactivate.call(this);
              };
              l.createCursor = function () {
                this.cursorSprite = new a.kx();
                this.cursorSprite.graphics.lineStyle(1, 0, 1, true);
                this.cursorSprite.graphics.moveTo(-5, 0);
                this.cursorSprite.graphics.lineTo(5, 0);
                this.cursorSprite.graphics.moveTo(0, -5);
                this.cursorSprite.graphics.lineTo(0, 5);
                this.cursorSprite.mouseEnabled = false;
                this.cursorSprite.blendMode = a.Nx.INVERT;
                this.cursorSprite.visible = false;
                this.canvas.parent.parent.addChild(this.cursorSprite);
              };
              l.setVertex = function () {
                if (this.currentShape.numVerts < 1) {
                  this.stage.addEventListener(a.Jh.ENTER_FRAME, this.frameHandler);
                  this.currentShape.xUnbound = Math.round(this._canvas.mouseX);
                  this.currentShape.yUnbound = Math.round(this._canvas.mouseY);
                  var e = new _.tK();
                  this.currentShape.addVert(e);
                  e.edgeShape = this.currentShape;
                  e.selected = true;
                  this.currentShape.vID = t.idCounter;
                  var n = new r.lM(this.currentShape.numVerts - 1, this.currentShape, this);
                  this.dispatchEvent(new r.XP(r.XP.GENERIC, n));
                } else {
                  switch (this.artState) {
                    case t.E_NORMAL:
                      var i = this.currentShape.getVertAt(this.currentShape.numVerts - 1);
                      if (i.x == this.nextPos.x && i.y == this.nextPos.y) ;else {
                        i.selected = false;
                        i = new _.tK(this.nextPos.x, this.nextPos.y);
                        this.currentShape.addVert(i);
                        i.edgeShape = this.currentShape;
                        i.selected = true;
                        var s = new r.lM(this.currentShape.numVerts - 1, this.currentShape, this);
                        this.dispatchEvent(new r.XP(r.XP.GENERIC, s));
                      }
                      break;
                    case t.E_COMPLETE:
                      this.currentShape.completeFill = true;
                      this.completeShape();
                    case t.E_DONT_UPDATE:
                  }
                }
              };
              l.deletePreviousVertex = function () {
                var e = this.currentShape.numVerts;
                if (e > 0) {
                  var t = new r.bE(e - 1, this.currentShape, this);
                  this.currentShape.removeVert();
                  if (this.currentShape.numVerts == 0) {
                    this.stage.removeEventListener(a.Jh.ENTER_FRAME, this.frameHandler);
                    this.currentShape.graphics.clear();
                  } else {
                    this.currentShape.getVertAt(this.currentShape.numVerts - 1).selected = true;
                  }
                  if (t) {
                    this.dispatchEvent(new r.XP(r.XP.GENERIC, t));
                  }
                }
                this.updateRemainingVerts();
              };
              l.addFrameHandler = function () {
                this.stage.addEventListener(a.Jh.ENTER_FRAME, this.frameHandler);
              };
              l.removeFrameHandler = function () {
                this.stage.removeEventListener(a.Jh.ENTER_FRAME, this.frameHandler);
              };
              l.setCurrentShape = function (e) {
                if (this.currentShape && this.currentShape.parent) {
                  this.currentShape.parent.removeChild(this.currentShape);
                }
                this.currentShape = e;
                this.currentShape.completeFill = false;
                this.currentShape.editMode = true;
                this.currentShape.mouseEnabled = false;
                this._canvas.parent.addChild(this.currentShape);
                if (this.currentShape.numVerts > 0) {
                  this.stage.addEventListener(a.Jh.ENTER_FRAME, this.frameHandler);
                }
              };
              l.completeShape = function () {
                this.artState = 0;
                this.dragState = 0;
                this.stage.removeEventListener(a.Jh.ENTER_FRAME, this.frameHandler);
                this.stage.removeEventListener(a.Cm.MOUSE_UP, this.mouseUpHandler);
                this.currentShape.recenter();
                this.currentShape.editMode = false;
                this.currentShape.mouseEnabled = true;
                this._canvas.addRefSprite(this.currentShape);
                var e = new i.Ps(this.currentShape.interactive, this.currentShape.immovable, this.currentShape.sleeping, this.currentShape.density, this.currentShape.color, this.currentShape.outlineColor, this.currentShape.opacity, this.currentShape.collision);
                e.editMode = true;
                e.mouseEnabled = false;
                this._canvas.parent.addChild(e);
                var t = new r.le(this.currentShape, e, this);
                var n = new r.Sl(this.currentShape, this._canvas, this._canvas.shapes.getChildIndex(this.currentShape));
                t.nextAction = n;
                this.dispatchEvent(new r.XP(r.XP.GENERIC, n));
                this.currentShape = e;
              };
              l.updateRemainingVerts = function () {
                var e = this.currentShape.numVerts;
                var n = t.MAX_VERTS - e;
                this.remainingVertsInput.setValue("" + n);
              };
              l.updateTextFields = function () {
                this.updateRemainingVerts();
                this.colorInput.setValue(this.currentShape.color);
                this.outlineColorInput.setValue(this.currentShape.outlineColor);
                this.opacityInput.setValue(this.currentShape.opacity);
              };
              t.updateIdCounter = function (e) {
                if (!(e < t.idCounter)) {
                  t.idCounter = e + 1;
                }
              };
              t.resetIdCounter = function () {
                t.idCounter = 0;
              };
              t.getIDCounter = function () {
                return t.idCounter;
              };
              l.resizeElements = function () {
                for (var e = this.currentShape.numVerts, t = 0; t < e; t++) {
                  var n = this.currentShape.getVertAt(t);
                  n.selected = n.selected;
                }
              };
              l.die = function () {
                var t;
                var n;
                var r;
                var i;
                var s;
                var a;
                e.prototype.die.call(this);
                if ((t = this.colorInput) !== null && t !== undefined) {
                  t.removeEventListener(o.ON.VALUE_CHANGE, this.inputValueChange);
                }
                if ((n = this.outlineColorInput) !== null && n !== undefined) {
                  n.removeEventListener(o.ON.VALUE_CHANGE, this.inputValueChange);
                }
                if ((r = this.opacityInput) !== null && r !== undefined) {
                  r.removeEventListener(o.ON.VALUE_CHANGE, this.inputValueChange);
                }
                if ((i = this.colorInput) !== null && i !== undefined) {
                  i.die();
                }
                if ((s = this.outlineColorInput) !== null && s !== undefined) {
                  s.die();
                }
                if ((a = this.opacityInput) !== null && a !== undefined) {
                  a.die();
                }
              };
              return t;
            }(m);
            A.MAX_VERTS = 100;
            A.MIN_LINE_DISTANCE = 2;
            A.MIN_HANDLE_DISTANCE = 3;
            A.SNAP_DISTANCE = 5;
            A.E_NORMAL = 0;
            A.E_COMPLETE = 1;
            A.E_DONT_UPDATE = 2;
            A.idCounter = 0;
            var C = n(17109);
            var S = n(92679);
            var E = n(84233);
            var O = n(59020);
            function k(e, t) {
              k = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return k(e, t);
            }
            var P = function (e) {
              function t(n, r) {
                var s;
                (s = e.call(this, n, r) || this).snapRange = 10;
                s.windowWidth = 130;
                s.indent = 5;
                s.helpMessage = "<u><b>Joint Tool Help:</b></u><br><br>The joint tool can be used to create different types of joints.  A joint is used to hold two joinable objects together.  Currently, you can create pin and sliding joints.<br><br><u>Pin Joint:</u><br><br>Place a pin joint by clicking the cursor on one or two overlapping joinable objects (such as two non-fixed rectangle shapes).  If only one object is used, the joint will be made between the object and the background itself.<br><br>A pin joint forces 2 bodies to rotate around the specified anchor point.  A good real life example would be a wheel on a car.  The wheel is one body, the car is the other, and the anchor point is the axle where the wheel is connected.<br><br>You can set a limit for the pin joint, so that the angle between the two bodies cannot leave a certain range.<br><br>You can also enable a motor for each joint.  The motor allows you to rotate the pin joint automatically.  You can use this to automate wheels or rotating platforms.  I've given the user a lot of freedom in the possible motor values, so there's a large potential for some cool creations as well as some horrible failures.<br><br><u>Sliding Joint:</u><br><br>A sliding joint is created similarly to the pin joint. Sliding joints constrain bodies to a single axis along the plane of the screen. If only one body is used, that body is constrained to the non-moving background. An example of this would be an elevator moving through floors of a static building. If two bodies are used, both bodies can move freely, but relative to each other they are constrained to their local axis. An example of this would be a forklift. The frame is one body, and the lifting fork is the other.<br><br>Limits will constrain the range of this axis. Motors will allow the bodies to move along the axis within the given limits at a chosen speed. The closer the body is to the anchor of the joint, which is where you place the actual joint, the better the joint will function. Bodies very far from the anchor will have a tougher time sticking to the axis, and the lighter the body, the easier it will be to push it off of the axis.<br><br><b>Tip:</b> You can disable the joint lines in the editor menu.";
                s.mouseMoveHandler = function (e = null) {
                  s.cursorShape.x = s._canvas.mouseX;
                  s.cursorShape.y = s._canvas.mouseY;
                  if (e.target instanceof i.HQ) {
                    var t = e.target;
                    if (!t.immovable) {
                      var n = Math.abs(t.x - s.cursorShape.x);
                      var r = Math.abs(t.y - s.cursorShape.y);
                      if (n < s.snapRange && r < s.snapRange) {
                        s.cursorShape.x = t.x;
                        s.cursorShape.y = t.y;
                      }
                    }
                  }
                };
                s.mouseDownHandler = function (e) {
                  if (e.target instanceof a.kx) {
                    var t = e.target;
                    if (s._canvas.contains(t)) {
                      s.createNewJoint();
                    }
                  }
                };
                s.keyDownHandler = function (e) {
                  if (!(e.target instanceof a.A_) && s.currentJoint == t.SLIDE) {
                    switch (e.keyCode) {
                      case 90:
                        if (!e.ctrlKey) {
                          s.adjustRotation(-1, e.shiftKey);
                        }
                        break;
                      case 88:
                        s.adjustRotation(1, e.shiftKey);
                    }
                  }
                };
                s.jointChosen = function (e) {
                  var n = e.target;
                  if (n != s.selectedButton) {
                    s.selectedButton.selected = false;
                    s.selectedButton = n;
                    s.selectedButton.selected = true;
                    if (s.cursorShape instanceof E.a) {
                      s.lastPin = s.cursorShape.clone();
                    } else if (s.cursorShape instanceof O.N) {
                      s.lastSlide = s.cursorShape.clone();
                    }
                    s._canvas.removeChild(s.cursorShape);
                    if (n == s.pinButton) {
                      s.populate(t.PIN);
                    } else if (n == s.slideButton) {
                      s.populate(t.SLIDE);
                    }
                    s._canvas.addChild(s.cursorShape);
                  }
                };
                s.inputValueChange = function (e) {
                  var t = e.inputObject;
                  var n = t.attribute;
                  s.cursorShape[n] = e.value;
                  s.updateInput(t);
                  s.editor.cullObjects();
                };
                return s;
              }
              var n;
              var s;
              s = e;
              (n = t).prototype = Object.create(s.prototype);
              n.prototype.constructor = n;
              k(n, s);
              var h = t.prototype;
              h.init = function () {
                this.currentJoint = t.PIN;
                var e = 16613761;
                this.pinButton = new o.Ch("Pin Joint", e, 120);
                this.pinButton.x = 5;
                this.pinButton.y = 5;
                this.addChild(this.pinButton);
                this.slideButton = new o.Ch("Sliding Joint", e, 120);
                this.addChild(this.slideButton);
                this.slideButton.x = 5;
                this.slideButton.y = this.pinButton.y + this.slideButton.height;
                this.inputs = [];
                this.populate(t.PIN);
                this.selectedButton = this.pinButton;
                this.selectedButton.selected = true;
                this.pinButton.addEventListener(a.Cm.MOUSE_UP, this.jointChosen);
                this.slideButton.addEventListener(a.Cm.MOUSE_UP, this.jointChosen);
              };
              h.activate = function () {
                if (!this.activated) {
                  e.prototype.activate.call(this);
                  S.W.instance.populate(this.helpMessage);
                  this.window.setDimensions(this.windowWidth, this.height + 5);
                  this._canvas.addChild(this.cursorShape);
                  this.cursorShape.excludeFromCulling = true;
                  this.stage.addEventListener(a.Jh.ENTER_FRAME, this.mouseMoveHandler);
                  this.stage.addEventListener(a.Cm.MOUSE_DOWN, this.mouseDownHandler);
                  this.stage.addEventListener(a.kV.KEY_DOWN, this.keyDownHandler);
                }
              };
              h.deactivate = function () {
                this._canvas.removeChild(this.cursorShape);
                this.stage.removeEventListener(a.Jh.ENTER_FRAME, this.mouseMoveHandler);
                this.stage.removeEventListener(a.Cm.MOUSE_DOWN, this.mouseDownHandler);
                this.stage.removeEventListener(a.kV.KEY_DOWN, this.keyDownHandler);
                e.prototype.deactivate.call(this);
              };
              h.adjustRotation = function (e, t) {
                if (t) {
                  e *= 10;
                }
                this.cursorShape.angle += e;
                this.updateInputValues();
              };
              h.populate = function (e) {
                this.removeInputs();
                this.currentJoint = e;
                if (e == t.PIN) {
                  this.cursorShape = this.lastPin ? this.lastPin.clone() : new E.a();
                } else if (e == t.SLIDE) {
                  this.cursorShape = this.lastSlide ? this.lastSlide.clone() : new O.N();
                }
                this.cursorShape.blendMode = a.Nx.INVERT;
                var n = this.height + 5;
                for (var r = 0; r < this.cursorShape.attributes.length; r++) {
                  var i = this.cursorShape.attributes[r];
                  if (i != "x" && i != "y") {
                    var s = C.E.buildInput(i);
                    s.y = n;
                    s.x = this.indent;
                    this.addChild(s);
                    s.addEventListener(o.ON.VALUE_CHANGE, this.inputValueChange);
                    this.inputs.push(s);
                    n += s.height * 1.25;
                    if (s.childInputs) {
                      for (var h = 0; h < s.childInputs.length; h++) {
                        var l = s.childInputs[h];
                        l.y = n;
                        l.x = this.indent;
                        this.addChild(l);
                        n += l.height * 1.25;
                      }
                    }
                    this.updateInput(s);
                  }
                }
                if (this.window) {
                  this.window.setDimensions(this.windowWidth, this.height + 5);
                }
              };
              h.removeInputs = function () {
                for (var e = 0; e < this.inputs.length; e++) {
                  for (var t = this.inputs[e], n = 0; n < t.childInputs.length; n++) {
                    var r = t.childInputs[n];
                    this.removeChild(r);
                  }
                  t.removeEventListener(o.ON.VALUE_CHANGE, this.inputValueChange);
                  t.die();
                  this.removeChild(t);
                }
                this.inputs = [];
              };
              h.updateInputValues = function () {
                for (var e = 0; e < this.inputs.length; e++) {
                  var t = this.inputs[e];
                  this.updateInput(t);
                }
              };
              h.updateInput = function (e) {
                var t = e.attribute;
                var n = this.cursorShape[t];
                e.setValue(n);
                for (var r = 0; r < e.childInputs.length; r++) {
                  var i = e.childInputs[r];
                  i.forceDirty();
                  this.updateInput(i);
                }
                this.editor.cullObjects();
              };
              h.createNewJoint = function () {
                this._canvas.addRefSprite(this.cursorShape);
                this.cursorShape.blendMode = a.Nx.NORMAL;
                this.cursorShape.identifyBodies();
                if (this.cursorShape.body1) {
                  var e = new r.Sl(this.cursorShape, this._canvas, this._canvas.joints.getChildIndex(this.cursorShape));
                  var t = e;
                  var n = new a.bR(this.cursorShape.x, this.cursorShape.y);
                  e = new r.cK(this.cursorShape, "body1", null, this.cursorShape.body1, n, n);
                  t.nextAction = e;
                  t = e;
                  if (this.cursorShape.body2) {
                    e = new r.cK(this.cursorShape, "body2", null, this.cursorShape.body2, n, n);
                    t.nextAction = e;
                  }
                  this.dispatchEvent(new r.XP(r.XP.GENERIC, e));
                }
                var i = this.cursorShape.clone();
                i.forceDirty();
                this.cursorShape = i;
                this.cursorShape.blendMode = a.Nx.INVERT;
                this._canvas.addChild(this.cursorShape);
                this.cursorShape.forceDirty();
                this.cursorShape.x = this._canvas.mouseX;
                this.cursorShape.y = this._canvas.mouseY;
              };
              h.die = function () {
                var t;
                var n;
                e.prototype.die.call(this);
                if ((t = this.pinButton) !== null && t !== undefined) {
                  t.addEventListener(a.Cm.MOUSE_UP, this.jointChosen);
                }
                if ((n = this.slideButton) !== null && n !== undefined) {
                  n.addEventListener(a.Cm.MOUSE_UP, this.jointChosen);
                }
              };
              return t;
            }(m);
            function M(e, t) {
              M = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return M(e, t);
            }
            P.PIN = "pin";
            P.SLIDE = "slide";
            var R = function (e) {
              function t(n, r) {
                var i;
                (i = e.call(this, n, r) || this).polyState = 0;
                i.helpMessage = "<u><b>Polygon Tool Help:</b></u><br><br>The polygon tool can be used to make convex polygonal shapes easily. Click wherever you'd like to place vertices and lines. Click on the first vertex again to complete the shape. <br><br>When making your shapes, you must place your points in a clockwise direction. Also, you are limited to convex polygon shapes with 10 vertices at most.<br><br><u>Keyboard Shortcuts:</u><br><br>Hold <b>shift</b> while moving your mouse to align your points to a 10 pixel grid.<br><br><b>Delete</b> or undo will remove your last placed point.<br><br><b>Enter</b> will complete the polygon immediately with the current points.";
                i.frameHandler = function (e) {
                  i.polyState = t.P_NORMAL;
                  i.nextPos = new b.RM(Math.round(i.currentShape.mouseX), Math.round(i.currentShape.mouseY));
                  if (i.shiftPressed) {
                    i.nextPos.x = Math.round(i.nextPos.x * 0.1) * 10;
                    i.nextPos.y = Math.round(i.nextPos.y * 0.1) * 10;
                  }
                  var n = i.currentShape.numVerts;
                  if (n > 1) {
                    var r = i.currentShape.getVertAt(0);
                    var s = i.currentShape.getVertAt(1);
                    var a = i.currentShape.getVertAt(n - 2);
                    var o = i.currentShape.getVertAt(n - 1);
                    var h = new b.RM(o.x - a.x, o.y - a.y);
                    var l = new b.RM(r.x - o.x, r.y - o.y);
                    var d = new b.RM(i.nextPos.x - o.x, i.nextPos.y - o.y);
                    var c = h.Copy();
                    var u = l.Copy();
                    c.Normalize();
                    u.Normalize();
                    var p = new b.RM(c.y, -c.x);
                    var m = new b.RM(-u.y, u.x);
                    var f = b.x5.b2Dot(d, c);
                    var _ = b.x5.b2Dot(d, u);
                    var v = b.x5.b2Dot(d, p);
                    var y = b.x5.b2Dot(d, m);
                    if (f < 0 && _ < 0) {
                      i.nextPos.Set(o.x, o.y);
                      i.polyState = t.P_DONT_UPDATE;
                    } else if (f >= 0 && v > 0) {
                      var g = c.Copy();
                      g.Multiply(f);
                      i.nextPos.Set(Math.round(o.x + g.x), Math.round(o.y + g.y));
                      i.polyState = t.P_REPLACE_PREV;
                    } else if (_ >= 0 && y > 0 || n == t.MAX_VERTS) {
                      i.nextPos.Set(r.x, r.y);
                      i.polyState = t.P_COMPLETE;
                    }
                    if (i.polyState != t.P_COMPLETE && i.polyState != t.P_DONT_UPDATE) {
                      var w = new b.RM(i.nextPos.x - o.x, i.nextPos.y - o.y).Length();
                      if (w == 0) {
                        i.polyState = t.P_DONT_UPDATE;
                      } else if (w < t.MIN_SHAPE_LINE_DISTANCE) {
                        i.nextPos.Set(o.x, o.y);
                        i.polyState = t.P_DONT_UPDATE;
                      }
                      if ((w = new b.RM(r.x - i.nextPos.x, r.y - i.nextPos.y).Length()) < t.SNAP_DISTANCE * Math.pow(2, -i.editor.staticCurrentZoom)) {
                        i.nextPos.Set(r.x, r.y);
                        i.polyState = t.P_COMPLETE;
                      } else if (n > 2) {
                        h = new b.RM(r.x - s.x, r.y - s.y);
                        l = new b.RM(i.nextPos.x - r.x, i.nextPos.y - r.y);
                        c = h.Copy();
                        u = l.Copy();
                        c.Normalize();
                        u.Normalize();
                        m = new b.RM(-c.y, c.x);
                        if (b.x5.b2Dot(l, m) > 0) {
                          i.nextPos.Set(r.x, r.y);
                          i.polyState = t.P_COMPLETE;
                        }
                      }
                    }
                    if (n == 2 && i.polyState == t.P_COMPLETE) {
                      i.nextPos.Set(o.x, o.y);
                      i.polyState = t.P_DONT_UPDATE;
                    }
                  } else {
                    var x = i.currentShape.getVertAt(0);
                    if (x) {
                      var T = new b.RM(i.nextPos.x - x.x, i.nextPos.y - x.y);
                      var A = T.Length();
                      if (A == 0) {
                        i.polyState = t.P_DONT_UPDATE;
                      } else if (A < t.MIN_SHAPE_LINE_DISTANCE) {
                        T.Normalize();
                        T.Multiply(t.MIN_SHAPE_LINE_DISTANCE);
                        i.nextPos.Set(Math.round(x.x + T.x), Math.round(x.y + T.y));
                      }
                    }
                  }
                  i.currentShape.drawEditMode(i.nextPos, i.polyState == t.P_COMPLETE, true);
                };
                i.mouseDownHandler = function (e) {
                  if (e.target instanceof a.kx) {
                    var t = e.target;
                    if (i._canvas.contains(t)) {
                      i.setVertex();
                      i.updateRemainingVerts();
                    }
                  }
                };
                i.keyDownHandler = function (e) {
                  switch (e.keyCode) {
                    case 8:
                      if (!(e.target instanceof a.A_)) {
                        i.deletePreviousVertex();
                        i.updateRemainingVerts();
                      }
                      break;
                    case 13:
                      if (!(e.target instanceof a.A_)) {
                        if (i.currentShape.numVerts < 3) {
                          c.w.debugText.show("polygons must have at least 3 points");
                        } else {
                          i.currentShape.completeFill = true;
                          i.completeShape();
                        }
                      }
                      break;
                    case 16:
                      i.shiftPressed = true;
                      break;
                    case 17:
                      i.ctrlPressed = true;
                  }
                };
                i.keyUpHandler = function (e) {
                  switch (e.keyCode) {
                    case 16:
                      i.shiftPressed = false;
                      break;
                    case 17:
                      i.ctrlPressed = false;
                  }
                };
                i.mouseMoveHandler = function (e) {
                  if (e.target instanceof a.kx) {
                    var t = e.target;
                    if (i._canvas.contains(t)) {
                      if (i.cursorSprite.visible == 0) {
                        i.cursorSprite.visible = true;
                        a.KK.hide();
                      }
                      var n = i._canvas.parent.parent;
                      i.cursorSprite.x = n.mouseX;
                      i.cursorSprite.y = n.mouseY;
                    } else if (i.cursorSprite.visible == 1) {
                      i.cursorSprite.visible = false;
                      a.KK.show();
                    }
                  } else if (i.cursorSprite.visible == 1) {
                    i.cursorSprite.visible = false;
                    a.KK.show();
                  }
                };
                i.inputValueChange = function (e) {
                  var t = e.inputObject.attribute;
                  i.currentShape[t] = e.value;
                  i.updateTextFields();
                  i.currentShape.forceDirty();
                  i.editor.cullObjects();
                };
                return i;
              }
              var n;
              var s;
              s = e;
              (n = t).prototype = Object.create(s.prototype);
              n.prototype.constructor = n;
              M(n, s);
              var h = t.prototype;
              h.init = function () {
                this.createCursor();
                this.currentShape = new i.kU();
                this.currentShape.editMode = true;
                this.currentShape.mouseEnabled = false;
                this.remainingVertsInput = new o.ks("vertices left", "vertsLeft", 2, true, true);
                this.remainingVertsInput.x = 5;
                this.remainingVertsInput.y = 5;
                this.addChild(this.remainingVertsInput);
                this.colorInput = new o.AN("shape color", "color", true, true);
                this.colorInput.x = 5;
                this.colorInput.y = this.remainingVertsInput.y + Math.ceil(this.remainingVertsInput.height * 1.25) + 5;
                this.addChild(this.colorInput);
                this.outlineColorInput = new o.AN("outline color", "outlineColor", true, true);
                this.outlineColorInput.x = 5;
                this.outlineColorInput.y = this.colorInput.y + Math.ceil(this.colorInput.height);
                this.addChild(this.outlineColorInput);
                this.opacityInput = new o.Cw("opacity", "opacity", 3, true, 0, 100, 100);
                this.opacityInput.restrict = "0-9";
                this.opacityInput.helpCaption = "Transparent shapes are more cpu intensive than opaque shapes, so use transparency sparingly.  Best performance is at 100 or 0.";
                this.opacityInput.x = 5;
                this.opacityInput.y = this.outlineColorInput.y + Math.ceil(this.outlineColorInput.height * 1.25);
                this.addChild(this.opacityInput);
                this.immovableCheck = new o.oV("fixed", "immovable", true, true, true);
                this.immovableCheck.y = this.opacityInput.y + Math.ceil(this.opacityInput.height * 1.25);
                this.immovableCheck.x = 5;
                this.immovableCheck.helpCaption = "A fixed object will never move and will support any weight.";
                this.addChild(this.immovableCheck);
                this.asleepCheck = new o.oV("sleeping", "sleeping", false, false);
                this.asleepCheck.y = this.immovableCheck.y + Math.ceil(this.immovableCheck.height * 1.25);
                this.asleepCheck.x = 5;
                this.asleepCheck.helpCaption = "A sleeping object will remain frozen in place until it is touched by any other moving object.";
                this.addChild(this.asleepCheck);
                this.densityInput = new o.ks("density", "density", 4, true);
                this.densityInput.restrict = "0-9.";
                this.densityInput.x = 5;
                this.densityInput.y = this.asleepCheck.y + Math.ceil(this.asleepCheck.height * 1.25);
                this.densityInput.helpCaption = "The mass per volume of an object.  The bodies of human characters in this game are set to a density of 1.";
                this.addChild(this.densityInput);
                this.immovableCheck.addChildInput(this.asleepCheck);
                this.immovableCheck.addChildInput(this.densityInput);
                this.collisionInput = C.E.buildInput("collision");
                this.collisionInput.x = 5;
                this.collisionInput.y = this.densityInput.y + Math.ceil(this.densityInput.height * 1.25);
                this.addChild(this.collisionInput);
                this.immovableCheck.addEventListener(o.ON.VALUE_CHANGE, this.inputValueChange);
                this.colorInput.addEventListener(o.ON.VALUE_CHANGE, this.inputValueChange);
                this.outlineColorInput.addEventListener(o.ON.VALUE_CHANGE, this.inputValueChange);
                this.opacityInput.addEventListener(o.ON.VALUE_CHANGE, this.inputValueChange);
                this.collisionInput.addEventListener(o.ON.VALUE_CHANGE, this.inputValueChange);
                this.updateTextFields();
              };
              h.activate = function () {
                e.prototype.activate.call(this);
                S.W.instance.populate(this.helpMessage);
                this.window.setDimensions(130, this.height + 10);
                this._canvas.parent.addChild(this.currentShape);
                this.stage.addEventListener(a.Cm.MOUSE_DOWN, this.mouseDownHandler);
                this.stage.addEventListener(a.Cm.MOUSE_MOVE, this.mouseMoveHandler);
                this.stage.addEventListener(a.kV.KEY_DOWN, this.keyDownHandler);
                this.stage.addEventListener(a.kV.KEY_UP, this.keyUpHandler);
              };
              h.activateContinueDrawing = function () {
                e.prototype.activate.call(this);
                S.W.instance.populate(this.helpMessage);
                this.window.setDimensions(130, this.height + 10);
                this._canvas.parent.addChild(this.currentShape);
                this.stage.addEventListener(a.Cm.MOUSE_DOWN, this.mouseDownHandler);
                this.stage.addEventListener(a.Cm.MOUSE_MOVE, this.mouseMoveHandler);
                this.stage.addEventListener(a.kV.KEY_DOWN, this.keyDownHandler);
                this.stage.addEventListener(a.kV.KEY_UP, this.keyUpHandler);
              };
              h.deactivate = function () {
                if (this.currentShape.parent) {
                  this._canvas.parent.removeChild(this.currentShape);
                  var t;
                  var n;
                  for (var i = this.currentShape.numVerts - 1; i > -1; i--) {
                    n = new r.bE(i, this.currentShape, this);
                    this.currentShape.removeVert();
                    if (t) {
                      t.nextAction = n;
                    }
                    t = n;
                  }
                  if (n) {
                    this.dispatchEvent(new r.XP(r.XP.GENERIC, n));
                  }
                  this.currentShape.redraw();
                }
                this.colorInput.closeColorSelector();
                this.outlineColorInput.closeColorSelector();
                this.updateRemainingVerts();
                this.cursorSprite.visible = false;
                a.KK.show();
                this.stage.removeEventListener(a.Jh.ENTER_FRAME, this.frameHandler);
                this.stage.removeEventListener(a.Cm.MOUSE_DOWN, this.mouseDownHandler);
                this.stage.removeEventListener(a.Cm.MOUSE_MOVE, this.mouseMoveHandler);
                this.stage.removeEventListener(a.kV.KEY_DOWN, this.keyDownHandler);
                this.stage.removeEventListener(a.kV.KEY_UP, this.keyUpHandler);
                e.prototype.deactivate.call(this);
              };
              h.deactivateContinueDrawing = function () {
                this.colorInput.closeColorSelector();
                this.outlineColorInput.closeColorSelector();
                this.cursorSprite.visible = false;
                this.stage.removeEventListener(a.Cm.MOUSE_DOWN, this.mouseDownHandler);
                this.stage.removeEventListener(a.Cm.MOUSE_MOVE, this.mouseMoveHandler);
                this.stage.removeEventListener(a.kV.KEY_DOWN, this.keyDownHandler);
                this.stage.removeEventListener(a.kV.KEY_UP, this.keyUpHandler);
                e.prototype.deactivate.call(this);
              };
              h.createCursor = function () {
                this.cursorSprite = new a.kx();
                this.cursorSprite.graphics.lineStyle(1, 0, 1, true);
                this.cursorSprite.graphics.moveTo(-5, 0);
                this.cursorSprite.graphics.lineTo(5, 0);
                this.cursorSprite.graphics.moveTo(0, -5);
                this.cursorSprite.graphics.lineTo(0, 5);
                this.cursorSprite.mouseEnabled = false;
                this.cursorSprite.blendMode = a.Nx.INVERT;
                this.cursorSprite.visible = false;
                this.canvas.parent.parent.addChild(this.cursorSprite);
              };
              h.setVertex = function () {
                if (this.currentShape.numVerts < 1) {
                  this.stage.addEventListener(a.Jh.ENTER_FRAME, this.frameHandler);
                  this.currentShape.xUnbound = Math.round(this._canvas.mouseX);
                  this.currentShape.yUnbound = Math.round(this._canvas.mouseY);
                  var e = new _._J();
                  this.currentShape.addVert(e);
                  e.edgeShape = this.currentShape;
                  e.selected = true;
                  this.currentShape.vID = t.idCounter;
                  var n = new r.lM(this.currentShape.numVerts - 1, this.currentShape, this);
                  this.dispatchEvent(new r.XP(r.XP.GENERIC, n));
                } else {
                  switch (this.polyState) {
                    case t.P_NORMAL:
                      var i = this.currentShape.getVertAt(this.currentShape.numVerts - 1);
                      if (i.x == this.nextPos.x && i.y == this.nextPos.y) ;else {
                        i.selected = false;
                        i = new _._J(this.nextPos.x, this.nextPos.y);
                        this.currentShape.addVert(i);
                        i.edgeShape = this.currentShape;
                        i.selected = true;
                        var s = new r.lM(this.currentShape.numVerts - 1, this.currentShape, this);
                        this.dispatchEvent(new r.XP(r.XP.GENERIC, s));
                      }
                      break;
                    case t.P_COMPLETE:
                      if (this.checkVertsConvex()) {
                        this.currentShape.completeFill = true;
                        this.completeShape();
                      }
                      break;
                    case t.P_DONT_UPDATE:
                      break;
                    case t.P_REPLACE_PREV:
                      (i = this.currentShape.getVertAt(this.currentShape.numVerts - 1)).selected = false;
                      var o = new r.bE(this.currentShape.numVerts - 1, this.currentShape, this);
                      this.currentShape.removeVert();
                      i = new _._J(this.nextPos.x, this.nextPos.y);
                      this.currentShape.addVert(i);
                      i.edgeShape = this.currentShape;
                      i.selected = true;
                      var h = new r.lM(this.currentShape.numVerts - 1, this.currentShape, this);
                      o.nextAction = h;
                      this.dispatchEvent(new r.XP(r.XP.GENERIC, h));
                  }
                }
              };
              h.deletePreviousVertex = function () {
                var e = this.currentShape.numVerts;
                if (e > 0) {
                  var t = new r.bE(e - 1, this.currentShape, this);
                  this.currentShape.removeVert();
                  if (this.currentShape.numVerts == 0) {
                    this.stage.removeEventListener(a.Jh.ENTER_FRAME, this.frameHandler);
                    this.currentShape.graphics.clear();
                  } else {
                    this.currentShape.getVertAt(this.currentShape.numVerts - 1).selected = true;
                  }
                  if (t) {
                    this.dispatchEvent(new r.XP(r.XP.GENERIC, t));
                  }
                }
              };
              h.addFrameHandler = function () {
                this.stage.addEventListener(a.Jh.ENTER_FRAME, this.frameHandler);
              };
              h.removeFrameHandler = function () {
                this.stage.removeEventListener(a.Jh.ENTER_FRAME, this.frameHandler);
              };
              h.setCurrentShape = function (e) {
                if (this.currentShape && this.currentShape.parent) {
                  this.currentShape.parent.removeChild(this.currentShape);
                }
                this.currentShape = e;
                this.currentShape.completeFill = false;
                this.currentShape.editMode = true;
                this.currentShape.mouseEnabled = false;
                this._canvas.parent.addChild(this.currentShape);
                if (this.currentShape.numVerts > 0) {
                  this.stage.addEventListener(a.Jh.ENTER_FRAME, this.frameHandler);
                }
              };
              h.completeShape = function () {
                this.polyState = 0;
                this.stage.removeEventListener(a.Jh.ENTER_FRAME, this.frameHandler);
                this.currentShape.recenter();
                this.currentShape.editMode = false;
                this.currentShape.mouseEnabled = true;
                this._canvas.addRefSprite(this.currentShape);
                var e = new i.kU(this.currentShape.interactive, this.currentShape.immovable, this.currentShape.sleeping, this.currentShape.density, this.currentShape.color, this.currentShape.outlineColor, this.currentShape.opacity, this.currentShape.collision);
                e.editMode = true;
                e.mouseEnabled = false;
                this._canvas.parent.addChild(e);
                var t = new r.le(this.currentShape, e, this);
                var n = new r.Sl(this.currentShape, this._canvas, this._canvas.shapes.getChildIndex(this.currentShape));
                t.nextAction = n;
                this.dispatchEvent(new r.XP(r.XP.GENERIC, n));
                this.currentShape = e;
              };
              h.checkVertsConvex = function () {
                var e = this.currentShape.numVerts;
                if (e < 3) {
                  return false;
                }
                for (var t = 0; t < e; t++) {
                  var n = this.currentShape.getVertAt(t);
                  var r = t + 1;
                  if (r > e - 1) {
                    r -= e;
                  }
                  var i = this.currentShape.getVertAt(r);
                  if ((r = t + 2) > e - 1) {
                    r -= e;
                  }
                  var s = this.currentShape.getVertAt(r);
                  var a = new b.RM(i.x - n.x, i.y - n.y);
                  var o = new b.RM(s.x - i.x, s.y - i.y);
                  a.Normalize();
                  o.Normalize();
                  var h = new b.RM(a.y, -a.x);
                  if (b.x5.b2Dot(o, h) > 0) {
                    return false;
                  }
                }
                return true;
              };
              h.updateRemainingVerts = function () {
                var e = this.currentShape.numVerts;
                var n = t.MAX_VERTS - e;
                this.remainingVertsInput.setValue("" + n);
              };
              h.updateTextFields = function () {
                this.updateRemainingVerts();
                this.densityInput.text = "" + this.currentShape.density;
                this.immovableCheck.setValue(this.currentShape.immovable);
                this.asleepCheck.setValue(this.currentShape.sleeping);
                this.densityInput.setValue(this.currentShape.density);
                this.colorInput.setValue(this.currentShape.color);
                this.outlineColorInput.setValue(this.currentShape.outlineColor);
                this.opacityInput.setValue(this.currentShape.opacity);
                this.collisionInput.setValue(this.currentShape.collision);
              };
              t.updateIdCounter = function (e) {
                if (!(e < t.idCounter)) {
                  t.idCounter = e + 1;
                }
              };
              t.resetIdCounter = function () {
                t.idCounter = 0;
              };
              t.getIDCounter = function () {
                return t.idCounter;
              };
              h.resizeElements = function () {
                for (var e = this.currentShape.numVerts, t = 0; t < e; t++) {
                  var n = this.currentShape.getVertAt(t);
                  n.selected = n.selected;
                }
              };
              h.die = function () {
                var t;
                var n;
                var r;
                var i;
                var s;
                var a;
                var h;
                var l;
                var d;
                e.prototype.die.call(this);
                if ((t = this.immovableCheck) !== null && t !== undefined) {
                  t.removeEventListener(o.ON.VALUE_CHANGE, this.inputValueChange);
                }
                if ((n = this.colorInput) !== null && n !== undefined) {
                  n.removeEventListener(o.ON.VALUE_CHANGE, this.inputValueChange);
                }
                if ((r = this.outlineColorInput) !== null && r !== undefined) {
                  r.removeEventListener(o.ON.VALUE_CHANGE, this.inputValueChange);
                }
                if ((i = this.opacityInput) !== null && i !== undefined) {
                  i.removeEventListener(o.ON.VALUE_CHANGE, this.inputValueChange);
                }
                if ((s = this.collisionInput) !== null && s !== undefined) {
                  s.removeEventListener(o.ON.VALUE_CHANGE, this.inputValueChange);
                }
                if ((a = this.immovableCheck) !== null && a !== undefined) {
                  a.die();
                }
                if ((h = this.colorInput) !== null && h !== undefined) {
                  h.die();
                }
                if ((l = this.outlineColorInput) !== null && l !== undefined) {
                  l.die();
                }
                if ((d = this.opacityInput) !== null && d !== undefined) {
                  d.die();
                }
              };
              return t;
            }(m);
            R.MAX_VERTS = b._g.b2_maxPolygonVertices;
            R.MIN_SHAPE_LINE_DISTANCE = 5;
            R.SNAP_DISTANCE = 5;
            R.P_NORMAL = 0;
            R.P_COMPLETE = 1;
            R.P_DONT_UPDATE = 2;
            R.P_REPLACE_PREV = 3;
            R.idCounter = 0;
            var I = n(50328);
            function L(e) {
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
            function j(e, t) {
              j = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return j(e, t);
            }
            var B = function (e) {
              function t(t, n) {
                var r;
                (r = e.call(this, t, n) || this).minDimension = 0.1;
                r.maxDimension = 50;
                r.currentDensity = 1;
                r._innerCutout = 0;
                r.maxDensity = 100;
                r.minDensity = 0.1;
                r.helpMessage = "<u><b>Shape Tool Help:</b></u><br><br>The shape tool works like a stamp and allows you to create new shapes on stage.  Select the type and parameters of the shape you'd like before placing.<br><br><u>Keyboard Shortcuts:</u><br><br><b>a,w,s,d</b>: Resize the height and width of the current shape.  Hold <b>shift</b> to resize faster.<br><br><b>z,x</b>: Rotate the current shape.  Hold <b>shift</b> to rotate faster.";
                r.mouseMoveHandler = function (e) {
                  r.cursorShape.x = r._canvas.mouseX;
                  r.cursorShape.y = r._canvas.mouseY;
                };
                r.mouseDownHandler = function (e) {
                  if (e.target instanceof a.kx) {
                    var t = e.target;
                    if (r._canvas.contains(t)) {
                      r.createNewShape();
                    }
                  }
                };
                r.keyDownHandler = function (e) {
                  if (!(e.target instanceof a.A_)) {
                    switch (e.keyCode) {
                      case 65:
                        r.adjustScale(-1, 0, e.shiftKey);
                        break;
                      case 87:
                        r.adjustScale(0, 1, e.shiftKey);
                        break;
                      case 68:
                        r.adjustScale(1, 0, e.shiftKey);
                        break;
                      case 83:
                        r.adjustScale(0, -1, e.shiftKey);
                        break;
                      case 90:
                        if (!e.ctrlKey) {
                          r.adjustRotation(-1, e.shiftKey);
                        }
                        break;
                      case 88:
                        r.adjustRotation(1, e.shiftKey);
                    }
                  }
                };
                r.shapeChosen = function (e) {
                  var t = e.target;
                  r.selectedButton = t;
                };
                r.inputValueChange = function (e) {
                  var t = e.inputObject.attribute;
                  r.cursorShape[t] = e.value;
                  if (e.resetInputs) {
                    r.updateTextFields();
                  }
                  r.cursorShape.forceDirty();
                  r.editor.cullObjects();
                };
                r.interactiveChange = function (e) {
                  r.cursorShape.interactive = e.value;
                  if (r.cursorShape.interactive) {
                    r.addChild(r.immovableCheck);
                    r.addChild(r.asleepCheck);
                    r.addChild(r.densityInput);
                    r.addChild(r.collisionInput);
                  } else {
                    r.removeChild(r.immovableCheck);
                    r.removeChild(r.asleepCheck);
                    r.removeChild(r.densityInput);
                    r.removeChild(r.collisionInput);
                  }
                  r.window.setDimensions(130, r.height + 5);
                  r.updateTextFields();
                };
                return r;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              j(n, r);
              var i;
              var o;
              var h = t.prototype;
              h.init = function () {
                this.currentShape = t.RECTANGLE;
                this.createCursor();
                var e = 16613761;
                this.rectButton = new s.Ch("Rectangle Shape", e, 120);
                this.rectButton.x = 5;
                this.rectButton.y = 5;
                this.addChild(this.rectButton);
                this.circleButton = new s.Ch("Circle Shape", e, 120);
                this.addChild(this.circleButton);
                this.circleButton.x = 5;
                this.circleButton.y = this.rectButton.y + this.rectButton.height;
                this.triButton = new s.Ch("Triangle Shape", e, 120);
                this.addChild(this.triButton);
                this.triButton.x = 5;
                this.triButton.y = this.circleButton.y + this.circleButton.height;
                this.widthInput = new I.k("width", "shapeWidth", 7, true);
                this.widthInput.restrict = "0-9.";
                this.addChild(this.widthInput);
                this.widthInput.x = 5;
                this.widthInput.y = this.triButton.y + this.triButton.height;
                this.heightInput = new I.k("height", "shapeHeight", 7, true);
                this.heightInput.restrict = "0-9.";
                this.heightInput.x = 5;
                this.heightInput.y = this.widthInput.y + Math.ceil(this.widthInput.height * 1.25);
                this.addChild(this.heightInput);
                this.rotationInput = new I.k("rotation", "angle", 5, true);
                this.rotationInput.restrict = "0-9\\-";
                this.rotationInput.decimals = 0;
                this.rotationInput.x = 5;
                this.rotationInput.y = this.heightInput.y + Math.ceil(this.heightInput.height * 1.25);
                this.addChild(this.rotationInput);
                this.colorInput = new s.AN("shape color", "color", true, true);
                this.colorInput.x = 5;
                this.colorInput.y = this.rotationInput.y + Math.ceil(this.rotationInput.height * 1.25);
                this.addChild(this.colorInput);
                this.outlineColorInput = new s.AN("outline color", "outlineColor", true, true);
                this.outlineColorInput.x = 5;
                this.outlineColorInput.y = this.colorInput.y + Math.ceil(this.colorInput.height);
                this.addChild(this.outlineColorInput);
                this.opacityInput = new s.Cw("opacity", "opacity", 3, true, 0, 100, 100);
                this.opacityInput.restrict = "0-9";
                this.opacityInput.helpCaption = "Transparent shapes are more cpu intensive than opaque shapes, so use transparency sparingly.  Best performance is at 100 or 0.";
                this.opacityInput.x = 5;
                this.opacityInput.y = this.outlineColorInput.y + Math.ceil(this.outlineColorInput.height * 1.25);
                this.addChild(this.opacityInput);
                this.interactiveCheck = new s.oV("interactive", "interactive");
                this.interactiveCheck.y = this.opacityInput.y + Math.ceil(this.opacityInput.height * 1.25);
                this.interactiveCheck.x = 5;
                this.interactiveCheck.helpCaption = "Setting interactive to false will treat the shape like flat artwork.  The shape will only move if part of a group, and will not take away from the total available shapecount allowed in your level.  Useful when just adding visual detail to already interactive larger shapes or groups.";
                this.addChild(this.interactiveCheck);
                this.immovableCheck = new s.oV("fixed", "immovable", true, true, true);
                this.immovableCheck.y = this.interactiveCheck.y + Math.ceil(this.interactiveCheck.height * 1.25);
                this.immovableCheck.x = 5;
                this.immovableCheck.helpCaption = "A fixed object will never move and will support any weight.";
                this.addChild(this.immovableCheck);
                this.asleepCheck = new s.oV("sleeping", "sleeping", false, false);
                this.asleepCheck.y = this.immovableCheck.y + Math.ceil(this.immovableCheck.height * 1.25);
                this.asleepCheck.x = 5;
                this.asleepCheck.helpCaption = "A sleeping object will remain frozen in place until it is touched by any other moving object.";
                this.addChild(this.asleepCheck);
                this.densityInput = new I.k("density", "density", 4, true);
                this.densityInput.restrict = "0-9.";
                this.densityInput.x = 5;
                this.densityInput.y = this.asleepCheck.y + Math.ceil(this.asleepCheck.height * 1.25);
                this.densityInput.helpCaption = "The mass per volume of an object.  The bodies of human characters in this game are set to a density of 1.";
                this.addChild(this.densityInput);
                this.immovableCheck.addChildInput(this.asleepCheck);
                this.immovableCheck.addChildInput(this.densityInput);
                this.collisionInput = s.Ej.buildInput("collision");
                this.collisionInput.x = 5;
                this.collisionInput.y = this.densityInput.y + Math.ceil(this.densityInput.height * 1.25);
                this.addChild(this.collisionInput);
                this.innerCutoutInput = new s.Cw("inner cutout", "innerCutout", 3, true, 0, 100, 100);
                this.innerCutoutInput.restrict = "0-9";
                this.innerCutoutInput.helpCaption = "";
                this.innerCutoutInput.x = 5;
                this.innerCutoutInput.y = this.collisionInput.y + Math.ceil(this.collisionInput.height * 1.25);
                this.rectButton.addEventListener(a.Cm.MOUSE_UP, this.shapeChosen);
                this.circleButton.addEventListener(a.Cm.MOUSE_UP, this.shapeChosen);
                this.triButton.addEventListener(a.Cm.MOUSE_UP, this.shapeChosen);
                this.widthInput.addEventListener(s.vq.VALUE_CHANGE, this.inputValueChange);
                this.heightInput.addEventListener(s.vq.VALUE_CHANGE, this.inputValueChange);
                this.rotationInput.addEventListener(s.vq.VALUE_CHANGE, this.inputValueChange);
                this.immovableCheck.addEventListener(s.vq.VALUE_CHANGE, this.inputValueChange);
                this.colorInput.addEventListener(s.vq.VALUE_CHANGE, this.inputValueChange);
                this.outlineColorInput.addEventListener(s.vq.VALUE_CHANGE, this.inputValueChange);
                this.opacityInput.addEventListener(s.vq.VALUE_CHANGE, this.inputValueChange);
                this.innerCutoutInput.addEventListener(s.vq.VALUE_CHANGE, this.inputValueChange);
                this.collisionInput.addEventListener(s.vq.VALUE_CHANGE, this.inputValueChange);
                this.interactiveCheck.addEventListener(s.vq.VALUE_CHANGE, this.interactiveChange);
                this._selectedButton = this.rectButton;
                this.rectButton.selected = true;
                this.updateTextFields();
              };
              h.createCursor = function () {
                if (this.cursorShape) {
                  this._canvas.removeChild(this.cursorShape);
                }
                switch (this.currentShape) {
                  case t.RECTANGLE:
                    if (this.lastRectangle) {
                      this.cursorShape = this.lastRectangle.clone();
                    } else {
                      this.cursorShape = new s.RX(true);
                      this.cursorShape.shapeWidth = 300;
                      this.cursorShape.shapeHeight = 100;
                    }
                    break;
                  case t.CIRCLE:
                    if (this.lastCircle) {
                      this.cursorShape = this.lastCircle.clone();
                    } else {
                      this.cursorShape = new s.Wf(true);
                      this.cursorShape.shapeWidth = 200;
                      this.cursorShape.shapeHeight = 200;
                    }
                    break;
                  case t.TRIANGLE:
                    if (this.lastTriangle) {
                      this.cursorShape = this.lastTriangle.clone();
                    } else {
                      this.cursorShape = new s.Qu(true);
                      this.cursorShape.shapeWidth = 200;
                      this.cursorShape.shapeHeight = 200;
                    }
                    break;
                  default:
                    throw Error("not a cursor type");
                }
                this.cursorShape.blendMode = a.Nx.INVERT;
              };
              h.activate = function () {
                e.prototype.activate.call(this);
                s.WJ.instance.populate(this.helpMessage);
                this.window.setDimensions(130, this.height + 5);
                this._canvas.addChild(this.cursorShape);
                this.stage.addEventListener(a.Jh.ENTER_FRAME, this.mouseMoveHandler);
                this.stage.addEventListener(a.Cm.MOUSE_DOWN, this.mouseDownHandler);
                this.stage.addEventListener(a.kV.KEY_DOWN, this.keyDownHandler);
              };
              h.deactivate = function () {
                this._canvas.removeChild(this.cursorShape);
                this.colorInput.closeColorSelector();
                this.outlineColorInput.closeColorSelector();
                this.stage.removeEventListener(a.Jh.ENTER_FRAME, this.mouseMoveHandler);
                this.stage.removeEventListener(a.Cm.MOUSE_DOWN, this.mouseDownHandler);
                this.stage.removeEventListener(a.kV.KEY_DOWN, this.keyDownHandler);
                e.prototype.deactivate.call(this);
              };
              h.createNewShape = function () {
                this.cursorShape.forceDirty();
                this._canvas.addRefSprite(this.cursorShape);
                this.cursorShape.blendMode = a.Nx.NORMAL;
                var e = new s.Sl(this.cursorShape, this._canvas, this._canvas.shapes.getChildIndex(this.cursorShape));
                this.dispatchEvent(new s.XP(s.XP.GENERIC, e));
                this.cursorShape = this.cursorShape.clone();
                this.cursorShape.blendMode = a.Nx.INVERT;
                this._canvas.addChild(this.cursorShape);
              };
              h.adjustScale = function (e, t, n) {
                if (n) {
                  e *= 10;
                  t *= 10;
                }
                this.cursorShape.shapeWidth += e;
                this.cursorShape.shapeHeight += t;
                this.updateTextFields();
              };
              h.updateTextFields = function () {
                this.widthInput.text = "" + this.cursorShape.shapeWidth;
                this.heightInput.text = "" + this.cursorShape.shapeHeight;
                this.rotationInput.setValue(this.cursorShape.angle);
                this.densityInput.text = "" + this.cursorShape.density;
                this.interactiveCheck.setValue(this.cursorShape.interactive);
                this.immovableCheck.setValue(this.cursorShape.immovable);
                this.asleepCheck.setValue(this.cursorShape.sleeping);
                this.densityInput.setValue(this.cursorShape.density);
                this.colorInput.setValue(this.cursorShape.color);
                this.outlineColorInput.setValue(this.cursorShape.outlineColor);
                this.opacityInput.setValue(this.cursorShape.opacity);
                this.collisionInput.setValue(this.cursorShape.collision);
              };
              h.adjustRotation = function (e, t) {
                if (t) {
                  e *= 10;
                }
                this.cursorShape.angle += e;
                this.rotationInput.setValue(this.cursorShape.angle);
              };
              h.die = function () {
                var t;
                var n;
                var r;
                var i;
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
                var T;
                e.prototype.die.call(this);
                if ((t = this.rectButton) !== null && t !== undefined) {
                  t.removeEventListener(a.Cm.MOUSE_UP, this.shapeChosen);
                }
                if ((n = this.circleButton) !== null && n !== undefined) {
                  n.removeEventListener(a.Cm.MOUSE_UP, this.shapeChosen);
                }
                if ((r = this.triButton) !== null && r !== undefined) {
                  r.removeEventListener(a.Cm.MOUSE_UP, this.shapeChosen);
                }
                if ((i = this.widthInput) !== null && i !== undefined) {
                  i.removeEventListener(s.vq.VALUE_CHANGE, this.inputValueChange);
                }
                if ((o = this.heightInput) !== null && o !== undefined) {
                  o.removeEventListener(s.vq.VALUE_CHANGE, this.inputValueChange);
                }
                if ((h = this.rotationInput) !== null && h !== undefined) {
                  h.removeEventListener(s.vq.VALUE_CHANGE, this.inputValueChange);
                }
                if ((l = this.immovableCheck) !== null && l !== undefined) {
                  l.removeEventListener(s.vq.VALUE_CHANGE, this.inputValueChange);
                }
                if ((d = this.colorInput) !== null && d !== undefined) {
                  d.removeEventListener(s.vq.VALUE_CHANGE, this.inputValueChange);
                }
                if ((c = this.outlineColorInput) !== null && c !== undefined) {
                  c.removeEventListener(s.vq.VALUE_CHANGE, this.inputValueChange);
                }
                if ((u = this.opacityInput) !== null && u !== undefined) {
                  u.removeEventListener(s.vq.VALUE_CHANGE, this.inputValueChange);
                }
                if ((p = this.innerCutoutInput) !== null && p !== undefined) {
                  p.removeEventListener(s.vq.VALUE_CHANGE, this.inputValueChange);
                }
                if ((m = this.collisionInput) !== null && m !== undefined) {
                  m.removeEventListener(s.vq.VALUE_CHANGE, this.inputValueChange);
                }
                if ((f = this.interactiveCheck) !== null && f !== undefined) {
                  f.removeEventListener(s.vq.VALUE_CHANGE, this.interactiveChange);
                }
                if ((_ = this.widthInput) !== null && _ !== undefined) {
                  _.die();
                }
                if ((v = this.heightInput) !== null && v !== undefined) {
                  v.die();
                }
                if ((y = this.rotationInput) !== null && y !== undefined) {
                  y.die();
                }
                if ((g = this.interactiveCheck) !== null && g !== undefined) {
                  g.die();
                }
                if ((w = this.immovableCheck) !== null && w !== undefined) {
                  w.die();
                }
                if ((x = this.colorInput) !== null && x !== undefined) {
                  x.die();
                }
                if ((b = this.outlineColorInput) !== null && b !== undefined) {
                  b.die();
                }
                if ((T = this.opacityInput) !== null && T !== undefined) {
                  T.die();
                }
              };
              i = t;
              if (o = [{
                key: "innerCutout",
                get: function () {
                  return this._innerCutout;
                },
                set: function (e) {
                  if (e < 0) {
                    e = 0;
                  }
                  if (e > 100) {
                    e = 100;
                  }
                  this._innerCutout = e;
                }
              }, {
                key: "selectedButton",
                get: function () {
                  return this._selectedButton;
                },
                set: function (e) {
                  if (e != this._selectedButton) {
                    this._selectedButton.selected = false;
                    this._selectedButton = e;
                    this._selectedButton.selected = true;
                    if (this.contains(this.innerCutoutInput)) {
                      this.removeChild(this.innerCutoutInput);
                    }
                    switch (this._selectedButton) {
                      case this.rectButton:
                        this.currentShape = t.RECTANGLE;
                        break;
                      case this.circleButton:
                        this.addChild(this.innerCutoutInput);
                        this.currentShape = t.CIRCLE;
                        break;
                      case this.triButton:
                        this.currentShape = t.TRIANGLE;
                    }
                    if (this.cursorShape instanceof s.RX) {
                      this.lastRectangle = this.cursorShape.clone();
                    } else if (this.cursorShape instanceof s.Wf) {
                      this.lastCircle = this.cursorShape.clone();
                    } else if (this.cursorShape instanceof s.Qu) {
                      this.lastTriangle = this.cursorShape.clone();
                    }
                    this.createCursor();
                    this._canvas.addChild(this.cursorShape);
                    this.updateTextFields();
                    this.window.setDimensions(130, this.height + 5);
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
                    Object.defineProperty(e, L(r.key), r);
                  }
                })(i.prototype, o);
              }
              Object.defineProperty(i, "prototype", {
                writable: false
              });
              return i;
            }(m);
            B.RECTANGLE = "rectangle";
            B.CIRCLE = "circle";
            B.TRIANGLE = "triangle";
            var D = n(12151);
            function F(e, t) {
              F = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return F(e, t);
            }
            var N = function (e) {
              function t(t, n) {
                var r;
                (r = e.call(this, t, n) || this).windowWidth = 130;
                r.indent = 5;
                r.helpMessage = "<u><b>Special Tool Help:</b></u><br><br>The special tool allows you to create new special objects on this.stage.  Choose your special object from the list on the right.  Set parameters of the object before placing.  Some of the simpler special items can be grouped or used in joints.  You <b>must</b> place a finish line if you'd like users to be able to complete your level.<br><br><u>Keyboard Shortcuts:</u><br><br><b>a,w,s,d</b>: Resize the height and width of the current object (if possible).  Hold <b>shift</b> to resize faster.<br><br><b>z,x</b>: Rotate the current object (if possible).  Hold <b>shift</b> to rotate faster.";
                r.mouseMoveHandler = function (e) {
                  r.cursorShape.x = r._canvas.mouseX;
                  r.cursorShape.y = r._canvas.mouseY;
                  r.cursorShape.mouseChildren = false;
                };
                r.specialChosen = function (e) {
                  r.populate(r.menu.selectedClassName);
                  r._canvas.addChild(r.cursorShape);
                  r.cursorShape.forceDirty();
                };
                r.inputValueChange = function (e) {
                  var t = e.inputObject;
                  var n = t.attribute;
                  r.cursorShape[n] = e.value;
                  r.updateInput(t);
                  r.cursorShape.forceDirty();
                  r.editor.cullObjects();
                };
                r.mouseDownHandler = function (e) {
                  if (e.target instanceof a.kx) {
                    var t = e.target;
                    if (r._canvas.contains(t)) {
                      r.createNewShape();
                    }
                  }
                };
                r.keyDownHandler = function (e) {
                  switch (e.keyCode) {
                    case 65:
                      r.adjustScale(-1, 0, e.shiftKey);
                      break;
                    case 87:
                      r.adjustScale(0, 1, e.shiftKey);
                      break;
                    case 68:
                      r.adjustScale(1, 0, e.shiftKey);
                      break;
                    case 83:
                      r.adjustScale(0, -1, e.shiftKey);
                      break;
                    case 90:
                      if (!e.ctrlKey) {
                        r.adjustRotation(-1, e.shiftKey);
                      }
                      break;
                    case 88:
                      r.adjustRotation(1, e.shiftKey);
                  }
                };
                return r;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              F(n, r);
              var i = t.prototype;
              i.init = function () {
                this.inputs = [];
                this.menu = new s.Tu();
                this.populate("IBeamRef");
              };
              i.activate = function () {
                e.prototype.activate.call(this);
                s.WJ.instance.populate(this.helpMessage);
                this.window.setDimensions(this.windowWidth, this.height + 5);
                this.menuWindow = new s.p8(false, this.menu);
                this.menuWindow.x = 900 - (this.menuWindow.width + 20);
                this.menuWindow.y = 500 - (this.menuWindow.height + 20);
                this._canvas.parent.parent.addChild(this.menuWindow);
                this._canvas.addChild(this.cursorShape);
                this.stage.addEventListener(a.Jh.ENTER_FRAME, this.mouseMoveHandler);
                this.stage.addEventListener(a.Cm.MOUSE_DOWN, this.mouseDownHandler);
                this.stage.addEventListener(a.kV.KEY_DOWN, this.keyDownHandler);
                this.menu.addEventListener(s.Tu.SPECIAL_CHOSEN, this.specialChosen);
              };
              i.deactivate = function () {
                this.menuWindow.closeWindow();
                this._canvas.removeChild(this.cursorShape);
                this.stage.removeEventListener(a.Jh.ENTER_FRAME, this.mouseMoveHandler);
                this.stage.removeEventListener(a.Cm.MOUSE_DOWN, this.mouseDownHandler);
                this.stage.removeEventListener(a.kV.KEY_DOWN, this.keyDownHandler);
                this.menu.removeEventListener(s.Tu.SPECIAL_CHOSEN, this.specialChosen);
                e.prototype.deactivate.call(this);
              };
              i.populate = function (e) {
                this.removeInputs();
                var t = (0, D.k)(e, null);
                if (t) {
                  if (this.cursorShape) {
                    this._canvas.removeChild(this.cursorShape);
                    this.cursorShape = null;
                  }
                  this.cursorShape = new t();
                  this.cursorShape.blendMode = a.Nx.INVERT;
                  var n = 0;
                  for (var r = 0; r < this.cursorShape.attributes.length; r++) {
                    var i = this.cursorShape.attributes[r];
                    if (i != "x" && i != "y") {
                      var o = s.Ej.buildInput(i);
                      o.y = n;
                      o.x = this.indent;
                      this.addChild(o);
                      o.addEventListener(s.vq.VALUE_CHANGE, this.inputValueChange);
                      this.inputs.push(o);
                      n += o.height * 1.25;
                      if (o.childInputs) {
                        for (var h = 0; h < o.childInputs.length; h++) {
                          var l = o.childInputs[h];
                          l.y = n;
                          l.x = this.indent;
                          this.addChild(l);
                          n += l.height * 1.25;
                        }
                      }
                      this.updateInput(o);
                    }
                  }
                  if (this.window) {
                    this.window.setDimensions(this.windowWidth, this.height + 5);
                  }
                  this.cursorShape.forceDirty();
                }
              };
              i.removeInputs = function () {
                for (var e = 0; e < this.inputs.length; e++) {
                  for (var t = this.inputs[e], n = 0; n < t.childInputs.length; n++) {
                    var r = t.childInputs[n];
                    this.removeChild(r);
                  }
                  t.removeEventListener(s.vq.VALUE_CHANGE, this.inputValueChange);
                  t.die();
                  this.removeChild(t);
                }
                this.inputs = [];
              };
              i.updateInputValues = function () {
                for (var e = 0; e < this.inputs.length; e++) {
                  var t = this.inputs[e];
                  this.updateInput(t);
                }
              };
              i.updateInput = function (e) {
                var t = e.attribute;
                var n = this.cursorShape[t];
                e.setValue(n);
                for (var r = 0; r < e.childInputs.length; r++) {
                  var i = e.childInputs[r];
                  this.updateInput(i);
                }
              };
              i.adjustScale = function (e, t, n) {
                if (this.cursorShape.scalable) {
                  if (n) {
                    e *= 10;
                    t *= 10;
                  }
                  this.cursorShape.shapeWidth += e;
                  this.cursorShape.shapeHeight += t;
                  this.updateInputValues();
                  this.cursorShape.forceDirty();
                }
              };
              i.adjustRotation = function (e, t) {
                if (this.cursorShape.rotatable) {
                  if (t) {
                    e *= 10;
                  }
                  this.cursorShape.angle += e;
                  this.updateInputValues();
                  this.cursorShape.forceDirty();
                }
              };
              i.createNewShape = function () {
                var e = this.cursorShape.clone();
                this._canvas.addRefSprite(e);
                e.forceDirty();
                var t = new s.Sl(e, this._canvas, this._canvas.special.getChildIndex(e));
                this.dispatchEvent(new s.XP(s.XP.GENERIC, t));
              };
              i.die = function () {
                var t;
                if ((t = this.menu) !== null && t !== undefined) {
                  t.die();
                }
                e.prototype.die.call(this);
              };
              return t;
            }(m);
            function G(e, t) {
              G = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return G(e, t);
            }
            var U = function (e) {
              function t(t, n) {
                var r;
                (r = e.call(this, t, n) || this).helpMessage = "<u><b>Text Tool Help:</b></u><br><br>Make some text.<br><br>Once placing text, type to enter your message.  Using the selection tool, you can double click on a previously placed text box to edit what you've typed.<br><br>If you'd like your text to move around, you can group it with other groupable objects.";
                r.mouseMoveHandler = function (e = null) {
                  r.cursorShape.x = r._canvas.mouseX;
                  r.cursorShape.y = r._canvas.mouseY;
                };
                r.mouseDownHandler = function (e) {
                  if (e.target instanceof a.kx) {
                    var n = e.target;
                    if (n == r._canvas || n.parent == r._canvas || n.parent?.parent == r._canvas) {
                      r.createNewTextBox();
                    }
                  }
                };
                r.keyDownHandler = function (e) {
                  switch (e.keyCode) {
                    case 90:
                      if (!e.ctrlKey) {
                        r.adjustRotation(-1, e.shiftKey);
                      }
                      break;
                    case 88:
                      r.adjustRotation(1, e.shiftKey);
                  }
                };
                r.inputValueChange = function (e) {
                  var t = e.inputObject.attribute;
                  r.cursorShape[t] = e.value;
                  r.updateInputs();
                  r.cursorShape.forceDirty();
                  r.editor.cullObjects();
                };
                return r;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              G(n, r);
              var i = t.prototype;
              i.init = function () {
                this.createCursor();
                this.rotationInput = new I.k("rotation", "angle", 5, true);
                this.rotationInput.restrict = "0-9\\-";
                this.rotationInput.x = 5;
                this.rotationInput.y = 0;
                this.rotationInput.decimals = 0;
                this.addChild(this.rotationInput);
                this.colorInput = new s.AN("color", "color", true);
                this.colorInput.y = this.rotationInput.y + Math.ceil(this.rotationInput.height * 1.25);
                this.colorInput.x = 5;
                this.addChild(this.colorInput);
                this.fontInput = new s.Cw("font", "font", 1, true, 1, 5, 4);
                this.fontInput.y = this.colorInput.y + Math.ceil(this.colorInput.height);
                this.fontInput.x = 5;
                this.addChild(this.fontInput);
                this.sizeInput = new s.Cw("font size", "fontSize", 3, true, 10, 100, 90);
                this.sizeInput.y = this.fontInput.y + Math.ceil(this.fontInput.height * 1.25);
                this.sizeInput.x = 5;
                this.addChild(this.sizeInput);
                this.alignInput = new s.Cw("alignment", "align", 1, true, 1, 3, 2);
                this.alignInput.y = this.sizeInput.y + Math.ceil(this.sizeInput.height * 1.25);
                this.alignInput.x = 5;
                this.addChild(this.alignInput);
                this.rotationInput.addEventListener(s.vq.VALUE_CHANGE, this.inputValueChange);
                this.colorInput.addEventListener(s.vq.VALUE_CHANGE, this.inputValueChange);
                this.fontInput.addEventListener(s.vq.VALUE_CHANGE, this.inputValueChange);
                this.sizeInput.addEventListener(s.vq.VALUE_CHANGE, this.inputValueChange);
                this.alignInput.addEventListener(s.vq.VALUE_CHANGE, this.inputValueChange);
                this.updateInputs();
              };
              i.createCursor = function () {
                this.cursorShape = new s.ee(0);
                this.cursorShape.blendMode = a.Nx.INVERT;
              };
              i.activate = function () {
                e.prototype.activate.call(this);
                s.WJ.instance.populate(this.helpMessage);
                this.window.setDimensions(130, 180);
                this._canvas.addChild(this.cursorShape);
                this.stage.addEventListener(a.Cm.MOUSE_MOVE, this.mouseMoveHandler);
                this.stage.addEventListener(a.Cm.MOUSE_DOWN, this.mouseDownHandler);
                this.stage.addEventListener(a.kV.KEY_DOWN, this.keyDownHandler);
              };
              i.deactivate = function () {
                this._canvas.removeChild(this.cursorShape);
                this.colorInput.closeColorSelector();
                this.stage.removeEventListener(a.Cm.MOUSE_MOVE, this.mouseMoveHandler);
                this.stage.removeEventListener(a.Cm.MOUSE_DOWN, this.mouseDownHandler);
                this.stage.removeEventListener(a.kV.KEY_DOWN, this.keyDownHandler);
                e.prototype.deactivate.call(this);
              };
              i.adjustRotation = function (e, t) {
                if (this.cursorShape.rotatable) {
                  if (t) {
                    e *= 10;
                  }
                  this.cursorShape.angle += e;
                  this.updateInputs();
                }
              };
              i.updateInputs = function () {
                this.rotationInput.setValue(this.cursorShape.angle);
                this.colorInput.setValue(this.cursorShape.color);
                this.fontInput.setValue(this.cursorShape.font);
                this.sizeInput.setValue(this.cursorShape.fontSize);
                this.alignInput.setValue(this.cursorShape.align);
              };
              i.createNewTextBox = function () {
                var e = this.cursorShape.clone();
                this.canvas.addRefSprite(e);
                var t = new s.Sl(e, this.canvas, this.canvas.special.getChildIndex(e));
                this.dispatchEvent(new s.XP(s.XP.GENERIC, t));
                setTimeout(function () {
                  e.textField.startEditing();
                  if (e.textField._pixiTextInput) {
                    e.textField._pixiTextInput.select();
                  }
                }, 50);
              };
              i.die = function () {
                var t;
                var n;
                var r;
                var i;
                var a;
                var o;
                var h;
                var l;
                e.prototype.die.call(this);
                if ((t = this.colorInput) !== null && t !== undefined) {
                  t.addEventListener(s.vq.VALUE_CHANGE, this.inputValueChange);
                }
                if ((n = this.fontInput) !== null && n !== undefined) {
                  n.addEventListener(s.vq.VALUE_CHANGE, this.inputValueChange);
                }
                if ((r = this.sizeInput) !== null && r !== undefined) {
                  r.removeEventListener(s.vq.VALUE_CHANGE, this.inputValueChange);
                }
                if ((i = this.alignInput) !== null && i !== undefined) {
                  i.removeEventListener(s.vq.VALUE_CHANGE, this.inputValueChange);
                }
                if ((a = this.colorInput) !== null && a !== undefined) {
                  a.die();
                }
                if ((o = this.fontInput) !== null && o !== undefined) {
                  o.die();
                }
                if ((h = this.sizeInput) !== null && h !== undefined) {
                  h.die();
                }
                if ((l = this.alignInput) !== null && l !== undefined) {
                  l.die();
                }
              };
              return t;
            }(m);
            function V(e, t) {
              V = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                e.__proto__ = t;
                return e;
              };
              return V(e, t);
            }
            var H = function (e) {
              function t(t, n) {
                var r;
                (r = e.call(this, t, n) || this).windowWidth = 130;
                r.indent = 5;
                r.helpMessage = "<u><b>Trigger Tool Help:</b></u><br><br>The trigger tool allows you to trigger certain actions during gameplay. When the player passes through the defined shape, the selected action will occur.<br><br>If activate object is selected, you must attach the trigger to the desired object, similarly to a joint. Many times this is just waking a sleeping object, but that will be expanded in the future. Mines for example will explode when activated. Boosts and fans will turn on.<br><br>Sound effects can also be triggered. Currently you only have use of the sounds currently used in the game.<br><br><b>Tip:</b> You can disable the trigger lines in the editor menu.<br><br><u>Keyboard Shortcuts:</u><br><br><b>a,w,s,d</b>: Resize the height and width of the trigger.  Hold <b>shift</b> to resize faster.<br><br><b>z,x</b>: Rotate the trigger. Hold <b>shift</b> to rotate faster.";
                r.mouseMoveHandler = function (e) {
                  r.cursorShape.x = r._canvas.mouseX;
                  r.cursorShape.y = r._canvas.mouseY;
                  r.cursorShape.mouseChildren = false;
                };
                r.inputValueChange = function (e) {
                  var t = e.inputObject;
                  var n = t.attribute;
                  r.cursorShape[n] = e.value;
                  r.updateInput(t);
                  if (n == "triggerType") {
                    var i = r.inputs.indexOf(t);
                    r.removeInputs(i + 1);
                    r.populate();
                  }
                };
                r.mouseDownHandler = function (e) {
                  if (e.target instanceof a.kx) {
                    var t = e.target;
                    if (t == r._canvas || t.parent == r._canvas) {
                      r.createNewShape();
                    }
                  }
                };
                r.keyDownHandler = function (e) {
                  switch (e.keyCode) {
                    case 65:
                      r.adjustScale(-1, 0, e.shiftKey);
                      break;
                    case 87:
                      r.adjustScale(0, 1, e.shiftKey);
                      break;
                    case 68:
                      r.adjustScale(1, 0, e.shiftKey);
                      break;
                    case 83:
                      r.adjustScale(0, -1, e.shiftKey);
                      break;
                    case 90:
                      if (!e.ctrlKey) {
                        r.adjustRotation(-1, e.shiftKey);
                      }
                      break;
                    case 88:
                      r.adjustRotation(1, e.shiftKey);
                  }
                };
                return r;
              }
              var n;
              var r;
              r = e;
              (n = t).prototype = Object.create(r.prototype);
              n.prototype.constructor = n;
              V(n, r);
              var i = t.prototype;
              i.init = function () {
                this.inputs = [];
                this.cursorShape = new s.Qs(true);
                this.cursorShape.forceDirty();
                this.cursorShape.blendMode = a.Nx.INVERT;
                this.cursorShape.excludeFromCulling = true;
                this.populate();
              };
              i.activate = function () {
                e.prototype.activate.call(this);
                s.WJ.instance.populate(this.helpMessage);
                this.window.setDimensions(this.windowWidth, this.height + 5);
                this._canvas.addChild(this.cursorShape);
                this.stage.addEventListener(a.Jh.ENTER_FRAME, this.mouseMoveHandler);
                this.stage.addEventListener(a.Cm.MOUSE_DOWN, this.mouseDownHandler);
                this.stage.addEventListener(a.kV.KEY_DOWN, this.keyDownHandler);
              };
              i.deactivate = function () {
                this._canvas.removeChild(this.cursorShape);
                this.stage.removeEventListener(a.Jh.ENTER_FRAME, this.mouseMoveHandler);
                this.stage.removeEventListener(a.Cm.MOUSE_DOWN, this.mouseDownHandler);
                this.stage.removeEventListener(a.kV.KEY_DOWN, this.keyDownHandler);
                e.prototype.deactivate.call(this);
              };
              i.populate = function () {
                this.removeInputs();
                var e = 0;
                for (var t = this.inputs.length; t < this.cursorShape.attributes.length; t++) {
                  var n = this.cursorShape.attributes[t];
                  if (n != "x" && n != "y") {
                    var r = s.Ej.buildInput(n);
                    r.y = e;
                    r.x = this.indent;
                    this.addChild(r);
                    r.addEventListener(s.vq.VALUE_CHANGE, this.inputValueChange);
                    this.inputs.push(r);
                    e += r.height * 1.25;
                    if (r.childInputs) {
                      for (var i = 0; i < r.childInputs.length; i++) {
                        var a = r.childInputs[i];
                        a.y = e;
                        a.x = this.indent;
                        this.addChild(a);
                        e += a.height * 1.25;
                      }
                    }
                    this.updateInput(r);
                  }
                  this.editor.cullObjects();
                }
                if (this.window) {
                  this.window.setDimensions(this.windowWidth, this.height + 5);
                }
              };
              i.removeInputs = function (e = 0) {
                for (var t = e; t < this.inputs.length; t++) {
                  for (var n = this.inputs[t], r = 0; r < n.childInputs.length; r++) {
                    var i = n.childInputs[r];
                    this.removeChild(i);
                  }
                  n.removeEventListener(s.vq.VALUE_CHANGE, this.inputValueChange);
                  n.die();
                  this.removeChild(n);
                  this.inputs.splice(t, 1);
                  t--;
                }
              };
              i.updateInputValues = function () {
                for (var e = 0; e < this.inputs.length; e++) {
                  var t = this.inputs[e];
                  this.updateInput(t);
                }
              };
              i.updateInput = function (e) {
                var t = e.attribute;
                var n = this.cursorShape[t];
                e.setValue(n);
                for (var r = 0; r < e.childInputs.length; r++) {
                  var i = e.childInputs[r];
                  this.updateInput(i);
                }
              };
              i.adjustScale = function (e, t, n) {
                if (this.cursorShape.scalable) {
                  if (n) {
                    e *= 10;
                    t *= 10;
                  }
                  this.cursorShape.shapeWidth += e;
                  this.cursorShape.shapeHeight += t;
                  this.updateInputValues();
                }
              };
              i.adjustRotation = function (e, t) {
                if (this.cursorShape.rotatable) {
                  if (t) {
                    e *= 10;
                  }
                  this.cursorShape.angle += e;
                  this.updateInputValues();
                }
              };
              i.createNewShape = function () {
                var e = this.cursorShape.clone();
                this._canvas.addRefSprite(e);
                this._canvas.relabelTriggers();
                var t = new s.Sl(e, this._canvas, this._canvas.triggers.getChildIndex(e));
                this.dispatchEvent(new s.XP(s.XP.GENERIC, t));
              };
              i.die = function () {
                e.prototype.die.call(this);
              };
              return t;
            }(m);
          }
    });
})();
