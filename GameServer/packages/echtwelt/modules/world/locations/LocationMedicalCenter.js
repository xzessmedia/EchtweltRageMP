"use strict";
/*
 * @Author: Dennis Reich
 * @Date: 2019-02-08 20:46:40
 * @Last Modified by: Dennis Reich
 * @Last Modified time: 2019-02-08 21:23:32
 */
Object.defineProperty(exports, "__esModule", { value: true });
const BaseLocation_1 = require("../../base/BaseLocation");
const EWDefinitions_1 = require("../../../EWDefinitions");
class LocationMedicalCenter extends BaseLocation_1.default {
    constructor() {
        super('Krankenhaus', 61, new mp.Vector3(-453.1832, -340.3357, 34.36355), new EWDefinitions_1.default(255, 0, 0, 1), false);
    }
}
exports.default = LocationMedicalCenter;
//# sourceMappingURL=LocationMedicalCenter.js.map