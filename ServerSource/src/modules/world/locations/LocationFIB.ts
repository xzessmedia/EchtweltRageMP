/*
 * @Author: Tim Koepsel 
 * @Date: 2019-10-22 23:44:13 
 * @Last Modified by:   Tim Koepsel 
 * @Last Modified time: 2019-10-22 23:44:13 
 */


import BaseLocation from "../../base/BaseLocation";
import RageColor from "../../../EWDefinitions";

 class LocationFIB extends BaseLocation {
     constructor() {
         super('FIB-Zentrale',60, new mp.Vector3(104.1859, -745.4321, 45.75476), true, 38);
         
     }
 }

 export default LocationFIB;