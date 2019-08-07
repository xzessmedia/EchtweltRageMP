/*
 * @Author: Tim Koepsel 
 * @Date: 2019-02-08 02:29:56 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-19 20:22:28
 */
import { EWLog } from "../database/schemas/EWLog";
import * as settings from '../../config/modsettings.json';

 class CoreLog {
     constructor() {
         
     }

     AddLog(logmessage: string, category = 'default', type = 'log') {
        var t_log = new EWLog({
            createdAt: new Date(),
            message: logmessage,
            category: category,
            type: type
        });
        t_log.save();
     }

     AddPlayerLog(logmessage: string, player: PlayerMp) {
        var t_log = new EWLog({
            createdAt: new Date(),
            message: logmessage,
            category: 'player',
            type: this.PlayerInfo(player,true)
        });
        t_log.save();
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
