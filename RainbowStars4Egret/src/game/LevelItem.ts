class LevelItem extends eui.Component implements eui.UIComponent {

	public constructor() {
		super();
	}

	private levelLab: eui.BitmapLabel;
	private lockImg: eui.Image;
	public level: number = 0;


	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.touchChildren = false;
	}

	public setLevel(level: number) {
		this.level = level;
		this.levelLab.text = (~~level).toString();
	}

	public setLock(isLock: boolean) {
		this.touchEnabled = !isLock
		this.lockImg.visible = isLock;
		this.getChildAt(0).visible = !isLock;
		this.getChildAt(1).visible = isLock;
		this.getChildAt(2).visible = !isLock;
		this.getChildAt(3).visible = isLock;

	}
}