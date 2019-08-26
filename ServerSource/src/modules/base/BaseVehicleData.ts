

/*
 * @Author: Tim Koepsel 
 * @Date: 2019-08-26 19:53:23 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-08-26 20:19:19
 */

import Inventory from "./Inventory";
import BasePlayerData from "./BasePlayerData";

 export default class BaseVehicleData {
    public owner: BasePlayerData;
    public fuel: number;
    public broken: boolean;
    public carbomb: boolean;
    public cargo: Inventory;
    public distancecounter: number;
 }