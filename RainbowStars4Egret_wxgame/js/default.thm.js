var egret = window.egret;window.skins={};
function __extends(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
    __.prototype = b.prototype;
    d.prototype = new __();
};
window.generateEUI = {};
            generateEUI.paths = {};
            generateEUI.styles = undefined;
            generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","StartPanel":"resource/eui_skins/StartPanel.exml","LevelItem":"resource/eui_skins/LevelItem.exml"}
generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameResultPanel.exml'] = window.GameResultPanelSkin = (function (_super) {
	__extends(GameResultPanelSkin, _super);
	var GameResultPanelSkin$Skin1 = 	(function (_super) {
		__extends(GameResultPanelSkin$Skin1, _super);
		function GameResultPanelSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameResultPanelSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "result_back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameResultPanelSkin$Skin1;
	})(eui.Skin);

	var GameResultPanelSkin$Skin2 = 	(function (_super) {
		__extends(GameResultPanelSkin$Skin2, _super);
		function GameResultPanelSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameResultPanelSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "next_level_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameResultPanelSkin$Skin2;
	})(eui.Skin);

	var GameResultPanelSkin$Skin3 = 	(function (_super) {
		__extends(GameResultPanelSkin$Skin3, _super);
		function GameResultPanelSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","replay_btn1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameResultPanelSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "replay_btn0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameResultPanelSkin$Skin3;
	})(eui.Skin);

	function GameResultPanelSkin() {
		_super.call(this);
		this.skinParts = ["completeImg","failImg","backBtn","nextLevelBtn","lifeLab","digitLab","explortLab","totalLab","replayBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.completeImg_i(),this.failImg_i(),this.backBtn_i(),this.nextLevelBtn_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this.lifeLab_i(),this.digitLab_i(),this.explortLab_i(),this.totalLab_i(),this.replayBtn_i()];
	}
	var _proto = GameResultPanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "game_bg_png";
		t.visible = false;
		t.percentWidth = 100;
		return t;
	};
	_proto.completeImg_i = function () {
		var t = new eui.Image();
		this.completeImg = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "complete_png";
		t.y = 86;
		return t;
	};
	_proto.failImg_i = function () {
		var t = new eui.Image();
		this.failImg = t;
		t.horizontalCenter = 0.5;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "fail_png";
		t.y = 134;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.label = "";
		t.left = 24;
		t.y = 844;
		t.skinName = GameResultPanelSkin$Skin1;
		return t;
	};
	_proto.nextLevelBtn_i = function () {
		var t = new eui.Button();
		this.nextLevelBtn = t;
		t.label = "";
		t.right = 24;
		t.y = 844;
		t.skinName = GameResultPanelSkin$Skin2;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "life_txt_png";
		t.x = 128;
		t.y = 390;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "count_png";
		t.x = 128;
		t.y = 504;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "game_result0_png";
		t.x = 34;
		t.y = 618;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "total_score_txt_png";
		t.x = 228;
		t.y = 736;
		return t;
	};
	_proto.lifeLab_i = function () {
		var t = new eui.Label();
		this.lifeLab = t;
		t.text = "0";
		t.x = 374;
		t.y = 404;
		return t;
	};
	_proto.digitLab_i = function () {
		var t = new eui.Label();
		this.digitLab = t;
		t.text = "0";
		t.x = 374;
		t.y = 521;
		return t;
	};
	_proto.explortLab_i = function () {
		var t = new eui.Label();
		this.explortLab = t;
		t.text = "0";
		t.x = 374;
		t.y = 637;
		return t;
	};
	_proto.totalLab_i = function () {
		var t = new eui.Label();
		this.totalLab = t;
		t.text = "0";
		t.x = 374;
		t.y = 754;
		return t;
	};
	_proto.replayBtn_i = function () {
		var t = new eui.Button();
		this.replayBtn = t;
		t.label = "";
		t.x = 354;
		t.y = 888;
		t.skinName = GameResultPanelSkin$Skin3;
		return t;
	};
	return GameResultPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/LevelItem.exml'] = window.LevelItemSkin = (function (_super) {
	__extends(LevelItemSkin, _super);
	function LevelItemSkin() {
		_super.call(this);
		this.skinParts = ["levelLab","lockImg"];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.levelLab_i(),this.lockImg_i()];
	}
	var _proto = LevelItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "panel0_png";
		t.visible = false;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "panel1_png";
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game_round0_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "game_round1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.levelLab_i = function () {
		var t = new eui.BitmapLabel();
		this.levelLab = t;
		t.font = "level_font_fnt";
		t.horizontalCenter = 0;
		t.text = "10";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lockImg_i = function () {
		var t = new eui.Image();
		this.lockImg = t;
		t.right = 50;
		t.source = "lock_png";
		t.verticalCenter = 0;
		return t;
	};
	return LevelItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/LevelsPanelSkin.exml'] = window.LevelsPanelSkin = (function (_super) {
	__extends(LevelsPanelSkin, _super);
	var LevelsPanelSkin$Skin4 = 	(function (_super) {
		__extends(LevelsPanelSkin$Skin4, _super);
		function LevelsPanelSkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","nextBtn1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LevelsPanelSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "nextBtn0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LevelsPanelSkin$Skin4;
	})(eui.Skin);

	function LevelsPanelSkin() {
		_super.call(this);
		this.skinParts = ["pageLab","nextBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.pageLab_i(),this.nextBtn_i(),this._LevelItem1_i(),this._LevelItem2_i(),this._LevelItem3_i(),this._LevelItem4_i(),this._LevelItem5_i(),this._LevelItem6_i(),this._LevelItem7_i(),this._LevelItem8_i(),this._LevelItem9_i(),this._LevelItem10_i()];
	}
	var _proto = LevelsPanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "game_bg_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.pageLab_i = function () {
		var t = new eui.Label();
		this.pageLab = t;
		t.text = "1 / 10";
		t.x = 213.91;
		t.y = 929.4;
		return t;
	};
	_proto.nextBtn_i = function () {
		var t = new eui.Button();
		this.nextBtn = t;
		t.label = "";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.x = 329;
		t.y = 919;
		t.skinName = LevelsPanelSkin$Skin4;
		return t;
	};
	_proto._LevelItem1_i = function () {
		var t = new LevelItem();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.x = 78;
		t.y = 259;
		return t;
	};
	_proto._LevelItem2_i = function () {
		var t = new LevelItem();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.x = 365;
		t.y = 259;
		return t;
	};
	_proto._LevelItem3_i = function () {
		var t = new LevelItem();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.x = 78;
		t.y = 380;
		return t;
	};
	_proto._LevelItem4_i = function () {
		var t = new LevelItem();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.x = 365;
		t.y = 380;
		return t;
	};
	_proto._LevelItem5_i = function () {
		var t = new LevelItem();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.x = 78;
		t.y = 500;
		return t;
	};
	_proto._LevelItem6_i = function () {
		var t = new LevelItem();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.x = 365;
		t.y = 500;
		return t;
	};
	_proto._LevelItem7_i = function () {
		var t = new LevelItem();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.x = 78;
		t.y = 620;
		return t;
	};
	_proto._LevelItem8_i = function () {
		var t = new LevelItem();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.x = 365;
		t.y = 620;
		return t;
	};
	_proto._LevelItem9_i = function () {
		var t = new LevelItem();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.x = 78;
		t.y = 739;
		return t;
	};
	_proto._LevelItem10_i = function () {
		var t = new LevelItem();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.x = 365;
		t.y = 739;
		return t;
	};
	return LevelsPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScorePanel.exml'] = window.ScorePanelSkin = (function (_super) {
	__extends(ScorePanelSkin, _super);
	var ScorePanelSkin$Skin5 = 	(function (_super) {
		__extends(ScorePanelSkin$Skin5, _super);
		function ScorePanelSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","game_back1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ScorePanelSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "game_back0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ScorePanelSkin$Skin5;
	})(eui.Skin);

	var ScorePanelSkin$Skin6 = 	(function (_super) {
		__extends(ScorePanelSkin$Skin6, _super);
		function ScorePanelSkin$Skin6() {
			_super.call(this);
			this.skinParts = [];
			
			this.height = 50;
			this.width = 463;
			this.elementsContent = [this._Label1_i(),this._Label2_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
			
			eui.Binding.$bindProperties(this, ["hostComponent.data.level"],[0],this._Label1,"text");
			eui.Binding.$bindProperties(this, ["hostComponent.data.score"],[0],this._Label2,"text");
		}
		var _proto = ScorePanelSkin$Skin6.prototype;

		_proto._Label1_i = function () {
			var t = new eui.Label();
			this._Label1 = t;
			t.horizontalCenter = -120;
			t.textColor = 0xFFFFFF;
			t.verticalCenter = 0;
			return t;
		};
		_proto._Label2_i = function () {
			var t = new eui.Label();
			this._Label2 = t;
			t.horizontalCenter = 120;
			t.textColor = 0xFFFFFF;
			t.verticalCenter = 0;
			return t;
		};
		return ScorePanelSkin$Skin6;
	})(eui.Skin);

	function ScorePanelSkin() {
		_super.call(this);
		this.skinParts = ["backBtn","scoreList"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.backBtn_i(),this._Group1_i()];
	}
	var _proto = ScorePanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "game_bg_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 916.55;
		t.skinName = ScorePanelSkin$Skin5;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.percentWidth = 80;
		t.y = 59.4;
		t.elementsContent = [this._Image2_i(),this._Scroller1_i(),this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "panel2_png";
		t.percentWidth = 100;
		t.x = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetY = 0;
		t.height = 624;
		t.horizontalCenter = 0.5;
		t.percentWidth = 90;
		t.y = 148;
		t.viewport = this.scoreList_i();
		return t;
	};
	_proto.scoreList_i = function () {
		var t = new eui.List();
		this.scoreList = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 88;
		t.y = 152;
		t.layout = this._VerticalLayout1_i();
		t.itemRendererSkinName = ScorePanelSkin$Skin6;
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.left = 80;
		t.source = "level_png";
		t.y = 73;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.right = 80;
		t.source = "score_png";
		t.y = 73;
		return t;
	};
	return ScorePanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/StartPanel.exml'] = window.StartPanelSkin = (function (_super) {
	__extends(StartPanelSkin, _super);
	var StartPanelSkin$Skin7 = 	(function (_super) {
		__extends(StartPanelSkin$Skin7, _super);
		function StartPanelSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","game_start1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartPanelSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "game_start0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StartPanelSkin$Skin7;
	})(eui.Skin);

	var StartPanelSkin$Skin8 = 	(function (_super) {
		__extends(StartPanelSkin$Skin8, _super);
		function StartPanelSkin$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","scoreBtn1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartPanelSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "scoreBtn0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StartPanelSkin$Skin8;
	})(eui.Skin);

	var StartPanelSkin$Skin9 = 	(function (_super) {
		__extends(StartPanelSkin$Skin9, _super);
		function StartPanelSkin$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","levelBtn1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartPanelSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "levelBtn0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StartPanelSkin$Skin9;
	})(eui.Skin);

	var StartPanelSkin$Skin10 = 	(function (_super) {
		__extends(StartPanelSkin$Skin10, _super);
		function StartPanelSkin$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","shareBtn1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartPanelSkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "shareBtn0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StartPanelSkin$Skin10;
	})(eui.Skin);

	var StartPanelSkin$Skin11 = 	(function (_super) {
		__extends(StartPanelSkin$Skin11, _super);
		function StartPanelSkin$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","sound1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartPanelSkin$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "sound0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StartPanelSkin$Skin11;
	})(eui.Skin);

	function StartPanelSkin() {
		_super.call(this);
		this.skinParts = ["startBtn","scoreBtn","levelBtn","shareBtn","soundBtn"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.startBtn_i(),this.scoreBtn_i(),this.levelBtn_i(),this.shareBtn_i(),this.soundBtn_i()];
	}
	var _proto = StartPanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "game_bg_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "logo_png";
		t.y = 90;
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new eui.Button();
		this.startBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 420;
		t.skinName = StartPanelSkin$Skin7;
		return t;
	};
	_proto.scoreBtn_i = function () {
		var t = new eui.Button();
		this.scoreBtn = t;
		t.label = "";
		t.x = 202;
		t.y = 541;
		t.skinName = StartPanelSkin$Skin8;
		return t;
	};
	_proto.levelBtn_i = function () {
		var t = new eui.Button();
		this.levelBtn = t;
		t.label = "";
		t.x = 202;
		t.y = 651;
		t.skinName = StartPanelSkin$Skin9;
		return t;
	};
	_proto.shareBtn_i = function () {
		var t = new eui.Button();
		this.shareBtn = t;
		t.label = "";
		t.x = 202;
		t.y = 761.49;
		t.skinName = StartPanelSkin$Skin10;
		return t;
	};
	_proto.soundBtn_i = function () {
		var t = new eui.Button();
		this.soundBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 920;
		t.skinName = StartPanelSkin$Skin11;
		return t;
	};
	return StartPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);