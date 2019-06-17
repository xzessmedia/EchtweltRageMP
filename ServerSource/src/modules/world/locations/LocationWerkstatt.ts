/*
 * @Author: Tim Koepsel 
 * @Date: 2019-02-19 20:09:28 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-19 20:25:40
 */

import * as rpc from 'rage-rpc';
import BaseLocationAction from "../../base/BaseLocationAction";
import RageColor from '../../../EWDefinitions';
import Log from '../../core/CoreLog';

 export default class LocationWerkstatt extends BaseLocationAction {
     constructor(werkstattname: string, position: Vector3Mp) {
         super(werkstattname, position, 402, 74, 1, new RageColor(0,0,255,100), (player: PlayerMp) => {
            Log.Debug('Werkstatt triggered OnEnter()');
            this.OnEnter(player);
         }, (player: PlayerMp) => {
             this.OnExit(player);
             Log.Debug('Werkstatt triggered OnExit()');
         });
     }

     OnEnter(player: PlayerMp)  {
        player.notify('Enter');
        player.outputChatBox('Enter');
        Log.Debug('Player entered ColShape');
     }

     OnExit(player: PlayerMp)  {
        player.notify('Exit');
        player.outputChatBox('Exit');
        Log.Debug('Player left ColShape');
    }
 }