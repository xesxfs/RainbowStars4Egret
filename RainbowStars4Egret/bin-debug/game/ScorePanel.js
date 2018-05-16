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
var ScorePanel = (function (_super) {
    __extends(ScorePanel, _super);
    function ScorePanel() {
        return _super.call(this) || this;
    }
    ScorePanel.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    ScorePanel.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.backBtn.addEventListener("touchTap", this.onBack, this);
    };
    ScorePanel.prototype.onBack = function () {
        App.closePanel(this);
    };
    return ScorePanel;
}(eui.Component));
__reflect(ScorePanel.prototype, "ScorePanel", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=ScorePanel.js.map