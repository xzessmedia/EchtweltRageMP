"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: Tim Koepsel
 * @Date: 2019-02-05 20:44:43
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-26 22:57:21
 */
const mongoose = require("mongoose");
const rpc = require("rage-rpc");
const settings = require("./config/modsettings.json");
const CorePlayer_1 = require("./modules/core/CorePlayer");
const CoreLog_1 = require("./modules/core/CoreLog");
const CoreGame_1 = require("./modules/core/CoreGame");
const EWAccountManager_1 = require("./modules/core/managers/EWAccountManager");
const Woltlab_js_1 = require("./modules/core/additional/whitelisting/Woltlab.js");
const EWCharacterManager_1 = require("./modules/core/managers/EWCharacterManager");
class EchtweltMod {
    constructor() {
        CoreLog_1.default.PrintConsole('Starting ' + settings.Servername);
        this.InitEchtwelt();
    }
    InitDatabase() {
        try {
            if (settings.Modus === "Staging") {
                return mongoose.connect(settings.DatabaseStaging, { useNewUrlParser: true });
            }
            else {
                return mongoose.connect(settings.DatabaseProduction);
            }
        }
        catch (error) {
            CoreLog_1.default.Debug(error);
        }
    }
    InitEchtwelt() {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield this.InitDatabase()) {
                CoreLog_1.default.PrintConsole('Database has been initialised');
                this.InitRageEvents();
                CoreGame_1.default.InitGame();
                CoreLog_1.default.AddLog('Server has started', 'system');
            }
        });
    }
    /*******************************************************************************************************
     * Server Events
     */
    InitRageEvents() {
        mp.events.add('playerJoin', player => {
            CoreLog_1.default.PrintConsole(`${player.name} has entered the server!`);
            CorePlayer_1.default.InitPlayer(player);
        });
        mp.events.add('playerSpawn', player => {
            CoreLog_1.default.PrintConsole(`${player.name} has spawned at ${JSON.stringify(player.position)}`);
        });
        /** called from cef */
        rpc.register('EW-CarSpawn-SpawnVehicle', (item) => {
            CoreLog_1.default.PrintConsole('Receiving Data: ' + item);
            var data = JSON.parse(item);
            var vehicle = mp.vehicles.new(data.item.Hash, new mp.Vector3(data.playerposition.x, data.playerposition.y, data.playerposition.z));
            vehicle.numberPlate = 'EWReborn';
        });
        mp.events.add('EW-Woltlab-Login', (player, item) => {
            const credentials = JSON.parse(item);
            if (settings.Whitelisting.IsEnabled === true) {
                var result = Woltlab_js_1.default.VerifyLogin(credentials.username, credentials.password).then((data) => {
                    CoreLog_1.default.PrintConsole(JSON.stringify(result));
                    if (data != null) {
                        if (data.verify === true) {
                            player.notify('Du hast dich erfolgreich ~g~angemeldet');
                            CorePlayer_1.default.OnLogin(player, data);
                        }
                        else {
                            player.notify('Anmeldung ~r~nicht erfolgreich');
                            player.call('EW-ShowLoginScreen', true);
                        }
                    }
                })
                    .catch((error) => {
                    CoreLog_1.default.PrintConsole('ERROR: ' + error);
                });
            }
            else {
                var data = JSON.parse(item);
                CorePlayer_1.default.OnLogin(player, data);
            }
        });
        mp.events.add('playerDeath', (player) => {
            CorePlayer_1.default.OnCharacterDeath(player);
        });
        /** called from cef */
        mp.events.add('EW-Character-RequestCreate', (player, data) => {
            CoreLog_1.default.Debug('Requesting Character creation (' + player.name + ')');
            try {
                CorePlayer_1.default.SpawnAsNewCharacter(player);
                EWAccountManager_1.default.LoadAccount(player.socialClub, '').then((account) => {
                    var chardata = JSON.parse(data);
                    EWCharacterManager_1.default.CreateCharacter(account.id, chardata.firstname, chardata.lastname);
                });
            }
            catch (error) {
                CoreLog_1.default.Debug(error);
            }
        });
        rpc.register('EW-Teleporter-Direction', (data) => {
            CoreLog_1.default.PrintConsole('Received: ' + data);
        });
        rpc.register('EW-Teleporter-Location', (data) => {
            CoreLog_1.default.PrintConsole('Received: ' + data);
        });
        rpc.register('EW-Character-Selected', (data) => {
            CoreLog_1.default.PrintConsole('Player choosed character.. receiving data: ' + data);
        });
        CoreLog_1.default.PrintConsole('Events has been loaded');
    }
}
exports.EchtweltMod = EchtweltMod;
//# sourceMappingURL=Echtwelt.js.map