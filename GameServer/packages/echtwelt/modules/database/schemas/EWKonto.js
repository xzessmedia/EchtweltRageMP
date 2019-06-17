"use strict";
/*
 * @Author: Tim Koepsel
 * @Date: 2019-02-13 07:19:45
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-13 07:42:26
 */
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.EWKontoSchema = new mongoose_1.Schema({
    createdAt: Date,
    accountnumber: Number,
    moneyamount: Number,
    pincode: Number
});
exports.EWKontoSchema.pre("save", (next) => {
    let now = new Date();
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});
exports.EWKonto = mongoose_1.model("EWKonto", exports.EWKontoSchema);
//# sourceMappingURL=EWKonto.js.map