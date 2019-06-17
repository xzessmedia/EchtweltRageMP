"use strict";
/*
 * @Author: Tim Koepsel
 * @Date: 2019-02-05 20:31:51
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-05 20:38:06
 */
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.EWLogSchema = new mongoose_1.Schema({
    createdAt: Date,
    message: String,
    category: String,
    type: String
});
exports.EWLogSchema.pre("save", (next) => {
    let now = new Date();
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});
exports.EWLog = mongoose_1.model("EWLog", exports.EWLogSchema);
//# sourceMappingURL=EWLog.js.map