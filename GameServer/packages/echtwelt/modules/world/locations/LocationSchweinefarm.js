"use strict";
/*
 * @Author: Tim Koepsel
 * @Date: 2019-10-22 23:44:55
 * @Last Modified by:   Tim Koepsel
 * @Last Modified time: 2019-10-22 23:44:55
 */
Object.defineProperty(exports, "__esModule", { value: true });
const BaseLocation_1 = require("../../base/BaseLocation");
class LocationSchweineFarm extends BaseLocation_1.default {
    constructor() {
        super('Schweinefarm', 120, new mp.Vector3(2417.542, 4784.507, 34.68021), true, 33);
        this.AddPigs();
    }
    AddPigs() {
    }
}
exports.default = LocationSchweineFarm;
//# sourceMappingURL=LocationSchweinefarm.js.map