class App {

	private static scene: eui.UILayer;
	private static panel: eui.UILayer;

	public static startPanel: StartPanel;
	public static gameResult: GameResultPanel;
	public static levelPanel: LevelsPanel;
	public static scorePanel: ScorePanel;
	public static game: game.Game;

	public static startUp() {

		this.startPanel = new StartPanel();
		this.gameResult = new GameResultPanel();
		this.levelPanel = new LevelsPanel();
		this.scorePanel = new ScorePanel();
		this.game = new game.Game();
		this.scene = new eui.UILayer();
		this.panel = new eui.UILayer();
		this.loadData();
		this.panel.touchThrough = true;
		egret.MainContext.instance.stage.addChild(this.scene);
		egret.MainContext.instance.stage.addChild(this.panel);
		this.runScene(this.startPanel);
	}

	public static runScene(scene: egret.DisplayObjectContainer) {
		this.scene.removeChildren();
		this.scene.addChild(scene);
	}

	public static openPanel(panel: eui.Component) {
		this.panel.addChild(panel);
	}

	public static closePanel(panel: eui.Component) {
		if (this.panel.contains(panel)) {
			this.panel.removeChild(panel);
		}
	}

	public static closeAllPanel() {
		this.panel.removeChildren();
	}

	private static loadData() {
		let lv = egret.localStorage.getItem("lockingLv")
		GameData.lockingLv = lv ? (isNaN(parseInt(lv)) ? 1 : parseInt(lv)) : 1;
		console.log("lockingLv:", GameData.lockingLv);
	}

}