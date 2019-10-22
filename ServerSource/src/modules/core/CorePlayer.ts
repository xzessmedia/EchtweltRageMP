/*
 * @Author: Tim Koepsel 
 * @Date: 2019-02-05 22:11:28 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-10-23 00:53:49
 */
import Log from "./CoreLog";
import * as settings from '../../config/modsettings.json';
import * as rpc from 'rage-rpc';
import CoreApi from "./CoreApi";
import { ApiPlayer, ApiCharacter } from "../interfaces/Api_Types";
import Character from "./CoreCharacter";

class CorePlayer {
    constructor() {
        
    }

    async InitPlayer(player:PlayerMp) {
        
        // Show Welcome Messages
        for (let index = 0; index < settings.WelcomeMessage.length; index++) {
            const element = settings.WelcomeMessage[index];
            player.outputChatBox(element);
        }
        
        if (await this.IsPlayerRegistered(player) !== false) {
            let playerdata = await this.GetPlayerData(player);
            this.UpdatePlayerVisit(player, playerdata);
        } else {
            await this.RegisterPlayer(player);
        }
        

        // Handle Whitelisting
        player.call('EW-ShowLoginScreen', true);

        Log.PrintConsole('Player spawning at ' + JSON.stringify(player.position));
        Log.AddPlayerLog('Initialising ',player);
        
        
    }

    async IsPlayerRegistered(player: PlayerMp): Promise<boolean> {
        // Check if player is known
        try {
            let api_result = await CoreApi.get(`/players?filter={"where":{"SocialClubName":"${player.socialClub}"}}`);
            if (api_result.data !== null) {
                let data: any[] = api_result.data;
                if (data.length > 0) {
                    return false;
                } else {
                    return false;
                }
            }
        } catch (error) {
            Log.AddErrorLog(error, 'IsPlayerRegistered()');
        }
    }

    async GetPlayerData(player: PlayerMp): Promise<ApiPlayer> {
        // Check if player is known
        try {
            let api_result = await CoreApi.get(`/players?filter={"where":{"SocialClubName":"${player.socialClub}"}}`);
            if (api_result.data !== null) {
                let data: ApiPlayer[] = api_result.data;
                if (data.length > 0) {
                    return data[0];
                } else {
                    return null;
                }
            }
        } catch (error) {
            Log.AddErrorLog(error, 'GetPlayer()');
        }
    }

    async RegisterPlayer(player: PlayerMp, email: string = 'nothing', password: string = 'nothing') {
        try {
            let t_player = {
                FirstSeenAt: new Date().toISOString(),
                LastSeenAt: new Date().toISOString(),
                SocialClubName: player.socialClub,
                EMail: email,
                Password: password,
                IsBanned: false
            }

            let api_result = await CoreApi.post(`/players`, t_player);
        } catch (error) {
            Log.AddErrorLog(error, 'RegisterPlayer()');
        }
    }

    async UpdatePlayerVisit(player: PlayerMp, playerdata: ApiPlayer) {
        try {
            // Update and patch Last Seen Timestamp
            playerdata.LastSeenAt = new Date().toISOString();
            let api_result = await CoreApi.patch(`/players`, playerdata);
        } catch (error) {
            Log.AddErrorLog(error, 'UpdatePlayerVisit()');
        }
    }


    // WIP -> We need to change some Api fields (Handmoney, Job)
    async OnLogin(player: PlayerMp, userdata) {

        try {

            // Character Selection
            var playerdata = await Player.GetPlayerData(player);
            var characters = await Character.GetCharacters(playerdata);

            if (characters != null && characters.length > 0) {
                var chars = [];
                Log.AddDebugLog(characters.length+' Characters found');

                characters.forEach((item, index) => {
                    Log.Debug('Receiving Character Data: '+JSON.stringify(item));
                    chars.push({
                        id: item.Id,
                        firstname: item.Firstname,
                        lastname: item.Lastname,
                        job: 'Arbeitslos',
                        handmoney: 0
                    });
                });

                var dataobj = {data: chars, maxAllowedChars: settings.MaxDefaultAllowedCharacterCount};
                var datastrobj = JSON.stringify(dataobj);
                rpc.callClient(player, 'EW-Character-Selection', dataobj);
            } else {
                Log.AddDebugLog('No Characters found');
                rpc.callClient(player, 'EW-Character-Selection', JSON.stringify({data: [], maxAllowedChars: settings.MaxDefaultAllowedCharacterCount}));
            }
        } catch (error) {
            Log.Debug(JSON.stringify(error));
        }
    }

    async OnCharacterDeath(player: PlayerMp, reason: string = 'Unknown') {
        Log.AddPlayerLog('Player died at '+JSON.stringify(player.position) + ' Reason: '+ reason, player);
        player.outputChatBox('You died');
    }

    SpawnAsNewCharacter(player: PlayerMp) {
        player.notify('You are breathing deep while inhaling your first breath on ' + settings.Servername);
        player.spawn(new mp.Vector3(settings.NewPlayerStartLocation.x,settings.NewPlayerStartLocation.y,settings.NewPlayerStartLocation.z));
    }

    SpawnAsExistingCharacter(player: PlayerMp, playerdata: ApiCharacter) {
        let lastposition = <Vector3Mp> playerdata.LastLocation;
        player.spawn(new mp.Vector3(lastposition.x,lastposition.y,lastposition.z));
    }

    SaveData(player: PlayerMp, data) {
        
    }

    Revive(player: PlayerMp) {
        var revivepos = new mp.Vector3(player.position.x, player.position.y, player.position.z + 2);
        player.position = revivepos;
        player.invoke('0xC0AA53F866B3134D', player);
        player.invoke('0x2D03E13C460760D6', player);
        player.invoke('0xB69317BF5E782347', player);
        player.invoke('0x428CA6DBD1094446', player,false);
        player.invoke('0xEA23C49EAA83ACFB', revivepos.x, revivepos.y, revivepos.z, 1.0, false, false);
        player.invoke('0x71BC8E838B9C6035', player);
        player.invoke('0xAE99FB955581844A', player, true);
        player.position = revivepos;
    }
}

const Player = new CorePlayer();

export default Player;