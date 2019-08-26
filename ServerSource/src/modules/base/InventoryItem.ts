import Log from "../core/CoreLog";

/*
 * @Author: Tim Koepsel 
 * @Date: 2019-08-26 18:43:18 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-08-26 19:19:11
 */

 export default class InventoryItem {
    Name: string;
    Category: string;
    Amount: number;
    Weight: number;
    Size: number;
    Icon: string;
    WorldMesh: HashOrString;
    IsIllegal: boolean;
    IsUsable: boolean;
    OnUseCallback: (sender: PlayerMp, usedItem: InventoryItem) => void;

    static Create(name: string,  inventoryicon: string, worldmesh: HashOrString, amount: number=1, onuseCallback:(sender: PlayerMp, usedItem: InventoryItem) => void, usable: boolean=true, illegal: boolean=false,  category: string='Default', weight: number=1.0, size: number=1.0): InventoryItem {
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

    UseItem(sender: PlayerMp) {
        this.OnUseCallback(sender, this);
    }

    DropItem(sender: PlayerMp, amount: number) {
        let amountToTake: number = (this.Amount-amount > 0) ? amount : this.Amount;
        this.Amount -= amountToTake;
        
        let t_obj = mp.pickups.new(this.WorldMesh, sender.position);
        let t_item: InventoryItem = this;
        t_item.Amount = amountToTake;

        t_obj.setVariable('data', JSON.stringify(t_item));

        Log.AddPlayerLog('Dropped Item at '+ JSON.stringify(sender.position) + ' Item: '+JSON.stringify(t_item), sender);
    }

    GetItemData(json: string): InventoryItem {
        return <InventoryItem> JSON.parse(json);
    }
 }