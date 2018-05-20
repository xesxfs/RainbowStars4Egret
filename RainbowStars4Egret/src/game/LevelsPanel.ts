class LevelsPanel extends eui.Component {
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onEnable, this);
		this.skinName = "LevelsPanelSkin"
	}

	public curPage: number = 1;
	public totalPage: number;
	public nextBtn: eui.Button;
	public pageLab: eui.Label;
	private isInit: boolean = false;


	protected childrenCreated(): void {
		super.childrenCreated();
		this.totalPage = Math.ceil(GameData.GOAL_BALLS.length / 10);
		// this.addEventListener("touchTap", () => { App.closePanel(this) }, this)
		this.nextBtn.addEventListener("touchTap", this.onNextPage, this);
		this.addEventListener("touchTap", this.selectLevel, this);
		this.isInit = true;
		this.setPageData();
	}

	private onEnable() {
		console.log("onEnable");
		if (this.isInit) this.setPageData();
	}

	public setPageData() {
		for (let i = 0; i < 10; i++) {
			let levItem = this.getChildAt(i + 3) as LevelItem;
			let lv = (this.curPage - 1) * 10 + i
			if (lv > GameData.GOAL_BALLS.length) {
				levItem.visible = false;
			} else {
				levItem.visible = true;
				levItem.setLevel(lv + 1);
			}
			if (GameData.lockingLv > lv) {
				levItem.setLock(false);
			} else {
				levItem.setLock(true);
			}
		}
		this.pageLab.text = this.curPage.toString() + " / " + this.totalPage.toString();

	}

	private onNextPage() {
		if (this.curPage < this.totalPage) {
			this.curPage++
		} else {
			this.curPage = 1;
		}
		this.setPageData();
	}

	private selectLevel(e: egret.TouchEvent) {
		if (e.target instanceof LevelItem) {
			let lvItem = e.target as LevelItem;
			GameData.level = lvItem.level;
			App.game.startGame();
			App.runScene(App.game);
			App.closePanel(this);
		}

	}



}