/*
 * @Author: Tim Koepsel 
 * @Date: 2019-10-22 23:44:55 
 * @Last Modified by:   Tim Koepsel 
 * @Last Modified time: 2019-10-22 23:44:55 
 */


import BaseLocation from "../../base/BaseLocation";
import RageColor from "../../../EWDefinitions";

 class LocationSchweineFarm extends BaseLocation {
     constructor() {
         super('Schweinefarm',120, new mp.Vector3(2417.542, 4784.507, 34.68021), true, 33);
         
         this.AddPigs();
     }

     AddPigs() {

     }
 }

 export default LocationSchweineFarm;