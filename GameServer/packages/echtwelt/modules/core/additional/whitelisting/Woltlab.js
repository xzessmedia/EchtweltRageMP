"use strict";
/*
 * @Author: Tim Koepsel
 * @Date: 2019-02-13 11:43:30
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-17 17:43:32
 */
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
const settings = require("../../../../config/modsettings.json");
const CoreLog_js_1 = require("../../CoreLog.js");
const FormData = require('form-data');
const fetch = require('node-fetch');
class WoltlabInterface {
    ProcessResponse(response) {
        /*
            Error = 0,
            KeyWrong = 1,
            DataMissing = 2,
            Success = 10,
            WrongPasswordUsername = 11
        */
        var resultObject = {
            verify: null,
            userdata: null
        };
        switch (response.StatusCode) {
            case 0:
                CoreLog_js_1.default.PrintConsole('Login result [0] = Error');
                resultObject.verify = false;
                return resultObject;
                break;
            case 1:
                CoreLog_js_1.default.PrintConsole('Login result [1] = Settings Verification Key wrong');
                resultObject.verify = false;
                return resultObject;
                break;
            case 2:
                CoreLog_js_1.default.PrintConsole('Login result [2] = Some Data is missing');
                resultObject.verify = false;
                return resultObject;
                break;
            case 10:
                CoreLog_js_1.default.PrintConsole('Login result [10] = Login successful');
                resultObject.verify = true;
                resultObject.userdata = response.UserData;
                return resultObject;
                break;
            case 11:
                CoreLog_js_1.default.PrintConsole('Login result [11] = Wrong Password or Username');
                resultObject.verify = false;
                return resultObject;
                break;
            default:
                break;
        }
    }
    VerifyLogin(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var request = yield fetch(settings.Whitelisting.WoltlabUrl, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    method: 'POST',
                    body: 'Username=' + username + '&Password=' + password + '&Key=' + settings.Whitelisting.WoltlabVerificationKey
                });
                var response = yield request.json();
                return this.ProcessResponse(response);
            }
            catch (error) {
                CoreLog_js_1.default.PrintConsole('ERROR: ' + JSON.stringify(error));
            }
        });
    }
}
const Whitelisting = new WoltlabInterface();
exports.default = Whitelisting;
//# sourceMappingURL=Woltlab.js.map