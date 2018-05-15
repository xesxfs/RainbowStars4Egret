module game {
	export class Game extends egret.Sprite {
		public static stageW: number;
		public static stageH: number;
		private _background: egret.Sprite;
		private _totalLevels: number = 10;
		private _balls: Array<Ball>;
		private _ballsHolder: egret.Sprite;
		private _startupPanel: StartPanel;
		private _levelSuccess: boolean = false;



		public constructor() {
			super();
			this._balls = [];
			this.addBackground();
			this.initStarGame();
			// this.testStartGame();
		}

		private addEndLevelPanel() {
			var _self__: any = this;
			console.log("## addEndLevelPanel");
			App.gameResult.setFail();
			App.gameResult.replayBtn.addEventListener("touchTap", () => {
				App.closePanel(App.gameResult);
				this.startGame();
			}, this);
			App.openPanel(App.gameResult);
			// this._endLevelPanel = new game.display.EndLevelPanel();
			// this.centerMovie(this._endLevelPanel);
			// this._endLevelPanel.lives = this._gui.lives;
			// _self__.addChild(this._endLevelPanel);
			// this._endLevelPanel.addEventListener(game.display.EndLevelPanel.PLAY_AGAIN,this.replayLevel, this);
		}

		private subscribeBallToEvents(ball: game.Ball) {
			ball.addEventListener(game.Ball.EXPAND, this.checkNearBalls, this);
			ball.addEventListener(game.Ball.REMOVE, this.removeBall, this);
			ball.addEventListener(game.Ball.END_ALL, this.endLevel, this);
			ball.addEventListener(game.Ball.START_EXPAND, this.onStartExpand, this);
		}



		private endLevel(e: egret.Event) {
			var ball: game.Ball = <any>null;
			var ball_key_a;
			for (ball_key_a in this._balls) {
				ball = this._balls[ball_key_a];
				ball.removeEventListener(game.Ball.END_ALL, this.endLevel, this);
				ball.stopAndDissappear();
			}
			this._levelSuccess = GameData.explosed >= GameData.GOAL_BALLS[GameData.level - 1];
			console.log("endLevel", this._levelSuccess);
			if (this._levelSuccess) {
				this.showSuccessLevelScreen();
			}
			else {
				GameData.lives--;
				if (GameData.lives == 0) {
					this.gameOver();
				}
				else {
					this.addEndLevelPanel();
				}
			}
		}

		private removeAllBalls() {
			var ball: game.Ball = <any>null;
			var ball_key_a;
			for (ball_key_a in this._balls.map) {
				ball = this._balls.map[ball_key_a][1];
				ball.reportRemove();
			}
			this._balls = [];
		}

		private centerMovie($mc: egret.DisplayObject) {
			$mc.x = game.Game.stageW / 2 - $mc.width / 2;
			$mc.y = game.Game.stageH / 2 - $mc.height / 2;
		}

		private replayLevel(e: egret.Event = null) {
			var _self__: any = this;
			console.log("## replayLevel");
			// if (this._endLevelPanel) {
			// 	this._endLevelPanel.removeEventListener(game.display.EndLevelPanel.PLAY_AGAIN, flash.bind(this.replayLevel, this), null);
			// 	_self__.removeChild(this._endLevelPanel);
			// 	this._endLevelPanel = null;
			// }
			this.showStartLevel();
		}


		/***关卡选择 */
		private showStartLevel(e: egret.Event = null) {
			var _self__: any = this;
			console.log("## showStartLevel");
			// this.clearPanel(this._successLevelScreen);
			// if (<any>!this._gui) {
			// 	this._gui = new game.display.Gui();
			// }
			// console.log("LevelSuccessPanel success ", this._levelSuccess);
			// if (this._levelSuccess) {
			// 	this._gui.level++;
			// }
			// this._levelScreen = new mcLevel();
			// _self__.addChild(this._levelScreen);
			// this._gui.alpha = 0;
			// this._levelScreen.gotoAndStop(this._gui.level);
			// gs.TweenMax.from_static_gs_TweenMax(this._levelScreen, 2, { "alpha": 0.1 });
			// this._levelScreen.btnPlay.addEventListener(egret.TouchEvent.TOUCH_TAP, flash.bind(this.startGameLevel, this), null);
			// this._levelScreen.txtCollect.text = "Explode " + game.common.GameData.GOAL_BALLS[this._gui.level - 1] + " stars out of a total of " + game.common.GameData.TOTAL_BALLS[this._gui.level - 1] + " stars";
			// this._levelScreen.txtCollect.textAlign = "center";
			// this.centerMovie(this._levelScreen);
		}

		private onStartExpand(e: egret.Event) {
			console.log("start expand")
			if (!(e.target instanceof game.Cursor)) {
				// this.addExplodeText(e.target["x"], e.target["y"]);
				GameData.explosed++;
				GameData.score = GameData.score + game.Ball.activated * 1000;
				game.SoundManager.playRandomExplodeSound();
			}
			GameData.explosedSuccess = GameData.explosed >= GameData.GOAL_BALLS[GameData.level - 1];
		}

		private removeBall(e: egret.Event) {
			console.log("remove ball")
			if (e.target instanceof Cursor) {
				this._ballsHolder.removeChild(e.target);
				return
			}
			var ball: game.Ball = e.target as game.Ball;
			let idx = this._balls.indexOf(ball);
			this._balls.splice(idx, 1);
			try {
				this._ballsHolder.removeChild(ball);
			}
			catch (e)
			{ }
		}

		private checkNearBalls(e: egret.Event) {
			var ball: game.Ball = null;
			var ball_key_a;
			for (ball_key_a in this._balls) {
				ball = this._balls[ball_key_a];
				if (ball.checkIntersectWithBall(e.target as game.Ball)) {
					ball.expand();
				}
			}
		}

		/***爆炸文字 */
		private addExplodeText(x: number, y: number) {
			x = ~~(x);
			y = ~~(y);
			var _self__: any = this;
			// var mcExplode: mcExplodeStarText = new mcExplodeStarText();
			// _self__.addChild(mcExplode);
			// mcExplode.x = $x;
			// mcExplode.y = $y;
			// mcExplode.txt.text = String((this._gui.explosed + 1) * 1000);
			// mcExplode.alpha = 0;
			// gs.TweenMax.to_static_gs_TweenMax(mcExplode, 0.3, { "delay": 2, "alpha": 1 });
			// gs.TweenMax.to_static_gs_TweenMax(mcExplode, 0.3, { "delay": 2.5, "alpha": 0, "onComplete": flash.bind(this.removeMe, this), "onCompleteParams": [mcExplode] });
		}


		private gameOver(e: egret.Event = null) {
			// var _self__: any = this;
			console.log("## gameOver");
			App.gameResult.setGameOver();
			App.openPanel(App.gameResult);
			// this.removeAllBalls();
			// this.clearPanel(this._successLevelScreen);
			// this._mcGameOver = new game.display.GameOverPanel();
			// this._mcGameOver.addEventListener(game.display.GameOverPanel.PLAY_AGAIN, flash.bind(this.onPlayAgain, this), null);
			// this._mcGameOver.addEventListener(game.display.GameOverPanel.GO_TO_MAIN, flash.bind(this.addStartupPanel, this), null, true);
			// this._mcGameOver.score = this._gui.score;
			// this.centerMovie(this._mcGameOver);
			// _self__.addChild(this._mcGameOver);
			// if (this._gui.level == this._totalLevels && this._levelSuccess) {
			// 	this._mcGameOver.winGame();
			// }
			// _self__.removeChild(this._gui);
			// this._gui = null;
		}
		/***增加引爆的星星 */
		private addChargedBall(e: egret.TouchEvent) {
			var _self__ = this;
			// if (this._gui.alpha <= 0.7) {
			// 	return;
			// }
			var ball: game.Cursor = new game.Cursor();
			this._ballsHolder.addChildAt(ball, 0);
			this.subscribeBallToEvents(ball);
			ball.expand();
			ball.x = e.localX;
			ball.y = e.localY;
			_self__.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.addChargedBall, this);
		}

		/***添加背景 */
		private addBackground() {
			var _self__: any = this;
			this._background = new egret.Sprite();
			this._background.graphics.beginFill(0);
			this._background.graphics.drawRect(0, 0, game.Game.stageW, game.Game.stageH);
			let bg = new eui.Image(RES.getRes("game_bg_png"));
			bg.percentWidth = 100;
			bg.percentHeight = 100;
			this.addChild(bg);

		}


		// private testStartGame() {
		// 	this.initStarGame();
		// 	this.addBalls(GameData.TOTAL_BALLS[GameData.level - 1]);
		// }


		private initStarGame() {
			this._ballsHolder = new egret.Sprite();
			this.addChild(this._ballsHolder);
			this.touchEnabled = true;

		}
		/**************/
		public startGame() {
			let balls = GameData.TOTAL_BALLS[GameData.level - 1]
			console.log("lv:", GameData.level);
			GameData.explosed = 0;
			this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.addChargedBall, this);
			this.addBalls(balls);
		}

		private showSuccessLevelScreen() {
			// var _self__: any = this;
			console.log("## showSuccessLevelScreen");
			GameData.level++;
			App.gameResult.setSuccess();
			App.openPanel(App.gameResult);
			App.gameResult.nextLevelBtn.addEventListener("touchTap", () => {
				App.closePanel(App.gameResult);
				this.startGame();
			}, this)

			// this._successLevelScreen = new game.display.LevelSuccessPanel();
			// this.centerMovie(this._successLevelScreen);
			// this._successLevelScreen.levelBonus = this._gui.level * 1000;
			// this._successLevelScreen.livesBonus = this._gui.lives * 10000;
			// this._successLevelScreen.extraBonus = (this._gui.explosed - game.common.GameData.GOAL_BALLS[this._gui.level - 1]) * 10000;
			// this._gui.score = this._gui.score + this._successLevelScreen.calculateScore();
			// this._successLevelScreen.totalScore = this._gui.score;
			// if (this._gui.level != this._totalLevels) {
			// 	this._successLevelScreen.addEventListener(game.display.LevelSuccessPanel.PLAY_NEXT_ROUND, flash.bind(this.showStartLevel, this), null);
			// }
			// else {
			// 	this._successLevelScreen.addEventListener(game.display.LevelSuccessPanel.PLAY_NEXT_ROUND, flash.bind(this.gameOver, this), null);
			// }
			// _self__.addChild(this._successLevelScreen);
		}

		private onPlayAgain(e: egret.Event) {
			console.log("## onPlayAgain");
			// this.clearPanel(this._mcGameOver);
			this._levelSuccess = false;
			this.showStartLevel();
		}



		private addBalls(numBalls: number) {
			numBalls = ~~(numBalls);
			var ball: game.Ball = null;
			for (var i: number = (0); i < numBalls; i++) {
				ball = new game.Ball();
				this._ballsHolder.addChild(ball);
				this._ballsHolder.cacheAsBitmap = true;
				this._balls.push(ball);
				this.subscribeBallToEvents(ball);
			}
		}
		/***点击游戏开始 */
		private onClickPlay(e: egret.Event) {
			var _self__: any = this;
			this.showStartLevel();
		}
	}

	game.Game.stageW = 640;
	game.Game.stageH = 1136;
}