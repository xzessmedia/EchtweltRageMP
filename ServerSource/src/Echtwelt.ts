/*
 * @Author: Tim Koepsel 
 * @Date: 2019-02-05 20:44:43 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-10-23 00:40:48
 */
import * as rpc from 'rage-rpc';
import * as settings from './config/modsettings.json';
import CoreApi from "./modules/core/CoreApi";
import Player from "./modules/core/CorePlayer";
import Log from "./modules/core/CoreLog";
import Game from "./modules/core/CoreGame";
import Whitelisting from "./modules/core/additional/whitelisting/Woltlab.js";
import Character from "./modules/core/CoreCharacter.js";

export class EchtweltMod {
  
  constructor () {
    Log.PrintConsole('Starting '+settings.Servername);
    this.InitEchtwelt();
    
  }

  

  async InitEchtwelt() {
    this.InitRageEvents();
    Game.InitGame();
    Log.AddLog('Server has started', 'System');
  }
  
  /*******************************************************************************************************
   * Server Events
   */

  InitRageEvents() {
    mp.events.add('playerJoin', player => {
      Log.AddSystemLog(`${player.name} has entered the server!`);
      Player.InitPlayer(player);
    });
    
    mp.events.add('playerSpawn', player => {
      Log.AddSystemLog(`${player.name} has spawned at ${JSON.stringify(player.position)}`);
    });
    

    /** called from cef */
    rpc.register('EW-CarSpawn-SpawnVehicle', (item) => {
      Log.AddDebugLog('Receiving Data: '+item);
      var data = JSON.parse(item);
      var vehicle = mp.vehicles.new(data.item.Hash,new mp.Vector3(data.playerposition.x, data.playerposition.y, data.playerposition.z));
      vehicle.numberPlate = 'EWReborn';
    });

    mp.events.add('EW-Woltlab-Login', (player, item) => {
      const credentials = JSON.parse(item);
      
      if (settings.Whitelisting.IsEnabled === true) {
        Log.AddDebugLog('Whitelisting enabled! Trying to Login: (Player):'+JSON.stringify(player) + '(Data):'+JSON.stringify(item));
        var result = Whitelisting.VerifyLogin(credentials.username, credentials.password).then((data) => {
          Log.AddDebugLog(JSON.stringify(result));
          if (data != null) {
            if (data.verify === true) {
              player.notify('Du hast dich erfolgreich ~g~angemeldet');
              Player.OnLogin(player, data);
            } else {
              player.notify('Anmeldung ~r~nicht erfolgreich');
              player.call('EW-ShowLoginScreen', true);
            }
          }
        })
        .catch((error) => {
          Log.AddErrorLog(error, 'Event: EW-Woltlab-Login');
        });
      } else {
        Log.AddDebugLog('Whitelisting disabled! Skipping Login: (Player):'+JSON.stringify(player) + '(Data):'+JSON.stringify(item));
        try {
          var data = JSON.parse(item);
          Player.OnLogin(player, data);
        } catch (error) {
          Log.AddErrorLog(error, 'Event: EW-Woltlab-Login');
        }
      }
    });
    
    mp.events.add('playerDeath', (player) => {
      Player.OnCharacterDeath(player);
    });

    /** called from cef */
    mp.events.add('EW-Character-RequestCreate', async (player: PlayerMp, data) => {
      Log.Debug('Requesting Character creation ('+player.name+')');

      let playerdata = await Player.GetPlayerData(player);

      try {
        var chardata = JSON.parse(data);

          // WIP: Frontend / CEF needs to be extended with fields for gender etc.
          Character.CreateCharacter(playerdata, chardata.firstname, chardata.lastname, new Date(), true);
          Player.SpawnAsNewCharacter(player);
        
      } catch (error) {
        Log.Debug(error);
      }
    });

    rpc.register('EW-Teleporter-Direction', (data) => {
      Log.AddDebugLog('Received: ' + JSON.stringify(data), 'Event: EW-Teleporter-Direction');
    });

    rpc.register('EW-Teleporter-Location', (data) => {
      Log.AddDebugLog('Received: ' + JSON.stringify(data), 'Event: EW-Teleporter-Location');
    });

    rpc.register('EW-Character-Selected', (data) => {
      Log.AddDebugLog('Player choosed character.. receiving data: ' + JSON.stringify(data), 'Event: EW-Character-Selected');
    });

    Log.PrintConsole('Events has been loaded');
  }
  
}