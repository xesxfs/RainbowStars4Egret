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
        var _this = _super.call(this) || this;
        _this.curPage = 1;
        _this.isInit = false;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onEnable, _this);
        _this.skinName = "LevelsPanelSkin";
        return _this;
    }
    LevelsPanel.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.totalPage = Math.ceil(GameData.GOAL_BALLS.length / 10);
        // this.addEventListener("touchTap", () => { App.closePanel(this) }, this)
        this.nextBtn.addEventListener("touchTap", this.onNextPage, this);
        this.addEventListener("touchTap", this.selectLevel, this);
        this.isInit = true;
        this.setPageData();
    };
    LevelsPanel.prototype.onEnable = function () {
        console.log("onEnable");
        if (this.isInit)
            this.setPageData();
    };
    LevelsPanel.prototype.setPageData = function () {
        for (var i = 0; i < 10; i++) {
            var levItem = this.getChildAt(i + 3);
            var lv = (this.curPage - 1) * 10 + i;
            if (lv > GameData.GOAL_BALLS.length) {
                levItem.visible = false;
            }
            else {
                levItem.visible = true;
                levItem.setLevel(lv + 1);
            }
            if (GameData.lockingLv > lv) {
                levItem.setLock(false);
            }
            else {
                levItem.setLock(true);
            }
        }
        this.pageLab.text = this.curPage.toString() + " / " + this.totalPage.toString();
    };
    LevelsPanel.prototype.onNextPage = function () {
        if (this.curPage < this.totalPage) {
            this.curPage++;
        }
        else {
            this.curPage = 1;
        }
        this.setPageData();
    };
    LevelsPanel.prototype.selectLevel = function (e) {
        if (e.target instanceof LevelItem) {
            var lvItem = e.target;
            GameData.level = lvItem.level;
            App.game.startGame();
            App.runScene(App.game);
            App.closePanel(this);
        }
    };
    return LevelsPanel;
}(eui.Component));
__reflect(LevelsPanel.prototype, "LevelsPanel");
