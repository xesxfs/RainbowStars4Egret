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
        var _this = _super.call(this) || this;
        _this.skinName = "ScorePanelSkin";
        return _this;
    }
    ScorePanel.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    ScorePanel.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.backBtn.addEventListener("touchTap", this.onBack, this);
        // (this.scoreList.dataProvider as eui.ArrayCollection).removeAll();
        console.log("ScorePanel");
    };
    ScorePanel.prototype.onBack = function () {
        App.closePanel(this);
    };
    ScorePanel.prototype.addScore = function (lv, score) {
        var arr = this.scoreList.dataProvider;
        var item = arr.getItemAt(lv);
        if (item) {
            item.score = score;
            arr.itemUpdated(item);
        }
        else {
            arr.addItem({ level: lv, score: score });
        }
        arr.refresh();
    };
    return ScorePanel;
}(eui.Component));
__reflect(ScorePanel.prototype, "ScorePanel");
//# sourceMappingURL=ScorePanel.js.map