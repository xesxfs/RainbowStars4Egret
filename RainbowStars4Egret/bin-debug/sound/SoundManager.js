var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var SoundManager = (function () {
        function SoundManager() {
        }
        Object.defineProperty(SoundManager, "mute", {
            get: function () {
                return game.SoundManager._isMute;
            },
            set: function (value) {
                game.SoundManager._isMute = value;
                // game.Cookies.mute = value;
            },
            enumerable: true,
            configurable: true
        });
        SoundManager.playRandomExplodeSound = function () {
            var index = ~~(1 + Math.random() * 5);
            game.SoundManager.play("StarExplode" + index + "_mp3");
        };
        SoundManager.play = function ($soundName) {
            var snd = null;
            if (game.SoundManager._isMute) {
                return;
            }
            var sc = RES.getRes($soundName);
            sc.type = egret.Sound.EFFECT;
            sc.play(0, 1);
        };
        return SoundManager;
    }());
    game.SoundManager = SoundManager;
    __reflect(SoundManager.prototype, "game.SoundManager");
})(game || (game = {}));
game.SoundManager.STAR_EXPLODE_1 = "StarExplode1";
game.SoundManager.STAR_EXPLODE_2 = "StarExplode2";
game.SoundManager.STAR_EXPLODE_3 = "StarExplode3";
game.SoundManager.STAR_EXPLODE_4 = "StarExplode4";
game.SoundManager.STAR_EXPLODE_5 = "StarExplode5";
game.SoundManager._isMute = false;
game.SoundManager.BUTTON_CLICK = "ButtonClick";
//# sourceMappingURL=SoundManager.js.map