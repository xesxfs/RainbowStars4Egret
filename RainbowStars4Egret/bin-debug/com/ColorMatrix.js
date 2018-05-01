var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
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
//# sourceMappingURL=ColorMatrix.js.map