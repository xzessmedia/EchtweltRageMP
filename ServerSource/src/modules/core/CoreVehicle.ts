/*
 * @Author: Tim Koepsel 
 * @Date: 2019-02-18 00:59:36 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-08-26 20:05:53
 */

import * as settings from '../../config/modsettings.json';
import World from '../world/Worldmap.js';
import Log from './CoreLog.js';
import Commands from './commands/commands.js';
import BaseVehicleData from '../base/BaseVehicleData.js';

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
    Refuel(vehicle: VehicleMp) {
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
    LoadData(vehicle: VehicleMp): BaseVehicleData {
        return <BaseVehicleData> JSON.parse(vehicle.getVariable('data'));
    }

    SaveData(vehicle: VehicleMp, data: BaseVehicleData) {
        vehicle.setVariable('data', JSON.stringify(data));
    }

    SpawnVehicle(hash: HashOrString, position: Vector3Mp) {
        var t_vehicle = mp.vehicles.new(hash, position);

        Log.AddLog('Vehicle ' + JSON.stringify(hash) + ' spawned at ' + JSON.stringify(position));
    }
}

const Vehicle = new CoreVehicle();

export default Vehicle;