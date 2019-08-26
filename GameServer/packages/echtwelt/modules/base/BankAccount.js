"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CorePlayer_1 = require("../core/CorePlayer");
/*
 * @Author: Tim Koepsel
 * @Date: 2019-08-26 19:33:40
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-08-26 20:42:37
 */
class BankAccount {
    constructor(accountnumber, owner, initialamount = 0) {
        this.AccountNumber = accountnumber;
        this.Owner = CorePlayer_1.default.LoadData(owner);
        this.MoneyAmount = initialamount;
    }
    ValidatePin(pin) {
        this.FalseTries = this.Pincode != pin ? this.FalseTries++ : this.FalseTries;
        this.IsLocked = this.FalseTries > 3 ? true : false;
        return this.Pincode == pin;
    }
    DepositMoney(amount) {
        this.MoneyAmount += amount;
    }
    PayOutMoney(amount) {
        let payoutamount = ((this.Disposition + this.MoneyAmount) - amount) >= 0 ? amount : (this.Disposition + this.MoneyAmount);
        this.IsBankrupt = ((this.Disposition + this.MoneyAmount) - amount) > 0 ? false : true;
        this.MoneyAmount -= payoutamount;
        return payoutamount;
    }
}
//# sourceMappingURL=BankAccount.js.map