/*
 * @Author: Tim Koepsel 
 * @Date: 2019-10-22 23:44:46 
 * @Last Modified by:   Tim Koepsel 
 * @Last Modified time: 2019-10-22 23:44:46 
 */


import BaseLocation from "../../base/BaseLocation";
import RageColor from "../../../EWDefinitions";

 class LocationPolice extends BaseLocation {
     constructor() {
         super('Polizei', 60, new mp.Vector3(439.6697, -982.6948, 30.6896), true, 38);
     }
 }

 export default LocationPolice;