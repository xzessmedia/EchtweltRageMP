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
 * @Date: 2019-02-05 22:11:28
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-10-23 00:53:49
 */
const CoreLog_1 = require("./CoreLog");
const settings = require("../../config/modsettings.json");
const rpc = require("rage-rpc");
const CoreApi_1 = require("./CoreApi");
const CoreCharacter_1 = require("./CoreCharacter");
class CorePlayer {
    constructor() {
    }
    InitPlayer(player) {
        return __awaiter(this, void 0, void 0, function* () {
            // Show Welcome Messages
            for (let index = 0; index < settings.WelcomeMessage.length; index++) {
                const element = settings.WelcomeMessage[index];
                player.outputChatBox(element);
            }
            if ((yield this.IsPlayerRegistered(player)) !== false) {
                let playerdata = yield this.GetPlayerData(player);
                this.UpdatePlayerVisit(player, playerdata);
            }
            else {
                yield this.RegisterPlayer(player);
            }
            // Handle Whitelisting
            player.call('EW-ShowLoginScreen', true);
            CoreLog_1.default.PrintConsole('Player spawning at ' + JSON.stringify(player.position));
            CoreLog_1.default.AddPlayerLog('Initialising ', player);
        });
    }
    IsPlayerRegistered(player) {
        return __awaiter(this, void 0, void 0, function* () {
            // Check if player is known
            try {
                let api_result = yield CoreApi_1.default.get(`/players?filter={"where":{"SocialClubName":"${player.socialClub}"}}`);
                if (api_result.data !== null) {
                    let data = api_result.data;
                    if (data.length > 0) {
                        return false;
                    }
                    else {
                        return false;
                    }
                }
            }
            catch (error) {
                CoreLog_1.default.AddErrorLog(error, 'IsPlayerRegistered()');
            }
        });
    }
    GetPlayerData(player) {
        return __awaiter(this, void 0, void 0, function* () {
            // Check if player is known
            try {
                let api_result = yield CoreApi_1.default.get(`/players?filter={"where":{"SocialClubName":"${player.socialClub}"}}`);
                if (api_result.data !== null) {
                    let data = api_result.data;
                    if (data.length > 0) {
                        return data[0];
                    }
                    else {
                        return null;
                    }
                }
            }
            catch (error) {
                CoreLog_1.default.AddErrorLog(error, 'GetPlayer()');
            }
        });
    }
    RegisterPlayer(player, email = 'nothing', password = 'nothing') {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let t_player = {
                    FirstSeenAt: new Date().toISOString(),
                    LastSeenAt: new Date().toISOString(),
                    SocialClubName: player.socialClub,
                    EMail: email,
                    Password: password,
                    IsBanned: false
                };
                let api_result = yield CoreApi_1.default.post(`/players`, t_player);
            }
            catch (error) {
                CoreLog_1.default.AddErrorLog(error, 'RegisterPlayer()');
            }
        });
    }
    UpdatePlayerVisit(player, playerdata) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Update and patch Last Seen Timestamp
                playerdata.LastSeenAt = new Date().toISOString();
                let api_result = yield CoreApi_1.default.patch(`/players`, playerdata);
            }
            catch (error) {
                CoreLog_1.default.AddErrorLog(error, 'UpdatePlayerVisit()');
            }
        });
    }
    // WIP -> We need to change some Api fields (Handmoney, Job)
    OnLogin(player, userdata) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Character Selection
                var playerdata = yield Player.GetPlayerData(player);
                var characters = yield CoreCharacter_1.default.GetCharacters(playerdata);
                if (characters != null && characters.length > 0) {
                    var chars = [];
                    CoreLog_1.default.AddDebugLog(characters.length + ' Characters found');
                    characters.forEach((item, index) => {
                        CoreLog_1.default.Debug('Receiving Character Data: ' + JSON.stringify(item));
                        chars.push({
                            id: item.Id,
                            firstname: item.Firstname,
                            lastname: item.Lastname,
                            job: 'Arbeitslos',
                            handmoney: 0
                        });
                    });
                    var dataobj = { data: chars, maxAllowedChars: settings.MaxDefaultAllowedCharacterCount };
                    var datastrobj = JSON.stringify(dataobj);
                    rpc.callClient(player, 'EW-Character-Selection', dataobj);
                }
                else {
                    CoreLog_1.default.AddDebugLog('No Characters found');
                    rpc.callClient(player, 'EW-Character-Selection', JSON.stringify({ data: [], maxAllowedChars: settings.MaxDefaultAllowedCharacterCount }));
                }
            }
            catch (error) {
                CoreLog_1.default.Debug(JSON.stringify(error));
            }
        });
    }
    OnCharacterDeath(player, reason = 'Unknown') {
        return __awaiter(this, void 0, void 0, function* () {
            CoreLog_1.default.AddPlayerLog('Player died at ' + JSON.stringify(player.position) + ' Reason: ' + reason, player);
            player.outputChatBox('You died');
        });
    }
    SpawnAsNewCharacter(player) {
        player.notify('You are breathing deep while inhaling your first breath on ' + settings.Servername);
        player.spawn(new mp.Vector3(settings.NewPlayerStartLocation.x, settings.NewPlayerStartLocation.y, settings.NewPlayerStartLocation.z));
    }
    SpawnAsExistingCharacter(player, playerdata) {
        let lastposition = playerdata.LastLocation;
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