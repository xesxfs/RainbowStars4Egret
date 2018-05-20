class StartPanel extends eui.Component implements eui.UIComponent {
	public constructor() {
		super();
	}

	public startBtn: eui.Button;
	public scoreBtn: eui.Button;
	public levelBtn: eui.Button;
	public shareBtn: eui.Button;
	public soundBtn: eui.Button;


	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.addEventListener("touchTap", this.onclick, this);
	}

	private onclick(e: egret.TouchEvent) {
		switch (e.target) {
			case this.startBtn:
				App.runScene(App.game);
				App.game.startGame();
				break;
			case this.scoreBtn:
				App.openPanel(App.scorePanel);
				break;
			case this.levelBtn:
				App.openPanel(App.levelPanel);
				break;
			case this.shareBtn:
				break;
			case this.soundBtn:
				break;
		}

	}

}