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
var game;
(function (game) {
    var Cursor = (function (_super) {
        __extends(Cursor, _super);
        function Cursor() {
            return _super.call(this) || this;
            // this.Sta = game.Cursor_Sta;
            // this.drawBall();
        }
        Object.defineProperty(Cursor.prototype, "radius", {
            get: function () {
                return this._radius * 1.5;
            },
            enumerable: true,
            configurable: true
        });
        // public set radius(value: number) {
        // 	egret.superSetter(game.Cursor, this, "radius", value);
        // }
        Cursor.prototype.drawBall = function () {
            this.Star_game_Cursor = new egret.Bitmap(RES.getRes("cursor_star_png"));
            var _self__ = this;
            this._asset = this.Star_game_Cursor;
            this._asset.scaleX = this._asset.scaleY = 0.5;
            this._asset.x = -this._asset.width * 0.5 * this._asset.scaleX;
            this._asset.y = -this._asset.height * 0.5 * this._asset.scaleY;
            _self__.addChild(this._asset);
            console.log("cursor");
        };
        Cursor.prototype.onEnterFrame = function (e) {
            var _self__ = this;
            _self__.dispatchEvent(new egret.Event(game.Ball.EXPAND));
        };
        return Cursor;
    }(game.Ball));
    game.Cursor = Cursor;
    __reflect(Cursor.prototype, "game.Cursor");
})(game || (game = {}));
