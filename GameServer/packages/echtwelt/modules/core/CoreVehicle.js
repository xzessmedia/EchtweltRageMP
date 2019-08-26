"use strict";
/*
 * @Author: Tim Koepsel
 * @Date: 2019-02-18 00:59:36
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-08-26 20:05:53
 */
Object.defineProperty(exports, "__esModule", { value: true });
const CoreLog_js_1 = require("./CoreLog.js");
class CoreVehicle {
    constructor() {
    }
    /**
     *
     *
     * @param {VehicleMp} vehicle
     * @returns RefilledAmount
     * @memberof CoreVehicle
     */
    Refuel(vehicle) {
        let t_data = this.LoadData(vehicle);
        let refillamount = (1.0 - t_data.fuel);
        t_data.fuel = 1.0;
        return refillamount;
    }
    /**
     *
     *
     * @param {VehicleMp} vehicle
     * @returns {BaseVehicleData}
     * @memberof CoreVehicle
     */
    LoadData(vehicle) {
        return JSON.parse(vehicle.getVariable('data'));
    }
    SaveData(vehicle, data) {
        vehicle.setVariable('data', JSON.stringify(data));
    }
    SpawnVehicle(hash, position) {
        var t_vehicle = mp.vehicles.new(hash, position);
        CoreLog_js_1.default.AddLog('Vehicle ' + JSON.stringify(hash) + ' spawned at ' + JSON.stringify(position));
    }
}
const Vehicle = new CoreVehicle();
exports.default = Vehicle;
//# sourceMappingURL=CoreVehicle.js.map