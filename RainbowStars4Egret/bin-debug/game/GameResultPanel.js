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
var GameResultPanel = (function (_super) {
    __extends(GameResultPanel, _super);
    function GameResultPanel() {
        var _this = _super.call(this) || this;
        _this.skinName = "GameResultPanelSkin";
        return _this;
    }
    GameResultPanel.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        console.log("childrenCreated");
    };
    GameResultPanel.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.backBtn.addEventListener("touchTap", this.onBack, this);
        console.log("childrenCreated");
    };
    GameResultPanel.prototype.setFail = function () {
        this.failImg.visible = true;
        this.completeImg.visible = false;
        this.nextLevelBtn.visible = false;
        this.replayBtn.visible = true;
    };
    GameResultPanel.prototype.setSuccess = function () {
        this.failImg.visible = !true;
        this.completeImg.visible = !false;
        this.nextLevelBtn.visible = !false;
        this.replayBtn.visible = !true;
    };
    GameResultPanel.prototype.setGameOver = function () {
        this.setFail();
        this.replayBtn.visible = false;
    };
    GameResultPanel.prototype.onBack = function () {
        App.closeAllPanel();
        App.runScene(App.startPanel);
    };
    return GameResultPanel;
}(eui.Component));
__reflect(GameResultPanel.prototype, "GameResultPanel", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=GameResultPanel.js.map