module game {
	export class SoundManager {
		public static STAR_EXPLODE_1: string;
		public static STAR_EXPLODE_2: string;
		public static STAR_EXPLODE_3: string;
		public static STAR_EXPLODE_4: string;
		public static STAR_EXPLODE_5: string;

		public static BUTTON_CLICK: string;
		public static _dictSounds;
		public static _isMute: boolean;

		public constructor() {

		}

		public static set mute(value: boolean) {
			game.SoundManager._isMute = value;
			// game.Cookies.mute = value;
		}

		public static get mute(): boolean {
			return game.SoundManager._isMute;
		}

		public static playRandomExplodeSound() {
			var index: number = ~~(1 + Math.random() * 5);
			game.SoundManager.play("StarExplode" + index + "_mp3");
		}

		public static play($soundName: string) {
			var snd: egret.Sound = null;
			if (game.SoundManager._isMute) {
				return;
			}
			var sc: egret.Sound = RES.getRes($soundName);
			sc.type = egret.Sound.EFFECT;
			sc.play(0, 1);
		}

	}
}
game.SoundManager.STAR_EXPLODE_1 = "StarExplode1";
game.SoundManager.STAR_EXPLODE_2 = "StarExplode2";
game.SoundManager.STAR_EXPLODE_3 = "StarExplode3";
game.SoundManager.STAR_EXPLODE_4 = "StarExplode4";
game.SoundManager.STAR_EXPLODE_5 = "StarExplode5";
game.SoundManager._isMute = false;
game.SoundManager.BUTTON_CLICK = "ButtonClick";


