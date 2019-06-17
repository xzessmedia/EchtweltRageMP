"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LocationFIB_1 = require("./locations/LocationFIB");
const LocationPolice_1 = require("./locations/LocationPolice");
const LocationTownhall_1 = require("./locations/LocationTownhall");
const LocationLSMC_1 = require("./locations/LocationLSMC");
const LocationGericht_1 = require("./locations/LocationGericht");
const LocationDopeDealer_1 = require("./locations/LocationDopeDealer");
const LocationDopeProcessor_1 = require("./locations/LocationDopeProcessor");
const LocationTaxi_1 = require("./locations/LocationTaxi");
const LocationWeedFarm_1 = require("./locations/LocationWeedFarm");
const LocationBergbaumineA_1 = require("./locations/LocationBergbaumineA");
const LocationBergbaumineB_1 = require("./locations/LocationBergbaumineB");
const LocationBergbaumineC_1 = require("./locations/LocationBergbaumineC");
const LocationBus_1 = require("./locations/LocationBus");
const LocationMolkerei_1 = require("./locations/LocationMolkerei");
const LocationSchrottplatz_1 = require("./locations/LocationSchrottplatz");
const LocationBikeRental_1 = require("./locations/LocationBikeRental");
const LocationSchweinefarm_1 = require("./locations/LocationSchweinefarm");
const LocationKleinerAutohandel_1 = require("./locations/LocationKleinerAutohandel");
const LocationWaschanlage_1 = require("./locations/LocationWaschanlage");
const LocationWerkstatt_1 = require("./locations/LocationWerkstatt");
class WorldMap {
    constructor() {
        this._maplocations = new Array();
    }
    AddLocationToWorldmap(location) {
        this._maplocations.push(location);
    }
    InitWorldmap() {
        let fib = new LocationFIB_1.default();
        let polizei = new LocationPolice_1.default();
        let rathaus = new LocationTownhall_1.default();
        let lsmc = new LocationLSMC_1.default();
        let gericht = new LocationGericht_1.default();
        let drogendealer = new LocationDopeDealer_1.default();
        let haschischverarbeitung = new LocationDopeProcessor_1.default();
        let taxi = new LocationTaxi_1.default();
        let cannabisplantage = new LocationWeedFarm_1.default();
        let bergbaumineA = new LocationBergbaumineA_1.default();
        let bergbaumineB = new LocationBergbaumineB_1.default();
        let bergbaumineC = new LocationBergbaumineC_1.default();
        let bus = new LocationBus_1.default();
        let molkerei = new LocationMolkerei_1.default();
        let schrottplatz = new LocationSchrottplatz_1.default();
        let fahrradverlei = new LocationBikeRental_1.default();
        let schweinefarm = new LocationSchweinefarm_1.default();
        let autohandel = new LocationKleinerAutohandel_1.default();
        /** Waschanlagen  */
        let waschanlagen = [{
                x: -699.8168,
                y: -931.8791,
                z: 18.35748
            }, {
                x: 20.61422,
                y: -1392.011,
                z: 28.61772
            }];
        for (let index = 0; index < waschanlagen.length; index++) {
            var pos = waschanlagen[index];
            let waschanlage = new LocationWaschanlage_1.default(new mp.Vector3(pos.x, pos.y, pos.z));
        }
        /** Werkstätte  */
        let bennys = new LocationWerkstatt_1.default('Bennys', new mp.Vector3(-212.06, -1324.065, 30.8904));
        let customsouth = new LocationWerkstatt_1.default('Customs-South', new mp.Vector3(731.7545, -1088.646, 22.16901));
        let nordwerkstatt = new LocationWerkstatt_1.default('Nordwerkstatt', new mp.Vector3(1175.243, 2639.316, 37.75382));
        let autohaus = new LocationWerkstatt_1.default('Autohaus', new mp.Vector3(-35.85453, -1088.597, 26.42235));
    }
}
const World = new WorldMap();
exports.default = World;
//# sourceMappingURL=Worldmap.js.map