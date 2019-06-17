"use strict";
/*
 * @Author: Tim Koepsel
 * @Date: 2019-02-17 10:35:15
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-17 10:40:07
 */
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.EWKleidungSchema = new mongoose_1.Schema({
    wearedOutfit: Object,
    createdOutfits: [],
    ownedCloth: []
});
exports.EWKleidung = mongoose_1.model("EWKleidung", exports.EWKleidungSchema);
//# sourceMappingURL=EWKleidung.js.map