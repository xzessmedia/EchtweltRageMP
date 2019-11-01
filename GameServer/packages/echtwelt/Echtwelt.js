"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: Tim Koepsel
 * @Date: 2019-02-05 20:44:43
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-10-23 00:40:48
 */
const rpc = require("rage-rpc");
const settings = require("./config/modsettings.json");
const CorePlayer_1 = require("./modules/core/CorePlayer");
const CoreLog_1 = require("./modules/core/CoreLog");
const CoreGame_1 = require("./modules/core/CoreGame");
const Woltlab_js_1 = require("./modules/core/additional/whitelisting/Woltlab.js");
const CoreCharacter_js_1 = require("./modules/core/CoreCharacter.js");
class EchtweltMod {
    constructor() {
        CoreLog_1.default.PrintConsole('Starting ' + settings.Servername);
        this.InitEchtwelt();
    }
    InitEchtwelt() {
        return __awaiter(this, void 0, void 0, function* () {
            this.InitRageEvents();
            CoreGame_1.default.InitGame();
            CoreLog_1.default.AddLog('Server has started', 'System');
        });
    }
    /*******************************************************************************************************
     * Server Events
     */
    InitRageEvents() {
        mp.events.add('playerJoin', player => {
            CoreLog_1.default.AddSystemLog(`${player.name} has entered the server!`);
            CorePlayer_1.default.InitPlayer(player);
        });
        mp.events.add('playerSpawn', player => {
            CoreLog_1.default.AddSystemLog(`${player.name} has spawned at ${JSON.stringify(player.position)}`);
        });
        /** called from cef */
        rpc.register('EW-CarSpawn-SpawnVehicle', (item) => {
            CoreLog_1.default.AddDebugLog('Receiving Data: ' + item);
            var data = JSON.parse(item);
            var vehicle = mp.vehicles.new(data.item.Hash, new mp.Vector3(data.playerposition.x, data.playerposition.y, data.playerposition.z));
            vehicle.numberPlate = 'EWReborn';
        });
        mp.events.add('EW-Woltlab-Login', (player, item) => {
            const credentials = JSON.parse(item);
            if (settings.Whitelisting.IsEnabled === true) {
                CoreLog_1.default.AddDebugLog('Whitelisting enabled! Trying to Login: (Player):' + JSON.stringify(player) + '(Data):' + JSON.stringify(item));
                var result = Woltlab_js_1.default.VerifyLogin(credentials.username, credentials.password).then((data) => {
                    CoreLog_1.default.AddDebugLog(JSON.stringify(result));
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
                    CoreLog_1.default.AddErrorLog(error, 'Event: EW-Woltlab-Login');
                });
            }
            else {
                CoreLog_1.default.AddDebugLog('Whitelisting disabled! Skipping Login: (Player):' + JSON.stringify(player) + '(Data):' + JSON.stringify(item));
                try {
                    var data = JSON.parse(item);
                    CorePlayer_1.default.OnLogin(player, data);
                }
                catch (error) {
                    CoreLog_1.default.AddErrorLog(error, 'Event: EW-Woltlab-Login');
                }
            }
        });
        mp.events.add('playerDeath', (player) => {
            CorePlayer_1.default.OnCharacterDeath(player);
        });
        /** called from cef */
        mp.events.add('EW-Character-RequestCreate', (player, data) => __awaiter(this, void 0, void 0, function* () {
            CoreLog_1.default.Debug('Requesting Character creation (' + player.name + ')');
            let playerdata = yield CorePlayer_1.default.GetPlayerData(player);
            try {
                var chardata = JSON.parse(data);
                // WIP: Frontend / CEF needs to be extended with fields for gender etc.
                CoreCharacter_js_1.default.CreateCharacter(playerdata, chardata.firstname, chardata.lastname, new Date(), true);
                CorePlayer_1.default.SpawnAsNewCharacter(player);
            }
            catch (error) {
                CoreLog_1.default.Debug(error);
            }
        }));
        rpc.register('EW-Teleporter-Direction', (data) => {
            CoreLog_1.default.AddDebugLog('Received: ' + JSON.stringify(data), 'Event: EW-Teleporter-Direction');
        });
        rpc.register('EW-Teleporter-Location', (data) => {
            CoreLog_1.default.AddDebugLog('Received: ' + JSON.stringify(data), 'Event: EW-Teleporter-Location');
        });
        rpc.register('EW-Character-Selected', (data) => {
            CoreLog_1.default.AddDebugLog('Player choosed character.. receiving data: ' + JSON.stringify(data), 'Event: EW-Character-Selected');
        });
        CoreLog_1.default.PrintConsole('Events has been loaded');
    }
}
exports.EchtweltMod = EchtweltMod;
//# sourceMappingURL=Echtwelt.js.map