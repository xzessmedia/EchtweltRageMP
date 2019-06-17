/*
 * @Author: Tim Koepsel 
 * @Date: 2019-02-17 18:16:22 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-22 19:59:14
 */


import { EWAccount, EWAccountSchema } from "../../database/schemas/EWAccount";
import { IEWAccount } from "../../database/interfaces/IEWAccount";
import { EWCharakter } from "../../database/schemas/EWCharakter";
import { IEWCharakter } from "../../database/interfaces/IEWCharakter";
import * as settings from '../../../config/modsettings.json';
import { EWInventory } from "../../database/schemas/EWInventory";
import AccountManager from "./EWAccountManager";
import Log from "../CoreLog";

class EWCharacterManager  {
    constructor() {
        
    }

    async CreateCharacter(accountid, firstname: string, lastname: string) {
        try {
          var t_acc = await AccountManager.LoadAccountById(accountid);
          Log.Debug('Trying to create character: '+firstname+' '+lastname);
        var t_char = new EWCharakter({
            createdAt: new Date(),
            account: t_acc,
            firstname: firstname,
            lastname: lastname,
            isCitizen: false,
            isAlive: true,
            isBanned: false,
            handmoney: settings.StartingMoney,
            lastposition: JSON.stringify(settings.NewPlayerStartLocation),
            job:'Arbeitslos',
            inventory: null,
            bankaccounts: [],
            playerdata: null
        });
        t_char.save();
        } catch (error) {
          Log.Debug('Error: '+ JSON.stringify(error));
        }
    }

    // https://gist.github.com/brennanMKE/ee8ea002d305d4539ef6
    
    LoadCharactersByAccount(accountId):Promise<IEWCharakter[]> {
        return new Promise((resolve, reject) => {
        
            EWCharakter.find({"account._id":accountId}).sort({ createdAt: -1 }).exec((err, res) => {
                if (err) {
                  reject(err);
                }
                else {
                  if (res.length) {
                    resolve(res);
                  }
                  else {
                    resolve(null);
                  }
                }
            });
        });
    }

}

const CharacterManager = new EWCharacterManager();
export default CharacterManager;