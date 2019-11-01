"use strict";
/*
 * @Author: Tim Koepsel
 * @Date: 2019-10-22 23:44:46
 * @Last Modified by:   Tim Koepsel
 * @Last Modified time: 2019-10-22 23:44:46
 */
Object.defineProperty(exports, "__esModule", { value: true });
const BaseLocation_1 = require("../../base/BaseLocation");
class LocationPolice extends BaseLocation_1.default {
    constructor() {
        super('Polizei', 60, new mp.Vector3(439.6697, -982.6948, 30.6896), true, 38);
    }
}
exports.default = LocationPolice;
//# sourceMappingURL=LocationPolice.js.map