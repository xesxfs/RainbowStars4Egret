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
var LevelItem = (function (_super) {
    __extends(LevelItem, _super);
    function LevelItem() {
        var _this = _super.call(this) || this;
        _this.level = 0;
        return _this;
    }
    LevelItem.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    LevelItem.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.touchChildren = false;
    };
    LevelItem.prototype.setLevel = function (level) {
        this.level = level;
        this.levelLab.text = (~~level).toString();
    };
    LevelItem.prototype.setLock = function (isLock) {
        this.touchEnabled = !isLock;
        this.lockImg.visible = isLock;
        this.getChildAt(0).visible = !isLock;
        this.getChildAt(1).visible = isLock;
        this.getChildAt(2).visible = !isLock;
        this.getChildAt(3).visible = isLock;
    };
    return LevelItem;
}(eui.Component));
__reflect(LevelItem.prototype, "LevelItem", ["eui.UIComponent", "egret.DisplayObject"]);
window["LevelItem"] = LevelItem;
//# sourceMappingURL=LevelItem.js.map