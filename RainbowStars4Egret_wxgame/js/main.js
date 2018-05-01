var egret = window.egret;var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var game;
(function (game) {
    var Ball = (function (_super) {
        __extends(Ball, _super);
        function Ball() {
            var _this = _super.call(this) || this;
            _this._isExpand = false;
            _this._radius = 0;
            _this._expandScaleValue = 4;
            _this._maxSpeed = 1.5;
            _this._clockwizeRotation = -1;
            _this._dx = 0;
            _this._dy = 0;
            _this.Star = new egret.Bitmap(RES.getRes("star_png"));
            _this._dx = 2 + Math.random() * _this._maxSpeed;
            _this._dy = 2 + Math.random() * _this._maxSpeed;
            _this._dx = _this._dx * (Math.random() < 0.5 ? 1 : -1);
            _this._dy = _this._dy * (Math.random() < 0.5 ? 1 : -1);
            if (Math.random() < 0.5) {
                _this._clockwizeRotation = (1);
            }
            _this.x = Math.random() * game.Game.stageW;
            _this.y = Math.random() * game.Game.stageH;
            _this.addEventListener(egret.Event.ENTER_FRAME, _this.onEnterFrame, _this);
            _this.drawBall();
            return _this;
        }
        /****扩大更新 */
        Ball.prototype.onExpandUpdate = function () {
            this.dispatchEvent(new egret.Event(game.Ball.EXPAND));
        };
        /***停止与移除 */
        Ball.prototype.stopAndDissappear = function () {
            var _self__ = this;
            _self__.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
            // gs.TweenMax.to_static_gs_TweenMax(this, 2, { "scaleX": 0, "scaleY": 0, "onComplete": flash.bind(this.reportRemove, this) });
            egret.Tween.get(this).to({ "scaleX": 0, "scaleY": 0 }, 2000).call(this.reportRemove, this);
        };
        Object.defineProperty(Ball.prototype, "radius", {
            get: function () {
                return this._radius;
            },
            set: function (value) {
                this._radius = ~~value;
            },
            enumerable: true,
            configurable: true
        });
        Ball.prototype.reportRemove = function () {
            var _self__ = this;
            if (game.Ball.activated > 0) {
                game.Ball.activated--;
            }
            _self__.removeEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
            _self__.dispatchEvent(new egret.Event(game.Ball.REMOVE));
            if (game.Ball.activated == 0) {
                _self__.dispatchEvent(new egret.Event(game.Ball.END_ALL));
            }
        };
        /***扩大 */
        Ball.prototype.expand = function () {
            var _self__ = this;
            if (this._isExpand) {
                return;
            }
            _self__.dispatchEvent(new egret.Event(game.Ball.START_EXPAND));
            game.Ball.activated++;
            // gs.TweenMax.to_static_gs_TweenMax(this, 1, { "scaleX": this._expandScaleValue, "scaleY": this._expandScaleValue, "onComplete": flash.bind(this.collapse, this), "onUpdate": flash.bind(this.changeRadius, this) });
            egret.Tween.get(this, { onChange: this.changeRadius, onChangeObj: this }).to({ scaleX: this._expandScaleValue, scaleY: this._expandScaleValue }, 1000).call(this.collapse, this);
            this._isExpand = true;
        };
        /****画星星 */
        Ball.prototype.drawBall = function () {
            var _self__ = this;
            this._asset = this.Star;
            this._asset.scaleX = this._asset.scaleY = 0.5;
            this._asset.x = -this._asset.width * 0.5 * this._asset.scaleX;
            this._asset.y = -this._asset.height * 0.5 * this._asset.scaleY;
            // this._asset["smoothing"] = true;
            _self__.addChild(this._asset);
            var cm = new com.ColorMatrix();
            cm.adjustHue(Math.random() * 360 - 180);
            this.filters = [new egret.ColorMatrixFilter(cm.matrix)];
        };
        Object.defineProperty(Ball.prototype, "isExpand", {
            get: function () {
                return this._isExpand;
            },
            enumerable: true,
            configurable: true
        });
        Ball.prototype.collapse = function () {
            // gs.TweenMax.to_static_gs_TweenMax(this, 0.3, { "delay": game.Ball.explosionSpeed, "scaleX": 0, "scaleY": 0, "onComplete": flash.bind(this.reportRemove, this), "onUpdate": flash.bind(this.changeRadius, this) });
            egret.Tween.get(this, { onChange: this.changeRadius, onChangeObj: this }).wait(game.Ball.explosionSpeed).to({ scaleX: 0, scaleY: 0 }, 300).call(this.reportRemove, this);
            this._isExpand = true;
        };
        /***改变半径 */
        Ball.prototype.changeRadius = function () {
            this._radius = ~~(this.width * 0.7);
        };
        Ball.prototype.onEnterFrame = function (e) {
            var _self__ = this;
            if (!this._isExpand) {
                this.x = this.x + this._dx;
                this.y = this.y + this._dy;
                if (this.x < 0 || this.x > game.Game.stageW) {
                    this._dx = -this._dx;
                }
                if (this.y < 0 || this.y > game.Game.stageH) {
                    this._dy = -this._dy;
                }
            }
            else {
                _self__.dispatchEvent(new egret.Event(game.Ball.EXPAND));
            }
            this.rotation = this.rotation + this._dx * 2 * this._clockwizeRotation;
        };
        Ball.prototype.checkIntersectWithBall = function (ball) {
            return egret.Point.distance(new egret.Point(ball.x, ball.y), new egret.Point(this.x, this.y)) < ball.radius * 0.5 * ball.scaleX + this._radius * 0.5 * this.scaleX;
        };
        return Ball;
    }(egret.Sprite));
    game.Ball = Ball;
    __reflect(Ball.prototype, "game.Ball");
})(game || (game = {}));
game.Ball.EXPAND = "expand";
game.Ball.REMOVE = "remove";
game.Ball.activated = 0;
game.Ball.explosionSpeed = 1;
game.Ball.START_EXPAND = "startExpand";
game.Ball.END_ALL = "endAllBalls";
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var AssetAdapter = (function () {
    function AssetAdapter() {
    }
    /**
     * @language zh_CN
     * 解析素材
     * @param source 待解析的新素材标识符
     * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
     * @param thisObject callBack的 this 引用
     */
    AssetAdapter.prototype.getAsset = function (source, compFunc, thisObject) {
        function onGetRes(data) {
            compFunc.call(thisObject, data, source);
        }
        if (RES.hasRes(source)) {
            var data = RES.getRes(source);
            if (data) {
                onGetRes(data);
            }
            else {
                RES.getResAsync(source, onGetRes, this);
            }
        }
        else {
            RES.getResByUrl(source, onGetRes, this, RES.ResourceItem.TYPE_IMAGE);
        }
    };
    return AssetAdapter;
}());
__reflect(AssetAdapter.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        this.textField.text = "Loading..." + current + "/" + total;
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene();
                        return [4 /*yield*/, platform.login()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, platform.getUserInfo()];
                    case 3:
                        userInfo = _a.sent();
                        console.log(userInfo);
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadTheme()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 3:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadTheme = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            var theme = new eui.Theme("resource/default.thm.json", _this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                resolve();
            }, _this);
        });
    };
    /**
     * 创建场景界面
     * Create scene interface
     */
    Main.prototype.createGameScene = function () {
        this.addChild(new game.Game());
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    Main.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
var DebugPlatform = (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return DebugPlatform;
}());
__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]);
if (!window.platform) {
    window.platform = new DebugPlatform();
}
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var ThemeAdapter = (function () {
    function ThemeAdapter() {
    }
    /**
     * 解析主题
     * @param url 待解析的主题url
     * @param onSuccess 解析完成回调函数，示例：compFunc(e:egret.Event):void;
     * @param onError 解析失败回调函数，示例：errorFunc():void;
     * @param thisObject 回调的this引用
     */
    ThemeAdapter.prototype.getTheme = function (url, onSuccess, onError, thisObject) {
        function onResGet(e) {
            onSuccess.call(thisObject, e);
        }
        function onResError(e) {
            if (e.resItem.url == url) {
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
                onError.call(thisObject);
            }
        }
        if (typeof generateEUI !== 'undefined') {
            egret.callLater(function () {
                onSuccess.call(thisObject, generateEUI);
            }, this);
        }
        else {
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
            RES.getResByUrl(url, onResGet, this, RES.ResourceItem.TYPE_TEXT);
        }
    };
    return ThemeAdapter;
}());
__reflect(ThemeAdapter.prototype, "ThemeAdapter", ["eui.IThemeAdapter"]);
var com;
(function (com) {
    var ColorMatrix = (function () {
        function ColorMatrix(p_matrix) {
            if (p_matrix === void 0) { p_matrix = null; }
            this.matrix = [];
            // super();
            p_matrix = this.fixMatrix(p_matrix);
            this.copyMatrix(p_matrix.length == com.ColorMatrix.LENGTH ? p_matrix : com.ColorMatrix.IDENTITY_MATRIX);
        }
        ColorMatrix.prototype.adjustBrightness = function (p_val) {
            p_val = this.cleanValue(p_val, 100);
            if (p_val == 0 || isNaN(p_val)) {
                return;
            }
            this.multiplyMatrix([1, 0, 0, 0, p_val, 0, 1, 0, 0, p_val, 0, 0, 1, 0, p_val, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]);
        };
        ColorMatrix.prototype.adjustSaturation = function (p_val) {
            p_val = this.cleanValue(p_val, 100);
            if (p_val == 0 || isNaN(p_val)) {
                return;
            }
            var x = 1 + (p_val > 0 ? 3 * p_val / 100 : p_val / 100);
            var lumR = 0.3086;
            var lumG = 0.6094;
            var lumB = 0.082;
            this.multiplyMatrix([lumR * (1 - x) + x, lumG * (1 - x), lumB * (1 - x), 0, 0, lumR * (1 - x), lumG * (1 - x) + x, lumB * (1 - x), 0, 0, lumR * (1 - x), lumG * (1 - x), lumB * (1 - x) + x, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]);
        };
        ColorMatrix.prototype.multiplyMatrix = function (p_matrix) {
            var j = (0);
            var val = 0;
            var k = 0;
            var col = [];
            for (var i = (0); i < 5; i++) {
                for (j = (0); j < 5; j++) {
                    col[j] = this.matrix[j + i * 5];
                }
                for (j = (0); j < 5; j++) {
                    val = 0;
                    for (k = 0; k < 5; k++) {
                        val = val + p_matrix[j + k * 5] * col[k];
                    }
                    this.matrix[j + i * 5] = val;
                }
            }
        };
        ColorMatrix.prototype.cleanValue = function (p_val, p_limit) {
            return Math.min(p_limit, Math.max(-p_limit, p_val));
        };
        ColorMatrix.prototype.adjustHue = function (p_val) {
            p_val = this.cleanValue(p_val, 180) / 180 * Math.PI;
            if (p_val == 0 || isNaN(p_val)) {
                return;
            }
            var cosVal = Math.cos(p_val);
            var sinVal = Math.sin(p_val);
            var lumR = 0.213;
            var lumG = 0.715;
            var lumB = 0.072;
            this.multiplyMatrix([lumR + cosVal * (1 - lumR) + sinVal * -lumR, lumG + cosVal * -lumG + sinVal * -lumG, lumB + cosVal * -lumB + sinVal * (1 - lumB), 0, 0, lumR + cosVal * -lumR + sinVal * 0.143, lumG + cosVal * (1 - lumG) + sinVal * 0.14, lumB + cosVal * -lumB + sinVal * -0.283, 0, 0, lumR + cosVal * -lumR + sinVal * -(1 - lumR), lumG + cosVal * -lumG + sinVal * lumG, lumB + cosVal * (1 - lumB) + sinVal * lumB, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]);
        };
        ColorMatrix.prototype.toString = function () {
            return "ColorMatrix [ " + this.matrix.join(" , ") + " ]";
        };
        ColorMatrix.prototype.fixMatrix = function (p_matrix) {
            if (p_matrix === void 0) { p_matrix = null; }
            if (p_matrix == null) {
                return com.ColorMatrix.IDENTITY_MATRIX;
            }
            if (p_matrix) {
                p_matrix = p_matrix.slice(0);
            }
            if (p_matrix.length < com.ColorMatrix.LENGTH) {
                p_matrix = p_matrix.slice(0, p_matrix.length).concat(com.ColorMatrix.IDENTITY_MATRIX.slice(p_matrix.length, com.ColorMatrix.LENGTH));
            }
            else if (p_matrix.length > com.ColorMatrix.LENGTH) {
                p_matrix = p_matrix.slice(0, com.ColorMatrix.LENGTH);
            }
            return p_matrix;
        };
        ColorMatrix.prototype.reset = function () {
            for (var i = (0); i < com.ColorMatrix.LENGTH; i++) {
                this[i] = com.ColorMatrix.IDENTITY_MATRIX[i];
            }
        };
        ColorMatrix.prototype.adjustContrast = function (p_val) {
            var x = NaN;
            p_val = this.cleanValue(p_val, 100);
            if (p_val == 0 || isNaN(p_val)) {
                return;
            }
            if (p_val < 0) {
                x = 127 + p_val / 100 * 127;
            }
            else {
                x = p_val % 1;
                if (x == 0) {
                    x = com.ColorMatrix.DELTA_INDEX[p_val];
                }
                else {
                    x = com.ColorMatrix.DELTA_INDEX[p_val << 0] * (1 - x) + com.ColorMatrix.DELTA_INDEX[(p_val << 0) + 1] * x;
                }
                x = x * 127 + 127;
            }
            this.multiplyMatrix([x / 127, 0, 0, 0, 0.5 * (127 - x), 0, x / 127, 0, 0, 0.5 * (127 - x), 0, 0, x / 127, 0, 0.5 * (127 - x), 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]);
        };
        ColorMatrix.prototype.adjustColor = function (p_brightness, p_contrast, p_saturation, p_hue) {
            this.adjustHue(p_hue);
            this.adjustContrast(p_contrast);
            this.adjustBrightness(p_brightness);
            this.adjustSaturation(p_saturation);
        };
        ColorMatrix.prototype.copyMatrix = function (p_matrix) {
            var l = com.ColorMatrix.LENGTH;
            for (var i = (0); i < l; i++) {
                this.matrix[i] = p_matrix[i];
            }
        };
        // public concat(p_matrix: Array<any>) {
        // 	p_matrix = this.fixMatrix(p_matrix);
        // 	if (p_matrix.length != com.ColorMatrix.LENGTH) {
        // 		return;
        // 	}
        // 	this.multiplyMatrix(p_matrix);
        // }
        // public clone(): com.ColorMatrix {
        // 	return new com.ColorMatrix(this);
        // }
        ColorMatrix.prototype.toArray = function () {
            var _self__ = this;
            return _self__.slice(0, 20);
        };
        return ColorMatrix;
    }());
    com.ColorMatrix = ColorMatrix;
    __reflect(ColorMatrix.prototype, "com.ColorMatrix");
})(com || (com = {}));
com.ColorMatrix.IDENTITY_MATRIX = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
com.ColorMatrix.LENGTH = com.ColorMatrix.IDENTITY_MATRIX.length;
com.ColorMatrix.DELTA_INDEX = [0, 0.01, 0.02, 0.04, 0.05, 0.06, 0.07, 0.08, 0.1, 0.11, 0.12, 0.14, 0.15, 0.16, 0.17, 0.18, 0.2, 0.21, 0.22, 0.24, 0.25, 0.27, 0.28, 0.3, 0.32, 0.34, 0.36, 0.38, 0.4, 0.42, 0.44, 0.46, 0.48, 0.5, 0.53, 0.56, 0.59, 0.62, 0.65, 0.68, 0.71, 0.74, 0.77, 0.8, 0.83, 0.86, 0.89, 0.92, 0.95, 0.98, 1, 1.06, 1.12, 1.18, 1.24, 1.3, 1.36, 1.42, 1.48, 1.54, 1.6, 1.66, 1.72, 1.78, 1.84, 1.9, 1.96, 2, 2.12, 2.25, 2.37, 2.5, 2.62, 2.75, 2.87, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.3, 4.7, 4.9, 5, 5.5, 6, 6.5, 6.8, 7, 7.3, 7.5, 7.8, 8, 8.4, 8.7, 9, 9.4, 9.6, 9.8, 10];
var game;
(function (game) {
    var Cursor = (function (_super) {
        __extends(Cursor, _super);
        function Cursor() {
            return _super.call(this) || this;
            // this.Sta = game.Cursor_Sta;
            // this.drawBall();
        }
        Object.defineProperty(Cursor.prototype, "radius", {
            get: function () {
                return this._radius * 1.5;
            },
            enumerable: true,
            configurable: true
        });
        // public set radius(value: number) {
        // 	egret.superSetter(game.Cursor, this, "radius", value);
        // }
        Cursor.prototype.drawBall = function () {
            this.Star_game_Cursor = new egret.Bitmap(RES.getRes("cursor_star_png"));
            var _self__ = this;
            this._asset = this.Star_game_Cursor;
            this._asset.scaleX = this._asset.scaleY = 0.5;
            this._asset.x = -this._asset.width * 0.5 * this._asset.scaleX;
            this._asset.y = -this._asset.height * 0.5 * this._asset.scaleY;
            _self__.addChild(this._asset);
            console.log("cursor");
        };
        Cursor.prototype.onEnterFrame = function (e) {
            var _self__ = this;
            _self__.dispatchEvent(new egret.Event(game.Ball.EXPAND));
        };
        return Cursor;
    }(game.Ball));
    game.Cursor = Cursor;
    __reflect(Cursor.prototype, "game.Cursor");
})(game || (game = {}));
var game;
(function (game) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            var _this = _super.call(this) || this;
            // private _levelScreen:mcLevel;
            _this._totalLevels = 10;
            // private _startupPanel:game.display.StartupPanel;
            // private _successLevelScreen:game.display.LevelSuccessPanel;
            // private _mcGameOver:game.display.GameOverPanel;
            _this._levelSuccess = false;
            _this._balls = [];
            _this.addBackground();
            _this.addStartupPanel();
            _this.testStartGame();
            return _this;
        }
        Game.prototype.addEndLevelPanel = function () {
            var _self__ = this;
            console.log("## addEndLevelPanel");
            // this._endLevelPanel = new game.display.EndLevelPanel();
            // this.centerMovie(this._endLevelPanel);
            // this._endLevelPanel.lives = this._gui.lives;
            // _self__.addChild(this._endLevelPanel);
            // this._endLevelPanel.addEventListener(game.display.EndLevelPanel.PLAY_AGAIN,this.replayLevel, this);
        };
        Game.prototype.subscribeBallToEvents = function (ball) {
            ball.addEventListener(game.Ball.EXPAND, this.checkNearBalls, this);
            ball.addEventListener(game.Ball.REMOVE, this.removeBall, this);
            ball.addEventListener(game.Ball.END_ALL, this.endLevel, this);
            ball.addEventListener(game.Ball.START_EXPAND, this.onStartExpand, this);
        };
        Game.prototype.addStartupPanel = function (e) {
            if (e === void 0) { e = null; }
            var _self__ = this;
            // this.clearPanel(this._mcGameOver);
            // this._startupPanel = new game.display.StartupPanel();
            // _self__.addChild(this._startupPanel);
            // this._startupPanel.addEventListener(game.display.StartupPanel.PLAY, this.onClickPlay, this);
            this._levelSuccess = false;
        };
        Game.prototype.endLevel = function (e) {
            var ball = null;
            var ball_key_a;
            for (ball_key_a in this._balls.map) {
                ball = this._balls.map[ball_key_a][1];
                ball.removeEventListener(game.Ball.END_ALL, this.endLevel, this);
                ball.stopAndDissappear();
            }
            // this._gui.alpha = 0;
            // this._levelSuccess = this._gui.explosed >= game.common.GameData.GOAL_BALLS[this._gui.level - 1];
            console.log("endLevel", this._levelSuccess);
            if (this._levelSuccess) {
                this.showSuccessLevelScreen();
            }
            else {
                // this._gui.lives--;
                // if (this._gui.lives == 0) {
                // 	this.gameOver();
                // }
                // else {
                // 	this.addEndLevelPanel();
                // }
            }
        };
        Game.prototype.removeAllBalls = function () {
            var ball = null;
            var ball_key_a;
            for (ball_key_a in this._balls.map) {
                ball = this._balls.map[ball_key_a][1];
                ball.reportRemove();
            }
            this._balls = [];
        };
        Game.prototype.centerMovie = function ($mc) {
            $mc.x = game.Game.stageW / 2 - $mc.width / 2;
            $mc.y = game.Game.stageH / 2 - $mc.height / 2;
        };
        Game.prototype.replayLevel = function (e) {
            if (e === void 0) { e = null; }
            var _self__ = this;
            console.log("## replayLevel");
            // if (this._endLevelPanel) {
            // 	this._endLevelPanel.removeEventListener(game.display.EndLevelPanel.PLAY_AGAIN, flash.bind(this.replayLevel, this), null);
            // 	_self__.removeChild(this._endLevelPanel);
            // 	this._endLevelPanel = null;
            // }
            this.showStartLevel();
        };
        Game.prototype.removeMe = function ($sprite) {
            var _self__ = this;
            try {
                _self__.removeChild($sprite);
                var $sprite = null;
            }
            catch (e) { }
        };
        /***关卡选择 */
        Game.prototype.showStartLevel = function (e) {
            if (e === void 0) { e = null; }
            var _self__ = this;
            console.log("## showStartLevel");
            // this.clearPanel(this._successLevelScreen);
            // if (<any>!this._gui) {
            // 	this._gui = new game.display.Gui();
            // }
            // console.log("LevelSuccessPanel success ", this._levelSuccess);
            // if (this._levelSuccess) {
            // 	this._gui.level++;
            // }
            // this._levelScreen = new mcLevel();
            // _self__.addChild(this._levelScreen);
            // this._gui.alpha = 0;
            // this._levelScreen.gotoAndStop(this._gui.level);
            // gs.TweenMax.from_static_gs_TweenMax(this._levelScreen, 2, { "alpha": 0.1 });
            // this._levelScreen.btnPlay.addEventListener(egret.TouchEvent.TOUCH_TAP, flash.bind(this.startGameLevel, this), null);
            // this._levelScreen.txtCollect.text = "Explode " + game.common.GameData.GOAL_BALLS[this._gui.level - 1] + " stars out of a total of " + game.common.GameData.TOTAL_BALLS[this._gui.level - 1] + " stars";
            // this._levelScreen.txtCollect.textAlign = "center";
            // this.centerMovie(this._levelScreen);
        };
        Game.prototype.onStartExpand = function (e) {
            console.log("start expand");
            if (!(e.target instanceof game.Cursor)) {
                // this.addExplodeText(e.target["x"], e.target["y"]);
                // this._gui.explosed++;
                // this._gui.score = this._gui.score + game.Ball.activated * 1000;
                game.SoundManager.playRandomExplodeSound();
            }
            // this._gui.explosedSuccess = this._gui.explosed >= game.common.GameData.GOAL_BALLS[this._gui.level - 1];
        };
        Game.prototype.removeBall = function (e) {
            console.log("remove ball");
            if (e.target instanceof game.Cursor) {
                this._ballsHolder.removeChild(e.target);
                return;
            }
            var ball = e.target;
            var idx = this._balls.indexOf(ball);
            this._balls.splice(idx, 1);
            try {
                this._ballsHolder.removeChild(ball);
            }
            catch (e) { }
        };
        Game.prototype.checkNearBalls = function (e) {
            var ball = null;
            var ball_key_a;
            for (ball_key_a in this._balls) {
                ball = this._balls[ball_key_a];
                if (ball.checkIntersectWithBall(e.target)) {
                    ball.expand();
                }
            }
        };
        Game.prototype.addExplodeText = function (x, y) {
            x = ~~(x);
            y = ~~(y);
            var _self__ = this;
            // var mcExplode: mcExplodeStarText = new mcExplodeStarText();
            // _self__.addChild(mcExplode);
            // mcExplode.x = $x;
            // mcExplode.y = $y;
            // mcExplode.txt.text = String((this._gui.explosed + 1) * 1000);
            // mcExplode.alpha = 0;
            // gs.TweenMax.to_static_gs_TweenMax(mcExplode, 0.3, { "delay": 2, "alpha": 1 });
            // gs.TweenMax.to_static_gs_TweenMax(mcExplode, 0.3, { "delay": 2.5, "alpha": 0, "onComplete": flash.bind(this.removeMe, this), "onCompleteParams": [mcExplode] });
        };
        Game.prototype.addGui = function () {
            var _self__ = this;
            // _self__.addChild(this._gui);
        };
        Game.prototype.gameOver = function (e) {
            if (e === void 0) { e = null; }
            var _self__ = this;
            // console.log("## gameOver");
            // this.removeAllBalls();
            // this.clearPanel(this._successLevelScreen);
            // this._mcGameOver = new game.display.GameOverPanel();
            // this._mcGameOver.addEventListener(game.display.GameOverPanel.PLAY_AGAIN, flash.bind(this.onPlayAgain, this), null);
            // this._mcGameOver.addEventListener(game.display.GameOverPanel.GO_TO_MAIN, flash.bind(this.addStartupPanel, this), null, true);
            // this._mcGameOver.score = this._gui.score;
            // this.centerMovie(this._mcGameOver);
            // _self__.addChild(this._mcGameOver);
            // if (this._gui.level == this._totalLevels && this._levelSuccess) {
            // 	this._mcGameOver.winGame();
            // }
            // _self__.removeChild(this._gui);
            // this._gui = null;
        };
        /***增加引爆的星星 */
        Game.prototype.addChargedBall = function (e) {
            var _self__ = this;
            // if (this._gui.alpha <= 0.7) {
            // 	return;
            // }
            var ball = new game.Cursor();
            this._ballsHolder.addChildAt(ball, 0);
            this.subscribeBallToEvents(ball);
            ball.expand();
            ball.x = e.localX;
            ball.y = e.localY;
            // _self__.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.addChargedBall, this);
        };
        /***添加背景 */
        Game.prototype.addBackground = function () {
            var _self__ = this;
            this._background = new egret.Sprite();
            this._background.graphics.beginFill(0);
            this._background.graphics.drawRect(0, 0, game.Game.stageW, game.Game.stageH);
            this.addChild(this._background);
            // _self__.addChild(new flash.Bitmap(new imgBackground(1, 1)));
        };
        /***开始游戏关卡 */
        Game.prototype.startGameLevel = function (e) {
            if (e === void 0) { e = null; }
            var _self__ = this;
            console.log("## startGameLevel");
            // game.sound.SoundManager.play(game.sound.SoundManager.BUTTON_CLICK);
            // this.addGui();
            // this._gui.alpha = 1;
            // _self__.removeChild(this._levelScreen);
            this._ballsHolder = new egret.Sprite();
            _self__.addChild(this._ballsHolder);
            // this.addBalls(game.common.GameData.TOTAL_BALLS[this._gui.level - 1]);
            this.touchEnabled = true;
            _self__.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.addChargedBall, this);
            // this._gui.totalExplosed = game.common.GameData.GOAL_BALLS[this._gui.level - 1];
            // this._gui.explosed = 0;
            // this._gui.startLevel();
        };
        Game.prototype.testStartGame = function () {
            this._ballsHolder = new egret.Sprite();
            this.addChild(this._ballsHolder);
            this.addBalls(100);
            this.touchEnabled = true;
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.addChargedBall, this);
        };
        Game.prototype.showSuccessLevelScreen = function () {
            var _self__ = this;
            console.log("## showSuccessLevelScreen");
            // this._successLevelScreen = new game.display.LevelSuccessPanel();
            // this.centerMovie(this._successLevelScreen);
            // this._successLevelScreen.levelBonus = this._gui.level * 1000;
            // this._successLevelScreen.livesBonus = this._gui.lives * 10000;
            // this._successLevelScreen.extraBonus = (this._gui.explosed - game.common.GameData.GOAL_BALLS[this._gui.level - 1]) * 10000;
            // this._gui.score = this._gui.score + this._successLevelScreen.calculateScore();
            // this._successLevelScreen.totalScore = this._gui.score;
            // if (this._gui.level != this._totalLevels) {
            // 	this._successLevelScreen.addEventListener(game.display.LevelSuccessPanel.PLAY_NEXT_ROUND, flash.bind(this.showStartLevel, this), null);
            // }
            // else {
            // 	this._successLevelScreen.addEventListener(game.display.LevelSuccessPanel.PLAY_NEXT_ROUND, flash.bind(this.gameOver, this), null);
            // }
            // _self__.addChild(this._successLevelScreen);
        };
        Game.prototype.onPlayAgain = function (e) {
            console.log("## onPlayAgain");
            // this.clearPanel(this._mcGameOver);
            this._levelSuccess = false;
            this.showStartLevel();
        };
        Game.prototype.clearPanel = function ($do) {
            console.log("clear " + $do);
            if ($do) {
                try {
                    $do.parent.removeChild($do);
                }
                catch (e) { }
                var $do = null;
            }
        };
        Game.prototype.addBalls = function (numBalls) {
            numBalls = ~~(numBalls);
            var ball = null;
            for (var i = (0); i < numBalls; i++) {
                ball = new game.Ball();
                this._ballsHolder.addChild(ball);
                this._ballsHolder.cacheAsBitmap = true;
                this._balls.push(ball);
                this.subscribeBallToEvents(ball);
            }
        };
        /***点击游戏开始 */
        Game.prototype.onClickPlay = function (e) {
            var _self__ = this;
            // _self__.removeChild(this._startupPanel);
            this.showStartLevel();
        };
        return Game;
    }(egret.Sprite));
    game.Game = Game;
    __reflect(Game.prototype, "game.Game");
    game.Game.stageW = 640;
    game.Game.stageH = 1136;
})(game || (game = {}));
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
;window.Main = Main;