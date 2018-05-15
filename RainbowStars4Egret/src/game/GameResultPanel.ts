class GameResultPanel extends eui.Component implements eui.UIComponent {
	public constructor() {
		super();
		this.skinName="GameResultPanelSkin";
	}
	public backBtn: eui.Button;
	public nextLevelBtn: eui.Button;
	public lifeLab: eui.Label;
	public digitLab: eui.Label;
	public explortLab: eui.Label;
	public totalLab: eui.Label;
	public replayBtn: eui.Button;
	public failImg: eui.Image;
	public completeImg: eui.Image;



	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
		console.log("childrenCreated");
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.backBtn.addEventListener("touchTap", this.onBack, this);
		console.log("childrenCreated");

	}

	public setFail() {
		this.failImg.visible = true;
		this.completeImg.visible = false;
		this.nextLevelBtn.visible = false;
		this.replayBtn.visible = true;
	}


	public setSuccess() {
		this.failImg.visible = !true;
		this.completeImg.visible = !false;
		this.nextLevelBtn.visible = !false;
		this.replayBtn.visible = !true;
	}


	public setGameOver() {
		this.setFail();
		this.replayBtn.visible = false;
	}

	public onBack() {
		App.closeAllPanel();
		App.runScene(App.startPanel);
	}

}