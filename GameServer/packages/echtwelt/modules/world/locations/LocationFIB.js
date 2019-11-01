"use strict";
/*
 * @Author: Tim Koepsel
 * @Date: 2019-10-22 23:44:13
 * @Last Modified by:   Tim Koepsel
 * @Last Modified time: 2019-10-22 23:44:13
 */
Object.defineProperty(exports, "__esModule", { value: true });
const BaseLocation_1 = require("../../base/BaseLocation");
class LocationFIB extends BaseLocation_1.default {
    constructor() {
        super('FIB-Zentrale', 60, new mp.Vector3(104.1859, -745.4321, 45.75476), true, 38);
    }
}
exports.default = LocationFIB;
//# sourceMappingURL=LocationFIB.js.map