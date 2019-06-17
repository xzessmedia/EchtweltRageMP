"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: Tim Koepsel
 * @Date: 2019-02-15 22:37:33
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-16 01:28:29
 */
const rpc = require("rage-rpc");
const BaseLocationAction_1 = require("../../base/BaseLocationAction");
const EWDefinitions_1 = require("../../../EWDefinitions");
class LocationWaschanlage extends BaseLocationAction_1.default {
    constructor(position) {
        super('Waschanlage', position, 100, 74, 1, new EWDefinitions_1.default(0, 0, 255, 100), (player) => {
            this.OnEnter(player);
        }, (player) => {
            this.OnExit(player);
        });
    }
    OnEnter(player) {
        player.notify('Test');
        if (player.vehicle != null && player.seat === -1) {
            var vehicle = player.vehicle;
            var value = {
                vehicle: vehicle,
                amount: 0.0
            };
            player.notify('Du wäscht deinen Wagen');
            rpc.callClient('EW-Vehicle-ChangeDirtlevel', value);
        }
    }
    OnExit(player) {
    }
}
exports.default = LocationWaschanlage;
//# sourceMappingURL=LocationWaschanlage.js.map