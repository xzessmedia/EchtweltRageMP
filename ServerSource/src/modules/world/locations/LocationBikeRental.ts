/*
 * @Author: Tim Koepsel 
 * @Date: 2019-10-22 23:43:48 
 * @Last Modified by:   Tim Koepsel 
 * @Last Modified time: 2019-10-22 23:43:48 
 */

import RageColor from "../../../EWDefinitions";
import BaseLocationAction from "../../base/BaseLocationAction";

 class LocationBikeRantal extends BaseLocationAction {
     constructor() {
         super('Fahrradverleih',new mp.Vector3(-1014.438, -2690.965, 13.076), 494, 77,0, new RageColor(0,0,0,0),
         (player: PlayerMp)=> {
            this.OnEnter(player);
                
         }, (player: PlayerMp)=>{
            this.OnExit(player);
         });
         
     }

     OnEnter(player: PlayerMp)  {
        player.call('EW-CarSpawn');
     }

     OnExit(player: PlayerMp)  {
        
     }
 }

 export default LocationBikeRantal;