"use strict";
/*
 * @Author: Tim Koepsel
 * @Date: 2019-02-08 02:29:56
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-10-22 23:58:59
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
const settings = require("../../config/modsettings.json");
const CoreApi_1 = require("./CoreApi");
class CoreLog {
    constructor() {
    }
    AddLog(logmessage, category = 'default', logtype = 0, source = 'unknown', printToConsole = false) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var t_log = {
                    CreatedAt: new Date().toISOString(),
                    Source: source,
                    Category: category,
                    LogType: logtype,
                    Message: logmessage
                };
                yield CoreApi_1.default.post('/logs', t_log);
                if (printToConsole == true) {
                    this.PrintConsole(logmessage, true);
                }
            }
            catch (error) {
                this.PrintConsole('Error while posting log file: ' + JSON.stringify(error));
            }
        });
    }
    AddSystemLog(logmessage, category = 'System', logtype = 1, source = 'unknown', printToConsole = true) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var t_log = {
                    CreatedAt: new Date().toISOString(),
                    Source: source,
                    Category: category,
                    LogType: logtype,
                    Message: logmessage
                };
                yield CoreApi_1.default.post('/logs', t_log);
                if (printToConsole == true) {
                    this.PrintConsole(logmessage, true);
                }
            }
            catch (error) {
                this.PrintConsole('Error while posting log file: ' + JSON.stringify(error));
            }
        });
    }
    AddDebugLog(logmessage, source = 'unknown', printToConsole = true) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (settings.Debug === false)
                    return;
                var t_log = {
                    CreatedAt: new Date().toISOString(),
                    Source: source,
                    Category: 'Debug',
                    LogType: 2,
                    Message: logmessage
                };
                yield CoreApi_1.default.post('/logs', t_log);
                if (printToConsole == true) {
                    this.PrintConsole(logmessage, true);
                }
            }
            catch (error) {
                this.PrintConsole('Error while posting log file: ' + JSON.stringify(error));
            }
        });
    }
    AddPlayerLog(logmessage, player, category = 'Player') {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var t_log = {
                    CreatedAt: new Date().toISOString(),
                    Source: JSON.stringify(player),
                    Category: 'Player',
                    LogType: 3,
                    Message: logmessage
                };
                yield CoreApi_1.default.post('/logs', t_log);
            }
            catch (error) {
                this.PrintConsole('Error while posting player log file: ' + JSON.stringify(error));
            }
        });
    }
    AddErrorLog(logmessage, source = 'unknown') {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var t_log = {
                    CreatedAt: new Date().toISOString(),
                    Source: source,
                    Category: 'Errors',
                    LogType: 999,
                    Message: JSON.stringify(logmessage)
                };
                yield CoreApi_1.default.post('/logs', t_log);
            }
            catch (error) {
                this.PrintConsole('Error while posting log file: ' + JSON.stringify(error));
            }
        });
    }
    PlayerInfo(player, detailed = false) {
        if (detailed === false) {
            return ('[NAME]' + player.name + '[SC]' + player.socialClub + '[IP]' + player.ip);
        }
        else {
            return ('[NAME]' + player.name + '[SC]' + player.socialClub + '[IP]' + player.ip + '[PACKLOSS]' + player.packetLoss + '[ACTION]' + player.action + '[AIM]' + player.aimTarget.name + '[DATA]' + JSON.stringify(player.data));
        }
    }
    PrintConsole(message, includetime = true) {
        var now = new Date();
        var hours = now.getHours() < 9 ? '0' + now.getHours() : now.getHours();
        var minutes = now.getMinutes() < 9 ? '0' + now.getMinutes() : now.getMinutes();
        var seconds = now.getSeconds() < 9 ? '0' + now.getSeconds() : now.getSeconds();
        if (includetime === true) {
            console.log('[' + settings.Servername + ']:' + hours + ':' + minutes + ':' + seconds + ' - ' + message);
        }
        else {
            console.log('[' + settings.Servername + ']: - ' + message);
        }
    }
    Debug(message) {
        if (settings.Debug === true) {
            this.PrintConsole(message);
        }
    }
    DebugInfo(DebugReason, debugobject) {
        this.PrintConsole('Debug [' + DebugReason + '] Output: ' + JSON.stringify(debugobject));
    }
}
const Log = new CoreLog();
exports.default = Log;
//# sourceMappingURL=CoreLog.js.map