var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var LevelsPanel = (function (_super) {
    __extends(LevelsPanel, _super);
    function LevelsPanel() {
        return _super.call(this) || this;
    }
    LevelsPanel.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    LevelsPanel.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        this.addEventListener("touchTap", function () { App.closePanel(_this); }, this);
    };
    return LevelsPanel;
}(eui.Component));
__reflect(LevelsPanel.prototype, "LevelsPanel", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=LevelsPanel.js.map