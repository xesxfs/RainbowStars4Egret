var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameData = (function () {
    function GameData() {
    }
    // public static GOAL_BALLS = [3, 7, 12, 18, 23, 30, 37, 45, 53, 64];
    // public static TOTAL_BALLS = [20, 25, 30, 35, 40, 45, 50, 55, 60, 70];
    GameData.GOAL_BALLS = [5, 10, 10, 15, 20, 20, 25, 30, 35, 40, 45, 55, 60, 65, 75, 80, 90, 95, 105, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 215, 225, 235, 250, 260, 275, 290, 300, 315, 330, 345, 360, 375, 390, 405, 420, 435, 450, 470, 485, 500, 520, 535, 555, 575, 590, 610, 630, 650, 670, 690, 710, 730, 750, 770, 790, 815, 835, 855, 880, 900, 925, 945, 970, 995, 1020, 1040, 1065, 1090, 1115, 1140, 1165, 1190, 1220, 1245, 1270, 1300, 1325, 1350, 1380, 1405, 1435, 1465, 1490, 1520, 1550, 1580, 1610, 1640, 1670];
    GameData.TOTAL_BALLS = [20, 25, 30, 40, 45, 50, 60, 65, 75, 80, 90, 100, 105, 115, 125, 135, 150, 160, 170, 185, 195, 210, 220, 235, 250, 260, 275, 290, 305, 320, 340, 355, 370, 390, 405, 425, 440, 460, 480, 500, 520, 540, 560, 580, 600, 625, 645, 665, 690, 715, 735, 760, 785, 810, 835, 860, 885, 910, 935, 965, 990, 1020, 1045, 1075, 1100, 1130, 1160, 1190, 1220, 1250, 1280, 1310, 1345, 1375, 1405, 1440, 1470, 1505, 1540, 1570, 1605, 1640, 1675, 1710, 1745, 1780, 1820, 1855, 1890, 1930, 1965, 2005, 2045, 2085, 2120, 2160, 2200, 2240, 2280,];
    GameData.explosed = 0;
    GameData.score = 0;
    GameData.explosedSuccess = false;
    GameData.level = 1;
    GameData.lives = 0;
    return GameData;
}());
__reflect(GameData.prototype, "GameData");
//# sourceMappingURL=GameData.js.map