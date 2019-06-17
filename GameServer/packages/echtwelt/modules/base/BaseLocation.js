"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Worldmap_1 = require("../world/Worldmap");
const CoreLog_1 = require("../core/CoreLog");
class BaseLocation {
    constructor(locationName, spriteId, position, shortRange, color, dimension) {
        this.blip = mp.blips.new(spriteId, position, {
            dimension: dimension,
            shortRange: shortRange,
            name: locationName,
            color: color
        });
        Worldmap_1.default.AddLocationToWorldmap(this);
        CoreLog_1.default.PrintConsole(locationName + ' has been loaded');
    }
}
exports.default = BaseLocation;
//# sourceMappingURL=BaseLocation.js.map