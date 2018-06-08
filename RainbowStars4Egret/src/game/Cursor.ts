module game {
	export class Cursor extends Ball {
		// private Sta: any;
		private Star_game_Cursor: egret.Bitmap;

		public constructor() {
			super();

			// this.Sta = game.Cursor_Sta;
			// this.drawBall();
		}

		// public get radius(): number {
		// 	return this._radius * 1.5;
		// }

		// public set radius(value: number) {
		// 	egret.superSetter(game.Cursor, this, "radius", value);
		// }

		protected drawBall() {
			this.Star_game_Cursor = new egret.Bitmap(RES.getRes("cursor_star_png"));
			var _self__ = this;
			this._asset = this.Star_game_Cursor;
			this._asset.width /= 2;
			this._asset.height /= 2;
			this._asset.anchorOffsetX = this._asset.width / 2;
			this._asset.anchorOffsetY = this._asset.height / 2;
			_self__.addChild(this._asset);

			console.log("cursor")
		}

		protected onEnterFrame(e: egret.Event) {
			var _self__ = this;
			_self__.dispatchEvent(new egret.Event(game.Ball.EXPAND));
		}

	}
}
