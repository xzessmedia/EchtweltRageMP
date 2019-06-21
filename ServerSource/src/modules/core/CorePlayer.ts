/*
 * @Author: Tim Koepsel 
 * @Date: 2019-02-05 22:11:28 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-26 23:34:56
 */
import Log from "./CoreLog";
import * as settings from '../../config/modsettings.json';
import { EWAccount } from "../database/schemas/EWAccount";
import AccountManager from "./managers/EWAccountManager";
import CharacterManager from "./managers/EWCharacterManager";
import * as rpc from 'rage-rpc';
import { IEWCharakter } from "../database/interfaces/IEWCharakter";

class CorePlayer {
    constructor() {
        
    }

    InitPlayer(player:PlayerMp) {
        
        // Show Welcome Messages
        for (let index = 0; index < settings.WelcomeMessage.length; index++) {
            const element = settings.WelcomeMessage[index];
            player.outputChatBox(element);
        }
        

        // Handle Whitelisting
        player.call('EW-ShowLoginScreen', true);

        Log.PrintConsole('Player spawning at ' + JSON.stringify(player.position));
        Log.AddPlayerLog('Initialising ',player);
        
        
    }

    async OnLogin(player: PlayerMp, userdata) {
        // Check Account
        if (await AccountManager.HasAccount(player.socialClub,'') === true) {
            Log.PrintConsole('Player '+player.socialClub+' has an account');
        } else {
            Log.PrintConsole('Player '+player.socialClub+' has no account and registers one');

            AccountManager.CreateAccount(player.socialClub, player.name, '', JSON.stringify(userdata));
        }

        try {
            var account = await AccountManager.LoadAccount(player.socialClub, '');
            Log.Debug('Account Id: '+account.id);

            // Character Selection
            var characters = await CharacterManager.LoadCharactersByAccount(account.id);

            if (characters != null && characters.length > 0) {
                var chars = [];
                Log.Debug(characters.length+' Characters found');

                characters.forEach((item, index) => {
                    Log.Debug('Receiving Character Data: '+JSON.stringify(item));
                    var t_item = item.toObject();
                    chars.push({
                        id: t_item._id,
                        firstname: t_item.firstname,
                        lastname: t_item.lastname,
                        job: t_item.job,
                        handmoney: t_item.handmoney
                    });
                });

                var dataobj = {data: chars, maxAllowedChars: settings.MaxDefaultAllowedCharacterCount};
                var datastrobj = JSON.stringify(dataobj);
                rpc.callClient(player, 'EW-Character-Selection', dataobj);
            } else {
                Log.Debug('No Characters found');
                rpc.callClient(player, 'EW-Character-Selection', JSON.stringify({data: [], maxAllowedChars: settings.MaxDefaultAllowedCharacterCount}));
            }
        } catch (error) {
            Log.Debug(JSON.stringify(error));
        }
    }

    async OnCharacterDeath(player: PlayerMp) {
        player.outputChatBox('You died');
    }

    SpawnAsNewCharacter(player: PlayerMp) {
        player.notify('You are breathing deep while inhaling your first breath on ' + settings.Servername);
        player.spawn(new mp.Vector3(settings.NewPlayerStartLocation.x,settings.NewPlayerStartLocation.y,settings.NewPlayerStartLocation.z));
    }

    SpawnAsExistingCharacter(player: PlayerMp, playerdata: IEWCharakter) {
        let lastposition = JSON.parse(playerdata.lastposition);
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