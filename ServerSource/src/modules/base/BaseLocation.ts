import World from "../world/Worldmap";
import Log from "../core/CoreLog";

/*
 * @Author: Tim Koepsel 
 * @Date: 2019-02-06 20:09:10 
 * @Last Modified by: Dennis Reich
 * @Last Modified time: 2019-02-08 20:57:41
 */

 import RageColor from '../../EWDefinitions';
 class BaseLocation {

    private blip: BlipMp;

     constructor(locationName: string, spriteId: number, position: Vector3Mp, shortRange?: boolean, color?: number, dimension?: number) {
        this.blip = mp.blips.new(spriteId,position, {
            dimension : dimension,
            shortRange: shortRange,
            name: locationName,
            color: color
        });

        World.AddLocationToWorldmap(this);
        Log.PrintConsole(locationName+' has been loaded');
     }

 }

 export default BaseLocation;