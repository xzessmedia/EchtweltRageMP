"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: Tim Koepsel
 * @Date: 2019-02-11 09:39:19
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-22 21:19:02
 */
const mongoose_1 = require("mongoose");
const EWAccount_1 = require("./EWAccount");
const EWKonto_1 = require("./EWKonto");
const EWInventory_1 = require("./EWInventory");
exports.EWCharakterSchema = new mongoose_1.Schema({
    createdAt: Date,
    account: EWAccount_1.EWAccount.schema,
    firstname: String,
    lastname: String,
    isCitizen: Boolean,
    isAlive: Boolean,
    isBanned: Boolean,
    handmoney: Number,
    lastposition: String,
    job: String,
    inventory: EWInventory_1.EWInventory.schema,
    bankaccounts: [EWKonto_1.EWKonto.schema],
    playerdata: Object
});
exports.EWCharakterSchema.pre("save", (next) => {
    let now = new Date();
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});
exports.EWCharakter = mongoose_1.model("EWCharakter", exports.EWCharakterSchema);
//# sourceMappingURL=EWCharakter.js.map