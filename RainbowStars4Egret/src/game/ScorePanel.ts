class ScorePanel extends eui.Component {
	public constructor() {
		super();
		this.skinName = "ScorePanelSkin";
	}
	public backBtn: eui.Button;
	public scoreList: eui.List;


	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.backBtn.addEventListener("touchTap", this.onBack, this);
		// (this.scoreList.dataProvider as eui.ArrayCollection).removeAll();
		console.log("ScorePanel")
	}

	private onBack() {
		App.closePanel(this);
	}

	public addScore(lv: number, score: number) {
		let arr = this.scoreList.dataProvider as eui.ArrayCollection;
		let item = arr.getItemAt(lv);
		if (item) {
			item.score = score;
			arr.itemUpdated(item)
		} else {
			arr.addItem({ level: lv, score: score });
		}
		arr.refresh();
	}

}