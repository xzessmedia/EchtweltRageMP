"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CorePlayer_1 = require("./CorePlayer");
const CoreVehicle_1 = require("./CoreVehicle");
const BaseVehicleData_1 = require("../base/BaseVehicleData");
const BasePlayerData_1 = require("../base/BasePlayerData");
/*
 * @Author: Tim Koepsel
 * @Date: 2019-02-08 02:30:10
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-08-26 20:11:38
 */
// https://github.com/szokodiakos/typegoose
class CoreDatabase {
    constructor() {
    }
    SyncPlayerDataToDatabase(player) {
        let t_data = CorePlayer_1.default.LoadData(player);
        // Todo: We need to sync here
    }
    SyncPlayerDataFromDatabase(player) {
        // Todo: We need to sync here
        // only dummy here this has to be constructed from database
        let t_data = new BasePlayerData_1.default();
        CorePlayer_1.default.SaveData(player, t_data);
    }
    SyncVehicleDataToDatabase(vehicle) {
        let t_data = CoreVehicle_1.default.LoadData(vehicle);
        // Todo: We need to sync here
    }
    SyncVehicleDataFromDatabase(vehicle) {
        // Todo: We need to sync here
        // only dummy here this has to be constructed from database
        let t_data = new BaseVehicleData_1.default();
        CoreVehicle_1.default.SaveData(vehicle, t_data);
    }
}
exports.CoreDatabase = CoreDatabase;
const Database = new CoreDatabase();
exports.default = Database;
//# sourceMappingURL=CoreDatabase.js.map