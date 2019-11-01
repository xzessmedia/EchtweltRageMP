"use strict";
/*
 * @Author: Tim Koepsel
 * @Date: 2019-02-08 02:30:10
 * @Last Modified by:   Tim Koepsel
 * @Last Modified time: 2019-02-08 02:30:10
 */
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const config = require("../../config/modsettings.json");
exports.default = axios_1.default.create({
    baseURL: config.BaseApi
});
//# sourceMappingURL=CoreApi.js.map