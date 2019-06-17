/*
 * @Author: Tim Koepsel 
 * @Date: 2019-02-15 22:37:33 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-16 01:28:29
 */
import * as rpc from 'rage-rpc';
import BaseLocationAction from "../../base/BaseLocationAction";
import RageColor from '../../../EWDefinitions';

 export default class LocationWaschanlage extends BaseLocationAction {
     constructor(position: Vector3Mp) {
         super('Waschanlage', position, 100, 74, 1, new RageColor(0,0,255,100), (player: PlayerMp) => {
            this.OnEnter(player);
         }, (player: PlayerMp) => {
             this.OnExit(player);
         });
     }

     OnEnter(player: PlayerMp)  {
        player.notify('Test');
        if (player.vehicle != null && player.seat === -1) {
            var vehicle = player.vehicle;

            var value = {
                vehicle: vehicle,
                amount: 0.0
            };
            player.notify('Du wäscht deinen Wagen');
            rpc.callClient('EW-Vehicle-ChangeDirtlevel', value);
        }
     }

     OnExit(player: PlayerMp)  {
        
    }
 }