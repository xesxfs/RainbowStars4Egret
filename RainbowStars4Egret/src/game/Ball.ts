module game {
	export class Ball extends egret.Sprite {
		public static EXPAND: string;
		public static REMOVE: string;
		public static activated: number;
		public static explosionSpeed: number;
		public static START_EXPAND: string;
		public static END_ALL: string;
		protected _isExpand: boolean = false;
		protected _radius: number = 0;
		private _expandScaleValue: number = 4;
		private _maxSpeed: number = 1.5;
		private _clockwizeRotation: number = -1;
		private Star: egret.Bitmap;
		protected _dx: number = 0;
		protected _asset: egret.Bitmap;
		protected _dy: number = 0;
		public constructor() {
			super();
			this.Star = new egret.Bitmap(RES.getRes("star_png"));
			this._dx = 2 + Math.random() * this._maxSpeed;
			this._dy = 2 + Math.random() * this._maxSpeed;
			this._dx = this._dx * (Math.random() < 0.5 ? 1 : -1);
			this._dy = this._dy * (Math.random() < 0.5 ? 1 : -1);
			if (Math.random() < 0.5) {
				this._clockwizeRotation = (1);
			}
			this.x = Math.random() * game.Game.stageW;
			this.y = Math.random() * game.Game.stageH;
			this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
			this.drawBall();
		}

		/****扩大更新 */
		private onExpandUpdate() {
			this.dispatchEvent(new egret.Event(game.Ball.EXPAND));
		}
		/***停止与移除 */
		public stopAndDissappear() {
			var _self__: any = this;
			_self__.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
			// gs.TweenMax.to_static_gs_TweenMax(this, 2, { "scaleX": 0, "scaleY": 0, "onComplete": flash.bind(this.reportRemove, this) });
			egret.Tween.get(this).to({ "scaleX": 0, "scaleY": 0 }, 200).call(this.reportRemove, this);
		}

		public set radius(value: number) {
			this._radius = value;
		}

		public get radius(): number {
			return this._radius;
		}

		public reportRemove() {
			var _self__ = this;
			if (game.Ball.activated > 0) {
				game.Ball.activated--;
			}
			_self__.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
			_self__.dispatchEvent(new egret.Event(game.Ball.REMOVE));
			if (game.Ball.activated == 0) {
				_self__.dispatchEvent(new egret.Event(game.Ball.END_ALL));
			}
		}
		/***扩大 */
		public expand() {
			var _self__ = this;
			if (this._isExpand) {
				return;
			}
			_self__.dispatchEvent(new egret.Event(game.Ball.START_EXPAND));
			game.Ball.activated++;
			// gs.TweenMax.to_static_gs_TweenMax(this, 1, { "scaleX": this._expandScaleValue, "scaleY": this._expandScaleValue, "onComplete": flash.bind(this.collapse, this), "onUpdate": flash.bind(this.changeRadius, this) });
			egret.Tween.get(this, { onChange: this.changeRadius, onChangeObj: this }).to({ scaleX: this._expandScaleValue, scaleY: this._expandScaleValue }, 2000).call(this.collapse, this);
			this._isExpand = true;
		}

		/****画星星 */
		protected drawBall() {
			var _self__ = this;
			this._asset = this.Star;
			this._asset.width /= 2;
			this._asset.height /= 2;
			// this._asset.anchorOffsetX = this._asset.width / 2;
			// this._asset.anchorOffsetY = this._asset.height / 2;
			_self__.addChild(this._asset);
			this.anchorOffsetX = this.width / 2;
			this._radius = this.anchorOffsetY = this.height / 2;
			var cm: com.ColorMatrix = new com.ColorMatrix();
			cm.adjustHue(Math.random() * 360 - 180);
			this.filters = [new egret.ColorMatrixFilter(cm.matrix)];
		}

		public get isExpand(): boolean {
			return this._isExpand;
		}

		private collapse() {
			// gs.TweenMax.to_static_gs_TweenMax(this, 0.3, { "delay": game.Ball.explosionSpeed, "scaleX": 0, "scaleY": 0, "onComplete": flash.bind(this.reportRemove, this), "onUpdate": flash.bind(this.changeRadius, this) });
			egret.Tween.get(this, { onChange: this.changeRadius, onChangeObj: this }).wait(game.Ball.explosionSpeed).to({ scaleX: 0, scaleY: 0 }, 1000).call(this.reportRemove, this);
			this._isExpand = true;
		}
		/***改变半径 */
		private changeRadius() {
			this._radius = (this.width * this.scaleX * 0.5);
			// console.log("width:", this.width, " scaleX:", this.scaleX, " _radius:", this, this._radius);
		}

		protected onEnterFrame(e: egret.Event) {
			var _self__ = this;
			if (!this._isExpand) {
				this.x = this.x + this._dx;
				this.y = this.y + this._dy;
				if ((this.x) < 0 || (this.x ) > game.Game.stageW) {
					this._dx = -this._dx;
				}
				if ((this.y) < 0 || (this.y ) > game.Game.stageH) {
					this._dy = -this._dy;
				}
			}
			else {
				_self__.dispatchEvent(new egret.Event(game.Ball.EXPAND));
			}
			this.rotation = this.rotation + this._dx * 2 * this._clockwizeRotation;
		}

		public checkIntersectWithBall(ball: game.Ball): boolean {
			return egret.Point.distance(new egret.Point(ball.x, ball.y), new egret.Point(this.x, this.y)) < (ball.radius + this._radius) * 0.8;
		}

	}

}

game.Ball.EXPAND = "expand";
game.Ball.REMOVE = "remove";
game.Ball.activated = 0;
game.Ball.explosionSpeed = 1;
game.Ball.START_EXPAND = "startExpand";
game.Ball.END_ALL = "endAllBalls";


