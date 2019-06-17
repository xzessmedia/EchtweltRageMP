"use strict";
/*
 * @Author: Tim Koepsel
 * @Date: 2019-02-13 07:35:19
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-13 07:42:10
 */
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.EWItemSchema = new mongoose_1.Schema({
    itemName: String,
    itemCategory: String,
    itemData: Object,
    itemAmount: Number,
    isStackable: Boolean
});
exports.EWItemSchema.pre("save", (next) => {
    let now = new Date();
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});
exports.EWItem = mongoose_1.model("EWItem", exports.EWItemSchema);
//# sourceMappingURL=EWItem.js.map