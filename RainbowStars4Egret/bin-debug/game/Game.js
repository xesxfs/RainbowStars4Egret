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
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            var _this = _super.call(this) || this;
            _this._totalLevels = 10;
            _this._levelSuccess = false;
            _this.usedBallCount = 0;
            _this._balls = [];
            _this.addBackground();
            _this.initStarGame();
            return _this;
            // this.testStartGame();
        }
        Game.prototype.addEndLevelPanel = function () {
            var _self__ = this;
            console.log("## addEndLevelPanel");
            App.gameResult.setFail();
            App.gameResult.replayBtn.addEventListener("touchTap", this.onReplay, this);
            App.openPanel(App.gameResult);
            // this._endLevelPanel = new game.display.EndLevelPanel();
            // this.centerMovie(this._endLevelPanel);
            // this._endLevelPanel.lives = this._gui.lives;
            // _self__.addChild(this._endLevelPanel);
            // this._endLevelPanel.addEventListener(game.display.EndLevelPanel.PLAY_AGAIN,this.replayLevel, this);
        };
        Game.prototype.onReplay = function () {
            App.closePanel(App.gameResult);
            this.startGame();
        };
        Game.prototype.subscribeBallToEvents = function (ball) {
            ball.addEventListener(game.Ball.EXPAND, this.checkNearBalls, this);
            ball.addEventListener(game.Ball.REMOVE, this.removeBall, this);
            ball.addEventListener(game.Ball.END_ALL, this.endLevel, this);
            ball.addEventListener(game.Ball.START_EXPAND, this.onStartExpand, this);
        };
        Game.prototype.endLevel = function (e) {
            var ball = null;
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
        };
        Game.prototype.removeAllBalls = function () {
            var ball = null;
            var ball_key_a;
            for (ball_key_a in this._balls.map) {
                ball = this._balls.map[ball_key_a][1];
                ball.reportRemove();
            }
            this._balls = [];
        };
        Game.prototype.replayLevel = function (e) {
            if (e === void 0) { e = null; }
            var _self__ = this;
            console.log("## replayLevel");
            // if (this._endLevelPanel) {
            // 	this._endLevelPanel.removeEventListener(game.display.EndLevelPanel.PLAY_AGAIN, flash.bind(this.replayLevel, this), null);
            // 	_self__.removeChild(this._endLevelPanel);
            // 	this._endLevelPanel = null;
            // }
            this.showStartLevel();
        };
        /***关卡选择 */
        Game.prototype.showStartLevel = function (e) {
            if (e === void 0) { e = null; }
            var _self__ = this;
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
        };
        Game.prototype.onStartExpand = function (e) {
            console.log("start expand");
            if (!(e.target instanceof game.Cursor)) {
                // this.addExplodeText(e.target["x"], e.target["y"]);
                GameData.explosed++;
                GameData.score = GameData.score + game.Ball.activated * 1000;
                game.SoundManager.playRandomExplodeSound();
                if (this.usedBallCount < GameData.TOTAL_BALLS[GameData.level - 1]) {
                    this.addBalls(1);
                    this.usedBallCount++;
                }
            }
            GameData.explosedSuccess = GameData.explosed >= GameData.GOAL_BALLS[GameData.level - 1];
        };
        Game.prototype.removeBall = function (e) {
            console.log("remove ball");
            if (e.target instanceof game.Cursor) {
                this._ballsHolder.removeChild(e.target);
                return;
            }
            var ball = e.target;
            var idx = this._balls.indexOf(ball);
            this._balls.splice(idx, 1);
            try {
                this._ballsHolder.removeChild(ball);
            }
            catch (e) { }
        };
        Game.prototype.checkNearBalls = function (e) {
            var ball = null;
            var ball_key_a;
            for (ball_key_a in this._balls) {
                ball = this._balls[ball_key_a];
                if (ball.checkIntersectWithBall(e.target)) {
                    ball.expand();
                }
            }
        };
        /***爆炸文字 */
        Game.prototype.addExplodeText = function (x, y) {
            x = ~~(x);
            y = ~~(y);
            var _self__ = this;
            // var mcExplode: mcExplodeStarText = new mcExplodeStarText();
            // _self__.addChild(mcExplode);
            // mcExplode.x = $x;
            // mcExplode.y = $y;
            // mcExplode.txt.text = String((this._gui.explosed + 1) * 1000);
            // mcExplode.alpha = 0;
            // gs.TweenMax.to_static_gs_TweenMax(mcExplode, 0.3, { "delay": 2, "alpha": 1 });
            // gs.TweenMax.to_static_gs_TweenMax(mcExplode, 0.3, { "delay": 2.5, "alpha": 0, "onComplete": flash.bind(this.removeMe, this), "onCompleteParams": [mcExplode] });
        };
        Game.prototype.gameOver = function (e) {
            if (e === void 0) { e = null; }
            // var _self__: any = this;
            console.log("## gameOver");
            App.gameResult.setGameOver();
            App.openPanel(App.gameResult);
            this.removeAllBalls();
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
        };
        /***增加引爆的星星 */
        Game.prototype.addChargedBall = function (e) {
            var _self__ = this;
            // if (this._gui.alpha <= 0.7) {
            // 	return;
            // }
            var ball = new game.Cursor();
            this._ballsHolder.addChildAt(ball, 0);
            this.subscribeBallToEvents(ball);
            ball.expand();
            ball.x = e.localX;
            ball.y = e.localY;
            _self__.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.addChargedBall, this);
        };
        /***添加背景 */
        Game.prototype.addBackground = function () {
            var _self__ = this;
            this._background = new egret.Sprite();
            this._background.graphics.beginFill(0);
            this._background.graphics.drawRect(0, 0, game.Game.stageW, game.Game.stageH);
            var bg = new eui.Image(RES.getRes("game_bg_png"));
            bg.percentWidth = 100;
            bg.percentHeight = 100;
            this.addChild(bg);
        };
        // private testStartGame() {
        // 	this.initStarGame();
        // 	this.addBalls(GameData.TOTAL_BALLS[GameData.level - 1]);
        // }
        Game.prototype.initStarGame = function () {
            this._ballsHolder = new egret.Sprite();
            this.addChild(this._ballsHolder);
            this.touchEnabled = true;
        };
        /**************/
        Game.prototype.startGame = function () {
            var balls = GameData.TOTAL_BALLS[GameData.level - 1];
            console.log("lv:", GameData.level);
            GameData.explosed = 0;
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.addChargedBall, this);
            if (balls >= 30) {
                this.usedBallCount = balls = 30;
            }
            this.addBalls(balls);
        };
        Game.prototype.showSuccessLevelScreen = function () {
            // var _self__: any = this;
            console.log("## showSuccessLevelScreen");
            GameData.level++;
            if (GameData.level > GameData.GOAL_BALLS.length) {
                GameData.level = 1;
            }
            if (GameData.level > GameData.lockingLv) {
                GameData.lockingLv++;
                egret.localStorage.setItem("lockingLv", GameData.lockingLv.toString());
                console.log(GameData.lockingLv);
            }
            App.gameResult.setSuccess();
            App.openPanel(App.gameResult);
            App.gameResult.nextLevelBtn.addEventListener("touchTap", this.onNextLevel, this);
            // this._successLevelScreen = new game.display.LevelSuccessPanel();
            // this.centerMovie(this._successLevelScreen);
            App.gameResult.lifeLab.text = (GameData.lives * 10000).toString();
            App.gameResult.digitLab.text = (GameData.level * 1000).toString();
            App.gameResult.explortLab.text = ((GameData.explosed + GameData.GOAL_BALLS[GameData.level - 1]) * 10000).toString();
            App.gameResult.totalLab.text = (parseInt(App.gameResult.lifeLab.text) + parseInt(App.gameResult.digitLab.text) + parseInt(App.gameResult.explortLab.text)).toString();
            App.scorePanel.addScore(GameData.level - 1, parseInt(App.gameResult.totalLab.text));
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
        };
        Game.prototype.onNextLevel = function () {
            App.closePanel(App.gameResult);
            this.startGame();
        };
        Game.prototype.onPlayAgain = function (e) {
            console.log("## onPlayAgain");
            // this.clearPanel(this._mcGameOver);
            this._levelSuccess = false;
            this.showStartLevel();
        };
        Game.prototype.addBalls = function (numBalls) {
            numBalls = ~~(numBalls);
            var ball = null;
            for (var i = (0); i < numBalls; i++) {
                ball = new game.Ball();
                this._ballsHolder.addChild(ball);
                this._ballsHolder.cacheAsBitmap = true;
                this._balls.push(ball);
                this.subscribeBallToEvents(ball);
            }
        };
        /***点击游戏开始 */
        Game.prototype.onClickPlay = function (e) {
            var _self__ = this;
            this.showStartLevel();
        };
        return Game;
    }(egret.Sprite));
    game.Game = Game;
    __reflect(Game.prototype, "game.Game");
    game.Game.stageW = 640;
    game.Game.stageH = 1136;
})(game || (game = {}));
//# sourceMappingURL=Game.js.map