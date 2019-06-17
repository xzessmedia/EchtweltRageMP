"use strict";
/*
 * @Author: Tim Koepsel
 * @Date: 2019-02-19 20:09:28
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-19 20:25:40
 */
Object.defineProperty(exports, "__esModule", { value: true });
const BaseLocationAction_1 = require("../../base/BaseLocationAction");
const EWDefinitions_1 = require("../../../EWDefinitions");
const CoreLog_1 = require("../../core/CoreLog");
class LocationWerkstatt extends BaseLocationAction_1.default {
    constructor(werkstattname, position) {
        super(werkstattname, position, 402, 74, 1, new EWDefinitions_1.default(0, 0, 255, 100), (player) => {
            CoreLog_1.default.Debug('Werkstatt triggered OnEnter()');
            this.OnEnter(player);
        }, (player) => {
            this.OnExit(player);
            CoreLog_1.default.Debug('Werkstatt triggered OnExit()');
        });
    }
    OnEnter(player) {
        player.notify('Enter');
        player.outputChatBox('Enter');
        CoreLog_1.default.Debug('Player entered ColShape');
    }
    OnExit(player) {
        player.notify('Exit');
        player.outputChatBox('Exit');
        CoreLog_1.default.Debug('Player left ColShape');
    }
}
exports.default = LocationWerkstatt;
//# sourceMappingURL=LocationWerkstatt.js.map