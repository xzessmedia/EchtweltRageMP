/*
 * @Author: Tim Koepsel 
 * @Date: 2019-02-08 02:29:56 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-10-22 23:58:59
 */

import * as settings from '../../config/modsettings.json';
import CoreApi from "./CoreApi";

 class CoreLog {
     constructor() {
         
     }

     async AddLog(logmessage:string, category:string = 'default', logtype:number = 0, source:string ='unknown', printToConsole: boolean = false) {
        try {
            var t_log = {
                CreatedAt: new Date().toISOString(),
                Source: source,
                Category: category,
                LogType: logtype,
                Message: logmessage
            }
            await CoreApi.post('/logs',t_log);

            if (printToConsole == true) {
                this.PrintConsole(logmessage, true);
            }
        } catch (error) {
            this.PrintConsole('Error while posting log file: '+ JSON.stringify(error));
        }
     }

     async AddSystemLog(logmessage:string, category:string = 'System', logtype:number = 1, source:string ='unknown', printToConsole: boolean = true) {
        try {
            var t_log = {
                CreatedAt: new Date().toISOString(),
                Source: source,
                Category: category,
                LogType: logtype,
                Message: logmessage
            }
            await CoreApi.post('/logs',t_log);

            if (printToConsole == true) {
                this.PrintConsole(logmessage, true);
            }
        } catch (error) {
            this.PrintConsole('Error while posting log file: '+ JSON.stringify(error));
        }
     }

     async AddDebugLog(logmessage:string, source:string ='unknown', printToConsole: boolean = true) {
        try {
            if(settings.Debug === false) return;
            var t_log = {
                CreatedAt: new Date().toISOString(),
                Source: source,
                Category: 'Debug',
                LogType: 2,
                Message: logmessage
            }
            await CoreApi.post('/logs',t_log);

            if (printToConsole == true) {
                this.PrintConsole(logmessage, true);
            }
        } catch (error) {
            this.PrintConsole('Error while posting log file: '+ JSON.stringify(error));
        }
     }

     async AddPlayerLog(logmessage: string, player: PlayerMp, category: string = 'Player') {
        try {
            var t_log = {
                CreatedAt: new Date().toISOString(),
                Source: JSON.stringify(player),
                Category: 'Player',
                LogType: 3,
                Message: logmessage
            }
            await CoreApi.post('/logs',t_log);
        } catch (error) {
            this.PrintConsole('Error while posting player log file: '+ JSON.stringify(error));
        }
     }

     async AddErrorLog(logmessage:object, source:string ='unknown') {
        try {
            var t_log = {
                CreatedAt: new Date().toISOString(),
                Source: source,
                Category: 'Errors',
                LogType: 999,
                Message: JSON.stringify(logmessage)
            }
            await CoreApi.post('/logs',t_log);
        } catch (error) {
            this.PrintConsole('Error while posting log file: '+ JSON.stringify(error));
        }
     }

     PlayerInfo(player: PlayerMp, detailed = false) {
         if (detailed === false) {
            return ('[NAME]'+player.name+'[SC]'+player.socialClub+'[IP]'+player.ip);
         } else {
            return ('[NAME]'+player.name+'[SC]'+player.socialClub+'[IP]'+player.ip+'[PACKLOSS]'+player.packetLoss+'[ACTION]'+player.action+'[AIM]'+player.aimTarget.name+'[DATA]'+JSON.stringify(player.data));
         }
     }

     PrintConsole(message: any, includetime = true) {
         var now = new Date();
         var hours = now.getHours() < 9 ? '0'+now.getHours() : now.getHours();
         var minutes = now.getMinutes() < 9 ? '0'+now.getMinutes() : now.getMinutes();
         var seconds = now.getSeconds() < 9 ? '0'+now.getSeconds() : now.getSeconds();
         if (includetime === true) {
            console.log('[' + settings.Servername + ']:' + hours +':' + minutes +':' + seconds +' - '+message);
         } else {
            console.log('[' + settings.Servername + ']: - '+message);
         }

     }

     Debug(message: any) {
         if (settings.Debug === true) {
             this.PrintConsole(message);
         }
     }

     DebugInfo(DebugReason: string, debugobject: any) {
         this.PrintConsole('Debug ['+DebugReason+'] Output: '+JSON.stringify(debugobject));
     }
 }

 const Log = new CoreLog();
 export default Log;