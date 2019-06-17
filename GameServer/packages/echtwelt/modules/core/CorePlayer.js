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
 * @Date: 2019-02-05 22:11:28
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-26 23:34:56
 */
const CoreLog_1 = require("./CoreLog");
const settings = require("../../config/modsettings.json");
const EWAccountManager_1 = require("./managers/EWAccountManager");
const EWCharacterManager_1 = require("./managers/EWCharacterManager");
const rpc = require("rage-rpc");
class CorePlayer {
    constructor() {
    }
    InitPlayer(player) {
        // Show Welcome Messages
        for (let index = 0; index < settings.WelcomeMessage.length; index++) {
            const element = settings.WelcomeMessage[index];
            player.outputChatBox(element);
        }
        // Handle Whitelisting
        player.call('EW-ShowLoginScreen', true);
        CoreLog_1.default.PrintConsole('Player spawning at ' + JSON.stringify(player.position));
        CoreLog_1.default.AddPlayerLog('Initialising ', player);
    }
    OnLogin(player, userdata) {
        return __awaiter(this, void 0, void 0, function* () {
            // Check Account
            if ((yield EWAccountManager_1.default.HasAccount(player.socialClub, '')) === true) {
                CoreLog_1.default.PrintConsole('Player ' + player.socialClub + ' has an account');
            }
            else {
                CoreLog_1.default.PrintConsole('Player ' + player.socialClub + ' has no account and registers one');
                EWAccountManager_1.default.CreateAccount(player.socialClub, player.name, '', JSON.stringify(userdata));
            }
            try {
                var account = yield EWAccountManager_1.default.LoadAccount(player.socialClub, '');
                CoreLog_1.default.Debug('Account Id: ' + account.id);
                // Character Selection
                var characters = yield EWCharacterManager_1.default.LoadCharactersByAccount(account.id);
                //var characters = null;
                ///var characters = null;
                if (characters != null && characters.length > 0) {
                    var chars = [];
                    CoreLog_1.default.Debug('Es wurden ' + characters.length + ' Charaktere gefunden');
                    characters.forEach((item, index) => {
                        CoreLog_1.default.Debug('Charakterdaten werden umgewandelt: ' + JSON.stringify(item));
                        var t_item = item.toObject();
                        chars.push({
                            id: t_item._id,
                            firstname: t_item.firstname,
                            lastname: t_item.lastname,
                            job: t_item.job,
                            handmoney: t_item.handmoney
                        });
                    });
                    var dataobj = { data: chars, maxAllowedChars: settings.MaxDefaultAllowedCharacterCount };
                    var datastrobj = JSON.stringify(dataobj);
                    CoreLog_1.default.Debug('Umwandlung abgeschlossen, es wird ans CEF gesendet: ' + datastrobj);
                    rpc.callClient(player, 'EW-Character-Selection', dataobj);
                }
                else {
                    CoreLog_1.default.Debug('Es wurden keine Charaktere gefunden');
                    rpc.callClient(player, 'EW-Character-Selection', JSON.stringify({ data: [], maxAllowedChars: settings.MaxDefaultAllowedCharacterCount }));
                }
            }
            catch (error) {
                CoreLog_1.default.Debug(JSON.stringify(error));
            }
        });
    }
    SpawnAsNewCharacter(player) {
        player.notify('Du atmest tief ein und nimmst einen ersten Atemzug auf ' + settings.Servername);
        player.spawn(new mp.Vector3(settings.NewPlayerStartLocation.x, settings.NewPlayerStartLocation.y, settings.NewPlayerStartLocation.z));
    }
    SpawnAsExistingCharacter(player, playerdata) {
        let lastposition = JSON.parse(playerdata.lastposition);
        player.spawn(new mp.Vector3(lastposition.x, lastposition.y, lastposition.z));
    }
    SaveData(player, data) {
    }
    Revive(player) {
        var revivepos = new mp.Vector3(player.position.x, player.position.y, player.position.z + 2);
        player.position = revivepos;
        player.invoke('0xC0AA53F866B3134D', player);
        player.invoke('0x2D03E13C460760D6', player);
        player.invoke('0xB69317BF5E782347', player);
        player.invoke('0x428CA6DBD1094446', player, false);
        player.invoke('0xEA23C49EAA83ACFB', revivepos.x, revivepos.y, revivepos.z, 1.0, false, false);
        player.invoke('0x71BC8E838B9C6035', player);
        player.invoke('0xAE99FB955581844A', player, true);
        player.position = revivepos;
    }
}
const Player = new CorePlayer();
exports.default = Player;
//# sourceMappingURL=CorePlayer.js.map