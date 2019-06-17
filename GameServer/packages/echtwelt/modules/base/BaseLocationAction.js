"use strict";
/*
 * @Author: Tim Koepsel
 * @Date: 2019-02-06 20:18:28
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-19 20:14:58
 */
Object.defineProperty(exports, "__esModule", { value: true });
const BaseLocation_1 = require("./BaseLocation");
class BaseLocationAction extends BaseLocation_1.default {
    constructor(locationName, position, iconid, iconcolor, markertype, markercolor, enterAction, leaveAction, dimension = 0) {
        super(locationName, iconid, position, true, iconcolor, dimension);
        this._marker = mp.markers.new(markertype, position, 1.0, { dimension: dimension });
        this._marker.setColor(markercolor.r, markercolor.g, markercolor.b, markercolor.a);
        this._textlabel = mp.labels.new(locationName, position, { dimension: dimension });
        this._colshape = mp.colshapes.newTube(position.x, position.y, position.z, 1.0, 1.0);
        this._colshape.dimension = dimension;
        this._enterAction = enterAction;
        this._leaveAction = leaveAction;
        this.InitEvents();
    }
    InitEvents() {
        mp.events.add('playerEnterColshape', (player, shape) => {
            if (shape === this._colshape) {
                this._enterAction(player);
            }
        });
        mp.events.add('playerExitColshape', (player, shape) => {
            if (shape === this._colshape) {
                this._leaveAction(player);
            }
        });
    }
}
exports.default = BaseLocationAction;
//# sourceMappingURL=BaseLocationAction.js.map