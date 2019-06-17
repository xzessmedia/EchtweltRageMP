"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CorePlayer_1 = require("../CorePlayer");
const rpc = require("rage-rpc");
/*
 * @Author: Tim Koepsel
 * @Date: 2019-02-08 18:01:18
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-18 00:58:17
 */
class CommandHandler {
    constructor() {
    }
    InitCommands() {
        mp.events.addCommand('kill', (player) => {
            player.health = 0;
        });
        mp.events.addCommand('carspawner', (player) => {
            player.call('EW-CarSpawn');
        });
        mp.events.addCommand('tpa', (player) => {
            var playerlist = [];
            mp.players.forEach((item) => {
                playerlist.push({
                    NameTag: item.name,
                    SocialClub: item.socialClub,
                    position: item.position
                });
            });
            var data = {
                relatedPlayer: player,
                players: playerlist,
                locations: [
                    {
                        LocationName: 'Police Department',
                        Position: '19,20,10'
                    }
                ]
            };
            rpc.callClient(player, 'EW-Show-TPA', data);
        });
        mp.events.addCommand('ranktest', (player) => {
            player.call('updateRankBar', [1000, 10000, 500]);
        });
        mp.events.addCommand('position', (player) => {
            player.outputChatBox('Deine aktuelle Position: ' + JSON.stringify(player.position));
        });
        mp.events.addCommand('tp', (player, fulltext, x, y, z) => {
            player.position = new mp.Vector3(parseFloat(x), parseFloat(y), parseFloat(z));
            player.outputChatBox(fulltext);
        });
        mp.events.addCommand('rathaus', (player) => {
            player.position = new mp.Vector3(-629.3146, 316.0263, 81.64656);
            player.outputChatBox('Du teleportierst dich nach ' + JSON.stringify(player.position));
        });
        mp.events.addCommand('car', (player, vehicle) => {
            player.outputChatBox('Du spawnst ein Fahrzeug');
            var t_vehicle = mp.vehicles.new(vehicle, player.position);
            t_vehicle.numberPlate = 'EWReborn';
            player.putIntoVehicle(t_vehicle, -1);
        });
        mp.events.addCommand('testcar', (player, vehicle) => {
            for (let index = 0; index < 50; index++) {
                player.outputChatBox('Du spawnst Fahrzeug Nr. ' + index);
                var t_vehicle = mp.vehicles.new(vehicle, player.position);
                t_vehicle.numberPlate = 'EW' + index;
            }
        });
        mp.events.addCommand('test', (player) => {
            player.outputChatBox('~g~Beginne Test Szenario CEF. ~b~Wenn man auf den Button klickt sollte CEF schliessen Server->Client->CEF->Client');
            player.call('EW-Test');
        });
        mp.events.addCommand('weapon', (player) => {
            player.giveWeapon(3220176749, 1000);
            player.notify('Du spawnst dir ~g~ Assault Rifle');
        });
        mp.events.addCommand('knall', (player, name) => {
            mp.players.forEach((target) => {
                if (target.name === name) {
                    player.notify('Ziel gefunden...');
                    target.setClothes(0, 1, 1, 1);
                }
            });
        });
        mp.events.addCommand('rem', (player) => {
            mp.vehicles.forEachInRange(player.position, 15, (entity) => {
                entity.destroy();
            });
            player.notify('Fahrzeuge wurden ~r~entfernt');
        });
        mp.events.addCommand('revive', (player) => {
            mp.players.forEachInRange(player.position, 3, (targetplayer) => {
                targetplayer.health = 100;
                CorePlayer_1.default.Revive(targetplayer);
                player.notify('Du wirst geheilt..');
            });
        });
        mp.events.addCommand('ping', (player) => {
            player.call('EW-OnReceivePing');
        });
    }
}
const Commands = new CommandHandler();
exports.default = Commands;
//# sourceMappingURL=commands.js.map