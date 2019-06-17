"use strict";
/*
 * @Author: Dennis Reich
 * @Date: 2019-02-08 20:46:40
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-15 23:21:34
 */
Object.defineProperty(exports, "__esModule", { value: true });
const BaseLocation_1 = require("../../base/BaseLocation");
class LocationLSMC extends BaseLocation_1.default {
    constructor() {
        super('LSMC', 61, new mp.Vector3(-453.1832, -340.3357, 34.36355), true, 1);
    }
}
exports.default = LocationLSMC;
//# sourceMappingURL=LocationLSMC.js.map