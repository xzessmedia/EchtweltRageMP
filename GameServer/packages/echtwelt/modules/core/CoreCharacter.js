"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const CoreApi_1 = require("./CoreApi");
const CoreLog_1 = require("./CoreLog");
/*
 * @Author: Tim Koepsel
 * @Date: 2019-10-22 23:51:12
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-10-23 00:45:06
 */
class CoreCharacter {
    CreateCharacter(playerdata, firstname, lastname, birthdate, isMale) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var t_character = {
                    CreatedAt: new Date().toISOString(),
                    IsAlive: true,
                    DiedAt: '',
                    DeathBy: '',
                    Firstname: firstname,
                    Lastname: lastname,
                    Birthdate: birthdate,
                    IsMale: true,
                    LastLocation: {},
                    Customization: {},
                    Hunger: 0,
                    Thirst: 0,
                    Health: 100,
                    Armor: 0,
                    playerId: playerdata.Id
                };
                let result = yield CoreApi_1.default.post(`/players/${playerdata.Id}/characters`, t_character);
            }
            catch (error) {
                CoreLog_1.default.AddErrorLog(error, 'CreateCharacter()');
            }
        });
    }
    CountCharacters(playerdata, firstname, lastname, birthdate, isMale) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield CoreApi_1.default.get(`/players/${playerdata.Id}/characters`);
                if (result.data !== null) {
                    let data_array = result.data;
                    return data_array.length;
                }
            }
            catch (error) {
                CoreLog_1.default.AddErrorLog(error, 'CreateCharacter()');
            }
        });
    }
    GetCharacters(playerdata) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield CoreApi_1.default.get(`/players/${playerdata.Id}/characters?filter={"where":{"IsAlive": true"}}`);
                if (result.data !== null) {
                    let data_array = JSON.parse(result.data);
                    return data_array;
                }
            }
            catch (error) {
                CoreLog_1.default.AddErrorLog(error, 'CreateCharacter()');
            }
        });
    }
}
const Character = new CoreCharacter();
exports.default = Character;
//# sourceMappingURL=CoreCharacter.js.map