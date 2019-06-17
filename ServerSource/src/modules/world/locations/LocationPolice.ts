/*
 * @Author: Tim Koepsel 
 * @Date: 2019-02-06 21:22:32 
 * @Last Modified by: Dennis Reich
 * @Last Modified time: 2019-02-08 22:11:07
 */

import BaseLocation from "../../base/BaseLocation";
import RageColor from "../../../EWDefinitions";

 class LocationPolice extends BaseLocation {
     constructor() {
         super('Polizei', 60, new mp.Vector3(439.6697, -982.6948, 30.6896), true, 38);
     }
 }

 export default LocationPolice;