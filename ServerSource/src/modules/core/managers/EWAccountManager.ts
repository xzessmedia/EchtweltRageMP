/*
 * @Author: Tim Koepsel 
 * @Date: 2019-02-05 20:53:18 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-06 21:28:17
 */
import { EWAccount, EWAccountSchema } from "../../database/schemas/EWAccount";
import { IEWAccount } from "../../database/interfaces/IEWAccount";

class EWAccountManager  {
    constructor() {
        
    }

    CreateAccount(socialclubname: string, ragempname: string, hardwareid: string, logindata: string) {
        var t_account = new EWAccount({
            createdAt: new Date(),
            lastLogin: new Date(),
            socialclubname: socialclubname,
            ragempname: ragempname,
            hardwareId: hardwareid,
            loginData: logindata,
            status: 1
        });
        t_account.save();
    }

    // https://gist.github.com/brennanMKE/ee8ea002d305d4539ef6
    
    LoadAccount(socialclubname: string, hardwareid: string):Promise<IEWAccount> {
        return new Promise((resolve, reject) => {
        
            EWAccount.find({socialclubname: socialclubname, hardwareId: hardwareid}).sort({ createdAt: -1 }).limit(1).exec((err, res) => {
                if (err) {
                  reject(err);
                }
                else {
                  if (res.length) {
                    resolve(res[0]);
                  }
                  else {
                    resolve(null);
                  }
                }
            });
        });
    }

    LoadAccountById(id: string):Promise<IEWAccount> {
      return new Promise((resolve, reject) => {
      
          EWAccount.find({_id: id}).sort({ createdAt: -1 }).limit(1).exec((err, res) => {
              if (err) {
                reject(err);
              }
              else {
                if (res.length) {
                  resolve(res[0]);
                }
                else {
                  resolve(null);
                }
              }
          });
      });
  }
    HasAccount(socialclubname: string, hardwareid: string):Promise<boolean> {
        return new Promise((resolve, reject) => {
        
            EWAccount.find({socialclubname: socialclubname, hardwareId: hardwareid}).sort({ createdAt: -1 }).limit(1).exec((err, res) => {
                if (err) {
                  reject(err);
                }
                else {
                  if (res.length) {
                    resolve(true);
                  }
                  else {
                    resolve(false);
                  }
                }
            });
        });
    }
}

const AccountManager = new EWAccountManager();
export default AccountManager;