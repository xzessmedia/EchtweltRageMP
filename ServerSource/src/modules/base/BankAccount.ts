import BasePlayerData from "./BasePlayerData";
import Player from "../core/CorePlayer";

/*
 * @Author: Tim Koepsel 
 * @Date: 2019-08-26 19:33:40 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-08-26 20:42:37
 */

 class BankAccount {
     AccountNumber: number;
     Owner: BasePlayerData;
     MoneyAmount: number;
     Disposition: number;
     Pincode: number;
     FalseTries: number;
     IsLocked: boolean;
     IsBankrupt: boolean;

     constructor(accountnumber: number, owner: PlayerMp, initialamount: number=0) {
        this.AccountNumber = accountnumber;
        this.Owner = Player.LoadData(owner);
        this.MoneyAmount = initialamount;    
     }


     ValidatePin(pin: number): boolean {
        this.FalseTries = this.Pincode != pin ? this.FalseTries++ : this.FalseTries;
        this.IsLocked = this.FalseTries > 3 ? true : false;
        return this.Pincode == pin;
     }

     DepositMoney(amount: number) {
         this.MoneyAmount += amount;
     }

     PayOutMoney(amount: number): number {
         let payoutamount = ((this.Disposition + this.MoneyAmount) - amount) >= 0 ? amount : (this.Disposition + this.MoneyAmount);
         this.IsBankrupt = ((this.Disposition + this.MoneyAmount) - amount) > 0 ? false : true;
         this.MoneyAmount -= payoutamount;
         return payoutamount;
     }

     
 }