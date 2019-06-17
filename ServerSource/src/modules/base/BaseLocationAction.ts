/*
 * @Author: Tim Koepsel 
 * @Date: 2019-02-06 20:18:28 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-19 20:14:58
 */

 import BaseLocation from './BaseLocation';
 import RageColor from '../../EWDefinitions';

 export default class BaseLocationAction extends BaseLocation {

    private _marker: MarkerMp;
    private _colshape: ColshapeMp;
    private _textlabel: TextLabelMp;

    private _enterAction: (player: PlayerMp) => void;
    private _leaveAction: (player: PlayerMp) => void;

     constructor(locationName: string, position: Vector3Mp, iconid: number, iconcolor: number, markertype: number, markercolor: RageColor, enterAction: (player: PlayerMp) => void, leaveAction: (player: PlayerMp) => void, dimension=0) {
         super(locationName, iconid, position,true,iconcolor,dimension);

         this._marker = mp.markers.new(markertype,position,1.0,{dimension: dimension});
         this._marker.setColor(markercolor.r, markercolor.g, markercolor.b, markercolor.a);
         this._textlabel = mp.labels.new(locationName, position,{dimension:dimension});
         this._colshape = mp.colshapes.newTube(position.x,position.y,position.z, 1.0, 1.0);
         this._colshape.dimension = dimension;
         this._enterAction = enterAction;
         this._leaveAction = leaveAction;
         this.InitEvents();
     }


     InitEvents() {
        mp.events.add('playerEnterColshape', (player: PlayerMp, shape: ColshapeMp) => {
            if (shape === this._colshape) {
                this._enterAction(player);
            }
        });
        mp.events.add('playerExitColshape', (player: PlayerMp, shape: ColshapeMp) => {
            if (shape === this._colshape) {
                this._leaveAction(player);
            }
        });
     }


 }