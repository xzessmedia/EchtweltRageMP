/*
 * @Author: Tim Koepsel 
 * @Date: 2019-02-05 20:44:43 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-26 22:57:21
 */
import * as mongoose from "mongoose";
import * as rpc from 'rage-rpc';
import * as settings from './config/modsettings.json';
import CoreDatabase from "./modules/core/CoreDatabase";
import Player from "./modules/core/CorePlayer";
import Log from "./modules/core/CoreLog";
import Game from "./modules/core/CoreGame";
import AccountManager from "./modules/core/managers/EWAccountManager";
import { EWAccount } from "./modules/database/schemas/EWAccount";
import Whitelisting from "./modules/core/additional/whitelisting/Woltlab.js";
import EWCharacterManager from './modules/core/managers/EWCharacterManager';
import CharacterManager from "./modules/core/managers/EWCharacterManager";

export class EchtweltMod {
  
  constructor () {
    Log.PrintConsole('Starting '+settings.Servername);
    this.InitEchtwelt();
    
  }

  public InitDatabase(): Promise<typeof mongoose> {
    try {
      if (settings.Modus === "Staging") {
        return mongoose.connect(settings.DatabaseStaging,{useNewUrlParser: true});
      } else {
        return mongoose.connect(settings.DatabaseProduction);
      }
    } catch (error) {
      Log.Debug(error);
    }
}
  
  async InitEchtwelt() {
    if (await this.InitDatabase()) {
      Log.PrintConsole('Database has been initialised');
      this.InitRageEvents();
      Game.InitGame();
      Log.AddLog('Server has started', 'system');
    }
  }
  
  InitRageEvents() {
    mp.events.add('playerJoin', player => {
      Log.PrintConsole(`${player.name} has entered the server!`);
      Player.InitPlayer(player);
    });
    
    mp.events.add('playerSpawn', player => {
      Log.PrintConsole(`${player.name} has spawned at ${JSON.stringify(player.position)}`);
    });
    
    mp.events.add('Pong', player => {
      Log.PrintConsole('Pong erhalten');
      player.outputChatBox('Server: Pong');
    });
    
    rpc.register('Pong',() => {
      // if (player) {
      //   player.outputChatBox('Pong!');
      //   player.notify('Pong');
      // }
      Log.PrintConsole('Pong!');
    });
    
    rpc.register('EW-CarSpawn-SpawnVehicle', (item) => {
      Log.PrintConsole('Receiving Data: '+item);
      var data = JSON.parse(item);
      var vehicle = mp.vehicles.new(data.item.Hash,new mp.Vector3(data.playerposition.x, data.playerposition.y, data.playerposition.z));
      vehicle.numberPlate = 'EWReborn';
    });

    mp.events.add('EW-Woltlab-Login', (player, item) => {
      //Log.PrintConsole(item);
      //Log.PrintConsole(JSON.stringify(player));
      var data = JSON.parse(item);
      var result = Whitelisting.VerifyLogin(data.username, data.password).then((data) => {
        Log.PrintConsole(JSON.stringify(result));
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
        Log.PrintConsole('ERROR: '+error);
      });
    });
    
    mp.events.add('playerDeath', (player) => {
      player.outputChatBox('Du bist tot');
    });

    mp.events.add('EW-Character-RequestCreate', (player: PlayerMp, data) => {
      //Log.Debug(JSON.stringify(player) + ' | ' + JSON.stringify(data));
      Log.Debug('Requesting Character creation ('+player.name+')');
      try {
        Player.SpawnAsNewCharacter(player);
        AccountManager.LoadAccount(player.socialClub, '').then((account) => {
          var chardata = JSON.parse(data);
          CharacterManager.CreateCharacter(account.id, chardata.firstname, chardata.lastname);
        });
      } catch (error) {
        Log.Debug(error);
      }
    });

    rpc.register('EW-Teleporter-Direction', (data) => {
      Log.PrintConsole('Erhalte Daten: ' + data);
    });

    rpc.register('EW-Teleporter-Location', (data) => {
      Log.PrintConsole('Erhalte Daten: ' + data);
    });

    rpc.register('EW-Character-Selected', (data) => {
      Log.PrintConsole('Spieler wählte Charakter - Erhalte Daten: ' + data);
    });

    Log.PrintConsole('Events has been loaded');
  }
  
}