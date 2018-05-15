class ScorePanel extends eui.Component implements eui.UIComponent {
	public constructor() {
		super();
	}
	public backBtn: eui.Button;

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.backBtn.addEventListener("touchTap", this.onBack, this);
	}

	private onBack() {
		App.closePanel(this);
	}

}