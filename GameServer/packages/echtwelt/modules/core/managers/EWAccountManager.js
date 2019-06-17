"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: Tim Koepsel
 * @Date: 2019-02-05 20:53:18
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-06 21:28:17
 */
const EWAccount_1 = require("../../database/schemas/EWAccount");
class EWAccountManager {
    constructor() {
    }
    CreateAccount(socialclubname, ragempname, hardwareid, logindata) {
        var t_account = new EWAccount_1.EWAccount({
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
    LoadAccount(socialclubname, hardwareid) {
        return new Promise((resolve, reject) => {
            EWAccount_1.EWAccount.find({ socialclubname: socialclubname, hardwareId: hardwareid }).sort({ createdAt: -1 }).limit(1).exec((err, res) => {
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
    LoadAccountById(id) {
        return new Promise((resolve, reject) => {
            EWAccount_1.EWAccount.find({ _id: id }).sort({ createdAt: -1 }).limit(1).exec((err, res) => {
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
    HasAccount(socialclubname, hardwareid) {
        return new Promise((resolve, reject) => {
            EWAccount_1.EWAccount.find({ socialclubname: socialclubname, hardwareId: hardwareid }).sort({ createdAt: -1 }).limit(1).exec((err, res) => {
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
exports.default = AccountManager;
//# sourceMappingURL=EWAccountManager.js.map