import Player from "./CorePlayer";
import Vehicle from "./CoreVehicle";
import BaseVehicleData from "../base/BaseVehicleData";
import BasePlayerData from "../base/BasePlayerData";

/*
 * @Author: Tim Koepsel 
 * @Date: 2019-02-08 02:30:10 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-08-26 20:11:38
 */


// https://github.com/szokodiakos/typegoose
export class CoreDatabase {

    constructor() {
        
    }

    SyncPlayerDataToDatabase(player: PlayerMp) {
        let t_data = Player.LoadData(player);

        // Todo: We need to sync here
    }

    SyncPlayerDataFromDatabase(player: PlayerMp) {

        // Todo: We need to sync here
        // only dummy here this has to be constructed from database
        let t_data = new BasePlayerData();

        Player.SaveData(player, t_data);
    }

    SyncVehicleDataToDatabase(vehicle: VehicleMp) {
        let t_data = Vehicle.LoadData(vehicle);

        // Todo: We need to sync here
    }
    
    SyncVehicleDataFromDatabase(vehicle: VehicleMp) {

        // Todo: We need to sync here
        // only dummy here this has to be constructed from database
        let t_data = new BaseVehicleData();

        Vehicle.SaveData(vehicle, t_data);
    }

}

const Database = new CoreDatabase();
export default Database;