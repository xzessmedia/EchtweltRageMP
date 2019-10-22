"use strict";
/*
 * @Author: Dennis Reich
 * @Date: 2019-02-08 22:45:10
 * @Last Modified by: Dennis Reich
 * @Last Modified time: 2019-02-08 22:51:00
 */
Object.defineProperty(exports, "__esModule", { value: true });
const EWDefinitions_1 = require("../../../EWDefinitions");
const BaseLocationAction_1 = require("../../base/BaseLocationAction");
class LocationBikeRantal extends BaseLocationAction_1.default {
    constructor() {
        super('Fahrradverleih', new mp.Vector3(-1014.438, -2690.965, 13.076), 494, 77, 0, new EWDefinitions_1.default(0, 0, 0, 0), (player) => {
            this.OnEnter(player);
        }, (player) => {
            this.OnExit(player);
        });
    }
    OnEnter(player) {
        player.call('EW-CarSpawn');
    }
    OnExit(player) {
    }
}
exports.default = LocationBikeRantal;
//# sourceMappingURL=LocationBikeRental.js.map