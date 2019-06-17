/*
 * @Author: Tim Koepsel 
 * @Date: 2019-02-05 22:17:28 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-16 01:25:24
 */
import * as settings from '../../config/modsettings.json';
import World from '../world/Worldmap.js';
import Log from './CoreLog.js';
import Commands from './commands/commands.js';

class CoreGame {

    constructor() {
        
    }

    InitGame() {

        // Default Settings

        Commands.InitCommands();
        Log.PrintConsole('Client Commands has been loaded');
        World.InitWorldmap();
        Log.PrintConsole('World Map initialisation process complete');
        mp.world.time.set(settings.StartTime.hours, settings.StartTime.minutes, settings.StartTime.seconds);
        Log.PrintConsole('World Clock set to '+mp.world.time.hour+':'+mp.world.time.minute);
    }

    HandleColShapes(player, shape) {
        
    }
}

const Game = new CoreGame();

export default Game;