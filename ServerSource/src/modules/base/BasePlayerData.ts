/*
 * @Author: Tim Koepsel 
 * @Date: 2019-02-18 01:08:59 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-08-26 20:23:03
 */

import Inventory from "./Inventory";

 export default class BasePlayerData {
    public AccountId: string;
    public CharacterId: string;
    public Inventory: Inventory
    public IsCuffed: boolean;

    constructor(defaultWeight: number=100, defaultSize: number=100) {
       this.Inventory = new Inventory(defaultWeight, defaultSize);
       this.IsCuffed = false;
    }
 }