"use strict";
/*
 * @Author: Tim Koepsel
 * @Date: 2019-02-13 07:33:47
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-22 19:48:07
 */
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.EWInventorySchema = new mongoose_1.Schema({
    createdAt: Date,
    maxWeight: Number,
    maxDimension: Number,
    items: Array()
});
exports.EWInventorySchema.pre("save", (next) => {
    let now = new Date();
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});
exports.EWInventory = mongoose_1.model("EWInventory", exports.EWInventorySchema);
//# sourceMappingURL=EWInventory.js.map