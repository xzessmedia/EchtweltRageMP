"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: Tim Koepsel
 * @Date: 2019-02-05 20:21:10
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-13 07:22:33
 */
const mongoose_1 = require("mongoose");
exports.EWAccountSchema = new mongoose_1.Schema({
    createdAt: Date,
    lastLogin: Date,
    socialclubname: String,
    ragempname: String,
    hardwareId: String,
    loginData: String,
    level: Number,
    status: Number
});
exports.EWAccountSchema.pre("save", (next) => {
    let now = new Date();
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});
exports.EWAccount = mongoose_1.model("EWAccount", exports.EWAccountSchema);
//# sourceMappingURL=EWAccount.js.map