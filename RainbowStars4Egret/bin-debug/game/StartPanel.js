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
var StartPanel = (function (_super) {
    __extends(StartPanel, _super);
    function StartPanel() {
        return _super.call(this) || this;
    }
    StartPanel.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    StartPanel.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.addEventListener("touchTap", this.onclick, this);
    };
    StartPanel.prototype.onclick = function (e) {
        switch (e.target) {
            case this.startBtn:
                App.runScene(App.game);
                App.game.startGame();
                break;
            case this.scoreBtn:
                App.openPanel(App.scorePanel);
                break;
            case this.levelBtn:
                App.openPanel(App.levelPanel);
                break;
            case this.shareBtn:
                break;
            case this.soundBtn:
                break;
        }
    };
    return StartPanel;
}(eui.Component));
__reflect(StartPanel.prototype, "StartPanel", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=StartPanel.js.map