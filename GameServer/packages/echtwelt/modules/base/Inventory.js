"use strict";
/*
 * @Author: Tim Koepsel
 * @Date: 2019-08-26 19:06:33
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-08-26 20:43:15
 */
Object.defineProperty(exports, "__esModule", { value: true });
const CoreLog_1 = require("../core/CoreLog");
class Inventory {
    constructor(maxweight, maxsize) {
        this.maxWeight = maxweight;
        this.maxSize = maxsize;
        this.isOverfilled = false;
        this.content = new Array();
        this.Recalculate();
    }
    AddItem(item, sender) {
        this.content.push(item);
        this.Recalculate();
        CoreLog_1.default.AddPlayerLog('Added ' + JSON.stringify(item) + ' at ' + JSON.stringify(sender.position), sender);
    }
    DropItem(item, sender) {
        item.DropItem(sender, item.Amount);
        this.Recalculate();
        CoreLog_1.default.AddPlayerLog('Dropped ' + JSON.stringify(item) + ' at ' + JSON.stringify(sender.position), sender);
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
exports.default = Inventory;
//# sourceMappingURL=Inventory.js.map