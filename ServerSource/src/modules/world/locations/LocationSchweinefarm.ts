/*
 * @Author: Dennis Reich 
 * @Date: 2019-02-08 22:52:20 
 * @Last Modified by: Dennis Reich
 * @Last Modified time: 2019-02-08 22:54:22
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