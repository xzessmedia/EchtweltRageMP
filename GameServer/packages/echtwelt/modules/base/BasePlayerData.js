"use strict";
/*
 * @Author: Tim Koepsel
 * @Date: 2019-02-18 01:08:59
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-08-26 20:23:03
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Inventory_1 = require("./Inventory");
class BasePlayerData {
    constructor(defaultWeight = 100, defaultSize = 100) {
        this.Inventory = new Inventory_1.default(defaultWeight, defaultSize);
        this.IsCuffed = false;
    }
}
exports.default = BasePlayerData;
//# sourceMappingURL=BasePlayerData.js.map