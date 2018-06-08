var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var App = (function () {
    function App() {
    }
    App.startUp = function () {
        this.startPanel = new StartPanel();
        this.gameResult = new GameResultPanel();
        this.levelPanel = new LevelsPanel();
        this.scorePanel = new ScorePanel();
        this.game = new game.Game();
        this.scene = new eui.UILayer();
        this.panel = new eui.UILayer();
        this.loadData();
        this.panel.touchThrough = true;
        egret.MainContext.instance.stage.addChild(this.scene);
        egret.MainContext.instance.stage.addChild(this.panel);
        this.runScene(this.startPanel);
    };
    App.runScene = function (scene) {
        this.scene.removeChildren();
        this.scene.addChild(scene);
    };
    App.openPanel = function (panel) {
        this.panel.addChild(panel);
    };
    App.closePanel = function (panel) {
        if (this.panel.contains(panel)) {
            this.panel.removeChild(panel);
        }
    };
    App.closeAllPanel = function () {
        this.panel.removeChildren();
    };
    App.loadData = function () {
        var lv = egret.localStorage.getItem("lockingLv");
        GameData.lockingLv = lv ? (isNaN(parseInt(lv)) ? 1 : parseInt(lv)) : 1;
        console.log("lockingLv:", GameData.lockingLv);
    };
    return App;
}());
__reflect(App.prototype, "App");
//# sourceMappingURL=App.js.map