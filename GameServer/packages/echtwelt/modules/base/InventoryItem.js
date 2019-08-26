"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CoreLog_1 = require("../core/CoreLog");
/*
 * @Author: Tim Koepsel
 * @Date: 2019-08-26 18:43:18
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-08-26 19:19:11
 */
class InventoryItem {
    static Create(name, inventoryicon, worldmesh, amount = 1, onuseCallback, usable = true, illegal = false, category = 'Default', weight = 1.0, size = 1.0) {
        let t_item = new InventoryItem();
        t_item.Name = name;
        t_item.Category = category;
        t_item.Amount = amount;
        t_item.Weight = weight;
        t_item.Size = size;
        t_item.Icon = inventoryicon;
        t_item.WorldMesh = worldmesh;
        t_item.IsIllegal = illegal;
        t_item.IsUsable = usable;
        onuseCallback = onuseCallback;
        return t_item;
    }
    UseItem(sender) {
        this.OnUseCallback(sender, this);
    }
    DropItem(sender, amount) {
        let amountToTake = (this.Amount - amount > 0) ? amount : this.Amount;
        this.Amount -= amountToTake;
        let t_obj = mp.pickups.new(this.WorldMesh, sender.position);
        let t_item = this;
        t_item.Amount = amountToTake;
        t_obj.setVariable('data', JSON.stringify(t_item));
        CoreLog_1.default.AddPlayerLog('Dropped Item at ' + JSON.stringify(sender.position) + ' Item: ' + JSON.stringify(t_item), sender);
    }
    GetItemData(json) {
        return JSON.parse(json);
    }
}
exports.default = InventoryItem;
//# sourceMappingURL=InventoryItem.js.map