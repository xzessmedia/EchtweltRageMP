/*
 * @Author: Tim Koepsel 
 * @Date: 2019-02-05 22:17:28 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-08-26 20:17:51
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

    ChangeWeather(newWeather: string, duration: number=15000) {
        let oldweather = mp.world.weather;

        mp.world.setWeatherTransition(newWeather,duration);
        Log.AddLog('Weather has been changed from ' + JSON.stringify(oldweather) + ' to ' + JSON.stringify(mp.world.weather) + ' with a duration of '+duration.toString());
    }

    ChangeWorldTime(hour: number, minute: number, second: number)  {
        let oldtime = mp.world.time;

        mp.world.time.set(hour, minute, second);

        Log.AddLog('Time has been changed from ' + JSON.stringify(oldtime) + ' to ' + JSON.stringify(mp.world.time));
    }


    HandleColShapes(player, shape) {
        
    }
}

const Game = new CoreGame();

export default Game;