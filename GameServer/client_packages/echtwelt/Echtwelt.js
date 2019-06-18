"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: Tim Koepsel
 * @Date: 2019-02-05 20:44:43
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-22 19:37:38
 */
const rpc = require("rage-rpc");
class EchtweltClient {
    constructor() {
        this.InitHud();
        this.InitEvents();
        this.InitLocalPlayer();
        this.Configure();
    }
    Configure() {
        /** Whitelisting
         *
         * If you want to enable Woltlab Whitelisting, change the next config to true
         * Change Whitelisting Configuration in Server Config
         * @ /ServerSource/src/config/modsettings.json
         *
         * WoltlabVerificationKey must be set to a random key defined in WBB-Verify.php
         * WoltlabUrl must be set to the URL of WBB-Verify.php
         *
         * You can download WBB-Verify.php here: https://gt-mp.net/filebase/file/58-wbb-verify/
         */
        this._CFG_EnableWhitelist = false;
    }
    InitLocalPlayer() {
        var player = mp.players.local;
        mp.gui.chat.colors = true;
        mp.nametags.enabled = false;
    }
    InitEvents() {
        mp.events.add('EW-OnReceivePing', (player) => {
            mp.gui.chat.push('Client: Received Ping');
            mp.events.callRemote('Pong');
        });
        mp.events.add('EW-ReceiveHudData', (player) => {
        });
        rpc.register('EW-Vehicle-ChangeDirtlevel', (value) => {
            let t_veh = value.vehicle;
            t_veh.setDirtLevel(value.amount);
        });
        mp.events.add('EW-CarSpawn', () => {
            mp.gui.cursor.show(true, true);
            var player = mp.players.local;
            var cefdata = {
                playerposition: {
                    x: player.position.x,
                    y: player.position.y,
                    z: player.position.z
                },
                carlist: [
                    {
                        Hash: 'rs7',
                        VehicleName: 'Audi RS7',
                        Description: 'Keine Beschreibung vorhanden'
                    },
                    {
                        Hash: 'c63s',
                        VehicleName: 'Mercedes C63 S',
                        Description: 'Keine Beschreibung vorhanden'
                    },
                    {
                        Hash: 'as350',
                        VehicleName: 'LSPD Helikopter',
                        Description: 'Keine Beschreibung vorhanden'
                    },
                    {
                        Hash: 'z4',
                        VehicleName: 'BMW Z4 Cabrio (elektrisches Dach)',
                        Description: 'Keine Beschreibung vorhanden'
                    },
                    {
                        Hash: 'medgs350',
                        VehicleName: 'Lexus GS350 (Medic)',
                        Description: 'Keine Beschreibung vorhanden'
                    },
                    {
                        Hash: 'a6tfsi',
                        VehicleName: 'Audi A6 5.5 TFSI',
                        Description: 'Keine Beschreibung vorhanden'
                    },
                    {
                        Hash: 'dk350z',
                        VehicleName: 'Nissan Z350 Drift',
                        Description: 'Keine Beschreibung vorhanden'
                    },
                    {
                        Hash: 'fbi',
                        VehicleName: 'Mercedes E63 AMG (FiB)',
                        Description: 'Keine Beschreibung vorhanden'
                    },
                    {
                        Hash: 'police3',
                        VehicleName: 'Police 3 LSPD',
                        Description: 'Muss gefixt werden'
                    },
                    {
                        Hash: 'trooper4',
                        VehicleName: 'Mercedes SLS GT Highway Patrol',
                        Description: 'Keine Beschreibung vorhanden'
                    },
                    {
                        Hash: 'police6',
                        VehicleName: 'Mustang GT Police',
                        Description: 'Keine Beschreibung vorhanden'
                    },
                    {
                        Hash: 'police5',
                        VehicleName: 'Jeep Cherokee (Polizei)',
                        Description: 'Keine Beschreibung vorhanden'
                    },
                    {
                        Hash: 'lamven',
                        VehicleName: '2013 Lamborghini Veneno',
                        Description: 'Keine Beschreibung vorhanden'
                    },
                    {
                        Hash: '16ss',
                        VehicleName: 'Chevrolet Camaro SS',
                        Description: 'Keine Beschreibung vorhanden'
                    },
                ]
            };
            this._ClientBrowserCEF = mp.browsers.new('package://echtwelt/CEF/echtwelt.html#/carspawn');
            rpc.callBrowser(this._ClientBrowserCEF, 'ReceiveSpawnData', cefdata).then(result => {
            });
        });
        mp.events.add('EW-Test', (player) => {
            mp.gui.cursor.show(true, false);
            this._ClientBrowserCEF = mp.browsers.new('package://echtwelt/CEF/echtwelt.html#/test');
        });
        mp.events.add('EW-ShowLoginScreen', () => {
            mp.gui.cursor.show(true, true);
            mp.gui.chat.activate(false);
            this._ClientBrowserCEF = mp.browsers.new('package://echtwelt/CEF/echtwelt.html#/login');
        });
        rpc.register('EW-Show-TPA', value => {
            this._ClientBrowserCEF = mp.browsers.new('package://echtwelt/CEF/echtwelt.html#/teleporter');
            mp.gui.cursor.show(true, true);
            mp.gui.chat.activate(false);
            rpc.callBrowser(this._ClientBrowserCEF, 'Teleporter-ReceiveData', value).then(result => {
            });
        });
        rpc.register('EW-Character-Selection', value => {
            mp.gui.cursor.show(true, true);
            mp.gui.chat.activate(false);
            this._ClientBrowserCEF = mp.browsers.new('package://echtwelt/CEF/echtwelt.html#/characterselection');
            rpc.callBrowser(this._ClientBrowserCEF, 'ReceiveCharacterData', value).then(result => {
            });
        });
        rpc.register('EW-Test-Finish', value => {
            mp.gui.cursor.show(false, false);
            this._ClientBrowserCEF.destroy();
        });
        rpc.register('EW-Character-Create', value => {
            mp.gui.cursor.show(false, false);
            mp.gui.chat.activate(true);
            this._ClientBrowserCEF.destroy();
            //mp.events.call('toggleCreator', true);
            mp.events.callRemote('EW-Character-RequestCreate', value);
        });
        rpc.register('EW-CloseBrowser', value => {
            mp.gui.cursor.show(false, false);
            mp.gui.chat.activate(true);
            this._ClientBrowserCEF.destroy();
        });
        rpc.register('EW-Woltlab-Authentication', value => {
            mp.gui.cursor.show(false, false);
            mp.gui.chat.activate(true);
            this._ClientBrowserCEF.destroy();
            if (this._CFG_EnableWhitelist === true) {
                mp.events.callRemote('EW-Woltlab-Login', value);
            }
            else {
                mp.events.callRemote('EW-After-Login', value);
            }
        });
    }
    InitHud() {
        this._ClientHudCEF = mp.browsers.new('package://echtwelt/CEF/echtwelt.html#/playerhud');
    }
}
const echtweltclient = new EchtweltClient();
exports.default = echtweltclient;
//# sourceMappingURL=Echtwelt.js.map