/*
 * @Author: Tim Koepsel 
 * @Date: 2019-08-26 19:06:33 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-08-26 20:43:15
 */

import InventoryItem from "./InventoryItem";
import Log from "../core/CoreLog";

 export default class Inventory {
    currentWeight: number;
    currentSize: number;
    maxWeight: number;
    maxSize: number;
    isOverfilled: boolean;
    content: Array<InventoryItem>;

    constructor(maxweight: number, maxsize: number) {
        this.maxWeight = maxweight;
        this.maxSize = maxsize;
        this.isOverfilled = false;
        this.content = new Array<InventoryItem>();
        this.Recalculate();
    }

    AddItem(item: InventoryItem, sender: PlayerMp) {
        this.content.push(item);
        this.Recalculate();
        Log.AddPlayerLog('Added '+JSON.stringify(item)+' at '+JSON.stringify(sender.position), sender);
    } 

    DropItem(item: InventoryItem, sender: PlayerMp) {
        item.DropItem(sender, item.Amount);
        this.Recalculate();
        Log.AddPlayerLog('Dropped '+JSON.stringify(item)+' at '+JSON.stringify(sender.position), sender);
    }

    Recalculate() {
        let t_cweight = 0;
        let t_csize = 0;

        this.content.forEach(element => {
            t_cweight += element.Weight;
            t_csize += element.Size;
        });
        this.isOverfilled = (t_cweight > this.maxWeight || t_csize > this.maxSize) ? true : false;
        this.currentWeight = t_cweight;
        this.currentSize = t_csize;
    }
 }