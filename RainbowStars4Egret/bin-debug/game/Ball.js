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
    var Ball = (function (_super) {
        __extends(Ball, _super);
        function Ball() {
            var _this = _super.call(this) || this;
            _this._isExpand = false;
            _this._radius = 0;
            _this._expandScaleValue = 4;
            _this._maxSpeed = 1.5;
            _this._clockwizeRotation = -1;
            _this._dx = 0;
            _this._dy = 0;
            _this.Star = new egret.Bitmap(RES.getRes("star_png"));
            _this._dx = 2 + Math.random() * _this._maxSpeed;
            _this._dy = 2 + Math.random() * _this._maxSpeed;
            _this._dx = _this._dx * (Math.random() < 0.5 ? 1 : -1);
            _this._dy = _this._dy * (Math.random() < 0.5 ? 1 : -1);
            if (Math.random() < 0.5) {
                _this._clockwizeRotation = (1);
            }
            _this.x = Math.random() * game.Game.stageW;
            _this.y = Math.random() * game.Game.stageH;
            _this.addEventListener(egret.Event.ENTER_FRAME, _this.onEnterFrame, _this);
            _this.drawBall();
            return _this;
        }
        /****扩大更新 */
        Ball.prototype.onExpandUpdate = function () {
            this.dispatchEvent(new egret.Event(game.Ball.EXPAND));
        };
        /***停止与移除 */
        Ball.prototype.stopAndDissappear = function () {
            var _self__ = this;
            _self__.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
            // gs.TweenMax.to_static_gs_TweenMax(this, 2, { "scaleX": 0, "scaleY": 0, "onComplete": flash.bind(this.reportRemove, this) });
            egret.Tween.get(this).to({ "scaleX": 0, "scaleY": 0 }, 200).call(this.reportRemove, this);
        };
        Object.defineProperty(Ball.prototype, "radius", {
            get: function () {
                return this._radius;
            },
            set: function (value) {
                this._radius = value;
            },
            enumerable: true,
            configurable: true
        });
        Ball.prototype.reportRemove = function () {
            var _self__ = this;
            if (game.Ball.activated > 0) {
                game.Ball.activated--;
            }
            _self__.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
            _self__.dispatchEvent(new egret.Event(game.Ball.REMOVE));
            if (game.Ball.activated == 0) {
                _self__.dispatchEvent(new egret.Event(game.Ball.END_ALL));
            }
        };
        /***扩大 */
        Ball.prototype.expand = function () {
            var _self__ = this;
            if (this._isExpand) {
                return;
            }
            _self__.dispatchEvent(new egret.Event(game.Ball.START_EXPAND));
            game.Ball.activated++;
            // gs.TweenMax.to_static_gs_TweenMax(this, 1, { "scaleX": this._expandScaleValue, "scaleY": this._expandScaleValue, "onComplete": flash.bind(this.collapse, this), "onUpdate": flash.bind(this.changeRadius, this) });
            egret.Tween.get(this, { onChange: this.changeRadius, onChangeObj: this }).to({ scaleX: this._expandScaleValue, scaleY: this._expandScaleValue }, 2000).call(this.collapse, this);
            this._isExpand = true;
        };
        /****画星星 */
        Ball.prototype.drawBall = function () {
            var _self__ = this;
            this._asset = this.Star;
            this._asset.width /= 2;
            this._asset.height /= 2;
            // this._asset.anchorOffsetX = this._asset.width / 2;
            // this._asset.anchorOffsetY = this._asset.height / 2;
            _self__.addChild(this._asset);
            this.anchorOffsetX = this.width / 2;
            this._radius = this.anchorOffsetY = this.height / 2;
            var cm = new com.ColorMatrix();
            cm.adjustHue(Math.random() * 360 - 180);
            this.filters = [new egret.ColorMatrixFilter(cm.matrix)];
        };
        Object.defineProperty(Ball.prototype, "isExpand", {
            get: function () {
                return this._isExpand;
            },
            enumerable: true,
            configurable: true
        });
        Ball.prototype.collapse = function () {
            // gs.TweenMax.to_static_gs_TweenMax(this, 0.3, { "delay": game.Ball.explosionSpeed, "scaleX": 0, "scaleY": 0, "onComplete": flash.bind(this.reportRemove, this), "onUpdate": flash.bind(this.changeRadius, this) });
            egret.Tween.get(this, { onChange: this.changeRadius, onChangeObj: this }).wait(game.Ball.explosionSpeed).to({ scaleX: 0, scaleY: 0 }, 1000).call(this.reportRemove, this);
            this._isExpand = true;
        };
        /***改变半径 */
        Ball.prototype.changeRadius = function () {
            this._radius = (this.width * this.scaleX * 0.5);
            console.log("width:", this.width, " scaleX:", this.scaleX, " _radius:", this, this._radius);
        };
        Ball.prototype.onEnterFrame = function (e) {
            var _self__ = this;
            if (!this._isExpand) {
                this.x = this.x + this._dx;
                this.y = this.y + this._dy;
                if ((this.x) < 0 || (this.x) > game.Game.stageW) {
                    this._dx = -this._dx;
                }
                if ((this.y) < 0 || (this.y) > game.Game.stageH) {
                    this._dy = -this._dy;
                }
            }
            else {
                _self__.dispatchEvent(new egret.Event(game.Ball.EXPAND));
            }
            this.rotation = this.rotation + this._dx * 2 * this._clockwizeRotation;
        };
        Ball.prototype.checkIntersectWithBall = function (ball) {
            return egret.Point.distance(new egret.Point(ball.x, ball.y), new egret.Point(this.x, this.y)) < (ball.radius + this._radius) * 0.8;
        };
        return Ball;
    }(egret.Sprite));
    game.Ball = Ball;
    __reflect(Ball.prototype, "game.Ball");
})(game || (game = {}));
game.Ball.EXPAND = "expand";
game.Ball.REMOVE = "remove";
game.Ball.activated = 0;
game.Ball.explosionSpeed = 1;
game.Ball.START_EXPAND = "startExpand";
game.Ball.END_ALL = "endAllBalls";
//# sourceMappingURL=Ball.js.map