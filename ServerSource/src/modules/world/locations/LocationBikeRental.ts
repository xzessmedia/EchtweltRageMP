/*
 * @Author: Dennis Reich 
 * @Date: 2019-02-08 22:45:10 
 * @Last Modified by: Dennis Reich
 * @Last Modified time: 2019-02-08 22:51:00
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