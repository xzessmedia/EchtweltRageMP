"use strict";
/*
 * @Author: Tim Koepsel
 * @Date: 2019-02-17 18:16:22
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-22 19:59:14
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const EWCharakter_1 = require("../../database/schemas/EWCharakter");
const settings = require("../../../config/modsettings.json");
const EWAccountManager_1 = require("./EWAccountManager");
const CoreLog_1 = require("../CoreLog");
class EWCharacterManager {
    constructor() {
    }
    CreateCharacter(accountid, firstname, lastname) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var t_acc = yield EWAccountManager_1.default.LoadAccountById(accountid);
                CoreLog_1.default.Debug('Trying to create character: ' + firstname + ' ' + lastname);
                var t_char = new EWCharakter_1.EWCharakter({
                    createdAt: new Date(),
                    account: t_acc,
                    firstname: firstname,
                    lastname: lastname,
                    isCitizen: false,
                    isAlive: true,
                    isBanned: false,
                    handmoney: settings.StartingMoney,
                    lastposition: JSON.stringify(settings.NewPlayerStartLocation),
                    job: 'Arbeitslos',
                    inventory: null,
                    bankaccounts: [],
                    playerdata: null
                });
                t_char.save();
            }
            catch (error) {
                CoreLog_1.default.Debug('Error: ' + JSON.stringify(error));
            }
        });
    }
    // https://gist.github.com/brennanMKE/ee8ea002d305d4539ef6
    LoadCharactersByAccount(accountId) {
        return new Promise((resolve, reject) => {
            EWCharakter_1.EWCharakter.find({ "account._id": accountId }).sort({ createdAt: -1 }).exec((err, res) => {
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
exports.default = CharacterManager;
//# sourceMappingURL=EWCharacterManager.js.map